---
title: 【CreateJS】设置声音暂停，继续播放；
date: 2018-07-13 14:03:28
tags: CreateJS Canvas 声音 Sound 暂停
categories: CreateJS
---

<!--more-->

<p><span style="color:#cc7832;">1.先实例化一个声音实例，并且开始播放声音</span></p>

<p><span style="color:#cc7832;"><span style="color:#cc7832;">时间轴上，</span>添加以下代码；</span></p>

<p> </p>

<pre>
<code class="language-html hljs">testSound();
var myInstance;
function testSound() {
    createjs.Sound.stop();
    // myInstance = playSound("ZD_010101a_1");
    myInstance = createjs.Sound.play("ZD_010101a_1", createjs.Sound.INTERRUPT_EARLY, 0, 0, 2);
    myInstance.on("complete", handleSoundComplete);
    myInstance.on("loop", handleSoundLoop);
    myInstance.on("failed", handleSoundFailed);
    // myInstance.play({interrupt:createjs.Sound.INTERRUPT_ANY, loop:2, pan:0.5});
    function handleSoundComplete(event) {

    }
    function handleSoundLoop(event) {
        // myInstance.volume = myInstance.volume * 0.5;
    }
    function handleSoundFailed(event) {

    }
}</code></pre>

<p><span style="color:#cc7832;">2.通过按钮控制声音暂停</span></p>

<p> </p>

<pre>
<code class="language-html hljs">myInstance.paused = true;
</code></pre>

<p><span style="color:#cc7832;">3.通过按钮控制声音继续播放</span></p>

<p> </p>

<pre>
<code class="language-html hljs">myInstance.paused = false;</code></pre>

<p> </p>
