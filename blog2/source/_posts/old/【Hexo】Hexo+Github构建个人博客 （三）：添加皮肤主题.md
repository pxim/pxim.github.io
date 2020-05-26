---
title: 【Hexo】Hexo+Github构建个人博客 （三）：添加皮肤主题
date: 2017-05-07 17:25:01
tags: 
categories: Hexo
---

<!--more-->

<strong>一、选择主题</strong></p>
<p>选择你自己喜欢的主题</p>
<p>参考：</p>
<p>1.<a href="https://hexo.io/themes/" target="_blank">Hexo官网主题</a></p>
<p>2.<a href="https://www.zhihu.com/question/24422335" target="_blank">知乎：有哪些好看的 Hexo 主题？</a></p>
<p>&nbsp;</p>
<p><strong>二、配置主题</strong></p>
<p>1.我选择了hexo-theme-yilia这个主题，简洁大方，功能齐全；</p>
<p>这是他的地址：<a href="https://github.com/litten/hexo-theme-yilia" target="_blank">https://github.com/litten/hexo-theme-yilia</a></p>
<p>2.具体添加方法：</p>
<div class="cnblogs_code">
<pre><span style="color: #000000"><strong>安装</strong>
git clone https:</span><span style="color: #008000">//</span><span style="color: #008000">github.com/litten/hexo-theme-yilia.git themes/yilia</span>
<span style="color: #000000"><strong>
配置</strong>
修改hexo根目录下的 _config.yml ： theme: yilia<br>
<strong>更新</strong>
cd themes</span>/<span style="color: #000000">yilia
git pull<br></span></pre>
</div>
<p><strong><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170404170613457-1340903307.jpg" alt=""><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170404170842722-887182821.jpg" alt=""><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170404170712628-1746589845.jpg" alt=""></strong></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>三、可能会出现的问题</strong></p>
<p>1.如图：</p>
<p><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170404165847832-695290325.jpg" alt=""></p>
<p>解决方法：如图所示，在git里执行命令 <span class="cnblogs_code">npm i hexo-generator-json-content --save<br></span></p>
<p>&nbsp;</p>
<p><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170404170319503-287771447.jpg" alt=""></p>
<p>并且添加jsonContent这段配置信息；</p>
<p>2.执行命令 &nbsp;<span class="cnblogs_code">npm i hexo-generator-json-content --save</span> 后，还是上面的错误，或者如图这样子的</p>
<p><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170404170452238-1870365263.jpg" alt=""></p>
<p>解决方案：</p>
<p>1.升级Node到6.X以及以上版本；</p>
<p>2.再执行一遍 <span class="cnblogs_code">npm i hexo-generator-json-content --save</span></p>
<p>就OK了。</p>
<p>3.如果有更多问题请参考 <a href="https://github.com/litten/hexo-theme-yilia/issues" target="_blank">https://github.com/litten/hexo-theme-yilia/issues</a></p>
<p>&nbsp;</p>
<p><strong>四、换好主题后，创建新文章，进行预览</strong></p>
<p>执行命令 &nbsp;<span class="cnblogs_code">hexo new <span style="color: #800000">"</span><span style="color: #800000">My New Post</span><span style="color: #800000">"</span></span> ，关于更多创建，写作的命令信息，请阅读 <a href="https://hexo.io/zh-cn/docs/writing.html" target="_blank">https://hexo.io/zh-cn/docs/writing.html</a></p>
<p><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170404171911863-545075796.jpg" alt=""></p>
<p>执行命令&nbsp;<span class="cnblogs_code">hexo server （或 hexo s）</span>&nbsp;</p>
<p><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170404171919519-631652098.jpg" alt=""></p>
<p>再点击网址 <a href="http://0.0.0.0:4000/">http://0.0.0.0:4000</a></p>
<p>&nbsp;</p>
<p><strong>五、更新到GitHub上</strong></p>
<p>执行三句命令</p>
<div class="cnblogs_code">
<pre><span style="color: #000000">hexo clean
hexo generate
hexo deploy</span></pre>
</div>
<p><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170404171550613-2000876845.jpg" alt=""></p>
<p><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170404171558613-21126272.jpg" alt=""></p>
<p><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170404171607753-903131783.jpg" alt=""></p>
<p>然后刷新一下GitHub 博客项目页面，看是否更新好了，等更新好之后，再打开 <a href="https://arvin0.github.io/" target="_blank">https://arvin0.github.io/</a>&nbsp; 链接，就可以了，记得把用户名换成你的。</p>
<p>&nbsp;</p>
