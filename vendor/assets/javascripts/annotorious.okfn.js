var j=void 0,k=!0,p=null,r=!1,u,v=this;function ca(a,b){var c=a.split("."),d=v;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var f;c.length&&(f=c.shift());)!c.length&&b!==j?d[f]=b:d=d[f]?d[f]:d[f]={}}
function w(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function da(a){var b=w(a);return"array"==b||"object"==b&&"number"==typeof a.length}function x(a){return"string"==typeof a}function ea(a){var b=typeof a;return"object"==b&&a!=p||"function"==b}var z="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),fa=0;
function ga(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}}function ha(a,b){function c(){}c.prototype=b.prototype;a.ja=b.prototype;a.prototype=new c;a.prototype.constructor=a};function ia(a){return a.width&&a.height&&a.x&&a.y};function ja(a,b){this.x=a;this.y=b};function ka(a,b,c,d){0<c?(this.x=a,this.width=c):(this.x=a+c,this.width=-c);0<d?(this.y=b,this.height=d):(this.y=b+d,this.height=-d)};function la(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")}function ma(a){if(!na.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(oa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(pa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(qa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ua,"&quot;"));return a}var oa=/&/g,pa=/</g,qa=/>/g,ua=/\"/g,na=/[&<>\"]/,va={};function wa(a){return va[a]||(va[a]=(""+a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};var A=Array.prototype,xa=A.indexOf?function(a,b,c){return A.indexOf.call(a,b,c)}:function(a,b,c){c=c==p?0:0>c?Math.max(0,a.length+c):c;if(x(a))return!x(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},B=A.forEach?function(a,b,c){A.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=x(a)?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)};function ya(a,b){var c=xa(a,b);0<=c&&A.splice.call(a,c,1)}function za(a){return A.concat.apply(A,arguments)}
function Aa(a){if("array"==w(a))return za(a);for(var b=[],c=0,d=a.length;c<d;c++)b[c]=a[c];return b}function Ba(a,b,c,d){A.splice.apply(a,Ca(arguments,1))}function Ca(a,b,c){return 2>=arguments.length?A.slice.call(a,b):A.slice.call(a,b,c)}function Da(a,b){A.sort.call(a,b||Ea)}function Ea(a,b){return a>b?1:a<b?-1:0};var C,Fa,Ga,Ha,Ia;function Ja(){return v.navigator?v.navigator.userAgent:p}function Ka(){return v.navigator}Ha=Ga=Fa=C=r;var La;if(La=Ja()){var Na=Ka();C=0==La.indexOf("Opera");Fa=!C&&-1!=La.indexOf("MSIE");Ga=!C&&-1!=La.indexOf("WebKit");Ha=!C&&!Ga&&"Gecko"==Na.product}var Oa=C,D=Fa,E=Ha,G=Ga,Pa=Ka();Ia=-1!=(Pa&&Pa.platform||"").indexOf("Mac");var Qa=!!Ka()&&-1!=(Ka().appVersion||"").indexOf("X11"),Ra;
a:{var Sa="",H;if(Oa&&v.opera)var Ta=v.opera.version,Sa="function"==typeof Ta?Ta():Ta;else if(E?H=/rv\:([^\);]+)(\)|;)/:D?H=/MSIE\s+([^\);]+)(\)|;)/:G&&(H=/WebKit\/(\S+)/),H)var Ua=H.exec(Ja()),Sa=Ua?Ua[1]:"";if(D){var Va,Wa=v.document;Va=Wa?Wa.documentMode:j;if(Va>parseFloat(Sa)){Ra=""+Va;break a}}Ra=Sa}var Xa={};
function I(a){var b;if(!(b=Xa[a])){b=0;for(var c=la(""+Ra).split("."),d=la(""+a).split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",i=d[e]||"",l=RegExp("(\\d*)(\\D*)","g"),h=RegExp("(\\d*)(\\D*)","g");do{var s=l.exec(g)||["","",""],m=h.exec(i)||["","",""];if(0==s[0].length&&0==m[0].length)break;b=((0==s[1].length?0:parseInt(s[1],10))<(0==m[1].length?0:parseInt(m[1],10))?-1:(0==s[1].length?0:parseInt(s[1],10))>(0==m[1].length?0:parseInt(m[1],10))?1:0)||((0==s[2].length)<(0==
m[2].length)?-1:(0==s[2].length)>(0==m[2].length)?1:0)||(s[2]<m[2]?-1:s[2]>m[2]?1:0)}while(0==b)}b=Xa[a]=0<=b}return b}var Ya={};function Za(){return Ya[9]||(Ya[9]=D&&!!document.documentMode&&9<=document.documentMode)};var $a,ab=!D||Za();!E&&!D||D&&Za()||E&&I("1.9.1");D&&I("9");function bb(a){return(a=a.className)&&"function"==typeof a.split?a.split(/\s+/):[]}function cb(a,b){var c=bb(a),d=Ca(arguments,1),f;f=c;for(var e=0,g=0;g<d.length;g++)0<=xa(f,d[g])||(f.push(d[g]),e++);f=e==d.length;a.className=c.join(" ");return f}function db(a,b){for(var c=bb(a),d=Ca(arguments,1),f=c,e=0,g=0;g<f.length;g++)0<=xa(d,f[g])&&(Ba(f,g--,1),e++);a.className=c.join(" ")};function eb(a,b){for(var c in a)b.call(j,a[c],c,a)}var fb="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");function gb(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var e=0;e<fb.length;e++)c=fb[e],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function hb(a,b){eb(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in ib?a.setAttribute(ib[d],b):0==d.lastIndexOf("aria-",0)?a.setAttribute(d,b):a[d]=b})}var ib={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",maxlength:"maxLength",type:"type"};
function jb(a,b,c){var d=arguments,f=document,e=d[0],g=d[1];if(!ab&&g&&(g.name||g.type)){e=["<",e];g.name&&e.push(' name="',ma(g.name),'"');if(g.type){e.push(' type="',ma(g.type),'"');var i={};gb(i,g);g=i;delete g.type}e.push(">");e=e.join("")}e=f.createElement(e);g&&(x(g)?e.className=g:"array"==w(g)?cb.apply(p,[e].concat(g)):hb(e,g));2<d.length&&kb(f,e,d);return e}
function kb(a,b,c){function d(c){c&&b.appendChild(x(c)?a.createTextNode(c):c)}for(var f=2;f<c.length;f++){var e=c[f];da(e)&&!(ea(e)&&0<e.nodeType)?B(lb(e)?Aa(e):e,d):d(e)}}function mb(a,b){var c=b.parentNode;c&&c.replaceChild(a,b)}function nb(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function lb(a){if(a&&"number"==typeof a.length){if(ea(a))return"function"==typeof a.item||"string"==typeof a.item;if("function"==w(a))return"function"==typeof a.item}return r}function J(a){this.M=a||v.document||document}J.prototype.createElement=function(a){return this.M.createElement(a)};J.prototype.createTextNode=function(a){return this.M.createTextNode(a)};J.prototype.appendChild=function(a,b){a.appendChild(b)};J.prototype.contains=nb;function wb(a,b){var c=($a||($a=new J)).createElement("DIV");c.innerHTML=a(b||xb,j,j);if(1==c.childNodes.length){var d=c.firstChild;if(1==d.nodeType)return d}return c}var xb={};!D||Za();var yb=!D||Za();D&&I("8");!G||I("528");E&&I("1.9b")||D&&I("8")||Oa&&I("9.5")||G&&I("528");!E||I("8");function zb(){}zb.prototype.V=r;zb.prototype.z=function(){this.V||(this.V=k,this.A())};zb.prototype.A=function(){this.fa&&Ab.apply(p,this.fa)};function Ab(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];da(d)?Ab.apply(p,d):d&&"function"==typeof d.z&&d.z()}};function K(a,b){this.type=a;this.currentTarget=this.target=b}ha(K,zb);K.prototype.A=function(){delete this.type;delete this.target;delete this.currentTarget};K.prototype.Q=r;K.prototype.ia=k;function Bb(a){Bb[" "](a);return a}Bb[" "]=function(){};function L(a,b){a&&this.B(a,b)}ha(L,K);u=L.prototype;u.target=p;u.relatedTarget=p;u.offsetX=0;u.offsetY=0;u.clientX=0;u.clientY=0;u.screenX=0;u.screenY=0;u.button=0;u.keyCode=0;u.charCode=0;u.ctrlKey=r;u.altKey=r;u.shiftKey=r;u.metaKey=r;
u.B=function(a,b){var c=this.type=a.type;K.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(E){var f;a:{try{Bb(d.nodeName);f=k;break a}catch(e){}f=r}f||(d=p)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=G||a.offsetX!==j?a.offsetX:a.layerX;this.offsetY=G||a.offsetY!==j?a.offsetY:a.layerY;this.clientX=a.clientX!==j?a.clientX:a.pageX;this.clientY=a.clientY!==j?a.clientY:a.pageY;this.screenX=a.screenX||
0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;delete this.ia;delete this.Q};u.A=function(){L.ja.A.call(this);this.relatedTarget=this.currentTarget=this.target=p};function Cb(){}var Db=0;u=Cb.prototype;u.key=0;u.q=r;u.U=r;u.B=function(a,b,c,d,f,e){if("function"==w(a))this.Y=k;else if(a&&a.handleEvent&&"function"==w(a.handleEvent))this.Y=r;else throw Error("Invalid listener argument");this.C=a;this.aa=b;this.src=c;this.type=d;this.capture=!!f;this.W=e;this.U=r;this.key=++Db;this.q=r};u.handleEvent=function(a){return this.Y?this.C.call(this.W||this.src,a):this.C.handleEvent.call(this.C,a)};var M={},N={},O={},P={};
function V(a,b,c,d,f){if(b)if("array"==w(b))for(var e=0;e<b.length;e++)V(a,b[e],c,d,f);else{var d=!!d,g=N;b in g||(g[b]={h:0,l:0});g=g[b];d in g||(g[d]={h:0,l:0},g.h++);var g=g[d],i=a[z]||(a[z]=++fa),l;g.l++;if(g[i]){l=g[i];for(e=0;e<l.length;e++)if(g=l[e],g.C==c&&g.W==f){if(g.q)break;return}}else l=g[i]=[],g.h++;e=Eb();e.src=a;g=new Cb;g.B(c,e,a,b,d,f);c=g.key;e.key=c;l.push(g);M[c]=g;O[i]||(O[i]=[]);O[i].push(g);a.addEventListener?(a==v||!a.ea)&&a.addEventListener(b,e,d):a.attachEvent(b in P?P[b]:
P[b]="on"+b,e)}else throw Error("Invalid event type");}function Eb(){var a=Fb,b=yb?function(c){return a.call(b.src,b.key,c)}:function(c){c=a.call(b.src,b.key,c);if(!c)return c};return b}function Gb(a,b,c,d){if(!d.D&&d.$){for(var f=0,e=0;f<d.length;f++)d[f].q?d[f].aa.src=p:(f!=e&&(d[e]=d[f]),e++);d.length=e;d.$=r;0==e&&(delete N[a][b][c],N[a][b].h--,0==N[a][b].h&&(delete N[a][b],N[a].h--),0==N[a].h&&delete N[a])}}
function Hb(a,b,c,d,f){var e=1,b=b[z]||(b[z]=++fa);if(a[b]){a.l--;a=a[b];a.D?a.D++:a.D=1;try{for(var g=a.length,i=0;i<g;i++){var l=a[i];l&&!l.q&&(e&=Ib(l,f)!==r)}}finally{a.D--,Gb(c,d,b,a)}}return Boolean(e)}
function Ib(a,b){var c=a.handleEvent(b);if(a.U){var d=a.key;if(M[d]){var f=M[d];if(!f.q){var e=f.src,g=f.type,i=f.aa,l=f.capture;e.removeEventListener?(e==v||!e.ea)&&e.removeEventListener(g,i,l):e.detachEvent&&e.detachEvent(g in P?P[g]:P[g]="on"+g,i);e=e[z]||(e[z]=++fa);i=N[g][l][e];if(O[e]){var h=O[e];ya(h,f);0==h.length&&delete O[e]}f.q=k;i.$=k;Gb(g,l,e,i);delete M[d]}}}return c}
function Fb(a,b){if(!M[a])return k;var c=M[a],d=c.type,f=N;if(!(d in f))return k;var f=f[d],e,g;if(!yb){var i;if(!(i=b))a:{i=["window","event"];for(var l=v;e=i.shift();)if(l[e]!=p)l=l[e];else{i=p;break a}i=l}e=i;i=k in f;l=r in f;if(i){if(0>e.keyCode||e.returnValue!=j)return k;a:{var h=r;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(s){h=k}if(h||e.returnValue==j)e.returnValue=k}}h=new L;h.B(e,this);e=k;try{if(i){for(var m=[],q=h.currentTarget;q;q=q.parentNode)m.push(q);g=f[k];g.l=g.h;for(var o=m.length-
1;!h.Q&&0<=o&&g.l;o--)h.currentTarget=m[o],e&=Hb(g,m[o],d,k,h);if(l){g=f[r];g.l=g.h;for(o=0;!h.Q&&o<m.length&&g.l;o++)h.currentTarget=m[o],e&=Hb(g,m[o],d,r,h)}}else e=Ib(c,h)}finally{m&&(m.length=0),h.z()}return e}d=new L(b,this);try{e=Ib(c,d)}finally{d.z()}return e}var Jb=0;function W(a){return a+"_"+Jb++};function X(){return k};/*
 Portions of this code are from the Dojo Toolkit, received by
 The Closure Library Authors under the BSD license. All other code is
 Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

 The "New" BSD License:

 Copyright (c) 2005-2009, The Dojo Foundation
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
 list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
 this list of conditions and the following disclaimer in the documentation
 and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
 may be used to endorse or promote products derived from this software
 without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
 FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
var Kb=function(){function a(a,c){if(!a)return[];if(a.constructor==Array)return a;if(!x(a))return[a];if(x(c)&&(c=x(c)?document.getElementById(c):c,!c))return[];var c=c||document,e=c.ownerDocument||c.documentElement;S=c.contentType&&"application/xml"==c.contentType||Oa&&(c.doctype||"[object XMLDocument]"==e.toString())||!!e&&(D?e.xml:c.xmlVersion||e.xmlVersion);return(e=d(a)(c))&&e.F?e:b(e)}function b(a){if(a&&a.F)return a;var b=[];if(!a||!a.length)return b;a[0]&&b.push(a[0]);if(2>a.length)return b;
F++;if(D&&S){var c=F+"";a[0].setAttribute("_zipIdx",c);for(var d=1,e;e=a[d];d++)a[d].getAttribute("_zipIdx")!=c&&b.push(e),e.setAttribute("_zipIdx",c)}else if(D&&a.da)try{for(d=1;e=a[d];d++)ra(e)&&b.push(e)}catch(f){}else{a[0]&&(a[0]._zipIdx=F);for(d=1;e=a[d];d++)a[d]._zipIdx!=F&&b.push(e),e._zipIdx=F}return b}function c(a,b){if(!b)return 1;var c=jc(a);return!b[c]?b[c]=1:0}function d(a,b){if(ob){var c=pb[a];if(c&&!b)return c}if(c=qb[a])return c;var c=a.charAt(0),e=-1==a.indexOf(" ");0<=a.indexOf("#")&&
e&&(b=k);if(ob&&!b&&-1==">~+".indexOf(c)&&(!D||-1==a.indexOf(":"))&&!(rb&&0<=a.indexOf("."))&&-1==a.indexOf(":contains")&&-1==a.indexOf("|=")){var g=0<=">~+".indexOf(a.charAt(a.length-1))?a+" *":a;return pb[a]=function(b){try{if(!(9==b.nodeType||e))throw"";var c=b.querySelectorAll(g);D?c.da=k:c.F=k;return c}catch(Q){return d(a,k)(b)}}}var q=a.split(/\s*,\s*/);return qb[a]=2>q.length?f(a):function(a){for(var b=0,c=[],d;d=q[b++];)c=c.concat(f(d)(a));return c}}function f(a){var b=sb(la(a));if(1==b.length){var c=
e(b[0]);return function(a){if(a=c(a,[]))a.F=k;return a}}return function(a){for(var a=$(a),c,d,ic=b.length,f,R,g=0;g<ic;g++){R=[];c=b[g];d=a.length-1;0<d&&(f={},R.F=k);d=e(c);for(var q=0;c=a[q];q++)d(c,R,f);if(!R.length)break;a=R}return R}}function e(a){var b=tb[a.p];if(b)return b;var c=a.X,c=c?c.G:"",d=h(a,{o:1}),e="*"==a.d,f=document.getElementsByClassName;if(c)f={o:1},e&&(f.d=1),d=h(a,f),"+"==c?b=l(d):"~"==c?b=i(d):">"==c&&(b=g(d));else if(a.id)d=!a.Z&&e?X:h(a,{o:1,id:1}),b=function(b,c){var e;
e=b?new J(9==b.nodeType?b:b.ownerDocument||b.document):$a||($a=new J);var f=a.id;if(f=(e=x(f)?e.M.getElementById(f):f)&&d(e))if(!(f=9==b.nodeType)){for(f=e.parentNode;f&&!(f==b);)f=f.parentNode;f=!!f}if(f)return $(e,c)};else if(f&&/\{\s*\[native code\]\s*\}/.test(""+f)&&a.g.length&&!rb)var d=h(a,{o:1,g:1,id:1}),q=a.g.join(" "),b=function(a,b){for(var c=$(0,b),e,f=0,Q=a.getElementsByClassName(q);e=Q[f++];)d(e,a)&&c.push(e);return c};else!e&&!a.Z?b=function(b,c){for(var d=$(0,c),e,f=0,Q=b.getElementsByTagName(a.N());e=
Q[f++];)d.push(e);return d}:(d=h(a,{o:1,d:1,id:1}),b=function(b,c){for(var e=$(0,c),f,Q=0,g=b.getElementsByTagName(a.N());f=g[Q++];)d(f,b)&&e.push(f);return e});return tb[a.p]=b}function g(a){a=a||X;return function(b,d,e){for(var f=0,g=b[ub];b=g[f++];)aa(b)&&(!e||c(b,e))&&a(b,f)&&d.push(b);return d}}function i(a){return function(b,d,e){for(b=b[ba];b;){if(aa(b)){if(e&&!c(b,e))break;a(b)&&d.push(b)}b=b[ba]}return d}}function l(a){return function(b,d,e){for(;b=b[ba];)if(!sa||ra(b)){(!e||c(b,e))&&a(b)&&
d.push(b);break}return d}}function h(a,b){if(!a)return X;var b=b||{},c=p;b.o||(c=T(c,ra));b.d||"*"!=a.d&&(c=T(c,function(b){return b&&b.tagName==a.N()}));b.g||B(a.g,function(a,b){var d=RegExp("(?:^|\\s)"+a+"(?:\\s|$)");c=T(c,function(a){return d.test(a.className)});c.count=b});b.k||B(a.k,function(a){var b=a.name;Ma[b]&&(c=T(c,Ma[b](b,a.value)))});b.w||B(a.w,function(a){var b,d=a.L;a.type&&vb[a.type]?b=vb[a.type](d,a.O):d.length&&(b=kc(d));b&&(c=T(c,b))});b.id||a.id&&(c=T(c,function(b){return!!b&&
b.id==a.id}));c||"default"in b||(c=X);return c}function s(a){return q(a)%2}function m(a){return!(q(a)%2)}function q(a){var b=a.parentNode,c=0,d=b[ub],e=a._i||-1,f=b._l||-1;if(!d)return-1;d=d.length;if(f==d&&0<=e&&0<=f)return e;b._l=d;e=-1;for(b=b.firstElementChild||b.firstChild;b;b=b[ba])aa(b)&&(b._i=++c,a===b&&(e=c));return e}function o(a){for(;a=a[ba];)if(aa(a))return r;return k}function ta(a){for(;a=a[lc];)if(aa(a))return r;return k}function U(a,b){return!a?"":"class"==b?a.className||"":"for"==
b?a.htmlFor||"":"style"==b?a.style.cssText||"":(S?a.getAttribute(b):a.getAttribute(b,2))||""}function ra(a){return 1==a.nodeType}function T(a,b){return!a?b:!b?a:function(){return a.apply(window,arguments)&&b.apply(window,arguments)}}function sb(a){function b(){0<=i&&(n.id=c(i,t).replace(/\\/g,""),i=-1);if(0<=l){var a=l==t?p:c(l,t);0>">~+".indexOf(a)?n.d=a:n.G=a;l=-1}0<=h&&(n.g.push(c(h+1,t).replace(/\\/g,"")),h=-1)}function c(b,d){return la(a.slice(b,d))}for(var a=0<=">~+".indexOf(a.slice(-1))?a+
" * ":a+" ",d=[],e=-1,f=-1,g=-1,q=-1,h=-1,i=-1,l=-1,m="",o="",s,t=0,ta=a.length,n=p,y=p;m=o,o=a.charAt(t),t<ta;t++)if("\\"!=m)if(n||(s=t,n={p:p,k:[],w:[],g:[],d:p,G:p,id:p,N:function(){return S?this.ha:this.d}},l=t),0<=e)if("]"==o){y.L?y.O=c(g||e+1,t):y.L=c(e+1,t);if((e=y.O)&&('"'==e.charAt(0)||"'"==e.charAt(0)))y.O=e.slice(1,-1);n.w.push(y);y=p;e=g=-1}else"="==o&&(g=0<="|~^$*".indexOf(m)?m:"",y.type=g+o,y.L=c(e+1,t-g.length),g=t+1);else 0<=f?")"==o&&(0<=q&&(y.value=c(f+1,t)),q=f=-1):"#"==o?(b(),
i=t+1):"."==o?(b(),h=t):":"==o?(b(),q=t):"["==o?(b(),e=t,y={}):"("==o?(0<=q&&(y={name:c(q+1,t),value:p},n.k.push(y)),f=t):" "==o&&m!=o&&(b(),0<=q&&n.k.push({name:c(q+1,t)}),n.Z=n.k.length||n.w.length||n.g.length,n.la=n.p=c(s,t),n.ha=n.d=n.G?p:n.d||"*",n.d&&(n.d=n.d.toUpperCase()),d.length&&d[d.length-1].G&&(n.X=d.pop(),n.p=n.X.p+" "+n.p),d.push(n),n=p);return d}function $(a,b){var c=b||[];a&&c.push(a);return c}var rb=G&&"BackCompat"==document.compatMode,ub=document.firstChild.children?"children":
"childNodes",S=r,vb={"*=":function(a,b){return function(c){return 0<=U(c,a).indexOf(b)}},"^=":function(a,b){return function(c){return 0==U(c,a).indexOf(b)}},"$=":function(a,b){return function(c){c=" "+U(c,a);return c.lastIndexOf(b)==c.length-b.length}},"~=":function(a,b){var c=" "+b+" ";return function(b){return 0<=(" "+U(b,a)+" ").indexOf(c)}},"|=":function(a,b){b=" "+b;return function(c){c=" "+U(c,a);return c==b||0==c.indexOf(b+"-")}},"=":function(a,b){return function(c){return U(c,a)==b}}},sa=
"undefined"==typeof document.firstChild.nextElementSibling,ba=!sa?"nextElementSibling":"nextSibling",lc=!sa?"previousElementSibling":"previousSibling",aa=sa?ra:X,Ma={checked:function(){return function(a){return a.checked||a.attributes.checked}},"first-child":function(){return ta},"last-child":function(){return o},"only-child":function(){return function(a){return!ta(a)||!o(a)?r:k}},empty:function(){return function(a){for(var b=a.childNodes,a=a.childNodes.length-1;0<=a;a--){var c=b[a].nodeType;if(1===
c||3==c)return r}return k}},contains:function(a,b){var c=b.charAt(0);if('"'==c||"'"==c)b=b.slice(1,-1);return function(a){return 0<=a.innerHTML.indexOf(b)}},not:function(a,b){var c=sb(b)[0],d={o:1};"*"!=c.d&&(d.d=1);c.g.length||(d.g=1);var e=h(c,d);return function(a){return!e(a)}},"nth-child":function(a,b){if("odd"==b)return s;if("even"==b)return m;if(-1!=b.indexOf("n")){var c=b.split("n",2),d=c[0]?"-"==c[0]?-1:parseInt(c[0],10):1,e=c[1]?parseInt(c[1],10):0,f=0,g=-1;0<d?0>e?e=e%d&&d+e%d:0<e&&(e>=
d&&(f=e-e%d),e%=d):0>d&&(d*=-1,0<e&&(g=e,e%=d));if(0<d)return function(a){a=q(a);return a>=f&&(0>g||a<=g)&&a%d==e};b=e}var h=parseInt(b,10);return function(a){return q(a)==h}}},kc=D?function(a){var b=a.toLowerCase();"class"==b&&(a="className");return function(c){return S?c.getAttribute(a):c[a]||c[b]}}:function(a){return function(b){return b&&b.getAttribute&&b.hasAttribute(a)}},tb={},qb={},pb={},ob=!!document.querySelectorAll&&(!G||I("526")),F=0,jc=D?function(a){return S?a.getAttribute("_uid")||a.setAttribute("_uid",
++F)||F:a.uniqueID}:function(a){return a._uid||(a._uid=++F)};a.k=Ma;return a}();ca("goog.dom.query",Kb);ca("goog.dom.query.pseudos",Kb.k);function Lb(a,b,c){this.j=a;this.n=b;this.i=c;this.r=[];this.c=this.j.getContext("2d");this.m=k;var d=this;V(this.j,"mousemove",function(a){if(d.m){var b=Mb(d,a.offsetX,a.offsetY);b?d.a?d.a!=b&&(d.m=r,Nb(d.n)):(d.a=b,Y(d),d.i.fireEvent(Ob,{K:d.a,P:a})):d.a&&(d.m=r,Nb(d.n))}else d.s=a});Z(c,Pb,function(){delete d.a;d.m=k});Z(c,Qb,function(){if(!d.m&&d.s){var a=d.a;d.a=Mb(d,d.s.offsetX,d.s.offsetY);d.m=k;a!=d.a?(Y(d),d.i.fireEvent(Rb,{K:a,P:d.s}),d.i.fireEvent(Ob,{K:d.a,P:d.s})):d.a&&Sb(d.n)}else Y(d)})}
function Mb(a,b,c){a=Tb(a,b,c);if(0<a.length)return a[0]}function Tb(a,b,c){var d=[];B(a.r,function(a){ia(a.shape.b)&&!(b<a.shape.b.x||c<a.shape.b.y||b>a.shape.b.x+a.shape.b.width||c>a.shape.b.y+a.shape.b.height)&&d.push(a)});Da(d,function(a,b){return(ia(a.shape.b)?a.shape.b.width*a.shape.b.height:0)>(ia(b.shape.b)?b.shape.b.width*b.shape.b.height:0)});return d}
function Ub(a,b,c,d){a.c.lineWidth=d;b=b.shape;b.type!=Vb&&b.type!=Wb&&b.type==Xb&&(b=b.b,a.c.strokeStyle="#000000",a.c.strokeRect(b.x+0.5,b.y+0.5,b.width,b.height),a.c.strokeStyle=c,a.c.strokeRect(b.x+1.5,b.y+1.5,b.width-2,b.height-2))}function Y(a){a.c.clearRect(0,0,a.j.width,a.j.height);B(a.r,function(b){Ub(a,b,"#ffffff",1)});if(a.a){Ub(a,a.a,"#fff000",1.2);var b=a.a.shape.b;a.n.show(a.a,b.x,b.y+b.height+5)}};function Yb(a,b,c){x(b)?Zb(a,c,b):eb(b,ga(Zb,a))}function Zb(a,b,c){a.style[wa(c)]=b}function $b(a,b,c){var d=E&&(Ia||Qa)&&I("1.9");a.style.left=ac(b,d);a.style.top=ac(c,d)}function bc(a,b,c){if(c==j)throw Error("missing height argument");a.style.width=ac(b,k);a.style.height=ac(c,k)}function ac(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function cc(a,b){var c=a.style;"opacity"in c?c.opacity=b:"MozOpacity"in c?c.MozOpacity=b:"filter"in c&&(c.filter=""===b?"":"alpha(opacity="+100*b+")")}function dc(a,b){a.style.display=b?"":"none"};function ec(a,b){function c(a){a=a.relatedTarget;return!a||nb(e,a)||nb(b.editor.element[0],a)||nb(b.viewer.element[0],a)?k:r}var d=fc(b.element[0].firstChild),f=new gc,e=jb("div","yuma-annotationlayer");Yb(e,"position","relative");bc(e,a.width,a.height);mb(e,a);e.appendChild(a);var g=wb(hc,{ga:"Click and Drag to Annotate"});cc(g,0);e.appendChild(g);var i=wb(mc,{width:a.width,height:a.height});e.appendChild(i);var l=new nc(a,f,b,d),h=new Lb(i,l,f),s=wb(mc,{width:a.width,height:a.height});dc(s,r);e.appendChild(s);
var m=new oc(s,f);V(e,"mouseover",function(a){c(a)||f.fireEvent(pc)});V(e,"mouseout",function(a){c(a)||f.fireEvent(Pb)});qc(l,function(a){c(a)||f.fireEvent(pc)});rc(l,function(a){c(a)||f.fireEvent(Pb)});V(i,"mousedown",function(a){dc(s,k);h.a=j;Nb(h.n);Y(h);var b=a.offsetX,a=a.offsetY;m.J=k;m.u=new ja(b,a);m.i.fireEvent(sc,{offsetX:b,offsetY:a});Yb(document.body,"-webkit-user-select","none")});Z(f,pc,function(){cc(i,1);cc(g,0.8)});Z(f,Pb,function(){cc(i,0.4);cc(g,0)});Z(f,tc,function(c){var e={url:a.src,
shape:c.shape};b.publish("beforeAnnotationCreated",e);var f=fc(a),g=c.shape.b,c=g.x+f.left-d.left+16,f=g.y+g.height+f.top+window.pageYOffset-d.top+5;b.showEditor(e,{top:window.pageYOffset-d.top,left:0});$b(b.editor.element[0],c,f)});Z(f,uc,function(){dc(s,r);vc(m)});b.viewer.on("edit",function(c){if(c.url==a.src){dc(s,k);h.a=j;Nb(h.n);Y(h);var e=fc(a),f=c.shape.b,c=f.x+e.left-d.left+16,e=f.y+f.height+e.top-d.top+window.pageYOffset+5;$b(b.editor.element[0],0,window.pageYOffset-d.top);b.editor.show();
$b(b.editor.element[0],c,e)}});b.subscribe("annotationCreated",function(b){b.url==a.src&&(vc(m),b.url==a.src&&(h.r.push(b),Ub(h,b,"#ffffff",1)))});b.subscribe("annotationsLoaded",function(b){B(b,function(b){b.url==a.src&&(h.r.push(b),Ub(h,b,"#ffffff",1))})});b.subscribe("annotationDeleted",function(b){b.url==a.src&&(b==h.a&&delete h.a,ya(h.r,b),Y(h),h.i.fireEvent(wc,{K:b}));f.fireEvent(Qb)});b.subscribe("annotationEditorHidden",function(){dc(s,r);vc(m);f.fireEvent(Qb)})}
window.Annotator.Plugin.AnnotoriousImagePlugin=function(){function a(a){this.ba=a}a.prototype.pluginInit=function(){var a=this.ba.getElementsByTagName("img"),c=this;xc(function(){B(a,function(a){new ec(a,c.annotator)})})};return a}();function nc(a,b,c,d){this.R=a;this.ca=b;this.e=c;this.H=d;this.I=r;this.T=[];this.S=[];var f=this;V(this.e.viewer.element[0],"mouseover",function(a){yc(f)&&(Sb(f),B(f.T,function(b){b(a)}))});V(this.e.viewer.element[0],"mouseout",function(a){yc(f)&&(c.clearViewerHideTimer(),Nb(f),B(f.S,function(b){b(a)}))})}function yc(a){var b=a.e.viewer.annotations;return!b||1>b.length?r:b[0].url==a.R.src}function qc(a,b){a.T.push(b)}function rc(a,b){a.S.push(b)}
function Nb(a){0<=xa(bb(a.e.viewer.element[0]),"annotator-hide")||(a.I=r,a.t||(a.t=window.setTimeout(function(){a.ca.fireEvent(Qb);!a.I&&yc(a)&&(cb(a.e.viewer.element[0],"annotator-hide"),a.e.viewer.annotations=[],delete a.t)},300)))}function Sb(a){a.I=k;a.t&&(window.clearTimeout(a.t),delete a.t)}
nc.prototype.show=function(a,b,c){db(this.e.viewer.element[0],"annotator-hide");var d=fc(this.R);$b(this.e.viewer.element[0],0,window.pageYOffset-this.H.top);this.e.viewer.load([a]);$b(this.e.viewer.element[0],d.left-this.H.left+b+16,d.top+window.pageYOffset-this.H.top+c);Sb(this)};function oc(a,b){this.j=a;this.i=b;this.c=a.getContext("2d");this.c.lineWidth=1;this.J=r;var c=this;V(a,"mousemove",function(b){c.J&&(c.f=new ka(c.u.x,c.u.y,b.offsetX-c.u.x,b.offsetY-c.u.y),c.c.clearRect(0,0,a.width,a.height),c.c.strokeStyle="#000000",c.c.strokeRect(c.f.x+0.5,c.f.y+0.5,c.f.width,c.f.height),c.c.strokeStyle="#ffffff",c.c.strokeRect(c.f.x+1.5,c.f.y+1.5,c.f.width-2,c.f.height-2))});V(a,"mouseup",function(a){c.J=r;var b=new zc(c.f);b.b?c.i.fireEvent(tc,{P:a,shape:b}):c.i.fireEvent(uc)})}
function vc(a){a.c.clearRect(0,0,a.j.width,a.j.height);Yb(document.body,"-webkit-user-select","auto");delete a.f};function zc(a){this.type=Xb;this.b=a}var Vb="Point",Xb="Rectangle",Wb="Polygon";function fc(a){for(var b=0,c=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)b+=a.offsetLeft-a.scrollLeft,c+=a.offsetTop-a.scrollTop,a=a.offsetParent;return{top:c,left:b}}function xc(a){if("function"==typeof window.onload){var b=window.onload;window.onload=function(){b();a()}}else window.onload=a};function gc(){this.v=[]}function Z(a,b,c){a.v[b]||(a.v[b]=[]);a.v[b].push(c)}gc.prototype.fireEvent=function(a,b){var c=this.v[a];c&&B(c,function(a){a(b)})};var pc=W("mouse_over_media"),Pb=W("mouse_out_of_media"),Ob=W("mouse_over_annotation"),Rb=W("mouse_out_of_annotation"),sc=W("selection_started"),uc=W("selection_canceled"),tc=W("selection_completed");W("selection_changed");var Qb=W("before_popup_hide");W("popup_btn_delete");W("popup_btn_edit");var wc=W("annotation_removed");W("annotation_edit_cancel");
W("annotation_edit_save");D&&I(8);"ScriptEngine"in v&&"JScript"==v.ScriptEngine()&&(v.ScriptEngineMajorVersion(),v.ScriptEngineMinorVersion(),v.ScriptEngineBuildVersion());function Ac(a){return"object"===typeof a&&a&&0===a.ka?a.content:(""+a).replace(Bc,Cc)}var Dc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\u000c":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function Cc(a){return Dc[a]}var Bc=/[\x00\x22\x26\x27\x3c\x3e]/g;function hc(a){return'<div class="yuma-hint" style="white-space:nowrap; position:absolute; pointer-events:none; top:10px; left:10px;">'+Ac(a.ga)+"</div>"}function mc(a){return'<canvas class="yuma-canvas" style="position:absolute; top:0px; left:0px; width:'+Ac(a.width)+"px; height:"+Ac(a.height)+'px;" width="'+Ac(a.width)+'" height="'+Ac(a.height)+'"></canvas>'};
