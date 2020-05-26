---
title: 【Egret】里使用audio标签达到默认播放背景音乐
date: 2016-05-09 19:50:03
tags: Egret TypeScript JavaScript Html5 audio
categories: Egret
---

<!--more-->


<pre code_snippet_id="1676580" snippet_file_name="blog_20160509_1_3227696"  code_snippet_id="1676580" snippet_file_name="blog_20160509_1_3227696" class="javascript" name="code">&lt;audio id=&quot;bgmMusic&quot; style=&quot;position:absolute;&quot; src=&quot;resource/assets/Sound/load.mp3?v=&lt;?=$ver?&gt;&quot; autoplay='autoplay' loop=&quot;loop&quot;&gt;你的浏览器不支持audio标签。&lt;/audio&gt;  

function setBgm(play){
	var bgm = document.getElementById('bgmMusic');
	if(play){
		bgm.play();
	}else{
		bgm.pause();
	}
}

setBgm(true);</pre>
<p>这段代码，写在egret项目里的index.html文件里，audio标签这句代码，写在body标签下；下面的函数写在script标签里；可以直接在这边操作函数</p>
<p>也可以在egret里通过 window[&quot;setBgm&quot;](true) 方法来控制，</p>
<p><img alt="" src="https://img-blog.csdn.net/20160510103014585?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center"></p>
<p><img alt="" src="https://img-blog.csdn.net/20160510103109049?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center"></p>
<p><br>
</p>
<p><strong>HTML 5 Audio属性</strong></p>
<ol>
<li>autoplay:唯一可选&#20540;为autoplay，出现autoplay属性并准确赋&#20540;时，音频将会自动播放</li><li>controls：唯一可选&#20540;为controls，出现controls属性并准确赋&#20540;时，音频播放控件将会显示，控件包括：播放、暂停、定位、音量、全屏切换、字幕（如果可用）、音轨（如果可用）。</li><li>loop：唯一可选&#20540;为loop，出现loop属性并准确赋&#20540;时，音频将会循环播放。</li><li>preload：可选&#20540;有auto(当页面加载后载入整个音频)、meta(当页面加载后只载入元数据)和none(当页面加载后不载入音频) 如果设置了前面的autoplay属性，那么preload将会被忽略。</li><li>src：指定音频URL地址，可以是相对的URL也可以是绝对的URL 当然还可以像第2和第3个例子一样，用source标签来指定源。</li></ol>
<p>HTML5的Audio标签使用详解，参考：<a target="_blank" target="_blank" href="http://www.5icool.org/a/201306/a1907.html">http://www.5icool.org/a/201306/a1907.html</a><br>
</p>
<div style="top:0px">&#65279;&#65279;</div>
<div style="top:0px">&#65279;&#65279;</div>
