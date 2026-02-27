(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bh="172",Bp=0,au=1,kp=2,Vf=1,Wf=2,xi=3,Xi=0,ln=1,zt=2,Si=0,to=1,Se=2,cu=3,lu=4,Gp=5,ls=100,Hp=101,Vp=102,Wp=103,Xp=104,Yp=200,qp=201,Zp=202,$p=203,nl=204,il=205,jp=206,Kp=207,Jp=208,Qp=209,t0=210,e0=211,n0=212,i0=213,s0=214,sl=0,ol=1,rl=2,ho=3,al=4,cl=5,ll=6,hl=7,Xf=0,o0=1,r0=2,Vi=0,a0=1,c0=2,l0=3,Yf=4,h0=5,u0=6,f0=7,qf=300,uo=301,fo=302,ul=303,fl=304,Ha=306,_a=1e3,us=1001,dl=1002,Pn=1003,d0=1004,vr=1005,oi=1006,Ja=1007,fs=1008,Ai=1009,Zf=1010,$f=1011,ir=1012,Th=1013,_s=1014,ri=1015,bi=1016,Eh=1017,Ah=1018,po=1020,jf=35902,Kf=1021,Jf=1022,Zn=1023,Qf=1024,td=1025,eo=1026,mo=1027,Rh=1028,Ch=1029,ed=1030,Ph=1031,Ih=1033,sa=33776,oa=33777,ra=33778,aa=33779,pl=35840,ml=35841,gl=35842,xl=35843,_l=36196,vl=37492,Ml=37496,yl=37808,wl=37809,Sl=37810,bl=37811,Tl=37812,El=37813,Al=37814,Rl=37815,Cl=37816,Pl=37817,Il=37818,Ll=37819,Dl=37820,Ul=37821,ca=36492,Nl=36494,zl=36495,nd=36283,Fl=36284,Ol=36285,Bl=36286,p0=3200,m0=3201,id=0,g0=1,ki="",cn="srgb",go="srgb-linear",va="linear",fe="srgb",Cs=7680,hu=519,x0=512,_0=513,v0=514,sd=515,M0=516,y0=517,w0=518,S0=519,uu=35044,Le=35048,fu="300 es",yi=2e3,Ma=2001;class wo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qa=Math.PI/180,kl=180/Math.PI;function So(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function b0(i,t){return(i%t+t)%t}function tc(i,t,e){return(1-e)*i+e*t}function Eo(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,s,o,r,a,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],_=s[0],p=s[3],m=s[6],w=s[1],v=s[4],M=s[7],A=s[2],E=s[5],b=s[8];return o[0]=r*_+a*w+l*A,o[3]=r*p+a*v+l*E,o[6]=r*m+a*M+l*b,o[1]=c*_+h*w+f*A,o[4]=c*p+h*v+f*E,o[7]=c*m+h*M+f*b,o[2]=u*_+d*w+g*A,o[5]=u*p+d*v+g*E,o[8]=u*m+d*M+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*r-a*c,u=a*l-h*o,d=c*o-r*l,g=e*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*r)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*o-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ec.makeScale(t,e)),this}rotate(t){return this.premultiply(ec.makeRotation(-t)),this}translate(t,e){return this.premultiply(ec.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ec=new Wt;function od(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ya(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function T0(){const i=ya("canvas");return i.style.display="block",i}const du={};function qs(i){i in du||(du[i]=!0,console.warn(i))}function E0(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function A0(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function R0(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const pu=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mu=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function C0(){const i={enabled:!0,workingColorSpace:go,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===fe&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===fe&&(s.r=no(s.r),s.g=no(s.g),s.b=no(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ki?va:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[go]:{primaries:t,whitePoint:n,transfer:va,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),i}const oe=C0();function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function no(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ps;class P0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ps===void 0&&(Ps=ya("canvas")),Ps.width=t.width,Ps.height=t.height;const n=Ps.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ps}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ya("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Ti(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ti(e[n]/255)*255):e[n]=Ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let I0=0;class rd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=So(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(nc(s[r].image)):o.push(nc(s[r]))}else o=nc(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?P0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let L0=0;class je extends wo{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,n=us,s=us,o=oi,r=fs,a=Zn,l=Ai,c=je.DEFAULT_ANISOTROPY,h=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=So(),this.name="",this.source=new rd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _a:t.x=t.x-Math.floor(t.x);break;case us:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _a:t.y=t.y-Math.floor(t.y);break;case us:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=qf;je.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(d+1)/2,A=(m+1)/2,E=(h+u)/4,b=(f+_)/4,S=(g+p)/4;return v>M&&v>A?v<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(v),s=E/n,o=b/n):M>A?M<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(M),n=E/s,o=S/s):A<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(A),n=b/o,s=S/o),this.set(n,s,o,e),this}let w=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(f-_)/w,this.z=(u-h)/w,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class D0 extends wo{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new rd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends D0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ad extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class U0 extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ur{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3];const u=o[r+0],d=o[r+1],g=o[r+2],_=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==u||c!==d||h!==g){let p=1-a;const m=l*u+c*d+h*g+f*_,w=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const A=Math.sqrt(v),E=Math.atan2(A,m*w);p=Math.sin(p*E)/A,a=Math.sin(a*E)/A}const M=a*w;if(l=l*p+u*M,c=c*p+d*M,h=h*p+g*M,f=f*p+_*M,p===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=A,c*=A,h*=A,f*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=o[r],u=o[r+1],d=o[r+2],g=o[r+3];return t[e]=a*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-a*d,t[e+2]=c*g+h*d+a*u-l*f,t[e+3]=h*g-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(o/2),u=l(n/2),d=l(s/2),g=l(o/2);switch(r){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(r-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(o-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(r-s)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=o*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),f=2*(o*n-r*e);return this.x=e+l*c+r*f-a*h,this.y=n+l*h+a*c-o*f,this.z=s+l*f+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ic.copy(this).projectOnVector(t),this.sub(ic)}reflect(t){return this.sub(ic.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ic=new N,gu=new ur;class ws{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Vn):Vn.fromBufferAttribute(o,r),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mr.copy(n.boundingBox)),Mr.applyMatrix4(t.matrixWorld),this.union(Mr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ao),yr.subVectors(this.max,Ao),Is.subVectors(t.a,Ao),Ls.subVectors(t.b,Ao),Ds.subVectors(t.c,Ao),Ii.subVectors(Ls,Is),Li.subVectors(Ds,Ls),Zi.subVectors(Is,Ds);let e=[0,-Ii.z,Ii.y,0,-Li.z,Li.y,0,-Zi.z,Zi.y,Ii.z,0,-Ii.x,Li.z,0,-Li.x,Zi.z,0,-Zi.x,-Ii.y,Ii.x,0,-Li.y,Li.x,0,-Zi.y,Zi.x,0];return!sc(e,Is,Ls,Ds,yr)||(e=[1,0,0,0,1,0,0,0,1],!sc(e,Is,Ls,Ds,yr))?!1:(wr.crossVectors(Ii,Li),e=[wr.x,wr.y,wr.z],sc(e,Is,Ls,Ds,yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fi=[new N,new N,new N,new N,new N,new N,new N,new N],Vn=new N,Mr=new ws,Is=new N,Ls=new N,Ds=new N,Ii=new N,Li=new N,Zi=new N,Ao=new N,yr=new N,wr=new N,$i=new N;function sc(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){$i.fromArray(i,o);const a=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),l=t.dot($i),c=e.dot($i),h=n.dot($i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const N0=new ws,Ro=new N,oc=new N;class Ss{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):N0.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ro.subVectors(t,this.center);const e=Ro.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ro,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ro.copy(t.center).add(oc)),this.expandByPoint(Ro.copy(t.center).sub(oc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new N,rc=new N,Sr=new N,Di=new N,ac=new N,br=new N,cc=new N;class Lh{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(di.copy(this.origin).addScaledVector(this.direction,e),di.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){rc.copy(t).add(e).multiplyScalar(.5),Sr.copy(e).sub(t).normalize(),Di.copy(this.origin).sub(rc);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Sr),a=Di.dot(this.direction),l=-Di.dot(Sr),c=Di.lengthSq(),h=Math.abs(1-r*r);let f,u,d,g;if(h>0)if(f=r*l-a,u=r*a-l,g=o*h,f>=0)if(u>=-g)if(u<=g){const _=1/h;f*=_,u*=_,d=f*(f+r*u+2*a)+u*(r*f+u+2*l)+c}else u=o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;else u=-o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-r*o+a)),u=f>0?-o:Math.min(Math.max(-o,-l),o),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-o,-l),o),d=u*(u+2*l)+c):(f=Math.max(0,-(r*o+a)),u=f>0?o:Math.min(Math.max(-o,-l),o),d=-f*f+u*(u+2*l)+c);else u=r>0?-o:o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(rc).addScaledVector(Sr,u),d}intersectSphere(t,e){di.subVectors(t.center,this.origin);const n=di.dot(this.direction),s=di.dot(di)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,e,n,s,o){ac.subVectors(e,t),br.subVectors(n,t),cc.crossVectors(ac,br);let r=this.direction.dot(cc),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Di.subVectors(this.origin,t);const l=a*this.direction.dot(br.crossVectors(Di,br));if(l<0)return null;const c=a*this.direction.dot(ac.cross(Di));if(c<0||l+c>r)return null;const h=-a*Di.dot(cc);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,s,o,r,a,l,c,h,f,u,d,g,_,p){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,f,u,d,g,_,p)}set(t,e,n,s,o,r,a,l,c,h,f,u,d,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Us.setFromMatrixColumn(t,0).length(),o=1/Us.setFromMatrixColumn(t,1).length(),r=1/Us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const u=r*h,d=r*f,g=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+d*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,g=c*h,_=c*f;e[0]=u+_*a,e[4]=g*a-d,e[8]=r*c,e[1]=r*f,e[5]=r*h,e[9]=-a,e[2]=d*a-g,e[6]=_+u*a,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,g=c*h,_=c*f;e[0]=u-_*a,e[4]=-r*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=r*h,e[9]=_-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,d=r*f,g=a*h,_=a*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,d=r*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*f,e[8]=g*f+d,e[1]=f,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-_*f}else if(t.order==="XZY"){const u=r*l,d=r*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=r*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(z0,t,F0)}lookAt(t,e,n){const s=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ui.crossVectors(n,bn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ui.crossVectors(n,bn)),Ui.normalize(),Tr.crossVectors(bn,Ui),s[0]=Ui.x,s[4]=Tr.x,s[8]=bn.x,s[1]=Ui.y,s[5]=Tr.y,s[9]=bn.y,s[2]=Ui.z,s[6]=Tr.z,s[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],w=n[3],v=n[7],M=n[11],A=n[15],E=s[0],b=s[4],S=s[8],y=s[12],x=s[1],R=s[5],U=s[9],D=s[13],z=s[2],H=s[6],V=s[10],Z=s[14],W=s[3],lt=s[7],ft=s[11],bt=s[15];return o[0]=r*E+a*x+l*z+c*W,o[4]=r*b+a*R+l*H+c*lt,o[8]=r*S+a*U+l*V+c*ft,o[12]=r*y+a*D+l*Z+c*bt,o[1]=h*E+f*x+u*z+d*W,o[5]=h*b+f*R+u*H+d*lt,o[9]=h*S+f*U+u*V+d*ft,o[13]=h*y+f*D+u*Z+d*bt,o[2]=g*E+_*x+p*z+m*W,o[6]=g*b+_*R+p*H+m*lt,o[10]=g*S+_*U+p*V+m*ft,o[14]=g*y+_*D+p*Z+m*bt,o[3]=w*E+v*x+M*z+A*W,o[7]=w*b+v*R+M*H+A*lt,o[11]=w*S+v*U+M*V+A*ft,o[15]=w*y+v*D+M*Z+A*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+o*l*f-s*c*f-o*a*u+n*c*u+s*a*d-n*l*d)+_*(+e*l*d-e*c*u+o*r*u-s*r*d+s*c*h-o*l*h)+p*(+e*c*f-e*a*d-o*r*f+n*r*d+o*a*h-n*c*h)+m*(-s*a*h-e*l*f+e*a*u+s*r*f-n*r*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],w=f*p*c-_*u*c+_*l*d-a*p*d-f*l*m+a*u*m,v=g*u*c-h*p*c-g*l*d+r*p*d+h*l*m-r*u*m,M=h*_*c-g*f*c+g*a*d-r*_*d-h*a*m+r*f*m,A=g*f*l-h*_*l-g*a*u+r*_*u+h*a*p-r*f*p,E=e*w+n*v+s*M+o*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=w*b,t[1]=(_*u*o-f*p*o-_*s*d+n*p*d+f*s*m-n*u*m)*b,t[2]=(a*p*o-_*l*o+_*s*c-n*p*c-a*s*m+n*l*m)*b,t[3]=(f*l*o-a*u*o-f*s*c+n*u*c+a*s*d-n*l*d)*b,t[4]=v*b,t[5]=(h*p*o-g*u*o+g*s*d-e*p*d-h*s*m+e*u*m)*b,t[6]=(g*l*o-r*p*o-g*s*c+e*p*c+r*s*m-e*l*m)*b,t[7]=(r*u*o-h*l*o+h*s*c-e*u*c-r*s*d+e*l*d)*b,t[8]=M*b,t[9]=(g*f*o-h*_*o-g*n*d+e*_*d+h*n*m-e*f*m)*b,t[10]=(r*_*o-g*a*o+g*n*c-e*_*c-r*n*m+e*a*m)*b,t[11]=(h*a*o-r*f*o-h*n*c+e*f*c+r*n*d-e*a*d)*b,t[12]=A*b,t[13]=(h*_*s-g*f*s+g*n*u-e*_*u-h*n*p+e*f*p)*b,t[14]=(g*a*s-r*_*s-g*n*l+e*_*l+r*n*p-e*a*p)*b,t[15]=(r*f*s-h*a*s+h*n*l-e*f*l-r*n*u+e*a*u)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,f=a+a,u=o*c,d=o*h,g=o*f,_=r*h,p=r*f,m=a*f,w=l*c,v=l*h,M=l*f,A=n.x,E=n.y,b=n.z;return s[0]=(1-(_+m))*A,s[1]=(d+M)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(d-M)*E,s[5]=(1-(u+m))*E,s[6]=(p+w)*E,s[7]=0,s[8]=(g+v)*b,s[9]=(p-w)*b,s[10]=(1-(u+_))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Us.set(s[0],s[1],s[2]).length();const r=Us.set(s[4],s[5],s[6]).length(),a=Us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Wn.copy(this);const c=1/o,h=1/r,f=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=f,Wn.elements[9]*=f,Wn.elements[10]*=f,e.setFromRotationMatrix(Wn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=yi){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s);let d,g;if(a===yi)d=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===Ma)d=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=yi){const l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(r-o),u=(e+t)*c,d=(n+s)*h;let g,_;if(a===yi)g=(r+o)*f,_=-2*f;else if(a===Ma)g=o*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Us=new N,Wn=new ue,z0=new N(0,0,0),F0=new N(1,1,1),Ui=new N,Tr=new N,bn=new N,xu=new ue,_u=new ur;class ci{constructor(t=0,e=0,n=0,s=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Zt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _u.setFromEuler(this),this.setFromQuaternion(_u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class cd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let O0=0;const vu=new N,Ns=new ur,pi=new ue,Er=new N,Co=new N,B0=new N,k0=new ur,Mu=new N(1,0,0),yu=new N(0,1,0),wu=new N(0,0,1),Su={type:"added"},G0={type:"removed"},zs={type:"childadded",child:null},lc={type:"childremoved",child:null};class ge extends wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=So(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new N,e=new ci,n=new ur,s=new N(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Wt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(Mu,t)}rotateY(t){return this.rotateOnAxis(yu,t)}rotateZ(t){return this.rotateOnAxis(wu,t)}translateOnAxis(t,e){return vu.copy(t).applyQuaternion(this.quaternion),this.position.add(vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mu,t)}translateY(t){return this.translateOnAxis(yu,t)}translateZ(t){return this.translateOnAxis(wu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Er.copy(t):Er.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Co,Er,this.up):pi.lookAt(Er,Co,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(pi),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Su),zs.child=t,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(G0),lc.child=t,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Su),zs.child=t,this.dispatchEvent(zs),zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,t,B0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,k0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),f=r(t.shapes),u=r(t.skeletons),d=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ge.DEFAULT_UP=new N(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new N,mi=new N,hc=new N,gi=new N,Fs=new N,Os=new N,bu=new N,uc=new N,fc=new N,dc=new N,pc=new de,mc=new de,gc=new de;class qn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xn.subVectors(t,e),s.cross(Xn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Xn.subVectors(s,e),mi.subVectors(n,e),hc.subVectors(t,e);const r=Xn.dot(Xn),a=Xn.dot(mi),l=Xn.dot(hc),c=mi.dot(mi),h=mi.dot(hc),f=r*c-a*a;if(f===0)return o.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,g=(r*h-a*l)*u;return o.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,gi.x),l.addScaledVector(r,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(t,e),mc.fromBufferAttribute(t,n),gc.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(pc,o.x),r.addScaledVector(mc,o.y),r.addScaledVector(gc,o.z),r}static isFrontFacing(t,e,n,s){return Xn.subVectors(n,e),mi.subVectors(t,e),Xn.cross(mi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Xn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return qn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return qn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Fs.subVectors(s,n),Os.subVectors(o,n),uc.subVectors(t,n);const l=Fs.dot(uc),c=Os.dot(uc);if(l<=0&&c<=0)return e.copy(n);fc.subVectors(t,s);const h=Fs.dot(fc),f=Os.dot(fc);if(h>=0&&f<=h)return e.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Fs,r);dc.subVectors(t,o);const d=Fs.dot(dc),g=Os.dot(dc);if(g>=0&&d<=g)return e.copy(o);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Os,a);const p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return bu.subVectors(o,s),a=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(bu,a);const m=1/(p+_+u);return r=_*m,a=u*m,e.copy(n).addScaledVector(Fs,r).addScaledVector(Os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function xc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=b0(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=xc(r,o,t+1/3),this.g=xc(r,o,t),this.b=xc(r,o,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=cn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=ld[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=no(t.r),this.g=no(t.g),this.b=no(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return oe.fromWorkingColorSpace(qe.copy(this),t),Math.round(Zt(qe.r*255,0,255))*65536+Math.round(Zt(qe.g*255,0,255))*256+Math.round(Zt(qe.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(qe.copy(this),e);const n=qe.r,s=qe.g,o=qe.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const f=r-a;switch(c=h<=.5?f/(r+a):f/(2-r-a),r){case n:l=(s-o)/f+(s<o?6:0);break;case s:l=(o-n)/f+2;break;case o:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=cn){oe.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,s=qe.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(Ar);const n=tc(Ni.h,Ar.h,e),s=tc(Ni.s,Ar.s,e),o=tc(Ni.l,Ar.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new ot;ot.NAMES=ld;let H0=0;class bs extends wo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=So(),this.name="",this.type="Material",this.blending=to,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(n.blending=this.blending),this.side!==Xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nl&&(n.blendSrc=this.blendSrc),this.blendDst!==il&&(n.blendDst=this.blendDst),this.blendEquation!==ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $ extends bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Xf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new N,Rr=new dt;class We{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uu,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rr.fromBufferAttribute(this,e),Rr.applyMatrix3(t),this.setXY(e,Rr.x,Rr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Eo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Eo(e,this.array)),e}setX(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Eo(e,this.array)),e}setY(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Eo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Eo(e,this.array)),e}setW(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),s=un(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),s=un(s,this.array),o=un(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uu&&(t.usage=this.usage),t}}class hd extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ud extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Gt extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}let V0=0;const Un=new ue,_c=new ge,Bs=new N,Tn=new ws,Po=new ws,Fe=new N;class ye extends wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=So(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(od(t)?ud:hd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Wt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,e,n){return Un.makeTranslation(t,e,n),this.applyMatrix4(Un),this}scale(t,e,n){return Un.makeScale(t,e,n),this.applyMatrix4(Un),this}lookAt(t){return _c.lookAt(t),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Gt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Tn.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(Tn.min,Po.min),Tn.expandByPoint(Fe),Fe.addVectors(Tn.max,Po.max),Tn.expandByPoint(Fe)):(Tn.expandByPoint(Po.min),Tn.expandByPoint(Po.max))}Tn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Fe.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Fe.fromBufferAttribute(a,c),l&&(Bs.fromBufferAttribute(t,c),Fe.add(Bs)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<n.count;S++)a[S]=new N,l[S]=new N;const c=new N,h=new N,f=new N,u=new dt,d=new dt,g=new dt,_=new N,p=new N;function m(S,y,x){c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),f.fromBufferAttribute(n,x),u.fromBufferAttribute(o,S),d.fromBufferAttribute(o,y),g.fromBufferAttribute(o,x),h.sub(c),f.sub(c),d.sub(u),g.sub(u);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(R),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(R),a[S].add(_),a[y].add(_),a[x].add(_),l[S].add(p),l[y].add(p),l[x].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let S=0,y=w.length;S<y;++S){const x=w[S],R=x.start,U=x.count;for(let D=R,z=R+U;D<z;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const v=new N,M=new N,A=new N,E=new N;function b(S){A.fromBufferAttribute(s,S),E.copy(A);const y=a[S];v.copy(y),v.sub(A.multiplyScalar(A.dot(y))).normalize(),M.crossVectors(E,y);const R=M.dot(l[S])<0?-1:1;r.setXYZW(S,v.x,v.y,v.z,R)}for(let S=0,y=w.length;S<y;++S){const x=w[S],R=x.start,U=x.count;for(let D=R,z=R+U;D<z;D+=3)b(t.getX(D+0)),b(t.getX(D+1)),b(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new N,o=new N,r=new N,a=new N,l=new N,c=new N,h=new N,f=new N;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,p),h.subVectors(r,o),f.subVectors(s,o),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),f.subVectors(s,o),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let m=0;m<h;m++)u[g++]=c[d++]}return new We(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],f=o[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tu=new ue,ji=new Lh,Cr=new Ss,Eu=new N,Pr=new N,Ir=new N,Lr=new N,vc=new N,Dr=new N,Au=new N,Ur=new N;class I extends ge{constructor(t=new ye,e=new $){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Dr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],f=o[l];h!==0&&(vc.fromBufferAttribute(f,t),r?Dr.addScaledVector(vc,h):Dr.addScaledVector(vc.sub(e),h))}e.add(Dr)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(o),ji.copy(t.ray).recast(t.near),!(Cr.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Cr,Eu)===null||ji.origin.distanceToSquared(Eu)>(t.far-t.near)**2))&&(Tu.copy(o).invert(),ji.copy(t.ray).applyMatrix4(Tu),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,u=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=r[p.materialIndex],w=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=w,A=v;M<A;M+=3){const E=a.getX(M),b=a.getX(M+1),S=a.getX(M+2);s=Nr(this,m,t,n,c,h,f,E,b,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const w=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);s=Nr(this,r,t,n,c,h,f,w,v,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=r[p.materialIndex],w=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=w,A=v;M<A;M+=3){const E=M,b=M+1,S=M+2;s=Nr(this,m,t,n,c,h,f,E,b,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const w=p,v=p+1,M=p+2;s=Nr(this,r,t,n,c,h,f,w,v,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function W0(i,t,e,n,s,o,r,a){let l;if(t.side===ln?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===Xi,a),l===null)return null;Ur.copy(a),Ur.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ur);return c<e.near||c>e.far?null:{distance:c,point:Ur.clone(),object:i}}function Nr(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,Pr),i.getVertexPosition(l,Ir),i.getVertexPosition(c,Lr);const h=W0(i,t,e,n,Pr,Ir,Lr,Au);if(h){const f=new N;qn.getBarycoord(Au,Pr,Ir,Lr,f),s&&(h.uv=qn.getInterpolatedAttribute(s,a,l,c,f,new dt)),o&&(h.uv1=qn.getInterpolatedAttribute(o,a,l,c,f,new dt)),r&&(h.normal=qn.getInterpolatedAttribute(r,a,l,c,f,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new N,materialIndex:0};qn.getNormal(Pr,Ir,Lr,u.normal),h.face=u,h.barycoord=f}return h}class fr extends ye{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(f,2));function g(_,p,m,w,v,M,A,E,b,S,y){const x=M/b,R=A/S,U=M/2,D=A/2,z=E/2,H=b+1,V=S+1;let Z=0,W=0;const lt=new N;for(let ft=0;ft<V;ft++){const bt=ft*R-D;for(let Ht=0;Ht<H;Ht++){const $t=Ht*x-U;lt[_]=$t*w,lt[p]=bt*v,lt[m]=z,c.push(lt.x,lt.y,lt.z),lt[_]=0,lt[p]=0,lt[m]=E>0?1:-1,h.push(lt.x,lt.y,lt.z),f.push(Ht/b),f.push(1-ft/S),Z+=1}}for(let ft=0;ft<S;ft++)for(let bt=0;bt<b;bt++){const Ht=u+bt+H*ft,$t=u+bt+H*(ft+1),J=u+(bt+1)+H*(ft+1),at=u+(bt+1)+H*ft;l.push(Ht,$t,at),l.push($t,J,at),W+=6}a.addGroup(d,W,y),d+=W,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xo(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=xo(i[e]);for(const s in n)t[s]=n[s]}return t}function X0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function fd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const wa={clone:xo,merge:Qe};var Y0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y0,this.fragmentShader=q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xo(t.uniforms),this.uniformsGroups=X0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class dd extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new N,Ru=new dt,Cu=new dt;class An extends dd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=kl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kl*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zi.x,zi.y).multiplyScalar(-t/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-t/zi.z)}getViewSize(t,e){return this.getViewBounds(t,Ru,Cu),e.subVectors(Cu,Ru)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ks=-90,Gs=1;class Z0 extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new An(ks,Gs,t,e);s.layers=this.layers,this.add(s);const o=new An(ks,Gs,t,e);o.layers=this.layers,this.add(o);const r=new An(ks,Gs,t,e);r.layers=this.layers,this.add(r);const a=new An(ks,Gs,t,e);a.layers=this.layers,this.add(a);const l=new An(ks,Gs,t,e);l.layers=this.layers,this.add(l);const c=new An(ks,Gs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===yi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class pd extends je{constructor(t,e,n,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:uo,super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $0 extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new pd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:oi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fr(5,5,5),o=new Mn({name:"CubemapFromEquirect",uniforms:xo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Si});o.uniforms.tEquirect.value=e;const r=new I(s,o),a=e.minFilter;return e.minFilter===fs&&(e.minFilter=oi),new Z0(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}class Dh{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(t),this.density=e}clone(){return new Dh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class j0 extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class K0 extends je{constructor(t=null,e=1,n=1,s,o,r,a,l,c=Pn,h=Pn,f,u){super(null,r,a,l,c,h,s,o,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Hs=new ue,Pu=new ue,zr=[],Iu=new ws,J0=new ue,Io=new I,Lo=new Ss;class Ts extends I{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ri(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,J0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ws),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hs),Iu.copy(t.boundingBox).applyMatrix4(Hs),this.boundingBox.union(Iu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ss),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hs),Lo.copy(t.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Lo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Io.geometry=this.geometry,Io.material=this.material,Io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lo.copy(this.boundingSphere),Lo.applyMatrix4(n),t.ray.intersectsSphere(Lo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Hs),Pu.multiplyMatrices(n,Hs),Io.matrixWorld=Pu,Io.raycast(t,zr);for(let r=0,a=zr.length;r<a;r++){const l=zr[r];l.instanceId=o,l.object=this,e.push(l)}zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ri(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new K0(new Float32Array(s*this.count),s,this.count,Rh,ri));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Mc=new N,Q0=new N,tm=new Wt;class ns{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Mc.subVectors(n,e).cross(Q0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Mc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||tm.getNormalMatrix(t),s=this.coplanarPoint(Mc).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new Ss,Fr=new N;class Uh{constructor(t=new ns,e=new ns,n=new ns,s=new ns,o=new ns,r=new ns){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yi){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],d=s[8],g=s[9],_=s[10],p=s[11],m=s[12],w=s[13],v=s[14],M=s[15];if(n[0].setComponents(l-o,u-c,p-d,M-m).normalize(),n[1].setComponents(l+o,u+c,p+d,M+m).normalize(),n[2].setComponents(l+r,u+h,p+g,M+w).normalize(),n[3].setComponents(l-r,u-h,p-g,M-w).normalize(),n[4].setComponents(l-a,u-f,p-_,M-v).normalize(),e===yi)n[5].setComponents(l+a,u+f,p+_,M+v).normalize();else if(e===Ma)n[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Fr.x=s.normal.x>0?t.max.x:t.min.x,Fr.y=s.normal.y>0?t.max.y:t.min.y,Fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nh extends bs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Sa=new N,ba=new N,Lu=new ue,Do=new Lh,Or=new Ss,yc=new N,Du=new N;class md extends ge{constructor(t=new ye,e=new Nh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)Sa.fromBufferAttribute(e,s-1),ba.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Sa.distanceTo(ba);t.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),Or.radius+=o,t.ray.intersectsSphere(Or)===!1)return;Lu.copy(s).invert(),Do.copy(t.ray).applyMatrix4(Lu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=d,p=g-1;_<p;_+=c){const m=h.getX(_),w=h.getX(_+1),v=Br(this,t,Do,l,m,w);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(d),m=Br(this,t,Do,l,_,p);m&&e.push(m)}}else{const d=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let _=d,p=g-1;_<p;_+=c){const m=Br(this,t,Do,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=Br(this,t,Do,l,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Br(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(Sa.fromBufferAttribute(r,s),ba.fromBufferAttribute(r,o),e.distanceSqToSegment(Sa,ba,yc,Du)>n)return;yc.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(yc);if(!(l<t.near||l>t.far))return{distance:l,point:Du.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Uu=new N,Nu=new N;class em extends md{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)Uu.fromBufferAttribute(e,s),Nu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Uu.distanceTo(Nu);t.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zh extends bs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const zu=new ue,Gl=new Lh,kr=new Ss,Gr=new N;class gd extends ge{constructor(t=new ye,e=new zh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(s),kr.radius+=o,t.ray.intersectsSphere(kr)===!1)return;zu.copy(s).invert(),Gl.copy(t.ray).applyMatrix4(zu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let g=u,_=d;g<_;g++){const p=c.getX(g);Gr.fromBufferAttribute(f,p),Fu(Gr,p,l,s,t,e,this)}}else{const u=Math.max(0,r.start),d=Math.min(f.count,r.start+r.count);for(let g=u,_=d;g<_;g++)Gr.fromBufferAttribute(f,g),Fu(Gr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Fu(i,t,e,n,s,o,r){const a=Gl.distanceSqToPoint(i);if(a<e){const l=new N;Gl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class pe extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Fh extends je{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xd extends je{constructor(t,e,n,s,o,r,a,l,c,h=eo){if(h!==eo&&h!==mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===eo&&(n=_s),n===void 0&&h===mo&&(n=po),super(null,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class hi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const h=n[s],u=n[s+1]-h,d=(r-h)/u;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new dt:new N);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,s=[],o=[],r=[],a=new N,l=new ue;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new N)}o[0]=new N,r[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Zt(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(a,g))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(Zt(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Oh extends hi{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new dt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class nm extends Oh{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Bh(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,f){let u=(r-o)/c-(a-o)/(c+h)+(a-r)/h,d=(a-r)/h-(l-r)/(h+f)+(l-a)/f;u*=h,d*=h,s(r,a,u,d)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Hr=new N,wc=new Bh,Sc=new Bh,bc=new Bh;class Va extends hi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(Hr.subVectors(s[0],s[1]).add(s[0]),c=Hr);const f=s[a%o],u=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Hr.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Hr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),wc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,_,p),Sc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,_,p),bc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(wc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Sc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),bc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(wc.calc(l),Sc.calc(l),bc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ou(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function im(i,t){const e=1-i;return e*e*t}function sm(i,t){return 2*(1-i)*i*t}function om(i,t){return i*i*t}function Zo(i,t,e,n){return im(i,t)+sm(i,e)+om(i,n)}function rm(i,t){const e=1-i;return e*e*e*t}function am(i,t){const e=1-i;return 3*e*e*i*t}function cm(i,t){return 3*(1-i)*i*i*t}function lm(i,t){return i*i*i*t}function $o(i,t,e,n,s){return rm(i,t)+am(i,e)+cm(i,n)+lm(i,s)}class _d extends hi{constructor(t=new dt,e=new dt,n=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new dt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set($o(t,s.x,o.x,r.x,a.x),$o(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hm extends hi{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set($o(t,s.x,o.x,r.x,a.x),$o(t,s.y,o.y,r.y,a.y),$o(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vd extends hi{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Md extends hi{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yd extends hi{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Zo(t,s.x,o.x,r.x),Zo(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wd extends hi{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Zo(t,s.x,o.x,r.x),Zo(t,s.y,o.y,r.y),Zo(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sd extends hi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],f=s[r>s.length-3?s.length-1:r+2];return n.set(Ou(a,l.x,c.x,h.x,f.x),Ou(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new dt().fromArray(s))}return this}}var Hl=Object.freeze({__proto__:null,ArcCurve:nm,CatmullRomCurve3:Va,CubicBezierCurve:_d,CubicBezierCurve3:hm,EllipseCurve:Oh,LineCurve:vd,LineCurve3:Md,QuadraticBezierCurve:yd,QuadraticBezierCurve3:wd,SplineCurve:Sd});class um extends hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Hl[s.type]().fromJSON(s))}return this}}class Ta extends um{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new vd(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new yd(this.currentPoint.clone(),new dt(t,e),new dt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new _d(this.currentPoint.clone(),new dt(t,e),new dt(n,s),new dt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Sd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new Oh(t,e,n,s,o,r,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ve extends ye{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new N,h=new dt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(a,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Mt extends ye{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],f=[],u=[],d=[];let g=0;const _=[],p=n/2;let m=0;w(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Gt(f,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(d,2));function w(){const M=new N,A=new N;let E=0;const b=(e-t)/n;for(let S=0;S<=o;S++){const y=[],x=S/o,R=x*(e-t)+t;for(let U=0;U<=s;U++){const D=U/s,z=D*l+a,H=Math.sin(z),V=Math.cos(z);A.x=R*H,A.y=-x*n+p,A.z=R*V,f.push(A.x,A.y,A.z),M.set(H,b,V).normalize(),u.push(M.x,M.y,M.z),d.push(D,1-x),y.push(g++)}_.push(y)}for(let S=0;S<s;S++)for(let y=0;y<o;y++){const x=_[y][S],R=_[y+1][S],U=_[y+1][S+1],D=_[y][S+1];(t>0||y!==0)&&(h.push(x,R,D),E+=3),(e>0||y!==o-1)&&(h.push(R,U,D),E+=3)}c.addGroup(m,E,0),m+=E}function v(M){const A=g,E=new dt,b=new N;let S=0;const y=M===!0?t:e,x=M===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,p*x,0),u.push(0,x,0),d.push(.5,.5),g++;const R=g;for(let U=0;U<=s;U++){const z=U/s*l+a,H=Math.cos(z),V=Math.sin(z);b.x=y*V,b.y=p*x,b.z=y*H,f.push(b.x,b.y,b.z),u.push(0,x,0),E.x=H*.5+.5,E.y=V*.5*x+.5,d.push(E.x,E.y),g++}for(let U=0;U<s;U++){const D=A+U,z=R+U;M===!0?h.push(z,z+1,D):h.push(z+1,z,D),S+=3}c.addGroup(m,S,M===!0?1:2),m+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class li extends Mt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new li(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class kh extends ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),h(),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(o.slice(),3)),this.setAttribute("uv",new Gt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const v=new N,M=new N,A=new N;for(let E=0;E<e.length;E+=3)d(e[E+0],v),d(e[E+1],M),d(e[E+2],A),l(v,M,A,w)}function l(w,v,M,A){const E=A+1,b=[];for(let S=0;S<=E;S++){b[S]=[];const y=w.clone().lerp(M,S/E),x=v.clone().lerp(M,S/E),R=E-S;for(let U=0;U<=R;U++)U===0&&S===E?b[S][U]=y:b[S][U]=y.clone().lerp(x,U/R)}for(let S=0;S<E;S++)for(let y=0;y<2*(E-S)-1;y++){const x=Math.floor(y/2);y%2===0?(u(b[S][x+1]),u(b[S+1][x]),u(b[S][x])):(u(b[S][x+1]),u(b[S+1][x+1]),u(b[S+1][x]))}}function c(w){const v=new N;for(let M=0;M<o.length;M+=3)v.x=o[M+0],v.y=o[M+1],v.z=o[M+2],v.normalize().multiplyScalar(w),o[M+0]=v.x,o[M+1]=v.y,o[M+2]=v.z}function h(){const w=new N;for(let v=0;v<o.length;v+=3){w.x=o[v+0],w.y=o[v+1],w.z=o[v+2];const M=p(w)/2/Math.PI+.5,A=m(w)/Math.PI+.5;r.push(M,1-A)}g(),f()}function f(){for(let w=0;w<r.length;w+=6){const v=r[w+0],M=r[w+2],A=r[w+4],E=Math.max(v,M,A),b=Math.min(v,M,A);E>.9&&b<.1&&(v<.2&&(r[w+0]+=1),M<.2&&(r[w+2]+=1),A<.2&&(r[w+4]+=1))}}function u(w){o.push(w.x,w.y,w.z)}function d(w,v){const M=w*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function g(){const w=new N,v=new N,M=new N,A=new N,E=new dt,b=new dt,S=new dt;for(let y=0,x=0;y<o.length;y+=9,x+=6){w.set(o[y+0],o[y+1],o[y+2]),v.set(o[y+3],o[y+4],o[y+5]),M.set(o[y+6],o[y+7],o[y+8]),E.set(r[x+0],r[x+1]),b.set(r[x+2],r[x+3]),S.set(r[x+4],r[x+5]),A.copy(w).add(v).add(M).divideScalar(3);const R=p(A);_(E,x+0,w,R),_(b,x+2,v,R),_(S,x+4,M,R)}}function _(w,v,M,A){A<0&&w.x===1&&(r[v]=w.x-1),M.x===0&&M.z===0&&(r[v]=A/2/Math.PI+.5)}function p(w){return Math.atan2(w.z,-w.x)}function m(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kh(t.vertices,t.indices,t.radius,t.details)}}class Vl extends Ta{constructor(t){super(t),this.uuid=So(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ta().fromJSON(s))}return this}}const fm={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=bd(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,f,u,d;if(n&&(o=xm(i,t,o,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)f=i[g],u=i[g+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return sr(o,r,e,a,l,d,0),r}};function bd(i,t,e,n,s){let o,r;if(s===Rm(i,t,e,n)>0)for(o=t;o<e;o+=n)r=Bu(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=Bu(o,i[o],i[o+1],r);return r&&Wa(r,r.next)&&(rr(r),r=r.next),r}function vs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Wa(e,e.next)||be(e.prev,e,e.next)===0)){if(rr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function sr(i,t,e,n,s,o,r){if(!i)return;!r&&o&&wm(i,n,s,o);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,o?pm(i,n,s,o):dm(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),rr(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=mm(vs(i),t,e),sr(i,t,e,n,s,o,2)):r===2&&gm(i,t,e,n,s,o):sr(vs(i),t,e,n,s,o,1);break}}}function dm(i){const t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=s<o?s<r?s:r:o<r?o:r,f=a<l?a<c?a:c:l<c?l:c,u=s>o?s>r?s:r:o>r?o:r,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&js(s,a,o,l,r,c,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function pm(i,t,e,n){const s=i.prev,o=i,r=i.next;if(be(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,f=o.y,u=r.y,d=a<l?a<c?a:c:l<c?l:c,g=h<f?h<u?h:u:f<u?f:u,_=a>l?a>c?a:c:l>c?l:c,p=h>f?h>u?h:u:f>u?f:u,m=Wl(d,g,t,e,n),w=Wl(_,p,t,e,n);let v=i.prevZ,M=i.nextZ;for(;v&&v.z>=m&&M&&M.z<=w;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==r&&js(a,h,l,f,c,u,v.x,v.y)&&be(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=_&&M.y>=g&&M.y<=p&&M!==s&&M!==r&&js(a,h,l,f,c,u,M.x,M.y)&&be(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==r&&js(a,h,l,f,c,u,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=w;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=p&&M!==s&&M!==r&&js(a,h,l,f,c,u,M.x,M.y)&&be(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function mm(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!Wa(s,o)&&Td(s,n,n.next,o)&&or(s,o)&&or(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),rr(n),rr(n.next),n=i=o),n=n.next}while(n!==i);return vs(n)}function gm(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Tm(r,a)){let l=Ed(r,a);r=vs(r,r.next),l=vs(l,l.next),sr(r,t,e,n,s,o,0),sr(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function xm(i,t,e,n){const s=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=bd(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(bm(c));for(s.sort(_m),o=0;o<s.length;o++)e=vm(s[o],e);return e}function _m(i,t){return i.x-t.x}function vm(i,t){const e=Mm(i,t);if(!e)return t;const n=Ed(e,i);return vs(n,n.next),vs(e,e.next)}function Mm(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=o&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,f;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&js(r<c?o:n,r,l,c,r<c?n:o,r,e.x,e.y)&&(f=Math.abs(r-e.y)/(o-e.x),or(e,i)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&ym(s,e)))&&(s=e,h=f)),e=e.next;while(e!==a);return s}function ym(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function wm(i,t,e,n){let s=i;do s.z===0&&(s.z=Wl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Sm(s)}function Sm(i){let t,e,n,s,o,r,a,l,c=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,c*=2}while(r>1);return i}function Wl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function bm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function js(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function Tm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Em(i,t)&&(or(i,t)&&or(t,i)&&Am(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||Wa(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Wa(i,t){return i.x===t.x&&i.y===t.y}function Td(i,t,e,n){const s=Wr(be(i,t,e)),o=Wr(be(i,t,n)),r=Wr(be(e,n,i)),a=Wr(be(e,n,t));return!!(s!==o&&r!==a||s===0&&Vr(i,e,t)||o===0&&Vr(i,n,t)||r===0&&Vr(e,i,n)||a===0&&Vr(e,t,n))}function Vr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Wr(i){return i>0?1:i<0?-1:0}function Em(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Td(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function or(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function Am(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ed(i,t){const e=new Xl(i.i,i.x,i.y),n=new Xl(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Bu(i,t,e,n){const s=new Xl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function rr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Rm(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class jo{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return jo.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];ku(t),Gu(n,t);let r=t.length;e.forEach(ku);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,Gu(n,e[l]);const a=fm.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function ku(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Gu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ms extends kh{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ms(t.radius,t.detail)}}class Me extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const w=m*u-r;for(let v=0;v<c;v++){const M=v*f-o;g.push(M,-w,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<a;w++){const v=w+c*m,M=w+c*(m+1),A=w+1+c*(m+1),E=w+1+c*m;d.push(v,M,E),d.push(M,A,E)}this.setIndex(d),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.width,t.height,t.widthSegments,t.heightSegments)}}class _o extends ye{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let f=t;const u=(e-t)/s,d=new N,g=new dt;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){const m=o+p/n*r;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}f+=u}for(let _=0;_<s;_++){const p=_*(n+1);for(let m=0;m<n;m++){const w=m+p,v=w,M=w+n+1,A=w+n+2,E=w+1;a.push(v,M,E),a.push(M,A,E)}}this.setIndex(a),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ea extends ye{constructor(t=new Vl([new dt(0,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Gt(s,3)),this.setAttribute("normal",new Gt(o,3)),this.setAttribute("uv",new Gt(r,2));function c(h){const f=s.length/3,u=h.extractPoints(e);let d=u.shape;const g=u.holes;jo.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const w=g[p];jo.isClockWise(w)===!0&&(g[p]=w.reverse())}const _=jo.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const w=g[p];d=d.concat(w)}for(let p=0,m=d.length;p<m;p++){const w=d[p];s.push(w.x,w.y,0),o.push(0,0,1),r.push(w.x,w.y)}for(let p=0,m=_.length;p<m;p++){const w=_[p],v=w[0]+f,M=w[1]+f,A=w[2]+f;n.push(v,M,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Cm(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new Ea(n,t.curveSegments)}}function Cm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class K extends ye{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],f=new N,u=new N,d=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const w=[],v=m/n;let M=0;m===0&&r===0?M=.5/e:m===n&&l===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const E=A/e;f.x=-t*Math.cos(s+E*o)*Math.sin(r+v*a),f.y=t*Math.cos(r+v*a),f.z=t*Math.sin(s+E*o)*Math.sin(r+v*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),p.push(E+M,1-v),w.push(c++)}h.push(w)}for(let m=0;m<n;m++)for(let w=0;w<e;w++){const v=h[m][w+1],M=h[m][w],A=h[m+1][w],E=h[m+1][w+1];(m!==0||r>0)&&d.push(v,M,E),(m!==n-1||l<Math.PI)&&d.push(M,A,E)}this.setIndex(d),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new K(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ae extends ye{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],l=[],c=[],h=new N,f=new N,u=new N;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*o,p=d/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(_),f.y=(t+e*Math.cos(p))*Math.sin(_),f.z=e*Math.sin(p),a.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,w=(s+1)*d+g;r.push(_,p,w),r.push(p,m,w)}this.setIndex(r),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Yn extends ye{constructor(t=new wd(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new N,l=new N,c=new dt;let h=new N;const f=[],u=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Gt(f,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(d,2));function _(){for(let v=0;v<e;v++)p(v);p(o===!1?e:0),w(),m()}function p(v){h=t.getPointAt(v/e,h);const M=r.normals[v],A=r.binormals[v];for(let E=0;E<=s;E++){const b=E/s*Math.PI*2,S=Math.sin(b),y=-Math.cos(b);l.x=y*M.x+S*A.x,l.y=y*M.y+S*A.y,l.z=y*M.z+S*A.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=e;v++)for(let M=1;M<=s;M++){const A=(s+1)*(v-1)+(M-1),E=(s+1)*v+(M-1),b=(s+1)*v+M,S=(s+1)*(v-1)+M;g.push(A,E,S),g.push(E,b,S)}}function w(){for(let v=0;v<=e;v++)for(let M=0;M<=s;M++)c.x=v/e,c.y=M/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Yn(new Hl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class et extends bs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=id,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pm extends bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=p0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Im extends bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Gh extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Lm extends Gh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Tc=new ue,Hu=new N,Vu=new N;class Ad{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uh,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Hu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hu),Vu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vu),e.updateMatrixWorld(),Tc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Wu=new ue,Uo=new N,Ec=new N;class Dm extends Ad{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Uo.setFromMatrixPosition(t.matrixWorld),n.position.copy(Uo),Ec.copy(n.position),Ec.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ec),n.updateMatrixWorld(),s.makeTranslation(-Uo.x,-Uo.y,-Uo.z),Wu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wu)}}class Es extends Gh{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Dm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Hh extends dd{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Um extends Ad{constructor(){super(new Hh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xa extends Gh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new Um}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Nm extends An{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Rd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Xu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Xu(){return performance.now()}function Yu(i,t,e,n){const s=zm(n);switch(e){case Kf:return i*t;case Qf:return i*t;case td:return i*t*2;case Rh:return i*t/s.components*s.byteLength;case Ch:return i*t/s.components*s.byteLength;case ed:return i*t*2/s.components*s.byteLength;case Ph:return i*t*2/s.components*s.byteLength;case Jf:return i*t*3/s.components*s.byteLength;case Zn:return i*t*4/s.components*s.byteLength;case Ih:return i*t*4/s.components*s.byteLength;case sa:case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ra:case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ml:case xl:return Math.max(i,16)*Math.max(t,8)/4;case pl:case gl:return Math.max(i,8)*Math.max(t,8)/2;case _l:case vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case bl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case El:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Al:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Il:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ca:case Nl:case zl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case nd:case Fl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ol:case Bl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zm(i){switch(i){case Ai:case Zf:return{byteLength:1,components:1};case ir:case $f:case bi:return{byteLength:2,components:1};case Eh:case Ah:return{byteLength:2,components:4};case _s:case Th:case ri:return{byteLength:4,components:1};case jf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cd(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Fm(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}var Om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bm=`#ifdef USE_ALPHAHASH
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
#endif`,km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wm=`#ifdef USE_AOMAP
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
#endif`,Xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ym=`#ifdef USE_BATCHING
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
#endif`,qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$m=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Km=`#ifdef USE_IRIDESCENCE
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
#endif`,Jm=`#ifdef USE_BUMPMAP
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
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ag=`#define PI 3.141592653589793
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
} // validated`,cg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lg=`vec3 transformedNormal = objectNormal;
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
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ug=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pg="gl_FragColor = linearToOutputTexel( gl_FragColor );",mg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gg=`#ifdef USE_ENVMAP
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
#endif`,xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_g=`#ifdef USE_ENVMAP
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
#endif`,vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
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
#endif`,yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tg=`#ifdef USE_GRADIENTMAP
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
}`,Eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ag=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cg=`uniform bool receiveShadow;
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
#endif`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ng=`PhysicalMaterial material;
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
#endif`,zg=`struct PhysicalMaterial {
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
}`,Fg=`
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
#endif`,Og=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qg=`#if defined( USE_POINTS_UV )
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
#endif`,Zg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qg=`#ifdef USE_MORPHTARGETS
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
#endif`,tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rx=`#ifdef USE_NORMALMAP
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
#endif`,ax=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ux=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_x=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wx=`float getShadowMask() {
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
}`,Sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bx=`#ifdef USE_SKINNING
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
#endif`,Tx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ex=`#ifdef USE_SKINNING
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
#endif`,Ax=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Px=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ix=`#ifdef USE_TRANSMISSION
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
#endif`,Lx=`#ifdef USE_TRANSMISSION
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ox=`uniform sampler2D t2D;
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
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`#include <common>
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
}`,Wx=`#if DEPTH_PACKING == 3200
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
}`,Xx=`#define DISTANCE
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
}`,Yx=`#define DISTANCE
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
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`uniform float scale;
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
}`,jx=`uniform vec3 diffuse;
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
}`,Kx=`#include <common>
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
}`,Jx=`uniform vec3 diffuse;
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
}`,Qx=`#define LAMBERT
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
}`,t_=`#define LAMBERT
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
}`,e_=`#define MATCAP
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
}`,n_=`#define MATCAP
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
}`,i_=`#define NORMAL
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
}`,s_=`#define NORMAL
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
}`,o_=`#define PHONG
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
}`,r_=`#define PHONG
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
}`,a_=`#define STANDARD
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
}`,c_=`#define STANDARD
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
}`,l_=`#define TOON
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
}`,h_=`#define TOON
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
}`,u_=`uniform float size;
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
}`,f_=`uniform vec3 diffuse;
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
}`,d_=`#include <common>
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
}`,p_=`uniform vec3 color;
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
}`,m_=`uniform float rotation;
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
}`,g_=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Om,alphahash_pars_fragment:Bm,alphamap_fragment:km,alphamap_pars_fragment:Gm,alphatest_fragment:Hm,alphatest_pars_fragment:Vm,aomap_fragment:Wm,aomap_pars_fragment:Xm,batching_pars_vertex:Ym,batching_vertex:qm,begin_vertex:Zm,beginnormal_vertex:$m,bsdfs:jm,iridescence_fragment:Km,bumpmap_pars_fragment:Jm,clipping_planes_fragment:Qm,clipping_planes_pars_fragment:tg,clipping_planes_pars_vertex:eg,clipping_planes_vertex:ng,color_fragment:ig,color_pars_fragment:sg,color_pars_vertex:og,color_vertex:rg,common:ag,cube_uv_reflection_fragment:cg,defaultnormal_vertex:lg,displacementmap_pars_vertex:hg,displacementmap_vertex:ug,emissivemap_fragment:fg,emissivemap_pars_fragment:dg,colorspace_fragment:pg,colorspace_pars_fragment:mg,envmap_fragment:gg,envmap_common_pars_fragment:xg,envmap_pars_fragment:_g,envmap_pars_vertex:vg,envmap_physical_pars_fragment:Pg,envmap_vertex:Mg,fog_vertex:yg,fog_pars_vertex:wg,fog_fragment:Sg,fog_pars_fragment:bg,gradientmap_pars_fragment:Tg,lightmap_pars_fragment:Eg,lights_lambert_fragment:Ag,lights_lambert_pars_fragment:Rg,lights_pars_begin:Cg,lights_toon_fragment:Ig,lights_toon_pars_fragment:Lg,lights_phong_fragment:Dg,lights_phong_pars_fragment:Ug,lights_physical_fragment:Ng,lights_physical_pars_fragment:zg,lights_fragment_begin:Fg,lights_fragment_maps:Og,lights_fragment_end:Bg,logdepthbuf_fragment:kg,logdepthbuf_pars_fragment:Gg,logdepthbuf_pars_vertex:Hg,logdepthbuf_vertex:Vg,map_fragment:Wg,map_pars_fragment:Xg,map_particle_fragment:Yg,map_particle_pars_fragment:qg,metalnessmap_fragment:Zg,metalnessmap_pars_fragment:$g,morphinstance_vertex:jg,morphcolor_vertex:Kg,morphnormal_vertex:Jg,morphtarget_pars_vertex:Qg,morphtarget_vertex:tx,normal_fragment_begin:ex,normal_fragment_maps:nx,normal_pars_fragment:ix,normal_pars_vertex:sx,normal_vertex:ox,normalmap_pars_fragment:rx,clearcoat_normal_fragment_begin:ax,clearcoat_normal_fragment_maps:cx,clearcoat_pars_fragment:lx,iridescence_pars_fragment:hx,opaque_fragment:ux,packing:fx,premultiplied_alpha_fragment:dx,project_vertex:px,dithering_fragment:mx,dithering_pars_fragment:gx,roughnessmap_fragment:xx,roughnessmap_pars_fragment:_x,shadowmap_pars_fragment:vx,shadowmap_pars_vertex:Mx,shadowmap_vertex:yx,shadowmask_pars_fragment:wx,skinbase_vertex:Sx,skinning_pars_vertex:bx,skinning_vertex:Tx,skinnormal_vertex:Ex,specularmap_fragment:Ax,specularmap_pars_fragment:Rx,tonemapping_fragment:Cx,tonemapping_pars_fragment:Px,transmission_fragment:Ix,transmission_pars_fragment:Lx,uv_pars_fragment:Dx,uv_pars_vertex:Ux,uv_vertex:Nx,worldpos_vertex:zx,background_vert:Fx,background_frag:Ox,backgroundCube_vert:Bx,backgroundCube_frag:kx,cube_vert:Gx,cube_frag:Hx,depth_vert:Vx,depth_frag:Wx,distanceRGBA_vert:Xx,distanceRGBA_frag:Yx,equirect_vert:qx,equirect_frag:Zx,linedashed_vert:$x,linedashed_frag:jx,meshbasic_vert:Kx,meshbasic_frag:Jx,meshlambert_vert:Qx,meshlambert_frag:t_,meshmatcap_vert:e_,meshmatcap_frag:n_,meshnormal_vert:i_,meshnormal_frag:s_,meshphong_vert:o_,meshphong_frag:r_,meshphysical_vert:a_,meshphysical_frag:c_,meshtoon_vert:l_,meshtoon_frag:h_,points_vert:u_,points_frag:f_,shadow_vert:d_,shadow_frag:p_,sprite_vert:m_,sprite_frag:g_},pt={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},ti={basic:{uniforms:Qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new ot(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Qe([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Qe([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Qe([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new ot(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Qe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Qe([pt.points,pt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Qe([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Qe([pt.common,pt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Qe([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Qe([pt.sprite,pt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Qe([pt.common,pt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Qe([pt.lights,pt.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};ti.physical={uniforms:Qe([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Xr={r:0,b:0,g:0},Ji=new ci,x_=new ue;function __(i,t,e,n,s,o,r){const a=new ot(0);let l=o===!0?0:1,c,h,f=null,u=0,d=null;function g(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function _(v){let M=!1;const A=g(v);A===null?m(a,l):A&&A.isColor&&(m(A,1),M=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(v,M){const A=g(M);A&&(A.isCubeTexture||A.mapping===Ha)?(h===void 0&&(h=new I(new fr(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:xo(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,b,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ji.copy(M.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(x_.makeRotationFromEuler(Ji)),h.material.toneMapped=oe.getTransfer(A.colorSpace)!==fe,(f!==A||u!==A.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=A,u=A.version,d=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new I(new Me(2,2),new Mn({name:"BackgroundMaterial",uniforms:xo(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=oe.getTransfer(A.colorSpace)!==fe,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||u!==A.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=A,u=A.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,M){v.getRGB(Xr,fd(i)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,M,r)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:_,addToRenderList:p,dispose:w}}function v_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let o=s,r=!1;function a(x,R,U,D,z){let H=!1;const V=f(D,U,R);o!==V&&(o=V,c(o.object)),H=d(x,D,U,z),H&&g(x,D,U,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(H||r)&&(r=!1,M(x,R,U,D),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function f(x,R,U){const D=U.wireframe===!0;let z=n[x.id];z===void 0&&(z={},n[x.id]=z);let H=z[R.id];H===void 0&&(H={},z[R.id]=H);let V=H[D];return V===void 0&&(V=u(l()),H[D]=V),V}function u(x){const R=[],U=[],D=[];for(let z=0;z<e;z++)R[z]=0,U[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:D,object:x,attributes:{},index:null}}function d(x,R,U,D){const z=o.attributes,H=R.attributes;let V=0;const Z=U.getAttributes();for(const W in Z)if(Z[W].location>=0){const ft=z[W];let bt=H[W];if(bt===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(bt=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(bt=x.instanceColor)),ft===void 0||ft.attribute!==bt||bt&&ft.data!==bt.data)return!0;V++}return o.attributesNum!==V||o.index!==D}function g(x,R,U,D){const z={},H=R.attributes;let V=0;const Z=U.getAttributes();for(const W in Z)if(Z[W].location>=0){let ft=H[W];ft===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(ft=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(ft=x.instanceColor));const bt={};bt.attribute=ft,ft&&ft.data&&(bt.data=ft.data),z[W]=bt,V++}o.attributes=z,o.attributesNum=V,o.index=D}function _(){const x=o.newAttributes;for(let R=0,U=x.length;R<U;R++)x[R]=0}function p(x){m(x,0)}function m(x,R){const U=o.newAttributes,D=o.enabledAttributes,z=o.attributeDivisors;U[x]=1,D[x]===0&&(i.enableVertexAttribArray(x),D[x]=1),z[x]!==R&&(i.vertexAttribDivisor(x,R),z[x]=R)}function w(){const x=o.newAttributes,R=o.enabledAttributes;for(let U=0,D=R.length;U<D;U++)R[U]!==x[U]&&(i.disableVertexAttribArray(U),R[U]=0)}function v(x,R,U,D,z,H,V){V===!0?i.vertexAttribIPointer(x,R,U,z,H):i.vertexAttribPointer(x,R,U,D,z,H)}function M(x,R,U,D){_();const z=D.attributes,H=U.getAttributes(),V=R.defaultAttributeValues;for(const Z in H){const W=H[Z];if(W.location>=0){let lt=z[Z];if(lt===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(lt=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(lt=x.instanceColor)),lt!==void 0){const ft=lt.normalized,bt=lt.itemSize,Ht=t.get(lt);if(Ht===void 0)continue;const $t=Ht.buffer,J=Ht.type,at=Ht.bytesPerElement,yt=J===i.INT||J===i.UNSIGNED_INT||lt.gpuType===Th;if(lt.isInterleavedBufferAttribute){const ut=lt.data,Nt=ut.stride,Bt=lt.offset;if(ut.isInstancedInterleavedBuffer){for(let qt=0;qt<W.locationSize;qt++)m(W.location+qt,ut.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let qt=0;qt<W.locationSize;qt++)p(W.location+qt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let qt=0;qt<W.locationSize;qt++)v(W.location+qt,bt/W.locationSize,J,ft,Nt*at,(Bt+bt/W.locationSize*qt)*at,yt)}else{if(lt.isInstancedBufferAttribute){for(let ut=0;ut<W.locationSize;ut++)m(W.location+ut,lt.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ut=0;ut<W.locationSize;ut++)p(W.location+ut);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let ut=0;ut<W.locationSize;ut++)v(W.location+ut,bt/W.locationSize,J,ft,bt*at,bt/W.locationSize*ut*at,yt)}}else if(V!==void 0){const ft=V[Z];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(W.location,ft);break;case 3:i.vertexAttrib3fv(W.location,ft);break;case 4:i.vertexAttrib4fv(W.location,ft);break;default:i.vertexAttrib1fv(W.location,ft)}}}}w()}function A(){S();for(const x in n){const R=n[x];for(const U in R){const D=R[U];for(const z in D)h(D[z].object),delete D[z];delete R[U]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const U in R){const D=R[U];for(const z in D)h(D[z].object),delete D[z];delete R[U]}delete n[x.id]}function b(x){for(const R in n){const U=n[R];if(U[x.id]===void 0)continue;const D=U[x.id];for(const z in D)h(D[z].object),delete D[z];delete U[x.id]}}function S(){y(),r=!0,o!==s&&(o=s,c(o.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function M_(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];e.update(d,n,1)}function l(c,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)r(c[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function y_(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(b){return!(b!==Zn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const S=b===bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Ai&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ri&&!S)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:w,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:A,maxSamples:E}}function w_(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new ns,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||o&&!p)o?h(null):c();else{const w=o?0:n,v=w*4;let M=m.clippingState||null;l.value=M,M=h(g,u,v,d);for(let A=0;A!==v;++A)M[A]=e[A];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,M=d;v!==_;++v,M+=4)r.copy(f[v]).applyMatrix4(w,a),r.normal.toArray(p,M),p[M+3]=r.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function S_(i){let t=new WeakMap;function e(r,a){return a===ul?r.mapping=uo:a===fl&&(r.mapping=fo),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===ul||a===fl)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new $0(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const Ks=4,qu=[.125,.215,.35,.446,.526,.582],hs=20,Ac=new Hh,Zu=new ot;let Rc=null,Cc=0,Pc=0,Ic=!1;const is=(1+Math.sqrt(5))/2,Vs=1/is,$u=[new N(-is,Vs,0),new N(is,Vs,0),new N(-Vs,0,is),new N(Vs,0,is),new N(0,is,-Vs),new N(0,is,Vs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class ju{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rc,Cc,Pc),this._renderer.xr.enabled=Ic,t.scissorTest=!1,Yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===uo||t.mapping===fo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:bi,format:Zn,colorSpace:go,depthBuffer:!1},s=Ku(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ku(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b_(o)),this._blurMaterial=T_(o,t,e)}return s}_compileMaterial(t){const e=new I(this._lodPlanes[0],t);this._renderer.compile(e,Ac)}_sceneToCubeUV(t,e,n,s){const a=new An(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Zu),h.toneMapping=Vi,h.autoClear=!1;const d=new $({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new I(new fr,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(Zu),_=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):w===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;Yr(s,w*v,m>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===uo||t.mapping===fo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ju());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new I(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Yr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Ac)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=$u[(s-o-1)%$u.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new I(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*hs-1),_=o/g,p=isFinite(o)?1+Math.floor(h*_):hs;p>hs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hs}`);const m=[];let w=0;for(let b=0;b<hs;++b){const S=b/_,y=Math.exp(-S*S/2);m.push(y),b===0?w+=y:b<p&&(w+=2*y)}for(let b=0;b<m.length;b++)m[b]=m[b]/w;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;const M=this._sizeLods[s],A=3*M*(s>v-Ks?s-v+Ks:0),E=4*(this._cubeSize-M);Yr(e,A,E,3*M,2*M),l.setRenderTarget(e),l.render(f,Ac)}}function b_(i){const t=[],e=[],n=[];let s=i;const o=i-Ks+1+qu.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>i-Ks?l=qu[r-i+Ks-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,_=3,p=2,m=1,w=new Float32Array(_*g*d),v=new Float32Array(p*g*d),M=new Float32Array(m*g*d);for(let E=0;E<d;E++){const b=E%3*2/3-1,S=E>2?0:-1,y=[b,S,0,b+2/3,S,0,b+2/3,S+1,0,b,S,0,b+2/3,S+1,0,b,S+1,0];w.set(y,_*g*E),v.set(u,p*g*E);const x=[E,E,E,E,E,E];M.set(x,m*g*E)}const A=new ye;A.setAttribute("position",new We(w,_)),A.setAttribute("uv",new We(v,p)),A.setAttribute("faceIndex",new We(M,m)),t.push(A),s>Ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ku(i,t,e){const n=new $n(i,t,e);return n.texture.mapping=Ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function T_(i,t,e){const n=new Float32Array(hs),s=new N(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vh(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Ju(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vh(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Qu(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Vh(){return`

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
	`}function E_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ul||l===fl,h=l===uo||l===fo;if(c||h){let f=t.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new ju(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new ju(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function A_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&qs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function R_(i,t,e,n){const s={},o=new WeakMap;function r(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete s[u.id];const d=o.get(u);d&&(t.remove(d),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const w=d.array;_=d.version;for(let v=0,M=w.length;v<M;v+=3){const A=w[v+0],E=w[v+1],b=w[v+2];u.push(A,E,E,b,b,A)}}else if(g!==void 0){const w=g.array;_=g.version;for(let v=0,M=w.length/3-1;v<M;v+=3){const A=v+0,E=v+1,b=v+2;u.push(A,E,E,b,b,A)}}else return;const p=new(od(u)?ud:hd)(u,1);p.version=_;const m=o.get(f);m&&t.remove(m),o.set(f,p)}function h(f){const u=o.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function C_(i,t,e){let n;function s(u){n=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function l(u,d){i.drawElements(n,d,o,u*r),e.update(d,n,1)}function c(u,d,g){g!==0&&(i.drawElementsInstanced(n,d,o,u*r,g),e.update(d,n,g))}function h(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,u,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function f(u,d,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/r,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,o,u,0,_,0,g);let m=0;for(let w=0;w<g;w++)m+=d[w]*_[w];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function P_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function I_(i,t,e){const n=new WeakMap,s=new de;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let x=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var d=x;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),p===!0&&(M=3);let A=a.attributes.position.count*M,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const b=new Float32Array(A*E*4*f),S=new ad(b,A,E,f);S.type=ri,S.needsUpdate=!0;const y=M*4;for(let R=0;R<f;R++){const U=m[R],D=w[R],z=v[R],H=A*E*4*R;for(let V=0;V<U.count;V++){const Z=V*y;g===!0&&(s.fromBufferAttribute(U,V),b[H+Z+0]=s.x,b[H+Z+1]=s.y,b[H+Z+2]=s.z,b[H+Z+3]=0),_===!0&&(s.fromBufferAttribute(D,V),b[H+Z+4]=s.x,b[H+Z+5]=s.y,b[H+Z+6]=s.z,b[H+Z+7]=0),p===!0&&(s.fromBufferAttribute(z,V),b[H+Z+8]=s.x,b[H+Z+9]=s.y,b[H+Z+10]=s.z,b[H+Z+11]=z.itemSize===4?s.w:1)}}u={count:f,texture:S,size:new dt(A,E)},n.set(a,u),a.addEventListener("dispose",x)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:o}}function L_(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}const Pd=new je,tf=new xd(1,1),Id=new ad,Ld=new U0,Dd=new pd,ef=[],nf=[],sf=new Float32Array(16),of=new Float32Array(9),rf=new Float32Array(4);function bo(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=ef[s];if(o===void 0&&(o=new Float32Array(s),ef[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ya(i,t){let e=nf[t];e===void 0&&(e=new Int32Array(t),nf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function D_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function U_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function N_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function z_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function F_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Ne(e,n))return;rf.set(n),i.uniformMatrix2fv(this.addr,!1,rf),ze(e,n)}}function O_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Ne(e,n))return;of.set(n),i.uniformMatrix3fv(this.addr,!1,of),ze(e,n)}}function B_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Ne(e,n))return;sf.set(n),i.uniformMatrix4fv(this.addr,!1,sf),ze(e,n)}}function k_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function G_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function H_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function V_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function W_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function X_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function Y_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function q_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function Z_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(tf.compareFunction=sd,o=tf):o=Pd,e.setTexture2D(t||o,s)}function $_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ld,s)}function j_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Dd,s)}function K_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Id,s)}function J_(i){switch(i){case 5126:return D_;case 35664:return U_;case 35665:return N_;case 35666:return z_;case 35674:return F_;case 35675:return O_;case 35676:return B_;case 5124:case 35670:return k_;case 35667:case 35671:return G_;case 35668:case 35672:return H_;case 35669:case 35673:return V_;case 5125:return W_;case 36294:return X_;case 36295:return Y_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return Z_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return K_}}function Q_(i,t){i.uniform1fv(this.addr,t)}function tv(i,t){const e=bo(t,this.size,2);i.uniform2fv(this.addr,e)}function ev(i,t){const e=bo(t,this.size,3);i.uniform3fv(this.addr,e)}function nv(i,t){const e=bo(t,this.size,4);i.uniform4fv(this.addr,e)}function iv(i,t){const e=bo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function sv(i,t){const e=bo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ov(i,t){const e=bo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function rv(i,t){i.uniform1iv(this.addr,t)}function av(i,t){i.uniform2iv(this.addr,t)}function cv(i,t){i.uniform3iv(this.addr,t)}function lv(i,t){i.uniform4iv(this.addr,t)}function hv(i,t){i.uniform1uiv(this.addr,t)}function uv(i,t){i.uniform2uiv(this.addr,t)}function fv(i,t){i.uniform3uiv(this.addr,t)}function dv(i,t){i.uniform4uiv(this.addr,t)}function pv(i,t,e){const n=this.cache,s=t.length,o=Ya(e,s);Ne(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Pd,o[r])}function mv(i,t,e){const n=this.cache,s=t.length,o=Ya(e,s);Ne(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Ld,o[r])}function gv(i,t,e){const n=this.cache,s=t.length,o=Ya(e,s);Ne(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Dd,o[r])}function xv(i,t,e){const n=this.cache,s=t.length,o=Ya(e,s);Ne(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Id,o[r])}function _v(i){switch(i){case 5126:return Q_;case 35664:return tv;case 35665:return ev;case 35666:return nv;case 35674:return iv;case 35675:return sv;case 35676:return ov;case 5124:case 35670:return rv;case 35667:case 35671:return av;case 35668:case 35672:return cv;case 35669:case 35673:return lv;case 5125:return hv;case 36294:return uv;case 36295:return fv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return pv;case 35679:case 36299:case 36307:return mv;case 35680:case 36300:case 36308:case 36293:return gv;case 36289:case 36303:case 36311:case 36292:return xv}}class vv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=J_(e.type)}}class Mv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_v(e.type)}}class yv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Lc=/(\w+)(\])?(\[|\.)?/g;function af(i,t){i.seq.push(t),i.map[t.id]=t}function wv(i,t,e){const n=i.name,s=n.length;for(Lc.lastIndex=0;;){const o=Lc.exec(n),r=Lc.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){af(e,c===void 0?new vv(a,i,t):new Mv(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new yv(a),af(e,f)),e=f}}}class la{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);wv(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function cf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Sv=37297;let bv=0;function Tv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const lf=new Wt;function Ev(i){oe._getMatrix(lf,oe.workingColorSpace,i);const t=`mat3( ${lf.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case va:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function hf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Tv(i.getShaderSource(t),r)}else return s}function Av(i,t){const e=Ev(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rv(i,t){let e;switch(t){case a0:e="Linear";break;case c0:e="Reinhard";break;case l0:e="Cineon";break;case Yf:e="ACESFilmic";break;case u0:e="AgX";break;case f0:e="Neutral";break;case h0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qr=new N;function Cv(){oe.getLuminanceCoefficients(qr);const i=qr.x.toFixed(4),t=qr.y.toFixed(4),e=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function Iv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Bo(i){return i!==""}function uf(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ff(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Dv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(i){return i.replace(Dv,Nv)}const Uv=new Map;function Nv(i,t){let e=Yt[t];if(e===void 0){const n=Uv.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Yl(e)}const zv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(i){return i.replace(zv,Fv)}function Fv(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function pf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Ov(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xi&&(t="SHADOWMAP_TYPE_VSM"),t}function Bv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case uo:case fo:t="ENVMAP_TYPE_CUBE";break;case Ha:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fo:t="ENVMAP_MODE_REFRACTION";break}return t}function Gv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xf:t="ENVMAP_BLENDING_MULTIPLY";break;case o0:t="ENVMAP_BLENDING_MIX";break;case r0:t="ENVMAP_BLENDING_ADD";break}return t}function Hv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Vv(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=Ov(e),c=Bv(e),h=kv(e),f=Gv(e),u=Hv(e),d=Pv(e),g=Iv(o),_=s.createProgram();let p,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bo).join(`
`),m.length>0&&(m+=`
`)):(p=[pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),m=[pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vi?"#define TONE_MAPPING":"",e.toneMapping!==Vi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Vi?Rv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Av("linearToOutputTexel",e.outputColorSpace),Cv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bo).join(`
`)),r=Yl(r),r=uf(r,e),r=ff(r,e),a=Yl(a),a=uf(a,e),a=ff(a,e),r=df(r),a=df(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=w+p+r,M=w+m+a,A=cf(s,s.VERTEX_SHADER,v),E=cf(s,s.FRAGMENT_SHADER,M);s.attachShader(_,A),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(R){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),D=s.getShaderInfoLog(A).trim(),z=s.getShaderInfoLog(E).trim();let H=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,E);else{const Z=hf(s,A,"vertex"),W=hf(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+Z+`
`+W)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(D===""||z==="")&&(V=!1);V&&(R.diagnostics={runnable:H,programLog:U,vertexShader:{log:D,prefix:p},fragmentShader:{log:z,prefix:m}})}s.deleteShader(A),s.deleteShader(E),S=new la(s,_),y=Lv(s,_)}let S;this.getUniforms=function(){return S===void 0&&b(this),S};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,Sv)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}let Wv=0;class Xv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Yv(t),e.set(t,n)),n}}class Yv{constructor(t){this.id=Wv++,this.code=t,this.usedTimes=0}}function qv(i,t,e,n,s,o,r){const a=new cd,l=new Xv,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,x,R,U,D){const z=U.fog,H=D.geometry,V=y.isMeshStandardMaterial?U.environment:null,Z=(y.isMeshStandardMaterial?e:t).get(y.envMap||V),W=Z&&Z.mapping===Ha?Z.image.height:null,lt=g[y.type];y.precision!==null&&(d=s.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ft=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,bt=ft!==void 0?ft.length:0;let Ht=0;H.morphAttributes.position!==void 0&&(Ht=1),H.morphAttributes.normal!==void 0&&(Ht=2),H.morphAttributes.color!==void 0&&(Ht=3);let $t,J,at,yt;if(lt){const le=ti[lt];$t=le.vertexShader,J=le.fragmentShader}else $t=y.vertexShader,J=y.fragmentShader,l.update(y),at=l.getVertexShaderID(y),yt=l.getFragmentShaderID(y);const ut=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),Bt=D.isInstancedMesh===!0,qt=D.isBatchedMesh===!0,we=!!y.map,Qt=!!y.matcap,Re=!!Z,F=!!y.aoMap,In=!!y.lightMap,jt=!!y.bumpMap,Kt=!!y.normalMap,It=!!y.displacementMap,xe=!!y.emissiveMap,Pt=!!y.metalnessMap,L=!!y.roughnessMap,C=y.anisotropy>0,X=y.clearcoat>0,nt=y.dispersion>0,st=y.iridescence>0,tt=y.sheen>0,Rt=y.transmission>0,xt=C&&!!y.anisotropyMap,St=X&&!!y.clearcoatMap,te=X&&!!y.clearcoatNormalMap,ct=X&&!!y.clearcoatRoughnessMap,Tt=st&&!!y.iridescenceMap,Ut=st&&!!y.iridescenceThicknessMap,Ft=tt&&!!y.sheenColorMap,Et=tt&&!!y.sheenRoughnessMap,Jt=!!y.specularMap,Xt=!!y.specularColorMap,me=!!y.specularIntensityMap,O=Rt&&!!y.transmissionMap,mt=Rt&&!!y.thicknessMap,j=!!y.gradientMap,it=!!y.alphaMap,vt=y.alphaTest>0,_t=!!y.alphaHash,Vt=!!y.extensions;let Te=Vi;y.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Te=i.toneMapping);const Xe={shaderID:lt,shaderType:y.type,shaderName:y.name,vertexShader:$t,fragmentShader:J,defines:y.defines,customVertexShaderID:at,customFragmentShaderID:yt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:qt,batchingColor:qt&&D._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&D.instanceColor!==null,instancingMorph:Bt&&D.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:go,alphaToCoverage:!!y.alphaToCoverage,map:we,matcap:Qt,envMap:Re,envMapMode:Re&&Z.mapping,envMapCubeUVHeight:W,aoMap:F,lightMap:In,bumpMap:jt,normalMap:Kt,displacementMap:u&&It,emissiveMap:xe,normalMapObjectSpace:Kt&&y.normalMapType===g0,normalMapTangentSpace:Kt&&y.normalMapType===id,metalnessMap:Pt,roughnessMap:L,anisotropy:C,anisotropyMap:xt,clearcoat:X,clearcoatMap:St,clearcoatNormalMap:te,clearcoatRoughnessMap:ct,dispersion:nt,iridescence:st,iridescenceMap:Tt,iridescenceThicknessMap:Ut,sheen:tt,sheenColorMap:Ft,sheenRoughnessMap:Et,specularMap:Jt,specularColorMap:Xt,specularIntensityMap:me,transmission:Rt,transmissionMap:O,thicknessMap:mt,gradientMap:j,opaque:y.transparent===!1&&y.blending===to&&y.alphaToCoverage===!1,alphaMap:it,alphaTest:vt,alphaHash:_t,combine:y.combine,mapUv:we&&_(y.map.channel),aoMapUv:F&&_(y.aoMap.channel),lightMapUv:In&&_(y.lightMap.channel),bumpMapUv:jt&&_(y.bumpMap.channel),normalMapUv:Kt&&_(y.normalMap.channel),displacementMapUv:It&&_(y.displacementMap.channel),emissiveMapUv:xe&&_(y.emissiveMap.channel),metalnessMapUv:Pt&&_(y.metalnessMap.channel),roughnessMapUv:L&&_(y.roughnessMap.channel),anisotropyMapUv:xt&&_(y.anisotropyMap.channel),clearcoatMapUv:St&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(y.sheenRoughnessMap.channel),specularMapUv:Jt&&_(y.specularMap.channel),specularColorMapUv:Xt&&_(y.specularColorMap.channel),specularIntensityMapUv:me&&_(y.specularIntensityMap.channel),transmissionMapUv:O&&_(y.transmissionMap.channel),thicknessMapUv:mt&&_(y.thicknessMap.channel),alphaMapUv:it&&_(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Kt||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(we||it),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Nt,skinning:D.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Ht,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:we&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===fe,decodeVideoTextureEmissive:xe&&y.emissiveMap.isVideoTexture===!0&&oe.getTransfer(y.emissiveMap.colorSpace)===fe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===zt,flipSided:y.side===ln,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Vt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&y.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function m(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)x.push(R),x.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(w(x,y),v(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function w(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function v(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const x=g[y.type];let R;if(x){const U=ti[x];R=wa.clone(U.uniforms)}else R=y.uniforms;return R}function A(y,x){let R;for(let U=0,D=h.length;U<D;U++){const z=h[U];if(z.cacheKey===x){R=z,++R.usedTimes;break}}return R===void 0&&(R=new Vv(i,x,y,o),h.push(R)),R}function E(y){if(--y.usedTimes===0){const x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function b(y){l.remove(y)}function S(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:M,acquireProgram:A,releaseProgram:E,releaseShaderCache:b,programs:h,dispose:S}}function Zv(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function $v(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function mf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gf(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(f,u,d,g,_,p){let m=i[t];return m===void 0?(m={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},i[t]=m):(m.id=f.id,m.object=f,m.geometry=u,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),t++,m}function a(f,u,d,g,_,p){const m=r(f,u,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(f,u,d,g,_,p){const m=r(f,u,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(f,u){e.length>1&&e.sort(f||$v),n.length>1&&n.sort(u||mf),s.length>1&&s.sort(u||mf)}function h(){for(let f=t,u=i.length;f<u;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function jv(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new gf,i.set(n,[r])):s>=o.length?(r=new gf,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Kv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new ot};break;case"SpotLight":e={position:new N,direction:new N,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":e={color:new ot,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Jv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Qv=0;function tM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function eM(i){const t=new Kv,e=Jv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,o=new ue,r=new ue;function a(c){let h=0,f=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,w=0,v=0,M=0,A=0,E=0,b=0;c.sort(tM);for(let y=0,x=c.length;y<x;y++){const R=c[y],U=R.color,D=R.intensity,z=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=U.r*D,f+=U.g*D,u+=U.b*D;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],D);b++}else if(R.isDirectionalLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,W=e.get(R);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=R.shadow.matrix,w++}n.directional[d]=V,d++}else if(R.isSpotLight){const V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(U).multiplyScalar(D),V.distance=z,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[_]=V;const Z=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,Z.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[_]=Z.matrix,R.castShadow){const W=e.get(R);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=H,M++}_++}else if(R.isRectAreaLight){const V=t.get(R);V.color.copy(U).multiplyScalar(D),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=V,p++}else if(R.isPointLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const Z=R.shadow,W=e.get(R);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=R.shadow.matrix,v++}n.point[g]=V,g++}else if(R.isHemisphereLight){const V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(D),V.groundColor.copy(R.groundColor).multiplyScalar(D),n.hemi[m]=V,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const S=n.hash;(S.directionalLength!==d||S.pointLength!==g||S.spotLength!==_||S.rectAreaLength!==p||S.hemiLength!==m||S.numDirectionalShadows!==w||S.numPointShadows!==v||S.numSpotShadows!==M||S.numSpotMaps!==A||S.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=b,S.directionalLength=d,S.pointLength=g,S.spotLength=_,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=w,S.numPointShadows=v,S.numSpotShadows=M,S.numSpotMaps=A,S.numLightProbes=b,n.version=Qv++)}function l(c,h){let f=0,u=0,d=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){const v=c[m];if(v.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(v.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),r.identity(),o.copy(v.matrixWorld),o.premultiply(p),r.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),u++}else if(v.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function xf(i){const t=new eM(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function nM(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new xf(i),t.set(s,[a])):o>=r.length?(a=new xf(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const iM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sM=`uniform sampler2D shadow_pass;
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
}`;function oM(i,t,e){let n=new Uh;const s=new dt,o=new dt,r=new de,a=new Pm({depthPacking:m0}),l=new Im,c={},h=e.maxTextureSize,f={[Xi]:ln,[ln]:Xi,[zt]:zt},u=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:iM,fragmentShader:sM}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new I(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vf;let m=this.type;this.render=function(E,b,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const y=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Si),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const D=m!==xi&&this.type===xi,z=m===xi&&this.type!==xi;for(let H=0,V=E.length;H<V;H++){const Z=E[H],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const lt=W.getFrameExtents();if(s.multiply(lt),o.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/lt.x),s.x=o.x*lt.x,W.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/lt.y),s.y=o.y*lt.y,W.mapSize.y=o.y)),W.map===null||D===!0||z===!0){const bt=this.type!==xi?{minFilter:Pn,magFilter:Pn}:{};W.map!==null&&W.map.dispose(),W.map=new $n(s.x,s.y,bt),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ft=W.getViewportCount();for(let bt=0;bt<ft;bt++){const Ht=W.getViewport(bt);r.set(o.x*Ht.x,o.y*Ht.y,o.x*Ht.z,o.y*Ht.w),U.viewport(r),W.updateMatrices(Z,bt),n=W.getFrustum(),M(b,S,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===xi&&w(W,S),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(y,x,R)};function w(E,b){const S=t.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new $n(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,S,u,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,S,d,_,null)}function v(E,b,S,y){let x=null;const R=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)x=R;else if(x=S.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const U=x.uuid,D=b.uuid;let z=c[U];z===void 0&&(z={},c[U]=z);let H=z[D];H===void 0&&(H=x.clone(),z[D]=H,b.addEventListener("dispose",A)),x=H}if(x.visible=b.visible,x.wireframe=b.wireframe,y===xi?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:f[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,S.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=i.properties.get(x);U.light=S}return x}function M(E,b,S,y,x){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===xi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);const D=t.update(E),z=E.material;if(Array.isArray(z)){const H=D.groups;for(let V=0,Z=H.length;V<Z;V++){const W=H[V],lt=z[W.materialIndex];if(lt&&lt.visible){const ft=v(E,lt,y,x);E.onBeforeShadow(i,E,b,S,D,ft,W),i.renderBufferDirect(S,null,D,ft,E,W),E.onAfterShadow(i,E,b,S,D,ft,W)}}}else if(z.visible){const H=v(E,z,y,x);E.onBeforeShadow(i,E,b,S,D,H,null),i.renderBufferDirect(S,null,D,H,E,null),E.onAfterShadow(i,E,b,S,D,H,null)}}const U=E.children;for(let D=0,z=U.length;D<z;D++)M(U[D],b,S,y,x)}function A(E){E.target.removeEventListener("dispose",A);for(const S in c){const y=c[S],x=E.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const rM={[sl]:ol,[rl]:ll,[al]:hl,[ho]:cl,[ol]:sl,[ll]:rl,[hl]:al,[cl]:ho};function aM(i,t){function e(){let O=!1;const mt=new de;let j=null;const it=new de(0,0,0,0);return{setMask:function(vt){j!==vt&&!O&&(i.colorMask(vt,vt,vt,vt),j=vt)},setLocked:function(vt){O=vt},setClear:function(vt,_t,Vt,Te,Xe){Xe===!0&&(vt*=Te,_t*=Te,Vt*=Te),mt.set(vt,_t,Vt,Te),it.equals(mt)===!1&&(i.clearColor(vt,_t,Vt,Te),it.copy(mt))},reset:function(){O=!1,j=null,it.set(-1,0,0,0)}}}function n(){let O=!1,mt=!1,j=null,it=null,vt=null;return{setReversed:function(_t){if(mt!==_t){const Vt=t.get("EXT_clip_control");mt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const Te=vt;vt=null,this.setClear(Te)}mt=_t},getReversed:function(){return mt},setTest:function(_t){_t?ut(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(_t){j!==_t&&!O&&(i.depthMask(_t),j=_t)},setFunc:function(_t){if(mt&&(_t=rM[_t]),it!==_t){switch(_t){case sl:i.depthFunc(i.NEVER);break;case ol:i.depthFunc(i.ALWAYS);break;case rl:i.depthFunc(i.LESS);break;case ho:i.depthFunc(i.LEQUAL);break;case al:i.depthFunc(i.EQUAL);break;case cl:i.depthFunc(i.GEQUAL);break;case ll:i.depthFunc(i.GREATER);break;case hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=_t}},setLocked:function(_t){O=_t},setClear:function(_t){vt!==_t&&(mt&&(_t=1-_t),i.clearDepth(_t),vt=_t)},reset:function(){O=!1,j=null,it=null,vt=null,mt=!1}}}function s(){let O=!1,mt=null,j=null,it=null,vt=null,_t=null,Vt=null,Te=null,Xe=null;return{setTest:function(le){O||(le?ut(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(le){mt!==le&&!O&&(i.stencilMask(le),mt=le)},setFunc:function(le,Gn,ui){(j!==le||it!==Gn||vt!==ui)&&(i.stencilFunc(le,Gn,ui),j=le,it=Gn,vt=ui)},setOp:function(le,Gn,ui){(_t!==le||Vt!==Gn||Te!==ui)&&(i.stencilOp(le,Gn,ui),_t=le,Vt=Gn,Te=ui)},setLocked:function(le){O=le},setClear:function(le){Xe!==le&&(i.clearStencil(le),Xe=le)},reset:function(){O=!1,mt=null,j=null,it=null,vt=null,_t=null,Vt=null,Te=null,Xe=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u=new WeakMap,d=[],g=null,_=!1,p=null,m=null,w=null,v=null,M=null,A=null,E=null,b=new ot(0,0,0),S=0,y=!1,x=null,R=null,U=null,D=null,z=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Z=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=Z>=2);let lt=null,ft={};const bt=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),$t=new de().fromArray(bt),J=new de().fromArray(Ht);function at(O,mt,j,it){const vt=new Uint8Array(4),_t=i.createTexture();i.bindTexture(O,_t),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<j;Vt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,it,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(mt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return _t}const yt={};yt[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),r.setFunc(ho),jt(!1),Kt(au),ut(i.CULL_FACE),F(Si);function ut(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Nt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Bt(O,mt){return f[O]!==mt?(i.bindFramebuffer(O,mt),f[O]=mt,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=mt),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function qt(O,mt){let j=d,it=!1;if(O){j=u.get(mt),j===void 0&&(j=[],u.set(mt,j));const vt=O.textures;if(j.length!==vt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,Vt=vt.length;_t<Vt;_t++)j[_t]=i.COLOR_ATTACHMENT0+_t;j.length=vt.length,it=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,it=!0);it&&i.drawBuffers(j)}function we(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const Qt={[ls]:i.FUNC_ADD,[Hp]:i.FUNC_SUBTRACT,[Vp]:i.FUNC_REVERSE_SUBTRACT};Qt[Wp]=i.MIN,Qt[Xp]=i.MAX;const Re={[Yp]:i.ZERO,[qp]:i.ONE,[Zp]:i.SRC_COLOR,[nl]:i.SRC_ALPHA,[t0]:i.SRC_ALPHA_SATURATE,[Jp]:i.DST_COLOR,[jp]:i.DST_ALPHA,[$p]:i.ONE_MINUS_SRC_COLOR,[il]:i.ONE_MINUS_SRC_ALPHA,[Qp]:i.ONE_MINUS_DST_COLOR,[Kp]:i.ONE_MINUS_DST_ALPHA,[e0]:i.CONSTANT_COLOR,[n0]:i.ONE_MINUS_CONSTANT_COLOR,[i0]:i.CONSTANT_ALPHA,[s0]:i.ONE_MINUS_CONSTANT_ALPHA};function F(O,mt,j,it,vt,_t,Vt,Te,Xe,le){if(O===Si){_===!0&&(Nt(i.BLEND),_=!1);return}if(_===!1&&(ut(i.BLEND),_=!0),O!==Gp){if(O!==p||le!==y){if((m!==ls||M!==ls)&&(i.blendEquation(i.FUNC_ADD),m=ls,M=ls),le)switch(O){case to:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Se:i.blendFunc(i.ONE,i.ONE);break;case cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case to:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Se:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}w=null,v=null,A=null,E=null,b.set(0,0,0),S=0,p=O,y=le}return}vt=vt||mt,_t=_t||j,Vt=Vt||it,(mt!==m||vt!==M)&&(i.blendEquationSeparate(Qt[mt],Qt[vt]),m=mt,M=vt),(j!==w||it!==v||_t!==A||Vt!==E)&&(i.blendFuncSeparate(Re[j],Re[it],Re[_t],Re[Vt]),w=j,v=it,A=_t,E=Vt),(Te.equals(b)===!1||Xe!==S)&&(i.blendColor(Te.r,Te.g,Te.b,Xe),b.copy(Te),S=Xe),p=O,y=!1}function In(O,mt){O.side===zt?Nt(i.CULL_FACE):ut(i.CULL_FACE);let j=O.side===ln;mt&&(j=!j),jt(j),O.blending===to&&O.transparent===!1?F(Si):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),o.setMask(O.colorWrite);const it=O.stencilWrite;a.setTest(it),it&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),xe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function jt(O){x!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),x=O)}function Kt(O){O!==Bp?(ut(i.CULL_FACE),O!==R&&(O===au?i.cullFace(i.BACK):O===kp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),R=O}function It(O){O!==U&&(V&&i.lineWidth(O),U=O)}function xe(O,mt,j){O?(ut(i.POLYGON_OFFSET_FILL),(D!==mt||z!==j)&&(i.polygonOffset(mt,j),D=mt,z=j)):Nt(i.POLYGON_OFFSET_FILL)}function Pt(O){O?ut(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function L(O){O===void 0&&(O=i.TEXTURE0+H-1),lt!==O&&(i.activeTexture(O),lt=O)}function C(O,mt,j){j===void 0&&(lt===null?j=i.TEXTURE0+H-1:j=lt);let it=ft[j];it===void 0&&(it={type:void 0,texture:void 0},ft[j]=it),(it.type!==O||it.texture!==mt)&&(lt!==j&&(i.activeTexture(j),lt=j),i.bindTexture(O,mt||yt[O]),it.type=O,it.texture=mt)}function X(){const O=ft[lt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function nt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ft(O){$t.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),$t.copy(O))}function Et(O){J.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),J.copy(O))}function Jt(O,mt){let j=c.get(mt);j===void 0&&(j=new WeakMap,c.set(mt,j));let it=j.get(O);it===void 0&&(it=i.getUniformBlockIndex(mt,O.name),j.set(O,it))}function Xt(O,mt){const it=c.get(mt).get(O);l.get(mt)!==it&&(i.uniformBlockBinding(mt,it,O.__bindingPointIndex),l.set(mt,it))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},lt=null,ft={},f={},u=new WeakMap,d=[],g=null,_=!1,p=null,m=null,w=null,v=null,M=null,A=null,E=null,b=new ot(0,0,0),S=0,y=!1,x=null,R=null,U=null,D=null,z=null,$t.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:ut,disable:Nt,bindFramebuffer:Bt,drawBuffers:qt,useProgram:we,setBlending:F,setMaterial:In,setFlipSided:jt,setCullFace:Kt,setLineWidth:It,setPolygonOffset:xe,setScissorTest:Pt,activeTexture:L,bindTexture:C,unbindTexture:X,compressedTexImage2D:nt,compressedTexImage3D:st,texImage2D:Tt,texImage3D:Ut,updateUBOMapping:Jt,uniformBlockBinding:Xt,texStorage2D:te,texStorage3D:ct,texSubImage2D:tt,texSubImage3D:Rt,compressedTexSubImage2D:xt,compressedTexSubImage3D:St,scissor:Ft,viewport:Et,reset:me}}function cM(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,C){return d?new OffscreenCanvas(L,C):ya("canvas")}function _(L,C,X){let nt=1;const st=Pt(L);if((st.width>X||st.height>X)&&(nt=X/Math.max(st.width,st.height)),nt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const tt=Math.floor(nt*st.width),Rt=Math.floor(nt*st.height);f===void 0&&(f=g(tt,Rt));const xt=C?g(tt,Rt):f;return xt.width=tt,xt.height=Rt,xt.getContext("2d").drawImage(L,0,0,tt,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+tt+"x"+Rt+")."),xt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),L;return L}function p(L){return L.generateMipmaps}function m(L){i.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(L,C,X,nt,st=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let tt=C;if(C===i.RED&&(X===i.FLOAT&&(tt=i.R32F),X===i.HALF_FLOAT&&(tt=i.R16F),X===i.UNSIGNED_BYTE&&(tt=i.R8)),C===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(tt=i.R8UI),X===i.UNSIGNED_SHORT&&(tt=i.R16UI),X===i.UNSIGNED_INT&&(tt=i.R32UI),X===i.BYTE&&(tt=i.R8I),X===i.SHORT&&(tt=i.R16I),X===i.INT&&(tt=i.R32I)),C===i.RG&&(X===i.FLOAT&&(tt=i.RG32F),X===i.HALF_FLOAT&&(tt=i.RG16F),X===i.UNSIGNED_BYTE&&(tt=i.RG8)),C===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(tt=i.RG8UI),X===i.UNSIGNED_SHORT&&(tt=i.RG16UI),X===i.UNSIGNED_INT&&(tt=i.RG32UI),X===i.BYTE&&(tt=i.RG8I),X===i.SHORT&&(tt=i.RG16I),X===i.INT&&(tt=i.RG32I)),C===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),X===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),X===i.UNSIGNED_INT&&(tt=i.RGB32UI),X===i.BYTE&&(tt=i.RGB8I),X===i.SHORT&&(tt=i.RGB16I),X===i.INT&&(tt=i.RGB32I)),C===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),X===i.UNSIGNED_INT&&(tt=i.RGBA32UI),X===i.BYTE&&(tt=i.RGBA8I),X===i.SHORT&&(tt=i.RGBA16I),X===i.INT&&(tt=i.RGBA32I)),C===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),C===i.RGBA){const Rt=st?va:oe.getTransfer(nt);X===i.FLOAT&&(tt=i.RGBA32F),X===i.HALF_FLOAT&&(tt=i.RGBA16F),X===i.UNSIGNED_BYTE&&(tt=Rt===fe?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function M(L,C){let X;return L?C===null||C===_s||C===po?X=i.DEPTH24_STENCIL8:C===ri?X=i.DEPTH32F_STENCIL8:C===ir&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===_s||C===po?X=i.DEPTH_COMPONENT24:C===ri?X=i.DEPTH_COMPONENT32F:C===ir&&(X=i.DEPTH_COMPONENT16),X}function A(L,C){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==Pn&&L.minFilter!==oi?Math.log2(Math.max(C.width,C.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?C.mipmaps.length:1}function E(L){const C=L.target;C.removeEventListener("dispose",E),S(C),C.isVideoTexture&&h.delete(C)}function b(L){const C=L.target;C.removeEventListener("dispose",b),x(C)}function S(L){const C=n.get(L);if(C.__webglInit===void 0)return;const X=L.source,nt=u.get(X);if(nt){const st=nt[C.__cacheKey];st.usedTimes--,st.usedTimes===0&&y(L),Object.keys(nt).length===0&&u.delete(X)}n.remove(L)}function y(L){const C=n.get(L);i.deleteTexture(C.__webglTexture);const X=L.source,nt=u.get(X);delete nt[C.__cacheKey],r.memory.textures--}function x(L){const C=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(C.__webglFramebuffer[nt]))for(let st=0;st<C.__webglFramebuffer[nt].length;st++)i.deleteFramebuffer(C.__webglFramebuffer[nt][st]);else i.deleteFramebuffer(C.__webglFramebuffer[nt]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[nt])}else{if(Array.isArray(C.__webglFramebuffer))for(let nt=0;nt<C.__webglFramebuffer.length;nt++)i.deleteFramebuffer(C.__webglFramebuffer[nt]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let nt=0;nt<C.__webglColorRenderbuffer.length;nt++)C.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[nt]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const X=L.textures;for(let nt=0,st=X.length;nt<st;nt++){const tt=n.get(X[nt]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),r.memory.textures--),n.remove(X[nt])}n.remove(L)}let R=0;function U(){R=0}function D(){const L=R;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),R+=1,L}function z(L){const C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.wrapR||0),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.colorSpace),C.join()}function H(L,C){const X=n.get(L);if(L.isVideoTexture&&It(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const nt=L.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(X,L,C);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+C)}function V(L,C){const X=n.get(L);if(L.version>0&&X.__version!==L.version){J(X,L,C);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+C)}function Z(L,C){const X=n.get(L);if(L.version>0&&X.__version!==L.version){J(X,L,C);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+C)}function W(L,C){const X=n.get(L);if(L.version>0&&X.__version!==L.version){at(X,L,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+C)}const lt={[_a]:i.REPEAT,[us]:i.CLAMP_TO_EDGE,[dl]:i.MIRRORED_REPEAT},ft={[Pn]:i.NEAREST,[d0]:i.NEAREST_MIPMAP_NEAREST,[vr]:i.NEAREST_MIPMAP_LINEAR,[oi]:i.LINEAR,[Ja]:i.LINEAR_MIPMAP_NEAREST,[fs]:i.LINEAR_MIPMAP_LINEAR},bt={[x0]:i.NEVER,[S0]:i.ALWAYS,[_0]:i.LESS,[sd]:i.LEQUAL,[v0]:i.EQUAL,[w0]:i.GEQUAL,[M0]:i.GREATER,[y0]:i.NOTEQUAL};function Ht(L,C){if(C.type===ri&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===oi||C.magFilter===Ja||C.magFilter===vr||C.magFilter===fs||C.minFilter===oi||C.minFilter===Ja||C.minFilter===vr||C.minFilter===fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,lt[C.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,lt[C.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,lt[C.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ft[C.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ft[C.minFilter]),C.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,bt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Pn||C.minFilter!==vr&&C.minFilter!==fs||C.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function $t(L,C){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",E));const nt=C.source;let st=u.get(nt);st===void 0&&(st={},u.set(nt,st));const tt=z(C);if(tt!==L.__cacheKey){st[tt]===void 0&&(st[tt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,X=!0),st[tt].usedTimes++;const Rt=st[L.__cacheKey];Rt!==void 0&&(st[L.__cacheKey].usedTimes--,Rt.usedTimes===0&&y(C)),L.__cacheKey=tt,L.__webglTexture=st[tt].texture}return X}function J(L,C,X){let nt=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(nt=i.TEXTURE_3D);const st=$t(L,C),tt=C.source;e.bindTexture(nt,L.__webglTexture,i.TEXTURE0+X);const Rt=n.get(tt);if(tt.version!==Rt.__version||st===!0){e.activeTexture(i.TEXTURE0+X);const xt=oe.getPrimaries(oe.workingColorSpace),St=C.colorSpace===ki?null:oe.getPrimaries(C.colorSpace),te=C.colorSpace===ki||xt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let ct=_(C.image,!1,s.maxTextureSize);ct=xe(C,ct);const Tt=o.convert(C.format,C.colorSpace),Ut=o.convert(C.type);let Ft=v(C.internalFormat,Tt,Ut,C.colorSpace,C.isVideoTexture);Ht(nt,C);let Et;const Jt=C.mipmaps,Xt=C.isVideoTexture!==!0,me=Rt.__version===void 0||st===!0,O=tt.dataReady,mt=A(C,ct);if(C.isDepthTexture)Ft=M(C.format===mo,C.type),me&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Ft,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Ft,ct.width,ct.height,0,Tt,Ut,null));else if(C.isDataTexture)if(Jt.length>0){Xt&&me&&e.texStorage2D(i.TEXTURE_2D,mt,Ft,Jt[0].width,Jt[0].height);for(let j=0,it=Jt.length;j<it;j++)Et=Jt[j],Xt?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Et.width,Et.height,Tt,Ut,Et.data):e.texImage2D(i.TEXTURE_2D,j,Ft,Et.width,Et.height,0,Tt,Ut,Et.data);C.generateMipmaps=!1}else Xt?(me&&e.texStorage2D(i.TEXTURE_2D,mt,Ft,ct.width,ct.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,Tt,Ut,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,ct.width,ct.height,0,Tt,Ut,ct.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Xt&&me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Ft,Jt[0].width,Jt[0].height,ct.depth);for(let j=0,it=Jt.length;j<it;j++)if(Et=Jt[j],C.format!==Zn)if(Tt!==null)if(Xt){if(O)if(C.layerUpdates.size>0){const vt=Yu(Et.width,Et.height,C.format,C.type);for(const _t of C.layerUpdates){const Vt=Et.data.subarray(_t*vt/Et.data.BYTES_PER_ELEMENT,(_t+1)*vt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,_t,Et.width,Et.height,1,Tt,Vt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Et.width,Et.height,ct.depth,Tt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Ft,Et.width,Et.height,ct.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Et.width,Et.height,ct.depth,Tt,Ut,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Ft,Et.width,Et.height,ct.depth,0,Tt,Ut,Et.data)}else{Xt&&me&&e.texStorage2D(i.TEXTURE_2D,mt,Ft,Jt[0].width,Jt[0].height);for(let j=0,it=Jt.length;j<it;j++)Et=Jt[j],C.format!==Zn?Tt!==null?Xt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Et.width,Et.height,Tt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Ft,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Et.width,Et.height,Tt,Ut,Et.data):e.texImage2D(i.TEXTURE_2D,j,Ft,Et.width,Et.height,0,Tt,Ut,Et.data)}else if(C.isDataArrayTexture)if(Xt){if(me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Ft,ct.width,ct.height,ct.depth),O)if(C.layerUpdates.size>0){const j=Yu(ct.width,ct.height,C.format,C.type);for(const it of C.layerUpdates){const vt=ct.data.subarray(it*j/ct.data.BYTES_PER_ELEMENT,(it+1)*j/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,ct.width,ct.height,1,Tt,Ut,vt)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Tt,Ut,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,ct.width,ct.height,ct.depth,0,Tt,Ut,ct.data);else if(C.isData3DTexture)Xt?(me&&e.texStorage3D(i.TEXTURE_3D,mt,Ft,ct.width,ct.height,ct.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Tt,Ut,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,ct.width,ct.height,ct.depth,0,Tt,Ut,ct.data);else if(C.isFramebufferTexture){if(me)if(Xt)e.texStorage2D(i.TEXTURE_2D,mt,Ft,ct.width,ct.height);else{let j=ct.width,it=ct.height;for(let vt=0;vt<mt;vt++)e.texImage2D(i.TEXTURE_2D,vt,Ft,j,it,0,Tt,Ut,null),j>>=1,it>>=1}}else if(Jt.length>0){if(Xt&&me){const j=Pt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,mt,Ft,j.width,j.height)}for(let j=0,it=Jt.length;j<it;j++)Et=Jt[j],Xt?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Tt,Ut,Et):e.texImage2D(i.TEXTURE_2D,j,Ft,Tt,Ut,Et);C.generateMipmaps=!1}else if(Xt){if(me){const j=Pt(ct);e.texStorage2D(i.TEXTURE_2D,mt,Ft,j.width,j.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Ut,ct)}else e.texImage2D(i.TEXTURE_2D,0,Ft,Tt,Ut,ct);p(C)&&m(nt),Rt.__version=tt.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function at(L,C,X){if(C.image.length!==6)return;const nt=$t(L,C),st=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+X);const tt=n.get(st);if(st.version!==tt.__version||nt===!0){e.activeTexture(i.TEXTURE0+X);const Rt=oe.getPrimaries(oe.workingColorSpace),xt=C.colorSpace===ki?null:oe.getPrimaries(C.colorSpace),St=C.colorSpace===ki||Rt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const te=C.isCompressedTexture||C.image[0].isCompressedTexture,ct=C.image[0]&&C.image[0].isDataTexture,Tt=[];for(let it=0;it<6;it++)!te&&!ct?Tt[it]=_(C.image[it],!0,s.maxCubemapSize):Tt[it]=ct?C.image[it].image:C.image[it],Tt[it]=xe(C,Tt[it]);const Ut=Tt[0],Ft=o.convert(C.format,C.colorSpace),Et=o.convert(C.type),Jt=v(C.internalFormat,Ft,Et,C.colorSpace),Xt=C.isVideoTexture!==!0,me=tt.__version===void 0||nt===!0,O=st.dataReady;let mt=A(C,Ut);Ht(i.TEXTURE_CUBE_MAP,C);let j;if(te){Xt&&me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Jt,Ut.width,Ut.height);for(let it=0;it<6;it++){j=Tt[it].mipmaps;for(let vt=0;vt<j.length;vt++){const _t=j[vt];C.format!==Zn?Ft!==null?Xt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,0,0,_t.width,_t.height,Ft,_t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,Jt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,0,0,_t.width,_t.height,Ft,Et,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,Jt,_t.width,_t.height,0,Ft,Et,_t.data)}}}else{if(j=C.mipmaps,Xt&&me){j.length>0&&mt++;const it=Pt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Jt,it.width,it.height)}for(let it=0;it<6;it++)if(ct){Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Tt[it].width,Tt[it].height,Ft,Et,Tt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Jt,Tt[it].width,Tt[it].height,0,Ft,Et,Tt[it].data);for(let vt=0;vt<j.length;vt++){const Vt=j[vt].image[it].image;Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,0,0,Vt.width,Vt.height,Ft,Et,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,Jt,Vt.width,Vt.height,0,Ft,Et,Vt.data)}}else{Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ft,Et,Tt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Jt,Ft,Et,Tt[it]);for(let vt=0;vt<j.length;vt++){const _t=j[vt];Xt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,0,0,Ft,Et,_t.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,Jt,Ft,Et,_t.image[it])}}}p(C)&&m(i.TEXTURE_CUBE_MAP),tt.__version=st.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function yt(L,C,X,nt,st,tt){const Rt=o.convert(X.format,X.colorSpace),xt=o.convert(X.type),St=v(X.internalFormat,Rt,xt,X.colorSpace),te=n.get(C),ct=n.get(X);if(ct.__renderTarget=C,!te.__hasExternalTextures){const Tt=Math.max(1,C.width>>tt),Ut=Math.max(1,C.height>>tt);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,tt,St,Tt,Ut,C.depth,0,Rt,xt,null):e.texImage2D(st,tt,St,Tt,Ut,0,Rt,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),Kt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,st,ct.__webglTexture,0,jt(C)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,st,ct.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(L,C,X){if(i.bindRenderbuffer(i.RENDERBUFFER,L),C.depthBuffer){const nt=C.depthTexture,st=nt&&nt.isDepthTexture?nt.type:null,tt=M(C.stencilBuffer,st),Rt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=jt(C);Kt(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,tt,C.width,C.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,tt,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,tt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,L)}else{const nt=C.textures;for(let st=0;st<nt.length;st++){const tt=nt[st],Rt=o.convert(tt.format,tt.colorSpace),xt=o.convert(tt.type),St=v(tt.internalFormat,Rt,xt,tt.colorSpace),te=jt(C);X&&Kt(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,St,C.width,C.height):Kt(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,St,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,St,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(L,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=n.get(C.depthTexture);nt.__renderTarget=C,(!nt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),H(C.depthTexture,0);const st=nt.__webglTexture,tt=jt(C);if(C.depthTexture.format===eo)Kt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(C.depthTexture.format===mo)Kt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Bt(L){const C=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==L.depthTexture){const nt=L.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),nt){const st=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,nt.removeEventListener("dispose",st)};nt.addEventListener("dispose",st),C.__depthDisposeCallback=st}C.__boundDepthTexture=nt}if(L.depthTexture&&!C.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Nt(C.__webglFramebuffer,L)}else if(X){C.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[nt]),C.__webglDepthbuffer[nt]===void 0)C.__webglDepthbuffer[nt]=i.createRenderbuffer(),ut(C.__webglDepthbuffer[nt],L,!1);else{const st=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=C.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),ut(C.__webglDepthbuffer,L,!1);else{const nt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(L,C,X){const nt=n.get(L);C!==void 0&&yt(nt.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Bt(L)}function we(L){const C=L.texture,X=n.get(L),nt=n.get(C);L.addEventListener("dispose",b);const st=L.textures,tt=L.isWebGLCubeRenderTarget===!0,Rt=st.length>1;if(Rt||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=C.version,r.memory.textures++),tt){X.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer[xt]=[];for(let St=0;St<C.mipmaps.length;St++)X.__webglFramebuffer[xt][St]=i.createFramebuffer()}else X.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer=[];for(let xt=0;xt<C.mipmaps.length;xt++)X.__webglFramebuffer[xt]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let xt=0,St=st.length;xt<St;xt++){const te=n.get(st[xt]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),r.memory.textures++)}if(L.samples>0&&Kt(L)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let xt=0;xt<st.length;xt++){const St=st[xt];X.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[xt]);const te=o.convert(St.format,St.colorSpace),ct=o.convert(St.type),Tt=v(St.internalFormat,te,ct,St.colorSpace,L.isXRRenderTarget===!0),Ut=jt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,Tt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,X.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(X.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,C);for(let xt=0;xt<6;xt++)if(C.mipmaps&&C.mipmaps.length>0)for(let St=0;St<C.mipmaps.length;St++)yt(X.__webglFramebuffer[xt][St],L,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,St);else yt(X.__webglFramebuffer[xt],L,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);p(C)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let xt=0,St=st.length;xt<St;xt++){const te=st[xt],ct=n.get(te);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),Ht(i.TEXTURE_2D,te),yt(X.__webglFramebuffer,L,te,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),p(te)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(xt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,nt.__webglTexture),Ht(xt,C),C.mipmaps&&C.mipmaps.length>0)for(let St=0;St<C.mipmaps.length;St++)yt(X.__webglFramebuffer[St],L,C,i.COLOR_ATTACHMENT0,xt,St);else yt(X.__webglFramebuffer,L,C,i.COLOR_ATTACHMENT0,xt,0);p(C)&&m(xt),e.unbindTexture()}L.depthBuffer&&Bt(L)}function Qt(L){const C=L.textures;for(let X=0,nt=C.length;X<nt;X++){const st=C[X];if(p(st)){const tt=w(L),Rt=n.get(st).__webglTexture;e.bindTexture(tt,Rt),m(tt),e.unbindTexture()}}}const Re=[],F=[];function In(L){if(L.samples>0){if(Kt(L)===!1){const C=L.textures,X=L.width,nt=L.height;let st=i.COLOR_BUFFER_BIT;const tt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(L),xt=C.length>1;if(xt)for(let St=0;St<C.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let St=0;St<C.length;St++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[St]);const te=n.get(C[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,X,nt,0,0,X,nt,st,i.NEAREST),l===!0&&(Re.length=0,F.length=0,Re.push(i.COLOR_ATTACHMENT0+St),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Re.push(tt),F.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let St=0;St<C.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[St]);const te=n.get(C[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const C=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function jt(L){return Math.min(s.maxSamples,L.samples)}function Kt(L){const C=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function It(L){const C=r.render.frame;h.get(L)!==C&&(h.set(L,C),L.update())}function xe(L,C){const X=L.colorSpace,nt=L.format,st=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==go&&X!==ki&&(oe.getTransfer(X)===fe?(nt!==Zn||st!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),C}function Pt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=U,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=qt,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=In,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Kt}function lM(i,t){function e(n,s=ki){let o;const r=oe.getTransfer(s);if(n===Ai)return i.UNSIGNED_BYTE;if(n===Eh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ah)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zf)return i.BYTE;if(n===$f)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===Th)return i.INT;if(n===_s)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===bi)return i.HALF_FLOAT;if(n===Kf)return i.ALPHA;if(n===Jf)return i.RGB;if(n===Zn)return i.RGBA;if(n===Qf)return i.LUMINANCE;if(n===td)return i.LUMINANCE_ALPHA;if(n===eo)return i.DEPTH_COMPONENT;if(n===mo)return i.DEPTH_STENCIL;if(n===Rh)return i.RED;if(n===Ch)return i.RED_INTEGER;if(n===ed)return i.RG;if(n===Ph)return i.RG_INTEGER;if(n===Ih)return i.RGBA_INTEGER;if(n===sa||n===oa||n===ra||n===aa)if(r===fe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===sa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===aa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===sa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===aa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pl||n===ml||n===gl||n===xl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===pl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ml)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_l||n===vl||n===Ml)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===_l||n===vl)return r===fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ml)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yl||n===wl||n===Sl||n===bl||n===Tl||n===El||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Ul)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===yl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===El)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Al)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Il)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ll)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ul)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ca||n===Nl||n===zl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===ca)return r===fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nd||n===Fl||n===Ol||n===Bl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===ca)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Fl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ol)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===po?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const hM={type:"move"};class Dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const uM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fM=`
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

}`;class dM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new je,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Mn({vertexShader:uM,fragmentShader:fM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new I(new Me(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pM extends wo{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null;const _=new dM,p=e.getContextAttributes();let m=null,w=null;const v=[],M=[],A=new dt;let E=null;const b=new An;b.viewport=new de;const S=new An;S.viewport=new de;const y=[b,S],x=new Nm;let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let at=v[J];return at===void 0&&(at=new Dc,v[J]=at),at.getTargetRaySpace()},this.getControllerGrip=function(J){let at=v[J];return at===void 0&&(at=new Dc,v[J]=at),at.getGripSpace()},this.getHand=function(J){let at=v[J];return at===void 0&&(at=new Dc,v[J]=at),at.getHandSpace()};function D(J){const at=M.indexOf(J.inputSource);if(at===-1)return;const yt=v[at];yt!==void 0&&(yt.update(J.inputSource,J.frame,c||r),yt.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",H);for(let J=0;J<v.length;J++){const at=M[J];at!==null&&(M[J]=null,v[J].disconnect(at))}R=null,U=null,_.reset(),t.setRenderTarget(m),d=null,u=null,f=null,s=null,w=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",z),s.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let yt=null,ut=null,Nt=null;p.depth&&(Nt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=p.stencil?mo:eo,ut=p.stencil?po:_s);const Bt={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:o};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(Bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),w=new $n(u.textureWidth,u.textureHeight,{format:Zn,type:Ai,depthTexture:new xd(u.textureWidth,u.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}else{const yt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new $n(d.framebufferWidth,d.framebufferHeight,{format:Zn,type:Ai,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(J){for(let at=0;at<J.removed.length;at++){const yt=J.removed[at],ut=M.indexOf(yt);ut>=0&&(M[ut]=null,v[ut].disconnect(yt))}for(let at=0;at<J.added.length;at++){const yt=J.added[at];let ut=M.indexOf(yt);if(ut===-1){for(let Bt=0;Bt<v.length;Bt++)if(Bt>=M.length){M.push(yt),ut=Bt;break}else if(M[Bt]===null){M[Bt]=yt,ut=Bt;break}if(ut===-1)break}const Nt=v[ut];Nt&&Nt.connect(yt)}}const V=new N,Z=new N;function W(J,at,yt){V.setFromMatrixPosition(at.matrixWorld),Z.setFromMatrixPosition(yt.matrixWorld);const ut=V.distanceTo(Z),Nt=at.projectionMatrix.elements,Bt=yt.projectionMatrix.elements,qt=Nt[14]/(Nt[10]-1),we=Nt[14]/(Nt[10]+1),Qt=(Nt[9]+1)/Nt[5],Re=(Nt[9]-1)/Nt[5],F=(Nt[8]-1)/Nt[0],In=(Bt[8]+1)/Bt[0],jt=qt*F,Kt=qt*In,It=ut/(-F+In),xe=It*-F;if(at.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(xe),J.translateZ(It),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Nt[10]===-1)J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Pt=qt+It,L=we+It,C=jt-xe,X=Kt+(ut-xe),nt=Qt*we/L*Pt,st=Re*we/L*Pt;J.projectionMatrix.makePerspective(C,X,nt,st,Pt,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function lt(J,at){at===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(at.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let at=J.near,yt=J.far;_.texture!==null&&(_.depthNear>0&&(at=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),x.near=S.near=b.near=at,x.far=S.far=b.far=yt,(R!==x.near||U!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,U=x.far),b.layers.mask=J.layers.mask|2,S.layers.mask=J.layers.mask|4,x.layers.mask=b.layers.mask|S.layers.mask;const ut=J.parent,Nt=x.cameras;lt(x,ut);for(let Bt=0;Bt<Nt.length;Bt++)lt(Nt[Bt],ut);Nt.length===2?W(x,b,S):x.projectionMatrix.copy(b.projectionMatrix),ft(J,x,ut)};function ft(J,at,yt){yt===null?J.matrix.copy(at.matrixWorld):(J.matrix.copy(yt.matrixWorld),J.matrix.invert(),J.matrix.multiply(at.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=kl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let bt=null;function Ht(J,at){if(h=at.getViewerPose(c||r),g=at,h!==null){const yt=h.views;d!==null&&(t.setRenderTargetFramebuffer(w,d.framebuffer),t.setRenderTarget(w));let ut=!1;yt.length!==x.cameras.length&&(x.cameras.length=0,ut=!0);for(let Bt=0;Bt<yt.length;Bt++){const qt=yt[Bt];let we=null;if(d!==null)we=d.getViewport(qt);else{const Re=f.getViewSubImage(u,qt);we=Re.viewport,Bt===0&&(t.setRenderTargetTextures(w,Re.colorTexture,u.ignoreDepthValues?void 0:Re.depthStencilTexture),t.setRenderTarget(w))}let Qt=y[Bt];Qt===void 0&&(Qt=new An,Qt.layers.enable(Bt),Qt.viewport=new de,y[Bt]=Qt),Qt.matrix.fromArray(qt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(qt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(we.x,we.y,we.width,we.height),Bt===0&&(x.matrix.copy(Qt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ut===!0&&x.cameras.push(Qt)}const Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Bt=f.getDepthInformation(yt[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,s.renderState)}}for(let yt=0;yt<v.length;yt++){const ut=M[yt],Nt=v[yt];ut!==null&&Nt!==void 0&&Nt.update(ut,at,c||r)}bt&&bt(J,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const $t=new Cd;$t.setAnimationLoop(Ht),this.setAnimationLoop=function(J){bt=J},this.dispose=function(){}}}const Qi=new ci,mM=new ue;function gM(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,fd(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,w,v,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(p,m):m.isMeshToonMaterial?(o(p,m),f(p,m)):m.isMeshPhongMaterial?(o(p,m),h(p,m)):m.isMeshStandardMaterial?(o(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(o(p,m),g(p,m)):m.isMeshDepthMaterial?o(p,m):m.isMeshDistanceMaterial?(o(p,m),_(p,m)):m.isMeshNormalMaterial?o(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,w,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ln&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ln&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const w=t.get(m),v=w.envMap,M=w.envMapRotation;v&&(p.envMap.value=v,Qi.copy(M),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),p.envMapRotation.value.setFromMatrix4(mM.makeRotationFromEuler(Qi)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,w,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*w,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,w){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ln&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const w=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xM(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,v){const M=v.program;n.uniformBlockBinding(w,M)}function c(w,v){let M=s[w.id];M===void 0&&(g(w),M=h(w),s[w.id]=M,w.addEventListener("dispose",p));const A=v.program;n.updateUBOMapping(w,A);const E=t.render.frame;o[w.id]!==E&&(u(w),o[w.id]=E)}function h(w){const v=f();w.__bindingPointIndex=v;const M=i.createBuffer(),A=w.__size,E=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function f(){for(let w=0;w<a;w++)if(r.indexOf(w)===-1)return r.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const v=s[w.id],M=w.uniforms,A=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,b=M.length;E<b;E++){const S=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,x=S.length;y<x;y++){const R=S[y];if(d(R,E,y,A)===!0){const U=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let H=0;H<D.length;H++){const V=D[H],Z=_(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,U+z,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,z),z+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(w,v,M,A){const E=w.value,b=v+"_"+M;if(A[b]===void 0)return typeof E=="number"||typeof E=="boolean"?A[b]=E:A[b]=E.clone(),!0;{const S=A[b];if(typeof E=="number"||typeof E=="boolean"){if(S!==E)return A[b]=E,!0}else if(S.equals(E)===!1)return S.copy(E),!0}return!1}function g(w){const v=w.uniforms;let M=0;const A=16;for(let b=0,S=v.length;b<S;b++){const y=Array.isArray(v[b])?v[b]:[v[b]];for(let x=0,R=y.length;x<R;x++){const U=y[x],D=Array.isArray(U.value)?U.value:[U.value];for(let z=0,H=D.length;z<H;z++){const V=D[z],Z=_(V),W=M%A,lt=W%Z.boundary,ft=W+lt;M+=lt,ft!==0&&A-ft<Z.storage&&(M+=A-ft),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=Z.storage}}}const E=M%A;return E>0&&(M+=A-E),w.__size=M,w.__cache={},this}function _(w){const v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function p(w){const v=w.target;v.removeEventListener("dispose",p);const M=r.indexOf(v.__bindingPointIndex);r.splice(M,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete o[v.id]}function m(){for(const w in s)i.deleteBuffer(s[w]);r=[],s={},o={}}return{bind:l,update:c,dispose:m}}class _M{constructor(t={}){const{canvas:e=T0(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,m=null;const w=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=Vi,this.toneMappingExposure=1;const M=this;let A=!1,E=0,b=0,S=null,y=-1,x=null;const R=new de,U=new de;let D=null;const z=new ot(0);let H=0,V=e.width,Z=e.height,W=1,lt=null,ft=null;const bt=new de(0,0,V,Z),Ht=new de(0,0,V,Z);let $t=!1;const J=new Uh;let at=!1,yt=!1;this.transmissionResolutionScale=1;const ut=new ue,Nt=new ue,Bt=new N,qt=new de,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function Re(){return S===null?W:1}let F=n;function In(P,k){return e.getContext(P,k)}try{const P={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bh}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),F===null){const k="webgl2";if(F=In(k,P),F===null)throw In(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let jt,Kt,It,xe,Pt,L,C,X,nt,st,tt,Rt,xt,St,te,ct,Tt,Ut,Ft,Et,Jt,Xt,me,O;function mt(){jt=new A_(F),jt.init(),Xt=new lM(F,jt),Kt=new y_(F,jt,t,Xt),It=new aM(F,jt),Kt.reverseDepthBuffer&&u&&It.buffers.depth.setReversed(!0),xe=new P_(F),Pt=new Zv,L=new cM(F,jt,It,Pt,Kt,Xt,xe),C=new S_(M),X=new E_(M),nt=new Fm(F),me=new v_(F,nt),st=new R_(F,nt,xe,me),tt=new L_(F,st,nt,xe),Ft=new I_(F,Kt,L),ct=new w_(Pt),Rt=new qv(M,C,X,jt,Kt,me,ct),xt=new gM(M,Pt),St=new jv,te=new nM(jt),Ut=new __(M,C,X,It,tt,d,l),Tt=new oM(M,tt,Kt),O=new xM(F,xe,Kt,It),Et=new M_(F,jt,xe),Jt=new C_(F,jt,xe),xe.programs=Rt.programs,M.capabilities=Kt,M.extensions=jt,M.properties=Pt,M.renderLists=St,M.shadowMap=Tt,M.state=It,M.info=xe}mt();const j=new pM(M,F);this.xr=j,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const P=jt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=jt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(P){P!==void 0&&(W=P,this.setSize(V,Z,!1))},this.getSize=function(P){return P.set(V,Z)},this.setSize=function(P,k,Y=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=P,Z=k,e.width=Math.floor(P*W),e.height=Math.floor(k*W),Y===!0&&(e.style.width=P+"px",e.style.height=k+"px"),this.setViewport(0,0,P,k)},this.getDrawingBufferSize=function(P){return P.set(V*W,Z*W).floor()},this.setDrawingBufferSize=function(P,k,Y){V=P,Z=k,W=Y,e.width=Math.floor(P*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,P,k)},this.getCurrentViewport=function(P){return P.copy(R)},this.getViewport=function(P){return P.copy(bt)},this.setViewport=function(P,k,Y,q){P.isVector4?bt.set(P.x,P.y,P.z,P.w):bt.set(P,k,Y,q),It.viewport(R.copy(bt).multiplyScalar(W).round())},this.getScissor=function(P){return P.copy(Ht)},this.setScissor=function(P,k,Y,q){P.isVector4?Ht.set(P.x,P.y,P.z,P.w):Ht.set(P,k,Y,q),It.scissor(U.copy(Ht).multiplyScalar(W).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(P){It.setScissorTest($t=P)},this.setOpaqueSort=function(P){lt=P},this.setTransparentSort=function(P){ft=P},this.getClearColor=function(P){return P.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(P=!0,k=!0,Y=!0){let q=0;if(P){let G=!1;if(S!==null){const rt=S.texture.format;G=rt===Ih||rt===Ph||rt===Ch}if(G){const rt=S.texture.type,gt=rt===Ai||rt===_s||rt===ir||rt===po||rt===Eh||rt===Ah,wt=Ut.getClearColor(),At=Ut.getClearAlpha(),Ot=wt.r,kt=wt.g,Lt=wt.b;gt?(g[0]=Ot,g[1]=kt,g[2]=Lt,g[3]=At,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=Ot,_[1]=kt,_[2]=Lt,_[3]=At,F.clearBufferiv(F.COLOR,0,_))}else q|=F.COLOR_BUFFER_BIT}k&&(q|=F.DEPTH_BUFFER_BIT),Y&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Ut.dispose(),St.dispose(),te.dispose(),Pt.dispose(),C.dispose(),X.dispose(),tt.dispose(),me.dispose(),O.dispose(),Rt.dispose(),j.dispose(),j.removeEventListener("sessionstart",tu),j.removeEventListener("sessionend",eu),Yi.stop()};function it(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=xe.autoReset,k=Tt.enabled,Y=Tt.autoUpdate,q=Tt.needsUpdate,G=Tt.type;mt(),xe.autoReset=P,Tt.enabled=k,Tt.autoUpdate=Y,Tt.needsUpdate=q,Tt.type=G}function _t(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Vt(P){const k=P.target;k.removeEventListener("dispose",Vt),Te(k)}function Te(P){Xe(P),Pt.remove(P)}function Xe(P){const k=Pt.get(P).programs;k!==void 0&&(k.forEach(function(Y){Rt.releaseProgram(Y)}),P.isShaderMaterial&&Rt.releaseShaderCache(P))}this.renderBufferDirect=function(P,k,Y,q,G,rt){k===null&&(k=we);const gt=G.isMesh&&G.matrixWorld.determinant()<0,wt=Dp(P,k,Y,q,G);It.setMaterial(q,gt);let At=Y.index,Ot=1;if(q.wireframe===!0){if(At=st.getWireframeAttribute(Y),At===void 0)return;Ot=2}const kt=Y.drawRange,Lt=Y.attributes.position;let ee=kt.start*Ot,re=(kt.start+kt.count)*Ot;rt!==null&&(ee=Math.max(ee,rt.start*Ot),re=Math.min(re,(rt.start+rt.count)*Ot)),At!==null?(ee=Math.max(ee,0),re=Math.min(re,At.count)):Lt!=null&&(ee=Math.max(ee,0),re=Math.min(re,Lt.count));const Ce=re-ee;if(Ce<0||Ce===1/0)return;me.setup(G,q,wt,Y,At);let Ee,se=Et;if(At!==null&&(Ee=nt.get(At),se=Jt,se.setIndex(Ee)),G.isMesh)q.wireframe===!0?(It.setLineWidth(q.wireframeLinewidth*Re()),se.setMode(F.LINES)):se.setMode(F.TRIANGLES);else if(G.isLine){let Dt=q.linewidth;Dt===void 0&&(Dt=1),It.setLineWidth(Dt*Re()),G.isLineSegments?se.setMode(F.LINES):G.isLineLoop?se.setMode(F.LINE_LOOP):se.setMode(F.LINE_STRIP)}else G.isPoints?se.setMode(F.POINTS):G.isSprite&&se.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)se.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))se.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Dt=G._multiDrawStarts,Ge=G._multiDrawCounts,ae=G._multiDrawCount,Hn=At?nt.get(At).bytesPerElement:1,Rs=Pt.get(q).currentProgram.getUniforms();for(let Sn=0;Sn<ae;Sn++)Rs.setValue(F,"_gl_DrawID",Sn),se.render(Dt[Sn]/Hn,Ge[Sn])}else if(G.isInstancedMesh)se.renderInstances(ee,Ce,G.count);else if(Y.isInstancedBufferGeometry){const Dt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ge=Math.min(Y.instanceCount,Dt);se.renderInstances(ee,Ce,Ge)}else se.render(ee,Ce)};function le(P,k,Y){P.transparent===!0&&P.side===zt&&P.forceSinglePass===!1?(P.side=ln,P.needsUpdate=!0,_r(P,k,Y),P.side=Xi,P.needsUpdate=!0,_r(P,k,Y),P.side=zt):_r(P,k,Y)}this.compile=function(P,k,Y=null){Y===null&&(Y=P),m=te.get(Y),m.init(k),v.push(m),Y.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),P!==Y&&P.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const q=new Set;return P.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const rt=G.material;if(rt)if(Array.isArray(rt))for(let gt=0;gt<rt.length;gt++){const wt=rt[gt];le(wt,Y,G),q.add(wt)}else le(rt,Y,G),q.add(rt)}),v.pop(),m=null,q},this.compileAsync=function(P,k,Y=null){const q=this.compile(P,k,Y);return new Promise(G=>{function rt(){if(q.forEach(function(gt){Pt.get(gt).currentProgram.isReady()&&q.delete(gt)}),q.size===0){G(P);return}setTimeout(rt,10)}jt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Gn=null;function ui(P){Gn&&Gn(P)}function tu(){Yi.stop()}function eu(){Yi.start()}const Yi=new Cd;Yi.setAnimationLoop(ui),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(P){Gn=P,j.setAnimationLoop(P),P===null?Yi.stop():Yi.start()},j.addEventListener("sessionstart",tu),j.addEventListener("sessionend",eu),this.render=function(P,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(k),k=j.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,k,S),m=te.get(P,v.length),m.init(k),v.push(m),Nt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),J.setFromProjectionMatrix(Nt),yt=this.localClippingEnabled,at=ct.init(this.clippingPlanes,yt),p=St.get(P,w.length),p.init(),w.push(p),j.enabled===!0&&j.isPresenting===!0){const rt=M.xr.getDepthSensingMesh();rt!==null&&ja(rt,k,-1/0,M.sortObjects)}ja(P,k,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(lt,ft),Qt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Qt&&Ut.addToRenderList(p,P),this.info.render.frame++,at===!0&&ct.beginShadows();const Y=m.state.shadowsArray;Tt.render(Y,P,k),at===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=p.opaque,G=p.transmissive;if(m.setupLights(),k.isArrayCamera){const rt=k.cameras;if(G.length>0)for(let gt=0,wt=rt.length;gt<wt;gt++){const At=rt[gt];iu(q,G,P,At)}Qt&&Ut.render(P);for(let gt=0,wt=rt.length;gt<wt;gt++){const At=rt[gt];nu(p,P,At,At.viewport)}}else G.length>0&&iu(q,G,P,k),Qt&&Ut.render(P),nu(p,P,k);S!==null&&b===0&&(L.updateMultisampleRenderTarget(S),L.updateRenderTargetMipmap(S)),P.isScene===!0&&P.onAfterRender(M,P,k),me.resetDefaultState(),y=-1,x=null,v.pop(),v.length>0?(m=v[v.length-1],at===!0&&ct.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function ja(P,k,Y,q){if(P.visible===!1)return;if(P.layers.test(k.layers)){if(P.isGroup)Y=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(k);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||J.intersectsSprite(P)){q&&qt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Nt);const gt=tt.update(P),wt=P.material;wt.visible&&p.push(P,gt,wt,Y,qt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||J.intersectsObject(P))){const gt=tt.update(P),wt=P.material;if(q&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),qt.copy(P.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),qt.copy(gt.boundingSphere.center)),qt.applyMatrix4(P.matrixWorld).applyMatrix4(Nt)),Array.isArray(wt)){const At=gt.groups;for(let Ot=0,kt=At.length;Ot<kt;Ot++){const Lt=At[Ot],ee=wt[Lt.materialIndex];ee&&ee.visible&&p.push(P,gt,ee,Y,qt.z,Lt)}}else wt.visible&&p.push(P,gt,wt,Y,qt.z,null)}}const rt=P.children;for(let gt=0,wt=rt.length;gt<wt;gt++)ja(rt[gt],k,Y,q)}function nu(P,k,Y,q){const G=P.opaque,rt=P.transmissive,gt=P.transparent;m.setupLightsView(Y),at===!0&&ct.setGlobalState(M.clippingPlanes,Y),q&&It.viewport(R.copy(q)),G.length>0&&xr(G,k,Y),rt.length>0&&xr(rt,k,Y),gt.length>0&&xr(gt,k,Y),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function iu(P,k,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new $n(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?bi:Ai,minFilter:fs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const rt=m.state.transmissionRenderTarget[q.id],gt=q.viewport||R;rt.setSize(gt.z*M.transmissionResolutionScale,gt.w*M.transmissionResolutionScale);const wt=M.getRenderTarget();M.setRenderTarget(rt),M.getClearColor(z),H=M.getClearAlpha(),H<1&&M.setClearColor(16777215,.5),M.clear(),Qt&&Ut.render(Y);const At=M.toneMapping;M.toneMapping=Vi;const Ot=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),at===!0&&ct.setGlobalState(M.clippingPlanes,q),xr(P,Y,q),L.updateMultisampleRenderTarget(rt),L.updateRenderTargetMipmap(rt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Lt=0,ee=k.length;Lt<ee;Lt++){const re=k[Lt],Ce=re.object,Ee=re.geometry,se=re.material,Dt=re.group;if(se.side===zt&&Ce.layers.test(q.layers)){const Ge=se.side;se.side=ln,se.needsUpdate=!0,su(Ce,Y,q,Ee,se,Dt),se.side=Ge,se.needsUpdate=!0,kt=!0}}kt===!0&&(L.updateMultisampleRenderTarget(rt),L.updateRenderTargetMipmap(rt))}M.setRenderTarget(wt),M.setClearColor(z,H),Ot!==void 0&&(q.viewport=Ot),M.toneMapping=At}function xr(P,k,Y){const q=k.isScene===!0?k.overrideMaterial:null;for(let G=0,rt=P.length;G<rt;G++){const gt=P[G],wt=gt.object,At=gt.geometry,Ot=q===null?gt.material:q,kt=gt.group;wt.layers.test(Y.layers)&&su(wt,k,Y,At,Ot,kt)}}function su(P,k,Y,q,G,rt){P.onBeforeRender(M,k,Y,q,G,rt),P.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),G.onBeforeRender(M,k,Y,q,P,rt),G.transparent===!0&&G.side===zt&&G.forceSinglePass===!1?(G.side=ln,G.needsUpdate=!0,M.renderBufferDirect(Y,k,q,G,P,rt),G.side=Xi,G.needsUpdate=!0,M.renderBufferDirect(Y,k,q,G,P,rt),G.side=zt):M.renderBufferDirect(Y,k,q,G,P,rt),P.onAfterRender(M,k,Y,q,G,rt)}function _r(P,k,Y){k.isScene!==!0&&(k=we);const q=Pt.get(P),G=m.state.lights,rt=m.state.shadowsArray,gt=G.state.version,wt=Rt.getParameters(P,G.state,rt,k,Y),At=Rt.getProgramCacheKey(wt);let Ot=q.programs;q.environment=P.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(P.isMeshStandardMaterial?X:C).get(P.envMap||q.environment),q.envMapRotation=q.environment!==null&&P.envMap===null?k.environmentRotation:P.envMapRotation,Ot===void 0&&(P.addEventListener("dispose",Vt),Ot=new Map,q.programs=Ot);let kt=Ot.get(At);if(kt!==void 0){if(q.currentProgram===kt&&q.lightsStateVersion===gt)return ru(P,wt),kt}else wt.uniforms=Rt.getUniforms(P),P.onBeforeCompile(wt,M),kt=Rt.acquireProgram(wt,At),Ot.set(At,kt),q.uniforms=wt.uniforms;const Lt=q.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Lt.clippingPlanes=ct.uniform),ru(P,wt),q.needsLights=Np(P),q.lightsStateVersion=gt,q.needsLights&&(Lt.ambientLightColor.value=G.state.ambient,Lt.lightProbe.value=G.state.probe,Lt.directionalLights.value=G.state.directional,Lt.directionalLightShadows.value=G.state.directionalShadow,Lt.spotLights.value=G.state.spot,Lt.spotLightShadows.value=G.state.spotShadow,Lt.rectAreaLights.value=G.state.rectArea,Lt.ltc_1.value=G.state.rectAreaLTC1,Lt.ltc_2.value=G.state.rectAreaLTC2,Lt.pointLights.value=G.state.point,Lt.pointLightShadows.value=G.state.pointShadow,Lt.hemisphereLights.value=G.state.hemi,Lt.directionalShadowMap.value=G.state.directionalShadowMap,Lt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Lt.spotShadowMap.value=G.state.spotShadowMap,Lt.spotLightMatrix.value=G.state.spotLightMatrix,Lt.spotLightMap.value=G.state.spotLightMap,Lt.pointShadowMap.value=G.state.pointShadowMap,Lt.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=kt,q.uniformsList=null,kt}function ou(P){if(P.uniformsList===null){const k=P.currentProgram.getUniforms();P.uniformsList=la.seqWithValue(k.seq,P.uniforms)}return P.uniformsList}function ru(P,k){const Y=Pt.get(P);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Dp(P,k,Y,q,G){k.isScene!==!0&&(k=we),L.resetTextureUnits();const rt=k.fog,gt=q.isMeshStandardMaterial?k.environment:null,wt=S===null?M.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:go,At=(q.isMeshStandardMaterial?X:C).get(q.envMap||gt),Ot=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,kt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Lt=!!Y.morphAttributes.position,ee=!!Y.morphAttributes.normal,re=!!Y.morphAttributes.color;let Ce=Vi;q.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Ce=M.toneMapping);const Ee=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,se=Ee!==void 0?Ee.length:0,Dt=Pt.get(q),Ge=m.state.lights;if(at===!0&&(yt===!0||P!==x)){const Je=P===x&&q.id===y;ct.setState(q,P,Je)}let ae=!1;q.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Ge.state.version||Dt.outputColorSpace!==wt||G.isBatchedMesh&&Dt.batching===!1||!G.isBatchedMesh&&Dt.batching===!0||G.isBatchedMesh&&Dt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Dt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Dt.instancing===!1||!G.isInstancedMesh&&Dt.instancing===!0||G.isSkinnedMesh&&Dt.skinning===!1||!G.isSkinnedMesh&&Dt.skinning===!0||G.isInstancedMesh&&Dt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Dt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Dt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Dt.instancingMorph===!1&&G.morphTexture!==null||Dt.envMap!==At||q.fog===!0&&Dt.fog!==rt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==ct.numPlanes||Dt.numIntersection!==ct.numIntersection)||Dt.vertexAlphas!==Ot||Dt.vertexTangents!==kt||Dt.morphTargets!==Lt||Dt.morphNormals!==ee||Dt.morphColors!==re||Dt.toneMapping!==Ce||Dt.morphTargetsCount!==se)&&(ae=!0):(ae=!0,Dt.__version=q.version);let Hn=Dt.currentProgram;ae===!0&&(Hn=_r(q,k,G));let Rs=!1,Sn=!1,To=!1;const ve=Hn.getUniforms(),Ln=Dt.uniforms;if(It.useProgram(Hn.program)&&(Rs=!0,Sn=!0,To=!0),q.id!==y&&(y=q.id,Sn=!0),Rs||x!==P){It.buffers.depth.getReversed()?(ut.copy(P.projectionMatrix),A0(ut),R0(ut),ve.setValue(F,"projectionMatrix",ut)):ve.setValue(F,"projectionMatrix",P.projectionMatrix),ve.setValue(F,"viewMatrix",P.matrixWorldInverse);const hn=ve.map.cameraPosition;hn!==void 0&&hn.setValue(F,Bt.setFromMatrixPosition(P.matrixWorld)),Kt.logarithmicDepthBuffer&&ve.setValue(F,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ve.setValue(F,"isOrthographic",P.isOrthographicCamera===!0),x!==P&&(x=P,Sn=!0,To=!0)}if(G.isSkinnedMesh){ve.setOptional(F,G,"bindMatrix"),ve.setOptional(F,G,"bindMatrixInverse");const Je=G.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),ve.setValue(F,"boneTexture",Je.boneTexture,L))}G.isBatchedMesh&&(ve.setOptional(F,G,"batchingTexture"),ve.setValue(F,"batchingTexture",G._matricesTexture,L),ve.setOptional(F,G,"batchingIdTexture"),ve.setValue(F,"batchingIdTexture",G._indirectTexture,L),ve.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&ve.setValue(F,"batchingColorTexture",G._colorsTexture,L));const Dn=Y.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Ft.update(G,Y,Hn),(Sn||Dt.receiveShadow!==G.receiveShadow)&&(Dt.receiveShadow=G.receiveShadow,ve.setValue(F,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ln.envMap.value=At,Ln.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(Ln.envMapIntensity.value=k.environmentIntensity),Sn&&(ve.setValue(F,"toneMappingExposure",M.toneMappingExposure),Dt.needsLights&&Up(Ln,To),rt&&q.fog===!0&&xt.refreshFogUniforms(Ln,rt),xt.refreshMaterialUniforms(Ln,q,W,Z,m.state.transmissionRenderTarget[P.id]),la.upload(F,ou(Dt),Ln,L)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(la.upload(F,ou(Dt),Ln,L),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ve.setValue(F,"center",G.center),ve.setValue(F,"modelViewMatrix",G.modelViewMatrix),ve.setValue(F,"normalMatrix",G.normalMatrix),ve.setValue(F,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Je=q.uniformsGroups;for(let hn=0,Ka=Je.length;hn<Ka;hn++){const qi=Je[hn];O.update(qi,Hn),O.bind(qi,Hn)}}return Hn}function Up(P,k){P.ambientLightColor.needsUpdate=k,P.lightProbe.needsUpdate=k,P.directionalLights.needsUpdate=k,P.directionalLightShadows.needsUpdate=k,P.pointLights.needsUpdate=k,P.pointLightShadows.needsUpdate=k,P.spotLights.needsUpdate=k,P.spotLightShadows.needsUpdate=k,P.rectAreaLights.needsUpdate=k,P.hemisphereLights.needsUpdate=k}function Np(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(P,k,Y){Pt.get(P.texture).__webglTexture=k,Pt.get(P.depthTexture).__webglTexture=Y;const q=Pt.get(P);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=Y===void 0,q.__autoAllocateDepthBuffer||jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,k){const Y=Pt.get(P);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};const zp=F.createFramebuffer();this.setRenderTarget=function(P,k=0,Y=0){S=P,E=k,b=Y;let q=!0,G=null,rt=!1,gt=!1;if(P){const At=Pt.get(P);if(At.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(F.FRAMEBUFFER,null),q=!1;else if(At.__webglFramebuffer===void 0)L.setupRenderTarget(P);else if(At.__hasExternalTextures)L.rebindTextures(P,Pt.get(P.texture).__webglTexture,Pt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Lt=P.depthTexture;if(At.__boundDepthTexture!==Lt){if(Lt!==null&&Pt.has(Lt)&&(P.width!==Lt.image.width||P.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(P)}}const Ot=P.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(gt=!0);const kt=Pt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(kt[k])?G=kt[k][Y]:G=kt[k],rt=!0):P.samples>0&&L.useMultisampledRTT(P)===!1?G=Pt.get(P).__webglMultisampledFramebuffer:Array.isArray(kt)?G=kt[Y]:G=kt,R.copy(P.viewport),U.copy(P.scissor),D=P.scissorTest}else R.copy(bt).multiplyScalar(W).floor(),U.copy(Ht).multiplyScalar(W).floor(),D=$t;if(Y!==0&&(G=zp),It.bindFramebuffer(F.FRAMEBUFFER,G)&&q&&It.drawBuffers(P,G),It.viewport(R),It.scissor(U),It.setScissorTest(D),rt){const At=Pt.get(P.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,At.__webglTexture,Y)}else if(gt){const At=Pt.get(P.texture),Ot=k;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.__webglTexture,Y,Ot)}else if(P!==null&&Y!==0){const At=Pt.get(P.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,At.__webglTexture,Y)}y=-1},this.readRenderTargetPixels=function(P,k,Y,q,G,rt,gt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Pt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&gt!==void 0&&(wt=wt[gt]),wt){It.bindFramebuffer(F.FRAMEBUFFER,wt);try{const At=P.texture,Ot=At.format,kt=At.type;if(!Kt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=P.width-q&&Y>=0&&Y<=P.height-G&&F.readPixels(k,Y,q,G,Xt.convert(Ot),Xt.convert(kt),rt)}finally{const At=S!==null?Pt.get(S).__webglFramebuffer:null;It.bindFramebuffer(F.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(P,k,Y,q,G,rt,gt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Pt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&gt!==void 0&&(wt=wt[gt]),wt){const At=P.texture,Ot=At.format,kt=At.type;if(!Kt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=P.width-q&&Y>=0&&Y<=P.height-G){It.bindFramebuffer(F.FRAMEBUFFER,wt);const Lt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Lt),F.bufferData(F.PIXEL_PACK_BUFFER,rt.byteLength,F.STREAM_READ),F.readPixels(k,Y,q,G,Xt.convert(Ot),Xt.convert(kt),0);const ee=S!==null?Pt.get(S).__webglFramebuffer:null;It.bindFramebuffer(F.FRAMEBUFFER,ee);const re=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await E0(F,re,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Lt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,rt),F.deleteBuffer(Lt),F.deleteSync(re),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,k=null,Y=0){P.isTexture!==!0&&(qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,P=arguments[1]);const q=Math.pow(2,-Y),G=Math.floor(P.image.width*q),rt=Math.floor(P.image.height*q),gt=k!==null?k.x:0,wt=k!==null?k.y:0;L.setTexture2D(P,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,gt,wt,G,rt),It.unbindTexture()};const Fp=F.createFramebuffer(),Op=F.createFramebuffer();this.copyTextureToTexture=function(P,k,Y=null,q=null,G=0,rt=null){P.isTexture!==!0&&(qs("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,P=arguments[1],k=arguments[2],rt=arguments[3]||0,Y=null),rt===null&&(G!==0?(qs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),rt=G,G=0):rt=0);let gt,wt,At,Ot,kt,Lt,ee,re,Ce;const Ee=P.isCompressedTexture?P.mipmaps[rt]:P.image;if(Y!==null)gt=Y.max.x-Y.min.x,wt=Y.max.y-Y.min.y,At=Y.isBox3?Y.max.z-Y.min.z:1,Ot=Y.min.x,kt=Y.min.y,Lt=Y.isBox3?Y.min.z:0;else{const Dn=Math.pow(2,-G);gt=Math.floor(Ee.width*Dn),wt=Math.floor(Ee.height*Dn),P.isDataArrayTexture?At=Ee.depth:P.isData3DTexture?At=Math.floor(Ee.depth*Dn):At=1,Ot=0,kt=0,Lt=0}q!==null?(ee=q.x,re=q.y,Ce=q.z):(ee=0,re=0,Ce=0);const se=Xt.convert(k.format),Dt=Xt.convert(k.type);let Ge;k.isData3DTexture?(L.setTexture3D(k,0),Ge=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(L.setTexture2DArray(k,0),Ge=F.TEXTURE_2D_ARRAY):(L.setTexture2D(k,0),Ge=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const ae=F.getParameter(F.UNPACK_ROW_LENGTH),Hn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Rs=F.getParameter(F.UNPACK_SKIP_PIXELS),Sn=F.getParameter(F.UNPACK_SKIP_ROWS),To=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ee.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ee.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ot),F.pixelStorei(F.UNPACK_SKIP_ROWS,kt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Lt);const ve=P.isDataArrayTexture||P.isData3DTexture,Ln=k.isDataArrayTexture||k.isData3DTexture;if(P.isDepthTexture){const Dn=Pt.get(P),Je=Pt.get(k),hn=Pt.get(Dn.__renderTarget),Ka=Pt.get(Je.__renderTarget);It.bindFramebuffer(F.READ_FRAMEBUFFER,hn.__webglFramebuffer),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ka.__webglFramebuffer);for(let qi=0;qi<At;qi++)ve&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.get(P).__webglTexture,G,Lt+qi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.get(k).__webglTexture,rt,Ce+qi)),F.blitFramebuffer(Ot,kt,gt,wt,ee,re,gt,wt,F.DEPTH_BUFFER_BIT,F.NEAREST);It.bindFramebuffer(F.READ_FRAMEBUFFER,null),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||P.isRenderTargetTexture||Pt.has(P)){const Dn=Pt.get(P),Je=Pt.get(k);It.bindFramebuffer(F.READ_FRAMEBUFFER,Fp),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,Op);for(let hn=0;hn<At;hn++)ve?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dn.__webglTexture,G,Lt+hn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Dn.__webglTexture,G),Ln?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Je.__webglTexture,rt,Ce+hn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Je.__webglTexture,rt),G!==0?F.blitFramebuffer(Ot,kt,gt,wt,ee,re,gt,wt,F.COLOR_BUFFER_BIT,F.NEAREST):Ln?F.copyTexSubImage3D(Ge,rt,ee,re,Ce+hn,Ot,kt,gt,wt):F.copyTexSubImage2D(Ge,rt,ee,re,Ot,kt,gt,wt);It.bindFramebuffer(F.READ_FRAMEBUFFER,null),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ln?P.isDataTexture||P.isData3DTexture?F.texSubImage3D(Ge,rt,ee,re,Ce,gt,wt,At,se,Dt,Ee.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(Ge,rt,ee,re,Ce,gt,wt,At,se,Ee.data):F.texSubImage3D(Ge,rt,ee,re,Ce,gt,wt,At,se,Dt,Ee):P.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,rt,ee,re,gt,wt,se,Dt,Ee.data):P.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,rt,ee,re,Ee.width,Ee.height,se,Ee.data):F.texSubImage2D(F.TEXTURE_2D,rt,ee,re,gt,wt,se,Dt,Ee);F.pixelStorei(F.UNPACK_ROW_LENGTH,ae),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Hn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Rs),F.pixelStorei(F.UNPACK_SKIP_ROWS,Sn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,To),rt===0&&k.generateMipmaps&&F.generateMipmap(Ge),It.unbindTexture()},this.copyTextureToTexture3D=function(P,k,Y=null,q=null,G=0){return P.isTexture!==!0&&(qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,q=arguments[1]||null,P=arguments[2],k=arguments[3],G=arguments[4]||0),qs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,k,Y,q,G)},this.initRenderTarget=function(P){Pt.get(P).__webglFramebuffer===void 0&&L.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?L.setTextureCube(P,0):P.isData3DTexture?L.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?L.setTexture2DArray(P,0):L.setTexture2D(P,0),It.unbindTexture()},this.resetState=function(){E=0,b=0,S=null,It.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}const vM=15,MM=6,yM=1.8,Aa=8,_f=.85,vf=.98,Ra=.003,he=90,qa=1.7,wM=60,SM=45,bM=10,TM=6,EM=8,AM=4,RM=5,CM=55,PM=35,IM=30,LM=25,DM=60,Ud=3,UM=20,NM=5,zM=30,FM=40,OM=6,Wh=280,ql=2.5,BM=6,Mf=1.5,Zs=5,yf=2.5,Ws=12,_e=30,kM=5,GM=8,HM=2.2,B={fog:396308,ground:1720360,leaf:1722400,leafGlow:4521898,mushCap:8926190,mushGlow:13400063,mushStem:2756928,crystal:3407837,crystalCore:8978414,firefly:15662950,fireflyB:6750173,spore:12320665,ambient:2241365,moon:12307694,jellyBell:7833855,jellyGlow:11193599,jellyTent:6715340,puffBody:16768460,puffGlow:16755336,puffEye:2236962,puffCheek:16746649,deerBody:11202303,deerGlow:8969727,deerAntler:13434862,deerEye:1127236,mothWing:11206553,mothGlow:13434794,mothBody:5596723,mothSpot:16777215,grassTip:3385941,grassPurple:[1706530,2363962,4857960,11158766,13400063,16746717,2757952,6697898,11158783],grassBlue:[660514,858677,2114917,4500206,6741503,8974079,1387077,3368618,4500223],grassTeal:[662042,1059362,2121808,4517563,6750173,11206536,1720376,3385992,4521915],fern:1725744,fernGlow:3394662,flower:16742348,flowerGlow:16751069,flowerStem:1721376,reed:2774325,reedTip:4504422,orbGold:16763955,orbGlow:16772778,orbInner:16775389,laserPink:16737962,laserGlow:16746700,obeliskBlack:657938,obeliskPink:16729258,moatBlue:3377356,rainbow:[16724787,16746547,16772659,3407718,3377407,8926207],wispCore:11202303,wispGlow:14544639,wispTrail:8965375,dandStem:4482611,dandHead:16777198,dandSeed:16775389,dandSeedGlow:16777215,fairyMush:13404415,fairyGlow:14527231,fairyRing:11167470,bubbleIris:11197951,bubbleShine:16777215,bubblePop:13434862,starMote:16772829,pondWater:2254506,pondGlow:3377356,lilyPad:2263108,lilyFlower:16746700,lilyGlow:16755421,echoBloom:11206604,rockBase:2763314,rockMoss:1721378,rockLight:3816005,skyDeep:198160},Ke=new _M({antialias:!0,powerPreference:"default"});Ke.setSize(window.innerWidth,window.innerHeight);Ke.setPixelRatio(Math.min(window.devicePixelRatio,2));Ke.shadowMap.enabled=!0;Ke.shadowMap.type=Wf;Ke.toneMapping=Yf;Ke.toneMappingExposure=2.8;Ke.outputColorSpace=cn;document.body.appendChild(Ke.domElement);const an=new An(65,window.innerWidth/window.innerHeight,.1,300),Nd=new Rd,ht=new j0;ht.background=new ot(B.skyDeep);ht.fog=new Dh(B.fog,.01);window.addEventListener("resize",()=>{an.aspect=window.innerWidth/window.innerHeight,an.updateProjectionMatrix(),Ke.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("visibilitychange",()=>{document.hidden||Nd.getDelta()});const zd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class dr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const VM=new Hh(-1,1,1,-1,0,1);class WM extends ye{constructor(){super(),this.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Gt([0,2,0,0,2,0],2))}}const XM=new WM;class Fd{constructor(t){this._mesh=new I(XM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,VM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class YM extends dr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Mn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=wa.clone(t.uniforms),this.material=new Mn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Fd(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class wf extends dr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class qM extends dr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class ZM{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new dt);this._width=n.width,this._height=n.height,e=new $n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new YM(zd),this.copyPass.material.blending=Si,this.clock=new Rd}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}wf!==void 0&&(r instanceof wf?n=!0:r instanceof qM&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new dt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class $M extends dr{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ot}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const jM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class vo extends dr{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new dt(t.x,t.y):new dt(256,256),this.clearColor=new ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new $n(o,r,{type:bi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const u=new $n(o,r,{type:bi});u.texture.name="UnrealBloomPass.h"+f,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new $n(o,r,{type:bi});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),o=Math.round(o/2),r=Math.round(r/2)}const a=jM;this.highPassUniforms=wa.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Mn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new dt(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=zd;this.copyUniforms=wa.clone(h.uniforms),this.blendMaterial=new Mn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Se,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ot,this.oldClearAlpha=1,this.basic=new $,this.fsQuad=new Fd(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new dt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=vo.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=vo.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Mn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new dt(.5,.5)},direction:{value:new dt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Mn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}vo.BlurDirectionX=new dt(1,0);vo.BlurDirectionY=new dt(0,1);let gs=null,Xh=!0;try{const i=new $M(ht,an),t=new vo(new dt(window.innerWidth,window.innerHeight),.6,.4,.85);gs=new ZM(Ke),gs.addPass(i),gs.addPass(t)}catch(i){console.warn("Bloom unavailable, falling back to direct render:",i.message),Xh=!1}window.addEventListener("resize",()=>{Xh&&gs&&gs.setSize(window.innerWidth,window.innerHeight)});function Sf(){Xh&&gs?gs.render():Ke.render(ht,an)}const Yh=new Lm(B.ambient,B.ground,.5);ht.add(Yh);const Bn=new Xa(B.moon,.85);Bn.position.set(30,60,-20);Bn.castShadow=!0;Bn.shadow.camera.left=-90;Bn.shadow.camera.right=90;Bn.shadow.camera.top=90;Bn.shadow.camera.bottom=-90;Bn.shadow.camera.near=1;Bn.shadow.camera.far=250;Bn.shadow.mapSize.set(1024,1024);Bn.shadow.bias=-.001;ht.add(Bn);const kn=new Xa(2241365,.3);kn.position.set(-40,45,25);kn.castShadow=!0;kn.shadow.camera.left=-70;kn.shadow.camera.right=70;kn.shadow.camera.top=70;kn.shadow.camera.bottom=-70;kn.shadow.camera.near=1;kn.shadow.camera.far=200;kn.shadow.mapSize.set(512,512);kn.shadow.bias=-.002;ht.add(kn);const Od=new Xa(3359829,.4);Od.position.set(-25,15,30);ht.add(Od);const Bd=new Es(3368516,.7,100);Bd.position.set(0,.5,0);ht.add(Bd);const KM=[{pos:[15,3,15],col:3368618,int:.8,dist:30},{pos:[-20,4,-10],col:6702216,int:.7,dist:25},{pos:[0,5,30],col:2263142,int:.7,dist:28},{pos:[-15,3,20],col:4491417,int:.6,dist:22},{pos:[25,3,-20],col:10053188,int:.5,dist:20}];for(const i of KM){const t=new Es(i.col,i.int,i.dist);t.position.set(i.pos[0],i.pos[1],i.pos[2]),ht.add(t)}const kd=new Xa(4478327,.4);kd.position.set(-10,25,40);ht.add(kd);const qh=new Es(6719624,.6,20);ht.add(qh);const ss=[];function JM(){for(let i=0;i<kM;i++){const t=new Es(B.crystal,0,16);ht.add(t),ss.push(t)}}const ko=new Es(B.orbGold,0,15);ht.add(ko);const De={};let ar=0,xs=0,Za=!1,Gd=!1,Zh=0,$h=0,jh=!1,$a=!1,pr=!1,Ca=null,Ms=null,Zl=0,$l=0,jl=null;function QM(i){jl=i}function ty(i){Gd=i}function ey(i){$a=i}function mr(){!Gd&&jl&&jl()}window.addEventListener("keydown",i=>{De[i.code]=!0,"Space ShiftLeft ShiftRight KeyW KeyA KeyS KeyD".split(" ").indexOf(i.code)>=0&&i.preventDefault(),mr()});window.addEventListener("keyup",i=>{De[i.code]=!1});window.addEventListener("blur",()=>{for(const i in De)De[i]=!1;Za=!1});Ke.domElement.addEventListener("mousedown",()=>{Za=!0,mr()});window.addEventListener("mouseup",()=>{Za=!1});window.addEventListener("mousemove",i=>{Za&&(ar-=i.movementX*Ra,xs-=i.movementY*Ra,xs=Math.max(-1,Math.min(1,xs)))});const ny="ontouchstart"in window||navigator.maxTouchPoints>0,gr=document.getElementById("joy-zone"),Pa=document.getElementById("joy-knob"),Kh=document.getElementById("btn-jump");ny&&(gr.style.display="block",Kh.style.display="block",document.getElementById("controls").textContent="Stick: Move · Drag right: Look · JUMP");function Hd(i,t){const e=gr.getBoundingClientRect();let n=i-(e.left+e.width/2),s=t-(e.top+e.height/2);const o=Math.sqrt(n*n+s*s),r=52;o>r&&(n=n/o*r,s=s/o*r),Zh=n/r,$h=s/r,Pa.style.left=40+n+"px",Pa.style.top=40+s+"px"}gr.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),mr();const t=i.changedTouches[0];Ca=t.identifier,jh=!0,Hd(t.clientX,t.clientY)},{passive:!1});gr.addEventListener("touchmove",i=>{i.preventDefault(),i.stopPropagation();for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Ca&&Hd(i.changedTouches[t].clientX,i.changedTouches[t].clientY)},{passive:!1});gr.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation();for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Ca&&(Ca=null,jh=!1,Zh=0,$h=0,Pa.style.left="40px",Pa.style.top="40px")},{passive:!1});Kh.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),mr(),$a=!0},{passive:!1});Kh.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation(),$a=!1},{passive:!1});Ke.domElement.addEventListener("touchstart",i=>{i.preventDefault(),mr();for(let t=0;t<i.changedTouches.length;t++){const e=i.changedTouches[t];e.clientX>window.innerWidth*.3&&Ms===null&&(Ms=e.identifier,Zl=e.clientX,$l=e.clientY)}},{passive:!1});Ke.domElement.addEventListener("touchmove",i=>{i.preventDefault();for(let t=0;t<i.changedTouches.length;t++){const e=i.changedTouches[t];e.identifier===Ms&&(ar-=(e.clientX-Zl)*Ra,xs-=(e.clientY-$l)*Ra,xs=Math.max(-1,Math.min(1,xs)),Zl=e.clientX,$l=e.clientY)}},{passive:!1});Ke.domElement.addEventListener("touchend",i=>{for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Ms&&(Ms=null)},{passive:!1});Ke.domElement.addEventListener("touchcancel",i=>{for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Ms&&(Ms=null)},{passive:!1});function iy(){let i=0,t=0;De.KeyW&&(t-=1),De.KeyS&&(t+=1),De.KeyA&&(i-=1),De.KeyD&&(i+=1),jh&&(i+=Zh,t+=$h);const e=Math.sqrt(i*i+t*t);e>1&&(i/=e,t/=e);const n=MM*(De.ShiftLeft||De.ShiftRight||pr?yM:1),s=Math.sin(ar),o=Math.cos(ar);return{x:(i*o+t*s)*n,z:(-i*s+t*o)*n}}const wn={mushCap:new K(.5,8,5),mushStem:new Mt(.06,.1,.6,5),mushDot:new K(.06,4,3),crystal:new Mt(0,.35,1.8,6),crystalSm:new Mt(0,.18,.9,5),fly:new K(.06,4,3),spore:new K(.04,3,3),dandSeed:new K(.025,3,3),bubble:new K(.15,8,6),starMote:new K(.03,3,3),dustMote:new K(.035,3,3)};let Ko=42;function T(){return Ko=Ko*16807%2147483647,(Ko&2147483647)/2147483647}function sy(){return Ko}function oy(i){Ko=i}function Zr(i,t){let e=i*374761393+t*668265263+1274126177|0;return e=(e^e>>13)*1274126177|0,(e&2147483647)/2147483647}function Jo(i){return i*i*(3-2*i)}function Vd(i,t){const e=Math.floor(i),n=Math.floor(t),s=Jo(i-e),o=Jo(t-n),r=Zr(e,n),a=Zr(e+1,n),l=Zr(e,n+1),c=Zr(e+1,n+1);return r+(a-r)*s+(l-r)*o+(r-a-l+c)*s*o}function bf(i,t,e){let n=0,s=.5,o=1;for(let r=0;r<e;r++)n+=Vd(i*o,t*o)*s,s*=.5,o*=2;return n}const Kl=[];function Jl(i,t,e){Kl.push({x:i,z:t,r:e})}function ne(i,t){const e=Math.sqrt(i*i+t*t),n=1-Jo(Math.max(0,(e-he*.7)/(he*.3))),s=Jo(Math.min(1,e/8)),o=.035,r=bf(i*o,t*o,4),a=bf(i*o*2.7+50,t*o*2.7+50,3),l=Vd(i*.15,t*.15);let c=r*2.5+a*.8+l*.15;c*=n*s;for(let h=0;h<Kl.length;h++){const f=Kl[h],u=i-f.x,d=t-f.z,g=Math.sqrt(u*u+d*d);if(g<f.r*2){const _=Jo(Math.max(0,(g-f.r*.5)/(f.r*1.5)));c*=_}}return c}function ry(){const t=document.createElement("canvas");t.width=2048,t.height=2048;const e=t.getContext("2d"),n=Math.random;e.fillStyle="#2a5038",e.fillRect(0,0,2048,2048);const s=[{col:"rgba(40,80,50,0.35)",n:15,r:120},{col:"rgba(60,50,25,0.25)",n:12,r:100},{col:"rgba(30,65,55,0.25)",n:10,r:110},{col:"rgba(55,70,35,0.2)",n:8,r:90},{col:"rgba(35,40,25,0.25)",n:8,r:80}];for(const h of s)for(let f=0;f<h.n;f++){const u=n()*2048,d=n()*2048,g=h.r*(.5+n()*.8),_=e.createRadialGradient(u,d,0,u,d,g);_.addColorStop(0,h.col),_.addColorStop(.6,h.col.replace(/[\d.]+\)$/,parseFloat(h.col.match(/[\d.]+\)$/)[0])*.4+")")),_.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=_;for(let p=-1;p<=1;p++)for(let m=-1;m<=1;m++)e.beginPath(),e.arc(u+p*2048,d+m*2048,g,0,6.28),e.fill()}const o=[{n:80,r:25,colors:["rgba(20,45,25,0.2)","rgba(35,55,28,0.18)","rgba(28,22,12,0.2)","rgba(15,38,30,0.15)"]},{n:200,r:10,colors:["rgba(30,55,30,0.14)","rgba(45,35,18,0.12)","rgba(22,48,35,0.12)","rgba(38,28,14,0.1)"]},{n:500,r:4,colors:["rgba(25,50,28,0.1)","rgba(40,30,15,0.08)","rgba(18,42,32,0.08)","rgba(32,25,10,0.06)"]}];for(const h of o)for(let f=0;f<h.n;f++){e.fillStyle=h.colors[Math.floor(n()*h.colors.length)];const u=n()*2048,d=n()*2048;e.beginPath(),e.arc(u,d,h.r+n()*h.r*.6,0,6.28),e.fill()}const r=["rgba(60,200,100,0.06)","rgba(50,180,120,0.05)","rgba(80,160,200,0.04)","rgba(100,220,150,0.05)"];for(let h=0;h<25;h++){let f=n()*2048,u=n()*2048;const d=r[Math.floor(n()*r.length)];e.strokeStyle=d,e.lineWidth=1+n()*2,e.beginPath(),e.moveTo(f,u);let g=n()*6.28;const _=12+Math.floor(n()*16);for(let p=0;p<_;p++)g+=Math.sin(p*.6)*.5+(n()-.5)*.4,f+=Math.cos(g)*(6+n()*10),u+=Math.sin(g)*(6+n()*10),e.lineTo(f,u);if(e.stroke(),n()<.6){const p=e.createRadialGradient(f,u,0,f,u,6+n()*8);p.addColorStop(0,d.replace("0.0","0.1")),p.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=p,e.beginPath(),e.arc(f,u,6+n()*8,0,6.28),e.fill()}}e.lineWidth=1.2;for(let h=0;h<30;h++){e.strokeStyle=`rgba(20,12,5,${.15+n()*.12})`;let f=n()*2048,u=n()*2048,d=n()*6.28;e.beginPath(),e.moveTo(f,u);for(let g=0;g<10;g++)d+=Math.sin(g*.7)*.5+(n()-.5)*.35,f+=Math.cos(d)*(8+n()*14),u+=Math.sin(d)*(8+n()*14),e.lineTo(f,u);e.stroke()}const a=["rgba(55,32,12,0.3)","rgba(70,42,18,0.25)","rgba(40,55,22,0.22)","rgba(22,50,28,0.2)","rgba(60,45,20,0.25)","rgba(30,60,35,0.18)","rgba(50,25,8,0.22)","rgba(65,55,25,0.18)"];for(let h=0;h<3e3;h++){e.fillStyle=a[Math.floor(n()*a.length)];const f=n()*2048,u=n()*2048,d=.8+n()*2.5;e.beginPath(),e.arc(f,u,d,0,6.28),e.fill()}for(let h=0;h<40;h++){const f=n()*2048,u=n()*2048,d=15+n()*35,g=e.createRadialGradient(f,u,0,f,u,d),_=n();_<.4?(g.addColorStop(0,"rgba(45,90,50,0.18)"),g.addColorStop(1,"rgba(25,55,30,0)")):_<.7?(g.addColorStop(0,"rgba(35,75,60,0.16)"),g.addColorStop(1,"rgba(20,50,38,0)")):(g.addColorStop(0,"rgba(55,75,35,0.14)"),g.addColorStop(1,"rgba(30,45,20,0)")),e.fillStyle=g,e.beginPath(),e.arc(f,u,d,0,6.28),e.fill()}for(let h=0;h<400;h++){const f=n()*2048,u=n()*2048,d=1.5+n()*3.5,g=Math.floor(28+n()*42);e.fillStyle=`rgba(${g},${g-4},${g-10},0.3)`,e.beginPath(),e.arc(f,u,d,0,6.28),e.fill()}e.lineWidth=.7;for(let h=0;h<80;h++){const f=n()*2048,u=n()*2048,d=4+n()*18,g=n()*6.28;e.strokeStyle=`rgba(22,12,5,${.15+n()*.1})`,e.beginPath(),e.moveTo(f,u),e.lineTo(f+Math.cos(g)*d,u+Math.sin(g)*d),e.stroke()}const l=["rgba(80,220,120,0.08)","rgba(60,200,160,0.07)","rgba(100,180,220,0.06)","rgba(120,100,200,0.05)","rgba(200,150,80,0.04)","rgba(60,180,180,0.06)"];for(let h=0;h<300;h++){const f=n()*2048,u=n()*2048,d=l[Math.floor(n()*l.length)];if(e.fillStyle=d,e.beginPath(),e.arc(f,u,1+n()*2,0,6.28),e.fill(),n()<.3){const g=e.createRadialGradient(f,u,0,f,u,4+n()*5);g.addColorStop(0,d),g.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=g,e.beginPath(),e.arc(f,u,4+n()*5,0,6.28),e.fill()}}for(let h=0;h<150;h++){const f=n()*2048,u=n()*2048;e.fillStyle=`rgba(120,180,130,${.04+n()*.04})`,e.beginPath(),e.arc(f,u,.5+n()*1.2,0,6.28),e.fill()}const c=new Fh(t);return c.wrapS=c.wrapT=_a,c.repeat.set(8,8),c.colorSpace=cn,c}function $r(i,t){let e=i*127961+t*372143+918273|0;return e=(e^e>>13)*517261|0,(e&2147483647)/2147483647}function Ql(i){return i*i*(3-2*i)}function Wd(i,t){const e=Math.floor(i),n=Math.floor(t),s=Ql(i-e),o=Ql(t-n),r=$r(e,n),a=$r(e+1,n),l=$r(e,n+1),c=$r(e+1,n+1);return r+(a-r)*s+(l-r)*o+(r-a-l+c)*s*o}function Uc(i,t,e){let n=0,s=.5,o=1;for(let r=0;r<e;r++)n+=Wd(i*o,t*o)*s,s*=.5,o*=2;return n}function ay(){const i=ry(),t=he*3,e=200,n=new Me(t,t,e,e),s=n.attributes.position,o=[[.55,.95,.6],[.45,.85,.95],[.8,.5,1],[.85,.65,.4],[.5,1.1,.65],[.4,.7,.9]],r=s.count,a=new Float32Array(r*3);for(let c=0;c<r;c++){const h=s.getX(c),f=s.getY(c);Math.sqrt(h*h+f*f)<he*1.4?s.setZ(c,ne(h,-f)):s.setZ(c,0);const d=h,g=-f,_=Uc(d*.025+100,g*.025+200,3),p=Uc(d*.06+300,g*.06+400,2),m=Wd(d*.15+500,g*.15+600),w=Uc(d*.04-150,g*.04-250,3),v=Math.floor(_*o.length*.999),M=Math.floor(w*o.length*.999),A=o[v],E=o[M],b=Ql(p),S=.85+m*.3,y=(A[0]*(1-b)+E[0]*b)*S,x=(A[1]*(1-b)+E[1]*b)*S,R=(A[2]*(1-b)+E[2]*b)*S,D=1+ne(d,g)*.06;a[c*3]=y*D,a[c*3+1]=x*D,a[c*3+2]=R*D}n.setAttribute("color",new We(a,3)),n.computeVertexNormals();const l=new I(n,new et({map:i,vertexColors:!0,roughness:.75,metalness:0,emissive:1718304,emissiveIntensity:.25}));return l.rotation.x=-Math.PI/2,l.receiveShadow=!0,ht.add(l),l}const cr=new pe;let Ia=null;const os=120;let Tf=null,ha=null,th=null,eh=null,io=null;const so=[],cy=3;let Nc=0;function Gi(i,t){const e=i>>16&255,n=i>>8&255,s=i&255;return`rgba(${e},${n},${s},${t})`}function Hi(i,t,e,n,s,o,r){i.save(),i.translate(t,e),Math.abs(s/n-1)>.01&&i.scale(1,s/n);const a=i.createRadialGradient(0,0,0,0,0,n);a.addColorStop(0,Gi(o,r)),a.addColorStop(.25,Gi(o,r*.55)),a.addColorStop(.55,Gi(o,r*.15)),a.addColorStop(.85,Gi(o,r*.03)),a.addColorStop(1,Gi(o,0)),i.fillStyle=a,i.beginPath(),i.arc(0,0,n,0,6.2832),i.fill(),i.restore()}function zc(i,t,e,n,s,o,r,a){Hi(i,t,e,n,s,o,r),t-n<0&&Hi(i,t+a,e,n,s,o,r),t+n>a&&Hi(i,t-a,e,n,s,o,r)}function ly(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),s=Math.random,o=n.createLinearGradient(0,0,0,1024);o.addColorStop(0,"#030610"),o.addColorStop(.2,"#050a18"),o.addColorStop(.4,"#0a1222"),o.addColorStop(.55,"#0c1828"),o.addColorStop(.75,"#081018"),o.addColorStop(1,"#040810"),n.fillStyle=o,n.fillRect(0,0,2048,1024);const r=[{x:.12,y:.22,rx:.18,ry:.14,col:1717094,a:.14},{x:.42,y:.28,rx:.22,ry:.1,col:2758741,a:.12},{x:.72,y:.18,rx:.16,ry:.12,col:1721446,a:.13},{x:.88,y:.32,rx:.2,ry:.09,col:3348548,a:.1},{x:.28,y:.12,rx:.14,ry:.18,col:2245768,a:.1},{x:.58,y:.38,rx:.18,ry:.07,col:4465220,a:.08},{x:.05,y:.4,rx:.15,ry:.1,col:1586005,a:.09},{x:.52,y:.15,rx:.12,ry:.16,col:2765670,a:.07}];for(const f of r){zc(n,f.x*2048,f.y*1024,f.rx*2048,f.ry*1024,f.col,f.a,2048);for(let u=0;u<4;u++){const d=(f.x+(s()-.5)*f.rx)*2048,g=(f.y+(s()-.5)*f.ry)*1024,_=f.rx*2048*(.2+s()*.35),p=f.ry*1024*(.2+s()*.4);zc(n,d,g,_,p,f.col,f.a*(.4+s()*.5),2048)}}const a=[2245802,2245734,4465254,5583701,3368584,2245717,3809894];for(let f=0;f<30;f++){const u=s()*2048,d=s()*1024*.55,g=40+s()*180,_=25+s()*100;zc(n,u,d,g,_,a[Math.floor(s()*a.length)],.025+s()*.035,2048)}n.save(),n.globalCompositeOperation="screen";const l=.26;for(let f=0;f<50;f++){const u=f/50,d=u*2048,g=(l+Math.sin(u*Math.PI)*.06+(s()-.5)*.02)*1024,_=2048*.05+s()*2048*.035,p=1024*.04*(.4+s()*.6);Hi(n,d,g,_,p,4478310,.025+s()*.015)}for(let f=0;f<25;f++){const u=.2+s()*.6,d=u*2048,g=(l+Math.sin(u*Math.PI)*.04)*1024;Hi(n,d,g,2048*.03+s()*2048*.02,1024*.02+s()*1024*.01,6719658,.015+s()*.012)}for(let f=0;f<10;f++){const u=.35+s()*.3,d=u*2048,g=(l+Math.sin(u*Math.PI)*.02)*1024;Hi(n,d,g,2048*.02,1024*.012,8943462,.01+s()*.008)}n.globalCompositeOperation="source-over",n.restore();for(let f=0;f<12;f++){const u=.1+s()*.8,d=u*2048,g=(l+Math.sin(u*Math.PI)*.04+(s()-.5)*.02)*1024,_=20+s()*60,p=8+s()*20;Hi(n,d,g,_,p,132104,.15+s()*.1)}const c=["255,255,255","220,230,255","255,240,220","200,215,255","255,225,200","240,240,255","255,245,235"];for(let f=0;f<5e3;f++){const u=s()*2048,d=s()*1024*.65,g=.3+s()*.7,_=.1+s()*.5;n.fillStyle=`rgba(${c[Math.floor(s()*c.length)]},${_})`,n.beginPath(),n.arc(u,d,g,0,6.28),n.fill()}for(let f=0;f<3e3;f++){const u=s(),d=u*2048,_=(l+Math.sin(u*Math.PI)*.06)*1024+(s()-.5)*1024*.1;if(_<0||_>1024*.6)continue;const p=.2+s()*.6,m=.2+s()*.7;n.fillStyle=`rgba(${c[Math.floor(s()*c.length)]},${m})`,n.beginPath(),n.arc(d,_,p,0,6.28),n.fill()}for(let f=0;f<60;f++){const u=s()*2048,d=s()*1024*.58,g=1.2+s()*1.8,_=6+s()*14,p=s();let m;p<.45?m="255,255,255":p<.65?m="210,225,255":p<.8?m="255,230,200":p<.92?m="190,210,255":m="255,200,180";const w=n.createRadialGradient(u,d,0,u,d,_);w.addColorStop(0,`rgba(${m},0.5)`),w.addColorStop(.1,`rgba(${m},0.18)`),w.addColorStop(.35,`rgba(${m},0.04)`),w.addColorStop(1,`rgba(${m},0)`),n.fillStyle=w,n.beginPath(),n.arc(u,d,_,0,6.28),n.fill(),n.strokeStyle=`rgba(${m},0.12)`,n.lineWidth=.5;const v=_*.8;n.beginPath(),n.moveTo(u-v,d),n.lineTo(u+v,d),n.moveTo(u,d-v),n.lineTo(u,d+v),n.stroke(),n.fillStyle=`rgba(${m},1)`,n.beginPath(),n.arc(u,d,g,0,6.28),n.fill()}for(let f=0;f<8;f++){const u=s()*2048,d=1024*.08+s()*1024*.42,g=50+s()*90;Hi(n,u,d,g,g*.7,3359846,.03);for(let _=0;_<100;_++){const p=s()*6.28,m=s()*s()*g,w=u+Math.cos(p)*m,v=d+Math.sin(p)*m*.65;if(w<0||w>2048||v<0||v>1024)continue;const M=.2+s()*.6;n.fillStyle=`rgba(255,255,255,${.25+s()*.6})`,n.beginPath(),n.arc(w,v,M,0,6.28),n.fill()}}for(let f=0;f<15;f++){const u=r[Math.floor(s()*r.length)],d=(u.x+(s()-.5)*u.rx*.5)*2048,g=(u.y+(s()-.5)*u.ry*.5)*1024,_=3+s()*8,p=n.createRadialGradient(d,g,0,d,g,_*3);p.addColorStop(0,Gi(u.col,.2)),p.addColorStop(.3,Gi(u.col,.06)),p.addColorStop(1,Gi(u.col,0)),n.fillStyle=p,n.beginPath(),n.arc(d,g,_*3,0,6.28),n.fill()}const h=new Fh(e);return h.colorSpace=cn,h}function hy(){const i=sy(),t=ly(),e=new K(Wh,64,32,0,Math.PI*2,0,Math.PI*.55);Ia=new $({map:t,side:ln,fog:!1,transparent:!1});const n=new I(e,Ia);cr.add(n),uy(),fy(),ht.add(cr),oy(i)}function uy(){const i=new Float32Array(os*3),t=new Float32Array(os*3);ha=new Float32Array(os),th=new Float32Array(os),eh=new Float32Array(os);const e=[[1,1,1],[.85,.9,1],[1,.94,.86],[.78,.84,1],[1,.88,.78],[.9,.95,1]],n=Math.random,s=Wh*.97;for(let a=0;a<os;a++){const l=n()*Math.PI*2,c=n()*Math.PI*.48,h=s*Math.cos(l)*Math.sin(c),f=s*Math.cos(c),u=s*Math.sin(l)*Math.sin(c);i[a*3]=h,i[a*3+1]=f,i[a*3+2]=u;const d=e[Math.floor(n()*e.length)];t[a*3]=d[0],t[a*3+1]=d[1],t[a*3+2]=d[2],ha[a]=2+n()*4,th[a]=n()*Math.PI*2,eh[a]=.5+n()*2.5}const o=new ye;o.setAttribute("position",new Gt(i,3)),o.setAttribute("color",new Gt(t,3)),io=new Gt(ha.slice(),1),io.setUsage(Le),o.setAttribute("size",io);const r=new zh({vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,fog:!1,blending:Se,depthWrite:!1});Tf=new gd(o,r),cr.add(Tf)}function fy(){const i=new $({color:16777215,transparent:!0,opacity:0,fog:!1,blending:Se,depthWrite:!1});for(let t=0;t<cy;t++){const e=new I(new Mt(.15,0,12,4),i.clone());e.visible=!1,cr.add(e),so.push({mesh:e,mat:e.material,active:!1,life:0,maxLife:0,sx:0,sy:0,sz:0,dx:0,dy:0,dz:0})}}function dy(){let i=null;for(let a=0;a<so.length;a++)if(!so[a].active){i=so[a];break}if(!i)return;const t=Math.random,e=t()*Math.PI*2,n=.1+t()*.35,s=Wh*.85;i.sx=s*Math.cos(e)*Math.sin(n),i.sy=s*Math.cos(n),i.sz=s*Math.sin(e)*Math.sin(n);const o=e+(t()-.5)*1,r=80+t()*120;i.dx=Math.cos(o)*r,i.dy=-r*(.5+t()*.5),i.dz=Math.sin(o)*r,i.life=.5+t()*.8,i.maxLife=i.life,i.active=!0,i.mesh.visible=!0}function Xd(i,t){if(cr.rotation.y=t*.003,io){const e=io.array;for(let n=0;n<os;n++){const s=ha[n],o=Math.sin(t*eh[n]+th[n]);e[n]=s*(.65+o*.35)}io.needsUpdate=!0}Nc-=i,Nc<=0&&(Nc=4+Math.random()*12,dy());for(let e=0;e<so.length;e++){const n=so[e];if(!n.active)continue;if(n.life-=i,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}const s=n.life/n.maxLife;n.sx+=n.dx*i,n.sy+=n.dy*i,n.sz+=n.dz*i,n.mesh.position.set(n.sx,n.sy,n.sz),n.mesh.lookAt(n.sx+n.dx,n.sy+n.dy,n.sz+n.dz),n.mesh.rotateX(Math.PI/2),n.mat.opacity=s*.7,n.mesh.scale.setScalar(.6+s*.4)}}function py(i){if(Ia){const t=Math.max(.15,i);Ia.color.setRGB(t,t,t)}}const Q={pos:new N(0,qa,0),vel:new N,onGround:!0};let Fc=0,Oc=0,Yd=0,Bc=65,Ef=65,No=0,Af=!0,kc=0,Mo=0,nh=null,ih=null,sh=null,Rf=1;function my(i,t,e){nh=i,ih=t,sh=e}let oh=[],rh=[],ah=null;function gy(i,t){oh=i,rh=t}function xy(i){ah=i}function _y(i){const t=iy(),e=De.ShiftLeft||De.ShiftRight||pr;Q.vel.x=t.x,Q.vel.z=t.z,Q.vel.y-=vM*i,(De.Space||$a)&&Q.onGround&&(Q.vel.y=Aa,Q.onGround=!1,ey(!1),ih&&ih()),Q.onGround||(kc=Q.vel.y),Q.pos.x+=Q.vel.x*i,Q.pos.y+=Q.vel.y*i,Q.pos.z+=Q.vel.z*i;const n=ne(Q.pos.x,Q.pos.z)+qa;if(Q.pos.y<=n){if(Q.pos.y=n,Q.vel.y=0,!Af&&kc<-3){const h=Math.min(Math.abs(kc)/Aa,1);No=h*.15,ah&&ah(Q.pos.x,Q.pos.z,Math.floor(3+h*5)),sh&&sh(h)}Q.onGround=!0}Af=Q.onGround,Q.onGround?(Q.vel.x*=_f,Q.vel.z*=_f):(Q.vel.x*=vf,Q.vel.z*=vf);const s=.4;for(let h=0;h<oh.length;h++){const f=oh[h],u=Q.pos.x-f.x,d=Q.pos.z-f.z,g=u*u+d*d,_=.6+s;if(g<_*_&&g>.001){const p=1/Math.sqrt(g);Q.pos.x=f.x+u*p*_,Q.pos.z=f.z+d*p*_}}for(let h=0;h<rh.length;h++){const f=rh[h],u=Q.pos.x-f.x,d=Q.pos.z-f.z,g=u*u+d*d,_=f.colR+s;if(g<_*_&&g>.001){const p=1/Math.sqrt(g);Q.pos.x=f.x+u*p*_,Q.pos.z=f.z+d*p*_}}if(Math.sqrt(Q.pos.x*Q.pos.x+Q.pos.z*Q.pos.z)>he){const h=Math.atan2(Q.pos.z,Q.pos.x);Q.pos.x=Math.cos(h)*he,Q.pos.z=Math.sin(h)*he}qh.position.copy(Q.pos);const a=Math.sqrt(t.x*t.x+t.z*t.z)>.5&&Q.onGround;a?Mo=0:Mo+=i,Oc+=((a?e?.06:.035:0)-Oc)*i*6,a&&(Fc+=i*(e?12:8));const c=Math.sin(Fc)*Oc;if(a&&nh){const h=Math.sin(Fc)>=0?1:-1;Rf>0&&h<0&&nh(e),Rf=h}Ef=e&&a?78:65,Bc+=(Ef-Bc)*i*4,an.fov=Bc,an.updateProjectionMatrix(),No*=Math.pow(.04,i),No<.001&&(No=0),Yd=c-No}const Cf=[{leaf:1332520,glow:2280567,core:4521898},{leaf:931880,glow:3390378,core:5636044},{leaf:1721376,glow:4508757,core:7864200},{leaf:1060912,glow:2267562,core:4513262},{leaf:1583172,glow:3377356,core:5618687}];function vy(i,t){const e=new pe,n=6+T()*10,s=.2+T()*.3,o=new et({color:5914672,roughness:.75,emissive:1718304,emissiveIntensity:.18}),r=new I(new Mt(s*.4,s,n,6),o);r.position.y=n/2,r.castShadow=!0,e.add(r);const a=new et({color:2263125,emissive:B.leafGlow,emissiveIntensity:.5,transparent:!0,opacity:.25}),l=2+Math.floor(T()*3);for(let w=0;w<l;w++){const v=w/l*6.28+T()*.5,M=n*.4+T()*n*.4,A=new I(new Mt(.008,.015,M,3),a);A.position.set(Math.cos(v)*s*.74,n*.15+M/2,Math.sin(v)*s*.74),e.add(A)}const c=new et({color:3812378,roughness:.85,emissive:1583636,emissiveIntensity:.12}),h=3+Math.floor(T()*3);for(let w=0;w<h;w++){const v=w/h*6.28+T()*.5,M=.8+T()*1.5,A=new I(new Mt(.02,s*.3,M,4),c);A.position.set(Math.cos(v)*s*.5,.08,Math.sin(v)*s*.5),A.rotation.z=v<3.14?1.2+T()*.3:-(1.2+T()*.3),A.rotation.y=v,e.add(A)}const f=3+Math.floor(T()*4);for(let w=0;w<f;w++){const v=n*(.4+T()*.5),M=T()*Math.PI*2,A=1.5+T()*3,E=new I(new Mt(.02,.06,A,4),o);E.position.set(Math.cos(M)*.3,v,Math.sin(M)*.3),E.rotation.z=(T()-.5)*1.2,E.rotation.y=M,E.castShadow=!0,e.add(E);const b=Cf[Math.floor(T()*Cf.length)],S=Math.cos(M)*(A*.5),y=v+T()*1.5,x=Math.sin(M)*(A*.5),R=1+T()*2,U=new et({color:b.core,emissive:b.core,emissiveIntensity:.7+T()*.5,transparent:!0,opacity:.55,roughness:.3}),D=new I(new ms(R*.3,1),U);D.position.set(S,y,x),e.add(D);const z=new et({color:b.leaf,emissive:b.glow,emissiveIntensity:.25+T()*.25,transparent:!0,opacity:.55,roughness:.7}),H=new I(new ms(R*.75,1),z);H.position.set(S+(T()-.5)*.4,y+(T()-.5)*.4,x+(T()-.5)*.4),H.scale.set(1+T()*.4,.65+T()*.5,1+T()*.4),H.castShadow=!0,H.receiveShadow=!0,e.add(H);const V=new et({color:b.glow,emissive:b.glow,emissiveIntensity:.12,transparent:!0,opacity:.08,depthWrite:!1}),Z=new I(new ms(R*1.2,1),V);if(Z.position.set(S,y,x),e.add(Z),T()<.35){const W=new et({color:2773040,emissive:1135904,emissiveIntensity:.08,transparent:!0,opacity:.5}),lt=.3+T()*.8,ft=new I(new Mt(.008,.003,lt,3),W),bt=T()*A*.4;ft.position.set(Math.cos(M)*(.3+bt),v-lt/2-T()*.3,Math.sin(M)*(.3+bt)),e.add(ft)}}const u=new et({color:5911840,emissive:3349e3,emissiveIntensity:.06,roughness:.8}),d=Math.floor(T()*3);for(let w=0;w<d;w++){const v=1+T()*n*.4,M=T()*6.28,A=new I(new K(.08+T()*.08,5,3),u);A.scale.set(1.5,.3,1),A.position.set(Math.cos(M)*s*.8,v,Math.sin(M)*s*.8),A.rotation.y=-M,e.add(A)}const g=new et({color:B.leaf,emissive:B.leafGlow,emissiveIntensity:.06,transparent:!0,opacity:.07,depthWrite:!1}),_=new I(new K(3+T()*2,8,6),g);_.position.y=n*.65,e.add(_);const p=new et({color:1183752,roughness:.95}),m=new I(new K(s*2.5,6,3),p);return m.scale.set(1,.12,1),m.position.y=.02,e.add(m),e.position.set(i,0,t),ht.add(e),e}function My(i,t){const e=new pe,n=.4+T()*1.2,s=T()*6.28,o=.8+T()*1.5,r=.5+T()*.8,a=new I(wn.mushStem,new et({color:B.mushStem,roughness:.7,emissive:B.mushGlow,emissiveIntensity:.1}));a.position.y=.3,e.add(a);const l=new et({color:B.mushStem,emissive:B.mushGlow,emissiveIntensity:.15,roughness:.6}),c=new I(new Ae(.09,.012,4,8),l);c.position.y=.42,c.rotation.x=Math.PI/2,e.add(c);const h=new et({color:B.mushCap,emissive:B.mushGlow,emissiveIntensity:r,roughness:.3,transparent:!0,opacity:.9}),f=new I(wn.mushCap,h);f.scale.set(1,.5,1),f.position.y=.55,f.castShadow=!0,f.receiveShadow=!0,e.add(f);const u=new et({color:6693546,emissive:B.mushGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,side:zt});for(let x=0;x<8;x++){const R=x/8*6.28,U=new I(new Me(.35,.08),u);U.position.set(Math.cos(R)*.15,.48,Math.sin(R)*.15),U.rotation.y=-R,U.rotation.x=.1,e.add(U)}for(let x=0;x<4;x++){const R=new $({color:16777215,transparent:!0,opacity:.9}),U=new I(wn.mushDot,R),D=T()*6.28,z=.15+T()*.25;U.position.set(Math.cos(D)*z,.6+T()*.1,Math.sin(D)*z),e.add(U)}const d=new et({color:15663103,emissive:11197951,emissiveIntensity:.2,transparent:!0,opacity:.6,roughness:0,metalness:.5}),g=2+Math.floor(T()*2);for(let x=0;x<g;x++){const R=new I(new K(.015+T()*.015,4,3),d),U=T()*6.28,D=.1+T()*.2;R.position.set(Math.cos(U)*D,.63+T()*.08,Math.sin(U)*D),e.add(R)}const _=new et({color:4465322,emissive:B.mushGlow,emissiveIntensity:.15,transparent:!0,opacity:.35});for(let x=0;x<4;x++){const R=T()*6.28,U=.15+T()*.25,D=new I(new Mt(.004,.002,U,3),_);D.position.set(Math.cos(R)*.12,.01,Math.sin(R)*.12),D.rotation.z=1.3*(R<3.14?1:-1),D.rotation.y=R,e.add(D)}const p=new et({color:B.mushCap,emissive:B.mushGlow,emissiveIntensity:r*.6,transparent:!0,opacity:.4}),m=new I(new Ae(.38,.01,4,12),p);m.position.y=.49,m.rotation.x=Math.PI/2,e.add(m);const w=new et({color:B.mushStem,emissive:B.mushGlow,emissiveIntensity:.08,roughness:.7}),v=new I(new K(.08,5,3),w);v.scale.set(1,.5,1),v.position.y=.04,e.add(v);const M=new et({color:1708040,roughness:.95});for(let x=0;x<3;x++){const R=T()*6.28,U=.1+T()*.12,D=new I(new K(.008+T()*.008,3,3),M);D.position.set(Math.cos(R)*U,.005,Math.sin(R)*U),e.add(D)}const A=new $({color:B.mushGlow,transparent:!0,opacity:.2});for(let x=0;x<4;x++){const R=new I(new K(.006,3,3),A);R.position.set((T()-.5)*.2,.35+T()*.1,(T()-.5)*.2),e.add(R)}const E=new et({color:11167453,emissive:B.mushGlow,emissiveIntensity:r*.3,roughness:.5}),b=3+Math.floor(T()*3);for(let x=0;x<b;x++){const R=T()*6.28,U=T()*.25,D=new I(new K(.015+T()*.015,3,3),E);D.position.set(Math.cos(R)*U,.58+T()*.06,Math.sin(R)*U),e.add(D)}const S=new et({color:657416,transparent:!0,opacity:.2,roughness:.95,side:zt}),y=new I(new Ve(.18,8),S);return y.rotation.x=-Math.PI/2,y.position.y=.005,e.add(y),e.scale.setScalar(n),e.position.set(i,0,t),ht.add(e),{group:e,capMat:h,phase:s,speed:o,base:r,x:i,z:t}}function yy(i,t){const e=new pe,n=T()*6.28,s=new et({color:B.crystal,emissive:B.crystalCore,emissiveIntensity:1.5,transparent:!0,opacity:.7,roughness:.1,metalness:.5}),o=new I(wn.crystal,s);o.position.y=.9,o.castShadow=!0,e.add(o);for(let v=0;v<3;v++){const M=new I(wn.crystalSm,s),A=v/3*6.28+T()*.5;M.position.set(Math.cos(A)*.4,.45,Math.sin(A)*.4),M.rotation.z=(T()-.5)*.8,M.castShadow=!0,e.add(M)}const r=new et({color:1710626,roughness:.9,metalness:.1}),a=3+Math.floor(T()*3);for(let v=0;v<a;v++){const M=T()*6.28,A=.2+T()*.5,E=.08+T()*.12,b=new I(new K(E,4,3),r);b.scale.set(1+T()*.5,.5+T()*.4,1+T()*.5),b.position.set(Math.cos(M)*A,E*.3,Math.sin(M)*A),b.rotation.set(T(),T(),T()),e.add(b)}const l=new $({color:B.crystalCore,transparent:!0,opacity:.5});for(let v=0;v<3;v++){const M=.4+T()*.8,A=new I(new Mt(.008,.008,M,3),l);A.position.set((T()-.5)*.15,.5+T()*.7,(T()-.5)*.15),A.rotation.set((T()-.5)*.8,(T()-.5)*.5,(T()-.5)*.8),e.add(A)}const c=new $({color:11206638,transparent:!0,opacity:.6});for(let v=0;v<5;v++){const M=new I(new K(.012,3,3),c);M.position.set((T()-.5)*1,.3+T()*1.5,(T()-.5)*1),e.add(M)}const h=new et({color:B.crystal,emissive:B.crystalCore,emissiveIntensity:.8,transparent:!0,opacity:.5});for(let v=0;v<4;v++){const M=T()*6.28,A=.3+T()*.3,E=new I(new Mt(0,.015,.12+T()*.1,3),h);E.position.set(Math.cos(M)*A,.06+T()*.1,Math.sin(M)*A),E.rotation.z=(T()-.5)*.6,e.add(E)}const f=new et({color:3364198,emissive:1122867,emissiveIntensity:.05,roughness:.9,side:zt});for(let v=0;v<2;v++){const M=T()*6.28,A=.2+T()*.3,E=new I(new Ve(.04+T()*.03,5),f);E.rotation.x=-Math.PI/2+T()*.4,E.position.set(Math.cos(M)*A,.05,Math.sin(M)*A),e.add(E)}const u=new $({color:B.crystalCore,transparent:!0,opacity:.2});for(let v=0;v<2;v++){const M=new I(new Mt(.003,.003,.6+T()*.4,3),u);M.position.set((T()-.5)*.3,.7+T()*.5,(T()-.5)*.3),M.rotation.set((T()-.5)*1,T(),(T()-.5)*1),e.add(M)}const d=new et({color:1135940,emissive:1127202,emissiveIntensity:.3,transparent:!0,opacity:.25});for(let v=0;v<4;v++){const M=new I(new K(.02+T()*.02,3,3),d);M.position.set((T()-.5)*.15,.4+T()*.6,(T()-.5)*.15),e.add(M)}const g=new $({color:11206638,transparent:!0,opacity:.06}),_=new I(new Ae(.35,.02,4,10),g);_.position.y=.6,_.rotation.x=Math.PI/2+T()*.3,e.add(_);const p=new $({color:B.crystal,transparent:!0,opacity:.06,side:zt}),m=new I(new Ve(.8,8),p);m.rotation.x=-Math.PI/2,m.position.y=.01,e.add(m),e.position.set(i,0,t),ht.add(e);const w=new Es(B.crystal,.5,8);return w.position.set(i,1.2,t),ht.add(w),{group:e,mat:s,phase:n,x:i,z:t,light:w}}function wy(i,t,e,n,s){const o=new ye,r=[],a=[],l=[],c=n||20,h=new ot(s?s[0]:663568),f=new ot(s?s[1]:1388056),u=new ot(s?s[2]:2777141),d=new ot(s?s[3]:4517461),g=new ot(s?s[4]:7864268),_=new ot(s?s[5]:14548838),p=new ot;for(let S=0;S<c;S++){const y=T()*6.28,x=T()*e,R=Math.cos(y)*x,U=Math.sin(y)*x,D=.25+T()*.65,z=.03+T()*.05,H=(T()-.5)*.2,V=(T()-.5)*.2,Z=(T()-.5)*.12,W=T()<.5?h:f,lt=T(),ft=lt<.4?d:lt<.7?g:_,bt=D*.35,Ht=D*.7,$t=H*.3,J=H*.7,at=V*.3,yt=V*.7;r.push(R-z,.01,U),r.push(R+z,.01,U),r.push(R+$t-z*.9,bt,U+at),l.push(0,0,.35),a.push(W.r,W.g,W.b,W.r,W.g,W.b),p.copy(W).lerp(u,.4),a.push(p.r,p.g,p.b),r.push(R+z,.01,U),r.push(R+$t+z*.9,bt,U+at),r.push(R+$t-z*.9,bt,U+at),l.push(0,.35,.35),a.push(W.r,W.g,W.b),p.copy(W).lerp(u,.4),a.push(p.r,p.g,p.b,p.r,p.g,p.b);const ut=z*.65;r.push(R+$t-z*.9,bt,U+at),r.push(R+$t+z*.9,bt,U+at),r.push(R+J-ut,Ht,U+yt+Z),l.push(.35,.35,.7),p.copy(W).lerp(u,.4),a.push(p.r,p.g,p.b,p.r,p.g,p.b),p.copy(u).lerp(ft,.3),a.push(p.r,p.g,p.b),r.push(R+$t+z*.9,bt,U+at),r.push(R+J+ut,Ht,U+yt+Z),r.push(R+J-ut,Ht,U+yt+Z),l.push(.35,.7,.7),p.copy(W).lerp(u,.4),a.push(p.r,p.g,p.b),p.copy(u).lerp(ft,.3),a.push(p.r,p.g,p.b,p.r,p.g,p.b),r.push(R+J-ut,Ht,U+yt+Z),r.push(R+J+ut,Ht,U+yt+Z),r.push(R+H+Z*2,D,U+V+Z*1.5),l.push(.7,.7,1),p.copy(u).lerp(ft,.3),a.push(p.r,p.g,p.b,p.r,p.g,p.b),a.push(ft.r,ft.g,ft.b)}const m=new ot(s?s[6]:1725736),w=new ot(s?s[7]:3385941),v=Math.floor(c*.3);for(let S=0;S<v;S++){const y=T()*6.28,x=T()*e*.9,R=Math.cos(y)*x,U=Math.sin(y)*x,D=.02+T()*.03;r.push(R-D,.01,U),r.push(R+D,.01,U),r.push(R,.03+T()*.02,U+D),l.push(0,0,.05),a.push(m.r,m.g,m.b),a.push(m.r,m.g,m.b),a.push(w.r,w.g,w.b)}const M=new Gt(r,3);M.setUsage(Le),o.setAttribute("position",M),o.setAttribute("color",new Gt(a,3)),o.setAttribute("bladeHeight",new Gt(l,1)),o.computeVertexNormals();const A=new Float32Array(r.length);A.set(M.array);const E=new et({vertexColors:!0,roughness:.7,side:zt,emissive:s?s[8]:4521830,emissiveIntensity:.08}),b=new I(o,E);return b.position.set(i,0,t),ht.add(b),{mesh:b,geo:o,cx:i,cz:t,origPos:A}}function Sy(i,t,e,n,s,o,r){const a=i.geo.attributes.position.array,l=i.geo.attributes.bladeHeight.array,c=i.origPos,h=i.cx,f=i.cz,u=o-h,d=r-f;for(let g=0,_=l.length;g<_;g++){const p=l[g];if(p<.01)continue;const m=g*3,w=c[m],v=c[m+1],M=c[m+2],A=(Math.sin(t*.7+(h+w)*.05)*.06+Math.sin(t*1.3+(f+M)*.08)*.03)*e*p*p,E=(Math.sin(t*.9+(f+M)*.06)*.04+Math.sin(t*1.7+(h+w)*.04)*.02)*e*p*p;let b=A+n*p,S=E+s*p;const y=w-u,x=M-d,R=y*y+x*x;if(R<1.44){const U=1-Math.sqrt(R)/1.2,D=U*U*.7,z=Math.atan2(y,x);b+=Math.sin(z)*D*p*.15,S+=Math.cos(z)*D*p*.15,a[m+1]=v*(1-D*p)}else a[m+1]=v;a[m]=w+b,a[m+2]=M+S}i.geo.attributes.position.needsUpdate=!0}function by(i,t){const e=new pe,n=new et({color:B.fern,emissive:B.fernGlow,emissiveIntensity:.08,roughness:.7,side:zt}),s=3+Math.floor(T()*2),o=.5+T()*.7,r=new et({color:1708552,roughness:.95}),a=new I(new K(.06,5,3),r);a.scale.set(1.5,.5,1.5),a.position.y=.02,e.add(a);for(let m=0;m<3;m++){const w=T()*6.28,v=new I(new Mt(.003,.002,.08,3),r);v.position.set(Math.cos(w)*.06,.01,Math.sin(w)*.06),v.rotation.z=(w<3.14?1:-1)*1.2,v.rotation.y=w,e.add(v)}for(let m=0;m<s;m++){const w=m/s*6.28+T()*.3,v=new I(new Mt(.004,.006,.55,3),new et({color:1721632,roughness:.8}));v.position.set(Math.cos(w)*.15,.25,Math.sin(w)*.15),v.rotation.y=-w,v.rotation.x=-.6-T()*.4,e.add(v);const M=new I(new Me(.12,.6,1,3),n);M.position.set(Math.cos(w)*.15,.25,Math.sin(w)*.15),M.rotation.y=-w,M.rotation.x=-.6-T()*.4,e.add(M);for(let E=0;E<6;E++){const b=new I(new Me(.07,.06,1,1),n),S=.06+E*.08,y=E%2===0?1:-1;b.position.set(Math.cos(w)*(.15+.06),S,Math.sin(w)*(.15+.06*y)),b.rotation.y=-w,b.rotation.x=-.8,b.rotation.z=y*.5,e.add(b)}const A=new et({color:8939042,emissive:4469521,emissiveIntensity:.1});for(let E=0;E<3;E++){const b=new I(new K(.008,3,3),A),S=.12+E*.12;b.position.set(Math.cos(w)*(.15+.02),S-.01,Math.sin(w)*(.15+.02)),e.add(b)}}const l=new et({color:B.fernGlow,emissive:B.fernGlow,emissiveIntensity:.3}),c=new I(new K(.04,4,3),l);c.position.y=.35,e.add(c);const h=new I(new Mt(.006,.003,.06,3),l);h.position.set(.02,.37,0),h.rotation.z=-.8,e.add(h);const f=new et({color:15663103,emissive:8960989,emissiveIntensity:.1,transparent:!0,opacity:.5,roughness:0,metalness:.5});for(let m=0;m<3;m++){const w=T()*6.28,v=T()*.2,M=new I(new K(.006+T()*.005,3,3),f);M.position.set(Math.cos(w)*v,.12+T()*.2,Math.sin(w)*v),e.add(M)}const u=new et({color:3811856,roughness:.9,side:zt,transparent:!0,opacity:.6}),d=new I(new Me(.1,.4,1,2),u),g=T()*6.28;d.position.set(Math.cos(g)*.12,.05,Math.sin(g)*.12),d.rotation.x=-1.3,d.rotation.y=g,e.add(d);const _=new $({color:2768928,transparent:!0,opacity:.3});for(let m=0;m<4;m++){const w=new I(new Mt(.001,.001,.015,3),_);w.position.set((T()-.5)*.08,.08+T()*.15,(T()-.5)*.08),w.rotation.z=(T()-.5)*1.5,e.add(w)}const p=new et({color:1708552,roughness:.95});for(let m=0;m<3;m++){const w=new I(new K(.006,3,3),p);w.position.set((T()-.5)*.1,.005,(T()-.5)*.1),e.add(w)}return e.scale.setScalar(o),e.position.set(i,0,t),ht.add(e),{group:e,phase:T()*6.28}}function Ty(i,t){const e=new pe,n=.25+T()*.4,s=new et({color:B.flowerStem,roughness:.8}),o=new I(new Mt(.01,.015,n,4),s);o.position.y=n/2,e.add(o);for(let S=0;S<2;S++){const y=new I(new li(.004,.012,3),s);y.position.set(.012,n*.25+S*n*.25,0),y.rotation.z=-1.2,e.add(y)}const r=new et({color:B.fern,roughness:.7,side:zt}),a=new I(new Me(.06,.04),r);a.position.set(.03,n*.3,0),a.rotation.z=-.5,e.add(a);const l=new I(new Me(.05,.035),r);l.position.set(-.025,n*.5,.01),l.rotation.z=.6,e.add(l);const c=new et({color:1728560,roughness:.7,side:zt});for(let S=0;S<5;S++){const y=S/5*6.28+.3,x=new I(new Me(.025,.02),c);x.position.set(Math.cos(y)*.025,n-.005,Math.sin(y)*.025),x.rotation.x=-1.2,x.rotation.y=-y,e.add(x)}const h=new et({color:B.flower,emissive:B.flowerGlow,emissiveIntensity:.4+T()*.4,transparent:!0,opacity:.85,side:zt});for(let S=0;S<6;S++){const y=S/6*6.28,x=new I(new Me(.05,.04),h);x.position.set(Math.cos(y)*.03,n+.01,Math.sin(y)*.03),x.rotation.x=-.8,x.rotation.y=-y,e.add(x)}const f=new et({color:16777215,emissive:B.flowerGlow,emissiveIntensity:1.2}),u=new I(new K(.02,4,3),f);u.position.y=n+.02,e.add(u);const d=new $({color:16777130,transparent:!0,opacity:.7}),g=new $({color:16772676});for(let S=0;S<3;S++){const y=S/3*6.28+.5,x=new I(new Mt(.002,.002,.025,3),d);x.position.set(Math.cos(y)*.012,n+.03,Math.sin(y)*.012),e.add(x);const R=new I(new K(.005,3,3),g);R.position.set(Math.cos(y)*.012,n+.045,Math.sin(y)*.012),e.add(R)}const _=new $({color:16777164,transparent:!0,opacity:.3});for(let S=0;S<2;S++){const y=new I(new K(.006,3,3),_);y.position.set((T()-.5)*.04,n+.06+T()*.04,(T()-.5)*.04),e.add(y)}const p=new et({color:16772778,emissive:16768324,emissiveIntensity:.2,transparent:!0,opacity:.5,roughness:0,metalness:.4}),m=new I(new K(.006,3,3),p);m.position.set(.005,n+.005,.005),e.add(m);const w=new $({color:15662984}),v=new I(new Mt(.002,.002,.03,3),w);v.position.y=n+.035,e.add(v);const M=new I(new K(.005,3,3),w);M.position.y=n+.055,e.add(M);const A=new et({color:1725728,roughness:.7}),E=new I(new Mt(.015,.02,.02,5),A);E.position.y=n-.01,e.add(E);const b=new $({color:16777215,transparent:!0,opacity:.35});for(let S=0;S<4;S++){const y=S/4*6.28+.3,x=new I(new K(.004,3,3),b);x.position.set(Math.cos(y)*.045,n+.005,Math.sin(y)*.045),e.add(x)}return e.position.set(i,0,t),ht.add(e),{group:e,petalMat:h,phase:T()*6.28,baseH:n}}function Ey(i,t){const e=new pe,n=new et({color:B.reed,emissive:B.reedTip,emissiveIntensity:.05,roughness:.7}),s=new et({color:B.reedTip,emissive:B.reedTip,emissiveIntensity:.15}),o=new et({color:1709328,roughness:.95}),r=new I(new K(.08,5,3),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=3+Math.floor(T()*4),l=new et({color:B.reed,roughness:.7,side:zt});for(let d=0;d<a;d++){const g=.6+T()*1,_=(T()-.5)*.2,p=(T()-.5)*.2,m=new I(new Mt(.008,.015,g,4),n);m.position.set(_,g/2,p),e.add(m);const w=2+Math.floor(T()*2),v=new et({color:2771488,roughness:.7});for(let E=0;E<w;E++){const b=g*.2+E*g*.25,S=new I(new Ae(.012,.004,4,6),v);S.position.set(_,b,p),S.rotation.x=Math.PI/2,e.add(S)}if(T()<.7){const E=.1+T()*.15,b=T()*6.28,S=new I(new Me(.02,E),l);S.position.set(_+Math.cos(b)*.02,g*.4,p+Math.sin(b)*.02),S.rotation.y=-b,S.rotation.x=-.5-T()*.4,e.add(S)}const M=new I(new K(.025,4,3),s);M.scale.set(.8,1.5,.8),M.position.set(_,g+.02,p),e.add(M);const A=new $({color:B.reedTip,transparent:!0,opacity:.4});for(let E=0;E<3;E++){const b=E/3*6.28+T()*.5,S=new I(new Mt(.002,.001,.04,3),A);S.position.set(_+Math.cos(b)*.015,g+.05,p+Math.sin(b)*.015),S.rotation.z=(T()-.5)*.4,e.add(S)}}e.position.set(i,0,t),ht.add(e);const c=new et({color:4864536,roughness:.9,side:zt,transparent:!0,opacity:.5});for(let d=0;d<2;d++){T()*6.28;const g=(T()-.5)*.15,_=new I(new Me(.025,.02),c);_.position.set(g,.2+d*.25,(T()-.5)*.1),_.rotation.set(T()*.5,T(),T()*.5),e.add(_)}const h=new $({color:15654348,transparent:!0,opacity:.25});for(let d=0;d<3;d++){const g=new I(new K(.005,3,3),h);g.position.set((T()-.5)*.15,.8+T()*.6,(T()-.5)*.15),e.add(g)}const f=new et({color:2241312,roughness:.9,transparent:!0,opacity:.2}),u=new I(new Ae(.1,.008,4,8),f);return u.rotation.x=Math.PI/2,u.position.y=.03,e.add(u),{group:e,phase:T()*6.28,swayAmp:.03+T()*.04}}let dn=null;const oo=[],tn=new ge,La=new ot,qd=new ot(B.dandSeed);function Ay(i){const t=new $({color:16777215,transparent:!0,opacity:1});dn=new Ts(wn.dandSeed,t,i),dn.instanceMatrix.setUsage(Le),dn.instanceColor=new Ri(new Float32Array(i*3),3),dn.instanceColor.setUsage(Le),tn.scale.setScalar(0),tn.updateMatrix();for(let e=0;e<i;e++)dn.setMatrixAt(e,tn.matrix),La.copy(qd),dn.setColorAt(e,La),oo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,drift:0});dn.count=i,ht.add(dn)}function Zd(i,t,e){let n=null;for(let o=0;o<oo.length;o++)if(!oo[o].active){n=oo[o];break}if(!n)return;n.x=i+(Math.random()-.5)*.1,n.y=t,n.z=e+(Math.random()-.5)*.1;const s=Math.random()*6.28;n.vx=Math.cos(s)*.5+Math.random()*.3,n.vy=.6+Math.random()*.8,n.vz=Math.sin(s)*.5,n.life=4+Math.random()*5,n.max=n.life,n.active=!0,n.drift=Math.random()*6.28}let $d=0,jd=0,Kd=0;function Ry(i,t,e){$d=i,jd=t,Kd=e}function Cy(i,t){let e=!1;for(let n=0;n<oo.length;n++){const s=oo[n];if(!s.active){tn.position.set(0,-100,0),tn.scale.setScalar(0),tn.updateMatrix(),dn.setMatrixAt(n,tn.matrix);continue}if(s.life-=i,s.life<=0){s.active=!1,tn.position.set(0,-100,0),tn.scale.setScalar(0),tn.updateMatrix(),dn.setMatrixAt(n,tn.matrix);continue}s.drift+=(Math.random()-.5)*1.5*i,s.vx+=Math.sin(s.drift)*.3*i,s.vz+=Math.cos(s.drift)*.2*i,s.vx+=$d*.5*i,s.vz+=jd*.5*i,s.vy+=(.15+Kd*.1-s.vy)*i*.5,s.vx*=.998,s.vy*=.998,s.vz*=.998,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i;const r=s.life/s.max*.7*(.6+Math.sin(t*2+n)*.4),a=.8+Math.sin(t*3+n*.5)*.3;tn.position.set(s.x,s.y,s.z),tn.scale.setScalar(a),tn.updateMatrix(),dn.setMatrixAt(n,tn.matrix),La.copy(qd).multiplyScalar(r),dn.setColorAt(n,La),e=!0}dn.instanceMatrix.needsUpdate=!0,e&&(dn.instanceColor.needsUpdate=!0)}function Py(i,t){const e=new pe,n=.35+T()*.45,s=new et({color:2777128,roughness:.7,side:zt}),o=3+Math.floor(T()*2);for(let v=0;v<o;v++){const M=v/o*6.28+T()*.3,A=new I(new Me(.08,.035),s);A.position.set(Math.cos(M)*.05,.02,Math.sin(M)*.05),A.rotation.x=-1.4,A.rotation.y=-M,e.add(A)}const r=new et({color:B.dandStem,roughness:.8}),a=new I(new Mt(.008,.012,n,4),r);a.position.y=n/2,e.add(a);const l=new $({color:14540236,transparent:!0,opacity:.3});for(let v=0;v<4;v++){const M=n*.2+v*n*.18,A=new I(new Mt(.002,.001,.02,3),l);A.position.set(.01,M,0),A.rotation.z=-.8,e.add(A)}const c=new et({color:B.fern,roughness:.7,side:zt}),h=new I(new Me(.07,.03),c);h.position.set(.03,n*.15,0),h.rotation.z=-.4,e.add(h);const f=new et({color:B.dandHead,emissive:B.dandSeedGlow,emissiveIntensity:.2,transparent:!0,opacity:.85}),u=new I(new K(.07,6,5),f);u.position.y=n+.05,e.add(u);const d=new et({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.5,roughness:0,metalness:.5}),g=new I(new K(.012,4,3),d);g.position.set(.04,n+.07,.03),e.add(g);const _=new $({color:B.dandSeed,transparent:!0,opacity:.7});for(let v=0;v<8;v++){const M=v/8*6.28+T()*.2,A=new I(new li(.015,.05,3),_);A.position.set(Math.cos(M)*.06,n+.05+T()*.04,Math.sin(M)*.06),A.rotation.x=(T()-.5)*.6,A.rotation.z=(T()-.5)*.6,e.add(A);const E=new $({color:16777215,transparent:!0,opacity:.3}),b=new I(new Mt(.001,.001,.03,3),E);b.position.set(Math.cos(M)*.08,n+.08,Math.sin(M)*.08),b.rotation.set((T()-.5)*.5,0,(T()-.5)*.5),e.add(b);const S=new $({color:15658717,transparent:!0,opacity:.15});for(let y=0;y<2;y++){const x=M+(y-.5)*.5,R=new I(new Mt(8e-4,8e-4,.025,3),S);R.position.set(Math.cos(x)*.075,n+.09,Math.sin(x)*.075),R.rotation.set((T()-.5)*.8,0,(T()-.5)*.8),e.add(R)}}const p=new et({color:3811856,roughness:.9});for(let v=0;v<4;v++){const M=v/4*6.28+T()*.5,A=new I(new K(.005,3,3),p);A.scale.set(.6,1.5,.6),A.position.set(Math.cos(M)*.04,n+.04,Math.sin(M)*.04),e.add(A)}const m=new $({color:1716240,transparent:!0,opacity:.15});for(let v=0;v<3;v++){const M=v/3*6.28,A=new I(new Mt(.001,.001,n*.7,3),m);A.position.set(Math.cos(M)*.01,n*.35,Math.sin(M)*.01),e.add(A)}const w=new $({color:13426107,transparent:!0,opacity:.2});for(let v=0;v<5;v++){const M=n*.1+T()*n*.7,A=T()*6.28,E=new I(new Mt(8e-4,8e-4,.012,3),w);E.position.set(Math.cos(A)*.012,M,Math.sin(A)*.012),E.rotation.z=A<3.14?-.8:.8,E.rotation.y=A,e.add(E)}return e.position.set(i,0,t),ht.add(e),{group:e,headMat:f,x:i,z:t,h:n,dispersed:!1,phase:T()*6.28,seedCount:8,regrowTimer:0}}function Iy(i,t,e,n){for(let s=0;s<i.length;s++){const o=i[s];if(o.dispersed){if(o.regrowTimer-=t,o.regrowTimer<=0){o.dispersed=!1;for(let r=2;r<o.group.children.length;r++)o.group.children[r].visible=!0}o.group.rotation.z=Math.sin(e*.9+o.phase)*.02}else{const r=o.x-n.x,a=o.z-n.z;if(r*r+a*a<1.2){o.dispersed=!0;for(let l=0;l<8;l++)Zd(o.x,o.h+.05,o.z);for(let l=2;l<o.group.children.length;l++)o.group.children[l].visible=!1;o.regrowTimer=15+Math.random()*10}else o.group.rotation.z=Math.sin(e*.9+o.phase)*.04,o.headMat.emissiveIntensity=.15+Math.sin(e*1.2+o.phase)*.1}}}function Ly(i,t,e){const n=new pe,s=new et({color:B.jellyBell,emissive:B.jellyGlow,emissiveIntensity:.8,transparent:!0,opacity:.5,roughness:.2,metalness:.1,side:zt}),o=new I(new K(.5,8,6,0,6.28,0,Math.PI/2),s);o.scale.set(1,.6,1),o.position.y=0,n.add(o);const r=new et({color:B.jellyBell,emissive:B.jellyGlow,emissiveIntensity:1,transparent:!0,opacity:.6}),a=new I(new Ae(.48,.025,5,12),r);a.rotation.x=Math.PI/2,a.position.y=-.02,n.add(a);const l=new I(new K(.2,6,4),new $({color:B.jellyGlow,transparent:!0,opacity:.7}));l.position.y=-.05,n.add(l);const c=new $({color:12312063,transparent:!0,opacity:.3});for(let w=-1;w<=1;w+=2){const v=new I(new K(.06,4,3),c);v.scale.set(.6,1.5,.6),v.position.set(w*.08,-.03,0),n.add(v)}const h=new $({color:15663103,transparent:!0,opacity:.7});for(let w=0;w<5;w++){const v=T()*6.28,M=T()*.8,A=new I(new K(.02,3,3),h);A.position.set(Math.cos(v)*M*.35,.1-M*.15,Math.sin(v)*M*.35),n.add(A)}const f=new et({color:B.jellyTent,emissive:B.jellyGlow,emissiveIntensity:.4,transparent:!0,opacity:.4}),u=new $({color:B.jellyGlow,transparent:!0,opacity:.6});for(let w=0;w<6;w++){const v=w/6*6.28,M=.4+T()*.6,A=new I(new Mt(.015,.008,M,3),f);A.position.set(Math.cos(v)*.25,-M/2-.05,Math.sin(v)*.25),n.add(A);const E=new I(new K(.012,3,3),u);E.position.set(Math.cos(v)*.25,-M-.06,Math.sin(v)*.25),n.add(E)}const d=new $({color:B.jellyGlow,transparent:!0,opacity:.12});for(let w=0;w<8;w++){const v=w/8*6.28,M=new I(new Mt(.002,.002,.4,3),d);M.position.set(Math.cos(v)*.2,.05,Math.sin(v)*.2),M.rotation.z=Math.PI/2-.3,M.rotation.y=-v,n.add(M)}const g=new et({color:B.jellyBell,emissive:B.jellyGlow,emissiveIntensity:.6,transparent:!0,opacity:.4});for(let w=0;w<10;w++){const v=w/10*6.28,M=new I(new K(.02,3,3),g);M.scale.set(1,.5,.8),M.position.set(Math.cos(v)*.46,-.04,Math.sin(v)*.46),n.add(M)}const _=new et({color:B.jellyTent,emissive:B.jellyGlow,emissiveIntensity:.5,transparent:!0,opacity:.35}),p=new I(new Mt(.02,.01,.35,4),_);p.position.y=-.2,n.add(p);const m=new $({color:14548991,transparent:!0,opacity:.4});for(let w=0;w<3;w++){const v=w/3*6.28,M=new I(new K(.008,3,3),m);M.position.set(Math.cos(v)*.25,-.55-T()*.3,Math.sin(v)*.25),n.add(M)}return n.position.set(i,t,e),ht.add(n),{group:n,bellMat:s,phase:T()*6.28,driftAng:T()*6.28,homeX:i,homeZ:e,floatY:t,wobble:.5+T()*.5,_init:!0,_state:"drift",_stT:20+Math.random()*30,_migrateAng:0,_pulseSync:0}}function Dy(i,t){const e=new pe,n=new et({color:B.puffBody,emissive:B.puffGlow,emissiveIntensity:.3,roughness:.8}),s=new I(new K(.3,8,6),n);s.position.y=.35,e.add(s);const o=new et({color:16773344,emissive:B.puffGlow,emissiveIntensity:.15,roughness:.9}),r=new I(new K(.18,6,4),o);r.scale.set(.7,.9,.3),r.position.set(0,.32,.2),e.add(r);const a=new I(new K(.22,7,5),n);a.position.y=.65,e.add(a);const l=[];for(let A=-1;A<=1;A+=2){const E=new I(new li(.06,.15,4),n);E.position.set(A*.13,.85,0),E.rotation.z=A*.3,e.add(E),l.push({mesh:E,side:A,baseRotZ:A*.3});const b=new I(new li(.03,.08,4),new et({color:B.puffCheek,emissive:B.puffCheek,emissiveIntensity:.2}));b.position.set(A*.13,.84,.01),b.rotation.z=A*.3,e.add(b),l.push({mesh:b,side:A,baseRotZ:A*.3})}const c=new $({color:B.puffEye}),h=[];for(let A=-1;A<=1;A+=2){const E=new I(new K(.035,4,4),c);E.position.set(A*.09,.68,.18),e.add(E),h.push(E);const b=new $({color:16777215}),S=new I(new K(.012,3,3),b);S.position.set(A*.09+A*.015,.695,.2),e.add(S),h.push(S)}const f=new $({color:4469555}),u=new I(new K(.015,3,3),f);u.position.set(0,.63,.22),e.add(u);const d=new et({color:B.puffCheek,emissive:B.puffCheek,emissiveIntensity:.3});for(let A=-1;A<=1;A+=2){const E=new I(new K(.04,4,3),d);E.position.set(A*.15,.61,.15),e.add(E)}const g=new $({color:15654348,transparent:!0,opacity:.5});for(let A=-1;A<=1;A+=2)for(let E=0;E<2;E++){const b=new I(new Mt(.002,.002,.06,3),g);b.position.set(A*.12,.62-E*.03,.2),b.rotation.z=A*.7+E*A*.2,b.rotation.x=-.1,e.add(b)}for(let A=-1;A<=1;A+=2){const E=new I(new K(.07,4,3),n);E.position.set(A*.12,.07,.05),E.scale.set(1,.5,1.3),e.add(E);const b=new et({color:16755370,emissive:16746632,emissiveIntensity:.1});for(let S=0;S<3;S++){const y=S/3*6.28,x=new I(new K(.012,3,3),b);x.position.set(A*.12+Math.cos(y)*.03,.03,.05+Math.sin(y)*.03),e.add(x)}}const _=new et({color:16777215,emissive:B.puffGlow,emissiveIntensity:.4,roughness:.9}),p=new I(new K(.06,5,4),_);p.position.set(0,.38,-.28),e.add(p);const m=new et({color:B.puffBody,emissive:B.puffGlow,emissiveIntensity:.2,roughness:1});for(let A=0;A<6;A++){const E=T()*6.28,b=T()*1.2,S=new I(new K(.01,3,3),m);S.position.set(Math.cos(E)*.28,.25+b*.2,Math.sin(E)*.28),e.add(S)}const w=new $({color:B.puffBody});for(let A=-1;A<=1;A+=2){const E=new I(new Mt(.003,.003,.04,3),w);E.position.set(A*.09,.72,.17),E.rotation.z=A*.3,e.add(E)}const v=new $({color:5583684,transparent:!0,opacity:.5}),M=new I(new Mt(.002,.002,.03,3),v);return M.position.set(0,.59,.22),M.rotation.z=Math.PI/2,e.add(M),e.position.set(i,0,t),ht.add(e),{group:e,ears:l,eyes:h,tail:p,phase:T()*6.28,wanderAng:T()*6.28,speed:.6+T()*.8,hopTimer:0,hopPhase:T()*6.28,homeX:i,homeZ:t,state:"idle",idleTimer:T()*3,_init:!0,_followT:0,_scaredT:0,_huddleTarget:-1,_baseY:0,_lastTX:i,_lastTZ:t,_blinkTimer:2+Math.random()*4,_blinkState:0}}function Uy(i,t){const e=new pe,n=new et({color:B.deerBody,emissive:B.deerGlow,emissiveIntensity:.5,transparent:!0,opacity:.7,roughness:.3}),s=new I(new K(.4,7,5),n);s.scale.set(1,.8,1.5),s.position.y=.9,e.add(s);const o=new et({color:13431039,emissive:B.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.5}),r=new I(new K(.15,5,4),o);r.scale.set(.8,.6,.5),r.position.set(0,.78,.25),e.add(r);const a=new pe;a.position.set(0,1.15,.3);const l=new I(new Mt(.08,.12,.4,5),n);l.position.set(0,.1,.08),l.rotation.x=-.4,a.add(l);const c=new I(new K(.14,6,5),n);c.position.set(0,.22,.2),a.add(c);const h=new I(new K(.07,4,3),n);h.scale.set(1,.7,1.4),h.position.set(0,.17,.35),a.add(h);const f=new $({color:2245717}),u=new I(new K(.02,3,3),f);u.position.set(0,.17,.43),a.add(u);const d=new $({color:B.deerEye});for(let x=-1;x<=1;x+=2){const R=new I(new K(.025,4,3),d);R.position.set(x*.09,.25,.28),a.add(R);const U=new I(new K(.008,3,3),new $({color:16777215}));U.position.set(x*.085,.26,.29),a.add(U);const D=new $({color:B.deerBody,transparent:!0,opacity:.5}),z=new I(new Mt(.002,.002,.03,3),D);z.position.set(x*.1,.27,.28),z.rotation.z=x*.6,a.add(z)}for(let x=-1;x<=1;x+=2){const R=new I(new li(.04,.14,4),n);R.position.set(x*.1,.37,.15),R.rotation.z=x*.4,a.add(R)}const g=new et({color:B.deerAntler,emissive:B.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.8});for(let x=-1;x<=1;x+=2){const R=new I(new Mt(.015,.02,.25,3),g);R.position.set(x*.08,.42,.12),R.rotation.z=x*.5,a.add(R);const U=new I(new Mt(.01,.015,.15,3),g);U.position.set(x*.15,.55,.1),U.rotation.z=x*.8,a.add(U);const D=new I(new Mt(.008,.012,.1,3),g);D.position.set(x*.11,.5,.16),D.rotation.z=x*.3,D.rotation.x=-.5,a.add(D);const z=new I(new K(.012,3,3),new $({color:B.deerGlow,transparent:!0,opacity:.8}));z.position.set(x*.18,.61,.09),a.add(z)}const _=new et({color:B.deerBody,emissive:B.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),p=new I(new Mt(.01,.02,.1,3),_);p.position.set(0,.11,.28),p.rotation.x=.3,a.add(p);const m=new $({color:1122850});for(let x=-1;x<=1;x+=2){const R=new I(new K(.006,3,3),m);R.position.set(x*.02,.16,.42),a.add(R)}e.add(a);const w=[{x:-.15,z:.3,label:"FL"},{x:.15,z:.3,label:"FR"},{x:-.15,z:-.3,label:"BL"},{x:.15,z:-.3,label:"BR"}],v=new et({color:6715272,emissive:B.deerGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),M=[];for(let x=0;x<4;x++){const R=w[x],U=new pe;U.position.set(R.x,.65,R.z);const D=new I(new Mt(.025,.035,.35,4),n);D.position.y=-.175,U.add(D);const z=new pe;z.position.set(0,-.35,0);const H=new I(new Mt(.02,.03,.3,4),n);H.position.y=-.15,z.add(H);const V=new I(new Mt(.04,.032,.04,4),v);V.position.y=-.3,z.add(V);const Z=new et({color:14544639,emissive:B.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),W=new I(new K(.025,3,3),Z);W.scale.set(1.3,.5,1.3),W.position.y=-.25,z.add(W),U.add(z),e.add(U),M.push({upper:U,lower:z,isFront:x<2,side:R.x<0?-1:1})}const A=new pe;A.position.set(0,1.1,-.55);const E=new I(new li(.05,.15,4),new et({color:16777215,emissive:B.deerGlow,emissiveIntensity:1,transparent:!0,opacity:.8}));A.add(E),e.add(A);const b=new $({color:13434862,transparent:!0,opacity:.3});for(let x=0;x<4;x++){const R=new I(new K(.02,3,3),b);R.position.set((T()-.5)*.25,.8+T()*.3,(T()-.5)*.4),e.add(R)}const S=new $({color:B.deerBody,transparent:!0,opacity:.15});for(let x=0;x<3;x++){const R=new I(new Mt(.002,.002,.2,3),S);R.position.set(.3,.85-x*.06,0),R.rotation.z=Math.PI/2+.3,e.add(R)}const y=new et({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.4,roughness:0,metalness:.5});for(let x=0;x<3;x++){const R=new I(new K(.008,3,3),y);R.position.set((T()-.5)*.3,.9+T()*.3,(T()-.5)*.35),e.add(R)}return e.position.set(i,0,t),ht.add(e),{group:e,mat:n,phase:T()*6.28,wanderAng:T()*6.28,speed:.6+T()*.4,walkTimer:0,legCycle:0,homeX:i,homeZ:t,state:"walk",pauseTimer:0,neckPivot:a,legPivots:M,tailPivot:A,fleeTimer:0,headLook:0,headBob:0,_init:!0,_stT:0,_drinkTgt:null,_zigTimer:0,_zigDir:1,_baseY:0,_lastTX:i,_lastTZ:t}}function Ny(i,t,e){const n=new pe,s=new et({color:B.mothBody,emissive:B.mothGlow,emissiveIntensity:.3,roughness:.7}),o=new I(new Mt(.04,.05,.3,5),s);o.rotation.x=Math.PI/2,n.add(o);const r=new et({color:B.mothBody,emissive:B.mothGlow,emissiveIntensity:.5,roughness:.6});for(let p=0;p<3;p++){const m=new I(new Ae(.045,.006,4,8),r);m.position.z=-.05+p*.06,m.rotation.x=0,n.add(m)}const a=new I(new K(.05,5,4),s);a.position.z=.18,n.add(a);const l=new et({color:1122867,roughness:.2,metalness:.4});for(let p=-1;p<=1;p+=2){const m=new I(new K(.018,4,3),l);m.position.set(p*.03,.01,.21),n.add(m)}for(let p=-1;p<=1;p+=2){const m=new I(new Mt(.005,.005,.15,3),s);m.position.set(p*.03,.03,.22),m.rotation.x=-.6,m.rotation.z=p*.4,n.add(m);const w=new $({color:B.mothGlow,transparent:!0,opacity:.7}),v=new I(new K(.015,3,3),w);v.scale.set(2,.5,1),v.position.set(p*.05,.12,.28),n.add(v)}const c=new et({color:B.mothWing,emissive:B.mothGlow,emissiveIntensity:.8,transparent:!0,opacity:.6,side:zt,roughness:.4});n._wingPivots=[];for(let p=-1;p<=1;p+=2){const m=new pe;m.position.set(p*.04,0,.02);const w=new I(new K(.2,6,4),c);w.scale.set(1.8,.08,1.2),w.position.set(p*.18,0,.02),m.add(w);const v=new I(new K(.12,5,3),c);v.scale.set(1.5,.06,1),v.position.set(p*.12,0,-.1),m.add(v);const M=new et({color:B.mothWing,emissive:B.mothGlow,emissiveIntensity:.6,transparent:!0,opacity:.45,side:zt}),A=new I(new Me(.03,.12),M);A.position.set(p*.1,0,-.18),A.rotation.y=p*.2,m.add(A);const E=new $({color:B.mothSpot,transparent:!0,opacity:.9}),b=new I(new K(.03,4,3),E);b.position.set(p*.2,.02,.03),m.add(b);const S=new I(new K(.018,3,3),E);S.position.set(p*.1,.02,-.08),m.add(S);const y=new $({color:B.mothGlow,transparent:!0,opacity:.25});for(let x=0;x<2;x++){const R=new I(new Mt(.002,.002,.2,3),y);R.position.set(p*.15,.01,-.02+x*.06),R.rotation.z=Math.PI/2+p*(.15+x*.15),m.add(R)}n.add(m),n._wingPivots.push({pivot:m,side:p})}const h=new $({color:B.mothGlow,transparent:!0,opacity:.25});for(let p=0;p<3;p++){const m=new I(new K(.008,3,3),h);m.position.set((T()-.5)*.04,0,-.15-p*.05),n.add(m)}const f=new $({color:4473907,transparent:!0,opacity:.5}),u=new I(new Ae(.015,.003,4,8,Math.PI*1.5),f);u.position.set(0,-.02,.2),u.rotation.x=.4,n.add(u);const d=new et({color:B.mothBody,emissive:B.mothGlow,emissiveIntensity:.4,roughness:1});for(let p=0;p<5;p++){const m=T()*6.28,w=new I(new K(.008,3,3),d);w.position.set(Math.cos(m)*.04,Math.sin(m)*.04,T()*.15-.05),n.add(w)}const g=new $({color:B.mothBody,transparent:!0,opacity:.4});for(let p=-1;p<=1;p+=2)for(let m=0;m<3;m++){const w=new I(new Mt(.002,.002,.06,3),g);w.position.set(p*.04,-.03,-.05+m*.06),w.rotation.z=p*.8,w.rotation.x=-.3,n.add(w)}const _=new $({color:B.mothGlow,transparent:!0,opacity:.35});for(let p=-1;p<=1;p+=2)for(let m=0;m<5;m++){const w=m/5*Math.PI-Math.PI/2,v=new I(new K(.006,3,3),_);v.position.set(p*(.3+Math.cos(w)*.05),Math.sin(w)*.02,.02+m*.04),n.add(v)}return n.position.set(i,t,e),ht.add(n),{group:n,wingMat:c,phase:T()*6.28,orbitAng:T()*6.28,orbitR:2+T()*4,centerX:i,centerZ:e,floatY:t,flapSpeed:6+T()*4,_init:!0,_state:"patrol",_stT:0,_attractTarget:null,_restTree:null}}function zy(i,t,e){const n=new pe,s=new $({color:B.wispCore}),o=new I(new K(.08,6,4),s);n.add(o);const r=new $({color:16777215,transparent:!0,opacity:.7,wireframe:!0}),a=new I(new ms(.06,0),r);n.add(a);const l=new $({color:B.wispGlow,transparent:!0,opacity:.5}),c=new I(new K(.18,6,4),l);n.add(c);const h=new $({color:B.wispGlow,transparent:!0,opacity:.25}),f=new I(new Ae(.22,.008,4,12),h);f.rotation.x=Math.PI/2,n.add(f);const u=new $({color:B.wispTrail,transparent:!0,opacity:.15}),d=new I(new K(.35,5,4),u);n.add(d);const g=new $({color:16777215,transparent:!0,opacity:.8}),_=new I(new K(.02,3,3),g);_.position.set(.15,0,0),n.add(_);const p=[];for(let b=0;b<3;b++){const S=new $({color:B.wispCore,transparent:!0,opacity:.35}),y=new I(new K(.01,3,3),S);y.position.set((T()-.5)*.1,-.1-b*.08,(T()-.5)*.1),n.add(y),p.push(y)}const m=new $({color:B.wispGlow,transparent:!0,opacity:.18}),w=[];for(let b=0;b<3;b++){const S=b/3*6.28+T()*.5,y=.15+T()*.1,x=new I(new Mt(.003,.001,y,3),m);x.position.set(Math.cos(S)*.1,T()*.08,Math.sin(S)*.1),x.rotation.z=Math.PI/3*(S<3.14?1:-1),x.rotation.y=S,n.add(x),w.push({mesh:x,baseAng:S})}const v=new $({color:B.wispGlow,transparent:!0,opacity:.12}),M=new I(new Ae(.26,.005,4,10),v);M.rotation.x=1.2,M.rotation.z=.8,n.add(M);const A=new $({color:16777215,transparent:!0,opacity:.5});for(let b=0;b<4;b++){const S=T()*6.28,y=T()*.8,x=new I(new K(.006,3,3),A);x.position.set(Math.cos(S)*.06,Math.sin(y)*.06,Math.sin(S)*.06),n.add(x)}const E=new $({color:B.wispCore,transparent:!0,opacity:.2});for(let b=0;b<4;b++){const S=new I(new K(.004,3,3),E);S.position.set(.03+T()*.04,-.05-b*.04,T()*.04),n.add(S)}return n.scale.setScalar(.5),n.position.set(i,t,e),ht.add(n),{group:n,glowMat:l,hazeMat:u,embers:p,tendrils:w,plasmaMat:m,facet:a,halo:f,halo2:M,phase:T()*6.28,targetX:i,targetY:t,targetZ:e,velX:0,velY:0,velZ:0,scatter:0}}function Fy(i,t){const e=new pe,n=ql,s=8+Math.floor(T()*5),o=new et({color:B.fairyMush,emissive:B.fairyGlow,emissiveIntensity:.2,roughness:.5}),r=new et({color:B.mushStem,roughness:.7,emissive:B.fairyGlow,emissiveIntensity:.05});for(let A=0;A<s;A++){const E=A/s*6.28+T()*.15,b=n+T()*.3-.15,S=.15+T()*.2,y=new I(wn.mushStem,r);y.scale.setScalar(S),y.position.set(Math.cos(E)*b,S*.3,Math.sin(E)*b),e.add(y);const x=new I(wn.mushCap,o);x.scale.set(S,S*.4,S),x.position.set(Math.cos(E)*b,S*.55,Math.sin(E)*b),e.add(x);const R=new $({color:16777215,transparent:!0,opacity:.7}),U=new I(new K(S*.08,3,3),R);U.position.set(Math.cos(E)*b,S*.6,Math.sin(E)*b),e.add(U)}const a=new et({color:8934792,emissive:B.fairyGlow,emissiveIntensity:.1,roughness:.6});for(let A=0;A<5;A++){const E=T()*6.28,b=n+T()*.6-.3,S=.06+T()*.06,y=new I(wn.mushCap,a);y.scale.set(S,S*.5,S),y.position.set(Math.cos(E)*b,S*.35,Math.sin(E)*b),e.add(y)}const l=new et({color:1725733,emissive:664080,emissiveIntensity:.05,roughness:.9});for(let A=0;A<4;A++){const E=T()*6.28,b=T()*n*.8,S=new I(new K(.08+T()*.08,4,3),l);S.scale.set(1.5,.2,1.5),S.position.set(Math.cos(E)*b,.01,Math.sin(E)*b),e.add(S)}const c=new et({color:4478310,emissive:B.fairyGlow,emissiveIntensity:.05,roughness:.85}),h=new I(new K(.12,5,3),c);h.scale.set(1.2,.3,1),h.position.y=.03,e.add(h);const f=new $({color:B.fairyGlow,transparent:!0,opacity:.2}),u=[];for(let A=0;A<8;A++){const E=new I(new K(.012,3,3),f),b=(T()-.5)*n*.8,S=(T()-.5)*n*.8;E.position.set(b,.05+T()*.3,S),e.add(E),u.push({mesh:E,baseX:b,baseZ:S,drift:T()*6.28,speed:.2+T()*.3})}const d=new $({color:B.fairyRing,transparent:!0,opacity:0,side:zt}),g=new I(new _o(.3,n-.3,16),d);g.rotation.x=-Math.PI/2,g.position.y=.02,e.add(g);const _=new $({color:B.fairyGlow,transparent:!0,opacity:.08});for(let A=0;A<6;A++){const E=T()*6.28,b=E+.5+T()*1.5,S=n*.6+T()*n*.4,y=new I(new Mt(.002,.002,S,3),_);y.position.set(Math.cos((E+b)/2)*n*.4,.005,Math.sin((E+b)/2)*n*.4),y.rotation.x=Math.PI/2,y.rotation.z=E,e.add(y)}const p=new et({color:4864560,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<3;A++){const E=T()*6.28,b=T()*n*.7,S=new I(new K(.03,4,3),p);S.scale.set(1.3,.3,1.3),S.position.set(Math.cos(E)*b,.008,Math.sin(E)*b),e.add(S)}const m=new et({color:7833702,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<2;A++){const E=new I(new Ve(.02+T()*.02,4),m);E.position.set((T()-.5)*.08,.06,(T()-.5)*.06),E.rotation.x=-Math.PI/2+T()*.4,e.add(E)}const w=[];for(let A=0;A<5;A++){const E=T()*6.28,b=T()*n*.9,S=new $({color:8978346,transparent:!0,opacity:.25}),y=new I(new K(.005,3,3),S);y.position.set(Math.cos(E)*b,.01,Math.sin(E)*b),e.add(y),w.push(y)}const v=new $({color:657926,transparent:!0,opacity:.15,side:zt}),M=new I(new _o(n*.5,n*.85,12),v);return M.rotation.x=-Math.PI/2,M.position.y=.008,e.add(M),e.position.set(i,0,t),ht.add(e),{group:e,mushMat:o,discMat:d,sporeMat:f,spores:u,glowWorms:w,x:i,z:t,ringR:n,phase:T()*6.28,glowIntensity:0,active:!1}}function Oy(i,t,e){const n=new pe,s=new et({color:B.bubbleIris,emissive:B.bubbleIris,emissiveIntensity:.15,transparent:!0,opacity:.25,roughness:0,metalness:.6}),o=new I(wn.bubble,s);n.add(o);const r=new $({color:15650047,transparent:!0,opacity:.1}),a=new I(new Ae(.13,.003,4,10),r);a.rotation.x=.5,a.rotation.y=T()*3,n.add(a);const l=new I(new Ae(.11,.003,4,10),r);l.rotation.x=-.8,l.rotation.z=1.2,n.add(l);const c=new $({color:B.bubbleShine,transparent:!0,opacity:.5}),h=new I(new K(.04,4,3),c);h.position.set(.05,.07,.08),n.add(h);const f=new $({color:15658751,transparent:!0,opacity:.2}),u=new I(new K(.025,3,3),f);u.position.set(-.06,-.04,-.06),n.add(u);const d=new $({color:16755438,transparent:!0,opacity:.12}),g=new I(new K(.06,4,3),d);g.position.set(.02,-.02,.01),n.add(g);const _=new $({color:16772863,transparent:!0,opacity:.08}),p=new I(new K(.12,5,4),_);n.add(p);const m=[16764125,13426175,14548940];for(let S=0;S<3;S++){const y=new $({color:m[S],transparent:!0,opacity:.06}),x=new I(new Ae(.14-S*.02,.002,4,8),y);x.position.y=-.04+S*.04,x.rotation.x=Math.PI/2,n.add(x)}const w=new $({color:16777215,transparent:!0,opacity:.6});for(let S=0;S<3;S++){const y=T()*6.28,x=T()*Math.PI-Math.PI/2,R=new I(new K(.003,3,3),w);R.position.set(Math.cos(y)*Math.cos(x)*.14,Math.sin(x)*.14,Math.sin(y)*Math.cos(x)*.14),n.add(R)}const v=new $({color:11189196,transparent:!0,opacity:.1}),M=new I(new K(.015,3,3),v);M.position.set((T()-.5)*.04,(T()-.5)*.04,(T()-.5)*.04),n.add(M);const A=new $({color:B.bubbleIris,transparent:!0,opacity:.15}),E=new I(new K(.04,4,3),A);E.scale.set(1.3,.6,1.3),E.position.y=-.12,n.add(E);const b=.6+T()*.8;return n.scale.setScalar(b),n.position.set(i,t,e),ht.add(n),{group:n,shellMat:s,phase:T()*6.28,driftAng:T()*6.28,driftSpeed:.3+T()*.5,floatY:t,homeX:i,homeZ:e,bobAmp:.3+T()*.4,popped:!1,popTimer:0,sc:b}}function By(i,t){const e=new pe,n=1.5+T()*1,s=new et({color:329746,roughness:.9}),o=new I(new Ve(n*.85,10),s);o.rotation.x=-Math.PI/2,o.position.y=.005,e.add(o);const r=new et({color:B.pondWater,emissive:B.pondGlow,emissiveIntensity:.2,transparent:!0,opacity:.55,roughness:.05,metalness:.4}),a=new I(new Ve(n,12),r);a.rotation.x=-Math.PI/2,a.position.y=.03,e.add(a);const l=new et({color:3816002,roughness:.85}),c=5+Math.floor(T()*4);for(let D=0;D<c;D++){const z=D/c*6.28+T()*.3,H=n+T()*.2-.1,V=.06+T()*.08,Z=new I(new K(V,4,3),l);Z.scale.set(1+T()*.5,.4+T()*.3,1+T()*.5),Z.position.set(Math.cos(z)*H,V*.2,Math.sin(z)*H),Z.rotation.set(T(),T(),T()),e.add(Z)}const h=new et({color:1725728,roughness:.7,side:zt});for(let D=0;D<3;D++){const z=T()*6.28,H=n*.85+T()*.2;for(let V=0;V<3;V++){const Z=new I(new Me(.015,.15+T()*.1),h);Z.position.set(Math.cos(z)*H+(T()-.5)*.05,.08,Math.sin(z)*H+(T()-.5)*.05),Z.rotation.y=T()*3,Z.rotation.x=-.2,e.add(Z)}}const f=new $({color:11197934,transparent:!0,opacity:.08}),u=[];for(let D=0;D<3;D++){const z=new I(new Ae(1,.004,4,20),f.clone());z.rotation.x=Math.PI/2,z.position.y=.036,e.add(z),u.push({mesh:z,phase:D/3})}const d=new et({color:B.lilyPad,roughness:.6,side:zt}),g=4+Math.floor(T()*2),_=[];for(let D=0;D<g;D++){const z=T()*6.28,H=T()*n*.6,V=.15+T()*.15,Z=new I(new Ve(V,8),d);Z.rotation.x=-Math.PI/2,Z.position.set(Math.cos(z)*H,.05,Math.sin(z)*H),e.add(Z);const W=new $({color:1724448,transparent:!0,opacity:.3}),lt=new I(new Mt(.002,.002,V*1.5,3),W);lt.position.set(Math.cos(z)*H,.052,Math.sin(z)*H),lt.rotation.x=Math.PI/2,lt.rotation.z=T()*3,e.add(lt),_.push({mesh:Z,phase:T()*6.28})}const p=new et({color:B.lilyFlower,emissive:B.lilyGlow,emissiveIntensity:.4,transparent:!0,opacity:.85,side:zt}),m=.08;for(let D=0;D<6;D++){const z=D/6*6.28,H=new I(new Me(.06,.05),p);H.position.set(_[0].mesh.position.x+Math.cos(z)*.05,m,_[0].mesh.position.z+Math.sin(z)*.05),H.rotation.x=-1,H.rotation.y=-z,e.add(H)}const w=new et({color:16777130,emissive:B.lilyGlow,emissiveIntensity:.8}),v=new I(new K(.025,4,3),w);if(v.position.set(_[0].mesh.position.x,m+.02,_[0].mesh.position.z),e.add(v),_.length>2){const D=new et({color:B.lilyFlower,emissive:B.lilyGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),z=new I(new K(.03,5,4),D);z.scale.set(.8,1.2,.8),z.position.set(_[2].mesh.position.x,.09,_[2].mesh.position.z),e.add(z)}const M=new et({color:3815477,roughness:.8,transparent:!0,opacity:.5});for(let D=0;D<5;D++){const z=T()*6.28,H=T()*n*.7,V=new I(new K(.02+T()*.025,4,3),M);V.scale.set(1+T()*.5,.4,1+T()*.5),V.position.set(Math.cos(z)*H,.015,Math.sin(z)*H),e.add(V)}const A=new $({color:2761752,transparent:!0,opacity:.12,side:zt});for(let D=0;D<3;D++){const z=T()*6.28,H=T()*n*.5,V=new I(new Ve(.08+T()*.06,5),A);V.rotation.x=-Math.PI/2,V.position.set(Math.cos(z)*H,.012,Math.sin(z)*H),e.add(V)}const E=new et({color:1122837,roughness:.7,transparent:!0,opacity:.4}),b=[];for(let D=0;D<2;D++){const z=T()*6.28,H=T()*n*.4,V=new I(new K(.012,4,3),E);V.scale.set(.8,.5,1.3),V.position.set(Math.cos(z)*H,.04,Math.sin(z)*H),e.add(V);const Z=new I(new Mt(.002,.001,.025,3),E);Z.position.set(Math.cos(z)*H-Math.cos(z)*.02,.04,Math.sin(z)*H-Math.sin(z)*.02),Z.rotation.z=Math.PI/2,Z.rotation.y=z,e.add(Z),b.push({body:V,tail:Z,ang:z,orbR:.15+T()*n*.35,speed:.3+T()*.4})}const S=new $({color:2250016,transparent:!0,opacity:.1,side:zt});for(let D=0;D<3;D++){const z=T()*6.28,H=n*.7+T()*n*.25,V=new I(new Ve(.06+T()*.04,5),S);V.rotation.x=-Math.PI/2,V.position.set(Math.cos(z)*H,.032,Math.sin(z)*H),e.add(V)}const y=new $({color:13426158,transparent:!0,opacity:.06}),x=new I(new Ae(n-.05,.01,4,16),y);x.rotation.x=Math.PI/2,x.position.y=.035,e.add(x);const R=new et({color:4861976,roughness:.8,side:zt,transparent:!0,opacity:.6}),U=new I(new Ve(.03,5),R);return U.rotation.x=-Math.PI/2,U.position.set((T()-.5)*n*.5,.04,(T()-.5)*n*.5),e.add(U),e.position.set(i,0,t),ht.add(e),{group:e,waterMat:r,flMat:p,pads:_,ripples:u,tadpoles:b,x:i,z:t,phase:T()*6.28,pondR:n}}function ky(i,t){const e=new pe,n=new $({color:B.orbGold}),s=new I(new K(.2,10,8),n);e.add(s);const o=new $({color:16777215}),r=new I(new K(.06,6,4),o);e.add(r);const a=new $({color:16772744,transparent:!0,opacity:.4,wireframe:!0}),l=new I(new ms(.15,0),a);e.add(l);const c=new $({color:B.orbGlow,transparent:!0,opacity:.5}),h=new I(new K(.35,8,6),c);e.add(h);const f=new $({color:B.orbGlow,transparent:!0,opacity:.3});for(let b=0;b<8;b++){const S=b/8*6.28,y=new I(new li(.02,.25,3),f);y.position.set(Math.cos(S)*.3,Math.sin(S*2)*.05,Math.sin(S)*.3),y.rotation.z=-S+Math.PI/2,y.rotation.y=S,e.add(y)}const u=new $({color:B.orbInner,transparent:!0,opacity:.15}),d=new I(new K(.6,8,5),u);e.add(d);for(let b=0;b<6;b++){const S=new I(new K(.03,4,3),new $({color:16777215})),y=b/6*6.28;S.position.set(Math.cos(y)*.4,Math.sin(y*2)*.1,Math.sin(y)*.4),e.add(S)}const g=new $({color:B.orbGold,transparent:!0,opacity:.7});for(let b=0;b<4;b++){const S=b/4*6.28+.4,y=new I(new K(.015,3,3),g);y.position.set(Math.cos(S)*.5,0,Math.sin(S)*.5),e.add(y)}const _=new $({color:16768426,transparent:!0,opacity:.12});for(let b=0;b<3;b++){const S=new I(new Ae(.28,.003,4,12),_);S.rotation.set(b*1.05,b*.7,0),e.add(S)}const p=new $({color:B.orbGlow,transparent:!0,opacity:.08}),m=new I(new Ae(.4,.004,4,16),p);m.rotation.x=Math.PI/2,e.add(m);const w=new $({color:16772812,transparent:!0,opacity:.15}),v=new I(new Ae(.25,.012,4,10),w);v.rotation.x=Math.PI/2,e.add(v);const M=new $({color:16777215,transparent:!0,opacity:.5});for(let b=0;b<6;b++){const S=T()*6.28,y=T()*Math.PI-Math.PI/2,x=new I(new K(.008,3,3),M);x.position.set(Math.cos(S)*Math.cos(y)*.2,Math.sin(y)*.2,Math.sin(S)*Math.cos(y)*.2),e.add(x)}const A=new $({color:B.orbGlow,transparent:!0,opacity:.1,side:zt}),E=new I(new Ve(.5,8),A);return E.rotation.x=-Math.PI/2,E.position.y=-.95,e.add(E),e.position.set(i,1,t),ht.add(e),{group:e,coreMat:n,glowMat:c,hazeMat:u,x:i,z:t,found:!1,flyUp:!1,flyY:1,phase:T()*6.28,laserLine:null,laserMat:null}}function Gy(i,t){const e=new pe,n=new et({color:B.rockBase,roughness:.85,metalness:.05}),s=new et({color:B.rockLight,roughness:.8,metalness:.05}),o=new et({color:B.rockMoss,emissive:B.rockMoss,emissiveIntensity:.03,roughness:.9}),r=.3+T()*.5,a=new I(new K(r,8,6),T()<.6?n:s),l=.4+T()*.4;a.scale.set(1+T()*.6,l,1+T()*.6),a.position.y=r*l*.35,a.rotation.set(T()*.5,T()*3,T()*.3),a.castShadow=!0,a.receiveShadow=!0,e.add(a);const c=1+Math.floor(T()*3);for(let E=0;E<c;E++){const b=T()*6.28,S=r*.6+T()*r*.5,y=r*.3+T()*r*.4,x=new I(new K(y,5,4),T()<.5?n:s),R=.3+T()*.4;x.scale.set(1+T()*.5,R,1+T()*.5),x.position.set(Math.cos(b)*S,y*R*.3,Math.sin(b)*S),x.rotation.set(T()*.8,T()*3,T()*.5),e.add(x)}const h=2+Math.floor(T()*3);for(let E=0;E<h;E++){const b=T()*6.28,S=T()*r*.6,y=r*.15+T()*r*.2,x=new I(new K(y,4,3),o);x.scale.set(1.5,.2,1.5),x.position.set(Math.cos(b)*S,r*.35+T()*.05,Math.sin(b)*S),e.add(x)}const f=[8943428,10061909,6715221,11180390];for(let E=0;E<3;E++){const b=new et({color:f[Math.floor(T()*f.length)],roughness:.9,transparent:!0,opacity:.5}),S=T()*6.28,y=new I(new K(r*.06+T()*r*.08,3,3),b);y.scale.set(2,.15,2),y.position.set(Math.cos(S)*r*.5,r*.25+T()*.1,Math.sin(S)*r*.5),e.add(y)}const u=new $({color:1381656,transparent:!0,opacity:.35}),d=2+Math.floor(T()*3);for(let E=0;E<d;E++){const b=T()*6.28,S=r*.3+T()*r*.4,y=new I(new Mt(.003,.001,S,3),u),x=r*.3+T()*r*.2;y.position.set(Math.cos(b)*x,r*.2+T()*r*.15,Math.sin(b)*x),y.rotation.set(T()*.5,b,Math.PI/2+T()*.4),e.add(y)}const g=new $({color:660752,transparent:!0,opacity:.2,side:zt}),_=1+Math.floor(T()*2);for(let E=0;E<_;E++){const b=T()*6.28,S=r*.3+T()*r*.3,y=new I(new Me(.02+T()*.015,S),g);y.position.set(Math.cos(b)*r*.45,r*.15,Math.sin(b)*r*.45),y.rotation.y=-b,e.add(y)}const p=[],m=new $({color:8965375,transparent:!0,opacity:.4});if(T()<.5){const E=2+Math.floor(T()*3);for(let b=0;b<E;b++){const S=T()*6.28,y=r*.25+T()*r*.25,x=new I(new K(.006,3,3),m);x.position.set(Math.cos(S)*y,r*.15+T()*r*.2,Math.sin(S)*y),e.add(x),p.push(x)}}const w=new $({color:657926,transparent:!0,opacity:.12,side:zt}),v=new I(new _o(r*.5,r*1,8),w);v.rotation.x=-Math.PI/2,v.position.y=.005,e.add(v);const M=new et({color:3816e3,roughness:.9}),A=4+Math.floor(T()*3);for(let E=0;E<A;E++){const b=T()*6.28,S=r*.5+T()*r*.6,y=.03+T()*.05,x=new I(new K(y,3,3),M);x.scale.set(1+T()*.5,.4,1+T()*.5),x.position.set(Math.cos(b)*S,y*.15,Math.sin(b)*S),e.add(x)}if(T()<.6){const E=new et({color:3385941,emissive:B.grassTip,emissiveIntensity:.05,roughness:.7,side:zt});for(let b=0;b<3;b++){const S=T()*6.28,y=new I(new Me(.015,.08+T()*.06),E);y.position.set(Math.cos(S)*r*.3,r*.3,Math.sin(S)*r*.3),y.rotation.y=T()*3,y.rotation.x=-.2-T()*.3,e.add(y)}}return e.position.set(i,0,t),ht.add(e),{group:e,x:i,z:t,colR:r*.8,sparkles:p,sparkleMat:m}}let Jd=null,Qd=null,tp=null,ep=null,ch=[];function Hy(){return Jd}function Vy(){return Qd}function Wy(){return tp}function Xy(){return ep}function Yy(){return ch}function qy(){const i=new pe,t=new et({color:B.obeliskBlack,roughness:.2,metalness:.8,emissive:B.obeliskPink,emissiveIntensity:0});Qd=t;const e=new I(new Mt(1.2,1.8,_e,4),t);e.position.y=_e/2,e.rotation.y=Math.PI/4,e.castShadow=!0,i.add(e);const n=new $({color:3351108,transparent:!0,opacity:.2});for(let S=0;S<4;S++){const y=S/4*6.28+Math.PI/4,x=new I(new Mt(.03,.04,_e*.9,3),n);x.position.set(Math.cos(y)*1.55,_e*.45,Math.sin(y)*1.55),i.add(x)}const s=new $({color:B.obeliskPink,transparent:!0,opacity:0});for(let S=0;S<4;S++){const y=S/4*6.28+Math.PI/4;for(let R=0;R<3;R++){const U=6+R*4,D=new I(new Mt(.015,.015,.8,3),s);D.position.set(Math.cos(y)*1.6,U,Math.sin(y)*1.6),D.rotation.z=Math.PI/2,D.rotation.y=-y,D.visible=!1,i.add(D)}const x=new I(new Mt(.012,.012,2.5,3),s);x.position.set(Math.cos(y)*1.6,12,Math.sin(y)*1.6),x.visible=!1,i.add(x)}const o=new et({color:B.obeliskBlack,roughness:.1,metalness:.9,emissive:B.obeliskPink,emissiveIntensity:0});tp=o;const r=new I(new li(1.3,3,4),o);r.position.y=_e+1.5,r.rotation.y=Math.PI/4,i.add(r);const a=new $({color:B.obeliskPink,transparent:!0,opacity:0});for(let S=0;S<4;S++){const y=S/4*6.28+Math.PI/4,x=new I(new Mt(.02,.02,3.2,3),a);x.position.set(Math.cos(y)*.8,_e+1.5,Math.sin(y)*.8),x.rotation.z=.35*(y<3.14?1:-1),x.rotation.y=-y,x.visible=!1,i.add(x)}for(let S=0;S<5;S++){const y=new I(new Ae(1.85-S*.02,.04,6,4),new $({color:2236979}));y.position.y=4+S*5,y.rotation.x=Math.PI/2,i.add(y)}const l=new et({color:1118488,roughness:.3,metalness:.7}),c=new I(new Mt(2.2,2.5,.6,4),l);c.position.y=.3,c.rotation.y=Math.PI/4,i.add(c);const h=new I(new Mt(2.8,3,.4,4),l);h.position.y=.05,h.rotation.y=Math.PI/4,i.add(h);const f=new $({color:B.obeliskPink,transparent:!0,opacity:0});for(let S=0;S<8;S++){const y=S/8*6.28,x=new I(new K(.06,4,3),f);x.position.set(Math.cos(y)*2.5,_e*.7+S*.5,Math.sin(y)*2.5),x.visible=!1,i.add(x)}const u=new $({color:1710626,transparent:!0,opacity:.08});for(let S=0;S<6;S++){const y=T()*6.28,x=2+T()*_e*.7,R=new I(new Mt(.008,.008,.5+T()*.5,3),u);R.position.set(Math.cos(y)*1.6,x,Math.sin(y)*1.6),R.rotation.z=(T()-.5)*.8,R.rotation.y=-y,i.add(R)}const d=new et({color:921108,roughness:.5,metalness:.4});for(let S=0;S<12;S++){const y=T()*6.28,x=3+T()*2,R=.15+T()*.25,U=new I(new K(R,4,3),d);U.scale.set(1+T()*.5,.3+T()*.3,1+T()*.5),U.position.set(Math.cos(y)*x,R*.15,Math.sin(y)*x),U.rotation.set(T(),T(),T()),i.add(U)}const g=new $({color:B.obeliskPink,transparent:!0,opacity:0});for(let S=0;S<4;S++){const y=S/4*6.28+Math.PI/4;for(let x=0;x<5;x++){const R=5+x*3.5+T()*.5,U=(T()-.5)*.4,D=new I(new K(.04,4,3),g);D.position.set(Math.cos(y)*1.58+Math.cos(y+1.57)*U,R,Math.sin(y)*1.58+Math.sin(y+1.57)*U),D.visible=!1,i.add(D)}}const _=new $({color:B.obeliskPink,transparent:!0,opacity:.8,blending:Se,depthWrite:!1}),p=new I(new K(.5,12,8),_);p.position.y=_e+3,i.add(p);const m=new $({color:B.obeliskPink,transparent:!0,opacity:.2,blending:Se,depthWrite:!1}),w=new I(new K(.9,8,6),m);w.position.y=_e+3,i.add(w),ep={mesh:p,haze:w,mat:_,hazeMat:m},ch=[];const v=[.8,1.1,1.4,1.8],M=[11158783,10040302,12277247,8921821];for(let S=0;S<4;S++){const y=new $({color:M[S],transparent:!0,opacity:.4,blending:Se,depthWrite:!1,side:zt}),x=new I(new Ae(v[S],.02,6,24),y);x.position.y=_e+3,x.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),i.add(x),ch.push({mesh:x,mat:y,rx:(Math.random()-.5)*2,ry:(Math.random()-.5)*2,rz:(Math.random()-.5)*1.5})}const A=new $({color:0,transparent:!0,opacity:.15,side:zt}),E=new I(new Ve(4,8),A);E.rotation.x=-Math.PI/2,E.position.y=.005,i.add(E),i.position.set(0,-_e,0),ht.add(i),Jd=i;const b=new Es(8939212,0,30);i.add(b),b.position.set(0,_e+1,0)}let np=null,ip=null;function Zy(){return np}function $y(){return ip}function jy(){const i=new et({color:B.moatBlue,emissive:1136042,emissiveIntensity:.3,transparent:!0,opacity:0,roughness:.1,metalness:.3});ip=i;const t=new Vl;t.absarc(0,0,6,0,6.28,!1);const e=new Ta;e.absarc(0,0,3,0,6.28,!0),t.holes.push(e);const n=new Ea(t,24),s=new I(n,i);s.rotation.x=-Math.PI/2,s.position.y=.05,s.visible=!1,ht.add(s),np=s;const o=new $({color:4491468,transparent:!0,opacity:0});for(let d=0;d<12;d++){const g=d/12*6.28+T()*.3,_=3.5+T()*2,p=new I(new K(.04+T()*.04,4,3),o);p.scale.set(1.2,.4,1.2),p.position.set(Math.cos(g)*_,.02,Math.sin(g)*_),p.visible=!1,ht.add(p)}const r=new $({color:13426158,transparent:!0,opacity:0,side:zt});for(let d=0;d<6;d++){const g=d/6*6.28+T()*.5,_=new I(new Ve(.12+T()*.1,5),r);_.rotation.x=-Math.PI/2,_.position.set(Math.cos(g)*3.3,.06,Math.sin(g)*3.3),_.visible=!1,ht.add(_)}const a=new $({color:8960989,transparent:!0,opacity:0});for(let d=0;d<8;d++){const g=d/8*6.28,_=4+T()*1.5,p=new I(new Mt(.003,.003,.4,3),a);p.position.set(Math.cos(g)*_,.055,Math.sin(g)*_),p.rotation.x=Math.PI/2,p.rotation.z=g+Math.PI/2,p.visible=!1,ht.add(p)}const l=new $({color:264208,transparent:!0,opacity:0,side:zt}),c=new Vl;c.absarc(0,0,5.2,0,6.28,!1);const h=new Ta;h.absarc(0,0,3.8,0,6.28,!0),c.holes.push(h);const f=new Ea(c,16),u=new I(f,l);u.rotation.x=-Math.PI/2,u.position.y=.04,u.visible=!1,ht.add(u)}const lr=[];function Pf(i,t,e,n,s){const o=[],r=[],a=[];for(let c=0;c<e;c++){const h=i[c],f=i[c+1],u=f.x-h.x;f.y-h.y;const d=f.z-h.z,g=Math.sqrt(u*u+d*d)||1,_=-d/g,p=u/g,m=(c+.5)/e,w=.7+Math.sin(m*Math.PI)*.5,v=t*w/2,M=[h.x+_*v,h.y,h.z+p*v],A=[h.x-_*v,h.y,h.z-p*v],E=[f.x+_*v,f.y,f.z+p*v],b=[f.x-_*v,f.y,f.z-p*v];o.push(...M,...E,...A,...A,...E,...b);const S=c/e,y=(c+1)/e;if(a.push(S,0,y,0,S,1,S,1,y,0,y,1),s){const U=.85+Math.sin(m*Math.PI*3)*.15,D=1.2*U,z=.6*U;r.push(s.r*D,s.g*D,s.b*D),r.push(s.r*D,s.g*D,s.b*D),r.push(s.r*z,s.g*z,s.b*z),r.push(s.r*z,s.g*z,s.b*z),r.push(s.r*D,s.g*D,s.b*D),r.push(s.r*z,s.g*z,s.b*z)}}const l=new ye;return l.setAttribute("position",new Gt(o,3)),l.setAttribute("uv",new Gt(a,2)),r&&l.setAttribute("color",new Gt(r,3)),l.computeVertexNormals(),l}function Ky(){for(let l=0;l<6;l++){const c=B.rainbow[l],h=l/6*6.28,f=6+l*.8,u=_e+6+l*2.5,d=1-l*.05,g=[],_=32;for(let H=0;H<=_;H++){const V=H/_,Z=h+V*Math.PI,W=Math.cos(Z)*f,lt=Math.sin(Z)*f,ft=Math.sin(V*Math.PI)*u;g.push(new N(W,ft,lt))}const p=new ot(c),m=Pf(g,d,_,!0,p),w=new $({vertexColors:!0,transparent:!0,opacity:0,side:zt,depthWrite:!1,blending:Se}),v=new I(m,w);v.visible=!1,ht.add(v);const M=new Va(g),A=new $({color:16777215,transparent:!0,opacity:0,blending:Se,depthWrite:!1}),E=new Yn(M,_,.03,4,!1),b=new I(E,A);b.visible=!1,ht.add(b);const S=[],y=new $({color:16777215,transparent:!0,opacity:0,blending:Se,depthWrite:!1});for(let H=0;H<8;H++){const V=new I(new K(.06,4,3),y.clone());V.visible=!1,ht.add(V),S.push({mesh:V,mat:V.material,phase:H/8,speed:.15+Math.random()*.1})}const x=new $({color:c,transparent:!0,opacity:0,side:zt,blending:Se}),R=g[0],U=g[g.length-1],D=new I(new Ve(1.2,8),x);D.rotation.x=-Math.PI/2,D.position.set(R.x,.03,R.z),D.visible=!1,ht.add(D);const z=new I(new Ve(1.2,8),x.clone());z.rotation.x=-Math.PI/2,z.position.set(U.x,.03,U.z),z.visible=!1,ht.add(z),lr.push({mesh:v,mat:w,coreLine:b,coreMat:A,curve:M,sparkles:S,pools:[D,z],poolMat:x,targetOpacity:0})}const i=[],t=10,e=_e+14,n=32;for(let l=0;l<=n;l++){const c=l/n,h=c*Math.PI;i.push(new N(Math.cos(h)*t,Math.sin(c*Math.PI)*e,Math.sin(h)*t))}const s=new ot(15654399),o=Pf(i,1.5,n,!0,s),r=new $({vertexColors:!0,transparent:!0,opacity:0,side:zt,depthWrite:!1,blending:Se}),a=new I(o,r);a.visible=!1,ht.add(a),lr.push({mesh:a,mat:r,targetOpacity:0})}function Jy(i){for(let t=0;t<lr.length;t++){const e=lr[t];if(!(!e.sparkles||!e.curve)&&e.mesh.visible){e.coreLine&&(e.coreLine.visible=e.mesh.visible,e.coreMat.opacity=e.mat.opacity*.4);for(let n=0;n<e.sparkles.length;n++){const s=e.sparkles[n];s.phase+=s.speed*.016,s.phase>1&&(s.phase-=1);const o=e.curve.getPoint(s.phase);s.mesh.position.copy(o),s.mesh.visible=e.mesh.visible;const r=Math.sin(i*8+n*2.1)*.5+.5;s.mat.opacity=e.mat.opacity*r*.7}if(e.pools)for(let n=0;n<e.pools.length;n++)e.pools[n].visible=e.mesh.visible,e.poolMat&&(e.poolMat.opacity=e.mat.opacity*.3)}}}let pn=null;const Kn=[],en=new ge,Qo=new ot;function Qy(i){const t=new $({color:16777215,transparent:!0,opacity:1});pn=new Ts(wn.fly,t,i),pn.instanceMatrix.setUsage(Le),pn.instanceColor=new Ri(new Float32Array(i*3),3),pn.instanceColor.setUsage(Le),en.scale.setScalar(0),en.updateMatrix();for(let e=0;e<i;e++){pn.setMatrixAt(e,en.matrix);const n=e%3===0?B.fireflyB:B.firefly;Qo.setHex(n),pn.setColorAt(e,Qo),Kn.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,phase:Math.random()*6.28,wander:Math.random()*6.28,colorHex:n})}pn.count=i,ht.add(pn)}function ua(i,t,e,n){let s=null;for(let o=0;o<Kn.length;o++)if(!Kn[o].active){s=Kn[o];break}if(!s){let o=1/0;for(let r=0;r<Kn.length;r++)Kn[r].life<o&&(o=Kn[r].life,s=Kn[r])}s.x=i,s.y=t+.5+Math.random()*3,s.z=e,s.vx=(Math.random()-.5)*2,s.vy=Math.random()-.5,s.vz=(Math.random()-.5)*2,s.life=n,s.max=n,s.active=!0,s.wander=Math.random()*6.28}function sp(i,t){let e=0,n=!1;for(let s=0;s<Kn.length;s++){const o=Kn[s];if(!o.active){en.position.set(0,-100,0),en.scale.setScalar(0),en.updateMatrix(),pn.setMatrixAt(s,en.matrix);continue}if(o.life-=i,o.life<=0){o.active=!1,en.position.set(0,-100,0),en.scale.setScalar(0),en.updateMatrix(),pn.setMatrixAt(s,en.matrix);continue}e++,o.wander+=(Math.random()-.5)*3*i,o.vx+=Math.cos(o.wander)*1.5*i,o.vz+=Math.sin(o.wander)*1.5*i,o.vy+=Math.sin(t*2+o.phase)*i,o.vx*=.995,o.vy*=.995,o.vz*=.995,o.x+=o.vx*i,o.y+=o.vy*i,o.z+=o.vz*i;const r=ne(o.x,o.z)+.3;o.y<r&&(o.y=r,o.vy=Math.abs(o.vy)*.5),o.y>12&&(o.vy-=2*i);const a=Math.sin(t*3+o.phase)*.5+.5,c=o.life/o.max*(.4+a*.6),h=.6+a*.6;en.position.set(o.x,o.y,o.z),en.scale.setScalar(h),en.updateMatrix(),pn.setMatrixAt(s,en.matrix),Qo.setHex(o.colorHex),Qo.multiplyScalar(c),pn.setColorAt(s,Qo),n=!0}return pn.instanceMatrix.needsUpdate=!0,n&&(pn.instanceColor.needsUpdate=!0),e}let mn=null;const Jn=[],nn=new ge,Da=new ot,tw=new ot(B.spore);function ew(i){const t=new $({color:16777215,transparent:!0,opacity:1});mn=new Ts(wn.spore,t,i),mn.instanceMatrix.setUsage(Le),mn.instanceColor=new Ri(new Float32Array(i*3),3),mn.instanceColor.setUsage(Le),nn.scale.setScalar(0),nn.updateMatrix();for(let e=0;e<i;e++)mn.setMatrixAt(e,nn.matrix),Da.setHex(B.spore),mn.setColorAt(e,Da),Jn.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});mn.count=i,ht.add(mn)}function nw(i,t,e){let n=null;for(let s=0;s<Jn.length;s++)if(!Jn[s].active){n=Jn[s];break}if(!n){let s=1/0;for(let o=0;o<Jn.length;o++)Jn[o].life<s&&(s=Jn[o].life,n=Jn[o])}n.x=i,n.y=t,n.z=e,n.vx=(Math.random()-.5)*.3,n.vy=.4+Math.random()*.4,n.vz=(Math.random()-.5)*.3,n.life=3+Math.random()*3,n.max=n.life,n.active=!0}let op=0,rp=0;function iw(i,t){op=i,rp=t}function sw(i){let t=0,e=!1;for(let n=0;n<Jn.length;n++){const s=Jn[n];if(!s.active){nn.position.set(0,-100,0),nn.scale.setScalar(0),nn.updateMatrix(),mn.setMatrixAt(n,nn.matrix);continue}if(s.life-=i,s.life<=0){s.active=!1,nn.position.set(0,-100,0),nn.scale.setScalar(0),nn.updateMatrix(),mn.setMatrixAt(n,nn.matrix);continue}t++,s.vy+=.3*i,s.vx+=op*.3*i,s.vz+=rp*.3*i,s.vx*=.997,s.vy*=.997,s.vz*=.997,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i;const o=s.life/s.max*.7;nn.position.set(s.x,s.y,s.z),nn.scale.setScalar(1),nn.updateMatrix(),mn.setMatrixAt(n,nn.matrix),Da.copy(tw).multiplyScalar(o),mn.setColorAt(n,Da),e=!0}return mn.instanceMatrix.needsUpdate=!0,e&&(mn.instanceColor.needsUpdate=!0),t}let gn=null;const ro=[];let Gc=0;const sn=new ge,Ua=new ot,ap=new ot(B.starMote);function ow(i){const t=new $({color:16777215,transparent:!0,opacity:1});gn=new Ts(wn.starMote,t,i),gn.instanceMatrix.setUsage(Le),gn.instanceColor=new Ri(new Float32Array(i*3),3),gn.instanceColor.setUsage(Le),sn.scale.setScalar(0),sn.updateMatrix();for(let e=0;e<i;e++)gn.setMatrixAt(e,sn.matrix),Ua.copy(ap),gn.setColorAt(e,Ua),ro.push({x:0,y:0,z:0,life:0,max:0,active:!1,vy:0,drift:0});gn.count=i,ht.add(gn)}function rw(i){let t=null;for(let e=0;e<ro.length;e++)if(!ro[e].active){t=ro[e];break}t&&(t.x=i.x+(Math.random()-.5)*60,t.z=i.z+(Math.random()-.5)*60,t.y=15+Math.random()*20,t.life=6+Math.random()*6,t.max=t.life,t.active=!0,t.vy=-.15-Math.random()*.3,t.drift=Math.random()*6.28)}function cp(i,t,e){Gc+=i,Gc>.15&&(Gc=0,rw(e));let n=!1;for(let s=0;s<ro.length;s++){const o=ro[s];if(!o.active){sn.position.set(0,-100,0),sn.scale.setScalar(0),sn.updateMatrix(),gn.setMatrixAt(s,sn.matrix);continue}if(o.life-=i,o.life<=0||o.y<.5){o.active=!1,sn.position.set(0,-100,0),sn.scale.setScalar(0),sn.updateMatrix(),gn.setMatrixAt(s,sn.matrix);continue}o.y+=o.vy*i,o.drift+=(Math.random()-.5)*.5*i,o.x+=Math.sin(o.drift)*.1*i,o.z+=Math.cos(o.drift)*.08*i;const r=o.life/o.max,a=Math.sin(t*4+s)*.3+.7,l=r*a*.7,c=.5+a*.5;sn.position.set(o.x,o.y,o.z),sn.scale.setScalar(c),sn.updateMatrix(),gn.setMatrixAt(s,sn.matrix),Ua.copy(ap).multiplyScalar(l),gn.setColorAt(s,Ua),n=!0}gn.instanceMatrix.needsUpdate=!0,n&&(gn.instanceColor.needsUpdate=!0)}let xn=null;const ao=[],on=new ge,Na=new ot,lp=new ot(8956535);function aw(i){const t=new $({color:16777215,transparent:!0,opacity:1});xn=new Ts(wn.dustMote,t,i),xn.instanceMatrix.setUsage(Le),xn.instanceColor=new Ri(new Float32Array(i*3),3),xn.instanceColor.setUsage(Le),on.scale.setScalar(0),on.updateMatrix();for(let e=0;e<i;e++)xn.setMatrixAt(e,on.matrix),Na.copy(lp),xn.setColorAt(e,Na),ao.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});xn.count=i,ht.add(xn)}function If(i,t,e){for(let n=0;n<e;n++){let s=null;for(let a=0;a<ao.length;a++)if(!ao[a].active){s=ao[a];break}if(!s)continue;const o=Math.random()*6.28,r=1+Math.random()*2;s.x=i+Math.cos(o)*.2,s.y=ne(i,t)+.1,s.z=t+Math.sin(o)*.2,s.vx=Math.cos(o)*r,s.vy=.5+Math.random()*1.5,s.vz=Math.sin(o)*r,s.life=.6+Math.random()*.6,s.max=s.life,s.active=!0}}function cw(i){let t=!1;for(let e=0;e<ao.length;e++){const n=ao[e];if(!n.active){on.position.set(0,-100,0),on.scale.setScalar(0),on.updateMatrix(),xn.setMatrixAt(e,on.matrix);continue}if(n.life-=i,n.life<=0){n.active=!1,on.position.set(0,-100,0),on.scale.setScalar(0),on.updateMatrix(),xn.setMatrixAt(e,on.matrix);continue}n.vy-=3*i,n.vx*=.96,n.vy*=.96,n.vz*=.96,n.x+=n.vx*i,n.y+=n.vy*i,n.z+=n.vz*i;const s=ne(n.x,n.z)+.05;n.y<s&&(n.y=s,n.vy=0,n.vx*=.8,n.vz*=.8);const o=n.life/n.max*.4;on.position.set(n.x,n.y,n.z),on.scale.setScalar(1),on.updateMatrix(),xn.setMatrixAt(e,on.matrix),Na.copy(lp).multiplyScalar(o),xn.setColorAt(e,Na),t=!0}xn.instanceMatrix.needsUpdate=!0,t&&(xn.instanceColor.needsUpdate=!0)}let _n=null;const co=[],rn=new ge,za=new ot,hp=new ot(B.bubblePop),lw=new K(.02,3,3);function hw(i){const t=new $({color:16777215,transparent:!0,opacity:1});_n=new Ts(lw,t,i),_n.instanceMatrix.setUsage(Le),_n.instanceColor=new Ri(new Float32Array(i*3),3),_n.instanceColor.setUsage(Le),rn.scale.setScalar(0),rn.updateMatrix();for(let e=0;e<i;e++)_n.setMatrixAt(e,rn.matrix),za.copy(hp),_n.setColorAt(e,za),co.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});_n.count=i,ht.add(_n)}function uw(i,t,e,n){for(let s=0;s<n;s++){let o=null;for(let c=0;c<co.length;c++)if(!co[c].active){o=co[c];break}if(!o)continue;const r=Math.random()*6.28,a=Math.random()*3.14,l=1+Math.random()*2;o.x=i,o.y=t,o.z=e,o.vx=Math.cos(r)*Math.sin(a)*l,o.vy=Math.cos(a)*l,o.vz=Math.sin(r)*Math.sin(a)*l,o.life=.4+Math.random()*.4,o.max=o.life,o.active=!0}}function fw(i){let t=!1;for(let e=0;e<co.length;e++){const n=co[e];if(!n.active){rn.position.set(0,-100,0),rn.scale.setScalar(0),rn.updateMatrix(),_n.setMatrixAt(e,rn.matrix);continue}if(n.life-=i,n.life<=0){n.active=!1,rn.position.set(0,-100,0),rn.scale.setScalar(0),rn.updateMatrix(),_n.setMatrixAt(e,rn.matrix);continue}n.vy-=2*i,n.vx*=.97,n.vy*=.97,n.vz*=.97,n.x+=n.vx*i,n.y+=n.vy*i,n.z+=n.vz*i;const s=n.life/n.max*.8;rn.position.set(n.x,n.y,n.z),rn.scale.setScalar(1),rn.updateMatrix(),_n.setMatrixAt(e,rn.matrix),za.copy(hp).multiplyScalar(s),_n.setColorAt(e,za),t=!0}_n.instanceMatrix.needsUpdate=!0,t&&(_n.instanceColor.needsUpdate=!0)}let vn=null;const lo=[],Ze=new ge,Fa=new ot,up=[new ot(B.leafGlow),new ot(3394662),new ot(2271880),new ot(5636044),new ot(4513262)];let fp=0,dp=0;function dw(i,t,e){fp=i,dp=t}function pw(i){const t=new Me(.12,.08),e=new $({color:16777215,transparent:!0,opacity:1,side:zt,depthWrite:!1,blending:Se});vn=new Ts(t,e,i),vn.instanceMatrix.setUsage(Le),vn.instanceColor=new Ri(new Float32Array(i*3),3),vn.instanceColor.setUsage(Le),Ze.scale.setScalar(0),Ze.updateMatrix();for(let n=0;n<i;n++)vn.setMatrixAt(n,Ze.matrix),Fa.setHex(0),vn.setColorAt(n,Fa),lo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,rvx:0,rvy:0,rvz:0,life:0,max:0,active:!1,colorIdx:0});vn.count=i,ht.add(vn)}function mw(i,t,e){let n=null;for(let o=0;o<lo.length;o++)if(!lo[o].active){n=lo[o];break}if(!n)return;n.x=i+(Math.random()-.5)*2,n.y=t+Math.random()*2,n.z=e+(Math.random()-.5)*2;const s=Math.random()*6.28;n.vx=Math.cos(s)*.3,n.vy=-.2-Math.random()*.3,n.vz=Math.sin(s)*.3,n.rvx=(Math.random()-.5)*4,n.rvy=(Math.random()-.5)*3,n.rvz=(Math.random()-.5)*2,n.rx=Math.random()*6.28,n.ry=Math.random()*6.28,n.rz=Math.random()*6.28,n.life=4+Math.random()*4,n.max=n.life,n.active=!0,n.colorIdx=Math.floor(Math.random()*up.length)}function gw(i,t){let e=!1;for(let n=0;n<lo.length;n++){const s=lo[n];if(!s.active){Ze.position.set(0,-100,0),Ze.scale.setScalar(0),Ze.updateMatrix(),vn.setMatrixAt(n,Ze.matrix);continue}if(s.life-=i,s.life<=0||s.y<-.5){s.active=!1,Ze.position.set(0,-100,0),Ze.scale.setScalar(0),Ze.updateMatrix(),vn.setMatrixAt(n,Ze.matrix);continue}s.vx+=fp*.4*i,s.vz+=dp*.4*i,s.vx+=Math.sin(t*3+n*1.7)*.5*i,s.vz+=Math.cos(t*2.5+n*2.1)*.3*i,s.vy-=.3*i,s.vx*=.995,s.vy=Math.max(s.vy,-.8),s.vz*=.995,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i,s.rx+=s.rvx*i,s.ry+=s.rvy*i,s.rz+=s.rvz*i;const o=s.life/s.max,r=o*(.6+Math.sin(t*2+n*.8)*.4),a=.8+o*.4;Ze.position.set(s.x,s.y,s.z),Ze.rotation.set(s.rx,s.ry,s.rz),Ze.scale.setScalar(a),Ze.updateMatrix(),vn.setMatrixAt(n,Ze.matrix),Fa.copy(up[s.colorIdx]).multiplyScalar(r),vn.setColorAt(n,Fa),e=!0}vn.instanceMatrix.needsUpdate=!0,e&&(vn.instanceColor.needsUpdate=!0)}const Wi=[],lh=[];let Lf=_e+2;function pp(i,t,e,n){const s=[];for(let r=0;r<=12;r++){const a=r/12,l=i*(1-a*a),c=t*(1-a*a),h=e+(n-e)*a;s.push(new N(l,h,c))}return{curve:new Va(s),pts:s}}function xw(i,t,e,n){const s=n||_e+2,o=e+15,r=new Md(new N(i,e,t),new N(i,o,t)),a=new $({color:B.laserPink,transparent:!0,opacity:0,blending:Se,depthWrite:!1}),l=new I(new Yn(r,1,.06,6,!1),a);ht.add(l);const c=new $({color:B.laserGlow,transparent:!0,opacity:0,blending:Se,depthWrite:!1}),h=new I(new Yn(r,1,.2,6,!1),c);ht.add(h);const{curve:f}=pp(i,t,o,s),u=new $({color:B.laserPink,transparent:!0,opacity:0,blending:Se,depthWrite:!1}),d=new I(new Yn(f,16,.05,6,!1),u);ht.add(d);const g=new $({color:B.laserGlow,transparent:!0,opacity:0,blending:Se,depthWrite:!1}),_=new I(new Yn(f,16,.18,6,!1),g);ht.add(_);const p={upTube:l,upGlow:h,bendTube:d,bendGlow:_,mat:a,glowMat:c,bendMat:u,bendGlowMat:g,fromX:i,fromZ:t,floatY:e,skyY:o,tipY:s,animPhase:0,animTimer:0};Wi.push(p);for(let m=0;m<Wi.length-1;m++){const w=Wi[m],v=(p.skyY+w.skyY)/2,M=[];for(let x=0;x<=8;x++){const R=x/8,U=p.fromX*(1-R)+w.fromX*R,D=p.fromZ*(1-R)+w.fromZ*R,z=v+Math.sin(R*Math.PI)*3;M.push(new N(U,z,D))}const A=new Va(M),E=new $({color:B.laserGlow,transparent:!0,opacity:0,blending:Se,depthWrite:!1}),b=new I(new Yn(A,10,.03,4,!1),E);ht.add(b);const S=new $({color:B.laserPink,transparent:!0,opacity:0,blending:Se,depthWrite:!1}),y=new I(new Yn(A,10,.1,4,!1),S);ht.add(y),lh.push({tube:b,glow:y,mat:E,glowMat:S,opacity:0})}return p}function _w(i){for(let t=0;t<Wi.length;t++){const e=Wi[t];e.tipY=i;const{curve:n}=pp(e.fromX,e.fromZ,e.skyY,i);ht.remove(e.bendTube),e.bendTube.geometry.dispose(),e.bendTube.geometry=new Yn(n,16,.05,6,!1),ht.add(e.bendTube),ht.remove(e.bendGlow),e.bendGlow.geometry.dispose(),e.bendGlow.geometry=new Yn(n,16,.18,6,!1),ht.add(e.bendGlow)}}function vw(i,t,e){const n=e||_e+2;Math.abs(n-Lf)>.1&&Wi.length>0&&(_w(n),Lf=n);for(let s=0;s<Wi.length;s++){const o=Wi[s];if(o.animTimer+=i,o.animPhase===0){const r=Math.min(o.animTimer/.5,1);o.mat.opacity=r*.8,o.glowMat.opacity=r*.3,o.animTimer>.5&&(o.animPhase=1,o.animTimer=0)}else if(o.animPhase===1){const r=Math.min(o.animTimer/.8,1);o.bendMat.opacity=r*.7,o.bendGlowMat.opacity=r*.2,o.mat.opacity=.8,o.glowMat.opacity=.3,o.animTimer>.8&&(o.animPhase=2)}else{const r=Math.sin(t*3+s*1.2)*.5+.5;o.mat.opacity=.5+r*.4,o.glowMat.opacity=.15+r*.15,o.bendMat.opacity=.4+r*.3,o.bendGlowMat.opacity=.1+r*.12}}for(let s=0;s<lh.length;s++){const o=lh[s];o.opacity=Math.min(o.opacity+i*.5,.3);const r=Math.sin(t*2+s*.8)*.5+.5;o.mat.opacity=o.opacity*(.6+r*.4),o.glowMat.opacity=o.opacity*(.2+r*.15)}}const Mw=new ot(B.orbGold),yw=new ot(16777215);let Xs=0,Fn="SEEK",Bi=-_e,fn=0,Go=[],Nn=null,Ho=null,Vo=null,Oe=null,rs=[],as=null,hh=null,_i=[],Wo=null,mp=null,gp=null,uh=[],fh=[],dh=[],ph=[];const Js=200;let On=null;const Jh=[];let xp=!1;function ww(){if(On)return;const i=new ye,t=new Float32Array(Js*3),e=new Float32Array(Js*3),n=new Float32Array(Js);i.setAttribute("position",new We(t,3)),i.setAttribute("color",new We(e,3)),i.setAttribute("size",new We(n,1)),i.attributes.position.setUsage(Le),i.attributes.color.setUsage(Le),i.attributes.size.setUsage(Le);const s=new zh({size:.3,vertexColors:!0,transparent:!0,opacity:.9,blending:Se,depthWrite:!1,sizeAttenuation:!0});On=new gd(i,s),On.visible=!1,ht.add(On);const o=new ot(B.obeliskPink),r=new ot(11158783);for(let a=0;a<Js;a++){const l=Math.random()<.7?o:r;e[a*3]=l.r*(.8+Math.random()*.4),e[a*3+1]=l.g*(.8+Math.random()*.4),e[a*3+2]=l.b*(.8+Math.random()*.4),n[a]=.15+Math.random()*.25,Jh.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,active:!1,sparklePhase:Math.random()*6.28})}i.attributes.color.needsUpdate=!0,i.attributes.size.needsUpdate=!0}function Sw(i,t,e){xp=!0,On.visible=!0;for(let n=0;n<Js;n++){const s=Jh[n];s.x=i,s.y=t,s.z=e;const o=Math.random()*6.28,r=Math.random()*Math.PI,a=2+Math.random()*5;s.vx=Math.sin(r)*Math.cos(o)*a,s.vy=Math.cos(r)*a*.5+Math.random()*2,s.vz=Math.sin(r)*Math.sin(o)*a,s.life=5+Math.random()*6,s.active=!0}}function bw(i,t){if(!On||!On.visible)return;const e=On.geometry.attributes.position.array,n=On.geometry.attributes.size.array;let s=!1;for(let o=0;o<Js;o++){const r=Jh[o];if(!r.active){e[o*3+1]=-100,n[o]=0;continue}if(s=!0,r.life-=i,r.life<=0||r.y<-1){r.active=!1;continue}r.vy-=1.5*i,r.vx*=.995,r.vz*=.995,r.vx+=Math.sin(t*3+o*.7)*.3*i,r.vz+=Math.cos(t*2.5+o*1.1)*.2*i,r.x+=r.vx*i,r.y+=r.vy*i,r.z+=r.vz*i,e[o*3]=r.x,e[o*3+1]=r.y,e[o*3+2]=r.z;const a=Math.sin(t*6+r.sparklePhase)*.5+.5,l=Math.min(r.life/2,1);n[o]=(.15+a*.2)*l}On.geometry.attributes.position.needsUpdate=!0,On.geometry.attributes.size.needsUpdate=!0,s||(On.visible=!1)}function Tw(i){Go=i.orbs,Nn=i.obeliskGroup,Ho=i.obeliskMat,Vo=i.obeliskGlowMat,Oe=i.pinnacleOrb,rs=i.pinnacleRings||[],as=i.moatMesh,hh=i.moatMat,_i=i.rainbowArcs,Wo=i.player,mp=i.makeLaser,gp=i.orbHudEl,uh=i.deers||[],fh=i.puffs||[],dh=i.jellies||[],ph=i.moths||[],ww()}function Ew(i,t){let e=null,n=1/0;for(let l=0;l<Go.length;l++){const c=Go[l];if(c.found)continue;const h=c.x-Wo.pos.x,f=c.z-Wo.pos.z,u=h*h+f*f;u<n&&(n=u,e=c)}if(e&&n<Ws*Ws){const l=Math.sin(t*2+e.phase)*.5+.5;ko.position.set(e.x,1,e.z),ko.intensity=1+l*2,ko.distance=Ws}else ko.intensity=0;for(let l=0;l<Go.length;l++){const c=Go[l];if(!(c.found&&!c.flyUp&&!c._flashing)){if(!c.found){const h=Math.sin(t*1.5+c.phase)*.5+.5;c.group.position.y=c.flyY+Math.sin(t*.8+c.phase)*.3,c.glowMat.opacity=.3+h*.4,c.hazeMat.opacity=.08+h*.12;const f=c.x-Wo.pos.x,u=c.z-Wo.pos.z,d=f*f+u*u,g=Ws*Ws;if(d<g){const _=1-Math.sqrt(d)/Ws,p=_*_;c.glowMat.opacity=Math.min(.3+h*.4+p*.5,1),c.hazeMat.opacity=Math.min(.08+h*.12+p*.25,.6),c.coreMat.color.copy(yw).lerp(Mw,1-p);const m=1+p*.3;c.group.scale.setScalar(m)}else c.group.scale.setScalar(1);for(let _=3;_<c.group.children.length;_++){const p=c.group.children[_],m=(_-3)/6*6.28+t*1.5;p.position.x=Math.cos(m)*.4,p.position.z=Math.sin(m)*.4,p.position.y=Math.sin(m*2+t)*.1}if(d<yf*yf){c.found=!0,c._flashing=!0,c._flashTimer=0,c.flyY=c.group.position.y,Xs++;const _=gp||document.getElementById("orb-hud");_&&(_.innerHTML="✦ "+Xs+" / "+Zs),Fn==="SEEK"&&(Fn="RISING")}}if(c._flashing){c._flashTimer+=i;const h=Math.min(c._flashTimer/1.5,1),f=h<.3?h/.3:1-(h-.3)/.7;c.glowMat.opacity=.5+f*.5,c.hazeMat.opacity=.3+f*.5,c.group.scale.setScalar(1+f*.6),c.group.position.x=c.x+Math.sin(t*30)*f*.05,c.group.position.z=c.z+Math.cos(t*25)*f*.05,c._flashTimer>1.5&&(c._flashing=!1,c.flyUp=!0,c.group.position.x=c.x,c.group.position.z=c.z)}if(c.flyUp){const h=_e+5;c.flyY+=(h-c.flyY)*i*.8,c.group.position.y=c.flyY;const f=Math.min((c.flyY-1)/(h-1),1);if(c.group.scale.setScalar(1-f*.6),c.glowMat.opacity=.8-f*.5,c.flyY>h-1&&!c.laserLine){c.flyUp=!1,c.group.visible=!1;const u=Df();c.laserLine=mp(c.x,c.z,0,u)}}}}const s=_e/Zs,o=-_e+Xs*s;if(Bi<o-.01?(Bi+=8*i,Bi>o&&(Bi=o),Nn&&(Nn.position.y=Bi,Nn.position.x=Math.sin(t*25)*.04,Nn.position.z=Math.cos(t*30)*.03)):Nn&&(Nn.position.x*=.9,Nn.position.z*=.9),Xs>=Zs&&Bi>=-.01&&Fn==="RISING"&&(Fn="COMPLETE",fn=0),Nn){Nn.rotation.y+=i*.03;const l=Nn.children[Nn.children.length-1];if(l&&l.isLight){const c=Math.max(0,Math.min(1,(Bi+_e)/_e));l.intensity=c*1.5*(.8+Math.sin(t*1.5)*.2)}}if(Oe&&Oe.mesh.visible){const l=Math.sin(t*2)*.5+.5;Oe.mat.opacity=.6+l*.3,Oe.hazeMat.opacity=.15+l*.12;const c=Xs/Zs;Oe.mat.opacity*=.3+c*.7,Oe.hazeMat.opacity*=.2+c*.8}for(let l=0;l<rs.length;l++){const c=rs[l];if(!c.mesh.visible)continue;c.mesh.rotation.x+=c.rx*i,c.mesh.rotation.y+=c.ry*i,c.mesh.rotation.z+=c.rz*i;const h=Xs/Zs;c.mat.opacity=(.15+h*.35)*(.8+Math.sin(t*1.5+l)*.2)}const a=Df();if(vw(i,t,a),bw(i,t),Fn==="COMPLETE"){fn+=i;const l=Math.min(fn/3,1);if(Ho&&(Ho.emissiveIntensity=l*1.5),Vo&&(Vo.emissiveIntensity=l*2.5),Oe&&Oe.mesh.visible&&fn>1&&fn<3){const c=Math.min((fn-1)/1.5,1);Oe.mat.opacity=.9+c*.1,Oe.hazeMat.opacity=.5+c*.5,Oe.mesh.scale.setScalar(1+c*.5),Oe.haze.scale.setScalar(1+c*1);for(let h=0;h<rs.length;h++){const f=rs[h];f.mesh.rotation.x+=f.rx*i*(1+c*4),f.mesh.rotation.y+=f.ry*i*(1+c*4),f.mesh.rotation.z+=f.rz*i*(1+c*4)}}if(Oe&&Oe.mesh.visible&&fn>=3&&!xp){const c=new N;Oe.mesh.getWorldPosition(c),Sw(c.x,c.y,c.z),Oe.mesh.visible=!1,Oe.haze.visible=!1;for(let h=0;h<rs.length;h++)rs[h].mesh.visible=!1}if(fn>3&&hh){const c=Math.min((fn-3)/4,1);hh.opacity=c*.6,as&&(as.visible||(as.visible=!0),as.position.y=.05+Math.sin(t*3)*.02*c)}if(fn>4)for(let c=0;c<_i.length;c++){const h=c*.3,f=Math.min(Math.max((fn-4-h)/2,0),1);f>0&&!_i[c].mesh.visible&&(_i[c].mesh.visible=!0),_i[c].mat.opacity=f*.55,_i[c].mesh.rotation.y+=i*.1*(c+1)*.3}if(fn>3){const c=Math.min((fn-3)/6,1)*2;for(let h=0;h<uh.length;h++){const f=uh[h],u=f.group,d=-u.position.x,g=-u.position.z,_=Math.sqrt(d*d+g*g);_>8?(f.wanderAng=Math.atan2(-u.position.x,-u.position.z),f.state="walk",f.speed=1.5*c,u.position.x+=d/_*f.speed*i,u.position.z+=g/_*f.speed*i,u.rotation.y=f.wanderAng):f.state="pause"}for(let h=0;h<fh.length;h++){const f=fh[h],u=f.group,d=-u.position.x,g=-u.position.z,_=Math.sqrt(d*d+g*g);_>8&&(f.wanderAng=Math.atan2(-u.position.x,-u.position.z),f.state="hop",f.hopTimer=f.hopTimer%1.2,u.position.x+=d/_*1.5*c*i,u.position.z+=g/_*1.5*c*i)}for(let h=0;h<dh.length;h++){const f=dh[h],u=f.group;u.position.x+=(0-u.position.x)*i*.15*c,u.position.z+=(0-u.position.z)*i*.15*c}for(let h=0;h<ph.length;h++){const f=ph[h];f.centerX+=(0-f.centerX)*i*.2*c,f.centerZ+=(0-f.centerZ)*i*.2*c,f.orbitR=Math.max(f.orbitR-i*.3*c,2)}}fn>12&&(Fn="FINALE")}if(Fn==="FINALE"){Ho&&(Ho.emissiveIntensity=1.5+Math.sin(t*.5)*.3),Vo&&(Vo.emissiveIntensity=2.5+Math.sin(t*.7)*.5),as&&(as.position.y=.05+Math.sin(t*3)*.02);for(let l=0;l<_i.length;l++)_i[l].mesh.rotation.y+=i*.1*(l+1)*.3,_i[l].mat.opacity=.45+Math.sin(t+l)*.1}}function Df(){return Bi+_e+3}const Aw=600;let jr=.25,Ie=1,Uf=.85,Ue="NIGHT",Xo=null,Yo=null,mh=null,qo=null,fa=null;const Nf=[{label:"DUSK",sky:new ot(923685),fog:new ot(791584),fogDensity:.009,moonInt:.6,moonCol:new ot(14527112),moonElev:15,ambSky:new ot(4469589),ambGnd:new ot(2238488),ambInt:.6,stars:.4,bio:.7,plRange:16,plInt:.5},{label:"NIGHT",sky:new ot(330264),fog:new ot(528408),fogDensity:.01,moonInt:1,moonCol:new ot(12307694),moonElev:55,ambSky:new ot(3359846),ambGnd:new ot(1587232),ambInt:.7,stars:.85,bio:1,plRange:18,plInt:.55},{label:"DEEP_NIGHT",sky:new ot(198160),fog:new ot(397332),fogDensity:.012,moonInt:.55,moonCol:new ot(8952251),moonElev:75,ambSky:new ot(1712708),ambGnd:new ot(1188888),ambInt:.5,stars:1,bio:1.5,plRange:22,plInt:.7},{label:"DAWN",sky:new ot(1187888),fog:new ot(923688),fogDensity:.011,moonInt:.5,moonCol:new ot(13417386),moonElev:20,ambSky:new ot(3354197),ambGnd:new ot(1843224),ambInt:.55,stars:.35,bio:.65,plRange:17,plInt:.5}],Fi=new ot,zf=new ot;function Rw(i){Xo=i.scene,Yo=i.moon,mh=i.moon2,qo=i.hemiLight,fa=i.playerLight}function Cw(i){if(!Xo)return;jr=(jr+i/Aw)%1;const t=jr*4,e=Math.floor(t)%4,n=(e+1)%4,s=t-Math.floor(t),o=.5-.5*Math.cos(s*Math.PI),r=Nf[e],a=Nf[n];Ue=o<.5?r.label:a.label;const l=(c,h)=>c+(h-c)*o;if(Fi.copy(r.sky).lerp(a.sky,o),Xo.background.copy(Fi),Fi.copy(r.fog).lerp(a.fog,o),Xo.fog.color.copy(Fi),Xo.fog.density=l(r.fogDensity,a.fogDensity),Yo){Fi.copy(r.moonCol).lerp(a.moonCol,o),Yo.color.copy(Fi),Yo.intensity=l(r.moonInt,a.moonInt);const c=jr*Math.PI*2,h=l(r.moonElev,a.moonElev)*Math.PI/180,f=60;Yo.position.set(Math.cos(c)*Math.cos(h)*f,Math.sin(h)*f,Math.sin(c)*Math.cos(h)*f)}if(mh){const c=l(r.moonInt,a.moonInt)/.85;mh.intensity=.3*c}qo&&(Fi.copy(r.ambSky).lerp(a.ambSky,o),zf.copy(r.ambGnd).lerp(a.ambGnd,o),qo.color.copy(Fi),qo.groundColor.copy(zf),qo.intensity=l(r.ambInt,a.ambInt)),fa&&(fa.distance=l(r.plRange,a.plRange),fa.intensity=l(r.plInt,a.plInt)),Uf=l(r.stars,a.stars),py(Uf),Ie=l(r.bio,a.bio)}let ds=0,Qs=0,Ei=0,tr="CLEAR",Ci=!1,ei=0;const da={CLEAR:{fogMult:1,windBase:.3,rainRate:0,skyDarken:0,mistCount:0,duration:[90,180]},MISTY:{fogMult:1.8,windBase:.2,rainRate:0,skyDarken:.05,mistCount:6,duration:[60,150]},LIGHT_RAIN:{fogMult:1.3,windBase:.6,rainRate:.3,skyDarken:.1,mistCount:2,duration:[60,120]},HEAVY_RAIN:{fogMult:1.6,windBase:1,rainRate:.8,skyDarken:.2,mistCount:3,duration:[45,100]},FOG_BANK:{fogMult:2.5,windBase:.15,rainRate:0,skyDarken:.1,mistCount:8,duration:[60,120]},LUMINOUS_STORM:{fogMult:1.4,windBase:1.5,rainRate:.6,skyDarken:.15,mistCount:2,duration:[40,90]}},Pw={CLEAR:{MISTY:.4,LIGHT_RAIN:.3,FOG_BANK:.2,LUMINOUS_STORM:.1},MISTY:{CLEAR:.3,LIGHT_RAIN:.3,FOG_BANK:.3,HEAVY_RAIN:.1},LIGHT_RAIN:{CLEAR:.2,MISTY:.2,HEAVY_RAIN:.4,LUMINOUS_STORM:.2},HEAVY_RAIN:{LIGHT_RAIN:.4,LUMINOUS_STORM:.3,MISTY:.2,CLEAR:.1},FOG_BANK:{MISTY:.4,CLEAR:.3,LIGHT_RAIN:.2,LUMINOUS_STORM:.1},LUMINOUS_STORM:{HEAVY_RAIN:.3,MISTY:.3,CLEAR:.2,LIGHT_RAIN:.2}};let $s="CLEAR",Ys=null,pa=0,Kr=0,Hc=0,Jr=!1,Qr=0,Vc=Math.random()*Math.PI*2,Wc=0,Xc=0;const gh=[],Iw=8;let Ff=!1,Yc=0,ta=1,ma=0,ea=0,qc=0;function Lw(){const i=Pw[$s],t=Object.entries(i);let e=0;for(const[,s]of t)e+=s;let n=Math.random()*e;for(const[s,o]of t)if(n-=o,n<=0)return s;return t[0][0]}function Dw(){if(Ff)return;const i=document.createElement("canvas");i.width=128,i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(64,32,0,64,32,64);e.addColorStop(0,"rgba(255,255,255,0.5)"),e.addColorStop(.3,"rgba(255,255,255,0.25)"),e.addColorStop(.7,"rgba(255,255,255,0.06)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,64);const n=new Fh(i),s=new Me(40,14);for(let o=0;o<Iw;o++){const r=new $({map:n,color:5596791,transparent:!0,opacity:0,side:zt,depthWrite:!1}),a=new I(s,r);a.visible=!1,ht.add(a),gh.push({mesh:a,mat:r,active:!1,drift:Math.random()*Math.PI*2,speed:.3+Math.random()*.4,baseY:.8+Math.random()*2,wobble:Math.random()*Math.PI*2})}Ff=!0}function Uw(){Dw();const i=da.CLEAR.duration;pa=i[0]+Math.random()*(i[1]-i[0])}function Nw(i,t,e){if(Jr)if(Kr-=i,Kr<=0){$s=Ys,Ys=null,Jr=!1;const o=da[$s].duration;pa=o[0]+Math.random()*(o[1]-o[0]),Qr=0}else Qr=1-Kr/Hc;else pa-=i,pa<=0&&(Ys=Lw(),Jr=!0,Hc=30+Math.random()*60,Kr=Hc,Qr=0);const n=da[$s];if(Jr&&Ys){const o=da[Ys],r=.5-.5*Math.cos(Qr*Math.PI),a=(l,c)=>l+(c-l)*r;ta=a(n.fogMult,o.fogMult),ma=a(n.rainRate,o.rainRate),ea=a(n.skyDarken,o.skyDarken),qc=a(n.mistCount,o.mistCount),Ei=a(n.windBase,o.windBase),tr=r<.5?$s:Ys}else ta=n.fogMult,ma=n.rainRate,ea=n.skyDarken,qc=n.mistCount,Ei=n.windBase,tr=$s;Ci=tr==="LUMINOUS_STORM",Vc+=(Math.sin(t*.05)*.2+Math.sin(t*.13)*.1)*i,Wc-=i,Wc<=0&&(Wc=2+Math.random()*6,Xc=Math.random()*.8),Xc*=Math.pow(.3,i);const s=Ei+Xc;if(ds=Math.cos(Vc)*s,Qs=Math.sin(Vc)*s,ht.fog.density*=ta,ea>.001){const o=ht.background,r=1-ea;o.r*=r,o.g*=r,o.b*=r}if(e){const o=Math.round(qc);for(let r=0;r<gh.length;r++){const a=gh[r];if(r<o){a.active||(a.active=!0,a.mesh.visible=!0,a.drift=Math.random()*Math.PI*2);const l=10+Math.sin(t*.3+a.wobble)*8,c=a.drift+t*a.speed*.05;a.mesh.position.set(e.x+Math.cos(c)*l,a.baseY+Math.sin(t*.4+a.wobble)*.5,e.z+Math.sin(c)*l),a.mesh.rotation.y=c+Math.PI/2,a.drift+=ds*i*.02;const h=.03+ta*.012;a.mat.opacity+=(h-a.mat.opacity)*i*2}else a.active&&(a.mat.opacity-=i*.5,a.mat.opacity<=.005&&(a.active=!1,a.mesh.visible=!1,a.mat.opacity=0))}}return Ci&&(Yc-=i,Yc<=0&&(Yc=1+Math.random()*4,ei=1)),ei*=Math.pow(.02,i),ei<.01&&(ei=0),ma}function Qh(){return ma}const jn=300,zo=new Float32Array(jn),Fo=new Float32Array(jn),Oo=new Float32Array(jn),Zc=new Float32Array(jn),$c=new Float32Array(jn),jc=new Float32Array(jn),cs=new Float32Array(jn),Rn=new Float32Array(jn*6);let ps=null,xh=null;function zw(){const i=new ye;i.setAttribute("position",new We(Rn,3)),xh=new Nh({color:8952251,transparent:!0,opacity:.3,depthWrite:!1}),ps=new em(i,xh),ps.frustumCulled=!1,ps.visible=!1,ht.add(ps);for(let t=0;t<jn;t++)cs[t]=0,_p(t)}function _p(i){const t=i*6;Rn[t]=0,Rn[t+1]=-100,Rn[t+2]=0,Rn[t+3]=0,Rn[t+4]=-100,Rn[t+5]=0}function Fw(i,t,e,n,s){if(!ps)return;const o=e>.01;if(ps.visible=o,!o)return;xh.opacity=Math.min(.15+e*.35,.5);const r=Math.floor(e*12*i*60);for(let l=0;l<r;l++){let c=-1;for(let u=0;u<jn;u++)if(cs[u]<=0){c=u;break}if(c===-1)break;const h=Math.random()*Math.PI*2,f=Math.random()*30;zo[c]=t.x+Math.cos(h)*f,Fo[c]=12+Math.random()*10,Oo[c]=t.z+Math.sin(h)*f,Zc[c]=n*2+(Math.random()-.5)*.3,$c[c]=-12-Math.random()*8,jc[c]=s*2+(Math.random()-.5)*.3,cs[c]=2+Math.random()*1.5}const a=.06;for(let l=0;l<jn;l++){if(cs[l]<=0)continue;if(cs[l]-=i,cs[l]<=0||Fo[l]<ne(zo[l],Oo[l])+.1){cs[l]=0,_p(l);continue}zo[l]+=Zc[l]*i,Fo[l]+=$c[l]*i,Oo[l]+=jc[l]*i;const c=l*6;Rn[c]=zo[l],Rn[c+1]=Fo[l],Rn[c+2]=Oo[l],Rn[c+3]=zo[l]+Zc[l]*a,Rn[c+4]=Fo[l]+$c[l]*a,Rn[c+5]=Oo[l]+jc[l]*a}ps.geometry.attributes.position.needsUpdate=!0}let Ct=null,$e=null,Pi=!1,As=!1,er=null,ga=null,Ow=null,vp=null,Bw=null,kw=null,Mp=null,yp=null,Gw=null,wp=null,Sp=null,Kc=0,Hw=null,bp=null,Vw=null;const Mi={jelly:0,puff:0,deer:0,moth:0};function Of(i,t){const e=Ct.sampleRate*t,n=Ct.createBuffer(1,e,Ct.sampleRate),s=n.getChannelData(0);if(i==="white")for(let o=0;o<e;o++)s[o]=Math.random()*2-1;else if(i==="brown"){let o=0;for(let r=0;r<e;r++){const a=Math.random()*2-1;s[r]=(o+.02*a)/1.02,o=s[r],s[r]*=3.5}}return n}function na(i,t,e){const n=Ct.createBufferSource();n.buffer=i,n.loop=!0;const s=Ct.createGain();s.gain.value=t;const o=Ct.createBiquadFilter();return o.type="lowpass",o.frequency.value=e,o.Q.value=.5,n.connect(o).connect(s).connect($e),n.start(),{node:n,gain:s,filter:o}}function Ww(){const i=()=>{if(!Pi){try{Ct=new(window.AudioContext||window.webkitAudioContext),$e=Ct.createGain(),$e.gain.value=.35,$e.connect(Ct.destination),er=Of("brown",2),ga=Of("white",2);const t=na(er,.12,180);Ow=t.node,vp=t.gain,Bw=t.filter;const e=na(ga,0,400);kw=e.node,Mp=e.gain,yp=e.filter;const n=na(ga,0,2e3);Gw=n.node,wp=n.gain,Sp=n.filter;const s=na(er,0,600);Hw=s.node,bp=s.gain,Vw=s.filter,Pi=!0}catch(t){console.warn("Audio init failed:",t)}document.removeEventListener("click",i),document.removeEventListener("keydown",i),document.removeEventListener("touchstart",i)}};document.addEventListener("click",i),document.addEventListener("keydown",i),document.addEventListener("touchstart",i)}function Xw(i,t,e,n,s,o,r,a){if(!Pi||As)return;const l=Ct.currentTime,c=o==="DEEP_NIGHT"?.15:o==="DAWN"?.08:.12;vp.gain.linearRampToValueAtTime(c,l+.1);const h=Math.min(t*.18,.3),f=200+t*600;Mp.gain.linearRampToValueAtTime(h,l+.1),yp.frequency.linearRampToValueAtTime(f,l+.1);const u=e*.25,d=1200+e*2e3;wp.gain.linearRampToValueAtTime(u,l+.1),Sp.frequency.linearRampToValueAtTime(d,l+.1),s>.5&&Kc<=0&&(Yw(),Kc=2+Math.random()*3),Kc-=i;let g=1/0;if(r&&a)for(let m=0;m<a.length;m++){const w=a[m].x-r.x,v=a[m].z-r.z,M=w*w+v*v;M<g&&(g=M)}const p=(g<225?1-Math.sqrt(g)/15:0)*.12;bp.gain.linearRampToValueAtTime(p,l+.1),Mi.jelly-=i,Mi.puff-=i,Mi.deer-=i,Mi.moth-=i}function Yw(){if(!Ct)return;const i=Ct.createOscillator(),t=Ct.createGain(),e=Ct.createBiquadFilter();i.type="sawtooth",i.frequency.value=40+Math.random()*30,e.type="lowpass",e.frequency.value=100,e.Q.value=1,t.gain.setValueAtTime(.4,Ct.currentTime),t.gain.exponentialRampToValueAtTime(.001,Ct.currentTime+.8+Math.random()*.5),i.connect(e).connect(t).connect($e),i.start(),i.stop(Ct.currentTime+1.5);const n=Ct.createBufferSource();n.buffer=er;const s=Ct.createGain(),o=Ct.createBiquadFilter();o.type="lowpass",o.frequency.value=80,s.gain.setValueAtTime(.3,Ct.currentTime),s.gain.exponentialRampToValueAtTime(.001,Ct.currentTime+1.2),n.connect(o).connect(s).connect($e),n.start(),n.stop(Ct.currentTime+1.5)}function ys(i,t,e){if(!Pi||As||!Ct||Mi[i]>0)return;const n=t.x-e.x,s=t.z-e.z,o=n*n+s*s;if(o>900)return;const r=Math.sqrt(o),a=Math.max(0,1-r/30)*.15,l=Math.max(-1,Math.min(1,n/Math.max(r,1))),c=Ct.createOscillator(),h=Ct.createGain(),f=Ct.createStereoPanner();f.pan.value=l;const u=Ct.currentTime;switch(i){case"jelly":c.type="sine",c.frequency.setValueAtTime(280+Math.random()*80,u),c.frequency.linearRampToValueAtTime(220+Math.random()*60,u+.6),h.gain.setValueAtTime(a,u),h.gain.exponentialRampToValueAtTime(.001,u+.8),c.connect(h).connect(f).connect($e),c.start(),c.stop(u+.8),Mi.jelly=3+Math.random()*4;break;case"puff":c.type="sine",c.frequency.setValueAtTime(600+Math.random()*200,u),c.frequency.exponentialRampToValueAtTime(400,u+.15),h.gain.setValueAtTime(a*.7,u),h.gain.exponentialRampToValueAtTime(.001,u+.15),c.connect(h).connect(f).connect($e),c.start(),c.stop(u+.2),Mi.puff=2+Math.random()*3;break;case"deer":c.type="sawtooth",c.frequency.setValueAtTime(120+Math.random()*40,u),c.frequency.linearRampToValueAtTime(80,u+.3);const d=Ct.createBiquadFilter();d.type="lowpass",d.frequency.value=300,h.gain.setValueAtTime(a,u),h.gain.exponentialRampToValueAtTime(.001,u+.4),c.connect(d).connect(h).connect(f).connect($e),c.start(),c.stop(u+.5),Mi.deer=4+Math.random()*5;break;case"moth":c.type="triangle",c.frequency.setValueAtTime(180+Math.random()*100,u);const g=Ct.createOscillator(),_=Ct.createGain();g.frequency.value=20+Math.random()*10,_.gain.value=50,g.connect(_).connect(c.frequency),h.gain.setValueAtTime(a*.4,u),h.gain.exponentialRampToValueAtTime(.001,u+.3),c.connect(h).connect(f).connect($e),g.start(),c.start(),g.stop(u+.35),c.stop(u+.35),Mi.moth=3+Math.random()*4;break}}let Oa=0;function qw(i,t){if(!Pi||As||!Ct||Oa>0)return;const e=Ct.currentTime;if(t){const n=Ct.createBufferSource();n.buffer=ga;const s=Ct.createGain(),o=Ct.createBiquadFilter();o.type="bandpass",o.frequency.value=2e3,o.Q.value=.5,s.gain.setValueAtTime(.06,e),s.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(o).connect(s).connect($e),n.start(),n.stop(e+.15)}else{const n=Ct.createOscillator();n.type="sine",n.frequency.value=80+Math.random()*40;const s=Ct.createGain();s.gain.setValueAtTime(.04,e),s.gain.exponentialRampToValueAtTime(.001,e+.08),n.connect(s).connect($e),n.start(),n.stop(e+.1)}Oa=i?.22:.35}function Zw(){if(!Pi||As||!Ct)return;const i=Ct.currentTime,t=Ct.createOscillator();t.type="sine",t.frequency.setValueAtTime(150,i),t.frequency.exponentialRampToValueAtTime(300,i+.1);const e=Ct.createGain();e.gain.setValueAtTime(.04,i),e.gain.exponentialRampToValueAtTime(.001,i+.15),t.connect(e).connect($e),t.start(),t.stop(i+.2)}function $w(i){if(!Pi||As||!Ct)return;const t=Ct.currentTime,e=Ct.createBufferSource();e.buffer=er;const n=Ct.createGain(),s=Ct.createBiquadFilter();s.type="lowpass",s.frequency.value=200,n.gain.setValueAtTime(i*.08,t),n.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(s).connect(n).connect($e),e.start(),e.stop(t+.25)}function jw(i){Oa>0&&(Oa-=i)}function Kw(i,t){if(!Pi||As||!Ct)return;const e=i.x-t.x,n=i.z-t.z,s=e*e+n*n;if(s>400)return;const o=Math.max(0,1-Math.sqrt(s)/20)*.08,r=Ct.currentTime,a=Ct.createOscillator();a.type="sine",a.frequency.setValueAtTime(800+Math.random()*400,r),a.frequency.exponentialRampToValueAtTime(200,r+.08);const l=Ct.createGain();l.gain.setValueAtTime(o,r),l.gain.exponentialRampToValueAtTime(.001,r+.1),a.connect(l).connect($e),a.start(),a.stop(r+.12)}function Jw(){if(!Pi||As||!Ct)return;const i=Ct.currentTime,t=Ct.createOscillator();t.type="sine",t.frequency.setValueAtTime(300,i),t.frequency.exponentialRampToValueAtTime(800,i+.2);const e=Ct.createGain();e.gain.setValueAtTime(.08,i),e.gain.exponentialRampToValueAtTime(.001,i+.4),t.connect(e).connect($e),t.start(),t.stop(i+.5)}function Qw(i,t,e,n,s){const o=e.x-i.x,r=e.z-i.z,a=o*o+r*r;if(a>n*n)return!1;if(a<.01)return!0;let c=Math.atan2(r,o)-t;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;return Math.abs(c)<s*.5}function tS(i,t,e,n){const s=t.x-i.x,o=t.z-i.z,r=n?e*1.8:e;return s*s+o*o<r*r}function Tp(i,t,e){let n=0,s=0,o=0;for(let r=0;r<t.length;r++){const a=t[r],l=i.x-a.x,c=i.z-a.z,h=l*l+c*c;if(h>.01&&h<e*e){const f=Math.sqrt(h);n+=l/f/f,s+=c/f/f,o++}}return o>0&&(n/=o,s/=o),{x:n,z:s}}function Ep(i,t){if(t.length===0)return{x:0,z:0};let e=0,n=0;for(let s=0;s<t.length;s++)e+=t[s].x,n+=t[s].z;return e/=t.length,n/=t.length,{x:e-i.x,z:n-i.z}}function eS(i,t){const e=Math.sqrt(i.x*i.x+i.z*i.z),n=he-t;if(e<n)return{x:0,z:0};const s=(e-n)/t,o=Math.min(s*2,3);return{x:-i.x/e*o,z:-i.z/e*o}}function nS(i,t,e,n,s){let o=0,r=0;const a=Math.cos(t)*n,l=Math.sin(t)*n,c=i.x+a,h=i.z+l;for(let f=0;f<e.length;f++){const u=e[f],d=c-u.x,g=h-u.z,_=d*d+g*g,p=(u.colR||s)+1;if(_<p*p&&_>.01){const m=Math.sqrt(_),w=(p-m)/p*2;o+=d/m*w,r+=g/m*w}}return{x:o,z:r}}const vi={deer:!1,puffling:!1,jelly:!1,moth:!1,fairyRing:!1,crystalChain:!1,pond:!1},iS={deer:"Spirit Deer",puffling:"Puffling",jelly:"Luminous Jelly",moth:"Moon Moth",fairyRing:"Fairy Ring",crystalChain:"Crystal Resonance",pond:"Moonlit Pond"};let wi=null,xa=0,Bf="";function sS(){wi=document.createElement("div"),wi.id="discovery-text",wi.style.cssText="position:fixed;top:28%;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:22px;color:#ccffee;text-shadow:0 0 12px #44ffaa,0 0 30px #228866;pointer-events:none;opacity:0;transition:opacity 0.6s;z-index:100;letter-spacing:3px;text-transform:uppercase;",document.body.appendChild(wi)}function ts(i){vi[i]||(vi[i]=!0,Bf=iS[i],xa=3,wi&&(wi.textContent=Bf,wi.style.opacity="1"))}function oS(i,t,e,n,s,o,r,a){const l=i.x,c=i.z;if(!vi.deer)for(let h=0;h<t.length;h++){const f=t[h].group.position.x-l,u=t[h].group.position.z-c;if(f*f+u*u<144){ts("deer");break}}if(!vi.puffling)for(let h=0;h<e.length;h++){const f=e[h].group.position.x-l,u=e[h].group.position.z-c;if(f*f+u*u<64){ts("puffling");break}}if(!vi.jelly)for(let h=0;h<n.length;h++){const f=n[h].group.position.x-l,u=n[h].group.position.z-c;if(f*f+u*u<100){ts("jelly");break}}if(!vi.moth)for(let h=0;h<s.length;h++){const f=s[h].group.position.x-l,u=s[h].group.position.z-c;if(f*f+u*u<64){ts("moth");break}}if(!vi.fairyRing)for(let h=0;h<o.length;h++){const f=o[h].x-l,u=o[h].z-c;if(f*f+u*u<16){ts("fairyRing");break}}if(!vi.pond)for(let h=0;h<r.length;h++){const f=r[h].x-l,u=r[h].z-c;if(f*f+u*u<25){ts("pond");break}}!vi.crystalChain&&a>=3&&ts("crystalChain")}function rS(i){xa>0&&(xa-=i,xa<=.6&&wi&&(wi.style.opacity="0"))}let _h=null,Jc=60;const aS={DUSK:"Dusk",NIGHT:"Night",DEEP_NIGHT:"Deep Night",DAWN:"Dawn"},cS={CLEAR:"Clear",MISTY:"Misty",LIGHT_RAIN:"Light Rain",HEAVY_RAIN:"Heavy Rain",FOG_BANK:"Fog",LUMINOUS_STORM:"Storm"};function lS(){_h=document.getElementById("hud")}function hS(i,t){if(!_h)return;Jc=Jc*.95+1/Math.max(i,.001)*.05;const e=Fn==="SEEK"?"Seek the orbs...":Fn==="RISING"?"The obelisk stirs...":Fn==="COMPLETE"?"Convergence!":"Luminaries",n=aS[Ue]||"Night",s=cS[tr]||"Clear";_h.innerHTML="<b>"+e+"</b> · "+n+" · "+s+" · FPS:"+Math.round(Jc)+"<br>Pos:"+t.x.toFixed(0)+","+t.z.toFixed(0)}let Ba=null;function uS(){Ba=document.getElementById("orb-hud")}function fS(){return Ba}function dS(){const i=document.getElementById("overlay");i&&(i.style.opacity="0",setTimeout(()=>{try{i.remove()}catch{}},2500)),Ba&&(Ba.style.display="block")}const ce=[],yn=[],ie=[],ni=[],En=[],Be=[],yo=[],vh=[],hr=[],ai=[],Mh=[],ka=[],Ga=[],nr=[],si=[],ii=[],ke=[],Cn=[],Oi=[];let kf=0,Gf=0,Qc=0,zn=null,Qn=0;const yh=15,wh=[];let Hf=!1;function pS(){if(Hf)return;Hf=!0;const i=new Nh({color:B.crystal,transparent:!0,opacity:0,blending:Se,depthWrite:!1});for(let t=0;t<yh;t++){const e=new ye,n=new Float32Array(6);e.setAttribute("position",new We(n,3)),e.attributes.position.setUsage(Le);const s=new md(e,i.clone());s.visible=!1,ht.add(s),wh.push({line:s,geo:e,opacity:0,active:!1})}}let es=null;function mS(){if(es)return es;const i=new _o(.9,1,48),t=new $({color:B.echoBloom,transparent:!0,opacity:.5,side:zt,depthWrite:!1,blending:Se});return es=new I(i,t),es.rotation.x=-Math.PI/2,es.visible=!1,ht.add(es),es}function gS(){for(let t=0;t<wM;t++){let e,n,s=!1;for(let o=0;o<20;o++){const r=T()*6.28,a=5+T()*(he-10);e=Math.cos(r)*a,n=Math.sin(r)*a,s=!0;for(let l=0;l<ce.length;l++){const c=ce[l].x-e,h=ce[l].z-n;if(c*c+h*h<9){s=!1;break}}if(s)break}if(s){const o=vy(e,n);o.position.y=ne(e,n),ce.push({group:o,x:e,z:n})}}for(let t=0;t<SM;t++){const e=ce[Math.floor(T()*ce.length)],n=T()*6.28,s=1+T()*4,o=e.x+Math.cos(n)*s,r=e.z+Math.sin(n)*s,a=My(o,r);a.group.position.y=ne(o,r),yn.push(a)}for(let t=0;t<bM;t++){const e=T()*6.28,n=8+T()*he*.6,s=Math.cos(e)*n,o=Math.sin(e)*n,r=yy(s,o);r.group.position.y=ne(s,o),ie.push(r)}for(let t=0;t<TM;t++){const e=T()*6.28,n=10+T()*he*.5,s=Math.cos(e)*n,o=Math.sin(e)*n;ni.push(Ly(s,ne(s,o)+3+T()*5,o))}for(let t=0;t<EM;t++){const e=yn[Math.floor(T()*yn.length)],n=T()*6.28,s=1+T()*5,o=e.x+Math.cos(n)*s,r=e.z+Math.sin(n)*s,a=Dy(o,r);a.group.position.y=ne(o,r),a._baseY=ne(o,r),En.push(a)}for(let t=0;t<AM;t++){const e=T()*6.28,n=12+T()*he*.5,s=Math.cos(e)*n,o=Math.sin(e)*n,r=Uy(s,o),a=ne(s,o);r.group.position.y=a,r._baseY=a,Be.push(r)}for(let t=0;t<RM;t++){const e=ce[Math.floor(T()*ce.length)];yo.push(Ny(e.x,ne(e.x,e.z)+2+T()*4,e.z))}const i=[null,B.grassPurple,B.grassBlue,B.grassTeal];for(let t=0;t<CM;t++){const e=T()*6.28,n=2+T()*(he*.9),s=Math.cos(e)*n,o=Math.sin(e)*n,r=i[Math.floor(T()*i.length)],a=wy(s,o,2+T()*2.5,25+Math.floor(T()*20),r);a.mesh.position.y=ne(s,o),vh.push(a)}for(let t=0;t<DM;t++){let e,n,s=!1;for(let o=0;o<10;o++){const r=T()*6.28,a=3+T()*(he*.85);e=Math.cos(r)*a,n=Math.sin(r)*a,s=!0;for(let l=0;l<ce.length;l++){const c=ce[l].x-e,h=ce[l].z-n;if(c*c+h*h<4){s=!1;break}}if(s)break}if(s){const o=Gy(e,n);o.group.position.y=ne(e,n)-.08,ka.push(o)}}for(let t=0;t<PM;t++){const e=ce[Math.floor(T()*ce.length)],n=T()*6.28,s=1+T()*5,o=e.x+Math.cos(n)*s,r=e.z+Math.sin(n)*s,a=by(o,r);a.group.position.y=ne(o,r),hr.push(a)}for(let t=0;t<IM;t++){const e=T()*6.28,n=3+T()*(he*.7),s=Math.cos(e)*n,o=Math.sin(e)*n,r=Ty(s,o);r.group.position.y=ne(s,o),ai.push(r)}for(let t=0;t<LM;t++){const e=T()*6.28,n=4+T()*(he*.8),s=Math.cos(e)*n,o=Math.sin(e)*n,r=Ey(s,o);r.group.position.y=ne(s,o),Mh.push(r)}for(let t=0;t<Zs;t++){let e,n,s=!1;for(let o=0;o<30;o++){const r=T()*6.28,a=20+T()*(he*.6);e=Math.cos(r)*a,n=Math.sin(r)*a,s=!0;for(let l=0;l<Cn.length;l++){const c=Cn[l].x-e,h=Cn[l].z-n;if(c*c+h*h<225){s=!1;break}}if(s)break}if(s){const o=ky(e,n);o.group.position.y=ne(e,n)+1,o.flyY=ne(e,n)+1,Cn.push(o)}}for(let t=0;t<Ud;t++){const e=T()*6.28,n=2+T()*3,s=Math.cos(e)*n,o=Math.sin(e)*n;Ga.push(zy(s,ne(s,o)+1+T()*.5,o))}for(let t=0;t<UM;t++){const e=T()*6.28,n=4+T()*(he*.7),s=Math.cos(e)*n,o=Math.sin(e)*n,r=Py(s,o);r.group.position.y=ne(s,o),nr.push(r)}for(let t=0;t<NM;t++){let e,n,s=!1;for(let o=0;o<20;o++){const r=T()*6.28,a=10+T()*(he*.6);e=Math.cos(r)*a,n=Math.sin(r)*a,s=!0;for(let l=0;l<ce.length;l++){const c=ce[l].x-e,h=ce[l].z-n;if(c*c+h*h<36){s=!1;break}}if(s)break}if(s){Jl(e,n,4);const o=Fy(e,n);o.group.position.y=ne(e,n),si.push(o)}}for(let t=0;t<zM;t++){const e=T()*6.28,n=5+T()*he*.6,s=Math.cos(e)*n,o=Math.sin(e)*n;ii.push(Oy(s,ne(s,o)+.5+T()*5,o))}for(let t=0;t<OM;t++){let e,n,s=!1;for(let o=0;o<20;o++){const r=T()*6.28,a=8+T()*(he*.6);e=Math.cos(r)*a,n=Math.sin(r)*a,s=!0;for(let l=0;l<ce.length;l++){const c=ce[l].x-e,h=ce[l].z-n;if(c*c+h*h<16){s=!1;break}}if(s)break}if(s){Jl(e,n,3);const o=By(e,n);o.group.position.y=ne(e,n),ke.push(o)}}}function Ap(i,t){const e=1+Ei*1.5,n=ds*.03,s=Qs*.03;for(let o=0;o<ce.length;o++){const r=ce[o],a=r.x*.1+r.z*.13;r.group.rotation.z=Math.sin(t*.3+a)*.004*e+n*.15,r.group.rotation.x=Math.sin(t*.25+a+1)*.003*e+s*.15}for(let o=0;o<vh.length;o++)Sy(vh[o],t,e,n,s,Q.pos.x,Q.pos.z);for(let o=0;o<hr.length;o++){const r=hr[o];r.group.rotation.z=Math.sin(t*.8+r.phase)*.03*e+n,r.group.rotation.x=Math.sin(t*.6+r.phase+1)*.02*e+s}for(let o=0;o<ai.length;o++){const r=ai[o],a=Math.sin(t*1+r.phase)*.5+.5;r.petalMat.emissiveIntensity=(.3+a*.5)*Ie,r.group.rotation.z=Math.sin(t*.9+r.phase)*.04*e+n*.5}for(let o=0;o<Mh.length;o++){const r=Mh[o];r.group.rotation.z=Math.sin(t*1.1+r.phase)*r.swayAmp*e+n,r.group.rotation.x=Math.sin(t*.8+r.phase+2)*r.swayAmp*.5*e+s}}function Rp(i,t){for(let n=0;n<ni.length;n++){const s=ni[n],o=s.group,r=o.position.x,a=o.position.z;s._syncPhase===void 0&&(s._syncPhase=s.phase);let l=0,c=0;for(let h=0;h<ni.length;h++){if(h===n)continue;const f=ni[h],u=f.group.position.x-r,d=f.group.position.z-a;u*u+d*d<225&&(l+=f._syncPhase||f.phase,c++)}if(c>0){const h=l/c;s._syncPhase+=(h-s._syncPhase)*i*.4}}const e=Ue==="DEEP_NIGHT"?2:Ue==="DAWN"?-1.5:0;for(let n=0;n<ni.length;n++){const s=ni[n],o=s.group,r=o.position.x,a=o.position.z,l=s.floatY+e;if(s._stT-=i,s._stT<=0)if(Ci)s._state="display",s._stT=10+Math.random()*15;else{const d=Math.random();d<.5?(s._state="drift",s._stT=20+Math.random()*30):d<.75?(s._state="pulse",s._stT=8+Math.random()*12):(s._state="migrate",s._migrateAng=Math.random()*6.28,s._stT=15+Math.random()*20)}switch(Ci&&s._state!=="display"&&(s._state="display",s._stT=10,ys("jelly",{x:r,z:a},Q.pos)),s._state){case"drift":{s.driftAng+=i*.15;const d=8+Math.sin(t*.1+s.phase)*4,g=s.homeX+Math.cos(s.driftAng)*d,_=s.homeZ+Math.sin(s.driftAng)*d;o.position.x+=(g-r)*i*.3,o.position.z+=(_-a)*i*.3,o.position.y=l+Math.sin(t*s.wobble+s.phase)*1.5;break}case"pulse":{s.driftAng+=i*.08,o.position.x+=Math.cos(s.driftAng)*i*.3,o.position.z+=Math.sin(s.driftAng)*i*.3,o.position.y=l+Math.sin(t*s.wobble+s.phase)*1,s._pulseSync=Math.sin(t*2+s._syncPhase)*.5+.5;break}case"migrate":{o.position.x+=Math.cos(s._migrateAng)*i*1,o.position.z+=Math.sin(s._migrateAng)*i*1,o.position.y=l+Math.sin(t*s.wobble+s.phase)*.8,o.position.x*o.position.x+o.position.z*o.position.z>he*.8*(he*.8)&&(s._migrateAng+=Math.PI);break}case"display":{s.driftAng+=i*.4,o.position.x+=Math.cos(s.driftAng)*i*.8,o.position.z+=Math.sin(s.driftAng)*i*.8,o.position.y=l+Math.sin(t*2+s.phase)*2,s._syncPhase+=(0-s._syncPhase)*i*2;break}}s._state==="pulse"&&Math.random()<.003&&ys("jelly",{x:r,z:a},Q.pos);const c=s._syncPhase||s.phase,h=Math.sin(t*1.2+c)*.5+.5;let f=1,u=0;if(s._state==="pulse")f=1+s._pulseSync*1.5,u=s._pulseSync*.15;else if(s._state==="display"){const d=Math.sin(t*4)*.5+.5;f=1.5+d*1.2,u=.15+d*.1}else s._state==="drift"&&(f=1+h*.3);s.bellMat.emissiveIntensity=(.4+h*.8)*Ie*f,s.bellMat.opacity=.35+h*.25+u,o.rotation.y+=i*.2;for(let d=2;d<o.children.length;d++)o.children[d].rotation.x=Math.sin(t*2+d+c)*.15,o.children[d].rotation.z=Math.sin(t*1.5+d*.7+c)*.1}}function Cp(i,t){const e=De.ShiftLeft||De.ShiftRight||pr,n=Ue==="DAWN"?.6:Ue==="NIGHT"?1.3:1,s=Ue==="DAWN"?2:Ue==="NIGHT"?.6:1;for(let o=0;o<En.length;o++){const r=En[o],a=r.group,l=a.position.x,c=a.position.z,h=l-Q.pos.x,f=c-Q.pos.z,u=h*h+f*f;if(r.state!=="startled"&&r.state!=="following"&&r.state!=="huddle"){const b=e?3.5:2;let S=u<b*b;if(!S)for(let y=0;y<Be.length;y++){if(Be[y].state!=="flee")continue;const x=Be[y].group.position.x-l,R=Be[y].group.position.z-c;if(x*x+R*R<25){S=!0;break}}S&&(r.state="startled",r._scaredT=.6+Math.random()*.5,r.wanderAng=Math.atan2(h,f),r.hopTimer=0,ys("puff",{x:l,z:c},Q.pos))}if(Ci&&r.state!=="startled"&&r.state!=="huddle"){let b=1/0,S=-1;for(let y=0;y<En.length;y++){if(y===o)continue;const x=En[y].group.position.x-l,R=En[y].group.position.z-c,U=x*x+R*R;U<b&&(b=U,S=y)}S>=0&&b>1&&(r.state="huddle",r._huddleTarget=S)}Mo>8&&u<144&&r.state==="idle"&&Math.random()<.001&&(r.state="following",r._followT=10+Math.random()*10);const d=l-r._lastTX,g=c-r._lastTZ;d*d+g*g>.25&&(r._baseY=ne(l,c),r._lastTX=l,r._lastTZ=c);const _={x:l,z:c},p=[];for(let b=0;b<En.length;b++){if(b===o)continue;const S=En[b].group.position.x,y=En[b].group.position.z;(S-l)*(S-l)+(y-c)*(y-c)<100&&p.push({x:S,z:y})}const m=Tp(_,p,1.5),w=p.length>0?Ep(_,p):{x:0,z:0},v=m.x*2+w.x*.3,M=m.z*2+w.z*.3,A=Math.sqrt(v*v+M*M);switch(r.state){case"idle":{if(r.idleTimer-=i,a.position.y=r._baseY+Math.sin(t*2+r.phase)*.02,a.rotation.y+=Math.sin(t*.5+r.phase)*i*.3,A>.1&&p.length>1&&(a.position.x+=w.x*.05*i,a.position.z+=w.z*.05*i),Math.random()<.001&&ys("puff",{x:l,z:c},Q.pos),r.idleTimer<=0){const b=A>.2?Math.atan2(v,M):0;r.state="hop",r.wanderAng+=(Math.random()-.5)*1.5+b*.3,r.hopTimer=0}break}case"hop":{r.hopTimer+=i;const S=r.hopTimer/1.2;if(S>=1)r.state="idle",r.idleTimer=(1.5+Math.random()*3)*s,a.position.y=r._baseY;else{a.position.y=r._baseY+Math.sin(S*Math.PI)*.3,a.position.x+=Math.sin(r.wanderAng)*r.speed*n*i,a.position.z+=Math.cos(r.wanderAng)*r.speed*i;const y=1-Math.sin(S*Math.PI)*.15,x=1+Math.sin(S*Math.PI)*.2;a.scale.set(y,x,y),a.rotation.y=r.wanderAng}break}case"startled":{r._scaredT-=i,r.hopTimer+=i*1.5;const b=Math.min(r.hopTimer/.8,1);a.position.y=r._baseY+Math.sin(b*Math.PI)*.5,a.position.x+=Math.sin(r.wanderAng)*r.speed*2*i+m.x*.5*i,a.position.z+=Math.cos(r.wanderAng)*r.speed*2*i+m.z*.5*i,a.scale.set(.85,1.3,.85),r._scaredT<=0&&(r.state="idle",r.idleTimer=3+Math.random()*3,a.position.y=r._baseY,a.scale.set(1,1,1));break}case"following":{if(r._followT-=i,u>225||Mo<3||r._followT<=0){r.state="idle",r.idleTimer=2;break}if(r.wanderAng=Math.atan2(Q.pos.x-l,Q.pos.z-c),u>9){r.hopTimer+=i;const b=r.hopTimer%1.5/1.5;a.position.y=r._baseY+Math.sin(b*Math.PI)*.2,a.position.x+=Math.sin(r.wanderAng)*r.speed*.4*i,a.position.z+=Math.cos(r.wanderAng)*r.speed*.4*i}else a.position.y=r._baseY+Math.sin(t*3+r.phase)*.03;a.rotation.y=r.wanderAng;break}case"huddle":{if(!Ci){r.state="idle",r.idleTimer=2;break}const b=En[r._huddleTarget];if(b){const S=b.group.position.x-l,y=b.group.position.z-c,x=Math.sqrt(S*S+y*y);x>.5&&(a.position.x+=S/x*r.speed*.5*i,a.position.z+=y/x*r.speed*.5*i)}a.rotation.z=Math.sin(t*8)*.05,a.position.y=r._baseY;break}}if(r._blinkTimer-=i,r._blinkTimer<=0)if(r._blinkState===0){for(let b=0;b<r.eyes.length;b++)r.eyes[b].scale.y=.1;r._blinkState=1,r._blinkTimer=.08+Math.random()*.06}else{for(let b=0;b<r.eyes.length;b++)r.eyes[b].scale.y=1;r._blinkState=0,r._blinkTimer=2+Math.random()*5}for(let b=0;b<r.ears.length;b++){const S=r.ears[b];S.mesh.rotation.z=S.baseRotZ+Math.sin(t*3.5+S.side*1.2+r.phase)*.08}r.tail.position.y=.38+Math.sin(t*4+r.phase)*.015,a.position.x*a.position.x+a.position.z*a.position.z>he*.85*(he*.85)&&(r.wanderAng+=Math.PI)}}function Pp(i,t){const e=De.ShiftLeft||De.ShiftRight||pr;for(let n=0;n<Be.length;n++){const s=Be[n],o=s.group,r=o.position.x,a=o.position.z,l=r-Q.pos.x,c=a-Q.pos.z,h=l*l+c*c,f=Math.atan2(l,c),u=e?18:12,d=u*u,g=e?10:GM,_=g*g,p=r-s._lastTX,m=a-s._lastTZ;p*p+m*m>.25&&(s._baseY=ne(r,a),s._lastTX=r,s._lastTZ=a);const w=s._baseY;if(s.state!=="flee"&&s.state!=="alert"&&s.state!=="watching"){const x={x:r,z:a},R={x:Q.pos.x,z:Q.pos.z};h<_||tS(x,R,g,e)?(s.state="flee",s.wanderAng=f,s.fleeTimer=2.5+Math.random()*2,s._zigTimer=0,ys("deer",x,Q.pos)):(h<d||Qw(x,s.wanderAng,R,u,Math.PI*.5))&&(s.state="alert",s._stT=1+Math.random()*1.5,ys("deer",x,Q.pos))}if(s.state!=="flee")for(let x=0;x<Be.length;x++){if(x===n||Be[x].state!=="flee")continue;const R=Be[x].group.position.x-r,U=Be[x].group.position.z-a;if(R*R+U*U<400){s.state="flee",s.wanderAng=Be[x].wanderAng+(Math.random()-.5)*.4,s.fleeTimer=2+Math.random()*1.5,s._zigTimer=0;break}}const v=[];for(let x=0;x<Be.length;x++){if(x===n)continue;const R=Be[x].group.position.x,U=Be[x].group.position.z;(R-r)*(R-r)+(U-a)*(U-a)<400&&v.push({x:R,z:U})}const M=Tp({x:r,z:a},v,3),A=v.length>0?Ep({x:r,z:a},v):{x:0,z:0};(s.state==="alert"||s.state==="watching")&&(s.headLook+=(f-s.wanderAng)*.3*i);let E=s.speed,b=!1;switch(s.state){case"walk":{if(b=!0,s.walkTimer-=i,s.walkTimer<=0){const R=Math.random(),U=Ue==="DUSK"?.55:.4,D=Ue==="DEEP_NIGHT"?.25:.1;if(R<.25)s.state="pause",s.pauseTimer=2+Math.random()*3;else if(R<U)s.state="graze",s._stT=Ue==="DUSK"?5+Math.random()*6:3+Math.random()*4;else if(R<U+.1&&ke.length>0){s.state="drink",s._stT=8;let z=1/0;for(let H=0;H<ke.length;H++){const V=ke[H].x-r,Z=ke[H].z-a,W=V*V+Z*Z;W<z&&(z=W,s._drinkTgt=ke[H])}}else R<U+.1+D?(s.state="rest",s._stT=Ue==="DEEP_NIGHT"?8+Math.random()*8:5+Math.random()*5):(s.wanderAng+=(Math.random()-.5)*1.2,s.walkTimer=3+Math.random()*5)}if((r-s.homeX)*(r-s.homeX)+(a-s.homeZ)*(a-s.homeZ)>400){const R=Math.atan2(s.homeX-r,s.homeZ-a);s.wanderAng+=(R-s.wanderAng)*i*.5}if(v.length>0){const R=Math.atan2(A.x*.15+M.x*.8,A.z*.15+M.z*.8);s.wanderAng+=(R-s.wanderAng)*i*.3}break}case"pause":{s.pauseTimer-=i,s.headLook=Math.sin(t*.6)*.4,s.pauseTimer<=0&&(s.state="walk",s.walkTimer=3+Math.random()*5);break}case"graze":{s._stT-=i,s.headBob=-.5,s._stT<=0&&(s.state="walk",s.walkTimer=2+Math.random()*4,s.headBob=0);break}case"drink":{if(s._stT-=i,s._drinkTgt){const x=s._drinkTgt.x-r,R=s._drinkTgt.z-a;Math.sqrt(x*x+R*R)>2?(s.wanderAng=Math.atan2(x,R),b=!0,E=s.speed*.7):s.headBob=-.6}s._stT<=0&&(s.state="walk",s.walkTimer=3+Math.random()*4,s.headBob=0,s._drinkTgt=null);break}case"rest":{s._stT-=i,o.position.y=Math.max(w-.3,o.position.y-i*.5),s._stT<=0&&(s.state="walk",s.walkTimer=2+Math.random()*3);break}case"alert":{s._stT-=i,h<_?(s.state="flee",s.wanderAng=f,s.fleeTimer=2.5+Math.random()*2):s._stT<=0&&(h<u*1.2*(u*1.2)?(s.state="watching",s._stT=3+Math.random()*3):(s.state="walk",s.walkTimer=2+Math.random()*3));break}case"watching":{s._stT-=i,b=!0,E=s.speed*.3,s.wanderAng=f,h<_?(s.state="flee",s.wanderAng=f,s.fleeTimer=2.5+Math.random()*2):(h>u*1.5*(u*1.5)||s._stT<=0)&&(s.state="walk",s.walkTimer=2+Math.random()*4);break}case"flee":{b=!0,E=s.speed*HM,s.fleeTimer-=i,s._zigTimer-=i,s._zigTimer<=0&&(s._zigDir*=-1,s._zigTimer=.4+Math.random()*.4),s.wanderAng=f+s._zigDir*.3;const x=nS({x:r,z:a},s.wanderAng,ce,3,1.5);x.x*x.x+x.z*x.z>.01&&(s.wanderAng+=Math.atan2(x.z,x.x)*.3);const R=eS({x:r,z:a},8);(R.x!==0||R.z!==0)&&(s.wanderAng=Math.atan2(R.z,R.x)),(s.fleeTimer<=0||h>u*2*(u*2))&&(s.state="walk",s.walkTimer=3+Math.random()*5);break}}if(b&&(o.position.x+=Math.sin(s.wanderAng)*E*i,o.position.z+=Math.cos(s.wanderAng)*E*i,s.legCycle+=i*E*3),o.position.x*o.position.x+o.position.z*o.position.z>he*.9*(he*.9)&&(s.wanderAng=Math.atan2(-o.position.x,-o.position.z)),s.state!=="rest"){const x=w-o.position.y;Math.abs(x)>.01?o.position.y+=Math.sign(x)*Math.min(Math.abs(x),i*2):o.position.y=w}if(o.rotation.y=s.wanderAng,s.state==="alert"||s.state==="watching"){const x=f-s.wanderAng;s.headLook+=(x*.5-s.headLook)*i*3}const y=s.headBob||0;s.neckPivot.rotation.x+=(y-s.neckPivot.rotation.x)*i*3,s.neckPivot.rotation.y+=(s.headLook-s.neckPivot.rotation.y)*i*4,b&&s.state!=="graze"&&s.state!=="drink"&&(s.neckPivot.rotation.x+=Math.sin(s.legCycle*2)*.05);for(let x=0;x<s.legPivots.length;x++){const R=s.legPivots[x];if(b){const U=R.isFront?0:Math.PI,D=R.side>0?Math.PI:0,z=Math.sin(s.legCycle+U+D)*.4*(E/s.speed);R.upper.rotation.x=z,R.lower.rotation.x=Math.max(0,-z*.6)}else s.state==="rest"&&o.position.y<-.1?(R.upper.rotation.x+=(.8-R.upper.rotation.x)*i*2,R.lower.rotation.x+=(1-R.lower.rotation.x)*i*2):(R.upper.rotation.x*=.9,R.lower.rotation.x*=.9)}s.tailPivot.rotation.x=Math.sin(t*1.5+s.phase)*.15,s.state==="flee"&&(s.tailPivot.rotation.x+=.3),s.state==="alert"?s.tailPivot.rotation.z=Math.sin(t*6)*.1:s.tailPivot.rotation.z*=.9,s.mat.emissiveIntensity=(.3+Math.sin(t*.8+s.phase)*.2)*Ie,s.headLook*=.98}}function Ip(i,t){for(let e=0;e<yo.length;e++){const n=yo[e],s=n.group,o=s.position.x,r=s.position.z;if(n._state==="patrol"){if(Math.random()<.002){let g=1/0,_=null;for(let p=0;p<ie.length;p++){const m=ie[p].x-o,w=ie[p].z-r,v=m*m+w*w;v<900&&v<g&&(g=v,_=ie[p])}for(let p=0;p<si.length;p++){if(si[p].glowIntensity<.3)continue;const m=si[p].x-o,w=si[p].z-r,v=m*m+w*w;v<900&&v<g&&(g=v,_=si[p])}_&&(n._state="attracted",n._attractTarget=_,n._stT=6+Math.random()*8,ys("moth",{x:o,z:r},Q.pos))}const d=Ue==="DAWN"?.005:Ue==="DEEP_NIGHT"?3e-4:.001;if(Math.random()<d){let g=1/0,_=null;for(let p=0;p<ce.length;p++){const m=ce[p].x-o,w=ce[p].z-r,v=m*m+w*w;v<400&&v<g&&(g=v,_=ce[p])}_&&(n._state="rest",n._restTree=_,n._stT=Ue==="DAWN"?8+Math.random()*10:4+Math.random()*6)}}const a=Ue==="DEEP_NIGHT"?1.6:Ue==="DAWN"?.5:1,l=Ue==="DEEP_NIGHT"?1.4:1;switch(n._state){case"patrol":{n.orbitAng+=i*.4*a;const d=n.centerX+Math.cos(n.orbitAng)*n.orbitR*l,g=n.centerZ+Math.sin(n.orbitAng)*n.orbitR*l;s.position.x+=(d-o)*i*1.5,s.position.z+=(g-r)*i*1.5,s.position.y=n.floatY+Math.sin(t*.7+n.phase)*.8,s.rotation.y=n.orbitAng+Math.PI/2;break}case"attracted":{if(n._stT-=i,!n._attractTarget||n._stT<=0){n._state="patrol",n._attractTarget=null;break}n.orbitAng+=i*.8;const d=n._attractTarget,g=Math.max(.5,n._stT*.4),_=d.x+Math.cos(n.orbitAng)*g,p=d.z+Math.sin(n.orbitAng)*g;s.position.x+=(_-o)*i*2,s.position.z+=(p-r)*i*2,s.position.y+=(2-s.position.y)*i*.5,s.rotation.y=n.orbitAng+Math.PI/2;break}case"rest":{if(n._stT-=i,!n._restTree||n._stT<=0){n._state="patrol",n._restTree=null,n.centerX=s.position.x,n.centerZ=s.position.z;break}const d=n._restTree,g=d.x+.5-o,_=d.z+.5-r,p=Math.sqrt(g*g+_*_);p>.3&&(s.position.x+=g/p*i*2,s.position.z+=_/p*i*2),s.position.y+=(2.5-s.position.y)*i*1.5,s.rotation.y=Math.atan2(g,_);break}}const c=n._state==="rest"?.05:.4,h=Math.sin(t*n.flapSpeed+n.phase)*c;for(let d=0;d<s._wingPivots.length;d++){const g=s._wingPivots[d];g.pivot.rotation.z=h*g.side}const f=Math.sin(t*1.5+n.phase)*.5+.5,u=n._state==="attracted"?.4:0;n.wingMat.emissiveIntensity=(.5+f*.6+u)*Ie,n.wingMat.opacity=.45+f*.25}}function xS(i,t){const e=De.ShiftLeft||De.ShiftRight||pr;let n=null;if(Mo>5&&(Fn==="SEEK"||Fn==="RISING")){let s=1/0;for(let o=0;o<Cn.length;o++){if(Cn[o].found)continue;const r=Cn[o].x-Q.pos.x,a=Cn[o].z-Q.pos.z,l=r*r+a*a;l<s&&(s=l,n=Cn[o])}}for(let s=0;s<Ga.length;s++){const o=Ga[s],r=t*.5+o.phase+s/Ud*6.28,a=e?4+s*2:1.5+s*.8,l=e?3+s:1.2+Math.sin(t*.7+o.phase)*.5;if(o.targetX=Q.pos.x+Math.cos(r)*a,o.targetY=Q.pos.y-qa+l,o.targetZ=Q.pos.z+Math.sin(r)*a,s===0&&n){const g=Math.min((Mo-5)/3,.6);o.targetX+=(n.x-Q.pos.x)*g,o.targetZ+=(n.z-Q.pos.z)*g,o.targetY+=.5}const c=e?.8:2.5;o.velX+=(o.targetX-o.group.position.x)*c*i,o.velY+=(o.targetY-o.group.position.y)*c*i,o.velZ+=(o.targetZ-o.group.position.z)*c*i,o.velX*=.92,o.velY*=.92,o.velZ*=.92,o.group.position.x+=o.velX*i*4,o.group.position.y+=o.velY*i*4,o.group.position.z+=o.velZ*i*4;const h=Math.sin(t*2+o.phase)*.5+.5;o.glowMat.opacity=.3+h*.4,o.hazeMat.opacity=.08+h*.12;const f=t*(2.5+s*.5)+o.phase,u=.14+Math.sin(t*1.3+o.phase)*.06;o.group.children[5].position.set(Math.cos(f)*u,Math.sin(f*1.5)*.08,Math.sin(f)*u);for(let g=0;g<o.tendrils.length;g++){const _=o.tendrils[g],p=Math.sin(t*3+g*2.1+o.phase)*.3,m=.08+Math.sin(t*2+g*1.5)*.04;_.mesh.position.x=Math.cos(_.baseAng+p)*m,_.mesh.position.z=Math.sin(_.baseAng+p)*m,_.mesh.rotation.y=_.baseAng+p,_.mesh.rotation.z=Math.PI/3+Math.sin(t*2.5+g)*.2}for(let g=0;g<o.embers.length;g++){const _=(g+1)*.08;o.embers[g].position.y=-.06-_+Math.sin(t*4+g*1.4+o.phase)*.03,o.embers[g].position.x=Math.sin(t*2.5+g*2+o.phase)*.06,o.embers[g].material.opacity=.2+Math.sin(t*5+g*1.7)*.15}o.facet.rotation.y+=i*1.5,o.facet.rotation.x+=i*.7,o.halo.rotation.z+=i*.3,o.halo2.rotation.y+=i*.2}}function _S(i,t){for(let e=0;e<si.length;e++){const n=si[e],s=n.x-Q.pos.x,o=n.z-Q.pos.z,a=s*s+o*o<(ql+.5)*(ql+.5),l=a?1:0;n.glowIntensity+=(l-n.glowIntensity)*i*3,n.discMat.opacity=n.glowIntensity*.25*(.6+Math.sin(t*2+n.phase)*.4),n.mushMat.emissiveIntensity=(.2+n.glowIntensity*.8)*Ie,a&&Q.vel.y>0&&Q.vel.y<=Aa+.5&&(Q.vel.y=Aa+BM,n.glowIntensity=1.5,Jw());const c=.08+n.glowIntensity*.25;n.sporeMat.opacity=c;for(let h=0;h<n.spores.length;h++){const f=n.spores[h];f.drift+=i*.3,f.mesh.position.y+=f.speed*i*(.5+n.glowIntensity),f.mesh.position.x=f.baseX+Math.sin(t*.8+f.drift)*.15,f.mesh.position.z=f.baseZ+Math.cos(t*.6+f.drift)*.12,f.mesh.position.y>.8&&(f.mesh.position.y=.03),f.mesh.scale.setScalar(.6+Math.sin(t*2+h)*.4)}for(let h=0;h<n.glowWorms.length;h++){const f=Math.sin(t*1.5+h*1.3+n.phase)*.5+.5;n.glowWorms[h].material.opacity=.1+f*.4+n.glowIntensity*.3}}}function vS(i,t){for(let e=0;e<ii.length;e++){const n=ii[e];if(n.popped){if(n.popTimer-=i,n.popTimer<=0){n.popped=!1,n.group.visible=!0;const h=T()*6.28,f=8+T()*he*.5;n.homeX=Math.cos(h)*f,n.homeZ=Math.sin(h)*f,n.floatY=.5+T()*4,n.group.position.set(n.homeX,n.floatY,n.homeZ)}continue}n.driftAng+=i*.2;const s=n.homeX+Math.sin(n.driftAng)*3,o=n.homeZ+Math.cos(n.driftAng*.7)*3;n.group.position.x+=(s-n.group.position.x)*i*.5,n.group.position.z+=(o-n.group.position.z)*i*.5,n.group.position.y=n.floatY+Math.sin(t*.6+n.phase)*n.bobAmp;const r=(t*.1+n.phase)%1;n.shellMat.color.setRGB(Math.sin(r*6.28)*.15+.7,Math.sin(r*6.28+2.09)*.15+.7,Math.sin(r*6.28+4.19)*.15+.8),n.shellMat.opacity=.18+Math.sin(t*1.5+n.phase)*.08;const a=n.group.position.x-Q.pos.x,l=n.group.position.y-Q.pos.y,c=n.group.position.z-Q.pos.z;a*a+l*l+c*c<Mf*Mf*n.sc*n.sc&&(n.popped=!0,n.popTimer=8+Math.random()*8,n.group.visible=!1,uw(n.group.position.x,n.group.position.y,n.group.position.z,6),Kw(n.group.position,Q.pos))}}function MS(i,t){const e=Qh();for(let n=0;n<ke.length;n++){const s=ke[n],o=.015+e*.01;for(let f=0;f<s.pads.length;f++)s.pads[f].mesh.position.y=.05+Math.sin(t*(.8+e*.4)+s.pads[f].phase)*o;const r=e*.08;s.waterMat.emissiveIntensity=(.15+r+Math.sin(t*1+s.phase)*.1)*Ie;const a=Math.sin(t*1.2+s.phase)*.5+.5;s.flMat.emissiveIntensity=(.3+a*.5)*Ie;const l=.25+e*.2,c=.12+e*.08;for(let f=0;f<s.ripples.length;f++){const u=s.ripples[f],d=(t*l+u.phase)%1,g=.2+d*s.pondR*.8;u.mesh.scale.setScalar(g),u.mesh.material.opacity=(1-d)*c}const h=1+e*.5;for(let f=0;f<s.tadpoles.length;f++){const u=s.tadpoles[f];u.ang+=u.speed*h*i;const d=Math.cos(u.ang)*u.orbR,g=Math.sin(u.ang)*u.orbR;u.body.position.x=d,u.body.position.z=g,u.body.rotation.y=u.ang+Math.PI/2;const _=.02;u.tail.position.x=d-Math.cos(u.ang)*_,u.tail.position.z=g-Math.sin(u.ang)*_,u.tail.rotation.y=u.ang,u.tail.rotation.z=Math.PI/2+Math.sin(t*(8+e*2)+f*3)*.4}}}function yS(i,t){if(Qc-=i,Qc<=0){Qc=.5;for(let o=0;o<ie.length;o++){const r=ie[o],a=r.x-Q.pos.x,l=r.z-Q.pos.z;if(a*a+l*l<36){zn={x:r.x,z:r.z},Qn=0;break}}}const e=mS();if(!zn){e.visible=!1;return}if(Qn+=i*12,Qn>30){zn=null,Qn=0,e.visible=!1;return}e.visible=!0,e.position.set(zn.x,.15,zn.z),e.scale.setScalar(Qn),e.material.opacity=(1-Qn/30)*.45;const n=Qn,s=4;for(let o=0;o<yn.length;o++){const r=yn[o],a=r.x-zn.x,l=r.z-zn.z,c=Math.sqrt(a*a+l*l);if(Math.abs(c-n)<s){const h=1-Math.abs(c-n)/s;r.capMat.emissiveIntensity=Math.max(r.capMat.emissiveIntensity,(r.base+h*2)*Ie)}}for(let o=0;o<ai.length;o++){const r=ai[o],a=r.group.position.x-zn.x,l=r.group.position.z-zn.z,c=Math.sqrt(a*a+l*l);if(Math.abs(c-n)<s){const h=1-Math.abs(c-n)/s;r.petalMat.emissiveIntensity=Math.max(r.petalMat.emissiveIntensity,(.3+h*1.5)*Ie)}}}function wS(i,t){const e=Q.pos.x,n=Q.pos.z,s=Qh(),o=Ci?.6:s>.3?s*.4:0;for(let c=0;c<ai.length;c++){const h=ai[c],f=h.group.position.x,u=h.group.position.z,d=f-e,g=u-n,p=d*d+g*g<16?1:0;h._react=h._react||0,h._react+=(p-h._react)*i*(p>0?4:1.5);const m=(1+h._react*.15)*(1-o*.12),w=(1+h._react*.05)*(1-o*.15);h.group.scale.set(m,w,m),h.petalMat.emissiveIntensity+=h._react*.6*Ie*(1-o*.4)}for(let c=0;c<yn.length;c++){const h=yn[c],f=h.x-e,u=h.z-n,g=f*f+u*u<4?1:0;h._touch=h._touch||0,h._touch+=(g-h._touch)*i*(g>0?6:1.5);const _=s*.4;h.capMat.emissiveIntensity+=(h._touch*1.5+_)*Ie;const p=1+h._touch*.08;h.group.scale.set(p,1+h._touch*.04,p)}for(let c=0;c<hr.length;c++){const h=hr[c],f=h.group.position.x,u=h.group.position.z,d=f-e,g=u-n,p=d*d+g*g<2.25?.65:1;h._curl=h._curl===void 0?1:h._curl,h._curl+=(p-h._curl)*i*(p<1?4:1.5),h.group.scale.set(1+(1-h._curl)*.3,h._curl,1+(1-h._curl)*.3)}pS();const r=tr==="FOG_BANK"?.5:1;let a=0,l=0;for(let c=0;c<ie.length;c++){const h=ie[c],f=h.x-e,u=h.z-n;if(f*f+u*u<36)for(let d=0;d<ie.length;d++){if(c===d)continue;const g=ie[d],_=h.x-g.x,p=h.z-g.z,m=_*_+p*p;if(m<400){a++;const w=(1-Math.sqrt(m)/20)*.5*r;if(g.mat.emissiveIntensity+=w*Ie,l<yh){const v=wh[l],M=v.geo.attributes.position.array,A=1,E=1;M[0]=h.x,M[1]=A,M[2]=h.z,M[3]=g.x,M[4]=E,M[5]=g.z,v.geo.attributes.position.needsUpdate=!0,v.geo.computeBoundingSphere(),v.active=!0;const b=Math.sin(t*3+c*1.5+d*.7)*.3+.5;v.opacity=w*b*Ie,v.line.material.opacity=v.opacity,v.line.visible=!0,l++}}}}for(let c=l;c<yh;c++){const h=wh[c];h.line.visible&&(h.opacity*=.85,h.line.material.opacity=h.opacity,h.opacity<.01&&(h.line.visible=!1))}return a}let ia="EXPLORE",tl=0,el=0;function SS(i,t){let e=!1;for(let u=0;u<ie.length;u++){const d=ie[u].x-Q.pos.x,g=ie[u].z-Q.pos.z;if(d*d+g*g<64){e=!0;break}}ia=e?"NEAR_CRYSTAL":"EXPLORE",tl+=i;const n=Qh(),s=Math.max(.2,1-n*.8),o=(ia==="NEAR_CRYSTAL"?.08:.25)/s,r=Math.floor((ia==="NEAR_CRYSTAL"?120:100)*s);if(tl>o&&(tl=0,sp(0,t)<r))if(ia==="NEAR_CRYSTAL")for(let d=0;d<ie.length;d++){const g=ie[d].x-Q.pos.x,_=ie[d].z-Q.pos.z;g*g+_*_<100&&ua(ie[d].x,ne(ie[d].x,ie[d].z)+1,ie[d].z,3+Math.random()*4)}else if(Math.random()<.3&&ai.length>0){const d=ai[Math.floor(Math.random()*ai.length)];if(d._react>.3){const g=d.group.position.x,_=d.group.position.z;ua(g+(Math.random()-.5)*2,ne(g,_)+.5,_+(Math.random()-.5)*2,4+Math.random()*6)}}else{const d=Math.random()*6.28,g=5+Math.random()*25,_=Q.pos.x+Math.cos(d)*g,p=Q.pos.z+Math.sin(d)*g;ua(_,ne(_,p),p,6+Math.random()*10)}if(el+=i,el>.2){el=0;for(let u=0;u<yn.length;u++){const d=yn[u],g=d.x-Q.pos.x,_=d.z-Q.pos.z;g*g+_*_<200&&Math.random()<.15&&nw(d.x,.6*d.group.scale.x,d.z)}}for(let u=0;u<yn.length;u++){const d=yn[u],g=Math.sin(t*d.speed+d.phase)*.5+.5;d.capMat.emissiveIntensity=d.base*(.5+g*.8)*Ie}for(let u=0;u<ie.length;u++){const d=ie[u],g=Math.sin(t*.6+d.phase)*.5+.5;d.mat.emissiveIntensity=(.6+g*.6)*Ie,d.group.children[0].rotation.y+=i*.15,d.light&&(d.light.intensity=(.15+g*.15)*Ie)}if(!Oi.length)for(let u=0;u<ie.length;u++)Oi.push({idx:u,dist:0});const a=Q.pos.x-kf,l=Q.pos.z-Gf;if(a*a+l*l>1){kf=Q.pos.x,Gf=Q.pos.z;for(let u=0;u<ie.length;u++){const d=ie[u],g=d.x-Q.pos.x,_=d.z-Q.pos.z;Oi[u].idx=u,Oi[u].dist=g*g+_*_}Oi.sort((u,d)=>u.dist-d.dist)}for(let u=0;u<ss.length;u++)if(u<Oi.length&&Oi[u].dist<2500){const d=ie[Oi[u].idx],g=Math.sin(t*.6+d.phase)*.5+.5;ss[u].position.set(d.x,1.5,d.z),ss[u].intensity=(.4+g*.4)*Ie,ss[u].distance=12,ss[u].color.setHex(B.crystal)}else ss[u].intensity=0;if(Ei>.8&&Math.random()<.005)for(let u=0;u<nr.length;u++){const d=nr[u];if(!d.dispersed&&Math.random()<.1){d.dispersed=!0;for(let g=0;g<8;g++)Zd(d.x,d.h+.05,d.z);for(let g=2;g<d.group.children.length;g++)d.group.children[g].visible=!1;d.regrowTimer=15+Math.random()*10}}const c=Ei>.3?(Ei-.3)*.02:0,h=Ci?.03:0;if(Math.random()<c+h)for(let u=0;u<ce.length;u++){const d=ce[u],g=d.x-Q.pos.x,_=d.z-Q.pos.z;if(g*g+_*_<900&&Math.random()<.15){const p=(d.group.children[0]?d.group.children[0].geometry.parameters.height*.7:6)+d.group.position.y;mw(d.x,p,d.z);break}}Rp(i,t),Cp(i,t),Pp(i,t),Ip(i,t),Xd(i,t),Ap(i,t);for(let u=0;u<ka.length;u++){const d=ka[u];if(!d.sparkles)continue;const g=d.x||d.group.position.x,_=d.z||d.group.position.z;let p=0;for(let E=0;E<ie.length;E++){const b=ie[E].x-g,S=ie[E].z-_,y=b*b+S*S;y<100&&(p=Math.max(p,(1-Math.sqrt(y)/10)*.6))}const m=g-Q.pos.x,w=_-Q.pos.z,v=m*m+w*w,M=v<25?(1-Math.sqrt(v)/5)*.3:0;let A=0;if(zn&&Qn>0){const E=g-zn.x,b=_-zn.z,S=Math.sqrt(E*E+b*b);Math.abs(S-Qn)<3&&(A=(1-Math.abs(S-Qn)/3)*.8)}for(let E=0;E<d.sparkles.length;E++){const b=Math.sin(t*4+u*2.3+E*1.7)*.35;d.sparkles[E].material.opacity=.15+b+p+M+A}d.mossMat&&M>0&&(d.mossMat.emissiveIntensity=.05+M*.4*Math.sin(t*2+u)*.5+.5)}xS(i,t),Iy(nr,i,t,Q.pos),_S(i,t),vS(i,t),MS(i,t),cp(i,t,Q.pos),Cy(i,t),gw(i,t),cw(i),fw(i),yS(i);const f=wS(i,t);Ew(i,t),Jy(t),jw(i),oS(Q.pos,Be,En,ni,yo,si,ke,f),rS(i)}let He=0,Sh=!1;function bS(){Sh||(Sh=!0,ty(!0),dS())}function Lp(){requestAnimationFrame(Lp);const i=Math.min(Nd.getDelta(),.1);He+=i,Cw(i);const t=Nw(i,He,Q.pos);if(Fw(i,Q.pos,t,ds,Qs),ei>0&&(Yh.intensity+=ei*.8,ht.background.r=Math.min(ht.background.r+ei*.08,.25),ht.background.g=Math.min(ht.background.g+ei*.08,.25),ht.background.b=Math.min(ht.background.b+ei*.12,.35)),Xw(i,Ei,t,Ci,ei,Ue,Q.pos,ke),iw(ds,Qs),Ry(ds,Qs,Ei),dw(ds,Qs),!Sh){an.position.set(0,qa,0),an.rotation.order="YXZ",an.rotation.y+=i*.08,an.rotation.x=0;for(let e=0;e<yn.length;e++){const n=yn[e],s=Math.sin(He*n.speed+n.phase)*.5+.5;n.capMat.emissiveIntensity=n.base*(.5+s*.8)*Ie}for(let e=0;e<ie.length;e++){const n=ie[e];n.mat.emissiveIntensity=(1+Math.sin(He*.6+n.phase)*.5*1.5+.75)*Ie}Rp(i,He),Cp(i,He),Pp(i,He),Ip(i,He),Xd(i,He),Ap(i,He),cp(i,He,Q.pos);for(let e=0;e<ii.length;e++)ii[e].popped||(ii[e].group.position.y=ii[e].floatY+Math.sin(He*.6+ii[e].phase)*ii[e].bobAmp);for(let e=0;e<ke.length;e++)for(let n=0;n<ke[e].pads.length;n++)ke[e].pads[n].mesh.position.y=.05+Math.sin(He*.8+ke[e].pads[n].phase)*.015;for(let e=0;e<Cn.length;e++){const n=Cn[e],s=Math.sin(He*1.5+n.phase)*.5+.5;n.group.position.y=n.flyY+Math.sin(He*.8+n.phase)*.3,n.glowMat.opacity=.3+s*.4}Sf();return}_y(i),SS(i,He),sp(i,He),sw(i),an.position.copy(Q.pos),an.position.y+=Yd,an.rotation.order="YXZ",an.rotation.y=ar,an.rotation.x=xs,hS(i,Q.pos),Sf()}try{Jl(0,0,5),hy(),Rw({scene:ht,moon:Bn,moon2:kn,hemiLight:Yh,playerLight:qh}),gS(),ay(),gy(ce,ka),xy(If),my(i=>{let t=!1;for(let e=0;e<ke.length;e++){const n=ke[e].x-Q.pos.x,s=ke[e].z-Q.pos.z;if(n*n+s*s<16){t=!0;break}}qw(i,t),Math.random()<.4&&If(Q.pos.x,Q.pos.z,1)},()=>Zw(),i=>$w(i)),Uw(),zw(),Qy(150),ew(60),JM(),ow(FM),aw(20),Ay(40),hw(30),pw(50),qy(),jy(),Ky(),Ww(),sS(),lS(),uS(),Tw({orbs:Cn,obeliskGroup:Hy(),obeliskMat:Vy(),obeliskGlowMat:Wy(),pinnacleOrb:Xy(),pinnacleRings:Yy(),moatMesh:Zy(),moatMat:$y(),rainbowArcs:lr,player:Q,makeLaser:xw,orbHudEl:fS(),deers:Be,puffs:En,jellies:ni,moths:yo}),QM(bS);for(let i=0;i<50;i++){const t=Math.random()*6.28,e=3+Math.random()*he*.7,n=Math.cos(t)*e,s=Math.sin(t)*e;ua(n,ne(n,s),s,8+Math.random()*12)}console.log("✓ Init: trees="+ce.length+" mush="+yn.length+" crystals="+ie.length+" orbs="+Cn.length+" creatures="+(ni.length+En.length+Be.length+yo.length)+" wisps="+Ga.length+" dandelions="+nr.length+" fairyRings="+si.length+" bubbles="+ii.length+" ponds="+ke.length+" scene="+ht.children.length),Lp()}catch(i){console.error("INIT FAILED:",i),document.body.innerHTML='<div style="color:red;padding:30px;font-family:monospace"><h2>Init Failed</h2><pre>'+(i.stack||i.message)+"</pre></div>"}
