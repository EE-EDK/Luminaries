(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rd="172",lx=0,Yd=1,ux=2,tm=1,em=2,Qi=3,Ds=0,vn=1,Pt=2,as=0,sr=1,Jt=2,Zd=3,$d=4,hx=5,Qs=100,fx=101,dx=102,px=103,mx=104,gx=200,xx=201,vx=202,Mx=203,fh=204,dh=205,_x=206,yx=207,wx=208,Sx=209,bx=210,Tx=211,Ex=212,Ax=213,Rx=214,ph=0,mh=1,gh=2,_r=3,xh=4,vh=5,Mh=6,_h=7,nm=0,Cx=1,Px=2,Ls=0,Ix=1,Lx=2,Dx=3,im=4,Ux=5,zx=6,Nx=7,sm=300,yr=301,wr=302,yh=303,wh=304,Vl=306,Sr=1e3,eo=1001,Sh=1002,ri=1003,Fx=1004,Xa=1005,Hi=1006,tu=1007,no=1008,ds=1009,om=1010,rm=1011,Ea=1012,ad=1013,uo=1014,Vi=1015,cs=1016,cd=1017,ld=1018,br=1020,am=35902,cm=1021,lm=1022,Ai=1023,um=1024,hm=1025,or=1026,Tr=1027,ud=1028,hd=1029,fm=1030,fd=1031,dd=1033,Oc=33776,Bc=33777,Gc=33778,kc=33779,bh=35840,Th=35841,Eh=35842,Ah=35843,Rh=36196,Ch=37492,Ph=37496,Ih=37808,Lh=37809,Dh=37810,Uh=37811,zh=37812,Nh=37813,Fh=37814,Oh=37815,Bh=37816,Gh=37817,kh=37818,Hh=37819,Vh=37820,Wh=37821,Hc=36492,Xh=36494,qh=36495,dm=36283,Yh=36284,Zh=36285,$h=36286,Ox=3200,Bx=3201,pm=0,Gx=1,Ts="",Fn="srgb",Er="srgb-linear",cl="linear",ye="srgb",vo=7680,jd=519,kx=512,Hx=513,Vx=514,mm=515,Wx=516,Xx=517,qx=518,Yx=519,ll=35044,Me=35048,Kd="300 es",os=2e3,ul=2001;class Dr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eu=Math.PI/180,jh=180/Math.PI;function ls(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function Zx(i,t){return(i%t+t)%t}function nu(i,t,e){return(1-e)*i+e*t}function Gi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,s,o,r,a,l,u){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,u)}set(t,e,n,s,o,r,a,l,u){const c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=o,c[5]=l,c[6]=n,c[7]=r,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],u=n[1],c=n[4],p=n[7],f=n[2],d=n[5],g=n[8],x=s[0],h=s[3],m=s[6],M=s[1],v=s[4],y=s[7],T=s[2],E=s[5],b=s[8];return o[0]=r*x+a*M+l*T,o[3]=r*h+a*v+l*E,o[6]=r*m+a*y+l*b,o[1]=u*x+c*M+p*T,o[4]=u*h+c*v+p*E,o[7]=u*m+c*y+p*b,o[2]=f*x+d*M+g*T,o[5]=f*h+d*v+g*E,o[8]=f*m+d*y+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],u=t[7],c=t[8];return e*r*c-e*a*u-n*o*c+n*a*l+s*o*u-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],u=t[7],c=t[8],p=c*r-a*u,f=a*l-c*o,d=u*o-r*l,g=e*p+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=p*x,t[1]=(s*u-c*n)*x,t[2]=(a*n-s*r)*x,t[3]=f*x,t[4]=(c*e-s*l)*x,t[5]=(s*o-a*e)*x,t[6]=d*x,t[7]=(n*l-u*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),u=Math.sin(o);return this.set(n*l,n*u,-n*(l*r+u*a)+r+t,-s*u,s*l,-s*(-u*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(iu.makeScale(t,e)),this}rotate(t){return this.premultiply(iu.makeRotation(-t)),this}translate(t,e){return this.premultiply(iu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const iu=new Yt;function gm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function hl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $x(){const i=hl("canvas");return i.style.display="block",i}const Jd={};function Wo(i){i in Jd||(Jd[i]=!0,console.warn(i))}function jx(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Kx(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Jx(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qd=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),t0=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qx(){const i={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===ye&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ye&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ts?cl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Er]:{primaries:t,whitePoint:n,transfer:cl,toXYZ:Qd,fromXYZ:t0,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:Qd,fromXYZ:t0,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),i}const ue=Qx();function us(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mo;class tv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Mo===void 0&&(Mo=hl("canvas")),Mo.width=t.width,Mo.height=t.height;const n=Mo.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Mo}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=hl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=us(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(us(e[n]/255)*255):e[n]=us(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ev=0;class xm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=ls(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(su(s[r].image)):o.push(su(s[r]))}else o=su(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function su(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nv=0;class Mn extends Dr{constructor(t=Mn.DEFAULT_IMAGE,e=Mn.DEFAULT_MAPPING,n=eo,s=eo,o=Hi,r=no,a=Ai,l=ds,u=Mn.DEFAULT_ANISOTROPY,c=Ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=ls(),this.name="",this.source=new xm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sr:t.x=t.x-Math.floor(t.x);break;case eo:t.x=t.x<0?0:1;break;case Sh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sr:t.y=t.y-Math.floor(t.y);break;case eo:t.y=t.y<0?0:1;break;case Sh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=sm;Mn.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,u=l[0],c=l[4],p=l[8],f=l[1],d=l[5],g=l[9],x=l[2],h=l[6],m=l[10];if(Math.abs(c-f)<.01&&Math.abs(p-x)<.01&&Math.abs(g-h)<.01){if(Math.abs(c+f)<.1&&Math.abs(p+x)<.1&&Math.abs(g+h)<.1&&Math.abs(u+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(u+1)/2,y=(d+1)/2,T=(m+1)/2,E=(c+f)/4,b=(p+x)/4,A=(g+h)/4;return v>y&&v>T?v<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(v),s=E/n,o=b/n):y>T?y<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(y),n=E/s,o=A/s):T<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(T),n=b/o,s=A/o),this.set(n,s,o,e),this}let M=Math.sqrt((h-g)*(h-g)+(p-x)*(p-x)+(f-c)*(f-c));return Math.abs(M)<.001&&(M=1),this.x=(h-g)/M,this.y=(p-x)/M,this.z=(f-c)/M,this.w=Math.acos((u+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iv extends Dr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new xm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends iv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class vm extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ri,this.minFilter=ri,this.wrapR=eo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sv extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ri,this.minFilter=ri,this.wrapR=eo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],u=n[s+1],c=n[s+2],p=n[s+3];const f=o[r+0],d=o[r+1],g=o[r+2],x=o[r+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=p;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(p!==x||l!==f||u!==d||c!==g){let h=1-a;const m=l*f+u*d+c*g+p*x,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const T=Math.sqrt(v),E=Math.atan2(T,m*M);h=Math.sin(h*E)/T,a=Math.sin(a*E)/T}const y=a*M;if(l=l*h+f*y,u=u*h+d*y,c=c*h+g*y,p=p*h+x*y,h===1-a){const T=1/Math.sqrt(l*l+u*u+c*c+p*p);l*=T,u*=T,c*=T,p*=T}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],u=n[s+2],c=n[s+3],p=o[r],f=o[r+1],d=o[r+2],g=o[r+3];return t[e]=a*g+c*p+l*d-u*f,t[e+1]=l*g+c*f+u*p-a*d,t[e+2]=u*g+c*d+a*f-l*p,t[e+3]=c*g-a*p-l*f-u*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,u=a(n/2),c=a(s/2),p=a(o/2),f=l(n/2),d=l(s/2),g=l(o/2);switch(r){case"XYZ":this._x=f*c*p+u*d*g,this._y=u*d*p-f*c*g,this._z=u*c*g+f*d*p,this._w=u*c*p-f*d*g;break;case"YXZ":this._x=f*c*p+u*d*g,this._y=u*d*p-f*c*g,this._z=u*c*g-f*d*p,this._w=u*c*p+f*d*g;break;case"ZXY":this._x=f*c*p-u*d*g,this._y=u*d*p+f*c*g,this._z=u*c*g+f*d*p,this._w=u*c*p-f*d*g;break;case"ZYX":this._x=f*c*p-u*d*g,this._y=u*d*p+f*c*g,this._z=u*c*g-f*d*p,this._w=u*c*p+f*d*g;break;case"YZX":this._x=f*c*p+u*d*g,this._y=u*d*p+f*c*g,this._z=u*c*g-f*d*p,this._w=u*c*p-f*d*g;break;case"XZY":this._x=f*c*p-u*d*g,this._y=u*d*p-f*c*g,this._z=u*c*g+f*d*p,this._w=u*c*p+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],u=e[2],c=e[6],p=e[10],f=n+a+p;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(c-l)*d,this._y=(o-u)*d,this._z=(r-s)*d}else if(n>a&&n>p){const d=2*Math.sqrt(1+n-a-p);this._w=(c-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+u)/d}else if(a>p){const d=2*Math.sqrt(1+a-n-p);this._w=(o-u)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+p-n-a);this._w=(r-s)/d,this._x=(o+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,u=e._z,c=e._w;return this._x=n*c+r*a+s*u-o*l,this._y=s*c+r*l+o*a-n*u,this._z=o*c+r*u+n*l-s*a,this._w=r*c-n*a-s*l-o*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),p=Math.sin((1-e)*c)/u,f=Math.sin(e*c)/u;return this._w=r*p+this._w*f,this._x=n*p+this._x*f,this._y=s*p+this._y*f,this._z=o*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(e0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(e0.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,u=2*(r*s-a*n),c=2*(a*e-o*s),p=2*(o*n-r*e);return this.x=e+l*u+r*p-a*c,this.y=n+l*c+a*u-o*p,this.z=s+l*p+o*c-r*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ou.copy(this).projectOnVector(t),this.sub(ou)}reflect(t){return this.sub(ou.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ou=new F,e0=new nn;class po{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,yi):yi.fromBufferAttribute(o,r),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qa.copy(n.boundingBox)),qa.applyMatrix4(t.matrixWorld),this.union(qa)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Br),Ya.subVectors(this.max,Br),_o.subVectors(t.a,Br),yo.subVectors(t.b,Br),wo.subVectors(t.c,Br),ms.subVectors(yo,_o),gs.subVectors(wo,yo),Fs.subVectors(_o,wo);let e=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Fs.z,Fs.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Fs.z,0,-Fs.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Fs.y,Fs.x,0];return!ru(e,_o,yo,wo,Ya)||(e=[1,0,0,0,1,0,0,0,1],!ru(e,_o,yo,wo,Ya))?!1:(Za.crossVectors(ms,gs),e=[Za.x,Za.y,Za.z],ru(e,_o,yo,wo,Ya))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Zi=[new F,new F,new F,new F,new F,new F,new F,new F],yi=new F,qa=new po,_o=new F,yo=new F,wo=new F,ms=new F,gs=new F,Fs=new F,Br=new F,Ya=new F,Za=new F,Os=new F;function ru(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Os.fromArray(i,o);const a=s.x*Math.abs(Os.x)+s.y*Math.abs(Os.y)+s.z*Math.abs(Os.z),l=t.dot(Os),u=e.dot(Os),c=n.dot(Os);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const ov=new po,Gr=new F,au=new F;class mo{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ov.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gr.subVectors(t,this.center);const e=Gr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Gr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(au.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gr.copy(t.center).add(au)),this.expandByPoint(Gr.copy(t.center).sub(au))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new F,cu=new F,$a=new F,xs=new F,lu=new F,ja=new F,uu=new F;class pd{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,e),$i.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){cu.copy(t).add(e).multiplyScalar(.5),$a.copy(e).sub(t).normalize(),xs.copy(this.origin).sub(cu);const o=t.distanceTo(e)*.5,r=-this.direction.dot($a),a=xs.dot(this.direction),l=-xs.dot($a),u=xs.lengthSq(),c=Math.abs(1-r*r);let p,f,d,g;if(c>0)if(p=r*l-a,f=r*a-l,g=o*c,p>=0)if(f>=-g)if(f<=g){const x=1/c;p*=x,f*=x,d=p*(p+r*f+2*a)+f*(r*p+f+2*l)+u}else f=o,p=Math.max(0,-(r*f+a)),d=-p*p+f*(f+2*l)+u;else f=-o,p=Math.max(0,-(r*f+a)),d=-p*p+f*(f+2*l)+u;else f<=-g?(p=Math.max(0,-(-r*o+a)),f=p>0?-o:Math.min(Math.max(-o,-l),o),d=-p*p+f*(f+2*l)+u):f<=g?(p=0,f=Math.min(Math.max(-o,-l),o),d=f*(f+2*l)+u):(p=Math.max(0,-(r*o+a)),f=p>0?o:Math.min(Math.max(-o,-l),o),d=-p*p+f*(f+2*l)+u);else f=r>0?-o:o,p=Math.max(0,-(r*f+a)),d=-p*p+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(cu).addScaledVector($a,f),d}intersectSphere(t,e){$i.subVectors(t.center,this.origin);const n=$i.dot(this.direction),s=$i.dot($i)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const u=1/this.direction.x,c=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(n=(t.min.x-f.x)*u,s=(t.max.x-f.x)*u):(n=(t.max.x-f.x)*u,s=(t.min.x-f.x)*u),c>=0?(o=(t.min.y-f.y)*c,r=(t.max.y-f.y)*c):(o=(t.max.y-f.y)*c,r=(t.min.y-f.y)*c),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),p>=0?(a=(t.min.z-f.z)*p,l=(t.max.z-f.z)*p):(a=(t.max.z-f.z)*p,l=(t.min.z-f.z)*p),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,e,n,s,o){lu.subVectors(e,t),ja.subVectors(n,t),uu.crossVectors(lu,ja);let r=this.direction.dot(uu),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;xs.subVectors(this.origin,t);const l=a*this.direction.dot(ja.crossVectors(xs,ja));if(l<0)return null;const u=a*this.direction.dot(lu.cross(xs));if(u<0||l+u>r)return null;const c=-a*xs.dot(uu);return c<0?null:this.at(c/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,n,s,o,r,a,l,u,c,p,f,d,g,x,h){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,u,c,p,f,d,g,x,h)}set(t,e,n,s,o,r,a,l,u,c,p,f,d,g,x,h){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=p,m[14]=f,m[3]=d,m[7]=g,m[11]=x,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/So.setFromMatrixColumn(t,0).length(),o=1/So.setFromMatrixColumn(t,1).length(),r=1/So.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),u=Math.sin(s),c=Math.cos(o),p=Math.sin(o);if(t.order==="XYZ"){const f=r*c,d=r*p,g=a*c,x=a*p;e[0]=l*c,e[4]=-l*p,e[8]=u,e[1]=d+g*u,e[5]=f-x*u,e[9]=-a*l,e[2]=x-f*u,e[6]=g+d*u,e[10]=r*l}else if(t.order==="YXZ"){const f=l*c,d=l*p,g=u*c,x=u*p;e[0]=f+x*a,e[4]=g*a-d,e[8]=r*u,e[1]=r*p,e[5]=r*c,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=r*l}else if(t.order==="ZXY"){const f=l*c,d=l*p,g=u*c,x=u*p;e[0]=f-x*a,e[4]=-r*p,e[8]=g+d*a,e[1]=d+g*a,e[5]=r*c,e[9]=x-f*a,e[2]=-r*u,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const f=r*c,d=r*p,g=a*c,x=a*p;e[0]=l*c,e[4]=g*u-d,e[8]=f*u+x,e[1]=l*p,e[5]=x*u+f,e[9]=d*u-g,e[2]=-u,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const f=r*l,d=r*u,g=a*l,x=a*u;e[0]=l*c,e[4]=x-f*p,e[8]=g*p+d,e[1]=p,e[5]=r*c,e[9]=-a*c,e[2]=-u*c,e[6]=d*p+g,e[10]=f-x*p}else if(t.order==="XZY"){const f=r*l,d=r*u,g=a*l,x=a*u;e[0]=l*c,e[4]=-p,e[8]=u*c,e[1]=f*p+x,e[5]=r*c,e[9]=d*p-g,e[2]=g*p-d,e[6]=a*c,e[10]=x*p+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rv,t,av)}lookAt(t,e,n){const s=this.elements;return Kn.subVectors(t,e),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),vs.crossVectors(n,Kn),vs.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),vs.crossVectors(n,Kn)),vs.normalize(),Ka.crossVectors(Kn,vs),s[0]=vs.x,s[4]=Ka.x,s[8]=Kn.x,s[1]=vs.y,s[5]=Ka.y,s[9]=Kn.y,s[2]=vs.z,s[6]=Ka.z,s[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],u=n[12],c=n[1],p=n[5],f=n[9],d=n[13],g=n[2],x=n[6],h=n[10],m=n[14],M=n[3],v=n[7],y=n[11],T=n[15],E=s[0],b=s[4],A=s[8],S=s[12],w=s[1],R=s[5],C=s[9],D=s[13],U=s[2],H=s[6],G=s[10],O=s[14],k=s[3],nt=s[7],ct=s[11],ft=s[15];return o[0]=r*E+a*w+l*U+u*k,o[4]=r*b+a*R+l*H+u*nt,o[8]=r*A+a*C+l*G+u*ct,o[12]=r*S+a*D+l*O+u*ft,o[1]=c*E+p*w+f*U+d*k,o[5]=c*b+p*R+f*H+d*nt,o[9]=c*A+p*C+f*G+d*ct,o[13]=c*S+p*D+f*O+d*ft,o[2]=g*E+x*w+h*U+m*k,o[6]=g*b+x*R+h*H+m*nt,o[10]=g*A+x*C+h*G+m*ct,o[14]=g*S+x*D+h*O+m*ft,o[3]=M*E+v*w+y*U+T*k,o[7]=M*b+v*R+y*H+T*nt,o[11]=M*A+v*C+y*G+T*ct,o[15]=M*S+v*D+y*O+T*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],u=t[13],c=t[2],p=t[6],f=t[10],d=t[14],g=t[3],x=t[7],h=t[11],m=t[15];return g*(+o*l*p-s*u*p-o*a*f+n*u*f+s*a*d-n*l*d)+x*(+e*l*d-e*u*f+o*r*f-s*r*d+s*u*c-o*l*c)+h*(+e*u*p-e*a*d-o*r*p+n*r*d+o*a*c-n*u*c)+m*(-s*a*c-e*l*p+e*a*f+s*r*p-n*r*f+n*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],u=t[7],c=t[8],p=t[9],f=t[10],d=t[11],g=t[12],x=t[13],h=t[14],m=t[15],M=p*h*u-x*f*u+x*l*d-a*h*d-p*l*m+a*f*m,v=g*f*u-c*h*u-g*l*d+r*h*d+c*l*m-r*f*m,y=c*x*u-g*p*u+g*a*d-r*x*d-c*a*m+r*p*m,T=g*p*l-c*x*l-g*a*f+r*x*f+c*a*h-r*p*h,E=e*M+n*v+s*y+o*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=M*b,t[1]=(x*f*o-p*h*o-x*s*d+n*h*d+p*s*m-n*f*m)*b,t[2]=(a*h*o-x*l*o+x*s*u-n*h*u-a*s*m+n*l*m)*b,t[3]=(p*l*o-a*f*o-p*s*u+n*f*u+a*s*d-n*l*d)*b,t[4]=v*b,t[5]=(c*h*o-g*f*o+g*s*d-e*h*d-c*s*m+e*f*m)*b,t[6]=(g*l*o-r*h*o-g*s*u+e*h*u+r*s*m-e*l*m)*b,t[7]=(r*f*o-c*l*o+c*s*u-e*f*u-r*s*d+e*l*d)*b,t[8]=y*b,t[9]=(g*p*o-c*x*o-g*n*d+e*x*d+c*n*m-e*p*m)*b,t[10]=(r*x*o-g*a*o+g*n*u-e*x*u-r*n*m+e*a*m)*b,t[11]=(c*a*o-r*p*o-c*n*u+e*p*u+r*n*d-e*a*d)*b,t[12]=T*b,t[13]=(c*x*s-g*p*s+g*n*f-e*x*f-c*n*h+e*p*h)*b,t[14]=(g*a*s-r*x*s-g*n*l+e*x*l+r*n*h-e*a*h)*b,t[15]=(r*p*s-c*a*s+c*n*l-e*p*l-r*n*f+e*a*f)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,u=o*r,c=o*a;return this.set(u*r+n,u*a-s*l,u*l+s*a,0,u*a+s*l,c*a+n,c*l-s*r,0,u*l-s*a,c*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,u=o+o,c=r+r,p=a+a,f=o*u,d=o*c,g=o*p,x=r*c,h=r*p,m=a*p,M=l*u,v=l*c,y=l*p,T=n.x,E=n.y,b=n.z;return s[0]=(1-(x+m))*T,s[1]=(d+y)*T,s[2]=(g-v)*T,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(f+m))*E,s[6]=(h+M)*E,s[7]=0,s[8]=(g+v)*b,s[9]=(h-M)*b,s[10]=(1-(f+x))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=So.set(s[0],s[1],s[2]).length();const r=So.set(s[4],s[5],s[6]).length(),a=So.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],wi.copy(this);const u=1/o,c=1/r,p=1/a;return wi.elements[0]*=u,wi.elements[1]*=u,wi.elements[2]*=u,wi.elements[4]*=c,wi.elements[5]*=c,wi.elements[6]*=c,wi.elements[8]*=p,wi.elements[9]*=p,wi.elements[10]*=p,e.setFromRotationMatrix(wi),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=os){const l=this.elements,u=2*o/(e-t),c=2*o/(n-s),p=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(a===os)d=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===ul)d=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=os){const l=this.elements,u=1/(e-t),c=1/(n-s),p=1/(r-o),f=(e+t)*u,d=(n+s)*c;let g,x;if(a===os)g=(r+o)*p,x=-2*p;else if(a===ul)g=o*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const So=new F,wi=new ge,rv=new F(0,0,0),av=new F(1,1,1),vs=new F,Ka=new F,Kn=new F,n0=new ge,i0=new nn;class Xi{constructor(t=0,e=0,n=0,s=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],u=s[5],c=s[9],p=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-te(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,o),this._z=0);break;case"ZXY":this._x=Math.asin(te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-te(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,u));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-p,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-te(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return n0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(n0,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return i0.setFromEuler(this),this.setFromQuaternion(i0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class Mm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cv=0;const s0=new F,bo=new nn,ji=new ge,Ja=new F,kr=new F,lv=new F,uv=new nn,o0=new F(1,0,0),r0=new F(0,1,0),a0=new F(0,0,1),c0={type:"added"},hv={type:"removed"},To={type:"childadded",child:null},hu={type:"childremoved",child:null};class ce extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ce.DEFAULT_UP.clone();const t=new F,e=new Xi,n=new nn,s=new F(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Yt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bo.setFromAxisAngle(t,e),this.quaternion.multiply(bo),this}rotateOnWorldAxis(t,e){return bo.setFromAxisAngle(t,e),this.quaternion.premultiply(bo),this}rotateX(t){return this.rotateOnAxis(o0,t)}rotateY(t){return this.rotateOnAxis(r0,t)}rotateZ(t){return this.rotateOnAxis(a0,t)}translateOnAxis(t,e){return s0.copy(t).applyQuaternion(this.quaternion),this.position.add(s0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(o0,t)}translateY(t){return this.translateOnAxis(r0,t)}translateZ(t){return this.translateOnAxis(a0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ja.copy(t):Ja.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(kr,Ja,this.up):ji.lookAt(Ja,kr,this.up),this.quaternion.setFromRotationMatrix(ji),s&&(ji.extractRotation(s.matrixWorld),bo.setFromRotationMatrix(ji),this.quaternion.premultiply(bo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(c0),To.child=t,this.dispatchEvent(To),To.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hv),hu.child=t,this.dispatchEvent(hu),hu.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(c0),To.child=t,this.dispatchEvent(To),To.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,t,lv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,uv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const p=l[u];o(t.shapes,p)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),u=r(t.textures),c=r(t.images),p=r(t.shapes),f=r(t.skeletons),d=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ce.DEFAULT_UP=new F(0,1,0);ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new F,Ki=new F,fu=new F,Ji=new F,Eo=new F,Ao=new F,l0=new F,du=new F,pu=new F,mu=new F,gu=new be,xu=new be,vu=new be;class mi{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Si.subVectors(t,e),s.cross(Si);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Si.subVectors(s,e),Ki.subVectors(n,e),fu.subVectors(t,e);const r=Si.dot(Si),a=Si.dot(Ki),l=Si.dot(fu),u=Ki.dot(Ki),c=Ki.dot(fu),p=r*u-a*a;if(p===0)return o.set(0,0,0),null;const f=1/p,d=(u*l-a*c)*f,g=(r*c-a*l)*f;return o.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ji.x),l.addScaledVector(r,Ji.y),l.addScaledVector(a,Ji.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return gu.setScalar(0),xu.setScalar(0),vu.setScalar(0),gu.fromBufferAttribute(t,e),xu.fromBufferAttribute(t,n),vu.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(gu,o.x),r.addScaledVector(xu,o.y),r.addScaledVector(vu,o.z),r}static isFrontFacing(t,e,n,s){return Si.subVectors(n,e),Ki.subVectors(t,e),Si.cross(Ki).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),Si.cross(Ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return mi.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Eo.subVectors(s,n),Ao.subVectors(o,n),du.subVectors(t,n);const l=Eo.dot(du),u=Ao.dot(du);if(l<=0&&u<=0)return e.copy(n);pu.subVectors(t,s);const c=Eo.dot(pu),p=Ao.dot(pu);if(c>=0&&p<=c)return e.copy(s);const f=l*p-c*u;if(f<=0&&l>=0&&c<=0)return r=l/(l-c),e.copy(n).addScaledVector(Eo,r);mu.subVectors(t,o);const d=Eo.dot(mu),g=Ao.dot(mu);if(g>=0&&d<=g)return e.copy(o);const x=d*u-l*g;if(x<=0&&u>=0&&g<=0)return a=u/(u-g),e.copy(n).addScaledVector(Ao,a);const h=c*g-d*p;if(h<=0&&p-c>=0&&d-g>=0)return l0.subVectors(o,s),a=(p-c)/(p-c+(d-g)),e.copy(s).addScaledVector(l0,a);const m=1/(h+x+f);return r=x*m,a=f*m,e.copy(n).addScaledVector(Eo,r).addScaledVector(Ao,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ms={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function Mu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class it{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=Zx(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Mu(r,o,t+1/3),this.g=Mu(r,o,t),this.b=Mu(r,o,t-1/3)}return ue.toWorkingColorSpace(this,s),this}setStyle(t,e=Fn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fn){const n=_m[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}copyLinearToSRGB(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fn){return ue.fromWorkingColorSpace(hn.copy(this),t),Math.round(te(hn.r*255,0,255))*65536+Math.round(te(hn.g*255,0,255))*256+Math.round(te(hn.b*255,0,255))}getHexString(t=Fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,s=hn.g,o=hn.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,u;const c=(a+r)/2;if(a===r)l=0,u=0;else{const p=r-a;switch(u=c<=.5?p/(r+a):p/(2-r-a),r){case n:l=(s-o)/p+(s<o?6:0);break;case s:l=(o-n)/p+2;break;case o:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Fn){ue.fromWorkingColorSpace(hn.copy(this),t);const e=hn.r,n=hn.g,s=hn.b;return t!==Fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ms),this.setHSL(Ms.h+t,Ms.s+e,Ms.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ms),t.getHSL(Qa);const n=nu(Ms.h,Qa.h,e),s=nu(Ms.s,Qa.s,e),o=nu(Ms.l,Qa.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new it;it.NAMES=_m;let fv=0;class Us extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=sr,this.side=Ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=dh,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(n.blending=this.blending),this.side!==Ds&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fh&&(n.blendSrc=this.blendSrc),this.blendDst!==dh&&(n.blendDst=this.blendDst),this.blendEquation!==Qs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $ extends Us{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=nm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ze=new F,tc=new pt;class Ne{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ll,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)tc.fromBufferAttribute(this,e),tc.applyMatrix3(t),this.setXY(e,tc.x,tc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gi(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gi(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gi(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array),o=we(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ll&&(t.usage=this.usage),t}}class ym extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wm extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Vt extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}}let dv=0;const hi=new ge,_u=new ce,Ro=new F,Jn=new po,Hr=new po,Qe=new F;class Ae extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gm(t)?wm:ym)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Yt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,e,n){return hi.makeTranslation(t,e,n),this.applyMatrix4(hi),this}scale(t,e,n){return hi.makeScale(t,e,n),this.applyMatrix4(hi),this}lookAt(t){return _u.lookAt(t),_u.updateMatrix(),this.applyMatrix4(_u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ro).negate(),this.translate(Ro.x,Ro.y,Ro.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Vt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new po);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Jn.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(Jn.min,Hr.min),Jn.expandByPoint(Qe),Qe.addVectors(Jn.max,Hr.max),Jn.expandByPoint(Qe)):(Jn.expandByPoint(Hr.min),Jn.expandByPoint(Hr.max))}Jn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Qe.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Qe));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Qe.fromBufferAttribute(a,u),l&&(Ro.fromBufferAttribute(t,u),Qe.add(Ro)),s=Math.max(s,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new F,l[A]=new F;const u=new F,c=new F,p=new F,f=new pt,d=new pt,g=new pt,x=new F,h=new F;function m(A,S,w){u.fromBufferAttribute(n,A),c.fromBufferAttribute(n,S),p.fromBufferAttribute(n,w),f.fromBufferAttribute(o,A),d.fromBufferAttribute(o,S),g.fromBufferAttribute(o,w),c.sub(u),p.sub(u),d.sub(f),g.sub(f);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(p,-d.y).multiplyScalar(R),h.copy(p).multiplyScalar(d.x).addScaledVector(c,-g.x).multiplyScalar(R),a[A].add(x),a[S].add(x),a[w].add(x),l[A].add(h),l[S].add(h),l[w].add(h))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let A=0,S=M.length;A<S;++A){const w=M[A],R=w.start,C=w.count;for(let D=R,U=R+C;D<U;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const v=new F,y=new F,T=new F,E=new F;function b(A){T.fromBufferAttribute(s,A),E.copy(T);const S=a[A];v.copy(S),v.sub(T.multiplyScalar(T.dot(S))).normalize(),y.crossVectors(E,S);const R=y.dot(l[A])<0?-1:1;r.setXYZW(A,v.x,v.y,v.z,R)}for(let A=0,S=M.length;A<S;++A){const w=M[A],R=w.start,C=w.count;for(let D=R,U=R+C;D<U;D+=3)b(t.getX(D+0)),b(t.getX(D+1)),b(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new F,o=new F,r=new F,a=new F,l=new F,u=new F,c=new F,p=new F;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),x=t.getX(f+1),h=t.getX(f+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,h),c.subVectors(r,o),p.subVectors(s,o),c.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,h),a.add(c),l.add(c),u.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(h,u.x,u.y,u.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),c.subVectors(r,o),p.subVectors(s,o),c.cross(p),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){const u=a.array,c=a.itemSize,p=a.normalized,f=new u.constructor(l.length*c);let d=0,g=0;for(let x=0,h=l.length;x<h;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*c;for(let m=0;m<c;m++)f[g++]=u[d++]}return new Ne(f,c,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=t(l,n);e.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,p=u.length;c<p;c++){const f=u[c],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const u=r[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const u=n[l];t.data.attributes[l]=u.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let p=0,f=u.length;p<f;p++){const d=u[p];c.push(d.toJSON(t.data))}c.length>0&&(s[l]=c,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(e))}const o=t.morphAttributes;for(const u in o){const c=[],p=o[u];for(let f=0,d=p.length;f<d;f++)c.push(p[f].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let u=0,c=r.length;u<c;u++){const p=r[u];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const u0=new ge,Bs=new pd,ec=new mo,h0=new F,nc=new F,ic=new F,sc=new F,yu=new F,oc=new F,f0=new F,rc=new F;class P extends ce{constructor(t=new Ae,e=new $){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){oc.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],p=o[l];c!==0&&(yu.fromBufferAttribute(p,t),r?oc.addScaledVector(yu,c):oc.addScaledVector(yu.sub(e),c))}e.add(oc)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ec.copy(n.boundingSphere),ec.applyMatrix4(o),Bs.copy(t.ray).recast(t.near),!(ec.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(ec,h0)===null||Bs.origin.distanceToSquared(h0)>(t.far-t.near)**2))&&(u0.copy(o).invert(),Bs.copy(t.ray).applyMatrix4(u0),!(n.boundingBox!==null&&Bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bs)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,p=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const h=f[g],m=r[h.materialIndex],M=Math.max(h.start,d.start),v=Math.min(a.count,Math.min(h.start+h.count,d.start+d.count));for(let y=M,T=v;y<T;y+=3){const E=a.getX(y),b=a.getX(y+1),A=a.getX(y+2);s=ac(this,m,t,n,u,c,p,E,b,A),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=h.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let h=g,m=x;h<m;h+=3){const M=a.getX(h),v=a.getX(h+1),y=a.getX(h+2);s=ac(this,r,t,n,u,c,p,M,v,y),s&&(s.faceIndex=Math.floor(h/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const h=f[g],m=r[h.materialIndex],M=Math.max(h.start,d.start),v=Math.min(l.count,Math.min(h.start+h.count,d.start+d.count));for(let y=M,T=v;y<T;y+=3){const E=y,b=y+1,A=y+2;s=ac(this,m,t,n,u,c,p,E,b,A),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=h.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let h=g,m=x;h<m;h+=3){const M=h,v=h+1,y=h+2;s=ac(this,r,t,n,u,c,p,M,v,y),s&&(s.faceIndex=Math.floor(h/3),e.push(s))}}}}function pv(i,t,e,n,s,o,r,a){let l;if(t.side===vn?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===Ds,a),l===null)return null;rc.copy(a),rc.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(rc);return u<e.near||u>e.far?null:{distance:u,point:rc.clone(),object:i}}function ac(i,t,e,n,s,o,r,a,l,u){i.getVertexPosition(a,nc),i.getVertexPosition(l,ic),i.getVertexPosition(u,sc);const c=pv(i,t,e,n,nc,ic,sc,f0);if(c){const p=new F;mi.getBarycoord(f0,nc,ic,sc,p),s&&(c.uv=mi.getInterpolatedAttribute(s,a,l,u,p,new pt)),o&&(c.uv1=mi.getInterpolatedAttribute(o,a,l,u,p,new pt)),r&&(c.normal=mi.getInterpolatedAttribute(r,a,l,u,p,new F),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new F,materialIndex:0};mi.getNormal(nc,ic,sc,f.normal),c.face=f,c.barycoord=p}return c}class Fa extends Ae{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],u=[],c=[],p=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(p,2));function g(x,h,m,M,v,y,T,E,b,A,S){const w=y/b,R=T/A,C=y/2,D=T/2,U=E/2,H=b+1,G=A+1;let O=0,k=0;const nt=new F;for(let ct=0;ct<G;ct++){const ft=ct*R-D;for(let Ct=0;Ct<H;Ct++){const Wt=Ct*w-C;nt[x]=Wt*M,nt[h]=ft*v,nt[m]=U,u.push(nt.x,nt.y,nt.z),nt[x]=0,nt[h]=0,nt[m]=E>0?1:-1,c.push(nt.x,nt.y,nt.z),p.push(Ct/b),p.push(1-ct/A),O+=1}}for(let ct=0;ct<A;ct++)for(let ft=0;ft<b;ft++){const Ct=f+ft+H*ct,Wt=f+ft+H*(ct+1),et=f+(ft+1)+H*(ct+1),ut=f+(ft+1)+H*ct;l.push(Ct,Wt,ut),l.push(Wt,et,ut),k+=6}a.addGroup(d,k,S),d+=k,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ar(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function wn(i){const t={};for(let e=0;e<i.length;e++){const n=Ar(i[e]);for(const s in n)t[s]=n[s]}return t}function mv(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Sm(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const fl={clone:Ar,merge:wn};var gv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends Us{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gv,this.fragmentShader=xv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ar(t.uniforms),this.uniformsGroups=mv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bm extends ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=os}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _s=new F,d0=new pt,p0=new pt;class ei extends bm{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=jh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(eu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jh*2*Math.atan(Math.tan(eu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_s.x,_s.y).multiplyScalar(-t/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_s.x,_s.y).multiplyScalar(-t/_s.z)}getViewSize(t,e){return this.getViewBounds(t,d0,p0),e.subVectors(p0,d0)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(eu*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,u=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/u,s*=r.width/l,n*=r.height/u}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Co=-90,Po=1;class vv extends ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ei(Co,Po,t,e);s.layers=this.layers,this.add(s);const o=new ei(Co,Po,t,e);o.layers=this.layers,this.add(o);const r=new ei(Co,Po,t,e);r.layers=this.layers,this.add(r);const a=new ei(Co,Po,t,e);a.layers=this.layers,this.add(a);const l=new ei(Co,Po,t,e);l.layers=this.layers,this.add(l);const u=new ei(Co,Po,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const u of e)this.remove(u);if(t===os)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ul)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,u,c]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(p,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Tm extends Mn{constructor(t,e,n,s,o,r,a,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:yr,super(t,e,n,s,o,r,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Mv extends Ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Tm(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Hi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Fa(5,5,5),o=new Xn({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:as});o.uniforms.tEquirect.value=e;const r=new P(s,o),a=e.minFilter;return e.minFilter===no&&(e.minFilter=Hi),new vv(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}class md{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new it(t),this.density=e}clone(){return new md(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _v extends ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class yv{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ll,this.updateRanges=[],this.version=0,this.uuid=ls()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ls()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ls()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const yn=new F;class dl{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Gi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Gi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Gi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Gi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array),o=we(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new dl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Em extends Us{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Io;const Vr=new F,Lo=new F,Do=new F,Uo=new pt,Wr=new pt,Am=new ge,cc=new F,Xr=new F,lc=new F,m0=new pt,wu=new pt,g0=new pt;class wv extends ce{constructor(t=new Em){if(super(),this.isSprite=!0,this.type="Sprite",Io===void 0){Io=new Ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yv(e,5);Io.setIndex([0,1,2,0,2,3]),Io.setAttribute("position",new dl(n,3,0,!1)),Io.setAttribute("uv",new dl(n,2,3,!1))}this.geometry=Io,this.material=t,this.center=new pt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Lo.setFromMatrixScale(this.matrixWorld),Am.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Do.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Lo.multiplyScalar(-Do.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;uc(cc.set(-.5,-.5,0),Do,r,Lo,s,o),uc(Xr.set(.5,-.5,0),Do,r,Lo,s,o),uc(lc.set(.5,.5,0),Do,r,Lo,s,o),m0.set(0,0),wu.set(1,0),g0.set(1,1);let a=t.ray.intersectTriangle(cc,Xr,lc,!1,Vr);if(a===null&&(uc(Xr.set(-.5,.5,0),Do,r,Lo,s,o),wu.set(0,1),a=t.ray.intersectTriangle(cc,lc,Xr,!1,Vr),a===null))return;const l=t.ray.origin.distanceTo(Vr);l<t.near||l>t.far||e.push({distance:l,point:Vr.clone(),uv:mi.getInterpolation(Vr,cc,Xr,lc,m0,wu,g0,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function uc(i,t,e,n,s,o){Uo.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Wr.x=o*Uo.x-s*Uo.y,Wr.y=s*Uo.x+o*Uo.y):Wr.copy(Uo),i.copy(t),i.x+=Wr.x,i.y+=Wr.y,i.applyMatrix4(Am)}class Sv extends Mn{constructor(t=null,e=1,n=1,s,o,r,a,l,u=ri,c=ri,p,f){super(null,r,a,l,u,c,s,o,p,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ci extends Ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const zo=new ge,x0=new ge,hc=[],v0=new po,bv=new ge,qr=new P,Yr=new mo;class qn extends P{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ci(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,bv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new po),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zo),v0.copy(t.boundingBox).applyMatrix4(zo),this.boundingBox.union(v0)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new mo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zo),Yr.copy(t.boundingSphere).applyMatrix4(zo),this.boundingSphere.union(Yr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(n),t.ray.intersectsSphere(Yr)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,zo),x0.multiplyMatrices(n,zo),qr.matrixWorld=x0,qr.raycast(t,hc);for(let r=0,a=hc.length;r<a;r++){const l=hc[r];l.instanceId=o,l.object=this,e.push(l)}hc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ci(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sv(new Float32Array(s*this.count),s,this.count,ud,Vi));const o=this.morphTexture.source.data.data;let r=0;for(let u=0;u<n.length;u++)r+=n[u];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Su=new F,Tv=new F,Ev=new Yt;class Xs{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Su.subVectors(n,e).cross(Tv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Su),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ev.getNormalMatrix(t),s=this.coplanarPoint(Su).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gs=new mo,fc=new F;class gd{constructor(t=new Xs,e=new Xs,n=new Xs,s=new Xs,o=new Xs,r=new Xs){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=os){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],u=s[4],c=s[5],p=s[6],f=s[7],d=s[8],g=s[9],x=s[10],h=s[11],m=s[12],M=s[13],v=s[14],y=s[15];if(n[0].setComponents(l-o,f-u,h-d,y-m).normalize(),n[1].setComponents(l+o,f+u,h+d,y+m).normalize(),n[2].setComponents(l+r,f+c,h+g,y+M).normalize(),n[3].setComponents(l-r,f-c,h-g,y-M).normalize(),n[4].setComponents(l-a,f-p,h-x,y-v).normalize(),e===os)n[5].setComponents(l+a,f+p,h+x,y+v).normalize();else if(e===ul)n[5].setComponents(a,p,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(t){return Gs.center.set(0,0,0),Gs.radius=.7071067811865476,Gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(fc.x=s.normal.x>0?t.max.x:t.min.x,fc.y=s.normal.y>0?t.max.y:t.min.y,fc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fc)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xd extends Us{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const pl=new F,ml=new F,M0=new ge,Zr=new pd,dc=new mo,bu=new F,_0=new F;class Rm extends ce{constructor(t=new Ae,e=new xd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)pl.fromBufferAttribute(e,s-1),ml.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=pl.distanceTo(ml);t.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dc.copy(n.boundingSphere),dc.applyMatrix4(s),dc.radius+=o,t.ray.intersectsSphere(dc)===!1)return;M0.copy(s).invert(),Zr.copy(t.ray).applyMatrix4(M0);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),g=Math.min(c.count,r.start+r.count);for(let x=d,h=g-1;x<h;x+=u){const m=c.getX(x),M=c.getX(x+1),v=pc(this,t,Zr,l,m,M);v&&e.push(v)}if(this.isLineLoop){const x=c.getX(g-1),h=c.getX(d),m=pc(this,t,Zr,l,x,h);m&&e.push(m)}}else{const d=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let x=d,h=g-1;x<h;x+=u){const m=pc(this,t,Zr,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){const x=pc(this,t,Zr,l,g-1,d);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function pc(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(pl.fromBufferAttribute(r,s),ml.fromBufferAttribute(r,o),e.distanceSqToSegment(pl,ml,bu,_0)>n)return;bu.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(bu);if(!(l<t.near||l>t.far))return{distance:l,point:_0.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const y0=new F,w0=new F;class Av extends Rm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)y0.fromBufferAttribute(e,s),w0.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+y0.distanceTo(w0);t.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vd extends Us{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const S0=new ge,Kh=new pd,mc=new mo,gc=new F;class Cm extends ce{constructor(t=new Ae,e=new vd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(s),mc.radius+=o,t.ray.intersectsSphere(mc)===!1)return;S0.copy(s).invert(),Kh.copy(t.ray).applyMatrix4(S0);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,p=n.attributes.position;if(u!==null){const f=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let g=f,x=d;g<x;g++){const h=u.getX(g);gc.fromBufferAttribute(p,h),b0(gc,h,l,s,t,e,this)}}else{const f=Math.max(0,r.start),d=Math.min(p.count,r.start+r.count);for(let g=f,x=d;g<x;g++)gc.fromBufferAttribute(p,g),b0(gc,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function b0(i,t,e,n,s,o,r){const a=Kh.distanceSqToPoint(i);if(a<e){const l=new F;Kh.closestPointToPoint(i,l),l.applyMatrix4(n);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;o.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Qt extends ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Oa extends Mn{constructor(t,e,n,s,o,r,a,l,u){super(t,e,n,s,o,r,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pm extends Mn{constructor(t,e,n,s,o,r,a,l,u,c=or){if(c!==or&&c!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===or&&(n=uo),n===void 0&&c===Tr&&(n=br),super(null,s,o,r,a,l,c,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ri,this.minFilter=l!==void 0?l:ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class qi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,u;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),u=n[s]-r,u<0)a=s+1;else if(u>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const c=n[s],f=n[s+1]-c,d=(r-c)/f;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new pt:new F);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new F,s=[],o=[],r=[],a=new F,l=new ge;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new F)}o[0]=new F,r[0]=new F;let u=Number.MAX_VALUE;const c=Math.abs(s[0].x),p=Math.abs(s[0].y),f=Math.abs(s[0].z);c<=u&&(u=c,n.set(1,0,0)),p<=u&&(u=p,n.set(0,1,0)),f<=u&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(te(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(a,g))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(te(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Md extends qi{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new pt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=l-this.aX,d=u-this.aY;l=f*c-d*p+this.aX,u=f*p+d*c+this.aY}return n.set(l,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Rv extends Md{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function _d(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,u){s(r,a,u*(a-o),u*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,u,c,p){let f=(r-o)/u-(a-o)/(u+c)+(a-r)/c,d=(a-r)/c-(l-r)/(c+p)+(l-a)/p;f*=c,d*=c,s(r,a,f,d)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const xc=new F,Tu=new _d,Eu=new _d,Au=new _d;class go extends qi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let u,c;this.closed||a>0?u=s[(a-1)%o]:(xc.subVectors(s[0],s[1]).add(s[0]),u=xc);const p=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?c=s[(a+2)%o]:(xc.subVectors(s[o-1],s[o-2]).add(s[o-1]),c=xc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(p),d),x=Math.pow(p.distanceToSquared(f),d),h=Math.pow(f.distanceToSquared(c),d);x<1e-4&&(x=1),g<1e-4&&(g=x),h<1e-4&&(h=x),Tu.initNonuniformCatmullRom(u.x,p.x,f.x,c.x,g,x,h),Eu.initNonuniformCatmullRom(u.y,p.y,f.y,c.y,g,x,h),Au.initNonuniformCatmullRom(u.z,p.z,f.z,c.z,g,x,h)}else this.curveType==="catmullrom"&&(Tu.initCatmullRom(u.x,p.x,f.x,c.x,this.tension),Eu.initCatmullRom(u.y,p.y,f.y,c.y,this.tension),Au.initCatmullRom(u.z,p.z,f.z,c.z,this.tension));return n.set(Tu.calc(l),Eu.calc(l),Au.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function T0(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function Cv(i,t){const e=1-i;return e*e*t}function Pv(i,t){return 2*(1-i)*i*t}function Iv(i,t){return i*i*t}function pa(i,t,e,n){return Cv(i,t)+Pv(i,e)+Iv(i,n)}function Lv(i,t){const e=1-i;return e*e*e*t}function Dv(i,t){const e=1-i;return 3*e*e*i*t}function Uv(i,t){return 3*(1-i)*i*i*t}function zv(i,t){return i*i*i*t}function ma(i,t,e,n,s){return Lv(i,t)+Dv(i,e)+Uv(i,n)+zv(i,s)}class Im extends qi{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(ma(t,s.x,o.x,r.x,a.x),ma(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Nv extends qi{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(ma(t,s.x,o.x,r.x,a.x),ma(t,s.y,o.y,r.y,a.y),ma(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Lm extends qi{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yd extends qi{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dm extends qi{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(pa(t,s.x,o.x,r.x),pa(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Um extends qi{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(pa(t,s.x,o.x,r.x),pa(t,s.y,o.y,r.y),pa(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zm extends qi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],u=s[r],c=s[r>s.length-2?s.length-1:r+1],p=s[r>s.length-3?s.length-1:r+2];return n.set(T0(a,l.x,u.x,c.x,p.x),T0(a,l.y,u.y,c.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new pt().fromArray(s))}return this}}var Jh=Object.freeze({__proto__:null,ArcCurve:Rv,CatmullRomCurve3:go,CubicBezierCurve:Im,CubicBezierCurve3:Nv,EllipseCurve:Md,LineCurve:Lm,LineCurve3:yd,QuadraticBezierCurve:Dm,QuadraticBezierCurve3:Um,SplineCurve:zm});class Fv extends qi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),u=l===0?0:1-r/l;return a.getPointAt(u,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Jh[s.type]().fromJSON(s))}return this}}class gl extends Fv{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Lm(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new Dm(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new Im(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new zm(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+u,e+c,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const u=new Md(t,e,n,s,o,r,a,l);if(this.curves.length>0){const p=u.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ve extends Ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],u=new F,c=new pt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,f=3;p<=e;p++,f+=3){const d=n+p/e*s;u.x=t*Math.cos(d),u.y=t*Math.sin(d),r.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(r[f]/t+1)/2,c.y=(r[f+1]/t+1)/2,l.push(c.x,c.y)}for(let p=1;p<=e;p++)o.push(p,p+1,0);this.setIndex(o),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class gt extends Ae{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const u=this;s=Math.floor(s),o=Math.floor(o);const c=[],p=[],f=[],d=[];let g=0;const x=[],h=n/2;let m=0;M(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new Vt(p,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(d,2));function M(){const y=new F,T=new F;let E=0;const b=(e-t)/n;for(let A=0;A<=o;A++){const S=[],w=A/o,R=w*(e-t)+t;for(let C=0;C<=s;C++){const D=C/s,U=D*l+a,H=Math.sin(U),G=Math.cos(U);T.x=R*H,T.y=-w*n+h,T.z=R*G,p.push(T.x,T.y,T.z),y.set(H,b,G).normalize(),f.push(y.x,y.y,y.z),d.push(D,1-w),S.push(g++)}x.push(S)}for(let A=0;A<s;A++)for(let S=0;S<o;S++){const w=x[S][A],R=x[S+1][A],C=x[S+1][A+1],D=x[S][A+1];(t>0||S!==0)&&(c.push(w,R,D),E+=3),(e>0||S!==o-1)&&(c.push(R,C,D),E+=3)}u.addGroup(m,E,0),m+=E}function v(y){const T=g,E=new pt,b=new F;let A=0;const S=y===!0?t:e,w=y===!0?1:-1;for(let C=1;C<=s;C++)p.push(0,h*w,0),f.push(0,w,0),d.push(.5,.5),g++;const R=g;for(let C=0;C<=s;C++){const U=C/s*l+a,H=Math.cos(U),G=Math.sin(U);b.x=S*G,b.y=h*w,b.z=S*H,p.push(b.x,b.y,b.z),f.push(0,w,0),E.x=H*.5+.5,E.y=G*.5*w+.5,d.push(E.x,E.y),g++}for(let C=0;C<s;C++){const D=T+C,U=R+C;y===!0?c.push(U,U+1,D):c.push(U+1,U,D),A+=3}u.addGroup(m,A,y===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bn extends gt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Bn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ba extends Ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),u(n),c(),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(o.slice(),3)),this.setAttribute("uv",new Vt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new F,y=new F,T=new F;for(let E=0;E<e.length;E+=3)d(e[E+0],v),d(e[E+1],y),d(e[E+2],T),l(v,y,T,M)}function l(M,v,y,T){const E=T+1,b=[];for(let A=0;A<=E;A++){b[A]=[];const S=M.clone().lerp(y,A/E),w=v.clone().lerp(y,A/E),R=E-A;for(let C=0;C<=R;C++)C===0&&A===E?b[A][C]=S:b[A][C]=S.clone().lerp(w,C/R)}for(let A=0;A<E;A++)for(let S=0;S<2*(E-A)-1;S++){const w=Math.floor(S/2);S%2===0?(f(b[A][w+1]),f(b[A+1][w]),f(b[A][w])):(f(b[A][w+1]),f(b[A+1][w+1]),f(b[A+1][w]))}}function u(M){const v=new F;for(let y=0;y<o.length;y+=3)v.x=o[y+0],v.y=o[y+1],v.z=o[y+2],v.normalize().multiplyScalar(M),o[y+0]=v.x,o[y+1]=v.y,o[y+2]=v.z}function c(){const M=new F;for(let v=0;v<o.length;v+=3){M.x=o[v+0],M.y=o[v+1],M.z=o[v+2];const y=h(M)/2/Math.PI+.5,T=m(M)/Math.PI+.5;r.push(y,1-T)}g(),p()}function p(){for(let M=0;M<r.length;M+=6){const v=r[M+0],y=r[M+2],T=r[M+4],E=Math.max(v,y,T),b=Math.min(v,y,T);E>.9&&b<.1&&(v<.2&&(r[M+0]+=1),y<.2&&(r[M+2]+=1),T<.2&&(r[M+4]+=1))}}function f(M){o.push(M.x,M.y,M.z)}function d(M,v){const y=M*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function g(){const M=new F,v=new F,y=new F,T=new F,E=new pt,b=new pt,A=new pt;for(let S=0,w=0;S<o.length;S+=9,w+=6){M.set(o[S+0],o[S+1],o[S+2]),v.set(o[S+3],o[S+4],o[S+5]),y.set(o[S+6],o[S+7],o[S+8]),E.set(r[w+0],r[w+1]),b.set(r[w+2],r[w+3]),A.set(r[w+4],r[w+5]),T.copy(M).add(v).add(y).divideScalar(3);const R=h(T);x(E,w+0,M,R),x(b,w+2,v,R),x(A,w+4,y,R)}}function x(M,v,y,T){T<0&&M.x===1&&(r[v]=M.x-1),y.x===0&&y.z===0&&(r[v]=T/2/Math.PI+.5)}function h(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ba(t.vertices,t.indices,t.radius,t.details)}}class wd extends Ba{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wd(t.radius,t.detail)}}class xl extends gl{constructor(t){super(t),this.uuid=ls(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new gl().fromJSON(s))}return this}}const Ov={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=Nm(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,u,c,p,f,d;if(n&&(o=Vv(i,t,o,e)),i.length>80*e){a=u=i[0],l=c=i[1];for(let g=e;g<s;g+=e)p=i[g],f=i[g+1],p<a&&(a=p),f<l&&(l=f),p>u&&(u=p),f>c&&(c=f);d=Math.max(u-a,c-l),d=d!==0?32767/d:0}return Aa(o,r,e,a,l,d,0),r}};function Nm(i,t,e,n,s){let o,r;if(s===tM(i,t,e,n)>0)for(o=t;o<e;o+=n)r=E0(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=E0(o,i[o],i[o+1],r);return r&&Wl(r,r.next)&&(Ca(r),r=r.next),r}function ho(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Wl(e,e.next)||ze(e.prev,e,e.next)===0)){if(Ca(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Aa(i,t,e,n,s,o,r){if(!i)return;!r&&o&&Zv(i,n,s,o);let a=i,l,u;for(;i.prev!==i.next;){if(l=i.prev,u=i.next,o?Gv(i,n,s,o):Bv(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(u.i/e|0),Ca(i),i=u.next,a=u.next;continue}if(i=u,i===a){r?r===1?(i=kv(ho(i),t,e),Aa(i,t,e,n,s,o,2)):r===2&&Hv(i,t,e,n,s,o):Aa(ho(i),t,e,n,s,o,1);break}}}function Bv(i){const t=i.prev,e=i,n=i.next;if(ze(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,u=n.y,c=s<o?s<r?s:r:o<r?o:r,p=a<l?a<u?a:u:l<u?l:u,f=s>o?s>r?s:r:o>r?o:r,d=a>l?a>u?a:u:l>u?l:u;let g=n.next;for(;g!==t;){if(g.x>=c&&g.x<=f&&g.y>=p&&g.y<=d&&$o(s,a,o,l,r,u,g.x,g.y)&&ze(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Gv(i,t,e,n){const s=i.prev,o=i,r=i.next;if(ze(s,o,r)>=0)return!1;const a=s.x,l=o.x,u=r.x,c=s.y,p=o.y,f=r.y,d=a<l?a<u?a:u:l<u?l:u,g=c<p?c<f?c:f:p<f?p:f,x=a>l?a>u?a:u:l>u?l:u,h=c>p?c>f?c:f:p>f?p:f,m=Qh(d,g,t,e,n),M=Qh(x,h,t,e,n);let v=i.prevZ,y=i.nextZ;for(;v&&v.z>=m&&y&&y.z<=M;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=h&&v!==s&&v!==r&&$o(a,c,l,p,u,f,v.x,v.y)&&ze(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=x&&y.y>=g&&y.y<=h&&y!==s&&y!==r&&$o(a,c,l,p,u,f,y.x,y.y)&&ze(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=h&&v!==s&&v!==r&&$o(a,c,l,p,u,f,v.x,v.y)&&ze(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=h&&y!==s&&y!==r&&$o(a,c,l,p,u,f,y.x,y.y)&&ze(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function kv(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!Wl(s,o)&&Fm(s,n,n.next,o)&&Ra(s,o)&&Ra(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Ca(n),Ca(n.next),n=i=o),n=n.next}while(n!==i);return ho(n)}function Hv(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Kv(r,a)){let l=Om(r,a);r=ho(r,r.next),l=ho(l,l.next),Aa(r,t,e,n,s,o,0),Aa(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function Vv(i,t,e,n){const s=[];let o,r,a,l,u;for(o=0,r=t.length;o<r;o++)a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,u=Nm(i,a,l,n,!1),u===u.next&&(u.steiner=!0),s.push(jv(u));for(s.sort(Wv),o=0;o<s.length;o++)e=Xv(s[o],e);return e}function Wv(i,t){return i.x-t.x}function Xv(i,t){const e=qv(i,t);if(!e)return t;const n=Om(e,i);return ho(n,n.next),ho(e,e.next)}function qv(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,u=s.y;let c=1/0,p;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&$o(r<u?o:n,r,l,u,r<u?n:o,r,e.x,e.y)&&(p=Math.abs(r-e.y)/(o-e.x),Ra(e,i)&&(p<c||p===c&&(e.x>s.x||e.x===s.x&&Yv(s,e)))&&(s=e,c=p)),e=e.next;while(e!==a);return s}function Yv(i,t){return ze(i.prev,i,t.prev)<0&&ze(t.next,i,i.next)<0}function Zv(i,t,e,n){let s=i;do s.z===0&&(s.z=Qh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,$v(s)}function $v(i){let t,e,n,s,o,r,a,l,u=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<u&&(a++,n=n.nextZ,!!n);t++);for(l=u;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,u*=2}while(r>1);return i}function Qh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function jv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function $o(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function Kv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Jv(i,t)&&(Ra(i,t)&&Ra(t,i)&&Qv(i,t)&&(ze(i.prev,i,t.prev)||ze(i,t.prev,t))||Wl(i,t)&&ze(i.prev,i,i.next)>0&&ze(t.prev,t,t.next)>0)}function ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Wl(i,t){return i.x===t.x&&i.y===t.y}function Fm(i,t,e,n){const s=Mc(ze(i,t,e)),o=Mc(ze(i,t,n)),r=Mc(ze(e,n,i)),a=Mc(ze(e,n,t));return!!(s!==o&&r!==a||s===0&&vc(i,e,t)||o===0&&vc(i,n,t)||r===0&&vc(e,i,n)||a===0&&vc(e,t,n))}function vc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Mc(i){return i>0?1:i<0?-1:0}function Jv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Fm(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ra(i,t){return ze(i.prev,i,i.next)<0?ze(i,t,i.next)>=0&&ze(i,i.prev,t)>=0:ze(i,t,i.prev)<0||ze(i,i.next,t)<0}function Qv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Om(i,t){const e=new tf(i.i,i.x,i.y),n=new tf(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function E0(i,t,e,n){const s=new tf(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ca(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function tf(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function tM(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class ga{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return ga.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];A0(t),R0(n,t);let r=t.length;e.forEach(A0);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,R0(n,e[l]);const a=Ov.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function A0(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function R0(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Rr extends Ba{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Rr(t.radius,t.detail)}}class Sd extends Ba{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Sd(t.radius,t.detail)}}class he extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),u=a+1,c=l+1,p=t/a,f=e/l,d=[],g=[],x=[],h=[];for(let m=0;m<c;m++){const M=m*f-r;for(let v=0;v<u;v++){const y=v*p-o;g.push(y,-M,0),x.push(0,0,1),h.push(v/a),h.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const v=M+u*m,y=M+u*(m+1),T=M+1+u*(m+1),E=M+1+u*m;d.push(v,y,E),d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.width,t.height,t.widthSegments,t.heightSegments)}}class Pa extends Ae{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],u=[],c=[];let p=t;const f=(e-t)/s,d=new F,g=new pt;for(let x=0;x<=s;x++){for(let h=0;h<=n;h++){const m=o+h/n*r;d.x=p*Math.cos(m),d.y=p*Math.sin(m),l.push(d.x,d.y,d.z),u.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,c.push(g.x,g.y)}p+=f}for(let x=0;x<s;x++){const h=x*(n+1);for(let m=0;m<n;m++){const M=m+h,v=M,y=M+n+1,T=M+n+2,E=M+1;a.push(v,y,E),a.push(y,T,E)}}this.setIndex(a),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ia extends Ae{constructor(t=new xl([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)u(t);else for(let c=0;c<t.length;c++)u(t[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Vt(s,3)),this.setAttribute("normal",new Vt(o,3)),this.setAttribute("uv",new Vt(r,2));function u(c){const p=s.length/3,f=c.extractPoints(e);let d=f.shape;const g=f.holes;ga.isClockWise(d)===!1&&(d=d.reverse());for(let h=0,m=g.length;h<m;h++){const M=g[h];ga.isClockWise(M)===!0&&(g[h]=M.reverse())}const x=ga.triangulateShape(d,g);for(let h=0,m=g.length;h<m;h++){const M=g[h];d=d.concat(M)}for(let h=0,m=d.length;h<m;h++){const M=d[h];s.push(M.x,M.y,0),o.push(0,0,1),r.push(M.x,M.y)}for(let h=0,m=x.length;h<m;h++){const M=x[h],v=M[0]+p,y=M[1]+p,T=M[2]+p;n.push(v,y,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return eM(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new Ia(n,t.curveSegments)}}function eM(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Y extends Ae{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let u=0;const c=[],p=new F,f=new F,d=[],g=[],x=[],h=[];for(let m=0;m<=n;m++){const M=[],v=m/n;let y=0;m===0&&r===0?y=.5/e:m===n&&l===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){const E=T/e;p.x=-t*Math.cos(s+E*o)*Math.sin(r+v*a),p.y=t*Math.cos(r+v*a),p.z=t*Math.sin(s+E*o)*Math.sin(r+v*a),g.push(p.x,p.y,p.z),f.copy(p).normalize(),x.push(f.x,f.y,f.z),h.push(E+y,1-v),M.push(u++)}c.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){const v=c[m][M+1],y=c[m][M],T=c[m+1][M],E=c[m+1][M+1];(m!==0||r>0)&&d.push(v,y,E),(m!==n-1||l<Math.PI)&&d.push(y,T,E)}this.setIndex(d),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Y(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pe extends Ae{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],l=[],u=[],c=new F,p=new F,f=new F;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const x=g/s*o,h=d/n*Math.PI*2;p.x=(t+e*Math.cos(h))*Math.cos(x),p.y=(t+e*Math.cos(h))*Math.sin(x),p.z=e*Math.sin(h),a.push(p.x,p.y,p.z),c.x=t*Math.cos(x),c.y=t*Math.sin(x),f.subVectors(p,c).normalize(),l.push(f.x,f.y,f.z),u.push(g/s),u.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,h=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,M=(s+1)*d+g;r.push(x,h,M),r.push(h,m,M)}this.setIndex(r),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class gn extends Ae{constructor(t=new Um(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new F,l=new F,u=new pt;let c=new F;const p=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Vt(p,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(d,2));function x(){for(let v=0;v<e;v++)h(v);h(o===!1?e:0),M(),m()}function h(v){c=t.getPointAt(v/e,c);const y=r.normals[v],T=r.binormals[v];for(let E=0;E<=s;E++){const b=E/s*Math.PI*2,A=Math.sin(b),S=-Math.cos(b);l.x=S*y.x+A*T.x,l.y=S*y.y+A*T.y,l.z=S*y.z+A*T.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=c.x+n*l.x,a.y=c.y+n*l.y,a.z=c.z+n*l.z,p.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=e;v++)for(let y=1;y<=s;y++){const T=(s+1)*(v-1)+(y-1),E=(s+1)*v+(y-1),b=(s+1)*v+y,A=(s+1)*(v-1)+y;g.push(T,E,A),g.push(E,b,A)}}function M(){for(let v=0;v<=e;v++)for(let y=0;y<=s;y++)u.x=v/e,u.y=y/s,d.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new gn(new Jh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class q extends Us{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pm,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nM extends Us{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class iM extends Us{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class bd extends ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new it(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class sM extends bd{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ru=new ge,C0=new F,P0=new F;class Bm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gd,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;C0.setFromMatrixPosition(t.matrixWorld),e.position.copy(C0),P0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(P0),e.updateMatrixWorld(),Ru.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ru)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const I0=new ge,$r=new F,Cu=new F;class oM extends Bm{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),$r.setFromMatrixPosition(t.matrixWorld),n.position.copy($r),Cu.copy(n.position),Cu.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Cu),n.updateMatrixWorld(),s.makeTranslation(-$r.x,-$r.y,-$r.z),I0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(I0)}}class Ur extends bd{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new oM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Td extends bm{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,r=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class rM extends Bm{constructor(){super(new Td(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xl extends bd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.target=new ce,this.shadow=new rM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class aM extends ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Gm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=L0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=L0();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function L0(){return performance.now()}function D0(i,t,e,n){const s=cM(n);switch(e){case cm:return i*t;case um:return i*t;case hm:return i*t*2;case ud:return i*t/s.components*s.byteLength;case hd:return i*t/s.components*s.byteLength;case fm:return i*t*2/s.components*s.byteLength;case fd:return i*t*2/s.components*s.byteLength;case lm:return i*t*3/s.components*s.byteLength;case Ai:return i*t*4/s.components*s.byteLength;case dd:return i*t*4/s.components*s.byteLength;case Oc:case Bc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gc:case kc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Th:case Ah:return Math.max(i,16)*Math.max(t,8)/4;case bh:case Eh:return Math.max(i,8)*Math.max(t,8)/2;case Rh:case Ch:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ph:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ih:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Dh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Uh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case zh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Nh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Oh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Bh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Gh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case kh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Hh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Vh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Hc:case Xh:case qh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case dm:case Yh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Zh:case $h:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cM(i){switch(i){case ds:case om:return{byteLength:1,components:1};case Ea:case rm:case cs:return{byteLength:2,components:1};case cd:case ld:return{byteLength:2,components:4};case uo:case ad:case Vi:return{byteLength:4,components:1};case am:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function km(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function lM(i){const t=new WeakMap;function e(a,l){const u=a.array,c=a.usage,p=u.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,u,c),a.onUploadCallback();let d;if(u instanceof Float32Array)d=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=i.SHORT;else if(u instanceof Uint32Array)d=i.UNSIGNED_INT;else if(u instanceof Int32Array)d=i.INT;else if(u instanceof Int8Array)d=i.BYTE;else if(u instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,u){const c=l.array,p=l.updateRanges;if(i.bindBuffer(u,a),p.length===0)i.bufferSubData(u,0,c);else{p.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<p.length;d++){const g=p[f],x=p[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,p[f]=x)}p.length=f+1;for(let d=0,g=p.length;d<g;d++){const x=p[d];i.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,l),u.version=a.version}}return{get:s,remove:o,update:r}}var uM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,MM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,SM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,DM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,UM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GM="gl_FragColor = linearToOutputTexel( gl_FragColor );",kM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$M=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,JM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,n_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,i_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,c_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,l_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,u_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,h_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,M_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,__=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,E_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,R_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,C_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,D_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,B_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,q_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Y_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Z_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,K_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Q_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ty=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ey=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ny=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ly=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,My=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_y=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,by=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ty=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ey=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ay=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ry=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Py=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Iy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ly=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Uy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ny=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Oy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,By=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ky=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:uM,alphahash_pars_fragment:hM,alphamap_fragment:fM,alphamap_pars_fragment:dM,alphatest_fragment:pM,alphatest_pars_fragment:mM,aomap_fragment:gM,aomap_pars_fragment:xM,batching_pars_vertex:vM,batching_vertex:MM,begin_vertex:_M,beginnormal_vertex:yM,bsdfs:wM,iridescence_fragment:SM,bumpmap_pars_fragment:bM,clipping_planes_fragment:TM,clipping_planes_pars_fragment:EM,clipping_planes_pars_vertex:AM,clipping_planes_vertex:RM,color_fragment:CM,color_pars_fragment:PM,color_pars_vertex:IM,color_vertex:LM,common:DM,cube_uv_reflection_fragment:UM,defaultnormal_vertex:zM,displacementmap_pars_vertex:NM,displacementmap_vertex:FM,emissivemap_fragment:OM,emissivemap_pars_fragment:BM,colorspace_fragment:GM,colorspace_pars_fragment:kM,envmap_fragment:HM,envmap_common_pars_fragment:VM,envmap_pars_fragment:WM,envmap_pars_vertex:XM,envmap_physical_pars_fragment:n_,envmap_vertex:qM,fog_vertex:YM,fog_pars_vertex:ZM,fog_fragment:$M,fog_pars_fragment:jM,gradientmap_pars_fragment:KM,lightmap_pars_fragment:JM,lights_lambert_fragment:QM,lights_lambert_pars_fragment:t_,lights_pars_begin:e_,lights_toon_fragment:i_,lights_toon_pars_fragment:s_,lights_phong_fragment:o_,lights_phong_pars_fragment:r_,lights_physical_fragment:a_,lights_physical_pars_fragment:c_,lights_fragment_begin:l_,lights_fragment_maps:u_,lights_fragment_end:h_,logdepthbuf_fragment:f_,logdepthbuf_pars_fragment:d_,logdepthbuf_pars_vertex:p_,logdepthbuf_vertex:m_,map_fragment:g_,map_pars_fragment:x_,map_particle_fragment:v_,map_particle_pars_fragment:M_,metalnessmap_fragment:__,metalnessmap_pars_fragment:y_,morphinstance_vertex:w_,morphcolor_vertex:S_,morphnormal_vertex:b_,morphtarget_pars_vertex:T_,morphtarget_vertex:E_,normal_fragment_begin:A_,normal_fragment_maps:R_,normal_pars_fragment:C_,normal_pars_vertex:P_,normal_vertex:I_,normalmap_pars_fragment:L_,clearcoat_normal_fragment_begin:D_,clearcoat_normal_fragment_maps:U_,clearcoat_pars_fragment:z_,iridescence_pars_fragment:N_,opaque_fragment:F_,packing:O_,premultiplied_alpha_fragment:B_,project_vertex:G_,dithering_fragment:k_,dithering_pars_fragment:H_,roughnessmap_fragment:V_,roughnessmap_pars_fragment:W_,shadowmap_pars_fragment:X_,shadowmap_pars_vertex:q_,shadowmap_vertex:Y_,shadowmask_pars_fragment:Z_,skinbase_vertex:$_,skinning_pars_vertex:j_,skinning_vertex:K_,skinnormal_vertex:J_,specularmap_fragment:Q_,specularmap_pars_fragment:ty,tonemapping_fragment:ey,tonemapping_pars_fragment:ny,transmission_fragment:iy,transmission_pars_fragment:sy,uv_pars_fragment:oy,uv_pars_vertex:ry,uv_vertex:ay,worldpos_vertex:cy,background_vert:ly,background_frag:uy,backgroundCube_vert:hy,backgroundCube_frag:fy,cube_vert:dy,cube_frag:py,depth_vert:my,depth_frag:gy,distanceRGBA_vert:xy,distanceRGBA_frag:vy,equirect_vert:My,equirect_frag:_y,linedashed_vert:yy,linedashed_frag:wy,meshbasic_vert:Sy,meshbasic_frag:by,meshlambert_vert:Ty,meshlambert_frag:Ey,meshmatcap_vert:Ay,meshmatcap_frag:Ry,meshnormal_vert:Cy,meshnormal_frag:Py,meshphong_vert:Iy,meshphong_frag:Ly,meshphysical_vert:Dy,meshphysical_frag:Uy,meshtoon_vert:zy,meshtoon_frag:Ny,points_vert:Fy,points_frag:Oy,shadow_vert:By,shadow_frag:Gy,sprite_vert:ky,sprite_frag:Hy},xt={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Fi={basic:{uniforms:wn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:wn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new it(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:wn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:wn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:wn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new it(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:wn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:wn([xt.points,xt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:wn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:wn([xt.common,xt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:wn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:wn([xt.sprite,xt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:wn([xt.common,xt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:wn([xt.lights,xt.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Fi.physical={uniforms:wn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const _c={r:0,b:0,g:0},ks=new Xi,Vy=new ge;function Wy(i,t,e,n,s,o,r){const a=new it(0);let l=o===!0?0:1,u,c,p=null,f=0,d=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function x(v){let y=!1;const T=g(v);T===null?m(a,l):T&&T.isColor&&(m(T,1),y=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function h(v,y){const T=g(y);T&&(T.isCubeTexture||T.mapping===Vl)?(c===void 0&&(c=new P(new Fa(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Ar(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),ks.copy(y.backgroundRotation),ks.x*=-1,ks.y*=-1,ks.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),c.material.uniforms.envMap.value=T,c.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vy.makeRotationFromEuler(ks)),c.material.toneMapped=ue.getTransfer(T.colorSpace)!==ye,(p!==T||f!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,p=T,f=T.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(u===void 0&&(u=new P(new he(2,2),new Xn({name:"BackgroundMaterial",uniforms:Ar(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Ds,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=T,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=ue.getTransfer(T.colorSpace)!==ye,T.matrixAutoUpdate===!0&&T.updateMatrix(),u.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||f!==T.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,p=T,f=T.version,d=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function m(v,y){v.getRGB(_c,Sm(i)),n.buffers.color.setClear(_c.r,_c.g,_c.b,y,r)}function M(){c!==void 0&&(c.geometry.dispose(),c.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:x,addToRenderList:h,dispose:M}}function Xy(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let o=s,r=!1;function a(w,R,C,D,U){let H=!1;const G=p(D,C,R);o!==G&&(o=G,u(o.object)),H=d(w,D,C,U),H&&g(w,D,C,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(H||r)&&(r=!1,y(w,R,C,D),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function u(w){return i.bindVertexArray(w)}function c(w){return i.deleteVertexArray(w)}function p(w,R,C){const D=C.wireframe===!0;let U=n[w.id];U===void 0&&(U={},n[w.id]=U);let H=U[R.id];H===void 0&&(H={},U[R.id]=H);let G=H[D];return G===void 0&&(G=f(l()),H[D]=G),G}function f(w){const R=[],C=[],D=[];for(let U=0;U<e;U++)R[U]=0,C[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:C,attributeDivisors:D,object:w,attributes:{},index:null}}function d(w,R,C,D){const U=o.attributes,H=R.attributes;let G=0;const O=C.getAttributes();for(const k in O)if(O[k].location>=0){const ct=U[k];let ft=H[k];if(ft===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(ft=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(ft=w.instanceColor)),ct===void 0||ct.attribute!==ft||ft&&ct.data!==ft.data)return!0;G++}return o.attributesNum!==G||o.index!==D}function g(w,R,C,D){const U={},H=R.attributes;let G=0;const O=C.getAttributes();for(const k in O)if(O[k].location>=0){let ct=H[k];ct===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(ct=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(ct=w.instanceColor));const ft={};ft.attribute=ct,ct&&ct.data&&(ft.data=ct.data),U[k]=ft,G++}o.attributes=U,o.attributesNum=G,o.index=D}function x(){const w=o.newAttributes;for(let R=0,C=w.length;R<C;R++)w[R]=0}function h(w){m(w,0)}function m(w,R){const C=o.newAttributes,D=o.enabledAttributes,U=o.attributeDivisors;C[w]=1,D[w]===0&&(i.enableVertexAttribArray(w),D[w]=1),U[w]!==R&&(i.vertexAttribDivisor(w,R),U[w]=R)}function M(){const w=o.newAttributes,R=o.enabledAttributes;for(let C=0,D=R.length;C<D;C++)R[C]!==w[C]&&(i.disableVertexAttribArray(C),R[C]=0)}function v(w,R,C,D,U,H,G){G===!0?i.vertexAttribIPointer(w,R,C,U,H):i.vertexAttribPointer(w,R,C,D,U,H)}function y(w,R,C,D){x();const U=D.attributes,H=C.getAttributes(),G=R.defaultAttributeValues;for(const O in H){const k=H[O];if(k.location>=0){let nt=U[O];if(nt===void 0&&(O==="instanceMatrix"&&w.instanceMatrix&&(nt=w.instanceMatrix),O==="instanceColor"&&w.instanceColor&&(nt=w.instanceColor)),nt!==void 0){const ct=nt.normalized,ft=nt.itemSize,Ct=t.get(nt);if(Ct===void 0)continue;const Wt=Ct.buffer,et=Ct.type,ut=Ct.bytesPerElement,yt=et===i.INT||et===i.UNSIGNED_INT||nt.gpuType===ad;if(nt.isInterleavedBufferAttribute){const mt=nt.data,It=mt.stride,Nt=nt.offset;if(mt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<k.locationSize;Kt++)m(k.location+Kt,mt.meshPerAttribute);w.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Kt=0;Kt<k.locationSize;Kt++)h(k.location+Kt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let Kt=0;Kt<k.locationSize;Kt++)v(k.location+Kt,ft/k.locationSize,et,ct,It*ut,(Nt+ft/k.locationSize*Kt)*ut,yt)}else{if(nt.isInstancedBufferAttribute){for(let mt=0;mt<k.locationSize;mt++)m(k.location+mt,nt.meshPerAttribute);w.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let mt=0;mt<k.locationSize;mt++)h(k.location+mt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let mt=0;mt<k.locationSize;mt++)v(k.location+mt,ft/k.locationSize,et,ct,ft*ut,ft/k.locationSize*mt*ut,yt)}}else if(G!==void 0){const ct=G[O];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(k.location,ct);break;case 3:i.vertexAttrib3fv(k.location,ct);break;case 4:i.vertexAttrib4fv(k.location,ct);break;default:i.vertexAttrib1fv(k.location,ct)}}}}M()}function T(){A();for(const w in n){const R=n[w];for(const C in R){const D=R[C];for(const U in D)c(D[U].object),delete D[U];delete R[C]}delete n[w]}}function E(w){if(n[w.id]===void 0)return;const R=n[w.id];for(const C in R){const D=R[C];for(const U in D)c(D[U].object),delete D[U];delete R[C]}delete n[w.id]}function b(w){for(const R in n){const C=n[R];if(C[w.id]===void 0)continue;const D=C[w.id];for(const U in D)c(D[U].object),delete D[U];delete C[w.id]}}function A(){S(),r=!0,o!==s&&(o=s,u(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:h,disableUnusedAttributes:M}}function qy(i,t,e){let n;function s(u){n=u}function o(u,c){i.drawArrays(n,u,c),e.update(c,n,1)}function r(u,c,p){p!==0&&(i.drawArraysInstanced(n,u,c,p),e.update(c,n,p))}function a(u,c,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,c,0,p);let d=0;for(let g=0;g<p;g++)d+=c[g];e.update(d,n,1)}function l(u,c,p,f){if(p===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<u.length;g++)r(u[g],c[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,u,0,c,0,f,0,p);let g=0;for(let x=0;x<p;x++)g+=c[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Yy(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(b){return!(b!==Ai&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const A=b===cs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==ds&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Vi&&!A)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const p=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:h,maxAttributes:m,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:T,maxSamples:E}}function Zy(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new Xs,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const d=p.length!==0||f||n!==0||s;return s=f,n=p.length,d},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(p,f){e=c(p,f,0)},this.setState=function(p,f,d){const g=p.clippingPlanes,x=p.clipIntersection,h=p.clipShadows,m=i.get(p);if(!s||g===null||g.length===0||o&&!h)o?c(null):u();else{const M=o?0:n,v=M*4;let y=m.clippingState||null;l.value=y,y=c(g,f,v,d);for(let T=0;T!==v;++T)y[T]=e[T];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(p,f,d,g){const x=p!==null?p.length:0;let h=null;if(x!==0){if(h=l.value,g!==!0||h===null){const m=d+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(h===null||h.length<m)&&(h=new Float32Array(m));for(let v=0,y=d;v!==x;++v,y+=4)r.copy(p[v]).applyMatrix4(M,a),r.normal.toArray(h,y),h[y+3]=r.constant}l.value=h,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,h}}function $y(i){let t=new WeakMap;function e(r,a){return a===yh?r.mapping=yr:a===wh&&(r.mapping=wr),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===yh||a===wh)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const u=new Mv(l.height);return u.fromEquirectangularTexture(i,r),t.set(r,u),r.addEventListener("dispose",s),e(u.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const jo=4,U0=[.125,.215,.35,.446,.526,.582],to=20,Pu=new Td,z0=new it;let Iu=null,Lu=0,Du=0,Uu=!1;const qs=(1+Math.sqrt(5))/2,No=1/qs,N0=[new F(-qs,No,0),new F(qs,No,0),new F(-No,0,qs),new F(No,0,qs),new F(0,qs,-No),new F(0,qs,No),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class F0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Iu=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Du=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=G0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=B0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Iu,Lu,Du),this._renderer.xr.enabled=Uu,t.scissorTest=!1,yc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yr||t.mapping===wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Iu=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Du=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Hi,minFilter:Hi,generateMipmaps:!1,type:cs,format:Ai,colorSpace:Er,depthBuffer:!1},s=O0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=O0(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jy(o)),this._blurMaterial=Ky(o,t,e)}return s}_compileMaterial(t){const e=new P(this._lodPlanes[0],t);this._renderer.compile(e,Pu)}_sceneToCubeUV(t,e,n,s){const a=new ei(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,p=c.autoClear,f=c.toneMapping;c.getClearColor(z0),c.toneMapping=Ls,c.autoClear=!1;const d=new $({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new P(new Fa,d);let x=!1;const h=t.background;h?h.isColor&&(d.color.copy(h),t.background=null,x=!0):(d.color.copy(z0),x=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const v=this._cubeSize;yc(s,M*v,m>2?v:0,v,v),c.setRenderTarget(s),x&&c.render(g,a),c.render(t,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=p,t.background=h}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===yr||t.mapping===wr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=G0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=B0());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new P(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;yc(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Pu)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=N0[(s-o-1)%N0.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,u=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,p=new P(this._lodPlanes[s],u),f=u.uniforms,d=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*to-1),x=o/g,h=isFinite(o)?1+Math.floor(c*x):to;h>to&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${to}`);const m=[];let M=0;for(let b=0;b<to;++b){const A=b/x,S=Math.exp(-A*A/2);m.push(S),b===0?M+=S:b<h&&(M+=2*S)}for(let b=0;b<m.length;b++)m[b]=m[b]/M;f.envMap.value=t.texture,f.samples.value=h,f.weights.value=m,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const y=this._sizeLods[s],T=3*y*(s>v-jo?s-v+jo:0),E=4*(this._cubeSize-y);yc(e,T,E,3*y,2*y),l.setRenderTarget(e),l.render(p,Pu)}}function jy(i){const t=[],e=[],n=[];let s=i;const o=i-jo+1+U0.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>i-jo?l=U0[r-i+jo-1]:r===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,p=1+u,f=[c,c,p,c,p,p,c,c,p,p,c,p],d=6,g=6,x=3,h=2,m=1,M=new Float32Array(x*g*d),v=new Float32Array(h*g*d),y=new Float32Array(m*g*d);for(let E=0;E<d;E++){const b=E%3*2/3-1,A=E>2?0:-1,S=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];M.set(S,x*g*E),v.set(f,h*g*E);const w=[E,E,E,E,E,E];y.set(w,m*g*E)}const T=new Ae;T.setAttribute("position",new Ne(M,x)),T.setAttribute("uv",new Ne(v,h)),T.setAttribute("faceIndex",new Ne(y,m)),t.push(T),s>jo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function O0(i,t,e){const n=new Ri(i,t,e);return n.texture.mapping=Vl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yc(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ky(i,t,e){const n=new Float32Array(to),s=new F(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:to,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function B0(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function G0(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function Ed(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jy(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===yh||l===wh,c=l===yr||l===wr;if(u||c){let p=t.get(a);const f=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new F0(i)),p=u?e.fromEquirectangular(a,p):e.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),p.texture;if(p!==void 0)return p.texture;{const d=a.image;return u&&d&&d.height>0||c&&d&&s(d)?(e===null&&(e=new F0(i)),p=u?e.fromEquirectangular(a):e.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),a.addEventListener("dispose",o),p.texture):null}}}return a}function s(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Qy(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Wo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function t1(i,t,e,n){const s={},o=new WeakMap;function r(p){const f=p.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete s[f.id];const d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(p,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function l(p){const f=p.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function u(p){const f=[],d=p.index,g=p.attributes.position;let x=0;if(d!==null){const M=d.array;x=d.version;for(let v=0,y=M.length;v<y;v+=3){const T=M[v+0],E=M[v+1],b=M[v+2];f.push(T,E,E,b,b,T)}}else if(g!==void 0){const M=g.array;x=g.version;for(let v=0,y=M.length/3-1;v<y;v+=3){const T=v+0,E=v+1,b=v+2;f.push(T,E,E,b,b,T)}}else return;const h=new(gm(f)?wm:ym)(f,1);h.version=x;const m=o.get(p);m&&t.remove(m),o.set(p,h)}function c(p){const f=o.get(p);if(f){const d=p.index;d!==null&&f.version<d.version&&u(p)}else u(p);return o.get(p)}return{get:a,update:l,getWireframeAttribute:c}}function e1(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function l(f,d){i.drawElements(n,d,o,f*r),e.update(d,n,1)}function u(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,o,f*r,g),e.update(d,n,g))}function c(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,f,0,g);let h=0;for(let m=0;m<g;m++)h+=d[m];e.update(h,n,1)}function p(f,d,g,x){if(g===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<f.length;m++)u(f[m]/r,d[m],x[m]);else{h.multiDrawElementsInstancedWEBGL(n,d,0,o,f,0,x,0,g);let m=0;for(let M=0;M<g;M++)m+=d[M]*x[M];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=p}function n1(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function i1(i,t,e){const n=new WeakMap,s=new be;function o(r,a,l){const u=r.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=c!==void 0?c.length:0;let f=n.get(a);if(f===void 0||f.count!==p){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};var d=w;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,h=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),h===!0&&(y=3);let T=a.attributes.position.count*y,E=1;T>t.maxTextureSize&&(E=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const b=new Float32Array(T*E*4*p),A=new vm(b,T,E,p);A.type=Vi,A.needsUpdate=!0;const S=y*4;for(let R=0;R<p;R++){const C=m[R],D=M[R],U=v[R],H=T*E*4*R;for(let G=0;G<C.count;G++){const O=G*S;g===!0&&(s.fromBufferAttribute(C,G),b[H+O+0]=s.x,b[H+O+1]=s.y,b[H+O+2]=s.z,b[H+O+3]=0),x===!0&&(s.fromBufferAttribute(D,G),b[H+O+4]=s.x,b[H+O+5]=s.y,b[H+O+6]=s.z,b[H+O+7]=0),h===!0&&(s.fromBufferAttribute(U,G),b[H+O+8]=s.x,b[H+O+9]=s.y,b[H+O+10]=s.z,b[H+O+11]=U.itemSize===4?s.w:1)}}f={count:p,texture:A,size:new pt(T,E)},n.set(a,f),a.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let h=0;h<u.length;h++)g+=u[h];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function s1(i,t,e,n){let s=new WeakMap;function o(l){const u=n.render.frame,c=l.geometry,p=t.get(l,c);if(s.get(p)!==u&&(t.update(p),s.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return p}function r(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:r}}const Hm=new Mn,k0=new Pm(1,1),Vm=new vm,Wm=new sv,Xm=new Tm,H0=[],V0=[],W0=new Float32Array(16),X0=new Float32Array(9),q0=new Float32Array(4);function zr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=H0[s];if(o===void 0&&(o=new Float32Array(s),H0[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ql(i,t){let e=V0[t];e===void 0&&(e=new Int32Array(t),V0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function o1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function r1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function a1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function c1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function l1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,n))return;q0.set(n),i.uniformMatrix2fv(this.addr,!1,q0),Je(e,n)}}function u1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,n))return;X0.set(n),i.uniformMatrix3fv(this.addr,!1,X0),Je(e,n)}}function h1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,n))return;W0.set(n),i.uniformMatrix4fv(this.addr,!1,W0),Je(e,n)}}function f1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function d1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function p1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function m1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function g1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function x1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function v1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function M1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function _1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(k0.compareFunction=mm,o=k0):o=Hm,e.setTexture2D(t||o,s)}function y1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wm,s)}function w1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Xm,s)}function S1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vm,s)}function b1(i){switch(i){case 5126:return o1;case 35664:return r1;case 35665:return a1;case 35666:return c1;case 35674:return l1;case 35675:return u1;case 35676:return h1;case 5124:case 35670:return f1;case 35667:case 35671:return d1;case 35668:case 35672:return p1;case 35669:case 35673:return m1;case 5125:return g1;case 36294:return x1;case 36295:return v1;case 36296:return M1;case 35678:case 36198:case 36298:case 36306:case 35682:return _1;case 35679:case 36299:case 36307:return y1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return S1}}function T1(i,t){i.uniform1fv(this.addr,t)}function E1(i,t){const e=zr(t,this.size,2);i.uniform2fv(this.addr,e)}function A1(i,t){const e=zr(t,this.size,3);i.uniform3fv(this.addr,e)}function R1(i,t){const e=zr(t,this.size,4);i.uniform4fv(this.addr,e)}function C1(i,t){const e=zr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function P1(i,t){const e=zr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function I1(i,t){const e=zr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function L1(i,t){i.uniform1iv(this.addr,t)}function D1(i,t){i.uniform2iv(this.addr,t)}function U1(i,t){i.uniform3iv(this.addr,t)}function z1(i,t){i.uniform4iv(this.addr,t)}function N1(i,t){i.uniform1uiv(this.addr,t)}function F1(i,t){i.uniform2uiv(this.addr,t)}function O1(i,t){i.uniform3uiv(this.addr,t)}function B1(i,t){i.uniform4uiv(this.addr,t)}function G1(i,t,e){const n=this.cache,s=t.length,o=ql(e,s);Ke(n,o)||(i.uniform1iv(this.addr,o),Je(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Hm,o[r])}function k1(i,t,e){const n=this.cache,s=t.length,o=ql(e,s);Ke(n,o)||(i.uniform1iv(this.addr,o),Je(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Wm,o[r])}function H1(i,t,e){const n=this.cache,s=t.length,o=ql(e,s);Ke(n,o)||(i.uniform1iv(this.addr,o),Je(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Xm,o[r])}function V1(i,t,e){const n=this.cache,s=t.length,o=ql(e,s);Ke(n,o)||(i.uniform1iv(this.addr,o),Je(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Vm,o[r])}function W1(i){switch(i){case 5126:return T1;case 35664:return E1;case 35665:return A1;case 35666:return R1;case 35674:return C1;case 35675:return P1;case 35676:return I1;case 5124:case 35670:return L1;case 35667:case 35671:return D1;case 35668:case 35672:return U1;case 35669:case 35673:return z1;case 5125:return N1;case 36294:return F1;case 36295:return O1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return G1;case 35679:case 36299:case 36307:return k1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return V1}}class X1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=b1(e.type)}}class q1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=W1(e.type)}}class Y1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const zu=/(\w+)(\])?(\[|\.)?/g;function Y0(i,t){i.seq.push(t),i.map[t.id]=t}function Z1(i,t,e){const n=i.name,s=n.length;for(zu.lastIndex=0;;){const o=zu.exec(n),r=zu.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&r+2===s){Y0(e,u===void 0?new X1(a,i,t):new q1(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new Y1(a),Y0(e,p)),e=p}}}class Vc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Z1(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Z0(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const $1=37297;let j1=0;function K1(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const $0=new Yt;function J1(i){ue._getMatrix($0,ue.workingColorSpace,i);const t=`mat3( ${$0.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case cl:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function j0(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+K1(i.getShaderSource(t),r)}else return s}function Q1(i,t){const e=J1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function tw(i,t){let e;switch(t){case Ix:e="Linear";break;case Lx:e="Reinhard";break;case Dx:e="Cineon";break;case im:e="ACESFilmic";break;case zx:e="AgX";break;case Nx:e="Neutral";break;case Ux:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wc=new F;function ew(){ue.getLuminanceCoefficients(wc);const i=wc.x.toFixed(4),t=wc.y.toFixed(4),e=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function iw(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sw(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function sa(i){return i!==""}function K0(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function J0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ow=/^[ \t]*#include +<([\w\d./]+)>/gm;function ef(i){return i.replace(ow,aw)}const rw=new Map;function aw(i,t){let e=$t[t];if(e===void 0){const n=rw.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ef(e)}const cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Q0(i){return i.replace(cw,lw)}function lw(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function tp(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function uw(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tm?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===em?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qi&&(t="SHADOWMAP_TYPE_VSM"),t}function hw(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yr:case wr:t="ENVMAP_TYPE_CUBE";break;case Vl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fw(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wr:t="ENVMAP_MODE_REFRACTION";break}return t}function dw(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nm:t="ENVMAP_BLENDING_MULTIPLY";break;case Cx:t="ENVMAP_BLENDING_MIX";break;case Px:t="ENVMAP_BLENDING_ADD";break}return t}function pw(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function mw(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=uw(e),u=hw(e),c=fw(e),p=dw(e),f=pw(e),d=nw(e),g=iw(o),x=s.createProgram();let h,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sa).join(`
`),h.length>0&&(h+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sa).join(`
`),m.length>0&&(m+=`
`)):(h=[tp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),m=[tp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ls?"#define TONE_MAPPING":"",e.toneMapping!==Ls?$t.tonemapping_pars_fragment:"",e.toneMapping!==Ls?tw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Q1("linearToOutputTexel",e.outputColorSpace),ew(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sa).join(`
`)),r=ef(r),r=K0(r,e),r=J0(r,e),a=ef(a),a=K0(a,e),a=J0(a,e),r=Q0(r),a=Q0(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,h=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,m=["#define varying in",e.glslVersion===Kd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=M+h+r,y=M+m+a,T=Z0(s,s.VERTEX_SHADER,v),E=Z0(s,s.FRAGMENT_SHADER,y);s.attachShader(x,T),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function b(R){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(x).trim(),D=s.getShaderInfoLog(T).trim(),U=s.getShaderInfoLog(E).trim();let H=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,E);else{const O=j0(s,T,"vertex"),k=j0(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+C+`
`+O+`
`+k)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(D===""||U==="")&&(G=!1);G&&(R.diagnostics={runnable:H,programLog:C,vertexShader:{log:D,prefix:h},fragmentShader:{log:U,prefix:m}})}s.deleteShader(T),s.deleteShader(E),A=new Vc(s,x),S=sw(s,x)}let A;this.getUniforms=function(){return A===void 0&&b(this),A};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(x,$1)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=j1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=E,this}let gw=0;class xw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new vw(t),e.set(t,n)),n}}class vw{constructor(t){this.id=gw++,this.code=t,this.usedTimes=0}}function Mw(i,t,e,n,s,o,r){const a=new Mm,l=new xw,u=new Set,c=[],p=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return u.add(S),S===0?"uv":`uv${S}`}function h(S,w,R,C,D){const U=C.fog,H=D.geometry,G=S.isMeshStandardMaterial?C.environment:null,O=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),k=O&&O.mapping===Vl?O.image.height:null,nt=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const ct=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ft=ct!==void 0?ct.length:0;let Ct=0;H.morphAttributes.position!==void 0&&(Ct=1),H.morphAttributes.normal!==void 0&&(Ct=2),H.morphAttributes.color!==void 0&&(Ct=3);let Wt,et,ut,yt;if(nt){const xe=Fi[nt];Wt=xe.vertexShader,et=xe.fragmentShader}else Wt=S.vertexShader,et=S.fragmentShader,l.update(S),ut=l.getVertexShaderID(S),yt=l.getFragmentShaderID(S);const mt=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),Nt=D.isInstancedMesh===!0,Kt=D.isBatchedMesh===!0,De=!!S.map,se=!!S.matcap,He=!!O,B=!!S.aoMap,ci=!!S.lightMap,ee=!!S.bumpMap,ne=!!S.normalMap,zt=!!S.displacementMap,Re=!!S.emissiveMap,Ut=!!S.metalnessMap,N=!!S.roughnessMap,I=S.anisotropy>0,j=S.clearcoat>0,rt=S.dispersion>0,lt=S.iridescence>0,st=S.sheen>0,Lt=S.transmission>0,_t=I&&!!S.anisotropyMap,Tt=j&&!!S.clearcoatMap,oe=j&&!!S.clearcoatNormalMap,dt=j&&!!S.clearcoatRoughnessMap,Et=lt&&!!S.iridescenceMap,Bt=lt&&!!S.iridescenceThicknessMap,Gt=st&&!!S.sheenColorMap,At=st&&!!S.sheenRoughnessMap,ie=!!S.specularMap,Zt=!!S.specularColorMap,Te=!!S.specularIntensityMap,V=Lt&&!!S.transmissionMap,vt=Lt&&!!S.thicknessMap,tt=!!S.gradientMap,at=!!S.alphaMap,St=S.alphaTest>0,wt=!!S.alphaHash,qt=!!S.extensions;let Fe=Ls;S.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Fe=i.toneMapping);const ln={shaderID:nt,shaderType:S.type,shaderName:S.name,vertexShader:Wt,fragmentShader:et,defines:S.defines,customVertexShaderID:ut,customFragmentShaderID:yt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Kt,batchingColor:Kt&&D._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&D.instanceColor!==null,instancingMorph:Nt&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Er,alphaToCoverage:!!S.alphaToCoverage,map:De,matcap:se,envMap:He,envMapMode:He&&O.mapping,envMapCubeUVHeight:k,aoMap:B,lightMap:ci,bumpMap:ee,normalMap:ne,displacementMap:f&&zt,emissiveMap:Re,normalMapObjectSpace:ne&&S.normalMapType===Gx,normalMapTangentSpace:ne&&S.normalMapType===pm,metalnessMap:Ut,roughnessMap:N,anisotropy:I,anisotropyMap:_t,clearcoat:j,clearcoatMap:Tt,clearcoatNormalMap:oe,clearcoatRoughnessMap:dt,dispersion:rt,iridescence:lt,iridescenceMap:Et,iridescenceThicknessMap:Bt,sheen:st,sheenColorMap:Gt,sheenRoughnessMap:At,specularMap:ie,specularColorMap:Zt,specularIntensityMap:Te,transmission:Lt,transmissionMap:V,thicknessMap:vt,gradientMap:tt,opaque:S.transparent===!1&&S.blending===sr&&S.alphaToCoverage===!1,alphaMap:at,alphaTest:St,alphaHash:wt,combine:S.combine,mapUv:De&&x(S.map.channel),aoMapUv:B&&x(S.aoMap.channel),lightMapUv:ci&&x(S.lightMap.channel),bumpMapUv:ee&&x(S.bumpMap.channel),normalMapUv:ne&&x(S.normalMap.channel),displacementMapUv:zt&&x(S.displacementMap.channel),emissiveMapUv:Re&&x(S.emissiveMap.channel),metalnessMapUv:Ut&&x(S.metalnessMap.channel),roughnessMapUv:N&&x(S.roughnessMap.channel),anisotropyMapUv:_t&&x(S.anisotropyMap.channel),clearcoatMapUv:Tt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:At&&x(S.sheenRoughnessMap.channel),specularMapUv:ie&&x(S.specularMap.channel),specularColorMapUv:Zt&&x(S.specularColorMap.channel),specularIntensityMapUv:Te&&x(S.specularIntensityMap.channel),transmissionMapUv:V&&x(S.transmissionMap.channel),thicknessMapUv:vt&&x(S.thicknessMap.channel),alphaMapUv:at&&x(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ne||I),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(De||at),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:It,skinning:D.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Ct,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:De&&S.map.isVideoTexture===!0&&ue.getTransfer(S.map.colorSpace)===ye,decodeVideoTextureEmissive:Re&&S.emissiveMap.isVideoTexture===!0&&ue.getTransfer(S.emissiveMap.colorSpace)===ye,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Pt,flipSided:S.side===vn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:qt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&S.extensions.multiDraw===!0||Kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ln.vertexUv1s=u.has(1),ln.vertexUv2s=u.has(2),ln.vertexUv3s=u.has(3),u.clear(),ln}function m(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)w.push(R),w.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(M(w,S),v(w,S),w.push(i.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function M(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function v(S,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const w=g[S.type];let R;if(w){const C=Fi[w];R=fl.clone(C.uniforms)}else R=S.uniforms;return R}function T(S,w){let R;for(let C=0,D=c.length;C<D;C++){const U=c[C];if(U.cacheKey===w){R=U,++R.usedTimes;break}}return R===void 0&&(R=new mw(i,w,S,o),c.push(R)),R}function E(S){if(--S.usedTimes===0){const w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),S.destroy()}}function b(S){l.remove(S)}function A(){l.dispose()}return{getParameters:h,getProgramCacheKey:m,getUniforms:y,acquireProgram:T,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:A}}function _w(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function yw(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ep(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function np(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(p,f,d,g,x,h){let m=i[t];return m===void 0?(m={id:p.id,object:p,geometry:f,material:d,groupOrder:g,renderOrder:p.renderOrder,z:x,group:h},i[t]=m):(m.id=p.id,m.object=p,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=p.renderOrder,m.z=x,m.group=h),t++,m}function a(p,f,d,g,x,h){const m=r(p,f,d,g,x,h);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(p,f,d,g,x,h){const m=r(p,f,d,g,x,h);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function u(p,f){e.length>1&&e.sort(p||yw),n.length>1&&n.sort(f||ep),s.length>1&&s.sort(f||ep)}function c(){for(let p=t,f=i.length;p<f;p++){const d=i[p];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:c,sort:u}}function ww(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new np,i.set(n,[r])):s>=o.length?(r=new np,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Sw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new it};break;case"SpotLight":e={position:new F,direction:new F,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new it,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new it,groundColor:new it};break;case"RectAreaLight":e={color:new it,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function bw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Tw=0;function Ew(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Aw(i){const t=new Sw,e=bw(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new F);const s=new F,o=new ge,r=new ge;function a(u){let c=0,p=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,x=0,h=0,m=0,M=0,v=0,y=0,T=0,E=0,b=0;u.sort(Ew);for(let S=0,w=u.length;S<w;S++){const R=u[S],C=R.color,D=R.intensity,U=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)c+=C.r*D,p+=C.g*D,f+=C.b*D;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],D);b++}else if(R.isDirectionalLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const O=R.shadow,k=e.get(R);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=R.shadow.matrix,M++}n.directional[d]=G,d++}else if(R.isSpotLight){const G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(C).multiplyScalar(D),G.distance=U,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[x]=G;const O=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,O.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[x]=O.matrix,R.castShadow){const k=e.get(R);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=H,y++}x++}else if(R.isRectAreaLight){const G=t.get(R);G.color.copy(C).multiplyScalar(D),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[h]=G,h++}else if(R.isPointLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const O=R.shadow,k=e.get(R);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,k.shadowCameraNear=O.camera.near,k.shadowCameraFar=O.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=R.shadow.matrix,v++}n.point[g]=G,g++}else if(R.isHemisphereLight){const G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(D),G.groundColor.copy(R.groundColor).multiplyScalar(D),n.hemi[m]=G,m++}}h>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=p,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==h||A.hemiLength!==m||A.numDirectionalShadows!==M||A.numPointShadows!==v||A.numSpotShadows!==y||A.numSpotMaps!==T||A.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=h,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=b,A.directionalLength=d,A.pointLength=g,A.spotLength=x,A.rectAreaLength=h,A.hemiLength=m,A.numDirectionalShadows=M,A.numPointShadows=v,A.numSpotShadows=y,A.numSpotMaps=T,A.numLightProbes=b,n.version=Tw++)}function l(u,c){let p=0,f=0,d=0,g=0,x=0;const h=c.matrixWorldInverse;for(let m=0,M=u.length;m<M;m++){const v=u[m];if(v.isDirectionalLight){const y=n.directional[p];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(h),p++}else if(v.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(h),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(h),d++}else if(v.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(h),r.identity(),o.copy(v.matrixWorld),o.premultiply(h),r.extractRotation(o),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(h),f++}else if(v.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(h),x++}}}return{setup:a,setupView:l,state:n}}function ip(i){const t=new Aw(i),e=[],n=[];function s(c){u.camera=c,e.length=0,n.length=0}function o(c){e.push(c)}function r(c){n.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function Rw(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new ip(i),t.set(s,[a])):o>=r.length?(a=new ip(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Cw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Iw(i,t,e){let n=new gd;const s=new pt,o=new pt,r=new be,a=new nM({depthPacking:Bx}),l=new iM,u={},c=e.maxTextureSize,p={[Ds]:vn,[vn]:Ds,[Pt]:Pt},f=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Cw,fragmentShader:Pw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new P(g,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tm;let m=this.type;this.render=function(E,b,A){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),w=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),C=i.state;C.setBlending(as),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const D=m!==Qi&&this.type===Qi,U=m===Qi&&this.type!==Qi;for(let H=0,G=E.length;H<G;H++){const O=E[H],k=O.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const nt=k.getFrameExtents();if(s.multiply(nt),o.copy(k.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(o.x=Math.floor(c/nt.x),s.x=o.x*nt.x,k.mapSize.x=o.x),s.y>c&&(o.y=Math.floor(c/nt.y),s.y=o.y*nt.y,k.mapSize.y=o.y)),k.map===null||D===!0||U===!0){const ft=this.type!==Qi?{minFilter:ri,magFilter:ri}:{};k.map!==null&&k.map.dispose(),k.map=new Ri(s.x,s.y,ft),k.map.texture.name=O.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const ct=k.getViewportCount();for(let ft=0;ft<ct;ft++){const Ct=k.getViewport(ft);r.set(o.x*Ct.x,o.y*Ct.y,o.x*Ct.z,o.y*Ct.w),C.viewport(r),k.updateMatrices(O,ft),n=k.getFrustum(),y(b,A,k.camera,O,this.type)}k.isPointLightShadow!==!0&&this.type===Qi&&M(k,A),k.needsUpdate=!1}m=this.type,h.needsUpdate=!1,i.setRenderTarget(S,w,R)};function M(E,b){const A=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ri(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,A,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,A,d,x,null)}function v(E,b,A,S){let w=null;const R=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)w=R;else if(w=A.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const C=w.uuid,D=b.uuid;let U=u[C];U===void 0&&(U={},u[C]=U);let H=U[D];H===void 0&&(H=w.clone(),U[D]=H,b.addEventListener("dispose",T)),w=H}if(w.visible=b.visible,w.wireframe=b.wireframe,S===Qi?w.side=b.shadowSide!==null?b.shadowSide:b.side:w.side=b.shadowSide!==null?b.shadowSide:p[b.side],w.alphaMap=b.alphaMap,w.alphaTest=b.alphaTest,w.map=b.map,w.clipShadows=b.clipShadows,w.clippingPlanes=b.clippingPlanes,w.clipIntersection=b.clipIntersection,w.displacementMap=b.displacementMap,w.displacementScale=b.displacementScale,w.displacementBias=b.displacementBias,w.wireframeLinewidth=b.wireframeLinewidth,w.linewidth=b.linewidth,A.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const C=i.properties.get(w);C.light=A}return w}function y(E,b,A,S,w){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Qi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const D=t.update(E),U=E.material;if(Array.isArray(U)){const H=D.groups;for(let G=0,O=H.length;G<O;G++){const k=H[G],nt=U[k.materialIndex];if(nt&&nt.visible){const ct=v(E,nt,S,w);E.onBeforeShadow(i,E,b,A,D,ct,k),i.renderBufferDirect(A,null,D,ct,E,k),E.onAfterShadow(i,E,b,A,D,ct,k)}}}else if(U.visible){const H=v(E,U,S,w);E.onBeforeShadow(i,E,b,A,D,H,null),i.renderBufferDirect(A,null,D,H,E,null),E.onAfterShadow(i,E,b,A,D,H,null)}}const C=E.children;for(let D=0,U=C.length;D<U;D++)y(C[D],b,A,S,w)}function T(E){E.target.removeEventListener("dispose",T);for(const A in u){const S=u[A],w=E.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}const Lw={[ph]:mh,[gh]:Mh,[xh]:_h,[_r]:vh,[mh]:ph,[Mh]:gh,[_h]:xh,[vh]:_r};function Dw(i,t){function e(){let V=!1;const vt=new be;let tt=null;const at=new be(0,0,0,0);return{setMask:function(St){tt!==St&&!V&&(i.colorMask(St,St,St,St),tt=St)},setLocked:function(St){V=St},setClear:function(St,wt,qt,Fe,ln){ln===!0&&(St*=Fe,wt*=Fe,qt*=Fe),vt.set(St,wt,qt,Fe),at.equals(vt)===!1&&(i.clearColor(St,wt,qt,Fe),at.copy(vt))},reset:function(){V=!1,tt=null,at.set(-1,0,0,0)}}}function n(){let V=!1,vt=!1,tt=null,at=null,St=null;return{setReversed:function(wt){if(vt!==wt){const qt=t.get("EXT_clip_control");vt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);const Fe=St;St=null,this.setClear(Fe)}vt=wt},getReversed:function(){return vt},setTest:function(wt){wt?mt(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(wt){tt!==wt&&!V&&(i.depthMask(wt),tt=wt)},setFunc:function(wt){if(vt&&(wt=Lw[wt]),at!==wt){switch(wt){case ph:i.depthFunc(i.NEVER);break;case mh:i.depthFunc(i.ALWAYS);break;case gh:i.depthFunc(i.LESS);break;case _r:i.depthFunc(i.LEQUAL);break;case xh:i.depthFunc(i.EQUAL);break;case vh:i.depthFunc(i.GEQUAL);break;case Mh:i.depthFunc(i.GREATER);break;case _h:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}at=wt}},setLocked:function(wt){V=wt},setClear:function(wt){St!==wt&&(vt&&(wt=1-wt),i.clearDepth(wt),St=wt)},reset:function(){V=!1,tt=null,at=null,St=null,vt=!1}}}function s(){let V=!1,vt=null,tt=null,at=null,St=null,wt=null,qt=null,Fe=null,ln=null;return{setTest:function(xe){V||(xe?mt(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(xe){vt!==xe&&!V&&(i.stencilMask(xe),vt=xe)},setFunc:function(xe,Mi,Yi){(tt!==xe||at!==Mi||St!==Yi)&&(i.stencilFunc(xe,Mi,Yi),tt=xe,at=Mi,St=Yi)},setOp:function(xe,Mi,Yi){(wt!==xe||qt!==Mi||Fe!==Yi)&&(i.stencilOp(xe,Mi,Yi),wt=xe,qt=Mi,Fe=Yi)},setLocked:function(xe){V=xe},setClear:function(xe){ln!==xe&&(i.clearStencil(xe),ln=xe)},reset:function(){V=!1,vt=null,tt=null,at=null,St=null,wt=null,qt=null,Fe=null,ln=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,u=new WeakMap;let c={},p={},f=new WeakMap,d=[],g=null,x=!1,h=null,m=null,M=null,v=null,y=null,T=null,E=null,b=new it(0,0,0),A=0,S=!1,w=null,R=null,C=null,D=null,U=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,O=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=O>=1):k.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=O>=2);let nt=null,ct={};const ft=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),Wt=new be().fromArray(ft),et=new be().fromArray(Ct);function ut(V,vt,tt,at){const St=new Uint8Array(4),wt=i.createTexture();i.bindTexture(V,wt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<tt;qt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,at,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(vt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return wt}const yt={};yt[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),mt(i.DEPTH_TEST),r.setFunc(_r),ee(!1),ne(Yd),mt(i.CULL_FACE),B(as);function mt(V){c[V]!==!0&&(i.enable(V),c[V]=!0)}function It(V){c[V]!==!1&&(i.disable(V),c[V]=!1)}function Nt(V,vt){return p[V]!==vt?(i.bindFramebuffer(V,vt),p[V]=vt,V===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=vt),V===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function Kt(V,vt){let tt=d,at=!1;if(V){tt=f.get(vt),tt===void 0&&(tt=[],f.set(vt,tt));const St=V.textures;if(tt.length!==St.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,qt=St.length;wt<qt;wt++)tt[wt]=i.COLOR_ATTACHMENT0+wt;tt.length=St.length,at=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,at=!0);at&&i.drawBuffers(tt)}function De(V){return g!==V?(i.useProgram(V),g=V,!0):!1}const se={[Qs]:i.FUNC_ADD,[fx]:i.FUNC_SUBTRACT,[dx]:i.FUNC_REVERSE_SUBTRACT};se[px]=i.MIN,se[mx]=i.MAX;const He={[gx]:i.ZERO,[xx]:i.ONE,[vx]:i.SRC_COLOR,[fh]:i.SRC_ALPHA,[bx]:i.SRC_ALPHA_SATURATE,[wx]:i.DST_COLOR,[_x]:i.DST_ALPHA,[Mx]:i.ONE_MINUS_SRC_COLOR,[dh]:i.ONE_MINUS_SRC_ALPHA,[Sx]:i.ONE_MINUS_DST_COLOR,[yx]:i.ONE_MINUS_DST_ALPHA,[Tx]:i.CONSTANT_COLOR,[Ex]:i.ONE_MINUS_CONSTANT_COLOR,[Ax]:i.CONSTANT_ALPHA,[Rx]:i.ONE_MINUS_CONSTANT_ALPHA};function B(V,vt,tt,at,St,wt,qt,Fe,ln,xe){if(V===as){x===!0&&(It(i.BLEND),x=!1);return}if(x===!1&&(mt(i.BLEND),x=!0),V!==hx){if(V!==h||xe!==S){if((m!==Qs||y!==Qs)&&(i.blendEquation(i.FUNC_ADD),m=Qs,y=Qs),xe)switch(V){case sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jt:i.blendFunc(i.ONE,i.ONE);break;case Zd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $d:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jt:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $d:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}M=null,v=null,T=null,E=null,b.set(0,0,0),A=0,h=V,S=xe}return}St=St||vt,wt=wt||tt,qt=qt||at,(vt!==m||St!==y)&&(i.blendEquationSeparate(se[vt],se[St]),m=vt,y=St),(tt!==M||at!==v||wt!==T||qt!==E)&&(i.blendFuncSeparate(He[tt],He[at],He[wt],He[qt]),M=tt,v=at,T=wt,E=qt),(Fe.equals(b)===!1||ln!==A)&&(i.blendColor(Fe.r,Fe.g,Fe.b,ln),b.copy(Fe),A=ln),h=V,S=!1}function ci(V,vt){V.side===Pt?It(i.CULL_FACE):mt(i.CULL_FACE);let tt=V.side===vn;vt&&(tt=!tt),ee(tt),V.blending===sr&&V.transparent===!1?B(as):B(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),r.setFunc(V.depthFunc),r.setTest(V.depthTest),r.setMask(V.depthWrite),o.setMask(V.colorWrite);const at=V.stencilWrite;a.setTest(at),at&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Re(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(V){w!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),w=V)}function ne(V){V!==lx?(mt(i.CULL_FACE),V!==R&&(V===Yd?i.cullFace(i.BACK):V===ux?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),R=V}function zt(V){V!==C&&(G&&i.lineWidth(V),C=V)}function Re(V,vt,tt){V?(mt(i.POLYGON_OFFSET_FILL),(D!==vt||U!==tt)&&(i.polygonOffset(vt,tt),D=vt,U=tt)):It(i.POLYGON_OFFSET_FILL)}function Ut(V){V?mt(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function N(V){V===void 0&&(V=i.TEXTURE0+H-1),nt!==V&&(i.activeTexture(V),nt=V)}function I(V,vt,tt){tt===void 0&&(nt===null?tt=i.TEXTURE0+H-1:tt=nt);let at=ct[tt];at===void 0&&(at={type:void 0,texture:void 0},ct[tt]=at),(at.type!==V||at.texture!==vt)&&(nt!==tt&&(i.activeTexture(tt),nt=tt),i.bindTexture(V,vt||yt[V]),at.type=V,at.texture=vt)}function j(){const V=ct[nt];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Bt(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(V){Wt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Wt.copy(V))}function At(V){et.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),et.copy(V))}function ie(V,vt){let tt=u.get(vt);tt===void 0&&(tt=new WeakMap,u.set(vt,tt));let at=tt.get(V);at===void 0&&(at=i.getUniformBlockIndex(vt,V.name),tt.set(V,at))}function Zt(V,vt){const at=u.get(vt).get(V);l.get(vt)!==at&&(i.uniformBlockBinding(vt,at,V.__bindingPointIndex),l.set(vt,at))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},nt=null,ct={},p={},f=new WeakMap,d=[],g=null,x=!1,h=null,m=null,M=null,v=null,y=null,T=null,E=null,b=new it(0,0,0),A=0,S=!1,w=null,R=null,C=null,D=null,U=null,Wt.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:mt,disable:It,bindFramebuffer:Nt,drawBuffers:Kt,useProgram:De,setBlending:B,setMaterial:ci,setFlipSided:ee,setCullFace:ne,setLineWidth:zt,setPolygonOffset:Re,setScissorTest:Ut,activeTexture:N,bindTexture:I,unbindTexture:j,compressedTexImage2D:rt,compressedTexImage3D:lt,texImage2D:Et,texImage3D:Bt,updateUBOMapping:ie,uniformBlockBinding:Zt,texStorage2D:oe,texStorage3D:dt,texSubImage2D:st,texSubImage3D:Lt,compressedTexSubImage2D:_t,compressedTexSubImage3D:Tt,scissor:Gt,viewport:At,reset:Te}}function Uw(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new pt,c=new WeakMap;let p;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,I){return d?new OffscreenCanvas(N,I):hl("canvas")}function x(N,I,j){let rt=1;const lt=Ut(N);if((lt.width>j||lt.height>j)&&(rt=j/Math.max(lt.width,lt.height)),rt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const st=Math.floor(rt*lt.width),Lt=Math.floor(rt*lt.height);p===void 0&&(p=g(st,Lt));const _t=I?g(st,Lt):p;return _t.width=st,_t.height=Lt,_t.getContext("2d").drawImage(N,0,0,st,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+st+"x"+Lt+")."),_t}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),N;return N}function h(N){return N.generateMipmaps}function m(N){i.generateMipmap(N)}function M(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(N,I,j,rt,lt=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let st=I;if(I===i.RED&&(j===i.FLOAT&&(st=i.R32F),j===i.HALF_FLOAT&&(st=i.R16F),j===i.UNSIGNED_BYTE&&(st=i.R8)),I===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(st=i.R8UI),j===i.UNSIGNED_SHORT&&(st=i.R16UI),j===i.UNSIGNED_INT&&(st=i.R32UI),j===i.BYTE&&(st=i.R8I),j===i.SHORT&&(st=i.R16I),j===i.INT&&(st=i.R32I)),I===i.RG&&(j===i.FLOAT&&(st=i.RG32F),j===i.HALF_FLOAT&&(st=i.RG16F),j===i.UNSIGNED_BYTE&&(st=i.RG8)),I===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(st=i.RG8UI),j===i.UNSIGNED_SHORT&&(st=i.RG16UI),j===i.UNSIGNED_INT&&(st=i.RG32UI),j===i.BYTE&&(st=i.RG8I),j===i.SHORT&&(st=i.RG16I),j===i.INT&&(st=i.RG32I)),I===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(st=i.RGB8UI),j===i.UNSIGNED_SHORT&&(st=i.RGB16UI),j===i.UNSIGNED_INT&&(st=i.RGB32UI),j===i.BYTE&&(st=i.RGB8I),j===i.SHORT&&(st=i.RGB16I),j===i.INT&&(st=i.RGB32I)),I===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),j===i.UNSIGNED_INT&&(st=i.RGBA32UI),j===i.BYTE&&(st=i.RGBA8I),j===i.SHORT&&(st=i.RGBA16I),j===i.INT&&(st=i.RGBA32I)),I===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),I===i.RGBA){const Lt=lt?cl:ue.getTransfer(rt);j===i.FLOAT&&(st=i.RGBA32F),j===i.HALF_FLOAT&&(st=i.RGBA16F),j===i.UNSIGNED_BYTE&&(st=Lt===ye?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function y(N,I){let j;return N?I===null||I===uo||I===br?j=i.DEPTH24_STENCIL8:I===Vi?j=i.DEPTH32F_STENCIL8:I===Ea&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===uo||I===br?j=i.DEPTH_COMPONENT24:I===Vi?j=i.DEPTH_COMPONENT32F:I===Ea&&(j=i.DEPTH_COMPONENT16),j}function T(N,I){return h(N)===!0||N.isFramebufferTexture&&N.minFilter!==ri&&N.minFilter!==Hi?Math.log2(Math.max(I.width,I.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?I.mipmaps.length:1}function E(N){const I=N.target;I.removeEventListener("dispose",E),A(I),I.isVideoTexture&&c.delete(I)}function b(N){const I=N.target;I.removeEventListener("dispose",b),w(I)}function A(N){const I=n.get(N);if(I.__webglInit===void 0)return;const j=N.source,rt=f.get(j);if(rt){const lt=rt[I.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&S(N),Object.keys(rt).length===0&&f.delete(j)}n.remove(N)}function S(N){const I=n.get(N);i.deleteTexture(I.__webglTexture);const j=N.source,rt=f.get(j);delete rt[I.__cacheKey],r.memory.textures--}function w(N){const I=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(I.__webglFramebuffer[rt]))for(let lt=0;lt<I.__webglFramebuffer[rt].length;lt++)i.deleteFramebuffer(I.__webglFramebuffer[rt][lt]);else i.deleteFramebuffer(I.__webglFramebuffer[rt]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[rt])}else{if(Array.isArray(I.__webglFramebuffer))for(let rt=0;rt<I.__webglFramebuffer.length;rt++)i.deleteFramebuffer(I.__webglFramebuffer[rt]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let rt=0;rt<I.__webglColorRenderbuffer.length;rt++)I.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[rt]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}const j=N.textures;for(let rt=0,lt=j.length;rt<lt;rt++){const st=n.get(j[rt]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),r.memory.textures--),n.remove(j[rt])}n.remove(N)}let R=0;function C(){R=0}function D(){const N=R;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),R+=1,N}function U(N){const I=[];return I.push(N.wrapS),I.push(N.wrapT),I.push(N.wrapR||0),I.push(N.magFilter),I.push(N.minFilter),I.push(N.anisotropy),I.push(N.internalFormat),I.push(N.format),I.push(N.type),I.push(N.generateMipmaps),I.push(N.premultiplyAlpha),I.push(N.flipY),I.push(N.unpackAlignment),I.push(N.colorSpace),I.join()}function H(N,I){const j=n.get(N);if(N.isVideoTexture&&zt(N),N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){const rt=N.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(j,N,I);return}}e.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+I)}function G(N,I){const j=n.get(N);if(N.version>0&&j.__version!==N.version){et(j,N,I);return}e.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+I)}function O(N,I){const j=n.get(N);if(N.version>0&&j.__version!==N.version){et(j,N,I);return}e.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+I)}function k(N,I){const j=n.get(N);if(N.version>0&&j.__version!==N.version){ut(j,N,I);return}e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+I)}const nt={[Sr]:i.REPEAT,[eo]:i.CLAMP_TO_EDGE,[Sh]:i.MIRRORED_REPEAT},ct={[ri]:i.NEAREST,[Fx]:i.NEAREST_MIPMAP_NEAREST,[Xa]:i.NEAREST_MIPMAP_LINEAR,[Hi]:i.LINEAR,[tu]:i.LINEAR_MIPMAP_NEAREST,[no]:i.LINEAR_MIPMAP_LINEAR},ft={[kx]:i.NEVER,[Yx]:i.ALWAYS,[Hx]:i.LESS,[mm]:i.LEQUAL,[Vx]:i.EQUAL,[qx]:i.GEQUAL,[Wx]:i.GREATER,[Xx]:i.NOTEQUAL};function Ct(N,I){if(I.type===Vi&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===Hi||I.magFilter===tu||I.magFilter===Xa||I.magFilter===no||I.minFilter===Hi||I.minFilter===tu||I.minFilter===Xa||I.minFilter===no)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,nt[I.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,nt[I.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,nt[I.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,ct[I.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,ct[I.minFilter]),I.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,ft[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===ri||I.minFilter!==Xa&&I.minFilter!==no||I.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function Wt(N,I){let j=!1;N.__webglInit===void 0&&(N.__webglInit=!0,I.addEventListener("dispose",E));const rt=I.source;let lt=f.get(rt);lt===void 0&&(lt={},f.set(rt,lt));const st=U(I);if(st!==N.__cacheKey){lt[st]===void 0&&(lt[st]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,j=!0),lt[st].usedTimes++;const Lt=lt[N.__cacheKey];Lt!==void 0&&(lt[N.__cacheKey].usedTimes--,Lt.usedTimes===0&&S(I)),N.__cacheKey=st,N.__webglTexture=lt[st].texture}return j}function et(N,I,j){let rt=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(rt=i.TEXTURE_3D);const lt=Wt(N,I),st=I.source;e.bindTexture(rt,N.__webglTexture,i.TEXTURE0+j);const Lt=n.get(st);if(st.version!==Lt.__version||lt===!0){e.activeTexture(i.TEXTURE0+j);const _t=ue.getPrimaries(ue.workingColorSpace),Tt=I.colorSpace===Ts?null:ue.getPrimaries(I.colorSpace),oe=I.colorSpace===Ts||_t===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let dt=x(I.image,!1,s.maxTextureSize);dt=Re(I,dt);const Et=o.convert(I.format,I.colorSpace),Bt=o.convert(I.type);let Gt=v(I.internalFormat,Et,Bt,I.colorSpace,I.isVideoTexture);Ct(rt,I);let At;const ie=I.mipmaps,Zt=I.isVideoTexture!==!0,Te=Lt.__version===void 0||lt===!0,V=st.dataReady,vt=T(I,dt);if(I.isDepthTexture)Gt=y(I.format===Tr,I.type),Te&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Gt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,dt.width,dt.height,0,Et,Bt,null));else if(I.isDataTexture)if(ie.length>0){Zt&&Te&&e.texStorage2D(i.TEXTURE_2D,vt,Gt,ie[0].width,ie[0].height);for(let tt=0,at=ie.length;tt<at;tt++)At=ie[tt],Zt?V&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,At.width,At.height,Et,Bt,At.data):e.texImage2D(i.TEXTURE_2D,tt,Gt,At.width,At.height,0,Et,Bt,At.data);I.generateMipmaps=!1}else Zt?(Te&&e.texStorage2D(i.TEXTURE_2D,vt,Gt,dt.width,dt.height),V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,Et,Bt,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,dt.width,dt.height,0,Et,Bt,dt.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){Zt&&Te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Gt,ie[0].width,ie[0].height,dt.depth);for(let tt=0,at=ie.length;tt<at;tt++)if(At=ie[tt],I.format!==Ai)if(Et!==null)if(Zt){if(V)if(I.layerUpdates.size>0){const St=D0(At.width,At.height,I.format,I.type);for(const wt of I.layerUpdates){const qt=At.data.subarray(wt*St/At.data.BYTES_PER_ELEMENT,(wt+1)*St/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,wt,At.width,At.height,1,Et,qt)}I.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,At.width,At.height,dt.depth,Et,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,Gt,At.width,At.height,dt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,At.width,At.height,dt.depth,Et,Bt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,Gt,At.width,At.height,dt.depth,0,Et,Bt,At.data)}else{Zt&&Te&&e.texStorage2D(i.TEXTURE_2D,vt,Gt,ie[0].width,ie[0].height);for(let tt=0,at=ie.length;tt<at;tt++)At=ie[tt],I.format!==Ai?Et!==null?Zt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,Gt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?V&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,At.width,At.height,Et,Bt,At.data):e.texImage2D(i.TEXTURE_2D,tt,Gt,At.width,At.height,0,Et,Bt,At.data)}else if(I.isDataArrayTexture)if(Zt){if(Te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Gt,dt.width,dt.height,dt.depth),V)if(I.layerUpdates.size>0){const tt=D0(dt.width,dt.height,I.format,I.type);for(const at of I.layerUpdates){const St=dt.data.subarray(at*tt/dt.data.BYTES_PER_ELEMENT,(at+1)*tt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,dt.width,dt.height,1,Et,Bt,St)}I.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Et,Bt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,dt.width,dt.height,dt.depth,0,Et,Bt,dt.data);else if(I.isData3DTexture)Zt?(Te&&e.texStorage3D(i.TEXTURE_3D,vt,Gt,dt.width,dt.height,dt.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Et,Bt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,dt.width,dt.height,dt.depth,0,Et,Bt,dt.data);else if(I.isFramebufferTexture){if(Te)if(Zt)e.texStorage2D(i.TEXTURE_2D,vt,Gt,dt.width,dt.height);else{let tt=dt.width,at=dt.height;for(let St=0;St<vt;St++)e.texImage2D(i.TEXTURE_2D,St,Gt,tt,at,0,Et,Bt,null),tt>>=1,at>>=1}}else if(ie.length>0){if(Zt&&Te){const tt=Ut(ie[0]);e.texStorage2D(i.TEXTURE_2D,vt,Gt,tt.width,tt.height)}for(let tt=0,at=ie.length;tt<at;tt++)At=ie[tt],Zt?V&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Et,Bt,At):e.texImage2D(i.TEXTURE_2D,tt,Gt,Et,Bt,At);I.generateMipmaps=!1}else if(Zt){if(Te){const tt=Ut(dt);e.texStorage2D(i.TEXTURE_2D,vt,Gt,tt.width,tt.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Bt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Gt,Et,Bt,dt);h(I)&&m(rt),Lt.__version=st.version,I.onUpdate&&I.onUpdate(I)}N.__version=I.version}function ut(N,I,j){if(I.image.length!==6)return;const rt=Wt(N,I),lt=I.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+j);const st=n.get(lt);if(lt.version!==st.__version||rt===!0){e.activeTexture(i.TEXTURE0+j);const Lt=ue.getPrimaries(ue.workingColorSpace),_t=I.colorSpace===Ts?null:ue.getPrimaries(I.colorSpace),Tt=I.colorSpace===Ts||Lt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const oe=I.isCompressedTexture||I.image[0].isCompressedTexture,dt=I.image[0]&&I.image[0].isDataTexture,Et=[];for(let at=0;at<6;at++)!oe&&!dt?Et[at]=x(I.image[at],!0,s.maxCubemapSize):Et[at]=dt?I.image[at].image:I.image[at],Et[at]=Re(I,Et[at]);const Bt=Et[0],Gt=o.convert(I.format,I.colorSpace),At=o.convert(I.type),ie=v(I.internalFormat,Gt,At,I.colorSpace),Zt=I.isVideoTexture!==!0,Te=st.__version===void 0||rt===!0,V=lt.dataReady;let vt=T(I,Bt);Ct(i.TEXTURE_CUBE_MAP,I);let tt;if(oe){Zt&&Te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,ie,Bt.width,Bt.height);for(let at=0;at<6;at++){tt=Et[at].mipmaps;for(let St=0;St<tt.length;St++){const wt=tt[St];I.format!==Ai?Gt!==null?Zt?V&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,0,0,wt.width,wt.height,Gt,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,ie,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,0,0,wt.width,wt.height,Gt,At,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,ie,wt.width,wt.height,0,Gt,At,wt.data)}}}else{if(tt=I.mipmaps,Zt&&Te){tt.length>0&&vt++;const at=Ut(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,ie,at.width,at.height)}for(let at=0;at<6;at++)if(dt){Zt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Et[at].width,Et[at].height,Gt,At,Et[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ie,Et[at].width,Et[at].height,0,Gt,At,Et[at].data);for(let St=0;St<tt.length;St++){const qt=tt[St].image[at].image;Zt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,0,0,qt.width,qt.height,Gt,At,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,ie,qt.width,qt.height,0,Gt,At,qt.data)}}else{Zt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Gt,At,Et[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ie,Gt,At,Et[at]);for(let St=0;St<tt.length;St++){const wt=tt[St];Zt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,0,0,Gt,At,wt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,ie,Gt,At,wt.image[at])}}}h(I)&&m(i.TEXTURE_CUBE_MAP),st.__version=lt.version,I.onUpdate&&I.onUpdate(I)}N.__version=I.version}function yt(N,I,j,rt,lt,st){const Lt=o.convert(j.format,j.colorSpace),_t=o.convert(j.type),Tt=v(j.internalFormat,Lt,_t,j.colorSpace),oe=n.get(I),dt=n.get(j);if(dt.__renderTarget=I,!oe.__hasExternalTextures){const Et=Math.max(1,I.width>>st),Bt=Math.max(1,I.height>>st);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,st,Tt,Et,Bt,I.depth,0,Lt,_t,null):e.texImage2D(lt,st,Tt,Et,Bt,0,Lt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),ne(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,lt,dt.__webglTexture,0,ee(I)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,lt,dt.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(N,I,j){if(i.bindRenderbuffer(i.RENDERBUFFER,N),I.depthBuffer){const rt=I.depthTexture,lt=rt&&rt.isDepthTexture?rt.type:null,st=y(I.stencilBuffer,lt),Lt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=ee(I);ne(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,st,I.width,I.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,st,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,st,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,N)}else{const rt=I.textures;for(let lt=0;lt<rt.length;lt++){const st=rt[lt],Lt=o.convert(st.format,st.colorSpace),_t=o.convert(st.type),Tt=v(st.internalFormat,Lt,_t,st.colorSpace),oe=ee(I);j&&ne(I)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Tt,I.width,I.height):ne(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,Tt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(N,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=n.get(I.depthTexture);rt.__renderTarget=I,(!rt.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),H(I.depthTexture,0);const lt=rt.__webglTexture,st=ee(I);if(I.depthTexture.format===or)ne(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0);else if(I.depthTexture.format===Tr)ne(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function Nt(N){const I=n.get(N),j=N.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==N.depthTexture){const rt=N.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),rt){const lt=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,rt.removeEventListener("dispose",lt)};rt.addEventListener("dispose",lt),I.__depthDisposeCallback=lt}I.__boundDepthTexture=rt}if(N.depthTexture&&!I.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");It(I.__webglFramebuffer,N)}else if(j){I.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[rt]),I.__webglDepthbuffer[rt]===void 0)I.__webglDepthbuffer[rt]=i.createRenderbuffer(),mt(I.__webglDepthbuffer[rt],N,!1);else{const lt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=I.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,st)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),mt(I.__webglDepthbuffer,N,!1);else{const rt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(N,I,j){const rt=n.get(N);I!==void 0&&yt(rt.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&Nt(N)}function De(N){const I=N.texture,j=n.get(N),rt=n.get(I);N.addEventListener("dispose",b);const lt=N.textures,st=N.isWebGLCubeRenderTarget===!0,Lt=lt.length>1;if(Lt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=I.version,r.memory.textures++),st){j.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(I.mipmaps&&I.mipmaps.length>0){j.__webglFramebuffer[_t]=[];for(let Tt=0;Tt<I.mipmaps.length;Tt++)j.__webglFramebuffer[_t][Tt]=i.createFramebuffer()}else j.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){j.__webglFramebuffer=[];for(let _t=0;_t<I.mipmaps.length;_t++)j.__webglFramebuffer[_t]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let _t=0,Tt=lt.length;_t<Tt;_t++){const oe=n.get(lt[_t]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),r.memory.textures++)}if(N.samples>0&&ne(N)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let _t=0;_t<lt.length;_t++){const Tt=lt[_t];j.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[_t]);const oe=o.convert(Tt.format,Tt.colorSpace),dt=o.convert(Tt.type),Et=v(Tt.internalFormat,oe,dt,Tt.colorSpace,N.isXRRenderTarget===!0),Bt=ee(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Et,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,j.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(j.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),Ct(i.TEXTURE_CUBE_MAP,I);for(let _t=0;_t<6;_t++)if(I.mipmaps&&I.mipmaps.length>0)for(let Tt=0;Tt<I.mipmaps.length;Tt++)yt(j.__webglFramebuffer[_t][Tt],N,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt);else yt(j.__webglFramebuffer[_t],N,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);h(I)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let _t=0,Tt=lt.length;_t<Tt;_t++){const oe=lt[_t],dt=n.get(oe);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),Ct(i.TEXTURE_2D,oe),yt(j.__webglFramebuffer,N,oe,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),h(oe)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(_t=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,rt.__webglTexture),Ct(_t,I),I.mipmaps&&I.mipmaps.length>0)for(let Tt=0;Tt<I.mipmaps.length;Tt++)yt(j.__webglFramebuffer[Tt],N,I,i.COLOR_ATTACHMENT0,_t,Tt);else yt(j.__webglFramebuffer,N,I,i.COLOR_ATTACHMENT0,_t,0);h(I)&&m(_t),e.unbindTexture()}N.depthBuffer&&Nt(N)}function se(N){const I=N.textures;for(let j=0,rt=I.length;j<rt;j++){const lt=I[j];if(h(lt)){const st=M(N),Lt=n.get(lt).__webglTexture;e.bindTexture(st,Lt),m(st),e.unbindTexture()}}}const He=[],B=[];function ci(N){if(N.samples>0){if(ne(N)===!1){const I=N.textures,j=N.width,rt=N.height;let lt=i.COLOR_BUFFER_BIT;const st=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(N),_t=I.length>1;if(_t)for(let Tt=0;Tt<I.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Tt=0;Tt<I.length;Tt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);const oe=n.get(I[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,j,rt,0,0,j,rt,lt,i.NEAREST),l===!0&&(He.length=0,B.length=0,He.push(i.COLOR_ATTACHMENT0+Tt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(He.push(st),B.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Tt=0;Tt<I.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);const oe=n.get(I[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const I=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function ee(N){return Math.min(s.maxSamples,N.samples)}function ne(N){const I=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function zt(N){const I=r.render.frame;c.get(N)!==I&&(c.set(N,I),N.update())}function Re(N,I){const j=N.colorSpace,rt=N.format,lt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||j!==Er&&j!==Ts&&(ue.getTransfer(j)===ye?(rt!==Ai||lt!==ds)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),I}function Ut(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(u.width=N.naturalWidth||N.width,u.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(u.width=N.displayWidth,u.height=N.displayHeight):(u.width=N.width,u.height=N.height),u}this.allocateTextureUnit=D,this.resetTextureUnits=C,this.setTexture2D=H,this.setTexture2DArray=G,this.setTexture3D=O,this.setTextureCube=k,this.rebindTextures=Kt,this.setupRenderTarget=De,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=ci,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=ne}function zw(i,t){function e(n,s=Ts){let o;const r=ue.getTransfer(s);if(n===ds)return i.UNSIGNED_BYTE;if(n===cd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ld)return i.UNSIGNED_SHORT_5_5_5_1;if(n===am)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===om)return i.BYTE;if(n===rm)return i.SHORT;if(n===Ea)return i.UNSIGNED_SHORT;if(n===ad)return i.INT;if(n===uo)return i.UNSIGNED_INT;if(n===Vi)return i.FLOAT;if(n===cs)return i.HALF_FLOAT;if(n===cm)return i.ALPHA;if(n===lm)return i.RGB;if(n===Ai)return i.RGBA;if(n===um)return i.LUMINANCE;if(n===hm)return i.LUMINANCE_ALPHA;if(n===or)return i.DEPTH_COMPONENT;if(n===Tr)return i.DEPTH_STENCIL;if(n===ud)return i.RED;if(n===hd)return i.RED_INTEGER;if(n===fm)return i.RG;if(n===fd)return i.RG_INTEGER;if(n===dd)return i.RGBA_INTEGER;if(n===Oc||n===Bc||n===Gc||n===kc)if(r===ye)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Oc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Oc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bh||n===Th||n===Eh||n===Ah)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===bh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Th)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Eh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ah)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rh||n===Ch||n===Ph)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Rh||n===Ch)return r===ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ph)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ih||n===Lh||n===Dh||n===Uh||n===zh||n===Nh||n===Fh||n===Oh||n===Bh||n===Gh||n===kh||n===Hh||n===Vh||n===Wh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ih)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lh)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dh)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uh)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zh)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nh)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fh)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oh)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bh)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gh)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kh)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hh)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vh)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wh)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hc||n===Xh||n===qh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Hc)return r===ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dm||n===Yh||n===Zh||n===$h)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Hc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Yh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$h)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Nw={type:"move"};class Nu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){r=!0;for(const x of t.hand.values()){const h=e.getJointPose(x,n),m=this._getHandJoint(u,x);h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=h.radius),m.visible=h!==null}const c=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=c.position.distanceTo(p.position),d=.02,g=.005;u.inputState.pinching&&f>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Fw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ow=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Mn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xn({vertexShader:Fw,fragmentShader:Ow,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new P(new he(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gw extends Dr{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,u=null,c=null,p=null,f=null,d=null,g=null;const x=new Bw,h=e.getContextAttributes();let m=null,M=null;const v=[],y=[],T=new pt;let E=null;const b=new ei;b.viewport=new be;const A=new ei;A.viewport=new be;const S=[b,A],w=new aM;let R=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ut=v[et];return ut===void 0&&(ut=new Nu,v[et]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(et){let ut=v[et];return ut===void 0&&(ut=new Nu,v[et]=ut),ut.getGripSpace()},this.getHand=function(et){let ut=v[et];return ut===void 0&&(ut=new Nu,v[et]=ut),ut.getHandSpace()};function D(et){const ut=y.indexOf(et.inputSource);if(ut===-1)return;const yt=v[ut];yt!==void 0&&(yt.update(et.inputSource,et.frame,u||r),yt.dispatchEvent({type:et.type,data:et.inputSource}))}function U(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",H);for(let et=0;et<v.length;et++){const ut=y[et];ut!==null&&(y[et]=null,v[et].disconnect(ut))}R=null,C=null,x.reset(),t.setRenderTarget(m),d=null,f=null,p=null,s=null,M=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){o=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||r},this.setReferenceSpace=function(et){u=et},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",U),s.addEventListener("inputsourceschange",H),h.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(T),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let yt=null,mt=null,It=null;h.depth&&(It=h.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=h.stencil?Tr:or,mt=h.stencil?br:uo);const Nt={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:o};p=new XRWebGLBinding(s,e),f=p.createProjectionLayer(Nt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Ri(f.textureWidth,f.textureHeight,{format:Ai,type:ds,depthTexture:new Pm(f.textureWidth,f.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:h.stencil,colorSpace:t.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const yt={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ri(d.framebufferWidth,d.framebufferHeight,{format:Ai,type:ds,colorSpace:t.outputColorSpace,stencilBuffer:h.stencil})}M.isXRRenderTarget=!0,this.setFoveation(l),u=null,r=await s.requestReferenceSpace(a),Wt.setContext(s),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(et){for(let ut=0;ut<et.removed.length;ut++){const yt=et.removed[ut],mt=y.indexOf(yt);mt>=0&&(y[mt]=null,v[mt].disconnect(yt))}for(let ut=0;ut<et.added.length;ut++){const yt=et.added[ut];let mt=y.indexOf(yt);if(mt===-1){for(let Nt=0;Nt<v.length;Nt++)if(Nt>=y.length){y.push(yt),mt=Nt;break}else if(y[Nt]===null){y[Nt]=yt,mt=Nt;break}if(mt===-1)break}const It=v[mt];It&&It.connect(yt)}}const G=new F,O=new F;function k(et,ut,yt){G.setFromMatrixPosition(ut.matrixWorld),O.setFromMatrixPosition(yt.matrixWorld);const mt=G.distanceTo(O),It=ut.projectionMatrix.elements,Nt=yt.projectionMatrix.elements,Kt=It[14]/(It[10]-1),De=It[14]/(It[10]+1),se=(It[9]+1)/It[5],He=(It[9]-1)/It[5],B=(It[8]-1)/It[0],ci=(Nt[8]+1)/Nt[0],ee=Kt*B,ne=Kt*ci,zt=mt/(-B+ci),Re=zt*-B;if(ut.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Re),et.translateZ(zt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),It[10]===-1)et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Ut=Kt+zt,N=De+zt,I=ee-Re,j=ne+(mt-Re),rt=se*De/N*Ut,lt=He*De/N*Ut;et.projectionMatrix.makePerspective(I,j,rt,lt,Ut,N),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function nt(et,ut){ut===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ut.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let ut=et.near,yt=et.far;x.texture!==null&&(x.depthNear>0&&(ut=x.depthNear),x.depthFar>0&&(yt=x.depthFar)),w.near=A.near=b.near=ut,w.far=A.far=b.far=yt,(R!==w.near||C!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,C=w.far),b.layers.mask=et.layers.mask|2,A.layers.mask=et.layers.mask|4,w.layers.mask=b.layers.mask|A.layers.mask;const mt=et.parent,It=w.cameras;nt(w,mt);for(let Nt=0;Nt<It.length;Nt++)nt(It[Nt],mt);It.length===2?k(w,b,A):w.projectionMatrix.copy(b.projectionMatrix),ct(et,w,mt)};function ct(et,ut,yt){yt===null?et.matrix.copy(ut.matrixWorld):(et.matrix.copy(yt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ut.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=jh*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(et){l=et,f!==null&&(f.fixedFoveation=et),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=et)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(w)};let ft=null;function Ct(et,ut){if(c=ut.getViewerPose(u||r),g=ut,c!==null){const yt=c.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let mt=!1;yt.length!==w.cameras.length&&(w.cameras.length=0,mt=!0);for(let Nt=0;Nt<yt.length;Nt++){const Kt=yt[Nt];let De=null;if(d!==null)De=d.getViewport(Kt);else{const He=p.getViewSubImage(f,Kt);De=He.viewport,Nt===0&&(t.setRenderTargetTextures(M,He.colorTexture,f.ignoreDepthValues?void 0:He.depthStencilTexture),t.setRenderTarget(M))}let se=S[Nt];se===void 0&&(se=new ei,se.layers.enable(Nt),se.viewport=new be,S[Nt]=se),se.matrix.fromArray(Kt.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Kt.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(De.x,De.y,De.width,De.height),Nt===0&&(w.matrix.copy(se.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),mt===!0&&w.cameras.push(se)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){const Nt=p.getDepthInformation(yt[0]);Nt&&Nt.isValid&&Nt.texture&&x.init(t,Nt,s.renderState)}}for(let yt=0;yt<v.length;yt++){const mt=y[yt],It=v[yt];mt!==null&&It!==void 0&&It.update(mt,ut,u||r)}ft&&ft(et,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),g=null}const Wt=new km;Wt.setAnimationLoop(Ct),this.setAnimationLoop=function(et){ft=et},this.dispose=function(){}}}const Hs=new Xi,kw=new ge;function Hw(i,t){function e(h,m){h.matrixAutoUpdate===!0&&h.updateMatrix(),m.value.copy(h.matrix)}function n(h,m){m.color.getRGB(h.fogColor.value,Sm(i)),m.isFog?(h.fogNear.value=m.near,h.fogFar.value=m.far):m.isFogExp2&&(h.fogDensity.value=m.density)}function s(h,m,M,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(h,m):m.isMeshToonMaterial?(o(h,m),p(h,m)):m.isMeshPhongMaterial?(o(h,m),c(h,m)):m.isMeshStandardMaterial?(o(h,m),f(h,m),m.isMeshPhysicalMaterial&&d(h,m,y)):m.isMeshMatcapMaterial?(o(h,m),g(h,m)):m.isMeshDepthMaterial?o(h,m):m.isMeshDistanceMaterial?(o(h,m),x(h,m)):m.isMeshNormalMaterial?o(h,m):m.isLineBasicMaterial?(r(h,m),m.isLineDashedMaterial&&a(h,m)):m.isPointsMaterial?l(h,m,M,v):m.isSpriteMaterial?u(h,m):m.isShadowMaterial?(h.color.value.copy(m.color),h.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(h,m){h.opacity.value=m.opacity,m.color&&h.diffuse.value.copy(m.color),m.emissive&&h.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(h.map.value=m.map,e(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,e(m.alphaMap,h.alphaMapTransform)),m.bumpMap&&(h.bumpMap.value=m.bumpMap,e(m.bumpMap,h.bumpMapTransform),h.bumpScale.value=m.bumpScale,m.side===vn&&(h.bumpScale.value*=-1)),m.normalMap&&(h.normalMap.value=m.normalMap,e(m.normalMap,h.normalMapTransform),h.normalScale.value.copy(m.normalScale),m.side===vn&&h.normalScale.value.negate()),m.displacementMap&&(h.displacementMap.value=m.displacementMap,e(m.displacementMap,h.displacementMapTransform),h.displacementScale.value=m.displacementScale,h.displacementBias.value=m.displacementBias),m.emissiveMap&&(h.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,h.emissiveMapTransform)),m.specularMap&&(h.specularMap.value=m.specularMap,e(m.specularMap,h.specularMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);const M=t.get(m),v=M.envMap,y=M.envMapRotation;v&&(h.envMap.value=v,Hs.copy(y),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),h.envMapRotation.value.setFromMatrix4(kw.makeRotationFromEuler(Hs)),h.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=m.reflectivity,h.ior.value=m.ior,h.refractionRatio.value=m.refractionRatio),m.lightMap&&(h.lightMap.value=m.lightMap,h.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,h.lightMapTransform)),m.aoMap&&(h.aoMap.value=m.aoMap,h.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,h.aoMapTransform))}function r(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,m.map&&(h.map.value=m.map,e(m.map,h.mapTransform))}function a(h,m){h.dashSize.value=m.dashSize,h.totalSize.value=m.dashSize+m.gapSize,h.scale.value=m.scale}function l(h,m,M,v){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.size.value=m.size*M,h.scale.value=v*.5,m.map&&(h.map.value=m.map,e(m.map,h.uvTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,e(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function u(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.rotation.value=m.rotation,m.map&&(h.map.value=m.map,e(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,e(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function c(h,m){h.specular.value.copy(m.specular),h.shininess.value=Math.max(m.shininess,1e-4)}function p(h,m){m.gradientMap&&(h.gradientMap.value=m.gradientMap)}function f(h,m){h.metalness.value=m.metalness,m.metalnessMap&&(h.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,h.metalnessMapTransform)),h.roughness.value=m.roughness,m.roughnessMap&&(h.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,h.roughnessMapTransform)),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)}function d(h,m,M){h.ior.value=m.ior,m.sheen>0&&(h.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),h.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(h.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,h.sheenColorMapTransform)),m.sheenRoughnessMap&&(h.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,h.sheenRoughnessMapTransform))),m.clearcoat>0&&(h.clearcoat.value=m.clearcoat,h.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(h.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,h.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(h.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===vn&&h.clearcoatNormalScale.value.negate())),m.dispersion>0&&(h.dispersion.value=m.dispersion),m.iridescence>0&&(h.iridescence.value=m.iridescence,h.iridescenceIOR.value=m.iridescenceIOR,h.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(h.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,h.iridescenceMapTransform)),m.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),m.transmission>0&&(h.transmission.value=m.transmission,h.transmissionSamplerMap.value=M.texture,h.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(h.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,h.transmissionMapTransform)),h.thickness.value=m.thickness,m.thicknessMap&&(h.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=m.attenuationDistance,h.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(h.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(h.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=m.specularIntensity,h.specularColor.value.copy(m.specularColor),m.specularColorMap&&(h.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,h.specularColorMapTransform)),m.specularIntensityMap&&(h.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,m){m.matcap&&(h.matcap.value=m.matcap)}function x(h,m){const M=t.get(m).light;h.referencePosition.value.setFromMatrixPosition(M.matrixWorld),h.nearDistance.value=M.shadow.camera.near,h.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vw(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const y=v.program;n.uniformBlockBinding(M,y)}function u(M,v){let y=s[M.id];y===void 0&&(g(M),y=c(M),s[M.id]=y,M.addEventListener("dispose",h));const T=v.program;n.updateUBOMapping(M,T);const E=t.render.frame;o[M.id]!==E&&(f(M),o[M.id]=E)}function c(M){const v=p();M.__bindingPointIndex=v;const y=i.createBuffer(),T=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function p(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=s[M.id],y=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,b=y.length;E<b;E++){const A=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,w=A.length;S<w;S++){const R=A[S];if(d(R,E,S,T)===!0){const C=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let U=0;for(let H=0;H<D.length;H++){const G=D[H],O=x(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,C+U,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,U),U+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,v,y,T){const E=M.value,b=v+"_"+y;if(T[b]===void 0)return typeof E=="number"||typeof E=="boolean"?T[b]=E:T[b]=E.clone(),!0;{const A=T[b];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return T[b]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function g(M){const v=M.uniforms;let y=0;const T=16;for(let b=0,A=v.length;b<A;b++){const S=Array.isArray(v[b])?v[b]:[v[b]];for(let w=0,R=S.length;w<R;w++){const C=S[w],D=Array.isArray(C.value)?C.value:[C.value];for(let U=0,H=D.length;U<H;U++){const G=D[U],O=x(G),k=y%T,nt=k%O.boundary,ct=k+nt;y+=nt,ct!==0&&T-ct<O.storage&&(y+=T-ct),C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,y+=O.storage}}}const E=y%T;return E>0&&(y+=T-E),M.__size=y,M.__cache={},this}function x(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function h(M){const v=M.target;v.removeEventListener("dispose",h);const y=r.indexOf(v.__bindingPointIndex);r.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete o[v.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);r=[],s={},o={}}return{bind:l,update:u,dispose:m}}class Ww{constructor(t={}){const{canvas:e=$x(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const g=new Uint32Array(4),x=new Int32Array(4);let h=null,m=null;const M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this.toneMapping=Ls,this.toneMappingExposure=1;const y=this;let T=!1,E=0,b=0,A=null,S=-1,w=null;const R=new be,C=new be;let D=null;const U=new it(0);let H=0,G=e.width,O=e.height,k=1,nt=null,ct=null;const ft=new be(0,0,G,O),Ct=new be(0,0,G,O);let Wt=!1;const et=new gd;let ut=!1,yt=!1;this.transmissionResolutionScale=1;const mt=new ge,It=new ge,Nt=new F,Kt=new be,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function He(){return A===null?k:1}let B=n;function ci(L,W){return e.getContext(L,W)}try{const L={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rd}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",wt,!1),B===null){const W="webgl2";if(B=ci(W,L),B===null)throw ci(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ee,ne,zt,Re,Ut,N,I,j,rt,lt,st,Lt,_t,Tt,oe,dt,Et,Bt,Gt,At,ie,Zt,Te,V;function vt(){ee=new Qy(B),ee.init(),Zt=new zw(B,ee),ne=new Yy(B,ee,t,Zt),zt=new Dw(B,ee),ne.reverseDepthBuffer&&f&&zt.buffers.depth.setReversed(!0),Re=new n1(B),Ut=new _w,N=new Uw(B,ee,zt,Ut,ne,Zt,Re),I=new $y(y),j=new Jy(y),rt=new lM(B),Te=new Xy(B,rt),lt=new t1(B,rt,Re,Te),st=new s1(B,lt,rt,Re),Gt=new i1(B,ne,N),dt=new Zy(Ut),Lt=new Mw(y,I,j,ee,ne,Te,dt),_t=new Hw(y,Ut),Tt=new ww,oe=new Rw(ee),Bt=new Wy(y,I,j,zt,st,d,l),Et=new Iw(y,st,ne),V=new Vw(B,Re,ne,zt),At=new qy(B,ee,Re),ie=new e1(B,ee,Re),Re.programs=Lt.programs,y.capabilities=ne,y.extensions=ee,y.properties=Ut,y.renderLists=Tt,y.shadowMap=Et,y.state=zt,y.info=Re}vt();const tt=new Gw(y,B);this.xr=tt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const L=ee.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ee.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(L){L!==void 0&&(k=L,this.setSize(G,O,!1))},this.getSize=function(L){return L.set(G,O)},this.setSize=function(L,W,J=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=L,O=W,e.width=Math.floor(L*k),e.height=Math.floor(W*k),J===!0&&(e.style.width=L+"px",e.style.height=W+"px"),this.setViewport(0,0,L,W)},this.getDrawingBufferSize=function(L){return L.set(G*k,O*k).floor()},this.setDrawingBufferSize=function(L,W,J){G=L,O=W,k=J,e.width=Math.floor(L*J),e.height=Math.floor(W*J),this.setViewport(0,0,L,W)},this.getCurrentViewport=function(L){return L.copy(R)},this.getViewport=function(L){return L.copy(ft)},this.setViewport=function(L,W,J,Q){L.isVector4?ft.set(L.x,L.y,L.z,L.w):ft.set(L,W,J,Q),zt.viewport(R.copy(ft).multiplyScalar(k).round())},this.getScissor=function(L){return L.copy(Ct)},this.setScissor=function(L,W,J,Q){L.isVector4?Ct.set(L.x,L.y,L.z,L.w):Ct.set(L,W,J,Q),zt.scissor(C.copy(Ct).multiplyScalar(k).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(L){zt.setScissorTest(Wt=L)},this.setOpaqueSort=function(L){nt=L},this.setTransparentSort=function(L){ct=L},this.getClearColor=function(L){return L.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(L=!0,W=!0,J=!0){let Q=0;if(L){let X=!1;if(A!==null){const ht=A.texture.format;X=ht===dd||ht===fd||ht===hd}if(X){const ht=A.texture.type,Mt=ht===ds||ht===uo||ht===Ea||ht===br||ht===cd||ht===ld,bt=Bt.getClearColor(),Rt=Bt.getClearAlpha(),kt=bt.r,Ht=bt.g,Ft=bt.b;Mt?(g[0]=kt,g[1]=Ht,g[2]=Ft,g[3]=Rt,B.clearBufferuiv(B.COLOR,0,g)):(x[0]=kt,x[1]=Ht,x[2]=Ft,x[3]=Rt,B.clearBufferiv(B.COLOR,0,x))}else Q|=B.COLOR_BUFFER_BIT}W&&(Q|=B.DEPTH_BUFFER_BIT),J&&(Q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Bt.dispose(),Tt.dispose(),oe.dispose(),Ut.dispose(),I.dispose(),j.dispose(),st.dispose(),Te.dispose(),V.dispose(),Lt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Gd),tt.removeEventListener("sessionend",kd),zs.stop()};function at(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const L=Re.autoReset,W=Et.enabled,J=Et.autoUpdate,Q=Et.needsUpdate,X=Et.type;vt(),Re.autoReset=L,Et.enabled=W,Et.autoUpdate=J,Et.needsUpdate=Q,Et.type=X}function wt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function qt(L){const W=L.target;W.removeEventListener("dispose",qt),Fe(W)}function Fe(L){ln(L),Ut.remove(L)}function ln(L){const W=Ut.get(L).programs;W!==void 0&&(W.forEach(function(J){Lt.releaseProgram(J)}),L.isShaderMaterial&&Lt.releaseShaderCache(L))}this.renderBufferDirect=function(L,W,J,Q,X,ht){W===null&&(W=De);const Mt=X.isMesh&&X.matrixWorld.determinant()<0,bt=ix(L,W,J,Q,X);zt.setMaterial(Q,Mt);let Rt=J.index,kt=1;if(Q.wireframe===!0){if(Rt=lt.getWireframeAttribute(J),Rt===void 0)return;kt=2}const Ht=J.drawRange,Ft=J.attributes.position;let re=Ht.start*kt,de=(Ht.start+Ht.count)*kt;ht!==null&&(re=Math.max(re,ht.start*kt),de=Math.min(de,(ht.start+ht.count)*kt)),Rt!==null?(re=Math.max(re,0),de=Math.min(de,Rt.count)):Ft!=null&&(re=Math.max(re,0),de=Math.min(de,Ft.count));const Ye=de-re;if(Ye<0||Ye===1/0)return;Te.setup(X,Q,bt,J,Rt);let Oe,le=At;if(Rt!==null&&(Oe=rt.get(Rt),le=ie,le.setIndex(Oe)),X.isMesh)Q.wireframe===!0?(zt.setLineWidth(Q.wireframeLinewidth*He()),le.setMode(B.LINES)):le.setMode(B.TRIANGLES);else if(X.isLine){let Ot=Q.linewidth;Ot===void 0&&(Ot=1),zt.setLineWidth(Ot*He()),X.isLineSegments?le.setMode(B.LINES):X.isLineLoop?le.setMode(B.LINE_LOOP):le.setMode(B.LINE_STRIP)}else X.isPoints?le.setMode(B.POINTS):X.isSprite&&le.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)le.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))le.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ot=X._multiDrawStarts,rn=X._multiDrawCounts,pe=X._multiDrawCount,_i=Rt?rt.get(Rt).bytesPerElement:1,xo=Ut.get(Q).currentProgram.getUniforms();for(let jn=0;jn<pe;jn++)xo.setValue(B,"_gl_DrawID",jn),le.render(Ot[jn]/_i,rn[jn])}else if(X.isInstancedMesh)le.renderInstances(re,Ye,X.count);else if(J.isInstancedBufferGeometry){const Ot=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,rn=Math.min(J.instanceCount,Ot);le.renderInstances(re,Ye,rn)}else le.render(re,Ye)};function xe(L,W,J){L.transparent===!0&&L.side===Pt&&L.forceSinglePass===!1?(L.side=vn,L.needsUpdate=!0,Wa(L,W,J),L.side=Ds,L.needsUpdate=!0,Wa(L,W,J),L.side=Pt):Wa(L,W,J)}this.compile=function(L,W,J=null){J===null&&(J=L),m=oe.get(J),m.init(W),v.push(m),J.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),L!==J&&L.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights();const Q=new Set;return L.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ht=X.material;if(ht)if(Array.isArray(ht))for(let Mt=0;Mt<ht.length;Mt++){const bt=ht[Mt];xe(bt,J,X),Q.add(bt)}else xe(ht,J,X),Q.add(ht)}),v.pop(),m=null,Q},this.compileAsync=function(L,W,J=null){const Q=this.compile(L,W,J);return new Promise(X=>{function ht(){if(Q.forEach(function(Mt){Ut.get(Mt).currentProgram.isReady()&&Q.delete(Mt)}),Q.size===0){X(L);return}setTimeout(ht,10)}ee.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Mi=null;function Yi(L){Mi&&Mi(L)}function Gd(){zs.stop()}function kd(){zs.start()}const zs=new km;zs.setAnimationLoop(Yi),typeof self<"u"&&zs.setContext(self),this.setAnimationLoop=function(L){Mi=L,tt.setAnimationLoop(L),L===null?zs.stop():zs.start()},tt.addEventListener("sessionstart",Gd),tt.addEventListener("sessionend",kd),this.render=function(L,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(W),W=tt.getCamera()),L.isScene===!0&&L.onBeforeRender(y,L,W,A),m=oe.get(L,v.length),m.init(W),v.push(m),It.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),et.setFromProjectionMatrix(It),yt=this.localClippingEnabled,ut=dt.init(this.clippingPlanes,yt),h=Tt.get(L,M.length),h.init(),M.push(h),tt.enabled===!0&&tt.isPresenting===!0){const ht=y.xr.getDepthSensingMesh();ht!==null&&Jl(ht,W,-1/0,y.sortObjects)}Jl(L,W,0,y.sortObjects),h.finish(),y.sortObjects===!0&&h.sort(nt,ct),se=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,se&&Bt.addToRenderList(h,L),this.info.render.frame++,ut===!0&&dt.beginShadows();const J=m.state.shadowsArray;Et.render(J,L,W),ut===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=h.opaque,X=h.transmissive;if(m.setupLights(),W.isArrayCamera){const ht=W.cameras;if(X.length>0)for(let Mt=0,bt=ht.length;Mt<bt;Mt++){const Rt=ht[Mt];Vd(Q,X,L,Rt)}se&&Bt.render(L);for(let Mt=0,bt=ht.length;Mt<bt;Mt++){const Rt=ht[Mt];Hd(h,L,Rt,Rt.viewport)}}else X.length>0&&Vd(Q,X,L,W),se&&Bt.render(L),Hd(h,L,W);A!==null&&b===0&&(N.updateMultisampleRenderTarget(A),N.updateRenderTargetMipmap(A)),L.isScene===!0&&L.onAfterRender(y,L,W),Te.resetDefaultState(),S=-1,w=null,v.pop(),v.length>0?(m=v[v.length-1],ut===!0&&dt.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?h=M[M.length-1]:h=null};function Jl(L,W,J,Q){if(L.visible===!1)return;if(L.layers.test(W.layers)){if(L.isGroup)J=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(W);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||et.intersectsSprite(L)){Q&&Kt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(It);const Mt=st.update(L),bt=L.material;bt.visible&&h.push(L,Mt,bt,J,Kt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||et.intersectsObject(L))){const Mt=st.update(L),bt=L.material;if(Q&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Kt.copy(L.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Kt.copy(Mt.boundingSphere.center)),Kt.applyMatrix4(L.matrixWorld).applyMatrix4(It)),Array.isArray(bt)){const Rt=Mt.groups;for(let kt=0,Ht=Rt.length;kt<Ht;kt++){const Ft=Rt[kt],re=bt[Ft.materialIndex];re&&re.visible&&h.push(L,Mt,re,J,Kt.z,Ft)}}else bt.visible&&h.push(L,Mt,bt,J,Kt.z,null)}}const ht=L.children;for(let Mt=0,bt=ht.length;Mt<bt;Mt++)Jl(ht[Mt],W,J,Q)}function Hd(L,W,J,Q){const X=L.opaque,ht=L.transmissive,Mt=L.transparent;m.setupLightsView(J),ut===!0&&dt.setGlobalState(y.clippingPlanes,J),Q&&zt.viewport(R.copy(Q)),X.length>0&&Va(X,W,J),ht.length>0&&Va(ht,W,J),Mt.length>0&&Va(Mt,W,J),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function Vd(L,W,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Q.id]===void 0&&(m.state.transmissionRenderTarget[Q.id]=new Ri(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?cs:ds,minFilter:no,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const ht=m.state.transmissionRenderTarget[Q.id],Mt=Q.viewport||R;ht.setSize(Mt.z*y.transmissionResolutionScale,Mt.w*y.transmissionResolutionScale);const bt=y.getRenderTarget();y.setRenderTarget(ht),y.getClearColor(U),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear(),se&&Bt.render(J);const Rt=y.toneMapping;y.toneMapping=Ls;const kt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),m.setupLightsView(Q),ut===!0&&dt.setGlobalState(y.clippingPlanes,Q),Va(L,J,Q),N.updateMultisampleRenderTarget(ht),N.updateRenderTargetMipmap(ht),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Ft=0,re=W.length;Ft<re;Ft++){const de=W[Ft],Ye=de.object,Oe=de.geometry,le=de.material,Ot=de.group;if(le.side===Pt&&Ye.layers.test(Q.layers)){const rn=le.side;le.side=vn,le.needsUpdate=!0,Wd(Ye,J,Q,Oe,le,Ot),le.side=rn,le.needsUpdate=!0,Ht=!0}}Ht===!0&&(N.updateMultisampleRenderTarget(ht),N.updateRenderTargetMipmap(ht))}y.setRenderTarget(bt),y.setClearColor(U,H),kt!==void 0&&(Q.viewport=kt),y.toneMapping=Rt}function Va(L,W,J){const Q=W.isScene===!0?W.overrideMaterial:null;for(let X=0,ht=L.length;X<ht;X++){const Mt=L[X],bt=Mt.object,Rt=Mt.geometry,kt=Q===null?Mt.material:Q,Ht=Mt.group;bt.layers.test(J.layers)&&Wd(bt,W,J,Rt,kt,Ht)}}function Wd(L,W,J,Q,X,ht){L.onBeforeRender(y,W,J,Q,X,ht),L.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),X.onBeforeRender(y,W,J,Q,L,ht),X.transparent===!0&&X.side===Pt&&X.forceSinglePass===!1?(X.side=vn,X.needsUpdate=!0,y.renderBufferDirect(J,W,Q,X,L,ht),X.side=Ds,X.needsUpdate=!0,y.renderBufferDirect(J,W,Q,X,L,ht),X.side=Pt):y.renderBufferDirect(J,W,Q,X,L,ht),L.onAfterRender(y,W,J,Q,X,ht)}function Wa(L,W,J){W.isScene!==!0&&(W=De);const Q=Ut.get(L),X=m.state.lights,ht=m.state.shadowsArray,Mt=X.state.version,bt=Lt.getParameters(L,X.state,ht,W,J),Rt=Lt.getProgramCacheKey(bt);let kt=Q.programs;Q.environment=L.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(L.isMeshStandardMaterial?j:I).get(L.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&L.envMap===null?W.environmentRotation:L.envMapRotation,kt===void 0&&(L.addEventListener("dispose",qt),kt=new Map,Q.programs=kt);let Ht=kt.get(Rt);if(Ht!==void 0){if(Q.currentProgram===Ht&&Q.lightsStateVersion===Mt)return qd(L,bt),Ht}else bt.uniforms=Lt.getUniforms(L),L.onBeforeCompile(bt,y),Ht=Lt.acquireProgram(bt,Rt),kt.set(Rt,Ht),Q.uniforms=bt.uniforms;const Ft=Q.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ft.clippingPlanes=dt.uniform),qd(L,bt),Q.needsLights=ox(L),Q.lightsStateVersion=Mt,Q.needsLights&&(Ft.ambientLightColor.value=X.state.ambient,Ft.lightProbe.value=X.state.probe,Ft.directionalLights.value=X.state.directional,Ft.directionalLightShadows.value=X.state.directionalShadow,Ft.spotLights.value=X.state.spot,Ft.spotLightShadows.value=X.state.spotShadow,Ft.rectAreaLights.value=X.state.rectArea,Ft.ltc_1.value=X.state.rectAreaLTC1,Ft.ltc_2.value=X.state.rectAreaLTC2,Ft.pointLights.value=X.state.point,Ft.pointLightShadows.value=X.state.pointShadow,Ft.hemisphereLights.value=X.state.hemi,Ft.directionalShadowMap.value=X.state.directionalShadowMap,Ft.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ft.spotShadowMap.value=X.state.spotShadowMap,Ft.spotLightMatrix.value=X.state.spotLightMatrix,Ft.spotLightMap.value=X.state.spotLightMap,Ft.pointShadowMap.value=X.state.pointShadowMap,Ft.pointShadowMatrix.value=X.state.pointShadowMatrix),Q.currentProgram=Ht,Q.uniformsList=null,Ht}function Xd(L){if(L.uniformsList===null){const W=L.currentProgram.getUniforms();L.uniformsList=Vc.seqWithValue(W.seq,L.uniforms)}return L.uniformsList}function qd(L,W){const J=Ut.get(L);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function ix(L,W,J,Q,X){W.isScene!==!0&&(W=De),N.resetTextureUnits();const ht=W.fog,Mt=Q.isMeshStandardMaterial?W.environment:null,bt=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Er,Rt=(Q.isMeshStandardMaterial?j:I).get(Q.envMap||Mt),kt=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ht=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ft=!!J.morphAttributes.position,re=!!J.morphAttributes.normal,de=!!J.morphAttributes.color;let Ye=Ls;Q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ye=y.toneMapping);const Oe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,le=Oe!==void 0?Oe.length:0,Ot=Ut.get(Q),rn=m.state.lights;if(ut===!0&&(yt===!0||L!==w)){const _n=L===w&&Q.id===S;dt.setState(Q,L,_n)}let pe=!1;Q.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==rn.state.version||Ot.outputColorSpace!==bt||X.isBatchedMesh&&Ot.batching===!1||!X.isBatchedMesh&&Ot.batching===!0||X.isBatchedMesh&&Ot.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ot.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ot.instancing===!1||!X.isInstancedMesh&&Ot.instancing===!0||X.isSkinnedMesh&&Ot.skinning===!1||!X.isSkinnedMesh&&Ot.skinning===!0||X.isInstancedMesh&&Ot.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ot.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ot.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ot.instancingMorph===!1&&X.morphTexture!==null||Ot.envMap!==Rt||Q.fog===!0&&Ot.fog!==ht||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==dt.numPlanes||Ot.numIntersection!==dt.numIntersection)||Ot.vertexAlphas!==kt||Ot.vertexTangents!==Ht||Ot.morphTargets!==Ft||Ot.morphNormals!==re||Ot.morphColors!==de||Ot.toneMapping!==Ye||Ot.morphTargetsCount!==le)&&(pe=!0):(pe=!0,Ot.__version=Q.version);let _i=Ot.currentProgram;pe===!0&&(_i=Wa(Q,W,X));let xo=!1,jn=!1,Or=!1;const Ie=_i.getUniforms(),li=Ot.uniforms;if(zt.useProgram(_i.program)&&(xo=!0,jn=!0,Or=!0),Q.id!==S&&(S=Q.id,jn=!0),xo||w!==L){zt.buffers.depth.getReversed()?(mt.copy(L.projectionMatrix),Kx(mt),Jx(mt),Ie.setValue(B,"projectionMatrix",mt)):Ie.setValue(B,"projectionMatrix",L.projectionMatrix),Ie.setValue(B,"viewMatrix",L.matrixWorldInverse);const Gn=Ie.map.cameraPosition;Gn!==void 0&&Gn.setValue(B,Nt.setFromMatrixPosition(L.matrixWorld)),ne.logarithmicDepthBuffer&&Ie.setValue(B,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ie.setValue(B,"isOrthographic",L.isOrthographicCamera===!0),w!==L&&(w=L,jn=!0,Or=!0)}if(X.isSkinnedMesh){Ie.setOptional(B,X,"bindMatrix"),Ie.setOptional(B,X,"bindMatrixInverse");const _n=X.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Ie.setValue(B,"boneTexture",_n.boneTexture,N))}X.isBatchedMesh&&(Ie.setOptional(B,X,"batchingTexture"),Ie.setValue(B,"batchingTexture",X._matricesTexture,N),Ie.setOptional(B,X,"batchingIdTexture"),Ie.setValue(B,"batchingIdTexture",X._indirectTexture,N),Ie.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&Ie.setValue(B,"batchingColorTexture",X._colorsTexture,N));const ui=J.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&Gt.update(X,J,_i),(jn||Ot.receiveShadow!==X.receiveShadow)&&(Ot.receiveShadow=X.receiveShadow,Ie.setValue(B,"receiveShadow",X.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(li.envMap.value=Rt,li.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(li.envMapIntensity.value=W.environmentIntensity),jn&&(Ie.setValue(B,"toneMappingExposure",y.toneMappingExposure),Ot.needsLights&&sx(li,Or),ht&&Q.fog===!0&&_t.refreshFogUniforms(li,ht),_t.refreshMaterialUniforms(li,Q,k,O,m.state.transmissionRenderTarget[L.id]),Vc.upload(B,Xd(Ot),li,N)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Vc.upload(B,Xd(Ot),li,N),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ie.setValue(B,"center",X.center),Ie.setValue(B,"modelViewMatrix",X.modelViewMatrix),Ie.setValue(B,"normalMatrix",X.normalMatrix),Ie.setValue(B,"modelMatrix",X.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const _n=Q.uniformsGroups;for(let Gn=0,Ql=_n.length;Gn<Ql;Gn++){const Ns=_n[Gn];V.update(Ns,_i),V.bind(Ns,_i)}}return _i}function sx(L,W){L.ambientLightColor.needsUpdate=W,L.lightProbe.needsUpdate=W,L.directionalLights.needsUpdate=W,L.directionalLightShadows.needsUpdate=W,L.pointLights.needsUpdate=W,L.pointLightShadows.needsUpdate=W,L.spotLights.needsUpdate=W,L.spotLightShadows.needsUpdate=W,L.rectAreaLights.needsUpdate=W,L.hemisphereLights.needsUpdate=W}function ox(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(L,W,J){Ut.get(L.texture).__webglTexture=W,Ut.get(L.depthTexture).__webglTexture=J;const Q=Ut.get(L);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,W){const J=Ut.get(L);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0};const rx=B.createFramebuffer();this.setRenderTarget=function(L,W=0,J=0){A=L,E=W,b=J;let Q=!0,X=null,ht=!1,Mt=!1;if(L){const Rt=Ut.get(L);if(Rt.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(B.FRAMEBUFFER,null),Q=!1;else if(Rt.__webglFramebuffer===void 0)N.setupRenderTarget(L);else if(Rt.__hasExternalTextures)N.rebindTextures(L,Ut.get(L.texture).__webglTexture,Ut.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Ft=L.depthTexture;if(Rt.__boundDepthTexture!==Ft){if(Ft!==null&&Ut.has(Ft)&&(L.width!==Ft.image.width||L.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(L)}}const kt=L.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Mt=!0);const Ht=Ut.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ht[W])?X=Ht[W][J]:X=Ht[W],ht=!0):L.samples>0&&N.useMultisampledRTT(L)===!1?X=Ut.get(L).__webglMultisampledFramebuffer:Array.isArray(Ht)?X=Ht[J]:X=Ht,R.copy(L.viewport),C.copy(L.scissor),D=L.scissorTest}else R.copy(ft).multiplyScalar(k).floor(),C.copy(Ct).multiplyScalar(k).floor(),D=Wt;if(J!==0&&(X=rx),zt.bindFramebuffer(B.FRAMEBUFFER,X)&&Q&&zt.drawBuffers(L,X),zt.viewport(R),zt.scissor(C),zt.setScissorTest(D),ht){const Rt=Ut.get(L.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Rt.__webglTexture,J)}else if(Mt){const Rt=Ut.get(L.texture),kt=W;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.__webglTexture,J,kt)}else if(L!==null&&J!==0){const Rt=Ut.get(L.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Rt.__webglTexture,J)}S=-1},this.readRenderTargetPixels=function(L,W,J,Q,X,ht,Mt){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Ut.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){zt.bindFramebuffer(B.FRAMEBUFFER,bt);try{const Rt=L.texture,kt=Rt.format,Ht=Rt.type;if(!ne.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=L.width-Q&&J>=0&&J<=L.height-X&&B.readPixels(W,J,Q,X,Zt.convert(kt),Zt.convert(Ht),ht)}finally{const Rt=A!==null?Ut.get(A).__webglFramebuffer:null;zt.bindFramebuffer(B.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(L,W,J,Q,X,ht,Mt){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Ut.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){const Rt=L.texture,kt=Rt.format,Ht=Rt.type;if(!ne.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=L.width-Q&&J>=0&&J<=L.height-X){zt.bindFramebuffer(B.FRAMEBUFFER,bt);const Ft=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ft),B.bufferData(B.PIXEL_PACK_BUFFER,ht.byteLength,B.STREAM_READ),B.readPixels(W,J,Q,X,Zt.convert(kt),Zt.convert(Ht),0);const re=A!==null?Ut.get(A).__webglFramebuffer:null;zt.bindFramebuffer(B.FRAMEBUFFER,re);const de=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await jx(B,de,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ft),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ht),B.deleteBuffer(Ft),B.deleteSync(de),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,W=null,J=0){L.isTexture!==!0&&(Wo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,L=arguments[1]);const Q=Math.pow(2,-J),X=Math.floor(L.image.width*Q),ht=Math.floor(L.image.height*Q),Mt=W!==null?W.x:0,bt=W!==null?W.y:0;N.setTexture2D(L,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,Mt,bt,X,ht),zt.unbindTexture()};const ax=B.createFramebuffer(),cx=B.createFramebuffer();this.copyTextureToTexture=function(L,W,J=null,Q=null,X=0,ht=null){L.isTexture!==!0&&(Wo("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,L=arguments[1],W=arguments[2],ht=arguments[3]||0,J=null),ht===null&&(X!==0?(Wo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=X,X=0):ht=0);let Mt,bt,Rt,kt,Ht,Ft,re,de,Ye;const Oe=L.isCompressedTexture?L.mipmaps[ht]:L.image;if(J!==null)Mt=J.max.x-J.min.x,bt=J.max.y-J.min.y,Rt=J.isBox3?J.max.z-J.min.z:1,kt=J.min.x,Ht=J.min.y,Ft=J.isBox3?J.min.z:0;else{const ui=Math.pow(2,-X);Mt=Math.floor(Oe.width*ui),bt=Math.floor(Oe.height*ui),L.isDataArrayTexture?Rt=Oe.depth:L.isData3DTexture?Rt=Math.floor(Oe.depth*ui):Rt=1,kt=0,Ht=0,Ft=0}Q!==null?(re=Q.x,de=Q.y,Ye=Q.z):(re=0,de=0,Ye=0);const le=Zt.convert(W.format),Ot=Zt.convert(W.type);let rn;W.isData3DTexture?(N.setTexture3D(W,0),rn=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(N.setTexture2DArray(W,0),rn=B.TEXTURE_2D_ARRAY):(N.setTexture2D(W,0),rn=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const pe=B.getParameter(B.UNPACK_ROW_LENGTH),_i=B.getParameter(B.UNPACK_IMAGE_HEIGHT),xo=B.getParameter(B.UNPACK_SKIP_PIXELS),jn=B.getParameter(B.UNPACK_SKIP_ROWS),Or=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Oe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Oe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,kt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ht),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ft);const Ie=L.isDataArrayTexture||L.isData3DTexture,li=W.isDataArrayTexture||W.isData3DTexture;if(L.isDepthTexture){const ui=Ut.get(L),_n=Ut.get(W),Gn=Ut.get(ui.__renderTarget),Ql=Ut.get(_n.__renderTarget);zt.bindFramebuffer(B.READ_FRAMEBUFFER,Gn.__webglFramebuffer),zt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ql.__webglFramebuffer);for(let Ns=0;Ns<Rt;Ns++)Ie&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ut.get(L).__webglTexture,X,Ft+Ns),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ut.get(W).__webglTexture,ht,Ye+Ns)),B.blitFramebuffer(kt,Ht,Mt,bt,re,de,Mt,bt,B.DEPTH_BUFFER_BIT,B.NEAREST);zt.bindFramebuffer(B.READ_FRAMEBUFFER,null),zt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||L.isRenderTargetTexture||Ut.has(L)){const ui=Ut.get(L),_n=Ut.get(W);zt.bindFramebuffer(B.READ_FRAMEBUFFER,ax),zt.bindFramebuffer(B.DRAW_FRAMEBUFFER,cx);for(let Gn=0;Gn<Rt;Gn++)Ie?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ui.__webglTexture,X,Ft+Gn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ui.__webglTexture,X),li?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,_n.__webglTexture,ht,Ye+Gn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,_n.__webglTexture,ht),X!==0?B.blitFramebuffer(kt,Ht,Mt,bt,re,de,Mt,bt,B.COLOR_BUFFER_BIT,B.NEAREST):li?B.copyTexSubImage3D(rn,ht,re,de,Ye+Gn,kt,Ht,Mt,bt):B.copyTexSubImage2D(rn,ht,re,de,kt,Ht,Mt,bt);zt.bindFramebuffer(B.READ_FRAMEBUFFER,null),zt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else li?L.isDataTexture||L.isData3DTexture?B.texSubImage3D(rn,ht,re,de,Ye,Mt,bt,Rt,le,Ot,Oe.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(rn,ht,re,de,Ye,Mt,bt,Rt,le,Oe.data):B.texSubImage3D(rn,ht,re,de,Ye,Mt,bt,Rt,le,Ot,Oe):L.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ht,re,de,Mt,bt,le,Ot,Oe.data):L.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ht,re,de,Oe.width,Oe.height,le,Oe.data):B.texSubImage2D(B.TEXTURE_2D,ht,re,de,Mt,bt,le,Ot,Oe);B.pixelStorei(B.UNPACK_ROW_LENGTH,pe),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_i),B.pixelStorei(B.UNPACK_SKIP_PIXELS,xo),B.pixelStorei(B.UNPACK_SKIP_ROWS,jn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Or),ht===0&&W.generateMipmaps&&B.generateMipmap(rn),zt.unbindTexture()},this.copyTextureToTexture3D=function(L,W,J=null,Q=null,X=0){return L.isTexture!==!0&&(Wo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,L=arguments[2],W=arguments[3],X=arguments[4]||0),Wo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,W,J,Q,X)},this.initRenderTarget=function(L){Ut.get(L).__webglFramebuffer===void 0&&N.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?N.setTextureCube(L,0):L.isData3DTexture?N.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?N.setTexture2DArray(L,0):N.setTexture2D(L,0),zt.unbindTexture()},this.resetState=function(){E=0,b=0,A=null,zt.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return os}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}const Xw=15,qw=6,Yw=1.8,vl=8,sp=.85,op=.98,Ml=.003,jt=90,Yl=1.7,rp=500,Zw=250,$w=18,jw=35,Kw=40,Jw=12,Qw=35,t2=1200,e2=160,n2=140,i2=40,s2=60,o2=12,Ad=250,qm=6,r2=25,a2=8,c2=40,l2=50,u2=10,h2=30,f2=30,d2=24,p2=45,m2=24,g2=36,x2=36,v2=45,M2=25,hs=280,nf=2.5,_2=6,ap=1.5,xn=5,cp=2.5,Fo=12,Ce=30,ar=.18,y2=30,w2=5,S2=.15,b2=.05,T2=64,Rd=[6719624,8956620,6741418,11206604,14548974,16777215],E2=[.4,.6,.8,1,1.2,1.5],A2=[12,16,20,25,30,40],R2=8,C2=2.2,z={sky:528408,fog:396308,ground:1720360,bark:5914672,leaf:1722400,leafGlow:4521898,mushCap:8926190,mushGlow:13400063,mushStem:2756928,crystal:3407837,crystalCore:8978414,firefly:15662950,fireflyB:6750173,spore:12320665,ambient:2241365,moon:12307694,jellyBell:7833855,jellyGlow:11193599,jellyTent:6715340,puffBody:16768460,puffGlow:16755336,puffEye:2236962,puffCheek:16746649,deerBody:11202303,deerGlow:8969727,deerAntler:13434862,deerEye:1127236,mothWing:11206553,mothGlow:13434794,mothBody:5596723,mothSpot:16777215,grass1:1721376,grass2:865048,grassTip:3385941,grassPurple:[1706530,2363962,4857960,11158766,13400063,16746717,2757952,6697898,11158783],grassBlue:[660514,858677,2114917,4500206,6741503,8974079,1387077,3368618,4500223],grassTeal:[662042,1059362,2121808,4517563,6750173,11206536,1720376,3385992,4521915],fern:1725744,fernGlow:3394662,flower:16742348,flowerGlow:16751069,flowerStem:1721376,reed:2774325,reedTip:4504422,orbGold:16763955,orbGlow:16772778,orbInner:16775389,laserPink:16737962,laserGlow:16746700,obeliskBlack:657938,obeliskPink:16729258,moatBlue:3377356,rainbow:[16724787,16746547,16772659,3407718,3377407,8926207],wispCore:11202303,wispGlow:14544639,wispTrail:8965375,dandStem:4482611,dandHead:16777198,dandSeed:16775389,dandSeedGlow:16777215,fairyMush:13404415,fairyGlow:14527231,fairyRing:11167470,bubbleIris:11197951,bubbleShine:16777215,bubblePop:13434862,starMote:16772829,starGlow:16777164,pondWater:2254506,pondGlow:3377356,lilyPad:2263108,lilyFlower:16746700,lilyGlow:16755421,echoBloom:11206604,echoWave:8978363,rockBase:9079440,rockLight:10132126,rockMoss:1721378,rockGranite:[9079440,10132126,6974066,10526888],rockSandstone:[10127984,11575432,8022613,12628120],rockLimestone:[10526872,11579560,8421496,13158592],rockSlate:[6320256,7372944,5265512,8951976],rockBasalt:[5263448,6316136,4210760,7368824],skyDeep:198160,skyNeb1:2230323,skyNeb2:530483,skyNeb3:1706024,skyNeb4:662050,skyNeb5:1575464,skyStarBright:16777215,skyStarDim:8952251,skyStarWarm:16768426,skyStarCool:11193599,skyGalaxy:6706568,skyAnomaly:[16729224,4521932,16755234,8930559,2285055,16737860],skyConstLine:3359846,thornOrb:16755268,thornOrbGlow:16764006,thornPetal:6689075,thornSpike:2759184,thornStem:1717024,helixStem:1714240,helixPod:6697983,helixPodGlow:8934911,helixRing:4465322,helixNode:5588172,snapBody:2271846,snapBodyGlow:4521864,snapTip:6750122,snapTipGlow:8978380,snapFrond:1730116,spiralStem:1716288,spiralFrond:2271880,spiralGlow:4521932,spiralTip:8978414,corpseSpathe:5574946,corpseColumn:8921668,corpseGlow:13382485,corpseLeaf:1717016,orbBushLeaf:2245666,orbBushOrb:16746700,orbBushGlow:16755421,orbBushStem:1718312,lanternStem:2769954,lanternPod:16768358,lanternGlow:16772744,lanternHaze:16763972,veilSupport:3816e3,veilMoss:4508808,veilGlow:6750122,veilEdge:8978380,groundGlowColors:[3407837,4521898,13400063,4500206,8978380]},sn=new Ww({antialias:!0,powerPreference:"default"});sn.setSize(window.innerWidth,window.innerHeight);sn.setPixelRatio(Math.min(window.devicePixelRatio,1.5));sn.shadowMap.enabled=!0;sn.shadowMap.type=em;sn.toneMapping=im;sn.toneMappingExposure=2.8;sn.outputColorSpace=Fn;document.body.appendChild(sn.domElement);const pn=new ei(65,window.innerWidth/window.innerHeight,.1,300),Ym=new Gm,ot=new _v;ot.background=new it(z.skyDeep);ot.fog=new md(z.fog,.01);window.addEventListener("resize",()=>{pn.aspect=window.innerWidth/window.innerHeight,pn.updateProjectionMatrix(),sn.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("visibilitychange",()=>{document.hidden||Ym.getDelta()});const Zm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ga{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const P2=new Td(-1,1,1,-1,0,1);class I2 extends Ae{constructor(){super(),this.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Vt([0,2,0,0,2,0],2))}}const L2=new I2;class $m{constructor(t){this._mesh=new P(L2,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,P2)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class jm extends Ga{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Xn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=fl.clone(t.uniforms),this.material=new Xn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new $m(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class lp extends Ga{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class D2 extends Ga{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class U2{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new pt);this._width=n.width,this._height=n.height,e=new Ri(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:cs}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jm(Zm),this.copyPass.material.blending=as,this.clock=new Gm}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}lp!==void 0&&(r instanceof lp?n=!0:r instanceof D2&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class z2 extends Ga{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new it}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const N2={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new it(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Cr extends Ga{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new pt(t.x,t.y):new pt(256,256),this.clearColor=new it(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Ri(o,r,{type:cs}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const f=new Ri(o,r,{type:cs});f.texture.name="UnrealBloomPass.h"+p,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Ri(o,r,{type:cs});d.texture.name="UnrealBloomPass.v"+p,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),o=Math.round(o/2),r=Math.round(r/2)}const a=N2;this.highPassUniforms=fl.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new pt(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=Zm;this.copyUniforms=fl.clone(c.uniforms),this.blendMaterial=new Xn({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Jt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new it,this.oldClearAlpha=1,this.basic=new $,this.fsQuad=new $m(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new pt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Cr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Cr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Xn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new pt(.5,.5)},direction:{value:new pt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Xn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Cr.BlurDirectionX=new pt(1,0);Cr.BlurDirectionY=new pt(0,1);const F2={uniforms:{tDiffuse:{value:null},saturation:{value:1}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float saturation;
    varying vec2 vUv;
    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      float luma = dot(color.rgb, vec3(0.299, 0.587, 0.114));
      vec3 grey = vec3(luma);
      gl_FragColor = vec4(mix(grey, color.rgb, saturation), color.a);
    }
  `};let Rs=null,Cd=!0,Ko=null,_l=null;try{const i=new z2(ot,pn);Ko=new Cr(new pt(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2)),.6,.4,.85),_l=new jm(F2),Rs=new U2(sn),Rs.addPass(i),Rs.addPass(Ko),Rs.addPass(_l)}catch(i){console.warn("Bloom unavailable, falling back to direct render:",i.message),Cd=!1}function O2(i){_l&&(_l.uniforms.saturation.value=i)}window.addEventListener("resize",()=>{Cd&&Rs&&Rs.setSize(window.innerWidth,window.innerHeight)});function up(){Cd&&Rs?Rs.render():sn.render(ot,pn)}const yl=new sM(z.ambient,z.ground,.65);ot.add(yl);const vi=new Xl(z.moon,.85);vi.position.set(30,60,-20);vi.castShadow=!0;vi.shadow.camera.left=-90;vi.shadow.camera.right=90;vi.shadow.camera.top=90;vi.shadow.camera.bottom=-90;vi.shadow.camera.near=1;vi.shadow.camera.far=250;vi.shadow.mapSize.set(1024,1024);vi.shadow.bias=-.001;ot.add(vi);const Pd=new Xl(2241365,.3);Pd.position.set(-40,45,25);ot.add(Pd);const Km=new Xl(3359829,.4);Km.position.set(-25,15,30);ot.add(Km);const Jm=new Ur(3368516,.7,100);Jm.position.set(0,.5,0);ot.add(Jm);const Qm=new Xl(4478327,.4);Qm.position.set(-10,25,40);ot.add(Qm);const je=new Ur(6719624,.6,20);ot.add(je);const Ys=[];function B2(){for(let i=0;i<w2;i++){const t=new Ur(z.crystal,0,16);ot.add(t),Ys.push(t)}}const oa=new Ur(z.orbGold,0,15);ot.add(oa);const We={};let La=0,co=0,Zl=!1,tg=!1,Id=0,Ld=0,Dd=!1,$l=!1,Nr=!1,wl=null,fo=null,sf=0,of=0,rf=null;function G2(i){rf=i}function k2(i){tg=i}function H2(i){$l=i}function ka(){!tg&&rf&&rf()}window.addEventListener("keydown",i=>{We[i.code]=!0,"Space ShiftLeft ShiftRight KeyW KeyA KeyS KeyD".split(" ").indexOf(i.code)>=0&&i.preventDefault(),ka()});window.addEventListener("keyup",i=>{We[i.code]=!1});window.addEventListener("blur",()=>{for(const i in We)We[i]=!1;Zl=!1});sn.domElement.addEventListener("mousedown",()=>{Zl=!0,ka()});window.addEventListener("mouseup",()=>{Zl=!1});window.addEventListener("mousemove",i=>{Zl&&(La-=i.movementX*Ml,co-=i.movementY*Ml,co=Math.max(-1,Math.min(1,co)))});const V2="ontouchstart"in window||navigator.maxTouchPoints>0,Ha=document.getElementById("joy-zone"),Sl=document.getElementById("joy-knob"),Ud=document.getElementById("btn-jump");V2&&(Ha.style.display="block",Ud.style.display="block",document.getElementById("controls").textContent="Stick: Move · Drag right: Look · JUMP");function eg(i,t){const e=Ha.getBoundingClientRect();let n=i-(e.left+e.width/2),s=t-(e.top+e.height/2);const o=Math.sqrt(n*n+s*s),r=52;o>r&&(n=n/o*r,s=s/o*r),Id=n/r,Ld=s/r,Sl.style.left=40+n+"px",Sl.style.top=40+s+"px"}Ha.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),ka();const t=i.changedTouches[0];wl=t.identifier,Dd=!0,eg(t.clientX,t.clientY)},{passive:!1});Ha.addEventListener("touchmove",i=>{i.preventDefault(),i.stopPropagation();for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===wl&&eg(i.changedTouches[t].clientX,i.changedTouches[t].clientY)},{passive:!1});Ha.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation();for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===wl&&(wl=null,Dd=!1,Id=0,Ld=0,Sl.style.left="40px",Sl.style.top="40px")},{passive:!1});Ud.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),ka(),$l=!0},{passive:!1});Ud.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation(),$l=!1},{passive:!1});sn.domElement.addEventListener("touchstart",i=>{i.preventDefault(),ka();for(let t=0;t<i.changedTouches.length;t++){const e=i.changedTouches[t];e.clientX>window.innerWidth*.3&&fo===null&&(fo=e.identifier,sf=e.clientX,of=e.clientY)}},{passive:!1});sn.domElement.addEventListener("touchmove",i=>{i.preventDefault();for(let t=0;t<i.changedTouches.length;t++){const e=i.changedTouches[t];e.identifier===fo&&(La-=(e.clientX-sf)*Ml,co-=(e.clientY-of)*Ml,co=Math.max(-1,Math.min(1,co)),sf=e.clientX,of=e.clientY)}},{passive:!1});sn.domElement.addEventListener("touchend",i=>{for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===fo&&(fo=null)},{passive:!1});sn.domElement.addEventListener("touchcancel",i=>{for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===fo&&(fo=null)},{passive:!1});function W2(){let i=0,t=0;We.KeyW&&(t-=1),We.KeyS&&(t+=1),We.KeyA&&(i-=1),We.KeyD&&(i+=1),Dd&&(i+=Id,t+=Ld);const e=Math.sqrt(i*i+t*t);e>1&&(i/=e,t/=e);const n=qw*(We.ShiftLeft||We.ShiftRight||Nr?Yw:1),s=Math.sin(La),o=Math.cos(La);return{x:(i*o+t*s)*n,z:(-i*s+t*o)*n}}const $n={mushCap:new Y(.5,8,5),mushStem:new gt(.06,.1,.6,5),mushDot:new Y(.06,4,3),crystal:new gt(0,.35,1.8,6),crystalSm:new gt(0,.18,.9,5),fly:new Y(.06,4,3),spore:new Y(.04,3,3),dandSeed:new Y(.025,3,3),bubble:new Y(.15,8,6),starMote:new Y(.03,3,3),dustMote:new Y(.035,3,3)};let xa=42;function _(){return xa=xa*16807%2147483647,(xa&2147483647)/2147483647}function ng(){return xa}function af(i){xa=i}function Jo(i,t){let e=i*374761393+t*668265263+1274126177|0;return e=(e^e>>13)*1274126177|0,(e&2147483647)/2147483647}function Qo(i){return i*i*(3-2*i)}function jl(i,t){const e=Math.floor(i),n=Math.floor(t),s=Qo(i-e),o=Qo(t-n),r=Jo(e,n),a=Jo(e+1,n),l=Jo(e,n+1),u=Jo(e+1,n+1);return r+(a-r)*s+(l-r)*o+(r-a-l+u)*s*o}function io(i,t,e){let n=0,s=.5,o=1;for(let r=0;r<e;r++)n+=jl(i*o,t*o)*s,s*=.5,o*=2;return n}function hp(i,t,e){let n=0,s=1,o=1,r=1;for(let a=0;a<e;a++){let l=Math.abs(jl(i*o,t*o)-.5)*2;l=1-l,l=l*l,l*=r,r=Math.min(1,l*1.5),n+=l*s,s*=.45,o*=2.1}return n}function X2(i,t){const e=Math.floor(i),n=Math.floor(t);let s=999;for(let o=-1;o<=1;o++)for(let r=-1;r<=1;r++){const a=e+o+Jo(e+o,n+r)*.8+.1,l=n+r+Jo(n+r+7,e+o+3)*.8+.1,u=Math.sqrt((i-a)*(i-a)+(t-l)*(t-l));u<s&&(s=u)}return s}function q2(i,t){let e=0;const n=.028,s=i*.82+t*.57,o=-i*.57+t*.82,r=hp(s*n+400,o*n+500,4);e+=r*3.5;const a=.018,l=i*.34+t*.94,u=-i*.94+t*.34,c=hp(l*a-200,u*a+150,3);e+=c*2;const p=.045,f=X2(i*p+70,t*p+90),d=Math.max(0,1-f*1.6),g=d*d*(3-2*d),x=2+io(i*.01+600,t*.01+700,2)*4;e+=g*x;const h=io(i*.08+800,t*.08+900,3),m=h*h*4;e+=m;const M=io(i*.025-300,t*.025-400,3),v=5,y=Math.floor(M*v)/v,T=(M*.3+y*.7)*3;e+=T;const E=.04,b=i*.5+t*.87,A=-i*.87+t*.5,S=Math.abs(jl(b*E+150,A*E+250)-.5)*2,w=S*S;return e-=(1-w)*1.5,e}const cf=[];function lf(i,t,e){cf.push({x:i,z:t,r:e})}function Dt(i,t){const e=Math.sqrt(i*i+t*t),n=1-Qo(Math.max(0,(e-jt*.7)/(jt*.3))),s=Qo(Math.min(1,e/10)),o=.012,r=io(i*o+200,t*o+300,3),a=Qo(Math.max(0,Math.min(1,(r-.15)*2))),l=.035,u=io(i*l,t*l,4),c=io(i*l*2.7+50,t*l*2.7+50,3),p=jl(i*.15,t*.15),d=io(i*l*.6-100,t*l*.6-100,3)*1.5,g=u*5*a,x=c*1.5*a,h=p*.2;let m=d+g+x+h;const M=q2(i,t),v=.3+a*.7;m+=M*v,m*=n*s;for(let y=0;y<cf.length;y++){const T=cf[y],E=i-T.x,b=t-T.z,A=Math.sqrt(E*E+b*b);if(A<T.r*2.5){const S=Qo(Math.max(0,(A-T.r*.5)/(T.r*2)));m*=S}}return m}function Kl(i,t){const n=Dt(i,t),s=Dt(i+.3,t),o=Dt(i,t+.3),r=-(s-n)/.3,a=-(o-n)/.3,l=1,u=Math.sqrt(r*r+l*l+a*a);return{x:r/u,y:l/u,z:a/u}}const Cs={uTime:{value:0},uPlayerX:{value:0},uPlayerZ:{value:0},uTransform:{value:0}};function Y2(i,t,e){Cs.uTime.value=i,Cs.uPlayerX.value=t,Cs.uPlayerZ.value=e}function Z2(i){Cs.uTransform.value=i}function $2(){const t=document.createElement("canvas");t.width=2048,t.height=2048;const e=t.getContext("2d"),n=Math.random;e.fillStyle="#223822",e.fillRect(0,0,2048,2048);const s=[{col:"rgba(50,45,25,0.38)",n:16,r:130},{col:"rgba(35,55,30,0.35)",n:14,r:120},{col:"rgba(55,40,22,0.35)",n:14,r:115},{col:"rgba(45,55,28,0.32)",n:12,r:110},{col:"rgba(60,48,25,0.32)",n:12,r:105},{col:"rgba(30,50,32,0.30)",n:10,r:100},{col:"rgba(65,50,28,0.28)",n:10,r:100},{col:"rgba(40,60,35,0.26)",n:10,r:95},{col:"rgba(70,45,22,0.24)",n:8,r:90},{col:"rgba(45,35,18,0.22)",n:8,r:85}];for(const c of s)for(let p=0;p<c.n;p++){const f=n()*2048,d=n()*2048,g=c.r*(.5+n()*.8),x=e.createRadialGradient(f,d,0,f,d,g);x.addColorStop(0,c.col),x.addColorStop(.6,c.col.replace(/[\d.]+\)$/,parseFloat(c.col.match(/[\d.]+\)$/)[0])*.4+")")),x.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=x;for(let h=-1;h<=1;h++)for(let m=-1;m<=1;m++)e.beginPath(),e.arc(f+h*2048,d+m*2048,g,0,6.28),e.fill()}const o=[{n:80,r:25,colors:["rgba(45,40,22,0.24)","rgba(38,55,30,0.20)","rgba(50,38,18,0.22)","rgba(35,48,25,0.18)","rgba(55,42,20,0.20)","rgba(30,52,32,0.16)"]},{n:200,r:10,colors:["rgba(45,40,20,0.14)","rgba(35,50,28,0.12)","rgba(50,38,18,0.12)","rgba(30,48,28,0.10)","rgba(48,42,18,0.12)","rgba(28,45,30,0.08)"]},{n:500,r:4,colors:["rgba(42,38,18,0.10)","rgba(35,48,25,0.08)","rgba(48,36,16,0.08)","rgba(30,45,28,0.06)","rgba(45,40,16,0.08)","rgba(25,42,28,0.05)"]}];for(const c of o)for(let p=0;p<c.n;p++){e.fillStyle=c.colors[Math.floor(n()*c.colors.length)];const f=n()*2048,d=n()*2048;e.beginPath(),e.arc(f,d,c.r+n()*c.r*.6,0,6.28),e.fill()}const r=["rgba(50,180,90,0.10)","rgba(40,160,100,0.08)","rgba(65,145,170,0.07)","rgba(80,200,130,0.09)","rgba(55,155,135,0.08)"];for(let c=0;c<45;c++){let p=n()*2048,f=n()*2048;const d=r[Math.floor(n()*r.length)];e.strokeStyle=d,e.lineWidth=1.5+n()*2.5,e.beginPath(),e.moveTo(p,f);let g=n()*6.28;const x=14+Math.floor(n()*20);for(let h=0;h<x;h++)g+=Math.sin(h*.6)*.5+(n()-.5)*.4,p+=Math.cos(g)*(6+n()*10),f+=Math.sin(g)*(6+n()*10),e.lineTo(p,f);if(e.stroke(),n()<.7){const h=6+n()*10,m=e.createRadialGradient(p,f,0,p,f,h);m.addColorStop(0,d.replace(/[\d.]+\)$/,"0.18)")),m.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=m,e.beginPath(),e.arc(p,f,h,0,6.28),e.fill()}if(n()<.5&&c<30){let h=p,m=f,M=g+(n()-.5)*1.5;e.strokeStyle=d.replace(/[\d.]+\)$/,parseFloat(d.match(/[\d.]+\)$/)[0])*.6+")"),e.lineWidth=1+n()*1.5,e.beginPath(),e.moveTo(h,m);for(let v=0;v<6;v++)M+=(n()-.5)*.6,h+=Math.cos(M)*(4+n()*8),m+=Math.sin(M)*(4+n()*8),e.lineTo(h,m);e.stroke()}}for(let c=0;c<20;c++){const p=n()*2048,f=n()*2048,d=20+n()*60,x=n()<.7?`rgba(50,${140+Math.floor(n()*60)},${60+Math.floor(n()*40)},${.06+n()*.06})`:`rgba(${100+Math.floor(n()*60)},${80+Math.floor(n()*40)},40,${.05+n()*.04})`;e.strokeStyle=x,e.lineWidth=1.5+n()*3,e.beginPath(),e.arc(p,f,d,0,6.28),e.stroke(),n()<.4&&(e.lineWidth=.8+n()*1.5,e.beginPath(),e.arc(p,f,d*(.6+n()*.2),0,6.28),e.stroke());for(let h=-1;h<=1;h++)for(let m=-1;m<=1;m++)h===0&&m===0||(e.strokeStyle=x,e.lineWidth=1.5+n()*3,e.beginPath(),e.arc(p+h*2048,f+m*2048,d,0,6.28),e.stroke())}e.lineWidth=1.2;for(let c=0;c<30;c++){e.strokeStyle=`rgba(15,25,12,${.2+n()*.15})`;let p=n()*2048,f=n()*2048,d=n()*6.28;e.beginPath(),e.moveTo(p,f);for(let g=0;g<10;g++)d+=Math.sin(g*.7)*.5+(n()-.5)*.35,p+=Math.cos(d)*(8+n()*14),f+=Math.sin(d)*(8+n()*14),e.lineTo(p,f);e.stroke()}const a=["rgba(55,40,18,0.28)","rgba(50,50,22,0.25)","rgba(35,55,25,0.22)","rgba(60,45,20,0.25)","rgba(45,52,22,0.22)","rgba(65,48,22,0.22)","rgba(40,55,28,0.20)","rgba(55,42,16,0.20)","rgba(70,50,22,0.22)","rgba(48,38,15,0.20)","rgba(30,50,28,0.18)","rgba(60,55,25,0.16)"];for(let c=0;c<3500;c++){e.fillStyle=a[Math.floor(n()*a.length)];const p=n()*2048,f=n()*2048,d=.8+n()*2.5;e.beginPath(),e.arc(p,f,d,0,6.28),e.fill()}for(let c=0;c<50;c++){const p=n()*2048,f=n()*2048,d=15+n()*35,g=e.createRadialGradient(p,f,0,p,f,d),x=n();x<.25?(g.addColorStop(0,"rgba(35,60,35,0.18)"),g.addColorStop(1,"rgba(20,35,20,0)")):x<.5?(g.addColorStop(0,"rgba(55,42,20,0.18)"),g.addColorStop(1,"rgba(30,22,10,0)")):x<.7?(g.addColorStop(0,"rgba(45,55,28,0.16)"),g.addColorStop(1,"rgba(25,30,15,0)")):x<.85?(g.addColorStop(0,"rgba(60,45,22,0.15)"),g.addColorStop(1,"rgba(32,24,12,0)")):(g.addColorStop(0,"rgba(38,65,40,0.14)"),g.addColorStop(1,"rgba(22,38,22,0)")),e.fillStyle=g,e.beginPath(),e.arc(p,f,d,0,6.28),e.fill()}for(let c=0;c<300;c++){const p=n()*2048,f=n()*2048,d=1.5+n()*3,g=Math.floor(30+n()*40);e.fillStyle=`rgba(${g+5},${g},${g-8},0.25)`,e.beginPath(),e.arc(p,f,d,0,6.28),e.fill()}e.lineWidth=.7;for(let c=0;c<60;c++){const p=n()*2048,f=n()*2048,d=4+n()*16,g=n()*6.28;e.strokeStyle=`rgba(18,28,12,${.15+n()*.1})`,e.beginPath(),e.moveTo(p,f),e.lineTo(p+Math.cos(g)*d,f+Math.sin(g)*d),e.stroke()}const l=["rgba(60,190,100,0.10)","rgba(50,175,130,0.08)","rgba(80,160,180,0.07)","rgba(100,90,170,0.06)","rgba(160,130,60,0.05)","rgba(50,160,150,0.07)"];for(let c=0;c<400;c++){const p=n()*2048,f=n()*2048,d=l[Math.floor(n()*l.length)];if(e.fillStyle=d,e.beginPath(),e.arc(p,f,1+n()*2.5,0,6.28),e.fill(),n()<.4){const g=5+n()*6,x=e.createRadialGradient(p,f,0,p,f,g);x.addColorStop(0,d),x.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=x,e.beginPath(),e.arc(p,f,g,0,6.28),e.fill()}}for(let c=0;c<150;c++){const p=n()*2048,f=n()*2048;e.fillStyle=`rgba(90,150,110,${.04+n()*.04})`,e.beginPath(),e.arc(p,f,.5+n()*1.5,0,6.28),e.fill()}const u=new Oa(t);return u.wrapS=u.wrapT=Sr,u.repeat.set(8,8),u.colorSpace=Fn,u}function Sc(i,t){let e=i*127961+t*372143+918273|0;return e=(e^e>>13)*517261|0,(e&2147483647)/2147483647}function uf(i){return i*i*(3-2*i)}function ig(i,t){const e=Math.floor(i),n=Math.floor(t),s=uf(i-e),o=uf(t-n),r=Sc(e,n),a=Sc(e+1,n),l=Sc(e,n+1),u=Sc(e+1,n+1);return r+(a-r)*s+(l-r)*o+(r-a-l+u)*s*o}function Fu(i,t,e){let n=0,s=.5,o=1;for(let r=0;r<e;r++)n+=ig(i*o,t*o)*s,s*=.5,o*=2;return n}function j2(){const i=$2(),t=jt*3,e=200,n=new he(t,t,e,e),s=n.attributes.position,o=[[.65,.6,.38],[.5,.7,.42],[.72,.58,.35],[.55,.68,.4],[.6,.55,.32],[.45,.65,.45],[.68,.62,.36],[.48,.72,.48],[.75,.55,.32],[.55,.6,.38]],r=s.count,a=new Float32Array(r*3);for(let c=0;c<r;c++){const p=s.getX(c),f=s.getY(c);Math.sqrt(p*p+f*f)<jt*1.4?s.setZ(c,Dt(p,-f)):s.setZ(c,0);const g=p,x=-f,h=Fu(g*.025+100,x*.025+200,3),m=Fu(g*.06+300,x*.06+400,2),M=ig(g*.15+500,x*.15+600),v=Fu(g*.04-150,x*.04-250,3),y=Math.floor(h*o.length*.999),T=Math.floor(v*o.length*.999),E=o[y],b=o[T],A=uf(m),S=.82+M*.25,w=(E[0]*(1-A)+b[0]*A)*S,R=(E[1]*(1-A)+b[1]*A)*S,C=(E[2]*(1-A)+b[2]*A)*S,U=1+Dt(g,x)*.06;a[c*3]=w*U,a[c*3+1]=R*U,a[c*3+2]=C*U}n.setAttribute("color",new Ne(a,3)),n.computeVertexNormals();const l=new q({map:i,vertexColors:!0,roughness:.75,metalness:0,emissive:1388056,emissiveIntensity:.25});l.onBeforeCompile=c=>{c.uniforms.uTime=Cs.uTime,c.uniforms.uPlayerX=Cs.uPlayerX,c.uniforms.uPlayerZ=Cs.uPlayerZ,c.uniforms.uTransform=Cs.uTransform,c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
      uniform float uPlayerX;
      uniform float uPlayerZ;
      varying vec3 vWorldPos;
      varying float vPlayerDist2;
      `),c.vertexShader=c.vertexShader.replace("#include <fog_vertex>",`#include <fog_vertex>
      vec4 gWorldPos = modelMatrix * vec4(transformed, 1.0);
      vWorldPos = gWorldPos.xyz;
      float gpdx = gWorldPos.x - uPlayerX;
      float gpdz = gWorldPos.z - uPlayerZ;
      vPlayerDist2 = gpdx * gpdx + gpdz * gpdz;
      `),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
      uniform float uTime;
      uniform float uTransform;
      varying vec3 vWorldPos;
      varying float vPlayerDist2;

      // GLSL noise for procedural patterns
      float gHash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }
      float gNoise(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = gHash(i), b = gHash(i + vec2(1.0, 0.0));
        float c = gHash(i + vec2(0.0, 1.0)), d = gHash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }
      float gFbm(vec2 p) {
        float v = 0.0, a = 0.5;
        for (int i = 0; i < 4; i++) {
          v += gNoise(p) * a;
          p *= 2.0; a *= 0.5;
        }
        return v;
      }
      `),c.fragmentShader=c.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>

      float tF = uTransform; // 0 = forest, 1 = purple finale
      vec2 wp = vWorldPos.xz;

      // --- Mycelium vein glow (noise contour lines) ---
      float vn1 = gFbm(wp * 0.25 + 30.0);
      float vn2 = gFbm(wp * 0.15 + 80.0);
      float vein1 = smoothstep(0.47, 0.50, vn1) * smoothstep(0.53, 0.50, vn1);
      float vein2 = smoothstep(0.45, 0.49, vn2) * smoothstep(0.55, 0.49, vn2);
      float veins = max(vein1, vein2 * 0.7);
      float veinPulse = 0.7 + 0.3 * sin(uTime * 0.4 + vn1 * 8.0);
      // Forest: bright green veins | Finale: bright white-cyan veins
      vec3 veinColForest = vec3(0.10, 0.40, 0.20) * 0.88;
      vec3 veinColFinale = vec3(0.80, 0.95, 1.00) * 1.32;
      totalEmissiveRadiance += veins * mix(veinColForest, veinColFinale, tF) * veinPulse;

      // --- Organic ring patterns (growth rings from noise) ---
      float ringN = gNoise(wp * 0.06 + 10.0);
      float ring = sin(ringN * 25.0) * 0.5 + 0.5;
      ring = smoothstep(0.88, 1.0, ring) * mix(0.44, 0.66, tF);
      // Forest: brighter green | Finale: pink-magenta
      vec3 ringColForest = vec3(0.088, 0.308, 0.154);
      vec3 ringColFinale = vec3(0.66, 0.22, 0.55);
      totalEmissiveRadiance += ring * mix(ringColForest, ringColFinale, tF);

      // --- Scattered fairy ring glows ---
      vec2 cell = floor(wp * 0.07);
      vec2 cellCenter = (cell + 0.5 + (vec2(gHash(cell), gHash(cell + 100.0)) - 0.5) * 0.6) / 0.07;
      float rd = length(wp - cellCenter);
      float ringR = 3.0 + gHash(cell + 200.0) * 4.0;
      float fRing = smoothstep(0.4, 0.0, abs(rd - ringR)) * step(0.75, gHash(cell + 300.0));
      // Forest: brighter green | Finale: bright purple
      vec3 fRingColForest = vec3(0.10, 0.30, 0.16) * 0.88;
      vec3 fRingColFinale = vec3(0.50, 0.16, 0.65) * 1.32;
      totalEmissiveRadiance += fRing * mix(fRingColForest, fRingColFinale, tF);

      // --- Fine noise for per-pixel detail ---
      float fineN = gNoise(wp * 1.5) * 0.088;
      vec3 fineForest = vec3(0.066, 0.165, 0.088);
      vec3 fineFinale = vec3(0.198, 0.066, 0.242);
      totalEmissiveRadiance += fineN * mix(fineForest, fineFinale, tF);

      // --- Player proximity ground glow (8m radius) ---
      if (vPlayerDist2 < 64.0) {
        float pDist = sqrt(vPlayerDist2);
        float pGlow = (1.0 - pDist / 8.0);
        pGlow = pGlow * pGlow * pGlow;
        // Forest: brighter green glow | Finale: bright pink-white glow
        vec3 pGlowForest = vec3(0.14, 0.40, 0.22) * 0.77;
        vec3 pGlowFinale = vec3(0.60, 0.30, 0.65) * 1.1;
        totalEmissiveRadiance += pGlow * mix(pGlowForest, pGlowFinale, tF);
      }

      // --- Finale: additional bright cyan/white veins ---
      if (tF > 0.01) {
        float fv1 = gFbm(wp * 0.35 + 55.0);
        float fv2 = gFbm(wp * 0.20 + 120.0);
        float fVein1 = smoothstep(0.46, 0.50, fv1) * smoothstep(0.54, 0.50, fv1);
        float fVein2 = smoothstep(0.44, 0.48, fv2) * smoothstep(0.56, 0.48, fv2);
        float fVeins = max(fVein1, fVein2 * 0.6);
        float fvPulse = 0.6 + 0.4 * sin(uTime * 0.6 + fv1 * 10.0);
        // White-cyan veins, only visible when transformed
        totalEmissiveRadiance += fVeins * vec3(0.90, 1.00, 1.10) * fvPulse * tF * 1.0;
        // Additional pink shimmer spots
        float shimmer = gNoise(wp * 0.8 + uTime * 0.05) * gNoise(wp * 0.4 + 20.0);
        shimmer = smoothstep(0.15, 0.25, shimmer) * 0.5;
        totalEmissiveRadiance += shimmer * vec3(0.55, 0.15, 0.60) * tF;
      }
      `)};const u=new P(n,l);return u.rotation.x=-Math.PI/2,u.receiveShadow=!0,ot.add(u),u}const cr=new Qt;let bl=null;const Zs=120;let fp=null,Wc=null,hf=null,ff=null,lr=null;const ur=[],K2=3;let Ou=0;function Es(i,t){const e=i>>16&255,n=i>>8&255,s=i&255;return`rgba(${e},${n},${s},${t})`}function As(i,t,e,n,s,o,r){i.save(),i.translate(t,e),Math.abs(s/n-1)>.01&&i.scale(1,s/n);const a=i.createRadialGradient(0,0,0,0,0,n);a.addColorStop(0,Es(o,r)),a.addColorStop(.25,Es(o,r*.55)),a.addColorStop(.55,Es(o,r*.15)),a.addColorStop(.85,Es(o,r*.03)),a.addColorStop(1,Es(o,0)),i.fillStyle=a,i.beginPath(),i.arc(0,0,n,0,6.2832),i.fill(),i.restore()}function Bu(i,t,e,n,s,o,r,a){As(i,t,e,n,s,o,r),t-n<0&&As(i,t+a,e,n,s,o,r),t+n>a&&As(i,t-a,e,n,s,o,r)}function J2(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),s=Math.random,o=n.createLinearGradient(0,0,0,1024);o.addColorStop(0,"#030610"),o.addColorStop(.2,"#050a18"),o.addColorStop(.4,"#0a1222"),o.addColorStop(.55,"#0c1828"),o.addColorStop(.75,"#081018"),o.addColorStop(1,"#040810"),n.fillStyle=o,n.fillRect(0,0,2048,1024);const r=[{x:.12,y:.22,rx:.18,ry:.14,col:1717094,a:.14},{x:.42,y:.28,rx:.22,ry:.1,col:2758741,a:.12},{x:.72,y:.18,rx:.16,ry:.12,col:1721446,a:.13},{x:.88,y:.32,rx:.2,ry:.09,col:3348548,a:.1},{x:.28,y:.12,rx:.14,ry:.18,col:2245768,a:.1},{x:.58,y:.38,rx:.18,ry:.07,col:4465220,a:.08},{x:.05,y:.4,rx:.15,ry:.1,col:1586005,a:.09},{x:.52,y:.15,rx:.12,ry:.16,col:2765670,a:.07}];for(const p of r){Bu(n,p.x*2048,p.y*1024,p.rx*2048,p.ry*1024,p.col,p.a,2048);for(let f=0;f<4;f++){const d=(p.x+(s()-.5)*p.rx)*2048,g=(p.y+(s()-.5)*p.ry)*1024,x=p.rx*2048*(.2+s()*.35),h=p.ry*1024*(.2+s()*.4);Bu(n,d,g,x,h,p.col,p.a*(.4+s()*.5),2048)}}const a=[2245802,2245734,4465254,5583701,3368584,2245717,3809894];for(let p=0;p<30;p++){const f=s()*2048,d=s()*1024*.55,g=40+s()*180,x=25+s()*100;Bu(n,f,d,g,x,a[Math.floor(s()*a.length)],.025+s()*.035,2048)}n.save(),n.globalCompositeOperation="screen";const l=.26;for(let p=0;p<50;p++){const f=p/50,d=f*2048,g=(l+Math.sin(f*Math.PI)*.06+(s()-.5)*.02)*1024,x=2048*.05+s()*2048*.035,h=1024*.04*(.4+s()*.6);As(n,d,g,x,h,4478310,.025+s()*.015)}for(let p=0;p<25;p++){const f=.2+s()*.6,d=f*2048,g=(l+Math.sin(f*Math.PI)*.04)*1024;As(n,d,g,2048*.03+s()*2048*.02,1024*.02+s()*1024*.01,6719658,.015+s()*.012)}for(let p=0;p<10;p++){const f=.35+s()*.3,d=f*2048,g=(l+Math.sin(f*Math.PI)*.02)*1024;As(n,d,g,2048*.02,1024*.012,8943462,.01+s()*.008)}n.globalCompositeOperation="source-over",n.restore();for(let p=0;p<12;p++){const f=.1+s()*.8,d=f*2048,g=(l+Math.sin(f*Math.PI)*.04+(s()-.5)*.02)*1024,x=20+s()*60,h=8+s()*20;As(n,d,g,x,h,132104,.15+s()*.1)}const u=["255,255,255","220,230,255","255,240,220","200,215,255","255,225,200","240,240,255","255,245,235"];for(let p=0;p<5e3;p++){const f=s()*2048,d=s()*1024*.65,g=.3+s()*.7,x=.1+s()*.5;n.fillStyle=`rgba(${u[Math.floor(s()*u.length)]},${x})`,n.beginPath(),n.arc(f,d,g,0,6.28),n.fill()}for(let p=0;p<3e3;p++){const f=s(),d=f*2048,x=(l+Math.sin(f*Math.PI)*.06)*1024+(s()-.5)*1024*.1;if(x<0||x>1024*.6)continue;const h=.2+s()*.6,m=.2+s()*.7;n.fillStyle=`rgba(${u[Math.floor(s()*u.length)]},${m})`,n.beginPath(),n.arc(d,x,h,0,6.28),n.fill()}for(let p=0;p<60;p++){const f=s()*2048,d=s()*1024*.58,g=1.2+s()*1.8,x=6+s()*14,h=s();let m;h<.45?m="255,255,255":h<.65?m="210,225,255":h<.8?m="255,230,200":h<.92?m="190,210,255":m="255,200,180";const M=n.createRadialGradient(f,d,0,f,d,x);M.addColorStop(0,`rgba(${m},0.5)`),M.addColorStop(.1,`rgba(${m},0.18)`),M.addColorStop(.35,`rgba(${m},0.04)`),M.addColorStop(1,`rgba(${m},0)`),n.fillStyle=M,n.beginPath(),n.arc(f,d,x,0,6.28),n.fill(),n.strokeStyle=`rgba(${m},0.12)`,n.lineWidth=.5;const v=x*.8;n.beginPath(),n.moveTo(f-v,d),n.lineTo(f+v,d),n.moveTo(f,d-v),n.lineTo(f,d+v),n.stroke(),n.fillStyle=`rgba(${m},1)`,n.beginPath(),n.arc(f,d,g,0,6.28),n.fill()}for(let p=0;p<8;p++){const f=s()*2048,d=1024*.08+s()*1024*.42,g=50+s()*90;As(n,f,d,g,g*.7,3359846,.03);for(let x=0;x<100;x++){const h=s()*6.28,m=s()*s()*g,M=f+Math.cos(h)*m,v=d+Math.sin(h)*m*.65;if(M<0||M>2048||v<0||v>1024)continue;const y=.2+s()*.6;n.fillStyle=`rgba(255,255,255,${.25+s()*.6})`,n.beginPath(),n.arc(M,v,y,0,6.28),n.fill()}}for(let p=0;p<15;p++){const f=r[Math.floor(s()*r.length)],d=(f.x+(s()-.5)*f.rx*.5)*2048,g=(f.y+(s()-.5)*f.ry*.5)*1024,x=3+s()*8,h=n.createRadialGradient(d,g,0,d,g,x*3);h.addColorStop(0,Es(f.col,.2)),h.addColorStop(.3,Es(f.col,.06)),h.addColorStop(1,Es(f.col,0)),n.fillStyle=h,n.beginPath(),n.arc(d,g,x*3,0,6.28),n.fill()}const c=new Oa(e);return c.colorSpace=Fn,c}function Q2(){const i=ng(),t=J2(),e=.03,n=new Y(hs,64,32,0,Math.PI*2,e,Math.PI*.55);bl=new $({map:t,side:vn,fog:!1,transparent:!1});const s=new P(n,bl);cr.add(s);const o=hs*Math.sin(e)*1.05,r=new Ve(o,32),a=new $({color:198160,side:vn,fog:!1}),l=new P(r,a);l.position.y=hs*Math.cos(e),l.rotation.x=Math.PI/2,cr.add(l),tS(),eS(),ot.add(cr),af(i)}function tS(){const i=new Float32Array(Zs*3),t=new Float32Array(Zs*3);Wc=new Float32Array(Zs),hf=new Float32Array(Zs),ff=new Float32Array(Zs);const e=[[1,1,1],[.85,.9,1],[1,.94,.86],[.78,.84,1],[1,.88,.78],[.9,.95,1]],n=Math.random,s=hs*.97;for(let a=0;a<Zs;a++){const l=n()*Math.PI*2,u=n()*Math.PI*.48,c=s*Math.cos(l)*Math.sin(u),p=s*Math.cos(u),f=s*Math.sin(l)*Math.sin(u);i[a*3]=c,i[a*3+1]=p,i[a*3+2]=f;const d=e[Math.floor(n()*e.length)];t[a*3]=d[0],t[a*3+1]=d[1],t[a*3+2]=d[2],Wc[a]=2+n()*4,hf[a]=n()*Math.PI*2,ff[a]=.5+n()*2.5}const o=new Ae;o.setAttribute("position",new Vt(i,3)),o.setAttribute("color",new Vt(t,3)),lr=new Vt(Wc.slice(),1),lr.setUsage(Me),o.setAttribute("size",lr);const r=new vd({vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,fog:!1,blending:Jt,depthWrite:!1});fp=new Cm(o,r),cr.add(fp)}function eS(){const i=new $({color:16777215,transparent:!0,opacity:0,fog:!1,blending:Jt,depthWrite:!1});for(let t=0;t<K2;t++){const e=new P(new gt(.15,0,12,4),i.clone());e.visible=!1,cr.add(e),ur.push({mesh:e,mat:e.material,active:!1,life:0,maxLife:0,sx:0,sy:0,sz:0,dx:0,dy:0,dz:0})}}function nS(){let i=null;for(let a=0;a<ur.length;a++)if(!ur[a].active){i=ur[a];break}if(!i)return;const t=Math.random,e=t()*Math.PI*2,n=.1+t()*.35,s=hs*.85;i.sx=s*Math.cos(e)*Math.sin(n),i.sy=s*Math.cos(n),i.sz=s*Math.sin(e)*Math.sin(n);const o=e+(t()-.5)*1,r=80+t()*120;i.dx=Math.cos(o)*r,i.dy=-r*(.5+t()*.5),i.dz=Math.sin(o)*r,i.life=.5+t()*.8,i.maxLife=i.life,i.active=!0,i.mesh.visible=!0}function sg(i,t){if(cr.rotation.y=t*.003,lr){const e=lr.array;for(let n=0;n<Zs;n++){const s=Wc[n],o=Math.sin(t*ff[n]+hf[n]);e[n]=s*(.65+o*.35)}lr.needsUpdate=!0}Ou-=i,Ou<=0&&(Ou=4+Math.random()*12,nS());for(let e=0;e<ur.length;e++){const n=ur[e];if(!n.active)continue;if(n.life-=i,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}const s=n.life/n.maxLife;n.sx+=n.dx*i,n.sy+=n.dy*i,n.sz+=n.dz*i,n.mesh.position.set(n.sx,n.sy,n.sz),n.mesh.lookAt(n.sx+n.dx,n.sy+n.dy,n.sz+n.dz),n.mesh.rotateX(Math.PI/2),n.mat.opacity=s*.7,n.mesh.scale.setScalar(.6+s*.4)}}function iS(i){if(bl){const t=Math.max(.15,i);bl.color.setRGB(t,t,t)}}const sS=6,bc=64,df=[];let so=null;const jr=[new it(1734485),new it(2787447),new it(5601126),new it(6706568),new it(8930406),new it(3368533)];function oS(){so=new Qt,so.visible=!1;for(let i=0;i<sS;i++){const t=1.2+i*.2+Math.sin(i*1.7)*.15,e=hs*t,n=.1+i*.012+Math.sin(i*2.3)*.02,s=hs*n,o=new he(e,s,bc,3),r=o.attributes.position.array,a=4,l=(bc+1)*a,u=Math.PI*(.45+i*.08+Math.sin(i*.9)*.05),c=-u/2,p=(.25+i*.04+Math.sin(i*1.3)*.02)*Math.PI,f=i*.18-.45;for(let h=0;h<l;h++){const m=Math.floor(h/a),M=h%a,v=m/bc,y=c+v*u+f,E=(M/(a-1)-.5)*.05,b=p+E,A=hs*.92;r[h*3]=Math.sin(y)*Math.sin(b)*A,r[h*3+1]=Math.cos(b)*A,r[h*3+2]=Math.cos(y)*Math.sin(b)*A}o.attributes.position.needsUpdate=!0,o.attributes.position.setUsage(Me),o.computeVertexNormals();const d=new Float32Array(l*3);o.setAttribute("color",new Ne(d,3)),o.attributes.color.setUsage(Me);const g=new $({vertexColors:!0,transparent:!0,opacity:0,side:Pt,blending:Jt,depthWrite:!1,fog:!1}),x=new P(o,g);so.add(x),df.push({mesh:x,mat:g,geo:o,colorArr:d,posArr:r,vertCount:l,rows:a,segments:bc,phase:i*1.7+Math.sin(i*.8)*.5,speed:.15+i*.05+Math.sin(i*2.1)*.03,colorShift:i*1.1,elevation:p,arcStart:c,arcSpan:u,azimuthOffset:f})}ot.add(so)}let Oo=0;function rS(i,t,e,n,s){if(!so)return;const o=s==="HEAVY_RAIN"||s==="LUMINOUS_STORM"||s==="FOG_BANK";let r=0;o||(e==="DEEP_NIGHT"?r=.25:e==="NIGHT"&&(r=.08));const a=r>Oo?.2:.4;if(Oo+=(r-Oo)*a*i,Oo<.005){so.visible=!1;return}so.visible=!0;const l=hs*.92;for(let u=0;u<df.length;u++){const c=df[u],p=c.colorArr,f=c.posArr,d=c.segments,g=c.rows;c.mat.opacity=Oo*(.5+u*.05);for(let x=0;x<=d;x++){const h=x/d,m=Math.sin(h*6+t*c.speed+c.phase)*.5+.5,M=Math.sin(h*3-t*c.speed*.4+c.phase*1.3)*.5+.5,v=Math.sin(h*1.5+t*.07)*.5+.5,y=Math.sin(h*1.2+t*.05+c.phase*.7)*.5+.5,T=(m*.3+M*.25+v*.2+y*.25)*Oo,E=(h*3+t*.08+c.colorShift)%jr.length,b=Math.floor(E),A=E-b,S=jr[b%jr.length],w=jr[(b+1)%jr.length],R=(S.r+(w.r-S.r)*A)*T,C=(S.g+(w.g-S.g)*A)*T,D=(S.b+(w.b-S.b)*A)*T,U=l*.025,H=Math.sin(h*5+t*.3+c.phase)*U+Math.sin(h*2.5-t*.15+c.phase*.6)*U*.5;for(let G=0;G<g;G++){const O=x*g+G,k=G/(g-1);let nt;k<.33?nt=k*1.2:k>.67?nt=(1-k)*1.5:nt=.7+Math.sin(k*Math.PI)*.3,p[O*3]=R*nt,p[O*3+1]=C*nt,p[O*3+2]=D*nt,c.arcStart+h*c.arcSpan+c.azimuthOffset;const ct=(k-.5)*.05,ft=c.elevation+ct,Ct=H*(.3+k*.7);f[O*3+1]=Math.cos(ft)*l+Ct}}c.geo.attributes.color.needsUpdate=!0,c.geo.attributes.position.needsUpdate=!0}}const Z={pos:new F(0,Yl,0),vel:new F,onGround:!0};let Gu=0,ku=0,og=0,Hu=65,dp=65,Kr=0,pp=!0,Vu=0,Pr=0,pf=null,mf=null,gf=null,mp=1;function aS(i,t,e){pf=i,mf=t,gf=e}let xf=[],vf=[],Mf=null;function cS(i,t){xf=i,vf=t}function lS(i){Mf=i}function uS(i){const t=W2(),e=We.ShiftLeft||We.ShiftRight||Nr;Z.vel.x=t.x,Z.vel.z=t.z,Z.vel.y-=Xw*i,(We.Space||$l)&&Z.onGround&&(Z.vel.y=vl,Z.onGround=!1,H2(!1),mf&&mf()),Z.onGround||(Vu=Z.vel.y),Z.pos.x+=Z.vel.x*i,Z.pos.y+=Z.vel.y*i,Z.pos.z+=Z.vel.z*i;const n=Dt(Z.pos.x,Z.pos.z)+Yl;if(Z.pos.y<=n){if(Z.pos.y=n,Z.vel.y=0,!pp&&Vu<-3){const c=Math.min(Math.abs(Vu)/vl,1);Kr=c*.15,Mf&&Mf(Z.pos.x,Z.pos.z,Math.floor(3+c*5)),gf&&gf(c)}Z.onGround=!0}pp=Z.onGround,Z.onGround?(Z.vel.x*=sp,Z.vel.z*=sp):(Z.vel.x*=op,Z.vel.z*=op);const s=.4;for(let c=0;c<xf.length;c++){const p=xf[c],f=Z.pos.x-p.x,d=Z.pos.z-p.z,g=f*f+d*d,x=.6+s;if(g<x*x&&g>.001){const h=1/Math.sqrt(g);Z.pos.x=p.x+f*h*x,Z.pos.z=p.z+d*h*x}}for(let c=0;c<vf.length;c++){const p=vf[c],f=Z.pos.x-p.x,d=Z.pos.z-p.z,g=f*f+d*d,x=p.colR+s;if(g<x*x&&g>.001){const h=1/Math.sqrt(g);Z.pos.x=p.x+f*h*x,Z.pos.z=p.z+d*h*x}}if(Math.sqrt(Z.pos.x*Z.pos.x+Z.pos.z*Z.pos.z)>jt){const c=Math.atan2(Z.pos.z,Z.pos.x);Z.pos.x=Math.cos(c)*jt,Z.pos.z=Math.sin(c)*jt}je.position.copy(Z.pos);const a=Math.sqrt(t.x*t.x+t.z*t.z)>.5&&Z.onGround;a?Pr=0:Pr+=i,ku+=((a?e?.06:.035:0)-ku)*i*6,a&&(Gu+=i*(e?12:8));const u=Math.sin(Gu)*ku;if(a&&pf){const c=Math.sin(Gu)>=0?1:-1;mp>0&&c<0&&pf(e),mp=c}dp=e&&a?78:65,Hu+=(dp-Hu)*i*4,pn.fov=Hu,pn.updateProjectionMatrix(),Kr*=Math.pow(.04,i),Kr<.001&&(Kr=0),og=u-Kr}function Tc(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new Ae;let u=0;for(let c=0;c<i.length;++c){const p=i[c];let f=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in p.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(p.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in p.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(p.morphAttributes[d])}if(t){let d;if(e)d=p.index.count;else if(p.attributes.position!==void 0)d=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,d,c),u+=d}}if(e){let c=0;const p=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)p.push(d.getX(g)+c);c+=i[f].attributes.position.count}l.setIndex(p)}for(const c in o){const p=gp(o[c]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,p)}for(const c in r){const p=r[c][0].length;if(p===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let f=0;f<p;++f){const d=[];for(let x=0;x<r[c].length;++x)d.push(r[c][x][f]);const g=gp(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function gp(i){let t,e,n,s=-1,o=0;for(let u=0;u<i.length;++u){const c=i[u];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=c.count*e}const r=new t(o),a=new Ne(r,e,n);let l=0;for(let u=0;u<i.length;++u){const c=i[u];if(c.isInterleavedBufferAttribute){const p=l/e;for(let f=0,d=c.count;f<d;f++)for(let g=0;g<e;g++){const x=c.getComponent(f,g);a.setComponent(f+p,g,x)}}else r.set(c.array,l);l+=c.count*e}return s!==void 0&&(a.gpuType=s),a}function xp(i,t,e){return i+(t-i)*e}let Bo=null;function hS(){if(Bo)return Bo;const i=256,t=512,e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,t);s.addColorStop(0,"#7a5840"),s.addColorStop(.3,"#6d4d38"),s.addColorStop(.7,"#5a3f2e"),s.addColorStop(1,"#4e3525"),n.fillStyle=s,n.fillRect(0,0,i,t);for(let o=0;o<28;o++){const r=o/28*i+Math.sin(o*3.7)*6,a=2+Math.sin(o*2.1)*1.5,l=Math.sin(o*1.3+.5)*.5+.5,u=Math.floor(75+l*45),c=Math.floor(50+l*30),p=Math.floor(25+l*18);n.strokeStyle=`rgba(${u},${c},${p},0.5)`,n.lineWidth=a,n.beginPath();let f=0;for(n.moveTo(r,f);f<t;){f+=8+Math.random()*12;const d=Math.sin(f*.03+o)*3;n.lineTo(r+d,f)}n.stroke()}for(let o=0;o<18;o++){const r=o/18*i+Math.sin(o*5.3)*8;n.strokeStyle="rgba(20,12,6,0.35)",n.lineWidth=.8+Math.random()*1.2,n.beginPath();let a=Math.random()*40;for(n.moveTo(r,a);a<t;)a+=5+Math.random()*10,n.lineTo(r+Math.sin(a*.05+o*2)*4,a);n.stroke()}for(let o=0;o<30;o++){const r=o/30*t+Math.random()*10;n.strokeStyle=`rgba(${55+Math.random()*30},${38+Math.random()*20},${18+Math.random()*12},0.2)`,n.lineWidth=.5+Math.random()*1.5,n.beginPath(),n.moveTo(0,r);for(let a=0;a<i;a+=10)n.lineTo(a,r+Math.sin(a*.04+o)*2);n.stroke()}for(let o=0;o<5;o++){const r=Math.random()*i,a=50+Math.random()*(t-100),l=4+Math.random()*6,u=3+Math.random()*5,c=n.createRadialGradient(r,a,0,r,a,l);c.addColorStop(0,"rgba(15,8,4,0.5)"),c.addColorStop(.5,"rgba(30,18,10,0.3)"),c.addColorStop(1,"rgba(40,25,14,0)"),n.fillStyle=c,n.beginPath(),n.ellipse(r,a,l,u,0,0,Math.PI*2),n.fill()}for(let o=0;o<8;o++){const r=Math.random()*i;n.strokeStyle="rgba(34,136,85,0.15)",n.lineWidth=.5+Math.random()*.8,n.beginPath();let a=Math.random()*t*.3;n.moveTo(r,a);const l=30+Math.random()*80;for(;a<a+l&&a<t;)a+=4+Math.random()*6,n.lineTo(r+Math.sin(a*.08+o*2)*2,a);n.stroke()}return Bo=new Oa(e),Bo.wrapS=Sr,Bo.wrapT=Sr,Bo}const Da=[{leaf:1332520,glow:2280567,core:4521898},{leaf:931880,glow:3390378,core:5636044},{leaf:1721376,glow:4508757,core:7864200},{leaf:1060912,glow:2267562,core:4513262},{leaf:1583172,glow:3377356,core:5618687}];let Ec=null;function fS(){if(Ec)return Ec;const i=64,t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d"),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);return n.addColorStop(0,"rgba(68, 255, 136, 0.55)"),n.addColorStop(.25,"rgba(34, 204, 100, 0.35)"),n.addColorStop(.6,"rgba(20, 120, 60, 0.12)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=n,e.fillRect(0,0,i,i),Ec=new Oa(t),Ec}function dS(i,t){const e=new Em({map:fS(),color:3394696,transparent:!0,opacity:.65,depthWrite:!1,blending:Jt}),n=new wv(e),s=i*.55;return n.scale.set(s*2.2,s*1.6,1),n.position.y=t+i*.6,n.visible=!1,ot.add(n),n}function pS(i){const t=new Qt,e=6+_()*10,n=.2+_()*.3,s=n*1.8,o=new P(new gt(n*.4,s,e,8));o.material=new q({color:8017984}),o.position.y=e/2,o.userData._cat="trunk",t.add(o);const r=2+Math.floor(_()*3);for(let v=0;v<r;v++){const y=v/r*6.28+_()*.5,T=e*.4+_()*e*.4,E=new P(new gt(.008,.015,T,3));E.material=new q({color:2263125}),E.position.set(Math.cos(y)*n*.74,e*.15+T/2,Math.sin(y)*n*.74),E.userData._cat="detail",t.add(E)}const a=new F(0,1,0),l=4+Math.floor(_()*4);for(let v=0;v<l;v++){const y=v/l*6.28+_()*.4,T=.8+_()*1.8,E=s*(.3+_()*.2),b=.03+_()*.03,A=-.25-_()*.25,S=Math.cos(y)*Math.cos(A),w=Math.sin(A),R=Math.sin(y)*Math.cos(A),C=new F(S,w,R).normalize(),D=new gt(b,E,T,5);D.translate(0,T/2,0);const U=new P(D,new q({color:6967352}));U.position.set(Math.cos(y)*s*.6,.05,Math.sin(y)*s*.6);const H=new nn().setFromUnitVectors(a,C);if(U.quaternion.copy(H),U.userData._cat="trunk",t.add(U),_()<.6){const G=.4+_()*.3,O=y+(_()-.5)*1.2,k=.5+_()*1,nt=new F(Math.cos(O)*Math.cos(-.1),Math.sin(-.1),Math.sin(O)*Math.cos(-.1)).normalize(),ct=new gt(.02,E*.3,k,4);ct.translate(0,k/2,0);const ft=new P(ct,new q({color:6967352})),Ct=new F(Math.cos(y)*s*.6+S*T*G,.05+w*T*G,Math.sin(y)*s*.6+R*T*G);ft.position.copy(Ct);const Wt=new nn().setFromUnitVectors(a,nt);ft.quaternion.copy(Wt),ft.userData._cat="trunk",t.add(ft)}else _(),_()}const u=Da[i%Da.length],c=new q({color:8017984}),p=new q({color:6965301}),f=new F(0,1,0);function d(v,y,T,E,b,A){const S=new gt(b,E,T,5);S.translate(0,T/2,0);const w=new P(S,A);w.position.copy(v);const R=y.clone().normalize(),C=new nn().setFromUnitVectors(f,R);w.quaternion.copy(C),w.userData._cat="trunk",t.add(w)}function g(v,y,T,E){const b=3+Math.floor(_()*4),A=E*.45;for(let w=0;w<b;w++){const R=E*(.12+_()*.18),C=new P(new Rr(R,1)),D=_()<.3;C.material=new q({color:D?u.core:u.leaf}),C.position.set(v+(_()-.5)*A*2,y+(_()-.3)*A*1.4,T+(_()-.5)*A*2),C.scale.set(.7+_()*.8,.5+_()*.9,.7+_()*.8),C.userData._cat="canopy",t.add(C)}const S=new P(new Rr(E*.5,1));S.material=new q({color:u.glow}),S.position.set(v,y,T),S.scale.set(1+_()*.3,.7+_()*.4,1+_()*.3),S.userData._cat="glow",t.add(S)}const x=2+Math.floor(_()*2);for(let v=0;v<x;v++){const y=e*(.3+_()*.25),T=v/x*Math.PI*2+_()*1,E=.35+_()*.45,b=1+_()*1.8,A=n*.4,S=n*.08,w=Math.cos(T)*Math.cos(E),R=Math.sin(E),C=Math.sin(T)*Math.cos(E),D=new F(w,R,C),U=new F(Math.cos(T)*n*.95,y,Math.sin(T)*n*.95);if(d(U,D,b,A,S,c),_()<.4){const H=.4+_()*.8,G=new P(new gt(.008,.003,H,3));G.material=new q({color:2773040});const O=.4+_()*.4;G.position.set(U.x+w*b*O,U.y+R*b*O-H/2,U.z+C*b*O),G.userData._cat="detail",t.add(G)}else _(),_()}const h=5+Math.floor(_()*4);for(let v=0;v<h;v++){const y=e*(.55+_()*.37),T=v/h*Math.PI*2+_()*.5,E=.6+_()*.55,b=1.5+_()*3,A=n*.35,S=.03+_()*.02,w=Math.cos(T)*Math.cos(E),R=Math.sin(E),C=Math.sin(T)*Math.cos(E),D=new F(w,R,C),U=new F(Math.cos(T)*n*.95,y,Math.sin(T)*n*.95);d(U,D,b,A,S,c);const H=U.x+w*b,G=U.y+R*b,O=U.z+C*b,k=.8+_()*1.5;g(H,G,O,k);const nt=1+Math.floor(_()*3);for(let ct=0;ct<nt;ct++){const ft=.35+_()*.35,Ct=new F(U.x+w*b*ft,U.y+R*b*ft,U.z+C*b*ft),Wt=T+(_()-.5)*1.8,et=.45+_()*.55,ut=.6+_()*1.4,yt=new F(Math.cos(Wt)*Math.cos(et),Math.sin(et),Math.sin(Wt)*Math.cos(et));d(Ct,yt,ut,.04,.012,p);const mt=Ct.x+yt.x*ut,It=Ct.y+yt.y*ut,Nt=Ct.z+yt.z*ut,Kt=.5+_()*.8;g(mt,It,Nt,Kt)}if(_()<.3){const ct=.3+_()*.7,ft=new P(new gt(.008,.003,ct,3));ft.material=new q({color:2773040});const Ct=.5+_()*.3;ft.position.set(U.x+w*b*Ct,U.y+R*b*Ct-ct/2,U.z+C*b*Ct),ft.userData._cat="detail",t.add(ft)}else _(),_()}const m=Math.floor(_()*3);for(let v=0;v<m;v++){const y=1+_()*e*.4,T=_()*6.28,E=.08+_()*.08,b=new P(new Y(E,5,3));b.material=new q({color:5911840}),b.scale.set(1.5,.3,1),b.position.set(Math.cos(T)*n*.8,y,Math.sin(T)*n*.8),b.rotation.y=-T,b.userData._cat="detail",t.add(b)}const M=new P(new Y(2.5+_()*1.5,8,6));return M.material=new q({color:new it(z.leaf)}),M.position.y=e*.85,M.userData._cat="glow",t.add(M),t.userData.treeH=e,t}function mS(i,t){const e=ng();af(7919+t*1013+i*3571);const n=pS(i),s=n.userData.treeH;af(e),n.updateMatrixWorld(!0);const o=[],r=[],a=[],l=[],u=new it;for(let g=0;g<n.children.length;g++){const x=n.children[g];if(!x.isMesh)continue;let h=x.geometry.clone();if(x.updateMatrix(),h.applyMatrix4(x.matrix),h.index){const T=h.toNonIndexed();h.dispose(),h=T}const m=x.userData._cat||"trunk";m==="trunk"?u.set(16777215):u.copy(x.material.color);const v=h.attributes.position.count,y=new Float32Array(v*3);for(let T=0;T<v;T++)y[T*3]=u.r,y[T*3+1]=u.g,y[T*3+2]=u.b;if(h.setAttribute("color",new Ne(y,3)),m==="trunk"){if(!h.attributes.uv){const T=new Float32Array(v*2);h.setAttribute("uv",new Ne(T,2))}}else h.attributes.uv&&h.deleteAttribute("uv");m==="trunk"?o.push(h):m==="canopy"?r.push(h):m==="glow"?a.push(h):m==="detail"&&l.push(h),x.material.dispose()}const c=o.length>0?Tc(o):null,p=r.length>0?Tc(r):null,f=a.length>0?Tc(a):null,d=l.length>0?Tc(l):null;for(const g of o)g.dispose();for(const g of r)g.dispose();for(const g of a)g.dispose();for(const g of l)g.dispose();return{trunkGeo:c,canopyGeo:p,glowGeo:f,detailGeo:d,treeH:s,palIdx:i}}const Ue=new ce,vp=new F(0,1,0),Mp=new F,Wu=new nn,gS=new nn,_p=new nn,yp=new nn,xS=.15;function Xc(i,t,e,n){Mp.set(i,t,e),Wu.setFromUnitVectors(vp,Mp),Wu.slerp(gS,1-xS),yp.setFromAxisAngle(vp,n),Ue.quaternion.copy(Wu).multiply(yp)}function vS(i){const t=[];for(let e=0;e<i;e++){const n=e%Da.length,s=Math.floor(e/Da.length);t.push(mS(n,s))}return t}function MS(i,t,e){const n=[];for(let s=0;s<i.length;s++){const o=i[s],r=Da[o.palIdx],a=hS(),l=new q({vertexColors:!0,map:a,roughness:.75,emissive:5583640,emissiveIntensity:.6}),u=o.trunkGeo?new qn(o.trunkGeo,l,e):null;u&&(u.instanceMatrix.setUsage(Me),u.count=0,ot.add(u));const c=new q({vertexColors:!0,roughness:.5,emissive:r.glow,emissiveIntensity:1.2,transparent:!0,opacity:.5,depthWrite:!1}),p=o.canopyGeo?new qn(o.canopyGeo,c,e):null;p&&(p.instanceMatrix.setUsage(Me),p.count=0,ot.add(p));const f=new q({vertexColors:!0,emissive:r.glow,emissiveIntensity:.4,transparent:!0,opacity:.15,depthWrite:!1}),d=o.glowGeo?new qn(o.glowGeo,f,e):null;d&&(d.instanceMatrix.setUsage(Me),d.count=0,ot.add(d));const g=new q({vertexColors:!0,emissive:r.glow,emissiveIntensity:.4}),x=o.detailGeo?new qn(o.detailGeo,g,e):null;x&&(x.instanceMatrix.setUsage(Me),x.count=0,ot.add(x)),n.push({trunk:u,canopy:p,glow:d,detail:x,trunkMat:l,canopyMat:c,glowMat:f,detailMat:g,instances:[],treeH:o.treeH})}for(let s=0;s<t.length;s++){const o=s%i.length,r=t[s],a=r.yRot,l=r.scale,u=Kl(r.x,r.z);Ue.position.set(r.x,r.y,r.z),Xc(u.x,u.y,u.z,a),Ue.scale.setScalar(l),Ue.updateMatrix();const c=n[o].instances.length;n[o].trunk&&n[o].trunk.setMatrixAt(c,Ue.matrix),n[o].canopy&&n[o].canopy.setMatrixAt(c,Ue.matrix),n[o].glow&&n[o].glow.setMatrixAt(c,Ue.matrix),n[o].detail&&n[o].detail.setMatrixAt(c,Ue.matrix),n[o].instances.push({x:r.x,z:r.z,y:r.y,yRot:a,scale:l,treeH:r.treeH||n[o].treeH,posIdx:s,nx:u.x,ny:u.y,nz:u.z})}for(let s=0;s<n.length;s++){const o=n[s].instances.length;n[s].trunk&&(n[s].trunk.count=o),n[s].canopy&&(n[s].canopy.count=o),n[s].glow&&(n[s].glow.count=o),n[s].detail&&(n[s].detail.count=0)}return n}function _S(i,t,e,n,s,o,r,a,l){for(let u=0;u<i.length;u++){const c=i[u];let p=0,f=0,d=0,g=0;for(let x=0;x<c.instances.length;x++){const h=c.instances[x],m=h.x-e,M=h.z-s,v=h.y+(h.treeH||10)*.4-n,y=m*m+v*v+M*M,T=h.posIdx,E=t[T];if(y>13225){E&&(E.visible=!1);continue}if(y>11025){if(E){const b=Math.sqrt(y);E.visible=!0,E.material.opacity=xp(.65,0,(b-105)/10)}continue}if(y>5625){E&&(E.visible=!0,E.material.opacity=.65);continue}if(y>3969){const A=(Math.sqrt(y)-63)/12;E&&(E.visible=!0,E.material.opacity=xp(0,.65,A)),Ue.position.set(h.x,h.y,h.z),Xc(h.nx,h.ny,h.nz,h.yRot),Ue.scale.setScalar(h.scale),Ue.updateMatrix(),c.trunk&&c.trunk.setMatrixAt(p++,Ue.matrix),c.canopy&&c.canopy.setMatrixAt(f++,Ue.matrix),c.glow&&c.glow.setMatrixAt(d++,Ue.matrix);continue}if(E&&(E.visible=!1),Ue.position.set(h.x,h.y,h.z),Ue.scale.setScalar(h.scale),y<400){const b=h.x*.1+h.z*.13;Xc(h.nx,h.ny,h.nz,h.yRot);const A=Math.sin(o*.25+b+1)*.003*r+l*.15,S=Math.sin(o*.3+b)*.004*r+a*.15;_p.set(A*.5,0,S*.5,1).normalize(),Ue.quaternion.multiply(_p),Ue.updateMatrix(),c.detail&&c.detail.setMatrixAt(g++,Ue.matrix)}else Xc(h.nx,h.ny,h.nz,h.yRot),Ue.updateMatrix();c.trunk&&c.trunk.setMatrixAt(p++,Ue.matrix),c.canopy&&c.canopy.setMatrixAt(f++,Ue.matrix),c.glow&&c.glow.setMatrixAt(d++,Ue.matrix)}c.trunk&&(c.trunk.count=p,c.trunk.instanceMatrix.needsUpdate=!0),c.canopy&&(c.canopy.count=f,c.canopy.instanceMatrix.needsUpdate=!0),c.glow&&(c.glow.count=d,c.glow.instanceMatrix.needsUpdate=!0),c.detail&&(c.detail.count=g,c.detail.instanceMatrix.needsUpdate=!0)}}function yS(i,t){const e=new Qt,n=.4+_()*1.2,s=_()*6.28,o=.8+_()*1.5,r=.5+_()*.8,a=new P($n.mushStem,new q({color:z.mushStem,roughness:.7,emissive:z.mushGlow,emissiveIntensity:.1}));a.position.y=.3,e.add(a);const l=new q({color:z.mushStem,emissive:z.mushGlow,emissiveIntensity:.15,roughness:.6}),u=new P(new Pe(.09,.012,4,8),l);u.position.y=.42,u.rotation.x=Math.PI/2,e.add(u);const c=new q({color:z.mushCap,emissive:z.mushGlow,emissiveIntensity:r,roughness:.3,transparent:!0,opacity:.9}),p=new P($n.mushCap,c);p.scale.set(1,.5,1),p.position.y=.55,p.castShadow=!0,p.receiveShadow=!0,e.add(p);const f=new q({color:6693546,emissive:z.mushGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,side:Pt});for(let w=0;w<8;w++){const R=w/8*6.28,C=new P(new he(.35,.08),f);C.position.set(Math.cos(R)*.15,.48,Math.sin(R)*.15),C.rotation.y=-R,C.rotation.x=.1,e.add(C)}for(let w=0;w<4;w++){const R=new $({color:16777215,transparent:!0,opacity:.9}),C=new P($n.mushDot,R),D=_()*6.28,U=.15+_()*.25;C.position.set(Math.cos(D)*U,.6+_()*.1,Math.sin(D)*U),e.add(C)}const d=new q({color:15663103,emissive:11197951,emissiveIntensity:.2,transparent:!0,opacity:.6,roughness:0,metalness:.5}),g=2+Math.floor(_()*2);for(let w=0;w<g;w++){const R=new P(new Y(.015+_()*.015,4,3),d),C=_()*6.28,D=.1+_()*.2;R.position.set(Math.cos(C)*D,.63+_()*.08,Math.sin(C)*D),e.add(R)}const x=new q({color:4465322,emissive:z.mushGlow,emissiveIntensity:.15,transparent:!0,opacity:.35});for(let w=0;w<4;w++){const R=_()*6.28,C=.15+_()*.25,D=new P(new gt(.004,.002,C,3),x);D.position.set(Math.cos(R)*.12,.01,Math.sin(R)*.12),D.rotation.z=1.3*(R<3.14?1:-1),D.rotation.y=R,e.add(D)}const h=new q({color:z.mushCap,emissive:z.mushGlow,emissiveIntensity:r*.6,transparent:!0,opacity:.4}),m=new P(new Pe(.38,.01,4,12),h);m.position.y=.49,m.rotation.x=Math.PI/2,e.add(m);const M=new q({color:z.mushStem,emissive:z.mushGlow,emissiveIntensity:.08,roughness:.7}),v=new P(new Y(.08,5,3),M);v.scale.set(1,.5,1),v.position.y=.04,e.add(v);const y=new q({color:1708040,roughness:.95});for(let w=0;w<3;w++){const R=_()*6.28,C=.1+_()*.12,D=new P(new Y(.008+_()*.008,3,3),y);D.position.set(Math.cos(R)*C,.005,Math.sin(R)*C),e.add(D)}const T=new $({color:z.mushGlow,transparent:!0,opacity:.2});for(let w=0;w<4;w++){const R=new P(new Y(.006,3,3),T);R.position.set((_()-.5)*.2,.35+_()*.1,(_()-.5)*.2),e.add(R)}const E=new q({color:11167453,emissive:z.mushGlow,emissiveIntensity:r*.3,roughness:.5}),b=3+Math.floor(_()*3);for(let w=0;w<b;w++){const R=_()*6.28,C=_()*.25,D=new P(new Y(.015+_()*.015,3,3),E);D.position.set(Math.cos(R)*C,.58+_()*.06,Math.sin(R)*C),e.add(D)}const A=new q({color:657416,transparent:!0,opacity:.2,roughness:.95,side:Pt}),S=new P(new Ve(.18,8),A);return S.rotation.x=-Math.PI/2,S.position.y=.005,e.add(S),e.scale.setScalar(n),e.position.set(i,0,t),ot.add(e),{group:e,capMat:c,phase:s,speed:o,base:r,x:i,z:t}}function wS(i,t){const e=new Qt,n=_()*6.28,s=new q({color:z.crystal,emissive:z.crystalCore,emissiveIntensity:1.5,transparent:!0,opacity:.7,roughness:.1,metalness:.5}),o=new P($n.crystal,s);o.position.y=.9,o.castShadow=!0,e.add(o);for(let v=0;v<3;v++){const y=new P($n.crystalSm,s),T=v/3*6.28+_()*.5;y.position.set(Math.cos(T)*.4,.45,Math.sin(T)*.4),y.rotation.z=(_()-.5)*.8,y.castShadow=!0,e.add(y)}const r=new q({color:1710626,roughness:.9,metalness:.1}),a=3+Math.floor(_()*3);for(let v=0;v<a;v++){const y=_()*6.28,T=.2+_()*.5,E=.08+_()*.12,b=new P(new Y(E,4,3),r);b.scale.set(1+_()*.5,.5+_()*.4,1+_()*.5),b.position.set(Math.cos(y)*T,E*.3,Math.sin(y)*T),b.rotation.set(_(),_(),_()),e.add(b)}const l=new $({color:z.crystalCore,transparent:!0,opacity:.5});for(let v=0;v<3;v++){const y=.4+_()*.8,T=new P(new gt(.008,.008,y,3),l);T.position.set((_()-.5)*.15,.5+_()*.7,(_()-.5)*.15),T.rotation.set((_()-.5)*.8,(_()-.5)*.5,(_()-.5)*.8),e.add(T)}const u=new $({color:11206638,transparent:!0,opacity:.6});for(let v=0;v<5;v++){const y=new P(new Y(.012,3,3),u);y.position.set((_()-.5)*1,.3+_()*1.5,(_()-.5)*1),e.add(y)}const c=new q({color:z.crystal,emissive:z.crystalCore,emissiveIntensity:.8,transparent:!0,opacity:.5});for(let v=0;v<4;v++){const y=_()*6.28,T=.3+_()*.3,E=new P(new gt(0,.015,.12+_()*.1,3),c);E.position.set(Math.cos(y)*T,.06+_()*.1,Math.sin(y)*T),E.rotation.z=(_()-.5)*.6,e.add(E)}const p=new q({color:3364198,emissive:1122867,emissiveIntensity:.05,roughness:.9,side:Pt});for(let v=0;v<2;v++){const y=_()*6.28,T=.2+_()*.3,E=new P(new Ve(.04+_()*.03,5),p);E.rotation.x=-Math.PI/2+_()*.4,E.position.set(Math.cos(y)*T,.05,Math.sin(y)*T),e.add(E)}const f=new $({color:z.crystalCore,transparent:!0,opacity:.2});for(let v=0;v<2;v++){const y=new P(new gt(.003,.003,.6+_()*.4,3),f);y.position.set((_()-.5)*.3,.7+_()*.5,(_()-.5)*.3),y.rotation.set((_()-.5)*1,_(),(_()-.5)*1),e.add(y)}const d=new q({color:1135940,emissive:1127202,emissiveIntensity:.3,transparent:!0,opacity:.25});for(let v=0;v<4;v++){const y=new P(new Y(.02+_()*.02,3,3),d);y.position.set((_()-.5)*.15,.4+_()*.6,(_()-.5)*.15),e.add(y)}const g=new $({color:11206638,transparent:!0,opacity:.06}),x=new P(new Pe(.35,.02,4,10),g);x.position.y=.6,x.rotation.x=Math.PI/2+_()*.3,e.add(x);const h=new $({color:z.crystal,transparent:!0,opacity:.06,side:Pt}),m=new P(new Ve(.8,8),h);m.rotation.x=-Math.PI/2,m.position.y=.01,e.add(m),e.position.set(i,0,t),ot.add(e);const M=new Ur(z.crystal,.5,8);return M.position.set(i,1.2,t),ot.add(M),{group:e,mat:s,phase:n,x:i,z:t,light:M}}const Hn={uTime:{value:0},uWindAmp:{value:1},uWindLeanX:{value:0},uWindLeanZ:{value:0},uPlayerX:{value:0},uPlayerZ:{value:0},uGlowMult:{value:1}};function SS(i,t,e,n,s,o,r){Hn.uTime.value=i,Hn.uWindAmp.value=t,Hn.uWindLeanX.value=e,Hn.uWindLeanZ.value=n,Hn.uPlayerX.value=s,Hn.uPlayerZ.value=o,r!==void 0&&(Hn.uGlowMult.value=r)}function bS(i,t,e,n,s){const o=new Ae,r=[],a=[],l=[],u=n||20,c=new it(s?s[0]:663568),p=new it(s?s[1]:1388056),f=new it(s?s[2]:2777141),d=new it(s?s[3]:4517461),g=new it(s?s[4]:7864268),x=new it(s?s[5]:14548838),h=new it,m=Dt(i,t);for(let S=0;S<u;S++){const w=_()*6.28,R=_()*e,C=Math.cos(w)*R,D=Math.sin(w)*R,U=Dt(i+C,t+D)-m,H=.25+_()*.65,G=.03+_()*.05,O=(_()-.5)*.2,k=(_()-.5)*.2,nt=(_()-.5)*.12,ct=_()<.5?c:p,ft=_(),Ct=ft<.4?d:ft<.7?g:x,Wt=H*.35,et=H*.7,ut=O*.3,yt=O*.7,mt=k*.3,It=k*.7;r.push(C-G,U+.01,D),r.push(C+G,U+.01,D),r.push(C+ut-G*.9,U+Wt,D+mt),l.push(0,0,.35),a.push(ct.r,ct.g,ct.b,ct.r,ct.g,ct.b),h.copy(ct).lerp(f,.4),a.push(h.r,h.g,h.b),r.push(C+G,U+.01,D),r.push(C+ut+G*.9,U+Wt,D+mt),r.push(C+ut-G*.9,U+Wt,D+mt),l.push(0,.35,.35),a.push(ct.r,ct.g,ct.b),h.copy(ct).lerp(f,.4),a.push(h.r,h.g,h.b,h.r,h.g,h.b);const Nt=G*.65;r.push(C+ut-G*.9,U+Wt,D+mt),r.push(C+ut+G*.9,U+Wt,D+mt),r.push(C+yt-Nt,U+et,D+It+nt),l.push(.35,.35,.7),h.copy(ct).lerp(f,.4),a.push(h.r,h.g,h.b,h.r,h.g,h.b),h.copy(f).lerp(Ct,.3),a.push(h.r,h.g,h.b),r.push(C+ut+G*.9,U+Wt,D+mt),r.push(C+yt+Nt,U+et,D+It+nt),r.push(C+yt-Nt,U+et,D+It+nt),l.push(.35,.7,.7),h.copy(ct).lerp(f,.4),a.push(h.r,h.g,h.b),h.copy(f).lerp(Ct,.3),a.push(h.r,h.g,h.b,h.r,h.g,h.b),r.push(C+yt-Nt,U+et,D+It+nt),r.push(C+yt+Nt,U+et,D+It+nt),r.push(C+O+nt*2,U+H,D+k+nt*1.5),l.push(.7,.7,1),h.copy(f).lerp(Ct,.3),a.push(h.r,h.g,h.b,h.r,h.g,h.b),a.push(Ct.r,Ct.g,Ct.b)}const M=new it(s?s[6]:1725736),v=new it(s?s[7]:3385941),y=Math.floor(u*.3);for(let S=0;S<y;S++){const w=_()*6.28,R=_()*e*.9,C=Math.cos(w)*R,D=Math.sin(w)*R,U=Dt(i+C,t+D)-m,H=.02+_()*.03;r.push(C-H,U+.01,D),r.push(C+H,U+.01,D),r.push(C,U+.03+_()*.02,D+H),l.push(0,0,.05),a.push(M.r,M.g,M.b),a.push(M.r,M.g,M.b),a.push(v.r,v.g,v.b)}o.setAttribute("position",new Vt(r,3)),o.setAttribute("color",new Vt(a,3)),o.setAttribute("bladeHeight",new Vt(l,1)),o.computeVertexNormals();const T=new q({vertexColors:!0,roughness:.7,side:Pt,emissive:s?s[8]:4521830,emissiveIntensity:.35}),E=i,b=t;T.onBeforeCompile=S=>{S.uniforms.uTime=Hn.uTime,S.uniforms.uWindAmp=Hn.uWindAmp,S.uniforms.uWindLeanX=Hn.uWindLeanX,S.uniforms.uWindLeanZ=Hn.uWindLeanZ,S.uniforms.uPlayerX=Hn.uPlayerX,S.uniforms.uPlayerZ=Hn.uPlayerZ,S.uniforms.uGlowMult=Hn.uGlowMult,S.uniforms.uPatchX={value:E},S.uniforms.uPatchZ={value:b},S.vertexShader=S.vertexShader.replace("#include <common>",`#include <common>
      attribute float bladeHeight;
      uniform float uTime;
      uniform float uWindAmp;
      uniform float uWindLeanX;
      uniform float uWindLeanZ;
      uniform float uPlayerX;
      uniform float uPlayerZ;
      uniform float uPatchX;
      uniform float uPatchZ;
      varying float vGlow;
      `),S.vertexShader=S.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      if (bladeHeight > 0.01) {
        float hFrac = bladeHeight;
        float hf2 = hFrac * hFrac;
        float worldX = uPatchX + position.x;
        float worldZ = uPatchZ + position.z;

        // Wind sway — same formula as original CPU path
        float swayX = (sin(uTime * 0.7 + worldX * 0.05) * 0.06
                     + sin(uTime * 1.3 + worldZ * 0.08) * 0.03) * uWindAmp * hf2;
        float swayZ = (sin(uTime * 0.9 + worldZ * 0.06) * 0.04
                     + sin(uTime * 1.7 + worldX * 0.04) * 0.02) * uWindAmp * hf2;
        transformed.x += swayX + uWindLeanX * hFrac;
        transformed.z += swayZ + uWindLeanZ * hFrac;

        // Player proximity flatten (1.2m radius)
        float pdx = position.x - (uPlayerX - uPatchX);
        float pdz = position.z - (uPlayerZ - uPatchZ);
        float pd2 = pdx * pdx + pdz * pdz;
        if (pd2 < 1.44) {
          float proximity = 1.0 - sqrt(pd2) / 1.2;
          float flatten = proximity * proximity * 0.7;
          float pAng = atan(pdx, pdz);
          transformed.x += sin(pAng) * flatten * hFrac * 0.15;
          transformed.z += cos(pAng) * flatten * hFrac * 0.15;
          transformed.y *= (1.0 - flatten * hFrac);
        }

        // Proximity glow (6m radius, quadratic falloff)
        vGlow = pd2 < 36.0 ? (1.0 - sqrt(pd2) / 6.0) * hFrac : 0.0;
        vGlow *= vGlow;
      } else {
        vGlow = 0.0;
      }
      `),S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
      varying float vGlow;
      uniform float uGlowMult;
      `),S.fragmentShader=S.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      totalEmissiveRadiance *= (1.0 + vGlow * 10.0) * uGlowMult;
      `)};const A=new P(o,T);return A.position.set(i,0,t),ot.add(A),{mesh:A,geo:o,cx:i,cz:t}}function TS(i,t){const e=new Qt,n=new q({color:z.fern,emissive:z.fernGlow,emissiveIntensity:.2,roughness:.7,side:Pt}),s=3+Math.floor(_()*2),o=.5+_()*.7,r=new q({color:1708552,roughness:.95}),a=new P(new Y(.06,5,3),r);a.scale.set(1.5,.5,1.5),a.position.y=.02,e.add(a);for(let m=0;m<3;m++){const M=_()*6.28,v=new P(new gt(.003,.002,.08,3),r);v.position.set(Math.cos(M)*.06,.01,Math.sin(M)*.06),v.rotation.z=(M<3.14?1:-1)*1.2,v.rotation.y=M,e.add(v)}for(let m=0;m<s;m++){const M=m/s*6.28+_()*.3,v=new P(new gt(.004,.006,.55,3),new q({color:1721632,roughness:.8}));v.position.set(Math.cos(M)*.15,.25,Math.sin(M)*.15),v.rotation.y=-M,v.rotation.x=-.6-_()*.4,e.add(v);const y=new P(new he(.12,.6,1,3),n);y.position.set(Math.cos(M)*.15,.25,Math.sin(M)*.15),y.rotation.y=-M,y.rotation.x=-.6-_()*.4,e.add(y);for(let E=0;E<6;E++){const b=new P(new he(.07,.06,1,1),n),A=.06+E*.08,S=E%2===0?1:-1;b.position.set(Math.cos(M)*(.15+.06),A,Math.sin(M)*(.15+.06*S)),b.rotation.y=-M,b.rotation.x=-.8,b.rotation.z=S*.5,e.add(b)}const T=new q({color:8939042,emissive:4469521,emissiveIntensity:.1});for(let E=0;E<3;E++){const b=new P(new Y(.008,3,3),T),A=.12+E*.12;b.position.set(Math.cos(M)*(.15+.02),A-.01,Math.sin(M)*(.15+.02)),e.add(b)}}const l=new q({color:z.fernGlow,emissive:z.fernGlow,emissiveIntensity:.3}),u=new P(new Y(.04,4,3),l);u.position.y=.35,e.add(u);const c=new P(new gt(.006,.003,.06,3),l);c.position.set(.02,.37,0),c.rotation.z=-.8,e.add(c);const p=new q({color:15663103,emissive:8960989,emissiveIntensity:.1,transparent:!0,opacity:.5,roughness:0,metalness:.5});for(let m=0;m<3;m++){const M=_()*6.28,v=_()*.2,y=new P(new Y(.006+_()*.005,3,3),p);y.position.set(Math.cos(M)*v,.12+_()*.2,Math.sin(M)*v),e.add(y)}const f=new q({color:3811856,roughness:.9,side:Pt,transparent:!0,opacity:.6}),d=new P(new he(.1,.4,1,2),f),g=_()*6.28;d.position.set(Math.cos(g)*.12,.05,Math.sin(g)*.12),d.rotation.x=-1.3,d.rotation.y=g,e.add(d);const x=new $({color:2768928,transparent:!0,opacity:.3});for(let m=0;m<4;m++){const M=new P(new gt(.001,.001,.015,3),x);M.position.set((_()-.5)*.08,.08+_()*.15,(_()-.5)*.08),M.rotation.z=(_()-.5)*1.5,e.add(M)}const h=new q({color:1708552,roughness:.95});for(let m=0;m<3;m++){const M=new P(new Y(.006,3,3),h);M.position.set((_()-.5)*.1,.005,(_()-.5)*.1),e.add(M)}return e.scale.setScalar(o),e.position.set(i,0,t),ot.add(e),{group:e,phase:_()*6.28}}function ES(i,t){const e=new Qt,n=.25+_()*.4,s=new q({color:z.flowerStem,roughness:.8}),o=new P(new gt(.01,.015,n,4),s);o.position.y=n/2,e.add(o);for(let A=0;A<2;A++){const S=new P(new Bn(.004,.012,3),s);S.position.set(.012,n*.25+A*n*.25,0),S.rotation.z=-1.2,e.add(S)}const r=new q({color:z.fern,roughness:.7,side:Pt}),a=new P(new he(.06,.04),r);a.position.set(.03,n*.3,0),a.rotation.z=-.5,e.add(a);const l=new P(new he(.05,.035),r);l.position.set(-.025,n*.5,.01),l.rotation.z=.6,e.add(l);const u=new q({color:1728560,roughness:.7,side:Pt});for(let A=0;A<5;A++){const S=A/5*6.28+.3,w=new P(new he(.025,.02),u);w.position.set(Math.cos(S)*.025,n-.005,Math.sin(S)*.025),w.rotation.x=-1.2,w.rotation.y=-S,e.add(w)}const c=new q({color:z.flower,emissive:z.flowerGlow,emissiveIntensity:.4+_()*.4,transparent:!0,opacity:.85,side:Pt});for(let A=0;A<6;A++){const S=A/6*6.28,w=new P(new he(.05,.04),c);w.position.set(Math.cos(S)*.03,n+.01,Math.sin(S)*.03),w.rotation.x=-.8,w.rotation.y=-S,e.add(w)}const p=new q({color:16777215,emissive:z.flowerGlow,emissiveIntensity:1.2}),f=new P(new Y(.02,4,3),p);f.position.y=n+.02,e.add(f);const d=new $({color:16777130,transparent:!0,opacity:.7}),g=new $({color:16772676});for(let A=0;A<3;A++){const S=A/3*6.28+.5,w=new P(new gt(.002,.002,.025,3),d);w.position.set(Math.cos(S)*.012,n+.03,Math.sin(S)*.012),e.add(w);const R=new P(new Y(.005,3,3),g);R.position.set(Math.cos(S)*.012,n+.045,Math.sin(S)*.012),e.add(R)}const x=new $({color:16777164,transparent:!0,opacity:.3});for(let A=0;A<2;A++){const S=new P(new Y(.006,3,3),x);S.position.set((_()-.5)*.04,n+.06+_()*.04,(_()-.5)*.04),e.add(S)}const h=new q({color:16772778,emissive:16768324,emissiveIntensity:.2,transparent:!0,opacity:.5,roughness:0,metalness:.4}),m=new P(new Y(.006,3,3),h);m.position.set(.005,n+.005,.005),e.add(m);const M=new $({color:15662984}),v=new P(new gt(.002,.002,.03,3),M);v.position.y=n+.035,e.add(v);const y=new P(new Y(.005,3,3),M);y.position.y=n+.055,e.add(y);const T=new q({color:1725728,roughness:.7}),E=new P(new gt(.015,.02,.02,5),T);E.position.y=n-.01,e.add(E);const b=new $({color:16777215,transparent:!0,opacity:.35});for(let A=0;A<4;A++){const S=A/4*6.28+.3,w=new P(new Y(.004,3,3),b);w.position.set(Math.cos(S)*.045,n+.005,Math.sin(S)*.045),e.add(w)}return e.position.set(i,0,t),ot.add(e),{group:e,petalMat:c,phase:_()*6.28,baseH:n}}function AS(i,t){const e=new Qt,n=new q({color:z.reed,emissive:z.reedTip,emissiveIntensity:.15,roughness:.7}),s=new q({color:z.reedTip,emissive:z.reedTip,emissiveIntensity:.35}),o=new q({color:1709328,roughness:.95}),r=new P(new Y(.08,5,3),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=3+Math.floor(_()*4),l=new q({color:z.reed,roughness:.7,side:Pt});for(let d=0;d<a;d++){const g=.6+_()*1,x=(_()-.5)*.2,h=(_()-.5)*.2,m=new P(new gt(.008,.015,g,4),n);m.position.set(x,g/2,h),e.add(m);const M=2+Math.floor(_()*2),v=new q({color:2771488,roughness:.7});for(let E=0;E<M;E++){const b=g*.2+E*g*.25,A=new P(new Pe(.012,.004,4,6),v);A.position.set(x,b,h),A.rotation.x=Math.PI/2,e.add(A)}if(_()<.7){const E=.1+_()*.15,b=_()*6.28,A=new P(new he(.02,E),l);A.position.set(x+Math.cos(b)*.02,g*.4,h+Math.sin(b)*.02),A.rotation.y=-b,A.rotation.x=-.5-_()*.4,e.add(A)}const y=new P(new Y(.025,4,3),s);y.scale.set(.8,1.5,.8),y.position.set(x,g+.02,h),e.add(y);const T=new $({color:z.reedTip,transparent:!0,opacity:.4});for(let E=0;E<3;E++){const b=E/3*6.28+_()*.5,A=new P(new gt(.002,.001,.04,3),T);A.position.set(x+Math.cos(b)*.015,g+.05,h+Math.sin(b)*.015),A.rotation.z=(_()-.5)*.4,e.add(A)}}e.position.set(i,0,t),ot.add(e);const u=new q({color:4864536,roughness:.9,side:Pt,transparent:!0,opacity:.5});for(let d=0;d<2;d++){_()*6.28;const g=(_()-.5)*.15,x=new P(new he(.025,.02),u);x.position.set(g,.2+d*.25,(_()-.5)*.1),x.rotation.set(_()*.5,_(),_()*.5),e.add(x)}const c=new $({color:15654348,transparent:!0,opacity:.25});for(let d=0;d<3;d++){const g=new P(new Y(.005,3,3),c);g.position.set((_()-.5)*.15,.8+_()*.6,(_()-.5)*.15),e.add(g)}const p=new q({color:2241312,roughness:.9,transparent:!0,opacity:.2}),f=new P(new Pe(.1,.008,4,8),p);return f.rotation.x=Math.PI/2,f.position.y=.03,e.add(f),{group:e,phase:_()*6.28,swayAmp:.03+_()*.04}}let Pn=null;const hr=[],Sn=new ce,Tl=new it,rg=new it(z.dandSeed);function RS(i){const t=new $({color:16777215,transparent:!0,opacity:1});Pn=new qn($n.dandSeed,t,i),Pn.instanceMatrix.setUsage(Me),Pn.instanceColor=new Ci(new Float32Array(i*3),3),Pn.instanceColor.setUsage(Me),Sn.scale.setScalar(0),Sn.updateMatrix();for(let e=0;e<i;e++)Pn.setMatrixAt(e,Sn.matrix),Tl.copy(rg),Pn.setColorAt(e,Tl),hr.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,drift:0});Pn.count=i,Pn.frustumCulled=!1,ot.add(Pn)}function ag(i,t,e){let n=null;for(let o=0;o<hr.length;o++)if(!hr[o].active){n=hr[o];break}if(!n)return;n.x=i+(Math.random()-.5)*.1,n.y=t,n.z=e+(Math.random()-.5)*.1;const s=Math.random()*6.28;n.vx=Math.cos(s)*.5+Math.random()*.3,n.vy=.6+Math.random()*.8,n.vz=Math.sin(s)*.5,n.life=4+Math.random()*5,n.max=n.life,n.active=!0,n.drift=Math.random()*6.28}let cg=0,lg=0,ug=0;function CS(i,t,e){cg=i,lg=t,ug=e}function PS(i,t){let e=!1;for(let n=0;n<hr.length;n++){const s=hr[n];if(!s.active){Sn.position.set(0,-100,0),Sn.scale.setScalar(0),Sn.updateMatrix(),Pn.setMatrixAt(n,Sn.matrix);continue}if(s.life-=i,s.life<=0){s.active=!1,Sn.position.set(0,-100,0),Sn.scale.setScalar(0),Sn.updateMatrix(),Pn.setMatrixAt(n,Sn.matrix);continue}s.drift+=(Math.random()-.5)*1.5*i,s.vx+=Math.sin(s.drift)*.3*i,s.vz+=Math.cos(s.drift)*.2*i,s.vx+=cg*.5*i,s.vz+=lg*.5*i,s.vy+=(.15+ug*.1-s.vy)*i*.5,s.vx*=.998,s.vy*=.998,s.vz*=.998,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i;const r=s.life/s.max*.7*(.6+Math.sin(t*2+n)*.4),a=.8+Math.sin(t*3+n*.5)*.3;Sn.position.set(s.x,s.y,s.z),Sn.scale.setScalar(a),Sn.updateMatrix(),Pn.setMatrixAt(n,Sn.matrix),Tl.copy(rg).multiplyScalar(r),Pn.setColorAt(n,Tl),e=!0}Pn.instanceMatrix.needsUpdate=!0,e&&(Pn.instanceColor.needsUpdate=!0)}function IS(i,t){const e=new Qt,n=.35+_()*.45,s=new q({color:2777128,roughness:.7,side:Pt}),o=3+Math.floor(_()*2);for(let v=0;v<o;v++){const y=v/o*6.28+_()*.3,T=new P(new he(.08,.035),s);T.position.set(Math.cos(y)*.05,.02,Math.sin(y)*.05),T.rotation.x=-1.4,T.rotation.y=-y,e.add(T)}const r=new q({color:z.dandStem,roughness:.8}),a=new P(new gt(.008,.012,n,4),r);a.position.y=n/2,e.add(a);const l=new $({color:14540236,transparent:!0,opacity:.3});for(let v=0;v<4;v++){const y=n*.2+v*n*.18,T=new P(new gt(.002,.001,.02,3),l);T.position.set(.01,y,0),T.rotation.z=-.8,e.add(T)}const u=new q({color:z.fern,roughness:.7,side:Pt}),c=new P(new he(.07,.03),u);c.position.set(.03,n*.15,0),c.rotation.z=-.4,e.add(c);const p=new q({color:z.dandHead,emissive:z.dandSeedGlow,emissiveIntensity:.2,transparent:!0,opacity:.85}),f=new P(new Y(.07,6,5),p);f.position.y=n+.05,e.add(f);const d=new q({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.5,roughness:0,metalness:.5}),g=new P(new Y(.012,4,3),d);g.position.set(.04,n+.07,.03),e.add(g);const x=new $({color:z.dandSeed,transparent:!0,opacity:.7});for(let v=0;v<8;v++){const y=v/8*6.28+_()*.2,T=new P(new Bn(.015,.05,3),x);T.position.set(Math.cos(y)*.06,n+.05+_()*.04,Math.sin(y)*.06),T.rotation.x=(_()-.5)*.6,T.rotation.z=(_()-.5)*.6,e.add(T);const E=new $({color:16777215,transparent:!0,opacity:.3}),b=new P(new gt(.001,.001,.03,3),E);b.position.set(Math.cos(y)*.08,n+.08,Math.sin(y)*.08),b.rotation.set((_()-.5)*.5,0,(_()-.5)*.5),e.add(b);const A=new $({color:15658717,transparent:!0,opacity:.15});for(let S=0;S<2;S++){const w=y+(S-.5)*.5,R=new P(new gt(8e-4,8e-4,.025,3),A);R.position.set(Math.cos(w)*.075,n+.09,Math.sin(w)*.075),R.rotation.set((_()-.5)*.8,0,(_()-.5)*.8),e.add(R)}}const h=new q({color:3811856,roughness:.9});for(let v=0;v<4;v++){const y=v/4*6.28+_()*.5,T=new P(new Y(.005,3,3),h);T.scale.set(.6,1.5,.6),T.position.set(Math.cos(y)*.04,n+.04,Math.sin(y)*.04),e.add(T)}const m=new $({color:1716240,transparent:!0,opacity:.15});for(let v=0;v<3;v++){const y=v/3*6.28,T=new P(new gt(.001,.001,n*.7,3),m);T.position.set(Math.cos(y)*.01,n*.35,Math.sin(y)*.01),e.add(T)}const M=new $({color:13426107,transparent:!0,opacity:.2});for(let v=0;v<5;v++){const y=n*.1+_()*n*.7,T=_()*6.28,E=new P(new gt(8e-4,8e-4,.012,3),M);E.position.set(Math.cos(T)*.012,y,Math.sin(T)*.012),E.rotation.z=T<3.14?-.8:.8,E.rotation.y=T,e.add(E)}return e.position.set(i,0,t),ot.add(e),{group:e,headMat:p,x:i,z:t,h:n,dispersed:!1,phase:_()*6.28,seedCount:8,regrowTimer:0}}function LS(i,t,e,n){for(let s=0;s<i.length;s++){const o=i[s];if(o.dispersed){if(o.regrowTimer-=t,o.regrowTimer<=0){o.dispersed=!1;for(let r=2;r<o.group.children.length;r++)o.group.children[r].visible=!0}o.group.rotation.z=Math.sin(e*.9+o.phase)*.02}else{const r=o.x-n.x,a=o.z-n.z;if(r*r+a*a<1.2){o.dispersed=!0;for(let l=0;l<8;l++)ag(o.x,o.h+.05,o.z);for(let l=2;l<o.group.children.length;l++)o.group.children[l].visible=!1;o.regrowTimer=15+Math.random()*10}else o.group.rotation.z=Math.sin(e*.9+o.phase)*.04,o.headMat.emissiveIntensity=.15+Math.sin(e*1.2+o.phase)*.1}}}function DS(i,t){const e=new Qt,n=1+_()*.8,s=.25+_()*.15,o=new q({color:z.thornStem,roughness:.8,emissive:662032,emissiveIntensity:.1}),r=new P(new gt(.04,.07,n,5),o);r.position.y=n/2,e.add(r);const a=new q({color:z.thornSpike,roughness:.6}),l=4+Math.floor(_()*3);for(let y=0;y<l;y++){const T=n*.15+y/l*n*.6,E=y/l*6.28+_()*1,b=new P(new Bn(.015,.08+_()*.04,3),a);b.position.set(Math.cos(E)*.06,T,Math.sin(E)*.06),b.rotation.z=(E<3.14?1.3:-1.3)+_()*.2,b.rotation.y=E,e.add(b)}const u=new q({color:z.thornOrb,emissive:z.thornOrbGlow,emissiveIntensity:.8,transparent:!0,opacity:.35,roughness:.1,metalness:.3}),c=new P(new Y(s,12,10),u);c.position.y=n+s*.5,e.add(c);const p=new q({color:16777164,emissive:z.thornOrbGlow,emissiveIntensity:1.2,transparent:!0,opacity:.6,roughness:0,metalness:.1}),f=new P(new Y(s*.35,8,6),p);f.position.y=n+s*.5,e.add(f);const d=new $({color:z.thornOrbGlow,transparent:!0,opacity:.06,blending:Jt,depthWrite:!1}),g=new P(new Y(s*2,8,6),d);g.position.y=n+s*.5,e.add(g);const x=new q({color:z.thornSpike,emissive:z.thornOrbGlow,emissiveIntensity:.3,roughness:.5}),h=6+Math.floor(_()*3);for(let y=0;y<h;y++){const T=y/h*6.28+_()*.3,E=(_()-.5)*1.2,b=.3+_()*.3,A=new P(new Bn(.018,b,4),x);A.position.set(Math.cos(T)*s*.8,n+s*.5+Math.sin(E)*s*.5,Math.sin(T)*s*.8),A.rotation.z=-E+(T<3.14?1.4:-1.4),A.rotation.y=T,e.add(A)}const m=new q({color:z.thornPetal,emissive:3344920,emissiveIntensity:.15,transparent:!0,opacity:.7,roughness:.6,side:Pt}),M=4+Math.floor(_()*2);for(let y=0;y<M;y++){const T=y/M*6.28+_()*.3,E=.2+_()*.15,b=new P(new he(E,E*1.5),m);b.position.set(Math.cos(T)*(s+.05),n+s*.3-_()*.1,Math.sin(T)*(s+.05)),b.rotation.y=-T,b.rotation.x=-.4-_()*.3,e.add(b)}const v=new q({color:1718296,emissive:662026,emissiveIntensity:.05,side:Pt});for(let y=0;y<2;y++){const T=_()*6.28,E=new P(new he(.15,.25),v);E.position.set(Math.cos(T)*.12,n*.3,Math.sin(T)*.12),E.rotation.y=-T,E.rotation.x=-.8,e.add(E)}return e.position.set(i,0,t),ot.add(e),{group:e,orbMat:u,hazeMat:d,phase:_()*6.28,x:i,z:t}}function US(i,t){const e=new Qt,n=2+Math.floor(_()*2),s=new q({color:1710128,roughness:.85,emissive:z.helixStem,emissiveIntensity:.1}),o=new P(new Y(.18,8,6),s);o.scale.set(1.2,.5,1.2),o.position.y=.05,e.add(o);const r=[];for(let u=0;u<n;u++){const c=1.5+_()*1,p=.15+_()*.15,f=1.5+_()*1.5,d=_()*6.28,g=[],x=16;for(let C=0;C<=x;C++){const D=C/x,U=d+D*f*6.28,H=p*(.3+D*.7);g.push(new F(Math.cos(U)*H,D*c,Math.sin(U)*H))}const h=new go(g),m=new q({color:z.helixStem,emissive:z.helixNode,emissiveIntensity:.12,roughness:.7}),M=new P(new gn(h,20,.025+_()*.01,5,!1),m);e.add(M);const v=.1+_()*.08,T=_()<.5?new Sd(v,0):new wd(v,0),E=new q({color:z.helixPod,emissive:z.helixPodGlow,emissiveIntensity:.5+_()*.3,transparent:!0,opacity:.65,roughness:.2,metalness:.2}),b=new P(T,E),A=h.getPoint(1);b.position.copy(A),b.rotation.set(_()*3,_()*3,_()*3),e.add(b),r.push(E);const S=new P(new Y(v*2.5,6,4),new $({color:z.helixPodGlow,transparent:!0,opacity:.05,blending:Jt,depthWrite:!1}));S.position.copy(A),e.add(S);const w=1+Math.floor(_()*2);for(let C=0;C<w;C++){const D=.3+_()*.5,U=h.getPoint(D),H=new q({color:z.helixRing,emissive:z.helixPodGlow,emissiveIntensity:.2,transparent:!0,opacity:.45,roughness:.3}),G=new P(new Pe(.1+_()*.08,.008,6,12),H);G.position.copy(U),G.rotation.set(_()*3,_()*3,_()*3),e.add(G)}const R=2+Math.floor(_()*2);for(let C=0;C<R;C++){const D=.2+C/R*.6,U=h.getPoint(D),H=new q({color:z.helixNode,emissive:z.helixPodGlow,emissiveIntensity:.35,transparent:!0,opacity:.5}),G=new P(new Y(.025+_()*.015,5,4),H);G.position.copy(U),e.add(G)}}const a=new q({color:z.helixStem,emissive:z.helixNode,emissiveIntensity:.06,roughness:.8}),l=2+Math.floor(_()*2);for(let u=0;u<l;u++){const c=u/l*6.28+_()*.5,p=.3+_()*.4,f=new P(new gt(.006,.015,p,3),a);f.position.set(Math.cos(c)*.12,p*.3,Math.sin(c)*.12),f.rotation.z=(c<3.14?.8:-.8)+_()*.3,f.rotation.y=c,e.add(f)}return e.position.set(i,0,t),ot.add(e),{group:e,podMats:r,phase:_()*6.28}}function zS(i,t){const e=new Qt,n=.25+_()*.1,s=new q({color:1718309,roughness:.85,emissive:662032,emissiveIntensity:.06});for(let f=0;f<3;f++){const d=f/3*6.28+_()*.5,g=new P(new gt(.01,.035,.25+_()*.15,4),s);g.position.set(Math.cos(d)*n*.6,.06,Math.sin(d)*n*.6),g.rotation.z=d<3.14?1:-1,g.rotation.y=d,e.add(g)}const o=new q({color:z.snapBody,emissive:z.snapBodyGlow,emissiveIntensity:.4,transparent:!0,opacity:.7,roughness:.4,metalness:.1}),r=new P(new Y(n,10,8),o);r.position.y=n+.05,r.scale.set(1,.85,1),e.add(r);const a=new q({color:1730116,emissive:z.snapBodyGlow,emissiveIntensity:.25,transparent:!0,opacity:.6}),l=new P(new Pe(n*.45,.02,6,12),a);l.position.y=n*1.7,l.rotation.x=Math.PI/2,e.add(l);const u=5+Math.floor(_()*3),c=[],p=[];for(let f=0;f<u;f++){const d=f/u*6.28+_()*.3,g=_()*6.28,x=3+Math.floor(_()*2),h=.2+_()*.1,m=[],M=new ce;M.position.set(Math.cos(d)*n*.6,n*1.4,Math.sin(d)*n*.6),M.rotation.y=d,e.add(M);let v=M;for(let b=0;b<x;b++){const A=b/x,S=.02*(1-A*.6),w=new q({color:z.snapFrond,emissive:z.snapBodyGlow,emissiveIntensity:.08+A*.15,roughness:.6}),R=new P(new gt(S*.7,S,h,4),w);R.position.y=b===0?0:h,R.geometry.translate(0,h/2,0),v.add(R),m.push(R),v=R}const y=new q({color:z.snapTip,emissive:z.snapTipGlow,emissiveIntensity:.6,transparent:!0,opacity:.7,roughness:.2}),T=new P(new Y(.025+_()*.015,5,4),y);T.position.y=h,v.add(T),p.push(y);const E=new P(new Y(.06,4,3),new $({color:z.snapTipGlow,transparent:!0,opacity:.04,blending:Jt,depthWrite:!1}));T.add(E),c.push({segments:m,baseAngle:d,phaseOffset:g,segLen:h})}return e.position.set(i,0,t),ot.add(e),{group:e,body:r,bodyMat:o,tipMats:p,fronds:c,phase:_()*6.28,x:i,z:t}}function NS(i,t,e,n,s){for(let o=0;o<i.length;o++){const r=i[o],a=s?s(r.x,r.z,n):n,l=Math.sin(e*1.5+r.phase)*.08;r.body.scale.set(1+l,.85+l*.5,1+l),r.bodyMat.emissiveIntensity=(.5+Math.sin(e*1.5+r.phase)*.3)*a;for(let u=0;u<r.fronds.length;u++){const c=r.fronds[u],p=1.2+u%3*.3;for(let f=0;f<c.segments.length;f++){const d=c.segments[f],g=.15+f*.12,x=Math.sin(e*p+c.phaseOffset+f*.5)*g,h=Math.cos(e*p*.7+c.phaseOffset+f*.3)*g*.6;d.rotation.z=x,d.rotation.x=h}}for(let u=0;u<r.tipMats.length;u++){const c=Math.sin(e*2.5+r.phase+u*1.2)*.5+.5;r.tipMats[u].emissiveIntensity=(.5+c*.6)*a}}}function FS(i,t){const e=new Qt,n=1.2+_()*.8,s=3+Math.floor(_()*3),o=new q({color:z.spiralStem,roughness:.7,emissive:z.spiralFrond,emissiveIntensity:.06}),r=new P(new gt(.02,.05,n,5),o);r.position.y=n/2,e.add(r);const a=new q({color:1721392,emissive:662032,emissiveIntensity:.05,side:Pt});for(let c=0;c<3;c++){const p=_()*6.28,f=new P(new he(.12,.2),a);f.position.set(Math.cos(p)*.1,n*.12,Math.sin(p)*.1),f.rotation.y=-p,f.rotation.x=-.7,e.add(f)}const l=[];for(let c=0;c<s;c++){const p=c/s*6.28+_()*.4,f=n*(.5+_()*.35),d=.15+_()*.15,g=1+_()*1.5,x=[],h=14;for(let S=0;S<=h;S++){const w=S/h,R=p+w*g*6.28,C=d*(.2+w*.8);x.push(new F(Math.cos(R)*C,n*.25+w*f,Math.sin(R)*C))}const m=new go(x),M=new q({color:z.spiralFrond,emissive:z.spiralGlow,emissiveIntensity:.12,roughness:.5}),v=new P(new gn(m,16,.012+_()*.006,4,!1),M);e.add(v);const y=3+Math.floor(_()*2);for(let S=0;S<y;S++){const w=.2+S/y*.6,R=m.getPoint(w),C=new P(new he(.04,.06),new q({color:z.spiralFrond,emissive:z.spiralGlow,emissiveIntensity:.08,side:Pt}));C.position.copy(R),C.rotation.set(_()*1.5,_()*3,_()*1.5),e.add(C)}const T=m.getPoint(1),E=new q({color:z.spiralTip,emissive:z.spiralGlow,emissiveIntensity:.6,transparent:!0,opacity:.7}),b=new P(new Y(.025+_()*.015,5,4),E);b.position.copy(T),e.add(b),l.push(E);const A=new P(new Y(.07,4,3),new $({color:z.spiralGlow,transparent:!0,opacity:.04,blending:Jt,depthWrite:!1}));A.position.copy(T),e.add(A)}const u=new q({color:1714224,roughness:.85,emissive:660752,emissiveIntensity:.04});for(let c=0;c<3;c++){const p=c/3*6.28+_()*.5,f=new P(new gt(.006,.018,.15+_()*.1,3),u);f.position.set(Math.cos(p)*.06,.04,Math.sin(p)*.06),f.rotation.z=p<3.14?.8:-.8,f.rotation.y=p,e.add(f)}return e.position.set(i,0,t),ot.add(e),{group:e,tipMats:l,phase:_()*6.28,x:i,z:t}}function OS(i,t){const e=new Qt,n=1.5+_()*1,s=n*.7,o=.4+_()*.2,r=new q({color:z.corpseLeaf,roughness:.75,emissive:662026,emissiveIntensity:.05}),a=new P(new gt(.06,.1,n*.5,6),r);a.position.y=n*.25,e.add(a);const l=new q({color:z.corpseSpathe,emissive:2230800,emissiveIntensity:.08,transparent:!0,opacity:.85,roughness:.5,side:Pt}),u=new Bn(o,n*.5,8,1,!0),c=new P(u,l);c.position.y=n*.55,c.scale.set(1,1,1),e.add(c);const p=new q({color:z.corpseSpathe,emissive:z.corpseGlow,emissiveIntensity:.1,roughness:.4}),f=new P(new Pe(o*.95,.02,6,12),p);f.position.y=n*.8,f.rotation.x=Math.PI/2,e.add(f);const d=new q({color:z.corpseColumn,emissive:z.corpseGlow,emissiveIntensity:.5,transparent:!0,opacity:.8,roughness:.3}),g=new P(new gt(.03,.06,s,6),d);g.position.y=n*.4+s*.5,e.add(g);const x=new $({color:z.corpseGlow,transparent:!0,opacity:.04,blending:Jt,depthWrite:!1}),h=new P(new Y(o*1.2,6,4),x);h.position.y=n*.65,e.add(h);for(let S=0;S<5;S++){const w=_()*6.28,R=n*.45+_()*s*.6,C=new P(new Y(.01,3,3),new q({color:z.corpseGlow,emissive:z.corpseGlow,emissiveIntensity:.3}));C.position.set(Math.cos(w)*.05,R,Math.sin(w)*.05),e.add(C)}const m=new $({color:1118481,transparent:!0,opacity:.7}),M=[],v=3+Math.floor(_()*3),y=n*.7;for(let S=0;S<v;S++){const w=new P(new Y(.008,3,3),m);w.position.set(0,y,0),e.add(w),M.push(w)}const T=new q({color:z.corpseLeaf,emissive:662024,emissiveIntensity:.04,side:Pt}),E=2+Math.floor(_()*2);for(let S=0;S<E;S++){const w=S/E*6.28+_()*.5,R=new P(new he(.25+_()*.1,.35+_()*.1),T);R.position.set(Math.cos(w)*.18,n*.15,Math.sin(w)*.18),R.rotation.y=-w,R.rotation.x=-.6-_()*.3,e.add(R)}const b=new q({color:1714200,roughness:.9,emissive:330245,emissiveIntensity:.03}),A=new P(new Y(.15,6,4),b);return A.scale.set(1.5,.4,1.5),A.position.y=.03,e.add(A),e.position.set(i,0,t),ot.add(e),{group:e,columnMat:d,hazeMat:x,flies:M,spadixY:y,phase:_()*6.28,x:i,z:t}}function BS(i,t){const e=new Qt,n=.3+_()*.15,s=.3+_()*.2,o=new q({color:z.orbBushLeaf,roughness:.8,emissive:662026,emissiveIntensity:.06}),r=5+Math.floor(_()*4);for(let f=0;f<r;f++){const d=_()*6.28,g=_()*n*.6,x=.1+_()*.08,h=new P(new Y(x,5,4),o);h.scale.set(1.2,.6,1.2),h.position.set(Math.cos(d)*g,s*.4+_()*s*.3,Math.sin(d)*g),e.add(h)}const a=new q({color:z.orbBushStem,emissive:662026,emissiveIntensity:.04,side:Pt});for(let f=0;f<6;f++){const d=_()*6.28,g=n*.5+_()*n*.3,x=new P(new he(.06,.08),a);x.position.set(Math.cos(d)*g,s*.3+_()*.15,Math.sin(d)*g),x.rotation.set(_()*.5,-d,_()*.3),e.add(x)}const l=[],u=6+Math.floor(_()*5),c=new q({color:z.orbBushStem,roughness:.7,emissive:z.orbBushGlow,emissiveIntensity:.05});for(let f=0;f<u;f++){const d=_()*6.28,g=_()*n*.7,x=s+.15+_()*.3,h=.02+_()*.015,m=x-s*.3,M=new P(new gt(.003,.005,m,3),c);M.position.set(Math.cos(d)*g,s*.3+m/2,Math.sin(d)*g),M.rotation.z=(_()-.5)*.3,M.rotation.x=(_()-.5)*.3,e.add(M);const v=new q({color:z.orbBushOrb,emissive:z.orbBushGlow,emissiveIntensity:.5+_()*.3,transparent:!0,opacity:.7,roughness:.2}),y=new P(new Y(h,5,4),v);y.position.set(Math.cos(d)*g+(_()-.5)*.03,x,Math.sin(d)*g+(_()-.5)*.03),e.add(y),l.push(v);const T=new P(new Y(h*2.5,4,3),new $({color:z.orbBushGlow,transparent:!0,opacity:.03,blending:Jt,depthWrite:!1}));T.position.copy(y.position),e.add(T)}const p=new q({color:1712152,roughness:.9});for(let f=0;f<3;f++){const d=_()*6.28,g=n+_()*.1,x=new P(new Y(.015,3,3),p);x.position.set(Math.cos(d)*g,.01,Math.sin(d)*g),x.scale.set(1,.4,1),e.add(x)}return e.position.set(i,0,t),ot.add(e),{group:e,orbMats:l,phase:_()*6.28,x:i,z:t}}function GS(i,t){const e=new Qt,n=2+Math.floor(_()*3),s=[],o=new q({color:1714200,roughness:.9,emissive:330245,emissiveIntensity:.03}),r=new P(new Y(.1,5,4),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=new q({color:z.lanternStem,emissive:662024,emissiveIntensity:.04,side:Pt});for(let l=0;l<2;l++){const u=_()*6.28,c=new P(new he(.1,.18),a);c.position.set(Math.cos(u)*.08,.08,Math.sin(u)*.08),c.rotation.y=-u,c.rotation.x=-.6,e.add(c)}for(let l=0;l<n;l++){const u=l/n*6.28+_()*.5,c=.8+_()*.8,p=.3+_()*.4,f=[],d=10;for(let w=0;w<=d;w++){const R=w/d,C=p*Math.sin(R*Math.PI*.7),D=R<.7?R/.7*c:c-(R-.7)/.3*c*.25;f.push(new F(Math.cos(u)*C,D,Math.sin(u)*C))}const g=new go(f),x=new q({color:z.lanternStem,roughness:.7,emissive:z.lanternHaze,emissiveIntensity:.06}),h=new P(new gn(g,12,.008+_()*.004,4,!1),x);e.add(h);const m=g.getPoint(1),M=.06+_()*.04,v=new q({color:z.lanternPod,emissive:z.lanternGlow,emissiveIntensity:.5+_()*.3,transparent:!0,opacity:.5,roughness:.2,metalness:.1}),y=new P(new Y(M,8,6),v);y.position.copy(m),y.position.y-=M*.3,e.add(y),s.push(v);const T=new q({color:16777164,emissive:z.lanternGlow,emissiveIntensity:1,transparent:!0,opacity:.5,roughness:0}),E=new P(new Y(M*.4,5,4),T);E.position.copy(y.position),e.add(E);const b=new P(new Y(M*2.5,5,4),new $({color:z.lanternHaze,transparent:!0,opacity:.04,blending:Jt,depthWrite:!1}));b.position.copy(y.position),e.add(b);const A=new q({color:z.lanternStem,roughness:.6}),S=new P(new Bn(M*.5,M*.4,5),A);S.position.copy(m),S.rotation.x=Math.PI,e.add(S)}return e.position.set(i,0,t),ot.add(e),{group:e,podMats:s,phase:_()*6.28,x:i,z:t}}function kS(i,t){const e=new Qt,n=1+Math.floor(_()*2),s=[];for(let a=0;a<n;a++){const l=(a-(n-1)*.5)*.3,u=1+_()*.8,c=new q({color:z.veilSupport,roughness:.85,emissive:657928,emissiveIntensity:.03}),p=new P(new gt(.015,.03,u,4),c);p.position.set(l,u/2,0),e.add(p);const f=.2+_()*.15,d=new P(new gt(.008,.012,f,3),c);d.position.set(l,u*.9,0),d.rotation.z=Math.PI/2,e.add(d);const g=3+Math.floor(_()*3);for(let h=0;h<g;h++){const m=.08+_()*.06,M=u*(.3+_()*.4),v=(h-(g-1)*.5)*(f/g),y=new q({color:z.veilMoss,emissive:z.veilGlow,emissiveIntensity:.12+_()*.08,transparent:!0,opacity:.25+_()*.15,roughness:.6,side:Pt}),T=new P(new he(m,M),y);T.position.set(l+v,u*.9-M*.5,(_()-.5)*.05),T.rotation.y=(_()-.5)*.4,e.add(T),s.push(T);const E=2+Math.floor(_()*2),b=new $({color:z.veilEdge,transparent:!0,opacity:.4});for(let A=0;A<E;A++){const S=new P(new Y(.006,3,3),b);S.position.set(l+v+(_()-.5)*m*.8,u*.9-M+_()*M*.15,(_()-.5)*.04),e.add(S)}}const x=new q({color:z.veilMoss,emissive:z.veilGlow,emissiveIntensity:.08,transparent:!0,opacity:.3});for(let h=0;h<3;h++){const m=u*(.2+_()*.5),M=_()*6.28,v=new P(new Y(.015+_()*.01,4,3),x);v.scale.set(1.5,.5,1),v.position.set(l+Math.cos(M)*.025,m,Math.sin(M)*.025),e.add(v)}}const o=new q({color:2767400,roughness:.9,emissive:z.veilGlow,emissiveIntensity:.03}),r=new P(new Y(.12,5,4),o);return r.scale.set(1.5,.3,1.5),r.position.y=.02,e.add(r),e.position.set(i,0,t),ot.add(e),{group:e,veilMats:s,phase:_()*6.28,x:i,z:t}}function HS(i,t,e){const n=new Qt,s=new q({color:z.jellyBell,emissive:z.jellyGlow,emissiveIntensity:.8,transparent:!0,opacity:.5,roughness:.2,metalness:.1,side:Pt}),o=new P(new Y(.5,8,6,0,6.28,0,Math.PI/2),s);o.scale.set(1,.6,1),o.position.y=0,n.add(o);const r=new q({color:z.jellyBell,emissive:z.jellyGlow,emissiveIntensity:1,transparent:!0,opacity:.6}),a=new P(new Pe(.48,.025,5,12),r);a.rotation.x=Math.PI/2,a.position.y=-.02,n.add(a);const l=new P(new Y(.2,6,4),new $({color:z.jellyGlow,transparent:!0,opacity:.7}));l.position.y=-.05,n.add(l);const u=new $({color:12312063,transparent:!0,opacity:.3});for(let M=-1;M<=1;M+=2){const v=new P(new Y(.06,4,3),u);v.scale.set(.6,1.5,.6),v.position.set(M*.08,-.03,0),n.add(v)}const c=new $({color:15663103,transparent:!0,opacity:.7});for(let M=0;M<5;M++){const v=_()*6.28,y=_()*.8,T=new P(new Y(.02,3,3),c);T.position.set(Math.cos(v)*y*.35,.1-y*.15,Math.sin(v)*y*.35),n.add(T)}const p=new q({color:z.jellyTent,emissive:z.jellyGlow,emissiveIntensity:.4,transparent:!0,opacity:.4}),f=new $({color:14544639,transparent:!0,opacity:.9});for(let M=0;M<6;M++){const v=M/6*6.28,y=.4+_()*.6,T=new P(new gt(.015,.008,y,3),p);T.position.set(Math.cos(v)*.25,-y/2-.05,Math.sin(v)*.25),n.add(T);const E=new P(new Y(.018,4,4),f);E.position.set(Math.cos(v)*.25,-y-.06,Math.sin(v)*.25),n.add(E)}const d=new $({color:z.jellyGlow,transparent:!0,opacity:.12});for(let M=0;M<8;M++){const v=M/8*6.28,y=new P(new gt(.002,.002,.4,3),d);y.position.set(Math.cos(v)*.2,.05,Math.sin(v)*.2),y.rotation.z=Math.PI/2-.3,y.rotation.y=-v,n.add(y)}const g=new q({color:z.jellyBell,emissive:z.jellyGlow,emissiveIntensity:.6,transparent:!0,opacity:.4});for(let M=0;M<10;M++){const v=M/10*6.28,y=new P(new Y(.02,3,3),g);y.scale.set(1,.5,.8),y.position.set(Math.cos(v)*.46,-.04,Math.sin(v)*.46),n.add(y)}const x=new q({color:z.jellyTent,emissive:z.jellyGlow,emissiveIntensity:.5,transparent:!0,opacity:.35}),h=new P(new gt(.02,.01,.35,4),x);h.position.y=-.2,n.add(h);const m=new $({color:14548991,transparent:!0,opacity:.4});for(let M=0;M<3;M++){const v=M/3*6.28,y=new P(new Y(.008,3,3),m);y.position.set(Math.cos(v)*.25,-.55-_()*.3,Math.sin(v)*.25),n.add(y)}return n.position.set(i,t,e),ot.add(n),{group:n,bellMat:s,tipMat:f,phase:_()*6.28,driftAng:_()*6.28,homeX:i,homeZ:e,floatY:t,wobble:.5+_()*.5,_init:!0,_state:"drift",_stT:20+Math.random()*30,_migrateAng:0,_pulseSync:0}}function VS(i,t){const e=new Qt,n=new q({color:z.puffBody,emissive:z.puffGlow,emissiveIntensity:.3,roughness:.8}),s=new P(new Y(.3,8,6),n);s.position.y=.35,e.add(s);const o=new q({color:16773344,emissive:z.puffGlow,emissiveIntensity:.15,roughness:.9}),r=new P(new Y(.18,6,4),o);r.scale.set(.7,.9,.3),r.position.set(0,.32,.2),e.add(r);const a=new P(new Y(.22,7,5),n);a.position.y=.65,e.add(a);const l=[];for(let S=-1;S<=1;S+=2){const w=new P(new Bn(.06,.15,4),n);w.position.set(S*.13,.85,0),w.rotation.z=S*.3,e.add(w),l.push({mesh:w,side:S,baseRotZ:S*.3});const R=new P(new Bn(.03,.08,4),new q({color:z.puffCheek,emissive:z.puffCheek,emissiveIntensity:.2}));R.position.set(S*.13,.84,.01),R.rotation.z=S*.3,e.add(R),l.push({mesh:R,side:S,baseRotZ:S*.3})}const u=new $({color:z.puffEye}),c=[];for(let S=-1;S<=1;S+=2){const w=new P(new Y(.035,4,4),u);w.position.set(S*.09,.68,.18),e.add(w),c.push(w);const R=new $({color:16777215}),C=new P(new Y(.012,3,3),R);C.position.set(S*.09+S*.015,.695,.2),e.add(C),c.push(C)}const p=new $({color:4469555}),f=new P(new Y(.015,3,3),p);f.position.set(0,.63,.22),e.add(f);const d=new q({color:z.puffCheek,emissive:z.puffCheek,emissiveIntensity:.3});for(let S=-1;S<=1;S+=2){const w=new P(new Y(.04,4,3),d);w.position.set(S*.15,.61,.15),e.add(w)}const g=new $({color:15654348,transparent:!0,opacity:.5});for(let S=-1;S<=1;S+=2)for(let w=0;w<2;w++){const R=new P(new gt(.002,.002,.06,3),g);R.position.set(S*.12,.62-w*.03,.2),R.rotation.z=S*.7+w*S*.2,R.rotation.x=-.1,e.add(R)}for(let S=-1;S<=1;S+=2){const w=new P(new Y(.07,4,3),n);w.position.set(S*.12,.07,.05),w.scale.set(1,.5,1.3),e.add(w);const R=new q({color:16755370,emissive:16746632,emissiveIntensity:.1});for(let C=0;C<3;C++){const D=C/3*6.28,U=new P(new Y(.012,3,3),R);U.position.set(S*.12+Math.cos(D)*.03,.03,.05+Math.sin(D)*.03),e.add(U)}}const x=new q({color:16777215,emissive:z.puffGlow,emissiveIntensity:.4,roughness:.9}),h=new P(new Y(.06,5,4),x);h.position.set(0,.38,-.28),e.add(h);const m=new q({color:z.puffBody,emissive:z.puffGlow,emissiveIntensity:.2,roughness:1});for(let S=0;S<6;S++){const w=_()*6.28,R=_()*1.2,C=new P(new Y(.01,3,3),m);C.position.set(Math.cos(w)*.28,.25+R*.2,Math.sin(w)*.28),e.add(C)}const M=new $({color:z.puffBody});for(let S=-1;S<=1;S+=2){const w=new P(new gt(.003,.003,.04,3),M);w.position.set(S*.09,.72,.17),w.rotation.z=S*.3,e.add(w)}const v=new $({color:5583684,transparent:!0,opacity:.5}),y=new P(new gt(.002,.002,.03,3),v);y.position.set(0,.59,.22),y.rotation.z=Math.PI/2,e.add(y);const T=new $({color:16777215,transparent:!0,opacity:.6}),E=[];for(let S=0;S<3;S++){const w=new P(new Y(.01,3,3),T.clone());w.position.set(0,.5,0),e.add(w),E.push({mesh:w,mat:w.material,phase:_()*6.28,orbitR:.28+_()*.1})}const b=new $({color:z.puffGlow,transparent:!0,opacity:.15,side:Pt});for(let S=0;S<4;S++){const w=_()*6.28,R=(_()-.5)*.4,C=new P(new Ve(.02+_()*.012,5),b);C.position.set(Math.cos(w)*.27,.35+R*.15,Math.sin(w)*.27),C.lookAt(0,.35,0),e.add(C)}let A=null;if(_()<.4){A=new q({color:z.flower,emissive:z.flowerGlow,emissiveIntensity:.3});for(let w=0;w<3;w++){const R=w/3*6.28,C=new P(new Bn(.015,.03,3),A);C.position.set(Math.cos(R)*.035,.88,Math.sin(R)*.035),C.rotation.z=-Math.cos(R)*.5,C.rotation.x=Math.sin(R)*.5,e.add(C)}const S=new P(new Y(.01,3,3),new q({color:16772676,emissive:16768290,emissiveIntensity:.4}));S.position.set(0,.89,0),e.add(S)}return e.position.set(i,0,t),ot.add(e),{group:e,ears:l,eyes:c,tail:h,sparkles:E,crownMat:A,bodyMat:n,phase:_()*6.28,wanderAng:_()*6.28,speed:.6+_()*.8,hopTimer:0,hopPhase:_()*6.28,homeX:i,homeZ:t,state:"idle",idleTimer:_()*3,_init:!0,_followT:0,_scaredT:0,_huddleTarget:-1,_baseY:0,_lastTX:i,_lastTZ:t,_blinkTimer:2+Math.random()*4,_blinkState:0}}function WS(i,t){const e=new Qt,n=new q({color:z.deerBody,emissive:z.deerGlow,emissiveIntensity:.7,transparent:!0,opacity:.7,roughness:.3}),s=new P(new Y(.4,7,5),n);s.scale.set(1,.8,1.5),s.position.y=.9,e.add(s);const o=new q({color:13431039,emissive:z.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.5}),r=new P(new Y(.15,5,4),o);r.scale.set(.8,.6,.5),r.position.set(0,.78,.25),e.add(r);const a=new Qt;a.position.set(0,1.15,.3);const l=new P(new gt(.08,.12,.4,5),n);l.position.set(0,.1,.08),l.rotation.x=-.4,a.add(l);const u=new P(new Y(.14,6,5),n);u.position.set(0,.22,.2),a.add(u);const c=new P(new Y(.07,4,3),n);c.scale.set(1,.7,1.4),c.position.set(0,.17,.35),a.add(c);const p=new $({color:2245717}),f=new P(new Y(.02,3,3),p);f.position.set(0,.17,.43),a.add(f);const d=new $({color:z.deerEye});for(let O=-1;O<=1;O+=2){const k=new P(new Y(.025,4,3),d);k.position.set(O*.09,.25,.28),a.add(k);const nt=new P(new Y(.008,3,3),new $({color:16777215}));nt.position.set(O*.085,.26,.29),a.add(nt);const ct=new $({color:z.deerBody,transparent:!0,opacity:.5}),ft=new P(new gt(.002,.002,.03,3),ct);ft.position.set(O*.1,.27,.28),ft.rotation.z=O*.6,a.add(ft)}for(let O=-1;O<=1;O+=2){const k=new P(new Bn(.04,.14,4),n);k.position.set(O*.1,.37,.15),k.rotation.z=O*.4,a.add(k)}const g=new q({color:z.deerAntler,emissive:z.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.8});for(let O=-1;O<=1;O+=2){const k=new P(new gt(.015,.02,.25,3),g);k.position.set(O*.08,.42,.12),k.rotation.z=O*.5,a.add(k);const nt=new P(new gt(.01,.015,.15,3),g);nt.position.set(O*.15,.55,.1),nt.rotation.z=O*.8,a.add(nt);const ct=new P(new gt(.008,.012,.1,3),g);ct.position.set(O*.11,.5,.16),ct.rotation.z=O*.3,ct.rotation.x=-.5,a.add(ct);const ft=new P(new Y(.012,3,3),new $({color:z.deerGlow,transparent:!0,opacity:.8}));ft.position.set(O*.18,.61,.09),a.add(ft)}const x=new q({color:z.deerBody,emissive:z.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),h=new P(new gt(.01,.02,.1,3),x);h.position.set(0,.11,.28),h.rotation.x=.3,a.add(h);const m=new $({color:1122850});for(let O=-1;O<=1;O+=2){const k=new P(new Y(.006,3,3),m);k.position.set(O*.02,.16,.42),a.add(k)}e.add(a);const M=[{x:-.15,z:.3,label:"FL"},{x:.15,z:.3,label:"FR"},{x:-.15,z:-.3,label:"BL"},{x:.15,z:-.3,label:"BR"}],v=new q({color:6715272,emissive:z.deerGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),y=[];for(let O=0;O<4;O++){const k=M[O],nt=new Qt;nt.position.set(k.x,.65,k.z);const ct=new P(new gt(.025,.035,.35,4),n);ct.position.y=-.175,nt.add(ct);const ft=new Qt;ft.position.set(0,-.35,0);const Ct=new P(new gt(.02,.03,.3,4),n);Ct.position.y=-.15,ft.add(Ct);const Wt=new P(new gt(.04,.032,.04,4),v);Wt.position.y=-.3,ft.add(Wt);const et=new q({color:14544639,emissive:z.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),ut=new P(new Y(.025,3,3),et);ut.scale.set(1.3,.5,1.3),ut.position.y=-.25,ft.add(ut),nt.add(ft),e.add(nt),y.push({upper:nt,lower:ft,isFront:O<2,side:k.x<0?-1:1})}const T=new Qt;T.position.set(0,1.1,-.55);const E=new P(new Bn(.05,.15,4),new q({color:16777215,emissive:z.deerGlow,emissiveIntensity:1,transparent:!0,opacity:.8}));T.add(E),e.add(T);const b=new $({color:13434862,transparent:!0,opacity:.3});for(let O=0;O<4;O++){const k=new P(new Y(.02,3,3),b);k.position.set((_()-.5)*.25,.8+_()*.3,(_()-.5)*.4),e.add(k)}const A=new $({color:z.deerBody,transparent:!0,opacity:.15});for(let O=0;O<3;O++){const k=new P(new gt(.002,.002,.2,3),A);k.position.set(.3,.85-O*.06,0),k.rotation.z=Math.PI/2+.3,e.add(k)}const S=new q({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.4,roughness:0,metalness:.5});for(let O=0;O<3;O++){const k=new P(new Y(.008,3,3),S);k.position.set((_()-.5)*.3,.9+_()*.3,(_()-.5)*.35),e.add(k)}const w=new q({color:14544639,emissive:z.deerGlow,emissiveIntensity:.4,transparent:!0,opacity:.3,side:Pt}),R=[];for(let O=0;O<5;O++){const k=new P(new he(.05,.08+_()*.04),w);k.position.set(0,.1+O*.055,.04-O*.015),k.rotation.x=-.2+_()*.15,k.rotation.z=(_()-.5)*.25,a.add(k),R.push(k)}const C=new $({color:z.deerGlow,transparent:!0,opacity:.5}),D=[];for(let O=-1;O<=1;O+=2){const k=new P(new Y(.012,3,3),C.clone());k.position.set(O*.1,.47,.11),a.add(k),D.push(k);const nt=new P(new Y(.01,3,3),C.clone());nt.position.set(O*.14,.53,.12),a.add(nt),D.push(nt)}const U=new $({color:z.deerGlow,transparent:!0,opacity:.08,blending:Jt,depthWrite:!1}),H=[];for(let O=0;O<3;O++){const k=new P(new Y(.06-O*.012,4,3),U.clone());k.position.set(0,.8,-.6-O*.35),ot.add(k),H.push({mesh:k,mat:k.material,prevX:i,prevY:0,prevZ:t})}const G=new $({color:z.deerGlow,transparent:!0,opacity:.2,side:Pt});for(let O=0;O<3;O++){_()*6.28;const k=new P(new Ve(.03+_()*.015,5),G);k.position.set((O===1?-1:1)*.32,.8+_()*.25,(_()-.5)*.3),k.rotation.y=(O===1?-1:1)*Math.PI/2,e.add(k)}return e.position.set(i,0,t),ot.add(e),{group:e,mat:n,manePlanes:R,branchOrbs:D,trailSpheres:H,phase:_()*6.28,wanderAng:_()*6.28,speed:.6+_()*.4,walkTimer:0,legCycle:0,homeX:i,homeZ:t,state:"walk",pauseTimer:0,neckPivot:a,legPivots:y,tailPivot:T,fleeTimer:0,headLook:0,headBob:0,_init:!0,_stT:0,_drinkTgt:null,_zigTimer:0,_zigDir:1,_baseY:0,_lastTX:i,_lastTZ:t}}function XS(i,t,e){const n=new Qt,s=new q({color:z.mothBody,emissive:z.mothGlow,emissiveIntensity:.3,roughness:.7}),o=new P(new gt(.04,.05,.3,5),s);o.rotation.x=Math.PI/2,n.add(o);const r=new q({color:z.mothBody,emissive:z.mothGlow,emissiveIntensity:.5,roughness:.6});for(let h=0;h<3;h++){const m=new P(new Pe(.045,.006,4,8),r);m.position.z=-.05+h*.06,m.rotation.x=0,n.add(m)}const a=new P(new Y(.05,5,4),s);a.position.z=.18,n.add(a);const l=new q({color:1122867,roughness:.2,metalness:.4});for(let h=-1;h<=1;h+=2){const m=new P(new Y(.018,4,3),l);m.position.set(h*.03,.01,.21),n.add(m)}for(let h=-1;h<=1;h+=2){const m=new P(new gt(.005,.005,.15,3),s);m.position.set(h*.03,.03,.22),m.rotation.x=-.6,m.rotation.z=h*.4,n.add(m);const M=new $({color:z.mothGlow,transparent:!0,opacity:.7}),v=new P(new Y(.015,3,3),M);v.scale.set(2,.5,1),v.position.set(h*.05,.12,.28),n.add(v)}const u=new q({color:z.mothWing,emissive:z.mothGlow,emissiveIntensity:.8,transparent:!0,opacity:.6,side:Pt,roughness:.4});n._wingPivots=[];for(let h=-1;h<=1;h+=2){const m=new Qt;m.position.set(h*.04,0,.02);const M=new P(new Y(.2,6,4),u);M.scale.set(1.8,.08,1.2),M.position.set(h*.18,0,.02),m.add(M);const v=new P(new Y(.12,5,3),u);v.scale.set(1.5,.06,1),v.position.set(h*.12,0,-.1),m.add(v);const y=new q({color:z.mothWing,emissive:z.mothGlow,emissiveIntensity:.6,transparent:!0,opacity:.45,side:Pt}),T=new P(new he(.03,.12),y);T.position.set(h*.1,0,-.18),T.rotation.y=h*.2,m.add(T);const E=new $({color:z.mothSpot,transparent:!0,opacity:.9}),b=new P(new Y(.03,4,3),E);b.position.set(h*.2,.02,.03),m.add(b);const A=new P(new Y(.018,3,3),E);A.position.set(h*.1,.02,-.08),m.add(A);const S=new $({color:z.mothGlow,transparent:!0,opacity:.25});for(let w=0;w<2;w++){const R=new P(new gt(.002,.002,.2,3),S);R.position.set(h*.15,.01,-.02+w*.06),R.rotation.z=Math.PI/2+h*(.15+w*.15),m.add(R)}n.add(m),n._wingPivots.push({pivot:m,side:h})}const c=new $({color:z.mothGlow,transparent:!0,opacity:.25});for(let h=0;h<3;h++){const m=new P(new Y(.008,3,3),c);m.position.set((_()-.5)*.04,0,-.15-h*.05),n.add(m)}const p=new $({color:4473907,transparent:!0,opacity:.5}),f=new P(new Pe(.015,.003,4,8,Math.PI*1.5),p);f.position.set(0,-.02,.2),f.rotation.x=.4,n.add(f);const d=new q({color:z.mothBody,emissive:z.mothGlow,emissiveIntensity:.4,roughness:1});for(let h=0;h<5;h++){const m=_()*6.28,M=new P(new Y(.008,3,3),d);M.position.set(Math.cos(m)*.04,Math.sin(m)*.04,_()*.15-.05),n.add(M)}const g=new $({color:z.mothBody,transparent:!0,opacity:.4});for(let h=-1;h<=1;h+=2)for(let m=0;m<3;m++){const M=new P(new gt(.002,.002,.06,3),g);M.position.set(h*.04,-.03,-.05+m*.06),M.rotation.z=h*.8,M.rotation.x=-.3,n.add(M)}const x=new $({color:z.mothGlow,transparent:!0,opacity:.35});for(let h=-1;h<=1;h+=2)for(let m=0;m<5;m++){const M=m/5*Math.PI-Math.PI/2,v=new P(new Y(.006,3,3),x);v.position.set(h*(.3+Math.cos(M)*.05),Math.sin(M)*.02,.02+m*.04),n.add(v)}return n.position.set(i,t,e),ot.add(n),{group:n,wingMat:u,phase:_()*6.28,orbitAng:_()*6.28,orbitR:2+_()*4,centerX:i,centerZ:e,floatY:t,flapSpeed:6+_()*4,_init:!0,_state:"patrol",_stT:0,_attractTarget:null,_restTree:null}}function qS(i,t,e){const n=new Qt,s=new $({color:z.wispCore}),o=new P(new Y(.08,6,4),s);n.add(o);const r=new $({color:16777215,transparent:!0,opacity:.7,wireframe:!0}),a=new P(new Rr(.06,0),r);n.add(a);const l=new $({color:z.wispGlow,transparent:!0,opacity:.5}),u=new P(new Y(.18,6,4),l);n.add(u);const c=new $({color:z.wispGlow,transparent:!0,opacity:.25}),p=new P(new Pe(.22,.008,4,12),c);p.rotation.x=Math.PI/2,n.add(p);const f=new $({color:z.wispTrail,transparent:!0,opacity:.15}),d=new P(new Y(.35,5,4),f);n.add(d);const g=new $({color:16777215,transparent:!0,opacity:.8}),x=new P(new Y(.02,3,3),g);x.position.set(.15,0,0),n.add(x);const h=[];for(let b=0;b<3;b++){const A=new $({color:z.wispCore,transparent:!0,opacity:.35}),S=new P(new Y(.01,3,3),A);S.position.set((_()-.5)*.1,-.1-b*.08,(_()-.5)*.1),n.add(S),h.push(S)}const m=new $({color:z.wispGlow,transparent:!0,opacity:.18}),M=[];for(let b=0;b<3;b++){const A=b/3*6.28+_()*.5,S=.15+_()*.1,w=new P(new gt(.003,.001,S,3),m);w.position.set(Math.cos(A)*.1,_()*.08,Math.sin(A)*.1),w.rotation.z=Math.PI/3*(A<3.14?1:-1),w.rotation.y=A,n.add(w),M.push({mesh:w,baseAng:A})}const v=new $({color:z.wispGlow,transparent:!0,opacity:.12}),y=new P(new Pe(.26,.005,4,10),v);y.rotation.x=1.2,y.rotation.z=.8,n.add(y);const T=new $({color:16777215,transparent:!0,opacity:.5});for(let b=0;b<4;b++){const A=_()*6.28,S=_()*.8,w=new P(new Y(.006,3,3),T);w.position.set(Math.cos(A)*.06,Math.sin(S)*.06,Math.sin(A)*.06),n.add(w)}const E=new $({color:z.wispCore,transparent:!0,opacity:.2});for(let b=0;b<4;b++){const A=new P(new Y(.004,3,3),E);A.position.set(.03+_()*.04,-.05-b*.04,_()*.04),n.add(A)}return n.scale.setScalar(.5),n.position.set(i,t,e),ot.add(n),{group:n,glowMat:l,hazeMat:f,embers:h,tendrils:M,plasmaMat:m,facet:a,halo:p,halo2:y,phase:_()*6.28,targetX:i,targetY:t,targetZ:e,velX:0,velY:0,velZ:0,scatter:0}}function YS(i,t){const e=new Qt,n=nf,s=8+Math.floor(_()*5),o=new q({color:z.fairyMush,emissive:z.fairyGlow,emissiveIntensity:.2,roughness:.5}),r=new q({color:z.mushStem,roughness:.7,emissive:z.fairyGlow,emissiveIntensity:.05});for(let T=0;T<s;T++){const E=T/s*6.28+_()*.15,b=n+_()*.3-.15,A=.15+_()*.2,S=new P($n.mushStem,r);S.scale.setScalar(A),S.position.set(Math.cos(E)*b,A*.3,Math.sin(E)*b),e.add(S);const w=new P($n.mushCap,o);w.scale.set(A,A*.4,A),w.position.set(Math.cos(E)*b,A*.55,Math.sin(E)*b),e.add(w);const R=new $({color:16777215,transparent:!0,opacity:.7}),C=new P(new Y(A*.08,3,3),R);C.position.set(Math.cos(E)*b,A*.6,Math.sin(E)*b),e.add(C)}const a=new q({color:8934792,emissive:z.fairyGlow,emissiveIntensity:.1,roughness:.6});for(let T=0;T<5;T++){const E=_()*6.28,b=n+_()*.6-.3,A=.06+_()*.06,S=new P($n.mushCap,a);S.scale.set(A,A*.5,A),S.position.set(Math.cos(E)*b,A*.35,Math.sin(E)*b),e.add(S)}const l=new q({color:1725733,emissive:664080,emissiveIntensity:.05,roughness:.9});for(let T=0;T<4;T++){const E=_()*6.28,b=_()*n*.8,A=new P(new Y(.08+_()*.08,4,3),l);A.scale.set(1.5,.2,1.5),A.position.set(Math.cos(E)*b,.01,Math.sin(E)*b),e.add(A)}const u=new q({color:4478310,emissive:z.fairyGlow,emissiveIntensity:.05,roughness:.85}),c=new P(new Y(.12,5,3),u);c.scale.set(1.2,.3,1),c.position.y=.03,e.add(c);const p=new $({color:z.fairyGlow,transparent:!0,opacity:.2}),f=[];for(let T=0;T<8;T++){const E=new P(new Y(.012,3,3),p),b=(_()-.5)*n*.8,A=(_()-.5)*n*.8;E.position.set(b,.05+_()*.3,A),e.add(E),f.push({mesh:E,baseX:b,baseZ:A,drift:_()*6.28,speed:.2+_()*.3})}const d=new $({color:z.fairyRing,transparent:!0,opacity:0,side:Pt}),g=new P(new Pa(.3,n-.3,16),d);g.rotation.x=-Math.PI/2,g.position.y=.02,e.add(g);const x=new $({color:z.fairyGlow,transparent:!0,opacity:.08});for(let T=0;T<6;T++){const E=_()*6.28,b=E+.5+_()*1.5,A=n*.6+_()*n*.4,S=new P(new gt(.002,.002,A,3),x);S.position.set(Math.cos((E+b)/2)*n*.4,.005,Math.sin((E+b)/2)*n*.4),S.rotation.x=Math.PI/2,S.rotation.z=E,e.add(S)}const h=new q({color:4864560,roughness:.9,transparent:!0,opacity:.5});for(let T=0;T<3;T++){const E=_()*6.28,b=_()*n*.7,A=new P(new Y(.03,4,3),h);A.scale.set(1.3,.3,1.3),A.position.set(Math.cos(E)*b,.008,Math.sin(E)*b),e.add(A)}const m=new q({color:7833702,roughness:.9,transparent:!0,opacity:.5});for(let T=0;T<2;T++){const E=new P(new Ve(.02+_()*.02,4),m);E.position.set((_()-.5)*.08,.06,(_()-.5)*.06),E.rotation.x=-Math.PI/2+_()*.4,e.add(E)}const M=[];for(let T=0;T<5;T++){const E=_()*6.28,b=_()*n*.9,A=new $({color:8978346,transparent:!0,opacity:.25}),S=new P(new Y(.005,3,3),A);S.position.set(Math.cos(E)*b,.01,Math.sin(E)*b),e.add(S),M.push(S)}const v=new $({color:657926,transparent:!0,opacity:.15,side:Pt}),y=new P(new Pa(n*.5,n*.85,12),v);return y.rotation.x=-Math.PI/2,y.position.y=.008,e.add(y),e.position.set(i,0,t),ot.add(e),{group:e,mushMat:o,discMat:d,sporeMat:p,spores:f,glowWorms:M,x:i,z:t,ringR:n,phase:_()*6.28,glowIntensity:0,active:!1}}function ZS(i,t,e){const n=new Qt,s=new q({color:z.bubbleIris,emissive:z.bubbleIris,emissiveIntensity:.15,transparent:!0,opacity:.25,roughness:0,metalness:.6}),o=new P($n.bubble,s);n.add(o);const r=new $({color:15650047,transparent:!0,opacity:.1}),a=new P(new Pe(.13,.003,4,10),r);a.rotation.x=.5,a.rotation.y=_()*3,n.add(a);const l=new P(new Pe(.11,.003,4,10),r);l.rotation.x=-.8,l.rotation.z=1.2,n.add(l);const u=new $({color:z.bubbleShine,transparent:!0,opacity:.5}),c=new P(new Y(.04,4,3),u);c.position.set(.05,.07,.08),n.add(c);const p=new $({color:15658751,transparent:!0,opacity:.2}),f=new P(new Y(.025,3,3),p);f.position.set(-.06,-.04,-.06),n.add(f);const d=new $({color:16755438,transparent:!0,opacity:.12}),g=new P(new Y(.06,4,3),d);g.position.set(.02,-.02,.01),n.add(g);const x=new $({color:16772863,transparent:!0,opacity:.08}),h=new P(new Y(.12,5,4),x);n.add(h);const m=[16764125,13426175,14548940];for(let A=0;A<3;A++){const S=new $({color:m[A],transparent:!0,opacity:.06}),w=new P(new Pe(.14-A*.02,.002,4,8),S);w.position.y=-.04+A*.04,w.rotation.x=Math.PI/2,n.add(w)}const M=new $({color:16777215,transparent:!0,opacity:.6});for(let A=0;A<3;A++){const S=_()*6.28,w=_()*Math.PI-Math.PI/2,R=new P(new Y(.003,3,3),M);R.position.set(Math.cos(S)*Math.cos(w)*.14,Math.sin(w)*.14,Math.sin(S)*Math.cos(w)*.14),n.add(R)}const v=new $({color:11189196,transparent:!0,opacity:.1}),y=new P(new Y(.015,3,3),v);y.position.set((_()-.5)*.04,(_()-.5)*.04,(_()-.5)*.04),n.add(y);const T=new $({color:z.bubbleIris,transparent:!0,opacity:.15}),E=new P(new Y(.04,4,3),T);E.scale.set(1.3,.6,1.3),E.position.y=-.12,n.add(E);const b=.6+_()*.8;return n.scale.setScalar(b),n.position.set(i,t,e),ot.add(n),{group:n,shellMat:s,phase:_()*6.28,driftAng:_()*6.28,driftSpeed:.3+_()*.5,floatY:t,homeX:i,homeZ:e,bobAmp:.3+_()*.4,popped:!1,popTimer:0,sc:b}}function $S(i,t){const e=new Qt,n=1.5+_()*1,s=new q({color:329746,roughness:.9}),o=new P(new Ve(n*.85,10),s);o.rotation.x=-Math.PI/2,o.position.y=.005,e.add(o);const r=new q({color:z.pondWater,emissive:z.pondGlow,emissiveIntensity:.2,transparent:!0,opacity:.55,roughness:.05,metalness:.4}),a=new P(new Ve(n,12),r);a.rotation.x=-Math.PI/2,a.position.y=.03,e.add(a);const l=new q({color:3816002,roughness:.85}),u=5+Math.floor(_()*4);for(let D=0;D<u;D++){const U=D/u*6.28+_()*.3,H=n+_()*.2-.1,G=.06+_()*.08,O=new P(new Y(G,4,3),l);O.scale.set(1+_()*.5,.4+_()*.3,1+_()*.5),O.position.set(Math.cos(U)*H,G*.2,Math.sin(U)*H),O.rotation.set(_(),_(),_()),e.add(O)}const c=new q({color:1725728,roughness:.7,side:Pt});for(let D=0;D<3;D++){const U=_()*6.28,H=n*.85+_()*.2;for(let G=0;G<3;G++){const O=new P(new he(.015,.15+_()*.1),c);O.position.set(Math.cos(U)*H+(_()-.5)*.05,.08,Math.sin(U)*H+(_()-.5)*.05),O.rotation.y=_()*3,O.rotation.x=-.2,e.add(O)}}const p=new $({color:11197934,transparent:!0,opacity:.08}),f=[];for(let D=0;D<3;D++){const U=new P(new Pe(1,.004,4,20),p.clone());U.rotation.x=Math.PI/2,U.position.y=.036,e.add(U),f.push({mesh:U,phase:D/3})}const d=new q({color:z.lilyPad,roughness:.6,side:Pt}),g=4+Math.floor(_()*2),x=[];for(let D=0;D<g;D++){const U=_()*6.28,H=_()*n*.6,G=.15+_()*.15,O=new P(new Ve(G,8),d);O.rotation.x=-Math.PI/2,O.position.set(Math.cos(U)*H,.05,Math.sin(U)*H),e.add(O);const k=new $({color:1724448,transparent:!0,opacity:.3}),nt=new P(new gt(.002,.002,G*1.5,3),k);nt.position.set(Math.cos(U)*H,.052,Math.sin(U)*H),nt.rotation.x=Math.PI/2,nt.rotation.z=_()*3,e.add(nt),x.push({mesh:O,phase:_()*6.28})}const h=new q({color:z.lilyFlower,emissive:z.lilyGlow,emissiveIntensity:.4,transparent:!0,opacity:.85,side:Pt}),m=.08;for(let D=0;D<6;D++){const U=D/6*6.28,H=new P(new he(.06,.05),h);H.position.set(x[0].mesh.position.x+Math.cos(U)*.05,m,x[0].mesh.position.z+Math.sin(U)*.05),H.rotation.x=-1,H.rotation.y=-U,e.add(H)}const M=new q({color:16777130,emissive:z.lilyGlow,emissiveIntensity:.8}),v=new P(new Y(.025,4,3),M);if(v.position.set(x[0].mesh.position.x,m+.02,x[0].mesh.position.z),e.add(v),x.length>2){const D=new q({color:z.lilyFlower,emissive:z.lilyGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),U=new P(new Y(.03,5,4),D);U.scale.set(.8,1.2,.8),U.position.set(x[2].mesh.position.x,.09,x[2].mesh.position.z),e.add(U)}const y=new q({color:3815477,roughness:.8,transparent:!0,opacity:.5});for(let D=0;D<5;D++){const U=_()*6.28,H=_()*n*.7,G=new P(new Y(.02+_()*.025,4,3),y);G.scale.set(1+_()*.5,.4,1+_()*.5),G.position.set(Math.cos(U)*H,.015,Math.sin(U)*H),e.add(G)}const T=new $({color:2761752,transparent:!0,opacity:.12,side:Pt});for(let D=0;D<3;D++){const U=_()*6.28,H=_()*n*.5,G=new P(new Ve(.08+_()*.06,5),T);G.rotation.x=-Math.PI/2,G.position.set(Math.cos(U)*H,.012,Math.sin(U)*H),e.add(G)}const E=new q({color:1122837,roughness:.7,transparent:!0,opacity:.4}),b=[];for(let D=0;D<2;D++){const U=_()*6.28,H=_()*n*.4,G=new P(new Y(.012,4,3),E);G.scale.set(.8,.5,1.3),G.position.set(Math.cos(U)*H,.04,Math.sin(U)*H),e.add(G);const O=new P(new gt(.002,.001,.025,3),E);O.position.set(Math.cos(U)*H-Math.cos(U)*.02,.04,Math.sin(U)*H-Math.sin(U)*.02),O.rotation.z=Math.PI/2,O.rotation.y=U,e.add(O),b.push({body:G,tail:O,ang:U,orbR:.15+_()*n*.35,speed:.3+_()*.4})}const A=new $({color:2250016,transparent:!0,opacity:.1,side:Pt});for(let D=0;D<3;D++){const U=_()*6.28,H=n*.7+_()*n*.25,G=new P(new Ve(.06+_()*.04,5),A);G.rotation.x=-Math.PI/2,G.position.set(Math.cos(U)*H,.032,Math.sin(U)*H),e.add(G)}const S=new $({color:13426158,transparent:!0,opacity:.06}),w=new P(new Pe(n-.05,.01,4,16),S);w.rotation.x=Math.PI/2,w.position.y=.035,e.add(w);const R=new q({color:4861976,roughness:.8,side:Pt,transparent:!0,opacity:.6}),C=new P(new Ve(.03,5),R);return C.rotation.x=-Math.PI/2,C.position.set((_()-.5)*n*.5,.04,(_()-.5)*n*.5),e.add(C),e.position.set(i,0,t),ot.add(e),{group:e,waterMat:r,flMat:h,pads:x,ripples:f,tadpoles:b,x:i,z:t,phase:_()*6.28,pondR:n}}function jS(i,t){const e=new Qt,n=new $({color:z.orbGold}),s=new P(new Y(.2,10,8),n);e.add(s);const o=new $({color:16777215}),r=new P(new Y(.06,6,4),o);e.add(r);const a=new $({color:16772744,transparent:!0,opacity:.4,wireframe:!0}),l=new P(new Rr(.15,0),a);e.add(l);const u=new $({color:z.orbGlow,transparent:!0,opacity:.5}),c=new P(new Y(.35,8,6),u);e.add(c);const p=new $({color:z.orbGlow,transparent:!0,opacity:.3});for(let b=0;b<8;b++){const A=b/8*6.28,S=new P(new Bn(.02,.25,3),p);S.position.set(Math.cos(A)*.3,Math.sin(A*2)*.05,Math.sin(A)*.3),S.rotation.z=-A+Math.PI/2,S.rotation.y=A,e.add(S)}const f=new $({color:z.orbInner,transparent:!0,opacity:.15}),d=new P(new Y(.6,8,5),f);e.add(d);for(let b=0;b<6;b++){const A=new P(new Y(.03,4,3),new $({color:16777215})),S=b/6*6.28;A.position.set(Math.cos(S)*.4,Math.sin(S*2)*.1,Math.sin(S)*.4),e.add(A)}const g=new $({color:z.orbGold,transparent:!0,opacity:.7});for(let b=0;b<4;b++){const A=b/4*6.28+.4,S=new P(new Y(.015,3,3),g);S.position.set(Math.cos(A)*.5,0,Math.sin(A)*.5),e.add(S)}const x=new $({color:16768426,transparent:!0,opacity:.12});for(let b=0;b<3;b++){const A=new P(new Pe(.28,.003,4,12),x);A.rotation.set(b*1.05,b*.7,0),e.add(A)}const h=new $({color:z.orbGlow,transparent:!0,opacity:.08}),m=new P(new Pe(.4,.004,4,16),h);m.rotation.x=Math.PI/2,e.add(m);const M=new $({color:16772812,transparent:!0,opacity:.15}),v=new P(new Pe(.25,.012,4,10),M);v.rotation.x=Math.PI/2,e.add(v);const y=new $({color:16777215,transparent:!0,opacity:.5});for(let b=0;b<6;b++){const A=_()*6.28,S=_()*Math.PI-Math.PI/2,w=new P(new Y(.008,3,3),y);w.position.set(Math.cos(A)*Math.cos(S)*.2,Math.sin(S)*.2,Math.sin(A)*Math.cos(S)*.2),e.add(w)}const T=new $({color:z.orbGlow,transparent:!0,opacity:.1,side:Pt}),E=new P(new Ve(.5,8),T);return E.rotation.x=-Math.PI/2,E.position.y=-.95,e.add(E),e.position.set(i,1,t),ot.add(e),{group:e,coreMat:n,glowMat:u,hazeMat:f,x:i,z:t,found:!1,flyUp:!1,flyY:1,phase:_()*6.28,laserLine:null,laserMat:null}}const wp=[{palette:"rockGranite",roughness:.88,metalness:.04},{palette:"rockSandstone",roughness:.92,metalness:.02},{palette:"rockLimestone",roughness:.85,metalness:.03},{palette:"rockSlate",roughness:.9,metalness:.06},{palette:"rockBasalt",roughness:.94,metalness:.04}];function Ua(i,t,e){const n=i.attributes.position;for(let s=0;s<n.count;s++){const o=n.getX(s),r=n.getY(s),a=n.getZ(s),l=Math.sqrt(o*o+r*r+a*a)||1,u=o/l,c=r/l,p=a/l,f=Math.sin(o*4.3+e)*Math.sin(r*3.7+a*2.1+e*.7),d=Math.sin(a*5.1+e*1.3)*Math.sin(o*2.9+r*4.7)*.5,g=Math.sin((o+r)*3.1+e*2.1)*Math.sin((a-o)*2.7)*.3,x=(f+d+g)*t;n.setX(s,o+u*x),n.setY(s,r+c*x),n.setZ(s,a+p*x)}n.needsUpdate=!0,i.computeVertexNormals()}const Go=new it,Sp=new it,bp=new it,Tp=new it;function El(i,t){const e=i.attributes.position,n=e.count,s=new Float32Array(n*3);Sp.set(t[0]),bp.set(t[1]),Tp.set(t[2]);for(let o=0;o<n;o++){const r=e.getX(o),a=e.getY(o),l=e.getZ(o),u=Math.sqrt(r*r+a*a+l*l)||1,c=Math.max(0,Math.min(1,a/u*.5+.5)),p=Math.sin(r*11.3+l*7.7)*.5+.5;Go.copy(Sp),Go.lerp(bp,c*.35+p*.2),Go.lerp(Tp,(1-c)*.25),s[o*3]=Go.r,s[o*3+1]=Go.g,s[o*3+2]=Go.b}i.setAttribute("color",new Ne(s,3))}function Al(){const i=wp[Math.floor(_()*wp.length)],t=z[i.palette];return{mat:new q({vertexColors:!0,roughness:i.roughness,metalness:i.metalness}),pal:t,type:i}}const hg=new q({color:z.rockMoss,emissive:z.rockMoss,emissiveIntensity:.03,roughness:.95});function KS(i,t){const e=new Qt,{mat:n,pal:s}=Al(),o=_()*100,r=.3+_()*.5,a=new Y(r,10,8);Ua(a,r*.08,o),El(a,s);const l=new P(a,n),u=.35+_()*.3,c=.9+_()*.5,p=.9+_()*.5;l.scale.set(c,u,p),l.position.y=r*u*.25,l.rotation.set(_()*.4,_()*6.28,_()*.3),l.castShadow=!0,l.receiveShadow=!0,e.add(l);const f=1+Math.floor(_()*2);for(let d=0;d<f;d++){const{mat:g,pal:x}=Al(),h=r*(.25+_()*.35),m=new Y(h,8,6);Ua(m,h*.07,o+d*13.7),El(m,x);const M=new P(m,g),v=.3+_()*.35;M.scale.set(.9+_()*.4,v,.9+_()*.4);const y=_()*6.28,T=r*.5+_()*r*.4;M.position.set(Math.cos(y)*T,h*v*.2,Math.sin(y)*T),M.rotation.set(_()*.5,_()*6.28,_()*.4),M.receiveShadow=!0,e.add(M)}if(_()<.5){const d=r*.2+_()*r*.15,g=new P(new Y(d,5,4),hg);g.scale.set(1.3,.15,1.3),g.position.set(_()*r*.2,r*u*.4,_()*r*.2),e.add(g)}return e.position.set(i,0,t),ot.add(e),{group:e,x:i,z:t,colR:r*.8}}function JS(i,t){const e=new Qt,{mat:n,pal:s}=Al(),o=_()*100,r=1.2+_()*1.8,a=new Y(r,14,10);Ua(a,r*.1,o),El(a,s);const l=new P(a,n),u=.45+_()*.25;if(l.scale.set(1+_()*.4,u,1+_()*.4),l.position.y=r*u*.3,l.rotation.set(_()*.2,_()*6.28,_()*.15),l.castShadow=!0,l.receiveShadow=!0,e.add(l),_()<.6){const{mat:p,pal:f}=Al(),d=r*(.3+_()*.25),g=new Y(d,10,8);Ua(g,d*.09,o+37.1),El(g,f);const x=new P(g,p),h=.3+_()*.25;x.scale.set(1.2+_()*.4,h,.9+_()*.4);const m=_()*6.28;x.position.set(Math.cos(m)*r*.7,d*h*.2,Math.sin(m)*r*.7),x.rotation.set(_()*.4,_()*6.28,_()*.3),x.castShadow=!0,e.add(x)}const c=2+Math.floor(_()*3);for(let p=0;p<c;p++){const f=r*.12+_()*r*.1,d=new P(new Y(f,5,4),hg);d.scale.set(1.4,.15,1.4);const g=_()*6.28;d.position.set(Math.cos(g)*r*.3,r*u*.45+_()*.05,Math.sin(g)*r*.3),e.add(d)}return e.position.set(i,0,t),ot.add(e),{group:e,x:i,z:t,colR:r*.9}}let Wn=null;const Jr=new ce;function QS(){const i=new Y(1,6,5);Ua(i,.08,42.7);const t=new q({color:z.rockBase,roughness:.9,metalness:.03});return Wn=new qn(i,t,Ad),Wn.instanceMatrix.setUsage(ll),Wn.count=0,ot.add(Wn),Wn}const Ep=new it,Ap=[9079440,10127984,10526872,6320256,8026754,7366752,9472128];function tb(i,t,e){if(!Wn)return;const n=Wn.count;if(n>=Ad)return;const s=.04+_()*.1;Jr.position.set(i,e+s*.08,t),Jr.rotation.set(_()*.5,_()*6.28,_()*.5),Jr.scale.set(s*(.9+_()*.5),s*(.2+_()*.3),s*(.9+_()*.5)),Jr.updateMatrix(),Wn.setMatrixAt(n,Jr.matrix),Ep.set(Ap[Math.floor(_()*Ap.length)]),Wn.setColorAt(n,Ep),Wn.count=n+1}function eb(){Wn&&(Wn.instanceMatrix.needsUpdate=!0,Wn.instanceColor&&(Wn.instanceColor.needsUpdate=!0))}let fg=null,dg=null,pg=null,mg=null,_f=[];const yf=[];function nb(){return fg}function ib(){return dg}function sb(){return pg}function ob(){return mg}function rb(){return _f}function ab(){return yf}function cb(){const i=new Qt,t=new q({color:z.obeliskBlack,roughness:.2,metalness:.8,emissive:z.obeliskPink,emissiveIntensity:0});dg=t;const e=new P(new gt(1.2,1.8,Ce,4),t);e.position.y=Ce/2,e.rotation.y=Math.PI/4,e.castShadow=!0,i.add(e);const n=new $({color:3351108,transparent:!0,opacity:.2});for(let b=0;b<4;b++){const A=b/4*6.28+Math.PI/4,S=new P(new gt(.03,.04,Ce*.9,3),n);S.position.set(Math.cos(A)*1.55,Ce*.45,Math.sin(A)*1.55),i.add(S)}yf.length=0;for(let b=0;b<4;b++){const A=new $({color:z.obeliskPink,transparent:!0,opacity:0,blending:Jt,depthWrite:!1}),S=[],w=b/4*6.28+Math.PI/4;for(let C=0;C<3;C++){const D=6+C*4,U=new P(new gt(.015,.015,.8,3),A);U.position.set(Math.cos(w)*1.6,D,Math.sin(w)*1.6),U.rotation.z=Math.PI/2,U.rotation.y=-w,U.visible=!1,i.add(U),S.push(U)}const R=new P(new gt(.012,.012,2.5,3),A);R.position.set(Math.cos(w)*1.6,12,Math.sin(w)*1.6),R.visible=!1,i.add(R),S.push(R),yf.push({mat:A,meshes:S,revealed:!1,revealTimer:0})}const s=new q({color:z.obeliskBlack,roughness:.1,metalness:.9,emissive:z.obeliskPink,emissiveIntensity:0});pg=s;const o=new P(new Bn(1.3,3,4),s);o.position.y=Ce+1.5,o.rotation.y=Math.PI/4,i.add(o);const r=new $({color:z.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<4;b++){const A=b/4*6.28+Math.PI/4,S=new P(new gt(.02,.02,3.2,3),r);S.position.set(Math.cos(A)*.8,Ce+1.5,Math.sin(A)*.8),S.rotation.z=.35*(A<3.14?1:-1),S.rotation.y=-A,S.visible=!1,i.add(S)}for(let b=0;b<5;b++){const A=new P(new Pe(1.85-b*.02,.04,6,4),new $({color:2236979}));A.position.y=4+b*5,A.rotation.x=Math.PI/2,i.add(A)}const a=new q({color:1118488,roughness:.3,metalness:.7}),l=new P(new gt(2.2,2.5,.6,4),a);l.position.y=.3,l.rotation.y=Math.PI/4,i.add(l);const u=new P(new gt(2.8,3,.4,4),a);u.position.y=.05,u.rotation.y=Math.PI/4,i.add(u);const c=new $({color:z.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<8;b++){const A=b/8*6.28,S=new P(new Y(.06,4,3),c);S.position.set(Math.cos(A)*2.5,Ce*.7+b*.5,Math.sin(A)*2.5),S.visible=!1,i.add(S)}const p=new $({color:1710626,transparent:!0,opacity:.08});for(let b=0;b<6;b++){const A=_()*6.28,S=2+_()*Ce*.7,w=new P(new gt(.008,.008,.5+_()*.5,3),p);w.position.set(Math.cos(A)*1.6,S,Math.sin(A)*1.6),w.rotation.z=(_()-.5)*.8,w.rotation.y=-A,i.add(w)}const f=new q({color:921108,roughness:.5,metalness:.4});for(let b=0;b<12;b++){const A=_()*6.28,S=3+_()*2,w=.15+_()*.25,R=new P(new Y(w,4,3),f);R.scale.set(1+_()*.5,.3+_()*.3,1+_()*.5),R.position.set(Math.cos(A)*S,w*.15,Math.sin(A)*S),R.rotation.set(_(),_(),_()),i.add(R)}const d=new $({color:z.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<4;b++){const A=b/4*6.28+Math.PI/4;for(let S=0;S<5;S++){const w=5+S*3.5+_()*.5,R=(_()-.5)*.4,C=new P(new Y(.04,4,3),d);C.position.set(Math.cos(A)*1.58+Math.cos(A+1.57)*R,w,Math.sin(A)*1.58+Math.sin(A+1.57)*R),C.visible=!1,i.add(C)}}const g=new $({color:z.obeliskPink,transparent:!0,opacity:.8,blending:Jt,depthWrite:!1}),x=new P(new Y(.5,12,8),g);x.position.y=Ce+3,i.add(x);const h=new $({color:z.obeliskPink,transparent:!0,opacity:.2,blending:Jt,depthWrite:!1}),m=new P(new Y(.9,8,6),h);m.position.y=Ce+3,i.add(m),mg={mesh:x,haze:m,mat:g,hazeMat:h},_f=[];const M=[.8,1.1,1.4,1.8],v=[11158783,10040302,12277247,8921821];for(let b=0;b<4;b++){const A=new $({color:v[b],transparent:!0,opacity:.4,blending:Jt,depthWrite:!1,side:Pt}),S=new P(new Pe(M[b],.02,6,24),A);S.position.y=Ce+3,S.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),i.add(S),_f.push({mesh:S,mat:A,rx:(Math.random()-.5)*2,ry:(Math.random()-.5)*2,rz:(Math.random()-.5)*1.5})}const y=new $({color:0,transparent:!0,opacity:.15,side:Pt}),T=new P(new Ve(4,8),y);T.rotation.x=-Math.PI/2,T.position.y=.005,i.add(T),i.position.set(0,-Ce,0),ot.add(i),fg=i;const E=new Ur(8939212,0,30);i.add(E),E.position.set(0,Ce+1,0)}let gg=null,xg=null;function lb(){return gg}function ub(){return xg}function hb(){const i=new q({color:z.moatBlue,emissive:1136042,emissiveIntensity:.3,transparent:!0,opacity:0,roughness:.1,metalness:.3});xg=i;const t=new xl;t.absarc(0,0,6,0,6.28,!1);const e=new gl;e.absarc(0,0,3,0,6.28,!0),t.holes.push(e);const n=new Ia(t,24),s=new P(n,i);s.rotation.x=-Math.PI/2,s.position.y=.05,s.visible=!1,ot.add(s),gg=s;const o=new $({color:4491468,transparent:!0,opacity:0});for(let d=0;d<12;d++){const g=d/12*6.28+_()*.3,x=3.5+_()*2,h=new P(new Y(.04+_()*.04,4,3),o);h.scale.set(1.2,.4,1.2),h.position.set(Math.cos(g)*x,.02,Math.sin(g)*x),h.visible=!1,ot.add(h)}const r=new $({color:13426158,transparent:!0,opacity:0,side:Pt});for(let d=0;d<6;d++){const g=d/6*6.28+_()*.5,x=new P(new Ve(.12+_()*.1,5),r);x.rotation.x=-Math.PI/2,x.position.set(Math.cos(g)*3.3,.06,Math.sin(g)*3.3),x.visible=!1,ot.add(x)}const a=new $({color:8960989,transparent:!0,opacity:0});for(let d=0;d<8;d++){const g=d/8*6.28,x=4+_()*1.5,h=new P(new gt(.003,.003,.4,3),a);h.position.set(Math.cos(g)*x,.055,Math.sin(g)*x),h.rotation.x=Math.PI/2,h.rotation.z=g+Math.PI/2,h.visible=!1,ot.add(h)}const l=new $({color:264208,transparent:!0,opacity:0,side:Pt}),u=new xl;u.absarc(0,0,5.2,0,6.28,!1);const c=new gl;c.absarc(0,0,3.8,0,6.28,!0),u.holes.push(c);const p=new Ia(u,16),f=new P(p,l);f.rotation.x=-Math.PI/2,f.position.y=.04,f.visible=!1,ot.add(f)}const za=[];function Rp(i,t,e,n,s){const o=[],r=[],a=[];for(let u=0;u<e;u++){const c=i[u],p=i[u+1],f=p.x-c.x;p.y-c.y;const d=p.z-c.z,g=Math.sqrt(f*f+d*d)||1,x=-d/g,h=f/g,m=(u+.5)/e,M=.7+Math.sin(m*Math.PI)*.5,v=t*M/2,y=[c.x+x*v,c.y,c.z+h*v],T=[c.x-x*v,c.y,c.z-h*v],E=[p.x+x*v,p.y,p.z+h*v],b=[p.x-x*v,p.y,p.z-h*v];o.push(...y,...E,...T,...T,...E,...b);const A=u/e,S=(u+1)/e;if(a.push(A,0,S,0,A,1,A,1,S,0,S,1),s){const C=.85+Math.sin(m*Math.PI*3)*.15,D=1.2*C,U=.6*C;r.push(s.r*D,s.g*D,s.b*D),r.push(s.r*D,s.g*D,s.b*D),r.push(s.r*U,s.g*U,s.b*U),r.push(s.r*U,s.g*U,s.b*U),r.push(s.r*D,s.g*D,s.b*D),r.push(s.r*U,s.g*U,s.b*U)}}const l=new Ae;return l.setAttribute("position",new Vt(o,3)),l.setAttribute("uv",new Vt(a,2)),r&&l.setAttribute("color",new Vt(r,3)),l.computeVertexNormals(),l}function fb(){for(let l=0;l<6;l++){const u=z.rainbow[l],c=l/6*6.28,p=6+l*.8,f=Ce+6+l*2.5,d=1-l*.05,g=[],x=32;for(let H=0;H<=x;H++){const G=H/x,O=c+G*Math.PI,k=Math.cos(O)*p,nt=Math.sin(O)*p,ct=Math.sin(G*Math.PI)*f;g.push(new F(k,ct,nt))}const h=new it(u),m=Rp(g,d,x,!0,h),M=new $({vertexColors:!0,transparent:!0,opacity:0,side:Pt,depthWrite:!1,blending:Jt}),v=new P(m,M);v.visible=!1,ot.add(v);const y=new go(g),T=new $({color:16777215,transparent:!0,opacity:0,blending:Jt,depthWrite:!1}),E=new gn(y,x,.03,4,!1),b=new P(E,T);b.visible=!1,ot.add(b);const A=[],S=new $({color:16777215,transparent:!0,opacity:0,blending:Jt,depthWrite:!1});for(let H=0;H<8;H++){const G=new P(new Y(.06,4,3),S.clone());G.visible=!1,ot.add(G),A.push({mesh:G,mat:G.material,phase:H/8,speed:.15+Math.random()*.1})}const w=new $({color:u,transparent:!0,opacity:0,side:Pt,blending:Jt}),R=g[0],C=g[g.length-1],D=new P(new Ve(1.2,8),w);D.rotation.x=-Math.PI/2,D.position.set(R.x,.03,R.z),D.visible=!1,ot.add(D);const U=new P(new Ve(1.2,8),w.clone());U.rotation.x=-Math.PI/2,U.position.set(C.x,.03,C.z),U.visible=!1,ot.add(U),za.push({mesh:v,mat:M,coreLine:b,coreMat:T,curve:y,sparkles:A,pools:[D,U],poolMat:w,targetOpacity:0})}const i=[],t=10,e=Ce+14,n=32;for(let l=0;l<=n;l++){const u=l/n,c=u*Math.PI;i.push(new F(Math.cos(c)*t,Math.sin(u*Math.PI)*e,Math.sin(c)*t))}const s=new it(15654399),o=Rp(i,1.5,n,!0,s),r=new $({vertexColors:!0,transparent:!0,opacity:0,side:Pt,depthWrite:!1,blending:Jt}),a=new P(o,r);a.visible=!1,ot.add(a),za.push({mesh:a,mat:r,targetOpacity:0})}function db(i){for(let t=0;t<za.length;t++){const e=za[t];if(!(!e.sparkles||!e.curve)&&e.mesh.visible){e.coreLine&&(e.coreLine.visible=e.mesh.visible,e.coreMat.opacity=e.mat.opacity*.4);for(let n=0;n<e.sparkles.length;n++){const s=e.sparkles[n];s.phase+=s.speed*.016,s.phase>1&&(s.phase-=1);const o=e.curve.getPoint(s.phase);s.mesh.position.copy(o),s.mesh.visible=e.mesh.visible;const r=Math.sin(i*8+n*2.1)*.5+.5;s.mat.opacity=e.mat.opacity*r*.7}if(e.pools)for(let n=0;n<e.pools.length;n++)e.pools[n].visible=e.mesh.visible,e.poolMat&&(e.poolMat.opacity=e.mat.opacity*.3)}}}let In=null;const Di=[],bn=new ce,va=new it;function pb(i){const t=new $({color:16777215,transparent:!0,opacity:1});In=new qn($n.fly,t,i),In.instanceMatrix.setUsage(Me),In.instanceColor=new Ci(new Float32Array(i*3),3),In.instanceColor.setUsage(Me),bn.scale.setScalar(0),bn.updateMatrix();for(let e=0;e<i;e++){In.setMatrixAt(e,bn.matrix);const n=e%3===0?z.fireflyB:z.firefly;va.setHex(n),In.setColorAt(e,va),Di.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,phase:Math.random()*6.28,wander:Math.random()*6.28,colorHex:n})}In.count=i,In.frustumCulled=!1,ot.add(In)}function qc(i,t,e,n){let s=null;for(let o=0;o<Di.length;o++)if(!Di[o].active){s=Di[o];break}if(!s){let o=1/0;for(let r=0;r<Di.length;r++)Di[r].life<o&&(o=Di[r].life,s=Di[r])}s.x=i,s.y=t+.5+Math.random()*3,s.z=e,s.vx=(Math.random()-.5)*2,s.vy=Math.random()-.5,s.vz=(Math.random()-.5)*2,s.life=n,s.max=n,s.active=!0,s.wander=Math.random()*6.28}function vg(i,t){let e=0,n=!1;for(let s=0;s<Di.length;s++){const o=Di[s];if(!o.active){bn.position.set(0,-100,0),bn.scale.setScalar(0),bn.updateMatrix(),In.setMatrixAt(s,bn.matrix);continue}if(o.life-=i,o.life<=0){o.active=!1,bn.position.set(0,-100,0),bn.scale.setScalar(0),bn.updateMatrix(),In.setMatrixAt(s,bn.matrix);continue}e++,o.wander+=(Math.random()-.5)*3*i,o.vx+=Math.cos(o.wander)*1.5*i,o.vz+=Math.sin(o.wander)*1.5*i,o.vy+=Math.sin(t*2+o.phase)*i,o.vx*=.995,o.vy*=.995,o.vz*=.995,o.x+=o.vx*i,o.y+=o.vy*i,o.z+=o.vz*i;const r=Dt(o.x,o.z)+.3;o.y<r&&(o.y=r,o.vy=Math.abs(o.vy)*.5),o.y>12&&(o.vy-=2*i);const a=Math.sin(t*3+o.phase)*.5+.5,u=o.life/o.max*(.4+a*.6),c=.6+a*.6;bn.position.set(o.x,o.y,o.z),bn.scale.setScalar(c),bn.updateMatrix(),In.setMatrixAt(s,bn.matrix),va.setHex(o.colorHex),va.multiplyScalar(u),In.setColorAt(s,va),n=!0}return In.instanceMatrix.needsUpdate=!0,n&&(In.instanceColor.needsUpdate=!0),e}let Ln=null;const Ui=[],Tn=new ce,Rl=new it,mb=new it(z.spore);function gb(i){const t=new $({color:16777215,transparent:!0,opacity:1});Ln=new qn($n.spore,t,i),Ln.instanceMatrix.setUsage(Me),Ln.instanceColor=new Ci(new Float32Array(i*3),3),Ln.instanceColor.setUsage(Me),Tn.scale.setScalar(0),Tn.updateMatrix();for(let e=0;e<i;e++)Ln.setMatrixAt(e,Tn.matrix),Rl.setHex(z.spore),Ln.setColorAt(e,Rl),Ui.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});Ln.count=i,Ln.frustumCulled=!1,ot.add(Ln)}function xb(i,t,e){let n=null;for(let s=0;s<Ui.length;s++)if(!Ui[s].active){n=Ui[s];break}if(!n){let s=1/0;for(let o=0;o<Ui.length;o++)Ui[o].life<s&&(s=Ui[o].life,n=Ui[o])}n.x=i,n.y=t,n.z=e,n.vx=(Math.random()-.5)*.3,n.vy=.4+Math.random()*.4,n.vz=(Math.random()-.5)*.3,n.life=3+Math.random()*3,n.max=n.life,n.active=!0}let Mg=0,_g=0;function vb(i,t){Mg=i,_g=t}function Mb(i){let t=0,e=!1;for(let n=0;n<Ui.length;n++){const s=Ui[n];if(!s.active){Tn.position.set(0,-100,0),Tn.scale.setScalar(0),Tn.updateMatrix(),Ln.setMatrixAt(n,Tn.matrix);continue}if(s.life-=i,s.life<=0){s.active=!1,Tn.position.set(0,-100,0),Tn.scale.setScalar(0),Tn.updateMatrix(),Ln.setMatrixAt(n,Tn.matrix);continue}t++,s.vy+=.3*i,s.vx+=Mg*.3*i,s.vz+=_g*.3*i,s.vx*=.997,s.vy*=.997,s.vz*=.997,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i;const o=s.life/s.max*.7;Tn.position.set(s.x,s.y,s.z),Tn.scale.setScalar(1),Tn.updateMatrix(),Ln.setMatrixAt(n,Tn.matrix),Rl.copy(mb).multiplyScalar(o),Ln.setColorAt(n,Rl),e=!0}return Ln.instanceMatrix.needsUpdate=!0,e&&(Ln.instanceColor.needsUpdate=!0),t}let Dn=null;const fr=[];let Xu=0;const En=new ce,Cl=new it,yg=new it(z.starMote);function _b(i){const t=new $({color:16777215,transparent:!0,opacity:1});Dn=new qn($n.starMote,t,i),Dn.instanceMatrix.setUsage(Me),Dn.instanceColor=new Ci(new Float32Array(i*3),3),Dn.instanceColor.setUsage(Me),En.scale.setScalar(0),En.updateMatrix();for(let e=0;e<i;e++)Dn.setMatrixAt(e,En.matrix),Cl.copy(yg),Dn.setColorAt(e,Cl),fr.push({x:0,y:0,z:0,life:0,max:0,active:!1,vy:0,drift:0});Dn.count=i,Dn.frustumCulled=!1,ot.add(Dn)}function yb(i){let t=null;for(let e=0;e<fr.length;e++)if(!fr[e].active){t=fr[e];break}t&&(t.x=i.x+(Math.random()-.5)*60,t.z=i.z+(Math.random()-.5)*60,t.y=15+Math.random()*20,t.life=6+Math.random()*6,t.max=t.life,t.active=!0,t.vy=-.15-Math.random()*.3,t.drift=Math.random()*6.28)}function wg(i,t,e){Xu+=i,Xu>.15&&(Xu=0,yb(e));let n=!1;for(let s=0;s<fr.length;s++){const o=fr[s];if(!o.active){En.position.set(0,-100,0),En.scale.setScalar(0),En.updateMatrix(),Dn.setMatrixAt(s,En.matrix);continue}if(o.life-=i,o.life<=0||o.y<.5){o.active=!1,En.position.set(0,-100,0),En.scale.setScalar(0),En.updateMatrix(),Dn.setMatrixAt(s,En.matrix);continue}o.y+=o.vy*i,o.drift+=(Math.random()-.5)*.5*i,o.x+=Math.sin(o.drift)*.1*i,o.z+=Math.cos(o.drift)*.08*i;const r=o.life/o.max,a=Math.sin(t*4+s)*.3+.7,l=r*a*.7,u=.5+a*.5;En.position.set(o.x,o.y,o.z),En.scale.setScalar(u),En.updateMatrix(),Dn.setMatrixAt(s,En.matrix),Cl.copy(yg).multiplyScalar(l),Dn.setColorAt(s,Cl),n=!0}Dn.instanceMatrix.needsUpdate=!0,n&&(Dn.instanceColor.needsUpdate=!0)}let Un=null;const dr=[],An=new ce,Pl=new it,Sg=new it(8956535);function wb(i){const t=new $({color:16777215,transparent:!0,opacity:1});Un=new qn($n.dustMote,t,i),Un.instanceMatrix.setUsage(Me),Un.instanceColor=new Ci(new Float32Array(i*3),3),Un.instanceColor.setUsage(Me),An.scale.setScalar(0),An.updateMatrix();for(let e=0;e<i;e++)Un.setMatrixAt(e,An.matrix),Pl.copy(Sg),Un.setColorAt(e,Pl),dr.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});Un.count=i,Un.frustumCulled=!1,ot.add(Un)}function Cp(i,t,e){for(let n=0;n<e;n++){let s=null;for(let a=0;a<dr.length;a++)if(!dr[a].active){s=dr[a];break}if(!s)continue;const o=Math.random()*6.28,r=1+Math.random()*2;s.x=i+Math.cos(o)*.2,s.y=Dt(i,t)+.1,s.z=t+Math.sin(o)*.2,s.vx=Math.cos(o)*r,s.vy=.5+Math.random()*1.5,s.vz=Math.sin(o)*r,s.life=.6+Math.random()*.6,s.max=s.life,s.active=!0}}function Sb(i){let t=!1;for(let e=0;e<dr.length;e++){const n=dr[e];if(!n.active){An.position.set(0,-100,0),An.scale.setScalar(0),An.updateMatrix(),Un.setMatrixAt(e,An.matrix);continue}if(n.life-=i,n.life<=0){n.active=!1,An.position.set(0,-100,0),An.scale.setScalar(0),An.updateMatrix(),Un.setMatrixAt(e,An.matrix);continue}n.vy-=3*i,n.vx*=.96,n.vy*=.96,n.vz*=.96,n.x+=n.vx*i,n.y+=n.vy*i,n.z+=n.vz*i;const s=Dt(n.x,n.z)+.05;n.y<s&&(n.y=s,n.vy=0,n.vx*=.8,n.vz*=.8);const o=n.life/n.max*.4;An.position.set(n.x,n.y,n.z),An.scale.setScalar(1),An.updateMatrix(),Un.setMatrixAt(e,An.matrix),Pl.copy(Sg).multiplyScalar(o),Un.setColorAt(e,Pl),t=!0}Un.instanceMatrix.needsUpdate=!0,t&&(Un.instanceColor.needsUpdate=!0)}let zn=null;const pr=[],Rn=new ce,Il=new it,bg=new it(z.bubblePop),bb=new Y(.02,3,3);function Tb(i){const t=new $({color:16777215,transparent:!0,opacity:1});zn=new qn(bb,t,i),zn.instanceMatrix.setUsage(Me),zn.instanceColor=new Ci(new Float32Array(i*3),3),zn.instanceColor.setUsage(Me),Rn.scale.setScalar(0),Rn.updateMatrix();for(let e=0;e<i;e++)zn.setMatrixAt(e,Rn.matrix),Il.copy(bg),zn.setColorAt(e,Il),pr.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});zn.count=i,zn.frustumCulled=!1,ot.add(zn)}function Eb(i,t,e,n){for(let s=0;s<n;s++){let o=null;for(let u=0;u<pr.length;u++)if(!pr[u].active){o=pr[u];break}if(!o)continue;const r=Math.random()*6.28,a=Math.random()*3.14,l=1+Math.random()*2;o.x=i,o.y=t,o.z=e,o.vx=Math.cos(r)*Math.sin(a)*l,o.vy=Math.cos(a)*l,o.vz=Math.sin(r)*Math.sin(a)*l,o.life=.4+Math.random()*.4,o.max=o.life,o.active=!0}}function Ab(i){let t=!1;for(let e=0;e<pr.length;e++){const n=pr[e];if(!n.active){Rn.position.set(0,-100,0),Rn.scale.setScalar(0),Rn.updateMatrix(),zn.setMatrixAt(e,Rn.matrix);continue}if(n.life-=i,n.life<=0){n.active=!1,Rn.position.set(0,-100,0),Rn.scale.setScalar(0),Rn.updateMatrix(),zn.setMatrixAt(e,Rn.matrix);continue}n.vy-=2*i,n.vx*=.97,n.vy*=.97,n.vz*=.97,n.x+=n.vx*i,n.y+=n.vy*i,n.z+=n.vz*i;const s=n.life/n.max*.8;Rn.position.set(n.x,n.y,n.z),Rn.scale.setScalar(1),Rn.updateMatrix(),zn.setMatrixAt(e,Rn.matrix),Il.copy(bg).multiplyScalar(s),zn.setColorAt(e,Il),t=!0}zn.instanceMatrix.needsUpdate=!0,t&&(zn.instanceColor.needsUpdate=!0)}let Nn=null;const mr=[],dn=new ce,Ll=new it,Tg=[new it(z.leafGlow),new it(3394662),new it(2271880),new it(5636044),new it(4513262)];let Eg=0,Ag=0;function Rb(i,t,e){Eg=i,Ag=t}function Cb(i){const t=new he(.12,.08),e=new $({color:16777215,transparent:!0,opacity:1,side:Pt,depthWrite:!1,blending:Jt});Nn=new qn(t,e,i),Nn.instanceMatrix.setUsage(Me),Nn.instanceColor=new Ci(new Float32Array(i*3),3),Nn.instanceColor.setUsage(Me),dn.scale.setScalar(0),dn.updateMatrix();for(let n=0;n<i;n++)Nn.setMatrixAt(n,dn.matrix),Ll.setHex(0),Nn.setColorAt(n,Ll),mr.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,rvx:0,rvy:0,rvz:0,life:0,max:0,active:!1,colorIdx:0});Nn.count=i,Nn.frustumCulled=!1,ot.add(Nn)}function Pb(i,t,e){let n=null;for(let o=0;o<mr.length;o++)if(!mr[o].active){n=mr[o];break}if(!n)return;n.x=i+(Math.random()-.5)*2,n.y=t+Math.random()*2,n.z=e+(Math.random()-.5)*2;const s=Math.random()*6.28;n.vx=Math.cos(s)*.3,n.vy=-.2-Math.random()*.3,n.vz=Math.sin(s)*.3,n.rvx=(Math.random()-.5)*4,n.rvy=(Math.random()-.5)*3,n.rvz=(Math.random()-.5)*2,n.rx=Math.random()*6.28,n.ry=Math.random()*6.28,n.rz=Math.random()*6.28,n.life=4+Math.random()*4,n.max=n.life,n.active=!0,n.colorIdx=Math.floor(Math.random()*Tg.length)}function Ib(i,t){let e=!1;for(let n=0;n<mr.length;n++){const s=mr[n];if(!s.active){dn.position.set(0,-100,0),dn.scale.setScalar(0),dn.updateMatrix(),Nn.setMatrixAt(n,dn.matrix);continue}if(s.life-=i,s.life<=0||s.y<-.5){s.active=!1,dn.position.set(0,-100,0),dn.scale.setScalar(0),dn.updateMatrix(),Nn.setMatrixAt(n,dn.matrix);continue}s.vx+=Eg*.4*i,s.vz+=Ag*.4*i,s.vx+=Math.sin(t*3+n*1.7)*.5*i,s.vz+=Math.cos(t*2.5+n*2.1)*.3*i,s.vy-=.3*i,s.vx*=.995,s.vy=Math.max(s.vy,-.8),s.vz*=.995,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i,s.rx+=s.rvx*i,s.ry+=s.rvy*i,s.rz+=s.rvz*i;const o=s.life/s.max,r=o*(.6+Math.sin(t*2+n*.8)*.4),a=.8+o*.4;dn.position.set(s.x,s.y,s.z),dn.rotation.set(s.rx,s.ry,s.rz),dn.scale.setScalar(a),dn.updateMatrix(),Nn.setMatrixAt(n,dn.matrix),Ll.copy(Tg[s.colorIdx]).multiplyScalar(r),Nn.setColorAt(n,Ll),e=!0}Nn.instanceMatrix.needsUpdate=!0,e&&(Nn.instanceColor.needsUpdate=!0)}const Ac=40,wf=8;let mn=null;const zi=[],ii=new ce,Ps=new it,Rg=new it(4513194);let Pp=0,Ip=0,zd=!1;function Lb(){const i=new xl;return i.moveTo(0,-.18),i.quadraticCurveTo(.1,-.17,.11,-.06),i.lineTo(.1,-.02),i.lineTo(.13,.12),i.quadraticCurveTo(.125,.14,.11,.12),i.lineTo(.08,0),i.quadraticCurveTo(.05,-.02,.03,0),i.lineTo(.03,.05),i.lineTo(.02,.22),i.quadraticCurveTo(0,.245,-.02,.22),i.lineTo(-.03,.05),i.lineTo(-.03,0),i.quadraticCurveTo(-.05,-.02,-.08,0),i.lineTo(-.11,.12),i.quadraticCurveTo(-.125,.14,-.13,.12),i.lineTo(-.1,-.02),i.lineTo(-.11,-.06),i.quadraticCurveTo(-.1,-.17,0,-.18),new Ia(i)}function Db(){const i=Lb(),t=new $({color:16777215,transparent:!0,opacity:1,blending:Jt,depthWrite:!1,side:Pt});mn=new qn(i,t,Ac),mn.instanceMatrix.setUsage(Me),mn.instanceColor=new Ci(new Float32Array(Ac*3),3),mn.instanceColor.setUsage(Me),ii.position.set(0,-100,0),ii.scale.setScalar(0),ii.updateMatrix();for(let e=0;e<Ac;e++)mn.setMatrixAt(e,ii.matrix),Ps.setScalar(0),mn.setColorAt(e,Ps),zi.push({active:!1,life:0,maxLife:wf,x:0,z:0});mn.count=Ac,mn.frustumCulled=!1,ot.add(mn),zd=!0}function Ub(i,t,e,n){if(!zd)return;const s=i-Pp,o=t-Ip;if(s*s+o*o<(n?.25:.64))return;Pp=i,Ip=t;let l=null,u=-1;for(let h=0;h<zi.length;h++)if(!zi[h].active){l=zi[h],u=h;break}if(!l){let h=1/0;for(let m=0;m<zi.length;m++)zi[m].life<h&&(h=zi[m].life,l=zi[m],u=m)}const c=Dt(i,t);l.active=!0,l.life=wf,l.maxLife=wf,l.x=i,l.z=t;const p=u%2===0?1:-1,f=Math.sin(e+Math.PI/2)*.12*p,d=Math.cos(e+Math.PI/2)*.12*p,g=n?1.15:1;ii.position.set(i+f,c+.04,t+d),ii.rotation.set(-Math.PI/2,0,-e+(Math.random()-.5)*.15),ii.scale.set(g,g,g),ii.updateMatrix(),mn.setMatrixAt(u,ii.matrix);const x=n?1.2:.85;Ps.copy(Rg).multiplyScalar(x),mn.setColorAt(u,Ps)}function zb(i,t){if(!zd)return;const e=1+(t||0)*1.5;let n=!1;for(let s=0;s<zi.length;s++){const o=zi[s];if(!o.active)continue;if(o.life-=i*e,o.life<=0){o.active=!1,ii.position.set(0,-100,0),ii.scale.setScalar(0),ii.updateMatrix(),mn.setMatrixAt(s,ii.matrix),Ps.setScalar(0),mn.setColorAt(s,Ps),n=!0;continue}const r=o.life/o.maxLife,a=r*r;Ps.copy(Rg).multiplyScalar(a*.85),mn.setColorAt(s,Ps),n=!0}mn.instanceMatrix.needsUpdate=!0,n&&(mn.instanceColor.needsUpdate=!0)}const tr=150;let Ge=null;const Nd=[],Cn=new ce,Dl=new it,Fd=new it(z.orbGold),Nb=new it(z.orbGlow);function Fb(){const i=new $({color:16777215,transparent:!0,opacity:1,blending:Jt,depthWrite:!1}),t=new Y(.05,4,3);Ge=new qn(t,i,tr),Ge.instanceMatrix.setUsage(Me),Ge.instanceColor=new Ci(new Float32Array(tr*3),3),Ge.instanceColor.setUsage(Me),Cn.scale.setScalar(0),Cn.updateMatrix();for(let e=0;e<tr;e++)Ge.setMatrixAt(e,Cn.matrix),Dl.copy(Fd),Ge.setColorAt(e,Dl),Nd.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,phase:Math.random()*6.28});Ge.count=tr,Ge.frustumCulled=!1,Ge.visible=!1,ot.add(Ge)}function Ob(i,t,e){Ge.visible=!0;for(let n=0;n<tr;n++){const s=Nd[n];s.x=i,s.y=t,s.z=e;const o=Math.random()*6.28,r=Math.random()*Math.PI*.8,a=1.5+Math.random()*4;s.vx=Math.sin(r)*Math.cos(o)*a,s.vy=Math.cos(r)*a*.6+1+Math.random()*1.5,s.vz=Math.sin(r)*Math.sin(o)*a,s.life=3+Math.random()*4,s.max=s.life,s.active=!0;const l=Math.random()<.7?Fd:Nb,u=Ge.instanceColor.array;u[n*3]=l.r*(.8+Math.random()*.4),u[n*3+1]=l.g*(.8+Math.random()*.4),u[n*3+2]=l.b*(.6+Math.random()*.4)}Ge.instanceColor.needsUpdate=!0}function Bb(i,t){if(!Ge||!Ge.visible)return;let e=!1,n=!1;for(let s=0;s<tr;s++){const o=Nd[s];if(!o.active){Cn.position.set(0,-100,0),Cn.scale.setScalar(0),Cn.updateMatrix(),Ge.setMatrixAt(s,Cn.matrix);continue}if(e=!0,o.life-=i,o.life<=0||o.y<-1){o.active=!1,Cn.position.set(0,-100,0),Cn.scale.setScalar(0),Cn.updateMatrix(),Ge.setMatrixAt(s,Cn.matrix);continue}o.vy-=1.2*i,o.vx*=.992,o.vz*=.992,o.vx+=Math.sin(t*2.5+o.phase)*.15*i,o.vz+=Math.cos(t*2+o.phase*1.3)*.12*i,o.x+=o.vx*i,o.y+=o.vy*i,o.z+=o.vz*i;const r=o.life/o.max,a=Math.sin(t*5+o.phase)*.3+.7,l=(.4+a*.6)*Math.min(r*2,1);Cn.position.set(o.x,o.y,o.z),Cn.scale.setScalar(l),Cn.updateMatrix(),Ge.setMatrixAt(s,Cn.matrix),Dl.copy(Fd).multiplyScalar(r*a),Ge.setColorAt(s,Dl),n=!0}Ge.instanceMatrix.needsUpdate=!0,n&&(Ge.instanceColor.needsUpdate=!0),e||(Ge.visible=!1)}const si=[],ss=[];let Lp=Ce+2,Ss=1;function Dp(i){Ss=i}function Gb(){for(let i=0;i<si.length;i++){const t=si[i];ot.remove(t.upTube),t.upTube.geometry.dispose(),t.mat.dispose(),ot.remove(t.upGlow),t.upGlow.geometry.dispose(),t.glowMat.dispose(),ot.remove(t.bendTube),t.bendTube.geometry.dispose(),t.bendMat.dispose(),ot.remove(t.bendGlow),t.bendGlow.geometry.dispose(),t.bendGlowMat.dispose()}si.length=0;for(let i=0;i<ss.length;i++){const t=ss[i];ot.remove(t.tube),t.tube.geometry.dispose(),t.mat.dispose(),ot.remove(t.glow),t.glow.geometry.dispose(),t.glowMat.dispose()}ss.length=0}function Cg(i,t,e,n){const s=[];for(let r=0;r<=12;r++){const a=r/12,l=i*(1-a*a),u=t*(1-a*a),c=e+(n-e)*a;s.push(new F(l,c,u))}return{curve:new go(s),pts:s}}function kb(i,t,e,n){const s=n||Ce+2,o=e+15,r=new yd(new F(i,e,t),new F(i,o,t)),a=new $({color:z.laserPink,transparent:!0,opacity:0,blending:Jt,depthWrite:!1}),l=new P(new gn(r,1,.06,6,!1),a);ot.add(l);const u=new $({color:z.laserGlow,transparent:!0,opacity:0,blending:Jt,depthWrite:!1}),c=new P(new gn(r,1,.2,6,!1),u);ot.add(c);const{curve:p}=Cg(i,t,o,s),f=new $({color:z.laserPink,transparent:!0,opacity:0,blending:Jt,depthWrite:!1}),d=new P(new gn(p,16,.05,6,!1),f);ot.add(d);const g=new $({color:z.laserGlow,transparent:!0,opacity:0,blending:Jt,depthWrite:!1}),x=new P(new gn(p,16,.18,6,!1),g);ot.add(x);const h={upTube:l,upGlow:c,bendTube:d,bendGlow:x,mat:a,glowMat:u,bendMat:f,bendGlowMat:g,fromX:i,fromZ:t,floatY:e,skyY:o,tipY:s,animPhase:0,animTimer:0};si.push(h);for(let m=0;m<si.length-1;m++){const M=si[m],v=(h.skyY+M.skyY)/2,y=[];for(let w=0;w<=8;w++){const R=w/8,C=h.fromX*(1-R)+M.fromX*R,D=h.fromZ*(1-R)+M.fromZ*R,U=v+Math.sin(R*Math.PI)*3;y.push(new F(C,U,D))}const T=new go(y),E=new $({color:z.laserGlow,transparent:!0,opacity:0,blending:Jt,depthWrite:!1}),b=new P(new gn(T,10,.03,4,!1),E);ot.add(b);const A=new $({color:z.laserPink,transparent:!0,opacity:0,blending:Jt,depthWrite:!1}),S=new P(new gn(T,10,.1,4,!1),A);ot.add(S),ss.push({tube:b,glow:S,mat:E,glowMat:A,opacity:0})}return h}function Hb(i){for(let t=0;t<si.length;t++){const e=si[t];e.tipY=i;const{curve:n}=Cg(e.fromX,e.fromZ,e.skyY,i);ot.remove(e.bendTube),e.bendTube.geometry.dispose(),e.bendTube.geometry=new gn(n,16,.05,6,!1),ot.add(e.bendTube),ot.remove(e.bendGlow),e.bendGlow.geometry.dispose(),e.bendGlow.geometry=new gn(n,16,.18,6,!1),ot.add(e.bendGlow)}}function Vb(i,t,e){const n=e||Ce+2;Math.abs(n-Lp)>.1&&si.length>0&&(Hb(n),Lp=n);for(let s=0;s<si.length;s++){const o=si[s];if(o.animTimer+=i,o.animPhase===0){const r=Math.min(o.animTimer/.5,1);o.mat.opacity=r*.8,o.glowMat.opacity=r*.3,o.animTimer>.5&&(o.animPhase=1,o.animTimer=0)}else if(o.animPhase===1){const r=Math.min(o.animTimer/.8,1);o.bendMat.opacity=r*.7,o.bendGlowMat.opacity=r*.2,o.mat.opacity=.8,o.glowMat.opacity=.3,o.animTimer>.8&&(o.animPhase=2)}else{const r=Math.sin(t*3+s*1.2)*.5+.5;o.mat.opacity=.5+r*.4,o.glowMat.opacity=.15+r*.15,o.bendMat.opacity=.4+r*.3,o.bendGlowMat.opacity=.1+r*.12}}for(let s=0;s<ss.length;s++){const o=ss[s];o.opacity=Math.min(o.opacity+i*.5,.3);const r=Math.sin(t*2+s*.8)*.5+.5;o.mat.opacity=o.opacity*(.6+r*.4),o.glowMat.opacity=o.opacity*(.2+r*.15)}if(Ss<1){for(let s=0;s<si.length;s++){const o=si[s];o.mat.opacity*=Ss,o.glowMat.opacity*=Ss,o.bendMat.opacity*=Ss,o.bendGlowMat.opacity*=Ss}for(let s=0;s<ss.length;s++)ss[s].mat.opacity*=Ss,ss[s].glowMat.opacity*=Ss}}let Ma=null,bi=0,ra=null,Ul=!1;function Wb(i,t,e){return t&&e<T2&&e<1/0?(ra!=="puff"&&(ra="puff",bi=0),bi+=S2*i,bi>=1&&Ma!=="puff"&&(bi=1,Ma="puff",Ul=!0)):ra==="puff"&&bi>0&&Ma!=="puff"&&(bi=Math.max(0,bi-b2*i),bi===0&&(ra=null)),bi}function Xb(){return bi}function Od(){return Ma}function qb(){Ma=null,bi=0,ra=null,Ul=!1}function Yb(){return Ul?(Ul=!1,!0):!1}const Zb=new it(z.orbGold),$b=new it(16777215);let Qn=0,cn="SEEK",bs=-Ce,fn=0,aa=[],kn=null,$s=null,js=null,_e=null,Ks=[],ts=null,Sf=null,fi=[],ca=null,Pg=null,Ig=null,bf=null,Tf=null,Ef=null,Af=null,Yc=null,Rf=null,Cf=null,Pf=null,Rc=0,If=null,Lf=null,Df=null,oo=[],Uf=[],zf=[],Nf=[],Ff=[],Xo=[],Of=[],qo=null,Up=0,an=0,Ii=[],er=null,zp=!1,Np=!1;const nr=200;let pi=null;const Bd=[];let Lg=!1;function jb(){if(pi)return;const i=new Ae,t=new Float32Array(nr*3),e=new Float32Array(nr*3),n=new Float32Array(nr);i.setAttribute("position",new Ne(t,3)),i.setAttribute("color",new Ne(e,3)),i.setAttribute("size",new Ne(n,1)),i.attributes.position.setUsage(Me),i.attributes.color.setUsage(Me),i.attributes.size.setUsage(Me);const s=new vd({size:.3,vertexColors:!0,transparent:!0,opacity:.9,blending:Jt,depthWrite:!1,sizeAttenuation:!0});pi=new Cm(i,s),pi.visible=!1,ot.add(pi);const o=new it(z.obeliskPink),r=new it(11158783);for(let a=0;a<nr;a++){const l=Math.random()<.7?o:r;e[a*3]=l.r*(.8+Math.random()*.4),e[a*3+1]=l.g*(.8+Math.random()*.4),e[a*3+2]=l.b*(.8+Math.random()*.4),n[a]=.15+Math.random()*.25,Bd.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,active:!1,sparklePhase:Math.random()*6.28})}i.attributes.color.needsUpdate=!0,i.attributes.size.needsUpdate=!0}function Kb(i,t,e){Lg=!0,pi.visible=!0;for(let n=0;n<nr;n++){const s=Bd[n];s.x=i,s.y=t,s.z=e;const o=Math.random()*6.28,r=Math.random()*Math.PI,a=2+Math.random()*5;s.vx=Math.sin(r)*Math.cos(o)*a,s.vy=Math.cos(r)*a*.5+Math.random()*2,s.vz=Math.sin(r)*Math.sin(o)*a,s.life=5+Math.random()*6,s.active=!0}}function Jb(i,t){if(!pi||!pi.visible)return;const e=pi.geometry.attributes.position.array,n=pi.geometry.attributes.size.array;let s=!1;for(let o=0;o<nr;o++){const r=Bd[o];if(!r.active){e[o*3+1]=-100,n[o]=0;continue}if(s=!0,r.life-=i,r.life<=0||r.y<-1){r.active=!1;continue}r.vy-=1.5*i,r.vx*=.995,r.vz*=.995,r.vx+=Math.sin(t*3+o*.7)*.3*i,r.vz+=Math.cos(t*2.5+o*1.1)*.2*i,r.x+=r.vx*i,r.y+=r.vy*i,r.z+=r.vz*i,e[o*3]=r.x,e[o*3+1]=r.y,e[o*3+2]=r.z;const a=Math.sin(t*6+r.sparklePhase)*.5+.5,l=Math.min(r.life/2,1);n[o]=(.15+a*.2)*l}pi.geometry.attributes.position.needsUpdate=!0,pi.geometry.attributes.size.needsUpdate=!0,s||(pi.visible=!1)}function Qb(i){aa=i.orbs,kn=i.obeliskGroup,$s=i.obeliskMat,js=i.obeliskGlowMat,_e=i.pinnacleOrb,Ks=i.pinnacleRings||[],ts=i.moatMesh,Sf=i.moatMat,fi=i.rainbowArcs,ca=i.player,Pg=i.makeLaser,Ig=i.orbHudEl,Uf=i.deers||[],zf=i.puffs||[],Nf=i.jellies||[],Ff=i.moths||[],Xo=i.trees||[],Of=i.treeMeshes||[],qo=i.groundMesh||null,bf=i.playOrbCollect||null,Tf=i.playOrbWarble||null,Ef=i.playLaserZap||null,Af=i.playLaserHum||null,Yc=i.stopLaserHums||null,Rf=i.notifyOrbCollected||null,Cf=i.playOrbReject||null,Pf=i.showOrbRejectHint||null,If=i.showOrbDiscovery||null,Lf=i.spawnOrbBurst||null,Df=i.startResonanceDrone||null,oo=i.runeFaces||[],jb()}function tT(i,t){Rc>0&&(Rc-=i);let e=null,n=1/0;for(let l=0;l<aa.length;l++){const u=aa[l];if(u.found)continue;const c=u.x-ca.pos.x,p=u.z-ca.pos.z,f=c*c+p*p;f<n&&(n=f,e=u)}if(e&&n<Fo*Fo){const l=Math.sin(t*2+e.phase)*.5+.5;oa.position.set(e.x,1,e.z),oa.intensity=1+l*2,oa.distance=Fo}else oa.intensity=0;for(let l=0;l<aa.length;l++){const u=aa[l];if(!(u.found&&!u.flyUp&&!u._flashing)){if(!u.found){const c=Math.sin(t*1.5+u.phase)*.5+.5;u.group.position.y=u.flyY+Math.sin(t*.8+u.phase)*.3,u.glowMat.opacity=.3+c*.4,u.hazeMat.opacity=.08+c*.12;const p=u.x-ca.pos.x,f=u.z-ca.pos.z,d=p*p+f*f,g=Fo*Fo;if(d<g){const x=1-Math.sqrt(d)/Fo,h=x*x;u.glowMat.opacity=Math.min(.3+c*.4+h*.5,1),u.hazeMat.opacity=Math.min(.08+c*.12+h*.25,.6),u.coreMat.color.copy($b).lerp(Zb,1-h);const m=1+h*.3;u.group.scale.setScalar(m)}else u.group.scale.setScalar(1);for(let x=3;x<u.group.children.length;x++){const h=u.group.children[x],m=(x-3)/6*6.28+t*1.5;h.position.x=Math.cos(m)*.4,h.position.z=Math.sin(m)*.4,h.position.y=Math.sin(m*2+t)*.1}if(d<cp*cp)if(Od()){u.found=!0,u._flashing=!0,u._flashTimer=0,u.flyY=u.group.position.y,Qn++,qb();const h=Ig||document.getElementById("orb-hud");h&&(h.innerHTML="✦ "+Qn+" / "+xn),cn==="SEEK"&&(cn="RISING"),bf&&bf(),Rf&&Rf(l),If&&If(Qn-1),Lf&&Lf(u.x,u.group.position.y,u.z),Df&&Df(Qn);const m=Qn-1;if(m<oo.length){const M=oo[m];M.revealed=!0,M.revealTimer=0;for(let v=0;v<M.meshes.length;v++)M.meshes[v].visible=!0}Qn>=xn&&eT()}else Rc<=0&&(Cf&&Cf(),Pf&&Pf(),Rc=3)}if(u._flashing){u._flashTimer+=i;const c=Math.min(u._flashTimer/1.5,1),p=c<.3?c/.3:1-(c-.3)/.7;u.glowMat.opacity=.5+p*.5,u.hazeMat.opacity=.3+p*.5,u.group.scale.setScalar(1+p*.6),u.group.position.x=u.x+Math.sin(t*30)*p*.05,u.group.position.z=u.z+Math.cos(t*25)*p*.05,u._flashTimer>1.5&&(u._flashing=!1,u.flyUp=!0,u.group.position.x=u.x,u.group.position.z=u.z,Tf&&Tf())}if(u.flyUp){const c=Ce+5;u.flyY+=(c-u.flyY)*i*.8,u.group.position.y=u.flyY;const p=Math.min((u.flyY-1)/(c-1),1);if(u.group.scale.setScalar(1-p*.6),u.glowMat.opacity=.8-p*.5,u.flyY>c-1&&!u.laserLine){u.flyUp=!1,u.group.visible=!1;const f=qu();u.laserLine=Pg(u.x,u.z,0,f),Ef&&Ef(),Af&&Af(u.x,u.z)}}}}const s=Ce/xn,o=-Ce+Qn*s;if(bs<o-.01?(bs+=8*i,bs>o&&(bs=o),kn&&(kn.position.y=bs,kn.position.x=Math.sin(t*25)*.04,kn.position.z=Math.cos(t*30)*.03)):kn&&(kn.position.x*=.9,kn.position.z*=.9),Qn>=xn&&bs>=-.01&&cn==="RISING"&&(cn="COMPLETE",fn=0),kn){kn.rotation.y+=i*.03;const l=kn.children[kn.children.length-1];if(l&&l.isLight){const u=Math.max(0,Math.min(1,(bs+Ce)/Ce));l.intensity=u*1.5*(.8+Math.sin(t*1.5)*.2)}}for(let l=0;l<oo.length;l++){const u=oo[l];if(!u.revealed)continue;u.revealTimer+=i;const c=Math.min(u.revealTimer/2,1),p=Math.sin(t*1.5+l*1.57)*.1+.9;u.mat.opacity=c*.6*p}if(_e&&_e.mesh.visible){const l=Math.sin(t*2)*.5+.5;_e.mat.opacity=.6+l*.3,_e.hazeMat.opacity=.15+l*.12;const u=Qn/xn;_e.mat.opacity*=.3+u*.7,_e.hazeMat.opacity*=.2+u*.8}for(let l=0;l<Ks.length;l++){const u=Ks[l];if(!u.mesh.visible)continue;u.mesh.rotation.x+=u.rx*i,u.mesh.rotation.y+=u.ry*i,u.mesh.rotation.z+=u.rz*i;const c=Qn/xn;u.mat.opacity=(.15+c*.35)*(.8+Math.sin(t*1.5+l)*.2)}const a=qu();if(Vb(i,t,a),cn==="COMPLETE"&&fn>3?Dp(Math.max(0,1-(fn-3)/4)):(cn==="FINALE"||cn==="TRANSFORM")&&(Dp(0),Yc&&(Yc(),Yc=null)),Jb(i,t),cn==="COMPLETE"){fn+=i;const l=Math.min(fn/3,1);if($s&&($s.emissiveIntensity=l*1.5),js&&(js.emissiveIntensity=l*2.5),_e&&_e.mesh.visible&&fn>1&&fn<3){const u=Math.min((fn-1)/1.5,1);_e.mat.opacity=.9+u*.1,_e.hazeMat.opacity=.5+u*.5,_e.mesh.scale.setScalar(1+u*.5),_e.haze.scale.setScalar(1+u*1);for(let c=0;c<Ks.length;c++){const p=Ks[c];p.mesh.rotation.x+=p.rx*i*(1+u*4),p.mesh.rotation.y+=p.ry*i*(1+u*4),p.mesh.rotation.z+=p.rz*i*(1+u*4)}}if(_e&&_e.mesh.visible&&fn>=3&&!Lg){const u=new F;_e.mesh.getWorldPosition(u),Kb(u.x,u.y,u.z),_e.mesh.visible=!1,_e.haze.visible=!1;for(let c=0;c<Ks.length;c++)Ks[c].mesh.visible=!1}if(fn>3&&Sf){const u=Math.min((fn-3)/4,1);Sf.opacity=u*.6,ts&&(ts.visible||(ts.visible=!0),ts.position.y=.05+Math.sin(t*3)*.02*u)}if(fn>4)for(let u=0;u<fi.length;u++){const c=u*.3,p=Math.min(Math.max((fn-4-c)/2,0),1);p>0&&!fi[u].mesh.visible&&(fi[u].mesh.visible=!0),fi[u].mat.opacity=p*.55,fi[u].mesh.rotation.y+=i*.1*(u+1)*.3}if(fn>3){const u=Math.min((fn-3)/6,1)*2;for(let c=0;c<Uf.length;c++){const p=Uf[c],f=p.group,d=-f.position.x,g=-f.position.z,x=Math.sqrt(d*d+g*g);x>8?(p.wanderAng=Math.atan2(-f.position.x,-f.position.z),p.state="walk",p.speed=1.5*u,f.position.x+=d/x*p.speed*i,f.position.z+=g/x*p.speed*i,f.rotation.y=p.wanderAng):p.state="pause"}for(let c=0;c<zf.length;c++){const p=zf[c],f=p.group,d=-f.position.x,g=-f.position.z,x=Math.sqrt(d*d+g*g);x>8&&(p.wanderAng=Math.atan2(-f.position.x,-f.position.z),p.state="hop",p.hopTimer=p.hopTimer%1.2,f.position.x+=d/x*1.5*u*i,f.position.z+=g/x*1.5*u*i)}for(let c=0;c<Nf.length;c++){const p=Nf[c],f=p.group;f.position.x+=(0-f.position.x)*i*.15*u,f.position.z+=(0-f.position.z)*i*.15*u}for(let c=0;c<Ff.length;c++){const p=Ff[c];p.centerX+=(0-p.centerX)*i*.2*u,p.centerZ+=(0-p.centerZ)*i*.2*u,p.orbitR=Math.max(p.orbitR-i*.3*u,2)}}fn>12&&(cn="FINALE",console.log("✦ Quest → FINALE"))}if(cn==="FINALE"){Up+=i,$s&&($s.emissiveIntensity=1.5+Math.sin(t*.5)*.3),js&&(js.emissiveIntensity=2.5+Math.sin(t*.7)*.5),ts&&(ts.position.y=.05+Math.sin(t*3)*.02);for(let l=0;l<fi.length;l++)fi[l].mesh.rotation.y+=i*.1*(l+1)*.3,fi[l].mat.opacity=.45+Math.sin(t+l)*.1;Up>30&&(cn="TRANSFORM",an=0,nT(),console.log("✦ Quest → TRANSFORM (trees="+Xo.length+")"))}if(cn==="TRANSFORM"){an+=i,$s&&($s.emissiveIntensity=1.5+Math.sin(t*.5)*.3),js&&(js.emissiveIntensity=2.5+Math.sin(t*.7)*.5),ts&&(ts.position.y=.05+Math.sin(t*3)*.02);for(let p=0;p<fi.length;p++)fi[p].mesh.rotation.y+=i*.1*(p+1)*.3,fi[p].mat.opacity=.45+Math.sin(t+p)*.1;if(an<3&&Ii.length<Xo.length){const p=Math.min(Math.floor(an/3*Xo.length),Xo.length);for(;Ii.length<p;){const f=Ii.length,d=Xo[f],g=qu(),x=new yd(new F(0,g,0),new F(d.x,0,d.z)),h=new $({color:z.laserPink,transparent:!0,opacity:0,blending:Jt,depthWrite:!1}),m=new P(new gn(x,8,.06,4,!1),h);ot.add(m);const M=new $({color:z.laserGlow,transparent:!0,opacity:0,blending:Jt,depthWrite:!1}),v=new P(new gn(x,8,.18,4,!1),M);ot.add(v),Ii.push({tube:m,glow:v,mat:h,glowMat:M,timer:0})}}const l=an>=13?Math.min((an-13)/30,1):0,u=l*l*(3-2*l);for(let p=0;p<Ii.length;p++){const f=Ii[p];f.timer+=i;const d=Math.min(f.timer/.5,1)*(1-u),g=1-u,x=Math.sin(t*3+p*.5)*.5*g+.5;f.mat.opacity=d*(.6+x*.4),f.glowMat.opacity=d*(.2+x*.15)}if(l>=1&&Ii.length>0){for(let p=0;p<Ii.length;p++){const f=Ii[p];ot.remove(f.tube),f.tube.geometry.dispose(),f.mat.dispose(),ot.remove(f.glow),f.glow.geometry.dispose(),f.glowMat.dispose()}Ii.length=0}an>=13&&!Np&&(Gb(),Np=!0);let c=0;if(an>=3&&an<6?c=(an-3)/3:an>=6&&an<10?(c=1,zp||(iT(),zp=!0,console.log("✦ Trees + ground transformed"))):an>=10&&an<13&&(c=1-(an-10)/3),er&&(er.style.opacity=c),an>=13&&_e&&!_e.mesh.visible&&(_e.mesh.visible=!0,_e.haze.visible=!0,_e.mesh.scale.setScalar(1.2),_e.haze.scale.setScalar(1.8)),an>=13&&_e&&_e.mesh.visible){const p=Math.sin(t*1.5)*.5+.5;_e.mat.opacity=.85+p*.15,_e.hazeMat.opacity=.3+p*.2}}}function eT(){if(!kn)return;const i=kn.children;for(let t=0;t<i.length;t++){const e=i[t];if(!e.visible&&e.isMesh){let n=!1;for(let s=0;s<oo.length;s++){const o=oo[s].meshes;for(let r=0;r<o.length;r++)if(o[r]===e){n=!0;break}if(n)break}n||(e.visible=!0)}}}function qu(){return bs+Ce+3}function nT(){er||(er=document.createElement("div"),er.style.cssText="position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;opacity:0;pointer-events:none;z-index:9999;",document.body.appendChild(er))}function iT(){const i=[{color:6692928,glow:16724889,core:16737996},{color:4855888,glow:13386973,core:15628287},{color:5577264,glow:16729241,core:16746700},{color:3807328,glow:11158766,core:13400063},{color:5251136,glow:15619515,core:16751069}];for(let t=0;t<Of.length;t++){const e=Of[t],n=i[t%i.length];e.trunkMat&&(e.trunkMat.color.set(6964528),e.trunkMat.emissive.set(13404228),e.trunkMat.emissiveIntensity=1.2),e.canopyMat&&(e.canopyMat.color.set(n.core),e.canopyMat.emissive.set(n.glow),e.canopyMat.emissiveIntensity=3.5),e.glowMat&&(e.glowMat.color.set(n.glow),e.glowMat.emissive.set(n.glow),e.glowMat.emissiveIntensity=1.2),e.detailMat&&(e.detailMat.color.set(n.color),e.detailMat.emissive.set(n.glow),e.detailMat.emissiveIntensity=1.5)}if(Z2(1),qo&&qo.material){qo.material.emissive.set(5905018),qo.material.emissiveIntensity=1;const t=qo.geometry.attributes.color;if(t){const e=t.array;for(let n=0;n<e.length;n+=3){const s=e[n],o=e[n+1],r=e[n+2];e[n]=s*.45+r*.25+o*.1,e[n+1]=o*.1,e[n+2]=r*.6+o*.45+s*.1}t.needsUpdate=!0}}}const sT=600;let Cc=.25,ve=1,Fp=.85,Xe="NIGHT",la=null,ua=null,Bf=null,ha=null,Zc=null;const Op=[{label:"DUSK",sky:new it(923685),fog:new it(791584),fogDensity:.009,moonInt:.6,moonCol:new it(14527112),moonElev:15,ambSky:new it(4469589),ambGnd:new it(2238488),ambInt:.6,stars:.4,bio:.7,plRange:16,plInt:.5},{label:"NIGHT",sky:new it(330264),fog:new it(528408),fogDensity:.01,moonInt:1,moonCol:new it(12307694),moonElev:55,ambSky:new it(3359846),ambGnd:new it(1587232),ambInt:.7,stars:.85,bio:1,plRange:18,plInt:.55},{label:"DEEP_NIGHT",sky:new it(198160),fog:new it(397332),fogDensity:.012,moonInt:.55,moonCol:new it(8952251),moonElev:75,ambSky:new it(1712708),ambGnd:new it(1188888),ambInt:.5,stars:1,bio:1.5,plRange:22,plInt:.7},{label:"DAWN",sky:new it(1187888),fog:new it(923688),fogDensity:.011,moonInt:.5,moonCol:new it(13417386),moonElev:20,ambSky:new it(3354197),ambGnd:new it(1843224),ambInt:.55,stars:.35,bio:.65,plRange:17,plInt:.5}],ys=new it,Bp=new it;function oT(i){la=i.scene,ua=i.moon,Bf=i.moon2,ha=i.hemiLight,Zc=i.playerLight}function rT(i){if(!la)return;Cc=(Cc+i/sT)%1;const t=Cc*4,e=Math.floor(t)%4,n=(e+1)%4,s=t-Math.floor(t),o=.5-.5*Math.cos(s*Math.PI),r=Op[e],a=Op[n];Xe=o<.5?r.label:a.label;const l=(u,c)=>u+(c-u)*o;if(ys.copy(r.sky).lerp(a.sky,o),la.background.copy(ys),ys.copy(r.fog).lerp(a.fog,o),la.fog.color.copy(ys),la.fog.density=l(r.fogDensity,a.fogDensity),ua){ys.copy(r.moonCol).lerp(a.moonCol,o),ua.color.copy(ys),ua.intensity=l(r.moonInt,a.moonInt);const u=Cc*Math.PI*2,c=l(r.moonElev,a.moonElev)*Math.PI/180,p=60;ua.position.set(Math.cos(u)*Math.cos(c)*p,Math.sin(c)*p,Math.sin(u)*Math.cos(c)*p)}if(Bf){const u=l(r.moonInt,a.moonInt)/.85;Bf.intensity=.3*u}ha&&(ys.copy(r.ambSky).lerp(a.ambSky,o),Bp.copy(r.ambGnd).lerp(a.ambGnd,o),ha.color.copy(ys),ha.groundColor.copy(Bp),ha.intensity=l(r.ambInt,a.ambInt)),Zc&&(Zc.distance=l(r.plRange,a.plRange),Zc.intensity=l(r.plInt,a.plInt)),Fp=l(r.stars,a.stars),iS(Fp),ve=l(r.bio,a.bio)}let ro=0,ir=0,fs=0,gr="CLEAR",ps=!1,Oi=0;const $c={CLEAR:{fogMult:1,windBase:.3,rainRate:0,skyDarken:0,mistCount:0,duration:[90,180]},MISTY:{fogMult:1.8,windBase:.2,rainRate:0,skyDarken:.05,mistCount:6,duration:[60,150]},LIGHT_RAIN:{fogMult:1.3,windBase:.6,rainRate:.3,skyDarken:.1,mistCount:2,duration:[60,120]},HEAVY_RAIN:{fogMult:1.6,windBase:1,rainRate:.8,skyDarken:.2,mistCount:3,duration:[45,100]},FOG_BANK:{fogMult:2.5,windBase:.15,rainRate:0,skyDarken:.1,mistCount:8,duration:[60,120]},LUMINOUS_STORM:{fogMult:1.4,windBase:1.5,rainRate:.6,skyDarken:.15,mistCount:2,duration:[40,90]}},aT={CLEAR:{MISTY:.4,LIGHT_RAIN:.3,FOG_BANK:.2,LUMINOUS_STORM:.1},MISTY:{CLEAR:.3,LIGHT_RAIN:.3,FOG_BANK:.3,HEAVY_RAIN:.1},LIGHT_RAIN:{CLEAR:.2,MISTY:.2,HEAVY_RAIN:.4,LUMINOUS_STORM:.2},HEAVY_RAIN:{LIGHT_RAIN:.4,LUMINOUS_STORM:.3,MISTY:.2,CLEAR:.1},FOG_BANK:{MISTY:.4,CLEAR:.3,LIGHT_RAIN:.2,LUMINOUS_STORM:.1},LUMINOUS_STORM:{HEAVY_RAIN:.3,MISTY:.3,CLEAR:.2,LIGHT_RAIN:.2}};let Yo="CLEAR",ko=null,jc=0,Pc=0,Yu=0,Ic=!1,Lc=0,Zu=Math.random()*Math.PI*2,$u=0,ju=0;const Gf=[],cT=8;let Gp=!1,Ku=0,Dc=1,Kc=0,Uc=0,Ju=0;function lT(){const i=aT[Yo],t=Object.entries(i);let e=0;for(const[,s]of t)e+=s;let n=Math.random()*e;for(const[s,o]of t)if(n-=o,n<=0)return s;return t[0][0]}function uT(){if(Gp)return;const i=document.createElement("canvas");i.width=128,i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(64,32,0,64,32,64);e.addColorStop(0,"rgba(255,255,255,0.5)"),e.addColorStop(.3,"rgba(255,255,255,0.25)"),e.addColorStop(.7,"rgba(255,255,255,0.06)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,64);const n=new Oa(i),s=new he(40,14);for(let o=0;o<cT;o++){const r=new $({map:n,color:5596791,transparent:!0,opacity:0,side:Pt,depthWrite:!1}),a=new P(s,r);a.visible=!1,ot.add(a),Gf.push({mesh:a,mat:r,active:!1,drift:Math.random()*Math.PI*2,speed:.3+Math.random()*.4,baseY:.8+Math.random()*2,wobble:Math.random()*Math.PI*2})}Gp=!0}function hT(){uT();const i=$c.CLEAR.duration;jc=i[0]+Math.random()*(i[1]-i[0])}function fT(i,t,e){if(Ic)if(Pc-=i,Pc<=0){Yo=ko,ko=null,Ic=!1;const o=$c[Yo].duration;jc=o[0]+Math.random()*(o[1]-o[0]),Lc=0}else Lc=1-Pc/Yu;else jc-=i,jc<=0&&(ko=lT(),Ic=!0,Yu=30+Math.random()*60,Pc=Yu,Lc=0);const n=$c[Yo];if(Ic&&ko){const o=$c[ko],r=.5-.5*Math.cos(Lc*Math.PI),a=(l,u)=>l+(u-l)*r;Dc=a(n.fogMult,o.fogMult),Kc=a(n.rainRate,o.rainRate),Uc=a(n.skyDarken,o.skyDarken),Ju=a(n.mistCount,o.mistCount),fs=a(n.windBase,o.windBase),gr=r<.5?Yo:ko}else Dc=n.fogMult,Kc=n.rainRate,Uc=n.skyDarken,Ju=n.mistCount,fs=n.windBase,gr=Yo;ps=gr==="LUMINOUS_STORM",Zu+=(Math.sin(t*.05)*.2+Math.sin(t*.13)*.1)*i,$u-=i,$u<=0&&($u=2+Math.random()*6,ju=Math.random()*.8),ju*=Math.pow(.3,i);const s=fs+ju;if(ro=Math.cos(Zu)*s,ir=Math.sin(Zu)*s,ot.fog.density*=Dc,Uc>.001){const o=ot.background,r=1-Uc;o.r*=r,o.g*=r,o.b*=r}if(e){const o=Math.round(Ju);for(let r=0;r<Gf.length;r++){const a=Gf[r];if(r<o){a.active||(a.active=!0,a.mesh.visible=!0,a.drift=Math.random()*Math.PI*2);const l=10+Math.sin(t*.3+a.wobble)*8,u=a.drift+t*a.speed*.05;a.mesh.position.set(e.x+Math.cos(u)*l,a.baseY+Math.sin(t*.4+a.wobble)*.5,e.z+Math.sin(u)*l),a.mesh.rotation.y=u+Math.PI/2,a.drift+=ro*i*.02;const c=.03+Dc*.012;a.mat.opacity+=(c-a.mat.opacity)*i*2}else a.active&&(a.mat.opacity-=i*.5,a.mat.opacity<=.005&&(a.active=!1,a.mesh.visible=!1,a.mat.opacity=0))}}return ps&&(Ku-=i,Ku<=0&&(Ku=1+Math.random()*4,Oi=1)),Oi*=Math.pow(.02,i),Oi<.01&&(Oi=0),Kc}function _a(){return Kc}const Pi=300,Qr=new Float32Array(Pi),ta=new Float32Array(Pi),ea=new Float32Array(Pi),Qu=new Float32Array(Pi),th=new Float32Array(Pi),eh=new Float32Array(Pi),Js=new Float32Array(Pi),ni=new Float32Array(Pi*6);let ao=null,kf=null;function dT(){const i=new Ae;i.setAttribute("position",new Ne(ni,3)),kf=new xd({color:8952251,transparent:!0,opacity:.3,depthWrite:!1}),ao=new Av(i,kf),ao.frustumCulled=!1,ao.visible=!1,ot.add(ao);for(let t=0;t<Pi;t++)Js[t]=0,Dg(t)}function Dg(i){const t=i*6;ni[t]=0,ni[t+1]=-100,ni[t+2]=0,ni[t+3]=0,ni[t+4]=-100,ni[t+5]=0}function pT(i,t,e,n,s){if(!ao)return;const o=e>.01;if(ao.visible=o,!o)return;kf.opacity=Math.min(.15+e*.35,.5);const r=Math.floor(e*12*i*60);for(let l=0;l<r;l++){let u=-1;for(let f=0;f<Pi;f++)if(Js[f]<=0){u=f;break}if(u===-1)break;const c=Math.random()*Math.PI*2,p=Math.random()*30;Qr[u]=t.x+Math.cos(c)*p,ta[u]=12+Math.random()*10,ea[u]=t.z+Math.sin(c)*p,Qu[u]=n*2+(Math.random()-.5)*.3,th[u]=-12-Math.random()*8,eh[u]=s*2+(Math.random()-.5)*.3,Js[u]=2+Math.random()*1.5}const a=.06;for(let l=0;l<Pi;l++){if(Js[l]<=0)continue;if(Js[l]-=i,Js[l]<=0||ta[l]<Dt(Qr[l],ea[l])+.1){Js[l]=0,Dg(l);continue}Qr[l]+=Qu[l]*i,ta[l]+=th[l]*i,ea[l]+=eh[l]*i;const u=l*6;ni[u]=Qr[l],ni[u+1]=ta[l],ni[u+2]=ea[l],ni[u+3]=Qr[l]+Qu[l]*a,ni[u+4]=ta[l]+th[l]*a,ni[u+5]=ea[l]+eh[l]*a}ao.geometry.attributes.position.needsUpdate=!0}let me=null,ai=null,Fr=null;const kp=[0,2,4,7,9],mT=261.63,Hf=[0,-3,5,4],gT=16;let Jc=0,lo=0,Qc=0,tl=2,el=10,nl=5,il=0,fa=[],da=[],Ug=!1;function xT(i,t,e){me=i,Fr=e,ai=me.createGain(),ai.gain.value=.6,ai.connect(t),Jc=0,lo=Hf[0],Qc=0,il=0,tl=2,el=8,nl=5,fa=[],da=[],Ug=!0}function xr(i,t){const e=kp.length,n=Math.floor(i/e)+(t||0),s=(i%e+e)%e,o=kp[s];return mT*Math.pow(2,n+o/12)}function vT(i){if(!me||!ai)return;const t=me.currentTime;for(let a=0;a<da.length;a++)da[a].gain.linearRampToValueAtTime(.001,t+4);for(let a=0;a<fa.length;a++)fa[a].stop(t+4.5);fa=[],da=[];const e=[xr(i,-2),xr(i+2,-2),xr(i,-1)],n=me.createGain();n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(.06,t+4);const s=me.createBiquadFilter();s.type="lowpass",s.frequency.value=200;const o=me.createOscillator();o.type="sine",o.frequency.value=.05;const r=me.createGain();r.gain.value=50,o.connect(r).connect(s.frequency),o.start(t),o.stop(t+35);for(let a=0;a<e.length;a++){const l=me.createOscillator();l.type=a===0?"triangle":"sine",l.frequency.value=e[a]*(1+(Math.random()*.004-.002)),l.connect(s),l.start(t),l.stop(t+35),fa.push(l)}s.connect(n),Fr(n,ai,.8),da.push(n)}function MT(i,t,e){if(!me||!ai)return;const n=.15,s=me.currentTime+(t||0),o=me.createOscillator();o.type="sine";const r=me.createGain();r.gain.setValueAtTime(0,s),r.gain.linearRampToValueAtTime(n,s+.02),r.gain.exponentialRampToValueAtTime(n*.3,s+.5),r.gain.exponentialRampToValueAtTime(.001,s+3),o.connect(r),Fr(r,ai,.6),o.start(s),o.stop(s+3.5)}function _T(i,t,e){if(!me||!ai)return;const n=me.currentTime+0,s=t||6,o=xr(i,1),r=me.createOscillator();r.type="triangle";const a=me.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.08,n+1.5),a.gain.setValueAtTime(.08,n+s-1.5),a.gain.linearRampToValueAtTime(.001,n+s);const l=me.createBiquadFilter();l.type="lowpass",l.frequency.value=o*1.5;const u=me.createOscillator();u.frequency.value=4;const c=me.createGain();c.gain.value=o*.01,u.connect(c).connect(r.frequency),r.connect(l).connect(a),Fr(a,ai,.9),u.start(n),r.start(n),u.stop(n+s+.1),r.stop(n+s+.1)}function yT(i,t){if(!me||!ai)return;const e=me.currentTime+(t||0),n=xr(i,2),s=me.createOscillator(),o=me.createOscillator();s.type="sine",o.type="sine",s.frequency.value=n,o.frequency.value=n*1.005;const r=me.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.04,e+.01),r.gain.exponentialRampToValueAtTime(.001,e+4),s.connect(r),o.connect(r),Fr(r,ai,.8),s.start(e),o.start(e),s.stop(e+4.5),o.stop(e+4.5)}function wT(i){if(!me||!ai)return;const t=me.currentTime,e=xr(i,-3),n=me.createOscillator();n.type="sine",n.frequency.value=e;const s=me.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(.15,t+.5),s.gain.exponentialRampToValueAtTime(.001,t+3),n.connect(s),Fr(s,ai,.3),n.start(t),n.stop(t+3.5)}function ST(){const i=3+Math.floor(Math.random()*3);let t=lo+(Math.random()<.5?0:2);for(let e=0;e<i;e++)MT(t,e*.3),t+=Math.random()<.7?1:2;return 4+Math.random()*6}function bT(){const i=6+Math.random()*4,t=[0,1,2,4],e=lo+t[Math.floor(Math.random()*t.length)];return _T(e,i),i+8+Math.random()*10}function TT(){const i=1+Math.floor(Math.random()*3);for(let t=0;t<i;t++){const e=lo+Math.floor(Math.random()*5);yT(e,t*.5+Math.random()*.2)}return 8+Math.random()*12}function ET(i,t,e,n){!Ug||!me||(Qc-=i,Qc<=0&&(lo=Hf[Jc],vT(lo),Jc=(Jc+1)%Hf.length,Qc=gT),il-=i,il<=0&&(wT(lo),il=8),tl-=i,tl<=0&&(tl=ST()),el-=i,el<=0&&(el=bT()),nl-=i,nl<=0&&(nl=TT()))}let K=null,fe=null,Vf=null,qe=!1,on=!1,zl=null,nh=null,ya=null,AT=null,zg=null,RT=null,CT=null,Ng=null,PT=null,Fg=null,Og=null,IT=null,Bg=null,Gg=null,ih=0,LT=null,kg=null,DT=null;const gi={jelly:0,puff:0,deer:0,moth:0,puffSing:0};function sh(i,t){const e=K.sampleRate*t,n=K.createBuffer(1,e,K.sampleRate),s=n.getChannelData(0);if(i==="white")for(let r=0;r<e;r++)s[r]=Math.random()*2-1;else if(i==="brown"){let r=0;for(let a=0;a<e;a++){const l=Math.random()*2-1;s[a]=(r+.02*l)/1.02,r=s[a],s[a]*=1.8}}const o=Math.min(Math.floor(K.sampleRate*.5),e>>2);for(let r=0;r<o;r++){const a=r/o,l=e-o+r;s[l]=s[l]*(1-a)+s[r]*a}return n}function na(i,t,e,n){const s=K.createBufferSource();s.buffer=i,s.loop=!0;const o=K.createGain();o.gain.value=t;const r=K.createBiquadFilter();r.type="lowpass",r.frequency.value=e,r.Q.value=.5;const a=K.createBiquadFilter();return a.type="highpass",a.frequency.value=n||40,a.Q.value=.5,s.connect(a).connect(r).connect(o).connect(fe),s.start(),{node:s,gain:o,filter:r}}function UT(){const i=K.createDelay(1);i.delayTime.value=.55;const t=K.createDelay(1);t.delayTime.value=.79;const e=K.createGain();e.gain.value=.35;const n=K.createGain();n.gain.value=.28;const s=K.createBiquadFilter();s.type="lowpass",s.frequency.value=2200;const o=K.createBiquadFilter();o.type="lowpass",o.frequency.value=1800;const r=K.createBiquadFilter();r.type="highpass",r.frequency.value=120,r.Q.value=.5;const a=K.createBiquadFilter();a.type="highpass",a.frequency.value=120,a.Q.value=.5;const l=K.createGain();l.gain.value=.5,i.connect(s).connect(r).connect(e).connect(i),t.connect(o).connect(a).connect(n).connect(t),i.connect(l),t.connect(l),l.connect(fe);const u=K.createGain();u.gain.value=1,u.connect(i),u.connect(t),Vf=u}function Yn(i,t,e){if(i.connect(t),Vf&&e>0){const n=K.createGain();n.gain.value=e,i.connect(n).connect(Vf)}}function zT(){const i=()=>{if(!qe){try{K=new(window.AudioContext||window.webkitAudioContext),fe=K.createGain(),fe.gain.value=.42,fe.connect(K.destination),zl=sh("brown",16),nh=sh("brown",11),ya=sh("white",9),UT();const t=na(zl,.05,200,50);AT=t.node,zg=t.gain,RT=t.filter;const e=na(nh,.03,350,80);CT=e.node,Ng=e.gain;const n=na(ya,0,400,60);PT=n.node,Fg=n.gain,Og=n.filter;const s=na(ya,0,2e3,80);IT=s.node,Bg=s.gain,Gg=s.filter;const o=na(nh,0,600,60);LT=o.node,kg=o.gain,DT=o.filter,qe=!0}catch(t){console.warn("Audio init failed:",t)}document.removeEventListener("click",i),document.removeEventListener("keydown",i),document.removeEventListener("touchstart",i)}};document.addEventListener("click",i),document.addEventListener("keydown",i),document.addEventListener("touchstart",i)}function NT(i,t,e,n,s,o,r,a){if(!qe||on)return;const l=K.currentTime,u=o==="DEEP_NIGHT"?.07:o==="DAWN"?.03:.05;zg.gain.linearRampToValueAtTime(u,l+.1),Ng.gain.linearRampToValueAtTime(u*.6,l+.1);const c=Math.min(t*.12,.18),p=200+t*600;Fg.gain.linearRampToValueAtTime(c,l+.1),Og.frequency.linearRampToValueAtTime(p,l+.1);const f=e*.15,d=1200+e*2e3;Bg.gain.linearRampToValueAtTime(f,l+.1),Gg.frequency.linearRampToValueAtTime(d,l+.1),s>.5&&ih<=0&&(FT(),ih=2+Math.random()*3),ih-=i;let g=1/0;if(r&&a)for(let m=0;m<a.length;m++){const M=a[m].x-r.x,v=a[m].z-r.z,y=M*M+v*v;y<g&&(g=y)}const h=(g<225?1-Math.sqrt(g)/15:0)*.08;kg.gain.linearRampToValueAtTime(h,l+.1),gi.jelly-=i,gi.puff-=i,gi.deer-=i,gi.moth-=i,gi.puffSing-=i}function FT(){if(!K)return;const i=K.currentTime,t=K.createOscillator(),e=K.createGain(),n=K.createBiquadFilter();t.type="sawtooth",t.frequency.value=50+Math.random()*25,n.type="lowpass",n.frequency.value=120,n.Q.value=1,e.gain.setValueAtTime(.2,i),e.gain.exponentialRampToValueAtTime(.001,i+.8+Math.random()*.5),t.connect(n).connect(e).connect(fe),t.start(),t.stop(i+1.5);const s=K.createBufferSource();s.buffer=zl;const o=K.createGain(),r=K.createBiquadFilter();r.type="lowpass",r.frequency.value=120;const a=K.createBiquadFilter();a.type="highpass",a.frequency.value=45,a.Q.value=.5,o.gain.setValueAtTime(.15,i),o.gain.exponentialRampToValueAtTime(.001,i+1.2),s.connect(a).connect(r).connect(o).connect(fe),s.start(),s.stop(i+1.5)}function Ir(i,t,e){if(!qe||on||gi[i]>0)return;const n=t.x-e.x,s=t.z-e.z,o=n*n+s*s;if(o>900)return;const r=Math.sqrt(o),a=Math.max(0,1-r/30)*.1,l=Math.max(-1,Math.min(1,n/Math.max(r,1))),u=K.createStereoPanner();u.pan.value=l;const c=K.currentTime;switch(i){case"jelly":{const p=360+Math.random()*60,f=K.createOscillator(),d=K.createOscillator();f.type="sine",d.type="sine",f.frequency.setValueAtTime(p,c),d.frequency.setValueAtTime(p+3,c),f.frequency.linearRampToValueAtTime(p-40,c+1.2),d.frequency.linearRampToValueAtTime(p-37,c+1.2);const g=K.createOscillator(),x=K.createGain();g.frequency.value=4,x.gain.value=5,g.connect(x),x.connect(f.frequency),x.connect(d.frequency);const h=K.createGain();h.gain.setValueAtTime(0,c),h.gain.linearRampToValueAtTime(a,c+.15),h.gain.setValueAtTime(a,c+.6),h.gain.exponentialRampToValueAtTime(.001,c+1.4),f.connect(h),d.connect(h),h.connect(u),Yn(u,fe,.4),g.start(c),f.start(c),d.start(c),g.stop(c+1.5),f.stop(c+1.5),d.stop(c+1.5),gi.jelly=4+Math.random()*5;break}case"puff":{const p=500+Math.random()*100,f=[p,p*1.2,p*1.5];for(let d=0;d<f.length;d++){const g=K.createOscillator();g.type="sine",g.frequency.value=f[d];const x=K.createGain(),h=c+d*.07;x.gain.setValueAtTime(0,h),x.gain.linearRampToValueAtTime(a*.5,h+.02),x.gain.exponentialRampToValueAtTime(.001,h+.15),g.connect(x).connect(u),g.start(h),g.stop(h+.18)}Yn(u,fe,.3),gi.puff=8+Math.random()*10;break}case"deer":{const p=100+Math.random()*30,f=K.createOscillator(),d=K.createOscillator();f.type="triangle",d.type="triangle",f.frequency.setValueAtTime(p,c),d.frequency.setValueAtTime(p+2,c),f.frequency.linearRampToValueAtTime(p-15,c+.5),d.frequency.linearRampToValueAtTime(p-13,c+.5);const g=K.createBiquadFilter();g.type="lowpass",g.frequency.value=250,g.Q.value=.5;const x=K.createGain();x.gain.setValueAtTime(0,c),x.gain.linearRampToValueAtTime(a*.7,c+.12),x.gain.setValueAtTime(a*.7,c+.3),x.gain.exponentialRampToValueAtTime(.001,c+.6),f.connect(g),d.connect(g),g.connect(x).connect(u),Yn(u,fe,.3),f.start(c),d.start(c),f.stop(c+.7),d.stop(c+.7),gi.deer=5+Math.random()*6;break}case"moth":{const p=K.createOscillator();p.type="sine",p.frequency.setValueAtTime(200+Math.random()*80,c);const f=K.createOscillator(),d=K.createGain();f.frequency.value=8+Math.random()*4,d.gain.value=12,f.connect(d).connect(p.frequency);const g=K.createGain();g.gain.setValueAtTime(0,c),g.gain.linearRampToValueAtTime(a*.2,c+.05),g.gain.exponentialRampToValueAtTime(.001,c+.25),p.connect(g).connect(u),Yn(u,fe,.2),f.start(c),p.start(c),f.stop(c+.3),p.stop(c+.3),gi.moth=4+Math.random()*5;break}}}let Nl=0;function OT(i,t){if(!qe||on||Nl>0)return;const e=K.currentTime;if(t){const n=K.createBufferSource();n.buffer=ya;const s=K.createGain(),o=K.createBiquadFilter();o.type="bandpass",o.frequency.value=2e3,o.Q.value=.5,s.gain.setValueAtTime(.05,e),s.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(o).connect(s).connect(fe),n.start(),n.stop(e+.15)}else{const n=K.createOscillator();n.type="sine",n.frequency.value=80+Math.random()*40;const s=K.createGain();s.gain.setValueAtTime(.03,e),s.gain.exponentialRampToValueAtTime(.001,e+.08),n.connect(s).connect(fe),n.start(),n.stop(e+.1)}Nl=i?.22:.35}function BT(){if(!qe||on)return;const i=K.currentTime,t=K.createOscillator();t.type="sine",t.frequency.setValueAtTime(150,i),t.frequency.exponentialRampToValueAtTime(300,i+.1);const e=K.createGain();e.gain.setValueAtTime(.03,i),e.gain.exponentialRampToValueAtTime(.001,i+.15),t.connect(e).connect(fe),t.start(),t.stop(i+.2)}function GT(i){if(!qe||on)return;const t=K.currentTime,e=K.createBufferSource();e.buffer=zl;const n=K.createGain(),s=K.createBiquadFilter();s.type="lowpass",s.frequency.value=200;const o=K.createBiquadFilter();o.type="highpass",o.frequency.value=50,o.Q.value=.5,n.gain.setValueAtTime(i*.05,t),n.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(o).connect(s).connect(n).connect(fe),e.start(),e.stop(t+.25)}function kT(i){Nl>0&&(Nl-=i)}function HT(i,t){if(!qe||on)return;const e=i.x-t.x,n=i.z-t.z,s=e*e+n*n;if(s>400)return;const o=Math.max(0,1-Math.sqrt(s)/20)*.06,r=K.currentTime,a=K.createOscillator();a.type="sine",a.frequency.setValueAtTime(600+Math.random()*300,r),a.frequency.exponentialRampToValueAtTime(200,r+.1);const l=K.createGain();l.gain.setValueAtTime(o,r),l.gain.exponentialRampToValueAtTime(.001,r+.12),a.connect(l).connect(fe),a.start(),a.stop(r+.15)}function VT(){if(!qe||on)return;const i=K.currentTime,t=[440,554,659,880];for(let e=0;e<t.length;e++){const n=K.createOscillator();n.type="sine",n.frequency.setValueAtTime(t[e],i+e*.12);const s=K.createGain();s.gain.setValueAtTime(0,i),s.gain.linearRampToValueAtTime(.05,i+e*.12+.05),s.gain.exponentialRampToValueAtTime(.001,i+e*.12+.7),n.connect(s),Yn(s,fe,.5),n.start(i+e*.12),n.stop(i+e*.12+.8)}}function WT(){if(!qe||on)return;const i=K.currentTime,t=K.createOscillator();t.type="sine",t.frequency.setValueAtTime(300,i),t.frequency.exponentialRampToValueAtTime(1200,i+3);const e=K.createOscillator(),n=K.createGain();e.frequency.setValueAtTime(6,i),e.frequency.linearRampToValueAtTime(12,i+3),n.gain.value=20,e.connect(n).connect(t.frequency);const s=K.createOscillator();s.type="sine",s.frequency.setValueAtTime(600,i),s.frequency.exponentialRampToValueAtTime(2400,i+3);const o=K.createGain();o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(.04,i+.2),o.gain.setValueAtTime(.04,i+2),o.gain.exponentialRampToValueAtTime(.001,i+3.5),t.connect(o),s.connect(o),Yn(o,fe,.6),e.start(i),t.start(i),s.start(i),e.stop(i+4),t.stop(i+4),s.stop(i+4)}function XT(){if(!qe||on)return;const i=K.currentTime,t=K.createBufferSource();t.buffer=ya;const e=K.createBiquadFilter();e.type="bandpass",e.frequency.setValueAtTime(3e3,i),e.frequency.exponentialRampToValueAtTime(500,i+.3),e.Q.value=2;const n=K.createGain();n.gain.setValueAtTime(.08,i),n.gain.exponentialRampToValueAtTime(.001,i+.3),t.connect(e).connect(n).connect(fe);const s=K.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(2e3,i),s.frequency.exponentialRampToValueAtTime(100,i+.15);const o=K.createBiquadFilter();o.type="lowpass",o.frequency.value=4e3;const r=K.createGain();r.gain.setValueAtTime(.06,i),r.gain.exponentialRampToValueAtTime(.001,i+.2),s.connect(o).connect(r),Yn(r,fe,.3);const a=K.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(80,i+.15),a.frequency.linearRampToValueAtTime(55,i+2);const l=K.createBiquadFilter();l.type="bandpass",l.frequency.value=180,l.Q.value=3;const u=K.createGain();u.gain.setValueAtTime(0,i),u.gain.linearRampToValueAtTime(.03,i+.2),u.gain.exponentialRampToValueAtTime(.001,i+2),a.connect(l).connect(u).connect(fe),t.start(i),t.stop(i+.4),s.start(i),s.stop(i+.25),a.start(i+.1),a.stop(i+2.2)}const vr=[];function qT(i,t){if(!qe||on)return;const e=K.currentTime,n=K.createOscillator();n.type="sawtooth",n.frequency.value=55+Math.random()*10;const s=K.createOscillator(),o=K.createGain();s.type="square",s.frequency.value=120+Math.random()*60,o.gain.value=15,s.connect(o).connect(n.frequency);const r=K.createBiquadFilter();r.type="bandpass",r.frequency.value=200,r.Q.value=3;const a=K.createGain();a.gain.value=0;const l=K.createStereoPanner();n.connect(r).connect(a).connect(l).connect(fe),s.start(e),n.start(e),vr.push({osc:n,mod:s,gain:a,panner:l,filter:r,x:i,z:t})}function YT(i){if(!qe||!K)return;const t=K.currentTime;for(let e=0;e<vr.length;e++){const n=vr[e],s=n.x-i.x,o=n.z-i.z,r=s*s+o*o,a=Math.sqrt(r),l=r<625?Math.max(0,1-a/25)*.04:0;n.gain.gain.linearRampToValueAtTime(l,t+.1);const u=Math.max(-1,Math.min(1,s/Math.max(a,1)));n.panner.pan.linearRampToValueAtTime(u,t+.1),n.filter.frequency.value=180+Math.sin(t*.5+e)*40}}function ZT(){if(!K)return;const i=K.currentTime;for(let t=0;t<vr.length;t++){const e=vr[t];e.gain.gain.linearRampToValueAtTime(0,i+.5),e.osc.stop(i+.6),e.mod.stop(i+.6)}vr.length=0}const Hp=[0,2,4,7,9],$T=261.63;function Wf(i,t){const e=Hp.length,n=Math.floor(i/e)+(t||0),s=(i%e+e)%e;return $T*Math.pow(2,n+Hp[s]/12)}function Vp(i,t,e,n){if(!qe||on||gi.puffSing>0)return;const s=i.x-t.x,o=i.z-t.z,r=s*s+o*o;if(r>900)return;const a=Math.sqrt(r),l=Math.max(0,1-a/30)*.06,u=Math.max(-1,Math.min(1,s/Math.max(a,1))),c=K.createStereoPanner();c.pan.value=u;const p=K.currentTime;let f,d,g,x;if(e){f=6+Math.floor(Math.random()*3),d=.15,g=2,x=[];for(let v=0;v<f;v++)v<5?x.push(v):x.push(3+Math.floor(Math.random()*2))}else{f=3+Math.floor(Math.random()*2),d=.2,g=1,x=[];for(let v=0;v<f;v++)x.push(Math.max(0,4-v*Math.floor(5/f)))}const h=K.createOscillator(),m=K.createGain();h.type="sine",h.frequency.value=6+Math.random()*4,m.gain.value=25+Math.random()*10,h.connect(m);const M=f*d+.15;for(let v=0;v<f;v++){const y=Wf(x[v],g),T=K.createOscillator();T.type="sine",T.frequency.value=y,m.connect(T.frequency);const E=K.createGain(),b=p+v*d;E.gain.setValueAtTime(0,b),E.gain.linearRampToValueAtTime(l,b+.03),E.gain.setValueAtTime(l,b+d-.06),E.gain.exponentialRampToValueAtTime(.001,b+d+.06),T.connect(E).connect(c),T.start(b),T.stop(b+d+.08)}if(n>.1){const v=l*n*.4;for(let y=0;y<Math.min(f,5);y++){const T=Wf(x[y],g)*1.5,E=K.createOscillator();E.type="sine",E.frequency.value=T,m.connect(E.frequency);const b=K.createGain(),A=p+y*d;b.gain.setValueAtTime(0,A),b.gain.linearRampToValueAtTime(v,A+.04),b.gain.exponentialRampToValueAtTime(.001,A+d+.04),E.connect(b).connect(c),E.start(A),E.stop(A+d+.06)}}Yn(c,fe,.4),h.start(p),h.stop(p+M+.2),gi.puffSing=n>.3?2+Math.random()*2:4+Math.random()*4}function jT(i,t){if(!qe||on)return;const e=i.x-t.x,n=i.z-t.z,s=e*e+n*n;if(s>900)return;const o=Math.sqrt(s),r=Math.max(-1,Math.min(1,e/Math.max(o,1))),a=K.createStereoPanner();a.pan.value=r;const l=K.currentTime,u=[0,1,2,3,4],c=.18,p=K.createOscillator(),f=K.createGain();p.type="sine",p.frequency.value=8,f.gain.setValueAtTime(20,l),f.gain.linearRampToValueAtTime(50,l+u.length*c),p.connect(f);for(let d=0;d<u.length;d++){const g=Wf(u[d],2),x=K.createOscillator();x.type="sine",x.frequency.value=g,f.connect(x.frequency);const h=K.createGain(),m=l+d*c,M=d===u.length-1,v=.07;h.gain.setValueAtTime(0,m),h.gain.linearRampToValueAtTime(v,m+.02),M?(h.gain.setValueAtTime(v,m+.5),h.gain.exponentialRampToValueAtTime(.001,m+1.2),x.stop(m+1.3)):(h.gain.exponentialRampToValueAtTime(.001,m+c+.04),x.stop(m+c+.06)),x.connect(h).connect(a),x.start(m);const y=K.createOscillator();y.type="sine",y.frequency.value=g*2,f.connect(y.frequency);const T=K.createGain();T.gain.setValueAtTime(0,m),T.gain.linearRampToValueAtTime(v*.3,m+.03),T.gain.exponentialRampToValueAtTime(.001,m+(M?1:c)+.04),y.connect(T).connect(a),y.start(m),y.stop(m+(M?1.1:c+.06))}Yn(a,fe,.6),p.start(l),p.stop(l+u.length*c+1.5)}function KT(){if(!qe||on)return;const i=K.currentTime,t=K.createOscillator();t.type="sine",t.frequency.setValueAtTime(330,i),t.frequency.exponentialRampToValueAtTime(180,i+.4);const e=K.createOscillator(),n=K.createGain();e.frequency.value=6,n.gain.value=10,e.connect(n).connect(t.frequency);const s=K.createGain();s.gain.setValueAtTime(0,i),s.gain.linearRampToValueAtTime(.03,i+.05),s.gain.exponentialRampToValueAtTime(.001,i+.5),t.connect(s),Yn(s,fe,.3),e.start(i),t.start(i),e.stop(i+.6),t.stop(i+.6)}const Wp=[{f1:730,f2:1090},{f1:400,f2:2300},{f1:300,f2:2700},{f1:570,f2:850},{f1:440,f2:1020}];function JT(i,t,e){if(!qe||on)return;const n=t.x-e.x,s=t.z-e.z,o=n*n+s*s;if(o>400)return;const r=Math.sqrt(o),a=Math.max(0,1-r/20)*.05,l=Math.max(-1,Math.min(1,n/Math.max(r,1))),u=K.createStereoPanner();u.pan.value=l;const c=K.currentTime,p=Math.min(Math.ceil(i.length/2),16),f=.07,d=700+Math.random()*200;for(let g=0;g<p;g++){const x=Wp[g%Wp.length],h=Math.sin(g/p*Math.PI)*.3,m=d*(1+h)*(.9+Math.random()*.2),M=K.createOscillator();M.type="sine",M.frequency.value=m;const v=K.createOscillator();v.type="sine",v.frequency.value=x.f2*(.9+Math.random()*.2);const y=K.createGain(),T=c+g*f;y.gain.setValueAtTime(0,T),y.gain.linearRampToValueAtTime(a,T+.01),y.gain.linearRampToValueAtTime(a*.7,T+f*.6),y.gain.exponentialRampToValueAtTime(.001,T+f);const E=K.createGain();E.gain.setValueAtTime(0,T),E.gain.linearRampToValueAtTime(a*.15,T+.01),E.gain.exponentialRampToValueAtTime(.001,T+f),M.connect(y).connect(u),v.connect(E).connect(u),M.start(T),M.stop(T+f+.02),v.start(T),v.stop(T+f+.02)}Yn(u,fe,.35)}function QT(){if(!qe||on)return;const i=K.currentTime,t=K.createOscillator();t.type="sine",t.frequency.setValueAtTime(400,i),t.frequency.exponentialRampToValueAtTime(900,i+.15);const e=K.createGain();e.gain.setValueAtTime(.06,i),e.gain.exponentialRampToValueAtTime(.001,i+.5),t.connect(e),Yn(e,fe,.4),t.start(),t.stop(i+.6)}let wa=[],is=null;function tE(i){if(!qe||on)return;eE();const t=K.currentTime;is=K.createGain(),is.gain.setValueAtTime(0,t);const e=.015+i*.006;is.gain.linearRampToValueAtTime(e,t+3),Yn(is,fe,.7);const n=60,s=[1,2];i>=2&&s.push(1.5),i>=3&&s.push(3),i>=4&&s.push(2.5),i>=5&&s.push(4);for(let a=0;a<s.length;a++){const l=K.createOscillator();l.type="sine",l.frequency.value=n*s[a];const u=K.createGain();u.gain.value=a<2?1:.4,l.connect(u).connect(is),l.start(t),wa.push({osc:l,gain:u})}const o=K.createOscillator();o.type="sine",o.frequency.value=.15;const r=K.createGain();r.gain.value=e*.3,o.connect(r).connect(is.gain),o.start(t),wa.push({osc:o,gain:r})}function eE(){if(!K)return;const i=K.currentTime;for(let t=0;t<wa.length;t++)wa[t].osc.stop(i+.5);wa=[],is&&(is.gain.linearRampToValueAtTime(0,i+.4),is=null)}let Hg=null,Vg=null,Wg=null,oh=0,Xp=0,zc=0,rh=0,qp=1,Xf=!1;function nE(){if(Xf||!K)return;Xf=!0;const i=K.createGain();i.gain.value=0;const t=K.createOscillator();t.type="sine",t.frequency.value=160;const e=K.createOscillator();e.type="sine",e.frequency.value=190;const n=K.createBiquadFilter();n.type="lowpass",n.frequency.value=350,n.Q.value=.5,t.connect(n).connect(i),e.connect(n),i.connect(fe),t.start(),e.start(),Hg=t,Vg=e,Wg=i}function iE(i){if(!K||i<.001)return;const t=K.currentTime,e=1800+Math.random()*800,n=K.createOscillator();n.type="sine",n.frequency.value=e,n.frequency.exponentialRampToValueAtTime(e*.88,t+.1);const s=K.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(i*.5,t+.01),s.gain.exponentialRampToValueAtTime(.001,t+.1),n.connect(s).connect(fe),n.start(t),n.stop(t+.12)}function sE(i,t,e,n,s,o){if(!qe||on||(nE(),!Xf))return;const r=K.currentTime,a=s==="DEEP_NIGHT"||s==="NIGHT"?1:s==="DUSK"?.5:.3;qp=s==="DUSK"||s==="NIGHT"?1:s==="DEEP_NIGHT"?.6:.3;const l=Math.max(.15,1-o*.7);let u=1/0;if(t&&e)for(let x=0;x<e.length;x++){const h=e[x].x-t.x,m=e[x].z-t.z,M=h*h+m*m;M<u&&(u=M)}const c=u<400?1-Math.sqrt(u)/20:0;Xp+=i*2;const p=.7+.3*Math.sin(Xp*Math.PI*2),f=c*.025*a*l*p;if(Wg.gain.linearRampToValueAtTime(f,r+.15),oh+=i,oh>3+Math.random()*4){oh=0;const x=150+Math.random()*40;Hg.frequency.linearRampToValueAtTime(x,r+.5),Vg.frequency.linearRampToValueAtTime(x+20+Math.random()*15,r+.5)}let d=1/0;if(t&&n)for(let x=0;x<n.length;x++){const h=n[x].cx-t.x,m=n[x].cz-t.z,M=h*h+m*m;M<d&&(d=M)}const g=d<144?1-Math.sqrt(d)/12:0;if(rh=g*.02*qp*l,rh>.001){if(zc-=i,zc<=0){iE(rh);const x=1.5+(1-g)*1.5;zc=x+Math.random()*x}}else zc=0}let Fl=!1;function oE(){Fl||!K||(Fl=!0,xT(K,fe,Yn))}function rE(i,t,e,n){!qe||on||(Fl||oE(),Fl&&ET(i))}const aE=["kelu... kelu vash","the deep hums forgot","mori selani dusk","where did the glow sleep?","nesh... so quiet beneath","roots remember, canopy forgets","tavi lum shade shade","the dim eats softly","kelu ori mori still","something drank the light"],cE=["vari lumis! vari lumis!","the roots are singing again","oh the warmth came back","selani bright bright!","tavi ori bloom bloom","can you hear the hum?","lumis kel vari sava","the canopy remembers now","feel it? underneath?","this glow is yours too"],lE=["nesh oravi... close!","the anchor hums here","oravi kel nesh warm","something waits in gold","listen — the orb knows you","nesh! nesh! this way!","carry the voice to it","oravi sel lumis near"],uE=["you feel like us now","vari! vari! you hum!","your light shifts warm","almost... keep running!","sel tavi ori — together!","the song is in you","we can hear your glow"],hE=["you carry our voice now","lumis ori selani vari!","the orbs will hear you","go — sing to the gold!","quick, before it fades","ori nesh — find the anchor!","your glow is our glow"],fE=["kel kel tavi","the moss is whispering","do you see the patterns?","mori ori kel sava","we were here before you","the forest watches back","sel vari nesh quiet","every spore knows the way","tavi kel ori lumis","listen with your feet"];let Vn=null,sl=0,Ol=0,qf=!1,Zo=null;const Ho=new F;function dE(){Vn=document.createElement("div"),Vn.id="puffling-chat",Vn.style.cssText="position:fixed;pointer-events:none;opacity:0;z-index:101;font-family:Georgia,serif;font-size:13px;color:#ffeedd;font-style:italic;text-shadow:0 0 8px #ffaa66,0 0 16px #884422;letter-spacing:1.5px;text-align:center;max-width:220px;padding:4px 10px;transition:opacity 0.4s;background:rgba(20,10,5,0.3);border-radius:8px;",document.body.appendChild(Vn)}function pE(i,t,e,n){let s;return n?s=hE:e>.5?s=uE:t?s=lE:i?s=cE:i?s=fE:s=aE,s[Math.floor(Math.random()*s.length)]}function mE(i,t,e,n,s){if(Ol>0||!Vn)return null;const o=pE(t,e,n,s);return Vn.textContent=o,Vn.style.opacity="1",sl=3,Ol=8+Math.random()*6,qf=!0,Zo=i,o}function gE(i,t){if(Ol>0&&(Ol-=i),!qf||!Vn||!Zo)return;if(sl-=i,sl<=.8&&Vn&&(Vn.style.opacity="0"),sl<=0){qf=!1,Zo=null;return}Ho.set(Zo.position.x,Zo.position.y+1.2,Zo.position.z),Ho.project(pn);const e=t.clientWidth||window.innerWidth,n=t.clientHeight||window.innerHeight,s=(Ho.x+1)/2*e,o=(-Ho.y+1)/2*n;Ho.z>0&&Ho.z<1?(Vn.style.left=s+"px",Vn.style.top=o+"px",Vn.style.transform="translate(-50%, -100%)"):Vn.style.opacity="0"}function xE(i,t,e,n,s){const o=e.x-i.x,r=e.z-i.z,a=o*o+r*r;if(a>n*n)return!1;if(a<.01)return!0;let u=Math.atan2(r,o)-t;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;return Math.abs(u)<s*.5}function vE(i,t,e,n){const s=t.x-i.x,o=t.z-i.z,r=n?e*1.8:e;return s*s+o*o<r*r}function Xg(i,t,e){let n=0,s=0,o=0;for(let r=0;r<t.length;r++){const a=t[r],l=i.x-a.x,u=i.z-a.z,c=l*l+u*u;if(c>.01&&c<e*e){const p=Math.sqrt(c);n+=l/p/p,s+=u/p/p,o++}}return o>0&&(n/=o,s/=o),{x:n,z:s}}function qg(i,t){if(t.length===0)return{x:0,z:0};let e=0,n=0;for(let s=0;s<t.length;s++)e+=t[s].x,n+=t[s].z;return e/=t.length,n/=t.length,{x:e-i.x,z:n-i.z}}function ME(i,t){const e=Math.sqrt(i.x*i.x+i.z*i.z),n=jt-t;if(e<n)return{x:0,z:0};const s=(e-n)/t,o=Math.min(s*2,3);return{x:-i.x/e*o,z:-i.z/e*o}}function _E(i,t,e,n,s){let o=0,r=0;const a=Math.cos(t)*n,l=Math.sin(t)*n,u=i.x+a,c=i.z+l;for(let p=0;p<e.length;p++){const f=e[p],d=u-f.x,g=c-f.z,x=d*d+g*g,h=(f.colR||s)+1;if(x<h*h&&x>.01){const m=Math.sqrt(x),M=(h-m)/h*2;o+=d/m*M,r+=g/m*M}}return{x:o,z:r}}let ki=null;const ol=2*Math.PI/xn,Yp=.09,yE=1-ar,rs=[];function wE(i){ki=i,rs.length=0;for(let t=0;t<ki.length;t++)rs.push({active:!1,elapsed:0,radius:0})}function SE(i){i>=0&&i<rs.length&&(rs[i].active=!0,rs[i].elapsed=0,rs[i].radius=0)}function bE(i){for(let t=0;t<rs.length;t++){const e=rs[t];e.active&&(e.elapsed+=i,e.radius=e.elapsed*y2,e.radius>=100&&(e.active=!1,e.radius=100))}}function TE(i,t){let e=Math.atan2(t,i);return e<0&&(e+=2*Math.PI),Math.floor(e/ol)%xn}function Ee(i,t,e){if(!ki)return e;let n=Math.atan2(t,i);n<0&&(n+=2*Math.PI);const s=Math.floor(n/ol)%xn;if(s<ki.length&&ki[s].found){const l=rs[s];if(l.active){const u=i*i+t*t,c=l.radius*l.radius;if(u>c)return e*ar}return e}const o=n/ol-s,a=Math.min(o,1-o)*ol;if(a<Yp){const l=o<.5?(s-1+xn)%xn:(s+1)%xn;if(l<ki.length&&ki[l].found){const u=a/Yp,c=ar+yE*(.5+.5*Math.cos(u*Math.PI));return e*c}}return e*ar}function Zp(i,t){if(!ki)return!1;const e=TE(i,t);return e<ki.length&&ki[e].found}const es={deer:!1,puffling:!1,jelly:!1,moth:!1,fairyRing:!1,crystalChain:!1,pond:!1},EE={deer:"Spirit Deer",puffling:"Puffling",jelly:"Luminous Jelly",moth:"Moon Moth",fairyRing:"Fairy Ring",crystalChain:"Crystal Resonance",pond:"Moonlit Pond"},AE=["The First Light Returns","The Forest Remembers","Roots of Radiance","The Veil Thins","Convergence"];let xi=null,Sa=0,Bl="";function RE(){xi=document.createElement("div"),xi.id="discovery-text",xi.style.cssText="position:fixed;top:28%;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:22px;color:#ccffee;text-shadow:0 0 12px #44ffaa,0 0 30px #228866;pointer-events:none;opacity:0;transition:opacity 0.6s;z-index:100;letter-spacing:3px;text-transform:uppercase;",document.body.appendChild(xi)}function Vs(i){es[i]||(es[i]=!0,Bl=EE[i],Sa=3,xi&&(xi.textContent=Bl,xi.style.opacity="1"))}function CE(i){const t=AE[i];t&&(Bl=t,Sa=4,xi&&(xi.textContent=Bl,xi.style.opacity="1"))}function PE(i,t,e,n,s,o,r,a){const l=i.x,u=i.z;if(!es.deer)for(let c=0;c<t.length;c++){const p=t[c].group.position.x-l,f=t[c].group.position.z-u;if(p*p+f*f<144){Vs("deer");break}}if(!es.puffling)for(let c=0;c<e.length;c++){const p=e[c].group.position.x-l,f=e[c].group.position.z-u;if(p*p+f*f<64){Vs("puffling");break}}if(!es.jelly)for(let c=0;c<n.length;c++){const p=n[c].group.position.x-l,f=n[c].group.position.z-u;if(p*p+f*f<100){Vs("jelly");break}}if(!es.moth)for(let c=0;c<s.length;c++){const p=s[c].group.position.x-l,f=s[c].group.position.z-u;if(p*p+f*f<64){Vs("moth");break}}if(!es.fairyRing)for(let c=0;c<o.length;c++){const p=o[c].x-l,f=o[c].z-u;if(p*p+f*f<16){Vs("fairyRing");break}}if(!es.pond)for(let c=0;c<r.length;c++){const p=r[c].x-l,f=r[c].z-u;if(p*p+f*f<25){Vs("pond");break}}!es.crystalChain&&a>=3&&Vs("crystalChain")}let ns=null,rl=0;function IE(){ns||(ns=document.createElement("div"),ns.id="orb-hint-text",ns.style.cssText="position:fixed;top:60%;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:16px;color:#ffddaa;font-style:italic;text-shadow:0 0 10px #cc8844,0 0 25px #885522;pointer-events:none;opacity:0;transition:opacity 0.8s;z-index:100;letter-spacing:2px;text-align:center;max-width:400px;",document.body.appendChild(ns)),ns.textContent="The forest's voice is missing… listen to those who still sing.",ns.style.opacity="1",rl=4}function LE(i){Sa>0&&(Sa-=i,Sa<=.6&&xi&&(xi.style.opacity="0")),rl>0&&(rl-=i,rl<=1&&ns&&(ns.style.opacity="0"))}let Yf=null,ah=60;const DE={DUSK:"Dusk",NIGHT:"Night",DEEP_NIGHT:"Deep Night",DAWN:"Dawn"},UE={CLEAR:"Clear",MISTY:"Misty",LIGHT_RAIN:"Light Rain",HEAVY_RAIN:"Heavy Rain",FOG_BANK:"Fog",LUMINOUS_STORM:"Storm"};function zE(){Yf=document.getElementById("hud")}function NE(i,t){if(!Yf)return;ah=ah*.95+1/Math.max(i,.001)*.05;const e=cn==="SEEK"?"Seek the orbs...":cn==="RISING"?"The obelisk stirs...":cn==="COMPLETE"?"Convergence!":"Luminaries",n=DE[Xe]||"Night",s=UE[gr]||"Clear";Yf.innerHTML="<b>"+e+"</b> · "+n+" · "+s+" · FPS:"+Math.round(ah)+"<br>Pos:"+t.x.toFixed(0)+","+t.z.toFixed(0)}let Gl=null;function FE(){Gl=document.getElementById("orb-hud")}function OE(){return Gl}function BE(){const i=document.getElementById("overlay");i&&(i.style.opacity="0",setTimeout(()=>{try{i.remove()}catch{}},2500)),Gl&&(Gl.style.display="block")}const Xt=[];let Is=[];const al=[],Zn=[],ae=[],Ei=[],ti=[],en=[],Lr=[],Yg=[],Na=[],Wi=[],Zf=[],Ti=[],kl=[],ba=[],oi=[],Bi=[],ke=[],On=[],$f=[],jf=[],Zg=[],Kf=[],Jf=[],Qf=[],td=[],ed=[],nd=[],ws=[];let $p=0,jp=0,Ta=.35,Se=1.15;const Kp=new it(Rd[0]),Jp=new it(Rd[0]);let ia=0,Nc=1/0,ch={x:0,z:0};const $g=new F(0,1,0),Hl=new F,Mr=new nn,jg=new nn,$e=new nn;function Vo(i,t,e,n){const s=Kl(t,e);Hl.set(s.x,s.y,s.z),Mr.setFromUnitVectors($g,Hl),Mr.slerp(jg,1-n),i.quaternion.copy(Mr)}function Li(i,t,e){const n=Kl(i,t);return Hl.set(n.x,n.y,n.z),Mr.setFromUnitVectors($g,Hl),Mr.slerp(jg,1-e),Mr.clone()}let lh=0,di=null,Ni=0;const id=15,sd=[];let Qp=!1;function GE(){if(Qp)return;Qp=!0;const i=new xd({color:z.crystal,transparent:!0,opacity:0,blending:Jt,depthWrite:!1});for(let t=0;t<id;t++){const e=new Ae,n=new Float32Array(6);e.setAttribute("position",new Ne(n,3)),e.attributes.position.setUsage(Me);const s=new Rm(e,i.clone());s.visible=!1,ot.add(s),sd.push({line:s,geo:e,opacity:0,active:!1})}}let Ws=null;function kE(){if(Ws)return Ws;const i=new Pa(.9,1,48),t=new $({color:z.echoBloom,transparent:!0,opacity:.5,side:Pt,depthWrite:!1,blending:Jt});return Ws=new P(i,t),Ws.rotation.x=-Math.PI/2,Ws.visible=!1,ot.add(Ws),Ws}const Le=[];function Be(i,t){for(let e=0;e<Le.length;e++){const n=Le[e].x-i,s=Le[e].z-t;if(n*n+s*s<Le[e].r2)return!0}return!1}function HE(){const i=25+Math.floor(_()*15),t=[];for(let f=0;f<i;f++){const d=_()*6.28,g=8+_()*(jt-15);t.push({x:Math.cos(d)*g,z:Math.sin(d)*g,r:6+_()*18,density:.5+_()*.5})}const e=5+Math.floor(_()*4),n=[];for(let f=0;f<e;f++){const d=_()*6.28,g=12+_()*(jt*.65);n.push({x:Math.cos(d)*g,z:Math.sin(d)*g,r2:(10+_()*15)**2})}for(let f=0;f<rp;f++){let d,g,x=!1;for(let h=0;h<25;h++){if(_()<.2){const M=_()*6.28,v=5+_()*(jt-10);d=Math.cos(M)*v,g=Math.sin(M)*v}else{const M=Math.floor(_()*i),v=t[M],y=v.r*(_()+_())*.5*v.density,T=_()*6.28;d=v.x+Math.cos(T)*y,g=v.z+Math.sin(T)*y}if(d*d+g*g>(jt-5)*(jt-5))continue;let m=!1;for(let M=0;M<n.length;M++){const v=n[M].x-d,y=n[M].z-g;if(v*v+y*y<n[M].r2){m=!0;break}}if(!m){x=!0;for(let M=0;M<Xt.length;M++){const v=Xt[M].x-d,y=Xt[M].z-g;if(v*v+y*y<6.25){x=!1;break}}if(x)break}}if(x){const h=6+_()*10;_();const m=Dt(d,g),M=_()*Math.PI*2,v=.8+_()*.4,y=dS(h,m);y.position.x=d,y.position.z=g,al.push(y),Xt.push({x:d,z:g,y:m,treeH:h,yRot:M,scale:v}),Le.push({x:d,z:g,r2:4})}}const s=vS(10),o=Math.ceil(rp/10)+10;Is=MS(s,Xt,o);for(let f=0;f<a2;f++){let d,g,x=!1;for(let h=0;h<20;h++){const m=_()*6.28,M=10+_()*(jt*.6);if(d=Math.cos(m)*M,g=Math.sin(m)*M,x=!Be(d,g),x)break}if(x){lf(d,g,4);const h=YS(d,g);h.group.position.y=Dt(d,g),oi.push(h),Le.push({x:d,z:g,r2:64})}}for(let f=0;f<u2;f++){let d,g,x=!1;for(let h=0;h<20;h++){const m=_()*6.28,M=8+_()*(jt*.6);if(d=Math.cos(m)*M,g=Math.sin(m)*M,x=!Be(d,g),x)break}if(x){lf(d,g,3);const h=$S(d,g);h.group.position.y=Dt(d,g),ke.push(h),Le.push({x:d,z:g,r2:49})}}const r=new Float32Array(Xt.length);let a=0;for(let f=0;f<Xt.length;f++){let d=0;for(let g=0;g<Xt.length;g++){if(f===g)continue;const x=Xt[f].x-Xt[g].x,h=Xt[f].z-Xt[g].z;x*x+h*h<144&&d++}r[f]=Math.max(d,.2),a+=r[f]}function l(f,d){let g=0;for(let x=0;x<Xt.length;x++){const h=f-Xt[x].x,m=d-Xt[x].z;h*h+m*m<100&&g++}return g}for(let f=0;f<Zw;f++){let d=_()*a,g=0;for(let T=0;T<r.length;T++)if(d-=r[T],d<=0){g=T;break}const x=Xt[g],h=_()*6.28,m=1+_()*4,M=x.x+Math.cos(h)*m,v=x.z+Math.sin(h)*m;if(Be(M,v))continue;const y=yS(M,v);y.group.position.y=Dt(M,v),Vo(y.group,M,v,.3),Zn.push(y),Le.push({x:M,z:v,r2:1})}for(let f=0;f<$w;f++){const d=_()*6.28,g=8+_()*jt*.6,x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h))continue;const m=wS(x,h);m.group.position.y=Dt(x,h),Vo(m.group,x,h,.45),ae.push(m),Le.push({x,z:h,r2:4})}for(let f=0;f<jw;f++){const d=_()*6.28,g=10+_()*jt*.5,x=Math.cos(d)*g,h=Math.sin(d)*g;Ei.push(HS(x,Dt(x,h)+3+_()*5,h))}for(let f=0;f<Kw;f++){const d=Zn[Math.floor(_()*Zn.length)],g=_()*6.28,x=1+_()*5,h=d.x+Math.cos(g)*x,m=d.z+Math.sin(g)*x;if(Be(h,m))continue;const M=VS(h,m);M.group.position.y=Dt(h,m),M._baseY=Dt(h,m),ti.push(M)}for(let f=0;f<Jw;f++){const d=_()*6.28,g=12+_()*jt*.5,x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h))continue;const m=WS(x,h),M=Dt(x,h);m.group.position.y=M,m._baseY=M,en.push(m)}for(let f=0;f<Qw;f++){const d=Xt[Math.floor(_()*Xt.length)];Lr.push(XS(d.x,Dt(d.x,d.z)+2+_()*4,d.z))}const u=[null,z.grassPurple,z.grassBlue,z.grassTeal];for(let f=0;f<t2;f++){const d=_()*6.28,g=2+_()*(jt*.9),x=Math.cos(d)*g,h=Math.sin(d)*g,m=u[Math.floor(_()*u.length)],M=2+_()*2.5,v=38+Math.floor(_()*30);if(Be(x,h))continue;const y=bS(x,h,M,v,m);y.mesh.position.y=Dt(x,h),Yg.push(y),Le.push({x,z:h,r2:M*M})}for(let f=0;f<s2;f++){let d,g,x=!1;for(let h=0;h<10;h++){const m=_()*6.28,M=3+_()*(jt*.85);if(d=Math.cos(m)*M,g=Math.sin(m)*M,x=!Be(d,g),x)break}if(x){const h=KS(d,g);h.group.position.y=Dt(d,g)-.08,Vo(h.group,d,g,.5),Ti.push(h),Le.push({x:d,z:g,r2:2.25})}}for(let f=0;f<o2;f++){let d,g,x=!1;for(let h=0;h<10;h++){const m=_()*6.28,M=8+_()*(jt*.8);if(d=Math.cos(m)*M,g=Math.sin(m)*M,x=!Be(d,g),x)break}if(x){const h=JS(d,g);h.group.position.y=Dt(d,g)-.3,Vo(h.group,d,g,.6),Ti.push(h),Le.push({x:d,z:g,r2:9})}}QS();for(let f=0;f<Ad;f++){let d,g;if(Ti.length>0&&_()<.5){const x=Ti[Math.floor(_()*Ti.length)],h=_()*6.28,m=.5+_()*3;d=x.x+Math.cos(h)*m,g=x.z+Math.sin(h)*m}else if(Xt.length>0&&_()<.5){const x=Xt[Math.floor(_()*Xt.length)],h=_()*6.28,m=1+_()*4;d=x.x+Math.cos(h)*m,g=x.z+Math.sin(h)*m}else{const x=_()*6.28,h=3+_()*(jt*.85);d=Math.cos(x)*h,g=Math.sin(x)*h}tb(d,g,Dt(d,g))}eb();for(let f=0;f<e2;f++){const d=Xt[Math.floor(_()*Xt.length)],g=_()*6.28,x=1+_()*5,h=d.x+Math.cos(g)*x,m=d.z+Math.sin(g)*x;if(Be(h,m))continue;const M=TS(h,m);M.group.position.y=Dt(h,m),M.slopeQ=Li(h,m,.4),Na.push(M),Le.push({x:h,z:m,r2:1})}for(let f=0;f<n2;f++){const d=_()*6.28,g=3+_()*(jt*.7),x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h)||l(x,h)>1&&_()<.8)continue;const m=ES(x,h);m.group.position.y=Dt(x,h),m.slopeQ=Li(x,h,.35),Wi.push(m),Le.push({x,z:h,r2:1})}for(let f=0;f<i2;f++){const d=_()*6.28,g=4+_()*(jt*.8),x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h)||l(x,h)>1&&_()<.8)continue;const m=AS(x,h);m.group.position.y=Dt(x,h),m.slopeQ=Li(x,h,.15),Zf.push(m),Le.push({x,z:h,r2:1})}const c=6.28/xn,p=[];for(let f=0;f<xn;f++){let d,g,x=!1;const h=f*c;for(let m=0;m<50;m++){const M=h+_()*c,v=30+_()*(jt*.5);if(d=Math.cos(M)*v,g=Math.sin(M)*v,Be(d,g))continue;let y=!1;for(let T=0;T<p.length;T++){const E=d-p[T].x,b=g-p[T].z;if(E*E+b*b<900){y=!0;break}}if(!y){x=!0;break}}if(x){p.push({x:d,z:g});const m=jS(d,g);m.group.position.y=Dt(d,g)+1,m.flyY=Dt(d,g)+1,On.push(m)}}for(let f=0;f<qm;f++){const d=_()*6.28,g=2+_()*3,x=Math.cos(d)*g,h=Math.sin(d)*g;kl.push(qS(x,Dt(x,h)+1+_()*.5,h))}for(let f=0;f<r2;f++){const d=_()*6.28,g=4+_()*(jt*.7),x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h)||l(x,h)>1&&_()<.8)continue;const m=IS(x,h);m.group.position.y=Dt(x,h),Vo(m.group,x,h,.35),ba.push(m),Le.push({x,z:h,r2:1})}for(let f=0;f<c2;f++){const d=_()*6.28,g=5+_()*jt*.6,x=Math.cos(d)*g,h=Math.sin(d)*g;Bi.push(ZS(x,Dt(x,h)+.5+_()*5,h))}for(let f=0;f<h2;f++){const d=_()*6.28,g=5+_()*(jt*.7),x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h))continue;const m=DS(x,h);m.group.position.y=Dt(x,h),m.slopeQ=Li(x,h,.3),$f.push(m),Le.push({x,z:h,r2:2.25})}for(let f=0;f<f2;f++){const d=Xt[Math.floor(_()*Xt.length)],g=_()*6.28,x=2+_()*4,h=d.x+Math.cos(g)*x,m=d.z+Math.sin(g)*x;if(Be(h,m))continue;const M=US(h,m);M.group.position.y=Dt(h,m),M.slopeQ=Li(h,m,.25),jf.push(M),Le.push({x:h,z:m,r2:1})}for(let f=0;f<d2;f++){const d=_()*6.28,g=6+_()*(jt*.65),x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h))continue;const m=zS(x,h);m.group.position.y=Dt(x,h),Vo(m.group,x,h,.25),Zg.push(m),Le.push({x,z:h,r2:2.25})}for(let f=0;f<p2;f++){const d=Xt[Math.floor(_()*Xt.length)],g=_()*6.28,x=2+_()*5,h=d.x+Math.cos(g)*x,m=d.z+Math.sin(g)*x;if(Be(h,m))continue;const M=FS(h,m);M.group.position.y=Dt(h,m),M.slopeQ=Li(h,m,.35),Kf.push(M),Le.push({x:h,z:m,r2:1.5})}for(let f=0;f<m2;f++){const d=_()*6.28,g=8+_()*(jt*.6),x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h))continue;const m=OS(x,h);m.group.position.y=Dt(x,h),m.slopeQ=Li(x,h,.3),Jf.push(m),Le.push({x,z:h,r2:3})}for(let f=0;f<g2;f++){const d=_()*6.28,g=5+_()*(jt*.7),x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h))continue;const m=BS(x,h);m.group.position.y=Dt(x,h),m.slopeQ=Li(x,h,.35),Qf.push(m),Le.push({x,z:h,r2:1.5})}for(let f=0;f<x2;f++){const d=Xt[Math.floor(_()*Xt.length)],g=_()*6.28,x=2+_()*4,h=d.x+Math.cos(g)*x,m=d.z+Math.sin(g)*x;if(Be(h,m))continue;const M=GS(h,m);M.group.position.y=Dt(h,m),M.slopeQ=Li(h,m,.3),td.push(M),Le.push({x:h,z:m,r2:1.5})}for(let f=0;f<v2;f++){const d=Ti.length>0?Ti[Math.floor(_()*Ti.length)]:{x:0,z:0},g=_()*6.28,x=1+_()*3,h=d.x+Math.cos(g)*x,m=d.z+Math.sin(g)*x;if(Be(h,m))continue;const M=kS(h,m);M.group.position.y=Dt(h,m),M.slopeQ=Li(h,m,.2),ed.push(M),Le.push({x:h,z:m,r2:1})}for(let f=0;f<M2;f++){const d=_()*6.28,g=5+_()*(jt*.8),x=Math.cos(d)*g,h=Math.sin(d)*g,m=1.5+_()*3.5,M=z.groundGlowColors[Math.floor(_()*z.groundGlowColors.length)],v=.08+_()*.12,y=new $({color:M,transparent:!0,opacity:v,blending:Jt,depthWrite:!1,side:Pt}),T=new Ve(m,10);T.rotateX(-Math.PI/2);const E=Dt(x,h),b=T.attributes.position;for(let S=0;S<b.count;S++){const w=x+b.getX(S),R=h+b.getZ(S);b.setY(S,Dt(w,R)-E+.02)}b.needsUpdate=!0,T.computeVertexNormals();const A=new P(T,y);A.position.set(x,E,h),ot.add(A),nd.push({mesh:A,mat:y,phase:_()*6.28,baseOpacity:v,speed:.3+_()*.3,x,z:h})}for(let f=0;f<Xt.length;f++){const d=Xt[f],g=Dt(d.x,d.z);d.y=g,al[f]&&(al[f].position.y=g+(d.treeH||10)*.6)}if(Is.length>0){const f=new ce,d=new F(0,1,0),g=new F,x=new nn,h=new nn,m=new nn;for(let M=0;M<Is.length;M++){const v=Is[M];for(let y=0;y<v.instances.length;y++){const T=v.instances[y],E=Xt[T.posIdx];T.y=E.y;const b=Kl(E.x,E.z);T.nx=b.x,T.ny=b.y,T.nz=b.z,f.position.set(E.x,E.y,E.z),g.set(b.x,b.y,b.z),x.setFromUnitVectors(d,g),x.slerp(h,.85),m.setFromAxisAngle(d,E.yRot),f.quaternion.copy(x).multiply(m),f.scale.setScalar(E.scale),f.updateMatrix(),v.trunk&&v.trunk.setMatrixAt(y,f.matrix),v.canopy&&v.canopy.setMatrixAt(y,f.matrix),v.glow&&v.glow.setMatrixAt(y,f.matrix),v.detail&&v.detail.setMatrixAt(y,f.matrix)}v.trunk&&(v.trunk.instanceMatrix.needsUpdate=!0),v.canopy&&(v.canopy.instanceMatrix.needsUpdate=!0),v.glow&&(v.glow.instanceMatrix.needsUpdate=!0),v.detail&&(v.detail.instanceMatrix.needsUpdate=!0)}}}function Kg(i,t){const e=1+fs*1.5,n=ro*.03,s=ir*.03,o=Z.pos.x,r=Z.pos.y,a=Z.pos.z;_S(Is,al,o,r,a,t,e,n,s);const l=Ta*Se;for(let u=0;u<Is.length;u++){const c=Is[u];c.canopyMat&&(c.canopyMat.emissiveIntensity=1.2*l),c.glowMat&&(c.glowMat.emissiveIntensity=.4*l),c.detailMat&&(c.detailMat.emissiveIntensity=.5*l),c.trunkMat&&(c.trunkMat.emissiveIntensity=.6*l)}SS(t,e,n,s,o,a,Ta*Se),Y2(t,o,a);for(let u=0;u<Na.length;u++){const c=Na[u],p=c.group.position.x-o,f=c.group.position.y-r,d=c.group.position.z-a,g=p*p+f*f+d*d;if(g>1600){c.group.visible&&(c.group.visible=!1);continue}c.group.visible||(c.group.visible=!0),!(g>900)&&c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),$e.set((Math.sin(t*.6+c.phase+1)*.02*e+s)*.5,0,(Math.sin(t*.8+c.phase)*.03*e+n)*.5,1).normalize(),c.group.quaternion.multiply($e))}for(let u=0;u<Wi.length;u++){const c=Wi[u],p=c.group.position.x-o,f=c.group.position.y-r,d=c.group.position.z-a,g=p*p+f*f+d*d;if(g>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),g>900)continue;const x=Math.sin(t*.8+c.phase)*.5+.5;c.petalMat.emissiveIntensity=(.5+x*.7)*Ee(c.group.position.x,c.group.position.z,ve*Se),c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),$e.set(0,0,(Math.sin(t*.9+c.phase)*.04*e+n*.5)*.5,1).normalize(),c.group.quaternion.multiply($e))}for(let u=0;u<Zf.length;u++){const c=Zf[u],p=c.group.position.x-o,f=c.group.position.y-r,d=c.group.position.z-a,g=p*p+f*f+d*d;if(g>1600){c.group.visible&&(c.group.visible=!1);continue}c.group.visible||(c.group.visible=!0),!(g>900)&&c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),$e.set((Math.sin(t*.8+c.phase+2)*c.swayAmp*.5*e+s)*.5,0,(Math.sin(t*1.1+c.phase)*c.swayAmp*e+n)*.5,1).normalize(),c.group.quaternion.multiply($e))}for(let u=0;u<$f.length;u++){const c=$f[u],p=Math.sin(t*1.2+c.phase)*.5+.5,f=Ee(c.group.position.x,c.group.position.z,ve*Se);c.orbMat.emissiveIntensity=(.6+p*.6)*f,c.hazeMat.opacity=(.06+p*.06)*f,c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),$e.set((Math.sin(t*.4+c.phase+1)*.015*e+s*.3)*.5,0,(Math.sin(t*.5+c.phase)*.02*e+n*.3)*.5,1).normalize(),c.group.quaternion.multiply($e))}for(let u=0;u<jf.length;u++){const c=jf[u];for(let p=0;p<c.podMats.length;p++){const f=Math.sin(t*1.5+c.phase+p*1.8)*.5+.5;c.podMats[p].emissiveIntensity=(.5+f*.7)*Ee(c.group.position.x,c.group.position.z,ve*Se)}c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),$e.set(0,0,(Math.sin(t*.35+c.phase)*.01*e+n*.2)*.5,1).normalize(),c.group.quaternion.multiply($e))}NS(Zg,i,t,ve*Se,Ee);for(let u=0;u<Kf.length;u++){const c=Kf[u],p=c.x-o,f=c.z-a,d=p*p+f*f;if(d>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),d<900){for(let g=0;g<c.tipMats.length;g++){const x=Math.sin(t*1.8+c.phase+g*1.5)*.5+.5;c.tipMats[g].emissiveIntensity=(.5+x*.7)*Ee(c.x,c.z,ve*Se)}c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),$e.set((Math.sin(t*.35+c.phase+1)*.01*e+s*.2)*.5,0,(Math.sin(t*.4+c.phase)*.015*e+n*.2)*.5,1).normalize(),c.group.quaternion.multiply($e))}}for(let u=0;u<Jf.length;u++){const c=Jf[u],p=c.x-o,f=c.z-a,d=p*p+f*f;if(d>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),d<900){const g=Ee(c.x,c.z,ve*Se);c.columnMat.emissiveIntensity=(.5+Math.sin(t*.8+c.phase)*.35)*g,c.hazeMat.opacity=(.05+Math.sin(t*.8+c.phase)*.04)*g;for(let x=0;x<c.flies.length;x++){const h=t*(2+x*.5)+x*2.1,m=.2+Math.sin(t*.7+x)*.08,M=.1+Math.sin(t*1.3+x*1.7)*.15;c.flies[x].position.set(Math.cos(h)*m,c.spadixY+M,Math.sin(h)*m)}c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),$e.set(0,0,(Math.sin(t*.3+c.phase)*.01*e+n*.15)*.5,1).normalize(),c.group.quaternion.multiply($e))}}for(let u=0;u<Qf.length;u++){const c=Qf[u],p=c.x-o,f=c.z-a,d=p*p+f*f;if(d>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),d<900){for(let g=0;g<c.orbMats.length;g++){const x=Math.sin(t*2+c.phase+g*1.3)*.5+.5;c.orbMats[g].emissiveIntensity=(.5+x*.7)*Ee(c.x,c.z,ve*Se)}c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),$e.set((Math.sin(t*.4+c.phase+1)*.008*e+s*.2)*.5,0,(Math.sin(t*.45+c.phase)*.012*e+n*.2)*.5,1).normalize(),c.group.quaternion.multiply($e))}}for(let u=0;u<td.length;u++){const c=td[u],p=c.x-o,f=c.z-a,d=p*p+f*f;if(d>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),d<900){for(let g=0;g<c.podMats.length;g++){const x=Math.sin(t*1.5+c.phase+g*1.8)*.5+.5;c.podMats[g].emissiveIntensity=(.5+x*.6)*Ee(c.x,c.z,ve*Se)}c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),$e.set((Math.sin(t*.5+c.phase+1)*.015*e+s*.25)*.5,0,(Math.sin(t*.6+c.phase)*.02*e+n*.25)*.5,1).normalize(),c.group.quaternion.multiply($e))}}for(let u=0;u<ed.length;u++){const c=ed[u],p=c.x-o,f=c.z-a,d=p*p+f*f;if(d>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),d<900){for(let g=0;g<c.veilMats.length;g++)c.veilMats[g].rotation.z=Math.sin(t*.8+c.phase+g*.7)*.06*e;c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),$e.set(0,0,(Math.sin(t*.35+c.phase)*.01*e+n*.15)*.5,1).normalize(),c.group.quaternion.multiply($e))}}for(let u=0;u<nd.length;u++){const c=nd[u],p=c.x-o,f=c.z-a;if(p*p+f*f>3600){c.mesh.visible=!1;continue}c.mesh.visible=!0;const d=Math.sin(t*c.speed+c.phase)*.3+.7;c.mat.opacity=c.baseOpacity*d*Ee(c.x,c.z,ve*Se)}}function Jg(i,t){for(let n=0;n<Ei.length;n++){const s=Ei[n],o=s.group,r=o.position.x,a=o.position.z;s._syncPhase===void 0&&(s._syncPhase=s.phase);let l=0,u=0;for(let c=0;c<Ei.length;c++){if(c===n)continue;const p=Ei[c],f=p.group.position.x-r,d=p.group.position.z-a;f*f+d*d<225&&(l+=p._syncPhase||p.phase,u++)}if(u>0){const c=l/u;s._syncPhase+=(c-s._syncPhase)*i*.4}}const e=Xe==="DEEP_NIGHT"?2:Xe==="DAWN"?-1.5:0;for(let n=0;n<Ei.length;n++){const s=Ei[n].group,o=s.position.x-Z.pos.x,r=s.position.z-Z.pos.z,a=s.position.y-Z.pos.y;if(o*o+a*a+r*r>3025){s.visible=!1;continue}s.visible=!0;const l=Ei[n],u=l.group,c=u.position.x,p=u.position.z,f=l.floatY+e;if(l._stT-=i,l._stT<=0)if(ps)l._state="display",l._stT=10+Math.random()*15;else{const M=Math.random();M<.5?(l._state="drift",l._stT=20+Math.random()*30):M<.75?(l._state="pulse",l._stT=8+Math.random()*12):(l._state="migrate",l._migrateAng=Math.random()*6.28,l._stT=15+Math.random()*20)}switch(ps&&l._state!=="display"&&(l._state="display",l._stT=10,Ir("jelly",{x:c,z:p},Z.pos)),l._state){case"drift":{l.driftAng+=i*.15;const M=8+Math.sin(t*.1+l.phase)*4,v=l.homeX+Math.cos(l.driftAng)*M,y=l.homeZ+Math.sin(l.driftAng)*M;u.position.x+=(v-c)*i*.3,u.position.z+=(y-p)*i*.3,u.position.y=f+Math.sin(t*l.wobble+l.phase)*1.5;break}case"pulse":{l.driftAng+=i*.08,u.position.x+=Math.cos(l.driftAng)*i*.3,u.position.z+=Math.sin(l.driftAng)*i*.3,u.position.y=f+Math.sin(t*l.wobble+l.phase)*1,l._pulseSync=Math.sin(t*2+l._syncPhase)*.5+.5;break}case"migrate":{u.position.x+=Math.cos(l._migrateAng)*i*1,u.position.z+=Math.sin(l._migrateAng)*i*1,u.position.y=f+Math.sin(t*l.wobble+l.phase)*.8,u.position.x*u.position.x+u.position.z*u.position.z>jt*.8*(jt*.8)&&(l._migrateAng+=Math.PI);break}case"display":{l.driftAng+=i*.4,u.position.x+=Math.cos(l.driftAng)*i*.8,u.position.z+=Math.sin(l.driftAng)*i*.8,u.position.y=f+Math.sin(t*2+l.phase)*2,l._syncPhase+=(0-l._syncPhase)*i*2;break}}const d=Dt(u.position.x,u.position.z);u.position.y<d+3&&(u.position.y=d+3),l._state==="pulse"&&Math.random()<.003&&Ir("jelly",{x:c,z:p},Z.pos);const g=l._syncPhase||l.phase,x=Math.sin(t*1.2+g)*.5+.5;let h=1,m=0;if(l._state==="pulse")h=1+l._pulseSync*1.5,m=l._pulseSync*.15;else if(l._state==="display"){const M=Math.sin(t*4)*.5+.5;h=1.5+M*1.2,m=.15+M*.1}else l._state==="drift"&&(h=1+x*.3);if(l.bellMat.emissiveIntensity=(.4+x*.8)*Ee(u.position.x,u.position.z,ve*Se)*h,l.bellMat.opacity=.35+x*.25+m,l.tipMat){const M=Math.sin(t*5.3+l.phase*7.1)*Math.sin(t*3.7+l.phase*4.3);l.tipMat.opacity=.3+.7*(M*.5+.5)}u.rotation.y+=i*.2;for(let M=2;M<u.children.length;M++)u.children[M].rotation.x=Math.sin(t*2+M+g)*.15,u.children[M].rotation.z=Math.sin(t*1.5+M*.7+g)*.1}}function Qg(i,t){const e=We.ShiftLeft||We.ShiftRight||Nr,n=Xe==="DAWN"?.6:Xe==="NIGHT"?1.3:1,s=Xe==="DAWN"?2:Xe==="NIGHT"?.6:1;Nc=1/0;const o=Xb();for(let r=0;r<ti.length;r++){const a=ti[r],l=a.group,u=l.position.x,c=l.position.z,p=u-Z.pos.x,f=c-Z.pos.z,d=p*p+f*f;if(d>1600){l.visible=!1;continue}if(l.visible=!0,d<Nc&&(Nc=d,ch.x=u,ch.z=c),a.state!=="startled"&&a.state!=="following"&&a.state!=="huddle"){const w=e?3.5:2;let R=d<w*w;if(!R)for(let C=0;C<en.length;C++){if(en[C].state!=="flee")continue;const D=en[C].group.position.x-u,U=en[C].group.position.z-c;if(D*D+U*U<25){R=!0;break}}R&&(a.state="startled",a._scaredT=.6+Math.random()*.5,a.wanderAng=Math.atan2(p,f),a.hopTimer=0,Ir("puff",{x:u,z:c},Z.pos))}if(ps&&a.state!=="startled"&&a.state!=="huddle"){let w=1/0,R=-1;for(let C=0;C<ti.length;C++){if(C===r)continue;const D=ti[C].group.position.x-u,U=ti[C].group.position.z-c,H=D*D+U*U;H<w&&(w=H,R=C)}R>=0&&w>1&&(a.state="huddle",a._huddleTarget=R)}Pr>5&&d<144&&a.state==="idle"&&Math.random()<.002&&(a.state="following",a._followT=10+Math.random()*10);const g=u-a._lastTX,x=c-a._lastTZ;g*g+x*x>.25&&(a._baseY=Dt(u,c),a._lastTX=u,a._lastTZ=c);const h={x:u,z:c},m=[];for(let w=0;w<ti.length;w++){if(w===r)continue;const R=ti[w].group.position.x,C=ti[w].group.position.z;(R-u)*(R-u)+(C-c)*(C-c)<100&&m.push({x:R,z:C})}const M=Xg(h,m,1.5),v=m.length>0?qg(h,m):{x:0,z:0},y=M.x*2+v.x*.3,T=M.z*2+v.z*.3,E=Math.sqrt(y*y+T*T);switch(a.state){case"idle":{if(a.idleTimer-=i,l.position.y=a._baseY+Math.sin(t*2+a.phase)*.02,l.rotation.y+=Math.sin(t*.5+a.phase)*i*.3,E>.1&&m.length>1&&(l.position.x+=v.x*.05*i,l.position.z+=v.z*.05*i),Math.random()<4e-4){const w=Zp(u,c);Vp({x:u,z:c},Z.pos,w,o)}if(a.idleTimer<=0){const w=E>.2?Math.atan2(y,T):0;a.state="hop",a.wanderAng+=(Math.random()-.5)*1.5+w*.3,a.hopTimer=0}break}case"hop":{a.hopTimer+=i;const R=a.hopTimer/1.2;if(R>=1)a.state="idle",a.idleTimer=(1.5+Math.random()*3)*s,l.position.y=a._baseY;else{l.position.y=a._baseY+Math.sin(R*Math.PI)*.3,l.position.x+=Math.sin(a.wanderAng)*a.speed*n*i,l.position.z+=Math.cos(a.wanderAng)*a.speed*i;const C=1-Math.sin(R*Math.PI)*.15,D=1+Math.sin(R*Math.PI)*.2;l.scale.set(C,D,C),l.rotation.y=a.wanderAng}break}case"startled":{a._scaredT-=i,a.hopTimer+=i*1.5;const w=Math.min(a.hopTimer/.8,1);l.position.y=a._baseY+Math.sin(w*Math.PI)*.5,l.position.x+=Math.sin(a.wanderAng)*a.speed*2*i+M.x*.5*i,l.position.z+=Math.cos(a.wanderAng)*a.speed*2*i+M.z*.5*i,l.scale.set(.85,1.3,.85),a._scaredT<=0&&(a.state="idle",a.idleTimer=3+Math.random()*3,l.position.y=a._baseY,l.scale.set(1,1,1));break}case"following":{if(a._followT-=i,d>225||Pr<3||a._followT<=0){a.state="idle",a.idleTimer=2;break}if(a.wanderAng=Math.atan2(Z.pos.x-u,Z.pos.z-c),d>9){a.hopTimer+=i;const w=a.hopTimer%1.5/1.5;l.position.y=a._baseY+Math.sin(w*Math.PI)*.2,l.position.x+=Math.sin(a.wanderAng)*a.speed*.4*i,l.position.z+=Math.cos(a.wanderAng)*a.speed*.4*i}else l.position.y=a._baseY+Math.sin(t*3+a.phase)*.03;if(Math.random()<.001&&Vp({x:u,z:c},Z.pos,!0,o),d<25&&Math.random()<3e-4){const w=Zp(u,c);let R=!1;for(let U=0;U<On.length;U++){if(On[U].found)continue;const H=u-On[U].x,G=c-On[U].z;if(H*H+G*G<400){R=!0;break}}const C=Od()!==null,D=mE(l,w,R,o,C);D&&JT(D,{x:u,z:c},Z.pos)}if(a.ears){const R=Math.atan2(Z.pos.x-u,Z.pos.z-c)-l.rotation.y;for(let C=0;C<a.ears.length;C++){const D=a.ears[C];D.mesh.rotation.z=D.baseRotZ+R*.15*D.side}}l.rotation.y=a.wanderAng;break}case"huddle":{if(!ps){a.state="idle",a.idleTimer=2;break}const w=ti[a._huddleTarget];if(w){const R=w.group.position.x-u,C=w.group.position.z-c,D=Math.sqrt(R*R+C*C);D>.5&&(l.position.x+=R/D*a.speed*.5*i,l.position.z+=C/D*a.speed*.5*i)}l.rotation.z=Math.sin(t*8)*.05,l.position.y=a._baseY;break}}if(a._blinkTimer-=i,a._blinkTimer<=0)if(a._blinkState===0){for(let w=0;w<a.eyes.length;w++)a.eyes[w].scale.y=.1;a._blinkState=1,a._blinkTimer=.08+Math.random()*.06}else{for(let w=0;w<a.eyes.length;w++)a.eyes[w].scale.y=1;a._blinkState=0,a._blinkTimer=2+Math.random()*5}for(let w=0;w<a.ears.length;w++){const R=a.ears[w];R.mesh.rotation.z=R.baseRotZ+Math.sin(t*3.5+R.side*1.2+a.phase)*.08}a.tail.position.y=.38+Math.sin(t*4+a.phase)*.015;const b=d<64?1+o*.8:1,A=d<64?1+o*2:1;if(a.sparkles)for(let w=0;w<a.sparkles.length;w++){const R=a.sparkles[w],C=t*(2+w*.7)*A+R.phase;R.mesh.position.set(Math.cos(C)*R.orbitR,.5+Math.sin(C*1.3)*.1,Math.sin(C)*R.orbitR),R.mat.opacity=(.3+Math.sin(t*4+R.phase)*.3)*Ee(l.position.x,l.position.z,ve*Se)*b}a.crownMat&&(a.crownMat.emissiveIntensity=(.4+Math.sin(t*1.5+a.phase)*.3)*Ee(l.position.x,l.position.z,ve*Se)*b),d<64&&o>.1&&a.bodyMat?a.bodyMat.emissiveIntensity=.3+o*.4+(ia>0?ia*3:0):a.bodyMat&&(a.bodyMat.emissiveIntensity=.3),l.position.x*l.position.x+l.position.z*l.position.z>jt*.85*(jt*.85)&&(a.wanderAng+=Math.PI)}Wb(i,e,Nc),Yb()&&(ia=.5,jT(ch,Z.pos)),ia>0&&(ia-=i)}function tx(i,t){const e=We.ShiftLeft||We.ShiftRight||Nr;for(let n=0;n<en.length;n++){const s=en[n],o=s.group,r=o.position.x,a=o.position.z,l=r-Z.pos.x,u=a-Z.pos.z,c=l*l+u*u;if(c>3600){o.visible=!1;continue}o.visible=!0;const p=Math.atan2(l,u),f=e?18:12,d=f*f,g=e?10:R2,x=g*g,h=r-s._lastTX,m=a-s._lastTZ;h*h+m*m>.25&&(s._baseY=Dt(r,a),s._lastTX=r,s._lastTZ=a);const M=s._baseY;if(s.state!=="flee"&&s.state!=="alert"&&s.state!=="watching"){const R={x:r,z:a},C={x:Z.pos.x,z:Z.pos.z};c<x||vE(R,C,g,e)?(s.state="flee",s.wanderAng=p,s.fleeTimer=2.5+Math.random()*2,s._zigTimer=0,Ir("deer",R,Z.pos)):(c<d||xE(R,s.wanderAng,C,f,Math.PI*.5))&&(s.state="alert",s._stT=1+Math.random()*1.5,Ir("deer",R,Z.pos))}if(s.state!=="flee")for(let R=0;R<en.length;R++){if(R===n||en[R].state!=="flee")continue;const C=en[R].group.position.x-r,D=en[R].group.position.z-a;if(C*C+D*D<400){s.state="flee",s.wanderAng=en[R].wanderAng+(Math.random()-.5)*.4,s.fleeTimer=2+Math.random()*1.5,s._zigTimer=0;break}}const v=[];for(let R=0;R<en.length;R++){if(R===n)continue;const C=en[R].group.position.x,D=en[R].group.position.z;(C-r)*(C-r)+(D-a)*(D-a)<400&&v.push({x:C,z:D})}const y=Xg({x:r,z:a},v,3),T=v.length>0?qg({x:r,z:a},v):{x:0,z:0};(s.state==="alert"||s.state==="watching")&&(s.headLook+=(p-s.wanderAng)*.3*i);let E=s.speed,b=!1;switch(s.state){case"walk":{if(b=!0,s.walkTimer-=i,s.walkTimer<=0){const C=Math.random(),D=Xe==="DUSK"?.55:.4,U=Xe==="DEEP_NIGHT"?.25:.1;if(C<.25)s.state="pause",s.pauseTimer=2+Math.random()*3;else if(C<D)s.state="graze",s._stT=Xe==="DUSK"?5+Math.random()*6:3+Math.random()*4;else if(C<D+.1&&ke.length>0){s.state="drink",s._stT=8;let H=1/0;for(let G=0;G<ke.length;G++){const O=ke[G].x-r,k=ke[G].z-a,nt=O*O+k*k;nt<H&&(H=nt,s._drinkTgt=ke[G])}}else C<D+.1+U?(s.state="rest",s._stT=Xe==="DEEP_NIGHT"?8+Math.random()*8:5+Math.random()*5):(s.wanderAng+=(Math.random()-.5)*1.2,s.walkTimer=3+Math.random()*5)}if((r-s.homeX)*(r-s.homeX)+(a-s.homeZ)*(a-s.homeZ)>400){const C=Math.atan2(s.homeX-r,s.homeZ-a);s.wanderAng+=(C-s.wanderAng)*i*.5}if(v.length>0){const C=Math.atan2(T.x*.15+y.x*.8,T.z*.15+y.z*.8);s.wanderAng+=(C-s.wanderAng)*i*.3}break}case"pause":{s.pauseTimer-=i,s.headLook=Math.sin(t*.6)*.4,s.pauseTimer<=0&&(s.state="walk",s.walkTimer=3+Math.random()*5);break}case"graze":{s._stT-=i,s.headBob=-.5,s._stT<=0&&(s.state="walk",s.walkTimer=2+Math.random()*4,s.headBob=0);break}case"drink":{if(s._stT-=i,s._drinkTgt){const R=s._drinkTgt.x-r,C=s._drinkTgt.z-a;Math.sqrt(R*R+C*C)>2?(s.wanderAng=Math.atan2(R,C),b=!0,E=s.speed*.7):s.headBob=-.6}s._stT<=0&&(s.state="walk",s.walkTimer=3+Math.random()*4,s.headBob=0,s._drinkTgt=null);break}case"rest":{s._stT-=i,o.position.y=Math.max(M-.3,o.position.y-i*.5),s._stT<=0&&(s.state="walk",s.walkTimer=2+Math.random()*3);break}case"alert":{s._stT-=i,c<x?(s.state="flee",s.wanderAng=p,s.fleeTimer=2.5+Math.random()*2):s._stT<=0&&(c<f*1.2*(f*1.2)?(s.state="watching",s._stT=3+Math.random()*3):(s.state="walk",s.walkTimer=2+Math.random()*3));break}case"watching":{s._stT-=i,b=!0,E=s.speed*.3,s.wanderAng=p,c<x?(s.state="flee",s.wanderAng=p,s.fleeTimer=2.5+Math.random()*2):(c>f*1.5*(f*1.5)||s._stT<=0)&&(s.state="walk",s.walkTimer=2+Math.random()*4);break}case"flee":{b=!0,E=s.speed*C2,s.fleeTimer-=i,s._zigTimer-=i,s._zigTimer<=0&&(s._zigDir*=-1,s._zigTimer=.4+Math.random()*.4),s.wanderAng=p+s._zigDir*.3;const R=_E({x:r,z:a},s.wanderAng,Xt,3,1.5);R.x*R.x+R.z*R.z>.01&&(s.wanderAng+=Math.atan2(R.z,R.x)*.3);const C=ME({x:r,z:a},8);(C.x!==0||C.z!==0)&&(s.wanderAng=Math.atan2(C.z,C.x)),(s.fleeTimer<=0||c>f*2*(f*2))&&(s.state="walk",s.walkTimer=3+Math.random()*5);break}}if(b&&(o.position.x+=Math.sin(s.wanderAng)*E*i,o.position.z+=Math.cos(s.wanderAng)*E*i,s.legCycle+=i*E*3),o.position.x*o.position.x+o.position.z*o.position.z>jt*.9*(jt*.9)&&(s.wanderAng=Math.atan2(-o.position.x,-o.position.z)),s.state!=="rest"){const R=M-o.position.y;Math.abs(R)>.01?o.position.y+=Math.sign(R)*Math.min(Math.abs(R),i*2):o.position.y=M}if(o.rotation.y=s.wanderAng,s.state==="alert"||s.state==="watching"){const R=p-s.wanderAng;s.headLook+=(R*.5-s.headLook)*i*3}const S=s.headBob||0;s.neckPivot.rotation.x+=(S-s.neckPivot.rotation.x)*i*3,s.neckPivot.rotation.y+=(s.headLook-s.neckPivot.rotation.y)*i*4,b&&s.state!=="graze"&&s.state!=="drink"&&(s.neckPivot.rotation.x+=Math.sin(s.legCycle*2)*.05);for(let R=0;R<s.legPivots.length;R++){const C=s.legPivots[R];if(b){const D=C.isFront?0:Math.PI,U=C.side>0?Math.PI:0,H=Math.sin(s.legCycle+D+U)*.4*(E/s.speed);C.upper.rotation.x=H,C.lower.rotation.x=Math.max(0,-H*.6)}else s.state==="rest"&&o.position.y<-.1?(C.upper.rotation.x+=(.8-C.upper.rotation.x)*i*2,C.lower.rotation.x+=(1-C.lower.rotation.x)*i*2):(C.upper.rotation.x*=.9,C.lower.rotation.x*=.9)}s.tailPivot.rotation.x=Math.sin(t*1.5+s.phase)*.15,s.state==="flee"&&(s.tailPivot.rotation.x+=.3),s.state==="alert"?s.tailPivot.rotation.z=Math.sin(t*6)*.1:s.tailPivot.rotation.z*=.9;const w=Ee(r,a,ve*Se);if(s.mat.emissiveIntensity=(.6+Math.sin(t*.8+s.phase)*.3)*w,s.headLook*=.98,s.manePlanes)for(let R=0;R<s.manePlanes.length;R++)s.manePlanes[R].rotation.z=Math.sin(t*3+R*1.2+s.phase)*.15;if(s.branchOrbs)for(let R=0;R<s.branchOrbs.length;R++)s.branchOrbs[R].material.opacity=(.3+Math.sin(t*2.5+s.phase+R*1.5)*.3)*w;if(s.trailSpheres){const R=s.state==="walk"||s.state==="flee";for(let C=0;C<s.trailSpheres.length;C++){const D=s.trailSpheres[C],U=.03+C*.02;D.prevX+=(r-D.prevX)*U,D.prevY+=(o.position.y+.8-D.prevY)*U,D.prevZ+=(a-D.prevZ)*U,D.mesh.position.set(D.prevX,D.prevY+Math.sin(t*2+C*1.5)*.04,D.prevZ),D.mat.opacity=R?(.12-C*.03)*w:.02*w}}}}function ex(i,t){for(let e=0;e<Lr.length;e++){const n=Lr[e],s=n.group,o=s.position.x,r=s.position.z,a=o-Z.pos.x,l=r-Z.pos.z;if(a*a+l*l>2025){s.visible=!1;continue}if(s.visible=!0,n._state==="patrol"){if(Math.random()<.002){let m=1/0,M=null;for(let v=0;v<ae.length;v++){const y=ae[v].x-o,T=ae[v].z-r,E=y*y+T*T;E<900&&E<m&&(m=E,M=ae[v])}for(let v=0;v<oi.length;v++){if(oi[v].glowIntensity<.3)continue;const y=oi[v].x-o,T=oi[v].z-r,E=y*y+T*T;E<900&&E<m&&(m=E,M=oi[v])}M&&(n._state="attracted",n._attractTarget=M,n._stT=6+Math.random()*8,Ir("moth",{x:o,z:r},Z.pos))}const h=Xe==="DAWN"?.005:Xe==="DEEP_NIGHT"?3e-4:.001;if(Math.random()<h){let m=1/0,M=null;for(let v=0;v<Xt.length;v++){const y=Xt[v].x-o,T=Xt[v].z-r,E=y*y+T*T;E<400&&E<m&&(m=E,M=Xt[v])}M&&(n._state="rest",n._restTree=M,n._stT=Xe==="DAWN"?8+Math.random()*10:4+Math.random()*6)}}const u=Xe==="DEEP_NIGHT"?1.6:Xe==="DAWN"?.5:1,c=Xe==="DEEP_NIGHT"?1.4:1;switch(n._state){case"patrol":{n.orbitAng+=i*.4*u;const h=n.centerX+Math.cos(n.orbitAng)*n.orbitR*c,m=n.centerZ+Math.sin(n.orbitAng)*n.orbitR*c;s.position.x+=(h-o)*i*1.5,s.position.z+=(m-r)*i*1.5,s.position.y=n.floatY+Math.sin(t*.7+n.phase)*.8,s.rotation.y=n.orbitAng+Math.PI/2;break}case"attracted":{if(n._stT-=i,!n._attractTarget||n._stT<=0){n._state="patrol",n._attractTarget=null;break}n.orbitAng+=i*.8;const h=n._attractTarget,m=Math.max(.5,n._stT*.4),M=h.x+Math.cos(n.orbitAng)*m,v=h.z+Math.sin(n.orbitAng)*m;s.position.x+=(M-o)*i*2,s.position.z+=(v-r)*i*2,s.position.y+=(2-s.position.y)*i*.5,s.rotation.y=n.orbitAng+Math.PI/2;break}case"rest":{if(n._stT-=i,!n._restTree||n._stT<=0){n._state="patrol",n._restTree=null,n.centerX=s.position.x,n.centerZ=s.position.z;break}const h=n._restTree,m=h.x+.5-o,M=h.z+.5-r,v=Math.sqrt(m*m+M*M);v>.3&&(s.position.x+=m/v*i*2,s.position.z+=M/v*i*2),s.position.y+=(2.5-s.position.y)*i*1.5,s.rotation.y=Math.atan2(m,M);break}}const p=Dt(s.position.x,s.position.z);s.position.y<p+1.5&&(s.position.y=p+1.5);const f=n._state==="rest"?.05:.4,d=Math.sin(t*n.flapSpeed+n.phase)*f;for(let h=0;h<s._wingPivots.length;h++){const m=s._wingPivots[h];m.pivot.rotation.z=d*m.side}const g=Math.sin(t*1.5+n.phase)*.5+.5,x=n._state==="attracted"?.4:0;n.wingMat.emissiveIntensity=(.5+g*.6+x)*Ee(s.position.x,s.position.z,ve*Se),n.wingMat.opacity=.45+g*.25}}function VE(i,t){const e=We.ShiftLeft||We.ShiftRight||Nr;let n=null;if(Pr>5&&(cn==="SEEK"||cn==="RISING")){let s=1/0;for(let o=0;o<On.length;o++){if(On[o].found)continue;const r=On[o].x-Z.pos.x,a=On[o].z-Z.pos.z,l=r*r+a*a;l<s&&(s=l,n=On[o])}}for(let s=0;s<kl.length;s++){const o=kl[s],r=t*.5+o.phase+s/qm*6.28,a=e?4+s*2:1.5+s*.8,l=e?3+s:1.2+Math.sin(t*.7+o.phase)*.5;if(o.targetX=Z.pos.x+Math.cos(r)*a,o.targetY=Z.pos.y-Yl+l,o.targetZ=Z.pos.z+Math.sin(r)*a,s===0&&n){const g=Math.min((Pr-5)/3,.6);o.targetX+=(n.x-Z.pos.x)*g,o.targetZ+=(n.z-Z.pos.z)*g,o.targetY+=.5}const u=e?.8:2.5;o.velX+=(o.targetX-o.group.position.x)*u*i,o.velY+=(o.targetY-o.group.position.y)*u*i,o.velZ+=(o.targetZ-o.group.position.z)*u*i,o.velX*=.92,o.velY*=.92,o.velZ*=.92,o.group.position.x+=o.velX*i*4,o.group.position.y+=o.velY*i*4,o.group.position.z+=o.velZ*i*4;const c=Math.sin(t*2+o.phase)*.5+.5;o.glowMat.opacity=.3+c*.4,o.hazeMat.opacity=.08+c*.12;const p=t*(2.5+s*.5)+o.phase,f=.14+Math.sin(t*1.3+o.phase)*.06;o.group.children[5].position.set(Math.cos(p)*f,Math.sin(p*1.5)*.08,Math.sin(p)*f);for(let g=0;g<o.tendrils.length;g++){const x=o.tendrils[g],h=Math.sin(t*3+g*2.1+o.phase)*.3,m=.08+Math.sin(t*2+g*1.5)*.04;x.mesh.position.x=Math.cos(x.baseAng+h)*m,x.mesh.position.z=Math.sin(x.baseAng+h)*m,x.mesh.rotation.y=x.baseAng+h,x.mesh.rotation.z=Math.PI/3+Math.sin(t*2.5+g)*.2}for(let g=0;g<o.embers.length;g++){const x=(g+1)*.08;o.embers[g].position.y=-.06-x+Math.sin(t*4+g*1.4+o.phase)*.03,o.embers[g].position.x=Math.sin(t*2.5+g*2+o.phase)*.06,o.embers[g].material.opacity=.2+Math.sin(t*5+g*1.7)*.15}o.facet.rotation.y+=i*1.5,o.facet.rotation.x+=i*.7,o.halo.rotation.z+=i*.3,o.halo2.rotation.y+=i*.2}}function WE(i,t){for(let e=0;e<oi.length;e++){const n=oi[e],s=n.x-Z.pos.x,o=n.z-Z.pos.z,a=s*s+o*o<(nf+.5)*(nf+.5),l=a?1:0;n.glowIntensity+=(l-n.glowIntensity)*i*3,n.discMat.opacity=n.glowIntensity*.25*(.6+Math.sin(t*2+n.phase)*.4),n.mushMat.emissiveIntensity=(.2+n.glowIntensity*.8)*Ee(n.x,n.z,ve*Se),a&&Z.vel.y>0&&Z.vel.y<=vl+.5&&(Z.vel.y=vl+_2,n.glowIntensity=1.5,QT());const u=.08+n.glowIntensity*.25;n.sporeMat.opacity=u;for(let c=0;c<n.spores.length;c++){const p=n.spores[c];p.drift+=i*.3,p.mesh.position.y+=p.speed*i*(.5+n.glowIntensity),p.mesh.position.x=p.baseX+Math.sin(t*.8+p.drift)*.15,p.mesh.position.z=p.baseZ+Math.cos(t*.6+p.drift)*.12,p.mesh.position.y>.8&&(p.mesh.position.y=.03),p.mesh.scale.setScalar(.6+Math.sin(t*2+c)*.4)}for(let c=0;c<n.glowWorms.length;c++){const p=Math.sin(t*1.5+c*1.3+n.phase)*.5+.5;n.glowWorms[c].material.opacity=.1+p*.4+n.glowIntensity*.3}}}function XE(i,t){for(let e=0;e<Bi.length;e++){const n=Bi[e];if(n.popped){if(n.popTimer-=i,n.popTimer<=0){n.popped=!1,n.group.visible=!0;const c=_()*6.28,p=8+_()*jt*.5;n.homeX=Math.cos(c)*p,n.homeZ=Math.sin(c)*p,n.floatY=.5+_()*4,n.group.position.set(n.homeX,n.floatY,n.homeZ)}continue}n.driftAng+=i*.2;const s=n.homeX+Math.sin(n.driftAng)*3,o=n.homeZ+Math.cos(n.driftAng*.7)*3;n.group.position.x+=(s-n.group.position.x)*i*.5,n.group.position.z+=(o-n.group.position.z)*i*.5,n.group.position.y=n.floatY+Math.sin(t*.6+n.phase)*n.bobAmp;const r=(t*.1+n.phase)%1;n.shellMat.color.setRGB(Math.sin(r*6.28)*.15+.7,Math.sin(r*6.28+2.09)*.15+.7,Math.sin(r*6.28+4.19)*.15+.8),n.shellMat.opacity=.18+Math.sin(t*1.5+n.phase)*.08;const a=n.group.position.x-Z.pos.x,l=n.group.position.y-Z.pos.y,u=n.group.position.z-Z.pos.z;a*a+l*l+u*u<ap*ap*n.sc*n.sc&&(n.popped=!0,n.popTimer=8+Math.random()*8,n.group.visible=!1,Eb(n.group.position.x,n.group.position.y,n.group.position.z,6),HT(n.group.position,Z.pos))}}function qE(i,t){const e=_a();for(let n=0;n<ke.length;n++){const s=ke[n],o=.015+e*.01;for(let f=0;f<s.pads.length;f++)s.pads[f].mesh.position.y=.05+Math.sin(t*(.8+e*.4)+s.pads[f].phase)*o;const r=e*.08,a=Ee(s.x,s.z,ve*Se);s.waterMat.emissiveIntensity=(.15+r+Math.sin(t*1+s.phase)*.1)*a;const l=Math.sin(t*1.2+s.phase)*.5+.5;s.flMat.emissiveIntensity=(.3+l*.5)*a;const u=.25+e*.2,c=.12+e*.08;for(let f=0;f<s.ripples.length;f++){const d=s.ripples[f],g=(t*u+d.phase)%1,x=.2+g*s.pondR*.8;d.mesh.scale.setScalar(x),d.mesh.material.opacity=(1-g)*c}const p=1+e*.5;for(let f=0;f<s.tadpoles.length;f++){const d=s.tadpoles[f];d.ang+=d.speed*p*i;const g=Math.cos(d.ang)*d.orbR,x=Math.sin(d.ang)*d.orbR;d.body.position.x=g,d.body.position.z=x,d.body.rotation.y=d.ang+Math.PI/2;const h=.02;d.tail.position.x=g-Math.cos(d.ang)*h,d.tail.position.z=x-Math.sin(d.ang)*h,d.tail.rotation.y=d.ang,d.tail.rotation.z=Math.PI/2+Math.sin(t*(8+e*2)+f*3)*.4}}}function YE(i,t){if(lh-=i,lh<=0){lh=.5;for(let o=0;o<ae.length;o++){const r=ae[o],a=r.x-Z.pos.x,l=r.z-Z.pos.z;if(a*a+l*l<36){di={x:r.x,z:r.z},Ni=0;break}}}const e=kE();if(!di){e.visible=!1;return}if(Ni+=i*12,Ni>30){di=null,Ni=0,e.visible=!1;return}e.visible=!0,e.position.set(di.x,.15,di.z),e.scale.setScalar(Ni),e.material.opacity=(1-Ni/30)*.45;const n=Ni,s=4;for(let o=0;o<Zn.length;o++){const r=Zn[o],a=r.x-di.x,l=r.z-di.z,u=Math.sqrt(a*a+l*l);if(Math.abs(u-n)<s){const c=1-Math.abs(u-n)/s;r.capMat.emissiveIntensity=Math.max(r.capMat.emissiveIntensity,(r.base+c*2)*Ee(r.x,r.z,ve*Se))}}for(let o=0;o<Wi.length;o++){const r=Wi[o],a=r.group.position.x-di.x,l=r.group.position.z-di.z,u=Math.sqrt(a*a+l*l);if(Math.abs(u-n)<s){const c=1-Math.abs(u-n)/s;r.petalMat.emissiveIntensity=Math.max(r.petalMat.emissiveIntensity,(.3+c*1.5)*Ee(r.group.position.x,r.group.position.z,ve*Se))}}}function ZE(i,t){const e=Z.pos.x;Z.pos.y;const n=Z.pos.z,s=_a(),o=ps?.6:s>.3?s*.4:0;for(let u=0;u<Wi.length;u++){const c=Wi[u],p=c.group.position.x,f=c.group.position.z,d=p-e,g=f-n,h=d*d+g*g<16?1:0;c._react=c._react||0,c._react+=(h-c._react)*i*(h>0?4:1.5);const m=(1+c._react*.15)*(1-o*.12),M=(1+c._react*.05)*(1-o*.15);c.group.scale.set(m,M,m),c.petalMat.emissiveIntensity+=c._react*.6*Ee(p,f,ve*Se)*(1-o*.4)}for(let u=0;u<Zn.length;u++){const c=Zn[u],p=c.x-e,f=c.z-n,g=p*p+f*f<4?1:0;c._touch=c._touch||0,c._touch+=(g-c._touch)*i*(g>0?6:1.5);const x=s*.4;c.capMat.emissiveIntensity+=(c._touch*1.5+x)*Ee(c.x,c.z,ve*Se);const h=1+c._touch*.08;c.group.scale.set(h,1+c._touch*.04,h)}for(let u=0;u<Na.length;u++){const c=Na[u],p=c.group.position.x,f=c.group.position.z,d=p-e,g=f-n,h=d*d+g*g<2.25?.65:1;c._curl=c._curl===void 0?1:c._curl,c._curl+=(h-c._curl)*i*(h<1?4:1.5),c.group.scale.set(1+(1-c._curl)*.3,c._curl,1+(1-c._curl)*.3)}GE();const r=gr==="FOG_BANK"?.5:1;let a=0,l=0;for(let u=0;u<ae.length;u++){const c=ae[u],p=c.x-e,f=c.z-n;if(p*p+f*f<36)for(let d=0;d<ae.length;d++){if(u===d)continue;const g=ae[d],x=c.x-g.x,h=c.z-g.z,m=x*x+h*h;if(m<400){a++;const M=(1-Math.sqrt(m)/20)*.8*r;if(g.mat.emissiveIntensity+=M*Ee(g.x,g.z,ve*Se),l<id){const v=sd[l],y=v.geo.attributes.position.array,T=1,E=1;y[0]=c.x,y[1]=T,y[2]=c.z,y[3]=g.x,y[4]=E,y[5]=g.z,v.geo.attributes.position.needsUpdate=!0,v.geo.computeBoundingSphere(),v.active=!0;const b=Math.sin(t*3+u*1.5+d*.7)*.3+.5;v.opacity=M*b*Ee(c.x,c.z,ve*Se),v.line.material.opacity=v.opacity,v.line.visible=!0,l++}}}}for(let u=l;u<id;u++){const c=sd[u];c.line.visible&&(c.opacity*=.85,c.line.material.opacity=c.opacity,c.opacity<.01&&(c.line.visible=!1))}return a}let Fc="EXPLORE",uh=0,hh=0;function $E(i,t){let e=!1;for(let x=0;x<ae.length;x++){const h=ae[x].x-Z.pos.x,m=ae[x].z-Z.pos.z;if(h*h+m*m<64){e=!0;break}}Fc=e?"NEAR_CRYSTAL":"EXPLORE",uh+=i;const n=_a(),s=Math.max(.2,1-n*.8),o=(Fc==="NEAR_CRYSTAL"?.08:.25)/s,r=Math.floor((Fc==="NEAR_CRYSTAL"?120:100)*s);if(uh>o&&(uh=0,vg(0,t)<r))if(Fc==="NEAR_CRYSTAL")for(let h=0;h<ae.length;h++){const m=ae[h].x-Z.pos.x,M=ae[h].z-Z.pos.z;m*m+M*M<100&&qc(ae[h].x,Dt(ae[h].x,ae[h].z)+1,ae[h].z,3+Math.random()*4)}else if(Math.random()<.3&&Wi.length>0){const h=Wi[Math.floor(Math.random()*Wi.length)];if(h._react>.3){const m=h.group.position.x,M=h.group.position.z;qc(m+(Math.random()-.5)*2,Dt(m,M)+.5,M+(Math.random()-.5)*2,4+Math.random()*6)}}else{const h=Math.random()*6.28,m=5+Math.random()*25,M=Z.pos.x+Math.cos(h)*m,v=Z.pos.z+Math.sin(h)*m;qc(M,Dt(M,v),v,6+Math.random()*10)}if(hh+=i,hh>.2){hh=0;for(let x=0;x<Zn.length;x++){const h=Zn[x],m=h.x-Z.pos.x,M=h.z-Z.pos.z;m*m+M*M<200&&Math.random()<.15&&xb(h.x,.6*h.group.scale.x,h.z)}}for(let x=0;x<Zn.length;x++){const h=Zn[x],m=h.x-Z.pos.x,M=(h.group.position.y||0)-Z.pos.y,v=h.z-Z.pos.z;if(m*m+M*M+v*v>2500){h.group.visible&&(h.group.visible=!1);continue}h.group.visible||(h.group.visible=!0);const T=Math.sin(t*h.speed+h.phase)*.5+.5;h.capMat.emissiveIntensity=h.base*(.7+T*1)*Ee(h.x,h.z,ve*Se)}for(let x=0;x<ae.length;x++){const h=ae[x],m=Math.sin(t*.6+h.phase)*.5+.5,M=Ee(h.x,h.z,ve*Se);h.mat.emissiveIntensity=(1+m*1.5)*M,h.group.children[0].rotation.y+=i*.15,h.light&&(h.light.intensity=(.3+m*.4)*M)}if(!ws.length)for(let x=0;x<ae.length;x++)ws.push({idx:x,dist:0});const a=Z.pos.x-$p,l=Z.pos.z-jp;if(a*a+l*l>1){$p=Z.pos.x,jp=Z.pos.z;for(let x=0;x<ae.length;x++){const h=ae[x],m=h.x-Z.pos.x,M=h.z-Z.pos.z;ws[x].idx=x,ws[x].dist=m*m+M*M}ws.sort((x,h)=>x.dist-h.dist)}for(let x=0;x<Ys.length;x++)if(x<ws.length&&ws[x].dist<2500){const h=ae[ws[x].idx],m=Math.sin(t*.6+h.phase)*.5+.5;Ys[x].position.set(h.x,1.5,h.z),Ys[x].intensity=(1.5+m*2)*Ee(h.x,h.z,ve*Se),Ys[x].distance=16,Ys[x].color.setHex(z.crystal)}else Ys[x].intensity=0;if(fs>.8&&Math.random()<.005)for(let x=0;x<ba.length;x++){const h=ba[x];if(!h.dispersed&&Math.random()<.1){h.dispersed=!0;for(let m=0;m<8;m++)ag(h.x,h.h+.05,h.z);for(let m=2;m<h.group.children.length;m++)h.group.children[m].visible=!1;h.regrowTimer=15+Math.random()*10}}const u=fs>.3?(fs-.3)*.02:0,c=ps?.03:0;if(Math.random()<u+c)for(let x=0;x<Xt.length;x++){const h=Xt[x],m=h.x-Z.pos.x,M=h.z-Z.pos.z;if(m*m+M*M<900&&Math.random()<.15){const v=(h.treeH||10)*.7+(h.y||0);Pb(h.x,v,h.z);break}}Jg(i,t),Qg(i,t),tx(i,t),ex(i,t),sg(i,t),Kg(i,t);const p=Z.pos.x,f=Z.pos.y,d=Z.pos.z;for(let x=0;x<Ti.length;x++){const h=Ti[x],m=h.x||h.group.position.x,M=h.z||h.group.position.z,v=m-p,y=(h.group.position.y||0)-f,T=M-d,E=v*v+y*y+T*T;if(E>2500){h.group.visible&&(h.group.visible=!1);continue}if(h.group.visible||(h.group.visible=!0),!h.sparkles||E>400)continue;let b=0;for(let D=0;D<ae.length;D++){const U=ae[D].x-m,H=ae[D].z-M,G=U*U+H*H;G<100&&(b=Math.max(b,(1-Math.sqrt(G)/10)*.6))}const A=m-Z.pos.x,S=M-Z.pos.z,w=A*A+S*S,R=w<25?(1-Math.sqrt(w)/5)*.3:0;let C=0;if(di&&Ni>0){const D=m-di.x,U=M-di.z,H=Math.sqrt(D*D+U*U);Math.abs(H-Ni)<3&&(C=(1-Math.abs(H-Ni)/3)*.8)}for(let D=0;D<h.sparkles.length;D++){const U=Math.sin(t*4+x*2.3+D*1.7)*.35;h.sparkles[D].material.opacity=.15+U+b+R+C}h.mossMat&&R>0&&(h.mossMat.emissiveIntensity=.05+R*.4*Math.sin(t*2+x)*.5+.5)}VE(i,t),LS(ba,i,t,Z.pos),WE(i,t),XE(i,t),qE(i,t),wg(i,t,Z.pos),PS(i,t),Ib(i,t),Sb(i),Ab(i),Bb(i,t),YE(i);const g=ZE(i,t);if(tT(i,t),db(t),Z.onGround&&Z.vel.x*Z.vel.x+Z.vel.z*Z.vel.z>.5){const h=Math.atan2(Z.vel.x,Z.vel.z),m=We.ShiftLeft||We.ShiftRight||Nr;Ub(Z.pos.x,Z.pos.z,h,m)}zb(i,_a()),sE(i,Z.pos,ke,Yg,Xe,_a()),kT(i),PE(Z.pos,en,ti,Ei,Lr,oi,ke,g),LE(i),gE(i,sn.domElement)}let tn=0,od=!1;function jE(){od||(od=!0,k2(!0),BE())}function nx(){requestAnimationFrame(nx);const i=Math.min(Ym.getDelta(),.1);tn+=i,rT(i);const t=fT(i,tn,Z.pos);pT(i,Z.pos,t,ro,ir),rS(i,tn,Xe,ve,gr),bE(i),Se=1.15+Qn*.05;const e=Math.min(Qn,xn);Jp.set(Rd[e]),Kp.lerp(Jp,Math.min(2*i,1)),je.color.copy(Kp),je.intensity=E2[e],je.distance=A2[e];const n=Ee(Z.pos.x,Z.pos.z,1),s=ar+(1-ar)*(Qn/xn),o=n*.7+s*.3;Ta+=(o-Ta)*Math.min(8*i,1);const r=Ta;if(O2(r),sn.toneMappingExposure=.7+2.1*r,r<1){const u=1-r;ot.fog.density*=1+1.5*u,yl.intensity*=.15+.85*r,je.intensity*=.1+.9*r,je.distance*=.25+.75*r,Ko&&(Ko.threshold=.85+u*.35)}else Ko&&(Ko.threshold=.85);Oi>0&&(yl.intensity+=Oi*.8,ot.background.r=Math.min(ot.background.r+Oi*.08,.25),ot.background.g=Math.min(ot.background.g+Oi*.08,.25),ot.background.b=Math.min(ot.background.b+Oi*.12,.35));const a=Od();a==="puff"?(je.color.r+=(1-je.color.r)*2*i,je.color.g+=(.667-je.color.g)*2*i,je.color.b+=(.533-je.color.b)*2*i):a||(je.color.r+=(.4-je.color.r)*2*i,je.color.g+=(.533-je.color.g)*2*i,je.color.b+=(.533-je.color.b)*2*i),NT(i,fs,t,ps,Oi,Xe,Z.pos,ke),YT(Z.pos),Math.sqrt(Z.vel.x*Z.vel.x+Z.vel.z*Z.vel.z);let l=!1;for(let u=0;u<ke.length;u++){const c=ke[u].x-Z.pos.x,p=ke[u].z-Z.pos.z;if(c*c+p*p<225){l=!0;break}}if(!l)for(let u=0;u<oi.length;u++){const c=oi[u].x-Z.pos.x,p=oi[u].z-Z.pos.z;if(c*c+p*p<144){l=!0;break}}if(rE(i),vb(ro,ir),CS(ro,ir,fs),Rb(ro,ir),!od){pn.position.set(0,Yl,0),pn.rotation.order="YXZ",pn.rotation.y+=i*.08,pn.rotation.x=0;for(let u=0;u<Zn.length;u++){const c=Zn[u],p=Math.sin(tn*c.speed+c.phase)*.5+.5;c.capMat.emissiveIntensity=c.base*(.5+p*.8)*ve}for(let u=0;u<ae.length;u++){const c=ae[u];c.mat.emissiveIntensity=(1+Math.sin(tn*.6+c.phase)*.5*1.5+.75)*ve}Jg(i,tn),Qg(i,tn),tx(i,tn),ex(i,tn),sg(i,tn),Kg(i,tn),wg(i,tn,Z.pos);for(let u=0;u<Bi.length;u++)Bi[u].popped||(Bi[u].group.position.y=Bi[u].floatY+Math.sin(tn*.6+Bi[u].phase)*Bi[u].bobAmp);for(let u=0;u<ke.length;u++)for(let c=0;c<ke[u].pads.length;c++)ke[u].pads[c].mesh.position.y=.05+Math.sin(tn*.8+ke[u].pads[c].phase)*.015;for(let u=0;u<On.length;u++){const c=On[u],p=Math.sin(tn*1.5+c.phase)*.5+.5;c.group.position.y=c.flyY+Math.sin(tn*.8+c.phase)*.3,c.glowMat.opacity=.3+p*.4}up();return}uS(i),$E(i,tn),vg(i,tn),Mb(i),pn.position.copy(Z.pos),pn.position.y+=og,pn.rotation.order="YXZ",pn.rotation.y=La,pn.rotation.x=co,NE(i,Z.pos),up()}try{lf(0,0,5),Q2(),oT({scene:ot,moon:vi,moon2:Pd,hemiLight:yl,playerLight:je}),HE();const i=j2();cS(Xt,Ti),lS(Cp),aS(t=>{let e=!1;for(let n=0;n<ke.length;n++){const s=ke[n].x-Z.pos.x,o=ke[n].z-Z.pos.z;if(s*s+o*o<16){e=!0;break}}OT(t,e),Math.random()<.4&&Cp(Z.pos.x,Z.pos.z,1)},()=>BT(),t=>GT(t)),hT(),dT(),pb(150),gb(60),B2(),_b(l2),wb(20),RS(40),Tb(30),Cb(50),Db(),Fb(),oS(),cb(),hb(),fb(),zT(),RE(),dE(),zE(),FE(),wE(On),Qb({orbs:On,obeliskGroup:nb(),obeliskMat:ib(),obeliskGlowMat:sb(),pinnacleOrb:ob(),pinnacleRings:rb(),moatMesh:lb(),moatMat:ub(),rainbowArcs:za,player:Z,makeLaser:kb,orbHudEl:OE(),deers:en,puffs:ti,jellies:Ei,moths:Lr,trees:Xt,treeMeshes:Is,groundMesh:i,playOrbCollect:VT,playOrbWarble:WT,playLaserZap:XT,playLaserHum:qT,stopLaserHums:ZT,notifyOrbCollected:SE,playOrbReject:KT,showOrbRejectHint:()=>IE(),showOrbDiscovery:CE,spawnOrbBurst:Ob,startResonanceDrone:tE,runeFaces:ab()}),G2(jE);for(let t=0;t<50;t++){const e=Math.random()*6.28,n=3+Math.random()*jt*.7,s=Math.cos(e)*n,o=Math.sin(e)*n;qc(s,Dt(s,o),o,8+Math.random()*12)}console.log("✓ Init: trees="+Xt.length+" mush="+Zn.length+" crystals="+ae.length+" orbs="+On.length+" creatures="+(Ei.length+ti.length+en.length+Lr.length)+" wisps="+kl.length+" dandelions="+ba.length+" fairyRings="+oi.length+" bubbles="+Bi.length+" ponds="+ke.length+" scene="+ot.children.length),nx()}catch(i){console.error("INIT FAILED:",i),document.body.innerHTML='<div style="color:red;padding:30px;font-family:monospace"><h2>Init Failed</h2><pre>'+(i.stack||i.message)+"</pre></div>"}
