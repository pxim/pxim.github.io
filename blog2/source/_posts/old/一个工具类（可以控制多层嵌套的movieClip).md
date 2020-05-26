---
title: 一个工具类（可以控制多层嵌套的movieClip)
date: 2014-07-29 10:35:37
tags: Flash ActionScript3
categories: Flash Flex ActionScript
---

<!--more-->


<div id="sina_keyword_ad_area2" class="articalContent   "><strong><span style="font-family:Tahoma; color:#333333">好多人也应该遇到和我一样的问题，当设计师给了我们一个多层嵌套的movieClip时，我们在写代码时无法将movieClip完全停止掉，主要是基于好多movieClip有深层嵌套，主时间轴不在最上层导致的，所以基于这个原因写了下面的类。<br style="word-wrap:break-word">
<br style="word-wrap:break-word">
看代码：（有很详细的注释）</span></strong>
<div style="">
<div style="word-wrap:break-word">
<ol style="word-wrap:break-word; padding-bottom:0px!important; padding-top:0px!important; padding-left:0px!important; margin:0px 0px 0px 10px; padding-right:0px!important">
<li style="">package com.sina.utils<span style="font-family:Consolas"><span>&nbsp;<wbr></span><br style="word-wrap:break-word">
</span></li><li style="">{<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> import flash.display.MovieClip;<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr><span style="font-family:Consolas"><span>&nbsp;<wbr></span><br style="word-wrap:break-word">
</span></li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr><br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> public class MovieClipManage<span style="font-family:Consolas"><span>&nbsp;<wbr></span><br style="word-wrap:break-word">
</span></li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> {<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> private var_target:MovieClip;<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> private var_type:String;<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr><span style="font-family:Consolas"><span>&nbsp;<wbr></span><br style="word-wrap:break-word">
</span></li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr><br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> public functionMovieClipManage(mc:MovieClip = null)<span style="font-family:Consolas"><span>&nbsp;<wbr></span><br style="word-wrap:break-word">
</span></li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> {<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr> _target =mc;<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> }<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr><span style="font-family:Consolas"><span>&nbsp;<wbr></span><br style="word-wrap:break-word">
</span></li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> private functiongoto(mc:MovieClip, frame:int = 0):void<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> {<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr> if(!(mc isMovieClip))<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>{<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> throw new Error(&quot;MovieClipManage:::目标不是movieClip&quot;);<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> return;<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>}<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr> frame &gt;0 ?&nbsp;<wbr>&nbsp;<wbr>mc[_type](frame):&nbsp;<wbr>&nbsp;<wbr>mc[_type]();<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr><span style="font-family:Consolas"><span>&nbsp;<wbr></span><br style="word-wrap:break-word">
</span></li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr> if(mc.numChildren &gt; 0)<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>{<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> for (var i:int = 0; i &lt; mc.numChildren; i&#43;&#43;)<span style="font-family:Consolas"><span>&nbsp;<wbr></span><br style="word-wrap:break-word">
</span></li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>{<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> if (mc.getChildAt(i) asMovieClip)<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> {<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>goto(mc.getChildAt(i) as MovieClip, frame);<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> }<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> }<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>}<span style="font-family:Consolas"><span>&nbsp;<wbr></span><br style="word-wrap:break-word">
</span></li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr><span style="font-family:Consolas"><span>&nbsp;<wbr></span><br style="word-wrap:break-word">
</span></li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> }<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr><span style="font-family:Consolas"><span>&nbsp;<wbr></span><br style="word-wrap:break-word">
</span></li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr>//--------------------API---------------------------------<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr><br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> public functionpause(target:MovieClip = null):void<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> {<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr> _type =&quot;stop&quot;;<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr> target =target || _target;<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>goto(target);<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> }<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr><span style="font-family:Consolas"><span>&nbsp;<wbr></span><br style="word-wrap:break-word">
</span></li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr><br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> public functionplay(target:MovieClip = null):void<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> {<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr> _type =&quot;play&quot;;<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr> target =target || _target;<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>goto(target);<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> }<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr><span style="font-family:Consolas"><span>&nbsp;<wbr></span><br style="word-wrap:break-word">
</span></li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr><br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> public functionstop(target:MovieClip = null):void<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> {<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr> _type =&quot;gotoAndStop&quot;;<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr> target =target || _target;<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>goto(target, 1);<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> }<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr><span style="font-family:Consolas"><span>&nbsp;<wbr></span><br style="word-wrap:break-word">
</span></li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr><br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> public functionreplay(target:MovieClip = null):void<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> {<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr> _type =&quot;gotoAndPlay&quot;;<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr> target =target || _target;<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>goto(target, 1);<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> &nbsp;<wbr> }<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr> }<br style="word-wrap:break-word">
</li><li style="">&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr><span style="font-family:Consolas"><span>&nbsp;<wbr></span><br style="word-wrap:break-word">
</span></li><li style="">}</li></ol>
</div>
<em style="word-wrap:break-word; font-size:12px; color:rgb(51,102,153)!important; font-style:normal; margin-left:43px">复制代码</em></div>
<span style="">//---------------------------------------------------------------------</span><br style="">
<br style="">
<span style="">实现原理：主要用到了递归的原理来循环找到底层的movieClip原件，然后执行相应的操作来达到将所有嵌套的原件</span><strong style=""><span style="color:#ff0000; word-wrap:break-word">暂停</span></strong><span style="">，重播等功能。</span><br style="">
<span style="">原文地址：</span><a target="_blank" href="http://www.99ria.com/blog/?p=230" target="_blank">http://www.99ria.com/blog/?p=230</a></div>
