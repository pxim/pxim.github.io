---
title: 【Hexo】Hexo+Github构建个人博客 （一）：环境配置
date: 2017-05-07 17:24:57
tags: 
categories: Hexo
---

<!--more-->

<p><strong>一、安装 Node</strong></p>
<p>下载地址：<a href="https://nodejs.org/en/" target="_blank">Node.js</a></p>
<p><strong>二、安装 Git（win环境下）</strong></p>
<p>&nbsp;下载地址：<a href="https://git-scm.com/" target="_blank">Git</a></p>
<p>&nbsp;Git 绑定 GitHub账户：</p>
<p>1.打开Git Bash，然后输入两句命令</p>
<div class="cnblogs_code">
<pre><span style="color: #000000"> git config --global user.name "Your Name"
 git config --global user.email "email@example.com"</span></pre>
</div>
<p>如图：</p>
<p><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170403221154222-624768162.jpg" alt=""></p>
<p>2.配置SSH</p>
<p>PS：可以先打开&nbsp;&nbsp;<span class="cnblogs_code">C:\Users\Administrator</span>&nbsp; 目录下，有没有 &nbsp;<span class="cnblogs_code">.<span style="color: #0000ff">ssh</span></span> 目录，如果有，再看看这个目录下有没有&nbsp;<span class="cnblogs_code">id_rsa</span>&nbsp;和&nbsp;<span class="cnblogs_code">id_rsa.pub</span>&nbsp;这两个文件，如果已经有了，可直接跳过这步。如果没有，则开始创建 SSH Key，</p>
<p>首先，输入命令 &nbsp;<span class="cnblogs_code"><span style="color: #0000ff">ssh-keygen</span> -t rsa -C <span style="color: #800000">"</span><span style="color: #800000">youremail@example.com</span><span style="color: #800000">"</span></span> ，你需要把邮件地址换成你自己的邮件地址，然后一路回车，使用默认值即可，由于这个Key也不是用于军事目的，所以也无需设置密码。</p>
<p>如果一切顺利的话，可以在用户主目录里找到<code>.ssh</code>目录，里面有<code>id_rsa</code>和<code>id_rsa.pub</code>两个文件，这两个就是SSH Key的秘钥对，<code>id_rsa</code>是私钥，不能泄露出去，<code>id_rsa.pub</code>是公钥，可以放心地告诉任何人。</p>
<p>如图：</p>
<p><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170403222242378-1660268671.jpg" alt=""></p>
<p>3.登陆GitHub，打开 Settings —— SSH and GPG keys 页面，然后点击&nbsp; New SSH Key 按钮，结果如图：</p>
<p><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170403222833644-419187586.jpg" alt=""></p>
<p>然后 title随便填，key填写 &nbsp;<span class="cnblogs_code">id_rsa.pub</span> 文件里的所以内容，然后保存，这步就OK了。</p>
<p><strong>三、正式安装hexo</strong></p>
<p>打开cmd，输入命令 &nbsp;<span class="cnblogs_code">npm install -g hexo-cli</span>&nbsp;</p>
<p>安装完成之后，可以输入命令 &nbsp;<span class="cnblogs_code">hexo -v</span> ，来验证版本</p>
<p>如图：</p>
<p><img src="http://images2015.cnblogs.com/blog/934812/201704/934812-20170403184029019-930700600.jpg" alt=""></p>
</div>
<div style="display: block">&nbsp;</div>
<div style="display: block">PS：参考资料</div>
<div style="display: block">1.<a href="https://hexo.io/zh-cn/docs/index.html" target="_blank">Hexo官方文档</a></div>
<div style="display: block">2.<a href="http://www.open-open.com/lib/view/open1416647023164.html" target="_blank">Git配置SSH,并Push到GitHub上的相关流程</a></div>
<div style="display: block">3.<a href="http://baixin.io/2015/08/HEXO%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/" target="_blank">HEXO搭建个人博客</a></div>
<div style="display: block">&nbsp;</div>
<div style="display: block">&nbsp;</div>
