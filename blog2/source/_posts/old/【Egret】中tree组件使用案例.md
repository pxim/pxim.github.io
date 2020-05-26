---
title: 【Egret】中tree组件使用案例
date: 2016-05-25 15:59:18
tags: Egret TypeScript Html5 web
categories: Egret
---

<!--more-->


<p>Egret中tree组件使用案例，包含（文本过多时，自动换行功能）</p>
<p>下面代码结合<a target="_blank" target="_blank" href="http://bbs.egret.com/forum.php?mod=viewthread&amp;tid=19028&amp;page=1#pid133680">http://bbs.egret.com/forum.php?mod=viewthread&amp;tid=19028&amp;page=1#pid133680</a>这篇文章，修改exml；</p>
<pre code_snippet_id="1696373" snippet_file_name="blog_20160525_1_2120975"  code_snippet_id="1696373" snippet_file_name="blog_20160525_1_2120975" class="html" name="code">private creatTree(): void {
        var dp: egret.gui.ObjectCollection = new egret.gui.ObjectCollection();
        dp.source = { children: [{ dir: true,name: &quot;TreeItem0&quot;,children: [{ name: &quot;TreeItem00大娃娃吾问无为谓\r呜呜呜呜呜呜dawd&quot; },
            { dir: true,name: &quot;TreeItem01&quot;,children: [{ name: &quot;TreeItem010&quot; }] }] },
            { dir: true,name: &quot;TreeItem1&quot;,children: [{ name: &quot;TreeItem10&quot; },{ name: &quot;TreeItem11&quot; }] },{ name: &quot;TreeItem2&quot; }] };

        //设置数据源的父子关系，这样才会缩进 
        egret.gui.ObjectCollection.assignParent(dp.source,&quot;children&quot;,&quot;parent&quot;);

        //创建树 
        var tree: egret.gui.Tree = new egret.gui.Tree();
        tree.labelField = &quot;name&quot;;
        tree.top = 20;
        tree.left = 20;
        tree.right = 20;
        tree.height = 300;
        tree.dataProvider = dp;
        tree.expandItem(dp.getItemAt(0),true);
        this.addChild(tree);

        // 还可以通过iconFunction，设置每一项前面显示的小图标：
        //           tree.iconFunction = this.iconFunc; 
        /*呈现项的icon筛选*/
    }

    private iconFunc(item: any): any {
        if(item.dir) return &quot;tree_icon_dir_png&quot;;
        else return &quot;tree_icon_file_png&quot;;
    } </pre>
<p><br>
</p>
<p><img alt="" src="https://img-blog.csdn.net/20160525155913934?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center"></p>
<p><br>
</p>
<p>完整的项目案例：<a target="_blank" href="https://github.com/arvin0/EgretExamples/tree/master/GUI%20Tree">https://github.com/arvin0/EgretExamples/tree/master/GUI%20Tree</a></p>
<div style="top:786px">&#65279;&#65279;</div>
