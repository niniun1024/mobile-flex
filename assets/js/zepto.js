var Zepto=function(){function G(a){return null==a?String(a):y[z.call(a)]||"object"}function H(a){return"function"==G(a)}function I(a){return null!=a&&a==a.window}function J(a){return null!=a&&a.nodeType==a.DOCUMENT_NODE}function K(a){return"object"==G(a)}function L(a){return K(a)&&!I(a)&&Object.getPrototypeOf(a)==Object.prototype}function M(a){return"number"==typeof a.length}function N(a){return g.call(a,function(a){return null!=a})}function O(a){return a.length>0?c.fn.concat.apply([],a):a}function P(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function Q(a){return a in k?k[a]:k[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function R(a,b){return"number"!=typeof b||l[P(a)]?b:b+"px"}function S(a){var b,c;return j[a]||(b=i.createElement(a),i.body.appendChild(b),c=getComputedStyle(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),"none"==c&&(c="block"),j[a]=c),j[a]}function T(a){return"children"in a?h.call(a.children):c.map(a.childNodes,function(a){return 1==a.nodeType?a:void 0})}function U(a,b){var c,d=a?a.length:0;for(c=0;d>c;c++)this[c]=a[c];this.length=d,this.selector=b||""}function V(c,d,e){for(b in d)e&&(L(d[b])||F(d[b]))?(L(d[b])&&!L(c[b])&&(c[b]={}),F(d[b])&&!F(c[b])&&(c[b]=[]),V(c[b],d[b],e)):d[b]!==a&&(c[b]=d[b])}function W(a,b){return null==b?c(a):c(a).filter(b)}function X(a,b,c,d){return H(b)?b.call(a,c,d):b}function Y(a,b,c){null==c?a.removeAttribute(b):a.setAttribute(b,c)}function Z(b,c){var d=b.className||"",e=d&&d.baseVal!==a;return c===a?e?d.baseVal:d:void(e?d.baseVal=c:b.className=c)}function $(a){try{return a?"true"==a||("false"==a?!1:"null"==a?null:+a+""==a?+a:/^[\[\{]/.test(a)?c.parseJSON(a):a):a}catch(b){return a}}function _(a,b){b(a);for(var c=0,d=a.childNodes.length;d>c;c++)_(a.childNodes[c],b)}var a,b,c,d,B,C,e=[],f=e.concat,g=e.filter,h=e.slice,i=window.document,j={},k={},l={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},m=/^\s*<(\w+|!)[^>]*>/,n=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,o=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,p=/^(?:body|html)$/i,q=/([A-Z])/g,r=["val","css","html","text","data","width","height","offset"],s=["after","prepend","before","append"],t=i.createElement("table"),u=i.createElement("tr"),v={tr:i.createElement("tbody"),tbody:t,thead:t,tfoot:t,td:u,th:u,"*":i.createElement("div")},w=/complete|loaded|interactive/,x=/^[\w-]*$/,y={},z=y.toString,A={},D=i.createElement("div"),E={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},F=Array.isArray||function(a){return a instanceof Array};return A.matches=function(a,b){if(!b||!a||1!==a.nodeType)return!1;var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&&(e=D).appendChild(a),d=~A.qsa(e,b).indexOf(a),f&&D.removeChild(a),d},B=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},C=function(a){return g.call(a,function(b,c){return a.indexOf(b)==c})},A.fragment=function(b,d,e){var f,g,j;return n.test(b)&&(f=c(i.createElement(RegExp.$1))),f||(b.replace&&(b=b.replace(o,"<$1></$2>")),d===a&&(d=m.test(b)&&RegExp.$1),d in v||(d="*"),j=v[d],j.innerHTML=""+b,f=c.each(h.call(j.childNodes),function(){j.removeChild(this)})),L(e)&&(g=c(f),c.each(e,function(a,b){r.indexOf(a)>-1?g[a](b):g.attr(a,b)})),f},A.Z=function(a,b){return new U(a,b)},A.isZ=function(a){return a instanceof A.Z},A.init=function(b,d){var e;if(!b)return A.Z();if("string"==typeof b)if(b=b.trim(),"<"==b[0]&&m.test(b))e=A.fragment(b,RegExp.$1,d),b=null;else{if(d!==a)return c(d).find(b);e=A.qsa(i,b)}else{if(H(b))return c(i).ready(b);if(A.isZ(b))return b;if(F(b))e=N(b);else if(K(b))e=[b],b=null;else if(m.test(b))e=A.fragment(b.trim(),RegExp.$1,d),b=null;else{if(d!==a)return c(d).find(b);e=A.qsa(i,b)}}return A.Z(e,b)},c=function(a,b){return A.init(a,b)},c.extend=function(a){var b,c=h.call(arguments,1);return"boolean"==typeof a&&(b=a,a=c.shift()),c.forEach(function(c){V(a,c,b)}),a},A.qsa=function(a,b){var c,d="#"==b[0],e=!d&&"."==b[0],f=d||e?b.slice(1):b,g=x.test(f);return a.getElementById&&g&&d?(c=a.getElementById(f))?[c]:[]:1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType?[]:h.call(g&&!d&&a.getElementsByClassName?e?a.getElementsByClassName(f):a.getElementsByTagName(b):a.querySelectorAll(b))},c.contains=i.documentElement.contains?function(a,b){return a!==b&&a.contains(b)}:function(a,b){for(;b&&(b=b.parentNode);)if(b===a)return!0;return!1},c.type=G,c.isFunction=H,c.isWindow=I,c.isArray=F,c.isPlainObject=L,c.isEmptyObject=function(a){var b;for(b in a)return!1;return!0},c.inArray=function(a,b,c){return e.indexOf.call(b,a,c)},c.camelCase=B,c.trim=function(a){return null==a?"":String.prototype.trim.call(a)},c.uuid=0,c.support={},c.expr={},c.noop=function(){},c.map=function(a,b){var c,e,f,d=[];if(M(a))for(e=0;e<a.length;e++)c=b(a[e],e),null!=c&&d.push(c);else for(f in a)c=b(a[f],f),null!=c&&d.push(c);return O(d)},c.each=function(a,b){var c,d;if(M(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},c.grep=function(a,b){return g.call(a,b)},window.JSON&&(c.parseJSON=JSON.parse),c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){y["[object "+b+"]"]=b.toLowerCase()}),c.fn={constructor:A.Z,length:0,forEach:e.forEach,reduce:e.reduce,push:e.push,sort:e.sort,splice:e.splice,indexOf:e.indexOf,concat:function(){var a,b,c=[];for(a=0;a<arguments.length;a++)b=arguments[a],c[a]=A.isZ(b)?b.toArray():b;return f.apply(A.isZ(this)?this.toArray():this,c)},map:function(a){return c(c.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return c(h.apply(this,arguments))},ready:function(a){return w.test(i.readyState)&&i.body?a(c):i.addEventListener("DOMContentLoaded",function(){a(c)},!1),this},get:function(b){return b===a?h.call(this):this[b>=0?b:b+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(a){return e.every.call(this,function(b,c){return a.call(b,c,b)!==!1}),this},filter:function(a){return H(a)?this.not(this.not(a)):c(g.call(this,function(b){return A.matches(b,a)}))},add:function(a,b){return c(C(this.concat(c(a,b))))},is:function(a){return this.length>0&&A.matches(this[0],a)},not:function(b){var d=[];if(H(b)&&b.call!==a)this.each(function(a){b.call(this,a)||d.push(this)});else{var e="string"==typeof b?this.filter(b):M(b)&&H(b.item)?h.call(b):c(b);this.forEach(function(a){e.indexOf(a)<0&&d.push(a)})}return c(d)},has:function(a){return this.filter(function(){return K(a)?c.contains(this,a):c(this).find(a).size()})},eq:function(a){return-1===a?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!K(a)?a:c(a)},last:function(){var a=this[this.length-1];return a&&!K(a)?a:c(a)},find:function(a){var b,d=this;return b=a?"object"==typeof a?c(a).filter(function(){var a=this;return e.some.call(d,function(b){return c.contains(b,a)})}):1==this.length?c(A.qsa(this[0],a)):this.map(function(){return A.qsa(this,a)}):c()},closest:function(a,b){var d=this[0],e=!1;for("object"==typeof a&&(e=c(a));d&&!(e?e.indexOf(d)>=0:A.matches(d,a));)d=d!==b&&!J(d)&&d.parentNode;return c(d)},parents:function(a){for(var b=[],d=this;d.length>0;)d=c.map(d,function(a){return(a=a.parentNode)&&!J(a)&&b.indexOf(a)<0?(b.push(a),a):void 0});return W(b,a)},parent:function(a){return W(C(this.pluck("parentNode")),a)},children:function(a){return W(this.map(function(){return T(this)}),a)},contents:function(){return this.map(function(){return this.contentDocument||h.call(this.childNodes)})},siblings:function(a){return W(this.map(function(a,b){return g.call(T(b.parentNode),function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return c.map(this,function(b){return b[a]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=S(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){var b=H(a);if(this[0]&&!b)var d=c(a).get(0),e=d.parentNode||this.length>1;return this.each(function(f){c(this).wrapAll(b?a.call(this,f):e?d.cloneNode(!0):d)})},wrapAll:function(a){if(this[0]){c(this[0]).before(a=c(a));for(var b;(b=a.children()).length;)a=b.first();c(a).append(this)}return this},wrapInner:function(a){var b=H(a);return this.each(function(d){var e=c(this),f=e.contents(),g=b?a.call(this,d):a;f.length?f.wrapAll(g):e.append(g)})},unwrap:function(){return this.parent().each(function(){c(this).replaceWith(c(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(b){return this.each(function(){var d=c(this);(b===a?"none"==d.css("display"):b)?d.show():d.hide()})},prev:function(a){return c(this.pluck("previousElementSibling")).filter(a||"*")},next:function(a){return c(this.pluck("nextElementSibling")).filter(a||"*")},html:function(a){return 0 in arguments?this.each(function(b){var d=this.innerHTML;c(this).empty().append(X(this,a,b,d))}):0 in this?this[0].innerHTML:null},text:function(a){return 0 in arguments?this.each(function(b){var c=X(this,a,b,this.textContent);this.textContent=null==c?"":""+c}):0 in this?this[0].textContent:null},attr:function(c,d){var e;return"string"!=typeof c||1 in arguments?this.each(function(a){if(1===this.nodeType)if(K(c))for(b in c)Y(this,b,c[b]);else Y(this,c,X(this,d,a,this.getAttribute(c)))}):this.length&&1===this[0].nodeType?!(e=this[0].getAttribute(c))&&c in this[0]?this[0][c]:e:a},removeAttr:function(a){return this.each(function(){1===this.nodeType&&a.split(" ").forEach(function(a){Y(this,a)},this)})},prop:function(a,b){return a=E[a]||a,1 in arguments?this.each(function(c){this[a]=X(this,b,c,this[a])}):this[0]&&this[0][a]},data:function(b,c){var d="data-"+b.replace(q,"-$1").toLowerCase(),e=1 in arguments?this.attr(d,c):this.attr(d);return null!==e?$(e):a},val:function(a){return 0 in arguments?this.each(function(b){this.value=X(this,a,b,this.value)}):this[0]&&(this[0].multiple?c(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(a){if(a)return this.each(function(b){var d=c(this),e=X(this,a,b,d.offset()),f=d.offsetParent().offset(),g={top:e.top-f.top,left:e.left-f.left};"static"==d.css("position")&&(g.position="relative"),d.css(g)});if(!this.length)return null;if(!c.contains(i.documentElement,this[0]))return{top:0,left:0};var b=this[0].getBoundingClientRect();return{left:b.left+window.pageXOffset,top:b.top+window.pageYOffset,width:Math.round(b.width),height:Math.round(b.height)}},css:function(a,d){if(arguments.length<2){var e,f=this[0];if(!f)return;if(e=getComputedStyle(f,""),"string"==typeof a)return f.style[B(a)]||e.getPropertyValue(a);if(F(a)){var g={};return c.each(a,function(a,b){g[b]=f.style[B(b)]||e.getPropertyValue(b)}),g}}var h="";if("string"==G(a))d||0===d?h=P(a)+":"+R(a,d):this.each(function(){this.style.removeProperty(P(a))});else for(b in a)a[b]||0===a[b]?h+=P(b)+":"+R(b,a[b])+";":this.each(function(){this.style.removeProperty(P(b))});return this.each(function(){this.style.cssText+=";"+h})},index:function(a){return a?this.indexOf(c(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return a?e.some.call(this,function(a){return this.test(Z(a))},Q(a)):!1},addClass:function(a){return a?this.each(function(b){if("className"in this){d=[];var e=Z(this),f=X(this,a,b,e);f.split(/\s+/g).forEach(function(a){c(this).hasClass(a)||d.push(a)},this),d.length&&Z(this,e+(e?" ":"")+d.join(" "))}}):this},removeClass:function(b){return this.each(function(c){if("className"in this){if(b===a)return Z(this,"");d=Z(this),X(this,b,c,d).split(/\s+/g).forEach(function(a){d=d.replace(Q(a)," ")}),Z(this,d.trim())}})},toggleClass:function(b,d){return b?this.each(function(e){var f=c(this),g=X(this,b,e,Z(this));g.split(/\s+/g).forEach(function(b){(d===a?!f.hasClass(b):d)?f.addClass(b):f.removeClass(b)})}):this},scrollTop:function(b){if(this.length){var c="scrollTop"in this[0];return b===a?c?this[0].scrollTop:this[0].pageYOffset:this.each(c?function(){this.scrollTop=b}:function(){this.scrollTo(this.scrollX,b)})}},scrollLeft:function(b){if(this.length){var c="scrollLeft"in this[0];return b===a?c?this[0].scrollLeft:this[0].pageXOffset:this.each(c?function(){this.scrollLeft=b}:function(){this.scrollTo(b,this.scrollY)})}},position:function(){if(this.length){var a=this[0],b=this.offsetParent(),d=this.offset(),e=p.test(b[0].nodeName)?{top:0,left:0}:b.offset();return d.top-=parseFloat(c(a).css("margin-top"))||0,d.left-=parseFloat(c(a).css("margin-left"))||0,e.top+=parseFloat(c(b[0]).css("border-top-width"))||0,e.left+=parseFloat(c(b[0]).css("border-left-width"))||0,{top:d.top-e.top,left:d.left-e.left}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||i.body;a&&!p.test(a.nodeName)&&"static"==c(a).css("position");)a=a.offsetParent;return a})}},c.fn.detach=c.fn.remove,["width","height"].forEach(function(b){var d=b.replace(/./,function(a){return a[0].toUpperCase()});c.fn[b]=function(e){var f,g=this[0];return e===a?I(g)?g["inner"+d]:J(g)?g.documentElement["scroll"+d]:(f=this.offset())&&f[b]:this.each(function(a){g=c(this),g.css(b,X(this,e,a,g[b]()))})}}),s.forEach(function(a,b){var d=b%2;c.fn[a]=function(){var a,f,e=c.map(arguments,function(b){return a=G(b),"object"==a||"array"==a||null==b?b:A.fragment(b)}),g=this.length>1;return e.length<1?this:this.each(function(a,h){f=d?h:h.parentNode,h=0==b?h.nextSibling:1==b?h.firstChild:2==b?h:null;var j=c.contains(i.documentElement,f);e.forEach(function(a){if(g)a=a.cloneNode(!0);else if(!f)return c(a).remove();f.insertBefore(a,h),j&&_(a,function(a){null==a.nodeName||"SCRIPT"!==a.nodeName.toUpperCase()||a.type&&"text/javascript"!==a.type||a.src||window.eval.call(window,a.innerHTML)})})})},c.fn[d?a+"To":"insert"+(b?"Before":"After")]=function(b){return c(b)[a](this),this}}),A.Z.prototype=U.prototype=c.fn,A.uniq=C,A.deserializeValue=$,c.zepto=A,c}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto);