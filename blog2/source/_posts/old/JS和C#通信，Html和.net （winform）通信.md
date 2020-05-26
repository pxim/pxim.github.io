---
title: JS和C#通信，Html和.net （winform）通信
date: 2017-05-07 17:25:22
tags: 
categories: HTML CSS JavaScript
---

<!--more-->


一、js调用C#方法，js传参给C#
<p>html里js代码：</p>
<div class="cnblogs_code">
<pre>    commitDataToC(&quot;js传数据给C#&quot;<span style="color:#000000">);
</span><span style="color:#008000">//</span><span style="color:#008000">把数据传给C#</span>
    <span style="color:#0000ff">function</span><span style="color:#000000"> commitDataToC(str) {
</span><span style="color:#008000">//</span><span style="color:#008000">        alert(str);</span>
<span style="color:#000000">        window.external.SaveProgress(str);
    }</span></pre>
</div>
<p>winform里C#代码：</p>
<div class="cnblogs_code">
<pre><span style="color:#008000">//</span><span style="color:#008000">为了使网页能够与winform交互 将com的可访问性设置为真</span>
 [System.Security.Permissions.PermissionSet(System.Security.Permissions.SecurityAction.Demand, Name = <span style="color:#800000">&quot;</span><span style="color:#800000">FullTrust</span><span style="color:#800000">&quot;</span><span style="color:#000000">)]
 [System.Runtime.InteropServices.ComVisibleAttribute(</span><span style="color:#0000ff">true</span>)]</pre>
</div>
<div class="cnblogs_code">
<pre><span style="color:#0000ff">　public</span> <span style="color:#0000ff">void</span> SaveProgress(<span style="color:#0000ff">string</span><span style="color:#000000"> str)
 {
  　　MessageBox.Show(</span><span style="color:#800000">&quot;</span><span style="color:#800000">html在调用C#中的方法。SaveProgressstr=</span><span style="color:#800000">&quot;</span> &#43;<span style="color:#000000"> str);
 }</span></pre>
</div>
<p>&nbsp;</p>
<p>二、C#调用js方法，C#传参给js</p>
<p>winform里C#代码：</p>
<div class="cnblogs_code">
<pre><span style="color:#008000">//</span><span style="color:#008000">为了使网页能够与winform交互 将com的可访问性设置为真</span>
 [System.Security.Permissions.PermissionSet(System.Security.Permissions.SecurityAction.Demand, Name = <span style="color:#800000">&quot;</span><span style="color:#800000">FullTrust</span><span style="color:#800000">&quot;</span><span style="color:#000000">)]
 [System.Runtime.InteropServices.ComVisibleAttribute(</span><span style="color:#0000ff">true</span>)]</pre>
</div>
<div class="cnblogs_code">
<pre> <span style="color:#0000ff">if</span> (Wbr.Document != <span style="color:#0000ff">null</span>) Wbr.Document.InvokeScript(<span style="color:#800000">&quot;</span><span style="color:#800000">WfToHtml</span><span style="color:#800000">&quot;</span>, objArray);</pre>
</div>
<p>html里js代码：</p>
<div class="cnblogs_code">
<pre>  <span style="color:#008000">//</span><span style="color:#008000">C#传数据给js</span>
    <span style="color:#0000ff">function</span><span style="color:#000000"> WfToHtml() {
        alert(</span>&quot;wf调用html里面的js函数&quot;<span style="color:#000000">);
    }</span></pre>
</div>
<p>&nbsp;</p>
<p>注意：js里不能添加console代码，不然在winform里C#会接收不到js传过来的参数，js调用C#代码也会失效。</p>
<p>参考：</p>
<p><a target="_blank" href="http://www.cnblogs.com/zeroLove/p/3912460.html" target="_blank">http://www.cnblogs.com/zeroLove/p/3912460.html</a></p>
