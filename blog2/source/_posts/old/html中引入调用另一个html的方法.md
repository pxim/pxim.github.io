---
title: html中引入调用另一个html的方法
date: 2017-02-24 13:45:05
tags: html
categories: HTML CSS JavaScript
---

<!--more-->

html中引入调用另一个html的方法，尝试了好几种，都列出来：
其中第一种是最好的，其他的方法，可以尝试看看，是不是适合你当前项目

一、div+$("#page1").load("b.html")
参考代码：

```
<body>
    <div id="page1"></div>
    <div id="page2"></div>
    <script>
          $("#page1").load("page/Page_1.html");
          $("#page2").load("page/Page_2.html");
    </script>
</body>
```
二、iframe
参考代码：

```
<head>
</head>
<body>
   <div id="page1">
        <iframe align="center" width="100%" height="170" src="page/Page_1.html"  frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
   </div>
   <div id="page2">
        <iframe align="center" width="100%" height="170" src="page/Page_2.html"  frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
   </div>
</body>
```
三、object引入
参考代码：
```
<head>
    <object style="border:0px" type="text/x-scriptlet" data="page/Page_1.html" width=100% height=150>
    </object>
</head>
```
四、import引入
参考代码：
```
<head>
    <link rel="import" href="page/Page_1.html" id="page1">
</head>
<body>
    <script>
		console.log(page1.import.body.innerHTML);
    </script>
</body>
```
参考文章：https://www.web-tinker.com/article/20637.html

五、bootstrap的panel组件，或者easyui的window组件，有点类似这个效果；
