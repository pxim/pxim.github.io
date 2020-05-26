---
title: 使用jQuery播放/暂停 HTML5视频
date: 2018-08-14 13:23:00
tags: video jQuery 播放暂停
categories: HTML CSS JavaScript
---

<!--more-->

<p>我尝试用jQuery控制HTML5视频，两个视频分别在两个tab中，我希望点中tab后，该tab里的视频可以立即播放，而另外tab里的视频能够停止。<br />
我的代码是这样的：</p>

<pre class="has">
<code class="language-javascript">$('#playMovie1').click(function(){
$('#movie1').play();
});</code></pre>

<p>发现这样不行，而用以下的js是可以的：</p>

<pre class="has">
<code class="language-javascript">document.getElementById('movie1').play();</code></pre>

<p><span style="color:#f33b45;"><strong>解决方法：</strong></span><br />
play并不是jQuery的函数，而是DOM元素的函数，所以我们需要通过DOM来调用play，代码如下：</p>

<pre class="has">
<code class="language-javascript">$('#videoId').get(0).play();</code></pre>

<p><span style="color:#f33b45;"><strong>最简单的方法实现Play和Pause:</strong></span></p>

<pre class="has">
<code class="language-javascript">$('video').trigger('play');
$('video').trigger('pause');</code></pre>

<p><span style="color:#f33b45;"><strong>点击视频就能播放和暂停</strong></span></p>

<pre class="has">
<code class="language-javascript">$("video").trigger("play");//for auto play
$("video").addClass('pause');//for check pause or play add a class
$('video').click(function() {
if ($(this).hasClass('pause')) {
$("video").trigger("play");
$(this).removeClass('pause');
$(this).addClass('play');
} else {
$("video").trigger("pause");
$(this).removeClass('play');
$(this).addClass('pause');
}
})</code></pre>

<p><span style="color:#f33b45;"><strong>静音和取消静音</strong></span></p>

<pre class="has">
<code class="language-javascript">$('body').find("video").attr('id', 'video')
var myVid = document.getElementById("video");
$('.sound-icon').click(function() {
//here "sound-icon" is a anchor class. 
var sta = myVid.muted;
if (sta == true) {
myVid.muted = false;
} else {
myVid.muted = true;
}
})</code></pre>

<p><span style="color:#f33b45;"><strong>HTML 5中播放视频的方法：</strong></span></p>

<pre class="has">
<code class="language-javascript">&lt;video width="640" height="360" src="http://www.youtube.com/demo/google_main.mp4" controls autobuffer&gt;
&lt;p&gt; Try this page in Safari 4! Or you can 
&lt;a href="http://www.youtube.com/demo/google_main.mp4"&gt;download the video&lt;/a&gt; instead.&lt;/p&gt;
&lt;/video&gt;</code></pre>

<p><span style="color:#f33b45;"><strong>自动播放：</strong></span></p>

<pre class="has">
<code class="language-javascript">&lt;video src="abc.mov" autoplay&gt;
&lt;/video&gt;</code></pre>

<p><span style="color:#f33b45;"><strong>使用poster在视频无法加载时显示图片：</strong></span></p>

<pre class="has">
<code class="language-javascript">&lt;video width="640" height="360" src="http://www.youtube.com/demo/google_main.mp" autobuffer controls poster="whale.png"&gt;
&lt;p&gt;Try this page in Safari 4! Or you can &lt;a href="http://www.youtube.com/demo/google_main.mp4"&gt;download the video&lt;/a&gt; instead.&lt;/p&gt;
&lt;/video&gt;</code></pre>

<p><span style="color:#f33b45;"><strong>一个比较简洁的例子：</strong></span></p>

