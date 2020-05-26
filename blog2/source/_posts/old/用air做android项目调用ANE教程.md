---
title: 用air做android项目调用ANE教程
date: 2014-07-29 10:34:55
tags: Flash ActionScript3 AIR ANE
categories: Flash Flex ActionScript
---

<!--more-->


<div class="articalContent   " id="sina_keyword_ad_area2">
<p>原文地址：<a target="_blank" target="_blank" href="http://bbs.9ria.com/index.php/topic/show/156257">http://bbs.9ria.com/index.php/topic/show/156257</a></p>
<p><br style="">
<span style="">&nbsp;<wbr> &nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>这几天用air做android项目，发现个功能air实现不了。得用android原生技术，但小弟菜蔬学浅，android原生是搞不懂了，还是AS用着顺手。于是跟度娘求助，然后就发现了ANE这东东，但发现关于ane的中文资料灰常少，度娘上的资料基本都是官方性质的，用词都很官方（神马是上下文环境啊，完全不懂--#），后来还是谷哥靠谱，资料稍多点，但都是E文的呃，但这小小的困难怎么能难倒哥呢，要知道，哥电脑上可是装了有道词典的！</span><span style=""><span style="font-family:微软雅黑">&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>于是在走了N多弯路后终于把这玩意弄懂了（不容易啊-
 -#）。本着造福后人的思想，小生就把这个东西的玩法用天朝文写下来啦。<br>
&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>OK，先简单说说ANE是啥吧（不想看废话的请跳过这段）。ANE（AIR Native Extension），就是本机扩展，顾名思就是对air运行的本机的扩展（还是没听懂？）。好吧，我的理解就是air不能实现的功能，就用ane来实现。比如我要用air来控制电脑的鼠标移动，这个功能貌&#20284;air做不到吧，如果能做到，那air就可以用来做病毒了- -！&nbsp;<wbr> &nbsp;<wbr>显然，adobe不会让你这么做的。但C语言能完成这功能，于是乎，ANE的作用就出来了——把C和as打包起来，AS调用C来完成AS不能完成的任务。好吧，至于ANE还能干嘛，你们自己慢慢YY，下来我就开始写教程了。</span></span><span style=""><span style="font-family:微软雅黑"><br>
</span></span><br style="">
<span style=""><span style="font-family:微软雅黑"><span style="color:#ff0000">以下教程是用在android手机上的：</span></span></span><br style="">
<span style=""><span style="font-family:微软雅黑">&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>&nbsp;<wbr>首先，在这个教程里要准备的工具：</span></span><br style="">
<span style=""><span style="font-family:微软雅黑">1、flash cs6</span></span><br style="">
<span style=""><span style="font-family:微软雅黑">2、flash builder 4.6（低版本的没用过，不是很清楚）；</span></span><br style="">
<span style=""><span style="font-family:微软雅黑">3、adt打包工具（回复本帖就能下载哟，亲）；</span></span><br style="">
<span style=""><span style="font-family:微软雅黑">4、数字证书（就是用来签证的玩意，可以向adobe申请，也可以自己用flashcs6创建）；</span></span><br style="">
<br style="">
<span style=""><span style="font-family:微软雅黑">OK，东西准备好了吧？ let's go！</span></span><br style="">
<span style=""></span><span style=""><span style="font-family:微软雅黑"><span style="font-size:24px"><span style="color:#ff0000">一、创建jar文件</span></span></span></span><br style="">
<span style=""><span style="font-family:微软雅黑"><span style="font-size:24px"><span style="color:#ff0000">&nbsp;<wbr>&nbsp;<wbr></span></span></span><span style="font-family:微软雅黑"><span style="font-size:12px"><span style="color:#000000">.jar就是个java文件，android系统原生就是java来写的，所以我们想扩展android上的air，就得有个jar文件来实现你要的功能。</span></span></span></span><br style="">
<span style=""><span style="font-family:微软雅黑"><span style="font-size:12px"><span style="color:#000000">1、先打开FB（就是flashbuilder，以后都叫它FB了）。建一个java项目。（文件-新建-其它-java项目|&nbsp;<wbr>&nbsp;<wbr>file-new-other-java-javaproject）。然后，随便给它起个名字，完成。</span></span></span></span><br style="">
<span style=""><wbr><wbr><span style="font-family:微软雅黑">然后，看看项目目录，应该就是这个：</span></span><br style="">
<span style="">然后，对着项目点右键(就是对着myExtensonJava点右键)，点击属性，再选java构建路径，然后选库路径、再选添加外部jar，再找到flashcs6目录下AIR3.2\lib\android\的FlashRuntimeExtensions.jar文件（properties—java builtpath—library—Add External JARs——XXX目录下的FlashRuntimeExtensions.jar—打开—OK）</span><span style=""><br>
</span></p>
<p><span style=""></span><span style="">然后，在项目的src文件下建一个包，包名自定，我这用的是com.three，接着再在这个包下建3个java类。先看看项目结构</span><br style="">
<span style="">各JAVA代码如下：</span><br style="">
<span style="">1、Extension的代码</span></p>
<p><span style=""></span></p>
<pre code_snippet_id="2234846" snippet_file_name="blog_20170301_1_4150691"  code_snippet_id="2234846" snippet_file_name="blog_20170301_1_4150691" name="code" class="javascript">package com.three;

