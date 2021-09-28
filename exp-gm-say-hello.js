// ==UserScript==
// @name         Say hello
// @namespace    com.example.hello
// @version      0.1
// @description  When you open the site example.com it says "HELLO"
// @author       You
// @match        www.example.com
// @match        www.example.org
// @match        *://www.example.net
// ==/UserScript==

(function() {
    'use strict';
    alert("Hello!");
})();