<pre class="has">
<code class="language-javascript">&lt;script type="text/javascript"&gt;
function vidplay() {
var video = document.getElementById("Video1");
var button = document.getElementById("play");
if (video.paused) {
video.play();
button.textContent = "||";
} else {
video.pause();
button.textContent = "&gt;";
}
}
function restart() {
var video = document.getElementById("Video1");
video.currentTime = 0;
}
function skip(value) {
var video = document.getElementById("Video1");
video.currentTime += value;
} 
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;video id="Video1" &gt;
// Replace these with your own video files. 
&lt;source src="demo.mp4" type="video/mp4" /&gt;
&lt;source src="demo.ogv" type="video/ogg" /&gt;
HTML5 Video is required for this example. 
&lt;a href="demo.mp4"&gt;Download the video&lt;/a&gt; file. 
&lt;/video&gt;
&lt;div id="buttonbar"&gt;
&lt;button id="restart" onclick="restart();"&gt;[]&lt;/button&gt; 
&lt;button id="rew" onclick="skip(-10)"&gt;&amp;lt;&amp;lt;&lt;/button&gt;
&lt;button id="play" onclick="vidplay()"&gt;&amp;gt;&lt;/button&gt;
&lt;button id="fastFwd" onclick="skip(10)"&gt;&amp;gt;&amp;gt;&lt;/button&gt;
&lt;/div&gt;</code></pre>

<p><br /><span style="color:#f33b45;"><strong>下面是一个比较完整的例子：</strong></span></p>

<pre class="has">
<code class="language-javascript">&lt;html &gt;
&lt;head&gt;
&lt;title&gt;Full player example&lt;/title&gt;
&lt;!-- Uncomment the following meta tag if you have issues rendering this page on an intranet or local site. --&gt; 
&lt;!-- &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"/&gt; --&gt;
&lt;script type="text/javascript"&gt;
function init() { // Master function, encapsulates all functions
var video = document.getElementById("Video1"); 
if (video.canPlayType) { // tests that we have HTML5 video support
// if successful, display buttons and set up events
document.getElementById("buttonbar").style.display = "block"; 
document.getElementById("inputField").style.display = "block";
// helper functions
// play video
function vidplay(evt) {
if (video.src == "") { // inital source load
getVideo();
}
button = evt.target; // get the button id to swap the text based on the state 
if (video.paused) { // play the file, and display pause symbol
video.play();
button.textContent = "||";
} else { // pause the file, and display play symbol 
video.pause();
button.textContent = "&gt;";
}
}
// load video file from input field
function getVideo() {
var fileURL = document.getElementById("videoFile").value; // get input field 
if (fileURL != "") {
video.src = fileURL;
video.load(); // if HTML source element is used
document.getElementById("play").click(); // start play
} else {
errMessage("Enter a valid video URL"); // fail silently
}
}
  
// button helper functions 
// skip forward, backward, or restart
function setTime(tValue) {
// if no video is loaded, this throws an exception 
try {
if (tValue == 0) {
video.currentTime = tValue;
}
else {
video.currentTime += tValue;
}
 
} catch (err) {
// errMessage(err) // show exception
errMessage("Video content might not be loaded");
}
}
// display an error message 
function errMessage(msg) {
// displays an error message for 5 seconds then clears it
document.getElementById("errorMsg").textContent = msg;
setTimeout("document.getElementById('errorMsg').textContent=''", 5000);
}
// change volume based on incoming value 
function setVol(value) {
var vol = video.volume;
vol += value;
// test for range 0 - 1 to avoid exceptions
if (vol &gt;= 0 &amp;&amp; vol &lt;= 1) {
// if valid value, use it
video.volume = vol;
} else {
// otherwise substitute a 0 or 1
video.volume = (vol &lt; 0) ? 0 : 1; 
}
}
// button events 
// Play
document.getElementById("play").addEventListener("click", vidplay, false);
// Restart
document.getElementById("restart").addEventListener("click", function () {
setTime(0);
}, false);
// Skip backward 10 seconds
document.getElementById("rew").addEventListener("click", function () {
setTime(-10);
}, false);
// Skip forward 10 seconds
document.getElementById("fwd").addEventListener("click", function () {
setTime(10);
}, false);
// set src == latest video file URL
document.getElementById("loadVideo").addEventListener("click", getVideo, false);
// fail with message 
video.addEventListener("error", function (err) {
errMessage(err);
}, true);
// volume buttons
document.getElementById("volDn").addEventListener("click", function () {
setVol(-.1); // down by 10%
}, false);
document.getElementById("volUp").addEventListener("click", function () {
setVol(.1); // up by 10%
}, false);
// playback speed buttons
document.getElementById("slower").addEventListener("click", function () {
video.playbackRate -= .25;
}, false);
document.getElementById("faster").addEventListener("click", function () {
video.playbackRate += .25;
}, false);
document.getElementById("normal").addEventListener("click", function () {
video.playbackRate = 1;
}, false);
document.getElementById("mute").addEventListener("click", function (evt) {
if (video.muted) {
video.muted = false;
evt.target.innerHTML = "&lt;img alt='volume on button' src='vol2.png' /&gt;"
} else {
video.muted = true;
evt.target.innerHTML = "&lt;img alt='volume off button' src='mute2.png' /&gt;"
}
}, false);
} // end of runtime
}// end of master 
&lt;/script&gt;
 
