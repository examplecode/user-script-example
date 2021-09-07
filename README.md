# user-script-example


这里是一些简单的油猴脚本示例，用来展示在油猴脚本元数据标记以及API在[X浏览器](https://www.xbext.com)中的一些使用方法。在这之前推荐您阅读下面两篇文章文章以便对其有初步了解和认识。

- [为X浏览器撰写脚本-油猴脚本](https://www.xbext.com/docs/tutorials/write-user-script-for-xbrowser-part2/) 
- [如何在X浏览器中安装油猴脚本](https://www.xbext.com/docs/tutorials/how-to-install-gm-script-in-xbrowser/)

    
>为避免干扰其他页面，下面例子脚本的作用域都设置为[www.example.com](https://www.example.com),您可以在X浏览器中打开此页面进行测试。

## 依赖第三方JS库 

[exp-use-jquery.js](https://cdn.jsdelivr.net/gh/examplecode/user-script-example@latest/exp-use-jquery.js)


``` javascript
// ==UserScript==
// @name         示例:使用JQuery库
// @namespace    www.example.com
// @version      0.1
// @description  这个脚本展示了如何使用jquery库对Web页面的DOM树操作,这个例子中我们把页面中的H1标签修改为其他描述
// @author       examplecode
// @match        example.com,example.org,example.net
// @run-at       document-start
// @require      https://cdn.jsdelivr.net/npm/jquery@2.1.4/dist/jquery.min.js
// ==/UserScript==
$(function() {
    $("h1").html("Hi, The script changed the title content");
})();

```


## 使用GM_addStyle方法为页面增加样式表

[exp-gm-addstyle.js](https://cdn.jsdelivr.net/gh/examplecode/user-script-example@latest/exp-gm-addstyle.js)

``` javascript
// ==UserScript==
// @name         示例:油猴API"GM_addStyle"使用方法
// @version      0.1
// @description  为页面添加一个按钮，通过GM_addStyle方法添加css控制按钮的样式为蓝底白字
// @author       examplecode
// @match        example.com,example.org,example.net
// @require      https://cdn.jsdelivr.net/npm/jquery@2.1.4/dist/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    GM_addStyle('#myBtn{color: white;position: absolute;left: 100px;top: 200px;width: 100px;height: 36px;background: #3385ff;border-bottom: 1px solid #2d7');
    var btn = "<input type='button' id='myBtn' value='Click Me'/>";
    $("body").append(btn);
    // 定义按钮事件
    $("#myBtn").click(function(){
      alert("You click me");
    });
})();
```


## 使用GM_getResourceText 读取远端资源内容

[exp-gm-get-resource-text.js](https://cdn.jsdelivr.net/gh/examplecode/user-script-example@latest/exp-gm-get-resource-text.js)

``` javascript
// ==UserScript==
// @name         示例:油猴API "GM_getResourceText"用法
// @version      0.1
// @description  为页面添加一个按钮，按钮的css style来自@resource 元字段内容
// @author       examplecode
// @match        example.com,example.org,example.net
// @resource     res-my-btn https://cdn.jsdelivr.net/gh/examplecode/user-script-example@latest/res-my-btn.css
// @resource     res-string https://cdn.jsdelivr.net/gh/examplecode/user-script-example@latest/res-string.txt
// @require      https://cdn.jsdelivr.net/npm/jquery@2.1.4/dist/jquery.min.js

// ==/UserScript==

(function() {
    var btn_style = GM_getResourceText("res-my-btn");
    var res_string = GM_getResourceText("res-string");
    GM_addStyle(btn_style);
    var btn = "<input type='button' id='myBtn' value='Clik Me'/>";
    $("body").append(btn);
    $("#myBtn").click(function(){
      alert(res_string);
    });
})();
```

## 使用GM_getResourceURL读取资源URL
[exp-gm-get-resource-url.js](https://cdn.jsdelivr.net/gh/examplecode/user-script-example@latest/exp-gm-get-resource-url.js)

``` javascript
// ==UserScript==
// @name         示例:油猴API "GM_getResourceURL"用法
// @version      0.1
// @description  在页面显示图片，图片来源于元字段资源定义
// @author       examplecode
// @match        example.com,example.org,example.net
// @resource     res-icons http://172.18.102.115:8000/res-icons.css
// @resource     icon1 https://cdn.jsdelivr.net/gh/examplecode/user-script-example@latest/res-icon1.png
// @resource     icon2 https://cdn.jsdelivr.net/gh/examplecode/user-script-example@latest/res-icon2.png
// @resource     icon3 data:image/png;base64,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
// @require      https://cdn.jsdelivr.net/npm/jquery@2.1.4/dist/jquery.min.js

// ==/UserScript==

(function() {
    GM_addStyle(GM_getResourceText("res-icons"));
    var div = "<div class='icons'></div>";
    $("body").append(div);
    var img_res = ["icon1", "icon2", "icon3"];
    for(var i in img_res) {
        $(".icons").append("<img src='" + GM_getResourceURL(img_res[i])  + "' />");
    }
})();
```


## 使用GM_openInTab在新标签中打开页面

[exp-gm-open-in-tab.js](https://cdn.jsdelivr.net/gh/examplecode/user-script-example@latest/exp-gm-open-in-tab.js)

``` javascript
// ==UserScript==
// @name         示例:油猴API"GM_openInTab"使用方法
// @version      0.1
// @description  为example.com页面增加一个按钮，点击后在新标签中打开X浏览器官网
// @author       examplecode
// @match        example.com,example.org,example.net
// @require      https://cdn.jsdelivr.net/npm/jquery@2.1.4/dist/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    GM_addStyle('#jump-btn{color: white;position: absolute;left: 200px;top: 200px;width: 100px;height: 36px;background: #3385ff;border-bottom: 1px solid #2d7');
    var btn = "<input type='button' id='jump-btn' value='Open New Tab'/>";
    $("body").append(btn);
    // 定义按钮事件
    $("#jump-btn").click(function(){
        GM_openInTab("https://www.xbext.com");
    });
})();
```


## 使用GM_download调用浏览器下载器下载文件

[exp-gm-download.js](https://cdn.jsdelivr.net/gh/examplecode/user-script-example@latest/exp-gm-download.js)

``` javascript
// ==UserScript==
// @name         示例:油猴API"GM_download"使用方法
// @version      0.1
// @description  为example.com页面增加一个按钮，点击后调用浏览器默认下载器下载文件
// @author       examplecode
// @match        example.com,example.org,example.net
// @require      https://cdn.jsdelivr.net/npm/jquery@2.1.4/dist/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    GM_addStyle('#down-btn{color: white;position: absolute;left: 250px;top: 200px;width: 100px;height: 36px;background: #3385ff;border-bottom: 1px solid #2d7');
    var btn = "<input type='button' id='down-btn' value='Download'/>";
    $("body").append(btn);
    $("#down-btn").click(function(){
        GM_download("https://www.xbext.com/download/xbrowser-release.apk");
    });
})();

```


## 使用 GM_registerMenuCommand 注册长按菜单

[exp-gm-register-menu-command.js](https://cdn.jsdelivr.net/gh/examplecode/user-script-example@latest/exp-gm-register-menu-command.js)

``` javascript
// ==UserScript==
// @name         示例:油猴API "GM_registerMenuCommand"用法
// @namespace    com.example.gm.registerMenuCommand
// @version      0.1
// @description  在浏览器长按菜单中添加两个选项，通过菜单选项调用脚本中注册的回调函数.
// @author       examplecode
// @match        www.example.com
// ==/UserScript==

(function() {
    'use strict';
    GM_registerMenuCommand("Menu item 1",function() { alert("You click item 1"); });
    GM_registerMenuCommand("Menu item 2",function() { alert("You click item 2"); });
    alert("长按页面链接会显示长按菜单，在长按菜单中点击你注册的菜单项，会调用相应的js回调函数");
})();
```



## 使用 GM_xmlhttpRequest 向页面发送异步请求

[exp-gm-http-xml-request.js](https://cdn.jsdelivr.net/gh/examplecode/user-script-example@latest/exp-gm-http-xml-request.js)

``` javascript
// ==UserScript==
// @name         示例:油猴API"GM_xmlhttpRequest"使用方法
// @version      0.1
// @description  点击按钮像www.example.com发送一个异步httpXmlRequest请求
// @author       examplecode
// @match        www.example.com
// @require      https://cdn.jsdelivr.net/npm/jquery@2.1.4/dist/jquery.min.js
// ==/UserScript==

(function() {
    GM_addStyle('#send-btn{color: white;position: absolute;left: 240px;top: 200px;width: 100px;height: 36px;background: #3385ff;border-bottom: 1px solid #2d7');
    var btn = "<input type='button' id='send-btn' value='Send'/>";
    $("body").append(btn);
    // 定义按钮事件
    $("#send-btn").click(function(){
        GM_xmlhttpRequest({
          url: "http://www.example.com",
          method: "GET",
          onload: function(response) {
            alert(response.responseText);
          }
        });

    });
})();


```