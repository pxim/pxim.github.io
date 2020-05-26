---
title: 【Electron】Electron开发入门（三）：main process和web page 通信
date: 2016-09-27 16:24:49
tags: web electron 通信 js 框架
categories: Electron
---

<!--more-->


**一、main process 和 web page 通信**
electron框架主进程（Main Process）与嵌入的网页（web page，也就是renderer process）之间的通信

Main.js里添加代码

```
//通信模块，mian process与renderer process（web page）
const {ipcMain} = require('electron')
//监听web page里发出的message
ipcMain.on('asynchronous-message', (event, arg) => {
  console.log("mian1" + arg)  // prints "ping"
  event.sender.send('asynchronous-reply', 'pong')//在main process里向web page发出message
})

ipcMain.on('synchronous-message', (event, arg) => {
  console.log("mian2" + arg)  // prints "ping"
  event.returnValue = 'pong'
```
web page里添加代码

```
const {ipcRenderer} = require('electron')
//监听mian process里发出的message
ipcRenderer.on('asynchronous-reply', (event, arg) => {
    // alert("web2" + arg);// prints "pong"  在electron中web page里的console方法不起作用，因此使用alert作为测试方法
  })
 
 //在web page里向main process发出message
  ipcRenderer.send('asynchronous-message', 'ping') // prints "pong"   
  // ipcRenderer.sendSync('synchronous-message', 'ping') // prints "pong"   
  // alert("web1" + 'ping');

```
**二、具体项目中代码，如下图：**
1、mian process 里 mian.js
![这里写图片描述](http://img.blog.csdn.net/20160928132340755)

2、web page 里
①、 html文件
![这里写图片描述](http://img.blog.csdn.net/20160928132432459)

②、js文件
![这里写图片描述](http://img.blog.csdn.net/20160928132641384)

3、最后成功界面
![这里写图片描述](http://img.blog.csdn.net/20160928133927837)

