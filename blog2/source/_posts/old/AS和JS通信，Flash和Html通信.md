---
title: AS和JS通信，Flash和Html通信
date: 2017-05-07 17:25:17
tags: 
categories: Flash Flex ActionScript
---

<!--more-->

一、使用 ExternalInterface api</p>
<p>1.as调用js，as给js发送参数数据</p>
<p>as代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #008000">//</span><span style="color: #008000"> as向js发出 方法名+参数 <span style="color: #000000"><span style="color: #000000">ExternalInterface.call（functionName:String, ...parameters：*）<span style="color: #008000"><span style="color: #008000"> 方法名是字符串，参数可以是任何数据类型　　</span></span></span></span></span>
<span style="color: #0000ff">if</span><span style="color: #000000">(ExternalInterface.available) 
{ <br>   ExternalInterface.call(</span><span style="color: #ff0000">"onSetDataToJs"</span><span style="color: #000000">, “as通过ExternalInterface.call方法向js传递参数”);  <br>}</span></pre>
</div>
<p>js代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff">function</span><span style="color: #000000"> <span style="color: #ff0000">onSetDataToJs</span>(value)
{
   console.log(</span>"此方法被as调用："+<span style="color: #000000">value</span><span style="color: #000000">)；
}</span></pre>
</div>
<p>&nbsp;</p>
<p>2.js调用as代码，js给as发送参数数据</p>
<p>js代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #000000">setDataToAs();
</span><span style="color: #0000ff">function</span><span style="color: #000000"> setDataToAs()
{
    </span><span style="color: #0000ff">var</span> flash =  getMovieName("sco_flash") <span style="color: #008000">//</span><span style="color: #008000"> sco_flash是嵌入在html里的flash的id</span>
<span style="color: #000000">    flash.onJsToAs("js传参给as");
}

</span><span style="color: #008000">//</span><span style="color: #008000">获取此页面加载FLASH对象名称</span>
<span style="color: #0000ff">function</span><span style="color: #000000"> getMovieName(movieName)
 {
   </span><span style="color: #0000ff">if</span><span style="color: #000000"> (window.document[movieName])
   {
     </span><span style="color: #0000ff">return</span><span style="color: #000000"> window.document[movieName];
   }</span><span style="color: #0000ff">else</span> <span style="color: #0000ff">if</span> (navigator.appName.indexOf("Microsoft")==-1<span style="color: #000000">)
     {
      </span><span style="color: #0000ff">if</span> (document.embeds &amp;&amp;<span style="color: #000000"> document.embeds[movieName])
          </span><span style="color: #0000ff">return</span><span style="color: #000000"> document.embeds[movieName];
      }</span><span style="color: #0000ff">else</span><span style="color: #000000">{
          </span><span style="color: #0000ff">return</span><span style="color: #000000"> document.getElementById(movieName);
   }
 };</span></pre>
</div>
<p>as代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #008000">//</span><span style="color: #008000"> as监听js发来的 方法名，然后通过回调函数接收参数  ExternalInterface.addCallback（functionName:String, closure:Function） 方法名是字符串，回调一个函数</span>
<span style="color: #0000ff">if</span><span style="color: #000000">(ExternalInterface.available)
{
    ExternalInterface.addCallback(</span>"onJsToAs"<span style="color: #000000">,onJsToAs);
}
</span><span style="color: #0000ff">function</span> onJsToAs(str：*<span style="color: #000000">)
{
    trace(str);
}  </span></pre>
</div>
<p>&nbsp;</p>
<p>二、使用 fscommand api</p>
<p>1.as调用js，as给js发送参数数据</p>
<p>as代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #008000">//</span><span style="color: #008000"> as向js发出 方法名+参数 fscommand（command:String, args:String="") 命令是字符串，参数也只能是字符串</span>
fscommand(<span style="color: #ff0000">"onSetDataToJs"</span>, “as通过fscommand方法向js传递参数”);  </pre>
</div>
<p>js代码：</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff">function</span><span style="color: #000000"> onSetDataToJs(value)
{
   console.log(</span>"此方法被as调用："+<span style="color: #000000">value</span><span style="color: #000000">)；
}</span></pre>
</div>