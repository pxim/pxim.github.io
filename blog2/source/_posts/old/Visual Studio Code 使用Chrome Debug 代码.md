---
title: Visual Studio Code 使用Chrome Debug 代码
date: 2016-09-06 12:01:21
tags: chrome visual studio VSCode
categories: Software
---

<!--more-->


一、添加插件 Debugger for Chrome，点击安装，安装完成之后，启动
![Debugger for Chrome](http://img.blog.csdn.net/20160906114521815)

二、配置启动参数
1.按 F5，出现界面如图，选择 Chrome
![这里写图片描述](http://img.blog.csdn.net/20160906114909943)

2.然后会打开配置文件 launch.json
![这里写图片描述](http://img.blog.csdn.net/20160906115039117)

3.第三步需要配置本地HTTP服务器（IIS）
①[HTTP服务器配置教程](http://jingyan.baidu.com/article/5553fa8215f7ef65a2393413.html)
②配置完成之后，把服务器相关配置改成如下图：
![这里写图片描述](http://img.blog.csdn.net/20160906115909305)

4.再按F5启动，就可以启动Chrome，并且在VSC里Debug调试代码了

5.如果并没有显示正确的页面，那么就重启一下服务器，清理一下Chrome的缓存，再或者多刷几次页面，就应该可以了
