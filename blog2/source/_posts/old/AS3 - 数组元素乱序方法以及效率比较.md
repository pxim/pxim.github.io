---
title: AS3 - 数组元素乱序方法以及效率比较
date: 2018-01-19 11:54:51
tags: Flash ActionScript as3
categories: Flash Flex ActionScript
---

<!--more-->

flash,flex开发中，有时我们会用到随机排序，就是把一个数组随机打乱，即洗牌方法。
随机排序可以看做顺序排序的逆运算，顺序排序算法很多，随机排序也不少，下面列举个人觉得最好的三种：

1.自身插入法

```
private function randomArr(arr:Array):Array
{
    var outputArr:Array = arr.slice();
    var i:int = outputArr.length;
     
    while (i)
    {
        outputArr.push(outputArr.splice(int(Math.random() * i--), 1)[0]);
    }
     
    return outputArr;
}
```

通常插入法是将随机移出来的数扔到新的数组里，但是这么写的牛逼之处在于扔自己数组后面了，节省了效率：）。此法在数组较短时效率高，超过200效率就不如传统插入法了。

2.传统插入法

```
private function randomArr(arr:Array):Array
{
    var cloneArr:Array = arr.slice();
    var outputArr:Array = [];
    var i:int = cloneArr.length;
     
    while (i)
    {
        outputArr.push(cloneArr.splice(int(Math.random() * i--), 1)[0]);
    }
     
    return outputArr;
}
```

在数组较长（200以上）时效率比自身插入法高，因为短数组操作起来更快。

3.选择法

```
private function randomArr(arr:Array):Array
{
    var outputArr:Array = arr.slice();
    var i:int = outputArr.length;
    var temp:*;
    var indexA:int;
    var indexB:int;
     
    while (i)
    {
        indexA = i-1;
        indexB = Math.floor(Math.random() * i);
        i--;
         
        if (indexA == indexB) continue;
        temp = outputArr[indexA];
        outputArr[indexA] = outputArr[indexB];
        outputArr[indexB] = temp;
    }
     
    return outputArr;
}
```

选择排序法就是按照顺序从余下数中选出最小（大）的数，和顺序位置的数字交换，反复进行。此法最多可能会交换n-1次，比如[4,1,2,3]递增排序中的4就需要挪3次，当然最少一次也不用。但是随机算法循环次数无法浮动，必须是固定的，怎么办呢？没有关系，我们可以引入废操作，位置已经摆对的数自己和自己交换，这样就可以让所有顺序排序都成为n-1步走。
反过来想就明白了，从0开始每个位置和后面的随机位置交换，也可以和自己交换，直到n-2和n-1（或n-2自己交换），就可以得到一个随机数组。

效率比较：
利用1-100的顺序数组进行测试，执行10000次所用的时间分别为。
自身插入法：1654
传统插入法（放进新数组）： 2574
选择法：594

原文出自：www.hangge.com  转载请保留原文链接：http://www.hangge.com/blog/cache/detail_453.html