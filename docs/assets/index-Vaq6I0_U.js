(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oh="172",t0=0,Su=1,e0=2,ld=1,hd=2,yi=3,Zi=0,xn=1,Lt=2,Ti=0,lo=1,he=2,bu=3,Eu=4,n0=5,ps=100,i0=101,s0=102,o0=103,r0=104,a0=200,c0=201,l0=202,h0=203,dl=204,pl=205,u0=206,f0=207,d0=208,p0=209,m0=210,g0=211,x0=212,_0=213,M0=214,ml=0,gl=1,xl=2,yo=3,_l=4,Ml=5,vl=6,yl=7,ud=0,v0=1,y0=2,qi=0,w0=1,S0=2,b0=3,fd=4,E0=5,T0=6,A0=7,dd=300,wo=301,So=302,wl=303,Sl=304,Qa=306,Ra=1e3,gs=1001,bl=1002,Ln=1003,C0=1004,Pr=1005,li=1006,cc=1007,xs=1008,Pi=1009,pd=1010,md=1011,fr=1012,Bh=1013,Ts=1014,hi=1015,Ai=1016,kh=1017,Gh=1018,bo=1020,gd=35902,xd=1021,_d=1022,jn=1023,Md=1024,vd=1025,ho=1026,Eo=1027,Hh=1028,Vh=1029,yd=1030,Wh=1031,Xh=1033,ga=33776,xa=33777,_a=33778,Ma=33779,El=35840,Tl=35841,Al=35842,Cl=35843,Rl=36196,Pl=37492,Il=37496,Ll=37808,Dl=37809,Ul=37810,Nl=37811,zl=37812,Fl=37813,Ol=37814,Bl=37815,kl=37816,Gl=37817,Hl=37818,Vl=37819,Wl=37820,Xl=37821,va=36492,Yl=36494,ql=36495,wd=36283,Zl=36284,$l=36285,jl=36286,R0=3200,P0=3201,Sd=0,I0=1,Hi="",gn="srgb",To="srgb-linear",Pa="linear",de="srgb",Ds=7680,Tu=519,L0=512,D0=513,U0=514,bd=515,N0=516,z0=517,F0=518,O0=519,Au=35044,we=35048,Cu="300 es",bi=2e3,Ia=2001;class Lo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lc=Math.PI/180,Kl=180/Math.PI;function Do(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[s&255]+Ye[s>>8&255]+Ye[s>>16&255]+Ye[s>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function Zt(s,t,e){return Math.max(t,Math.min(e,s))}function B0(s,t){return(s%t+t)%t}function hc(s,t,e){return(1-e)*s+e*t}function Oo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Mn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,i,o,r,a,c,l){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l)}set(t,e,n,i,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],E=i[1],v=i[4],M=i[7],A=i[2],T=i[5],b=i[8];return o[0]=r*_+a*E+c*A,o[3]=r*p+a*v+c*T,o[6]=r*m+a*M+c*b,o[1]=l*_+h*E+u*A,o[4]=l*p+h*v+u*T,o[7]=l*m+h*M+u*b,o[2]=f*_+d*E+g*A,o[5]=f*p+d*v+g*T,o[8]=f*m+d*M+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+i*o*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,f=a*c-h*o,d=l*o-r*c,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*r)*_,t[3]=f*_,t[4]=(h*e-i*c)*_,t[5]=(i*o-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(uc.makeScale(t,e)),this}rotate(t){return this.premultiply(uc.makeRotation(-t)),this}translate(t,e){return this.premultiply(uc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const uc=new Vt;function Ed(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function La(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function k0(){const s=La("canvas");return s.style.display="block",s}const Ru={};function Qs(s){s in Ru||(Ru[s]=!0,console.warn(s))}function G0(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function H0(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function V0(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Pu=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iu=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function W0(){const s={enabled:!0,workingColorSpace:To,spaces:{},convert:function(i,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===de&&(i.r=Ci(i.r),i.g=Ci(i.g),i.b=Ci(i.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===de&&(i.r=uo(i.r),i.g=uo(i.g),i.b=uo(i.b))),i},fromWorkingColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},toWorkingColorSpace:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hi?Pa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,r){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[To]:{primaries:t,whitePoint:n,transfer:Pa,toXYZ:Pu,fromXYZ:Iu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:t,whitePoint:n,transfer:de,toXYZ:Pu,fromXYZ:Iu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),s}const oe=W0();function Ci(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function uo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Us;class X0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Us===void 0&&(Us=La("canvas")),Us.width=t.width,Us.height=t.height;const n=Us.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Us}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=La("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=Ci(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ci(e[n]/255)*255):e[n]=Ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Y0=0;class Td{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Do(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(fc(i[r].image)):o.push(fc(i[r]))}else o=fc(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function fc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?X0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let q0=0;class Ke extends Lo{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=gs,i=gs,o=li,r=xs,a=jn,c=Pi,l=Ke.DEFAULT_ANISOTROPY,h=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Do(),this.name="",this.source=new Td(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ra:t.x=t.x-Math.floor(t.x);break;case gs:t.x=t.x<0?0:1;break;case bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ra:t.y=t.y-Math.floor(t.y);break;case gs:t.y=t.y<0?0:1;break;case bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=dd;Ke.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,i=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,M=(d+1)/2,A=(m+1)/2,T=(h+f)/4,b=(u+_)/4,S=(g+p)/4;return v>M&&v>A?v<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(v),i=T/n,o=b/n):M>A?M<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(M),n=T/i,o=S/i):A<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(A),n=b/o,i=S/o),this.set(n,i,o,e),this}let E=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(u-_)/E,this.z=(f-h)/E,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Z0 extends Lo{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ke(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Td(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends Z0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ad extends Ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $0 extends Ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=o[r+0],d=o[r+1],g=o[r+2],_=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let p=1-a;const m=c*f+l*d+h*g+u*_,E=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const A=Math.sqrt(v),T=Math.atan2(A,m*E);p=Math.sin(p*T)/A,a=Math.sin(a*T)/A}const M=a*E;if(c=c*p+f*M,l=l*p+d*M,h=h*p+g*M,u=u*p+_*M,p===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=o[r],f=o[r+1],d=o[r+2],g=o[r+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(o/2),f=c(n/2),d=c(i/2),g=c(o/2);switch(r){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(o-l)*d,this._z=(r-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(o+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(o-l)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(r-i)/d,this._x=(o+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+i*l-o*c,this._y=i*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-i*a,this._w=r*h-n*a-i*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=r*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=o*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*i-a*n),h=2*(a*e-o*i),u=2*(o*n-r*e);return this.x=e+c*l+r*u-a*h,this.y=n+c*h+a*l-o*u,this.z=i+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-o*a,this.y=o*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dc.copy(this).projectOnVector(t),this.sub(dc)}reflect(t){return this.sub(dc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dc=new N,Lu=new yr;class Rs{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Yn):Yn.fromBufferAttribute(o,r),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bo),Lr.subVectors(this.max,Bo),Ns.subVectors(t.a,Bo),zs.subVectors(t.b,Bo),Fs.subVectors(t.c,Bo),Li.subVectors(zs,Ns),Di.subVectors(Fs,zs),Ji.subVectors(Ns,Fs);let e=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-Ji.z,Ji.y,Li.z,0,-Li.x,Di.z,0,-Di.x,Ji.z,0,-Ji.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-Ji.y,Ji.x,0];return!pc(e,Ns,zs,Fs,Lr)||(e=[1,0,0,0,1,0,0,0,1],!pc(e,Ns,zs,Fs,Lr))?!1:(Dr.crossVectors(Li,Di),e=[Dr.x,Dr.y,Dr.z],pc(e,Ns,zs,Fs,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gi=[new N,new N,new N,new N,new N,new N,new N,new N],Yn=new N,Ir=new Rs,Ns=new N,zs=new N,Fs=new N,Li=new N,Di=new N,Ji=new N,Bo=new N,Lr=new N,Dr=new N,Qi=new N;function pc(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){Qi.fromArray(s,o);const a=i.x*Math.abs(Qi.x)+i.y*Math.abs(Qi.y)+i.z*Math.abs(Qi.z),c=t.dot(Qi),l=e.dot(Qi),h=n.dot(Qi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const j0=new Rs,ko=new N,mc=new N;class Ps{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):j0.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ko.subVectors(t,this.center);const e=ko.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ko,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ko.copy(t.center).add(mc)),this.expandByPoint(ko.copy(t.center).sub(mc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new N,gc=new N,Ur=new N,Ui=new N,xc=new N,Nr=new N,_c=new N;class Yh{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){gc.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),Ui.copy(this.origin).sub(gc);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ur),a=Ui.dot(this.direction),c=-Ui.dot(Ur),l=Ui.lengthSq(),h=Math.abs(1-r*r);let u,f,d,g;if(h>0)if(u=r*c-a,f=r*a-c,g=o*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+r*f+2*a)+f*(r*u+f+2*c)+l}else f=o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*c)+l;else f=-o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-r*o+a)),f=u>0?-o:Math.min(Math.max(-o,-c),o),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-o,-c),o),d=f*(f+2*c)+l):(u=Math.max(0,-(r*o+a)),f=u>0?o:Math.min(Math.max(-o,-c),o),d=-u*u+f*(f+2*c)+l);else f=r>0?-o:o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(gc).addScaledVector(Ur,f),d}intersectSphere(t,e){xi.subVectors(t.center,this.origin);const n=xi.dot(this.direction),i=xi.dot(xi)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(o=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,n,i,o){xc.subVectors(e,t),Nr.subVectors(n,t),_c.crossVectors(xc,Nr);let r=this.direction.dot(_c),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Ui.subVectors(this.origin,t);const c=a*this.direction.dot(Nr.crossVectors(Ui,Nr));if(c<0)return null;const l=a*this.direction.dot(xc.cross(Ui));if(l<0||c+l>r)return null;const h=-a*Ui.dot(_c);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,i,o,r,a,c,l,h,u,f,d,g,_,p){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l,h,u,f,d,g,_,p)}set(t,e,n,i,o,r,a,c,l,h,u,f,d,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=o,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Os.setFromMatrixColumn(t,0).length(),o=1/Os.setFromMatrixColumn(t,1).length(),r=1/Os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const f=r*h,d=r*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=r*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=r*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-r*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=r*h,e[9]=_-f*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const f=r*h,d=r*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const f=r*c,d=r*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=r*c,d=r*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=r*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(K0,t,J0)}lookAt(t,e,n){const i=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),Ni.crossVectors(n,En),Ni.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Ni.crossVectors(n,En)),Ni.normalize(),zr.crossVectors(En,Ni),i[0]=Ni.x,i[4]=zr.x,i[8]=En.x,i[1]=Ni.y,i[5]=zr.y,i[9]=En.y,i[2]=Ni.z,i[6]=zr.z,i[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],E=n[3],v=n[7],M=n[11],A=n[15],T=i[0],b=i[4],S=i[8],y=i[12],x=i[1],C=i[5],U=i[9],L=i[13],z=i[2],V=i[6],G=i[10],Z=i[14],W=i[3],rt=i[7],ut=i[11],yt=i[15];return o[0]=r*T+a*x+c*z+l*W,o[4]=r*b+a*C+c*V+l*rt,o[8]=r*S+a*U+c*G+l*ut,o[12]=r*y+a*L+c*Z+l*yt,o[1]=h*T+u*x+f*z+d*W,o[5]=h*b+u*C+f*V+d*rt,o[9]=h*S+u*U+f*G+d*ut,o[13]=h*y+u*L+f*Z+d*yt,o[2]=g*T+_*x+p*z+m*W,o[6]=g*b+_*C+p*V+m*rt,o[10]=g*S+_*U+p*G+m*ut,o[14]=g*y+_*L+p*Z+m*yt,o[3]=E*T+v*x+M*z+A*W,o[7]=E*b+v*C+M*V+A*rt,o[11]=E*S+v*U+M*G+A*ut,o[15]=E*y+v*L+M*Z+A*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+o*c*u-i*l*u-o*a*f+n*l*f+i*a*d-n*c*d)+_*(+e*c*d-e*l*f+o*r*f-i*r*d+i*l*h-o*c*h)+p*(+e*l*u-e*a*d-o*r*u+n*r*d+o*a*h-n*l*h)+m*(-i*a*h-e*c*u+e*a*f+i*r*u-n*r*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],E=u*p*l-_*f*l+_*c*d-a*p*d-u*c*m+a*f*m,v=g*f*l-h*p*l-g*c*d+r*p*d+h*c*m-r*f*m,M=h*_*l-g*u*l+g*a*d-r*_*d-h*a*m+r*u*m,A=g*u*c-h*_*c-g*a*f+r*_*f+h*a*p-r*u*p,T=e*E+n*v+i*M+o*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=E*b,t[1]=(_*f*o-u*p*o-_*i*d+n*p*d+u*i*m-n*f*m)*b,t[2]=(a*p*o-_*c*o+_*i*l-n*p*l-a*i*m+n*c*m)*b,t[3]=(u*c*o-a*f*o-u*i*l+n*f*l+a*i*d-n*c*d)*b,t[4]=v*b,t[5]=(h*p*o-g*f*o+g*i*d-e*p*d-h*i*m+e*f*m)*b,t[6]=(g*c*o-r*p*o-g*i*l+e*p*l+r*i*m-e*c*m)*b,t[7]=(r*f*o-h*c*o+h*i*l-e*f*l-r*i*d+e*c*d)*b,t[8]=M*b,t[9]=(g*u*o-h*_*o-g*n*d+e*_*d+h*n*m-e*u*m)*b,t[10]=(r*_*o-g*a*o+g*n*l-e*_*l-r*n*m+e*a*m)*b,t[11]=(h*a*o-r*u*o-h*n*l+e*u*l+r*n*d-e*a*d)*b,t[12]=A*b,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*p+e*u*p)*b,t[14]=(g*a*i-r*_*i-g*n*c+e*_*c+r*n*p-e*a*p)*b,t[15]=(r*u*i-h*a*i+h*n*c-e*u*c-r*n*f+e*a*f)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*r,0,l*c-i*a,h*c+i*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,f=o*l,d=o*h,g=o*u,_=r*h,p=r*u,m=a*u,E=c*l,v=c*h,M=c*u,A=n.x,T=n.y,b=n.z;return i[0]=(1-(_+m))*A,i[1]=(d+M)*A,i[2]=(g-v)*A,i[3]=0,i[4]=(d-M)*T,i[5]=(1-(f+m))*T,i[6]=(p+E)*T,i[7]=0,i[8]=(g+v)*b,i[9]=(p-E)*b,i[10]=(1-(f+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=Os.set(i[0],i[1],i[2]).length();const r=Os.set(i[4],i[5],i[6]).length(),a=Os.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],qn.copy(this);const l=1/o,h=1/r,u=1/a;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,e.setFromRotationMatrix(qn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=bi){const c=this.elements,l=2*o/(e-t),h=2*o/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,g;if(a===bi)d=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===Ia)d=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=bi){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(r-o),f=(e+t)*l,d=(n+i)*h;let g,_;if(a===bi)g=(r+o)*u,_=-2*u;else if(a===Ia)g=o*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Os=new N,qn=new fe,K0=new N(0,0,0),J0=new N(1,1,1),Ni=new N,zr=new N,En=new N,Du=new fe,Uu=new yr;class fi{constructor(t=0,e=0,n=0,i=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Zt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Du.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Du,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uu.setFromEuler(this),this.setFromQuaternion(Uu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Cd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Q0=0;const Nu=new N,Bs=new yr,_i=new fe,Fr=new N,Go=new N,tm=new N,em=new yr,zu=new N(1,0,0),Fu=new N(0,1,0),Ou=new N(0,0,1),Bu={type:"added"},nm={type:"removed"},ks={type:"childadded",child:null},Mc={type:"childremoved",child:null};class me extends Lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Do(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new N,e=new fi,n=new yr,i=new N(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new Vt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(zu,t)}rotateY(t){return this.rotateOnAxis(Fu,t)}rotateZ(t){return this.rotateOnAxis(Ou,t)}translateOnAxis(t,e){return Nu.copy(t).applyQuaternion(this.quaternion),this.position.add(Nu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zu,t)}translateY(t){return this.translateOnAxis(Fu,t)}translateZ(t){return this.translateOnAxis(Ou,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fr.copy(t):Fr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Go,Fr,this.up):_i.lookAt(Fr,Go,this.up),this.quaternion.setFromRotationMatrix(_i),i&&(_i.extractRotation(i.matrixWorld),Bs.setFromRotationMatrix(_i),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bu),ks.child=t,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nm),Mc.child=t,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bu),ks.child=t,this.dispatchEvent(ks),ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,t,tm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,em,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),f=r(t.skeletons),d=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}me.DEFAULT_UP=new N(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new N,Mi=new N,vc=new N,vi=new N,Gs=new N,Hs=new N,ku=new N,yc=new N,wc=new N,Sc=new N,bc=new pe,Ec=new pe,Tc=new pe;class $n{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Zn.subVectors(t,e),i.cross(Zn);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){Zn.subVectors(i,e),Mi.subVectors(n,e),vc.subVectors(t,e);const r=Zn.dot(Zn),a=Zn.dot(Mi),c=Zn.dot(vc),l=Mi.dot(Mi),h=Mi.dot(vc),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,g=(r*h-a*c)*f;return o.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,n,i,o,r,a,c){return this.getBarycoord(t,e,n,i,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,vi.x),c.addScaledVector(r,vi.y),c.addScaledVector(a,vi.z),c)}static getInterpolatedAttribute(t,e,n,i,o,r){return bc.setScalar(0),Ec.setScalar(0),Tc.setScalar(0),bc.fromBufferAttribute(t,e),Ec.fromBufferAttribute(t,n),Tc.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(bc,o.x),r.addScaledVector(Ec,o.y),r.addScaledVector(Tc,o.z),r}static isFrontFacing(t,e,n,i){return Zn.subVectors(n,e),Mi.subVectors(t,e),Zn.cross(Mi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Zn.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return $n.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return $n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;Gs.subVectors(i,n),Hs.subVectors(o,n),yc.subVectors(t,n);const c=Gs.dot(yc),l=Hs.dot(yc);if(c<=0&&l<=0)return e.copy(n);wc.subVectors(t,i);const h=Gs.dot(wc),u=Hs.dot(wc);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(Gs,r);Sc.subVectors(t,o);const d=Gs.dot(Sc),g=Hs.dot(Sc);if(g>=0&&d<=g)return e.copy(o);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Hs,a);const p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return ku.subVectors(o,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(ku,a);const m=1/(p+_+f);return r=_*m,a=f*m,e.copy(n).addScaledVector(Gs,r).addScaledVector(Hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Or={h:0,s:0,l:0};function Ac(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class st{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=B0(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Ac(r,o,t+1/3),this.g=Ac(r,o,t),this.b=Ac(r,o,t-1/3)}return oe.toWorkingColorSpace(this,i),this}setStyle(t,e=gn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){const n=Rd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=uo(t.r),this.g=uo(t.g),this.b=uo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return oe.fromWorkingColorSpace(qe.copy(this),t),Math.round(Zt(qe.r*255,0,255))*65536+Math.round(Zt(qe.g*255,0,255))*256+Math.round(Zt(qe.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(qe.copy(this),e);const n=qe.r,i=qe.g,o=qe.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case n:c=(i-o)/u+(i<o?6:0);break;case i:c=(o-n)/u+2;break;case o:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=gn){oe.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,i=qe.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(zi),this.setHSL(zi.h+t,zi.s+e,zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zi),t.getHSL(Or);const n=hc(zi.h,Or.h,e),i=hc(zi.s,Or.s,e),o=hc(zi.l,Or.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new st;st.NAMES=Rd;let im=0;class Is extends Lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Do(),this.name="",this.type="Material",this.blending=lo,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=pl,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(n.blending=this.blending),this.side!==Zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dl&&(n.blendSrc=this.blendSrc),this.blendDst!==pl&&(n.blendDst=this.blendDst),this.blendEquation!==ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class q extends Is{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new N,Br=new dt;class ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Au,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Br.fromBufferAttribute(this,e),Br.applyMatrix3(t),this.setXY(e,Br.x,Br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Oo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Oo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Oo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Oo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Oo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),n=Mn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),n=Mn(n,this.array),i=Mn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),n=Mn(n,this.array),i=Mn(i,this.array),o=Mn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Au&&(t.usage=this.usage),t}}class Pd extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Id extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Gt extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let sm=0;const zn=new fe,Cc=new me,Vs=new N,Tn=new Rs,Ho=new Rs,ze=new N;class be extends Lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=Do(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ed(t)?Id:Pd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Vt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,n){return zn.makeTranslation(t,e,n),this.applyMatrix4(zn),this}scale(t,e,n){return zn.makeScale(t,e,n),this.applyMatrix4(zn),this}lookAt(t){return Cc.lookAt(t),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Gt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];Tn.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Ho.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(Tn.min,Ho.min),Tn.expandByPoint(ze),ze.addVectors(Tn.max,Ho.max),Tn.expandByPoint(ze)):(Tn.expandByPoint(Ho.min),Tn.expandByPoint(Ho.max))}Tn.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)ze.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(ze));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ze.fromBufferAttribute(a,l),c&&(Vs.fromBufferAttribute(t,l),ze.add(Vs)),i=Math.max(i,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let S=0;S<n.count;S++)a[S]=new N,c[S]=new N;const l=new N,h=new N,u=new N,f=new dt,d=new dt,g=new dt,_=new N,p=new N;function m(S,y,x){l.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),f.fromBufferAttribute(o,S),d.fromBufferAttribute(o,y),g.fromBufferAttribute(o,x),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(C),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),a[S].add(_),a[y].add(_),a[x].add(_),c[S].add(p),c[y].add(p),c[x].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let S=0,y=E.length;S<y;++S){const x=E[S],C=x.start,U=x.count;for(let L=C,z=C+U;L<z;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const v=new N,M=new N,A=new N,T=new N;function b(S){A.fromBufferAttribute(i,S),T.copy(A);const y=a[S];v.copy(y),v.sub(A.multiplyScalar(A.dot(y))).normalize(),M.crossVectors(T,y);const C=M.dot(c[S])<0?-1:1;r.setXYZW(S,v.x,v.y,v.z,C)}for(let S=0,y=E.length;S<y;++S){const x=E[S],C=x.start,U=x.count;for(let L=C,z=C+U;L<z;L+=3)b(t.getX(L+0)),b(t.getX(L+1)),b(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new N,o=new N,r=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,p),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let m=0;m<h;m++)f[g++]=l[d++]}return new ke(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gu=new fe,ts=new Yh,kr=new Ps,Hu=new N,Gr=new N,Hr=new N,Vr=new N,Rc=new N,Wr=new N,Vu=new N,Xr=new N;class I extends me{constructor(t=new be,e=new q){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){Wr.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(Rc.fromBufferAttribute(u,t),r?Wr.addScaledVector(Rc,h):Wr.addScaledVector(Rc.sub(e),h))}e.add(Wr)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(o),ts.copy(t.ray).recast(t.near),!(kr.containsPoint(ts.origin)===!1&&(ts.intersectSphere(kr,Hu)===null||ts.origin.distanceToSquared(Hu)>(t.far-t.near)**2))&&(Gu.copy(o).invert(),ts.copy(t.ray).applyMatrix4(Gu),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=r[p.materialIndex],E=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=E,A=v;M<A;M+=3){const T=a.getX(M),b=a.getX(M+1),S=a.getX(M+2);i=Yr(this,m,t,n,l,h,u,T,b,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const E=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);i=Yr(this,r,t,n,l,h,u,E,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=r[p.materialIndex],E=Math.max(p.start,d.start),v=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let M=E,A=v;M<A;M+=3){const T=M,b=M+1,S=M+2;i=Yr(this,m,t,n,l,h,u,T,b,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const E=p,v=p+1,M=p+2;i=Yr(this,r,t,n,l,h,u,E,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function om(s,t,e,n,i,o,r,a){let c;if(t.side===xn?c=n.intersectTriangle(r,o,i,!0,a):c=n.intersectTriangle(i,o,r,t.side===Zi,a),c===null)return null;Xr.copy(a),Xr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Xr);return l<e.near||l>e.far?null:{distance:l,point:Xr.clone(),object:s}}function Yr(s,t,e,n,i,o,r,a,c,l){s.getVertexPosition(a,Gr),s.getVertexPosition(c,Hr),s.getVertexPosition(l,Vr);const h=om(s,t,e,n,Gr,Hr,Vr,Vu);if(h){const u=new N;$n.getBarycoord(Vu,Gr,Hr,Vr,u),i&&(h.uv=$n.getInterpolatedAttribute(i,a,c,l,u,new dt)),o&&(h.uv1=$n.getInterpolatedAttribute(o,a,c,l,u,new dt)),r&&(h.normal=$n.getInterpolatedAttribute(r,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new N,materialIndex:0};$n.getNormal(Gr,Hr,Vr,f.normal),h.face=f,h.barycoord=u}return h}class wr extends be{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,o,4),g("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(u,2));function g(_,p,m,E,v,M,A,T,b,S,y){const x=M/b,C=A/S,U=M/2,L=A/2,z=T/2,V=b+1,G=S+1;let Z=0,W=0;const rt=new N;for(let ut=0;ut<G;ut++){const yt=ut*C-L;for(let zt=0;zt<V;zt++){const $t=zt*x-U;rt[_]=$t*E,rt[p]=yt*v,rt[m]=z,l.push(rt.x,rt.y,rt.z),rt[_]=0,rt[p]=0,rt[m]=T>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(zt/b),u.push(1-ut/S),Z+=1}}for(let ut=0;ut<S;ut++)for(let yt=0;yt<b;yt++){const zt=f+yt+V*ut,$t=f+yt+V*(ut+1),tt=f+(yt+1)+V*(ut+1),ct=f+(yt+1)+V*ut;c.push(zt,$t,ct),c.push($t,tt,ct),W+=6}a.addGroup(d,W,y),d+=W,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ao(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function tn(s){const t={};for(let e=0;e<s.length;e++){const n=Ao(s[e]);for(const i in n)t[i]=n[i]}return t}function rm(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ld(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const Da={clone:Ao,merge:tn};var am=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends Is{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=am,this.fragmentShader=cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ao(t.uniforms),this.uniformsGroups=rm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Dd extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new N,Wu=new dt,Xu=new dt;class Cn extends Dd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Kl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kl*2*Math.atan(Math.tan(lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,Wu,Xu),e.subVectors(Xu,Wu)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ws=-90,Xs=1;class lm extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Cn(Ws,Xs,t,e);i.layers=this.layers,this.add(i);const o=new Cn(Ws,Xs,t,e);o.layers=this.layers,this.add(o);const r=new Cn(Ws,Xs,t,e);r.layers=this.layers,this.add(r);const a=new Cn(Ws,Xs,t,e);a.layers=this.layers,this.add(a);const c=new Cn(Ws,Xs,t,e);c.layers=this.layers,this.add(c);const l=new Cn(Ws,Xs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===bi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ud extends Ke{constructor(t,e,n,i,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:wo,super(t,e,n,i,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hm extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ud(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:li}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new wr(5,5,5),o=new yn({name:"CubemapFromEquirect",uniforms:Ao(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Ti});o.uniforms.tEquirect.value=e;const r=new I(i,o),a=e.minFilter;return e.minFilter===xs&&(e.minFilter=li),new lm(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}class qh{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new st(t),this.density=e}clone(){return new qh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class um extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class fm extends Ke{constructor(t=null,e=1,n=1,i,o,r,a,c,l=Ln,h=Ln,u,f){super(null,r,a,c,l,h,i,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class di extends ke{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ys=new fe,Yu=new fe,qr=[],qu=new Rs,dm=new fe,Vo=new I,Wo=new Ps;class $i extends I{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new di(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,dm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Rs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),qu.copy(t.boundingBox).applyMatrix4(Ys),this.boundingBox.union(qu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ps),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),Wo.copy(t.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Wo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Vo.geometry=this.geometry,Vo.material=this.material,Vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wo.copy(this.boundingSphere),Wo.applyMatrix4(n),t.ray.intersectsSphere(Wo)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,Ys),Yu.multiplyMatrices(n,Ys),Vo.matrixWorld=Yu,Vo.raycast(t,qr);for(let r=0,a=qr.length;r<a;r++){const c=qr[r];c.instanceId=o,c.object=this,e.push(c)}qr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new di(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new fm(new Float32Array(i*this.count),i,this.count,Hh,hi));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=i*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Pc=new N,pm=new N,mm=new Vt;class rs{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Pc.subVectors(n,e).cross(pm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Pc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mm.getNormalMatrix(t),i=this.coplanarPoint(Pc).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new Ps,Zr=new N;class Zh{constructor(t=new rs,e=new rs,n=new rs,i=new rs,o=new rs,r=new rs){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bi){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],_=i[10],p=i[11],m=i[12],E=i[13],v=i[14],M=i[15];if(n[0].setComponents(c-o,f-l,p-d,M-m).normalize(),n[1].setComponents(c+o,f+l,p+d,M+m).normalize(),n[2].setComponents(c+r,f+h,p+g,M+E).normalize(),n[3].setComponents(c-r,f-h,p-g,M-E).normalize(),n[4].setComponents(c-a,f-u,p-_,M-v).normalize(),e===bi)n[5].setComponents(c+a,f+u,p+_,M+v).normalize();else if(e===Ia)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Zr.x=i.normal.x>0?t.max.x:t.min.x,Zr.y=i.normal.y>0?t.max.y:t.min.y,Zr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $h extends Is{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ua=new N,Na=new N,Zu=new fe,Xo=new Yh,$r=new Ps,Ic=new N,$u=new N;class Nd extends me{constructor(t=new be,e=new $h){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)Ua.fromBufferAttribute(e,i-1),Na.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ua.distanceTo(Na);t.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),$r.radius+=o,t.ray.intersectsSphere($r)===!1)return;Zu.copy(i).invert(),Xo.copy(t.ray).applyMatrix4(Zu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=d,p=g-1;_<p;_+=l){const m=h.getX(_),E=h.getX(_+1),v=jr(this,t,Xo,c,m,E);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(d),m=jr(this,t,Xo,c,_,p);m&&e.push(m)}}else{const d=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let _=d,p=g-1;_<p;_+=l){const m=jr(this,t,Xo,c,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=jr(this,t,Xo,c,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function jr(s,t,e,n,i,o){const r=s.geometry.attributes.position;if(Ua.fromBufferAttribute(r,i),Na.fromBufferAttribute(r,o),e.distanceSqToSegment(Ua,Na,Ic,$u)>n)return;Ic.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ic);if(!(c<t.near||c>t.far))return{distance:c,point:$u.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const ju=new N,Ku=new N;class gm extends Nd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,o=e.count;i<o;i+=2)ju.fromBufferAttribute(e,i),Ku.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ju.distanceTo(Ku);t.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jh extends Is{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ju=new fe,Jl=new Yh,Kr=new Ps,Jr=new N;class zd extends me{constructor(t=new be,e=new jh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(i),Kr.radius+=o,t.ray.intersectsSphere(Kr)===!1)return;Ju.copy(i).invert(),Jl.copy(t.ray).applyMatrix4(Ju);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,r.start),d=Math.min(l.count,r.start+r.count);for(let g=f,_=d;g<_;g++){const p=l.getX(g);Jr.fromBufferAttribute(u,p),Qu(Jr,p,c,i,t,e,this)}}else{const f=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let g=f,_=d;g<_;g++)Jr.fromBufferAttribute(u,g),Qu(Jr,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Qu(s,t,e,n,i,o,r){const a=Jl.distanceSqToPoint(s);if(a<e){const c=new N;Jl.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class re extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Kh extends Ke{constructor(t,e,n,i,o,r,a,c,l){super(t,e,n,i,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fd extends Ke{constructor(t,e,n,i,o,r,a,c,l,h=ho){if(h!==ho&&h!==Eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ho&&(n=Ts),n===void 0&&h===Eo&&(n=bo),super(null,i,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ln,this.minFilter=c!==void 0?c:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class pi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(o-1);const h=n[i],f=n[i+1]-h,d=(r-h)/f;return(i+d)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),c=e||(r.isVector2?new dt:new N);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,i=[],o=[],r=[],a=new N,c=new fe;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new N)}o[0]=new N,r[0]=new N;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Zt(i[d-1].dot(i[d]),-1,1));o[d].applyMatrix4(c.makeRotationAxis(a,g))}r[d].crossVectors(i[d],o[d])}if(e===!0){let d=Math.acos(Zt(o[0].dot(o[t]),-1,1));d/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),r[g].crossVectors(i[g],o[g])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Jh extends pi{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new dt){const n=e,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class xm extends Jh{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Qh(){let s=0,t=0,e=0,n=0;function i(o,r,a,c){s=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){i(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let f=(r-o)/l-(a-o)/(l+h)+(a-r)/h,d=(a-r)/h-(c-r)/(h+u)+(c-a)/u;f*=h,d*=h,i(r,a,f,d)},calc:function(o){const r=o*o,a=r*o;return s+t*o+e*r+n*a}}}const Qr=new N,Lc=new Qh,Dc=new Qh,Uc=new Qh;class Sr extends pi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new N){const n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%o]:(Qr.subVectors(i[0],i[1]).add(i[0]),l=Qr);const u=i[a%o],f=i[(a+1)%o];if(this.closed||a+2<o?h=i[(a+2)%o]:(Qr.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=Qr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Lc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,p),Dc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,p),Uc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Lc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Dc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Uc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Lc.calc(c),Dc.calc(c),Uc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function tf(s,t,e,n,i){const o=(n-t)*.5,r=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*s+e}function _m(s,t){const e=1-s;return e*e*t}function Mm(s,t){return 2*(1-s)*s*t}function vm(s,t){return s*s*t}function or(s,t,e,n){return _m(s,t)+Mm(s,e)+vm(s,n)}function ym(s,t){const e=1-s;return e*e*e*t}function wm(s,t){const e=1-s;return 3*e*e*s*t}function Sm(s,t){return 3*(1-s)*s*s*t}function bm(s,t){return s*s*s*t}function rr(s,t,e,n,i){return ym(s,t)+wm(s,e)+Sm(s,n)+bm(s,i)}class Od extends pi{constructor(t=new dt,e=new dt,n=new dt,i=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new dt){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(rr(t,i.x,o.x,r.x,a.x),rr(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Em extends pi{constructor(t=new N,e=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new N){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(rr(t,i.x,o.x,r.x,a.x),rr(t,i.y,o.y,r.y,a.y),rr(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Bd extends pi{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tu extends pi{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kd extends pi{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(or(t,i.x,o.x,r.x),or(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gd extends pi{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(or(t,i.x,o.x,r.x),or(t,i.y,o.y,r.y),or(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hd extends pi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(tf(a,c.x,l.x,h.x,u.x),tf(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new dt().fromArray(i))}return this}}var Ql=Object.freeze({__proto__:null,ArcCurve:xm,CatmullRomCurve3:Sr,CubicBezierCurve:Od,CubicBezierCurve3:Em,EllipseCurve:Jh,LineCurve:Bd,LineCurve3:tu,QuadraticBezierCurve:kd,QuadraticBezierCurve3:Gd,SplineCurve:Hd});class Tm extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ql[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ql[i.type]().fromJSON(i))}return this}}class za extends Tm{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Bd(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new kd(this.currentPoint.clone(),new dt(t,e),new dt(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){const a=new Od(this.currentPoint.clone(),new dt(t,e),new dt(n,i),new dt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Hd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,o,r,a,c),this}absellipse(t,e,n,i,o,r,a,c){const l=new Jh(t,e,n,i,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ve extends be{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new N,h=new dt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[f]/t+1)/2,h.y=(r[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(a,3)),this.setAttribute("uv",new Gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Mt extends be{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),o=Math.floor(o);const h=[],u=[],f=[],d=[];let g=0;const _=[],p=n/2;let m=0;E(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(d,2));function E(){const M=new N,A=new N;let T=0;const b=(e-t)/n;for(let S=0;S<=o;S++){const y=[],x=S/o,C=x*(e-t)+t;for(let U=0;U<=i;U++){const L=U/i,z=L*c+a,V=Math.sin(z),G=Math.cos(z);A.x=C*V,A.y=-x*n+p,A.z=C*G,u.push(A.x,A.y,A.z),M.set(V,b,G).normalize(),f.push(M.x,M.y,M.z),d.push(L,1-x),y.push(g++)}_.push(y)}for(let S=0;S<i;S++)for(let y=0;y<o;y++){const x=_[y][S],C=_[y+1][S],U=_[y+1][S+1],L=_[y][S+1];(t>0||y!==0)&&(h.push(x,C,L),T+=3),(e>0||y!==o-1)&&(h.push(C,U,L),T+=3)}l.addGroup(m,T,0),m+=T}function v(M){const A=g,T=new dt,b=new N;let S=0;const y=M===!0?t:e,x=M===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,p*x,0),f.push(0,x,0),d.push(.5,.5),g++;const C=g;for(let U=0;U<=i;U++){const z=U/i*c+a,V=Math.cos(z),G=Math.sin(z);b.x=y*G,b.y=p*x,b.z=y*V,u.push(b.x,b.y,b.z),f.push(0,x,0),T.x=V*.5+.5,T.y=G*.5*x+.5,d.push(T.x,T.y),g++}for(let U=0;U<i;U++){const L=A+U,z=C+U;M===!0?h.push(z,z+1,L):h.push(z+1,z,L),S+=3}l.addGroup(m,S,M===!0?1:2),m+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hn extends Mt{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Hn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class br extends be{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],r=[];a(i),l(n),h(),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(o.slice(),3)),this.setAttribute("uv",new Gt(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const v=new N,M=new N,A=new N;for(let T=0;T<e.length;T+=3)d(e[T+0],v),d(e[T+1],M),d(e[T+2],A),c(v,M,A,E)}function c(E,v,M,A){const T=A+1,b=[];for(let S=0;S<=T;S++){b[S]=[];const y=E.clone().lerp(M,S/T),x=v.clone().lerp(M,S/T),C=T-S;for(let U=0;U<=C;U++)U===0&&S===T?b[S][U]=y:b[S][U]=y.clone().lerp(x,U/C)}for(let S=0;S<T;S++)for(let y=0;y<2*(T-S)-1;y++){const x=Math.floor(y/2);y%2===0?(f(b[S][x+1]),f(b[S+1][x]),f(b[S][x])):(f(b[S][x+1]),f(b[S+1][x+1]),f(b[S+1][x]))}}function l(E){const v=new N;for(let M=0;M<o.length;M+=3)v.x=o[M+0],v.y=o[M+1],v.z=o[M+2],v.normalize().multiplyScalar(E),o[M+0]=v.x,o[M+1]=v.y,o[M+2]=v.z}function h(){const E=new N;for(let v=0;v<o.length;v+=3){E.x=o[v+0],E.y=o[v+1],E.z=o[v+2];const M=p(E)/2/Math.PI+.5,A=m(E)/Math.PI+.5;r.push(M,1-A)}g(),u()}function u(){for(let E=0;E<r.length;E+=6){const v=r[E+0],M=r[E+2],A=r[E+4],T=Math.max(v,M,A),b=Math.min(v,M,A);T>.9&&b<.1&&(v<.2&&(r[E+0]+=1),M<.2&&(r[E+2]+=1),A<.2&&(r[E+4]+=1))}}function f(E){o.push(E.x,E.y,E.z)}function d(E,v){const M=E*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function g(){const E=new N,v=new N,M=new N,A=new N,T=new dt,b=new dt,S=new dt;for(let y=0,x=0;y<o.length;y+=9,x+=6){E.set(o[y+0],o[y+1],o[y+2]),v.set(o[y+3],o[y+4],o[y+5]),M.set(o[y+6],o[y+7],o[y+8]),T.set(r[x+0],r[x+1]),b.set(r[x+2],r[x+3]),S.set(r[x+4],r[x+5]),A.copy(E).add(v).add(M).divideScalar(3);const C=p(A);_(T,x+0,E,C),_(b,x+2,v,C),_(S,x+4,M,C)}}function _(E,v,M,A){A<0&&E.x===1&&(r[v]=E.x-1),M.x===0&&M.z===0&&(r[v]=A/2/Math.PI+.5)}function p(E){return Math.atan2(E.z,-E.x)}function m(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new br(t.vertices,t.indices,t.radius,t.details)}}class eu extends br{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new eu(t.radius,t.detail)}}class Fa extends za{constructor(t){super(t),this.uuid=Do(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new za().fromJSON(i))}return this}}const Am={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=Vd(s,0,i,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,u,f,d;if(n&&(o=Lm(s,t,o,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let g=e;g<i;g+=e)u=s[g],f=s[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return dr(o,r,e,a,c,d,0),r}};function Vd(s,t,e,n,i){let o,r;if(i===Vm(s,t,e,n)>0)for(o=t;o<e;o+=n)r=ef(o,s[o],s[o+1],r);else for(o=e-n;o>=t;o-=n)r=ef(o,s[o],s[o+1],r);return r&&tc(r,r.next)&&(mr(r),r=r.next),r}function As(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(tc(e,e.next)||Te(e.prev,e,e.next)===0)){if(mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function dr(s,t,e,n,i,o,r){if(!s)return;!r&&o&&Fm(s,n,i,o);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,o?Rm(s,n,i,o):Cm(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),mr(s),s=l.next,a=l.next;continue}if(s=l,s===a){r?r===1?(s=Pm(As(s),t,e),dr(s,t,e,n,i,o,2)):r===2&&Im(s,t,e,n,i,o):dr(As(s),t,e,n,i,o,1);break}}}function Cm(s){const t=s.prev,e=s,n=s.next;if(Te(t,e,n)>=0)return!1;const i=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=i<o?i<r?i:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,f=i>o?i>r?i:r:o>r?o:r,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&so(i,a,o,c,r,l,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Rm(s,t,e,n){const i=s.prev,o=s,r=s.next;if(Te(i,o,r)>=0)return!1;const a=i.x,c=o.x,l=r.x,h=i.y,u=o.y,f=r.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,p=h>u?h>f?h:f:u>f?u:f,m=th(d,g,t,e,n),E=th(_,p,t,e,n);let v=s.prevZ,M=s.nextZ;for(;v&&v.z>=m&&M&&M.z<=E;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==r&&so(a,h,c,u,l,f,v.x,v.y)&&Te(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=_&&M.y>=g&&M.y<=p&&M!==i&&M!==r&&so(a,h,c,u,l,f,M.x,M.y)&&Te(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==r&&so(a,h,c,u,l,f,v.x,v.y)&&Te(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=E;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=p&&M!==i&&M!==r&&so(a,h,c,u,l,f,M.x,M.y)&&Te(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Pm(s,t,e){let n=s;do{const i=n.prev,o=n.next.next;!tc(i,o)&&Wd(i,n,n.next,o)&&pr(i,o)&&pr(o,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),mr(n),mr(n.next),n=s=o),n=n.next}while(n!==s);return As(n)}function Im(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&km(r,a)){let c=Xd(r,a);r=As(r,r.next),c=As(c,c.next),dr(r,t,e,n,i,o,0),dr(c,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function Lm(s,t,e,n){const i=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:s.length,l=Vd(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Bm(l));for(i.sort(Dm),o=0;o<i.length;o++)e=Um(i[o],e);return e}function Dm(s,t){return s.x-t.x}function Um(s,t){const e=Nm(s,t);if(!e)return t;const n=Xd(e,s);return As(n,n.next),As(e,e.next)}function Nm(s,t){let e=t,n=-1/0,i;const o=s.x,r=s.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===o))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;e=i;do o>=e.x&&e.x>=c&&o!==e.x&&so(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),pr(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&zm(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function zm(s,t){return Te(s.prev,s,t.prev)<0&&Te(t.next,s,s.next)<0}function Fm(s,t,e,n){let i=s;do i.z===0&&(i.z=th(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Om(i)}function Om(s){let t,e,n,i,o,r,a,c,l=1;do{for(e=s,s=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;e=n}o.nextZ=null,l*=2}while(r>1);return s}function th(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Bm(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function so(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function km(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Gm(s,t)&&(pr(s,t)&&pr(t,s)&&Hm(s,t)&&(Te(s.prev,s,t.prev)||Te(s,t.prev,t))||tc(s,t)&&Te(s.prev,s,s.next)>0&&Te(t.prev,t,t.next)>0)}function Te(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function tc(s,t){return s.x===t.x&&s.y===t.y}function Wd(s,t,e,n){const i=ea(Te(s,t,e)),o=ea(Te(s,t,n)),r=ea(Te(e,n,s)),a=ea(Te(e,n,t));return!!(i!==o&&r!==a||i===0&&ta(s,e,t)||o===0&&ta(s,n,t)||r===0&&ta(e,s,n)||a===0&&ta(e,t,n))}function ta(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ea(s){return s>0?1:s<0?-1:0}function Gm(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Wd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function pr(s,t){return Te(s.prev,s,s.next)<0?Te(s,t,s.next)>=0&&Te(s,s.prev,t)>=0:Te(s,t,s.prev)<0||Te(s,s.next,t)<0}function Hm(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Xd(s,t){const e=new eh(s.i,s.x,s.y),n=new eh(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function ef(s,t,e,n){const i=new eh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function mr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function eh(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Vm(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}class ar{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return ar.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];nf(t),sf(n,t);let r=t.length;e.forEach(nf);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,sf(n,e[c]);const a=Am.triangulate(n,i);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function nf(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function sf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class ys extends br{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ys(t.radius,t.detail)}}class nu extends br{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new nu(t.radius,t.detail)}}class ge extends be{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const E=m*f-r;for(let v=0;v<l;v++){const M=v*u-o;g.push(M,-E,0),_.push(0,0,1),p.push(v/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let E=0;E<a;E++){const v=E+l*m,M=E+l*(m+1),A=E+1+l*(m+1),T=E+1+l*m;d.push(v,M,T),d.push(M,A,T)}this.setIndex(d),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ge(t.width,t.height,t.widthSegments,t.heightSegments)}}class Co extends be{constructor(t=.5,e=1,n=32,i=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=t;const f=(e-t)/i,d=new N,g=new dt;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){const m=o+p/n*r;d.x=u*Math.cos(m),d.y=u*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<i;_++){const p=_*(n+1);for(let m=0;m<n;m++){const E=m+p,v=E,M=E+n+1,A=E+n+2,T=E+1;a.push(v,M,T),a.push(M,A,T)}}this.setIndex(a),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Co(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class gr extends be{constructor(t=new Fa([new dt(0,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Gt(i,3)),this.setAttribute("normal",new Gt(o,3)),this.setAttribute("uv",new Gt(r,2));function l(h){const u=i.length/3,f=h.extractPoints(e);let d=f.shape;const g=f.holes;ar.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const E=g[p];ar.isClockWise(E)===!0&&(g[p]=E.reverse())}const _=ar.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const E=g[p];d=d.concat(E)}for(let p=0,m=d.length;p<m;p++){const E=d[p];i.push(E.x,E.y,0),o.push(0,0,1),r.push(E.x,E.y)}for(let p=0,m=_.length;p<m;p++){const E=_[p],v=E[0]+u,M=E[1]+u,A=E[2]+u;n.push(v,M,A),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Wm(e,t)}static fromJSON(t,e){const n=[];for(let i=0,o=t.shapes.length;i<o;i++){const r=e[t.shapes[i]];n.push(r)}return new gr(n,t.curveSegments)}}function Wm(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class j extends be{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new N,f=new N,d=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const E=[],v=m/n;let M=0;m===0&&r===0?M=.5/e:m===n&&c===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const T=A/e;u.x=-t*Math.cos(i+T*o)*Math.sin(r+v*a),u.y=t*Math.cos(r+v*a),u.z=t*Math.sin(i+T*o)*Math.sin(r+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(T+M,1-v),E.push(l++)}h.push(E)}for(let m=0;m<n;m++)for(let E=0;E<e;E++){const v=h[m][E+1],M=h[m][E],A=h[m+1][E],T=h[m+1][E+1];(m!==0||r>0)&&d.push(v,M,T),(m!==n-1||c<Math.PI)&&d.push(M,A,T)}this.setIndex(d),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new j(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Se extends be{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],c=[],l=[],h=new N,u=new N,f=new N;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*o,p=d/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,p=(i+1)*(d-1)+g-1,m=(i+1)*(d-1)+g,E=(i+1)*d+g;r.push(_,p,E),r.push(p,m,E)}this.setIndex(r),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class vn extends be{constructor(t=new Gd(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new N,c=new N,l=new dt;let h=new N;const u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(d,2));function _(){for(let v=0;v<e;v++)p(v);p(o===!1?e:0),E(),m()}function p(v){h=t.getPointAt(v/e,h);const M=r.normals[v],A=r.binormals[v];for(let T=0;T<=i;T++){const b=T/i*Math.PI*2,S=Math.sin(b),y=-Math.cos(b);c.x=y*M.x+S*A.x,c.y=y*M.y+S*A.y,c.z=y*M.z+S*A.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=e;v++)for(let M=1;M<=i;M++){const A=(i+1)*(v-1)+(M-1),T=(i+1)*v+(M-1),b=(i+1)*v+M,S=(i+1)*(v-1)+M;g.push(A,T,S),g.push(T,b,S)}}function E(){for(let v=0;v<=e;v++)for(let M=0;M<=i;M++)l.x=v/e,l.y=M/i,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new vn(new Ql[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class K extends Is{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sd,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xm extends Is{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=R0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ym extends Is{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class iu extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new st(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class qm extends iu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Nc=new fe,of=new N,rf=new N;class Yd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zh,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;of.setFromMatrixPosition(t.matrixWorld),e.position.copy(of),rf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rf),e.updateMatrixWorld(),Nc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const af=new fe,Yo=new N,zc=new N;class Zm extends Yd{constructor(){super(new Cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Yo.setFromMatrixPosition(t.matrixWorld),n.position.copy(Yo),zc.copy(n.position),zc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(zc),n.updateMatrixWorld(),i.makeTranslation(-Yo.x,-Yo.y,-Yo.z),af.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(af)}}class Uo extends iu{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Zm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class su extends Dd{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class $m extends Yd{constructor(){super(new su(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ec extends iu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new $m}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class jm extends Cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class qd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=cf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function cf(){return performance.now()}function lf(s,t,e,n){const i=Km(n);switch(e){case xd:return s*t;case Md:return s*t;case vd:return s*t*2;case Hh:return s*t/i.components*i.byteLength;case Vh:return s*t/i.components*i.byteLength;case yd:return s*t*2/i.components*i.byteLength;case Wh:return s*t*2/i.components*i.byteLength;case _d:return s*t*3/i.components*i.byteLength;case jn:return s*t*4/i.components*i.byteLength;case Xh:return s*t*4/i.components*i.byteLength;case ga:case xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case _a:case Ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Tl:case Cl:return Math.max(s,16)*Math.max(t,8)/4;case El:case Al:return Math.max(s,8)*Math.max(t,8)/2;case Rl:case Pl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Il:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case zl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case kl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case va:case Yl:case ql:return Math.ceil(s/4)*Math.ceil(t/4)*16;case wd:case Zl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case $l:case jl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Km(s){switch(s){case Pi:case pd:return{byteLength:1,components:1};case fr:case md:case Ai:return{byteLength:2,components:1};case kh:case Gh:return{byteLength:2,components:4};case Ts:case Bh:case hi:return{byteLength:4,components:1};case gd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zd(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function Jm(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:o,update:r}}var Qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tg=`#ifdef USE_ALPHAHASH
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
#endif`,eg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ng=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ig=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,og=`#ifdef USE_AOMAP
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
#endif`,rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ag=`#ifdef USE_BATCHING
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
#endif`,cg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ug=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fg=`#ifdef USE_IRIDESCENCE
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
#endif`,dg=`#ifdef USE_BUMPMAP
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
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wg=`#define PI 3.141592653589793
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
} // validated`,Sg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bg=`vec3 transformedNormal = objectNormal;
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
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ug=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ng=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Og=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kg=`#ifdef USE_GRADIENTMAP
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
}`,Gg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wg=`uniform bool receiveShadow;
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
#endif`,Xg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jg=`PhysicalMaterial material;
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
#endif`,Kg=`struct PhysicalMaterial {
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
}`,Jg=`
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
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
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
#endif`,tx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ex=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ix=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cx=`#if defined( USE_POINTS_UV )
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
#endif`,lx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ux=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,px=`#ifdef USE_MORPHTARGETS
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
#endif`,mx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yx=`#ifdef USE_NORMALMAP
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
#endif`,wx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ax=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Px=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ix=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fx=`float getShadowMask() {
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
}`,Ox=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bx=`#ifdef USE_SKINNING
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
#endif`,kx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gx=`#ifdef USE_SKINNING
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
#endif`,Hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yx=`#ifdef USE_TRANSMISSION
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
#endif`,qx=`#ifdef USE_TRANSMISSION
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qx=`uniform sampler2D t2D;
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
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`#include <common>
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
}`,o_=`#if DEPTH_PACKING == 3200
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
}`,r_=`#define DISTANCE
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
}`,a_=`#define DISTANCE
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
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`uniform float scale;
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
}`,u_=`uniform vec3 diffuse;
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
}`,f_=`#include <common>
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
}`,d_=`uniform vec3 diffuse;
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
}`,p_=`#define LAMBERT
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
}`,m_=`#define LAMBERT
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
}`,g_=`#define MATCAP
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
}`,x_=`#define MATCAP
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
}`,__=`#define NORMAL
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
}`,M_=`#define NORMAL
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
}`,v_=`#define PHONG
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
}`,y_=`#define PHONG
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
}`,w_=`#define STANDARD
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
}`,S_=`#define STANDARD
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
}`,b_=`#define TOON
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
}`,E_=`#define TOON
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
}`,T_=`uniform float size;
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
}`,A_=`uniform vec3 diffuse;
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
}`,C_=`#include <common>
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
}`,R_=`uniform vec3 color;
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
}`,P_=`uniform float rotation;
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
}`,I_=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Qm,alphahash_pars_fragment:tg,alphamap_fragment:eg,alphamap_pars_fragment:ng,alphatest_fragment:ig,alphatest_pars_fragment:sg,aomap_fragment:og,aomap_pars_fragment:rg,batching_pars_vertex:ag,batching_vertex:cg,begin_vertex:lg,beginnormal_vertex:hg,bsdfs:ug,iridescence_fragment:fg,bumpmap_pars_fragment:dg,clipping_planes_fragment:pg,clipping_planes_pars_fragment:mg,clipping_planes_pars_vertex:gg,clipping_planes_vertex:xg,color_fragment:_g,color_pars_fragment:Mg,color_pars_vertex:vg,color_vertex:yg,common:wg,cube_uv_reflection_fragment:Sg,defaultnormal_vertex:bg,displacementmap_pars_vertex:Eg,displacementmap_vertex:Tg,emissivemap_fragment:Ag,emissivemap_pars_fragment:Cg,colorspace_fragment:Rg,colorspace_pars_fragment:Pg,envmap_fragment:Ig,envmap_common_pars_fragment:Lg,envmap_pars_fragment:Dg,envmap_pars_vertex:Ug,envmap_physical_pars_fragment:Xg,envmap_vertex:Ng,fog_vertex:zg,fog_pars_vertex:Fg,fog_fragment:Og,fog_pars_fragment:Bg,gradientmap_pars_fragment:kg,lightmap_pars_fragment:Gg,lights_lambert_fragment:Hg,lights_lambert_pars_fragment:Vg,lights_pars_begin:Wg,lights_toon_fragment:Yg,lights_toon_pars_fragment:qg,lights_phong_fragment:Zg,lights_phong_pars_fragment:$g,lights_physical_fragment:jg,lights_physical_pars_fragment:Kg,lights_fragment_begin:Jg,lights_fragment_maps:Qg,lights_fragment_end:tx,logdepthbuf_fragment:ex,logdepthbuf_pars_fragment:nx,logdepthbuf_pars_vertex:ix,logdepthbuf_vertex:sx,map_fragment:ox,map_pars_fragment:rx,map_particle_fragment:ax,map_particle_pars_fragment:cx,metalnessmap_fragment:lx,metalnessmap_pars_fragment:hx,morphinstance_vertex:ux,morphcolor_vertex:fx,morphnormal_vertex:dx,morphtarget_pars_vertex:px,morphtarget_vertex:mx,normal_fragment_begin:gx,normal_fragment_maps:xx,normal_pars_fragment:_x,normal_pars_vertex:Mx,normal_vertex:vx,normalmap_pars_fragment:yx,clearcoat_normal_fragment_begin:wx,clearcoat_normal_fragment_maps:Sx,clearcoat_pars_fragment:bx,iridescence_pars_fragment:Ex,opaque_fragment:Tx,packing:Ax,premultiplied_alpha_fragment:Cx,project_vertex:Rx,dithering_fragment:Px,dithering_pars_fragment:Ix,roughnessmap_fragment:Lx,roughnessmap_pars_fragment:Dx,shadowmap_pars_fragment:Ux,shadowmap_pars_vertex:Nx,shadowmap_vertex:zx,shadowmask_pars_fragment:Fx,skinbase_vertex:Ox,skinning_pars_vertex:Bx,skinning_vertex:kx,skinnormal_vertex:Gx,specularmap_fragment:Hx,specularmap_pars_fragment:Vx,tonemapping_fragment:Wx,tonemapping_pars_fragment:Xx,transmission_fragment:Yx,transmission_pars_fragment:qx,uv_pars_fragment:Zx,uv_pars_vertex:$x,uv_vertex:jx,worldpos_vertex:Kx,background_vert:Jx,background_frag:Qx,backgroundCube_vert:t_,backgroundCube_frag:e_,cube_vert:n_,cube_frag:i_,depth_vert:s_,depth_frag:o_,distanceRGBA_vert:r_,distanceRGBA_frag:a_,equirect_vert:c_,equirect_frag:l_,linedashed_vert:h_,linedashed_frag:u_,meshbasic_vert:f_,meshbasic_frag:d_,meshlambert_vert:p_,meshlambert_frag:m_,meshmatcap_vert:g_,meshmatcap_frag:x_,meshnormal_vert:__,meshnormal_frag:M_,meshphong_vert:v_,meshphong_frag:y_,meshphysical_vert:w_,meshphysical_frag:S_,meshtoon_vert:b_,meshtoon_frag:E_,points_vert:T_,points_frag:A_,shadow_vert:C_,shadow_frag:R_,sprite_vert:P_,sprite_frag:I_},pt={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},ii={basic:{uniforms:tn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:tn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new st(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:tn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:tn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:tn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new st(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:tn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:tn([pt.points,pt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:tn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:tn([pt.common,pt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:tn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:tn([pt.sprite,pt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:tn([pt.common,pt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:tn([pt.lights,pt.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};ii.physical={uniforms:tn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const na={r:0,b:0,g:0},ns=new fi,L_=new fe;function D_(s,t,e,n,i,o,r){const a=new st(0);let c=o===!0?0:1,l,h,u=null,f=0,d=null;function g(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function _(v){let M=!1;const A=g(v);A===null?m(a,c):A&&A.isColor&&(m(A,1),M=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(v,M){const A=g(M);A&&(A.isCubeTexture||A.mapping===Qa)?(h===void 0&&(h=new I(new wr(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Ao(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,b,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ns.copy(M.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(L_.makeRotationFromEuler(ns)),h.material.toneMapped=oe.getTransfer(A.colorSpace)!==de,(u!==A||f!==A.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new I(new ge(2,2),new yn({name:"BackgroundMaterial",uniforms:Ao(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=oe.getTransfer(A.colorSpace)!==de,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=A,f=A.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB(na,Ld(s)),n.buffers.color.setClear(na.r,na.g,na.b,M,r)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),c=M,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(a,c)},render:_,addToRenderList:p,dispose:E}}function U_(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let o=i,r=!1;function a(x,C,U,L,z){let V=!1;const G=u(L,U,C);o!==G&&(o=G,l(o.object)),V=d(x,L,U,z),V&&g(x,L,U,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,M(x,C,U,L),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return s.createVertexArray()}function l(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,C,U){const L=U.wireframe===!0;let z=n[x.id];z===void 0&&(z={},n[x.id]=z);let V=z[C.id];V===void 0&&(V={},z[C.id]=V);let G=V[L];return G===void 0&&(G=f(c()),V[L]=G),G}function f(x){const C=[],U=[],L=[];for(let z=0;z<e;z++)C[z]=0,U[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:L,object:x,attributes:{},index:null}}function d(x,C,U,L){const z=o.attributes,V=C.attributes;let G=0;const Z=U.getAttributes();for(const W in Z)if(Z[W].location>=0){const ut=z[W];let yt=V[W];if(yt===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(yt=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(yt=x.instanceColor)),ut===void 0||ut.attribute!==yt||yt&&ut.data!==yt.data)return!0;G++}return o.attributesNum!==G||o.index!==L}function g(x,C,U,L){const z={},V=C.attributes;let G=0;const Z=U.getAttributes();for(const W in Z)if(Z[W].location>=0){let ut=V[W];ut===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(ut=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(ut=x.instanceColor));const yt={};yt.attribute=ut,ut&&ut.data&&(yt.data=ut.data),z[W]=yt,G++}o.attributes=z,o.attributesNum=G,o.index=L}function _(){const x=o.newAttributes;for(let C=0,U=x.length;C<U;C++)x[C]=0}function p(x){m(x,0)}function m(x,C){const U=o.newAttributes,L=o.enabledAttributes,z=o.attributeDivisors;U[x]=1,L[x]===0&&(s.enableVertexAttribArray(x),L[x]=1),z[x]!==C&&(s.vertexAttribDivisor(x,C),z[x]=C)}function E(){const x=o.newAttributes,C=o.enabledAttributes;for(let U=0,L=C.length;U<L;U++)C[U]!==x[U]&&(s.disableVertexAttribArray(U),C[U]=0)}function v(x,C,U,L,z,V,G){G===!0?s.vertexAttribIPointer(x,C,U,z,V):s.vertexAttribPointer(x,C,U,L,z,V)}function M(x,C,U,L){_();const z=L.attributes,V=U.getAttributes(),G=C.defaultAttributeValues;for(const Z in V){const W=V[Z];if(W.location>=0){let rt=z[Z];if(rt===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor)),rt!==void 0){const ut=rt.normalized,yt=rt.itemSize,zt=t.get(rt);if(zt===void 0)continue;const $t=zt.buffer,tt=zt.type,ct=zt.bytesPerElement,wt=tt===s.INT||tt===s.UNSIGNED_INT||rt.gpuType===Bh;if(rt.isInterleavedBufferAttribute){const ft=rt.data,Nt=ft.stride,Bt=rt.offset;if(ft.isInstancedInterleavedBuffer){for(let Yt=0;Yt<W.locationSize;Yt++)m(W.location+Yt,ft.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Yt=0;Yt<W.locationSize;Yt++)p(W.location+Yt);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let Yt=0;Yt<W.locationSize;Yt++)v(W.location+Yt,yt/W.locationSize,tt,ut,Nt*ct,(Bt+yt/W.locationSize*Yt)*ct,wt)}else{if(rt.isInstancedBufferAttribute){for(let ft=0;ft<W.locationSize;ft++)m(W.location+ft,rt.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ft=0;ft<W.locationSize;ft++)p(W.location+ft);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let ft=0;ft<W.locationSize;ft++)v(W.location+ft,yt/W.locationSize,tt,ut,yt*ct,yt/W.locationSize*ft*ct,wt)}}else if(G!==void 0){const ut=G[Z];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(W.location,ut);break;case 3:s.vertexAttrib3fv(W.location,ut);break;case 4:s.vertexAttrib4fv(W.location,ut);break;default:s.vertexAttrib1fv(W.location,ut)}}}}E()}function A(){S();for(const x in n){const C=n[x];for(const U in C){const L=C[U];for(const z in L)h(L[z].object),delete L[z];delete C[U]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const U in C){const L=C[U];for(const z in L)h(L[z].object),delete L[z];delete C[U]}delete n[x.id]}function b(x){for(const C in n){const U=n[C];if(U[x.id]===void 0)continue;const L=U[x.id];for(const z in L)h(L[z].object),delete L[z];delete U[x.id]}}function S(){y(),r=!0,o!==i&&(o=i,l(o.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:S,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function N_(s,t,e){let n;function i(l){n=l}function o(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)r(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function z_(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(b){return!(b!==jn&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const S=b===Ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Pi&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==hi&&!S)}function c(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:E,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:A,maxSamples:T}}function F_(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new rs,a=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||o&&!p)o?h(null):l();else{const E=o?0:n,v=E*4;let M=m.clippingState||null;c.value=M,M=h(g,f,v,d);for(let A=0;A!==v;++A)M[A]=e[A];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=d+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,M=d;v!==_;++v,M+=4)r.copy(u[v]).applyMatrix4(E,a),r.normal.toArray(p,M),p[M+3]=r.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function O_(s){let t=new WeakMap;function e(r,a){return a===wl?r.mapping=wo:a===Sl&&(r.mapping=So),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===wl||a===Sl)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new hm(c.height);return l.fromEquirectangularTexture(s,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const oo=4,hf=[.125,.215,.35,.446,.526,.582],ms=20,Fc=new su,uf=new st;let Oc=null,Bc=0,kc=0,Gc=!1;const as=(1+Math.sqrt(5))/2,qs=1/as,ff=[new N(-as,qs,0),new N(as,qs,0),new N(-qs,0,as),new N(qs,0,as),new N(0,as,-qs),new N(0,as,qs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class df{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Oc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oc,Bc,kc),this._renderer.xr.enabled=Gc,t.scissorTest=!1,ia(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wo||t.mapping===So?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:li,minFilter:li,generateMipmaps:!1,type:Ai,format:jn,colorSpace:To,depthBuffer:!1},i=pf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pf(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B_(o)),this._blurMaterial=k_(o,t,e)}return i}_compileMaterial(t){const e=new I(this._lodPlanes[0],t);this._renderer.compile(e,Fc)}_sceneToCubeUV(t,e,n,i){const a=new Cn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(uf),h.toneMapping=qi,h.autoClear=!1;const d=new q({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),g=new I(new wr,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(uf),_=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):E===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const v=this._cubeSize;ia(i,E*v,m>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===wo||t.mapping===So;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mf());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new I(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;ia(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,Fc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=ff[(i-o-1)%ff.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new I(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*ms-1),_=o/g,p=isFinite(o)?1+Math.floor(h*_):ms;p>ms&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ms}`);const m=[];let E=0;for(let b=0;b<ms;++b){const S=b/_,y=Math.exp(-S*S/2);m.push(y),b===0?E+=y:b<p&&(E+=2*y)}for(let b=0;b<m.length;b++)m[b]=m[b]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const M=this._sizeLods[i],A=3*M*(i>v-oo?i-v+oo:0),T=4*(this._cubeSize-M);ia(e,A,T,3*M,2*M),c.setRenderTarget(e),c.render(u,Fc)}}function B_(s){const t=[],e=[],n=[];let i=s;const o=s-oo+1+hf.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let c=1/a;r>s-oo?c=hf[r-s+oo-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,p=2,m=1,E=new Float32Array(_*g*d),v=new Float32Array(p*g*d),M=new Float32Array(m*g*d);for(let T=0;T<d;T++){const b=T%3*2/3-1,S=T>2?0:-1,y=[b,S,0,b+2/3,S,0,b+2/3,S+1,0,b,S,0,b+2/3,S+1,0,b,S+1,0];E.set(y,_*g*T),v.set(f,p*g*T);const x=[T,T,T,T,T,T];M.set(x,m*g*T)}const A=new be;A.setAttribute("position",new ke(E,_)),A.setAttribute("uv",new ke(v,p)),A.setAttribute("faceIndex",new ke(M,m)),t.push(A),i>oo&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pf(s,t,e){const n=new Kn(s,t,e);return n.texture.mapping=Qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ia(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function k_(s,t,e){const n=new Float32Array(ms),i=new N(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ou(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function mf(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function gf(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function ou(){return`

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
	`}function G_(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===wl||c===Sl,h=c===wo||c===So;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new df(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new df(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function H_(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Qs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function V_(s,t,e,n){const i={},o=new WeakMap;function r(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete i[f.id];const d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)t.update(f[d],s.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const E=d.array;_=d.version;for(let v=0,M=E.length;v<M;v+=3){const A=E[v+0],T=E[v+1],b=E[v+2];f.push(A,T,T,b,b,A)}}else if(g!==void 0){const E=g.array;_=g.version;for(let v=0,M=E.length/3-1;v<M;v+=3){const A=v+0,T=v+1,b=v+2;f.push(A,T,T,b,b,A)}}else return;const p=new(Ed(f)?Id:Pd)(f,1);p.version=_;const m=o.get(u);m&&t.remove(m),o.set(u,p)}function h(u){const f=o.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function W_(s,t,e){let n;function i(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function c(f,d){s.drawElements(n,d,o,f*r),e.update(d,n,1)}function l(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,o,f*r,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function u(f,d,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)l(f[m]/r,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,o,f,0,_,0,g);let m=0;for(let E=0;E<g;E++)m+=d[E]*_[E];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function X_(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Y_(s,t,e){const n=new WeakMap,i=new pe;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let x=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),p===!0&&(M=3);let A=a.attributes.position.count*M,T=1;A>t.maxTextureSize&&(T=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const b=new Float32Array(A*T*4*u),S=new Ad(b,A,T,u);S.type=hi,S.needsUpdate=!0;const y=M*4;for(let C=0;C<u;C++){const U=m[C],L=E[C],z=v[C],V=A*T*4*C;for(let G=0;G<U.count;G++){const Z=G*y;g===!0&&(i.fromBufferAttribute(U,G),b[V+Z+0]=i.x,b[V+Z+1]=i.y,b[V+Z+2]=i.z,b[V+Z+3]=0),_===!0&&(i.fromBufferAttribute(L,G),b[V+Z+4]=i.x,b[V+Z+5]=i.y,b[V+Z+6]=i.z,b[V+Z+7]=0),p===!0&&(i.fromBufferAttribute(z,G),b[V+Z+8]=i.x,b[V+Z+9]=i.y,b[V+Z+10]=i.z,b[V+Z+11]=z.itemSize===4?i.w:1)}}f={count:u,texture:S,size:new dt(A,T)},n.set(a,f),a.addEventListener("dispose",x)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:o}}function q_(s,t,e,n){let i=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function r(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}const $d=new Ke,xf=new Fd(1,1),jd=new Ad,Kd=new $0,Jd=new Ud,_f=[],Mf=[],vf=new Float32Array(16),yf=new Float32Array(9),wf=new Float32Array(4);function No(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=_f[i];if(o===void 0&&(o=new Float32Array(i),_f[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function Ue(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ne(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function nc(s,t){let e=Mf[t];e===void 0&&(e=new Int32Array(t),Mf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Z_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function $_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2fv(this.addr,t),Ne(e,t)}}function j_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;s.uniform3fv(this.addr,t),Ne(e,t)}}function K_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4fv(this.addr,t),Ne(e,t)}}function J_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;wf.set(n),s.uniformMatrix2fv(this.addr,!1,wf),Ne(e,n)}}function Q_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;yf.set(n),s.uniformMatrix3fv(this.addr,!1,yf),Ne(e,n)}}function tM(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;vf.set(n),s.uniformMatrix4fv(this.addr,!1,vf),Ne(e,n)}}function eM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function nM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2iv(this.addr,t),Ne(e,t)}}function iM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3iv(this.addr,t),Ne(e,t)}}function sM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4iv(this.addr,t),Ne(e,t)}}function oM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function rM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2uiv(this.addr,t),Ne(e,t)}}function aM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3uiv(this.addr,t),Ne(e,t)}}function cM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4uiv(this.addr,t),Ne(e,t)}}function lM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(xf.compareFunction=bd,o=xf):o=$d,e.setTexture2D(t||o,i)}function hM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Kd,i)}function uM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Jd,i)}function fM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||jd,i)}function dM(s){switch(s){case 5126:return Z_;case 35664:return $_;case 35665:return j_;case 35666:return K_;case 35674:return J_;case 35675:return Q_;case 35676:return tM;case 5124:case 35670:return eM;case 35667:case 35671:return nM;case 35668:case 35672:return iM;case 35669:case 35673:return sM;case 5125:return oM;case 36294:return rM;case 36295:return aM;case 36296:return cM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return hM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return fM}}function pM(s,t){s.uniform1fv(this.addr,t)}function mM(s,t){const e=No(t,this.size,2);s.uniform2fv(this.addr,e)}function gM(s,t){const e=No(t,this.size,3);s.uniform3fv(this.addr,e)}function xM(s,t){const e=No(t,this.size,4);s.uniform4fv(this.addr,e)}function _M(s,t){const e=No(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function MM(s,t){const e=No(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function vM(s,t){const e=No(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function yM(s,t){s.uniform1iv(this.addr,t)}function wM(s,t){s.uniform2iv(this.addr,t)}function SM(s,t){s.uniform3iv(this.addr,t)}function bM(s,t){s.uniform4iv(this.addr,t)}function EM(s,t){s.uniform1uiv(this.addr,t)}function TM(s,t){s.uniform2uiv(this.addr,t)}function AM(s,t){s.uniform3uiv(this.addr,t)}function CM(s,t){s.uniform4uiv(this.addr,t)}function RM(s,t,e){const n=this.cache,i=t.length,o=nc(e,i);Ue(n,o)||(s.uniform1iv(this.addr,o),Ne(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||$d,o[r])}function PM(s,t,e){const n=this.cache,i=t.length,o=nc(e,i);Ue(n,o)||(s.uniform1iv(this.addr,o),Ne(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Kd,o[r])}function IM(s,t,e){const n=this.cache,i=t.length,o=nc(e,i);Ue(n,o)||(s.uniform1iv(this.addr,o),Ne(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Jd,o[r])}function LM(s,t,e){const n=this.cache,i=t.length,o=nc(e,i);Ue(n,o)||(s.uniform1iv(this.addr,o),Ne(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||jd,o[r])}function DM(s){switch(s){case 5126:return pM;case 35664:return mM;case 35665:return gM;case 35666:return xM;case 35674:return _M;case 35675:return MM;case 35676:return vM;case 5124:case 35670:return yM;case 35667:case 35671:return wM;case 35668:case 35672:return SM;case 35669:case 35673:return bM;case 5125:return EM;case 36294:return TM;case 36295:return AM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return PM;case 35680:case 36300:case 36308:case 36293:return IM;case 36289:case 36303:case 36311:case 36292:return LM}}class UM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dM(e.type)}}class NM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=DM(e.type)}}class zM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const Hc=/(\w+)(\])?(\[|\.)?/g;function Sf(s,t){s.seq.push(t),s.map[t.id]=t}function FM(s,t,e){const n=s.name,i=n.length;for(Hc.lastIndex=0;;){const o=Hc.exec(n),r=Hc.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){Sf(e,l===void 0?new UM(a,s,t):new NM(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new zM(a),Sf(e,u)),e=u}}}class ya{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);FM(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function bf(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const OM=37297;let BM=0;function kM(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Ef=new Vt;function GM(s){oe._getMatrix(Ef,oe.workingColorSpace,s);const t=`mat3( ${Ef.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(s)){case Pa:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Tf(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+kM(s.getShaderSource(t),r)}else return i}function HM(s,t){const e=GM(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function VM(s,t){let e;switch(t){case w0:e="Linear";break;case S0:e="Reinhard";break;case b0:e="Cineon";break;case fd:e="ACESFilmic";break;case T0:e="AgX";break;case A0:e="Neutral";break;case E0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const sa=new N;function WM(){oe.getLuminanceCoefficients(sa);const s=sa.x.toFixed(4),t=sa.y.toFixed(4),e=sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function YM(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qM(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function Jo(s){return s!==""}function Af(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ZM=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(s){return s.replace(ZM,jM)}const $M=new Map;function jM(s,t){let e=Xt[t];if(e===void 0){const n=$M.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return nh(e)}const KM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rf(s){return s.replace(KM,JM)}function JM(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Pf(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function QM(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ld?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===hd?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===yi&&(t="SHADOWMAP_TYPE_VSM"),t}function tv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case wo:case So:t="ENVMAP_TYPE_CUBE";break;case Qa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ev(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case So:t="ENVMAP_MODE_REFRACTION";break}return t}function nv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ud:t="ENVMAP_BLENDING_MULTIPLY";break;case v0:t="ENVMAP_BLENDING_MIX";break;case y0:t="ENVMAP_BLENDING_ADD";break}return t}function iv(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function sv(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=QM(e),l=tv(e),h=ev(e),u=nv(e),f=iv(e),d=XM(e),g=YM(o),_=i.createProgram();let p,m,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Jo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Jo).join(`
`),m.length>0&&(m+=`
`)):(p=[Pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),m=[Pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qi?"#define TONE_MAPPING":"",e.toneMapping!==qi?Xt.tonemapping_pars_fragment:"",e.toneMapping!==qi?VM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,HM("linearToOutputTexel",e.outputColorSpace),WM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Jo).join(`
`)),r=nh(r),r=Af(r,e),r=Cf(r,e),a=nh(a),a=Af(a,e),a=Cf(a,e),r=Rf(r),a=Rf(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=E+p+r,M=E+m+a,A=bf(i,i.VERTEX_SHADER,v),T=bf(i,i.FRAGMENT_SHADER,M);i.attachShader(_,A),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(C){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(_).trim(),L=i.getShaderInfoLog(A).trim(),z=i.getShaderInfoLog(T).trim();let V=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,T);else{const Z=Tf(i,A,"vertex"),W=Tf(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+Z+`
`+W)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||z==="")&&(G=!1);G&&(C.diagnostics={runnable:V,programLog:U,vertexShader:{log:L,prefix:p},fragmentShader:{log:z,prefix:m}})}i.deleteShader(A),i.deleteShader(T),S=new ya(i,_),y=qM(i,_)}let S;this.getUniforms=function(){return S===void 0&&b(this),S};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,OM)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=BM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let ov=0;class rv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new av(t),e.set(t,n)),n}}class av{constructor(t){this.id=ov++,this.code=t,this.usedTimes=0}}function cv(s,t,e,n,i,o,r){const a=new Cd,c=new rv,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,x,C,U,L){const z=U.fog,V=L.geometry,G=y.isMeshStandardMaterial?U.environment:null,Z=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),W=Z&&Z.mapping===Qa?Z.image.height:null,rt=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ut=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,yt=ut!==void 0?ut.length:0;let zt=0;V.morphAttributes.position!==void 0&&(zt=1),V.morphAttributes.normal!==void 0&&(zt=2),V.morphAttributes.color!==void 0&&(zt=3);let $t,tt,ct,wt;if(rt){const ue=ii[rt];$t=ue.vertexShader,tt=ue.fragmentShader}else $t=y.vertexShader,tt=y.fragmentShader,c.update(y),ct=c.getVertexShaderID(y),wt=c.getFragmentShaderID(y);const ft=s.getRenderTarget(),Nt=s.state.buffers.depth.getReversed(),Bt=L.isInstancedMesh===!0,Yt=L.isBatchedMesh===!0,Ee=!!y.map,Qt=!!y.matcap,Re=!!Z,O=!!y.aoMap,Dn=!!y.lightMap,jt=!!y.bumpMap,Kt=!!y.normalMap,Pt=!!y.displacementMap,_e=!!y.emissiveMap,Rt=!!y.metalnessMap,D=!!y.roughnessMap,R=y.anisotropy>0,X=y.clearcoat>0,nt=y.dispersion>0,ot=y.iridescence>0,et=y.sheen>0,Ct=y.transmission>0,xt=R&&!!y.anisotropyMap,bt=X&&!!y.clearcoatMap,te=X&&!!y.clearcoatNormalMap,lt=X&&!!y.clearcoatRoughnessMap,Et=ot&&!!y.iridescenceMap,Ut=ot&&!!y.iridescenceThicknessMap,Ft=et&&!!y.sheenColorMap,Tt=et&&!!y.sheenRoughnessMap,Jt=!!y.specularMap,Wt=!!y.specularColorMap,xe=!!y.specularIntensityMap,B=Ct&&!!y.transmissionMap,mt=Ct&&!!y.thicknessMap,Q=!!y.gradientMap,it=!!y.alphaMap,vt=y.alphaTest>0,_t=!!y.alphaHash,Ht=!!y.extensions;let Ae=qi;y.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Ae=s.toneMapping);const Xe={shaderID:rt,shaderType:y.type,shaderName:y.name,vertexShader:$t,fragmentShader:tt,defines:y.defines,customVertexShaderID:ct,customFragmentShaderID:wt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Yt,batchingColor:Yt&&L._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&L.instanceColor!==null,instancingMorph:Bt&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ft===null?s.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:To,alphaToCoverage:!!y.alphaToCoverage,map:Ee,matcap:Qt,envMap:Re,envMapMode:Re&&Z.mapping,envMapCubeUVHeight:W,aoMap:O,lightMap:Dn,bumpMap:jt,normalMap:Kt,displacementMap:f&&Pt,emissiveMap:_e,normalMapObjectSpace:Kt&&y.normalMapType===I0,normalMapTangentSpace:Kt&&y.normalMapType===Sd,metalnessMap:Rt,roughnessMap:D,anisotropy:R,anisotropyMap:xt,clearcoat:X,clearcoatMap:bt,clearcoatNormalMap:te,clearcoatRoughnessMap:lt,dispersion:nt,iridescence:ot,iridescenceMap:Et,iridescenceThicknessMap:Ut,sheen:et,sheenColorMap:Ft,sheenRoughnessMap:Tt,specularMap:Jt,specularColorMap:Wt,specularIntensityMap:xe,transmission:Ct,transmissionMap:B,thicknessMap:mt,gradientMap:Q,opaque:y.transparent===!1&&y.blending===lo&&y.alphaToCoverage===!1,alphaMap:it,alphaTest:vt,alphaHash:_t,combine:y.combine,mapUv:Ee&&_(y.map.channel),aoMapUv:O&&_(y.aoMap.channel),lightMapUv:Dn&&_(y.lightMap.channel),bumpMapUv:jt&&_(y.bumpMap.channel),normalMapUv:Kt&&_(y.normalMap.channel),displacementMapUv:Pt&&_(y.displacementMap.channel),emissiveMapUv:_e&&_(y.emissiveMap.channel),metalnessMapUv:Rt&&_(y.metalnessMap.channel),roughnessMapUv:D&&_(y.roughnessMap.channel),anisotropyMapUv:xt&&_(y.anisotropyMap.channel),clearcoatMapUv:bt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&_(y.sheenRoughnessMap.channel),specularMapUv:Jt&&_(y.specularMap.channel),specularColorMapUv:Wt&&_(y.specularColorMap.channel),specularIntensityMapUv:xe&&_(y.specularIntensityMap.channel),transmissionMapUv:B&&_(y.transmissionMap.channel),thicknessMapUv:mt&&_(y.thicknessMap.channel),alphaMapUv:it&&_(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Kt||R),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!V.attributes.uv&&(Ee||it),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Nt,skinning:L.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:zt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Ee&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===de,decodeVideoTextureEmissive:_e&&y.emissiveMap.isVideoTexture===!0&&oe.getTransfer(y.emissiveMap.colorSpace)===de,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Lt,flipSided:y.side===xn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ht&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&y.extensions.multiDraw===!0||Yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function m(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)x.push(C),x.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(E(x,y),v(x,y),x.push(s.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function E(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function v(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const x=g[y.type];let C;if(x){const U=ii[x];C=Da.clone(U.uniforms)}else C=y.uniforms;return C}function A(y,x){let C;for(let U=0,L=h.length;U<L;U++){const z=h[U];if(z.cacheKey===x){C=z,++C.usedTimes;break}}return C===void 0&&(C=new sv(s,x,y,o),h.push(C)),C}function T(y){if(--y.usedTimes===0){const x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function b(y){c.remove(y)}function S(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:M,acquireProgram:A,releaseProgram:T,releaseShaderCache:b,programs:h,dispose:S}}function lv(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,c){s.get(r)[a]=c}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function hv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function If(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Lf(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(u,f,d,g,_,p){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},s[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function a(u,f,d,g,_,p){const m=r(u,f,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function c(u,f,d,g,_,p){const m=r(u,f,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function l(u,f){e.length>1&&e.sort(u||hv),n.length>1&&n.sort(f||If),i.length>1&&i.sort(f||If)}function h(){for(let u=t,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:c,finish:h,sort:l}}function uv(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new Lf,s.set(n,[r])):i>=o.length?(r=new Lf,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function fv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new st};break;case"SpotLight":e={position:new N,direction:new N,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new st,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new st,groundColor:new st};break;case"RectAreaLight":e={color:new st,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function dv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let pv=0;function mv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function gv(s){const t=new fv,e=dv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const i=new N,o=new fe,r=new fe;function a(l){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,E=0,v=0,M=0,A=0,T=0,b=0;l.sort(mv);for(let y=0,x=l.length;y<x;y++){const C=l[y],U=C.color,L=C.intensity,z=C.distance,V=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=U.r*L,u+=U.g*L,f+=U.b*L;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],L);b++}else if(C.isDirectionalLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Z=C.shadow,W=e.get(C);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=C.shadow.matrix,E++}n.directional[d]=G,d++}else if(C.isSpotLight){const G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(U).multiplyScalar(L),G.distance=z,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[_]=G;const Z=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,Z.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[_]=Z.matrix,C.castShadow){const W=e.get(C);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=V,M++}_++}else if(C.isRectAreaLight){const G=t.get(C);G.color.copy(U).multiplyScalar(L),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=G,p++}else if(C.isPointLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const Z=C.shadow,W=e.get(C);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=C.shadow.matrix,v++}n.point[g]=G,g++}else if(C.isHemisphereLight){const G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(L),G.groundColor.copy(C.groundColor).multiplyScalar(L),n.hemi[m]=G,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const S=n.hash;(S.directionalLength!==d||S.pointLength!==g||S.spotLength!==_||S.rectAreaLength!==p||S.hemiLength!==m||S.numDirectionalShadows!==E||S.numPointShadows!==v||S.numSpotShadows!==M||S.numSpotMaps!==A||S.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=b,S.directionalLength=d,S.pointLength=g,S.spotLength=_,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=E,S.numPointShadows=v,S.numSpotShadows=M,S.numSpotMaps=A,S.numLightProbes=b,n.version=pv++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,E=l.length;m<E;m++){const v=l[m];if(v.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),u++}else if(v.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),r.identity(),o.copy(v.matrixWorld),o.premultiply(p),r.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function Df(s){const t=new gv(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function xv(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new Df(s),t.set(i,[a])):o>=r.length?(a=new Df(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const _v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mv=`uniform sampler2D shadow_pass;
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
}`;function vv(s,t,e){let n=new Zh;const i=new dt,o=new dt,r=new pe,a=new Xm({depthPacking:P0}),c=new Ym,l={},h=e.maxTextureSize,u={[Zi]:xn,[xn]:Zi,[Lt]:Lt},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:_v,fragmentShader:Mv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new be;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new I(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ld;let m=this.type;this.render=function(T,b,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const y=s.getRenderTarget(),x=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Ti),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const L=m!==yi&&this.type===yi,z=m===yi&&this.type!==yi;for(let V=0,G=T.length;V<G;V++){const Z=T[V],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const rt=W.getFrameExtents();if(i.multiply(rt),o.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/rt.x),i.x=o.x*rt.x,W.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/rt.y),i.y=o.y*rt.y,W.mapSize.y=o.y)),W.map===null||L===!0||z===!0){const yt=this.type!==yi?{minFilter:Ln,magFilter:Ln}:{};W.map!==null&&W.map.dispose(),W.map=new Kn(i.x,i.y,yt),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const ut=W.getViewportCount();for(let yt=0;yt<ut;yt++){const zt=W.getViewport(yt);r.set(o.x*zt.x,o.y*zt.y,o.x*zt.z,o.y*zt.w),U.viewport(r),W.updateMatrices(Z,yt),n=W.getFrustum(),M(b,S,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===yi&&E(W,S),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(y,x,C)};function E(T,b){const S=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Kn(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(b,null,S,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(b,null,S,d,_,null)}function v(T,b,S,y){let x=null;const C=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)x=C;else if(x=S.isPointLight===!0?c:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const U=x.uuid,L=b.uuid;let z=l[U];z===void 0&&(z={},l[U]=z);let V=z[L];V===void 0&&(V=x.clone(),z[L]=V,b.addEventListener("dispose",A)),x=V}if(x.visible=b.visible,x.wireframe=b.wireframe,y===yi?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:u[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,S.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=s.properties.get(x);U.light=S}return x}function M(T,b,S,y,x){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===yi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);const L=t.update(T),z=T.material;if(Array.isArray(z)){const V=L.groups;for(let G=0,Z=V.length;G<Z;G++){const W=V[G],rt=z[W.materialIndex];if(rt&&rt.visible){const ut=v(T,rt,y,x);T.onBeforeShadow(s,T,b,S,L,ut,W),s.renderBufferDirect(S,null,L,ut,T,W),T.onAfterShadow(s,T,b,S,L,ut,W)}}}else if(z.visible){const V=v(T,z,y,x);T.onBeforeShadow(s,T,b,S,L,V,null),s.renderBufferDirect(S,null,L,V,T,null),T.onAfterShadow(s,T,b,S,L,V,null)}}const U=T.children;for(let L=0,z=U.length;L<z;L++)M(U[L],b,S,y,x)}function A(T){T.target.removeEventListener("dispose",A);for(const S in l){const y=l[S],x=T.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const yv={[ml]:gl,[xl]:vl,[_l]:yl,[yo]:Ml,[gl]:ml,[vl]:xl,[yl]:_l,[Ml]:yo};function wv(s,t){function e(){let B=!1;const mt=new pe;let Q=null;const it=new pe(0,0,0,0);return{setMask:function(vt){Q!==vt&&!B&&(s.colorMask(vt,vt,vt,vt),Q=vt)},setLocked:function(vt){B=vt},setClear:function(vt,_t,Ht,Ae,Xe){Xe===!0&&(vt*=Ae,_t*=Ae,Ht*=Ae),mt.set(vt,_t,Ht,Ae),it.equals(mt)===!1&&(s.clearColor(vt,_t,Ht,Ae),it.copy(mt))},reset:function(){B=!1,Q=null,it.set(-1,0,0,0)}}}function n(){let B=!1,mt=!1,Q=null,it=null,vt=null;return{setReversed:function(_t){if(mt!==_t){const Ht=t.get("EXT_clip_control");mt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);const Ae=vt;vt=null,this.setClear(Ae)}mt=_t},getReversed:function(){return mt},setTest:function(_t){_t?ft(s.DEPTH_TEST):Nt(s.DEPTH_TEST)},setMask:function(_t){Q!==_t&&!B&&(s.depthMask(_t),Q=_t)},setFunc:function(_t){if(mt&&(_t=yv[_t]),it!==_t){switch(_t){case ml:s.depthFunc(s.NEVER);break;case gl:s.depthFunc(s.ALWAYS);break;case xl:s.depthFunc(s.LESS);break;case yo:s.depthFunc(s.LEQUAL);break;case _l:s.depthFunc(s.EQUAL);break;case Ml:s.depthFunc(s.GEQUAL);break;case vl:s.depthFunc(s.GREATER);break;case yl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}it=_t}},setLocked:function(_t){B=_t},setClear:function(_t){vt!==_t&&(mt&&(_t=1-_t),s.clearDepth(_t),vt=_t)},reset:function(){B=!1,Q=null,it=null,vt=null,mt=!1}}}function i(){let B=!1,mt=null,Q=null,it=null,vt=null,_t=null,Ht=null,Ae=null,Xe=null;return{setTest:function(ue){B||(ue?ft(s.STENCIL_TEST):Nt(s.STENCIL_TEST))},setMask:function(ue){mt!==ue&&!B&&(s.stencilMask(ue),mt=ue)},setFunc:function(ue,Wn,mi){(Q!==ue||it!==Wn||vt!==mi)&&(s.stencilFunc(ue,Wn,mi),Q=ue,it=Wn,vt=mi)},setOp:function(ue,Wn,mi){(_t!==ue||Ht!==Wn||Ae!==mi)&&(s.stencilOp(ue,Wn,mi),_t=ue,Ht=Wn,Ae=mi)},setLocked:function(ue){B=ue},setClear:function(ue){Xe!==ue&&(s.clearStencil(ue),Xe=ue)},reset:function(){B=!1,mt=null,Q=null,it=null,vt=null,_t=null,Ht=null,Ae=null,Xe=null}}}const o=new e,r=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,p=null,m=null,E=null,v=null,M=null,A=null,T=null,b=new st(0,0,0),S=0,y=!1,x=null,C=null,U=null,L=null,z=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Z=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=Z>=2);let rt=null,ut={};const yt=s.getParameter(s.SCISSOR_BOX),zt=s.getParameter(s.VIEWPORT),$t=new pe().fromArray(yt),tt=new pe().fromArray(zt);function ct(B,mt,Q,it){const vt=new Uint8Array(4),_t=s.createTexture();s.bindTexture(B,_t),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<Q;Ht++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(mt,0,s.RGBA,1,1,it,0,s.RGBA,s.UNSIGNED_BYTE,vt):s.texImage2D(mt+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,vt);return _t}const wt={};wt[s.TEXTURE_2D]=ct(s.TEXTURE_2D,s.TEXTURE_2D,1),wt[s.TEXTURE_CUBE_MAP]=ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[s.TEXTURE_2D_ARRAY]=ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),wt[s.TEXTURE_3D]=ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ft(s.DEPTH_TEST),r.setFunc(yo),jt(!1),Kt(Su),ft(s.CULL_FACE),O(Ti);function ft(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function Nt(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function Bt(B,mt){return u[B]!==mt?(s.bindFramebuffer(B,mt),u[B]=mt,B===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=mt),B===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=mt),!0):!1}function Yt(B,mt){let Q=d,it=!1;if(B){Q=f.get(mt),Q===void 0&&(Q=[],f.set(mt,Q));const vt=B.textures;if(Q.length!==vt.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,Ht=vt.length;_t<Ht;_t++)Q[_t]=s.COLOR_ATTACHMENT0+_t;Q.length=vt.length,it=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,it=!0);it&&s.drawBuffers(Q)}function Ee(B){return g!==B?(s.useProgram(B),g=B,!0):!1}const Qt={[ps]:s.FUNC_ADD,[i0]:s.FUNC_SUBTRACT,[s0]:s.FUNC_REVERSE_SUBTRACT};Qt[o0]=s.MIN,Qt[r0]=s.MAX;const Re={[a0]:s.ZERO,[c0]:s.ONE,[l0]:s.SRC_COLOR,[dl]:s.SRC_ALPHA,[m0]:s.SRC_ALPHA_SATURATE,[d0]:s.DST_COLOR,[u0]:s.DST_ALPHA,[h0]:s.ONE_MINUS_SRC_COLOR,[pl]:s.ONE_MINUS_SRC_ALPHA,[p0]:s.ONE_MINUS_DST_COLOR,[f0]:s.ONE_MINUS_DST_ALPHA,[g0]:s.CONSTANT_COLOR,[x0]:s.ONE_MINUS_CONSTANT_COLOR,[_0]:s.CONSTANT_ALPHA,[M0]:s.ONE_MINUS_CONSTANT_ALPHA};function O(B,mt,Q,it,vt,_t,Ht,Ae,Xe,ue){if(B===Ti){_===!0&&(Nt(s.BLEND),_=!1);return}if(_===!1&&(ft(s.BLEND),_=!0),B!==n0){if(B!==p||ue!==y){if((m!==ps||M!==ps)&&(s.blendEquation(s.FUNC_ADD),m=ps,M=ps),ue)switch(B){case lo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case he:s.blendFunc(s.ONE,s.ONE);break;case bu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case lo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case he:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case bu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}E=null,v=null,A=null,T=null,b.set(0,0,0),S=0,p=B,y=ue}return}vt=vt||mt,_t=_t||Q,Ht=Ht||it,(mt!==m||vt!==M)&&(s.blendEquationSeparate(Qt[mt],Qt[vt]),m=mt,M=vt),(Q!==E||it!==v||_t!==A||Ht!==T)&&(s.blendFuncSeparate(Re[Q],Re[it],Re[_t],Re[Ht]),E=Q,v=it,A=_t,T=Ht),(Ae.equals(b)===!1||Xe!==S)&&(s.blendColor(Ae.r,Ae.g,Ae.b,Xe),b.copy(Ae),S=Xe),p=B,y=!1}function Dn(B,mt){B.side===Lt?Nt(s.CULL_FACE):ft(s.CULL_FACE);let Q=B.side===xn;mt&&(Q=!Q),jt(Q),B.blending===lo&&B.transparent===!1?O(Ti):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),o.setMask(B.colorWrite);const it=B.stencilWrite;a.setTest(it),it&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),_e(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ft(s.SAMPLE_ALPHA_TO_COVERAGE):Nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function jt(B){x!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),x=B)}function Kt(B){B!==t0?(ft(s.CULL_FACE),B!==C&&(B===Su?s.cullFace(s.BACK):B===e0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Nt(s.CULL_FACE),C=B}function Pt(B){B!==U&&(G&&s.lineWidth(B),U=B)}function _e(B,mt,Q){B?(ft(s.POLYGON_OFFSET_FILL),(L!==mt||z!==Q)&&(s.polygonOffset(mt,Q),L=mt,z=Q)):Nt(s.POLYGON_OFFSET_FILL)}function Rt(B){B?ft(s.SCISSOR_TEST):Nt(s.SCISSOR_TEST)}function D(B){B===void 0&&(B=s.TEXTURE0+V-1),rt!==B&&(s.activeTexture(B),rt=B)}function R(B,mt,Q){Q===void 0&&(rt===null?Q=s.TEXTURE0+V-1:Q=rt);let it=ut[Q];it===void 0&&(it={type:void 0,texture:void 0},ut[Q]=it),(it.type!==B||it.texture!==mt)&&(rt!==Q&&(s.activeTexture(Q),rt=Q),s.bindTexture(B,mt||wt[B]),it.type=B,it.texture=mt)}function X(){const B=ut[rt];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function nt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function bt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function lt(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Et(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ut(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ft(B){$t.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),$t.copy(B))}function Tt(B){tt.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),tt.copy(B))}function Jt(B,mt){let Q=l.get(mt);Q===void 0&&(Q=new WeakMap,l.set(mt,Q));let it=Q.get(B);it===void 0&&(it=s.getUniformBlockIndex(mt,B.name),Q.set(B,it))}function Wt(B,mt){const it=l.get(mt).get(B);c.get(mt)!==it&&(s.uniformBlockBinding(mt,it,B.__bindingPointIndex),c.set(mt,it))}function xe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},rt=null,ut={},u={},f=new WeakMap,d=[],g=null,_=!1,p=null,m=null,E=null,v=null,M=null,A=null,T=null,b=new st(0,0,0),S=0,y=!1,x=null,C=null,U=null,L=null,z=null,$t.set(0,0,s.canvas.width,s.canvas.height),tt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:ft,disable:Nt,bindFramebuffer:Bt,drawBuffers:Yt,useProgram:Ee,setBlending:O,setMaterial:Dn,setFlipSided:jt,setCullFace:Kt,setLineWidth:Pt,setPolygonOffset:_e,setScissorTest:Rt,activeTexture:D,bindTexture:R,unbindTexture:X,compressedTexImage2D:nt,compressedTexImage3D:ot,texImage2D:Et,texImage3D:Ut,updateUBOMapping:Jt,uniformBlockBinding:Wt,texStorage2D:te,texStorage3D:lt,texSubImage2D:et,texSubImage3D:Ct,compressedTexSubImage2D:xt,compressedTexSubImage3D:bt,scissor:Ft,viewport:Tt,reset:xe}}function Sv(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,R){return d?new OffscreenCanvas(D,R):La("canvas")}function _(D,R,X){let nt=1;const ot=Rt(D);if((ot.width>X||ot.height>X)&&(nt=X/Math.max(ot.width,ot.height)),nt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const et=Math.floor(nt*ot.width),Ct=Math.floor(nt*ot.height);u===void 0&&(u=g(et,Ct));const xt=R?g(et,Ct):u;return xt.width=et,xt.height=Ct,xt.getContext("2d").drawImage(D,0,0,et,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+et+"x"+Ct+")."),xt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),D;return D}function p(D){return D.generateMipmaps}function m(D){s.generateMipmap(D)}function E(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(D,R,X,nt,ot=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let et=R;if(R===s.RED&&(X===s.FLOAT&&(et=s.R32F),X===s.HALF_FLOAT&&(et=s.R16F),X===s.UNSIGNED_BYTE&&(et=s.R8)),R===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.R8UI),X===s.UNSIGNED_SHORT&&(et=s.R16UI),X===s.UNSIGNED_INT&&(et=s.R32UI),X===s.BYTE&&(et=s.R8I),X===s.SHORT&&(et=s.R16I),X===s.INT&&(et=s.R32I)),R===s.RG&&(X===s.FLOAT&&(et=s.RG32F),X===s.HALF_FLOAT&&(et=s.RG16F),X===s.UNSIGNED_BYTE&&(et=s.RG8)),R===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.RG8UI),X===s.UNSIGNED_SHORT&&(et=s.RG16UI),X===s.UNSIGNED_INT&&(et=s.RG32UI),X===s.BYTE&&(et=s.RG8I),X===s.SHORT&&(et=s.RG16I),X===s.INT&&(et=s.RG32I)),R===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.RGB8UI),X===s.UNSIGNED_SHORT&&(et=s.RGB16UI),X===s.UNSIGNED_INT&&(et=s.RGB32UI),X===s.BYTE&&(et=s.RGB8I),X===s.SHORT&&(et=s.RGB16I),X===s.INT&&(et=s.RGB32I)),R===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(et=s.RGBA16UI),X===s.UNSIGNED_INT&&(et=s.RGBA32UI),X===s.BYTE&&(et=s.RGBA8I),X===s.SHORT&&(et=s.RGBA16I),X===s.INT&&(et=s.RGBA32I)),R===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(et=s.RGB9_E5),R===s.RGBA){const Ct=ot?Pa:oe.getTransfer(nt);X===s.FLOAT&&(et=s.RGBA32F),X===s.HALF_FLOAT&&(et=s.RGBA16F),X===s.UNSIGNED_BYTE&&(et=Ct===de?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function M(D,R){let X;return D?R===null||R===Ts||R===bo?X=s.DEPTH24_STENCIL8:R===hi?X=s.DEPTH32F_STENCIL8:R===fr&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Ts||R===bo?X=s.DEPTH_COMPONENT24:R===hi?X=s.DEPTH_COMPONENT32F:R===fr&&(X=s.DEPTH_COMPONENT16),X}function A(D,R){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ln&&D.minFilter!==li?Math.log2(Math.max(R.width,R.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?R.mipmaps.length:1}function T(D){const R=D.target;R.removeEventListener("dispose",T),S(R),R.isVideoTexture&&h.delete(R)}function b(D){const R=D.target;R.removeEventListener("dispose",b),x(R)}function S(D){const R=n.get(D);if(R.__webglInit===void 0)return;const X=D.source,nt=f.get(X);if(nt){const ot=nt[R.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&y(D),Object.keys(nt).length===0&&f.delete(X)}n.remove(D)}function y(D){const R=n.get(D);s.deleteTexture(R.__webglTexture);const X=D.source,nt=f.get(X);delete nt[R.__cacheKey],r.memory.textures--}function x(D){const R=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(R.__webglFramebuffer[nt]))for(let ot=0;ot<R.__webglFramebuffer[nt].length;ot++)s.deleteFramebuffer(R.__webglFramebuffer[nt][ot]);else s.deleteFramebuffer(R.__webglFramebuffer[nt]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[nt])}else{if(Array.isArray(R.__webglFramebuffer))for(let nt=0;nt<R.__webglFramebuffer.length;nt++)s.deleteFramebuffer(R.__webglFramebuffer[nt]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let nt=0;nt<R.__webglColorRenderbuffer.length;nt++)R.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[nt]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const X=D.textures;for(let nt=0,ot=X.length;nt<ot;nt++){const et=n.get(X[nt]);et.__webglTexture&&(s.deleteTexture(et.__webglTexture),r.memory.textures--),n.remove(X[nt])}n.remove(D)}let C=0;function U(){C=0}function L(){const D=C;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),C+=1,D}function z(D){const R=[];return R.push(D.wrapS),R.push(D.wrapT),R.push(D.wrapR||0),R.push(D.magFilter),R.push(D.minFilter),R.push(D.anisotropy),R.push(D.internalFormat),R.push(D.format),R.push(D.type),R.push(D.generateMipmaps),R.push(D.premultiplyAlpha),R.push(D.flipY),R.push(D.unpackAlignment),R.push(D.colorSpace),R.join()}function V(D,R){const X=n.get(D);if(D.isVideoTexture&&Pt(D),D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){const nt=D.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(X,D,R);return}}e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+R)}function G(D,R){const X=n.get(D);if(D.version>0&&X.__version!==D.version){tt(X,D,R);return}e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+R)}function Z(D,R){const X=n.get(D);if(D.version>0&&X.__version!==D.version){tt(X,D,R);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+R)}function W(D,R){const X=n.get(D);if(D.version>0&&X.__version!==D.version){ct(X,D,R);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+R)}const rt={[Ra]:s.REPEAT,[gs]:s.CLAMP_TO_EDGE,[bl]:s.MIRRORED_REPEAT},ut={[Ln]:s.NEAREST,[C0]:s.NEAREST_MIPMAP_NEAREST,[Pr]:s.NEAREST_MIPMAP_LINEAR,[li]:s.LINEAR,[cc]:s.LINEAR_MIPMAP_NEAREST,[xs]:s.LINEAR_MIPMAP_LINEAR},yt={[L0]:s.NEVER,[O0]:s.ALWAYS,[D0]:s.LESS,[bd]:s.LEQUAL,[U0]:s.EQUAL,[F0]:s.GEQUAL,[N0]:s.GREATER,[z0]:s.NOTEQUAL};function zt(D,R){if(R.type===hi&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===li||R.magFilter===cc||R.magFilter===Pr||R.magFilter===xs||R.minFilter===li||R.minFilter===cc||R.minFilter===Pr||R.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,rt[R.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,rt[R.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,rt[R.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ut[R.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ut[R.minFilter]),R.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,yt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Ln||R.minFilter!==Pr&&R.minFilter!==xs||R.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");s.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function $t(D,R){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,R.addEventListener("dispose",T));const nt=R.source;let ot=f.get(nt);ot===void 0&&(ot={},f.set(nt,ot));const et=z(R);if(et!==D.__cacheKey){ot[et]===void 0&&(ot[et]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,X=!0),ot[et].usedTimes++;const Ct=ot[D.__cacheKey];Ct!==void 0&&(ot[D.__cacheKey].usedTimes--,Ct.usedTimes===0&&y(R)),D.__cacheKey=et,D.__webglTexture=ot[et].texture}return X}function tt(D,R,X){let nt=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(nt=s.TEXTURE_3D);const ot=$t(D,R),et=R.source;e.bindTexture(nt,D.__webglTexture,s.TEXTURE0+X);const Ct=n.get(et);if(et.version!==Ct.__version||ot===!0){e.activeTexture(s.TEXTURE0+X);const xt=oe.getPrimaries(oe.workingColorSpace),bt=R.colorSpace===Hi?null:oe.getPrimaries(R.colorSpace),te=R.colorSpace===Hi||xt===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let lt=_(R.image,!1,i.maxTextureSize);lt=_e(R,lt);const Et=o.convert(R.format,R.colorSpace),Ut=o.convert(R.type);let Ft=v(R.internalFormat,Et,Ut,R.colorSpace,R.isVideoTexture);zt(nt,R);let Tt;const Jt=R.mipmaps,Wt=R.isVideoTexture!==!0,xe=Ct.__version===void 0||ot===!0,B=et.dataReady,mt=A(R,lt);if(R.isDepthTexture)Ft=M(R.format===Eo,R.type),xe&&(Wt?e.texStorage2D(s.TEXTURE_2D,1,Ft,lt.width,lt.height):e.texImage2D(s.TEXTURE_2D,0,Ft,lt.width,lt.height,0,Et,Ut,null));else if(R.isDataTexture)if(Jt.length>0){Wt&&xe&&e.texStorage2D(s.TEXTURE_2D,mt,Ft,Jt[0].width,Jt[0].height);for(let Q=0,it=Jt.length;Q<it;Q++)Tt=Jt[Q],Wt?B&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,Tt.width,Tt.height,Et,Ut,Tt.data):e.texImage2D(s.TEXTURE_2D,Q,Ft,Tt.width,Tt.height,0,Et,Ut,Tt.data);R.generateMipmaps=!1}else Wt?(xe&&e.texStorage2D(s.TEXTURE_2D,mt,Ft,lt.width,lt.height),B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt.width,lt.height,Et,Ut,lt.data)):e.texImage2D(s.TEXTURE_2D,0,Ft,lt.width,lt.height,0,Et,Ut,lt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Wt&&xe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Ft,Jt[0].width,Jt[0].height,lt.depth);for(let Q=0,it=Jt.length;Q<it;Q++)if(Tt=Jt[Q],R.format!==jn)if(Et!==null)if(Wt){if(B)if(R.layerUpdates.size>0){const vt=lf(Tt.width,Tt.height,R.format,R.type);for(const _t of R.layerUpdates){const Ht=Tt.data.subarray(_t*vt/Tt.data.BYTES_PER_ELEMENT,(_t+1)*vt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,_t,Tt.width,Tt.height,1,Et,Ht)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,Tt.width,Tt.height,lt.depth,Et,Tt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,Ft,Tt.width,Tt.height,lt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?B&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,Tt.width,Tt.height,lt.depth,Et,Ut,Tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,Ft,Tt.width,Tt.height,lt.depth,0,Et,Ut,Tt.data)}else{Wt&&xe&&e.texStorage2D(s.TEXTURE_2D,mt,Ft,Jt[0].width,Jt[0].height);for(let Q=0,it=Jt.length;Q<it;Q++)Tt=Jt[Q],R.format!==jn?Et!==null?Wt?B&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,Tt.width,Tt.height,Et,Tt.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,Ft,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?B&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,Tt.width,Tt.height,Et,Ut,Tt.data):e.texImage2D(s.TEXTURE_2D,Q,Ft,Tt.width,Tt.height,0,Et,Ut,Tt.data)}else if(R.isDataArrayTexture)if(Wt){if(xe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Ft,lt.width,lt.height,lt.depth),B)if(R.layerUpdates.size>0){const Q=lf(lt.width,lt.height,R.format,R.type);for(const it of R.layerUpdates){const vt=lt.data.subarray(it*Q/lt.data.BYTES_PER_ELEMENT,(it+1)*Q/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,lt.width,lt.height,1,Et,Ut,vt)}R.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Et,Ut,lt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ft,lt.width,lt.height,lt.depth,0,Et,Ut,lt.data);else if(R.isData3DTexture)Wt?(xe&&e.texStorage3D(s.TEXTURE_3D,mt,Ft,lt.width,lt.height,lt.depth),B&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Et,Ut,lt.data)):e.texImage3D(s.TEXTURE_3D,0,Ft,lt.width,lt.height,lt.depth,0,Et,Ut,lt.data);else if(R.isFramebufferTexture){if(xe)if(Wt)e.texStorage2D(s.TEXTURE_2D,mt,Ft,lt.width,lt.height);else{let Q=lt.width,it=lt.height;for(let vt=0;vt<mt;vt++)e.texImage2D(s.TEXTURE_2D,vt,Ft,Q,it,0,Et,Ut,null),Q>>=1,it>>=1}}else if(Jt.length>0){if(Wt&&xe){const Q=Rt(Jt[0]);e.texStorage2D(s.TEXTURE_2D,mt,Ft,Q.width,Q.height)}for(let Q=0,it=Jt.length;Q<it;Q++)Tt=Jt[Q],Wt?B&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,Et,Ut,Tt):e.texImage2D(s.TEXTURE_2D,Q,Ft,Et,Ut,Tt);R.generateMipmaps=!1}else if(Wt){if(xe){const Q=Rt(lt);e.texStorage2D(s.TEXTURE_2D,mt,Ft,Q.width,Q.height)}B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Et,Ut,lt)}else e.texImage2D(s.TEXTURE_2D,0,Ft,Et,Ut,lt);p(R)&&m(nt),Ct.__version=et.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function ct(D,R,X){if(R.image.length!==6)return;const nt=$t(D,R),ot=R.source;e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+X);const et=n.get(ot);if(ot.version!==et.__version||nt===!0){e.activeTexture(s.TEXTURE0+X);const Ct=oe.getPrimaries(oe.workingColorSpace),xt=R.colorSpace===Hi?null:oe.getPrimaries(R.colorSpace),bt=R.colorSpace===Hi||Ct===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const te=R.isCompressedTexture||R.image[0].isCompressedTexture,lt=R.image[0]&&R.image[0].isDataTexture,Et=[];for(let it=0;it<6;it++)!te&&!lt?Et[it]=_(R.image[it],!0,i.maxCubemapSize):Et[it]=lt?R.image[it].image:R.image[it],Et[it]=_e(R,Et[it]);const Ut=Et[0],Ft=o.convert(R.format,R.colorSpace),Tt=o.convert(R.type),Jt=v(R.internalFormat,Ft,Tt,R.colorSpace),Wt=R.isVideoTexture!==!0,xe=et.__version===void 0||nt===!0,B=ot.dataReady;let mt=A(R,Ut);zt(s.TEXTURE_CUBE_MAP,R);let Q;if(te){Wt&&xe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Jt,Ut.width,Ut.height);for(let it=0;it<6;it++){Q=Et[it].mipmaps;for(let vt=0;vt<Q.length;vt++){const _t=Q[vt];R.format!==jn?Ft!==null?Wt?B&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,0,0,_t.width,_t.height,Ft,_t.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,Jt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,0,0,_t.width,_t.height,Ft,Tt,_t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,Jt,_t.width,_t.height,0,Ft,Tt,_t.data)}}}else{if(Q=R.mipmaps,Wt&&xe){Q.length>0&&mt++;const it=Rt(Et[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Jt,it.width,it.height)}for(let it=0;it<6;it++)if(lt){Wt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Et[it].width,Et[it].height,Ft,Tt,Et[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Jt,Et[it].width,Et[it].height,0,Ft,Tt,Et[it].data);for(let vt=0;vt<Q.length;vt++){const Ht=Q[vt].image[it].image;Wt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,0,0,Ht.width,Ht.height,Ft,Tt,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,Jt,Ht.width,Ht.height,0,Ft,Tt,Ht.data)}}else{Wt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ft,Tt,Et[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Jt,Ft,Tt,Et[it]);for(let vt=0;vt<Q.length;vt++){const _t=Q[vt];Wt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,0,0,Ft,Tt,_t.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,Jt,Ft,Tt,_t.image[it])}}}p(R)&&m(s.TEXTURE_CUBE_MAP),et.__version=ot.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function wt(D,R,X,nt,ot,et){const Ct=o.convert(X.format,X.colorSpace),xt=o.convert(X.type),bt=v(X.internalFormat,Ct,xt,X.colorSpace),te=n.get(R),lt=n.get(X);if(lt.__renderTarget=R,!te.__hasExternalTextures){const Et=Math.max(1,R.width>>et),Ut=Math.max(1,R.height>>et);ot===s.TEXTURE_3D||ot===s.TEXTURE_2D_ARRAY?e.texImage3D(ot,et,bt,Et,Ut,R.depth,0,Ct,xt,null):e.texImage2D(ot,et,bt,Et,Ut,0,Ct,xt,null)}e.bindFramebuffer(s.FRAMEBUFFER,D),Kt(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,ot,lt.__webglTexture,0,jt(R)):(ot===s.TEXTURE_2D||ot>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,ot,lt.__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(D,R,X){if(s.bindRenderbuffer(s.RENDERBUFFER,D),R.depthBuffer){const nt=R.depthTexture,ot=nt&&nt.isDepthTexture?nt.type:null,et=M(R.stencilBuffer,ot),Ct=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=jt(R);Kt(R)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt,et,R.width,R.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,et,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,et,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,D)}else{const nt=R.textures;for(let ot=0;ot<nt.length;ot++){const et=nt[ot],Ct=o.convert(et.format,et.colorSpace),xt=o.convert(et.type),bt=v(et.internalFormat,Ct,xt,et.colorSpace),te=jt(R);X&&Kt(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,te,bt,R.width,R.height):Kt(R)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,bt,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,bt,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Nt(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,D),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=n.get(R.depthTexture);nt.__renderTarget=R,(!nt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),V(R.depthTexture,0);const ot=nt.__webglTexture,et=jt(R);if(R.depthTexture.format===ho)Kt(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0);else if(R.depthTexture.format===Eo)Kt(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Bt(D){const R=n.get(D),X=D.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==D.depthTexture){const nt=D.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),nt){const ot=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,nt.removeEventListener("dispose",ot)};nt.addEventListener("dispose",ot),R.__depthDisposeCallback=ot}R.__boundDepthTexture=nt}if(D.depthTexture&&!R.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Nt(R.__webglFramebuffer,D)}else if(X){R.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[nt]),R.__webglDepthbuffer[nt]===void 0)R.__webglDepthbuffer[nt]=s.createRenderbuffer(),ft(R.__webglDepthbuffer[nt],D,!1);else{const ot=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=R.__webglDepthbuffer[nt];s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,et)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),ft(R.__webglDepthbuffer,D,!1);else{const nt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,ot)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(D,R,X){const nt=n.get(D);R!==void 0&&wt(nt.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Bt(D)}function Ee(D){const R=D.texture,X=n.get(D),nt=n.get(R);D.addEventListener("dispose",b);const ot=D.textures,et=D.isWebGLCubeRenderTarget===!0,Ct=ot.length>1;if(Ct||(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=R.version,r.memory.textures++),et){X.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(R.mipmaps&&R.mipmaps.length>0){X.__webglFramebuffer[xt]=[];for(let bt=0;bt<R.mipmaps.length;bt++)X.__webglFramebuffer[xt][bt]=s.createFramebuffer()}else X.__webglFramebuffer[xt]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){X.__webglFramebuffer=[];for(let xt=0;xt<R.mipmaps.length;xt++)X.__webglFramebuffer[xt]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let xt=0,bt=ot.length;xt<bt;xt++){const te=n.get(ot[xt]);te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture(),r.memory.textures++)}if(D.samples>0&&Kt(D)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let xt=0;xt<ot.length;xt++){const bt=ot[xt];X.__webglColorRenderbuffer[xt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[xt]);const te=o.convert(bt.format,bt.colorSpace),lt=o.convert(bt.type),Et=v(bt.internalFormat,te,lt,bt.colorSpace,D.isXRRenderTarget===!0),Ut=jt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,Et,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,X.__webglColorRenderbuffer[xt])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),ft(X.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(et){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),zt(s.TEXTURE_CUBE_MAP,R);for(let xt=0;xt<6;xt++)if(R.mipmaps&&R.mipmaps.length>0)for(let bt=0;bt<R.mipmaps.length;bt++)wt(X.__webglFramebuffer[xt][bt],D,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,bt);else wt(X.__webglFramebuffer[xt],D,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);p(R)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let xt=0,bt=ot.length;xt<bt;xt++){const te=ot[xt],lt=n.get(te);e.bindTexture(s.TEXTURE_2D,lt.__webglTexture),zt(s.TEXTURE_2D,te),wt(X.__webglFramebuffer,D,te,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,0),p(te)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let xt=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(xt=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(xt,nt.__webglTexture),zt(xt,R),R.mipmaps&&R.mipmaps.length>0)for(let bt=0;bt<R.mipmaps.length;bt++)wt(X.__webglFramebuffer[bt],D,R,s.COLOR_ATTACHMENT0,xt,bt);else wt(X.__webglFramebuffer,D,R,s.COLOR_ATTACHMENT0,xt,0);p(R)&&m(xt),e.unbindTexture()}D.depthBuffer&&Bt(D)}function Qt(D){const R=D.textures;for(let X=0,nt=R.length;X<nt;X++){const ot=R[X];if(p(ot)){const et=E(D),Ct=n.get(ot).__webglTexture;e.bindTexture(et,Ct),m(et),e.unbindTexture()}}}const Re=[],O=[];function Dn(D){if(D.samples>0){if(Kt(D)===!1){const R=D.textures,X=D.width,nt=D.height;let ot=s.COLOR_BUFFER_BIT;const et=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=n.get(D),xt=R.length>1;if(xt)for(let bt=0;bt<R.length;bt++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let bt=0;bt<R.length;bt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ot|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ot|=s.STENCIL_BUFFER_BIT)),xt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[bt]);const te=n.get(R[bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,X,nt,0,0,X,nt,ot,s.NEAREST),c===!0&&(Re.length=0,O.length=0,Re.push(s.COLOR_ATTACHMENT0+bt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Re.push(et),O.push(et),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xt)for(let bt=0;bt<R.length;bt++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[bt]);const te=n.get(R[bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,te,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const R=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function jt(D){return Math.min(i.maxSamples,D.samples)}function Kt(D){const R=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Pt(D){const R=r.render.frame;h.get(D)!==R&&(h.set(D,R),D.update())}function _e(D,R){const X=D.colorSpace,nt=D.format,ot=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==To&&X!==Hi&&(oe.getTransfer(X)===de?(nt!==jn||ot!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),R}function Rt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=Yt,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Dn,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Kt}function bv(s,t){function e(n,i=Hi){let o;const r=oe.getTransfer(i);if(n===Pi)return s.UNSIGNED_BYTE;if(n===kh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Gh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===gd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===pd)return s.BYTE;if(n===md)return s.SHORT;if(n===fr)return s.UNSIGNED_SHORT;if(n===Bh)return s.INT;if(n===Ts)return s.UNSIGNED_INT;if(n===hi)return s.FLOAT;if(n===Ai)return s.HALF_FLOAT;if(n===xd)return s.ALPHA;if(n===_d)return s.RGB;if(n===jn)return s.RGBA;if(n===Md)return s.LUMINANCE;if(n===vd)return s.LUMINANCE_ALPHA;if(n===ho)return s.DEPTH_COMPONENT;if(n===Eo)return s.DEPTH_STENCIL;if(n===Hh)return s.RED;if(n===Vh)return s.RED_INTEGER;if(n===yd)return s.RG;if(n===Wh)return s.RG_INTEGER;if(n===Xh)return s.RGBA_INTEGER;if(n===ga||n===xa||n===_a||n===Ma)if(r===de)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ga)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ga)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_a)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===El||n===Tl||n===Al||n===Cl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===El)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Al)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rl||n===Pl||n===Il)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Rl||n===Pl)return r===de?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Il)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ll||n===Dl||n===Ul||n===Nl||n===zl||n===Fl||n===Ol||n===Bl||n===kl||n===Gl||n===Hl||n===Vl||n===Wl||n===Xl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ll)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ul)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===va||n===Yl||n===ql)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===va)return r===de?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ql)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wd||n===Zl||n===$l||n===jl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===va)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Zl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$l)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Ev={type:"move"};class Vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ev)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Tv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Av=`
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

}`;class Cv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ke,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new yn({vertexShader:Tv,fragmentShader:Av,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new I(new ge(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rv extends Lo{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=new Cv,p=e.getContextAttributes();let m=null,E=null;const v=[],M=[],A=new dt;let T=null;const b=new Cn;b.viewport=new pe;const S=new Cn;S.viewport=new pe;const y=[b,S],x=new jm;let C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ct=v[tt];return ct===void 0&&(ct=new Vc,v[tt]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(tt){let ct=v[tt];return ct===void 0&&(ct=new Vc,v[tt]=ct),ct.getGripSpace()},this.getHand=function(tt){let ct=v[tt];return ct===void 0&&(ct=new Vc,v[tt]=ct),ct.getHandSpace()};function L(tt){const ct=M.indexOf(tt.inputSource);if(ct===-1)return;const wt=v[ct];wt!==void 0&&(wt.update(tt.inputSource,tt.frame,l||r),wt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function z(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",V);for(let tt=0;tt<v.length;tt++){const ct=M[tt];ct!==null&&(M[tt]=null,v[tt].disconnect(ct))}C=null,U=null,_.reset(),t.setRenderTarget(m),d=null,f=null,u=null,i=null,E=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){o=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(tt){l=tt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(tt){if(i=tt,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",z),i.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(A),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let wt=null,ft=null,Nt=null;p.depth&&(Nt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=p.stencil?Eo:ho,ft=p.stencil?bo:Ts);const Bt={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:o};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Bt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Kn(f.textureWidth,f.textureHeight,{format:jn,type:Pi,depthTexture:new Fd(f.textureWidth,f.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const wt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(i,e,wt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new Kn(d.framebufferWidth,d.framebufferHeight,{format:jn,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(tt){for(let ct=0;ct<tt.removed.length;ct++){const wt=tt.removed[ct],ft=M.indexOf(wt);ft>=0&&(M[ft]=null,v[ft].disconnect(wt))}for(let ct=0;ct<tt.added.length;ct++){const wt=tt.added[ct];let ft=M.indexOf(wt);if(ft===-1){for(let Bt=0;Bt<v.length;Bt++)if(Bt>=M.length){M.push(wt),ft=Bt;break}else if(M[Bt]===null){M[Bt]=wt,ft=Bt;break}if(ft===-1)break}const Nt=v[ft];Nt&&Nt.connect(wt)}}const G=new N,Z=new N;function W(tt,ct,wt){G.setFromMatrixPosition(ct.matrixWorld),Z.setFromMatrixPosition(wt.matrixWorld);const ft=G.distanceTo(Z),Nt=ct.projectionMatrix.elements,Bt=wt.projectionMatrix.elements,Yt=Nt[14]/(Nt[10]-1),Ee=Nt[14]/(Nt[10]+1),Qt=(Nt[9]+1)/Nt[5],Re=(Nt[9]-1)/Nt[5],O=(Nt[8]-1)/Nt[0],Dn=(Bt[8]+1)/Bt[0],jt=Yt*O,Kt=Yt*Dn,Pt=ft/(-O+Dn),_e=Pt*-O;if(ct.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(_e),tt.translateZ(Pt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Nt[10]===-1)tt.projectionMatrix.copy(ct.projectionMatrix),tt.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Rt=Yt+Pt,D=Ee+Pt,R=jt-_e,X=Kt+(ft-_e),nt=Qt*Ee/D*Rt,ot=Re*Ee/D*Rt;tt.projectionMatrix.makePerspective(R,X,nt,ot,Rt,D),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function rt(tt,ct){ct===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ct.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(i===null)return;let ct=tt.near,wt=tt.far;_.texture!==null&&(_.depthNear>0&&(ct=_.depthNear),_.depthFar>0&&(wt=_.depthFar)),x.near=S.near=b.near=ct,x.far=S.far=b.far=wt,(C!==x.near||U!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,U=x.far),b.layers.mask=tt.layers.mask|2,S.layers.mask=tt.layers.mask|4,x.layers.mask=b.layers.mask|S.layers.mask;const ft=tt.parent,Nt=x.cameras;rt(x,ft);for(let Bt=0;Bt<Nt.length;Bt++)rt(Nt[Bt],ft);Nt.length===2?W(x,b,S):x.projectionMatrix.copy(b.projectionMatrix),ut(tt,x,ft)};function ut(tt,ct,wt){wt===null?tt.matrix.copy(ct.matrixWorld):(tt.matrix.copy(wt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ct.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ct.projectionMatrix),tt.projectionMatrixInverse.copy(ct.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Kl*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(tt){c=tt,f!==null&&(f.fixedFoveation=tt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=tt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let yt=null;function zt(tt,ct){if(h=ct.getViewerPose(l||r),g=ct,h!==null){const wt=h.views;d!==null&&(t.setRenderTargetFramebuffer(E,d.framebuffer),t.setRenderTarget(E));let ft=!1;wt.length!==x.cameras.length&&(x.cameras.length=0,ft=!0);for(let Bt=0;Bt<wt.length;Bt++){const Yt=wt[Bt];let Ee=null;if(d!==null)Ee=d.getViewport(Yt);else{const Re=u.getViewSubImage(f,Yt);Ee=Re.viewport,Bt===0&&(t.setRenderTargetTextures(E,Re.colorTexture,f.ignoreDepthValues?void 0:Re.depthStencilTexture),t.setRenderTarget(E))}let Qt=y[Bt];Qt===void 0&&(Qt=new Cn,Qt.layers.enable(Bt),Qt.viewport=new pe,y[Bt]=Qt),Qt.matrix.fromArray(Yt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Yt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),Bt===0&&(x.matrix.copy(Qt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ft===!0&&x.cameras.push(Qt)}const Nt=i.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Bt=u.getDepthInformation(wt[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,i.renderState)}}for(let wt=0;wt<v.length;wt++){const ft=M[wt],Nt=v[wt];ft!==null&&Nt!==void 0&&Nt.update(ft,ct,l||r)}yt&&yt(tt,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),g=null}const $t=new Zd;$t.setAnimationLoop(zt),this.setAnimationLoop=function(tt){yt=tt},this.dispose=function(){}}}const is=new fi,Pv=new fe;function Iv(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Ld(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,E,v,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(p,m):m.isMeshToonMaterial?(o(p,m),u(p,m)):m.isMeshPhongMaterial?(o(p,m),h(p,m)):m.isMeshStandardMaterial?(o(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(o(p,m),g(p,m)):m.isMeshDepthMaterial?o(p,m):m.isMeshDistanceMaterial?(o(p,m),_(p,m)):m.isMeshNormalMaterial?o(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,E,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===xn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===xn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const E=t.get(m),v=E.envMap,M=E.envMapRotation;v&&(p.envMap.value=v,is.copy(M),is.x*=-1,is.y*=-1,is.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),p.envMapRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(is)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,E,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*E,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,E){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===xn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const E=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Lv(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,v){const M=v.program;n.uniformBlockBinding(E,M)}function l(E,v){let M=i[E.id];M===void 0&&(g(E),M=h(E),i[E.id]=M,E.addEventListener("dispose",p));const A=v.program;n.updateUBOMapping(E,A);const T=t.render.frame;o[E.id]!==T&&(f(E),o[E.id]=T)}function h(E){const v=u();E.__bindingPointIndex=v;const M=s.createBuffer(),A=E.__size,T=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,A,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function u(){for(let E=0;E<a;E++)if(r.indexOf(E)===-1)return r.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const v=i[E.id],M=E.uniforms,A=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,b=M.length;T<b;T++){const S=Array.isArray(M[T])?M[T]:[M[T]];for(let y=0,x=S.length;y<x;y++){const C=S[y];if(d(C,T,y,A)===!0){const U=C.__offset,L=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let V=0;V<L.length;V++){const G=L[V],Z=_(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,U+z,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,z),z+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(E,v,M,A){const T=E.value,b=v+"_"+M;if(A[b]===void 0)return typeof T=="number"||typeof T=="boolean"?A[b]=T:A[b]=T.clone(),!0;{const S=A[b];if(typeof T=="number"||typeof T=="boolean"){if(S!==T)return A[b]=T,!0}else if(S.equals(T)===!1)return S.copy(T),!0}return!1}function g(E){const v=E.uniforms;let M=0;const A=16;for(let b=0,S=v.length;b<S;b++){const y=Array.isArray(v[b])?v[b]:[v[b]];for(let x=0,C=y.length;x<C;x++){const U=y[x],L=Array.isArray(U.value)?U.value:[U.value];for(let z=0,V=L.length;z<V;z++){const G=L[z],Z=_(G),W=M%A,rt=W%Z.boundary,ut=W+rt;M+=rt,ut!==0&&A-ut<Z.storage&&(M+=A-ut),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=Z.storage}}}const T=M%A;return T>0&&(M+=A-T),E.__size=M,E.__cache={},this}function _(E){const v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function p(E){const v=E.target;v.removeEventListener("dispose",p);const M=r.indexOf(v.__bindingPointIndex);r.splice(M,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete o[v.id]}function m(){for(const E in i)s.deleteBuffer(i[E]);r=[],i={},o={}}return{bind:c,update:l,dispose:m}}class Dv{constructor(t={}){const{canvas:e=k0(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,m=null;const E=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=qi,this.toneMappingExposure=1;const M=this;let A=!1,T=0,b=0,S=null,y=-1,x=null;const C=new pe,U=new pe;let L=null;const z=new st(0);let V=0,G=e.width,Z=e.height,W=1,rt=null,ut=null;const yt=new pe(0,0,G,Z),zt=new pe(0,0,G,Z);let $t=!1;const tt=new Zh;let ct=!1,wt=!1;this.transmissionResolutionScale=1;const ft=new fe,Nt=new fe,Bt=new N,Yt=new pe,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function Re(){return S===null?W:1}let O=n;function Dn(P,k){return e.getContext(P,k)}try{const P={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oh}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),O===null){const k="webgl2";if(O=Dn(k,P),O===null)throw Dn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let jt,Kt,Pt,_e,Rt,D,R,X,nt,ot,et,Ct,xt,bt,te,lt,Et,Ut,Ft,Tt,Jt,Wt,xe,B;function mt(){jt=new H_(O),jt.init(),Wt=new bv(O,jt),Kt=new z_(O,jt,t,Wt),Pt=new wv(O,jt),Kt.reverseDepthBuffer&&f&&Pt.buffers.depth.setReversed(!0),_e=new X_(O),Rt=new lv,D=new Sv(O,jt,Pt,Rt,Kt,Wt,_e),R=new O_(M),X=new G_(M),nt=new Jm(O),xe=new U_(O,nt),ot=new V_(O,nt,_e,xe),et=new q_(O,ot,nt,_e),Ft=new Y_(O,Kt,D),lt=new F_(Rt),Ct=new cv(M,R,X,jt,Kt,xe,lt),xt=new Iv(M,Rt),bt=new uv,te=new xv(jt),Ut=new D_(M,R,X,Pt,et,d,c),Et=new vv(M,et,Kt),B=new Lv(O,_e,Kt,Pt),Tt=new N_(O,jt,_e),Jt=new W_(O,jt,_e),_e.programs=Ct.programs,M.capabilities=Kt,M.extensions=jt,M.properties=Rt,M.renderLists=bt,M.shadowMap=Et,M.state=Pt,M.info=_e}mt();const Q=new Rv(M,O);this.xr=Q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const P=jt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=jt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(P){P!==void 0&&(W=P,this.setSize(G,Z,!1))},this.getSize=function(P){return P.set(G,Z)},this.setSize=function(P,k,Y=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=P,Z=k,e.width=Math.floor(P*W),e.height=Math.floor(k*W),Y===!0&&(e.style.width=P+"px",e.style.height=k+"px"),this.setViewport(0,0,P,k)},this.getDrawingBufferSize=function(P){return P.set(G*W,Z*W).floor()},this.setDrawingBufferSize=function(P,k,Y){G=P,Z=k,W=Y,e.width=Math.floor(P*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,P,k)},this.getCurrentViewport=function(P){return P.copy(C)},this.getViewport=function(P){return P.copy(yt)},this.setViewport=function(P,k,Y,$){P.isVector4?yt.set(P.x,P.y,P.z,P.w):yt.set(P,k,Y,$),Pt.viewport(C.copy(yt).multiplyScalar(W).round())},this.getScissor=function(P){return P.copy(zt)},this.setScissor=function(P,k,Y,$){P.isVector4?zt.set(P.x,P.y,P.z,P.w):zt.set(P,k,Y,$),Pt.scissor(U.copy(zt).multiplyScalar(W).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(P){Pt.setScissorTest($t=P)},this.setOpaqueSort=function(P){rt=P},this.setTransparentSort=function(P){ut=P},this.getClearColor=function(P){return P.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(P=!0,k=!0,Y=!0){let $=0;if(P){let H=!1;if(S!==null){const at=S.texture.format;H=at===Xh||at===Wh||at===Vh}if(H){const at=S.texture.type,gt=at===Pi||at===Ts||at===fr||at===bo||at===kh||at===Gh,St=Ut.getClearColor(),At=Ut.getClearAlpha(),Ot=St.r,kt=St.g,It=St.b;gt?(g[0]=Ot,g[1]=kt,g[2]=It,g[3]=At,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Ot,_[1]=kt,_[2]=It,_[3]=At,O.clearBufferiv(O.COLOR,0,_))}else $|=O.COLOR_BUFFER_BIT}k&&($|=O.DEPTH_BUFFER_BIT),Y&&($|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Ut.dispose(),bt.dispose(),te.dispose(),Rt.dispose(),R.dispose(),X.dispose(),et.dispose(),xe.dispose(),B.dispose(),Ct.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",gu),Q.removeEventListener("sessionend",xu),ji.stop()};function it(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=_e.autoReset,k=Et.enabled,Y=Et.autoUpdate,$=Et.needsUpdate,H=Et.type;mt(),_e.autoReset=P,Et.enabled=k,Et.autoUpdate=Y,Et.needsUpdate=$,Et.type=H}function _t(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ht(P){const k=P.target;k.removeEventListener("dispose",Ht),Ae(k)}function Ae(P){Xe(P),Rt.remove(P)}function Xe(P){const k=Rt.get(P).programs;k!==void 0&&(k.forEach(function(Y){Ct.releaseProgram(Y)}),P.isShaderMaterial&&Ct.releaseShaderCache(P))}this.renderBufferDirect=function(P,k,Y,$,H,at){k===null&&(k=Ee);const gt=H.isMesh&&H.matrixWorld.determinant()<0,St=Zp(P,k,Y,$,H);Pt.setMaterial($,gt);let At=Y.index,Ot=1;if($.wireframe===!0){if(At=ot.getWireframeAttribute(Y),At===void 0)return;Ot=2}const kt=Y.drawRange,It=Y.attributes.position;let ee=kt.start*Ot,ce=(kt.start+kt.count)*Ot;at!==null&&(ee=Math.max(ee,at.start*Ot),ce=Math.min(ce,(at.start+at.count)*Ot)),At!==null?(ee=Math.max(ee,0),ce=Math.min(ce,At.count)):It!=null&&(ee=Math.max(ee,0),ce=Math.min(ce,It.count));const Ie=ce-ee;if(Ie<0||Ie===1/0)return;xe.setup(H,$,St,Y,At);let Ce,se=Tt;if(At!==null&&(Ce=nt.get(At),se=Jt,se.setIndex(Ce)),H.isMesh)$.wireframe===!0?(Pt.setLineWidth($.wireframeLinewidth*Re()),se.setMode(O.LINES)):se.setMode(O.TRIANGLES);else if(H.isLine){let Dt=$.linewidth;Dt===void 0&&(Dt=1),Pt.setLineWidth(Dt*Re()),H.isLineSegments?se.setMode(O.LINES):H.isLineLoop?se.setMode(O.LINE_LOOP):se.setMode(O.LINE_STRIP)}else H.isPoints?se.setMode(O.POINTS):H.isSprite&&se.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)se.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))se.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Dt=H._multiDrawStarts,Ge=H._multiDrawCounts,le=H._multiDrawCount,Xn=At?nt.get(At).bytesPerElement:1,Ls=Rt.get($).currentProgram.getUniforms();for(let bn=0;bn<le;bn++)Ls.setValue(O,"_gl_DrawID",bn),se.render(Dt[bn]/Xn,Ge[bn])}else if(H.isInstancedMesh)se.renderInstances(ee,Ie,H.count);else if(Y.isInstancedBufferGeometry){const Dt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ge=Math.min(Y.instanceCount,Dt);se.renderInstances(ee,Ie,Ge)}else se.render(ee,Ie)};function ue(P,k,Y){P.transparent===!0&&P.side===Lt&&P.forceSinglePass===!1?(P.side=xn,P.needsUpdate=!0,Rr(P,k,Y),P.side=Zi,P.needsUpdate=!0,Rr(P,k,Y),P.side=Lt):Rr(P,k,Y)}this.compile=function(P,k,Y=null){Y===null&&(Y=P),m=te.get(Y),m.init(k),v.push(m),Y.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),P!==Y&&P.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const $=new Set;return P.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const at=H.material;if(at)if(Array.isArray(at))for(let gt=0;gt<at.length;gt++){const St=at[gt];ue(St,Y,H),$.add(St)}else ue(at,Y,H),$.add(at)}),v.pop(),m=null,$},this.compileAsync=function(P,k,Y=null){const $=this.compile(P,k,Y);return new Promise(H=>{function at(){if($.forEach(function(gt){Rt.get(gt).currentProgram.isReady()&&$.delete(gt)}),$.size===0){H(P);return}setTimeout(at,10)}jt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Wn=null;function mi(P){Wn&&Wn(P)}function gu(){ji.stop()}function xu(){ji.start()}const ji=new Zd;ji.setAnimationLoop(mi),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(P){Wn=P,Q.setAnimationLoop(P),P===null?ji.stop():ji.start()},Q.addEventListener("sessionstart",gu),Q.addEventListener("sessionend",xu),this.render=function(P,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(k),k=Q.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,k,S),m=te.get(P,v.length),m.init(k),v.push(m),Nt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),tt.setFromProjectionMatrix(Nt),wt=this.localClippingEnabled,ct=lt.init(this.clippingPlanes,wt),p=bt.get(P,E.length),p.init(),E.push(p),Q.enabled===!0&&Q.isPresenting===!0){const at=M.xr.getDepthSensingMesh();at!==null&&rc(at,k,-1/0,M.sortObjects)}rc(P,k,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(rt,ut),Qt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Qt&&Ut.addToRenderList(p,P),this.info.render.frame++,ct===!0&&lt.beginShadows();const Y=m.state.shadowsArray;Et.render(Y,P,k),ct===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=p.opaque,H=p.transmissive;if(m.setupLights(),k.isArrayCamera){const at=k.cameras;if(H.length>0)for(let gt=0,St=at.length;gt<St;gt++){const At=at[gt];Mu($,H,P,At)}Qt&&Ut.render(P);for(let gt=0,St=at.length;gt<St;gt++){const At=at[gt];_u(p,P,At,At.viewport)}}else H.length>0&&Mu($,H,P,k),Qt&&Ut.render(P),_u(p,P,k);S!==null&&b===0&&(D.updateMultisampleRenderTarget(S),D.updateRenderTargetMipmap(S)),P.isScene===!0&&P.onAfterRender(M,P,k),xe.resetDefaultState(),y=-1,x=null,v.pop(),v.length>0?(m=v[v.length-1],ct===!0&&lt.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function rc(P,k,Y,$){if(P.visible===!1)return;if(P.layers.test(k.layers)){if(P.isGroup)Y=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(k);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||tt.intersectsSprite(P)){$&&Yt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Nt);const gt=et.update(P),St=P.material;St.visible&&p.push(P,gt,St,Y,Yt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||tt.intersectsObject(P))){const gt=et.update(P),St=P.material;if($&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Yt.copy(P.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Yt.copy(gt.boundingSphere.center)),Yt.applyMatrix4(P.matrixWorld).applyMatrix4(Nt)),Array.isArray(St)){const At=gt.groups;for(let Ot=0,kt=At.length;Ot<kt;Ot++){const It=At[Ot],ee=St[It.materialIndex];ee&&ee.visible&&p.push(P,gt,ee,Y,Yt.z,It)}}else St.visible&&p.push(P,gt,St,Y,Yt.z,null)}}const at=P.children;for(let gt=0,St=at.length;gt<St;gt++)rc(at[gt],k,Y,$)}function _u(P,k,Y,$){const H=P.opaque,at=P.transmissive,gt=P.transparent;m.setupLightsView(Y),ct===!0&&lt.setGlobalState(M.clippingPlanes,Y),$&&Pt.viewport(C.copy($)),H.length>0&&Cr(H,k,Y),at.length>0&&Cr(at,k,Y),gt.length>0&&Cr(gt,k,Y),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Mu(P,k,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new Kn(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?Ai:Pi,minFilter:xs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const at=m.state.transmissionRenderTarget[$.id],gt=$.viewport||C;at.setSize(gt.z*M.transmissionResolutionScale,gt.w*M.transmissionResolutionScale);const St=M.getRenderTarget();M.setRenderTarget(at),M.getClearColor(z),V=M.getClearAlpha(),V<1&&M.setClearColor(16777215,.5),M.clear(),Qt&&Ut.render(Y);const At=M.toneMapping;M.toneMapping=qi;const Ot=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),ct===!0&&lt.setGlobalState(M.clippingPlanes,$),Cr(P,Y,$),D.updateMultisampleRenderTarget(at),D.updateRenderTargetMipmap(at),jt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let It=0,ee=k.length;It<ee;It++){const ce=k[It],Ie=ce.object,Ce=ce.geometry,se=ce.material,Dt=ce.group;if(se.side===Lt&&Ie.layers.test($.layers)){const Ge=se.side;se.side=xn,se.needsUpdate=!0,vu(Ie,Y,$,Ce,se,Dt),se.side=Ge,se.needsUpdate=!0,kt=!0}}kt===!0&&(D.updateMultisampleRenderTarget(at),D.updateRenderTargetMipmap(at))}M.setRenderTarget(St),M.setClearColor(z,V),Ot!==void 0&&($.viewport=Ot),M.toneMapping=At}function Cr(P,k,Y){const $=k.isScene===!0?k.overrideMaterial:null;for(let H=0,at=P.length;H<at;H++){const gt=P[H],St=gt.object,At=gt.geometry,Ot=$===null?gt.material:$,kt=gt.group;St.layers.test(Y.layers)&&vu(St,k,Y,At,Ot,kt)}}function vu(P,k,Y,$,H,at){P.onBeforeRender(M,k,Y,$,H,at),P.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),H.onBeforeRender(M,k,Y,$,P,at),H.transparent===!0&&H.side===Lt&&H.forceSinglePass===!1?(H.side=xn,H.needsUpdate=!0,M.renderBufferDirect(Y,k,$,H,P,at),H.side=Zi,H.needsUpdate=!0,M.renderBufferDirect(Y,k,$,H,P,at),H.side=Lt):M.renderBufferDirect(Y,k,$,H,P,at),P.onAfterRender(M,k,Y,$,H,at)}function Rr(P,k,Y){k.isScene!==!0&&(k=Ee);const $=Rt.get(P),H=m.state.lights,at=m.state.shadowsArray,gt=H.state.version,St=Ct.getParameters(P,H.state,at,k,Y),At=Ct.getProgramCacheKey(St);let Ot=$.programs;$.environment=P.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(P.isMeshStandardMaterial?X:R).get(P.envMap||$.environment),$.envMapRotation=$.environment!==null&&P.envMap===null?k.environmentRotation:P.envMapRotation,Ot===void 0&&(P.addEventListener("dispose",Ht),Ot=new Map,$.programs=Ot);let kt=Ot.get(At);if(kt!==void 0){if($.currentProgram===kt&&$.lightsStateVersion===gt)return wu(P,St),kt}else St.uniforms=Ct.getUniforms(P),P.onBeforeCompile(St,M),kt=Ct.acquireProgram(St,At),Ot.set(At,kt),$.uniforms=St.uniforms;const It=$.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(It.clippingPlanes=lt.uniform),wu(P,St),$.needsLights=jp(P),$.lightsStateVersion=gt,$.needsLights&&(It.ambientLightColor.value=H.state.ambient,It.lightProbe.value=H.state.probe,It.directionalLights.value=H.state.directional,It.directionalLightShadows.value=H.state.directionalShadow,It.spotLights.value=H.state.spot,It.spotLightShadows.value=H.state.spotShadow,It.rectAreaLights.value=H.state.rectArea,It.ltc_1.value=H.state.rectAreaLTC1,It.ltc_2.value=H.state.rectAreaLTC2,It.pointLights.value=H.state.point,It.pointLightShadows.value=H.state.pointShadow,It.hemisphereLights.value=H.state.hemi,It.directionalShadowMap.value=H.state.directionalShadowMap,It.directionalShadowMatrix.value=H.state.directionalShadowMatrix,It.spotShadowMap.value=H.state.spotShadowMap,It.spotLightMatrix.value=H.state.spotLightMatrix,It.spotLightMap.value=H.state.spotLightMap,It.pointShadowMap.value=H.state.pointShadowMap,It.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=kt,$.uniformsList=null,kt}function yu(P){if(P.uniformsList===null){const k=P.currentProgram.getUniforms();P.uniformsList=ya.seqWithValue(k.seq,P.uniforms)}return P.uniformsList}function wu(P,k){const Y=Rt.get(P);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Zp(P,k,Y,$,H){k.isScene!==!0&&(k=Ee),D.resetTextureUnits();const at=k.fog,gt=$.isMeshStandardMaterial?k.environment:null,St=S===null?M.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:To,At=($.isMeshStandardMaterial?X:R).get($.envMap||gt),Ot=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,kt=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),It=!!Y.morphAttributes.position,ee=!!Y.morphAttributes.normal,ce=!!Y.morphAttributes.color;let Ie=qi;$.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Ie=M.toneMapping);const Ce=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,se=Ce!==void 0?Ce.length:0,Dt=Rt.get($),Ge=m.state.lights;if(ct===!0&&(wt===!0||P!==x)){const Qe=P===x&&$.id===y;lt.setState($,P,Qe)}let le=!1;$.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Ge.state.version||Dt.outputColorSpace!==St||H.isBatchedMesh&&Dt.batching===!1||!H.isBatchedMesh&&Dt.batching===!0||H.isBatchedMesh&&Dt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Dt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Dt.instancing===!1||!H.isInstancedMesh&&Dt.instancing===!0||H.isSkinnedMesh&&Dt.skinning===!1||!H.isSkinnedMesh&&Dt.skinning===!0||H.isInstancedMesh&&Dt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Dt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Dt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Dt.instancingMorph===!1&&H.morphTexture!==null||Dt.envMap!==At||$.fog===!0&&Dt.fog!==at||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==lt.numPlanes||Dt.numIntersection!==lt.numIntersection)||Dt.vertexAlphas!==Ot||Dt.vertexTangents!==kt||Dt.morphTargets!==It||Dt.morphNormals!==ee||Dt.morphColors!==ce||Dt.toneMapping!==Ie||Dt.morphTargetsCount!==se)&&(le=!0):(le=!0,Dt.__version=$.version);let Xn=Dt.currentProgram;le===!0&&(Xn=Rr($,k,H));let Ls=!1,bn=!1,Fo=!1;const ye=Xn.getUniforms(),Un=Dt.uniforms;if(Pt.useProgram(Xn.program)&&(Ls=!0,bn=!0,Fo=!0),$.id!==y&&(y=$.id,bn=!0),Ls||x!==P){Pt.buffers.depth.getReversed()?(ft.copy(P.projectionMatrix),H0(ft),V0(ft),ye.setValue(O,"projectionMatrix",ft)):ye.setValue(O,"projectionMatrix",P.projectionMatrix),ye.setValue(O,"viewMatrix",P.matrixWorldInverse);const _n=ye.map.cameraPosition;_n!==void 0&&_n.setValue(O,Bt.setFromMatrixPosition(P.matrixWorld)),Kt.logarithmicDepthBuffer&&ye.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ye.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),x!==P&&(x=P,bn=!0,Fo=!0)}if(H.isSkinnedMesh){ye.setOptional(O,H,"bindMatrix"),ye.setOptional(O,H,"bindMatrixInverse");const Qe=H.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),ye.setValue(O,"boneTexture",Qe.boneTexture,D))}H.isBatchedMesh&&(ye.setOptional(O,H,"batchingTexture"),ye.setValue(O,"batchingTexture",H._matricesTexture,D),ye.setOptional(O,H,"batchingIdTexture"),ye.setValue(O,"batchingIdTexture",H._indirectTexture,D),ye.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&ye.setValue(O,"batchingColorTexture",H._colorsTexture,D));const Nn=Y.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&Ft.update(H,Y,Xn),(bn||Dt.receiveShadow!==H.receiveShadow)&&(Dt.receiveShadow=H.receiveShadow,ye.setValue(O,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Un.envMap.value=At,Un.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(Un.envMapIntensity.value=k.environmentIntensity),bn&&(ye.setValue(O,"toneMappingExposure",M.toneMappingExposure),Dt.needsLights&&$p(Un,Fo),at&&$.fog===!0&&xt.refreshFogUniforms(Un,at),xt.refreshMaterialUniforms(Un,$,W,Z,m.state.transmissionRenderTarget[P.id]),ya.upload(O,yu(Dt),Un,D)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ya.upload(O,yu(Dt),Un,D),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ye.setValue(O,"center",H.center),ye.setValue(O,"modelViewMatrix",H.modelViewMatrix),ye.setValue(O,"normalMatrix",H.normalMatrix),ye.setValue(O,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Qe=$.uniformsGroups;for(let _n=0,ac=Qe.length;_n<ac;_n++){const Ki=Qe[_n];B.update(Ki,Xn),B.bind(Ki,Xn)}}return Xn}function $p(P,k){P.ambientLightColor.needsUpdate=k,P.lightProbe.needsUpdate=k,P.directionalLights.needsUpdate=k,P.directionalLightShadows.needsUpdate=k,P.pointLights.needsUpdate=k,P.pointLightShadows.needsUpdate=k,P.spotLights.needsUpdate=k,P.spotLightShadows.needsUpdate=k,P.rectAreaLights.needsUpdate=k,P.hemisphereLights.needsUpdate=k}function jp(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(P,k,Y){Rt.get(P.texture).__webglTexture=k,Rt.get(P.depthTexture).__webglTexture=Y;const $=Rt.get(P);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,k){const Y=Rt.get(P);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};const Kp=O.createFramebuffer();this.setRenderTarget=function(P,k=0,Y=0){S=P,T=k,b=Y;let $=!0,H=null,at=!1,gt=!1;if(P){const At=Rt.get(P);if(At.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(O.FRAMEBUFFER,null),$=!1;else if(At.__webglFramebuffer===void 0)D.setupRenderTarget(P);else if(At.__hasExternalTextures)D.rebindTextures(P,Rt.get(P.texture).__webglTexture,Rt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const It=P.depthTexture;if(At.__boundDepthTexture!==It){if(It!==null&&Rt.has(It)&&(P.width!==It.image.width||P.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(P)}}const Ot=P.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(gt=!0);const kt=Rt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(kt[k])?H=kt[k][Y]:H=kt[k],at=!0):P.samples>0&&D.useMultisampledRTT(P)===!1?H=Rt.get(P).__webglMultisampledFramebuffer:Array.isArray(kt)?H=kt[Y]:H=kt,C.copy(P.viewport),U.copy(P.scissor),L=P.scissorTest}else C.copy(yt).multiplyScalar(W).floor(),U.copy(zt).multiplyScalar(W).floor(),L=$t;if(Y!==0&&(H=Kp),Pt.bindFramebuffer(O.FRAMEBUFFER,H)&&$&&Pt.drawBuffers(P,H),Pt.viewport(C),Pt.scissor(U),Pt.setScissorTest(L),at){const At=Rt.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,At.__webglTexture,Y)}else if(gt){const At=Rt.get(P.texture),Ot=k;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,At.__webglTexture,Y,Ot)}else if(P!==null&&Y!==0){const At=Rt.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,At.__webglTexture,Y)}y=-1},this.readRenderTargetPixels=function(P,k,Y,$,H,at,gt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Rt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&gt!==void 0&&(St=St[gt]),St){Pt.bindFramebuffer(O.FRAMEBUFFER,St);try{const At=P.texture,Ot=At.format,kt=At.type;if(!Kt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=P.width-$&&Y>=0&&Y<=P.height-H&&O.readPixels(k,Y,$,H,Wt.convert(Ot),Wt.convert(kt),at)}finally{const At=S!==null?Rt.get(S).__webglFramebuffer:null;Pt.bindFramebuffer(O.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(P,k,Y,$,H,at,gt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Rt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&gt!==void 0&&(St=St[gt]),St){const At=P.texture,Ot=At.format,kt=At.type;if(!Kt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=P.width-$&&Y>=0&&Y<=P.height-H){Pt.bindFramebuffer(O.FRAMEBUFFER,St);const It=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,It),O.bufferData(O.PIXEL_PACK_BUFFER,at.byteLength,O.STREAM_READ),O.readPixels(k,Y,$,H,Wt.convert(Ot),Wt.convert(kt),0);const ee=S!==null?Rt.get(S).__webglFramebuffer:null;Pt.bindFramebuffer(O.FRAMEBUFFER,ee);const ce=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await G0(O,ce,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,It),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,at),O.deleteBuffer(It),O.deleteSync(ce),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,k=null,Y=0){P.isTexture!==!0&&(Qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,P=arguments[1]);const $=Math.pow(2,-Y),H=Math.floor(P.image.width*$),at=Math.floor(P.image.height*$),gt=k!==null?k.x:0,St=k!==null?k.y:0;D.setTexture2D(P,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,gt,St,H,at),Pt.unbindTexture()};const Jp=O.createFramebuffer(),Qp=O.createFramebuffer();this.copyTextureToTexture=function(P,k,Y=null,$=null,H=0,at=null){P.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,P=arguments[1],k=arguments[2],at=arguments[3]||0,Y=null),at===null&&(H!==0?(Qs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=H,H=0):at=0);let gt,St,At,Ot,kt,It,ee,ce,Ie;const Ce=P.isCompressedTexture?P.mipmaps[at]:P.image;if(Y!==null)gt=Y.max.x-Y.min.x,St=Y.max.y-Y.min.y,At=Y.isBox3?Y.max.z-Y.min.z:1,Ot=Y.min.x,kt=Y.min.y,It=Y.isBox3?Y.min.z:0;else{const Nn=Math.pow(2,-H);gt=Math.floor(Ce.width*Nn),St=Math.floor(Ce.height*Nn),P.isDataArrayTexture?At=Ce.depth:P.isData3DTexture?At=Math.floor(Ce.depth*Nn):At=1,Ot=0,kt=0,It=0}$!==null?(ee=$.x,ce=$.y,Ie=$.z):(ee=0,ce=0,Ie=0);const se=Wt.convert(k.format),Dt=Wt.convert(k.type);let Ge;k.isData3DTexture?(D.setTexture3D(k,0),Ge=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(D.setTexture2DArray(k,0),Ge=O.TEXTURE_2D_ARRAY):(D.setTexture2D(k,0),Ge=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const le=O.getParameter(O.UNPACK_ROW_LENGTH),Xn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ls=O.getParameter(O.UNPACK_SKIP_PIXELS),bn=O.getParameter(O.UNPACK_SKIP_ROWS),Fo=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ce.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ce.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ot),O.pixelStorei(O.UNPACK_SKIP_ROWS,kt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,It);const ye=P.isDataArrayTexture||P.isData3DTexture,Un=k.isDataArrayTexture||k.isData3DTexture;if(P.isDepthTexture){const Nn=Rt.get(P),Qe=Rt.get(k),_n=Rt.get(Nn.__renderTarget),ac=Rt.get(Qe.__renderTarget);Pt.bindFramebuffer(O.READ_FRAMEBUFFER,_n.__webglFramebuffer),Pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,ac.__webglFramebuffer);for(let Ki=0;Ki<At;Ki++)ye&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.get(P).__webglTexture,H,It+Ki),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.get(k).__webglTexture,at,Ie+Ki)),O.blitFramebuffer(Ot,kt,gt,St,ee,ce,gt,St,O.DEPTH_BUFFER_BIT,O.NEAREST);Pt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||P.isRenderTargetTexture||Rt.has(P)){const Nn=Rt.get(P),Qe=Rt.get(k);Pt.bindFramebuffer(O.READ_FRAMEBUFFER,Jp),Pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Qp);for(let _n=0;_n<At;_n++)ye?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Nn.__webglTexture,H,It+_n):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Nn.__webglTexture,H),Un?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Qe.__webglTexture,at,Ie+_n):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Qe.__webglTexture,at),H!==0?O.blitFramebuffer(Ot,kt,gt,St,ee,ce,gt,St,O.COLOR_BUFFER_BIT,O.NEAREST):Un?O.copyTexSubImage3D(Ge,at,ee,ce,Ie+_n,Ot,kt,gt,St):O.copyTexSubImage2D(Ge,at,ee,ce,Ot,kt,gt,St);Pt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Un?P.isDataTexture||P.isData3DTexture?O.texSubImage3D(Ge,at,ee,ce,Ie,gt,St,At,se,Dt,Ce.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(Ge,at,ee,ce,Ie,gt,St,At,se,Ce.data):O.texSubImage3D(Ge,at,ee,ce,Ie,gt,St,At,se,Dt,Ce):P.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,at,ee,ce,gt,St,se,Dt,Ce.data):P.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,at,ee,ce,Ce.width,Ce.height,se,Ce.data):O.texSubImage2D(O.TEXTURE_2D,at,ee,ce,gt,St,se,Dt,Ce);O.pixelStorei(O.UNPACK_ROW_LENGTH,le),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Xn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ls),O.pixelStorei(O.UNPACK_SKIP_ROWS,bn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Fo),at===0&&k.generateMipmaps&&O.generateMipmap(Ge),Pt.unbindTexture()},this.copyTextureToTexture3D=function(P,k,Y=null,$=null,H=0){return P.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,$=arguments[1]||null,P=arguments[2],k=arguments[3],H=arguments[4]||0),Qs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,k,Y,$,H)},this.initRenderTarget=function(P){Rt.get(P).__webglFramebuffer===void 0&&D.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?D.setTextureCube(P,0):P.isData3DTexture?D.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?D.setTexture2DArray(P,0):D.setTexture2D(P,0),Pt.unbindTexture()},this.resetState=function(){T=0,b=0,S=null,Pt.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}const Uv=15,Nv=6,zv=1.8,Oa=8,Uf=.85,Nf=.98,Ba=.003,ae=90,ic=1.7,Fv=35,Ov=25,Bv=10,kv=6,Gv=8,Hv=4,Vv=5,Wv=120,Xv=18,Yv=15,qv=15,Zv=30,Qd=3,$v=12,jv=5,Kv=15,Jv=40,Qv=6,ty=6,ey=6,ny=5,ws=280,ih=2.5,iy=6,zf=1.5,to=5,Ff=2.5,Zs=12,Me=30,sy=5,oy=8,ry=2.2,F={fog:396308,ground:1720360,leaf:1722400,leafGlow:4521898,mushCap:8926190,mushGlow:13400063,mushStem:2756928,crystal:3407837,crystalCore:8978414,firefly:15662950,fireflyB:6750173,spore:12320665,ambient:2241365,moon:12307694,jellyBell:7833855,jellyGlow:11193599,jellyTent:6715340,puffBody:16768460,puffGlow:16755336,puffEye:2236962,puffCheek:16746649,deerBody:11202303,deerGlow:8969727,deerAntler:13434862,deerEye:1127236,mothWing:11206553,mothGlow:13434794,mothBody:5596723,mothSpot:16777215,grassTip:3385941,grassPurple:[1706530,2363962,4857960,11158766,13400063,16746717,2757952,6697898,11158783],grassBlue:[660514,858677,2114917,4500206,6741503,8974079,1387077,3368618,4500223],grassTeal:[662042,1059362,2121808,4517563,6750173,11206536,1720376,3385992,4521915],fern:1725744,fernGlow:3394662,flower:16742348,flowerGlow:16751069,flowerStem:1721376,reed:2774325,reedTip:4504422,orbGold:16763955,orbGlow:16772778,orbInner:16775389,laserPink:16737962,laserGlow:16746700,obeliskBlack:657938,obeliskPink:16729258,moatBlue:3377356,rainbow:[16724787,16746547,16772659,3407718,3377407,8926207],wispCore:11202303,wispGlow:14544639,wispTrail:8965375,dandStem:4482611,dandHead:16777198,dandSeed:16775389,dandSeedGlow:16777215,fairyMush:13404415,fairyGlow:14527231,fairyRing:11167470,bubbleIris:11197951,bubbleShine:16777215,bubblePop:13434862,starMote:16772829,pondWater:2254506,pondGlow:3377356,lilyPad:2263108,lilyFlower:16746700,lilyGlow:16755421,echoBloom:11206604,rockBase:2763314,rockMoss:1721378,rockLight:3816005,skyDeep:198160,thornOrb:16755268,thornOrbGlow:16764006,thornPetal:6689075,thornSpike:2759184,thornStem:1717024,helixStem:1714240,helixPod:6697983,helixPodGlow:8934911,helixRing:4465322,helixNode:5588172,snapBody:2271846,snapBodyGlow:4521864,snapTip:6750122,snapTipGlow:8978380,snapFrond:1730116},Je=new Dv({antialias:!0,powerPreference:"default"});Je.setSize(window.innerWidth,window.innerHeight);Je.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Je.shadowMap.enabled=!0;Je.shadowMap.type=hd;Je.toneMapping=fd;Je.toneMappingExposure=2.8;Je.outputColorSpace=gn;document.body.appendChild(Je.domElement);const cn=new Cn(65,window.innerWidth/window.innerHeight,.1,300),tp=new qd,ht=new um;ht.background=new st(F.skyDeep);ht.fog=new qh(F.fog,.01);window.addEventListener("resize",()=>{cn.aspect=window.innerWidth/window.innerHeight,cn.updateProjectionMatrix(),Je.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("visibilitychange",()=>{document.hidden||tp.getDelta()});const ep={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Er{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ay=new su(-1,1,1,-1,0,1);class cy extends be{constructor(){super(),this.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Gt([0,2,0,0,2,0],2))}}const ly=new cy;class np{constructor(t){this._mesh=new I(ly,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ay)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class hy extends Er{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof yn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Da.clone(t.uniforms),this.material=new yn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new np(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Of extends Er{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),o.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(i.EQUAL,1,4294967295),o.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),o.buffers.stencil.setLocked(!0)}}class uy extends Er{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class fy{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new dt);this._width=n.width,this._height=n.height,e=new Kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ai}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hy(ep),this.copyPass.material.blending=Ti,this.clock=new qd}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,o=this.passes.length;i<o;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Of!==void 0&&(r instanceof Of?n=!0:r instanceof uy&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new dt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class dy extends Er{constructor(t,e,n=null,i=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new st}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=i}}const py={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new st(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ro extends Er{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new dt(t.x,t.y):new dt(256,256),this.clearColor=new st(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Kn(o,r,{type:Ai}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Kn(o,r,{type:Ai});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Kn(o,r,{type:Ai});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),o=Math.round(o/2),r=Math.round(r/2)}const a=py;this.highPassUniforms=Da.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new dt(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=ep;this.copyUniforms=Da.clone(h.uniforms),this.blendMaterial=new yn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:he,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new st,this.oldClearAlpha=1,this.basic=new q,this.fsQuad=new np(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,i),this.renderTargetsVertical[o].setSize(n,i),this.separableBlurMaterials[o].uniforms.invSize.value=new dt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Ro.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Ro.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new yn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new dt(.5,.5)},direction:{value:new dt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new yn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ro.BlurDirectionX=new dt(1,0);Ro.BlurDirectionY=new dt(0,1);let Ss=null,ru=!0;try{const s=new dy(ht,cn),t=new Ro(new dt(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2)),.6,.4,.85);Ss=new fy(Je),Ss.addPass(s),Ss.addPass(t)}catch(s){console.warn("Bloom unavailable, falling back to direct render:",s.message),ru=!1}window.addEventListener("resize",()=>{ru&&Ss&&Ss.setSize(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2))});function Bf(){ru&&Ss?Ss.render():Je.render(ht,cn)}const au=new qm(F.ambient,F.ground,.65);ht.add(au);const Vn=new ec(F.moon,.85);Vn.position.set(30,60,-20);Vn.castShadow=!0;Vn.shadow.camera.left=-90;Vn.shadow.camera.right=90;Vn.shadow.camera.top=90;Vn.shadow.camera.bottom=-90;Vn.shadow.camera.near=1;Vn.shadow.camera.far=250;Vn.shadow.mapSize.set(1024,1024);Vn.shadow.bias=-.001;ht.add(Vn);const cu=new ec(2241365,.3);cu.position.set(-40,45,25);ht.add(cu);const ip=new ec(3359829,.4);ip.position.set(-25,15,30);ht.add(ip);const sp=new Uo(3368516,.7,100);sp.position.set(0,.5,0);ht.add(sp);const op=new ec(4478327,.4);op.position.set(-10,25,40);ht.add(op);const lu=new Uo(6719624,.6,20);ht.add(lu);const cs=[];function my(){for(let s=0;s<sy;s++){const t=new Uo(F.crystal,0,16);ht.add(t),cs.push(t)}}const Qo=new Uo(F.orbGold,0,15);ht.add(Qo);const Pe={};let xr=0,bs=0,sc=!1,rp=!1,hu=0,uu=0,fu=!1,oc=!1,zo=!1,ka=null,Cs=null,sh=0,oh=0,rh=null;function gy(s){rh=s}function xy(s){rp=s}function _y(s){oc=s}function Tr(){!rp&&rh&&rh()}window.addEventListener("keydown",s=>{Pe[s.code]=!0,"Space ShiftLeft ShiftRight KeyW KeyA KeyS KeyD".split(" ").indexOf(s.code)>=0&&s.preventDefault(),Tr()});window.addEventListener("keyup",s=>{Pe[s.code]=!1});window.addEventListener("blur",()=>{for(const s in Pe)Pe[s]=!1;sc=!1});Je.domElement.addEventListener("mousedown",()=>{sc=!0,Tr()});window.addEventListener("mouseup",()=>{sc=!1});window.addEventListener("mousemove",s=>{sc&&(xr-=s.movementX*Ba,bs-=s.movementY*Ba,bs=Math.max(-1,Math.min(1,bs)))});const My="ontouchstart"in window||navigator.maxTouchPoints>0,Ar=document.getElementById("joy-zone"),Ga=document.getElementById("joy-knob"),du=document.getElementById("btn-jump");My&&(Ar.style.display="block",du.style.display="block",document.getElementById("controls").textContent="Stick: Move · Drag right: Look · JUMP");function ap(s,t){const e=Ar.getBoundingClientRect();let n=s-(e.left+e.width/2),i=t-(e.top+e.height/2);const o=Math.sqrt(n*n+i*i),r=52;o>r&&(n=n/o*r,i=i/o*r),hu=n/r,uu=i/r,Ga.style.left=40+n+"px",Ga.style.top=40+i+"px"}Ar.addEventListener("touchstart",s=>{s.preventDefault(),s.stopPropagation(),Tr();const t=s.changedTouches[0];ka=t.identifier,fu=!0,ap(t.clientX,t.clientY)},{passive:!1});Ar.addEventListener("touchmove",s=>{s.preventDefault(),s.stopPropagation();for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===ka&&ap(s.changedTouches[t].clientX,s.changedTouches[t].clientY)},{passive:!1});Ar.addEventListener("touchend",s=>{s.preventDefault(),s.stopPropagation();for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===ka&&(ka=null,fu=!1,hu=0,uu=0,Ga.style.left="40px",Ga.style.top="40px")},{passive:!1});du.addEventListener("touchstart",s=>{s.preventDefault(),s.stopPropagation(),Tr(),oc=!0},{passive:!1});du.addEventListener("touchend",s=>{s.preventDefault(),s.stopPropagation(),oc=!1},{passive:!1});Je.domElement.addEventListener("touchstart",s=>{s.preventDefault(),Tr();for(let t=0;t<s.changedTouches.length;t++){const e=s.changedTouches[t];e.clientX>window.innerWidth*.3&&Cs===null&&(Cs=e.identifier,sh=e.clientX,oh=e.clientY)}},{passive:!1});Je.domElement.addEventListener("touchmove",s=>{s.preventDefault();for(let t=0;t<s.changedTouches.length;t++){const e=s.changedTouches[t];e.identifier===Cs&&(xr-=(e.clientX-sh)*Ba,bs-=(e.clientY-oh)*Ba,bs=Math.max(-1,Math.min(1,bs)),sh=e.clientX,oh=e.clientY)}},{passive:!1});Je.domElement.addEventListener("touchend",s=>{for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===Cs&&(Cs=null)},{passive:!1});Je.domElement.addEventListener("touchcancel",s=>{for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===Cs&&(Cs=null)},{passive:!1});function vy(){let s=0,t=0;Pe.KeyW&&(t-=1),Pe.KeyS&&(t+=1),Pe.KeyA&&(s-=1),Pe.KeyD&&(s+=1),fu&&(s+=hu,t+=uu);const e=Math.sqrt(s*s+t*t);e>1&&(s/=e,t/=e);const n=Nv*(Pe.ShiftLeft||Pe.ShiftRight||zo?zv:1),i=Math.sin(xr),o=Math.cos(xr);return{x:(s*o+t*i)*n,z:(-s*i+t*o)*n}}const Sn={mushCap:new j(.5,8,5),mushStem:new Mt(.06,.1,.6,5),mushDot:new j(.06,4,3),crystal:new Mt(0,.35,1.8,6),crystalSm:new Mt(0,.18,.9,5),fly:new j(.06,4,3),spore:new j(.04,3,3),dandSeed:new j(.025,3,3),bubble:new j(.15,8,6),starMote:new j(.03,3,3),dustMote:new j(.035,3,3)};let cr=42;function w(){return cr=cr*16807%2147483647,(cr&2147483647)/2147483647}function yy(){return cr}function wy(s){cr=s}function oa(s,t){let e=s*374761393+t*668265263+1274126177|0;return e=(e^e>>13)*1274126177|0,(e&2147483647)/2147483647}function lr(s){return s*s*(3-2*s)}function cp(s,t){const e=Math.floor(s),n=Math.floor(t),i=lr(s-e),o=lr(t-n),r=oa(e,n),a=oa(e+1,n),c=oa(e,n+1),l=oa(e+1,n+1);return r+(a-r)*i+(c-r)*o+(r-a-c+l)*i*o}function kf(s,t,e){let n=0,i=.5,o=1;for(let r=0;r<e;r++)n+=cp(s*o,t*o)*i,i*=.5,o*=2;return n}const ah=[];function ch(s,t,e){ah.push({x:s,z:t,r:e})}function qt(s,t){const e=Math.sqrt(s*s+t*t),n=1-lr(Math.max(0,(e-ae*.7)/(ae*.3))),i=lr(Math.min(1,e/8)),o=.035,r=kf(s*o,t*o,4),a=kf(s*o*2.7+50,t*o*2.7+50,3),c=cp(s*.15,t*.15);let l=r*2.5+a*.8+c*.15;l*=n*i;for(let h=0;h<ah.length;h++){const u=ah[h],f=s-u.x,d=t-u.z,g=Math.sqrt(f*f+d*d);if(g<u.r*2){const _=lr(Math.max(0,(g-u.r*.5)/(u.r*1.5)));l*=_}}return l}function Sy(){const t=document.createElement("canvas");t.width=2048,t.height=2048;const e=t.getContext("2d"),n=Math.random;e.fillStyle="#2a5038",e.fillRect(0,0,2048,2048);const i=[{col:"rgba(40,80,50,0.35)",n:15,r:120},{col:"rgba(60,50,25,0.25)",n:12,r:100},{col:"rgba(30,65,55,0.25)",n:10,r:110},{col:"rgba(55,70,35,0.2)",n:8,r:90},{col:"rgba(35,40,25,0.25)",n:8,r:80}];for(const h of i)for(let u=0;u<h.n;u++){const f=n()*2048,d=n()*2048,g=h.r*(.5+n()*.8),_=e.createRadialGradient(f,d,0,f,d,g);_.addColorStop(0,h.col),_.addColorStop(.6,h.col.replace(/[\d.]+\)$/,parseFloat(h.col.match(/[\d.]+\)$/)[0])*.4+")")),_.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=_;for(let p=-1;p<=1;p++)for(let m=-1;m<=1;m++)e.beginPath(),e.arc(f+p*2048,d+m*2048,g,0,6.28),e.fill()}const o=[{n:80,r:25,colors:["rgba(20,45,25,0.2)","rgba(35,55,28,0.18)","rgba(28,22,12,0.2)","rgba(15,38,30,0.15)"]},{n:200,r:10,colors:["rgba(30,55,30,0.14)","rgba(45,35,18,0.12)","rgba(22,48,35,0.12)","rgba(38,28,14,0.1)"]},{n:500,r:4,colors:["rgba(25,50,28,0.1)","rgba(40,30,15,0.08)","rgba(18,42,32,0.08)","rgba(32,25,10,0.06)"]}];for(const h of o)for(let u=0;u<h.n;u++){e.fillStyle=h.colors[Math.floor(n()*h.colors.length)];const f=n()*2048,d=n()*2048;e.beginPath(),e.arc(f,d,h.r+n()*h.r*.6,0,6.28),e.fill()}const r=["rgba(60,200,100,0.06)","rgba(50,180,120,0.05)","rgba(80,160,200,0.04)","rgba(100,220,150,0.05)"];for(let h=0;h<25;h++){let u=n()*2048,f=n()*2048;const d=r[Math.floor(n()*r.length)];e.strokeStyle=d,e.lineWidth=1+n()*2,e.beginPath(),e.moveTo(u,f);let g=n()*6.28;const _=12+Math.floor(n()*16);for(let p=0;p<_;p++)g+=Math.sin(p*.6)*.5+(n()-.5)*.4,u+=Math.cos(g)*(6+n()*10),f+=Math.sin(g)*(6+n()*10),e.lineTo(u,f);if(e.stroke(),n()<.6){const p=e.createRadialGradient(u,f,0,u,f,6+n()*8);p.addColorStop(0,d.replace("0.0","0.1")),p.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=p,e.beginPath(),e.arc(u,f,6+n()*8,0,6.28),e.fill()}}e.lineWidth=1.2;for(let h=0;h<30;h++){e.strokeStyle=`rgba(20,12,5,${.15+n()*.12})`;let u=n()*2048,f=n()*2048,d=n()*6.28;e.beginPath(),e.moveTo(u,f);for(let g=0;g<10;g++)d+=Math.sin(g*.7)*.5+(n()-.5)*.35,u+=Math.cos(d)*(8+n()*14),f+=Math.sin(d)*(8+n()*14),e.lineTo(u,f);e.stroke()}const a=["rgba(55,32,12,0.3)","rgba(70,42,18,0.25)","rgba(40,55,22,0.22)","rgba(22,50,28,0.2)","rgba(60,45,20,0.25)","rgba(30,60,35,0.18)","rgba(50,25,8,0.22)","rgba(65,55,25,0.18)"];for(let h=0;h<3e3;h++){e.fillStyle=a[Math.floor(n()*a.length)];const u=n()*2048,f=n()*2048,d=.8+n()*2.5;e.beginPath(),e.arc(u,f,d,0,6.28),e.fill()}for(let h=0;h<40;h++){const u=n()*2048,f=n()*2048,d=15+n()*35,g=e.createRadialGradient(u,f,0,u,f,d),_=n();_<.4?(g.addColorStop(0,"rgba(45,90,50,0.18)"),g.addColorStop(1,"rgba(25,55,30,0)")):_<.7?(g.addColorStop(0,"rgba(35,75,60,0.16)"),g.addColorStop(1,"rgba(20,50,38,0)")):(g.addColorStop(0,"rgba(55,75,35,0.14)"),g.addColorStop(1,"rgba(30,45,20,0)")),e.fillStyle=g,e.beginPath(),e.arc(u,f,d,0,6.28),e.fill()}for(let h=0;h<400;h++){const u=n()*2048,f=n()*2048,d=1.5+n()*3.5,g=Math.floor(28+n()*42);e.fillStyle=`rgba(${g},${g-4},${g-10},0.3)`,e.beginPath(),e.arc(u,f,d,0,6.28),e.fill()}e.lineWidth=.7;for(let h=0;h<80;h++){const u=n()*2048,f=n()*2048,d=4+n()*18,g=n()*6.28;e.strokeStyle=`rgba(22,12,5,${.15+n()*.1})`,e.beginPath(),e.moveTo(u,f),e.lineTo(u+Math.cos(g)*d,f+Math.sin(g)*d),e.stroke()}const c=["rgba(80,220,120,0.08)","rgba(60,200,160,0.07)","rgba(100,180,220,0.06)","rgba(120,100,200,0.05)","rgba(200,150,80,0.04)","rgba(60,180,180,0.06)"];for(let h=0;h<300;h++){const u=n()*2048,f=n()*2048,d=c[Math.floor(n()*c.length)];if(e.fillStyle=d,e.beginPath(),e.arc(u,f,1+n()*2,0,6.28),e.fill(),n()<.3){const g=e.createRadialGradient(u,f,0,u,f,4+n()*5);g.addColorStop(0,d),g.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=g,e.beginPath(),e.arc(u,f,4+n()*5,0,6.28),e.fill()}}for(let h=0;h<150;h++){const u=n()*2048,f=n()*2048;e.fillStyle=`rgba(120,180,130,${.04+n()*.04})`,e.beginPath(),e.arc(u,f,.5+n()*1.2,0,6.28),e.fill()}const l=new Kh(t);return l.wrapS=l.wrapT=Ra,l.repeat.set(8,8),l.colorSpace=gn,l}function ra(s,t){let e=s*127961+t*372143+918273|0;return e=(e^e>>13)*517261|0,(e&2147483647)/2147483647}function lh(s){return s*s*(3-2*s)}function lp(s,t){const e=Math.floor(s),n=Math.floor(t),i=lh(s-e),o=lh(t-n),r=ra(e,n),a=ra(e+1,n),c=ra(e,n+1),l=ra(e+1,n+1);return r+(a-r)*i+(c-r)*o+(r-a-c+l)*i*o}function Wc(s,t,e){let n=0,i=.5,o=1;for(let r=0;r<e;r++)n+=lp(s*o,t*o)*i,i*=.5,o*=2;return n}function by(){const s=Sy(),t=ae*3,e=200,n=new ge(t,t,e,e),i=n.attributes.position,o=[[.55,.95,.6],[.45,.85,.95],[.8,.5,1],[.85,.65,.4],[.5,1.1,.65],[.4,.7,.9]],r=i.count,a=new Float32Array(r*3);for(let l=0;l<r;l++){const h=i.getX(l),u=i.getY(l);Math.sqrt(h*h+u*u)<ae*1.4?i.setZ(l,qt(h,-u)):i.setZ(l,0);const d=h,g=-u,_=Wc(d*.025+100,g*.025+200,3),p=Wc(d*.06+300,g*.06+400,2),m=lp(d*.15+500,g*.15+600),E=Wc(d*.04-150,g*.04-250,3),v=Math.floor(_*o.length*.999),M=Math.floor(E*o.length*.999),A=o[v],T=o[M],b=lh(p),S=.85+m*.3,y=(A[0]*(1-b)+T[0]*b)*S,x=(A[1]*(1-b)+T[1]*b)*S,C=(A[2]*(1-b)+T[2]*b)*S,L=1+qt(d,g)*.06;a[l*3]=y*L,a[l*3+1]=x*L,a[l*3+2]=C*L}n.setAttribute("color",new ke(a,3)),n.computeVertexNormals();const c=new I(n,new K({map:s,vertexColors:!0,roughness:.75,metalness:0,emissive:1718304,emissiveIntensity:.25}));return c.rotation.x=-Math.PI/2,c.receiveShadow=!0,ht.add(c),c}const _r=new re;let Ha=null;const ls=120;let Gf=null,wa=null,hh=null,uh=null,fo=null;const po=[],Ey=3;let Xc=0;function Vi(s,t){const e=s>>16&255,n=s>>8&255,i=s&255;return`rgba(${e},${n},${i},${t})`}function Wi(s,t,e,n,i,o,r){s.save(),s.translate(t,e),Math.abs(i/n-1)>.01&&s.scale(1,i/n);const a=s.createRadialGradient(0,0,0,0,0,n);a.addColorStop(0,Vi(o,r)),a.addColorStop(.25,Vi(o,r*.55)),a.addColorStop(.55,Vi(o,r*.15)),a.addColorStop(.85,Vi(o,r*.03)),a.addColorStop(1,Vi(o,0)),s.fillStyle=a,s.beginPath(),s.arc(0,0,n,0,6.2832),s.fill(),s.restore()}function Yc(s,t,e,n,i,o,r,a){Wi(s,t,e,n,i,o,r),t-n<0&&Wi(s,t+a,e,n,i,o,r),t+n>a&&Wi(s,t-a,e,n,i,o,r)}function Ty(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),i=Math.random,o=n.createLinearGradient(0,0,0,1024);o.addColorStop(0,"#030610"),o.addColorStop(.2,"#050a18"),o.addColorStop(.4,"#0a1222"),o.addColorStop(.55,"#0c1828"),o.addColorStop(.75,"#081018"),o.addColorStop(1,"#040810"),n.fillStyle=o,n.fillRect(0,0,2048,1024);const r=[{x:.12,y:.22,rx:.18,ry:.14,col:1717094,a:.14},{x:.42,y:.28,rx:.22,ry:.1,col:2758741,a:.12},{x:.72,y:.18,rx:.16,ry:.12,col:1721446,a:.13},{x:.88,y:.32,rx:.2,ry:.09,col:3348548,a:.1},{x:.28,y:.12,rx:.14,ry:.18,col:2245768,a:.1},{x:.58,y:.38,rx:.18,ry:.07,col:4465220,a:.08},{x:.05,y:.4,rx:.15,ry:.1,col:1586005,a:.09},{x:.52,y:.15,rx:.12,ry:.16,col:2765670,a:.07}];for(const u of r){Yc(n,u.x*2048,u.y*1024,u.rx*2048,u.ry*1024,u.col,u.a,2048);for(let f=0;f<4;f++){const d=(u.x+(i()-.5)*u.rx)*2048,g=(u.y+(i()-.5)*u.ry)*1024,_=u.rx*2048*(.2+i()*.35),p=u.ry*1024*(.2+i()*.4);Yc(n,d,g,_,p,u.col,u.a*(.4+i()*.5),2048)}}const a=[2245802,2245734,4465254,5583701,3368584,2245717,3809894];for(let u=0;u<30;u++){const f=i()*2048,d=i()*1024*.55,g=40+i()*180,_=25+i()*100;Yc(n,f,d,g,_,a[Math.floor(i()*a.length)],.025+i()*.035,2048)}n.save(),n.globalCompositeOperation="screen";const c=.26;for(let u=0;u<50;u++){const f=u/50,d=f*2048,g=(c+Math.sin(f*Math.PI)*.06+(i()-.5)*.02)*1024,_=2048*.05+i()*2048*.035,p=1024*.04*(.4+i()*.6);Wi(n,d,g,_,p,4478310,.025+i()*.015)}for(let u=0;u<25;u++){const f=.2+i()*.6,d=f*2048,g=(c+Math.sin(f*Math.PI)*.04)*1024;Wi(n,d,g,2048*.03+i()*2048*.02,1024*.02+i()*1024*.01,6719658,.015+i()*.012)}for(let u=0;u<10;u++){const f=.35+i()*.3,d=f*2048,g=(c+Math.sin(f*Math.PI)*.02)*1024;Wi(n,d,g,2048*.02,1024*.012,8943462,.01+i()*.008)}n.globalCompositeOperation="source-over",n.restore();for(let u=0;u<12;u++){const f=.1+i()*.8,d=f*2048,g=(c+Math.sin(f*Math.PI)*.04+(i()-.5)*.02)*1024,_=20+i()*60,p=8+i()*20;Wi(n,d,g,_,p,132104,.15+i()*.1)}const l=["255,255,255","220,230,255","255,240,220","200,215,255","255,225,200","240,240,255","255,245,235"];for(let u=0;u<5e3;u++){const f=i()*2048,d=i()*1024*.65,g=.3+i()*.7,_=.1+i()*.5;n.fillStyle=`rgba(${l[Math.floor(i()*l.length)]},${_})`,n.beginPath(),n.arc(f,d,g,0,6.28),n.fill()}for(let u=0;u<3e3;u++){const f=i(),d=f*2048,_=(c+Math.sin(f*Math.PI)*.06)*1024+(i()-.5)*1024*.1;if(_<0||_>1024*.6)continue;const p=.2+i()*.6,m=.2+i()*.7;n.fillStyle=`rgba(${l[Math.floor(i()*l.length)]},${m})`,n.beginPath(),n.arc(d,_,p,0,6.28),n.fill()}for(let u=0;u<60;u++){const f=i()*2048,d=i()*1024*.58,g=1.2+i()*1.8,_=6+i()*14,p=i();let m;p<.45?m="255,255,255":p<.65?m="210,225,255":p<.8?m="255,230,200":p<.92?m="190,210,255":m="255,200,180";const E=n.createRadialGradient(f,d,0,f,d,_);E.addColorStop(0,`rgba(${m},0.5)`),E.addColorStop(.1,`rgba(${m},0.18)`),E.addColorStop(.35,`rgba(${m},0.04)`),E.addColorStop(1,`rgba(${m},0)`),n.fillStyle=E,n.beginPath(),n.arc(f,d,_,0,6.28),n.fill(),n.strokeStyle=`rgba(${m},0.12)`,n.lineWidth=.5;const v=_*.8;n.beginPath(),n.moveTo(f-v,d),n.lineTo(f+v,d),n.moveTo(f,d-v),n.lineTo(f,d+v),n.stroke(),n.fillStyle=`rgba(${m},1)`,n.beginPath(),n.arc(f,d,g,0,6.28),n.fill()}for(let u=0;u<8;u++){const f=i()*2048,d=1024*.08+i()*1024*.42,g=50+i()*90;Wi(n,f,d,g,g*.7,3359846,.03);for(let _=0;_<100;_++){const p=i()*6.28,m=i()*i()*g,E=f+Math.cos(p)*m,v=d+Math.sin(p)*m*.65;if(E<0||E>2048||v<0||v>1024)continue;const M=.2+i()*.6;n.fillStyle=`rgba(255,255,255,${.25+i()*.6})`,n.beginPath(),n.arc(E,v,M,0,6.28),n.fill()}}for(let u=0;u<15;u++){const f=r[Math.floor(i()*r.length)],d=(f.x+(i()-.5)*f.rx*.5)*2048,g=(f.y+(i()-.5)*f.ry*.5)*1024,_=3+i()*8,p=n.createRadialGradient(d,g,0,d,g,_*3);p.addColorStop(0,Vi(f.col,.2)),p.addColorStop(.3,Vi(f.col,.06)),p.addColorStop(1,Vi(f.col,0)),n.fillStyle=p,n.beginPath(),n.arc(d,g,_*3,0,6.28),n.fill()}const h=new Kh(e);return h.colorSpace=gn,h}function Ay(){const s=yy(),t=Ty(),e=new j(ws,64,32,0,Math.PI*2,0,Math.PI*.55);Ha=new q({map:t,side:xn,fog:!1,transparent:!1});const n=new I(e,Ha);_r.add(n),Cy(),Ry(),ht.add(_r),wy(s)}function Cy(){const s=new Float32Array(ls*3),t=new Float32Array(ls*3);wa=new Float32Array(ls),hh=new Float32Array(ls),uh=new Float32Array(ls);const e=[[1,1,1],[.85,.9,1],[1,.94,.86],[.78,.84,1],[1,.88,.78],[.9,.95,1]],n=Math.random,i=ws*.97;for(let a=0;a<ls;a++){const c=n()*Math.PI*2,l=n()*Math.PI*.48,h=i*Math.cos(c)*Math.sin(l),u=i*Math.cos(l),f=i*Math.sin(c)*Math.sin(l);s[a*3]=h,s[a*3+1]=u,s[a*3+2]=f;const d=e[Math.floor(n()*e.length)];t[a*3]=d[0],t[a*3+1]=d[1],t[a*3+2]=d[2],wa[a]=2+n()*4,hh[a]=n()*Math.PI*2,uh[a]=.5+n()*2.5}const o=new be;o.setAttribute("position",new Gt(s,3)),o.setAttribute("color",new Gt(t,3)),fo=new Gt(wa.slice(),1),fo.setUsage(we),o.setAttribute("size",fo);const r=new jh({vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,fog:!1,blending:he,depthWrite:!1});Gf=new zd(o,r),_r.add(Gf)}function Ry(){const s=new q({color:16777215,transparent:!0,opacity:0,fog:!1,blending:he,depthWrite:!1});for(let t=0;t<Ey;t++){const e=new I(new Mt(.15,0,12,4),s.clone());e.visible=!1,_r.add(e),po.push({mesh:e,mat:e.material,active:!1,life:0,maxLife:0,sx:0,sy:0,sz:0,dx:0,dy:0,dz:0})}}function Py(){let s=null;for(let a=0;a<po.length;a++)if(!po[a].active){s=po[a];break}if(!s)return;const t=Math.random,e=t()*Math.PI*2,n=.1+t()*.35,i=ws*.85;s.sx=i*Math.cos(e)*Math.sin(n),s.sy=i*Math.cos(n),s.sz=i*Math.sin(e)*Math.sin(n);const o=e+(t()-.5)*1,r=80+t()*120;s.dx=Math.cos(o)*r,s.dy=-r*(.5+t()*.5),s.dz=Math.sin(o)*r,s.life=.5+t()*.8,s.maxLife=s.life,s.active=!0,s.mesh.visible=!0}function hp(s,t){if(_r.rotation.y=t*.003,fo){const e=fo.array;for(let n=0;n<ls;n++){const i=wa[n],o=Math.sin(t*uh[n]+hh[n]);e[n]=i*(.65+o*.35)}fo.needsUpdate=!0}Xc-=s,Xc<=0&&(Xc=4+Math.random()*12,Py());for(let e=0;e<po.length;e++){const n=po[e];if(!n.active)continue;if(n.life-=s,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}const i=n.life/n.maxLife;n.sx+=n.dx*s,n.sy+=n.dy*s,n.sz+=n.dz*s,n.mesh.position.set(n.sx,n.sy,n.sz),n.mesh.lookAt(n.sx+n.dx,n.sy+n.dy,n.sz+n.dz),n.mesh.rotateX(Math.PI/2),n.mat.opacity=i*.7,n.mesh.scale.setScalar(.6+i*.4)}}function Iy(s){if(Ha){const t=Math.max(.15,s);Ha.color.setRGB(t,t,t)}}const Ly=6,aa=64,fh=[];let _s=null;const qo=[new st(1734485),new st(2787447),new st(5601126),new st(6706568),new st(8930406),new st(3368533)];function Dy(){_s=new re,_s.visible=!1;for(let s=0;s<Ly;s++){const t=1.2+s*.2+Math.sin(s*1.7)*.15,e=ws*t,n=.1+s*.012+Math.sin(s*2.3)*.02,i=ws*n,o=new ge(e,i,aa,3),r=o.attributes.position.array,a=4,c=(aa+1)*a,l=Math.PI*(.45+s*.08+Math.sin(s*.9)*.05),h=-l/2,u=(.25+s*.04+Math.sin(s*1.3)*.02)*Math.PI,f=s*.18-.45;for(let p=0;p<c;p++){const m=Math.floor(p/a),E=p%a,v=m/aa,M=h+v*l+f,T=(E/(a-1)-.5)*.05,b=u+T,S=ws*.92;r[p*3]=Math.sin(M)*Math.sin(b)*S,r[p*3+1]=Math.cos(b)*S,r[p*3+2]=Math.cos(M)*Math.sin(b)*S}o.attributes.position.needsUpdate=!0,o.attributes.position.setUsage(we),o.computeVertexNormals();const d=new Float32Array(c*3);o.setAttribute("color",new ke(d,3)),o.attributes.color.setUsage(we);const g=new q({vertexColors:!0,transparent:!0,opacity:0,side:Lt,blending:he,depthWrite:!1,fog:!1}),_=new I(o,g);_s.add(_),fh.push({mesh:_,mat:g,geo:o,colorArr:d,posArr:r,vertCount:c,rows:a,segments:aa,phase:s*1.7+Math.sin(s*.8)*.5,speed:.15+s*.05+Math.sin(s*2.1)*.03,colorShift:s*1.1,elevation:u,arcStart:h,arcSpan:l,azimuthOffset:f})}ht.add(_s)}let $s=0;function Uy(s,t,e,n,i){if(!_s)return;const o=i==="HEAVY_RAIN"||i==="LUMINOUS_STORM"||i==="FOG_BANK";let r=0;o||(e==="DEEP_NIGHT"?r=.25:e==="NIGHT"&&(r=.08));const a=r>$s?.2:.4;if($s+=(r-$s)*a*s,$s<.005){_s.visible=!1;return}_s.visible=!0;const c=ws*.92;for(let l=0;l<fh.length;l++){const h=fh[l],u=h.colorArr,f=h.posArr,d=h.segments,g=h.rows;h.mat.opacity=$s*(.5+l*.05);for(let _=0;_<=d;_++){const p=_/d,m=Math.sin(p*6+t*h.speed+h.phase)*.5+.5,E=Math.sin(p*3-t*h.speed*.4+h.phase*1.3)*.5+.5,v=Math.sin(p*1.5+t*.07)*.5+.5,M=Math.sin(p*1.2+t*.05+h.phase*.7)*.5+.5,A=(m*.3+E*.25+v*.2+M*.25)*$s,T=(p*3+t*.08+h.colorShift)%qo.length,b=Math.floor(T),S=T-b,y=qo[b%qo.length],x=qo[(b+1)%qo.length],C=(y.r+(x.r-y.r)*S)*A,U=(y.g+(x.g-y.g)*S)*A,L=(y.b+(x.b-y.b)*S)*A,z=c*.025,V=Math.sin(p*5+t*.3+h.phase)*z+Math.sin(p*2.5-t*.15+h.phase*.6)*z*.5;for(let G=0;G<g;G++){const Z=_*g+G,W=G/(g-1);let rt;W<.33?rt=W*1.2:W>.67?rt=(1-W)*1.5:rt=.7+Math.sin(W*Math.PI)*.3,u[Z*3]=C*rt,u[Z*3+1]=U*rt,u[Z*3+2]=L*rt,h.arcStart+p*h.arcSpan+h.azimuthOffset;const ut=(W-.5)*.05,yt=h.elevation+ut,zt=V*(.3+W*.7);f[Z*3+1]=Math.cos(yt)*c+zt}}h.geo.attributes.color.needsUpdate=!0,h.geo.attributes.position.needsUpdate=!0}}const J={pos:new N(0,ic,0),vel:new N,onGround:!0};let qc=0,Zc=0,up=0,$c=65,Hf=65,Zo=0,Vf=!0,jc=0,Po=0,dh=null,ph=null,mh=null,Wf=1;function Ny(s,t,e){dh=s,ph=t,mh=e}let gh=[],xh=[],_h=null;function zy(s,t){gh=s,xh=t}function Fy(s){_h=s}function Oy(s){const t=vy(),e=Pe.ShiftLeft||Pe.ShiftRight||zo;J.vel.x=t.x,J.vel.z=t.z,J.vel.y-=Uv*s,(Pe.Space||oc)&&J.onGround&&(J.vel.y=Oa,J.onGround=!1,_y(!1),ph&&ph()),J.onGround||(jc=J.vel.y),J.pos.x+=J.vel.x*s,J.pos.y+=J.vel.y*s,J.pos.z+=J.vel.z*s;const n=qt(J.pos.x,J.pos.z)+ic;if(J.pos.y<=n){if(J.pos.y=n,J.vel.y=0,!Vf&&jc<-3){const h=Math.min(Math.abs(jc)/Oa,1);Zo=h*.15,_h&&_h(J.pos.x,J.pos.z,Math.floor(3+h*5)),mh&&mh(h)}J.onGround=!0}Vf=J.onGround,J.onGround?(J.vel.x*=Uf,J.vel.z*=Uf):(J.vel.x*=Nf,J.vel.z*=Nf);const i=.4;for(let h=0;h<gh.length;h++){const u=gh[h],f=J.pos.x-u.x,d=J.pos.z-u.z,g=f*f+d*d,_=.6+i;if(g<_*_&&g>.001){const p=1/Math.sqrt(g);J.pos.x=u.x+f*p*_,J.pos.z=u.z+d*p*_}}for(let h=0;h<xh.length;h++){const u=xh[h],f=J.pos.x-u.x,d=J.pos.z-u.z,g=f*f+d*d,_=u.colR+i;if(g<_*_&&g>.001){const p=1/Math.sqrt(g);J.pos.x=u.x+f*p*_,J.pos.z=u.z+d*p*_}}if(Math.sqrt(J.pos.x*J.pos.x+J.pos.z*J.pos.z)>ae){const h=Math.atan2(J.pos.z,J.pos.x);J.pos.x=Math.cos(h)*ae,J.pos.z=Math.sin(h)*ae}lu.position.copy(J.pos);const a=Math.sqrt(t.x*t.x+t.z*t.z)>.5&&J.onGround;a?Po=0:Po+=s,Zc+=((a?e?.06:.035:0)-Zc)*s*6,a&&(qc+=s*(e?12:8));const l=Math.sin(qc)*Zc;if(a&&dh){const h=Math.sin(qc)>=0?1:-1;Wf>0&&h<0&&dh(e),Wf=h}Hf=e&&a?78:65,$c+=(Hf-$c)*s*4,cn.fov=$c,cn.updateProjectionMatrix(),Zo*=Math.pow(.04,s),Zo<.001&&(Zo=0),up=l-Zo}const Xf=[{leaf:1332520,glow:2280567,core:4521898},{leaf:931880,glow:3390378,core:5636044},{leaf:1721376,glow:4508757,core:7864200},{leaf:1060912,glow:2267562,core:4513262},{leaf:1583172,glow:3377356,core:5618687}];function By(s,t){const e=new re,n=6+w()*10,i=.2+w()*.3,o=new K({color:5914672,roughness:.75,emissive:1718304,emissiveIntensity:.18}),r=new I(new Mt(i*.4,i,n,6),o);r.position.y=n/2,r.castShadow=!0,e.add(r);const a=new K({color:2263125,emissive:F.leafGlow,emissiveIntensity:.5,transparent:!0,opacity:.25}),c=2+Math.floor(w()*3);for(let E=0;E<c;E++){const v=E/c*6.28+w()*.5,M=n*.4+w()*n*.4,A=new I(new Mt(.008,.015,M,3),a);A.position.set(Math.cos(v)*i*.74,n*.15+M/2,Math.sin(v)*i*.74),e.add(A)}const l=new K({color:3812378,roughness:.85,emissive:1583636,emissiveIntensity:.12}),h=3+Math.floor(w()*3);for(let E=0;E<h;E++){const v=E/h*6.28+w()*.5,M=.8+w()*1.5,A=new I(new Mt(.02,i*.3,M,4),l);A.position.set(Math.cos(v)*i*.5,.08,Math.sin(v)*i*.5),A.rotation.z=v<3.14?1.2+w()*.3:-(1.2+w()*.3),A.rotation.y=v,e.add(A)}const u=3+Math.floor(w()*4);for(let E=0;E<u;E++){const v=n*(.4+w()*.5),M=w()*Math.PI*2,A=1.5+w()*3,T=new I(new Mt(.02,.06,A,4),o);T.position.set(Math.cos(M)*.3,v,Math.sin(M)*.3),T.rotation.z=(w()-.5)*1.2,T.rotation.y=M,T.castShadow=!0,e.add(T);const b=Xf[Math.floor(w()*Xf.length)],S=Math.cos(M)*(A*.5),y=v+w()*1.5,x=Math.sin(M)*(A*.5),C=1+w()*2,U=new K({color:b.core,emissive:b.core,emissiveIntensity:.7+w()*.5,transparent:!0,opacity:.55,roughness:.3}),L=new I(new ys(C*.3,1),U);L.position.set(S,y,x),e.add(L);const z=new K({color:b.leaf,emissive:b.glow,emissiveIntensity:.25+w()*.25,transparent:!0,opacity:.55,roughness:.7}),V=new I(new ys(C*.75,1),z);V.position.set(S+(w()-.5)*.4,y+(w()-.5)*.4,x+(w()-.5)*.4),V.scale.set(1+w()*.4,.65+w()*.5,1+w()*.4),V.castShadow=!0,V.receiveShadow=!0,e.add(V);const G=new K({color:b.glow,emissive:b.glow,emissiveIntensity:.12,transparent:!0,opacity:.08,depthWrite:!1}),Z=new I(new ys(C*1.2,1),G);if(Z.position.set(S,y,x),e.add(Z),w()<.35){const W=new K({color:2773040,emissive:1135904,emissiveIntensity:.08,transparent:!0,opacity:.5}),rt=.3+w()*.8,ut=new I(new Mt(.008,.003,rt,3),W),yt=w()*A*.4;ut.position.set(Math.cos(M)*(.3+yt),v-rt/2-w()*.3,Math.sin(M)*(.3+yt)),e.add(ut)}}const f=new K({color:5911840,emissive:3349e3,emissiveIntensity:.06,roughness:.8}),d=Math.floor(w()*3);for(let E=0;E<d;E++){const v=1+w()*n*.4,M=w()*6.28,A=new I(new j(.08+w()*.08,5,3),f);A.scale.set(1.5,.3,1),A.position.set(Math.cos(M)*i*.8,v,Math.sin(M)*i*.8),A.rotation.y=-M,e.add(A)}const g=new K({color:F.leaf,emissive:F.leafGlow,emissiveIntensity:.06,transparent:!0,opacity:.07,depthWrite:!1}),_=new I(new j(3+w()*2,8,6),g);_.position.y=n*.65,e.add(_);const p=new K({color:1183752,roughness:.95}),m=new I(new j(i*2.5,6,3),p);return m.scale.set(1,.12,1),m.position.y=.02,e.add(m),e.position.set(s,0,t),ht.add(e),e}function ky(s,t){const e=new re,n=.4+w()*1.2,i=w()*6.28,o=.8+w()*1.5,r=.5+w()*.8,a=new I(Sn.mushStem,new K({color:F.mushStem,roughness:.7,emissive:F.mushGlow,emissiveIntensity:.1}));a.position.y=.3,e.add(a);const c=new K({color:F.mushStem,emissive:F.mushGlow,emissiveIntensity:.15,roughness:.6}),l=new I(new Se(.09,.012,4,8),c);l.position.y=.42,l.rotation.x=Math.PI/2,e.add(l);const h=new K({color:F.mushCap,emissive:F.mushGlow,emissiveIntensity:r,roughness:.3,transparent:!0,opacity:.9}),u=new I(Sn.mushCap,h);u.scale.set(1,.5,1),u.position.y=.55,u.castShadow=!0,u.receiveShadow=!0,e.add(u);const f=new K({color:6693546,emissive:F.mushGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,side:Lt});for(let x=0;x<8;x++){const C=x/8*6.28,U=new I(new ge(.35,.08),f);U.position.set(Math.cos(C)*.15,.48,Math.sin(C)*.15),U.rotation.y=-C,U.rotation.x=.1,e.add(U)}for(let x=0;x<4;x++){const C=new q({color:16777215,transparent:!0,opacity:.9}),U=new I(Sn.mushDot,C),L=w()*6.28,z=.15+w()*.25;U.position.set(Math.cos(L)*z,.6+w()*.1,Math.sin(L)*z),e.add(U)}const d=new K({color:15663103,emissive:11197951,emissiveIntensity:.2,transparent:!0,opacity:.6,roughness:0,metalness:.5}),g=2+Math.floor(w()*2);for(let x=0;x<g;x++){const C=new I(new j(.015+w()*.015,4,3),d),U=w()*6.28,L=.1+w()*.2;C.position.set(Math.cos(U)*L,.63+w()*.08,Math.sin(U)*L),e.add(C)}const _=new K({color:4465322,emissive:F.mushGlow,emissiveIntensity:.15,transparent:!0,opacity:.35});for(let x=0;x<4;x++){const C=w()*6.28,U=.15+w()*.25,L=new I(new Mt(.004,.002,U,3),_);L.position.set(Math.cos(C)*.12,.01,Math.sin(C)*.12),L.rotation.z=1.3*(C<3.14?1:-1),L.rotation.y=C,e.add(L)}const p=new K({color:F.mushCap,emissive:F.mushGlow,emissiveIntensity:r*.6,transparent:!0,opacity:.4}),m=new I(new Se(.38,.01,4,12),p);m.position.y=.49,m.rotation.x=Math.PI/2,e.add(m);const E=new K({color:F.mushStem,emissive:F.mushGlow,emissiveIntensity:.08,roughness:.7}),v=new I(new j(.08,5,3),E);v.scale.set(1,.5,1),v.position.y=.04,e.add(v);const M=new K({color:1708040,roughness:.95});for(let x=0;x<3;x++){const C=w()*6.28,U=.1+w()*.12,L=new I(new j(.008+w()*.008,3,3),M);L.position.set(Math.cos(C)*U,.005,Math.sin(C)*U),e.add(L)}const A=new q({color:F.mushGlow,transparent:!0,opacity:.2});for(let x=0;x<4;x++){const C=new I(new j(.006,3,3),A);C.position.set((w()-.5)*.2,.35+w()*.1,(w()-.5)*.2),e.add(C)}const T=new K({color:11167453,emissive:F.mushGlow,emissiveIntensity:r*.3,roughness:.5}),b=3+Math.floor(w()*3);for(let x=0;x<b;x++){const C=w()*6.28,U=w()*.25,L=new I(new j(.015+w()*.015,3,3),T);L.position.set(Math.cos(C)*U,.58+w()*.06,Math.sin(C)*U),e.add(L)}const S=new K({color:657416,transparent:!0,opacity:.2,roughness:.95,side:Lt}),y=new I(new Ve(.18,8),S);return y.rotation.x=-Math.PI/2,y.position.y=.005,e.add(y),e.scale.setScalar(n),e.position.set(s,0,t),ht.add(e),{group:e,capMat:h,phase:i,speed:o,base:r,x:s,z:t}}function Gy(s,t){const e=new re,n=w()*6.28,i=new K({color:F.crystal,emissive:F.crystalCore,emissiveIntensity:1.5,transparent:!0,opacity:.7,roughness:.1,metalness:.5}),o=new I(Sn.crystal,i);o.position.y=.9,o.castShadow=!0,e.add(o);for(let v=0;v<3;v++){const M=new I(Sn.crystalSm,i),A=v/3*6.28+w()*.5;M.position.set(Math.cos(A)*.4,.45,Math.sin(A)*.4),M.rotation.z=(w()-.5)*.8,M.castShadow=!0,e.add(M)}const r=new K({color:1710626,roughness:.9,metalness:.1}),a=3+Math.floor(w()*3);for(let v=0;v<a;v++){const M=w()*6.28,A=.2+w()*.5,T=.08+w()*.12,b=new I(new j(T,4,3),r);b.scale.set(1+w()*.5,.5+w()*.4,1+w()*.5),b.position.set(Math.cos(M)*A,T*.3,Math.sin(M)*A),b.rotation.set(w(),w(),w()),e.add(b)}const c=new q({color:F.crystalCore,transparent:!0,opacity:.5});for(let v=0;v<3;v++){const M=.4+w()*.8,A=new I(new Mt(.008,.008,M,3),c);A.position.set((w()-.5)*.15,.5+w()*.7,(w()-.5)*.15),A.rotation.set((w()-.5)*.8,(w()-.5)*.5,(w()-.5)*.8),e.add(A)}const l=new q({color:11206638,transparent:!0,opacity:.6});for(let v=0;v<5;v++){const M=new I(new j(.012,3,3),l);M.position.set((w()-.5)*1,.3+w()*1.5,(w()-.5)*1),e.add(M)}const h=new K({color:F.crystal,emissive:F.crystalCore,emissiveIntensity:.8,transparent:!0,opacity:.5});for(let v=0;v<4;v++){const M=w()*6.28,A=.3+w()*.3,T=new I(new Mt(0,.015,.12+w()*.1,3),h);T.position.set(Math.cos(M)*A,.06+w()*.1,Math.sin(M)*A),T.rotation.z=(w()-.5)*.6,e.add(T)}const u=new K({color:3364198,emissive:1122867,emissiveIntensity:.05,roughness:.9,side:Lt});for(let v=0;v<2;v++){const M=w()*6.28,A=.2+w()*.3,T=new I(new Ve(.04+w()*.03,5),u);T.rotation.x=-Math.PI/2+w()*.4,T.position.set(Math.cos(M)*A,.05,Math.sin(M)*A),e.add(T)}const f=new q({color:F.crystalCore,transparent:!0,opacity:.2});for(let v=0;v<2;v++){const M=new I(new Mt(.003,.003,.6+w()*.4,3),f);M.position.set((w()-.5)*.3,.7+w()*.5,(w()-.5)*.3),M.rotation.set((w()-.5)*1,w(),(w()-.5)*1),e.add(M)}const d=new K({color:1135940,emissive:1127202,emissiveIntensity:.3,transparent:!0,opacity:.25});for(let v=0;v<4;v++){const M=new I(new j(.02+w()*.02,3,3),d);M.position.set((w()-.5)*.15,.4+w()*.6,(w()-.5)*.15),e.add(M)}const g=new q({color:11206638,transparent:!0,opacity:.06}),_=new I(new Se(.35,.02,4,10),g);_.position.y=.6,_.rotation.x=Math.PI/2+w()*.3,e.add(_);const p=new q({color:F.crystal,transparent:!0,opacity:.06,side:Lt}),m=new I(new Ve(.8,8),p);m.rotation.x=-Math.PI/2,m.position.y=.01,e.add(m),e.position.set(s,0,t),ht.add(e);const E=new Uo(F.crystal,.5,8);return E.position.set(s,1.2,t),ht.add(E),{group:e,mat:i,phase:n,x:s,z:t,light:E}}function Hy(s,t,e,n,i){const o=new be,r=[],a=[],c=[],l=n||20,h=new st(i?i[0]:663568),u=new st(i?i[1]:1388056),f=new st(i?i[2]:2777141),d=new st(i?i[3]:4517461),g=new st(i?i[4]:7864268),_=new st(i?i[5]:14548838),p=new st;for(let S=0;S<l;S++){const y=w()*6.28,x=w()*e,C=Math.cos(y)*x,U=Math.sin(y)*x,L=.25+w()*.65,z=.03+w()*.05,V=(w()-.5)*.2,G=(w()-.5)*.2,Z=(w()-.5)*.12,W=w()<.5?h:u,rt=w(),ut=rt<.4?d:rt<.7?g:_,yt=L*.35,zt=L*.7,$t=V*.3,tt=V*.7,ct=G*.3,wt=G*.7;r.push(C-z,.01,U),r.push(C+z,.01,U),r.push(C+$t-z*.9,yt,U+ct),c.push(0,0,.35),a.push(W.r,W.g,W.b,W.r,W.g,W.b),p.copy(W).lerp(f,.4),a.push(p.r,p.g,p.b),r.push(C+z,.01,U),r.push(C+$t+z*.9,yt,U+ct),r.push(C+$t-z*.9,yt,U+ct),c.push(0,.35,.35),a.push(W.r,W.g,W.b),p.copy(W).lerp(f,.4),a.push(p.r,p.g,p.b,p.r,p.g,p.b);const ft=z*.65;r.push(C+$t-z*.9,yt,U+ct),r.push(C+$t+z*.9,yt,U+ct),r.push(C+tt-ft,zt,U+wt+Z),c.push(.35,.35,.7),p.copy(W).lerp(f,.4),a.push(p.r,p.g,p.b,p.r,p.g,p.b),p.copy(f).lerp(ut,.3),a.push(p.r,p.g,p.b),r.push(C+$t+z*.9,yt,U+ct),r.push(C+tt+ft,zt,U+wt+Z),r.push(C+tt-ft,zt,U+wt+Z),c.push(.35,.7,.7),p.copy(W).lerp(f,.4),a.push(p.r,p.g,p.b),p.copy(f).lerp(ut,.3),a.push(p.r,p.g,p.b,p.r,p.g,p.b),r.push(C+tt-ft,zt,U+wt+Z),r.push(C+tt+ft,zt,U+wt+Z),r.push(C+V+Z*2,L,U+G+Z*1.5),c.push(.7,.7,1),p.copy(f).lerp(ut,.3),a.push(p.r,p.g,p.b,p.r,p.g,p.b),a.push(ut.r,ut.g,ut.b)}const m=new st(i?i[6]:1725736),E=new st(i?i[7]:3385941),v=Math.floor(l*.3);for(let S=0;S<v;S++){const y=w()*6.28,x=w()*e*.9,C=Math.cos(y)*x,U=Math.sin(y)*x,L=.02+w()*.03;r.push(C-L,.01,U),r.push(C+L,.01,U),r.push(C,.03+w()*.02,U+L),c.push(0,0,.05),a.push(m.r,m.g,m.b),a.push(m.r,m.g,m.b),a.push(E.r,E.g,E.b)}const M=new Gt(r,3);M.setUsage(we),o.setAttribute("position",M),o.setAttribute("color",new Gt(a,3)),o.setAttribute("bladeHeight",new Gt(c,1)),o.computeVertexNormals();const A=new Float32Array(r.length);A.set(M.array);const T=new K({vertexColors:!0,roughness:.7,side:Lt,emissive:i?i[8]:4521830,emissiveIntensity:.08}),b=new I(o,T);return b.position.set(s,0,t),ht.add(b),{mesh:b,geo:o,cx:s,cz:t,origPos:A}}function Vy(s,t,e,n,i,o,r){const a=s.geo.attributes.position.array,c=s.geo.attributes.bladeHeight.array,l=s.origPos,h=s.cx,u=s.cz,f=o-h,d=r-u;for(let g=0,_=c.length;g<_;g++){const p=c[g];if(p<.01)continue;const m=g*3,E=l[m],v=l[m+1],M=l[m+2],A=(Math.sin(t*.7+(h+E)*.05)*.06+Math.sin(t*1.3+(u+M)*.08)*.03)*e*p*p,T=(Math.sin(t*.9+(u+M)*.06)*.04+Math.sin(t*1.7+(h+E)*.04)*.02)*e*p*p;let b=A+n*p,S=T+i*p;const y=E-f,x=M-d,C=y*y+x*x;if(C<1.44){const U=1-Math.sqrt(C)/1.2,L=U*U*.7,z=Math.atan2(y,x);b+=Math.sin(z)*L*p*.15,S+=Math.cos(z)*L*p*.15,a[m+1]=v*(1-L*p)}else a[m+1]=v;a[m]=E+b,a[m+2]=M+S}s.geo.attributes.position.needsUpdate=!0}function Wy(s,t){const e=new re,n=new K({color:F.fern,emissive:F.fernGlow,emissiveIntensity:.08,roughness:.7,side:Lt}),i=3+Math.floor(w()*2),o=.5+w()*.7,r=new K({color:1708552,roughness:.95}),a=new I(new j(.06,5,3),r);a.scale.set(1.5,.5,1.5),a.position.y=.02,e.add(a);for(let m=0;m<3;m++){const E=w()*6.28,v=new I(new Mt(.003,.002,.08,3),r);v.position.set(Math.cos(E)*.06,.01,Math.sin(E)*.06),v.rotation.z=(E<3.14?1:-1)*1.2,v.rotation.y=E,e.add(v)}for(let m=0;m<i;m++){const E=m/i*6.28+w()*.3,v=new I(new Mt(.004,.006,.55,3),new K({color:1721632,roughness:.8}));v.position.set(Math.cos(E)*.15,.25,Math.sin(E)*.15),v.rotation.y=-E,v.rotation.x=-.6-w()*.4,e.add(v);const M=new I(new ge(.12,.6,1,3),n);M.position.set(Math.cos(E)*.15,.25,Math.sin(E)*.15),M.rotation.y=-E,M.rotation.x=-.6-w()*.4,e.add(M);for(let T=0;T<6;T++){const b=new I(new ge(.07,.06,1,1),n),S=.06+T*.08,y=T%2===0?1:-1;b.position.set(Math.cos(E)*(.15+.06),S,Math.sin(E)*(.15+.06*y)),b.rotation.y=-E,b.rotation.x=-.8,b.rotation.z=y*.5,e.add(b)}const A=new K({color:8939042,emissive:4469521,emissiveIntensity:.1});for(let T=0;T<3;T++){const b=new I(new j(.008,3,3),A),S=.12+T*.12;b.position.set(Math.cos(E)*(.15+.02),S-.01,Math.sin(E)*(.15+.02)),e.add(b)}}const c=new K({color:F.fernGlow,emissive:F.fernGlow,emissiveIntensity:.3}),l=new I(new j(.04,4,3),c);l.position.y=.35,e.add(l);const h=new I(new Mt(.006,.003,.06,3),c);h.position.set(.02,.37,0),h.rotation.z=-.8,e.add(h);const u=new K({color:15663103,emissive:8960989,emissiveIntensity:.1,transparent:!0,opacity:.5,roughness:0,metalness:.5});for(let m=0;m<3;m++){const E=w()*6.28,v=w()*.2,M=new I(new j(.006+w()*.005,3,3),u);M.position.set(Math.cos(E)*v,.12+w()*.2,Math.sin(E)*v),e.add(M)}const f=new K({color:3811856,roughness:.9,side:Lt,transparent:!0,opacity:.6}),d=new I(new ge(.1,.4,1,2),f),g=w()*6.28;d.position.set(Math.cos(g)*.12,.05,Math.sin(g)*.12),d.rotation.x=-1.3,d.rotation.y=g,e.add(d);const _=new q({color:2768928,transparent:!0,opacity:.3});for(let m=0;m<4;m++){const E=new I(new Mt(.001,.001,.015,3),_);E.position.set((w()-.5)*.08,.08+w()*.15,(w()-.5)*.08),E.rotation.z=(w()-.5)*1.5,e.add(E)}const p=new K({color:1708552,roughness:.95});for(let m=0;m<3;m++){const E=new I(new j(.006,3,3),p);E.position.set((w()-.5)*.1,.005,(w()-.5)*.1),e.add(E)}return e.scale.setScalar(o),e.position.set(s,0,t),ht.add(e),{group:e,phase:w()*6.28}}function Xy(s,t){const e=new re,n=.25+w()*.4,i=new K({color:F.flowerStem,roughness:.8}),o=new I(new Mt(.01,.015,n,4),i);o.position.y=n/2,e.add(o);for(let S=0;S<2;S++){const y=new I(new Hn(.004,.012,3),i);y.position.set(.012,n*.25+S*n*.25,0),y.rotation.z=-1.2,e.add(y)}const r=new K({color:F.fern,roughness:.7,side:Lt}),a=new I(new ge(.06,.04),r);a.position.set(.03,n*.3,0),a.rotation.z=-.5,e.add(a);const c=new I(new ge(.05,.035),r);c.position.set(-.025,n*.5,.01),c.rotation.z=.6,e.add(c);const l=new K({color:1728560,roughness:.7,side:Lt});for(let S=0;S<5;S++){const y=S/5*6.28+.3,x=new I(new ge(.025,.02),l);x.position.set(Math.cos(y)*.025,n-.005,Math.sin(y)*.025),x.rotation.x=-1.2,x.rotation.y=-y,e.add(x)}const h=new K({color:F.flower,emissive:F.flowerGlow,emissiveIntensity:.4+w()*.4,transparent:!0,opacity:.85,side:Lt});for(let S=0;S<6;S++){const y=S/6*6.28,x=new I(new ge(.05,.04),h);x.position.set(Math.cos(y)*.03,n+.01,Math.sin(y)*.03),x.rotation.x=-.8,x.rotation.y=-y,e.add(x)}const u=new K({color:16777215,emissive:F.flowerGlow,emissiveIntensity:1.2}),f=new I(new j(.02,4,3),u);f.position.y=n+.02,e.add(f);const d=new q({color:16777130,transparent:!0,opacity:.7}),g=new q({color:16772676});for(let S=0;S<3;S++){const y=S/3*6.28+.5,x=new I(new Mt(.002,.002,.025,3),d);x.position.set(Math.cos(y)*.012,n+.03,Math.sin(y)*.012),e.add(x);const C=new I(new j(.005,3,3),g);C.position.set(Math.cos(y)*.012,n+.045,Math.sin(y)*.012),e.add(C)}const _=new q({color:16777164,transparent:!0,opacity:.3});for(let S=0;S<2;S++){const y=new I(new j(.006,3,3),_);y.position.set((w()-.5)*.04,n+.06+w()*.04,(w()-.5)*.04),e.add(y)}const p=new K({color:16772778,emissive:16768324,emissiveIntensity:.2,transparent:!0,opacity:.5,roughness:0,metalness:.4}),m=new I(new j(.006,3,3),p);m.position.set(.005,n+.005,.005),e.add(m);const E=new q({color:15662984}),v=new I(new Mt(.002,.002,.03,3),E);v.position.y=n+.035,e.add(v);const M=new I(new j(.005,3,3),E);M.position.y=n+.055,e.add(M);const A=new K({color:1725728,roughness:.7}),T=new I(new Mt(.015,.02,.02,5),A);T.position.y=n-.01,e.add(T);const b=new q({color:16777215,transparent:!0,opacity:.35});for(let S=0;S<4;S++){const y=S/4*6.28+.3,x=new I(new j(.004,3,3),b);x.position.set(Math.cos(y)*.045,n+.005,Math.sin(y)*.045),e.add(x)}return e.position.set(s,0,t),ht.add(e),{group:e,petalMat:h,phase:w()*6.28,baseH:n}}function Yy(s,t){const e=new re,n=new K({color:F.reed,emissive:F.reedTip,emissiveIntensity:.05,roughness:.7}),i=new K({color:F.reedTip,emissive:F.reedTip,emissiveIntensity:.15}),o=new K({color:1709328,roughness:.95}),r=new I(new j(.08,5,3),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=3+Math.floor(w()*4),c=new K({color:F.reed,roughness:.7,side:Lt});for(let d=0;d<a;d++){const g=.6+w()*1,_=(w()-.5)*.2,p=(w()-.5)*.2,m=new I(new Mt(.008,.015,g,4),n);m.position.set(_,g/2,p),e.add(m);const E=2+Math.floor(w()*2),v=new K({color:2771488,roughness:.7});for(let T=0;T<E;T++){const b=g*.2+T*g*.25,S=new I(new Se(.012,.004,4,6),v);S.position.set(_,b,p),S.rotation.x=Math.PI/2,e.add(S)}if(w()<.7){const T=.1+w()*.15,b=w()*6.28,S=new I(new ge(.02,T),c);S.position.set(_+Math.cos(b)*.02,g*.4,p+Math.sin(b)*.02),S.rotation.y=-b,S.rotation.x=-.5-w()*.4,e.add(S)}const M=new I(new j(.025,4,3),i);M.scale.set(.8,1.5,.8),M.position.set(_,g+.02,p),e.add(M);const A=new q({color:F.reedTip,transparent:!0,opacity:.4});for(let T=0;T<3;T++){const b=T/3*6.28+w()*.5,S=new I(new Mt(.002,.001,.04,3),A);S.position.set(_+Math.cos(b)*.015,g+.05,p+Math.sin(b)*.015),S.rotation.z=(w()-.5)*.4,e.add(S)}}e.position.set(s,0,t),ht.add(e);const l=new K({color:4864536,roughness:.9,side:Lt,transparent:!0,opacity:.5});for(let d=0;d<2;d++){w()*6.28;const g=(w()-.5)*.15,_=new I(new ge(.025,.02),l);_.position.set(g,.2+d*.25,(w()-.5)*.1),_.rotation.set(w()*.5,w(),w()*.5),e.add(_)}const h=new q({color:15654348,transparent:!0,opacity:.25});for(let d=0;d<3;d++){const g=new I(new j(.005,3,3),h);g.position.set((w()-.5)*.15,.8+w()*.6,(w()-.5)*.15),e.add(g)}const u=new K({color:2241312,roughness:.9,transparent:!0,opacity:.2}),f=new I(new Se(.1,.008,4,8),u);return f.rotation.x=Math.PI/2,f.position.y=.03,e.add(f),{group:e,phase:w()*6.28,swayAmp:.03+w()*.04}}let ln=null;const mo=[],en=new me,Va=new st,fp=new st(F.dandSeed);function qy(s){const t=new q({color:16777215,transparent:!0,opacity:1});ln=new $i(Sn.dandSeed,t,s),ln.instanceMatrix.setUsage(we),ln.instanceColor=new di(new Float32Array(s*3),3),ln.instanceColor.setUsage(we),en.scale.setScalar(0),en.updateMatrix();for(let e=0;e<s;e++)ln.setMatrixAt(e,en.matrix),Va.copy(fp),ln.setColorAt(e,Va),mo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,drift:0});ln.count=s,ln.frustumCulled=!1,ht.add(ln)}function dp(s,t,e){let n=null;for(let o=0;o<mo.length;o++)if(!mo[o].active){n=mo[o];break}if(!n)return;n.x=s+(Math.random()-.5)*.1,n.y=t,n.z=e+(Math.random()-.5)*.1;const i=Math.random()*6.28;n.vx=Math.cos(i)*.5+Math.random()*.3,n.vy=.6+Math.random()*.8,n.vz=Math.sin(i)*.5,n.life=4+Math.random()*5,n.max=n.life,n.active=!0,n.drift=Math.random()*6.28}let pp=0,mp=0,gp=0;function Zy(s,t,e){pp=s,mp=t,gp=e}function $y(s,t){let e=!1;for(let n=0;n<mo.length;n++){const i=mo[n];if(!i.active){en.position.set(0,-100,0),en.scale.setScalar(0),en.updateMatrix(),ln.setMatrixAt(n,en.matrix);continue}if(i.life-=s,i.life<=0){i.active=!1,en.position.set(0,-100,0),en.scale.setScalar(0),en.updateMatrix(),ln.setMatrixAt(n,en.matrix);continue}i.drift+=(Math.random()-.5)*1.5*s,i.vx+=Math.sin(i.drift)*.3*s,i.vz+=Math.cos(i.drift)*.2*s,i.vx+=pp*.5*s,i.vz+=mp*.5*s,i.vy+=(.15+gp*.1-i.vy)*s*.5,i.vx*=.998,i.vy*=.998,i.vz*=.998,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s;const r=i.life/i.max*.7*(.6+Math.sin(t*2+n)*.4),a=.8+Math.sin(t*3+n*.5)*.3;en.position.set(i.x,i.y,i.z),en.scale.setScalar(a),en.updateMatrix(),ln.setMatrixAt(n,en.matrix),Va.copy(fp).multiplyScalar(r),ln.setColorAt(n,Va),e=!0}ln.instanceMatrix.needsUpdate=!0,e&&(ln.instanceColor.needsUpdate=!0)}function jy(s,t){const e=new re,n=.35+w()*.45,i=new K({color:2777128,roughness:.7,side:Lt}),o=3+Math.floor(w()*2);for(let v=0;v<o;v++){const M=v/o*6.28+w()*.3,A=new I(new ge(.08,.035),i);A.position.set(Math.cos(M)*.05,.02,Math.sin(M)*.05),A.rotation.x=-1.4,A.rotation.y=-M,e.add(A)}const r=new K({color:F.dandStem,roughness:.8}),a=new I(new Mt(.008,.012,n,4),r);a.position.y=n/2,e.add(a);const c=new q({color:14540236,transparent:!0,opacity:.3});for(let v=0;v<4;v++){const M=n*.2+v*n*.18,A=new I(new Mt(.002,.001,.02,3),c);A.position.set(.01,M,0),A.rotation.z=-.8,e.add(A)}const l=new K({color:F.fern,roughness:.7,side:Lt}),h=new I(new ge(.07,.03),l);h.position.set(.03,n*.15,0),h.rotation.z=-.4,e.add(h);const u=new K({color:F.dandHead,emissive:F.dandSeedGlow,emissiveIntensity:.2,transparent:!0,opacity:.85}),f=new I(new j(.07,6,5),u);f.position.y=n+.05,e.add(f);const d=new K({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.5,roughness:0,metalness:.5}),g=new I(new j(.012,4,3),d);g.position.set(.04,n+.07,.03),e.add(g);const _=new q({color:F.dandSeed,transparent:!0,opacity:.7});for(let v=0;v<8;v++){const M=v/8*6.28+w()*.2,A=new I(new Hn(.015,.05,3),_);A.position.set(Math.cos(M)*.06,n+.05+w()*.04,Math.sin(M)*.06),A.rotation.x=(w()-.5)*.6,A.rotation.z=(w()-.5)*.6,e.add(A);const T=new q({color:16777215,transparent:!0,opacity:.3}),b=new I(new Mt(.001,.001,.03,3),T);b.position.set(Math.cos(M)*.08,n+.08,Math.sin(M)*.08),b.rotation.set((w()-.5)*.5,0,(w()-.5)*.5),e.add(b);const S=new q({color:15658717,transparent:!0,opacity:.15});for(let y=0;y<2;y++){const x=M+(y-.5)*.5,C=new I(new Mt(8e-4,8e-4,.025,3),S);C.position.set(Math.cos(x)*.075,n+.09,Math.sin(x)*.075),C.rotation.set((w()-.5)*.8,0,(w()-.5)*.8),e.add(C)}}const p=new K({color:3811856,roughness:.9});for(let v=0;v<4;v++){const M=v/4*6.28+w()*.5,A=new I(new j(.005,3,3),p);A.scale.set(.6,1.5,.6),A.position.set(Math.cos(M)*.04,n+.04,Math.sin(M)*.04),e.add(A)}const m=new q({color:1716240,transparent:!0,opacity:.15});for(let v=0;v<3;v++){const M=v/3*6.28,A=new I(new Mt(.001,.001,n*.7,3),m);A.position.set(Math.cos(M)*.01,n*.35,Math.sin(M)*.01),e.add(A)}const E=new q({color:13426107,transparent:!0,opacity:.2});for(let v=0;v<5;v++){const M=n*.1+w()*n*.7,A=w()*6.28,T=new I(new Mt(8e-4,8e-4,.012,3),E);T.position.set(Math.cos(A)*.012,M,Math.sin(A)*.012),T.rotation.z=A<3.14?-.8:.8,T.rotation.y=A,e.add(T)}return e.position.set(s,0,t),ht.add(e),{group:e,headMat:u,x:s,z:t,h:n,dispersed:!1,phase:w()*6.28,seedCount:8,regrowTimer:0}}function Ky(s,t,e,n){for(let i=0;i<s.length;i++){const o=s[i];if(o.dispersed){if(o.regrowTimer-=t,o.regrowTimer<=0){o.dispersed=!1;for(let r=2;r<o.group.children.length;r++)o.group.children[r].visible=!0}o.group.rotation.z=Math.sin(e*.9+o.phase)*.02}else{const r=o.x-n.x,a=o.z-n.z;if(r*r+a*a<1.2){o.dispersed=!0;for(let c=0;c<8;c++)dp(o.x,o.h+.05,o.z);for(let c=2;c<o.group.children.length;c++)o.group.children[c].visible=!1;o.regrowTimer=15+Math.random()*10}else o.group.rotation.z=Math.sin(e*.9+o.phase)*.04,o.headMat.emissiveIntensity=.15+Math.sin(e*1.2+o.phase)*.1}}}function Jy(s,t){const e=new re,n=1+w()*.8,i=.25+w()*.15,o=new K({color:F.thornStem,roughness:.8,emissive:662032,emissiveIntensity:.1}),r=new I(new Mt(.04,.07,n,5),o);r.position.y=n/2,e.add(r);const a=new K({color:F.thornSpike,roughness:.6}),c=4+Math.floor(w()*3);for(let M=0;M<c;M++){const A=n*.15+M/c*n*.6,T=M/c*6.28+w()*1,b=new I(new Hn(.015,.08+w()*.04,3),a);b.position.set(Math.cos(T)*.06,A,Math.sin(T)*.06),b.rotation.z=(T<3.14?1.3:-1.3)+w()*.2,b.rotation.y=T,e.add(b)}const l=new K({color:F.thornOrb,emissive:F.thornOrbGlow,emissiveIntensity:.8,transparent:!0,opacity:.35,roughness:.1,metalness:.3}),h=new I(new j(i,12,10),l);h.position.y=n+i*.5,e.add(h);const u=new K({color:16777164,emissive:F.thornOrbGlow,emissiveIntensity:1.2,transparent:!0,opacity:.6,roughness:0,metalness:.1}),f=new I(new j(i*.35,8,6),u);f.position.y=n+i*.5,e.add(f);const d=new q({color:F.thornOrbGlow,transparent:!0,opacity:.06,blending:he,depthWrite:!1}),g=new I(new j(i*2,8,6),d);g.position.y=n+i*.5,e.add(g);const _=new K({color:F.thornSpike,emissive:F.thornOrbGlow,emissiveIntensity:.3,roughness:.5}),p=6+Math.floor(w()*3);for(let M=0;M<p;M++){const A=M/p*6.28+w()*.3,T=(w()-.5)*1.2,b=.3+w()*.3,S=new I(new Hn(.018,b,4),_);S.position.set(Math.cos(A)*i*.8,n+i*.5+Math.sin(T)*i*.5,Math.sin(A)*i*.8),S.rotation.z=-T+(A<3.14?1.4:-1.4),S.rotation.y=A,e.add(S)}const m=new K({color:F.thornPetal,emissive:3344920,emissiveIntensity:.15,transparent:!0,opacity:.7,roughness:.6,side:Lt}),E=4+Math.floor(w()*2);for(let M=0;M<E;M++){const A=M/E*6.28+w()*.3,T=.2+w()*.15,b=new I(new ge(T,T*1.5),m);b.position.set(Math.cos(A)*(i+.05),n+i*.3-w()*.1,Math.sin(A)*(i+.05)),b.rotation.y=-A,b.rotation.x=-.4-w()*.3,e.add(b)}const v=new K({color:1718296,emissive:662026,emissiveIntensity:.05,side:Lt});for(let M=0;M<2;M++){const A=w()*6.28,T=new I(new ge(.15,.25),v);T.position.set(Math.cos(A)*.12,n*.3,Math.sin(A)*.12),T.rotation.y=-A,T.rotation.x=-.8,e.add(T)}return e.position.set(s,0,t),ht.add(e),{group:e,orbMat:l,hazeMat:d,phase:w()*6.28,x:s,z:t}}function Qy(s,t){const e=new re,n=2+Math.floor(w()*2),i=new K({color:1710128,roughness:.85,emissive:F.helixStem,emissiveIntensity:.1}),o=new I(new j(.18,8,6),i);o.scale.set(1.2,.5,1.2),o.position.y=.05,e.add(o);const r=[];for(let l=0;l<n;l++){const h=1.5+w()*1,u=.15+w()*.15,f=1.5+w()*1.5,d=w()*6.28,g=[],_=16;for(let U=0;U<=_;U++){const L=U/_,z=d+L*f*6.28,V=u*(.3+L*.7);g.push(new N(Math.cos(z)*V,L*h,Math.sin(z)*V))}const p=new Sr(g),m=new K({color:F.helixStem,emissive:F.helixNode,emissiveIntensity:.12,roughness:.7}),E=new I(new vn(p,20,.025+w()*.01,5,!1),m);e.add(E);const v=.1+w()*.08,A=w()<.5?new nu(v,0):new eu(v,0),T=new K({color:F.helixPod,emissive:F.helixPodGlow,emissiveIntensity:.5+w()*.3,transparent:!0,opacity:.65,roughness:.2,metalness:.2}),b=new I(A,T),S=p.getPoint(1);b.position.copy(S),b.rotation.set(w()*3,w()*3,w()*3),e.add(b),r.push(T);const y=new I(new j(v*2.5,6,4),new q({color:F.helixPodGlow,transparent:!0,opacity:.05,blending:he,depthWrite:!1}));y.position.copy(S),e.add(y);const x=1+Math.floor(w()*2);for(let U=0;U<x;U++){const L=.3+w()*.5,z=p.getPoint(L),V=new K({color:F.helixRing,emissive:F.helixPodGlow,emissiveIntensity:.2,transparent:!0,opacity:.45,roughness:.3}),G=new I(new Se(.1+w()*.08,.008,6,12),V);G.position.copy(z),G.rotation.set(w()*3,w()*3,w()*3),e.add(G)}const C=2+Math.floor(w()*2);for(let U=0;U<C;U++){const L=.2+U/C*.6,z=p.getPoint(L),V=new K({color:F.helixNode,emissive:F.helixPodGlow,emissiveIntensity:.35,transparent:!0,opacity:.5}),G=new I(new j(.025+w()*.015,5,4),V);G.position.copy(z),e.add(G)}}const a=new K({color:F.helixStem,emissive:F.helixNode,emissiveIntensity:.06,roughness:.8}),c=2+Math.floor(w()*2);for(let l=0;l<c;l++){const h=l/c*6.28+w()*.5,u=.3+w()*.4,f=new I(new Mt(.006,.015,u,3),a);f.position.set(Math.cos(h)*.12,u*.3,Math.sin(h)*.12),f.rotation.z=(h<3.14?.8:-.8)+w()*.3,f.rotation.y=h,e.add(f)}return e.position.set(s,0,t),ht.add(e),{group:e,podMats:r,phase:w()*6.28}}function tw(s,t){const e=new re,n=.25+w()*.1,i=new K({color:1718309,roughness:.85,emissive:662032,emissiveIntensity:.06});for(let f=0;f<3;f++){const d=f/3*6.28+w()*.5,g=new I(new Mt(.01,.035,.25+w()*.15,4),i);g.position.set(Math.cos(d)*n*.6,.06,Math.sin(d)*n*.6),g.rotation.z=d<3.14?1:-1,g.rotation.y=d,e.add(g)}const o=new K({color:F.snapBody,emissive:F.snapBodyGlow,emissiveIntensity:.4,transparent:!0,opacity:.7,roughness:.4,metalness:.1}),r=new I(new j(n,10,8),o);r.position.y=n+.05,r.scale.set(1,.85,1),e.add(r);const a=new K({color:1730116,emissive:F.snapBodyGlow,emissiveIntensity:.25,transparent:!0,opacity:.6}),c=new I(new Se(n*.45,.02,6,12),a);c.position.y=n*1.7,c.rotation.x=Math.PI/2,e.add(c);const l=5+Math.floor(w()*3),h=[],u=[];for(let f=0;f<l;f++){const d=f/l*6.28+w()*.3,g=w()*6.28,_=3+Math.floor(w()*2),p=.2+w()*.1,m=[],E=new me;E.position.set(Math.cos(d)*n*.6,n*1.4,Math.sin(d)*n*.6),E.rotation.y=d,e.add(E);let v=E;for(let b=0;b<_;b++){const S=b/_,y=.02*(1-S*.6),x=new K({color:F.snapFrond,emissive:F.snapBodyGlow,emissiveIntensity:.08+S*.15,roughness:.6}),C=new I(new Mt(y*.7,y,p,4),x);C.position.y=b===0?0:p,C.geometry.translate(0,p/2,0),v.add(C),m.push(C),v=C}const M=new K({color:F.snapTip,emissive:F.snapTipGlow,emissiveIntensity:.6,transparent:!0,opacity:.7,roughness:.2}),A=new I(new j(.025+w()*.015,5,4),M);A.position.y=p,v.add(A),u.push(M);const T=new I(new j(.06,4,3),new q({color:F.snapTipGlow,transparent:!0,opacity:.04,blending:he,depthWrite:!1}));A.add(T),h.push({segments:m,baseAngle:d,phaseOffset:g,segLen:p})}return e.position.set(s,0,t),ht.add(e),{group:e,body:r,bodyMat:o,tipMats:u,fronds:h,phase:w()*6.28,x:s,z:t}}function ew(s,t,e,n){for(let i=0;i<s.length;i++){const o=s[i],r=Math.sin(e*1.5+o.phase)*.08;o.body.scale.set(1+r,.85+r*.5,1+r),o.bodyMat.emissiveIntensity=(.3+Math.sin(e*2+o.phase)*.15)*n;for(let a=0;a<o.fronds.length;a++){const c=o.fronds[a],l=1.2+a%3*.3;for(let h=0;h<c.segments.length;h++){const u=c.segments[h],f=.15+h*.12,d=Math.sin(e*l+c.phaseOffset+h*.5)*f,g=Math.cos(e*l*.7+c.phaseOffset+h*.3)*f*.6;u.rotation.z=d,u.rotation.x=g}}for(let a=0;a<o.tipMats.length;a++){const c=Math.sin(e*2.5+o.phase+a*1.2)*.5+.5;o.tipMats[a].emissiveIntensity=(.4+c*.4)*n}}}function nw(s,t,e){const n=new re,i=new K({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:.8,transparent:!0,opacity:.5,roughness:.2,metalness:.1,side:Lt}),o=new I(new j(.5,8,6,0,6.28,0,Math.PI/2),i);o.scale.set(1,.6,1),o.position.y=0,n.add(o);const r=new K({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:1,transparent:!0,opacity:.6}),a=new I(new Se(.48,.025,5,12),r);a.rotation.x=Math.PI/2,a.position.y=-.02,n.add(a);const c=new I(new j(.2,6,4),new q({color:F.jellyGlow,transparent:!0,opacity:.7}));c.position.y=-.05,n.add(c);const l=new q({color:12312063,transparent:!0,opacity:.3});for(let E=-1;E<=1;E+=2){const v=new I(new j(.06,4,3),l);v.scale.set(.6,1.5,.6),v.position.set(E*.08,-.03,0),n.add(v)}const h=new q({color:15663103,transparent:!0,opacity:.7});for(let E=0;E<5;E++){const v=w()*6.28,M=w()*.8,A=new I(new j(.02,3,3),h);A.position.set(Math.cos(v)*M*.35,.1-M*.15,Math.sin(v)*M*.35),n.add(A)}const u=new K({color:F.jellyTent,emissive:F.jellyGlow,emissiveIntensity:.4,transparent:!0,opacity:.4}),f=new q({color:F.jellyGlow,transparent:!0,opacity:.6});for(let E=0;E<6;E++){const v=E/6*6.28,M=.4+w()*.6,A=new I(new Mt(.015,.008,M,3),u);A.position.set(Math.cos(v)*.25,-M/2-.05,Math.sin(v)*.25),n.add(A);const T=new I(new j(.012,3,3),f);T.position.set(Math.cos(v)*.25,-M-.06,Math.sin(v)*.25),n.add(T)}const d=new q({color:F.jellyGlow,transparent:!0,opacity:.12});for(let E=0;E<8;E++){const v=E/8*6.28,M=new I(new Mt(.002,.002,.4,3),d);M.position.set(Math.cos(v)*.2,.05,Math.sin(v)*.2),M.rotation.z=Math.PI/2-.3,M.rotation.y=-v,n.add(M)}const g=new K({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:.6,transparent:!0,opacity:.4});for(let E=0;E<10;E++){const v=E/10*6.28,M=new I(new j(.02,3,3),g);M.scale.set(1,.5,.8),M.position.set(Math.cos(v)*.46,-.04,Math.sin(v)*.46),n.add(M)}const _=new K({color:F.jellyTent,emissive:F.jellyGlow,emissiveIntensity:.5,transparent:!0,opacity:.35}),p=new I(new Mt(.02,.01,.35,4),_);p.position.y=-.2,n.add(p);const m=new q({color:14548991,transparent:!0,opacity:.4});for(let E=0;E<3;E++){const v=E/3*6.28,M=new I(new j(.008,3,3),m);M.position.set(Math.cos(v)*.25,-.55-w()*.3,Math.sin(v)*.25),n.add(M)}return n.position.set(s,t,e),ht.add(n),{group:n,bellMat:i,phase:w()*6.28,driftAng:w()*6.28,homeX:s,homeZ:e,floatY:t,wobble:.5+w()*.5,_init:!0,_state:"drift",_stT:20+Math.random()*30,_migrateAng:0,_pulseSync:0}}function iw(s,t){const e=new re,n=new K({color:F.puffBody,emissive:F.puffGlow,emissiveIntensity:.3,roughness:.8}),i=new I(new j(.3,8,6),n);i.position.y=.35,e.add(i);const o=new K({color:16773344,emissive:F.puffGlow,emissiveIntensity:.15,roughness:.9}),r=new I(new j(.18,6,4),o);r.scale.set(.7,.9,.3),r.position.set(0,.32,.2),e.add(r);const a=new I(new j(.22,7,5),n);a.position.y=.65,e.add(a);const c=[];for(let A=-1;A<=1;A+=2){const T=new I(new Hn(.06,.15,4),n);T.position.set(A*.13,.85,0),T.rotation.z=A*.3,e.add(T),c.push({mesh:T,side:A,baseRotZ:A*.3});const b=new I(new Hn(.03,.08,4),new K({color:F.puffCheek,emissive:F.puffCheek,emissiveIntensity:.2}));b.position.set(A*.13,.84,.01),b.rotation.z=A*.3,e.add(b),c.push({mesh:b,side:A,baseRotZ:A*.3})}const l=new q({color:F.puffEye}),h=[];for(let A=-1;A<=1;A+=2){const T=new I(new j(.035,4,4),l);T.position.set(A*.09,.68,.18),e.add(T),h.push(T);const b=new q({color:16777215}),S=new I(new j(.012,3,3),b);S.position.set(A*.09+A*.015,.695,.2),e.add(S),h.push(S)}const u=new q({color:4469555}),f=new I(new j(.015,3,3),u);f.position.set(0,.63,.22),e.add(f);const d=new K({color:F.puffCheek,emissive:F.puffCheek,emissiveIntensity:.3});for(let A=-1;A<=1;A+=2){const T=new I(new j(.04,4,3),d);T.position.set(A*.15,.61,.15),e.add(T)}const g=new q({color:15654348,transparent:!0,opacity:.5});for(let A=-1;A<=1;A+=2)for(let T=0;T<2;T++){const b=new I(new Mt(.002,.002,.06,3),g);b.position.set(A*.12,.62-T*.03,.2),b.rotation.z=A*.7+T*A*.2,b.rotation.x=-.1,e.add(b)}for(let A=-1;A<=1;A+=2){const T=new I(new j(.07,4,3),n);T.position.set(A*.12,.07,.05),T.scale.set(1,.5,1.3),e.add(T);const b=new K({color:16755370,emissive:16746632,emissiveIntensity:.1});for(let S=0;S<3;S++){const y=S/3*6.28,x=new I(new j(.012,3,3),b);x.position.set(A*.12+Math.cos(y)*.03,.03,.05+Math.sin(y)*.03),e.add(x)}}const _=new K({color:16777215,emissive:F.puffGlow,emissiveIntensity:.4,roughness:.9}),p=new I(new j(.06,5,4),_);p.position.set(0,.38,-.28),e.add(p);const m=new K({color:F.puffBody,emissive:F.puffGlow,emissiveIntensity:.2,roughness:1});for(let A=0;A<6;A++){const T=w()*6.28,b=w()*1.2,S=new I(new j(.01,3,3),m);S.position.set(Math.cos(T)*.28,.25+b*.2,Math.sin(T)*.28),e.add(S)}const E=new q({color:F.puffBody});for(let A=-1;A<=1;A+=2){const T=new I(new Mt(.003,.003,.04,3),E);T.position.set(A*.09,.72,.17),T.rotation.z=A*.3,e.add(T)}const v=new q({color:5583684,transparent:!0,opacity:.5}),M=new I(new Mt(.002,.002,.03,3),v);return M.position.set(0,.59,.22),M.rotation.z=Math.PI/2,e.add(M),e.position.set(s,0,t),ht.add(e),{group:e,ears:c,eyes:h,tail:p,phase:w()*6.28,wanderAng:w()*6.28,speed:.6+w()*.8,hopTimer:0,hopPhase:w()*6.28,homeX:s,homeZ:t,state:"idle",idleTimer:w()*3,_init:!0,_followT:0,_scaredT:0,_huddleTarget:-1,_baseY:0,_lastTX:s,_lastTZ:t,_blinkTimer:2+Math.random()*4,_blinkState:0}}function sw(s,t){const e=new re,n=new K({color:F.deerBody,emissive:F.deerGlow,emissiveIntensity:.5,transparent:!0,opacity:.7,roughness:.3}),i=new I(new j(.4,7,5),n);i.scale.set(1,.8,1.5),i.position.y=.9,e.add(i);const o=new K({color:13431039,emissive:F.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.5}),r=new I(new j(.15,5,4),o);r.scale.set(.8,.6,.5),r.position.set(0,.78,.25),e.add(r);const a=new re;a.position.set(0,1.15,.3);const c=new I(new Mt(.08,.12,.4,5),n);c.position.set(0,.1,.08),c.rotation.x=-.4,a.add(c);const l=new I(new j(.14,6,5),n);l.position.set(0,.22,.2),a.add(l);const h=new I(new j(.07,4,3),n);h.scale.set(1,.7,1.4),h.position.set(0,.17,.35),a.add(h);const u=new q({color:2245717}),f=new I(new j(.02,3,3),u);f.position.set(0,.17,.43),a.add(f);const d=new q({color:F.deerEye});for(let x=-1;x<=1;x+=2){const C=new I(new j(.025,4,3),d);C.position.set(x*.09,.25,.28),a.add(C);const U=new I(new j(.008,3,3),new q({color:16777215}));U.position.set(x*.085,.26,.29),a.add(U);const L=new q({color:F.deerBody,transparent:!0,opacity:.5}),z=new I(new Mt(.002,.002,.03,3),L);z.position.set(x*.1,.27,.28),z.rotation.z=x*.6,a.add(z)}for(let x=-1;x<=1;x+=2){const C=new I(new Hn(.04,.14,4),n);C.position.set(x*.1,.37,.15),C.rotation.z=x*.4,a.add(C)}const g=new K({color:F.deerAntler,emissive:F.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.8});for(let x=-1;x<=1;x+=2){const C=new I(new Mt(.015,.02,.25,3),g);C.position.set(x*.08,.42,.12),C.rotation.z=x*.5,a.add(C);const U=new I(new Mt(.01,.015,.15,3),g);U.position.set(x*.15,.55,.1),U.rotation.z=x*.8,a.add(U);const L=new I(new Mt(.008,.012,.1,3),g);L.position.set(x*.11,.5,.16),L.rotation.z=x*.3,L.rotation.x=-.5,a.add(L);const z=new I(new j(.012,3,3),new q({color:F.deerGlow,transparent:!0,opacity:.8}));z.position.set(x*.18,.61,.09),a.add(z)}const _=new K({color:F.deerBody,emissive:F.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),p=new I(new Mt(.01,.02,.1,3),_);p.position.set(0,.11,.28),p.rotation.x=.3,a.add(p);const m=new q({color:1122850});for(let x=-1;x<=1;x+=2){const C=new I(new j(.006,3,3),m);C.position.set(x*.02,.16,.42),a.add(C)}e.add(a);const E=[{x:-.15,z:.3,label:"FL"},{x:.15,z:.3,label:"FR"},{x:-.15,z:-.3,label:"BL"},{x:.15,z:-.3,label:"BR"}],v=new K({color:6715272,emissive:F.deerGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),M=[];for(let x=0;x<4;x++){const C=E[x],U=new re;U.position.set(C.x,.65,C.z);const L=new I(new Mt(.025,.035,.35,4),n);L.position.y=-.175,U.add(L);const z=new re;z.position.set(0,-.35,0);const V=new I(new Mt(.02,.03,.3,4),n);V.position.y=-.15,z.add(V);const G=new I(new Mt(.04,.032,.04,4),v);G.position.y=-.3,z.add(G);const Z=new K({color:14544639,emissive:F.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),W=new I(new j(.025,3,3),Z);W.scale.set(1.3,.5,1.3),W.position.y=-.25,z.add(W),U.add(z),e.add(U),M.push({upper:U,lower:z,isFront:x<2,side:C.x<0?-1:1})}const A=new re;A.position.set(0,1.1,-.55);const T=new I(new Hn(.05,.15,4),new K({color:16777215,emissive:F.deerGlow,emissiveIntensity:1,transparent:!0,opacity:.8}));A.add(T),e.add(A);const b=new q({color:13434862,transparent:!0,opacity:.3});for(let x=0;x<4;x++){const C=new I(new j(.02,3,3),b);C.position.set((w()-.5)*.25,.8+w()*.3,(w()-.5)*.4),e.add(C)}const S=new q({color:F.deerBody,transparent:!0,opacity:.15});for(let x=0;x<3;x++){const C=new I(new Mt(.002,.002,.2,3),S);C.position.set(.3,.85-x*.06,0),C.rotation.z=Math.PI/2+.3,e.add(C)}const y=new K({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.4,roughness:0,metalness:.5});for(let x=0;x<3;x++){const C=new I(new j(.008,3,3),y);C.position.set((w()-.5)*.3,.9+w()*.3,(w()-.5)*.35),e.add(C)}return e.position.set(s,0,t),ht.add(e),{group:e,mat:n,phase:w()*6.28,wanderAng:w()*6.28,speed:.6+w()*.4,walkTimer:0,legCycle:0,homeX:s,homeZ:t,state:"walk",pauseTimer:0,neckPivot:a,legPivots:M,tailPivot:A,fleeTimer:0,headLook:0,headBob:0,_init:!0,_stT:0,_drinkTgt:null,_zigTimer:0,_zigDir:1,_baseY:0,_lastTX:s,_lastTZ:t}}function ow(s,t,e){const n=new re,i=new K({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.3,roughness:.7}),o=new I(new Mt(.04,.05,.3,5),i);o.rotation.x=Math.PI/2,n.add(o);const r=new K({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.5,roughness:.6});for(let p=0;p<3;p++){const m=new I(new Se(.045,.006,4,8),r);m.position.z=-.05+p*.06,m.rotation.x=0,n.add(m)}const a=new I(new j(.05,5,4),i);a.position.z=.18,n.add(a);const c=new K({color:1122867,roughness:.2,metalness:.4});for(let p=-1;p<=1;p+=2){const m=new I(new j(.018,4,3),c);m.position.set(p*.03,.01,.21),n.add(m)}for(let p=-1;p<=1;p+=2){const m=new I(new Mt(.005,.005,.15,3),i);m.position.set(p*.03,.03,.22),m.rotation.x=-.6,m.rotation.z=p*.4,n.add(m);const E=new q({color:F.mothGlow,transparent:!0,opacity:.7}),v=new I(new j(.015,3,3),E);v.scale.set(2,.5,1),v.position.set(p*.05,.12,.28),n.add(v)}const l=new K({color:F.mothWing,emissive:F.mothGlow,emissiveIntensity:.8,transparent:!0,opacity:.6,side:Lt,roughness:.4});n._wingPivots=[];for(let p=-1;p<=1;p+=2){const m=new re;m.position.set(p*.04,0,.02);const E=new I(new j(.2,6,4),l);E.scale.set(1.8,.08,1.2),E.position.set(p*.18,0,.02),m.add(E);const v=new I(new j(.12,5,3),l);v.scale.set(1.5,.06,1),v.position.set(p*.12,0,-.1),m.add(v);const M=new K({color:F.mothWing,emissive:F.mothGlow,emissiveIntensity:.6,transparent:!0,opacity:.45,side:Lt}),A=new I(new ge(.03,.12),M);A.position.set(p*.1,0,-.18),A.rotation.y=p*.2,m.add(A);const T=new q({color:F.mothSpot,transparent:!0,opacity:.9}),b=new I(new j(.03,4,3),T);b.position.set(p*.2,.02,.03),m.add(b);const S=new I(new j(.018,3,3),T);S.position.set(p*.1,.02,-.08),m.add(S);const y=new q({color:F.mothGlow,transparent:!0,opacity:.25});for(let x=0;x<2;x++){const C=new I(new Mt(.002,.002,.2,3),y);C.position.set(p*.15,.01,-.02+x*.06),C.rotation.z=Math.PI/2+p*(.15+x*.15),m.add(C)}n.add(m),n._wingPivots.push({pivot:m,side:p})}const h=new q({color:F.mothGlow,transparent:!0,opacity:.25});for(let p=0;p<3;p++){const m=new I(new j(.008,3,3),h);m.position.set((w()-.5)*.04,0,-.15-p*.05),n.add(m)}const u=new q({color:4473907,transparent:!0,opacity:.5}),f=new I(new Se(.015,.003,4,8,Math.PI*1.5),u);f.position.set(0,-.02,.2),f.rotation.x=.4,n.add(f);const d=new K({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.4,roughness:1});for(let p=0;p<5;p++){const m=w()*6.28,E=new I(new j(.008,3,3),d);E.position.set(Math.cos(m)*.04,Math.sin(m)*.04,w()*.15-.05),n.add(E)}const g=new q({color:F.mothBody,transparent:!0,opacity:.4});for(let p=-1;p<=1;p+=2)for(let m=0;m<3;m++){const E=new I(new Mt(.002,.002,.06,3),g);E.position.set(p*.04,-.03,-.05+m*.06),E.rotation.z=p*.8,E.rotation.x=-.3,n.add(E)}const _=new q({color:F.mothGlow,transparent:!0,opacity:.35});for(let p=-1;p<=1;p+=2)for(let m=0;m<5;m++){const E=m/5*Math.PI-Math.PI/2,v=new I(new j(.006,3,3),_);v.position.set(p*(.3+Math.cos(E)*.05),Math.sin(E)*.02,.02+m*.04),n.add(v)}return n.position.set(s,t,e),ht.add(n),{group:n,wingMat:l,phase:w()*6.28,orbitAng:w()*6.28,orbitR:2+w()*4,centerX:s,centerZ:e,floatY:t,flapSpeed:6+w()*4,_init:!0,_state:"patrol",_stT:0,_attractTarget:null,_restTree:null}}function rw(s,t,e){const n=new re,i=new q({color:F.wispCore}),o=new I(new j(.08,6,4),i);n.add(o);const r=new q({color:16777215,transparent:!0,opacity:.7,wireframe:!0}),a=new I(new ys(.06,0),r);n.add(a);const c=new q({color:F.wispGlow,transparent:!0,opacity:.5}),l=new I(new j(.18,6,4),c);n.add(l);const h=new q({color:F.wispGlow,transparent:!0,opacity:.25}),u=new I(new Se(.22,.008,4,12),h);u.rotation.x=Math.PI/2,n.add(u);const f=new q({color:F.wispTrail,transparent:!0,opacity:.15}),d=new I(new j(.35,5,4),f);n.add(d);const g=new q({color:16777215,transparent:!0,opacity:.8}),_=new I(new j(.02,3,3),g);_.position.set(.15,0,0),n.add(_);const p=[];for(let b=0;b<3;b++){const S=new q({color:F.wispCore,transparent:!0,opacity:.35}),y=new I(new j(.01,3,3),S);y.position.set((w()-.5)*.1,-.1-b*.08,(w()-.5)*.1),n.add(y),p.push(y)}const m=new q({color:F.wispGlow,transparent:!0,opacity:.18}),E=[];for(let b=0;b<3;b++){const S=b/3*6.28+w()*.5,y=.15+w()*.1,x=new I(new Mt(.003,.001,y,3),m);x.position.set(Math.cos(S)*.1,w()*.08,Math.sin(S)*.1),x.rotation.z=Math.PI/3*(S<3.14?1:-1),x.rotation.y=S,n.add(x),E.push({mesh:x,baseAng:S})}const v=new q({color:F.wispGlow,transparent:!0,opacity:.12}),M=new I(new Se(.26,.005,4,10),v);M.rotation.x=1.2,M.rotation.z=.8,n.add(M);const A=new q({color:16777215,transparent:!0,opacity:.5});for(let b=0;b<4;b++){const S=w()*6.28,y=w()*.8,x=new I(new j(.006,3,3),A);x.position.set(Math.cos(S)*.06,Math.sin(y)*.06,Math.sin(S)*.06),n.add(x)}const T=new q({color:F.wispCore,transparent:!0,opacity:.2});for(let b=0;b<4;b++){const S=new I(new j(.004,3,3),T);S.position.set(.03+w()*.04,-.05-b*.04,w()*.04),n.add(S)}return n.scale.setScalar(.5),n.position.set(s,t,e),ht.add(n),{group:n,glowMat:c,hazeMat:f,embers:p,tendrils:E,plasmaMat:m,facet:a,halo:u,halo2:M,phase:w()*6.28,targetX:s,targetY:t,targetZ:e,velX:0,velY:0,velZ:0,scatter:0}}function aw(s,t){const e=new re,n=ih,i=8+Math.floor(w()*5),o=new K({color:F.fairyMush,emissive:F.fairyGlow,emissiveIntensity:.2,roughness:.5}),r=new K({color:F.mushStem,roughness:.7,emissive:F.fairyGlow,emissiveIntensity:.05});for(let A=0;A<i;A++){const T=A/i*6.28+w()*.15,b=n+w()*.3-.15,S=.15+w()*.2,y=new I(Sn.mushStem,r);y.scale.setScalar(S),y.position.set(Math.cos(T)*b,S*.3,Math.sin(T)*b),e.add(y);const x=new I(Sn.mushCap,o);x.scale.set(S,S*.4,S),x.position.set(Math.cos(T)*b,S*.55,Math.sin(T)*b),e.add(x);const C=new q({color:16777215,transparent:!0,opacity:.7}),U=new I(new j(S*.08,3,3),C);U.position.set(Math.cos(T)*b,S*.6,Math.sin(T)*b),e.add(U)}const a=new K({color:8934792,emissive:F.fairyGlow,emissiveIntensity:.1,roughness:.6});for(let A=0;A<5;A++){const T=w()*6.28,b=n+w()*.6-.3,S=.06+w()*.06,y=new I(Sn.mushCap,a);y.scale.set(S,S*.5,S),y.position.set(Math.cos(T)*b,S*.35,Math.sin(T)*b),e.add(y)}const c=new K({color:1725733,emissive:664080,emissiveIntensity:.05,roughness:.9});for(let A=0;A<4;A++){const T=w()*6.28,b=w()*n*.8,S=new I(new j(.08+w()*.08,4,3),c);S.scale.set(1.5,.2,1.5),S.position.set(Math.cos(T)*b,.01,Math.sin(T)*b),e.add(S)}const l=new K({color:4478310,emissive:F.fairyGlow,emissiveIntensity:.05,roughness:.85}),h=new I(new j(.12,5,3),l);h.scale.set(1.2,.3,1),h.position.y=.03,e.add(h);const u=new q({color:F.fairyGlow,transparent:!0,opacity:.2}),f=[];for(let A=0;A<8;A++){const T=new I(new j(.012,3,3),u),b=(w()-.5)*n*.8,S=(w()-.5)*n*.8;T.position.set(b,.05+w()*.3,S),e.add(T),f.push({mesh:T,baseX:b,baseZ:S,drift:w()*6.28,speed:.2+w()*.3})}const d=new q({color:F.fairyRing,transparent:!0,opacity:0,side:Lt}),g=new I(new Co(.3,n-.3,16),d);g.rotation.x=-Math.PI/2,g.position.y=.02,e.add(g);const _=new q({color:F.fairyGlow,transparent:!0,opacity:.08});for(let A=0;A<6;A++){const T=w()*6.28,b=T+.5+w()*1.5,S=n*.6+w()*n*.4,y=new I(new Mt(.002,.002,S,3),_);y.position.set(Math.cos((T+b)/2)*n*.4,.005,Math.sin((T+b)/2)*n*.4),y.rotation.x=Math.PI/2,y.rotation.z=T,e.add(y)}const p=new K({color:4864560,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<3;A++){const T=w()*6.28,b=w()*n*.7,S=new I(new j(.03,4,3),p);S.scale.set(1.3,.3,1.3),S.position.set(Math.cos(T)*b,.008,Math.sin(T)*b),e.add(S)}const m=new K({color:7833702,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<2;A++){const T=new I(new Ve(.02+w()*.02,4),m);T.position.set((w()-.5)*.08,.06,(w()-.5)*.06),T.rotation.x=-Math.PI/2+w()*.4,e.add(T)}const E=[];for(let A=0;A<5;A++){const T=w()*6.28,b=w()*n*.9,S=new q({color:8978346,transparent:!0,opacity:.25}),y=new I(new j(.005,3,3),S);y.position.set(Math.cos(T)*b,.01,Math.sin(T)*b),e.add(y),E.push(y)}const v=new q({color:657926,transparent:!0,opacity:.15,side:Lt}),M=new I(new Co(n*.5,n*.85,12),v);return M.rotation.x=-Math.PI/2,M.position.y=.008,e.add(M),e.position.set(s,0,t),ht.add(e),{group:e,mushMat:o,discMat:d,sporeMat:u,spores:f,glowWorms:E,x:s,z:t,ringR:n,phase:w()*6.28,glowIntensity:0,active:!1}}function cw(s,t,e){const n=new re,i=new K({color:F.bubbleIris,emissive:F.bubbleIris,emissiveIntensity:.15,transparent:!0,opacity:.25,roughness:0,metalness:.6}),o=new I(Sn.bubble,i);n.add(o);const r=new q({color:15650047,transparent:!0,opacity:.1}),a=new I(new Se(.13,.003,4,10),r);a.rotation.x=.5,a.rotation.y=w()*3,n.add(a);const c=new I(new Se(.11,.003,4,10),r);c.rotation.x=-.8,c.rotation.z=1.2,n.add(c);const l=new q({color:F.bubbleShine,transparent:!0,opacity:.5}),h=new I(new j(.04,4,3),l);h.position.set(.05,.07,.08),n.add(h);const u=new q({color:15658751,transparent:!0,opacity:.2}),f=new I(new j(.025,3,3),u);f.position.set(-.06,-.04,-.06),n.add(f);const d=new q({color:16755438,transparent:!0,opacity:.12}),g=new I(new j(.06,4,3),d);g.position.set(.02,-.02,.01),n.add(g);const _=new q({color:16772863,transparent:!0,opacity:.08}),p=new I(new j(.12,5,4),_);n.add(p);const m=[16764125,13426175,14548940];for(let S=0;S<3;S++){const y=new q({color:m[S],transparent:!0,opacity:.06}),x=new I(new Se(.14-S*.02,.002,4,8),y);x.position.y=-.04+S*.04,x.rotation.x=Math.PI/2,n.add(x)}const E=new q({color:16777215,transparent:!0,opacity:.6});for(let S=0;S<3;S++){const y=w()*6.28,x=w()*Math.PI-Math.PI/2,C=new I(new j(.003,3,3),E);C.position.set(Math.cos(y)*Math.cos(x)*.14,Math.sin(x)*.14,Math.sin(y)*Math.cos(x)*.14),n.add(C)}const v=new q({color:11189196,transparent:!0,opacity:.1}),M=new I(new j(.015,3,3),v);M.position.set((w()-.5)*.04,(w()-.5)*.04,(w()-.5)*.04),n.add(M);const A=new q({color:F.bubbleIris,transparent:!0,opacity:.15}),T=new I(new j(.04,4,3),A);T.scale.set(1.3,.6,1.3),T.position.y=-.12,n.add(T);const b=.6+w()*.8;return n.scale.setScalar(b),n.position.set(s,t,e),ht.add(n),{group:n,shellMat:i,phase:w()*6.28,driftAng:w()*6.28,driftSpeed:.3+w()*.5,floatY:t,homeX:s,homeZ:e,bobAmp:.3+w()*.4,popped:!1,popTimer:0,sc:b}}function lw(s,t){const e=new re,n=1.5+w()*1,i=new K({color:329746,roughness:.9}),o=new I(new Ve(n*.85,10),i);o.rotation.x=-Math.PI/2,o.position.y=.005,e.add(o);const r=new K({color:F.pondWater,emissive:F.pondGlow,emissiveIntensity:.2,transparent:!0,opacity:.55,roughness:.05,metalness:.4}),a=new I(new Ve(n,12),r);a.rotation.x=-Math.PI/2,a.position.y=.03,e.add(a);const c=new K({color:3816002,roughness:.85}),l=5+Math.floor(w()*4);for(let L=0;L<l;L++){const z=L/l*6.28+w()*.3,V=n+w()*.2-.1,G=.06+w()*.08,Z=new I(new j(G,4,3),c);Z.scale.set(1+w()*.5,.4+w()*.3,1+w()*.5),Z.position.set(Math.cos(z)*V,G*.2,Math.sin(z)*V),Z.rotation.set(w(),w(),w()),e.add(Z)}const h=new K({color:1725728,roughness:.7,side:Lt});for(let L=0;L<3;L++){const z=w()*6.28,V=n*.85+w()*.2;for(let G=0;G<3;G++){const Z=new I(new ge(.015,.15+w()*.1),h);Z.position.set(Math.cos(z)*V+(w()-.5)*.05,.08,Math.sin(z)*V+(w()-.5)*.05),Z.rotation.y=w()*3,Z.rotation.x=-.2,e.add(Z)}}const u=new q({color:11197934,transparent:!0,opacity:.08}),f=[];for(let L=0;L<3;L++){const z=new I(new Se(1,.004,4,20),u.clone());z.rotation.x=Math.PI/2,z.position.y=.036,e.add(z),f.push({mesh:z,phase:L/3})}const d=new K({color:F.lilyPad,roughness:.6,side:Lt}),g=4+Math.floor(w()*2),_=[];for(let L=0;L<g;L++){const z=w()*6.28,V=w()*n*.6,G=.15+w()*.15,Z=new I(new Ve(G,8),d);Z.rotation.x=-Math.PI/2,Z.position.set(Math.cos(z)*V,.05,Math.sin(z)*V),e.add(Z);const W=new q({color:1724448,transparent:!0,opacity:.3}),rt=new I(new Mt(.002,.002,G*1.5,3),W);rt.position.set(Math.cos(z)*V,.052,Math.sin(z)*V),rt.rotation.x=Math.PI/2,rt.rotation.z=w()*3,e.add(rt),_.push({mesh:Z,phase:w()*6.28})}const p=new K({color:F.lilyFlower,emissive:F.lilyGlow,emissiveIntensity:.4,transparent:!0,opacity:.85,side:Lt}),m=.08;for(let L=0;L<6;L++){const z=L/6*6.28,V=new I(new ge(.06,.05),p);V.position.set(_[0].mesh.position.x+Math.cos(z)*.05,m,_[0].mesh.position.z+Math.sin(z)*.05),V.rotation.x=-1,V.rotation.y=-z,e.add(V)}const E=new K({color:16777130,emissive:F.lilyGlow,emissiveIntensity:.8}),v=new I(new j(.025,4,3),E);if(v.position.set(_[0].mesh.position.x,m+.02,_[0].mesh.position.z),e.add(v),_.length>2){const L=new K({color:F.lilyFlower,emissive:F.lilyGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),z=new I(new j(.03,5,4),L);z.scale.set(.8,1.2,.8),z.position.set(_[2].mesh.position.x,.09,_[2].mesh.position.z),e.add(z)}const M=new K({color:3815477,roughness:.8,transparent:!0,opacity:.5});for(let L=0;L<5;L++){const z=w()*6.28,V=w()*n*.7,G=new I(new j(.02+w()*.025,4,3),M);G.scale.set(1+w()*.5,.4,1+w()*.5),G.position.set(Math.cos(z)*V,.015,Math.sin(z)*V),e.add(G)}const A=new q({color:2761752,transparent:!0,opacity:.12,side:Lt});for(let L=0;L<3;L++){const z=w()*6.28,V=w()*n*.5,G=new I(new Ve(.08+w()*.06,5),A);G.rotation.x=-Math.PI/2,G.position.set(Math.cos(z)*V,.012,Math.sin(z)*V),e.add(G)}const T=new K({color:1122837,roughness:.7,transparent:!0,opacity:.4}),b=[];for(let L=0;L<2;L++){const z=w()*6.28,V=w()*n*.4,G=new I(new j(.012,4,3),T);G.scale.set(.8,.5,1.3),G.position.set(Math.cos(z)*V,.04,Math.sin(z)*V),e.add(G);const Z=new I(new Mt(.002,.001,.025,3),T);Z.position.set(Math.cos(z)*V-Math.cos(z)*.02,.04,Math.sin(z)*V-Math.sin(z)*.02),Z.rotation.z=Math.PI/2,Z.rotation.y=z,e.add(Z),b.push({body:G,tail:Z,ang:z,orbR:.15+w()*n*.35,speed:.3+w()*.4})}const S=new q({color:2250016,transparent:!0,opacity:.1,side:Lt});for(let L=0;L<3;L++){const z=w()*6.28,V=n*.7+w()*n*.25,G=new I(new Ve(.06+w()*.04,5),S);G.rotation.x=-Math.PI/2,G.position.set(Math.cos(z)*V,.032,Math.sin(z)*V),e.add(G)}const y=new q({color:13426158,transparent:!0,opacity:.06}),x=new I(new Se(n-.05,.01,4,16),y);x.rotation.x=Math.PI/2,x.position.y=.035,e.add(x);const C=new K({color:4861976,roughness:.8,side:Lt,transparent:!0,opacity:.6}),U=new I(new Ve(.03,5),C);return U.rotation.x=-Math.PI/2,U.position.set((w()-.5)*n*.5,.04,(w()-.5)*n*.5),e.add(U),e.position.set(s,0,t),ht.add(e),{group:e,waterMat:r,flMat:p,pads:_,ripples:f,tadpoles:b,x:s,z:t,phase:w()*6.28,pondR:n}}function hw(s,t){const e=new re,n=new q({color:F.orbGold}),i=new I(new j(.2,10,8),n);e.add(i);const o=new q({color:16777215}),r=new I(new j(.06,6,4),o);e.add(r);const a=new q({color:16772744,transparent:!0,opacity:.4,wireframe:!0}),c=new I(new ys(.15,0),a);e.add(c);const l=new q({color:F.orbGlow,transparent:!0,opacity:.5}),h=new I(new j(.35,8,6),l);e.add(h);const u=new q({color:F.orbGlow,transparent:!0,opacity:.3});for(let b=0;b<8;b++){const S=b/8*6.28,y=new I(new Hn(.02,.25,3),u);y.position.set(Math.cos(S)*.3,Math.sin(S*2)*.05,Math.sin(S)*.3),y.rotation.z=-S+Math.PI/2,y.rotation.y=S,e.add(y)}const f=new q({color:F.orbInner,transparent:!0,opacity:.15}),d=new I(new j(.6,8,5),f);e.add(d);for(let b=0;b<6;b++){const S=new I(new j(.03,4,3),new q({color:16777215})),y=b/6*6.28;S.position.set(Math.cos(y)*.4,Math.sin(y*2)*.1,Math.sin(y)*.4),e.add(S)}const g=new q({color:F.orbGold,transparent:!0,opacity:.7});for(let b=0;b<4;b++){const S=b/4*6.28+.4,y=new I(new j(.015,3,3),g);y.position.set(Math.cos(S)*.5,0,Math.sin(S)*.5),e.add(y)}const _=new q({color:16768426,transparent:!0,opacity:.12});for(let b=0;b<3;b++){const S=new I(new Se(.28,.003,4,12),_);S.rotation.set(b*1.05,b*.7,0),e.add(S)}const p=new q({color:F.orbGlow,transparent:!0,opacity:.08}),m=new I(new Se(.4,.004,4,16),p);m.rotation.x=Math.PI/2,e.add(m);const E=new q({color:16772812,transparent:!0,opacity:.15}),v=new I(new Se(.25,.012,4,10),E);v.rotation.x=Math.PI/2,e.add(v);const M=new q({color:16777215,transparent:!0,opacity:.5});for(let b=0;b<6;b++){const S=w()*6.28,y=w()*Math.PI-Math.PI/2,x=new I(new j(.008,3,3),M);x.position.set(Math.cos(S)*Math.cos(y)*.2,Math.sin(y)*.2,Math.sin(S)*Math.cos(y)*.2),e.add(x)}const A=new q({color:F.orbGlow,transparent:!0,opacity:.1,side:Lt}),T=new I(new Ve(.5,8),A);return T.rotation.x=-Math.PI/2,T.position.y=-.95,e.add(T),e.position.set(s,1,t),ht.add(e),{group:e,coreMat:n,glowMat:l,hazeMat:f,x:s,z:t,found:!1,flyUp:!1,flyY:1,phase:w()*6.28,laserLine:null,laserMat:null}}function uw(s,t){const e=new re,n=new K({color:F.rockBase,roughness:.85,metalness:.05}),i=new K({color:F.rockLight,roughness:.8,metalness:.05}),o=new K({color:F.rockMoss,emissive:F.rockMoss,emissiveIntensity:.03,roughness:.9}),r=.3+w()*.5,a=new I(new j(r,8,6),w()<.6?n:i),c=.4+w()*.4;a.scale.set(1+w()*.6,c,1+w()*.6),a.position.y=r*c*.35,a.rotation.set(w()*.5,w()*3,w()*.3),a.castShadow=!0,a.receiveShadow=!0,e.add(a);const l=1+Math.floor(w()*3);for(let T=0;T<l;T++){const b=w()*6.28,S=r*.6+w()*r*.5,y=r*.3+w()*r*.4,x=new I(new j(y,5,4),w()<.5?n:i),C=.3+w()*.4;x.scale.set(1+w()*.5,C,1+w()*.5),x.position.set(Math.cos(b)*S,y*C*.3,Math.sin(b)*S),x.rotation.set(w()*.8,w()*3,w()*.5),e.add(x)}const h=2+Math.floor(w()*3);for(let T=0;T<h;T++){const b=w()*6.28,S=w()*r*.6,y=r*.15+w()*r*.2,x=new I(new j(y,4,3),o);x.scale.set(1.5,.2,1.5),x.position.set(Math.cos(b)*S,r*.35+w()*.05,Math.sin(b)*S),e.add(x)}const u=[8943428,10061909,6715221,11180390];for(let T=0;T<3;T++){const b=new K({color:u[Math.floor(w()*u.length)],roughness:.9,transparent:!0,opacity:.5}),S=w()*6.28,y=new I(new j(r*.06+w()*r*.08,3,3),b);y.scale.set(2,.15,2),y.position.set(Math.cos(S)*r*.5,r*.25+w()*.1,Math.sin(S)*r*.5),e.add(y)}const f=new q({color:1381656,transparent:!0,opacity:.35}),d=2+Math.floor(w()*3);for(let T=0;T<d;T++){const b=w()*6.28,S=r*.3+w()*r*.4,y=new I(new Mt(.003,.001,S,3),f),x=r*.3+w()*r*.2;y.position.set(Math.cos(b)*x,r*.2+w()*r*.15,Math.sin(b)*x),y.rotation.set(w()*.5,b,Math.PI/2+w()*.4),e.add(y)}const g=new q({color:660752,transparent:!0,opacity:.2,side:Lt}),_=1+Math.floor(w()*2);for(let T=0;T<_;T++){const b=w()*6.28,S=r*.3+w()*r*.3,y=new I(new ge(.02+w()*.015,S),g);y.position.set(Math.cos(b)*r*.45,r*.15,Math.sin(b)*r*.45),y.rotation.y=-b,e.add(y)}const p=[],m=new q({color:8965375,transparent:!0,opacity:.4});if(w()<.5){const T=2+Math.floor(w()*3);for(let b=0;b<T;b++){const S=w()*6.28,y=r*.25+w()*r*.25,x=new I(new j(.006,3,3),m);x.position.set(Math.cos(S)*y,r*.15+w()*r*.2,Math.sin(S)*y),e.add(x),p.push(x)}}const E=new q({color:657926,transparent:!0,opacity:.12,side:Lt}),v=new I(new Co(r*.5,r*1,8),E);v.rotation.x=-Math.PI/2,v.position.y=.005,e.add(v);const M=new K({color:3816e3,roughness:.9}),A=4+Math.floor(w()*3);for(let T=0;T<A;T++){const b=w()*6.28,S=r*.5+w()*r*.6,y=.03+w()*.05,x=new I(new j(y,3,3),M);x.scale.set(1+w()*.5,.4,1+w()*.5),x.position.set(Math.cos(b)*S,y*.15,Math.sin(b)*S),e.add(x)}if(w()<.6){const T=new K({color:3385941,emissive:F.grassTip,emissiveIntensity:.05,roughness:.7,side:Lt});for(let b=0;b<3;b++){const S=w()*6.28,y=new I(new ge(.015,.08+w()*.06),T);y.position.set(Math.cos(S)*r*.3,r*.3,Math.sin(S)*r*.3),y.rotation.y=w()*3,y.rotation.x=-.2-w()*.3,e.add(y)}}return e.position.set(s,0,t),ht.add(e),{group:e,x:s,z:t,colR:r*.8,sparkles:p,sparkleMat:m}}let xp=null,_p=null,Mp=null,vp=null,Mh=[];function fw(){return xp}function dw(){return _p}function pw(){return Mp}function mw(){return vp}function gw(){return Mh}function xw(){const s=new re,t=new K({color:F.obeliskBlack,roughness:.2,metalness:.8,emissive:F.obeliskPink,emissiveIntensity:0});_p=t;const e=new I(new Mt(1.2,1.8,Me,4),t);e.position.y=Me/2,e.rotation.y=Math.PI/4,e.castShadow=!0,s.add(e);const n=new q({color:3351108,transparent:!0,opacity:.2});for(let S=0;S<4;S++){const y=S/4*6.28+Math.PI/4,x=new I(new Mt(.03,.04,Me*.9,3),n);x.position.set(Math.cos(y)*1.55,Me*.45,Math.sin(y)*1.55),s.add(x)}const i=new q({color:F.obeliskPink,transparent:!0,opacity:0});for(let S=0;S<4;S++){const y=S/4*6.28+Math.PI/4;for(let C=0;C<3;C++){const U=6+C*4,L=new I(new Mt(.015,.015,.8,3),i);L.position.set(Math.cos(y)*1.6,U,Math.sin(y)*1.6),L.rotation.z=Math.PI/2,L.rotation.y=-y,L.visible=!1,s.add(L)}const x=new I(new Mt(.012,.012,2.5,3),i);x.position.set(Math.cos(y)*1.6,12,Math.sin(y)*1.6),x.visible=!1,s.add(x)}const o=new K({color:F.obeliskBlack,roughness:.1,metalness:.9,emissive:F.obeliskPink,emissiveIntensity:0});Mp=o;const r=new I(new Hn(1.3,3,4),o);r.position.y=Me+1.5,r.rotation.y=Math.PI/4,s.add(r);const a=new q({color:F.obeliskPink,transparent:!0,opacity:0});for(let S=0;S<4;S++){const y=S/4*6.28+Math.PI/4,x=new I(new Mt(.02,.02,3.2,3),a);x.position.set(Math.cos(y)*.8,Me+1.5,Math.sin(y)*.8),x.rotation.z=.35*(y<3.14?1:-1),x.rotation.y=-y,x.visible=!1,s.add(x)}for(let S=0;S<5;S++){const y=new I(new Se(1.85-S*.02,.04,6,4),new q({color:2236979}));y.position.y=4+S*5,y.rotation.x=Math.PI/2,s.add(y)}const c=new K({color:1118488,roughness:.3,metalness:.7}),l=new I(new Mt(2.2,2.5,.6,4),c);l.position.y=.3,l.rotation.y=Math.PI/4,s.add(l);const h=new I(new Mt(2.8,3,.4,4),c);h.position.y=.05,h.rotation.y=Math.PI/4,s.add(h);const u=new q({color:F.obeliskPink,transparent:!0,opacity:0});for(let S=0;S<8;S++){const y=S/8*6.28,x=new I(new j(.06,4,3),u);x.position.set(Math.cos(y)*2.5,Me*.7+S*.5,Math.sin(y)*2.5),x.visible=!1,s.add(x)}const f=new q({color:1710626,transparent:!0,opacity:.08});for(let S=0;S<6;S++){const y=w()*6.28,x=2+w()*Me*.7,C=new I(new Mt(.008,.008,.5+w()*.5,3),f);C.position.set(Math.cos(y)*1.6,x,Math.sin(y)*1.6),C.rotation.z=(w()-.5)*.8,C.rotation.y=-y,s.add(C)}const d=new K({color:921108,roughness:.5,metalness:.4});for(let S=0;S<12;S++){const y=w()*6.28,x=3+w()*2,C=.15+w()*.25,U=new I(new j(C,4,3),d);U.scale.set(1+w()*.5,.3+w()*.3,1+w()*.5),U.position.set(Math.cos(y)*x,C*.15,Math.sin(y)*x),U.rotation.set(w(),w(),w()),s.add(U)}const g=new q({color:F.obeliskPink,transparent:!0,opacity:0});for(let S=0;S<4;S++){const y=S/4*6.28+Math.PI/4;for(let x=0;x<5;x++){const C=5+x*3.5+w()*.5,U=(w()-.5)*.4,L=new I(new j(.04,4,3),g);L.position.set(Math.cos(y)*1.58+Math.cos(y+1.57)*U,C,Math.sin(y)*1.58+Math.sin(y+1.57)*U),L.visible=!1,s.add(L)}}const _=new q({color:F.obeliskPink,transparent:!0,opacity:.8,blending:he,depthWrite:!1}),p=new I(new j(.5,12,8),_);p.position.y=Me+3,s.add(p);const m=new q({color:F.obeliskPink,transparent:!0,opacity:.2,blending:he,depthWrite:!1}),E=new I(new j(.9,8,6),m);E.position.y=Me+3,s.add(E),vp={mesh:p,haze:E,mat:_,hazeMat:m},Mh=[];const v=[.8,1.1,1.4,1.8],M=[11158783,10040302,12277247,8921821];for(let S=0;S<4;S++){const y=new q({color:M[S],transparent:!0,opacity:.4,blending:he,depthWrite:!1,side:Lt}),x=new I(new Se(v[S],.02,6,24),y);x.position.y=Me+3,x.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),s.add(x),Mh.push({mesh:x,mat:y,rx:(Math.random()-.5)*2,ry:(Math.random()-.5)*2,rz:(Math.random()-.5)*1.5})}const A=new q({color:0,transparent:!0,opacity:.15,side:Lt}),T=new I(new Ve(4,8),A);T.rotation.x=-Math.PI/2,T.position.y=.005,s.add(T),s.position.set(0,-Me,0),ht.add(s),xp=s;const b=new Uo(8939212,0,30);s.add(b),b.position.set(0,Me+1,0)}let yp=null,wp=null;function _w(){return yp}function Mw(){return wp}function vw(){const s=new K({color:F.moatBlue,emissive:1136042,emissiveIntensity:.3,transparent:!0,opacity:0,roughness:.1,metalness:.3});wp=s;const t=new Fa;t.absarc(0,0,6,0,6.28,!1);const e=new za;e.absarc(0,0,3,0,6.28,!0),t.holes.push(e);const n=new gr(t,24),i=new I(n,s);i.rotation.x=-Math.PI/2,i.position.y=.05,i.visible=!1,ht.add(i),yp=i;const o=new q({color:4491468,transparent:!0,opacity:0});for(let d=0;d<12;d++){const g=d/12*6.28+w()*.3,_=3.5+w()*2,p=new I(new j(.04+w()*.04,4,3),o);p.scale.set(1.2,.4,1.2),p.position.set(Math.cos(g)*_,.02,Math.sin(g)*_),p.visible=!1,ht.add(p)}const r=new q({color:13426158,transparent:!0,opacity:0,side:Lt});for(let d=0;d<6;d++){const g=d/6*6.28+w()*.5,_=new I(new Ve(.12+w()*.1,5),r);_.rotation.x=-Math.PI/2,_.position.set(Math.cos(g)*3.3,.06,Math.sin(g)*3.3),_.visible=!1,ht.add(_)}const a=new q({color:8960989,transparent:!0,opacity:0});for(let d=0;d<8;d++){const g=d/8*6.28,_=4+w()*1.5,p=new I(new Mt(.003,.003,.4,3),a);p.position.set(Math.cos(g)*_,.055,Math.sin(g)*_),p.rotation.x=Math.PI/2,p.rotation.z=g+Math.PI/2,p.visible=!1,ht.add(p)}const c=new q({color:264208,transparent:!0,opacity:0,side:Lt}),l=new Fa;l.absarc(0,0,5.2,0,6.28,!1);const h=new za;h.absarc(0,0,3.8,0,6.28,!0),l.holes.push(h);const u=new gr(l,16),f=new I(u,c);f.rotation.x=-Math.PI/2,f.position.y=.04,f.visible=!1,ht.add(f)}const Mr=[];function Yf(s,t,e,n,i){const o=[],r=[],a=[];for(let l=0;l<e;l++){const h=s[l],u=s[l+1],f=u.x-h.x;u.y-h.y;const d=u.z-h.z,g=Math.sqrt(f*f+d*d)||1,_=-d/g,p=f/g,m=(l+.5)/e,E=.7+Math.sin(m*Math.PI)*.5,v=t*E/2,M=[h.x+_*v,h.y,h.z+p*v],A=[h.x-_*v,h.y,h.z-p*v],T=[u.x+_*v,u.y,u.z+p*v],b=[u.x-_*v,u.y,u.z-p*v];o.push(...M,...T,...A,...A,...T,...b);const S=l/e,y=(l+1)/e;if(a.push(S,0,y,0,S,1,S,1,y,0,y,1),i){const U=.85+Math.sin(m*Math.PI*3)*.15,L=1.2*U,z=.6*U;r.push(i.r*L,i.g*L,i.b*L),r.push(i.r*L,i.g*L,i.b*L),r.push(i.r*z,i.g*z,i.b*z),r.push(i.r*z,i.g*z,i.b*z),r.push(i.r*L,i.g*L,i.b*L),r.push(i.r*z,i.g*z,i.b*z)}}const c=new be;return c.setAttribute("position",new Gt(o,3)),c.setAttribute("uv",new Gt(a,2)),r&&c.setAttribute("color",new Gt(r,3)),c.computeVertexNormals(),c}function yw(){for(let c=0;c<6;c++){const l=F.rainbow[c],h=c/6*6.28,u=6+c*.8,f=Me+6+c*2.5,d=1-c*.05,g=[],_=32;for(let V=0;V<=_;V++){const G=V/_,Z=h+G*Math.PI,W=Math.cos(Z)*u,rt=Math.sin(Z)*u,ut=Math.sin(G*Math.PI)*f;g.push(new N(W,ut,rt))}const p=new st(l),m=Yf(g,d,_,!0,p),E=new q({vertexColors:!0,transparent:!0,opacity:0,side:Lt,depthWrite:!1,blending:he}),v=new I(m,E);v.visible=!1,ht.add(v);const M=new Sr(g),A=new q({color:16777215,transparent:!0,opacity:0,blending:he,depthWrite:!1}),T=new vn(M,_,.03,4,!1),b=new I(T,A);b.visible=!1,ht.add(b);const S=[],y=new q({color:16777215,transparent:!0,opacity:0,blending:he,depthWrite:!1});for(let V=0;V<8;V++){const G=new I(new j(.06,4,3),y.clone());G.visible=!1,ht.add(G),S.push({mesh:G,mat:G.material,phase:V/8,speed:.15+Math.random()*.1})}const x=new q({color:l,transparent:!0,opacity:0,side:Lt,blending:he}),C=g[0],U=g[g.length-1],L=new I(new Ve(1.2,8),x);L.rotation.x=-Math.PI/2,L.position.set(C.x,.03,C.z),L.visible=!1,ht.add(L);const z=new I(new Ve(1.2,8),x.clone());z.rotation.x=-Math.PI/2,z.position.set(U.x,.03,U.z),z.visible=!1,ht.add(z),Mr.push({mesh:v,mat:E,coreLine:b,coreMat:A,curve:M,sparkles:S,pools:[L,z],poolMat:x,targetOpacity:0})}const s=[],t=10,e=Me+14,n=32;for(let c=0;c<=n;c++){const l=c/n,h=l*Math.PI;s.push(new N(Math.cos(h)*t,Math.sin(l*Math.PI)*e,Math.sin(h)*t))}const i=new st(15654399),o=Yf(s,1.5,n,!0,i),r=new q({vertexColors:!0,transparent:!0,opacity:0,side:Lt,depthWrite:!1,blending:he}),a=new I(o,r);a.visible=!1,ht.add(a),Mr.push({mesh:a,mat:r,targetOpacity:0})}function ww(s){for(let t=0;t<Mr.length;t++){const e=Mr[t];if(!(!e.sparkles||!e.curve)&&e.mesh.visible){e.coreLine&&(e.coreLine.visible=e.mesh.visible,e.coreMat.opacity=e.mat.opacity*.4);for(let n=0;n<e.sparkles.length;n++){const i=e.sparkles[n];i.phase+=i.speed*.016,i.phase>1&&(i.phase-=1);const o=e.curve.getPoint(i.phase);i.mesh.position.copy(o),i.mesh.visible=e.mesh.visible;const r=Math.sin(s*8+n*2.1)*.5+.5;i.mat.opacity=e.mat.opacity*r*.7}if(e.pools)for(let n=0;n<e.pools.length;n++)e.pools[n].visible=e.mesh.visible,e.poolMat&&(e.poolMat.opacity=e.mat.opacity*.3)}}}let hn=null;const Qn=[],nn=new me,hr=new st;function Sw(s){const t=new q({color:16777215,transparent:!0,opacity:1});hn=new $i(Sn.fly,t,s),hn.instanceMatrix.setUsage(we),hn.instanceColor=new di(new Float32Array(s*3),3),hn.instanceColor.setUsage(we),nn.scale.setScalar(0),nn.updateMatrix();for(let e=0;e<s;e++){hn.setMatrixAt(e,nn.matrix);const n=e%3===0?F.fireflyB:F.firefly;hr.setHex(n),hn.setColorAt(e,hr),Qn.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,phase:Math.random()*6.28,wander:Math.random()*6.28,colorHex:n})}hn.count=s,hn.frustumCulled=!1,ht.add(hn)}function Sa(s,t,e,n){let i=null;for(let o=0;o<Qn.length;o++)if(!Qn[o].active){i=Qn[o];break}if(!i){let o=1/0;for(let r=0;r<Qn.length;r++)Qn[r].life<o&&(o=Qn[r].life,i=Qn[r])}i.x=s,i.y=t+.5+Math.random()*3,i.z=e,i.vx=(Math.random()-.5)*2,i.vy=Math.random()-.5,i.vz=(Math.random()-.5)*2,i.life=n,i.max=n,i.active=!0,i.wander=Math.random()*6.28}function Sp(s,t){let e=0,n=!1;for(let i=0;i<Qn.length;i++){const o=Qn[i];if(!o.active){nn.position.set(0,-100,0),nn.scale.setScalar(0),nn.updateMatrix(),hn.setMatrixAt(i,nn.matrix);continue}if(o.life-=s,o.life<=0){o.active=!1,nn.position.set(0,-100,0),nn.scale.setScalar(0),nn.updateMatrix(),hn.setMatrixAt(i,nn.matrix);continue}e++,o.wander+=(Math.random()-.5)*3*s,o.vx+=Math.cos(o.wander)*1.5*s,o.vz+=Math.sin(o.wander)*1.5*s,o.vy+=Math.sin(t*2+o.phase)*s,o.vx*=.995,o.vy*=.995,o.vz*=.995,o.x+=o.vx*s,o.y+=o.vy*s,o.z+=o.vz*s;const r=qt(o.x,o.z)+.3;o.y<r&&(o.y=r,o.vy=Math.abs(o.vy)*.5),o.y>12&&(o.vy-=2*s);const a=Math.sin(t*3+o.phase)*.5+.5,l=o.life/o.max*(.4+a*.6),h=.6+a*.6;nn.position.set(o.x,o.y,o.z),nn.scale.setScalar(h),nn.updateMatrix(),hn.setMatrixAt(i,nn.matrix),hr.setHex(o.colorHex),hr.multiplyScalar(l),hn.setColorAt(i,hr),n=!0}return hn.instanceMatrix.needsUpdate=!0,n&&(hn.instanceColor.needsUpdate=!0),e}let un=null;const ti=[],sn=new me,Wa=new st,bw=new st(F.spore);function Ew(s){const t=new q({color:16777215,transparent:!0,opacity:1});un=new $i(Sn.spore,t,s),un.instanceMatrix.setUsage(we),un.instanceColor=new di(new Float32Array(s*3),3),un.instanceColor.setUsage(we),sn.scale.setScalar(0),sn.updateMatrix();for(let e=0;e<s;e++)un.setMatrixAt(e,sn.matrix),Wa.setHex(F.spore),un.setColorAt(e,Wa),ti.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});un.count=s,un.frustumCulled=!1,ht.add(un)}function Tw(s,t,e){let n=null;for(let i=0;i<ti.length;i++)if(!ti[i].active){n=ti[i];break}if(!n){let i=1/0;for(let o=0;o<ti.length;o++)ti[o].life<i&&(i=ti[o].life,n=ti[o])}n.x=s,n.y=t,n.z=e,n.vx=(Math.random()-.5)*.3,n.vy=.4+Math.random()*.4,n.vz=(Math.random()-.5)*.3,n.life=3+Math.random()*3,n.max=n.life,n.active=!0}let bp=0,Ep=0;function Aw(s,t){bp=s,Ep=t}function Cw(s){let t=0,e=!1;for(let n=0;n<ti.length;n++){const i=ti[n];if(!i.active){sn.position.set(0,-100,0),sn.scale.setScalar(0),sn.updateMatrix(),un.setMatrixAt(n,sn.matrix);continue}if(i.life-=s,i.life<=0){i.active=!1,sn.position.set(0,-100,0),sn.scale.setScalar(0),sn.updateMatrix(),un.setMatrixAt(n,sn.matrix);continue}t++,i.vy+=.3*s,i.vx+=bp*.3*s,i.vz+=Ep*.3*s,i.vx*=.997,i.vy*=.997,i.vz*=.997,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s;const o=i.life/i.max*.7;sn.position.set(i.x,i.y,i.z),sn.scale.setScalar(1),sn.updateMatrix(),un.setMatrixAt(n,sn.matrix),Wa.copy(bw).multiplyScalar(o),un.setColorAt(n,Wa),e=!0}return un.instanceMatrix.needsUpdate=!0,e&&(un.instanceColor.needsUpdate=!0),t}let fn=null;const go=[];let Kc=0;const on=new me,Xa=new st,Tp=new st(F.starMote);function Rw(s){const t=new q({color:16777215,transparent:!0,opacity:1});fn=new $i(Sn.starMote,t,s),fn.instanceMatrix.setUsage(we),fn.instanceColor=new di(new Float32Array(s*3),3),fn.instanceColor.setUsage(we),on.scale.setScalar(0),on.updateMatrix();for(let e=0;e<s;e++)fn.setMatrixAt(e,on.matrix),Xa.copy(Tp),fn.setColorAt(e,Xa),go.push({x:0,y:0,z:0,life:0,max:0,active:!1,vy:0,drift:0});fn.count=s,fn.frustumCulled=!1,ht.add(fn)}function Pw(s){let t=null;for(let e=0;e<go.length;e++)if(!go[e].active){t=go[e];break}t&&(t.x=s.x+(Math.random()-.5)*60,t.z=s.z+(Math.random()-.5)*60,t.y=15+Math.random()*20,t.life=6+Math.random()*6,t.max=t.life,t.active=!0,t.vy=-.15-Math.random()*.3,t.drift=Math.random()*6.28)}function Ap(s,t,e){Kc+=s,Kc>.15&&(Kc=0,Pw(e));let n=!1;for(let i=0;i<go.length;i++){const o=go[i];if(!o.active){on.position.set(0,-100,0),on.scale.setScalar(0),on.updateMatrix(),fn.setMatrixAt(i,on.matrix);continue}if(o.life-=s,o.life<=0||o.y<.5){o.active=!1,on.position.set(0,-100,0),on.scale.setScalar(0),on.updateMatrix(),fn.setMatrixAt(i,on.matrix);continue}o.y+=o.vy*s,o.drift+=(Math.random()-.5)*.5*s,o.x+=Math.sin(o.drift)*.1*s,o.z+=Math.cos(o.drift)*.08*s;const r=o.life/o.max,a=Math.sin(t*4+i)*.3+.7,c=r*a*.7,l=.5+a*.5;on.position.set(o.x,o.y,o.z),on.scale.setScalar(l),on.updateMatrix(),fn.setMatrixAt(i,on.matrix),Xa.copy(Tp).multiplyScalar(c),fn.setColorAt(i,Xa),n=!0}fn.instanceMatrix.needsUpdate=!0,n&&(fn.instanceColor.needsUpdate=!0)}let dn=null;const xo=[],rn=new me,Ya=new st,Cp=new st(8956535);function Iw(s){const t=new q({color:16777215,transparent:!0,opacity:1});dn=new $i(Sn.dustMote,t,s),dn.instanceMatrix.setUsage(we),dn.instanceColor=new di(new Float32Array(s*3),3),dn.instanceColor.setUsage(we),rn.scale.setScalar(0),rn.updateMatrix();for(let e=0;e<s;e++)dn.setMatrixAt(e,rn.matrix),Ya.copy(Cp),dn.setColorAt(e,Ya),xo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});dn.count=s,dn.frustumCulled=!1,ht.add(dn)}function qf(s,t,e){for(let n=0;n<e;n++){let i=null;for(let a=0;a<xo.length;a++)if(!xo[a].active){i=xo[a];break}if(!i)continue;const o=Math.random()*6.28,r=1+Math.random()*2;i.x=s+Math.cos(o)*.2,i.y=qt(s,t)+.1,i.z=t+Math.sin(o)*.2,i.vx=Math.cos(o)*r,i.vy=.5+Math.random()*1.5,i.vz=Math.sin(o)*r,i.life=.6+Math.random()*.6,i.max=i.life,i.active=!0}}function Lw(s){let t=!1;for(let e=0;e<xo.length;e++){const n=xo[e];if(!n.active){rn.position.set(0,-100,0),rn.scale.setScalar(0),rn.updateMatrix(),dn.setMatrixAt(e,rn.matrix);continue}if(n.life-=s,n.life<=0){n.active=!1,rn.position.set(0,-100,0),rn.scale.setScalar(0),rn.updateMatrix(),dn.setMatrixAt(e,rn.matrix);continue}n.vy-=3*s,n.vx*=.96,n.vy*=.96,n.vz*=.96,n.x+=n.vx*s,n.y+=n.vy*s,n.z+=n.vz*s;const i=qt(n.x,n.z)+.05;n.y<i&&(n.y=i,n.vy=0,n.vx*=.8,n.vz*=.8);const o=n.life/n.max*.4;rn.position.set(n.x,n.y,n.z),rn.scale.setScalar(1),rn.updateMatrix(),dn.setMatrixAt(e,rn.matrix),Ya.copy(Cp).multiplyScalar(o),dn.setColorAt(e,Ya),t=!0}dn.instanceMatrix.needsUpdate=!0,t&&(dn.instanceColor.needsUpdate=!0)}let pn=null;const _o=[],an=new me,qa=new st,Rp=new st(F.bubblePop),Dw=new j(.02,3,3);function Uw(s){const t=new q({color:16777215,transparent:!0,opacity:1});pn=new $i(Dw,t,s),pn.instanceMatrix.setUsage(we),pn.instanceColor=new di(new Float32Array(s*3),3),pn.instanceColor.setUsage(we),an.scale.setScalar(0),an.updateMatrix();for(let e=0;e<s;e++)pn.setMatrixAt(e,an.matrix),qa.copy(Rp),pn.setColorAt(e,qa),_o.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});pn.count=s,pn.frustumCulled=!1,ht.add(pn)}function Nw(s,t,e,n){for(let i=0;i<n;i++){let o=null;for(let l=0;l<_o.length;l++)if(!_o[l].active){o=_o[l];break}if(!o)continue;const r=Math.random()*6.28,a=Math.random()*3.14,c=1+Math.random()*2;o.x=s,o.y=t,o.z=e,o.vx=Math.cos(r)*Math.sin(a)*c,o.vy=Math.cos(a)*c,o.vz=Math.sin(r)*Math.sin(a)*c,o.life=.4+Math.random()*.4,o.max=o.life,o.active=!0}}function zw(s){let t=!1;for(let e=0;e<_o.length;e++){const n=_o[e];if(!n.active){an.position.set(0,-100,0),an.scale.setScalar(0),an.updateMatrix(),pn.setMatrixAt(e,an.matrix);continue}if(n.life-=s,n.life<=0){n.active=!1,an.position.set(0,-100,0),an.scale.setScalar(0),an.updateMatrix(),pn.setMatrixAt(e,an.matrix);continue}n.vy-=2*s,n.vx*=.97,n.vy*=.97,n.vz*=.97,n.x+=n.vx*s,n.y+=n.vy*s,n.z+=n.vz*s;const i=n.life/n.max*.8;an.position.set(n.x,n.y,n.z),an.scale.setScalar(1),an.updateMatrix(),pn.setMatrixAt(e,an.matrix),qa.copy(Rp).multiplyScalar(i),pn.setColorAt(e,qa),t=!0}pn.instanceMatrix.needsUpdate=!0,t&&(pn.instanceColor.needsUpdate=!0)}let mn=null;const Mo=[],$e=new me,Za=new st,Pp=[new st(F.leafGlow),new st(3394662),new st(2271880),new st(5636044),new st(4513262)];let Ip=0,Lp=0;function Fw(s,t,e){Ip=s,Lp=t}function Ow(s){const t=new ge(.12,.08),e=new q({color:16777215,transparent:!0,opacity:1,side:Lt,depthWrite:!1,blending:he});mn=new $i(t,e,s),mn.instanceMatrix.setUsage(we),mn.instanceColor=new di(new Float32Array(s*3),3),mn.instanceColor.setUsage(we),$e.scale.setScalar(0),$e.updateMatrix();for(let n=0;n<s;n++)mn.setMatrixAt(n,$e.matrix),Za.setHex(0),mn.setColorAt(n,Za),Mo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,rvx:0,rvy:0,rvz:0,life:0,max:0,active:!1,colorIdx:0});mn.count=s,mn.frustumCulled=!1,ht.add(mn)}function Bw(s,t,e){let n=null;for(let o=0;o<Mo.length;o++)if(!Mo[o].active){n=Mo[o];break}if(!n)return;n.x=s+(Math.random()-.5)*2,n.y=t+Math.random()*2,n.z=e+(Math.random()-.5)*2;const i=Math.random()*6.28;n.vx=Math.cos(i)*.3,n.vy=-.2-Math.random()*.3,n.vz=Math.sin(i)*.3,n.rvx=(Math.random()-.5)*4,n.rvy=(Math.random()-.5)*3,n.rvz=(Math.random()-.5)*2,n.rx=Math.random()*6.28,n.ry=Math.random()*6.28,n.rz=Math.random()*6.28,n.life=4+Math.random()*4,n.max=n.life,n.active=!0,n.colorIdx=Math.floor(Math.random()*Pp.length)}function kw(s,t){let e=!1;for(let n=0;n<Mo.length;n++){const i=Mo[n];if(!i.active){$e.position.set(0,-100,0),$e.scale.setScalar(0),$e.updateMatrix(),mn.setMatrixAt(n,$e.matrix);continue}if(i.life-=s,i.life<=0||i.y<-.5){i.active=!1,$e.position.set(0,-100,0),$e.scale.setScalar(0),$e.updateMatrix(),mn.setMatrixAt(n,$e.matrix);continue}i.vx+=Ip*.4*s,i.vz+=Lp*.4*s,i.vx+=Math.sin(t*3+n*1.7)*.5*s,i.vz+=Math.cos(t*2.5+n*2.1)*.3*s,i.vy-=.3*s,i.vx*=.995,i.vy=Math.max(i.vy,-.8),i.vz*=.995,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s,i.rx+=i.rvx*s,i.ry+=i.rvy*s,i.rz+=i.rvz*s;const o=i.life/i.max,r=o*(.6+Math.sin(t*2+n*.8)*.4),a=.8+o*.4;$e.position.set(i.x,i.y,i.z),$e.rotation.set(i.rx,i.ry,i.rz),$e.scale.setScalar(a),$e.updateMatrix(),mn.setMatrixAt(n,$e.matrix),Za.copy(Pp[i.colorIdx]).multiplyScalar(r),mn.setColorAt(n,Za),e=!0}mn.instanceMatrix.needsUpdate=!0,e&&(mn.instanceColor.needsUpdate=!0)}const ca=40,vh=8;let je=null;const ei=[],Pn=new me,Yi=new st,Dp=new st(4513194);let Zf=0,$f=0,pu=!1;function Gw(){const s=new Fa;return s.moveTo(0,-.18),s.quadraticCurveTo(.1,-.17,.11,-.06),s.lineTo(.1,-.02),s.lineTo(.13,.12),s.quadraticCurveTo(.125,.14,.11,.12),s.lineTo(.08,0),s.quadraticCurveTo(.05,-.02,.03,0),s.lineTo(.03,.05),s.lineTo(.02,.22),s.quadraticCurveTo(0,.245,-.02,.22),s.lineTo(-.03,.05),s.lineTo(-.03,0),s.quadraticCurveTo(-.05,-.02,-.08,0),s.lineTo(-.11,.12),s.quadraticCurveTo(-.125,.14,-.13,.12),s.lineTo(-.1,-.02),s.lineTo(-.11,-.06),s.quadraticCurveTo(-.1,-.17,0,-.18),new gr(s)}function Hw(){const s=Gw(),t=new q({color:16777215,transparent:!0,opacity:1,blending:he,depthWrite:!1,side:Lt});je=new $i(s,t,ca),je.instanceMatrix.setUsage(we),je.instanceColor=new di(new Float32Array(ca*3),3),je.instanceColor.setUsage(we),Pn.position.set(0,-100,0),Pn.scale.setScalar(0),Pn.updateMatrix();for(let e=0;e<ca;e++)je.setMatrixAt(e,Pn.matrix),Yi.setScalar(0),je.setColorAt(e,Yi),ei.push({active:!1,life:0,maxLife:vh,x:0,z:0});je.count=ca,je.frustumCulled=!1,ht.add(je),pu=!0}function Vw(s,t,e,n){if(!pu)return;const i=s-Zf,o=t-$f;if(i*i+o*o<(n?.25:.64))return;Zf=s,$f=t;let c=null,l=-1;for(let p=0;p<ei.length;p++)if(!ei[p].active){c=ei[p],l=p;break}if(!c){let p=1/0;for(let m=0;m<ei.length;m++)ei[m].life<p&&(p=ei[m].life,c=ei[m],l=m)}const h=qt(s,t);c.active=!0,c.life=vh,c.maxLife=vh,c.x=s,c.z=t;const u=l%2===0?1:-1,f=Math.sin(e+Math.PI/2)*.12*u,d=Math.cos(e+Math.PI/2)*.12*u,g=n?1.15:1;Pn.position.set(s+f,h+.015,t+d),Pn.rotation.set(-Math.PI/2,0,-e+(Math.random()-.5)*.15),Pn.scale.set(g,g,g),Pn.updateMatrix(),je.setMatrixAt(l,Pn.matrix);const _=n?.9:.6;Yi.copy(Dp).multiplyScalar(_),je.setColorAt(l,Yi)}function Ww(s,t){if(!pu)return;const e=1+(t||0)*1.5;let n=!1;for(let i=0;i<ei.length;i++){const o=ei[i];if(!o.active)continue;if(o.life-=s*e,o.life<=0){o.active=!1,Pn.position.set(0,-100,0),Pn.scale.setScalar(0),Pn.updateMatrix(),je.setMatrixAt(i,Pn.matrix),Yi.setScalar(0),je.setColorAt(i,Yi),n=!0;continue}const r=o.life/o.maxLife,a=r*r;Yi.copy(Dp).multiplyScalar(a*.6),je.setColorAt(i,Yi),n=!0}je.instanceMatrix.needsUpdate=!0,n&&(je.instanceColor.needsUpdate=!0)}const ai=[],eo=[];let jf=Me+2,ki=1;function Kf(s){ki=s}function Up(s,t,e,n){const i=[];for(let r=0;r<=12;r++){const a=r/12,c=s*(1-a*a),l=t*(1-a*a),h=e+(n-e)*a;i.push(new N(c,h,l))}return{curve:new Sr(i),pts:i}}function Xw(s,t,e,n){const i=n||Me+2,o=e+15,r=new tu(new N(s,e,t),new N(s,o,t)),a=new q({color:F.laserPink,transparent:!0,opacity:0,blending:he,depthWrite:!1}),c=new I(new vn(r,1,.06,6,!1),a);ht.add(c);const l=new q({color:F.laserGlow,transparent:!0,opacity:0,blending:he,depthWrite:!1}),h=new I(new vn(r,1,.2,6,!1),l);ht.add(h);const{curve:u}=Up(s,t,o,i),f=new q({color:F.laserPink,transparent:!0,opacity:0,blending:he,depthWrite:!1}),d=new I(new vn(u,16,.05,6,!1),f);ht.add(d);const g=new q({color:F.laserGlow,transparent:!0,opacity:0,blending:he,depthWrite:!1}),_=new I(new vn(u,16,.18,6,!1),g);ht.add(_);const p={upTube:c,upGlow:h,bendTube:d,bendGlow:_,mat:a,glowMat:l,bendMat:f,bendGlowMat:g,fromX:s,fromZ:t,floatY:e,skyY:o,tipY:i,animPhase:0,animTimer:0};ai.push(p);for(let m=0;m<ai.length-1;m++){const E=ai[m],v=(p.skyY+E.skyY)/2,M=[];for(let x=0;x<=8;x++){const C=x/8,U=p.fromX*(1-C)+E.fromX*C,L=p.fromZ*(1-C)+E.fromZ*C,z=v+Math.sin(C*Math.PI)*3;M.push(new N(U,z,L))}const A=new Sr(M),T=new q({color:F.laserGlow,transparent:!0,opacity:0,blending:he,depthWrite:!1}),b=new I(new vn(A,10,.03,4,!1),T);ht.add(b);const S=new q({color:F.laserPink,transparent:!0,opacity:0,blending:he,depthWrite:!1}),y=new I(new vn(A,10,.1,4,!1),S);ht.add(y),eo.push({tube:b,glow:y,mat:T,glowMat:S,opacity:0})}return p}function Yw(s){for(let t=0;t<ai.length;t++){const e=ai[t];e.tipY=s;const{curve:n}=Up(e.fromX,e.fromZ,e.skyY,s);ht.remove(e.bendTube),e.bendTube.geometry.dispose(),e.bendTube.geometry=new vn(n,16,.05,6,!1),ht.add(e.bendTube),ht.remove(e.bendGlow),e.bendGlow.geometry.dispose(),e.bendGlow.geometry=new vn(n,16,.18,6,!1),ht.add(e.bendGlow)}}function qw(s,t,e){const n=e||Me+2;Math.abs(n-jf)>.1&&ai.length>0&&(Yw(n),jf=n);for(let i=0;i<ai.length;i++){const o=ai[i];if(o.animTimer+=s,o.animPhase===0){const r=Math.min(o.animTimer/.5,1);o.mat.opacity=r*.8,o.glowMat.opacity=r*.3,o.animTimer>.5&&(o.animPhase=1,o.animTimer=0)}else if(o.animPhase===1){const r=Math.min(o.animTimer/.8,1);o.bendMat.opacity=r*.7,o.bendGlowMat.opacity=r*.2,o.mat.opacity=.8,o.glowMat.opacity=.3,o.animTimer>.8&&(o.animPhase=2)}else{const r=Math.sin(t*3+i*1.2)*.5+.5;o.mat.opacity=.5+r*.4,o.glowMat.opacity=.15+r*.15,o.bendMat.opacity=.4+r*.3,o.bendGlowMat.opacity=.1+r*.12}}for(let i=0;i<eo.length;i++){const o=eo[i];o.opacity=Math.min(o.opacity+s*.5,.3);const r=Math.sin(t*2+i*.8)*.5+.5;o.mat.opacity=o.opacity*(.6+r*.4),o.glowMat.opacity=o.opacity*(.2+r*.15)}if(ki<1){for(let i=0;i<ai.length;i++){const o=ai[i];o.mat.opacity*=ki,o.glowMat.opacity*=ki,o.bendMat.opacity*=ki,o.bendGlowMat.opacity*=ki}for(let i=0;i<eo.length;i++)eo[i].mat.opacity*=ki,eo[i].glowMat.opacity*=ki}}const Zw=new st(F.orbGold),$w=new st(16777215);let js=0,He="SEEK",Gi=-Me,Ze=0,tr=[],On=null,hs=null,us=null,Oe=null,fs=[],wi=null,yh=null,Bn=[],er=null,Np=null,zp=null,wh=[],Sh=[],bh=[],Eh=[],Xi=[],no=null,Jf=0,Fn=0,Ks=[],ro=null,Qf=!1;const ao=200;let Gn=null;const mu=[];let Fp=!1;function jw(){if(Gn)return;const s=new be,t=new Float32Array(ao*3),e=new Float32Array(ao*3),n=new Float32Array(ao);s.setAttribute("position",new ke(t,3)),s.setAttribute("color",new ke(e,3)),s.setAttribute("size",new ke(n,1)),s.attributes.position.setUsage(we),s.attributes.color.setUsage(we),s.attributes.size.setUsage(we);const i=new jh({size:.3,vertexColors:!0,transparent:!0,opacity:.9,blending:he,depthWrite:!1,sizeAttenuation:!0});Gn=new zd(s,i),Gn.visible=!1,ht.add(Gn);const o=new st(F.obeliskPink),r=new st(11158783);for(let a=0;a<ao;a++){const c=Math.random()<.7?o:r;e[a*3]=c.r*(.8+Math.random()*.4),e[a*3+1]=c.g*(.8+Math.random()*.4),e[a*3+2]=c.b*(.8+Math.random()*.4),n[a]=.15+Math.random()*.25,mu.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,active:!1,sparklePhase:Math.random()*6.28})}s.attributes.color.needsUpdate=!0,s.attributes.size.needsUpdate=!0}function Kw(s,t,e){Fp=!0,Gn.visible=!0;for(let n=0;n<ao;n++){const i=mu[n];i.x=s,i.y=t,i.z=e;const o=Math.random()*6.28,r=Math.random()*Math.PI,a=2+Math.random()*5;i.vx=Math.sin(r)*Math.cos(o)*a,i.vy=Math.cos(r)*a*.5+Math.random()*2,i.vz=Math.sin(r)*Math.sin(o)*a,i.life=5+Math.random()*6,i.active=!0}}function Jw(s,t){if(!Gn||!Gn.visible)return;const e=Gn.geometry.attributes.position.array,n=Gn.geometry.attributes.size.array;let i=!1;for(let o=0;o<ao;o++){const r=mu[o];if(!r.active){e[o*3+1]=-100,n[o]=0;continue}if(i=!0,r.life-=s,r.life<=0||r.y<-1){r.active=!1;continue}r.vy-=1.5*s,r.vx*=.995,r.vz*=.995,r.vx+=Math.sin(t*3+o*.7)*.3*s,r.vz+=Math.cos(t*2.5+o*1.1)*.2*s,r.x+=r.vx*s,r.y+=r.vy*s,r.z+=r.vz*s,e[o*3]=r.x,e[o*3+1]=r.y,e[o*3+2]=r.z;const a=Math.sin(t*6+r.sparklePhase)*.5+.5,c=Math.min(r.life/2,1);n[o]=(.15+a*.2)*c}Gn.geometry.attributes.position.needsUpdate=!0,Gn.geometry.attributes.size.needsUpdate=!0,i||(Gn.visible=!1)}function Qw(s){tr=s.orbs,On=s.obeliskGroup,hs=s.obeliskMat,us=s.obeliskGlowMat,Oe=s.pinnacleOrb,fs=s.pinnacleRings||[],wi=s.moatMesh,yh=s.moatMat,Bn=s.rainbowArcs,er=s.player,Np=s.makeLaser,zp=s.orbHudEl,wh=s.deers||[],Sh=s.puffs||[],bh=s.jellies||[],Eh=s.moths||[],Xi=s.trees||[],no=s.groundMesh||null,jw()}function t1(s,t){let e=null,n=1/0;for(let c=0;c<tr.length;c++){const l=tr[c];if(l.found)continue;const h=l.x-er.pos.x,u=l.z-er.pos.z,f=h*h+u*u;f<n&&(n=f,e=l)}if(e&&n<Zs*Zs){const c=Math.sin(t*2+e.phase)*.5+.5;Qo.position.set(e.x,1,e.z),Qo.intensity=1+c*2,Qo.distance=Zs}else Qo.intensity=0;for(let c=0;c<tr.length;c++){const l=tr[c];if(!(l.found&&!l.flyUp&&!l._flashing)){if(!l.found){const h=Math.sin(t*1.5+l.phase)*.5+.5;l.group.position.y=l.flyY+Math.sin(t*.8+l.phase)*.3,l.glowMat.opacity=.3+h*.4,l.hazeMat.opacity=.08+h*.12;const u=l.x-er.pos.x,f=l.z-er.pos.z,d=u*u+f*f,g=Zs*Zs;if(d<g){const _=1-Math.sqrt(d)/Zs,p=_*_;l.glowMat.opacity=Math.min(.3+h*.4+p*.5,1),l.hazeMat.opacity=Math.min(.08+h*.12+p*.25,.6),l.coreMat.color.copy($w).lerp(Zw,1-p);const m=1+p*.3;l.group.scale.setScalar(m)}else l.group.scale.setScalar(1);for(let _=3;_<l.group.children.length;_++){const p=l.group.children[_],m=(_-3)/6*6.28+t*1.5;p.position.x=Math.cos(m)*.4,p.position.z=Math.sin(m)*.4,p.position.y=Math.sin(m*2+t)*.1}if(d<Ff*Ff){l.found=!0,l._flashing=!0,l._flashTimer=0,l.flyY=l.group.position.y,js++;const _=zp||document.getElementById("orb-hud");_&&(_.innerHTML="✦ "+js+" / "+to),He==="SEEK"&&(He="RISING")}}if(l._flashing){l._flashTimer+=s;const h=Math.min(l._flashTimer/1.5,1),u=h<.3?h/.3:1-(h-.3)/.7;l.glowMat.opacity=.5+u*.5,l.hazeMat.opacity=.3+u*.5,l.group.scale.setScalar(1+u*.6),l.group.position.x=l.x+Math.sin(t*30)*u*.05,l.group.position.z=l.z+Math.cos(t*25)*u*.05,l._flashTimer>1.5&&(l._flashing=!1,l.flyUp=!0,l.group.position.x=l.x,l.group.position.z=l.z)}if(l.flyUp){const h=Me+5;l.flyY+=(h-l.flyY)*s*.8,l.group.position.y=l.flyY;const u=Math.min((l.flyY-1)/(h-1),1);if(l.group.scale.setScalar(1-u*.6),l.glowMat.opacity=.8-u*.5,l.flyY>h-1&&!l.laserLine){l.flyUp=!1,l.group.visible=!1;const f=Jc();l.laserLine=Np(l.x,l.z,0,f)}}}}const i=Me/to,o=-Me+js*i;if(Gi<o-.01?(Gi+=8*s,Gi>o&&(Gi=o),On&&(On.position.y=Gi,On.position.x=Math.sin(t*25)*.04,On.position.z=Math.cos(t*30)*.03)):On&&(On.position.x*=.9,On.position.z*=.9),js>=to&&Gi>=-.01&&He==="RISING"&&(He="COMPLETE",Ze=0),On){On.rotation.y+=s*.03;const c=On.children[On.children.length-1];if(c&&c.isLight){const l=Math.max(0,Math.min(1,(Gi+Me)/Me));c.intensity=l*1.5*(.8+Math.sin(t*1.5)*.2)}}if(Oe&&Oe.mesh.visible){const c=Math.sin(t*2)*.5+.5;Oe.mat.opacity=.6+c*.3,Oe.hazeMat.opacity=.15+c*.12;const l=js/to;Oe.mat.opacity*=.3+l*.7,Oe.hazeMat.opacity*=.2+l*.8}for(let c=0;c<fs.length;c++){const l=fs[c];if(!l.mesh.visible)continue;l.mesh.rotation.x+=l.rx*s,l.mesh.rotation.y+=l.ry*s,l.mesh.rotation.z+=l.rz*s;const h=js/to;l.mat.opacity=(.15+h*.35)*(.8+Math.sin(t*1.5+c)*.2)}const a=Jc();if(qw(s,t,a),He==="COMPLETE"&&Ze>3?Kf(Math.max(0,1-(Ze-3)/4)):(He==="FINALE"||He==="TRANSFORM")&&Kf(0),Jw(s,t),He==="COMPLETE"){Ze+=s;const c=Math.min(Ze/3,1);if(hs&&(hs.emissiveIntensity=c*1.5),us&&(us.emissiveIntensity=c*2.5),Oe&&Oe.mesh.visible&&Ze>1&&Ze<3){const l=Math.min((Ze-1)/1.5,1);Oe.mat.opacity=.9+l*.1,Oe.hazeMat.opacity=.5+l*.5,Oe.mesh.scale.setScalar(1+l*.5),Oe.haze.scale.setScalar(1+l*1);for(let h=0;h<fs.length;h++){const u=fs[h];u.mesh.rotation.x+=u.rx*s*(1+l*4),u.mesh.rotation.y+=u.ry*s*(1+l*4),u.mesh.rotation.z+=u.rz*s*(1+l*4)}}if(Oe&&Oe.mesh.visible&&Ze>=3&&!Fp){const l=new N;Oe.mesh.getWorldPosition(l),Kw(l.x,l.y,l.z),Oe.mesh.visible=!1,Oe.haze.visible=!1;for(let h=0;h<fs.length;h++)fs[h].mesh.visible=!1}if(Ze>3&&yh){const l=Math.min((Ze-3)/4,1);yh.opacity=l*.6,wi&&(wi.visible||(wi.visible=!0),wi.position.y=.05+Math.sin(t*3)*.02*l)}if(Ze>4)for(let l=0;l<Bn.length;l++){const h=l*.3,u=Math.min(Math.max((Ze-4-h)/2,0),1);u>0&&!Bn[l].mesh.visible&&(Bn[l].mesh.visible=!0),Bn[l].mat.opacity=u*.55,Bn[l].mesh.rotation.y+=s*.1*(l+1)*.3}if(Ze>3){const l=Math.min((Ze-3)/6,1)*2;for(let h=0;h<wh.length;h++){const u=wh[h],f=u.group,d=-f.position.x,g=-f.position.z,_=Math.sqrt(d*d+g*g);_>8?(u.wanderAng=Math.atan2(-f.position.x,-f.position.z),u.state="walk",u.speed=1.5*l,f.position.x+=d/_*u.speed*s,f.position.z+=g/_*u.speed*s,f.rotation.y=u.wanderAng):u.state="pause"}for(let h=0;h<Sh.length;h++){const u=Sh[h],f=u.group,d=-f.position.x,g=-f.position.z,_=Math.sqrt(d*d+g*g);_>8&&(u.wanderAng=Math.atan2(-f.position.x,-f.position.z),u.state="hop",u.hopTimer=u.hopTimer%1.2,f.position.x+=d/_*1.5*l*s,f.position.z+=g/_*1.5*l*s)}for(let h=0;h<bh.length;h++){const u=bh[h],f=u.group;f.position.x+=(0-f.position.x)*s*.15*l,f.position.z+=(0-f.position.z)*s*.15*l}for(let h=0;h<Eh.length;h++){const u=Eh[h];u.centerX+=(0-u.centerX)*s*.2*l,u.centerZ+=(0-u.centerZ)*s*.2*l,u.orbitR=Math.max(u.orbitR-s*.3*l,2)}}Ze>12&&(He="FINALE",console.log("✦ Quest → FINALE"))}if(He==="FINALE"){Jf+=s,hs&&(hs.emissiveIntensity=1.5+Math.sin(t*.5)*.3),us&&(us.emissiveIntensity=2.5+Math.sin(t*.7)*.5),wi&&(wi.position.y=.05+Math.sin(t*3)*.02);for(let c=0;c<Bn.length;c++)Bn[c].mesh.rotation.y+=s*.1*(c+1)*.3,Bn[c].mat.opacity=.45+Math.sin(t+c)*.1;Jf>30&&(He="TRANSFORM",Fn=0,e1(),console.log("✦ Quest → TRANSFORM (trees="+Xi.length+")"))}if(He==="TRANSFORM"){Fn+=s,hs&&(hs.emissiveIntensity=1.5+Math.sin(t*.5)*.3),us&&(us.emissiveIntensity=2.5+Math.sin(t*.7)*.5),wi&&(wi.position.y=.05+Math.sin(t*3)*.02);for(let l=0;l<Bn.length;l++)Bn[l].mesh.rotation.y+=s*.1*(l+1)*.3,Bn[l].mat.opacity=.45+Math.sin(t+l)*.1;if(Fn<3&&Ks.length<Xi.length){const l=Math.min(Math.floor(Fn/3*Xi.length),Xi.length);for(;Ks.length<l;){const h=Ks.length,u=Xi[h],f=Jc(),d=new tu(new N(0,f,0),new N(u.x,0,u.z)),g=new q({color:F.laserPink,transparent:!0,opacity:0,blending:he,depthWrite:!1}),_=new I(new vn(d,8,.06,4,!1),g);ht.add(_);const p=new q({color:F.laserGlow,transparent:!0,opacity:0,blending:he,depthWrite:!1}),m=new I(new vn(d,8,.18,4,!1),p);ht.add(m),Ks.push({tube:_,glow:m,mat:g,glowMat:p,timer:0})}}for(let l=0;l<Ks.length;l++){const h=Ks[l];h.timer+=s;const u=Math.min(h.timer/.5,1),f=Math.sin(t*3+l*.5)*.5+.5;h.mat.opacity=u*(.6+f*.4),h.glowMat.opacity=u*(.2+f*.15)}let c=0;Fn>=3&&Fn<6?c=(Fn-3)/3:Fn>=6&&Fn<10?(c=1,Qf||(n1(),Qf=!0,console.log("✦ Trees + ground transformed"))):Fn>=10&&Fn<13&&(c=1-(Fn-10)/3),ro&&(ro.style.opacity=c)}}function Jc(){return Gi+Me+3}function e1(){ro||(ro=document.createElement("div"),ro.style.cssText="position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;opacity:0;pointer-events:none;z-index:9999;",document.body.appendChild(ro))}function n1(){const s=[{color:5575728,glow:13378167,core:16729258},{color:3805248,glow:11154363,core:14505471},{color:4461608,glow:14496648,core:16737979},{color:2756688,glow:8926156,core:12277247},{color:4200496,glow:13386905,core:16742348}],t=new st(667712),e=new st(534584);for(let n=0;n<Xi.length;n++){const i=Xi[n].group,o=s[n%s.length],r=new Set;i.traverse(a=>{if(!a.isMesh||!a.material)return;const c=a.material;if(r.has(c))return;r.add(c);const l={};c.color.getHSL(l),l.h>=.2&&l.h<=.6&&l.s>.08?(l.l>.45?c.color.set(o.core):c.transparent&&c.opacity<.15?c.color.set(o.glow):c.color.set(o.color),c.emissive&&c.emissive.set(o.glow)):l.h<.2&&l.s>.05&&l.l>.05&&l.l<.4?(c.color.copy(t),c.emissive&&c.emissive.copy(e)):l.l<.06&&c.color.set(657432)})}if(no&&no.material){no.material.emissive.set(2099264),no.material.emissiveIntensity=.3;const n=no.geometry.attributes.color;if(n){const i=n.array;for(let o=0;o<i.length;o+=3){const r=i[o],a=i[o+1],c=i[o+2];i[o]=r*.5+c*.3,i[o+1]=a*.15,i[o+2]=c*.7+a*.4}n.needsUpdate=!0}}}const i1=600;let la=.25,ve=1,td=.85,De="NIGHT",nr=null,ir=null,Th=null,sr=null,ba=null;const ed=[{label:"DUSK",sky:new st(923685),fog:new st(791584),fogDensity:.009,moonInt:.6,moonCol:new st(14527112),moonElev:15,ambSky:new st(4469589),ambGnd:new st(2238488),ambInt:.6,stars:.4,bio:.7,plRange:16,plInt:.5},{label:"NIGHT",sky:new st(330264),fog:new st(528408),fogDensity:.01,moonInt:1,moonCol:new st(12307694),moonElev:55,ambSky:new st(3359846),ambGnd:new st(1587232),ambInt:.7,stars:.85,bio:1,plRange:18,plInt:.55},{label:"DEEP_NIGHT",sky:new st(198160),fog:new st(397332),fogDensity:.012,moonInt:.55,moonCol:new st(8952251),moonElev:75,ambSky:new st(1712708),ambGnd:new st(1188888),ambInt:.5,stars:1,bio:1.5,plRange:22,plInt:.7},{label:"DAWN",sky:new st(1187888),fog:new st(923688),fogDensity:.011,moonInt:.5,moonCol:new st(13417386),moonElev:20,ambSky:new st(3354197),ambGnd:new st(1843224),ambInt:.55,stars:.35,bio:.65,plRange:17,plInt:.5}],Oi=new st,nd=new st;function s1(s){nr=s.scene,ir=s.moon,Th=s.moon2,sr=s.hemiLight,ba=s.playerLight}function o1(s){if(!nr)return;la=(la+s/i1)%1;const t=la*4,e=Math.floor(t)%4,n=(e+1)%4,i=t-Math.floor(t),o=.5-.5*Math.cos(i*Math.PI),r=ed[e],a=ed[n];De=o<.5?r.label:a.label;const c=(l,h)=>l+(h-l)*o;if(Oi.copy(r.sky).lerp(a.sky,o),nr.background.copy(Oi),Oi.copy(r.fog).lerp(a.fog,o),nr.fog.color.copy(Oi),nr.fog.density=c(r.fogDensity,a.fogDensity),ir){Oi.copy(r.moonCol).lerp(a.moonCol,o),ir.color.copy(Oi),ir.intensity=c(r.moonInt,a.moonInt);const l=la*Math.PI*2,h=c(r.moonElev,a.moonElev)*Math.PI/180,u=60;ir.position.set(Math.cos(l)*Math.cos(h)*u,Math.sin(h)*u,Math.sin(l)*Math.cos(h)*u)}if(Th){const l=c(r.moonInt,a.moonInt)/.85;Th.intensity=.3*l}sr&&(Oi.copy(r.ambSky).lerp(a.ambSky,o),nd.copy(r.ambGnd).lerp(a.ambGnd,o),sr.color.copy(Oi),sr.groundColor.copy(nd),sr.intensity=c(r.ambInt,a.ambInt)),ba&&(ba.distance=c(r.plRange,a.plRange),ba.intensity=c(r.plInt,a.plInt)),td=c(r.stars,a.stars),Iy(td),ve=c(r.bio,a.bio)}let Ms=0,co=0,Ri=0,vo="CLEAR",Ii=!1,si=0;const Ea={CLEAR:{fogMult:1,windBase:.3,rainRate:0,skyDarken:0,mistCount:0,duration:[90,180]},MISTY:{fogMult:1.8,windBase:.2,rainRate:0,skyDarken:.05,mistCount:6,duration:[60,150]},LIGHT_RAIN:{fogMult:1.3,windBase:.6,rainRate:.3,skyDarken:.1,mistCount:2,duration:[60,120]},HEAVY_RAIN:{fogMult:1.6,windBase:1,rainRate:.8,skyDarken:.2,mistCount:3,duration:[45,100]},FOG_BANK:{fogMult:2.5,windBase:.15,rainRate:0,skyDarken:.1,mistCount:8,duration:[60,120]},LUMINOUS_STORM:{fogMult:1.4,windBase:1.5,rainRate:.6,skyDarken:.15,mistCount:2,duration:[40,90]}},r1={CLEAR:{MISTY:.4,LIGHT_RAIN:.3,FOG_BANK:.2,LUMINOUS_STORM:.1},MISTY:{CLEAR:.3,LIGHT_RAIN:.3,FOG_BANK:.3,HEAVY_RAIN:.1},LIGHT_RAIN:{CLEAR:.2,MISTY:.2,HEAVY_RAIN:.4,LUMINOUS_STORM:.2},HEAVY_RAIN:{LIGHT_RAIN:.4,LUMINOUS_STORM:.3,MISTY:.2,CLEAR:.1},FOG_BANK:{MISTY:.4,CLEAR:.3,LIGHT_RAIN:.2,LUMINOUS_STORM:.1},LUMINOUS_STORM:{HEAVY_RAIN:.3,MISTY:.3,CLEAR:.2,LIGHT_RAIN:.2}};let io="CLEAR",Js=null,Ta=0,ha=0,Qc=0,ua=!1,fa=0,tl=Math.random()*Math.PI*2,el=0,nl=0;const Ah=[],a1=8;let id=!1,il=0,da=1,Aa=0,pa=0,sl=0;function c1(){const s=r1[io],t=Object.entries(s);let e=0;for(const[,i]of t)e+=i;let n=Math.random()*e;for(const[i,o]of t)if(n-=o,n<=0)return i;return t[0][0]}function l1(){if(id)return;const s=document.createElement("canvas");s.width=128,s.height=64;const t=s.getContext("2d"),e=t.createRadialGradient(64,32,0,64,32,64);e.addColorStop(0,"rgba(255,255,255,0.5)"),e.addColorStop(.3,"rgba(255,255,255,0.25)"),e.addColorStop(.7,"rgba(255,255,255,0.06)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,64);const n=new Kh(s),i=new ge(40,14);for(let o=0;o<a1;o++){const r=new q({map:n,color:5596791,transparent:!0,opacity:0,side:Lt,depthWrite:!1}),a=new I(i,r);a.visible=!1,ht.add(a),Ah.push({mesh:a,mat:r,active:!1,drift:Math.random()*Math.PI*2,speed:.3+Math.random()*.4,baseY:.8+Math.random()*2,wobble:Math.random()*Math.PI*2})}id=!0}function h1(){l1();const s=Ea.CLEAR.duration;Ta=s[0]+Math.random()*(s[1]-s[0])}function u1(s,t,e){if(ua)if(ha-=s,ha<=0){io=Js,Js=null,ua=!1;const o=Ea[io].duration;Ta=o[0]+Math.random()*(o[1]-o[0]),fa=0}else fa=1-ha/Qc;else Ta-=s,Ta<=0&&(Js=c1(),ua=!0,Qc=30+Math.random()*60,ha=Qc,fa=0);const n=Ea[io];if(ua&&Js){const o=Ea[Js],r=.5-.5*Math.cos(fa*Math.PI),a=(c,l)=>c+(l-c)*r;da=a(n.fogMult,o.fogMult),Aa=a(n.rainRate,o.rainRate),pa=a(n.skyDarken,o.skyDarken),sl=a(n.mistCount,o.mistCount),Ri=a(n.windBase,o.windBase),vo=r<.5?io:Js}else da=n.fogMult,Aa=n.rainRate,pa=n.skyDarken,sl=n.mistCount,Ri=n.windBase,vo=io;Ii=vo==="LUMINOUS_STORM",tl+=(Math.sin(t*.05)*.2+Math.sin(t*.13)*.1)*s,el-=s,el<=0&&(el=2+Math.random()*6,nl=Math.random()*.8),nl*=Math.pow(.3,s);const i=Ri+nl;if(Ms=Math.cos(tl)*i,co=Math.sin(tl)*i,ht.fog.density*=da,pa>.001){const o=ht.background,r=1-pa;o.r*=r,o.g*=r,o.b*=r}if(e){const o=Math.round(sl);for(let r=0;r<Ah.length;r++){const a=Ah[r];if(r<o){a.active||(a.active=!0,a.mesh.visible=!0,a.drift=Math.random()*Math.PI*2);const c=10+Math.sin(t*.3+a.wobble)*8,l=a.drift+t*a.speed*.05;a.mesh.position.set(e.x+Math.cos(l)*c,a.baseY+Math.sin(t*.4+a.wobble)*.5,e.z+Math.sin(l)*c),a.mesh.rotation.y=l+Math.PI/2,a.drift+=Ms*s*.02;const h=.03+da*.012;a.mat.opacity+=(h-a.mat.opacity)*s*2}else a.active&&(a.mat.opacity-=s*.5,a.mat.opacity<=.005&&(a.active=!1,a.mesh.visible=!1,a.mat.opacity=0))}}return Ii&&(il-=s,il<=0&&(il=1+Math.random()*4,si=1)),si*=Math.pow(.02,s),si<.01&&(si=0),Aa}function $a(){return Aa}const Jn=300,$o=new Float32Array(Jn),jo=new Float32Array(Jn),Ko=new Float32Array(Jn),ol=new Float32Array(Jn),rl=new Float32Array(Jn),al=new Float32Array(Jn),ds=new Float32Array(Jn),Rn=new Float32Array(Jn*6);let vs=null,Ch=null;function f1(){const s=new be;s.setAttribute("position",new ke(Rn,3)),Ch=new $h({color:8952251,transparent:!0,opacity:.3,depthWrite:!1}),vs=new gm(s,Ch),vs.frustumCulled=!1,vs.visible=!1,ht.add(vs);for(let t=0;t<Jn;t++)ds[t]=0,Op(t)}function Op(s){const t=s*6;Rn[t]=0,Rn[t+1]=-100,Rn[t+2]=0,Rn[t+3]=0,Rn[t+4]=-100,Rn[t+5]=0}function d1(s,t,e,n,i){if(!vs)return;const o=e>.01;if(vs.visible=o,!o)return;Ch.opacity=Math.min(.15+e*.35,.5);const r=Math.floor(e*12*s*60);for(let c=0;c<r;c++){let l=-1;for(let f=0;f<Jn;f++)if(ds[f]<=0){l=f;break}if(l===-1)break;const h=Math.random()*Math.PI*2,u=Math.random()*30;$o[l]=t.x+Math.cos(h)*u,jo[l]=12+Math.random()*10,Ko[l]=t.z+Math.sin(h)*u,ol[l]=n*2+(Math.random()-.5)*.3,rl[l]=-12-Math.random()*8,al[l]=i*2+(Math.random()-.5)*.3,ds[l]=2+Math.random()*1.5}const a=.06;for(let c=0;c<Jn;c++){if(ds[c]<=0)continue;if(ds[c]-=s,ds[c]<=0||jo[c]<qt($o[c],Ko[c])+.1){ds[c]=0,Op(c);continue}$o[c]+=ol[c]*s,jo[c]+=rl[c]*s,Ko[c]+=al[c]*s;const l=c*6;Rn[l]=$o[c],Rn[l+1]=jo[c],Rn[l+2]=Ko[c],Rn[l+3]=$o[c]+ol[c]*a,Rn[l+4]=jo[c]+rl[c]*a,Rn[l+5]=Ko[c]+al[c]*a}vs.geometry.attributes.position.needsUpdate=!0}let Es=null,cl=null,Rh=!1,p1=!1,m1=null,g1=null;function sd(s,t){const e=Es.sampleRate*t,n=Es.createBuffer(1,e,Es.sampleRate),i=n.getChannelData(0);if(s==="white")for(let o=0;o<e;o++)i[o]=Math.random()*2-1;else if(s==="brown"){let o=0;for(let r=0;r<e;r++){const a=Math.random()*2-1;i[r]=(o+.02*a)/1.02,o=i[r],i[r]*=3.5}}return n}function x1(){const s=()=>{if(!Rh){try{Es=new(window.AudioContext||window.webkitAudioContext),cl=Es.createGain(),cl.gain.value=.35,cl.connect(Es.destination),m1=sd("brown",2),g1=sd("white",2),Rh=!0}catch(t){console.warn("Audio init failed:",t)}document.removeEventListener("click",s),document.removeEventListener("keydown",s),document.removeEventListener("touchstart",s)}};document.addEventListener("click",s),document.addEventListener("keydown",s),document.addEventListener("touchstart",s)}function _1(s,t,e,n,i,o,r,a){!Rh||p1||Es.currentTime}function M1(s,t,e,n,i){const o=e.x-s.x,r=e.z-s.z,a=o*o+r*r;if(a>n*n)return!1;if(a<.01)return!0;let l=Math.atan2(r,o)-t;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;return Math.abs(l)<i*.5}function v1(s,t,e,n){const i=t.x-s.x,o=t.z-s.z,r=n?e*1.8:e;return i*i+o*o<r*r}function Bp(s,t,e){let n=0,i=0,o=0;for(let r=0;r<t.length;r++){const a=t[r],c=s.x-a.x,l=s.z-a.z,h=c*c+l*l;if(h>.01&&h<e*e){const u=Math.sqrt(h);n+=c/u/u,i+=l/u/u,o++}}return o>0&&(n/=o,i/=o),{x:n,z:i}}function kp(s,t){if(t.length===0)return{x:0,z:0};let e=0,n=0;for(let i=0;i<t.length;i++)e+=t[i].x,n+=t[i].z;return e/=t.length,n/=t.length,{x:e-s.x,z:n-s.z}}function y1(s,t){const e=Math.sqrt(s.x*s.x+s.z*s.z),n=ae-t;if(e<n)return{x:0,z:0};const i=(e-n)/t,o=Math.min(i*2,3);return{x:-s.x/e*o,z:-s.z/e*o}}function w1(s,t,e,n,i){let o=0,r=0;const a=Math.cos(t)*n,c=Math.sin(t)*n,l=s.x+a,h=s.z+c;for(let u=0;u<e.length;u++){const f=e[u],d=l-f.x,g=h-f.z,_=d*d+g*g,p=(f.colR||i)+1;if(_<p*p&&_>.01){const m=Math.sqrt(_),E=(p-m)/p*2;o+=d/m*E,r+=g/m*E}}return{x:o,z:r}}const Si={deer:!1,puffling:!1,jelly:!1,moth:!1,fairyRing:!1,crystalChain:!1,pond:!1},S1={deer:"Spirit Deer",puffling:"Puffling",jelly:"Luminous Jelly",moth:"Moon Moth",fairyRing:"Fairy Ring",crystalChain:"Crystal Resonance",pond:"Moonlit Pond"};let Ei=null,Ca=0,od="";function b1(){Ei=document.createElement("div"),Ei.id="discovery-text",Ei.style.cssText="position:fixed;top:28%;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:22px;color:#ccffee;text-shadow:0 0 12px #44ffaa,0 0 30px #228866;pointer-events:none;opacity:0;transition:opacity 0.6s;z-index:100;letter-spacing:3px;text-transform:uppercase;",document.body.appendChild(Ei)}function ss(s){Si[s]||(Si[s]=!0,od=S1[s],Ca=3,Ei&&(Ei.textContent=od,Ei.style.opacity="1"))}function E1(s,t,e,n,i,o,r,a){const c=s.x,l=s.z;if(!Si.deer)for(let h=0;h<t.length;h++){const u=t[h].group.position.x-c,f=t[h].group.position.z-l;if(u*u+f*f<144){ss("deer");break}}if(!Si.puffling)for(let h=0;h<e.length;h++){const u=e[h].group.position.x-c,f=e[h].group.position.z-l;if(u*u+f*f<64){ss("puffling");break}}if(!Si.jelly)for(let h=0;h<n.length;h++){const u=n[h].group.position.x-c,f=n[h].group.position.z-l;if(u*u+f*f<100){ss("jelly");break}}if(!Si.moth)for(let h=0;h<i.length;h++){const u=i[h].group.position.x-c,f=i[h].group.position.z-l;if(u*u+f*f<64){ss("moth");break}}if(!Si.fairyRing)for(let h=0;h<o.length;h++){const u=o[h].x-c,f=o[h].z-l;if(u*u+f*f<16){ss("fairyRing");break}}if(!Si.pond)for(let h=0;h<r.length;h++){const u=r[h].x-c,f=r[h].z-l;if(u*u+f*f<25){ss("pond");break}}!Si.crystalChain&&a>=3&&ss("crystalChain")}function T1(s){Ca>0&&(Ca-=s,Ca<=.6&&Ei&&(Ei.style.opacity="0"))}let Ph=null,ll=60;const A1={DUSK:"Dusk",NIGHT:"Night",DEEP_NIGHT:"Deep Night",DAWN:"Dawn"},C1={CLEAR:"Clear",MISTY:"Misty",LIGHT_RAIN:"Light Rain",HEAVY_RAIN:"Heavy Rain",FOG_BANK:"Fog",LUMINOUS_STORM:"Storm"};function R1(){Ph=document.getElementById("hud")}function P1(s,t){if(!Ph)return;ll=ll*.95+1/Math.max(s,.001)*.05;const e=He==="SEEK"?"Seek the orbs...":He==="RISING"?"The obelisk stirs...":He==="COMPLETE"?"Convergence!":"Luminaries",n=A1[De]||"Night",i=C1[vo]||"Clear";Ph.innerHTML="<b>"+e+"</b> · "+n+" · "+i+" · FPS:"+Math.round(ll)+"<br>Pos:"+t.x.toFixed(0)+","+t.z.toFixed(0)}let ja=null;function I1(){ja=document.getElementById("orb-hud")}function L1(){return ja}function D1(){const s=document.getElementById("overlay");s&&(s.style.opacity="0",setTimeout(()=>{try{s.remove()}catch{}},2500)),ja&&(ja.style.display="block")}const ne=[],wn=[],ie=[],oi=[],An=[],Be=[],Io=[],Ih=[],vr=[],ui=[],Lh=[],Ka=[],Ja=[],ur=[],ci=[],ri=[],We=[],In=[],Dh=[],Uh=[],Gp=[],Bi=[];let rd=0,ad=0,hl=0,kn=null,ni=0;const Nh=15,zh=[];let cd=!1;function U1(){if(cd)return;cd=!0;const s=new $h({color:F.crystal,transparent:!0,opacity:0,blending:he,depthWrite:!1});for(let t=0;t<Nh;t++){const e=new be,n=new Float32Array(6);e.setAttribute("position",new ke(n,3)),e.attributes.position.setUsage(we);const i=new Nd(e,s.clone());i.visible=!1,ht.add(i),zh.push({line:i,geo:e,opacity:0,active:!1})}}let os=null;function N1(){if(os)return os;const s=new Co(.9,1,48),t=new q({color:F.echoBloom,transparent:!0,opacity:.5,side:Lt,depthWrite:!1,blending:he});return os=new I(s,t),os.rotation.x=-Math.PI/2,os.visible=!1,ht.add(os),os}function z1(){for(let t=0;t<Fv;t++){let e,n,i=!1;for(let o=0;o<20;o++){const r=w()*6.28,a=5+w()*(ae-10);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<ne.length;c++){const l=ne[c].x-e,h=ne[c].z-n;if(l*l+h*h<9){i=!1;break}}if(i)break}if(i){const o=By(e,n);o.position.y=qt(e,n),ne.push({group:o,x:e,z:n})}}for(let t=0;t<Ov;t++){const e=ne[Math.floor(w()*ne.length)],n=w()*6.28,i=1+w()*4,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i,a=ky(o,r);a.group.position.y=qt(o,r),wn.push(a)}for(let t=0;t<Bv;t++){const e=w()*6.28,n=8+w()*ae*.6,i=Math.cos(e)*n,o=Math.sin(e)*n,r=Gy(i,o);r.group.position.y=qt(i,o),ie.push(r)}for(let t=0;t<kv;t++){const e=w()*6.28,n=10+w()*ae*.5,i=Math.cos(e)*n,o=Math.sin(e)*n;oi.push(nw(i,qt(i,o)+3+w()*5,o))}for(let t=0;t<Gv;t++){const e=wn[Math.floor(w()*wn.length)],n=w()*6.28,i=1+w()*5,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i,a=iw(o,r);a.group.position.y=qt(o,r),a._baseY=qt(o,r),An.push(a)}for(let t=0;t<Hv;t++){const e=w()*6.28,n=12+w()*ae*.5,i=Math.cos(e)*n,o=Math.sin(e)*n,r=sw(i,o),a=qt(i,o);r.group.position.y=a,r._baseY=a,Be.push(r)}for(let t=0;t<Vv;t++){const e=ne[Math.floor(w()*ne.length)];Io.push(ow(e.x,qt(e.x,e.z)+2+w()*4,e.z))}const s=[null,F.grassPurple,F.grassBlue,F.grassTeal];for(let t=0;t<Wv;t++){const e=w()*6.28,n=2+w()*(ae*.9),i=Math.cos(e)*n,o=Math.sin(e)*n,r=s[Math.floor(w()*s.length)],a=Hy(i,o,2+w()*2.5,25+Math.floor(w()*20),r);a.mesh.position.y=qt(i,o),Ih.push(a)}for(let t=0;t<Zv;t++){let e,n,i=!1;for(let o=0;o<10;o++){const r=w()*6.28,a=3+w()*(ae*.85);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<ne.length;c++){const l=ne[c].x-e,h=ne[c].z-n;if(l*l+h*h<4){i=!1;break}}if(i)break}if(i){const o=uw(e,n);o.group.position.y=qt(e,n)-.08,Ka.push(o)}}for(let t=0;t<Xv;t++){const e=ne[Math.floor(w()*ne.length)],n=w()*6.28,i=1+w()*5,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i,a=Wy(o,r);a.group.position.y=qt(o,r),vr.push(a)}for(let t=0;t<Yv;t++){const e=w()*6.28,n=3+w()*(ae*.7),i=Math.cos(e)*n,o=Math.sin(e)*n,r=Xy(i,o);r.group.position.y=qt(i,o),ui.push(r)}for(let t=0;t<qv;t++){const e=w()*6.28,n=4+w()*(ae*.8),i=Math.cos(e)*n,o=Math.sin(e)*n,r=Yy(i,o);r.group.position.y=qt(i,o),Lh.push(r)}for(let t=0;t<to;t++){let e,n,i=!1;for(let o=0;o<30;o++){const r=w()*6.28,a=20+w()*(ae*.6);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<In.length;c++){const l=In[c].x-e,h=In[c].z-n;if(l*l+h*h<225){i=!1;break}}if(i)break}if(i){const o=hw(e,n);o.group.position.y=qt(e,n)+1,o.flyY=qt(e,n)+1,In.push(o)}}for(let t=0;t<Qd;t++){const e=w()*6.28,n=2+w()*3,i=Math.cos(e)*n,o=Math.sin(e)*n;Ja.push(rw(i,qt(i,o)+1+w()*.5,o))}for(let t=0;t<$v;t++){const e=w()*6.28,n=4+w()*(ae*.7),i=Math.cos(e)*n,o=Math.sin(e)*n,r=jy(i,o);r.group.position.y=qt(i,o),ur.push(r)}for(let t=0;t<jv;t++){let e,n,i=!1;for(let o=0;o<20;o++){const r=w()*6.28,a=10+w()*(ae*.6);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<ne.length;c++){const l=ne[c].x-e,h=ne[c].z-n;if(l*l+h*h<36){i=!1;break}}if(i)break}if(i){ch(e,n,4);const o=aw(e,n);o.group.position.y=qt(e,n),ci.push(o)}}for(let t=0;t<Kv;t++){const e=w()*6.28,n=5+w()*ae*.6,i=Math.cos(e)*n,o=Math.sin(e)*n;ri.push(cw(i,qt(i,o)+.5+w()*5,o))}for(let t=0;t<Qv;t++){let e,n,i=!1;for(let o=0;o<20;o++){const r=w()*6.28,a=8+w()*(ae*.6);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<ne.length;c++){const l=ne[c].x-e,h=ne[c].z-n;if(l*l+h*h<16){i=!1;break}}if(i)break}if(i){ch(e,n,3);const o=lw(e,n);o.group.position.y=qt(e,n),We.push(o)}}for(let t=0;t<ty;t++){const e=w()*6.28,n=5+w()*(ae*.7),i=Math.cos(e)*n,o=Math.sin(e)*n,r=Jy(i,o);r.group.position.y=qt(i,o),Dh.push(r)}for(let t=0;t<ey;t++){const e=ne[Math.floor(w()*ne.length)],n=w()*6.28,i=2+w()*4,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i,a=Qy(o,r);a.group.position.y=qt(o,r),Uh.push(a)}for(let t=0;t<ny;t++){const e=w()*6.28,n=6+w()*(ae*.65),i=Math.cos(e)*n,o=Math.sin(e)*n,r=tw(i,o);r.group.position.y=qt(i,o),Gp.push(r)}}function Hp(s,t){const e=1+Ri*1.5,n=Ms*.03,i=co*.03,o=J.pos.x,r=J.pos.z;for(let a=0;a<ne.length;a++){const c=ne[a],l=c.x-o,h=c.z-r;if(l*l+h*h>900)continue;const u=c.x*.1+c.z*.13;c.group.rotation.z=Math.sin(t*.3+u)*.004*e+n*.15,c.group.rotation.x=Math.sin(t*.25+u+1)*.003*e+i*.15}for(let a=0;a<Ih.length;a++){const c=Ih[a],l=c.cx-o,h=c.cz-r;l*l+h*h>625||Vy(c,t,e,n,i,o,r)}for(let a=0;a<vr.length;a++){const c=vr[a],l=c.group.position.x-o,h=c.group.position.z-r;l*l+h*h>900||(c.group.rotation.z=Math.sin(t*.8+c.phase)*.03*e+n,c.group.rotation.x=Math.sin(t*.6+c.phase+1)*.02*e+i)}for(let a=0;a<ui.length;a++){const c=ui[a],l=c.group.position.x-o,h=c.group.position.z-r;if(l*l+h*h>900)continue;const u=Math.sin(t*1+c.phase)*.5+.5;c.petalMat.emissiveIntensity=(.3+u*.5)*ve,c.group.rotation.z=Math.sin(t*.9+c.phase)*.04*e+n*.5}for(let a=0;a<Lh.length;a++){const c=Lh[a],l=c.group.position.x-o,h=c.group.position.z-r;l*l+h*h>900||(c.group.rotation.z=Math.sin(t*1.1+c.phase)*c.swayAmp*e+n,c.group.rotation.x=Math.sin(t*.8+c.phase+2)*c.swayAmp*.5*e+i)}for(let a=0;a<Dh.length;a++){const c=Dh[a],l=Math.sin(t*1.2+c.phase)*.5+.5;c.orbMat.emissiveIntensity=(.5+l*.5)*ve,c.hazeMat.opacity=(.04+l*.04)*ve,c.group.rotation.z=Math.sin(t*.5+c.phase)*.02*e+n*.3,c.group.rotation.x=Math.sin(t*.4+c.phase+1)*.015*e+i*.3}for(let a=0;a<Uh.length;a++){const c=Uh[a];for(let l=0;l<c.podMats.length;l++){const h=Math.sin(t*1.5+c.phase+l*1.8)*.5+.5;c.podMats[l].emissiveIntensity=(.3+h*.5)*ve}c.group.rotation.z=Math.sin(t*.35+c.phase)*.01*e+n*.2}ew(Gp,s,t,ve)}function Vp(s,t){for(let n=0;n<oi.length;n++){const i=oi[n],o=i.group,r=o.position.x,a=o.position.z;i._syncPhase===void 0&&(i._syncPhase=i.phase);let c=0,l=0;for(let h=0;h<oi.length;h++){if(h===n)continue;const u=oi[h],f=u.group.position.x-r,d=u.group.position.z-a;f*f+d*d<225&&(c+=u._syncPhase||u.phase,l++)}if(l>0){const h=c/l;i._syncPhase+=(h-i._syncPhase)*s*.4}}const e=De==="DEEP_NIGHT"?2:De==="DAWN"?-1.5:0;for(let n=0;n<oi.length;n++){const i=oi[n],o=i.group,r=o.position.x,a=o.position.z,c=i.floatY+e;if(i._stT-=s,i._stT<=0)if(Ii)i._state="display",i._stT=10+Math.random()*15;else{const d=Math.random();d<.5?(i._state="drift",i._stT=20+Math.random()*30):d<.75?(i._state="pulse",i._stT=8+Math.random()*12):(i._state="migrate",i._migrateAng=Math.random()*6.28,i._stT=15+Math.random()*20)}switch(Ii&&i._state!=="display"&&(i._state="display",i._stT=10,J.pos,void 0),i._state){case"drift":{i.driftAng+=s*.15;const d=8+Math.sin(t*.1+i.phase)*4,g=i.homeX+Math.cos(i.driftAng)*d,_=i.homeZ+Math.sin(i.driftAng)*d;o.position.x+=(g-r)*s*.3,o.position.z+=(_-a)*s*.3,o.position.y=c+Math.sin(t*i.wobble+i.phase)*1.5;break}case"pulse":{i.driftAng+=s*.08,o.position.x+=Math.cos(i.driftAng)*s*.3,o.position.z+=Math.sin(i.driftAng)*s*.3,o.position.y=c+Math.sin(t*i.wobble+i.phase)*1,i._pulseSync=Math.sin(t*2+i._syncPhase)*.5+.5;break}case"migrate":{o.position.x+=Math.cos(i._migrateAng)*s*1,o.position.z+=Math.sin(i._migrateAng)*s*1,o.position.y=c+Math.sin(t*i.wobble+i.phase)*.8,o.position.x*o.position.x+o.position.z*o.position.z>ae*.8*(ae*.8)&&(i._migrateAng+=Math.PI);break}case"display":{i.driftAng+=s*.4,o.position.x+=Math.cos(i.driftAng)*s*.8,o.position.z+=Math.sin(i.driftAng)*s*.8,o.position.y=c+Math.sin(t*2+i.phase)*2,i._syncPhase+=(0-i._syncPhase)*s*2;break}}i._state==="pulse"&&Math.random()<.003&&(J.pos,void 0);const l=i._syncPhase||i.phase,h=Math.sin(t*1.2+l)*.5+.5;let u=1,f=0;if(i._state==="pulse")u=1+i._pulseSync*1.5,f=i._pulseSync*.15;else if(i._state==="display"){const d=Math.sin(t*4)*.5+.5;u=1.5+d*1.2,f=.15+d*.1}else i._state==="drift"&&(u=1+h*.3);i.bellMat.emissiveIntensity=(.4+h*.8)*ve*u,i.bellMat.opacity=.35+h*.25+f,o.rotation.y+=s*.2;for(let d=2;d<o.children.length;d++)o.children[d].rotation.x=Math.sin(t*2+d+l)*.15,o.children[d].rotation.z=Math.sin(t*1.5+d*.7+l)*.1}}function Wp(s,t){const e=Pe.ShiftLeft||Pe.ShiftRight||zo,n=De==="DAWN"?.6:De==="NIGHT"?1.3:1,i=De==="DAWN"?2:De==="NIGHT"?.6:1;for(let o=0;o<An.length;o++){const r=An[o],a=r.group,c=a.position.x,l=a.position.z,h=c-J.pos.x,u=l-J.pos.z,f=h*h+u*u;if(r.state!=="startled"&&r.state!=="following"&&r.state!=="huddle"){const b=e?3.5:2;let S=f<b*b;if(!S)for(let y=0;y<Be.length;y++){if(Be[y].state!=="flee")continue;const x=Be[y].group.position.x-c,C=Be[y].group.position.z-l;if(x*x+C*C<25){S=!0;break}}S&&(r.state="startled",r._scaredT=.6+Math.random()*.5,r.wanderAng=Math.atan2(h,u),r.hopTimer=0,J.pos,void 0)}if(Ii&&r.state!=="startled"&&r.state!=="huddle"){let b=1/0,S=-1;for(let y=0;y<An.length;y++){if(y===o)continue;const x=An[y].group.position.x-c,C=An[y].group.position.z-l,U=x*x+C*C;U<b&&(b=U,S=y)}S>=0&&b>1&&(r.state="huddle",r._huddleTarget=S)}Po>8&&f<144&&r.state==="idle"&&Math.random()<.001&&(r.state="following",r._followT=10+Math.random()*10);const d=c-r._lastTX,g=l-r._lastTZ;d*d+g*g>.25&&(r._baseY=qt(c,l),r._lastTX=c,r._lastTZ=l);const _={x:c,z:l},p=[];for(let b=0;b<An.length;b++){if(b===o)continue;const S=An[b].group.position.x,y=An[b].group.position.z;(S-c)*(S-c)+(y-l)*(y-l)<100&&p.push({x:S,z:y})}const m=Bp(_,p,1.5),E=p.length>0?kp(_,p):{x:0,z:0},v=m.x*2+E.x*.3,M=m.z*2+E.z*.3,A=Math.sqrt(v*v+M*M);switch(r.state){case"idle":{if(r.idleTimer-=s,a.position.y=r._baseY+Math.sin(t*2+r.phase)*.02,a.rotation.y+=Math.sin(t*.5+r.phase)*s*.3,A>.1&&p.length>1&&(a.position.x+=E.x*.05*s,a.position.z+=E.z*.05*s),Math.random()<.001&&(J.pos,void 0),r.idleTimer<=0){const b=A>.2?Math.atan2(v,M):0;r.state="hop",r.wanderAng+=(Math.random()-.5)*1.5+b*.3,r.hopTimer=0}break}case"hop":{r.hopTimer+=s;const S=r.hopTimer/1.2;if(S>=1)r.state="idle",r.idleTimer=(1.5+Math.random()*3)*i,a.position.y=r._baseY;else{a.position.y=r._baseY+Math.sin(S*Math.PI)*.3,a.position.x+=Math.sin(r.wanderAng)*r.speed*n*s,a.position.z+=Math.cos(r.wanderAng)*r.speed*s;const y=1-Math.sin(S*Math.PI)*.15,x=1+Math.sin(S*Math.PI)*.2;a.scale.set(y,x,y),a.rotation.y=r.wanderAng}break}case"startled":{r._scaredT-=s,r.hopTimer+=s*1.5;const b=Math.min(r.hopTimer/.8,1);a.position.y=r._baseY+Math.sin(b*Math.PI)*.5,a.position.x+=Math.sin(r.wanderAng)*r.speed*2*s+m.x*.5*s,a.position.z+=Math.cos(r.wanderAng)*r.speed*2*s+m.z*.5*s,a.scale.set(.85,1.3,.85),r._scaredT<=0&&(r.state="idle",r.idleTimer=3+Math.random()*3,a.position.y=r._baseY,a.scale.set(1,1,1));break}case"following":{if(r._followT-=s,f>225||Po<3||r._followT<=0){r.state="idle",r.idleTimer=2;break}if(r.wanderAng=Math.atan2(J.pos.x-c,J.pos.z-l),f>9){r.hopTimer+=s;const b=r.hopTimer%1.5/1.5;a.position.y=r._baseY+Math.sin(b*Math.PI)*.2,a.position.x+=Math.sin(r.wanderAng)*r.speed*.4*s,a.position.z+=Math.cos(r.wanderAng)*r.speed*.4*s}else a.position.y=r._baseY+Math.sin(t*3+r.phase)*.03;a.rotation.y=r.wanderAng;break}case"huddle":{if(!Ii){r.state="idle",r.idleTimer=2;break}const b=An[r._huddleTarget];if(b){const S=b.group.position.x-c,y=b.group.position.z-l,x=Math.sqrt(S*S+y*y);x>.5&&(a.position.x+=S/x*r.speed*.5*s,a.position.z+=y/x*r.speed*.5*s)}a.rotation.z=Math.sin(t*8)*.05,a.position.y=r._baseY;break}}if(r._blinkTimer-=s,r._blinkTimer<=0)if(r._blinkState===0){for(let b=0;b<r.eyes.length;b++)r.eyes[b].scale.y=.1;r._blinkState=1,r._blinkTimer=.08+Math.random()*.06}else{for(let b=0;b<r.eyes.length;b++)r.eyes[b].scale.y=1;r._blinkState=0,r._blinkTimer=2+Math.random()*5}for(let b=0;b<r.ears.length;b++){const S=r.ears[b];S.mesh.rotation.z=S.baseRotZ+Math.sin(t*3.5+S.side*1.2+r.phase)*.08}r.tail.position.y=.38+Math.sin(t*4+r.phase)*.015,a.position.x*a.position.x+a.position.z*a.position.z>ae*.85*(ae*.85)&&(r.wanderAng+=Math.PI)}}function Xp(s,t){const e=Pe.ShiftLeft||Pe.ShiftRight||zo;for(let n=0;n<Be.length;n++){const i=Be[n],o=i.group,r=o.position.x,a=o.position.z,c=r-J.pos.x,l=a-J.pos.z,h=c*c+l*l,u=Math.atan2(c,l),f=e?18:12,d=f*f,g=e?10:oy,_=g*g,p=r-i._lastTX,m=a-i._lastTZ;p*p+m*m>.25&&(i._baseY=qt(r,a),i._lastTX=r,i._lastTZ=a);const E=i._baseY;if(i.state!=="flee"&&i.state!=="alert"&&i.state!=="watching"){const x={x:r,z:a},C={x:J.pos.x,z:J.pos.z};h<_||v1(x,C,g,e)?(i.state="flee",i.wanderAng=u,i.fleeTimer=2.5+Math.random()*2,i._zigTimer=0,J.pos,void 0):(h<d||M1(x,i.wanderAng,C,f,Math.PI*.5))&&(i.state="alert",i._stT=1+Math.random()*1.5,J.pos,void 0)}if(i.state!=="flee")for(let x=0;x<Be.length;x++){if(x===n||Be[x].state!=="flee")continue;const C=Be[x].group.position.x-r,U=Be[x].group.position.z-a;if(C*C+U*U<400){i.state="flee",i.wanderAng=Be[x].wanderAng+(Math.random()-.5)*.4,i.fleeTimer=2+Math.random()*1.5,i._zigTimer=0;break}}const v=[];for(let x=0;x<Be.length;x++){if(x===n)continue;const C=Be[x].group.position.x,U=Be[x].group.position.z;(C-r)*(C-r)+(U-a)*(U-a)<400&&v.push({x:C,z:U})}const M=Bp({x:r,z:a},v,3),A=v.length>0?kp({x:r,z:a},v):{x:0,z:0};(i.state==="alert"||i.state==="watching")&&(i.headLook+=(u-i.wanderAng)*.3*s);let T=i.speed,b=!1;switch(i.state){case"walk":{if(b=!0,i.walkTimer-=s,i.walkTimer<=0){const C=Math.random(),U=De==="DUSK"?.55:.4,L=De==="DEEP_NIGHT"?.25:.1;if(C<.25)i.state="pause",i.pauseTimer=2+Math.random()*3;else if(C<U)i.state="graze",i._stT=De==="DUSK"?5+Math.random()*6:3+Math.random()*4;else if(C<U+.1&&We.length>0){i.state="drink",i._stT=8;let z=1/0;for(let V=0;V<We.length;V++){const G=We[V].x-r,Z=We[V].z-a,W=G*G+Z*Z;W<z&&(z=W,i._drinkTgt=We[V])}}else C<U+.1+L?(i.state="rest",i._stT=De==="DEEP_NIGHT"?8+Math.random()*8:5+Math.random()*5):(i.wanderAng+=(Math.random()-.5)*1.2,i.walkTimer=3+Math.random()*5)}if((r-i.homeX)*(r-i.homeX)+(a-i.homeZ)*(a-i.homeZ)>400){const C=Math.atan2(i.homeX-r,i.homeZ-a);i.wanderAng+=(C-i.wanderAng)*s*.5}if(v.length>0){const C=Math.atan2(A.x*.15+M.x*.8,A.z*.15+M.z*.8);i.wanderAng+=(C-i.wanderAng)*s*.3}break}case"pause":{i.pauseTimer-=s,i.headLook=Math.sin(t*.6)*.4,i.pauseTimer<=0&&(i.state="walk",i.walkTimer=3+Math.random()*5);break}case"graze":{i._stT-=s,i.headBob=-.5,i._stT<=0&&(i.state="walk",i.walkTimer=2+Math.random()*4,i.headBob=0);break}case"drink":{if(i._stT-=s,i._drinkTgt){const x=i._drinkTgt.x-r,C=i._drinkTgt.z-a;Math.sqrt(x*x+C*C)>2?(i.wanderAng=Math.atan2(x,C),b=!0,T=i.speed*.7):i.headBob=-.6}i._stT<=0&&(i.state="walk",i.walkTimer=3+Math.random()*4,i.headBob=0,i._drinkTgt=null);break}case"rest":{i._stT-=s,o.position.y=Math.max(E-.3,o.position.y-s*.5),i._stT<=0&&(i.state="walk",i.walkTimer=2+Math.random()*3);break}case"alert":{i._stT-=s,h<_?(i.state="flee",i.wanderAng=u,i.fleeTimer=2.5+Math.random()*2):i._stT<=0&&(h<f*1.2*(f*1.2)?(i.state="watching",i._stT=3+Math.random()*3):(i.state="walk",i.walkTimer=2+Math.random()*3));break}case"watching":{i._stT-=s,b=!0,T=i.speed*.3,i.wanderAng=u,h<_?(i.state="flee",i.wanderAng=u,i.fleeTimer=2.5+Math.random()*2):(h>f*1.5*(f*1.5)||i._stT<=0)&&(i.state="walk",i.walkTimer=2+Math.random()*4);break}case"flee":{b=!0,T=i.speed*ry,i.fleeTimer-=s,i._zigTimer-=s,i._zigTimer<=0&&(i._zigDir*=-1,i._zigTimer=.4+Math.random()*.4),i.wanderAng=u+i._zigDir*.3;const x=w1({x:r,z:a},i.wanderAng,ne,3,1.5);x.x*x.x+x.z*x.z>.01&&(i.wanderAng+=Math.atan2(x.z,x.x)*.3);const C=y1({x:r,z:a},8);(C.x!==0||C.z!==0)&&(i.wanderAng=Math.atan2(C.z,C.x)),(i.fleeTimer<=0||h>f*2*(f*2))&&(i.state="walk",i.walkTimer=3+Math.random()*5);break}}if(b&&(o.position.x+=Math.sin(i.wanderAng)*T*s,o.position.z+=Math.cos(i.wanderAng)*T*s,i.legCycle+=s*T*3),o.position.x*o.position.x+o.position.z*o.position.z>ae*.9*(ae*.9)&&(i.wanderAng=Math.atan2(-o.position.x,-o.position.z)),i.state!=="rest"){const x=E-o.position.y;Math.abs(x)>.01?o.position.y+=Math.sign(x)*Math.min(Math.abs(x),s*2):o.position.y=E}if(o.rotation.y=i.wanderAng,i.state==="alert"||i.state==="watching"){const x=u-i.wanderAng;i.headLook+=(x*.5-i.headLook)*s*3}const y=i.headBob||0;i.neckPivot.rotation.x+=(y-i.neckPivot.rotation.x)*s*3,i.neckPivot.rotation.y+=(i.headLook-i.neckPivot.rotation.y)*s*4,b&&i.state!=="graze"&&i.state!=="drink"&&(i.neckPivot.rotation.x+=Math.sin(i.legCycle*2)*.05);for(let x=0;x<i.legPivots.length;x++){const C=i.legPivots[x];if(b){const U=C.isFront?0:Math.PI,L=C.side>0?Math.PI:0,z=Math.sin(i.legCycle+U+L)*.4*(T/i.speed);C.upper.rotation.x=z,C.lower.rotation.x=Math.max(0,-z*.6)}else i.state==="rest"&&o.position.y<-.1?(C.upper.rotation.x+=(.8-C.upper.rotation.x)*s*2,C.lower.rotation.x+=(1-C.lower.rotation.x)*s*2):(C.upper.rotation.x*=.9,C.lower.rotation.x*=.9)}i.tailPivot.rotation.x=Math.sin(t*1.5+i.phase)*.15,i.state==="flee"&&(i.tailPivot.rotation.x+=.3),i.state==="alert"?i.tailPivot.rotation.z=Math.sin(t*6)*.1:i.tailPivot.rotation.z*=.9,i.mat.emissiveIntensity=(.3+Math.sin(t*.8+i.phase)*.2)*ve,i.headLook*=.98}}function Yp(s,t){for(let e=0;e<Io.length;e++){const n=Io[e],i=n.group,o=i.position.x,r=i.position.z;if(n._state==="patrol"){if(Math.random()<.002){let g=1/0,_=null;for(let p=0;p<ie.length;p++){const m=ie[p].x-o,E=ie[p].z-r,v=m*m+E*E;v<900&&v<g&&(g=v,_=ie[p])}for(let p=0;p<ci.length;p++){if(ci[p].glowIntensity<.3)continue;const m=ci[p].x-o,E=ci[p].z-r,v=m*m+E*E;v<900&&v<g&&(g=v,_=ci[p])}_&&(n._state="attracted",n._attractTarget=_,n._stT=6+Math.random()*8,J.pos,void 0)}const d=De==="DAWN"?.005:De==="DEEP_NIGHT"?3e-4:.001;if(Math.random()<d){let g=1/0,_=null;for(let p=0;p<ne.length;p++){const m=ne[p].x-o,E=ne[p].z-r,v=m*m+E*E;v<400&&v<g&&(g=v,_=ne[p])}_&&(n._state="rest",n._restTree=_,n._stT=De==="DAWN"?8+Math.random()*10:4+Math.random()*6)}}const a=De==="DEEP_NIGHT"?1.6:De==="DAWN"?.5:1,c=De==="DEEP_NIGHT"?1.4:1;switch(n._state){case"patrol":{n.orbitAng+=s*.4*a;const d=n.centerX+Math.cos(n.orbitAng)*n.orbitR*c,g=n.centerZ+Math.sin(n.orbitAng)*n.orbitR*c;i.position.x+=(d-o)*s*1.5,i.position.z+=(g-r)*s*1.5,i.position.y=n.floatY+Math.sin(t*.7+n.phase)*.8,i.rotation.y=n.orbitAng+Math.PI/2;break}case"attracted":{if(n._stT-=s,!n._attractTarget||n._stT<=0){n._state="patrol",n._attractTarget=null;break}n.orbitAng+=s*.8;const d=n._attractTarget,g=Math.max(.5,n._stT*.4),_=d.x+Math.cos(n.orbitAng)*g,p=d.z+Math.sin(n.orbitAng)*g;i.position.x+=(_-o)*s*2,i.position.z+=(p-r)*s*2,i.position.y+=(2-i.position.y)*s*.5,i.rotation.y=n.orbitAng+Math.PI/2;break}case"rest":{if(n._stT-=s,!n._restTree||n._stT<=0){n._state="patrol",n._restTree=null,n.centerX=i.position.x,n.centerZ=i.position.z;break}const d=n._restTree,g=d.x+.5-o,_=d.z+.5-r,p=Math.sqrt(g*g+_*_);p>.3&&(i.position.x+=g/p*s*2,i.position.z+=_/p*s*2),i.position.y+=(2.5-i.position.y)*s*1.5,i.rotation.y=Math.atan2(g,_);break}}const l=n._state==="rest"?.05:.4,h=Math.sin(t*n.flapSpeed+n.phase)*l;for(let d=0;d<i._wingPivots.length;d++){const g=i._wingPivots[d];g.pivot.rotation.z=h*g.side}const u=Math.sin(t*1.5+n.phase)*.5+.5,f=n._state==="attracted"?.4:0;n.wingMat.emissiveIntensity=(.5+u*.6+f)*ve,n.wingMat.opacity=.45+u*.25}}function F1(s,t){const e=Pe.ShiftLeft||Pe.ShiftRight||zo;let n=null;if(Po>5&&(He==="SEEK"||He==="RISING")){let i=1/0;for(let o=0;o<In.length;o++){if(In[o].found)continue;const r=In[o].x-J.pos.x,a=In[o].z-J.pos.z,c=r*r+a*a;c<i&&(i=c,n=In[o])}}for(let i=0;i<Ja.length;i++){const o=Ja[i],r=t*.5+o.phase+i/Qd*6.28,a=e?4+i*2:1.5+i*.8,c=e?3+i:1.2+Math.sin(t*.7+o.phase)*.5;if(o.targetX=J.pos.x+Math.cos(r)*a,o.targetY=J.pos.y-ic+c,o.targetZ=J.pos.z+Math.sin(r)*a,i===0&&n){const g=Math.min((Po-5)/3,.6);o.targetX+=(n.x-J.pos.x)*g,o.targetZ+=(n.z-J.pos.z)*g,o.targetY+=.5}const l=e?.8:2.5;o.velX+=(o.targetX-o.group.position.x)*l*s,o.velY+=(o.targetY-o.group.position.y)*l*s,o.velZ+=(o.targetZ-o.group.position.z)*l*s,o.velX*=.92,o.velY*=.92,o.velZ*=.92,o.group.position.x+=o.velX*s*4,o.group.position.y+=o.velY*s*4,o.group.position.z+=o.velZ*s*4;const h=Math.sin(t*2+o.phase)*.5+.5;o.glowMat.opacity=.3+h*.4,o.hazeMat.opacity=.08+h*.12;const u=t*(2.5+i*.5)+o.phase,f=.14+Math.sin(t*1.3+o.phase)*.06;o.group.children[5].position.set(Math.cos(u)*f,Math.sin(u*1.5)*.08,Math.sin(u)*f);for(let g=0;g<o.tendrils.length;g++){const _=o.tendrils[g],p=Math.sin(t*3+g*2.1+o.phase)*.3,m=.08+Math.sin(t*2+g*1.5)*.04;_.mesh.position.x=Math.cos(_.baseAng+p)*m,_.mesh.position.z=Math.sin(_.baseAng+p)*m,_.mesh.rotation.y=_.baseAng+p,_.mesh.rotation.z=Math.PI/3+Math.sin(t*2.5+g)*.2}for(let g=0;g<o.embers.length;g++){const _=(g+1)*.08;o.embers[g].position.y=-.06-_+Math.sin(t*4+g*1.4+o.phase)*.03,o.embers[g].position.x=Math.sin(t*2.5+g*2+o.phase)*.06,o.embers[g].material.opacity=.2+Math.sin(t*5+g*1.7)*.15}o.facet.rotation.y+=s*1.5,o.facet.rotation.x+=s*.7,o.halo.rotation.z+=s*.3,o.halo2.rotation.y+=s*.2}}function O1(s,t){for(let e=0;e<ci.length;e++){const n=ci[e],i=n.x-J.pos.x,o=n.z-J.pos.z,a=i*i+o*o<(ih+.5)*(ih+.5),c=a?1:0;n.glowIntensity+=(c-n.glowIntensity)*s*3,n.discMat.opacity=n.glowIntensity*.25*(.6+Math.sin(t*2+n.phase)*.4),n.mushMat.emissiveIntensity=(.2+n.glowIntensity*.8)*ve,a&&J.vel.y>0&&J.vel.y<=Oa+.5&&(J.vel.y=Oa+iy,n.glowIntensity=1.5);const l=.08+n.glowIntensity*.25;n.sporeMat.opacity=l;for(let h=0;h<n.spores.length;h++){const u=n.spores[h];u.drift+=s*.3,u.mesh.position.y+=u.speed*s*(.5+n.glowIntensity),u.mesh.position.x=u.baseX+Math.sin(t*.8+u.drift)*.15,u.mesh.position.z=u.baseZ+Math.cos(t*.6+u.drift)*.12,u.mesh.position.y>.8&&(u.mesh.position.y=.03),u.mesh.scale.setScalar(.6+Math.sin(t*2+h)*.4)}for(let h=0;h<n.glowWorms.length;h++){const u=Math.sin(t*1.5+h*1.3+n.phase)*.5+.5;n.glowWorms[h].material.opacity=.1+u*.4+n.glowIntensity*.3}}}function B1(s,t){for(let e=0;e<ri.length;e++){const n=ri[e];if(n.popped){if(n.popTimer-=s,n.popTimer<=0){n.popped=!1,n.group.visible=!0;const h=w()*6.28,u=8+w()*ae*.5;n.homeX=Math.cos(h)*u,n.homeZ=Math.sin(h)*u,n.floatY=.5+w()*4,n.group.position.set(n.homeX,n.floatY,n.homeZ)}continue}n.driftAng+=s*.2;const i=n.homeX+Math.sin(n.driftAng)*3,o=n.homeZ+Math.cos(n.driftAng*.7)*3;n.group.position.x+=(i-n.group.position.x)*s*.5,n.group.position.z+=(o-n.group.position.z)*s*.5,n.group.position.y=n.floatY+Math.sin(t*.6+n.phase)*n.bobAmp;const r=(t*.1+n.phase)%1;n.shellMat.color.setRGB(Math.sin(r*6.28)*.15+.7,Math.sin(r*6.28+2.09)*.15+.7,Math.sin(r*6.28+4.19)*.15+.8),n.shellMat.opacity=.18+Math.sin(t*1.5+n.phase)*.08;const a=n.group.position.x-J.pos.x,c=n.group.position.y-J.pos.y,l=n.group.position.z-J.pos.z;a*a+c*c+l*l<zf*zf*n.sc*n.sc&&(n.popped=!0,n.popTimer=8+Math.random()*8,n.group.visible=!1,Nw(n.group.position.x,n.group.position.y,n.group.position.z,6),n.group.position,J.pos,void 0)}}function k1(s,t){const e=$a();for(let n=0;n<We.length;n++){const i=We[n],o=.015+e*.01;for(let u=0;u<i.pads.length;u++)i.pads[u].mesh.position.y=.05+Math.sin(t*(.8+e*.4)+i.pads[u].phase)*o;const r=e*.08;i.waterMat.emissiveIntensity=(.15+r+Math.sin(t*1+i.phase)*.1)*ve;const a=Math.sin(t*1.2+i.phase)*.5+.5;i.flMat.emissiveIntensity=(.3+a*.5)*ve;const c=.25+e*.2,l=.12+e*.08;for(let u=0;u<i.ripples.length;u++){const f=i.ripples[u],d=(t*c+f.phase)%1,g=.2+d*i.pondR*.8;f.mesh.scale.setScalar(g),f.mesh.material.opacity=(1-d)*l}const h=1+e*.5;for(let u=0;u<i.tadpoles.length;u++){const f=i.tadpoles[u];f.ang+=f.speed*h*s;const d=Math.cos(f.ang)*f.orbR,g=Math.sin(f.ang)*f.orbR;f.body.position.x=d,f.body.position.z=g,f.body.rotation.y=f.ang+Math.PI/2;const _=.02;f.tail.position.x=d-Math.cos(f.ang)*_,f.tail.position.z=g-Math.sin(f.ang)*_,f.tail.rotation.y=f.ang,f.tail.rotation.z=Math.PI/2+Math.sin(t*(8+e*2)+u*3)*.4}}}function G1(s,t){if(hl-=s,hl<=0){hl=.5;for(let o=0;o<ie.length;o++){const r=ie[o],a=r.x-J.pos.x,c=r.z-J.pos.z;if(a*a+c*c<36){kn={x:r.x,z:r.z},ni=0;break}}}const e=N1();if(!kn){e.visible=!1;return}if(ni+=s*12,ni>30){kn=null,ni=0,e.visible=!1;return}e.visible=!0,e.position.set(kn.x,.15,kn.z),e.scale.setScalar(ni),e.material.opacity=(1-ni/30)*.45;const n=ni,i=4;for(let o=0;o<wn.length;o++){const r=wn[o],a=r.x-kn.x,c=r.z-kn.z,l=Math.sqrt(a*a+c*c);if(Math.abs(l-n)<i){const h=1-Math.abs(l-n)/i;r.capMat.emissiveIntensity=Math.max(r.capMat.emissiveIntensity,(r.base+h*2)*ve)}}for(let o=0;o<ui.length;o++){const r=ui[o],a=r.group.position.x-kn.x,c=r.group.position.z-kn.z,l=Math.sqrt(a*a+c*c);if(Math.abs(l-n)<i){const h=1-Math.abs(l-n)/i;r.petalMat.emissiveIntensity=Math.max(r.petalMat.emissiveIntensity,(.3+h*1.5)*ve)}}}function H1(s,t){const e=J.pos.x,n=J.pos.z,i=$a(),o=Ii?.6:i>.3?i*.4:0;for(let l=0;l<ui.length;l++){const h=ui[l],u=h.group.position.x,f=h.group.position.z,d=u-e,g=f-n,p=d*d+g*g<16?1:0;h._react=h._react||0,h._react+=(p-h._react)*s*(p>0?4:1.5);const m=(1+h._react*.15)*(1-o*.12),E=(1+h._react*.05)*(1-o*.15);h.group.scale.set(m,E,m),h.petalMat.emissiveIntensity+=h._react*.6*ve*(1-o*.4)}for(let l=0;l<wn.length;l++){const h=wn[l],u=h.x-e,f=h.z-n,g=u*u+f*f<4?1:0;h._touch=h._touch||0,h._touch+=(g-h._touch)*s*(g>0?6:1.5);const _=i*.4;h.capMat.emissiveIntensity+=(h._touch*1.5+_)*ve;const p=1+h._touch*.08;h.group.scale.set(p,1+h._touch*.04,p)}for(let l=0;l<vr.length;l++){const h=vr[l],u=h.group.position.x,f=h.group.position.z,d=u-e,g=f-n,p=d*d+g*g<2.25?.65:1;h._curl=h._curl===void 0?1:h._curl,h._curl+=(p-h._curl)*s*(p<1?4:1.5),h.group.scale.set(1+(1-h._curl)*.3,h._curl,1+(1-h._curl)*.3)}U1();const r=vo==="FOG_BANK"?.5:1;let a=0,c=0;for(let l=0;l<ie.length;l++){const h=ie[l],u=h.x-e,f=h.z-n;if(u*u+f*f<36)for(let d=0;d<ie.length;d++){if(l===d)continue;const g=ie[d],_=h.x-g.x,p=h.z-g.z,m=_*_+p*p;if(m<400){a++;const E=(1-Math.sqrt(m)/20)*.8*r;if(g.mat.emissiveIntensity+=E*ve,c<Nh){const v=zh[c],M=v.geo.attributes.position.array,A=1,T=1;M[0]=h.x,M[1]=A,M[2]=h.z,M[3]=g.x,M[4]=T,M[5]=g.z,v.geo.attributes.position.needsUpdate=!0,v.geo.computeBoundingSphere(),v.active=!0;const b=Math.sin(t*3+l*1.5+d*.7)*.3+.5;v.opacity=E*b*ve,v.line.material.opacity=v.opacity,v.line.visible=!0,c++}}}}for(let l=c;l<Nh;l++){const h=zh[l];h.line.visible&&(h.opacity*=.85,h.line.material.opacity=h.opacity,h.opacity<.01&&(h.line.visible=!1))}return a}let ma="EXPLORE",ul=0,fl=0;function V1(s,t){let e=!1;for(let f=0;f<ie.length;f++){const d=ie[f].x-J.pos.x,g=ie[f].z-J.pos.z;if(d*d+g*g<64){e=!0;break}}ma=e?"NEAR_CRYSTAL":"EXPLORE",ul+=s;const n=$a(),i=Math.max(.2,1-n*.8),o=(ma==="NEAR_CRYSTAL"?.08:.25)/i,r=Math.floor((ma==="NEAR_CRYSTAL"?120:100)*i);if(ul>o&&(ul=0,Sp(0,t)<r))if(ma==="NEAR_CRYSTAL")for(let d=0;d<ie.length;d++){const g=ie[d].x-J.pos.x,_=ie[d].z-J.pos.z;g*g+_*_<100&&Sa(ie[d].x,qt(ie[d].x,ie[d].z)+1,ie[d].z,3+Math.random()*4)}else if(Math.random()<.3&&ui.length>0){const d=ui[Math.floor(Math.random()*ui.length)];if(d._react>.3){const g=d.group.position.x,_=d.group.position.z;Sa(g+(Math.random()-.5)*2,qt(g,_)+.5,_+(Math.random()-.5)*2,4+Math.random()*6)}}else{const d=Math.random()*6.28,g=5+Math.random()*25,_=J.pos.x+Math.cos(d)*g,p=J.pos.z+Math.sin(d)*g;Sa(_,qt(_,p),p,6+Math.random()*10)}if(fl+=s,fl>.2){fl=0;for(let f=0;f<wn.length;f++){const d=wn[f],g=d.x-J.pos.x,_=d.z-J.pos.z;g*g+_*_<200&&Math.random()<.15&&Tw(d.x,.6*d.group.scale.x,d.z)}}for(let f=0;f<wn.length;f++){const d=wn[f],g=Math.sin(t*d.speed+d.phase)*.5+.5;d.capMat.emissiveIntensity=d.base*(.5+g*.8)*ve}for(let f=0;f<ie.length;f++){const d=ie[f],g=Math.sin(t*.6+d.phase)*.5+.5;d.mat.emissiveIntensity=(1+g*1.5)*ve,d.group.children[0].rotation.y+=s*.15,d.light&&(d.light.intensity=(.3+g*.4)*ve)}if(!Bi.length)for(let f=0;f<ie.length;f++)Bi.push({idx:f,dist:0});const a=J.pos.x-rd,c=J.pos.z-ad;if(a*a+c*c>1){rd=J.pos.x,ad=J.pos.z;for(let f=0;f<ie.length;f++){const d=ie[f],g=d.x-J.pos.x,_=d.z-J.pos.z;Bi[f].idx=f,Bi[f].dist=g*g+_*_}Bi.sort((f,d)=>f.dist-d.dist)}for(let f=0;f<cs.length;f++)if(f<Bi.length&&Bi[f].dist<2500){const d=ie[Bi[f].idx],g=Math.sin(t*.6+d.phase)*.5+.5;cs[f].position.set(d.x,1.5,d.z),cs[f].intensity=(1.5+g*2)*ve,cs[f].distance=16,cs[f].color.setHex(F.crystal)}else cs[f].intensity=0;if(Ri>.8&&Math.random()<.005)for(let f=0;f<ur.length;f++){const d=ur[f];if(!d.dispersed&&Math.random()<.1){d.dispersed=!0;for(let g=0;g<8;g++)dp(d.x,d.h+.05,d.z);for(let g=2;g<d.group.children.length;g++)d.group.children[g].visible=!1;d.regrowTimer=15+Math.random()*10}}const l=Ri>.3?(Ri-.3)*.02:0,h=Ii?.03:0;if(Math.random()<l+h)for(let f=0;f<ne.length;f++){const d=ne[f],g=d.x-J.pos.x,_=d.z-J.pos.z;if(g*g+_*_<900&&Math.random()<.15){const p=(d.group.children[0]?d.group.children[0].geometry.parameters.height*.7:6)+d.group.position.y;Bw(d.x,p,d.z);break}}Vp(s,t),Wp(s,t),Xp(s,t),Yp(s,t),hp(s,t),Hp(s,t);for(let f=0;f<Ka.length;f++){const d=Ka[f];if(!d.sparkles)continue;const g=d.x||d.group.position.x,_=d.z||d.group.position.z,p=g-J.pos.x,m=_-J.pos.z;if(p*p+m*m>400)continue;let E=0;for(let S=0;S<ie.length;S++){const y=ie[S].x-g,x=ie[S].z-_,C=y*y+x*x;C<100&&(E=Math.max(E,(1-Math.sqrt(C)/10)*.6))}const v=g-J.pos.x,M=_-J.pos.z,A=v*v+M*M,T=A<25?(1-Math.sqrt(A)/5)*.3:0;let b=0;if(kn&&ni>0){const S=g-kn.x,y=_-kn.z,x=Math.sqrt(S*S+y*y);Math.abs(x-ni)<3&&(b=(1-Math.abs(x-ni)/3)*.8)}for(let S=0;S<d.sparkles.length;S++){const y=Math.sin(t*4+f*2.3+S*1.7)*.35;d.sparkles[S].material.opacity=.15+y+E+T+b}d.mossMat&&T>0&&(d.mossMat.emissiveIntensity=.05+T*.4*Math.sin(t*2+f)*.5+.5)}F1(s,t),Ky(ur,s,t,J.pos),O1(s,t),B1(s,t),k1(s,t),Ap(s,t,J.pos),$y(s,t),kw(s,t),Lw(s),zw(s),G1(s);const u=H1(s,t);if(t1(s,t),ww(t),J.onGround&&J.vel.x*J.vel.x+J.vel.z*J.vel.z>.5){const d=Math.atan2(J.vel.x,J.vel.z),g=Pe.ShiftLeft||Pe.ShiftRight||zo;Vw(J.pos.x,J.pos.z,d,g)}Ww(s,$a()),J.pos,E1(J.pos,Be,An,oi,Io,ci,We,u),T1(s)}let Fe=0,Fh=!1;function W1(){Fh||(Fh=!0,xy(!0),D1())}function qp(){requestAnimationFrame(qp);const s=Math.min(tp.getDelta(),.1);Fe+=s,o1(s);const t=u1(s,Fe,J.pos);if(d1(s,J.pos,t,Ms,co),Uy(s,Fe,De,ve,vo),si>0&&(au.intensity+=si*.8,ht.background.r=Math.min(ht.background.r+si*.08,.25),ht.background.g=Math.min(ht.background.g+si*.08,.25),ht.background.b=Math.min(ht.background.b+si*.12,.35)),_1(s,Ri,t,Ii,si,De,J.pos),Aw(Ms,co),Zy(Ms,co,Ri),Fw(Ms,co),!Fh){cn.position.set(0,ic,0),cn.rotation.order="YXZ",cn.rotation.y+=s*.08,cn.rotation.x=0;for(let e=0;e<wn.length;e++){const n=wn[e],i=Math.sin(Fe*n.speed+n.phase)*.5+.5;n.capMat.emissiveIntensity=n.base*(.5+i*.8)*ve}for(let e=0;e<ie.length;e++){const n=ie[e];n.mat.emissiveIntensity=(1+Math.sin(Fe*.6+n.phase)*.5*1.5+.75)*ve}Vp(s,Fe),Wp(s,Fe),Xp(s,Fe),Yp(s,Fe),hp(s,Fe),Hp(s,Fe),Ap(s,Fe,J.pos);for(let e=0;e<ri.length;e++)ri[e].popped||(ri[e].group.position.y=ri[e].floatY+Math.sin(Fe*.6+ri[e].phase)*ri[e].bobAmp);for(let e=0;e<We.length;e++)for(let n=0;n<We[e].pads.length;n++)We[e].pads[n].mesh.position.y=.05+Math.sin(Fe*.8+We[e].pads[n].phase)*.015;for(let e=0;e<In.length;e++){const n=In[e],i=Math.sin(Fe*1.5+n.phase)*.5+.5;n.group.position.y=n.flyY+Math.sin(Fe*.8+n.phase)*.3,n.glowMat.opacity=.3+i*.4}Bf();return}Oy(s),V1(s,Fe),Sp(s,Fe),Cw(s),cn.position.copy(J.pos),cn.position.y+=up,cn.rotation.order="YXZ",cn.rotation.y=xr,cn.rotation.x=bs,P1(s,J.pos),Bf()}try{ch(0,0,5),Ay(),s1({scene:ht,moon:Vn,moon2:cu,hemiLight:au,playerLight:lu}),z1();const s=by();zy(ne,Ka),Fy(qf),Ny(t=>{let e=!1;for(let n=0;n<We.length;n++){const i=We[n].x-J.pos.x,o=We[n].z-J.pos.z;if(i*i+o*o<16){e=!0;break}}Math.random()<.4&&qf(J.pos.x,J.pos.z,1)},()=>void 0,t=>void 0),h1(),f1(),Sw(150),Ew(60),my(),Rw(Jv),Iw(20),qy(40),Uw(30),Ow(50),Hw(),Dy(),xw(),vw(),yw(),x1(),b1(),R1(),I1(),Qw({orbs:In,obeliskGroup:fw(),obeliskMat:dw(),obeliskGlowMat:pw(),pinnacleOrb:mw(),pinnacleRings:gw(),moatMesh:_w(),moatMat:Mw(),rainbowArcs:Mr,player:J,makeLaser:Xw,orbHudEl:L1(),deers:Be,puffs:An,jellies:oi,moths:Io,trees:ne,groundMesh:s}),gy(W1);for(let t=0;t<50;t++){const e=Math.random()*6.28,n=3+Math.random()*ae*.7,i=Math.cos(e)*n,o=Math.sin(e)*n;Sa(i,qt(i,o),o,8+Math.random()*12)}console.log("✓ Init: trees="+ne.length+" mush="+wn.length+" crystals="+ie.length+" orbs="+In.length+" creatures="+(oi.length+An.length+Be.length+Io.length)+" wisps="+Ja.length+" dandelions="+ur.length+" fairyRings="+ci.length+" bubbles="+ri.length+" ponds="+We.length+" scene="+ht.children.length),qp()}catch(s){console.error("INIT FAILED:",s),document.body.innerHTML='<div style="color:red;padding:30px;font-family:monospace"><h2>Init Failed</h2><pre>'+(s.stack||s.message)+"</pre></div>"}
