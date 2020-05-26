---
title: as3中textField输入字符时，一次性过长后自动换行
date: 2016-03-14 16:12:06
tags: as3
categories: Flash Flex ActionScript
---

<!--more-->


<div class="articalContent   newfont_family" id="sina_keyword_ad_area2">
<p></p>
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
</nobr></div>
</td>
<td style="padding:1px; background-color:rgb(0,130,132)">
<div style="border:1px solid rgb(0,130,132)"></div>
</td>
<td style="width:100%; color:rgb(0,0,0); vertical-align:text-top; background-color:rgb(239,239,239)">
<div style="margin:7px"><br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>txt_show.<span style="color:#0000ff">text</span><span style="color:#000000">&nbsp;<wbr>=&nbsp;<wbr>showStr;<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr><br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr></span><span style="color:#0000ff">var</span><span style="color:#000000">&nbsp;<wbr>str:</span><span style="color:#8000ff">String</span><span style="color:#000000">&nbsp;<wbr>=&nbsp;<wbr>txt_show.</span><span style="color:#0000ff">text</span><span style="color:#000000">;<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr></span><span style="color:#0000ff">var</span><span style="color:#000000">&nbsp;<wbr>strlen:</span><span style="color:#8000ff">int</span><span style="color:#000000">&nbsp;<wbr>=&nbsp;<wbr>str.</span><span style="color:#0000ff">length</span><span style="color:#000000">;<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr></span><span style="color:#0000ff">var</span><span style="color:#000000">&nbsp;<wbr>len:</span><span style="color:#8000ff">int</span><span style="color:#000000">&nbsp;<wbr>=&nbsp;<wbr></span><span style="color:#ff0000">0</span><span style="color:#000000">;<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr></span><span style="color:#0000ff">for</span><span style="color:#000000">&nbsp;<wbr>(</span><span style="color:#0000ff">var</span><span style="color:#000000">&nbsp;<wbr>i:</span><span style="color:#8000ff">int</span><span style="color:#000000">&nbsp;<wbr>=&nbsp;<wbr></span><span style="color:#ff0000">0</span><span style="color:#000000">;&nbsp;<wbr>i&nbsp;<wbr>&lt;&nbsp;<wbr>strlen;&nbsp;<wbr>i&#43;&#43;)&nbsp;<wbr><br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>{<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>len&nbsp;<wbr>&#43;=&nbsp;<wbr>txt_show.textField.getCharBoundaries(i).</span><span style="color:#0000ff">width</span><span style="color:#000000">;<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr></span><span style="color:#0000ff">if</span><span style="color:#000000">(len&nbsp;<wbr>&gt;&nbsp;<wbr>txt_show.textField.</span><span style="color:#0000ff">width</span><span style="color:#000000">&nbsp;<wbr>-&nbsp;<wbr></span><span style="color:#ff0000">5</span><span style="color:#000000">)<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>{<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr></span><span style="color:#0000ff">var</span><span style="color:#000000">&nbsp;<wbr>temp:</span><span style="color:#8000ff">String</span><span style="color:#000000">&nbsp;<wbr>=&nbsp;<wbr>str.</span><span style="color:#0000ff">charAt</span><span style="color:#000000">(i&nbsp;<wbr>-&nbsp;<wbr></span><span style="color:#ff0000">1</span><span style="color:#000000">)&nbsp;<wbr>&#43;&nbsp;<wbr></span><span style="color:#800000">&quot;\n&quot;</span><span style="color:#000000">;<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>txt_show.textField.</span><span style="color:#0000ff">replaceText</span><span style="color:#000000">(i&nbsp;<wbr>-&nbsp;<wbr></span><span style="color:#ff0000">1</span><span style="color:#000000">,&nbsp;<wbr>i,&nbsp;<wbr>temp);<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>len&nbsp;<wbr>=&nbsp;<wbr></span><span style="color:#ff0000">0</span><span style="color:#000000">;<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>}<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>}<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr><br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>txt_show.textField.</span><span style="color:#0000ff">width</span><span style="color:#000000">&nbsp;<wbr>=&nbsp;<wbr></span><span style="color:#ff0000">210</span><span style="color:#000000">;</span></div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