&lt;/head&gt;
&lt;body onload="init();" &gt; 
 
&lt;video id="Video1" controls style="border: 1px solid blue;" height="240" width="320" title="video element"&gt; 
HTML5 Video is required for this example
&lt;/video&gt;
 
&lt;div id="buttonbar" style="display: none;")&gt;
&lt;button id="restart" title="Restart button"&gt;[]&lt;/button&gt; 
&lt;button id="slower" title="Slower playback button"&gt;-&lt;/button&gt; 
&lt;button id="rew" title="Rewind button" &gt;&amp;lt;&amp;lt;&lt;/button&gt;
&lt;button id="play" title="Play button"&gt;&amp;gt;&lt;/button&gt;
&lt;button id="fwd" title="Forward button" &gt;&amp;gt;&amp;gt;&lt;/button&gt;
&lt;button id="faster" title="Faster playback button"&gt;+&lt;/button&gt;
&lt;button id="Button2" title="Mute button" &gt;&lt;img alt="Volume on button" src="vol2.png" /&gt;&lt;/button&gt; 
&lt;br /&gt;
&lt;label&gt;Playback &lt;/label&gt;
&lt;label&gt;Reset playback rate: &lt;/label&gt;&lt;button id="normal" title="Reset playback rate button"&gt;=&lt;/button&gt; 
 
&lt;label&gt; Volume &lt;/label&gt;
&lt;button id="volDn" title="Volume down button"&gt;-&lt;/button&gt;
&lt;button id="volUp" title="Volume up button"&gt;+&lt;/button&gt;
&lt;button id="mute" title="Mute button" &gt;&lt;img alt="Volume on button" src="vol2.png" /&gt;&lt;/button&gt; 
&lt;/div&gt; 
&lt;br/&gt; 
&lt;div id= "inputField" style="display:none;" &gt;
&lt;label&gt;Type or paste a video URL: &lt;br/&gt;
&lt;input type="text" id="videoFile" style="width: 300px;" title="video file input field" value="http://ie.microsoft.com/testdrive/ieblog/2011/nov/pp4_blog_demo.mp4" /&gt; 
&lt;button id="loadVideo" title="Load video button" &gt;Load&lt;/button&gt;
&lt;/label&gt;
&lt;/div&gt;
&lt;div title="Error message area" id="errorMsg" style="color:Red;"&gt;&lt;/div&gt; 
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>转至：<a href="http://blog.okbase.net/jquery2000/archive/4485.html">http://blog.okbase.net/jquery2000/archive/4485.html</a></p>

<p>video原生事件：<a href="https://www.jianshu.com/p/a41f4d9c8bc8">https://www.jianshu.com/p/a41f4d9c8bc8</a></p>