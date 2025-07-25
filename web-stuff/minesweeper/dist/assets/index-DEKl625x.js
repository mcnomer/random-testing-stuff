(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();var fm={},Ci={};Ci.byteLength=ym;Ci.toByteArray=$m;Ci.fromByteArray=vm;var It=[],lt=[],mm=typeof Uint8Array<"u"?Uint8Array:Array,Xi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var nr=0,gm=Xi.length;nr<gm;++nr)It[nr]=Xi[nr],lt[Xi.charCodeAt(nr)]=nr;lt[45]=62;lt[95]=63;function yd(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");r===-1&&(r=t);var i=r===t?0:4-r%4;return[r,i]}function ym(e){var t=yd(e),r=t[0],i=t[1];return(r+i)*3/4-i}function wm(e,t,r){return(t+r)*3/4-r}function $m(e){var t,r=yd(e),i=r[0],n=r[1],s=new mm(wm(e,i,n)),a=0,l=n>0?i-4:i,d;for(d=0;d<l;d+=4)t=lt[e.charCodeAt(d)]<<18|lt[e.charCodeAt(d+1)]<<12|lt[e.charCodeAt(d+2)]<<6|lt[e.charCodeAt(d+3)],s[a++]=t>>16&255,s[a++]=t>>8&255,s[a++]=t&255;return n===2&&(t=lt[e.charCodeAt(d)]<<2|lt[e.charCodeAt(d+1)]>>4,s[a++]=t&255),n===1&&(t=lt[e.charCodeAt(d)]<<10|lt[e.charCodeAt(d+1)]<<4|lt[e.charCodeAt(d+2)]>>2,s[a++]=t>>8&255,s[a++]=t&255),s}function _m(e){return It[e>>18&63]+It[e>>12&63]+It[e>>6&63]+It[e&63]}function bm(e,t,r){for(var i,n=[],s=t;s<r;s+=3)i=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(e[s+2]&255),n.push(_m(i));return n.join("")}function vm(e){for(var t,r=e.length,i=r%3,n=[],s=16383,a=0,l=r-i;a<l;a+=s)n.push(bm(e,a,a+s>l?l:a+s));return i===1?(t=e[r-1],n.push(It[t>>2]+It[t<<4&63]+"==")):i===2&&(t=(e[r-2]<<8)+e[r-1],n.push(It[t>>10]+It[t>>4&63]+It[t<<2&63]+"=")),n.join("")}var na={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */na.read=function(e,t,r,i,n){var s,a,l=n*8-i-1,d=(1<<l)-1,p=d>>1,h=-7,g=r?n-1:0,u=r?-1:1,w=e[t+g];for(g+=u,s=w&(1<<-h)-1,w>>=-h,h+=l;h>0;s=s*256+e[t+g],g+=u,h-=8);for(a=s&(1<<-h)-1,s>>=-h,h+=i;h>0;a=a*256+e[t+g],g+=u,h-=8);if(s===0)s=1-p;else{if(s===d)return a?NaN:(w?-1:1)*(1/0);a=a+Math.pow(2,i),s=s-p}return(w?-1:1)*a*Math.pow(2,s-i)};na.write=function(e,t,r,i,n,s){var a,l,d,p=s*8-n-1,h=(1<<p)-1,g=h>>1,u=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,w=i?0:s-1,_=i?1:-1,b=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(l=isNaN(t)?1:0,a=h):(a=Math.floor(Math.log(t)/Math.LN2),t*(d=Math.pow(2,-a))<1&&(a--,d*=2),a+g>=1?t+=u/d:t+=u*Math.pow(2,1-g),t*d>=2&&(a++,d/=2),a+g>=h?(l=0,a=h):a+g>=1?(l=(t*d-1)*Math.pow(2,n),a=a+g):(l=t*Math.pow(2,g-1)*Math.pow(2,n),a=0));n>=8;e[r+w]=l&255,w+=_,l/=256,n-=8);for(a=a<<n|l,p+=n;p>0;e[r+w]=a&255,w+=_,a/=256,p-=8);e[r+w-_]|=b*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(e){const t=Ci,r=na,i=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=h,e.SlowBuffer=A,e.INSPECT_MAX_BYTES=50;const n=2147483647;e.kMaxLength=n;const{Uint8Array:s,ArrayBuffer:a,SharedArrayBuffer:l}=globalThis;h.TYPED_ARRAY_SUPPORT=d(),!h.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function d(){try{const v=new s(1),c={foo:function(){return 42}};return Object.setPrototypeOf(c,s.prototype),Object.setPrototypeOf(v,c),v.foo()===42}catch{return!1}}Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}});function p(v){if(v>n)throw new RangeError('The value "'+v+'" is invalid for option "size"');const c=new s(v);return Object.setPrototypeOf(c,h.prototype),c}function h(v,c,m){if(typeof v=="number"){if(typeof c=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return _(v)}return g(v,c,m)}h.poolSize=8192;function g(v,c,m){if(typeof v=="string")return b(v,c);if(a.isView(v))return I(v);if(v==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof v);if(at(v,a)||v&&at(v.buffer,a)||typeof l<"u"&&(at(v,l)||v&&at(v.buffer,l)))return S(v,c,m);if(typeof v=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const k=v.valueOf&&v.valueOf();if(k!=null&&k!==v)return h.from(k,c,m);const B=C(v);if(B)return B;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof v[Symbol.toPrimitive]=="function")return h.from(v[Symbol.toPrimitive]("string"),c,m);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof v)}h.from=function(v,c,m){return g(v,c,m)},Object.setPrototypeOf(h.prototype,s.prototype),Object.setPrototypeOf(h,s);function u(v){if(typeof v!="number")throw new TypeError('"size" argument must be of type number');if(v<0)throw new RangeError('The value "'+v+'" is invalid for option "size"')}function w(v,c,m){return u(v),v<=0?p(v):c!==void 0?typeof m=="string"?p(v).fill(c,m):p(v).fill(c):p(v)}h.alloc=function(v,c,m){return w(v,c,m)};function _(v){return u(v),p(v<0?0:T(v)|0)}h.allocUnsafe=function(v){return _(v)},h.allocUnsafeSlow=function(v){return _(v)};function b(v,c){if((typeof c!="string"||c==="")&&(c="utf8"),!h.isEncoding(c))throw new TypeError("Unknown encoding: "+c);const m=P(v,c)|0;let k=p(m);const B=k.write(v,c);return B!==m&&(k=k.slice(0,B)),k}function E(v){const c=v.length<0?0:T(v.length)|0,m=p(c);for(let k=0;k<c;k+=1)m[k]=v[k]&255;return m}function I(v){if(at(v,s)){const c=new s(v);return S(c.buffer,c.byteOffset,c.byteLength)}return E(v)}function S(v,c,m){if(c<0||v.byteLength<c)throw new RangeError('"offset" is outside of buffer bounds');if(v.byteLength<c+(m||0))throw new RangeError('"length" is outside of buffer bounds');let k;return c===void 0&&m===void 0?k=new s(v):m===void 0?k=new s(v,c):k=new s(v,c,m),Object.setPrototypeOf(k,h.prototype),k}function C(v){if(h.isBuffer(v)){const c=T(v.length)|0,m=p(c);return m.length===0||v.copy(m,0,0,c),m}if(v.length!==void 0)return typeof v.length!="number"||mr(v.length)?p(0):E(v);if(v.type==="Buffer"&&Array.isArray(v.data))return E(v.data)}function T(v){if(v>=n)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n.toString(16)+" bytes");return v|0}function A(v){return+v!=v&&(v=0),h.alloc(+v)}h.isBuffer=function(c){return c!=null&&c._isBuffer===!0&&c!==h.prototype},h.compare=function(c,m){if(at(c,s)&&(c=h.from(c,c.offset,c.byteLength)),at(m,s)&&(m=h.from(m,m.offset,m.byteLength)),!h.isBuffer(c)||!h.isBuffer(m))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(c===m)return 0;let k=c.length,B=m.length;for(let R=0,F=Math.min(k,B);R<F;++R)if(c[R]!==m[R]){k=c[R],B=m[R];break}return k<B?-1:B<k?1:0},h.isEncoding=function(c){switch(String(c).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(c,m){if(!Array.isArray(c))throw new TypeError('"list" argument must be an Array of Buffers');if(c.length===0)return h.alloc(0);let k;if(m===void 0)for(m=0,k=0;k<c.length;++k)m+=c[k].length;const B=h.allocUnsafe(m);let R=0;for(k=0;k<c.length;++k){let F=c[k];if(at(F,s))R+F.length>B.length?(h.isBuffer(F)||(F=h.from(F)),F.copy(B,R)):s.prototype.set.call(B,F,R);else if(h.isBuffer(F))F.copy(B,R);else throw new TypeError('"list" argument must be an Array of Buffers');R+=F.length}return B};function P(v,c){if(h.isBuffer(v))return v.length;if(a.isView(v)||at(v,a))return v.byteLength;if(typeof v!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof v);const m=v.length,k=arguments.length>2&&arguments[2]===!0;if(!k&&m===0)return 0;let B=!1;for(;;)switch(c){case"ascii":case"latin1":case"binary":return m;case"utf8":case"utf-8":return er(v).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return m*2;case"hex":return m>>>1;case"base64":return fr(v).length;default:if(B)return k?-1:er(v).length;c=(""+c).toLowerCase(),B=!0}}h.byteLength=P;function O(v,c,m){let k=!1;if((c===void 0||c<0)&&(c=0),c>this.length||((m===void 0||m>this.length)&&(m=this.length),m<=0)||(m>>>=0,c>>>=0,m<=c))return"";for(v||(v="utf8");;)switch(v){case"hex":return j(this,c,m);case"utf8":case"utf-8":return $e(this,c,m);case"ascii":return fe(this,c,m);case"latin1":case"binary":return D(this,c,m);case"base64":return de(this,c,m);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ne(this,c,m);default:if(k)throw new TypeError("Unknown encoding: "+v);v=(v+"").toLowerCase(),k=!0}}h.prototype._isBuffer=!0;function W(v,c,m){const k=v[c];v[c]=v[m],v[m]=k}h.prototype.swap16=function(){const c=this.length;if(c%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let m=0;m<c;m+=2)W(this,m,m+1);return this},h.prototype.swap32=function(){const c=this.length;if(c%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let m=0;m<c;m+=4)W(this,m,m+3),W(this,m+1,m+2);return this},h.prototype.swap64=function(){const c=this.length;if(c%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let m=0;m<c;m+=8)W(this,m,m+7),W(this,m+1,m+6),W(this,m+2,m+5),W(this,m+3,m+4);return this},h.prototype.toString=function(){const c=this.length;return c===0?"":arguments.length===0?$e(this,0,c):O.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(c){if(!h.isBuffer(c))throw new TypeError("Argument must be a Buffer");return this===c?!0:h.compare(this,c)===0},h.prototype.inspect=function(){let c="";const m=e.INSPECT_MAX_BYTES;return c=this.toString("hex",0,m).replace(/(.{2})/g,"$1 ").trim(),this.length>m&&(c+=" ... "),"<Buffer "+c+">"},i&&(h.prototype[i]=h.prototype.inspect),h.prototype.compare=function(c,m,k,B,R){if(at(c,s)&&(c=h.from(c,c.offset,c.byteLength)),!h.isBuffer(c))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof c);if(m===void 0&&(m=0),k===void 0&&(k=c?c.length:0),B===void 0&&(B=0),R===void 0&&(R=this.length),m<0||k>c.length||B<0||R>this.length)throw new RangeError("out of range index");if(B>=R&&m>=k)return 0;if(B>=R)return-1;if(m>=k)return 1;if(m>>>=0,k>>>=0,B>>>=0,R>>>=0,this===c)return 0;let F=R-B,ce=k-m;const be=Math.min(F,ce),Te=this.slice(B,R),Ae=c.slice(m,k);for(let Se=0;Se<be;++Se)if(Te[Se]!==Ae[Se]){F=Te[Se],ce=Ae[Se];break}return F<ce?-1:ce<F?1:0};function H(v,c,m,k,B){if(v.length===0)return-1;if(typeof m=="string"?(k=m,m=0):m>2147483647?m=2147483647:m<-2147483648&&(m=-2147483648),m=+m,mr(m)&&(m=B?0:v.length-1),m<0&&(m=v.length+m),m>=v.length){if(B)return-1;m=v.length-1}else if(m<0)if(B)m=0;else return-1;if(typeof c=="string"&&(c=h.from(c,k)),h.isBuffer(c))return c.length===0?-1:Z(v,c,m,k,B);if(typeof c=="number")return c=c&255,typeof s.prototype.indexOf=="function"?B?s.prototype.indexOf.call(v,c,m):s.prototype.lastIndexOf.call(v,c,m):Z(v,[c],m,k,B);throw new TypeError("val must be string, number or Buffer")}function Z(v,c,m,k,B){let R=1,F=v.length,ce=c.length;if(k!==void 0&&(k=String(k).toLowerCase(),k==="ucs2"||k==="ucs-2"||k==="utf16le"||k==="utf-16le")){if(v.length<2||c.length<2)return-1;R=2,F/=2,ce/=2,m/=2}function be(Ae,Se){return R===1?Ae[Se]:Ae.readUInt16BE(Se*R)}let Te;if(B){let Ae=-1;for(Te=m;Te<F;Te++)if(be(v,Te)===be(c,Ae===-1?0:Te-Ae)){if(Ae===-1&&(Ae=Te),Te-Ae+1===ce)return Ae*R}else Ae!==-1&&(Te-=Te-Ae),Ae=-1}else for(m+ce>F&&(m=F-ce),Te=m;Te>=0;Te--){let Ae=!0;for(let Se=0;Se<ce;Se++)if(be(v,Te+Se)!==be(c,Se)){Ae=!1;break}if(Ae)return Te}return-1}h.prototype.includes=function(c,m,k){return this.indexOf(c,m,k)!==-1},h.prototype.indexOf=function(c,m,k){return H(this,c,m,k,!0)},h.prototype.lastIndexOf=function(c,m,k){return H(this,c,m,k,!1)};function ue(v,c,m,k){m=Number(m)||0;const B=v.length-m;k?(k=Number(k),k>B&&(k=B)):k=B;const R=c.length;k>R/2&&(k=R/2);let F;for(F=0;F<k;++F){const ce=parseInt(c.substr(F*2,2),16);if(mr(ce))return F;v[m+F]=ce}return F}function le(v,c,m,k){return Ot(er(c,v.length-m),v,m,k)}function te(v,c,m,k){return Ot(Nr(c),v,m,k)}function we(v,c,m,k){return Ot(fr(c),v,m,k)}function xe(v,c,m,k){return Ot(Fr(c,v.length-m),v,m,k)}h.prototype.write=function(c,m,k,B){if(m===void 0)B="utf8",k=this.length,m=0;else if(k===void 0&&typeof m=="string")B=m,k=this.length,m=0;else if(isFinite(m))m=m>>>0,isFinite(k)?(k=k>>>0,B===void 0&&(B="utf8")):(B=k,k=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const R=this.length-m;if((k===void 0||k>R)&&(k=R),c.length>0&&(k<0||m<0)||m>this.length)throw new RangeError("Attempt to write outside buffer bounds");B||(B="utf8");let F=!1;for(;;)switch(B){case"hex":return ue(this,c,m,k);case"utf8":case"utf-8":return le(this,c,m,k);case"ascii":case"latin1":case"binary":return te(this,c,m,k);case"base64":return we(this,c,m,k);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return xe(this,c,m,k);default:if(F)throw new TypeError("Unknown encoding: "+B);B=(""+B).toLowerCase(),F=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function de(v,c,m){return c===0&&m===v.length?t.fromByteArray(v):t.fromByteArray(v.slice(c,m))}function $e(v,c,m){m=Math.min(v.length,m);const k=[];let B=c;for(;B<m;){const R=v[B];let F=null,ce=R>239?4:R>223?3:R>191?2:1;if(B+ce<=m){let be,Te,Ae,Se;switch(ce){case 1:R<128&&(F=R);break;case 2:be=v[B+1],(be&192)===128&&(Se=(R&31)<<6|be&63,Se>127&&(F=Se));break;case 3:be=v[B+1],Te=v[B+2],(be&192)===128&&(Te&192)===128&&(Se=(R&15)<<12|(be&63)<<6|Te&63,Se>2047&&(Se<55296||Se>57343)&&(F=Se));break;case 4:be=v[B+1],Te=v[B+2],Ae=v[B+3],(be&192)===128&&(Te&192)===128&&(Ae&192)===128&&(Se=(R&15)<<18|(be&63)<<12|(Te&63)<<6|Ae&63,Se>65535&&Se<1114112&&(F=Se))}}F===null?(F=65533,ce=1):F>65535&&(F-=65536,k.push(F>>>10&1023|55296),F=56320|F&1023),k.push(F),B+=ce}return ie(k)}const X=4096;function ie(v){const c=v.length;if(c<=X)return String.fromCharCode.apply(String,v);let m="",k=0;for(;k<c;)m+=String.fromCharCode.apply(String,v.slice(k,k+=X));return m}function fe(v,c,m){let k="";m=Math.min(v.length,m);for(let B=c;B<m;++B)k+=String.fromCharCode(v[B]&127);return k}function D(v,c,m){let k="";m=Math.min(v.length,m);for(let B=c;B<m;++B)k+=String.fromCharCode(v[B]);return k}function j(v,c,m){const k=v.length;(!c||c<0)&&(c=0),(!m||m<0||m>k)&&(m=k);let B="";for(let R=c;R<m;++R)B+=gr[v[R]];return B}function ne(v,c,m){const k=v.slice(c,m);let B="";for(let R=0;R<k.length-1;R+=2)B+=String.fromCharCode(k[R]+k[R+1]*256);return B}h.prototype.slice=function(c,m){const k=this.length;c=~~c,m=m===void 0?k:~~m,c<0?(c+=k,c<0&&(c=0)):c>k&&(c=k),m<0?(m+=k,m<0&&(m=0)):m>k&&(m=k),m<c&&(m=c);const B=this.subarray(c,m);return Object.setPrototypeOf(B,h.prototype),B};function se(v,c,m){if(v%1!==0||v<0)throw new RangeError("offset is not uint");if(v+c>m)throw new RangeError("Trying to access beyond buffer length")}h.prototype.readUintLE=h.prototype.readUIntLE=function(c,m,k){c=c>>>0,m=m>>>0,k||se(c,m,this.length);let B=this[c],R=1,F=0;for(;++F<m&&(R*=256);)B+=this[c+F]*R;return B},h.prototype.readUintBE=h.prototype.readUIntBE=function(c,m,k){c=c>>>0,m=m>>>0,k||se(c,m,this.length);let B=this[c+--m],R=1;for(;m>0&&(R*=256);)B+=this[c+--m]*R;return B},h.prototype.readUint8=h.prototype.readUInt8=function(c,m){return c=c>>>0,m||se(c,1,this.length),this[c]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(c,m){return c=c>>>0,m||se(c,2,this.length),this[c]|this[c+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(c,m){return c=c>>>0,m||se(c,2,this.length),this[c]<<8|this[c+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(c,m){return c=c>>>0,m||se(c,4,this.length),(this[c]|this[c+1]<<8|this[c+2]<<16)+this[c+3]*16777216},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(c,m){return c=c>>>0,m||se(c,4,this.length),this[c]*16777216+(this[c+1]<<16|this[c+2]<<8|this[c+3])},h.prototype.readBigUInt64LE=st(function(c){c=c>>>0,ct(c,"offset");const m=this[c],k=this[c+7];(m===void 0||k===void 0)&&nt(c,this.length-8);const B=m+this[++c]*2**8+this[++c]*2**16+this[++c]*2**24,R=this[++c]+this[++c]*2**8+this[++c]*2**16+k*2**24;return BigInt(B)+(BigInt(R)<<BigInt(32))}),h.prototype.readBigUInt64BE=st(function(c){c=c>>>0,ct(c,"offset");const m=this[c],k=this[c+7];(m===void 0||k===void 0)&&nt(c,this.length-8);const B=m*2**24+this[++c]*2**16+this[++c]*2**8+this[++c],R=this[++c]*2**24+this[++c]*2**16+this[++c]*2**8+k;return(BigInt(B)<<BigInt(32))+BigInt(R)}),h.prototype.readIntLE=function(c,m,k){c=c>>>0,m=m>>>0,k||se(c,m,this.length);let B=this[c],R=1,F=0;for(;++F<m&&(R*=256);)B+=this[c+F]*R;return R*=128,B>=R&&(B-=Math.pow(2,8*m)),B},h.prototype.readIntBE=function(c,m,k){c=c>>>0,m=m>>>0,k||se(c,m,this.length);let B=m,R=1,F=this[c+--B];for(;B>0&&(R*=256);)F+=this[c+--B]*R;return R*=128,F>=R&&(F-=Math.pow(2,8*m)),F},h.prototype.readInt8=function(c,m){return c=c>>>0,m||se(c,1,this.length),this[c]&128?(255-this[c]+1)*-1:this[c]},h.prototype.readInt16LE=function(c,m){c=c>>>0,m||se(c,2,this.length);const k=this[c]|this[c+1]<<8;return k&32768?k|4294901760:k},h.prototype.readInt16BE=function(c,m){c=c>>>0,m||se(c,2,this.length);const k=this[c+1]|this[c]<<8;return k&32768?k|4294901760:k},h.prototype.readInt32LE=function(c,m){return c=c>>>0,m||se(c,4,this.length),this[c]|this[c+1]<<8|this[c+2]<<16|this[c+3]<<24},h.prototype.readInt32BE=function(c,m){return c=c>>>0,m||se(c,4,this.length),this[c]<<24|this[c+1]<<16|this[c+2]<<8|this[c+3]},h.prototype.readBigInt64LE=st(function(c){c=c>>>0,ct(c,"offset");const m=this[c],k=this[c+7];(m===void 0||k===void 0)&&nt(c,this.length-8);const B=this[c+4]+this[c+5]*2**8+this[c+6]*2**16+(k<<24);return(BigInt(B)<<BigInt(32))+BigInt(m+this[++c]*2**8+this[++c]*2**16+this[++c]*2**24)}),h.prototype.readBigInt64BE=st(function(c){c=c>>>0,ct(c,"offset");const m=this[c],k=this[c+7];(m===void 0||k===void 0)&&nt(c,this.length-8);const B=(m<<24)+this[++c]*2**16+this[++c]*2**8+this[++c];return(BigInt(B)<<BigInt(32))+BigInt(this[++c]*2**24+this[++c]*2**16+this[++c]*2**8+k)}),h.prototype.readFloatLE=function(c,m){return c=c>>>0,m||se(c,4,this.length),r.read(this,c,!0,23,4)},h.prototype.readFloatBE=function(c,m){return c=c>>>0,m||se(c,4,this.length),r.read(this,c,!1,23,4)},h.prototype.readDoubleLE=function(c,m){return c=c>>>0,m||se(c,8,this.length),r.read(this,c,!0,52,8)},h.prototype.readDoubleBE=function(c,m){return c=c>>>0,m||se(c,8,this.length),r.read(this,c,!1,52,8)};function ge(v,c,m,k,B,R){if(!h.isBuffer(v))throw new TypeError('"buffer" argument must be a Buffer instance');if(c>B||c<R)throw new RangeError('"value" argument is out of bounds');if(m+k>v.length)throw new RangeError("Index out of range")}h.prototype.writeUintLE=h.prototype.writeUIntLE=function(c,m,k,B){if(c=+c,m=m>>>0,k=k>>>0,!B){const ce=Math.pow(2,8*k)-1;ge(this,c,m,k,ce,0)}let R=1,F=0;for(this[m]=c&255;++F<k&&(R*=256);)this[m+F]=c/R&255;return m+k},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(c,m,k,B){if(c=+c,m=m>>>0,k=k>>>0,!B){const ce=Math.pow(2,8*k)-1;ge(this,c,m,k,ce,0)}let R=k-1,F=1;for(this[m+R]=c&255;--R>=0&&(F*=256);)this[m+R]=c/F&255;return m+k},h.prototype.writeUint8=h.prototype.writeUInt8=function(c,m,k){return c=+c,m=m>>>0,k||ge(this,c,m,1,255,0),this[m]=c&255,m+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(c,m,k){return c=+c,m=m>>>0,k||ge(this,c,m,2,65535,0),this[m]=c&255,this[m+1]=c>>>8,m+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(c,m,k){return c=+c,m=m>>>0,k||ge(this,c,m,2,65535,0),this[m]=c>>>8,this[m+1]=c&255,m+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(c,m,k){return c=+c,m=m>>>0,k||ge(this,c,m,4,4294967295,0),this[m+3]=c>>>24,this[m+2]=c>>>16,this[m+1]=c>>>8,this[m]=c&255,m+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(c,m,k){return c=+c,m=m>>>0,k||ge(this,c,m,4,4294967295,0),this[m]=c>>>24,this[m+1]=c>>>16,this[m+2]=c>>>8,this[m+3]=c&255,m+4};function Be(v,c,m,k,B){ht(c,k,B,v,m,7);let R=Number(c&BigInt(4294967295));v[m++]=R,R=R>>8,v[m++]=R,R=R>>8,v[m++]=R,R=R>>8,v[m++]=R;let F=Number(c>>BigInt(32)&BigInt(4294967295));return v[m++]=F,F=F>>8,v[m++]=F,F=F>>8,v[m++]=F,F=F>>8,v[m++]=F,m}function pt(v,c,m,k,B){ht(c,k,B,v,m,7);let R=Number(c&BigInt(4294967295));v[m+7]=R,R=R>>8,v[m+6]=R,R=R>>8,v[m+5]=R,R=R>>8,v[m+4]=R;let F=Number(c>>BigInt(32)&BigInt(4294967295));return v[m+3]=F,F=F>>8,v[m+2]=F,F=F>>8,v[m+1]=F,F=F>>8,v[m]=F,m+8}h.prototype.writeBigUInt64LE=st(function(c,m=0){return Be(this,c,m,BigInt(0),BigInt("0xffffffffffffffff"))}),h.prototype.writeBigUInt64BE=st(function(c,m=0){return pt(this,c,m,BigInt(0),BigInt("0xffffffffffffffff"))}),h.prototype.writeIntLE=function(c,m,k,B){if(c=+c,m=m>>>0,!B){const be=Math.pow(2,8*k-1);ge(this,c,m,k,be-1,-be)}let R=0,F=1,ce=0;for(this[m]=c&255;++R<k&&(F*=256);)c<0&&ce===0&&this[m+R-1]!==0&&(ce=1),this[m+R]=(c/F>>0)-ce&255;return m+k},h.prototype.writeIntBE=function(c,m,k,B){if(c=+c,m=m>>>0,!B){const be=Math.pow(2,8*k-1);ge(this,c,m,k,be-1,-be)}let R=k-1,F=1,ce=0;for(this[m+R]=c&255;--R>=0&&(F*=256);)c<0&&ce===0&&this[m+R+1]!==0&&(ce=1),this[m+R]=(c/F>>0)-ce&255;return m+k},h.prototype.writeInt8=function(c,m,k){return c=+c,m=m>>>0,k||ge(this,c,m,1,127,-128),c<0&&(c=255+c+1),this[m]=c&255,m+1},h.prototype.writeInt16LE=function(c,m,k){return c=+c,m=m>>>0,k||ge(this,c,m,2,32767,-32768),this[m]=c&255,this[m+1]=c>>>8,m+2},h.prototype.writeInt16BE=function(c,m,k){return c=+c,m=m>>>0,k||ge(this,c,m,2,32767,-32768),this[m]=c>>>8,this[m+1]=c&255,m+2},h.prototype.writeInt32LE=function(c,m,k){return c=+c,m=m>>>0,k||ge(this,c,m,4,2147483647,-2147483648),this[m]=c&255,this[m+1]=c>>>8,this[m+2]=c>>>16,this[m+3]=c>>>24,m+4},h.prototype.writeInt32BE=function(c,m,k){return c=+c,m=m>>>0,k||ge(this,c,m,4,2147483647,-2147483648),c<0&&(c=4294967295+c+1),this[m]=c>>>24,this[m+1]=c>>>16,this[m+2]=c>>>8,this[m+3]=c&255,m+4},h.prototype.writeBigInt64LE=st(function(c,m=0){return Be(this,c,m,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),h.prototype.writeBigInt64BE=st(function(c,m=0){return pt(this,c,m,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Gt(v,c,m,k,B,R){if(m+k>v.length)throw new RangeError("Index out of range");if(m<0)throw new RangeError("Index out of range")}function qe(v,c,m,k,B){return c=+c,m=m>>>0,B||Gt(v,c,m,4),r.write(v,c,m,k,23,4),m+4}h.prototype.writeFloatLE=function(c,m,k){return qe(this,c,m,!0,k)},h.prototype.writeFloatBE=function(c,m,k){return qe(this,c,m,!1,k)};function De(v,c,m,k,B){return c=+c,m=m>>>0,B||Gt(v,c,m,8),r.write(v,c,m,k,52,8),m+8}h.prototype.writeDoubleLE=function(c,m,k){return De(this,c,m,!0,k)},h.prototype.writeDoubleBE=function(c,m,k){return De(this,c,m,!1,k)},h.prototype.copy=function(c,m,k,B){if(!h.isBuffer(c))throw new TypeError("argument should be a Buffer");if(k||(k=0),!B&&B!==0&&(B=this.length),m>=c.length&&(m=c.length),m||(m=0),B>0&&B<k&&(B=k),B===k||c.length===0||this.length===0)return 0;if(m<0)throw new RangeError("targetStart out of bounds");if(k<0||k>=this.length)throw new RangeError("Index out of range");if(B<0)throw new RangeError("sourceEnd out of bounds");B>this.length&&(B=this.length),c.length-m<B-k&&(B=c.length-m+k);const R=B-k;return this===c&&typeof s.prototype.copyWithin=="function"?this.copyWithin(m,k,B):s.prototype.set.call(c,this.subarray(k,B),m),R},h.prototype.fill=function(c,m,k,B){if(typeof c=="string"){if(typeof m=="string"?(B=m,m=0,k=this.length):typeof k=="string"&&(B=k,k=this.length),B!==void 0&&typeof B!="string")throw new TypeError("encoding must be a string");if(typeof B=="string"&&!h.isEncoding(B))throw new TypeError("Unknown encoding: "+B);if(c.length===1){const F=c.charCodeAt(0);(B==="utf8"&&F<128||B==="latin1")&&(c=F)}}else typeof c=="number"?c=c&255:typeof c=="boolean"&&(c=Number(c));if(m<0||this.length<m||this.length<k)throw new RangeError("Out of range index");if(k<=m)return this;m=m>>>0,k=k===void 0?this.length:k>>>0,c||(c=0);let R;if(typeof c=="number")for(R=m;R<k;++R)this[R]=c;else{const F=h.isBuffer(c)?c:h.from(c,B),ce=F.length;if(ce===0)throw new TypeError('The value "'+c+'" is invalid for argument "value"');for(R=0;R<k-m;++R)this[R+m]=F[R%ce]}return this};const Je={};function Oe(v,c,m){Je[v]=class extends m{constructor(){super(),Object.defineProperty(this,"message",{value:c.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${v}]`,this.stack,delete this.name}get code(){return v}set code(B){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:B,writable:!0})}toString(){return`${this.name} [${v}]: ${this.message}`}}}Oe("ERR_BUFFER_OUT_OF_BOUNDS",function(v){return v?`${v} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Oe("ERR_INVALID_ARG_TYPE",function(v,c){return`The "${v}" argument must be of type number. Received type ${typeof c}`},TypeError),Oe("ERR_OUT_OF_RANGE",function(v,c,m){let k=`The value of "${v}" is out of range.`,B=m;return Number.isInteger(m)&&Math.abs(m)>2**32?B=Fe(String(m)):typeof m=="bigint"&&(B=String(m),(m>BigInt(2)**BigInt(32)||m<-(BigInt(2)**BigInt(32)))&&(B=Fe(B)),B+="n"),k+=` It must be ${c}. Received ${B}`,k},RangeError);function Fe(v){let c="",m=v.length;const k=v[0]==="-"?1:0;for(;m>=k+4;m-=3)c=`_${v.slice(m-3,m)}${c}`;return`${v.slice(0,m)}${c}`}function et(v,c,m){ct(c,"offset"),(v[c]===void 0||v[c+m]===void 0)&&nt(c,v.length-(m+1))}function ht(v,c,m,k,B,R){if(v>m||v<c){const F=typeof c=="bigint"?"n":"";let ce;throw c===0||c===BigInt(0)?ce=`>= 0${F} and < 2${F} ** ${(R+1)*8}${F}`:ce=`>= -(2${F} ** ${(R+1)*8-1}${F}) and < 2 ** ${(R+1)*8-1}${F}`,new Je.ERR_OUT_OF_RANGE("value",ce,v)}et(k,B,R)}function ct(v,c){if(typeof v!="number")throw new Je.ERR_INVALID_ARG_TYPE(c,"number",v)}function nt(v,c,m){throw Math.floor(v)!==v?(ct(v,m),new Je.ERR_OUT_OF_RANGE("offset","an integer",v)):c<0?new Je.ERR_BUFFER_OUT_OF_BOUNDS:new Je.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${c}`,v)}const cr=/[^+/0-9A-Za-z-_]/g;function Ur(v){if(v=v.split("=")[0],v=v.trim().replace(cr,""),v.length<2)return"";for(;v.length%4!==0;)v=v+"=";return v}function er(v,c){c=c||1/0;let m;const k=v.length;let B=null;const R=[];for(let F=0;F<k;++F){if(m=v.charCodeAt(F),m>55295&&m<57344){if(!B){if(m>56319){(c-=3)>-1&&R.push(239,191,189);continue}else if(F+1===k){(c-=3)>-1&&R.push(239,191,189);continue}B=m;continue}if(m<56320){(c-=3)>-1&&R.push(239,191,189),B=m;continue}m=(B-55296<<10|m-56320)+65536}else B&&(c-=3)>-1&&R.push(239,191,189);if(B=null,m<128){if((c-=1)<0)break;R.push(m)}else if(m<2048){if((c-=2)<0)break;R.push(m>>6|192,m&63|128)}else if(m<65536){if((c-=3)<0)break;R.push(m>>12|224,m>>6&63|128,m&63|128)}else if(m<1114112){if((c-=4)<0)break;R.push(m>>18|240,m>>12&63|128,m>>6&63|128,m&63|128)}else throw new Error("Invalid code point")}return R}function Nr(v){const c=[];for(let m=0;m<v.length;++m)c.push(v.charCodeAt(m)&255);return c}function Fr(v,c){let m,k,B;const R=[];for(let F=0;F<v.length&&!((c-=2)<0);++F)m=v.charCodeAt(F),k=m>>8,B=m%256,R.push(B),R.push(k);return R}function fr(v){return t.toByteArray(Ur(v))}function Ot(v,c,m,k){let B;for(B=0;B<k&&!(B+m>=c.length||B>=v.length);++B)c[B+m]=v[B];return B}function at(v,c){return v instanceof c||v!=null&&v.constructor!=null&&v.constructor.name!=null&&v.constructor.name===c.name}function mr(v){return v!==v}const gr=function(){const v="0123456789abcdef",c=new Array(256);for(let m=0;m<16;++m){const k=m*16;for(let B=0;B<16;++B)c[k+B]=v[m]+v[B]}return c}();function st(v){return typeof BigInt>"u"?Wr:v}function Wr(){throw new Error("BigInt not supported")}})(fm);/*!
 * ONNX Runtime Web v1.20.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var aa=Object.defineProperty,xm=Object.getOwnPropertyDescriptor,Sm=Object.getOwnPropertyNames,Em=Object.prototype.hasOwnProperty,Im=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),V=(e,t)=>()=>(e&&(t=e(e=0)),t),Pr=(e,t)=>{for(var r in t)aa(e,r,{get:t[r],enumerable:!0})},km=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Sm(t))!Em.call(e,n)&&n!==r&&aa(e,n,{get:()=>t[n],enumerable:!(i=xm(t,n))||i.enumerable});return e},fi=e=>km(aa({},"__esModule",{value:!0}),e),wr,Dt,or,Hs,sa,oa=V(()=>{wr=new Map,Dt=[],or=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=wr.get(e);if(i===void 0)wr.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=Dt.indexOf(e);n!==-1&&Dt.splice(n,1);for(let s=0;s<Dt.length;s++)if(wr.get(Dt[s]).priority<=r){Dt.splice(s,0,e);return}Dt.push(e)}return}throw new TypeError("not a valid backend")},Hs=async e=>{let t=wr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},sa=async e=>{let t=e.executionProviders||[],r=t.map(d=>typeof d=="string"?d:d.name),i=r.length===0?Dt:r,n,s=[],a=new Set;for(let d of i){let p=await Hs(d);typeof p=="string"?s.push({name:d,err:p}):(n||(n=p),n===p&&a.add(d))}if(!n)throw new Error(`no available backend found. ERR: ${s.map(d=>`[${d.name}] ${d.err}`).join(", ")}`);for(let{name:d,err:p}of s)r.includes(d)&&console.warn(`removing requested execution provider "${d}" from session options because it is not available: ${p}`);let l=t.filter(d=>a.has(typeof d=="string"?d:d.name));return[n,new Proxy(e,{get:(d,p)=>p==="executionProviders"?l:Reflect.get(d,p)})]}}),Tm=V(()=>{oa()}),wd,Cm=V(()=>{wd="1.20.0"}),Qi,dt,$d=V(()=>{Cm(),Qi="warning",dt={wasm:{},webgl:{},webgpu:{},versions:{common:wd},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Qi=e}},get logLevel(){return Qi}},Object.defineProperty(dt,"logLevel",{enumerable:!0})}),ze,Am=V(()=>{$d(),ze=dt}),_d,bd,zm=V(()=>{_d=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let n,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],s=e.dims[3]):(n=e.dims[3],s=e.dims[2]);let a=(t==null?void 0:t.format)!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,p;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],0],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?p=[0,0,0,0]:typeof l.bias=="number"?p=[l.bias,l.bias,l.bias,l.bias]:(p=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(p[3]=l.bias[3]));let h=s*n,g=0,u=h,w=h*2,_=-1;a==="RGBA"?(g=0,u=h,w=h*2,_=h*3):a==="RGB"?(g=0,u=h,w=h*2):a==="RBG"&&(g=0,w=h,u=h*2);for(let b=0;b<s;b++)for(let E=0;E<n;E++){let I=(e.data[g++]-p[0])*d[0],S=(e.data[u++]-p[1])*d[1],C=(e.data[w++]-p[2])*d[2],T=_===-1?255:(e.data[_++]-p[3])*d[3];i.fillStyle="rgba("+I+","+S+","+C+","+T+")",i.fillRect(E,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},bd=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let n,s,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],s=e.dims[1],a=e.dims[3]):(n=e.dims[3],s=e.dims[2],a=e.dims[1]);let l=t!==void 0&&t.format!==void 0?t.format:"RGB",d=t==null?void 0:t.norm,p,h;d===void 0||d.mean===void 0?p=[255,255,255,255]:typeof d.mean=="number"?p=[d.mean,d.mean,d.mean,d.mean]:(p=[d.mean[0],d.mean[1],d.mean[2],255],d.mean[3]!==void 0&&(p[3]=d.mean[3])),d===void 0||d.bias===void 0?h=[0,0,0,0]:typeof d.bias=="number"?h=[d.bias,d.bias,d.bias,d.bias]:(h=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(h[3]=d.bias[3]));let g=s*n;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let u=4,w=0,_=1,b=2,E=3,I=0,S=g,C=g*2,T=-1;l==="RGBA"?(I=0,S=g,C=g*2,T=g*3):l==="RGB"?(I=0,S=g,C=g*2):l==="RBG"&&(I=0,C=g,S=g*2),i=r.createImageData(n,s);for(let A=0;A<s*n;w+=u,_+=u,b+=u,E+=u,A++)i.data[w]=(e.data[I++]-h[0])*p[0],i.data[_]=(e.data[S++]-h[1])*p[1],i.data[b]=(e.data[C++]-h[2])*p[2],i.data[E]=T===-1?255:(e.data[T++]-h[3])*p[3]}else throw new Error("Can not access image data");return i}}),ei,vd,xd,Sd,Ed,Id,Bm=V(()=>{ua(),ei=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,n=t.norm??{mean:255,bias:0},s,a;typeof n.mean=="number"?s=[n.mean,n.mean,n.mean,n.mean]:s=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?a=[n.bias,n.bias,n.bias,n.bias]:a=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let l=t.format!==void 0?t.format:"RGBA",d=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",p=r*i,h=d==="RGBA"?new Float32Array(p*4):new Float32Array(p*3),g=4,u=0,w=1,_=2,b=3,E=0,I=p,S=p*2,C=-1;l==="RGB"&&(g=3,u=0,w=1,_=2,b=-1),d==="RGBA"?C=p*3:d==="RBG"?(E=0,S=p,I=p*2):d==="BGR"&&(S=0,I=p,E=p*2);for(let T=0;T<p;T++,u+=g,_+=g,w+=g,b+=g)h[E++]=(e[u]+a[0])/s[0],h[I++]=(e[w]+a[1])/s[1],h[S++]=(e[_]+a[2])/s[2],C!==-1&&b!==-1&&(h[C++]=(e[b]+a[3])/s[3]);return d==="RGBA"?new rt("float32",h,[1,4,r,i]):new rt("float32",h,[1,3,r,i])},vd=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",a,l=t??{},d=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},p=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(r){let h=d();h.width=e.width,h.height=e.height;let g=p(h);if(g!=null){let u=e.height,w=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(u=t.resizedHeight,w=t.resizedWidth),t!==void 0){if(l=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");l.tensorFormat="RGBA",l.height=u,l.width=w}else l.tensorFormat="RGBA",l.height=u,l.width=w;g.drawImage(e,0,0),a=g.getImageData(0,0,w,u).data}else throw new Error("Can not access image data")}else if(i){let h,g;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,g=t.resizedWidth):(h=e.height,g=e.width),t!==void 0&&(l=t),l.format="RGBA",l.height=h,l.width=g,t!==void 0){let u=d();u.width=g,u.height=h;let w=p(u);if(w!=null)w.putImageData(e,0,0),a=w.getImageData(0,0,g,h).data;else throw new Error("Can not access image data")}else a=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=d();h.width=e.width,h.height=e.height;let g=p(h);if(g!=null){let u=e.height,w=e.width;return g.drawImage(e,0,0,w,u),a=g.getImageData(0,0,w,u).data,l.height=u,l.width=w,ei(a,l)}else throw new Error("Can not access image data")}else{if(s)return new Promise((h,g)=>{let u=d(),w=p(u);if(!e||!w)return g();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{u.width=_.width,u.height=_.height,w.drawImage(_,0,0,u.width,u.height);let b=w.getImageData(0,0,u.width,u.height);l.height=u.height,l.width=u.width,h(ei(b.data,l))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return ei(a,l);throw new Error("Input data provided is not supported - aborted tensor creation")},xd=(e,t)=>{let{width:r,height:i,download:n,dispose:s}=t,a=[1,i,r,4];return new rt({location:"texture",type:"float32",texture:e,dims:a,download:n,dispose:s})},Sd=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:s}=t;return new rt({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:n,dispose:s})},Ed=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:s}=t;return new rt({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:n,dispose:s})},Id=(e,t,r)=>new rt({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Zt,kr,Ji,kd,Om=V(()=>{Zt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),kr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ji=!1,kd=()=>{if(!Ji){Ji=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=typeof Float16Array<"u"&&Float16Array.from;e&&(Zt.set("int64",BigInt64Array),kr.set(BigInt64Array,"int64")),t&&(Zt.set("uint64",BigUint64Array),kr.set(BigUint64Array,"uint64")),r?(Zt.set("float16",Float16Array),kr.set(Float16Array,"float16")):Zt.set("float16",Uint16Array)}}}),Td,Cd,Rm=V(()=>{ua(),Td=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},Cd=(e,t)=>{switch(e.location){case"cpu":return new rt(e.type,e.data,t);case"cpu-pinned":return new rt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new rt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new rt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new rt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),rt,ua=V(()=>{zm(),Bm(),Om(),Rm(),rt=class{constructor(e,t,r){kd();let i,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,n=e.dims,e.location){case"cpu-pinned":{let a=Zt.get(i);if(!a)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,l;if(typeof e=="string")if(i=e,l=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let d=Zt.get(e);if(d===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&d===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${d.name} as data.`);e==="uint64"||e==="int64"?a=d.from(t,BigInt):a=d.from(t)}else if(t instanceof d)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${i} tensor's data must be type of ${d}`)}else if(l=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let d=typeof e[0];if(d==="string")i="string",a=e;else if(d==="boolean")i="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${d}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",a=Uint8Array.from(e);else{let d=kr.get(e.constructor);if(d===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=d,a=e}if(l===void 0)l=[a.length];else if(!Array.isArray(l))throw new TypeError("A tensor's dims must be a number array");n=l,this.cpuData=a,this.dataLocation="cpu"}let s=Td(n);if(this.cpuData&&s!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=n,this.size=s}static async fromImage(e,t){return vd(e,t)}static fromTexture(e,t){return xd(e,t)}static fromGpuBuffer(e,t){return Sd(e,t)}static fromMLTensor(e,t){return Ed(e,t)}static fromPinnedBuffer(e,t,r){return Id(e,t,r)}toDataURL(e){return _d(this,e)}toImageData(e){return bd(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Cd(this,e)}}}),Ye,la=V(()=>{ua(),Ye=rt}),mi,en,Tt,$t,Ad=V(()=>{$d(),mi=(e,t)=>{(typeof dt.trace>"u"?!dt.wasm.trace:!dt.trace)||console.timeStamp(`${e}::ORT::${t}`)},en=(e,t)=>{var n;let r=((n=new Error().stack)==null?void 0:n.split(/\r\n|\r|\n/g))||[],i=!1;for(let s=0;s<r.length;s++){if(i&&!r[s].includes("TRACE_FUNC")){let a=`FUNC_${e}::${r[s].trim().split(" ")[1]}`;t&&(a+=`::${t}`),mi("CPU",a);return}r[s].includes("TRACE_FUNC")&&(i=!0)}},Tt=e=>{(typeof dt.trace>"u"?!dt.wasm.trace:!dt.trace)||en("BEGIN",e)},$t=e=>{(typeof dt.trace>"u"?!dt.wasm.trace:!dt.trace)||en("END",e)}}),zd,Mm=V(()=>{oa(),la(),Ad(),zd=class Bd{constructor(t){this.handler=t}async run(t,r,i){Tt();let n={},s={};if(typeof t!="object"||t===null||t instanceof Ye||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Ye)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let p of r){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);n[p]=null}if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,h=Object.getOwnPropertyNames(r);for(let g of this.outputNames)if(h.indexOf(g)!==-1){let u=r[g];(u===null||u instanceof Ye)&&(p=!0,a=!1,n[g]=u)}if(p){if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of this.inputNames)if(typeof t[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(a)for(let p of this.outputNames)n[p]=null;let l=await this.handler.run(t,n,s),d={};for(let p in l)if(Object.hasOwnProperty.call(l,p)){let h=l[p];h instanceof Ye?d[p]=h:d[p]=new Ye(h.type,h.data,h.dims)}return $t(),d}async release(){return this.handler.dispose()}static async create(t,r,i,n){Tt();let s,a={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,g=0,u=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(g=r,!Number.isSafeInteger(g))throw new RangeError("'byteOffset' must be an integer.");if(g<0||g>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(u=t.byteLength-g,typeof i=="number"){if(u=i,!Number.isSafeInteger(u))throw new RangeError("'byteLength' must be an integer.");if(u<=0||g+u>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-g}].`);if(typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(h,g,u)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,d]=await sa(a),p=await l.createInferenceSessionHandler(s,d);return $t(),new Bd(p)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),da,Pm=V(()=>{Mm(),da=zd}),Dm=V(()=>{}),Um=V(()=>{}),Nm=V(()=>{}),Fm=V(()=>{}),Ks,Od,Wm=V(()=>{oa(),la(),Ks="Training backend could not be resolved. Make sure you're using the correct configuration & WebAssembly files.",Od=class Rd{constructor(t,r,i){this.handler=t,this.hasOptimizerModel=r,this.hasEvalModel=i}get trainingInputNames(){return this.handler.inputNames}get trainingOutputNames(){return this.handler.outputNames}get evalInputNames(){if(this.hasEvalModel)return this.handler.evalInputNames;throw new Error("This training session has no evalModel loaded.")}get evalOutputNames(){if(this.hasEvalModel)return this.handler.evalOutputNames;throw new Error("This training session has no evalModel loaded.")}static async create(t,r){let i=t.evalModel||"",n=t.optimizerModel||"",s=r||{},[a,l]=await sa(s);if(a.createTrainingSessionHandler){let d=await a.createTrainingSessionHandler(t.checkpointState,t.trainModel,i,n,l);return new Rd(d,!!t.optimizerModel,!!t.evalModel)}else throw new Error(Ks)}typeNarrowingForRunStep(t,r,i,n,s){let a={},l={};if(typeof i!="object"||i===null||i instanceof Ye||Array.isArray(i))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let d=!0;if(typeof n=="object"){if(n===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(n instanceof Ye)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(n)){if(n.length===0)throw new TypeError("'fetches' cannot be an empty array.");d=!1;for(let p of n){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(r.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);a[p]=null}if(typeof s=="object"&&s!==null)l=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,h=Object.getOwnPropertyNames(n);for(let g of r)if(h.indexOf(g)!==-1){let u=n[g];(u===null||u instanceof Ye)&&(p=!0,d=!1,a[g]=u)}if(p){if(typeof s=="object"&&s!==null)l=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else l=n}}else if(typeof n<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of t)if(typeof i[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(d)for(let p of r)a[p]=null;return[a,l]}convertHandlerReturnTypeToMapOfTensors(t){let r={};for(let i in t)if(Object.hasOwnProperty.call(t,i)){let n=t[i];n instanceof Ye?r[i]=n:r[i]=new Ye(n.type,n.data,n.dims)}return r}async lazyResetGrad(){await this.handler.lazyResetGrad()}async runTrainStep(t,r,i){let[n,s]=this.typeNarrowingForRunStep(this.trainingInputNames,this.trainingOutputNames,t,r,i),a=await this.handler.runTrainStep(t,n,s);return this.convertHandlerReturnTypeToMapOfTensors(a)}async runOptimizerStep(t){if(this.hasOptimizerModel)await this.handler.runOptimizerStep(t||{});else throw new Error("This TrainingSession has no OptimizerModel loaded.")}async runEvalStep(t,r,i){if(this.hasEvalModel){let[n,s]=this.typeNarrowingForRunStep(this.evalInputNames,this.evalOutputNames,t,r,i),a=await this.handler.runEvalStep(t,n,s);return this.convertHandlerReturnTypeToMapOfTensors(a)}else throw new Error("This TrainingSession has no EvalModel loaded.")}async getParametersSize(t=!0){return this.handler.getParametersSize(t)}async loadParametersBuffer(t,r=!0){let i=await this.getParametersSize(r);if(t.length!==4*i)throw new Error("Size of the buffer passed into loadParametersBuffer must match the number of parameters in the model. Please use getParametersSize method to check.");return this.handler.loadParametersBuffer(t,r)}async getContiguousParameters(t=!0){return this.handler.getContiguousParameters(t)}async release(){return this.handler.dispose()}}}),Md,Lm=V(()=>{Wm(),Md=Od}),qm={};Pr(qm,{InferenceSession:()=>da,TRACE:()=>mi,TRACE_FUNC_BEGIN:()=>Tt,TRACE_FUNC_END:()=>$t,Tensor:()=>Ye,TrainingSession:()=>Md,env:()=>ze,registerBackend:()=>or});var vt=V(()=>{Tm(),Am(),Pm(),la(),Dm(),Um(),Ad(),Nm(),Fm(),Lm()}),pa=V(()=>{}),Pd={};Pr(Pd,{default:()=>Dd});var tn,rn,Dd,Vm=V(()=>{var e;Oc(),Jt(),Ai(),tn="ort-wasm-proxy-worker",rn=((e=globalThis.self)==null?void 0:e.name)===tn,rn&&(self.onmessage=t=>{let{type:r,in:i}=t.data;try{switch(r){case"init-wasm":ha(i.wasm).then(()=>{Ca(i).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})})},n=>{postMessage({type:r,err:n})});break;case"init-ep":{let{epName:n,env:s}=i;Aa(s,n).then(()=>{postMessage({type:r})},a=>{postMessage({type:r,err:a})});break}case"copy-from":{let{buffer:n}=i,s=vi(n);postMessage({type:r,out:s});break}case"create":{let{model:n,options:s}=i;za(n,s).then(a=>{postMessage({type:r,out:a})},a=>{postMessage({type:r,err:a})});break}case"release":Ba(i),postMessage({type:r});break;case"run":{let{sessionId:n,inputIndices:s,inputs:a,outputIndices:l,options:d}=i;Oa(n,s,a,l,new Array(l.length).fill(null),d).then(p=>{p.some(h=>h[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:p},Ma([...a,...p]))},p=>{postMessage({type:r,err:p})});break}case"end-profiling":Ra(i),postMessage({type:r});break;default:}}catch(n){postMessage({type:r,err:n})}}),Dd=rn?null:t=>new Worker(t??sr,{type:"module",name:tn})}),Ud={};Pr(Ud,{default:()=>Nd});var nn,an,Nd,jm=V(()=>{var e;an=(nn=import.meta.url,async function(t={}){function r(){return de.buffer!=ie.buffer&&De(),ie}function i(){return de.buffer!=ie.buffer&&De(),fe}function n(){return de.buffer!=ie.buffer&&De(),D}function s(){return de.buffer!=ie.buffer&&De(),j}function a(){return de.buffer!=ie.buffer&&De(),ne}function l(){return de.buffer!=ie.buffer&&De(),se}function d(){return de.buffer!=ie.buffer&&De(),ge}function p(){return de.buffer!=ie.buffer&&De(),Gt}var h,g,u=Object.assign({},t),w=new Promise((o,f)=>{h=o,g=f}),_=typeof window=="object",b=typeof importScripts=="function",E=b&&self.name=="em-pthread";u.mountExternalData=(o,f)=>{o.startsWith("./")&&(o=o.substring(2)),(u.Fb||(u.Fb=new Map)).set(o,f)},u.unmountExternalData=()=>{delete u.Fb};var I=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let S=()=>{let o=(y,$,x)=>(...z)=>{let N=St,q=$==null?void 0:$();z=y(...z);let K=$==null?void 0:$();return q!==K&&(y=K,x(q),$=x=null),St!=N?new Promise((Y,ae)=>{qi={resolve:Y,reject:ae}}):z},f=y=>async(...$)=>{var x;try{if(u.Eb)throw Error("Session already started");let z=u.Eb={fc:$[0],errors:[]},N=await y(...$);if(u.Eb!==z)throw Error("Session mismatch");(x=u.Gb)==null||x.flush();let q=z.errors;if(0<q.length){let K=await Promise.all(q);if(K=K.filter(Y=>Y),0<K.length)throw Error(K.join(`
`))}return N}finally{u.Eb=null}};u._OrtCreateSession=o(u._OrtCreateSession,()=>u._OrtCreateSession,y=>u._OrtCreateSession=y),u._OrtRun=f(o(u._OrtRun,()=>u._OrtRun,y=>u._OrtRun=y)),u._OrtRunWithBinding=f(o(u._OrtRunWithBinding,()=>u._OrtRunWithBinding,y=>u._OrtRunWithBinding=y)),u._OrtBindInput=o(u._OrtBindInput,()=>u._OrtBindInput,y=>u._OrtBindInput=y),S=void 0};u.jsepInit=(o,f)=>{if(S==null||S(),o==="webgpu"){[u.Gb,u.Ub,u.Yb,u.Nb,u.Xb,u.jb,u.Zb,u.bc,u.Vb,u.Wb,u.$b]=f;let y=u.Gb;u.jsepRegisterBuffer=($,x,z,N)=>y.registerBuffer($,x,z,N),u.jsepGetBuffer=$=>y.getBuffer($),u.jsepCreateDownloader=($,x,z)=>y.createDownloader($,x,z),u.jsepOnReleaseSession=$=>{y.onReleaseSession($)},u.jsepOnRunStart=$=>y.onRunStart($),u.cc=($,x)=>{y.upload($,x)}}else if(o==="webnn"){[u.Gb,u.ac,u.Ob,u.jsepEnsureTensor,u.dc,u.jsepDownloadTensor]=f,u.jsepReleaseTensorId=u.Ob;let y=u.Gb;u.jsepOnRunStart=$=>y.onRunStart($),u.jsepRegisterMLContext=($,x)=>{y.registerMLContext($,x)},u.jsepOnReleaseSession=$=>{y.onReleaseSession($)},u.jsepCreateMLTensorDownloader=($,x)=>y.createMLTensorDownloader($,x),u.jsepRegisterMLTensor=($,x,z)=>y.registerMLTensor($,x,z)}};var C,T,A=Object.assign({},u),P="./this.program",O=(o,f)=>{throw f},W="";(_||b)&&(b?W=self.location.href:typeof document<"u"&&document.currentScript&&(W=document.currentScript.src),nn&&(W=nn),W=W.startsWith("blob:")?"":W.substr(0,W.replace(/[?#].*/,"").lastIndexOf("/")+1),b&&(T=o=>{var f=new XMLHttpRequest;return f.open("GET",o,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)}),C=(o,f,y)=>{var $=new XMLHttpRequest;$.open("GET",o,!0),$.responseType="arraybuffer",$.onload=()=>{$.status==200||$.status==0&&$.response?f($.response):y()},$.onerror=y,$.send(null)});var H,Z=console.log.bind(console),ue=console.error.bind(console),le=Z,te=ue;if(Object.assign(u,A),A=null,E){let o=function(f){try{var y=f.data,$=y.cmd;if($==="load"){let x=[];self.onmessage=z=>x.push(z),self.startWorker=()=>{postMessage({cmd:"loaded"});for(let z of x)o(z);self.onmessage=o};for(let z of y.handlers)u[z]&&!u[z].proxy||(u[z]=(...N)=>{postMessage({Mb:"callHandler",oc:z,args:N})},z=="print"&&(le=u[z]),z=="printErr"&&(te=u[z]));de=y.wasmMemory,De(),we(y.wasmModule)}else if($==="run"){Hi(y.pthread_ptr,0,0,1,0,0),Fi(y.pthread_ptr),Qc(),Ae(),xe||(Ms(),xe=!0);try{Jc(y.start_routine,y.arg)}catch(x){if(x!="unwind")throw x}}else $==="cancel"?ir()&&Qr(-1):y.target!=="setimmediate"&&($==="checkMailbox"?xe&&qr():$&&(te(`worker: received unknown command ${$}`),te(y)))}catch(x){throw Ps(),x}};var we,xe=!1;te=function(...f){f=f.join(" "),console.error(f)},self.alert=function(...f){postMessage({Mb:"alert",text:f.join(" "),qc:ir()})},u.instantiateWasm=(f,y)=>new Promise($=>{we=x=>{x=new WebAssembly.Instance(x,fr()),y(x),$()}}),self.onunhandledrejection=f=>{throw f.reason||f},self.onmessage=o}u.wasmBinary&&(H=u.wasmBinary);var de,$e,X,ie,fe,D,j,ne,se,ge,Be,pt,Gt,qe=!1;function De(){var o=de.buffer;u.HEAP8=ie=new Int8Array(o),u.HEAP16=D=new Int16Array(o),u.HEAPU8=fe=new Uint8Array(o),u.HEAPU16=j=new Uint16Array(o),u.HEAP32=ne=new Int32Array(o),u.HEAPU32=se=new Uint32Array(o),u.HEAPF32=ge=new Float32Array(o),u.HEAPF64=Gt=new Float64Array(o),u.HEAP64=Be=new BigInt64Array(o),u.HEAPU64=pt=new BigUint64Array(o)}if(!E){if(!((de=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0})).buffer instanceof I))throw te("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Error("bad memory");De()}var Je=[],Oe=[],Fe=[],et=0,ht=null;function ct(){if(--et==0&&ht){var o=ht;ht=null,o()}}function nt(o){throw te(o="Aborted("+o+")"),qe=!0,X=1,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),g(o),o}var cr,Ur=o=>o.startsWith("data:application/octet-stream;base64,"),er=o=>o.startsWith("file://");function Nr(o){if(o==cr&&H)return new Uint8Array(H);if(T)return T(o);throw"both async and sync fetching of the wasm failed"}function Fr(o,f,y){return function($){if(!H&&(_||b)){if(typeof fetch=="function"&&!er($))return fetch($,{credentials:"same-origin"}).then(x=>{if(!x.ok)throw`failed to load wasm binary file at '${$}'`;return x.arrayBuffer()}).catch(()=>Nr($));if(C)return new Promise((x,z)=>{C($,N=>x(new Uint8Array(N)),z)})}return Promise.resolve().then(()=>Nr($))}(o).then($=>WebAssembly.instantiate($,f)).then(y,$=>{te(`failed to asynchronously prepare wasm: ${$}`),nt($)})}function fr(){return{a:{O:mr,Aa:at,b:tf,aa:La,B:ja,qa:Ga,Y:Ka,_:Ya,ra:Za,oa:Xa,ha:Qa,na:Ja,L:es,Z:ts,W:rs,pa:is,X:ns,wa:rf,F:nf,Q:af,P:of,E:lf,u:df,q:pf,G:hf,A:$f,R:_f,ua:bf,ka:vf,U:xf,ba:Sf,H:Ef,ja:Fi,ta:If,t:kf,x:Af,o:zf,l:Of,c:Ui,n:Rf,j:Df,w:Uf,p:Nf,g:Ff,s:Wf,m:Lf,e:qf,k:Vf,i:jf,h:Gf,d:Hf,ea:Kf,fa:Yf,ga:Zf,ca:ws,da:$s,T:Xf,f:Qf,D:Jf,I:em,M:tm,y:rm,sa:im,V:nm,v:bs,z:am,N:sm,S:om,za:um,ya:lm,la:Ss,ma:Es,$:B,C:Is,K:ks,ia:Ts,J:Cs,a:de,xa:m,va:Bs,r:hm}}}var Ot={867636:(o,f,y,$,x)=>{if(u===void 0||!u.Fb)return 1;if((o=Ve(o>>>0)).startsWith("./")&&(o=o.substring(2)),!(o=u.Fb.get(o)))return 2;if($>>>=0,(f>>>=0)+(y>>>=0)>o.byteLength)return 3;try{let z=o.subarray(f,f+y);switch(x){case 0:i().set(z,$>>>0);break;case 1:u.cc($,z);break;default:return 4}return 0}catch{return 4}},868319:(o,f,y)=>{u.dc(o,i().subarray(f>>>0,f+y>>>0))},868382:()=>u.ac(),868423:o=>{u.Ob(o)},868459:()=>{u.Vb()},868490:()=>{u.Wb()},868519:()=>{u.$b()},868544:o=>u.Ub(o),868577:o=>u.Yb(o),868609:(o,f,y)=>{u.Nb(o,f,y,!0)},868648:(o,f,y)=>{u.Nb(o,f,y)},868681:()=>typeof wasmOffsetConverter<"u",868738:o=>{u.jb("Abs",o,void 0)},868789:o=>{u.jb("Neg",o,void 0)},868840:o=>{u.jb("Floor",o,void 0)},868893:o=>{u.jb("Ceil",o,void 0)},868945:o=>{u.jb("Reciprocal",o,void 0)},869003:o=>{u.jb("Sqrt",o,void 0)},869055:o=>{u.jb("Exp",o,void 0)},869106:o=>{u.jb("Erf",o,void 0)},869157:o=>{u.jb("Sigmoid",o,void 0)},869212:(o,f,y)=>{u.jb("HardSigmoid",o,{alpha:f,beta:y})},869291:o=>{u.jb("Log",o,void 0)},869342:o=>{u.jb("Sin",o,void 0)},869393:o=>{u.jb("Cos",o,void 0)},869444:o=>{u.jb("Tan",o,void 0)},869495:o=>{u.jb("Asin",o,void 0)},869547:o=>{u.jb("Acos",o,void 0)},869599:o=>{u.jb("Atan",o,void 0)},869651:o=>{u.jb("Sinh",o,void 0)},869703:o=>{u.jb("Cosh",o,void 0)},869755:o=>{u.jb("Asinh",o,void 0)},869808:o=>{u.jb("Acosh",o,void 0)},869861:o=>{u.jb("Atanh",o,void 0)},869914:o=>{u.jb("Tanh",o,void 0)},869966:o=>{u.jb("Not",o,void 0)},870017:(o,f,y)=>{u.jb("Clip",o,{min:f,max:y})},870086:o=>{u.jb("Clip",o,void 0)},870138:(o,f)=>{u.jb("Elu",o,{alpha:f})},870196:o=>{u.jb("Gelu",o,void 0)},870248:o=>{u.jb("Relu",o,void 0)},870300:(o,f)=>{u.jb("LeakyRelu",o,{alpha:f})},870364:(o,f)=>{u.jb("ThresholdedRelu",o,{alpha:f})},870434:(o,f)=>{u.jb("Cast",o,{to:f})},870492:o=>{u.jb("Add",o,void 0)},870543:o=>{u.jb("Sub",o,void 0)},870594:o=>{u.jb("Mul",o,void 0)},870645:o=>{u.jb("Div",o,void 0)},870696:o=>{u.jb("Pow",o,void 0)},870747:o=>{u.jb("Equal",o,void 0)},870800:o=>{u.jb("Greater",o,void 0)},870855:o=>{u.jb("GreaterOrEqual",o,void 0)},870917:o=>{u.jb("Less",o,void 0)},870969:o=>{u.jb("LessOrEqual",o,void 0)},871028:(o,f,y,$,x)=>{u.jb("ReduceMean",o,{keepDims:!!f,noopWithEmptyAxes:!!y,axes:$?Array.from(a().subarray($>>>0,x>>>0)):[]})},871187:(o,f,y,$,x)=>{u.jb("ReduceMax",o,{keepDims:!!f,noopWithEmptyAxes:!!y,axes:$?Array.from(a().subarray($>>>0,x>>>0)):[]})},871345:(o,f,y,$,x)=>{u.jb("ReduceMin",o,{keepDims:!!f,noopWithEmptyAxes:!!y,axes:$?Array.from(a().subarray($>>>0,x>>>0)):[]})},871503:(o,f,y,$,x)=>{u.jb("ReduceProd",o,{keepDims:!!f,noopWithEmptyAxes:!!y,axes:$?Array.from(a().subarray($>>>0,x>>>0)):[]})},871662:(o,f,y,$,x)=>{u.jb("ReduceSum",o,{keepDims:!!f,noopWithEmptyAxes:!!y,axes:$?Array.from(a().subarray($>>>0,x>>>0)):[]})},871820:(o,f,y,$,x)=>{u.jb("ReduceL1",o,{keepDims:!!f,noopWithEmptyAxes:!!y,axes:$?Array.from(a().subarray($>>>0,x>>>0)):[]})},871977:(o,f,y,$,x)=>{u.jb("ReduceL2",o,{keepDims:!!f,noopWithEmptyAxes:!!y,axes:$?Array.from(a().subarray($>>>0,x>>>0)):[]})},872134:(o,f,y,$,x)=>{u.jb("ReduceLogSum",o,{keepDims:!!f,noopWithEmptyAxes:!!y,axes:$?Array.from(a().subarray($>>>0,x>>>0)):[]})},872295:(o,f,y,$,x)=>{u.jb("ReduceSumSquare",o,{keepDims:!!f,noopWithEmptyAxes:!!y,axes:$?Array.from(a().subarray($>>>0,x>>>0)):[]})},872459:(o,f,y,$,x)=>{u.jb("ReduceLogSumExp",o,{keepDims:!!f,noopWithEmptyAxes:!!y,axes:$?Array.from(a().subarray($>>>0,x>>>0)):[]})},872623:o=>{u.jb("Where",o,void 0)},872676:(o,f,y)=>{u.jb("Transpose",o,{perm:f?Array.from(a().subarray(f>>>0,y>>>0)):[]})},872784:(o,f,y,$)=>{u.jb("DepthToSpace",o,{blocksize:f,mode:Ve(y),format:$?"NHWC":"NCHW"})},872917:(o,f,y,$)=>{u.jb("DepthToSpace",o,{blocksize:f,mode:Ve(y),format:$?"NHWC":"NCHW"})},873050:(o,f,y,$,x,z,N,q,K,Y,ae,ye,ve,M,me)=>{u.jb("ConvTranspose",o,{format:K?"NHWC":"NCHW",autoPad:f,dilations:[y],group:$,kernelShape:[x],pads:[z,N],strides:[q],wIsConst:()=>!!r()[Y>>>0],outputPadding:ae?Array.from(a().subarray(ae>>>0,ye>>>0)):[],outputShape:ve?Array.from(a().subarray(ve>>>0,M>>>0)):[],activation:Ve(me)})},873451:(o,f,y,$,x,z,N,q,K,Y,ae,ye,ve,M)=>{u.jb("ConvTranspose",o,{format:q?"NHWC":"NCHW",autoPad:f,dilations:Array.from(a().subarray(y>>>0,2+(y>>>0)>>>0)),group:$,kernelShape:Array.from(a().subarray(x>>>0,2+(x>>>0)>>>0)),pads:Array.from(a().subarray(z>>>0,4+(z>>>0)>>>0)),strides:Array.from(a().subarray(N>>>0,2+(N>>>0)>>>0)),wIsConst:()=>!!r()[K>>>0],outputPadding:Y?Array.from(a().subarray(Y>>>0,ae>>>0)):[],outputShape:ye?Array.from(a().subarray(ye>>>0,ve>>>0)):[],activation:Ve(M)})},874016:(o,f,y,$,x,z,N,q,K,Y,ae,ye,ve,M,me)=>{u.jb("ConvTranspose",o,{format:K?"NHWC":"NCHW",autoPad:f,dilations:[y],group:$,kernelShape:[x],pads:[z,N],strides:[q],wIsConst:()=>!!r()[Y>>>0],outputPadding:ae?Array.from(a().subarray(ae>>>0,ye>>>0)):[],outputShape:ve?Array.from(a().subarray(ve>>>0,M>>>0)):[],activation:Ve(me)})},874417:(o,f,y,$,x,z,N,q,K,Y,ae,ye,ve,M)=>{u.jb("ConvTranspose",o,{format:q?"NHWC":"NCHW",autoPad:f,dilations:Array.from(a().subarray(y>>>0,2+(y>>>0)>>>0)),group:$,kernelShape:Array.from(a().subarray(x>>>0,2+(x>>>0)>>>0)),pads:Array.from(a().subarray(z>>>0,4+(z>>>0)>>>0)),strides:Array.from(a().subarray(N>>>0,2+(N>>>0)>>>0)),wIsConst:()=>!!r()[K>>>0],outputPadding:Y?Array.from(a().subarray(Y>>>0,ae>>>0)):[],outputShape:ye?Array.from(a().subarray(ye>>>0,ve>>>0)):[],activation:Ve(M)})},874982:(o,f)=>{u.jb("GlobalAveragePool",o,{format:f?"NHWC":"NCHW"})},875073:(o,f,y,$,x,z,N,q,K,Y,ae,ye,ve,M)=>{u.jb("AveragePool",o,{format:M?"NHWC":"NCHW",auto_pad:f,ceil_mode:y,count_include_pad:$,storage_order:x,dilations:z?Array.from(a().subarray(z>>>0,N>>>0)):[],kernel_shape:q?Array.from(a().subarray(q>>>0,K>>>0)):[],pads:Y?Array.from(a().subarray(Y>>>0,ae>>>0)):[],strides:ye?Array.from(a().subarray(ye>>>0,ve>>>0)):[]})},875488:(o,f)=>{u.jb("GlobalAveragePool",o,{format:f?"NHWC":"NCHW"})},875579:(o,f,y,$,x,z,N,q,K,Y,ae,ye,ve,M)=>{u.jb("AveragePool",o,{format:M?"NHWC":"NCHW",auto_pad:f,ceil_mode:y,count_include_pad:$,storage_order:x,dilations:z?Array.from(a().subarray(z>>>0,N>>>0)):[],kernel_shape:q?Array.from(a().subarray(q>>>0,K>>>0)):[],pads:Y?Array.from(a().subarray(Y>>>0,ae>>>0)):[],strides:ye?Array.from(a().subarray(ye>>>0,ve>>>0)):[]})},875994:(o,f)=>{u.jb("GlobalMaxPool",o,{format:f?"NHWC":"NCHW"})},876081:(o,f,y,$,x,z,N,q,K,Y,ae,ye,ve,M)=>{u.jb("MaxPool",o,{format:M?"NHWC":"NCHW",auto_pad:f,ceil_mode:y,count_include_pad:$,storage_order:x,dilations:z?Array.from(a().subarray(z>>>0,N>>>0)):[],kernel_shape:q?Array.from(a().subarray(q>>>0,K>>>0)):[],pads:Y?Array.from(a().subarray(Y>>>0,ae>>>0)):[],strides:ye?Array.from(a().subarray(ye>>>0,ve>>>0)):[]})},876492:(o,f)=>{u.jb("GlobalMaxPool",o,{format:f?"NHWC":"NCHW"})},876579:(o,f,y,$,x,z,N,q,K,Y,ae,ye,ve,M)=>{u.jb("MaxPool",o,{format:M?"NHWC":"NCHW",auto_pad:f,ceil_mode:y,count_include_pad:$,storage_order:x,dilations:z?Array.from(a().subarray(z>>>0,N>>>0)):[],kernel_shape:q?Array.from(a().subarray(q>>>0,K>>>0)):[],pads:Y?Array.from(a().subarray(Y>>>0,ae>>>0)):[],strides:ye?Array.from(a().subarray(ye>>>0,ve>>>0)):[]})},876990:(o,f,y,$,x)=>{u.jb("Gemm",o,{alpha:f,beta:y,transA:$,transB:x})},877094:o=>{u.jb("MatMul",o,void 0)},877148:(o,f,y,$)=>{u.jb("ArgMax",o,{keepDims:!!f,selectLastIndex:!!y,axis:$})},877256:(o,f,y,$)=>{u.jb("ArgMin",o,{keepDims:!!f,selectLastIndex:!!y,axis:$})},877364:(o,f)=>{u.jb("Softmax",o,{axis:f})},877427:(o,f)=>{u.jb("Concat",o,{axis:f})},877487:(o,f,y,$,x)=>{u.jb("Split",o,{axis:f,numOutputs:y,splitSizes:$?Array.from(a().subarray($>>>0,x>>>0)):[]})},877627:o=>{u.jb("Expand",o,void 0)},877681:(o,f)=>{u.jb("Gather",o,{axis:Number(f)})},877752:(o,f)=>{u.jb("GatherElements",o,{axis:Number(f)})},877831:(o,f,y,$,x,z,N,q,K,Y,ae)=>{u.jb("Resize",o,{antialias:f,axes:y?Array.from(a().subarray(y>>>0,$>>>0)):[],coordinateTransformMode:Ve(x),cubicCoeffA:z,excludeOutside:N,extrapolationValue:q,keepAspectRatioPolicy:Ve(K),mode:Ve(Y),nearestMode:Ve(ae)})},878177:(o,f,y,$,x,z,N)=>{u.jb("Slice",o,{starts:f?Array.from(a().subarray(f>>>0,y>>>0)):[],ends:$?Array.from(a().subarray($>>>0,x>>>0)):[],axes:z?Array.from(a().subarray(z>>>0,N>>>0)):[]})},878393:o=>{u.jb("Tile",o,void 0)},878445:(o,f,y)=>{u.jb("InstanceNormalization",o,{epsilon:f,format:y?"NHWC":"NCHW"})},878559:(o,f,y)=>{u.jb("InstanceNormalization",o,{epsilon:f,format:y?"NHWC":"NCHW"})},878673:o=>{u.jb("Range",o,void 0)},878726:(o,f)=>{u.jb("Einsum",o,{equation:Ve(f)})},878807:(o,f,y,$,x)=>{u.jb("Pad",o,{mode:f,value:y,pads:$?Array.from(a().subarray($>>>0,x>>>0)):[]})},878934:(o,f,y,$,x,z)=>{u.jb("BatchNormalization",o,{epsilon:f,momentum:y,spatial:!!x,trainingMode:!!$,format:z?"NHWC":"NCHW"})},879103:(o,f,y,$,x,z)=>{u.jb("BatchNormalization",o,{epsilon:f,momentum:y,spatial:!!x,trainingMode:!!$,format:z?"NHWC":"NCHW"})},879272:(o,f,y)=>{u.jb("CumSum",o,{exclusive:Number(f),reverse:Number(y)})},879369:(o,f,y)=>{u.jb("DequantizeLinear",o,{axis:f,blockSize:y})},879459:(o,f,y,$,x,z,N,q,K)=>{u.jb("Attention",o,{numHeads:f,isUnidirectional:y,maskFilterValue:$,scale:x,doRotary:z,qkvHiddenSizes:N?Array.from(a().subarray(Number(q)>>>0,Number(q)+N>>>0)):[],pastPresentShareBuffer:!!K})},879731:o=>{u.jb("BiasAdd",o,void 0)},879786:o=>{u.jb("BiasSplitGelu",o,void 0)},879847:o=>{u.jb("FastGelu",o,void 0)},879903:(o,f,y,$,x,z,N,q,K,Y,ae,ye,ve,M,me,Re)=>{u.jb("Conv",o,{format:ye?"NHWC":"NCHW",auto_pad:f,dilations:y?Array.from(a().subarray(y>>>0,$>>>0)):[],group:x,kernel_shape:z?Array.from(a().subarray(z>>>0,N>>>0)):[],pads:q?Array.from(a().subarray(q>>>0,K>>>0)):[],strides:Y?Array.from(a().subarray(Y>>>0,ae>>>0)):[],w_is_const:()=>!!r()[ve>>>0],activation:Ve(M),activation_params:me?Array.from(d().subarray(me>>>0,Re>>>0)):[]})},880399:o=>{u.jb("Gelu",o,void 0)},880451:(o,f,y,$)=>{u.jb("GroupQueryAttention",o,{numHeads:f,kvNumHeads:y,scale:$})},880564:(o,f,y,$)=>{u.jb("LayerNormalization",o,{axis:f,epsilon:y,simplified:!!$})},880675:(o,f,y,$)=>{u.jb("LayerNormalization",o,{axis:f,epsilon:y,simplified:!!$})},880786:(o,f,y,$,x,z)=>{u.jb("MatMulNBits",o,{k:f,n:y,accuracyLevel:$,bits:x,blockSize:z})},880913:(o,f,y,$,x,z)=>{u.jb("MultiHeadAttention",o,{numHeads:f,isUnidirectional:y,maskFilterValue:$,scale:x,doRotary:z})},881072:(o,f)=>{u.jb("QuickGelu",o,{alpha:f})},881136:(o,f,y,$,x)=>{u.jb("RotaryEmbedding",o,{interleaved:!!f,numHeads:y,rotaryEmbeddingDim:$,scale:x})},881275:(o,f,y)=>{u.jb("SkipLayerNormalization",o,{epsilon:f,simplified:!!y})},881377:(o,f,y)=>{u.jb("SkipLayerNormalization",o,{epsilon:f,simplified:!!y})},881479:(o,f,y,$)=>{u.jb("GatherBlockQuantized",o,{gatherAxis:f,quantizeAxis:y,blockSize:$})},881600:o=>{u.Zb(o)},881634:(o,f)=>u.bc(o,f,u.Eb.fc,u.Eb.errors)};function at(o,f,y){return cs(async()=>{await u.Xb(o,f,y)})}function mr(){return typeof wasmOffsetConverter<"u"}function gr(o){this.name="ExitStatus",this.message=`Program terminated with exit(${o})`,this.status=o}var st=o=>{o.terminate(),o.onmessage=()=>{}},Wr=o=>{R.length==0&&(Fa(),Se(R[0]));var f=R.pop();if(!f)return 6;F.push(f),be[o.Ab]=f,f.Ab=o.Ab;var y={cmd:"run",start_routine:o.hc,arg:o.Qb,pthread_ptr:o.Ab};return f.postMessage(y,o.mc),0},v=0,c=(o,f,...y)=>{for(var $=2*y.length,x=Zi(),z=Yi(8*$),N=z>>>3,q=0;q<y.length;q++){var K=y[q];typeof K=="bigint"?(Be[N+2*q]=1n,Be[N+2*q+1]=K):(Be[N+2*q]=0n,p()[N+2*q+1>>>0]=K)}return o=Ds(o,0,$,z,f),Jr(x),o};function m(o){if(E)return c(0,1,o);if(X=o,!(0<v)){for(var f of F)st(f);for(f of R)st(f);R=[],F=[],be=[],qe=!0}O(o,new gr(o))}function k(o){if(E)return c(1,0,o);B(o)}var B=o=>{if(X=o,E)throw k(o),"unwind";m(o)},R=[],F=[],ce=[],be={},Te=o=>{var f=o.Ab;delete be[f],R.push(o),F.splice(F.indexOf(o),1),o.Ab=0,Ki(f)};function Ae(){ce.forEach(o=>o())}var Se=o=>new Promise(f=>{o.onmessage=x=>{var z=(x=x.data).cmd;if(x.targetThread&&x.targetThread!=ir()){var N=be[x.targetThread];N?N.postMessage(x,x.transferList):te(`Internal error! Worker sent a message "${z}" to target pthread ${x.targetThread}, but that thread no longer exists!`)}else z==="checkMailbox"?qr():z==="spawnThread"?Wr(x):z==="cleanupThread"?Te(be[x.thread]):z==="killThread"?(x=x.thread,z=be[x],delete be[x],st(z),Ki(x),F.splice(F.indexOf(z),1),z.Ab=0):z==="cancelThread"?be[x.thread].postMessage({cmd:"cancel"}):z==="loaded"?(o.loaded=!0,f(o)):z==="alert"?alert(`Thread ${x.threadId}: ${x.text}`):x.target==="setimmediate"?o.postMessage(x):z==="callHandler"?u[x.handler](...x.args):z&&te(`worker sent an unknown command ${z}`)},o.onerror=x=>{throw te(`worker sent an error! ${x.filename}:${x.lineno}: ${x.message}`),x};var y,$=[];for(y of[])u.hasOwnProperty(y)&&$.push(y);o.postMessage({cmd:"load",handlers:$,wasmMemory:de,wasmModule:$e})});function Fa(){var o=new Worker(new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});R.push(o)}var Lr=o=>{for(;0<o.length;)o.shift()(u)},Qc=()=>{var o=ir(),f=l()[o+52>>>2>>>0];o=l()[o+56>>>2>>>0],Ns(f,f-o),Jr(f)},Jc=(o,f)=>{v=0,o=Fs(o,f),0<v?X=o:Qr(o)};class ef{constructor(f){this.Jb=f-24}}function tf(o,f,y){var $=new ef(o>>>=0);throw f>>>=0,y>>>=0,l()[$.Jb+16>>>2>>>0]=0,l()[$.Jb+4>>>2>>>0]=f,l()[$.Jb+8>>>2>>>0]=y,o}function Wa(o,f,y,$){return E?c(2,1,o,f,y,$):La(o,f,y,$)}function La(o,f,y,$){if(o>>>=0,f>>>=0,y>>>=0,$>>>=0,I===void 0)return te("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var x=[];return E&&x.length===0?Wa(o,f,y,$):(o={hc:y,Ab:o,Qb:$,mc:x},E?(o.Mb="spawnThread",postMessage(o,x),0):Wr(o))}var qa=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,Va=(o,f,y)=>{var $=(f>>>=0)+y;for(y=f;o[y]&&!(y>=$);)++y;if(16<y-f&&o.buffer&&qa)return qa.decode(o.buffer instanceof I?o.slice(f,y):o.subarray(f,y));for($="";f<y;){var x=o[f++];if(128&x){var z=63&o[f++];if((224&x)==192)$+=String.fromCharCode((31&x)<<6|z);else{var N=63&o[f++];65536>(x=(240&x)==224?(15&x)<<12|z<<6|N:(7&x)<<18|z<<12|N<<6|63&o[f++])?$+=String.fromCharCode(x):(x-=65536,$+=String.fromCharCode(55296|x>>10,56320|1023&x))}}else $+=String.fromCharCode(x)}return $},Ve=(o,f)=>(o>>>=0)?Va(i(),o,f):"";function ja(o,f,y){return E?c(3,1,o,f,y):0}function Ga(o,f){if(E)return c(4,1,o,f)}var Ri=o=>{for(var f=0,y=0;y<o.length;++y){var $=o.charCodeAt(y);127>=$?f++:2047>=$?f+=2:55296<=$&&57343>=$?(f+=4,++y):f+=3}return f},Ha=(o,f,y,$)=>{if(!(0<$))return 0;var x=y>>>=0;$=y+$-1;for(var z=0;z<o.length;++z){var N=o.charCodeAt(z);if(55296<=N&&57343>=N&&(N=65536+((1023&N)<<10)|1023&o.charCodeAt(++z)),127>=N){if(y>=$)break;f[y++>>>0]=N}else{if(2047>=N){if(y+1>=$)break;f[y++>>>0]=192|N>>6}else{if(65535>=N){if(y+2>=$)break;f[y++>>>0]=224|N>>12}else{if(y+3>=$)break;f[y++>>>0]=240|N>>18,f[y++>>>0]=128|N>>12&63}f[y++>>>0]=128|N>>6&63}f[y++>>>0]=128|63&N}}return f[y>>>0]=0,y-x},tr=(o,f,y)=>Ha(o,i(),f,y);function Ka(o,f){if(E)return c(5,1,o,f)}function Ya(o,f,y){if(E)return c(6,1,o,f,y)}function Za(o,f,y){return E?c(7,1,o,f,y):0}function Xa(o,f){if(E)return c(8,1,o,f)}function Qa(o,f,y){if(E)return c(9,1,o,f,y)}function Ja(o,f,y,$){if(E)return c(10,1,o,f,y,$)}function es(o,f,y,$){if(E)return c(11,1,o,f,y,$)}function ts(o,f,y,$){if(E)return c(12,1,o,f,y,$)}function rs(o){if(E)return c(13,1,o)}function is(o,f){if(E)return c(14,1,o,f)}function ns(o,f,y){if(E)return c(15,1,o,f,y)}var as,Rt,rf=()=>{nt("")},xt=o=>{for(var f="";i()[o>>>0];)f+=as[i()[o++>>>0]];return f},Mi={},Pi={};function zt(o,f,y={}){if(!("argPackAdvance"in f))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function($,x,z={}){var N=x.name;if(!$)throw new Rt(`type "${N}" must have a positive integer typeid pointer`);if(Pi.hasOwnProperty($)){if(z.Sb)return;throw new Rt(`Cannot register type '${N}' twice`)}Pi[$]=x,Mi.hasOwnProperty($)&&(x=Mi[$],delete Mi[$],x.forEach(q=>q()))}(o,f,y)}var ss=(o,f,y)=>{switch(f){case 1:return y?$=>r()[$>>>0]:$=>i()[$>>>0];case 2:return y?$=>n()[$>>>1>>>0]:$=>s()[$>>>1>>>0];case 4:return y?$=>a()[$>>>2>>>0]:$=>l()[$>>>2>>>0];case 8:return y?$=>Be[$>>>3]:$=>pt[$>>>3];default:throw new TypeError(`invalid integer width (${f}): ${o}`)}};function nf(o,f,y){y>>>=0,zt(o>>>=0,{name:f=xt(f>>>0),fromWireType:$=>$,toWireType:function($,x){if(typeof x!="bigint"&&typeof x!="number")throw x=x===null?"null":($=typeof x)=="object"||$==="array"||$==="function"?x.toString():""+x,new TypeError(`Cannot convert "${x}" to ${this.name}`);return typeof x=="number"&&(x=BigInt(x)),x},argPackAdvance:Mt,readValueFromPointer:ss(f,y,f.indexOf("u")==-1),Db:null})}var Mt=8;function af(o,f,y,$){zt(o>>>=0,{name:f=xt(f>>>0),fromWireType:function(x){return!!x},toWireType:function(x,z){return z?y:$},argPackAdvance:Mt,readValueFromPointer:function(x){return this.fromWireType(i()[x>>>0])},Db:null})}var Di=[],Bt=[];function Ui(o){9<(o>>>=0)&&--Bt[o+1]==0&&(Bt[o]=void 0,Di.push(o))}var ot=o=>{if(!o)throw new Rt("Cannot use deleted val. handle = "+o);return Bt[o]},ut=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let f=Di.pop()||Bt.length;return Bt[f]=o,Bt[f+1]=1,f}};function Ni(o){return this.fromWireType(l()[o>>>2>>>0])}var sf={name:"emscripten::val",fromWireType:o=>{var f=ot(o);return Ui(o),f},toWireType:(o,f)=>ut(f),argPackAdvance:Mt,readValueFromPointer:Ni,Db:null};function of(o){return zt(o>>>0,sf)}var uf=(o,f)=>{switch(f){case 4:return function(y){return this.fromWireType(d()[y>>>2>>>0])};case 8:return function(y){return this.fromWireType(p()[y>>>3>>>0])};default:throw new TypeError(`invalid float width (${f}): ${o}`)}};function lf(o,f,y){y>>>=0,zt(o>>>=0,{name:f=xt(f>>>0),fromWireType:$=>$,toWireType:($,x)=>x,argPackAdvance:Mt,readValueFromPointer:uf(f,y),Db:null})}function df(o,f,y,$,x){if(o>>>=0,y>>>=0,f=xt(f>>>0),x===-1&&(x=4294967295),x=q=>q,$===0){var z=32-8*y;x=q=>q<<z>>>z}var N=f.includes("unsigned")?function(q,K){return K>>>0}:function(q,K){return K};zt(o,{name:f,fromWireType:x,toWireType:N,argPackAdvance:Mt,readValueFromPointer:ss(f,y,$!==0),Db:null})}function pf(o,f,y){function $(z){var N=l()[z>>>2>>>0];return z=l()[z+4>>>2>>>0],new x(r().buffer,z,N)}var x=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][f];zt(o>>>=0,{name:y=xt(y>>>0),fromWireType:$,argPackAdvance:Mt,readValueFromPointer:$},{Sb:!0})}function hf(o,f){o>>>=0;var y=(f=xt(f>>>0))==="std::string";zt(o,{name:f,fromWireType:function($){var x=l()[$>>>2>>>0],z=$+4;if(y)for(var N=z,q=0;q<=x;++q){var K=z+q;if(q==x||i()[K>>>0]==0){if(N=Ve(N,K-N),Y===void 0)var Y=N;else Y+="\0",Y+=N;N=K+1}}else{for(Y=Array(x),q=0;q<x;++q)Y[q]=String.fromCharCode(i()[z+q>>>0]);Y=Y.join("")}return Et($),Y},toWireType:function($,x){x instanceof ArrayBuffer&&(x=new Uint8Array(x));var z=typeof x=="string";if(!(z||x instanceof Uint8Array||x instanceof Uint8ClampedArray||x instanceof Int8Array))throw new Rt("Cannot pass non-string to std::string");var N=y&&z?Ri(x):x.length,q=Xr(4+N+1),K=q+4;if(l()[q>>>2>>>0]=N,y&&z)tr(x,K,N+1);else if(z)for(z=0;z<N;++z){var Y=x.charCodeAt(z);if(255<Y)throw Et(K),new Rt("String has UTF-16 code units that do not fit in 8 bits");i()[K+z>>>0]=Y}else for(z=0;z<N;++z)i()[K+z>>>0]=x[z];return $!==null&&$.push(Et,q),q},argPackAdvance:Mt,readValueFromPointer:Ni,Db($){Et($)}})}var os=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,cf=(o,f)=>{for(var y=o>>1,$=y+f/2;!(y>=$)&&s()[y>>>0];)++y;if(32<(y<<=1)-o&&os)return os.decode(i().slice(o,y));for(y="",$=0;!($>=f/2);++$){var x=n()[o+2*$>>>1>>>0];if(x==0)break;y+=String.fromCharCode(x)}return y},ff=(o,f,y)=>{if(y??(y=2147483647),2>y)return 0;var $=f;y=(y-=2)<2*o.length?y/2:o.length;for(var x=0;x<y;++x){var z=o.charCodeAt(x);n()[f>>>1>>>0]=z,f+=2}return n()[f>>>1>>>0]=0,f-$},mf=o=>2*o.length,gf=(o,f)=>{for(var y=0,$="";!(y>=f/4);){var x=a()[o+4*y>>>2>>>0];if(x==0)break;++y,65536<=x?(x-=65536,$+=String.fromCharCode(55296|x>>10,56320|1023&x)):$+=String.fromCharCode(x)}return $},yf=(o,f,y)=>{if(f>>>=0,y??(y=2147483647),4>y)return 0;var $=f;y=$+y-4;for(var x=0;x<o.length;++x){var z=o.charCodeAt(x);if(55296<=z&&57343>=z&&(z=65536+((1023&z)<<10)|1023&o.charCodeAt(++x)),a()[f>>>2>>>0]=z,(f+=4)+4>y)break}return a()[f>>>2>>>0]=0,f-$},wf=o=>{for(var f=0,y=0;y<o.length;++y){var $=o.charCodeAt(y);55296<=$&&57343>=$&&++y,f+=4}return f};function $f(o,f,y){if(o>>>=0,f>>>=0,y=xt(y>>>=0),f===2)var $=cf,x=ff,z=mf,N=q=>s()[q>>>1>>>0];else f===4&&($=gf,x=yf,z=wf,N=q=>l()[q>>>2>>>0]);zt(o,{name:y,fromWireType:q=>{for(var K,Y=l()[q>>>2>>>0],ae=q+4,ye=0;ye<=Y;++ye){var ve=q+4+ye*f;ye!=Y&&N(ve)!=0||(ae=$(ae,ve-ae),K===void 0?K=ae:(K+="\0",K+=ae),ae=ve+f)}return Et(q),K},toWireType:(q,K)=>{if(typeof K!="string")throw new Rt(`Cannot pass non-string to C++ string type ${y}`);var Y=z(K),ae=Xr(4+Y+f);return l()[ae>>>2>>>0]=Y/f,x(K,ae+4,Y+f),q!==null&&q.push(Et,ae),ae},argPackAdvance:Mt,readValueFromPointer:Ni,Db(q){Et(q)}})}function _f(o,f){zt(o>>>=0,{Tb:!0,name:f=xt(f>>>0),argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})}var bf=()=>1;function vf(o){Hi(o>>>0,!b,1,!_,131072,!1),Ae()}var us=o=>{if(!qe)try{if(o(),!(0<v))try{E?Qr(X):B(X)}catch(f){f instanceof gr||f=="unwind"||O(1,f)}}catch(f){f instanceof gr||f=="unwind"||O(1,f)}};function Fi(o){o>>>=0,typeof Atomics.nc=="function"&&(Atomics.nc(a(),o>>>2,o).value.then(qr),o+=128,Atomics.store(a(),o>>>2,1))}var qr=()=>{var o=ir();o&&(Fi(o),us(Us))};function xf(o,f){(o>>>=0)==f>>>0?setTimeout(qr):E?postMessage({targetThread:o,cmd:"checkMailbox"}):(o=be[o])&&o.postMessage({cmd:"checkMailbox"})}var Wi=[];function Sf(o,f,y,$,x){for(f>>>=0,$/=2,Wi.length=$,y=x>>>0>>>3,x=0;x<$;x++)Wi[x]=Be[y+2*x]?Be[y+2*x+1]:p()[y+2*x+1>>>0];return(f?Ot[f]:cm[o])(...Wi)}function Ef(o){o>>>=0,E?postMessage({cmd:"cleanupThread",thread:o}):Te(be[o])}function If(o){}var Li=(o,f)=>{var y=Pi[o];if(y===void 0)throw o=Rs(o),y=xt(o),Et(o),new Rt(`${f} has unknown type ${y}`);return y},ls=(o,f,y)=>{var $=[];return o=o.toWireType($,y),$.length&&(l()[f>>>2>>>0]=ut($)),o};function kf(o,f,y){return f>>>=0,y>>>=0,o=ot(o>>>0),f=Li(f,"emval::as"),ls(f,y,o)}var Vr=o=>{try{o()}catch(f){nt(f)}},Pt=0,St=null,ds=0,jr=[],ps={},hs={},Tf=0,qi=null,Cf=[];function cs(o){return function(f){if(!qe){if(Pt===0){var y=!1,$=!1;f((x=0)=>{if(!qe&&(ds=x,y=!0,$)){Pt=2,Vr(()=>qs(St)),typeof Browser<"u"&&Browser.Kb.Rb&&Browser.Kb.resume(),x=!1;try{var z=function(){var K=a()[St+8>>>2>>>0];return K=re[hs[K]],--v,K()}()}catch(K){z=K,x=!0}var N=!1;if(!St){var q=qi;q&&(qi=null,(x?q.reject:q.resolve)(z),N=!0)}if(x&&!N)throw z}}),$=!0,y||(Pt=1,St=function(){var x=Xr(65548),z=x+12;l()[x>>>2>>>0]=z,l()[x+4>>>2>>>0]=z+65536,z=jr[0];var N=ps[z];return N===void 0&&(N=Tf++,ps[z]=N,hs[N]=z),z=N,a()[x+8>>>2>>>0]=z,x}(),typeof Browser<"u"&&Browser.Kb.Rb&&Browser.Kb.pause(),Vr(()=>Ws(St)))}else Pt===2?(Pt=0,Vr(Vs),Et(St),St=null,Cf.forEach(us)):nt(`invalid state: ${Pt}`);return ds}}(f=>{o().then(f)})}function Af(o){return o>>>=0,cs(()=>(o=ot(o)).then(ut))}var Gr=[];function zf(o,f,y,$){return y>>>=0,$>>>=0,(o=Gr[o>>>0])(null,f=ot(f>>>0),y,$)}var Bf={},Hr=o=>{var f=Bf[o];return f===void 0?xt(o):f};function Of(o,f,y,$,x){return y>>>=0,$>>>=0,x>>>=0,(o=Gr[o>>>0])(f=ot(f>>>0),f[y=Hr(y)],$,x)}var fs=()=>typeof globalThis=="object"?globalThis:Function("return this")();function Rf(o){return(o>>>=0)==0?ut(fs()):(o=Hr(o),ut(fs()[o]))}var Mf=o=>{var f=Gr.length;return Gr.push(o),f},Pf=(o,f)=>{for(var y=Array(o),$=0;$<o;++$)y[$]=Li(l()[f+4*$>>>2>>>0],"parameter "+$);return y},ms=(o,f)=>Object.defineProperty(f,"name",{value:o});function Df(o,f,y){var $=(f=Pf(o,f>>>0)).shift();o--;var x=`return function (obj, func, destructorsRef, args) {
`,z=0,N=[];y===0&&N.push("obj");for(var q=["retType"],K=[$],Y=0;Y<o;++Y)N.push("arg"+Y),q.push("argType"+Y),K.push(f[Y]),x+=`  var arg${Y} = argType${Y}.readValueFromPointer(args${z?"+"+z:""});
`,z+=f[Y].argPackAdvance;return x+=`  var rv = ${y===1?"new func":"func.call"}(${N.join(", ")});
`,$.Tb||(q.push("emval_returnValue"),K.push(ls),x+=`  return emval_returnValue(retType, destructorsRef, rv);
`),q.push(x+`};
`),o=function(ae){var ye=Function;if(!(ye instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof ye} which is not a function`);var ve=ms(ye.name||"unknownFunctionName",function(){});return ve.prototype=ye.prototype,ve=new ve,(ae=ye.apply(ve,ae))instanceof Object?ae:ve}(q)(...K),y=`methodCaller<(${f.map(ae=>ae.name).join(", ")}) => ${$.name}>`,Mf(ms(y,o))}function Uf(o){return o=Hr(o>>>0),ut(u[o])}function Nf(o,f){return f>>>=0,o=ot(o>>>0),f=ot(f),ut(o[f])}function Ff(o){9<(o>>>=0)&&(Bt[o+1]+=1)}function Wf(){return ut([])}function Lf(o){o=ot(o>>>0);for(var f=Array(o.length),y=0;y<o.length;y++)f[y]=o[y];return ut(f)}function qf(o){return ut(Hr(o>>>0))}function Vf(){return ut({})}function jf(o){for(var f=ot(o>>>=0);f.length;){var y=f.pop();f.pop()(y)}Ui(o)}function Gf(o,f,y){f>>>=0,y>>>=0,o=ot(o>>>0),f=ot(f),y=ot(y),o[f]=y}function Hf(o,f){return f>>>=0,o=(o=Li(o>>>0,"_emval_take_value")).readValueFromPointer(f),ut(o)}function Kf(o,f){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),f>>>=0,o=new Date(1e3*o),a()[f>>>2>>>0]=o.getUTCSeconds(),a()[f+4>>>2>>>0]=o.getUTCMinutes(),a()[f+8>>>2>>>0]=o.getUTCHours(),a()[f+12>>>2>>>0]=o.getUTCDate(),a()[f+16>>>2>>>0]=o.getUTCMonth(),a()[f+20>>>2>>>0]=o.getUTCFullYear()-1900,a()[f+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,a()[f+28>>>2>>>0]=o}var rr=o=>o%4==0&&(o%100!=0||o%400==0),gs=[0,31,60,91,121,152,182,213,244,274,305,335],ys=[0,31,59,90,120,151,181,212,243,273,304,334];function Yf(o,f){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),f>>>=0,o=new Date(1e3*o),a()[f>>>2>>>0]=o.getSeconds(),a()[f+4>>>2>>>0]=o.getMinutes(),a()[f+8>>>2>>>0]=o.getHours(),a()[f+12>>>2>>>0]=o.getDate(),a()[f+16>>>2>>>0]=o.getMonth(),a()[f+20>>>2>>>0]=o.getFullYear()-1900,a()[f+24>>>2>>>0]=o.getDay();var y=(rr(o.getFullYear())?gs:ys)[o.getMonth()]+o.getDate()-1|0;a()[f+28>>>2>>>0]=y,a()[f+36>>>2>>>0]=-60*o.getTimezoneOffset(),y=new Date(o.getFullYear(),6,1).getTimezoneOffset();var $=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(y!=$&&o.getTimezoneOffset()==Math.min($,y)),a()[f+32>>>2>>>0]=o}function Zf(o){o>>>=0;var f=new Date(a()[o+20>>>2>>>0]+1900,a()[o+16>>>2>>>0],a()[o+12>>>2>>>0],a()[o+8>>>2>>>0],a()[o+4>>>2>>>0],a()[o>>>2>>>0],0),y=a()[o+32>>>2>>>0],$=f.getTimezoneOffset(),x=new Date(f.getFullYear(),6,1).getTimezoneOffset(),z=new Date(f.getFullYear(),0,1).getTimezoneOffset(),N=Math.min(z,x);return 0>y?a()[o+32>>>2>>>0]=+(x!=z&&N==$):0<y!=(N==$)&&(x=Math.max(z,x),f.setTime(f.getTime()+6e4*((0<y?N:x)-$))),a()[o+24>>>2>>>0]=f.getDay(),y=(rr(f.getFullYear())?gs:ys)[f.getMonth()]+f.getDate()-1|0,a()[o+28>>>2>>>0]=y,a()[o>>>2>>>0]=f.getSeconds(),a()[o+4>>>2>>>0]=f.getMinutes(),a()[o+8>>>2>>>0]=f.getHours(),a()[o+12>>>2>>>0]=f.getDate(),a()[o+16>>>2>>>0]=f.getMonth(),a()[o+20>>>2>>>0]=f.getYear(),o=f.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function ws(o,f,y,$,x,z,N){return E?c(16,1,o,f,y,$,x,z,N):-52}function $s(o,f,y,$,x,z){if(E)return c(17,1,o,f,y,$,x,z)}function Xf(o,f,y,$){o>>>=0,f>>>=0,y>>>=0,$>>>=0;var x=new Date().getFullYear(),z=new Date(x,0,1),N=new Date(x,6,1);x=z.getTimezoneOffset();var q=N.getTimezoneOffset(),K=Math.max(x,q);l()[o>>>2>>>0]=60*K,a()[f>>>2>>>0]=+(x!=q),z=(o=Y=>Y.toLocaleTimeString(void 0,{hour12:!1,timeZoneName:"short"}).split(" ")[1])(z),N=o(N),q<x?(tr(z,y,17),tr(N,$,17)):(tr(z,$,17),tr(N,y,17))}var Vi=[],_s=(o,f)=>{Vi.length=0;for(var y;y=i()[o++>>>0];){var $=y!=105;f+=($&=y!=112)&&f%8?4:0,Vi.push(y==112?l()[f>>>2>>>0]:y==106?Be[f>>>3]:y==105?a()[f>>>2>>>0]:p()[f>>>3>>>0]),f+=$?8:4}return Vi};function Qf(o,f,y){return o>>>=0,f=_s(f>>>0,y>>>0),Ot[o](...f)}function Jf(o,f,y){return o>>>=0,f=_s(f>>>0,y>>>0),Ot[o](...f)}var em=()=>{},tm=()=>Date.now();function rm(o,f){return te(Ve(o>>>0,f>>>0))}var bs,im=()=>{throw v+=1,"unwind"};function nm(){return 4294901760}bs=()=>performance.timeOrigin+performance.now();var am=()=>navigator.hardwareConcurrency;function sm(){return nt("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function om(o){o>>>=0;var f=i().length;if(o<=f||4294901760<o)return!1;for(var y=1;4>=y;y*=2){var $=f*(1+.2/y);$=Math.min($,o+100663296);var x=Math;$=Math.max(o,$);e:{x=(x.min.call(x,4294901760,$+(65536-$%65536)%65536)-de.buffer.byteLength+65535)/65536;try{de.grow(x),De();var z=1;break e}catch{}z=void 0}if(z)return!0}return!1}var Kr=()=>(nt("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),yr={},vs=o=>{o.forEach(f=>{Kr()})};function um(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),vs(o),yr.Pb=Kr(),yr.ec=o,yr.Pb}function lm(o,f,y){if(o>>>=0,f>>>=0,yr.Pb==o)var $=yr.ec;else($=Error().stack.toString().split(`
`))[0]=="Error"&&$.shift(),vs($);for(var x=3;$[x]&&Kr()!=o;)++x;for(o=0;o<y&&$[o+x];++o)a()[f+4*o>>>2>>>0]=Kr();return o}var ji,Gi={},xs=()=>{if(!ji){var o,f={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:P};for(o in Gi)Gi[o]===void 0?delete f[o]:f[o]=Gi[o];var y=[];for(o in f)y.push(`${o}=${f[o]}`);ji=y}return ji};function Ss(o,f){if(E)return c(18,1,o,f);o>>>=0,f>>>=0;var y=0;return xs().forEach(($,x)=>{var z=f+y;for(x=l()[o+4*x>>>2>>>0]=z,z=0;z<$.length;++z)r()[x++>>>0]=$.charCodeAt(z);r()[x>>>0]=0,y+=$.length+1}),0}function Es(o,f){if(E)return c(19,1,o,f);o>>>=0,f>>>=0;var y=xs();l()[o>>>2>>>0]=y.length;var $=0;return y.forEach(x=>$+=x.length+1),l()[f>>>2>>>0]=$,0}function Is(o){return E?c(20,1,o):52}function ks(o,f,y,$){return E?c(21,1,o,f,y,$):52}function Ts(o,f,y,$){return E?c(22,1,o,f,y,$):70}var dm=[null,[],[]];function Cs(o,f,y,$){if(E)return c(23,1,o,f,y,$);f>>>=0,y>>>=0,$>>>=0;for(var x=0,z=0;z<y;z++){var N=l()[f>>>2>>>0],q=l()[f+4>>>2>>>0];f+=8;for(var K=0;K<q;K++){var Y=i()[N+K>>>0],ae=dm[o];Y===0||Y===10?((o===1?le:te)(Va(ae,0)),ae.length=0):ae.push(Y)}x+=q}return l()[$>>>2>>>0]=x,0}var As=[31,29,31,30,31,30,31,31,30,31,30,31],zs=[31,28,31,30,31,30,31,31,30,31,30,31],pm=(o,f)=>{r().set(o,f>>>0)};function Bs(o,f,y,$){function x(M,me,Re){for(M=typeof M=="number"?M.toString():M||"";M.length<me;)M=Re[0]+M;return M}function z(M,me){return x(M,me,"0")}function N(M,me){function Re(Gs){return 0>Gs?-1:0<Gs?1:0}var Ht;return(Ht=Re(M.getFullYear()-me.getFullYear()))===0&&(Ht=Re(M.getMonth()-me.getMonth()))===0&&(Ht=Re(M.getDate()-me.getDate())),Ht}function q(M){switch(M.getDay()){case 0:return new Date(M.getFullYear()-1,11,29);case 1:return M;case 2:return new Date(M.getFullYear(),0,3);case 3:return new Date(M.getFullYear(),0,2);case 4:return new Date(M.getFullYear(),0,1);case 5:return new Date(M.getFullYear()-1,11,31);case 6:return new Date(M.getFullYear()-1,11,30)}}function K(M){var me=M.Bb;for(M=new Date(new Date(M.Cb+1900,0,1).getTime());0<me;){var Re=M.getMonth(),Ht=(rr(M.getFullYear())?As:zs)[Re];if(!(me>Ht-M.getDate())){M.setDate(M.getDate()+me);break}me-=Ht-M.getDate()+1,M.setDate(1),11>Re?M.setMonth(Re+1):(M.setMonth(0),M.setFullYear(M.getFullYear()+1))}return Re=new Date(M.getFullYear()+1,0,4),me=q(new Date(M.getFullYear(),0,4)),Re=q(Re),0>=N(me,M)?0>=N(Re,M)?M.getFullYear()+1:M.getFullYear():M.getFullYear()-1}o>>>=0,f>>>=0,y>>>=0,$>>>=0;var Y=l()[$+40>>>2>>>0];for(var ae in $={kc:a()[$>>>2>>>0],jc:a()[$+4>>>2>>>0],Hb:a()[$+8>>>2>>>0],Lb:a()[$+12>>>2>>>0],Ib:a()[$+16>>>2>>>0],Cb:a()[$+20>>>2>>>0],ub:a()[$+24>>>2>>>0],Bb:a()[$+28>>>2>>>0],rc:a()[$+32>>>2>>>0],ic:a()[$+36>>>2>>>0],lc:Y?Ve(Y):""},y=Ve(y),Y={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})y=y.replace(new RegExp(ae,"g"),Y[ae]);var ye="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ve="January February March April May June July August September October November December".split(" ");for(ae in Y={"%a":M=>ye[M.ub].substring(0,3),"%A":M=>ye[M.ub],"%b":M=>ve[M.Ib].substring(0,3),"%B":M=>ve[M.Ib],"%C":M=>z((M.Cb+1900)/100|0,2),"%d":M=>z(M.Lb,2),"%e":M=>x(M.Lb,2," "),"%g":M=>K(M).toString().substring(2),"%G":K,"%H":M=>z(M.Hb,2),"%I":M=>((M=M.Hb)==0?M=12:12<M&&(M-=12),z(M,2)),"%j":M=>{for(var me=0,Re=0;Re<=M.Ib-1;me+=(rr(M.Cb+1900)?As:zs)[Re++]);return z(M.Lb+me,3)},"%m":M=>z(M.Ib+1,2),"%M":M=>z(M.jc,2),"%n":()=>`
`,"%p":M=>0<=M.Hb&&12>M.Hb?"AM":"PM","%S":M=>z(M.kc,2),"%t":()=>"	","%u":M=>M.ub||7,"%U":M=>z(Math.floor((M.Bb+7-M.ub)/7),2),"%V":M=>{var me=Math.floor((M.Bb+7-(M.ub+6)%7)/7);if(2>=(M.ub+371-M.Bb-2)%7&&me++,me)me==53&&((Re=(M.ub+371-M.Bb)%7)==4||Re==3&&rr(M.Cb)||(me=1));else{me=52;var Re=(M.ub+7-M.Bb-1)%7;(Re==4||Re==5&&rr(M.Cb%400-1))&&me++}return z(me,2)},"%w":M=>M.ub,"%W":M=>z(Math.floor((M.Bb+7-(M.ub+6)%7)/7),2),"%y":M=>(M.Cb+1900).toString().substring(2),"%Y":M=>M.Cb+1900,"%z":M=>{var me=0<=(M=M.ic);return M=Math.abs(M)/60,(me?"+":"-")+("0000"+(M/60*100+M%60)).slice(-4)},"%Z":M=>M.lc,"%%":()=>"%"},y=y.replace(/%%/g,"\0\0"),Y)y.includes(ae)&&(y=y.replace(new RegExp(ae,"g"),Y[ae]($)));return ae=function(M){var me=Array(Ri(M)+1);return Ha(M,me,0,me.length),me}(y=y.replace(/\0\0/g,"%")),ae.length>f?0:(pm(ae,o),ae.length-1)}function hm(o,f,y,$){return Bs(o>>>0,f>>>0,y>>>0,$>>>0)}E||function(){for(var o=u.numThreads-1;o--;)Fa();Je.unshift(()=>{et++,function(f){E?f():Promise.all(R.map(Se)).then(f)}(()=>ct())})}();for(var Os=Array(256),Yr=0;256>Yr;++Yr)Os[Yr]=String.fromCharCode(Yr);as=Os,Rt=u.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},u.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},Bt.push(0,1,void 0,1,null,1,!0,1,!1,1),u.count_emval_handles=()=>Bt.length/2-5-Di.length;var cm=[m,k,Wa,ja,Ga,Ka,Ya,Za,Xa,Qa,Ja,es,ts,rs,is,ns,ws,$s,Ss,Es,Is,ks,Ts,Cs],re=function(){function o(y,$){return re=y.exports,re=function(){var x=re,z={};for(let[N,q]of Object.entries(x))z[N]=typeof q=="function"?(...K)=>{jr.push(N);try{return q(...K)}finally{qe||(jr.pop(),St&&Pt===1&&jr.length===0&&(Pt=0,v+=1,Vr(Ls),typeof Fibers<"u"&&Fibers.sc()))}}:q;return z}(),re=function(){var x=re,z=q=>K=>q(K)>>>0,N=q=>()=>q()>>>0;return(x=Object.assign({},x)).Ca=z(x.Ca),x.fb=N(x.fb),x.gb=z(x.gb),x.emscripten_main_runtime_thread_id=N(x.emscripten_main_runtime_thread_id),x.sb=z(x.sb),x.tb=N(x.tb),x}(),ce.push(re.ib),Oe.unshift(re.Ba),$e=$,ct(),re}var f=fr();if(et++,u.instantiateWasm)try{return u.instantiateWasm(f,o)}catch(y){te(`Module.instantiateWasm callback failed with error: ${y}`),g(y)}return cr||(cr=u.locateFile?Ur("ort-wasm-simd-threaded.jsep.wasm")?"ort-wasm-simd-threaded.jsep.wasm":u.locateFile?u.locateFile("ort-wasm-simd-threaded.jsep.wasm",W):W+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("ort-wasm-simd-threaded.jsep-lJMlFoGk.wasm",import.meta.url).href,import.meta.url).href),function(y,$){var x=cr;return H||typeof WebAssembly.instantiateStreaming!="function"||Ur(x)||er(x)||typeof fetch!="function"?Fr(x,y,$):fetch(x,{credentials:"same-origin"}).then(z=>WebAssembly.instantiateStreaming(z,y).then($,function(N){return te(`wasm streaming compile failed: ${N}`),te("falling back to ArrayBuffer instantiation"),Fr(x,y,$)}))}(f,function(y){o(y.instance,y.module)}).catch(g),{}}(),Rs=o=>(Rs=re.Ca)(o),Ms=()=>(Ms=re.Da)();u._OrtInit=(o,f)=>(u._OrtInit=re.Ea)(o,f),u._OrtGetLastError=(o,f)=>(u._OrtGetLastError=re.Fa)(o,f),u._OrtCreateSessionOptions=(o,f,y,$,x,z,N,q,K,Y)=>(u._OrtCreateSessionOptions=re.Ga)(o,f,y,$,x,z,N,q,K,Y),u._OrtAppendExecutionProvider=(o,f)=>(u._OrtAppendExecutionProvider=re.Ha)(o,f),u._OrtAddFreeDimensionOverride=(o,f,y)=>(u._OrtAddFreeDimensionOverride=re.Ia)(o,f,y),u._OrtAddSessionConfigEntry=(o,f,y)=>(u._OrtAddSessionConfigEntry=re.Ja)(o,f,y),u._OrtReleaseSessionOptions=o=>(u._OrtReleaseSessionOptions=re.Ka)(o),u._OrtCreateSession=(o,f,y)=>(u._OrtCreateSession=re.La)(o,f,y),u._OrtReleaseSession=o=>(u._OrtReleaseSession=re.Ma)(o),u._OrtGetInputOutputCount=(o,f,y)=>(u._OrtGetInputOutputCount=re.Na)(o,f,y),u._OrtGetInputName=(o,f)=>(u._OrtGetInputName=re.Oa)(o,f),u._OrtGetOutputName=(o,f)=>(u._OrtGetOutputName=re.Pa)(o,f),u._OrtFree=o=>(u._OrtFree=re.Qa)(o),u._OrtCreateTensor=(o,f,y,$,x,z)=>(u._OrtCreateTensor=re.Ra)(o,f,y,$,x,z),u._OrtGetTensorData=(o,f,y,$,x)=>(u._OrtGetTensorData=re.Sa)(o,f,y,$,x),u._OrtReleaseTensor=o=>(u._OrtReleaseTensor=re.Ta)(o),u._OrtCreateRunOptions=(o,f,y,$)=>(u._OrtCreateRunOptions=re.Ua)(o,f,y,$),u._OrtAddRunConfigEntry=(o,f,y)=>(u._OrtAddRunConfigEntry=re.Va)(o,f,y),u._OrtReleaseRunOptions=o=>(u._OrtReleaseRunOptions=re.Wa)(o),u._OrtCreateBinding=o=>(u._OrtCreateBinding=re.Xa)(o),u._OrtBindInput=(o,f,y)=>(u._OrtBindInput=re.Ya)(o,f,y),u._OrtBindOutput=(o,f,y,$)=>(u._OrtBindOutput=re.Za)(o,f,y,$),u._OrtClearBoundOutputs=o=>(u._OrtClearBoundOutputs=re._a)(o),u._OrtReleaseBinding=o=>(u._OrtReleaseBinding=re.$a)(o),u._OrtRunWithBinding=(o,f,y,$,x)=>(u._OrtRunWithBinding=re.ab)(o,f,y,$,x),u._OrtRun=(o,f,y,$,x,z,N,q)=>(u._OrtRun=re.bb)(o,f,y,$,x,z,N,q),u._OrtEndProfiling=o=>(u._OrtEndProfiling=re.cb)(o),u._JsepOutput=(o,f,y)=>(u._JsepOutput=re.db)(o,f,y),u._JsepGetNodeName=o=>(u._JsepGetNodeName=re.eb)(o);var Zr,ir=()=>(ir=re.fb)(),Xr=u._malloc=o=>(Xr=u._malloc=re.gb)(o),Et=u._free=o=>(Et=u._free=re.hb)(o),Hi=(o,f,y,$,x,z)=>(Hi=re.kb)(o,f,y,$,x,z),Ps=()=>(Ps=re.lb)(),Ds=(o,f,y,$,x)=>(Ds=re.mb)(o,f,y,$,x),Ki=o=>(Ki=re.nb)(o),Qr=o=>(Qr=re.ob)(o),Us=()=>(Us=re.pb)(),Ns=(o,f)=>(Ns=re.qb)(o,f),Jr=o=>(Jr=re.rb)(o),Yi=o=>(Yi=re.sb)(o),Zi=()=>(Zi=re.tb)(),Fs=u.dynCall_ii=(o,f)=>(Fs=u.dynCall_ii=re.vb)(o,f),Ws=o=>(Ws=re.wb)(o),Ls=()=>(Ls=re.xb)(),qs=o=>(qs=re.yb)(o),Vs=()=>(Vs=re.zb)();function js(){0<et||(E?(h(u),E||Lr(Oe),startWorker(u)):(Lr(Je),0<et||Zr||(Zr=!0,u.calledRun=!0,qe||(E||Lr(Oe),h(u),E||Lr(Fe)))))}return u.___start_em_js=881746,u.___stop_em_js=881968,u.stackSave=()=>Zi(),u.stackRestore=o=>Jr(o),u.stackAlloc=o=>Yi(o),u.UTF8ToString=Ve,u.stringToUTF8=tr,u.lengthBytesUTF8=Ri,ht=function o(){Zr||js(),Zr||(ht=o)},js(),w}),Nd=an,((e=globalThis.self)==null?void 0:e.name)==="em-pthread"&&an()}),sr,Ys,Zs,Xs,sn,Fd,Qs,Wd,Ai=V(()=>{var e,t;pa(),sr=import.meta.url??(typeof document<"u"?(e=document.currentScript)==null?void 0:e.src:typeof self<"u"?(t=self.location)==null?void 0:t.href:void 0),Ys=typeof location>"u"?void 0:location.origin,Zs=(r,i)=>{try{let n=i??sr;return(n?new URL(r,n):new URL(r)).origin===Ys}catch{return!1}},Xs=async r=>{let i=await(await fetch(r,{credentials:"same-origin"})).blob();return URL.createObjectURL(i)},sn=(Vm(),fi(Pd)).default,Fd=async()=>{if(!sr)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Zs(sr))return[void 0,sn()];let r=await Xs(sr);return[r,sn(r)]},Qs=(jm(),fi(Ud)).default,Wd=async(r,i,n)=>[void 0,Qs]}),on,ti,$r,un,Js,eo,ha,Le,Jt=V(()=>{Ai(),ti=!1,$r=!1,un=!1,Js=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},eo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},ha=async e=>{if(ti)return Promise.resolve();if($r)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(un)throw new Error("previous call to 'initializeWebAssembly()' failed.");$r=!0;let t=e.initTimeout,r=e.numThreads;if(!eo())throw new Error("WebAssembly SIMD is not supported in the current environment.");let i=Js();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,s=typeof n=="string"?n:void 0,a=n==null?void 0:n.mjs,l=(a==null?void 0:a.href)??a,d=n==null?void 0:n.wasm,p=(d==null?void 0:d.href)??d,h=e.wasmBinary,[g,u]=await Wd(l,s,r>1),w=!1,_=[];if(t>0&&_.push(new Promise(b=>{setTimeout(()=>{w=!0,b()},t)})),_.push(new Promise((b,E)=>{let I={numThreads:r};h?I.wasmBinary=h:(p||s)&&(I.locateFile=(S,C)=>p??(s??C)+S),u(I).then(S=>{$r=!1,ti=!0,on=S,b(),g&&URL.revokeObjectURL(g)},S=>{$r=!1,un=!0,E(S)})})),await Promise.race(_),w)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Le=()=>{if(ti&&on)return on;throw new Error("WebAssembly is not initialized yet.")}}),Ge,gi,Me,ca=V(()=>{Jt(),Ge=(e,t)=>{let r=Le(),i=r.lengthBytesUTF8(e)+1,n=r._malloc(i);return r.stringToUTF8(e,n,i),t.push(n),n},gi=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,s])=>{let a=t?t+n:n;if(typeof s=="object")gi(s,a+".",r,i);else if(typeof s=="string"||typeof s=="number")i(a,s.toString());else if(typeof s=="boolean")i(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},Me=e=>{let t=Le(),r=t.stackSave();try{let i=t.stackAlloc(8);t._OrtGetLastError(i,i+4);let n=t.HEAP32[i/4],s=t.HEAPU32[i/4+1],a=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${n}, ERROR_MESSAGE: ${a}`)}finally{t.stackRestore(r)}}}),Ld,Gm=V(()=>{Jt(),ca(),Ld=e=>{let t=Le(),r=0,i=[],n=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(n.terminate=!1);let s=0;return(e==null?void 0:e.tag)!==void 0&&(s=Ge(e.tag,i)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,s),r===0&&Me("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&gi(e.extra,"",new WeakSet,(a,l)=>{let d=Ge(a,i),p=Ge(l,i);t._OrtAddRunConfigEntry(r,d,p)!==0&&Me(`Can't set a run config entry: ${a} - ${l}.`)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(a=>t._free(a)),s}}}),to,ro,io,no,qd,Hm=V(()=>{Jt(),ca(),to=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},ro=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},io=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},no=(e,t,r)=>{for(let i of t){let n=typeof i=="string"?i:i.name;switch(n){case"webnn":if(n="WEBNN",typeof i!="string"){let a=i==null?void 0:i.deviceType;if(a){let l=Ge("deviceType",r),d=Ge(a,r);Le()._OrtAddSessionConfigEntry(e,l,d)!==0&&Me(`Can't set a session config entry: 'deviceType' - ${a}.`)}}break;case"webgpu":if(n="JS",typeof i!="string"){let a=i;if(a!=null&&a.preferredLayout){if(a.preferredLayout!=="NCHW"&&a.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${a.preferredLayout}`);let l=Ge("preferredLayout",r),d=Ge(a.preferredLayout,r);Le()._OrtAddSessionConfigEntry(e,l,d)!==0&&Me(`Can't set a session config entry: 'preferredLayout' - ${a.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${n}`)}let s=Ge(n,r);Le()._OrtAppendExecutionProvider(e,s)!==0&&Me(`Can't append execution provider: ${n}.`)}},qd=e=>{let t=Le(),r=0,i=[],n=e||{};io(n);try{let s=to(n.graphOptimizationLevel??"all"),a=ro(n.executionMode??"sequential"),l=typeof n.logId=="string"?Ge(n.logId,i):0,d=n.logSeverityLevel??2;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log serverity level is not valid: ${d}`);let p=n.logVerbosityLevel??0;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log verbosity level is not valid: ${p}`);let h=typeof n.optimizedModelFilePath=="string"?Ge(n.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(s,!!n.enableCpuMemArena,!!n.enableMemPattern,a,!!n.enableProfiling,0,l,d,p,h),r===0&&Me("Can't create session options."),n.executionProviders&&no(r,n.executionProviders,i),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);let g=Ge("enableGraphCapture",i),u=Ge(n.enableGraphCapture.toString(),i);t._OrtAddSessionConfigEntry(r,g,u)!==0&&Me(`Can't set a session config entry: 'enableGraphCapture' - ${n.enableGraphCapture}.`)}if(n.freeDimensionOverrides)for(let[g,u]of Object.entries(n.freeDimensionOverrides)){if(typeof g!="string")throw new Error(`free dimension override name must be a string: ${g}`);if(typeof u!="number"||!Number.isInteger(u)||u<0)throw new Error(`free dimension override value must be a non-negative integer: ${u}`);let w=Ge(g,i);t._OrtAddFreeDimensionOverride(r,w,u)!==0&&Me(`Can't set a free dimension override: ${g} - ${u}.`)}return n.extra!==void 0&&gi(n.extra,"",new WeakSet,(g,u)=>{let w=Ge(g,i),_=Ge(u,i);t._OrtAddSessionConfigEntry(r,w,_)!==0&&Me(`Can't set a session config entry: ${g} - ${u}.`)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r),i.forEach(a=>t._free(a)),s}}}),Tr,Xt,ur,fa,yi,ma,ga,Vn,oe=V(()=>{Tr=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Xt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},ur=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((n,s)=>n*s,1);return r>0?Math.ceil(i*r):void 0},fa=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},yi=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},ma=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ga=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool",Vn=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),ya,Vd=V(()=>{pa(),ya=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),s;try{s=new ArrayBuffer(i)}catch(l){if(l instanceof RangeError){let d=Math.ceil(i/65536);s=new WebAssembly.Memory({initial:d,maximum:d}).buffer}else throw l}let a=0;for(;;){let{done:l,value:d}=await n.read();if(l)break;let p=d.byteLength;new Uint8Array(s,a,p).set(d),a+=p}return new Uint8Array(s,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),ao,so,oo,uo,wa,lo,Ee,At=V(()=>{oe(),ao=["V","I","W","E","F"],so=(e,t)=>{console.log(`[${ao[e]},${new Date().toISOString()}]${t}`)},wa=(e,t)=>{oo=e,uo=t},lo=(e,t)=>{let r=yi(e),i=yi(oo);r>=i&&so(r,typeof t=="function"?t():t)},Ee=(...e)=>{uo&&lo(...e)}}),$a,jd=V(()=>{oe(),$a=(e,t)=>new(fa(t))(e)}),_a=V(()=>{}),ln,ri,ii,po,ho,dn,jn,co,Gd,Km=V(()=>{At(),_a(),ln=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),ri=[],ii=e=>Math.ceil(e/16)*16,po=e=>{for(let t=0;t<ri.length;t++){let r=ri[t];if(e<=r)return r}return Math.ceil(e/16)*16},ho=1,dn=()=>ho++,jn=async(e,t,r,i)=>{let n=ii(r),s=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,s,0,n),e.flush(),await s.mapAsync(GPUMapMode.READ);let l=s.getMappedRange();if(i){let d=i();return d.set(new Uint8Array(l,0,r)),d}else return new Uint8Array(l.slice(0,r))}finally{s.destroy()}},co=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersForUploadingPending=[],this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of ln)ri.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[])}upload(e,t){let r=t.buffer,i=t.byteOffset,n=t.byteLength,s=ii(n),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(a.originalSize!==n)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${n}`);let l=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),d=l.getMappedRange();new Uint8Array(d).set(new Uint8Array(r,i,n)),l.unmap();let p=this.backend.getCommandEncoder();this.backend.endComputePass(),p.copyBufferToBuffer(l,0,a.gpuData.buffer,0,s),Ee("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`),this.buffersForUploadingPending.push(l)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=ii(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return Ee("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=dn();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),Ee("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ee("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=po(e),i,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||s){let l=(n?this.freeBuffers:this.freeUniformBuffers).get(r);l?l.length>0?i=l.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let a={id:dn(),type:0,buffer:i};return this.storageCache.set(a.id,{gpuData:a,originalSize:e}),Ee("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=this.storageCache.get(e);if(!t)throw new Error("releasing data does not exist");return Ee("verbose",()=>`[WebGPU] GpuDataManager.release(id=${e}), gpuDataId=${t.gpuData.id}`),this.storageCache.delete(e),this.buffersPending.push(t.gpuData.buffer),t.originalSize}async download(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("data does not exist");await jn(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){for(let e of this.buffersForUploadingPending)e.destroy();if(this.buffersForUploadingPending=[],this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=ln.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e))}},Gd=(...e)=>new co(...e)}),fo,Ie,Ne=V(()=>{fo=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ie=e=>new fo(e)}),mo,dr,U,wi,Hd,Kd,Yd,pe=V(()=>{mo=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},dr=class{static calcShape(e,t,r=!1){let i=e.length,n=t.length;if(i===0)return t;if(n===0)return e;let s=Math.max(e.length,t.length),a=new Array(s);if(r){if(i<2||n<2)return;let l=mo.calcMatMulShape([e[i-2],e[i-1]],[t[n-2],t[n-1]]);if(l===void 0)return;[a[s-2],a[s-1]]=l}for(let l=r?3:1;l<=s;l++){let d=i-l<0?1:e[i-l],p=n-l<0?1:t[n-l];if(d!==p&&d>1&&p>1)return;let h=Math.max(d,p);if(d&&p)a[s-l]=Math.max(d,p);else{if(h>1)return;a[s-l]=0}}return a}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[i-n])return!1;return!0}},U=class hi{static size(t){return hi.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let n=new Array(i),s=i-1;for(;s>=0;){if(t[s]%r===0){n[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");n[s]=1,r/=t[s],s--}for(s--;s>=0;s--)n[s]=t[s];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return hi.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return hi.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let n=1;for(let s=r;s<i;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=t[s]}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let n=r-3;n>=0;--n)i[n]=i[n+1]*t[n+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((n,s)=>n+r[s]+r[s+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,n)=>i===r[n])}},wi=class Cr{static adjustPoolAttributes(t,r,i,n,s,a){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let l=0;l<r.length-2;l++)l>=i.length?i.push(r[l+2]):i[l]=r[l+2];for(let l=0;l<i.length;l++)if(l<n.length){if(n[l]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let l=0;l<i.length;l++)if(l<s.length){if(s[l]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let l=0;l<i.length*2;l++)if(l<a.length){if(a[l]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let l=0;l<i.length;l++){if(i[l]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[l]>=i[l]||a[l+i.length]>=i[l])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,n,s,a,l){if(l){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let d=0;d<t.length-2;d++)Cr.adjustPadAndReturnShape(t[d+(a?1:2)],r[d],i[d],n[d],s,d,d+t.length-2,l)}}static computePoolOutputShape(t,r,i,n,s,a,l){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let d=[r[0],r[1]];return Cr.computeShapeHelper(t,r,d,i,n,s,a,l),d}static computeConvOutputShape(t,r,i,n,s,a,l){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let d=[t[0],r[0]];return Cr.computeShapeHelper(!1,t,d,i,n,s,a,l),d}static computeShapeHelper(t,r,i,n,s,a,l,d){if(t)for(let p=0;p<r.length-2;p++)i.push(1);else for(let p=0;p<r.length-2;p++)i.push(Cr.adjustPadAndReturnShape(r[p+2],n[p],s[p],a[p],l,p,p+r.length-2,d))}static adjustPadAndReturnShape(t,r,i,n,s,a,l,d){let p=i*(n-1)+1;if(d&&d!=="NOTSET")switch(d){case"VALID":return s[a]=0,s[l]=0,Math.floor((t-p)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let h=((t+r-1)/r-1)*r+n-t;return s[a]=Math.floor(d==="SAME_LOWER"?(h+1)/2:h/2),s[l]=h-s[a],Math.floor((t+h-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[a]+s[l]-p)/r+1)}},Hd=class{static getShapeOfGemmResult(e,t,r,i,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,a,l;t?(s=e[1],a=e[0]):(s=e[0],a=e[1]);let d=-1;if(i?(l=r[0],d=1):(l=r[1],d=0),r[d]!==a)throw new Error("dimension mismatch");if(s<=0||l<=0||a<=0)throw new Error("invalid shape specified");if(n&&!dr.isValidBroadcast(n,[s,l]))throw new Error("gemm: invalid bias shape for broadcast");return[s,l,a]}},Kd=-34028234663852886e22,Yd=34028234663852886e22}),pr,ni,We,He,Q,Ue,Gn,lr,Ft,J,ai,L,ee,ba,go,Zd,Br,he=V(()=>{oe(),pe(),pr=64,ni=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(e){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},We=(e,t=1)=>{let r=ni(e,t);return typeof r=="string"?r:r[0]},He=(e,t=1)=>{let r=ni(e,t);return typeof r=="string"?r:r[1]},Q=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:U.computeStrides(r)})}),t},Ue=e=>e%4===0?4:e%2===0?2:1,Gn=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,lr=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,Ft=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,J=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,ai=(e,t,r,i,n)=>{let s=typeof r=="number",a=s?r:r.length,l=[...new Array(a).keys()],d=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,p=ni(t,n),h=typeof p=="string"?p:p[1],g=typeof p=="string"?p:p[0],u={indices:d,value:h,storage:g,tensor:t},w=D=>typeof D=="string"?D:`${D}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=s?"uniforms.":"",E=`${b}${e}_shape`,I=`${b}${e}_strides`,S="";for(let D=0;D<a-1;D++)S+=`
    let dim${D} = current / ${J(I,D,a)};
    let rest${D} = current % ${J(I,D,a)};
    indices[${D}] = dim${D};
    current = rest${D};
    `;S+=`indices[${a-1}] = current;`;let C=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${u.indices} {
    var indices: ${u.indices};
    var current = offset;
    ${S}
    return indices;
  }`,T=D=>(_.offsetToIndices=!0,a<2?D:`o2i_${e}(${D})`),A=[];if(a>=2)for(let D=a-1;D>=0;D--)A.push(`${J(I,D,a)} * (indices[${D}])`);let P=a<2?"":`
  fn i2o_${e}(indices: ${u.indices}) -> u32 {
    return ${A.join("+")};
  }`,O=D=>(_.indicesToOffset=!0,a<2?D:`i2o_${e}(${D})`),W=(...D)=>a===0?"0u":`${u.indices}(${D.map(w).join(",")})`,H=(D,j)=>a<2?`${D}`:`${J(D,j,a)}`,Z=(D,j,ne)=>a<2?`${D}=${ne};`:`${J(D,j,a)}=${ne};`,ue={},le=(D,j)=>{_.broadcastedIndicesToOffset=!0;let ne=`${j.name}broadcastedIndicesTo${e}Offset`;if(ne in ue)return`${ne}(${D})`;let se=[];for(let ge=a-1;ge>=0;ge--){let Be=j.indicesGet("outputIndices",ge+j.rank-a);se.push(`${H(I,ge)} * (${Be} % ${H(E,ge)})`)}return ue[ne]=`fn ${ne}(outputIndices: ${j.type.indices}) -> u32 {
             return ${se.length>0?se.join("+"):"0u"};
           }`,`${ne}(${D})`},te=(D,j)=>(()=>{if(u.storage===u.value)return`${e}[${D}]=${j};`;if(u.storage==="vec2<u32>"&&u.value==="i32")return`${e}[${D}]=vec2<u32>(u32(${j}), select(0u, 0xFFFFFFFFu, ${j} < 0));`;if(u.storage==="vec2<u32>"&&u.value==="u32")return`${e}[${D}]=vec2<u32>(u32(${j}), 0u);`;if(u.storage==="u32"&&u.value==="vec4<bool>")return`${e}[${D}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${j}));`;throw new Error(`not supported combination of storage type ${u.storage} and value type ${u.value} yet`)})(),we=D=>(()=>{if(u.storage===u.value)return`${e}[${D}]`;if(u.storage==="vec2<u32>"&&u.value==="i32")return`i32(${e}[${D}].x)`;if(u.storage==="vec2<u32>"&&u.value==="u32")return`u32(${e}[${D}].x)`;if(u.storage==="u32"&&u.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${D}] & 0xFFu), bool(${e}[${D}] & 0xFF00u), bool(${e}[${D}] & 0xFF0000u), bool(${e}[${D}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${u.storage} and value type ${u.value} yet`)})(),xe=a<2?"":`
  fn get_${e}ByIndices(indices: ${u.indices}) -> ${h} {
    return ${we(`i2o_${e}(indices)`)};
  }`,de=a<2?"":(()=>{let D=l.map(ne=>`d${ne}: u32`).join(", "),j=l.map(ne=>`d${ne}`).join(", ");return`
  fn get_${e}(${D}) -> ${h} {
    return get_${e}ByIndices(${W(j)});
  }`})(),$e=(...D)=>{if(D.length!==a)throw new Error(`indices length must be ${a}`);let j=D.map(w).join(",");return a===0?we("0u"):a===1?we(j[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${j})`)},X=D=>a<2?we(D):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${D})`),ie=a<2?"":`
  fn set_${e}ByIndices(indices: ${u.indices}, value: ${h}) {
    ${te(`i2o_${e}(indices)`,"value")}
  }`,fe=a<2?"":(()=>{let D=l.map(ne=>`d${ne}: u32`).join(", "),j=l.map(ne=>`d${ne}`).join(", ");return`
  fn set_${e}(${D}, value: ${h}) {
    set_${e}ByIndices(${W(j)}, value);
  }`})();return{impl:()=>{let D=[],j=!1;return _.offsetToIndices&&(D.push(C),j=!0),_.indicesToOffset&&(D.push(P),j=!0),_.broadcastedIndicesToOffset&&(Object.values(ue).forEach(ne=>D.push(ne)),j=!0),_.set&&(D.push(fe),j=!0),_.setByIndices&&(D.push(ie),j=!0),_.get&&(D.push(de),j=!0),_.getByIndices&&(D.push(xe),j=!0),!s&&j&&D.unshift(`const ${E} = ${u.indices}(${r.join(",")});`,`const ${I} = ${u.indices}(${U.computeStrides(r).join(",")});`),D.join(`
`)},type:u,offsetToIndices:T,indicesToOffset:O,broadcastedIndicesToOffset:le,indices:W,indicesGet:H,indicesSet:Z,set:(...D)=>{if(D.length!==a+1)throw new Error(`indices length must be ${a}`);let j=D[a];if(typeof j!="string")throw new Error("value must be string");let ne=D.slice(0,a).map(w).join(",");return a===0?te("0u",j):a===1?te(ne[0],j):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${ne}, ${j})`)},setByOffset:te,setByIndices:(D,j)=>a<2?te(D,j):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${D}, ${j});`),get:$e,getByOffset:we,getByIndices:X,usage:i,name:e,strides:I,shape:E,rank:a}},L=(e,t,r,i=1)=>ai(e,t,r,"input",i),ee=(e,t,r,i=1)=>ai(e,t,r,"output",i),ba=(e,t,r,i=1)=>ai(e,t,r,"internal",i),go=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=pr){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,a=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${s}) {
    ${a}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let n=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Zd=(e,t)=>new go(e,t),Br=(e,t)=>{let r=e.length,i=[];for(let n=0;n<r;n++){let s=r-1-n,a=e[s]||1;(t[t.length-1-n]||1)>1&&a===1&&i.unshift(s)}return i}}),yo,pn,wo,$o,_o,it,Xd,Qd,Vt=V(()=>{oe(),pe(),Ne(),he(),yo=e=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.")},pn=(e,t)=>t&&t.length!==e?[...new Array(e).keys()].reverse():t,wo=(e,t)=>U.sortBasedOnPerm(e,pn(e.length,t)),$o=(e,t,r,i)=>{let n=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)n+=r.indicesSet("a",e[s],`i[${s}]`);return n+="return a;}"},_o=(e,t)=>{let r=[],i=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&i.push(t[n]);return{newShape:r,newPerm:i}},it=(e,t)=>{let r=e.dataType,i=e.dims.length,n=pn(i,t),s=wo(e.dims,n),{newShape:a,newPerm:l}=_o(e.dims,n),d=U.areEqual(l,[2,3,1]),p=U.areEqual(l,[3,1,2]),h=a.length===2&&l[0]>l[1]||d||p,g=h?a:e.dims,u=s;h&&(g=d?[a[0],a[1]*a[2]]:p?[a[0]*a[1],a[2]]:a,u=[g[1],g[0]]);let w=L("a",r,g.length),_=ee("output",r,u.length),b=16,E;return h?E=I=>`
  ${I.registerUniform("output_size","u32").declareVariables(w,_)}
  var<workgroup> tile : array<array<${_.type.value}, ${b+1}>, ${b}>;
  ${I.mainStart([b,b,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${b} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${b}u + local_id.x;
    let input_row = workgroup_id_x * ${b}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${w.getByIndices(`${w.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${b}u + local_id.x;
    let output_row = workgroup_id_y * ${b}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${_.setByIndices(`${_.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`:E=I=>`
  ${I.registerUniform("output_size","u32").declareVariables(w,_)}

  ${$o(n,i,w,_)}

  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${_.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${_.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`,{name:h?"TransposeShared":"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let I=U.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:h?{x:Math.ceil(u[1]/b),y:Math.ceil(u[0]/b)}:{x:Math.ceil(I/64)},programUniforms:[{type:12,data:I},...Q(g,u)]}},getShaderSource:E}},Xd=(e,t)=>{yo(e.inputs),e.compute(it(e.inputs[0],t.perm))},Qd=e=>Ie({perm:e.perm})}),bo,vo,xo,So,Eo,Io,ko,To,Co,Ao,ft,Jd,ep,tp,rp,ip,np,ap,sp,op,up,Ym=V(()=>{oe(),pe(),he(),va(),Vt(),bo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},vo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},xo={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},So={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Eo=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},Io=(e,t)=>{let r=[],i=e.length;for(let s=0;s<i;s++)t.indexOf(s)===-1&&r.push(e[s]);let n=t.map(s=>e[s]);return[r,n]},ko=(e,t)=>{let r=e.length+t.length,i=[],n=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?i.push(e[n++]):i.push(1);return i},To=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Co=(e,t)=>{let r=[];if(!To(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Ao=(e,t,r,i,n,s,a)=>{let l=r[0].dims,d=U.size(s),p=U.size(a),h=L("_A",r[0].dataType,l),g=ee("output",n,s),u=32,w=`
          var<workgroup> aBestValues : array<f32, ${u}>;
       `;return{name:e,shaderCache:t,getShaderSource:_=>`
        ${_.registerUniform("reduceSize","u32").declareVariables(h,g)}
        ${w}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${_.mainStart(u)}

          let outputIndex = global_idx / ${u};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${xo[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${u}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${bo[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${u}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${vo[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${g.setByOffset("outputIndex",`${i==="mean"?`${g.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${g.type.storage}(${So[i]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:d},programUniforms:[{type:12,data:p}]})}},ft=(e,t,r,i)=>{let n=e.inputs.length===1?r:Hn(e.inputs,r),s=n.axes;s.length===0&&!n.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((w,_)=>_));let a=U.normalizeAxes(s,e.inputs[0].dims.length),l=a,d=e.inputs[0],p=Co(l,e.inputs[0].dims.length);p.length>0&&(d=e.compute(it(e.inputs[0],p),{inputs:[0],outputs:[-1]})[0],l=Eo(l.length,d.dims.length));let[h,g]=Io(d.dims,l),u=h;n.keepDims&&(u=ko(h,a)),e.compute(Ao(t,{hint:n.cacheKey,inputDependencies:["type"]},[d],i,e.inputs[0].dataType,u,g),{inputs:[d]})},Jd=(e,t)=>{ft(e,"ReduceMeanShared",t,"mean")},ep=(e,t)=>{ft(e,"ReduceL1Shared",t,"l1")},tp=(e,t)=>{ft(e,"ReduceL2Shared",t,"l2")},rp=(e,t)=>{ft(e,"ReduceLogSumExpShared",t,"logSumExp")},ip=(e,t)=>{ft(e,"ReduceMaxShared",t,"max")},np=(e,t)=>{ft(e,"ReduceMinShared",t,"min")},ap=(e,t)=>{ft(e,"ReduceProdShared",t,"prod")},sp=(e,t)=>{ft(e,"ReduceSumShared",t,"sum")},op=(e,t)=>{ft(e,"ReduceSumSquareShared",t,"sumSquare")},up=(e,t)=>{ft(e,"ReduceLogSumShared",t,"logSum")}}),mt,zo,$i,Hn,gt,Bo,Oo,Ro,Mo,Po,Do,Uo,No,Fo,Wo,yt,lp,dp,pp,hp,cp,fp,mp,gp,yp,wp,va=V(()=>{oe(),pe(),Ne(),he(),Ym(),mt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},zo=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],$i=(e,t,r,i,n,s,a=!1,l=!1)=>{let d=[],p=r[0].dims,h=p.length,g=U.normalizeAxes(n,h),u=!l&&g.length===0;p.forEach((b,E)=>{u||g.indexOf(E)>=0?a&&d.push(1):d.push(b)});let w=d.length,_=U.size(d);return{name:e,shaderCache:t,getShaderSource:b=>{let E=[],I=L("_A",r[0].dataType,h),S=ee("output",s,w),C=i(I,S,g),T=C[2];for(let A=0,P=0;A<h;A++)u||g.indexOf(A)>=0?(a&&P++,T=`for(var j${A}: u32 = 0; j${A} < ${p[A]}; j${A}++) {
                  ${C[2].includes("last_index")?`let last_index = j${A};`:""}
                  ${I.indicesSet("input_indices",A,`j${A}`)}
                  ${T}
                }`):(E.push(`${I.indicesSet("input_indices",A,S.indicesGet("output_indices",P))};`),P++);return`

        ${b.registerUniform("output_size","u32").declareVariables(I,S)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${I.type.indices};
          let output_indices = ${S.offsetToIndices("global_idx")};

          ${E.join(`
`)}
          ${C[0]}       // init ops for reduce max/min
          ${C[1]}
          ${T}
          ${C[3]}
          ${C.length===4?S.setByOffset("global_idx","value"):C.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:d,dataType:s}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...Q(p,d)]})}},Hn=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),Ie({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},gt=(e,t,r,i)=>{let n=e.inputs,s=n.length===1?r:Hn(n,r);e.compute($i(t,{hint:s.cacheKey,inputDependencies:["rank"]},[n[0]],s.noopWithEmptyAxes&&s.axes.length===0?zo:i,s.axes,n[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},Bo=(e,t)=>{mt(e.inputs),gt(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Oo=(e,t)=>{mt(e.inputs),gt(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Ro=(e,t)=>{mt(e.inputs),gt(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Mo=(e,t)=>{mt(e.inputs),gt(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Po=(e,t)=>{mt(e.inputs),gt(e,"ReduceMax",t,(r,i,n)=>{let s=[];for(let a=0;a<r.rank;a++)(n.indexOf(a)>=0||n.length===0)&&s.push(r.indicesSet("input_indices",a,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Do=(e,t)=>{mt(e.inputs),gt(e,"ReduceMean",t,(r,i,n)=>{let s=1;for(let a=0;a<r.rank;a++)(n.indexOf(a)>=0||n.length===0)&&(s*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${s});`]})},Uo=(e,t)=>{mt(e.inputs),gt(e,"ReduceMin",t,(r,i,n)=>{let s=[];for(let a=0;a<r.rank;a++)(n.indexOf(a)>=0||n.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},No=(e,t)=>{mt(e.inputs),gt(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Fo=(e,t)=>{mt(e.inputs),gt(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Wo=(e,t)=>{mt(e.inputs),gt(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},yt=(e,t,r)=>{if(t.length===0)return r;let i=1,n=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?i*=e[s]:n*=e[s];return n<32&&i>1024},lp=(e,t)=>{yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Do(e,t):Jd(e,t)},dp=(e,t)=>{yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Oo(e,t):ep(e,t)},pp=(e,t)=>{yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ro(e,t):tp(e,t)},hp=(e,t)=>{yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Mo(e,t):rp(e,t)},cp=(e,t)=>{yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Po(e,t):ip(e,t)},fp=(e,t)=>{yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Uo(e,t):np(e,t)},mp=(e,t)=>{yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?No(e,t):ap(e,t)},gp=(e,t)=>{yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fo(e,t):sp(e,t)},yp=(e,t)=>{yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Wo(e,t):op(e,t)},wp=(e,t)=>{yt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Bo(e,t):up(e,t)}}),hn,$p,_p,Kn,Zm=V(()=>{oe(),Ne(),va(),hn=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},$p=(e,t)=>{hn(e.inputs);let r=(i,n,s)=>{let a=[];for(let l=0;l<i.rank;l++)(s.indexOf(l)>=0||s.length===0)&&a.push(`input_indices[${l}] = 0;`);return[`${a.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute($i("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},_p=(e,t)=>{hn(e.inputs);let r=(i,n,s)=>{let a=[];for(let l=0;l<i.rank;l++)(s.indexOf(l)>=0||s.length===0)&&a.push(`input_indices[${l}] = 0;`);return[`${a.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute($i("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Kn=e=>Ie(e)}),Lo,qo,Vo,jo,Or,Go,bp,xa=V(()=>{oe(),pe(),_a(),he(),Lo=(e,t)=>{let r=e[0],i=e[1],n=e[2],s=e[3],a=e[4],l=e[5];if(a&&l)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let d=r.dims[0],p=r.dims[1],h=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let g=n.dims[0]/3,u=g,w=u;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let C of t.qkvHiddenSizes)if(C%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");g=t.qkvHiddenSizes[0],u=t.qkvHiddenSizes[1],w=t.qkvHiddenSizes[2]}let _=p;if(g!==u)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==g+u+w)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(a){if(u!==w)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==d)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==u/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=a.dims[3])}let E=_+b,I=-1,S=0;if(s)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(l){if(l.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[2]!==p||l.dims[3]!==E)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:p,pastSequenceLength:b,kvSequenceLength:_,totalSequenceLength:E,maxSequenceLength:I,inputHiddenSize:h,hiddenSize:g,vHiddenSize:w,headSize:Math.floor(g/t.numHeads),vHeadSize:Math.floor(w/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:S,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},qo=(e,t,r)=>{let i=Ue(r),n=64,s=r/i;s<n&&(n=32);let a=Math.ceil(r/i/n),l=[{type:1,data:1/r},{type:12,data:s},{type:12,data:a}],d=We(e.dataType,i),p=He(1,i),h=["type"],g=u=>{let w=ee("x",e.dataType,e.dims,i),_=He(e.dataType),b=[{name:"d_inv",type:"f32"},{name:"d_comp",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${n}>;
  var<workgroup> thread_sum: array<f32, ${n}>;
  ${u.registerUniforms(b).declareVariables(w)}
  ${u.mainStart([n,1,1])}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${n}) * uniforms.d_comp + local_offset;

    var thread_max_vector = ${p}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      thread_max_vector = max(${p}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(i){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${i}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${n}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${p}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      sum_vector += exp(${p}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(i){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${i}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${n}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        x[offset + i] = ${w.type.value}(${_}(uniforms.d_inv));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        var f32input = ${p}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${n};${d};${i}`,inputDependencies:h},getShaderSource:g,getRunData:()=>({outputs:[],dispatchGroup:{x:t},programUniforms:l})}},Vo=(e,t,r,i,n,s,a,l)=>{let d=l+s.kvSequenceLength,p=[s.batchSize,s.numHeads,s.sequenceLength,d],h=s.kvNumHeads===void 0&&e>1&&i,g=h?[s.batchSize,s.numHeads,d,s.headSize]:void 0,u=a.scale===0?1/Math.sqrt(s.headSize):a.scale,w=Ue(s.headSize),_=s.headSize/w,b=12,E={x:Math.ceil(d/b),y:Math.ceil(s.sequenceLength/b),z:s.batchSize*s.numHeads},I=[{type:12,data:s.sequenceLength},{type:12,data:_},{type:12,data:d},{type:12,data:s.numHeads},{type:1,data:u},{type:12,data:l},{type:12,data:s.kvSequenceLength}],S=h&&i&&U.size(i.dims)>0,C=["type","type"];S&&C.push("type"),n&&C.push("type");let T=[{dims:p,dataType:t.dataType,gpuDataType:0}];h&&T.push({dims:g,dataType:t.dataType,gpuDataType:0});let A=P=>{let O=L("q",t.dataType,t.dims,w),W=L("key",r.dataType,r.dims,w),H=[O,W];if(S){let we=L("past_key",i.dataType,i.dims,w);H.push(we)}n&&H.push(L("attention_bias",n.dataType,n.dims));let Z=ee("output",t.dataType,p),ue=[Z];h&&ue.push(ee("present_key",t.dataType,g,w));let le=He(1,w),te=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${O.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${O.type.storage}, ${b*b}>;
  ${P.registerUniforms(te).declareVariables(...H,...ue)}
  ${P.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let qOffset = uniforms.M * uniforms.K * headIdx + m * uniforms.K;
    ${S&&h?`
    let kOffset = uniforms.kv_sequence_length * uniforms.K * headIdx;
    let pastKeyOffset = uniforms.past_sequence_length * uniforms.K * headIdx;`:`
    let kOffset = uniforms.N * uniforms.K * headIdx + n * uniforms.K;`}
    ${h?"let presentKeyOffset = headIdx * uniforms.N * uniforms.K;":""}
    var value = ${le}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${S&&h?`
              if (n + local_id.y < uniforms.past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else {
                tileK[idx] =
                         key[kOffset + (n + local_id.y - uniforms.past_sequence_length) * uniforms.K + w + local_id.x];
              }`:"tileK[idx] = key[kOffset + local_id.y * uniforms.K + w + local_id.x];"}
      ${h?"present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];":""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
        value += ${le}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    let headOffset = headIdx * uniforms.M * uniforms.N;
    if (global_id.y < uniforms.M && global_id.x < uniforms.N) {
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(w){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${w}`)}})()};
        output[outputIdx] = ${Z.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${n!==void 0};${i!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:T,dispatchGroup:E,programUniforms:I}),getShaderSource:A}},jo=(e,t,r,i,n,s)=>{let a=s+n.kvSequenceLength,l=n.nReps?n.nReps:1,d=n.vHiddenSize*l,p=n.kvNumHeads==null&&e>1&&i,h=p?[n.batchSize,n.numHeads,a,n.headSize]:void 0,g=[n.batchSize,n.sequenceLength,d],u=12,w={x:Math.ceil(n.vHeadSize/u),y:Math.ceil(n.sequenceLength/u),z:n.batchSize*n.numHeads},_=[{type:12,data:n.sequenceLength},{type:12,data:a},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:d},{type:12,data:s},{type:12,data:n.kvSequenceLength}],b=p&&i&&U.size(i.dims)>0,E=["type","type"];b&&E.push("type");let I=[{dims:g,dataType:t.dataType,gpuDataType:0}];p&&I.push({dims:h,dataType:t.dataType,gpuDataType:0});let S=C=>{let T=L("probs",t.dataType,t.dims),A=L("v",r.dataType,r.dims),P=[T,A];b&&P.push(L("past_value",i.dataType,i.dims));let O=[ee("output",t.dataType,g)];p&&O.push(ee("present_value",t.dataType,h));let W=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${u}u;
  var<workgroup> tileQ: array<${T.type.value}, ${u*u}>;
  var<workgroup> tileK: array<${T.type.value}, ${u*u}>;
  ${C.registerUniforms(W).declareVariables(...P,...O)}
  ${C.mainStart([u,u,1])}
   let headIdx = workgroup_id.z;
   let m = global_id.y;
   let n = global_id.x;

   let offsetA = headIdx * (uniforms.M * uniforms.K) + m * uniforms.K;
   ${b&&p?`
    let pastValueOffset = headIdx * uniforms.N * uniforms.past_sequence_length + n;
    let vOffset = headIdx * uniforms.N * uniforms.kv_sequence_length + n;
      `:`
   let offsetB = headIdx * uniforms.N * uniforms.K + n;
            `}
    ${p?"let presentValueOffset = headIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${T.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&p?`
        if (w + local_id.y < uniforms.past_sequence_length) {
          tileK[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else {
          tileK[idx] = v[vOffset + (w + local_id.y - uniforms.past_sequence_length) * uniforms.N];
        }
      `:`
        tileK[idx] = v[offsetB + (w + local_id.y) * uniforms.N];
      `}
        ${p?"present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileK[idx];":""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let currentBatchHeadNumber = workgroup_id.z % uniforms.num_heads;
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + currentBatchHeadNumber * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:I,dispatchGroup:w,programUniforms:_}),getShaderSource:S}},Or=(e,t,r,i,n,s,a,l,d,p,h)=>{let g=Math.min(e.outputCount,1+(a?1:0)+(l?1:0)),u=p.kvNumHeads!==void 0||g>1?p.pastSequenceLength:0,w=u+p.kvSequenceLength,_=d&&U.size(d.dims)>0?d:void 0,b=[t,r];p.kvNumHeads===void 0&&g>1&&a&&U.size(a.dims)>0&&b.push(a),_&&b.push(_);let E=e.compute(Vo(g,t,r,a,_,p,h,u),{inputs:b,outputs:p.kvNumHeads===void 0&&g>1?[-1,1]:[-1]})[0];e.compute(qo(E,p.batchSize*p.numHeads*p.sequenceLength,w),{inputs:[E],outputs:[]});let I=[E,i];p.kvNumHeads===void 0&&g>1&&l&&U.size(l.dims)>0&&I.push(l),e.compute(jo(g,E,i,l,p,u),{inputs:I,outputs:p.kvNumHeads===void 0&&g>1?[0,2]:[0]})},Go=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,n=t.inputHiddenSize,s=t.headSize,a=12,l={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},d=[e.inputs[0],e.inputs[1],e.inputs[2]],p=[{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=g=>{let u=ee("output_q",d[0].dataType,r),w=ee("output_k",d[0].dataType,r),_=ee("output_v",d[0].dataType,r),b=L("input",d[0].dataType,d[0].dims),E=L("weight",d[1].dataType,d[1].dims),I=L("bias",d[2].dataType,d[2].dims),S=b.type.storage,C=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${S}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${S}, ${a*a}>;
  var<workgroup> tileWeightK: array<${S}, ${a*a}>;
  var<workgroup> tileWeightV: array<${S}, ${a*a}>;
  ${g.registerUniforms(C).declareVariables(b,E,I,u,w,_)}
  ${g.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${S}(0);
    var valueK = ${S}(0);
    var valueV = ${S}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:l,programUniforms:p}),getShaderSource:h},{inputs:d,outputs:[-1,-1,-1]})},bp=(e,t)=>{let r=Lo(e.inputs,t),[i,n,s]=Go(e,r);return Or(e,i,n,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r,t)}}),Ho,Ko,Yo,vp,Xm=V(()=>{vt(),oe(),pe(),Ne(),he(),Ho=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,n,s)=>{let a=n.length;if(a!==i.length)throw new Error(`${s}: num dimensions != ${a}`);n.forEach((l,d)=>{if(l!==i[d])throw new Error(`${s}: dim[${d}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Ko=(e,t)=>{let{epsilon:r,spatial:i,format:n}=t,s=e[0].dims,a=i?Ue(s[s.length-1]):1,l=n==="NHWC"&&s.length>1?a:1,d=U.size(s)/a,p=i,h=p?s.length:s,g=L("x",e[0].dataType,e[0].dims,a),u=L("scale",e[1].dataType,e[1].dims,l),w=L("bias",e[2].dataType,e[2].dims,l),_=L("inputMean",e[3].dataType,e[3].dims,l),b=L("inputVar",e[4].dataType,e[4].dims,l),E=ee("y",e[0].dataType,h,a),I=()=>{let C="";if(i)C=`let cOffset = ${s.length===1?"0u":n==="NHWC"?`outputIndices[${s.length-1}] / ${a}`:"outputIndices[1]"};`;else if(n==="NCHW")C=`
            ${E.indicesSet("outputIndices","0","0")}
            let cOffset = ${E.indicesToOffset("outputIndices")};`;else{C=`var cIndices = ${u.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let T=1;T<u.rank;T++)C+=`cIndices[${T}] = outputIndices[${T}];`;C+=`let cOffset = ${u.indicesToOffset("cIndices")};`}return C},S=C=>`
  const epsilon = ${r};
  ${C.registerUniform("outputSize","u32").declareVariables(g,u,w,_,b,E)}
  ${C.mainStart()}
  ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${E.offsetToIndices(`global_idx * ${a}`)};
    ${I()}
    let scale = ${u.getByOffset("cOffset")};
    let bias = ${w.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${g.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${E.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${a}`,inputDependencies:p?["rank","type","type","type","type"]:void 0},getShaderSource:S,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p?[{type:12,data:d},...Q(s)]:[{type:12,data:d}]})}},Yo=e=>Ie(e),vp=(e,t)=>{let{inputs:r,outputCount:i}=e,n=Yo({...t,outputCount:i});if(ze.webgpu.validateInputContent&&Ho(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Ko(r,n))}}),Zo,Xo,xp,Qm=V(()=>{pe(),he(),Zo=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Xo=e=>{let t=e[0].dims,r=e[0].dims[2],i=U.size(t)/4,n=e[0].dataType,s=L("input",n,t,4),a=L("bias",n,[r],4),l=L("residual",n,t,4),d=ee("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:p=>`
  const channels = ${r}u / 4;
  ${p.declareVariables(s,a,l,d)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${s.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx","value")}
  }`}},xp=e=>{Zo(e.inputs),e.compute(Xo(e.inputs))}}),Qo,_e,Sp,Ep,Ip,kp,Tp,Cp,Ap,zp,Bp,Jo,Op,Rp,Mp,Pp,Ar,Dp,ci,Up,Np,Fp,Wp,Lp,qp,Vp,jp,Gp,Hp,Kp,Yp,Zp,Xp,Qp,Jp,cn,eh,Yn,Zn,th,rh,ih,eu,tu,nh,Sa=V(()=>{oe(),pe(),Ne(),he(),Qo=(e,t,r,i,n,s,a)=>{let l=Math.ceil(t/4),d="";typeof n=="string"?d=`${n}(a)`:d=n("a");let p=L("inputData",r,[l],4),h=ee("outputData",i,[l],4),g=[{name:"vec_size",type:"u32"}];return a&&g.push(...a),`
      ${e.registerUniforms(g).declareVariables(p,h)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${p.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",d)}
  }`},_e=(e,t,r,i,n,s=e.dataType,a,l)=>{let d=[{type:12,data:Math.ceil(U.size(e.dims)/4)}];return a&&d.push(...a),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:p=>Qo(p,U.size(e.dims),e.dataType,s,r,i,l),getRunData:p=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(U.size(p[0].dims)/64/4)},programUniforms:d})}},Sp=e=>{e.compute(_e(e.inputs[0],"Abs","abs"))},Ep=e=>{e.compute(_e(e.inputs[0],"Acos","acos"))},Ip=e=>{e.compute(_e(e.inputs[0],"Acosh","acosh"))},kp=e=>{e.compute(_e(e.inputs[0],"Asin","asin"))},Tp=e=>{e.compute(_e(e.inputs[0],"Asinh","asinh"))},Cp=e=>{e.compute(_e(e.inputs[0],"Atan","atan"))},Ap=e=>{e.compute(_e(e.inputs[0],"Atanh","atanh"))},zp=e=>Ie(e),Bp=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(_e(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Jo=e=>{let t,r,i=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ie({min:t,max:r})},Op=(e,t)=>{let r=t||Jo(e.inputs),i=He(e.inputs[0].dataType);e.compute(_e(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Rp=e=>{e.compute(_e(e.inputs[0],"Ceil","ceil"))},Mp=e=>{e.compute(_e(e.inputs[0],"Cos","cos"))},Pp=e=>{e.compute(_e(e.inputs[0],"Cosh","cosh"))},Ar=e=>Ie(e),Dp=(e,t)=>{let r=He(e.inputs[0].dataType);e.compute(_e(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},ci=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Up=e=>{let t=He(e.inputs[0].dataType);e.compute(_e(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,ci(t)))},Np=e=>{e.compute(_e(e.inputs[0],"Exp","exp"))},Fp=e=>{e.compute(_e(e.inputs[0],"Floor","floor"))},Wp=e=>{let t=He(e.inputs[0].dataType);e.compute(_e(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,ci(t)))},Lp=(e,t)=>{let r=He(e.inputs[0].dataType);e.compute(_e(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},qp=e=>{e.compute(_e(e.inputs[0],"Not",t=>`!${t}`))},Vp=e=>{e.compute(_e(e.inputs[0],"Neg",t=>`-${t}`))},jp=e=>{e.compute(_e(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Gp=e=>{let t=He(e.inputs[0].dataType);e.compute(_e(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Hp=e=>{e.compute(_e(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Kp=e=>Ie(e),Yp=(e,t)=>{let r=He(e.inputs[0].dataType);e.compute(_e(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Zp=e=>{e.compute(_e(e.inputs[0],"Sin","sin"))},Xp=e=>{e.compute(_e(e.inputs[0],"Sinh","sinh"))},Qp=e=>{e.compute(_e(e.inputs[0],"Sqrt","sqrt"))},Jp=e=>{e.compute(_e(e.inputs[0],"Tan","tan"))},cn=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,eh=e=>{e.compute(_e(e.inputs[0],"Tanh",cn))},Yn=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${cn("v")};
}
`,Zn=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,th=e=>{let t=He(e.inputs[0].dataType);e.compute(_e(e.inputs[0],"FastGelu",Zn,Yn(t),void 0,e.inputs[0].dataType))},rh=(e,t)=>{let r=He(e.inputs[0].dataType);return e.compute(_e(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},ih=e=>{e.compute(_e(e.inputs[0],"Log","log"))},eu=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,tu=e=>`quick_gelu_impl(${e})`,nh=(e,t)=>{let r=He(e.inputs[0].dataType);e.compute(_e(e.inputs[0],"QuickGelu",tu,eu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),ru,iu,ah,Jm=V(()=>{pe(),he(),Sa(),ru=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},iu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=L("input",e[0].dataType,e[0].dims,4),i=L("bias",e[0].dataType,[e[0].dims[2]],4),n=ee("output",e[0].dataType,t,4),s=U.size(t)/4,a=We(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:l=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${l.declareVariables(r,i,n)}

  ${ci(a)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},ah=e=>{ru(e.inputs),e.compute(iu(e.inputs))}}),nu,au,wt,sh,oh,uh,lh,dh,ph,hh,ch,fh,mh,eg=V(()=>{oe(),pe(),he(),nu=(e,t,r,i,n,s,a,l,d,p,h,g)=>{let u,w;typeof l=="string"?u=w=(S,C)=>`${l}((${S}),(${C}))`:typeof l=="function"?u=w=l:(u=l.scalar,w=l.vector);let _=ee("outputData",h,i.length,4),b=L("aData",d,t.length,4),E=L("bData",p,r.length,4),I;if(n)if(s){let S=U.size(t)===1,C=U.size(r)===1,T=t.length>0&&t[t.length-1]%4===0,A=r.length>0&&r[r.length-1]%4===0;S||C?I=_.setByOffset("global_idx",w(S?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),C?`${E.type.value}(${E.getByOffset("0")}.x)`:E.getByOffset("global_idx"))):I=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${E.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",w(a||T?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||A?E.getByOffset("offsetB / 4u"):`${E.type.value}(${E.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else I=_.setByOffset("global_idx",w(b.getByOffset("global_idx"),E.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let S=(C,T,A="")=>{let P=`aData[indexA${T}][componentA${T}]`,O=`bData[indexB${T}][componentB${T}]`;return`
            let outputIndices${T} = ${_.offsetToIndices(`global_idx * 4u + ${T}u`)};
            let offsetA${T} = ${b.broadcastedIndicesToOffset(`outputIndices${T}`,_)};
            let offsetB${T} = ${E.broadcastedIndicesToOffset(`outputIndices${T}`,_)};
            let indexA${T} = offsetA${T} / 4u;
            let indexB${T} = offsetB${T} / 4u;
            let componentA${T} = offsetA${T} % 4u;
            let componentB${T} = offsetB${T} % 4u;
            ${C}[${T}] = ${A}(${u(P,O)});
          `};h===9?I=`
            var data = vec4<u32>(0);
            ${S("data",0,"u32")}
            ${S("data",1,"u32")}
            ${S("data",2,"u32")}
            ${S("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:I=`
            ${S("outputData[global_idx]",0)}
            ${S("outputData[global_idx]",1)}
            ${S("outputData[global_idx]",2)}
            ${S("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,E,_)}

        ${g??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${I}
      }`},au=(e,t,r,i,n,s,a=r.dataType)=>{let l=!U.areEqual(r.dims,i.dims),d=r.dims,p=U.size(r.dims),h=!1,g=!1,u=[l];if(l){let w=dr.calcShape(r.dims,i.dims,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");d=w,p=U.size(d);let _=U.size(r.dims)===1,b=U.size(i.dims)===1,E=r.dims.length>0&&r.dims[r.dims.length-1]%4===0,I=i.dims.length>0&&i.dims[i.dims.length-1]%4===0;u.push(_),u.push(b),u.push(E),u.push(I);let S=1;for(let C=1;C<d.length;C++){let T=r.dims[r.dims.length-C]??1,A=i.dims[i.dims.length-C]??1;if(T===A)S*=T;else break}S%4===0?(g=!0,h=!0):(_||b||E||I)&&(h=!0)}else h=!0;return u.push(h),{name:e,shaderCache:{hint:t+u.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>nu(w,r.dims,i.dims,d,h,l,g,n,r.dataType,i.dataType,a,s),getRunData:()=>({outputs:[{dims:d,dataType:a}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(U.size(d)/4)},...Q(r.dims,i.dims,d)]})}},wt=(e,t,r,i,n,s)=>{e.compute(au(t,n??"",e.inputs[0],e.inputs[1],r,i,s))},sh=e=>{wt(e,"Add",(t,r)=>`${t}+${r}`)},oh=e=>{wt(e,"Div",(t,r)=>`${t}/${r}`)},uh=e=>{wt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},lh=e=>{wt(e,"Mul",(t,r)=>`${t}*${r}`)},dh=e=>{let t=L("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;wt(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},ph=e=>{wt(e,"Sub",(t,r)=>`${t}-${r}`)},hh=e=>{wt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},ch=e=>{wt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},fh=e=>{wt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},mh=e=>{wt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),su,ou,uu,lu,gh,yh,tg=V(()=>{oe(),pe(),Ne(),he(),su=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],n=i.dataType,s=i.dims.length;e.forEach((a,l)=>{if(l!==r){if(a.dataType!==n)throw new Error("input tensors should be one type");if(a.dims.length!==s)throw new Error("input tensors should have the same shape");a.dims.forEach((d,p)=>{if(p!==t&&d!==i.dims[p])throw new Error("non concat dimensions must match")})}})},ou=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,uu=(e,t)=>{let r=e.length,i=[];for(let n=0;n<r;++n){let s=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?i.push(s):n===0?i.push(`if (inputIndex == ${n}u) { ${s} }`):n===r-1?i.push(`else { ${s} }`):i.push(`else if (inputIndex == ${n}) { ${s} }`)}return i.join(`
`)},lu=(e,t,r,i)=>{let n=U.size(r),s=new Array(e.length),a=new Array(e.length),l=0,d=[],p=[],h=[{type:12,data:n}];for(let b=0;b<e.length;++b)l+=e[b].dims[t],s[b]=l,p.push(e[b].dims.length),a[b]=L(`input${b}`,i,p[b]),d.push("rank"),h.push({type:12,data:s[b]});for(let b=0;b<e.length;++b)h.push(...Q(e[b].dims));h.push(...Q(r));let g=ee("output",i,r.length),u=g.indicesGet("indices",t),w=Array.from(Array(s.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),_=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let E=0;E<e.length;E++)b.registerUniform(`sizeInConcatAxis${E}`,"u32");return b.declareVariables(...a,g)})()}

  ${ou(s.length,w)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${g.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${u});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${w});
      ${u} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${uu(a,g)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:h}),getShaderSource:_}},gh=(e,t)=>{let r=e.inputs,i=r[0].dims,n=U.normalizeAxis(t.axis,i.length);su(r,n);let s=i.slice();s[n]=r.reduce((l,d)=>l+(d.dims.length>n?d.dims[n]:0),0);let a=r.filter(l=>U.size(l.dims)>0);e.compute(lu(a,n,s,r[0].dataType),{inputs:a})},yh=e=>Ie({axis:e.axis})}),Wt,Lt,qt,Ea,jt=V(()=>{oe(),pe(),Wt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Lt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},qt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Ea=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,i]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=(e==null?void 0:e.activation_params)||[Kd,Yd];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ke,Ia,zi=V(()=>{Ke=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Ia=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),ka,wh=V(()=>{ka=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),du,pu,_i,fn,hu,bi,cu,Ta,Bi=V(()=>{oe(),pe(),he(),jt(),zi(),du=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,pu=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,_i=(e,t,r="f32",i,n=!1,s=32,a=!1,l=32)=>{let d=t[1]*e[1],p=t[0]*e[0],h=n?d:s,g=n?s:d,u=h/t[0],w=s/t[1];if(!((n&&u===4&&e[1]===4||!n&&(u===3||u===4))&&h%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${u} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${u} must be 3 or 4.
  tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${u}<${r}>, ${h/u}>, ${g}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${p/e[0]}>, ${s}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${u};
const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${a?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${d};

  let num_tiles = ${a?`${Math.ceil(l/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${l}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${w};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${du(n,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${u===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${pu(n,u)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},fn=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,hu=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",bi=(e,t,r="f32",i,n=!1,s=32,a=!1,l=32,d=!1)=>{let p=e[1]*t[1],h=e[0]*t[0],g=n?p:s,u=n?s:p;if(!(u%t[1]===0&&g%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${u} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${g} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let w=u/t[1],_=g/t[0],b=s/t[1],E=d?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${p};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${u}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${g}; inputCol = inputCol + ${t[0]}) {
          ${fn(n,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${p};

let tileRowA = i32(localId.y) * ${w};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${fn(n,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${hu(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${g}>, ${u}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${h}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(l/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${l}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${E}
  }
`},cu=(e,t,r,i,n,s=!1)=>{let[a,l,d]=n,[p,h,g,u]=i,w=Br(a,d),_=Br(l,d),b=We(i[0].type.tensor),E=()=>{let S=h.rank,C=p.rank,T=`var aIndices: ${h.type.indices};`;for(let A=S-2-1,P=C-1;A>=0;A--,P--)T+=`
aIndices[${A}] = ${C>1?`batchIndices[${P}]`:"batchIndices"};`;return w.forEach(A=>{T+=`
aIndices[${A}] = 0;`}),T+=`
aIndices[${S-2}] = u32(row);
                   aIndices[${S-1}] = u32(colIn);`,T},I=()=>{let S=g.rank,C=p.rank,T=`var bIndices: ${g.type.indices};`;for(let A=S-2-1,P=C-1;A>=0;A--,P--)T+=`
bIndices[${A}] = ${C>1?`batchIndices[${P}]`:"batchIndices"};`;return _.forEach(A=>{T+=`
bIndices[${A}] = 0;`}),T+=`
bIndices[${S-2}] = u32(row);
                   bIndices[${S-1}] = u32(colIn);`,T};return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${p.type.indices}) -> ${Ke(e,b)} {
      var value = ${Ke(e,b)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        ${E()}
        value = ${h.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${p.type.indices}) -> ${Ke(e,b)} {
      var value = ${Ke(e,b)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        ${I()}
        value = ${g.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ke(e,b)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${s?"bias[colIn]":`${Ke(e,b)}(bias[row])`};`:""}
        ${r}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Ta=(e,t,r,i,n=!1,s)=>{let a=e[0].dims,l=e[1].dims,d=a.slice(0,-2),p=l.slice(0,-2),h=i?i.slice(0,-2):r.slice(0,-2),g=U.size(h),u=a[a.length-2],w=a[a.length-1],_=l[l.length-1],b=w%4===0&&_%4===0,E=u<=8?[4,1,1]:[4,4,1],I=[8,8,1],S=[Math.ceil(_/I[0]/E[0]),Math.ceil(u/I[1]/E[1]),Math.ceil(g/I[2]/E[2])],C=b?4:1,T=[...d,u,w/C],A=T.length,P=[...p,w,_/C],O=P.length,W=[g,u,_/C],H=[{type:6,data:u},{type:6,data:_},{type:6,data:w}];Lt(t,H),H.push(...Q(h,T,P));let Z=["rank","rank"],ue=e.length>2;ue&&(H.push(...Q(e[2].dims)),Z.push("rank")),H.push(...Q(W));let le=te=>{let we=h.length,xe=ba("batchDims",e[0].dataType,we,1),de=We(e[0].dataType),$e=L("a",e[0].dataType,A,C),X=L("b",e[1].dataType,O,C),ie=ee("result",e[0].dataType,W.length,C),fe=[$e,X];if(ue){let ge=n?C:1;fe.push(L("bias",e[2].dataType,e[2].dims.length,ge))}let D=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];qt(t,D);let j=We(ie.type.tensor),ne=Wt(t,ie.type.value,j),se=cu(C,ue,ne,[xe,$e,X,ie],[d,p,h],n);return`
  ${te.registerUniforms(D).registerInternalVariables(xe).declareVariables(...fe,ie)}
  ${se}
  ${b?_i(E,I,de,xe):bi(E,I,de,xe)}
                   `};return{name:"MatMul",shaderCache:{hint:`${E};${t.activation};${b};${n}`,inputDependencies:Z},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:H}),getShaderSource:le}}}),fu,$h,rg=V(()=>{oe(),At(),he(),jt(),zi(),wh(),Bi(),fu=(e,t,r,i,n=!1,s,a=4,l=4,d=4,p="f32")=>{let h=H=>{switch(H){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${p}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${H} is not supported.`)}},g=H=>{switch(H){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${H} is not supported.`)}},u=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,w=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",E=e?"row":"col",I=e?"col":"row",S=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${E} / outWidth;
    let outCol = ${E} % outWidth;

    let WRow = ${I} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${I} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${I} % inChannels;
    var resData = ${Ke(a,p)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${b}) {
      ${u}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${h(a)}
    }
    return resData;`,C=e?t&&i?`
    let col = colIn * ${a};
    ${S}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${S}
    }
    return ${Ke(a,p)}(0.0);`:i&&r?`
    let col = colIn * ${a};
    ${S}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${S}
    }
    return ${Ke(a,p)}(0.0);`,T=`${g(l)}`,A=Ke(d,p),P=Ke(e?a:l,p),O=Ke(e?l:a,p),W=Wt(s,A,p);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${P} {
      ${e?C:T}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${O} {
      ${e?T:C}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${A}) {
      let col = colIn * ${d};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${w}
      ${Ia(n)}
      ${W}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},$h=(e,t,r,i,n,s,a,l,d)=>{let p=t.format==="NHWC",h=p?e[0].dims[3]:e[0].dims[1],g=r[0],u=p?r[2]:r[3],w=p?r[1]:r[2],_=p?r[3]:r[1],b=p&&(h%4===0||h%3===0)&&_%4===0,E=p?_:u*w,I=p?u*w:_,S=[8,8,1],C=i<=8?[4,1,1]:[4,4,1],T=[Math.ceil(E/S[0]/C[0]),Math.ceil(I/S[1]/C[1]),Math.ceil(g/S[2]/C[2])];Ee("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${T}`);let A=b?p&&h%4!==0?3:4:1,P=S[1]*C[1],O=S[0]*C[0],W=Math.max(S[0]*A,S[1]),H=i%P===0,Z=n%O===0,ue=s%W===0,le=b?[A,4,4]:[1,1,1],te=[{type:6,data:i},{type:6,data:n},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Lt(t,te),te.push(...Q(e[0].dims,e[1].dims));let we=["rank","rank"];a&&(te.push(...Q(e[2].dims)),we.push("rank")),te.push(...Q(r));let xe=de=>{let $e=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];qt(t,$e);let X=b?4:1,ie=We(e[0].dataType),fe=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${ie}>`:ie}) {
        result[flatIndex] = ${b?`vec4<${ie}>`:ie}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${ie}>`:ie}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,D=L("x",e[0].dataType,e[0].dims.length,A===3?1:A),j=L("w",e[1].dataType,e[1].dims.length,X),ne=[D,j],se=ee("result",e[0].dataType,r.length,X);if(a){let ge=L("bias",e[2].dataType,e[2].dims.length,X);ne.push(ge),fe+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${ie}>`:ie} {
          return bias[coords.${p?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${ka("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${de.registerUniforms($e).declareVariables(...ne,se)}
        ${fe}
        ${fu(p,H,Z,ue,a,t,le[0],le[1],le[2],ie)}
        ${b?_i(C,S,ie,void 0,!p,W):bi(C,S,ie,void 0,!p,W,!1,void 0,l)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${A};${b};${H};${Z};${ue};${P};${O};${W}`,inputDependencies:we},getRunData:()=>({outputs:[{dims:d?d(r):r,dataType:e[0].dataType}],dispatchGroup:{x:T[0],y:T[1],z:T[2]},programUniforms:te}),getShaderSource:xe}}}),mu,mn,_r,gu,gn,yu,_h,bh,ig=V(()=>{oe(),At(),pe(),he(),jt(),zi(),mu=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},mn=e=>typeof e=="number"?[e,e,e]:e,_r=(e,t)=>t<=1?e:e+(e-1)*(t-1),gu=(e,t,r,i=1)=>{let n=_r(t,i);return Math.floor((e[0]*(r-1)-r+n)/2)},gn=(e,t,r,i,n)=>{n==null&&(n=gu(e,t[0],i[0]));let s=[0,0,0,r];for(let a=0;a<3;a++)e[a]+2*n>=t[a]&&(s[a]=Math.trunc((e[a]-t[a]+2*n)/i[a]+1));return s},yu=(e,t,r,i,n,s,a,l,d,p)=>{let h,g,u,w;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=gn([t,r,i,1],[l,d,p],1,[n,s,a],e);g=_[0],u=_[1],w=_[2]}else if(Array.isArray(e)){if(!e.every((b,E,I)=>b===I[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=gn([t,r,i,1],[l,d,p],1,[n,s,a],e[0]);g=_[0],u=_[1],w=_[2]}else if(e==="SAME_UPPER"){g=Math.ceil(t/n),u=Math.ceil(r/s),w=Math.ceil(i/a);let _=(g-1)*n+l-t,b=(u-1)*s+d-r,E=(w-1)*a+p-i,I=Math.floor(_/2),S=_-I,C=Math.floor(b/2),T=b-C,A=Math.floor(E/2),P=E-A;h={top:C,bottom:T,left:A,right:P,front:I,back:S}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:g,outHeight:u,outWidth:w}},_h=(e,t,r,i,n,s=!1,a="channelsLast")=>{let l,d,p,h,g;if(a==="channelsLast")[l,d,p,h,g]=e;else if(a==="channelsFirst")[l,g,d,p,h]=e;else throw new Error(`Unknown dataFormat ${a}`);let[u,,w,_,b]=t,[E,I,S]=mn(r),[C,T,A]=mn(i),P=_r(w,C),O=_r(_,T),W=_r(b,A),{padInfo:H,outDepth:Z,outHeight:ue,outWidth:le}=yu(n,d,p,h,E,I,S,P,O,W),te=s?u*g:u,we=[0,0,0,0,0];return a==="channelsFirst"?we=[l,te,Z,ue,le]:a==="channelsLast"&&(we=[l,Z,ue,le,te]),{batchSize:l,dataFormat:a,inDepth:d,inHeight:p,inWidth:h,inChannels:g,outDepth:Z,outHeight:ue,outWidth:le,outChannels:te,padInfo:H,strideDepth:E,strideHeight:I,strideWidth:S,filterDepth:w,filterHeight:_,filterWidth:b,effectiveFilterDepth:P,effectiveFilterHeight:O,effectiveFilterWidth:W,dilationDepth:C,dilationHeight:T,dilationWidth:A,inShape:e,outShape:we,filterShape:t}},bh=(e,t,r,i,n,s)=>{let a=s==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let l=[64,1,1],d={x:r.map((E,I)=>I)},p=[Math.ceil(mu(d.x.map(E=>r[E]))/l[0]),1,1];Ee("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${p}`);let h=1,g=U.size(r),u=[{type:12,data:g},{type:12,data:i},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];Lt(t,u),u.push(...Q(e[0].dims,e[1].dims));let w=["rank","rank"],_=e.length===3;_&&(u.push(...Q(e[2].dims)),w.push("rank")),u.push(...Q(r));let b=E=>{let I=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];qt(t,I);let S=1,C=We(e[0].dataType),T=L("x",e[0].dataType,e[0].dims.length,h),A=L("W",e[1].dataType,e[1].dims.length,S),P=[T,A],O=ee("result",e[0].dataType,r.length,S),W="";if(_){let ue=L("bias",e[2].dataType,e[2].dims.length,S);P.push(ue),W+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${C} {
          return bias[${a?J("coords",4,5):J("coords",1,5)}];
        }`}let H=Ke(h,C),Z=Wt(t,H,C);return`
            ${W}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${A.getByIndices("aIndices")};
            }
          ${E.registerUniforms(I).declareVariables(...P,O)}
          ${E.mainStart()}
          ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${O.offsetToIndices("global_idx")};
              let batch = ${J("coords",0,T.rank)};
              let d2 = ${a?J("coords",T.rank-1,T.rank):J("coords",1,T.rank)};
              let xFRCCorner = vec3<u32>(${a?J("coords",1,T.rank):J("coords",2,T.rank)},
              ${a?J("coords",2,T.rank):J("coords",3,T.rank)},
              ${a?J("coords",3,T.rank):J("coords",4,T.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?J("uniforms.x_shape",1,T.rank):J("uniforms.x_shape",2,T.rank)};
              let xShapeZ = ${a?J("uniforms.x_shape",2,T.rank):J("uniforms.x_shape",3,T.rank)};
              let xShapeW = ${a?J("uniforms.x_shape",3,T.rank):J("uniforms.x_shape",4,T.rank)};
              let xShapeU = ${a?J("uniforms.x_shape",4,T.rank):J("uniforms.x_shape",1,T.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${a?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${a?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${a?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${a?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${Z}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${h};${_}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:p[0],y:p[1],z:p[2]},programUniforms:u}),getShaderSource:b}}}),vh,xh,ng=V(()=>{oe(),pe(),he(),jt(),vh=(e,t,r,i)=>{let n=e.length>2,s=n?"value += b[output_channel];":"",a=e[0].dims,l=e[1].dims,d=t.format==="NHWC",p=d?r[3]:r[1],h=p/t.group,g=d&&h>=4?Ue(p):1,u=U.size(r)/g,w=[{type:12,data:u},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];Lt(t,w),w.push(...Q(a,[l[0],l[1],l[2],l[3]/g]));let _=n?["rank","rank","rank"]:["rank","rank"];w.push(...Q([r[0],r[1],r[2],r[3]/g]));let b=E=>{let I=ee("output",e[0].dataType,r.length,g),S=We(I.type.tensor),C=Wt(t,I.type.value,S),T=L("x",e[0].dataType,a.length),A=L("w",e[1].dataType,l.length,g),P=[T,A];n&&P.push(L("b",e[2].dataType,e[2].dims,g));let O=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];qt(t,O);let W=d?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${T.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${A.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${T.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${A.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${E.registerUniforms(O).declareVariables(...P,I)}

  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${I.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${d?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${d?1:2}], outputIndices[${d?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${g} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${d?2:1}];

    var value: ${I.type.value} = ${I.type.value}(0);
    ${W}
    ${s}
    ${C}
    ${I.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${g}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:w}),getShaderSource:b}},xh=(e,t,r,i)=>{let n=e.length>2,s=Ue(r[3]),a=Ue(r[2]),l=U.size(r)/s/a,d=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],p=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],h=[r[0],r[1],r[2],r[3]/s],g=[{type:12,data:l},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Lt(t,g),g.push(...Q(d,p,h));let u=(a-1)*t.strides[1]+p[1],w=_=>{let b=ee("output",e[0].dataType,h.length,s),E=We(b.type.tensor),I=Wt(t,b.type.value,E),S=L("x",e[0].dataType,d.length,s),C=L("w",e[1].dataType,p.length,s),T=[S,C];n&&T.push(L("b",e[2].dataType,e[2].dims,s));let A=n?"value += b[output_channel];":"",P=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return qt(t,P),`
  ${_.registerUniforms(P).declareVariables(...T,b)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${a}u;
    let col = (index1 % width1) * ${a}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${S.type.value}, ${u}>;
    var values: array<${b.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${p[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${u}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${S.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${S.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${p[1]}; w_width++) {
          let w_val = ${C.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${A}
      ${I}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${a};${u};${p[0]};${p[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:w}}}),Xn,wu,Sh,Eh=V(()=>{oe(),pe(),Bi(),he(),jt(),Xn=(e,t,r,i,n=!1,s)=>{let a=e[0].dims,l=e[1].dims,d=a[a.length-2],p=l[l.length-1],h=a[a.length-1],g=Ue(p),u=Ue(h),w=Ue(d),_=U.size(r)/g/w,b=e.length>2,E=i?i.slice(0,-2):r.slice(0,-2),I=[U.size(E),d,p],S=[{type:12,data:_},{type:12,data:d},{type:12,data:p},{type:12,data:h}];Lt(t,S),S.push(...Q(E,a,l)),b&&S.push(...Q(e[2].dims)),S.push(...Q(I));let C=T=>{let A=ba("batch_dims",e[0].dataType,E.length),P=L("a",e[0].dataType,a.length,u),O=L("b",e[1].dataType,l.length,g),W=ee("output",e[0].dataType,I.length,g),H=We(W.type.tensor),Z=Wt(t,W.type.value,H),ue=[P,O],le="";if(b){let fe=n?g:1;ue.push(L("bias",e[2].dataType,e[2].dims.length,fe)),le=`${n?`value += bias[col / ${fe}];`:`value += ${W.type.value}(bias[row + i]);`}`}let te=a.slice(0,-2),we=l.slice(0,-2),xe=Br(te,E),de=Br(we,E),$e=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];qt(t,$e);let X=(fe,D)=>{let j=fe.rank,ne=fe.name;if(j===2)return`var ${ne}_indices = ${fe.type.indices}(0u, 0u);`;let se=A.rank,ge=`var ${ne}_indices: ${fe.type.indices};`;for(let Be=j-2-1,pt=se-1;Be>=0;Be--,pt--)ge+=`
${ne}_indices[${Be}] = ${se>1?`batch_indices[${pt}]`:"batch_indices"};`;return D.forEach(Be=>{ge+=`
${ne}_indices[${Be}] = 0;`}),ge+=`${ne}_indices[${j-2}] = 0u;
                     ${ne}_indices[${j-1}] = 0u;`,ge},ie=()=>{let fe=`var a_data: ${P.type.value};`;for(let D=0;D<u;D++)fe+=`
              let b_data${D} = b[(b_offset + (k + ${D}) * uniforms.N + col) / ${g}];`;for(let D=0;D<w;D++){fe+=`a_data = a[(a_offset + (row + ${D}) * uniforms.K + k) / ${u}];`;for(let j=0;j<u;j++)fe+=`
            values[${D}] = fma(${O.type.value}(a_data${u===1?"":`[${j}]`}), b_data${j}, values[${D}]);
`}return fe};return`
  ${T.registerUniforms($e).registerInternalVariables(A).declareVariables(...ue,W)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${g})) * ${g};
    var index1 = global_idx / (uniforms.N / ${g});
    let stride1 = uniforms.M / ${w};
    let row = (index1 % stride1) * ${w};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${A.offsetToIndices("batch")};`}
    ${X(P,xe)}
    let a_offset = ${P.indicesToOffset("a_indices")};
    ${X(O,de)}
    let b_offset = ${O.indicesToOffset("b_indices")};
    var values: array<${W.type.value}, ${w}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${u}) {
      ${ie()}
    }
    for (var i = 0u; i < ${w}u; i++) {
      var value = values[i];
      ${le}
      ${Z}
      let cur_indices = ${W.type.indices}(batch, row + i, col);
      let offset = ${W.indicesToOffset("cur_indices")};
      ${W.setByOffset(`offset / ${g}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${g};${u};${w};${n}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:S}),getShaderSource:C}},wu=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Sh=e=>{wu(e.inputs);let t=dr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];r<8&&i<8?e.compute(Xn(e.inputs,{activation:""},t)):e.compute(Ta(e.inputs,{activation:""},t))}}),$u,si,_u,oi,Qn,yn,bu,vu,Jn,ag=V(()=>{pe(),rg(),ig(),Bi(),ng(),jt(),Eh(),Vt(),$u=(e,t,r,i,n,s)=>{let a=e[0],l=e.slice(s?1:2,s?3:4),d=l.length,p=t[0],h=t.slice(2).map((u,w)=>u+(u-1)*(r[w]-1)),g=l.map((u,w)=>u+i[w]+i[w+d]).map((u,w)=>Math.floor((u-h[w]+n[w])/n[w]));return g.splice(0,0,a),g.splice(s?3:1,0,p),g},si=[2,3,1,0],_u=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},oi=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let i=e.pads.slice();wi.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:i}),n},Qn=e=>{let t=Ea(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,s=e.group,a=e.kernel_shape,l=e.pads,d=e.strides,p=e.w_is_const();return{autoPad:i,format:r,dilations:n,group:s,kernelShape:a,pads:l,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},yn=(e,t,r,i)=>{let n=r.format==="NHWC",s=$u(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let P=[t[0]];if(n){let O=e.kernelCustomData.wT??e.compute(it(t[1],si),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=O),P.push(O)}else P.push(t[1]);t.length===3&&P.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(xh(P,r,s,i),{inputs:P}):e.compute(vh(P,r,s,i),{inputs:P});return}let a=t.length===3,l=t[0].dims[n?1:2],d=t[0].dims[n?2:3],p=t[0].dims[n?3:1],h=t[1].dims[2],g=t[1].dims[3],u=s[n?1:2],w=s[n?2:3],_=s[n?3:1],b=n&&h===l&&g===d&&r.pads[0]===0&&r.pads[1]===0;if(b||h===1&&g===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let P=s[0],O,W,H,Z=[];if(n){let te=e.kernelCustomData.wT??e.compute(it(t[1],si),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=te),b){let we=l*d*p;O=t[0].reshape([1,P,we]),W=te.reshape([1,we,_]),H=[1,P,_]}else O=t[0].reshape([P,l*d,p]),W=te.reshape([1,p,_]),H=[P,u*w,_];Z.push(O),Z.push(W)}else O=t[0].reshape([P,p,l*d]),W=t[1].reshape([1,_,p]),H=[P,_,u*w],Z.push(W),Z.push(O);a&&Z.push(t[2]);let ue=H[2],le=Z[0].dims[Z[0].dims.length-1];ue<8&&le<8?e.compute(Xn(Z,r,s,H,n,i),{inputs:Z}):e.compute(Ta(Z,r,s,H,n,i),{inputs:Z});return}let E=!0,I=e.kernelCustomData.wT??e.compute(it(t[1],si),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=I);let S=[t[0],I];a&&S.push(t[2]);let C=n?u*w:_,T=n?_:u*w,A=h*g*p;e.compute($h(S,r,s,C,T,A,a,E,i),{inputs:S})},bu=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),a=[1].concat(t.dilations),l=[1].concat(t.kernelShape),d=oi({...t,pads:n,strides:s,dilations:a,kernelShape:l},i);yn(e,i,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},vu=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",n=oi(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,a=_h(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,i);e.compute(bh(t,n,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],i))},Jn=(e,t)=>{if(_u(e.inputs,t),e.inputs[0].dims.length===3)bu(e,t);else if(e.inputs[0].dims.length===5)vu(e,e.inputs,t);else{let r=oi(t,e.inputs);yn(e,e.inputs,r)}}}),xu,Ih,sg=V(()=>{oe(),At(),he(),jt(),zi(),wh(),Bi(),xu=(e,t=!1,r,i,n=4)=>{let s=E=>{switch(E){case 1:return"return w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];";case 4:return`
            let coord1 = vec4<i32>(coordX, coordY, col + 1, rowInner);
            let coord2 = vec4<i32>(coordX, coordY, col + 2, rowInner);
            let coord3 = vec4<i32>(coordX, coordY, col + 3, rowInner);
            let v0 = w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];
            let v1 = w[getIndexFromCoords4D(coord1, vec4<i32>(uniforms.w_shape))];
            let v2 = w[getIndexFromCoords4D(coord2, vec4<i32>(uniforms.w_shape))];
            let v3 = w[getIndexFromCoords4D(coord3, vec4<i32>(uniforms.w_shape))];
            return ${i}(v0, v1, v2, v3);
            `;default:throw new Error(`innerElementSize ${E} is not supported.`)}},a=e?`
      let coord = vec4<i32>(batch, iXR, iXC, xCh);
      `:`
      let coord = vec4<i32>(batch, xCh, iXR, iXC);
      `,l=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,d=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",p=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",h=e?"row":"col",g=e?"col":"row",u=`
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      let outRow = ${h} / outWidth;
      let outCol = ${h} % outWidth;

      let WRow = ${g} / (uniforms.filter_dims[1] * inChannels);
      let WCol = ${g} / inChannels % uniforms.filter_dims[1];
      let xR = f32(outRow - uniforms.pads[0] + uniforms.dilations[0] * WRow) / f32(uniforms.strides[0]);
      let xC = f32(outCol - uniforms.pads[1] + uniforms.dilations[1] * WCol) / f32(uniforms.strides[1]);
      if (xR < 0.0 || xR >= f32(${d}) || fract(xR) > 0.0) {
        return ${i}(0.0);
      }
      if (xC < 0.0 || xC >= f32(${p}) || fract(xC) > 0.0) {
        return ${i}(0.0);
      }
      let iXR = i32(xR);
      let iXC = i32(xC);
      let xCh = ${g} % inChannels;
      ${a}
      return x[getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape))/${n}];`,w=e?`
      let col = colIn * ${n};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
        ${u}
      }
      return ${i}(0.0);`:`
      let col = colIn * ${n};
      if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
        ${u}
      }
      return ${i}(0.0);`,_=`
      let col = colIn * ${n};
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let coordX = uniforms.filter_dims[0] - 1 - row / (uniforms.filter_dims[1] * inChannels);
      let coordY = uniforms.filter_dims[1] - 1 - (row / inChannels) % uniforms.filter_dims[1];
      if (${e?"row < uniforms.dim_inner && col < uniforms.dim_b_outer":"row < uniforms.dim_inner && col < uniforms.dim_a_outer"}  && coordX >= 0 && coordY >= 0) {
        let rowInner = row % inChannels;
        let coord = vec4<i32>(coordX, coordY, col, rowInner);
        ${s(n)}
      }
      return ${i}(0.0);
      `,b=Wt(r,i);return`
  fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${i} {
    ${e?w:_}
  }

  fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${i} {
    ${e?_:w}
  }

  fn mm_write(batch: i32, row : i32, colIn : i32, valueInput : ${i}) {
    let col = colIn * ${n};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
      var value = valueInput;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${l}
      ${Ia(t)}
      ${b}
      result[getIndexFromCoords4D(coords, vec4<i32>(uniforms.result_shape))/${n}] = value;
    }
  }`},Ih=(e,t,r,i,n,s,a,l)=>{let d=t.format==="NHWC",p=d?e[0].dims[3]:e[0].dims[1],h=r[0],g=d?r[2]:r[3],u=d?r[1]:r[2],w=d?r[3]:r[1],_=d&&p%4===0&&p%3&&w%4===0,b=d?w:g*u,E=d?g*u:w,I=[8,8,1],S=i<=8?[4,1,1]:[4,4,1],C=[Math.ceil(b/I[0]/S[0]),Math.ceil(E/I[1]/S[1]),Math.ceil(h/I[2]/S[2])];Ee("verbose",()=>`[conv_backprop_mm_webgpu] dispatch = ${C}`);let T=_?4:1,A=Math.max(I[0]*T,I[1]),P=_?4:1,O=[t.kernelShape[d?1:2],t.kernelShape[d?2:3]],W=[O[0]+(t.dilations[0]<=1?0:(O[0]-1)*(t.dilations[0]-1)),O[1]+(t.dilations[1]<=1?0:(O[1]-1)*(t.dilations[1]-1))],H=[W[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),W[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],Z=[{type:6,data:i},{type:6,data:n},{type:6,data:s},{type:6,data:t.strides},{type:6,data:t.dilations},{type:6,data:O},{type:6,data:H}];Lt(t,Z),Z.push(...Q(e[0].dims,e[1].dims));let ue=["rank","rank"];a&&(Z.push(...Q(e[2].dims)),ue.push("rank")),Z.push(...Q(r));let le=te=>{let we=L("x",e[0].dataType,e[0].dims.length,P),xe=L("w",e[1].dataType,e[1].dims.length,1),de=ee("result",e[0].dataType,r.length,P),$e=[we,xe],X="";if(a){let D=L("bias",e[2].dataType,e[2].dims.length,P);$e.push(D),X+=`
          fn getBiasByOutputCoords(coords : vec4<i32>) -> ${D.type.value} {
            return bias[coords.${d?"w":"y"}${_?"/ 4":""}];
          }`}let ie=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"strides",type:"i32",length:2},{name:"dilations",type:"i32",length:2},{name:"filter_dims",type:"i32",length:O.length},{name:"pads",type:"i32",length:H.length}];qt(t,ie);let fe=We(e[0].dataType,1);if(fe!=="f16"&&fe!=="f32")throw new Error(`elemType ${fe} is not supported.`);return`
        ${ka("uniforms.result_strides")}
        ${te.registerUniforms(ie).declareVariables(...$e,de)};
        ${X}
        ${xu(d,a,t,we.type.value,T)}
        ${_?_i(S,I,fe,void 0,!d,A):bi(S,I,fe,void 0,!d,A,!1,void 0,l)}`};return{name:"Conv2DTransposeMatMul",shaderCache:{hint:`${t.cacheKey};${S};${I};${_}`,inputDependencies:ue},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:C[0],y:C[1],z:C[2]},programUniforms:Z}),getShaderSource:le}}}),Su,ea,og=V(()=>{oe(),At(),pe(),he(),Su=(e,t,r,i,n,s=!1,a,l,d=!1)=>{let p=d?1:2,h=d?2:3,g=d?3:1,u=s?2:1,w=`
  fn setOutputAtIndex(flatIndex : u32, value : ${s?`vec4<${a}>`:a}) {
    result[flatIndex] = ${s?`vec4<${a}>`:a}(value);
  }`;i&&(w+=`
    fn getBiasByOutputCoords(coords : vec4<u32>) -> ${s?`vec4<${a}>`:a} {
      return bias[coords.${d?"w":"y"}${s?"/ 4":""}];
    }`);let _=s?4:1,b=L("W",t[1].dataType,t[1].dims.length,_),E=L("Dy",t[0].dataType,t[0].dims.length,_),I=[E,b];i&&I.push(L("bias",t[2].dataType,[r[g]].length,_));let S=ee("result",t[0].dataType,r.length,_),C=`{
        let batch: u32 = ${n?"global_id.z":"workgroup_id.z"} / uniforms.result_shape[1];
        let r = ${n?"global_id.z":"workgroup_id.z"} % uniforms.result_shape[1];
        let c = ${n?"global_id.y":"workgroup_id.y"} * ${u};
        let d1: u32 = ${n?"global_id.x":"workgroup_id.x"} * 4;

        let dyCorner = vec2<i32>(i32(r), i32(c)) - vec2<i32>(uniforms.pads);

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        var dotProd: array<vec4<${a}>, ${u}>;
        for (var i = 0; i < ${u}; i++) {
          dotProd[i] = vec4<${a}>(0.0);
        }
        for (var wR: u32 = 0; wR < uniforms.filter_dims[0]; wR = wR + 1) {
          var dyR = (${a}(dyCorner.x) + ${a}(wR)) / ${a}(uniforms.strides.x);
          let wRPerm = uniforms.filter_dims[0] - 1 - wR;
          if (dyR < 0.0 || dyR >= ${a}(uniforms.Dy_shape[1]) ||
              fract(dyR) > 0.0 || wRPerm < 0) {
            continue;
          }
          let idyR: u32 = u32(dyR);

          for (var wC: u32 = 0; wC < uniforms.filter_dims[1]; wC = wC + 1) {
            let dyC = (${a}(dyCorner.y) + ${a}(wC)) / ${a}(uniforms.strides.y);
            let dyC2 = (${a}(dyCorner.y) + 1.0 + ${a}(wC)) / ${a}(uniforms.strides.y);
            let wCPerm = uniforms.filter_dims[1] - 1 - wC;
            if (wCPerm < 0) {
              continue;
            }
            var bDyCVal = true;
            var bDyCVal2 = true;
            if (dyC < 0.0 || dyC >= ${a}(uniforms.Dy_shape[2]) ||
                fract(dyC) > 0.0) {
              bDyCVal = false;
            }
            if (dyC2 < 0.0 || dyC2 >= ${a}(uniforms.Dy_shape[2]) ||
                fract(dyC2) > 0.0) {
              bDyCVal2 = false;
            }

            let idyC: u32 = u32(dyC);
            let idyC2: u32 = u32(dyC2);
            if (bDyCVal && bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2 :u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${E.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${a}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;

                xValue =  ${E.get("batch","idyR","idyC2","d2")};

                dotProd[1] = dotProd[1] + vec4<${a}>(dot(xValue, wValue0),
                                                    dot(xValue, wValue1),
                                                    dot(xValue, wValue2),
                                                    dot(xValue, wValue3));
              }
            } else if (bDyCVal) {
              let d2Length = uniforms.Dy_shape[${g}];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${E.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${a}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;
              }
            } else if (bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${E.get("batch","idyR","idyC2","d2")};
                let tmpval = vec4<${a}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[1] = dotProd[1] + tmpval;
              }
            }
          }
        }

        for (var i: u32 = 0; i < ${u}; i = i + 1) {
          let value = dotProd[i] + ${i?"bias[c+i]":`vec4<${a}>(0.0)`};
          ${S.set("batch","r","c + i","d1","value")};
        }
      }`,T=`
          let outputIndices = ${S.offsetToIndices("global_idx")};
          let batch = ${S.indicesGet("outputIndices",0)};
          let d1 = ${S.indicesGet("outputIndices",g)};
          let r = ${S.indicesGet("outputIndices",p)};
          let c = ${S.indicesGet("outputIndices",h)};
          let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
          let dyRCorner = dyCorner.x;
          let dyCCorner = dyCorner.y;
          let groupId = d1 / uniforms.output_channels_per_group;
          let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
          // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
          // ? = to be determined. : = across all values in that axis.
          var dotProd = ${a}(0.0);
          for (var wR: u32 = 0; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
            if (wR % uniforms.dilations.x != 0) {
              continue;
            }
            let dyR = (${a}(dyRCorner) + ${a}(wR)) / ${a}(uniforms.strides[0]);
            let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
            if (dyR < 0.0 || dyR >= ${a}(uniforms.Dy_shape[${p}]) || fract(dyR) > 0.0 ||
                wRPerm < 0) {
              continue;
            }
            let idyR: u32 = u32(dyR);

            for (var wC: u32 = 0; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
              if (wC % uniforms.dilations.y != 0) {
                continue;
              }
              let dyC = (${a}(dyCCorner) + ${a}(wC)) / ${a}(uniforms.strides.y);
              let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
              if (dyC < 0.0 || dyC >= ${a}(uniforms.Dy_shape[${h}]) ||
                  fract(dyC) > 0.0 || wCPerm < 0) {
                continue;
              }
              let idyC: u32 = u32(dyC);
              var inputChannel = groupId * uniforms.input_channels_per_group;
              for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + 1) {
                let xValue = ${d?E.get("batch","idyR","idyC","inputChannel"):E.get("batch","inputChannel","idyR","idyC")};
                let wValue = ${b.get("inputChannel","wOutChannel","u32(wRPerm)","u32(wCPerm)")};
                dotProd = dotProd + xValue * wValue;
                inputChannel = inputChannel + 1;
              }
            }
          }
          let value = dotProd + ${i?"bias[d1]":`${a}(0.0)`};
          ${S.setByOffset("global_idx","value")};
        `;return`
  ${e.registerUniforms(l).declareVariables(...I,S)}
  ${w}

    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
  ${s?C:T}}`},ea=(e,t,r)=>{let i=e.length>2,n=t.outputShape,s=U.size(n),a=[Math.ceil(s/64),1,1];Ee("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${a}`);let l=t.format==="NHWC",d=["rank","rank"],p=[t.strides[0],t.strides[1]],h=[t.kernelShape[l?1:2],t.kernelShape[l?2:3]],g=[t.dilations[0],t.dilations[1]],u=[h[0]+(t.dilations[0]<=1?0:(t.kernelShape[l?1:2]-1)*(t.dilations[0]-1)),h[1]+(t.dilations[1]<=1?0:(t.kernelShape[l?2:3]-1)*(t.dilations[1]-1))],w=[u[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),u[1]-1-Math.floor(t.pads[1]+t.pads[3])/2],_=!1,b=t.group,E=e[1].dims,I=E[0]/b,S=E[1],C=[{type:12,data:s},{type:12,data:p},{type:12,data:h},{type:12,data:g},{type:12,data:u},{type:6,data:w},{type:12,data:I},{type:12,data:S},...Q(e[0].dims,e[1].dims)];i&&(C.push(...Q(e[2].dims)),d.push("rank")),C.push(...Q(n));let T=a[1]===1&&a[2]===1,A=P=>{let O=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:p.length},{name:"filter_dims",type:"u32",length:h.length},{name:"dilations",type:"u32",length:h.length},{name:"effective_filter_dims",type:"u32",length:u.length},{name:"pads",type:"i32",length:w.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],W=We(e[0].dataType);return`${Su(P,e,n,i,T,_,W,O,l)}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};`,inputDependencies:d},getRunData:()=>({dispatchGroup:{x:a[0],y:a[1],z:a[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:C}),getShaderSource:A}}}),Eu,Iu,ku,wn,kh,Tu,Cu,Au,zu,Th,ug=V(()=>{sg(),og(),jt(),Vt(),Eu=(e,t,r,i,n,s)=>(e-1)*t+r+(i-1)*n+1-s,Iu=(e,t,r,i,n)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=s,r[n]=e-s):t==="SAME_LOWER"&&(r[i]=e-s,r[n]=s)},ku=(e,t,r,i,n,s,a,l,d,p)=>{let h=e.length-2,g=p.length===0;d.length<h&&d.push(...Array(h-d.length).fill(0));let u=e[0],w=t[l?3:1]*n;for(let _=0,b=e.length-h-(l?1:0);_<h;++_,++b){let E=e[b],I=g?E*a[_]:p[_],S=Eu(E,a[_],s[_],t[b],r[_],I);Iu(S,i,s,_,_+h),g&&p.push(a[_]*(E-1)+d[_]+(t[b]-1)*r[_]+1-s[_]-s[_+h])}p.splice(0,0,u),p.splice(l?3:1,0,w)},wn=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((g,u)=>g*u,1)===0){r.length=0;for(let g=2;g<t[1].dims.length;++g)r.push(t[1].dims[g])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let n=e.pads.slice(),s=e.outputShape.slice(),a=e.outputPadding.slice(),l=t[0].dims,d=e.dilations.slice();if(d.reduce((g,u)=>g+u,0)===0){let g=t[0].dims.length-2;d=new Array(g).fill(1)}let p=e.strides.slice();if(p.reduce((g,u)=>g+u,0)===0){let g=t[0].dims.length-2;p=new Array(g).fill(1)}ku(l,r,d,e.autoPad,e.group,n,p,i,a,s);let h=Object.assign({},e);return Object.assign(h,{kernelShape:r,pads:n,outputPadding:a,outputShape:s,dilations:d,strides:p}),h},kh=e=>{let t=Ea(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,s=e.group,a=e.kernelShape,l=e.pads,d=e.strides,p=e.wIsConst(),h=e.outputPadding,g=e.outputShape;return{autoPad:i,format:r,dilations:n,group:s,kernelShape:a,outputPadding:h,outputShape:g,pads:l,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},Tu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((a,l)=>a+l,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((a,l)=>a+l,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((a,l)=>a+l,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((a,l)=>a+l,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Cu=[2,3,1,0],Au=(e,t,r)=>{let i=wn(r,t),n=r.format==="NHWC",s=i.outputShape,a=s[n?3:1],l=t[0].dims[n?3:1];if(i.group!==1||a===1&&l===1){e.compute(ea(t,i));return}let d=s[n?1:2],p=s[n?2:3],h=t[1].dims[2],g=t[1].dims[3],u=n?d*p:a,w=n?a:d*p,_=h*g*l,b=!0,E=e.kernelCustomData.wT??e.compute(it(t[1],Cu),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=E);let I=[t[0],E],S=t.length===3;S&&(!n&&t[2].dims.length===1?I.push(t[2].reshape([t[2].dims[0],1,1])):I.push(t[2])),e.compute(Ih(I,i,s,u,w,_,S,b),{inputs:I})},zu=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let l=t.pads;l.length===0&&(l=[0,0]),l=[0,l[0],0,l[1]],a=[1].concat(a),s=[1].concat(s),n=[1].concat(n);let d=wn({...t,pads:l,strides:a,dilations:s,kernelShape:n},i);e.compute(ea(i,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]]))},Th=(e,t)=>{Tu(e.inputs,t),e.inputs[0].dims.length===3?zu(e,t):Au(e,e.inputs,t)}}),Bu,Ch,Ah,lg=V(()=>{oe(),pe(),Ne(),he(),Bu=(e,t,r,i)=>{let n=U.size(t),s=t.length,a=L("input",e,s),l=ee("output",e,s),d=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),p=U.normalizeAxis(d,s),h=g=>{let u=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,w=J("uniforms.input_shape","uniforms.axis",s),_=i.reverse?u+(i.exclusive?" + 1":""):"0",b=i.reverse?w:u+(i.exclusive?"":" + 1");return`
                ${g.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,l)}
                ${g.mainStart()}
                  ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${l.offsetToIndices("global_idx")};
                  var sum = ${l.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${l.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:p},...Q(t,t)]}),getShaderSource:h}},Ch=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,n=e.inputs[1];e.compute(Bu(i,r,n,t),{inputs:[0]})},Ah=e=>{let t=e.exclusive===1,r=e.reverse===1;return Ie({exclusive:t,reverse:r})}}),Ou,Ru,Mu,zh,Bh,dg=V(()=>{oe(),pe(),Ne(),he(),Ou=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Ru=(e,t,r,i)=>{let n=[];n.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)n.push(r.indicesSet("a",e[s],`i[${s}]`));return n.push("return a;}"),n.join(`
`)},Mu=(e,t)=>{let r,i,n,s,a,l,d=t.format==="NHWC",p=t.blocksize,h=t.mode==="DCR";d?([r,i,n,s]=e.dims,a=h?[r,i,n,p,p,s/p**2]:[r,i,n,s/p**2,p,p],l=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,n,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=h?[r,p,p,s/p**2,i,n]:[r,s/p**2,p,p,i,n],l=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let g=e.reshape(a),u=g.dims.length,w=e.dataType,_=L("a",w,u),b=ee("output",w,u),E=I=>`
  ${I.registerUniform("output_size","u32").declareVariables(_,b)}

  ${Ru(l,u,_,b)}

  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:I=>{let S=d?[r,i*p,n*p,s/p**2]:[r,s/p**2,i*p,n*p],C=U.size(S),T=g.dims,A=U.sortBasedOnPerm(T,l);return{outputs:[{dims:S,dataType:I[0].dataType}],dispatchGroup:{x:Math.ceil(C/64)},programUniforms:[{type:12,data:C},...Q(T,A)]}},getShaderSource:E}},zh=(e,t)=>{Ou(e.inputs),e.compute(Mu(e.inputs[0],t))},Bh=e=>Ie({blocksize:e.blocksize,mode:e.mode,format:e.format})}),ui,br,$n,Pu,Du,Uu,Nu,_n,Fu,Oh,Rh,pg=V(()=>{oe(),pe(),Ne(),he(),ui="[a-zA-Z]|\\.\\.\\.",br="("+ui+")+",$n="^"+br+"$",Pu="("+br+",)*"+br,Du="^"+Pu+"$",Uu=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Nu=class{constructor(e,t){var n;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Du)))throw new Error("Invalid LHS term");if(r.split(",").forEach((s,a)=>{let l=e[a].dims.slice();if(!s.match(RegExp($n)))throw new Error("Invalid LHS term");let d=this.processTerm(s,!0,l,a);this.lhs.push(d)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([s,a])=>a.count===1||s==="...").map(([s])=>s).join("");else if(!i.match(RegExp(br)))throw new Error("Invalid RHS");(n=i.match(RegExp(ui,"g")))==null||n.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(s);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let n=r.length,s=!1,a=[],l=0;if(!e.match(RegExp($n))&&!t&&e!=="")throw new Error("Invalid LHS term");let d=e.match(RegExp(ui,"g")),p=new Uu(i);return d==null||d.forEach((h,g)=>{if(h==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let u=n-d.length+1;if(u<0)throw new Error("Ellipsis out of bounds");if(a=r.slice(l,l+u),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let w=0;w<a.length;w++){let _=String.fromCharCode(48+w);p.addSymbol(_,g+w),this.addSymbol(_,r[l++],i)}}else p.addSymbol(h,g+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,r[l++],i)}),p}},_n=e=>e+"_max",Fu=(e,t,r,i)=>{let n=e.map(p=>p.length).map((p,h)=>L(`input${h}`,t,p)),s=U.size(i),a=ee("output",t,i.length),l=[...r.symbolToInfo.keys()].filter(p=>!r.rhs.symbolToIndices.has(p)),d=p=>{let h=[],g="var prod = 1.0;",u="var sum = 0.0;",w="sum += prod;",_=[],b=[],E=[],I=[],S=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((T,A)=>{var P;if(r.rhs.symbolToIndices.has(A)){let O=(P=r.rhs.symbolToIndices.get(A))==null?void 0:P[0];O!==void 0&&r.lhs.forEach((W,H)=>{if(T.inputIndices.includes(H)){let Z=W.symbolToIndices.get(A);if(Z===void 0)throw new Error("Invalid symbol error");Z.forEach(ue=>{h.push(`${n[H].indicesSet(`input${H}Indices`,ue,a.indicesGet("outputIndices",O))}`)})}})}else r.lhs.forEach((O,W)=>{if(T.inputIndices.includes(W)){let H=O.symbolToIndices.get(A);if(H===void 0)throw new Error("Invalid symbol error");H.forEach(Z=>{_.push(`${n[W].indicesSet(`input${W}Indices`,Z,`${A}`)}`)}),I.push(`prod *= ${n[W].getByIndices(`input${W}Indices`)};`)}}),b.push(`for(var ${A}: u32 = 0; ${A} < uniforms.${_n(A)}; ${A}++) {`),E.push("}")});let C=S?[...h,`let sum = ${n.map((T,A)=>T.getByIndices(`input${A}Indices`)).join(" * ")};`]:[...h,u,...b,..._,g,...I,w,...E];return`
            ${p.registerUniforms(l.map(T=>({name:`${_n(T)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,a)}

            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${n.map((T,A)=>`var input${A}Indices: ${n[A].type.indices};`).join(`
`)}
            ${C.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let p=l.filter(g=>r.symbolToInfo.has(g)).map(g=>{var u;return{type:12,data:((u=r.symbolToInfo.get(g))==null?void 0:u.dimValue)||0}});p.push({type:12,data:s});let h=e.map((g,u)=>[...Q(g)]).reduce((g,u)=>g.concat(u),p);return h.push(...Q(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:h}},getShaderSource:d}},Oh=(e,t)=>{let r=new Nu(e.inputs,t.equation),i=r.outputDims,n=e.inputs.map((s,a)=>s.dims);e.compute(Fu(n,e.inputs[0].dataType,r,i))},Rh=e=>{let t=e.equation.replace(/\s+/g,"");return Ie({equation:t})}}),Wu,bn,Lu,qu,Mh,hg=V(()=>{oe(),pe(),he(),Wu=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;i<r.length&&n<t.length;++i,++n)if(r[i]!==t[n]&&r[i]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},bn=(e,t)=>{let r=e.length-t.length,i=[];for(let n=0;n<r;++n)i.push(e[n]);for(let n=0;n<t.length;++n)i.push(t[n]===1?e[n+r]:t[n]);return i},Lu=(e,t)=>e.length>t.length?bn(e,t):bn(t,e),qu=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=Lu(t,r),n=e[0].dataType,s=n===9?4:1,a=Math.ceil(U.size(i)/s),l=p=>{let h=L("input",n,t.length,s),g=ee("output",n,i.length,s),u;if(n===9){let w=(_,b,E="")=>`
          let outputIndices${b} = ${g.offsetToIndices(`outputOffset + ${b}u`)};
          let offset${b} = ${h.broadcastedIndicesToOffset(`outputIndices${b}`,g)};
          let index${b} = offset${b} / 4u;
          let component${b} = offset${b} % 4u;
          ${_}[${b}] = ${E}(${h.getByOffset(`index${b}`)}[component${b}]);
        `;u=`
        let outputOffset = global_idx * ${s};
        var data = vec4<u32>(0);
        ${w("data",0,"u32")}
        ${w("data",1,"u32")}
        ${w("data",2,"u32")}
        ${w("data",3,"u32")}
        ${g.setByOffset("global_idx","data")}
      }`}else u=`
        let outputIndices = ${g.offsetToIndices("global_idx")};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",g)};
        ${g.setByOffset("global_idx",h.getByOffset("inputOffset"))}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(h,g)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${u}`},d=[{type:12,data:a},...Q(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d})}},Mh=e=>{Wu(e.inputs),e.compute(qu(e.inputs),{inputs:[0]})}}),Vu,Ph,cg=V(()=>{oe(),pe(),he(),Sa(),Vu=e=>{let t=e[0].dataType,r=U.size(e[0].dims),i=U.size(e[1].dims),n=i%4===0,s=a=>{let l=L("x",t,[1],4),d=L("bias",t,[1],4),p=ee("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],g=w=>`
      let bias${w}_offset: u32 = (global_idx * 4 + ${w}) % uniforms.bias_size;
      let bias${w} = ${d.getByOffset(`bias${w}_offset / 4`)}[bias${w}_offset % 4];`,u=n?`
      let bias = ${d.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${g(0)}${g(1)}${g(2)}${g(3)}
      let bias = ${l.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(h).declareVariables(l,d,p)}

    ${Yn(He(t))}

    ${a.mainStart(pr)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${l.getByOffset("global_idx")};
      ${u}
      let x_in = x + bias;
      ${p.setByOffset("global_idx",Zn("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/pr/4)}})}},Ph=e=>{e.inputs.length<2||U.size(e.inputs[1].dims)===0?th(e):e.compute(Vu(e.inputs))}}),ju,Gu,Dh,Uh,fg=V(()=>{oe(),pe(),Ne(),he(),ju=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Gu=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,s=U.normalizeAxis(t.axis,n),a=r.slice(0);a.splice(s,1,...i);let l=r[s],d=e[0].dataType===9?4:1,p=Math.ceil(U.size(a)/d),h=[{type:12,data:p},{type:6,data:l},{type:12,data:s},...Q(e[0].dims,e[1].dims,a)],g=u=>{let w=L("data",e[0].dataType,e[0].dims.length,d),_=L("inputIndices",e[1].dataType,e[1].dims.length),b=ee("output",e[0].dataType,a.length,d),E=S=>{let C=i.length,T=`var indicesIndices${S}  = ${_.type.indices}(0);`;for(let A=0;A<C;A++)T+=`${C>1?`indicesIndices${S}[${A}]`:`indicesIndices${S}`} = ${a.length>1?`outputIndices${S}[uniforms.axis + ${A}]`:`outputIndices${S}`};`;T+=`
          var idx${S} = ${_.getByIndices(`indicesIndices${S}`)};
          if (idx${S} < 0) {
            idx${S} = idx${S} + uniforms.axisDimLimit;
          }
          var dataIndices${S} : ${w.type.indices};
        `;for(let A=0,P=0;A<n;A++)A===s?(T+=`${n>1?`dataIndices${S}[${A}]`:`dataIndices${S}`} = u32(idx${S});`,P+=C):(T+=`${n>1?`dataIndices${S}[${A}]`:`dataIndices${S}`} = ${a.length>1?`outputIndices${S}[${P}]`:`outputIndices${S}`};`,P++);return T},I;if(e[0].dataType===9){let S=(C,T,A="")=>`
          let outputIndices${T} = ${b.offsetToIndices(`outputOffset + ${T}u`)};
          ${E(T)};
          let offset${T} = ${w.indicesToOffset(`dataIndices${T}`)};
          let index${T} = offset${T} / 4u;
          let component${T} = offset${T} % 4u;
          ${C}[${T}] = ${A}(${w.getByOffset(`index${T}`)}[component${T}]);
        `;I=`
        let outputOffset = global_idx * ${d};
        var value = vec4<u32>(0);
        ${S("value",0,"u32")}
        ${S("value",1,"u32")}
        ${S("value",2,"u32")}
        ${S("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else I=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${E("")};
      let value = ${w.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${u.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(w,_,b)}
      ${u.mainStart()}
        ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${I}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:h}),getShaderSource:g}},Dh=e=>Ie({axis:e.axis}),Uh=(e,t)=>{let r=e.inputs;ju(r),e.compute(Gu(e.inputs,t))}}),Hu,Ku,Nh,Fh,mg=V(()=>{oe(),pe(),Ne(),he(),Hu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=U.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,n=e[0],s=e[2],a=e.length===4?e[3]:void 0;if(s.dims.length!==n.dims.length||!n.dims.map((l,d)=>d===r?Math.ceil(l/i)===s.dims[d]:l===s.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==s.dims.length||!a.dims.map((l,d)=>l===s.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Ku=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,s=U.normalizeAxis(t.gatherAxis,n),a=U.normalizeAxis(t.quantizeAxis,n),l=r.slice(0);l.splice(s,1,...i);let d=U.size(l),p=e[2].dataType,h=e[0].dataType===22,g=[{type:12,data:d},{type:12,data:a},{type:12,data:s},{type:12,data:t.blockSize},...Q(...e.map((w,_)=>w.dims),l)],u=w=>{let _=L("data",e[0].dataType,e[0].dims.length),b=L("inputIndices",e[1].dataType,e[1].dims.length),E=L("scales",e[2].dataType,e[2].dims.length),I=e.length>3?L("zeroPoint",e[3].dataType,e[3].dims.length):void 0,S=ee("output",p,l.length),C=[_,b,E];I&&C.push(I);let T=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${w.registerUniforms(T).declareVariables(...C,S)}
        ${w.mainStart()}
        let output_indices = ${S.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${S.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${S.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${S.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[s]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${l.length}; i++) {
          let index = ${S.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${E.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${E.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${E.getByIndices("scale_indices")};
        ${I?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${I.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${I.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${He(p)}(quantized_data - zero_point) * scale;
        ${S.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((w,_)=>_!==1).map(w=>w.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(w,_)=>"rank")},getRunData:()=>({outputs:[{dims:l,dataType:p}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:g}),getShaderSource:u}},Nh=(e,t)=>{let r=e.inputs;Hu(r,t),e.compute(Ku(e.inputs,t))},Fh=e=>Ie({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Yu,Zu,Wh,Lh,gg=V(()=>{oe(),pe(),Ne(),he(),Yu=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Zu=(e,t)=>{let r=e[0].dims,i=e[0].dataType,n=r.length,s=e[1].dims,a=e[1].dataType,l=U.normalizeAxis(t.axis,n),d=r[l],p=s.slice(0),h=U.size(p),g=L("input",i,n),u=L("indicesInput",a,s.length),w=ee("output",i,p.length),_=[{type:12,data:h},{type:6,data:d},{type:12,data:l}];return _.push(...Q(r,s,p)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:_}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,u,w)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${w.offsetToIndices("global_idx")};

      var idx = ${u.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${g.type.indices}(outputIndices);
      ${g.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${g.getByIndices("inputIndices")};

      ${w.setByOffset("global_idx","value")};
  }`}},Wh=e=>Ie({axis:e.axis}),Lh=(e,t)=>{let r=e.inputs;Yu(r),e.compute(Zu(e.inputs,t))}}),Xu,Qu,qh,Vh,yg=V(()=>{oe(),pe(),he(),Xu=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Qu=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[n,s,a]=Hd.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),l=[n,s];if(!l)throw new Error("Can't use gemm on the given tensors");let d=U.size(l),p=[{type:12,data:d},{type:12,data:n},{type:12,data:s},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],h=["type","type"];e.length===3&&(p.push(...Q(e[2].dims)),h.push("rank")),p.push(...Q(l));let g=u=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let _=t.alpha===1?"":"value *= uniforms.alpha;",b=L("a",e[0].dataType,e[0].dims),E=L("b",e[1].dataType,e[1].dims),I=b.type.value,S=null,C=[b,E];e.length===3&&(S=L("c",e[2].dataType,e[2].dims.length),C.push(S));let T=ee("output",e[0].dataType,l.length);C.push(T);let A=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${u.registerUniforms(A).declareVariables(...C)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${I}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${w}
    }

    ${_}
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",T)}; value += ${I}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`};return{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:g}},qh=e=>{let t=e.transA,r=e.transB,i=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:i,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Vh=(e,t)=>{Xu(e.inputs),e.compute(Qu(e.inputs,t))}}),Ze,Ju,jh,vn,el,zr,Gh,Hh=V(()=>{oe(),pe(),Ne(),_a(),xa(),he(),Vt(),Ze=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Ju=(e,t)=>{let r=e[0],i=Ze(e,1),n=Ze(e,2),s=Ze(e,3),a=Ze(e,4),l=Ze(e,5),d=Ze(e,6),p=Ze(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=r.dims[0],g=r.dims[1],u=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],w=g,_=0,b=0,E=Math.floor(u/t.numHeads);if(d&&p&&U.size(d.dims)&&U.size(p.dims)){if(d.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(d.dims[0]!==h||d.dims[1]!==t.numHeads||d.dims[3]!==E)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==h||p.dims[1]!==t.numHeads||p.dims[3]!==E)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[2]!==p.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(p.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=d.dims[2],b=d.dims[2]}else if(d&&U.size(d.dims)||p&&U.size(p.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let I;if(i&&U.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');I=2,w=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==E)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');I=5,w=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==E)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');I=0,w=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');I=3}if(s&&U.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let S=_+w,C=0;if(a&&U.size(a.dims)>0){C=8;let O=a.dims;throw O.length===1?O[0]===h?C=1:O[0]===3*h+2&&(C=3):O.length===2&&O[0]===h&&O[1]===S&&(C=5),C===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let T=!1,A=u;if(n&&U.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(w!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');A=n.dims[2]}else{if(w!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');A=n.dims[1]*n.dims[3],T=!0}}let P=!1;if(a&&U.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(l&&U.size(l.dims)>0){if(l.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==h||l.dims[1]!==t.numHeads||l.dims[2]!==g||l.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:g,pastSequenceLength:_,kvSequenceLength:w,totalSequenceLength:S,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:u,vHiddenSize:A,headSize:E,vHeadSize:Math.floor(A/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:C,scale:t.scale,broadcastResPosBias:P,passPastInKv:T,qkvFormat:I}},jh=e=>Ie({...e}),vn=Ie({perm:[0,2,1,3]}),el=(e,t,r,i,n,s,a)=>{let l=[i,n,s],d=U.size(l),p=[{type:12,data:d},{type:12,data:a},{type:12,data:s}],h=g=>{let u=ee("qkv_with_bias",t.dataType,l),w=L("qkv",t.dataType,l),_=L("bias",r.dataType,l),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${g.registerUniforms(b).declareVariables(w,_,u)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:l,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:h},{inputs:[t,r],outputs:[-1]})[0]},zr=(e,t,r,i,n,s,a,l)=>{let d=s;if(a&&U.size(a.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return d=el(e,s,a,t,i,r*n,l),d=d.reshape([t,i,r,n]),r===1||i===1?d:e.compute(it(d,vn.perm),{inputs:[d],outputs:[-1]})[0]}else return s.dims.length===3&&(d=s.reshape([t,i,r,n])),r===1||i===1?d:e.compute(it(d,vn.perm),{inputs:[d],outputs:[-1]})[0]},Gh=(e,t)=>{let r=Ju(e.inputs,t),i=e.inputs[0],n=Ze(e.inputs,1),s=Ze(e.inputs,2),a=Ze(e.inputs,3),l=Ze(e.inputs,4),d=Ze(e.inputs,5),p=Ze(e.inputs,6),h=Ze(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if((n==null?void 0:n.dims.length)===5)throw new Error("Packed KV is not implemented");let g=n&&s&&n.dims.length===4&&s.dims.length===4,u=zr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,a,0);if(g)return Or(e,u,n,s,l,void 0,p,h,d,r,t);if(!n||!s)throw new Error("key and value must be provided");let w=zr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,a,r.hiddenSize),_=zr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,a,2*r.hiddenSize);Or(e,u,w,_,l,void 0,p,h,d,r,t)}}),xn,tl,rl,ta,Kh,Yh=V(()=>{oe(),pe(),he(),xn=e=>Array.from(e.getBigInt64Array(),Number),tl=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(xn(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},rl=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},ta=(e,t)=>{let r=e[0].dims,i=t??xn(e[1]),n=rl(r,i),s=U.size(n),a=e[0].dataType,l=L("input",a,r.length),d=ee("output",a,n.length),p=h=>`
      const inputShape = ${l.indices(...r)};
      ${h.registerUniform("output_size","u32").declareVariables(l,d)}
      ${h.mainStart()}
      ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${d.offsetToIndices("global_idx")};
      var input_indices: ${l.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${l.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${d.indicesGet("output_indices","i")}  % input_dim_i;

        ${l.indicesSet("input_indices","i","input_dim_value")}
      }
      ${d.setByOffset("global_idx",l.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...Q(e[0].dims,n)]}),getShaderSource:p}},Kh=e=>{tl(e.inputs),e.compute(ta(e.inputs),{inputs:[0]})}}),il,Sn,Zh,nl,En,Xh,wg=V(()=>{oe(),pe(),Ne(),xa(),he(),Hh(),Yh(),Vt(),il=(e,t)=>{let r=e[0],i=e[1],n=e[2],s=e[3],a=e[4];if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let l=!1,d=r.dims[0],p=r.dims[1],h=r.dims.length===3?l?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],g=p,u=0,w=0,_=Math.floor(h/t.numHeads),b=s&&s.dims.length!==0,E=a&&a.dims.length!==0,I=!0;if(b&&E){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');u=s.dims[1],w=s.dims[1]}else if(b||E)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let S;if(i){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');S=2,g=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');S=5,g=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');S=0,g=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');S=3}let C=0,T=!1,A=h;if(n){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(g!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');A=n.dims[2]}else{if(g!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');A=n.dims[1]*n.dims[3],T=!0}}let P=u+g;return{batchSize:d,sequenceLength:p,pastSequenceLength:u,kvSequenceLength:g,totalSequenceLength:P,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:h,vHiddenSize:A,headSize:_,vHeadSize:Math.floor(A/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:C,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:S,isPastkvBSNH:I}},Sn=(e,t,r,i)=>{let n=[i.batchSize,i.totalSequenceLength,i.kvNumHeads,i.headSize],s=4,a=U.size(n)/s,l=i.totalSequenceLength,d=ee("present_kv",r,n.length,s),p=L("new_kv",e.dataType,e.dims.length,s),h=t?L("past_kv",t.dataType,t.dims.length,s):void 0,g=Math.ceil(i.headSize/s),u={x:l,y:e.dims[0],z:1},w=t?["rank","rank"]:["rank"],_=[{type:12,data:a},{type:12,data:i.pastSequenceLength},{type:12,data:i.kvSequenceLength},{type:12,data:i.totalSequenceLength}],b=[p];h?(_.push(...Q(e.dims),...Q(t.dims),...Q(n)),b.push(h)):_.push(...Q(e.dims),...Q(n));let E=[{name:"output_size",type:"u32"},{name:"past_seqlen",type:"u32"},{name:"new_seqlen",type:"u32"},{name:"present_seqlen",type:"u32"}],I=`      let past_batch_stride = uniforms.past_seqlen * num_heads * H;
        var past_head_stride = uniforms.past_seqlen * H;
        if (is_bsnh) {
          past_head_stride = H;
        }
        let in_offset = b * past_batch_stride + s * row_stride + n * past_head_stride + h;
        present_kv[out_offset] = past_kv[in_offset];`,S=`      let new_batch_stride = uniforms.new_seqlen * num_heads * H;
        let new_row_stride = num_heads * H;
        let new_head_stride = H;
        let in_offset = b * new_batch_stride + (s - past_seqlen) * new_row_stride + n * new_head_stride + h;
        present_kv[out_offset] = new_kv[in_offset];`,C=t?`if (s < past_seqlen) {
        ${I}
        } else if (s < past_seqlen + uniforms.new_seqlen) {
        ${S}
        }`:`if (s < past_seqlen + uniforms.new_seqlen) {
          ${S}
        }`,T=A=>`

  ${A.registerUniforms(E).declareVariables(...b,d)}
  ${A.mainStart([g,i.kvNumHeads,1])}
    ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    var indices = ${d.offsetToIndices("global_idx")};
    let h = local_id.x;
    let n = local_id.y;
    let s = workgroup_id.x;
    let b = workgroup_id.y;
    let num_heads = ${i.kvNumHeads}u;
    let H = ${g}u;

    let present_seqlen = uniforms.present_seqlen;
    let present_batch_stride = present_seqlen * num_heads * H;
    var row_stride = H;
    let is_bsnh = ${i.isPastkvBSNH};

    if (is_bsnh) {
      row_stride = num_heads * H;
    }
    var present_head_stride = present_seqlen * H;
    if (is_bsnh) {
      present_head_stride = H;
    }

    let past_seqlen = uniforms.past_seqlen;

    let out_offset = b * present_batch_stride + s * row_stride + n * present_head_stride + h;
    ${C}
  }`;return{name:"ConcatPastNew",shaderCache:{hint:`${i.kvNumHeads}${g}${!!t}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:u,programUniforms:_}),getShaderSource:T}},Zh=e=>Ie({...e}),nl=Ie({perm:[0,2,1,3]}),En=(e,t,r,i,n)=>{let s=t,a=i.kvNumHeads,l=i.nReps;return t.dims.length===3&&i.kvSequenceLength!==0&&(s=t.reshape([i.batchSize,i.kvSequenceLength,a,i.headSize])),r?s=e.compute(Sn(s,r,s.dataType,i),{inputs:[s,r],outputs:[i.isPastkvBSNH?n:-1]})[0]:s=e.compute(Sn(s,void 0,s.dataType,i),{inputs:[s],outputs:[i.isPastkvBSNH?n:-1]})[0],l!==1&&(s=e.compute(ta([s],[1,1,1,l]),{inputs:[s],outputs:[-1]})[0],s=s.reshape([i.batchSize,i.totalSequenceLength,a*l,i.headSize])),e.compute(it(s,nl.perm),{inputs:[s],outputs:[-1]})[0]},Xh=(e,t)=>{var d;let r=il(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((d=e.inputs[1])==null?void 0:d.dims.length)===5)throw new Error("Packed KV is not implemented");let i=zr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,e.inputs[0],void 0,0),n=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,a=En(e,e.inputs[1],n,r,1),l=En(e,e.inputs[2],s,r,2);Or(e,i,a,l,void 0,void 0,void 0,void 0,void 0,r,t)}}),In,al,sl,Qh,$g=V(()=>{oe(),pe(),Vt(),he(),In=(e,t,r,i,n,s,a,l)=>{let d=Ue(s),p=d===1?"f32":`vec${d}f`,h=d===1?"vec2f":`mat2x${d}f`,g=n*a,u=[n,a,s/d],w=[n,a,2],_=["rank","type","type"],b=[];b.push(...Q(u,w));let E=I=>{let S=L("x",t.dataType,3,d),C=L("scale",r.dataType,r.dims),T=L("bias",i.dataType,i.dims),A=ee("output",1,3,2),P=[S,C,T,A],O=64;return`
  var<workgroup> workgroup_shared : array<${h}, ${O}>;
  const workgroup_size = ${O}u;
  ${I.declareVariables(...P)}
  ${I.mainStart(O)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${p}(0);
    var squared_sum = ${p}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${p}(${S.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${h}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Ft("workgroup_shared[0][0]",d)} / f32(hight * ${d});
      let squared_sum_final = ${Ft("workgroup_shared[0][1]",d)} / f32(hight * ${d});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${l}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${d};${l}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:w,dataType:1}],dispatchGroup:{x:g},programUniforms:b}),getShaderSource:E},{inputs:[t,r,i],outputs:[-1]})[0]},al=(e,t,r)=>{let i=t[0].dims,n=i,s=2,a=i[0],l=i[1],d=U.sizeFromDimension(i,s),p=Ue(d),h=U.size(n)/p,g=In(e,t[0],t[1],t[2],a,d,l,r.epsilon),u=[a,l,d/p],w=[a,l],_=["type","none"],b=E=>{let I=L("x",t[0].dataType,u.length,p),S=L("scale_shift",1,w.length,2),C=ee("output",t[0].dataType,u.length,p),T=[I,S,C];return`
  ${E.registerUniform("output_size","u32").declareVariables(...T)}
  ${E.mainStart()}
  ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${C.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${S.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${I.getByOffset("global_idx")} * ${C.type.value}(scale_shift.x) + ${C.type.value}(scale_shift.y);
      ${C.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${p}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...Q(u,w,u)]}),getShaderSource:b},{inputs:[t[0],g]})},sl=(e,t,r)=>{let i=t[0].dims,n=i,s=i[0],a=i[i.length-1],l=U.sizeFromDimension(i,1)/a,d=Ue(a),p=U.size(n)/d,h=[{type:12,data:l},{type:12,data:Math.floor(a/d)}],g=["type","type"],u=[0,i.length-1];for(let E=0;E<i.length-2;E++)u.push(E+1);let w=e.compute(it(e.inputs[0],u),{inputs:[e.inputs[0]],outputs:[-1]})[0],_=In(e,w,t[1],t[2],s,l,a,r.epsilon),b=E=>{let I=We(t[0].dataType),S=d===1?"vec2f":`mat${d}x2f`,C=P=>{let O=P===0?"x":"y",W=d===1?"f32":`vec${d}f`;switch(d){case 1:return`${I}(${W}(scale.${O}))`;case 2:return`vec2<${I}>(${W}(scale[0].${O}, scale[1].${O}))`;case 4:return`vec4<${I}>(${W}(scale[0].${O}, scale[1].${O}, scale[2].${O}, scale[3].${O}))`;default:throw new Error(`Not supported compoents ${d}`)}},T=L("input",t[0].dataType,t[0].dims,d),A=ee("output",t[0].dataType,n,d);return`
  @group(0) @binding(0) var<storage, read> input : array<${T.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${S}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${A.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${E.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${C(0)}, ${C(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${d}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:h}),getShaderSource:b},{inputs:[t[0],_]})},Qh=(e,t)=>{t.format==="NHWC"?sl(e,e.inputs,t):al(e,e.inputs,t)}}),ol,ul,Jh,_g=V(()=>{oe(),pe(),he(),ol=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},ul=(e,t,r)=>{let i=t.simplified,n=e[0].dims,s=e[1],a=!i&&e[2],l=n,d=U.normalizeAxis(t.axis,n.length),p=U.sizeToDimension(n,d),h=U.sizeFromDimension(n,d),g=U.size(s.dims),u=a?U.size(a.dims):0;if(g!==h||a&&u!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${g} and bias size of ${u}`);let w=[];for(let A=0;A<n.length;++A)A<d?w.push(n[A]):w.push(1);let _=Ue(h),b=["type","type"],E=[{type:12,data:p},{type:1,data:h},{type:12,data:Math.floor(h/_)},{type:1,data:t.epsilon}];a&&b.push("type");let I=r>1,S=r>2,C=A=>{let P=We(e[0].dataType),O=[L("x",e[0].dataType,e[0].dims,_),L("scale",s.dataType,s.dims,_)];a&&O.push(L("bias",a.dataType,a.dims,_)),O.push(ee("output",e[0].dataType,l,_)),I&&O.push(ee("mean_data_output",1,w)),S&&O.push(ee("inv_std_output",1,w));let W=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${A.registerUniforms(W).declareVariables(...O)}
  ${A.mainStart()}
    ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Gn("f32",_)};
    var mean_square_vector = ${Gn("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${lr(P,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Ft("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Ft("mean_square_vector",_)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${lr(P,_,"x[j + offset]")};
      let f32scale = ${lr(P,_,"scale[j]")};
      output[j + offset] = ${O[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${lr(P,_,"bias[j]")}`:""}
      );
    }

    ${I?"mean_data_output[global_idx] = mean":""};
    ${S?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},T=[{dims:l,dataType:e[0].dataType}];return I&&T.push({dims:w,dataType:1}),S&&T.push({dims:w,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${i}`,inputDependencies:b},getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(p/64)},programUniforms:E}),getShaderSource:C}},Jh=(e,t)=>{ol(e.inputs),e.compute(ul(e.inputs,t,e.outputCount))}}),ll,dl,pl,ec,tc,bg=V(()=>{oe(),pe(),Ne(),he(),ll=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,a=e[1];if(!U.areEqual(a.dims,[t.n,n,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let l=e[2].dims;if(U.size(l)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let d=e[3].dims,p=t.bits>4?t.n*n:t.n*Math.floor((n+1)/2);if(U.size(d)!==p)throw new Error("zeroPoints input size error.")}},dl=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],s=t.k,a=t.n,l=r.slice(0,i-2),d=U.size(l),p=e[1].dims[2]/4,h=e[0].dataType,g=Ue(t.k),u=Ue(p),w=Ue(a),_=l.concat([n,a]),b=n>1&&a/w%2===0?2:1,E=U.size(_)/w/b,I=64,S=[],C=[d,n,s/g],T=U.convertShape(e[1].dims).slice();T.splice(-1,1,p/u),S.push(...Q(C)),S.push(...Q(T)),S.push(...Q(e[2].dims)),e.length===4&&S.push(...Q(U.convertShape(e[3].dims)));let A=[d,n,a/w];S.push(...Q(A));let P=O=>{let W=C.length,H=L("a",e[0].dataType,W,g),Z=L("b",12,T.length,u),ue=L("scales",e[2].dataType,e[2].dims.length),le=[H,Z,ue],te=e.length===4?L("zero_points",12,e[3].dims.length):void 0;te&&le.push(te);let we=A.length,xe=ee("output",e[0].dataType,we,w),de=We(e[0].dataType),$e=(()=>{switch(g){case 1:return`array<${de}, 8>`;case 2:return`mat4x2<${de}>`;case 4:return`mat2x4<${de}>`;default:throw new Error(`${g}-component is not supported.`)}})(),X=()=>{let D=`
          // reuse a data
            var input_offset = ${H.indicesToOffset(`${H.type.indices}(batch, row, word_offset)`)};
            var a_data: ${$e};
            for (var j: u32 = 0; j < ${8/g}; j++) {
              a_data[j] = ${H.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let j=0;j<w*b;j++)D+=`
            b_value = ${u===1?`b${j}_data`:`b${j}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${$e}(${Array.from({length:4},(ne,se)=>`${de}(b_value_lower[${se}]), ${de}(b_value_upper[${se}])`).join(", ")});
            b_dequantized_values = ${g===1?`${$e}(${Array.from({length:8},(ne,se)=>`(b_quantized_values[${se}] - ${te?`zero_point${j}`:"zero_point"}) * scale${j}`).join(", ")});`:`(b_quantized_values - ${$e}(${Array(8).fill(`${te?`zero_point${j}`:"zero_point"}`).join(",")})) * scale${j};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(j/w)}]${w>1?`[${j%w}]`:""} += ${Array.from({length:8/g},(ne,se)=>`${g===1?`a_data[${se}] * b_dequantized_values[${se}]`:`dot(a_data[${se}], b_dequantized_values[${se}])`}`).join(" + ")};
          `;return D},ie=()=>{let D=`
            var col_index = col * ${w};
            ${te?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${de}(8);`}
            `;for(let j=0;j<w*b;j++)D+=`
            let scale${j} = ${ue.getByOffset("col_index * nBlocksPerCol + block")};
            ${te?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${te.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${j} = ${de}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return D},fe=()=>{let D=`col_index = col * ${w};`;for(let j=0;j<w*b;j++)D+=`
            let b${j}_data = ${Z.getByIndices(`${Z.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return D+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${$e};
            var b_dequantized_values: ${$e};`,D};return`
        var<workgroup> workgroup_shared: array<${xe.type.value}, ${b*I}>;
        ${O.declareVariables(...le,xe)}
        ${O.mainStart([I,1,1])}
          let output_indices = ${xe.offsetToIndices(`(global_idx / ${I}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${I}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/g};
            ${ie()}
            for (var word: u32 = 0; word < ${p}; word += ${u}) {
              ${fe()}
              for (var i: u32 = 0; i < ${u}; i++) {
                ${X()}
                word_offset += ${8/g};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${xe.type.value} = ${xe.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${I}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${xe.setByIndices(`${xe.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${g};${u};${w};${b};${I}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:h}],dispatchGroup:{x:E},programUniforms:S}),getShaderSource:P}},pl=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],s=t.k,a=t.n,l=r.slice(0,i-2),d=U.size(l),p=e[1].dims[2]/4,h=e[0].dataType,g=Ue(t.k),u=Ue(p),w=l.concat([n,a]),_=128,b=a%8===0?8:a%4===0?4:1,E=_/b,I=E*u*8,S=I/g,C=I/t.blockSize,T=U.size(w)/b,A=[],P=[d,n,s/g],O=U.convertShape(e[1].dims).slice();O.splice(-1,1,p/u),A.push(...Q(P)),A.push(...Q(O)),A.push(...Q(e[2].dims)),e.length===4&&A.push(...Q(U.convertShape(e[3].dims)));let W=[d,n,a];A.push(...Q(W));let H=Z=>{let ue=P.length,le=L("a",e[0].dataType,ue,g),te=L("b",12,O.length,u),we=L("scales",e[2].dataType,e[2].dims.length),xe=[le,te,we],de=e.length===4?L("zero_points",12,e[3].dims.length):void 0;de&&xe.push(de);let $e=W.length,X=ee("output",e[0].dataType,$e),ie=We(e[0].dataType),fe=()=>{switch(g){case 1:return`
          let a_data0 = vec4<${ie}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ie}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ie}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ie}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${g}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${le.type.value}, ${S}>;
        var<workgroup> inter_results: array<array<${X.type.value}, ${E}>, ${b}>;
        ${Z.declareVariables(...xe,X)}
        ${Z.mainStart([E,b,1])}
          let output_indices = ${X.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${C} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${S};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${S}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${le.getByIndices(`${le.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${le.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${C} + local_id.x;
            ${de?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${de.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ie}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${ie}(8);`}
            let scale = ${we.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${te.getByIndices(`${te.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/g};
            for (var i: u32 = 0; i < ${u}; i++) {
              ${fe()}
              let b_value = ${u===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${ie}>(${Array.from({length:4},(D,j)=>`${ie}(b_value_lower[${j}]), ${ie}(b_value_upper[${j}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${ie}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(D,j)=>`${`dot(a_data${j}, b_dequantized_values[${j}])`}`).join(" + ")};
              word_offset += ${8/g};
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${X.type.value} = ${X.type.value}(0);
            for (var b = 0u; b < ${E}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${X.setByIndices(`${X.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${g};${u};${E};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:w,dataType:h}],dispatchGroup:{x:T},programUniforms:A}),getShaderSource:H}},ec=(e,t)=>{ll(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(pl(e.inputs,t)):e.compute(dl(e.inputs,t))},tc=e=>Ie(e)}),hl,cl,fl,ml,gl,yl,wl,$l,rc,vg=V(()=>{oe(),pe(),he(),hl=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},cl=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
            k = i32(${e.indicesGet("indices",n)}) - ${J("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${J("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${J("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},fl=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${J("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${J("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${J("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${J("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},ml=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${J("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${J("uniforms.x_shape",n,t)})) {
                  k = i32(${J("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${J("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},gl=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${J("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${J("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${J("uniforms.x_shape",n,t)})) {
                  k -= i32(${J("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${J("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},yl=(e,t,r)=>{switch(r.mode){case 0:return cl(e,t,r.pads.length);case 1:return fl(e,t,r.pads.length);case 2:return ml(e,t,r.pads.length);case 3:return gl(e,t,r.pads.length);default:throw new Error("Invalid mode")}},wl=(e,t)=>{let r=U.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,n=U.size(r),s=[{type:12,data:n},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&s.push({type:a?e[2].dataType:1,data:t.value}),s.push(...Q(e[0].dims,r));let l=["rank"],d=p=>{let h=ee("output",e[0].dataType,r.length),g=L("x",e[0].dataType,i.length),u=g.type.value,w=yl(h,i.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:a?u:"f32"}),`
            ${p.registerUniforms(_).declareVariables(g,h)}
            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${u}(0);
            ${w}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(U.size(r)/64)},programUniforms:s}),getShaderSource:d}},$l=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,s=new Int32Array(2*n).fill(0);if(e.length>=4){let l=e[3].getBigInt64Array();for(let d=0;d<l.length;d++)s[Number(l[d])]=Number(r[d]),s[Number(l[d])+n]=Number(r[d+l.length])}else r.forEach((l,d)=>s[Number(d)]=Number(l));let a=[];return s.forEach(l=>a.push(l)),{mode:t.mode,value:i,pads:a}}else return t},rc=(e,t)=>{hl(e.inputs);let r=$l(e.inputs,t);e.compute(wl(e.inputs,r),{inputs:[0]})}}),vr,kn,Tn,Cn,An,_l,bl,zn,Bn,ic,nc,On,ac,sc,Rn,oc,uc,lc,dc,xg=V(()=>{vt(),oe(),pe(),he(),vr=e=>{if(ze.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},kn=(e,t,r)=>{let i=t.format==="NHWC",n=e.dims.slice();i&&n.splice(1,0,n.pop());let s=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),l=t.strides.slice(),d=s?t.dilations.slice():[],p=t.pads.slice();wi.adjustPoolAttributes(r,n,a,l,d,p);let h=wi.computePoolOutputShape(r,n,l,d,a,p,t.autoPad),g=Object.assign({},t);s?Object.assign(g,{kernelShape:a,strides:l,pads:p,dilations:d,cacheKey:t.cacheKey}):Object.assign(g,{kernelShape:a,strides:l,pads:p,cacheKey:t.cacheKey});let u=h.slice();return u.push(u.splice(1,1)[0]),[g,i?u:h]},Tn=(e,t)=>{let r=t.format==="NHWC",i=U.size(e),n=U.size(t.kernelShape),s=[{type:12,data:i},{type:12,data:n}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let l=t.kernelShape[t.kernelShape.length-1],d=t.strides[t.strides.length-1],p=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],g=!!(p+h);s.push({type:12,data:l},{type:12,data:d},{type:12,data:p},{type:12,data:h}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let u=!1;if(t.kernelShape.length===2){let w=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],E=t.pads[t.pads.length-2];u=!!(b+E),s.push({type:12,data:w},{type:12,data:_},{type:12,data:b},{type:12,data:E}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,a,!0,g,u]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let l=U.computeStrides(t.kernelShape);s.push({type:12,data:l},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:l.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let d=t.pads.reduce((p,h)=>p+h);return[s,a,!!d,!1,!1]}},Cn=(e,t,r,i,n,s,a,l,d,p,h,g)=>{let u=n.format==="NHWC",w=t.type.value,_=ee("output",t.type.tensor,i);if(n.kernelShape.length<=2){let b="",E="",I="",S=r-(u?2:1);if(h?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${S}] < 0 || xIndices[${S}]
                      >= uniforms.x_shape[${S}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,n.kernelShape.length===2){let C=r-(u?3:2);g?E=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${C}] = indices[${C}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${C}] < 0 || xIndices[${C}] >= uniforms.x_shape[${C}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:E=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${C}] = indices[${C}] * uniforms.sh - uniforms.phStart + j;
                `,I=`
              }
            `}return`
            ${e.registerUniforms(d).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${w}(${l});
              var pad = 0;
              ${E}
              ${b}
              ${I}
              ${a}

              output[global_idx] = value;
            }`}else{if(u)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=n.kernelShape.length,E=n.pads.length,I="";return p?I=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:I=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(d).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${w}(${l});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${J("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${J("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${r-b}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${J("uniforms.strides",`j - ${r-b}u`,b)}
                    + offsets[j - ${r-b}u] - ${J("uniforms.pads","j - 2u",E)};
                  ${I}
              }
              ${a}

              output[global_idx] = value;
            }`}},An=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,_l=e=>`${An(e)};${e.countIncludePad}`,bl=e=>`${An(e)};${e.storageOrder};${e.dilations}`,zn=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Bn=(e,t,r,i)=>{let[n,s]=kn(t,i,r),a=L("x",t.dataType,t.dims.length),l=a.type.value,d="value += x_val;",p="";n.countIncludePad?p+=`value /= ${l}(uniforms.kernelSize);`:p+=`value /= ${l}(i32(uniforms.kernelSize) - pad);`;let[h,g,u,w,_]=Tn(s,n);h.push(...Q(t.dims,s));let b=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${u};${w};${_}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(U.size(s)/64)},programUniforms:h}),getShaderSource:E=>Cn(E,a,t.dims.length,s.length,n,d,p,0,g,u,w,_)}},ic=e=>{let t=e.count_include_pad!==0,r=zn(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:_l(i)}},nc=(e,t)=>{vr(e.inputs),e.compute(Bn("AveragePool",e.inputs[0],!1,t))},On={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},ac=e=>{let t=e.format;return{format:t,...On,cacheKey:t}},sc=(e,t)=>{vr(e.inputs),e.compute(Bn("GlobalAveragePool",e.inputs[0],!0,t))},Rn=(e,t,r,i)=>{let[n,s]=kn(t,i,r),a=`
      value = max(x_val, value);
    `,l="",d=L("x",t.dataType,t.dims.length),p=["rank"],[h,g,u,w,_]=Tn(s,n);return h.push(...Q(t.dims,s)),{name:e,shaderCache:{hint:`${i.cacheKey};${u};${w};${_}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(U.size(s)/64)},programUniforms:h}),getShaderSource:b=>Cn(b,d,t.dims.length,s.length,n,a,l,t.dataType===10?-65504:-1e5,g,u,w,_)}},oc=(e,t)=>{vr(e.inputs),e.compute(Rn("MaxPool",e.inputs[0],!1,t))},uc=e=>{let t=e.storage_order,r=e.dilations,i=zn(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...i,cacheKey:""};return{...n,cacheKey:bl(n)}},lc=e=>{let t=e.format;return{format:t,...On,cacheKey:t}},dc=(e,t)=>{vr(e.inputs),e.compute(Rn("GlobalMaxPool",e.inputs[0],!0,t))}}),vl,xl,pc,hc,Sg=V(()=>{oe(),pe(),Ne(),he(),vl=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,s)=>s===t.axis||n===e[0].dims[s]).reduce((n,s)=>n&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},xl=(e,t)=>{let r=U.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,n=i===3,s=e[0].dims,a=e[1].dataType,l=U.size(s),d=i===3||i===2,p=d?[Math.ceil(U.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,g=e.length>2?e[2]:void 0,u=g?d?[Math.ceil(U.size(g.dims)/4)]:g.dims:void 0,w=h.length===0||h.length===1&&h[0]===1,_=w===!1&&h.length===1,b=Ue(l),E=w&&(!d||b===4),I=E?b:1,S=E&&!d?b:1,C=L("input",d?12:i,p.length,S),T=L("scale",a,h.length),A=g?L("zero_point",d?12:i,u.length):void 0,P=ee("output",a,s.length,I),O=[C,T];A&&O.push(A);let W=[p,h];g&&W.push(u);let H=[{type:12,data:l/I},{type:12,data:r},{type:12,data:t.blockSize},...Q(...W,s)],Z=ue=>{let le=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${ue.registerUniforms(le).declareVariables(...O,P)}
      ${ue.mainStart()}
          ${ue.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${P.offsetToIndices("global_idx")};

          // Set input x
          ${d?`
            let input = ${C.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${I===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${C.getByOffset("global_idx")};`};

          // Set scale input
          ${w?`let scale_value= ${T.getByOffset("0")}`:_?`
            let scale_index = ${P.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${T.getByOffset("scale_index")};`:`
            var scale_indices: ${T.type.indices} = output_indices;
            let index = ${T.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${T.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${T.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${A?w?d?`
                let zero_point_input = ${A.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${A.getByOffset("0")}`:_?d?`
                let zero_point_index = ${P.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${A.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${P.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${A.getByOffset("zero_point_index")};`:d?`
                let zero_point_offset = ${T.indicesToOffset("scale_indices")};
                let zero_point_input = ${A.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${A.getByIndices("scale_indices")};`:`let zero_point_value = ${d?n?"i32":"u32":C.type.value}(0);`};
      // Compute and write output
      ${P.setByOffset("global_idx",`${P.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:A?["rank","rank","rank"]:["rank","rank"]},getShaderSource:Z,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(l/I/64),y:1,z:1},programUniforms:H})}},pc=(e,t)=>{vl(e.inputs,t),e.compute(xl(e.inputs,t))},hc=e=>Ie({axis:e.axis,blockSize:e.blockSize})}),Sl,El,cc,Eg=V(()=>{vt(),oe(),he(),Sl=(e,t,r)=>{let i=e===t,n=e<t&&r<0,s=e>t&&r>0;if(i||n||s)throw new Error("Range these inputs' contents are invalid.")},El=(e,t,r,i)=>{let n=Math.abs(Math.ceil((t-e)/r)),s=[n],a=n,l=[{type:12,data:a},{type:i,data:e},{type:i,data:r},...Q(s)],d=p=>{let h=ee("output",i,s.length),g=h.type.value,u=[{name:"outputSize",type:"u32"},{name:"start",type:g},{name:"delta",type:g}];return`
        ${p.registerUniforms(u).declareVariables(h)}
        ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${g}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:d,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l})}},cc=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),ze.webgpu.validateInputContent&&Sl(t,r,i),e.compute(El(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),Il,kl,Tl,Cl,Al,zl,Bl,Ol,Rl,Ml,Pl,Mn,Dl,Ul,Nl,Fl,Wl,fc,mc,Ig=V(()=>{oe(),pe(),Ne(),he(),Il=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},kl=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((n,s)=>i[n]=e[s]),i},Tl=(e,t,r,i,n,s)=>{let[a,l,d]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],p=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(h=>s.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0){if(e[l].getFloat32Array().forEach(h=>i.push(h)),i.length!==0&&i.length!==p&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Il(i,t),t.axes.length>0&&kl(i,t.axes,p).forEach((h,g)=>i[g]=h)}if(d>0&&e.length>d&&e[d].dims.length===1&&e[d].dims[0]>0&&(e[d].getBigInt64Array().forEach(h=>n.push(Number(h))),n.length!==0&&n.length!==p&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof n<"u"&&i.length>0&&n.length>p)throw new Error("Resize requires only of scales or sizes to be specified")},Cl=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`return ${t}(xResized) / ${t}(xScale);`;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    // The whole part and the fractional part are calculated separately due to inaccuracy of floating
                    // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
                    // offset-by-one error later in floor().
                    let whole = ${t}(xResized * (lengthOriginal - 1) / (lengthResized - 1));
                    let fract =
                        ${t}(xResized * (lengthOriginal - 1) % (lengthResized - 1)) / ${t}(lengthResized - 1);
                    return whole + fract;
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Al=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",zl=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?i:e.slice();return t.length>0?(t.forEach((s,a)=>{i[s]=n[a],i[a+r]=n[t.length+a]}),i):n},Bl=(e,t,r,i)=>{let n=[];if(r.length>0)if(i.length>0){if(e.forEach(s=>n.push(s)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((s,a)=>n[s]=r[a])}else r.forEach(s=>n.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((s,a)=>Math.round(s*t[a]))}return n},Ol=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=i),r.axes.forEach(s=>n[s]=Math.round(e[s]*t[s]))):(t.fill(i,0,t.length),n.forEach((s,a)=>n[a]=Math.round(s*t[a]))),n},Rl=(e,t,r,i,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${J("uniforms.scales","i",i)};
        var roi_low = ${J("uniforms.roi","i",n)};
        var roi_hi = ${J("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${J("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${J("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Ml=(e,t,r,i,n,s,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${J("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${J("uniforms.roi","i",s)};
          var roi_hi = ${J("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${J("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${J("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${a} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i"," input_index")}
      }
      return input_indices;
    }`,Pl=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${J("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Mn=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Dl=(e,t,r,i,n)=>{let[s,a,l,d]=r.length===2?[-1,0,1,-1]:[0,2,3,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(col, ${r[l]} - 1))`)};
      ${Mn(e,d,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${p} = originalIndices[${a}];
      var col:${p} = originalIndices[${l}];
      ${i?`if (row < 0 || row > (${r[a]} - 1) || col < 0 || col > (${r[l]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[a]} - 1));
      col = max(0, min(col, ${r[l]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${p} = getInputValue(batch, channel, row1, col1);
      var x12: ${p} = getInputValue(batch, channel, row1, col2);
      var x21: ${p} = getInputValue(batch, channel, row2, col1);
      var x22: ${p} = getInputValue(batch, channel, row2, col2);
      var dx1: ${p} = abs(row - ${p}(row1));
      var dx2: ${p} = abs(${p}(row2) - row);
      var dy1: ${p} = abs(col - ${p}(col1));
      var dy2: ${p} = abs(${p}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Ul=(e,t,r,i,n,s,a,l,d,p)=>{let h=r.length===2,[g,u]=h?[0,1]:[2,3],w=e.type.value,_=b=>{let E=b===g?"row":"col";return`
      fn ${E}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${w} {
        var output_index = ${t.indicesGet("output_indices",b)};
        var originalIdx: ${w} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[b]},
        ${i[b]}, ${r[b]}, ${s[b]}, ${s[b]} + ${r.length});
        var fractOriginalIdx: ${w} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${l} && (originalIdx < 0 || originalIdx > (${r[b]} - 1))) {
          return ${d};
        }
        var data: array<${w}, 4> = array<${w}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${E}: ${w} = originalIdx + ${w}(i);
          if (${E} < 0 || ${E} >= ${r[b]}) {
            ${p?`coefs[i + 1] = 0.0;
                        continue;`:l?`return ${d};`:`${E} = max(0, min(${E}, ${r[b]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${E})`)};
          data[i + 1] = ${b===g?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(g)};
    ${_(u)};
  fn getCubicInterpolationCoefs(s: ${w}) -> array<${w}, 4> {
    var absS = abs(s);
    var coeffs: array<${w}, 4> = array<${w}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${w} = 1.0 - absS;
    var twoMinusAbsS: ${w} = 2.0 - absS;
    var onePlusAbsS: ${w} = 1.0 + absS;
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${w}, 4>, coefs: array<${w}, 4>) -> ${w} {
    var coefsSum: ${w} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${w} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Nl=(e,t,r,i,n)=>{let[s,a,l,d,p]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(height, ${r[l]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(width, ${r[d]} - 1))`)};
      ${Mn(e,p,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${h} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${h} = originalIndices[${a}];
      var height:${h} = originalIndices[${l}];
      var width:${h} = originalIndices[${d}];
      ${i?`if (depth < 0 || depth > (${r[a]} - 1) || height < 0 || height > (${r[l]} - 1) || width < 0 || (width > ${r[d]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[a]} - 1));
      height = max(0, min(height, ${r[l]} - 1));
      width = max(0, min(width, ${r[d]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${h} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${h} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${h} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${h} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${h} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${h} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${h} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${h} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${h} = abs(depth - ${h}(depth1));
      var dx2: ${h} = abs(${h}(depth2) - depth);
      var dy1: ${h} = abs(height - ${h}(height1));
      var dy2: ${h} = abs(${h}(height2) - height);
      var dz1: ${h} = abs(width - ${h}(width1));
      var dz2: ${h} = abs(${h}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Fl=(e,t,r,i,n,s)=>{let a=e.dims,l=zl(s,t.axes,a.length),d=Bl(a,i,n,t.axes),p=i.slice();i.length===0&&(p=a.map((S,C)=>S===0?1:d[C]/S),t.keepAspectRatioPolicy!=="stretch"&&(d=Ol(a,p,t)));let h=ee("output",e.dataType,d.length),g=L("input",e.dataType,a.length),u=U.size(d),w=a.length===d.length&&a.every((S,C)=>S===d[C]),_=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,E=g.type.value,I=S=>`
      ${w?"":`
      ${Cl(t.coordinateTransformMode,E)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Pl(g,a)};
              ${Al(t.nearestMode,r,E)};
              ${Ml(g,h,a,d,p.length,l.length,_)};
              `;case"linear":return`
              ${Rl(h,a,d,p.length,l.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${Dl(g,h,a,_,b)}`;if(a.length===3||a.length===5)return`${Nl(g,h,a,_,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${Ul(g,h,a,d,p,l,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${S.registerUniform("output_size","u32").registerUniform("scales","f32",p.length).registerUniform("roi","f32",l.length).declareVariables(g,h)}
      ${S.mainStart()}
        ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${w?"output[global_idx] = input[global_idx];":`
        let output_indices = ${h.offsetToIndices("global_idx")};
        var input_indices: ${g.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${g.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${p.length>0?p:""}|${n.length>0?n:""}|${l.length>0?l:""}|${w}|${a}`,inputDependencies:["rank"]},getShaderSource:I,getRunData:()=>({outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:[{type:12,data:u},{type:1,data:p},{type:1,data:l},...Q(a,d)]})}},Wl=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},fc=(e,t)=>{let r=[],i=[],n=[],s=Wl(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Tl(e.inputs,t,s,r,i,n),e.compute(Fl(e.inputs[0],t,s,r,i,n),{inputs:[0]})},mc=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,n=e.cubicCoeffA,s=e.excludeOutside!==0,a=e.extrapolationValue,l=e.keepAspectRatioPolicy,d=e.mode,p=e.nearestMode===""?"simple":e.nearestMode;return Ie({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:n,excludeOutside:s,extrapolationValue:a,keepAspectRatioPolicy:l,mode:d,nearestMode:p})}}),Ll,ql,gc,kg=V(()=>{oe(),pe(),Ne(),he(),Ll=(e,t)=>{let[r,i,n,s]=e,{numHeads:a,rotaryEmbeddingDim:l}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!U.areEqual(i.dims,[])&&!U.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!U.areEqual(n.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(l>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let d=r.dims[0],p=r.dims[r.dims.length-2],h=n.dims[0],g=U.sizeFromDimension(r.dims,1)/p,u=l===0?n.dims[1]*2:g/a;if(l>u)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(d!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(p!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(u/2!==n.dims[1]&&l/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`);if(p>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},ql=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:n,scale:s}=t,a=e[0].dims[0],l=U.sizeFromDimension(e[0].dims,1),d=e[0].dims[e[0].dims.length-2],p=l/d,h=e[2].dims[1],g=n===0?h*2:p/i,u=new Array(a,d,p/g,g-h),w=U.computeStrides(u),_=[{type:1,data:s},{type:12,data:u},{type:12,data:w},...e[0].dims.length===3?new Array({type:12,data:[l,p,g,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[l,g,d*g,1]}):[],...Q(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=E=>{let I=L("input",e[0].dataType,e[0].dims.length),S=L("position_ids",e[1].dataType,e[1].dims.length),C=L("cos_cache",e[2].dataType,e[2].dims.length),T=L("sin_cache",e[3].dataType,e[3].dims.length),A=ee("output",e[0].dataType,e[0].dims.length);return E.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:u.length},{name:"global_strides",type:"u32",length:w.length},{name:"input_output_strides",type:"u32",length:w.length}]),`
        ${E.declareVariables(I,S,C,T,A)}

        ${E.mainStart(pr)}
          let half_rotary_emb_dim = uniforms.${C.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${E.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${S.broadcastedIndicesToOffset("bsnh.xy",ee("",S.type.tensor,2))};
            let position_id =
                u32(${S.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${I.getByOffset("i")} * ${C.get("position_id","bsnh[3]")} -
                ${I.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${A.setByOffset("i","re")}
            let im = ${I.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} +
                ${I.getByOffset("j")} * ${C.get("position_id","bsnh[3]")};
            ${A.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${A.setByOffset("k",I.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ie({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(U.size(u)/pr)},programUniforms:_})}},gc=(e,t)=>{Ll(e.inputs,t),e.compute(ql(e.inputs,t))}}),Vl,jl,yc,Tg=V(()=>{oe(),pe(),he(),Vl=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},jl=(e,t,r,i)=>{let n=t.simplified,s=e[0].dims,a=U.size(s),l=s,d=a,p=s.slice(-1)[0],h=i?s.slice(0,-1).concat(1):[],g=!n&&e.length>3,u=e.length>4,w=i&&r>1,_=i&&r>2,b=r>3,E=64,I=Ue(p),S=[{type:12,data:d},{type:12,data:I},{type:12,data:p},{type:1,data:t.epsilon}],C=A=>{let P=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],O=[L("x",e[0].dataType,e[0].dims,I),L("skip",e[1].dataType,e[1].dims,I),L("gamma",e[2].dataType,e[2].dims,I)];g&&O.push(L("beta",e[3].dataType,e[3].dims,I)),u&&O.push(L("bias",e[4].dataType,e[4].dims,I)),O.push(ee("output",e[0].dataType,l,I)),w&&O.push(ee("mean_output",1,h)),_&&O.push(ee("inv_std_output",1,h)),b&&O.push(ee("input_skip_bias_sum",e[0].dataType,l,I));let W=We(e[0].dataType),H=We(1,I);return`

      ${A.registerUniforms(P).declareVariables(...O)}
      var<workgroup> sum_shared : array<${H}, ${E}>;
      var<workgroup> sum_squared_shared : array<${H}, ${E}>;

      ${A.mainStart([E,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${E};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${E};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${E-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${u?"bias[offset1d + i]":W+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${lr(W,I,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${E};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Ft("sum",I)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Ft("square_sum",I)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${w?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${W}(mean)`}) *
            ${W}(inv_std_dev) * gamma[offset1d + i]
            ${g?"+ beta[offset1d + i]":""};
        }
      }`},T=[{dims:l,dataType:e[0].dataType}];return r>1&&T.push({dims:h,dataType:1}),r>2&&T.push({dims:h,dataType:1}),r>3&&T.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${I};${w};${_};${b}`,inputDependencies:e.map((A,P)=>"type")},getShaderSource:C,getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(d/p)},programUniforms:S})}},yc=(e,t)=>{Vl(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(jl(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Gl,xr,Hl,Pn,Kl,Yl,wc,$c,Cg=V(()=>{oe(),pe(),Ne(),he(),Gl=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},xr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Hl=(e,t)=>{if(e.length>1){let r=xr(e,1),i=xr(e,2),n=xr(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),Ie({starts:r,ends:i,axes:n})}else return t},Pn=(e,t,r,i,n)=>{let s=e;return e<0&&(s+=r[i[t]]),n[t]<0?Math.max(0,Math.min(s,r[i[t]]-1)):Math.max(0,Math.min(s,r[i[t]]))},Kl=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${J("uniforms.input_shape","i",r.length)};
            let steps_i = ${J("uniforms.steps","i",r.length)};
            let signs_i = ${J("uniforms.signs","i",r.length)};
            let starts_i = ${J("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Yl=(e,t)=>{let r=e[0].dims,i=U.size(r),n=t.axes.length>0?U.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=xr(e,4);s.forEach(I=>I!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(n.length).fill(1));let a=t.starts.map((I,S)=>Pn(I,S,r,n,s)),l=t.ends.map((I,S)=>Pn(I,S,r,n,s));if(n.length!==a.length||n.length!==l.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let I=0;I<r.length;++I)n.includes(I)||(a.splice(I,0,0),l.splice(I,0,r[I]),s.splice(I,0,1));let d=s.map(I=>Math.sign(I));s.forEach((I,S,C)=>{if(I<0){let T=(l[S]-a[S])/I,A=a[S],P=A+T*s[S];a[S]=P,l[S]=A,C[S]=-I}});let p=r.slice(0);n.forEach((I,S)=>{p[I]=Math.ceil((l[I]-a[I])/s[I])});let h={dims:p,dataType:e[0].dataType},g=ee("output",e[0].dataType,p.length),u=L("input",e[0].dataType,e[0].dims.length),w=U.size(p),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:d.length},{name:"steps",type:"u32",length:s.length}],b=[{type:12,data:w},{type:12,data:a},{type:6,data:d},{type:12,data:s},...Q(e[0].dims,p)],E=I=>`
      ${I.registerUniforms(_).declareVariables(u,g)}
        ${Kl(u,g,r)}
        ${I.mainStart()}
          ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${g.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${g.setByOffset("global_idx",u.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${d.length}_${a.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:E,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:b})}},wc=(e,t)=>{Gl(e.inputs,t);let r=Hl(e.inputs,t);e.compute(Yl(e.inputs,r),{inputs:[0]})},$c=e=>{let t=e.starts,r=e.ends,i=e.axes;return Ie({starts:t,ends:r,axes:i})}}),Zl,Xl,_c,bc,Ag=V(()=>{oe(),pe(),Ne(),Vt(),he(),Zl=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Xl=(e,t)=>{let r=e.inputs[0],i=r.dims,n=U.size(i),s=64,a=i.length,l=U.normalizeAxis(t.axis,a),d=l<i.length-1,p,h=[];d?(h=Array.from({length:a},(O,W)=>W),h[l]=a-1,h[a-1]=l,p=e.compute(it(r,h),{inputs:[r],outputs:[-1]})[0]):p=r;let g=p.dims,u=g[a-1],w=n/u,_=Ue(u),b=u/_,E=(O,W)=>W===4?`max(max(${O}.x, ${O}.y), max(${O}.z, ${O}.w))`:W===2?`max(${O}.x, ${O}.y)`:W===3?`max(max(${O}.x, ${O}.y), ${O}.z)`:O,I=L("x",p.dataType,p.dims,_),S=ee("result",p.dataType,p.dims,_),C=I.type.value,T=We(p.dataType)==="f32"?`var threadMax = ${C}(-3.402823e+38f);`:`var threadMax = ${C}(-65504.0h);`,A=O=>`
      var<workgroup> rowMaxShared : ${C};
      var<workgroup> rowSumShared : ${C};
      var<workgroup> threadShared : array<${C}, ${s}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${C} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${C}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${O.registerUniform("packedCols","i32").declareVariables(I,S)}
      ${O.mainStart()}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${s};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${T}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${C}(${E("threadShared[0]",_)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${C}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${C}(${Ft("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,P=e.compute({name:"Softmax",shaderCache:{hint:`${_}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:g,dataType:p.dataType}],dispatchGroup:{x:w},programUniforms:[{type:6,data:b}]}),getShaderSource:A},{inputs:[p],outputs:[d?-1:0]})[0];d&&e.compute(it(P,h),{inputs:[P]})},_c=(e,t)=>{Zl(e.inputs),Xl(e,t)},bc=e=>Ie({axis:e.axis})}),Ql,Jl,ed,td,rd,vc,xc,zg=V(()=>{oe(),pe(),Ne(),he(),Ql=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Jl=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),i=r.length),Ie({numOutputs:i,axis:t.axis,splitSizes:r})},ed=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${J("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,td=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let n=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(n):i===0?r.push(`if (output_number == ${i}u) { ${n} }`):i===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${i}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},rd=(e,t)=>{let r=e[0].dims,i=U.size(r),n=e[0].dataType,s=U.normalizeAxis(t.axis,r.length),a=new Array(t.numOutputs),l=L("input",n,r.length),d=new Array(t.numOutputs),p=[],h=[],g=0,u=[{type:12,data:i}];for(let _=0;_<t.numOutputs;_++){g+=t.splitSizes[_],d[_]=g;let b=r.slice();b[s]=t.splitSizes[_],h.push(b),a[_]=ee(`output${_}`,n,b.length),p.push({dims:h[_],dataType:e[0].dataType})}u.push({type:12,data:d},...Q(r,...h));let w=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",d.length).declareVariables(l,...a)}
  ${ed(d.length)}
  ${td(a)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${l.offsetToIndices("global_idx")};
    var index = ${l.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${J("uniforms.size_in_split_axis","output_number - 1u",d.length)};
      ${l.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:p,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:u})}},vc=(e,t)=>{Ql(e.inputs);let r=e.inputs.length===1?t:Jl(e.inputs,t);e.compute(rd(e.inputs,r),{inputs:[0]})},xc=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return Ie({axis:t,numOutputs:i,splitSizes:r})}}),id,nd,Sc,Bg=V(()=>{oe(),pe(),he(),id=(e,t,r,i,n)=>{let s=ee("output_data",n,r.length,4),a=L("a_data",t[1].dataType,t[1].dims.length,4),l=L("b_data",t[2].dataType,t[2].dims.length,4),d=L("c_data",t[0].dataType,t[0].dims.length,4),p,h=(g,u,w)=>`select(${u}, ${g}, ${w})`;if(!i)p=s.setByOffset("global_idx",h(a.getByOffset("global_idx"),l.getByOffset("global_idx"),d.getByOffset("global_idx")));else{let g=(u,w,_="")=>{let b=`a_data[index_a${w}][component_a${w}]`,E=`b_data[index_b${w}][component_b${w}]`,I=`bool(c_data[index_c${w}] & (0xffu << (component_c${w} * 8)))`;return`
            let output_indices${w} = ${s.offsetToIndices(`global_idx * 4u + ${w}u`)};
            let offset_a${w} = ${a.broadcastedIndicesToOffset(`output_indices${w}`,s)};
            let offset_b${w} = ${l.broadcastedIndicesToOffset(`output_indices${w}`,s)};
            let offset_c${w} = ${d.broadcastedIndicesToOffset(`output_indices${w}`,s)};
            let index_a${w} = offset_a${w} / 4u;
            let index_b${w} = offset_b${w} / 4u;
            let index_c${w} = offset_c${w} / 4u;
            let component_a${w} = offset_a${w} % 4u;
            let component_b${w} = offset_b${w} % 4u;
            let component_c${w} = offset_c${w} % 4u;
            ${u}[${w}] = ${_}(${h(b,E,I)});
          `};n===9?p=`
            var data = vec4<u32>(0);
            ${g("data",0,"u32")}
            ${g("data",1,"u32")}
            ${g("data",2,"u32")}
            ${g("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:p=`
            ${g("output_data[global_idx]",0)}
            ${g("output_data[global_idx]",1)}
            ${g("output_data[global_idx]",2)}
            ${g("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(d,a,l,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${p}
      }`},nd=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,n=e[1].dataType,s=!(U.areEqual(t,r)&&U.areEqual(r,i)),a=t,l=U.size(t);if(s){let p=dr.calcShape(dr.calcShape(t,r,!1),i,!1);if(!p)throw new Error("Can't perform where op on the given tensors");a=p,l=U.size(a)}let d=Math.ceil(l/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:p=>id(p,e,a,s,n),getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:Math.ceil(l/64/4)},programUniforms:[{type:12,data:d},...Q(i,t,r,a)]})}},Sc=e=>{e.compute(nd(e.inputs))}}),Ec,Og=V(()=>{Zm(),xa(),Xm(),Qm(),Jm(),eg(),tg(),ag(),ug(),lg(),dg(),pg(),hg(),cg(),fg(),mg(),gg(),yg(),wg(),$g(),_g(),Eh(),bg(),Hh(),vg(),xg(),Sg(),Eg(),va(),Ig(),kg(),Tg(),Cg(),Ag(),zg(),Yh(),Vt(),Sa(),Bg(),Ec=new Map([["Abs",[Sp]],["Acos",[Ep]],["Acosh",[Ip]],["Add",[sh]],["ArgMax",[_p,Kn]],["ArgMin",[$p,Kn]],["Asin",[kp]],["Asinh",[Tp]],["Atan",[Cp]],["Atanh",[Ap]],["Attention",[bp]],["AveragePool",[nc,ic]],["BatchNormalization",[vp]],["BiasAdd",[xp]],["BiasSplitGelu",[ah]],["Cast",[Bp,zp]],["Ceil",[Rp]],["Clip",[Op]],["Concat",[gh,yh]],["Conv",[Jn,Qn]],["ConvTranspose",[Th,kh]],["Cos",[Mp]],["Cosh",[Pp]],["CumSum",[Ch,Ah]],["DepthToSpace",[zh,Bh]],["DequantizeLinear",[pc,hc]],["Div",[oh]],["Einsum",[Oh,Rh]],["Elu",[Dp,Ar]],["Equal",[uh]],["Erf",[Up]],["Exp",[Np]],["Expand",[Mh]],["FastGelu",[Ph]],["Floor",[Fp]],["FusedConv",[Jn,Qn]],["Gather",[Uh,Dh]],["GatherElements",[Lh,Wh]],["GatherBlockQuantized",[Nh,Fh]],["Gelu",[Wp]],["Gemm",[Vh,qh]],["GlobalAveragePool",[sc,ac]],["GlobalMaxPool",[dc,lc]],["Greater",[hh]],["GreaterOrEqual",[fh]],["GroupQueryAttention",[Xh,Zh]],["HardSigmoid",[Yp,Kp]],["InstanceNormalization",[Qh]],["LayerNormalization",[Jh]],["LeakyRelu",[Lp,Ar]],["Less",[ch]],["LessOrEqual",[mh]],["Log",[ih]],["MatMul",[Sh]],["MatMulNBits",[ec,tc]],["MaxPool",[oc,uc]],["Mul",[lh]],["MultiHeadAttention",[Gh,jh]],["Neg",[Vp]],["Not",[qp]],["Pad",[rc]],["Pow",[dh]],["QuickGelu",[nh,Ar]],["Range",[cc]],["Reciprocal",[jp]],["ReduceMin",[fp]],["ReduceMean",[lp]],["ReduceMax",[cp]],["ReduceSum",[gp]],["ReduceProd",[mp]],["ReduceL1",[dp]],["ReduceL2",[pp]],["ReduceLogSum",[wp]],["ReduceLogSumExp",[hp]],["ReduceSumSquare",[yp]],["Relu",[Gp]],["Resize",[fc,mc]],["RotaryEmbedding",[gc]],["Sigmoid",[Hp]],["Sin",[Zp]],["Sinh",[Xp]],["Slice",[wc,$c]],["SkipLayerNormalization",[yc]],["Split",[vc,xc]],["Sqrt",[Qp]],["Softmax",[_c,bc]],["Sub",[ph]],["Tan",[Jp]],["Tanh",[eh]],["ThresholdedRelu",[rh,Ar]],["Tile",[Kh]],["Transpose",[Xd,Qd]],["Where",[Sc]]])}),Ic,Rg=V(()=>{vt(),At(),he(),Ic=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,n){Tt(e.programInfo.name);let s=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let l=[];for(let p of t)l.push({binding:l.length,resource:{buffer:p.buffer}});for(let p of r)l.push({binding:l.length,resource:{buffer:p.buffer}});n&&l.push({binding:l.length,resource:n});let d=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:l,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let p={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:d,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(p)}a.setPipeline(e.computePipeline),a.setBindGroup(0,d),a.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),$t(e.programInfo.name)}dispose(){}build(e,t){Tt(e.name);let r=this.backend.device,i=[];r.features.has("shader-f16")&&i.push("enable f16;");let n=Zd(t,this.backend.device.limits),s=e.getShaderSource(n),a=`${i.join(`
`)}
${n.additionalImplementations}
${s}`,l=r.createShaderModule({code:a,label:e.name});Ee("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let d=r.createComputePipeline({compute:{module:l,entryPoint:"main"},layout:"auto",label:e.name});return $t(e.name),{programInfo:e,computePipeline:d,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&i<=n)return[t,r,i];let s=t*r*i,a=Math.ceil(Math.sqrt(s));if(a>n){if(a=Math.ceil(Math.cbrt(s)),a>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),ad,sd,od,kc,Mg=V(()=>{vt(),oe(),At(),jd(),Km(),Og(),Rg(),ad=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let n=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let s=e[i].dims.length;r.push(`${n};${s}`);break}case"dims":{let s=e[i].dims.join(",");r.push(`${n};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},sd=(e,t,r)=>{var n,s;let i=e.name;return(n=e.shaderCache)!=null&&n.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${ad(t,((s=e.shaderCache)==null?void 0:s.inputDependencies)??new Array(t.length).fill("dims"))}`,i},od=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},kc=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r};t.features.has("chromium-experimental-timestamp-query-inside-passes")?r.push("chromium-experimental-timestamp-query-inside-passes"):t.features.has("timestamp-query")&&r.push("timestamp-query"),t.features.has("shader-f16")&&r.push("shader-f16"),this.device=await t.requestDevice(i),this.adapterInfo=new od(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Gd(this),this.programManager=new Ic(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,wa(e.logLevel,!!e.debug),this.device.onuncapturederror=n=>{n.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${n.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Tt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var i;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let s=r[n],a=s.kernelId,l=this.kernels.get(a),d=l.kernelType,p=l.kernelName,h=s.programName,g=s.inputTensorViews,u=s.outputTensorViews,w=t[n*2],_=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=w);let b=Number(w-this.queryTimeBase),E=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(E))throw new RangeError("incorrect timestamp range");if((i=this.env.webgpu.profiling)!=null&&i.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:g.map(I=>({dims:I.dims,dataType:Xt(I.dataType)})),outputsMetadata:u.map(I=>({dims:I.dims,dataType:Xt(I.dataType)})),kernelId:a,kernelType:d,kernelName:p,programName:h,startTime:b,endTime:E});else{let I="";g.forEach((C,T)=>{I+=`input[${T}]: [${C.dims}] | ${Xt(C.dataType)}, `});let S="";u.forEach((C,T)=>{S+=`output[${T}]: [${C.dims}] | ${Xt(C.dataType)}, `}),console.log(`[profiling] kernel "${a}|${d}|${p}|${h}" ${I}${S}execution time: ${E-b} ns`)}mi("GPU",`${h}::${w}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),$t()}run(e,t,r,i,n,s){Tt(e.name);let a=[];for(let S=0;S<t.length;++S){let C=t[S].data;if(C===0)continue;let T=this.gpuDataManager.get(C);if(!T)throw new Error(`no GPU data for input: ${C}`);a.push(T)}let{outputs:l,dispatchGroup:d,programUniforms:p}=e.getRunData(t),h=r.length===0?l.map((S,C)=>C):r;if(h.length!==l.length)throw new Error(`Output size ${h.length} must be equal to ${l.length}.`);let g=[],u=[];for(let S=0;S<l.length;++S){if(!Number.isInteger(h[S])||h[S]<-3||h[S]>=s)throw new Error(`Invalid output index: ${h[S]}`);if(h[S]===-3)continue;let C=h[S]===-1,T=h[S]===-2,A=C||T?n(l[S].dataType,l[S].dims):i(h[S],l[S].dataType,l[S].dims);if(g.push(A),A.data===0)continue;let P=this.gpuDataManager.get(A.data);if(!P)throw new Error(`no GPU data for output: ${A.data}`);if(C&&this.temporaryData.push(P),T){let O=this.kernelPersistentData.get(this.currentKernelId);O||(O=[],this.kernelPersistentData.set(this.currentKernelId,O)),O.push(P)}u.push(P)}if(a.length!==t.length||u.length!==g.length){if(u.length===0)return $t(e.name),g;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let w;if(p){let S=0,C=[];p.forEach(O=>{let W=typeof O.data=="number"?[O.data]:O.data;if(W.length===0)return;let H=O.type===10?2:4,Z,ue;O.type===10?(ue=W.length>4?16:W.length>2?8:W.length*H,Z=W.length>4?16:H*W.length):(ue=W.length<=2?W.length*H:16,Z=16),S=Math.ceil(S/ue)*ue,C.push(S);let le=O.type===10?8:4;S+=W.length>4?Math.ceil(W.length/le)*Z:W.length*H});let T=16;S=Math.ceil(S/T)*T;let A=new ArrayBuffer(S);p.forEach((O,W)=>{let H=C[W],Z=typeof O.data=="number"?[O.data]:O.data;if(O.type===6)new Int32Array(A,H,Z.length).set(Z);else if(O.type===12)new Uint32Array(A,H,Z.length).set(Z);else if(O.type===10)new Uint16Array(A,H,Z.length).set(Z);else if(O.type===1)new Float32Array(A,H,Z.length).set(Z);else throw new Error(`Unsupported uniform type: ${Xt(O.type)}`)});let P=this.gpuDataManager.create(S,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(P.buffer,0,A,0,S),this.gpuDataManager.release(P.id),w={offset:0,size:S,buffer:P.buffer}}let _=this.programManager.normalizeDispatchGroupSize(d),b=_[1]===1&&_[2]===1,E=sd(e,t,b),I=this.programManager.getArtifact(E);if(I||(I=this.programManager.build(e,_),this.programManager.setArtifact(E,I),Ee("info",()=>`[artifact] key: ${E}, programName: ${e.name}`)),p&&I.uniformVariablesInfo){if(p.length!==I.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${I.uniformVariablesInfo.length}, got ${p.length} in program "${I.programInfo.name}".`);for(let S=0;S<p.length;S++){let C=p[S],T=C.type,A=typeof C.data=="number"?1:C.data.length,[P,O]=I.uniformVariablesInfo[S];if(T!==P||A!==O)throw new Error(`Uniform variable ${S} mismatch: expect type ${P} with size ${O}, got type ${T} with size ${A} in program "${I.programInfo.name}".`)}}if(Ee("info",()=>`[ProgramManager] run "${e.name}" (key=${E}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let S={kernelId:this.currentKernelId,programName:I.programInfo.name,inputTensorViews:t,outputTensorViews:g};this.pendingKernels.push(S),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(S)}return this.programManager.run(I,a,u,_,w),$t(e.name),g}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let n=Ec.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:i,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let n=i.kernelType,s=i.kernelName,a=i.kernelEntry,l=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,l[0]&&(l[1]=l[0](l[1]),l[0]=void 0),Ee("info",()=>`[WebGPU] Start to run kernel "[${n}] ${s}"...`);let d=this.env.debug;this.temporaryData=[];try{return d&&this.device.pushErrorScope("validation"),a(t,l[1]),0}catch(p){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${s}" failed. ${p}`)),1}finally{d&&r.push(this.device.popErrorScope().then(p=>p?`GPU validation error for kernel "[${n}] ${s}": ${p.message}`:null));for(let p of this.temporaryData)this.gpuDataManager.release(p.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let s=n.get(t),a=this.gpuDataManager.registerExternalBuffer(r,i,s);return n.set(t,[a,r]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await jn(this,e,t);return $a(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ee("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ee("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ee("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let n=this.getComputePassEncoder(),s=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(s.computePipeline),n.setBindGroup(0,s.bindGroup),n.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),ud,Dn,Un,ld,Tc,Pg=V(()=>{At(),ud=1,Dn=()=>ud++,Un=class{constructor(e,t){this.mlContext=e,this.tensorEntry=t,this.tensorCache=t?[t]:[]}get tensor(){var e;return(e=this.tensorEntry)==null?void 0:e[0]}get context(){if(!this.mlContext)throw new Error("MLContext has not been set.");return this.mlContext}set context(e){if(this.mlContext&&this.mlContext!==e)throw new Error("MLTensor in use in a different MLContext.");this.mlContext=e}destroy(){for(let[e]of this.tensorCache)e.destroy();this.tensorCache=[],this.tensorEntry=void 0}trySelectTensor(e,t){for(let[r,i,n]of this.tensorCache)if(t===r){if(this.context!==e)throw new Error("MLTensor cannot be registered with a different MLContext.");return this.tensorEntry=[r,i,n],!0}return!1}async ensureTensor(e,t,r){var s;if(this.tensorEntry){let[a,l,d]=this.tensorEntry;if(l===e&&d.every((p,h)=>p===t[h]))return a}for(let[a,l,d]of this.tensorCache)if(l===e&&d.every((p,h)=>p===t[h])){if(r&&this.tensorEntry){Ee("verbose",()=>`[WebNN] Slowdown may occur, having to copy existing tensor {dataType: ${e}, shape: ${t}}`);let p=await this.context.readTensor(this.tensorEntry[0]);this.context.writeTensor(a,p)}return this.tensorEntry=[a,l,d],a}Ee("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${e}, shape: ${t}}`);let i=MLTensorUsage.READ|MLTensorUsage.WRITE,n=await this.context.createTensor({dataType:e,shape:t,dimensions:t,usage:i});return this.tensorEntry=[n,e,t],this.tensorCache.push(this.tensorEntry),this.activeUpload&&((s=this.mlContext)==null||s.writeTensor(n,this.activeUpload),this.activeUpload=void 0),n}upload(e){var t;if(!this.tensorEntry){this.activeUpload=new Uint8Array(e);return}(t=this.mlContext)==null||t.writeTensor(this.tensorEntry[0],e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.tensorEntry)throw new Error("Tensor has not been created.");return e?this.context.readTensor(this.tensorEntry[0],e):this.context.readTensor(this.tensorEntry[0])}},ld=class{constructor(e){this.backend=e,this.tensorsById=new Map,this.tensorIdsByContext=new Map}reserveTensorId(){let e=Dn();return this.tensorsById.set(e,new Un),e}releaseTensorId(e){let t=this.tensorsById.get(e);if(t){t.destroy(),this.tensorsById.delete(e);for(let[r,i]of this.tensorIdsByContext)if(i.has(e)){i.delete(e),i.size===0&&this.tensorIdsByContext.delete(r);break}}}async ensureTensor(e,t,r,i){var s;Ee("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${e}, dataType: ${t}, shape: ${r}, copyOld: ${i}}`);let n=this.tensorsById.get(e);if(!n)throw new Error("Tensor not found.");return n.context=this.backend.currentContext,this.tensorIdsByContext.has(this.backend.currentContext)||this.tensorIdsByContext.set(this.backend.currentContext,new Set),(s=this.tensorIdsByContext.get(this.backend.currentContext))==null||s.add(e),n.ensureTensor(t,r,i)}upload(e,t){this.tensorsById.get(e).upload(t)}async download(e,t){return Ee("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`),this.tensorsById.get(e).download(t)}releaseTensorsForContext(e){let t=this.tensorIdsByContext.get(e);if(t){for(let r of t)this.tensorsById.get(r).destroy(),this.tensorsById.delete(r);this.tensorIdsByContext.delete(e)}}registerTensor(e,t,r,i){for(let[a,l]of this.tensorsById)if(l.trySelectTensor(e,t))return a;let n=Dn();this.tensorsById.set(n,new Un(e,[t,r,i]));let s=this.tensorIdsByContext.get(e);return s||(s=new Set,this.tensorIdsByContext.set(e,s)),s.add(n),n}},Tc=(...e)=>new ld(...e)}),Nn,Cc,Dg=V(()=>{oe(),Jt(),jd(),Pg(),At(),Nn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Cc=class{constructor(e){this.tensorManager=Tc(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,wa(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){this.activeSessionId=e}get currentContext(){let e=this.getMLContext(this.currentSessionId);if(!e)throw new Error(`No MLContext found for session ${this.currentSessionId}`);return e}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e)}onReleaseSession(e){let t=this.mlContextBySessionId.get(e);if(!t)return;this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);r.delete(e),r.size===0&&(this.sessionIdsByMLContext.delete(t),this.tensorManager.releaseTensorsForContext(t))}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ee("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i){let n=Nn.get(t);if(!n)throw new Error(`Unsupported ONNX data type: ${t}`);return this.tensorManager.ensureTensor(e,n,r,i)}uploadTensor(e,t){if(!Le().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ee("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return $a(r,t)}}registerMLTensor(e,t,r){let i=Nn.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.registerTensor(this.currentContext,e,i,r);return Ee("verbose",()=>`[WebNN] registerMLTensor {tensor: ${e}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${n}}`),n}flush(){}}}),Ac={};Pr(Ac,{init:()=>zc});var li,dd,zc,Ug=V(()=>{oe(),Mg(),At(),pe(),Dg(),li=class Bc{constructor(t,r,i,n){this.module=t,this.dataType=r,this.data=i,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=U.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=U.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=U.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=U.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(U.size(t)!==U.size(this.dims))throw new Error("Invalid new shape");return new Bc(this.module,this.dataType,this.data,t)}},dd=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.HEAPU32,n=r>>>2;this.opKernelContext=i[n++];let s=i[n++];this.outputCount=i[n++],this.customDataOffset=i[n++],this.customDataSize=i[n++];let a=[];for(let l=0;l<s;l++){let d=i[n++],p=i[n++],h=i[n++],g=[];for(let u=0;u<h;u++)g.push(i[n++]);a.push(new li(e,d,p,g))}this.inputs=a}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}getMaxComputeWorkgroupSizes(){return[this.backend.device.limits.maxComputeWorkgroupSizeX,this.backend.device.limits.maxComputeWorkgroupSizeY,this.backend.device.limits.maxComputeWorkgroupSizeZ]}getMaxComputeWorkgroupStoragesize(){return this.backend.device.limits.maxComputeWorkgroupStorageSize}compute(e,t){var a;let r=((a=t==null?void 0:t.inputs)==null?void 0:a.map(l=>typeof l=="number"?this.inputs[l]:l))??this.inputs,i=(t==null?void 0:t.outputs)??[],n=(l,d,p)=>new li(this.module,d,this.output(l,p),p),s=(l,d)=>{let p=ur(l,d);if(!p)throw new Error(`Unsupported data type: ${l}`);let h=p>0?this.backend.gpuDataManager.create(p).id:0;return new li(this.module,l,h,d)};return this.backend.run(e,r,i,n,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.stackAlloc((1+t.length)*4),n=i>>2;this.module.HEAPU32[n++]=t.length;for(let s=0;s<t.length;s++)this.module.HEAPU32[n++]=t[s];return this.module._JsepOutput(this.opKernelContext,e,i)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},zc=async(e,t,r,i)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=new kc;await s.initialize(r,i),n("webgpu",[s,a=>s.alloc(a),a=>s.free(a),(a,l,d,p=!1)=>{if(p)Ee("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${a}, dst=${l}, size=${d}`),s.memcpy(a,l);else{Ee("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${a}, gpuDataId=${l}, size=${d}`);let h=t.HEAPU8.subarray(a>>>0,(a>>>0)+d);s.upload(l,h)}},async(a,l,d)=>{Ee("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${a}, dataOffset=${l}, size=${d}`),await s.download(a,()=>t.HEAPU8.subarray(l>>>0,(l>>>0)+d))},(a,l,d)=>s.createKernel(a,l,d,t.UTF8ToString(t._JsepGetNodeName(l))),a=>s.releaseKernel(a),(a,l,d,p)=>{Ee("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${a}, contextDataOffset=${l}`);let h=new dd(t,s,l);return s.computeKernel(a,h,p)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let s=new Cc(r);n("webnn",[s,()=>s.reserveTensorId(),a=>s.releaseTensorId(a),async(a,l,d,p)=>s.ensureTensor(a,l,d,p),(a,l)=>{s.uploadTensor(a,l)},async(a,l)=>s.downloadTensor(a,l)])}}}),pd,Ca,Aa,Ut,hd,vi,za,Ba,Fn,Oa,Ra,Ma,Oc=V(()=>{Gm(),Hm(),oe(),Jt(),ca(),Vd(),pd=(e,t)=>{Le()._OrtInit(e,t)!==0&&Me("Can't initialize onnxruntime.")},Ca=async e=>{pd(e.wasm.numThreads,yi(e.logLevel))},Aa=async(e,t)=>{{let r=(Ug(),fi(Ac)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let i=e.webgpu.adapter;if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:s}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",Le(),e,i)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",Le(),e)}}},Ut=new Map,hd=e=>{let t=Le(),r=t.stackSave();try{let i=t.stackAlloc(8);return t._OrtGetInputOutputCount(e,i,i+4)!==0&&Me("Can't get session input/output count."),[t.HEAP32[i/4],t.HEAP32[i/4+1]]}finally{t.stackRestore(r)}},vi=e=>{let t=Le(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},za=async(e,t)=>{var g,u;let r,i,n=Le();Array.isArray(e)?[r,i]=e:e.buffer===n.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=vi(e);let s=0,a=0,l=0,d=[],p=[],h=[];try{if([a,d]=qd(t),(t==null?void 0:t.externalData)&&n.mountExternalData){let T=[];for(let A of t.externalData){let P=typeof A=="string"?A:A.path;T.push(ya(typeof A=="string"?A:A.data).then(O=>{n.mountExternalData(P,O)}))}await Promise.all(T)}for(let T of(t==null?void 0:t.executionProviders)??[])if((typeof T=="string"?T:T.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,n.currentContext)throw new Error("WebNN execution provider is already set.");if(typeof T!="string"){let A=T,P=A==null?void 0:A.context,O=A==null?void 0:A.gpuDevice,W=A==null?void 0:A.deviceType,H=A==null?void 0:A.numThreads,Z=A==null?void 0:A.powerPreference;P?n.currentContext=P:O?n.currentContext=await navigator.ml.createContext(O):n.currentContext=await navigator.ml.createContext({deviceType:W,numThreads:H,powerPreference:Z})}else n.currentContext=await navigator.ml.createContext();break}s=await n._OrtCreateSession(r,i,a),s===0&&Me("Can't create a session."),n.currentContext&&(n.jsepRegisterMLContext(s,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[w,_]=hd(s),b=!!(t!=null&&t.enableGraphCapture),E=[],I=[],S=[];for(let T=0;T<w;T++){let A=n._OrtGetInputName(s,T);A===0&&Me("Can't get an input name."),p.push(A),E.push(n.UTF8ToString(A))}for(let T=0;T<_;T++){let A=n._OrtGetOutputName(s,T);A===0&&Me("Can't get an output name."),h.push(A);let P=n.UTF8ToString(A);I.push(P);{if(b&&(t==null?void 0:t.preferredOutputLocation)===void 0){S.push("gpu-buffer");continue}let O=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((g=t==null?void 0:t.preferredOutputLocation)==null?void 0:g[P])??"cpu";if(O!=="cpu"&&O!=="cpu-pinned"&&O!=="gpu-buffer"&&O!=="ml-tensor")throw new Error(`Not supported preferred output location: ${O}.`);if(b&&O!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${O}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);S.push(O)}}let C=null;return S.some(T=>T==="gpu-buffer"||T==="ml-tensor")&&(l=n._OrtCreateBinding(s),l===0&&Me("Can't create IO binding."),C={handle:l,outputPreferredLocations:S,outputPreferredLocationsEncoded:S.map(T=>Vn(T))}),Ut.set(s,[s,p,h,C,b,!1]),[s,E,I]}catch(w){throw p.forEach(_=>n._OrtFree(_)),h.forEach(_=>n._OrtFree(_)),l!==0&&n._OrtReleaseBinding(l),s!==0&&n._OrtReleaseSession(s),w}finally{n._free(r),a!==0&&n._OrtReleaseSessionOptions(a),d.forEach(w=>n._free(w)),(u=n.unmountExternalData)==null||u.call(n)}},Ba=e=>{var d;let t=Le(),r=Ut.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,n,s,a,l]=r;a&&(l&&t._OrtClearBoundOutputs(a.handle),t._OrtReleaseBinding(a.handle)),(d=t.jsepOnReleaseSession)==null||d.call(t,e),n.forEach(p=>t._OrtFree(p)),s.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(i),Ut.delete(e)},Fn=(e,t,r,i,n,s=!1)=>{if(!e){t.push(0);return}let a=Le(),l=e[0],d=e[1],p=e[3],h,g;if(l==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let _=e[2].gpuBuffer;g=ur(Tr(l),d);let b=a.jsepRegisterBuffer;if(!b)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');h=b(i,n,_,g)}else if(p==="ml-tensor"){let _=e[2].mlTensor;g=ur(Tr(l),d);let b=a.jsepRegisterMLTensor;if(!b)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');h=b(_,Tr(l),d)}else{let _=e[2];if(Array.isArray(_)){g=4*_.length,h=a._malloc(g),r.push(h);let b=h/4;for(let E=0;E<_.length;E++){if(typeof _[E]!="string")throw new TypeError(`tensor data at index ${E} is not a string`);a.HEAPU32[b++]=Ge(_[E],r)}}else g=_.byteLength,h=a._malloc(g),r.push(h),a.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,g),h)}let u=a.stackSave(),w=a.stackAlloc(4*d.length);try{let _=w/4;d.forEach(E=>a.HEAP32[_++]=E);let b=a._OrtCreateTensor(Tr(l),h,g,w,d.length,Vn(p));b===0&&Me(`Can't create tensor for input/output. session=${i}, index=${n}.`),t.push(b)}finally{a.stackRestore(u)}},Oa=async(e,t,r,i,n,s)=>{var Z,ue;let a=Le(),l=Ut.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],p=l[1],h=l[2],g=l[3],u=l[4],w=l[5],_=t.length,b=i.length,E=0,I=[],S=[],C=[],T=[],A=a.stackSave(),P=a.stackAlloc(_*4),O=a.stackAlloc(_*4),W=a.stackAlloc(b*4),H=a.stackAlloc(b*4);try{(Z=a.jsepOnRunStart)==null||Z.call(a,d),[E,I]=Ld(s);for(let X=0;X<_;X++)Fn(r[X],S,T,e,t[X],u);for(let X=0;X<b;X++)Fn(n[X],C,T,e,_+i[X],u);let le=P/4,te=O/4,we=W/4,xe=H/4;for(let X=0;X<_;X++)a.HEAPU32[le++]=S[X],a.HEAPU32[te++]=p[t[X]];for(let X=0;X<b;X++)a.HEAPU32[we++]=C[X],a.HEAPU32[xe++]=h[i[X]];if(g&&!w){let{handle:X,outputPreferredLocations:ie,outputPreferredLocationsEncoded:fe}=g;if(p.length!==_)throw new Error(`input count from feeds (${_}) is expected to be always equal to model's input count (${p.length}).`);for(let D=0;D<_;D++){let j=t[D];await a._OrtBindInput(X,p[j],S[D])!==0&&Me(`Can't bind input[${D}] for session=${e}.`)}for(let D=0;D<b;D++){let j=i[D];(ue=n[D])!=null&&ue[3]?a._OrtBindOutput(X,h[j],C[D],0)!==0&&Me(`Can't bind pre-allocated output[${D}] for session=${e}.`):a._OrtBindOutput(X,h[j],0,fe[j])!==0&&Me(`Can't bind output[${D}] to ${ie[D]} for session=${e}.`)}Ut.set(e,[d,p,h,g,u,!0])}let de;g?de=await a._OrtRunWithBinding(d,g.handle,b,W,E):de=await a._OrtRun(d,O,P,_,H,b,W,E),de!==0&&Me("failed to call OrtRun().");let $e=[];for(let X=0;X<b;X++){let ie=a.HEAPU32[W/4+X];if(ie===C[X]){$e.push(n[X]);continue}let fe=a.stackSave(),D=a.stackAlloc(4*4),j=!1,ne,se=0;try{a._OrtGetTensorData(ie,D,D+4,D+8,D+12)!==0&&Me(`Can't access output tensor data on index ${X}.`);let ge=D/4,Be=a.HEAPU32[ge++];se=a.HEAPU32[ge++];let pt=a.HEAPU32[ge++],Gt=a.HEAPU32[ge++],qe=[];for(let Oe=0;Oe<Gt;Oe++)qe.push(a.HEAPU32[pt/4+Oe]);a._OrtFree(pt);let De=qe.reduce((Oe,Fe)=>Oe*Fe,1);ne=Xt(Be);let Je=g==null?void 0:g.outputPreferredLocations[i[X]];if(ne==="string"){if(Je==="gpu-buffer"||Je==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Oe=[],Fe=se/4;for(let et=0;et<De;et++){let ht=a.HEAPU32[Fe++],ct=et===De-1?void 0:a.HEAPU32[Fe]-ht;Oe.push(a.UTF8ToString(ht,ct))}$e.push([ne,qe,Oe,"cpu"])}else if(Je==="gpu-buffer"&&De>0){let Oe=a.jsepGetBuffer;if(!Oe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Fe=Oe(se),et=ur(Be,De);if(et===void 0||!ma(ne))throw new Error(`Unsupported data type: ${ne}`);j=!0,$e.push([ne,qe,{gpuBuffer:Fe,download:a.jsepCreateDownloader(Fe,et,ne),dispose:()=>{a._OrtReleaseTensor(ie)}},"gpu-buffer"])}else if(Je==="ml-tensor"&&De>0){let Oe=a.jsepEnsureTensor;if(!Oe)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(ur(Be,De)===void 0||!ga(ne))throw new Error(`Unsupported data type: ${ne}`);let Fe=await Oe(se,Be,qe,!1);j=!0,$e.push([ne,qe,{mlTensor:Fe,download:a.jsepCreateMLTensorDownloader(se,ne),dispose:()=>{a.jsepReleaseTensorId(se),a._OrtReleaseTensor(ie)}},"ml-tensor"])}else{let Oe=fa(ne),Fe=new Oe(De);new Uint8Array(Fe.buffer,Fe.byteOffset,Fe.byteLength).set(a.HEAPU8.subarray(se,se+Fe.byteLength)),$e.push([ne,qe,Fe,"cpu"])}}finally{a.stackRestore(fe),ne==="string"&&se&&a._free(se),j||a._OrtReleaseTensor(ie)}}return g&&!u&&(a._OrtClearBoundOutputs(g.handle),Ut.set(e,[d,p,h,g,u,!1])),$e}finally{a.stackRestore(A),S.forEach(le=>a._OrtReleaseTensor(le)),C.forEach(le=>a._OrtReleaseTensor(le)),T.forEach(le=>a._free(le)),E!==0&&a._OrtReleaseRunOptions(E),I.forEach(le=>a._free(le))}},Ra=e=>{let t=Le(),r=Ut.get(e);if(!r)throw new Error("invalid session id");let i=r[0],n=t._OrtEndProfiling(i);n===0&&Me("Can't get an profile file name."),t._OrtFree(n)},Ma=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),Nt,tt,ar,Sr,Er,di,Wn,pi,Kt,Yt,cd,Rc,Mc,Pc,Dc,Uc,Nc,Fc,Wc=V(()=>{vt(),Oc(),Jt(),Ai(),Nt=()=>!!ze.wasm.proxy&&typeof document<"u",ar=!1,Sr=!1,Er=!1,pi=new Map,Kt=(e,t)=>{let r=pi.get(e);r?r.push(t):pi.set(e,[t])},Yt=()=>{if(ar||!Sr||Er||!tt)throw new Error("worker not ready")},cd=e=>{switch(e.data.type){case"init-wasm":ar=!1,e.data.err?(Er=!0,Wn[1](e.data.err)):(Sr=!0,Wn[0]()),di&&(URL.revokeObjectURL(di),di=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=pi.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Rc=async()=>{if(!Sr){if(ar)throw new Error("multiple calls to 'initWasm()' detected.");if(Er)throw new Error("previous call to 'initWasm()' failed.");if(ar=!0,Nt())return new Promise((e,t)=>{tt==null||tt.terminate(),Fd().then(([r,i])=>{try{tt=i,tt.onerror=s=>t(s),tt.onmessage=cd,Wn=[e,t];let n={type:"init-wasm",in:ze};tt.postMessage(n),di=r}catch(n){t(n)}},t)});try{await ha(ze.wasm),await Ca(ze),Sr=!0}catch(e){throw Er=!0,e}finally{ar=!1}}},Mc=async e=>{if(Nt())return Yt(),new Promise((t,r)=>{Kt("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:ze}};tt.postMessage(i)});await Aa(ze,e)},Pc=async e=>Nt()?(Yt(),new Promise((t,r)=>{Kt("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};tt.postMessage(i,[e.buffer])})):vi(e),Dc=async(e,t)=>{if(Nt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Yt(),new Promise((r,i)=>{Kt("create",[r,i]);let n={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),tt.postMessage(n,s)})}else return za(e,t)},Uc=async e=>{if(Nt())return Yt(),new Promise((t,r)=>{Kt("release",[t,r]);let i={type:"release",in:e};tt.postMessage(i)});Ba(e)},Nc=async(e,t,r,i,n,s)=>{if(Nt()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Yt(),new Promise((a,l)=>{Kt("run",[a,l]);let d=r,p={type:"run",in:{sessionId:e,inputIndices:t,inputs:d,outputIndices:i,options:s}};tt.postMessage(p,Ma(d))})}else return Oa(e,t,r,i,n,s)},Fc=async e=>{if(Nt())return Yt(),new Promise((t,r)=>{Kt("end-profiling",[t,r]);let i={type:"end-profiling",in:e};tt.postMessage(i)});Ra(e)}}),Ln,fd,Lc,Ng=V(()=>{vt(),Wc(),oe(),pa(),Vd(),Ln=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},fd=e=>{switch(e[3]){case"cpu":return new Ye(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!ma(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:n}=e[2];return Ye.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:n})}case"ml-tensor":{let t=e[0];if(!ga(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:n}=e[2];return Ye.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},Lc=class{async fetchModelAndCopyToWasmMemory(e){return Pc(await ya(e))}async loadModel(e,t){Tt();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await Dc(r,t),$t()}async dispose(){return Uc(this.sessionId)}async run(e,t,r){Tt();let i=[],n=[];Object.entries(e).forEach(g=>{let u=g[0],w=g[1],_=this.inputNames.indexOf(u);if(_===-1)throw new Error(`invalid input '${u}'`);i.push(w),n.push(_)});let s=[],a=[];Object.entries(t).forEach(g=>{let u=g[0],w=g[1],_=this.outputNames.indexOf(u);if(_===-1)throw new Error(`invalid output '${u}'`);s.push(w),a.push(_)});let l=i.map((g,u)=>Ln(g,()=>`input "${this.inputNames[n[u]]}"`)),d=s.map((g,u)=>g?Ln(g,()=>`output "${this.outputNames[a[u]]}"`):null),p=await Nc(this.sessionId,n,l,a,d,r),h={};for(let g=0;g<p.length;g++)h[this.outputNames[a[g]]]=s[g]??fd(p[g]);return $t(),h}startProfiling(){}endProfiling(){Fc(this.sessionId)}}}),qc={};Pr(qc,{OnnxruntimeWebAssemblyBackend:()=>ia,initializeFlags:()=>ra,wasmBackend:()=>Vc});var ra,ia,Vc,Fg=V(()=>{vt(),Wc(),Ng(),Ai(),ra=()=>{if((typeof ze.wasm.initTimeout!="number"||ze.wasm.initTimeout<0)&&(ze.wasm.initTimeout=0),ze.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof ze.wasm.proxy!="boolean"&&(ze.wasm.proxy=!1),typeof ze.wasm.trace!="boolean"&&(ze.wasm.trace=!1),typeof ze.wasm.numThreads!="number"||!Number.isInteger(ze.wasm.numThreads)||ze.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ze.wasm.numThreads=1;else{let e=typeof navigator>"u"?Im("node:os").cpus().length:navigator.hardwareConcurrency;ze.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},ia=class{async init(e){ra(),await Rc(),await Mc(e)}async createInferenceSessionHandler(e,t){let r=new Lc;return await r.loadModel(e,t),Promise.resolve(r)}},Vc=new ia});vt();vt();vt();var Wg="1.20.0";{let e=(Fg(),fi(qc)).wasmBackend;or("webgpu",e,5),or("webnn",e,5),or("cpu",e,10),or("wasm",e,10)}Object.defineProperty(ze.versions,"web",{value:Wg,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lg=document.querySelector(".buttons > .reset");Lg.onclick=()=>Zc();const Rr=document.querySelector(".buttons > .solve");Rr.onclick=()=>Yg();const qg=document.querySelector(".buttons > .solve-ml");qg.onclick=()=>Xc();const xi=document.querySelector(".gameover"),Vg=document.querySelector(".flagcounter > .counter"),jg=da.create("./test.onnx",{executionProviders:["webgpu"]}),Pe=document.querySelector(".main > .game > canvas"),ke=Pe.getContext("2d",{alpha:!1}),Ct=window.devicePixelRatio||1;ke.scale(Ct,Ct);ke.imageSmoothingEnabled=!1;ke.textRendering="optimizeLegibility";window.debug=!1;window.verbose=!1;const md=parseFloat(getComputedStyle(document.documentElement).fontSize),hr=Math.min(window.screen.width,window.innerWidth,window.innerHeight-4*md-5*md);[Pe.width,Pe.height]=[hr*Ct,hr*Ct];Pe.style.width=hr+"px";Pe.style.height=hr+"px";const Si=Math.min(Pe.clientWidth,Pe.clientHeight)*Ct,G=20,je=Math.floor(Si/G),Ce=Array(G*G).fill(0),Xe=Array(G*G).fill(!1),Qe=Array(G*G).fill(!1),Qt=Array(G*G).fill(0),Gg=G*je,kt=(Si-Gg)/2/Ct;let _t=!1;const Pa=48;let Ei=!0,Oi=!1,Ir=0,qn=0,Ii=-1;ke.font=`${je}px sans-serif`;ke.textBaseline="top";ke.textAlign="center";const Hg={0:"transparent",1:"navy",2:"green",3:"maroon",4:"purple",5:"gold",6:"cyan",7:"olive",8:"grey"};function bt(){ke.fillStyle="#1a1a1a",ke.fillRect(0,0,Si,Si);for(let e=0;e<G;e++)for(let t=0;t<G;t++){const[r,i]=Kg(t,e);if(ke.fillStyle=(e+t)%2===0?"bisque":"burlywood",ke.fillRect(r,i,je,je),Ce[e*G+t]!==-1){ke.fillStyle=Hg[Ce[e*G+t]];const[n,s]=gd(Ce[e*G+t]);ke.fillText(Ce[e*G+t],r+je/2,i+je/2+s)}else ke.fillStyle="maroon",ke.fillRect(r,i,je,je);if(Xe[e*G+t]||(ke.fillStyle=(e+t)%2===0?"#56B740":"#238223",Ii===e*G+t&&(ke.fillStyle=(e+t)%2===0?"#8CCC7A":"#7FC76B"),ke.fillRect(r,i,je,je)),Qe[e*G+t]){ke.fillStyle="red",ke.font=`${je*.8}px sans-serif`;const[n,s]=gd(Ce[e*G+t]);ke.fillText("🚩",r+je/2,i+je/2+s),ke.font=`${je}px sans-serif`}window.debug&&Oi&&(ke.fillStyle="black",ke.textAlign="left",ke.font=`${je*.4}px sans-serif`,Qt[e*G+t]>0&&ke.fillText(Qt[e*G+t],r+2,i+2),ke.font=`${je}px sans-serif`,ke.textAlign="center"),Vg.innerHTML=Pa-Qe.reduce((n,s)=>n+s)}}function Kg(e,t){return[kt+e*je,kt+t*je]}function ki(e){const t=e%G,r=(e-t)/G;return[t,r]}function gd(e){const t=ke.measureText(e),r=t.actualBoundingBoxAscent-t.actualBoundingBoxDescent;return[t.width/2,r/2]}function jc(){for(let e=0;e<Pa;e++){let t=Math.floor(Math.random()*G*G);Ce[t]===-1?e--:Ce[t]=-1}for(let e=0;e<G;e++)for(let t=0;t<G;t++)Ce[e*G+t]!==-1&&(Ce[e*G+t]=Mr(t,e).reduce((r,i)=>r+(Ce[i[1]*G+i[0]]===-1),0))}function Mr(e,t){let r=Array(9),i=0;for(let n=-1;n<=1;n++)for(let s=-1;s<=1;s++)r[i]=[e+s,t+n],i++;return r[4]=[-1,-1],r.filter(n=>n[0]>=0&&n[1]>=0&&n[0]<=G-1&&n[1]<=G-1)}function Da(e,t){const r=(e-(Pe.clientLeft+kt/Ct))/(Pe.clientWidth-kt*2),i=(t-(Pe.clientTop+kt/Ct))/(Pe.clientHeight-kt*2);return 0<r&&r<1&&0<i&&i<1}function Ua(e,t){const r=Math.floor((e-(Pe.clientLeft+kt/Ct))/(Pe.clientWidth-kt*2)*G),i=Math.floor((t-(Pe.clientTop+kt/Ct))/(Pe.clientHeight-kt*2)*G);return(r<0||i<0||r>G-1||i>G-1)&&console.log("POINTER ERROR OUT OF BOUNDS, pos: ",r,i),[r,i]}Pe.onclick=e=>{if(e.preventDefault(),_t&&Yc(),!Da(e.offsetX,e.offsetY))return;const[t,r]=Ua(e.offsetX,e.offsetY);Dr(t,r),bt()};Pe.oncontextmenu=e=>{if(e.preventDefault(),!Da(e.offsetX,e.offsetY))return;const[t,r]=Ua(e.offsetX,e.offsetY);Na(t,r),bt()};Pe.onpointermove=e=>{if(e.pointerType==="mouse"){if(_t)return Ii=0;if(Da(e.offsetX,e.offsetY)){const[t,r]=Ua(e.offsetX,e.offsetY);Ii=r*G+t,requestAnimationFrame(bt)}else Gc()}};Pe.onpointerleave=Gc;function Dr(e,t){if(_t||Qe[t*G+e]===!0)return;if(Ei){for(let n=0;n<1e3&&Ce[t*G+e]!==0;n++)window.verbose&&console.log(`regen attempt #${n}.`),Zc(),window.verbose&&n===0&&console.log("(just making sure you don't lose on the first turn)");Ei=!1}if(Ce[t*G+e]===-1){Kc(!1);return}let r=new Set().add(t*G+e),i=new Set;for(let n of r){if(Ce[n]===0)for(let s of Mr(...ki(n)).map(a=>a[1]*G+a[0]))!i.has(s)&&Ce[s]!==-1&&r.add(s);i.add(n)}for(let n of r)Xe[n]=!0;Hc()}function Na(e,t){_t||Xe[t*G+e]!==!0&&(Qe[t*G+e]=!Qe[t*G+e],Hc())}function Gc(){Ii=-1,requestAnimationFrame(bt)}function Hc(){let e=!0,t=!0;for(let i=0;i<Ce.length;i++)Ce[i]!==-1&&Xe[i]!==!0&&(e=!1);for(let i=0;i<Ce.length;i++)Ce[i]===-1&&Qe[i]!==!0&&(t=!1);t=t&&Pa-Qe.reduce((i,n)=>i+n)>=0,(e||t)&&Kc(!0)}function Kc(e=!1){e?(xi.innerHTML="You Win!",Ir++):qn++,window.debug&&console.log(`Win rate: ${Ir}/${Ir+qn}, ${Math.round(Ir*1e4/(Ir+qn))/100}%`),Pe.style.filter="blur(5px)",xi.style.display="block",_t=!0}function Yc(){Pe.style="",Pe.style.width=hr+"px",Pe.style.height=hr+"px",xi.style="",xi.innerHTML="Game Over"}function Zc(){Ce.fill(0),Xe.fill(!1),Qe.fill(!1),Qt.fill(0),jc(),Yc(),t0(),bt(),_t=!1,Ei=!0}function Yg(){if(!_t){if(Oi)return Qg();requestAnimationFrame(Ei?()=>{Dr(Math.floor((G-1)/2),Math.floor((G-1)/2)),bt(),requestAnimationFrame(()=>Ti(0,!0))}:()=>Ti(0,!0))}}function Ti(e=0,t=!1){let r=Xe.reduce((s,a)=>s+a)+Qe.reduce((s,a)=>s+a);for(let s=0;s<G;s++)for(let a=0;a<G;a++)if(Xe[s*G+a]===!0&&Ce[s*G+a]>0){let l=Ce[s*G+a],d=Mr(a,s),p=d.filter(g=>!Xe[g[1]*G+g[0]]),h=d.filter(g=>Qe[g[1]*G+g[0]]);if(l===h.length)for(let g of p.filter(u=>!Qe[u[1]*G+u[0]]))Dr(g[0],g[1])}bt();for(let s=0;s<G;s++)for(let a=0;a<G;a++)if(Xe[s*G+a]===!0&&Ce[s*G+a]>0){let l=Ce[s*G+a],p=Mr(a,s).filter(h=>!Xe[h[1]*G+h[0]]);if(l===p.length)for(let h of p.filter(g=>!Qe[g[1]*G+g[0]]))Na(h[0],h[1])}bt();let n=Xe.reduce((s,a)=>s+a)+Qe.reduce((s,a)=>s+a)-r;return n===0&&!_t&&e0(),n===0||_t?1:(t&&requestAnimationFrame(()=>Ti(e+1,!0)),0)}function Zg(e){let t=0,r=!1;for(let i=1;i<e.length;i++)!r&&e[i]>0&&(r=!0,t=i),e[i]>0&&e[i]<e[t]&&(t=i);return t}function Xg(e){let t=0;for(let r=1;r<e.length;r++)e[r]>e[t]&&(t=r);return t}function Qg(){requestAnimationFrame(()=>{Jg(!0),Ti(0,!0)})}function Jg(e=!1){Qt.fill(0);for(let t=0;t<G;t++)for(let r=0;r<G;r++)if(Xe[t*G+r]===!0&&Ce[t*G+r]>0){let i=Ce[t*G+r],n=Mr(r,t),s=n.filter(l=>!Xe[l[1]*G+l[0]]),a=n.filter(l=>Qe[l[1]*G+l[0]]);if(s.length>a.length){let l=s.filter(d=>!Qe[d[1]*G+d[0]]);for(let d of l)Qt[d[1]*G+d[0]]+=i/l.length}}if(e){const t=Xg(Qt);Na(...ki(t))}else{const t=Zg(Qt);Dr(...ki(t))}bt()}function e0(){Rr.innerHTML="Guess",Rr.style.background="coral",Oi=!0}function t0(){Rr.innerHTML="Solve",Rr.style="",Oi=!1}async function Xc(){if(_t)return;let e=await jg;const t=new Float32Array(G*G);for(let a=0;a<G*G;a++)Xe[a]?t[a]=Ce[a]/8:t[a]=-1;let r=new Ye("float32",t,[G,G]);r=r.reshape([1,1,G,G]);const n=(await e.run({input:r})).output.data;for(let a=0;a<G*G;a++)Xe[a]&&(n[a]=-1/0);let s=n.indexOf(Math.max(...n));s<0&&(s=Math.floor(G*G/2)+Math.floor(G/2)),requestAnimationFrame(()=>{Dr(...ki(s)),bt()}),console.log(s),_t||Xc()}jc();console.time("render");bt();console.timeEnd("render");
