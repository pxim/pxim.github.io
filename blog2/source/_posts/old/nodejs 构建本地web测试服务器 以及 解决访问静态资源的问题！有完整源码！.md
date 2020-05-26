---
title: nodejs 构建本地web测试服务器 以及 解决访问静态资源的问题！有完整源码！
date: 2017-09-14 14:53:21
tags: 
categories: Node.js
---

<!--more-->


<p style="text-align:left">直接打开html文件，是以file:///方式打开的，这种方式很多时候会遇到跨域的问题，因此我们一般会搭建一个简易的本地服务器，来运行测试页面。</p>
<p><span style="font-size:18px"><strong>一、构建静态服务器</strong></span></p>
<p><strong>1、使用express模块</strong></p>
<p>建立个js文件，命名server，内容代码如下：</p>
<div class="cnblogs_code">
<pre><span style="color:#008080"> 1</span> <span style="color:#0000ff">var</span> express = require('express'<span style="color:#000000">);
</span><span style="color:#008080"> 2</span> <span style="color:#0000ff">var</span> app =<span style="color:#000000"> express();
</span><span style="color:#008080"> 3</span> <span style="color:#0000ff">var</span> path = require('path'<span style="color:#000000">);
</span><span style="color:#008080"> 4</span> 
<span style="color:#008080"> 5</span> <span style="color:#008000">//</span><span style="color:#008000">指定静态资源访问目录</span>
<span style="color:#008080"> 6</span> app.use(express.static(require('path').join(__dirname, 'public'<span style="color:#000000">)));
</span><span style="color:#008080"> 7</span> <span style="color:#008000">//</span><span style="color:#008000"> app.use(express.static(require('path').join(__dirname, 'views'))); 如果有文件夹存放资源，出现报错的话，那就多use几次就可以了</span>
<span style="color:#008080"> 8</span> <span style="color:#008000">//</span><span style="color:#008000"> 设定views变量，意为视图存放的目录</span>
<span style="color:#008080"> 9</span> app.set('views', (__dirname &#43; &quot;/public&quot;<span style="color:#000000">));
</span><span style="color:#008080">10</span> <span style="color:#008000">//</span><span style="color:#008000"> app.set('views', __dirname);</span>
<span style="color:#008080">11</span> <span style="color:#008000">//</span><span style="color:#008000"> 修改模板文件的后缀名为html</span>
<span style="color:#008080">12</span> app.set( 'view engine', 'html'<span style="color:#000000"> );
</span><span style="color:#008080">13</span> <span style="color:#008000">//</span><span style="color:#008000"> 运行ejs模块</span>
<span style="color:#008080">14</span> app.engine( '.html', require( 'ejs'<span style="color:#000000"> ).__express );
</span><span style="color:#008080">15</span> 
<span style="color:#008080">16</span> app.get(&quot;/&quot;, <span style="color:#0000ff">function</span><span style="color:#000000">(req, res) {
</span><span style="color:#008080">17</span>     res.render('index'<span style="color:#000000">);
</span><span style="color:#008080">18</span> <span style="color:#000000">});
</span><span style="color:#008080">19</span> 
<span style="color:#008080">20</span> <span style="color:#0000ff">var</span> server = app.listen(1336, &quot;127.0.0.1&quot;,<span style="color:#0000ff">function</span><span style="color:#000000">(){
</span><span style="color:#008080">21</span>     <span style="color:#0000ff">var</span> host =<span style="color:#000000"> server.address().address;
</span><span style="color:#008080">22</span>     <span style="color:#0000ff">var</span> port =<span style="color:#000000"> server.address().port;
</span><span style="color:#008080">23</span>     console.log(&quot;Server running at http://%s:%s&quot;<span style="color:#000000">, host, port)
</span><span style="color:#008080">24</span> });</pre>
</div>
<p>文件结构如下：</p>
<p><img src="http://images2015.cnblogs.com/blog/934812/201707/934812-20170713170440197-645897.png" alt=""></p>
<p>运行的话只要执行：<code>node server.js</code> 就可以了</p>
<p>然后在浏览器输入 <code><span style="color:#6a8759">http://127.0.0.1:1336/ </span></code>来访问项目文件夹内的文件了</p>
<p><strong>2、使用connect模块</strong></p>
<p>建立个js文件，命名 <code>server2 ，内容代码如下：</code></p>
<div class="cnblogs_code">
<pre> <span style="color:#0000ff">var</span> connect = require(&quot;connect&quot;<span style="color:#000000">);
 </span><span style="color:#0000ff">var</span> serveStatic = require(&quot;serve-static&quot;<span style="color:#000000">);

 </span><span style="color:#0000ff">var</span> app =<span style="color:#000000"> connect();
 </span><span style="color:#008000">//</span><span style="color:#008000"> app.use(serveStatic(&quot;C:\\xxx\\xxx\\xxx\\项目文件夹&quot;));</span>
 app.use(serveStatic(&quot;public&quot;<span style="color:#000000">));

 app.listen(</span>1337<span style="color:#000000">);
 console.log(</span>'Server running at http://127.0.0.1:1337/');</pre>
</div>
<p>运行的话只要执行：<code>node server2.js</code> 就可以了，</p>
<p>然后在浏览器输入 <code><span style="color:#6a8759">http://127.0.0.1:1337/</span> </code>
来访问项目文件夹内的文件了。（如果是index.html文件可以省略不写，默认加载的就是这个文件）；</p>
<p><strong>3、使用http模块</strong></p>
<p>建立个js文件，命名 <code>server3 ，内容代码如下：</code></p>
<div class="cnblogs_code">
<pre><span style="color:#008080"> 1</span> <span style="color:#0000ff">var</span> finalhandler = require('finalhandler'<span style="color:#000000">)
</span><span style="color:#008080"> 2</span> <span style="color:#0000ff">var</span> http = require('http'<span style="color:#000000">)
</span><span style="color:#008080"> 3</span> <span style="color:#0000ff">var</span> serveStatic = require('serve-static'<span style="color:#000000">)
</span><span style="color:#008080"> 4</span> 
<span style="color:#008080"> 5</span> <span style="color:#008000">//</span><span style="color:#008000"> Serve up public/ftp folder</span>
<span style="color:#008080"> 6</span> <span style="color:#0000ff">var</span> serve = serveStatic('public', {'index': ['index.html', 'index.htm'<span style="color:#000000">]})
</span><span style="color:#008080"> 7</span> 
<span style="color:#008080"> 8</span> <span style="color:#008000">//</span><span style="color:#008000"> Create server</span>
<span style="color:#008080"> 9</span> <span style="color:#0000ff">var</span> server = http.createServer(<span style="color:#0000ff">function</span><span style="color:#000000"> onRequest (req, res) {
</span><span style="color:#008080">10</span> <span style="color:#000000">    serve(req, res, finalhandler(req, res))
</span><span style="color:#008080">11</span> <span style="color:#000000">})
</span><span style="color:#008080">12</span> 
<span style="color:#008080">13</span> <span style="color:#008000">//</span><span style="color:#008000"> Listen</span>
<span style="color:#008080">14</span> server.listen(1338<span style="color:#000000">);
</span><span style="color:#008080">15</span> console.log('Server running at http://127.0.0.1:1338/');</pre>
</div>
<p>运行的话只要执行：<code>node server3.js</code> 就可以了，</p>
<p>然后在浏览器输入 <code><span style="color:#6a8759">http://127.0.0.1:1338/ </span></code>来访问项目文件夹内的文件了。</p>
<p>注：总的文件目录如下：</p>
<p><img src="http://images2015.cnblogs.com/blog/934812/201707/934812-20170713172354400-1245708414.png" alt=""></p>
<p>源码下载地址：<a target="_blank" title="https://github.com/arvin0/nodejs-example/tree/master/web-static-server" href="https://github.com/arvin0/nodejs-example/tree/master/web-static-server" target="_blank">https://github.com/seanpx/nodejs-example/tree/master/web-static-server</a><br>
</p>
<p><strong><span style="font-size:18px">二、解决访问静态资源</span></strong></p>
<p>主要使用两个模块</p>
<p>1.通用的&nbsp;<span class="cnblogs_code">serve-static</span>&nbsp;模块</p>
<p>详细文档：<a target="_blank" href="https://github.com/expressjs/serve-static" target="_blank">https://github.com/expressjs/serve-static
</a><br>
</p>
<p>2.express专属的 &nbsp;<span class="cnblogs_code">app.use(express.static(require('path').join(__dirname, 'public')));</span>&nbsp; 方法</p>
<p>详细文档：<a target="_blank" href="http://expressjs.com/en/4x/api.html" target="_blank">http://expressjs.com/en/4x/api.html</a> ，然后ctrl&#43;F搜索
<span class="cnblogs_code">express.static</span> ，就能找到对应的说明了。</p>
<p>&nbsp;</p>
