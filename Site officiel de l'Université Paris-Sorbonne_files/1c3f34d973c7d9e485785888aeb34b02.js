/* compact [
	prive/javascript/jquery.js
	prive/javascript/jquery.form.js
	prive/javascript/ajaxCallback.js
	plugins/auto/lecteur_multimedia/soundmanager/soundmanager2.js
	plugins/auto/lecteur_multimedia/javascript/jscroller.js
	plugins/auto/lecteur_multimedia/player_enclosure.js
	plugins/auto/saisies/javascript/saisies.js
] 61.3% */

/* prive/javascript/jquery.js */

(function(window,undefined){
var document=window.document;
var jQuery=(function(){
var jQuery=function(selector,context){
return new jQuery.fn.init(selector,context)},
_jQuery=window.jQuery,
_$=window.$,
rootjQuery,
quickExpr=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
isSimple=/^.[^:#\[\.,]*$/,
rnotwhite=/\S/,
rwhite=/\s/,
trimLeft=/^\s+/,
trimRight=/\s+$/,
rnonword=/\W/,
rdigit=/\d/,
rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,
rvalidchars=/^[\],:{}\s]*$/,
rvalidescape=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
rvalidtokens=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g,
rwebkit=/(webkit)[ \/]([\w.]+)/,
ropera=/(opera)(?:.*version)?[ \/]([\w.]+)/,
rmsie=/(msie) ([\w.]+)/,
rmozilla=/(mozilla)(?:.*? rv:([\w.]+))?/,
userAgent=navigator.userAgent,
browserMatch,
readyBound=false,
readyList=[],
DOMContentLoaded,
toString=Object.prototype.toString,
hasOwn=Object.prototype.hasOwnProperty,
push=Array.prototype.push,
slice=Array.prototype.slice,
trim=String.prototype.trim,
indexOf=Array.prototype.indexOf,
class2type={};
jQuery.fn=jQuery.prototype={
init:function(selector,context){
var match,elem,ret,doc;
if(!selector){
return this}
if(selector.nodeType){
this.context=this[0]=selector;
this.length=1;
return this}
if(selector==="body"&&!context&&document.body){
this.context=document;
this[0]=document.body;
this.selector="body";
this.length=1;
return this}
if(typeof selector==="string"){
match=quickExpr.exec(selector);
if(match&&(match[1]||!context)){
if(match[1]){
doc=(context?context.ownerDocument||context:document);
ret=rsingleTag.exec(selector);
if(ret){
if(jQuery.isPlainObject(context)){
selector=[document.createElement(ret[1])];
jQuery.fn.attr.call(selector,context,true)}else{
selector=[doc.createElement(ret[1])]}
}else{
ret=jQuery.buildFragment([match[1]],[doc]);
selector=(ret.cacheable?ret.fragment.cloneNode(true):ret.fragment).childNodes}
return jQuery.merge(this,selector)}else{
elem=document.getElementById(match[2]);
if(elem&&elem.parentNode){
if(elem.id!==match[2]){
return rootjQuery.find(selector)}
this.length=1;
this[0]=elem}
this.context=document;
this.selector=selector;
return this}
}else if(!context&&!rnonword.test(selector)){
this.selector=selector;
this.context=document;
selector=document.getElementsByTagName(selector);
return jQuery.merge(this,selector)}else if(!context||context.jquery){
return(context||rootjQuery).find(selector)}else{
return jQuery(context).find(selector)}
}else if(jQuery.isFunction(selector)){
return rootjQuery.ready(selector)}
if(selector.selector!==undefined){
this.selector=selector.selector;
this.context=selector.context}
return jQuery.makeArray(selector,this)},
selector:"",
jquery:"1.4.4",
length:0,
size:function(){
return this.length},
toArray:function(){
return slice.call(this,0)},
get:function(num){
return num==null?
this.toArray():
(num<0?this.slice(num)[0]:this[num])},
pushStack:function(elems,name,selector){
var ret=jQuery();
if(jQuery.isArray(elems)){
push.apply(ret,elems)}else{
jQuery.merge(ret,elems)}
ret.prevObject=this;
ret.context=this.context;
if(name==="find"){
ret.selector=this.selector+(this.selector?" ":"")+selector}else if(name){
ret.selector=this.selector+"."+name+"("+selector+")"}
return ret},
each:function(callback,args){
return jQuery.each(this,callback,args)},
ready:function(fn){
jQuery.bindReady();
if(jQuery.isReady){
fn.call(document,jQuery)}else if(readyList){
readyList.push(fn)}
return this},
eq:function(i){
return i===-1?
this.slice(i):
this.slice(i,+i+1)},
first:function(){
return this.eq(0)},
last:function(){
return this.eq(-1)},
slice:function(){
return this.pushStack(slice.apply(this,arguments),
"slice",slice.call(arguments).join(","))},
map:function(callback){
return this.pushStack(jQuery.map(this,function(elem,i){
return callback.call(elem,i,elem)}))},
end:function(){
return this.prevObject||jQuery(null)},
push:push,
sort:[].sort,
splice:[].splice
};
jQuery.fn.init.prototype=jQuery.fn;
jQuery.extend=jQuery.fn.extend=function(){
var options,name,src,copy,copyIsArray,clone,
target=arguments[0]||{},
i=1,
length=arguments.length,
deep=false;
if(typeof target==="boolean"){
deep=target;
target=arguments[1]||{};
i=2}
if(typeof target!=="object"&&!jQuery.isFunction(target)){
target={}}
if(length===i){
target=this;
--i}
for(;i<length;i++){
if((options=arguments[i])!=null){
for(name in options){
src=target[name];
copy=options[name];
if(target===copy){
continue}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){
if(copyIsArray){
copyIsArray=false;
clone=src&&jQuery.isArray(src)?src:[]}else{
clone=src&&jQuery.isPlainObject(src)?src:{}}
target[name]=jQuery.extend(deep,clone,copy)}else if(copy!==undefined){
target[name]=copy}
}
}
}
return target};
jQuery.extend({
noConflict:function(deep){
window.$=_$;
if(deep){
window.jQuery=_jQuery}
return jQuery},
isReady:false,
readyWait:1,
ready:function(wait){
if(wait===true){
jQuery.readyWait--}
if(!jQuery.readyWait||(wait!==true&&!jQuery.isReady)){
if(!document.body){
return setTimeout(jQuery.ready,1)}
jQuery.isReady=true;
if(wait!==true&&--jQuery.readyWait>0){
return}
if(readyList){
var fn,
i=0,
ready=readyList;
readyList=null;
while((fn=ready[i++])){
fn.call(document,jQuery)}
if(jQuery.fn.trigger){
jQuery(document).trigger("ready").unbind("ready")}
}
}
},
bindReady:function(){
if(readyBound){
return}
readyBound=true;
if(document.readyState==="complete"){
return setTimeout(jQuery.ready,1)}
if(document.addEventListener){
document.addEventListener("DOMContentLoaded",DOMContentLoaded,false);
window.addEventListener("load",jQuery.ready,false)}else if(document.attachEvent){
document.attachEvent("onreadystatechange",DOMContentLoaded);
window.attachEvent("onload",jQuery.ready);
var toplevel=false;
try{
toplevel=window.frameElement==null}catch(e){}
if(document.documentElement.doScroll&&toplevel){
doScrollCheck()}
}
},
isFunction:function(obj){
return jQuery.type(obj)==="function"},
isArray:Array.isArray||function(obj){
return jQuery.type(obj)==="array"},
isWindow:function(obj){
return obj&&typeof obj==="object"&&"setInterval"in obj},
isNaN:function(obj){
return obj==null||!rdigit.test(obj)||isNaN(obj)},
type:function(obj){
return obj==null?
String(obj):
class2type[toString.call(obj)]||"object"},
isPlainObject:function(obj){
if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){
return false}
if(obj.constructor&&
!hasOwn.call(obj,"constructor")&&
!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){
return false}
var key;
for(key in obj){}
return key===undefined||hasOwn.call(obj,key)},
isEmptyObject:function(obj){
for(var name in obj){
return false}
return true},
error:function(msg){
throw msg},
parseJSON:function(data){
if(typeof data!=="string"||!data){
return null}
data=jQuery.trim(data);
if(rvalidchars.test(data.replace(rvalidescape,"@")
.replace(rvalidtokens,"]")
.replace(rvalidbraces,""))){
return window.JSON&&window.JSON.parse?
window.JSON.parse(data):
(new Function("return "+data))()}else{
jQuery.error("Invalid JSON: "+data)}
},
noop:function(){},
globalEval:function(data){
if(data&&rnotwhite.test(data)){
var head=document.getElementsByTagName("head")[0]||document.documentElement,
script=document.createElement("script");
script.type="text/javascript";
if(jQuery.support.scriptEval){
script.appendChild(document.createTextNode(data))}else{
script.text=data}
head.insertBefore(script,head.firstChild);
head.removeChild(script)}
},
nodeName:function(elem,name){
return elem.nodeName&&elem.nodeName.toUpperCase()===name.toUpperCase()},
each:function(object,callback,args){
var name,i=0,
length=object.length,
isObj=length===undefined||jQuery.isFunction(object);
if(args){
if(isObj){
for(name in object){
if(callback.apply(object[name],args)===false){
break}
}
}else{
for(;i<length;){
if(callback.apply(object[i++],args)===false){
break}
}
}
}else{
if(isObj){
for(name in object){
if(callback.call(object[name],name,object[name])===false){
break}
}
}else{
for(var value=object[0];
i<length&&callback.call(value,i,value)!==false;value=object[++i]){}
}
}
return object},
trim:trim?
function(text){
return text==null?
"":
trim.call(text)}:
function(text){
return text==null?
"":
text.toString().replace(trimLeft,"").replace(trimRight,"")},
makeArray:function(array,results){
var ret=results||[];
if(array!=null){
var type=jQuery.type(array);
if(array.length==null||type==="string"||type==="function"||type==="regexp"||jQuery.isWindow(array)){
push.call(ret,array)}else{
jQuery.merge(ret,array)}
}
return ret},
inArray:function(elem,array){
if(array.indexOf){
return array.indexOf(elem)}
for(var i=0,length=array.length;i<length;i++){
if(array[i]===elem){
return i}
}
return-1},
merge:function(first,second){
var i=first.length,
j=0;
if(typeof second.length==="number"){
for(var l=second.length;j<l;j++){
first[i++]=second[j]}
}else{
while(second[j]!==undefined){
first[i++]=second[j++]}
}
first.length=i;
return first},
grep:function(elems,callback,inv){
var ret=[],retVal;
inv=!!inv;
for(var i=0,length=elems.length;i<length;i++){
retVal=!!callback(elems[i],i);
if(inv!==retVal){
ret.push(elems[i])}
}
return ret},
map:function(elems,callback,arg){
var ret=[],value;
for(var i=0,length=elems.length;i<length;i++){
value=callback(elems[i],i,arg);
if(value!=null){
ret[ret.length]=value}
}
return ret.concat.apply([],ret)},
guid:1,
proxy:function(fn,proxy,thisObject){
if(arguments.length===2){
if(typeof proxy==="string"){
thisObject=fn;
fn=thisObject[proxy];
proxy=undefined}else if(proxy&&!jQuery.isFunction(proxy)){
thisObject=proxy;
proxy=undefined}
}
if(!proxy&&fn){
proxy=function(){
return fn.apply(thisObject||this,arguments)}}
if(fn){
proxy.guid=fn.guid=fn.guid||proxy.guid||jQuery.guid++}
return proxy},
access:function(elems,key,value,exec,fn,pass){
var length=elems.length;
if(typeof key==="object"){
for(var k in key){
jQuery.access(elems,k,key[k],exec,fn,value)}
return elems}
if(value!==undefined){
exec=!pass&&exec&&jQuery.isFunction(value);
for(var i=0;i<length;i++){
fn(elems[i],key,exec?value.call(elems[i],i,fn(elems[i],key)):value,pass)}
return elems}
return length?fn(elems[0],key):undefined},
now:function(){
return(new Date()).getTime()},
uaMatch:function(ua){
ua=ua.toLowerCase();
var match=rwebkit.exec(ua)||
ropera.exec(ua)||
rmsie.exec(ua)||
ua.indexOf("compatible")<0&&rmozilla.exec(ua)||
[];
return{browser:match[1]||"",version:match[2]||"0"}},
browser:{}
});
jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(i,name){
class2type["[object "+name+"]"]=name.toLowerCase()});
browserMatch=jQuery.uaMatch(userAgent);
if(browserMatch.browser){
jQuery.browser[browserMatch.browser]=true;
jQuery.browser.version=browserMatch.version}
if(jQuery.browser.webkit){
jQuery.browser.safari=true}
if(indexOf){
jQuery.inArray=function(elem,array){
return indexOf.call(array,elem)}}
if(!rwhite.test("\xA0")){
trimLeft=/^[\s\xA0]+/;
trimRight=/[\s\xA0]+$/}
rootjQuery=jQuery(document);
if(document.addEventListener){
DOMContentLoaded=function(){
document.removeEventListener("DOMContentLoaded",DOMContentLoaded,false);
jQuery.ready()}}else if(document.attachEvent){
DOMContentLoaded=function(){
if(document.readyState==="complete"){
document.detachEvent("onreadystatechange",DOMContentLoaded);
jQuery.ready()}
}}
function doScrollCheck(){
if(jQuery.isReady){
return}
try{
document.documentElement.doScroll("left")}catch(e){
setTimeout(doScrollCheck,1);
return}
jQuery.ready()}
return(window.jQuery=window.$=jQuery)})();
(function(){
jQuery.support={};
var root=document.documentElement,
script=document.createElement("script"),
div=document.createElement("div"),
id="script"+jQuery.now();
div.style.display="none";
div.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var all=div.getElementsByTagName("*"),
a=div.getElementsByTagName("a")[0],
select=document.createElement("select"),
opt=select.appendChild(document.createElement("option"));
if(!all||!all.length||!a){
return}
jQuery.support={
leadingWhitespace:div.firstChild.nodeType===3,
tbody:!div.getElementsByTagName("tbody").length,
htmlSerialize:!!div.getElementsByTagName("link").length,
style:/red/.test(a.getAttribute("style")),
hrefNormalized:a.getAttribute("href")==="/a",
opacity:/^0.55$/.test(a.style.opacity),
cssFloat:!!a.style.cssFloat,
checkOn:div.getElementsByTagName("input")[0].value==="on",
optSelected:opt.selected,
deleteExpando:true,
optDisabled:false,
checkClone:false,
scriptEval:false,
noCloneEvent:true,
boxModel:null,
inlineBlockNeedsLayout:false,
shrinkWrapBlocks:false,
reliableHiddenOffsets:true
};
select.disabled=true;
jQuery.support.optDisabled=!opt.disabled;
script.type="text/javascript";
try{
script.appendChild(document.createTextNode("window."+id+"=1;"))}catch(e){}
root.insertBefore(script,root.firstChild);
if(window[id]){
jQuery.support.scriptEval=true;
delete window[id]}
try{
delete script.test}catch(e){
jQuery.support.deleteExpando=false}
root.removeChild(script);
if(div.attachEvent&&div.fireEvent){
div.attachEvent("onclick",function click(){
jQuery.support.noCloneEvent=false;
div.detachEvent("onclick",click)});
div.cloneNode(true).fireEvent("onclick")}
div=document.createElement("div");
div.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";
var fragment=document.createDocumentFragment();
fragment.appendChild(div.firstChild);
jQuery.support.checkClone=fragment.cloneNode(true).cloneNode(true).lastChild.checked;
jQuery(function(){
var div=document.createElement("div");
div.style.width=div.style.paddingLeft="1px";
document.body.appendChild(div);
jQuery.boxModel=jQuery.support.boxModel=div.offsetWidth===2;
if("zoom"in div.style){
div.style.display="inline";
div.style.zoom=1;
jQuery.support.inlineBlockNeedsLayout=div.offsetWidth===2;
div.style.display="";
div.innerHTML="<div style='width:4px;'></div>";
jQuery.support.shrinkWrapBlocks=div.offsetWidth!==2}
div.innerHTML="<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";
var tds=div.getElementsByTagName("td");
jQuery.support.reliableHiddenOffsets=tds[0].offsetHeight===0;
tds[0].style.display="";
tds[1].style.display="none";
jQuery.support.reliableHiddenOffsets=jQuery.support.reliableHiddenOffsets&&tds[0].offsetHeight===0;
div.innerHTML="";
document.body.removeChild(div).style.display="none";
div=tds=null});
var eventSupported=function(eventName){
var el=document.createElement("div");
eventName="on"+eventName;
var isSupported=(eventName in el);
if(!isSupported){
el.setAttribute(eventName,"return;");
isSupported=typeof el[eventName]==="function"}
el=null;
return isSupported};
jQuery.support.submitBubbles=eventSupported("submit");
jQuery.support.changeBubbles=eventSupported("change");
root=script=div=all=a=null})();
var windowData={},
rbrace=/^(?:\{.*\}|\[.*\])$/;
jQuery.extend({
cache:{},
uuid:0,
expando:"jQuery"+jQuery.now(),
noData:{
"embed":true,
"object":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
"applet":true
},
data:function(elem,name,data){
if(!jQuery.acceptData(elem)){
return}
elem=elem==window?
windowData:
elem;
var isNode=elem.nodeType,
id=isNode?elem[jQuery.expando]:null,
cache=jQuery.cache,thisCache;
if(isNode&&!id&&typeof name==="string"&&data===undefined){
return}
if(!isNode){
cache=elem}else if(!id){
elem[jQuery.expando]=id=++jQuery.uuid}
if(typeof name==="object"){
if(isNode){
cache[id]=jQuery.extend(cache[id],name)}else{
jQuery.extend(cache,name)}
}else if(isNode&&!cache[id]){
cache[id]={}}
thisCache=isNode?cache[id]:cache;
if(data!==undefined){
thisCache[name]=data}
return typeof name==="string"?thisCache[name]:thisCache},
removeData:function(elem,name){
if(!jQuery.acceptData(elem)){
return}
elem=elem==window?
windowData:
elem;
var isNode=elem.nodeType,
id=isNode?elem[jQuery.expando]:elem,
cache=jQuery.cache,
thisCache=isNode?cache[id]:id;
if(name){
if(thisCache){
delete thisCache[name];
if(isNode&&jQuery.isEmptyObject(thisCache)){
jQuery.removeData(elem)}
}
}else{
if(isNode&&jQuery.support.deleteExpando){
delete elem[jQuery.expando]}else if(elem.removeAttribute){
elem.removeAttribute(jQuery.expando)}else if(isNode){
delete cache[id]}else{
for(var n in elem){
delete elem[n]}
}
}
},
acceptData:function(elem){
if(elem.nodeName){
var match=jQuery.noData[elem.nodeName.toLowerCase()];
if(match){
return!(match===true||elem.getAttribute("classid")!==match)}
}
return true}
});
jQuery.fn.extend({
data:function(key,value){
var data=null;
if(typeof key==="undefined"){
if(this.length){
var attr=this[0].attributes,name;
data=jQuery.data(this[0]);
for(var i=0,l=attr.length;i<l;i++){
name=attr[i].name;
if(name.indexOf("data-")===0){
name=name.substr(5);
dataAttr(this[0],name,data[name])}
}
}
return data}else if(typeof key==="object"){
return this.each(function(){
jQuery.data(this,key)})}
var parts=key.split(".");
parts[1]=parts[1]?"."+parts[1]:"";
if(value===undefined){
data=this.triggerHandler("getData"+parts[1]+"!",[parts[0]]);
if(data===undefined&&this.length){
data=jQuery.data(this[0],key);
data=dataAttr(this[0],key,data)}
return data===undefined&&parts[1]?
this.data(parts[0]):
data}else{
return this.each(function(){
var $this=jQuery(this),
args=[parts[0],value];
$this.triggerHandler("setData"+parts[1]+"!",args);
jQuery.data(this,key,value);
$this.triggerHandler("changeData"+parts[1]+"!",args)})}
},
removeData:function(key){
return this.each(function(){
jQuery.removeData(this,key)})}
});
function dataAttr(elem,key,data){
if(data===undefined&&elem.nodeType===1){
data=elem.getAttribute("data-"+key);
if(typeof data==="string"){
try{
data=data==="true"?true:
data==="false"?false:
data==="null"?null:
!jQuery.isNaN(data)?parseFloat(data):
rbrace.test(data)?jQuery.parseJSON(data):
data}catch(e){}
jQuery.data(elem,key,data)}else{
data=undefined}
}
return data}
jQuery.extend({
queue:function(elem,type,data){
if(!elem){
return}
type=(type||"fx")+"queue";
var q=jQuery.data(elem,type);
if(!data){
return q||[]}
if(!q||jQuery.isArray(data)){
q=jQuery.data(elem,type,jQuery.makeArray(data))}else{
q.push(data)}
return q},
dequeue:function(elem,type){
type=type||"fx";
var queue=jQuery.queue(elem,type),
fn=queue.shift();
if(fn==="inprogress"){
fn=queue.shift()}
if(fn){
if(type==="fx"){
queue.unshift("inprogress")}
fn.call(elem,function(){
jQuery.dequeue(elem,type)})}
}
});
jQuery.fn.extend({
queue:function(type,data){
if(typeof type!=="string"){
data=type;
type="fx"}
if(data===undefined){
return jQuery.queue(this[0],type)}
return this.each(function(i){
var queue=jQuery.queue(this,type,data);
if(type==="fx"&&queue[0]!=="inprogress"){
jQuery.dequeue(this,type)}
})},
dequeue:function(type){
return this.each(function(){
jQuery.dequeue(this,type)})},
delay:function(time,type){
time=jQuery.fx?jQuery.fx.speeds[time]||time:time;
type=type||"fx";
return this.queue(type,function(){
var elem=this;
setTimeout(function(){
jQuery.dequeue(elem,type)},time)})},
clearQueue:function(type){
return this.queue(type||"fx",[])}
});
var rclass=/[\n\t]/g,
rspaces=/\s+/,
rreturn=/\r/g,
rspecialurl=/^(?:href|src|style)$/,
rtype=/^(?:button|input)$/i,
rfocusable=/^(?:button|input|object|select|textarea)$/i,
rclickable=/^a(?:rea)?$/i,
rradiocheck=/^(?:radio|checkbox)$/i;
jQuery.props={
"for":"htmlFor",
"class":"className",
readonly:"readOnly",
maxlength:"maxLength",
cellspacing:"cellSpacing",
rowspan:"rowSpan",
colspan:"colSpan",
tabindex:"tabIndex",
usemap:"useMap",
frameborder:"frameBorder"
};
jQuery.fn.extend({
attr:function(name,value){
return jQuery.access(this,name,value,true,jQuery.attr)},
removeAttr:function(name,fn){
return this.each(function(){
jQuery.attr(this,name,"");
if(this.nodeType===1){
this.removeAttribute(name)}
})},
addClass:function(value){
if(jQuery.isFunction(value)){
return this.each(function(i){
var self=jQuery(this);
self.addClass(value.call(this,i,self.attr("class")))})}
if(value&&typeof value==="string"){
var classNames=(value||"").split(rspaces);
for(var i=0,l=this.length;i<l;i++){
var elem=this[i];
if(elem.nodeType===1){
if(!elem.className){
elem.className=value}else{
var className=" "+elem.className+" ",
setClass=elem.className;
for(var c=0,cl=classNames.length;c<cl;c++){
if(className.indexOf(" "+classNames[c]+" ")<0){
setClass+=" "+classNames[c]}
}
elem.className=jQuery.trim(setClass)}
}
}
}
return this},
removeClass:function(value){
if(jQuery.isFunction(value)){
return this.each(function(i){
var self=jQuery(this);
self.removeClass(value.call(this,i,self.attr("class")))})}
if((value&&typeof value==="string")||value===undefined){
var classNames=(value||"").split(rspaces);
for(var i=0,l=this.length;i<l;i++){
var elem=this[i];
if(elem.nodeType===1&&elem.className){
if(value){
var className=(" "+elem.className+" ").replace(rclass," ");
for(var c=0,cl=classNames.length;c<cl;c++){
className=className.replace(" "+classNames[c]+" "," ")}
elem.className=jQuery.trim(className)}else{
elem.className=""}
}
}
}
return this},
toggleClass:function(value,stateVal){
var type=typeof value,
isBool=typeof stateVal==="boolean";
if(jQuery.isFunction(value)){
return this.each(function(i){
var self=jQuery(this);
self.toggleClass(value.call(this,i,self.attr("class"),stateVal),stateVal)})}
return this.each(function(){
if(type==="string"){
var className,
i=0,
self=jQuery(this),
state=stateVal,
classNames=value.split(rspaces);
while((className=classNames[i++])){
state=isBool?state:!self.hasClass(className);
self[state?"addClass":"removeClass"](className)}
}else if(type==="undefined"||type==="boolean"){
if(this.className){
jQuery.data(this,"__className__",this.className)}
this.className=this.className||value===false?"":jQuery.data(this,"__className__")||""}
})},
hasClass:function(selector){
var className=" "+selector+" ";
for(var i=0,l=this.length;i<l;i++){
if((" "+this[i].className+" ").replace(rclass," ").indexOf(className)>-1){
return true}
}
return false},
val:function(value){
if(!arguments.length){
var elem=this[0];
if(elem){
if(jQuery.nodeName(elem,"option")){
var val=elem.attributes.value;
return!val||val.specified?elem.value:elem.text}
if(jQuery.nodeName(elem,"select")){
var index=elem.selectedIndex,
values=[],
options=elem.options,
one=elem.type==="select-one";
if(index<0){
return null}
for(var i=one?index:0,max=one?index+1:options.length;i<max;i++){
var option=options[i];
if(option.selected&&(jQuery.support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&
(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){
value=jQuery(option).val();
if(one){
return value}
values.push(value)}
}
return values}
if(rradiocheck.test(elem.type)&&!jQuery.support.checkOn){
return elem.getAttribute("value")===null?"on":elem.value}
return(elem.value||"").replace(rreturn,"")}
return undefined}
var isFunction=jQuery.isFunction(value);
return this.each(function(i){
var self=jQuery(this),val=value;
if(this.nodeType!==1){
return}
if(isFunction){
val=value.call(this,i,self.val())}
if(val==null){
val=""}else if(typeof val==="number"){
val+=""}else if(jQuery.isArray(val)){
val=jQuery.map(val,function(value){
return value==null?"":value+""})}
if(jQuery.isArray(val)&&rradiocheck.test(this.type)){
this.checked=jQuery.inArray(self.val(),val)>=0}else if(jQuery.nodeName(this,"select")){
var values=jQuery.makeArray(val);
jQuery("option",this).each(function(){
this.selected=jQuery.inArray(jQuery(this).val(),values)>=0});
if(!values.length){
this.selectedIndex=-1}
}else{
this.value=val}
})}
});
jQuery.extend({
attrFn:{
val:true,
css:true,
html:true,
text:true,
data:true,
width:true,
height:true,
offset:true
},
attr:function(elem,name,value,pass){
if(!elem||elem.nodeType===3||elem.nodeType===8){
return undefined}
if(pass&&name in jQuery.attrFn){
return jQuery(elem)[name](value)}
var notxml=elem.nodeType!==1||!jQuery.isXMLDoc(elem),
set=value!==undefined;
name=notxml&&jQuery.props[name]||name;
var special=rspecialurl.test(name);
if(name==="selected"&&!jQuery.support.optSelected){
var parent=elem.parentNode;
if(parent){
parent.selectedIndex;
if(parent.parentNode){
parent.parentNode.selectedIndex}
}
}
if((name in elem||elem[name]!==undefined)&&notxml&&!special){
if(set){
if(name==="type"&&rtype.test(elem.nodeName)&&elem.parentNode){
jQuery.error("type property can't be changed")}
if(value===null){
if(elem.nodeType===1){
elem.removeAttribute(name)}
}else{
elem[name]=value}
}
if(jQuery.nodeName(elem,"form")&&elem.getAttributeNode(name)){
return elem.getAttributeNode(name).nodeValue}
if(name==="tabIndex"){
var attributeNode=elem.getAttributeNode("tabIndex");
return attributeNode&&attributeNode.specified?
attributeNode.value:
rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?
0:
undefined}
return elem[name]}
if(!jQuery.support.style&&notxml&&name==="style"){
if(set){
elem.style.cssText=""+value}
return elem.style.cssText}
if(set){
elem.setAttribute(name,""+value)}
if(!elem.attributes[name]&&(elem.hasAttribute&&!elem.hasAttribute(name))){
return undefined}
var attr=!jQuery.support.hrefNormalized&&notxml&&special?
elem.getAttribute(name,2):
elem.getAttribute(name);
return attr===null?undefined:attr}
});
var rnamespaces=/\.(.*)$/,
rformElems=/^(?:textarea|input|select)$/i,
rperiod=/\./g,
rspace=/ /g,
rescape=/[^\w\s.|`]/g,
fcleanup=function(nm){
return nm.replace(rescape,"\\$&")},
focusCounts={focusin:0,focusout:0};
jQuery.event={
add:function(elem,types,handler,data){
if(elem.nodeType===3||elem.nodeType===8){
return}
if(jQuery.isWindow(elem)&&(elem!==window&&!elem.frameElement)){
elem=window}
if(handler===false){
handler=returnFalse}else if(!handler){
return}
var handleObjIn,handleObj;
if(handler.handler){
handleObjIn=handler;
handler=handleObjIn.handler}
if(!handler.guid){
handler.guid=jQuery.guid++}
var elemData=jQuery.data(elem);
if(!elemData){
return}
var eventKey=elem.nodeType?"events":"__events__",
events=elemData[eventKey],
eventHandle=elemData.handle;
if(typeof events==="function"){
eventHandle=events.handle;
events=events.events}else if(!events){
if(!elem.nodeType){
elemData[eventKey]=elemData=function(){}}
elemData.events=events={}}
if(!eventHandle){
elemData.handle=eventHandle=function(){
return typeof jQuery!=="undefined"&&!jQuery.event.triggered?
jQuery.event.handle.apply(eventHandle.elem,arguments):
undefined}}
eventHandle.elem=elem;
types=types.split(" ");
var type,i=0,namespaces;
while((type=types[i++])){
handleObj=handleObjIn?
jQuery.extend({},handleObjIn):
{handler:handler,data:data};
if(type.indexOf(".")>-1){
namespaces=type.split(".");
type=namespaces.shift();
handleObj.namespace=namespaces.slice(0).sort().join(".")}else{
namespaces=[];
handleObj.namespace=""}
handleObj.type=type;
if(!handleObj.guid){
handleObj.guid=handler.guid}
var handlers=events[type],
special=jQuery.event.special[type]||{};
if(!handlers){
handlers=events[type]=[];
if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){
if(elem.addEventListener){
elem.addEventListener(type,eventHandle,false)}else if(elem.attachEvent){
elem.attachEvent("on"+type,eventHandle)}
}
}
if(special.add){
special.add.call(elem,handleObj);
if(!handleObj.handler.guid){
handleObj.handler.guid=handler.guid}
}
handlers.push(handleObj);
jQuery.event.global[type]=true}
elem=null},
global:{},
remove:function(elem,types,handler,pos){
if(elem.nodeType===3||elem.nodeType===8){
return}
if(handler===false){
handler=returnFalse}
var ret,type,fn,j,i=0,all,namespaces,namespace,special,eventType,handleObj,origType,
eventKey=elem.nodeType?"events":"__events__",
elemData=jQuery.data(elem),
events=elemData&&elemData[eventKey];
if(!elemData||!events){
return}
if(typeof events==="function"){
elemData=events;
events=events.events}
if(types&&types.type){
handler=types.handler;
types=types.type}
if(!types||typeof types==="string"&&types.charAt(0)==="."){
types=types||"";
for(type in events){
jQuery.event.remove(elem,type+types)}
return}
types=types.split(" ");
while((type=types[i++])){
origType=type;
handleObj=null;
all=type.indexOf(".")<0;
namespaces=[];
if(!all){
namespaces=type.split(".");
type=namespaces.shift();
namespace=new RegExp("(^|\\.)"+
jQuery.map(namespaces.slice(0).sort(),fcleanup).join("\\.(?:.*\\.)?")+"(\\.|$)")}
eventType=events[type];
if(!eventType){
continue}
if(!handler){
for(j=0;j<eventType.length;j++){
handleObj=eventType[j];
if(all||namespace.test(handleObj.namespace)){
jQuery.event.remove(elem,origType,handleObj.handler,j);
eventType.splice(j--,1)}
}
continue}
special=jQuery.event.special[type]||{};
for(j=pos||0;j<eventType.length;j++){
handleObj=eventType[j];
if(handler.guid===handleObj.guid){
if(all||namespace.test(handleObj.namespace)){
if(pos==null){
eventType.splice(j--,1)}
if(special.remove){
special.remove.call(elem,handleObj)}
}
if(pos!=null){
break}
}
}
if(eventType.length===0||pos!=null&&eventType.length===1){
if(!special.teardown||special.teardown.call(elem,namespaces)===false){
jQuery.removeEvent(elem,type,elemData.handle)}
ret=null;
delete events[type]}
}
if(jQuery.isEmptyObject(events)){
var handle=elemData.handle;
if(handle){
handle.elem=null}
delete elemData.events;
delete elemData.handle;
if(typeof elemData==="function"){
jQuery.removeData(elem,eventKey)}else if(jQuery.isEmptyObject(elemData)){
jQuery.removeData(elem)}
}
},
trigger:function(event,data,elem){
var type=event.type||event,
bubbling=arguments[3];
if(!bubbling){
event=typeof event==="object"?
event[jQuery.expando]?event:
jQuery.extend(jQuery.Event(type),event):
jQuery.Event(type);
if(type.indexOf("!")>=0){
event.type=type=type.slice(0,-1);
event.exclusive=true}
if(!elem){
event.stopPropagation();
if(jQuery.event.global[type]){
jQuery.each(jQuery.cache,function(){
if(this.events&&this.events[type]){
jQuery.event.trigger(event,data,this.handle.elem)}
})}
}
if(!elem||elem.nodeType===3||elem.nodeType===8){
return undefined}
event.result=undefined;
event.target=elem;
data=jQuery.makeArray(data);
data.unshift(event)}
event.currentTarget=elem;
var handle=elem.nodeType?
jQuery.data(elem,"handle"):
(jQuery.data(elem,"__events__")||{}).handle;
if(handle){
handle.apply(elem,data)}
var parent=elem.parentNode||elem.ownerDocument;
try{
if(!(elem&&elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()])){
if(elem["on"+type]&&elem["on"+type].apply(elem,data)===false){
event.result=false;
event.preventDefault()}
}
}catch(inlineError){}
if(!event.isPropagationStopped()&&parent){
jQuery.event.trigger(event,data,parent,true)}else if(!event.isDefaultPrevented()){
var old,
target=event.target,
targetType=type.replace(rnamespaces,""),
isClick=jQuery.nodeName(target,"a")&&targetType==="click",
special=jQuery.event.special[targetType]||{};
if((!special._default||special._default.call(elem,event)===false)&&
!isClick&&!(target&&target.nodeName&&jQuery.noData[target.nodeName.toLowerCase()])){
try{
if(target[targetType]){
old=target["on"+targetType];
if(old){
target["on"+targetType]=null}
jQuery.event.triggered=true;
target[targetType]()}
}catch(triggerError){}
if(old){
target["on"+targetType]=old}
jQuery.event.triggered=false}
}
},
handle:function(event){
var all,handlers,namespaces,namespace_re,events,
namespace_sort=[],
args=jQuery.makeArray(arguments);
event=args[0]=jQuery.event.fix(event||window.event);
event.currentTarget=this;
all=event.type.indexOf(".")<0&&!event.exclusive;
if(!all){
namespaces=event.type.split(".");
event.type=namespaces.shift();
namespace_sort=namespaces.slice(0).sort();
namespace_re=new RegExp("(^|\\.)"+namespace_sort.join("\\.(?:.*\\.)?")+"(\\.|$)")}
event.namespace=event.namespace||namespace_sort.join(".");
events=jQuery.data(this,this.nodeType?"events":"__events__");
if(typeof events==="function"){
events=events.events}
handlers=(events||{})[event.type];
if(events&&handlers){
handlers=handlers.slice(0);
for(var j=0,l=handlers.length;j<l;j++){
var handleObj=handlers[j];
if(all||namespace_re.test(handleObj.namespace)){
event.handler=handleObj.handler;
event.data=handleObj.data;
event.handleObj=handleObj;
var ret=handleObj.handler.apply(this,args);
if(ret!==undefined){
event.result=ret;
if(ret===false){
event.preventDefault();
event.stopPropagation()}
}
if(event.isImmediatePropagationStopped()){
break}
}
}
}
return event.result},
props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(event){
if(event[jQuery.expando]){
return event}
var originalEvent=event;
event=jQuery.Event(originalEvent);
for(var i=this.props.length,prop;i;){
prop=this.props[--i];
event[prop]=originalEvent[prop]}
if(!event.target){
event.target=event.srcElement||document}
if(event.target.nodeType===3){
event.target=event.target.parentNode}
if(!event.relatedTarget&&event.fromElement){
event.relatedTarget=event.fromElement===event.target?event.toElement:event.fromElement}
if(event.pageX==null&&event.clientX!=null){
var doc=document.documentElement,
body=document.body;
event.pageX=event.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);
event.pageY=event.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0)}
if(event.which==null&&(event.charCode!=null||event.keyCode!=null)){
event.which=event.charCode!=null?event.charCode:event.keyCode}
if(!event.metaKey&&event.ctrlKey){
event.metaKey=event.ctrlKey}
if(!event.which&&event.button!==undefined){
event.which=(event.button&1?1:(event.button&2?3:(event.button&4?2:0)))}
return event},
guid:1E8,
proxy:jQuery.proxy,
special:{
ready:{
setup:jQuery.bindReady,
teardown:jQuery.noop
},
live:{
add:function(handleObj){
jQuery.event.add(this,
liveConvert(handleObj.origType,handleObj.selector),
jQuery.extend({},handleObj,{handler:liveHandler,guid:handleObj.handler.guid}))},
remove:function(handleObj){
jQuery.event.remove(this,liveConvert(handleObj.origType,handleObj.selector),handleObj)}
},
beforeunload:{
setup:function(data,namespaces,eventHandle){
if(jQuery.isWindow(this)){
this.onbeforeunload=eventHandle}
},
teardown:function(namespaces,eventHandle){
if(this.onbeforeunload===eventHandle){
this.onbeforeunload=null}
}
}
}
};
jQuery.removeEvent=document.removeEventListener?
function(elem,type,handle){
if(elem.removeEventListener){
elem.removeEventListener(type,handle,false)}
}:
function(elem,type,handle){
if(elem.detachEvent){
elem.detachEvent("on"+type,handle)}
};
jQuery.Event=function(src){
if(!this.preventDefault){
return new jQuery.Event(src)}
if(src&&src.type){
this.originalEvent=src;
this.type=src.type}else{
this.type=src}
this.timeStamp=jQuery.now();
this[jQuery.expando]=true};
function returnFalse(){
return false}
function returnTrue(){
return true}
jQuery.Event.prototype={
preventDefault:function(){
this.isDefaultPrevented=returnTrue;
var e=this.originalEvent;
if(!e){
return}
if(e.preventDefault){
e.preventDefault()}else{
e.returnValue=false}
},
stopPropagation:function(){
this.isPropagationStopped=returnTrue;
var e=this.originalEvent;
if(!e){
return}
if(e.stopPropagation){
e.stopPropagation()}
e.cancelBubble=true},
stopImmediatePropagation:function(){
this.isImmediatePropagationStopped=returnTrue;
this.stopPropagation()},
isDefaultPrevented:returnFalse,
isPropagationStopped:returnFalse,
isImmediatePropagationStopped:returnFalse
};
var withinElement=function(event){
var parent=event.relatedTarget;
try{
while(parent&&parent!==this){
parent=parent.parentNode}
if(parent!==this){
event.type=event.data;
jQuery.event.handle.apply(this,arguments)}
}catch(e){}
},
delegate=function(event){
event.type=event.data;
jQuery.event.handle.apply(this,arguments)};
jQuery.each({
mouseenter:"mouseover",
mouseleave:"mouseout"
},function(orig,fix){
jQuery.event.special[orig]={
setup:function(data){
jQuery.event.add(this,fix,data&&data.selector?delegate:withinElement,orig)},
teardown:function(data){
jQuery.event.remove(this,fix,data&&data.selector?delegate:withinElement)}
}});
if(!jQuery.support.submitBubbles){
jQuery.event.special.submit={
setup:function(data,namespaces){
if(this.nodeName.toLowerCase()!=="form"){
jQuery.event.add(this,"click.specialSubmit",function(e){
var elem=e.target,
type=elem.type;
if((type==="submit"||type==="image")&&jQuery(elem).closest("form").length){
e.liveFired=undefined;
return trigger("submit",this,arguments)}
});
jQuery.event.add(this,"keypress.specialSubmit",function(e){
var elem=e.target,
type=elem.type;
if((type==="text"||type==="password")&&jQuery(elem).closest("form").length&&e.keyCode===13){
e.liveFired=undefined;
return trigger("submit",this,arguments)}
})}else{
return false}
},
teardown:function(namespaces){
jQuery.event.remove(this,".specialSubmit")}
}}
if(!jQuery.support.changeBubbles){
var changeFilters,
getVal=function(elem){
var type=elem.type,val=elem.value;
if(type==="radio"||type==="checkbox"){
val=elem.checked}else if(type==="select-multiple"){
val=elem.selectedIndex>-1?
jQuery.map(elem.options,function(elem){
return elem.selected}).join("-"):
""}else if(elem.nodeName.toLowerCase()==="select"){
val=elem.selectedIndex}
return val},
testChange=function testChange(e){
var elem=e.target,data,val;
if(!rformElems.test(elem.nodeName)||elem.readOnly){
return}
data=jQuery.data(elem,"_change_data");
val=getVal(elem);
if(e.type!=="focusout"||elem.type!=="radio"){
jQuery.data(elem,"_change_data",val)}
if(data===undefined||val===data){
return}
if(data!=null||val){
e.type="change";
e.liveFired=undefined;
return jQuery.event.trigger(e,arguments[1],elem)}
};
jQuery.event.special.change={
filters:{
focusout:testChange,
beforedeactivate:testChange,
click:function(e){
var elem=e.target,type=elem.type;
if(type==="radio"||type==="checkbox"||elem.nodeName.toLowerCase()==="select"){
return testChange.call(this,e)}
},
keydown:function(e){
var elem=e.target,type=elem.type;
if((e.keyCode===13&&elem.nodeName.toLowerCase()!=="textarea")||
(e.keyCode===32&&(type==="checkbox"||type==="radio"))||
type==="select-multiple"){
return testChange.call(this,e)}
},
beforeactivate:function(e){
var elem=e.target;
jQuery.data(elem,"_change_data",getVal(elem))}
},
setup:function(data,namespaces){
if(this.type==="file"){
return false}
for(var type in changeFilters){
jQuery.event.add(this,type+".specialChange",changeFilters[type])}
return rformElems.test(this.nodeName)},
teardown:function(namespaces){
jQuery.event.remove(this,".specialChange");
return rformElems.test(this.nodeName)}
};
changeFilters=jQuery.event.special.change.filters;
changeFilters.focus=changeFilters.beforeactivate}
function trigger(type,elem,args){
args[0].type=type;
return jQuery.event.handle.apply(elem,args)}
if(document.addEventListener){
jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){
jQuery.event.special[fix]={
setup:function(){
if(focusCounts[fix]++===0){
document.addEventListener(orig,handler,true)}
},
teardown:function(){
if(--focusCounts[fix]===0){
document.removeEventListener(orig,handler,true)}
}
};
function handler(e){
e=jQuery.event.fix(e);
e.type=fix;
return jQuery.event.trigger(e,null,e.target)}
})}
jQuery.each(["bind","one"],function(i,name){
jQuery.fn[name]=function(type,data,fn){
if(typeof type==="object"){
for(var key in type){
this[name](key,data,type[key],fn)}
return this}
if(jQuery.isFunction(data)||data===false){
fn=data;
data=undefined}
var handler=name==="one"?jQuery.proxy(fn,function(event){
jQuery(this).unbind(event,handler);
return fn.apply(this,arguments)}):fn;
if(type==="unload"&&name!=="one"){
this.one(type,data,fn)}else{
for(var i=0,l=this.length;i<l;i++){
jQuery.event.add(this[i],type,handler,data)}
}
return this}});
jQuery.fn.extend({
unbind:function(type,fn){
if(typeof type==="object"&&!type.preventDefault){
for(var key in type){
this.unbind(key,type[key])}
}else{
for(var i=0,l=this.length;i<l;i++){
jQuery.event.remove(this[i],type,fn)}
}
return this},
delegate:function(selector,types,data,fn){
return this.live(types,data,fn,selector)},
undelegate:function(selector,types,fn){
if(arguments.length===0){
return this.unbind("live")}else{
return this.die(types,null,fn,selector)}
},
trigger:function(type,data){
return this.each(function(){
jQuery.event.trigger(type,data,this)})},
triggerHandler:function(type,data){
if(this[0]){
var event=jQuery.Event(type);
event.preventDefault();
event.stopPropagation();
jQuery.event.trigger(event,data,this[0]);
return event.result}
},
toggle:function(fn){
var args=arguments,
i=1;
while(i<args.length){
jQuery.proxy(fn,args[i++])}
return this.click(jQuery.proxy(fn,function(event){
var lastToggle=(jQuery.data(this,"lastToggle"+fn.guid)||0)%i;
jQuery.data(this,"lastToggle"+fn.guid,lastToggle+1);
event.preventDefault();
return args[lastToggle].apply(this,arguments)||false}))},
hover:function(fnOver,fnOut){
return this.mouseenter(fnOver).mouseleave(fnOut||fnOver)}
});
var liveMap={
focus:"focusin",
blur:"focusout",
mouseenter:"mouseover",
mouseleave:"mouseout"
};
jQuery.each(["live","die"],function(i,name){
jQuery.fn[name]=function(types,data,fn,origSelector){
var type,i=0,match,namespaces,preType,
selector=origSelector||this.selector,
context=origSelector?this:jQuery(this.context);
if(typeof types==="object"&&!types.preventDefault){
for(var key in types){
context[name](key,data,types[key],selector)}
return this}
if(jQuery.isFunction(data)){
fn=data;
data=undefined}
types=(types||"").split(" ");
while((type=types[i++])!=null){
match=rnamespaces.exec(type);
namespaces="";
if(match){
namespaces=match[0];
type=type.replace(rnamespaces,"")}
if(type==="hover"){
types.push("mouseenter"+namespaces,"mouseleave"+namespaces);
continue}
preType=type;
if(type==="focus"||type==="blur"){
types.push(liveMap[type]+namespaces);
type=type+namespaces}else{
type=(liveMap[type]||type)+namespaces}
if(name==="live"){
for(var j=0,l=context.length;j<l;j++){
jQuery.event.add(context[j],"live."+liveConvert(type,selector),
{data:data,selector:selector,handler:fn,origType:type,origHandler:fn,preType:preType})}
}else{
context.unbind("live."+liveConvert(type,selector),fn)}
}
return this}});
function liveHandler(event){
var stop,maxLevel,related,match,handleObj,elem,j,i,l,data,close,namespace,ret,
elems=[],
selectors=[],
events=jQuery.data(this,this.nodeType?"events":"__events__");
if(typeof events==="function"){
events=events.events}
if(event.liveFired===this||!events||!events.live||event.button&&event.type==="click"){
return}
if(event.namespace){
namespace=new RegExp("(^|\\.)"+event.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")}
event.liveFired=this;
var live=events.live.slice(0);
for(j=0;j<live.length;j++){
handleObj=live[j];
if(handleObj.origType.replace(rnamespaces,"")===event.type){
selectors.push(handleObj.selector)}else{
live.splice(j--,1)}
}
match=jQuery(event.target).closest(selectors,event.currentTarget);
for(i=0,l=match.length;i<l;i++){
close=match[i];
for(j=0;j<live.length;j++){
handleObj=live[j];
if(close.selector===handleObj.selector&&(!namespace||namespace.test(handleObj.namespace))){
elem=close.elem;
related=null;
if(handleObj.preType==="mouseenter"||handleObj.preType==="mouseleave"){
event.type=handleObj.preType;
related=jQuery(event.relatedTarget).closest(handleObj.selector)[0]}
if(!related||related!==elem){
elems.push({elem:elem,handleObj:handleObj,level:close.level})}
}
}
}
for(i=0,l=elems.length;i<l;i++){
match=elems[i];
if(maxLevel&&match.level>maxLevel){
break}
event.currentTarget=match.elem;
event.data=match.handleObj.data;
event.handleObj=match.handleObj;
ret=match.handleObj.origHandler.apply(match.elem,arguments);
if(ret===false||event.isPropagationStopped()){
maxLevel=match.level;
if(ret===false){
stop=false}
if(event.isImmediatePropagationStopped()){
break}
}
}
return stop}
function liveConvert(type,selector){
return(type&&type!=="*"?type+".":"")+selector.replace(rperiod,"`").replace(rspace,"&")}
jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+
"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+
"change select submit keydown keypress keyup error").split(" "),function(i,name){
jQuery.fn[name]=function(data,fn){
if(fn==null){
fn=data;
data=null}
return arguments.length>0?
this.bind(name,data,fn):
this.trigger(name)};
if(jQuery.attrFn){
jQuery.attrFn[name]=true}
});
if(window.attachEvent&&!window.addEventListener){
jQuery(window).bind("unload",function(){
for(var id in jQuery.cache){
if(jQuery.cache[id].handle){
try{
jQuery.event.remove(jQuery.cache[id].handle.elem)}catch(e){}
}
}
})}
(function(){
var chunker=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
done=0,
toString=Object.prototype.toString,
hasDuplicate=false,
baseHasDuplicate=true;
[0,0].sort(function(){
baseHasDuplicate=false;
return 0});
var Sizzle=function(selector,context,results,seed){
results=results||[];
context=context||document;
var origContext=context;
if(context.nodeType!==1&&context.nodeType!==9){
return[]}
if(!selector||typeof selector!=="string"){
return results}
var m,set,checkSet,extra,ret,cur,pop,i,
prune=true,
contextXML=Sizzle.isXML(context),
parts=[],
soFar=selector;
do{
chunker.exec("");
m=chunker.exec(soFar);
if(m){
soFar=m[3];
parts.push(m[1]);
if(m[2]){
extra=m[3];
break}
}
}while(m);
if(parts.length>1&&origPOS.exec(selector)){
if(parts.length===2&&Expr.relative[parts[0]]){
set=posProcess(parts[0]+parts[1],context)}else{
set=Expr.relative[parts[0]]?
[context]:
Sizzle(parts.shift(),context);
while(parts.length){
selector=parts.shift();
if(Expr.relative[selector]){
selector+=parts.shift()}
set=posProcess(selector,set)}
}
}else{
if(!seed&&parts.length>1&&context.nodeType===9&&!contextXML&&
Expr.match.ID.test(parts[0])&&!Expr.match.ID.test(parts[parts.length-1])){
ret=Sizzle.find(parts.shift(),context,contextXML);
context=ret.expr?
Sizzle.filter(ret.expr,ret.set)[0]:
ret.set[0]}
if(context){
ret=seed?
{expr:parts.pop(),set:makeArray(seed)}:
Sizzle.find(parts.pop(),parts.length===1&&(parts[0]==="~"||parts[0]==="+")&&context.parentNode?context.parentNode:context,contextXML);
set=ret.expr?
Sizzle.filter(ret.expr,ret.set):
ret.set;
if(parts.length>0){
checkSet=makeArray(set)}else{
prune=false}
while(parts.length){
cur=parts.pop();
pop=cur;
if(!Expr.relative[cur]){
cur=""}else{
pop=parts.pop()}
if(pop==null){
pop=context}
Expr.relative[cur](checkSet,pop,contextXML)}
}else{
checkSet=parts=[]}
}
if(!checkSet){
checkSet=set}
if(!checkSet){
Sizzle.error(cur||selector)}
if(toString.call(checkSet)==="[object Array]"){
if(!prune){
results.push.apply(results,checkSet)}else if(context&&context.nodeType===1){
for(i=0;checkSet[i]!=null;i++){
if(checkSet[i]&&(checkSet[i]===true||checkSet[i].nodeType===1&&Sizzle.contains(context,checkSet[i]))){
results.push(set[i])}
}
}else{
for(i=0;checkSet[i]!=null;i++){
if(checkSet[i]&&checkSet[i].nodeType===1){
results.push(set[i])}
}
}
}else{
makeArray(checkSet,results)}
if(extra){
Sizzle(extra,origContext,results,seed);
Sizzle.uniqueSort(results)}
return results};
Sizzle.uniqueSort=function(results){
if(sortOrder){
hasDuplicate=baseHasDuplicate;
results.sort(sortOrder);
if(hasDuplicate){
for(var i=1;i<results.length;i++){
if(results[i]===results[i-1]){
results.splice(i--,1)}
}
}
}
return results};
Sizzle.matches=function(expr,set){
return Sizzle(expr,null,null,set)};
Sizzle.matchesSelector=function(node,expr){
return Sizzle(expr,null,null,[node]).length>0};
Sizzle.find=function(expr,context,isXML){
var set;
if(!expr){
return[]}
for(var i=0,l=Expr.order.length;i<l;i++){
var match,
type=Expr.order[i];
if((match=Expr.leftMatch[type].exec(expr))){
var left=match[1];
match.splice(1,1);
if(left.substr(left.length-1)!=="\\"){
match[1]=(match[1]||"").replace(/\\/g,"");
set=Expr.find[type](match,context,isXML);
if(set!=null){
expr=expr.replace(Expr.match[type],"");
break}
}
}
}
if(!set){
set=context.getElementsByTagName("*")}
return{set:set,expr:expr}};
Sizzle.filter=function(expr,set,inplace,not){
var match,anyFound,
old=expr,
result=[],
curLoop=set,
isXMLFilter=set&&set[0]&&Sizzle.isXML(set[0]);
while(expr&&set.length){
for(var type in Expr.filter){
if((match=Expr.leftMatch[type].exec(expr))!=null&&match[2]){
var found,item,
filter=Expr.filter[type],
left=match[1];
anyFound=false;
match.splice(1,1);
if(left.substr(left.length-1)==="\\"){
continue}
if(curLoop===result){
result=[]}
if(Expr.preFilter[type]){
match=Expr.preFilter[type](match,curLoop,inplace,result,not,isXMLFilter);
if(!match){
anyFound=found=true}else if(match===true){
continue}
}
if(match){
for(var i=0;(item=curLoop[i])!=null;i++){
if(item){
found=filter(item,match,i,curLoop);
var pass=not^!!found;
if(inplace&&found!=null){
if(pass){
anyFound=true}else{
curLoop[i]=false}
}else if(pass){
result.push(item);
anyFound=true}
}
}
}
if(found!==undefined){
if(!inplace){
curLoop=result}
expr=expr.replace(Expr.match[type],"");
if(!anyFound){
return[]}
break}
}
}
if(expr===old){
if(anyFound==null){
Sizzle.error(expr)}else{
break}
}
old=expr}
return curLoop};
Sizzle.error=function(msg){
throw"Syntax error, unrecognized expression: "+msg};
var Expr=Sizzle.selectors={
order:["ID","NAME","TAG"],
match:{
ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
},
leftMatch:{},
attrMap:{
"class":"className",
"for":"htmlFor"
},
attrHandle:{
href:function(elem){
return elem.getAttribute("href")}
},
relative:{
"+":function(checkSet,part){
var isPartStr=typeof part==="string",
isTag=isPartStr&&!/\W/.test(part),
isPartStrNotTag=isPartStr&&!isTag;
if(isTag){
part=part.toLowerCase()}
for(var i=0,l=checkSet.length,elem;i<l;i++){
if((elem=checkSet[i])){
while((elem=elem.previousSibling)&&elem.nodeType!==1){}
checkSet[i]=isPartStrNotTag||elem&&elem.nodeName.toLowerCase()===part?
elem||false:
elem===part}
}
if(isPartStrNotTag){
Sizzle.filter(part,checkSet,true)}
},
">":function(checkSet,part){
var elem,
isPartStr=typeof part==="string",
i=0,
l=checkSet.length;
if(isPartStr&&!/\W/.test(part)){
part=part.toLowerCase();
for(;i<l;i++){
elem=checkSet[i];
if(elem){
var parent=elem.parentNode;
checkSet[i]=parent.nodeName.toLowerCase()===part?parent:false}
}
}else{
for(;i<l;i++){
elem=checkSet[i];
if(elem){
checkSet[i]=isPartStr?
elem.parentNode:
elem.parentNode===part}
}
if(isPartStr){
Sizzle.filter(part,checkSet,true)}
}
},
"":function(checkSet,part,isXML){
var nodeCheck,
doneName=done++,
checkFn=dirCheck;
if(typeof part==="string"&&!/\W/.test(part)){
part=part.toLowerCase();
nodeCheck=part;
checkFn=dirNodeCheck}
checkFn("parentNode",part,doneName,checkSet,nodeCheck,isXML)},
"~":function(checkSet,part,isXML){
var nodeCheck,
doneName=done++,
checkFn=dirCheck;
if(typeof part==="string"&&!/\W/.test(part)){
part=part.toLowerCase();
nodeCheck=part;
checkFn=dirNodeCheck}
checkFn("previousSibling",part,doneName,checkSet,nodeCheck,isXML)}
},
find:{
ID:function(match,context,isXML){
if(typeof context.getElementById!=="undefined"&&!isXML){
var m=context.getElementById(match[1]);
return m&&m.parentNode?[m]:[]}
},
NAME:function(match,context){
if(typeof context.getElementsByName!=="undefined"){
var ret=[],
results=context.getElementsByName(match[1]);
for(var i=0,l=results.length;i<l;i++){
if(results[i].getAttribute("name")===match[1]){
ret.push(results[i])}
}
return ret.length===0?null:ret}
},
TAG:function(match,context){
return context.getElementsByTagName(match[1])}
},
preFilter:{
CLASS:function(match,curLoop,inplace,result,not,isXML){
match=" "+match[1].replace(/\\/g,"")+" ";
if(isXML){
return match}
for(var i=0,elem;(elem=curLoop[i])!=null;i++){
if(elem){
if(not^(elem.className&&(" "+elem.className+" ").replace(/[\t\n]/g," ").indexOf(match)>=0)){
if(!inplace){
result.push(elem)}
}else if(inplace){
curLoop[i]=false}
}
}
return false},
ID:function(match){
return match[1].replace(/\\/g,"")},
TAG:function(match,curLoop){
return match[1].toLowerCase()},
CHILD:function(match){
if(match[1]==="nth"){
var test=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(
match[2]==="even"&&"2n"||match[2]==="odd"&&"2n+1"||
!/\D/.test(match[2])&&"0n+"+match[2]||match[2]);
match[2]=(test[1]+(test[2]||1))-0;
match[3]=test[3]-0}
match[0]=done++;
return match},
ATTR:function(match,curLoop,inplace,result,not,isXML){
var name=match[1].replace(/\\/g,"");
if(!isXML&&Expr.attrMap[name]){
match[1]=Expr.attrMap[name]}
if(match[2]==="~="){
match[4]=" "+match[4]+" "}
return match},
PSEUDO:function(match,curLoop,inplace,result,not){
if(match[1]==="not"){
if((chunker.exec(match[3])||"").length>1||/^\w/.test(match[3])){
match[3]=Sizzle(match[3],null,null,curLoop)}else{
var ret=Sizzle.filter(match[3],curLoop,inplace,true^not);
if(!inplace){
result.push.apply(result,ret)}
return false}
}else if(Expr.match.POS.test(match[0])||Expr.match.CHILD.test(match[0])){
return true}
return match},
POS:function(match){
match.unshift(true);
return match}
},
filters:{
enabled:function(elem){
return elem.disabled===false&&elem.type!=="hidden"},
disabled:function(elem){
return elem.disabled===true},
checked:function(elem){
return elem.checked===true},
selected:function(elem){
elem.parentNode.selectedIndex;
return elem.selected===true},
parent:function(elem){
return!!elem.firstChild},
empty:function(elem){
return!elem.firstChild},
has:function(elem,i,match){
return!!Sizzle(match[3],elem).length},
header:function(elem){
return(/h\d/i).test(elem.nodeName)},
text:function(elem){
return"text"===elem.type},
radio:function(elem){
return"radio"===elem.type},
checkbox:function(elem){
return"checkbox"===elem.type},
file:function(elem){
return"file"===elem.type},
password:function(elem){
return"password"===elem.type},
submit:function(elem){
return"submit"===elem.type},
image:function(elem){
return"image"===elem.type},
reset:function(elem){
return"reset"===elem.type},
button:function(elem){
return"button"===elem.type||elem.nodeName.toLowerCase()==="button"},
input:function(elem){
return(/input|select|textarea|button/i).test(elem.nodeName)}
},
setFilters:{
first:function(elem,i){
return i===0},
last:function(elem,i,match,array){
return i===array.length-1},
even:function(elem,i){
return i%2===0},
odd:function(elem,i){
return i%2===1},
lt:function(elem,i,match){
return i<match[3]-0},
gt:function(elem,i,match){
return i>match[3]-0},
nth:function(elem,i,match){
return match[3]-0===i},
eq:function(elem,i,match){
return match[3]-0===i}
},
filter:{
PSEUDO:function(elem,match,i,array){
var name=match[1],
filter=Expr.filters[name];
if(filter){
return filter(elem,i,match,array)}else if(name==="contains"){
return(elem.textContent||elem.innerText||Sizzle.getText([elem])||"").indexOf(match[3])>=0}else if(name==="not"){
var not=match[3];
for(var j=0,l=not.length;j<l;j++){
if(not[j]===elem){
return false}
}
return true}else{
Sizzle.error("Syntax error, unrecognized expression: "+name)}
},
CHILD:function(elem,match){
var type=match[1],
node=elem;
switch(type){
case"only":
case"first":
while((node=node.previousSibling)){
if(node.nodeType===1){
return false}
}
if(type==="first"){
return true}
node=elem;
case"last":
while((node=node.nextSibling)){
if(node.nodeType===1){
return false}
}
return true;
case"nth":
var first=match[2],
last=match[3];
if(first===1&&last===0){
return true}
var doneName=match[0],
parent=elem.parentNode;
if(parent&&(parent.sizcache!==doneName||!elem.nodeIndex)){
var count=0;
for(node=parent.firstChild;node;node=node.nextSibling){
if(node.nodeType===1){
node.nodeIndex=++count}
}
parent.sizcache=doneName}
var diff=elem.nodeIndex-last;
if(first===0){
return diff===0}else{
return(diff%first===0&&diff/first>=0)}
}
},
ID:function(elem,match){
return elem.nodeType===1&&elem.getAttribute("id")===match},
TAG:function(elem,match){
return(match==="*"&&elem.nodeType===1)||elem.nodeName.toLowerCase()===match},
CLASS:function(elem,match){
return(" "+(elem.className||elem.getAttribute("class"))+" ")
.indexOf(match)>-1},
ATTR:function(elem,match){
var name=match[1],
result=Expr.attrHandle[name]?
Expr.attrHandle[name](elem):
elem[name]!=null?
elem[name]:
elem.getAttribute(name),
value=result+"",
type=match[2],
check=match[4];
return result==null?
type==="!=":
type==="="?
value===check:
type==="*="?
value.indexOf(check)>=0:
type==="~="?
(" "+value+" ").indexOf(check)>=0:
!check?
value&&result!==false:
type==="!="?
value!==check:
type==="^="?
value.indexOf(check)===0:
type==="$="?
value.substr(value.length-check.length)===check:
type==="|="?
value===check||value.substr(0,check.length+1)===check+"-":
false},
POS:function(elem,match,i,array){
var name=match[2],
filter=Expr.setFilters[name];
if(filter){
return filter(elem,i,match,array)}
}
}
};
var origPOS=Expr.match.POS,
fescape=function(all,num){
return"\\"+(num-0+1)};
for(var type in Expr.match){
Expr.match[type]=new RegExp(Expr.match[type].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
Expr.leftMatch[type]=new RegExp(/(^(?:.|\r|\n)*?)/.source+Expr.match[type].source.replace(/\\(\d+)/g,fescape))}
var makeArray=function(array,results){
array=Array.prototype.slice.call(array,0);
if(results){
results.push.apply(results,array);
return results}
return array};
try{
Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType}catch(e){
makeArray=function(array,results){
var i=0,
ret=results||[];
if(toString.call(array)==="[object Array]"){
Array.prototype.push.apply(ret,array)}else{
if(typeof array.length==="number"){
for(var l=array.length;i<l;i++){
ret.push(array[i])}
}else{
for(;array[i];i++){
ret.push(array[i])}
}
}
return ret}}
var sortOrder,siblingCheck;
if(document.documentElement.compareDocumentPosition){
sortOrder=function(a,b){
if(a===b){
hasDuplicate=true;
return 0}
if(!a.compareDocumentPosition||!b.compareDocumentPosition){
return a.compareDocumentPosition?-1:1}
return a.compareDocumentPosition(b)&4?-1:1}}else{
sortOrder=function(a,b){
var al,bl,
ap=[],
bp=[],
aup=a.parentNode,
bup=b.parentNode,
cur=aup;
if(a===b){
hasDuplicate=true;
return 0}else if(aup===bup){
return siblingCheck(a,b)}else if(!aup){
return-1}else if(!bup){
return 1}
while(cur){
ap.unshift(cur);
cur=cur.parentNode}
cur=bup;
while(cur){
bp.unshift(cur);
cur=cur.parentNode}
al=ap.length;
bl=bp.length;
for(var i=0;i<al&&i<bl;i++){
if(ap[i]!==bp[i]){
return siblingCheck(ap[i],bp[i])}
}
return i===al?
siblingCheck(a,bp[i],-1):
siblingCheck(ap[i],b,1)};
siblingCheck=function(a,b,ret){
if(a===b){
return ret}
var cur=a.nextSibling;
while(cur){
if(cur===b){
return-1}
cur=cur.nextSibling}
return 1}}
Sizzle.getText=function(elems){
var ret="",elem;
for(var i=0;elems[i];i++){
elem=elems[i];
if(elem.nodeType===3||elem.nodeType===4){
ret+=elem.nodeValue}else if(elem.nodeType!==8){
ret+=Sizzle.getText(elem.childNodes)}
}
return ret};
(function(){
var form=document.createElement("div"),
id="script"+(new Date()).getTime(),
root=document.documentElement;
form.innerHTML="<a name='"+id+"'/>";
root.insertBefore(form,root.firstChild);
if(document.getElementById(id)){
Expr.find.ID=function(match,context,isXML){
if(typeof context.getElementById!=="undefined"&&!isXML){
var m=context.getElementById(match[1]);
return m?
m.id===match[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===match[1]?
[m]:
undefined:
[]}
};
Expr.filter.ID=function(elem,match){
var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");
return elem.nodeType===1&&node&&node.nodeValue===match}}
root.removeChild(form);
root=form=null})();
(function(){
var div=document.createElement("div");
div.appendChild(document.createComment(""));
if(div.getElementsByTagName("*").length>0){
Expr.find.TAG=function(match,context){
var results=context.getElementsByTagName(match[1]);
if(match[1]==="*"){
var tmp=[];
for(var i=0;results[i];i++){
if(results[i].nodeType===1){
tmp.push(results[i])}
}
results=tmp}
return results}}
div.innerHTML="<a href='#'></a>";
if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&
div.firstChild.getAttribute("href")!=="#"){
Expr.attrHandle.href=function(elem){
return elem.getAttribute("href",2)}}
div=null})();
if(document.querySelectorAll){
(function(){
var oldSizzle=Sizzle,
div=document.createElement("div"),
id="__sizzle__";
div.innerHTML="<p class='TEST'></p>";
if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){
return}
Sizzle=function(query,context,extra,seed){
context=context||document;
query=query.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");
if(!seed&&!Sizzle.isXML(context)){
if(context.nodeType===9){
try{
return makeArray(context.querySelectorAll(query),extra)}catch(qsaError){}
}else if(context.nodeType===1&&context.nodeName.toLowerCase()!=="object"){
var old=context.getAttribute("id"),
nid=old||id;
if(!old){
context.setAttribute("id",nid)}
try{
return makeArray(context.querySelectorAll("#"+nid+" "+query),extra)}catch(pseudoError){
}finally{
if(!old){
context.removeAttribute("id")}
}
}
}
return oldSizzle(query,context,extra,seed)};
for(var prop in oldSizzle){
Sizzle[prop]=oldSizzle[prop]}
div=null})()}
(function(){
var html=document.documentElement,
matches=html.matchesSelector||html.mozMatchesSelector||html.webkitMatchesSelector||html.msMatchesSelector,
pseudoWorks=false;
try{
matches.call(document.documentElement,"[test!='']:sizzle")}catch(pseudoError){
pseudoWorks=true}
if(matches){
Sizzle.matchesSelector=function(node,expr){
expr=expr.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");
if(!Sizzle.isXML(node)){
try{
if(pseudoWorks||!Expr.match.PSEUDO.test(expr)&&!/!=/.test(expr)){
return matches.call(node,expr)}
}catch(e){}
}
return Sizzle(expr,null,null,[node]).length>0}}
})();
(function(){
var div=document.createElement("div");
div.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!div.getElementsByClassName||div.getElementsByClassName("e").length===0){
return}
div.lastChild.className="e";
if(div.getElementsByClassName("e").length===1){
return}
Expr.order.splice(1,0,"CLASS");
Expr.find.CLASS=function(match,context,isXML){
if(typeof context.getElementsByClassName!=="undefined"&&!isXML){
return context.getElementsByClassName(match[1])}
};
div=null})();
function dirNodeCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){
for(var i=0,l=checkSet.length;i<l;i++){
var elem=checkSet[i];
if(elem){
var match=false;
elem=elem[dir];
while(elem){
if(elem.sizcache===doneName){
match=checkSet[elem.sizset];
break}
if(elem.nodeType===1&&!isXML){
elem.sizcache=doneName;
elem.sizset=i}
if(elem.nodeName.toLowerCase()===cur){
match=elem;
break}
elem=elem[dir]}
checkSet[i]=match}
}
}
function dirCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){
for(var i=0,l=checkSet.length;i<l;i++){
var elem=checkSet[i];
if(elem){
var match=false;
elem=elem[dir];
while(elem){
if(elem.sizcache===doneName){
match=checkSet[elem.sizset];
break}
if(elem.nodeType===1){
if(!isXML){
elem.sizcache=doneName;
elem.sizset=i}
if(typeof cur!=="string"){
if(elem===cur){
match=true;
break}
}else if(Sizzle.filter(cur,[elem]).length>0){
match=elem;
break}
}
elem=elem[dir]}
checkSet[i]=match}
}
}
if(document.documentElement.contains){
Sizzle.contains=function(a,b){
return a!==b&&(a.contains?a.contains(b):true)}}else if(document.documentElement.compareDocumentPosition){
Sizzle.contains=function(a,b){
return!!(a.compareDocumentPosition(b)&16)}}else{
Sizzle.contains=function(){
return false}}
Sizzle.isXML=function(elem){
var documentElement=(elem?elem.ownerDocument||elem:0).documentElement;
return documentElement?documentElement.nodeName!=="HTML":false};
var posProcess=function(selector,context){
var match,
tmpSet=[],
later="",
root=context.nodeType?[context]:context;
while((match=Expr.match.PSEUDO.exec(selector))){
later+=match[0];
selector=selector.replace(Expr.match.PSEUDO,"")}
selector=Expr.relative[selector]?selector+"*":selector;
for(var i=0,l=root.length;i<l;i++){
Sizzle(selector,root[i],tmpSet)}
return Sizzle.filter(later,tmpSet)};
jQuery.find=Sizzle;
jQuery.expr=Sizzle.selectors;
jQuery.expr[":"]=jQuery.expr.filters;
jQuery.unique=Sizzle.uniqueSort;
jQuery.text=Sizzle.getText;
jQuery.isXMLDoc=Sizzle.isXML;
jQuery.contains=Sizzle.contains})();
var runtil=/Until$/,
rparentsprev=/^(?:parents|prevUntil|prevAll)/,
rmultiselector=/,/,
isSimple=/^.[^:#\[\.,]*$/,
slice=Array.prototype.slice,
POS=jQuery.expr.match.POS;
jQuery.fn.extend({
find:function(selector){
var ret=this.pushStack("","find",selector),
length=0;
for(var i=0,l=this.length;i<l;i++){
length=ret.length;
jQuery.find(selector,this[i],ret);
if(i>0){
for(var n=length;n<ret.length;n++){
for(var r=0;r<length;r++){
if(ret[r]===ret[n]){
ret.splice(n--,1);
break}
}
}
}
}
return ret},
has:function(target){
var targets=jQuery(target);
return this.filter(function(){
for(var i=0,l=targets.length;i<l;i++){
if(jQuery.contains(this,targets[i])){
return true}
}
})},
not:function(selector){
return this.pushStack(winnow(this,selector,false),"not",selector)},
filter:function(selector){
return this.pushStack(winnow(this,selector,true),"filter",selector)},
is:function(selector){
return!!selector&&jQuery.filter(selector,this).length>0},
closest:function(selectors,context){
var ret=[],i,l,cur=this[0];
if(jQuery.isArray(selectors)){
var match,selector,
matches={},
level=1;
if(cur&&selectors.length){
for(i=0,l=selectors.length;i<l;i++){
selector=selectors[i];
if(!matches[selector]){
matches[selector]=jQuery.expr.match.POS.test(selector)?
jQuery(selector,context||this.context):
selector}
}
while(cur&&cur.ownerDocument&&cur!==context){
for(selector in matches){
match=matches[selector];
if(match.jquery?match.index(cur)>-1:jQuery(cur).is(match)){
ret.push({selector:selector,elem:cur,level:level})}
}
cur=cur.parentNode;
level++}
}
return ret}
var pos=POS.test(selectors)?
jQuery(selectors,context||this.context):null;
for(i=0,l=this.length;i<l;i++){
cur=this[i];
while(cur){
if(pos?pos.index(cur)>-1:jQuery.find.matchesSelector(cur,selectors)){
ret.push(cur);
break}else{
cur=cur.parentNode;
if(!cur||!cur.ownerDocument||cur===context){
break}
}
}
}
ret=ret.length>1?jQuery.unique(ret):ret;
return this.pushStack(ret,"closest",selectors)},
index:function(elem){
if(!elem||typeof elem==="string"){
return jQuery.inArray(this[0],
elem?jQuery(elem):this.parent().children())}
return jQuery.inArray(
elem.jquery?elem[0]:elem,this)},
add:function(selector,context){
var set=typeof selector==="string"?
jQuery(selector,context||this.context):
jQuery.makeArray(selector),
all=jQuery.merge(this.get(),set);
return this.pushStack(isDisconnected(set[0])||isDisconnected(all[0])?
all:
jQuery.unique(all))},
andSelf:function(){
return this.add(this.prevObject)}
});
function isDisconnected(node){
return!node||!node.parentNode||node.parentNode.nodeType===11}
jQuery.each({
parent:function(elem){
var parent=elem.parentNode;
return parent&&parent.nodeType!==11?parent:null},
parents:function(elem){
return jQuery.dir(elem,"parentNode")},
parentsUntil:function(elem,i,until){
return jQuery.dir(elem,"parentNode",until)},
next:function(elem){
return jQuery.nth(elem,2,"nextSibling")},
prev:function(elem){
return jQuery.nth(elem,2,"previousSibling")},
nextAll:function(elem){
return jQuery.dir(elem,"nextSibling")},
prevAll:function(elem){
return jQuery.dir(elem,"previousSibling")},
nextUntil:function(elem,i,until){
return jQuery.dir(elem,"nextSibling",until)},
prevUntil:function(elem,i,until){
return jQuery.dir(elem,"previousSibling",until)},
siblings:function(elem){
return jQuery.sibling(elem.parentNode.firstChild,elem)},
children:function(elem){
return jQuery.sibling(elem.firstChild)},
contents:function(elem){
return jQuery.nodeName(elem,"iframe")?
elem.contentDocument||elem.contentWindow.document:
jQuery.makeArray(elem.childNodes)}
},function(name,fn){
jQuery.fn[name]=function(until,selector){
var ret=jQuery.map(this,fn,until);
if(!runtil.test(name)){
selector=until}
if(selector&&typeof selector==="string"){
ret=jQuery.filter(selector,ret)}
ret=this.length>1?jQuery.unique(ret):ret;
if((this.length>1||rmultiselector.test(selector))&&rparentsprev.test(name)){
ret=ret.reverse()}
return this.pushStack(ret,name,slice.call(arguments).join(","))}});
jQuery.extend({
filter:function(expr,elems,not){
if(not){
expr=":not("+expr+")"}
return elems.length===1?
jQuery.find.matchesSelector(elems[0],expr)?[elems[0]]:[]:
jQuery.find.matches(expr,elems)},
dir:function(elem,dir,until){
var matched=[],
cur=elem[dir];
while(cur&&cur.nodeType!==9&&(until===undefined||cur.nodeType!==1||!jQuery(cur).is(until))){
if(cur.nodeType===1){
matched.push(cur)}
cur=cur[dir]}
return matched},
nth:function(cur,result,dir,elem){
result=result||1;
var num=0;
for(;cur;cur=cur[dir]){
if(cur.nodeType===1&&++num===result){
break}
}
return cur},
sibling:function(n,elem){
var r=[];
for(;n;n=n.nextSibling){
if(n.nodeType===1&&n!==elem){
r.push(n)}
}
return r}
});
function winnow(elements,qualifier,keep){
if(jQuery.isFunction(qualifier)){
return jQuery.grep(elements,function(elem,i){
var retVal=!!qualifier.call(elem,i,elem);
return retVal===keep})}else if(qualifier.nodeType){
return jQuery.grep(elements,function(elem,i){
return(elem===qualifier)===keep})}else if(typeof qualifier==="string"){
var filtered=jQuery.grep(elements,function(elem){
return elem.nodeType===1});
if(isSimple.test(qualifier)){
return jQuery.filter(qualifier,filtered,!keep)}else{
qualifier=jQuery.filter(qualifier,filtered)}
}
return jQuery.grep(elements,function(elem,i){
return(jQuery.inArray(elem,qualifier)>=0)===keep})}
var rinlinejQuery=/ jQuery\d+="(?:\d+|null)"/g,
rleadingWhitespace=/^\s+/,
rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
rtagName=/<([\w:]+)/,
rtbody=/<tbody/i,
rhtml=/<|&#?\w+;/,
rnocache=/<(?:script|object|embed|option|style)/i,
rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,
raction=/\=([^="'>\s]+\/)>/g,
wrapMap={
option:[1,"<select multiple='multiple'>","</select>"],
legend:[1,"<fieldset>","</fieldset>"],
thead:[1,"<table>","</table>"],
tr:[2,"<table><tbody>","</tbody></table>"],
td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],
area:[1,"<map>","</map>"],
_default:[0,"",""]
};
wrapMap.optgroup=wrapMap.option;
wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;
wrapMap.th=wrapMap.td;
if(!jQuery.support.htmlSerialize){
wrapMap._default=[1,"div<div>","</div>"]}
jQuery.fn.extend({
text:function(text){
if(jQuery.isFunction(text)){
return this.each(function(i){
var self=jQuery(this);
self.text(text.call(this,i,self.text()))})}
if(typeof text!=="object"&&text!==undefined){
return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(text))}
return jQuery.text(this)},
wrapAll:function(html){
if(jQuery.isFunction(html)){
return this.each(function(i){
jQuery(this).wrapAll(html.call(this,i))})}
if(this[0]){
var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){
wrap.insertBefore(this[0])}
wrap.map(function(){
var elem=this;
while(elem.firstChild&&elem.firstChild.nodeType===1){
elem=elem.firstChild}
return elem}).append(this)}
return this},
wrapInner:function(html){
if(jQuery.isFunction(html)){
return this.each(function(i){
jQuery(this).wrapInner(html.call(this,i))})}
return this.each(function(){
var self=jQuery(this),
contents=self.contents();
if(contents.length){
contents.wrapAll(html)}else{
self.append(html)}
})},
wrap:function(html){
return this.each(function(){
jQuery(this).wrapAll(html)})},
unwrap:function(){
return this.parent().each(function(){
if(!jQuery.nodeName(this,"body")){
jQuery(this).replaceWith(this.childNodes)}
}).end()},
append:function(){
return this.domManip(arguments,true,function(elem){
if(this.nodeType===1){
this.appendChild(elem)}
})},
prepend:function(){
return this.domManip(arguments,true,function(elem){
if(this.nodeType===1){
this.insertBefore(elem,this.firstChild)}
})},
before:function(){
if(this[0]&&this[0].parentNode){
return this.domManip(arguments,false,function(elem){
this.parentNode.insertBefore(elem,this)})}else if(arguments.length){
var set=jQuery(arguments[0]);
set.push.apply(set,this.toArray());
return this.pushStack(set,"before",arguments)}
},
after:function(){
if(this[0]&&this[0].parentNode){
return this.domManip(arguments,false,function(elem){
this.parentNode.insertBefore(elem,this.nextSibling)})}else if(arguments.length){
var set=this.pushStack(this,"after",arguments);
set.push.apply(set,jQuery(arguments[0]).toArray());
return set}
},
remove:function(selector,keepData){
for(var i=0,elem;(elem=this[i])!=null;i++){
if(!selector||jQuery.filter(selector,[elem]).length){
if(!keepData&&elem.nodeType===1){
jQuery.cleanData(elem.getElementsByTagName("*"));
jQuery.cleanData([elem])}
if(elem.parentNode){
elem.parentNode.removeChild(elem)}
}
}
return this},
empty:function(){
for(var i=0,elem;(elem=this[i])!=null;i++){
if(elem.nodeType===1){
jQuery.cleanData(elem.getElementsByTagName("*"))}
while(elem.firstChild){
elem.removeChild(elem.firstChild)}
}
return this},
clone:function(events){
var ret=this.map(function(){
if(!jQuery.support.noCloneEvent&&!jQuery.isXMLDoc(this)){
var html=this.outerHTML,
ownerDocument=this.ownerDocument;
if(!html){
var div=ownerDocument.createElement("div");
div.appendChild(this.cloneNode(true));
html=div.innerHTML}
return jQuery.clean([html.replace(rinlinejQuery,"")
.replace(raction,'="$1">')
.replace(rleadingWhitespace,"")],ownerDocument)[0]}else{
return this.cloneNode(true)}
});
if(events===true){
cloneCopyEvent(this,ret);
cloneCopyEvent(this.find("*"),ret.find("*"))}
return ret},
html:function(value){
if(value===undefined){
return this[0]&&this[0].nodeType===1?
this[0].innerHTML.replace(rinlinejQuery,""):
null}else if(typeof value==="string"&&!rnocache.test(value)&&
(jQuery.support.leadingWhitespace||!rleadingWhitespace.test(value))&&
!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){
value=value.replace(rxhtmlTag,"<$1></$2>");
try{
for(var i=0,l=this.length;i<l;i++){
if(this[i].nodeType===1){
jQuery.cleanData(this[i].getElementsByTagName("*"));
this[i].innerHTML=value}
}
}catch(e){
this.empty().append(value)}
}else if(jQuery.isFunction(value)){
this.each(function(i){
var self=jQuery(this);
self.html(value.call(this,i,self.html()))})}else{
this.empty().append(value)}
return this},
replaceWith:function(value){
if(this[0]&&this[0].parentNode){
if(jQuery.isFunction(value)){
return this.each(function(i){
var self=jQuery(this),old=self.html();
self.replaceWith(value.call(this,i,old))})}
if(typeof value!=="string"){
value=jQuery(value).detach()}
return this.each(function(){
var next=this.nextSibling,
parent=this.parentNode;
jQuery(this).remove();
if(next){
jQuery(next).before(value)}else{
jQuery(parent).append(value)}
})}else{
return this.pushStack(jQuery(jQuery.isFunction(value)?value():value),"replaceWith",value)}
},
detach:function(selector){
return this.remove(selector,true)},
domManip:function(args,table,callback){
var results,first,fragment,parent,
value=args[0],
scripts=[];
if(!jQuery.support.checkClone&&arguments.length===3&&typeof value==="string"&&rchecked.test(value)){
return this.each(function(){
jQuery(this).domManip(args,table,callback,true)})}
if(jQuery.isFunction(value)){
return this.each(function(i){
var self=jQuery(this);
args[0]=value.call(this,i,table?self.html():undefined);
self.domManip(args,table,callback)})}
if(this[0]){
parent=value&&value.parentNode;
if(jQuery.support.parentNode&&parent&&parent.nodeType===11&&parent.childNodes.length===this.length){
results={fragment:parent}}else{
results=jQuery.buildFragment(args,this,scripts)}
fragment=results.fragment;
if(fragment.childNodes.length===1){
first=fragment=fragment.firstChild}else{
first=fragment.firstChild}
if(first){
table=table&&jQuery.nodeName(first,"tr");
for(var i=0,l=this.length;i<l;i++){
callback.call(
table?
root(this[i],first):
this[i],
i>0||results.cacheable||this.length>1?
fragment.cloneNode(true):
fragment
)}
}
if(scripts.length){
jQuery.each(scripts,evalScript)}
}
return this}
});
function root(elem,cur){
return jQuery.nodeName(elem,"table")?
(elem.getElementsByTagName("tbody")[0]||
elem.appendChild(elem.ownerDocument.createElement("tbody"))):
elem}
function cloneCopyEvent(orig,ret){
var i=0;
ret.each(function(){
if(this.nodeName!==(orig[i]&&orig[i].nodeName)){
return}
var oldData=jQuery.data(orig[i++]),
curData=jQuery.data(this,oldData),
events=oldData&&oldData.events;
if(events){
delete curData.handle;
curData.events={};
for(var type in events){
for(var handler in events[type]){
jQuery.event.add(this,type,events[type][handler],events[type][handler].data)}
}
}
})}
jQuery.buildFragment=function(args,nodes,scripts){
var fragment,cacheable,cacheresults,
doc=(nodes&&nodes[0]?nodes[0].ownerDocument||nodes[0]:document);
if(args.length===1&&typeof args[0]==="string"&&args[0].length<512&&doc===document&&
!rnocache.test(args[0])&&(jQuery.support.checkClone||!rchecked.test(args[0]))){
cacheable=true;
cacheresults=jQuery.fragments[args[0]];
if(cacheresults){
if(cacheresults!==1){
fragment=cacheresults}
}
}
if(!fragment){
fragment=doc.createDocumentFragment();
jQuery.clean(args,doc,fragment,scripts)}
if(cacheable){
jQuery.fragments[args[0]]=cacheresults?fragment:1}
return{fragment:fragment,cacheable:cacheable}};
jQuery.fragments={};
jQuery.each({
appendTo:"append",
prependTo:"prepend",
insertBefore:"before",
insertAfter:"after",
replaceAll:"replaceWith"
},function(name,original){
jQuery.fn[name]=function(selector){
var ret=[],
insert=jQuery(selector),
parent=this.length===1&&this[0].parentNode;
if(parent&&parent.nodeType===11&&parent.childNodes.length===1&&insert.length===1){
insert[original](this[0]);
return this}else{
for(var i=0,l=insert.length;i<l;i++){
var elems=(i>0?this.clone(true):this).get();
jQuery(insert[i])[original](elems);
ret=ret.concat(elems)}
return this.pushStack(ret,name,insert.selector)}
}});
jQuery.extend({
clean:function(elems,context,fragment,scripts){
context=context||document;
if(typeof context.createElement==="undefined"){
context=context.ownerDocument||context[0]&&context[0].ownerDocument||document}
var ret=[];
for(var i=0,elem;(elem=elems[i])!=null;i++){
if(typeof elem==="number"){
elem+=""}
if(!elem){
continue}
if(typeof elem==="string"&&!rhtml.test(elem)){
elem=context.createTextNode(elem)}else if(typeof elem==="string"){
elem=elem.replace(rxhtmlTag,"<$1></$2>");
var tag=(rtagName.exec(elem)||["",""])[1].toLowerCase(),
wrap=wrapMap[tag]||wrapMap._default,
depth=wrap[0],
div=context.createElement("div");
div.innerHTML=wrap[1]+elem+wrap[2];
while(depth--){
div=div.lastChild}
if(!jQuery.support.tbody){
var hasBody=rtbody.test(elem),
tbody=tag==="table"&&!hasBody?
div.firstChild&&div.firstChild.childNodes:
wrap[1]==="<table>"&&!hasBody?
div.childNodes:
[];
for(var j=tbody.length-1;j>=0;--j){
if(jQuery.nodeName(tbody[j],"tbody")&&!tbody[j].childNodes.length){
tbody[j].parentNode.removeChild(tbody[j])}
}
}
if(!jQuery.support.leadingWhitespace&&rleadingWhitespace.test(elem)){
div.insertBefore(context.createTextNode(rleadingWhitespace.exec(elem)[0]),div.firstChild)}
elem=div.childNodes}
if(elem.nodeType){
ret.push(elem)}else{
ret=jQuery.merge(ret,elem)}
}
if(fragment){
for(i=0;ret[i];i++){
if(scripts&&jQuery.nodeName(ret[i],"script")&&(!ret[i].type||ret[i].type.toLowerCase()==="text/javascript")){
scripts.push(ret[i].parentNode?ret[i].parentNode.removeChild(ret[i]):ret[i])}else{
if(ret[i].nodeType===1){
ret.splice.apply(ret,[i+1,0].concat(jQuery.makeArray(ret[i].getElementsByTagName("script"))))}
fragment.appendChild(ret[i])}
}
}
return ret},
cleanData:function(elems){
var data,id,cache=jQuery.cache,
special=jQuery.event.special,
deleteExpando=jQuery.support.deleteExpando;
for(var i=0,elem;(elem=elems[i])!=null;i++){
if(elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()]){
continue}
id=elem[jQuery.expando];
if(id){
data=cache[id];
if(data&&data.events){
for(var type in data.events){
if(special[type]){
jQuery.event.remove(elem,type)}else{
jQuery.removeEvent(elem,type,data.handle)}
}
}
if(deleteExpando){
delete elem[jQuery.expando]}else if(elem.removeAttribute){
elem.removeAttribute(jQuery.expando)}
delete cache[id]}
}
}
});
function evalScript(i,elem){
if(elem.src){
jQuery.ajax({
url:elem.src,
async:false,
dataType:"script"
})}else{
jQuery.globalEval(elem.text||elem.textContent||elem.innerHTML||"")}
if(elem.parentNode){
elem.parentNode.removeChild(elem)}
}
var ralpha=/alpha\([^)]*\)/i,
ropacity=/opacity=([^)]*)/,
rdashAlpha=/-([a-z])/ig,
rupper=/([A-Z])/g,
rnumpx=/^-?\d+(?:px)?$/i,
rnum=/^-?\d/,
cssShow={position:"absolute",visibility:"hidden",display:"block"},
cssWidth=["Left","Right"],
cssHeight=["Top","Bottom"],
curCSS,
getComputedStyle,
currentStyle,
fcamelCase=function(all,letter){
return letter.toUpperCase()};
jQuery.fn.css=function(name,value){
if(arguments.length===2&&value===undefined){
return this}
return jQuery.access(this,name,value,true,function(elem,name,value){
return value!==undefined?
jQuery.style(elem,name,value):
jQuery.css(elem,name)})};
jQuery.extend({
cssHooks:{
opacity:{
get:function(elem,computed){
if(computed){
var ret=curCSS(elem,"opacity","opacity");
return ret===""?"1":ret}else{
return elem.style.opacity}
}
}
},
cssNumber:{
"zIndex":true,
"fontWeight":true,
"opacity":true,
"zoom":true,
"lineHeight":true
},
cssProps:{
"float":jQuery.support.cssFloat?"cssFloat":"styleFloat"
},
style:function(elem,name,value,extra){
if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){
return}
var ret,origName=jQuery.camelCase(name),
style=elem.style,hooks=jQuery.cssHooks[origName];
name=jQuery.cssProps[origName]||origName;
if(value!==undefined){
if(typeof value==="number"&&isNaN(value)||value==null){
return}
if(typeof value==="number"&&!jQuery.cssNumber[origName]){
value+="px"}
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value))!==undefined){
try{
style[name]=value}catch(e){}
}
}else{
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){
return ret}
return style[name]}
},
css:function(elem,name,extra){
var ret,origName=jQuery.camelCase(name),
hooks=jQuery.cssHooks[origName];
name=jQuery.cssProps[origName]||origName;
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,true,extra))!==undefined){
return ret}else if(curCSS){
return curCSS(elem,name,origName)}
},
swap:function(elem,options,callback){
var old={};
for(var name in options){
old[name]=elem.style[name];
elem.style[name]=options[name]}
callback.call(elem);
for(name in options){
elem.style[name]=old[name]}
},
camelCase:function(string){
return string.replace(rdashAlpha,fcamelCase)}
});
jQuery.curCSS=jQuery.css;
jQuery.each(["height","width"],function(i,name){
jQuery.cssHooks[name]={
get:function(elem,computed,extra){
var val;
if(computed){
if(elem.offsetWidth!==0){
val=getWH(elem,name,extra)}else{
jQuery.swap(elem,cssShow,function(){
val=getWH(elem,name,extra)})}
if(val<=0){
val=curCSS(elem,name,name);
if(val==="0px"&&currentStyle){
val=currentStyle(elem,name,name)}
if(val!=null){
return val===""||val==="auto"?"0px":val}
}
if(val<0||val==null){
val=elem.style[name];
return val===""||val==="auto"?"0px":val}
return typeof val==="string"?val:val+"px"}
},
set:function(elem,value){
if(rnumpx.test(value)){
value=parseFloat(value);
if(value>=0){
return value+"px"}
}else{
return value}
}
}});
if(!jQuery.support.opacity){
jQuery.cssHooks.opacity={
get:function(elem,computed){
return ropacity.test((computed&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?
(parseFloat(RegExp.$1)/100)+"":
computed?"1":""},
set:function(elem,value){
var style=elem.style;
style.zoom=1;
var opacity=jQuery.isNaN(value)?
"":
"alpha(opacity="+value*100+")",
filter=style.filter||"";
style.filter=ralpha.test(filter)?
filter.replace(ralpha,opacity):
style.filter+' '+opacity}
}}
if(document.defaultView&&document.defaultView.getComputedStyle){
getComputedStyle=function(elem,newName,name){
var ret,defaultView,computedStyle;
name=name.replace(rupper,"-$1").toLowerCase();
if(!(defaultView=elem.ownerDocument.defaultView)){
return undefined}
if((computedStyle=defaultView.getComputedStyle(elem,null))){
ret=computedStyle.getPropertyValue(name);
if(ret===""&&!jQuery.contains(elem.ownerDocument.documentElement,elem)){
ret=jQuery.style(elem,name)}
}
return ret}}
if(document.documentElement.currentStyle){
currentStyle=function(elem,name){
var left,rsLeft,
ret=elem.currentStyle&&elem.currentStyle[name],
style=elem.style;
if(!rnumpx.test(ret)&&rnum.test(ret)){
left=style.left;
rsLeft=elem.runtimeStyle.left;
elem.runtimeStyle.left=elem.currentStyle.left;
style.left=name==="fontSize"?"1em":(ret||0);
ret=style.pixelLeft+"px";
style.left=left;
elem.runtimeStyle.left=rsLeft}
return ret===""?"auto":ret}}
curCSS=getComputedStyle||currentStyle;
function getWH(elem,name,extra){
var which=name==="width"?cssWidth:cssHeight,
val=name==="width"?elem.offsetWidth:elem.offsetHeight;
if(extra==="border"){
return val}
jQuery.each(which,function(){
if(!extra){
val-=parseFloat(jQuery.css(elem,"padding"+this))||0}
if(extra==="margin"){
val+=parseFloat(jQuery.css(elem,"margin"+this))||0}else{
val-=parseFloat(jQuery.css(elem,"border"+this+"Width"))||0}
});
return val}
if(jQuery.expr&&jQuery.expr.filters){
jQuery.expr.filters.hidden=function(elem){
var width=elem.offsetWidth,
height=elem.offsetHeight;
return(width===0&&height===0)||(!jQuery.support.reliableHiddenOffsets&&(elem.style.display||jQuery.css(elem,"display"))==="none")};
jQuery.expr.filters.visible=function(elem){
return!jQuery.expr.filters.hidden(elem)}}
var jsc=jQuery.now(),
rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
rselectTextarea=/^(?:select|textarea)/i,
rinput=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
rnoContent=/^(?:GET|HEAD)$/,
rbracket=/\[\]$/,
jsre=/\=\?(&|$)/,
rquery=/\?/,
rts=/([?&])_=[^&]*/,
rurl=/^(\w+:)?\/\/([^\/?#]+)/,
r20=/%20/g,
rhash=/#.*$/,
_load=jQuery.fn.load;
jQuery.fn.extend({
load:function(url,params,callback){
if(typeof url!=="string"&&_load){
return _load.apply(this,arguments)}else if(!this.length){
return this}
var off=url.indexOf(" ");
if(off>=0){
var selector=url.slice(off,url.length);
url=url.slice(0,off)}
var type="GET";
if(params){
if(jQuery.isFunction(params)){
callback=params;
params=null}else if(typeof params==="object"){
params=jQuery.param(params,jQuery.ajaxSettings.traditional);
type="POST"}
}
var self=this;
jQuery.ajax({
url:url,
type:type,
dataType:"html",
data:params,
complete:function(res,status){
if(status==="success"||status==="notmodified"){
self.html(selector?
jQuery("<div>")
.append(res.responseText.replace(rscript,""))
.find(selector):
res.responseText)}
if(callback){
self.each(callback,[res.responseText,status,res])}
}
});
return this},
serialize:function(){
return jQuery.param(this.serializeArray())},
serializeArray:function(){
return this.map(function(){
return this.elements?jQuery.makeArray(this.elements):this})
.filter(function(){
return this.name&&!this.disabled&&
(this.checked||rselectTextarea.test(this.nodeName)||
rinput.test(this.type))})
.map(function(i,elem){
var val=jQuery(this).val();
return val==null?
null:
jQuery.isArray(val)?
jQuery.map(val,function(val,i){
return{name:elem.name,value:val}}):
{name:elem.name,value:val}}).get()}
});
jQuery.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(i,o){
jQuery.fn[o]=function(f){
return this.bind(o,f)}});
jQuery.extend({
get:function(url,data,callback,type){
if(jQuery.isFunction(data)){
type=type||callback;
callback=data;
data=null}
return jQuery.ajax({
type:"GET",
url:url,
data:data,
success:callback,
dataType:type
})},
getScript:function(url,callback){
return jQuery.get(url,null,callback,"script")},
getJSON:function(url,data,callback){
return jQuery.get(url,data,callback,"json")},
post:function(url,data,callback,type){
if(jQuery.isFunction(data)){
type=type||callback;
callback=data;
data={}}
return jQuery.ajax({
type:"POST",
url:url,
data:data,
success:callback,
dataType:type
})},
ajaxSetup:function(settings){
jQuery.extend(jQuery.ajaxSettings,settings)},
ajaxSettings:{
url:location.href,
global:true,
type:"GET",
contentType:"application/x-www-form-urlencoded",
processData:true,
async:true,
xhr:function(){
return new window.XMLHttpRequest()},
accepts:{
xml:"application/xml, text/xml",
html:"text/html",
script:"text/javascript, application/javascript",
json:"application/json, text/javascript",
text:"text/plain",
_default:"*/*"
}
},
ajax:function(origSettings){
var s=jQuery.extend(true,{},jQuery.ajaxSettings,origSettings),
jsonp,status,data,type=s.type.toUpperCase(),noContent=rnoContent.test(type);
s.url=s.url.replace(rhash,"");
s.context=origSettings&&origSettings.context!=null?origSettings.context:s;
if(s.data&&s.processData&&typeof s.data!=="string"){
s.data=jQuery.param(s.data,s.traditional)}
if(s.dataType==="jsonp"){
if(type==="GET"){
if(!jsre.test(s.url)){
s.url+=(rquery.test(s.url)?"&":"?")+(s.jsonp||"callback")+"=?"}
}else if(!s.data||!jsre.test(s.data)){
s.data=(s.data?s.data+"&":"")+(s.jsonp||"callback")+"=?"}
s.dataType="json"}
if(s.dataType==="json"&&(s.data&&jsre.test(s.data)||jsre.test(s.url))){
jsonp=s.jsonpCallback||("jsonp"+jsc++);
if(s.data){
s.data=(s.data+"").replace(jsre,"="+jsonp+"$1")}
s.url=s.url.replace(jsre,"="+jsonp+"$1");
s.dataType="script";
var customJsonp=window[jsonp];
window[jsonp]=function(tmp){
if(jQuery.isFunction(customJsonp)){
customJsonp(tmp)}else{
window[jsonp]=undefined;
try{
delete window[jsonp]}catch(jsonpError){}
}
data=tmp;
jQuery.handleSuccess(s,xhr,status,data);
jQuery.handleComplete(s,xhr,status,data);
if(head){
head.removeChild(script)}
}}
if(s.dataType==="script"&&s.cache===null){
s.cache=false}
if(s.cache===false&&noContent){
var ts=jQuery.now();
var ret=s.url.replace(rts,"$1_="+ts);
s.url=ret+((ret===s.url)?(rquery.test(s.url)?"&":"?")+"_="+ts:"")}
if(s.data&&noContent){
s.url+=(rquery.test(s.url)?"&":"?")+s.data}
if(s.global&&jQuery.active++===0){
jQuery.event.trigger("ajaxStart")}
var parts=rurl.exec(s.url),
remote=parts&&(parts[1]&&parts[1].toLowerCase()!==location.protocol||parts[2].toLowerCase()!==location.host);
if(s.dataType==="script"&&type==="GET"&&remote){
var head=document.getElementsByTagName("head")[0]||document.documentElement;
var script=document.createElement("script");
if(s.scriptCharset){
script.charset=s.scriptCharset}
script.src=s.url;
if(!jsonp){
var done=false;
script.onload=script.onreadystatechange=function(){
if(!done&&(!this.readyState||
this.readyState==="loaded"||this.readyState==="complete")){
done=true;
jQuery.handleSuccess(s,xhr,status,data);
jQuery.handleComplete(s,xhr,status,data);
script.onload=script.onreadystatechange=null;
if(head&&script.parentNode){
head.removeChild(script)}
}
}}
head.insertBefore(script,head.firstChild);
return undefined}
var requestDone=false;
var xhr=s.xhr();
if(!xhr){
return}
if(s.username){
xhr.open(type,s.url,s.async,s.username,s.password)}else{
xhr.open(type,s.url,s.async)}
try{
if((s.data!=null&&!noContent)||(origSettings&&origSettings.contentType)){
xhr.setRequestHeader("Content-Type",s.contentType)}
if(s.ifModified){
if(jQuery.lastModified[s.url]){
xhr.setRequestHeader("If-Modified-Since",jQuery.lastModified[s.url])}
if(jQuery.etag[s.url]){
xhr.setRequestHeader("If-None-Match",jQuery.etag[s.url])}
}
if(!remote){
xhr.setRequestHeader("X-Requested-With","XMLHttpRequest")}
xhr.setRequestHeader("Accept",s.dataType&&s.accepts[s.dataType]?
s.accepts[s.dataType]+", */*; q=0.01":
s.accepts._default)}catch(headerError){}
if(s.beforeSend&&s.beforeSend.call(s.context,xhr,s)===false){
if(s.global&&jQuery.active--===1){
jQuery.event.trigger("ajaxStop")}
xhr.abort();
return false}
if(s.global){
jQuery.triggerGlobal(s,"ajaxSend",[xhr,s])}
var onreadystatechange=xhr.onreadystatechange=function(isTimeout){
if(!xhr||xhr.readyState===0||isTimeout==="abort"){
if(!requestDone){
jQuery.handleComplete(s,xhr,status,data)}
requestDone=true;
if(xhr){
xhr.onreadystatechange=jQuery.noop}
}else if(!requestDone&&xhr&&(xhr.readyState===4||isTimeout==="timeout")){
requestDone=true;
xhr.onreadystatechange=jQuery.noop;
status=isTimeout==="timeout"?
"timeout":
!jQuery.httpSuccess(xhr)?
"error":
s.ifModified&&jQuery.httpNotModified(xhr,s.url)?
"notmodified":
"success";
var errMsg;
if(status==="success"){
try{
data=jQuery.httpData(xhr,s.dataType,s)}catch(parserError){
status="parsererror";
errMsg=parserError}
}
if(status==="success"||status==="notmodified"){
if(!jsonp){
jQuery.handleSuccess(s,xhr,status,data)}
}else{
jQuery.handleError(s,xhr,status,errMsg)}
if(!jsonp){
jQuery.handleComplete(s,xhr,status,data)}
if(isTimeout==="timeout"){
xhr.abort()}
if(s.async){
xhr=null}
}
};
try{
var oldAbort=xhr.abort;
xhr.abort=function(){
if(xhr){
Function.prototype.call.call(oldAbort,xhr)}
onreadystatechange("abort")}}catch(abortError){}
if(s.async&&s.timeout>0){
setTimeout(function(){
if(xhr&&!requestDone){
onreadystatechange("timeout")}
},s.timeout)}
try{
xhr.send(noContent||s.data==null?null:s.data)}catch(sendError){
jQuery.handleError(s,xhr,null,sendError);
jQuery.handleComplete(s,xhr,status,data)}
if(!s.async){
onreadystatechange()}
return xhr},
param:function(a,traditional){
var s=[],
add=function(key,value){
value=jQuery.isFunction(value)?value():value;
s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value)};
if(traditional===undefined){
traditional=jQuery.ajaxSettings.traditional}
if(jQuery.isArray(a)||a.jquery){
jQuery.each(a,function(){
add(this.name,this.value)})}else{
for(var prefix in a){
buildParams(prefix,a[prefix],traditional,add)}
}
return s.join("&").replace(r20,"+")}
});
function buildParams(prefix,obj,traditional,add){
if(jQuery.isArray(obj)&&obj.length){
jQuery.each(obj,function(i,v){
if(traditional||rbracket.test(prefix)){
add(prefix,v)}else{
buildParams(prefix+"["+(typeof v==="object"||jQuery.isArray(v)?i:"")+"]",v,traditional,add)}
})}else if(!traditional&&obj!=null&&typeof obj==="object"){
if(jQuery.isEmptyObject(obj)){
add(prefix,"")}else{
jQuery.each(obj,function(k,v){
buildParams(prefix+"["+k+"]",v,traditional,add)})}
}else{
add(prefix,obj)}
}
jQuery.extend({
active:0,
lastModified:{},
etag:{},
handleError:function(s,xhr,status,e){
if(s.error){
s.error.call(s.context,xhr,status,e)}
if(s.global){
jQuery.triggerGlobal(s,"ajaxError",[xhr,s,e])}
},
handleSuccess:function(s,xhr,status,data){
if(s.success){
s.success.call(s.context,data,status,xhr)}
if(s.global){
jQuery.triggerGlobal(s,"ajaxSuccess",[xhr,s])}
},
handleComplete:function(s,xhr,status){
if(s.complete){
s.complete.call(s.context,xhr,status)}
if(s.global){
jQuery.triggerGlobal(s,"ajaxComplete",[xhr,s])}
if(s.global&&jQuery.active--===1){
jQuery.event.trigger("ajaxStop")}
},
triggerGlobal:function(s,type,args){
(s.context&&s.context.url==null?jQuery(s.context):jQuery.event).trigger(type,args)},
httpSuccess:function(xhr){
try{
return!xhr.status&&location.protocol==="file:"||
xhr.status>=200&&xhr.status<300||
xhr.status===304||xhr.status===1223}catch(e){}
return false},
httpNotModified:function(xhr,url){
var lastModified=xhr.getResponseHeader("Last-Modified"),
etag=xhr.getResponseHeader("Etag");
if(lastModified){
jQuery.lastModified[url]=lastModified}
if(etag){
jQuery.etag[url]=etag}
return xhr.status===304},
httpData:function(xhr,type,s){
var ct=xhr.getResponseHeader("content-type")||"",
xml=type==="xml"||!type&&ct.indexOf("xml")>=0,
data=xml?xhr.responseXML:xhr.responseText;
if(xml&&data.documentElement.nodeName==="parsererror"){
jQuery.error("parsererror")}
if(s&&s.dataFilter){
data=s.dataFilter(data,type)}
if(typeof data==="string"){
if(type==="json"||!type&&ct.indexOf("json")>=0){
data=jQuery.parseJSON(data)}else if(type==="script"||!type&&ct.indexOf("javascript")>=0){
jQuery.globalEval(data)}
}
return data}
});
if(window.ActiveXObject){
jQuery.ajaxSettings.xhr=function(){
if(window.location.protocol!=="file:"){
try{
return new window.XMLHttpRequest()}catch(xhrError){}
}
try{
return new window.ActiveXObject("Microsoft.XMLHTTP")}catch(activeError){}
}}
jQuery.support.ajax=!!jQuery.ajaxSettings.xhr();
var elemdisplay={},
rfxtypes=/^(?:toggle|show|hide)$/,
rfxnum=/^([+\-]=)?([\d+.\-]+)(.*)$/,
timerId,
fxAttrs=[
["height","marginTop","marginBottom","paddingTop","paddingBottom"],
["width","marginLeft","marginRight","paddingLeft","paddingRight"],
["opacity"]
];
jQuery.fn.extend({
show:function(speed,easing,callback){
var elem,display;
if(speed||speed===0){
return this.animate(genFx("show",3),speed,easing,callback)}else{
for(var i=0,j=this.length;i<j;i++){
elem=this[i];
display=elem.style.display;
if(!jQuery.data(elem,"olddisplay")&&display==="none"){
display=elem.style.display=""}
if(display===""&&jQuery.css(elem,"display")==="none"){
jQuery.data(elem,"olddisplay",defaultDisplay(elem.nodeName))}
}
for(i=0;i<j;i++){
elem=this[i];
display=elem.style.display;
if(display===""||display==="none"){
elem.style.display=jQuery.data(elem,"olddisplay")||""}
}
return this}
},
hide:function(speed,easing,callback){
if(speed||speed===0){
return this.animate(genFx("hide",3),speed,easing,callback)}else{
for(var i=0,j=this.length;i<j;i++){
var display=jQuery.css(this[i],"display");
if(display!=="none"){
jQuery.data(this[i],"olddisplay",display)}
}
for(i=0;i<j;i++){
this[i].style.display="none"}
return this}
},
_toggle:jQuery.fn.toggle,
toggle:function(fn,fn2,callback){
var bool=typeof fn==="boolean";
if(jQuery.isFunction(fn)&&jQuery.isFunction(fn2)){
this._toggle.apply(this,arguments)}else if(fn==null||bool){
this.each(function(){
var state=bool?fn:jQuery(this).is(":hidden");
jQuery(this)[state?"show":"hide"]()})}else{
this.animate(genFx("toggle",3),fn,fn2,callback)}
return this},
fadeTo:function(speed,to,easing,callback){
return this.filter(":hidden").css("opacity",0).show().end()
.animate({opacity:to},speed,easing,callback)},
animate:function(prop,speed,easing,callback){
var optall=jQuery.speed(speed,easing,callback);
if(jQuery.isEmptyObject(prop)){
return this.each(optall.complete)}
return this[optall.queue===false?"each":"queue"](function(){
var opt=jQuery.extend({},optall),p,
isElement=this.nodeType===1,
hidden=isElement&&jQuery(this).is(":hidden"),
self=this;
for(p in prop){
var name=jQuery.camelCase(p);
if(p!==name){
prop[name]=prop[p];
delete prop[p];
p=name}
if(prop[p]==="hide"&&hidden||prop[p]==="show"&&!hidden){
return opt.complete.call(this)}
if(isElement&&(p==="height"||p==="width")){
opt.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];
if(jQuery.css(this,"display")==="inline"&&
jQuery.css(this,"float")==="none"){
if(!jQuery.support.inlineBlockNeedsLayout){
this.style.display="inline-block"}else{
var display=defaultDisplay(this.nodeName);
if(display==="inline"){
this.style.display="inline-block"}else{
this.style.display="inline";
this.style.zoom=1}
}
}
}
if(jQuery.isArray(prop[p])){
(opt.specialEasing=opt.specialEasing||{})[p]=prop[p][1];
prop[p]=prop[p][0]}
}
if(opt.overflow!=null){
this.style.overflow="hidden"}
opt.curAnim=jQuery.extend({},prop);
jQuery.each(prop,function(name,val){
var e=new jQuery.fx(self,opt,name);
if(rfxtypes.test(val)){
e[val==="toggle"?hidden?"show":"hide":val](prop)}else{
var parts=rfxnum.exec(val),
start=e.cur()||0;
if(parts){
var end=parseFloat(parts[2]),
unit=parts[3]||"px";
if(unit!=="px"){
jQuery.style(self,name,(end||1)+unit);
start=((end||1)/e.cur())*start;
jQuery.style(self,name,start+unit)}
if(parts[1]){
end=((parts[1]==="-="?-1:1)*end)+start}
e.custom(start,end,unit)}else{
e.custom(start,val,"")}
}
});
return true})},
stop:function(clearQueue,gotoEnd){
var timers=jQuery.timers;
if(clearQueue){
this.queue([])}
this.each(function(){
for(var i=timers.length-1;i>=0;i--){
if(timers[i].elem===this){
if(gotoEnd){
timers[i](true)}
timers.splice(i,1)}
}
});
if(!gotoEnd){
this.dequeue()}
return this}
});
function genFx(type,num){
var obj={};
jQuery.each(fxAttrs.concat.apply([],fxAttrs.slice(0,num)),function(){
obj[this]=type});
return obj}
jQuery.each({
slideDown:genFx("show",1),
slideUp:genFx("hide",1),
slideToggle:genFx("toggle",1),
fadeIn:{opacity:"show"},
fadeOut:{opacity:"hide"},
fadeToggle:{opacity:"toggle"}
},function(name,props){
jQuery.fn[name]=function(speed,easing,callback){
return this.animate(props,speed,easing,callback)}});
jQuery.extend({
speed:function(speed,easing,fn){
var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{
complete:fn||!fn&&easing||
jQuery.isFunction(speed)&&speed,
duration:speed,
easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing
};
opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:
opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;
opt.old=opt.complete;
opt.complete=function(){
if(opt.queue!==false){
jQuery(this).dequeue()}
if(jQuery.isFunction(opt.old)){
opt.old.call(this)}
};
return opt},
easing:{
linear:function(p,n,firstNum,diff){
return firstNum+diff*p},
swing:function(p,n,firstNum,diff){
return((-Math.cos(p*Math.PI)/2)+0.5)*diff+firstNum}
},
timers:[],
fx:function(elem,options,prop){
this.options=options;
this.elem=elem;
this.prop=prop;
if(!options.orig){
options.orig={}}
}
});
jQuery.fx.prototype={
update:function(){
if(this.options.step){
this.options.step.call(this.elem,this.now,this)}
(jQuery.fx.step[this.prop]||jQuery.fx.step._default)(this)},
cur:function(){
if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){
return this.elem[this.prop]}
var r=parseFloat(jQuery.css(this.elem,this.prop));
return r&&r>-10000?r:0},
custom:function(from,to,unit){
var self=this,
fx=jQuery.fx;
this.startTime=jQuery.now();
this.start=from;
this.end=to;
this.unit=unit||this.unit||"px";
this.now=this.start;
this.pos=this.state=0;
function t(gotoEnd){
return self.step(gotoEnd)}
t.elem=this.elem;
if(t()&&jQuery.timers.push(t)&&!timerId){
timerId=setInterval(fx.tick,fx.interval)}
},
show:function(){
this.options.orig[this.prop]=jQuery.style(this.elem,this.prop);
this.options.show=true;
this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());
jQuery(this.elem).show()},
hide:function(){
this.options.orig[this.prop]=jQuery.style(this.elem,this.prop);
this.options.hide=true;
this.custom(this.cur(),0)},
step:function(gotoEnd){
var t=jQuery.now(),done=true;
if(gotoEnd||t>=this.options.duration+this.startTime){
this.now=this.end;
this.pos=this.state=1;
this.update();
this.options.curAnim[this.prop]=true;
for(var i in this.options.curAnim){
if(this.options.curAnim[i]!==true){
done=false}
}
if(done){
if(this.options.overflow!=null&&!jQuery.support.shrinkWrapBlocks){
var elem=this.elem,
options=this.options;
jQuery.each(["","X","Y"],function(index,value){
elem.style["overflow"+value]=options.overflow[index]})}
if(this.options.hide){
jQuery(this.elem).hide()}
if(this.options.hide||this.options.show){
for(var p in this.options.curAnim){
jQuery.style(this.elem,p,this.options.orig[p])}
}
this.options.complete.call(this.elem)}
return false}else{
var n=t-this.startTime;
this.state=n/this.options.duration;
var specialEasing=this.options.specialEasing&&this.options.specialEasing[this.prop];
var defaultEasing=this.options.easing||(jQuery.easing.swing?"swing":"linear");
this.pos=jQuery.easing[specialEasing||defaultEasing](this.state,n,0,1,this.options.duration);
this.now=this.start+((this.end-this.start)*this.pos);
this.update()}
return true}
};
jQuery.extend(jQuery.fx,{
tick:function(){
var timers=jQuery.timers;
for(var i=0;i<timers.length;i++){
if(!timers[i]()){
timers.splice(i--,1)}
}
if(!timers.length){
jQuery.fx.stop()}
},
interval:13,
stop:function(){
clearInterval(timerId);
timerId=null},
speeds:{
slow:600,
fast:200,
_default:400
},
step:{
opacity:function(fx){
jQuery.style(fx.elem,"opacity",fx.now)},
_default:function(fx){
if(fx.elem.style&&fx.elem.style[fx.prop]!=null){
fx.elem.style[fx.prop]=(fx.prop==="width"||fx.prop==="height"?Math.max(0,fx.now):fx.now)+fx.unit}else{
fx.elem[fx.prop]=fx.now}
}
}
});
if(jQuery.expr&&jQuery.expr.filters){
jQuery.expr.filters.animated=function(elem){
return jQuery.grep(jQuery.timers,function(fn){
return elem===fn.elem}).length}}
function defaultDisplay(nodeName){
if(!elemdisplay[nodeName]){
var elem=jQuery("<"+nodeName+">").appendTo("body"),
display=elem.css("display");
elem.remove();
if(display==="none"||display===""){
display="block"}
elemdisplay[nodeName]=display}
return elemdisplay[nodeName]}
var rtable=/^t(?:able|d|h)$/i,
rroot=/^(?:body|html)$/i;
if("getBoundingClientRect"in document.documentElement){
jQuery.fn.offset=function(options){
var elem=this[0],box;
if(options){
return this.each(function(i){
jQuery.offset.setOffset(this,options,i)})}
if(!elem||!elem.ownerDocument){
return null}
if(elem===elem.ownerDocument.body){
return jQuery.offset.bodyOffset(elem)}
try{
box=elem.getBoundingClientRect()}catch(e){}
var doc=elem.ownerDocument,
docElem=doc.documentElement;
if(!box||!jQuery.contains(docElem,elem)){
return box||{top:0,left:0}}
var body=doc.body,
win=getWindow(doc),
clientTop=docElem.clientTop||body.clientTop||0,
clientLeft=docElem.clientLeft||body.clientLeft||0,
scrollTop=(win.pageYOffset||jQuery.support.boxModel&&docElem.scrollTop||body.scrollTop),
scrollLeft=(win.pageXOffset||jQuery.support.boxModel&&docElem.scrollLeft||body.scrollLeft),
top=box.top+scrollTop-clientTop,
left=box.left+scrollLeft-clientLeft;
return{top:top,left:left}}}else{
jQuery.fn.offset=function(options){
var elem=this[0];
if(options){
return this.each(function(i){
jQuery.offset.setOffset(this,options,i)})}
if(!elem||!elem.ownerDocument){
return null}
if(elem===elem.ownerDocument.body){
return jQuery.offset.bodyOffset(elem)}
jQuery.offset.initialize();
var computedStyle,
offsetParent=elem.offsetParent,
prevOffsetParent=elem,
doc=elem.ownerDocument,
docElem=doc.documentElement,
body=doc.body,
defaultView=doc.defaultView,
prevComputedStyle=defaultView?defaultView.getComputedStyle(elem,null):elem.currentStyle,
top=elem.offsetTop,
left=elem.offsetLeft;
while((elem=elem.parentNode)&&elem!==body&&elem!==docElem){
if(jQuery.offset.supportsFixedPosition&&prevComputedStyle.position==="fixed"){
break}
computedStyle=defaultView?defaultView.getComputedStyle(elem,null):elem.currentStyle;
top-=elem.scrollTop;
left-=elem.scrollLeft;
if(elem===offsetParent){
top+=elem.offsetTop;
left+=elem.offsetLeft;
if(jQuery.offset.doesNotAddBorder&&!(jQuery.offset.doesAddBorderForTableAndCells&&rtable.test(elem.nodeName))){
top+=parseFloat(computedStyle.borderTopWidth)||0;
left+=parseFloat(computedStyle.borderLeftWidth)||0}
prevOffsetParent=offsetParent;
offsetParent=elem.offsetParent}
if(jQuery.offset.subtractsBorderForOverflowNotVisible&&computedStyle.overflow!=="visible"){
top+=parseFloat(computedStyle.borderTopWidth)||0;
left+=parseFloat(computedStyle.borderLeftWidth)||0}
prevComputedStyle=computedStyle}
if(prevComputedStyle.position==="relative"||prevComputedStyle.position==="static"){
top+=body.offsetTop;
left+=body.offsetLeft}
if(jQuery.offset.supportsFixedPosition&&prevComputedStyle.position==="fixed"){
top+=Math.max(docElem.scrollTop,body.scrollTop);
left+=Math.max(docElem.scrollLeft,body.scrollLeft)}
return{top:top,left:left}}}
jQuery.offset={
initialize:function(){
var body=document.body,container=document.createElement("div"),innerDiv,checkDiv,table,td,bodyMarginTop=parseFloat(jQuery.css(body,"marginTop"))||0,
html="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
jQuery.extend(container.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});
container.innerHTML=html;
body.insertBefore(container,body.firstChild);
innerDiv=container.firstChild;
checkDiv=innerDiv.firstChild;
td=innerDiv.nextSibling.firstChild.firstChild;
this.doesNotAddBorder=(checkDiv.offsetTop!==5);
this.doesAddBorderForTableAndCells=(td.offsetTop===5);
checkDiv.style.position="fixed";
checkDiv.style.top="20px";
this.supportsFixedPosition=(checkDiv.offsetTop===20||checkDiv.offsetTop===15);
checkDiv.style.position=checkDiv.style.top="";
innerDiv.style.overflow="hidden";
innerDiv.style.position="relative";
this.subtractsBorderForOverflowNotVisible=(checkDiv.offsetTop===-5);
this.doesNotIncludeMarginInBodyOffset=(body.offsetTop!==bodyMarginTop);
body.removeChild(container);
body=container=innerDiv=checkDiv=table=td=null;
jQuery.offset.initialize=jQuery.noop},
bodyOffset:function(body){
var top=body.offsetTop,
left=body.offsetLeft;
jQuery.offset.initialize();
if(jQuery.offset.doesNotIncludeMarginInBodyOffset){
top+=parseFloat(jQuery.css(body,"marginTop"))||0;
left+=parseFloat(jQuery.css(body,"marginLeft"))||0}
return{top:top,left:left}},
setOffset:function(elem,options,i){
var position=jQuery.css(elem,"position");
if(position==="static"){
elem.style.position="relative"}
var curElem=jQuery(elem),
curOffset=curElem.offset(),
curCSSTop=jQuery.css(elem,"top"),
curCSSLeft=jQuery.css(elem,"left"),
calculatePosition=(position==="absolute"&&jQuery.inArray('auto',[curCSSTop,curCSSLeft])>-1),
props={},curPosition={},curTop,curLeft;
if(calculatePosition){
curPosition=curElem.position()}
curTop=calculatePosition?curPosition.top:parseInt(curCSSTop,10)||0;
curLeft=calculatePosition?curPosition.left:parseInt(curCSSLeft,10)||0;
if(jQuery.isFunction(options)){
options=options.call(elem,i,curOffset)}
if(options.top!=null){
props.top=(options.top-curOffset.top)+curTop}
if(options.left!=null){
props.left=(options.left-curOffset.left)+curLeft}
if("using"in options){
options.using.call(elem,props)}else{
curElem.css(props)}
}
};
jQuery.fn.extend({
position:function(){
if(!this[0]){
return null}
var elem=this[0],
offsetParent=this.offsetParent(),
offset=this.offset(),
parentOffset=rroot.test(offsetParent[0].nodeName)?{top:0,left:0}:offsetParent.offset();
offset.top-=parseFloat(jQuery.css(elem,"marginTop"))||0;
offset.left-=parseFloat(jQuery.css(elem,"marginLeft"))||0;
parentOffset.top+=parseFloat(jQuery.css(offsetParent[0],"borderTopWidth"))||0;
parentOffset.left+=parseFloat(jQuery.css(offsetParent[0],"borderLeftWidth"))||0;
return{
top:offset.top-parentOffset.top,
left:offset.left-parentOffset.left
}},
offsetParent:function(){
return this.map(function(){
var offsetParent=this.offsetParent||document.body;
while(offsetParent&&(!rroot.test(offsetParent.nodeName)&&jQuery.css(offsetParent,"position")==="static")){
offsetParent=offsetParent.offsetParent}
return offsetParent})}
});
jQuery.each(["Left","Top"],function(i,name){
var method="scroll"+name;
jQuery.fn[method]=function(val){
var elem=this[0],win;
if(!elem){
return null}
if(val!==undefined){
return this.each(function(){
win=getWindow(this);
if(win){
win.scrollTo(
!i?val:jQuery(win).scrollLeft(),
i?val:jQuery(win).scrollTop()
)}else{
this[method]=val}
})}else{
win=getWindow(elem);
return win?("pageXOffset"in win)?win[i?"pageYOffset":"pageXOffset"]:
jQuery.support.boxModel&&win.document.documentElement[method]||
win.document.body[method]:
elem[method]}
}});
function getWindow(elem){
return jQuery.isWindow(elem)?
elem:
elem.nodeType===9?
elem.defaultView||elem.parentWindow:
false}
jQuery.each(["Height","Width"],function(i,name){
var type=name.toLowerCase();
jQuery.fn["inner"+name]=function(){
return this[0]?
parseFloat(jQuery.css(this[0],type,"padding")):
null};
jQuery.fn["outer"+name]=function(margin){
return this[0]?
parseFloat(jQuery.css(this[0],type,margin?"margin":"border")):
null};
jQuery.fn[type]=function(size){
var elem=this[0];
if(!elem){
return size==null?null:this}
if(jQuery.isFunction(size)){
return this.each(function(i){
var self=jQuery(this);
self[type](size.call(this,i,self[type]()))})}
if(jQuery.isWindow(elem)){
return elem.document.compatMode==="CSS1Compat"&&elem.document.documentElement["client"+name]||
elem.document.body["client"+name]}else if(elem.nodeType===9){
return Math.max(
elem.documentElement["client"+name],
elem.body["scroll"+name],elem.documentElement["scroll"+name],
elem.body["offset"+name],elem.documentElement["offset"+name]
)}else if(size===undefined){
var orig=jQuery.css(elem,type),
ret=parseFloat(orig);
return jQuery.isNaN(ret)?orig:ret}else{
return this.css(type,typeof size==="string"?size:size+"px")}
}})})(window);


