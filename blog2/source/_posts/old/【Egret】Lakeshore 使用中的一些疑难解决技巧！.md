---
title: 【Egret】Lakeshore 使用中的一些疑难解决技巧！
date: 2016-03-14 13:29:47
tags: Egret TypeScript JavaScript Html5
categories: Egret
---

<!--more-->


<div style="top:0px">&#65279;用Lakeshore 1.2.1版本发布的html，会出现一些用户不想要的东西，下面讲讲如何去掉：</div>
<p><strong>一、问题：游戏或者动画在PC端也能跟随游览器自适应。</strong></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;解决方法：①找到发布文件下的 &nbsp;egret_loader.js 文件，然后用dw或者记事本打开。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;② 然后找到如图所示：</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img alt="" src="https://img-blog.csdn.net/20160314131849311?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center"></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 把红框处的 NO_SCALE 改成 SHOW_ALL ，就可以了，记得保存。</p>
<p><strong>二、问题：去除自带的二维码</strong></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 解决方法：①找到发布文件下的&nbsp;&nbsp;index.html 文件，然后用dw或者记事本打开。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ②然后找到如图所示：</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img alt="" src="https://img-blog.csdn.net/20160314132835706?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center"></p>
<p>&nbsp;把红框内的内容全部删掉，切记红框外的别删，然后保存，就可以去掉二维码了。</p>
<p><strong>三、问题：去除或者换掉 加载界面的 白鹭logo图片</strong></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;解决方法：①找到发布文件，然后resource\assets文件夹下的&nbsp;&nbsp;egret_icon.png 文件，替换此图片就可以了</p>
<p><br>
</p>
<div style="top:732px">&#65279;&#65279;</div>
