---
title: 判断是否是IE（包含IE11）
date: 2016-03-10 15:05:34
tags: 
categories: 
---

<!--more-->


<p></p>
<pre code_snippet_id="1604893" snippet_file_name="blog_20160310_1_2695172"  class="javascript" name="code" snippet_file_name="blog_20160310_1_2695172" code_snippet_id="1604893">﻿ 判断是否是IE（包含IE11）

 if(!!window[&quot;ActiveXObject&quot;] || &quot;ActiveXObject&quot; in window)
  {
       alert(&quot;ie&quot;);
   }else
   {
      alert(&quot;不是ie&quot;);
   }




//——————————————————————————————————————————————————————————————————————————//
$(function(){
    varSys={};
   var ua= navigator.userAgent.toLowerCase();
    var s;
   (s= ua.match(/rv:([\d.]+)\) like gecko/))?Sys.ie= s[1]:
    (s= ua.match(/msie ([\d.]+)/))?Sys.ie= s[1]:
   (s= ua.match(/firefox\/([\d.]+)/))?Sys.firefox= s[1]:
    (s= ua.match(/chrome\/([\d.]+)/))?Sys.chrome= s[1]:
   (s= ua.match(/opera.([\d.]+)/))?Sys.opera= s[1]:
    (s= ua.match(/version\/([\d.]+).*safari/))?Sys.safari= s[1]:0;
   
    if(Sys.ie) $(&#39;span&#39;).text(&#39;IE: &#39; +Sys.ie);
   if(Sys.firefox) $(&#39;span&#39;).text(&#39;Firefox: &#39; +Sys.firefox);
    if(Sys.chrome) $(&#39;span&#39;).text(&#39;Chrome: &#39; +Sys.chrome);
   if(Sys.opera) $(&#39;span&#39;).text(&#39;Opera: &#39; +Sys.opera);
    if(Sys.safari) $(&#39;span&#39;).text(&#39;Safari: &#39; +Sys.safari);
});

﻿﻿</pre><br>
<p></p>
