---
title: 一个小工具类，利用shareObject把数据缓存
date: 2014-07-29 10:37:30
tags: Flash ActionScript3 Flex
categories: Flash Flex ActionScript
---

<!--more-->


<div id="sina_keyword_ad_area2" class="articalContent   ">
<p>原文链接：<a target="_blank" target="_blank" href="http://bbs.9ria.com/thread-284082-1-2.html">http://bbs.9ria.com/thread-284082-1-2.html</a></p>
<table cellspacing="0" cellpadding="0">
<tbody style="word-wrap:break-word">
<tr style="word-wrap:break-word">
<td style="word-wrap:break-word; font-size:14px">之前做一个数据缓存，就顺便把写入缓存，清除缓存，获取缓存都整理了一下，其中也做了些参考，个人水平有限，有需要的就拿去改改用吧。<br style="word-wrap:break-word">
上代码：<br style="word-wrap:break-word">
<pre code_snippet_id="2234790" snippet_file_name="blog_20170301_1_9061577"  name="code" class="javascript">package 
{
       importflash.net.SharedObject;
       importflash.system.Security;
       importflash.system.SecurityPanel;
       public classcookie
       {
             private varso:SharedObject;
             private var_name:String
             publicfunction cookie(file_name:String)
             {
                  //constructor code
                  so =SharedObject.getLocal(file_name,&quot;/&quot;);
                 _name=file_name
             }
             publicfunction flushData(key:String,value:*):void
             {
                 //添加数据
                  if(so.data.cookie == null)
                  {
                       varobj:Object = {};
                       obj[key] =value;
                       so.data.cookie= obj;
                  }else
                  {
                       so.data.cookie[key]= value;

                  }
                 trace(key+&quot;:&quot;+so.data.cookie[key]);
                 flush();
             }
             publicfunction deleteData(key:String):void
             {
                 //删除数据值
                  if(judge(key))
                  {
                       deleteso.data.cookie[key];
                       flush();
                  }
             }
             publicfunction getName():String
             {
                 //获取数据名
                  return_name
             }
             publicfunction getData(key:String):*
             {
                 //获取数据值
                  if(judge(key))
                  {
                       returnso.data.cookie[key];
                  }else
                  {
                       returnnull;
                  }
             }
             publicfunction clearData():void
             {
                 //清除缓存
                 so.clear();
             }
             publicfunction judge(key:String):Boolean
             {
                 //判断数据是否存在
                  returnso.data.cookie != undefined &amp;&amp; so.data.cookie[key] !=undefined
                  
             }
             privatefunction flush():void
             {
                 //写入
                  if(so)
                  {
                       try
                       {
                            so.flush();
                       }
                       catch(e:Error)
                       {
                            Security.showSettings();
                            Security.showSettings( SecurityPanel.LOCAL_STORAGE );
                       }
                  }
             }

       }

}</pre><br>
<br style="word-wrap:break-word">
<br style="word-wrap:break-word">
<br style="word-wrap:break-word">
标注的都比较清楚，直接实例化，调用方法可以了，附件为cookie.as文件</td>
</tr>
</tbody>
</table>
</div>
