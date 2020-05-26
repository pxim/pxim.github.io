---
title: AS3操作XML，增加、删除、修改
date: 2014-07-29 10:38:04
tags: Flash ActionScript3 xml
categories: Flash Flex ActionScript
---

<!--more-->


<p><pre code_snippet_id="2234774" snippet_file_name="blog_20170301_1_5964035"  name="code" class="javascript">var i:Number=0;//用于下面循环


var webcontent:String=&quot;Sontin's Blog &lt;b&gt;Welcome to 终吾一生&lt;/b&gt;&quot;;
var myXML:XML=&lt;websites&gt;
&lt;site name=&quot;Sontin's Blog&quot; url=&quot;http://www.ldyy8.com&quot;&gt;
&lt;description&gt;{webcontent}&lt;/description&gt;
&lt;pagebyte&gt;1000&lt;/pagebyte&gt;
&lt;/site&gt;
&lt;site name=&quot;百度&quot; url=&quot;http://www.baidu.com&quot;&gt;
&lt;description&gt;百度一下，就知道&lt;/description&gt;
&lt;pagebyte&gt;500&lt;/pagebyte&gt;
&lt;/site&gt;
&lt;site name=&quot;谷歌&quot; url=&quot;http://www.google.com&quot;&gt;
&lt;pagebyte&gt;100&lt;/pagebyte&gt;
&lt;/site&gt;
&lt;/websites&gt;;

trace(&quot;--------------------------初始XML--------------------------------------&quot;);
trace(myXML);

//先查找吧，下面操作都让XML变样了。
trace(&quot;--------------------------查找一--------------------------------------&quot;);
//双点号(..)，又称为后裔访问符(the descendent accessor),访问当前元素的所有子元素
trace(&quot;找到[description]个数：&quot;+myXML..description.length());
trace(myXML..description);    //myXML.site[0]..description; 这样同样正常的

trace(&quot;--------------------------查找二--------------------------------------&quot;);
//通配符(*)
trace(&quot;通配符：&quot;+myXML.site[0].@*.toXMLString()); //查第一个节点的所有属性
trace(&quot;site节点的所有属性：&quot;);
trace(myXML.site.@*.toXMLString());    //查所有 site节点的所有属性

trace(&quot;--------------------------查找三--------------------------------------&quot;);
//大于 &gt;，小于&lt;，等于 == (双等哦，要不变修改了)
trace(myXML.site.(pagebyte==500));
trace(myXML.site.(pagebyte&gt;500));
//**必须每个site节点下都有pagebyte元素
//把中间的括号去了看看，会有新发现哦。

trace(&quot;--------------------------查找四--------------------------------------&quot;);
//查属性
trace(myXML.site.(@name==&quot;谷歌&quot;));
//**必须每个site节点下都有name属性

trace(&quot;--------------------------查找五，正则--------------------------------------&quot;);
trace(myXML.site.(pagebyte.match(/^1\d+/)));    //查找pagebyte第一个字符是 1的
trace(&quot;name中第一个字母是S的：&quot;+myXML.site.(@name.match(/^S\w+/)));    
//**必须每个site节点下都有pagebyte元素，正则我也不太会用基础的表示一下好了。呵呵


//添加
myXML.site[0].author=new XML();//添加一个空白节点(其实不用new也同样可以执行添加)
myXML.site[0].author.@name=&quot;子锡&quot;;//添加一个属性
myXML.site[0].author.@email=&quot;sontin@qq.com&quot;;//添加邮箱属性
myXML.site[0].author.school=&quot;社会大学&quot;;//添加一个子节点
//还有一些API 这就不提了，主要也就4项
/*
appendChild(child:Object):XML 在当前子元素列表之后添加
prependChild(child:Object):XML 在当前子元素列表之前添加
insertChildAfter(child1:Object,child2:Object):* 在子元素child1之后添加
insertChildBefore(child1:Object,child2:Object):* 在子元素child1之前添加

*/

//修改
myXML.site.description[0]=myXML.site.description[0]+&quot; 摆正心态，做好自己。&quot;;
myXML.site.@name[1]=myXML.site.@name[1]+&quot;一下&quot;;

//删除(很简单，其实就是修改)
delete myXML.site[1].@url;    //删除节点属性
delete myXML.site[1].description;    //删除节点指定子元素
//myXML.site[1]=&quot;&quot;;//删除其下所有子节点(元素)
//delete myXML.site[1];//删除该节点，包括其下子节点(元素)

//myXML=null; //删除整个XML呢？null就好了，但下面要判断哦;

if (myXML!=null) {
    trace(&quot;----------------------显示指定节点内容，没有输出空串--------------------------&quot;);
    trace(myXML.site.description[0]);
    trace(myXML.site[0].description);//建议

    trace(&quot;---------------------循环显示site-------------------------------------------&quot;);
    //.length()为统计个数
    for (i=0; i&lt;myXML.site.length(); i++) {
        trace(&quot;第&quot; + i + &quot;个：&quot; + myXML.site[i]);
    }

    trace(&quot;----------------------循环显示site.name------------------------------------------&quot;);
    trace(myXML.site.@name);
    //.length()为统计个数
    for (i=0; i&lt;myXML.site.@name.length(); i++) {
        trace(&quot;第&quot; + i + &quot;个name：&quot; + myXML.site.@name[i]);
    }
    //这样也可以(建议使用，这样更能体现对象的意义)
    trace(&quot;---这样也可以：&quot;);
    for (i=0; i&lt;myXML.site.length(); i++) {
        trace(&quot;第&quot; + i + &quot;个name：&quot; + myXML.site[i].@name);
    }

    trace(&quot;--------------------------最终的site--------------------------------------&quot;);
    trace(myXML.site);

    trace(&quot;--------------------------最终的XML--------------------------------------&quot;);
    trace(myXML);
}</pre><br>
<br>
</p>
<p>原文链接：http://bbs.9ria.com/blog-229904-21550.html</p>
<p><br>
</p>
