---
title: 【Electron】Electron开发入门（九）：添加Flash插件
date: 2018-01-19 16:50:33
tags: Electron Flash
categories: Electron
---

<!--more-->

一、Electron官方开启Flash插件说明：https://electronjs.org/docs/tutorial/using-pepper-flash-plugin

看了这篇文章，并且各种操作之后，你会发现一个问题，没有地方下载
pepflashplayer.dll，PepperFlashPlayer.plugin，libpepflashplayer.so这些插件，然后一些群文件，或者网上找的下载包里的pepflashplayer.dll放进去测试后，要是你发现还是没有任何作用，如图：
![这里写图片描述](http://img.blog.csdn.net/20180119164744960?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYXJ2aW4w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
why？pepflashplayer.dll 版本错了，pepflashplayer.dll的版本要和Electron的版本一一对应；

解决方法：
Window下获取pepflashplayer.dll：
1.Flash Player在各个系统，各个游览器下的版本信息
http://get.adobe.com/cn/flashplayer/about/

2.Adobe Flash Player 下载安装路径
https://get2.adobe.com/cn/flashplayer/

3.Flash Player 插件安装好后，Windows系统可以在以下路径找到相应的dll文件
C:\Windows\System32\Macromed\Flash\pepflashplayer64_23_0_0_207.dl
C:\Windows\SysWOW64\Macromed\Flash\pepflashplayer32_23_0_0_207.dll
上面依次对应 64位 及 32位的插件，必须与Electron 的对应
其他系统可以通过chrome打开 chrome://plugins/ 查看插件位置
建议将插件复制到项目的目录或子目录下

然后再测试，就会发现OK了。


2.Electron一些关于api，插件类应用案例：
https://github.com/hokein/electron-sample-apps

3.参考文章
http://blog.csdn.net/sapperlab/article/details/53577046