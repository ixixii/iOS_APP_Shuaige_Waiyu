帅哥外语_com.sg31.waiyu
2020-02-06 22:30
v1.0版本_功能简介:
1. 注册/登录（与【帐号管理】app共用帐号系统）
2. 选择语种(包含但不限于:日语/泰语/韩语/魔方/手语等, 可扩展/即从后台获取)
3. 核心界面: 
课程列表, 采用分组tableView, 可折叠
4. 下载视频
5. 播放视频 (移植【帅哥播放器】中所有功能)
6. umeng统计

后台接口预计:
1. 注册/登录接口
2. 获取语言种类接口
3. 根据语言种类, 获取所有课程列表接口
4. 根据课程id, 下载视频到本地

目标:
1. 操作尽可能简单
2. app大小足够小(不超过8M)
3. 所数据从后台获取(可配置,新增一门课,不用发布新的app版本)

盈利模式:
1. 腾讯广告收入
2. 下载功能只提供给注册用户(需求待定)
3. 内购
使用帅哥豆, 1豆 == 0.2元RMB, 198元购买1000帅哥豆
3.1 初始注册送100豆
3.2 下载消耗3个豆
3.3 每日签到送1个豆
3.4 每日分享送1个豆
3.2 邀请注册送100帅哥豆

---------------------
2020-02-07 10:08
在 复制帐号管理项目 和 新建一个全新的项目之间, 犹豫再三
为了减少被apple审核拒绝的可能性,决定创建一个全新的空白项目
todo list 1: 新建xcode项目(create a new xcode project)
net.vwhm.sgwy
iOS适配 11.3以上

todo list 2: 手动配置证书
https://developer.apple.com/account/resources/identifiers/list
2.1 从本地 keychain->证书助理->从证书颁发机构请求证书,创建一个csr文件
注意选择: 保存到磁盘
2.2 上传csr,并下载.cer证书到本地,双击导入
2.3 点击左侧菜单 Identifiers,创建bundle id: com.sg31.sgwy
描述: a tool for learning foreign languages
2.4 创建调试证书和开发证书
注意: 生产证书要求XCode11以上版本
所以先升级XCode 11.4 beta (11N111s)
先升级Mac OS 到 Catalina 10.15.3 (19D76)



todo list 2: pods初始化 
复制podfile

source 'https://github.com/CocoaPods/Specs.git'
platform :ios, '8.0'

target "sgwy" do
#    pod 'AFNetworking', '~> 2.5'
#    pod 'SDWebImage', '3.7.3'
     pod 'SDWebImage', '~>3.8'
#    pod 'MWPhotoBrowser', '2.1.1'
#    pod 'MWPhotoBrowser'
#    pod 'XHRealTimeBlur'
#    pod 'pop'
#    pod 'Qiniu'
#    pod 'IQKeyboardManager'
#    pod 'FDFullscreenPopGesture', '1.1'
#    pod 'BaiduMapKit' #百度地图SDK
#    pod "GCDWebServer/WebUploader", "~> 3.0"
#    pod 'YTKNetwork'
#    pod 'TCBlobDownload'
     pod 'MBProgressHUD', '~> 0.9.2'
     pod 'MJRefresh'
#    pod 'YYText'
#    pod 'UMengSocial', '~> 5.0'
#    pod 'UMengSocialCOM', '~> 5.2.1'
#     pod 'SDCycleScrollView','~> 1.75'
end


执行 pod install, 报错：
mac:sgwy beyond$ pod install
-bash: /usr/local/bin/pod: /System/Library/Frameworks/Ruby.framework/Versions/2.3/usr/bin/ruby: bad interpreter: No such file or directory

解决办法：
升级cocoapods：sudo gem install -n /usr/local/bin cocoapods –pre

同时，把xcode移动到application目录 

重新执行：
mac:sgwy beyond$ pod install
Analyzing dependencies
Downloading dependencies
Installing MBProgressHUD (0.9.2)
Installing MJRefresh (3.2.0)
Installing SDWebImage (3.8.3)
Generating Pods project
Integrating client project

[!] Please close any current Xcode sessions and use `sgwy.xcworkspace` for this project from now on.
Pod installation complete! There are 3 dependencies from the Podfile and 3 total pods installed.


-------
打开sgwy.xcworkspace
数据线连接iPhone8_64G，开始运行到手机上

设计图标Logo:
iconfont.cn搜索一个关键字，然后下载一个1024的png图标
打开PS进行编辑后，另存为

打开http://icon.wuruihong.com/
上传Logo PNG，一键生成各种尺寸的png

LaunchScreen.xib加一个imageView
90*90,距离顶边120，垂直居中

新建一个目录：图片
把appicon@3x.png（180*180px）拖到里面，以供imageView引用

-------

todo list 3: 代码管理
github初始化  √
新建 .gitignore
在里面写上Pods
表示Pods目录不需要git来管理,因为它是pod install自动生成的

git init 

git status 

git add --all

git status 

git commit -m 'iOS 密码管理app 第一次提交'

git remote add origin https://github.com/ixixii/iOS_APP_password_management.git
git push -u origin master

git pull origin master
git push origin master

刷新一下网页,看一下效果

------------
