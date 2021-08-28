# user-script-example

这里是一些简单的油猴脚本示例，用来展示在[X浏览器](https://www.xbext.com) 中油猴脚本API的一些使用方法。从中你可以了解到如何使用油猴脚本扩展X浏览器的功能。


## 依赖第三方JS库 

[exp-use-jquery.js](https://cdn.jsdelivr.net/gh/examplecode/user-script-example@latest/exp-use-jquery.js)


``` javascript
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
    $("#index-bn").html("Hi, The script changed the title content");
})();

```


