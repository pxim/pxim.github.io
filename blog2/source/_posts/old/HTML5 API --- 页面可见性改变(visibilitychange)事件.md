---
title: HTML5 API --- 页面可见性改变(visibilitychange)事件
date: 2016-03-08 18:00:03
tags: 
categories: HTML CSS JavaScript
---

<!--more-->


<span style="">[摘要：[本文属本创，若有转载，请说明出处http://blog.csdn.net/yl02520/article/] visibilitychange事情是扫瞄器新增加的一个事情，当扫瞄器的某个标签页切换到背景，或从背景切换到前台时便会触收该]<span>&nbsp;</span></span><br style="">
<br style="">
<p style="">[本文属原创，如有转载，请注明出处http://blog.csdn.net/yl02520/article/]<br>
</p>
<p style="">visibilitychange事件是浏览器新添加的一个事件，当浏览器的某个标签页切换到后台，或从后台切换到前台时就会触发该消息，现在主流的浏览器都支持该消息了，例如Chrome, Firefox, IE10等。虽然这只是一个简单的功能，但是能够广大的采用HTML5开发游戏的开发者提供方便，比如用户正在玩游戏时，突然切换到后台去发一条短信或打一个电话，再切换到游戏，那么开发者就需要捕捉对这些突发情形进行处理，当游戏切换到后台时就暂停游戏，从后台切换回来时，又能允许用户继续游戏。</p>
<p style="">下面是一个简单的实例代码，当应用程序或浏览器标签页切换到后台时就停止播放音乐，从后台切换回来时又开始播放音乐。</p>
<p style=""></p>
<pre style="">&lt;html&gt;
&lt;body onload=&quot;load()&quot;&gt;
&lt;audio id=&quot;audio_id&quot;&gt;
&lt;source src=&quot;demo-audio.mp3&quot;/&gt;
&lt;source src=&quot;demo-audio.ogg&quot;/&gt;
Browser can't support Audio tag.
&lt;/audio&gt;
&lt;script&gt;
var audioElement = document.getElementById(&quot;audio_id&quot;);
function onVisibilityChanged(event) {
  var hidden = event.target.webkitHidden;
  if (hidden)
    audioElement.pause();
  else
    audioElement.play();
}
function load() {
  audioElement.play();
  audioElement.loop = true;
  document.addEventListener(&quot;webkitvisibilitychange&quot;, onVisibilityChanged, false);
}
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
<span style="">注意：现在某些浏览器还保留了visibilitychange的前缀，例如Chrome浏览器还保留着webkit前缀，不过该事件已经趋于稳定，在Chrome 33及以后就去掉了前缀，直接使用visibilitychange，这里只是一个简单的实例程序，大家可以针对这个程序做简单修改，兼容更多的浏览器。</span>
