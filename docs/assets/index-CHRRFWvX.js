(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yd="172",Rx=0,a0=1,Cx=2,vm=1,Mm=2,ns=3,Bs=0,Mn=1,Ct=2,us=0,dr=1,Jt=2,c0=3,l0=4,Px=5,oo=100,Ix=101,Lx=102,Dx=103,Ux=104,Nx=200,zx=201,Fx=202,Ox=203,Eh=204,Ah=205,Bx=206,Gx=207,kx=208,Hx=209,Vx=210,Wx=211,Xx=212,qx=213,Yx=214,Rh=0,Ch=1,Ph=2,Pr=3,Ih=4,Lh=5,Dh=6,Uh=7,ym=0,Zx=1,$x=2,Os=0,jx=1,Kx=2,Jx=3,_m=4,Qx=5,tv=6,ev=7,wm=300,Ir=301,Lr=302,Nh=303,zh=304,su=306,Dr=1e3,ao=1001,Fh=1002,ai=1003,nv=1004,sc=1005,Xi=1006,pu=1007,co=1008,gs=1009,Sm=1010,bm=1011,Ba=1012,_d=1013,xo=1014,qi=1015,hs=1016,wd=1017,Sd=1018,Ur=1020,Tm=35902,Em=1021,Am=1022,Pi=1023,Rm=1024,Cm=1025,pr=1026,Nr=1027,bd=1028,Td=1029,Pm=1030,Ed=1031,Ad=1033,Qc=33776,tl=33777,el=33778,nl=33779,Oh=35840,Bh=35841,Gh=35842,kh=35843,Hh=36196,Vh=37492,Wh=37496,Xh=37808,qh=37809,Yh=37810,Zh=37811,$h=37812,jh=37813,Kh=37814,Jh=37815,Qh=37816,tf=37817,ef=37818,nf=37819,sf=37820,of=37821,il=36492,rf=36494,af=36495,Im=36283,cf=36284,lf=36285,uf=36286,iv=3200,sv=3201,Lm=0,ov=1,Cs="",On="srgb",zr="srgb-linear",Sl="linear",we="srgb",bo=7680,u0=519,rv=512,av=513,cv=514,Dm=515,lv=516,uv=517,hv=518,fv=519,bl=35044,ye=35048,h0="300 es",cs=2e3,Tl=2001;class Wr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mu=Math.PI/180,hf=180/Math.PI;function fs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function dv(i,t){return(i%t+t)%t}function gu(i,t,e){return(1-e)*i+e*t}function Vi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,s,o,r,a,l,u){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,u)}set(t,e,n,s,o,r,a,l,u){const c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=o,c[5]=l,c[6]=n,c[7]=r,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],u=n[1],c=n[4],p=n[7],f=n[2],d=n[5],g=n[8],x=s[0],h=s[3],m=s[6],M=s[1],v=s[4],_=s[7],T=s[2],E=s[5],b=s[8];return o[0]=r*x+a*M+l*T,o[3]=r*h+a*v+l*E,o[6]=r*m+a*_+l*b,o[1]=u*x+c*M+p*T,o[4]=u*h+c*v+p*E,o[7]=u*m+c*_+p*b,o[2]=f*x+d*M+g*T,o[5]=f*h+d*v+g*E,o[8]=f*m+d*_+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],u=t[7],c=t[8];return e*r*c-e*a*u-n*o*c+n*a*l+s*o*u-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],u=t[7],c=t[8],p=c*r-a*u,f=a*l-c*o,d=u*o-r*l,g=e*p+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=p*x,t[1]=(s*u-c*n)*x,t[2]=(a*n-s*r)*x,t[3]=f*x,t[4]=(c*e-s*l)*x,t[5]=(s*o-a*e)*x,t[6]=d*x,t[7]=(n*l-u*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),u=Math.sin(o);return this.set(n*l,n*u,-n*(l*r+u*a)+r+t,-s*u,s*l,-s*(-u*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xu.makeScale(t,e)),this}rotate(t){return this.premultiply(xu.makeRotation(-t)),this}translate(t,e){return this.premultiply(xu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xu=new Yt;function Um(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function El(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pv(){const i=El("canvas");return i.style.display="block",i}const f0={};function Jo(i){i in f0||(f0[i]=!0,console.warn(i))}function mv(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function gv(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xv(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const d0=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),p0=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vv(){const i={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===we&&(s.r=ds(s.r),s.g=ds(s.g),s.b=ds(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===we&&(s.r=mr(s.r),s.g=mr(s.g),s.b=mr(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cs?Sl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zr]:{primaries:t,whitePoint:n,transfer:Sl,toXYZ:d0,fromXYZ:p0,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:t,whitePoint:n,transfer:we,toXYZ:d0,fromXYZ:p0,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),i}const ue=vv();function ds(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let To;class Mv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{To===void 0&&(To=El("canvas")),To.width=t.width,To.height=t.height;const n=To.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=To}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=El("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=ds(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ds(e[n]/255)*255):e[n]=ds(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yv=0;class Nm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=fs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(vu(s[r].image)):o.push(vu(s[r]))}else o=vu(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function vu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _v=0;class yn extends Wr{constructor(t=yn.DEFAULT_IMAGE,e=yn.DEFAULT_MAPPING,n=ao,s=ao,o=Xi,r=co,a=Pi,l=gs,u=yn.DEFAULT_ANISOTROPY,c=Cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=fs(),this.name="",this.source=new Nm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dr:t.x=t.x-Math.floor(t.x);break;case ao:t.x=t.x<0?0:1;break;case Fh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dr:t.y=t.y-Math.floor(t.y);break;case ao:t.y=t.y<0?0:1;break;case Fh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=wm;yn.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,u=l[0],c=l[4],p=l[8],f=l[1],d=l[5],g=l[9],x=l[2],h=l[6],m=l[10];if(Math.abs(c-f)<.01&&Math.abs(p-x)<.01&&Math.abs(g-h)<.01){if(Math.abs(c+f)<.1&&Math.abs(p+x)<.1&&Math.abs(g+h)<.1&&Math.abs(u+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(u+1)/2,_=(d+1)/2,T=(m+1)/2,E=(c+f)/4,b=(p+x)/4,R=(g+h)/4;return v>_&&v>T?v<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(v),s=E/n,o=b/n):_>T?_<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(_),n=E/s,o=R/s):T<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(T),n=b/o,s=R/o),this.set(n,s,o,e),this}let M=Math.sqrt((h-g)*(h-g)+(p-x)*(p-x)+(f-c)*(f-c));return Math.abs(M)<.001&&(M=1),this.x=(h-g)/M,this.y=(p-x)/M,this.z=(f-c)/M,this.w=Math.acos((u+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wv extends Wr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new yn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Nm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends wv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class zm extends yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ai,this.minFilter=ai,this.wrapR=ao,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sv extends yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ai,this.minFilter=ai,this.wrapR=ao,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],u=n[s+1],c=n[s+2],p=n[s+3];const f=o[r+0],d=o[r+1],g=o[r+2],x=o[r+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=p;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(p!==x||l!==f||u!==d||c!==g){let h=1-a;const m=l*f+u*d+c*g+p*x,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const T=Math.sqrt(v),E=Math.atan2(T,m*M);h=Math.sin(h*E)/T,a=Math.sin(a*E)/T}const _=a*M;if(l=l*h+f*_,u=u*h+d*_,c=c*h+g*_,p=p*h+x*_,h===1-a){const T=1/Math.sqrt(l*l+u*u+c*c+p*p);l*=T,u*=T,c*=T,p*=T}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],u=n[s+2],c=n[s+3],p=o[r],f=o[r+1],d=o[r+2],g=o[r+3];return t[e]=a*g+c*p+l*d-u*f,t[e+1]=l*g+c*f+u*p-a*d,t[e+2]=u*g+c*d+a*f-l*p,t[e+3]=c*g-a*p-l*f-u*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,u=a(n/2),c=a(s/2),p=a(o/2),f=l(n/2),d=l(s/2),g=l(o/2);switch(r){case"XYZ":this._x=f*c*p+u*d*g,this._y=u*d*p-f*c*g,this._z=u*c*g+f*d*p,this._w=u*c*p-f*d*g;break;case"YXZ":this._x=f*c*p+u*d*g,this._y=u*d*p-f*c*g,this._z=u*c*g-f*d*p,this._w=u*c*p+f*d*g;break;case"ZXY":this._x=f*c*p-u*d*g,this._y=u*d*p+f*c*g,this._z=u*c*g+f*d*p,this._w=u*c*p-f*d*g;break;case"ZYX":this._x=f*c*p-u*d*g,this._y=u*d*p+f*c*g,this._z=u*c*g-f*d*p,this._w=u*c*p+f*d*g;break;case"YZX":this._x=f*c*p+u*d*g,this._y=u*d*p+f*c*g,this._z=u*c*g-f*d*p,this._w=u*c*p-f*d*g;break;case"XZY":this._x=f*c*p-u*d*g,this._y=u*d*p-f*c*g,this._z=u*c*g+f*d*p,this._w=u*c*p+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],u=e[2],c=e[6],p=e[10],f=n+a+p;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(c-l)*d,this._y=(o-u)*d,this._z=(r-s)*d}else if(n>a&&n>p){const d=2*Math.sqrt(1+n-a-p);this._w=(c-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+u)/d}else if(a>p){const d=2*Math.sqrt(1+a-n-p);this._w=(o-u)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+p-n-a);this._w=(r-s)/d,this._x=(o+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,u=e._z,c=e._w;return this._x=n*c+r*a+s*u-o*l,this._y=s*c+r*l+o*a-n*u,this._z=o*c+r*u+n*l-s*a,this._w=r*c-n*a-s*l-o*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),p=Math.sin((1-e)*c)/u,f=Math.sin(e*c)/u;return this._w=r*p+this._w*f,this._x=n*p+this._x*f,this._y=s*p+this._y*f,this._z=o*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(m0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(m0.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,u=2*(r*s-a*n),c=2*(a*e-o*s),p=2*(o*n-r*e);return this.x=e+l*u+r*p-a*c,this.y=n+l*c+a*u-o*p,this.z=s+l*p+o*c-r*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mu.copy(this).projectOnVector(t),this.sub(Mu)}reflect(t){return this.sub(Mu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mu=new F,m0=new nn;class yo{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Si):Si.fromBufferAttribute(o,r),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oc.copy(n.boundingBox)),oc.applyMatrix4(t.matrixWorld),this.union(oc)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jr),rc.subVectors(this.max,jr),Eo.subVectors(t.a,jr),Ao.subVectors(t.b,jr),Ro.subVectors(t.c,jr),vs.subVectors(Ao,Eo),Ms.subVectors(Ro,Ao),Vs.subVectors(Eo,Ro);let e=[0,-vs.z,vs.y,0,-Ms.z,Ms.y,0,-Vs.z,Vs.y,vs.z,0,-vs.x,Ms.z,0,-Ms.x,Vs.z,0,-Vs.x,-vs.y,vs.x,0,-Ms.y,Ms.x,0,-Vs.y,Vs.x,0];return!yu(e,Eo,Ao,Ro,rc)||(e=[1,0,0,0,1,0,0,0,1],!yu(e,Eo,Ao,Ro,rc))?!1:(ac.crossVectors(vs,Ms),e=[ac.x,ac.y,ac.z],yu(e,Eo,Ao,Ro,rc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ki=[new F,new F,new F,new F,new F,new F,new F,new F],Si=new F,oc=new yo,Eo=new F,Ao=new F,Ro=new F,vs=new F,Ms=new F,Vs=new F,jr=new F,rc=new F,ac=new F,Ws=new F;function yu(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Ws.fromArray(i,o);const a=s.x*Math.abs(Ws.x)+s.y*Math.abs(Ws.y)+s.z*Math.abs(Ws.z),l=t.dot(Ws),u=e.dot(Ws),c=n.dot(Ws);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const bv=new yo,Kr=new F,_u=new F;class _o{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):bv.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Kr.subVectors(t,this.center);const e=Kr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Kr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_u.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Kr.copy(t.center).add(_u)),this.expandByPoint(Kr.copy(t.center).sub(_u))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ji=new F,wu=new F,cc=new F,ys=new F,Su=new F,lc=new F,bu=new F;class Rd{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ji.copy(this.origin).addScaledVector(this.direction,e),Ji.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){wu.copy(t).add(e).multiplyScalar(.5),cc.copy(e).sub(t).normalize(),ys.copy(this.origin).sub(wu);const o=t.distanceTo(e)*.5,r=-this.direction.dot(cc),a=ys.dot(this.direction),l=-ys.dot(cc),u=ys.lengthSq(),c=Math.abs(1-r*r);let p,f,d,g;if(c>0)if(p=r*l-a,f=r*a-l,g=o*c,p>=0)if(f>=-g)if(f<=g){const x=1/c;p*=x,f*=x,d=p*(p+r*f+2*a)+f*(r*p+f+2*l)+u}else f=o,p=Math.max(0,-(r*f+a)),d=-p*p+f*(f+2*l)+u;else f=-o,p=Math.max(0,-(r*f+a)),d=-p*p+f*(f+2*l)+u;else f<=-g?(p=Math.max(0,-(-r*o+a)),f=p>0?-o:Math.min(Math.max(-o,-l),o),d=-p*p+f*(f+2*l)+u):f<=g?(p=0,f=Math.min(Math.max(-o,-l),o),d=f*(f+2*l)+u):(p=Math.max(0,-(r*o+a)),f=p>0?o:Math.min(Math.max(-o,-l),o),d=-p*p+f*(f+2*l)+u);else f=r>0?-o:o,p=Math.max(0,-(r*f+a)),d=-p*p+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(wu).addScaledVector(cc,f),d}intersectSphere(t,e){Ji.subVectors(t.center,this.origin);const n=Ji.dot(this.direction),s=Ji.dot(Ji)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const u=1/this.direction.x,c=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(n=(t.min.x-f.x)*u,s=(t.max.x-f.x)*u):(n=(t.max.x-f.x)*u,s=(t.min.x-f.x)*u),c>=0?(o=(t.min.y-f.y)*c,r=(t.max.y-f.y)*c):(o=(t.max.y-f.y)*c,r=(t.min.y-f.y)*c),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),p>=0?(a=(t.min.z-f.z)*p,l=(t.max.z-f.z)*p):(a=(t.max.z-f.z)*p,l=(t.min.z-f.z)*p),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ji)!==null}intersectTriangle(t,e,n,s,o){Su.subVectors(e,t),lc.subVectors(n,t),bu.crossVectors(Su,lc);let r=this.direction.dot(bu),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ys.subVectors(this.origin,t);const l=a*this.direction.dot(lc.crossVectors(ys,lc));if(l<0)return null;const u=a*this.direction.dot(Su.cross(ys));if(u<0||l+u>r)return null;const c=-a*ys.dot(bu);return c<0?null:this.at(c/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(t,e,n,s,o,r,a,l,u,c,p,f,d,g,x,h){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,u,c,p,f,d,g,x,h)}set(t,e,n,s,o,r,a,l,u,c,p,f,d,g,x,h){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=p,m[14]=f,m[3]=d,m[7]=g,m[11]=x,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Co.setFromMatrixColumn(t,0).length(),o=1/Co.setFromMatrixColumn(t,1).length(),r=1/Co.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),u=Math.sin(s),c=Math.cos(o),p=Math.sin(o);if(t.order==="XYZ"){const f=r*c,d=r*p,g=a*c,x=a*p;e[0]=l*c,e[4]=-l*p,e[8]=u,e[1]=d+g*u,e[5]=f-x*u,e[9]=-a*l,e[2]=x-f*u,e[6]=g+d*u,e[10]=r*l}else if(t.order==="YXZ"){const f=l*c,d=l*p,g=u*c,x=u*p;e[0]=f+x*a,e[4]=g*a-d,e[8]=r*u,e[1]=r*p,e[5]=r*c,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=r*l}else if(t.order==="ZXY"){const f=l*c,d=l*p,g=u*c,x=u*p;e[0]=f-x*a,e[4]=-r*p,e[8]=g+d*a,e[1]=d+g*a,e[5]=r*c,e[9]=x-f*a,e[2]=-r*u,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const f=r*c,d=r*p,g=a*c,x=a*p;e[0]=l*c,e[4]=g*u-d,e[8]=f*u+x,e[1]=l*p,e[5]=x*u+f,e[9]=d*u-g,e[2]=-u,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const f=r*l,d=r*u,g=a*l,x=a*u;e[0]=l*c,e[4]=x-f*p,e[8]=g*p+d,e[1]=p,e[5]=r*c,e[9]=-a*c,e[2]=-u*c,e[6]=d*p+g,e[10]=f-x*p}else if(t.order==="XZY"){const f=r*l,d=r*u,g=a*l,x=a*u;e[0]=l*c,e[4]=-p,e[8]=u*c,e[1]=f*p+x,e[5]=r*c,e[9]=d*p-g,e[2]=g*p-d,e[6]=a*c,e[10]=x*p+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tv,t,Ev)}lookAt(t,e,n){const s=this.elements;return Jn.subVectors(t,e),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),_s.crossVectors(n,Jn),_s.lengthSq()===0&&(Math.abs(n.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),_s.crossVectors(n,Jn)),_s.normalize(),uc.crossVectors(Jn,_s),s[0]=_s.x,s[4]=uc.x,s[8]=Jn.x,s[1]=_s.y,s[5]=uc.y,s[9]=Jn.y,s[2]=_s.z,s[6]=uc.z,s[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],u=n[12],c=n[1],p=n[5],f=n[9],d=n[13],g=n[2],x=n[6],h=n[10],m=n[14],M=n[3],v=n[7],_=n[11],T=n[15],E=s[0],b=s[4],R=s[8],S=s[12],w=s[1],A=s[5],C=s[9],L=s[13],U=s[2],H=s[6],G=s[10],O=s[14],k=s[3],nt=s[7],ct=s[11],ft=s[15];return o[0]=r*E+a*w+l*U+u*k,o[4]=r*b+a*A+l*H+u*nt,o[8]=r*R+a*C+l*G+u*ct,o[12]=r*S+a*L+l*O+u*ft,o[1]=c*E+p*w+f*U+d*k,o[5]=c*b+p*A+f*H+d*nt,o[9]=c*R+p*C+f*G+d*ct,o[13]=c*S+p*L+f*O+d*ft,o[2]=g*E+x*w+h*U+m*k,o[6]=g*b+x*A+h*H+m*nt,o[10]=g*R+x*C+h*G+m*ct,o[14]=g*S+x*L+h*O+m*ft,o[3]=M*E+v*w+_*U+T*k,o[7]=M*b+v*A+_*H+T*nt,o[11]=M*R+v*C+_*G+T*ct,o[15]=M*S+v*L+_*O+T*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],u=t[13],c=t[2],p=t[6],f=t[10],d=t[14],g=t[3],x=t[7],h=t[11],m=t[15];return g*(+o*l*p-s*u*p-o*a*f+n*u*f+s*a*d-n*l*d)+x*(+e*l*d-e*u*f+o*r*f-s*r*d+s*u*c-o*l*c)+h*(+e*u*p-e*a*d-o*r*p+n*r*d+o*a*c-n*u*c)+m*(-s*a*c-e*l*p+e*a*f+s*r*p-n*r*f+n*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],u=t[7],c=t[8],p=t[9],f=t[10],d=t[11],g=t[12],x=t[13],h=t[14],m=t[15],M=p*h*u-x*f*u+x*l*d-a*h*d-p*l*m+a*f*m,v=g*f*u-c*h*u-g*l*d+r*h*d+c*l*m-r*f*m,_=c*x*u-g*p*u+g*a*d-r*x*d-c*a*m+r*p*m,T=g*p*l-c*x*l-g*a*f+r*x*f+c*a*h-r*p*h,E=e*M+n*v+s*_+o*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=M*b,t[1]=(x*f*o-p*h*o-x*s*d+n*h*d+p*s*m-n*f*m)*b,t[2]=(a*h*o-x*l*o+x*s*u-n*h*u-a*s*m+n*l*m)*b,t[3]=(p*l*o-a*f*o-p*s*u+n*f*u+a*s*d-n*l*d)*b,t[4]=v*b,t[5]=(c*h*o-g*f*o+g*s*d-e*h*d-c*s*m+e*f*m)*b,t[6]=(g*l*o-r*h*o-g*s*u+e*h*u+r*s*m-e*l*m)*b,t[7]=(r*f*o-c*l*o+c*s*u-e*f*u-r*s*d+e*l*d)*b,t[8]=_*b,t[9]=(g*p*o-c*x*o-g*n*d+e*x*d+c*n*m-e*p*m)*b,t[10]=(r*x*o-g*a*o+g*n*u-e*x*u-r*n*m+e*a*m)*b,t[11]=(c*a*o-r*p*o-c*n*u+e*p*u+r*n*d-e*a*d)*b,t[12]=T*b,t[13]=(c*x*s-g*p*s+g*n*f-e*x*f-c*n*h+e*p*h)*b,t[14]=(g*a*s-r*x*s-g*n*l+e*x*l+r*n*h-e*a*h)*b,t[15]=(r*p*s-c*a*s+c*n*l-e*p*l-r*n*f+e*a*f)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,u=o*r,c=o*a;return this.set(u*r+n,u*a-s*l,u*l+s*a,0,u*a+s*l,c*a+n,c*l-s*r,0,u*l-s*a,c*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,u=o+o,c=r+r,p=a+a,f=o*u,d=o*c,g=o*p,x=r*c,h=r*p,m=a*p,M=l*u,v=l*c,_=l*p,T=n.x,E=n.y,b=n.z;return s[0]=(1-(x+m))*T,s[1]=(d+_)*T,s[2]=(g-v)*T,s[3]=0,s[4]=(d-_)*E,s[5]=(1-(f+m))*E,s[6]=(h+M)*E,s[7]=0,s[8]=(g+v)*b,s[9]=(h-M)*b,s[10]=(1-(f+x))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Co.set(s[0],s[1],s[2]).length();const r=Co.set(s[4],s[5],s[6]).length(),a=Co.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],bi.copy(this);const u=1/o,c=1/r,p=1/a;return bi.elements[0]*=u,bi.elements[1]*=u,bi.elements[2]*=u,bi.elements[4]*=c,bi.elements[5]*=c,bi.elements[6]*=c,bi.elements[8]*=p,bi.elements[9]*=p,bi.elements[10]*=p,e.setFromRotationMatrix(bi),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=cs){const l=this.elements,u=2*o/(e-t),c=2*o/(n-s),p=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(a===cs)d=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===Tl)d=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=cs){const l=this.elements,u=1/(e-t),c=1/(n-s),p=1/(r-o),f=(e+t)*u,d=(n+s)*c;let g,x;if(a===cs)g=(r+o)*p,x=-2*p;else if(a===Tl)g=o*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Co=new F,bi=new xe,Tv=new F(0,0,0),Ev=new F(1,1,1),_s=new F,uc=new F,Jn=new F,g0=new xe,x0=new nn;class Zi{constructor(t=0,e=0,n=0,s=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],u=s[5],c=s[9],p=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-te(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,o),this._z=0);break;case"ZXY":this._x=Math.asin(te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-te(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,u));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-p,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-te(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return g0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(g0,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return x0.setFromEuler(this),this.setFromQuaternion(x0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class Fm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Av=0;const v0=new F,Po=new nn,Qi=new xe,hc=new F,Jr=new F,Rv=new F,Cv=new nn,M0=new F(1,0,0),y0=new F(0,1,0),_0=new F(0,0,1),w0={type:"added"},Pv={type:"removed"},Io={type:"childadded",child:null},Tu={type:"childremoved",child:null};class ce extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ce.DEFAULT_UP.clone();const t=new F,e=new Zi,n=new nn,s=new F(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new Yt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Po.setFromAxisAngle(t,e),this.quaternion.multiply(Po),this}rotateOnWorldAxis(t,e){return Po.setFromAxisAngle(t,e),this.quaternion.premultiply(Po),this}rotateX(t){return this.rotateOnAxis(M0,t)}rotateY(t){return this.rotateOnAxis(y0,t)}rotateZ(t){return this.rotateOnAxis(_0,t)}translateOnAxis(t,e){return v0.copy(t).applyQuaternion(this.quaternion),this.position.add(v0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(M0,t)}translateY(t){return this.translateOnAxis(y0,t)}translateZ(t){return this.translateOnAxis(_0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hc.copy(t):hc.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Jr,hc,this.up):Qi.lookAt(hc,Jr,this.up),this.quaternion.setFromRotationMatrix(Qi),s&&(Qi.extractRotation(s.matrixWorld),Po.setFromRotationMatrix(Qi),this.quaternion.premultiply(Po.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(w0),Io.child=t,this.dispatchEvent(Io),Io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pv),Tu.child=t,this.dispatchEvent(Tu),Tu.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(w0),Io.child=t,this.dispatchEvent(Io),Io.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,t,Rv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,Cv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const p=l[u];o(t.shapes,p)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),u=r(t.textures),c=r(t.images),p=r(t.shapes),f=r(t.skeletons),d=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ce.DEFAULT_UP=new F(0,1,0);ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new F,ts=new F,Eu=new F,es=new F,Lo=new F,Do=new F,S0=new F,Au=new F,Ru=new F,Cu=new F,Pu=new be,Iu=new be,Lu=new be;class xi{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ti.subVectors(t,e),s.cross(Ti);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Ti.subVectors(s,e),ts.subVectors(n,e),Eu.subVectors(t,e);const r=Ti.dot(Ti),a=Ti.dot(ts),l=Ti.dot(Eu),u=ts.dot(ts),c=ts.dot(Eu),p=r*u-a*a;if(p===0)return o.set(0,0,0),null;const f=1/p,d=(u*l-a*c)*f,g=(r*c-a*l)*f;return o.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,es)===null?!1:es.x>=0&&es.y>=0&&es.x+es.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,es)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,es.x),l.addScaledVector(r,es.y),l.addScaledVector(a,es.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return Pu.setScalar(0),Iu.setScalar(0),Lu.setScalar(0),Pu.fromBufferAttribute(t,e),Iu.fromBufferAttribute(t,n),Lu.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Pu,o.x),r.addScaledVector(Iu,o.y),r.addScaledVector(Lu,o.z),r}static isFrontFacing(t,e,n,s){return Ti.subVectors(n,e),ts.subVectors(t,e),Ti.cross(ts).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),ts.subVectors(this.a,this.b),Ti.cross(ts).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return xi.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Lo.subVectors(s,n),Do.subVectors(o,n),Au.subVectors(t,n);const l=Lo.dot(Au),u=Do.dot(Au);if(l<=0&&u<=0)return e.copy(n);Ru.subVectors(t,s);const c=Lo.dot(Ru),p=Do.dot(Ru);if(c>=0&&p<=c)return e.copy(s);const f=l*p-c*u;if(f<=0&&l>=0&&c<=0)return r=l/(l-c),e.copy(n).addScaledVector(Lo,r);Cu.subVectors(t,o);const d=Lo.dot(Cu),g=Do.dot(Cu);if(g>=0&&d<=g)return e.copy(o);const x=d*u-l*g;if(x<=0&&u>=0&&g<=0)return a=u/(u-g),e.copy(n).addScaledVector(Do,a);const h=c*g-d*p;if(h<=0&&p-c>=0&&d-g>=0)return S0.subVectors(o,s),a=(p-c)/(p-c+(d-g)),e.copy(s).addScaledVector(S0,a);const m=1/(h+x+f);return r=x*m,a=f*m,e.copy(n).addScaledVector(Lo,r).addScaledVector(Do,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Om={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ws={h:0,s:0,l:0},fc={h:0,s:0,l:0};function Du(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class it{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=On){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=dv(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Du(r,o,t+1/3),this.g=Du(r,o,t),this.b=Du(r,o,t-1/3)}return ue.toWorkingColorSpace(this,s),this}setStyle(t,e=On){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=On){const n=Om[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}copyLinearToSRGB(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=On){return ue.fromWorkingColorSpace(fn.copy(this),t),Math.round(te(fn.r*255,0,255))*65536+Math.round(te(fn.g*255,0,255))*256+Math.round(te(fn.b*255,0,255))}getHexString(t=On){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,s=fn.g,o=fn.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,u;const c=(a+r)/2;if(a===r)l=0,u=0;else{const p=r-a;switch(u=c<=.5?p/(r+a):p/(2-r-a),r){case n:l=(s-o)/p+(s<o?6:0);break;case s:l=(o-n)/p+2;break;case o:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=On){ue.fromWorkingColorSpace(fn.copy(this),t);const e=fn.r,n=fn.g,s=fn.b;return t!==On?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ws),this.setHSL(ws.h+t,ws.s+e,ws.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ws),t.getHSL(fc);const n=gu(ws.h,fc.h,e),s=gu(ws.s,fc.s,e),o=gu(ws.l,fc.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new it;it.NAMES=Om;let Iv=0;class Gs extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=dr,this.side=Bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=Ah,this.blendEquation=oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bo,this.stencilZFail=bo,this.stencilZPass=bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(n.blending=this.blending),this.side!==Bs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Eh&&(n.blendSrc=this.blendSrc),this.blendDst!==Ah&&(n.blendDst=this.blendDst),this.blendEquation!==oo&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==u0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $ extends Gs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=ym,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ze=new F,dc=new pt;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bl,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)dc.fromBufferAttribute(this,e),dc.applyMatrix3(t),this.setXY(e,dc.x,dc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),o=Se(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bl&&(t.usage=this.usage),t}}class Bm extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Gm extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Vt extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Lv=0;const fi=new xe,Uu=new ce,Uo=new F,Qn=new yo,Qr=new yo,Qe=new F;class Ae extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Um(t)?Gm:Bm)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Yt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,e,n){return fi.makeTranslation(t,e,n),this.applyMatrix4(fi),this}scale(t,e,n){return fi.makeScale(t,e,n),this.applyMatrix4(fi),this}lookAt(t){return Uu.lookAt(t),Uu.updateMatrix(),this.applyMatrix4(Uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Uo).negate(),this.translate(Uo.x,Uo.y,Uo.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Vt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Qn.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _o);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Qr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(Qn.min,Qr.min),Qn.expandByPoint(Qe),Qe.addVectors(Qn.max,Qr.max),Qn.expandByPoint(Qe)):(Qn.expandByPoint(Qr.min),Qn.expandByPoint(Qr.max))}Qn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Qe.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Qe));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Qe.fromBufferAttribute(a,u),l&&(Uo.fromBufferAttribute(t,u),Qe.add(Uo)),s=Math.max(s,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new F,l[R]=new F;const u=new F,c=new F,p=new F,f=new pt,d=new pt,g=new pt,x=new F,h=new F;function m(R,S,w){u.fromBufferAttribute(n,R),c.fromBufferAttribute(n,S),p.fromBufferAttribute(n,w),f.fromBufferAttribute(o,R),d.fromBufferAttribute(o,S),g.fromBufferAttribute(o,w),c.sub(u),p.sub(u),d.sub(f),g.sub(f);const A=1/(d.x*g.y-g.x*d.y);isFinite(A)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(p,-d.y).multiplyScalar(A),h.copy(p).multiplyScalar(d.x).addScaledVector(c,-g.x).multiplyScalar(A),a[R].add(x),a[S].add(x),a[w].add(x),l[R].add(h),l[S].add(h),l[w].add(h))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,S=M.length;R<S;++R){const w=M[R],A=w.start,C=w.count;for(let L=A,U=A+C;L<U;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const v=new F,_=new F,T=new F,E=new F;function b(R){T.fromBufferAttribute(s,R),E.copy(T);const S=a[R];v.copy(S),v.sub(T.multiplyScalar(T.dot(S))).normalize(),_.crossVectors(E,S);const A=_.dot(l[R])<0?-1:1;r.setXYZW(R,v.x,v.y,v.z,A)}for(let R=0,S=M.length;R<S;++R){const w=M[R],A=w.start,C=w.count;for(let L=A,U=A+C;L<U;L+=3)b(t.getX(L+0)),b(t.getX(L+1)),b(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new F,o=new F,r=new F,a=new F,l=new F,u=new F,c=new F,p=new F;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),x=t.getX(f+1),h=t.getX(f+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,h),c.subVectors(r,o),p.subVectors(s,o),c.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,h),a.add(c),l.add(c),u.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(h,u.x,u.y,u.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),c.subVectors(r,o),p.subVectors(s,o),c.cross(p),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){const u=a.array,c=a.itemSize,p=a.normalized,f=new u.constructor(l.length*c);let d=0,g=0;for(let x=0,h=l.length;x<h;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*c;for(let m=0;m<c;m++)f[g++]=u[d++]}return new ze(f,c,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=t(l,n);e.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,p=u.length;c<p;c++){const f=u[c],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const u=r[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const u=n[l];t.data.attributes[l]=u.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let p=0,f=u.length;p<f;p++){const d=u[p];c.push(d.toJSON(t.data))}c.length>0&&(s[l]=c,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(e))}const o=t.morphAttributes;for(const u in o){const c=[],p=o[u];for(let f=0,d=p.length;f<d;f++)c.push(p[f].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let u=0,c=r.length;u<c;u++){const p=r[u];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const b0=new xe,Xs=new Rd,pc=new _o,T0=new F,mc=new F,gc=new F,xc=new F,Nu=new F,vc=new F,E0=new F,Mc=new F;class P extends ce{constructor(t=new Ae,e=new $){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){vc.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],p=o[l];c!==0&&(Nu.fromBufferAttribute(p,t),r?vc.addScaledVector(Nu,c):vc.addScaledVector(Nu.sub(e),c))}e.add(vc)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pc.copy(n.boundingSphere),pc.applyMatrix4(o),Xs.copy(t.ray).recast(t.near),!(pc.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(pc,T0)===null||Xs.origin.distanceToSquared(T0)>(t.far-t.near)**2))&&(b0.copy(o).invert(),Xs.copy(t.ray).applyMatrix4(b0),!(n.boundingBox!==null&&Xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xs)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,p=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const h=f[g],m=r[h.materialIndex],M=Math.max(h.start,d.start),v=Math.min(a.count,Math.min(h.start+h.count,d.start+d.count));for(let _=M,T=v;_<T;_+=3){const E=a.getX(_),b=a.getX(_+1),R=a.getX(_+2);s=yc(this,m,t,n,u,c,p,E,b,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=h.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let h=g,m=x;h<m;h+=3){const M=a.getX(h),v=a.getX(h+1),_=a.getX(h+2);s=yc(this,r,t,n,u,c,p,M,v,_),s&&(s.faceIndex=Math.floor(h/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const h=f[g],m=r[h.materialIndex],M=Math.max(h.start,d.start),v=Math.min(l.count,Math.min(h.start+h.count,d.start+d.count));for(let _=M,T=v;_<T;_+=3){const E=_,b=_+1,R=_+2;s=yc(this,m,t,n,u,c,p,E,b,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=h.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let h=g,m=x;h<m;h+=3){const M=h,v=h+1,_=h+2;s=yc(this,r,t,n,u,c,p,M,v,_),s&&(s.faceIndex=Math.floor(h/3),e.push(s))}}}}function Dv(i,t,e,n,s,o,r,a){let l;if(t.side===Mn?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===Bs,a),l===null)return null;Mc.copy(a),Mc.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Mc);return u<e.near||u>e.far?null:{distance:u,point:Mc.clone(),object:i}}function yc(i,t,e,n,s,o,r,a,l,u){i.getVertexPosition(a,mc),i.getVertexPosition(l,gc),i.getVertexPosition(u,xc);const c=Dv(i,t,e,n,mc,gc,xc,E0);if(c){const p=new F;xi.getBarycoord(E0,mc,gc,xc,p),s&&(c.uv=xi.getInterpolatedAttribute(s,a,l,u,p,new pt)),o&&(c.uv1=xi.getInterpolatedAttribute(o,a,l,u,p,new pt)),r&&(c.normal=xi.getInterpolatedAttribute(r,a,l,u,p,new F),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new F,materialIndex:0};xi.getNormal(mc,gc,xc,f.normal),c.face=f,c.barycoord=p}return c}class ja extends Ae{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],u=[],c=[],p=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(p,2));function g(x,h,m,M,v,_,T,E,b,R,S){const w=_/b,A=T/R,C=_/2,L=T/2,U=E/2,H=b+1,G=R+1;let O=0,k=0;const nt=new F;for(let ct=0;ct<G;ct++){const ft=ct*A-L;for(let Pt=0;Pt<H;Pt++){const Wt=Pt*w-C;nt[x]=Wt*M,nt[h]=ft*v,nt[m]=U,u.push(nt.x,nt.y,nt.z),nt[x]=0,nt[h]=0,nt[m]=E>0?1:-1,c.push(nt.x,nt.y,nt.z),p.push(Pt/b),p.push(1-ct/R),O+=1}}for(let ct=0;ct<R;ct++)for(let ft=0;ft<b;ft++){const Pt=f+ft+H*ct,Wt=f+ft+H*(ct+1),et=f+(ft+1)+H*(ct+1),ut=f+(ft+1)+H*ct;l.push(Pt,Wt,ut),l.push(Wt,et,ut),k+=6}a.addGroup(d,k,S),d+=k,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ja(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Sn(i){const t={};for(let e=0;e<i.length;e++){const n=Fr(i[e]);for(const s in n)t[s]=n[s]}return t}function Uv(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function km(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const Al={clone:Fr,merge:Sn};var Nv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Gs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nv,this.fragmentShader=zv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fr(t.uniforms),this.uniformsGroups=Uv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Hm extends ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=cs}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ss=new F,A0=new pt,R0=new pt;class ni extends Hm{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hf*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hf*2*Math.atan(Math.tan(mu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ss.x,Ss.y).multiplyScalar(-t/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ss.x,Ss.y).multiplyScalar(-t/Ss.z)}getViewSize(t,e){return this.getViewBounds(t,A0,R0),e.subVectors(R0,A0)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(mu*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,u=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/u,s*=r.width/l,n*=r.height/u}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const No=-90,zo=1;class Fv extends ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ni(No,zo,t,e);s.layers=this.layers,this.add(s);const o=new ni(No,zo,t,e);o.layers=this.layers,this.add(o);const r=new ni(No,zo,t,e);r.layers=this.layers,this.add(r);const a=new ni(No,zo,t,e);a.layers=this.layers,this.add(a);const l=new ni(No,zo,t,e);l.layers=this.layers,this.add(l);const u=new ni(No,zo,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const u of e)this.remove(u);if(t===cs)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Tl)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,u,c]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(p,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Vm extends yn{constructor(t,e,n,s,o,r,a,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:Ir,super(t,e,n,s,o,r,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ov extends Ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Vm(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ja(5,5,5),o=new qn({name:"CubemapFromEquirect",uniforms:Fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:us});o.uniforms.tEquirect.value=e;const r=new P(s,o),a=e.minFilter;return e.minFilter===co&&(e.minFilter=Xi),new Fv(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}class Cd{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new it(t),this.density=e}clone(){return new Cd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Bv extends ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gv{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=bl,this.updateRanges=[],this.version=0,this.uuid=fs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wn=new F;class Rl{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix4(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyNormalMatrix(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.transformDirection(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Vi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Vi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Vi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Vi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),o=Se(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Rl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wm extends Gs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Fo;const ta=new F,Oo=new F,Bo=new F,Go=new pt,ea=new pt,Xm=new xe,_c=new F,na=new F,wc=new F,C0=new pt,zu=new pt,P0=new pt;class kv extends ce{constructor(t=new Wm){if(super(),this.isSprite=!0,this.type="Sprite",Fo===void 0){Fo=new Ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Gv(e,5);Fo.setIndex([0,1,2,0,2,3]),Fo.setAttribute("position",new Rl(n,3,0,!1)),Fo.setAttribute("uv",new Rl(n,2,3,!1))}this.geometry=Fo,this.material=t,this.center=new pt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Oo.setFromMatrixScale(this.matrixWorld),Xm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Bo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Oo.multiplyScalar(-Bo.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;Sc(_c.set(-.5,-.5,0),Bo,r,Oo,s,o),Sc(na.set(.5,-.5,0),Bo,r,Oo,s,o),Sc(wc.set(.5,.5,0),Bo,r,Oo,s,o),C0.set(0,0),zu.set(1,0),P0.set(1,1);let a=t.ray.intersectTriangle(_c,na,wc,!1,ta);if(a===null&&(Sc(na.set(-.5,.5,0),Bo,r,Oo,s,o),zu.set(0,1),a=t.ray.intersectTriangle(_c,wc,na,!1,ta),a===null))return;const l=t.ray.origin.distanceTo(ta);l<t.near||l>t.far||e.push({distance:l,point:ta.clone(),uv:xi.getInterpolation(ta,_c,na,wc,C0,zu,P0,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Sc(i,t,e,n,s,o){Go.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ea.x=o*Go.x-s*Go.y,ea.y=s*Go.x+o*Go.y):ea.copy(Go),i.copy(t),i.x+=ea.x,i.y+=ea.y,i.applyMatrix4(Xm)}class Hv extends yn{constructor(t=null,e=1,n=1,s,o,r,a,l,u=ai,c=ai,p,f){super(null,r,a,l,u,c,s,o,p,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Li extends ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ko=new xe,I0=new xe,bc=[],L0=new yo,Vv=new xe,ia=new P,sa=new _o;class Yn extends P{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Li(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Vv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yo),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ko),L0.copy(t.boundingBox).applyMatrix4(ko),this.boundingBox.union(L0)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _o),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ko),sa.copy(t.boundingSphere).applyMatrix4(ko),this.boundingSphere.union(sa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ia.geometry=this.geometry,ia.material=this.material,ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sa.copy(this.boundingSphere),sa.applyMatrix4(n),t.ray.intersectsSphere(sa)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,ko),I0.multiplyMatrices(n,ko),ia.matrixWorld=I0,ia.raycast(t,bc);for(let r=0,a=bc.length;r<a;r++){const l=bc[r];l.instanceId=o,l.object=this,e.push(l)}bc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Li(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hv(new Float32Array(s*this.count),s,this.count,bd,qi));const o=this.morphTexture.source.data.data;let r=0;for(let u=0;u<n.length;u++)r+=n[u];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Fu=new F,Wv=new F,Xv=new Yt;class Ks{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Fu.subVectors(n,e).cross(Wv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Fu),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Xv.getNormalMatrix(t),s=this.coplanarPoint(Fu).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new _o,Tc=new F;class Pd{constructor(t=new Ks,e=new Ks,n=new Ks,s=new Ks,o=new Ks,r=new Ks){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cs){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],u=s[4],c=s[5],p=s[6],f=s[7],d=s[8],g=s[9],x=s[10],h=s[11],m=s[12],M=s[13],v=s[14],_=s[15];if(n[0].setComponents(l-o,f-u,h-d,_-m).normalize(),n[1].setComponents(l+o,f+u,h+d,_+m).normalize(),n[2].setComponents(l+r,f+c,h+g,_+M).normalize(),n[3].setComponents(l-r,f-c,h-g,_-M).normalize(),n[4].setComponents(l-a,f-p,h-x,_-v).normalize(),e===cs)n[5].setComponents(l+a,f+p,h+x,_+v).normalize();else if(e===Tl)n[5].setComponents(a,p,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(t){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(t.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Tc.x=s.normal.x>0?t.max.x:t.min.x,Tc.y=s.normal.y>0?t.max.y:t.min.y,Tc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Id extends Gs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Cl=new F,Pl=new F,D0=new xe,oa=new Rd,Ec=new _o,Ou=new F,U0=new F;class qm extends ce{constructor(t=new Ae,e=new Id){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)Cl.fromBufferAttribute(e,s-1),Pl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Cl.distanceTo(Pl);t.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ec.copy(n.boundingSphere),Ec.applyMatrix4(s),Ec.radius+=o,t.ray.intersectsSphere(Ec)===!1)return;D0.copy(s).invert(),oa.copy(t.ray).applyMatrix4(D0);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),g=Math.min(c.count,r.start+r.count);for(let x=d,h=g-1;x<h;x+=u){const m=c.getX(x),M=c.getX(x+1),v=Ac(this,t,oa,l,m,M);v&&e.push(v)}if(this.isLineLoop){const x=c.getX(g-1),h=c.getX(d),m=Ac(this,t,oa,l,x,h);m&&e.push(m)}}else{const d=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let x=d,h=g-1;x<h;x+=u){const m=Ac(this,t,oa,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){const x=Ac(this,t,oa,l,g-1,d);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ac(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(Cl.fromBufferAttribute(r,s),Pl.fromBufferAttribute(r,o),e.distanceSqToSegment(Cl,Pl,Ou,U0)>n)return;Ou.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ou);if(!(l<t.near||l>t.far))return{distance:l,point:U0.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const N0=new F,z0=new F;class qv extends qm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)N0.fromBufferAttribute(e,s),z0.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+N0.distanceTo(z0);t.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ld extends Gs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const F0=new xe,ff=new Rd,Rc=new _o,Cc=new F;class Ym extends ce{constructor(t=new Ae,e=new Ld){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rc.copy(n.boundingSphere),Rc.applyMatrix4(s),Rc.radius+=o,t.ray.intersectsSphere(Rc)===!1)return;F0.copy(s).invert(),ff.copy(t.ray).applyMatrix4(F0);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,p=n.attributes.position;if(u!==null){const f=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let g=f,x=d;g<x;g++){const h=u.getX(g);Cc.fromBufferAttribute(p,h),O0(Cc,h,l,s,t,e,this)}}else{const f=Math.max(0,r.start),d=Math.min(p.count,r.start+r.count);for(let g=f,x=d;g<x;g++)Cc.fromBufferAttribute(p,g),O0(Cc,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function O0(i,t,e,n,s,o,r){const a=ff.distanceSqToPoint(i);if(a<e){const l=new F;ff.closestPointToPoint(i,l),l.applyMatrix4(n);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;o.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Qt extends ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Ka extends yn{constructor(t,e,n,s,o,r,a,l,u){super(t,e,n,s,o,r,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zm extends yn{constructor(t,e,n,s,o,r,a,l,u,c=pr){if(c!==pr&&c!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===pr&&(n=xo),n===void 0&&c===Nr&&(n=Ur),super(null,s,o,r,a,l,c,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ai,this.minFilter=l!==void 0?l:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class $i{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,u;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),u=n[s]-r,u<0)a=s+1;else if(u>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const c=n[s],f=n[s+1]-c,d=(r-c)/f;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new pt:new F);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new F,s=[],o=[],r=[],a=new F,l=new xe;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new F)}o[0]=new F,r[0]=new F;let u=Number.MAX_VALUE;const c=Math.abs(s[0].x),p=Math.abs(s[0].y),f=Math.abs(s[0].z);c<=u&&(u=c,n.set(1,0,0)),p<=u&&(u=p,n.set(0,1,0)),f<=u&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(te(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(a,g))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(te(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Dd extends $i{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new pt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=l-this.aX,d=u-this.aY;l=f*c-d*p+this.aX,u=f*p+d*c+this.aY}return n.set(l,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Yv extends Dd{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Ud(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,u){s(r,a,u*(a-o),u*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,u,c,p){let f=(r-o)/u-(a-o)/(u+c)+(a-r)/c,d=(a-r)/c-(l-r)/(c+p)+(l-a)/p;f*=c,d*=c,s(r,a,f,d)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Pc=new F,Bu=new Ud,Gu=new Ud,ku=new Ud;class wo extends $i{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let u,c;this.closed||a>0?u=s[(a-1)%o]:(Pc.subVectors(s[0],s[1]).add(s[0]),u=Pc);const p=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?c=s[(a+2)%o]:(Pc.subVectors(s[o-1],s[o-2]).add(s[o-1]),c=Pc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(p),d),x=Math.pow(p.distanceToSquared(f),d),h=Math.pow(f.distanceToSquared(c),d);x<1e-4&&(x=1),g<1e-4&&(g=x),h<1e-4&&(h=x),Bu.initNonuniformCatmullRom(u.x,p.x,f.x,c.x,g,x,h),Gu.initNonuniformCatmullRom(u.y,p.y,f.y,c.y,g,x,h),ku.initNonuniformCatmullRom(u.z,p.z,f.z,c.z,g,x,h)}else this.curveType==="catmullrom"&&(Bu.initCatmullRom(u.x,p.x,f.x,c.x,this.tension),Gu.initCatmullRom(u.y,p.y,f.y,c.y,this.tension),ku.initCatmullRom(u.z,p.z,f.z,c.z,this.tension));return n.set(Bu.calc(l),Gu.calc(l),ku.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function B0(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function Zv(i,t){const e=1-i;return e*e*t}function $v(i,t){return 2*(1-i)*i*t}function jv(i,t){return i*i*t}function Aa(i,t,e,n){return Zv(i,t)+$v(i,e)+jv(i,n)}function Kv(i,t){const e=1-i;return e*e*e*t}function Jv(i,t){const e=1-i;return 3*e*e*i*t}function Qv(i,t){return 3*(1-i)*i*i*t}function tM(i,t){return i*i*i*t}function Ra(i,t,e,n,s){return Kv(i,t)+Jv(i,e)+Qv(i,n)+tM(i,s)}class $m extends $i{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ra(t,s.x,o.x,r.x,a.x),Ra(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class eM extends $i{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ra(t,s.x,o.x,r.x,a.x),Ra(t,s.y,o.y,r.y,a.y),Ra(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jm extends $i{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nd extends $i{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Km extends $i{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Aa(t,s.x,o.x,r.x),Aa(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jm extends $i{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Aa(t,s.x,o.x,r.x),Aa(t,s.y,o.y,r.y),Aa(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qm extends $i{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],u=s[r],c=s[r>s.length-2?s.length-1:r+1],p=s[r>s.length-3?s.length-1:r+2];return n.set(B0(a,l.x,u.x,c.x,p.x),B0(a,l.y,u.y,c.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new pt().fromArray(s))}return this}}var df=Object.freeze({__proto__:null,ArcCurve:Yv,CatmullRomCurve3:wo,CubicBezierCurve:$m,CubicBezierCurve3:eM,EllipseCurve:Dd,LineCurve:jm,LineCurve3:Nd,QuadraticBezierCurve:Km,QuadraticBezierCurve3:Jm,SplineCurve:Qm});class nM extends $i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new df[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),u=l===0?0:1-r/l;return a.getPointAt(u,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new df[s.type]().fromJSON(s))}return this}}class Il extends nM{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new jm(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new Km(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new $m(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Qm(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+u,e+c,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const u=new Dd(t,e,n,s,o,r,a,l);if(this.curves.length>0){const p=u.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class He extends Ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],u=new F,c=new pt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,f=3;p<=e;p++,f+=3){const d=n+p/e*s;u.x=t*Math.cos(d),u.y=t*Math.sin(d),r.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(r[f]/t+1)/2,c.y=(r[f+1]/t+1)/2,l.push(c.x,c.y)}for(let p=1;p<=e;p++)o.push(p,p+1,0);this.setIndex(o),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class gt extends Ae{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const u=this;s=Math.floor(s),o=Math.floor(o);const c=[],p=[],f=[],d=[];let g=0;const x=[],h=n/2;let m=0;M(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new Vt(p,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(d,2));function M(){const _=new F,T=new F;let E=0;const b=(e-t)/n;for(let R=0;R<=o;R++){const S=[],w=R/o,A=w*(e-t)+t;for(let C=0;C<=s;C++){const L=C/s,U=L*l+a,H=Math.sin(U),G=Math.cos(U);T.x=A*H,T.y=-w*n+h,T.z=A*G,p.push(T.x,T.y,T.z),_.set(H,b,G).normalize(),f.push(_.x,_.y,_.z),d.push(L,1-w),S.push(g++)}x.push(S)}for(let R=0;R<s;R++)for(let S=0;S<o;S++){const w=x[S][R],A=x[S+1][R],C=x[S+1][R+1],L=x[S][R+1];(t>0||S!==0)&&(c.push(w,A,L),E+=3),(e>0||S!==o-1)&&(c.push(A,C,L),E+=3)}u.addGroup(m,E,0),m+=E}function v(_){const T=g,E=new pt,b=new F;let R=0;const S=_===!0?t:e,w=_===!0?1:-1;for(let C=1;C<=s;C++)p.push(0,h*w,0),f.push(0,w,0),d.push(.5,.5),g++;const A=g;for(let C=0;C<=s;C++){const U=C/s*l+a,H=Math.cos(U),G=Math.sin(U);b.x=S*G,b.y=h*w,b.z=S*H,p.push(b.x,b.y,b.z),f.push(0,w,0),E.x=H*.5+.5,E.y=G*.5*w+.5,d.push(E.x,E.y),g++}for(let C=0;C<s;C++){const L=T+C,U=A+C;_===!0?c.push(U,U+1,L):c.push(U+1,U,L),R+=3}u.addGroup(m,R,_===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gn extends gt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Gn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ja extends Ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),u(n),c(),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(o.slice(),3)),this.setAttribute("uv",new Vt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new F,_=new F,T=new F;for(let E=0;E<e.length;E+=3)d(e[E+0],v),d(e[E+1],_),d(e[E+2],T),l(v,_,T,M)}function l(M,v,_,T){const E=T+1,b=[];for(let R=0;R<=E;R++){b[R]=[];const S=M.clone().lerp(_,R/E),w=v.clone().lerp(_,R/E),A=E-R;for(let C=0;C<=A;C++)C===0&&R===E?b[R][C]=S:b[R][C]=S.clone().lerp(w,C/A)}for(let R=0;R<E;R++)for(let S=0;S<2*(E-R)-1;S++){const w=Math.floor(S/2);S%2===0?(f(b[R][w+1]),f(b[R+1][w]),f(b[R][w])):(f(b[R][w+1]),f(b[R+1][w+1]),f(b[R+1][w]))}}function u(M){const v=new F;for(let _=0;_<o.length;_+=3)v.x=o[_+0],v.y=o[_+1],v.z=o[_+2],v.normalize().multiplyScalar(M),o[_+0]=v.x,o[_+1]=v.y,o[_+2]=v.z}function c(){const M=new F;for(let v=0;v<o.length;v+=3){M.x=o[v+0],M.y=o[v+1],M.z=o[v+2];const _=h(M)/2/Math.PI+.5,T=m(M)/Math.PI+.5;r.push(_,1-T)}g(),p()}function p(){for(let M=0;M<r.length;M+=6){const v=r[M+0],_=r[M+2],T=r[M+4],E=Math.max(v,_,T),b=Math.min(v,_,T);E>.9&&b<.1&&(v<.2&&(r[M+0]+=1),_<.2&&(r[M+2]+=1),T<.2&&(r[M+4]+=1))}}function f(M){o.push(M.x,M.y,M.z)}function d(M,v){const _=M*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function g(){const M=new F,v=new F,_=new F,T=new F,E=new pt,b=new pt,R=new pt;for(let S=0,w=0;S<o.length;S+=9,w+=6){M.set(o[S+0],o[S+1],o[S+2]),v.set(o[S+3],o[S+4],o[S+5]),_.set(o[S+6],o[S+7],o[S+8]),E.set(r[w+0],r[w+1]),b.set(r[w+2],r[w+3]),R.set(r[w+4],r[w+5]),T.copy(M).add(v).add(_).divideScalar(3);const A=h(T);x(E,w+0,M,A),x(b,w+2,v,A),x(R,w+4,_,A)}}function x(M,v,_,T){T<0&&M.x===1&&(r[v]=M.x-1),_.x===0&&_.z===0&&(r[v]=T/2/Math.PI+.5)}function h(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ja(t.vertices,t.indices,t.radius,t.details)}}class zd extends Ja{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new zd(t.radius,t.detail)}}class Ll extends Il{constructor(t){super(t),this.uuid=fs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Il().fromJSON(s))}return this}}const iM={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=tg(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,u,c,p,f,d;if(n&&(o=cM(i,t,o,e)),i.length>80*e){a=u=i[0],l=c=i[1];for(let g=e;g<s;g+=e)p=i[g],f=i[g+1],p<a&&(a=p),f<l&&(l=f),p>u&&(u=p),f>c&&(c=f);d=Math.max(u-a,c-l),d=d!==0?32767/d:0}return Ga(o,r,e,a,l,d,0),r}};function tg(i,t,e,n,s){let o,r;if(s===MM(i,t,e,n)>0)for(o=t;o<e;o+=n)r=G0(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=G0(o,i[o],i[o+1],r);return r&&ou(r,r.next)&&(Ha(r),r=r.next),r}function vo(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ou(e,e.next)||Ne(e.prev,e,e.next)===0)){if(Ha(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ga(i,t,e,n,s,o,r){if(!i)return;!r&&o&&dM(i,n,s,o);let a=i,l,u;for(;i.prev!==i.next;){if(l=i.prev,u=i.next,o?oM(i,n,s,o):sM(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(u.i/e|0),Ha(i),i=u.next,a=u.next;continue}if(i=u,i===a){r?r===1?(i=rM(vo(i),t,e),Ga(i,t,e,n,s,o,2)):r===2&&aM(i,t,e,n,s,o):Ga(vo(i),t,e,n,s,o,1);break}}}function sM(i){const t=i.prev,e=i,n=i.next;if(Ne(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,u=n.y,c=s<o?s<r?s:r:o<r?o:r,p=a<l?a<u?a:u:l<u?l:u,f=s>o?s>r?s:r:o>r?o:r,d=a>l?a>u?a:u:l>u?l:u;let g=n.next;for(;g!==t;){if(g.x>=c&&g.x<=f&&g.y>=p&&g.y<=d&&ir(s,a,o,l,r,u,g.x,g.y)&&Ne(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function oM(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Ne(s,o,r)>=0)return!1;const a=s.x,l=o.x,u=r.x,c=s.y,p=o.y,f=r.y,d=a<l?a<u?a:u:l<u?l:u,g=c<p?c<f?c:f:p<f?p:f,x=a>l?a>u?a:u:l>u?l:u,h=c>p?c>f?c:f:p>f?p:f,m=pf(d,g,t,e,n),M=pf(x,h,t,e,n);let v=i.prevZ,_=i.nextZ;for(;v&&v.z>=m&&_&&_.z<=M;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=h&&v!==s&&v!==r&&ir(a,c,l,p,u,f,v.x,v.y)&&Ne(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=d&&_.x<=x&&_.y>=g&&_.y<=h&&_!==s&&_!==r&&ir(a,c,l,p,u,f,_.x,_.y)&&Ne(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=h&&v!==s&&v!==r&&ir(a,c,l,p,u,f,v.x,v.y)&&Ne(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=M;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=h&&_!==s&&_!==r&&ir(a,c,l,p,u,f,_.x,_.y)&&Ne(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function rM(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!ou(s,o)&&eg(s,n,n.next,o)&&ka(s,o)&&ka(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Ha(n),Ha(n.next),n=i=o),n=n.next}while(n!==i);return vo(n)}function aM(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&gM(r,a)){let l=ng(r,a);r=vo(r,r.next),l=vo(l,l.next),Ga(r,t,e,n,s,o,0),Ga(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function cM(i,t,e,n){const s=[];let o,r,a,l,u;for(o=0,r=t.length;o<r;o++)a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,u=tg(i,a,l,n,!1),u===u.next&&(u.steiner=!0),s.push(mM(u));for(s.sort(lM),o=0;o<s.length;o++)e=uM(s[o],e);return e}function lM(i,t){return i.x-t.x}function uM(i,t){const e=hM(i,t);if(!e)return t;const n=ng(e,i);return vo(n,n.next),vo(e,e.next)}function hM(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,u=s.y;let c=1/0,p;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&ir(r<u?o:n,r,l,u,r<u?n:o,r,e.x,e.y)&&(p=Math.abs(r-e.y)/(o-e.x),ka(e,i)&&(p<c||p===c&&(e.x>s.x||e.x===s.x&&fM(s,e)))&&(s=e,c=p)),e=e.next;while(e!==a);return s}function fM(i,t){return Ne(i.prev,i,t.prev)<0&&Ne(t.next,i,i.next)<0}function dM(i,t,e,n){let s=i;do s.z===0&&(s.z=pf(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,pM(s)}function pM(i){let t,e,n,s,o,r,a,l,u=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<u&&(a++,n=n.nextZ,!!n);t++);for(l=u;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,u*=2}while(r>1);return i}function pf(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function mM(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ir(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function gM(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!xM(i,t)&&(ka(i,t)&&ka(t,i)&&vM(i,t)&&(Ne(i.prev,i,t.prev)||Ne(i,t.prev,t))||ou(i,t)&&Ne(i.prev,i,i.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ou(i,t){return i.x===t.x&&i.y===t.y}function eg(i,t,e,n){const s=Lc(Ne(i,t,e)),o=Lc(Ne(i,t,n)),r=Lc(Ne(e,n,i)),a=Lc(Ne(e,n,t));return!!(s!==o&&r!==a||s===0&&Ic(i,e,t)||o===0&&Ic(i,n,t)||r===0&&Ic(e,i,n)||a===0&&Ic(e,t,n))}function Ic(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Lc(i){return i>0?1:i<0?-1:0}function xM(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&eg(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ka(i,t){return Ne(i.prev,i,i.next)<0?Ne(i,t,i.next)>=0&&Ne(i,i.prev,t)>=0:Ne(i,t,i.prev)<0||Ne(i,i.next,t)<0}function vM(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ng(i,t){const e=new mf(i.i,i.x,i.y),n=new mf(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function G0(i,t,e,n){const s=new mf(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ha(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function mf(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function MM(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Ca{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Ca.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];k0(t),H0(n,t);let r=t.length;e.forEach(k0);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,H0(n,e[l]);const a=iM.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function k0(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function H0(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Or extends Ja{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Or(t.radius,t.detail)}}class Fd extends Ja{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fd(t.radius,t.detail)}}class he extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),u=a+1,c=l+1,p=t/a,f=e/l,d=[],g=[],x=[],h=[];for(let m=0;m<c;m++){const M=m*f-r;for(let v=0;v<u;v++){const _=v*p-o;g.push(_,-M,0),x.push(0,0,1),h.push(v/a),h.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const v=M+u*m,_=M+u*(m+1),T=M+1+u*(m+1),E=M+1+u*m;d.push(v,_,E),d.push(_,T,E)}this.setIndex(d),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.width,t.height,t.widthSegments,t.heightSegments)}}class Va extends Ae{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],u=[],c=[];let p=t;const f=(e-t)/s,d=new F,g=new pt;for(let x=0;x<=s;x++){for(let h=0;h<=n;h++){const m=o+h/n*r;d.x=p*Math.cos(m),d.y=p*Math.sin(m),l.push(d.x,d.y,d.z),u.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,c.push(g.x,g.y)}p+=f}for(let x=0;x<s;x++){const h=x*(n+1);for(let m=0;m<n;m++){const M=m+h,v=M,_=M+n+1,T=M+n+2,E=M+1;a.push(v,_,E),a.push(_,T,E)}}this.setIndex(a),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Wa extends Ae{constructor(t=new Ll([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)u(t);else for(let c=0;c<t.length;c++)u(t[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Vt(s,3)),this.setAttribute("normal",new Vt(o,3)),this.setAttribute("uv",new Vt(r,2));function u(c){const p=s.length/3,f=c.extractPoints(e);let d=f.shape;const g=f.holes;Ca.isClockWise(d)===!1&&(d=d.reverse());for(let h=0,m=g.length;h<m;h++){const M=g[h];Ca.isClockWise(M)===!0&&(g[h]=M.reverse())}const x=Ca.triangulateShape(d,g);for(let h=0,m=g.length;h<m;h++){const M=g[h];d=d.concat(M)}for(let h=0,m=d.length;h<m;h++){const M=d[h];s.push(M.x,M.y,0),o.push(0,0,1),r.push(M.x,M.y)}for(let h=0,m=x.length;h<m;h++){const M=x[h],v=M[0]+p,_=M[1]+p,T=M[2]+p;n.push(v,_,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return yM(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new Wa(n,t.curveSegments)}}function yM(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Y extends Ae{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let u=0;const c=[],p=new F,f=new F,d=[],g=[],x=[],h=[];for(let m=0;m<=n;m++){const M=[],v=m/n;let _=0;m===0&&r===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let T=0;T<=e;T++){const E=T/e;p.x=-t*Math.cos(s+E*o)*Math.sin(r+v*a),p.y=t*Math.cos(r+v*a),p.z=t*Math.sin(s+E*o)*Math.sin(r+v*a),g.push(p.x,p.y,p.z),f.copy(p).normalize(),x.push(f.x,f.y,f.z),h.push(E+_,1-v),M.push(u++)}c.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){const v=c[m][M+1],_=c[m][M],T=c[m+1][M],E=c[m+1][M+1];(m!==0||r>0)&&d.push(v,_,E),(m!==n-1||l<Math.PI)&&d.push(_,T,E)}this.setIndex(d),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Y(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pe extends Ae{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],l=[],u=[],c=new F,p=new F,f=new F;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const x=g/s*o,h=d/n*Math.PI*2;p.x=(t+e*Math.cos(h))*Math.cos(x),p.y=(t+e*Math.cos(h))*Math.sin(x),p.z=e*Math.sin(h),a.push(p.x,p.y,p.z),c.x=t*Math.cos(x),c.y=t*Math.sin(x),f.subVectors(p,c).normalize(),l.push(f.x,f.y,f.z),u.push(g/s),u.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,h=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,M=(s+1)*d+g;r.push(x,h,M),r.push(h,m,M)}this.setIndex(r),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class xn extends Ae{constructor(t=new Jm(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new F,l=new F,u=new pt;let c=new F;const p=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Vt(p,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(d,2));function x(){for(let v=0;v<e;v++)h(v);h(o===!1?e:0),M(),m()}function h(v){c=t.getPointAt(v/e,c);const _=r.normals[v],T=r.binormals[v];for(let E=0;E<=s;E++){const b=E/s*Math.PI*2,R=Math.sin(b),S=-Math.cos(b);l.x=S*_.x+R*T.x,l.y=S*_.y+R*T.y,l.z=S*_.z+R*T.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=c.x+n*l.x,a.y=c.y+n*l.y,a.z=c.z+n*l.z,p.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=e;v++)for(let _=1;_<=s;_++){const T=(s+1)*(v-1)+(_-1),E=(s+1)*v+(_-1),b=(s+1)*v+_,R=(s+1)*(v-1)+_;g.push(T,E,R),g.push(E,b,R)}}function M(){for(let v=0;v<=e;v++)for(let _=0;_<=s;_++)u.x=v/e,u.y=_/s,d.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new xn(new df[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class q extends Gs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lm,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _M extends Gs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wM extends Gs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Od extends ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new it(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class SM extends Od{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Hu=new xe,V0=new F,W0=new F;class ig{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pd,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;V0.setFromMatrixPosition(t.matrixWorld),e.position.copy(V0),W0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(W0),e.updateMatrixWorld(),Hu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const X0=new xe,ra=new F,Vu=new F;class bM extends ig{constructor(){super(new ni(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),ra.setFromMatrixPosition(t.matrixWorld),n.position.copy(ra),Vu.copy(n.position),Vu.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Vu),n.updateMatrixWorld(),s.makeTranslation(-ra.x,-ra.y,-ra.z),X0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(X0)}}class Xr extends Od{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new bM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Bd extends Hm{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,r=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class TM extends ig{constructor(){super(new Bd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ru extends Od{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.target=new ce,this.shadow=new TM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class EM extends ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class sg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=q0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=q0();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function q0(){return performance.now()}function Y0(i,t,e,n){const s=AM(n);switch(e){case Em:return i*t;case Rm:return i*t;case Cm:return i*t*2;case bd:return i*t/s.components*s.byteLength;case Td:return i*t/s.components*s.byteLength;case Pm:return i*t*2/s.components*s.byteLength;case Ed:return i*t*2/s.components*s.byteLength;case Am:return i*t*3/s.components*s.byteLength;case Pi:return i*t*4/s.components*s.byteLength;case Ad:return i*t*4/s.components*s.byteLength;case Qc:case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case el:case nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bh:case kh:return Math.max(i,16)*Math.max(t,8)/4;case Oh:case Gh:return Math.max(i,8)*Math.max(t,8)/2;case Hh:case Vh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Yh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Zh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $h:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case jh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Jh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tf:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ef:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nf:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case sf:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case of:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case il:case rf:case af:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Im:case cf:return Math.ceil(i/4)*Math.ceil(t/4)*8;case lf:case uf:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function AM(i){switch(i){case gs:case Sm:return{byteLength:1,components:1};case Ba:case bm:case hs:return{byteLength:2,components:1};case wd:case Sd:return{byteLength:2,components:4};case xo:case _d:case qi:return{byteLength:4,components:1};case Tm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function og(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function RM(i){const t=new WeakMap;function e(a,l){const u=a.array,c=a.usage,p=u.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,u,c),a.onUploadCallback();let d;if(u instanceof Float32Array)d=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=i.SHORT;else if(u instanceof Uint32Array)d=i.UNSIGNED_INT;else if(u instanceof Int32Array)d=i.INT;else if(u instanceof Int8Array)d=i.BYTE;else if(u instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,u){const c=l.array,p=l.updateRanges;if(i.bindBuffer(u,a),p.length===0)i.bufferSubData(u,0,c);else{p.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<p.length;d++){const g=p[f],x=p[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,p[f]=x)}p.length=f+1;for(let d=0,g=p.length;d<g;d++){const x=p[d];i.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,l),u.version=a.version}}return{get:s,remove:o,update:r}}var CM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PM=`#ifdef USE_ALPHAHASH
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
#endif`,IM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NM=`#ifdef USE_AOMAP
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
#endif`,zM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FM=`#ifdef USE_BATCHING
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
#endif`,OM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,HM=`#ifdef USE_IRIDESCENCE
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
#endif`,VM=`#ifdef USE_BUMPMAP
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
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,JM=`#define PI 3.141592653589793
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
} // validated`,QM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ty=`vec3 transformedNormal = objectNormal;
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
#endif`,ey=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ny=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oy="gl_FragColor = linearToOutputTexel( gl_FragColor );",ry=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ay=`#ifdef USE_ENVMAP
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
#endif`,cy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ly=`#ifdef USE_ENVMAP
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
#endif`,uy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
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
#endif`,fy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,my=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gy=`#ifdef USE_GRADIENTMAP
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
}`,xy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,My=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yy=`uniform bool receiveShadow;
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
#endif`,_y=`#ifdef USE_ENVMAP
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
#endif`,wy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,by=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ey=`PhysicalMaterial material;
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
#endif`,Ay=`struct PhysicalMaterial {
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
}`,Ry=`
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
#endif`,Cy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Py=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ly=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ny=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Oy=`#if defined( USE_POINTS_UV )
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
#endif`,By=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ky=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wy=`#ifdef USE_MORPHTARGETS
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
#endif`,Xy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ky=`#ifdef USE_NORMALMAP
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
#endif`,Jy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,d_=`float getShadowMask() {
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
}`,p_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m_=`#ifdef USE_SKINNING
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
#endif`,g_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x_=`#ifdef USE_SKINNING
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
#endif`,v_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,__=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,w_=`#ifdef USE_TRANSMISSION
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
#endif`,S_=`#ifdef USE_TRANSMISSION
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
#endif`,b_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const R_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C_=`uniform sampler2D t2D;
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
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`#include <common>
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
}`,N_=`#if DEPTH_PACKING == 3200
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
}`,z_=`#define DISTANCE
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
}`,F_=`#define DISTANCE
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
}`,O_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`uniform float scale;
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
}`,k_=`uniform vec3 diffuse;
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
}`,H_=`#include <common>
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
}`,V_=`uniform vec3 diffuse;
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
}`,W_=`#define LAMBERT
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
}`,X_=`#define LAMBERT
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
}`,q_=`#define MATCAP
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
}`,Y_=`#define MATCAP
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
}`,Z_=`#define NORMAL
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
}`,$_=`#define NORMAL
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
}`,j_=`#define PHONG
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
}`,K_=`#define PHONG
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
}`,J_=`#define STANDARD
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
}`,Q_=`#define STANDARD
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
}`,t1=`#define TOON
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
}`,e1=`#define TOON
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
}`,n1=`uniform float size;
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
}`,i1=`uniform vec3 diffuse;
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
}`,s1=`#include <common>
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
}`,o1=`uniform vec3 color;
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
}`,r1=`uniform float rotation;
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
}`,a1=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:CM,alphahash_pars_fragment:PM,alphamap_fragment:IM,alphamap_pars_fragment:LM,alphatest_fragment:DM,alphatest_pars_fragment:UM,aomap_fragment:NM,aomap_pars_fragment:zM,batching_pars_vertex:FM,batching_vertex:OM,begin_vertex:BM,beginnormal_vertex:GM,bsdfs:kM,iridescence_fragment:HM,bumpmap_pars_fragment:VM,clipping_planes_fragment:WM,clipping_planes_pars_fragment:XM,clipping_planes_pars_vertex:qM,clipping_planes_vertex:YM,color_fragment:ZM,color_pars_fragment:$M,color_pars_vertex:jM,color_vertex:KM,common:JM,cube_uv_reflection_fragment:QM,defaultnormal_vertex:ty,displacementmap_pars_vertex:ey,displacementmap_vertex:ny,emissivemap_fragment:iy,emissivemap_pars_fragment:sy,colorspace_fragment:oy,colorspace_pars_fragment:ry,envmap_fragment:ay,envmap_common_pars_fragment:cy,envmap_pars_fragment:ly,envmap_pars_vertex:uy,envmap_physical_pars_fragment:_y,envmap_vertex:hy,fog_vertex:fy,fog_pars_vertex:dy,fog_fragment:py,fog_pars_fragment:my,gradientmap_pars_fragment:gy,lightmap_pars_fragment:xy,lights_lambert_fragment:vy,lights_lambert_pars_fragment:My,lights_pars_begin:yy,lights_toon_fragment:wy,lights_toon_pars_fragment:Sy,lights_phong_fragment:by,lights_phong_pars_fragment:Ty,lights_physical_fragment:Ey,lights_physical_pars_fragment:Ay,lights_fragment_begin:Ry,lights_fragment_maps:Cy,lights_fragment_end:Py,logdepthbuf_fragment:Iy,logdepthbuf_pars_fragment:Ly,logdepthbuf_pars_vertex:Dy,logdepthbuf_vertex:Uy,map_fragment:Ny,map_pars_fragment:zy,map_particle_fragment:Fy,map_particle_pars_fragment:Oy,metalnessmap_fragment:By,metalnessmap_pars_fragment:Gy,morphinstance_vertex:ky,morphcolor_vertex:Hy,morphnormal_vertex:Vy,morphtarget_pars_vertex:Wy,morphtarget_vertex:Xy,normal_fragment_begin:qy,normal_fragment_maps:Yy,normal_pars_fragment:Zy,normal_pars_vertex:$y,normal_vertex:jy,normalmap_pars_fragment:Ky,clearcoat_normal_fragment_begin:Jy,clearcoat_normal_fragment_maps:Qy,clearcoat_pars_fragment:t_,iridescence_pars_fragment:e_,opaque_fragment:n_,packing:i_,premultiplied_alpha_fragment:s_,project_vertex:o_,dithering_fragment:r_,dithering_pars_fragment:a_,roughnessmap_fragment:c_,roughnessmap_pars_fragment:l_,shadowmap_pars_fragment:u_,shadowmap_pars_vertex:h_,shadowmap_vertex:f_,shadowmask_pars_fragment:d_,skinbase_vertex:p_,skinning_pars_vertex:m_,skinning_vertex:g_,skinnormal_vertex:x_,specularmap_fragment:v_,specularmap_pars_fragment:M_,tonemapping_fragment:y_,tonemapping_pars_fragment:__,transmission_fragment:w_,transmission_pars_fragment:S_,uv_pars_fragment:b_,uv_pars_vertex:T_,uv_vertex:E_,worldpos_vertex:A_,background_vert:R_,background_frag:C_,backgroundCube_vert:P_,backgroundCube_frag:I_,cube_vert:L_,cube_frag:D_,depth_vert:U_,depth_frag:N_,distanceRGBA_vert:z_,distanceRGBA_frag:F_,equirect_vert:O_,equirect_frag:B_,linedashed_vert:G_,linedashed_frag:k_,meshbasic_vert:H_,meshbasic_frag:V_,meshlambert_vert:W_,meshlambert_frag:X_,meshmatcap_vert:q_,meshmatcap_frag:Y_,meshnormal_vert:Z_,meshnormal_frag:$_,meshphong_vert:j_,meshphong_frag:K_,meshphysical_vert:J_,meshphysical_frag:Q_,meshtoon_vert:t1,meshtoon_frag:e1,points_vert:n1,points_frag:i1,shadow_vert:s1,shadow_frag:o1,sprite_vert:r1,sprite_frag:a1},xt={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Gi={basic:{uniforms:Sn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Sn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new it(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Sn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Sn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Sn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new it(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Sn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Sn([xt.points,xt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Sn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Sn([xt.common,xt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Sn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Sn([xt.sprite,xt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Sn([xt.common,xt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Sn([xt.lights,xt.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Gi.physical={uniforms:Sn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Dc={r:0,b:0,g:0},Ys=new Zi,c1=new xe;function l1(i,t,e,n,s,o,r){const a=new it(0);let l=o===!0?0:1,u,c,p=null,f=0,d=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_)),_}function x(v){let _=!1;const T=g(v);T===null?m(a,l):T&&T.isColor&&(m(T,1),_=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function h(v,_){const T=g(_);T&&(T.isCubeTexture||T.mapping===su)?(c===void 0&&(c=new P(new ja(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Fr(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Ys.copy(_.backgroundRotation),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),c.material.uniforms.envMap.value=T,c.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(c1.makeRotationFromEuler(Ys)),c.material.toneMapped=ue.getTransfer(T.colorSpace)!==we,(p!==T||f!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,p=T,f=T.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(u===void 0&&(u=new P(new he(2,2),new qn({name:"BackgroundMaterial",uniforms:Fr(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:Bs,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=T,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=ue.getTransfer(T.colorSpace)!==we,T.matrixAutoUpdate===!0&&T.updateMatrix(),u.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||f!==T.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,p=T,f=T.version,d=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function m(v,_){v.getRGB(Dc,km(i)),n.buffers.color.setClear(Dc.r,Dc.g,Dc.b,_,r)}function M(){c!==void 0&&(c.geometry.dispose(),c.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:x,addToRenderList:h,dispose:M}}function u1(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let o=s,r=!1;function a(w,A,C,L,U){let H=!1;const G=p(L,C,A);o!==G&&(o=G,u(o.object)),H=d(w,L,C,U),H&&g(w,L,C,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(H||r)&&(r=!1,_(w,A,C,L),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function u(w){return i.bindVertexArray(w)}function c(w){return i.deleteVertexArray(w)}function p(w,A,C){const L=C.wireframe===!0;let U=n[w.id];U===void 0&&(U={},n[w.id]=U);let H=U[A.id];H===void 0&&(H={},U[A.id]=H);let G=H[L];return G===void 0&&(G=f(l()),H[L]=G),G}function f(w){const A=[],C=[],L=[];for(let U=0;U<e;U++)A[U]=0,C[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:C,attributeDivisors:L,object:w,attributes:{},index:null}}function d(w,A,C,L){const U=o.attributes,H=A.attributes;let G=0;const O=C.getAttributes();for(const k in O)if(O[k].location>=0){const ct=U[k];let ft=H[k];if(ft===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(ft=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(ft=w.instanceColor)),ct===void 0||ct.attribute!==ft||ft&&ct.data!==ft.data)return!0;G++}return o.attributesNum!==G||o.index!==L}function g(w,A,C,L){const U={},H=A.attributes;let G=0;const O=C.getAttributes();for(const k in O)if(O[k].location>=0){let ct=H[k];ct===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(ct=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(ct=w.instanceColor));const ft={};ft.attribute=ct,ct&&ct.data&&(ft.data=ct.data),U[k]=ft,G++}o.attributes=U,o.attributesNum=G,o.index=L}function x(){const w=o.newAttributes;for(let A=0,C=w.length;A<C;A++)w[A]=0}function h(w){m(w,0)}function m(w,A){const C=o.newAttributes,L=o.enabledAttributes,U=o.attributeDivisors;C[w]=1,L[w]===0&&(i.enableVertexAttribArray(w),L[w]=1),U[w]!==A&&(i.vertexAttribDivisor(w,A),U[w]=A)}function M(){const w=o.newAttributes,A=o.enabledAttributes;for(let C=0,L=A.length;C<L;C++)A[C]!==w[C]&&(i.disableVertexAttribArray(C),A[C]=0)}function v(w,A,C,L,U,H,G){G===!0?i.vertexAttribIPointer(w,A,C,U,H):i.vertexAttribPointer(w,A,C,L,U,H)}function _(w,A,C,L){x();const U=L.attributes,H=C.getAttributes(),G=A.defaultAttributeValues;for(const O in H){const k=H[O];if(k.location>=0){let nt=U[O];if(nt===void 0&&(O==="instanceMatrix"&&w.instanceMatrix&&(nt=w.instanceMatrix),O==="instanceColor"&&w.instanceColor&&(nt=w.instanceColor)),nt!==void 0){const ct=nt.normalized,ft=nt.itemSize,Pt=t.get(nt);if(Pt===void 0)continue;const Wt=Pt.buffer,et=Pt.type,ut=Pt.bytesPerElement,_t=et===i.INT||et===i.UNSIGNED_INT||nt.gpuType===_d;if(nt.isInterleavedBufferAttribute){const mt=nt.data,It=mt.stride,zt=nt.offset;if(mt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<k.locationSize;Kt++)m(k.location+Kt,mt.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Kt=0;Kt<k.locationSize;Kt++)h(k.location+Kt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let Kt=0;Kt<k.locationSize;Kt++)v(k.location+Kt,ft/k.locationSize,et,ct,It*ut,(zt+ft/k.locationSize*Kt)*ut,_t)}else{if(nt.isInstancedBufferAttribute){for(let mt=0;mt<k.locationSize;mt++)m(k.location+mt,nt.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let mt=0;mt<k.locationSize;mt++)h(k.location+mt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let mt=0;mt<k.locationSize;mt++)v(k.location+mt,ft/k.locationSize,et,ct,ft*ut,ft/k.locationSize*mt*ut,_t)}}else if(G!==void 0){const ct=G[O];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(k.location,ct);break;case 3:i.vertexAttrib3fv(k.location,ct);break;case 4:i.vertexAttrib4fv(k.location,ct);break;default:i.vertexAttrib1fv(k.location,ct)}}}}M()}function T(){R();for(const w in n){const A=n[w];for(const C in A){const L=A[C];for(const U in L)c(L[U].object),delete L[U];delete A[C]}delete n[w]}}function E(w){if(n[w.id]===void 0)return;const A=n[w.id];for(const C in A){const L=A[C];for(const U in L)c(L[U].object),delete L[U];delete A[C]}delete n[w.id]}function b(w){for(const A in n){const C=n[A];if(C[w.id]===void 0)continue;const L=C[w.id];for(const U in L)c(L[U].object),delete L[U];delete C[w.id]}}function R(){S(),r=!0,o!==s&&(o=s,u(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:h,disableUnusedAttributes:M}}function h1(i,t,e){let n;function s(u){n=u}function o(u,c){i.drawArrays(n,u,c),e.update(c,n,1)}function r(u,c,p){p!==0&&(i.drawArraysInstanced(n,u,c,p),e.update(c,n,p))}function a(u,c,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,c,0,p);let d=0;for(let g=0;g<p;g++)d+=c[g];e.update(d,n,1)}function l(u,c,p,f){if(p===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<u.length;g++)r(u[g],c[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,u,0,c,0,f,0,p);let g=0;for(let x=0;x<p;x++)g+=c[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function f1(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(b){return!(b!==Pi&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const R=b===hs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==gs&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==qi&&!R)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const p=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:h,maxAttributes:m,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:T,maxSamples:E}}function d1(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new Ks,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const d=p.length!==0||f||n!==0||s;return s=f,n=p.length,d},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(p,f){e=c(p,f,0)},this.setState=function(p,f,d){const g=p.clippingPlanes,x=p.clipIntersection,h=p.clipShadows,m=i.get(p);if(!s||g===null||g.length===0||o&&!h)o?c(null):u();else{const M=o?0:n,v=M*4;let _=m.clippingState||null;l.value=_,_=c(g,f,v,d);for(let T=0;T!==v;++T)_[T]=e[T];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(p,f,d,g){const x=p!==null?p.length:0;let h=null;if(x!==0){if(h=l.value,g!==!0||h===null){const m=d+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(h===null||h.length<m)&&(h=new Float32Array(m));for(let v=0,_=d;v!==x;++v,_+=4)r.copy(p[v]).applyMatrix4(M,a),r.normal.toArray(h,_),h[_+3]=r.constant}l.value=h,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,h}}function p1(i){let t=new WeakMap;function e(r,a){return a===Nh?r.mapping=Ir:a===zh&&(r.mapping=Lr),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Nh||a===zh)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const u=new Ov(l.height);return u.fromEquirectangularTexture(i,r),t.set(r,u),r.addEventListener("dispose",s),e(u.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const sr=4,Z0=[.125,.215,.35,.446,.526,.582],ro=20,Wu=new Bd,$0=new it;let Xu=null,qu=0,Yu=0,Zu=!1;const Js=(1+Math.sqrt(5))/2,Ho=1/Js,j0=[new F(-Js,Ho,0),new F(Js,Ho,0),new F(-Ho,0,Js),new F(Ho,0,Js),new F(0,Js,-Ho),new F(0,Js,Ho),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class K0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Xu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xu,qu,Yu),this._renderer.xr.enabled=Zu,t.scissorTest=!1,Uc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ir||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xi,minFilter:Xi,generateMipmaps:!1,type:hs,format:Pi,colorSpace:zr,depthBuffer:!1},s=J0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=J0(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m1(o)),this._blurMaterial=g1(o,t,e)}return s}_compileMaterial(t){const e=new P(this._lodPlanes[0],t);this._renderer.compile(e,Wu)}_sceneToCubeUV(t,e,n,s){const a=new ni(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,p=c.autoClear,f=c.toneMapping;c.getClearColor($0),c.toneMapping=Os,c.autoClear=!1;const d=new $({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),g=new P(new ja,d);let x=!1;const h=t.background;h?h.isColor&&(d.color.copy(h),t.background=null,x=!0):(d.color.copy($0),x=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const v=this._cubeSize;Uc(s,M*v,m>2?v:0,v,v),c.setRenderTarget(s),x&&c.render(g,a),c.render(t,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=p,t.background=h}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ir||t.mapping===Lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q0());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new P(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Uc(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Wu)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=j0[(s-o-1)%j0.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,u=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,p=new P(this._lodPlanes[s],u),f=u.uniforms,d=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*ro-1),x=o/g,h=isFinite(o)?1+Math.floor(c*x):ro;h>ro&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${ro}`);const m=[];let M=0;for(let b=0;b<ro;++b){const R=b/x,S=Math.exp(-R*R/2);m.push(S),b===0?M+=S:b<h&&(M+=2*S)}for(let b=0;b<m.length;b++)m[b]=m[b]/M;f.envMap.value=t.texture,f.samples.value=h,f.weights.value=m,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const _=this._sizeLods[s],T=3*_*(s>v-sr?s-v+sr:0),E=4*(this._cubeSize-_);Uc(e,T,E,3*_,2*_),l.setRenderTarget(e),l.render(p,Wu)}}function m1(i){const t=[],e=[],n=[];let s=i;const o=i-sr+1+Z0.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>i-sr?l=Z0[r-i+sr-1]:r===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,p=1+u,f=[c,c,p,c,p,p,c,c,p,p,c,p],d=6,g=6,x=3,h=2,m=1,M=new Float32Array(x*g*d),v=new Float32Array(h*g*d),_=new Float32Array(m*g*d);for(let E=0;E<d;E++){const b=E%3*2/3-1,R=E>2?0:-1,S=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];M.set(S,x*g*E),v.set(f,h*g*E);const w=[E,E,E,E,E,E];_.set(w,m*g*E)}const T=new Ae;T.setAttribute("position",new ze(M,x)),T.setAttribute("uv",new ze(v,h)),T.setAttribute("faceIndex",new ze(_,m)),t.push(T),s>sr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function J0(i,t,e){const n=new Ii(i,t,e);return n.texture.mapping=su,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Uc(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function g1(i,t,e){const n=new Float32Array(ro),s=new F(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:ro,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gd(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function Q0(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gd(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function tp(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function Gd(){return`

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
	`}function x1(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===Nh||l===zh,c=l===Ir||l===Lr;if(u||c){let p=t.get(a);const f=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new K0(i)),p=u?e.fromEquirectangular(a,p):e.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),p.texture;if(p!==void 0)return p.texture;{const d=a.image;return u&&d&&d.height>0||c&&d&&s(d)?(e===null&&(e=new K0(i)),p=u?e.fromEquirectangular(a):e.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),a.addEventListener("dispose",o),p.texture):null}}}return a}function s(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function v1(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Jo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function M1(i,t,e,n){const s={},o=new WeakMap;function r(p){const f=p.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete s[f.id];const d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(p,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function l(p){const f=p.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function u(p){const f=[],d=p.index,g=p.attributes.position;let x=0;if(d!==null){const M=d.array;x=d.version;for(let v=0,_=M.length;v<_;v+=3){const T=M[v+0],E=M[v+1],b=M[v+2];f.push(T,E,E,b,b,T)}}else if(g!==void 0){const M=g.array;x=g.version;for(let v=0,_=M.length/3-1;v<_;v+=3){const T=v+0,E=v+1,b=v+2;f.push(T,E,E,b,b,T)}}else return;const h=new(Um(f)?Gm:Bm)(f,1);h.version=x;const m=o.get(p);m&&t.remove(m),o.set(p,h)}function c(p){const f=o.get(p);if(f){const d=p.index;d!==null&&f.version<d.version&&u(p)}else u(p);return o.get(p)}return{get:a,update:l,getWireframeAttribute:c}}function y1(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function l(f,d){i.drawElements(n,d,o,f*r),e.update(d,n,1)}function u(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,o,f*r,g),e.update(d,n,g))}function c(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,f,0,g);let h=0;for(let m=0;m<g;m++)h+=d[m];e.update(h,n,1)}function p(f,d,g,x){if(g===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<f.length;m++)u(f[m]/r,d[m],x[m]);else{h.multiDrawElementsInstancedWEBGL(n,d,0,o,f,0,x,0,g);let m=0;for(let M=0;M<g;M++)m+=d[M]*x[M];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=p}function _1(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function w1(i,t,e){const n=new WeakMap,s=new be;function o(r,a,l){const u=r.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=c!==void 0?c.length:0;let f=n.get(a);if(f===void 0||f.count!==p){let w=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",w)};var d=w;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,h=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),h===!0&&(_=3);let T=a.attributes.position.count*_,E=1;T>t.maxTextureSize&&(E=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const b=new Float32Array(T*E*4*p),R=new zm(b,T,E,p);R.type=qi,R.needsUpdate=!0;const S=_*4;for(let A=0;A<p;A++){const C=m[A],L=M[A],U=v[A],H=T*E*4*A;for(let G=0;G<C.count;G++){const O=G*S;g===!0&&(s.fromBufferAttribute(C,G),b[H+O+0]=s.x,b[H+O+1]=s.y,b[H+O+2]=s.z,b[H+O+3]=0),x===!0&&(s.fromBufferAttribute(L,G),b[H+O+4]=s.x,b[H+O+5]=s.y,b[H+O+6]=s.z,b[H+O+7]=0),h===!0&&(s.fromBufferAttribute(U,G),b[H+O+8]=s.x,b[H+O+9]=s.y,b[H+O+10]=s.z,b[H+O+11]=U.itemSize===4?s.w:1)}}f={count:p,texture:R,size:new pt(T,E)},n.set(a,f),a.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let h=0;h<u.length;h++)g+=u[h];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function S1(i,t,e,n){let s=new WeakMap;function o(l){const u=n.render.frame,c=l.geometry,p=t.get(l,c);if(s.get(p)!==u&&(t.update(p),s.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return p}function r(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:r}}const rg=new yn,ep=new Zm(1,1),ag=new zm,cg=new Sv,lg=new Vm,np=[],ip=[],sp=new Float32Array(16),op=new Float32Array(9),rp=new Float32Array(4);function qr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=np[s];if(o===void 0&&(o=new Float32Array(s),np[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function au(i,t){let e=ip[t];e===void 0&&(e=new Int32Array(t),ip[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function b1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function T1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function E1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function A1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function R1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,n))return;rp.set(n),i.uniformMatrix2fv(this.addr,!1,rp),Je(e,n)}}function C1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,n))return;op.set(n),i.uniformMatrix3fv(this.addr,!1,op),Je(e,n)}}function P1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,n))return;sp.set(n),i.uniformMatrix4fv(this.addr,!1,sp),Je(e,n)}}function I1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function L1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function D1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function U1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function N1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function z1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function F1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function O1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function B1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(ep.compareFunction=Dm,o=ep):o=rg,e.setTexture2D(t||o,s)}function G1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||cg,s)}function k1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||lg,s)}function H1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ag,s)}function V1(i){switch(i){case 5126:return b1;case 35664:return T1;case 35665:return E1;case 35666:return A1;case 35674:return R1;case 35675:return C1;case 35676:return P1;case 5124:case 35670:return I1;case 35667:case 35671:return L1;case 35668:case 35672:return D1;case 35669:case 35673:return U1;case 5125:return N1;case 36294:return z1;case 36295:return F1;case 36296:return O1;case 35678:case 36198:case 36298:case 36306:case 35682:return B1;case 35679:case 36299:case 36307:return G1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return H1}}function W1(i,t){i.uniform1fv(this.addr,t)}function X1(i,t){const e=qr(t,this.size,2);i.uniform2fv(this.addr,e)}function q1(i,t){const e=qr(t,this.size,3);i.uniform3fv(this.addr,e)}function Y1(i,t){const e=qr(t,this.size,4);i.uniform4fv(this.addr,e)}function Z1(i,t){const e=qr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $1(i,t){const e=qr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function j1(i,t){const e=qr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function K1(i,t){i.uniform1iv(this.addr,t)}function J1(i,t){i.uniform2iv(this.addr,t)}function Q1(i,t){i.uniform3iv(this.addr,t)}function tw(i,t){i.uniform4iv(this.addr,t)}function ew(i,t){i.uniform1uiv(this.addr,t)}function nw(i,t){i.uniform2uiv(this.addr,t)}function iw(i,t){i.uniform3uiv(this.addr,t)}function sw(i,t){i.uniform4uiv(this.addr,t)}function ow(i,t,e){const n=this.cache,s=t.length,o=au(e,s);Ke(n,o)||(i.uniform1iv(this.addr,o),Je(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||rg,o[r])}function rw(i,t,e){const n=this.cache,s=t.length,o=au(e,s);Ke(n,o)||(i.uniform1iv(this.addr,o),Je(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||cg,o[r])}function aw(i,t,e){const n=this.cache,s=t.length,o=au(e,s);Ke(n,o)||(i.uniform1iv(this.addr,o),Je(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||lg,o[r])}function cw(i,t,e){const n=this.cache,s=t.length,o=au(e,s);Ke(n,o)||(i.uniform1iv(this.addr,o),Je(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||ag,o[r])}function lw(i){switch(i){case 5126:return W1;case 35664:return X1;case 35665:return q1;case 35666:return Y1;case 35674:return Z1;case 35675:return $1;case 35676:return j1;case 5124:case 35670:return K1;case 35667:case 35671:return J1;case 35668:case 35672:return Q1;case 35669:case 35673:return tw;case 5125:return ew;case 36294:return nw;case 36295:return iw;case 36296:return sw;case 35678:case 36198:case 36298:case 36306:case 35682:return ow;case 35679:case 36299:case 36307:return rw;case 35680:case 36300:case 36308:case 36293:return aw;case 36289:case 36303:case 36311:case 36292:return cw}}class uw{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=V1(e.type)}}class hw{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lw(e.type)}}class fw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const $u=/(\w+)(\])?(\[|\.)?/g;function ap(i,t){i.seq.push(t),i.map[t.id]=t}function dw(i,t,e){const n=i.name,s=n.length;for($u.lastIndex=0;;){const o=$u.exec(n),r=$u.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&r+2===s){ap(e,u===void 0?new uw(a,i,t):new hw(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new fw(a),ap(e,p)),e=p}}}class sl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);dw(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function cp(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const pw=37297;let mw=0;function gw(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const lp=new Yt;function xw(i){ue._getMatrix(lp,ue.workingColorSpace,i);const t=`mat3( ${lp.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case Sl:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function up(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+gw(i.getShaderSource(t),r)}else return s}function vw(i,t){const e=xw(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Mw(i,t){let e;switch(t){case jx:e="Linear";break;case Kx:e="Reinhard";break;case Jx:e="Cineon";break;case _m:e="ACESFilmic";break;case tv:e="AgX";break;case ev:e="Neutral";break;case Qx:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Nc=new F;function yw(){ue.getLuminanceCoefficients(Nc);const i=Nc.x.toFixed(4),t=Nc.y.toFixed(4),e=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _w(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function ww(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sw(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function ma(i){return i!==""}function hp(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function gf(i){return i.replace(bw,Ew)}const Tw=new Map;function Ew(i,t){let e=$t[t];if(e===void 0){const n=Tw.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return gf(e)}const Aw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dp(i){return i.replace(Aw,Rw)}function Rw(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function pp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Cw(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vm?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mm?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ns&&(t="SHADOWMAP_TYPE_VSM"),t}function Pw(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ir:case Lr:t="ENVMAP_TYPE_CUBE";break;case su:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Iw(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Lr:t="ENVMAP_MODE_REFRACTION";break}return t}function Lw(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ym:t="ENVMAP_BLENDING_MULTIPLY";break;case Zx:t="ENVMAP_BLENDING_MIX";break;case $x:t="ENVMAP_BLENDING_ADD";break}return t}function Dw(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Uw(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=Cw(e),u=Pw(e),c=Iw(e),p=Lw(e),f=Dw(e),d=_w(e),g=ww(o),x=s.createProgram();let h,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ma).join(`
`),h.length>0&&(h+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ma).join(`
`),m.length>0&&(m+=`
`)):(h=[pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),m=[pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Os?"#define TONE_MAPPING":"",e.toneMapping!==Os?$t.tonemapping_pars_fragment:"",e.toneMapping!==Os?Mw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,vw("linearToOutputTexel",e.outputColorSpace),yw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ma).join(`
`)),r=gf(r),r=hp(r,e),r=fp(r,e),a=gf(a),a=hp(a,e),a=fp(a,e),r=dp(r),a=dp(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,h=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,m=["#define varying in",e.glslVersion===h0?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===h0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=M+h+r,_=M+m+a,T=cp(s,s.VERTEX_SHADER,v),E=cp(s,s.FRAGMENT_SHADER,_);s.attachShader(x,T),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function b(A){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(x).trim(),L=s.getShaderInfoLog(T).trim(),U=s.getShaderInfoLog(E).trim();let H=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,E);else{const O=up(s,T,"vertex"),k=up(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+C+`
`+O+`
`+k)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(L===""||U==="")&&(G=!1);G&&(A.diagnostics={runnable:H,programLog:C,vertexShader:{log:L,prefix:h},fragmentShader:{log:U,prefix:m}})}s.deleteShader(T),s.deleteShader(E),R=new sl(s,x),S=Sw(s,x)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(x,pw)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mw++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=E,this}let Nw=0;class zw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Fw(t),e.set(t,n)),n}}class Fw{constructor(t){this.id=Nw++,this.code=t,this.usedTimes=0}}function Ow(i,t,e,n,s,o,r){const a=new Fm,l=new zw,u=new Set,c=[],p=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return u.add(S),S===0?"uv":`uv${S}`}function h(S,w,A,C,L){const U=C.fog,H=L.geometry,G=S.isMeshStandardMaterial?C.environment:null,O=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),k=O&&O.mapping===su?O.image.height:null,nt=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const ct=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ft=ct!==void 0?ct.length:0;let Pt=0;H.morphAttributes.position!==void 0&&(Pt=1),H.morphAttributes.normal!==void 0&&(Pt=2),H.morphAttributes.color!==void 0&&(Pt=3);let Wt,et,ut,_t;if(nt){const ve=Gi[nt];Wt=ve.vertexShader,et=ve.fragmentShader}else Wt=S.vertexShader,et=S.fragmentShader,l.update(S),ut=l.getVertexShaderID(S),_t=l.getFragmentShaderID(S);const mt=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),zt=L.isInstancedMesh===!0,Kt=L.isBatchedMesh===!0,De=!!S.map,se=!!S.matcap,Ve=!!O,B=!!S.aoMap,li=!!S.lightMap,ee=!!S.bumpMap,ne=!!S.normalMap,Nt=!!S.displacementMap,Re=!!S.emissiveMap,Ut=!!S.metalnessMap,z=!!S.roughnessMap,I=S.anisotropy>0,j=S.clearcoat>0,rt=S.dispersion>0,lt=S.iridescence>0,st=S.sheen>0,Lt=S.transmission>0,yt=I&&!!S.anisotropyMap,Tt=j&&!!S.clearcoatMap,oe=j&&!!S.clearcoatNormalMap,dt=j&&!!S.clearcoatRoughnessMap,Et=lt&&!!S.iridescenceMap,Bt=lt&&!!S.iridescenceThicknessMap,Gt=st&&!!S.sheenColorMap,At=st&&!!S.sheenRoughnessMap,ie=!!S.specularMap,Zt=!!S.specularColorMap,Ee=!!S.specularIntensityMap,V=Lt&&!!S.transmissionMap,vt=Lt&&!!S.thicknessMap,tt=!!S.gradientMap,at=!!S.alphaMap,St=S.alphaTest>0,wt=!!S.alphaHash,qt=!!S.extensions;let Fe=Os;S.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Fe=i.toneMapping);const un={shaderID:nt,shaderType:S.type,shaderName:S.name,vertexShader:Wt,fragmentShader:et,defines:S.defines,customVertexShaderID:ut,customFragmentShaderID:_t,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Kt,batchingColor:Kt&&L._colorsTexture!==null,instancing:zt,instancingColor:zt&&L.instanceColor!==null,instancingMorph:zt&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:zr,alphaToCoverage:!!S.alphaToCoverage,map:De,matcap:se,envMap:Ve,envMapMode:Ve&&O.mapping,envMapCubeUVHeight:k,aoMap:B,lightMap:li,bumpMap:ee,normalMap:ne,displacementMap:f&&Nt,emissiveMap:Re,normalMapObjectSpace:ne&&S.normalMapType===ov,normalMapTangentSpace:ne&&S.normalMapType===Lm,metalnessMap:Ut,roughnessMap:z,anisotropy:I,anisotropyMap:yt,clearcoat:j,clearcoatMap:Tt,clearcoatNormalMap:oe,clearcoatRoughnessMap:dt,dispersion:rt,iridescence:lt,iridescenceMap:Et,iridescenceThicknessMap:Bt,sheen:st,sheenColorMap:Gt,sheenRoughnessMap:At,specularMap:ie,specularColorMap:Zt,specularIntensityMap:Ee,transmission:Lt,transmissionMap:V,thicknessMap:vt,gradientMap:tt,opaque:S.transparent===!1&&S.blending===dr&&S.alphaToCoverage===!1,alphaMap:at,alphaTest:St,alphaHash:wt,combine:S.combine,mapUv:De&&x(S.map.channel),aoMapUv:B&&x(S.aoMap.channel),lightMapUv:li&&x(S.lightMap.channel),bumpMapUv:ee&&x(S.bumpMap.channel),normalMapUv:ne&&x(S.normalMap.channel),displacementMapUv:Nt&&x(S.displacementMap.channel),emissiveMapUv:Re&&x(S.emissiveMap.channel),metalnessMapUv:Ut&&x(S.metalnessMap.channel),roughnessMapUv:z&&x(S.roughnessMap.channel),anisotropyMapUv:yt&&x(S.anisotropyMap.channel),clearcoatMapUv:Tt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:At&&x(S.sheenRoughnessMap.channel),specularMapUv:ie&&x(S.specularMap.channel),specularColorMapUv:Zt&&x(S.specularColorMap.channel),specularIntensityMapUv:Ee&&x(S.specularIntensityMap.channel),transmissionMapUv:V&&x(S.transmissionMap.channel),thicknessMapUv:vt&&x(S.thicknessMap.channel),alphaMapUv:at&&x(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ne||I),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!H.attributes.uv&&(De||at),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:It,skinning:L.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Pt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:De&&S.map.isVideoTexture===!0&&ue.getTransfer(S.map.colorSpace)===we,decodeVideoTextureEmissive:Re&&S.emissiveMap.isVideoTexture===!0&&ue.getTransfer(S.emissiveMap.colorSpace)===we,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ct,flipSided:S.side===Mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:qt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&S.extensions.multiDraw===!0||Kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return un.vertexUv1s=u.has(1),un.vertexUv2s=u.has(2),un.vertexUv3s=u.has(3),u.clear(),un}function m(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)w.push(A),w.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(M(w,S),v(w,S),w.push(i.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function M(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function v(S,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const w=g[S.type];let A;if(w){const C=Gi[w];A=Al.clone(C.uniforms)}else A=S.uniforms;return A}function T(S,w){let A;for(let C=0,L=c.length;C<L;C++){const U=c[C];if(U.cacheKey===w){A=U,++A.usedTimes;break}}return A===void 0&&(A=new Uw(i,w,S,o),c.push(A)),A}function E(S){if(--S.usedTimes===0){const w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),S.destroy()}}function b(S){l.remove(S)}function R(){l.dispose()}return{getParameters:h,getProgramCacheKey:m,getUniforms:_,acquireProgram:T,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:R}}function Bw(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Gw(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function mp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gp(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(p,f,d,g,x,h){let m=i[t];return m===void 0?(m={id:p.id,object:p,geometry:f,material:d,groupOrder:g,renderOrder:p.renderOrder,z:x,group:h},i[t]=m):(m.id=p.id,m.object=p,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=p.renderOrder,m.z=x,m.group=h),t++,m}function a(p,f,d,g,x,h){const m=r(p,f,d,g,x,h);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(p,f,d,g,x,h){const m=r(p,f,d,g,x,h);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function u(p,f){e.length>1&&e.sort(p||Gw),n.length>1&&n.sort(f||mp),s.length>1&&s.sort(f||mp)}function c(){for(let p=t,f=i.length;p<f;p++){const d=i[p];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:c,sort:u}}function kw(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new gp,i.set(n,[r])):s>=o.length?(r=new gp,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Hw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new it};break;case"SpotLight":e={position:new F,direction:new F,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new it,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new it,groundColor:new it};break;case"RectAreaLight":e={color:new it,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Vw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ww=0;function Xw(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qw(i){const t=new Hw,e=Vw(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new F);const s=new F,o=new xe,r=new xe;function a(u){let c=0,p=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,x=0,h=0,m=0,M=0,v=0,_=0,T=0,E=0,b=0;u.sort(Xw);for(let S=0,w=u.length;S<w;S++){const A=u[S],C=A.color,L=A.intensity,U=A.distance,H=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)c+=C.r*L,p+=C.g*L,f+=C.b*L;else if(A.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(A.sh.coefficients[G],L);b++}else if(A.isDirectionalLight){const G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const O=A.shadow,k=e.get(A);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=A.shadow.matrix,M++}n.directional[d]=G,d++}else if(A.isSpotLight){const G=t.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(C).multiplyScalar(L),G.distance=U,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,n.spot[x]=G;const O=A.shadow;if(A.map&&(n.spotLightMap[T]=A.map,T++,O.updateMatrices(A),A.castShadow&&E++),n.spotLightMatrix[x]=O.matrix,A.castShadow){const k=e.get(A);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=H,_++}x++}else if(A.isRectAreaLight){const G=t.get(A);G.color.copy(C).multiplyScalar(L),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),n.rectArea[h]=G,h++}else if(A.isPointLight){const G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){const O=A.shadow,k=e.get(A);k.shadowIntensity=O.intensity,k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,k.shadowCameraNear=O.camera.near,k.shadowCameraFar=O.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=A.shadow.matrix,v++}n.point[g]=G,g++}else if(A.isHemisphereLight){const G=t.get(A);G.skyColor.copy(A.color).multiplyScalar(L),G.groundColor.copy(A.groundColor).multiplyScalar(L),n.hemi[m]=G,m++}}h>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=p,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==h||R.hemiLength!==m||R.numDirectionalShadows!==M||R.numPointShadows!==v||R.numSpotShadows!==_||R.numSpotMaps!==T||R.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=h,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=b,R.directionalLength=d,R.pointLength=g,R.spotLength=x,R.rectAreaLength=h,R.hemiLength=m,R.numDirectionalShadows=M,R.numPointShadows=v,R.numSpotShadows=_,R.numSpotMaps=T,R.numLightProbes=b,n.version=Ww++)}function l(u,c){let p=0,f=0,d=0,g=0,x=0;const h=c.matrixWorldInverse;for(let m=0,M=u.length;m<M;m++){const v=u[m];if(v.isDirectionalLight){const _=n.directional[p];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(h),p++}else if(v.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(h),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(h),d++}else if(v.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(h),r.identity(),o.copy(v.matrixWorld),o.premultiply(h),r.extractRotation(o),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(h),f++}else if(v.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(h),x++}}}return{setup:a,setupView:l,state:n}}function xp(i){const t=new qw(i),e=[],n=[];function s(c){u.camera=c,e.length=0,n.length=0}function o(c){e.push(c)}function r(c){n.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function Yw(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new xp(i),t.set(s,[a])):o>=r.length?(a=new xp(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Zw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$w=`uniform sampler2D shadow_pass;
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
}`;function jw(i,t,e){let n=new Pd;const s=new pt,o=new pt,r=new be,a=new _M({depthPacking:sv}),l=new wM,u={},c=e.maxTextureSize,p={[Bs]:Mn,[Mn]:Bs,[Ct]:Ct},f=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Zw,fragmentShader:$w}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new P(g,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vm;let m=this.type;this.render=function(E,b,R){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),w=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),C=i.state;C.setBlending(us),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const L=m!==ns&&this.type===ns,U=m===ns&&this.type!==ns;for(let H=0,G=E.length;H<G;H++){const O=E[H],k=O.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const nt=k.getFrameExtents();if(s.multiply(nt),o.copy(k.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(o.x=Math.floor(c/nt.x),s.x=o.x*nt.x,k.mapSize.x=o.x),s.y>c&&(o.y=Math.floor(c/nt.y),s.y=o.y*nt.y,k.mapSize.y=o.y)),k.map===null||L===!0||U===!0){const ft=this.type!==ns?{minFilter:ai,magFilter:ai}:{};k.map!==null&&k.map.dispose(),k.map=new Ii(s.x,s.y,ft),k.map.texture.name=O.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const ct=k.getViewportCount();for(let ft=0;ft<ct;ft++){const Pt=k.getViewport(ft);r.set(o.x*Pt.x,o.y*Pt.y,o.x*Pt.z,o.y*Pt.w),C.viewport(r),k.updateMatrices(O,ft),n=k.getFrustum(),_(b,R,k.camera,O,this.type)}k.isPointLightShadow!==!0&&this.type===ns&&M(k,R),k.needsUpdate=!1}m=this.type,h.needsUpdate=!1,i.setRenderTarget(S,w,A)};function M(E,b){const R=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ii(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,R,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,R,d,x,null)}function v(E,b,R,S){let w=null;const A=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)w=A;else if(w=R.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const C=w.uuid,L=b.uuid;let U=u[C];U===void 0&&(U={},u[C]=U);let H=U[L];H===void 0&&(H=w.clone(),U[L]=H,b.addEventListener("dispose",T)),w=H}if(w.visible=b.visible,w.wireframe=b.wireframe,S===ns?w.side=b.shadowSide!==null?b.shadowSide:b.side:w.side=b.shadowSide!==null?b.shadowSide:p[b.side],w.alphaMap=b.alphaMap,w.alphaTest=b.alphaTest,w.map=b.map,w.clipShadows=b.clipShadows,w.clippingPlanes=b.clippingPlanes,w.clipIntersection=b.clipIntersection,w.displacementMap=b.displacementMap,w.displacementScale=b.displacementScale,w.displacementBias=b.displacementBias,w.wireframeLinewidth=b.wireframeLinewidth,w.linewidth=b.linewidth,R.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const C=i.properties.get(w);C.light=R}return w}function _(E,b,R,S,w){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===ns)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const L=t.update(E),U=E.material;if(Array.isArray(U)){const H=L.groups;for(let G=0,O=H.length;G<O;G++){const k=H[G],nt=U[k.materialIndex];if(nt&&nt.visible){const ct=v(E,nt,S,w);E.onBeforeShadow(i,E,b,R,L,ct,k),i.renderBufferDirect(R,null,L,ct,E,k),E.onAfterShadow(i,E,b,R,L,ct,k)}}}else if(U.visible){const H=v(E,U,S,w);E.onBeforeShadow(i,E,b,R,L,H,null),i.renderBufferDirect(R,null,L,H,E,null),E.onAfterShadow(i,E,b,R,L,H,null)}}const C=E.children;for(let L=0,U=C.length;L<U;L++)_(C[L],b,R,S,w)}function T(E){E.target.removeEventListener("dispose",T);for(const R in u){const S=u[R],w=E.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}const Kw={[Rh]:Ch,[Ph]:Dh,[Ih]:Uh,[Pr]:Lh,[Ch]:Rh,[Dh]:Ph,[Uh]:Ih,[Lh]:Pr};function Jw(i,t){function e(){let V=!1;const vt=new be;let tt=null;const at=new be(0,0,0,0);return{setMask:function(St){tt!==St&&!V&&(i.colorMask(St,St,St,St),tt=St)},setLocked:function(St){V=St},setClear:function(St,wt,qt,Fe,un){un===!0&&(St*=Fe,wt*=Fe,qt*=Fe),vt.set(St,wt,qt,Fe),at.equals(vt)===!1&&(i.clearColor(St,wt,qt,Fe),at.copy(vt))},reset:function(){V=!1,tt=null,at.set(-1,0,0,0)}}}function n(){let V=!1,vt=!1,tt=null,at=null,St=null;return{setReversed:function(wt){if(vt!==wt){const qt=t.get("EXT_clip_control");vt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);const Fe=St;St=null,this.setClear(Fe)}vt=wt},getReversed:function(){return vt},setTest:function(wt){wt?mt(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(wt){tt!==wt&&!V&&(i.depthMask(wt),tt=wt)},setFunc:function(wt){if(vt&&(wt=Kw[wt]),at!==wt){switch(wt){case Rh:i.depthFunc(i.NEVER);break;case Ch:i.depthFunc(i.ALWAYS);break;case Ph:i.depthFunc(i.LESS);break;case Pr:i.depthFunc(i.LEQUAL);break;case Ih:i.depthFunc(i.EQUAL);break;case Lh:i.depthFunc(i.GEQUAL);break;case Dh:i.depthFunc(i.GREATER);break;case Uh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}at=wt}},setLocked:function(wt){V=wt},setClear:function(wt){St!==wt&&(vt&&(wt=1-wt),i.clearDepth(wt),St=wt)},reset:function(){V=!1,tt=null,at=null,St=null,vt=!1}}}function s(){let V=!1,vt=null,tt=null,at=null,St=null,wt=null,qt=null,Fe=null,un=null;return{setTest:function(ve){V||(ve?mt(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(ve){vt!==ve&&!V&&(i.stencilMask(ve),vt=ve)},setFunc:function(ve,_i,ji){(tt!==ve||at!==_i||St!==ji)&&(i.stencilFunc(ve,_i,ji),tt=ve,at=_i,St=ji)},setOp:function(ve,_i,ji){(wt!==ve||qt!==_i||Fe!==ji)&&(i.stencilOp(ve,_i,ji),wt=ve,qt=_i,Fe=ji)},setLocked:function(ve){V=ve},setClear:function(ve){un!==ve&&(i.clearStencil(ve),un=ve)},reset:function(){V=!1,vt=null,tt=null,at=null,St=null,wt=null,qt=null,Fe=null,un=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,u=new WeakMap;let c={},p={},f=new WeakMap,d=[],g=null,x=!1,h=null,m=null,M=null,v=null,_=null,T=null,E=null,b=new it(0,0,0),R=0,S=!1,w=null,A=null,C=null,L=null,U=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,O=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=O>=1):k.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=O>=2);let nt=null,ct={};const ft=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),Wt=new be().fromArray(ft),et=new be().fromArray(Pt);function ut(V,vt,tt,at){const St=new Uint8Array(4),wt=i.createTexture();i.bindTexture(V,wt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<tt;qt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,at,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(vt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return wt}const _t={};_t[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),mt(i.DEPTH_TEST),r.setFunc(Pr),ee(!1),ne(a0),mt(i.CULL_FACE),B(us);function mt(V){c[V]!==!0&&(i.enable(V),c[V]=!0)}function It(V){c[V]!==!1&&(i.disable(V),c[V]=!1)}function zt(V,vt){return p[V]!==vt?(i.bindFramebuffer(V,vt),p[V]=vt,V===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=vt),V===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function Kt(V,vt){let tt=d,at=!1;if(V){tt=f.get(vt),tt===void 0&&(tt=[],f.set(vt,tt));const St=V.textures;if(tt.length!==St.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,qt=St.length;wt<qt;wt++)tt[wt]=i.COLOR_ATTACHMENT0+wt;tt.length=St.length,at=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,at=!0);at&&i.drawBuffers(tt)}function De(V){return g!==V?(i.useProgram(V),g=V,!0):!1}const se={[oo]:i.FUNC_ADD,[Ix]:i.FUNC_SUBTRACT,[Lx]:i.FUNC_REVERSE_SUBTRACT};se[Dx]=i.MIN,se[Ux]=i.MAX;const Ve={[Nx]:i.ZERO,[zx]:i.ONE,[Fx]:i.SRC_COLOR,[Eh]:i.SRC_ALPHA,[Vx]:i.SRC_ALPHA_SATURATE,[kx]:i.DST_COLOR,[Bx]:i.DST_ALPHA,[Ox]:i.ONE_MINUS_SRC_COLOR,[Ah]:i.ONE_MINUS_SRC_ALPHA,[Hx]:i.ONE_MINUS_DST_COLOR,[Gx]:i.ONE_MINUS_DST_ALPHA,[Wx]:i.CONSTANT_COLOR,[Xx]:i.ONE_MINUS_CONSTANT_COLOR,[qx]:i.CONSTANT_ALPHA,[Yx]:i.ONE_MINUS_CONSTANT_ALPHA};function B(V,vt,tt,at,St,wt,qt,Fe,un,ve){if(V===us){x===!0&&(It(i.BLEND),x=!1);return}if(x===!1&&(mt(i.BLEND),x=!0),V!==Px){if(V!==h||ve!==S){if((m!==oo||_!==oo)&&(i.blendEquation(i.FUNC_ADD),m=oo,_=oo),ve)switch(V){case dr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jt:i.blendFunc(i.ONE,i.ONE);break;case c0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case l0:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case dr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jt:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case c0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case l0:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}M=null,v=null,T=null,E=null,b.set(0,0,0),R=0,h=V,S=ve}return}St=St||vt,wt=wt||tt,qt=qt||at,(vt!==m||St!==_)&&(i.blendEquationSeparate(se[vt],se[St]),m=vt,_=St),(tt!==M||at!==v||wt!==T||qt!==E)&&(i.blendFuncSeparate(Ve[tt],Ve[at],Ve[wt],Ve[qt]),M=tt,v=at,T=wt,E=qt),(Fe.equals(b)===!1||un!==R)&&(i.blendColor(Fe.r,Fe.g,Fe.b,un),b.copy(Fe),R=un),h=V,S=!1}function li(V,vt){V.side===Ct?It(i.CULL_FACE):mt(i.CULL_FACE);let tt=V.side===Mn;vt&&(tt=!tt),ee(tt),V.blending===dr&&V.transparent===!1?B(us):B(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),r.setFunc(V.depthFunc),r.setTest(V.depthTest),r.setMask(V.depthWrite),o.setMask(V.colorWrite);const at=V.stencilWrite;a.setTest(at),at&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Re(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(V){w!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),w=V)}function ne(V){V!==Rx?(mt(i.CULL_FACE),V!==A&&(V===a0?i.cullFace(i.BACK):V===Cx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),A=V}function Nt(V){V!==C&&(G&&i.lineWidth(V),C=V)}function Re(V,vt,tt){V?(mt(i.POLYGON_OFFSET_FILL),(L!==vt||U!==tt)&&(i.polygonOffset(vt,tt),L=vt,U=tt)):It(i.POLYGON_OFFSET_FILL)}function Ut(V){V?mt(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function z(V){V===void 0&&(V=i.TEXTURE0+H-1),nt!==V&&(i.activeTexture(V),nt=V)}function I(V,vt,tt){tt===void 0&&(nt===null?tt=i.TEXTURE0+H-1:tt=nt);let at=ct[tt];at===void 0&&(at={type:void 0,texture:void 0},ct[tt]=at),(at.type!==V||at.texture!==vt)&&(nt!==tt&&(i.activeTexture(tt),nt=tt),i.bindTexture(V,vt||_t[V]),at.type=V,at.texture=vt)}function j(){const V=ct[nt];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function yt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Bt(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(V){Wt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Wt.copy(V))}function At(V){et.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),et.copy(V))}function ie(V,vt){let tt=u.get(vt);tt===void 0&&(tt=new WeakMap,u.set(vt,tt));let at=tt.get(V);at===void 0&&(at=i.getUniformBlockIndex(vt,V.name),tt.set(V,at))}function Zt(V,vt){const at=u.get(vt).get(V);l.get(vt)!==at&&(i.uniformBlockBinding(vt,at,V.__bindingPointIndex),l.set(vt,at))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},nt=null,ct={},p={},f=new WeakMap,d=[],g=null,x=!1,h=null,m=null,M=null,v=null,_=null,T=null,E=null,b=new it(0,0,0),R=0,S=!1,w=null,A=null,C=null,L=null,U=null,Wt.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:mt,disable:It,bindFramebuffer:zt,drawBuffers:Kt,useProgram:De,setBlending:B,setMaterial:li,setFlipSided:ee,setCullFace:ne,setLineWidth:Nt,setPolygonOffset:Re,setScissorTest:Ut,activeTexture:z,bindTexture:I,unbindTexture:j,compressedTexImage2D:rt,compressedTexImage3D:lt,texImage2D:Et,texImage3D:Bt,updateUBOMapping:ie,uniformBlockBinding:Zt,texStorage2D:oe,texStorage3D:dt,texSubImage2D:st,texSubImage3D:Lt,compressedTexSubImage2D:yt,compressedTexSubImage3D:Tt,scissor:Gt,viewport:At,reset:Ee}}function Qw(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new pt,c=new WeakMap;let p;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(z,I){return d?new OffscreenCanvas(z,I):El("canvas")}function x(z,I,j){let rt=1;const lt=Ut(z);if((lt.width>j||lt.height>j)&&(rt=j/Math.max(lt.width,lt.height)),rt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const st=Math.floor(rt*lt.width),Lt=Math.floor(rt*lt.height);p===void 0&&(p=g(st,Lt));const yt=I?g(st,Lt):p;return yt.width=st,yt.height=Lt,yt.getContext("2d").drawImage(z,0,0,st,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+st+"x"+Lt+")."),yt}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),z;return z}function h(z){return z.generateMipmaps}function m(z){i.generateMipmap(z)}function M(z){return z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?i.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(z,I,j,rt,lt=!1){if(z!==null){if(i[z]!==void 0)return i[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let st=I;if(I===i.RED&&(j===i.FLOAT&&(st=i.R32F),j===i.HALF_FLOAT&&(st=i.R16F),j===i.UNSIGNED_BYTE&&(st=i.R8)),I===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(st=i.R8UI),j===i.UNSIGNED_SHORT&&(st=i.R16UI),j===i.UNSIGNED_INT&&(st=i.R32UI),j===i.BYTE&&(st=i.R8I),j===i.SHORT&&(st=i.R16I),j===i.INT&&(st=i.R32I)),I===i.RG&&(j===i.FLOAT&&(st=i.RG32F),j===i.HALF_FLOAT&&(st=i.RG16F),j===i.UNSIGNED_BYTE&&(st=i.RG8)),I===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(st=i.RG8UI),j===i.UNSIGNED_SHORT&&(st=i.RG16UI),j===i.UNSIGNED_INT&&(st=i.RG32UI),j===i.BYTE&&(st=i.RG8I),j===i.SHORT&&(st=i.RG16I),j===i.INT&&(st=i.RG32I)),I===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(st=i.RGB8UI),j===i.UNSIGNED_SHORT&&(st=i.RGB16UI),j===i.UNSIGNED_INT&&(st=i.RGB32UI),j===i.BYTE&&(st=i.RGB8I),j===i.SHORT&&(st=i.RGB16I),j===i.INT&&(st=i.RGB32I)),I===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),j===i.UNSIGNED_INT&&(st=i.RGBA32UI),j===i.BYTE&&(st=i.RGBA8I),j===i.SHORT&&(st=i.RGBA16I),j===i.INT&&(st=i.RGBA32I)),I===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),I===i.RGBA){const Lt=lt?Sl:ue.getTransfer(rt);j===i.FLOAT&&(st=i.RGBA32F),j===i.HALF_FLOAT&&(st=i.RGBA16F),j===i.UNSIGNED_BYTE&&(st=Lt===we?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function _(z,I){let j;return z?I===null||I===xo||I===Ur?j=i.DEPTH24_STENCIL8:I===qi?j=i.DEPTH32F_STENCIL8:I===Ba&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===xo||I===Ur?j=i.DEPTH_COMPONENT24:I===qi?j=i.DEPTH_COMPONENT32F:I===Ba&&(j=i.DEPTH_COMPONENT16),j}function T(z,I){return h(z)===!0||z.isFramebufferTexture&&z.minFilter!==ai&&z.minFilter!==Xi?Math.log2(Math.max(I.width,I.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?I.mipmaps.length:1}function E(z){const I=z.target;I.removeEventListener("dispose",E),R(I),I.isVideoTexture&&c.delete(I)}function b(z){const I=z.target;I.removeEventListener("dispose",b),w(I)}function R(z){const I=n.get(z);if(I.__webglInit===void 0)return;const j=z.source,rt=f.get(j);if(rt){const lt=rt[I.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&S(z),Object.keys(rt).length===0&&f.delete(j)}n.remove(z)}function S(z){const I=n.get(z);i.deleteTexture(I.__webglTexture);const j=z.source,rt=f.get(j);delete rt[I.__cacheKey],r.memory.textures--}function w(z){const I=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(I.__webglFramebuffer[rt]))for(let lt=0;lt<I.__webglFramebuffer[rt].length;lt++)i.deleteFramebuffer(I.__webglFramebuffer[rt][lt]);else i.deleteFramebuffer(I.__webglFramebuffer[rt]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[rt])}else{if(Array.isArray(I.__webglFramebuffer))for(let rt=0;rt<I.__webglFramebuffer.length;rt++)i.deleteFramebuffer(I.__webglFramebuffer[rt]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let rt=0;rt<I.__webglColorRenderbuffer.length;rt++)I.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[rt]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}const j=z.textures;for(let rt=0,lt=j.length;rt<lt;rt++){const st=n.get(j[rt]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),r.memory.textures--),n.remove(j[rt])}n.remove(z)}let A=0;function C(){A=0}function L(){const z=A;return z>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),A+=1,z}function U(z){const I=[];return I.push(z.wrapS),I.push(z.wrapT),I.push(z.wrapR||0),I.push(z.magFilter),I.push(z.minFilter),I.push(z.anisotropy),I.push(z.internalFormat),I.push(z.format),I.push(z.type),I.push(z.generateMipmaps),I.push(z.premultiplyAlpha),I.push(z.flipY),I.push(z.unpackAlignment),I.push(z.colorSpace),I.join()}function H(z,I){const j=n.get(z);if(z.isVideoTexture&&Nt(z),z.isRenderTargetTexture===!1&&z.version>0&&j.__version!==z.version){const rt=z.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(j,z,I);return}}e.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+I)}function G(z,I){const j=n.get(z);if(z.version>0&&j.__version!==z.version){et(j,z,I);return}e.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+I)}function O(z,I){const j=n.get(z);if(z.version>0&&j.__version!==z.version){et(j,z,I);return}e.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+I)}function k(z,I){const j=n.get(z);if(z.version>0&&j.__version!==z.version){ut(j,z,I);return}e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+I)}const nt={[Dr]:i.REPEAT,[ao]:i.CLAMP_TO_EDGE,[Fh]:i.MIRRORED_REPEAT},ct={[ai]:i.NEAREST,[nv]:i.NEAREST_MIPMAP_NEAREST,[sc]:i.NEAREST_MIPMAP_LINEAR,[Xi]:i.LINEAR,[pu]:i.LINEAR_MIPMAP_NEAREST,[co]:i.LINEAR_MIPMAP_LINEAR},ft={[rv]:i.NEVER,[fv]:i.ALWAYS,[av]:i.LESS,[Dm]:i.LEQUAL,[cv]:i.EQUAL,[hv]:i.GEQUAL,[lv]:i.GREATER,[uv]:i.NOTEQUAL};function Pt(z,I){if(I.type===qi&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===Xi||I.magFilter===pu||I.magFilter===sc||I.magFilter===co||I.minFilter===Xi||I.minFilter===pu||I.minFilter===sc||I.minFilter===co)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,nt[I.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,nt[I.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,nt[I.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,ct[I.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,ct[I.minFilter]),I.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,ft[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===ai||I.minFilter!==sc&&I.minFilter!==co||I.type===qi&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");i.texParameterf(z,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function Wt(z,I){let j=!1;z.__webglInit===void 0&&(z.__webglInit=!0,I.addEventListener("dispose",E));const rt=I.source;let lt=f.get(rt);lt===void 0&&(lt={},f.set(rt,lt));const st=U(I);if(st!==z.__cacheKey){lt[st]===void 0&&(lt[st]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,j=!0),lt[st].usedTimes++;const Lt=lt[z.__cacheKey];Lt!==void 0&&(lt[z.__cacheKey].usedTimes--,Lt.usedTimes===0&&S(I)),z.__cacheKey=st,z.__webglTexture=lt[st].texture}return j}function et(z,I,j){let rt=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(rt=i.TEXTURE_3D);const lt=Wt(z,I),st=I.source;e.bindTexture(rt,z.__webglTexture,i.TEXTURE0+j);const Lt=n.get(st);if(st.version!==Lt.__version||lt===!0){e.activeTexture(i.TEXTURE0+j);const yt=ue.getPrimaries(ue.workingColorSpace),Tt=I.colorSpace===Cs?null:ue.getPrimaries(I.colorSpace),oe=I.colorSpace===Cs||yt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let dt=x(I.image,!1,s.maxTextureSize);dt=Re(I,dt);const Et=o.convert(I.format,I.colorSpace),Bt=o.convert(I.type);let Gt=v(I.internalFormat,Et,Bt,I.colorSpace,I.isVideoTexture);Pt(rt,I);let At;const ie=I.mipmaps,Zt=I.isVideoTexture!==!0,Ee=Lt.__version===void 0||lt===!0,V=st.dataReady,vt=T(I,dt);if(I.isDepthTexture)Gt=_(I.format===Nr,I.type),Ee&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Gt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,dt.width,dt.height,0,Et,Bt,null));else if(I.isDataTexture)if(ie.length>0){Zt&&Ee&&e.texStorage2D(i.TEXTURE_2D,vt,Gt,ie[0].width,ie[0].height);for(let tt=0,at=ie.length;tt<at;tt++)At=ie[tt],Zt?V&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,At.width,At.height,Et,Bt,At.data):e.texImage2D(i.TEXTURE_2D,tt,Gt,At.width,At.height,0,Et,Bt,At.data);I.generateMipmaps=!1}else Zt?(Ee&&e.texStorage2D(i.TEXTURE_2D,vt,Gt,dt.width,dt.height),V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,Et,Bt,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,dt.width,dt.height,0,Et,Bt,dt.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){Zt&&Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Gt,ie[0].width,ie[0].height,dt.depth);for(let tt=0,at=ie.length;tt<at;tt++)if(At=ie[tt],I.format!==Pi)if(Et!==null)if(Zt){if(V)if(I.layerUpdates.size>0){const St=Y0(At.width,At.height,I.format,I.type);for(const wt of I.layerUpdates){const qt=At.data.subarray(wt*St/At.data.BYTES_PER_ELEMENT,(wt+1)*St/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,wt,At.width,At.height,1,Et,qt)}I.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,At.width,At.height,dt.depth,Et,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,Gt,At.width,At.height,dt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,At.width,At.height,dt.depth,Et,Bt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,Gt,At.width,At.height,dt.depth,0,Et,Bt,At.data)}else{Zt&&Ee&&e.texStorage2D(i.TEXTURE_2D,vt,Gt,ie[0].width,ie[0].height);for(let tt=0,at=ie.length;tt<at;tt++)At=ie[tt],I.format!==Pi?Et!==null?Zt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,Gt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?V&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,At.width,At.height,Et,Bt,At.data):e.texImage2D(i.TEXTURE_2D,tt,Gt,At.width,At.height,0,Et,Bt,At.data)}else if(I.isDataArrayTexture)if(Zt){if(Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Gt,dt.width,dt.height,dt.depth),V)if(I.layerUpdates.size>0){const tt=Y0(dt.width,dt.height,I.format,I.type);for(const at of I.layerUpdates){const St=dt.data.subarray(at*tt/dt.data.BYTES_PER_ELEMENT,(at+1)*tt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,dt.width,dt.height,1,Et,Bt,St)}I.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Et,Bt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,dt.width,dt.height,dt.depth,0,Et,Bt,dt.data);else if(I.isData3DTexture)Zt?(Ee&&e.texStorage3D(i.TEXTURE_3D,vt,Gt,dt.width,dt.height,dt.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Et,Bt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,dt.width,dt.height,dt.depth,0,Et,Bt,dt.data);else if(I.isFramebufferTexture){if(Ee)if(Zt)e.texStorage2D(i.TEXTURE_2D,vt,Gt,dt.width,dt.height);else{let tt=dt.width,at=dt.height;for(let St=0;St<vt;St++)e.texImage2D(i.TEXTURE_2D,St,Gt,tt,at,0,Et,Bt,null),tt>>=1,at>>=1}}else if(ie.length>0){if(Zt&&Ee){const tt=Ut(ie[0]);e.texStorage2D(i.TEXTURE_2D,vt,Gt,tt.width,tt.height)}for(let tt=0,at=ie.length;tt<at;tt++)At=ie[tt],Zt?V&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Et,Bt,At):e.texImage2D(i.TEXTURE_2D,tt,Gt,Et,Bt,At);I.generateMipmaps=!1}else if(Zt){if(Ee){const tt=Ut(dt);e.texStorage2D(i.TEXTURE_2D,vt,Gt,tt.width,tt.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Bt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Gt,Et,Bt,dt);h(I)&&m(rt),Lt.__version=st.version,I.onUpdate&&I.onUpdate(I)}z.__version=I.version}function ut(z,I,j){if(I.image.length!==6)return;const rt=Wt(z,I),lt=I.source;e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+j);const st=n.get(lt);if(lt.version!==st.__version||rt===!0){e.activeTexture(i.TEXTURE0+j);const Lt=ue.getPrimaries(ue.workingColorSpace),yt=I.colorSpace===Cs?null:ue.getPrimaries(I.colorSpace),Tt=I.colorSpace===Cs||Lt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const oe=I.isCompressedTexture||I.image[0].isCompressedTexture,dt=I.image[0]&&I.image[0].isDataTexture,Et=[];for(let at=0;at<6;at++)!oe&&!dt?Et[at]=x(I.image[at],!0,s.maxCubemapSize):Et[at]=dt?I.image[at].image:I.image[at],Et[at]=Re(I,Et[at]);const Bt=Et[0],Gt=o.convert(I.format,I.colorSpace),At=o.convert(I.type),ie=v(I.internalFormat,Gt,At,I.colorSpace),Zt=I.isVideoTexture!==!0,Ee=st.__version===void 0||rt===!0,V=lt.dataReady;let vt=T(I,Bt);Pt(i.TEXTURE_CUBE_MAP,I);let tt;if(oe){Zt&&Ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,ie,Bt.width,Bt.height);for(let at=0;at<6;at++){tt=Et[at].mipmaps;for(let St=0;St<tt.length;St++){const wt=tt[St];I.format!==Pi?Gt!==null?Zt?V&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,0,0,wt.width,wt.height,Gt,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,ie,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,0,0,wt.width,wt.height,Gt,At,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,ie,wt.width,wt.height,0,Gt,At,wt.data)}}}else{if(tt=I.mipmaps,Zt&&Ee){tt.length>0&&vt++;const at=Ut(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,ie,at.width,at.height)}for(let at=0;at<6;at++)if(dt){Zt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Et[at].width,Et[at].height,Gt,At,Et[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ie,Et[at].width,Et[at].height,0,Gt,At,Et[at].data);for(let St=0;St<tt.length;St++){const qt=tt[St].image[at].image;Zt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,0,0,qt.width,qt.height,Gt,At,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,ie,qt.width,qt.height,0,Gt,At,qt.data)}}else{Zt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Gt,At,Et[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ie,Gt,At,Et[at]);for(let St=0;St<tt.length;St++){const wt=tt[St];Zt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,0,0,Gt,At,wt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,ie,Gt,At,wt.image[at])}}}h(I)&&m(i.TEXTURE_CUBE_MAP),st.__version=lt.version,I.onUpdate&&I.onUpdate(I)}z.__version=I.version}function _t(z,I,j,rt,lt,st){const Lt=o.convert(j.format,j.colorSpace),yt=o.convert(j.type),Tt=v(j.internalFormat,Lt,yt,j.colorSpace),oe=n.get(I),dt=n.get(j);if(dt.__renderTarget=I,!oe.__hasExternalTextures){const Et=Math.max(1,I.width>>st),Bt=Math.max(1,I.height>>st);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,st,Tt,Et,Bt,I.depth,0,Lt,yt,null):e.texImage2D(lt,st,Tt,Et,Bt,0,Lt,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,z),ne(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,lt,dt.__webglTexture,0,ee(I)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,lt,dt.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(z,I,j){if(i.bindRenderbuffer(i.RENDERBUFFER,z),I.depthBuffer){const rt=I.depthTexture,lt=rt&&rt.isDepthTexture?rt.type:null,st=_(I.stencilBuffer,lt),Lt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=ee(I);ne(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,st,I.width,I.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,st,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,st,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,z)}else{const rt=I.textures;for(let lt=0;lt<rt.length;lt++){const st=rt[lt],Lt=o.convert(st.format,st.colorSpace),yt=o.convert(st.type),Tt=v(st.internalFormat,Lt,yt,st.colorSpace),oe=ee(I);j&&ne(I)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Tt,I.width,I.height):ne(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,Tt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(z,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,z),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=n.get(I.depthTexture);rt.__renderTarget=I,(!rt.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),H(I.depthTexture,0);const lt=rt.__webglTexture,st=ee(I);if(I.depthTexture.format===pr)ne(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0);else if(I.depthTexture.format===Nr)ne(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function zt(z){const I=n.get(z),j=z.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==z.depthTexture){const rt=z.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),rt){const lt=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,rt.removeEventListener("dispose",lt)};rt.addEventListener("dispose",lt),I.__depthDisposeCallback=lt}I.__boundDepthTexture=rt}if(z.depthTexture&&!I.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");It(I.__webglFramebuffer,z)}else if(j){I.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[rt]),I.__webglDepthbuffer[rt]===void 0)I.__webglDepthbuffer[rt]=i.createRenderbuffer(),mt(I.__webglDepthbuffer[rt],z,!1);else{const lt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=I.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,st)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),mt(I.__webglDepthbuffer,z,!1);else{const rt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(z,I,j){const rt=n.get(z);I!==void 0&&_t(rt.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&zt(z)}function De(z){const I=z.texture,j=n.get(z),rt=n.get(I);z.addEventListener("dispose",b);const lt=z.textures,st=z.isWebGLCubeRenderTarget===!0,Lt=lt.length>1;if(Lt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=I.version,r.memory.textures++),st){j.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(I.mipmaps&&I.mipmaps.length>0){j.__webglFramebuffer[yt]=[];for(let Tt=0;Tt<I.mipmaps.length;Tt++)j.__webglFramebuffer[yt][Tt]=i.createFramebuffer()}else j.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){j.__webglFramebuffer=[];for(let yt=0;yt<I.mipmaps.length;yt++)j.__webglFramebuffer[yt]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let yt=0,Tt=lt.length;yt<Tt;yt++){const oe=n.get(lt[yt]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),r.memory.textures++)}if(z.samples>0&&ne(z)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let yt=0;yt<lt.length;yt++){const Tt=lt[yt];j.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[yt]);const oe=o.convert(Tt.format,Tt.colorSpace),dt=o.convert(Tt.type),Et=v(Tt.internalFormat,oe,dt,Tt.colorSpace,z.isXRRenderTarget===!0),Bt=ee(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Et,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,j.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(j.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,I);for(let yt=0;yt<6;yt++)if(I.mipmaps&&I.mipmaps.length>0)for(let Tt=0;Tt<I.mipmaps.length;Tt++)_t(j.__webglFramebuffer[yt][Tt],z,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Tt);else _t(j.__webglFramebuffer[yt],z,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);h(I)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let yt=0,Tt=lt.length;yt<Tt;yt++){const oe=lt[yt],dt=n.get(oe);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),Pt(i.TEXTURE_2D,oe),_t(j.__webglFramebuffer,z,oe,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),h(oe)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(yt=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,rt.__webglTexture),Pt(yt,I),I.mipmaps&&I.mipmaps.length>0)for(let Tt=0;Tt<I.mipmaps.length;Tt++)_t(j.__webglFramebuffer[Tt],z,I,i.COLOR_ATTACHMENT0,yt,Tt);else _t(j.__webglFramebuffer,z,I,i.COLOR_ATTACHMENT0,yt,0);h(I)&&m(yt),e.unbindTexture()}z.depthBuffer&&zt(z)}function se(z){const I=z.textures;for(let j=0,rt=I.length;j<rt;j++){const lt=I[j];if(h(lt)){const st=M(z),Lt=n.get(lt).__webglTexture;e.bindTexture(st,Lt),m(st),e.unbindTexture()}}}const Ve=[],B=[];function li(z){if(z.samples>0){if(ne(z)===!1){const I=z.textures,j=z.width,rt=z.height;let lt=i.COLOR_BUFFER_BIT;const st=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(z),yt=I.length>1;if(yt)for(let Tt=0;Tt<I.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Tt=0;Tt<I.length;Tt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);const oe=n.get(I[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,j,rt,0,0,j,rt,lt,i.NEAREST),l===!0&&(Ve.length=0,B.length=0,Ve.push(i.COLOR_ATTACHMENT0+Tt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Ve.push(st),B.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ve))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let Tt=0;Tt<I.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);const oe=n.get(I[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&l){const I=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function ee(z){return Math.min(s.maxSamples,z.samples)}function ne(z){const I=n.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Nt(z){const I=r.render.frame;c.get(z)!==I&&(c.set(z,I),z.update())}function Re(z,I){const j=z.colorSpace,rt=z.format,lt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||j!==zr&&j!==Cs&&(ue.getTransfer(j)===we?(rt!==Pi||lt!==gs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),I}function Ut(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(u.width=z.naturalWidth||z.width,u.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(u.width=z.displayWidth,u.height=z.displayHeight):(u.width=z.width,u.height=z.height),u}this.allocateTextureUnit=L,this.resetTextureUnits=C,this.setTexture2D=H,this.setTexture2DArray=G,this.setTexture3D=O,this.setTextureCube=k,this.rebindTextures=Kt,this.setupRenderTarget=De,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=li,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=ne}function t2(i,t){function e(n,s=Cs){let o;const r=ue.getTransfer(s);if(n===gs)return i.UNSIGNED_BYTE;if(n===wd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sm)return i.BYTE;if(n===bm)return i.SHORT;if(n===Ba)return i.UNSIGNED_SHORT;if(n===_d)return i.INT;if(n===xo)return i.UNSIGNED_INT;if(n===qi)return i.FLOAT;if(n===hs)return i.HALF_FLOAT;if(n===Em)return i.ALPHA;if(n===Am)return i.RGB;if(n===Pi)return i.RGBA;if(n===Rm)return i.LUMINANCE;if(n===Cm)return i.LUMINANCE_ALPHA;if(n===pr)return i.DEPTH_COMPONENT;if(n===Nr)return i.DEPTH_STENCIL;if(n===bd)return i.RED;if(n===Td)return i.RED_INTEGER;if(n===Pm)return i.RG;if(n===Ed)return i.RG_INTEGER;if(n===Ad)return i.RGBA_INTEGER;if(n===Qc||n===tl||n===el||n===nl)if(r===we)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Qc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===el)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Qc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===el)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oh||n===Bh||n===Gh||n===kh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Oh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hh||n===Vh||n===Wh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Hh||n===Vh)return r===we?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Wh)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xh||n===qh||n===Yh||n===Zh||n===$h||n===jh||n===Kh||n===Jh||n===Qh||n===tf||n===ef||n===nf||n===sf||n===of)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Xh)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qh)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yh)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zh)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$h)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jh)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kh)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jh)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qh)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tf)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ef)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nf)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sf)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===of)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===il||n===rf||n===af)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===il)return r===we?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===af)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Im||n===cf||n===lf||n===uf)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===il)return o.COMPRESSED_RED_RGTC1_EXT;if(n===cf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const e2={type:"move"};class ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){r=!0;for(const x of t.hand.values()){const h=e.getJointPose(x,n),m=this._getHandJoint(u,x);h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=h.radius),m.visible=h!==null}const c=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=c.position.distanceTo(p.position),d=.02,g=.005;u.inputState.pinching&&f>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(e2)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const n2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i2=`
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

}`;class s2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new yn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new qn({vertexShader:n2,fragmentShader:i2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new P(new he(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class o2 extends Wr{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,u=null,c=null,p=null,f=null,d=null,g=null;const x=new s2,h=e.getContextAttributes();let m=null,M=null;const v=[],_=[],T=new pt;let E=null;const b=new ni;b.viewport=new be;const R=new ni;R.viewport=new be;const S=[b,R],w=new EM;let A=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ut=v[et];return ut===void 0&&(ut=new ju,v[et]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(et){let ut=v[et];return ut===void 0&&(ut=new ju,v[et]=ut),ut.getGripSpace()},this.getHand=function(et){let ut=v[et];return ut===void 0&&(ut=new ju,v[et]=ut),ut.getHandSpace()};function L(et){const ut=_.indexOf(et.inputSource);if(ut===-1)return;const _t=v[ut];_t!==void 0&&(_t.update(et.inputSource,et.frame,u||r),_t.dispatchEvent({type:et.type,data:et.inputSource}))}function U(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",H);for(let et=0;et<v.length;et++){const ut=_[et];ut!==null&&(_[et]=null,v[et].disconnect(ut))}A=null,C=null,x.reset(),t.setRenderTarget(m),d=null,f=null,p=null,s=null,M=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){o=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||r},this.setReferenceSpace=function(et){u=et},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",U),s.addEventListener("inputsourceschange",H),h.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(T),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let _t=null,mt=null,It=null;h.depth&&(It=h.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=h.stencil?Nr:pr,mt=h.stencil?Ur:xo);const zt={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:o};p=new XRWebGLBinding(s,e),f=p.createProjectionLayer(zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Ii(f.textureWidth,f.textureHeight,{format:Pi,type:gs,depthTexture:new Zm(f.textureWidth,f.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:h.stencil,colorSpace:t.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const _t={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ii(d.framebufferWidth,d.framebufferHeight,{format:Pi,type:gs,colorSpace:t.outputColorSpace,stencilBuffer:h.stencil})}M.isXRRenderTarget=!0,this.setFoveation(l),u=null,r=await s.requestReferenceSpace(a),Wt.setContext(s),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(et){for(let ut=0;ut<et.removed.length;ut++){const _t=et.removed[ut],mt=_.indexOf(_t);mt>=0&&(_[mt]=null,v[mt].disconnect(_t))}for(let ut=0;ut<et.added.length;ut++){const _t=et.added[ut];let mt=_.indexOf(_t);if(mt===-1){for(let zt=0;zt<v.length;zt++)if(zt>=_.length){_.push(_t),mt=zt;break}else if(_[zt]===null){_[zt]=_t,mt=zt;break}if(mt===-1)break}const It=v[mt];It&&It.connect(_t)}}const G=new F,O=new F;function k(et,ut,_t){G.setFromMatrixPosition(ut.matrixWorld),O.setFromMatrixPosition(_t.matrixWorld);const mt=G.distanceTo(O),It=ut.projectionMatrix.elements,zt=_t.projectionMatrix.elements,Kt=It[14]/(It[10]-1),De=It[14]/(It[10]+1),se=(It[9]+1)/It[5],Ve=(It[9]-1)/It[5],B=(It[8]-1)/It[0],li=(zt[8]+1)/zt[0],ee=Kt*B,ne=Kt*li,Nt=mt/(-B+li),Re=Nt*-B;if(ut.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Re),et.translateZ(Nt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),It[10]===-1)et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Ut=Kt+Nt,z=De+Nt,I=ee-Re,j=ne+(mt-Re),rt=se*De/z*Ut,lt=Ve*De/z*Ut;et.projectionMatrix.makePerspective(I,j,rt,lt,Ut,z),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function nt(et,ut){ut===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ut.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let ut=et.near,_t=et.far;x.texture!==null&&(x.depthNear>0&&(ut=x.depthNear),x.depthFar>0&&(_t=x.depthFar)),w.near=R.near=b.near=ut,w.far=R.far=b.far=_t,(A!==w.near||C!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),A=w.near,C=w.far),b.layers.mask=et.layers.mask|2,R.layers.mask=et.layers.mask|4,w.layers.mask=b.layers.mask|R.layers.mask;const mt=et.parent,It=w.cameras;nt(w,mt);for(let zt=0;zt<It.length;zt++)nt(It[zt],mt);It.length===2?k(w,b,R):w.projectionMatrix.copy(b.projectionMatrix),ct(et,w,mt)};function ct(et,ut,_t){_t===null?et.matrix.copy(ut.matrixWorld):(et.matrix.copy(_t.matrixWorld),et.matrix.invert(),et.matrix.multiply(ut.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=hf*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(et){l=et,f!==null&&(f.fixedFoveation=et),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=et)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(w)};let ft=null;function Pt(et,ut){if(c=ut.getViewerPose(u||r),g=ut,c!==null){const _t=c.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let mt=!1;_t.length!==w.cameras.length&&(w.cameras.length=0,mt=!0);for(let zt=0;zt<_t.length;zt++){const Kt=_t[zt];let De=null;if(d!==null)De=d.getViewport(Kt);else{const Ve=p.getViewSubImage(f,Kt);De=Ve.viewport,zt===0&&(t.setRenderTargetTextures(M,Ve.colorTexture,f.ignoreDepthValues?void 0:Ve.depthStencilTexture),t.setRenderTarget(M))}let se=S[zt];se===void 0&&(se=new ni,se.layers.enable(zt),se.viewport=new be,S[zt]=se),se.matrix.fromArray(Kt.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Kt.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(De.x,De.y,De.width,De.height),zt===0&&(w.matrix.copy(se.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),mt===!0&&w.cameras.push(se)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){const zt=p.getDepthInformation(_t[0]);zt&&zt.isValid&&zt.texture&&x.init(t,zt,s.renderState)}}for(let _t=0;_t<v.length;_t++){const mt=_[_t],It=v[_t];mt!==null&&It!==void 0&&It.update(mt,ut,u||r)}ft&&ft(et,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),g=null}const Wt=new og;Wt.setAnimationLoop(Pt),this.setAnimationLoop=function(et){ft=et},this.dispose=function(){}}}const Zs=new Zi,r2=new xe;function a2(i,t){function e(h,m){h.matrixAutoUpdate===!0&&h.updateMatrix(),m.value.copy(h.matrix)}function n(h,m){m.color.getRGB(h.fogColor.value,km(i)),m.isFog?(h.fogNear.value=m.near,h.fogFar.value=m.far):m.isFogExp2&&(h.fogDensity.value=m.density)}function s(h,m,M,v,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(h,m):m.isMeshToonMaterial?(o(h,m),p(h,m)):m.isMeshPhongMaterial?(o(h,m),c(h,m)):m.isMeshStandardMaterial?(o(h,m),f(h,m),m.isMeshPhysicalMaterial&&d(h,m,_)):m.isMeshMatcapMaterial?(o(h,m),g(h,m)):m.isMeshDepthMaterial?o(h,m):m.isMeshDistanceMaterial?(o(h,m),x(h,m)):m.isMeshNormalMaterial?o(h,m):m.isLineBasicMaterial?(r(h,m),m.isLineDashedMaterial&&a(h,m)):m.isPointsMaterial?l(h,m,M,v):m.isSpriteMaterial?u(h,m):m.isShadowMaterial?(h.color.value.copy(m.color),h.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(h,m){h.opacity.value=m.opacity,m.color&&h.diffuse.value.copy(m.color),m.emissive&&h.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(h.map.value=m.map,e(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,e(m.alphaMap,h.alphaMapTransform)),m.bumpMap&&(h.bumpMap.value=m.bumpMap,e(m.bumpMap,h.bumpMapTransform),h.bumpScale.value=m.bumpScale,m.side===Mn&&(h.bumpScale.value*=-1)),m.normalMap&&(h.normalMap.value=m.normalMap,e(m.normalMap,h.normalMapTransform),h.normalScale.value.copy(m.normalScale),m.side===Mn&&h.normalScale.value.negate()),m.displacementMap&&(h.displacementMap.value=m.displacementMap,e(m.displacementMap,h.displacementMapTransform),h.displacementScale.value=m.displacementScale,h.displacementBias.value=m.displacementBias),m.emissiveMap&&(h.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,h.emissiveMapTransform)),m.specularMap&&(h.specularMap.value=m.specularMap,e(m.specularMap,h.specularMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);const M=t.get(m),v=M.envMap,_=M.envMapRotation;v&&(h.envMap.value=v,Zs.copy(_),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),h.envMapRotation.value.setFromMatrix4(r2.makeRotationFromEuler(Zs)),h.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=m.reflectivity,h.ior.value=m.ior,h.refractionRatio.value=m.refractionRatio),m.lightMap&&(h.lightMap.value=m.lightMap,h.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,h.lightMapTransform)),m.aoMap&&(h.aoMap.value=m.aoMap,h.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,h.aoMapTransform))}function r(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,m.map&&(h.map.value=m.map,e(m.map,h.mapTransform))}function a(h,m){h.dashSize.value=m.dashSize,h.totalSize.value=m.dashSize+m.gapSize,h.scale.value=m.scale}function l(h,m,M,v){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.size.value=m.size*M,h.scale.value=v*.5,m.map&&(h.map.value=m.map,e(m.map,h.uvTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,e(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function u(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.rotation.value=m.rotation,m.map&&(h.map.value=m.map,e(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,e(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function c(h,m){h.specular.value.copy(m.specular),h.shininess.value=Math.max(m.shininess,1e-4)}function p(h,m){m.gradientMap&&(h.gradientMap.value=m.gradientMap)}function f(h,m){h.metalness.value=m.metalness,m.metalnessMap&&(h.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,h.metalnessMapTransform)),h.roughness.value=m.roughness,m.roughnessMap&&(h.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,h.roughnessMapTransform)),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)}function d(h,m,M){h.ior.value=m.ior,m.sheen>0&&(h.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),h.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(h.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,h.sheenColorMapTransform)),m.sheenRoughnessMap&&(h.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,h.sheenRoughnessMapTransform))),m.clearcoat>0&&(h.clearcoat.value=m.clearcoat,h.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(h.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,h.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(h.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&h.clearcoatNormalScale.value.negate())),m.dispersion>0&&(h.dispersion.value=m.dispersion),m.iridescence>0&&(h.iridescence.value=m.iridescence,h.iridescenceIOR.value=m.iridescenceIOR,h.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(h.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,h.iridescenceMapTransform)),m.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),m.transmission>0&&(h.transmission.value=m.transmission,h.transmissionSamplerMap.value=M.texture,h.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(h.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,h.transmissionMapTransform)),h.thickness.value=m.thickness,m.thicknessMap&&(h.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=m.attenuationDistance,h.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(h.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(h.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=m.specularIntensity,h.specularColor.value.copy(m.specularColor),m.specularColorMap&&(h.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,h.specularColorMapTransform)),m.specularIntensityMap&&(h.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,m){m.matcap&&(h.matcap.value=m.matcap)}function x(h,m){const M=t.get(m).light;h.referencePosition.value.setFromMatrixPosition(M.matrixWorld),h.nearDistance.value=M.shadow.camera.near,h.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function c2(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const _=v.program;n.uniformBlockBinding(M,_)}function u(M,v){let _=s[M.id];_===void 0&&(g(M),_=c(M),s[M.id]=_,M.addEventListener("dispose",h));const T=v.program;n.updateUBOMapping(M,T);const E=t.render.frame;o[M.id]!==E&&(f(M),o[M.id]=E)}function c(M){const v=p();M.__bindingPointIndex=v;const _=i.createBuffer(),T=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function p(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=s[M.id],_=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,b=_.length;E<b;E++){const R=Array.isArray(_[E])?_[E]:[_[E]];for(let S=0,w=R.length;S<w;S++){const A=R[S];if(d(A,E,S,T)===!0){const C=A.__offset,L=Array.isArray(A.value)?A.value:[A.value];let U=0;for(let H=0;H<L.length;H++){const G=L[H],O=x(G);typeof G=="number"||typeof G=="boolean"?(A.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,C+U,A.__data)):G.isMatrix3?(A.__data[0]=G.elements[0],A.__data[1]=G.elements[1],A.__data[2]=G.elements[2],A.__data[3]=0,A.__data[4]=G.elements[3],A.__data[5]=G.elements[4],A.__data[6]=G.elements[5],A.__data[7]=0,A.__data[8]=G.elements[6],A.__data[9]=G.elements[7],A.__data[10]=G.elements[8],A.__data[11]=0):(G.toArray(A.__data,U),U+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,v,_,T){const E=M.value,b=v+"_"+_;if(T[b]===void 0)return typeof E=="number"||typeof E=="boolean"?T[b]=E:T[b]=E.clone(),!0;{const R=T[b];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return T[b]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(M){const v=M.uniforms;let _=0;const T=16;for(let b=0,R=v.length;b<R;b++){const S=Array.isArray(v[b])?v[b]:[v[b]];for(let w=0,A=S.length;w<A;w++){const C=S[w],L=Array.isArray(C.value)?C.value:[C.value];for(let U=0,H=L.length;U<H;U++){const G=L[U],O=x(G),k=_%T,nt=k%O.boundary,ct=k+nt;_+=nt,ct!==0&&T-ct<O.storage&&(_+=T-ct),C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=_,_+=O.storage}}}const E=_%T;return E>0&&(_+=T-E),M.__size=_,M.__cache={},this}function x(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function h(M){const v=M.target;v.removeEventListener("dispose",h);const _=r.indexOf(v.__bindingPointIndex);r.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete o[v.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);r=[],s={},o={}}return{bind:l,update:u,dispose:m}}class l2{constructor(t={}){const{canvas:e=pv(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const g=new Uint32Array(4),x=new Int32Array(4);let h=null,m=null;const M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=On,this.toneMapping=Os,this.toneMappingExposure=1;const _=this;let T=!1,E=0,b=0,R=null,S=-1,w=null;const A=new be,C=new be;let L=null;const U=new it(0);let H=0,G=e.width,O=e.height,k=1,nt=null,ct=null;const ft=new be(0,0,G,O),Pt=new be(0,0,G,O);let Wt=!1;const et=new Pd;let ut=!1,_t=!1;this.transmissionResolutionScale=1;const mt=new xe,It=new xe,zt=new F,Kt=new be,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function Ve(){return R===null?k:1}let B=n;function li(D,W){return e.getContext(D,W)}try{const D={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yd}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",wt,!1),B===null){const W="webgl2";if(B=li(W,D),B===null)throw li(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let ee,ne,Nt,Re,Ut,z,I,j,rt,lt,st,Lt,yt,Tt,oe,dt,Et,Bt,Gt,At,ie,Zt,Ee,V;function vt(){ee=new v1(B),ee.init(),Zt=new t2(B,ee),ne=new f1(B,ee,t,Zt),Nt=new Jw(B,ee),ne.reverseDepthBuffer&&f&&Nt.buffers.depth.setReversed(!0),Re=new _1(B),Ut=new Bw,z=new Qw(B,ee,Nt,Ut,ne,Zt,Re),I=new p1(_),j=new x1(_),rt=new RM(B),Ee=new u1(B,rt),lt=new M1(B,rt,Re,Ee),st=new S1(B,lt,rt,Re),Gt=new w1(B,ne,z),dt=new d1(Ut),Lt=new Ow(_,I,j,ee,ne,Ee,dt),yt=new a2(_,Ut),Tt=new kw,oe=new Yw(ee),Bt=new l1(_,I,j,Nt,st,d,l),Et=new jw(_,st,ne),V=new c2(B,Re,ne,Nt),At=new h1(B,ee,Re),ie=new y1(B,ee,Re),Re.programs=Lt.programs,_.capabilities=ne,_.extensions=ee,_.properties=Ut,_.renderLists=Tt,_.shadowMap=Et,_.state=Nt,_.info=Re}vt();const tt=new o2(_,B);this.xr=tt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const D=ee.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ee.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(D){D!==void 0&&(k=D,this.setSize(G,O,!1))},this.getSize=function(D){return D.set(G,O)},this.setSize=function(D,W,J=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=D,O=W,e.width=Math.floor(D*k),e.height=Math.floor(W*k),J===!0&&(e.style.width=D+"px",e.style.height=W+"px"),this.setViewport(0,0,D,W)},this.getDrawingBufferSize=function(D){return D.set(G*k,O*k).floor()},this.setDrawingBufferSize=function(D,W,J){G=D,O=W,k=J,e.width=Math.floor(D*J),e.height=Math.floor(W*J),this.setViewport(0,0,D,W)},this.getCurrentViewport=function(D){return D.copy(A)},this.getViewport=function(D){return D.copy(ft)},this.setViewport=function(D,W,J,Q){D.isVector4?ft.set(D.x,D.y,D.z,D.w):ft.set(D,W,J,Q),Nt.viewport(A.copy(ft).multiplyScalar(k).round())},this.getScissor=function(D){return D.copy(Pt)},this.setScissor=function(D,W,J,Q){D.isVector4?Pt.set(D.x,D.y,D.z,D.w):Pt.set(D,W,J,Q),Nt.scissor(C.copy(Pt).multiplyScalar(k).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(D){Nt.setScissorTest(Wt=D)},this.setOpaqueSort=function(D){nt=D},this.setTransparentSort=function(D){ct=D},this.getClearColor=function(D){return D.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(D=!0,W=!0,J=!0){let Q=0;if(D){let X=!1;if(R!==null){const ht=R.texture.format;X=ht===Ad||ht===Ed||ht===Td}if(X){const ht=R.texture.type,Mt=ht===gs||ht===xo||ht===Ba||ht===Ur||ht===wd||ht===Sd,bt=Bt.getClearColor(),Rt=Bt.getClearAlpha(),kt=bt.r,Ht=bt.g,Ft=bt.b;Mt?(g[0]=kt,g[1]=Ht,g[2]=Ft,g[3]=Rt,B.clearBufferuiv(B.COLOR,0,g)):(x[0]=kt,x[1]=Ht,x[2]=Ft,x[3]=Rt,B.clearBufferiv(B.COLOR,0,x))}else Q|=B.COLOR_BUFFER_BIT}W&&(Q|=B.DEPTH_BUFFER_BIT),J&&(Q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Bt.dispose(),Tt.dispose(),oe.dispose(),Ut.dispose(),I.dispose(),j.dispose(),st.dispose(),Ee.dispose(),V.dispose(),Lt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",t0),tt.removeEventListener("sessionend",e0),ks.stop()};function at(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const D=Re.autoReset,W=Et.enabled,J=Et.autoUpdate,Q=Et.needsUpdate,X=Et.type;vt(),Re.autoReset=D,Et.enabled=W,Et.autoUpdate=J,Et.needsUpdate=Q,Et.type=X}function wt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function qt(D){const W=D.target;W.removeEventListener("dispose",qt),Fe(W)}function Fe(D){un(D),Ut.remove(D)}function un(D){const W=Ut.get(D).programs;W!==void 0&&(W.forEach(function(J){Lt.releaseProgram(J)}),D.isShaderMaterial&&Lt.releaseShaderCache(D))}this.renderBufferDirect=function(D,W,J,Q,X,ht){W===null&&(W=De);const Mt=X.isMesh&&X.matrixWorld.determinant()<0,bt=wx(D,W,J,Q,X);Nt.setMaterial(Q,Mt);let Rt=J.index,kt=1;if(Q.wireframe===!0){if(Rt=lt.getWireframeAttribute(J),Rt===void 0)return;kt=2}const Ht=J.drawRange,Ft=J.attributes.position;let re=Ht.start*kt,de=(Ht.start+Ht.count)*kt;ht!==null&&(re=Math.max(re,ht.start*kt),de=Math.min(de,(ht.start+ht.count)*kt)),Rt!==null?(re=Math.max(re,0),de=Math.min(de,Rt.count)):Ft!=null&&(re=Math.max(re,0),de=Math.min(de,Ft.count));const Ye=de-re;if(Ye<0||Ye===1/0)return;Ee.setup(X,Q,bt,J,Rt);let Oe,le=At;if(Rt!==null&&(Oe=rt.get(Rt),le=ie,le.setIndex(Oe)),X.isMesh)Q.wireframe===!0?(Nt.setLineWidth(Q.wireframeLinewidth*Ve()),le.setMode(B.LINES)):le.setMode(B.TRIANGLES);else if(X.isLine){let Ot=Q.linewidth;Ot===void 0&&(Ot=1),Nt.setLineWidth(Ot*Ve()),X.isLineSegments?le.setMode(B.LINES):X.isLineLoop?le.setMode(B.LINE_LOOP):le.setMode(B.LINE_STRIP)}else X.isPoints?le.setMode(B.POINTS):X.isSprite&&le.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)le.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))le.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ot=X._multiDrawStarts,rn=X._multiDrawCounts,pe=X._multiDrawCount,wi=Rt?rt.get(Rt).bytesPerElement:1,So=Ut.get(Q).currentProgram.getUniforms();for(let Kn=0;Kn<pe;Kn++)So.setValue(B,"_gl_DrawID",Kn),le.render(Ot[Kn]/wi,rn[Kn])}else if(X.isInstancedMesh)le.renderInstances(re,Ye,X.count);else if(J.isInstancedBufferGeometry){const Ot=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,rn=Math.min(J.instanceCount,Ot);le.renderInstances(re,Ye,rn)}else le.render(re,Ye)};function ve(D,W,J){D.transparent===!0&&D.side===Ct&&D.forceSinglePass===!1?(D.side=Mn,D.needsUpdate=!0,ic(D,W,J),D.side=Bs,D.needsUpdate=!0,ic(D,W,J),D.side=Ct):ic(D,W,J)}this.compile=function(D,W,J=null){J===null&&(J=D),m=oe.get(J),m.init(W),v.push(m),J.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),D!==J&&D.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights();const Q=new Set;return D.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ht=X.material;if(ht)if(Array.isArray(ht))for(let Mt=0;Mt<ht.length;Mt++){const bt=ht[Mt];ve(bt,J,X),Q.add(bt)}else ve(ht,J,X),Q.add(ht)}),v.pop(),m=null,Q},this.compileAsync=function(D,W,J=null){const Q=this.compile(D,W,J);return new Promise(X=>{function ht(){if(Q.forEach(function(Mt){Ut.get(Mt).currentProgram.isReady()&&Q.delete(Mt)}),Q.size===0){X(D);return}setTimeout(ht,10)}ee.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let _i=null;function ji(D){_i&&_i(D)}function t0(){ks.stop()}function e0(){ks.start()}const ks=new og;ks.setAnimationLoop(ji),typeof self<"u"&&ks.setContext(self),this.setAnimationLoop=function(D){_i=D,tt.setAnimationLoop(D),D===null?ks.stop():ks.start()},tt.addEventListener("sessionstart",t0),tt.addEventListener("sessionend",e0),this.render=function(D,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(W),W=tt.getCamera()),D.isScene===!0&&D.onBeforeRender(_,D,W,R),m=oe.get(D,v.length),m.init(W),v.push(m),It.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),et.setFromProjectionMatrix(It),_t=this.localClippingEnabled,ut=dt.init(this.clippingPlanes,_t),h=Tt.get(D,M.length),h.init(),M.push(h),tt.enabled===!0&&tt.isPresenting===!0){const ht=_.xr.getDepthSensingMesh();ht!==null&&fu(ht,W,-1/0,_.sortObjects)}fu(D,W,0,_.sortObjects),h.finish(),_.sortObjects===!0&&h.sort(nt,ct),se=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,se&&Bt.addToRenderList(h,D),this.info.render.frame++,ut===!0&&dt.beginShadows();const J=m.state.shadowsArray;Et.render(J,D,W),ut===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=h.opaque,X=h.transmissive;if(m.setupLights(),W.isArrayCamera){const ht=W.cameras;if(X.length>0)for(let Mt=0,bt=ht.length;Mt<bt;Mt++){const Rt=ht[Mt];i0(Q,X,D,Rt)}se&&Bt.render(D);for(let Mt=0,bt=ht.length;Mt<bt;Mt++){const Rt=ht[Mt];n0(h,D,Rt,Rt.viewport)}}else X.length>0&&i0(Q,X,D,W),se&&Bt.render(D),n0(h,D,W);R!==null&&b===0&&(z.updateMultisampleRenderTarget(R),z.updateRenderTargetMipmap(R)),D.isScene===!0&&D.onAfterRender(_,D,W),Ee.resetDefaultState(),S=-1,w=null,v.pop(),v.length>0?(m=v[v.length-1],ut===!0&&dt.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?h=M[M.length-1]:h=null};function fu(D,W,J,Q){if(D.visible===!1)return;if(D.layers.test(W.layers)){if(D.isGroup)J=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(W);else if(D.isLight)m.pushLight(D),D.castShadow&&m.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||et.intersectsSprite(D)){Q&&Kt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(It);const Mt=st.update(D),bt=D.material;bt.visible&&h.push(D,Mt,bt,J,Kt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||et.intersectsObject(D))){const Mt=st.update(D),bt=D.material;if(Q&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Kt.copy(D.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Kt.copy(Mt.boundingSphere.center)),Kt.applyMatrix4(D.matrixWorld).applyMatrix4(It)),Array.isArray(bt)){const Rt=Mt.groups;for(let kt=0,Ht=Rt.length;kt<Ht;kt++){const Ft=Rt[kt],re=bt[Ft.materialIndex];re&&re.visible&&h.push(D,Mt,re,J,Kt.z,Ft)}}else bt.visible&&h.push(D,Mt,bt,J,Kt.z,null)}}const ht=D.children;for(let Mt=0,bt=ht.length;Mt<bt;Mt++)fu(ht[Mt],W,J,Q)}function n0(D,W,J,Q){const X=D.opaque,ht=D.transmissive,Mt=D.transparent;m.setupLightsView(J),ut===!0&&dt.setGlobalState(_.clippingPlanes,J),Q&&Nt.viewport(A.copy(Q)),X.length>0&&nc(X,W,J),ht.length>0&&nc(ht,W,J),Mt.length>0&&nc(Mt,W,J),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function i0(D,W,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Q.id]===void 0&&(m.state.transmissionRenderTarget[Q.id]=new Ii(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?hs:gs,minFilter:co,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const ht=m.state.transmissionRenderTarget[Q.id],Mt=Q.viewport||A;ht.setSize(Mt.z*_.transmissionResolutionScale,Mt.w*_.transmissionResolutionScale);const bt=_.getRenderTarget();_.setRenderTarget(ht),_.getClearColor(U),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),se&&Bt.render(J);const Rt=_.toneMapping;_.toneMapping=Os;const kt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),m.setupLightsView(Q),ut===!0&&dt.setGlobalState(_.clippingPlanes,Q),nc(D,J,Q),z.updateMultisampleRenderTarget(ht),z.updateRenderTargetMipmap(ht),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Ft=0,re=W.length;Ft<re;Ft++){const de=W[Ft],Ye=de.object,Oe=de.geometry,le=de.material,Ot=de.group;if(le.side===Ct&&Ye.layers.test(Q.layers)){const rn=le.side;le.side=Mn,le.needsUpdate=!0,s0(Ye,J,Q,Oe,le,Ot),le.side=rn,le.needsUpdate=!0,Ht=!0}}Ht===!0&&(z.updateMultisampleRenderTarget(ht),z.updateRenderTargetMipmap(ht))}_.setRenderTarget(bt),_.setClearColor(U,H),kt!==void 0&&(Q.viewport=kt),_.toneMapping=Rt}function nc(D,W,J){const Q=W.isScene===!0?W.overrideMaterial:null;for(let X=0,ht=D.length;X<ht;X++){const Mt=D[X],bt=Mt.object,Rt=Mt.geometry,kt=Q===null?Mt.material:Q,Ht=Mt.group;bt.layers.test(J.layers)&&s0(bt,W,J,Rt,kt,Ht)}}function s0(D,W,J,Q,X,ht){D.onBeforeRender(_,W,J,Q,X,ht),D.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),X.onBeforeRender(_,W,J,Q,D,ht),X.transparent===!0&&X.side===Ct&&X.forceSinglePass===!1?(X.side=Mn,X.needsUpdate=!0,_.renderBufferDirect(J,W,Q,X,D,ht),X.side=Bs,X.needsUpdate=!0,_.renderBufferDirect(J,W,Q,X,D,ht),X.side=Ct):_.renderBufferDirect(J,W,Q,X,D,ht),D.onAfterRender(_,W,J,Q,X,ht)}function ic(D,W,J){W.isScene!==!0&&(W=De);const Q=Ut.get(D),X=m.state.lights,ht=m.state.shadowsArray,Mt=X.state.version,bt=Lt.getParameters(D,X.state,ht,W,J),Rt=Lt.getProgramCacheKey(bt);let kt=Q.programs;Q.environment=D.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(D.isMeshStandardMaterial?j:I).get(D.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&D.envMap===null?W.environmentRotation:D.envMapRotation,kt===void 0&&(D.addEventListener("dispose",qt),kt=new Map,Q.programs=kt);let Ht=kt.get(Rt);if(Ht!==void 0){if(Q.currentProgram===Ht&&Q.lightsStateVersion===Mt)return r0(D,bt),Ht}else bt.uniforms=Lt.getUniforms(D),D.onBeforeCompile(bt,_),Ht=Lt.acquireProgram(bt,Rt),kt.set(Rt,Ht),Q.uniforms=bt.uniforms;const Ft=Q.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ft.clippingPlanes=dt.uniform),r0(D,bt),Q.needsLights=bx(D),Q.lightsStateVersion=Mt,Q.needsLights&&(Ft.ambientLightColor.value=X.state.ambient,Ft.lightProbe.value=X.state.probe,Ft.directionalLights.value=X.state.directional,Ft.directionalLightShadows.value=X.state.directionalShadow,Ft.spotLights.value=X.state.spot,Ft.spotLightShadows.value=X.state.spotShadow,Ft.rectAreaLights.value=X.state.rectArea,Ft.ltc_1.value=X.state.rectAreaLTC1,Ft.ltc_2.value=X.state.rectAreaLTC2,Ft.pointLights.value=X.state.point,Ft.pointLightShadows.value=X.state.pointShadow,Ft.hemisphereLights.value=X.state.hemi,Ft.directionalShadowMap.value=X.state.directionalShadowMap,Ft.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ft.spotShadowMap.value=X.state.spotShadowMap,Ft.spotLightMatrix.value=X.state.spotLightMatrix,Ft.spotLightMap.value=X.state.spotLightMap,Ft.pointShadowMap.value=X.state.pointShadowMap,Ft.pointShadowMatrix.value=X.state.pointShadowMatrix),Q.currentProgram=Ht,Q.uniformsList=null,Ht}function o0(D){if(D.uniformsList===null){const W=D.currentProgram.getUniforms();D.uniformsList=sl.seqWithValue(W.seq,D.uniforms)}return D.uniformsList}function r0(D,W){const J=Ut.get(D);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function wx(D,W,J,Q,X){W.isScene!==!0&&(W=De),z.resetTextureUnits();const ht=W.fog,Mt=Q.isMeshStandardMaterial?W.environment:null,bt=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:zr,Rt=(Q.isMeshStandardMaterial?j:I).get(Q.envMap||Mt),kt=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ht=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ft=!!J.morphAttributes.position,re=!!J.morphAttributes.normal,de=!!J.morphAttributes.color;let Ye=Os;Q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ye=_.toneMapping);const Oe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,le=Oe!==void 0?Oe.length:0,Ot=Ut.get(Q),rn=m.state.lights;if(ut===!0&&(_t===!0||D!==w)){const _n=D===w&&Q.id===S;dt.setState(Q,D,_n)}let pe=!1;Q.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==rn.state.version||Ot.outputColorSpace!==bt||X.isBatchedMesh&&Ot.batching===!1||!X.isBatchedMesh&&Ot.batching===!0||X.isBatchedMesh&&Ot.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ot.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ot.instancing===!1||!X.isInstancedMesh&&Ot.instancing===!0||X.isSkinnedMesh&&Ot.skinning===!1||!X.isSkinnedMesh&&Ot.skinning===!0||X.isInstancedMesh&&Ot.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ot.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ot.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ot.instancingMorph===!1&&X.morphTexture!==null||Ot.envMap!==Rt||Q.fog===!0&&Ot.fog!==ht||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==dt.numPlanes||Ot.numIntersection!==dt.numIntersection)||Ot.vertexAlphas!==kt||Ot.vertexTangents!==Ht||Ot.morphTargets!==Ft||Ot.morphNormals!==re||Ot.morphColors!==de||Ot.toneMapping!==Ye||Ot.morphTargetsCount!==le)&&(pe=!0):(pe=!0,Ot.__version=Q.version);let wi=Ot.currentProgram;pe===!0&&(wi=ic(Q,W,X));let So=!1,Kn=!1,$r=!1;const Ie=wi.getUniforms(),ui=Ot.uniforms;if(Nt.useProgram(wi.program)&&(So=!0,Kn=!0,$r=!0),Q.id!==S&&(S=Q.id,Kn=!0),So||w!==D){Nt.buffers.depth.getReversed()?(mt.copy(D.projectionMatrix),gv(mt),xv(mt),Ie.setValue(B,"projectionMatrix",mt)):Ie.setValue(B,"projectionMatrix",D.projectionMatrix),Ie.setValue(B,"viewMatrix",D.matrixWorldInverse);const kn=Ie.map.cameraPosition;kn!==void 0&&kn.setValue(B,zt.setFromMatrixPosition(D.matrixWorld)),ne.logarithmicDepthBuffer&&Ie.setValue(B,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ie.setValue(B,"isOrthographic",D.isOrthographicCamera===!0),w!==D&&(w=D,Kn=!0,$r=!0)}if(X.isSkinnedMesh){Ie.setOptional(B,X,"bindMatrix"),Ie.setOptional(B,X,"bindMatrixInverse");const _n=X.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Ie.setValue(B,"boneTexture",_n.boneTexture,z))}X.isBatchedMesh&&(Ie.setOptional(B,X,"batchingTexture"),Ie.setValue(B,"batchingTexture",X._matricesTexture,z),Ie.setOptional(B,X,"batchingIdTexture"),Ie.setValue(B,"batchingIdTexture",X._indirectTexture,z),Ie.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&Ie.setValue(B,"batchingColorTexture",X._colorsTexture,z));const hi=J.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&Gt.update(X,J,wi),(Kn||Ot.receiveShadow!==X.receiveShadow)&&(Ot.receiveShadow=X.receiveShadow,Ie.setValue(B,"receiveShadow",X.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(ui.envMap.value=Rt,ui.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(ui.envMapIntensity.value=W.environmentIntensity),Kn&&(Ie.setValue(B,"toneMappingExposure",_.toneMappingExposure),Ot.needsLights&&Sx(ui,$r),ht&&Q.fog===!0&&yt.refreshFogUniforms(ui,ht),yt.refreshMaterialUniforms(ui,Q,k,O,m.state.transmissionRenderTarget[D.id]),sl.upload(B,o0(Ot),ui,z)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(sl.upload(B,o0(Ot),ui,z),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ie.setValue(B,"center",X.center),Ie.setValue(B,"modelViewMatrix",X.modelViewMatrix),Ie.setValue(B,"normalMatrix",X.normalMatrix),Ie.setValue(B,"modelMatrix",X.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const _n=Q.uniformsGroups;for(let kn=0,du=_n.length;kn<du;kn++){const Hs=_n[kn];V.update(Hs,wi),V.bind(Hs,wi)}}return wi}function Sx(D,W){D.ambientLightColor.needsUpdate=W,D.lightProbe.needsUpdate=W,D.directionalLights.needsUpdate=W,D.directionalLightShadows.needsUpdate=W,D.pointLights.needsUpdate=W,D.pointLightShadows.needsUpdate=W,D.spotLights.needsUpdate=W,D.spotLightShadows.needsUpdate=W,D.rectAreaLights.needsUpdate=W,D.hemisphereLights.needsUpdate=W}function bx(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(D,W,J){Ut.get(D.texture).__webglTexture=W,Ut.get(D.depthTexture).__webglTexture=J;const Q=Ut.get(D);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,W){const J=Ut.get(D);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0};const Tx=B.createFramebuffer();this.setRenderTarget=function(D,W=0,J=0){R=D,E=W,b=J;let Q=!0,X=null,ht=!1,Mt=!1;if(D){const Rt=Ut.get(D);if(Rt.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(B.FRAMEBUFFER,null),Q=!1;else if(Rt.__webglFramebuffer===void 0)z.setupRenderTarget(D);else if(Rt.__hasExternalTextures)z.rebindTextures(D,Ut.get(D.texture).__webglTexture,Ut.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Ft=D.depthTexture;if(Rt.__boundDepthTexture!==Ft){if(Ft!==null&&Ut.has(Ft)&&(D.width!==Ft.image.width||D.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(D)}}const kt=D.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Mt=!0);const Ht=Ut.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Ht[W])?X=Ht[W][J]:X=Ht[W],ht=!0):D.samples>0&&z.useMultisampledRTT(D)===!1?X=Ut.get(D).__webglMultisampledFramebuffer:Array.isArray(Ht)?X=Ht[J]:X=Ht,A.copy(D.viewport),C.copy(D.scissor),L=D.scissorTest}else A.copy(ft).multiplyScalar(k).floor(),C.copy(Pt).multiplyScalar(k).floor(),L=Wt;if(J!==0&&(X=Tx),Nt.bindFramebuffer(B.FRAMEBUFFER,X)&&Q&&Nt.drawBuffers(D,X),Nt.viewport(A),Nt.scissor(C),Nt.setScissorTest(L),ht){const Rt=Ut.get(D.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Rt.__webglTexture,J)}else if(Mt){const Rt=Ut.get(D.texture),kt=W;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.__webglTexture,J,kt)}else if(D!==null&&J!==0){const Rt=Ut.get(D.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Rt.__webglTexture,J)}S=-1},this.readRenderTargetPixels=function(D,W,J,Q,X,ht,Mt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Ut.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){Nt.bindFramebuffer(B.FRAMEBUFFER,bt);try{const Rt=D.texture,kt=Rt.format,Ht=Rt.type;if(!ne.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=D.width-Q&&J>=0&&J<=D.height-X&&B.readPixels(W,J,Q,X,Zt.convert(kt),Zt.convert(Ht),ht)}finally{const Rt=R!==null?Ut.get(R).__webglFramebuffer:null;Nt.bindFramebuffer(B.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(D,W,J,Q,X,ht,Mt){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Ut.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){const Rt=D.texture,kt=Rt.format,Ht=Rt.type;if(!ne.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=D.width-Q&&J>=0&&J<=D.height-X){Nt.bindFramebuffer(B.FRAMEBUFFER,bt);const Ft=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ft),B.bufferData(B.PIXEL_PACK_BUFFER,ht.byteLength,B.STREAM_READ),B.readPixels(W,J,Q,X,Zt.convert(kt),Zt.convert(Ht),0);const re=R!==null?Ut.get(R).__webglFramebuffer:null;Nt.bindFramebuffer(B.FRAMEBUFFER,re);const de=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await mv(B,de,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ft),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ht),B.deleteBuffer(Ft),B.deleteSync(de),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,W=null,J=0){D.isTexture!==!0&&(Jo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,D=arguments[1]);const Q=Math.pow(2,-J),X=Math.floor(D.image.width*Q),ht=Math.floor(D.image.height*Q),Mt=W!==null?W.x:0,bt=W!==null?W.y:0;z.setTexture2D(D,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,Mt,bt,X,ht),Nt.unbindTexture()};const Ex=B.createFramebuffer(),Ax=B.createFramebuffer();this.copyTextureToTexture=function(D,W,J=null,Q=null,X=0,ht=null){D.isTexture!==!0&&(Jo("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,D=arguments[1],W=arguments[2],ht=arguments[3]||0,J=null),ht===null&&(X!==0?(Jo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=X,X=0):ht=0);let Mt,bt,Rt,kt,Ht,Ft,re,de,Ye;const Oe=D.isCompressedTexture?D.mipmaps[ht]:D.image;if(J!==null)Mt=J.max.x-J.min.x,bt=J.max.y-J.min.y,Rt=J.isBox3?J.max.z-J.min.z:1,kt=J.min.x,Ht=J.min.y,Ft=J.isBox3?J.min.z:0;else{const hi=Math.pow(2,-X);Mt=Math.floor(Oe.width*hi),bt=Math.floor(Oe.height*hi),D.isDataArrayTexture?Rt=Oe.depth:D.isData3DTexture?Rt=Math.floor(Oe.depth*hi):Rt=1,kt=0,Ht=0,Ft=0}Q!==null?(re=Q.x,de=Q.y,Ye=Q.z):(re=0,de=0,Ye=0);const le=Zt.convert(W.format),Ot=Zt.convert(W.type);let rn;W.isData3DTexture?(z.setTexture3D(W,0),rn=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(z.setTexture2DArray(W,0),rn=B.TEXTURE_2D_ARRAY):(z.setTexture2D(W,0),rn=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const pe=B.getParameter(B.UNPACK_ROW_LENGTH),wi=B.getParameter(B.UNPACK_IMAGE_HEIGHT),So=B.getParameter(B.UNPACK_SKIP_PIXELS),Kn=B.getParameter(B.UNPACK_SKIP_ROWS),$r=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Oe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Oe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,kt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ht),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ft);const Ie=D.isDataArrayTexture||D.isData3DTexture,ui=W.isDataArrayTexture||W.isData3DTexture;if(D.isDepthTexture){const hi=Ut.get(D),_n=Ut.get(W),kn=Ut.get(hi.__renderTarget),du=Ut.get(_n.__renderTarget);Nt.bindFramebuffer(B.READ_FRAMEBUFFER,kn.__webglFramebuffer),Nt.bindFramebuffer(B.DRAW_FRAMEBUFFER,du.__webglFramebuffer);for(let Hs=0;Hs<Rt;Hs++)Ie&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ut.get(D).__webglTexture,X,Ft+Hs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ut.get(W).__webglTexture,ht,Ye+Hs)),B.blitFramebuffer(kt,Ht,Mt,bt,re,de,Mt,bt,B.DEPTH_BUFFER_BIT,B.NEAREST);Nt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||D.isRenderTargetTexture||Ut.has(D)){const hi=Ut.get(D),_n=Ut.get(W);Nt.bindFramebuffer(B.READ_FRAMEBUFFER,Ex),Nt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ax);for(let kn=0;kn<Rt;kn++)Ie?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,hi.__webglTexture,X,Ft+kn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,hi.__webglTexture,X),ui?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,_n.__webglTexture,ht,Ye+kn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,_n.__webglTexture,ht),X!==0?B.blitFramebuffer(kt,Ht,Mt,bt,re,de,Mt,bt,B.COLOR_BUFFER_BIT,B.NEAREST):ui?B.copyTexSubImage3D(rn,ht,re,de,Ye+kn,kt,Ht,Mt,bt):B.copyTexSubImage2D(rn,ht,re,de,kt,Ht,Mt,bt);Nt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ui?D.isDataTexture||D.isData3DTexture?B.texSubImage3D(rn,ht,re,de,Ye,Mt,bt,Rt,le,Ot,Oe.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(rn,ht,re,de,Ye,Mt,bt,Rt,le,Oe.data):B.texSubImage3D(rn,ht,re,de,Ye,Mt,bt,Rt,le,Ot,Oe):D.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ht,re,de,Mt,bt,le,Ot,Oe.data):D.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ht,re,de,Oe.width,Oe.height,le,Oe.data):B.texSubImage2D(B.TEXTURE_2D,ht,re,de,Mt,bt,le,Ot,Oe);B.pixelStorei(B.UNPACK_ROW_LENGTH,pe),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,wi),B.pixelStorei(B.UNPACK_SKIP_PIXELS,So),B.pixelStorei(B.UNPACK_SKIP_ROWS,Kn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,$r),ht===0&&W.generateMipmaps&&B.generateMipmap(rn),Nt.unbindTexture()},this.copyTextureToTexture3D=function(D,W,J=null,Q=null,X=0){return D.isTexture!==!0&&(Jo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,D=arguments[2],W=arguments[3],X=arguments[4]||0),Jo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,W,J,Q,X)},this.initRenderTarget=function(D){Ut.get(D).__webglFramebuffer===void 0&&z.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?z.setTextureCube(D,0):D.isData3DTexture?z.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?z.setTexture2DArray(D,0):z.setTexture2D(D,0),Nt.unbindTexture()},this.resetState=function(){E=0,b=0,R=null,Nt.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}const u2=15,h2=6,f2=1.8,Dl=8,vp=.85,Mp=.98,Ul=.003,jt=90,Br=1.7,yp=500,d2=250,p2=18,m2=35,g2=40,x2=12,v2=35,M2=1200,y2=160,_2=140,w2=40,S2=60,b2=12,kd=250,ug=6,T2=25,E2=8,A2=40,R2=50,C2=10,P2=30,I2=30,L2=24,D2=45,U2=24,N2=36,z2=36,F2=45,O2=25,ps=280,xf=2.5,B2=6,_p=1.5,vn=5,wp=2.5,Vo=12,Ce=30,gr=.18,G2=30,k2=5,H2=.15,V2=.05,W2=64,Hd=[6719624,8956620,6741418,11206604,14548974,16777215],X2=[.4,.6,.8,1,1.2,1.5],q2=[12,16,20,25,30,40],Y2=8,Z2=2.2,N={sky:528408,fog:396308,ground:1720360,bark:5914672,leaf:1722400,leafGlow:4521898,mushCap:8926190,mushGlow:13400063,mushStem:2756928,crystal:3407837,crystalCore:8978414,firefly:15662950,fireflyB:6750173,spore:12320665,ambient:2241365,moon:12307694,jellyBell:7833855,jellyGlow:11193599,jellyTent:6715340,puffBody:16768460,puffGlow:16755336,puffEye:2236962,puffCheek:16746649,deerBody:11202303,deerGlow:8969727,deerAntler:13434862,deerEye:1127236,mothWing:11206553,mothGlow:13434794,mothBody:5596723,mothSpot:16777215,grass1:1721376,grass2:865048,grassTip:3385941,grassPurple:[1706530,2363962,4857960,11158766,13400063,16746717,2757952,6697898,11158783],grassBlue:[660514,858677,2114917,4500206,6741503,8974079,1387077,3368618,4500223],grassTeal:[662042,1059362,2121808,4517563,6750173,11206536,1720376,3385992,4521915],fern:1725744,fernGlow:3394662,flower:16742348,flowerGlow:16751069,flowerStem:1721376,reed:2774325,reedTip:4504422,orbGold:16763955,orbGlow:16772778,orbInner:16775389,laserPink:16737962,laserGlow:16746700,obeliskBlack:657938,obeliskPink:16729258,moatBlue:3377356,rainbow:[16724787,16746547,16772659,3407718,3377407,8926207],wispCore:11202303,wispGlow:14544639,wispTrail:8965375,dandStem:4482611,dandHead:16777198,dandSeed:16775389,dandSeedGlow:16777215,fairyMush:13404415,fairyGlow:14527231,fairyRing:11167470,bubbleIris:11197951,bubbleShine:16777215,bubblePop:13434862,starMote:16772829,starGlow:16777164,pondWater:2254506,pondGlow:3377356,lilyPad:2263108,lilyFlower:16746700,lilyGlow:16755421,echoBloom:11206604,echoWave:8978363,rockBase:9079440,rockLight:10132126,rockMoss:1721378,rockGranite:[9079440,10132126,6974066,10526888],rockSandstone:[10127984,11575432,8022613,12628120],rockLimestone:[10526872,11579560,8421496,13158592],rockSlate:[6320256,7372944,5265512,8951976],rockBasalt:[5263448,6316136,4210760,7368824],skyDeep:198160,skyNeb1:2230323,skyNeb2:530483,skyNeb3:1706024,skyNeb4:662050,skyNeb5:1575464,skyStarBright:16777215,skyStarDim:8952251,skyStarWarm:16768426,skyStarCool:11193599,skyGalaxy:6706568,skyAnomaly:[16729224,4521932,16755234,8930559,2285055,16737860],skyConstLine:3359846,thornOrb:16755268,thornOrbGlow:16764006,thornPetal:6689075,thornSpike:2759184,thornStem:1717024,helixStem:1714240,helixPod:6697983,helixPodGlow:8934911,helixRing:4465322,helixNode:5588172,snapBody:2271846,snapBodyGlow:4521864,snapTip:6750122,snapTipGlow:8978380,snapFrond:1730116,spiralStem:1716288,spiralFrond:2271880,spiralGlow:4521932,spiralTip:8978414,corpseSpathe:5574946,corpseColumn:8921668,corpseGlow:13382485,corpseLeaf:1717016,orbBushLeaf:2245666,orbBushOrb:16746700,orbBushGlow:16755421,orbBushStem:1718312,lanternStem:2769954,lanternPod:16768358,lanternGlow:16772744,lanternHaze:16763972,veilSupport:3816e3,veilMoss:4508808,veilGlow:6750122,veilEdge:8978380,groundGlowColors:[3407837,4521898,13400063,4500206,8978380]},sn=new l2({antialias:!0,powerPreference:"default"});sn.setSize(window.innerWidth,window.innerHeight);sn.setPixelRatio(Math.min(window.devicePixelRatio,1.5));sn.shadowMap.enabled=!0;sn.shadowMap.type=Mm;sn.toneMapping=_m;sn.toneMappingExposure=2.8;sn.outputColorSpace=On;document.body.appendChild(sn.domElement);const ln=new ni(65,window.innerWidth/window.innerHeight,.1,300),hg=new sg,ot=new Bv;ot.background=new it(N.skyDeep);ot.fog=new Cd(N.fog,.01);window.addEventListener("resize",()=>{ln.aspect=window.innerWidth/window.innerHeight,ln.updateProjectionMatrix(),sn.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("visibilitychange",()=>{document.hidden||hg.getDelta()});const fg={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Qa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const $2=new Bd(-1,1,1,-1,0,1);class j2 extends Ae{constructor(){super(),this.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Vt([0,2,0,0,2,0],2))}}const K2=new j2;class dg{constructor(t){this._mesh=new P(K2,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,$2)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class pg extends Qa{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof qn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Al.clone(t.uniforms),this.material=new qn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new dg(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Sp extends Qa{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class J2 extends Qa{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Q2{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new pt);this._width=n.width,this._height=n.height,e=new Ii(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hs}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new pg(fg),this.copyPass.material.blending=us,this.clock=new sg}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Sp!==void 0&&(r instanceof Sp?n=!0:r instanceof J2&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class tS extends Qa{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new it}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const eS={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new it(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Gr extends Qa{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new pt(t.x,t.y):new pt(256,256),this.clearColor=new it(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Ii(o,r,{type:hs}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const f=new Ii(o,r,{type:hs});f.texture.name="UnrealBloomPass.h"+p,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Ii(o,r,{type:hs});d.texture.name="UnrealBloomPass.v"+p,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),o=Math.round(o/2),r=Math.round(r/2)}const a=eS;this.highPassUniforms=Al.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new qn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new pt(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=fg;this.copyUniforms=Al.clone(c.uniforms),this.blendMaterial=new qn({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Jt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new it,this.oldClearAlpha=1,this.basic=new $,this.fsQuad=new dg(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new pt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Gr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Gr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new qn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new pt(.5,.5)},direction:{value:new pt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new qn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Gr.BlurDirectionX=new pt(1,0);Gr.BlurDirectionY=new pt(0,1);const nS={uniforms:{tDiffuse:{value:null},saturation:{value:1}},vertexShader:`
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
  `};let Us=null,Vd=!0,or=null,Nl=null;try{const i=new tS(ot,ln);or=new Gr(new pt(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2)),.6,.4,.85),Nl=new pg(nS),Us=new Q2(sn),Us.addPass(i),Us.addPass(or),Us.addPass(Nl)}catch(i){console.warn("Bloom unavailable, falling back to direct render:",i.message),Vd=!1}function iS(i){Nl&&(Nl.uniforms.saturation.value=i)}window.addEventListener("resize",()=>{Vd&&Us&&Us.setSize(window.innerWidth,window.innerHeight)});function bp(){Vd&&Us?Us.render():sn.render(ot,ln)}const zl=new SM(N.ambient,N.ground,.65);ot.add(zl);const yi=new ru(N.moon,.85);yi.position.set(30,60,-20);yi.castShadow=!0;yi.shadow.camera.left=-90;yi.shadow.camera.right=90;yi.shadow.camera.top=90;yi.shadow.camera.bottom=-90;yi.shadow.camera.near=1;yi.shadow.camera.far=250;yi.shadow.mapSize.set(1024,1024);yi.shadow.bias=-.001;ot.add(yi);const Wd=new ru(2241365,.3);Wd.position.set(-40,45,25);ot.add(Wd);const mg=new ru(3359829,.4);mg.position.set(-25,15,30);ot.add(mg);const gg=new Xr(3368516,.7,100);gg.position.set(0,.5,0);ot.add(gg);const xg=new ru(4478327,.4);xg.position.set(-10,25,40);ot.add(xg);const je=new Xr(6719624,.6,20);ot.add(je);const Qs=[];function sS(){for(let i=0;i<k2;i++){const t=new Xr(N.crystal,0,16);ot.add(t),Qs.push(t)}}const ga=new Xr(N.orbGold,0,15);ot.add(ga);const We={};let Xa=0,mo=0,cu=!1,vg=!1,Xd=0,qd=0,Yd=!1,lu=!1,Yr=!1,Fl=null,Mo=null,vf=0,Mf=0,yf=null;function oS(i){yf=i}function rS(i){vg=i}function aS(i){lu=i}function tc(){!vg&&yf&&yf()}window.addEventListener("keydown",i=>{We[i.code]=!0,"Space ShiftLeft ShiftRight KeyW KeyA KeyS KeyD".split(" ").indexOf(i.code)>=0&&i.preventDefault(),tc()});window.addEventListener("keyup",i=>{We[i.code]=!1});window.addEventListener("blur",()=>{for(const i in We)We[i]=!1;cu=!1});sn.domElement.addEventListener("mousedown",()=>{cu=!0,tc()});window.addEventListener("mouseup",()=>{cu=!1});window.addEventListener("mousemove",i=>{cu&&(Xa-=i.movementX*Ul,mo-=i.movementY*Ul,mo=Math.max(-1,Math.min(1,mo)))});const cS="ontouchstart"in window||navigator.maxTouchPoints>0,ec=document.getElementById("joy-zone"),Ol=document.getElementById("joy-knob"),Zd=document.getElementById("btn-jump");cS&&(ec.style.display="block",Zd.style.display="block",document.getElementById("controls").textContent="Stick: Move · Drag right: Look · JUMP");function Mg(i,t){const e=ec.getBoundingClientRect();let n=i-(e.left+e.width/2),s=t-(e.top+e.height/2);const o=Math.sqrt(n*n+s*s),r=52;o>r&&(n=n/o*r,s=s/o*r),Xd=n/r,qd=s/r,Ol.style.left=40+n+"px",Ol.style.top=40+s+"px"}ec.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),tc();const t=i.changedTouches[0];Fl=t.identifier,Yd=!0,Mg(t.clientX,t.clientY)},{passive:!1});ec.addEventListener("touchmove",i=>{i.preventDefault(),i.stopPropagation();for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Fl&&Mg(i.changedTouches[t].clientX,i.changedTouches[t].clientY)},{passive:!1});ec.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation();for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Fl&&(Fl=null,Yd=!1,Xd=0,qd=0,Ol.style.left="40px",Ol.style.top="40px")},{passive:!1});Zd.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),tc(),lu=!0},{passive:!1});Zd.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation(),lu=!1},{passive:!1});sn.domElement.addEventListener("touchstart",i=>{i.preventDefault(),tc();for(let t=0;t<i.changedTouches.length;t++){const e=i.changedTouches[t];e.clientX>window.innerWidth*.3&&Mo===null&&(Mo=e.identifier,vf=e.clientX,Mf=e.clientY)}},{passive:!1});sn.domElement.addEventListener("touchmove",i=>{i.preventDefault();for(let t=0;t<i.changedTouches.length;t++){const e=i.changedTouches[t];e.identifier===Mo&&(Xa-=(e.clientX-vf)*Ul,mo-=(e.clientY-Mf)*Ul,mo=Math.max(-1,Math.min(1,mo)),vf=e.clientX,Mf=e.clientY)}},{passive:!1});sn.domElement.addEventListener("touchend",i=>{for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Mo&&(Mo=null)},{passive:!1});sn.domElement.addEventListener("touchcancel",i=>{for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Mo&&(Mo=null)},{passive:!1});function lS(){let i=0,t=0;We.KeyW&&(t-=1),We.KeyS&&(t+=1),We.KeyA&&(i-=1),We.KeyD&&(i+=1),Yd&&(i+=Xd,t+=qd);const e=Math.sqrt(i*i+t*t);e>1&&(i/=e,t/=e);const n=h2*(We.ShiftLeft||We.ShiftRight||Yr?f2:1),s=Math.sin(Xa),o=Math.cos(Xa);return{x:(i*o+t*s)*n,z:(-i*s+t*o)*n}}const jn={mushCap:new Y(.5,8,5),mushStem:new gt(.06,.1,.6,5),mushDot:new Y(.06,4,3),crystal:new gt(0,.35,1.8,6),crystalSm:new gt(0,.18,.9,5),fly:new Y(.06,4,3),spore:new Y(.04,3,3),dandSeed:new Y(.025,3,3),bubble:new Y(.15,8,6),starMote:new Y(.03,3,3),dustMote:new Y(.035,3,3)};let Pa=42;function y(){return Pa=Pa*16807%2147483647,(Pa&2147483647)/2147483647}function yg(){return Pa}function _f(i){Pa=i}function rr(i,t){let e=i*374761393+t*668265263+1274126177|0;return e=(e^e>>13)*1274126177|0,(e&2147483647)/2147483647}function ar(i){return i*i*(3-2*i)}function uu(i,t){const e=Math.floor(i),n=Math.floor(t),s=ar(i-e),o=ar(t-n),r=rr(e,n),a=rr(e+1,n),l=rr(e,n+1),u=rr(e+1,n+1);return r+(a-r)*s+(l-r)*o+(r-a-l+u)*s*o}function lo(i,t,e){let n=0,s=.5,o=1;for(let r=0;r<e;r++)n+=uu(i*o,t*o)*s,s*=.5,o*=2;return n}function Tp(i,t,e){let n=0,s=1,o=1,r=1;for(let a=0;a<e;a++){let l=Math.abs(uu(i*o,t*o)-.5)*2;l=1-l,l=l*l,l*=r,r=Math.min(1,l*1.5),n+=l*s,s*=.45,o*=2.1}return n}function uS(i,t){const e=Math.floor(i),n=Math.floor(t);let s=999;for(let o=-1;o<=1;o++)for(let r=-1;r<=1;r++){const a=e+o+rr(e+o,n+r)*.8+.1,l=n+r+rr(n+r+7,e+o+3)*.8+.1,u=Math.sqrt((i-a)*(i-a)+(t-l)*(t-l));u<s&&(s=u)}return s}function hS(i,t){let e=0;const n=.028,s=i*.82+t*.57,o=-i*.57+t*.82,r=Tp(s*n+400,o*n+500,4);e+=r*3.5;const a=.018,l=i*.34+t*.94,u=-i*.94+t*.34,c=Tp(l*a-200,u*a+150,3);e+=c*2;const p=.045,f=uS(i*p+70,t*p+90),d=Math.max(0,1-f*1.6),g=d*d*(3-2*d),x=2+lo(i*.01+600,t*.01+700,2)*4;e+=g*x;const h=lo(i*.08+800,t*.08+900,3),m=h*h*4;e+=m;const M=lo(i*.025-300,t*.025-400,3),v=5,_=Math.floor(M*v)/v,T=(M*.3+_*.7)*3;e+=T;const E=.04,b=i*.5+t*.87,R=-i*.87+t*.5,S=Math.abs(uu(b*E+150,R*E+250)-.5)*2,w=S*S;return e-=(1-w)*1.5,e}const wf=[];function Sf(i,t,e){wf.push({x:i,z:t,r:e})}function Dt(i,t){const e=Math.sqrt(i*i+t*t),n=1-ar(Math.max(0,(e-jt*.7)/(jt*.3))),s=ar(Math.min(1,e/10)),o=.012,r=lo(i*o+200,t*o+300,3),a=ar(Math.max(0,Math.min(1,(r-.15)*2))),l=.035,u=lo(i*l,t*l,4),c=lo(i*l*2.7+50,t*l*2.7+50,3),p=uu(i*.15,t*.15),d=lo(i*l*.6-100,t*l*.6-100,3)*1.5,g=u*5*a,x=c*1.5*a,h=p*.2;let m=d+g+x+h;const M=hS(i,t),v=.3+a*.7;m+=M*v,m*=n*s;for(let _=0;_<wf.length;_++){const T=wf[_],E=i-T.x,b=t-T.z,R=Math.sqrt(E*E+b*b);if(R<T.r*2.5){const S=ar(Math.max(0,(R-T.r*.5)/(T.r*2)));m*=S}}return m}function hu(i,t){const n=Dt(i,t),s=Dt(i+.3,t),o=Dt(i,t+.3),r=-(s-n)/.3,a=-(o-n)/.3,l=1,u=Math.sqrt(r*r+l*l+a*a);return{x:r/u,y:l/u,z:a/u}}const Ns={uTime:{value:0},uPlayerX:{value:0},uPlayerZ:{value:0},uTransform:{value:0}};function fS(i,t,e){Ns.uTime.value=i,Ns.uPlayerX.value=t,Ns.uPlayerZ.value=e}function dS(i){Ns.uTransform.value=i}function pS(){const t=document.createElement("canvas");t.width=2048,t.height=2048;const e=t.getContext("2d"),n=Math.random;e.fillStyle="#223822",e.fillRect(0,0,2048,2048);const s=[{col:"rgba(50,45,25,0.38)",n:16,r:130},{col:"rgba(35,55,30,0.35)",n:14,r:120},{col:"rgba(55,40,22,0.35)",n:14,r:115},{col:"rgba(45,55,28,0.32)",n:12,r:110},{col:"rgba(60,48,25,0.32)",n:12,r:105},{col:"rgba(30,50,32,0.30)",n:10,r:100},{col:"rgba(65,50,28,0.28)",n:10,r:100},{col:"rgba(40,60,35,0.26)",n:10,r:95},{col:"rgba(70,45,22,0.24)",n:8,r:90},{col:"rgba(45,35,18,0.22)",n:8,r:85}];for(const c of s)for(let p=0;p<c.n;p++){const f=n()*2048,d=n()*2048,g=c.r*(.5+n()*.8),x=e.createRadialGradient(f,d,0,f,d,g);x.addColorStop(0,c.col),x.addColorStop(.6,c.col.replace(/[\d.]+\)$/,parseFloat(c.col.match(/[\d.]+\)$/)[0])*.4+")")),x.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=x;for(let h=-1;h<=1;h++)for(let m=-1;m<=1;m++)e.beginPath(),e.arc(f+h*2048,d+m*2048,g,0,6.28),e.fill()}const o=[{n:80,r:25,colors:["rgba(45,40,22,0.24)","rgba(38,55,30,0.20)","rgba(50,38,18,0.22)","rgba(35,48,25,0.18)","rgba(55,42,20,0.20)","rgba(30,52,32,0.16)"]},{n:200,r:10,colors:["rgba(45,40,20,0.14)","rgba(35,50,28,0.12)","rgba(50,38,18,0.12)","rgba(30,48,28,0.10)","rgba(48,42,18,0.12)","rgba(28,45,30,0.08)"]},{n:500,r:4,colors:["rgba(42,38,18,0.10)","rgba(35,48,25,0.08)","rgba(48,36,16,0.08)","rgba(30,45,28,0.06)","rgba(45,40,16,0.08)","rgba(25,42,28,0.05)"]}];for(const c of o)for(let p=0;p<c.n;p++){e.fillStyle=c.colors[Math.floor(n()*c.colors.length)];const f=n()*2048,d=n()*2048;e.beginPath(),e.arc(f,d,c.r+n()*c.r*.6,0,6.28),e.fill()}const r=["rgba(50,180,90,0.10)","rgba(40,160,100,0.08)","rgba(65,145,170,0.07)","rgba(80,200,130,0.09)","rgba(55,155,135,0.08)"];for(let c=0;c<45;c++){let p=n()*2048,f=n()*2048;const d=r[Math.floor(n()*r.length)];e.strokeStyle=d,e.lineWidth=1.5+n()*2.5,e.beginPath(),e.moveTo(p,f);let g=n()*6.28;const x=14+Math.floor(n()*20);for(let h=0;h<x;h++)g+=Math.sin(h*.6)*.5+(n()-.5)*.4,p+=Math.cos(g)*(6+n()*10),f+=Math.sin(g)*(6+n()*10),e.lineTo(p,f);if(e.stroke(),n()<.7){const h=6+n()*10,m=e.createRadialGradient(p,f,0,p,f,h);m.addColorStop(0,d.replace(/[\d.]+\)$/,"0.18)")),m.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=m,e.beginPath(),e.arc(p,f,h,0,6.28),e.fill()}if(n()<.5&&c<30){let h=p,m=f,M=g+(n()-.5)*1.5;e.strokeStyle=d.replace(/[\d.]+\)$/,parseFloat(d.match(/[\d.]+\)$/)[0])*.6+")"),e.lineWidth=1+n()*1.5,e.beginPath(),e.moveTo(h,m);for(let v=0;v<6;v++)M+=(n()-.5)*.6,h+=Math.cos(M)*(4+n()*8),m+=Math.sin(M)*(4+n()*8),e.lineTo(h,m);e.stroke()}}for(let c=0;c<20;c++){const p=n()*2048,f=n()*2048,d=20+n()*60,x=n()<.7?`rgba(50,${140+Math.floor(n()*60)},${60+Math.floor(n()*40)},${.06+n()*.06})`:`rgba(${100+Math.floor(n()*60)},${80+Math.floor(n()*40)},40,${.05+n()*.04})`;e.strokeStyle=x,e.lineWidth=1.5+n()*3,e.beginPath(),e.arc(p,f,d,0,6.28),e.stroke(),n()<.4&&(e.lineWidth=.8+n()*1.5,e.beginPath(),e.arc(p,f,d*(.6+n()*.2),0,6.28),e.stroke());for(let h=-1;h<=1;h++)for(let m=-1;m<=1;m++)h===0&&m===0||(e.strokeStyle=x,e.lineWidth=1.5+n()*3,e.beginPath(),e.arc(p+h*2048,f+m*2048,d,0,6.28),e.stroke())}e.lineWidth=1.2;for(let c=0;c<30;c++){e.strokeStyle=`rgba(15,25,12,${.2+n()*.15})`;let p=n()*2048,f=n()*2048,d=n()*6.28;e.beginPath(),e.moveTo(p,f);for(let g=0;g<10;g++)d+=Math.sin(g*.7)*.5+(n()-.5)*.35,p+=Math.cos(d)*(8+n()*14),f+=Math.sin(d)*(8+n()*14),e.lineTo(p,f);e.stroke()}const a=["rgba(55,40,18,0.28)","rgba(50,50,22,0.25)","rgba(35,55,25,0.22)","rgba(60,45,20,0.25)","rgba(45,52,22,0.22)","rgba(65,48,22,0.22)","rgba(40,55,28,0.20)","rgba(55,42,16,0.20)","rgba(70,50,22,0.22)","rgba(48,38,15,0.20)","rgba(30,50,28,0.18)","rgba(60,55,25,0.16)"];for(let c=0;c<3500;c++){e.fillStyle=a[Math.floor(n()*a.length)];const p=n()*2048,f=n()*2048,d=.8+n()*2.5;e.beginPath(),e.arc(p,f,d,0,6.28),e.fill()}for(let c=0;c<50;c++){const p=n()*2048,f=n()*2048,d=15+n()*35,g=e.createRadialGradient(p,f,0,p,f,d),x=n();x<.25?(g.addColorStop(0,"rgba(35,60,35,0.18)"),g.addColorStop(1,"rgba(20,35,20,0)")):x<.5?(g.addColorStop(0,"rgba(55,42,20,0.18)"),g.addColorStop(1,"rgba(30,22,10,0)")):x<.7?(g.addColorStop(0,"rgba(45,55,28,0.16)"),g.addColorStop(1,"rgba(25,30,15,0)")):x<.85?(g.addColorStop(0,"rgba(60,45,22,0.15)"),g.addColorStop(1,"rgba(32,24,12,0)")):(g.addColorStop(0,"rgba(38,65,40,0.14)"),g.addColorStop(1,"rgba(22,38,22,0)")),e.fillStyle=g,e.beginPath(),e.arc(p,f,d,0,6.28),e.fill()}for(let c=0;c<300;c++){const p=n()*2048,f=n()*2048,d=1.5+n()*3,g=Math.floor(30+n()*40);e.fillStyle=`rgba(${g+5},${g},${g-8},0.25)`,e.beginPath(),e.arc(p,f,d,0,6.28),e.fill()}e.lineWidth=.7;for(let c=0;c<60;c++){const p=n()*2048,f=n()*2048,d=4+n()*16,g=n()*6.28;e.strokeStyle=`rgba(18,28,12,${.15+n()*.1})`,e.beginPath(),e.moveTo(p,f),e.lineTo(p+Math.cos(g)*d,f+Math.sin(g)*d),e.stroke()}const l=["rgba(60,190,100,0.10)","rgba(50,175,130,0.08)","rgba(80,160,180,0.07)","rgba(100,90,170,0.06)","rgba(160,130,60,0.05)","rgba(50,160,150,0.07)"];for(let c=0;c<400;c++){const p=n()*2048,f=n()*2048,d=l[Math.floor(n()*l.length)];if(e.fillStyle=d,e.beginPath(),e.arc(p,f,1+n()*2.5,0,6.28),e.fill(),n()<.4){const g=5+n()*6,x=e.createRadialGradient(p,f,0,p,f,g);x.addColorStop(0,d),x.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=x,e.beginPath(),e.arc(p,f,g,0,6.28),e.fill()}}for(let c=0;c<150;c++){const p=n()*2048,f=n()*2048;e.fillStyle=`rgba(90,150,110,${.04+n()*.04})`,e.beginPath(),e.arc(p,f,.5+n()*1.5,0,6.28),e.fill()}const u=new Ka(t);return u.wrapS=u.wrapT=Dr,u.repeat.set(8,8),u.colorSpace=On,u}function zc(i,t){let e=i*127961+t*372143+918273|0;return e=(e^e>>13)*517261|0,(e&2147483647)/2147483647}function bf(i){return i*i*(3-2*i)}function _g(i,t){const e=Math.floor(i),n=Math.floor(t),s=bf(i-e),o=bf(t-n),r=zc(e,n),a=zc(e+1,n),l=zc(e,n+1),u=zc(e+1,n+1);return r+(a-r)*s+(l-r)*o+(r-a-l+u)*s*o}function Ku(i,t,e){let n=0,s=.5,o=1;for(let r=0;r<e;r++)n+=_g(i*o,t*o)*s,s*=.5,o*=2;return n}function mS(){const i=pS(),t=jt*3,e=200,n=new he(t,t,e,e),s=n.attributes.position,o=[[.65,.6,.38],[.5,.7,.42],[.72,.58,.35],[.55,.68,.4],[.6,.55,.32],[.45,.65,.45],[.68,.62,.36],[.48,.72,.48],[.75,.55,.32],[.55,.6,.38]],r=s.count,a=new Float32Array(r*3);for(let c=0;c<r;c++){const p=s.getX(c),f=s.getY(c);Math.sqrt(p*p+f*f)<jt*1.4?s.setZ(c,Dt(p,-f)):s.setZ(c,0);const g=p,x=-f,h=Ku(g*.025+100,x*.025+200,3),m=Ku(g*.06+300,x*.06+400,2),M=_g(g*.15+500,x*.15+600),v=Ku(g*.04-150,x*.04-250,3),_=Math.floor(h*o.length*.999),T=Math.floor(v*o.length*.999),E=o[_],b=o[T],R=bf(m),S=.82+M*.25,w=(E[0]*(1-R)+b[0]*R)*S,A=(E[1]*(1-R)+b[1]*R)*S,C=(E[2]*(1-R)+b[2]*R)*S,U=1+Dt(g,x)*.06;a[c*3]=w*U,a[c*3+1]=A*U,a[c*3+2]=C*U}n.setAttribute("color",new ze(a,3)),n.computeVertexNormals();const l=new q({map:i,vertexColors:!0,roughness:.75,metalness:0,emissive:1388056,emissiveIntensity:.25});l.onBeforeCompile=c=>{c.uniforms.uTime=Ns.uTime,c.uniforms.uPlayerX=Ns.uPlayerX,c.uniforms.uPlayerZ=Ns.uPlayerZ,c.uniforms.uTransform=Ns.uTransform,c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
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
      `)};const u=new P(n,l);return u.rotation.x=-Math.PI/2,u.receiveShadow=!0,ot.add(u),u}const xr=new Qt;let Bl=null;const to=120;let Ep=null,ol=null,Tf=null,Ef=null,vr=null;const Mr=[],gS=3;let Ju=0;function Ps(i,t){const e=i>>16&255,n=i>>8&255,s=i&255;return`rgba(${e},${n},${s},${t})`}function Is(i,t,e,n,s,o,r){i.save(),i.translate(t,e),Math.abs(s/n-1)>.01&&i.scale(1,s/n);const a=i.createRadialGradient(0,0,0,0,0,n);a.addColorStop(0,Ps(o,r)),a.addColorStop(.25,Ps(o,r*.55)),a.addColorStop(.55,Ps(o,r*.15)),a.addColorStop(.85,Ps(o,r*.03)),a.addColorStop(1,Ps(o,0)),i.fillStyle=a,i.beginPath(),i.arc(0,0,n,0,6.2832),i.fill(),i.restore()}function Qu(i,t,e,n,s,o,r,a){Is(i,t,e,n,s,o,r),t-n<0&&Is(i,t+a,e,n,s,o,r),t+n>a&&Is(i,t-a,e,n,s,o,r)}function xS(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),s=Math.random,o=n.createLinearGradient(0,0,0,1024);o.addColorStop(0,"#030610"),o.addColorStop(.2,"#050a18"),o.addColorStop(.4,"#0a1222"),o.addColorStop(.55,"#0c1828"),o.addColorStop(.75,"#081018"),o.addColorStop(1,"#040810"),n.fillStyle=o,n.fillRect(0,0,2048,1024);const r=[{x:.12,y:.22,rx:.18,ry:.14,col:1717094,a:.14},{x:.42,y:.28,rx:.22,ry:.1,col:2758741,a:.12},{x:.72,y:.18,rx:.16,ry:.12,col:1721446,a:.13},{x:.88,y:.32,rx:.2,ry:.09,col:3348548,a:.1},{x:.28,y:.12,rx:.14,ry:.18,col:2245768,a:.1},{x:.58,y:.38,rx:.18,ry:.07,col:4465220,a:.08},{x:.05,y:.4,rx:.15,ry:.1,col:1586005,a:.09},{x:.52,y:.15,rx:.12,ry:.16,col:2765670,a:.07}];for(const p of r){Qu(n,p.x*2048,p.y*1024,p.rx*2048,p.ry*1024,p.col,p.a,2048);for(let f=0;f<4;f++){const d=(p.x+(s()-.5)*p.rx)*2048,g=(p.y+(s()-.5)*p.ry)*1024,x=p.rx*2048*(.2+s()*.35),h=p.ry*1024*(.2+s()*.4);Qu(n,d,g,x,h,p.col,p.a*(.4+s()*.5),2048)}}const a=[2245802,2245734,4465254,5583701,3368584,2245717,3809894];for(let p=0;p<30;p++){const f=s()*2048,d=s()*1024*.55,g=40+s()*180,x=25+s()*100;Qu(n,f,d,g,x,a[Math.floor(s()*a.length)],.025+s()*.035,2048)}n.save(),n.globalCompositeOperation="screen";const l=.26;for(let p=0;p<50;p++){const f=p/50,d=f*2048,g=(l+Math.sin(f*Math.PI)*.06+(s()-.5)*.02)*1024,x=2048*.05+s()*2048*.035,h=1024*.04*(.4+s()*.6);Is(n,d,g,x,h,4478310,.025+s()*.015)}for(let p=0;p<25;p++){const f=.2+s()*.6,d=f*2048,g=(l+Math.sin(f*Math.PI)*.04)*1024;Is(n,d,g,2048*.03+s()*2048*.02,1024*.02+s()*1024*.01,6719658,.015+s()*.012)}for(let p=0;p<10;p++){const f=.35+s()*.3,d=f*2048,g=(l+Math.sin(f*Math.PI)*.02)*1024;Is(n,d,g,2048*.02,1024*.012,8943462,.01+s()*.008)}n.globalCompositeOperation="source-over",n.restore();for(let p=0;p<12;p++){const f=.1+s()*.8,d=f*2048,g=(l+Math.sin(f*Math.PI)*.04+(s()-.5)*.02)*1024,x=20+s()*60,h=8+s()*20;Is(n,d,g,x,h,132104,.15+s()*.1)}const u=["255,255,255","220,230,255","255,240,220","200,215,255","255,225,200","240,240,255","255,245,235"];for(let p=0;p<5e3;p++){const f=s()*2048,d=s()*1024*.65,g=.3+s()*.7,x=.1+s()*.5;n.fillStyle=`rgba(${u[Math.floor(s()*u.length)]},${x})`,n.beginPath(),n.arc(f,d,g,0,6.28),n.fill()}for(let p=0;p<3e3;p++){const f=s(),d=f*2048,x=(l+Math.sin(f*Math.PI)*.06)*1024+(s()-.5)*1024*.1;if(x<0||x>1024*.6)continue;const h=.2+s()*.6,m=.2+s()*.7;n.fillStyle=`rgba(${u[Math.floor(s()*u.length)]},${m})`,n.beginPath(),n.arc(d,x,h,0,6.28),n.fill()}for(let p=0;p<60;p++){const f=s()*2048,d=s()*1024*.58,g=1.2+s()*1.8,x=6+s()*14,h=s();let m;h<.45?m="255,255,255":h<.65?m="210,225,255":h<.8?m="255,230,200":h<.92?m="190,210,255":m="255,200,180";const M=n.createRadialGradient(f,d,0,f,d,x);M.addColorStop(0,`rgba(${m},0.5)`),M.addColorStop(.1,`rgba(${m},0.18)`),M.addColorStop(.35,`rgba(${m},0.04)`),M.addColorStop(1,`rgba(${m},0)`),n.fillStyle=M,n.beginPath(),n.arc(f,d,x,0,6.28),n.fill(),n.strokeStyle=`rgba(${m},0.12)`,n.lineWidth=.5;const v=x*.8;n.beginPath(),n.moveTo(f-v,d),n.lineTo(f+v,d),n.moveTo(f,d-v),n.lineTo(f,d+v),n.stroke(),n.fillStyle=`rgba(${m},1)`,n.beginPath(),n.arc(f,d,g,0,6.28),n.fill()}for(let p=0;p<8;p++){const f=s()*2048,d=1024*.08+s()*1024*.42,g=50+s()*90;Is(n,f,d,g,g*.7,3359846,.03);for(let x=0;x<100;x++){const h=s()*6.28,m=s()*s()*g,M=f+Math.cos(h)*m,v=d+Math.sin(h)*m*.65;if(M<0||M>2048||v<0||v>1024)continue;const _=.2+s()*.6;n.fillStyle=`rgba(255,255,255,${.25+s()*.6})`,n.beginPath(),n.arc(M,v,_,0,6.28),n.fill()}}for(let p=0;p<15;p++){const f=r[Math.floor(s()*r.length)],d=(f.x+(s()-.5)*f.rx*.5)*2048,g=(f.y+(s()-.5)*f.ry*.5)*1024,x=3+s()*8,h=n.createRadialGradient(d,g,0,d,g,x*3);h.addColorStop(0,Ps(f.col,.2)),h.addColorStop(.3,Ps(f.col,.06)),h.addColorStop(1,Ps(f.col,0)),n.fillStyle=h,n.beginPath(),n.arc(d,g,x*3,0,6.28),n.fill()}const c=new Ka(e);return c.colorSpace=On,c}function vS(){const i=yg(),t=xS(),e=.03,n=new Y(ps,64,32,0,Math.PI*2,e,Math.PI*.55);Bl=new $({map:t,side:Mn,fog:!1,transparent:!1});const s=new P(n,Bl);xr.add(s);const o=ps*Math.sin(e)*1.05,r=new He(o,32),a=new $({color:198160,side:Mn,fog:!1}),l=new P(r,a);l.position.y=ps*Math.cos(e),l.rotation.x=Math.PI/2,xr.add(l),MS(),yS(),ot.add(xr),_f(i)}function MS(){const i=new Float32Array(to*3),t=new Float32Array(to*3);ol=new Float32Array(to),Tf=new Float32Array(to),Ef=new Float32Array(to);const e=[[1,1,1],[.85,.9,1],[1,.94,.86],[.78,.84,1],[1,.88,.78],[.9,.95,1]],n=Math.random,s=ps*.97;for(let a=0;a<to;a++){const l=n()*Math.PI*2,u=n()*Math.PI*.48,c=s*Math.cos(l)*Math.sin(u),p=s*Math.cos(u),f=s*Math.sin(l)*Math.sin(u);i[a*3]=c,i[a*3+1]=p,i[a*3+2]=f;const d=e[Math.floor(n()*e.length)];t[a*3]=d[0],t[a*3+1]=d[1],t[a*3+2]=d[2],ol[a]=2+n()*4,Tf[a]=n()*Math.PI*2,Ef[a]=.5+n()*2.5}const o=new Ae;o.setAttribute("position",new Vt(i,3)),o.setAttribute("color",new Vt(t,3)),vr=new Vt(ol.slice(),1),vr.setUsage(ye),o.setAttribute("size",vr);const r=new Ld({vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,fog:!1,blending:Jt,depthWrite:!1});Ep=new Ym(o,r),xr.add(Ep)}function yS(){const i=new $({color:16777215,transparent:!0,opacity:0,fog:!1,blending:Jt,depthWrite:!1});for(let t=0;t<gS;t++){const e=new P(new gt(.15,0,12,4),i.clone());e.visible=!1,xr.add(e),Mr.push({mesh:e,mat:e.material,active:!1,life:0,maxLife:0,sx:0,sy:0,sz:0,dx:0,dy:0,dz:0})}}function _S(){let i=null;for(let a=0;a<Mr.length;a++)if(!Mr[a].active){i=Mr[a];break}if(!i)return;const t=Math.random,e=t()*Math.PI*2,n=.1+t()*.35,s=ps*.85;i.sx=s*Math.cos(e)*Math.sin(n),i.sy=s*Math.cos(n),i.sz=s*Math.sin(e)*Math.sin(n);const o=e+(t()-.5)*1,r=80+t()*120;i.dx=Math.cos(o)*r,i.dy=-r*(.5+t()*.5),i.dz=Math.sin(o)*r,i.life=.5+t()*.8,i.maxLife=i.life,i.active=!0,i.mesh.visible=!0}function wg(i,t){if(xr.rotation.y=t*.003,vr){const e=vr.array;for(let n=0;n<to;n++){const s=ol[n],o=Math.sin(t*Ef[n]+Tf[n]);e[n]=s*(.65+o*.35)}vr.needsUpdate=!0}Ju-=i,Ju<=0&&(Ju=4+Math.random()*12,_S());for(let e=0;e<Mr.length;e++){const n=Mr[e];if(!n.active)continue;if(n.life-=i,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}const s=n.life/n.maxLife;n.sx+=n.dx*i,n.sy+=n.dy*i,n.sz+=n.dz*i,n.mesh.position.set(n.sx,n.sy,n.sz),n.mesh.lookAt(n.sx+n.dx,n.sy+n.dy,n.sz+n.dz),n.mesh.rotateX(Math.PI/2),n.mat.opacity=s*.7,n.mesh.scale.setScalar(.6+s*.4)}}function wS(i){if(Bl){const t=Math.max(.15,i);Bl.color.setRGB(t,t,t)}}const SS=6,Fc=64,Af=[];let uo=null;const aa=[new it(1734485),new it(2787447),new it(5601126),new it(6706568),new it(8930406),new it(3368533)];function bS(){uo=new Qt,uo.visible=!1;for(let i=0;i<SS;i++){const t=1.2+i*.2+Math.sin(i*1.7)*.15,e=ps*t,n=.1+i*.012+Math.sin(i*2.3)*.02,s=ps*n,o=new he(e,s,Fc,3),r=o.attributes.position.array,a=4,l=(Fc+1)*a,u=Math.PI*(.45+i*.08+Math.sin(i*.9)*.05),c=-u/2,p=(.25+i*.04+Math.sin(i*1.3)*.02)*Math.PI,f=i*.18-.45;for(let h=0;h<l;h++){const m=Math.floor(h/a),M=h%a,v=m/Fc,_=c+v*u+f,E=(M/(a-1)-.5)*.05,b=p+E,R=ps*.92;r[h*3]=Math.sin(_)*Math.sin(b)*R,r[h*3+1]=Math.cos(b)*R,r[h*3+2]=Math.cos(_)*Math.sin(b)*R}o.attributes.position.needsUpdate=!0,o.attributes.position.setUsage(ye),o.computeVertexNormals();const d=new Float32Array(l*3);o.setAttribute("color",new ze(d,3)),o.attributes.color.setUsage(ye);const g=new $({vertexColors:!0,transparent:!0,opacity:0,side:Ct,blending:Jt,depthWrite:!1,fog:!1}),x=new P(o,g);uo.add(x),Af.push({mesh:x,mat:g,geo:o,colorArr:d,posArr:r,vertCount:l,rows:a,segments:Fc,phase:i*1.7+Math.sin(i*.8)*.5,speed:.15+i*.05+Math.sin(i*2.1)*.03,colorShift:i*1.1,elevation:p,arcStart:c,arcSpan:u,azimuthOffset:f})}ot.add(uo)}let Wo=0;function TS(i,t,e,n,s){if(!uo)return;const o=s==="HEAVY_RAIN"||s==="LUMINOUS_STORM"||s==="FOG_BANK";let r=0;o||(e==="DEEP_NIGHT"?r=.25:e==="NIGHT"&&(r=.08));const a=r>Wo?.2:.4;if(Wo+=(r-Wo)*a*i,Wo<.005){uo.visible=!1;return}uo.visible=!0;const l=ps*.92;for(let u=0;u<Af.length;u++){const c=Af[u],p=c.colorArr,f=c.posArr,d=c.segments,g=c.rows;c.mat.opacity=Wo*(.5+u*.05);for(let x=0;x<=d;x++){const h=x/d,m=Math.sin(h*6+t*c.speed+c.phase)*.5+.5,M=Math.sin(h*3-t*c.speed*.4+c.phase*1.3)*.5+.5,v=Math.sin(h*1.5+t*.07)*.5+.5,_=Math.sin(h*1.2+t*.05+c.phase*.7)*.5+.5,T=(m*.3+M*.25+v*.2+_*.25)*Wo,E=(h*3+t*.08+c.colorShift)%aa.length,b=Math.floor(E),R=E-b,S=aa[b%aa.length],w=aa[(b+1)%aa.length],A=(S.r+(w.r-S.r)*R)*T,C=(S.g+(w.g-S.g)*R)*T,L=(S.b+(w.b-S.b)*R)*T,U=l*.025,H=Math.sin(h*5+t*.3+c.phase)*U+Math.sin(h*2.5-t*.15+c.phase*.6)*U*.5;for(let G=0;G<g;G++){const O=x*g+G,k=G/(g-1);let nt;k<.33?nt=k*1.2:k>.67?nt=(1-k)*1.5:nt=.7+Math.sin(k*Math.PI)*.3,p[O*3]=A*nt,p[O*3+1]=C*nt,p[O*3+2]=L*nt,c.arcStart+h*c.arcSpan+c.azimuthOffset;const ct=(k-.5)*.05,ft=c.elevation+ct,Pt=H*(.3+k*.7);f[O*3+1]=Math.cos(ft)*l+Pt}}c.geo.attributes.color.needsUpdate=!0,c.geo.attributes.position.needsUpdate=!0}}const Z={pos:new F(0,Br,0),vel:new F,onGround:!0};let th=0,eh=0,Sg=0,nh=65,Ap=65,ca=0,Rp=!0,ih=0,kr=0,Rf=null,Cf=null,Pf=null,Cp=1;function ES(i,t,e){Rf=i,Cf=t,Pf=e}let If=[],Lf=[],Df=null;function AS(i,t){If=i,Lf=t}function RS(i){Df=i}function CS(i){const t=lS(),e=We.ShiftLeft||We.ShiftRight||Yr;Z.vel.x=t.x,Z.vel.z=t.z,Z.vel.y-=u2*i,(We.Space||lu)&&Z.onGround&&(Z.vel.y=Dl,Z.onGround=!1,aS(!1),Cf&&Cf()),Z.onGround||(ih=Z.vel.y),Z.pos.x+=Z.vel.x*i,Z.pos.y+=Z.vel.y*i,Z.pos.z+=Z.vel.z*i;const n=Dt(Z.pos.x,Z.pos.z)+Br;if(Z.pos.y<=n){if(Z.pos.y=n,Z.vel.y=0,!Rp&&ih<-3){const c=Math.min(Math.abs(ih)/Dl,1);ca=c*.15,Df&&Df(Z.pos.x,Z.pos.z,Math.floor(3+c*5)),Pf&&Pf(c)}Z.onGround=!0}Rp=Z.onGround,Z.onGround?(Z.vel.x*=vp,Z.vel.z*=vp):(Z.vel.x*=Mp,Z.vel.z*=Mp);const s=.4;for(let c=0;c<If.length;c++){const p=If[c],f=Z.pos.x-p.x,d=Z.pos.z-p.z,g=f*f+d*d,x=.6+s;if(g<x*x&&g>.001){const h=1/Math.sqrt(g);Z.pos.x=p.x+f*h*x,Z.pos.z=p.z+d*h*x}}for(let c=0;c<Lf.length;c++){const p=Lf[c],f=Z.pos.x-p.x,d=Z.pos.z-p.z,g=f*f+d*d,x=p.colR+s;if(g<x*x&&g>.001){const h=1/Math.sqrt(g);Z.pos.x=p.x+f*h*x,Z.pos.z=p.z+d*h*x}}if(Math.sqrt(Z.pos.x*Z.pos.x+Z.pos.z*Z.pos.z)>jt){const c=Math.atan2(Z.pos.z,Z.pos.x);Z.pos.x=Math.cos(c)*jt,Z.pos.z=Math.sin(c)*jt}je.position.copy(Z.pos);const a=Math.sqrt(t.x*t.x+t.z*t.z)>.5&&Z.onGround;a?kr=0:kr+=i,eh+=((a?e?.06:.035:0)-eh)*i*6,a&&(th+=i*(e?12:8));const u=Math.sin(th)*eh;if(a&&Rf){const c=Math.sin(th)>=0?1:-1;Cp>0&&c<0&&Rf(e),Cp=c}Ap=e&&a?78:65,nh+=(Ap-nh)*i*4,ln.fov=nh,ln.updateProjectionMatrix(),ca*=Math.pow(.04,i),ca<.001&&(ca=0),Sg=u-ca}function Oc(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new Ae;let u=0;for(let c=0;c<i.length;++c){const p=i[c];let f=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in p.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(p.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in p.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(p.morphAttributes[d])}if(t){let d;if(e)d=p.index.count;else if(p.attributes.position!==void 0)d=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,d,c),u+=d}}if(e){let c=0;const p=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)p.push(d.getX(g)+c);c+=i[f].attributes.position.count}l.setIndex(p)}for(const c in o){const p=Pp(o[c]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,p)}for(const c in r){const p=r[c][0].length;if(p===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let f=0;f<p;++f){const d=[];for(let x=0;x<r[c].length;++x)d.push(r[c][x][f]);const g=Pp(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Pp(i){let t,e,n,s=-1,o=0;for(let u=0;u<i.length;++u){const c=i[u];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=c.count*e}const r=new t(o),a=new ze(r,e,n);let l=0;for(let u=0;u<i.length;++u){const c=i[u];if(c.isInterleavedBufferAttribute){const p=l/e;for(let f=0,d=c.count;f<d;f++)for(let g=0;g<e;g++){const x=c.getComponent(f,g);a.setComponent(f+p,g,x)}}else r.set(c.array,l);l+=c.count*e}return s!==void 0&&(a.gpuType=s),a}function Ip(i,t,e){return i+(t-i)*e}let Xo=null;function PS(){if(Xo)return Xo;const i=256,t=512,e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,t);s.addColorStop(0,"#7a5840"),s.addColorStop(.3,"#6d4d38"),s.addColorStop(.7,"#5a3f2e"),s.addColorStop(1,"#4e3525"),n.fillStyle=s,n.fillRect(0,0,i,t);for(let o=0;o<28;o++){const r=o/28*i+Math.sin(o*3.7)*6,a=2+Math.sin(o*2.1)*1.5,l=Math.sin(o*1.3+.5)*.5+.5,u=Math.floor(75+l*45),c=Math.floor(50+l*30),p=Math.floor(25+l*18);n.strokeStyle=`rgba(${u},${c},${p},0.5)`,n.lineWidth=a,n.beginPath();let f=0;for(n.moveTo(r,f);f<t;){f+=8+Math.random()*12;const d=Math.sin(f*.03+o)*3;n.lineTo(r+d,f)}n.stroke()}for(let o=0;o<18;o++){const r=o/18*i+Math.sin(o*5.3)*8;n.strokeStyle="rgba(20,12,6,0.35)",n.lineWidth=.8+Math.random()*1.2,n.beginPath();let a=Math.random()*40;for(n.moveTo(r,a);a<t;)a+=5+Math.random()*10,n.lineTo(r+Math.sin(a*.05+o*2)*4,a);n.stroke()}for(let o=0;o<30;o++){const r=o/30*t+Math.random()*10;n.strokeStyle=`rgba(${55+Math.random()*30},${38+Math.random()*20},${18+Math.random()*12},0.2)`,n.lineWidth=.5+Math.random()*1.5,n.beginPath(),n.moveTo(0,r);for(let a=0;a<i;a+=10)n.lineTo(a,r+Math.sin(a*.04+o)*2);n.stroke()}for(let o=0;o<5;o++){const r=Math.random()*i,a=50+Math.random()*(t-100),l=4+Math.random()*6,u=3+Math.random()*5,c=n.createRadialGradient(r,a,0,r,a,l);c.addColorStop(0,"rgba(15,8,4,0.5)"),c.addColorStop(.5,"rgba(30,18,10,0.3)"),c.addColorStop(1,"rgba(40,25,14,0)"),n.fillStyle=c,n.beginPath(),n.ellipse(r,a,l,u,0,0,Math.PI*2),n.fill()}for(let o=0;o<8;o++){const r=Math.random()*i;n.strokeStyle="rgba(34,136,85,0.15)",n.lineWidth=.5+Math.random()*.8,n.beginPath();let a=Math.random()*t*.3;n.moveTo(r,a);const l=30+Math.random()*80;for(;a<a+l&&a<t;)a+=4+Math.random()*6,n.lineTo(r+Math.sin(a*.08+o*2)*2,a);n.stroke()}return Xo=new Ka(e),Xo.wrapS=Dr,Xo.wrapT=Dr,Xo}const qa=[{leaf:1332520,glow:2280567,core:4521898},{leaf:931880,glow:3390378,core:5636044},{leaf:1721376,glow:4508757,core:7864200},{leaf:1060912,glow:2267562,core:4513262},{leaf:1583172,glow:3377356,core:5618687}];let Bc=null;function IS(){if(Bc)return Bc;const i=64,t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d"),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);return n.addColorStop(0,"rgba(68, 255, 136, 0.55)"),n.addColorStop(.25,"rgba(34, 204, 100, 0.35)"),n.addColorStop(.6,"rgba(20, 120, 60, 0.12)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=n,e.fillRect(0,0,i,i),Bc=new Ka(t),Bc}function LS(i,t){const e=new Wm({map:IS(),color:3394696,transparent:!0,opacity:.65,depthWrite:!1,blending:Jt}),n=new kv(e),s=i*.55;return n.scale.set(s*2.2,s*1.6,1),n.position.y=t+i*.6,n.visible=!1,ot.add(n),n}function DS(i){const t=new Qt,e=6+y()*10,n=.2+y()*.3,s=n*1.8,o=new P(new gt(n*.4,s,e,8));o.material=new q({color:8017984}),o.position.y=e/2,o.userData._cat="trunk",t.add(o);const r=2+Math.floor(y()*3);for(let v=0;v<r;v++){const _=v/r*6.28+y()*.5,T=e*.4+y()*e*.4,E=new P(new gt(.008,.015,T,3));E.material=new q({color:2263125}),E.position.set(Math.cos(_)*n*.74,e*.15+T/2,Math.sin(_)*n*.74),E.userData._cat="detail",t.add(E)}const a=new F(0,1,0),l=4+Math.floor(y()*4);for(let v=0;v<l;v++){const _=v/l*6.28+y()*.4,T=.8+y()*1.8,E=s*(.3+y()*.2),b=.03+y()*.03,R=-.25-y()*.25,S=Math.cos(_)*Math.cos(R),w=Math.sin(R),A=Math.sin(_)*Math.cos(R),C=new F(S,w,A).normalize(),L=new gt(b,E,T,5);L.translate(0,T/2,0);const U=new P(L,new q({color:6967352}));U.position.set(Math.cos(_)*s*.6,.05,Math.sin(_)*s*.6);const H=new nn().setFromUnitVectors(a,C);if(U.quaternion.copy(H),U.userData._cat="trunk",t.add(U),y()<.6){const G=.4+y()*.3,O=_+(y()-.5)*1.2,k=.5+y()*1,nt=new F(Math.cos(O)*Math.cos(-.1),Math.sin(-.1),Math.sin(O)*Math.cos(-.1)).normalize(),ct=new gt(.02,E*.3,k,4);ct.translate(0,k/2,0);const ft=new P(ct,new q({color:6967352})),Pt=new F(Math.cos(_)*s*.6+S*T*G,.05+w*T*G,Math.sin(_)*s*.6+A*T*G);ft.position.copy(Pt);const Wt=new nn().setFromUnitVectors(a,nt);ft.quaternion.copy(Wt),ft.userData._cat="trunk",t.add(ft)}else y(),y()}const u=qa[i%qa.length],c=new q({color:8017984}),p=new q({color:6965301}),f=new F(0,1,0);function d(v,_,T,E,b,R){const S=new gt(b,E,T,5);S.translate(0,T/2,0);const w=new P(S,R);w.position.copy(v);const A=_.clone().normalize(),C=new nn().setFromUnitVectors(f,A);w.quaternion.copy(C),w.userData._cat="trunk",t.add(w)}function g(v,_,T,E){const b=3+Math.floor(y()*4),R=E*.45;for(let w=0;w<b;w++){const A=E*(.12+y()*.18),C=new P(new Or(A,1)),L=y()<.3;C.material=new q({color:L?u.core:u.leaf}),C.position.set(v+(y()-.5)*R*2,_+(y()-.3)*R*1.4,T+(y()-.5)*R*2),C.scale.set(.7+y()*.8,.5+y()*.9,.7+y()*.8),C.userData._cat="canopy",t.add(C)}const S=new P(new Or(E*.5,1));S.material=new q({color:u.glow}),S.position.set(v,_,T),S.scale.set(1+y()*.3,.7+y()*.4,1+y()*.3),S.userData._cat="glow",t.add(S)}const x=2+Math.floor(y()*2);for(let v=0;v<x;v++){const _=e*(.3+y()*.25),T=v/x*Math.PI*2+y()*1,E=.35+y()*.45,b=1+y()*1.8,R=n*.4,S=n*.08,w=Math.cos(T)*Math.cos(E),A=Math.sin(E),C=Math.sin(T)*Math.cos(E),L=new F(w,A,C),U=new F(Math.cos(T)*n*.95,_,Math.sin(T)*n*.95);if(d(U,L,b,R,S,c),y()<.4){const H=.4+y()*.8,G=new P(new gt(.008,.003,H,3));G.material=new q({color:2773040});const O=.4+y()*.4;G.position.set(U.x+w*b*O,U.y+A*b*O-H/2,U.z+C*b*O),G.userData._cat="detail",t.add(G)}else y(),y()}const h=5+Math.floor(y()*4);for(let v=0;v<h;v++){const _=e*(.55+y()*.37),T=v/h*Math.PI*2+y()*.5,E=.6+y()*.55,b=1.5+y()*3,R=n*.35,S=.03+y()*.02,w=Math.cos(T)*Math.cos(E),A=Math.sin(E),C=Math.sin(T)*Math.cos(E),L=new F(w,A,C),U=new F(Math.cos(T)*n*.95,_,Math.sin(T)*n*.95);d(U,L,b,R,S,c);const H=U.x+w*b,G=U.y+A*b,O=U.z+C*b,k=.8+y()*1.5;g(H,G,O,k);const nt=1+Math.floor(y()*3);for(let ct=0;ct<nt;ct++){const ft=.35+y()*.35,Pt=new F(U.x+w*b*ft,U.y+A*b*ft,U.z+C*b*ft),Wt=T+(y()-.5)*1.8,et=.45+y()*.55,ut=.6+y()*1.4,_t=new F(Math.cos(Wt)*Math.cos(et),Math.sin(et),Math.sin(Wt)*Math.cos(et));d(Pt,_t,ut,.04,.012,p);const mt=Pt.x+_t.x*ut,It=Pt.y+_t.y*ut,zt=Pt.z+_t.z*ut,Kt=.5+y()*.8;g(mt,It,zt,Kt)}if(y()<.3){const ct=.3+y()*.7,ft=new P(new gt(.008,.003,ct,3));ft.material=new q({color:2773040});const Pt=.5+y()*.3;ft.position.set(U.x+w*b*Pt,U.y+A*b*Pt-ct/2,U.z+C*b*Pt),ft.userData._cat="detail",t.add(ft)}else y(),y()}const m=Math.floor(y()*3);for(let v=0;v<m;v++){const _=1+y()*e*.4,T=y()*6.28,E=.08+y()*.08,b=new P(new Y(E,5,3));b.material=new q({color:5911840}),b.scale.set(1.5,.3,1),b.position.set(Math.cos(T)*n*.8,_,Math.sin(T)*n*.8),b.rotation.y=-T,b.userData._cat="detail",t.add(b)}const M=new P(new Y(2.5+y()*1.5,8,6));return M.material=new q({color:new it(N.leaf)}),M.position.y=e*.85,M.userData._cat="glow",t.add(M),t.userData.treeH=e,t}function US(i,t){const e=yg();_f(7919+t*1013+i*3571);const n=DS(i),s=n.userData.treeH;_f(e),n.updateMatrixWorld(!0);const o=[],r=[],a=[],l=[],u=new it;for(let g=0;g<n.children.length;g++){const x=n.children[g];if(!x.isMesh)continue;let h=x.geometry.clone();if(x.updateMatrix(),h.applyMatrix4(x.matrix),h.index){const T=h.toNonIndexed();h.dispose(),h=T}const m=x.userData._cat||"trunk";m==="trunk"?u.set(16777215):u.copy(x.material.color);const v=h.attributes.position.count,_=new Float32Array(v*3);for(let T=0;T<v;T++)_[T*3]=u.r,_[T*3+1]=u.g,_[T*3+2]=u.b;if(h.setAttribute("color",new ze(_,3)),m==="trunk"){if(!h.attributes.uv){const T=new Float32Array(v*2);h.setAttribute("uv",new ze(T,2))}}else h.attributes.uv&&h.deleteAttribute("uv");m==="trunk"?o.push(h):m==="canopy"?r.push(h):m==="glow"?a.push(h):m==="detail"&&l.push(h),x.material.dispose()}const c=o.length>0?Oc(o):null,p=r.length>0?Oc(r):null,f=a.length>0?Oc(a):null,d=l.length>0?Oc(l):null;for(const g of o)g.dispose();for(const g of r)g.dispose();for(const g of a)g.dispose();for(const g of l)g.dispose();return{trunkGeo:c,canopyGeo:p,glowGeo:f,detailGeo:d,treeH:s,palIdx:i}}const Ue=new ce,Lp=new F(0,1,0),Dp=new F,sh=new nn,NS=new nn,Up=new nn,Np=new nn,zS=.15;function rl(i,t,e,n){Dp.set(i,t,e),sh.setFromUnitVectors(Lp,Dp),sh.slerp(NS,1-zS),Np.setFromAxisAngle(Lp,n),Ue.quaternion.copy(sh).multiply(Np)}function FS(i){const t=[];for(let e=0;e<i;e++){const n=e%qa.length,s=Math.floor(e/qa.length);t.push(US(n,s))}return t}function OS(i,t,e){const n=[];for(let s=0;s<i.length;s++){const o=i[s],r=qa[o.palIdx],a=PS(),l=new q({vertexColors:!0,map:a,roughness:.75,emissive:5583640,emissiveIntensity:.6}),u=o.trunkGeo?new Yn(o.trunkGeo,l,e):null;u&&(u.instanceMatrix.setUsage(ye),u.count=0,ot.add(u));const c=new q({vertexColors:!0,roughness:.5,emissive:r.glow,emissiveIntensity:1.2,transparent:!0,opacity:.5,depthWrite:!1}),p=o.canopyGeo?new Yn(o.canopyGeo,c,e):null;p&&(p.instanceMatrix.setUsage(ye),p.count=0,ot.add(p));const f=new q({vertexColors:!0,emissive:r.glow,emissiveIntensity:.4,transparent:!0,opacity:.15,depthWrite:!1}),d=o.glowGeo?new Yn(o.glowGeo,f,e):null;d&&(d.instanceMatrix.setUsage(ye),d.count=0,ot.add(d));const g=new q({vertexColors:!0,emissive:r.glow,emissiveIntensity:.4}),x=o.detailGeo?new Yn(o.detailGeo,g,e):null;x&&(x.instanceMatrix.setUsage(ye),x.count=0,ot.add(x)),n.push({trunk:u,canopy:p,glow:d,detail:x,trunkMat:l,canopyMat:c,glowMat:f,detailMat:g,instances:[],treeH:o.treeH})}for(let s=0;s<t.length;s++){const o=s%i.length,r=t[s],a=r.yRot,l=r.scale,u=hu(r.x,r.z);Ue.position.set(r.x,r.y,r.z),rl(u.x,u.y,u.z,a),Ue.scale.setScalar(l),Ue.updateMatrix();const c=n[o].instances.length;n[o].trunk&&n[o].trunk.setMatrixAt(c,Ue.matrix),n[o].canopy&&n[o].canopy.setMatrixAt(c,Ue.matrix),n[o].glow&&n[o].glow.setMatrixAt(c,Ue.matrix),n[o].detail&&n[o].detail.setMatrixAt(c,Ue.matrix),n[o].instances.push({x:r.x,z:r.z,y:r.y,yRot:a,scale:l,treeH:r.treeH||n[o].treeH,posIdx:s,nx:u.x,ny:u.y,nz:u.z})}for(let s=0;s<n.length;s++){const o=n[s].instances.length;n[s].trunk&&(n[s].trunk.count=o),n[s].canopy&&(n[s].canopy.count=o),n[s].glow&&(n[s].glow.count=o),n[s].detail&&(n[s].detail.count=0)}return n}function BS(i,t,e,n,s,o,r,a,l){for(let u=0;u<i.length;u++){const c=i[u];let p=0,f=0,d=0,g=0;for(let x=0;x<c.instances.length;x++){const h=c.instances[x],m=h.x-e,M=h.z-s,v=h.y+(h.treeH||10)*.4-n,_=m*m+v*v+M*M,T=h.posIdx,E=t[T];if(_>13225){E&&(E.visible=!1);continue}if(_>11025){if(E){const b=Math.sqrt(_);E.visible=!0,E.material.opacity=Ip(.65,0,(b-105)/10)}continue}if(_>5625){E&&(E.visible=!0,E.material.opacity=.65);continue}if(_>3969){const R=(Math.sqrt(_)-63)/12;E&&(E.visible=!0,E.material.opacity=Ip(0,.65,R)),Ue.position.set(h.x,h.y,h.z),rl(h.nx,h.ny,h.nz,h.yRot),Ue.scale.setScalar(h.scale),Ue.updateMatrix(),c.trunk&&c.trunk.setMatrixAt(p++,Ue.matrix),c.canopy&&c.canopy.setMatrixAt(f++,Ue.matrix),c.glow&&c.glow.setMatrixAt(d++,Ue.matrix);continue}if(E&&(E.visible=!1),Ue.position.set(h.x,h.y,h.z),Ue.scale.setScalar(h.scale),_<400){const b=h.x*.1+h.z*.13;rl(h.nx,h.ny,h.nz,h.yRot);const R=Math.sin(o*.25+b+1)*.003*r+l*.15,S=Math.sin(o*.3+b)*.004*r+a*.15;Up.set(R*.5,0,S*.5,1).normalize(),Ue.quaternion.multiply(Up),Ue.updateMatrix(),c.detail&&c.detail.setMatrixAt(g++,Ue.matrix)}else rl(h.nx,h.ny,h.nz,h.yRot),Ue.updateMatrix();c.trunk&&c.trunk.setMatrixAt(p++,Ue.matrix),c.canopy&&c.canopy.setMatrixAt(f++,Ue.matrix),c.glow&&c.glow.setMatrixAt(d++,Ue.matrix)}c.trunk&&(c.trunk.count=p,c.trunk.instanceMatrix.needsUpdate=!0),c.canopy&&(c.canopy.count=f,c.canopy.instanceMatrix.needsUpdate=!0),c.glow&&(c.glow.count=d,c.glow.instanceMatrix.needsUpdate=!0),c.detail&&(c.detail.count=g,c.detail.instanceMatrix.needsUpdate=!0)}}function GS(i,t){const e=new Qt,n=.4+y()*1.2,s=y()*6.28,o=.8+y()*1.5,r=.5+y()*.8,a=new P(jn.mushStem,new q({color:N.mushStem,roughness:.7,emissive:N.mushGlow,emissiveIntensity:.1}));a.position.y=.3,e.add(a);const l=new q({color:N.mushStem,emissive:N.mushGlow,emissiveIntensity:.15,roughness:.6}),u=new P(new Pe(.09,.012,4,8),l);u.position.y=.42,u.rotation.x=Math.PI/2,e.add(u);const c=new q({color:N.mushCap,emissive:N.mushGlow,emissiveIntensity:r,roughness:.3,transparent:!0,opacity:.9}),p=new P(jn.mushCap,c);p.scale.set(1,.5,1),p.position.y=.55,p.castShadow=!0,p.receiveShadow=!0,e.add(p);const f=new q({color:6693546,emissive:N.mushGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,side:Ct});for(let w=0;w<8;w++){const A=w/8*6.28,C=new P(new he(.35,.08),f);C.position.set(Math.cos(A)*.15,.48,Math.sin(A)*.15),C.rotation.y=-A,C.rotation.x=.1,e.add(C)}for(let w=0;w<4;w++){const A=new $({color:16777215,transparent:!0,opacity:.9}),C=new P(jn.mushDot,A),L=y()*6.28,U=.15+y()*.25;C.position.set(Math.cos(L)*U,.6+y()*.1,Math.sin(L)*U),e.add(C)}const d=new q({color:15663103,emissive:11197951,emissiveIntensity:.2,transparent:!0,opacity:.6,roughness:0,metalness:.5}),g=2+Math.floor(y()*2);for(let w=0;w<g;w++){const A=new P(new Y(.015+y()*.015,4,3),d),C=y()*6.28,L=.1+y()*.2;A.position.set(Math.cos(C)*L,.63+y()*.08,Math.sin(C)*L),e.add(A)}const x=new q({color:4465322,emissive:N.mushGlow,emissiveIntensity:.15,transparent:!0,opacity:.35});for(let w=0;w<4;w++){const A=y()*6.28,C=.15+y()*.25,L=new P(new gt(.004,.002,C,3),x);L.position.set(Math.cos(A)*.12,.01,Math.sin(A)*.12),L.rotation.z=1.3*(A<3.14?1:-1),L.rotation.y=A,e.add(L)}const h=new q({color:N.mushCap,emissive:N.mushGlow,emissiveIntensity:r*.6,transparent:!0,opacity:.4}),m=new P(new Pe(.38,.01,4,12),h);m.position.y=.49,m.rotation.x=Math.PI/2,e.add(m);const M=new q({color:N.mushStem,emissive:N.mushGlow,emissiveIntensity:.08,roughness:.7}),v=new P(new Y(.08,5,3),M);v.scale.set(1,.5,1),v.position.y=.04,e.add(v);const _=new q({color:1708040,roughness:.95});for(let w=0;w<3;w++){const A=y()*6.28,C=.1+y()*.12,L=new P(new Y(.008+y()*.008,3,3),_);L.position.set(Math.cos(A)*C,.005,Math.sin(A)*C),e.add(L)}const T=new $({color:N.mushGlow,transparent:!0,opacity:.2});for(let w=0;w<4;w++){const A=new P(new Y(.006,3,3),T);A.position.set((y()-.5)*.2,.35+y()*.1,(y()-.5)*.2),e.add(A)}const E=new q({color:11167453,emissive:N.mushGlow,emissiveIntensity:r*.3,roughness:.5}),b=3+Math.floor(y()*3);for(let w=0;w<b;w++){const A=y()*6.28,C=y()*.25,L=new P(new Y(.015+y()*.015,3,3),E);L.position.set(Math.cos(A)*C,.58+y()*.06,Math.sin(A)*C),e.add(L)}const R=new q({color:657416,transparent:!0,opacity:.2,roughness:.95,side:Ct}),S=new P(new He(.18,8),R);return S.rotation.x=-Math.PI/2,S.position.y=.005,e.add(S),e.scale.setScalar(n),e.position.set(i,0,t),ot.add(e),{group:e,capMat:c,phase:s,speed:o,base:r,x:i,z:t}}function kS(i,t){const e=new Qt,n=y()*6.28,s=new q({color:N.crystal,emissive:N.crystalCore,emissiveIntensity:1.5,transparent:!0,opacity:.7,roughness:.1,metalness:.5}),o=new P(jn.crystal,s);o.position.y=.9,o.castShadow=!0,e.add(o);for(let v=0;v<3;v++){const _=new P(jn.crystalSm,s),T=v/3*6.28+y()*.5;_.position.set(Math.cos(T)*.4,.45,Math.sin(T)*.4),_.rotation.z=(y()-.5)*.8,_.castShadow=!0,e.add(_)}const r=new q({color:1710626,roughness:.9,metalness:.1}),a=3+Math.floor(y()*3);for(let v=0;v<a;v++){const _=y()*6.28,T=.2+y()*.5,E=.08+y()*.12,b=new P(new Y(E,4,3),r);b.scale.set(1+y()*.5,.5+y()*.4,1+y()*.5),b.position.set(Math.cos(_)*T,E*.3,Math.sin(_)*T),b.rotation.set(y(),y(),y()),e.add(b)}const l=new $({color:N.crystalCore,transparent:!0,opacity:.5});for(let v=0;v<3;v++){const _=.4+y()*.8,T=new P(new gt(.008,.008,_,3),l);T.position.set((y()-.5)*.15,.5+y()*.7,(y()-.5)*.15),T.rotation.set((y()-.5)*.8,(y()-.5)*.5,(y()-.5)*.8),e.add(T)}const u=new $({color:11206638,transparent:!0,opacity:.6});for(let v=0;v<5;v++){const _=new P(new Y(.012,3,3),u);_.position.set((y()-.5)*1,.3+y()*1.5,(y()-.5)*1),e.add(_)}const c=new q({color:N.crystal,emissive:N.crystalCore,emissiveIntensity:.8,transparent:!0,opacity:.5});for(let v=0;v<4;v++){const _=y()*6.28,T=.3+y()*.3,E=new P(new gt(0,.015,.12+y()*.1,3),c);E.position.set(Math.cos(_)*T,.06+y()*.1,Math.sin(_)*T),E.rotation.z=(y()-.5)*.6,e.add(E)}const p=new q({color:3364198,emissive:1122867,emissiveIntensity:.05,roughness:.9,side:Ct});for(let v=0;v<2;v++){const _=y()*6.28,T=.2+y()*.3,E=new P(new He(.04+y()*.03,5),p);E.rotation.x=-Math.PI/2+y()*.4,E.position.set(Math.cos(_)*T,.05,Math.sin(_)*T),e.add(E)}const f=new $({color:N.crystalCore,transparent:!0,opacity:.2});for(let v=0;v<2;v++){const _=new P(new gt(.003,.003,.6+y()*.4,3),f);_.position.set((y()-.5)*.3,.7+y()*.5,(y()-.5)*.3),_.rotation.set((y()-.5)*1,y(),(y()-.5)*1),e.add(_)}const d=new q({color:1135940,emissive:1127202,emissiveIntensity:.3,transparent:!0,opacity:.25});for(let v=0;v<4;v++){const _=new P(new Y(.02+y()*.02,3,3),d);_.position.set((y()-.5)*.15,.4+y()*.6,(y()-.5)*.15),e.add(_)}const g=new $({color:11206638,transparent:!0,opacity:.06}),x=new P(new Pe(.35,.02,4,10),g);x.position.y=.6,x.rotation.x=Math.PI/2+y()*.3,e.add(x);const h=new $({color:N.crystal,transparent:!0,opacity:.06,side:Ct}),m=new P(new He(.8,8),h);m.rotation.x=-Math.PI/2,m.position.y=.01,e.add(m),e.position.set(i,0,t),ot.add(e);const M=new Xr(N.crystal,.5,8);return M.position.set(i,1.2,t),ot.add(M),{group:e,mat:s,phase:n,x:i,z:t,light:M}}const Vn={uTime:{value:0},uWindAmp:{value:1},uWindLeanX:{value:0},uWindLeanZ:{value:0},uPlayerX:{value:0},uPlayerZ:{value:0},uGlowMult:{value:1}};function HS(i,t,e,n,s,o,r){Vn.uTime.value=i,Vn.uWindAmp.value=t,Vn.uWindLeanX.value=e,Vn.uWindLeanZ.value=n,Vn.uPlayerX.value=s,Vn.uPlayerZ.value=o,r!==void 0&&(Vn.uGlowMult.value=r)}function VS(i,t,e,n,s){const o=new Ae,r=[],a=[],l=[],u=n||20,c=new it(s?s[0]:663568),p=new it(s?s[1]:1388056),f=new it(s?s[2]:2777141),d=new it(s?s[3]:4517461),g=new it(s?s[4]:7864268),x=new it(s?s[5]:14548838),h=new it,m=Dt(i,t);for(let S=0;S<u;S++){const w=y()*6.28,A=y()*e,C=Math.cos(w)*A,L=Math.sin(w)*A,U=Dt(i+C,t+L)-m,H=.25+y()*.65,G=.03+y()*.05,O=(y()-.5)*.2,k=(y()-.5)*.2,nt=(y()-.5)*.12,ct=y()<.5?c:p,ft=y(),Pt=ft<.4?d:ft<.7?g:x,Wt=H*.35,et=H*.7,ut=O*.3,_t=O*.7,mt=k*.3,It=k*.7;r.push(C-G,U+.01,L),r.push(C+G,U+.01,L),r.push(C+ut-G*.9,U+Wt,L+mt),l.push(0,0,.35),a.push(ct.r,ct.g,ct.b,ct.r,ct.g,ct.b),h.copy(ct).lerp(f,.4),a.push(h.r,h.g,h.b),r.push(C+G,U+.01,L),r.push(C+ut+G*.9,U+Wt,L+mt),r.push(C+ut-G*.9,U+Wt,L+mt),l.push(0,.35,.35),a.push(ct.r,ct.g,ct.b),h.copy(ct).lerp(f,.4),a.push(h.r,h.g,h.b,h.r,h.g,h.b);const zt=G*.65;r.push(C+ut-G*.9,U+Wt,L+mt),r.push(C+ut+G*.9,U+Wt,L+mt),r.push(C+_t-zt,U+et,L+It+nt),l.push(.35,.35,.7),h.copy(ct).lerp(f,.4),a.push(h.r,h.g,h.b,h.r,h.g,h.b),h.copy(f).lerp(Pt,.3),a.push(h.r,h.g,h.b),r.push(C+ut+G*.9,U+Wt,L+mt),r.push(C+_t+zt,U+et,L+It+nt),r.push(C+_t-zt,U+et,L+It+nt),l.push(.35,.7,.7),h.copy(ct).lerp(f,.4),a.push(h.r,h.g,h.b),h.copy(f).lerp(Pt,.3),a.push(h.r,h.g,h.b,h.r,h.g,h.b),r.push(C+_t-zt,U+et,L+It+nt),r.push(C+_t+zt,U+et,L+It+nt),r.push(C+O+nt*2,U+H,L+k+nt*1.5),l.push(.7,.7,1),h.copy(f).lerp(Pt,.3),a.push(h.r,h.g,h.b,h.r,h.g,h.b),a.push(Pt.r,Pt.g,Pt.b)}const M=new it(s?s[6]:1725736),v=new it(s?s[7]:3385941),_=Math.floor(u*.3);for(let S=0;S<_;S++){const w=y()*6.28,A=y()*e*.9,C=Math.cos(w)*A,L=Math.sin(w)*A,U=Dt(i+C,t+L)-m,H=.02+y()*.03;r.push(C-H,U+.01,L),r.push(C+H,U+.01,L),r.push(C,U+.03+y()*.02,L+H),l.push(0,0,.05),a.push(M.r,M.g,M.b),a.push(M.r,M.g,M.b),a.push(v.r,v.g,v.b)}o.setAttribute("position",new Vt(r,3)),o.setAttribute("color",new Vt(a,3)),o.setAttribute("bladeHeight",new Vt(l,1)),o.computeVertexNormals();const T=new q({vertexColors:!0,roughness:.7,side:Ct,emissive:s?s[8]:4521830,emissiveIntensity:.35}),E=i,b=t;T.onBeforeCompile=S=>{S.uniforms.uTime=Vn.uTime,S.uniforms.uWindAmp=Vn.uWindAmp,S.uniforms.uWindLeanX=Vn.uWindLeanX,S.uniforms.uWindLeanZ=Vn.uWindLeanZ,S.uniforms.uPlayerX=Vn.uPlayerX,S.uniforms.uPlayerZ=Vn.uPlayerZ,S.uniforms.uGlowMult=Vn.uGlowMult,S.uniforms.uPatchX={value:E},S.uniforms.uPatchZ={value:b},S.vertexShader=S.vertexShader.replace("#include <common>",`#include <common>
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
      `)};const R=new P(o,T);return R.position.set(i,0,t),ot.add(R),{mesh:R,geo:o,cx:i,cz:t}}function WS(i,t){const e=new Qt,n=new q({color:N.fern,emissive:N.fernGlow,emissiveIntensity:.2,roughness:.7,side:Ct}),s=3+Math.floor(y()*2),o=.5+y()*.7,r=new q({color:1708552,roughness:.95}),a=new P(new Y(.06,5,3),r);a.scale.set(1.5,.5,1.5),a.position.y=.02,e.add(a);for(let m=0;m<3;m++){const M=y()*6.28,v=new P(new gt(.003,.002,.08,3),r);v.position.set(Math.cos(M)*.06,.01,Math.sin(M)*.06),v.rotation.z=(M<3.14?1:-1)*1.2,v.rotation.y=M,e.add(v)}for(let m=0;m<s;m++){const M=m/s*6.28+y()*.3,v=new P(new gt(.004,.006,.55,3),new q({color:1721632,roughness:.8}));v.position.set(Math.cos(M)*.15,.25,Math.sin(M)*.15),v.rotation.y=-M,v.rotation.x=-.6-y()*.4,e.add(v);const _=new P(new he(.12,.6,1,3),n);_.position.set(Math.cos(M)*.15,.25,Math.sin(M)*.15),_.rotation.y=-M,_.rotation.x=-.6-y()*.4,e.add(_);for(let E=0;E<6;E++){const b=new P(new he(.07,.06,1,1),n),R=.06+E*.08,S=E%2===0?1:-1;b.position.set(Math.cos(M)*(.15+.06),R,Math.sin(M)*(.15+.06*S)),b.rotation.y=-M,b.rotation.x=-.8,b.rotation.z=S*.5,e.add(b)}const T=new q({color:8939042,emissive:4469521,emissiveIntensity:.1});for(let E=0;E<3;E++){const b=new P(new Y(.008,3,3),T),R=.12+E*.12;b.position.set(Math.cos(M)*(.15+.02),R-.01,Math.sin(M)*(.15+.02)),e.add(b)}}const l=new q({color:N.fernGlow,emissive:N.fernGlow,emissiveIntensity:.3}),u=new P(new Y(.04,4,3),l);u.position.y=.35,e.add(u);const c=new P(new gt(.006,.003,.06,3),l);c.position.set(.02,.37,0),c.rotation.z=-.8,e.add(c);const p=new q({color:15663103,emissive:8960989,emissiveIntensity:.1,transparent:!0,opacity:.5,roughness:0,metalness:.5});for(let m=0;m<3;m++){const M=y()*6.28,v=y()*.2,_=new P(new Y(.006+y()*.005,3,3),p);_.position.set(Math.cos(M)*v,.12+y()*.2,Math.sin(M)*v),e.add(_)}const f=new q({color:3811856,roughness:.9,side:Ct,transparent:!0,opacity:.6}),d=new P(new he(.1,.4,1,2),f),g=y()*6.28;d.position.set(Math.cos(g)*.12,.05,Math.sin(g)*.12),d.rotation.x=-1.3,d.rotation.y=g,e.add(d);const x=new $({color:2768928,transparent:!0,opacity:.3});for(let m=0;m<4;m++){const M=new P(new gt(.001,.001,.015,3),x);M.position.set((y()-.5)*.08,.08+y()*.15,(y()-.5)*.08),M.rotation.z=(y()-.5)*1.5,e.add(M)}const h=new q({color:1708552,roughness:.95});for(let m=0;m<3;m++){const M=new P(new Y(.006,3,3),h);M.position.set((y()-.5)*.1,.005,(y()-.5)*.1),e.add(M)}return e.scale.setScalar(o),e.position.set(i,0,t),ot.add(e),{group:e,phase:y()*6.28}}function XS(i,t){const e=new Qt,n=.25+y()*.4,s=new q({color:N.flowerStem,roughness:.8}),o=new P(new gt(.01,.015,n,4),s);o.position.y=n/2,e.add(o);for(let R=0;R<2;R++){const S=new P(new Gn(.004,.012,3),s);S.position.set(.012,n*.25+R*n*.25,0),S.rotation.z=-1.2,e.add(S)}const r=new q({color:N.fern,roughness:.7,side:Ct}),a=new P(new he(.06,.04),r);a.position.set(.03,n*.3,0),a.rotation.z=-.5,e.add(a);const l=new P(new he(.05,.035),r);l.position.set(-.025,n*.5,.01),l.rotation.z=.6,e.add(l);const u=new q({color:1728560,roughness:.7,side:Ct});for(let R=0;R<5;R++){const S=R/5*6.28+.3,w=new P(new he(.025,.02),u);w.position.set(Math.cos(S)*.025,n-.005,Math.sin(S)*.025),w.rotation.x=-1.2,w.rotation.y=-S,e.add(w)}const c=new q({color:N.flower,emissive:N.flowerGlow,emissiveIntensity:.4+y()*.4,transparent:!0,opacity:.85,side:Ct});for(let R=0;R<6;R++){const S=R/6*6.28,w=new P(new he(.05,.04),c);w.position.set(Math.cos(S)*.03,n+.01,Math.sin(S)*.03),w.rotation.x=-.8,w.rotation.y=-S,e.add(w)}const p=new q({color:16777215,emissive:N.flowerGlow,emissiveIntensity:1.2}),f=new P(new Y(.02,4,3),p);f.position.y=n+.02,e.add(f);const d=new $({color:16777130,transparent:!0,opacity:.7}),g=new $({color:16772676});for(let R=0;R<3;R++){const S=R/3*6.28+.5,w=new P(new gt(.002,.002,.025,3),d);w.position.set(Math.cos(S)*.012,n+.03,Math.sin(S)*.012),e.add(w);const A=new P(new Y(.005,3,3),g);A.position.set(Math.cos(S)*.012,n+.045,Math.sin(S)*.012),e.add(A)}const x=new $({color:16777164,transparent:!0,opacity:.3});for(let R=0;R<2;R++){const S=new P(new Y(.006,3,3),x);S.position.set((y()-.5)*.04,n+.06+y()*.04,(y()-.5)*.04),e.add(S)}const h=new q({color:16772778,emissive:16768324,emissiveIntensity:.2,transparent:!0,opacity:.5,roughness:0,metalness:.4}),m=new P(new Y(.006,3,3),h);m.position.set(.005,n+.005,.005),e.add(m);const M=new $({color:15662984}),v=new P(new gt(.002,.002,.03,3),M);v.position.y=n+.035,e.add(v);const _=new P(new Y(.005,3,3),M);_.position.y=n+.055,e.add(_);const T=new q({color:1725728,roughness:.7}),E=new P(new gt(.015,.02,.02,5),T);E.position.y=n-.01,e.add(E);const b=new $({color:16777215,transparent:!0,opacity:.35});for(let R=0;R<4;R++){const S=R/4*6.28+.3,w=new P(new Y(.004,3,3),b);w.position.set(Math.cos(S)*.045,n+.005,Math.sin(S)*.045),e.add(w)}return e.position.set(i,0,t),ot.add(e),{group:e,petalMat:c,phase:y()*6.28,baseH:n}}function qS(i,t){const e=new Qt,n=new q({color:N.reed,emissive:N.reedTip,emissiveIntensity:.15,roughness:.7}),s=new q({color:N.reedTip,emissive:N.reedTip,emissiveIntensity:.35}),o=new q({color:1709328,roughness:.95}),r=new P(new Y(.08,5,3),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=3+Math.floor(y()*4),l=new q({color:N.reed,roughness:.7,side:Ct});for(let d=0;d<a;d++){const g=.6+y()*1,x=(y()-.5)*.2,h=(y()-.5)*.2,m=new P(new gt(.008,.015,g,4),n);m.position.set(x,g/2,h),e.add(m);const M=2+Math.floor(y()*2),v=new q({color:2771488,roughness:.7});for(let E=0;E<M;E++){const b=g*.2+E*g*.25,R=new P(new Pe(.012,.004,4,6),v);R.position.set(x,b,h),R.rotation.x=Math.PI/2,e.add(R)}if(y()<.7){const E=.1+y()*.15,b=y()*6.28,R=new P(new he(.02,E),l);R.position.set(x+Math.cos(b)*.02,g*.4,h+Math.sin(b)*.02),R.rotation.y=-b,R.rotation.x=-.5-y()*.4,e.add(R)}const _=new P(new Y(.025,4,3),s);_.scale.set(.8,1.5,.8),_.position.set(x,g+.02,h),e.add(_);const T=new $({color:N.reedTip,transparent:!0,opacity:.4});for(let E=0;E<3;E++){const b=E/3*6.28+y()*.5,R=new P(new gt(.002,.001,.04,3),T);R.position.set(x+Math.cos(b)*.015,g+.05,h+Math.sin(b)*.015),R.rotation.z=(y()-.5)*.4,e.add(R)}}e.position.set(i,0,t),ot.add(e);const u=new q({color:4864536,roughness:.9,side:Ct,transparent:!0,opacity:.5});for(let d=0;d<2;d++){y()*6.28;const g=(y()-.5)*.15,x=new P(new he(.025,.02),u);x.position.set(g,.2+d*.25,(y()-.5)*.1),x.rotation.set(y()*.5,y(),y()*.5),e.add(x)}const c=new $({color:15654348,transparent:!0,opacity:.25});for(let d=0;d<3;d++){const g=new P(new Y(.005,3,3),c);g.position.set((y()-.5)*.15,.8+y()*.6,(y()-.5)*.15),e.add(g)}const p=new q({color:2241312,roughness:.9,transparent:!0,opacity:.2}),f=new P(new Pe(.1,.008,4,8),p);return f.rotation.x=Math.PI/2,f.position.y=.03,e.add(f),{group:e,phase:y()*6.28,swayAmp:.03+y()*.04}}let In=null;const yr=[],bn=new ce,Gl=new it,bg=new it(N.dandSeed);function YS(i){const t=new $({color:16777215,transparent:!0,opacity:1});In=new Yn(jn.dandSeed,t,i),In.instanceMatrix.setUsage(ye),In.instanceColor=new Li(new Float32Array(i*3),3),In.instanceColor.setUsage(ye),bn.scale.setScalar(0),bn.updateMatrix();for(let e=0;e<i;e++)In.setMatrixAt(e,bn.matrix),Gl.copy(bg),In.setColorAt(e,Gl),yr.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,drift:0});In.count=i,In.frustumCulled=!1,ot.add(In)}function Tg(i,t,e){let n=null;for(let o=0;o<yr.length;o++)if(!yr[o].active){n=yr[o];break}if(!n)return;n.x=i+(Math.random()-.5)*.1,n.y=t,n.z=e+(Math.random()-.5)*.1;const s=Math.random()*6.28;n.vx=Math.cos(s)*.5+Math.random()*.3,n.vy=.6+Math.random()*.8,n.vz=Math.sin(s)*.5,n.life=4+Math.random()*5,n.max=n.life,n.active=!0,n.drift=Math.random()*6.28}let Eg=0,Ag=0,Rg=0;function ZS(i,t,e){Eg=i,Ag=t,Rg=e}function $S(i,t){let e=!1;for(let n=0;n<yr.length;n++){const s=yr[n];if(!s.active){bn.position.set(0,-100,0),bn.scale.setScalar(0),bn.updateMatrix(),In.setMatrixAt(n,bn.matrix);continue}if(s.life-=i,s.life<=0){s.active=!1,bn.position.set(0,-100,0),bn.scale.setScalar(0),bn.updateMatrix(),In.setMatrixAt(n,bn.matrix);continue}s.drift+=(Math.random()-.5)*1.5*i,s.vx+=Math.sin(s.drift)*.3*i,s.vz+=Math.cos(s.drift)*.2*i,s.vx+=Eg*.5*i,s.vz+=Ag*.5*i,s.vy+=(.15+Rg*.1-s.vy)*i*.5,s.vx*=.998,s.vy*=.998,s.vz*=.998,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i;const r=s.life/s.max*.7*(.6+Math.sin(t*2+n)*.4),a=.8+Math.sin(t*3+n*.5)*.3;bn.position.set(s.x,s.y,s.z),bn.scale.setScalar(a),bn.updateMatrix(),In.setMatrixAt(n,bn.matrix),Gl.copy(bg).multiplyScalar(r),In.setColorAt(n,Gl),e=!0}In.instanceMatrix.needsUpdate=!0,e&&(In.instanceColor.needsUpdate=!0)}function jS(i,t){const e=new Qt,n=.35+y()*.45,s=new q({color:2777128,roughness:.7,side:Ct}),o=3+Math.floor(y()*2);for(let v=0;v<o;v++){const _=v/o*6.28+y()*.3,T=new P(new he(.08,.035),s);T.position.set(Math.cos(_)*.05,.02,Math.sin(_)*.05),T.rotation.x=-1.4,T.rotation.y=-_,e.add(T)}const r=new q({color:N.dandStem,roughness:.8}),a=new P(new gt(.008,.012,n,4),r);a.position.y=n/2,e.add(a);const l=new $({color:14540236,transparent:!0,opacity:.3});for(let v=0;v<4;v++){const _=n*.2+v*n*.18,T=new P(new gt(.002,.001,.02,3),l);T.position.set(.01,_,0),T.rotation.z=-.8,e.add(T)}const u=new q({color:N.fern,roughness:.7,side:Ct}),c=new P(new he(.07,.03),u);c.position.set(.03,n*.15,0),c.rotation.z=-.4,e.add(c);const p=new q({color:N.dandHead,emissive:N.dandSeedGlow,emissiveIntensity:.2,transparent:!0,opacity:.85}),f=new P(new Y(.07,6,5),p);f.position.y=n+.05,e.add(f);const d=new q({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.5,roughness:0,metalness:.5}),g=new P(new Y(.012,4,3),d);g.position.set(.04,n+.07,.03),e.add(g);const x=new $({color:N.dandSeed,transparent:!0,opacity:.7});for(let v=0;v<8;v++){const _=v/8*6.28+y()*.2,T=new P(new Gn(.015,.05,3),x);T.position.set(Math.cos(_)*.06,n+.05+y()*.04,Math.sin(_)*.06),T.rotation.x=(y()-.5)*.6,T.rotation.z=(y()-.5)*.6,e.add(T);const E=new $({color:16777215,transparent:!0,opacity:.3}),b=new P(new gt(.001,.001,.03,3),E);b.position.set(Math.cos(_)*.08,n+.08,Math.sin(_)*.08),b.rotation.set((y()-.5)*.5,0,(y()-.5)*.5),e.add(b);const R=new $({color:15658717,transparent:!0,opacity:.15});for(let S=0;S<2;S++){const w=_+(S-.5)*.5,A=new P(new gt(8e-4,8e-4,.025,3),R);A.position.set(Math.cos(w)*.075,n+.09,Math.sin(w)*.075),A.rotation.set((y()-.5)*.8,0,(y()-.5)*.8),e.add(A)}}const h=new q({color:3811856,roughness:.9});for(let v=0;v<4;v++){const _=v/4*6.28+y()*.5,T=new P(new Y(.005,3,3),h);T.scale.set(.6,1.5,.6),T.position.set(Math.cos(_)*.04,n+.04,Math.sin(_)*.04),e.add(T)}const m=new $({color:1716240,transparent:!0,opacity:.15});for(let v=0;v<3;v++){const _=v/3*6.28,T=new P(new gt(.001,.001,n*.7,3),m);T.position.set(Math.cos(_)*.01,n*.35,Math.sin(_)*.01),e.add(T)}const M=new $({color:13426107,transparent:!0,opacity:.2});for(let v=0;v<5;v++){const _=n*.1+y()*n*.7,T=y()*6.28,E=new P(new gt(8e-4,8e-4,.012,3),M);E.position.set(Math.cos(T)*.012,_,Math.sin(T)*.012),E.rotation.z=T<3.14?-.8:.8,E.rotation.y=T,e.add(E)}return e.position.set(i,0,t),ot.add(e),{group:e,headMat:p,x:i,z:t,h:n,dispersed:!1,phase:y()*6.28,seedCount:8,regrowTimer:0}}function KS(i,t,e,n){for(let s=0;s<i.length;s++){const o=i[s];if(o.dispersed){if(o.regrowTimer-=t,o.regrowTimer<=0){o.dispersed=!1;for(let r=2;r<o.group.children.length;r++)o.group.children[r].visible=!0}o.group.rotation.z=Math.sin(e*.9+o.phase)*.02}else{const r=o.x-n.x,a=o.z-n.z;if(r*r+a*a<1.2){o.dispersed=!0;for(let l=0;l<8;l++)Tg(o.x,o.h+.05,o.z);for(let l=2;l<o.group.children.length;l++)o.group.children[l].visible=!1;o.regrowTimer=15+Math.random()*10}else o.group.rotation.z=Math.sin(e*.9+o.phase)*.04,o.headMat.emissiveIntensity=.15+Math.sin(e*1.2+o.phase)*.1}}}function JS(i,t){const e=new Qt,n=1+y()*.8,s=.25+y()*.15,o=new q({color:N.thornStem,roughness:.8,emissive:662032,emissiveIntensity:.1}),r=new P(new gt(.04,.07,n,5),o);r.position.y=n/2,e.add(r);const a=new q({color:N.thornSpike,roughness:.6}),l=4+Math.floor(y()*3);for(let _=0;_<l;_++){const T=n*.15+_/l*n*.6,E=_/l*6.28+y()*1,b=new P(new Gn(.015,.08+y()*.04,3),a);b.position.set(Math.cos(E)*.06,T,Math.sin(E)*.06),b.rotation.z=(E<3.14?1.3:-1.3)+y()*.2,b.rotation.y=E,e.add(b)}const u=new q({color:N.thornOrb,emissive:N.thornOrbGlow,emissiveIntensity:.8,transparent:!0,opacity:.35,roughness:.1,metalness:.3}),c=new P(new Y(s,12,10),u);c.position.y=n+s*.5,e.add(c);const p=new q({color:16777164,emissive:N.thornOrbGlow,emissiveIntensity:1.2,transparent:!0,opacity:.6,roughness:0,metalness:.1}),f=new P(new Y(s*.35,8,6),p);f.position.y=n+s*.5,e.add(f);const d=new $({color:N.thornOrbGlow,transparent:!0,opacity:.06,blending:Jt,depthWrite:!1}),g=new P(new Y(s*2,8,6),d);g.position.y=n+s*.5,e.add(g);const x=new q({color:N.thornSpike,emissive:N.thornOrbGlow,emissiveIntensity:.3,roughness:.5}),h=6+Math.floor(y()*3);for(let _=0;_<h;_++){const T=_/h*6.28+y()*.3,E=(y()-.5)*1.2,b=.3+y()*.3,R=new P(new Gn(.018,b,4),x);R.position.set(Math.cos(T)*s*.8,n+s*.5+Math.sin(E)*s*.5,Math.sin(T)*s*.8),R.rotation.z=-E+(T<3.14?1.4:-1.4),R.rotation.y=T,e.add(R)}const m=new q({color:N.thornPetal,emissive:3344920,emissiveIntensity:.15,transparent:!0,opacity:.7,roughness:.6,side:Ct}),M=4+Math.floor(y()*2);for(let _=0;_<M;_++){const T=_/M*6.28+y()*.3,E=.2+y()*.15,b=new P(new he(E,E*1.5),m);b.position.set(Math.cos(T)*(s+.05),n+s*.3-y()*.1,Math.sin(T)*(s+.05)),b.rotation.y=-T,b.rotation.x=-.4-y()*.3,e.add(b)}const v=new q({color:1718296,emissive:662026,emissiveIntensity:.05,side:Ct});for(let _=0;_<2;_++){const T=y()*6.28,E=new P(new he(.15,.25),v);E.position.set(Math.cos(T)*.12,n*.3,Math.sin(T)*.12),E.rotation.y=-T,E.rotation.x=-.8,e.add(E)}return e.position.set(i,0,t),ot.add(e),{group:e,orbMat:u,hazeMat:d,phase:y()*6.28,x:i,z:t}}function QS(i,t){const e=new Qt,n=2+Math.floor(y()*2),s=new q({color:1710128,roughness:.85,emissive:N.helixStem,emissiveIntensity:.1}),o=new P(new Y(.18,8,6),s);o.scale.set(1.2,.5,1.2),o.position.y=.05,e.add(o);const r=[];for(let u=0;u<n;u++){const c=1.5+y()*1,p=.15+y()*.15,f=1.5+y()*1.5,d=y()*6.28,g=[],x=16;for(let C=0;C<=x;C++){const L=C/x,U=d+L*f*6.28,H=p*(.3+L*.7);g.push(new F(Math.cos(U)*H,L*c,Math.sin(U)*H))}const h=new wo(g),m=new q({color:N.helixStem,emissive:N.helixNode,emissiveIntensity:.12,roughness:.7}),M=new P(new xn(h,20,.025+y()*.01,5,!1),m);e.add(M);const v=.1+y()*.08,T=y()<.5?new Fd(v,0):new zd(v,0),E=new q({color:N.helixPod,emissive:N.helixPodGlow,emissiveIntensity:.5+y()*.3,transparent:!0,opacity:.65,roughness:.2,metalness:.2}),b=new P(T,E),R=h.getPoint(1);b.position.copy(R),b.rotation.set(y()*3,y()*3,y()*3),e.add(b),r.push(E);const S=new P(new Y(v*2.5,6,4),new $({color:N.helixPodGlow,transparent:!0,opacity:.05,blending:Jt,depthWrite:!1}));S.position.copy(R),e.add(S);const w=1+Math.floor(y()*2);for(let C=0;C<w;C++){const L=.3+y()*.5,U=h.getPoint(L),H=new q({color:N.helixRing,emissive:N.helixPodGlow,emissiveIntensity:.2,transparent:!0,opacity:.45,roughness:.3}),G=new P(new Pe(.1+y()*.08,.008,6,12),H);G.position.copy(U),G.rotation.set(y()*3,y()*3,y()*3),e.add(G)}const A=2+Math.floor(y()*2);for(let C=0;C<A;C++){const L=.2+C/A*.6,U=h.getPoint(L),H=new q({color:N.helixNode,emissive:N.helixPodGlow,emissiveIntensity:.35,transparent:!0,opacity:.5}),G=new P(new Y(.025+y()*.015,5,4),H);G.position.copy(U),e.add(G)}}const a=new q({color:N.helixStem,emissive:N.helixNode,emissiveIntensity:.06,roughness:.8}),l=2+Math.floor(y()*2);for(let u=0;u<l;u++){const c=u/l*6.28+y()*.5,p=.3+y()*.4,f=new P(new gt(.006,.015,p,3),a);f.position.set(Math.cos(c)*.12,p*.3,Math.sin(c)*.12),f.rotation.z=(c<3.14?.8:-.8)+y()*.3,f.rotation.y=c,e.add(f)}return e.position.set(i,0,t),ot.add(e),{group:e,podMats:r,phase:y()*6.28}}function tb(i,t){const e=new Qt,n=.25+y()*.1,s=new q({color:1718309,roughness:.85,emissive:662032,emissiveIntensity:.06});for(let f=0;f<3;f++){const d=f/3*6.28+y()*.5,g=new P(new gt(.01,.035,.25+y()*.15,4),s);g.position.set(Math.cos(d)*n*.6,.06,Math.sin(d)*n*.6),g.rotation.z=d<3.14?1:-1,g.rotation.y=d,e.add(g)}const o=new q({color:N.snapBody,emissive:N.snapBodyGlow,emissiveIntensity:.4,transparent:!0,opacity:.7,roughness:.4,metalness:.1}),r=new P(new Y(n,10,8),o);r.position.y=n+.05,r.scale.set(1,.85,1),e.add(r);const a=new q({color:1730116,emissive:N.snapBodyGlow,emissiveIntensity:.25,transparent:!0,opacity:.6}),l=new P(new Pe(n*.45,.02,6,12),a);l.position.y=n*1.7,l.rotation.x=Math.PI/2,e.add(l);const u=5+Math.floor(y()*3),c=[],p=[];for(let f=0;f<u;f++){const d=f/u*6.28+y()*.3,g=y()*6.28,x=3+Math.floor(y()*2),h=.2+y()*.1,m=[],M=new ce;M.position.set(Math.cos(d)*n*.6,n*1.4,Math.sin(d)*n*.6),M.rotation.y=d,e.add(M);let v=M;for(let b=0;b<x;b++){const R=b/x,S=.02*(1-R*.6),w=new q({color:N.snapFrond,emissive:N.snapBodyGlow,emissiveIntensity:.08+R*.15,roughness:.6}),A=new P(new gt(S*.7,S,h,4),w);A.position.y=b===0?0:h,A.geometry.translate(0,h/2,0),v.add(A),m.push(A),v=A}const _=new q({color:N.snapTip,emissive:N.snapTipGlow,emissiveIntensity:.6,transparent:!0,opacity:.7,roughness:.2}),T=new P(new Y(.025+y()*.015,5,4),_);T.position.y=h,v.add(T),p.push(_);const E=new P(new Y(.06,4,3),new $({color:N.snapTipGlow,transparent:!0,opacity:.04,blending:Jt,depthWrite:!1}));T.add(E),c.push({segments:m,baseAngle:d,phaseOffset:g,segLen:h})}return e.position.set(i,0,t),ot.add(e),{group:e,body:r,bodyMat:o,tipMats:p,fronds:c,phase:y()*6.28,x:i,z:t}}function eb(i,t,e,n,s){for(let o=0;o<i.length;o++){const r=i[o],a=s?s(r.x,r.z,n):n,l=Math.sin(e*1.5+r.phase)*.08;r.body.scale.set(1+l,.85+l*.5,1+l),r.bodyMat.emissiveIntensity=(.5+Math.sin(e*1.5+r.phase)*.3)*a;for(let u=0;u<r.fronds.length;u++){const c=r.fronds[u],p=1.2+u%3*.3;for(let f=0;f<c.segments.length;f++){const d=c.segments[f],g=.15+f*.12,x=Math.sin(e*p+c.phaseOffset+f*.5)*g,h=Math.cos(e*p*.7+c.phaseOffset+f*.3)*g*.6;d.rotation.z=x,d.rotation.x=h}}for(let u=0;u<r.tipMats.length;u++){const c=Math.sin(e*2.5+r.phase+u*1.2)*.5+.5;r.tipMats[u].emissiveIntensity=(.5+c*.6)*a}}}function nb(i,t){const e=new Qt,n=1.2+y()*.8,s=3+Math.floor(y()*3),o=new q({color:N.spiralStem,roughness:.7,emissive:N.spiralFrond,emissiveIntensity:.06}),r=new P(new gt(.02,.05,n,5),o);r.position.y=n/2,e.add(r);const a=new q({color:1721392,emissive:662032,emissiveIntensity:.05,side:Ct});for(let c=0;c<3;c++){const p=y()*6.28,f=new P(new he(.12,.2),a);f.position.set(Math.cos(p)*.1,n*.12,Math.sin(p)*.1),f.rotation.y=-p,f.rotation.x=-.7,e.add(f)}const l=[];for(let c=0;c<s;c++){const p=c/s*6.28+y()*.4,f=n*(.5+y()*.35),d=.15+y()*.15,g=1+y()*1.5,x=[],h=14;for(let S=0;S<=h;S++){const w=S/h,A=p+w*g*6.28,C=d*(.2+w*.8);x.push(new F(Math.cos(A)*C,n*.25+w*f,Math.sin(A)*C))}const m=new wo(x),M=new q({color:N.spiralFrond,emissive:N.spiralGlow,emissiveIntensity:.12,roughness:.5}),v=new P(new xn(m,16,.012+y()*.006,4,!1),M);e.add(v);const _=3+Math.floor(y()*2);for(let S=0;S<_;S++){const w=.2+S/_*.6,A=m.getPoint(w),C=new P(new he(.04,.06),new q({color:N.spiralFrond,emissive:N.spiralGlow,emissiveIntensity:.08,side:Ct}));C.position.copy(A),C.rotation.set(y()*1.5,y()*3,y()*1.5),e.add(C)}const T=m.getPoint(1),E=new q({color:N.spiralTip,emissive:N.spiralGlow,emissiveIntensity:.6,transparent:!0,opacity:.7}),b=new P(new Y(.025+y()*.015,5,4),E);b.position.copy(T),e.add(b),l.push(E);const R=new P(new Y(.07,4,3),new $({color:N.spiralGlow,transparent:!0,opacity:.04,blending:Jt,depthWrite:!1}));R.position.copy(T),e.add(R)}const u=new q({color:1714224,roughness:.85,emissive:660752,emissiveIntensity:.04});for(let c=0;c<3;c++){const p=c/3*6.28+y()*.5,f=new P(new gt(.006,.018,.15+y()*.1,3),u);f.position.set(Math.cos(p)*.06,.04,Math.sin(p)*.06),f.rotation.z=p<3.14?.8:-.8,f.rotation.y=p,e.add(f)}return e.position.set(i,0,t),ot.add(e),{group:e,tipMats:l,phase:y()*6.28,x:i,z:t}}function ib(i,t){const e=new Qt,n=1.5+y()*1,s=n*.7,o=.4+y()*.2,r=new q({color:N.corpseLeaf,roughness:.75,emissive:662026,emissiveIntensity:.05}),a=new P(new gt(.06,.1,n*.5,6),r);a.position.y=n*.25,e.add(a);const l=new q({color:N.corpseSpathe,emissive:2230800,emissiveIntensity:.08,transparent:!0,opacity:.85,roughness:.5,side:Ct}),u=new Gn(o,n*.5,8,1,!0),c=new P(u,l);c.position.y=n*.55,c.scale.set(1,1,1),e.add(c);const p=new q({color:N.corpseSpathe,emissive:N.corpseGlow,emissiveIntensity:.1,roughness:.4}),f=new P(new Pe(o*.95,.02,6,12),p);f.position.y=n*.8,f.rotation.x=Math.PI/2,e.add(f);const d=new q({color:N.corpseColumn,emissive:N.corpseGlow,emissiveIntensity:.5,transparent:!0,opacity:.8,roughness:.3}),g=new P(new gt(.03,.06,s,6),d);g.position.y=n*.4+s*.5,e.add(g);const x=new $({color:N.corpseGlow,transparent:!0,opacity:.04,blending:Jt,depthWrite:!1}),h=new P(new Y(o*1.2,6,4),x);h.position.y=n*.65,e.add(h);for(let S=0;S<5;S++){const w=y()*6.28,A=n*.45+y()*s*.6,C=new P(new Y(.01,3,3),new q({color:N.corpseGlow,emissive:N.corpseGlow,emissiveIntensity:.3}));C.position.set(Math.cos(w)*.05,A,Math.sin(w)*.05),e.add(C)}const m=new $({color:1118481,transparent:!0,opacity:.7}),M=[],v=3+Math.floor(y()*3),_=n*.7;for(let S=0;S<v;S++){const w=new P(new Y(.008,3,3),m);w.position.set(0,_,0),e.add(w),M.push(w)}const T=new q({color:N.corpseLeaf,emissive:662024,emissiveIntensity:.04,side:Ct}),E=2+Math.floor(y()*2);for(let S=0;S<E;S++){const w=S/E*6.28+y()*.5,A=new P(new he(.25+y()*.1,.35+y()*.1),T);A.position.set(Math.cos(w)*.18,n*.15,Math.sin(w)*.18),A.rotation.y=-w,A.rotation.x=-.6-y()*.3,e.add(A)}const b=new q({color:1714200,roughness:.9,emissive:330245,emissiveIntensity:.03}),R=new P(new Y(.15,6,4),b);return R.scale.set(1.5,.4,1.5),R.position.y=.03,e.add(R),e.position.set(i,0,t),ot.add(e),{group:e,columnMat:d,hazeMat:x,flies:M,spadixY:_,phase:y()*6.28,x:i,z:t}}function sb(i,t){const e=new Qt,n=.3+y()*.15,s=.3+y()*.2,o=new q({color:N.orbBushLeaf,roughness:.8,emissive:662026,emissiveIntensity:.06}),r=5+Math.floor(y()*4);for(let f=0;f<r;f++){const d=y()*6.28,g=y()*n*.6,x=.1+y()*.08,h=new P(new Y(x,5,4),o);h.scale.set(1.2,.6,1.2),h.position.set(Math.cos(d)*g,s*.4+y()*s*.3,Math.sin(d)*g),e.add(h)}const a=new q({color:N.orbBushStem,emissive:662026,emissiveIntensity:.04,side:Ct});for(let f=0;f<6;f++){const d=y()*6.28,g=n*.5+y()*n*.3,x=new P(new he(.06,.08),a);x.position.set(Math.cos(d)*g,s*.3+y()*.15,Math.sin(d)*g),x.rotation.set(y()*.5,-d,y()*.3),e.add(x)}const l=[],u=6+Math.floor(y()*5),c=new q({color:N.orbBushStem,roughness:.7,emissive:N.orbBushGlow,emissiveIntensity:.05});for(let f=0;f<u;f++){const d=y()*6.28,g=y()*n*.7,x=s+.15+y()*.3,h=.02+y()*.015,m=x-s*.3,M=new P(new gt(.003,.005,m,3),c);M.position.set(Math.cos(d)*g,s*.3+m/2,Math.sin(d)*g),M.rotation.z=(y()-.5)*.3,M.rotation.x=(y()-.5)*.3,e.add(M);const v=new q({color:N.orbBushOrb,emissive:N.orbBushGlow,emissiveIntensity:.5+y()*.3,transparent:!0,opacity:.7,roughness:.2}),_=new P(new Y(h,5,4),v);_.position.set(Math.cos(d)*g+(y()-.5)*.03,x,Math.sin(d)*g+(y()-.5)*.03),e.add(_),l.push(v);const T=new P(new Y(h*2.5,4,3),new $({color:N.orbBushGlow,transparent:!0,opacity:.03,blending:Jt,depthWrite:!1}));T.position.copy(_.position),e.add(T)}const p=new q({color:1712152,roughness:.9});for(let f=0;f<3;f++){const d=y()*6.28,g=n+y()*.1,x=new P(new Y(.015,3,3),p);x.position.set(Math.cos(d)*g,.01,Math.sin(d)*g),x.scale.set(1,.4,1),e.add(x)}return e.position.set(i,0,t),ot.add(e),{group:e,orbMats:l,phase:y()*6.28,x:i,z:t}}function ob(i,t){const e=new Qt,n=2+Math.floor(y()*3),s=[],o=new q({color:1714200,roughness:.9,emissive:330245,emissiveIntensity:.03}),r=new P(new Y(.1,5,4),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=new q({color:N.lanternStem,emissive:662024,emissiveIntensity:.04,side:Ct});for(let l=0;l<2;l++){const u=y()*6.28,c=new P(new he(.1,.18),a);c.position.set(Math.cos(u)*.08,.08,Math.sin(u)*.08),c.rotation.y=-u,c.rotation.x=-.6,e.add(c)}for(let l=0;l<n;l++){const u=l/n*6.28+y()*.5,c=.8+y()*.8,p=.3+y()*.4,f=[],d=10;for(let w=0;w<=d;w++){const A=w/d,C=p*Math.sin(A*Math.PI*.7),L=A<.7?A/.7*c:c-(A-.7)/.3*c*.25;f.push(new F(Math.cos(u)*C,L,Math.sin(u)*C))}const g=new wo(f),x=new q({color:N.lanternStem,roughness:.7,emissive:N.lanternHaze,emissiveIntensity:.06}),h=new P(new xn(g,12,.008+y()*.004,4,!1),x);e.add(h);const m=g.getPoint(1),M=.06+y()*.04,v=new q({color:N.lanternPod,emissive:N.lanternGlow,emissiveIntensity:.5+y()*.3,transparent:!0,opacity:.5,roughness:.2,metalness:.1}),_=new P(new Y(M,8,6),v);_.position.copy(m),_.position.y-=M*.3,e.add(_),s.push(v);const T=new q({color:16777164,emissive:N.lanternGlow,emissiveIntensity:1,transparent:!0,opacity:.5,roughness:0}),E=new P(new Y(M*.4,5,4),T);E.position.copy(_.position),e.add(E);const b=new P(new Y(M*2.5,5,4),new $({color:N.lanternHaze,transparent:!0,opacity:.04,blending:Jt,depthWrite:!1}));b.position.copy(_.position),e.add(b);const R=new q({color:N.lanternStem,roughness:.6}),S=new P(new Gn(M*.5,M*.4,5),R);S.position.copy(m),S.rotation.x=Math.PI,e.add(S)}return e.position.set(i,0,t),ot.add(e),{group:e,podMats:s,phase:y()*6.28,x:i,z:t}}function rb(i,t){const e=new Qt,n=1+Math.floor(y()*2),s=[];for(let a=0;a<n;a++){const l=(a-(n-1)*.5)*.3,u=1+y()*.8,c=new q({color:N.veilSupport,roughness:.85,emissive:657928,emissiveIntensity:.03}),p=new P(new gt(.015,.03,u,4),c);p.position.set(l,u/2,0),e.add(p);const f=.2+y()*.15,d=new P(new gt(.008,.012,f,3),c);d.position.set(l,u*.9,0),d.rotation.z=Math.PI/2,e.add(d);const g=3+Math.floor(y()*3);for(let h=0;h<g;h++){const m=.08+y()*.06,M=u*(.3+y()*.4),v=(h-(g-1)*.5)*(f/g),_=new q({color:N.veilMoss,emissive:N.veilGlow,emissiveIntensity:.12+y()*.08,transparent:!0,opacity:.25+y()*.15,roughness:.6,side:Ct}),T=new P(new he(m,M),_);T.position.set(l+v,u*.9-M*.5,(y()-.5)*.05),T.rotation.y=(y()-.5)*.4,e.add(T),s.push(T);const E=2+Math.floor(y()*2),b=new $({color:N.veilEdge,transparent:!0,opacity:.4});for(let R=0;R<E;R++){const S=new P(new Y(.006,3,3),b);S.position.set(l+v+(y()-.5)*m*.8,u*.9-M+y()*M*.15,(y()-.5)*.04),e.add(S)}}const x=new q({color:N.veilMoss,emissive:N.veilGlow,emissiveIntensity:.08,transparent:!0,opacity:.3});for(let h=0;h<3;h++){const m=u*(.2+y()*.5),M=y()*6.28,v=new P(new Y(.015+y()*.01,4,3),x);v.scale.set(1.5,.5,1),v.position.set(l+Math.cos(M)*.025,m,Math.sin(M)*.025),e.add(v)}}const o=new q({color:2767400,roughness:.9,emissive:N.veilGlow,emissiveIntensity:.03}),r=new P(new Y(.12,5,4),o);return r.scale.set(1.5,.3,1.5),r.position.y=.02,e.add(r),e.position.set(i,0,t),ot.add(e),{group:e,veilMats:s,phase:y()*6.28,x:i,z:t}}function ab(i,t,e){const n=new Qt,s=new q({color:N.jellyBell,emissive:N.jellyGlow,emissiveIntensity:.8,transparent:!0,opacity:.5,roughness:.2,metalness:.1,side:Ct}),o=new P(new Y(.5,8,6,0,6.28,0,Math.PI/2),s);o.scale.set(1,.6,1),o.position.y=0,n.add(o);const r=new q({color:N.jellyBell,emissive:N.jellyGlow,emissiveIntensity:1,transparent:!0,opacity:.6}),a=new P(new Pe(.48,.025,5,12),r);a.rotation.x=Math.PI/2,a.position.y=-.02,n.add(a);const l=new P(new Y(.2,6,4),new $({color:N.jellyGlow,transparent:!0,opacity:.7}));l.position.y=-.05,n.add(l);const u=new $({color:12312063,transparent:!0,opacity:.3});for(let M=-1;M<=1;M+=2){const v=new P(new Y(.06,4,3),u);v.scale.set(.6,1.5,.6),v.position.set(M*.08,-.03,0),n.add(v)}const c=new $({color:15663103,transparent:!0,opacity:.7});for(let M=0;M<5;M++){const v=y()*6.28,_=y()*.8,T=new P(new Y(.02,3,3),c);T.position.set(Math.cos(v)*_*.35,.1-_*.15,Math.sin(v)*_*.35),n.add(T)}const p=new q({color:N.jellyTent,emissive:N.jellyGlow,emissiveIntensity:.4,transparent:!0,opacity:.4}),f=new $({color:14544639,transparent:!0,opacity:.9});for(let M=0;M<6;M++){const v=M/6*6.28,_=.4+y()*.6,T=new P(new gt(.015,.008,_,3),p);T.position.set(Math.cos(v)*.25,-_/2-.05,Math.sin(v)*.25),n.add(T);const E=new P(new Y(.018,4,4),f);E.position.set(Math.cos(v)*.25,-_-.06,Math.sin(v)*.25),n.add(E)}const d=new $({color:N.jellyGlow,transparent:!0,opacity:.12});for(let M=0;M<8;M++){const v=M/8*6.28,_=new P(new gt(.002,.002,.4,3),d);_.position.set(Math.cos(v)*.2,.05,Math.sin(v)*.2),_.rotation.z=Math.PI/2-.3,_.rotation.y=-v,n.add(_)}const g=new q({color:N.jellyBell,emissive:N.jellyGlow,emissiveIntensity:.6,transparent:!0,opacity:.4});for(let M=0;M<10;M++){const v=M/10*6.28,_=new P(new Y(.02,3,3),g);_.scale.set(1,.5,.8),_.position.set(Math.cos(v)*.46,-.04,Math.sin(v)*.46),n.add(_)}const x=new q({color:N.jellyTent,emissive:N.jellyGlow,emissiveIntensity:.5,transparent:!0,opacity:.35}),h=new P(new gt(.02,.01,.35,4),x);h.position.y=-.2,n.add(h);const m=new $({color:14548991,transparent:!0,opacity:.4});for(let M=0;M<3;M++){const v=M/3*6.28,_=new P(new Y(.008,3,3),m);_.position.set(Math.cos(v)*.25,-.55-y()*.3,Math.sin(v)*.25),n.add(_)}return n.position.set(i,t,e),ot.add(n),{group:n,bellMat:s,tipMat:f,phase:y()*6.28,driftAng:y()*6.28,homeX:i,homeZ:e,floatY:t,wobble:.5+y()*.5,_init:!0,_state:"drift",_stT:20+Math.random()*30,_migrateAng:0,_pulseSync:0}}function cb(i,t){const e=new Qt,n=new q({color:N.puffBody,emissive:N.puffGlow,emissiveIntensity:.3,roughness:.8}),s=new P(new Y(.3,8,6),n);s.position.y=.35,e.add(s);const o=new q({color:16773344,emissive:N.puffGlow,emissiveIntensity:.15,roughness:.9}),r=new P(new Y(.18,6,4),o);r.scale.set(.7,.9,.3),r.position.set(0,.32,.2),e.add(r);const a=new P(new Y(.22,7,5),n);a.position.y=.65,e.add(a);const l=[];for(let A=-1;A<=1;A+=2){const C=new P(new Gn(.06,.15,4),n);C.position.set(A*.13,.85,0),C.rotation.z=A*.3,e.add(C),l.push({mesh:C,side:A,baseRotZ:A*.3});const L=new P(new Gn(.03,.08,4),new q({color:N.puffCheek,emissive:N.puffCheek,emissiveIntensity:.2}));L.position.set(A*.13,.84,.01),L.rotation.z=A*.3,e.add(L),l.push({mesh:L,side:A,baseRotZ:A*.3})}const u=new $({color:N.puffEye}),c=[];for(let A=-1;A<=1;A+=2){const C=new P(new Y(.035,4,4),u);C.position.set(A*.09,.68,.18),e.add(C),c.push(C);const L=new $({color:16777215}),U=new P(new Y(.012,3,3),L);U.position.set(A*.09+A*.015,.695,.2),e.add(U),c.push(U)}const p=new $({color:4469555}),f=new P(new Y(.015,3,3),p);f.position.set(0,.63,.22),e.add(f);const d=new q({color:N.puffCheek,emissive:N.puffCheek,emissiveIntensity:.3});for(let A=-1;A<=1;A+=2){const C=new P(new Y(.04,4,3),d);C.position.set(A*.15,.61,.15),e.add(C)}const g=new $({color:15654348,transparent:!0,opacity:.5});for(let A=-1;A<=1;A+=2)for(let C=0;C<2;C++){const L=new P(new gt(.002,.002,.06,3),g);L.position.set(A*.12,.62-C*.03,.2),L.rotation.z=A*.7+C*A*.2,L.rotation.x=-.1,e.add(L)}for(let A=-1;A<=1;A+=2){const C=new P(new Y(.07,4,3),n);C.position.set(A*.12,.07,.05),C.scale.set(1,.5,1.3),e.add(C);const L=new q({color:16755370,emissive:16746632,emissiveIntensity:.1});for(let U=0;U<3;U++){const H=U/3*6.28,G=new P(new Y(.012,3,3),L);G.position.set(A*.12+Math.cos(H)*.03,.03,.05+Math.sin(H)*.03),e.add(G)}}const x=new q({color:16777215,emissive:N.puffGlow,emissiveIntensity:.4,roughness:.9}),h=new P(new Y(.06,5,4),x);h.position.set(0,.38,-.28),e.add(h);const m=new q({color:N.puffBody,emissive:N.puffGlow,emissiveIntensity:.2,roughness:1});for(let A=0;A<6;A++){const C=y()*6.28,L=y()*1.2,U=new P(new Y(.01,3,3),m);U.position.set(Math.cos(C)*.28,.25+L*.2,Math.sin(C)*.28),e.add(U)}const M=new $({color:N.puffBody});for(let A=-1;A<=1;A+=2){const C=new P(new gt(.003,.003,.04,3),M);C.position.set(A*.09,.72,.17),C.rotation.z=A*.3,e.add(C)}const v=new $({color:5583684,transparent:!0,opacity:.5}),_=new P(new gt(.002,.002,.03,3),v);_.position.set(0,.59,.22),_.rotation.z=Math.PI/2,e.add(_);const T=new $({color:16777215,transparent:!0,opacity:.6}),E=[];for(let A=0;A<3;A++){const C=new P(new Y(.01,3,3),T.clone());C.position.set(0,.5,0),e.add(C),E.push({mesh:C,mat:C.material,phase:y()*6.28,orbitR:.28+y()*.1})}const b=new $({color:N.puffGlow,transparent:!0,opacity:.15,side:Ct});for(let A=0;A<4;A++){const C=y()*6.28,L=(y()-.5)*.4,U=new P(new He(.02+y()*.012,5),b);U.position.set(Math.cos(C)*.27,.35+L*.15,Math.sin(C)*.27),U.lookAt(0,.35,0),e.add(U)}let R=null;if(y()<.4){R=new q({color:N.flower,emissive:N.flowerGlow,emissiveIntensity:.3});for(let C=0;C<3;C++){const L=C/3*6.28,U=new P(new Gn(.015,.03,3),R);U.position.set(Math.cos(L)*.035,.88,Math.sin(L)*.035),U.rotation.z=-Math.cos(L)*.5,U.rotation.x=Math.sin(L)*.5,e.add(U)}const A=new P(new Y(.01,3,3),new q({color:16772676,emissive:16768290,emissiveIntensity:.4}));A.position.set(0,.89,0),e.add(A)}const S=new $({color:N.puffGlow,transparent:!0,opacity:0,depthWrite:!1,side:Ct}),w=new P(new He(.5,8),S);return w.rotation.x=-Math.PI/2,w.position.y=.02,e.add(w),e.position.set(i,0,t),ot.add(e),{group:e,body:s,head:a,ears:l,eyes:c,tail:h,sparkles:E,crownMat:R,bodyMat:n,glowMat:S,phase:y()*6.28,wanderAng:y()*6.28,speed:.6+y()*.8,hopTimer:0,hopPhase:y()*6.28,homeX:i,homeZ:t,state:"idle",idleTimer:y()*3,_init:!0,_followT:0,_scaredT:0,_huddleTarget:-1,_baseY:0,_lastTX:i,_lastTZ:t,_blinkTimer:2+Math.random()*4,_blinkState:0}}function lb(i,t){const e=new Qt,n=new q({color:N.deerBody,emissive:N.deerGlow,emissiveIntensity:.7,transparent:!0,opacity:.7,roughness:.3}),s=new P(new Y(.4,7,5),n);s.scale.set(1,.8,1.5),s.position.y=.9,e.add(s);const o=new q({color:13431039,emissive:N.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.5}),r=new P(new Y(.15,5,4),o);r.scale.set(.8,.6,.5),r.position.set(0,.78,.25),e.add(r);const a=new Qt;a.position.set(0,1.15,.3);const l=new P(new gt(.08,.12,.4,5),n);l.position.set(0,.1,.08),l.rotation.x=-.4,a.add(l);const u=new P(new Y(.14,6,5),n);u.position.set(0,.22,.2),a.add(u);const c=new P(new Y(.07,4,3),n);c.scale.set(1,.7,1.4),c.position.set(0,.17,.35),a.add(c);const p=new $({color:2245717}),f=new P(new Y(.02,3,3),p);f.position.set(0,.17,.43),a.add(f);const d=new $({color:N.deerEye});for(let O=-1;O<=1;O+=2){const k=new P(new Y(.025,4,3),d);k.position.set(O*.09,.25,.28),a.add(k);const nt=new P(new Y(.008,3,3),new $({color:16777215}));nt.position.set(O*.085,.26,.29),a.add(nt);const ct=new $({color:N.deerBody,transparent:!0,opacity:.5}),ft=new P(new gt(.002,.002,.03,3),ct);ft.position.set(O*.1,.27,.28),ft.rotation.z=O*.6,a.add(ft)}for(let O=-1;O<=1;O+=2){const k=new P(new Gn(.04,.14,4),n);k.position.set(O*.1,.37,.15),k.rotation.z=O*.4,a.add(k)}const g=new q({color:N.deerAntler,emissive:N.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.8});for(let O=-1;O<=1;O+=2){const k=new P(new gt(.015,.02,.25,3),g);k.position.set(O*.08,.42,.12),k.rotation.z=O*.5,a.add(k);const nt=new P(new gt(.01,.015,.15,3),g);nt.position.set(O*.15,.55,.1),nt.rotation.z=O*.8,a.add(nt);const ct=new P(new gt(.008,.012,.1,3),g);ct.position.set(O*.11,.5,.16),ct.rotation.z=O*.3,ct.rotation.x=-.5,a.add(ct);const ft=new P(new Y(.012,3,3),new $({color:N.deerGlow,transparent:!0,opacity:.8}));ft.position.set(O*.18,.61,.09),a.add(ft)}const x=new q({color:N.deerBody,emissive:N.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),h=new P(new gt(.01,.02,.1,3),x);h.position.set(0,.11,.28),h.rotation.x=.3,a.add(h);const m=new $({color:1122850});for(let O=-1;O<=1;O+=2){const k=new P(new Y(.006,3,3),m);k.position.set(O*.02,.16,.42),a.add(k)}e.add(a);const M=[{x:-.15,z:.3,label:"FL"},{x:.15,z:.3,label:"FR"},{x:-.15,z:-.3,label:"BL"},{x:.15,z:-.3,label:"BR"}],v=new q({color:6715272,emissive:N.deerGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),_=[];for(let O=0;O<4;O++){const k=M[O],nt=new Qt;nt.position.set(k.x,.65,k.z);const ct=new P(new gt(.025,.035,.35,4),n);ct.position.y=-.175,nt.add(ct);const ft=new Qt;ft.position.set(0,-.35,0);const Pt=new P(new gt(.02,.03,.3,4),n);Pt.position.y=-.15,ft.add(Pt);const Wt=new P(new gt(.04,.032,.04,4),v);Wt.position.y=-.3,ft.add(Wt);const et=new q({color:14544639,emissive:N.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),ut=new P(new Y(.025,3,3),et);ut.scale.set(1.3,.5,1.3),ut.position.y=-.25,ft.add(ut),nt.add(ft),e.add(nt),_.push({upper:nt,lower:ft,isFront:O<2,side:k.x<0?-1:1})}const T=new Qt;T.position.set(0,1.1,-.55);const E=new P(new Gn(.05,.15,4),new q({color:16777215,emissive:N.deerGlow,emissiveIntensity:1,transparent:!0,opacity:.8}));T.add(E),e.add(T);const b=new $({color:13434862,transparent:!0,opacity:.3});for(let O=0;O<4;O++){const k=new P(new Y(.02,3,3),b);k.position.set((y()-.5)*.25,.8+y()*.3,(y()-.5)*.4),e.add(k)}const R=new $({color:N.deerBody,transparent:!0,opacity:.15});for(let O=0;O<3;O++){const k=new P(new gt(.002,.002,.2,3),R);k.position.set(.3,.85-O*.06,0),k.rotation.z=Math.PI/2+.3,e.add(k)}const S=new q({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.4,roughness:0,metalness:.5});for(let O=0;O<3;O++){const k=new P(new Y(.008,3,3),S);k.position.set((y()-.5)*.3,.9+y()*.3,(y()-.5)*.35),e.add(k)}const w=new q({color:14544639,emissive:N.deerGlow,emissiveIntensity:.4,transparent:!0,opacity:.3,side:Ct}),A=[];for(let O=0;O<5;O++){const k=new P(new he(.05,.08+y()*.04),w);k.position.set(0,.1+O*.055,.04-O*.015),k.rotation.x=-.2+y()*.15,k.rotation.z=(y()-.5)*.25,a.add(k),A.push(k)}const C=new $({color:N.deerGlow,transparent:!0,opacity:.5}),L=[];for(let O=-1;O<=1;O+=2){const k=new P(new Y(.012,3,3),C.clone());k.position.set(O*.1,.47,.11),a.add(k),L.push(k);const nt=new P(new Y(.01,3,3),C.clone());nt.position.set(O*.14,.53,.12),a.add(nt),L.push(nt)}const U=new $({color:N.deerGlow,transparent:!0,opacity:.08,blending:Jt,depthWrite:!1}),H=[];for(let O=0;O<3;O++){const k=new P(new Y(.06-O*.012,4,3),U.clone());k.position.set(0,.8,-.6-O*.35),ot.add(k),H.push({mesh:k,mat:k.material,prevX:i,prevY:0,prevZ:t})}const G=new $({color:N.deerGlow,transparent:!0,opacity:.2,side:Ct});for(let O=0;O<3;O++){y()*6.28;const k=new P(new He(.03+y()*.015,5),G);k.position.set((O===1?-1:1)*.32,.8+y()*.25,(y()-.5)*.3),k.rotation.y=(O===1?-1:1)*Math.PI/2,e.add(k)}return e.position.set(i,0,t),ot.add(e),{group:e,mat:n,manePlanes:A,branchOrbs:L,trailSpheres:H,phase:y()*6.28,wanderAng:y()*6.28,speed:.6+y()*.4,walkTimer:0,legCycle:0,homeX:i,homeZ:t,state:"walk",pauseTimer:0,neckPivot:a,legPivots:_,tailPivot:T,fleeTimer:0,headLook:0,headBob:0,_init:!0,_stT:0,_drinkTgt:null,_zigTimer:0,_zigDir:1,_baseY:0,_lastTX:i,_lastTZ:t}}function ub(i,t,e){const n=new Qt,s=new q({color:N.mothBody,emissive:N.mothGlow,emissiveIntensity:.3,roughness:.7}),o=new P(new gt(.04,.05,.3,5),s);o.rotation.x=Math.PI/2,n.add(o);const r=new q({color:N.mothBody,emissive:N.mothGlow,emissiveIntensity:.5,roughness:.6});for(let h=0;h<3;h++){const m=new P(new Pe(.045,.006,4,8),r);m.position.z=-.05+h*.06,m.rotation.x=0,n.add(m)}const a=new P(new Y(.05,5,4),s);a.position.z=.18,n.add(a);const l=new q({color:1122867,roughness:.2,metalness:.4});for(let h=-1;h<=1;h+=2){const m=new P(new Y(.018,4,3),l);m.position.set(h*.03,.01,.21),n.add(m)}for(let h=-1;h<=1;h+=2){const m=new P(new gt(.005,.005,.15,3),s);m.position.set(h*.03,.03,.22),m.rotation.x=-.6,m.rotation.z=h*.4,n.add(m);const M=new $({color:N.mothGlow,transparent:!0,opacity:.7}),v=new P(new Y(.015,3,3),M);v.scale.set(2,.5,1),v.position.set(h*.05,.12,.28),n.add(v)}const u=new q({color:N.mothWing,emissive:N.mothGlow,emissiveIntensity:.8,transparent:!0,opacity:.6,side:Ct,roughness:.4});n._wingPivots=[];for(let h=-1;h<=1;h+=2){const m=new Qt;m.position.set(h*.04,0,.02);const M=new P(new Y(.2,6,4),u);M.scale.set(1.8,.08,1.2),M.position.set(h*.18,0,.02),m.add(M);const v=new P(new Y(.12,5,3),u);v.scale.set(1.5,.06,1),v.position.set(h*.12,0,-.1),m.add(v);const _=new q({color:N.mothWing,emissive:N.mothGlow,emissiveIntensity:.6,transparent:!0,opacity:.45,side:Ct}),T=new P(new he(.03,.12),_);T.position.set(h*.1,0,-.18),T.rotation.y=h*.2,m.add(T);const E=new $({color:N.mothSpot,transparent:!0,opacity:.9}),b=new P(new Y(.03,4,3),E);b.position.set(h*.2,.02,.03),m.add(b);const R=new P(new Y(.018,3,3),E);R.position.set(h*.1,.02,-.08),m.add(R);const S=new $({color:N.mothGlow,transparent:!0,opacity:.25});for(let w=0;w<2;w++){const A=new P(new gt(.002,.002,.2,3),S);A.position.set(h*.15,.01,-.02+w*.06),A.rotation.z=Math.PI/2+h*(.15+w*.15),m.add(A)}n.add(m),n._wingPivots.push({pivot:m,side:h})}const c=new $({color:N.mothGlow,transparent:!0,opacity:.25});for(let h=0;h<3;h++){const m=new P(new Y(.008,3,3),c);m.position.set((y()-.5)*.04,0,-.15-h*.05),n.add(m)}const p=new $({color:4473907,transparent:!0,opacity:.5}),f=new P(new Pe(.015,.003,4,8,Math.PI*1.5),p);f.position.set(0,-.02,.2),f.rotation.x=.4,n.add(f);const d=new q({color:N.mothBody,emissive:N.mothGlow,emissiveIntensity:.4,roughness:1});for(let h=0;h<5;h++){const m=y()*6.28,M=new P(new Y(.008,3,3),d);M.position.set(Math.cos(m)*.04,Math.sin(m)*.04,y()*.15-.05),n.add(M)}const g=new $({color:N.mothBody,transparent:!0,opacity:.4});for(let h=-1;h<=1;h+=2)for(let m=0;m<3;m++){const M=new P(new gt(.002,.002,.06,3),g);M.position.set(h*.04,-.03,-.05+m*.06),M.rotation.z=h*.8,M.rotation.x=-.3,n.add(M)}const x=new $({color:N.mothGlow,transparent:!0,opacity:.35});for(let h=-1;h<=1;h+=2)for(let m=0;m<5;m++){const M=m/5*Math.PI-Math.PI/2,v=new P(new Y(.006,3,3),x);v.position.set(h*(.3+Math.cos(M)*.05),Math.sin(M)*.02,.02+m*.04),n.add(v)}return n.position.set(i,t,e),ot.add(n),{group:n,wingMat:u,phase:y()*6.28,orbitAng:y()*6.28,orbitR:2+y()*4,centerX:i,centerZ:e,floatY:t,flapSpeed:6+y()*4,_init:!0,_state:"patrol",_stT:0,_attractTarget:null,_restTree:null}}function hb(i,t,e){const n=new Qt,s=new $({color:N.wispCore}),o=new P(new Y(.08,6,4),s);n.add(o);const r=new $({color:16777215,transparent:!0,opacity:.7,wireframe:!0}),a=new P(new Or(.06,0),r);n.add(a);const l=new $({color:N.wispGlow,transparent:!0,opacity:.5}),u=new P(new Y(.18,6,4),l);n.add(u);const c=new $({color:N.wispGlow,transparent:!0,opacity:.25}),p=new P(new Pe(.22,.008,4,12),c);p.rotation.x=Math.PI/2,n.add(p);const f=new $({color:N.wispTrail,transparent:!0,opacity:.15}),d=new P(new Y(.35,5,4),f);n.add(d);const g=new $({color:16777215,transparent:!0,opacity:.8}),x=new P(new Y(.02,3,3),g);x.position.set(.15,0,0),n.add(x);const h=[];for(let b=0;b<3;b++){const R=new $({color:N.wispCore,transparent:!0,opacity:.35}),S=new P(new Y(.01,3,3),R);S.position.set((y()-.5)*.1,-.1-b*.08,(y()-.5)*.1),n.add(S),h.push(S)}const m=new $({color:N.wispGlow,transparent:!0,opacity:.18}),M=[];for(let b=0;b<3;b++){const R=b/3*6.28+y()*.5,S=.15+y()*.1,w=new P(new gt(.003,.001,S,3),m);w.position.set(Math.cos(R)*.1,y()*.08,Math.sin(R)*.1),w.rotation.z=Math.PI/3*(R<3.14?1:-1),w.rotation.y=R,n.add(w),M.push({mesh:w,baseAng:R})}const v=new $({color:N.wispGlow,transparent:!0,opacity:.12}),_=new P(new Pe(.26,.005,4,10),v);_.rotation.x=1.2,_.rotation.z=.8,n.add(_);const T=new $({color:16777215,transparent:!0,opacity:.5});for(let b=0;b<4;b++){const R=y()*6.28,S=y()*.8,w=new P(new Y(.006,3,3),T);w.position.set(Math.cos(R)*.06,Math.sin(S)*.06,Math.sin(R)*.06),n.add(w)}const E=new $({color:N.wispCore,transparent:!0,opacity:.2});for(let b=0;b<4;b++){const R=new P(new Y(.004,3,3),E);R.position.set(.03+y()*.04,-.05-b*.04,y()*.04),n.add(R)}return n.scale.setScalar(.5),n.position.set(i,t,e),ot.add(n),{group:n,glowMat:l,hazeMat:f,embers:h,tendrils:M,plasmaMat:m,facet:a,halo:p,halo2:_,phase:y()*6.28,targetX:i,targetY:t,targetZ:e,velX:0,velY:0,velZ:0,scatter:0}}function fb(i,t){const e=new Qt,n=xf,s=8+Math.floor(y()*5),o=new q({color:N.fairyMush,emissive:N.fairyGlow,emissiveIntensity:.2,roughness:.5}),r=new q({color:N.mushStem,roughness:.7,emissive:N.fairyGlow,emissiveIntensity:.05});for(let T=0;T<s;T++){const E=T/s*6.28+y()*.15,b=n+y()*.3-.15,R=.15+y()*.2,S=new P(jn.mushStem,r);S.scale.setScalar(R),S.position.set(Math.cos(E)*b,R*.3,Math.sin(E)*b),e.add(S);const w=new P(jn.mushCap,o);w.scale.set(R,R*.4,R),w.position.set(Math.cos(E)*b,R*.55,Math.sin(E)*b),e.add(w);const A=new $({color:16777215,transparent:!0,opacity:.7}),C=new P(new Y(R*.08,3,3),A);C.position.set(Math.cos(E)*b,R*.6,Math.sin(E)*b),e.add(C)}const a=new q({color:8934792,emissive:N.fairyGlow,emissiveIntensity:.1,roughness:.6});for(let T=0;T<5;T++){const E=y()*6.28,b=n+y()*.6-.3,R=.06+y()*.06,S=new P(jn.mushCap,a);S.scale.set(R,R*.5,R),S.position.set(Math.cos(E)*b,R*.35,Math.sin(E)*b),e.add(S)}const l=new q({color:1725733,emissive:664080,emissiveIntensity:.05,roughness:.9});for(let T=0;T<4;T++){const E=y()*6.28,b=y()*n*.8,R=new P(new Y(.08+y()*.08,4,3),l);R.scale.set(1.5,.2,1.5),R.position.set(Math.cos(E)*b,.01,Math.sin(E)*b),e.add(R)}const u=new q({color:4478310,emissive:N.fairyGlow,emissiveIntensity:.05,roughness:.85}),c=new P(new Y(.12,5,3),u);c.scale.set(1.2,.3,1),c.position.y=.03,e.add(c);const p=new $({color:N.fairyGlow,transparent:!0,opacity:.2}),f=[];for(let T=0;T<8;T++){const E=new P(new Y(.012,3,3),p),b=(y()-.5)*n*.8,R=(y()-.5)*n*.8;E.position.set(b,.05+y()*.3,R),e.add(E),f.push({mesh:E,baseX:b,baseZ:R,drift:y()*6.28,speed:.2+y()*.3})}const d=new $({color:N.fairyRing,transparent:!0,opacity:0,side:Ct}),g=new P(new Va(.3,n-.3,16),d);g.rotation.x=-Math.PI/2,g.position.y=.02,e.add(g);const x=new $({color:N.fairyGlow,transparent:!0,opacity:.08});for(let T=0;T<6;T++){const E=y()*6.28,b=E+.5+y()*1.5,R=n*.6+y()*n*.4,S=new P(new gt(.002,.002,R,3),x);S.position.set(Math.cos((E+b)/2)*n*.4,.005,Math.sin((E+b)/2)*n*.4),S.rotation.x=Math.PI/2,S.rotation.z=E,e.add(S)}const h=new q({color:4864560,roughness:.9,transparent:!0,opacity:.5});for(let T=0;T<3;T++){const E=y()*6.28,b=y()*n*.7,R=new P(new Y(.03,4,3),h);R.scale.set(1.3,.3,1.3),R.position.set(Math.cos(E)*b,.008,Math.sin(E)*b),e.add(R)}const m=new q({color:7833702,roughness:.9,transparent:!0,opacity:.5});for(let T=0;T<2;T++){const E=new P(new He(.02+y()*.02,4),m);E.position.set((y()-.5)*.08,.06,(y()-.5)*.06),E.rotation.x=-Math.PI/2+y()*.4,e.add(E)}const M=[];for(let T=0;T<5;T++){const E=y()*6.28,b=y()*n*.9,R=new $({color:8978346,transparent:!0,opacity:.25}),S=new P(new Y(.005,3,3),R);S.position.set(Math.cos(E)*b,.01,Math.sin(E)*b),e.add(S),M.push(S)}const v=new $({color:657926,transparent:!0,opacity:.15,side:Ct}),_=new P(new Va(n*.5,n*.85,12),v);return _.rotation.x=-Math.PI/2,_.position.y=.008,e.add(_),e.position.set(i,0,t),ot.add(e),{group:e,mushMat:o,discMat:d,sporeMat:p,spores:f,glowWorms:M,x:i,z:t,ringR:n,phase:y()*6.28,glowIntensity:0,active:!1}}function db(i,t,e){const n=new Qt,s=new q({color:N.bubbleIris,emissive:N.bubbleIris,emissiveIntensity:.15,transparent:!0,opacity:.25,roughness:0,metalness:.6}),o=new P(jn.bubble,s);n.add(o);const r=new $({color:15650047,transparent:!0,opacity:.1}),a=new P(new Pe(.13,.003,4,10),r);a.rotation.x=.5,a.rotation.y=y()*3,n.add(a);const l=new P(new Pe(.11,.003,4,10),r);l.rotation.x=-.8,l.rotation.z=1.2,n.add(l);const u=new $({color:N.bubbleShine,transparent:!0,opacity:.5}),c=new P(new Y(.04,4,3),u);c.position.set(.05,.07,.08),n.add(c);const p=new $({color:15658751,transparent:!0,opacity:.2}),f=new P(new Y(.025,3,3),p);f.position.set(-.06,-.04,-.06),n.add(f);const d=new $({color:16755438,transparent:!0,opacity:.12}),g=new P(new Y(.06,4,3),d);g.position.set(.02,-.02,.01),n.add(g);const x=new $({color:16772863,transparent:!0,opacity:.08}),h=new P(new Y(.12,5,4),x);n.add(h);const m=[16764125,13426175,14548940];for(let R=0;R<3;R++){const S=new $({color:m[R],transparent:!0,opacity:.06}),w=new P(new Pe(.14-R*.02,.002,4,8),S);w.position.y=-.04+R*.04,w.rotation.x=Math.PI/2,n.add(w)}const M=new $({color:16777215,transparent:!0,opacity:.6});for(let R=0;R<3;R++){const S=y()*6.28,w=y()*Math.PI-Math.PI/2,A=new P(new Y(.003,3,3),M);A.position.set(Math.cos(S)*Math.cos(w)*.14,Math.sin(w)*.14,Math.sin(S)*Math.cos(w)*.14),n.add(A)}const v=new $({color:11189196,transparent:!0,opacity:.1}),_=new P(new Y(.015,3,3),v);_.position.set((y()-.5)*.04,(y()-.5)*.04,(y()-.5)*.04),n.add(_);const T=new $({color:N.bubbleIris,transparent:!0,opacity:.15}),E=new P(new Y(.04,4,3),T);E.scale.set(1.3,.6,1.3),E.position.y=-.12,n.add(E);const b=.6+y()*.8;return n.scale.setScalar(b),n.position.set(i,t,e),ot.add(n),{group:n,shellMat:s,phase:y()*6.28,driftAng:y()*6.28,driftSpeed:.3+y()*.5,floatY:t,homeX:i,homeZ:e,bobAmp:.3+y()*.4,popped:!1,popTimer:0,sc:b}}function pb(i,t){const e=new Qt,n=1.5+y()*1,s=new q({color:329746,roughness:.9}),o=new P(new He(n*.85,10),s);o.rotation.x=-Math.PI/2,o.position.y=.005,e.add(o);const r=new q({color:N.pondWater,emissive:N.pondGlow,emissiveIntensity:.2,transparent:!0,opacity:.55,roughness:.05,metalness:.4}),a=new P(new He(n,12),r);a.rotation.x=-Math.PI/2,a.position.y=.03,e.add(a);const l=new q({color:3816002,roughness:.85}),u=5+Math.floor(y()*4);for(let L=0;L<u;L++){const U=L/u*6.28+y()*.3,H=n+y()*.2-.1,G=.06+y()*.08,O=new P(new Y(G,4,3),l);O.scale.set(1+y()*.5,.4+y()*.3,1+y()*.5),O.position.set(Math.cos(U)*H,G*.2,Math.sin(U)*H),O.rotation.set(y(),y(),y()),e.add(O)}const c=new q({color:1725728,roughness:.7,side:Ct});for(let L=0;L<3;L++){const U=y()*6.28,H=n*.85+y()*.2;for(let G=0;G<3;G++){const O=new P(new he(.015,.15+y()*.1),c);O.position.set(Math.cos(U)*H+(y()-.5)*.05,.08,Math.sin(U)*H+(y()-.5)*.05),O.rotation.y=y()*3,O.rotation.x=-.2,e.add(O)}}const p=new $({color:11197934,transparent:!0,opacity:.08}),f=[];for(let L=0;L<3;L++){const U=new P(new Pe(1,.004,4,20),p.clone());U.rotation.x=Math.PI/2,U.position.y=.036,e.add(U),f.push({mesh:U,phase:L/3})}const d=new q({color:N.lilyPad,roughness:.6,side:Ct}),g=4+Math.floor(y()*2),x=[];for(let L=0;L<g;L++){const U=y()*6.28,H=y()*n*.6,G=.15+y()*.15,O=new P(new He(G,8),d);O.rotation.x=-Math.PI/2,O.position.set(Math.cos(U)*H,.05,Math.sin(U)*H),e.add(O);const k=new $({color:1724448,transparent:!0,opacity:.3}),nt=new P(new gt(.002,.002,G*1.5,3),k);nt.position.set(Math.cos(U)*H,.052,Math.sin(U)*H),nt.rotation.x=Math.PI/2,nt.rotation.z=y()*3,e.add(nt),x.push({mesh:O,phase:y()*6.28})}const h=new q({color:N.lilyFlower,emissive:N.lilyGlow,emissiveIntensity:.4,transparent:!0,opacity:.85,side:Ct}),m=.08;for(let L=0;L<6;L++){const U=L/6*6.28,H=new P(new he(.06,.05),h);H.position.set(x[0].mesh.position.x+Math.cos(U)*.05,m,x[0].mesh.position.z+Math.sin(U)*.05),H.rotation.x=-1,H.rotation.y=-U,e.add(H)}const M=new q({color:16777130,emissive:N.lilyGlow,emissiveIntensity:.8}),v=new P(new Y(.025,4,3),M);if(v.position.set(x[0].mesh.position.x,m+.02,x[0].mesh.position.z),e.add(v),x.length>2){const L=new q({color:N.lilyFlower,emissive:N.lilyGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),U=new P(new Y(.03,5,4),L);U.scale.set(.8,1.2,.8),U.position.set(x[2].mesh.position.x,.09,x[2].mesh.position.z),e.add(U)}const _=new q({color:3815477,roughness:.8,transparent:!0,opacity:.5});for(let L=0;L<5;L++){const U=y()*6.28,H=y()*n*.7,G=new P(new Y(.02+y()*.025,4,3),_);G.scale.set(1+y()*.5,.4,1+y()*.5),G.position.set(Math.cos(U)*H,.015,Math.sin(U)*H),e.add(G)}const T=new $({color:2761752,transparent:!0,opacity:.12,side:Ct});for(let L=0;L<3;L++){const U=y()*6.28,H=y()*n*.5,G=new P(new He(.08+y()*.06,5),T);G.rotation.x=-Math.PI/2,G.position.set(Math.cos(U)*H,.012,Math.sin(U)*H),e.add(G)}const E=new q({color:1122837,roughness:.7,transparent:!0,opacity:.4}),b=[];for(let L=0;L<2;L++){const U=y()*6.28,H=y()*n*.4,G=new P(new Y(.012,4,3),E);G.scale.set(.8,.5,1.3),G.position.set(Math.cos(U)*H,.04,Math.sin(U)*H),e.add(G);const O=new P(new gt(.002,.001,.025,3),E);O.position.set(Math.cos(U)*H-Math.cos(U)*.02,.04,Math.sin(U)*H-Math.sin(U)*.02),O.rotation.z=Math.PI/2,O.rotation.y=U,e.add(O),b.push({body:G,tail:O,ang:U,orbR:.15+y()*n*.35,speed:.3+y()*.4})}const R=new $({color:2250016,transparent:!0,opacity:.1,side:Ct});for(let L=0;L<3;L++){const U=y()*6.28,H=n*.7+y()*n*.25,G=new P(new He(.06+y()*.04,5),R);G.rotation.x=-Math.PI/2,G.position.set(Math.cos(U)*H,.032,Math.sin(U)*H),e.add(G)}const S=new $({color:13426158,transparent:!0,opacity:.06}),w=new P(new Pe(n-.05,.01,4,16),S);w.rotation.x=Math.PI/2,w.position.y=.035,e.add(w);const A=new q({color:4861976,roughness:.8,side:Ct,transparent:!0,opacity:.6}),C=new P(new He(.03,5),A);return C.rotation.x=-Math.PI/2,C.position.set((y()-.5)*n*.5,.04,(y()-.5)*n*.5),e.add(C),e.position.set(i,0,t),ot.add(e),{group:e,waterMat:r,flMat:h,pads:x,ripples:f,tadpoles:b,x:i,z:t,phase:y()*6.28,pondR:n}}function mb(i,t){const e=new Qt,n=new $({color:N.orbGold}),s=new P(new Y(.2,10,8),n);e.add(s);const o=new $({color:16777215}),r=new P(new Y(.06,6,4),o);e.add(r);const a=new $({color:16772744,transparent:!0,opacity:.4,wireframe:!0}),l=new P(new Or(.15,0),a);e.add(l);const u=new $({color:N.orbGlow,transparent:!0,opacity:.5}),c=new P(new Y(.35,8,6),u);e.add(c);const p=new $({color:N.orbGlow,transparent:!0,opacity:.3});for(let b=0;b<8;b++){const R=b/8*6.28,S=new P(new Gn(.02,.25,3),p);S.position.set(Math.cos(R)*.3,Math.sin(R*2)*.05,Math.sin(R)*.3),S.rotation.z=-R+Math.PI/2,S.rotation.y=R,e.add(S)}const f=new $({color:N.orbInner,transparent:!0,opacity:.15}),d=new P(new Y(.6,8,5),f);e.add(d);for(let b=0;b<6;b++){const R=new P(new Y(.03,4,3),new $({color:16777215})),S=b/6*6.28;R.position.set(Math.cos(S)*.4,Math.sin(S*2)*.1,Math.sin(S)*.4),e.add(R)}const g=new $({color:N.orbGold,transparent:!0,opacity:.7});for(let b=0;b<4;b++){const R=b/4*6.28+.4,S=new P(new Y(.015,3,3),g);S.position.set(Math.cos(R)*.5,0,Math.sin(R)*.5),e.add(S)}const x=new $({color:16768426,transparent:!0,opacity:.12});for(let b=0;b<3;b++){const R=new P(new Pe(.28,.003,4,12),x);R.rotation.set(b*1.05,b*.7,0),e.add(R)}const h=new $({color:N.orbGlow,transparent:!0,opacity:.08}),m=new P(new Pe(.4,.004,4,16),h);m.rotation.x=Math.PI/2,e.add(m);const M=new $({color:16772812,transparent:!0,opacity:.15}),v=new P(new Pe(.25,.012,4,10),M);v.rotation.x=Math.PI/2,e.add(v);const _=new $({color:16777215,transparent:!0,opacity:.5});for(let b=0;b<6;b++){const R=y()*6.28,S=y()*Math.PI-Math.PI/2,w=new P(new Y(.008,3,3),_);w.position.set(Math.cos(R)*Math.cos(S)*.2,Math.sin(S)*.2,Math.sin(R)*Math.cos(S)*.2),e.add(w)}const T=new $({color:N.orbGlow,transparent:!0,opacity:.1,side:Ct}),E=new P(new He(.5,8),T);return E.rotation.x=-Math.PI/2,E.position.y=-.95,e.add(E),e.position.set(i,1,t),ot.add(e),{group:e,coreMat:n,glowMat:u,hazeMat:f,x:i,z:t,found:!1,flyUp:!1,flyY:1,phase:y()*6.28,laserLine:null,laserMat:null}}const zp=[{palette:"rockGranite",roughness:.88,metalness:.04},{palette:"rockSandstone",roughness:.92,metalness:.02},{palette:"rockLimestone",roughness:.85,metalness:.03},{palette:"rockSlate",roughness:.9,metalness:.06},{palette:"rockBasalt",roughness:.94,metalness:.04}];function Ya(i,t,e){const n=i.attributes.position;for(let s=0;s<n.count;s++){const o=n.getX(s),r=n.getY(s),a=n.getZ(s),l=Math.sqrt(o*o+r*r+a*a)||1,u=o/l,c=r/l,p=a/l,f=Math.sin(o*4.3+e)*Math.sin(r*3.7+a*2.1+e*.7),d=Math.sin(a*5.1+e*1.3)*Math.sin(o*2.9+r*4.7)*.5,g=Math.sin((o+r)*3.1+e*2.1)*Math.sin((a-o)*2.7)*.3,x=(f+d+g)*t;n.setX(s,o+u*x),n.setY(s,r+c*x),n.setZ(s,a+p*x)}n.needsUpdate=!0,i.computeVertexNormals()}const qo=new it,Fp=new it,Op=new it,Bp=new it;function kl(i,t){const e=i.attributes.position,n=e.count,s=new Float32Array(n*3);Fp.set(t[0]),Op.set(t[1]),Bp.set(t[2]);for(let o=0;o<n;o++){const r=e.getX(o),a=e.getY(o),l=e.getZ(o),u=Math.sqrt(r*r+a*a+l*l)||1,c=Math.max(0,Math.min(1,a/u*.5+.5)),p=Math.sin(r*11.3+l*7.7)*.5+.5;qo.copy(Fp),qo.lerp(Op,c*.35+p*.2),qo.lerp(Bp,(1-c)*.25),s[o*3]=qo.r,s[o*3+1]=qo.g,s[o*3+2]=qo.b}i.setAttribute("color",new ze(s,3))}function Hl(){const i=zp[Math.floor(y()*zp.length)],t=N[i.palette];return{mat:new q({vertexColors:!0,roughness:i.roughness,metalness:i.metalness}),pal:t,type:i}}const Cg=new q({color:N.rockMoss,emissive:N.rockMoss,emissiveIntensity:.03,roughness:.95});function gb(i,t){const e=new Qt,{mat:n,pal:s}=Hl(),o=y()*100,r=.3+y()*.5,a=new Y(r,10,8);Ya(a,r*.08,o),kl(a,s);const l=new P(a,n),u=.35+y()*.3,c=.9+y()*.5,p=.9+y()*.5;l.scale.set(c,u,p),l.position.y=r*u*.25,l.rotation.set(y()*.4,y()*6.28,y()*.3),l.castShadow=!0,l.receiveShadow=!0,e.add(l);const f=1+Math.floor(y()*2);for(let d=0;d<f;d++){const{mat:g,pal:x}=Hl(),h=r*(.25+y()*.35),m=new Y(h,8,6);Ya(m,h*.07,o+d*13.7),kl(m,x);const M=new P(m,g),v=.3+y()*.35;M.scale.set(.9+y()*.4,v,.9+y()*.4);const _=y()*6.28,T=r*.5+y()*r*.4;M.position.set(Math.cos(_)*T,h*v*.2,Math.sin(_)*T),M.rotation.set(y()*.5,y()*6.28,y()*.4),M.receiveShadow=!0,e.add(M)}if(y()<.5){const d=r*.2+y()*r*.15,g=new P(new Y(d,5,4),Cg);g.scale.set(1.3,.15,1.3),g.position.set(y()*r*.2,r*u*.4,y()*r*.2),e.add(g)}return e.position.set(i,0,t),ot.add(e),{group:e,x:i,z:t,colR:r*.8}}function xb(i,t){const e=new Qt,{mat:n,pal:s}=Hl(),o=y()*100,r=1.2+y()*1.8,a=new Y(r,14,10);Ya(a,r*.1,o),kl(a,s);const l=new P(a,n),u=.45+y()*.25;if(l.scale.set(1+y()*.4,u,1+y()*.4),l.position.y=r*u*.3,l.rotation.set(y()*.2,y()*6.28,y()*.15),l.castShadow=!0,l.receiveShadow=!0,e.add(l),y()<.6){const{mat:p,pal:f}=Hl(),d=r*(.3+y()*.25),g=new Y(d,10,8);Ya(g,d*.09,o+37.1),kl(g,f);const x=new P(g,p),h=.3+y()*.25;x.scale.set(1.2+y()*.4,h,.9+y()*.4);const m=y()*6.28;x.position.set(Math.cos(m)*r*.7,d*h*.2,Math.sin(m)*r*.7),x.rotation.set(y()*.4,y()*6.28,y()*.3),x.castShadow=!0,e.add(x)}const c=2+Math.floor(y()*3);for(let p=0;p<c;p++){const f=r*.12+y()*r*.1,d=new P(new Y(f,5,4),Cg);d.scale.set(1.4,.15,1.4);const g=y()*6.28;d.position.set(Math.cos(g)*r*.3,r*u*.45+y()*.05,Math.sin(g)*r*.3),e.add(d)}return e.position.set(i,0,t),ot.add(e),{group:e,x:i,z:t,colR:r*.9}}let Xn=null;const la=new ce;function vb(){const i=new Y(1,6,5);Ya(i,.08,42.7);const t=new q({color:N.rockBase,roughness:.9,metalness:.03});return Xn=new Yn(i,t,kd),Xn.instanceMatrix.setUsage(bl),Xn.count=0,ot.add(Xn),Xn}const Gp=new it,kp=[9079440,10127984,10526872,6320256,8026754,7366752,9472128];function Mb(i,t,e){if(!Xn)return;const n=Xn.count;if(n>=kd)return;const s=.04+y()*.1;la.position.set(i,e+s*.08,t),la.rotation.set(y()*.5,y()*6.28,y()*.5),la.scale.set(s*(.9+y()*.5),s*(.2+y()*.3),s*(.9+y()*.5)),la.updateMatrix(),Xn.setMatrixAt(n,la.matrix),Gp.set(kp[Math.floor(y()*kp.length)]),Xn.setColorAt(n,Gp),Xn.count=n+1}function yb(){Xn&&(Xn.instanceMatrix.needsUpdate=!0,Xn.instanceColor&&(Xn.instanceColor.needsUpdate=!0))}let Pg=null,Ig=null,Lg=null,Dg=null,Uf=[];const Nf=[];function _b(){return Pg}function wb(){return Ig}function Sb(){return Lg}function bb(){return Dg}function Tb(){return Uf}function Eb(){return Nf}function Ab(){const i=new Qt,t=new q({color:N.obeliskBlack,roughness:.2,metalness:.8,emissive:N.obeliskPink,emissiveIntensity:0});Ig=t;const e=new P(new gt(1.2,1.8,Ce,4),t);e.position.y=Ce/2,e.rotation.y=Math.PI/4,e.castShadow=!0,i.add(e);const n=new $({color:3351108,transparent:!0,opacity:.2});for(let b=0;b<4;b++){const R=b/4*6.28+Math.PI/4,S=new P(new gt(.03,.04,Ce*.9,3),n);S.position.set(Math.cos(R)*1.55,Ce*.45,Math.sin(R)*1.55),i.add(S)}Nf.length=0;for(let b=0;b<4;b++){const R=new $({color:N.obeliskPink,transparent:!0,opacity:0,blending:Jt,depthWrite:!1}),S=[],w=b/4*6.28+Math.PI/4;for(let C=0;C<3;C++){const L=6+C*4,U=new P(new gt(.015,.015,.8,3),R);U.position.set(Math.cos(w)*1.6,L,Math.sin(w)*1.6),U.rotation.z=Math.PI/2,U.rotation.y=-w,U.visible=!1,i.add(U),S.push(U)}const A=new P(new gt(.012,.012,2.5,3),R);A.position.set(Math.cos(w)*1.6,12,Math.sin(w)*1.6),A.visible=!1,i.add(A),S.push(A),Nf.push({mat:R,meshes:S,revealed:!1,revealTimer:0})}const s=new q({color:N.obeliskBlack,roughness:.1,metalness:.9,emissive:N.obeliskPink,emissiveIntensity:0});Lg=s;const o=new P(new Gn(1.3,3,4),s);o.position.y=Ce+1.5,o.rotation.y=Math.PI/4,i.add(o);const r=new $({color:N.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<4;b++){const R=b/4*6.28+Math.PI/4,S=new P(new gt(.02,.02,3.2,3),r);S.position.set(Math.cos(R)*.8,Ce+1.5,Math.sin(R)*.8),S.rotation.z=.35*(R<3.14?1:-1),S.rotation.y=-R,S.visible=!1,i.add(S)}for(let b=0;b<5;b++){const R=new P(new Pe(1.85-b*.02,.04,6,4),new $({color:2236979}));R.position.y=4+b*5,R.rotation.x=Math.PI/2,i.add(R)}const a=new q({color:1118488,roughness:.3,metalness:.7}),l=new P(new gt(2.2,2.5,.6,4),a);l.position.y=.3,l.rotation.y=Math.PI/4,i.add(l);const u=new P(new gt(2.8,3,.4,4),a);u.position.y=.05,u.rotation.y=Math.PI/4,i.add(u);const c=new $({color:N.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<8;b++){const R=b/8*6.28,S=new P(new Y(.06,4,3),c);S.position.set(Math.cos(R)*2.5,Ce*.7+b*.5,Math.sin(R)*2.5),S.visible=!1,i.add(S)}const p=new $({color:1710626,transparent:!0,opacity:.08});for(let b=0;b<6;b++){const R=y()*6.28,S=2+y()*Ce*.7,w=new P(new gt(.008,.008,.5+y()*.5,3),p);w.position.set(Math.cos(R)*1.6,S,Math.sin(R)*1.6),w.rotation.z=(y()-.5)*.8,w.rotation.y=-R,i.add(w)}const f=new q({color:921108,roughness:.5,metalness:.4});for(let b=0;b<12;b++){const R=y()*6.28,S=3+y()*2,w=.15+y()*.25,A=new P(new Y(w,4,3),f);A.scale.set(1+y()*.5,.3+y()*.3,1+y()*.5),A.position.set(Math.cos(R)*S,w*.15,Math.sin(R)*S),A.rotation.set(y(),y(),y()),i.add(A)}const d=new $({color:N.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<4;b++){const R=b/4*6.28+Math.PI/4;for(let S=0;S<5;S++){const w=5+S*3.5+y()*.5,A=(y()-.5)*.4,C=new P(new Y(.04,4,3),d);C.position.set(Math.cos(R)*1.58+Math.cos(R+1.57)*A,w,Math.sin(R)*1.58+Math.sin(R+1.57)*A),C.visible=!1,i.add(C)}}const g=new $({color:N.obeliskPink,transparent:!0,opacity:.8,blending:Jt,depthWrite:!1}),x=new P(new Y(.5,12,8),g);x.position.y=Ce+3,i.add(x);const h=new $({color:N.obeliskPink,transparent:!0,opacity:.2,blending:Jt,depthWrite:!1}),m=new P(new Y(.9,8,6),h);m.position.y=Ce+3,i.add(m),Dg={mesh:x,haze:m,mat:g,hazeMat:h},Uf=[];const M=[.8,1.1,1.4,1.8],v=[11158783,10040302,12277247,8921821];for(let b=0;b<4;b++){const R=new $({color:v[b],transparent:!0,opacity:.4,blending:Jt,depthWrite:!1,side:Ct}),S=new P(new Pe(M[b],.02,6,24),R);S.position.y=Ce+3,S.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),i.add(S),Uf.push({mesh:S,mat:R,rx:(Math.random()-.5)*2,ry:(Math.random()-.5)*2,rz:(Math.random()-.5)*1.5})}const _=new $({color:0,transparent:!0,opacity:.15,side:Ct}),T=new P(new He(4,8),_);T.rotation.x=-Math.PI/2,T.position.y=.005,i.add(T),i.position.set(0,-Ce,0),ot.add(i),Pg=i;const E=new Xr(8939212,0,30);i.add(E),E.position.set(0,Ce+1,0)}let Ug=null,Ng=null;function Rb(){return Ug}function Cb(){return Ng}function Pb(){const i=new q({color:N.moatBlue,emissive:1136042,emissiveIntensity:.3,transparent:!0,opacity:0,roughness:.1,metalness:.3});Ng=i;const t=new Ll;t.absarc(0,0,6,0,6.28,!1);const e=new Il;e.absarc(0,0,3,0,6.28,!0),t.holes.push(e);const n=new Wa(t,24),s=new P(n,i);s.rotation.x=-Math.PI/2,s.position.y=.05,s.visible=!1,ot.add(s),Ug=s;const o=new $({color:4491468,transparent:!0,opacity:0});for(let d=0;d<12;d++){const g=d/12*6.28+y()*.3,x=3.5+y()*2,h=new P(new Y(.04+y()*.04,4,3),o);h.scale.set(1.2,.4,1.2),h.position.set(Math.cos(g)*x,.02,Math.sin(g)*x),h.visible=!1,ot.add(h)}const r=new $({color:13426158,transparent:!0,opacity:0,side:Ct});for(let d=0;d<6;d++){const g=d/6*6.28+y()*.5,x=new P(new He(.12+y()*.1,5),r);x.rotation.x=-Math.PI/2,x.position.set(Math.cos(g)*3.3,.06,Math.sin(g)*3.3),x.visible=!1,ot.add(x)}const a=new $({color:8960989,transparent:!0,opacity:0});for(let d=0;d<8;d++){const g=d/8*6.28,x=4+y()*1.5,h=new P(new gt(.003,.003,.4,3),a);h.position.set(Math.cos(g)*x,.055,Math.sin(g)*x),h.rotation.x=Math.PI/2,h.rotation.z=g+Math.PI/2,h.visible=!1,ot.add(h)}const l=new $({color:264208,transparent:!0,opacity:0,side:Ct}),u=new Ll;u.absarc(0,0,5.2,0,6.28,!1);const c=new Il;c.absarc(0,0,3.8,0,6.28,!0),u.holes.push(c);const p=new Wa(u,16),f=new P(p,l);f.rotation.x=-Math.PI/2,f.position.y=.04,f.visible=!1,ot.add(f)}const Za=[];function Hp(i,t,e,n,s){const o=[],r=[],a=[];for(let u=0;u<e;u++){const c=i[u],p=i[u+1],f=p.x-c.x;p.y-c.y;const d=p.z-c.z,g=Math.sqrt(f*f+d*d)||1,x=-d/g,h=f/g,m=(u+.5)/e,M=.7+Math.sin(m*Math.PI)*.5,v=t*M/2,_=[c.x+x*v,c.y,c.z+h*v],T=[c.x-x*v,c.y,c.z-h*v],E=[p.x+x*v,p.y,p.z+h*v],b=[p.x-x*v,p.y,p.z-h*v];o.push(..._,...E,...T,...T,...E,...b);const R=u/e,S=(u+1)/e;if(a.push(R,0,S,0,R,1,R,1,S,0,S,1),s){const C=.85+Math.sin(m*Math.PI*3)*.15,L=1.2*C,U=.6*C;r.push(s.r*L,s.g*L,s.b*L),r.push(s.r*L,s.g*L,s.b*L),r.push(s.r*U,s.g*U,s.b*U),r.push(s.r*U,s.g*U,s.b*U),r.push(s.r*L,s.g*L,s.b*L),r.push(s.r*U,s.g*U,s.b*U)}}const l=new Ae;return l.setAttribute("position",new Vt(o,3)),l.setAttribute("uv",new Vt(a,2)),r&&l.setAttribute("color",new Vt(r,3)),l.computeVertexNormals(),l}function Ib(){for(let l=0;l<6;l++){const u=N.rainbow[l],c=l/6*6.28,p=6+l*.8,f=Ce+6+l*2.5,d=1-l*.05,g=[],x=32;for(let H=0;H<=x;H++){const G=H/x,O=c+G*Math.PI,k=Math.cos(O)*p,nt=Math.sin(O)*p,ct=Math.sin(G*Math.PI)*f;g.push(new F(k,ct,nt))}const h=new it(u),m=Hp(g,d,x,!0,h),M=new $({vertexColors:!0,transparent:!0,opacity:0,side:Ct,depthWrite:!1,blending:Jt}),v=new P(m,M);v.visible=!1,ot.add(v);const _=new wo(g),T=new $({color:16777215,transparent:!0,opacity:0,blending:Jt,depthWrite:!1}),E=new xn(_,x,.03,4,!1),b=new P(E,T);b.visible=!1,ot.add(b);const R=[],S=new $({color:16777215,transparent:!0,opacity:0,blending:Jt,depthWrite:!1});for(let H=0;H<8;H++){const G=new P(new Y(.06,4,3),S.clone());G.visible=!1,ot.add(G),R.push({mesh:G,mat:G.material,phase:H/8,speed:.15+Math.random()*.1})}const w=new $({color:u,transparent:!0,opacity:0,side:Ct,blending:Jt}),A=g[0],C=g[g.length-1],L=new P(new He(1.2,8),w);L.rotation.x=-Math.PI/2,L.position.set(A.x,.03,A.z),L.visible=!1,ot.add(L);const U=new P(new He(1.2,8),w.clone());U.rotation.x=-Math.PI/2,U.position.set(C.x,.03,C.z),U.visible=!1,ot.add(U),Za.push({mesh:v,mat:M,coreLine:b,coreMat:T,curve:_,sparkles:R,pools:[L,U],poolMat:w,targetOpacity:0})}const i=[],t=10,e=Ce+14,n=32;for(let l=0;l<=n;l++){const u=l/n,c=u*Math.PI;i.push(new F(Math.cos(c)*t,Math.sin(u*Math.PI)*e,Math.sin(c)*t))}const s=new it(15654399),o=Hp(i,1.5,n,!0,s),r=new $({vertexColors:!0,transparent:!0,opacity:0,side:Ct,depthWrite:!1,blending:Jt}),a=new P(o,r);a.visible=!1,ot.add(a),Za.push({mesh:a,mat:r,targetOpacity:0})}function Lb(i){for(let t=0;t<Za.length;t++){const e=Za[t];if(!(!e.sparkles||!e.curve)&&e.mesh.visible){e.coreLine&&(e.coreLine.visible=e.mesh.visible,e.coreMat.opacity=e.mat.opacity*.4);for(let n=0;n<e.sparkles.length;n++){const s=e.sparkles[n];s.phase+=s.speed*.016,s.phase>1&&(s.phase-=1);const o=e.curve.getPoint(s.phase);s.mesh.position.copy(o),s.mesh.visible=e.mesh.visible;const r=Math.sin(i*8+n*2.1)*.5+.5;s.mat.opacity=e.mat.opacity*r*.7}if(e.pools)for(let n=0;n<e.pools.length;n++)e.pools[n].visible=e.mesh.visible,e.poolMat&&(e.poolMat.opacity=e.mat.opacity*.3)}}}let Ln=null;const zi=[],Tn=new ce,Ia=new it;function Db(i){const t=new $({color:16777215,transparent:!0,opacity:1});Ln=new Yn(jn.fly,t,i),Ln.instanceMatrix.setUsage(ye),Ln.instanceColor=new Li(new Float32Array(i*3),3),Ln.instanceColor.setUsage(ye),Tn.scale.setScalar(0),Tn.updateMatrix();for(let e=0;e<i;e++){Ln.setMatrixAt(e,Tn.matrix);const n=e%3===0?N.fireflyB:N.firefly;Ia.setHex(n),Ln.setColorAt(e,Ia),zi.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,phase:Math.random()*6.28,wander:Math.random()*6.28,colorHex:n})}Ln.count=i,Ln.frustumCulled=!1,ot.add(Ln)}function al(i,t,e,n){let s=null;for(let o=0;o<zi.length;o++)if(!zi[o].active){s=zi[o];break}if(!s){let o=1/0;for(let r=0;r<zi.length;r++)zi[r].life<o&&(o=zi[r].life,s=zi[r])}s.x=i,s.y=t+.5+Math.random()*3,s.z=e,s.vx=(Math.random()-.5)*2,s.vy=Math.random()-.5,s.vz=(Math.random()-.5)*2,s.life=n,s.max=n,s.active=!0,s.wander=Math.random()*6.28}function zg(i,t){let e=0,n=!1;for(let s=0;s<zi.length;s++){const o=zi[s];if(!o.active){Tn.position.set(0,-100,0),Tn.scale.setScalar(0),Tn.updateMatrix(),Ln.setMatrixAt(s,Tn.matrix);continue}if(o.life-=i,o.life<=0){o.active=!1,Tn.position.set(0,-100,0),Tn.scale.setScalar(0),Tn.updateMatrix(),Ln.setMatrixAt(s,Tn.matrix);continue}e++,o.wander+=(Math.random()-.5)*3*i,o.vx+=Math.cos(o.wander)*1.5*i,o.vz+=Math.sin(o.wander)*1.5*i,o.vy+=Math.sin(t*2+o.phase)*i,o.vx*=.995,o.vy*=.995,o.vz*=.995,o.x+=o.vx*i,o.y+=o.vy*i,o.z+=o.vz*i;const r=Dt(o.x,o.z)+.3;o.y<r&&(o.y=r,o.vy=Math.abs(o.vy)*.5),o.y>12&&(o.vy-=2*i);const a=Math.sin(t*3+o.phase)*.5+.5,u=o.life/o.max*(.4+a*.6),c=.6+a*.6;Tn.position.set(o.x,o.y,o.z),Tn.scale.setScalar(c),Tn.updateMatrix(),Ln.setMatrixAt(s,Tn.matrix),Ia.setHex(o.colorHex),Ia.multiplyScalar(u),Ln.setColorAt(s,Ia),n=!0}return Ln.instanceMatrix.needsUpdate=!0,n&&(Ln.instanceColor.needsUpdate=!0),e}let Dn=null;const Fi=[],En=new ce,Vl=new it,Ub=new it(N.spore);function Nb(i){const t=new $({color:16777215,transparent:!0,opacity:1});Dn=new Yn(jn.spore,t,i),Dn.instanceMatrix.setUsage(ye),Dn.instanceColor=new Li(new Float32Array(i*3),3),Dn.instanceColor.setUsage(ye),En.scale.setScalar(0),En.updateMatrix();for(let e=0;e<i;e++)Dn.setMatrixAt(e,En.matrix),Vl.setHex(N.spore),Dn.setColorAt(e,Vl),Fi.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});Dn.count=i,Dn.frustumCulled=!1,ot.add(Dn)}function zb(i,t,e){let n=null;for(let s=0;s<Fi.length;s++)if(!Fi[s].active){n=Fi[s];break}if(!n){let s=1/0;for(let o=0;o<Fi.length;o++)Fi[o].life<s&&(s=Fi[o].life,n=Fi[o])}n.x=i,n.y=t,n.z=e,n.vx=(Math.random()-.5)*.3,n.vy=.4+Math.random()*.4,n.vz=(Math.random()-.5)*.3,n.life=3+Math.random()*3,n.max=n.life,n.active=!0}let Fg=0,Og=0;function Fb(i,t){Fg=i,Og=t}function Ob(i){let t=0,e=!1;for(let n=0;n<Fi.length;n++){const s=Fi[n];if(!s.active){En.position.set(0,-100,0),En.scale.setScalar(0),En.updateMatrix(),Dn.setMatrixAt(n,En.matrix);continue}if(s.life-=i,s.life<=0){s.active=!1,En.position.set(0,-100,0),En.scale.setScalar(0),En.updateMatrix(),Dn.setMatrixAt(n,En.matrix);continue}t++,s.vy+=.3*i,s.vx+=Fg*.3*i,s.vz+=Og*.3*i,s.vx*=.997,s.vy*=.997,s.vz*=.997,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i;const o=s.life/s.max*.7;En.position.set(s.x,s.y,s.z),En.scale.setScalar(1),En.updateMatrix(),Dn.setMatrixAt(n,En.matrix),Vl.copy(Ub).multiplyScalar(o),Dn.setColorAt(n,Vl),e=!0}return Dn.instanceMatrix.needsUpdate=!0,e&&(Dn.instanceColor.needsUpdate=!0),t}let Un=null;const _r=[];let oh=0;const An=new ce,Wl=new it,Bg=new it(N.starMote);function Bb(i){const t=new $({color:16777215,transparent:!0,opacity:1});Un=new Yn(jn.starMote,t,i),Un.instanceMatrix.setUsage(ye),Un.instanceColor=new Li(new Float32Array(i*3),3),Un.instanceColor.setUsage(ye),An.scale.setScalar(0),An.updateMatrix();for(let e=0;e<i;e++)Un.setMatrixAt(e,An.matrix),Wl.copy(Bg),Un.setColorAt(e,Wl),_r.push({x:0,y:0,z:0,life:0,max:0,active:!1,vy:0,drift:0});Un.count=i,Un.frustumCulled=!1,ot.add(Un)}function Gb(i){let t=null;for(let e=0;e<_r.length;e++)if(!_r[e].active){t=_r[e];break}t&&(t.x=i.x+(Math.random()-.5)*60,t.z=i.z+(Math.random()-.5)*60,t.y=15+Math.random()*20,t.life=6+Math.random()*6,t.max=t.life,t.active=!0,t.vy=-.15-Math.random()*.3,t.drift=Math.random()*6.28)}function Gg(i,t,e){oh+=i,oh>.15&&(oh=0,Gb(e));let n=!1;for(let s=0;s<_r.length;s++){const o=_r[s];if(!o.active){An.position.set(0,-100,0),An.scale.setScalar(0),An.updateMatrix(),Un.setMatrixAt(s,An.matrix);continue}if(o.life-=i,o.life<=0||o.y<.5){o.active=!1,An.position.set(0,-100,0),An.scale.setScalar(0),An.updateMatrix(),Un.setMatrixAt(s,An.matrix);continue}o.y+=o.vy*i,o.drift+=(Math.random()-.5)*.5*i,o.x+=Math.sin(o.drift)*.1*i,o.z+=Math.cos(o.drift)*.08*i;const r=o.life/o.max,a=Math.sin(t*4+s)*.3+.7,l=r*a*.7,u=.5+a*.5;An.position.set(o.x,o.y,o.z),An.scale.setScalar(u),An.updateMatrix(),Un.setMatrixAt(s,An.matrix),Wl.copy(Bg).multiplyScalar(l),Un.setColorAt(s,Wl),n=!0}Un.instanceMatrix.needsUpdate=!0,n&&(Un.instanceColor.needsUpdate=!0)}let Nn=null;const wr=[],Rn=new ce,Xl=new it,kg=new it(8956535);function kb(i){const t=new $({color:16777215,transparent:!0,opacity:1});Nn=new Yn(jn.dustMote,t,i),Nn.instanceMatrix.setUsage(ye),Nn.instanceColor=new Li(new Float32Array(i*3),3),Nn.instanceColor.setUsage(ye),Rn.scale.setScalar(0),Rn.updateMatrix();for(let e=0;e<i;e++)Nn.setMatrixAt(e,Rn.matrix),Xl.copy(kg),Nn.setColorAt(e,Xl),wr.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});Nn.count=i,Nn.frustumCulled=!1,ot.add(Nn)}function Vp(i,t,e){for(let n=0;n<e;n++){let s=null;for(let a=0;a<wr.length;a++)if(!wr[a].active){s=wr[a];break}if(!s)continue;const o=Math.random()*6.28,r=1+Math.random()*2;s.x=i+Math.cos(o)*.2,s.y=Dt(i,t)+.1,s.z=t+Math.sin(o)*.2,s.vx=Math.cos(o)*r,s.vy=.5+Math.random()*1.5,s.vz=Math.sin(o)*r,s.life=.6+Math.random()*.6,s.max=s.life,s.active=!0}}function Hb(i){let t=!1;for(let e=0;e<wr.length;e++){const n=wr[e];if(!n.active){Rn.position.set(0,-100,0),Rn.scale.setScalar(0),Rn.updateMatrix(),Nn.setMatrixAt(e,Rn.matrix);continue}if(n.life-=i,n.life<=0){n.active=!1,Rn.position.set(0,-100,0),Rn.scale.setScalar(0),Rn.updateMatrix(),Nn.setMatrixAt(e,Rn.matrix);continue}n.vy-=3*i,n.vx*=.96,n.vy*=.96,n.vz*=.96,n.x+=n.vx*i,n.y+=n.vy*i,n.z+=n.vz*i;const s=Dt(n.x,n.z)+.05;n.y<s&&(n.y=s,n.vy=0,n.vx*=.8,n.vz*=.8);const o=n.life/n.max*.4;Rn.position.set(n.x,n.y,n.z),Rn.scale.setScalar(1),Rn.updateMatrix(),Nn.setMatrixAt(e,Rn.matrix),Xl.copy(kg).multiplyScalar(o),Nn.setColorAt(e,Xl),t=!0}Nn.instanceMatrix.needsUpdate=!0,t&&(Nn.instanceColor.needsUpdate=!0)}let zn=null;const Sr=[],Cn=new ce,ql=new it,Hg=new it(N.bubblePop),Vb=new Y(.02,3,3);function Wb(i){const t=new $({color:16777215,transparent:!0,opacity:1});zn=new Yn(Vb,t,i),zn.instanceMatrix.setUsage(ye),zn.instanceColor=new Li(new Float32Array(i*3),3),zn.instanceColor.setUsage(ye),Cn.scale.setScalar(0),Cn.updateMatrix();for(let e=0;e<i;e++)zn.setMatrixAt(e,Cn.matrix),ql.copy(Hg),zn.setColorAt(e,ql),Sr.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});zn.count=i,zn.frustumCulled=!1,ot.add(zn)}function Xb(i,t,e,n){for(let s=0;s<n;s++){let o=null;for(let u=0;u<Sr.length;u++)if(!Sr[u].active){o=Sr[u];break}if(!o)continue;const r=Math.random()*6.28,a=Math.random()*3.14,l=1+Math.random()*2;o.x=i,o.y=t,o.z=e,o.vx=Math.cos(r)*Math.sin(a)*l,o.vy=Math.cos(a)*l,o.vz=Math.sin(r)*Math.sin(a)*l,o.life=.4+Math.random()*.4,o.max=o.life,o.active=!0}}function qb(i){let t=!1;for(let e=0;e<Sr.length;e++){const n=Sr[e];if(!n.active){Cn.position.set(0,-100,0),Cn.scale.setScalar(0),Cn.updateMatrix(),zn.setMatrixAt(e,Cn.matrix);continue}if(n.life-=i,n.life<=0){n.active=!1,Cn.position.set(0,-100,0),Cn.scale.setScalar(0),Cn.updateMatrix(),zn.setMatrixAt(e,Cn.matrix);continue}n.vy-=2*i,n.vx*=.97,n.vy*=.97,n.vz*=.97,n.x+=n.vx*i,n.y+=n.vy*i,n.z+=n.vz*i;const s=n.life/n.max*.8;Cn.position.set(n.x,n.y,n.z),Cn.scale.setScalar(1),Cn.updateMatrix(),zn.setMatrixAt(e,Cn.matrix),ql.copy(Hg).multiplyScalar(s),zn.setColorAt(e,ql),t=!0}zn.instanceMatrix.needsUpdate=!0,t&&(zn.instanceColor.needsUpdate=!0)}let Fn=null;const br=[],pn=new ce,Yl=new it,Vg=[new it(N.leafGlow),new it(3394662),new it(2271880),new it(5636044),new it(4513262)];let Wg=0,Xg=0;function Yb(i,t,e){Wg=i,Xg=t}function Zb(i){const t=new he(.12,.08),e=new $({color:16777215,transparent:!0,opacity:1,side:Ct,depthWrite:!1,blending:Jt});Fn=new Yn(t,e,i),Fn.instanceMatrix.setUsage(ye),Fn.instanceColor=new Li(new Float32Array(i*3),3),Fn.instanceColor.setUsage(ye),pn.scale.setScalar(0),pn.updateMatrix();for(let n=0;n<i;n++)Fn.setMatrixAt(n,pn.matrix),Yl.setHex(0),Fn.setColorAt(n,Yl),br.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,rvx:0,rvy:0,rvz:0,life:0,max:0,active:!1,colorIdx:0});Fn.count=i,Fn.frustumCulled=!1,ot.add(Fn)}function $b(i,t,e){let n=null;for(let o=0;o<br.length;o++)if(!br[o].active){n=br[o];break}if(!n)return;n.x=i+(Math.random()-.5)*2,n.y=t+Math.random()*2,n.z=e+(Math.random()-.5)*2;const s=Math.random()*6.28;n.vx=Math.cos(s)*.3,n.vy=-.2-Math.random()*.3,n.vz=Math.sin(s)*.3,n.rvx=(Math.random()-.5)*4,n.rvy=(Math.random()-.5)*3,n.rvz=(Math.random()-.5)*2,n.rx=Math.random()*6.28,n.ry=Math.random()*6.28,n.rz=Math.random()*6.28,n.life=4+Math.random()*4,n.max=n.life,n.active=!0,n.colorIdx=Math.floor(Math.random()*Vg.length)}function jb(i,t){let e=!1;for(let n=0;n<br.length;n++){const s=br[n];if(!s.active){pn.position.set(0,-100,0),pn.scale.setScalar(0),pn.updateMatrix(),Fn.setMatrixAt(n,pn.matrix);continue}if(s.life-=i,s.life<=0||s.y<-.5){s.active=!1,pn.position.set(0,-100,0),pn.scale.setScalar(0),pn.updateMatrix(),Fn.setMatrixAt(n,pn.matrix);continue}s.vx+=Wg*.4*i,s.vz+=Xg*.4*i,s.vx+=Math.sin(t*3+n*1.7)*.5*i,s.vz+=Math.cos(t*2.5+n*2.1)*.3*i,s.vy-=.3*i,s.vx*=.995,s.vy=Math.max(s.vy,-.8),s.vz*=.995,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i,s.rx+=s.rvx*i,s.ry+=s.rvy*i,s.rz+=s.rvz*i;const o=s.life/s.max,r=o*(.6+Math.sin(t*2+n*.8)*.4),a=.8+o*.4;pn.position.set(s.x,s.y,s.z),pn.rotation.set(s.rx,s.ry,s.rz),pn.scale.setScalar(a),pn.updateMatrix(),Fn.setMatrixAt(n,pn.matrix),Yl.copy(Vg[s.colorIdx]).multiplyScalar(r),Fn.setColorAt(n,Yl),e=!0}Fn.instanceMatrix.needsUpdate=!0,e&&(Fn.instanceColor.needsUpdate=!0)}const Gc=40,zf=8;let gn=null;const Oi=[],si=new ce,zs=new it,qg=new it(4513194);let Wp=0,Xp=0,$d=!1;function Kb(){const i=new Ll;return i.moveTo(0,-.18),i.quadraticCurveTo(.1,-.17,.11,-.06),i.lineTo(.1,-.02),i.lineTo(.13,.12),i.quadraticCurveTo(.125,.14,.11,.12),i.lineTo(.08,0),i.quadraticCurveTo(.05,-.02,.03,0),i.lineTo(.03,.05),i.lineTo(.02,.22),i.quadraticCurveTo(0,.245,-.02,.22),i.lineTo(-.03,.05),i.lineTo(-.03,0),i.quadraticCurveTo(-.05,-.02,-.08,0),i.lineTo(-.11,.12),i.quadraticCurveTo(-.125,.14,-.13,.12),i.lineTo(-.1,-.02),i.lineTo(-.11,-.06),i.quadraticCurveTo(-.1,-.17,0,-.18),new Wa(i)}function Jb(){const i=Kb(),t=new $({color:16777215,transparent:!0,opacity:1,blending:Jt,depthWrite:!1,side:Ct});gn=new Yn(i,t,Gc),gn.instanceMatrix.setUsage(ye),gn.instanceColor=new Li(new Float32Array(Gc*3),3),gn.instanceColor.setUsage(ye),si.position.set(0,-100,0),si.scale.setScalar(0),si.updateMatrix();for(let e=0;e<Gc;e++)gn.setMatrixAt(e,si.matrix),zs.setScalar(0),gn.setColorAt(e,zs),Oi.push({active:!1,life:0,maxLife:zf,x:0,z:0});gn.count=Gc,gn.frustumCulled=!1,ot.add(gn),$d=!0}function Qb(i,t,e,n){if(!$d)return;const s=i-Wp,o=t-Xp;if(s*s+o*o<(n?.25:.64))return;Wp=i,Xp=t;let l=null,u=-1;for(let h=0;h<Oi.length;h++)if(!Oi[h].active){l=Oi[h],u=h;break}if(!l){let h=1/0;for(let m=0;m<Oi.length;m++)Oi[m].life<h&&(h=Oi[m].life,l=Oi[m],u=m)}const c=Dt(i,t);l.active=!0,l.life=zf,l.maxLife=zf,l.x=i,l.z=t;const p=u%2===0?1:-1,f=Math.sin(e+Math.PI/2)*.12*p,d=Math.cos(e+Math.PI/2)*.12*p,g=n?1.15:1;si.position.set(i+f,c+.04,t+d),si.rotation.set(-Math.PI/2,0,-e+(Math.random()-.5)*.15),si.scale.set(g,g,g),si.updateMatrix(),gn.setMatrixAt(u,si.matrix);const x=n?1.2:.85;zs.copy(qg).multiplyScalar(x),gn.setColorAt(u,zs)}function tT(i,t){if(!$d)return;const e=1+(t||0)*1.5;let n=!1;for(let s=0;s<Oi.length;s++){const o=Oi[s];if(!o.active)continue;if(o.life-=i*e,o.life<=0){o.active=!1,si.position.set(0,-100,0),si.scale.setScalar(0),si.updateMatrix(),gn.setMatrixAt(s,si.matrix),zs.setScalar(0),gn.setColorAt(s,zs),n=!0;continue}const r=o.life/o.maxLife,a=r*r;zs.copy(qg).multiplyScalar(a*.85),gn.setColorAt(s,zs),n=!0}gn.instanceMatrix.needsUpdate=!0,n&&(gn.instanceColor.needsUpdate=!0)}const cr=150;let Ge=null;const jd=[],Pn=new ce,Zl=new it,Kd=new it(N.orbGold),eT=new it(N.orbGlow);function nT(){const i=new $({color:16777215,transparent:!0,opacity:1,blending:Jt,depthWrite:!1}),t=new Y(.05,4,3);Ge=new Yn(t,i,cr),Ge.instanceMatrix.setUsage(ye),Ge.instanceColor=new Li(new Float32Array(cr*3),3),Ge.instanceColor.setUsage(ye),Pn.scale.setScalar(0),Pn.updateMatrix();for(let e=0;e<cr;e++)Ge.setMatrixAt(e,Pn.matrix),Zl.copy(Kd),Ge.setColorAt(e,Zl),jd.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,phase:Math.random()*6.28});Ge.count=cr,Ge.frustumCulled=!1,Ge.visible=!1,ot.add(Ge)}function iT(i,t,e){Ge.visible=!0;for(let n=0;n<cr;n++){const s=jd[n];s.x=i,s.y=t,s.z=e;const o=Math.random()*6.28,r=Math.random()*Math.PI*.8,a=1.5+Math.random()*4;s.vx=Math.sin(r)*Math.cos(o)*a,s.vy=Math.cos(r)*a*.6+1+Math.random()*1.5,s.vz=Math.sin(r)*Math.sin(o)*a,s.life=3+Math.random()*4,s.max=s.life,s.active=!0;const l=Math.random()<.7?Kd:eT,u=Ge.instanceColor.array;u[n*3]=l.r*(.8+Math.random()*.4),u[n*3+1]=l.g*(.8+Math.random()*.4),u[n*3+2]=l.b*(.6+Math.random()*.4)}Ge.instanceColor.needsUpdate=!0}function sT(i,t){if(!Ge||!Ge.visible)return;let e=!1,n=!1;for(let s=0;s<cr;s++){const o=jd[s];if(!o.active){Pn.position.set(0,-100,0),Pn.scale.setScalar(0),Pn.updateMatrix(),Ge.setMatrixAt(s,Pn.matrix);continue}if(e=!0,o.life-=i,o.life<=0||o.y<-1){o.active=!1,Pn.position.set(0,-100,0),Pn.scale.setScalar(0),Pn.updateMatrix(),Ge.setMatrixAt(s,Pn.matrix);continue}o.vy-=1.2*i,o.vx*=.992,o.vz*=.992,o.vx+=Math.sin(t*2.5+o.phase)*.15*i,o.vz+=Math.cos(t*2+o.phase*1.3)*.12*i,o.x+=o.vx*i,o.y+=o.vy*i,o.z+=o.vz*i;const r=o.life/o.max,a=Math.sin(t*5+o.phase)*.3+.7,l=(.4+a*.6)*Math.min(r*2,1);Pn.position.set(o.x,o.y,o.z),Pn.scale.setScalar(l),Pn.updateMatrix(),Ge.setMatrixAt(s,Pn.matrix),Zl.copy(Kd).multiplyScalar(r*a),Ge.setColorAt(s,Zl),n=!0}Ge.instanceMatrix.needsUpdate=!0,n&&(Ge.instanceColor.needsUpdate=!0),e||(Ge.visible=!1)}const oi=[],as=[];let qp=Ce+2,As=1;function Yp(i){As=i}function oT(){for(let i=0;i<oi.length;i++){const t=oi[i];ot.remove(t.upTube),t.upTube.geometry.dispose(),t.mat.dispose(),ot.remove(t.upGlow),t.upGlow.geometry.dispose(),t.glowMat.dispose(),ot.remove(t.bendTube),t.bendTube.geometry.dispose(),t.bendMat.dispose(),ot.remove(t.bendGlow),t.bendGlow.geometry.dispose(),t.bendGlowMat.dispose()}oi.length=0;for(let i=0;i<as.length;i++){const t=as[i];ot.remove(t.tube),t.tube.geometry.dispose(),t.mat.dispose(),ot.remove(t.glow),t.glow.geometry.dispose(),t.glowMat.dispose()}as.length=0}function Yg(i,t,e,n){const s=[];for(let r=0;r<=12;r++){const a=r/12,l=i*(1-a*a),u=t*(1-a*a),c=e+(n-e)*a;s.push(new F(l,c,u))}return{curve:new wo(s),pts:s}}function rT(i,t,e,n){const s=n||Ce+2,o=e+15,r=new Nd(new F(i,e,t),new F(i,o,t)),a=new $({color:N.laserPink,transparent:!0,opacity:0,blending:Jt,depthWrite:!1}),l=new P(new xn(r,1,.06,6,!1),a);ot.add(l);const u=new $({color:N.laserGlow,transparent:!0,opacity:0,blending:Jt,depthWrite:!1}),c=new P(new xn(r,1,.2,6,!1),u);ot.add(c);const{curve:p}=Yg(i,t,o,s),f=new $({color:N.laserPink,transparent:!0,opacity:0,blending:Jt,depthWrite:!1}),d=new P(new xn(p,16,.05,6,!1),f);ot.add(d);const g=new $({color:N.laserGlow,transparent:!0,opacity:0,blending:Jt,depthWrite:!1}),x=new P(new xn(p,16,.18,6,!1),g);ot.add(x);const h={upTube:l,upGlow:c,bendTube:d,bendGlow:x,mat:a,glowMat:u,bendMat:f,bendGlowMat:g,fromX:i,fromZ:t,floatY:e,skyY:o,tipY:s,animPhase:0,animTimer:0};oi.push(h);for(let m=0;m<oi.length-1;m++){const M=oi[m],v=(h.skyY+M.skyY)/2,_=[];for(let w=0;w<=8;w++){const A=w/8,C=h.fromX*(1-A)+M.fromX*A,L=h.fromZ*(1-A)+M.fromZ*A,U=v+Math.sin(A*Math.PI)*3;_.push(new F(C,U,L))}const T=new wo(_),E=new $({color:N.laserGlow,transparent:!0,opacity:0,blending:Jt,depthWrite:!1}),b=new P(new xn(T,10,.03,4,!1),E);ot.add(b);const R=new $({color:N.laserPink,transparent:!0,opacity:0,blending:Jt,depthWrite:!1}),S=new P(new xn(T,10,.1,4,!1),R);ot.add(S),as.push({tube:b,glow:S,mat:E,glowMat:R,opacity:0})}return h}function aT(i){for(let t=0;t<oi.length;t++){const e=oi[t];e.tipY=i;const{curve:n}=Yg(e.fromX,e.fromZ,e.skyY,i);ot.remove(e.bendTube),e.bendTube.geometry.dispose(),e.bendTube.geometry=new xn(n,16,.05,6,!1),ot.add(e.bendTube),ot.remove(e.bendGlow),e.bendGlow.geometry.dispose(),e.bendGlow.geometry=new xn(n,16,.18,6,!1),ot.add(e.bendGlow)}}function cT(i,t,e){const n=e||Ce+2;Math.abs(n-qp)>.1&&oi.length>0&&(aT(n),qp=n);for(let s=0;s<oi.length;s++){const o=oi[s];if(o.animTimer+=i,o.animPhase===0){const r=Math.min(o.animTimer/.5,1);o.mat.opacity=r*.8,o.glowMat.opacity=r*.3,o.animTimer>.5&&(o.animPhase=1,o.animTimer=0)}else if(o.animPhase===1){const r=Math.min(o.animTimer/.8,1);o.bendMat.opacity=r*.7,o.bendGlowMat.opacity=r*.2,o.mat.opacity=.8,o.glowMat.opacity=.3,o.animTimer>.8&&(o.animPhase=2)}else{const r=Math.sin(t*3+s*1.2)*.5+.5;o.mat.opacity=.5+r*.4,o.glowMat.opacity=.15+r*.15,o.bendMat.opacity=.4+r*.3,o.bendGlowMat.opacity=.1+r*.12}}for(let s=0;s<as.length;s++){const o=as[s];o.opacity=Math.min(o.opacity+i*.5,.3);const r=Math.sin(t*2+s*.8)*.5+.5;o.mat.opacity=o.opacity*(.6+r*.4),o.glowMat.opacity=o.opacity*(.2+r*.15)}if(As<1){for(let s=0;s<oi.length;s++){const o=oi[s];o.mat.opacity*=As,o.glowMat.opacity*=As,o.bendMat.opacity*=As,o.bendGlowMat.opacity*=As}for(let s=0;s<as.length;s++)as[s].mat.opacity*=As,as[s].glowMat.opacity*=As}}let La=null,Ei=0,xa=null,$l=!1;function lT(i,t,e){return t&&e<W2&&e<1/0?(xa!=="puff"&&(xa="puff",Ei=0),Ei+=H2*i,Ei>=1&&La!=="puff"&&(Ei=1,La="puff",$l=!0)):xa==="puff"&&Ei>0&&La!=="puff"&&(Ei=Math.max(0,Ei-V2*i),Ei===0&&(xa=null)),Ei}function uT(){return Ei}function Jd(){return La}function hT(){La=null,Ei=0,xa=null,$l=!1}function fT(){return $l?($l=!1,!0):!1}const dT=new it(N.orbGold),pT=new it(16777215);let ti=0,cn="SEEK",Rs=-Ce,dn=0,va=[],Hn=null,eo=null,no=null,_e=null,io=[],is=null,Ff=null,di=[],Ma=null,Zg=null,$g=null,Of=null,Bf=null,Gf=null,kf=null,cl=null,Hf=null,Vf=null,Wf=null,kc=0,Xf=null,qf=null,Yf=null,ho=[],Zf=[],$f=[],jf=[],Kf=[],Qo=[],Jf=[],tr=null,Zp=0,an=0,Ui=[],lr=null,$p=!1,jp=!1;const ur=200;let gi=null;const Qd=[];let jg=!1;function mT(){if(gi)return;const i=new Ae,t=new Float32Array(ur*3),e=new Float32Array(ur*3),n=new Float32Array(ur);i.setAttribute("position",new ze(t,3)),i.setAttribute("color",new ze(e,3)),i.setAttribute("size",new ze(n,1)),i.attributes.position.setUsage(ye),i.attributes.color.setUsage(ye),i.attributes.size.setUsage(ye);const s=new Ld({size:.3,vertexColors:!0,transparent:!0,opacity:.9,blending:Jt,depthWrite:!1,sizeAttenuation:!0});gi=new Ym(i,s),gi.visible=!1,ot.add(gi);const o=new it(N.obeliskPink),r=new it(11158783);for(let a=0;a<ur;a++){const l=Math.random()<.7?o:r;e[a*3]=l.r*(.8+Math.random()*.4),e[a*3+1]=l.g*(.8+Math.random()*.4),e[a*3+2]=l.b*(.8+Math.random()*.4),n[a]=.15+Math.random()*.25,Qd.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,active:!1,sparklePhase:Math.random()*6.28})}i.attributes.color.needsUpdate=!0,i.attributes.size.needsUpdate=!0}function gT(i,t,e){jg=!0,gi.visible=!0;for(let n=0;n<ur;n++){const s=Qd[n];s.x=i,s.y=t,s.z=e;const o=Math.random()*6.28,r=Math.random()*Math.PI,a=2+Math.random()*5;s.vx=Math.sin(r)*Math.cos(o)*a,s.vy=Math.cos(r)*a*.5+Math.random()*2,s.vz=Math.sin(r)*Math.sin(o)*a,s.life=5+Math.random()*6,s.active=!0}}function xT(i,t){if(!gi||!gi.visible)return;const e=gi.geometry.attributes.position.array,n=gi.geometry.attributes.size.array;let s=!1;for(let o=0;o<ur;o++){const r=Qd[o];if(!r.active){e[o*3+1]=-100,n[o]=0;continue}if(s=!0,r.life-=i,r.life<=0||r.y<-1){r.active=!1;continue}r.vy-=1.5*i,r.vx*=.995,r.vz*=.995,r.vx+=Math.sin(t*3+o*.7)*.3*i,r.vz+=Math.cos(t*2.5+o*1.1)*.2*i,r.x+=r.vx*i,r.y+=r.vy*i,r.z+=r.vz*i,e[o*3]=r.x,e[o*3+1]=r.y,e[o*3+2]=r.z;const a=Math.sin(t*6+r.sparklePhase)*.5+.5,l=Math.min(r.life/2,1);n[o]=(.15+a*.2)*l}gi.geometry.attributes.position.needsUpdate=!0,gi.geometry.attributes.size.needsUpdate=!0,s||(gi.visible=!1)}function vT(i){va=i.orbs,Hn=i.obeliskGroup,eo=i.obeliskMat,no=i.obeliskGlowMat,_e=i.pinnacleOrb,io=i.pinnacleRings||[],is=i.moatMesh,Ff=i.moatMat,di=i.rainbowArcs,Ma=i.player,Zg=i.makeLaser,$g=i.orbHudEl,Zf=i.deers||[],$f=i.puffs||[],jf=i.jellies||[],Kf=i.moths||[],Qo=i.trees||[],Jf=i.treeMeshes||[],tr=i.groundMesh||null,Of=i.playOrbCollect||null,Bf=i.playOrbWarble||null,Gf=i.playLaserZap||null,kf=i.playLaserHum||null,cl=i.stopLaserHums||null,Hf=i.notifyOrbCollected||null,Vf=i.playOrbReject||null,Wf=i.showOrbRejectHint||null,Xf=i.showOrbDiscovery||null,qf=i.spawnOrbBurst||null,Yf=i.startResonanceDrone||null,ho=i.runeFaces||[],mT()}function MT(i,t){kc>0&&(kc-=i);let e=null,n=1/0;for(let l=0;l<va.length;l++){const u=va[l];if(u.found)continue;const c=u.x-Ma.pos.x,p=u.z-Ma.pos.z,f=c*c+p*p;f<n&&(n=f,e=u)}if(e&&n<Vo*Vo){const l=Math.sin(t*2+e.phase)*.5+.5;ga.position.set(e.x,1,e.z),ga.intensity=1+l*2,ga.distance=Vo}else ga.intensity=0;for(let l=0;l<va.length;l++){const u=va[l];if(!(u.found&&!u.flyUp&&!u._flashing)){if(!u.found){const c=Math.sin(t*1.5+u.phase)*.5+.5;u.group.position.y=u.flyY+Math.sin(t*.8+u.phase)*.3,u.glowMat.opacity=.3+c*.4,u.hazeMat.opacity=.08+c*.12;const p=u.x-Ma.pos.x,f=u.z-Ma.pos.z,d=p*p+f*f,g=Vo*Vo;if(d<g){const x=1-Math.sqrt(d)/Vo,h=x*x;u.glowMat.opacity=Math.min(.3+c*.4+h*.5,1),u.hazeMat.opacity=Math.min(.08+c*.12+h*.25,.6),u.coreMat.color.copy(pT).lerp(dT,1-h);const m=1+h*.3;u.group.scale.setScalar(m)}else u.group.scale.setScalar(1);for(let x=3;x<u.group.children.length;x++){const h=u.group.children[x],m=(x-3)/6*6.28+t*1.5;h.position.x=Math.cos(m)*.4,h.position.z=Math.sin(m)*.4,h.position.y=Math.sin(m*2+t)*.1}if(d<wp*wp)if(Jd()){u.found=!0,u._flashing=!0,u._flashTimer=0,u.flyY=u.group.position.y,ti++,hT();const h=$g||document.getElementById("orb-hud");h&&(h.innerHTML="✦ "+ti+" / "+vn),cn==="SEEK"&&(cn="RISING"),Of&&Of(),Hf&&Hf(l),Xf&&Xf(ti-1),qf&&qf(u.x,u.group.position.y,u.z),Yf&&Yf(ti);const m=ti-1;if(m<ho.length){const M=ho[m];M.revealed=!0,M.revealTimer=0;for(let v=0;v<M.meshes.length;v++)M.meshes[v].visible=!0}ti>=vn&&yT()}else kc<=0&&(Vf&&Vf(),Wf&&Wf(),kc=3)}if(u._flashing){u._flashTimer+=i;const c=Math.min(u._flashTimer/1.5,1),p=c<.3?c/.3:1-(c-.3)/.7;u.glowMat.opacity=.5+p*.5,u.hazeMat.opacity=.3+p*.5,u.group.scale.setScalar(1+p*.6),u.group.position.x=u.x+Math.sin(t*30)*p*.05,u.group.position.z=u.z+Math.cos(t*25)*p*.05,u._flashTimer>1.5&&(u._flashing=!1,u.flyUp=!0,u.group.position.x=u.x,u.group.position.z=u.z,Bf&&Bf())}if(u.flyUp){const c=Ce+5;u.flyY+=(c-u.flyY)*i*.8,u.group.position.y=u.flyY;const p=Math.min((u.flyY-1)/(c-1),1);if(u.group.scale.setScalar(1-p*.6),u.glowMat.opacity=.8-p*.5,u.flyY>c-1&&!u.laserLine){u.flyUp=!1,u.group.visible=!1;const f=rh();u.laserLine=Zg(u.x,u.z,0,f),Gf&&Gf(),kf&&kf(u.x,u.z)}}}}const s=Ce/vn,o=-Ce+ti*s;if(Rs<o-.01?(Rs+=8*i,Rs>o&&(Rs=o),Hn&&(Hn.position.y=Rs,Hn.position.x=Math.sin(t*25)*.04,Hn.position.z=Math.cos(t*30)*.03)):Hn&&(Hn.position.x*=.9,Hn.position.z*=.9),ti>=vn&&Rs>=-.01&&cn==="RISING"&&(cn="COMPLETE",dn=0),Hn){Hn.rotation.y+=i*.03;const l=Hn.children[Hn.children.length-1];if(l&&l.isLight){const u=Math.max(0,Math.min(1,(Rs+Ce)/Ce));l.intensity=u*1.5*(.8+Math.sin(t*1.5)*.2)}}for(let l=0;l<ho.length;l++){const u=ho[l];if(!u.revealed)continue;u.revealTimer+=i;const c=Math.min(u.revealTimer/2,1),p=Math.sin(t*1.5+l*1.57)*.1+.9;u.mat.opacity=c*.6*p}if(_e&&_e.mesh.visible){const l=Math.sin(t*2)*.5+.5;_e.mat.opacity=.6+l*.3,_e.hazeMat.opacity=.15+l*.12;const u=ti/vn;_e.mat.opacity*=.3+u*.7,_e.hazeMat.opacity*=.2+u*.8}for(let l=0;l<io.length;l++){const u=io[l];if(!u.mesh.visible)continue;u.mesh.rotation.x+=u.rx*i,u.mesh.rotation.y+=u.ry*i,u.mesh.rotation.z+=u.rz*i;const c=ti/vn;u.mat.opacity=(.15+c*.35)*(.8+Math.sin(t*1.5+l)*.2)}const a=rh();if(cT(i,t,a),cn==="COMPLETE"&&dn>3?Yp(Math.max(0,1-(dn-3)/4)):(cn==="FINALE"||cn==="TRANSFORM")&&(Yp(0),cl&&(cl(),cl=null)),xT(i,t),cn==="COMPLETE"){dn+=i;const l=Math.min(dn/3,1);if(eo&&(eo.emissiveIntensity=l*1.5),no&&(no.emissiveIntensity=l*2.5),_e&&_e.mesh.visible&&dn>1&&dn<3){const u=Math.min((dn-1)/1.5,1);_e.mat.opacity=.9+u*.1,_e.hazeMat.opacity=.5+u*.5,_e.mesh.scale.setScalar(1+u*.5),_e.haze.scale.setScalar(1+u*1);for(let c=0;c<io.length;c++){const p=io[c];p.mesh.rotation.x+=p.rx*i*(1+u*4),p.mesh.rotation.y+=p.ry*i*(1+u*4),p.mesh.rotation.z+=p.rz*i*(1+u*4)}}if(_e&&_e.mesh.visible&&dn>=3&&!jg){const u=new F;_e.mesh.getWorldPosition(u),gT(u.x,u.y,u.z),_e.mesh.visible=!1,_e.haze.visible=!1;for(let c=0;c<io.length;c++)io[c].mesh.visible=!1}if(dn>3&&Ff){const u=Math.min((dn-3)/4,1);Ff.opacity=u*.6,is&&(is.visible||(is.visible=!0),is.position.y=.05+Math.sin(t*3)*.02*u)}if(dn>4)for(let u=0;u<di.length;u++){const c=u*.3,p=Math.min(Math.max((dn-4-c)/2,0),1);p>0&&!di[u].mesh.visible&&(di[u].mesh.visible=!0),di[u].mat.opacity=p*.55,di[u].mesh.rotation.y+=i*.1*(u+1)*.3}if(dn>3){const u=Math.min((dn-3)/6,1)*2;for(let c=0;c<Zf.length;c++){const p=Zf[c],f=p.group,d=-f.position.x,g=-f.position.z,x=Math.sqrt(d*d+g*g);x>8?(p.wanderAng=Math.atan2(-f.position.x,-f.position.z),p.state="walk",p.speed=1.5*u,f.position.x+=d/x*p.speed*i,f.position.z+=g/x*p.speed*i,f.rotation.y=p.wanderAng):p.state="pause"}for(let c=0;c<$f.length;c++){const p=$f[c],f=p.group,d=-f.position.x,g=-f.position.z,x=Math.sqrt(d*d+g*g);x>8&&(p.wanderAng=Math.atan2(-f.position.x,-f.position.z),p.state="hop",p.hopTimer=p.hopTimer%1.2,f.position.x+=d/x*1.5*u*i,f.position.z+=g/x*1.5*u*i)}for(let c=0;c<jf.length;c++){const p=jf[c],f=p.group;f.position.x+=(0-f.position.x)*i*.15*u,f.position.z+=(0-f.position.z)*i*.15*u}for(let c=0;c<Kf.length;c++){const p=Kf[c];p.centerX+=(0-p.centerX)*i*.2*u,p.centerZ+=(0-p.centerZ)*i*.2*u,p.orbitR=Math.max(p.orbitR-i*.3*u,2)}}dn>12&&(cn="FINALE",console.log("✦ Quest → FINALE"))}if(cn==="FINALE"){Zp+=i,eo&&(eo.emissiveIntensity=1.5+Math.sin(t*.5)*.3),no&&(no.emissiveIntensity=2.5+Math.sin(t*.7)*.5),is&&(is.position.y=.05+Math.sin(t*3)*.02);for(let l=0;l<di.length;l++)di[l].mesh.rotation.y+=i*.1*(l+1)*.3,di[l].mat.opacity=.45+Math.sin(t+l)*.1;Zp>30&&(cn="TRANSFORM",an=0,_T(),console.log("✦ Quest → TRANSFORM (trees="+Qo.length+")"))}if(cn==="TRANSFORM"){an+=i,eo&&(eo.emissiveIntensity=1.5+Math.sin(t*.5)*.3),no&&(no.emissiveIntensity=2.5+Math.sin(t*.7)*.5),is&&(is.position.y=.05+Math.sin(t*3)*.02);for(let p=0;p<di.length;p++)di[p].mesh.rotation.y+=i*.1*(p+1)*.3,di[p].mat.opacity=.45+Math.sin(t+p)*.1;if(an<3&&Ui.length<Qo.length){const p=Math.min(Math.floor(an/3*Qo.length),Qo.length);for(;Ui.length<p;){const f=Ui.length,d=Qo[f],g=rh(),x=new Nd(new F(0,g,0),new F(d.x,0,d.z)),h=new $({color:N.laserPink,transparent:!0,opacity:0,blending:Jt,depthWrite:!1}),m=new P(new xn(x,8,.06,4,!1),h);ot.add(m);const M=new $({color:N.laserGlow,transparent:!0,opacity:0,blending:Jt,depthWrite:!1}),v=new P(new xn(x,8,.18,4,!1),M);ot.add(v),Ui.push({tube:m,glow:v,mat:h,glowMat:M,timer:0})}}const l=an>=13?Math.min((an-13)/30,1):0,u=l*l*(3-2*l);for(let p=0;p<Ui.length;p++){const f=Ui[p];f.timer+=i;const d=Math.min(f.timer/.5,1)*(1-u),g=1-u,x=Math.sin(t*3+p*.5)*.5*g+.5;f.mat.opacity=d*(.6+x*.4),f.glowMat.opacity=d*(.2+x*.15)}if(l>=1&&Ui.length>0){for(let p=0;p<Ui.length;p++){const f=Ui[p];ot.remove(f.tube),f.tube.geometry.dispose(),f.mat.dispose(),ot.remove(f.glow),f.glow.geometry.dispose(),f.glowMat.dispose()}Ui.length=0}an>=13&&!jp&&(oT(),jp=!0);let c=0;if(an>=3&&an<6?c=(an-3)/3:an>=6&&an<10?(c=1,$p||(wT(),$p=!0,console.log("✦ Trees + ground transformed"))):an>=10&&an<13&&(c=1-(an-10)/3),lr&&(lr.style.opacity=c),an>=13&&_e&&!_e.mesh.visible&&(_e.mesh.visible=!0,_e.haze.visible=!0,_e.mesh.scale.setScalar(1.2),_e.haze.scale.setScalar(1.8)),an>=13&&_e&&_e.mesh.visible){const p=Math.sin(t*1.5)*.5+.5;_e.mat.opacity=.85+p*.15,_e.hazeMat.opacity=.3+p*.2}}}function yT(){if(!Hn)return;const i=Hn.children;for(let t=0;t<i.length;t++){const e=i[t];if(!e.visible&&e.isMesh){let n=!1;for(let s=0;s<ho.length;s++){const o=ho[s].meshes;for(let r=0;r<o.length;r++)if(o[r]===e){n=!0;break}if(n)break}n||(e.visible=!0)}}}function rh(){return Rs+Ce+3}function _T(){lr||(lr=document.createElement("div"),lr.style.cssText="position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;opacity:0;pointer-events:none;z-index:9999;",document.body.appendChild(lr))}function wT(){const i=[{color:6692928,glow:16724889,core:16737996},{color:4855888,glow:13386973,core:15628287},{color:5577264,glow:16729241,core:16746700},{color:3807328,glow:11158766,core:13400063},{color:5251136,glow:15619515,core:16751069}];for(let t=0;t<Jf.length;t++){const e=Jf[t],n=i[t%i.length];e.trunkMat&&(e.trunkMat.color.set(6964528),e.trunkMat.emissive.set(13404228),e.trunkMat.emissiveIntensity=1.2),e.canopyMat&&(e.canopyMat.color.set(n.core),e.canopyMat.emissive.set(n.glow),e.canopyMat.emissiveIntensity=3.5),e.glowMat&&(e.glowMat.color.set(n.glow),e.glowMat.emissive.set(n.glow),e.glowMat.emissiveIntensity=1.2),e.detailMat&&(e.detailMat.color.set(n.color),e.detailMat.emissive.set(n.glow),e.detailMat.emissiveIntensity=1.5)}if(dS(1),tr&&tr.material){tr.material.emissive.set(5905018),tr.material.emissiveIntensity=1;const t=tr.geometry.attributes.color;if(t){const e=t.array;for(let n=0;n<e.length;n+=3){const s=e[n],o=e[n+1],r=e[n+2];e[n]=s*.45+r*.25+o*.1,e[n+1]=o*.1,e[n+2]=r*.6+o*.45+s*.1}t.needsUpdate=!0}}}const ST=600;let Hc=.25,me=1,Kp=.85,Xe="NIGHT",ya=null,_a=null,Qf=null,wa=null,ll=null;const Jp=[{label:"DUSK",sky:new it(923685),fog:new it(791584),fogDensity:.009,moonInt:.6,moonCol:new it(14527112),moonElev:15,ambSky:new it(4469589),ambGnd:new it(2238488),ambInt:.6,stars:.4,bio:.7,plRange:16,plInt:.5},{label:"NIGHT",sky:new it(330264),fog:new it(528408),fogDensity:.01,moonInt:1,moonCol:new it(12307694),moonElev:55,ambSky:new it(3359846),ambGnd:new it(1587232),ambInt:.7,stars:.85,bio:1,plRange:18,plInt:.55},{label:"DEEP_NIGHT",sky:new it(198160),fog:new it(397332),fogDensity:.012,moonInt:.55,moonCol:new it(8952251),moonElev:75,ambSky:new it(1712708),ambGnd:new it(1188888),ambInt:.5,stars:1,bio:1.5,plRange:22,plInt:.7},{label:"DAWN",sky:new it(1187888),fog:new it(923688),fogDensity:.011,moonInt:.5,moonCol:new it(13417386),moonElev:20,ambSky:new it(3354197),ambGnd:new it(1843224),ambInt:.55,stars:.35,bio:.65,plRange:17,plInt:.5}],bs=new it,Qp=new it;function bT(i){ya=i.scene,_a=i.moon,Qf=i.moon2,wa=i.hemiLight,ll=i.playerLight}function TT(i){if(!ya)return;Hc=(Hc+i/ST)%1;const t=Hc*4,e=Math.floor(t)%4,n=(e+1)%4,s=t-Math.floor(t),o=.5-.5*Math.cos(s*Math.PI),r=Jp[e],a=Jp[n];Xe=o<.5?r.label:a.label;const l=(u,c)=>u+(c-u)*o;if(bs.copy(r.sky).lerp(a.sky,o),ya.background.copy(bs),bs.copy(r.fog).lerp(a.fog,o),ya.fog.color.copy(bs),ya.fog.density=l(r.fogDensity,a.fogDensity),_a){bs.copy(r.moonCol).lerp(a.moonCol,o),_a.color.copy(bs),_a.intensity=l(r.moonInt,a.moonInt);const u=Hc*Math.PI*2,c=l(r.moonElev,a.moonElev)*Math.PI/180,p=60;_a.position.set(Math.cos(u)*Math.cos(c)*p,Math.sin(c)*p,Math.sin(u)*Math.cos(c)*p)}if(Qf){const u=l(r.moonInt,a.moonInt)/.85;Qf.intensity=.3*u}wa&&(bs.copy(r.ambSky).lerp(a.ambSky,o),Qp.copy(r.ambGnd).lerp(a.ambGnd,o),wa.color.copy(bs),wa.groundColor.copy(Qp),wa.intensity=l(r.ambInt,a.ambInt)),ll&&(ll.distance=l(r.plRange,a.plRange),ll.intensity=l(r.plInt,a.plInt)),Kp=l(r.stars,a.stars),wS(Kp),me=l(r.bio,a.bio)}let fo=0,hr=0,ms=0,Tr="CLEAR",xs=!1,ki=0;const ul={CLEAR:{fogMult:1,windBase:.3,rainRate:0,skyDarken:0,mistCount:0,duration:[90,180]},MISTY:{fogMult:1.8,windBase:.2,rainRate:0,skyDarken:.05,mistCount:6,duration:[60,150]},LIGHT_RAIN:{fogMult:1.3,windBase:.6,rainRate:.3,skyDarken:.1,mistCount:2,duration:[60,120]},HEAVY_RAIN:{fogMult:1.6,windBase:1,rainRate:.8,skyDarken:.2,mistCount:3,duration:[45,100]},FOG_BANK:{fogMult:2.5,windBase:.15,rainRate:0,skyDarken:.1,mistCount:8,duration:[60,120]},LUMINOUS_STORM:{fogMult:1.4,windBase:1.5,rainRate:.6,skyDarken:.15,mistCount:2,duration:[40,90]}},ET={CLEAR:{MISTY:.4,LIGHT_RAIN:.3,FOG_BANK:.2,LUMINOUS_STORM:.1},MISTY:{CLEAR:.3,LIGHT_RAIN:.3,FOG_BANK:.3,HEAVY_RAIN:.1},LIGHT_RAIN:{CLEAR:.2,MISTY:.2,HEAVY_RAIN:.4,LUMINOUS_STORM:.2},HEAVY_RAIN:{LIGHT_RAIN:.4,LUMINOUS_STORM:.3,MISTY:.2,CLEAR:.1},FOG_BANK:{MISTY:.4,CLEAR:.3,LIGHT_RAIN:.2,LUMINOUS_STORM:.1},LUMINOUS_STORM:{HEAVY_RAIN:.3,MISTY:.3,CLEAR:.2,LIGHT_RAIN:.2}};let er="CLEAR",Yo=null,hl=0,Vc=0,ah=0,Wc=!1,Xc=0,ch=Math.random()*Math.PI*2,lh=0,uh=0;const td=[],AT=8;let tm=!1,hh=0,qc=1,fl=0,Yc=0,fh=0;function RT(){const i=ET[er],t=Object.entries(i);let e=0;for(const[,s]of t)e+=s;let n=Math.random()*e;for(const[s,o]of t)if(n-=o,n<=0)return s;return t[0][0]}function CT(){if(tm)return;const i=document.createElement("canvas");i.width=128,i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(64,32,0,64,32,64);e.addColorStop(0,"rgba(255,255,255,0.5)"),e.addColorStop(.3,"rgba(255,255,255,0.25)"),e.addColorStop(.7,"rgba(255,255,255,0.06)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,64);const n=new Ka(i),s=new he(40,14);for(let o=0;o<AT;o++){const r=new $({map:n,color:5596791,transparent:!0,opacity:0,side:Ct,depthWrite:!1}),a=new P(s,r);a.visible=!1,ot.add(a),td.push({mesh:a,mat:r,active:!1,drift:Math.random()*Math.PI*2,speed:.3+Math.random()*.4,baseY:.8+Math.random()*2,wobble:Math.random()*Math.PI*2})}tm=!0}function PT(){CT();const i=ul.CLEAR.duration;hl=i[0]+Math.random()*(i[1]-i[0])}function IT(i,t,e){if(Wc)if(Vc-=i,Vc<=0){er=Yo,Yo=null,Wc=!1;const o=ul[er].duration;hl=o[0]+Math.random()*(o[1]-o[0]),Xc=0}else Xc=1-Vc/ah;else hl-=i,hl<=0&&(Yo=RT(),Wc=!0,ah=30+Math.random()*60,Vc=ah,Xc=0);const n=ul[er];if(Wc&&Yo){const o=ul[Yo],r=.5-.5*Math.cos(Xc*Math.PI),a=(l,u)=>l+(u-l)*r;qc=a(n.fogMult,o.fogMult),fl=a(n.rainRate,o.rainRate),Yc=a(n.skyDarken,o.skyDarken),fh=a(n.mistCount,o.mistCount),ms=a(n.windBase,o.windBase),Tr=r<.5?er:Yo}else qc=n.fogMult,fl=n.rainRate,Yc=n.skyDarken,fh=n.mistCount,ms=n.windBase,Tr=er;xs=Tr==="LUMINOUS_STORM",ch+=(Math.sin(t*.05)*.2+Math.sin(t*.13)*.1)*i,lh-=i,lh<=0&&(lh=2+Math.random()*6,uh=Math.random()*.8),uh*=Math.pow(.3,i);const s=ms+uh;if(fo=Math.cos(ch)*s,hr=Math.sin(ch)*s,ot.fog.density*=qc,Yc>.001){const o=ot.background,r=1-Yc;o.r*=r,o.g*=r,o.b*=r}if(e){const o=Math.round(fh);for(let r=0;r<td.length;r++){const a=td[r];if(r<o){a.active||(a.active=!0,a.mesh.visible=!0,a.drift=Math.random()*Math.PI*2);const l=10+Math.sin(t*.3+a.wobble)*8,u=a.drift+t*a.speed*.05;a.mesh.position.set(e.x+Math.cos(u)*l,a.baseY+Math.sin(t*.4+a.wobble)*.5,e.z+Math.sin(u)*l),a.mesh.rotation.y=u+Math.PI/2,a.drift+=fo*i*.02;const c=.03+qc*.012;a.mat.opacity+=(c-a.mat.opacity)*i*2}else a.active&&(a.mat.opacity-=i*.5,a.mat.opacity<=.005&&(a.active=!1,a.mesh.visible=!1,a.mat.opacity=0))}}return xs&&(hh-=i,hh<=0&&(hh=1+Math.random()*4,ki=1)),ki*=Math.pow(.02,i),ki<.01&&(ki=0),fl}function Da(){return fl}const Di=300,ua=new Float32Array(Di),ha=new Float32Array(Di),fa=new Float32Array(Di),dh=new Float32Array(Di),ph=new Float32Array(Di),mh=new Float32Array(Di),so=new Float32Array(Di),ii=new Float32Array(Di*6);let po=null,ed=null;function LT(){const i=new Ae;i.setAttribute("position",new ze(ii,3)),ed=new Id({color:8952251,transparent:!0,opacity:.3,depthWrite:!1}),po=new qv(i,ed),po.frustumCulled=!1,po.visible=!1,ot.add(po);for(let t=0;t<Di;t++)so[t]=0,Kg(t)}function Kg(i){const t=i*6;ii[t]=0,ii[t+1]=-100,ii[t+2]=0,ii[t+3]=0,ii[t+4]=-100,ii[t+5]=0}function DT(i,t,e,n,s){if(!po)return;const o=e>.01;if(po.visible=o,!o)return;ed.opacity=Math.min(.15+e*.35,.5);const r=Math.floor(e*12*i*60);for(let l=0;l<r;l++){let u=-1;for(let f=0;f<Di;f++)if(so[f]<=0){u=f;break}if(u===-1)break;const c=Math.random()*Math.PI*2,p=Math.random()*30;ua[u]=t.x+Math.cos(c)*p,ha[u]=12+Math.random()*10,fa[u]=t.z+Math.sin(c)*p,dh[u]=n*2+(Math.random()-.5)*.3,ph[u]=-12-Math.random()*8,mh[u]=s*2+(Math.random()-.5)*.3,so[u]=2+Math.random()*1.5}const a=.06;for(let l=0;l<Di;l++){if(so[l]<=0)continue;if(so[l]-=i,so[l]<=0||ha[l]<Dt(ua[l],fa[l])+.1){so[l]=0,Kg(l);continue}ua[l]+=dh[l]*i,ha[l]+=ph[l]*i,fa[l]+=mh[l]*i;const u=l*6;ii[u]=ua[l],ii[u+1]=ha[l],ii[u+2]=fa[l],ii[u+3]=ua[l]+dh[l]*a,ii[u+4]=ha[l]+ph[l]*a,ii[u+5]=fa[l]+mh[l]*a}po.geometry.attributes.position.needsUpdate=!0}let ge=null,ci=null,Zr=null;const em=[0,2,4,7,9],UT=261.63,nd=[0,-3,5,4],NT=16;let dl=0,go=0,pl=0,ml=2,gl=10,xl=5,vl=0,Sa=[],ba=[],Jg=!1;function zT(i,t,e){ge=i,Zr=e,ci=ge.createGain(),ci.gain.value=.6,ci.connect(t),dl=0,go=nd[0],pl=0,vl=0,ml=2,gl=8,xl=5,Sa=[],ba=[],Jg=!0}function Er(i,t){const e=em.length,n=Math.floor(i/e)+(t||0),s=(i%e+e)%e,o=em[s];return UT*Math.pow(2,n+o/12)}function FT(i){if(!ge||!ci)return;const t=ge.currentTime;for(let a=0;a<ba.length;a++)ba[a].gain.linearRampToValueAtTime(.001,t+4);for(let a=0;a<Sa.length;a++)Sa[a].stop(t+4.5);Sa=[],ba=[];const e=[Er(i,-2),Er(i+2,-2),Er(i,-1)],n=ge.createGain();n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(.06,t+4);const s=ge.createBiquadFilter();s.type="lowpass",s.frequency.value=200;const o=ge.createOscillator();o.type="sine",o.frequency.value=.05;const r=ge.createGain();r.gain.value=50,o.connect(r).connect(s.frequency),o.start(t),o.stop(t+35);for(let a=0;a<e.length;a++){const l=ge.createOscillator();l.type=a===0?"triangle":"sine",l.frequency.value=e[a]*(1+(Math.random()*.004-.002)),l.connect(s),l.start(t),l.stop(t+35),Sa.push(l)}s.connect(n),Zr(n,ci,.8),ba.push(n)}function OT(i,t,e){if(!ge||!ci)return;const n=.15,s=ge.currentTime+(t||0),o=ge.createOscillator();o.type="sine";const r=ge.createGain();r.gain.setValueAtTime(0,s),r.gain.linearRampToValueAtTime(n,s+.02),r.gain.exponentialRampToValueAtTime(n*.3,s+.5),r.gain.exponentialRampToValueAtTime(.001,s+3),o.connect(r),Zr(r,ci,.6),o.start(s),o.stop(s+3.5)}function BT(i,t,e){if(!ge||!ci)return;const n=ge.currentTime+0,s=t||6,o=Er(i,1),r=ge.createOscillator();r.type="triangle";const a=ge.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.08,n+1.5),a.gain.setValueAtTime(.08,n+s-1.5),a.gain.linearRampToValueAtTime(.001,n+s);const l=ge.createBiquadFilter();l.type="lowpass",l.frequency.value=o*1.5;const u=ge.createOscillator();u.frequency.value=4;const c=ge.createGain();c.gain.value=o*.01,u.connect(c).connect(r.frequency),r.connect(l).connect(a),Zr(a,ci,.9),u.start(n),r.start(n),u.stop(n+s+.1),r.stop(n+s+.1)}function GT(i,t){if(!ge||!ci)return;const e=ge.currentTime+(t||0),n=Er(i,2),s=ge.createOscillator(),o=ge.createOscillator();s.type="sine",o.type="sine",s.frequency.value=n,o.frequency.value=n*1.005;const r=ge.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.04,e+.01),r.gain.exponentialRampToValueAtTime(.001,e+4),s.connect(r),o.connect(r),Zr(r,ci,.8),s.start(e),o.start(e),s.stop(e+4.5),o.stop(e+4.5)}function kT(i){if(!ge||!ci)return;const t=ge.currentTime,e=Er(i,-3),n=ge.createOscillator();n.type="sine",n.frequency.value=e;const s=ge.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(.15,t+.5),s.gain.exponentialRampToValueAtTime(.001,t+3),n.connect(s),Zr(s,ci,.3),n.start(t),n.stop(t+3.5)}function HT(){const i=3+Math.floor(Math.random()*3);let t=go+(Math.random()<.5?0:2);for(let e=0;e<i;e++)OT(t,e*.3),t+=Math.random()<.7?1:2;return 4+Math.random()*6}function VT(){const i=6+Math.random()*4,t=[0,1,2,4],e=go+t[Math.floor(Math.random()*t.length)];return BT(e,i),i+8+Math.random()*10}function WT(){const i=1+Math.floor(Math.random()*3);for(let t=0;t<i;t++){const e=go+Math.floor(Math.random()*5);GT(e,t*.5+Math.random()*.2)}return 8+Math.random()*12}function XT(i,t,e,n){!Jg||!ge||(pl-=i,pl<=0&&(go=nd[dl],FT(go),dl=(dl+1)%nd.length,pl=NT),vl-=i,vl<=0&&(kT(go),vl=8),ml-=i,ml<=0&&(ml=HT()),gl-=i,gl<=0&&(gl=VT()),xl-=i,xl<=0&&(xl=WT()))}let K=null,fe=null,id=null,qe=!1,on=!1,jl=null,gh=null,Ua=null,qT=null,Qg=null,YT=null,ZT=null,tx=null,$T=null,ex=null,nx=null,jT=null,ix=null,sx=null,xh=0,KT=null,ox=null,JT=null;const vi={jelly:0,puff:0,deer:0,moth:0,puffSing:0};function vh(i,t){const e=K.sampleRate*t,n=K.createBuffer(1,e,K.sampleRate),s=n.getChannelData(0);if(i==="white")for(let r=0;r<e;r++)s[r]=Math.random()*2-1;else if(i==="brown"){let r=0;for(let a=0;a<e;a++){const l=Math.random()*2-1;s[a]=(r+.02*l)/1.02,r=s[a],s[a]*=1.8}}const o=Math.min(Math.floor(K.sampleRate*.5),e>>2);for(let r=0;r<o;r++){const a=r/o,l=e-o+r;s[l]=s[l]*(1-a)+s[r]*a}return n}function da(i,t,e,n){const s=K.createBufferSource();s.buffer=i,s.loop=!0;const o=K.createGain();o.gain.value=t;const r=K.createBiquadFilter();r.type="lowpass",r.frequency.value=e,r.Q.value=.5;const a=K.createBiquadFilter();return a.type="highpass",a.frequency.value=n||40,a.Q.value=.5,s.connect(a).connect(r).connect(o).connect(fe),s.start(),{node:s,gain:o,filter:r}}function QT(){const i=K.createDelay(1);i.delayTime.value=.55;const t=K.createDelay(1);t.delayTime.value=.79;const e=K.createGain();e.gain.value=.35;const n=K.createGain();n.gain.value=.28;const s=K.createBiquadFilter();s.type="lowpass",s.frequency.value=2200;const o=K.createBiquadFilter();o.type="lowpass",o.frequency.value=1800;const r=K.createBiquadFilter();r.type="highpass",r.frequency.value=120,r.Q.value=.5;const a=K.createBiquadFilter();a.type="highpass",a.frequency.value=120,a.Q.value=.5;const l=K.createGain();l.gain.value=.5,i.connect(s).connect(r).connect(e).connect(i),t.connect(o).connect(a).connect(n).connect(t),i.connect(l),t.connect(l),l.connect(fe);const u=K.createGain();u.gain.value=1,u.connect(i),u.connect(t),id=u}function Zn(i,t,e){if(i.connect(t),id&&e>0){const n=K.createGain();n.gain.value=e,i.connect(n).connect(id)}}function tE(){const i=()=>{if(!qe){try{K=new(window.AudioContext||window.webkitAudioContext),fe=K.createGain(),fe.gain.value=.42,fe.connect(K.destination),jl=vh("brown",16),gh=vh("brown",11),Ua=vh("white",9),QT();const t=da(jl,.05,200,50);qT=t.node,Qg=t.gain,YT=t.filter;const e=da(gh,.03,350,80);ZT=e.node,tx=e.gain;const n=da(Ua,0,400,60);$T=n.node,ex=n.gain,nx=n.filter;const s=da(Ua,0,2e3,80);jT=s.node,ix=s.gain,sx=s.filter;const o=da(gh,0,600,60);KT=o.node,ox=o.gain,JT=o.filter,qe=!0}catch(t){console.warn("Audio init failed:",t)}document.removeEventListener("click",i),document.removeEventListener("keydown",i),document.removeEventListener("touchstart",i)}};document.addEventListener("click",i),document.addEventListener("keydown",i),document.addEventListener("touchstart",i)}function eE(i,t,e,n,s,o,r,a){if(!qe||on)return;const l=K.currentTime,u=o==="DEEP_NIGHT"?.07:o==="DAWN"?.03:.05;Qg.gain.linearRampToValueAtTime(u,l+.1),tx.gain.linearRampToValueAtTime(u*.6,l+.1);const c=Math.min(t*.12,.18),p=200+t*600;ex.gain.linearRampToValueAtTime(c,l+.1),nx.frequency.linearRampToValueAtTime(p,l+.1);const f=e*.15,d=1200+e*2e3;ix.gain.linearRampToValueAtTime(f,l+.1),sx.frequency.linearRampToValueAtTime(d,l+.1),s>.5&&xh<=0&&(nE(),xh=2+Math.random()*3),xh-=i;let g=1/0;if(r&&a)for(let m=0;m<a.length;m++){const M=a[m].x-r.x,v=a[m].z-r.z,_=M*M+v*v;_<g&&(g=_)}const h=(g<225?1-Math.sqrt(g)/15:0)*.08;ox.gain.linearRampToValueAtTime(h,l+.1),vi.jelly-=i,vi.puff-=i,vi.deer-=i,vi.moth-=i,vi.puffSing-=i}function nE(){if(!K)return;const i=K.currentTime,t=K.createOscillator(),e=K.createGain(),n=K.createBiquadFilter();t.type="sawtooth",t.frequency.value=50+Math.random()*25,n.type="lowpass",n.frequency.value=120,n.Q.value=1,e.gain.setValueAtTime(.2,i),e.gain.exponentialRampToValueAtTime(.001,i+.8+Math.random()*.5),t.connect(n).connect(e).connect(fe),t.start(),t.stop(i+1.5);const s=K.createBufferSource();s.buffer=jl;const o=K.createGain(),r=K.createBiquadFilter();r.type="lowpass",r.frequency.value=120;const a=K.createBiquadFilter();a.type="highpass",a.frequency.value=45,a.Q.value=.5,o.gain.setValueAtTime(.15,i),o.gain.exponentialRampToValueAtTime(.001,i+1.2),s.connect(a).connect(r).connect(o).connect(fe),s.start(),s.stop(i+1.5)}function Hr(i,t,e){if(!qe||on||vi[i]>0)return;const n=t.x-e.x,s=t.z-e.z,o=n*n+s*s;if(o>900)return;const r=Math.sqrt(o),a=Math.max(0,1-r/30)*.1,l=Math.max(-1,Math.min(1,n/Math.max(r,1))),u=K.createStereoPanner();u.pan.value=l;const c=K.currentTime;switch(i){case"jelly":{const p=360+Math.random()*60,f=K.createOscillator(),d=K.createOscillator();f.type="sine",d.type="sine",f.frequency.setValueAtTime(p,c),d.frequency.setValueAtTime(p+3,c),f.frequency.linearRampToValueAtTime(p-40,c+1.2),d.frequency.linearRampToValueAtTime(p-37,c+1.2);const g=K.createOscillator(),x=K.createGain();g.frequency.value=4,x.gain.value=5,g.connect(x),x.connect(f.frequency),x.connect(d.frequency);const h=K.createGain();h.gain.setValueAtTime(0,c),h.gain.linearRampToValueAtTime(a,c+.15),h.gain.setValueAtTime(a,c+.6),h.gain.exponentialRampToValueAtTime(.001,c+1.4),f.connect(h),d.connect(h),h.connect(u),Zn(u,fe,.4),g.start(c),f.start(c),d.start(c),g.stop(c+1.5),f.stop(c+1.5),d.stop(c+1.5),vi.jelly=4+Math.random()*5;break}case"puff":{const p=500+Math.random()*100,f=[p,p*1.2,p*1.5];for(let d=0;d<f.length;d++){const g=K.createOscillator();g.type="sine",g.frequency.value=f[d];const x=K.createGain(),h=c+d*.07;x.gain.setValueAtTime(0,h),x.gain.linearRampToValueAtTime(a*.5,h+.02),x.gain.exponentialRampToValueAtTime(.001,h+.15),g.connect(x).connect(u),g.start(h),g.stop(h+.18)}Zn(u,fe,.3),vi.puff=8+Math.random()*10;break}case"deer":{const p=100+Math.random()*30,f=K.createOscillator(),d=K.createOscillator();f.type="triangle",d.type="triangle",f.frequency.setValueAtTime(p,c),d.frequency.setValueAtTime(p+2,c),f.frequency.linearRampToValueAtTime(p-15,c+.5),d.frequency.linearRampToValueAtTime(p-13,c+.5);const g=K.createBiquadFilter();g.type="lowpass",g.frequency.value=250,g.Q.value=.5;const x=K.createGain();x.gain.setValueAtTime(0,c),x.gain.linearRampToValueAtTime(a*.7,c+.12),x.gain.setValueAtTime(a*.7,c+.3),x.gain.exponentialRampToValueAtTime(.001,c+.6),f.connect(g),d.connect(g),g.connect(x).connect(u),Zn(u,fe,.3),f.start(c),d.start(c),f.stop(c+.7),d.stop(c+.7),vi.deer=5+Math.random()*6;break}case"moth":{const p=K.createOscillator();p.type="sine",p.frequency.setValueAtTime(200+Math.random()*80,c);const f=K.createOscillator(),d=K.createGain();f.frequency.value=8+Math.random()*4,d.gain.value=12,f.connect(d).connect(p.frequency);const g=K.createGain();g.gain.setValueAtTime(0,c),g.gain.linearRampToValueAtTime(a*.2,c+.05),g.gain.exponentialRampToValueAtTime(.001,c+.25),p.connect(g).connect(u),Zn(u,fe,.2),f.start(c),p.start(c),f.stop(c+.3),p.stop(c+.3),vi.moth=4+Math.random()*5;break}}}let Kl=0;function iE(i,t){if(!qe||on||Kl>0)return;const e=K.currentTime;if(t){const n=K.createBufferSource();n.buffer=Ua;const s=K.createGain(),o=K.createBiquadFilter();o.type="bandpass",o.frequency.value=2e3,o.Q.value=.5,s.gain.setValueAtTime(.05,e),s.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(o).connect(s).connect(fe),n.start(),n.stop(e+.15)}else{const n=K.createOscillator();n.type="sine",n.frequency.value=80+Math.random()*40;const s=K.createGain();s.gain.setValueAtTime(.03,e),s.gain.exponentialRampToValueAtTime(.001,e+.08),n.connect(s).connect(fe),n.start(),n.stop(e+.1)}Kl=i?.22:.35}function sE(){if(!qe||on)return;const i=K.currentTime,t=K.createOscillator();t.type="sine",t.frequency.setValueAtTime(150,i),t.frequency.exponentialRampToValueAtTime(300,i+.1);const e=K.createGain();e.gain.setValueAtTime(.03,i),e.gain.exponentialRampToValueAtTime(.001,i+.15),t.connect(e).connect(fe),t.start(),t.stop(i+.2)}function oE(i){if(!qe||on)return;const t=K.currentTime,e=K.createBufferSource();e.buffer=jl;const n=K.createGain(),s=K.createBiquadFilter();s.type="lowpass",s.frequency.value=200;const o=K.createBiquadFilter();o.type="highpass",o.frequency.value=50,o.Q.value=.5,n.gain.setValueAtTime(i*.05,t),n.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(o).connect(s).connect(n).connect(fe),e.start(),e.stop(t+.25)}function rE(i){Kl>0&&(Kl-=i)}function aE(i,t){if(!qe||on)return;const e=i.x-t.x,n=i.z-t.z,s=e*e+n*n;if(s>400)return;const o=Math.max(0,1-Math.sqrt(s)/20)*.06,r=K.currentTime,a=K.createOscillator();a.type="sine",a.frequency.setValueAtTime(600+Math.random()*300,r),a.frequency.exponentialRampToValueAtTime(200,r+.1);const l=K.createGain();l.gain.setValueAtTime(o,r),l.gain.exponentialRampToValueAtTime(.001,r+.12),a.connect(l).connect(fe),a.start(),a.stop(r+.15)}function cE(){if(!qe||on)return;const i=K.currentTime,t=[440,554,659,880];for(let e=0;e<t.length;e++){const n=K.createOscillator();n.type="sine",n.frequency.setValueAtTime(t[e],i+e*.12);const s=K.createGain();s.gain.setValueAtTime(0,i),s.gain.linearRampToValueAtTime(.05,i+e*.12+.05),s.gain.exponentialRampToValueAtTime(.001,i+e*.12+.7),n.connect(s),Zn(s,fe,.5),n.start(i+e*.12),n.stop(i+e*.12+.8)}}function lE(){if(!qe||on)return;const i=K.currentTime,t=K.createOscillator();t.type="sine",t.frequency.setValueAtTime(300,i),t.frequency.exponentialRampToValueAtTime(1200,i+3);const e=K.createOscillator(),n=K.createGain();e.frequency.setValueAtTime(6,i),e.frequency.linearRampToValueAtTime(12,i+3),n.gain.value=20,e.connect(n).connect(t.frequency);const s=K.createOscillator();s.type="sine",s.frequency.setValueAtTime(600,i),s.frequency.exponentialRampToValueAtTime(2400,i+3);const o=K.createGain();o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(.04,i+.2),o.gain.setValueAtTime(.04,i+2),o.gain.exponentialRampToValueAtTime(.001,i+3.5),t.connect(o),s.connect(o),Zn(o,fe,.6),e.start(i),t.start(i),s.start(i),e.stop(i+4),t.stop(i+4),s.stop(i+4)}function uE(){if(!qe||on)return;const i=K.currentTime,t=K.createBufferSource();t.buffer=Ua;const e=K.createBiquadFilter();e.type="bandpass",e.frequency.setValueAtTime(3e3,i),e.frequency.exponentialRampToValueAtTime(500,i+.3),e.Q.value=2;const n=K.createGain();n.gain.setValueAtTime(.08,i),n.gain.exponentialRampToValueAtTime(.001,i+.3),t.connect(e).connect(n).connect(fe);const s=K.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(2e3,i),s.frequency.exponentialRampToValueAtTime(100,i+.15);const o=K.createBiquadFilter();o.type="lowpass",o.frequency.value=4e3;const r=K.createGain();r.gain.setValueAtTime(.06,i),r.gain.exponentialRampToValueAtTime(.001,i+.2),s.connect(o).connect(r),Zn(r,fe,.3);const a=K.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(80,i+.15),a.frequency.linearRampToValueAtTime(55,i+2);const l=K.createBiquadFilter();l.type="bandpass",l.frequency.value=180,l.Q.value=3;const u=K.createGain();u.gain.setValueAtTime(0,i),u.gain.linearRampToValueAtTime(.03,i+.2),u.gain.exponentialRampToValueAtTime(.001,i+2),a.connect(l).connect(u).connect(fe),t.start(i),t.stop(i+.4),s.start(i),s.stop(i+.25),a.start(i+.1),a.stop(i+2.2)}const Ar=[];function hE(i,t){if(!qe||on)return;const e=K.currentTime,n=K.createOscillator();n.type="sawtooth",n.frequency.value=55+Math.random()*10;const s=K.createOscillator(),o=K.createGain();s.type="square",s.frequency.value=120+Math.random()*60,o.gain.value=15,s.connect(o).connect(n.frequency);const r=K.createBiquadFilter();r.type="bandpass",r.frequency.value=200,r.Q.value=3;const a=K.createGain();a.gain.value=0;const l=K.createStereoPanner();n.connect(r).connect(a).connect(l).connect(fe),s.start(e),n.start(e),Ar.push({osc:n,mod:s,gain:a,panner:l,filter:r,x:i,z:t})}function fE(i){if(!qe||!K)return;const t=K.currentTime;for(let e=0;e<Ar.length;e++){const n=Ar[e],s=n.x-i.x,o=n.z-i.z,r=s*s+o*o,a=Math.sqrt(r),l=r<625?Math.max(0,1-a/25)*.04:0;n.gain.gain.linearRampToValueAtTime(l,t+.1);const u=Math.max(-1,Math.min(1,s/Math.max(a,1)));n.panner.pan.linearRampToValueAtTime(u,t+.1),n.filter.frequency.value=180+Math.sin(t*.5+e)*40}}function dE(){if(!K)return;const i=K.currentTime;for(let t=0;t<Ar.length;t++){const e=Ar[t];e.gain.gain.linearRampToValueAtTime(0,i+.5),e.osc.stop(i+.6),e.mod.stop(i+.6)}Ar.length=0}const nm=[0,2,4,7,9],pE=261.63;function sd(i,t){const e=nm.length,n=Math.floor(i/e)+(t||0),s=(i%e+e)%e;return pE*Math.pow(2,n+nm[s]/12)}function im(i,t,e,n){if(!qe||on||vi.puffSing>0)return;const s=i.x-t.x,o=i.z-t.z,r=s*s+o*o;if(r>900)return;const a=Math.sqrt(r),l=Math.max(0,1-a/30)*.06,u=Math.max(-1,Math.min(1,s/Math.max(a,1))),c=K.createStereoPanner();c.pan.value=u;const p=K.currentTime;let f,d,g,x;if(e){f=6+Math.floor(Math.random()*3),d=.15,g=2,x=[];for(let v=0;v<f;v++)v<5?x.push(v):x.push(3+Math.floor(Math.random()*2))}else{f=3+Math.floor(Math.random()*2),d=.2,g=1,x=[];for(let v=0;v<f;v++)x.push(Math.max(0,4-v*Math.floor(5/f)))}const h=K.createOscillator(),m=K.createGain();h.type="sine",h.frequency.value=6+Math.random()*4,m.gain.value=25+Math.random()*10,h.connect(m);const M=f*d+.15;for(let v=0;v<f;v++){const _=sd(x[v],g),T=K.createOscillator();T.type="sine",T.frequency.value=_,m.connect(T.frequency);const E=K.createGain(),b=p+v*d;E.gain.setValueAtTime(0,b),E.gain.linearRampToValueAtTime(l,b+.03),E.gain.setValueAtTime(l,b+d-.06),E.gain.exponentialRampToValueAtTime(.001,b+d+.06),T.connect(E).connect(c),T.start(b),T.stop(b+d+.08)}if(n>.1){const v=l*n*.4;for(let _=0;_<Math.min(f,5);_++){const T=sd(x[_],g)*1.5,E=K.createOscillator();E.type="sine",E.frequency.value=T,m.connect(E.frequency);const b=K.createGain(),R=p+_*d;b.gain.setValueAtTime(0,R),b.gain.linearRampToValueAtTime(v,R+.04),b.gain.exponentialRampToValueAtTime(.001,R+d+.04),E.connect(b).connect(c),E.start(R),E.stop(R+d+.06)}}Zn(c,fe,.4),h.start(p),h.stop(p+M+.2),vi.puffSing=n>.3?2+Math.random()*2:4+Math.random()*4}function mE(i,t){if(!qe||on)return;const e=i.x-t.x,n=i.z-t.z,s=e*e+n*n;if(s>900)return;const o=Math.sqrt(s),r=Math.max(-1,Math.min(1,e/Math.max(o,1))),a=K.createStereoPanner();a.pan.value=r;const l=K.currentTime,u=[0,1,2,3,4],c=.18,p=K.createOscillator(),f=K.createGain();p.type="sine",p.frequency.value=8,f.gain.setValueAtTime(20,l),f.gain.linearRampToValueAtTime(50,l+u.length*c),p.connect(f);for(let d=0;d<u.length;d++){const g=sd(u[d],2),x=K.createOscillator();x.type="sine",x.frequency.value=g,f.connect(x.frequency);const h=K.createGain(),m=l+d*c,M=d===u.length-1,v=.07;h.gain.setValueAtTime(0,m),h.gain.linearRampToValueAtTime(v,m+.02),M?(h.gain.setValueAtTime(v,m+.5),h.gain.exponentialRampToValueAtTime(.001,m+1.2),x.stop(m+1.3)):(h.gain.exponentialRampToValueAtTime(.001,m+c+.04),x.stop(m+c+.06)),x.connect(h).connect(a),x.start(m);const _=K.createOscillator();_.type="sine",_.frequency.value=g*2,f.connect(_.frequency);const T=K.createGain();T.gain.setValueAtTime(0,m),T.gain.linearRampToValueAtTime(v*.3,m+.03),T.gain.exponentialRampToValueAtTime(.001,m+(M?1:c)+.04),_.connect(T).connect(a),_.start(m),_.stop(m+(M?1.1:c+.06))}Zn(a,fe,.6),p.start(l),p.stop(l+u.length*c+1.5)}function gE(){if(!qe||on)return;const i=K.currentTime,t=K.createOscillator();t.type="sine",t.frequency.setValueAtTime(330,i),t.frequency.exponentialRampToValueAtTime(180,i+.4);const e=K.createOscillator(),n=K.createGain();e.frequency.value=6,n.gain.value=10,e.connect(n).connect(t.frequency);const s=K.createGain();s.gain.setValueAtTime(0,i),s.gain.linearRampToValueAtTime(.03,i+.05),s.gain.exponentialRampToValueAtTime(.001,i+.5),t.connect(s),Zn(s,fe,.3),e.start(i),t.start(i),e.stop(i+.6),t.stop(i+.6)}const sm=[{f1:730,f2:1090},{f1:400,f2:2300},{f1:300,f2:2700},{f1:570,f2:850},{f1:440,f2:1020}];function xE(i,t,e){if(!qe||on)return;const n=t.x-e.x,s=t.z-e.z,o=n*n+s*s;if(o>400)return;const r=Math.sqrt(o),a=Math.max(0,1-r/20)*.05,l=Math.max(-1,Math.min(1,n/Math.max(r,1))),u=K.createStereoPanner();u.pan.value=l;const c=K.currentTime,p=Math.min(Math.ceil(i.length/2),16),f=.07,d=700+Math.random()*200;for(let g=0;g<p;g++){const x=sm[g%sm.length],h=Math.sin(g/p*Math.PI)*.3,m=d*(1+h)*(.9+Math.random()*.2),M=K.createOscillator();M.type="sine",M.frequency.value=m;const v=K.createOscillator();v.type="sine",v.frequency.value=x.f2*(.9+Math.random()*.2);const _=K.createGain(),T=c+g*f;_.gain.setValueAtTime(0,T),_.gain.linearRampToValueAtTime(a,T+.01),_.gain.linearRampToValueAtTime(a*.7,T+f*.6),_.gain.exponentialRampToValueAtTime(.001,T+f);const E=K.createGain();E.gain.setValueAtTime(0,T),E.gain.linearRampToValueAtTime(a*.15,T+.01),E.gain.exponentialRampToValueAtTime(.001,T+f),M.connect(_).connect(u),v.connect(E).connect(u),M.start(T),M.stop(T+f+.02),v.start(T),v.stop(T+f+.02)}Zn(u,fe,.35)}function vE(){if(!qe||on)return;const i=K.currentTime,t=K.createOscillator();t.type="sine",t.frequency.setValueAtTime(400,i),t.frequency.exponentialRampToValueAtTime(900,i+.15);const e=K.createGain();e.gain.setValueAtTime(.06,i),e.gain.exponentialRampToValueAtTime(.001,i+.5),t.connect(e),Zn(e,fe,.4),t.start(),t.stop(i+.6)}let Na=[],rs=null;function ME(i){if(!qe||on)return;yE();const t=K.currentTime;rs=K.createGain(),rs.gain.setValueAtTime(0,t);const e=.015+i*.006;rs.gain.linearRampToValueAtTime(e,t+3),Zn(rs,fe,.7);const n=60,s=[1,2];i>=2&&s.push(1.5),i>=3&&s.push(3),i>=4&&s.push(2.5),i>=5&&s.push(4);for(let a=0;a<s.length;a++){const l=K.createOscillator();l.type="sine",l.frequency.value=n*s[a];const u=K.createGain();u.gain.value=a<2?1:.4,l.connect(u).connect(rs),l.start(t),Na.push({osc:l,gain:u})}const o=K.createOscillator();o.type="sine",o.frequency.value=.15;const r=K.createGain();r.gain.value=e*.3,o.connect(r).connect(rs.gain),o.start(t),Na.push({osc:o,gain:r})}function yE(){if(!K)return;const i=K.currentTime;for(let t=0;t<Na.length;t++)Na[t].osc.stop(i+.5);Na=[],rs&&(rs.gain.linearRampToValueAtTime(0,i+.4),rs=null)}let rx=null,ax=null,cx=null,Mh=0,om=0,Zc=0,yh=0,rm=1,od=!1;function _E(){if(od||!K)return;od=!0;const i=K.createGain();i.gain.value=0;const t=K.createOscillator();t.type="sine",t.frequency.value=160;const e=K.createOscillator();e.type="sine",e.frequency.value=190;const n=K.createBiquadFilter();n.type="lowpass",n.frequency.value=350,n.Q.value=.5,t.connect(n).connect(i),e.connect(n),i.connect(fe),t.start(),e.start(),rx=t,ax=e,cx=i}function wE(i){if(!K||i<.001)return;const t=K.currentTime,e=1800+Math.random()*800,n=K.createOscillator();n.type="sine",n.frequency.value=e,n.frequency.exponentialRampToValueAtTime(e*.88,t+.1);const s=K.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(i*.5,t+.01),s.gain.exponentialRampToValueAtTime(.001,t+.1),n.connect(s).connect(fe),n.start(t),n.stop(t+.12)}function SE(i,t,e,n,s,o){if(!qe||on||(_E(),!od))return;const r=K.currentTime,a=s==="DEEP_NIGHT"||s==="NIGHT"?1:s==="DUSK"?.5:.3;rm=s==="DUSK"||s==="NIGHT"?1:s==="DEEP_NIGHT"?.6:.3;const l=Math.max(.15,1-o*.7);let u=1/0;if(t&&e)for(let x=0;x<e.length;x++){const h=e[x].x-t.x,m=e[x].z-t.z,M=h*h+m*m;M<u&&(u=M)}const c=u<400?1-Math.sqrt(u)/20:0;om+=i*2;const p=.7+.3*Math.sin(om*Math.PI*2),f=c*.025*a*l*p;if(cx.gain.linearRampToValueAtTime(f,r+.15),Mh+=i,Mh>3+Math.random()*4){Mh=0;const x=150+Math.random()*40;rx.frequency.linearRampToValueAtTime(x,r+.5),ax.frequency.linearRampToValueAtTime(x+20+Math.random()*15,r+.5)}let d=1/0;if(t&&n)for(let x=0;x<n.length;x++){const h=n[x].cx-t.x,m=n[x].cz-t.z,M=h*h+m*m;M<d&&(d=M)}const g=d<144?1-Math.sqrt(d)/12:0;if(yh=g*.02*rm*l,yh>.001){if(Zc-=i,Zc<=0){wE(yh);const x=1.5+(1-g)*1.5;Zc=x+Math.random()*x}}else Zc=0}let Jl=!1;function bE(){Jl||!K||(Jl=!0,zT(K,fe,Zn))}function TE(i,t,e,n){!qe||on||(Jl||bE(),Jl&&XT(i))}const EE=["kelu... kelu vash","the deep hums forgot","mori selani dusk","where did the glow sleep?","nesh... so quiet beneath","roots remember, canopy forgets","tavi lum shade shade","the dim eats softly","kelu ori mori still","something drank the light"],AE=["vari lumis! vari lumis!","the roots are singing again","oh the warmth came back","selani bright bright!","tavi ori bloom bloom","can you hear the hum?","lumis kel vari sava","the canopy remembers now","feel it? underneath?","this glow is yours too"],RE=["nesh oravi... close!","the anchor hums here","oravi kel nesh warm","something waits in gold","listen — the orb knows you","nesh! nesh! this way!","carry the voice to it","oravi sel lumis near"],CE=["you feel like us now","vari! vari! you hum!","your light shifts warm","almost... keep running!","sel tavi ori — together!","the song is in you","we can hear your glow"],PE=["you carry our voice now","lumis ori selani vari!","the orbs will hear you","go — sing to the gold!","quick, before it fades","ori nesh — find the anchor!","your glow is our glow"],IE=["kel kel tavi","the moss is whispering","do you see the patterns?","mori ori kel sava","we were here before you","the forest watches back","sel vari nesh quiet","every spore knows the way","tavi kel ori lumis","listen with your feet"];let Wn=null,Ml=0,Ql=0,rd=!1,nr=null;const Zo=new F;function LE(){Wn=document.createElement("div"),Wn.id="puffling-chat",Wn.style.cssText="position:fixed;pointer-events:none;opacity:0;z-index:101;font-family:Georgia,serif;font-size:13px;color:#ffeedd;font-style:italic;text-shadow:0 0 8px #ffaa66,0 0 16px #884422;letter-spacing:1.5px;text-align:center;max-width:220px;padding:4px 10px;transition:opacity 0.4s;background:rgba(20,10,5,0.3);border-radius:8px;",document.body.appendChild(Wn)}function DE(i,t,e,n){let s;return n?s=PE:e>.5?s=CE:t?s=RE:i?s=AE:i?s=IE:s=EE,s[Math.floor(Math.random()*s.length)]}function UE(i,t,e,n,s){if(Ql>0||!Wn)return null;const o=DE(t,e,n,s);return Wn.textContent=o,Wn.style.opacity="1",Ml=3,Ql=8+Math.random()*6,rd=!0,nr=i,o}function NE(i,t){if(Ql>0&&(Ql-=i),!rd||!Wn||!nr)return;if(Ml-=i,Ml<=.8&&Wn&&(Wn.style.opacity="0"),Ml<=0){rd=!1,nr=null;return}Zo.set(nr.position.x,nr.position.y+1.2,nr.position.z),Zo.project(ln);const e=t.clientWidth||window.innerWidth,n=t.clientHeight||window.innerHeight,s=(Zo.x+1)/2*e,o=(-Zo.y+1)/2*n;Zo.z>0&&Zo.z<1?(Wn.style.left=s+"px",Wn.style.top=o+"px",Wn.style.transform="translate(-50%, -100%)"):Wn.style.opacity="0"}function zE(i,t,e,n,s){const o=e.x-i.x,r=e.z-i.z,a=o*o+r*r;if(a>n*n)return!1;if(a<.01)return!0;let u=Math.atan2(r,o)-t;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;return Math.abs(u)<s*.5}function FE(i,t,e,n){const s=t.x-i.x,o=t.z-i.z,r=n?e*1.8:e;return s*s+o*o<r*r}function lx(i,t,e){let n=0,s=0,o=0;for(let r=0;r<t.length;r++){const a=t[r],l=i.x-a.x,u=i.z-a.z,c=l*l+u*u;if(c>.01&&c<e*e){const p=Math.sqrt(c);n+=l/p/p,s+=u/p/p,o++}}return o>0&&(n/=o,s/=o),{x:n,z:s}}function ux(i,t){if(t.length===0)return{x:0,z:0};let e=0,n=0;for(let s=0;s<t.length;s++)e+=t[s].x,n+=t[s].z;return e/=t.length,n/=t.length,{x:e-i.x,z:n-i.z}}function OE(i,t){const e=Math.sqrt(i.x*i.x+i.z*i.z),n=jt-t;if(e<n)return{x:0,z:0};const s=(e-n)/t,o=Math.min(s*2,3);return{x:-i.x/e*o,z:-i.z/e*o}}function BE(i,t,e,n,s){let o=0,r=0;const a=Math.cos(t)*n,l=Math.sin(t)*n,u=i.x+a,c=i.z+l;for(let p=0;p<e.length;p++){const f=e[p],d=u-f.x,g=c-f.z,x=d*d+g*g,h=(f.colR||s)+1;if(x<h*h&&x>.01){const m=Math.sqrt(x),M=(h-m)/h*2;o+=d/m*M,r+=g/m*M}}return{x:o,z:r}}let Wi=null;const yl=2*Math.PI/vn,am=.09,GE=1-gr,ls=[];function kE(i){Wi=i,ls.length=0;for(let t=0;t<Wi.length;t++)ls.push({active:!1,elapsed:0,radius:0})}function HE(i){i>=0&&i<ls.length&&(ls[i].active=!0,ls[i].elapsed=0,ls[i].radius=0)}function VE(i){for(let t=0;t<ls.length;t++){const e=ls[t];e.active&&(e.elapsed+=i,e.radius=e.elapsed*G2,e.radius>=100&&(e.active=!1,e.radius=100))}}function WE(i,t){let e=Math.atan2(t,i);return e<0&&(e+=2*Math.PI),Math.floor(e/yl)%vn}function Te(i,t,e){if(!Wi)return e;let n=Math.atan2(t,i);n<0&&(n+=2*Math.PI);const s=Math.floor(n/yl)%vn;if(s<Wi.length&&Wi[s].found){const l=ls[s];if(l.active){const u=i*i+t*t,c=l.radius*l.radius;if(u>c)return e*gr}return e}const o=n/yl-s,a=Math.min(o,1-o)*yl;if(a<am){const l=o<.5?(s-1+vn)%vn:(s+1)%vn;if(l<Wi.length&&Wi[l].found){const u=a/am,c=gr+GE*(.5+.5*Math.cos(u*Math.PI));return e*c}}return e*gr}function cm(i,t){if(!Wi)return!1;const e=WE(i,t);return e<Wi.length&&Wi[e].found}const ss={deer:!1,puffling:!1,jelly:!1,moth:!1,fairyRing:!1,crystalChain:!1,pond:!1},XE={deer:"Spirit Deer",puffling:"Puffling",jelly:"Luminous Jelly",moth:"Moon Moth",fairyRing:"Fairy Ring",crystalChain:"Crystal Resonance",pond:"Moonlit Pond"},qE=["The First Light Returns","The Forest Remembers","Roots of Radiance","The Veil Thins","Convergence"];let Mi=null,za=0,tu="";function YE(){Mi=document.createElement("div"),Mi.id="discovery-text",Mi.style.cssText="position:fixed;top:28%;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:22px;color:#ccffee;text-shadow:0 0 12px #44ffaa,0 0 30px #228866;pointer-events:none;opacity:0;transition:opacity 0.6s;z-index:100;letter-spacing:3px;text-transform:uppercase;",document.body.appendChild(Mi)}function $s(i){ss[i]||(ss[i]=!0,tu=XE[i],za=3,Mi&&(Mi.textContent=tu,Mi.style.opacity="1"))}function ZE(i){const t=qE[i];t&&(tu=t,za=4,Mi&&(Mi.textContent=tu,Mi.style.opacity="1"))}function $E(i,t,e,n,s,o,r,a){const l=i.x,u=i.z;if(!ss.deer)for(let c=0;c<t.length;c++){const p=t[c].group.position.x-l,f=t[c].group.position.z-u;if(p*p+f*f<144){$s("deer");break}}if(!ss.puffling)for(let c=0;c<e.length;c++){const p=e[c].group.position.x-l,f=e[c].group.position.z-u;if(p*p+f*f<64){$s("puffling");break}}if(!ss.jelly)for(let c=0;c<n.length;c++){const p=n[c].group.position.x-l,f=n[c].group.position.z-u;if(p*p+f*f<100){$s("jelly");break}}if(!ss.moth)for(let c=0;c<s.length;c++){const p=s[c].group.position.x-l,f=s[c].group.position.z-u;if(p*p+f*f<64){$s("moth");break}}if(!ss.fairyRing)for(let c=0;c<o.length;c++){const p=o[c].x-l,f=o[c].z-u;if(p*p+f*f<16){$s("fairyRing");break}}if(!ss.pond)for(let c=0;c<r.length;c++){const p=r[c].x-l,f=r[c].z-u;if(p*p+f*f<25){$s("pond");break}}!ss.crystalChain&&a>=3&&$s("crystalChain")}let os=null,_l=0;function jE(){os||(os=document.createElement("div"),os.id="orb-hint-text",os.style.cssText="position:fixed;top:60%;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:16px;color:#ffddaa;font-style:italic;text-shadow:0 0 10px #cc8844,0 0 25px #885522;pointer-events:none;opacity:0;transition:opacity 0.8s;z-index:100;letter-spacing:2px;text-align:center;max-width:400px;",document.body.appendChild(os)),os.textContent="The forest's voice is missing… listen to those who still sing.",os.style.opacity="1",_l=4}function KE(i){za>0&&(za-=i,za<=.6&&Mi&&(Mi.style.opacity="0")),_l>0&&(_l-=i,_l<=1&&os&&(os.style.opacity="0"))}const lm=[{fantasy:"Once, this forest sang.",terminal:"// BIOSENSOR ARRAY v4.2 — Historical luminance baseline detected"},{fantasy:"Every root hummed with light. Every canopy blazed.",terminal:"// Bioluminescent network coverage: 100% — Symbiotic frequency: NOMINAL"},{fantasy:"Then the glow began to dim. The songs grew quiet.",terminal:"// WARNING: Sector luminance decay — 73% loss over 2,400 cycles"},{fantasy:"Five anchors of light remain, buried beneath the dark.",terminal:"// 5 restoration nodes offline — Awaiting frequency carrier activation"},{fantasy:"The creatures still remember the old harmony.",terminal:"// Native fauna vocalizations contain encoded frequency patterns"},{fantasy:"Listen to them. Move with them. Carry their voice to the light.",terminal:"// PROTOCOL: Attune to carrier organisms → Transport frequency → Restore nodes"}];let Ri="TITLE",pi=0,$c=0,jc=0,$o=0,ad=null,mn=null,Ta=null,Ea=null,Rr=null,Ls=null,Ds=null,fr=null;const um=120,JE=8,jo=3.5,Ts=.6;function QE(i){ad=i,mn=document.createElement("div"),mn.id="intro-cinematic",mn.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;z-index:300;pointer-events:auto;",Rr=document.createElement("div"),Rr.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;background:#000;opacity:0;transition:opacity 1.2s ease;",mn.appendChild(Rr),Ta=document.createElement("div"),Ta.style.cssText="position:absolute;top:45%;left:50%;transform:translate(-50%,-50%);font-family:Georgia,serif;font-size:36px;color:#aaffdd;letter-spacing:8px;text-shadow:0 0 18px rgba(100,255,200,.5),0 0 36px rgba(50,200,150,.25);text-align:center;opacity:1;transition:opacity 1s ease;",Ta.textContent="L U M I N A R I E S",mn.appendChild(Ta),Ea=document.createElement("div"),Ea.style.cssText="position:absolute;top:52%;left:50%;transform:translate(-50%,-50%);font-family:'Courier New',monospace;font-size:12px;color:#66ccaa;letter-spacing:2px;text-align:center;opacity:0.7;transition:opacity 1s ease;",Ea.textContent="click to begin",mn.appendChild(Ea),Ls=document.createElement("div"),Ls.style.cssText="position:absolute;top:38%;left:50%;transform:translate(-50%,-50%);font-family:Georgia,serif;font-size:24px;color:#ccffee;letter-spacing:3px;text-shadow:0 0 14px rgba(100,255,200,.6),0 0 30px rgba(50,200,150,.3);text-align:center;max-width:600px;line-height:1.6;opacity:0;transition:opacity 0.6s ease;pointer-events:none;",mn.appendChild(Ls),Ds=document.createElement("div"),Ds.style.cssText="position:absolute;top:52%;left:50%;transform:translate(-50%,-50%);font-family:'Courier New',monospace;font-size:13px;color:#88aa66;letter-spacing:1px;text-shadow:0 0 6px rgba(100,180,60,.4),0 0 15px rgba(60,120,30,.2);text-align:center;max-width:650px;line-height:1.4;opacity:0;transition:opacity 0.6s ease;pointer-events:none;",mn.appendChild(Ds),fr=document.createElement("div"),fr.style.cssText="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:Georgia,serif;font-size:28px;color:#ffddaa;letter-spacing:5px;text-shadow:0 0 12px rgba(255,200,100,.5),0 0 30px rgba(200,150,50,.3);text-align:center;opacity:0;transition:opacity 1s ease;pointer-events:none;",fr.textContent="Attune…",mn.appendChild(fr),document.body.appendChild(mn);const t=document.getElementById("overlay");t&&(t.style.display="none"),mn.addEventListener("click",hm),mn.addEventListener("touchstart",hm)}function hm(i){Ri==="TITLE"&&(i.preventDefault(),Ri="FADE_OUT",pi=0,Ta.style.opacity="0",Ea.style.opacity="0",Rr.style.opacity="1",mn.style.pointerEvents="none")}function tA(i,t){if(!(Ri==="DONE"||Ri==="TITLE"))switch(pi+=i,Ri){case"FADE_OUT":{pi>1.5&&(Ri="NARRATION",pi=0,$c=0,jc=0);break}case"NARRATION":{const e=pi%jo,n=Math.floor(pi/jo);if(n>=lm.length){Ri="SWEEP",pi=0,$o=0,Ls.style.opacity="0",Ds.style.opacity="0";break}n!==$c&&($c=n,jc=0);const s=lm[$c];e<Ts?Ls.style.opacity=String(e/Ts):e>jo-Ts?Ls.style.opacity=String((jo-e)/Ts):Ls.style.opacity="1",Ls.textContent=s.fantasy;const o=.3,r=40;if(e>o){const a=e-o;jc=Math.min(Math.floor(a*r),s.terminal.length)}Ds.textContent=s.terminal.substring(0,jc),e<Ts+o?Ds.style.opacity=String(Math.min(1,(e-o*.5)/Ts)):e>jo-Ts?Ds.style.opacity=String((jo-e)/Ts):Ds.style.opacity="0.8";break}case"SWEEP":{$o=Math.min(pi/JE,1);const e=1-Math.pow(1-$o,3),n=um+(Br-um)*e;t.position.set(0,n,0),t.rotation.order="YXZ",t.rotation.x=-Math.PI*.5*(1-e),t.rotation.y=pi*.12,$o<.15?Rr.style.opacity=String(1-$o/.15):Rr.style.opacity="0",$o>=1&&(Ri="HANDOFF",pi=0,fr.style.opacity="1");break}case"HANDOFF":{t.position.set(0,Br,0),t.rotation.order="YXZ",t.rotation.x=0,t.rotation.y+=i*.06,pi>3&&(fr.style.opacity="0"),pi>4.2&&(Ri="DONE",mn.style.opacity="0",mn.style.transition="opacity 0.5s",setTimeout(()=>{try{mn.remove()}catch{}},600),ad&&ad());break}}}function eA(){return Ri!=="DONE"&&Ri!=="TITLE"}let cd=null,_h=60;const nA={DUSK:"Dusk",NIGHT:"Night",DEEP_NIGHT:"Deep Night",DAWN:"Dawn"},iA={CLEAR:"Clear",MISTY:"Misty",LIGHT_RAIN:"Light Rain",HEAVY_RAIN:"Heavy Rain",FOG_BANK:"Fog",LUMINOUS_STORM:"Storm"};function sA(){cd=document.getElementById("hud")}function oA(i,t){if(!cd)return;_h=_h*.95+1/Math.max(i,.001)*.05;const e=cn==="SEEK"?"Seek the orbs...":cn==="RISING"?"The obelisk stirs...":cn==="COMPLETE"?"Convergence!":"Luminaries",n=nA[Xe]||"Night",s=iA[Tr]||"Clear";cd.innerHTML="<b>"+e+"</b> · "+n+" · "+s+" · FPS:"+Math.round(_h)+"<br>Pos:"+t.x.toFixed(0)+","+t.z.toFixed(0)}let eu=null;function rA(){eu=document.getElementById("orb-hud")}function aA(){return eu}function cA(){const i=document.getElementById("overlay");i&&(i.style.opacity="0",setTimeout(()=>{try{i.remove()}catch{}},2500)),eu&&(eu.style.display="block")}const Xt=[];let Fs=[];const wl=[],$n=[],ae=[],Ci=[],ei=[],en=[],Vr=[],hx=[],$a=[],Yi=[],ld=[],Ai=[],nu=[],Fa=[],ri=[],Hi=[],ke=[],Bn=[],ud=[],hd=[],fx=[],fd=[],dd=[],pd=[],md=[],gd=[],xd=[],Es=[];let fm=0,dm=0,Oa=.35,Me=1.15;const pm=new it(Hd[0]),mm=new it(Hd[0]);let pa=0,Kc=1/0,wh={x:0,z:0};const dx=new F(0,1,0),iu=new F,Cr=new nn,px=new nn,$e=new nn;function Ko(i,t,e,n){const s=hu(t,e);iu.set(s.x,s.y,s.z),Cr.setFromUnitVectors(dx,iu),Cr.slerp(px,1-n),i.quaternion.copy(Cr)}function Ni(i,t,e){const n=hu(i,t);return iu.set(n.x,n.y,n.z),Cr.setFromUnitVectors(dx,iu),Cr.slerp(px,1-e),Cr.clone()}let Sh=0,mi=null,Bi=0;const vd=15,Md=[];let gm=!1;function lA(){if(gm)return;gm=!0;const i=new Id({color:N.crystal,transparent:!0,opacity:0,blending:Jt,depthWrite:!1});for(let t=0;t<vd;t++){const e=new Ae,n=new Float32Array(6);e.setAttribute("position",new ze(n,3)),e.attributes.position.setUsage(ye);const s=new qm(e,i.clone());s.visible=!1,ot.add(s),Md.push({line:s,geo:e,opacity:0,active:!1})}}let js=null;function uA(){if(js)return js;const i=new Va(.9,1,48),t=new $({color:N.echoBloom,transparent:!0,opacity:.5,side:Ct,depthWrite:!1,blending:Jt});return js=new P(i,t),js.rotation.x=-Math.PI/2,js.visible=!1,ot.add(js),js}const Le=[];function Be(i,t){for(let e=0;e<Le.length;e++){const n=Le[e].x-i,s=Le[e].z-t;if(n*n+s*s<Le[e].r2)return!0}return!1}function hA(){const i=25+Math.floor(y()*15),t=[];for(let f=0;f<i;f++){const d=y()*6.28,g=8+y()*(jt-15);t.push({x:Math.cos(d)*g,z:Math.sin(d)*g,r:6+y()*18,density:.5+y()*.5})}const e=5+Math.floor(y()*4),n=[];for(let f=0;f<e;f++){const d=y()*6.28,g=12+y()*(jt*.65);n.push({x:Math.cos(d)*g,z:Math.sin(d)*g,r2:(10+y()*15)**2})}for(let f=0;f<yp;f++){let d,g,x=!1;for(let h=0;h<25;h++){if(y()<.2){const M=y()*6.28,v=5+y()*(jt-10);d=Math.cos(M)*v,g=Math.sin(M)*v}else{const M=Math.floor(y()*i),v=t[M],_=v.r*(y()+y())*.5*v.density,T=y()*6.28;d=v.x+Math.cos(T)*_,g=v.z+Math.sin(T)*_}if(d*d+g*g>(jt-5)*(jt-5))continue;let m=!1;for(let M=0;M<n.length;M++){const v=n[M].x-d,_=n[M].z-g;if(v*v+_*_<n[M].r2){m=!0;break}}if(!m){x=!0;for(let M=0;M<Xt.length;M++){const v=Xt[M].x-d,_=Xt[M].z-g;if(v*v+_*_<6.25){x=!1;break}}if(x)break}}if(x){const h=6+y()*10;y();const m=Dt(d,g),M=y()*Math.PI*2,v=.8+y()*.4,_=LS(h,m);_.position.x=d,_.position.z=g,wl.push(_),Xt.push({x:d,z:g,y:m,treeH:h,yRot:M,scale:v}),Le.push({x:d,z:g,r2:4})}}const s=FS(10),o=Math.ceil(yp/10)+10;Fs=OS(s,Xt,o);for(let f=0;f<E2;f++){let d,g,x=!1;for(let h=0;h<20;h++){const m=y()*6.28,M=10+y()*(jt*.6);if(d=Math.cos(m)*M,g=Math.sin(m)*M,x=!Be(d,g),x)break}if(x){Sf(d,g,4);const h=fb(d,g);h.group.position.y=Dt(d,g),ri.push(h),Le.push({x:d,z:g,r2:64})}}for(let f=0;f<C2;f++){let d,g,x=!1;for(let h=0;h<20;h++){const m=y()*6.28,M=8+y()*(jt*.6);if(d=Math.cos(m)*M,g=Math.sin(m)*M,x=!Be(d,g),x)break}if(x){Sf(d,g,3);const h=pb(d,g);h.group.position.y=Dt(d,g),ke.push(h),Le.push({x:d,z:g,r2:49})}}const r=new Float32Array(Xt.length);let a=0;for(let f=0;f<Xt.length;f++){let d=0;for(let g=0;g<Xt.length;g++){if(f===g)continue;const x=Xt[f].x-Xt[g].x,h=Xt[f].z-Xt[g].z;x*x+h*h<144&&d++}r[f]=Math.max(d,.2),a+=r[f]}function l(f,d){let g=0;for(let x=0;x<Xt.length;x++){const h=f-Xt[x].x,m=d-Xt[x].z;h*h+m*m<100&&g++}return g}for(let f=0;f<d2;f++){let d=y()*a,g=0;for(let T=0;T<r.length;T++)if(d-=r[T],d<=0){g=T;break}const x=Xt[g],h=y()*6.28,m=1+y()*4,M=x.x+Math.cos(h)*m,v=x.z+Math.sin(h)*m;if(Be(M,v))continue;const _=GS(M,v);_.group.position.y=Dt(M,v),Ko(_.group,M,v,.3),$n.push(_),Le.push({x:M,z:v,r2:1})}for(let f=0;f<p2;f++){const d=y()*6.28,g=8+y()*jt*.6,x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h))continue;const m=kS(x,h);m.group.position.y=Dt(x,h),Ko(m.group,x,h,.45),ae.push(m),Le.push({x,z:h,r2:4})}for(let f=0;f<m2;f++){const d=y()*6.28,g=10+y()*jt*.5,x=Math.cos(d)*g,h=Math.sin(d)*g;Ci.push(ab(x,Dt(x,h)+3+y()*5,h))}for(let f=0;f<g2;f++){const d=$n[Math.floor(y()*$n.length)],g=y()*6.28,x=1+y()*5,h=d.x+Math.cos(g)*x,m=d.z+Math.sin(g)*x;if(Be(h,m))continue;const M=cb(h,m);M.group.position.y=Dt(h,m),M._baseY=Dt(h,m),ei.push(M)}for(let f=0;f<x2;f++){const d=y()*6.28,g=12+y()*jt*.5,x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h))continue;const m=lb(x,h),M=Dt(x,h);m.group.position.y=M,m._baseY=M,en.push(m)}for(let f=0;f<v2;f++){const d=Xt[Math.floor(y()*Xt.length)];Vr.push(ub(d.x,Dt(d.x,d.z)+2+y()*4,d.z))}const u=[null,N.grassPurple,N.grassBlue,N.grassTeal];for(let f=0;f<M2;f++){const d=y()*6.28,g=2+y()*(jt*.9),x=Math.cos(d)*g,h=Math.sin(d)*g,m=u[Math.floor(y()*u.length)],M=2+y()*2.5,v=38+Math.floor(y()*30);if(Be(x,h))continue;const _=VS(x,h,M,v,m);_.mesh.position.y=Dt(x,h),hx.push(_),Le.push({x,z:h,r2:M*M})}for(let f=0;f<S2;f++){let d,g,x=!1;for(let h=0;h<10;h++){const m=y()*6.28,M=3+y()*(jt*.85);if(d=Math.cos(m)*M,g=Math.sin(m)*M,x=!Be(d,g),x)break}if(x){const h=gb(d,g);h.group.position.y=Dt(d,g)-.08,Ko(h.group,d,g,.5),Ai.push(h),Le.push({x:d,z:g,r2:2.25})}}for(let f=0;f<b2;f++){let d,g,x=!1;for(let h=0;h<10;h++){const m=y()*6.28,M=8+y()*(jt*.8);if(d=Math.cos(m)*M,g=Math.sin(m)*M,x=!Be(d,g),x)break}if(x){const h=xb(d,g);h.group.position.y=Dt(d,g)-.3,Ko(h.group,d,g,.6),Ai.push(h),Le.push({x:d,z:g,r2:9})}}vb();for(let f=0;f<kd;f++){let d,g;if(Ai.length>0&&y()<.5){const x=Ai[Math.floor(y()*Ai.length)],h=y()*6.28,m=.5+y()*3;d=x.x+Math.cos(h)*m,g=x.z+Math.sin(h)*m}else if(Xt.length>0&&y()<.5){const x=Xt[Math.floor(y()*Xt.length)],h=y()*6.28,m=1+y()*4;d=x.x+Math.cos(h)*m,g=x.z+Math.sin(h)*m}else{const x=y()*6.28,h=3+y()*(jt*.85);d=Math.cos(x)*h,g=Math.sin(x)*h}Mb(d,g,Dt(d,g))}yb();for(let f=0;f<y2;f++){const d=Xt[Math.floor(y()*Xt.length)],g=y()*6.28,x=1+y()*5,h=d.x+Math.cos(g)*x,m=d.z+Math.sin(g)*x;if(Be(h,m))continue;const M=WS(h,m);M.group.position.y=Dt(h,m),M.slopeQ=Ni(h,m,.4),$a.push(M),Le.push({x:h,z:m,r2:1})}for(let f=0;f<_2;f++){const d=y()*6.28,g=3+y()*(jt*.7),x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h)||l(x,h)>1&&y()<.8)continue;const m=XS(x,h);m.group.position.y=Dt(x,h),m.slopeQ=Ni(x,h,.35),Yi.push(m),Le.push({x,z:h,r2:1})}for(let f=0;f<w2;f++){const d=y()*6.28,g=4+y()*(jt*.8),x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h)||l(x,h)>1&&y()<.8)continue;const m=qS(x,h);m.group.position.y=Dt(x,h),m.slopeQ=Ni(x,h,.15),ld.push(m),Le.push({x,z:h,r2:1})}const c=6.28/vn,p=[];for(let f=0;f<vn;f++){let d,g,x=!1;const h=f*c;for(let m=0;m<50;m++){const M=h+y()*c,v=30+y()*(jt*.5);if(d=Math.cos(M)*v,g=Math.sin(M)*v,Be(d,g))continue;let _=!1;for(let T=0;T<p.length;T++){const E=d-p[T].x,b=g-p[T].z;if(E*E+b*b<900){_=!0;break}}if(!_){x=!0;break}}if(x){p.push({x:d,z:g});const m=mb(d,g);m.group.position.y=Dt(d,g)+1,m.flyY=Dt(d,g)+1,Bn.push(m)}}for(let f=0;f<ug;f++){const d=y()*6.28,g=2+y()*3,x=Math.cos(d)*g,h=Math.sin(d)*g;nu.push(hb(x,Dt(x,h)+1+y()*.5,h))}for(let f=0;f<T2;f++){const d=y()*6.28,g=4+y()*(jt*.7),x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h)||l(x,h)>1&&y()<.8)continue;const m=jS(x,h);m.group.position.y=Dt(x,h),Ko(m.group,x,h,.35),Fa.push(m),Le.push({x,z:h,r2:1})}for(let f=0;f<A2;f++){const d=y()*6.28,g=5+y()*jt*.6,x=Math.cos(d)*g,h=Math.sin(d)*g;Hi.push(db(x,Dt(x,h)+.5+y()*5,h))}for(let f=0;f<P2;f++){const d=y()*6.28,g=5+y()*(jt*.7),x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h))continue;const m=JS(x,h);m.group.position.y=Dt(x,h),m.slopeQ=Ni(x,h,.3),ud.push(m),Le.push({x,z:h,r2:2.25})}for(let f=0;f<I2;f++){const d=Xt[Math.floor(y()*Xt.length)],g=y()*6.28,x=2+y()*4,h=d.x+Math.cos(g)*x,m=d.z+Math.sin(g)*x;if(Be(h,m))continue;const M=QS(h,m);M.group.position.y=Dt(h,m),M.slopeQ=Ni(h,m,.25),hd.push(M),Le.push({x:h,z:m,r2:1})}for(let f=0;f<L2;f++){const d=y()*6.28,g=6+y()*(jt*.65),x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h))continue;const m=tb(x,h);m.group.position.y=Dt(x,h),Ko(m.group,x,h,.25),fx.push(m),Le.push({x,z:h,r2:2.25})}for(let f=0;f<D2;f++){const d=Xt[Math.floor(y()*Xt.length)],g=y()*6.28,x=2+y()*5,h=d.x+Math.cos(g)*x,m=d.z+Math.sin(g)*x;if(Be(h,m))continue;const M=nb(h,m);M.group.position.y=Dt(h,m),M.slopeQ=Ni(h,m,.35),fd.push(M),Le.push({x:h,z:m,r2:1.5})}for(let f=0;f<U2;f++){const d=y()*6.28,g=8+y()*(jt*.6),x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h))continue;const m=ib(x,h);m.group.position.y=Dt(x,h),m.slopeQ=Ni(x,h,.3),dd.push(m),Le.push({x,z:h,r2:3})}for(let f=0;f<N2;f++){const d=y()*6.28,g=5+y()*(jt*.7),x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h))continue;const m=sb(x,h);m.group.position.y=Dt(x,h),m.slopeQ=Ni(x,h,.35),pd.push(m),Le.push({x,z:h,r2:1.5})}for(let f=0;f<z2;f++){const d=Xt[Math.floor(y()*Xt.length)],g=y()*6.28,x=2+y()*4,h=d.x+Math.cos(g)*x,m=d.z+Math.sin(g)*x;if(Be(h,m))continue;const M=ob(h,m);M.group.position.y=Dt(h,m),M.slopeQ=Ni(h,m,.3),md.push(M),Le.push({x:h,z:m,r2:1.5})}for(let f=0;f<F2;f++){const d=Ai.length>0?Ai[Math.floor(y()*Ai.length)]:{x:0,z:0},g=y()*6.28,x=1+y()*3,h=d.x+Math.cos(g)*x,m=d.z+Math.sin(g)*x;if(Be(h,m))continue;const M=rb(h,m);M.group.position.y=Dt(h,m),M.slopeQ=Ni(h,m,.2),gd.push(M),Le.push({x:h,z:m,r2:1})}for(let f=0;f<O2;f++){const d=y()*6.28,g=5+y()*(jt*.8),x=Math.cos(d)*g,h=Math.sin(d)*g,m=1.5+y()*3.5,M=N.groundGlowColors[Math.floor(y()*N.groundGlowColors.length)],v=.08+y()*.12,_=new $({color:M,transparent:!0,opacity:v,blending:Jt,depthWrite:!1,side:Ct}),T=new He(m,10);T.rotateX(-Math.PI/2);const E=Dt(x,h),b=T.attributes.position;for(let S=0;S<b.count;S++){const w=x+b.getX(S),A=h+b.getZ(S);b.setY(S,Dt(w,A)-E+.02)}b.needsUpdate=!0,T.computeVertexNormals();const R=new P(T,_);R.position.set(x,E,h),ot.add(R),xd.push({mesh:R,mat:_,phase:y()*6.28,baseOpacity:v,speed:.3+y()*.3,x,z:h})}for(let f=0;f<Xt.length;f++){const d=Xt[f],g=Dt(d.x,d.z);d.y=g,wl[f]&&(wl[f].position.y=g+(d.treeH||10)*.6)}if(Fs.length>0){const f=new ce,d=new F(0,1,0),g=new F,x=new nn,h=new nn,m=new nn;for(let M=0;M<Fs.length;M++){const v=Fs[M];for(let _=0;_<v.instances.length;_++){const T=v.instances[_],E=Xt[T.posIdx];T.y=E.y;const b=hu(E.x,E.z);T.nx=b.x,T.ny=b.y,T.nz=b.z,f.position.set(E.x,E.y,E.z),g.set(b.x,b.y,b.z),x.setFromUnitVectors(d,g),x.slerp(h,.85),m.setFromAxisAngle(d,E.yRot),f.quaternion.copy(x).multiply(m),f.scale.setScalar(E.scale),f.updateMatrix(),v.trunk&&v.trunk.setMatrixAt(_,f.matrix),v.canopy&&v.canopy.setMatrixAt(_,f.matrix),v.glow&&v.glow.setMatrixAt(_,f.matrix),v.detail&&v.detail.setMatrixAt(_,f.matrix)}v.trunk&&(v.trunk.instanceMatrix.needsUpdate=!0),v.canopy&&(v.canopy.instanceMatrix.needsUpdate=!0),v.glow&&(v.glow.instanceMatrix.needsUpdate=!0),v.detail&&(v.detail.instanceMatrix.needsUpdate=!0)}}}function mx(i,t){const e=1+ms*1.5,n=fo*.03,s=hr*.03,o=Z.pos.x,r=Z.pos.y,a=Z.pos.z;BS(Fs,wl,o,r,a,t,e,n,s);const l=Oa*Me;for(let u=0;u<Fs.length;u++){const c=Fs[u];c.canopyMat&&(c.canopyMat.emissiveIntensity=1.2*l),c.glowMat&&(c.glowMat.emissiveIntensity=.4*l),c.detailMat&&(c.detailMat.emissiveIntensity=.5*l),c.trunkMat&&(c.trunkMat.emissiveIntensity=.6*l)}HS(t,e,n,s,o,a,Oa*Me),fS(t,o,a);for(let u=0;u<$a.length;u++){const c=$a[u],p=c.group.position.x-o,f=c.group.position.y-r,d=c.group.position.z-a,g=p*p+f*f+d*d;if(g>1600){c.group.visible&&(c.group.visible=!1);continue}c.group.visible||(c.group.visible=!0),!(g>900)&&c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),$e.set((Math.sin(t*.6+c.phase+1)*.02*e+s)*.5,0,(Math.sin(t*.8+c.phase)*.03*e+n)*.5,1).normalize(),c.group.quaternion.multiply($e))}for(let u=0;u<Yi.length;u++){const c=Yi[u],p=c.group.position.x-o,f=c.group.position.y-r,d=c.group.position.z-a,g=p*p+f*f+d*d;if(g>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),g>900)continue;const x=Math.sin(t*.8+c.phase)*.5+.5;c.petalMat.emissiveIntensity=(.5+x*.7)*Te(c.group.position.x,c.group.position.z,me*Me),c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),$e.set(0,0,(Math.sin(t*.9+c.phase)*.04*e+n*.5)*.5,1).normalize(),c.group.quaternion.multiply($e))}for(let u=0;u<ld.length;u++){const c=ld[u],p=c.group.position.x-o,f=c.group.position.y-r,d=c.group.position.z-a,g=p*p+f*f+d*d;if(g>1600){c.group.visible&&(c.group.visible=!1);continue}c.group.visible||(c.group.visible=!0),!(g>900)&&c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),$e.set((Math.sin(t*.8+c.phase+2)*c.swayAmp*.5*e+s)*.5,0,(Math.sin(t*1.1+c.phase)*c.swayAmp*e+n)*.5,1).normalize(),c.group.quaternion.multiply($e))}for(let u=0;u<ud.length;u++){const c=ud[u],p=Math.sin(t*1.2+c.phase)*.5+.5,f=Te(c.group.position.x,c.group.position.z,me*Me);c.orbMat.emissiveIntensity=(.6+p*.6)*f,c.hazeMat.opacity=(.06+p*.06)*f,c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),$e.set((Math.sin(t*.4+c.phase+1)*.015*e+s*.3)*.5,0,(Math.sin(t*.5+c.phase)*.02*e+n*.3)*.5,1).normalize(),c.group.quaternion.multiply($e))}for(let u=0;u<hd.length;u++){const c=hd[u];for(let p=0;p<c.podMats.length;p++){const f=Math.sin(t*1.5+c.phase+p*1.8)*.5+.5;c.podMats[p].emissiveIntensity=(.5+f*.7)*Te(c.group.position.x,c.group.position.z,me*Me)}c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),$e.set(0,0,(Math.sin(t*.35+c.phase)*.01*e+n*.2)*.5,1).normalize(),c.group.quaternion.multiply($e))}eb(fx,i,t,me*Me,Te);for(let u=0;u<fd.length;u++){const c=fd[u],p=c.x-o,f=c.z-a,d=p*p+f*f;if(d>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),d<900){for(let g=0;g<c.tipMats.length;g++){const x=Math.sin(t*1.8+c.phase+g*1.5)*.5+.5;c.tipMats[g].emissiveIntensity=(.5+x*.7)*Te(c.x,c.z,me*Me)}c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),$e.set((Math.sin(t*.35+c.phase+1)*.01*e+s*.2)*.5,0,(Math.sin(t*.4+c.phase)*.015*e+n*.2)*.5,1).normalize(),c.group.quaternion.multiply($e))}}for(let u=0;u<dd.length;u++){const c=dd[u],p=c.x-o,f=c.z-a,d=p*p+f*f;if(d>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),d<900){const g=Te(c.x,c.z,me*Me);c.columnMat.emissiveIntensity=(.5+Math.sin(t*.8+c.phase)*.35)*g,c.hazeMat.opacity=(.05+Math.sin(t*.8+c.phase)*.04)*g;for(let x=0;x<c.flies.length;x++){const h=t*(2+x*.5)+x*2.1,m=.2+Math.sin(t*.7+x)*.08,M=.1+Math.sin(t*1.3+x*1.7)*.15;c.flies[x].position.set(Math.cos(h)*m,c.spadixY+M,Math.sin(h)*m)}c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),$e.set(0,0,(Math.sin(t*.3+c.phase)*.01*e+n*.15)*.5,1).normalize(),c.group.quaternion.multiply($e))}}for(let u=0;u<pd.length;u++){const c=pd[u],p=c.x-o,f=c.z-a,d=p*p+f*f;if(d>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),d<900){for(let g=0;g<c.orbMats.length;g++){const x=Math.sin(t*2+c.phase+g*1.3)*.5+.5;c.orbMats[g].emissiveIntensity=(.5+x*.7)*Te(c.x,c.z,me*Me)}c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),$e.set((Math.sin(t*.4+c.phase+1)*.008*e+s*.2)*.5,0,(Math.sin(t*.45+c.phase)*.012*e+n*.2)*.5,1).normalize(),c.group.quaternion.multiply($e))}}for(let u=0;u<md.length;u++){const c=md[u],p=c.x-o,f=c.z-a,d=p*p+f*f;if(d>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),d<900){for(let g=0;g<c.podMats.length;g++){const x=Math.sin(t*1.5+c.phase+g*1.8)*.5+.5;c.podMats[g].emissiveIntensity=(.5+x*.6)*Te(c.x,c.z,me*Me)}c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),$e.set((Math.sin(t*.5+c.phase+1)*.015*e+s*.25)*.5,0,(Math.sin(t*.6+c.phase)*.02*e+n*.25)*.5,1).normalize(),c.group.quaternion.multiply($e))}}for(let u=0;u<gd.length;u++){const c=gd[u],p=c.x-o,f=c.z-a,d=p*p+f*f;if(d>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),d<900){for(let g=0;g<c.veilMats.length;g++)c.veilMats[g].rotation.z=Math.sin(t*.8+c.phase+g*.7)*.06*e;c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),$e.set(0,0,(Math.sin(t*.35+c.phase)*.01*e+n*.15)*.5,1).normalize(),c.group.quaternion.multiply($e))}}for(let u=0;u<xd.length;u++){const c=xd[u],p=c.x-o,f=c.z-a;if(p*p+f*f>3600){c.mesh.visible=!1;continue}c.mesh.visible=!0;const d=Math.sin(t*c.speed+c.phase)*.3+.7;c.mat.opacity=c.baseOpacity*d*Te(c.x,c.z,me*Me)}}function gx(i,t){for(let n=0;n<Ci.length;n++){const s=Ci[n],o=s.group,r=o.position.x,a=o.position.z;s._syncPhase===void 0&&(s._syncPhase=s.phase);let l=0,u=0;for(let c=0;c<Ci.length;c++){if(c===n)continue;const p=Ci[c],f=p.group.position.x-r,d=p.group.position.z-a;f*f+d*d<225&&(l+=p._syncPhase||p.phase,u++)}if(u>0){const c=l/u;s._syncPhase+=(c-s._syncPhase)*i*.4}}const e=Xe==="DEEP_NIGHT"?2:Xe==="DAWN"?-1.5:0;for(let n=0;n<Ci.length;n++){const s=Ci[n].group,o=s.position.x-Z.pos.x,r=s.position.z-Z.pos.z,a=s.position.y-Z.pos.y;if(o*o+a*a+r*r>3025){s.visible=!1;continue}s.visible=!0;const l=Ci[n],u=l.group,c=u.position.x,p=u.position.z,f=l.floatY+e;if(l._stT-=i,l._stT<=0)if(xs)l._state="display",l._stT=10+Math.random()*15;else{const M=Math.random();M<.5?(l._state="drift",l._stT=20+Math.random()*30):M<.75?(l._state="pulse",l._stT=8+Math.random()*12):(l._state="migrate",l._migrateAng=Math.random()*6.28,l._stT=15+Math.random()*20)}switch(xs&&l._state!=="display"&&(l._state="display",l._stT=10,Hr("jelly",{x:c,z:p},Z.pos)),l._state){case"drift":{l.driftAng+=i*.15;const M=8+Math.sin(t*.1+l.phase)*4,v=l.homeX+Math.cos(l.driftAng)*M,_=l.homeZ+Math.sin(l.driftAng)*M;u.position.x+=(v-c)*i*.3,u.position.z+=(_-p)*i*.3,u.position.y=f+Math.sin(t*l.wobble+l.phase)*1.5;break}case"pulse":{l.driftAng+=i*.08,u.position.x+=Math.cos(l.driftAng)*i*.3,u.position.z+=Math.sin(l.driftAng)*i*.3,u.position.y=f+Math.sin(t*l.wobble+l.phase)*1,l._pulseSync=Math.sin(t*2+l._syncPhase)*.5+.5;break}case"migrate":{u.position.x+=Math.cos(l._migrateAng)*i*1,u.position.z+=Math.sin(l._migrateAng)*i*1,u.position.y=f+Math.sin(t*l.wobble+l.phase)*.8,u.position.x*u.position.x+u.position.z*u.position.z>jt*.8*(jt*.8)&&(l._migrateAng+=Math.PI);break}case"display":{l.driftAng+=i*.4,u.position.x+=Math.cos(l.driftAng)*i*.8,u.position.z+=Math.sin(l.driftAng)*i*.8,u.position.y=f+Math.sin(t*2+l.phase)*2,l._syncPhase+=(0-l._syncPhase)*i*2;break}}const d=Dt(u.position.x,u.position.z);u.position.y<d+3&&(u.position.y=d+3),l._state==="pulse"&&Math.random()<.003&&Hr("jelly",{x:c,z:p},Z.pos);const g=l._syncPhase||l.phase,x=Math.sin(t*1.2+g)*.5+.5;let h=1,m=0;if(l._state==="pulse")h=1+l._pulseSync*1.5,m=l._pulseSync*.15;else if(l._state==="display"){const M=Math.sin(t*4)*.5+.5;h=1.5+M*1.2,m=.15+M*.1}else l._state==="drift"&&(h=1+x*.3);if(l.bellMat.emissiveIntensity=(.4+x*.8)*Te(u.position.x,u.position.z,me*Me)*h,l.bellMat.opacity=.35+x*.25+m,l.tipMat){const M=Math.sin(t*5.3+l.phase*7.1)*Math.sin(t*3.7+l.phase*4.3);l.tipMat.opacity=.3+.7*(M*.5+.5)}u.rotation.y+=i*.2;for(let M=2;M<u.children.length;M++)u.children[M].rotation.x=Math.sin(t*2+M+g)*.15,u.children[M].rotation.z=Math.sin(t*1.5+M*.7+g)*.1}}function xx(i,t){const e=We.ShiftLeft||We.ShiftRight||Yr,n=Xe==="DAWN"?.6:Xe==="NIGHT"?1.3:1,s=Xe==="DAWN"?2:Xe==="NIGHT"?.6:1;Kc=1/0;const o=uT();for(let r=0;r<ei.length;r++){const a=ei[r],l=a.group,u=l.position.x,c=l.position.z,p=u-Z.pos.x,f=c-Z.pos.z,d=p*p+f*f;if(d>1600){l.visible=!1;continue}if(l.visible=!0,d<Kc&&(Kc=d,wh.x=u,wh.z=c),a.state!=="startled"&&a.state!=="following"&&a.state!=="huddle"){const w=e?3.5:2;let A=d<w*w;if(!A)for(let C=0;C<en.length;C++){if(en[C].state!=="flee")continue;const L=en[C].group.position.x-u,U=en[C].group.position.z-c;if(L*L+U*U<25){A=!0;break}}A&&(a.state="startled",a._scaredT=.6+Math.random()*.5,a.wanderAng=Math.atan2(p,f),a.hopTimer=0,Hr("puff",{x:u,z:c},Z.pos))}if(xs&&a.state!=="startled"&&a.state!=="huddle"){let w=1/0,A=-1;for(let C=0;C<ei.length;C++){if(C===r)continue;const L=ei[C].group.position.x-u,U=ei[C].group.position.z-c,H=L*L+U*U;H<w&&(w=H,A=C)}A>=0&&w>1&&(a.state="huddle",a._huddleTarget=A)}kr>5&&d<144&&a.state==="idle"&&Math.random()<.002&&(a.state="following",a._followT=10+Math.random()*10);const g=u-a._lastTX,x=c-a._lastTZ;g*g+x*x>.25&&(a._baseY=Dt(u,c),a._lastTX=u,a._lastTZ=c);const h={x:u,z:c},m=[];for(let w=0;w<ei.length;w++){if(w===r)continue;const A=ei[w].group.position.x,C=ei[w].group.position.z;(A-u)*(A-u)+(C-c)*(C-c)<100&&m.push({x:A,z:C})}const M=lx(h,m,1.5),v=m.length>0?ux(h,m):{x:0,z:0},_=M.x*2+v.x*.3,T=M.z*2+v.z*.3,E=Math.sqrt(_*_+T*T);switch(a.state){case"idle":{if(a.idleTimer-=i,l.position.y=a._baseY+Math.sin(t*2+a.phase)*.02,l.rotation.y+=Math.sin(t*.5+a.phase)*i*.3,E>.1&&m.length>1&&(l.position.x+=v.x*.05*i,l.position.z+=v.z*.05*i),Math.random()<4e-4){const w=cm(u,c);im({x:u,z:c},Z.pos,w,o)}if(a.idleTimer<=0){const w=E>.2?Math.atan2(_,T):0;a.state="hop",a.wanderAng+=(Math.random()-.5)*1.5+w*.3,a.hopTimer=0}break}case"hop":{a.hopTimer+=i;const A=a.hopTimer/1.2;if(A>=1)a.state="idle",a.idleTimer=(1.5+Math.random()*3)*s,l.position.y=a._baseY,a.body.scale.set(1,1,1),a.head.scale.set(1,1,1);else{l.position.y=a._baseY+Math.sin(A*Math.PI)*.3,l.position.x+=Math.sin(a.wanderAng)*a.speed*n*i,l.position.z+=Math.cos(a.wanderAng)*a.speed*i;const C=1-Math.sin(A*Math.PI)*.15,L=1+Math.sin(A*Math.PI)*.2;a.body.scale.set(C,L,C),a.head.scale.set(C,L,C),l.rotation.y=a.wanderAng}break}case"startled":{a._scaredT-=i,a.hopTimer+=i*1.5;const w=Math.min(a.hopTimer/.8,1);l.position.y=a._baseY+Math.sin(w*Math.PI)*.5,l.position.x+=Math.sin(a.wanderAng)*a.speed*2*i+M.x*.5*i,l.position.z+=Math.cos(a.wanderAng)*a.speed*2*i+M.z*.5*i,a.body.scale.set(.85,1.3,.85),a.head.scale.set(.85,1.3,.85),a._scaredT<=0&&(a.state="idle",a.idleTimer=3+Math.random()*3,l.position.y=a._baseY,a.body.scale.set(1,1,1),a.head.scale.set(1,1,1));break}case"following":{if(a._followT-=i,d>225||kr<3||a._followT<=0){a.state="idle",a.idleTimer=2;break}if(a.wanderAng=Math.atan2(Z.pos.x-u,Z.pos.z-c),d>9){a.hopTimer+=i;const w=a.hopTimer%1.5/1.5;l.position.y=a._baseY+Math.sin(w*Math.PI)*.2,l.position.x+=Math.sin(a.wanderAng)*a.speed*.4*i,l.position.z+=Math.cos(a.wanderAng)*a.speed*.4*i}else l.position.y=a._baseY+Math.sin(t*3+a.phase)*.03;if(Math.random()<.001&&im({x:u,z:c},Z.pos,!0,o),d<25&&Math.random()<3e-4){const w=cm(u,c);let A=!1;for(let U=0;U<Bn.length;U++){if(Bn[U].found)continue;const H=u-Bn[U].x,G=c-Bn[U].z;if(H*H+G*G<400){A=!0;break}}const C=Jd()!==null,L=UE(l,w,A,o,C);L&&xE(L,{x:u,z:c},Z.pos)}if(a.ears){const A=Math.atan2(Z.pos.x-u,Z.pos.z-c)-l.rotation.y;for(let C=0;C<a.ears.length;C++){const L=a.ears[C];L.mesh.rotation.z=L.baseRotZ+A*.15*L.side}}l.rotation.y=a.wanderAng;break}case"huddle":{if(!xs){a.state="idle",a.idleTimer=2;break}const w=ei[a._huddleTarget];if(w){const A=w.group.position.x-u,C=w.group.position.z-c,L=Math.sqrt(A*A+C*C);L>.5&&(l.position.x+=A/L*a.speed*.5*i,l.position.z+=C/L*a.speed*.5*i)}l.rotation.z=Math.sin(t*8)*.05,l.position.y=a._baseY;break}}if(a._blinkTimer-=i,a._blinkTimer<=0)if(a._blinkState===0){for(let w=0;w<a.eyes.length;w++)a.eyes[w].scale.y=.1;a._blinkState=1,a._blinkTimer=.08+Math.random()*.06}else{for(let w=0;w<a.eyes.length;w++)a.eyes[w].scale.y=1;a._blinkState=0,a._blinkTimer=2+Math.random()*5}for(let w=0;w<a.ears.length;w++){const A=a.ears[w];A.mesh.rotation.z=A.baseRotZ+Math.sin(t*3.5+A.side*1.2+a.phase)*.08}a.tail.position.y=.38+Math.sin(t*4+a.phase)*.015;const b=d<64?1+o*.8:1,R=d<64?1+o*2:1;if(a.sparkles)for(let w=0;w<a.sparkles.length;w++){const A=a.sparkles[w],C=t*(2+w*.7)*R+A.phase;A.mesh.position.set(Math.cos(C)*A.orbitR,.5+Math.sin(C*1.3)*.1,Math.sin(C)*A.orbitR),A.mat.opacity=(.3+Math.sin(t*4+A.phase)*.3)*Te(l.position.x,l.position.z,me*Me)*b}if(a.crownMat&&(a.crownMat.emissiveIntensity=(.4+Math.sin(t*1.5+a.phase)*.3)*Te(l.position.x,l.position.z,me*Me)*b),d<64&&o>.1&&a.bodyMat?a.bodyMat.emissiveIntensity=.3+o*.4+(pa>0?pa*3:0):a.bodyMat&&(a.bodyMat.emissiveIntensity=.3),a.glowMat){const w=.08+Math.sin(t*2+a.phase)*.04,A=d<64?o*.2:0;a.glowMat.opacity=(w+A)*Te(u,c,me*Me)}l.position.x*l.position.x+l.position.z*l.position.z>jt*.85*(jt*.85)&&(a.wanderAng+=Math.PI)}lT(i,e,Kc),fT()&&(pa=.5,mE(wh,Z.pos)),pa>0&&(pa-=i)}function vx(i,t){const e=We.ShiftLeft||We.ShiftRight||Yr;for(let n=0;n<en.length;n++){const s=en[n],o=s.group,r=o.position.x,a=o.position.z,l=r-Z.pos.x,u=a-Z.pos.z,c=l*l+u*u;if(c>3600){o.visible=!1;continue}o.visible=!0;const p=Math.atan2(l,u),f=e?18:12,d=f*f,g=e?10:Y2,x=g*g,h=r-s._lastTX,m=a-s._lastTZ;h*h+m*m>.25&&(s._baseY=Dt(r,a),s._lastTX=r,s._lastTZ=a);const M=s._baseY;if(s.state!=="flee"&&s.state!=="alert"&&s.state!=="watching"){const A={x:r,z:a},C={x:Z.pos.x,z:Z.pos.z};c<x||FE(A,C,g,e)?(s.state="flee",s.wanderAng=p,s.fleeTimer=2.5+Math.random()*2,s._zigTimer=0,Hr("deer",A,Z.pos)):(c<d||zE(A,s.wanderAng,C,f,Math.PI*.5))&&(s.state="alert",s._stT=1+Math.random()*1.5,Hr("deer",A,Z.pos))}if(s.state!=="flee")for(let A=0;A<en.length;A++){if(A===n||en[A].state!=="flee")continue;const C=en[A].group.position.x-r,L=en[A].group.position.z-a;if(C*C+L*L<400){s.state="flee",s.wanderAng=en[A].wanderAng+(Math.random()-.5)*.4,s.fleeTimer=2+Math.random()*1.5,s._zigTimer=0;break}}const v=[];for(let A=0;A<en.length;A++){if(A===n)continue;const C=en[A].group.position.x,L=en[A].group.position.z;(C-r)*(C-r)+(L-a)*(L-a)<400&&v.push({x:C,z:L})}const _=lx({x:r,z:a},v,3),T=v.length>0?ux({x:r,z:a},v):{x:0,z:0};(s.state==="alert"||s.state==="watching")&&(s.headLook+=(p-s.wanderAng)*.3*i);let E=s.speed,b=!1;switch(s.state){case"walk":{if(b=!0,s.walkTimer-=i,s.walkTimer<=0){const C=Math.random(),L=Xe==="DUSK"?.55:.4,U=Xe==="DEEP_NIGHT"?.25:.1;if(C<.25)s.state="pause",s.pauseTimer=2+Math.random()*3;else if(C<L)s.state="graze",s._stT=Xe==="DUSK"?5+Math.random()*6:3+Math.random()*4;else if(C<L+.1&&ke.length>0){s.state="drink",s._stT=8;let H=1/0;for(let G=0;G<ke.length;G++){const O=ke[G].x-r,k=ke[G].z-a,nt=O*O+k*k;nt<H&&(H=nt,s._drinkTgt=ke[G])}}else C<L+.1+U?(s.state="rest",s._stT=Xe==="DEEP_NIGHT"?8+Math.random()*8:5+Math.random()*5):(s.wanderAng+=(Math.random()-.5)*1.2,s.walkTimer=3+Math.random()*5)}if((r-s.homeX)*(r-s.homeX)+(a-s.homeZ)*(a-s.homeZ)>400){const C=Math.atan2(s.homeX-r,s.homeZ-a);s.wanderAng+=(C-s.wanderAng)*i*.5}if(v.length>0){const C=Math.atan2(T.x*.15+_.x*.8,T.z*.15+_.z*.8);s.wanderAng+=(C-s.wanderAng)*i*.3}break}case"pause":{s.pauseTimer-=i,s.headLook=Math.sin(t*.6)*.4,s.pauseTimer<=0&&(s.state="walk",s.walkTimer=3+Math.random()*5);break}case"graze":{s._stT-=i,s.headBob=-.5,s._stT<=0&&(s.state="walk",s.walkTimer=2+Math.random()*4,s.headBob=0);break}case"drink":{if(s._stT-=i,s._drinkTgt){const A=s._drinkTgt.x-r,C=s._drinkTgt.z-a;Math.sqrt(A*A+C*C)>2?(s.wanderAng=Math.atan2(A,C),b=!0,E=s.speed*.7):s.headBob=-.6}s._stT<=0&&(s.state="walk",s.walkTimer=3+Math.random()*4,s.headBob=0,s._drinkTgt=null);break}case"rest":{s._stT-=i,o.position.y=Math.max(M-.3,o.position.y-i*.5),s._stT<=0&&(s.state="walk",s.walkTimer=2+Math.random()*3);break}case"alert":{s._stT-=i,c<x?(s.state="flee",s.wanderAng=p,s.fleeTimer=2.5+Math.random()*2):s._stT<=0&&(c<f*1.2*(f*1.2)?(s.state="watching",s._stT=3+Math.random()*3):(s.state="walk",s.walkTimer=2+Math.random()*3));break}case"watching":{s._stT-=i,b=!0,E=s.speed*.3,s.wanderAng=p,c<x?(s.state="flee",s.wanderAng=p,s.fleeTimer=2.5+Math.random()*2):(c>f*1.5*(f*1.5)||s._stT<=0)&&(s.state="walk",s.walkTimer=2+Math.random()*4);break}case"flee":{b=!0,E=s.speed*Z2,s.fleeTimer-=i,s._zigTimer-=i,s._zigTimer<=0&&(s._zigDir*=-1,s._zigTimer=.4+Math.random()*.4),s.wanderAng=p+s._zigDir*.3;const A=BE({x:r,z:a},s.wanderAng,Xt,3,1.5);A.x*A.x+A.z*A.z>.01&&(s.wanderAng+=Math.atan2(A.z,A.x)*.3);const C=OE({x:r,z:a},8);(C.x!==0||C.z!==0)&&(s.wanderAng=Math.atan2(C.z,C.x)),(s.fleeTimer<=0||c>f*2*(f*2))&&(s.state="walk",s.walkTimer=3+Math.random()*5);break}}if(b&&(o.position.x+=Math.sin(s.wanderAng)*E*i,o.position.z+=Math.cos(s.wanderAng)*E*i,s.legCycle+=i*E*3),o.position.x*o.position.x+o.position.z*o.position.z>jt*.9*(jt*.9)&&(s.wanderAng=Math.atan2(-o.position.x,-o.position.z)),s.state!=="rest"){const A=M-o.position.y;Math.abs(A)>.01?o.position.y+=Math.sign(A)*Math.min(Math.abs(A),i*2):o.position.y=M}if(o.rotation.y=s.wanderAng,s.state==="alert"||s.state==="watching"){const A=p-s.wanderAng;s.headLook+=(A*.5-s.headLook)*i*3}const S=s.headBob||0;s.neckPivot.rotation.x+=(S-s.neckPivot.rotation.x)*i*3,s.neckPivot.rotation.y+=(s.headLook-s.neckPivot.rotation.y)*i*4,b&&s.state!=="graze"&&s.state!=="drink"&&(s.neckPivot.rotation.x+=Math.sin(s.legCycle*2)*.05);for(let A=0;A<s.legPivots.length;A++){const C=s.legPivots[A];if(b){const L=C.isFront?0:Math.PI,U=C.side>0?Math.PI:0,H=Math.sin(s.legCycle+L+U)*.4*(E/s.speed);C.upper.rotation.x=H,C.lower.rotation.x=Math.max(0,-H*.6)}else s.state==="rest"&&o.position.y<-.1?(C.upper.rotation.x+=(.8-C.upper.rotation.x)*i*2,C.lower.rotation.x+=(1-C.lower.rotation.x)*i*2):(C.upper.rotation.x*=.9,C.lower.rotation.x*=.9)}s.tailPivot.rotation.x=Math.sin(t*1.5+s.phase)*.15,s.state==="flee"&&(s.tailPivot.rotation.x+=.3),s.state==="alert"?s.tailPivot.rotation.z=Math.sin(t*6)*.1:s.tailPivot.rotation.z*=.9;const w=Te(r,a,me*Me);if(s.mat.emissiveIntensity=(.6+Math.sin(t*.8+s.phase)*.3)*w,s.headLook*=.98,s.manePlanes)for(let A=0;A<s.manePlanes.length;A++)s.manePlanes[A].rotation.z=Math.sin(t*3+A*1.2+s.phase)*.15;if(s.branchOrbs)for(let A=0;A<s.branchOrbs.length;A++)s.branchOrbs[A].material.opacity=(.3+Math.sin(t*2.5+s.phase+A*1.5)*.3)*w;if(s.trailSpheres){const A=s.state==="walk"||s.state==="flee";for(let C=0;C<s.trailSpheres.length;C++){const L=s.trailSpheres[C],U=.03+C*.02;L.prevX+=(r-L.prevX)*U,L.prevY+=(o.position.y+.8-L.prevY)*U,L.prevZ+=(a-L.prevZ)*U,L.mesh.position.set(L.prevX,L.prevY+Math.sin(t*2+C*1.5)*.04,L.prevZ),L.mat.opacity=A?(.12-C*.03)*w:.02*w}}}}function Mx(i,t){for(let e=0;e<Vr.length;e++){const n=Vr[e],s=n.group,o=s.position.x,r=s.position.z,a=o-Z.pos.x,l=r-Z.pos.z;if(a*a+l*l>2025){s.visible=!1;continue}if(s.visible=!0,n._state==="patrol"){if(Math.random()<.002){let m=1/0,M=null;for(let v=0;v<ae.length;v++){const _=ae[v].x-o,T=ae[v].z-r,E=_*_+T*T;E<900&&E<m&&(m=E,M=ae[v])}for(let v=0;v<ri.length;v++){if(ri[v].glowIntensity<.3)continue;const _=ri[v].x-o,T=ri[v].z-r,E=_*_+T*T;E<900&&E<m&&(m=E,M=ri[v])}M&&(n._state="attracted",n._attractTarget=M,n._stT=6+Math.random()*8,Hr("moth",{x:o,z:r},Z.pos))}const h=Xe==="DAWN"?.005:Xe==="DEEP_NIGHT"?3e-4:.001;if(Math.random()<h){let m=1/0,M=null;for(let v=0;v<Xt.length;v++){const _=Xt[v].x-o,T=Xt[v].z-r,E=_*_+T*T;E<400&&E<m&&(m=E,M=Xt[v])}M&&(n._state="rest",n._restTree=M,n._stT=Xe==="DAWN"?8+Math.random()*10:4+Math.random()*6)}}const u=Xe==="DEEP_NIGHT"?1.6:Xe==="DAWN"?.5:1,c=Xe==="DEEP_NIGHT"?1.4:1;switch(n._state){case"patrol":{n.orbitAng+=i*.4*u;const h=n.centerX+Math.cos(n.orbitAng)*n.orbitR*c,m=n.centerZ+Math.sin(n.orbitAng)*n.orbitR*c;s.position.x+=(h-o)*i*1.5,s.position.z+=(m-r)*i*1.5,s.position.y=n.floatY+Math.sin(t*.7+n.phase)*.8,s.rotation.y=n.orbitAng+Math.PI/2;break}case"attracted":{if(n._stT-=i,!n._attractTarget||n._stT<=0){n._state="patrol",n._attractTarget=null;break}n.orbitAng+=i*.8;const h=n._attractTarget,m=Math.max(.5,n._stT*.4),M=h.x+Math.cos(n.orbitAng)*m,v=h.z+Math.sin(n.orbitAng)*m;s.position.x+=(M-o)*i*2,s.position.z+=(v-r)*i*2,s.position.y+=(2-s.position.y)*i*.5,s.rotation.y=n.orbitAng+Math.PI/2;break}case"rest":{if(n._stT-=i,!n._restTree||n._stT<=0){n._state="patrol",n._restTree=null,n.centerX=s.position.x,n.centerZ=s.position.z;break}const h=n._restTree,m=h.x+.5-o,M=h.z+.5-r,v=Math.sqrt(m*m+M*M);v>.3&&(s.position.x+=m/v*i*2,s.position.z+=M/v*i*2),s.position.y+=(2.5-s.position.y)*i*1.5,s.rotation.y=Math.atan2(m,M);break}}const p=Dt(s.position.x,s.position.z);s.position.y<p+1.5&&(s.position.y=p+1.5);const f=n._state==="rest"?.05:.4,d=Math.sin(t*n.flapSpeed+n.phase)*f;for(let h=0;h<s._wingPivots.length;h++){const m=s._wingPivots[h];m.pivot.rotation.z=d*m.side}const g=Math.sin(t*1.5+n.phase)*.5+.5,x=n._state==="attracted"?.4:0;n.wingMat.emissiveIntensity=(.5+g*.6+x)*Te(s.position.x,s.position.z,me*Me),n.wingMat.opacity=.45+g*.25}}function fA(i,t){const e=We.ShiftLeft||We.ShiftRight||Yr;let n=null;if(kr>5&&(cn==="SEEK"||cn==="RISING")){let s=1/0;for(let o=0;o<Bn.length;o++){if(Bn[o].found)continue;const r=Bn[o].x-Z.pos.x,a=Bn[o].z-Z.pos.z,l=r*r+a*a;l<s&&(s=l,n=Bn[o])}}for(let s=0;s<nu.length;s++){const o=nu[s],r=t*.5+o.phase+s/ug*6.28,a=e?4+s*2:1.5+s*.8,l=e?3+s:1.2+Math.sin(t*.7+o.phase)*.5;if(o.targetX=Z.pos.x+Math.cos(r)*a,o.targetY=Z.pos.y-Br+l,o.targetZ=Z.pos.z+Math.sin(r)*a,s===0&&n){const g=Math.min((kr-5)/3,.6);o.targetX+=(n.x-Z.pos.x)*g,o.targetZ+=(n.z-Z.pos.z)*g,o.targetY+=.5}const u=e?.8:2.5;o.velX+=(o.targetX-o.group.position.x)*u*i,o.velY+=(o.targetY-o.group.position.y)*u*i,o.velZ+=(o.targetZ-o.group.position.z)*u*i,o.velX*=.92,o.velY*=.92,o.velZ*=.92,o.group.position.x+=o.velX*i*4,o.group.position.y+=o.velY*i*4,o.group.position.z+=o.velZ*i*4;const c=Math.sin(t*2+o.phase)*.5+.5;o.glowMat.opacity=.3+c*.4,o.hazeMat.opacity=.08+c*.12;const p=t*(2.5+s*.5)+o.phase,f=.14+Math.sin(t*1.3+o.phase)*.06;o.group.children[5].position.set(Math.cos(p)*f,Math.sin(p*1.5)*.08,Math.sin(p)*f);for(let g=0;g<o.tendrils.length;g++){const x=o.tendrils[g],h=Math.sin(t*3+g*2.1+o.phase)*.3,m=.08+Math.sin(t*2+g*1.5)*.04;x.mesh.position.x=Math.cos(x.baseAng+h)*m,x.mesh.position.z=Math.sin(x.baseAng+h)*m,x.mesh.rotation.y=x.baseAng+h,x.mesh.rotation.z=Math.PI/3+Math.sin(t*2.5+g)*.2}for(let g=0;g<o.embers.length;g++){const x=(g+1)*.08;o.embers[g].position.y=-.06-x+Math.sin(t*4+g*1.4+o.phase)*.03,o.embers[g].position.x=Math.sin(t*2.5+g*2+o.phase)*.06,o.embers[g].material.opacity=.2+Math.sin(t*5+g*1.7)*.15}o.facet.rotation.y+=i*1.5,o.facet.rotation.x+=i*.7,o.halo.rotation.z+=i*.3,o.halo2.rotation.y+=i*.2}}function dA(i,t){for(let e=0;e<ri.length;e++){const n=ri[e],s=n.x-Z.pos.x,o=n.z-Z.pos.z,a=s*s+o*o<(xf+.5)*(xf+.5),l=a?1:0;n.glowIntensity+=(l-n.glowIntensity)*i*3,n.discMat.opacity=n.glowIntensity*.25*(.6+Math.sin(t*2+n.phase)*.4),n.mushMat.emissiveIntensity=(.2+n.glowIntensity*.8)*Te(n.x,n.z,me*Me),a&&Z.vel.y>0&&Z.vel.y<=Dl+.5&&(Z.vel.y=Dl+B2,n.glowIntensity=1.5,vE());const u=.08+n.glowIntensity*.25;n.sporeMat.opacity=u;for(let c=0;c<n.spores.length;c++){const p=n.spores[c];p.drift+=i*.3,p.mesh.position.y+=p.speed*i*(.5+n.glowIntensity),p.mesh.position.x=p.baseX+Math.sin(t*.8+p.drift)*.15,p.mesh.position.z=p.baseZ+Math.cos(t*.6+p.drift)*.12,p.mesh.position.y>.8&&(p.mesh.position.y=.03),p.mesh.scale.setScalar(.6+Math.sin(t*2+c)*.4)}for(let c=0;c<n.glowWorms.length;c++){const p=Math.sin(t*1.5+c*1.3+n.phase)*.5+.5;n.glowWorms[c].material.opacity=.1+p*.4+n.glowIntensity*.3}}}function pA(i,t){for(let e=0;e<Hi.length;e++){const n=Hi[e];if(n.popped){if(n.popTimer-=i,n.popTimer<=0){n.popped=!1,n.group.visible=!0;const c=y()*6.28,p=8+y()*jt*.5;n.homeX=Math.cos(c)*p,n.homeZ=Math.sin(c)*p,n.floatY=.5+y()*4,n.group.position.set(n.homeX,n.floatY,n.homeZ)}continue}n.driftAng+=i*.2;const s=n.homeX+Math.sin(n.driftAng)*3,o=n.homeZ+Math.cos(n.driftAng*.7)*3;n.group.position.x+=(s-n.group.position.x)*i*.5,n.group.position.z+=(o-n.group.position.z)*i*.5,n.group.position.y=n.floatY+Math.sin(t*.6+n.phase)*n.bobAmp;const r=(t*.1+n.phase)%1;n.shellMat.color.setRGB(Math.sin(r*6.28)*.15+.7,Math.sin(r*6.28+2.09)*.15+.7,Math.sin(r*6.28+4.19)*.15+.8),n.shellMat.opacity=.18+Math.sin(t*1.5+n.phase)*.08;const a=n.group.position.x-Z.pos.x,l=n.group.position.y-Z.pos.y,u=n.group.position.z-Z.pos.z;a*a+l*l+u*u<_p*_p*n.sc*n.sc&&(n.popped=!0,n.popTimer=8+Math.random()*8,n.group.visible=!1,Xb(n.group.position.x,n.group.position.y,n.group.position.z,6),aE(n.group.position,Z.pos))}}function mA(i,t){const e=Da();for(let n=0;n<ke.length;n++){const s=ke[n],o=.015+e*.01;for(let f=0;f<s.pads.length;f++)s.pads[f].mesh.position.y=.05+Math.sin(t*(.8+e*.4)+s.pads[f].phase)*o;const r=e*.08,a=Te(s.x,s.z,me*Me);s.waterMat.emissiveIntensity=(.15+r+Math.sin(t*1+s.phase)*.1)*a;const l=Math.sin(t*1.2+s.phase)*.5+.5;s.flMat.emissiveIntensity=(.3+l*.5)*a;const u=.25+e*.2,c=.12+e*.08;for(let f=0;f<s.ripples.length;f++){const d=s.ripples[f],g=(t*u+d.phase)%1,x=.2+g*s.pondR*.8;d.mesh.scale.setScalar(x),d.mesh.material.opacity=(1-g)*c}const p=1+e*.5;for(let f=0;f<s.tadpoles.length;f++){const d=s.tadpoles[f];d.ang+=d.speed*p*i;const g=Math.cos(d.ang)*d.orbR,x=Math.sin(d.ang)*d.orbR;d.body.position.x=g,d.body.position.z=x,d.body.rotation.y=d.ang+Math.PI/2;const h=.02;d.tail.position.x=g-Math.cos(d.ang)*h,d.tail.position.z=x-Math.sin(d.ang)*h,d.tail.rotation.y=d.ang,d.tail.rotation.z=Math.PI/2+Math.sin(t*(8+e*2)+f*3)*.4}}}function gA(i,t){if(Sh-=i,Sh<=0){Sh=.5;for(let o=0;o<ae.length;o++){const r=ae[o],a=r.x-Z.pos.x,l=r.z-Z.pos.z;if(a*a+l*l<36){mi={x:r.x,z:r.z},Bi=0;break}}}const e=uA();if(!mi){e.visible=!1;return}if(Bi+=i*12,Bi>30){mi=null,Bi=0,e.visible=!1;return}e.visible=!0,e.position.set(mi.x,.15,mi.z),e.scale.setScalar(Bi),e.material.opacity=(1-Bi/30)*.45;const n=Bi,s=4;for(let o=0;o<$n.length;o++){const r=$n[o],a=r.x-mi.x,l=r.z-mi.z,u=Math.sqrt(a*a+l*l);if(Math.abs(u-n)<s){const c=1-Math.abs(u-n)/s;r.capMat.emissiveIntensity=Math.max(r.capMat.emissiveIntensity,(r.base+c*2)*Te(r.x,r.z,me*Me))}}for(let o=0;o<Yi.length;o++){const r=Yi[o],a=r.group.position.x-mi.x,l=r.group.position.z-mi.z,u=Math.sqrt(a*a+l*l);if(Math.abs(u-n)<s){const c=1-Math.abs(u-n)/s;r.petalMat.emissiveIntensity=Math.max(r.petalMat.emissiveIntensity,(.3+c*1.5)*Te(r.group.position.x,r.group.position.z,me*Me))}}}function xA(i,t){const e=Z.pos.x;Z.pos.y;const n=Z.pos.z,s=Da(),o=xs?.6:s>.3?s*.4:0;for(let u=0;u<Yi.length;u++){const c=Yi[u],p=c.group.position.x,f=c.group.position.z,d=p-e,g=f-n,h=d*d+g*g<16?1:0;c._react=c._react||0,c._react+=(h-c._react)*i*(h>0?4:1.5);const m=(1+c._react*.15)*(1-o*.12),M=(1+c._react*.05)*(1-o*.15);c.group.scale.set(m,M,m),c.petalMat.emissiveIntensity+=c._react*.6*Te(p,f,me*Me)*(1-o*.4)}for(let u=0;u<$n.length;u++){const c=$n[u],p=c.x-e,f=c.z-n,g=p*p+f*f<4?1:0;c._touch=c._touch||0,c._touch+=(g-c._touch)*i*(g>0?6:1.5);const x=s*.4;c.capMat.emissiveIntensity+=(c._touch*1.5+x)*Te(c.x,c.z,me*Me);const h=1+c._touch*.08;c.group.scale.set(h,1+c._touch*.04,h)}for(let u=0;u<$a.length;u++){const c=$a[u],p=c.group.position.x,f=c.group.position.z,d=p-e,g=f-n,h=d*d+g*g<2.25?.65:1;c._curl=c._curl===void 0?1:c._curl,c._curl+=(h-c._curl)*i*(h<1?4:1.5),c.group.scale.set(1+(1-c._curl)*.3,c._curl,1+(1-c._curl)*.3)}lA();const r=Tr==="FOG_BANK"?.5:1;let a=0,l=0;for(let u=0;u<ae.length;u++){const c=ae[u],p=c.x-e,f=c.z-n;if(p*p+f*f<36)for(let d=0;d<ae.length;d++){if(u===d)continue;const g=ae[d],x=c.x-g.x,h=c.z-g.z,m=x*x+h*h;if(m<400){a++;const M=(1-Math.sqrt(m)/20)*.8*r;if(g.mat.emissiveIntensity+=M*Te(g.x,g.z,me*Me),l<vd){const v=Md[l],_=v.geo.attributes.position.array,T=1,E=1;_[0]=c.x,_[1]=T,_[2]=c.z,_[3]=g.x,_[4]=E,_[5]=g.z,v.geo.attributes.position.needsUpdate=!0,v.geo.computeBoundingSphere(),v.active=!0;const b=Math.sin(t*3+u*1.5+d*.7)*.3+.5;v.opacity=M*b*Te(c.x,c.z,me*Me),v.line.material.opacity=v.opacity,v.line.visible=!0,l++}}}}for(let u=l;u<vd;u++){const c=Md[u];c.line.visible&&(c.opacity*=.85,c.line.material.opacity=c.opacity,c.opacity<.01&&(c.line.visible=!1))}return a}let Jc="EXPLORE",bh=0,Th=0;function vA(i,t){let e=!1;for(let x=0;x<ae.length;x++){const h=ae[x].x-Z.pos.x,m=ae[x].z-Z.pos.z;if(h*h+m*m<64){e=!0;break}}Jc=e?"NEAR_CRYSTAL":"EXPLORE",bh+=i;const n=Da(),s=Math.max(.2,1-n*.8),o=(Jc==="NEAR_CRYSTAL"?.08:.25)/s,r=Math.floor((Jc==="NEAR_CRYSTAL"?120:100)*s);if(bh>o&&(bh=0,zg(0,t)<r))if(Jc==="NEAR_CRYSTAL")for(let h=0;h<ae.length;h++){const m=ae[h].x-Z.pos.x,M=ae[h].z-Z.pos.z;m*m+M*M<100&&al(ae[h].x,Dt(ae[h].x,ae[h].z)+1,ae[h].z,3+Math.random()*4)}else if(Math.random()<.3&&Yi.length>0){const h=Yi[Math.floor(Math.random()*Yi.length)];if(h._react>.3){const m=h.group.position.x,M=h.group.position.z;al(m+(Math.random()-.5)*2,Dt(m,M)+.5,M+(Math.random()-.5)*2,4+Math.random()*6)}}else{const h=Math.random()*6.28,m=5+Math.random()*25,M=Z.pos.x+Math.cos(h)*m,v=Z.pos.z+Math.sin(h)*m;al(M,Dt(M,v),v,6+Math.random()*10)}if(Th+=i,Th>.2){Th=0;for(let x=0;x<$n.length;x++){const h=$n[x],m=h.x-Z.pos.x,M=h.z-Z.pos.z;m*m+M*M<200&&Math.random()<.15&&zb(h.x,.6*h.group.scale.x,h.z)}}for(let x=0;x<$n.length;x++){const h=$n[x],m=h.x-Z.pos.x,M=(h.group.position.y||0)-Z.pos.y,v=h.z-Z.pos.z;if(m*m+M*M+v*v>2500){h.group.visible&&(h.group.visible=!1);continue}h.group.visible||(h.group.visible=!0);const T=Math.sin(t*h.speed+h.phase)*.5+.5;h.capMat.emissiveIntensity=h.base*(.7+T*1)*Te(h.x,h.z,me*Me)}for(let x=0;x<ae.length;x++){const h=ae[x],m=Math.sin(t*.6+h.phase)*.5+.5,M=Te(h.x,h.z,me*Me);h.mat.emissiveIntensity=(1+m*1.5)*M,h.group.children[0].rotation.y+=i*.15,h.light&&(h.light.intensity=(.3+m*.4)*M)}if(!Es.length)for(let x=0;x<ae.length;x++)Es.push({idx:x,dist:0});const a=Z.pos.x-fm,l=Z.pos.z-dm;if(a*a+l*l>1){fm=Z.pos.x,dm=Z.pos.z;for(let x=0;x<ae.length;x++){const h=ae[x],m=h.x-Z.pos.x,M=h.z-Z.pos.z;Es[x].idx=x,Es[x].dist=m*m+M*M}Es.sort((x,h)=>x.dist-h.dist)}for(let x=0;x<Qs.length;x++)if(x<Es.length&&Es[x].dist<2500){const h=ae[Es[x].idx],m=Math.sin(t*.6+h.phase)*.5+.5;Qs[x].position.set(h.x,1.5,h.z),Qs[x].intensity=(1.5+m*2)*Te(h.x,h.z,me*Me),Qs[x].distance=16,Qs[x].color.setHex(N.crystal)}else Qs[x].intensity=0;if(ms>.8&&Math.random()<.005)for(let x=0;x<Fa.length;x++){const h=Fa[x];if(!h.dispersed&&Math.random()<.1){h.dispersed=!0;for(let m=0;m<8;m++)Tg(h.x,h.h+.05,h.z);for(let m=2;m<h.group.children.length;m++)h.group.children[m].visible=!1;h.regrowTimer=15+Math.random()*10}}const u=ms>.3?(ms-.3)*.02:0,c=xs?.03:0;if(Math.random()<u+c)for(let x=0;x<Xt.length;x++){const h=Xt[x],m=h.x-Z.pos.x,M=h.z-Z.pos.z;if(m*m+M*M<900&&Math.random()<.15){const v=(h.treeH||10)*.7+(h.y||0);$b(h.x,v,h.z);break}}gx(i,t),xx(i,t),vx(i,t),Mx(i,t),wg(i,t),mx(i,t);const p=Z.pos.x,f=Z.pos.y,d=Z.pos.z;for(let x=0;x<Ai.length;x++){const h=Ai[x],m=h.x||h.group.position.x,M=h.z||h.group.position.z,v=m-p,_=(h.group.position.y||0)-f,T=M-d,E=v*v+_*_+T*T;if(E>2500){h.group.visible&&(h.group.visible=!1);continue}if(h.group.visible||(h.group.visible=!0),!h.sparkles||E>400)continue;let b=0;for(let L=0;L<ae.length;L++){const U=ae[L].x-m,H=ae[L].z-M,G=U*U+H*H;G<100&&(b=Math.max(b,(1-Math.sqrt(G)/10)*.6))}const R=m-Z.pos.x,S=M-Z.pos.z,w=R*R+S*S,A=w<25?(1-Math.sqrt(w)/5)*.3:0;let C=0;if(mi&&Bi>0){const L=m-mi.x,U=M-mi.z,H=Math.sqrt(L*L+U*U);Math.abs(H-Bi)<3&&(C=(1-Math.abs(H-Bi)/3)*.8)}for(let L=0;L<h.sparkles.length;L++){const U=Math.sin(t*4+x*2.3+L*1.7)*.35;h.sparkles[L].material.opacity=.15+U+b+A+C}h.mossMat&&A>0&&(h.mossMat.emissiveIntensity=.05+A*.4*Math.sin(t*2+x)*.5+.5)}fA(i,t),KS(Fa,i,t,Z.pos),dA(i,t),pA(i,t),mA(i,t),Gg(i,t,Z.pos),$S(i,t),jb(i,t),Hb(i),qb(i),sT(i,t),gA(i);const g=xA(i,t);if(MT(i,t),Lb(t),Z.onGround&&Z.vel.x*Z.vel.x+Z.vel.z*Z.vel.z>.5){const h=Math.atan2(Z.vel.x,Z.vel.z),m=We.ShiftLeft||We.ShiftRight||Yr;Qb(Z.pos.x,Z.pos.z,h,m)}tT(i,Da()),SE(i,Z.pos,ke,hx,Xe,Da()),rE(i),$E(Z.pos,en,ei,Ci,Vr,ri,ke,g),KE(i),NE(i,sn.domElement)}let tn=0,yx=!1,xm=!1;function MA(){xm||(xm=!0,QE(()=>{yx=!0,rS(!0),cA()}))}function _x(){requestAnimationFrame(_x);const i=Math.min(hg.getDelta(),.1);tn+=i,TT(i);const t=IT(i,tn,Z.pos);DT(i,Z.pos,t,fo,hr),TS(i,tn,Xe,me,Tr),VE(i),Me=1.15+ti*.05;const e=Math.min(ti,vn);mm.set(Hd[e]),pm.lerp(mm,Math.min(2*i,1)),je.color.copy(pm),je.intensity=X2[e],je.distance=q2[e];const n=Te(Z.pos.x,Z.pos.z,1),s=gr+(1-gr)*(ti/vn),o=n*.7+s*.3;Oa+=(o-Oa)*Math.min(8*i,1);const r=Oa;if(iS(r),sn.toneMappingExposure=.7+2.1*r,r<1){const u=1-r;ot.fog.density*=1+1.5*u,zl.intensity*=.15+.85*r,je.intensity*=.1+.9*r,je.distance*=.25+.75*r,or&&(or.threshold=.85+u*.35)}else or&&(or.threshold=.85);ki>0&&(zl.intensity+=ki*.8,ot.background.r=Math.min(ot.background.r+ki*.08,.25),ot.background.g=Math.min(ot.background.g+ki*.08,.25),ot.background.b=Math.min(ot.background.b+ki*.12,.35));const a=Jd();a==="puff"?(je.color.r+=(1-je.color.r)*2*i,je.color.g+=(.667-je.color.g)*2*i,je.color.b+=(.533-je.color.b)*2*i):a||(je.color.r+=(.4-je.color.r)*2*i,je.color.g+=(.533-je.color.g)*2*i,je.color.b+=(.533-je.color.b)*2*i),eE(i,ms,t,xs,ki,Xe,Z.pos,ke),fE(Z.pos),Math.sqrt(Z.vel.x*Z.vel.x+Z.vel.z*Z.vel.z);let l=!1;for(let u=0;u<ke.length;u++){const c=ke[u].x-Z.pos.x,p=ke[u].z-Z.pos.z;if(c*c+p*p<225){l=!0;break}}if(!l)for(let u=0;u<ri.length;u++){const c=ri[u].x-Z.pos.x,p=ri[u].z-Z.pos.z;if(c*c+p*p<144){l=!0;break}}if(TE(i),Fb(fo,hr),ZS(fo,hr,ms),Yb(fo,hr),!yx){tA(i,ln),eA()||(ln.position.set(0,Br,0),ln.rotation.order="YXZ",ln.rotation.y+=i*.08,ln.rotation.x=0);for(let u=0;u<$n.length;u++){const c=$n[u],p=Math.sin(tn*c.speed+c.phase)*.5+.5;c.capMat.emissiveIntensity=c.base*(.5+p*.8)*me}for(let u=0;u<ae.length;u++){const c=ae[u];c.mat.emissiveIntensity=(1+Math.sin(tn*.6+c.phase)*.5*1.5+.75)*me}gx(i,tn),xx(i,tn),vx(i,tn),Mx(i,tn),wg(i,tn),mx(i,tn),Gg(i,tn,Z.pos);for(let u=0;u<Hi.length;u++)Hi[u].popped||(Hi[u].group.position.y=Hi[u].floatY+Math.sin(tn*.6+Hi[u].phase)*Hi[u].bobAmp);for(let u=0;u<ke.length;u++)for(let c=0;c<ke[u].pads.length;c++)ke[u].pads[c].mesh.position.y=.05+Math.sin(tn*.8+ke[u].pads[c].phase)*.015;for(let u=0;u<Bn.length;u++){const c=Bn[u],p=Math.sin(tn*1.5+c.phase)*.5+.5;c.group.position.y=c.flyY+Math.sin(tn*.8+c.phase)*.3,c.glowMat.opacity=.3+p*.4}bp();return}CS(i),vA(i,tn),zg(i,tn),Ob(i),ln.position.copy(Z.pos),ln.position.y+=Sg,ln.rotation.order="YXZ",ln.rotation.y=Xa,ln.rotation.x=mo,oA(i,Z.pos),bp()}try{Sf(0,0,5),vS(),bT({scene:ot,moon:yi,moon2:Wd,hemiLight:zl,playerLight:je}),hA();const i=mS();AS(Xt,Ai),RS(Vp),ES(t=>{let e=!1;for(let n=0;n<ke.length;n++){const s=ke[n].x-Z.pos.x,o=ke[n].z-Z.pos.z;if(s*s+o*o<16){e=!0;break}}iE(t,e),Math.random()<.4&&Vp(Z.pos.x,Z.pos.z,1)},()=>sE(),t=>oE(t)),PT(),LT(),Db(150),Nb(60),sS(),Bb(R2),kb(20),YS(40),Wb(30),Zb(50),Jb(),nT(),bS(),Ab(),Pb(),Ib(),tE(),YE(),LE(),sA(),rA(),kE(Bn),vT({orbs:Bn,obeliskGroup:_b(),obeliskMat:wb(),obeliskGlowMat:Sb(),pinnacleOrb:bb(),pinnacleRings:Tb(),moatMesh:Rb(),moatMat:Cb(),rainbowArcs:Za,player:Z,makeLaser:rT,orbHudEl:aA(),deers:en,puffs:ei,jellies:Ci,moths:Vr,trees:Xt,treeMeshes:Fs,groundMesh:i,playOrbCollect:cE,playOrbWarble:lE,playLaserZap:uE,playLaserHum:hE,stopLaserHums:dE,notifyOrbCollected:HE,playOrbReject:gE,showOrbRejectHint:()=>jE(),showOrbDiscovery:ZE,spawnOrbBurst:iT,startResonanceDrone:ME,runeFaces:Eb()}),oS(MA);for(let t=0;t<50;t++){const e=Math.random()*6.28,n=3+Math.random()*jt*.7,s=Math.cos(e)*n,o=Math.sin(e)*n;al(s,Dt(s,o),o,8+Math.random()*12)}console.log("✓ Init: trees="+Xt.length+" mush="+$n.length+" crystals="+ae.length+" orbs="+Bn.length+" creatures="+(Ci.length+ei.length+en.length+Vr.length)+" wisps="+nu.length+" dandelions="+Fa.length+" fairyRings="+ri.length+" bubbles="+Hi.length+" ponds="+ke.length+" scene="+ot.children.length),_x()}catch(i){console.error("INIT FAILED:",i),document.body.innerHTML='<div style="color:red;padding:30px;font-family:monospace"><h2>Init Failed</h2><pre>'+(i.stack||i.message)+"</pre></div>"}
