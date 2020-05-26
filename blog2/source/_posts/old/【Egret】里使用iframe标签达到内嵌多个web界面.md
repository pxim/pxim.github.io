---
title: 【Egret】里使用iframe标签达到内嵌多个web界面
date: 2016-05-17 17:31:45
tags: Egret TypeScript html5 web
categories: Egret
---

<!--more-->


<pre>目的：Egret里使用iframe标签达到内嵌多个web界面，模式相当于主swf调用N个子swf的效果；</pre>
<pre>目前在做项目过程中，在使用iframe的时候，碰到了一些功能需求，以及解决方法如下：

</pre>
<pre>一、.在index.html里添加iframe标签，</pre>
<pre>在index.html的&lt;body&gt;标签下，添加iframe标签，包括：路径，宽，高，坐标X，Y，是否出现滚动条，等属性；</pre>
<pre>想要详细了解其意思的话，请阅读 http://www.w3school.com.cn/tags/tag_iframe.asp
</pre>
<pre>有两种方法：</pre>
<pre>1.</pre>
<pre code_snippet_id="1686773" snippet_file_name="blog_20160517_1_1276352"  code_snippet_id="1686773" snippet_file_name="blog_20160517_1_1276352" class="html" name="code">&lt;style type=&quot;text/css&quot;&gt; 
.wrapper
 { width:1104px; height:570px; margin:100px 30px; overflow:hidden; position:relative; }
 .iframe { width:1024px;height:768px; position:absolute; top:10px; left:50px; }
 &lt;/style&gt; 
&lt;div class=&quot;wrapper&quot;&gt; 
&lt;iframe class=&quot;iframe&quot; src=&quot;http://www.baidu.com&quot; scrolling=&quot;no&quot; frameborder=&quot;0&quot;&gt;
 &lt;/iframe&gt;
 &lt;/div&gt;</pre>
<pre>2.</pre>
<pre code_snippet_id="1686773" snippet_file_name="blog_20160517_2_8004728"  code_snippet_id="1686773" snippet_file_name="blog_20160517_2_8004728" class="html" name="code">&lt;iframe id=&quot;page1&quot; width=1104 height=570 frameborder=0 scrolling=auto src=&quot;resource/assets/Html/Mobile/index.html?v=&lt;?=$ver?&gt;&quot; style=&quot;position: absolute; top: 100px; left: 200px;&quot;&gt;&lt;/iframe&gt;
&nbsp;</pre>
<pre>二、添加标签完成之后，如何让iframe内容跟随主html进行缩放，</pre>
<pre>方法：</pre>
<pre>在 style 属性方法里，添加</pre>
<pre code_snippet_id="1686773" snippet_file_name="blog_20160518_3_3525053"  code_snippet_id="1686773" snippet_file_name="blog_20160518_3_3525053" class="html" name="code">width:100%;height:100%;</pre>这句代码，就可以达到让iframe内容跟随主html进行缩放的效果；完整的代码如下：<pre code_snippet_id="1686773" snippet_file_name="blog_20160518_4_3143369"  code_snippet_id="1686773" snippet_file_name="blog_20160518_4_3143369" class="html" name="code"> &lt;iframe id=&quot;page1&quot; width=1104 height=570 frameborder=0 scrolling=auto src=&quot;&quot; style=&quot;width:50%;height:50%; position: absolute; top: 0px; left: 0px;&quot;&gt;&lt;/iframe&gt;

</pre>
<pre>三、解决缩放问题后，如何控制iframe内容刷新，更换不同的链接呢？并且是在egret里进行控制</pre>
<pre>方法如下：</pre>
<pre>在 index.html里的&lt;script&gt;标签下，添加 函数，用来根据情况设定 iframe的src（可以考察：<a target="_blank" target="_blank" href="http://www.cnblogs.com/fanyf/p/3651523.html">http://www.cnblogs.com/fanyf/p/3651523.html</a>）</pre>
<p></p>
<pre code_snippet_id="1686773" snippet_file_name="blog_20160518_5_8824970"  code_snippet_id="1686773" snippet_file_name="blog_20160518_5_8824970" class="html" name="code">function setPage(bool)
{
    if(bool == false)
    {
    	var bgm = document.getElementById('page1');
        var name = &quot;resource/assets/Html/PC/index.html?v=&lt;?=$ver?&gt;&quot;;
    	bgm.src = name;
    }else
    {
    	var bgm = document.getElementById('page1');
        var name = &quot;resource/assets/Html/Mobile/index.html?v=&lt;?=$ver?&gt;&quot;;
        bgm.src = name;
    }
}</pre><br>
<pre>然后在egret代码里对这个函数进行引用，其方法如下：</pre>
<pre code_snippet_id="1686773" snippet_file_name="blog_20160518_6_46470"  code_snippet_id="1686773" snippet_file_name="blog_20160518_6_46470" class="html" name="code">window[&quot;setPage&quot;](true);</pre>
<pre>到这步，基本功能就完成了；

</pre>
<pre>四、但是有时候想清除iframe的内容，让他为空，隐藏，该怎么做呢？</pre>
<pre>方法如下：</pre>
<pre>需要把iframe的src设为空，页面就不会显示了，不过设为空之后，会出现一个404提示，我目前解决方法是添加一句&nbsp; bgm.visible = false;不过这方法在chrome里能执行，在ie里没有效果</pre>
<pre code_snippet_id="1686773" snippet_file_name="blog_20160518_7_5204683"  code_snippet_id="1686773" snippet_file_name="blog_20160518_7_5204683" class="html" name="code">var bgm = document.getElementById('page1');
var name = &quot; &quot;;
bgm.src = name;
bgm.visible = false;</pre><br>
<br>
<p></p>
<p><br>
</p>
<p><br>
<br>
</p>
<p><br>
</p>
<p><br>
</p>
