---
title: FB,Flash,as3 Bug集
date: 2014-07-29 10:35:28
tags: Flash ActionScript3 BUG
categories: Flash Flex ActionScript
---

<!--more-->


<div class="articalContent   " id="sina_keyword_ad_area2">
<pre><strong>一、Flash builder 报错 <span>当导入3.0的项目时运行出现如下错误：</span></strong><span>
</span></pre>
<pre><span>进程已终止，没有建立到调试器的连接。<span>error while loading initial content</span><span></span></span></pre>
<pre><span><span>启动命令详细信息: &quot;C:\Program Files\Adobe\Adobe Flash Builder4\sdks\flex_sdk_4.5.0.19786\bin\adl.exe&quot; -runtime &quot;C:\ProgramFiles\Adobe\Adobe Flash Builder4\sdks\flex_sdk_4.5.0.19786\runtimes\air\win&quot; &quot;D:\fb4workspace\sadf\bin-debug\sadf-app.xml&quot; &quot;D:\fb4workspace\sadf\bin-debug&quot;<span><span style="font-family:Tahoma">&nbsp;<wbr>解决方法：</span><span>版本不一样所致。</span></span></span></span></pre>
<pre><span><span><span><span>air-app.xml 配置文件</span></span></span></span></pre>
<pre><span><span><span><span>flex sdk 3.0.0的改成 1.0</span></span></span></span></pre>
<pre><span><span><span><span>flex sdk 3.2 的改成 1.5</span></span></span></span></pre>
<pre><span><span><span><span>以后的版本也是同样方法
</span><span><span><span><span><span><span>&lt;applicationxmlns=&quot;http://ns.adobe.com/air/application/1.5&quot;&gt;</span></span></span></span></span></span></span></span></span></pre>
<pre><span><span></span></span><span><span><span><span><span>
<strong>二、<span><span><span><span><span>Flash Builder在Debug时出现的问题：Flash Builder 找不到所需的Adobe FlashPlayer调试器版本</span></span></span></span></span></strong></span></span></span></span></span><span><span><span><span><span></span></span></span></span></span><span><span><span><span><span></span></span></span></span></span><span><span><span><span><span></span></span></span></span></span><span><span><span><span><span></span></span></span></span></span><span><span><span><span><span></span></span></span></span></span><span><span><span><span><span></span></span></span></span></span><span><span><span><span><span></span></span></span></span></span><span><span><span><span><span></span></span></span></span></span></pre>
<pre>解决方法：</pre>
<pre><span><span><span><span></span></span></span></span><span><span><span><span></span></span></span></span><span></span>1. 进入Flash Builder的安装目录 C:\Program Files\Adobe\Adobe FlashBuilder 4.6\player\win\11.1<span><span><span><span></span></span></span></span></pre>
<pre>2. 安装flashplayer_11_plugin_debug.exe，下载地址：<a target="_blank" target="_blank" href="http://www.adobe.com/support/flashplayer/downloads.html">http://www.adobe.com/support/flashplayer/downloads.html</a></pre>
<pre><strong>
三、在FlashCS6里textfield里输入不了汉字</strong></pre>
<pre>flash player 11.2，textfiel里输入不了汉字；用微软雅黑，设备字体；并加一句代码：</pre>
<pre code_snippet_id="2234724" snippet_file_name="blog_20170301_1_2012249"  code_snippet_id="2234724" snippet_file_name="blog_20170301_1_2012249" name="code" class="javascript">flash.system.IME.enabled = true;
<strong>
</strong></pre>
<pre><strong>四、textfield文字输入限制：</strong></pre>
<pre code_snippet_id="2234724" snippet_file_name="blog_20170301_2_6025410"  code_snippet_id="2234724" snippet_file_name="blog_20170301_2_6025410" name="code" class="javascript">    my_txt.restrict = &quot;A-Z 0-9&quot;; //仅允许在文本字段中输入大写字符、空格和数字     
    my_txt.restrict = &quot;^a-z&quot;;//包含除小写字母之外的所有字符     
    my_txt.restrict = &quot;\\-\\^&quot;;  //这段代码只包含短划线 (-) 和尖号 (^)     
    my_txt.restrict = &quot;A-Z^Q&quot;; //这段代码只包含除大写字母 Q 之外的大写字母     
    my_txt.restrict = &quot; -~&quot;;//只包含从 ASCII 32（空格）到 ASCII 126（代字号）之间的字符     
    my_txt.restrict = &quot;a-zA-Z\u4e00-\u9fa5&quot; //这样是代表只能够输入大小写的英文字母和中文

 

    my_txt.restrict =&quot;^\\/&quot;;    //禁止&quot;/&quot;;  
    my_txt.restrict =&quot;^\\\\\\&quot;;    //禁止&quot;\&quot;,要6个&quot;\&quot;;</pre><br>
<br>
<p></p>
<p><br>
</p>
</div>
