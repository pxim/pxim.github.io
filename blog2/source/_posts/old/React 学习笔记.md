---
title: React 学习笔记
date: 2019-08-23 12:07:08
tags: React
categories: React
---

<!--more-->

<p><strong>React v16</strong></p>

<hr /><h3><strong>unmountComponentAtNode</strong></h3>

<blockquote>
<p>ReactDOM.unmountComponentAtNode 方法只能销毁 ReactDOM.render的组件节点，不能销毁React组件里render生成的节点；</p>
</blockquote>

<p><span style="color:#7c79e5;">先定义一个子组件</span></p>

<pre class="has">
<code class="language-javascript">//子组件
class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
    }
    render() {
        return (
            &lt;div&gt; {this.state.value} &lt;/div&gt;
        );
    }
}</code></pre>

<p><span style="color:#f33b45;"> 父组件里，错误使用案例</span></p>

<pre class="has">
<code class="language-javascript">//父组件
class ParentBox extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
      //此处使用unmountComponentAtNode是无效的；
      const childDiv = ReactDOM.findDOMNode(this.refs.childDiv);
      ReactDOM.unmountComponentAtNode(childDiv);
    }
    componentWillUnmount() {
    }
    render() {
        return (
            &lt;Child value={'Loading...'} ref={'childDiv'} /&gt;
        );
    }
}</code></pre>

<p><span style="color:#3399ea;">父组件里，正确使用</span></p>

<pre class="has">
<code class="language-javascript">//父组件
class ParentBox extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
      //先定义一个Child子组件，此处设置ref会报错
      ReactDOM.render(&lt;Child id={'childDiv2'} value={'123'}/&gt;, document.getElementById('childBox'));
      //删除子组件，此处使用unmountComponentAtNode有效  
      ReactDOM.unmountComponentAtNode(document.getElementById('childBox'));
    }
    componentWillUnmount() {
    }
    render() {
        return (
            &lt;div&gt;
                 {/*&lt;Child value={'Loading...'} ref={'childDiv'} /&gt;*/}
      
                 &lt;div id={'childBox'} /&gt;  
            &lt;/div&gt;  
        );
    }
}</code></pre>

<p>参考：<a href="https://github.com/itbilu/react-demos/blob/master/demo5/unmountComponentAtNode.html">https://github.com/itbilu/react-demos/blob/master/demo5/unmountComponentAtNode.html</a></p>

<hr /><p> </p>
