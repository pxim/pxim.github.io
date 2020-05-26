---
title: as3 操作图片，获取，设置实际像素，扣除透明区域
date: 2016-07-13 11:49:25
tags: as3 图片
categories: Flash Flex ActionScript
---

<!--more-->


<pre code_snippet_id="1759716" snippet_file_name="blog_20160713_1_1788861"  code_snippet_id="1759716" snippet_file_name="blog_20160713_1_1788861" class="javascript" name="code">private var a:Loader = new Loader();
		private function test():void
		{
			a.load(new URLRequest(&quot;assets/冷却液管.png&quot;));
			a.contentLoaderInfo.addEventListener(Event.COMPLETE, an);
		}
		private function an(evt:Event):void 
		{   
			var hh:BitmapData = new BitmapData(a.content.width,a.content.height,false,0xcccccc);
			var kk:Bitmap = new Bitmap(hh);
			addChild(kk);
			kk.x = 200;
			
			var tu2:Bitmap=Bitmap(a.content as Bitmap);
//			addChild(tu2);
			var yan:uint;
			for (var i:uint = 0; i&lt;tu2.width; i++) 
			{
				for (var j:uint = 0; j&lt;tu2.height; j++) 
				{
					yan = (a.content as Bitmap).bitmapData. getPixel32 (i, j);
					if (yan&lt;=0)  // 要抠取的颜色 
					{
//						tu2.bitmapData. setPixel32 (i,j,0xffff0000);
						hh. setPixel (i,j,0xff0000);
					}
				}
			}   
		}</pre><br>
