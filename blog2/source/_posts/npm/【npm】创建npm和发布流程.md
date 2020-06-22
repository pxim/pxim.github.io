---
title: 【NPM】创建npm和发布流程
date: 2020-06-21 13:12:57
categories: 
- NPM
tags:
- NPM
- npm
---


### npm流程

```
npm init

npm login

npm publish testxxxxx
```

### npm错误和注意点

```javascript
---
npm publish发布包时出现403错误no_perms Private mode enable, only admin can publish this module:
或者使用yarn publish出现couldn't publish package:"https://registry.npm.taobao.org/包名:unauthorized"错误

出现原因：使用的是淘宝源cnpm,登陆到的是cnpm

解决方法：切换到npmjs的网址，代码如下

npm config set registry http://registry.npmjs.org/
---

---
发布的时候要关闭vpn
---

---    
如果使用npm publish发布失败，尝试用以下命令    
npm publish --access=public
--- 
    
---     
npm publish发布失败 
还有可能是npm包命名的问题，要是是@xx/npmpackage 这样的命名方式，也容易出问题
--- 
    
---
删除发布24小时内的包  npm unpublish --force
---
    
---
npm publish 失败可能的原因记录
npm 发布个人包时，遇到不少坑，总结如下（可能不全）：

　　1、npm版本过低，处理：npm install -g npm update

　　2、可能权限原因，处理：npm publish --access=public

　　3、npm 源不对，处理：npm config set registry https://registry.npmjs.org/    --   有些非官方源个人可能无权发布，比如淘宝镜像需要admin权限

　　4、文件夹名和package.json里的'name'属性一样时也无法发布，处理：将文件夹名或'name'改成不一致即可

　　5、如果之前删除过npm市场同名的包，重新发布会有一定的时间限禁（目前是24小时后）

　　6、记得检查账户是否登录
---

---
其他命令补录：

　　1、npm init： 初始化包，会生成package.json，其里面的main属性配置指向了入口文件

　　2、npm publish： 发布个人项目到npm上

　　　　a： 第一次发布时，需要创建用户： npm adduser

　　　　b：常规用户登录：npm login

　　3、npm unpublish <pkg>@x.y.z  -- 删除某个版本  /   npm unpublish xxxpackage  -- 删除整个版本（慎用！）

　　　  npm unpublish的推荐替代命令： npm deprecate <pkg>[@version] <message>

　　　  使用这个命令，并不在社区里撤销你已有的包，但是在任何人尝试安装这个包时，会得到告警

　　　【注意】如果报权限方面的错误，加上参数： --force
---
```



### npm总的下载量相关数据统计查看

https://npm-stat.com/charts.html?author=pxim&from=2020-05-01&to=2020-06-12



### 获取npm下载统计数据情况的api

https://github.com/npm/download-counts



### 可以按照下载量搜索相关npm的工具

https://github.com/npm/download-counts
