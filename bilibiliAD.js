/**
 * 去除 bilibili 开屏广告
 ^https:\/\/app.bilibili.com\/x\/v2\/splash\/list\?.* url script-response-body https://raw.githubusercontent.com/justceo/conf/main/bilibiliAD.js
 */

let obj = JSON.parse($response.body);
obj["data"]["list"] = [];
$done({ body: JSON.stringify(obj) });
