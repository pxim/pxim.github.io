---
title: 【Flex】去除外边框，底背景透明，改变exe的icon
date: 2016-11-11 13:58:24
tags: flex air exe
categories: Flash Flex ActionScript
---

<!--more-->

**一、去除程序外边框**
1.在 xx-app.xml文件里，找到 `<!-- <systemChrome></systemChrome> -->` 这句话，然后删掉注释，改成 `<systemChrome>none</systemChrome>`就可以了。
2..然后在主程序 xx.mxml里的`<s:WindowedApplication/>`标签里添加属性`  showStatusBar="false"`就行了。

**二、让程序底背景可以透明，并且设置透明度**
1.在 xx-app.xml文件里，找到 `<!-- <transparent></transparent> -->` 这句话，然后删掉注释，改成 `<transparent>true</transparent>`

2.然后在主程序 xx.mxml里的`<s:WindowedApplication/>`标签里添加属性`backgroundAlpha="0.6"`，改变alpha值就行了。

**三、flex导出发行版exe，改变exe的图标icon**
1.在 xx-app.xml文件里，找到 

```
<!-- <icon>
		<image16x16></image16x16>
		<image32x32></image32x32>
		<image36x36></image36x36>
		<image48x48></image48x48>
		<image57x57></image57x57>
		<image72x72></image72x72>
		<image114x114></image114x114>
		<image128x128></image128x128>
	</icon> -->
```

如图：
![这里写图片描述](http://img.blog.csdn.net/20170221183815684?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYXJ2aW4w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
删掉注册，
2.填写icon图片路径，此路径是默认src下面的
![这里写图片描述](http://img.blog.csdn.net/20170221183934166?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYXJ2aW4w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
PS：用后缀.con的格式，有时候会报错，用.png格式没问题
3.成功如图
![这里写图片描述](http://img.blog.csdn.net/20170221184114229?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYXJ2aW4w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)