---
title: 【Electron】Electron开发入门（四）：操作PC端文件系统
date: 2016-09-28 14:03:23
tags: electron 文件系统 pc
categories: Electron
---

<!--more-->

**一、调用PC端默认方式打开本地文件**
在main.js里
```
 // 打开系统本地文件或者网页链接
  const {shell} = require('electron');
  // Open a local file in the default app
  var path1 = "d:\\ProjectsSpace\\ElectronProjects\\ElectronTest2\\app\\html\\config\\record.txt";
  shell.openItem(path1);

  // Open a URL in the default way
  shell.openExternal('https://github.com');
```
这个使用的是electron里shell模块的方法，只能打开和删除，不能通过代码更改文件内容，具体请看shell的api http://electron.atom.io/docs/api/shell/

**二、通过代码读取、写入、更名、删除、遍历目录、链接等 POSIX 文件系统操作**
这个使用的是node.js里的fs 模块，在electron中使用，案例代码如下：
在main.js里

```
//本地文件写入
  var path = require('path');
  var _path = path.join(__dirname, '..', '\\app\\html\\config\\record.txt');
  var path1 = "d:\\ProjectsSpace\\ElectronProjects\\ElectronTest2\\app\\html\\config\\record.txt";
  console.log(_path, path1);//测试路径对不对的
  var fs = require('fs');
  fs.readFile(_path, 'utf8', function (err, data) {
    if (err) return console.log(err);
  });

  fs.writeFile(_path, "electron + Javascript", function (err) {
    if (!err)
      console.log("写入成功！")
  })
```
关于fs更详细的使用方法，请看相关api，或者下图

![这里写图片描述](http://img.blog.csdn.net/20160928140213519)
