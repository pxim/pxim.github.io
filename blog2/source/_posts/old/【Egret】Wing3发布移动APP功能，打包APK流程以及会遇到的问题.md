---
title: 【Egret】Wing3发布移动APP功能，打包APK流程以及会遇到的问题
date: 2016-06-20 10:19:37
tags: Egret 移动 app apk
categories: Egret
---

<!--more-->


<p>流程：1.安装好wing 3，然后 插件——Egret项目工具——发布移动APP——Build android native project</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img alt="" src="https://img-blog.csdn.net/20160620103736595?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center"></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.配置发布环境：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; Android</p>
<ul>
<li>1.egret engine <a target="_blank" href="http://www.egret.com/products/engine.html" target="_blank">
点击下载</a> </li><li>2.android sdk <a target="_blank" href="http://pan.baidu.com/s/1dD8WUL7" target="_blank">
mac版下载</a> <a target="_blank" href="http://pan.baidu.com/s/1gdsDRn9" target="_blank">
windows版下载</a></li><li>3.java sdk <a target="_blank" href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank">
mac版下载</a> <a target="_blank" href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank">
windows版下载</a></li><li>4.ant <a target="_blank" href="http://ant.apache.org/bindownload.cgi" target="_blank">
点击下载</a></li><li>5.egret-android-support <a target="_blank" href="http://www.egret.com/products/products-others.html#egret-support" target="_blank">
点击下载</a></li><li></li></ul>
<p>配置图：<img src="https://img-blog.csdn.net/20160630114235440?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" alt=""></p>
<p><br>
</p>
<p><span style="color:#ff0000">可能会遇到的问题：</span></p>
<p><span style="color:#990000">1.问题：提示资源名字错误‘</span></p>
<p>&nbsp;解决方法：所resource目录下的所有资源，包括：图片，音乐，视频，xml等不能有中文，特殊符号，空&#26684;等，必须英文命名：</p>
<p><br>
</p>
<p><span style="color:#990000">2.问题：雪碧图的png图片不规范</span></p>
<p>&nbsp; 解决方法：重新导出雪碧图，直到图片&#26684;式正确为止；</p>
<p><span style="color:#990000"><br>
</span></p>
<p><span style="color:#990000">3.问题：ERROR：SWT folder &quot;&quot; does not exist.</span></p>
<p>Please set ANDROID_SWT to point to the folder containing swt.jar for your platform</p>
<p>&nbsp;如下图错误，原因是没有正确配置JAVA的环境变量</p>
<div class="audio-wp audio-wp-1" style="display:inline-block"><span class="audio-inner"><span class="audio-icon"></span><span class="audio-icon-2"></span></span></div>
<p><img width="300" alt="" src="http://bbs.egret.com/forum.php?mod=image&amp;aid=11746&amp;size=300x300&amp;key=c7ccd989ef5273f2&amp;nocache=yes&amp;type=fixnone&amp;ramdom=rN1Gm" border="0"></p>
<p>&nbsp;解决方法：按照这个教程的流程走一遍就OK了,<a target="_blank" href="http://jingyan.baidu.com/article/f96699bb8b38e0894e3c1bef.html" target="_blank">http://jingyan.baidu.com/article/f96699bb8b38e0894e3c1bef.html</a></p>
<p><br>
</p>
<p><span style="color:#990000">4.问题：d:EgretProjects/apptest/MaintainPlan2_android/MaintainPlan2/proj.android is not a valid project(AndroidManifest.xml not found)</span></p>
<p>出现 如下图所示，提示缺少AndroidManifest.xml这个文件</p>
<p><img width="300" alt="" src="http://bbs.egret.com/forum.php?mod=image&amp;aid=11748&amp;size=300x300&amp;key=0295ae3346f6f17b&amp;nocache=yes&amp;type=fixnone&amp;ramdom=YJ1GI" border="0"></p>
<p>解决方法：新建一个Game项目，然后用这个项目发布一次app，成功后，再发布原理的项目，基本就会成功了。</p>
<p><br>
</p>
<p><span style="color:#990000">5.问题：本地有视频文件的，发布APP不成功，错误，如下图所示：</span></p>
<p><img alt="" src="https://img-blog.csdn.net/20160620101852572?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center"></p>
<p>解决方法：</p>
<p>①.项目名字不能带特殊字符，不能是数字开头，如“120-media-video”，这样子不行。</p>
<p>②.要用最新版本的Egret Engine和Egret Android Support</p>
<p>③.egret engine 3.1.2版本的egret.video不支持webGL模式，要改成canvas模式</p>
<p><br>
</p>
<div style="top:0px"><span style="color:#990000">6.问题：apk界面，固定横屏问题，</span></div>
<div style="top:0px">&nbsp;解决方法：在wing里修改屏幕横竖模式没有作用，要在发布的时候生成的android项目里改，找到AndroidManifest.xml文件，打开，修改<br>
</div>
<div style="top:0px"><span class="pln">android</span><span class="pun">:</span><span class="pln">screenOrientation</span><span class="pun">=</span><span class="str">&quot;landscape&quot;，然后用eclipse打开这个<span class="pln">android项目，编译生成apk</span></span>&#65279;&#65279;<br>
</div>
<div style="top:259px">具体参考文章：<a target="_blank" href="http://edn.egret.com/cn/docs/page/820" target="_blank">http://edn.egret.com/cn/docs/page/820</a></div>
<div style="top:259px"><br>
</div>
<div style="top:259px"><span style="color:#990000">7.问题：apk图标替换</span></div>
<div style="top:259px">&nbsp;解决方法：将项目中的res下和drawable有关的图片换掉就可以了</div>
<div style="top:259px"><br>
</div>
<div style="top:259px"><span style="color:#990000">8.问题：apk名字更换</span></div>
<div style="top:259px">解决方法：首先找到对应安卓项目下的AndroidManifest.xml文件，首先确定这个xml的编码&#26684;式是 utf-8，不是的话修改成 &lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;，不然app命名中文会出问</div>
<div style="top:259px">&nbsp;方法①，在AndroidManifest.xml里按照下图所示方法更改，改好之后，然后再用eclipse编译，打包apk就行了。&#65279;&#65279;</div>
<div style="top:0px"><img alt="" src="https://img-blog.csdn.net/20160624144552130?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center"></div>
<div style="top:0px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </div>
<div style="top:0px">方法 ②点击 &nbsp;插件——Egret项目工具——发布移动APP——Settings，修改里面的名字，如下图，不过wing3.1.1，这个功能好像有BUG，暂时修改这个没有用，方法一管用。</div>
<div style="top:0px">&#65279;&#65279;</div>
<div style="top:880px"><img alt="" src="https://img-blog.csdn.net/20160624145002532?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center"></div>
<div style="top:880px"><br>
</div>
<div style="top:880px"><span style="color:#990000">9.问题：手动删除了对应的安卓项目，导致IDE在按照已有记录的路径去查找项目时失败。</span></div>
<div style="top:880px">&nbsp;&nbsp; 解决方法：打开wing的项目，打开 egretProperties.json 文件，然后按下图操作</div>
<div style="top:880px"><img alt="" src="https://img-blog.csdn.net/20160624150845327?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center"></div>
<p><br>
</p>
<div style="top:880px">&#65279;&#65279;</div>
<div style="top:930px">&#65279;&#65279;</div>
<div style="top:985px">&#65279;&#65279;</div>
<div style="top:1064px">&#65279;&#65279;</div>
<div style="top:1139px">&#65279;&#65279;</div>
<div style="top:2184px">&#65279;&#65279;</div>
