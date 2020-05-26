---
title: HTML5 本地存储五种方案
date: 2016-04-15 09:20:30
tags: 
categories: HTML CSS JavaScript
---

<!--more-->


<br>
<strong>1、LocalStorage</strong><br>
LocalStorage就是Key-Value的简单键&#20540;对存储结构，Web Storage除了localStorage的持久性存储外，还<br>
有针对本次回话的sessionStorage方式，一般情况下localStorage较为常用，示例代码如下：<br>
Chrome中 的存储方式是以sqlite的数据库文件形式存储。存在C:\Users\Username\AppData\Local<br>
\Google\Chrome\User Data\Default\Local Storage 中<br>
<pre code_snippet_id="2235012" snippet_file_name="blog_20170301_1_1597638"  name="code" class="javascript">function save(dataModel){

var value = dataModel.serialize();

window.localStorage['DataModel'] = value;

window.localStorage['DataCount'] = dataModel.size();

console.log(dataModel.size() + ' datas are saved');

return value;

}

function restore(dataModel){

var value = window.localStorage['DataModel'];

if(value){

dataModel.deserialize(value);

console.log(window.localStorage['DataCount'] + ' datas are restored');

return value;

}

return '';

}

function clear(){

if(window.localStorage['DataModel']){

console.log(window.localStorage['DataCount'] + ' datas are cleared');

delete window.localStorage['DataModel'];

delete window.localStorage['DataCount'];

}

}
</pre><strong><br>
2、Cookie</strong><br>
这种存储方式存储内容很有限，只适合做简单信息存储，存取接口设计得极其反人类，举例如下：<br>
<pre code_snippet_id="2235012" snippet_file_name="blog_20170301_2_5632629"  name="code" class="javascript">function getCookieValue(name) {

if (document.cookie.length &gt; 0) {

var start = document.cookie.indexOf(name + &quot;=&quot;);

if (start !== -1) {

start = start + name.length + 1;

var end = document.cookie.indexOf(&quot;;&quot;, start);

if (end === -1){

end = document.cookie.length;

}

return unescape(document.cookie.substring(start, end));

}

}

return '';

}

function save(dataModel) {

var value = dataModel.serialize();

document.cookie = 'DataModel=' + escape(value);

document.cookie = 'DataCount=' + dataModel.size();

console.log(dataModel.size() + ' datas are saved');

return value;

}</pre><br>
<strong>3、Indexed Database API</strong><br>
<br>
IndexedDB可以存储结构对象，可构建key和index的索引方式查找，目前各浏览器的已经逐渐支持<br>
IndexedDB的存储方式，其使用代码如下，需注意IndexedDB的很多操作接口类&#20284;NodeJS的异步回调方式，<br>
特别是查询时连cursor的continue都是异步再次回调onsuccess函数的操作方式，因此和NodeJS一样使用上不如同步的代码容易。
<p><pre code_snippet_id="2235012" snippet_file_name="blog_20170301_3_1902875"  name="code" class="javascript">function save(dataModel){

var tx = db.transaction(&quot;meters&quot;, &quot;readwrite&quot;);

var store = tx.objectStore(&quot;meters&quot;);

dataModel.each(function(data){

store.put({

id: data.getId(),

tag: data.getTag(),

name: data.getName(),

meterValue: data.a('meter.value'),

meterAngle: data.a('meter.angle'),

p3: data.p3(),

r3: data.r3(),

s3: data.s3()

});

});

tx.oncomplete = function() {

console.log(dataModel.size() + ' datas are saved');

};

return dataModel.serialize();

}</pre><br>
</p>
<strong>4、FileSystem API</strong><br>
<br>
FileSystem API相当于操作本地文件的存储方式，目前支持浏览器不多，其接口标准也在发展制定变化中<br>
，因此也可以动态生成图片到本地文件，然后通过 filesystem:http:*** 的URL方式直接赋&#20540;给img的<br>
html元素的src访问。<br>
<br>
<pre code_snippet_id="2235012" snippet_file_name="blog_20170301_4_1030040"  name="code" class="javascript">function save(dataModel) {

var value = dataModel.serialize();

fs.root.getFile('meters.txt', {create: true}, function (fileEntry) {

console.log(fileEntry.toURL());

fileEntry.createWriter(function (fileWriter) {

fileWriter.onwriteend = function () {

console.log(dataModel.size() + ' datas are saved');

};

var blob = new Blob([value], {type: 'text/plain'});

fileWriter.write(blob);

});

});

return value;

}
</pre><br>
<strong>5、Application Cache</strong><br>
<br>
window.applicationCache 对象是对浏览器的应用缓存的编程访问方式。其 status 属性可用于查看缓存的当前状态：<br>
<pre code_snippet_id="2235012" snippet_file_name="blog_20170301_5_7856693"  name="code" class="javascript">var appCache = window.applicationCache;

switch (appCache.status) {

case appCache.UNCACHED: // UNCACHED == 0

return 'UNCACHED';

break;

case appCache.IDLE: // IDLE == 1

return 'IDLE';

break;

case appCache.CHECKING: // CHECKING == 2

return 'CHECKING';

break;

case appCache.DOWNLOADING: // DOWNLOADING == 3

return 'DOWNLOADING';

break;

case appCache.UPDATEREADY: // UPDATEREADY == 4

return 'UPDATEREADY';

break;

case appCache.OBSOLETE: // OBSOLETE == 5

return 'OBSOLETE';

break;

default:

return 'UKNOWN CACHE STATUS';

break;

};</pre><br>
<br>
<br>
<br>
<br>
<br>
<br>
