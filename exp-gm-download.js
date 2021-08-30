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
    // 定义按钮事件
    $("#down-btn").click(function(){
        GM_download("https://www.xbext.com/download/xbrowser-release.apk");
    });
})();