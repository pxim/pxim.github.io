---
title: FLEX中SharedObject介绍及应用
date: 2016-03-14 16:11:48
tags: ActionScript3 Flex Flash 本地存储数据
categories: Flash Flex ActionScript
---

<!--more-->


<p><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px"><span style="line-height:25.200000762939453px">ShareObject介绍：</span><br>
</span></p>
<p><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">1 ShareObject,</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">顾名思义共享对象</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">,</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">而通常意义上的共享，从</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">B/S</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">结构上来讲</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">,</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">无非是客户端（浏览器端）的共享和服务器端的共享了</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">,</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">不错</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">,ShareObject</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">刚好份演了这两种角色。而且</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">ShareObject</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">也是按此进行了两种分类</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">,</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">一类是</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">LSO</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">——</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">Local
 Share Object</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">（本地共享对象）其实类&#20284;于</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">cookie</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">，而另一种</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">RSO</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">——</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">Remote
 Share Object(</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">远程共享对象</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">)&nbsp;</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">我感觉比较类&#20284;于</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">JSP</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">中的</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">Application</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">对象，但好象比</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">Application</span><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">更强大。</span></p>
<p><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px"><span style="line-height:25.200000762939453px">2.存储位置&nbsp;</span><br style="font-size:14px; line-height:25.2px">
<span style="line-height:25.200000762939453px">以 Windows为例，目录为&nbsp;</span><br style="font-size:14px; line-height:25.2px">
<span style="line-height:25.200000762939453px">C:\Documents and Settings\[ username ] \\Application Data\\Macromedia\\Flash&nbsp;</span><br style="font-size:14px; line-height:25.2px">
<span style="line-height:25.200000762939453px">Player\\#SharedObjects\\ [ random character directory name ] ， 在Mac OS X 上， 目录为&nbsp;</span><br style="font-size:14px; line-height:25.2px">
<span style="line-height:25.200000762939453px">/Users/[ username ] /Library/Preferences/Macromedia/Flash Player/#SharedObject/ [ random&nbsp;</span><br style="font-size:14px; line-height:25.2px">
<span style="line-height:25.200000762939453px">character directory name ]。随机字符目录命名是为了安全考虑&nbsp;</span><br>
</span></p>
<p><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px"><span style="line-height:25.200000762939453px">下面我分别用实例代码来说两者的用法和用途：</span><br>
</span></p>
<p><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px"><span style="line-height:25.200000762939453px"></span></span></p>
<p><span style="font-family:SimSun; font-size:14px">一：LSO（本地共享对象）</span></p>
<p><span style="font-family:SimSun; font-size:14px">LSO的用法比较简单，和我们平常操作Cookie大同小异：</span></p>
<p><span style="font-family:SimSun; font-size:14px">1．得到一个共享对象：</span></p>
<p><span style="font-family:SimSun; font-size:14px">var so:SharedObject=SharedObject.getLocal(&quot;mydata&quot;,&quot;/&quot;);</span></p>
<p><span style="font-family:SimSun; font-size:14px">2．往共享对象里存入&#20540;：</span></p>
<pre code_snippet_id="2234716" snippet_file_name="blog_20170301_1_3530946"  code_snippet_id="2234716" snippet_file_name="blog_20170301_1_3530946" name="code" class="javascript">var user:Object=new Object();

              user.userName=userName.text;

              user.passWord=passWord.text;

              user.isSaveLogin=(remember.selected==true?1:0);

              so.data.user=user;</pre><br>
<p><span style="font-family:SimSun; font-size:14px">3．清除共享对象里的&#20540;：&nbsp;&nbsp;&nbsp;&nbsp; </span></p>
<pre code_snippet_id="2234716" snippet_file_name="blog_20170301_2_990454"  code_snippet_id="2234716" snippet_file_name="blog_20170301_2_990454" name="code" class="javascript">var so:SharedObject=SharedObject.getLocal(&quot;mydata&quot;,&quot;/&quot;);

                            if(so.data.user!=null){

                                   so.data.user=null;

                            }</pre><br>
