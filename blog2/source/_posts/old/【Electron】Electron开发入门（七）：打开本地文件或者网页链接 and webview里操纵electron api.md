---
title: 【Electron】Electron开发入门（七）：打开本地文件或者网页链接 and webview里操纵electron api
date: 2016-10-24 16:11:57
tags: electron
categories: Electron
---

<!--more-->

1.打开本地文件或者网页链接

// 打开系统本地文件
   const {shell} = require('electron');
   // Open a local file in the default app
   var path1 = "d:\\ProjectsSpace\\ElectronProjects\\ElectronTest2\\app\\html\\config\\record.txt";
   shell.openItem(path1);

   //打开网页链接
  // Open a URL in the default way
  shell.openExternal('https://github.com');

2.electron+web view（html+js）
   html，js里获取electron的api，使用webview上的div元素，监听点击事件等，操作electron api
   PS:下面示例的api可能与现在electron 新版本有区别，最好查一下api，不过方法是这样子的；
   

```
<html>
<head>
<title>test</title>
    <meta charset="utf-8" />
</head>
<body >
<button id="btn_fullScreen">全屏</button>
<button id="btn_exitFullScreen">退出全屏</button>
<div>
  </div>
    <script>
        var gui = require('nw.gui');
        var win = gui.Window.get();
        var btn_fullScreen = document.querySelector('#btn_fullScreen');
        btn_fullScreen.addEventListener("click", function (evt) {
            win.enterFullscreen();
        }, false);
        var btn_exitFullScreen = document.querySelector('#btn_exitFullScreen');
        btn_exitFullScreen.addEventListener("click", function (evt) {
            win.leaveFullscreen();
        }, false);
    </script>
</body>
</html>
```