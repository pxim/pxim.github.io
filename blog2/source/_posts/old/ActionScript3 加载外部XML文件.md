---
title: ActionScript3 加载外部XML文件
date: 2017-11-09 10:25:53
tags: actionscript xml actionscript 3.0
categories: Flash Flex ActionScript
---

<!--more-->

ActionScript3 代码：

```
		private var xmlLoader:URLLoader;
		private function loadXML():void{
		    //设置外部XML的路径
			var request:URLRequest = new URLRequest("TestInfo.xml");
            xmlLoader = new URLLoader();
            try {
                xmlLoader.load(request);
            }
            catch (error:SecurityError)
            {
                trace("A SecurityError has occurred.");
            }

			xmlLoader.addEventListener(IOErrorEvent.IO_ERROR, xmlloader_ioError);
            xmlLoader.addEventListener(Event.COMPLETE, xmlloader_complete);
		}
		
        private function xmlloader_complete(event:Event):void {
			var externalXML:XML; 
			var _name:String;
                try {
                    externalXML = new XML(xmlLoader.data);
                    //此处为 获取XML里第一个节点里的属性Name的值；
				    _name= externalXML.elements()[0].attribute("Name");
					//sendData();
					
                } catch (e:TypeError) {
                    trace("Could not parse the XML file.");
                }
        }
		private function xmlloader_ioError(e:IOErrorEvent):void {
            trace("Had problem loading the XML File.");
        }
```