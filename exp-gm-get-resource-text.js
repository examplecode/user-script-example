// ==UserScript==
// @name         示例:油猴API "GM_getResourceText"用法
// @version      0.1
// @description  为页面添加一个按钮，按钮的css style来自@resource 元字段内容
// @author       examplecode
// @match        example.com,example.org,example.net
// @resource     res-my-btn http://192.168.31.92:8000/res-my-btn.css
// @resource     res-string http://192.168.31.92:8000/res-string.txt
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