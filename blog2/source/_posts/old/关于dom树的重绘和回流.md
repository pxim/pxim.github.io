---
title: 关于dom树的重绘和回流
date: 2019-07-31 14:01:21
tags: 
categories: HTML CSS JavaScript
---

<!--more-->

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190731135217366.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2FydmluMA==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190731135014473.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190731164258632.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/20190731135041334.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/20190731135053728.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/20190731135100205.png)
这三个表格文档流内的现象，要是

dom脱离文档流，然后display设置none，和visibility改变值 一样都会重新 Paint和Composite，display还会去除当前的占用空间


参考：https://www.jianshu.com/p/f03e77b0d06b

css页面解析参考： https://csstriggers.com/

https://developers.google.com/web/fundamentals/performance/rendering/simplify-paint-complexity-and-reduce-paint-areas

