---
title: 【Flex】编辑器的缩放功能（绝对定位和相对定位）
date: 2016-11-29 11:38:08
tags: flex 编辑器
categories: Flash Flex ActionScript
---

<!--more-->

一、横向的ide拖动缩放效果
```
<?xml version="1.0" encoding="utf-8"?>
<s:WindowedApplication xmlns:fx="http://ns.adobe.com/mxml/2009" 
					   xmlns:s="library://ns.adobe.com/flex/spark" 
					   xmlns:mx="library://ns.adobe.com/flex/mx">
	<fx:Declarations>
		<!-- 将非可视元素（例如服务、值对象）放在此处 -->
	</fx:Declarations>
	<mx:HDividedBox width="100%" height="100%" visible="true">
		<s:Panel title="左边" height="100%" textAlign="left" cornerRadius="0">
		</s:Panel>
		<s:TitleWindow title="中间" height="100%">
			
		</s:TitleWindow>
		<s:Panel title="右边" height="100%" textAlign="left" cornerRadius="0">
			
		</s:Panel>
	</mx:HDividedBox>
</s:WindowedApplication>

```
二、垂直的ide拖动缩放效果

```
<?xml version="1.0" encoding="utf-8"?>
<s:WindowedApplication xmlns:fx="http://ns.adobe.com/mxml/2009" 
					   xmlns:s="library://ns.adobe.com/flex/spark" 
					   xmlns:mx="library://ns.adobe.com/flex/mx">
	<fx:Declarations>
		<!-- 将非可视元素（例如服务、值对象）放在此处 -->
	</fx:Declarations>
	<mx:VDividedBox width="100%" height="100%" visible="true">
		<s:Panel title="左边" width="100%" height="100%" textAlign="left" cornerRadius="0">
		</s:Panel>
		<s:TitleWindow title="中间" width="100%" height="100%">
			
		</s:TitleWindow>
		<s:Panel title="右边" width="100%" height="100%" textAlign="left" cornerRadius="0">
			
		</s:Panel>
	</mx:VDividedBox>
</s:WindowedApplication>

```