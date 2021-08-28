// ==UserScript==
// @name         exp-use-jquery
// @namespace    www.example.com
// @version      0.1
// @description  这个脚本展示了如何使用jquery库对Web页面的DOM树操作,这个例子中我们把页面中的H1标签修改为其他描述
// @author       examplecode
// @match        example.com,example.org,example.net
// @run-at       document-start
// @require      https://cdn.jsdelivr.net/npm/jquery@2.1.4/dist/jquery.min.js
// ==/UserScript==
$(function() {
    $("#index-bn").html("Hi, We changed the head content");
})();