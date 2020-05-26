---
title: ActionScript3 使用post方法通信nodejs后端
date: 2017-11-08 14:03:41
tags: actionscript 3.0 nodejs 通信
categories: Flash Flex ActionScript
---

<!--more-->

as3 使用post方法通信nodejs后端

**ActionScript3 代码**
```
package {

	import flash.net.*;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.display.MovieClip;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	import flash.net.URLLoaderDataFormat;
	import flash.net.URLVariables;
	import flash.events.HTTPStatusEvent;
	import flash.events.IOErrorEvent;
	import flash.events.ProgressEvent;
	import flash.events.SecurityErrorEvent;
	import flash.system.fscommand;

	public class postTest{

		public function postTest() {
			// constructor code
			sendData();
		}

		private var loader: URLLoader;
		private function sendData(): void {
			var url: String = "http://127.0.0.1:8066/login";

			var _data: URLVariables = new URLVariables();
			/*_data.aa = txt1.text;
	_data.bb = txt2.text;*/
			_data.Name = "测试1";

			var _request: URLRequest = new URLRequest();
			_request.url = url;
			_request.method = URLRequestMethod.POST;
			_request.data = _data;
			
			//方法一 sendToURL 但是没有数据回调
			//sendToURL(_request);
			
			//方法二 URLLoader 有数据回调
			loader = new URLLoader();

			//loader.dataFormat = URLLoaderDataFormat.TEXT;
			loader.addEventListener(Event.COMPLETE, loader_complete);
		//	loader.addEventListener(Event.OPEN, loader_open);
			loader.addEventListener(HTTPStatusEvent.HTTP_STATUS, loader_httpStatus);
		//	loader.addEventListener(ProgressEvent.PROGRESS, loader_progress);
			loader.addEventListener(SecurityErrorEvent.SECURITY_ERROR, loader_security);
			loader.addEventListener(IOErrorEvent.IO_ERROR, loader_ioError);

			loader.load(_request);
			//loader.load(new URLRequest(url + "?aa=11&bb=22"));
		}
		private function loader_complete(e: Event): void {
			trace("Event.COMPLETE");
			trace("目标文件的原始数据 (纯文本) : \n" + loader.data);
			trace(e.target.data);
		}
		private function loader_open(e: Event): void {
			trace("Event.OPEN");
			trace("读取了的字节 : " + loader.bytesLoaded);
		}
		private function loader_httpStatus(e: HTTPStatusEvent): void {
			trace("HTTPStatusEvent.HTTP_STATUS");
			trace("HTTP 状态代码 : " + e.status);
			if (e.status == 200) {
				//mc_blank.visible = false;
			} else if (e.status == 404) {
				//mc_blank.visible = true;
				fscommand("quit");
			}
		}
		private function loader_progress(e: ProgressEvent): void {
			trace("ProgressEvent.PROGRESS");
			trace("读取了的字节 : " + loader.bytesLoaded);
			trace("文件总字节 : " + loader.bytesTotal);
		}
		private function loader_security(e: SecurityErrorEvent): void {
			trace("SecurityErrorEvent.SECURITY_ERROR");
		}
		private function loader_ioError(e: IOErrorEvent): void {
			trace("IOErrorEvent.IO_ERROR");
		}
	}
}
```

**注意：**
1.单独的使用swf访问nodejs后端的话，这样就可以OK了。
2.如果是把swf嵌入到html里，通过html打开，那这样就会遇到跨域问题，报错如图：
![这里写图片描述](http://img.blog.csdn.net/20171110094739634?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYXJ2aW4w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

解决方案：在nodejs程序的public目录下添加一个crossdomain.xml文件，然后就OK了。
**nodejs里目录结构**
![这里写图片描述](http://img.blog.csdn.net/20171110095451456?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYXJ2aW4w/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

**crossdomain.xml内容**
```
<?xml version="1.0" encoding="UTF-8"?>
<cross-domain-policy>
    <!--<allow-access-from domain="www.xx.com" />-->
    <!--<allow-access-from domain="*.xx.com" />-->
    <!--<allow-access-from domain="127.0.0.8013" />-->
    <allow-access-from domain="*" />
</cross-domain-policy>
```
关于crossdomain.xml文件格式说明，
请看这篇文章 [Flash跨域传输数据 crossdomain.xml](https://www.cnblogs.com/yangxunwu1992/p/6061864.html)

