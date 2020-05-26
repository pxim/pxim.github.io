---
title: 【转】JS判断SWF,JPG加载完毕、兼…
date: 2014-07-29 10:38:09
tags: 
categories: HTML CSS JavaScript
---

<!--more-->


<div id="sina_keyword_ad_area2" class="articalContent   newfont_family">
<div style="">
<h2 style="font-size:20px; font-family:tahoma,helvetica,'microsoft yahei',arial; float:left; font-weight:normal; color:rgb(69,69,69); padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px 0px 10px; padding-right:0px">
JS判断SWF,JPG加载完毕、兼容（Activex,plugIn）所有浏览器</h2>
</div>
<div style="">
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
这里主要说下监听SWF的加载。<br>
</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
网上流传已久的监听方法，只能在IE（Activex插件下）下实现。在使用plugin的浏览器下无法监听。</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
<br>
</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
首先贴张&nbsp;<wbr>chrome下载图</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
<img title="" src="http://simg.sinajs.cn/blog7style/images/common/sg_trans.gif" name="image_operate_34031406250906205" alt="【转】JS判断SWF,JPG加载完毕、兼容（Activex,plugIn）所有浏览器" style="margin-bottom:8px; max-width:758px; border-top:0px; border-right:0px; vertical-align:top; border-bottom:0px; clear:both; border-left:0px"></p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
<br>
</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
<br>
</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
这里提供一个可以监听所有浏览器的方式:</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
原作者在这里：<a target="_blank" href="http://blog.sebastian-martens.de/2010/05/preload-assets-with-load-complete-callback-for-single-assets-include-swfflash/" target="_blank">http://blog.sebastian-martens.de/2010/05/preload-assets-with-javascript-load-complete-callback-for-single-assets-include-swfflash/</a>&nbsp;<wbr></p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
<br>
</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
我修改后方便阅读使用的使用的版本：（20140718更新了以下失效链接）</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
<a target="_blank" href="http://115.com/file/an2apn9y#jsLoadSwf.rar" target="_blank"></a><a target="_blank" title="" href="http://pan.baidu.com/s/1sjLhJIH" target="_blank">http://pan.baidu.com/s/1sjLhJIH</a>&nbsp;<wbr>&nbsp;<wbr><br>
</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
<span style="color:rgb(0,176,80)"><span style="font-family:Tahoma">注意我加载的SWF在我的空间，跨域以及本地都无法调用。请自行修改HTML中加载SWF的路径，并不要使用&nbsp;<wbr>file://来访问。</span></span></p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
<br>
</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
你可以在我的网站查看效果</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
<a target="_blank" href="http://luoee.com/lab/jsloadswf/" target="_blank">http://luoee.com/lab/jsloadswf/</a>&nbsp;<wbr>&nbsp;<wbr>本人小站暂时关闭<br>
</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
<br>
</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
原理说明：</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
看了下作者的文件简单来说：还是使用了JS与一个loader的swf来完成监听的。</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
通过JS将要加载的文件地址传输给这个事先制作好的loader,通过这个swf来加载文件，同时监听加载完成时，调用JS来抛出事件。</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
这个demo不会显示出swf，只是用来监听使用。如果你的网站有很多swf(小游戏网站)，那么你可以这样来实现：</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
1&nbsp;<wbr>制作一个loading等待的图片（可以是广告图等）</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
2&nbsp;<wbr>等到监听到加载完毕时，关闭loading&nbsp;<wbr>,再重新使用你自己的代码来加载SWF并显示。（这时将会从缓存读取，注意safari最大缓存的单个文件是5M&nbsp;<wbr>至少目前是这么大）</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
<br>
</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
也许你要问为什么不直接用它的方式来显示呢？</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
当让你需要修改它的代码，这个对很多人来说有一点难度吧，另外如果你加载SWF与页面有数据交互的话使用它的方式可能会失效！</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
<br>
</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
如果你对FLASH和js都有一定了解，那么你也可以自己写一个loader,来实现这些功能。当然你在制作这个loader的时候可以跟具你自己的需求来自定义，这样就不需要再有上面的第2步了。</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
<br>
</p>
<p style="padding-bottom:0px; padding-top:0px; padding-left:0px; margin:0px; padding-right:0px">
我在这里就不在新制作一个了。如果公司后期有需求，我再制作一下！并共享出来！</p>
</div>
</div>
