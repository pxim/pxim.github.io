---
title: 抛弃jQuery，深入原生的JavaScript
date: 2018-09-10 16:08:19
tags: jQuery 原生js
categories: HTML CSS JavaScript
---

<!--more-->

<p>虽然我已经做网站建设工作10多年了，但我从最近3年才开始更多地学习如何更好的将纯JavaScript用于工作中，而不总是将jQuery考虑在第一位。现在我每天学习很多东西。这个过程让我觉得<a href="http://www.adtile.me/">Adtile的JavaScript SDK</a> 更像是在创建一个开源工程，而不是“具体的工作”，不得不说，我很喜欢那样。</p>

<p> </p>

<p>今天，我准备将在过去几年学到的一些基础东西与大家一起分享，这将可能帮你深入纯 JavaScript的世界，让你能更简单的做出决定——jQuery在你下个工程中是否需要。<br />
 </p>

<h3>逐步增强<br />
 </h3>

<p>虽然像<a href="http://jquery.com/">jQuery</a>这样的库有助于解决许多浏览器之间不兼容的问题，但当你一旦开始使用纯JavaScript来完成所有工作的时候你确实会变得对他们很熟悉。为了避免写包含浏览器修改和只能解决浏览器兼容问题的JavaScript代码，我建议使用特征检测只将更现代化的浏览器作为目标来培养逐步增强的经验。这并不意味着从像IE7这样的浏览器上得不到任何东西，这只能说明在JavaScript没有增强的情况下他们得到一个更基础的经验。<br />
 </p>

<h3>我们是怎么做的</h3>

<p> </p>

<p>我们有一个叫做”feature.js”的分离的JavaScript部分，它拥有所有的功能测试。真实的测试列表比这长多了，但让我们稍晚点再回到这问题吧。为了消除一些老浏览器的不兼容，我们使用如下两个测试：</p>

<pre>
<code class="language-html hljs">var feature = {
  addEventListener : !!window.addEventListener,
  querySelectorAll : !!document.querySelectorAll,
};</code></pre>

<p>然后，在主应用程序部分，我们检测这些特性是否能被下面例子中简单的“if”语句支持。如果不被支持，那么浏览器将不会执行如下的任何代码：</p>

<pre>
<code class="language-html hljs">if (feature.addEventListener &amp;&amp; feature.querySelectorAll) {
  this.init();
}</code></pre>

<p>这两个测试确保我们在JavaScript中使用CSS选择器时有本地方法（querySelectorAll）可用，添加和删除事件的简便方法（addEventListener）且浏览器标准支持比IE8的好。阅读有关这个方法的更多内容请访问BBC blog的 <a href="http://responsivenews.co.uk/post/18948466399/cutting-the-mustard">“Cutting the mustard</a><a href="http://responsivenews.co.uk/post/18948466399/cutting-the-mustard">”</a> 文章。<br />
 </p>

<h3>浏览器支持</h3>

<p> </p>

<p>这儿有一个我们测试的哪些浏览器支持这个特性，且日后能保持运行JavaScript的粗略列表：</p>

<p> </p>

<ul><li>IE9+</li>
</ul><ul><li>Firefox 3.5+</li>
</ul><ul><li>Opera 9+</li>
</ul><ul><li>Safari 4+</li>
</ul><ul><li>Chrome 1+</li>
</ul><ul><li>iPhone and iPad iOS1+</li>
</ul><ul><li>Android phone and tablets 2.1+</li>
</ul><ul><li>Blackberry OS6+</li>
</ul><ul><li>Windows 7.5+</li>
</ul><ul><li>Mobile Firefox</li>
</ul><ul><li>Opera Mobile</li>
</ul><h3>基础原生JavaScript方法</h3>

<p>让我们开始关注与jQuery相比，最基础且需求频繁的功能在纯JavaScript中是如何工作的。对于每个例子，我都打算提供jQuery和纯JavaScript两种方法。</p>

<p> </p>

<h3>Document Ready 事件</h3>

<p>在jQuery中，你们中的许多人可能过去常常像这样使用 document.ready ：</p>

<pre>
<code class="language-html hljs">$(document).ready(function() {
  // Code
});</code></pre>

<p>但是你知道，你可以将所有的JavaScript放在页面的底端，但他们确实是一回事吗？JavaScript同样拥有一个DOM内容加载事件的侦听器，而不是使用jQuery的document.ready:</p>

