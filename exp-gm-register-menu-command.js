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
    alert("长按页面中的链接，会显示浏览器长按菜单。你会在长按菜单中找到代码中注册的菜单项");
})();