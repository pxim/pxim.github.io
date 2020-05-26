---
title: as3中去掉字符串两边的空格，换行符
date: 2016-03-14 16:12:02
tags: ActionScript3
categories: Flash Flex ActionScript
---

<!--more-->


<div class="articalContent   newfont_family" id="sina_keyword_ad_area2">&nbsp;<wbr>as3 去掉字符串两边的空&#26684;，换行符，方法一
<div style="border:1px solid rgb(227,227,227); width:100%">
<div style="width:100%; color:rgb(0,0,0); font-family:'Consolas','Courier new'; font-size:12px; margin-top:5px; border-bottom-color:rgb(227,227,227); border-bottom-width:1px; border-bottom-style:solid">
&nbsp;<wbr>ActionScript Code&nbsp;<wbr></div>
<table cellspacing="0" cellpadding="0" border="0" style="width:100%; line-height:15px; font-family:'Consolas','Courier new'; font-size:12px; vertical-align:text-top">
<tbody>
<tr>
<td style="color:rgb(0,130,132); vertical-align:text-top; background-color:rgb(227,227,227)">
<div style="margin:7px; text-align:right; white-space:nowrap"><nobr>1<br>
2<br>
3<br>
4<br>
5<br>
6<br>
7<br>
8<br>
9<br>
10<br>
11<br>
12<br>
13<br>
14<br>
15<br>
16<br>
17<br>
18<br>
19<br>
20<br>
</nobr></div>
</td>
<td style="padding:1px; background-color:rgb(0,130,132)">
<div style="border:1px solid rgb(0,130,132)"></div>
</td>
<td style="width:100%; color:rgb(0,0,0); vertical-align:text-top; background-color:rgb(239,239,239)">
<div style="margin:7px"><span style="color:#0000ff">public</span><span style="color:#000000">&nbsp;<wbr></span><span style="color:#0000ff">function</span><span style="color:#000000">&nbsp;<wbr>trim(char:</span><span style="color:#8000ff">String</span><span style="color:#000000">):</span><span style="color:#8000ff">String</span><span style="color:#000000">{<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr></span><span style="color:#0000ff">if</span><span style="color:#000000">(char&nbsp;<wbr>==&nbsp;<wbr>null){<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr></span><span style="color:#0000ff">return</span><span style="color:#000000">&nbsp;<wbr>null;<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>}<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr></span><span style="color:#0000ff">return</span><span style="color:#000000">&nbsp;<wbr>rtrim(ltrim(char));<br>
&nbsp;<wbr>&nbsp;<wbr>}<br>
&nbsp;<wbr>&nbsp;<wbr></span><span style="color:#0000ff">private</span><span style="color:#000000">&nbsp;<wbr></span><span style="color:#0000ff">function</span><span style="color:#000000">&nbsp;<wbr>ltrim(char:</span><span style="color:#8000ff">String</span><span style="color:#000000">):</span><span style="color:#8000ff">String</span><span style="color:#000000">{<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr></span><span style="color:#0000ff">if</span><span style="color:#000000">(char&nbsp;<wbr>==&nbsp;<wbr>null){<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr></span><span style="color:#0000ff">return</span><span style="color:#000000">&nbsp;<wbr>null;<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>}<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr></span><span style="color:#0000ff">var</span><span style="color:#000000">&nbsp;<wbr>pattern:</span><span style="color:#8000ff">RegExp</span><span style="color:#000000">&nbsp;<wbr>=&nbsp;<wbr>/^\s*/;<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr></span><span style="color:#0000ff">return</span><span style="color:#000000">&nbsp;<wbr>char.replace(pattern,</span><span style="color:#800000">&quot;&quot;</span><span style="color:#000000">);<br>
&nbsp;<wbr>&nbsp;<wbr>}<br>
&nbsp;<wbr>&nbsp;<wbr></span><span style="color:#0000ff">private</span><span style="color:#000000">&nbsp;<wbr></span><span style="color:#0000ff">function</span><span style="color:#000000">&nbsp;<wbr>rtrim(char:</span><span style="color:#8000ff">String</span><span style="color:#000000">):</span><span style="color:#8000ff">String</span><span style="color:#000000">{<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr></span><span style="color:#0000ff">if</span><span style="color:#000000">(char&nbsp;<wbr>==&nbsp;<wbr>null){<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr></span><span style="color:#0000ff">return</span><span style="color:#000000">&nbsp;<wbr>null;<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>}<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr></span><span style="color:#0000ff">var</span><span style="color:#000000">&nbsp;<wbr>pattern:</span><span style="color:#8000ff">RegExp</span><span style="color:#000000">&nbsp;<wbr>=&nbsp;<wbr>/\s*$/;<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr></span><span style="color:#0000ff">return</span><span style="color:#000000">&nbsp;<wbr>char.replace(pattern,</span><span style="color:#800000">&quot;&quot;</span><span style="color:#000000">);<br>
&nbsp;<wbr>&nbsp;<wbr>}</span></div>
</td>
</tr>
</tbody>
</table>
</div>
<p>&nbsp;<wbr></p>
<p>去除掉空&#26684;，方法二</p>
<p></p>
<div style="border:1px solid rgb(227,227,227); width:100%">
<div style="width:100%; color:rgb(0,0,0); font-family:'Consolas','Courier new'; font-size:12px; margin-top:5px; border-bottom-color:rgb(227,227,227); border-bottom-width:1px; border-bottom-style:solid">
&nbsp;<wbr>ActionScript Code&nbsp;<wbr></div>
<table cellspacing="0" cellpadding="0" border="0" style="width:100%; line-height:15px; font-family:'Consolas','Courier new'; font-size:12px; vertical-align:text-top">
<tbody>
<tr>
<td style="color:rgb(0,130,132); vertical-align:text-top; background-color:rgb(227,227,227)">
<div style="margin:7px; text-align:right; white-space:nowrap"><nobr>1<br>
</nobr></div>
</td>
<td style="padding:1px; background-color:rgb(0,130,132)">
<div style="border:1px solid rgb(0,130,132)"></div>
</td>
<td style="width:100%; color:rgb(0,0,0); vertical-align:text-top; background-color:rgb(239,239,239)">
<div style="margin:7px"><span style="color:#0000ff">var</span><span style="color:#000000">&nbsp;<wbr>str:</span><span style="color:#8000ff">String</span><span style="color:#000000">&nbsp;<wbr>=&nbsp;<wbr>txt_show.</span><span style="color:#0000ff">text</span><span style="color:#000000">.replace(/([&nbsp;<wbr>&nbsp;<wbr>]{</span><span style="color:#ff0000">1</span><span style="color:#000000">})/g,</span><span style="color:#800000">&quot;&quot;</span><span style="color:#000000">);</span></div>
</td>
</tr>
</tbody>
</table>
</div>
<p>&nbsp;<wbr></p>
</div>
