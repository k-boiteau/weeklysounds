!function(b){function c(a){if("string"!=typeof a&&(a=String(a)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(a))throw new TypeError("Invalid character in header field name");return a.toLowerCase()}function q(a){return"string"!=typeof a&&(a=String(a)),a}function n(a){var d={next:function(){var d=a.shift();return{done:void 0===d,value:d}}};return g.iterable&&(d[Symbol.iterator]=function(){return d}),d}function e(a){this.map={};a instanceof e?a.forEach(function(a,b){this.append(b,a)},this):Array.isArray(a)?a.forEach(function(a){this.append(a[0],
a[1])},this):a&&Object.getOwnPropertyNames(a).forEach(function(d){this.append(d,a[d])},this)}function p(a){return a.bodyUsed?Promise.reject(new TypeError("Already read")):void(a.bodyUsed=!0)}function r(a){return new Promise(function(d,b){a.onload=function(){d(a.result)};a.onerror=function(){b(a.error)}})}function u(a){var d=new FileReader,b=r(d);return d.readAsArrayBuffer(a),b}function v(a){a=new Uint8Array(a);for(var d=Array(a.length),b=0;b<a.length;b++)d[b]=String.fromCharCode(a[b]);return d.join("")}
function s(a){if(a.slice)return a.slice(0);var d=new Uint8Array(a.byteLength);return d.set(new Uint8Array(a)),d.buffer}function t(){return this.bodyUsed=!1,this._initBody=function(a){if(this._bodyInit=a,a)if("string"==typeof a)this._bodyText=a;else if(g.blob&&Blob.prototype.isPrototypeOf(a))this._bodyBlob=a;else if(g.formData&&FormData.prototype.isPrototypeOf(a))this._bodyFormData=a;else if(g.searchParams&&URLSearchParams.prototype.isPrototypeOf(a))this._bodyText=a.toString();else if(g.arrayBuffer&&
g.blob&&a&&DataView.prototype.isPrototypeOf(a))this._bodyArrayBuffer=s(a.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!g.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(a)&&!w(a))throw Error("unsupported BodyInit type");this._bodyArrayBuffer=s(a)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof a?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):g.searchParams&&
URLSearchParams.prototype.isPrototypeOf(a)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},g.blob&&(this.blob=function(){var a=p(this);if(a)return a;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?
p(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(u)}),this.text=function(){var a=p(this);if(a)return a;if(this._bodyBlob){var a=this._bodyBlob,d=new FileReader,b=r(d);return d.readAsText(a),b}if(this._bodyArrayBuffer)return Promise.resolve(v(this._bodyArrayBuffer));if(this._bodyFormData)throw Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},g.formData&&(this.formData=function(){return this.text().then(x)}),this.json=function(){return this.text().then(JSON.parse)},
this}function k(a,d){d=d||{};var b=d.body;if(a instanceof k){if(a.bodyUsed)throw new TypeError("Already read");this.url=a.url;this.credentials=a.credentials;d.headers||(this.headers=new e(a.headers));this.method=a.method;this.mode=a.mode;b||null==a._bodyInit||(b=a._bodyInit,a.bodyUsed=!0)}else this.url=String(a);this.credentials=d.credentials||this.credentials||"omit";!d.headers&&this.headers||(this.headers=new e(d.headers));var c=d.method||this.method||"GET",g=c.toUpperCase();if(this.method=-1<y.indexOf(g)?
g:c,this.mode=d.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&b)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(b)}function x(a){var d=new FormData;return a.trim().split("&").forEach(function(a){if(a){var b=a.split("=");a=b.shift().replace(/\+/g," ");b=b.join("=").replace(/\+/g," ");d.append(decodeURIComponent(a),decodeURIComponent(b))}}),d}function z(a){var b=new e;return a.split(/\r?\n/).forEach(function(a){var c=a.split(":");
if(a=c.shift().trim())c=c.join(":").trim(),b.append(a,c)}),b}function h(a,b){b||(b={});this.type="default";this.status="status"in b?b.status:200;this.ok=200<=this.status&&300>this.status;this.statusText="statusText"in b?b.statusText:"OK";this.headers=new e(b.headers);this.url=b.url||"";this._initBody(a)}if(!b.fetch){var A="URLSearchParams"in b,B="Symbol"in b&&"iterator"in Symbol,m;if(m="FileReader"in b)if(m="Blob"in b)try{m=(new Blob,!0)}catch(E){m=!1}var g={searchParams:A,iterable:B,blob:m,formData:"FormData"in
b,arrayBuffer:"ArrayBuffer"in b};if(g.arrayBuffer)var C="[object Int8Array];[object Uint8Array];[object Uint8ClampedArray];[object Int16Array];[object Uint16Array];[object Int32Array];[object Uint32Array];[object Float32Array];[object Float64Array]".split(";"),w=ArrayBuffer.isView||function(a){return a&&-1<C.indexOf(Object.prototype.toString.call(a))};e.prototype.append=function(a,b){a=c(a);b=q(b);var e=this.map[a];this.map[a]=e?e+","+b:b};e.prototype.delete=function(a){delete this.map[c(a)]};e.prototype.get=
function(a){return a=c(a),this.has(a)?this.map[a]:null};e.prototype.has=function(a){return this.map.hasOwnProperty(c(a))};e.prototype.set=function(a,b){this.map[c(a)]=q(b)};e.prototype.forEach=function(a,b){for(var c in this.map)this.map.hasOwnProperty(c)&&a.call(b,this.map[c],c,this)};e.prototype.keys=function(){var a=[];return this.forEach(function(b,c){a.push(c)}),n(a)};e.prototype.values=function(){var a=[];return this.forEach(function(b){a.push(b)}),n(a)};e.prototype.entries=function(){var a=
[];return this.forEach(function(b,c){a.push([c,b])}),n(a)};g.iterable&&(e.prototype[Symbol.iterator]=e.prototype.entries);var y="DELETE GET HEAD OPTIONS POST PUT".split(" ");k.prototype.clone=function(){return new k(this,{body:this._bodyInit})};t.call(k.prototype);t.call(h.prototype);h.prototype.clone=function(){return new h(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new e(this.headers),url:this.url})};h.error=function(){var a=new h(null,{status:0,statusText:""});return a.type=
"error",a};var D=[301,302,303,307,308];h.redirect=function(a,b){if(-1===D.indexOf(b))throw new RangeError("Invalid status code");return new h(null,{status:b,headers:{location:a}})};b.Headers=e;b.Request=k;b.Response=h;b.fetch=function(a,b){return new Promise(function(c,e){var l=new k(a,b),f=new XMLHttpRequest;f.onload=function(){var a={status:f.status,statusText:f.statusText,headers:z(f.getAllResponseHeaders()||"")};a.url="responseURL"in f?f.responseURL:a.headers.get("X-Request-URL");c(new h("response"in
f?f.response:f.responseText,a))};f.onerror=function(){e(new TypeError("Network request failed"))};f.ontimeout=function(){e(new TypeError("Network request failed"))};f.open(l.method,l.url,!0);"include"===l.credentials&&(f.withCredentials=!0);"responseType"in f&&g.blob&&(f.responseType="blob");l.headers.forEach(function(a,b){f.setRequestHeader(b,a)});f.send("undefined"==typeof l._bodyInit?null:l._bodyInit)})};b.fetch.polyfill=!0}}("undefined"!=typeof self?self:this);var closeAlert=document.querySelector("#close-alert");
function closeAlertMessage(){document.querySelector("#alert").classList.remove("alert-appears")}closeAlert&&closeAlert.addEventListener("click",closeAlertMessage);
var newContent=document.querySelector(".wysiwyg-content"),newMail=document.querySelector("#email-content"),menuLinks=document.querySelectorAll("#preview > .menu > a"),previews=document.querySelectorAll("#preview > .content > div"),image=document.querySelector("#img-link"),newImage=document.querySelector("#new_image"),title=document.querySelector("#title"),newTitle=document.querySelector("#new_title"),code=document.querySelector("#code");
function setNewMail(){var b=[];newContent.childNodes.forEach(function(c){"H1"===c.nodeName&&b.push('<p style="font-size:16px;background:#ffb923;padding:5px 20px;display:initial;color:#201c1c">'+c.innerText+"</p>");"P"===c.nodeName&&""!==c.data&&(c.previousSibling&&"H1"===c.previousSibling.nodeName?b.push('<p style="text-align:justify;border-top:2px solid #ffb923;margin-top:2px;padding-top:20px;color:#201c1c">'+c.innerHTML+"</p>"):b.push('<p style="text-align:justify;">'+c.innerHTML+"</p>"))});newMail.innerHTML=
"";b.forEach(function(b){newMail.insertAdjacentHTML("beforeend",b)})}
function setHtml(){code.innerHTML='<!doctype html> <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"> <head> <title></title> \x3c!--[if !mso]>\x3c!-- --\x3e <meta http-equiv="X-UA-Compatible" content="IE=edge"> \x3c!--<![endif]--\x3e <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <meta name="viewport" content="width=device-width,initial-scale=1"> <style type="text/css"> #outlook a {padding: 0 } .ReadMsgBody {width: 100% } .ExternalClass {width: 100% } .ExternalClass * {line-height: 100% } body {margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100% } table, td {border-collapse: collapse; mso-table-lspace: 0; mso-table-rspace: 0 } img {border: 0; height: auto; line-height: 100%; outline: 0; text-decoration: none; -ms-interpolation-mode: bicubic } p {display: block; margin: 13px 0 } </style> \x3c!--[if !mso]>\x3c!--\x3e <style type="text/css"> @media only screen and (max-width:480px) {@-ms-viewport {width: 320px } @viewport {width: 320px } } </style> \x3c!--<![endif]--\x3e \x3c!--[if mso]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]--\x3e \x3c!--[if lte mso 11]> <style type="text/css"> .outlook-group-fix {width:100% !important; } </style> <![endif]--\x3e \x3c!--[if !mso]>\x3c!--\x3e <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css"> <style type="text/css"> @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700); </style> \x3c!--<![endif]--\x3e <style type="text/css"> @media only screen and (min-width:480px) {.mj-column-per-50 {width: 50%!important } .mj-column-px-300 {width: 300px!important } } </style> </head> <body style="background:#f7f7f7"> <div class="mj-container" style="background-color:#f7f7f7"> \x3c!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;"> <tr> <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"> <![endif]--\x3e <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0;width:100%" border="0"> <tbody> <tr> <td> <div style="margin:0 auto;max-width:600px"> <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0;width:100%" align="center" border="0"> <tbody> <tr> <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0;padding:20px 0;padding-bottom:20px"> \x3c!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0"> <tr> <td style="vertical-align:undefined;width:600px;"> <![endif]--\x3e <div style="cursor:auto;color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;text-align:left"> <p align="center" style="font-size:.8em;margin:0">Si tu ne visualise pas bien cet email, merci de cliquer <a href="*|ARCHIVE|*" color="#201C1C">ici</a></p> </div> \x3c!--[if mso | IE]> </td></tr></table> <![endif]--\x3e </td> </tr> </tbody> </table> </div> </td> </tr> </tbody> </table> \x3c!--[if mso | IE]> </td></tr></table> <![endif]--\x3e \x3c!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;"> <tr> <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"> <![endif]--\x3e <div style="margin:0 auto;max-width:600px;background:#ffb923"> <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0;width:100%;background:#ffb923" align="center" border="0"> <tbody> <tr> <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0;padding:20px 0;padding-bottom:0;padding-top:0"> \x3c!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0"> <tr> <td style="vertical-align:top;width:300px;"> <![endif]--\x3e <div class="mj-column-px-300 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%"> <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="word-wrap:break-word;font-size:0;padding:10px 25px;padding-top:30px;padding-bottom:0;padding-right:25px;padding-left:25px" align="left"> <div style="cursor:auto;color:#201c1c;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:40px;line-height:22px;text-align:left"> <p style="font-size:30px">WeeklySounds</p>'+newTitle.outerHTML+
'<p style="font-size:13px">Ta dose de d\u00e9couvertes musicales pour la semaines mon ami !</p> </div> </td> </tr> <tr> <td style="word-wrap:break-word;font-size:0;padding:15px 30px;padding-bottom:40px;padding-right:25px;padding-left:25px" align="center"> <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate" align="center" border="0"> <tbody> <tr> <td style="border:none;border-radius:3px;color:#201c1c;cursor:auto;padding:10px 25px" align="center" valign="middle" bgcolor="#fff"><a href="http://www.weeklysounds.com?utm_source=mailchimp&utm_medium=email&utm_campaign=weeklysounds" style="text-decoration:none;background:#fff;color:#201c1c;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:15px;font-weight:400;line-height:120%;text-transform:none;margin:0" target="_blank">\u00c9couter maintenant</a></td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </div> \x3c!--[if mso | IE]> </td><td style="vertical-align:top;width:300px;"> <![endif]--\x3e <div class="mj-column-px-300 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%"> <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="word-wrap:break-word;font-size:0;padding:10px 25px;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px" align="center"> <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0" align="center" border="0"> <tbody> <tr> <td style="width:280px">'+
newImage.outerHTML+'</td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </div> \x3c!--[if mso | IE]> </td></tr></table> <![endif]--\x3e </td> </tr> </tbody> </table> </div> \x3c!--[if mso | IE]> </td></tr></table> <![endif]--\x3e \x3c!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;"> <tr> <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"> <![endif]--\x3e <div style="margin:0 auto;max-width:600px;background:#fff"> <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0;width:100%;background:#fff" align="center" border="0"> <tbody> <tr> <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0;padding:30px"> \x3c!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0"> <tr> <td style="vertical-align:undefined;width:600px;"> <![endif]--\x3e'+
newMail.outerHTML+'\x3c!--[if mso | IE]> </td></tr></table> <![endif]--\x3e </td> </tr> </tbody> </table> </div> \x3c!--[if mso | IE]> </td></tr></table> <![endif]--\x3e \x3c!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;"> <tr> <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"> <![endif]--\x3e <div style="margin:0 auto;max-width:600px;background:#201c1c"> <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0;width:100%;background:#201c1c" align="center" border="0"> <tbody> <tr> <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0;padding:20px 0;padding-bottom:0;padding-top:0"> \x3c!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0"> <tr> <td style="vertical-align:top;width:300px;"> <![endif]--\x3e <div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%"> <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="word-wrap:break-word;font-size:0;padding:10px 25px;padding-top:10px;padding-bottom:0;padding-right:0;padding-left:20px" align="left"> <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0" align="left" border="0"> <tbody> <tr> <td style="width:180px"> <a href="http://www.weeklysounds.com?utm_source=mailchimp&utm_medium=email&utm_campaign=weeklysounds"> <img alt="WeeklySounds" height="auto" src="https://gallery.mailchimp.com/0509b370e1f445b925c43353c/images/81c23038-2ba1-4a2d-9e8d-40b6fcc760d0.png" style="border:none;border-radius:0;display:block;font-size:13px;outline:0;text-decoration:none;width:100%;height:auto" width="180"> </a> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </div> \x3c!--[if mso | IE]> </td><td style="vertical-align:top;width:300px;"> <![endif]--\x3e <div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%"> <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody> <tr> <td style="word-wrap:break-word;font-size:0;padding:10px 25px;padding-top:0;padding-bottom:0;padding-right:25px;padding-left:25px" align="right"> <div style="cursor:auto;color:#fff;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;text-align:right"> <p><a href="http://www.weeklysounds.com?utm_source=mailchimp&utm_medium=email&utm_campaign=weeklysounds" style="text-decoration:none;color:inherit">www.weeklysounds.com</a></p> </div> </td> </tr> </tbody> </table> </div> \x3c!--[if mso | IE]> </td></tr></table> <![endif]--\x3e </td> </tr> </tbody> </table> </div> \x3c!--[if mso | IE]> </td></tr></table> <![endif]--\x3e \x3c!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;"> <tr> <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"> <![endif]--\x3e <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0;width:100%" border="0"> <tbody> <tr> <td> <div style="margin:0 auto;max-width:600px"> <table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0;width:100%" align="center" border="0"> <tbody> <tr> <td style="text-align:center;vertical-align:top;direction:ltr;font-size:0;padding:20px 0;padding-bottom:20px"> \x3c!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0"> <tr> <td style="vertical-align:undefined;width:600px;"> <![endif]--\x3e <div style="cursor:auto;color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;text-align:left"> <p align="center" style="font-size:.8em;margin:0">Clique <a href="*|UNSUB|*" color="#201C1C">ici</a> pour te d\u00e9sabonner de la newsletter :\'(</p> </div> \x3c!--[if mso | IE]> </td></tr></table> <![endif]--\x3e </td> </tr> </tbody> </table> </div> </td> </tr> </tbody> </table> \x3c!--[if mso | IE]> </td></tr></table> <![endif]--\x3e </div> </body> </html>'}
function togglePreview(){setHtml();var b=this;previews.forEach(function(c){c.style.display="none";c.classList.value===b.dataset.preview&&(c.style.display="block")});menuLinks.forEach(function(b){b.classList.remove("selected")});b.classList.add("selected")}newContent&&newContent.addEventListener("DOMSubtreeModified",setNewMail);menuLinks&&menuLinks.forEach(function(b){b.addEventListener("click",togglePreview)});image&&image.addEventListener("change",function(){newImage.src=this.value});
title&&title.addEventListener("change",function(){newTitle.innerText=this.value});var button=document.querySelector(".mobile-menu-toggle"),menu=document.querySelector(".mobile-menu");function toggleMenu(){menu.classList.contains("on")?(menu.classList.remove("on"),button.classList.remove("on")):(menu.classList.add("on"),button.classList.add("on"))}button&&button.addEventListener("click",toggleMenu);
var modalButtons=document.querySelectorAll("[data-target='propose-modal']"),closeButton=document.querySelector("#close-propose-modal"),modal=document.querySelector("#propose-modal");function openModal(b){b.preventDefault();modal.style="display: flex"}function closeModal(){modal.style="display: none"}modalButtons!==[]&&modalButtons.forEach(function(b){b.addEventListener("click",openModal)});closeButton&&closeButton.addEventListener("click",closeModal);
var form=document.querySelector("#propose-form"),message=document.querySelector("#message"),alert=document.querySelector("#alert"),close;function updateMsg(b,c){closeModal();clearTimeout(close);document.querySelector("#alert").classList="";alert.classList.add(b);alert.classList.add("alert-appears");message.innerText=c;close=setTimeout(function(){closeAlertMessage()},1E4)}
function sendWithAjax(b){b.preventDefault();fetch("//formspree.io/boiteau.kev@gmail.com",{method:"post",mode:"cors",headers:{Accept:"application/json"},body:new FormData(form)}).then(function(b){if(!b.ok)return updateMsg("error","Oups, une erreur est survenue :("),Promise.reject(Error(b.statusText));updateMsg("success","Message re\u00e7u fr\u00e8re !");form.reset();return Promise.resolve(b)}).catch(function(b){updateMsg("error","Oups, une erreur est survenue :(")})}
form&&form.addEventListener("submit",sendWithAjax);var controls=document.querySelectorAll("[data-role]"),text=document.querySelector(".wysiwyg-content");
function addStyle(b){b.preventDefault();b=window.getSelection();if(null!=b.anchorNode){var c;"underline"===this.dataset.role&&(c=document.createElement("u"));"italic"===this.dataset.role&&(c=document.createElement("i"));"bold"===this.dataset.role&&(c=document.createElement("strong"));"list"===this.dataset.role&&(c=document.createElement("li"));"title"===this.dataset.role?(c=document.createElement("h1"),c.appendChild(document.createTextNode(b.toString())),b.baseNode.parentElement.parentElement.replaceChild(c,
b.baseNode.parentElement)):(c.appendChild(document.createTextNode(b.toString())),b=b.getRangeAt(0),b.deleteContents(),b.insertNode(c))}}controls!==[]&&controls.forEach(function(b){b.addEventListener("click",addStyle)});text&&text.addEventListener("keypress",function(b){if(13===b.keyCode)return document.execCommand("formatBlock",!1,"p"),!1});
