---
title: as3中强制垃圾回收
date: 2016-03-14 16:12:08
tags: ActionScript3
categories: Flash Flex ActionScript
---

<!--more-->


<div class="articalContent   newfont_family" id="sina_keyword_ad_area2">&nbsp;<wbr>
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
</nobr></div>
</td>
<td style="padding:1px; background-color:rgb(0,130,132)">
<div style="border:1px solid rgb(0,130,132)"></div>
</td>
<td style="width:100%; color:rgb(0,0,0); vertical-align:text-top; background-color:rgb(239,239,239)">
<div style="margin:7px">&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr><span style="color:#0000ff">private</span><span style="color:#000000">&nbsp;<wbr></span><span style="color:#0000ff">function</span><span style="color:#000000">&nbsp;<wbr>doClearance():</span><span style="color:#8000ff">void</span><span style="color:#000000">&nbsp;<wbr><br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>{&nbsp;<wbr>&nbsp;<wbr><br>
</span><span style="color:#008000">//&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>trace(&quot;clear&quot;);&nbsp;<wbr>&nbsp;<wbr><br>
</span><span style="color:#000000">&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr></span><span style="color:#0000ff">try</span><span style="color:#000000">{&nbsp;<wbr>&nbsp;<wbr><br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr></span><span style="color:#0000ff">new</span><span style="color:#000000">&nbsp;<wbr></span><span style="color:#0000ff">LocalConnection</span><span style="color:#000000">().</span><span style="color:#0000ff">connect</span><span style="color:#000000">(</span><span style="color:#800000">&quot;foo&quot;</span><span style="color:#000000">);&nbsp;<wbr>&nbsp;<wbr><br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr></span><span style="color:#0000ff">new</span><span style="color:#000000">&nbsp;<wbr></span><span style="color:#0000ff">LocalConnection</span><span style="color:#000000">().</span><span style="color:#0000ff">connect</span><span style="color:#000000">(</span><span style="color:#800000">&quot;foo&quot;</span><span style="color:#000000">);&nbsp;<wbr>&nbsp;<wbr><br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>}</span><span style="color:#0000ff">catch</span><span style="color:#000000">(error&nbsp;<wbr>:&nbsp;<wbr></span><span style="color:#8000ff">Error</span><span style="color:#000000">){&nbsp;<wbr>&nbsp;<wbr><br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr><br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>}&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr><br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>}&nbsp;<wbr></span></div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