<pre>
<code class="language-html hljs">document.addEventListener("DOMContentLoaded", function() {
  // Code
}, false);</code></pre>

<h3>选择器API</h3>

<p>JavaScript的本地选择器API非常优秀。它对CSS选择器是有用的且jQuery提供的非常类似。如果你过去经常在jQuery中这样写：</p>

<pre>
<code class="language-html hljs">var element = $("div");</code></pre>

<p>现在你可以用如下的语句来替代：</p>

<pre>
<code class="language-html hljs">var element = document.querySelector("div");</code></pre>

<p>或者选择所有div的某些内部容器：</p>

<pre>
<code class="language-html hljs">var elements = document.querySelectorAll(".container div");</code></pre>

<p>你也可以针对特定元素进行查询来找到它的子元素：</p>

<pre>
<code class="language-html hljs">var navigation = document.querySelector("nav");
var links = navigation.querySelectorAll("a");</code></pre>

<p>很简单，容易理解且现在不需要太多的代码，不是吗？更远一步来说，我们甚至可以自己建一个小型的JavaScript库来进行简单的DOM查询。以下是Andrew Lunny<a href="http://remysharp.com/2013/04/19/i-know-jquery-now-what/#backToTheFutureToday-heading">已经</a><a href="http://remysharp.com/2013/04/19/i-know-jquery-now-what/#backToTheFutureToday-heading">想出来的一些东西</a>：</p>

<pre>
<code class="language-html hljs">// This gives us simple dollar function and event binding
var $ = document.querySelectorAll.bind(document);
Element.prototype.on = Element.prototype.addEventListener;

// This is how you use it
$(".element")[0].on("touchstart", handleTouch, false);</code></pre>

<h3>遍历DOM</h3>

<p>用纯JavaScript来遍历DOM比起用jQuery来说有一些困难。但也不是太困难。下面是一些简单的例子：</p>

<pre>
<code class="language-html hljs">// Getting the parent node
var parent = document.querySelector("div").parentNode;</code></pre>

<pre>
<code class="language-html hljs">// Getting the next node
var next = document.querySelector("div").nextSibling;</code></pre>

<pre>
<code class="language-html hljs">// Getting the previous node
var next = document.querySelector("div").previousSibling;
</code></pre>

<pre>
<code class="language-html hljs">// Getting the first child element
var child = document.querySelector("div").children[0];
</code></pre>

<pre>
<code class="language-html hljs">// Getting the last child
var last = document.querySelector("div").lastElementChild;</code></pre>

<h3>添加和删除样式名（class name)</h3>

<p>使用jQuery，添加、删除和检查一个元素是否有确定的类是很简单的事。用纯JavaScript会有一些复杂，但也不是太复杂。给元素一个叫做“foo”的类且替换目前所有的类：</p>

<pre>
<code class="language-html hljs">// Select an element
var element = document.querySelector(".some-class");
</code></pre>

<pre>
<code class="language-html hljs">// Give class "foo" to the element
element.className = "foo";</code></pre>

<p>在不替换目前类的前提下增加类：</p>

<pre>
<code class="language-html hljs">element.className += " foo";</code></pre>

<p>从html元素中移除”no-js”类且用”js”来替代：</p>

<pre>
<code class="language-html hljs">&lt;html class="no-js"&gt;
&lt;head&gt;
  &lt;script&gt;
    document.documentElement.className = "js";
  &lt;/script&gt;</code></pre>

<p>这相当简单，对不对？下一步，只移除某些类稍微有点复杂。我一直在单独部分使用这个叫做util.js的小助手函数。它有两个参数：元素和你想移除的类：</p>

<pre>
<code class="language-html hljs">// removeClass, takes two params: element and classname
function removeClass(el, cls) {
  var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
  el.className = el.className.replace(reg, " ").replace(/(^\s*)|(\s*$)/g,"");
}</code></pre>

<p>然后，在主应用程序部分，我一直像这样使用：</p>

<pre>
<code class="language-html hljs">removeClass(element, "foo");</code></pre>

<p>如果针对某些类你同样想检查一个元素，那么就像jQuery的hasClass一样。你可能需要把这些代码加入到你的utils工具中：</p>

<pre>
<code class="language-html hljs">// hasClass, takes two params: element and classname
function hasClass(el, cls) {
  return el.className &amp;&amp; new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}</code></pre>

