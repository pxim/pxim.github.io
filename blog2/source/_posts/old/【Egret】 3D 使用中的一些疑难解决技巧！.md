---
title: 【Egret】 3D 使用中的一些疑难解决技巧！
date: 2016-03-23 10:58:12
tags: Egret TypeScript Html5
categories: Egret
---

<!--more-->


<p>1.问题：目前Egret3D中，发布到手机后无法响应鼠标事件</p>
<p>&nbsp;&nbsp; 解决方法：①打开发布后的libs/module/egret/egret.web.min.js，查找e.stopPropagation()，删掉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;②要注意 不能用MOUSE_CLICK，在移动设备上必须用TOUCH_END<br>
<br>
<br>
</p>
