---
title: 如何实现Flex页面跳转
date: 2014-07-29 10:35:41
tags: ActionScript3 flex
categories: Flash Flex ActionScript
---

<!--more-->


<div class="articalContent   " id="sina_keyword_ad_area2">
<p style="">其实对于这个题目是不恰当的，因为flex中是没有页面这个概念的，页面在flex里面其实就是一个个的Canvas，vbox，hbox等等之类的东西，看到的不同页面的切换，就是这些元素一层层的堆积，或者替换，但是为了好理解，还是称之为&quot;页面跳转&quot;。其实我们可以对比传统的C/S开发模式，没页面跳转，只有窗体和元件的显示和隐藏。&nbsp;<wbr>那么怎么实现Flex页面跳转呢，我总结了下，主要有一下几种方式：</p>
<p style=""><strong>第一种，使用ViewStack组件，具体代码如下所示：把要跳转的页新建成MXMLComponent,然后通过ViewStack组件把这些页包含进来&nbsp;<wbr>&nbsp;<wbr></strong><br>
</p>
<p style="">然后再用别的组件切换这些页，比如用Button<strong><br>
</strong></p>
<p style=""><strong>第二种，使用navigateToURL，主要方式如下：</strong></p>
<pre code_snippet_id="2234809" snippet_file_name="blog_20170301_1_1517242"  name="code" class="javascript">var url:String=&quot;http://localhost:8080/Flex_J2eeDemo/bin/Welcome.html&quot;;  
var request:URLRequest=newURLRequest(url);  
navigateToURL(request,&quot;_blank&quot;);  </pre>
<p style="">但是这个方法很郁闷就是页面切换总是弹出新的页面，而不是只变换url</p>
<p style=""><strong>第三种，也是我采用的方法，就是引用flash中的importflash.external.ExternalInterface这个接口，他能提供像jsp中window.location.href方法一样方便，Flex页面跳转主要代码为：</strong></p>
<pre code_snippet_id="2234809" snippet_file_name="blog_20170301_2_9107263"  name="code" class="javascript"> ExternalInterface.call(&quot;function()  

{window.location.href='http://localhost:8080/Flex_J2eeDemo/bin/Welcome.html';} 

&quot;);  </pre>
<p style=""><strong>4、使用组件技术，把不通的页面做成component，然后通过TabNavigator等进行切换，通过使用state实现跳转。</strong></p>
<p style=""><strong><br>
</strong></p>
<p style="">原文链接：<a target="_blank" target="_blank" href="http://news.9ria.com/2013/1011/33121.html">http://news.9ria.com/2013/1011/33121.html</a></p>
</div>
