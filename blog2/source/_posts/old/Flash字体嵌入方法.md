---
title: Flash字体嵌入方法
date: 2016-03-14 16:12:00
tags: ActionScript3
categories: Flash Flex ActionScript
---

<!--more-->


<div class="articalContent   newfont_family" id="sina_keyword_ad_area2">
<p>原文链接：<a target="_blank" target="_blank" href="http://www.cnblogs.com/ddw1997/archive/2011/11/13/2247546.html">http://www.cnblogs.com/ddw1997/archive/2011/11/13/2247546.html</a></p>
一、如果使用flash cs5.5<br>
<br>
1.先新建一个字体fla文件，然后是文本-字体嵌入，如图<br>
<img src="http://images.cnblogs.com/cnblogs_com/ddw1997/img/name.PNG" alt="" width="308" height="220" border="0" style="width:308.25px; height:220.81px"><br>
<br>
<img src="http://images.cnblogs.com/cnblogs_com/ddw1997/img/as.PNG" alt="" width="308" height="236" border="0" style="width:308.1px; height:236.92px"><br>
<br>
<img src="http://images.cnblogs.com/cnblogs_com/ddw1997/img/lib.PNG" alt="" width="249" height="37" border="0"><br>
<br>
然后发布swf<br>
2.导入swf，并使用字体<br>
<br>
<pre code_snippet_id="2234685" snippet_file_name="blog_20170301_1_2781429"  name="code" class="javascript">var __fontClass:Class = _loader.contentLoaderInfo.applicationDomain.getDefinition(&quot;FontX&quot;) as Class;
Font.registerFont(__fontClass);
var __format:TextFormat = new TextFormat();
var __tf:TextField = new TextField();
//var __fontArr:Array= Font.enumerateFonts(false);
var myFont:Font = new MyFont() as Font;
__format.font = myFont.fontName;
__tf.defaultTextFormat = __format;
__tf.embedFonts = true;
__tf.text = 'ABCDefg123456,.';</pre><br>
二、如果使用as项目<br>
<br>
1.首先还是建立font.swf<br>
<br>
<pre code_snippet_id="2234685" snippet_file_name="blog_20170301_2_1255476"  name="code" class="javascript">package
{
import flash.display.Sprite;
import flash.text.Font;
import flash.text.TextField;
import flash.text.TextFormat;
public class fonts extends Sprite
{
    [Embed(source=&quot;font1.ttf&quot;,fontName=&quot;name1&quot;,embedAsCFF=&quot;false&quot;,unicodeRange=&quot;U+0020,U+0041-005A,U+0020,U+0061-007A,U+0030-0039,U+002E,U+0020-002F,U+003A-0040,U+005B-0060,U+007B-007E,U+0020-002F,U+0030-0039,U+003A-0040,U+0041-005A,U+005B-0060,U+0061-007A,U+007B-007E&quot;)]
    public var FontClass1:Class;
    [Embed(source=&quot;font2.ttf&quot;,fontFamily=&quot;Franklin Gothic Book&quot;,embedAsCFF=&quot;false&quot;,unicodeRange=&quot;U+0020,U+0041-005A,U+0020,U+0061-007A,U+0030-0039,U+002E,U+0020-002F,U+003A-0040,U+005B-0060,U+007B-007E,U+0020-002F,U+0030-0039,U+003A-0040,U+0041-005A,U+005B-0060,U+0061-007A,U+007B-007E&quot;)]
    public var FontClass2:Class;

    public function fonts()
    {
        var __fontArr:Array= Font.enumerateFonts(false);
        //Font.registerFont(myFont);
        for each(var __font:Font in __fontArr)
            trace(__font.fontName, __font.fontType);
    }
}
}</pre><br>
&nbsp;&nbsp;&nbsp; source&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 指定要嵌入的字体文件路径。还可以用 systemFont指定一个系统中安装的字体。这样的话就可以不需要 source参数了。<br>
&nbsp;&nbsp;&nbsp; fontName&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 这个实际上就是 fontFamily 的别名。<br>
&nbsp;&nbsp;&nbsp; embedAsCFF&nbsp;&nbsp;&nbsp; 如果不提供这个参数，默认就是true。所以，如果系统你嵌入的字体用于TextField，一定要将其设置为false。<br>
&nbsp;&nbsp;&nbsp; unicodeRange&nbsp; 要嵌入的文本的范围。见下表：<br>
<br>
&nbsp;<br>
<br>
嵌入字体范围：<br>
<br>
&nbsp;&nbsp;&nbsp; 大写字符&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; U&#43;0020,U&#43;0041-U&#43;005A<br>
&nbsp;&nbsp;&nbsp; 小写字符&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; U&#43;0020,U&#43;0061-U&#43;007A<br>
&nbsp;&nbsp;&nbsp; 数字&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; U&#43;0030-U&#43;0039,U&#43;002E<br>
&nbsp;&nbsp;&nbsp; 标点符号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; U&#43;0020-U&#43;002F,U&#43;003A-U&#43;0040,U&#43;005B-U&#43;0060,U&#43;007B-U&#43;007E<br>
&nbsp;&nbsp;&nbsp; 基本拉丁字符&nbsp;&nbsp;&nbsp; U&#43;0020-U&#43;002F, U&#43;0030-U&#43;0039, U&#43;003A-U&#43;0040, U&#43;0041-U&#43;005A, U&#43;005B-U&#43;0060, U&#43;0061-U&#43;007A, U&#43;007B-U&#43;007E<br>
<br>
当然，还有中文范围等等，详细的可以找到你本机的 FlexSDK/frameworks/flash-unicode-table.xml<br>
<br>
2.导入swf，使用字体<br>
<br>
&nbsp;<br>
<pre code_snippet_id="2234685" snippet_file_name="blog_20170301_3_5508617"  name="code" class="javascript">package
{
import flash.display.Sprite;
import flash.display.Loader;
import flash.events.Event;
import flash.events.IOErrorEvent;
import flash.events.SecurityErrorEvent;
import flash.system.LoaderContext;
import flash.system.ApplicationDomain;
import flash.system.SecurityDomain;
import flash.net.URLRequest;
import flash.text.Font;
import flash.text.TextFormat;
import flash.text.TextField;
import flash.utils.setTimeout;

public class LoadEmbedFont extends Sprite
{
    public function LoadEmbedFont()
    {
        _loader = new Loader();
        _loader.contentLoaderInfo.addEventListener(Event.COMPLETE, handler_comp);
        _loader.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR, handler_error);
        _loader.contentLoaderInfo.addEventListener(SecurityErrorEvent.SECURITY_ERROR, handler_error);

        var __loaderContext:LoaderContext = new LoaderContext(true ,new ApplicationDomain(null));
        //如果自己又被父SWF载入了一次，那么应用程序域就必须设置成当前域或者是子域才行
        //var __loaderContext:LoaderContext = new LoaderContext(true, ApplicationDomain.currentDomain);
        //如果载入的字体swf与发起载入的swf不在一个网域，就需要将安全域设定为当前安全域
        //var __loaderContext:LoaderContext = new LoaderContext(true, ApplicationDomain.currentDomain, SecurityDomain.currentDomain);
        _loader.load(new URLRequest('myfont.swf'),  __loaderContext);
        //_loader.load(new URLRequest('http://10.0.0.5:5300/swf/assets/ui/fonts_local.swf'),  __loaderContext);
    }

    private var _loader:Loader;
    private var __fontObj:Font
    private function handler_comp($evt:Event):void
    {
        trace('载入字体成功');
        var __font:* = _loader.content;

        Font.registerFont(__font.FontClass1);
        Font.registerFont(__font.FontClass2);

        //也可以使用这种方式获取嵌入的字体类，类的名称是“源文件类名_嵌入目标变量名称”
        //var __fontClass:Class = _loader.contentLoaderInfo.applicationDomain.getDefinition(&quot;fonts_FontClass1&quot;) as Class;
//        trace('class:',__fontClass);
//        __fontObj = new __fontClass();
//        Font.registerFont(___fontClass);
        showTF();
        
    }

    private function handler_error($evt:Event):void
    {
        trace($evt.toString());
    }

    private function showTF():void
    {
        var __fontArr:Array= Font.enumerateFonts(false);
        trace('AppDomain font list:', __fontArr.length);
        for each(var __font:Font in __fontArr)
        {
            trace(__font.fontName, __font.fontType, __font.fontStyle);
            var __tf:TextField = new TextField();
            __tf.name = 'tf_'+__font.fontName;

            __tf.width = 200;
            var __format:TextFormat = new TextFormat();
            //__format.font = __fontObj.fontName
            __format.font = __font.fontName;
            __tf.defaultTextFormat = __format;
            __tf.embedFonts = true;
            __tf.text = 'ABCDefg123456,.';
            __tf.x = Math.random()*this.stage.stageWidth;
            __tf.y = Math.random()*this.stage.stageHeight;
            addChild(__tf);
            trace('__tf:', __tf.name, __tf.text, __tf.x, __tf.y);
        }
    }
}
}</pre><br>
<br>
&nbsp;3.查看字体<br>
<br>
<pre code_snippet_id="2234685" snippet_file_name="blog_20170301_4_4570526"  name="code" class="javascript">import flash.text.Font;
var allFonts:Array = Font.enumerateFonts(true);
allFonts.sortOn(&quot;fontName&quot;, Array.CASEINSENSITIVE);

for(var i:uint=0;i&lt;allFonts.length;i++){
        trace(&quot;字体名称:&quot;+allFonts[i].fontName+&quot;字体样式:&quot;+allFonts[i].fontStyle+&quot;字体类型:&quot;+allFonts[i].fontType)
}</pre></div>
