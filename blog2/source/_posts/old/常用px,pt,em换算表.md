---
title: 常用px,pt,em换算表
date: 2018-06-14 14:22:50
tags: CSS px pt em
categories: HTML CSS JavaScript
---

<!--more-->

常用px,pt,em换算表

pt (point，磅)：是一个物理长度单位，指的是72分之一英寸。

 

px (pixel，像素)：是一个虚拟长度单位，是计算机系统的数字化图像长度单位，如果px要换算成物理长度，需要指定精度DPI(Dots Per Inch，每英寸像素数)，在扫描打印时一般都有DPI可选。Windows系统默认是96dpi，Apple系统默认是72dpi。

 

em(相对长度单位，相对于当前对象内文本的字体尺寸)：是一个相对长度单位，最初是指字母M的宽度，故名em。现指的是字符宽度的倍数，用法类似百分比，如：0.8em, 1.2em,2em等。通常1em=16px。

 

字号：是中文字库中特有的一种单位，以中文代号表示特定的磅值pt，便于记忆、表述。

pt和px的换算公式可以根据pt的定义得出:

 

pt=1/72(英寸), px=1/dpi(英寸)

 

因此 pt=px*72/dpi

以Windows下的96dpi来计算，pt=px*72/96=px*3/4


![这里写图片描述](https://img-blog.csdn.net/2018061414542460?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2FydmluMA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

转换工具(源码)[点此下载](https://files.cnblogs.com/files/zhangpengshou/PxToEmSrc.7z)

转自：https://www.cnblogs.com/zhangpengshou/archive/2012/08/04/2623061.html