import com.adobe.fre.*;


//Extension这个类是AS与JAVA交互的最基础的入口，其实很简单，也就这么点东西

public class Extension implements FREExtension {



@Override

public FREContext createContext(String arg0) {

// new一个新的threeExtensionContext出来；

return new threeExtensionContext();

}


@Override

public void dispose() {

// 这个销毁资源的方法，暂时没有什么用，空着


}


@Override

public void initialize() {

// 初始化方法，暂时用不着，空着先


}


}</pre>
<p></p>
<p><span style="">2、threeExtensionContext的代码：</span></p>
<p><span style=""></span></p>
<pre code_snippet_id="2234846" snippet_file_name="blog_20170301_2_4041225"  code_snippet_id="2234846" snippet_file_name="blog_20170301_2_4041225" name="code" class="javascript">package com.three;


import java.util.*;


import com.adobe.fre.FREContext;

import com.adobe.fre.FREFunction;


public class threeExtensionContext extends FREContext {


public threeExtensionContext(){

//这个貌似也用不着，空着

}


@Override

public void dispose() {

// 空着


}


@Override

public Map getFunctions() {

// 下面这个比较关键，它的作用是定义as与JAVA具体方法通信的重要接口

Map functionMap=new HashMap();

functionMap.put(&quot;test&quot;,new test());

return functionMap;

}


}</pre>
<p></p>
<p><span style="">3,test的代码：</span></p>
<p><span style=""></span></p>
<pre code_snippet_id="2234846" snippet_file_name="blog_20170301_3_6756440"  code_snippet_id="2234846" snippet_file_name="blog_20170301_3_6756440" name="code" class="javascript">package com.three;


import com.adobe.fre.FREContext;

import com.adobe.fre.FREFunction;

import com.adobe.fre.FREInvalidObjectException;

import com.adobe.fre.FREObject;

import com.adobe.fre.FRETypeMismatchException;

import com.adobe.fre.FREWrongThreadException;


public class test implements FREFunction {


@Override

//这个类作用就是 AS调用CALL方法给java传一个FREObject的参数组，然后，java给as返回一个FREObject

public FREObject call(FREContext arg0, FREObject[] arg1) {

// 定义方法的具体内容

int a=0; //声明一个整形变量a


FREObject b = null; //声明一个FREObject对象b，待会返回用的；

try {

a=arg1[0].getAsInt();//读取as传过来的整理参数并赋值给a；

} catch (IllegalStateException e) {

//不知道是啥 ，FB自己添加的

e.printStackTrace();

} catch (FRETypeMismatchException e) {

//不知道是啥 ，FB自己添加的

e.printStackTrace();

} catch (FREInvalidObjectException e) {

//不知道是啥 ，FB自己添加的

e.printStackTrace();

} catch (FREWrongThreadException e) {

//不知道是啥 ，FB自己添加的

e.printStackTrace();

}




try {

b=FREObject.newObject(a*100);//调用FREObject的静态方法把a这个整型变量写到b里去；

} catch (FREWrongThreadException e) {

// //不知道是啥 ，FB自己添加的

e.printStackTrace();

}


//

return b;//再返回b；

}


}</pre>最后，写完了，没有报错的话，就右键项目，点导出-java-jar文件。<br style="">
<span style=""><span style="font-family:微软雅黑"><span style="font-size:24px"><span style="color:#ff0000">二、创建SWC文件</span></span></span></span><br style="">
<span style=""><span style="font-family:微软雅黑"><span style="font-size:12px"><span style="color:black">&nbsp;<wbr>还是用FB，这次来创建swc库。至于什么是swc，自己去谷哥百度一下吧。</span></span></span></span><br style="">
<span style=""><span style="font-family:微软雅黑"><span style="font-size:12px"><span style="color:#000000">1、用FB，新建一个flex库项目（flexlibrary）。就是&nbsp;<wbr>&nbsp;<wbr>文件-新建-flex库项目。如果找不着，就文件-新建-其它-flash builder--flex库项目。</span></span></span></span><br style="">
<span style="">2、写代码：</span><br>
<pre code_snippet_id="2234846" snippet_file_name="blog_20170301_4_4841486"  name="code" class="javascript">package com.three

