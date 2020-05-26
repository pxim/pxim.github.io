---
title: 【CreateJS】WebStorm+Adobe Animate CC 搭配开发HTML5，入门教程
date: 2016-07-26 11:03:51
tags: Html5 JavaScript 编程 CreateJS
categories: CreateJS
---

<!--more-->

<p>目的：动画设计师用Adobe Animate CC做好动画素材，发布好之后，交给程序员写交互代码；在WebStorm之类的ide里操纵 Animate 里面的变量，class等。</p>

<p> </p>

<p>前提环境：</p>

<p>①安装好Adobe Animate CC</p>

<p>②安装好WebStorm，或者Sublime Text 2，Visual Studio Code之类的编程ide</p>

<p>③有个HTML5 动画（canvas 项目）</p>

<p><strong>视频教程：</strong></p>

<p>链接：<a href="https://pan.baidu.com/s/13nqBcH9HAa3RSFOiH-QzYg%C2%A0">https://pan.baidu.com/s/13nqBcH9HAa3RSFOiH-QzYg </a><br />
提取码：45wl </p>

<p> </p>

<p><strong>图文教程：</strong></p>

<p>流程：</p>

<p>1、把动画文件从 Adobe Animate里发布出来，后有一堆文件</p>

<p><img alt="" class="has" src="https://img-blog.csdn.net/20160726152710695?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" /></p>

<p> </p>

<p>2、然后把发布后的文件拷贝到你在WebStorm新建的web项目文件夹里，就可以了，没有像以前flash cs和flash builder搭配的复杂，不需要在Adobe Animate里填写类路径。</p>

<p><img alt="" class="has" src="https://img-blog.csdn.net/20160726152714820?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" /></p>

<p> </p>

<p>主要有以下点要点：</p>

<p>一、如何让库中的MC动画，在html中加载，显示出来</p>

<p>1、新建一个view类，然后在这个类里面建一个变量 back = animate 库中的 page，然后把 back加载到view类里，代码如下图</p>

<p><img alt="" class="has" src="https://img-blog.csdn.net/20160726151706847?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" /></p>

<p> </p>

<p>2、把view类加载到舞台上，代码如下图</p>

<p><img alt="" class="has" src="https://img-blog.csdn.net/20160726151709556?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" /></p>

<p> </p>

<p>二、如何在js中控制，新建，获取MC里的变量等等</p>

<p>1、如下图</p>

<p><img alt="" class="has" src="https://img-blog.csdn.net/20160726150605853?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" /></p>

<p> </p>

<p>三、animate里发出事件，WebStorm里如何接收</p>

<p>1、首先是 animate 里发出事件，如图</p>

<p><img alt="" class="has" src="https://img-blog.csdn.net/20160726150417528?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" /></p>

<p>2、然后是 WebStorm 里接收 事件并处理，如图</p>

<p><img alt="" class="has" src="https://img-blog.csdn.net/20160726150846373?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" /></p>

<p><img alt="" class="has" src="https://img-blog.csdn.net/20160726150421022?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" /></p>

<p> </p>

<p>四、自适应</p>

<p>1、animate cc 提供了自适应和舞台居中的功能，具体设置如下图红框：</p>

<p><img alt="" class="has" src="https://img-blog.csdn.net/20161011134823534?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" /></p>

<p>当然自适应，居中，缩放填充的功能，根据你自己项目需求选择。</p>

<p> </p>

<p>五、预加载设置</p>

<p>动画较大，初始打开的时候会白屏很久，这时候选择预加载器，可以有个加载loading，当做过渡，具体如下图红框：</p>

<p><img alt="" class="has" src="https://img-blog.csdn.net/20161011135132553?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" /></p>

<p> </p>

<p> </p>

<p> </p>

<p>六、本例DEMO的完整代码</p>

<p>下载链接：链接：<a href="http://pan.baidu.com/s/1boXnAlL">http://pan.baidu.com/s/1boXnAlL</a> 密码：2cbj</p>

<p> </p>

<p>PS：目前用 adobe animate发布的文件中，mcTest.html这个文件暂时就没有作用了，现在用我新建的index.html 这个文件来代替，</p>

<p>等我以后再摸索看看，是否可以直接用mcTest.html。</p>

<p> </p>

<p> </p>

<p> </p>

<p> </p>

<p>﻿﻿</p>

<p>﻿﻿</p>

<p>﻿﻿</p>
