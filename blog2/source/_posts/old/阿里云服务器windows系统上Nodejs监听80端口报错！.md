---
title: 阿里云服务器windows系统上Nodejs监听80端口报错！
date: 2017-09-14 14:11:13
tags: 阿里云 服务器 Nodejs
categories: Node.js
---

<!--more-->

阿里云服务器上，开启了IIS服务后，再使用node开启服务监听80端口，会发布一直报错，如图
![这里写图片描述](http://img.blog.csdn.net/20170914140219270?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYXJ2aW4w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

解决方案：
1、打开cmd，然后输入netstat -ano查看是什么程序占用了80端口；
![这里写图片描述](http://img.blog.csdn.net/20170914140900932?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYXJ2aW4w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

一般情况下是IIS服务的默认网站占用了，关掉 Default Web Site，编辑绑定里的80端口，就可以了。
![这里写图片描述](http://img.blog.csdn.net/20170914140802080?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYXJ2aW4w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

2、如果还不可以，再进行这一步：控制面板--管理工具--服务--停止 SQL Server ReportingServices这个服务；
![这里写图片描述](http://img.blog.csdn.net/20170914141259366?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYXJ2aW4w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

然后，再用node启动服务监听80端口，就可以了。