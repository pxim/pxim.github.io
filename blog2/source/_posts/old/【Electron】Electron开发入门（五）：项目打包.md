---
title: 【Electron】Electron开发入门（五）：项目打包
date: 2016-09-28 14:06:50
tags: electron 打包
categories: Electron
---

<!--more-->

**一、安装 `electron-packager`**

PS：安装之前，先复制一份package.json文件到./app目录下，然后改下./app目录下package.json里 "main": "app/main.js"的路径（去掉app/），不这样子的话，下面打包的时候会报错，有的版本识别不了应用路径。

1、使用命令 `npm install --save-dev electron-packager`
将electron-package包安装到在项目下面，
![这里写图片描述](http://img.blog.csdn.net/20160928151915084)
安装完成之后，项目根目录下面的package.json文件里，会多出一条electron-package的版本号配置信息
![这里写图片描述](http://img.blog.csdn.net/20160928152109710)

**二、正式打包**
有两种方法：
1、直接使用命令打包，electron-packager的打包基本命令是：

```
electron-packager <location of project> <name of project> <platform> <architecture> <electron version> <optional options>
```
命令说明：
* location of project：项目所在路径
* name of project：打包的项目名字
* platform：确定了你要构建哪个平台的应用（Windows、Mac 还是 Linux）
* architecture：决定了使用 x86 还是 x64 还是两个架构都用
* electron version：electron 的版本
* optional options：可选选项

命令比较长，每次要是都用这个命令来打包会很烦，可以使用第二种方法；

2、首先在项目根目录下面的 package.json 里添加代码，
` "packager": "electron-packager ./app HelloWorld --all --out ./OutApp --version 1.4.0 --overwrite --icon=./app/img/icon/icon.ico"`

PS：这里要注意，字段里的 项目名字，version，icon路径要改成自己的；
具体添加位置如图，
![这里写图片描述](http://img.blog.csdn.net/20160928153139651)

然后，在使用命令 `npm run-script packager`
![这里写图片描述](http://img.blog.csdn.net/20160928153412147)

最后，打包完成之后如图
![这里写图片描述](http://img.blog.csdn.net/20160928153535555)
运行对应包下的.exe文件，就可以看到我们的应用了。


注：如需修改electron.exe可执行程序的详细信息：
![这里写图片描述](http://img.blog.csdn.net/20171204133258982?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYXJ2aW4w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
可以使用resource-hacker方法：
教程：https://newsn.net/say/resource-hacker.html