<p>然后可以这样使用：</p>

<pre>
<code class="language-html hljs">// Check if an element has class "foo"
if (hasClass(element, "foo")) {

  // Show an alert message if it does
  alert("Element has the class!");
}</code></pre>

<h3>HTML5 的  classList API 简介</h3>

<p>如果你只需要支持像IE10+,Chrome,FireFox,Opera和Safari这样较现代的浏览器，那么你可以开始使用HTML5的classList功能，它让增加和删除类变得更简单。</p>

<p>这是我在我们最新的开发者文档中最终做的事，随着功能的开发，这更像是UI的加强，且如果这不是现在的，其实际上并不是能打破经验的一些东西。</p>

<p>通过下面简单的”if”语句，你可以检测出浏览器是否支持这个功能：</p>

<pre>
<code class="language-html hljs">if ("classList" in document.documentElement) {
  // classList is supported, now do something with it
}</code></pre>

<p>用classList来添加、删除、转换类：</p>

<pre>
<code class="language-html hljs">// Adding a class
element.classList.add("bar");</code></pre>

<pre>
<code class="language-html hljs">// Removing a class
element.classList.remove("foo");
</code></pre>

<pre>
<code class="language-html hljs">// Checking if has a class
element.classList.contains("foo");</code></pre>

<pre>
<code class="language-html hljs">// Toggle a class
element.classList.toggle("active");</code></pre>

<p>使用classList的另一个好处是它比使用原始的类名属性表现得更好。如果你有像这样的元素：</p>

<pre>
<code class="language-html hljs">&lt;div id="test" class="one two three"&gt;&lt;/div&gt;</code></pre>

<p>你想操作哪一个：</p>

<pre>
<code class="language-html hljs">var element = document.querySelector("#test");
addClass(element, "two");
removeClass(element, "four");</code></pre>

<p>这些被类名属性读和写的方法将触发浏览器重绘。但这并不是我们是否应该用相应的classList方法的情况：</p>

<pre>
<code class="language-html hljs">var element = document.querySelector("#test");
element.classList.add("two");
element.classList.remove("four");</code></pre>

<p>用classList之后，最基本的类名属性仅在必要的时候进行更改。添加一个已经存在的类和移除一个不存在的类时，根本没有牵涉到类名属性，这意味着我们刚刚避免了两次重绘。</p>

<h3>事件监听器</h3>

<p>添加和移除一个元素的事件监听器在纯JavaScript和jQuery中都一样比较简单。当你必须要添加多个事件监听器时，事情就变得有点复杂了，但我会详细解释给你的。最简单的一个例子，当你单击一个元素时弹出一个警告信息，如下代码所述：</p>

<p> </p>

<p> </p>

<pre>
<code class="language-html hljs">element.addEventListener("click", function() {
  alert("You clicked");
}, false);</code></pre>

<p>为了让页面的所有元素都实现这个功能，我们必须依次重复每个元素且给他们添加事件监听器：</p>

<pre>
<code class="language-html hljs">// Select all links
var links = document.querySelectorAll("a");

// For each link element
[].forEach.call(links, function(el) {

  // Add event listener
  el.addEventListener("click", function(event) {
    event.preventDefault();
    alert("You clicked");
  }, false);

});</code></pre>

<p>JavaScript有关事件监听器一个最伟大的功能就是“addEventListener” 能携带一个作为第二个参数的对象，这将会让它自动的寻找一个叫做“handleEvent”的方法然后调用它。<a href="https://twitter.com/ryanseddon">Ryan Seddon</a>在它的<a href="http://www.thecssninja.com/javascript/handleevent">文章</a>中已经彻底地介绍了这个方法，所以我只打算给一个最简单的例子，你可以通过在它的博客中学到更多的东西：</p>

<pre>
<code class="language-html hljs">var object = {
  init: function() {
    button.addEventListener("click", this, false);
    button.addEventListener("touchstart", this, false);
  },
  handleEvent: function(e) {
    switch(e.type) {
      case "click":
        this.action();
        break;
      case "touchstart":
        this.action();
        break;
    }
  },
  action: function() {
    alert("Clicked or touched!");
  }
};

// Init
object.init();</code></pre>

<h3>操作DOM</h3>

<p>用纯JavaScript来操作DOM刚开始听起来就像一个可怕的想法，但比使用jQuery其实它并没有复杂多少。下面，我们会有一个例子，选择DOM的元素，克隆它，用JavaScript来操作克隆的样式，然后用被操纵的东西来替代原始的元素。</p>

