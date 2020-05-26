---
title: .net做的exe和electron做的exe之间的通信问题
date: 2016-10-31 10:11:12
tags: .net 通信 exe nodejs tcp
categories: Electron
---

<!--more-->

目前工作遇到个问题：
.net做的exe和electron做的exe，之间进行数据通信
目前找到两个相对方便的方法：
1.命名管道
①.net命名管道资料：
[进程间通信 - 命名管道实现](http://www.cnblogs.com/BoyXiao/archive/2011/01/02/1924188.html)

②electron 之 nodejs 命名管道资料：
使用nodejs，用法跟tcp一样，不过就是监听的时候，tcp是端口号，而命名管道是"\\\\.\\pipe\\" + PIPE_NAME;这种形式；
客户端连接也是用管道名称去连接，而不是tcp的那种端口号；
在windows平台下，命名管道和tcp方法一模一样的，所以很多人忽视了net模块其实可以做命名管道的

2.TCP
①.net方面的资料：

②electron方面的资料：