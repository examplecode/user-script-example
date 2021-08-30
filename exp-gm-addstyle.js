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