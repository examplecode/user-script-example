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