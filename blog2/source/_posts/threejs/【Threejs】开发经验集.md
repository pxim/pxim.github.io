---
title: 【Threejs】开发经验集
date: 2020-06-03 19:30:38
categories: 
- Threejs
tags:
- Threejs
---
1. 一个物体b add()加载到 父物体a 里，如果这个 父物体a 带有旋转等属性，那么这个物体b就出现位置旋转错位等现象，这时候，就需要使用 attach()方法把 物体b 加载到 父物体a中；

   ```
   .add ( object : Object3D, ... ) : null
   添加对象到这个对象的子级，可以添加任意数量的对象。 当前传入的对象中的父级将在这里被移除，因为一个对象仅能有一个父级。
   ```

   ```
   .attach ( object : Object3D ) : this
   将object作为子级来添加到该对象中，同时保持该object的世界变换。
   ```

   api: https://threejs.org/docs/index.html#api/zh/core/Object3D

   此问题依据：https://github.com/mrdoob/three.js/issues/6426

2. 