{

import flash.external.ExtensionContext;

public class callJava

{

var context:ExtensionContext;

public function callJava()

{


context=ExtensionContext.createExtensionContext(&quot;com.three.Extension&quot;,&quot;&quot;);


}

public function callJavaTest(value:int):int{

var a:int;

a=context.call(&quot;test&quot;,value) as int;

return a;

}

}

}</pre>
<p><span style="">OK，看看项目结构：</span><br style="">
<br style="">
<span style="">看到myExtension.swc了木有？&nbsp;<wbr>&nbsp;<wbr>右键点击它，然后复制出来，跟刚才那个jar文件放在一起。</span><br style="">
<span style="">然后，复制一个myExtension.swc的副本，把它改成myExtension.zip，并解压到当前目录；</span><br style="">
<span style=""><span style="font-size:24px"><span style="color:#ff0000">二、extension.xml文件</span></span></span><br style="">
<span style="">extenstion.xml文件，上面定义了ane运行环境配置等乱七八遭的东西；</span><br style="">
<span style="">1、新建 一个文本文件，打开，粘入以下代码</span></p>
<p><span style=""></span><pre code_snippet_id="2234846" snippet_file_name="blog_20170301_5_588345"  name="code" class="javascript">com.three.Extension

myExtensionJava.jar

com.three.Extension

com.three.Extension

