{
    "name":"simple countdown",
    <!-- 插件名称 -->
    "version":"1.0",
    <!-- 插件版本 -->
    "manifest_version": 3,
    <!-- 使用的manifest格式的版本号 -->
    "permissions":[
        "activeTap",
        "scripting"
    ],
    <!-- permissions 指定了插件需要用到的权限
        调用浏览器提供api的声明
        其中 activeTap 和 scripting 权限是我们开发插件所必须的 -->
    "action":{
        "default_icon":{
            "32":"images/icon.png"
        },
        <!-- default_icon 指定插件图标的资源路径
            图标资源网站 https://www.iconfont.cn/ -->
        "default_popup":"popup.html"
        <!-- popup 是弹出的那个框 -->
    }
}