<pre>
<code class="language-html hljs">// Select an element
var element = document.querySelector(".class");

// Clone it
var clone = element.cloneNode(true);

// Do some manipulation off the DOM
clone.style.background = "#000";

// Replaces the original element with the new cloned one
element.parentNode.replaceChild(clone, element);</code></pre>

<p>在DOM中，如果除了附加在&lt;body&gt;中新创建div，你不想替代任何东西，那么你可以这样做：</p>

<pre>
<code class="language-html hljs">document.body.appendChild(clone);</code></pre>

<p>如果你觉得你想了解更多不同的DOM方法，我建议你可以拜读一下 Peter-Paul Koch的<a href="http://quirksmode.org/dom/core/">DOM Core tables</a>。</p>

<h3>进一步深入</h3>

<p>在这儿我想再多分享两个我最近发现的先进技术。这些都是我们在创建<a href="http://www.adtile.me/">Adtile</a>的时候需要的功能，因此你也会觉得它们很有用。</p>

<h3>在JS中决定响应图片的最大宽度</h3>

<p>这是我最爱的之一，且如果你需要用JavaScript操作流体图片时这非常有用。由于浏览器默认返回当前被调整过大小的图片，我们必须要想一些其它的办法。幸运的是，现代浏览器目前已有解决的方案了：</p>

<pre>
<code class="language-html hljs">var maxWidth = img.naturalWidth;</code></pre>

<p>这将会给我们提供最大宽度100%像素的图片，且IE9,Chrome,Firefox,Safari和Opera都支持这个方法。我们也可以保留这个特性然后通过加载图片到内存中添加老浏览器的支持：</p>

<pre>
<code class="language-html hljs">// Get image's max-width:100%; in pixels
function getMaxWidth(img) {
  var maxWidth;

  // Check if naturalWidth is supported
  if (img.naturalWidth !== undefined) {
    maxWidth = img.naturalWidth;

  // Not supported, use in-memory solution as fallback
  } else {
    var image = new Image();
    image.src = img.src;
    maxWidth = image.width;
  }

  // Return the max-width
  return maxWidth;
}</code></pre>

<p>你应该注意到在检查宽度前，图片必须完全被加载。这是我们一直使用的用于确定它们有尺寸的方法：</p>

<pre>
<code class="language-html hljs">function hasDimensions(img) {
  return !!((img.complete &amp;&amp; typeof img.naturalWidth !== "undefined") || img.width);
}</code></pre>

<h3>判断一个元素是否在视图窗口中</h3>

<p>通过使用<a href="https://developer.mozilla.org/en-US/docs/Web/API/Element.getBoundingClientRect">getBoundingClientRect</a>方法，你可以获取页面中任何元素的位置。以下是一个简单的函数来表明它有多简单和多强大。这个函数有一个参数，那就是你想要检查的元素。当元素为可见时，函数将返回true：</p>

<p> </p>

<pre>
<code class="language-html hljs">// Determine if an element is in the visible viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.top &gt;= 0 &amp;&amp;
    rect.left &gt;= 0 &amp;&amp;
    rect.bottom &lt;= (window.innerHeight || html.clientHeight) &amp;&amp;
    rect.right &lt;= (window.innerWidth || html.clientWidth)
  );
}</code></pre>

<p>上面的函数可以在给窗体添加一个”滚动”事件监听器，然后调用isInViewport()方法时使用。</p>

<h3>结论</h3>

<p>在你的下个项目中是否使用<a href="http://jquery.com/">jQuery</a>很大程度上取决于你所建的项目。如果你的项目需要大量的前端代码，那么你应该使用jQuery。然而，当你构建一个JavaScript插件或库时，你应该只考虑纯JavaScript。使用纯JavaScript意味着更少的请求和更少的数据加载。这同样意味着你不必强迫开发人员在他们的项目中加jQuery。</p>

<p><strong>原文地址： <a href="http://blog.adtile.me/2014/01/16/a-dive-into-plain-javascript/?utm_source=ourjs.com">blog.adtile.me</a></strong></p>

<p><strong>转自：</strong><a href="https://www.cnblogs.com/frontdeend/p/6646897.html">https://www.cnblogs.com/frontdeend/p/6646897.html</a></p>