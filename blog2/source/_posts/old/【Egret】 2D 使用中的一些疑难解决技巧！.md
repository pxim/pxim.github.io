---
title: 【Egret】 2D 使用中的一些疑难解决技巧！
date: 2016-03-23 10:55:58
tags: Egret TypeScript Html5
categories: Egret
---

<!--more-->


<strong>1.问题：声音在ios上无法播放</strong><br>
&nbsp;&nbsp; 解决方法：①首先需要预加载一个声音<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ②然后目前只有点击之后才能播放声音，不能默认播放<br>
<br>
<strong>2.问题：滚动条问题</strong><br>
&nbsp; 解决方法：①js原生方法：overflow:auto<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ②egret的scroller组件，但是这个组件有问题；用代码new的话，就会一松手就<br>
会弹回初始位置；必须在eui编辑器手动添加，才不会有这个BUG；<br>
<br>
<strong>3.问题：获取egret的canvas标签</strong><br>
解决方法：<br>
<pre code_snippet_id="2235030" snippet_file_name="blog_20170301_1_5966529"  code_snippet_id="2235030" snippet_file_name="blog_20170301_1_5966529" name="code" class="javascript">let containerList = document.querySelectorAll(&quot;.egret-player&quot;);
        let length = containerList.length;
        for (let i = 0; i &lt; length; i++) {
            let container = containerList[i];
            let player = &lt;WebPlayer&gt;container[&quot;egret-player&quot;];
            player[&quot;canvas&quot;] //这个就是canvas
        }</pre><br>
一般情况下这个查询结果的列表长度就是1，你只取默认的canvas就不用遍历，直接取第一个container<br>
这个是源码里的获取方式，拿不到只有一种可能，写错了哪个属性名。<br>
还有就是在egret初始化结束后再去拿，太早就是空的。等你的Main入口类被调用了就可以拿了<br>
document.querySelectorAll(&quot;.egret-player&quot;)[0][&quot;egret-player&quot;][&quot;canvas&quot;]<br>
直接在console输入这个打印<br>
<br>
<br>
<br>
<br>
