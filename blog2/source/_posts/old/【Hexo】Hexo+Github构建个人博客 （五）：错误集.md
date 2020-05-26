---
title: 【Hexo】Hexo+Github构建个人博客 （五）：错误集
date: 2017-05-07 17:25:07
tags: 
categories: Hexo
---

<!--more-->

一、报错： <span class="cnblogs_code">ERROR Plugin load failed: hexo-deployer-git</span>&nbsp;</p>
<p><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170404014310644-1532199890.jpg" alt=""></p>
<p>解决方案：执行命令 &nbsp;<span class="cnblogs_code">npm install hexo-deployer-git --save</span>&nbsp;</p>
<p><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170404014426394-1174417796.jpg" alt=""></p>
<p>&nbsp;</p>
<p>二、报错：&nbsp;<span class="cnblogs_code">ERROR Plugin load failed: hexo-generator-json-content</span>&nbsp;</p>
<p><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170404014738300-1978032331.jpg" alt=""></p>
<p>解决方案：</p>
<p>1.把node升级到6.0版本及以上；</p>
<p>2.然后执行命令 &nbsp;<span class="cnblogs_code">npm i hexo-generator-json-content --save</span>&nbsp;</p>
<p>3.就OK了。</p>
<p>三、报错：出现 OpenSSH 提示框</p>
<p><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170404154822691-2080262195.jpg" alt=""></p>
<p>解决方案：</p>
<p>1.yes——ok，不可以的话，就删掉github里的源码，然后重新走一遍流程</p>
<p>2.</p>
<div class="cnblogs_Highlighter">
<pre class="brush:html;gutter:false;">确保配置没错：
deploy:
  type: git
  repository: https://github.com/leopardpan/leopardpan.github.io.git
  branch: master

npm i hexo-generator-json-content --save

npm install hexo-deployer-git --save

hexo deploy
</pre>
</div>
<p>&nbsp;</p>
