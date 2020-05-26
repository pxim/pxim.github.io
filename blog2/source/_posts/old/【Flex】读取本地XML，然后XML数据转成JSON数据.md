---
title: 【Flex】读取本地XML，然后XML数据转成JSON数据
date: 2016-11-29 11:32:53
tags: flex xml json
categories: Flash Flex ActionScript
---

<!--more-->

干了一年H5，最近被要求写编辑器，Electron等级还不够，写不了，只有重新拿起as3，用flex，最近写到数据表编辑模块，有这部分功能，基本完成 。

```
package utils
{
	/**
	 * 模块功能：把xml格式的数据 转换成 json格式的数据
	 * 创建时间：2016-11-26 下午3:33:20
	 * @author pengxiang
	 * 
	 */	
	public final class ConverXMLToJSON
	{
		public function ConverXMLToJSON()
		{
			
		}
		

		/**
		 * 函数功能：直接 把XML格式数据	  转换成    JSON格式的字符串数据（不添加任何特殊处理，直接输出）；  
		 * @param $str
		 * @return 
		 * 
		 */		
		private static function converXMLToJSON(xml:XML):String
		{  
			//整理xml字符串为json  
//			$str = removeXMLNameSpace($str);    //移除xml中的命名空间  
//			var xml:XML = XML($str);  
			var obj:Object = converXMLToObject(xml);  
			var str:String = JSON.stringify(obj);
			return str;
		}  
		
		/**
		 * 函数功能：把Object格式数据	  转换成    JSON格式的字符串数据； 
		 * @param xmlObj
		 * @return String（JSON格式的String） 
		 * 
		 */		
		public static function converObjectToJSON(xmlObj:Object):String
		{
			//stringify(value:Object, replacer:* = null, space:* = null):String	
			//[静态] 返回 JSON 格式的字符串，用于表示 ActionScript 值。
			var str:String = JSON.stringify(xmlObj); 
		
			return str;
		}
		
		/**
		 * 函数功能：把XML格式数据	  转换成    Object格式数据；
		 * @param xml
		 * @return	 Object		
		 * 
		 */		
		public static function converXMLToObject(xml:XML):Object
		{  
			var obj:Object = new Object();  
			var ls:XMLList = xml.children();  
			var atts:XMLList = xml.attributes();  
			
			for each (var att:XML  in atts){  
				obj[att.name().toString()]= att.toString();  
			}  
			
			if(ls.length() > 0){  
				for each(var node:XML in ls){  
					var objsub:Object = converXMLToObject(node);  
					var tmp:Object = obj[node.name()];  
					if(tmp==null){  
						obj[node.name()]=objsub;  
					}else if(tmp is Array){  
						(tmp as Array).push(objsub);  
					}  
					else{  
						obj[node.name()]=new Array(tmp,objsub);  
					}  
				}  
			}  
			return obj;  
		} 
		
		/**
		 * 函数功能：去除XML中的命名空间  
		 * @param $str
		 * @return String
		 * 
		 */		
		public static function removeXMLNameSpace($str:String):String
		{  
			var a:Array = findXMLNameSpace($str);  
			//去除空间声明  
			var r:RegExp = /xmlns[^"]+"[^"]+"/g;  
			$str = $str.replace(r , "");  
			
			//去除空间名使用  
			for (var i:int = 0; i < a.length; i++){  
				var s:String = a[i] + ":"  
				r = new RegExp(s , "g");  
				$str = $str.replace(r , "");  
			}  
			return $str;  
		}  
		
		/**
		 * 函数功能：查找XML中的命名空间 
		 * @param $str
		 * @return Array
		 * 
		 */		
		public static function findXMLNameSpace($str:String):Array
		{  
			var arr:Array = new Array();  
			var r:RegExp = /xmlns[^"]+"[^"]+"/g;  
			var a:Array = $str.match(r);  
			r = /xmlns:[^=]+=/g;  
			for each (var s:String in a){  
				var a1:Array = s.match(r);  
				if(a1 && a1.length){  
					s = a1[0];  
					s = s.replace("xmlns:" ,"")  
					s = s.replace("=","");  
					arr.push(s);  
				}  
			}  
			return arr;  
		}  
	}
}
```