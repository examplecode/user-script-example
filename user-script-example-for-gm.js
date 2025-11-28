// ==UserScript==
// @name         GM4 API Test Script
// @namespace    https://example.com/
// @version      1.0
// @description  Test all major Greasemonkey 4.0+ API functions
// @match        *://*/*
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// @grant        GM.xmlHttpRequest
// @grant        GM.notification
// @grant        GM.openInTab
// @grant        GM.info
// @grant        GM.registerMenuCommand
// ==/UserScript==

(async function() {
    'use strict';

    console.log("=== Greasemonkey 4.0+ API 测试开始 ===");

    // 1️⃣ 测试存储与读取
    await GM.setValue("testKey", "Hello GM!");
    const val = await GM.getValue("testKey");
    console.log("GM.getValue ->", val);

    // 2️⃣ 列出所有键
    const keys = await GM.listValues();
    console.log("GM.listValues ->", keys);

    // 3️⃣ 删除键
    await GM.deleteValue("testKey");
    console.log("GM.deleteValue -> 已删除 testKey");

    // 4️⃣ 发送网络请求
    GM.xmlHttpRequest({
        method: "GET",
        url: "https://api.github.com/",
        onload: function(response) {
            console.log("GM.xmlHttpRequest -> 成功获取数据:", response.status, response.responseText.slice(0, 100) + "...");
        },
        onerror: function(err) {
            console.error("GM.xmlHttpRequest -> 请求失败", err);
        }
    });

    // 5️⃣ 弹出通知
    GM.notification({
        text: "Greasemonkey API 测试完成！",
        title: "GM Test Script",
        timeout: 4000,
        onclick: () => console.log("通知被点击！")
    });

    // 6️⃣ 在菜单中注册命令
    GM.registerMenuCommand("打开 Example.com", () => {
        GM.openInTab("https://example.com", { active: true });
    });

    // 7️⃣ 输出 GM.info 信息
    console.log("GM.info ->", GM.info);

    console.log("=== 测试脚本加载完毕 ===");
})();
