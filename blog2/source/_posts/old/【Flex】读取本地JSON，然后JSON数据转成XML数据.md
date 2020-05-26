---
title: 【Flex】读取本地JSON，然后JSON数据转成XML数据
date: 2016-11-29 11:34:42
tags: flex xml json
categories: Flash Flex ActionScript
---

<!--more-->

```
package utils
{
	import flash.xml.XMLDocument;
	import flash.xml.XMLNode;
	
	import mx.rpc.xml.SimpleXMLEncoder;

	/**
	 * 模块功能：把json格式的数据 转换成 xml格式的数据
	 * 创建时间：2016-11-26 下午3:33:20
	 * @author pengxiang
	 * 
	 */	
	public final class ConverJSONToXML
	{
		public function ConverJSONToXML()
		{
			
		}
		
		/**
		 * 函数功能：把Object格式数据	转换成       XML格式数据；(方法1 可以用，完全灵活，但是对于本项目有BUG，作为下面优化的参考) 
		 * @param obj	Object格式数据
		 * @param rootNodeName	XML根节点名称
		 * @return	XML
		 * 
		 */		
		public static function converObjectToXML1(obj:Object,rootNodeName:String):XML {
			var qName:QName = new QName(rootNodeName);
			var xmlDocument:XMLDocument = new XMLDocument();
			var simpleXMLEncoder:SimpleXMLEncoder = new SimpleXMLEncoder(xmlDocument);
			var xmlNode:XMLNode = simpleXMLEncoder.encodeValue(obj, qName, xmlDocument);
			var xml:XML = new XML(xmlDocument.toString());
			// trace(xml.toXMLString());
			return xml;
		}
		
		/**
		 * 函数功能：把Object格式数据	转换成       XML格式数据；(方法2  不可以用，半灵活，有BUG，作为下面优化的参考) 
		 * @param obj	Object格式数据
		 * @param nodeParentName	XML根节点名称
		 * @return	XML
		 * 
		 */		
		public static function converObjectToXML2(obj:Object,nodeParentName:String):XML
		{
			var nodeParent:XML = <{nodeParentName}/>;
			for(var item:Object in obj){
				var node:XML = new XML(<{item}></{item}>);
				if (item == "arr"){
					var arr :Array = String(obj[item]).split(",");
					for (var i:int=0;i<arr.length;i++){
						node.appendChild(new XML(<{i}>{arr[i]}</{i}>));
					}
				}else if (item == "Item"){
					converObjectToXML2(obj[item], node);
				}else{
					node = new XML(<{item}>{obj[item]}</{item}>);
				}
				nodeParent.appendChild(node);
			}
			
			trace(nodeParent.toXMLString());
			return nodeParent;
		}
		
		/**
		 * 函数功能：把Object格式数据	转换成       XML格式数据；(方法3  可以用，半写死半灵活的方法，针对本项目设定的json格式，无BUG )
		 * @param itemObj	Object格式数据
		 * @param rootNodeName	XML根节点名称
		 * @param itemNodeName	XML子节点名称
		 * @return	XML
		 * 
		 */		
		public static function converObjectToXML(itemObj:Object,rootNodeName:String,itemNodeName:String):XML
		{
			//				var rootNode:XML = <root/>;
			//				for(var i:int=0;i<itemObj.length;i++)
			//				{
			//					var obj:Object = itemObj[i];
			//					var itemNode:XML = <Item/>;
			//					for(var str:String in obj)
			//					{
			//						itemNode["@"+str] = obj[str];
			//					}
			//					rootNode.appendChild(itemNode);
			//				}
			
			var rootNode:XML = <{rootNodeName}/>;
			for(var i:String in itemObj)
			{
				var obj:Object = itemObj[i];
				var itemNode:XML = <{itemNodeName}/>;
				for(var str:String in obj)
				{
					itemNode["@"+str] = obj[str];
				}
				rootNode.appendChild(itemNode);
			}
			
			return rootNode;	
		}
		
		public static function objectToXml(obj:Object, root:*):void
		{
			for(var str:String in obj)
			{
				root["@"+str] = obj[str];
			}
		}
		
		/**
		 * 返回XML文件字符串 
		 * @param value
		 * @return 
		 * 
		 */    
		public static function toXMLFileString(value:XML):String
		{
			return '<?xml version="1.0" encoding="utf-8"?>\n' + value.toXMLString();
		}
	}
}
```