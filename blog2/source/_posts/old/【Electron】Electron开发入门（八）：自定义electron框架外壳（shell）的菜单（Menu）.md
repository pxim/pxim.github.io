---
title: 【Electron】Electron开发入门（八）：自定义electron框架外壳（shell）的菜单（Menu）
date: 2016-10-27 11:58:16
tags: 
categories: Electron
---

<!--more-->

1.自定义electron框架外壳（shell）的菜单（Menu）
   
electron的main.js里代码：
```
const Menu = require('electron').Menu;
var template = [
  {
    label: '关闭',
    click: function () { win.close();console.log("关闭")},
    // submenu: [
    //   {
    //     label: 'Undo',
    //     accelerator: 'CmdOrCtrl+Z',
    //     role: 'undo'
    //   }
    // ]
  }]
var menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu);
```
效果如图：
![这里写图片描述](http://img.blog.csdn.net/20161027115145809)



2.更多菜单样式，鼠标事件关联，请参考[Electron Menu API 简体中文版](https://github.com/electron/electron/blob/master/docs-translations/zh-CN/api/menu.md)

3.[在webview的html添加electron shell 的菜单的教程](http://blog.csdn.net/ch15196637370/article/details/51147980)