</pre></p>
<p><span style="">然后把这个文本文件改成extension.xml就行了，同样，把它跟jar 和swc放在一起。</span><br style="">
<span style=""><span style="font-size:24px"><span style="color:#ff0000">四、签证文件（P12）</span></span></span><br style="">
<span style="font-family:微软雅黑"><span style="font-size:24px"><span style="color:#ff0000">&nbsp;<wbr>&nbsp;<wbr><span style="font-size:12px"><span style="color:black">这个数字签证文件，要申请正式的挺麻烦的，还得花钱，并提供公司相关信息。不过还好，用flash可以自己创建开发版的。以下就是自己创建签证文件的过程；</span></span></span></span></span><br style="">
<span style=""><span style="font-size:12px"><span style="color:#000000">1、打开flash，新建一个air项目（air for desktop 或是air forandroid 还是air for ios 都可以）；</span></span></span><br style="">
<span style=""><span style="font-size:12px"><span style="color:#000000">2、文件—AIR 3.2 forXXX配置—签名—创建。。然后自己慢慢填吧，填好了保存出来，跟刚才创建的那一堆东西放在一起。</span></span></span><br style="">
<span style=""><span style="font-size:24px"><span style="color:#ff0000">五、ADT打包</span></span></span><br style="">
<span style="font-family:微软雅黑"><span style="font-size:24px"><span style="color:#ff0000">&nbsp;<wbr>&nbsp;<wbr><span style="font-size:12px"><span style="color:black">注：此ADT可不是android的那个ADT。 这个ADT只是一个打包工具，文件是 adt.jar。要使用它，你的电脑上还得安装java运行环境。这里就不写了，去谷哥百度一下，有很多教程。</span></span></span></span></span><br style="">
<span style=""><span style="font-size:12px"><span style="color:#000000">这工具回复贴子有下载，下载完后同样把它放到刚才那个文件目录下，现在目录应该是这样子：</span></span></span><br style="">
<br style="">
<span style="">然后，在这个文件夹下按着shift键点鼠标右键，在弹出的菜单里选 ： 在此处打开命令窗口 。</span><br style="">
<br style="">
<span style="">然后就开始输入指令吧。这玩意是命令行工具，我就直接把命令粘下来了</span><br style="">
<span style="">java -jar adt.jar -package -tsa none -storetype pkcs12 -keystorea.p12 -storepass 123 -target ane m.aneextension.xml&nbsp;<wbr>&nbsp;<wbr>-swcmyExtensionAs.swc -platform Android-ARM library.swfmyExtensionJava.jar</span><br style="">
<br style="">
<span style="">这命令其实挺简单的，无非就是打个包嘛....</span><br style="">
<span style="">不过有几个地方要注意。一个&nbsp;<wbr>&nbsp;<wbr>-tsanone&nbsp;<wbr>&nbsp;<wbr>，这个在很多教程里都没有写这句，在你们那不知道，反正在我这如果不写会报一个时间戳的错，因为如果不写，adt打包会连接一个国外的网站获得时间戳，但人家那国外网站不让天朝子民访问，所以报错。解决方法就是让它别写时间戳，也就是加 -tsanone。&nbsp;<wbr>&nbsp;<wbr>要么用fanqiang软件也行。随意；</span><br style="">
<br style="">
<span style="">我现在是生成了一个叫m.ane的文件了，不知道你们生成没有</span><br style="">
<br style="">
<span style="">OK，现在可以写代码来测试了：</span><br style="">
<br style="">
<span style="">1、用flash cs6 新建一个air for android项目；</span><br style="">
<span style="">2、打开文件—actionScript设置—库路径—点击（浏览到本机扩展（ANE）文件）—找到我们生成的那个ANE文件</span><br style="">
<span style="">点确定。</span><br style="">
<span style="">3、在flash面板上，点击 窗口，然后 组件。打开组件面板，拖两个textArea和一个button 到舞台上。这两个textArea分别命名为txt1和txt2&nbsp;<wbr>&nbsp;<wbr>button命名为 btn</span><br style="">
<span style="">如图：</span><br style="">
<span style="">4、按F9键打开动作面板 ，输入代码：</span></p>
<p><span style=""></span><pre code_snippet_id="2234846" snippet_file_name="blog_20170301_6_5255407"  name="code" class="javascript">import com.three.callJava;

import flash.events.MouseEvent;

var con:callJava=new callJava();

btn.addEventListener(MouseEvent.CLICK,onClick);

function onClick(e){

var cj:callJava=new callJava();

var a:int=int(txt1.text);

var b:int=cj.callJavaTest(a);

txt2.text=b.toString();

}</pre></p>
<p><span style="">想要看效果，在Windows下是不行的，必须要连上android手机，然后在AIR 3.2 for android 设置里部署面板上选上 发布以后在连接的android设置运行程序。当然，签名证书也要填上的哟。另外一点是，手机上要安装air。。如果手机不想装air，也可以，同样，在布署面板里 勾选将air运行时嵌入应用程序。</span><br style="">
<br style="">
<span style="">&nbsp;<wbr> &nbsp;<wbr>然后点发布就可以测试效果了。如果发布的时候提示版本错误，那就回到flex库项目那，把那个myExtensinAs项目的flex库编辑器的 附加的编译器参数里 加上-swf-version=11</span><br style="">
<span style="">。</span><br style="">
<br style="">
<span style="">OK，最终运行结果呢，因为是在手机上，不好截图，就不展示了...<span><span style="font-family:Tahoma">&nbsp;<wbr></span></span></span><br style="">
<span style="">大概意思呢就是，屏幕上有两个文本框，在上面那个文本框里输入一个整数，然后点击按钮，下面那个文本框就会输出上面那个文本框的10倍的整数。</span><br style="">
<span style="">&nbsp;<wbr>&nbsp;<wbr>虽然这功能相当简单，而且，根本用不着这么复杂的方法。不过，我这只是一个抛砖引玉的作用，到底ANE能干嘛，有待兄弟们慢慢发掘。</span><br style="">
<br style="">
<span style="">&nbsp;<wbr>&nbsp;<wbr>最后我把要用到的东西打一下包，顺便工程也打一下吧，回复可见哦，亲</span><br style="">
</p>
</div>