/* prive/javascript/jquery.form.js */

;(function($){
$.fn.ajaxSubmit=function(options){
if(!this.length){
log('ajaxSubmit: skipping submit process - no element selected');
return this}
var method,action,url,$form=this;
if(typeof options=='function'){
options={success:options}}
method=this.attr('method');
action=this.attr('action');
url=(typeof action==='string')?$.trim(action):'';
url=url||window.location.href||'';
if(url){
url=(url.match(/^([^#]+)/)||[])[1]}
options=$.extend(true,{
url:url,
success:$.ajaxSettings.success,
type:method||'GET',
iframeSrc:/^https/i.test(window.location.href||'')?'javascript:false':'about:blank'
},options);
var veto={};
this.trigger('form-pre-serialize',[this,options,veto]);
if(veto.veto){
log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
return this}
if(options.beforeSerialize&&options.beforeSerialize(this,options)===false){
log('ajaxSubmit: submit aborted via beforeSerialize callback');
return this}
var traditional=options.traditional;
if(traditional===undefined){
traditional=$.ajaxSettings.traditional}
var qx,n,v,a=this.formToArray(options.semantic);
if(options.data){
options.extraData=options.data;
qx=$.param(options.data,traditional)}
if(options.beforeSubmit&&options.beforeSubmit(a,this,options)===false){
log('ajaxSubmit: submit aborted via beforeSubmit callback');
return this}
this.trigger('form-submit-validate',[a,this,options,veto]);
if(veto.veto){
log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
return this}
var q=$.param(a,traditional);
if(qx){
q=(q?(q+'&'+qx):qx)}
if(options.type.toUpperCase()=='GET'){
options.url+=(options.url.indexOf('?')>=0?'&':'?')+q;
options.data=null}
else{
options.data=q}
var callbacks=[];
if(options.resetForm){
callbacks.push(function(){$form.resetForm()})}
if(options.clearForm){
callbacks.push(function(){$form.clearForm(options.includeHidden)})}
if(!options.dataType&&options.target){
var oldSuccess=options.success||function(){};
callbacks.push(function(data){
var fn=options.replaceTarget?'replaceWith':'html';
$(options.target)[fn](data).each(oldSuccess,arguments)})}
else if(options.success){
callbacks.push(options.success)}
options.success=function(data,status,xhr){
var context=options.context||options;
for(var i=0,max=callbacks.length;i<max;i++){
callbacks[i].apply(context,[data,status,xhr||$form,$form])}
};
var fileInputs=$('input:file:enabled[value]',this);
var hasFileInputs=fileInputs.length>0;
var mp='multipart/form-data';
var multipart=($form.attr('enctype')==mp||$form.attr('encoding')==mp);
var fileAPI=!!(hasFileInputs&&fileInputs.get(0).files&&window.FormData);
log("fileAPI :"+fileAPI);
var shouldUseFrame=(hasFileInputs||multipart);
if(options.iframe!==false&&(options.iframe||shouldUseFrame)){
if(options.closeKeepAlive){
$.get(options.closeKeepAlive,function(){
fileUploadIframe(a)})}
else{
fileUploadIframe(a)}
}
else if((hasFileInputs||multipart)&&fileAPI){
options.progress=options.progress||$.noop;
fileUploadXhr(a)}
else{
$.ajax(options)}
this.trigger('form-submit-notify',[this,options]);
return this;
function fileUploadXhr(a){
var formdata=new FormData();
for(var i=0;i<a.length;i++){
if(a[i].type=='file')
continue;
formdata.append(a[i].name,a[i].value)}
$form.find('input:file:enabled').each(function(){
var name=$(this).attr('name'),files=this.files;
if(name){
for(var i=0;i<files.length;i++)
formdata.append(name,files[i])}
});
if(options.extraData){
for(var k in options.extraData)
formdata.append(k,options.extraData[k])
}
options.data=null;
var s=$.extend(true,{},$.ajaxSettings,options,{
contentType:false,
processData:false,
cache:false,
type:'POST'
});
s.context=s.context||s;
s.data=null;
var beforeSend=s.beforeSend;
s.beforeSend=function(xhr,o){
o.data=formdata;
if(xhr.upload){
xhr.upload.onprogress=function(event){
o.progress(event.position,event.total)}}
if(beforeSend)
beforeSend.call(o,xhr,options)};
$.ajax(s)}
function fileUploadIframe(a){
var form=$form[0],el,i,s,g,id,$io,io,xhr,sub,n,timedOut,timeoutHandle;
var useProp=!!$.fn.prop;
if(a){
if(useProp){
for(i=0;i<a.length;i++){
el=$(form[a[i].name]);
el.prop('disabled',false)}
}else{
for(i=0;i<a.length;i++){
el=$(form[a[i].name]);
el.removeAttr('disabled')}
}}
if($(':input[name=submit],:input[id=submit]',form).length){
alert('Error: Form elements must not have name or id of "submit".');
return}
s=$.extend(true,{},$.ajaxSettings,options);
s.context=s.context||s;
id='jqFormIO'+(new Date().getTime());
if(s.iframeTarget){
$io=$(s.iframeTarget);
n=$io.attr('name');
if(n==null)
$io.attr('name',id);
else
id=n}
else{
$io=$('<iframe name="'+id+'" src="'+s.iframeSrc+'" />');
$io.css({position:'absolute',top:'-1000px',left:'-1000px'})}
io=$io[0];
xhr={
aborted:0,
responseText:null,
responseXML:null,
status:0,
statusText:'n/a',
getAllResponseHeaders:function(){},
getResponseHeader:function(){},
setRequestHeader:function(){},
abort:function(status){
var e=(status==='timeout'?'timeout':'aborted');
log('aborting upload... '+e);
this.aborted=1;
$io.attr('src',s.iframeSrc);
xhr.error=e;
s.error&&s.error.call(s.context,xhr,e,status);
g&&$.event.trigger("ajaxError",[xhr,s,e]);
s.complete&&s.complete.call(s.context,xhr,e)}
};
g=s.global;
if(g&&!$.active++){
$.event.trigger("ajaxStart")}
if(g){
$.event.trigger("ajaxSend",[xhr,s])}
if(s.beforeSend&&s.beforeSend.call(s.context,xhr,s)===false){
if(s.global){
$.active--}
return}
if(xhr.aborted){
return}
sub=form.clk;
if(sub){
n=sub.name;
if(n&&!sub.disabled){
s.extraData=s.extraData||{};
s.extraData[n]=sub.value;
if(sub.type=="image"){
s.extraData[n+'.x']=form.clk_x;
s.extraData[n+'.y']=form.clk_y}
}
}
var CLIENT_TIMEOUT_ABORT=1;
var SERVER_ABORT=2;
function getDoc(frame){
var doc=frame.contentWindow?frame.contentWindow.document:frame.contentDocument?frame.contentDocument:frame.document;
return doc}
var csrf_token=$('meta[name=csrf-token]').attr('content');
var csrf_param=$('meta[name=csrf-param]').attr('content');
if(csrf_param&&csrf_token){
s.extraData=s.extraData||{};
s.extraData[csrf_param]=csrf_token}
function doSubmit(){
var t=$form.attr('target'),a=$form.attr('action');
form.setAttribute('target',id);
if(!method){
form.setAttribute('method','POST')}
if(a!=s.url){
form.setAttribute('action',s.url)}
if(!s.skipEncodingOverride&&(!method||/post/i.test(method))){
$form.attr({
encoding:'multipart/form-data',
enctype:'multipart/form-data'
})}
if(s.timeout){
timeoutHandle=setTimeout(function(){timedOut=true;cb(CLIENT_TIMEOUT_ABORT)},s.timeout)}
function checkState(){
try{
var state=getDoc(io).readyState;
log('state = '+state);
if(state.toLowerCase()=='uninitialized')
setTimeout(checkState,50)}
catch(e){
log('Server abort: ',e,' (',e.name,')');
cb(SERVER_ABORT);
timeoutHandle&&clearTimeout(timeoutHandle);
timeoutHandle=undefined}
}
var extraInputs=[];
try{
if(s.extraData){
for(var n in s.extraData){
extraInputs.push(
$('<input type="hidden" name="'+n+'">').attr('value',s.extraData[n])
.appendTo(form)[0])}
}
if(!s.iframeTarget){
$io.appendTo('body');
io.attachEvent?io.attachEvent('onload',cb):io.addEventListener('load',cb,false)}
setTimeout(checkState,15);
form.submit()}
finally{
form.setAttribute('action',a);
if(t){
form.setAttribute('target',t)}else{
$form.removeAttr('target')}
$(extraInputs).remove()}
}
if(s.forceSync){
doSubmit()}
else{
setTimeout(doSubmit,10)}
var data,doc,domCheckCount=50,callbackProcessed;
function cb(e){
if(xhr.aborted||callbackProcessed){
return}
try{
doc=getDoc(io)}
catch(ex){
log('cannot access response document: ',ex);
e=SERVER_ABORT}
if(e===CLIENT_TIMEOUT_ABORT&&xhr){
xhr.abort('timeout');
return}
else if(e==SERVER_ABORT&&xhr){
xhr.abort('server abort');
return}
if(!doc||doc.location.href==s.iframeSrc){
if(!timedOut)
return}
io.detachEvent?io.detachEvent('onload',cb):io.removeEventListener('load',cb,false);
var status='success',errMsg;
try{
if(timedOut){
throw'timeout'}
var isXml=s.dataType=='xml'||doc.XMLDocument||$.isXMLDoc(doc);
log('isXml='+isXml);
if(!isXml&&window.opera&&(doc.body==null||doc.body.innerHTML=='')){
if(--domCheckCount){
log('requeing onLoad callback, DOM not available');
setTimeout(cb,250);
return}
}
var docRoot=doc.body?doc.body:doc.documentElement;
xhr.responseText=docRoot?docRoot.innerHTML:null;
xhr.responseXML=doc.XMLDocument?doc.XMLDocument:doc;
if(isXml)
s.dataType='xml';
xhr.getResponseHeader=function(header){
var headers={'content-type':s.dataType};
return headers[header]};
if(docRoot){
xhr.status=Number(docRoot.getAttribute('status'))||xhr.status;
xhr.statusText=docRoot.getAttribute('statusText')||xhr.statusText}
var dt=(s.dataType||'').toLowerCase();
var scr=/(json|script|text)/.test(dt);
if(scr||s.textarea){
var ta=doc.getElementsByTagName('textarea')[0];
if(ta){
xhr.responseText=ta.value;
xhr.status=Number(ta.getAttribute('status'))||xhr.status;
xhr.statusText=ta.getAttribute('statusText')||xhr.statusText}
else if(scr){
var pre=doc.getElementsByTagName('pre')[0];
var b=doc.getElementsByTagName('body')[0];
if(pre){
xhr.responseText=pre.textContent?pre.textContent:pre.innerText}
else if(b){
xhr.responseText=b.textContent?b.textContent:b.innerText}
}
}
else if(dt=='xml'&&!xhr.responseXML&&xhr.responseText!=null){
xhr.responseXML=toXml(xhr.responseText)}
try{
data=httpData(xhr,dt,s)}
catch(e){
status='parsererror';
xhr.error=errMsg=(e||status)}
}
catch(e){
log('error caught: ',e);
status='error';
xhr.error=errMsg=(e||status)}
if(xhr.aborted){
log('upload aborted');
status=null}
if(xhr.status){
status=(xhr.status>=200&&xhr.status<300||xhr.status===304)?'success':'error'}
if(status==='success'){
s.success&&s.success.call(s.context,data,'success',xhr);
g&&$.event.trigger("ajaxSuccess",[xhr,s])}
else if(status){
if(errMsg==undefined)
errMsg=xhr.statusText;
s.error&&s.error.call(s.context,xhr,status,errMsg);
g&&$.event.trigger("ajaxError",[xhr,s,errMsg])}
g&&$.event.trigger("ajaxComplete",[xhr,s]);
if(g&&!--$.active){
$.event.trigger("ajaxStop")}
s.complete&&s.complete.call(s.context,xhr,status);
callbackProcessed=true;
if(s.timeout)
clearTimeout(timeoutHandle);
setTimeout(function(){
if(!s.iframeTarget)
$io.remove();
xhr.responseXML=null},100)}
var toXml=$.parseXML||function(s,doc){
if(window.ActiveXObject){
doc=new ActiveXObject('Microsoft.XMLDOM');
doc.async='false';
doc.loadXML(s)}
else{
doc=(new DOMParser()).parseFromString(s,'text/xml')}
return(doc&&doc.documentElement&&doc.documentElement.nodeName!='parsererror')?doc:null};
var parseJSON=$.parseJSON||function(s){
return window['eval']('('+s+')')};
var httpData=function(xhr,type,s){
var ct=xhr.getResponseHeader('content-type')||'',
xml=type==='xml'||!type&&ct.indexOf('xml')>=0,
data=xml?xhr.responseXML:xhr.responseText;
if(xml&&data.documentElement.nodeName==='parsererror'){
$.error&&$.error('parsererror')}
if(s&&s.dataFilter){
data=s.dataFilter(data,type)}
if(typeof data==='string'){
if(type==='json'||!type&&ct.indexOf('json')>=0){
data=parseJSON(data)}else if(type==="script"||!type&&ct.indexOf("javascript")>=0){
$.globalEval(data)}
}
return data}}
};
$.fn.ajaxForm=function(options){
if(this.length===0){
var o={s:this.selector,c:this.context};
if(!$.isReady&&o.s){
log('DOM not ready, queuing ajaxForm');
$(function(){
$(o.s,o.c).ajaxForm(options)});
return this}
log('terminating; zero elements found by selector'+($.isReady?'':' (DOM not ready)'));
return this}
return this.ajaxFormUnbind().bind('submit.form-plugin',function(e){
if(!e.isDefaultPrevented()){
e.preventDefault();
$(this).ajaxSubmit(options)}
}).bind('click.form-plugin',function(e){
var target=e.target;
var $el=$(target);
if(!($el.is(":submit,input:image"))){
var t=$el.closest(':submit');
if(t.length==0){
return}
target=t[0]}
var form=this;
form.clk=target;
if(target.type=='image'){
if(e.offsetX!=undefined){
form.clk_x=e.offsetX;
form.clk_y=e.offsetY}else if(typeof $.fn.offset=='function'){
var offset=$el.offset();
form.clk_x=e.pageX-offset.left;
form.clk_y=e.pageY-offset.top}else{
form.clk_x=e.pageX-target.offsetLeft;
form.clk_y=e.pageY-target.offsetTop}
}
setTimeout(function(){form.clk=form.clk_x=form.clk_y=null},100)})};
$.fn.ajaxFormUnbind=function(){
return this.unbind('submit.form-plugin click.form-plugin')};
$.fn.formToArray=function(semantic){
var a=[];
if(this.length===0){
return a}
var form=this[0];
var els=semantic?form.getElementsByTagName('*'):form.elements;
if(!els){
return a}
var i,j,n,v,el,max,jmax;
for(i=0,max=els.length;i<max;i++){
el=els[i];
n=el.name;
if(!n){
continue}
if(semantic&&form.clk&&el.type=="image"){
if(!el.disabled&&form.clk==el){
a.push({name:n,value:$(el).val(),type:el.type});
a.push({name:n+'.x',value:form.clk_x},{name:n+'.y',value:form.clk_y})}
continue}
v=$.fieldValue(el,true);
if(v&&v.constructor==Array){
for(j=0,jmax=v.length;j<jmax;j++){
a.push({name:n,value:v[j]})}
}
else if(v!==null&&typeof v!='undefined'){
a.push({name:n,value:v,type:el.type})}
}
if(!semantic&&form.clk){
var $input=$(form.clk),input=$input[0];
n=input.name;
if(n&&!input.disabled&&input.type=='image'){
a.push({name:n,value:$input.val()});
a.push({name:n+'.x',value:form.clk_x},{name:n+'.y',value:form.clk_y})}
}
return a};
$.fn.formSerialize=function(semantic){
return $.param(this.formToArray(semantic))};
$.fn.fieldSerialize=function(successful){
var a=[];
this.each(function(){
var n=this.name;
if(!n){
return}
var v=$.fieldValue(this,successful);
if(v&&v.constructor==Array){
for(var i=0,max=v.length;i<max;i++){
a.push({name:n,value:v[i]})}
}
else if(v!==null&&typeof v!='undefined'){
a.push({name:this.name,value:v})}
});
return $.param(a)};
$.fn.fieldValue=function(successful){
for(var val=[],i=0,max=this.length;i<max;i++){
var el=this[i];
var v=$.fieldValue(el,successful);
if(v===null||typeof v=='undefined'||(v.constructor==Array&&!v.length)){
continue}
v.constructor==Array?$.merge(val,v):val.push(v)}
return val};
$.fieldValue=function(el,successful){
var n=el.name,t=el.type,tag=el.tagName.toLowerCase();
if(successful===undefined){
successful=true}
if(successful&&(!n||el.disabled||t=='reset'||t=='button'||
(t=='checkbox'||t=='radio')&&!el.checked||
(t=='submit'||t=='image')&&el.form&&el.form.clk!=el||
tag=='select'&&el.selectedIndex==-1)){
return null}
if(tag=='select'){
var index=el.selectedIndex;
if(index<0){
return null}
var a=[],ops=el.options;
var one=(t=='select-one');
var max=(one?index+1:ops.length);
for(var i=(one?index:0);i<max;i++){
var op=ops[i];
if(op.selected){
var v=op.value;
if(!v){
v=(op.attributes&&op.attributes['value']&&!(op.attributes['value'].specified))?op.text:op.value}
if(one){
return v}
a.push(v)}
}
return a}
return $(el).val()};
$.fn.clearForm=function(includeHidden){
return this.each(function(){
$('input,select,textarea',this).clearFields(includeHidden)})};
$.fn.clearFields=$.fn.clearInputs=function(includeHidden){
var re=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
return this.each(function(){
var t=this.type,tag=this.tagName.toLowerCase();
if(re.test(t)||tag=='textarea'||(includeHidden&&/hidden/.test(t))){
this.value=''}
else if(t=='checkbox'||t=='radio'){
this.checked=false}
else if(tag=='select'){
this.selectedIndex=-1}
})};
$.fn.resetForm=function(){
return this.each(function(){
if(typeof this.reset=='function'||(typeof this.reset=='object'&&!this.reset.nodeType)){
this.reset()}
})};
$.fn.enable=function(b){
if(b===undefined){
b=true}
return this.each(function(){
this.disabled=!b})};
$.fn.selected=function(select){
if(select===undefined){
select=true}
return this.each(function(){
var t=this.type;
if(t=='checkbox'||t=='radio'){
this.checked=select}
else if(this.tagName.toLowerCase()=='option'){
var $sel=$(this).parent('select');
if(select&&$sel[0]&&$sel[0].type=='select-one'){
$sel.find('option').selected(false)}
this.selected=select}
})};
$.fn.ajaxSubmit.debug=false;
function log(){
if(!$.fn.ajaxSubmit.debug)
return;
var msg='[jquery.form] '+Array.prototype.join.call(arguments,'');
if(window.console&&window.console.log){
window.console.log(msg)}
else if(window.opera&&window.opera.postError){
window.opera.postError(msg)}
}})(jQuery);


/* prive/javascript/ajaxCallback.js */

if(!jQuery.load_handlers){
jQuery.load_handlers=new Array();
function onAjaxLoad(f){
jQuery.load_handlers.push(f)};
function triggerAjaxLoad(root){
for(var i=0;i<jQuery.load_handlers.length;i++)
jQuery.load_handlers[i].apply(root)};
jQuery.fn._ACBload=jQuery.fn.load;
jQuery.fn.load=function(url,params,callback){
callback=callback||function(){};
if(params){
if(params.constructor==Function){
callback=params;
params=null}
}
var callback2=function(res,status){triggerAjaxLoad(this);callback.call(this,res,status)};
return this._ACBload(url,params,callback2)};
jQuery._ACBajax=jQuery.ajax;
jQuery.ajax=function(type){
var s=jQuery.extend(true,{},jQuery.ajaxSettings,type);
var callbackContext=s.context||s;
if(jQuery.ajax.caller==jQuery.fn._load)return jQuery._ACBajax(type);
var orig_complete=s.complete||function(){};
type.complete=function(res,status){
var dataType=type.dataType;
var ct=(res&&(typeof res.getResponseHeader=='function'))
?res.getResponseHeader("content-type"):'';
var xml=!dataType&&ct&&ct.indexOf("xml")>=0;
orig_complete.call(callbackContext,res,status);
if(!dataType&&!xml||dataType=="html")triggerAjaxLoad(document)};
return jQuery._ACBajax(type)}}
jQuery.fn.animeajax=function(end){
this.children().css('opacity',0.5);
if(typeof ajax_image_searching!='undefined'){
var i=(this).find('.image_loading');
if(i.length)i.eq(0).html(ajax_image_searching);
else this.prepend('<span class="image_loading">'+ajax_image_searching+'</span>')}
return this}
jQuery.fn.positionner=function(force){
var offset=jQuery(this).offset();
var hauteur=parseInt(jQuery(this).css('height'));
var scrolltop=self['pageYOffset']||
jQuery.boxModel&&document.documentElement['scrollTop']||
document.body['scrollTop'];
var h=jQuery(window).height();
var scroll=0;
if(force||offset['top']-5<=scrolltop)
scroll=offset['top']-5;
else if(offset['top']+hauteur-h+5>scrolltop)
scroll=Math.min(offset['top']-5,offset['top']+hauteur-h+15);
if(scroll)
jQuery('html,body')
.animate({scrollTop:scroll},300);
jQuery(jQuery('*',this).filter('input[type=text],textarea')[0]).focus();
return this}
var virtualbuffer_id='spip_virtualbufferupdate';
function initReaderBuffer(){
if(jQuery('#'+virtualbuffer_id).length)return;
jQuery('body').append('<p style="float:left;width:0;height:0;position:absolute;left:-5000;top:-5000;"><input type="hidden" name="'+virtualbuffer_id+'" id="'+virtualbuffer_id+'" value="0" /></p>')}
function updateReaderBuffer(){
var i=jQuery('#'+virtualbuffer_id);
if(!i.length)return;
i.attr('value',parseInt(i.attr('value'))+1)}
jQuery.fn.formulaire_dyn_ajax=function(target){
if(this.length)
initReaderBuffer();
return this.each(function(){
var cible=target||this;
jQuery('form:not(.noajax,.bouton_action_post)',this).each(function(){
var leform=this;
var leclk,leclk_x,leclk_y;
jQuery(this).prepend("<input type='hidden' name='var_ajax' value='form' />")
.ajaxForm({
beforeSubmit:function(){
leclk=leform.clk;
if(leclk){
var n=leclk.name;
if(n&&!leclk.disabled&&leclk.type=="image"){
leclk_x=leform.clk_x;
leclk_y=leform.clk_y}
}
jQuery(cible).addClass('loading').animeajax()},
success:function(c){
if(c=='noajax'){
jQuery("input[name=var_ajax]",leform).remove();
if(leclk){
var n=leclk.name;
if(n&&!leclk.disabled){
jQuery(leform).prepend("<input type='hidden' name='"+n+"' value='"+leclk.value+"' />");
if(leclk.type=="image"){
jQuery(leform).prepend("<input type='hidden' name='"+n+".x' value='"+leform.clk_x+"' />");
jQuery(leform).prepend("<input type='hidden' name='"+n+".y' value='"+leform.clk_y+"' />")}
}
}
jQuery(leform).ajaxFormUnbind().submit()}
else{
var recu=jQuery('<div><\/div>').html(c);
var d=jQuery('div.ajax',recu);
if(d.length)
c=d.html();
jQuery(cible)
.removeClass('loading')
.html(c);
var a=jQuery('a:first',recu).eq(0);
if(a.length
&&a.is('a[name=ajax_ancre]')
&&jQuery(a.attr('href'),cible).length){
a=a.attr('href');
if(jQuery(a,cible).length)
setTimeout(function(){
jQuery(a,cible).positionner(true)},10)}
else{
jQuery(cible).positionner(false);
if(a.length&&a.is('a[name=ajax_redirect]')){
a=a.attr('href');
jQuery(cible).addClass('loading').animeajax();
setTimeout(function(){
document.location.replace(a)},10)}
}
triggerAjaxLoad(cible);
updateReaderBuffer()}
},
iframe:jQuery.browser.msie
})
.addClass('noajax')
})})}
var ajax_confirm=true;
var ajax_confirm_date=0;
var spip_confirm=window.confirm;
function _confirm(message){
ajax_confirm=spip_confirm(message);
if(!ajax_confirm){
var d=new Date();
ajax_confirm_date=d.getTime()}
return ajax_confirm}
window.confirm=_confirm;
var preloaded_urls={};
var ajaxbloc_selecteur;
jQuery.fn.ajaxbloc=function(){
if(this.length)
initReaderBuffer();
return this.each(function(){
jQuery('div.ajaxbloc',this).ajaxbloc();
var blocfrag=jQuery(this);
var on_pagination=function(c){
jQuery(blocfrag)
.html(c)
.removeClass('loading');
var a=jQuery('a:first',jQuery(blocfrag)).eq(0);
if(a.length
&&a.is('a[name=ajax_ancre]')
&&jQuery(a.attr('href'),blocfrag).length){
a=a.attr('href')
setTimeout(function(){
jQuery(a,blocfrag).positionner(true)},10)}
else{
jQuery(blocfrag).positionner(false)}
updateReaderBuffer()}
var ajax_env=(""+blocfrag.attr('class')).match(/env-([^ ]+)/);
if(!ajax_env||ajax_env==undefined)return;
ajax_env=ajax_env[1];
if(ajaxbloc_selecteur==undefined)
ajaxbloc_selecteur='.pagination a,a.ajax';
jQuery(ajaxbloc_selecteur,this).not('.noajax').each(function(){
var url=this.href.split('#');
url[0]+=(url[0].indexOf("?")>0?'&':'?')+'var_ajax=1&var_ajax_env='+encodeURIComponent(ajax_env);
if(url[1])
url[0]+="&var_ajax_ancre="+url[1];
if(jQuery(this).is('.preload')&&!preloaded_urls[url[0]]){
jQuery.ajax({"url":url[0],"success":function(r){preloaded_urls[url[0]]=r}})}
jQuery(this).click(function(){
if(!ajax_confirm){
ajax_confirm=true;
var d=new Date();
if((d.getTime()-ajax_confirm_date)<=2)
return false}
jQuery(blocfrag)
.animeajax()
.addClass('loading');
if(preloaded_urls[url[0]]){
on_pagination(preloaded_urls[url[0]]);
triggerAjaxLoad(document)}else{
jQuery.ajax({
url:url[0],
success:function(c){
on_pagination(c);
preloaded_urls[url[0]]=c}
})}
return false})}).addClass('noajax');
jQuery('form.bouton_action_post.ajax:not(.noajax)',this).each(function(){
var leform=this;
var url=jQuery(this).attr('action').split('#');
jQuery(this)
.prepend("<input type='hidden' name='var_ajax' value='1' /><input type='hidden' name='var_ajax_env' value='"+(ajax_env)+"' />"+(url[1]?"<input type='hidden' name='var_ajax_ancre' value='"+url[1]+"' />":""))
.ajaxForm({
beforeSubmit:function(){
jQuery(blocfrag).addClass('loading').animeajax()},
success:function(c){
on_pagination(c);
preloaded_urls={};
jQuery(blocfrag)
.ajaxbloc()},
iframe:jQuery.browser.msie
})
.addClass('noajax')
})})};
jQuery(function(){
jQuery('form:not(.bouton_action_post)').parents('div.ajax')
.formulaire_dyn_ajax();
jQuery('div.ajaxbloc').ajaxbloc()});
onAjaxLoad(function(){
if(jQuery){
jQuery('form:not(.bouton_action_post)',this).parents('div.ajax')
.formulaire_dyn_ajax();
jQuery('div.ajaxbloc',this)
.ajaxbloc()}
});


/* plugins/auto/lecteur_multimedia/soundmanager/soundmanager2.js */

function SoundManager(smURL,smID){
var self=this;
this.version='V2.0b.20070415';
this.url=(smURL||'soundmanager2.swf');
this.debugMode=true;
this.useConsole=true;
this.consoleOnly=false;
this.nullURL='data/null.mp3';
this.defaultOptions={
'autoLoad':false,
'stream':true,
'autoPlay':false,
'onid3':null,
'onload':null,
'whileloading':null,
'onplay':null,
'whileplaying':null,
'onstop':null,
'onfinish':null,
'onbeforefinish':null,
'onbeforefinishtime':5000,
'onbeforefinishcomplete':null,
'onjustbeforefinish':null,
'onjustbeforefinishtime':200,
'multiShot':true,
'pan':0,
'volume':100
}
this.allowPolling=true;
this.enabled=false;
this.o=null;
this.id=(smID||'sm2movie');
this.oMC=null;
this.sounds=[];
this.soundIDs=[];
this.isIE=(navigator.userAgent.match(/MSIE/));
this.isSafari=(navigator.userAgent.match(/safari/i));
this.debugID='soundmanager-debug';
this._debugOpen=true;
this._didAppend=false;
this._appendSuccess=false;
this._didInit=false;
this._disabled=false;
this._hasConsole=(typeof console!='undefined'&&typeof console.log!='undefined');
this._debugLevels=!self.isSafari?['debug','info','warn','error']:['log','log','log','log'];
this.getMovie=function(smID){
return self.isIE?window[smID]:(self.isSafari?document[smID+'-embed']:document.getElementById(smID+'-embed'))}
this.loadFromXML=function(sXmlUrl){
try{
self.o._loadFromXML(sXmlUrl)}catch(e){
self._failSafely();
return true}
}
this.createSound=function(oOptions){
if(!self._didInit)throw new Error('soundManager.createSound(): Not loaded yet - wait for soundManager.onload() before calling sound-related methods');
if(arguments.length==2){
oOptions={'id':arguments[0],'url':arguments[1]}
}
var thisOptions=self._mergeObjects(oOptions);
self._writeDebug('soundManager.createSound(): "<a href="#" onclick="soundManager.play(\''+thisOptions.id+'\');return false" title="play this sound">'+thisOptions.id+'</a>" ('+thisOptions.url+')',1);
if(self._idCheck(thisOptions.id,true)){
self._writeDebug('sound '+thisOptions.id+' already defined - exiting',2);
return false}
self.sounds[thisOptions.id]=new SMSound(self,thisOptions);
self.soundIDs[self.soundIDs.length]=thisOptions.id;
try{
self.o._createSound(thisOptions.id,thisOptions.onjustbeforefinishtime)}catch(e){
self._failSafely();
return true}
if(thisOptions.autoLoad||thisOptions.autoPlay)self.sounds[thisOptions.id].load(thisOptions);
if(thisOptions.autoPlay)self.sounds[thisOptions.id].playState=1}
this.destroySound=function(sID){
if(!self._idCheck(sID))return false;
for(var i=self.soundIDs.length;i--;){
if(self.soundIDs[i]==sID){
delete self.soundIDs[i];
continue}
}
self.sounds[sID].unload();
delete self.sounds[sID]}
this.load=function(sID,oOptions){
if(!self._idCheck(sID))return false;
self.sounds[sID].load(oOptions)}
this.unload=function(sID){
if(!self._idCheck(sID))return false;
self.sounds[sID].unload()}
this.play=function(sID,oOptions){
if(!self._idCheck(sID)){
if(typeof oOptions!='Object')oOptions={url:oOptions};
if(oOptions&&oOptions.url){
self._writeDebug('soundController.play(): attempting to create "'+sID+'"',1);
oOptions.id=sID;
self.createSound(oOptions)}else{
return false}
}
self.sounds[sID].play(oOptions)}
this.start=this.play;
this.setPosition=function(sID,nMsecOffset){
if(!self._idCheck(sID))return false;
self.sounds[sID].setPosition(nMsecOffset)}
this.stop=function(sID){
if(!self._idCheck(sID))return false;
self._writeDebug('soundManager.stop('+sID+')',1);
self.sounds[sID].stop()}
this.stopAll=function(){
self._writeDebug('soundManager.stopAll()',1);
for(var oSound in self.sounds){
if(self.sounds[oSound]instanceof SMSound)self.sounds[oSound].stop()}
}
this.pause=function(sID){
if(!self._idCheck(sID))return false;
self.sounds[sID].pause()}
this.resume=function(sID){
if(!self._idCheck(sID))return false;
self.sounds[sID].resume()}
this.togglePause=function(sID){
if(!self._idCheck(sID))return false;
self.sounds[sID].togglePause()}
this.setPan=function(sID,nPan){
if(!self._idCheck(sID))return false;
self.sounds[sID].setPan(nPan)}
this.setVolume=function(sID,nVol){
if(!self._idCheck(sID))return false;
self.sounds[sID].setVolume(nVol)}
this.setPolling=function(bPolling){
if(!self.o||!self.allowPolling)return false;
self._writeDebug('soundManager.setPolling('+bPolling+')');
self.o._setPolling(bPolling)}
this.disable=function(){
if(self._disabled)return false;
self._disabled=true;
self._writeDebug('soundManager.disable(): Disabling all functions - future calls will return false.',1);
for(var i=self.soundIDs.length;i--;){
self._disableObject(self.sounds[self.soundIDs[i]])}
self.initComplete();
self._disableObject(self)}
this.getSoundById=function(sID,suppressDebug){
if(!sID)throw new Error('SoundManager.getSoundById(): sID is null/undefined');
var result=self.sounds[sID];
if(!result&&!suppressDebug){
self._writeDebug('"'+sID+'" is an invalid sound ID.',2)}
return result}
this.onload=function(){
soundManager._writeDebug('<em>Warning</em>: soundManager.onload() is undefined.',2)}
this.onerror=function(){
}
this._idCheck=this.getSoundById;
this._disableObject=function(o){
for(var oProp in o){
if(typeof o[oProp]=='function'&&typeof o[oProp]._protected=='undefined')o[oProp]=function(){return false}
}
oProp=null}
this._failSafely=function(){
var flashCPLink='http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html';
var fpgssTitle='You may need to whitelist this location/domain eg. file:///C:/ or C:/ or mysite.com, or set ALWAYS ALLOW under the Flash Player Global Security Settings page. Note that this seems to apply only to file system viewing.';
var flashCPL='<a href="'+flashCPLink+'" title="'+fpgssTitle+'">view/edit</a>';
var FPGSS='<a href="'+flashCPLink+'" title="Flash Player Global Security Settings">FPGSS</a>';
if(!self._disabled){
self._writeDebug('soundManager: JS-&gt;Flash communication failed. Possible causes: flash/browser security restrictions ('+flashCPL+'), insufficient browser/plugin support, or .swf not found',2);
self._writeDebug('Verify that the movie path of <em>'+self.url+'</em> is correct (<a href="'+self.url+'" title="If you get a 404/not found, fix it!">test link</a>)',1);
if(self._didAppend){
if(!document.domain){
self._writeDebug('Loading from local file system? (document.domain appears to be null, this URL path may need to be added to \'trusted locations\' in '+FPGSS+')',1);
self._writeDebug('Possible security/domain restrictions ('+flashCPL+'), should work when served by http on same domain',1)}
}
self.disable()}
}
this._createMovie=function(smID,smURL){
if(self._didAppend&&self._appendSuccess)return false;
if(window.location.href.indexOf('debug=1')+1)self.debugMode=true;
self._didAppend=true;
var html=['<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="16" height="16" id="'+smID+'"><param name="movie" value="'+smURL+'"><param name="quality" value="high"><param name="allowScriptAccess" value="always" /></object>','<embed name="'+smID+'-embed" id="'+smID+'-embed" src="'+smURL+'" width="1" height="1" quality="high" allowScriptAccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"></embed>'];
var toggleElement='<div id="'+self.debugID+'-toggle" style="position:fixed;_position:absolute;right:0px;bottom:0px;_top:0px;width:1.2em;height:1.2em;line-height:1.2em;margin:2px;padding:0px;text-align:center;border:1px solid #999;cursor:pointer;background:#fff;color:#333;z-index:706" title="Toggle SM2 debug console" onclick="soundManager._toggleDebug()">-</div>';
var debugHTML='<div id="'+self.debugID+'" style="display:'+(self.debugMode&&((!self._hasConsole||!self.useConsole)||(self.useConsole&&self._hasConsole&&!self.consoleOnly))?'block':'none')+';opacity:0.85"></div>';
var appXHTML='soundManager._createMovie(): appendChild/innerHTML set failed. Serving application/xhtml+xml MIME type? Browser may be enforcing strict rules, not allowing write to innerHTML. (PS: If so, this means your commitment to XML validation is going to break stuff now, because this part isn\'t finished yet. ;))';
var sHTML='<div style="position:absolute;left:-256px;top:-256px;width:1px;height:1px" class="movieContainer">'+html[self.isIE?0:1]+'</div>'+(self.debugMode&&((!self._hasConsole||!self.useConsole)||(self.useConsole&&self._hasConsole&&!self.consoleOnly))&&!document.getElementById(self.debugID)?'x'+debugHTML+toggleElement:'');
var oTarget=(document.body?document.body:document.getElementsByTagName('div')[0]);
if(oTarget){
self.oMC=document.createElement('div');
self.oMC.className='movieContainer';
self.oMC.style.position='absolute';
self.oMC.style.left='-256px';
self.oMC.style.width='1px';
self.oMC.style.height='1px';
try{
oTarget.appendChild(self.oMC);
self.oMC.innerHTML=html[self.isIE?0:1];
self._appendSuccess=true}catch(e){
throw new Error(appXHTML)}
if(!document.getElementById(self.debugID)&&((!self._hasConsole||!self.useConsole)||(self.useConsole&&self._hasConsole&&!self.consoleOnly))){
var oDebug=document.createElement('div');
oDebug.id=self.debugID;
oDebug.style.display=(self.debugMode?'block':'none');
if(self.debugMode){
try{
var oD=document.createElement('div');
oTarget.appendChild(oD);
oD.innerHTML=toggleElement}catch(e){
throw new Error(appXHTML)}
}
oTarget.appendChild(oDebug)}
oTarget=null}
self._writeDebug('-- SoundManager 2 Version '+self.version.substr(1)+' --',1);
self._writeDebug('soundManager._createMovie(): trying to load <a href="'+smURL+'" title="Test this link (404=bad)">'+smURL+'</a>',1)}
this._writeDebug=function(sText,sType){
if(!self.debugMode)return false;
if(self._hasConsole&&self.useConsole){
console[self._debugLevels[sType]||'log'](sText);
if(self.useConsoleOnly)return true}
var sDID='soundmanager-debug';
try{
var o=document.getElementById(sDID);
if(!o)return false;
var p=document.createElement('div');
p.innerHTML=sText;
o.insertBefore(p,o.firstChild)}catch(e){
}
o=null}
this._writeDebug._protected=true;
this._writeDebugAlert=function(sText){alert(sText)}
if(window.location.href.indexOf('debug=alert')+1){
self.debugMode=true;
self._writeDebug=self._writeDebugAlert}
this._toggleDebug=function(){
var o=document.getElementById(self.debugID);
var oT=document.getElementById(self.debugID+'-toggle');
if(!o)return false;
if(self._debugOpen){
oT.innerHTML='+';
o.style.display='none'}else{
oT.innerHTML='-';
o.style.display='block'}
self._debugOpen=!self._debugOpen}
this._toggleDebug._protected=true;
this._debug=function(){
self._writeDebug('soundManager._debug(): sounds by id/url:',0);
for(var i=0,j=self.soundIDs.length;i<j;i++){
self._writeDebug(self.sounds[self.soundIDs[i]].sID+' | '+self.sounds[self.soundIDs[i]].url,0)}
}
this._mergeObjects=function(oMain,oAdd){
var o1=oMain;
var o2=(typeof oAdd=='undefined'?self.defaultOptions:oAdd);
for(var o in o2){
if(typeof o1[o]=='undefined')o1[o]=o2[o]}
return o1}
this.createMovie=function(sURL){
if(sURL)self.url=sURL;
self._initMovie()}
this._initMovie=function(){
if(self.o)return false;
self.o=self.getMovie(self.id);
if(!self.o){
self._createMovie(self.id,self.url);
self.o=self.getMovie(self.id)}
if(self.o){
self._writeDebug('soundManager._initMovie(): Got '+self.o.nodeName+' element ('+(self._didAppend?'created via JS':'static HTML')+')',1)}
}
this.initComplete=function(){
if(self._didInit)return false;
self._didInit=true;
self._writeDebug('-- SoundManager 2 '+(self._disabled?'failed to load':'loaded')+' ('+(self._disabled?'security/load error':'OK')+') --',1);
if(self._disabled){
self._writeDebug('soundManager.initComplete(): calling soundManager.onerror()',1);
self.onerror.apply(window);
return false}
self._writeDebug('soundManager.initComplete(): calling soundManager.onload()',1);
try{
self.onload.apply(window)}catch(e){
self._writeDebug('soundManager.onload() threw an exception: '+e.message,2);
throw e}
self._writeDebug('soundManager.onload() complete',1)}
this.init=function(){
if(window.removeEventListener){
window.removeEventListener('load',self.beginInit,false)}else if(window.detachEvent){
window.detachEvent('onload',self.beginInit)}
try{
self.o._externalInterfaceTest();
self._writeDebug('Flash ExternalInterface call (JS -&gt; Flash) succeeded.',1);
if(!self.allowPolling)self._writeDebug('Polling (whileloading/whileplaying support) is disabled.',1);
self.setPolling(true);
self.enabled=true}catch(e){
self._failSafely();
self.initComplete();
return false}
self.initComplete()}
this.beginDelayedInit=function(){
setTimeout(self.beginInit,200)}
this.beginInit=function(){
self.createMovie();
self._initMovie();
setTimeout(self.init,1000)}
this.destruct=function(){
if(self.isSafari){
for(var i=self.soundIDs.length;i--;){
if(self.sounds[self.soundIDs[i]].readyState==1)self.sounds[self.soundIDs[i]].unload()}
}
self.disable()}
}
function SMSound(oSM,oOptions){
var self=this;
var sm=oSM;
this.sID=oOptions.id;
this.url=oOptions.url;
this.options=sm._mergeObjects(oOptions);
this.id3={
}
self.resetProperties=function(bLoaded){
self.bytesLoaded=null;
self.bytesTotal=null;
self.position=null;
self.duration=null;
self.durationEstimate=null;
self.loaded=false;
self.loadSuccess=null;
self.playState=0;
self.paused=false;
self.readyState=0;
self.didBeforeFinish=false;
self.didJustBeforeFinish=false}
self.resetProperties();
this.load=function(oOptions){
self.loaded=false;
self.loadSuccess=null;
self.readyState=1;
self.playState=(oOptions.autoPlay||false);
var thisOptions=sm._mergeObjects(oOptions);
if(typeof thisOptions.url=='undefined')thisOptions.url=self.url;
try{
sm._writeDebug('loading '+thisOptions.url,1);
sm.o._load(self.sID,thisOptions.url,thisOptions.stream,thisOptions.autoPlay,thisOptions.whileloading?1:0)}catch(e){
sm._writeDebug('SMSound().load(): JS-&gt;Flash communication failed.',2)}
}
this.unload=function(){
sm._writeDebug('SMSound().unload(): "'+self.sID+'"');
self.setPosition(0);
sm.o._unload(self.sID,sm.nullURL);
self.resetProperties()}
this.play=function(oOptions){
if(!oOptions)oOptions={};
if(oOptions.onfinish)self.options.onfinish=oOptions.onfinish;
if(oOptions.onbeforefinish)self.options.onbeforefinish=oOptions.onbeforefinish;
if(oOptions.onjustbeforefinish)self.options.onjustbeforefinish=oOptions.onjustbeforefinish;
var thisOptions=sm._mergeObjects(oOptions);
if(self.playState==1){
var allowMulti=thisOptions.multiShot;
if(!allowMulti){
sm._writeDebug('SMSound.play(): "'+self.sID+'" already playing? (one-shot)',1);
return false}else{
sm._writeDebug('SMSound.play(): "'+self.sID+'" already playing (multi-shot)',1)}
}
if(!self.loaded){
if(self.readyState==0){
sm._writeDebug('SMSound.play(): .play() before load request. Attempting to load "'+self.sID+'"',1);
thisOptions.stream=true;
thisOptions.autoPlay=true;
self.load(thisOptions)}else if(self.readyState==2){
sm._writeDebug('SMSound.play(): Could not load "'+self.sID+'" - exiting',2);
return false}else{
sm._writeDebug('SMSound.play(): "'+self.sID+'" is loading - attempting to play..',1)}
}else{
sm._writeDebug('SMSound.play(): "'+self.sID+'"')}
if(self.paused){
self.resume()}else{
self.playState=1;
self.position=(thisOptions.offset||0);
if(thisOptions.onplay)thisOptions.onplay.apply(self);
self.setVolume(thisOptions.volume);
self.setPan(thisOptions.pan);
if(!thisOptions.autoPlay){
sm.o._start(self.sID,thisOptions.loop||1,self.position)}
}
}
this.start=this.play;
this.stop=function(bAll){
if(self.playState==1){
self.playState=0;
self.paused=false;
if(sm.defaultOptions.onstop)sm.defaultOptions.onstop.apply(self);
sm.o._stop(self.sID)}
}
this.setPosition=function(nMsecOffset){
sm.o._setPosition(self.sID,nMsecOffset/1000,self.paused||!self.playState)}
this.pause=function(){
if(self.paused)return false;
sm._writeDebug('SMSound.pause()');
self.paused=true;
sm.o._pause(self.sID)}
this.resume=function(){
if(!self.paused)return false;
sm._writeDebug('SMSound.resume()');
self.paused=false;
sm.o._pause(self.sID)}
this.togglePause=function(){
sm._writeDebug('SMSound.togglePause()');
if(!self.playState){
self.play({offset:self.position/1000});
return false}
if(self.paused){
sm._writeDebug('SMSound.togglePause(): resuming..');
self.resume()}else{
sm._writeDebug('SMSound.togglePause(): pausing..');
self.pause()}
}
this.setPan=function(nPan){
if(typeof nPan=='undefined')nPan=0;
sm.o._setPan(self.sID,nPan);
self.options.pan=nPan}
this.setVolume=function(nVol){
if(typeof nVol=='undefined')nVol=100;
sm.o._setVolume(self.sID,nVol);
self.options.volume=nVol}
this._whileloading=function(nBytesLoaded,nBytesTotal,nDuration){
self.bytesLoaded=nBytesLoaded;
self.bytesTotal=nBytesTotal;
self.duration=nDuration;
self.durationEstimate=parseInt((self.bytesTotal/self.bytesLoaded)*self.duration);
if(self.readyState!=3&&self.options.whileloading)self.options.whileloading.apply(self)}
this._onid3=function(oID3PropNames,oID3Data){
sm._writeDebug('SMSound()._onid3(): "'+this.sID+'" ID3 data received.');
var oData=[];
for(var i=0,j=oID3PropNames.length;i<j;i++){
oData[oID3PropNames[i]]=oID3Data[i]}
self.id3=sm._mergeObjects(self.id3,oData);
if(self.options.onid3)self.options.onid3.apply(self)}
this._whileplaying=function(nPosition){
if(isNaN(nPosition)||nPosition==null)return false;
self.position=nPosition;
if(self.playState==1){
if(self.options.whileplaying)self.options.whileplaying.apply(self);
if(self.loaded&&self.options.onbeforefinish&&self.options.onbeforefinishtime&&!self.didBeforeFinish&&self.duration-self.position<=self.options.onbeforefinishtime){
sm._writeDebug('duration-position &lt;= onbeforefinishtime: '+self.duration+' - '+self.position+' &lt= '+self.options.onbeforefinishtime+' ('+(self.duration-self.position)+')');
self._onbeforefinish()}
}
}
this._onload=function(bSuccess){
bSuccess=(bSuccess==1?true:false);
sm._writeDebug('SMSound._onload(): "'+self.sID+'"'+(bSuccess?' loaded.':' failed to load (or loaded from cache - weird bug) - [<a href="'+self.url+'">test URL</a>]'));
self.loaded=bSuccess;
self.loadSuccess=bSuccess;
self.readyState=bSuccess?3:2;
if(self.options.onload)self.options.onload.apply(self)}
this._onbeforefinish=function(){
if(!self.didBeforeFinish){
self.didBeforeFinish=true;
if(self.options.onbeforefinish)self.options.onbeforefinish.apply(self)}
}
this._onjustbeforefinish=function(msOffset){
if(!self.didJustBeforeFinish){
self.didJustBeforeFinish=true;
if(self.options.onjustbeforefinish)self.options.onjustbeforefinish.apply(self)}
}
this._onfinish=function(){
sm._writeDebug('SMSound._onfinish(): "'+self.sID+'"');
self.playState=0;
self.paused=false;
if(self.options.onfinish)self.options.onfinish.apply(self);
if(self.options.onbeforefinishcomplete)self.options.onbeforefinishcomplete.apply(self);
self.setPosition(0);
self.didBeforeFinish=false;
self.didJustBeforeFinish=false}
}
var soundManager=new SoundManager();
if(window.addEventListener){
window.addEventListener('load',soundManager.beginDelayedInit,false);
window.addEventListener('beforeunload',soundManager.destruct,false)}else if(window.attachEvent){
window.attachEvent('onload',soundManager.beginInit);
window.attachEvent('beforeunload',soundManager.destruct)}else{
soundManager.onerror();
soundManager.disable()}


/* plugins/auto/lecteur_multimedia/javascript/jscroller.js */

jQuery(document).ready(function(){
this.defaults={
scroller:{
interval:0,
refresh:300,
direction:"left",
speed:2,
id:"#scroller",
cont_id:"#scroller_container",
height:30,
width:160,
min_height:15,
min_width:80
}
}
var config=jQuery.extend(this.defaults);
var scroller=jQuery(config.scroller.id);
var scroller_cont=jQuery(config.scroller.cont_id);
detectSizes();
scroller_init();
function startScroll(){
if(!config.scroller.interval){
config.scroller.interval=setInterval(doScroll,config.scroller.refresh)}
}
function stopScroll(){
window.clearInterval(config.scroller.interval);
config.scroller.interval=0}
function detectSizes(){
config.scroller.width=((scroller.width())||config.scroller.width);
config.scroller.height=((scroller.height())||config.scroller.height);
config.scroller.min_height=((scroller_cont.height())||config.scroller.min_height);
config.scroller.min_width=((scroller_cont.width())||config.scroller.min_width)}
function scroller_init(){
jQuery("#scroller a").click(function(){
window.open(this.href);
return false});
scroller_cont.css('overflow','hidden');
if(!config.scroller.interval){
window.onfocus=startScroll;
startScroll();
if(jQuery.browser.msie&&!config.scroller.interval){window.focus}
}
}
function doScroll(){
var
p_top=Number((/[0-9-,.]+/.exec(scroller.css('top'))||0)),
p_left=Number((/[0-9-,.]+/.exec(scroller.css('left'))||0));
switch(config.scroller.direction){
case'up':
if(p_top<=-1*config.scroller.height){p_top=config.scroller.min_height}
scroller.css('top',p_top-config.scroller.speed+'px');
break;
case'right':
if(p_left>=config.scroller.min_width){p_left=-1*config.scroller.width}
scroller.css('left',p_left+config.scroller.speed+'px');
break;
case'left':
if(p_left<=-1*config.scroller.width){p_left=config.scroller.min_width}
scroller.css('left',p_left-config.scroller.speed+'px');
break;
case'down':
if(p_top>=config.scroller.min_height){p_top=-1*config.scroller.height}
scroller.css('top',p_top+config.scroller.speed+'px');
break}
}
});


/* plugins/auto/lecteur_multimedia/player_enclosure.js */

var track_index=0;
live_track='stop';
live_video='stop';
isVideoPlaying=false;
videoPause=false;
isPlaying=false;
soundManager.consoleOnly=true;
soundManager.debugMode=false;
var seljQ='@';
if(jQuery.fn.jquery>="1.3.0")
seljQ='';
jQuery(document).ready(function(){
lecteur_multimedia_init()});
function lecteur_multimedia_init(){
mp3Array=new Array();
mp3Titles=new Array();
flvArray=new Array();
flvTitles=new Array();
var aff=jQuery("a["+seljQ+"rel='enclosure']["+seljQ+"href$=mp3]").size();
jQuery("a["+seljQ+"rel='enclosure']["+seljQ+"href$=mp3]").each(
function(i){
mp3Array.push(this.href);
mp3Titles.push(jQuery(this).html());
jQuery(this).click(
function(e){
e.preventDefault();
player_play(i);
jQuery("#bouton_play").attr('src',DIR_PLUGIN_PLAYER+'skins/blogo/pause.png')}
);
if(jQuery(this).parent().attr("class"))
if(jQuery(this).parent().attr("class").split(" ").contains("play_"))
jQuery(this).parent().click(
function(e){
player_play(i);
jQuery("#bouton_play").attr('src',DIR_PLUGIN_PLAYER+'skins/blogo/pause.png')}
);
jQuery(this).before('<span class="play_"><img src="'+image_play+'"/></span>&nbsp;')}
);
jQuery("a["+seljQ+"rel='video']").each(
function(i){
flvArray.push(this.href);
flvTitles.push(jQuery(this).html());
jQuery(this).click(
function(e){
e.preventDefault();
video_play(i)}
)}
);
jQuery(".playliste").find("span").remove();
jQuery(".playliste li").hover(function(){
jQuery(this).addClass("over")},function(){
jQuery(this).removeClass("over")});
jQuery("span.play_").each(
function(i){
jQuery(this).toggle(
function(e){
if(live_track!=='stop'){
player_stop()}else{
player_play(i);
jQuery(this).html("<img src='"+image_pause+"'/>").addClass("play_on")}
},function(e){
player_stop()}
)}
);
jQuery('#bouton_play').click(function(e){
if(!isPlaying){
jQuery(this).attr('src',DIR_PLUGIN_PLAYER+'skins/blogo/pause.png');
if(live_track=='stop'){
player_play(0)}else{
player_togglePause()}
}else{
jQuery(this).attr('src',DIR_PLUGIN_PLAYER+'skins/blogo/play.png');
player_togglePause()}
});
jQuery("#scrollbar").click(function(e){
var x=Math.round((e.pageX-this.offsetLeft)/jQuery(this).width()*100);
if(live_track!=='stop'){
var mySound=soundManager.getSoundById('son_'+track_index);
var newposition=Math.round(mySound.durationEstimate*x/100);
soundManager.setPosition('son_'+track_index,newposition)}
if(isVideoPlaying){
var position=Math.round(myListener.duration*x/100);
getFlashObject().SetVariable("method:setPosition",position)}
});
jQuery("#now_playing").change(function(){
scroller_init()});
if(key_espace_stop){
jQuery(document).keypress(function(e)
{
key=(e.charCode)?e.charCode:e.keyCode;
if(
(key==32)
||(key==27)
){
if(isPlaying){
player_togglePause()}
if(isVideoPlaying){
}
}
})}
}
function player_play(i){
player_stop();
jQuery("#bouton_play").attr('src',DIR_PLUGIN_PLAYER+'skins/blogo/pause.png');
track_index=i;
live_track=i;
jQuery("span.play_:eq("+i+")").html("<img src='"+image_pause+"'/>").addClass("play_on");
jQuery(".play_:eq("+i+")").addClass("play_on");
if(soundManager.url!='undefined'){
player_creer_son(i);
file1=mp3Titles[track_index];
file1=file1.replace(/(%20)/g,' ');
file1=file1.substr(0,90);
file1=file1.replace(/(.mp3)/g,' ');
file1=file1.replace(/(_|-)/g,' ');
var taille=file1.length;
$large_s='auto';
jQuery("#now_playing").width($large_s);
jQuery("#scroller").width($large_s);
jQuery("#now_playing").html(file1);
var taille=jQuery("#scroller").width();
var min_taille=jQuery("#scroller_container").width();
jQuery.extend({scroller:{
interval:0,
refresh:300,
direction:"left",
speed:2,
id:"#scroller",
cont_id:"#scroller_container",
height:30,
width:taille,
min_height:15,
min_width:min_taille
}});
jQuery("#scroller").css("left",min_taille-taille);
soundManager.play('son_'+i,{volume:100});
isPlaying=true}else{
var playa='';
playa='<div id="musicplayer" style="">'+
'</div>';
jQuery('body').append(playa);
jQuery('div#musicplayer').css({position:"fixed",top:"10px",right:"10px",width:"0",height:"0"});
playlist='';
deb=0;
for(j=i;j<mp3Array.length;j++){
if(deb>0){
playlist=playlist+'|'+mp3Array[j]}else{
playlist=mp3Array[j];
deb=1}
}
jQuery("#musicplayer").html('<object '+
'type="application/x-shockwave-flash" '+
'data="'+musicplayerurl+'" '+
'width="1" height="1" align="middle">'+
'<param name="FlashVars" value="song_url='+playlist+'" />'+
'<param name="wmode" value="transparent" />'+
'<param name="movie" value="'+musicplayerurl+'" />'+
'</object>')}
}
function player_creer_son(i){
soundManager.createSound({
id:'son_'+i,url:mp3Array[i],
onfinish:function(){
player_play(i+1)
},
onid3:function(){
},
onload:function(){
},
whileloading:function(){
var timer=this.bytesLoaded/this.bytesTotal*100;
var minutes=Math.floor(this.durationEstimate/1000/60);
var secondes=Math.floor((this.durationEstimate-minutes*1000*60)/1000);
jQuery(".duration").html(minutes+"'"+secondes+"''");
jQuery("#loading").css({width:Math.round(timer)+"%"})},
onplay:function(){
jQuery("#loading").css("cursor","hand");
var minutes=Math.floor(this.durationEstimate/1000/60);
var secondes=Math.floor((this.durationEstimate-minutes*1000*60)/1000);
jQuery(".duration").html(minutes+"'"+secondes+"''")},
whileplaying:function(){
var minutes=Math.floor(this.position/1000/60);
var secondes=Math.floor((this.position-minutes*1000*60)/1000);
var timer2=this.position/this.durationEstimate*100;
jQuery("#position").css({width:Math.round(timer2)+"%"});
jQuery(".position").html(minutes+"'"+secondes+"''")},
'volume':100
})}
function player_stop(){
isPlaying=false;
jQuery("span.play_on").html('<img src="'+image_play+'"/>');
jQuery("span.play_on").removeClass("play_on");
live_track='stop';
jQuery(".playliste li.play_on").removeClass("play_on");
reset_boutons();
soundManager.destroySound("son_"+track_index);
soundManager.stopAll();
jQuery("#musicplayer").html('');
jQuery("#now_playing").html('')}
function unLoad(i){
soundManager.unload(i)}
function player_next(){
unLoad("son_"+track_index);
track_index++;
player_play(track_index)}
function player_prev(){
unLoad("son_"+track_index);
track_index--;
player_play(track_index)}
function player_togglePause(){
soundManager.togglePause('son_'+live_track);
if(isPlaying==true){
isPlaying=false}else{
isPlaying=true}
}
function reset_boutons(){
jQuery("#bouton_play").attr('src',DIR_PLUGIN_PLAYER+'skins/blogo/play.png');
jQuery(".position").html("0'00''");
jQuery("#position,#loading").width(0)}
function Player_init(url_player){
soundManager.onload=function(){
soundManager.createSound('aDrumSound',url_player)}
}
Array.prototype.contains=function(ele){
for(var i=0;i<this.length;i++){
if(this[i]==ele){
return true}
}
return false};
function video_play(i){
track_index=i;
live_video=i;
if(!videoPause){
video_stop();
getFlashObject().SetVariable("method:setUrl",flvArray[i])}
getFlashObject().SetVariable("method:play","");
videoPause=false;
jQuery(".playliste li:eq("+i+")").addClass("play_on")}
function video_pause(){
if(videoPause){videoPause=false}else{videoPause=true}
getFlashObject().SetVariable("method:pause","")}
function video_next(){
track_index++;
video_play(track_index)}
function video_prev(){
track_index--;
video_play(track_index)}
function video_stop(){
jQuery(".playliste li.play_on").removeClass("play_on");
getFlashObject().SetVariable("method:stop","");
getFlashObject().SetVariable("method:setUrl",videoNullUrl);
getFlashObject().SetVariable("method:play","");
getFlashObject().SetVariable("method:stop","");
getFlashObject().SetVariable("method:setPosition",0)}
function video_setVolume(){
var volume=document.getElementById("inputVolume").value;
getFlashObject().SetVariable("method:setVolume",volume)}
function lecteur_debug(){
var content=jQuery("#debug").html();
jQuery("#debug").html(content+"<br />live_track = "+live_track)};


/* plugins/auto/saisies/javascript/saisies.js */
$(function(){
saisies_fieldset_pliable();
onAjaxLoad(saisies_fieldset_pliable)});
function saisies_fieldset_pliable(){
$('li.fieldset.pliable')
.each(function(){
var li=$(this);
var ul=$(this).find('> fieldset > ul');
var h3=$(this).find('> fieldset > h3');
if(li.is('.plie'))
ul.hide();
h3
.unbind('click')
.click(
function(){
li.toggleClass('plie');
if(ul.is(':hidden'))
ul.show();
else
ul.hide()}
)})};


