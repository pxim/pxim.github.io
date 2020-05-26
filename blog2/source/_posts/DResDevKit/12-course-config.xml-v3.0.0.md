 ---
 title: 课件包 —— 配置表说明
 ---
 
 
### config.xml
> 课件信息配置表  
> root → lesson 节点的属性

| 属性           | 描述                                                         | 备注 |
| :------------- | :----------------------------------------------------------- | :--- |
| id             | 课程id，每个课程的id都不能相同；命名规则 YJ_完整课程名称拼音首字母_年月日时分秒 例如：一汽-大众 EA211发动机 正时齿形皮带拆装 应该为：YJ_DZEA211FDJZSCXPDCZ_20180420152501 |      |
| name           | 课程的完整名字                                               |      |
| platformType   | 数据储存对接平台 0： 普通网页无缓存；1: 普通网页游览器缓存； 2： 广本SCORM1.2标准的课件，和LMS平台对接；3：表示和斯柯达PC客户端对接 4:表示和领克平台对接 |      |
| isOrder        | 是否强制按照线性顺序学习 true：强制学习， false：不强制学习  |      |
| isPlayIntro    | 是否播放片头；值：true false                                 |      |
| isLocation     | 打开课件初始化的时候，是否定位上次学习的课件节点             |      |
| locType        | 定位的类型；1 播放完片头才开始定位课件（PC，Mobile都适用）；2 进入课件就立即定位课件，无需播放片头（只适用PC端部分游览器）； |      |
| isMenuState    | 是否开启目录上显示课件学习状态功能；值：true false           |      |
| isControlBar   | 课件初始化的时候，是否显示 播放器控制栏；值：true false      |      |
| totalPageNum   | 课件总页数，总的item节点数量，默认值 0                       |      |
| nowPageNum     | 当前课件页码, 默认 -1                                        |      |
| lessonProgress | 课件总体进度，填表的时候保存默认值 0                         |      |
| passScore      | 课件通过分数                                                 |      |
| testScore      | 课件测试分数，默认 0                                         |      |

***
> root → item 节点的属性

| 属性          | 描述                                                         | 备注 |
| :------------ | :----------------------------------------------------------- | :--- |
| menuItemId    | 菜单按钮的实例名                                             |      |
| menuStatus    | 课程章节学习状态                                             |      |
| slideId       | 课件id                                                       |      |
| name          | 菜单名称                                                     |      |
| type          | 课件类型：0 mp4视频-显示控制栏（功能齐全）； 1普通序列帧动画-显示控制栏（功能齐全） ； 2 交互动画-显示控制栏（禁用播放，暂停，声音功能）； 3 交互动画-显示控制栏（禁用播放，暂停，声音功能；下一页按钮 变成 开始整体测试按钮）； 4 交互动画-显示控制栏（禁用播放，暂停，声音功能；下一页按钮 变成 返回菜单按钮）； 5 交互动画-隐藏控制栏； PS：播放类交互动画 可以 算作 类型2； |      |
| slideStatus   | 课程状态：notAttempted 未学习 inProgress 正在学习 completed 已经学完 |      |
| isYellow      | 当前页面完成后，是否跳黄：false 不跳黄； true 跳黄；         |      |
| slideProgress | 当前课件的进度                                               |      |
| score         | 当前课件所占分数                                             |      |
| skdProgress   | 斯柯达类型课件的课件进度                                     |      |
| displayText   | 配音文本                                                     |      |
| bTitle        | 课件章节的大标题                                             |      |
| lTitle        | 课件章节的小标题                                             |      |
| x             | 当前资源在集成页面中的x坐标                                  |      |
| y             | 当前资源在集成页面中的y坐标                                  |      |
| width         | 当前资源在集成页面中的width值                                |      |
| height        | 当前资源在集成页面中的height值                               |      |

***

 ### 注：如果要单独配置整体测试模块；则：  
1. 删除enter，menu节点  
1. lesson节点中 isPlayIntro值设为false；isLocation值设为false；isMenuStatus值设为false；isControlBar值设为false；  
