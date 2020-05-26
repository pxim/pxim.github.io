---
title: AS和C#通信，Flash和.net （winform）通信
date: 2017-05-07 17:25:20
tags: 
categories: Flash Flex ActionScript
---

<!--more-->


<p>一、使用 ExternalInterface api</p>
<p>1.as调用C#，as给C#发送参数数据</p>
<p>as代码：</p>
<div class="cnblogs_code">
<pre><span style="color:#008000">//<span style="color:#008000"> as向C#发出 方法名&#43;参数 <span style="color:#000000"><span style="color:#000000">ExternalInterface.call（functionName:String, ...parameters：*）<span style="color:#008000"><span style="color:#008000"> 方法名是字符串，参数可以是任何数据类型　　
<span style="color:#0000ff">if<span style="color:#000000">(ExternalInterface.available) 
{ 
   ExternalInterface.call(<span style="color:#ff0000">&quot;onSetDataToC&quot;<span style="color:#000000">, “as通过ExternalInterface.call方法向C#传递参数”);  
}</span></span></span></span></span></span></span></span></span></span></pre>
</div>
C#代码：
<div>
<div class="cnblogs_code">
<pre>无</pre>
</div>
<p>&nbsp;</p>
<p>2.C#调用as代码，C#给as发送参数数据</p>
<p>C#代码：</p>
<div class="cnblogs_code">
<pre>无</pre>
</div>
<p>as代码：</p>
<div class="cnblogs_code">
<div class="cnblogs_code_toolbar"><span class="cnblogs_code_copy"><a target="_blank" title="复制代码"><img src="http://common.cnblogs.com/images/copycode.gif" alt="复制代码"></a></span></div>
<pre><span style="color:#008000">//<span style="color:#008000"> as监听C#发来的 方法名，然后通过回调函数接收参数  ExternalInterface.addCallback（functionName:String, closure:Function） 方法名是字符串，回调一个函数
<span style="color:#0000ff">if<span style="color:#000000">(ExternalInterface.available)
{
    ExternalInterface.addCallback(&quot;onCToAs&quot;<span style="color:#000000">,onCToAs);
}
<span style="color:#0000ff">function onCToAs(str：*<span style="color:#000000">)
{
    trace(str);
}  </span></span></span></span></span></span></span></pre>
<div class="cnblogs_code_toolbar"><span class="cnblogs_code_copy"><a target="_blank" title="复制代码"><img src="http://common.cnblogs.com/images/copycode.gif" alt="复制代码"></a></span></div>
</div>
<p>&nbsp;</p>
<p>二、使用 fscommand api</p>
<p>1.as调用C#，as给C#发送参数数据</p>
<p>as代码：</p>
<div class="cnblogs_code">
<pre><span style="color:#008000">//<span style="color:#008000"> as向C#发出 方法名&#43;参数 fscommand（command:String, args:String=&quot;&quot;) 命令是字符串，参数也只能是字符串
fscommand(<span style="color:#ff0000">&quot;onSetDataToC&quot;, “as通过fscommand方法向C#传递参数”);  </span></span></span></pre>
</div>
<p>C#代码：</p>
<div class="cnblogs_code">
<pre>无</pre>
</div>
<p>&nbsp;</p>
</div>
