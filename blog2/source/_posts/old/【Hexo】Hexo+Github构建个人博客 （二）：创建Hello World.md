---
title: 【Hexo】Hexo+Github构建个人博客 （二）：创建Hello World
date: 2017-05-07 17:25:04
tags: 
categories: Hexo
---

<!--more-->

<strong>一、生成项目，初始化</strong></div>
<div style="display: block">在项目目录下创建好Blog目录，比如我的是 &nbsp;<span class="cnblogs_code">D:\projects\web\arvin0-blog ，然后执行命令&nbsp;<span class="cnblogs_code">hexo init</span></span></div>
<div style="display: block">如图：</div>
<div style="display: block"><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170403182523769-68178955.jpg" alt=""></div>
<div style="display: block">创建完成之后的结果，如图：</div>
<div style="display: block"><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170403182739675-225689466.jpg" alt=""></div>
<div style="display: block">&nbsp;</div>
<div style="display: block"><strong>二、生成静态页面</strong></div>
<div style="display: block">执行命令&nbsp;<span class="cnblogs_code">hexo generate （hexo g 也可以）&nbsp;</span></div>
<div style="display: block">如图：</div>
<div style="display: block"><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170403183022488-2122170010.jpg" alt=""></div>
<div style="display: block">&nbsp;</div>
<div style="display: block"><strong>三、启动本地服务</strong></div>
<div style="display: block">启动本地服务，进行文章预览调试，执行命令 &nbsp;<span class="cnblogs_code">hexo server&nbsp;</span></div>
<div style="display: block">如图：</div>
<div style="display: block"><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170403183623488-1902132676.jpg" alt=""></div>
<div style="display: block">&nbsp;</div>
<div style="display: block">打开浏览器，输入<a href="http://baixin.io/2015/08/HEXO%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/%E5%B0%B1%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%88%B0%E6%9C%80%E5%8E%9F%E5%A7%8B%E7%9A%84%E6%95%88%E6%9E%9C%E4%BA%86">http://localhost:4000</a></div>
<div style="display: block">效果如图：</div>
<div style="display: block"><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170403183707222-349211279.jpg" alt=""></div>
<div style="display: block">&nbsp;</div>
<div style="display: block"><strong>四、把本地hexo文件部署到Github上</strong></div>
<div style="display: block">1.建立Repository</div>
<div style="display: block">建立与你用户名对应的仓库，仓库名必须为【your_user_name.github.io】，固定写法 然后建立关联。</div>
<div style="display: block">2.然后打开上面建立的hexo项目，找到 _config.yml 文件，打开，翻到最下面，如图：</div>
<div style="display: block"><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170403225005488-175188240.jpg" alt=""></div>
<div style="display: block">红框部分，改成这样</div>
<div style="display: block">
<div class="cnblogs_code">
<pre><span style="color: #000000">deploy:
  type: git
  repository: https:<span style="color: #008000">//<span style="color: #008000">github.com/arvin0/<span style="color: #008000">arvin0.github.io.git
  branch: master</span></span></span></span></pre>
</div>
<p>注意： &nbsp;<span class="cnblogs_code">repository: 后面要加空格，还有注意要修改名字，<span style="color: #008000">arvin0 改成你自己的，我建议你copy这段话，然后直接改名字；</span></span></p>
<p>3.然后使用Git Bash，执行命令 &nbsp;<span class="cnblogs_code">npm <span style="color: #0000ff">install hexo-deployer-git --save ，执行这句命令才能使用git部署</span></span></p>
<p><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170403230604957-494688996.jpg" alt=""></p>
<p>4.执行命令&nbsp;<span class="cnblogs_code">hexo deploy 或者&nbsp;<span class="cnblogs_code">hexo d&nbsp;</span></span></p>
<p>如图：</p>
<p><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170403230534003-936540000.jpg" alt=""></p>
<p>5.然后再浏览器中输入<a href="https://arvin0.github.io/" target="_blank">https://arvin0.github.io/</a>就行了 ,记得把名字改成你 github 的账户名。</p>
<p><strong>五、更新GitHub</strong></p>
<p>每次修改过本地文件后，要更新到GitHub上，都要执行三句命令</p>
<div class="cnblogs_code">
<pre><span style="color: #000000">hexo clean
hexo generate
hexo deploy</span></pre>
</div>
<p>更多命令，请参考 <a href="https://hexo.io/zh-cn/docs/index.html" target="_blank">Hexo官方文档</a></p>
</div>
