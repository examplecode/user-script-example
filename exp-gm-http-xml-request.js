// ==UserScript==
// @name         示例:油猴API"GM_xmlhttpRequest"使用方法
// @version      0.1
// @description  点击按钮像www.example.com发送一个异步httpXmlRequest请求,显示页面内容。
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