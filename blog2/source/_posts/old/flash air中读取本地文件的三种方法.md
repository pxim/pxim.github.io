---
title: flash air中读取本地文件的三种方法
date: 2016-02-02 15:13:21
tags: ActionScript3 flex
categories: Flash Flex ActionScript
---

<!--more-->


<p>actionscript中读取本地文件操作有两种代码如下</p>
<p>1.使用File和FileStream两个类，FileStream负责读取数据的所以操作：（同步操作）</p>
<div class="cnblogs_Highlighter sh-gutter">
<div class="syntaxhighlighter  as3 ie" id="highlighter_371142">
<div class="toolbar"><pre code_snippet_id="1572830" snippet_file_name="blog_20160202_1_3449655"  code_snippet_id="1572830" snippet_file_name="blog_20160202_1_3449655" name="code" class="javascript">var stream:FileStream = new FileStream();
var file:File = new File('E:/test.txt');//绑定一个文件
stream.open(file,FileMode.READ);//读取文件
trace(stream.readMultiByte(stream.bytesAvailable,'utf-8'));
stream.close();</pre><br>
稍微需要注意的一点是我们的File()函数里传的路径字符串，里面全都使用的是正斜杠，如果使用了反斜杠，你就会收到来自程序的错误。</div>
</div>
</div>
<p>2.仅File类（异步操作）</p>
<div class="cnblogs_Highlighter sh-gutter"><pre code_snippet_id="1572830" snippet_file_name="blog_20160202_2_5543989"  code_snippet_id="1572830" snippet_file_name="blog_20160202_2_5543989" name="code" class="javascript">private var file:File;
public function Tracer()
{
    file =new File('E:/daili.txt');//绑定一个文件
    file.addEventListener(Event.COMPLETE,onComplete);
    file.load();//执行读取操作
}
         
private function onComplete(event:Event):void
{
    vardata:ByteArray = file.data;
    trace(data.readMultiByte(data.bytesAvailable,'utf-8'));
}</pre><br>
3.使用File和FileStream（异步操作）</div>
<div class="cnblogs_Highlighter sh-gutter">
<div class="syntaxhighlighter  as3 ie" id="highlighter_408044">
<div class="toolbar"><pre code_snippet_id="1572830" snippet_file_name="blog_20160202_3_9273743"  code_snippet_id="1572830" snippet_file_name="blog_20160202_3_9273743" name="code" class="javascript">var sourceFile:File = File.documentsDirectory.resolvePath(&quot;Apollo Test/test.txt&quot;);
var stream:FileStream = new FileStream();
stream.addEventListener(Event.COMPLETE, readBytes);
stream.openAsync(sourceFile, FileMode.READ);
 
function readBytes(e:Event):void {
    varbytes:ByteArray = newByteArray();
    trace(&quot;position 0:&quot;, stream.position);// 0
    bytes[0] = stream.readByte();
    trace(&quot;position 1:&quot;, stream.position);// 1
    fileStream.readBytes(bytes, stream.position,4);
    trace(&quot;position 2:&quot;, stream.position);// 5
    stream.close();
}</pre></div>
</div>
<div class="syntaxhighlighter  as3 ie" id="highlighter_408044"><br>
</div>
<div class="syntaxhighlighter  as3 ie" id="highlighter_408044">原文：<a target="_blank" target="_blank" href="http://www.cnblogs.com/crkay/archive/2011/10/25/2223726.html">http://www.cnblogs.com/crkay/archive/2011/10/25/2223726.html</a></div>
</div>