<p><span style="font-family:SimSun; font-size:14px">4．读取共享对象里的&#20540;：&nbsp;&nbsp;&nbsp;&nbsp; </span></p>
<pre code_snippet_id="2234716" snippet_file_name="blog_20170301_3_6672055"  code_snippet_id="2234716" snippet_file_name="blog_20170301_3_6672055" name="code" class="javascript"> var so:SharedObject=SharedObject.getLocal(&quot;mydata&quot;,&quot;/&quot;);

                            if(so.data.user!=null){

                                   userName.text=so.data.user.userName;

                                   passWord.text=so.data.user.passWord;

                                   if(so.data.user.isSaveLogin.toString()==&quot;1&quot;){

                                          remember.selected=true;

                                   }</pre><br>
<p><span style="font-family:SimSun; font-size:14px">二：RSO（远程共享对象）：</span></p>
<p><span style="font-family:SimSun; font-size:14px">&nbsp;RSO是服务器端的共享对象，服务器端的数据共享可以实现多个客户端数据共享，在这里服务器我采用Flash Media Server3，FMS的使用非常简便，你只要在安装目录下找到Applications目录，并在其下新建一个子目录就可以成为你的工程或项目了。关于FMS的使用大家可以参考相关文章，本文不做介绍：利用FMS和RSO我们可以实现非常多的功能，诸如，聊天室，联机游戏，视频会议，在线视频录制和视频聊天。。。。。。</span></p>
<p><span style="font-family:SimSun; font-size:14px; line-height:25.200000762939453px">在这里我用一个简单的聊天室实例为例稍做讲解：</span><span style="font-family:SimSun; font-size:14px"><br>
</span></p>
<pre code_snippet_id="2234716" snippet_file_name="blog_20170301_4_5593043"  code_snippet_id="2234716" snippet_file_name="blog_20170301_4_5593043" name="code" class="javascript">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;  
&lt;mx:Application xmlns:mx=&quot;http://www.adobe.com/2006/mxml&quot; layout=&quot;absolute&quot; creationComplete=&quot;TextSO ();&quot;&gt;  
    &lt;mx:Script&gt;  
        &lt;![CDATA[  
        import flash.events.SyncEvent;  
        import flash.events.NetStatusEvent;  
        import flash.events.MouseEvent;  
        import flash.net.SharedObject;  
        import flash.net.NetConnection;  
          
        private var text_so:SharedObject;  
        private var nc:NetConnection;  
        private var rtmpGo:String;  
        private var good:Boolean;  
  
        public function TextSO ():void  
        {   
             button.label=&quot;Send&quot;;  
             button.addEventListener (MouseEvent.CLICK,sendMsg);//为发送按钮添加发送事件  
             rtmpGo = &quot;rtmp://localhost/basicSO&quot;;//这里设置FMS服务器的连接地址,basicSO即为,  
             //FMS安装目录下Applications下自己手动新建的一个文件夹名称,也是FMS的工程名,就是这么简洁,不可意议  
             nc = new NetConnection( );//产生一个连接对象  
             nc.connect (rtmpGo);//连接到上面的地址  
             nc.addEventListener (NetStatusEvent.NET_STATUS,doSO);//加入连接的监听事件,以便根据连接返回的状态做相应处理  
        }  
  
        private function doSO (e:NetStatusEvent):void  
        {     
             good=e.info.code == &quot;NetConnection.Connect.Success&quot;;//判断是否为连接成功状态  
             //连接返回的状态有好几种,大家可以参看FMS的文档,很详尽  
             if (good)//如果连接成轼,执行如下操作  
             {  
                   text_so=SharedObject.getRemote(&quot;test&quot;,nc.uri,false);//得到远程共享对象,false属性是设置共享的数据为非持久化的,  
                    //即重启服务器后,先前的数据不会保存  
                   text_so.connect (nc);  
                   text_so.addEventListener (SyncEvent.SYNC,checkSO);  
                   //为共享对象添加异步事件,这也是服务器同步处理多客户端最关键的地方,  
                   //一个客户端进行了什么操作,其它客户端也会有相应的变化,就是通过此事件来完成的  
             }  
        }  
  
        private function checkSO (e:SyncEvent):void  
        {  
             for (var chng:uint; chng&lt;e.changeList.length; chng++)  
             {  
                   switch (e.changeList[chng].code)  
                   {  
                        case &quot;clear&quot; :  
                             break;  
  
                        case &quot;success&quot; :  
                             trace (text_so.data.msg);  
                             break;  
  
                        case &quot;change&quot; ://一个客户端改变数据会更新所有客户端  
                             textArea.htmlText+=text_so.data.msg + &quot;\n&quot;;  
                             break;  
                   }  
             }  
        }  
  
        private function sendMsg (e:MouseEvent):void  
        {  
             text_so.setProperty (&quot;msg&quot;,textInput.text);//将新的信息存入共享对象  
             textArea.htmlText+=text_so.data.msg + &quot;\n&quot;;//更新客户端的信息列表  
        }  
  
  
        ]]&gt;  
    &lt;/mx:Script&gt;  
    &lt;mx:VBox&gt;  
        &lt;mx:TextArea id=&quot;textArea&quot; width=&quot;200&quot; height=&quot;200&quot;/&gt;//信息列表框  
        &lt;mx:TextInput id=&quot;textInput&quot;/&gt;//消息输入框  
        &lt;mx:Button id=&quot;button&quot; /&gt;//发送按钮  
    &lt;/mx:VBox&gt;  
&lt;/mx:Application&gt; </pre><br>
<span style="font-family:SimSun; font-size:14px"><br>
</span>
