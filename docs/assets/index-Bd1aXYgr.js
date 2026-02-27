(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lh="172",hp=0,Wh=1,up=2,wf=1,Sf=2,ri=3,Ci=0,en=1,Gt=2,fi=0,Fs=1,Ho=2,Xh=3,Yh=4,fp=5,Ki=100,dp=101,pp=102,mp=103,gp=104,xp=200,_p=201,vp=202,Mp=203,Hc=204,Vc=205,yp=206,wp=207,Sp=208,bp=209,Tp=210,Ep=211,Ap=212,Rp=213,Cp=214,Wc=0,Xc=1,Yc=2,Ys=3,qc=4,Zc=5,$c=6,jc=7,bf=0,Pp=1,Ip=2,Ri=0,Lp=1,Dp=2,Up=3,Tf=4,Np=5,Fp=6,zp=7,Ef=300,qs=301,Zs=302,Kc=303,Jc=304,Aa=306,sa=1e3,Qi=1001,Qc=1002,yn=1003,Op=1004,or=1005,qn=1006,Fa=1007,ts=1008,mi=1009,Af=1010,Rf=1011,Vo=1012,hh=1013,rs=1014,Zn=1015,di=1016,uh=1017,fh=1018,$s=1020,Cf=35902,Pf=1021,If=1022,Fn=1023,Lf=1024,Df=1025,zs=1026,js=1027,dh=1028,ph=1029,Uf=1030,mh=1031,gh=1033,Wr=33776,Xr=33777,Yr=33778,qr=33779,tl=35840,el=35841,nl=35842,il=35843,sl=36196,ol=37492,rl=37496,al=37808,cl=37809,ll=37810,hl=37811,ul=37812,fl=37813,dl=37814,pl=37815,ml=37816,gl=37817,xl=37818,_l=37819,vl=37820,Ml=37821,Zr=36492,yl=36494,wl=36495,Nf=36283,Sl=36284,bl=36285,Tl=36286,Bp=3200,kp=3201,Ff=0,Gp=1,Ti="",tn="srgb",Ks="srgb-linear",oa="linear",fe="srgb",gs=7680,qh=519,Hp=512,Vp=513,Wp=514,zf=515,Xp=516,Yp=517,qp=518,Zp=519,Zh=35044,pn=35048,$h="300 es",hi=2e3,ra=2001;class so{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],za=Math.PI/180,El=180/Math.PI;function oo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[s&255]+ke[s>>8&255]+ke[s>>16&255]+ke[s>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Zt(s,t,e){return Math.max(t,Math.min(e,s))}function $p(s,t){return(s%t+t)%t}function Oa(s,t,e){return(1-e)*s+e*t}function lo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function sn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,i,o,r,a,c,l){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l)}set(t,e,n,i,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=i[0],d=i[3],m=i[6],y=i[1],v=i[4],x=i[7],A=i[2],E=i[5],S=i[8];return o[0]=r*_+a*y+c*A,o[3]=r*d+a*v+c*E,o[6]=r*m+a*x+c*S,o[1]=l*_+h*y+u*A,o[4]=l*d+h*v+u*E,o[7]=l*m+h*x+u*S,o[2]=f*_+p*y+g*A,o[5]=f*d+p*v+g*E,o[8]=f*m+p*x+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+i*o*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,f=a*c-h*o,p=l*o-r*c,g=e*u+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*r)*_,t[3]=f*_,t[4]=(h*e-i*c)*_,t[5]=(i*o-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ba.makeScale(t,e)),this}rotate(t){return this.premultiply(Ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ba=new Vt;function Of(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function aa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function jp(){const s=aa("canvas");return s.style.display="block",s}const jh={};function Ls(s){s in jh||(jh[s]=!0,console.warn(s))}function Kp(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Jp(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qp(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Kh=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jh=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function t0(){const s={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(i,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===fe&&(i.r=pi(i.r),i.g=pi(i.g),i.b=pi(i.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===fe&&(i.r=Os(i.r),i.g=Os(i.g),i.b=Os(i.b))),i},fromWorkingColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},toWorkingColorSpace:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ti?oa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,r){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ks]:{primaries:t,whitePoint:n,transfer:oa,toXYZ:Kh,fromXYZ:Jh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:Kh,fromXYZ:Jh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),s}const se=t0();function pi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let xs;class e0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xs===void 0&&(xs=aa("canvas")),xs.width=t.width,xs.height=t.height;const n=xs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=aa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=pi(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pi(e[n]/255)*255):e[n]=pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let n0=0;class Bf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=oo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(ka(i[r].image)):o.push(ka(i[r]))}else o=ka(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function ka(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?e0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let i0=0;class Ve extends so{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=Qi,i=Qi,o=qn,r=ts,a=Fn,c=mi,l=Ve.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=oo(),this.name="",this.source=new Bf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ef)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sa:t.x=t.x-Math.floor(t.x);break;case Qi:t.x=t.x<0?0:1;break;case Qc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sa:t.y=t.y-Math.floor(t.y);break;case Qi:t.y=t.y<0?0:1;break;case Qc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Ef;Ve.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,i=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],_=c[2],d=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+d)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,x=(p+1)/2,A=(m+1)/2,E=(h+f)/4,S=(u+_)/4,T=(g+d)/4;return v>x&&v>A?v<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(v),i=E/n,o=S/n):x>A?x<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(x),n=E/i,o=T/i):A<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(A),n=S/o,i=T/o),this.set(n,i,o,e),this}let y=Math.sqrt((d-g)*(d-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class s0 extends so{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ve(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Bf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends s0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class kf extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class o0 extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=o[r+0],p=o[r+1],g=o[r+2],_=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==p||h!==g){let d=1-a;const m=c*f+l*p+h*g+u*_,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const A=Math.sqrt(v),E=Math.atan2(A,m*y);d=Math.sin(d*E)/A,a=Math.sin(a*E)/A}const x=a*y;if(c=c*d+f*x,l=l*d+p*x,h=h*d+g*x,u=u*d+_*x,d===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=o[r],f=o[r+1],p=o[r+2],g=o[r+3];return t[e]=a*g+h*u+c*p-l*f,t[e+1]=c*g+h*f+l*u-a*p,t[e+2]=l*g+h*p+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(o/2),f=c(n/2),p=c(i/2),g=c(o/2);switch(r){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(o-l)*p,this._z=(r-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(o+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(o-l)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(r-i)/p,this._x=(o+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+i*l-o*c,this._y=i*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-i*a,this._w=r*h-n*a-i*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=r*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=o*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*i-a*n),h=2*(a*e-o*i),u=2*(o*n-r*e);return this.x=e+c*l+r*u-a*h,this.y=n+c*h+a*l-o*u,this.z=i+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-o*a,this.y=o*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ga.copy(this).projectOnVector(t),this.sub(Ga)}reflect(t){return this.sub(Ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ga=new U,Qh=new Ko;class hs{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Ln):Ln.fromBufferAttribute(o,r),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(t.matrixWorld),this.union(rr)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ho),ar.subVectors(this.max,ho),_s.subVectors(t.a,ho),vs.subVectors(t.b,ho),Ms.subVectors(t.c,ho),xi.subVectors(vs,_s),_i.subVectors(Ms,vs),Ui.subVectors(_s,Ms);let e=[0,-xi.z,xi.y,0,-_i.z,_i.y,0,-Ui.z,Ui.y,xi.z,0,-xi.x,_i.z,0,-_i.x,Ui.z,0,-Ui.x,-xi.y,xi.x,0,-_i.y,_i.x,0,-Ui.y,Ui.x,0];return!Ha(e,_s,vs,Ms,ar)||(e=[1,0,0,0,1,0,0,0,1],!Ha(e,_s,vs,Ms,ar))?!1:(cr.crossVectors(xi,_i),e=[cr.x,cr.y,cr.z],Ha(e,_s,vs,Ms,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ei=[new U,new U,new U,new U,new U,new U,new U,new U],Ln=new U,rr=new hs,_s=new U,vs=new U,Ms=new U,xi=new U,_i=new U,Ui=new U,ho=new U,ar=new U,cr=new U,Ni=new U;function Ha(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){Ni.fromArray(s,o);const a=i.x*Math.abs(Ni.x)+i.y*Math.abs(Ni.y)+i.z*Math.abs(Ni.z),c=t.dot(Ni),l=e.dot(Ni),h=n.dot(Ni);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const r0=new hs,uo=new U,Va=new U;class us{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):r0.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;uo.subVectors(t,this.center);const e=uo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(uo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(uo.copy(t.center).add(Va)),this.expandByPoint(uo.copy(t.center).sub(Va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new U,Wa=new U,lr=new U,vi=new U,Xa=new U,hr=new U,Ya=new U;class xh{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Wa.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(Wa);const o=t.distanceTo(e)*.5,r=-this.direction.dot(lr),a=vi.dot(this.direction),c=-vi.dot(lr),l=vi.lengthSq(),h=Math.abs(1-r*r);let u,f,p,g;if(h>0)if(u=r*c-a,f=r*a-c,g=o*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+r*f+2*a)+f*(r*u+f+2*c)+l}else f=o,u=Math.max(0,-(r*f+a)),p=-u*u+f*(f+2*c)+l;else f=-o,u=Math.max(0,-(r*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-r*o+a)),f=u>0?-o:Math.min(Math.max(-o,-c),o),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-o,-c),o),p=f*(f+2*c)+l):(u=Math.max(0,-(r*o+a)),f=u>0?o:Math.min(Math.max(-o,-c),o),p=-u*u+f*(f+2*c)+l);else f=r>0?-o:o,u=Math.max(0,-(r*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Wa).addScaledVector(lr,f),p}intersectSphere(t,e){ni.subVectors(t.center,this.origin);const n=ni.dot(this.direction),i=ni.dot(ni)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(o=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,i,o){Xa.subVectors(e,t),hr.subVectors(n,t),Ya.crossVectors(Xa,hr);let r=this.direction.dot(Ya),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;vi.subVectors(this.origin,t);const c=a*this.direction.dot(hr.crossVectors(vi,hr));if(c<0)return null;const l=a*this.direction.dot(Xa.cross(vi));if(l<0||c+l>r)return null;const h=-a*vi.dot(Ya);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,i,o,r,a,c,l,h,u,f,p,g,_,d){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l,h,u,f,p,g,_,d)}set(t,e,n,i,o,r,a,c,l,h,u,f,p,g,_,d){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=o,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=p,m[7]=g,m[11]=_,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ys.setFromMatrixColumn(t,0).length(),o=1/ys.setFromMatrixColumn(t,1).length(),r=1/ys.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const f=r*h,p=r*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+p*l,e[10]=r*c}else if(t.order==="YXZ"){const f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-p,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=r*c}else if(t.order==="ZXY"){const f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-r*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=r*h,e[9]=_-f*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const f=r*h,p=r*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const f=r*c,p=r*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=r*c,p=r*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=r*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(a0,t,c0)}lookAt(t,e,n){const i=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Mi.crossVectors(n,gn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Mi.crossVectors(n,gn)),Mi.normalize(),ur.crossVectors(gn,Mi),i[0]=Mi.x,i[4]=ur.x,i[8]=gn.x,i[1]=Mi.y,i[5]=ur.y,i[9]=gn.y,i[2]=Mi.z,i[6]=ur.z,i[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],d=n[10],m=n[14],y=n[3],v=n[7],x=n[11],A=n[15],E=i[0],S=i[4],T=i[8],w=i[12],M=i[1],P=i[5],N=i[9],D=i[13],z=i[2],W=i[6],H=i[10],Z=i[14],X=i[3],ct=i[7],dt=i[11],bt=i[15];return o[0]=r*E+a*M+c*z+l*X,o[4]=r*S+a*P+c*W+l*ct,o[8]=r*T+a*N+c*H+l*dt,o[12]=r*w+a*D+c*Z+l*bt,o[1]=h*E+u*M+f*z+p*X,o[5]=h*S+u*P+f*W+p*ct,o[9]=h*T+u*N+f*H+p*dt,o[13]=h*w+u*D+f*Z+p*bt,o[2]=g*E+_*M+d*z+m*X,o[6]=g*S+_*P+d*W+m*ct,o[10]=g*T+_*N+d*H+m*dt,o[14]=g*w+_*D+d*Z+m*bt,o[3]=y*E+v*M+x*z+A*X,o[7]=y*S+v*P+x*W+A*ct,o[11]=y*T+v*N+x*H+A*dt,o[15]=y*w+v*D+x*Z+A*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],d=t[11],m=t[15];return g*(+o*c*u-i*l*u-o*a*f+n*l*f+i*a*p-n*c*p)+_*(+e*c*p-e*l*f+o*r*f-i*r*p+i*l*h-o*c*h)+d*(+e*l*u-e*a*p-o*r*u+n*r*p+o*a*h-n*l*h)+m*(-i*a*h-e*c*u+e*a*f+i*r*u-n*r*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],d=t[14],m=t[15],y=u*d*l-_*f*l+_*c*p-a*d*p-u*c*m+a*f*m,v=g*f*l-h*d*l-g*c*p+r*d*p+h*c*m-r*f*m,x=h*_*l-g*u*l+g*a*p-r*_*p-h*a*m+r*u*m,A=g*u*c-h*_*c-g*a*f+r*_*f+h*a*d-r*u*d,E=e*y+n*v+i*x+o*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/E;return t[0]=y*S,t[1]=(_*f*o-u*d*o-_*i*p+n*d*p+u*i*m-n*f*m)*S,t[2]=(a*d*o-_*c*o+_*i*l-n*d*l-a*i*m+n*c*m)*S,t[3]=(u*c*o-a*f*o-u*i*l+n*f*l+a*i*p-n*c*p)*S,t[4]=v*S,t[5]=(h*d*o-g*f*o+g*i*p-e*d*p-h*i*m+e*f*m)*S,t[6]=(g*c*o-r*d*o-g*i*l+e*d*l+r*i*m-e*c*m)*S,t[7]=(r*f*o-h*c*o+h*i*l-e*f*l-r*i*p+e*c*p)*S,t[8]=x*S,t[9]=(g*u*o-h*_*o-g*n*p+e*_*p+h*n*m-e*u*m)*S,t[10]=(r*_*o-g*a*o+g*n*l-e*_*l-r*n*m+e*a*m)*S,t[11]=(h*a*o-r*u*o-h*n*l+e*u*l+r*n*p-e*a*p)*S,t[12]=A*S,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*d+e*u*d)*S,t[14]=(g*a*i-r*_*i-g*n*c+e*_*c+r*n*d-e*a*d)*S,t[15]=(r*u*i-h*a*i+h*n*c-e*u*c-r*n*f+e*a*f)*S,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*r,0,l*c-i*a,h*c+i*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,f=o*l,p=o*h,g=o*u,_=r*h,d=r*u,m=a*u,y=c*l,v=c*h,x=c*u,A=n.x,E=n.y,S=n.z;return i[0]=(1-(_+m))*A,i[1]=(p+x)*A,i[2]=(g-v)*A,i[3]=0,i[4]=(p-x)*E,i[5]=(1-(f+m))*E,i[6]=(d+y)*E,i[7]=0,i[8]=(g+v)*S,i[9]=(d-y)*S,i[10]=(1-(f+_))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=ys.set(i[0],i[1],i[2]).length();const r=ys.set(i[4],i[5],i[6]).length(),a=ys.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],Dn.copy(this);const l=1/o,h=1/r,u=1/a;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,e.setFromRotationMatrix(Dn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=hi){const c=this.elements,l=2*o/(e-t),h=2*o/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let p,g;if(a===hi)p=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===ra)p=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=hi){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(r-o),f=(e+t)*l,p=(n+i)*h;let g,_;if(a===hi)g=(r+o)*u,_=-2*u;else if(a===ra)g=o*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ys=new U,Dn=new he,a0=new U(0,0,0),c0=new U(1,1,1),Mi=new U,ur=new U,gn=new U,tu=new he,eu=new Ko;class Kn{constructor(t=0,e=0,n=0,i=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return eu.setFromEuler(this),this.setFromQuaternion(eu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class Gf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let l0=0;const nu=new U,ws=new Ko,ii=new he,fr=new U,fo=new U,h0=new U,u0=new Ko,iu=new U(1,0,0),su=new U(0,1,0),ou=new U(0,0,1),ru={type:"added"},f0={type:"removed"},Ss={type:"childadded",child:null},qa={type:"childremoved",child:null};class xe extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new U,e=new Kn,n=new Ko,i=new U(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new he},normalMatrix:{value:new Vt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.multiply(ws),this}rotateOnWorldAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.premultiply(ws),this}rotateX(t){return this.rotateOnAxis(iu,t)}rotateY(t){return this.rotateOnAxis(su,t)}rotateZ(t){return this.rotateOnAxis(ou,t)}translateOnAxis(t,e){return nu.copy(t).applyQuaternion(this.quaternion),this.position.add(nu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(iu,t)}translateY(t){return this.translateOnAxis(su,t)}translateZ(t){return this.translateOnAxis(ou,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fr.copy(t):fr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(fo,fr,this.up):ii.lookAt(fr,fo,this.up),this.quaternion.setFromRotationMatrix(ii),i&&(ii.extractRotation(i.matrixWorld),ws.setFromRotationMatrix(ii),this.quaternion.premultiply(ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ru),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(f0),qa.child=t,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ru),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,t,h0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,u0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),f=r(t.skeletons),p=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}xe.DEFAULT_UP=new U(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new U,si=new U,Za=new U,oi=new U,bs=new U,Ts=new U,au=new U,$a=new U,ja=new U,Ka=new U,Ja=new de,Qa=new de,tc=new de;class Nn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Un.subVectors(t,e),i.cross(Un);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){Un.subVectors(i,e),si.subVectors(n,e),Za.subVectors(t,e);const r=Un.dot(Un),a=Un.dot(si),c=Un.dot(Za),l=si.dot(si),h=si.dot(Za),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const f=1/u,p=(l*c-a*h)*f,g=(r*h-a*c)*f;return o.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,i,o,r,a,c){return this.getBarycoord(t,e,n,i,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,oi.x),c.addScaledVector(r,oi.y),c.addScaledVector(a,oi.z),c)}static getInterpolatedAttribute(t,e,n,i,o,r){return Ja.setScalar(0),Qa.setScalar(0),tc.setScalar(0),Ja.fromBufferAttribute(t,e),Qa.fromBufferAttribute(t,n),tc.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Ja,o.x),r.addScaledVector(Qa,o.y),r.addScaledVector(tc,o.z),r}static isFrontFacing(t,e,n,i){return Un.subVectors(n,e),si.subVectors(t,e),Un.cross(si).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Un.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return Nn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return Nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;bs.subVectors(i,n),Ts.subVectors(o,n),$a.subVectors(t,n);const c=bs.dot($a),l=Ts.dot($a);if(c<=0&&l<=0)return e.copy(n);ja.subVectors(t,i);const h=bs.dot(ja),u=Ts.dot(ja);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(bs,r);Ka.subVectors(t,o);const p=bs.dot(Ka),g=Ts.dot(Ka);if(g>=0&&p<=g)return e.copy(o);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ts,a);const d=h*g-p*u;if(d<=0&&u-h>=0&&p-g>=0)return au.subVectors(o,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(au,a);const m=1/(d+_+f);return r=_*m,a=f*m,e.copy(n).addScaledVector(bs,r).addScaledVector(Ts,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},dr={h:0,s:0,l:0};function ec(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=se.workingColorSpace){if(t=$p(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=ec(r,o,t+1/3),this.g=ec(r,o,t),this.b=ec(r,o,t-1/3)}return se.toWorkingColorSpace(this,i),this}setStyle(t,e=tn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const n=Hf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return se.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Zt(Ge.r*255,0,255))*65536+Math.round(Zt(Ge.g*255,0,255))*256+Math.round(Zt(Ge.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Ge.copy(this),e);const n=Ge.r,i=Ge.g,o=Ge.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case n:c=(i-o)/u+(i<o?6:0);break;case i:c=(o-n)/u+2;break;case o:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=tn){se.fromWorkingColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,i=Ge.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(dr);const n=Oa(yi.h,dr.h,e),i=Oa(yi.s,dr.s,e),o=Oa(yi.l,dr.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new lt;lt.NAMES=Hf;let d0=0;class fs extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=oo(),this.name="",this.type="Material",this.blending=Fs,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hc,this.blendDst=Vc,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hc&&(n.blendSrc=this.blendSrc),this.blendDst!==Vc&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class j extends fs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=bf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new U,pr=new ut;class wn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zh,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=lo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=sn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=lo(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=lo(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=lo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=lo(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),i=sn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),i=sn(i,this.array),o=sn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zh&&(t.usage=this.usage),t}}class Vf extends wn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Wf extends wn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Wt extends wn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let p0=0;const En=new he,nc=new xe,Es=new U,xn=new hs,po=new hs,De=new U;class Ee extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Of(t)?Wf:Vf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Vt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return nc.lookAt(t),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Wt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];xn.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];po.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(xn.min,po.min),xn.expandByPoint(De),De.addVectors(xn.max,po.max),xn.expandByPoint(De)):(xn.expandByPoint(po.min),xn.expandByPoint(po.max))}xn.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)De.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(De));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)De.fromBufferAttribute(a,l),c&&(Es.fromBufferAttribute(t,l),De.add(Es)),i=Math.max(i,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new U,c[T]=new U;const l=new U,h=new U,u=new U,f=new ut,p=new ut,g=new ut,_=new U,d=new U;function m(T,w,M){l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),f.fromBufferAttribute(o,T),p.fromBufferAttribute(o,w),g.fromBufferAttribute(o,M),h.sub(l),u.sub(l),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),d.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[T].add(_),a[w].add(_),a[M].add(_),c[T].add(d),c[w].add(d),c[M].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let T=0,w=y.length;T<w;++T){const M=y[T],P=M.start,N=M.count;for(let D=P,z=P+N;D<z;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const v=new U,x=new U,A=new U,E=new U;function S(T){A.fromBufferAttribute(i,T),E.copy(A);const w=a[T];v.copy(w),v.sub(A.multiplyScalar(A.dot(w))).normalize(),x.crossVectors(E,w);const P=x.dot(c[T])<0?-1:1;r.setXYZW(T,v.x,v.y,v.z,P)}for(let T=0,w=y.length;T<w;++T){const M=y[T],P=M.start,N=M.count;for(let D=P,z=P+N;D<z;D+=3)S(t.getX(D+0)),S(t.getX(D+1)),S(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new U,o=new U,r=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),d=t.getX(f+2);i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,d),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,d),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,d=c.length;_<d;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let m=0;m<h;m++)f[g++]=l[p++]}return new wn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cu=new he,Fi=new xh,mr=new us,lu=new U,gr=new U,xr=new U,_r=new U,ic=new U,vr=new U,hu=new U,Mr=new U;class I extends xe{constructor(t=new Ee,e=new j){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){vr.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(ic.fromBufferAttribute(u,t),r?vr.addScaledVector(ic,h):vr.addScaledVector(ic.sub(e),h))}e.add(vr)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(o),Fi.copy(t.ray).recast(t.near),!(mr.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(mr,lu)===null||Fi.origin.distanceToSquared(lu)>(t.far-t.near)**2))&&(cu.copy(o).invert(),Fi.copy(t.ray).applyMatrix4(cu),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=f.length;g<_;g++){const d=f[g],m=r[d.materialIndex],y=Math.max(d.start,p.start),v=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let x=y,A=v;x<A;x+=3){const E=a.getX(x),S=a.getX(x+1),T=a.getX(x+2);i=yr(this,m,t,n,l,h,u,E,S,T),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=d.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let d=g,m=_;d<m;d+=3){const y=a.getX(d),v=a.getX(d+1),x=a.getX(d+2);i=yr(this,r,t,n,l,h,u,y,v,x),i&&(i.faceIndex=Math.floor(d/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=f.length;g<_;g++){const d=f[g],m=r[d.materialIndex],y=Math.max(d.start,p.start),v=Math.min(c.count,Math.min(d.start+d.count,p.start+p.count));for(let x=y,A=v;x<A;x+=3){const E=x,S=x+1,T=x+2;i=yr(this,m,t,n,l,h,u,E,S,T),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=d.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let d=g,m=_;d<m;d+=3){const y=d,v=d+1,x=d+2;i=yr(this,r,t,n,l,h,u,y,v,x),i&&(i.faceIndex=Math.floor(d/3),e.push(i))}}}}function m0(s,t,e,n,i,o,r,a){let c;if(t.side===en?c=n.intersectTriangle(r,o,i,!0,a):c=n.intersectTriangle(i,o,r,t.side===Ci,a),c===null)return null;Mr.copy(a),Mr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Mr);return l<e.near||l>e.far?null:{distance:l,point:Mr.clone(),object:s}}function yr(s,t,e,n,i,o,r,a,c,l){s.getVertexPosition(a,gr),s.getVertexPosition(c,xr),s.getVertexPosition(l,_r);const h=m0(s,t,e,n,gr,xr,_r,hu);if(h){const u=new U;Nn.getBarycoord(hu,gr,xr,_r,u),i&&(h.uv=Nn.getInterpolatedAttribute(i,a,c,l,u,new ut)),o&&(h.uv1=Nn.getInterpolatedAttribute(o,a,c,l,u,new ut)),r&&(h.normal=Nn.getInterpolatedAttribute(r,a,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new U,materialIndex:0};Nn.getNormal(gr,xr,_r,f.normal),h.face=f,h.barycoord=u}return h}class Jo extends Ee{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,o,4),g("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(u,2));function g(_,d,m,y,v,x,A,E,S,T,w){const M=x/S,P=A/T,N=x/2,D=A/2,z=E/2,W=S+1,H=T+1;let Z=0,X=0;const ct=new U;for(let dt=0;dt<H;dt++){const bt=dt*P-D;for(let kt=0;kt<W;kt++){const $t=kt*M-N;ct[_]=$t*y,ct[d]=bt*v,ct[m]=z,l.push(ct.x,ct.y,ct.z),ct[_]=0,ct[d]=0,ct[m]=E>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(kt/S),u.push(1-dt/T),Z+=1}}for(let dt=0;dt<T;dt++)for(let bt=0;bt<S;bt++){const kt=f+bt+W*dt,$t=f+bt+W*(dt+1),J=f+(bt+1)+W*(dt+1),rt=f+(bt+1)+W*dt;c.push(kt,$t,rt),c.push($t,J,rt),X+=6}a.addGroup(p,X,w),p+=X,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Js(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ye(s){const t={};for(let e=0;e<s.length;e++){const n=Js(s[e]);for(const i in n)t[i]=n[i]}return t}function g0(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Xf(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const ca={clone:Js,merge:Ye};var x0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends fs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x0,this.fragmentShader=_0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Js(t.uniforms),this.uniformsGroups=g0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Yf extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=hi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new U,uu=new ut,fu=new ut;class _n extends Yf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=El*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return El*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,e){return this.getViewBounds(t,uu,fu),e.subVectors(fu,uu)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(za*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const As=-90,Rs=1;class v0 extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new _n(As,Rs,t,e);i.layers=this.layers,this.add(i);const o=new _n(As,Rs,t,e);o.layers=this.layers,this.add(o);const r=new _n(As,Rs,t,e);r.layers=this.layers,this.add(r);const a=new _n(As,Rs,t,e);a.layers=this.layers,this.add(a);const c=new _n(As,Rs,t,e);c.layers=this.layers,this.add(c);const l=new _n(As,Rs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class qf extends Ve{constructor(t,e,n,i,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:qs,super(t,e,n,i,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class M0 extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new qf(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Jo(5,5,5),o=new un({name:"CubemapFromEquirect",uniforms:Js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:fi});o.uniforms.tEquirect.value=e;const r=new I(i,o),a=e.minFilter;return e.minFilter===ts&&(e.minFilter=qn),new v0(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}class _h{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new lt(t),this.density=e}clone(){return new _h(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class y0 extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class w0 extends Ve{constructor(t=null,e=1,n=1,i,o,r,a,c,l=yn,h=yn,u,f){super(null,r,a,c,l,h,i,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi extends wn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Cs=new he,du=new he,wr=[],pu=new hs,S0=new he,mo=new I,go=new us;class ro extends I{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Pi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,S0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new hs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),pu.copy(t.boundingBox).applyMatrix4(Cs),this.boundingBox.union(pu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new us),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),go.copy(t.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(go)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(mo.geometry=this.geometry,mo.material=this.material,mo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),go.copy(this.boundingSphere),go.applyMatrix4(n),t.ray.intersectsSphere(go)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,Cs),du.multiplyMatrices(n,Cs),mo.matrixWorld=du,mo.raycast(t,wr);for(let r=0,a=wr.length;r<a;r++){const c=wr[r];c.instanceId=o,c.object=this,e.push(c)}wr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Pi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new w0(new Float32Array(i*this.count),i,this.count,dh,Zn));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=i*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const sc=new U,b0=new U,T0=new Vt;class Vi{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=sc.subVectors(n,e).cross(b0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(sc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||T0.getNormalMatrix(t),i=this.coplanarPoint(sc).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new us,Sr=new U;class vh{constructor(t=new Vi,e=new Vi,n=new Vi,i=new Vi,o=new Vi,r=new Vi){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hi){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],p=i[8],g=i[9],_=i[10],d=i[11],m=i[12],y=i[13],v=i[14],x=i[15];if(n[0].setComponents(c-o,f-l,d-p,x-m).normalize(),n[1].setComponents(c+o,f+l,d+p,x+m).normalize(),n[2].setComponents(c+r,f+h,d+g,x+y).normalize(),n[3].setComponents(c-r,f-h,d-g,x-y).normalize(),n[4].setComponents(c-a,f-u,d-_,x-v).normalize(),e===hi)n[5].setComponents(c+a,f+u,d+_,x+v).normalize();else if(e===ra)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Sr.x=i.normal.x>0?t.max.x:t.min.x,Sr.y=i.normal.y>0?t.max.y:t.min.y,Sr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zf extends fs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const la=new U,ha=new U,mu=new he,xo=new xh,br=new us,oc=new U,gu=new U;class E0 extends xe{constructor(t=new Ee,e=new Zf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)la.fromBufferAttribute(e,i-1),ha.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=la.distanceTo(ha);t.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(i),br.radius+=o,t.ray.intersectsSphere(br)===!1)return;mu.copy(i).invert(),xo.copy(t.ray).applyMatrix4(mu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=p,d=g-1;_<d;_+=l){const m=h.getX(_),y=h.getX(_+1),v=Tr(this,t,xo,c,m,y);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(g-1),d=h.getX(p),m=Tr(this,t,xo,c,_,d);m&&e.push(m)}}else{const p=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let _=p,d=g-1;_<d;_+=l){const m=Tr(this,t,xo,c,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=Tr(this,t,xo,c,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Tr(s,t,e,n,i,o){const r=s.geometry.attributes.position;if(la.fromBufferAttribute(r,i),ha.fromBufferAttribute(r,o),e.distanceSqToSegment(la,ha,oc,gu)>n)return;oc.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(oc);if(!(c<t.near||c>t.far))return{distance:c,point:gu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const xu=new U,_u=new U;class A0 extends E0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,o=e.count;i<o;i+=2)xu.fromBufferAttribute(e,i),_u.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+xu.distanceTo(_u);t.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $f extends fs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vu=new he,Al=new xh,Er=new us,Ar=new U;class R0 extends xe{constructor(t=new Ee,e=new $f){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(i),Er.radius+=o,t.ray.intersectsSphere(Er)===!1)return;vu.copy(i).invert(),Al.copy(t.ray).applyMatrix4(vu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let g=f,_=p;g<_;g++){const d=l.getX(g);Ar.fromBufferAttribute(u,d),Mu(Ar,d,c,i,t,e,this)}}else{const f=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let g=f,_=p;g<_;g++)Ar.fromBufferAttribute(u,g),Mu(Ar,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Mu(s,t,e,n,i,o,r){const a=Al.distanceSqToPoint(s);if(a<e){const c=new U;Al.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class pe extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Mh extends Ve{constructor(t,e,n,i,o,r,a,c,l){super(t,e,n,i,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jf extends Ve{constructor(t,e,n,i,o,r,a,c,l,h=zs){if(h!==zs&&h!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zs&&(n=rs),n===void 0&&h===js&&(n=$s),super(null,i,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:yn,this.minFilter=c!==void 0?c:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(o-1);const h=n[i],f=n[i+1]-h,p=(r-h)/f;return(i+p)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),c=e||(r.isVector2?new ut:new U);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new U,i=[],o=[],r=[],a=new U,c=new he;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new U)}o[0]=new U,r[0]=new U;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Zt(i[p-1].dot(i[p]),-1,1));o[p].applyMatrix4(c.makeRotationAxis(a,g))}r[p].crossVectors(i[p],o[p])}if(e===!0){let p=Math.acos(Zt(o[0].dot(o[t]),-1,1));p/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),r[g].crossVectors(i[g],o[g])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class yh extends Qn{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ut){const n=e,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class C0 extends yh{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function wh(){let s=0,t=0,e=0,n=0;function i(o,r,a,c){s=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){i(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let f=(r-o)/l-(a-o)/(l+h)+(a-r)/h,p=(a-r)/h-(c-r)/(h+u)+(c-a)/u;f*=h,p*=h,i(r,a,f,p)},calc:function(o){const r=o*o,a=r*o;return s+t*o+e*r+n*a}}}const Rr=new U,rc=new wh,ac=new wh,cc=new wh;class Rl extends Qn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){const n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%o]:(Rr.subVectors(i[0],i[1]).add(i[0]),l=Rr);const u=i[a%o],f=i[(a+1)%o];if(this.closed||a+2<o?h=i[(a+2)%o]:(Rr.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=Rr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),d<1e-4&&(d=_),rc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,d),ac.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,d),cc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,d)}else this.curveType==="catmullrom"&&(rc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),ac.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),cc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(rc.calc(c),ac.calc(c),cc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function yu(s,t,e,n,i){const o=(n-t)*.5,r=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*s+e}function P0(s,t){const e=1-s;return e*e*t}function I0(s,t){return 2*(1-s)*s*t}function L0(s,t){return s*s*t}function Lo(s,t,e,n){return P0(s,t)+I0(s,e)+L0(s,n)}function D0(s,t){const e=1-s;return e*e*e*t}function U0(s,t){const e=1-s;return 3*e*e*s*t}function N0(s,t){return 3*(1-s)*s*s*t}function F0(s,t){return s*s*s*t}function Do(s,t,e,n,i){return D0(s,t)+U0(s,e)+N0(s,n)+F0(s,i)}class Kf extends Qn{constructor(t=new ut,e=new ut,n=new ut,i=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ut){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Do(t,i.x,o.x,r.x,a.x),Do(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class z0 extends Qn{constructor(t=new U,e=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Do(t,i.x,o.x,r.x,a.x),Do(t,i.y,o.y,r.y,a.y),Do(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Jf extends Qn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qf extends Qn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class td extends Qn{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(Lo(t,i.x,o.x,r.x),Lo(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ed extends Qn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(Lo(t,i.x,o.x,r.x),Lo(t,i.y,o.y,r.y),Lo(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nd extends Qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(yu(a,c.x,l.x,h.x,u.x),yu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ut().fromArray(i))}return this}}var Cl=Object.freeze({__proto__:null,ArcCurve:C0,CatmullRomCurve3:Rl,CubicBezierCurve:Kf,CubicBezierCurve3:z0,EllipseCurve:yh,LineCurve:Jf,LineCurve3:Qf,QuadraticBezierCurve:td,QuadraticBezierCurve3:ed,SplineCurve:nd});class O0 extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Cl[i.type]().fromJSON(i))}return this}}class ua extends O0{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Jf(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new td(this.currentPoint.clone(),new ut(t,e),new ut(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){const a=new Kf(this.currentPoint.clone(),new ut(t,e),new ut(n,i),new ut(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new nd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,o,r,a,c),this}absellipse(t,e,n,i,o,r,a,c){const l=new yh(t,e,n,i,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Oe extends Ee{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new U,h=new ut;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[f]/t+1)/2,h.y=(r[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Wt(r,3)),this.setAttribute("normal",new Wt(a,3)),this.setAttribute("uv",new Wt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class vt extends Ee{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),o=Math.floor(o);const h=[],u=[],f=[],p=[];let g=0;const _=[],d=n/2;let m=0;y(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(f,3)),this.setAttribute("uv",new Wt(p,2));function y(){const x=new U,A=new U;let E=0;const S=(e-t)/n;for(let T=0;T<=o;T++){const w=[],M=T/o,P=M*(e-t)+t;for(let N=0;N<=i;N++){const D=N/i,z=D*c+a,W=Math.sin(z),H=Math.cos(z);A.x=P*W,A.y=-M*n+d,A.z=P*H,u.push(A.x,A.y,A.z),x.set(W,S,H).normalize(),f.push(x.x,x.y,x.z),p.push(D,1-M),w.push(g++)}_.push(w)}for(let T=0;T<i;T++)for(let w=0;w<o;w++){const M=_[w][T],P=_[w+1][T],N=_[w+1][T+1],D=_[w][T+1];(t>0||w!==0)&&(h.push(M,P,D),E+=3),(e>0||w!==o-1)&&(h.push(P,N,D),E+=3)}l.addGroup(m,E,0),m+=E}function v(x){const A=g,E=new ut,S=new U;let T=0;const w=x===!0?t:e,M=x===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,d*M,0),f.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let N=0;N<=i;N++){const z=N/i*c+a,W=Math.cos(z),H=Math.sin(z);S.x=w*H,S.y=d*M,S.z=w*W,u.push(S.x,S.y,S.z),f.push(0,M,0),E.x=W*.5+.5,E.y=H*.5*M+.5,p.push(E.x,E.y),g++}for(let N=0;N<i;N++){const D=A+N,z=P+N;x===!0?h.push(z,z+1,D):h.push(z+1,z,D),T+=3}l.addGroup(m,T,x===!0?1:2),m+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jn extends vt{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Jn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sh extends Ee{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],r=[];a(i),l(n),h(),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(o.slice(),3)),this.setAttribute("uv",new Wt(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const v=new U,x=new U,A=new U;for(let E=0;E<e.length;E+=3)p(e[E+0],v),p(e[E+1],x),p(e[E+2],A),c(v,x,A,y)}function c(y,v,x,A){const E=A+1,S=[];for(let T=0;T<=E;T++){S[T]=[];const w=y.clone().lerp(x,T/E),M=v.clone().lerp(x,T/E),P=E-T;for(let N=0;N<=P;N++)N===0&&T===E?S[T][N]=w:S[T][N]=w.clone().lerp(M,N/P)}for(let T=0;T<E;T++)for(let w=0;w<2*(E-T)-1;w++){const M=Math.floor(w/2);w%2===0?(f(S[T][M+1]),f(S[T+1][M]),f(S[T][M])):(f(S[T][M+1]),f(S[T+1][M+1]),f(S[T+1][M]))}}function l(y){const v=new U;for(let x=0;x<o.length;x+=3)v.x=o[x+0],v.y=o[x+1],v.z=o[x+2],v.normalize().multiplyScalar(y),o[x+0]=v.x,o[x+1]=v.y,o[x+2]=v.z}function h(){const y=new U;for(let v=0;v<o.length;v+=3){y.x=o[v+0],y.y=o[v+1],y.z=o[v+2];const x=d(y)/2/Math.PI+.5,A=m(y)/Math.PI+.5;r.push(x,1-A)}g(),u()}function u(){for(let y=0;y<r.length;y+=6){const v=r[y+0],x=r[y+2],A=r[y+4],E=Math.max(v,x,A),S=Math.min(v,x,A);E>.9&&S<.1&&(v<.2&&(r[y+0]+=1),x<.2&&(r[y+2]+=1),A<.2&&(r[y+4]+=1))}}function f(y){o.push(y.x,y.y,y.z)}function p(y,v){const x=y*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function g(){const y=new U,v=new U,x=new U,A=new U,E=new ut,S=new ut,T=new ut;for(let w=0,M=0;w<o.length;w+=9,M+=6){y.set(o[w+0],o[w+1],o[w+2]),v.set(o[w+3],o[w+4],o[w+5]),x.set(o[w+6],o[w+7],o[w+8]),E.set(r[M+0],r[M+1]),S.set(r[M+2],r[M+3]),T.set(r[M+4],r[M+5]),A.copy(y).add(v).add(x).divideScalar(3);const P=d(A);_(E,M+0,y,P),_(S,M+2,v,P),_(T,M+4,x,P)}}function _(y,v,x,A){A<0&&y.x===1&&(r[v]=y.x-1),x.x===0&&x.z===0&&(r[v]=A/2/Math.PI+.5)}function d(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sh(t.vertices,t.indices,t.radius,t.details)}}class Pl extends ua{constructor(t){super(t),this.uuid=oo(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ua().fromJSON(i))}return this}}const B0={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=id(s,0,i,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,u,f,p;if(n&&(o=W0(s,t,o,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let g=e;g<i;g+=e)u=s[g],f=s[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return Wo(o,r,e,a,c,p,0),r}};function id(s,t,e,n,i){let o,r;if(i===em(s,t,e,n)>0)for(o=t;o<e;o+=n)r=wu(o,s[o],s[o+1],r);else for(o=e-n;o>=t;o-=n)r=wu(o,s[o],s[o+1],r);return r&&Ra(r,r.next)&&(Yo(r),r=r.next),r}function as(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ra(e,e.next)||Me(e.prev,e,e.next)===0)){if(Yo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Wo(s,t,e,n,i,o,r){if(!s)return;!r&&o&&$0(s,n,i,o);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,o?G0(s,n,i,o):k0(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Yo(s),s=l.next,a=l.next;continue}if(s=l,s===a){r?r===1?(s=H0(as(s),t,e),Wo(s,t,e,n,i,o,2)):r===2&&V0(s,t,e,n,i,o):Wo(as(s),t,e,n,i,o,1);break}}}function k0(s){const t=s.prev,e=s,n=s.next;if(Me(t,e,n)>=0)return!1;const i=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=i<o?i<r?i:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,f=i>o?i>r?i:r:o>r?o:r,p=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&Us(i,a,o,c,r,l,g.x,g.y)&&Me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function G0(s,t,e,n){const i=s.prev,o=s,r=s.next;if(Me(i,o,r)>=0)return!1;const a=i.x,c=o.x,l=r.x,h=i.y,u=o.y,f=r.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,d=h>u?h>f?h:f:u>f?u:f,m=Il(p,g,t,e,n),y=Il(_,d,t,e,n);let v=s.prevZ,x=s.nextZ;for(;v&&v.z>=m&&x&&x.z<=y;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=d&&v!==i&&v!==r&&Us(a,h,c,u,l,f,v.x,v.y)&&Me(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=d&&x!==i&&x!==r&&Us(a,h,c,u,l,f,x.x,x.y)&&Me(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=m;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=d&&v!==i&&v!==r&&Us(a,h,c,u,l,f,v.x,v.y)&&Me(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=d&&x!==i&&x!==r&&Us(a,h,c,u,l,f,x.x,x.y)&&Me(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function H0(s,t,e){let n=s;do{const i=n.prev,o=n.next.next;!Ra(i,o)&&sd(i,n,n.next,o)&&Xo(i,o)&&Xo(o,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Yo(n),Yo(n.next),n=s=o),n=n.next}while(n!==s);return as(n)}function V0(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&J0(r,a)){let c=od(r,a);r=as(r,r.next),c=as(c,c.next),Wo(r,t,e,n,i,o,0),Wo(c,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function W0(s,t,e,n){const i=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:s.length,l=id(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(K0(l));for(i.sort(X0),o=0;o<i.length;o++)e=Y0(i[o],e);return e}function X0(s,t){return s.x-t.x}function Y0(s,t){const e=q0(s,t);if(!e)return t;const n=od(e,s);return as(n,n.next),as(e,e.next)}function q0(s,t){let e=t,n=-1/0,i;const o=s.x,r=s.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===o))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;e=i;do o>=e.x&&e.x>=c&&o!==e.x&&Us(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),Xo(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Z0(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Z0(s,t){return Me(s.prev,s,t.prev)<0&&Me(t.next,s,s.next)<0}function $0(s,t,e,n){let i=s;do i.z===0&&(i.z=Il(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,j0(i)}function j0(s){let t,e,n,i,o,r,a,c,l=1;do{for(e=s,s=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;e=n}o.nextZ=null,l*=2}while(r>1);return s}function Il(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function K0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Us(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function J0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Q0(s,t)&&(Xo(s,t)&&Xo(t,s)&&tm(s,t)&&(Me(s.prev,s,t.prev)||Me(s,t.prev,t))||Ra(s,t)&&Me(s.prev,s,s.next)>0&&Me(t.prev,t,t.next)>0)}function Me(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ra(s,t){return s.x===t.x&&s.y===t.y}function sd(s,t,e,n){const i=Pr(Me(s,t,e)),o=Pr(Me(s,t,n)),r=Pr(Me(e,n,s)),a=Pr(Me(e,n,t));return!!(i!==o&&r!==a||i===0&&Cr(s,e,t)||o===0&&Cr(s,n,t)||r===0&&Cr(e,s,n)||a===0&&Cr(e,t,n))}function Cr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Pr(s){return s>0?1:s<0?-1:0}function Q0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&sd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Xo(s,t){return Me(s.prev,s,s.next)<0?Me(s,t,s.next)>=0&&Me(s,s.prev,t)>=0:Me(s,t,s.prev)<0||Me(s,s.next,t)<0}function tm(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function od(s,t){const e=new Ll(s.i,s.x,s.y),n=new Ll(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function wu(s,t,e,n){const i=new Ll(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Yo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ll(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function em(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}class Uo{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return Uo.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];Su(t),bu(n,t);let r=t.length;e.forEach(Su);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,bu(n,e[c]);const a=B0.triangulate(n,i);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Su(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function bu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class ns extends Sh{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ns(t.radius,t.detail)}}class ye extends Ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,p=[],g=[],_=[],d=[];for(let m=0;m<h;m++){const y=m*f-r;for(let v=0;v<l;v++){const x=v*u-o;g.push(x,-y,0),_.push(0,0,1),d.push(v/a),d.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<a;y++){const v=y+l*m,x=y+l*(m+1),A=y+1+l*(m+1),E=y+1+l*m;p.push(v,x,E),p.push(x,A,E)}this.setIndex(p),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(_,3)),this.setAttribute("uv",new Wt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.width,t.height,t.widthSegments,t.heightSegments)}}class qo extends Ee{constructor(t=.5,e=1,n=32,i=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=t;const f=(e-t)/i,p=new U,g=new ut;for(let _=0;_<=i;_++){for(let d=0;d<=n;d++){const m=o+d/n*r;p.x=u*Math.cos(m),p.y=u*Math.sin(m),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<i;_++){const d=_*(n+1);for(let m=0;m<n;m++){const y=m+d,v=y,x=y+n+1,A=y+n+2,E=y+1;a.push(v,x,E),a.push(x,A,E)}}this.setIndex(a),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(l,3)),this.setAttribute("uv",new Wt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class fa extends Ee{constructor(t=new Pl([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Wt(i,3)),this.setAttribute("normal",new Wt(o,3)),this.setAttribute("uv",new Wt(r,2));function l(h){const u=i.length/3,f=h.extractPoints(e);let p=f.shape;const g=f.holes;Uo.isClockWise(p)===!1&&(p=p.reverse());for(let d=0,m=g.length;d<m;d++){const y=g[d];Uo.isClockWise(y)===!0&&(g[d]=y.reverse())}const _=Uo.triangulateShape(p,g);for(let d=0,m=g.length;d<m;d++){const y=g[d];p=p.concat(y)}for(let d=0,m=p.length;d<m;d++){const y=p[d];i.push(y.x,y.y,0),o.push(0,0,1),r.push(y.x,y.y)}for(let d=0,m=_.length;d<m;d++){const y=_[d],v=y[0]+u,x=y[1]+u,A=y[2]+u;n.push(v,x,A),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return nm(e,t)}static fromJSON(t,e){const n=[];for(let i=0,o=t.shapes.length;i<o;i++){const r=e[t.shapes[i]];n.push(r)}return new fa(n,t.curveSegments)}}function nm(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class K extends Ee{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new U,f=new U,p=[],g=[],_=[],d=[];for(let m=0;m<=n;m++){const y=[],v=m/n;let x=0;m===0&&r===0?x=.5/e:m===n&&c===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){const E=A/e;u.x=-t*Math.cos(i+E*o)*Math.sin(r+v*a),u.y=t*Math.cos(r+v*a),u.z=t*Math.sin(i+E*o)*Math.sin(r+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),d.push(E+x,1-v),y.push(l++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const v=h[m][y+1],x=h[m][y],A=h[m+1][y],E=h[m+1][y+1];(m!==0||r>0)&&p.push(v,x,E),(m!==n-1||c<Math.PI)&&p.push(x,A,E)}this.setIndex(p),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(_,3)),this.setAttribute("uv",new Wt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new K(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Te extends Ee{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],c=[],l=[],h=new U,u=new U,f=new U;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*o,d=p/n*Math.PI*2;u.x=(t+e*Math.cos(d))*Math.cos(_),u.y=(t+e*Math.cos(d))*Math.sin(_),u.z=e*Math.sin(d),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,d=(i+1)*(p-1)+g-1,m=(i+1)*(p-1)+g,y=(i+1)*p+g;r.push(_,d,y),r.push(d,m,y)}this.setIndex(r),this.setAttribute("position",new Wt(a,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qs extends Ee{constructor(t=new ed(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new U,c=new U,l=new ut;let h=new U;const u=[],f=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(f,3)),this.setAttribute("uv",new Wt(p,2));function _(){for(let v=0;v<e;v++)d(v);d(o===!1?e:0),y(),m()}function d(v){h=t.getPointAt(v/e,h);const x=r.normals[v],A=r.binormals[v];for(let E=0;E<=i;E++){const S=E/i*Math.PI*2,T=Math.sin(S),w=-Math.cos(S);c.x=w*x.x+T*A.x,c.y=w*x.y+T*A.y,c.z=w*x.z+T*A.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=e;v++)for(let x=1;x<=i;x++){const A=(i+1)*(v-1)+(x-1),E=(i+1)*v+(x-1),S=(i+1)*v+x,T=(i+1)*(v-1)+x;g.push(A,E,T),g.push(E,S,T)}}function y(){for(let v=0;v<=e;v++)for(let x=0;x<=i;x++)l.x=v/e,l.y=x/i,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Qs(new Cl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class tt extends fs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ff,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class im extends fs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sm extends fs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class bh extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class om extends bh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const lc=new he,Tu=new U,Eu=new U;class rd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vh,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tu),Eu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Eu),e.updateMatrixWorld(),lc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Au=new he,_o=new U,hc=new U;class rm extends rd{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ut(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),_o.setFromMatrixPosition(t.matrixWorld),n.position.copy(_o),hc.copy(n.position),hc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(hc),n.updateMatrixWorld(),i.makeTranslation(-_o.x,-_o.y,-_o.z),Au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Au)}}class ds extends bh{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Th extends Yf{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class am extends rd{constructor(){super(new Th(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ca extends bh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new am}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cm extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ad{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ru(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ru();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ru(){return performance.now()}function Cu(s,t,e,n){const i=lm(n);switch(e){case Pf:return s*t;case Lf:return s*t;case Df:return s*t*2;case dh:return s*t/i.components*i.byteLength;case ph:return s*t/i.components*i.byteLength;case Uf:return s*t*2/i.components*i.byteLength;case mh:return s*t*2/i.components*i.byteLength;case If:return s*t*3/i.components*i.byteLength;case Fn:return s*t*4/i.components*i.byteLength;case gh:return s*t*4/i.components*i.byteLength;case Wr:case Xr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Yr:case qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case el:case il:return Math.max(s,16)*Math.max(t,8)/4;case tl:case nl:return Math.max(s,8)*Math.max(t,8)/2;case sl:case ol:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case rl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case cl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ll:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case hl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ul:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case fl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case dl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case pl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ml:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case gl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case xl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case _l:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case vl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ml:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Zr:case yl:case wl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Nf:case Sl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case bl:case Tl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lm(s){switch(s){case mi:case Af:return{byteLength:1,components:1};case Vo:case Rf:case di:return{byteLength:2,components:1};case uh:case fh:return{byteLength:2,components:4};case rs:case hh:case Zn:return{byteLength:4,components:1};case Cf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cd(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function hm(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:o,update:r}}var um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fm=`#ifdef USE_ALPHAHASH
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
#endif`,dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xm=`#ifdef USE_AOMAP
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
#endif`,_m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vm=`#ifdef USE_BATCHING
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
#endif`,Mm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bm=`#ifdef USE_IRIDESCENCE
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
#endif`,Tm=`#ifdef USE_BUMPMAP
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
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Um=`#define PI 3.141592653589793
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
} // validated`,Nm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fm=`vec3 transformedNormal = objectNormal;
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
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
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
#endif`,Zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jm=`#ifdef USE_GRADIENTMAP
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
}`,Qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ng=`uniform bool receiveShadow;
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
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cg=`PhysicalMaterial material;
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
#endif`,lg=`struct PhysicalMaterial {
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
}`,hg=`
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
#endif`,ug=`#if defined( RE_IndirectDiffuse )
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
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mg=`#if defined( USE_POINTS_UV )
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
#endif`,yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dg=`#ifdef USE_NORMALMAP
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
#endif`,Ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$g=`float getShadowMask() {
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
}`,jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kg=`#ifdef USE_SKINNING
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
#endif`,Jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qg=`#ifdef USE_SKINNING
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
#endif`,tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ex=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ix=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sx=`#ifdef USE_TRANSMISSION
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
#endif`,ox=`#ifdef USE_TRANSMISSION
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ux=`uniform sampler2D t2D;
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`#include <common>
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
}`,xx=`#if DEPTH_PACKING == 3200
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
}`,_x=`#define DISTANCE
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
}`,vx=`#define DISTANCE
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
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`uniform float scale;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,bx=`#include <common>
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
}`,Tx=`uniform vec3 diffuse;
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
}`,Ex=`#define LAMBERT
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
}`,Ax=`#define LAMBERT
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
}`,Rx=`#define MATCAP
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
}`,Cx=`#define MATCAP
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
}`,Px=`#define NORMAL
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
}`,Ix=`#define NORMAL
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
}`,Lx=`#define PHONG
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
}`,Dx=`#define PHONG
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
}`,Ux=`#define STANDARD
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
}`,Nx=`#define STANDARD
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
}`,Fx=`#define TOON
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
}`,zx=`#define TOON
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
}`,Ox=`uniform float size;
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
}`,Bx=`uniform vec3 diffuse;
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
}`,kx=`#include <common>
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
}`,Gx=`uniform vec3 color;
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
}`,Hx=`uniform float rotation;
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
}`,Vx=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:um,alphahash_pars_fragment:fm,alphamap_fragment:dm,alphamap_pars_fragment:pm,alphatest_fragment:mm,alphatest_pars_fragment:gm,aomap_fragment:xm,aomap_pars_fragment:_m,batching_pars_vertex:vm,batching_vertex:Mm,begin_vertex:ym,beginnormal_vertex:wm,bsdfs:Sm,iridescence_fragment:bm,bumpmap_pars_fragment:Tm,clipping_planes_fragment:Em,clipping_planes_pars_fragment:Am,clipping_planes_pars_vertex:Rm,clipping_planes_vertex:Cm,color_fragment:Pm,color_pars_fragment:Im,color_pars_vertex:Lm,color_vertex:Dm,common:Um,cube_uv_reflection_fragment:Nm,defaultnormal_vertex:Fm,displacementmap_pars_vertex:zm,displacementmap_vertex:Om,emissivemap_fragment:Bm,emissivemap_pars_fragment:km,colorspace_fragment:Gm,colorspace_pars_fragment:Hm,envmap_fragment:Vm,envmap_common_pars_fragment:Wm,envmap_pars_fragment:Xm,envmap_pars_vertex:Ym,envmap_physical_pars_fragment:ig,envmap_vertex:qm,fog_vertex:Zm,fog_pars_vertex:$m,fog_fragment:jm,fog_pars_fragment:Km,gradientmap_pars_fragment:Jm,lightmap_pars_fragment:Qm,lights_lambert_fragment:tg,lights_lambert_pars_fragment:eg,lights_pars_begin:ng,lights_toon_fragment:sg,lights_toon_pars_fragment:og,lights_phong_fragment:rg,lights_phong_pars_fragment:ag,lights_physical_fragment:cg,lights_physical_pars_fragment:lg,lights_fragment_begin:hg,lights_fragment_maps:ug,lights_fragment_end:fg,logdepthbuf_fragment:dg,logdepthbuf_pars_fragment:pg,logdepthbuf_pars_vertex:mg,logdepthbuf_vertex:gg,map_fragment:xg,map_pars_fragment:_g,map_particle_fragment:vg,map_particle_pars_fragment:Mg,metalnessmap_fragment:yg,metalnessmap_pars_fragment:wg,morphinstance_vertex:Sg,morphcolor_vertex:bg,morphnormal_vertex:Tg,morphtarget_pars_vertex:Eg,morphtarget_vertex:Ag,normal_fragment_begin:Rg,normal_fragment_maps:Cg,normal_pars_fragment:Pg,normal_pars_vertex:Ig,normal_vertex:Lg,normalmap_pars_fragment:Dg,clearcoat_normal_fragment_begin:Ug,clearcoat_normal_fragment_maps:Ng,clearcoat_pars_fragment:Fg,iridescence_pars_fragment:zg,opaque_fragment:Og,packing:Bg,premultiplied_alpha_fragment:kg,project_vertex:Gg,dithering_fragment:Hg,dithering_pars_fragment:Vg,roughnessmap_fragment:Wg,roughnessmap_pars_fragment:Xg,shadowmap_pars_fragment:Yg,shadowmap_pars_vertex:qg,shadowmap_vertex:Zg,shadowmask_pars_fragment:$g,skinbase_vertex:jg,skinning_pars_vertex:Kg,skinning_vertex:Jg,skinnormal_vertex:Qg,specularmap_fragment:tx,specularmap_pars_fragment:ex,tonemapping_fragment:nx,tonemapping_pars_fragment:ix,transmission_fragment:sx,transmission_pars_fragment:ox,uv_pars_fragment:rx,uv_pars_vertex:ax,uv_vertex:cx,worldpos_vertex:lx,background_vert:hx,background_frag:ux,backgroundCube_vert:fx,backgroundCube_frag:dx,cube_vert:px,cube_frag:mx,depth_vert:gx,depth_frag:xx,distanceRGBA_vert:_x,distanceRGBA_frag:vx,equirect_vert:Mx,equirect_frag:yx,linedashed_vert:wx,linedashed_frag:Sx,meshbasic_vert:bx,meshbasic_frag:Tx,meshlambert_vert:Ex,meshlambert_frag:Ax,meshmatcap_vert:Rx,meshmatcap_frag:Cx,meshnormal_vert:Px,meshnormal_frag:Ix,meshphong_vert:Lx,meshphong_frag:Dx,meshphysical_vert:Ux,meshphysical_frag:Nx,meshtoon_vert:Fx,meshtoon_frag:zx,points_vert:Ox,points_frag:Bx,shadow_vert:kx,shadow_frag:Gx,sprite_vert:Hx,sprite_frag:Vx},ft={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Hn={basic:{uniforms:Ye([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ye([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new lt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ye([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ye([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ye([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new lt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ye([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ye([ft.points,ft.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ye([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ye([ft.common,ft.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ye([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ye([ft.sprite,ft.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Ye([ft.common,ft.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Ye([ft.lights,ft.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Hn.physical={uniforms:Ye([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Ir={r:0,b:0,g:0},Oi=new Kn,Wx=new he;function Xx(s,t,e,n,i,o,r){const a=new lt(0);let c=o===!0?0:1,l,h,u=null,f=0,p=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function _(v){let x=!1;const A=g(v);A===null?m(a,c):A&&A.isColor&&(m(A,1),x=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function d(v,x){const A=g(x);A&&(A.isCubeTexture||A.mapping===Aa)?(h===void 0&&(h=new I(new Jo(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Js(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Oi.copy(x.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Wx.makeRotationFromEuler(Oi)),h.material.toneMapped=se.getTransfer(A.colorSpace)!==fe,(u!==A||f!==A.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,p=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new I(new ye(2,2),new un({name:"BackgroundMaterial",uniforms:Js(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=se.getTransfer(A.colorSpace)!==fe,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=A,f=A.version,p=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,x){v.getRGB(Ir,Xf(s)),n.buffers.color.setClear(Ir.r,Ir.g,Ir.b,x,r)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),c=x,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(a,c)},render:_,addToRenderList:d,dispose:y}}function Yx(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let o=i,r=!1;function a(M,P,N,D,z){let W=!1;const H=u(D,N,P);o!==H&&(o=H,l(o.object)),W=p(M,D,N,z),W&&g(M,D,N,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(W||r)&&(r=!1,x(M,P,N,D),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,P,N){const D=N.wireframe===!0;let z=n[M.id];z===void 0&&(z={},n[M.id]=z);let W=z[P.id];W===void 0&&(W={},z[P.id]=W);let H=W[D];return H===void 0&&(H=f(c()),W[D]=H),H}function f(M){const P=[],N=[],D=[];for(let z=0;z<e;z++)P[z]=0,N[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:D,object:M,attributes:{},index:null}}function p(M,P,N,D){const z=o.attributes,W=P.attributes;let H=0;const Z=N.getAttributes();for(const X in Z)if(Z[X].location>=0){const dt=z[X];let bt=W[X];if(bt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(bt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(bt=M.instanceColor)),dt===void 0||dt.attribute!==bt||bt&&dt.data!==bt.data)return!0;H++}return o.attributesNum!==H||o.index!==D}function g(M,P,N,D){const z={},W=P.attributes;let H=0;const Z=N.getAttributes();for(const X in Z)if(Z[X].location>=0){let dt=W[X];dt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor));const bt={};bt.attribute=dt,dt&&dt.data&&(bt.data=dt.data),z[X]=bt,H++}o.attributes=z,o.attributesNum=H,o.index=D}function _(){const M=o.newAttributes;for(let P=0,N=M.length;P<N;P++)M[P]=0}function d(M){m(M,0)}function m(M,P){const N=o.newAttributes,D=o.enabledAttributes,z=o.attributeDivisors;N[M]=1,D[M]===0&&(s.enableVertexAttribArray(M),D[M]=1),z[M]!==P&&(s.vertexAttribDivisor(M,P),z[M]=P)}function y(){const M=o.newAttributes,P=o.enabledAttributes;for(let N=0,D=P.length;N<D;N++)P[N]!==M[N]&&(s.disableVertexAttribArray(N),P[N]=0)}function v(M,P,N,D,z,W,H){H===!0?s.vertexAttribIPointer(M,P,N,z,W):s.vertexAttribPointer(M,P,N,D,z,W)}function x(M,P,N,D){_();const z=D.attributes,W=N.getAttributes(),H=P.defaultAttributeValues;for(const Z in W){const X=W[Z];if(X.location>=0){let ct=z[Z];if(ct===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),ct!==void 0){const dt=ct.normalized,bt=ct.itemSize,kt=t.get(ct);if(kt===void 0)continue;const $t=kt.buffer,J=kt.type,rt=kt.bytesPerElement,yt=J===s.INT||J===s.UNSIGNED_INT||ct.gpuType===hh;if(ct.isInterleavedBufferAttribute){const ht=ct.data,Nt=ht.stride,Ot=ct.offset;if(ht.isInstancedInterleavedBuffer){for(let qt=0;qt<X.locationSize;qt++)m(X.location+qt,ht.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let qt=0;qt<X.locationSize;qt++)d(X.location+qt);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let qt=0;qt<X.locationSize;qt++)v(X.location+qt,bt/X.locationSize,J,dt,Nt*rt,(Ot+bt/X.locationSize*qt)*rt,yt)}else{if(ct.isInstancedBufferAttribute){for(let ht=0;ht<X.locationSize;ht++)m(X.location+ht,ct.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ht=0;ht<X.locationSize;ht++)d(X.location+ht);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let ht=0;ht<X.locationSize;ht++)v(X.location+ht,bt/X.locationSize,J,dt,bt*rt,bt/X.locationSize*ht*rt,yt)}}else if(H!==void 0){const dt=H[Z];if(dt!==void 0)switch(dt.length){case 2:s.vertexAttrib2fv(X.location,dt);break;case 3:s.vertexAttrib3fv(X.location,dt);break;case 4:s.vertexAttrib4fv(X.location,dt);break;default:s.vertexAttrib1fv(X.location,dt)}}}}y()}function A(){T();for(const M in n){const P=n[M];for(const N in P){const D=P[N];for(const z in D)h(D[z].object),delete D[z];delete P[N]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const N in P){const D=P[N];for(const z in D)h(D[z].object),delete D[z];delete P[N]}delete n[M.id]}function S(M){for(const P in n){const N=n[P];if(N[M.id]===void 0)continue;const D=N[M.id];for(const z in D)h(D[z].object),delete D[z];delete N[M.id]}}function T(){w(),r=!0,o!==i&&(o=i,l(o.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:d,disableUnusedAttributes:y}}function qx(s,t,e){let n;function i(l){n=l}function o(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)r(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Zx(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(S){return!(S!==Fn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const T=S===di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==mi&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Zn&&!T)}function c(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),d=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:A,maxSamples:E}}function $x(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new Vi,a=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,d=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||o&&!d)o?h(null):l();else{const y=o?0:n,v=y*4;let x=m.clippingState||null;c.value=x,x=h(g,f,v,p);for(let A=0;A!==v;++A)x[A]=e[A];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let d=null;if(_!==0){if(d=c.value,g!==!0||d===null){const m=p+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(d===null||d.length<m)&&(d=new Float32Array(m));for(let v=0,x=p;v!==_;++v,x+=4)r.copy(u[v]).applyMatrix4(y,a),r.normal.toArray(d,x),d[x+3]=r.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function jx(s){let t=new WeakMap;function e(r,a){return a===Kc?r.mapping=qs:a===Jc&&(r.mapping=Zs),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Kc||a===Jc)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new M0(c.height);return l.fromEquirectangularTexture(s,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const Ns=4,Pu=[.125,.215,.35,.446,.526,.582],Ji=20,uc=new Th,Iu=new lt;let fc=null,dc=0,pc=0,mc=!1;const Wi=(1+Math.sqrt(5))/2,Ps=1/Wi,Lu=[new U(-Wi,Ps,0),new U(Wi,Ps,0),new U(-Ps,0,Wi),new U(Ps,0,Wi),new U(0,Wi,-Ps),new U(0,Wi,Ps),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Du{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){fc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fc,dc,pc),this._renderer.xr.enabled=mc,t.scissorTest=!1,Lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qs||t.mapping===Zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:di,format:Fn,colorSpace:Ks,depthBuffer:!1},i=Uu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kx(o)),this._blurMaterial=Jx(o,t,e)}return i}_compileMaterial(t){const e=new I(this._lodPlanes[0],t);this._renderer.compile(e,uc)}_sceneToCubeUV(t,e,n,i){const a=new _n(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Iu),h.toneMapping=Ri,h.autoClear=!1;const p=new j({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new I(new Jo,p);let _=!1;const d=t.background;d?d.isColor&&(p.color.copy(d),t.background=null,_=!0):(p.color.copy(Iu),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):y===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const v=this._cubeSize;Lr(i,y*v,m>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===qs||t.mapping===Zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new I(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;Lr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,uc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Lu[(i-o-1)%Lu.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new I(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Ji-1),_=o/g,d=isFinite(o)?1+Math.floor(h*_):Ji;d>Ji&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ji}`);const m=[];let y=0;for(let S=0;S<Ji;++S){const T=S/_,w=Math.exp(-T*T/2);m.push(w),S===0?y+=w:S<d&&(y+=2*w)}for(let S=0;S<m.length;S++)m[S]=m[S]/y;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=m,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const x=this._sizeLods[i],A=3*x*(i>v-Ns?i-v+Ns:0),E=4*(this._cubeSize-x);Lr(e,A,E,3*x,2*x),c.setRenderTarget(e),c.render(u,uc)}}function Kx(s){const t=[],e=[],n=[];let i=s;const o=s-Ns+1+Pu.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let c=1/a;r>s-Ns?c=Pu[r-s+Ns-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,d=2,m=1,y=new Float32Array(_*g*p),v=new Float32Array(d*g*p),x=new Float32Array(m*g*p);for(let E=0;E<p;E++){const S=E%3*2/3-1,T=E>2?0:-1,w=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];y.set(w,_*g*E),v.set(f,d*g*E);const M=[E,E,E,E,E,E];x.set(M,m*g*E)}const A=new Ee;A.setAttribute("position",new wn(y,_)),A.setAttribute("uv",new wn(v,d)),A.setAttribute("faceIndex",new wn(x,m)),t.push(A),i>Ns&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Uu(s,t,e){const n=new zn(s,t,e);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Jx(s,t,e){const n=new Float32Array(Ji),i=new U(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Nu(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Fu(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Eh(){return`

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
	`}function Qx(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Kc||c===Jc,h=c===qs||c===Zs;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Du(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Du(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function t_(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ls("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function e_(s,t,e,n){const i={},o=new WeakMap;function r(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete i[f.id];const p=o.get(f);p&&(t.remove(p),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const p in f)t.update(f[p],s.ARRAY_BUFFER)}function l(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let v=0,x=y.length;v<x;v+=3){const A=y[v+0],E=y[v+1],S=y[v+2];f.push(A,E,E,S,S,A)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const A=v+0,E=v+1,S=v+2;f.push(A,E,E,S,S,A)}}else return;const d=new(Of(f)?Wf:Vf)(f,1);d.version=_;const m=o.get(u);m&&t.remove(m),o.set(u,d)}function h(u){const f=o.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function n_(s,t,e){let n;function i(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function c(f,p){s.drawElements(n,p,o,f*r),e.update(p,n,1)}function l(f,p,g){g!==0&&(s.drawElementsInstanced(n,p,o,f*r,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,f,0,g);let d=0;for(let m=0;m<g;m++)d+=p[m];e.update(d,n,1)}function u(f,p,g,_){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<f.length;m++)l(f[m]/r,p[m],_[m]);else{d.multiDrawElementsInstancedWEBGL(n,p,0,o,f,0,_,0,g);let m=0;for(let y=0;y<g;y++)m+=p[y]*_[y];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function i_(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function s_(s,t,e){const n=new WeakMap,i=new de;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let M=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),d===!0&&(x=3);let A=a.attributes.position.count*x,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const S=new Float32Array(A*E*4*u),T=new kf(S,A,E,u);T.type=Zn,T.needsUpdate=!0;const w=x*4;for(let P=0;P<u;P++){const N=m[P],D=y[P],z=v[P],W=A*E*4*P;for(let H=0;H<N.count;H++){const Z=H*w;g===!0&&(i.fromBufferAttribute(N,H),S[W+Z+0]=i.x,S[W+Z+1]=i.y,S[W+Z+2]=i.z,S[W+Z+3]=0),_===!0&&(i.fromBufferAttribute(D,H),S[W+Z+4]=i.x,S[W+Z+5]=i.y,S[W+Z+6]=i.z,S[W+Z+7]=0),d===!0&&(i.fromBufferAttribute(z,H),S[W+Z+8]=i.x,S[W+Z+9]=i.y,S[W+Z+10]=i.z,S[W+Z+11]=z.itemSize===4?i.w:1)}}f={count:u,texture:T,size:new ut(A,E)},n.set(a,f),a.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let d=0;d<l.length;d++)g+=l[d];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:o}}function o_(s,t,e,n){let i=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function r(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}const ld=new Ve,zu=new jf(1,1),hd=new kf,ud=new o0,fd=new qf,Ou=[],Bu=[],ku=new Float32Array(16),Gu=new Float32Array(9),Hu=new Float32Array(4);function ao(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=Ou[i];if(o===void 0&&(o=new Float32Array(i),Ou[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function Ie(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Le(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Pa(s,t){let e=Bu[t];e===void 0&&(e=new Int32Array(t),Bu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function r_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function a_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2fv(this.addr,t),Le(e,t)}}function c_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;s.uniform3fv(this.addr,t),Le(e,t)}}function l_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4fv(this.addr,t),Le(e,t)}}function h_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;Hu.set(n),s.uniformMatrix2fv(this.addr,!1,Hu),Le(e,n)}}function u_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;Gu.set(n),s.uniformMatrix3fv(this.addr,!1,Gu),Le(e,n)}}function f_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;ku.set(n),s.uniformMatrix4fv(this.addr,!1,ku),Le(e,n)}}function d_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function p_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2iv(this.addr,t),Le(e,t)}}function m_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;s.uniform3iv(this.addr,t),Le(e,t)}}function g_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4iv(this.addr,t),Le(e,t)}}function x_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function __(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2uiv(this.addr,t),Le(e,t)}}function v_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;s.uniform3uiv(this.addr,t),Le(e,t)}}function M_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4uiv(this.addr,t),Le(e,t)}}function y_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(zu.compareFunction=zf,o=zu):o=ld,e.setTexture2D(t||o,i)}function w_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ud,i)}function S_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||fd,i)}function b_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||hd,i)}function T_(s){switch(s){case 5126:return r_;case 35664:return a_;case 35665:return c_;case 35666:return l_;case 35674:return h_;case 35675:return u_;case 35676:return f_;case 5124:case 35670:return d_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return g_;case 5125:return x_;case 36294:return __;case 36295:return v_;case 36296:return M_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return b_}}function E_(s,t){s.uniform1fv(this.addr,t)}function A_(s,t){const e=ao(t,this.size,2);s.uniform2fv(this.addr,e)}function R_(s,t){const e=ao(t,this.size,3);s.uniform3fv(this.addr,e)}function C_(s,t){const e=ao(t,this.size,4);s.uniform4fv(this.addr,e)}function P_(s,t){const e=ao(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function I_(s,t){const e=ao(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function L_(s,t){const e=ao(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function D_(s,t){s.uniform1iv(this.addr,t)}function U_(s,t){s.uniform2iv(this.addr,t)}function N_(s,t){s.uniform3iv(this.addr,t)}function F_(s,t){s.uniform4iv(this.addr,t)}function z_(s,t){s.uniform1uiv(this.addr,t)}function O_(s,t){s.uniform2uiv(this.addr,t)}function B_(s,t){s.uniform3uiv(this.addr,t)}function k_(s,t){s.uniform4uiv(this.addr,t)}function G_(s,t,e){const n=this.cache,i=t.length,o=Pa(e,i);Ie(n,o)||(s.uniform1iv(this.addr,o),Le(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||ld,o[r])}function H_(s,t,e){const n=this.cache,i=t.length,o=Pa(e,i);Ie(n,o)||(s.uniform1iv(this.addr,o),Le(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||ud,o[r])}function V_(s,t,e){const n=this.cache,i=t.length,o=Pa(e,i);Ie(n,o)||(s.uniform1iv(this.addr,o),Le(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||fd,o[r])}function W_(s,t,e){const n=this.cache,i=t.length,o=Pa(e,i);Ie(n,o)||(s.uniform1iv(this.addr,o),Le(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||hd,o[r])}function X_(s){switch(s){case 5126:return E_;case 35664:return A_;case 35665:return R_;case 35666:return C_;case 35674:return P_;case 35675:return I_;case 35676:return L_;case 5124:case 35670:return D_;case 35667:case 35671:return U_;case 35668:case 35672:return N_;case 35669:case 35673:return F_;case 5125:return z_;case 36294:return O_;case 36295:return B_;case 36296:return k_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return W_}}class Y_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=T_(e.type)}}class q_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=X_(e.type)}}class Z_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const gc=/(\w+)(\])?(\[|\.)?/g;function Vu(s,t){s.seq.push(t),s.map[t.id]=t}function $_(s,t,e){const n=s.name,i=n.length;for(gc.lastIndex=0;;){const o=gc.exec(n),r=gc.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){Vu(e,l===void 0?new Y_(a,s,t):new q_(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Z_(a),Vu(e,u)),e=u}}}class $r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);$_(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Wu(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const j_=37297;let K_=0;function J_(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Xu=new Vt;function Q_(s){se._getMatrix(Xu,se.workingColorSpace,s);const t=`mat3( ${Xu.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(s)){case oa:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Yu(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+J_(s.getShaderSource(t),r)}else return i}function tv(s,t){const e=Q_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ev(s,t){let e;switch(t){case Lp:e="Linear";break;case Dp:e="Reinhard";break;case Up:e="Cineon";break;case Tf:e="ACESFilmic";break;case Fp:e="AgX";break;case zp:e="Neutral";break;case Np:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Dr=new U;function nv(){se.getLuminanceCoefficients(Dr);const s=Dr.x.toFixed(4),t=Dr.y.toFixed(4),e=Dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function sv(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ov(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function bo(s){return s!==""}function qu(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(s){return s.replace(rv,cv)}const av=new Map;function cv(s,t){let e=Yt[t];if(e===void 0){const n=av.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Dl(e)}const lv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $u(s){return s.replace(lv,hv)}function hv(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function ju(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function uv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===wf?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Sf?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function fv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case qs:case Zs:t="ENVMAP_TYPE_CUBE";break;case Aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zs:t="ENVMAP_MODE_REFRACTION";break}return t}function pv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case bf:t="ENVMAP_BLENDING_MULTIPLY";break;case Pp:t="ENVMAP_BLENDING_MIX";break;case Ip:t="ENVMAP_BLENDING_ADD";break}return t}function mv(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function gv(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=uv(e),l=fv(e),h=dv(e),u=pv(e),f=mv(e),p=iv(e),g=sv(o),_=i.createProgram();let d,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bo).join(`
`),d.length>0&&(d+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bo).join(`
`),m.length>0&&(m+=`
`)):(d=[ju(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),m=[ju(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Ri?ev("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,tv("linearToOutputTexel",e.outputColorSpace),nv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bo).join(`
`)),r=Dl(r),r=qu(r,e),r=Zu(r,e),a=Dl(a),a=qu(a,e),a=Zu(a,e),r=$u(r),a=$u(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",e.glslVersion===$h?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=y+d+r,x=y+m+a,A=Wu(i,i.VERTEX_SHADER,v),E=Wu(i,i.FRAGMENT_SHADER,x);i.attachShader(_,A),i.attachShader(_,E),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function S(P){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),D=i.getShaderInfoLog(A).trim(),z=i.getShaderInfoLog(E).trim();let W=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,E);else{const Z=Yu(i,A,"vertex"),X=Yu(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+Z+`
`+X)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||z==="")&&(H=!1);H&&(P.diagnostics={runnable:W,programLog:N,vertexShader:{log:D,prefix:d},fragmentShader:{log:z,prefix:m}})}i.deleteShader(A),i.deleteShader(E),T=new $r(i,_),w=ov(i,_)}let T;this.getUniforms=function(){return T===void 0&&S(this),T};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,j_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=K_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}let xv=0;class _v{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new vv(t),e.set(t,n)),n}}class vv{constructor(t){this.id=xv++,this.code=t,this.usedTimes=0}}function Mv(s,t,e,n,i,o,r){const a=new Gf,c=new _v,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function d(w,M,P,N,D){const z=N.fog,W=D.geometry,H=w.isMeshStandardMaterial?N.environment:null,Z=(w.isMeshStandardMaterial?e:t).get(w.envMap||H),X=Z&&Z.mapping===Aa?Z.image.height:null,ct=g[w.type];w.precision!==null&&(p=i.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const dt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,bt=dt!==void 0?dt.length:0;let kt=0;W.morphAttributes.position!==void 0&&(kt=1),W.morphAttributes.normal!==void 0&&(kt=2),W.morphAttributes.color!==void 0&&(kt=3);let $t,J,rt,yt;if(ct){const ce=Hn[ct];$t=ce.vertexShader,J=ce.fragmentShader}else $t=w.vertexShader,J=w.fragmentShader,c.update(w),rt=c.getVertexShaderID(w),yt=c.getFragmentShaderID(w);const ht=s.getRenderTarget(),Nt=s.state.buffers.depth.getReversed(),Ot=D.isInstancedMesh===!0,qt=D.isBatchedMesh===!0,ve=!!w.map,Qt=!!w.matcap,be=!!Z,F=!!w.aoMap,Sn=!!w.lightMap,jt=!!w.bumpMap,Kt=!!w.normalMap,It=!!w.displacementMap,ge=!!w.emissiveMap,Pt=!!w.metalnessMap,L=!!w.roughnessMap,R=w.anisotropy>0,V=w.clearcoat>0,nt=w.dispersion>0,st=w.iridescence>0,Q=w.sheen>0,Rt=w.transmission>0,gt=R&&!!w.anisotropyMap,St=V&&!!w.clearcoatMap,te=V&&!!w.clearcoatNormalMap,at=V&&!!w.clearcoatRoughnessMap,Tt=st&&!!w.iridescenceMap,Ut=st&&!!w.iridescenceThicknessMap,Ft=Q&&!!w.sheenColorMap,Et=Q&&!!w.sheenRoughnessMap,Jt=!!w.specularMap,Xt=!!w.specularColorMap,me=!!w.specularIntensityMap,O=Rt&&!!w.transmissionMap,pt=Rt&&!!w.thicknessMap,$=!!w.gradientMap,it=!!w.alphaMap,_t=w.alphaTest>0,xt=!!w.alphaHash,Ht=!!w.extensions;let we=Ri;w.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(we=s.toneMapping);const Be={shaderID:ct,shaderType:w.type,shaderName:w.name,vertexShader:$t,fragmentShader:J,defines:w.defines,customVertexShaderID:rt,customFragmentShaderID:yt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:qt,batchingColor:qt&&D._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&D.instanceColor!==null,instancingMorph:Ot&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ht===null?s.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Ks,alphaToCoverage:!!w.alphaToCoverage,map:ve,matcap:Qt,envMap:be,envMapMode:be&&Z.mapping,envMapCubeUVHeight:X,aoMap:F,lightMap:Sn,bumpMap:jt,normalMap:Kt,displacementMap:f&&It,emissiveMap:ge,normalMapObjectSpace:Kt&&w.normalMapType===Gp,normalMapTangentSpace:Kt&&w.normalMapType===Ff,metalnessMap:Pt,roughnessMap:L,anisotropy:R,anisotropyMap:gt,clearcoat:V,clearcoatMap:St,clearcoatNormalMap:te,clearcoatRoughnessMap:at,dispersion:nt,iridescence:st,iridescenceMap:Tt,iridescenceThicknessMap:Ut,sheen:Q,sheenColorMap:Ft,sheenRoughnessMap:Et,specularMap:Jt,specularColorMap:Xt,specularIntensityMap:me,transmission:Rt,transmissionMap:O,thicknessMap:pt,gradientMap:$,opaque:w.transparent===!1&&w.blending===Fs&&w.alphaToCoverage===!1,alphaMap:it,alphaTest:_t,alphaHash:xt,combine:w.combine,mapUv:ve&&_(w.map.channel),aoMapUv:F&&_(w.aoMap.channel),lightMapUv:Sn&&_(w.lightMap.channel),bumpMapUv:jt&&_(w.bumpMap.channel),normalMapUv:Kt&&_(w.normalMap.channel),displacementMapUv:It&&_(w.displacementMap.channel),emissiveMapUv:ge&&_(w.emissiveMap.channel),metalnessMapUv:Pt&&_(w.metalnessMap.channel),roughnessMapUv:L&&_(w.roughnessMap.channel),anisotropyMapUv:gt&&_(w.anisotropyMap.channel),clearcoatMapUv:St&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(w.sheenRoughnessMap.channel),specularMapUv:Jt&&_(w.specularMap.channel),specularColorMapUv:Xt&&_(w.specularColorMap.channel),specularIntensityMapUv:me&&_(w.specularIntensityMap.channel),transmissionMapUv:O&&_(w.transmissionMap.channel),thicknessMapUv:pt&&_(w.thicknessMap.channel),alphaMapUv:it&&_(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Kt||R),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!W.attributes.uv&&(ve||it),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Nt,skinning:D.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:kt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:we,decodeVideoTexture:ve&&w.map.isVideoTexture===!0&&se.getTransfer(w.map.colorSpace)===fe,decodeVideoTextureEmissive:ge&&w.emissiveMap.isVideoTexture===!0&&se.getTransfer(w.emissiveMap.colorSpace)===fe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Gt,flipSided:w.side===en,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ht&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&w.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function m(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(y(M,w),v(M,w),M.push(s.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function v(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const M=g[w.type];let P;if(M){const N=Hn[M];P=ca.clone(N.uniforms)}else P=w.uniforms;return P}function A(w,M){let P;for(let N=0,D=h.length;N<D;N++){const z=h[N];if(z.cacheKey===M){P=z,++P.usedTimes;break}}return P===void 0&&(P=new gv(s,M,w,o),h.push(P)),P}function E(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function S(w){c.remove(w)}function T(){c.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:x,acquireProgram:A,releaseProgram:E,releaseShaderCache:S,programs:h,dispose:T}}function yv(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,c){s.get(r)[a]=c}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function wv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ku(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ju(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(u,f,p,g,_,d){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:d},s[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=d),t++,m}function a(u,f,p,g,_,d){const m=r(u,f,p,g,_,d);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):e.push(m)}function c(u,f,p,g,_,d){const m=r(u,f,p,g,_,d);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):e.unshift(m)}function l(u,f){e.length>1&&e.sort(u||wv),n.length>1&&n.sort(f||Ku),i.length>1&&i.sort(f||Ku)}function h(){for(let u=t,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:c,finish:h,sort:l}}function Sv(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new Ju,s.set(n,[r])):i>=o.length?(r=new Ju,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function bv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new lt};break;case"SpotLight":e={position:new U,direction:new U,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":e={color:new lt,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function Tv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Ev=0;function Av(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Rv(s){const t=new bv,e=Tv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const i=new U,o=new he,r=new he;function a(l){let h=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,_=0,d=0,m=0,y=0,v=0,x=0,A=0,E=0,S=0;l.sort(Av);for(let w=0,M=l.length;w<M;w++){const P=l[w],N=P.color,D=P.intensity,z=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*D,u+=N.g*D,f+=N.b*D;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],D);S++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,X=e.get(P);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=P.shadow.matrix,y++}n.directional[p]=H,p++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(N).multiplyScalar(D),H.distance=z,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[_]=H;const Z=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,Z.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=Z.matrix,P.castShadow){const X=e.get(P);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=W,x++}_++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(N).multiplyScalar(D),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[d]=H,d++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const Z=P.shadow,X=e.get(P);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,X.shadowCameraNear=Z.camera.near,X.shadowCameraFar=Z.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=H,g++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(D),H.groundColor.copy(P.groundColor).multiplyScalar(D),n.hemi[m]=H,m++}}d>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const T=n.hash;(T.directionalLength!==p||T.pointLength!==g||T.spotLength!==_||T.rectAreaLength!==d||T.hemiLength!==m||T.numDirectionalShadows!==y||T.numPointShadows!==v||T.numSpotShadows!==x||T.numSpotMaps!==A||T.numLightProbes!==S)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=d,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=S,T.directionalLength=p,T.pointLength=g,T.spotLength=_,T.rectAreaLength=d,T.hemiLength=m,T.numDirectionalShadows=y,T.numPointShadows=v,T.numSpotShadows=x,T.numSpotMaps=A,T.numLightProbes=S,n.version=Ev++)}function c(l,h){let u=0,f=0,p=0,g=0,_=0;const d=h.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){const v=l[m];if(v.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(d),u++}else if(v.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(d),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(d),p++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(d),r.identity(),o.copy(v.matrixWorld),o.premultiply(d),r.extractRotation(o),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(d),f++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(d),_++}}}return{setup:a,setupView:c,state:n}}function Qu(s){const t=new Rv(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function Cv(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new Qu(s),t.set(i,[a])):o>=r.length?(a=new Qu(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iv=`uniform sampler2D shadow_pass;
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
}`;function Lv(s,t,e){let n=new vh;const i=new ut,o=new ut,r=new de,a=new im({depthPacking:kp}),c=new sm,l={},h=e.maxTextureSize,u={[Ci]:en,[en]:Ci,[Gt]:Gt},f=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Pv,fragmentShader:Iv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ee;g.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new I(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wf;let m=this.type;this.render=function(E,S,T){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;const w=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(fi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const D=m!==ri&&this.type===ri,z=m===ri&&this.type!==ri;for(let W=0,H=E.length;W<H;W++){const Z=E[W],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const ct=X.getFrameExtents();if(i.multiply(ct),o.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/ct.x),i.x=o.x*ct.x,X.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/ct.y),i.y=o.y*ct.y,X.mapSize.y=o.y)),X.map===null||D===!0||z===!0){const bt=this.type!==ri?{minFilter:yn,magFilter:yn}:{};X.map!==null&&X.map.dispose(),X.map=new zn(i.x,i.y,bt),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const dt=X.getViewportCount();for(let bt=0;bt<dt;bt++){const kt=X.getViewport(bt);r.set(o.x*kt.x,o.y*kt.y,o.x*kt.z,o.y*kt.w),N.viewport(r),X.updateMatrices(Z,bt),n=X.getFrustum(),x(S,T,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===ri&&y(X,T),X.needsUpdate=!1}m=this.type,d.needsUpdate=!1,s.setRenderTarget(w,M,P)};function y(E,S){const T=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new zn(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(S,null,T,f,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(S,null,T,p,_,null)}function v(E,S,T,w){let M=null;const P=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)M=P;else if(M=T.isPointLight===!0?c:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const N=M.uuid,D=S.uuid;let z=l[N];z===void 0&&(z={},l[N]=z);let W=z[D];W===void 0&&(W=M.clone(),z[D]=W,S.addEventListener("dispose",A)),M=W}if(M.visible=S.visible,M.wireframe=S.wireframe,w===ri?M.side=S.shadowSide!==null?S.shadowSide:S.side:M.side=S.shadowSide!==null?S.shadowSide:u[S.side],M.alphaMap=S.alphaMap,M.alphaTest=S.alphaTest,M.map=S.map,M.clipShadows=S.clipShadows,M.clippingPlanes=S.clippingPlanes,M.clipIntersection=S.clipIntersection,M.displacementMap=S.displacementMap,M.displacementScale=S.displacementScale,M.displacementBias=S.displacementBias,M.wireframeLinewidth=S.wireframeLinewidth,M.linewidth=S.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=s.properties.get(M);N.light=T}return M}function x(E,S,T,w,M){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===ri)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const D=t.update(E),z=E.material;if(Array.isArray(z)){const W=D.groups;for(let H=0,Z=W.length;H<Z;H++){const X=W[H],ct=z[X.materialIndex];if(ct&&ct.visible){const dt=v(E,ct,w,M);E.onBeforeShadow(s,E,S,T,D,dt,X),s.renderBufferDirect(T,null,D,dt,E,X),E.onAfterShadow(s,E,S,T,D,dt,X)}}}else if(z.visible){const W=v(E,z,w,M);E.onBeforeShadow(s,E,S,T,D,W,null),s.renderBufferDirect(T,null,D,W,E,null),E.onAfterShadow(s,E,S,T,D,W,null)}}const N=E.children;for(let D=0,z=N.length;D<z;D++)x(N[D],S,T,w,M)}function A(E){E.target.removeEventListener("dispose",A);for(const T in l){const w=l[T],M=E.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const Dv={[Wc]:Xc,[Yc]:$c,[qc]:jc,[Ys]:Zc,[Xc]:Wc,[$c]:Yc,[jc]:qc,[Zc]:Ys};function Uv(s,t){function e(){let O=!1;const pt=new de;let $=null;const it=new de(0,0,0,0);return{setMask:function(_t){$!==_t&&!O&&(s.colorMask(_t,_t,_t,_t),$=_t)},setLocked:function(_t){O=_t},setClear:function(_t,xt,Ht,we,Be){Be===!0&&(_t*=we,xt*=we,Ht*=we),pt.set(_t,xt,Ht,we),it.equals(pt)===!1&&(s.clearColor(_t,xt,Ht,we),it.copy(pt))},reset:function(){O=!1,$=null,it.set(-1,0,0,0)}}}function n(){let O=!1,pt=!1,$=null,it=null,_t=null;return{setReversed:function(xt){if(pt!==xt){const Ht=t.get("EXT_clip_control");pt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);const we=_t;_t=null,this.setClear(we)}pt=xt},getReversed:function(){return pt},setTest:function(xt){xt?ht(s.DEPTH_TEST):Nt(s.DEPTH_TEST)},setMask:function(xt){$!==xt&&!O&&(s.depthMask(xt),$=xt)},setFunc:function(xt){if(pt&&(xt=Dv[xt]),it!==xt){switch(xt){case Wc:s.depthFunc(s.NEVER);break;case Xc:s.depthFunc(s.ALWAYS);break;case Yc:s.depthFunc(s.LESS);break;case Ys:s.depthFunc(s.LEQUAL);break;case qc:s.depthFunc(s.EQUAL);break;case Zc:s.depthFunc(s.GEQUAL);break;case $c:s.depthFunc(s.GREATER);break;case jc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}it=xt}},setLocked:function(xt){O=xt},setClear:function(xt){_t!==xt&&(pt&&(xt=1-xt),s.clearDepth(xt),_t=xt)},reset:function(){O=!1,$=null,it=null,_t=null,pt=!1}}}function i(){let O=!1,pt=null,$=null,it=null,_t=null,xt=null,Ht=null,we=null,Be=null;return{setTest:function(ce){O||(ce?ht(s.STENCIL_TEST):Nt(s.STENCIL_TEST))},setMask:function(ce){pt!==ce&&!O&&(s.stencilMask(ce),pt=ce)},setFunc:function(ce,Pn,ti){($!==ce||it!==Pn||_t!==ti)&&(s.stencilFunc(ce,Pn,ti),$=ce,it=Pn,_t=ti)},setOp:function(ce,Pn,ti){(xt!==ce||Ht!==Pn||we!==ti)&&(s.stencilOp(ce,Pn,ti),xt=ce,Ht=Pn,we=ti)},setLocked:function(ce){O=ce},setClear:function(ce){Be!==ce&&(s.clearStencil(ce),Be=ce)},reset:function(){O=!1,pt=null,$=null,it=null,_t=null,xt=null,Ht=null,we=null,Be=null}}}const o=new e,r=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,_=!1,d=null,m=null,y=null,v=null,x=null,A=null,E=null,S=new lt(0,0,0),T=0,w=!1,M=null,P=null,N=null,D=null,z=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=Z>=2);let ct=null,dt={};const bt=s.getParameter(s.SCISSOR_BOX),kt=s.getParameter(s.VIEWPORT),$t=new de().fromArray(bt),J=new de().fromArray(kt);function rt(O,pt,$,it){const _t=new Uint8Array(4),xt=s.createTexture();s.bindTexture(O,xt),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<$;Ht++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(pt,0,s.RGBA,1,1,it,0,s.RGBA,s.UNSIGNED_BYTE,_t):s.texImage2D(pt+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_t);return xt}const yt={};yt[s.TEXTURE_2D]=rt(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=rt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=rt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=rt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ht(s.DEPTH_TEST),r.setFunc(Ys),jt(!1),Kt(Wh),ht(s.CULL_FACE),F(fi);function ht(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function Nt(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function Ot(O,pt){return u[O]!==pt?(s.bindFramebuffer(O,pt),u[O]=pt,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=pt),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=pt),!0):!1}function qt(O,pt){let $=p,it=!1;if(O){$=f.get(pt),$===void 0&&($=[],f.set(pt,$));const _t=O.textures;if($.length!==_t.length||$[0]!==s.COLOR_ATTACHMENT0){for(let xt=0,Ht=_t.length;xt<Ht;xt++)$[xt]=s.COLOR_ATTACHMENT0+xt;$.length=_t.length,it=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,it=!0);it&&s.drawBuffers($)}function ve(O){return g!==O?(s.useProgram(O),g=O,!0):!1}const Qt={[Ki]:s.FUNC_ADD,[dp]:s.FUNC_SUBTRACT,[pp]:s.FUNC_REVERSE_SUBTRACT};Qt[mp]=s.MIN,Qt[gp]=s.MAX;const be={[xp]:s.ZERO,[_p]:s.ONE,[vp]:s.SRC_COLOR,[Hc]:s.SRC_ALPHA,[Tp]:s.SRC_ALPHA_SATURATE,[Sp]:s.DST_COLOR,[yp]:s.DST_ALPHA,[Mp]:s.ONE_MINUS_SRC_COLOR,[Vc]:s.ONE_MINUS_SRC_ALPHA,[bp]:s.ONE_MINUS_DST_COLOR,[wp]:s.ONE_MINUS_DST_ALPHA,[Ep]:s.CONSTANT_COLOR,[Ap]:s.ONE_MINUS_CONSTANT_COLOR,[Rp]:s.CONSTANT_ALPHA,[Cp]:s.ONE_MINUS_CONSTANT_ALPHA};function F(O,pt,$,it,_t,xt,Ht,we,Be,ce){if(O===fi){_===!0&&(Nt(s.BLEND),_=!1);return}if(_===!1&&(ht(s.BLEND),_=!0),O!==fp){if(O!==d||ce!==w){if((m!==Ki||x!==Ki)&&(s.blendEquation(s.FUNC_ADD),m=Ki,x=Ki),ce)switch(O){case Fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ho:s.blendFunc(s.ONE,s.ONE);break;case Xh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ho:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Xh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,v=null,A=null,E=null,S.set(0,0,0),T=0,d=O,w=ce}return}_t=_t||pt,xt=xt||$,Ht=Ht||it,(pt!==m||_t!==x)&&(s.blendEquationSeparate(Qt[pt],Qt[_t]),m=pt,x=_t),($!==y||it!==v||xt!==A||Ht!==E)&&(s.blendFuncSeparate(be[$],be[it],be[xt],be[Ht]),y=$,v=it,A=xt,E=Ht),(we.equals(S)===!1||Be!==T)&&(s.blendColor(we.r,we.g,we.b,Be),S.copy(we),T=Be),d=O,w=!1}function Sn(O,pt){O.side===Gt?Nt(s.CULL_FACE):ht(s.CULL_FACE);let $=O.side===en;pt&&($=!$),jt($),O.blending===Fs&&O.transparent===!1?F(fi):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),o.setMask(O.colorWrite);const it=O.stencilWrite;a.setTest(it),it&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ge(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ht(s.SAMPLE_ALPHA_TO_COVERAGE):Nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function jt(O){M!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),M=O)}function Kt(O){O!==hp?(ht(s.CULL_FACE),O!==P&&(O===Wh?s.cullFace(s.BACK):O===up?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Nt(s.CULL_FACE),P=O}function It(O){O!==N&&(H&&s.lineWidth(O),N=O)}function ge(O,pt,$){O?(ht(s.POLYGON_OFFSET_FILL),(D!==pt||z!==$)&&(s.polygonOffset(pt,$),D=pt,z=$)):Nt(s.POLYGON_OFFSET_FILL)}function Pt(O){O?ht(s.SCISSOR_TEST):Nt(s.SCISSOR_TEST)}function L(O){O===void 0&&(O=s.TEXTURE0+W-1),ct!==O&&(s.activeTexture(O),ct=O)}function R(O,pt,$){$===void 0&&(ct===null?$=s.TEXTURE0+W-1:$=ct);let it=dt[$];it===void 0&&(it={type:void 0,texture:void 0},dt[$]=it),(it.type!==O||it.texture!==pt)&&(ct!==$&&(s.activeTexture($),ct=$),s.bindTexture(O,pt||yt[O]),it.type=O,it.texture=pt)}function V(){const O=dt[ct];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function nt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ft(O){$t.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),$t.copy(O))}function Et(O){J.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),J.copy(O))}function Jt(O,pt){let $=l.get(pt);$===void 0&&($=new WeakMap,l.set(pt,$));let it=$.get(O);it===void 0&&(it=s.getUniformBlockIndex(pt,O.name),$.set(O,it))}function Xt(O,pt){const it=l.get(pt).get(O);c.get(pt)!==it&&(s.uniformBlockBinding(pt,it,O.__bindingPointIndex),c.set(pt,it))}function me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ct=null,dt={},u={},f=new WeakMap,p=[],g=null,_=!1,d=null,m=null,y=null,v=null,x=null,A=null,E=null,S=new lt(0,0,0),T=0,w=!1,M=null,P=null,N=null,D=null,z=null,$t.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:ht,disable:Nt,bindFramebuffer:Ot,drawBuffers:qt,useProgram:ve,setBlending:F,setMaterial:Sn,setFlipSided:jt,setCullFace:Kt,setLineWidth:It,setPolygonOffset:ge,setScissorTest:Pt,activeTexture:L,bindTexture:R,unbindTexture:V,compressedTexImage2D:nt,compressedTexImage3D:st,texImage2D:Tt,texImage3D:Ut,updateUBOMapping:Jt,uniformBlockBinding:Xt,texStorage2D:te,texStorage3D:at,texSubImage2D:Q,texSubImage3D:Rt,compressedTexSubImage2D:gt,compressedTexSubImage3D:St,scissor:Ft,viewport:Et,reset:me}}function Nv(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ut,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,R){return p?new OffscreenCanvas(L,R):aa("canvas")}function _(L,R,V){let nt=1;const st=Pt(L);if((st.width>V||st.height>V)&&(nt=V/Math.max(st.width,st.height)),nt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Q=Math.floor(nt*st.width),Rt=Math.floor(nt*st.height);u===void 0&&(u=g(Q,Rt));const gt=R?g(Q,Rt):u;return gt.width=Q,gt.height=Rt,gt.getContext("2d").drawImage(L,0,0,Q,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+Q+"x"+Rt+")."),gt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),L;return L}function d(L){return L.generateMipmaps}function m(L){s.generateMipmap(L)}function y(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(L,R,V,nt,st=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Q=R;if(R===s.RED&&(V===s.FLOAT&&(Q=s.R32F),V===s.HALF_FLOAT&&(Q=s.R16F),V===s.UNSIGNED_BYTE&&(Q=s.R8)),R===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(Q=s.R8UI),V===s.UNSIGNED_SHORT&&(Q=s.R16UI),V===s.UNSIGNED_INT&&(Q=s.R32UI),V===s.BYTE&&(Q=s.R8I),V===s.SHORT&&(Q=s.R16I),V===s.INT&&(Q=s.R32I)),R===s.RG&&(V===s.FLOAT&&(Q=s.RG32F),V===s.HALF_FLOAT&&(Q=s.RG16F),V===s.UNSIGNED_BYTE&&(Q=s.RG8)),R===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(Q=s.RG8UI),V===s.UNSIGNED_SHORT&&(Q=s.RG16UI),V===s.UNSIGNED_INT&&(Q=s.RG32UI),V===s.BYTE&&(Q=s.RG8I),V===s.SHORT&&(Q=s.RG16I),V===s.INT&&(Q=s.RG32I)),R===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),V===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),V===s.UNSIGNED_INT&&(Q=s.RGB32UI),V===s.BYTE&&(Q=s.RGB8I),V===s.SHORT&&(Q=s.RGB16I),V===s.INT&&(Q=s.RGB32I)),R===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),V===s.UNSIGNED_INT&&(Q=s.RGBA32UI),V===s.BYTE&&(Q=s.RGBA8I),V===s.SHORT&&(Q=s.RGBA16I),V===s.INT&&(Q=s.RGBA32I)),R===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),R===s.RGBA){const Rt=st?oa:se.getTransfer(nt);V===s.FLOAT&&(Q=s.RGBA32F),V===s.HALF_FLOAT&&(Q=s.RGBA16F),V===s.UNSIGNED_BYTE&&(Q=Rt===fe?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(L,R){let V;return L?R===null||R===rs||R===$s?V=s.DEPTH24_STENCIL8:R===Zn?V=s.DEPTH32F_STENCIL8:R===Vo&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===rs||R===$s?V=s.DEPTH_COMPONENT24:R===Zn?V=s.DEPTH_COMPONENT32F:R===Vo&&(V=s.DEPTH_COMPONENT16),V}function A(L,R){return d(L)===!0||L.isFramebufferTexture&&L.minFilter!==yn&&L.minFilter!==qn?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function E(L){const R=L.target;R.removeEventListener("dispose",E),T(R),R.isVideoTexture&&h.delete(R)}function S(L){const R=L.target;R.removeEventListener("dispose",S),M(R)}function T(L){const R=n.get(L);if(R.__webglInit===void 0)return;const V=L.source,nt=f.get(V);if(nt){const st=nt[R.__cacheKey];st.usedTimes--,st.usedTimes===0&&w(L),Object.keys(nt).length===0&&f.delete(V)}n.remove(L)}function w(L){const R=n.get(L);s.deleteTexture(R.__webglTexture);const V=L.source,nt=f.get(V);delete nt[R.__cacheKey],r.memory.textures--}function M(L){const R=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(R.__webglFramebuffer[nt]))for(let st=0;st<R.__webglFramebuffer[nt].length;st++)s.deleteFramebuffer(R.__webglFramebuffer[nt][st]);else s.deleteFramebuffer(R.__webglFramebuffer[nt]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[nt])}else{if(Array.isArray(R.__webglFramebuffer))for(let nt=0;nt<R.__webglFramebuffer.length;nt++)s.deleteFramebuffer(R.__webglFramebuffer[nt]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let nt=0;nt<R.__webglColorRenderbuffer.length;nt++)R.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[nt]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const V=L.textures;for(let nt=0,st=V.length;nt<st;nt++){const Q=n.get(V[nt]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),r.memory.textures--),n.remove(V[nt])}n.remove(L)}let P=0;function N(){P=0}function D(){const L=P;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),P+=1,L}function z(L){const R=[];return R.push(L.wrapS),R.push(L.wrapT),R.push(L.wrapR||0),R.push(L.magFilter),R.push(L.minFilter),R.push(L.anisotropy),R.push(L.internalFormat),R.push(L.format),R.push(L.type),R.push(L.generateMipmaps),R.push(L.premultiplyAlpha),R.push(L.flipY),R.push(L.unpackAlignment),R.push(L.colorSpace),R.join()}function W(L,R){const V=n.get(L);if(L.isVideoTexture&&It(L),L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){const nt=L.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(V,L,R);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+R)}function H(L,R){const V=n.get(L);if(L.version>0&&V.__version!==L.version){J(V,L,R);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+R)}function Z(L,R){const V=n.get(L);if(L.version>0&&V.__version!==L.version){J(V,L,R);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+R)}function X(L,R){const V=n.get(L);if(L.version>0&&V.__version!==L.version){rt(V,L,R);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+R)}const ct={[sa]:s.REPEAT,[Qi]:s.CLAMP_TO_EDGE,[Qc]:s.MIRRORED_REPEAT},dt={[yn]:s.NEAREST,[Op]:s.NEAREST_MIPMAP_NEAREST,[or]:s.NEAREST_MIPMAP_LINEAR,[qn]:s.LINEAR,[Fa]:s.LINEAR_MIPMAP_NEAREST,[ts]:s.LINEAR_MIPMAP_LINEAR},bt={[Hp]:s.NEVER,[Zp]:s.ALWAYS,[Vp]:s.LESS,[zf]:s.LEQUAL,[Wp]:s.EQUAL,[qp]:s.GEQUAL,[Xp]:s.GREATER,[Yp]:s.NOTEQUAL};function kt(L,R){if(R.type===Zn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===qn||R.magFilter===Fa||R.magFilter===or||R.magFilter===ts||R.minFilter===qn||R.minFilter===Fa||R.minFilter===or||R.minFilter===ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ct[R.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ct[R.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ct[R.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,dt[R.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,dt[R.minFilter]),R.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,bt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===yn||R.minFilter!==or&&R.minFilter!==ts||R.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function $t(L,R){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",E));const nt=R.source;let st=f.get(nt);st===void 0&&(st={},f.set(nt,st));const Q=z(R);if(Q!==L.__cacheKey){st[Q]===void 0&&(st[Q]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,V=!0),st[Q].usedTimes++;const Rt=st[L.__cacheKey];Rt!==void 0&&(st[L.__cacheKey].usedTimes--,Rt.usedTimes===0&&w(R)),L.__cacheKey=Q,L.__webglTexture=st[Q].texture}return V}function J(L,R,V){let nt=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(nt=s.TEXTURE_3D);const st=$t(L,R),Q=R.source;e.bindTexture(nt,L.__webglTexture,s.TEXTURE0+V);const Rt=n.get(Q);if(Q.version!==Rt.__version||st===!0){e.activeTexture(s.TEXTURE0+V);const gt=se.getPrimaries(se.workingColorSpace),St=R.colorSpace===Ti?null:se.getPrimaries(R.colorSpace),te=R.colorSpace===Ti||gt===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let at=_(R.image,!1,i.maxTextureSize);at=ge(R,at);const Tt=o.convert(R.format,R.colorSpace),Ut=o.convert(R.type);let Ft=v(R.internalFormat,Tt,Ut,R.colorSpace,R.isVideoTexture);kt(nt,R);let Et;const Jt=R.mipmaps,Xt=R.isVideoTexture!==!0,me=Rt.__version===void 0||st===!0,O=Q.dataReady,pt=A(R,at);if(R.isDepthTexture)Ft=x(R.format===js,R.type),me&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,Ft,at.width,at.height):e.texImage2D(s.TEXTURE_2D,0,Ft,at.width,at.height,0,Tt,Ut,null));else if(R.isDataTexture)if(Jt.length>0){Xt&&me&&e.texStorage2D(s.TEXTURE_2D,pt,Ft,Jt[0].width,Jt[0].height);for(let $=0,it=Jt.length;$<it;$++)Et=Jt[$],Xt?O&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,Et.width,Et.height,Tt,Ut,Et.data):e.texImage2D(s.TEXTURE_2D,$,Ft,Et.width,Et.height,0,Tt,Ut,Et.data);R.generateMipmaps=!1}else Xt?(me&&e.texStorage2D(s.TEXTURE_2D,pt,Ft,at.width,at.height),O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,at.width,at.height,Tt,Ut,at.data)):e.texImage2D(s.TEXTURE_2D,0,Ft,at.width,at.height,0,Tt,Ut,at.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Xt&&me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,Ft,Jt[0].width,Jt[0].height,at.depth);for(let $=0,it=Jt.length;$<it;$++)if(Et=Jt[$],R.format!==Fn)if(Tt!==null)if(Xt){if(O)if(R.layerUpdates.size>0){const _t=Cu(Et.width,Et.height,R.format,R.type);for(const xt of R.layerUpdates){const Ht=Et.data.subarray(xt*_t/Et.data.BYTES_PER_ELEMENT,(xt+1)*_t/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,xt,Et.width,Et.height,1,Tt,Ht)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,at.depth,Tt,Et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,Ft,Et.width,Et.height,at.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?O&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,at.depth,Tt,Ut,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,$,Ft,Et.width,Et.height,at.depth,0,Tt,Ut,Et.data)}else{Xt&&me&&e.texStorage2D(s.TEXTURE_2D,pt,Ft,Jt[0].width,Jt[0].height);for(let $=0,it=Jt.length;$<it;$++)Et=Jt[$],R.format!==Fn?Tt!==null?Xt?O&&e.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,Et.width,Et.height,Tt,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,$,Ft,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?O&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,Et.width,Et.height,Tt,Ut,Et.data):e.texImage2D(s.TEXTURE_2D,$,Ft,Et.width,Et.height,0,Tt,Ut,Et.data)}else if(R.isDataArrayTexture)if(Xt){if(me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,Ft,at.width,at.height,at.depth),O)if(R.layerUpdates.size>0){const $=Cu(at.width,at.height,R.format,R.type);for(const it of R.layerUpdates){const _t=at.data.subarray(it*$/at.data.BYTES_PER_ELEMENT,(it+1)*$/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,at.width,at.height,1,Tt,Ut,_t)}R.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Tt,Ut,at.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ft,at.width,at.height,at.depth,0,Tt,Ut,at.data);else if(R.isData3DTexture)Xt?(me&&e.texStorage3D(s.TEXTURE_3D,pt,Ft,at.width,at.height,at.depth),O&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Tt,Ut,at.data)):e.texImage3D(s.TEXTURE_3D,0,Ft,at.width,at.height,at.depth,0,Tt,Ut,at.data);else if(R.isFramebufferTexture){if(me)if(Xt)e.texStorage2D(s.TEXTURE_2D,pt,Ft,at.width,at.height);else{let $=at.width,it=at.height;for(let _t=0;_t<pt;_t++)e.texImage2D(s.TEXTURE_2D,_t,Ft,$,it,0,Tt,Ut,null),$>>=1,it>>=1}}else if(Jt.length>0){if(Xt&&me){const $=Pt(Jt[0]);e.texStorage2D(s.TEXTURE_2D,pt,Ft,$.width,$.height)}for(let $=0,it=Jt.length;$<it;$++)Et=Jt[$],Xt?O&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,Tt,Ut,Et):e.texImage2D(s.TEXTURE_2D,$,Ft,Tt,Ut,Et);R.generateMipmaps=!1}else if(Xt){if(me){const $=Pt(at);e.texStorage2D(s.TEXTURE_2D,pt,Ft,$.width,$.height)}O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Tt,Ut,at)}else e.texImage2D(s.TEXTURE_2D,0,Ft,Tt,Ut,at);d(R)&&m(nt),Rt.__version=Q.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function rt(L,R,V){if(R.image.length!==6)return;const nt=$t(L,R),st=R.source;e.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+V);const Q=n.get(st);if(st.version!==Q.__version||nt===!0){e.activeTexture(s.TEXTURE0+V);const Rt=se.getPrimaries(se.workingColorSpace),gt=R.colorSpace===Ti?null:se.getPrimaries(R.colorSpace),St=R.colorSpace===Ti||Rt===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const te=R.isCompressedTexture||R.image[0].isCompressedTexture,at=R.image[0]&&R.image[0].isDataTexture,Tt=[];for(let it=0;it<6;it++)!te&&!at?Tt[it]=_(R.image[it],!0,i.maxCubemapSize):Tt[it]=at?R.image[it].image:R.image[it],Tt[it]=ge(R,Tt[it]);const Ut=Tt[0],Ft=o.convert(R.format,R.colorSpace),Et=o.convert(R.type),Jt=v(R.internalFormat,Ft,Et,R.colorSpace),Xt=R.isVideoTexture!==!0,me=Q.__version===void 0||nt===!0,O=st.dataReady;let pt=A(R,Ut);kt(s.TEXTURE_CUBE_MAP,R);let $;if(te){Xt&&me&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Jt,Ut.width,Ut.height);for(let it=0;it<6;it++){$=Tt[it].mipmaps;for(let _t=0;_t<$.length;_t++){const xt=$[_t];R.format!==Fn?Ft!==null?Xt?O&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,0,0,xt.width,xt.height,Ft,xt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,Jt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,0,0,xt.width,xt.height,Ft,Et,xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,Jt,xt.width,xt.height,0,Ft,Et,xt.data)}}}else{if($=R.mipmaps,Xt&&me){$.length>0&&pt++;const it=Pt(Tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Jt,it.width,it.height)}for(let it=0;it<6;it++)if(at){Xt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Tt[it].width,Tt[it].height,Ft,Et,Tt[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Jt,Tt[it].width,Tt[it].height,0,Ft,Et,Tt[it].data);for(let _t=0;_t<$.length;_t++){const Ht=$[_t].image[it].image;Xt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,0,0,Ht.width,Ht.height,Ft,Et,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,Jt,Ht.width,Ht.height,0,Ft,Et,Ht.data)}}else{Xt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ft,Et,Tt[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Jt,Ft,Et,Tt[it]);for(let _t=0;_t<$.length;_t++){const xt=$[_t];Xt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,0,0,Ft,Et,xt.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,Jt,Ft,Et,xt.image[it])}}}d(R)&&m(s.TEXTURE_CUBE_MAP),Q.__version=st.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function yt(L,R,V,nt,st,Q){const Rt=o.convert(V.format,V.colorSpace),gt=o.convert(V.type),St=v(V.internalFormat,Rt,gt,V.colorSpace),te=n.get(R),at=n.get(V);if(at.__renderTarget=R,!te.__hasExternalTextures){const Tt=Math.max(1,R.width>>Q),Ut=Math.max(1,R.height>>Q);st===s.TEXTURE_3D||st===s.TEXTURE_2D_ARRAY?e.texImage3D(st,Q,St,Tt,Ut,R.depth,0,Rt,gt,null):e.texImage2D(st,Q,St,Tt,Ut,0,Rt,gt,null)}e.bindFramebuffer(s.FRAMEBUFFER,L),Kt(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,st,at.__webglTexture,0,jt(R)):(st===s.TEXTURE_2D||st>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,st,at.__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(L,R,V){if(s.bindRenderbuffer(s.RENDERBUFFER,L),R.depthBuffer){const nt=R.depthTexture,st=nt&&nt.isDepthTexture?nt.type:null,Q=x(R.stencilBuffer,st),Rt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=jt(R);Kt(R)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt,Q,R.width,R.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,Q,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,Q,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Rt,s.RENDERBUFFER,L)}else{const nt=R.textures;for(let st=0;st<nt.length;st++){const Q=nt[st],Rt=o.convert(Q.format,Q.colorSpace),gt=o.convert(Q.type),St=v(Q.internalFormat,Rt,gt,Q.colorSpace),te=jt(R);V&&Kt(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,te,St,R.width,R.height):Kt(R)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,St,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,St,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Nt(L,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,L),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=n.get(R.depthTexture);nt.__renderTarget=R,(!nt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),W(R.depthTexture,0);const st=nt.__webglTexture,Q=jt(R);if(R.depthTexture.format===zs)Kt(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0);else if(R.depthTexture.format===js)Kt(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Ot(L){const R=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==L.depthTexture){const nt=L.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),nt){const st=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,nt.removeEventListener("dispose",st)};nt.addEventListener("dispose",st),R.__depthDisposeCallback=st}R.__boundDepthTexture=nt}if(L.depthTexture&&!R.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Nt(R.__webglFramebuffer,L)}else if(V){R.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[nt]),R.__webglDepthbuffer[nt]===void 0)R.__webglDepthbuffer[nt]=s.createRenderbuffer(),ht(R.__webglDepthbuffer[nt],L,!1);else{const st=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=R.__webglDepthbuffer[nt];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),ht(R.__webglDepthbuffer,L,!1);else{const nt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,st)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(L,R,V){const nt=n.get(L);R!==void 0&&yt(nt.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Ot(L)}function ve(L){const R=L.texture,V=n.get(L),nt=n.get(R);L.addEventListener("dispose",S);const st=L.textures,Q=L.isWebGLCubeRenderTarget===!0,Rt=st.length>1;if(Rt||(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=R.version,r.memory.textures++),Q){V.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(R.mipmaps&&R.mipmaps.length>0){V.__webglFramebuffer[gt]=[];for(let St=0;St<R.mipmaps.length;St++)V.__webglFramebuffer[gt][St]=s.createFramebuffer()}else V.__webglFramebuffer[gt]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){V.__webglFramebuffer=[];for(let gt=0;gt<R.mipmaps.length;gt++)V.__webglFramebuffer[gt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Rt)for(let gt=0,St=st.length;gt<St;gt++){const te=n.get(st[gt]);te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture(),r.memory.textures++)}if(L.samples>0&&Kt(L)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let gt=0;gt<st.length;gt++){const St=st[gt];V.__webglColorRenderbuffer[gt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[gt]);const te=o.convert(St.format,St.colorSpace),at=o.convert(St.type),Tt=v(St.internalFormat,te,at,St.colorSpace,L.isXRRenderTarget===!0),Ut=jt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,Tt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,V.__webglColorRenderbuffer[gt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),ht(V.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),kt(s.TEXTURE_CUBE_MAP,R);for(let gt=0;gt<6;gt++)if(R.mipmaps&&R.mipmaps.length>0)for(let St=0;St<R.mipmaps.length;St++)yt(V.__webglFramebuffer[gt][St],L,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,St);else yt(V.__webglFramebuffer[gt],L,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);d(R)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let gt=0,St=st.length;gt<St;gt++){const te=st[gt],at=n.get(te);e.bindTexture(s.TEXTURE_2D,at.__webglTexture),kt(s.TEXTURE_2D,te),yt(V.__webglFramebuffer,L,te,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,0),d(te)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let gt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(gt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(gt,nt.__webglTexture),kt(gt,R),R.mipmaps&&R.mipmaps.length>0)for(let St=0;St<R.mipmaps.length;St++)yt(V.__webglFramebuffer[St],L,R,s.COLOR_ATTACHMENT0,gt,St);else yt(V.__webglFramebuffer,L,R,s.COLOR_ATTACHMENT0,gt,0);d(R)&&m(gt),e.unbindTexture()}L.depthBuffer&&Ot(L)}function Qt(L){const R=L.textures;for(let V=0,nt=R.length;V<nt;V++){const st=R[V];if(d(st)){const Q=y(L),Rt=n.get(st).__webglTexture;e.bindTexture(Q,Rt),m(Q),e.unbindTexture()}}}const be=[],F=[];function Sn(L){if(L.samples>0){if(Kt(L)===!1){const R=L.textures,V=L.width,nt=L.height;let st=s.COLOR_BUFFER_BIT;const Q=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=n.get(L),gt=R.length>1;if(gt)for(let St=0;St<R.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let St=0;St<R.length;St++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(st|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(st|=s.STENCIL_BUFFER_BIT)),gt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[St]);const te=n.get(R[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,V,nt,0,0,V,nt,st,s.NEAREST),c===!0&&(be.length=0,F.length=0,be.push(s.COLOR_ATTACHMENT0+St),L.depthBuffer&&L.resolveDepthBuffer===!1&&(be.push(Q),F.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,be))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),gt)for(let St=0;St<R.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[St]);const te=n.get(R[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,te,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const R=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function jt(L){return Math.min(i.maxSamples,L.samples)}function Kt(L){const R=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function It(L){const R=r.render.frame;h.get(L)!==R&&(h.set(L,R),L.update())}function ge(L,R){const V=L.colorSpace,nt=L.format,st=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==Ks&&V!==Ti&&(se.getTransfer(V)===fe?(nt!==Fn||st!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),R}function Pt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=X,this.rebindTextures=qt,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Sn,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Kt}function Fv(s,t){function e(n,i=Ti){let o;const r=se.getTransfer(i);if(n===mi)return s.UNSIGNED_BYTE;if(n===uh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===fh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Cf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Af)return s.BYTE;if(n===Rf)return s.SHORT;if(n===Vo)return s.UNSIGNED_SHORT;if(n===hh)return s.INT;if(n===rs)return s.UNSIGNED_INT;if(n===Zn)return s.FLOAT;if(n===di)return s.HALF_FLOAT;if(n===Pf)return s.ALPHA;if(n===If)return s.RGB;if(n===Fn)return s.RGBA;if(n===Lf)return s.LUMINANCE;if(n===Df)return s.LUMINANCE_ALPHA;if(n===zs)return s.DEPTH_COMPONENT;if(n===js)return s.DEPTH_STENCIL;if(n===dh)return s.RED;if(n===ph)return s.RED_INTEGER;if(n===Uf)return s.RG;if(n===mh)return s.RG_INTEGER;if(n===gh)return s.RGBA_INTEGER;if(n===Wr||n===Xr||n===Yr||n===qr)if(r===fe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Wr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Wr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tl||n===el||n===nl||n===il)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===tl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===el)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===il)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sl||n===ol||n===rl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===sl||n===ol)return r===fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===rl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===al||n===cl||n===ll||n===hl||n===ul||n===fl||n===dl||n===pl||n===ml||n===gl||n===xl||n===_l||n===vl||n===Ml)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===al)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ll)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_l)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ml)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zr||n===yl||n===wl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Zr)return r===fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nf||n===Sl||n===bl||n===Tl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Zr)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const zv={type:"move"};class xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,n),m=this._getHandJoint(l,_);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zv)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ov=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bv=`
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

}`;class kv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ve,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new un({vertexShader:Ov,fragmentShader:Bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new I(new ye(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gv extends so{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null;const _=new kv,d=e.getContextAttributes();let m=null,y=null;const v=[],x=[],A=new ut;let E=null;const S=new _n;S.viewport=new de;const T=new _n;T.viewport=new de;const w=[S,T],M=new cm;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let rt=v[J];return rt===void 0&&(rt=new xc,v[J]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(J){let rt=v[J];return rt===void 0&&(rt=new xc,v[J]=rt),rt.getGripSpace()},this.getHand=function(J){let rt=v[J];return rt===void 0&&(rt=new xc,v[J]=rt),rt.getHandSpace()};function D(J){const rt=x.indexOf(J.inputSource);if(rt===-1)return;const yt=v[rt];yt!==void 0&&(yt.update(J.inputSource,J.frame,l||r),yt.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",W);for(let J=0;J<v.length;J++){const rt=x[J];rt!==null&&(x[J]=null,v[J].disconnect(rt))}P=null,N=null,_.reset(),t.setRenderTarget(m),p=null,f=null,u=null,i=null,y=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",z),i.addEventListener("inputsourceschange",W),d.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let yt=null,ht=null,Nt=null;d.depth&&(Nt=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=d.stencil?js:zs,ht=d.stencil?$s:rs);const Ot={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:o};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Ot),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new zn(f.textureWidth,f.textureHeight,{format:Fn,type:mi,depthTexture:new jf(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const yt={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(i,e,yt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new zn(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(J){for(let rt=0;rt<J.removed.length;rt++){const yt=J.removed[rt],ht=x.indexOf(yt);ht>=0&&(x[ht]=null,v[ht].disconnect(yt))}for(let rt=0;rt<J.added.length;rt++){const yt=J.added[rt];let ht=x.indexOf(yt);if(ht===-1){for(let Ot=0;Ot<v.length;Ot++)if(Ot>=x.length){x.push(yt),ht=Ot;break}else if(x[Ot]===null){x[Ot]=yt,ht=Ot;break}if(ht===-1)break}const Nt=v[ht];Nt&&Nt.connect(yt)}}const H=new U,Z=new U;function X(J,rt,yt){H.setFromMatrixPosition(rt.matrixWorld),Z.setFromMatrixPosition(yt.matrixWorld);const ht=H.distanceTo(Z),Nt=rt.projectionMatrix.elements,Ot=yt.projectionMatrix.elements,qt=Nt[14]/(Nt[10]-1),ve=Nt[14]/(Nt[10]+1),Qt=(Nt[9]+1)/Nt[5],be=(Nt[9]-1)/Nt[5],F=(Nt[8]-1)/Nt[0],Sn=(Ot[8]+1)/Ot[0],jt=qt*F,Kt=qt*Sn,It=ht/(-F+Sn),ge=It*-F;if(rt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ge),J.translateZ(It),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Nt[10]===-1)J.projectionMatrix.copy(rt.projectionMatrix),J.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Pt=qt+It,L=ve+It,R=jt-ge,V=Kt+(ht-ge),nt=Qt*ve/L*Pt,st=be*ve/L*Pt;J.projectionMatrix.makePerspective(R,V,nt,st,Pt,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ct(J,rt){rt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(rt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let rt=J.near,yt=J.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),M.near=T.near=S.near=rt,M.far=T.far=S.far=yt,(P!==M.near||N!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,N=M.far),S.layers.mask=J.layers.mask|2,T.layers.mask=J.layers.mask|4,M.layers.mask=S.layers.mask|T.layers.mask;const ht=J.parent,Nt=M.cameras;ct(M,ht);for(let Ot=0;Ot<Nt.length;Ot++)ct(Nt[Ot],ht);Nt.length===2?X(M,S,T):M.projectionMatrix.copy(S.projectionMatrix),dt(J,M,ht)};function dt(J,rt,yt){yt===null?J.matrix.copy(rt.matrixWorld):(J.matrix.copy(yt.matrixWorld),J.matrix.invert(),J.matrix.multiply(rt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(rt.projectionMatrix),J.projectionMatrixInverse.copy(rt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=El*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(J){c=J,f!==null&&(f.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let bt=null;function kt(J,rt){if(h=rt.getViewerPose(l||r),g=rt,h!==null){const yt=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let ht=!1;yt.length!==M.cameras.length&&(M.cameras.length=0,ht=!0);for(let Ot=0;Ot<yt.length;Ot++){const qt=yt[Ot];let ve=null;if(p!==null)ve=p.getViewport(qt);else{const be=u.getViewSubImage(f,qt);ve=be.viewport,Ot===0&&(t.setRenderTargetTextures(y,be.colorTexture,f.ignoreDepthValues?void 0:be.depthStencilTexture),t.setRenderTarget(y))}let Qt=w[Ot];Qt===void 0&&(Qt=new _n,Qt.layers.enable(Ot),Qt.viewport=new de,w[Ot]=Qt),Qt.matrix.fromArray(qt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(qt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(ve.x,ve.y,ve.width,ve.height),Ot===0&&(M.matrix.copy(Qt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ht===!0&&M.cameras.push(Qt)}const Nt=i.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Ot=u.getDepthInformation(yt[0]);Ot&&Ot.isValid&&Ot.texture&&_.init(t,Ot,i.renderState)}}for(let yt=0;yt<v.length;yt++){const ht=x[yt],Nt=v[yt];ht!==null&&Nt!==void 0&&Nt.update(ht,rt,l||r)}bt&&bt(J,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const $t=new cd;$t.setAnimationLoop(kt),this.setAnimationLoop=function(J){bt=J},this.dispose=function(){}}}const Bi=new Kn,Hv=new he;function Vv(s,t){function e(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function n(d,m){m.color.getRGB(d.fogColor.value,Xf(s)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function i(d,m,y,v,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(d,m):m.isMeshToonMaterial?(o(d,m),u(d,m)):m.isMeshPhongMaterial?(o(d,m),h(d,m)):m.isMeshStandardMaterial?(o(d,m),f(d,m),m.isMeshPhysicalMaterial&&p(d,m,x)):m.isMeshMatcapMaterial?(o(d,m),g(d,m)):m.isMeshDepthMaterial?o(d,m):m.isMeshDistanceMaterial?(o(d,m),_(d,m)):m.isMeshNormalMaterial?o(d,m):m.isLineBasicMaterial?(r(d,m),m.isLineDashedMaterial&&a(d,m)):m.isPointsMaterial?c(d,m,y,v):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,e(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===en&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,e(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===en&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,e(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,e(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const y=t.get(m),v=y.envMap,x=y.envMapRotation;v&&(d.envMap.value=v,Bi.copy(x),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),d.envMapRotation.value.setFromMatrix4(Hv.makeRotationFromEuler(Bi)),d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,d.aoMapTransform))}function r(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform))}function a(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function c(d,m,y,v){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*y,d.scale.value=v*.5,m.map&&(d.map.value=m.map,e(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function h(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,y){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===en&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,m){m.matcap&&(d.matcap.value=m.matcap)}function _(d,m){const y=t.get(m).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Wv(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){const x=v.program;n.uniformBlockBinding(y,x)}function l(y,v){let x=i[y.id];x===void 0&&(g(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",d));const A=v.program;n.updateUBOMapping(y,A);const E=t.render.frame;o[y.id]!==E&&(f(y),o[y.id]=E)}function h(y){const v=u();y.__bindingPointIndex=v;const x=s.createBuffer(),A=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,A,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function u(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=i[y.id],x=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let E=0,S=x.length;E<S;E++){const T=Array.isArray(x[E])?x[E]:[x[E]];for(let w=0,M=T.length;w<M;w++){const P=T[w];if(p(P,E,w,A)===!0){const N=P.__offset,D=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let W=0;W<D.length;W++){const H=D[W],Z=_(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,N+z,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,z),z+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,v,x,A){const E=y.value,S=v+"_"+x;if(A[S]===void 0)return typeof E=="number"||typeof E=="boolean"?A[S]=E:A[S]=E.clone(),!0;{const T=A[S];if(typeof E=="number"||typeof E=="boolean"){if(T!==E)return A[S]=E,!0}else if(T.equals(E)===!1)return T.copy(E),!0}return!1}function g(y){const v=y.uniforms;let x=0;const A=16;for(let S=0,T=v.length;S<T;S++){const w=Array.isArray(v[S])?v[S]:[v[S]];for(let M=0,P=w.length;M<P;M++){const N=w[M],D=Array.isArray(N.value)?N.value:[N.value];for(let z=0,W=D.length;z<W;z++){const H=D[z],Z=_(H),X=x%A,ct=X%Z.boundary,dt=X+ct;x+=ct,dt!==0&&A-dt<Z.storage&&(x+=A-dt),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=Z.storage}}}const E=x%A;return E>0&&(x+=A-E),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function d(y){const v=y.target;v.removeEventListener("dispose",d);const x=r.indexOf(v.__bindingPointIndex);r.splice(x,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete o[v.id]}function m(){for(const y in i)s.deleteBuffer(i[y]);r=[],i={},o={}}return{bind:c,update:l,dispose:m}}class Xv{constructor(t={}){const{canvas:e=jp(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),_=new Int32Array(4);let d=null,m=null;const y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=Ri,this.toneMappingExposure=1;const x=this;let A=!1,E=0,S=0,T=null,w=-1,M=null;const P=new de,N=new de;let D=null;const z=new lt(0);let W=0,H=e.width,Z=e.height,X=1,ct=null,dt=null;const bt=new de(0,0,H,Z),kt=new de(0,0,H,Z);let $t=!1;const J=new vh;let rt=!1,yt=!1;this.transmissionResolutionScale=1;const ht=new he,Nt=new he,Ot=new U,qt=new de,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function be(){return T===null?X:1}let F=n;function Sn(C,B){return e.getContext(C,B)}try{const C={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lh}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",xt,!1),F===null){const B="webgl2";if(F=Sn(B,C),F===null)throw Sn(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let jt,Kt,It,ge,Pt,L,R,V,nt,st,Q,Rt,gt,St,te,at,Tt,Ut,Ft,Et,Jt,Xt,me,O;function pt(){jt=new t_(F),jt.init(),Xt=new Fv(F,jt),Kt=new Zx(F,jt,t,Xt),It=new Uv(F,jt),Kt.reverseDepthBuffer&&f&&It.buffers.depth.setReversed(!0),ge=new i_(F),Pt=new yv,L=new Nv(F,jt,It,Pt,Kt,Xt,ge),R=new jx(x),V=new Qx(x),nt=new hm(F),me=new Yx(F,nt),st=new e_(F,nt,ge,me),Q=new o_(F,st,nt,ge),Ft=new s_(F,Kt,L),at=new $x(Pt),Rt=new Mv(x,R,V,jt,Kt,me,at),gt=new Vv(x,Pt),St=new Sv,te=new Cv(jt),Ut=new Xx(x,R,V,It,Q,p,c),Tt=new Lv(x,Q,Kt),O=new Wv(F,ge,Kt,It),Et=new qx(F,jt,ge),Jt=new n_(F,jt,ge),ge.programs=Rt.programs,x.capabilities=Kt,x.extensions=jt,x.properties=Pt,x.renderLists=St,x.shadowMap=Tt,x.state=It,x.info=ge}pt();const $=new Gv(x,F);this.xr=$,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=jt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=jt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(C){C!==void 0&&(X=C,this.setSize(H,Z,!1))},this.getSize=function(C){return C.set(H,Z)},this.setSize=function(C,B,Y=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,Z=B,e.width=Math.floor(C*X),e.height=Math.floor(B*X),Y===!0&&(e.style.width=C+"px",e.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(H*X,Z*X).floor()},this.setDrawingBufferSize=function(C,B,Y){H=C,Z=B,X=Y,e.width=Math.floor(C*Y),e.height=Math.floor(B*Y),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(bt)},this.setViewport=function(C,B,Y,q){C.isVector4?bt.set(C.x,C.y,C.z,C.w):bt.set(C,B,Y,q),It.viewport(P.copy(bt).multiplyScalar(X).round())},this.getScissor=function(C){return C.copy(kt)},this.setScissor=function(C,B,Y,q){C.isVector4?kt.set(C.x,C.y,C.z,C.w):kt.set(C,B,Y,q),It.scissor(N.copy(kt).multiplyScalar(X).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(C){It.setScissorTest($t=C)},this.setOpaqueSort=function(C){ct=C},this.setTransparentSort=function(C){dt=C},this.getClearColor=function(C){return C.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(C=!0,B=!0,Y=!0){let q=0;if(C){let k=!1;if(T!==null){const ot=T.texture.format;k=ot===gh||ot===mh||ot===ph}if(k){const ot=T.texture.type,mt=ot===mi||ot===rs||ot===Vo||ot===$s||ot===uh||ot===fh,wt=Ut.getClearColor(),At=Ut.getClearAlpha(),zt=wt.r,Bt=wt.g,Lt=wt.b;mt?(g[0]=zt,g[1]=Bt,g[2]=Lt,g[3]=At,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=zt,_[1]=Bt,_[2]=Lt,_[3]=At,F.clearBufferiv(F.COLOR,0,_))}else q|=F.COLOR_BUFFER_BIT}B&&(q|=F.DEPTH_BUFFER_BIT),Y&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Ut.dispose(),St.dispose(),te.dispose(),Pt.dispose(),R.dispose(),V.dispose(),Q.dispose(),me.dispose(),O.dispose(),Rt.dispose(),$.dispose(),$.removeEventListener("sessionstart",zh),$.removeEventListener("sessionend",Oh),Li.stop()};function it(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const C=ge.autoReset,B=Tt.enabled,Y=Tt.autoUpdate,q=Tt.needsUpdate,k=Tt.type;pt(),ge.autoReset=C,Tt.enabled=B,Tt.autoUpdate=Y,Tt.needsUpdate=q,Tt.type=k}function xt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ht(C){const B=C.target;B.removeEventListener("dispose",Ht),we(B)}function we(C){Be(C),Pt.remove(C)}function Be(C){const B=Pt.get(C).programs;B!==void 0&&(B.forEach(function(Y){Rt.releaseProgram(Y)}),C.isShaderMaterial&&Rt.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,Y,q,k,ot){B===null&&(B=ve);const mt=k.isMesh&&k.matrixWorld.determinant()<0,wt=sp(C,B,Y,q,k);It.setMaterial(q,mt);let At=Y.index,zt=1;if(q.wireframe===!0){if(At=st.getWireframeAttribute(Y),At===void 0)return;zt=2}const Bt=Y.drawRange,Lt=Y.attributes.position;let ee=Bt.start*zt,oe=(Bt.start+Bt.count)*zt;ot!==null&&(ee=Math.max(ee,ot.start*zt),oe=Math.min(oe,(ot.start+ot.count)*zt)),At!==null?(ee=Math.max(ee,0),oe=Math.min(oe,At.count)):Lt!=null&&(ee=Math.max(ee,0),oe=Math.min(oe,Lt.count));const Ae=oe-ee;if(Ae<0||Ae===1/0)return;me.setup(k,q,wt,Y,At);let Se,ie=Et;if(At!==null&&(Se=nt.get(At),ie=Jt,ie.setIndex(Se)),k.isMesh)q.wireframe===!0?(It.setLineWidth(q.wireframeLinewidth*be()),ie.setMode(F.LINES)):ie.setMode(F.TRIANGLES);else if(k.isLine){let Dt=q.linewidth;Dt===void 0&&(Dt=1),It.setLineWidth(Dt*be()),k.isLineSegments?ie.setMode(F.LINES):k.isLineLoop?ie.setMode(F.LINE_LOOP):ie.setMode(F.LINE_STRIP)}else k.isPoints?ie.setMode(F.POINTS):k.isSprite&&ie.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ie.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))ie.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Dt=k._multiDrawStarts,Ne=k._multiDrawCounts,re=k._multiDrawCount,In=At?nt.get(At).bytesPerElement:1,ms=Pt.get(q).currentProgram.getUniforms();for(let mn=0;mn<re;mn++)ms.setValue(F,"_gl_DrawID",mn),ie.render(Dt[mn]/In,Ne[mn])}else if(k.isInstancedMesh)ie.renderInstances(ee,Ae,k.count);else if(Y.isInstancedBufferGeometry){const Dt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ne=Math.min(Y.instanceCount,Dt);ie.renderInstances(ee,Ae,Ne)}else ie.render(ee,Ae)};function ce(C,B,Y){C.transparent===!0&&C.side===Gt&&C.forceSinglePass===!1?(C.side=en,C.needsUpdate=!0,sr(C,B,Y),C.side=Ci,C.needsUpdate=!0,sr(C,B,Y),C.side=Gt):sr(C,B,Y)}this.compile=function(C,B,Y=null){Y===null&&(Y=C),m=te.get(Y),m.init(B),v.push(m),Y.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),C!==Y&&C.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const q=new Set;return C.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ot=k.material;if(ot)if(Array.isArray(ot))for(let mt=0;mt<ot.length;mt++){const wt=ot[mt];ce(wt,Y,k),q.add(wt)}else ce(ot,Y,k),q.add(ot)}),v.pop(),m=null,q},this.compileAsync=function(C,B,Y=null){const q=this.compile(C,B,Y);return new Promise(k=>{function ot(){if(q.forEach(function(mt){Pt.get(mt).currentProgram.isReady()&&q.delete(mt)}),q.size===0){k(C);return}setTimeout(ot,10)}jt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Pn=null;function ti(C){Pn&&Pn(C)}function zh(){Li.stop()}function Oh(){Li.start()}const Li=new cd;Li.setAnimationLoop(ti),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(C){Pn=C,$.setAnimationLoop(C),C===null?Li.stop():Li.start()},$.addEventListener("sessionstart",zh),$.addEventListener("sessionend",Oh),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(B),B=$.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,B,T),m=te.get(C,v.length),m.init(B),v.push(m),Nt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),J.setFromProjectionMatrix(Nt),yt=this.localClippingEnabled,rt=at.init(this.clippingPlanes,yt),d=St.get(C,y.length),d.init(),y.push(d),$.enabled===!0&&$.isPresenting===!0){const ot=x.xr.getDepthSensingMesh();ot!==null&&Ua(ot,B,-1/0,x.sortObjects)}Ua(C,B,0,x.sortObjects),d.finish(),x.sortObjects===!0&&d.sort(ct,dt),Qt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Qt&&Ut.addToRenderList(d,C),this.info.render.frame++,rt===!0&&at.beginShadows();const Y=m.state.shadowsArray;Tt.render(Y,C,B),rt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=d.opaque,k=d.transmissive;if(m.setupLights(),B.isArrayCamera){const ot=B.cameras;if(k.length>0)for(let mt=0,wt=ot.length;mt<wt;mt++){const At=ot[mt];kh(q,k,C,At)}Qt&&Ut.render(C);for(let mt=0,wt=ot.length;mt<wt;mt++){const At=ot[mt];Bh(d,C,At,At.viewport)}}else k.length>0&&kh(q,k,C,B),Qt&&Ut.render(C),Bh(d,C,B);T!==null&&S===0&&(L.updateMultisampleRenderTarget(T),L.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(x,C,B),me.resetDefaultState(),w=-1,M=null,v.pop(),v.length>0?(m=v[v.length-1],rt===!0&&at.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?d=y[y.length-1]:d=null};function Ua(C,B,Y,q){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||J.intersectsSprite(C)){q&&qt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Nt);const mt=Q.update(C),wt=C.material;wt.visible&&d.push(C,mt,wt,Y,qt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||J.intersectsObject(C))){const mt=Q.update(C),wt=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),qt.copy(C.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),qt.copy(mt.boundingSphere.center)),qt.applyMatrix4(C.matrixWorld).applyMatrix4(Nt)),Array.isArray(wt)){const At=mt.groups;for(let zt=0,Bt=At.length;zt<Bt;zt++){const Lt=At[zt],ee=wt[Lt.materialIndex];ee&&ee.visible&&d.push(C,mt,ee,Y,qt.z,Lt)}}else wt.visible&&d.push(C,mt,wt,Y,qt.z,null)}}const ot=C.children;for(let mt=0,wt=ot.length;mt<wt;mt++)Ua(ot[mt],B,Y,q)}function Bh(C,B,Y,q){const k=C.opaque,ot=C.transmissive,mt=C.transparent;m.setupLightsView(Y),rt===!0&&at.setGlobalState(x.clippingPlanes,Y),q&&It.viewport(P.copy(q)),k.length>0&&ir(k,B,Y),ot.length>0&&ir(ot,B,Y),mt.length>0&&ir(mt,B,Y),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function kh(C,B,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new zn(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?di:mi,minFilter:ts,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const ot=m.state.transmissionRenderTarget[q.id],mt=q.viewport||P;ot.setSize(mt.z*x.transmissionResolutionScale,mt.w*x.transmissionResolutionScale);const wt=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(z),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Qt&&Ut.render(Y);const At=x.toneMapping;x.toneMapping=Ri;const zt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),rt===!0&&at.setGlobalState(x.clippingPlanes,q),ir(C,Y,q),L.updateMultisampleRenderTarget(ot),L.updateRenderTargetMipmap(ot),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Lt=0,ee=B.length;Lt<ee;Lt++){const oe=B[Lt],Ae=oe.object,Se=oe.geometry,ie=oe.material,Dt=oe.group;if(ie.side===Gt&&Ae.layers.test(q.layers)){const Ne=ie.side;ie.side=en,ie.needsUpdate=!0,Gh(Ae,Y,q,Se,ie,Dt),ie.side=Ne,ie.needsUpdate=!0,Bt=!0}}Bt===!0&&(L.updateMultisampleRenderTarget(ot),L.updateRenderTargetMipmap(ot))}x.setRenderTarget(wt),x.setClearColor(z,W),zt!==void 0&&(q.viewport=zt),x.toneMapping=At}function ir(C,B,Y){const q=B.isScene===!0?B.overrideMaterial:null;for(let k=0,ot=C.length;k<ot;k++){const mt=C[k],wt=mt.object,At=mt.geometry,zt=q===null?mt.material:q,Bt=mt.group;wt.layers.test(Y.layers)&&Gh(wt,B,Y,At,zt,Bt)}}function Gh(C,B,Y,q,k,ot){C.onBeforeRender(x,B,Y,q,k,ot),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),k.onBeforeRender(x,B,Y,q,C,ot),k.transparent===!0&&k.side===Gt&&k.forceSinglePass===!1?(k.side=en,k.needsUpdate=!0,x.renderBufferDirect(Y,B,q,k,C,ot),k.side=Ci,k.needsUpdate=!0,x.renderBufferDirect(Y,B,q,k,C,ot),k.side=Gt):x.renderBufferDirect(Y,B,q,k,C,ot),C.onAfterRender(x,B,Y,q,k,ot)}function sr(C,B,Y){B.isScene!==!0&&(B=ve);const q=Pt.get(C),k=m.state.lights,ot=m.state.shadowsArray,mt=k.state.version,wt=Rt.getParameters(C,k.state,ot,B,Y),At=Rt.getProgramCacheKey(wt);let zt=q.programs;q.environment=C.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(C.isMeshStandardMaterial?V:R).get(C.envMap||q.environment),q.envMapRotation=q.environment!==null&&C.envMap===null?B.environmentRotation:C.envMapRotation,zt===void 0&&(C.addEventListener("dispose",Ht),zt=new Map,q.programs=zt);let Bt=zt.get(At);if(Bt!==void 0){if(q.currentProgram===Bt&&q.lightsStateVersion===mt)return Vh(C,wt),Bt}else wt.uniforms=Rt.getUniforms(C),C.onBeforeCompile(wt,x),Bt=Rt.acquireProgram(wt,At),zt.set(At,Bt),q.uniforms=wt.uniforms;const Lt=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Lt.clippingPlanes=at.uniform),Vh(C,wt),q.needsLights=rp(C),q.lightsStateVersion=mt,q.needsLights&&(Lt.ambientLightColor.value=k.state.ambient,Lt.lightProbe.value=k.state.probe,Lt.directionalLights.value=k.state.directional,Lt.directionalLightShadows.value=k.state.directionalShadow,Lt.spotLights.value=k.state.spot,Lt.spotLightShadows.value=k.state.spotShadow,Lt.rectAreaLights.value=k.state.rectArea,Lt.ltc_1.value=k.state.rectAreaLTC1,Lt.ltc_2.value=k.state.rectAreaLTC2,Lt.pointLights.value=k.state.point,Lt.pointLightShadows.value=k.state.pointShadow,Lt.hemisphereLights.value=k.state.hemi,Lt.directionalShadowMap.value=k.state.directionalShadowMap,Lt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Lt.spotShadowMap.value=k.state.spotShadowMap,Lt.spotLightMatrix.value=k.state.spotLightMatrix,Lt.spotLightMap.value=k.state.spotLightMap,Lt.pointShadowMap.value=k.state.pointShadowMap,Lt.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=Bt,q.uniformsList=null,Bt}function Hh(C){if(C.uniformsList===null){const B=C.currentProgram.getUniforms();C.uniformsList=$r.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function Vh(C,B){const Y=Pt.get(C);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function sp(C,B,Y,q,k){B.isScene!==!0&&(B=ve),L.resetTextureUnits();const ot=B.fog,mt=q.isMeshStandardMaterial?B.environment:null,wt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ks,At=(q.isMeshStandardMaterial?V:R).get(q.envMap||mt),zt=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Bt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Lt=!!Y.morphAttributes.position,ee=!!Y.morphAttributes.normal,oe=!!Y.morphAttributes.color;let Ae=Ri;q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ae=x.toneMapping);const Se=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ie=Se!==void 0?Se.length:0,Dt=Pt.get(q),Ne=m.state.lights;if(rt===!0&&(yt===!0||C!==M)){const Xe=C===M&&q.id===w;at.setState(q,C,Xe)}let re=!1;q.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Ne.state.version||Dt.outputColorSpace!==wt||k.isBatchedMesh&&Dt.batching===!1||!k.isBatchedMesh&&Dt.batching===!0||k.isBatchedMesh&&Dt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Dt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Dt.instancing===!1||!k.isInstancedMesh&&Dt.instancing===!0||k.isSkinnedMesh&&Dt.skinning===!1||!k.isSkinnedMesh&&Dt.skinning===!0||k.isInstancedMesh&&Dt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Dt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Dt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Dt.instancingMorph===!1&&k.morphTexture!==null||Dt.envMap!==At||q.fog===!0&&Dt.fog!==ot||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==at.numPlanes||Dt.numIntersection!==at.numIntersection)||Dt.vertexAlphas!==zt||Dt.vertexTangents!==Bt||Dt.morphTargets!==Lt||Dt.morphNormals!==ee||Dt.morphColors!==oe||Dt.toneMapping!==Ae||Dt.morphTargetsCount!==ie)&&(re=!0):(re=!0,Dt.__version=q.version);let In=Dt.currentProgram;re===!0&&(In=sr(q,B,k));let ms=!1,mn=!1,co=!1;const _e=In.getUniforms(),bn=Dt.uniforms;if(It.useProgram(In.program)&&(ms=!0,mn=!0,co=!0),q.id!==w&&(w=q.id,mn=!0),ms||M!==C){It.buffers.depth.getReversed()?(ht.copy(C.projectionMatrix),Jp(ht),Qp(ht),_e.setValue(F,"projectionMatrix",ht)):_e.setValue(F,"projectionMatrix",C.projectionMatrix),_e.setValue(F,"viewMatrix",C.matrixWorldInverse);const nn=_e.map.cameraPosition;nn!==void 0&&nn.setValue(F,Ot.setFromMatrixPosition(C.matrixWorld)),Kt.logarithmicDepthBuffer&&_e.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&_e.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,mn=!0,co=!0)}if(k.isSkinnedMesh){_e.setOptional(F,k,"bindMatrix"),_e.setOptional(F,k,"bindMatrixInverse");const Xe=k.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),_e.setValue(F,"boneTexture",Xe.boneTexture,L))}k.isBatchedMesh&&(_e.setOptional(F,k,"batchingTexture"),_e.setValue(F,"batchingTexture",k._matricesTexture,L),_e.setOptional(F,k,"batchingIdTexture"),_e.setValue(F,"batchingIdTexture",k._indirectTexture,L),_e.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&_e.setValue(F,"batchingColorTexture",k._colorsTexture,L));const Tn=Y.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&Ft.update(k,Y,In),(mn||Dt.receiveShadow!==k.receiveShadow)&&(Dt.receiveShadow=k.receiveShadow,_e.setValue(F,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(bn.envMap.value=At,bn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(bn.envMapIntensity.value=B.environmentIntensity),mn&&(_e.setValue(F,"toneMappingExposure",x.toneMappingExposure),Dt.needsLights&&op(bn,co),ot&&q.fog===!0&&gt.refreshFogUniforms(bn,ot),gt.refreshMaterialUniforms(bn,q,X,Z,m.state.transmissionRenderTarget[C.id]),$r.upload(F,Hh(Dt),bn,L)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&($r.upload(F,Hh(Dt),bn,L),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&_e.setValue(F,"center",k.center),_e.setValue(F,"modelViewMatrix",k.modelViewMatrix),_e.setValue(F,"normalMatrix",k.normalMatrix),_e.setValue(F,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Xe=q.uniformsGroups;for(let nn=0,Na=Xe.length;nn<Na;nn++){const Di=Xe[nn];O.update(Di,In),O.bind(Di,In)}}return In}function op(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function rp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,B,Y){Pt.get(C.texture).__webglTexture=B,Pt.get(C.depthTexture).__webglTexture=Y;const q=Pt.get(C);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=Y===void 0,q.__autoAllocateDepthBuffer||jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,B){const Y=Pt.get(C);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0};const ap=F.createFramebuffer();this.setRenderTarget=function(C,B=0,Y=0){T=C,E=B,S=Y;let q=!0,k=null,ot=!1,mt=!1;if(C){const At=Pt.get(C);if(At.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(F.FRAMEBUFFER,null),q=!1;else if(At.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(At.__hasExternalTextures)L.rebindTextures(C,Pt.get(C.texture).__webglTexture,Pt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Lt=C.depthTexture;if(At.__boundDepthTexture!==Lt){if(Lt!==null&&Pt.has(Lt)&&(C.width!==Lt.image.width||C.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const zt=C.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(mt=!0);const Bt=Pt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Bt[B])?k=Bt[B][Y]:k=Bt[B],ot=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?k=Pt.get(C).__webglMultisampledFramebuffer:Array.isArray(Bt)?k=Bt[Y]:k=Bt,P.copy(C.viewport),N.copy(C.scissor),D=C.scissorTest}else P.copy(bt).multiplyScalar(X).floor(),N.copy(kt).multiplyScalar(X).floor(),D=$t;if(Y!==0&&(k=ap),It.bindFramebuffer(F.FRAMEBUFFER,k)&&q&&It.drawBuffers(C,k),It.viewport(P),It.scissor(N),It.setScissorTest(D),ot){const At=Pt.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,At.__webglTexture,Y)}else if(mt){const At=Pt.get(C.texture),zt=B;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.__webglTexture,Y,zt)}else if(C!==null&&Y!==0){const At=Pt.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,At.__webglTexture,Y)}w=-1},this.readRenderTargetPixels=function(C,B,Y,q,k,ot,mt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Pt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&mt!==void 0&&(wt=wt[mt]),wt){It.bindFramebuffer(F.FRAMEBUFFER,wt);try{const At=C.texture,zt=At.format,Bt=At.type;if(!Kt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-q&&Y>=0&&Y<=C.height-k&&F.readPixels(B,Y,q,k,Xt.convert(zt),Xt.convert(Bt),ot)}finally{const At=T!==null?Pt.get(T).__webglFramebuffer:null;It.bindFramebuffer(F.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(C,B,Y,q,k,ot,mt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Pt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&mt!==void 0&&(wt=wt[mt]),wt){const At=C.texture,zt=At.format,Bt=At.type;if(!Kt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=C.width-q&&Y>=0&&Y<=C.height-k){It.bindFramebuffer(F.FRAMEBUFFER,wt);const Lt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Lt),F.bufferData(F.PIXEL_PACK_BUFFER,ot.byteLength,F.STREAM_READ),F.readPixels(B,Y,q,k,Xt.convert(zt),Xt.convert(Bt),0);const ee=T!==null?Pt.get(T).__webglFramebuffer:null;It.bindFramebuffer(F.FRAMEBUFFER,ee);const oe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Kp(F,oe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Lt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ot),F.deleteBuffer(Lt),F.deleteSync(oe),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,B=null,Y=0){C.isTexture!==!0&&(Ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,C=arguments[1]);const q=Math.pow(2,-Y),k=Math.floor(C.image.width*q),ot=Math.floor(C.image.height*q),mt=B!==null?B.x:0,wt=B!==null?B.y:0;L.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,mt,wt,k,ot),It.unbindTexture()};const cp=F.createFramebuffer(),lp=F.createFramebuffer();this.copyTextureToTexture=function(C,B,Y=null,q=null,k=0,ot=null){C.isTexture!==!0&&(Ls("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,C=arguments[1],B=arguments[2],ot=arguments[3]||0,Y=null),ot===null&&(k!==0?(Ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=k,k=0):ot=0);let mt,wt,At,zt,Bt,Lt,ee,oe,Ae;const Se=C.isCompressedTexture?C.mipmaps[ot]:C.image;if(Y!==null)mt=Y.max.x-Y.min.x,wt=Y.max.y-Y.min.y,At=Y.isBox3?Y.max.z-Y.min.z:1,zt=Y.min.x,Bt=Y.min.y,Lt=Y.isBox3?Y.min.z:0;else{const Tn=Math.pow(2,-k);mt=Math.floor(Se.width*Tn),wt=Math.floor(Se.height*Tn),C.isDataArrayTexture?At=Se.depth:C.isData3DTexture?At=Math.floor(Se.depth*Tn):At=1,zt=0,Bt=0,Lt=0}q!==null?(ee=q.x,oe=q.y,Ae=q.z):(ee=0,oe=0,Ae=0);const ie=Xt.convert(B.format),Dt=Xt.convert(B.type);let Ne;B.isData3DTexture?(L.setTexture3D(B,0),Ne=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(L.setTexture2DArray(B,0),Ne=F.TEXTURE_2D_ARRAY):(L.setTexture2D(B,0),Ne=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);const re=F.getParameter(F.UNPACK_ROW_LENGTH),In=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ms=F.getParameter(F.UNPACK_SKIP_PIXELS),mn=F.getParameter(F.UNPACK_SKIP_ROWS),co=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Se.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Se.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,zt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Bt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Lt);const _e=C.isDataArrayTexture||C.isData3DTexture,bn=B.isDataArrayTexture||B.isData3DTexture;if(C.isDepthTexture){const Tn=Pt.get(C),Xe=Pt.get(B),nn=Pt.get(Tn.__renderTarget),Na=Pt.get(Xe.__renderTarget);It.bindFramebuffer(F.READ_FRAMEBUFFER,nn.__webglFramebuffer),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,Na.__webglFramebuffer);for(let Di=0;Di<At;Di++)_e&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.get(C).__webglTexture,k,Lt+Di),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.get(B).__webglTexture,ot,Ae+Di)),F.blitFramebuffer(zt,Bt,mt,wt,ee,oe,mt,wt,F.DEPTH_BUFFER_BIT,F.NEAREST);It.bindFramebuffer(F.READ_FRAMEBUFFER,null),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(k!==0||C.isRenderTargetTexture||Pt.has(C)){const Tn=Pt.get(C),Xe=Pt.get(B);It.bindFramebuffer(F.READ_FRAMEBUFFER,cp),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,lp);for(let nn=0;nn<At;nn++)_e?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tn.__webglTexture,k,Lt+nn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Tn.__webglTexture,k),bn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xe.__webglTexture,ot,Ae+nn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Xe.__webglTexture,ot),k!==0?F.blitFramebuffer(zt,Bt,mt,wt,ee,oe,mt,wt,F.COLOR_BUFFER_BIT,F.NEAREST):bn?F.copyTexSubImage3D(Ne,ot,ee,oe,Ae+nn,zt,Bt,mt,wt):F.copyTexSubImage2D(Ne,ot,ee,oe,zt,Bt,mt,wt);It.bindFramebuffer(F.READ_FRAMEBUFFER,null),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else bn?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(Ne,ot,ee,oe,Ae,mt,wt,At,ie,Dt,Se.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Ne,ot,ee,oe,Ae,mt,wt,At,ie,Se.data):F.texSubImage3D(Ne,ot,ee,oe,Ae,mt,wt,At,ie,Dt,Se):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ot,ee,oe,mt,wt,ie,Dt,Se.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ot,ee,oe,Se.width,Se.height,ie,Se.data):F.texSubImage2D(F.TEXTURE_2D,ot,ee,oe,mt,wt,ie,Dt,Se);F.pixelStorei(F.UNPACK_ROW_LENGTH,re),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,In),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ms),F.pixelStorei(F.UNPACK_SKIP_ROWS,mn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,co),ot===0&&B.generateMipmaps&&F.generateMipmap(Ne),It.unbindTexture()},this.copyTextureToTexture3D=function(C,B,Y=null,q=null,k=0){return C.isTexture!==!0&&(Ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,q=arguments[1]||null,C=arguments[2],B=arguments[3],k=arguments[4]||0),Ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,B,Y,q,k)},this.initRenderTarget=function(C){Pt.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),It.unbindTexture()},this.resetState=function(){E=0,S=0,T=null,It.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}const Yv=15,qv=6,Zv=1.8,da=8,tf=.85,ef=.98,pa=.003,le=90,Ia=1.7,$v=60,jv=45,Kv=10,Jv=6,Qv=8,tM=4,eM=5,nM=55,iM=35,sM=30,oM=25,rM=60,dd=3,aM=20,cM=5,lM=30,hM=40,uM=6,Ah=280,Ul=2.5,fM=6,nf=1.5,Nl=5,sf=2.5,_c=12,ze=30,dM=4,pM=5,mM=8,gM=2.2,G={fog:396308,ground:1720360,leaf:1722400,leafGlow:4521898,mushCap:8926190,mushGlow:13400063,mushStem:2756928,crystal:3407837,crystalCore:8978414,firefly:15662950,fireflyB:6750173,spore:12320665,ambient:2241365,moon:12307694,jellyBell:7833855,jellyGlow:11193599,jellyTent:6715340,puffBody:16768460,puffGlow:16755336,puffEye:2236962,puffCheek:16746649,deerBody:11202303,deerGlow:8969727,deerAntler:13434862,deerEye:1127236,mothWing:11206553,mothGlow:13434794,mothBody:5596723,mothSpot:16777215,grassTip:3385941,grassPurple:[1706530,2363962,4857960,11158766,13400063,16746717,2757952,6697898,11158783],grassBlue:[660514,858677,2114917,4500206,6741503,8974079,1387077,3368618,4500223],grassTeal:[662042,1059362,2121808,4517563,6750173,11206536,1720376,3385992,4521915],fern:1725744,fernGlow:3394662,flower:16742348,flowerGlow:16751069,flowerStem:1721376,reed:2774325,reedTip:4504422,orbGold:16763955,orbGlow:16772778,orbInner:16775389,laserPink:16737962,laserGlow:16746700,obeliskBlack:657938,obeliskPink:16729258,moatBlue:3377356,rainbow:[16724787,16746547,16772659,3407718,3377407,8926207],wispCore:11202303,wispGlow:14544639,wispTrail:8965375,dandStem:4482611,dandHead:16777198,dandSeed:16775389,dandSeedGlow:16777215,fairyMush:13404415,fairyGlow:14527231,fairyRing:11167470,bubbleIris:11197951,bubbleShine:16777215,bubblePop:13434862,starMote:16772829,pondWater:2254506,pondGlow:3377356,lilyPad:2263108,lilyFlower:16746700,lilyGlow:16755421,rockBase:2763314,rockMoss:1721378,rockLight:3816005,skyDeep:198160},We=new Xv({antialias:!0,powerPreference:"default"});We.setSize(window.innerWidth,window.innerHeight);We.setPixelRatio(Math.min(window.devicePixelRatio,2));We.shadowMap.enabled=!0;We.shadowMap.type=Sf;We.toneMapping=Tf;We.toneMappingExposure=2.8;We.outputColorSpace=tn;document.body.appendChild(We.domElement);const Qe=new _n(65,window.innerWidth/window.innerHeight,.1,300),pd=new ad,Mt=new y0;Mt.background=new lt(G.skyDeep);Mt.fog=new _h(G.fog,.01);window.addEventListener("resize",()=>{Qe.aspect=window.innerWidth/window.innerHeight,Qe.updateProjectionMatrix(),We.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("visibilitychange",()=>{document.hidden||pd.getDelta()});const md={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Qo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const xM=new Th(-1,1,1,-1,0,1);class _M extends Ee{constructor(){super(),this.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Wt([0,2,0,0,2,0],2))}}const vM=new _M;class gd{constructor(t){this._mesh=new I(vM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,xM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class MM extends Qo{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof un?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ca.clone(t.uniforms),this.material=new un({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new gd(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class of extends Qo{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),o.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(i.EQUAL,1,4294967295),o.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),o.buffers.stencil.setLocked(!0)}}class yM extends Qo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class wM{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ut);this._width=n.width,this._height=n.height,e=new zn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:di}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new MM(md),this.copyPass.material.blending=fi,this.clock=new ad}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,o=this.passes.length;i<o;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}of!==void 0&&(r instanceof of?n=!0:r instanceof yM&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class SM extends Qo{constructor(t,e,n=null,i=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new lt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=i}}const bM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new lt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class to extends Qo{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new ut(t.x,t.y):new ut(256,256),this.clearColor=new lt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new zn(o,r,{type:di}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new zn(o,r,{type:di});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new zn(o,r,{type:di});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),o=Math.round(o/2),r=Math.round(r/2)}const a=bM;this.highPassUniforms=ca.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new un({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ut(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=md;this.copyUniforms=ca.clone(h.uniforms),this.blendMaterial=new un({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ho,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new lt,this.oldClearAlpha=1,this.basic=new j,this.fsQuad=new gd(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,i),this.renderTargetsVertical[o].setSize(n,i),this.separableBlurMaterials[o].uniforms.invSize.value=new ut(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=to.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=to.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new un({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ut(.5,.5)},direction:{value:new ut(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new un({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}to.BlurDirectionX=new ut(1,0);to.BlurDirectionY=new ut(0,1);let is=null,Rh=!0;try{const s=new SM(Mt,Qe),t=new to(new ut(window.innerWidth,window.innerHeight),.6,.4,.85);is=new wM(We),is.addPass(s),is.addPass(t)}catch(s){console.warn("Bloom unavailable, falling back to direct render:",s.message),Rh=!1}window.addEventListener("resize",()=>{Rh&&is&&is.setSize(window.innerWidth,window.innerHeight)});function rf(){Rh&&is?is.render():We.render(Mt,Qe)}const Ch=new om(G.ambient,G.ground,.5);Mt.add(Ch);const Rn=new Ca(G.moon,.85);Rn.position.set(30,60,-20);Rn.castShadow=!0;Rn.shadow.camera.left=-90;Rn.shadow.camera.right=90;Rn.shadow.camera.top=90;Rn.shadow.camera.bottom=-90;Rn.shadow.camera.near=1;Rn.shadow.camera.far=250;Rn.shadow.mapSize.set(1024,1024);Rn.shadow.bias=-.001;Mt.add(Rn);const Cn=new Ca(2241365,.3);Cn.position.set(-40,45,25);Cn.castShadow=!0;Cn.shadow.camera.left=-70;Cn.shadow.camera.right=70;Cn.shadow.camera.top=70;Cn.shadow.camera.bottom=-70;Cn.shadow.camera.near=1;Cn.shadow.camera.far=200;Cn.shadow.mapSize.set(512,512);Cn.shadow.bias=-.002;Mt.add(Cn);const xd=new Ca(3359829,.4);xd.position.set(-25,15,30);Mt.add(xd);const _d=new ds(3368516,.7,100);_d.position.set(0,.5,0);Mt.add(_d);const TM=[{pos:[15,3,15],col:3368618,int:.8,dist:30},{pos:[-20,4,-10],col:6702216,int:.7,dist:25},{pos:[0,5,30],col:2263142,int:.7,dist:28},{pos:[-15,3,20],col:4491417,int:.6,dist:22},{pos:[25,3,-20],col:10053188,int:.5,dist:20}];for(const s of TM){const t=new ds(s.col,s.int,s.dist);t.position.set(s.pos[0],s.pos[1],s.pos[2]),Mt.add(t)}const vd=new Ca(4478327,.4);vd.position.set(-10,25,40);Mt.add(vd);const Ph=new ds(6719624,.6,20);Mt.add(Ph);const Xi=[];function EM(){for(let s=0;s<pM;s++){const t=new ds(G.crystal,0,16);Mt.add(t),Xi.push(t)}}const To=new ds(G.orbGold,0,15);Mt.add(To);const Pe={};let Zo=0,ss=0,La=!1,Md=!1,Ih=0,Lh=0,Dh=!1,Da=!1,tr=!1,ma=null,cs=null,Fl=0,zl=0,Ol=null;function AM(s){Ol=s}function RM(s){Md=s}function CM(s){Da=s}function er(){!Md&&Ol&&Ol()}window.addEventListener("keydown",s=>{Pe[s.code]=!0,"Space ShiftLeft ShiftRight KeyW KeyA KeyS KeyD".split(" ").indexOf(s.code)>=0&&s.preventDefault(),er()});window.addEventListener("keyup",s=>{Pe[s.code]=!1});window.addEventListener("blur",()=>{for(const s in Pe)Pe[s]=!1;La=!1});We.domElement.addEventListener("mousedown",()=>{La=!0,er()});window.addEventListener("mouseup",()=>{La=!1});window.addEventListener("mousemove",s=>{La&&(Zo-=s.movementX*pa,ss-=s.movementY*pa,ss=Math.max(-1,Math.min(1,ss)))});const PM="ontouchstart"in window||navigator.maxTouchPoints>0,nr=document.getElementById("joy-zone"),ga=document.getElementById("joy-knob"),Uh=document.getElementById("btn-jump");PM&&(nr.style.display="block",Uh.style.display="block",document.getElementById("controls").textContent="Stick: Move · Drag right: Look · JUMP");function yd(s,t){const e=nr.getBoundingClientRect();let n=s-(e.left+e.width/2),i=t-(e.top+e.height/2);const o=Math.sqrt(n*n+i*i),r=52;o>r&&(n=n/o*r,i=i/o*r),Ih=n/r,Lh=i/r,ga.style.left=40+n+"px",ga.style.top=40+i+"px"}nr.addEventListener("touchstart",s=>{s.preventDefault(),s.stopPropagation(),er();const t=s.changedTouches[0];ma=t.identifier,Dh=!0,yd(t.clientX,t.clientY)},{passive:!1});nr.addEventListener("touchmove",s=>{s.preventDefault(),s.stopPropagation();for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===ma&&yd(s.changedTouches[t].clientX,s.changedTouches[t].clientY)},{passive:!1});nr.addEventListener("touchend",s=>{s.preventDefault(),s.stopPropagation();for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===ma&&(ma=null,Dh=!1,Ih=0,Lh=0,ga.style.left="40px",ga.style.top="40px")},{passive:!1});Uh.addEventListener("touchstart",s=>{s.preventDefault(),s.stopPropagation(),er(),Da=!0},{passive:!1});Uh.addEventListener("touchend",s=>{s.preventDefault(),s.stopPropagation(),Da=!1},{passive:!1});We.domElement.addEventListener("touchstart",s=>{s.preventDefault(),er();for(let t=0;t<s.changedTouches.length;t++){const e=s.changedTouches[t];e.clientX>window.innerWidth*.3&&cs===null&&(cs=e.identifier,Fl=e.clientX,zl=e.clientY)}},{passive:!1});We.domElement.addEventListener("touchmove",s=>{s.preventDefault();for(let t=0;t<s.changedTouches.length;t++){const e=s.changedTouches[t];e.identifier===cs&&(Zo-=(e.clientX-Fl)*pa,ss-=(e.clientY-zl)*pa,ss=Math.max(-1,Math.min(1,ss)),Fl=e.clientX,zl=e.clientY)}},{passive:!1});We.domElement.addEventListener("touchend",s=>{for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===cs&&(cs=null)},{passive:!1});We.domElement.addEventListener("touchcancel",s=>{for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===cs&&(cs=null)},{passive:!1});function IM(){let s=0,t=0;Pe.KeyW&&(t-=1),Pe.KeyS&&(t+=1),Pe.KeyA&&(s-=1),Pe.KeyD&&(s+=1),Dh&&(s+=Ih,t+=Lh);const e=Math.sqrt(s*s+t*t);e>1&&(s/=e,t/=e);const n=qv*(Pe.ShiftLeft||Pe.ShiftRight||tr?Zv:1),i=Math.sin(Zo),o=Math.cos(Zo);return{x:(s*o+t*i)*n,z:(-s*i+t*o)*n}}const dn={mushCap:new K(.5,8,5),mushStem:new vt(.06,.1,.6,5),mushDot:new K(.06,4,3),crystal:new vt(0,.35,1.8,6),crystalSm:new vt(0,.18,.9,5),fly:new K(.06,4,3),spore:new K(.04,3,3),dandSeed:new K(.025,3,3),bubble:new K(.15,8,6),starMote:new K(.03,3,3),dustMote:new K(.035,3,3)};let No=42;function b(){return No=No*16807%2147483647,(No&2147483647)/2147483647}function LM(){return No}function DM(s){No=s}function Ur(s,t){let e=s*374761393+t*668265263+1274126177|0;return e=(e^e>>13)*1274126177|0,(e&2147483647)/2147483647}function Fo(s){return s*s*(3-2*s)}function wd(s,t){const e=Math.floor(s),n=Math.floor(t),i=Fo(s-e),o=Fo(t-n),r=Ur(e,n),a=Ur(e+1,n),c=Ur(e,n+1),l=Ur(e+1,n+1);return r+(a-r)*i+(c-r)*o+(r-a-c+l)*i*o}function af(s,t,e){let n=0,i=.5,o=1;for(let r=0;r<e;r++)n+=wd(s*o,t*o)*i,i*=.5,o*=2;return n}const Bl=[];function kl(s,t,e){Bl.push({x:s,z:t,r:e})}function ne(s,t){const e=Math.sqrt(s*s+t*t),n=1-Fo(Math.max(0,(e-le*.7)/(le*.3))),i=Fo(Math.min(1,e/8)),o=.035,r=af(s*o,t*o,4),a=af(s*o*2.7+50,t*o*2.7+50,3),c=wd(s*.15,t*.15);let l=r*2.5+a*.8+c*.15;l*=n*i;for(let h=0;h<Bl.length;h++){const u=Bl[h],f=s-u.x,p=t-u.z,g=Math.sqrt(f*f+p*p);if(g<u.r*2){const _=Fo(Math.max(0,(g-u.r*.5)/(u.r*1.5)));l*=_}}return l}function UM(){const t=document.createElement("canvas");t.width=2048,t.height=2048;const e=t.getContext("2d"),n=Math.random;e.fillStyle="#2a5038",e.fillRect(0,0,2048,2048);const i=[{col:"rgba(40,80,50,0.35)",n:15,r:120},{col:"rgba(60,50,25,0.25)",n:12,r:100},{col:"rgba(30,65,55,0.25)",n:10,r:110},{col:"rgba(55,70,35,0.2)",n:8,r:90},{col:"rgba(35,40,25,0.25)",n:8,r:80}];for(const h of i)for(let u=0;u<h.n;u++){const f=n()*2048,p=n()*2048,g=h.r*(.5+n()*.8),_=e.createRadialGradient(f,p,0,f,p,g);_.addColorStop(0,h.col),_.addColorStop(.6,h.col.replace(/[\d.]+\)$/,parseFloat(h.col.match(/[\d.]+\)$/)[0])*.4+")")),_.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=_;for(let d=-1;d<=1;d++)for(let m=-1;m<=1;m++)e.beginPath(),e.arc(f+d*2048,p+m*2048,g,0,6.28),e.fill()}const o=[{n:80,r:25,colors:["rgba(20,45,25,0.2)","rgba(35,55,28,0.18)","rgba(28,22,12,0.2)","rgba(15,38,30,0.15)"]},{n:200,r:10,colors:["rgba(30,55,30,0.14)","rgba(45,35,18,0.12)","rgba(22,48,35,0.12)","rgba(38,28,14,0.1)"]},{n:500,r:4,colors:["rgba(25,50,28,0.1)","rgba(40,30,15,0.08)","rgba(18,42,32,0.08)","rgba(32,25,10,0.06)"]}];for(const h of o)for(let u=0;u<h.n;u++){e.fillStyle=h.colors[Math.floor(n()*h.colors.length)];const f=n()*2048,p=n()*2048;e.beginPath(),e.arc(f,p,h.r+n()*h.r*.6,0,6.28),e.fill()}const r=["rgba(60,200,100,0.06)","rgba(50,180,120,0.05)","rgba(80,160,200,0.04)","rgba(100,220,150,0.05)"];for(let h=0;h<25;h++){let u=n()*2048,f=n()*2048;const p=r[Math.floor(n()*r.length)];e.strokeStyle=p,e.lineWidth=1+n()*2,e.beginPath(),e.moveTo(u,f);let g=n()*6.28;const _=12+Math.floor(n()*16);for(let d=0;d<_;d++)g+=Math.sin(d*.6)*.5+(n()-.5)*.4,u+=Math.cos(g)*(6+n()*10),f+=Math.sin(g)*(6+n()*10),e.lineTo(u,f);if(e.stroke(),n()<.6){const d=e.createRadialGradient(u,f,0,u,f,6+n()*8);d.addColorStop(0,p.replace("0.0","0.1")),d.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=d,e.beginPath(),e.arc(u,f,6+n()*8,0,6.28),e.fill()}}e.lineWidth=1.2;for(let h=0;h<30;h++){e.strokeStyle=`rgba(20,12,5,${.15+n()*.12})`;let u=n()*2048,f=n()*2048,p=n()*6.28;e.beginPath(),e.moveTo(u,f);for(let g=0;g<10;g++)p+=Math.sin(g*.7)*.5+(n()-.5)*.35,u+=Math.cos(p)*(8+n()*14),f+=Math.sin(p)*(8+n()*14),e.lineTo(u,f);e.stroke()}const a=["rgba(55,32,12,0.3)","rgba(70,42,18,0.25)","rgba(40,55,22,0.22)","rgba(22,50,28,0.2)","rgba(60,45,20,0.25)","rgba(30,60,35,0.18)","rgba(50,25,8,0.22)","rgba(65,55,25,0.18)"];for(let h=0;h<3e3;h++){e.fillStyle=a[Math.floor(n()*a.length)];const u=n()*2048,f=n()*2048,p=.8+n()*2.5;e.beginPath(),e.arc(u,f,p,0,6.28),e.fill()}for(let h=0;h<40;h++){const u=n()*2048,f=n()*2048,p=15+n()*35,g=e.createRadialGradient(u,f,0,u,f,p),_=n();_<.4?(g.addColorStop(0,"rgba(45,90,50,0.18)"),g.addColorStop(1,"rgba(25,55,30,0)")):_<.7?(g.addColorStop(0,"rgba(35,75,60,0.16)"),g.addColorStop(1,"rgba(20,50,38,0)")):(g.addColorStop(0,"rgba(55,75,35,0.14)"),g.addColorStop(1,"rgba(30,45,20,0)")),e.fillStyle=g,e.beginPath(),e.arc(u,f,p,0,6.28),e.fill()}for(let h=0;h<400;h++){const u=n()*2048,f=n()*2048,p=1.5+n()*3.5,g=Math.floor(28+n()*42);e.fillStyle=`rgba(${g},${g-4},${g-10},0.3)`,e.beginPath(),e.arc(u,f,p,0,6.28),e.fill()}e.lineWidth=.7;for(let h=0;h<80;h++){const u=n()*2048,f=n()*2048,p=4+n()*18,g=n()*6.28;e.strokeStyle=`rgba(22,12,5,${.15+n()*.1})`,e.beginPath(),e.moveTo(u,f),e.lineTo(u+Math.cos(g)*p,f+Math.sin(g)*p),e.stroke()}const c=["rgba(80,220,120,0.08)","rgba(60,200,160,0.07)","rgba(100,180,220,0.06)","rgba(120,100,200,0.05)","rgba(200,150,80,0.04)","rgba(60,180,180,0.06)"];for(let h=0;h<300;h++){const u=n()*2048,f=n()*2048,p=c[Math.floor(n()*c.length)];if(e.fillStyle=p,e.beginPath(),e.arc(u,f,1+n()*2,0,6.28),e.fill(),n()<.3){const g=e.createRadialGradient(u,f,0,u,f,4+n()*5);g.addColorStop(0,p),g.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=g,e.beginPath(),e.arc(u,f,4+n()*5,0,6.28),e.fill()}}for(let h=0;h<150;h++){const u=n()*2048,f=n()*2048;e.fillStyle=`rgba(120,180,130,${.04+n()*.04})`,e.beginPath(),e.arc(u,f,.5+n()*1.2,0,6.28),e.fill()}const l=new Mh(t);return l.wrapS=l.wrapT=sa,l.repeat.set(8,8),l.colorSpace=tn,l}function Nr(s,t){let e=s*127961+t*372143+918273|0;return e=(e^e>>13)*517261|0,(e&2147483647)/2147483647}function Gl(s){return s*s*(3-2*s)}function Sd(s,t){const e=Math.floor(s),n=Math.floor(t),i=Gl(s-e),o=Gl(t-n),r=Nr(e,n),a=Nr(e+1,n),c=Nr(e,n+1),l=Nr(e+1,n+1);return r+(a-r)*i+(c-r)*o+(r-a-c+l)*i*o}function vc(s,t,e){let n=0,i=.5,o=1;for(let r=0;r<e;r++)n+=Sd(s*o,t*o)*i,i*=.5,o*=2;return n}function NM(){const s=UM(),t=le*3,e=200,n=new ye(t,t,e,e),i=n.attributes.position,o=[[.55,.95,.6],[.45,.85,.95],[.8,.5,1],[.85,.65,.4],[.5,1.1,.65],[.4,.7,.9]],r=i.count,a=new Float32Array(r*3);for(let l=0;l<r;l++){const h=i.getX(l),u=i.getY(l);Math.sqrt(h*h+u*u)<le*1.4?i.setZ(l,ne(h,-u)):i.setZ(l,0);const p=h,g=-u,_=vc(p*.025+100,g*.025+200,3),d=vc(p*.06+300,g*.06+400,2),m=Sd(p*.15+500,g*.15+600),y=vc(p*.04-150,g*.04-250,3),v=Math.floor(_*o.length*.999),x=Math.floor(y*o.length*.999),A=o[v],E=o[x],S=Gl(d),T=.85+m*.3,w=(A[0]*(1-S)+E[0]*S)*T,M=(A[1]*(1-S)+E[1]*S)*T,P=(A[2]*(1-S)+E[2]*S)*T,D=1+ne(p,g)*.06;a[l*3]=w*D,a[l*3+1]=M*D,a[l*3+2]=P*D}n.setAttribute("color",new wn(a,3)),n.computeVertexNormals();const c=new I(n,new tt({map:s,vertexColors:!0,roughness:.75,metalness:0,emissive:1718304,emissiveIntensity:.25}));return c.rotation.x=-Math.PI/2,c.receiveShadow=!0,Mt.add(c),c}const $o=new pe;let xa=null;const Yi=120;let cf=null,jr=null,Hl=null,Vl=null,Bs=null;const ks=[],FM=3;let Mc=0;function Ei(s,t){const e=s>>16&255,n=s>>8&255,i=s&255;return`rgba(${e},${n},${i},${t})`}function Ai(s,t,e,n,i,o,r){s.save(),s.translate(t,e),Math.abs(i/n-1)>.01&&s.scale(1,i/n);const a=s.createRadialGradient(0,0,0,0,0,n);a.addColorStop(0,Ei(o,r)),a.addColorStop(.25,Ei(o,r*.55)),a.addColorStop(.55,Ei(o,r*.15)),a.addColorStop(.85,Ei(o,r*.03)),a.addColorStop(1,Ei(o,0)),s.fillStyle=a,s.beginPath(),s.arc(0,0,n,0,6.2832),s.fill(),s.restore()}function yc(s,t,e,n,i,o,r,a){Ai(s,t,e,n,i,o,r),t-n<0&&Ai(s,t+a,e,n,i,o,r),t+n>a&&Ai(s,t-a,e,n,i,o,r)}function zM(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),i=Math.random,o=n.createLinearGradient(0,0,0,1024);o.addColorStop(0,"#030610"),o.addColorStop(.2,"#050a18"),o.addColorStop(.4,"#0a1222"),o.addColorStop(.55,"#0c1828"),o.addColorStop(.75,"#081018"),o.addColorStop(1,"#040810"),n.fillStyle=o,n.fillRect(0,0,2048,1024);const r=[{x:.12,y:.22,rx:.18,ry:.14,col:1717094,a:.14},{x:.42,y:.28,rx:.22,ry:.1,col:2758741,a:.12},{x:.72,y:.18,rx:.16,ry:.12,col:1721446,a:.13},{x:.88,y:.32,rx:.2,ry:.09,col:3348548,a:.1},{x:.28,y:.12,rx:.14,ry:.18,col:2245768,a:.1},{x:.58,y:.38,rx:.18,ry:.07,col:4465220,a:.08},{x:.05,y:.4,rx:.15,ry:.1,col:1586005,a:.09},{x:.52,y:.15,rx:.12,ry:.16,col:2765670,a:.07}];for(const u of r){yc(n,u.x*2048,u.y*1024,u.rx*2048,u.ry*1024,u.col,u.a,2048);for(let f=0;f<4;f++){const p=(u.x+(i()-.5)*u.rx)*2048,g=(u.y+(i()-.5)*u.ry)*1024,_=u.rx*2048*(.2+i()*.35),d=u.ry*1024*(.2+i()*.4);yc(n,p,g,_,d,u.col,u.a*(.4+i()*.5),2048)}}const a=[2245802,2245734,4465254,5583701,3368584,2245717,3809894];for(let u=0;u<30;u++){const f=i()*2048,p=i()*1024*.55,g=40+i()*180,_=25+i()*100;yc(n,f,p,g,_,a[Math.floor(i()*a.length)],.025+i()*.035,2048)}n.save(),n.globalCompositeOperation="screen";const c=.26;for(let u=0;u<50;u++){const f=u/50,p=f*2048,g=(c+Math.sin(f*Math.PI)*.06+(i()-.5)*.02)*1024,_=2048*.05+i()*2048*.035,d=1024*.04*(.4+i()*.6);Ai(n,p,g,_,d,4478310,.025+i()*.015)}for(let u=0;u<25;u++){const f=.2+i()*.6,p=f*2048,g=(c+Math.sin(f*Math.PI)*.04)*1024;Ai(n,p,g,2048*.03+i()*2048*.02,1024*.02+i()*1024*.01,6719658,.015+i()*.012)}for(let u=0;u<10;u++){const f=.35+i()*.3,p=f*2048,g=(c+Math.sin(f*Math.PI)*.02)*1024;Ai(n,p,g,2048*.02,1024*.012,8943462,.01+i()*.008)}n.globalCompositeOperation="source-over",n.restore();for(let u=0;u<12;u++){const f=.1+i()*.8,p=f*2048,g=(c+Math.sin(f*Math.PI)*.04+(i()-.5)*.02)*1024,_=20+i()*60,d=8+i()*20;Ai(n,p,g,_,d,132104,.15+i()*.1)}const l=["255,255,255","220,230,255","255,240,220","200,215,255","255,225,200","240,240,255","255,245,235"];for(let u=0;u<5e3;u++){const f=i()*2048,p=i()*1024*.65,g=.3+i()*.7,_=.1+i()*.5;n.fillStyle=`rgba(${l[Math.floor(i()*l.length)]},${_})`,n.beginPath(),n.arc(f,p,g,0,6.28),n.fill()}for(let u=0;u<3e3;u++){const f=i(),p=f*2048,_=(c+Math.sin(f*Math.PI)*.06)*1024+(i()-.5)*1024*.1;if(_<0||_>1024*.6)continue;const d=.2+i()*.6,m=.2+i()*.7;n.fillStyle=`rgba(${l[Math.floor(i()*l.length)]},${m})`,n.beginPath(),n.arc(p,_,d,0,6.28),n.fill()}for(let u=0;u<60;u++){const f=i()*2048,p=i()*1024*.58,g=1.2+i()*1.8,_=6+i()*14,d=i();let m;d<.45?m="255,255,255":d<.65?m="210,225,255":d<.8?m="255,230,200":d<.92?m="190,210,255":m="255,200,180";const y=n.createRadialGradient(f,p,0,f,p,_);y.addColorStop(0,`rgba(${m},0.5)`),y.addColorStop(.1,`rgba(${m},0.18)`),y.addColorStop(.35,`rgba(${m},0.04)`),y.addColorStop(1,`rgba(${m},0)`),n.fillStyle=y,n.beginPath(),n.arc(f,p,_,0,6.28),n.fill(),n.strokeStyle=`rgba(${m},0.12)`,n.lineWidth=.5;const v=_*.8;n.beginPath(),n.moveTo(f-v,p),n.lineTo(f+v,p),n.moveTo(f,p-v),n.lineTo(f,p+v),n.stroke(),n.fillStyle=`rgba(${m},1)`,n.beginPath(),n.arc(f,p,g,0,6.28),n.fill()}for(let u=0;u<8;u++){const f=i()*2048,p=1024*.08+i()*1024*.42,g=50+i()*90;Ai(n,f,p,g,g*.7,3359846,.03);for(let _=0;_<100;_++){const d=i()*6.28,m=i()*i()*g,y=f+Math.cos(d)*m,v=p+Math.sin(d)*m*.65;if(y<0||y>2048||v<0||v>1024)continue;const x=.2+i()*.6;n.fillStyle=`rgba(255,255,255,${.25+i()*.6})`,n.beginPath(),n.arc(y,v,x,0,6.28),n.fill()}}for(let u=0;u<15;u++){const f=r[Math.floor(i()*r.length)],p=(f.x+(i()-.5)*f.rx*.5)*2048,g=(f.y+(i()-.5)*f.ry*.5)*1024,_=3+i()*8,d=n.createRadialGradient(p,g,0,p,g,_*3);d.addColorStop(0,Ei(f.col,.2)),d.addColorStop(.3,Ei(f.col,.06)),d.addColorStop(1,Ei(f.col,0)),n.fillStyle=d,n.beginPath(),n.arc(p,g,_*3,0,6.28),n.fill()}const h=new Mh(e);return h.colorSpace=tn,h}function OM(){const s=LM(),t=zM(),e=new K(Ah,64,32,0,Math.PI*2,0,Math.PI*.55);xa=new j({map:t,side:en,fog:!1,transparent:!1});const n=new I(e,xa);$o.add(n),BM(),kM(),Mt.add($o),DM(s)}function BM(){const s=new Float32Array(Yi*3),t=new Float32Array(Yi*3);jr=new Float32Array(Yi),Hl=new Float32Array(Yi),Vl=new Float32Array(Yi);const e=[[1,1,1],[.85,.9,1],[1,.94,.86],[.78,.84,1],[1,.88,.78],[.9,.95,1]],n=Math.random,i=Ah*.97;for(let a=0;a<Yi;a++){const c=n()*Math.PI*2,l=n()*Math.PI*.48,h=i*Math.cos(c)*Math.sin(l),u=i*Math.cos(l),f=i*Math.sin(c)*Math.sin(l);s[a*3]=h,s[a*3+1]=u,s[a*3+2]=f;const p=e[Math.floor(n()*e.length)];t[a*3]=p[0],t[a*3+1]=p[1],t[a*3+2]=p[2],jr[a]=2+n()*4,Hl[a]=n()*Math.PI*2,Vl[a]=.5+n()*2.5}const o=new Ee;o.setAttribute("position",new Wt(s,3)),o.setAttribute("color",new Wt(t,3)),Bs=new Wt(jr.slice(),1),Bs.setUsage(pn),o.setAttribute("size",Bs);const r=new $f({vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,fog:!1,blending:Ho,depthWrite:!1});cf=new R0(o,r),$o.add(cf)}function kM(){const s=new j({color:16777215,transparent:!0,opacity:0,fog:!1,blending:Ho,depthWrite:!1});for(let t=0;t<FM;t++){const e=new I(new vt(.15,0,12,4),s.clone());e.visible=!1,$o.add(e),ks.push({mesh:e,mat:e.material,active:!1,life:0,maxLife:0,sx:0,sy:0,sz:0,dx:0,dy:0,dz:0})}}function GM(){let s=null;for(let a=0;a<ks.length;a++)if(!ks[a].active){s=ks[a];break}if(!s)return;const t=Math.random,e=t()*Math.PI*2,n=.1+t()*.35,i=Ah*.85;s.sx=i*Math.cos(e)*Math.sin(n),s.sy=i*Math.cos(n),s.sz=i*Math.sin(e)*Math.sin(n);const o=e+(t()-.5)*1,r=80+t()*120;s.dx=Math.cos(o)*r,s.dy=-r*(.5+t()*.5),s.dz=Math.sin(o)*r,s.life=.5+t()*.8,s.maxLife=s.life,s.active=!0,s.mesh.visible=!0}function bd(s,t){if($o.rotation.y=t*.003,Bs){const e=Bs.array;for(let n=0;n<Yi;n++){const i=jr[n],o=Math.sin(t*Vl[n]+Hl[n]);e[n]=i*(.65+o*.35)}Bs.needsUpdate=!0}Mc-=s,Mc<=0&&(Mc=4+Math.random()*12,GM());for(let e=0;e<ks.length;e++){const n=ks[e];if(!n.active)continue;if(n.life-=s,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}const i=n.life/n.maxLife;n.sx+=n.dx*s,n.sy+=n.dy*s,n.sz+=n.dz*s,n.mesh.position.set(n.sx,n.sy,n.sz),n.mesh.lookAt(n.sx+n.dx,n.sy+n.dy,n.sz+n.dz),n.mesh.rotateX(Math.PI/2),n.mat.opacity=i*.7,n.mesh.scale.setScalar(.6+i*.4)}}function HM(s){if(xa){const t=Math.max(.15,s);xa.color.setRGB(t,t,t)}}const et={pos:new U(0,Ia,0),vel:new U,onGround:!0};let wc=0,Sc=0,Td=0,bc=65,lf=65,vo=0,hf=!0,Tc=0,eo=0,Wl=null,Xl=null,Yl=null,uf=1;function VM(s,t,e){Wl=s,Xl=t,Yl=e}let ql=[],Zl=[],$l=null;function WM(s,t){ql=s,Zl=t}function XM(s){$l=s}function YM(s){const t=IM(),e=Pe.ShiftLeft||Pe.ShiftRight||tr;et.vel.x=t.x,et.vel.z=t.z,et.vel.y-=Yv*s,(Pe.Space||Da)&&et.onGround&&(et.vel.y=da,et.onGround=!1,CM(!1),Xl&&Xl()),et.onGround||(Tc=et.vel.y),et.pos.x+=et.vel.x*s,et.pos.y+=et.vel.y*s,et.pos.z+=et.vel.z*s;const n=ne(et.pos.x,et.pos.z)+Ia;if(et.pos.y<=n){if(et.pos.y=n,et.vel.y=0,!hf&&Tc<-3){const h=Math.min(Math.abs(Tc)/da,1);vo=h*.15,$l&&$l(et.pos.x,et.pos.z,Math.floor(3+h*5)),Yl&&Yl(h)}et.onGround=!0}hf=et.onGround,et.onGround?(et.vel.x*=tf,et.vel.z*=tf):(et.vel.x*=ef,et.vel.z*=ef);const i=.4;for(let h=0;h<ql.length;h++){const u=ql[h],f=et.pos.x-u.x,p=et.pos.z-u.z,g=f*f+p*p,_=.6+i;if(g<_*_&&g>.001){const d=1/Math.sqrt(g);et.pos.x=u.x+f*d*_,et.pos.z=u.z+p*d*_}}for(let h=0;h<Zl.length;h++){const u=Zl[h],f=et.pos.x-u.x,p=et.pos.z-u.z,g=f*f+p*p,_=u.colR+i;if(g<_*_&&g>.001){const d=1/Math.sqrt(g);et.pos.x=u.x+f*d*_,et.pos.z=u.z+p*d*_}}if(Math.sqrt(et.pos.x*et.pos.x+et.pos.z*et.pos.z)>le){const h=Math.atan2(et.pos.z,et.pos.x);et.pos.x=Math.cos(h)*le,et.pos.z=Math.sin(h)*le}Ph.position.copy(et.pos);const a=Math.sqrt(t.x*t.x+t.z*t.z)>.5&&et.onGround;a?eo=0:eo+=s,Sc+=((a?e?.06:.035:0)-Sc)*s*6,a&&(wc+=s*(e?12:8));const l=Math.sin(wc)*Sc;if(a&&Wl){const h=Math.sin(wc)>=0?1:-1;uf>0&&h<0&&Wl(e),uf=h}lf=e&&a?78:65,bc+=(lf-bc)*s*4,Qe.fov=bc,Qe.updateProjectionMatrix(),vo*=Math.pow(.04,s),vo<.001&&(vo=0),Td=l-vo}const ff=[{leaf:1332520,glow:2280567,core:4521898},{leaf:931880,glow:3390378,core:5636044},{leaf:1721376,glow:4508757,core:7864200},{leaf:1060912,glow:2267562,core:4513262},{leaf:1583172,glow:3377356,core:5618687}];function qM(s,t){const e=new pe,n=6+b()*10,i=.2+b()*.3,o=new tt({color:5914672,roughness:.75,emissive:1718304,emissiveIntensity:.18}),r=new I(new vt(i*.4,i,n,6),o);r.position.y=n/2,r.castShadow=!0,e.add(r);const a=new tt({color:2263125,emissive:G.leafGlow,emissiveIntensity:.5,transparent:!0,opacity:.25}),c=2+Math.floor(b()*3);for(let y=0;y<c;y++){const v=y/c*6.28+b()*.5,x=n*.4+b()*n*.4,A=new I(new vt(.008,.015,x,3),a);A.position.set(Math.cos(v)*i*.74,n*.15+x/2,Math.sin(v)*i*.74),e.add(A)}const l=new tt({color:3812378,roughness:.85,emissive:1583636,emissiveIntensity:.12}),h=3+Math.floor(b()*3);for(let y=0;y<h;y++){const v=y/h*6.28+b()*.5,x=.8+b()*1.5,A=new I(new vt(.02,i*.3,x,4),l);A.position.set(Math.cos(v)*i*.5,.08,Math.sin(v)*i*.5),A.rotation.z=v<3.14?1.2+b()*.3:-(1.2+b()*.3),A.rotation.y=v,e.add(A)}const u=3+Math.floor(b()*4);for(let y=0;y<u;y++){const v=n*(.4+b()*.5),x=b()*Math.PI*2,A=1.5+b()*3,E=new I(new vt(.02,.06,A,4),o);E.position.set(Math.cos(x)*.3,v,Math.sin(x)*.3),E.rotation.z=(b()-.5)*1.2,E.rotation.y=x,E.castShadow=!0,e.add(E);const S=ff[Math.floor(b()*ff.length)],T=Math.cos(x)*(A*.5),w=v+b()*1.5,M=Math.sin(x)*(A*.5),P=1+b()*2,N=new tt({color:S.core,emissive:S.core,emissiveIntensity:.7+b()*.5,transparent:!0,opacity:.55,roughness:.3}),D=new I(new ns(P*.3,1),N);D.position.set(T,w,M),e.add(D);const z=new tt({color:S.leaf,emissive:S.glow,emissiveIntensity:.25+b()*.25,transparent:!0,opacity:.55,roughness:.7}),W=new I(new ns(P*.75,1),z);W.position.set(T+(b()-.5)*.4,w+(b()-.5)*.4,M+(b()-.5)*.4),W.scale.set(1+b()*.4,.65+b()*.5,1+b()*.4),W.castShadow=!0,W.receiveShadow=!0,e.add(W);const H=new tt({color:S.glow,emissive:S.glow,emissiveIntensity:.12,transparent:!0,opacity:.08,depthWrite:!1}),Z=new I(new ns(P*1.2,1),H);if(Z.position.set(T,w,M),e.add(Z),b()<.35){const X=new tt({color:2773040,emissive:1135904,emissiveIntensity:.08,transparent:!0,opacity:.5}),ct=.3+b()*.8,dt=new I(new vt(.008,.003,ct,3),X),bt=b()*A*.4;dt.position.set(Math.cos(x)*(.3+bt),v-ct/2-b()*.3,Math.sin(x)*(.3+bt)),e.add(dt)}}const f=new tt({color:5911840,emissive:3349e3,emissiveIntensity:.06,roughness:.8}),p=Math.floor(b()*3);for(let y=0;y<p;y++){const v=1+b()*n*.4,x=b()*6.28,A=new I(new K(.08+b()*.08,5,3),f);A.scale.set(1.5,.3,1),A.position.set(Math.cos(x)*i*.8,v,Math.sin(x)*i*.8),A.rotation.y=-x,e.add(A)}const g=new tt({color:G.leaf,emissive:G.leafGlow,emissiveIntensity:.06,transparent:!0,opacity:.07,depthWrite:!1}),_=new I(new K(3+b()*2,8,6),g);_.position.y=n*.65,e.add(_);const d=new tt({color:1183752,roughness:.95}),m=new I(new K(i*2.5,6,3),d);return m.scale.set(1,.12,1),m.position.y=.02,e.add(m),e.position.set(s,0,t),Mt.add(e),e}function ZM(s,t){const e=new pe,n=.4+b()*1.2,i=b()*6.28,o=.8+b()*1.5,r=.5+b()*.8,a=new I(dn.mushStem,new tt({color:G.mushStem,roughness:.7,emissive:G.mushGlow,emissiveIntensity:.1}));a.position.y=.3,e.add(a);const c=new tt({color:G.mushStem,emissive:G.mushGlow,emissiveIntensity:.15,roughness:.6}),l=new I(new Te(.09,.012,4,8),c);l.position.y=.42,l.rotation.x=Math.PI/2,e.add(l);const h=new tt({color:G.mushCap,emissive:G.mushGlow,emissiveIntensity:r,roughness:.3,transparent:!0,opacity:.9}),u=new I(dn.mushCap,h);u.scale.set(1,.5,1),u.position.y=.55,u.castShadow=!0,u.receiveShadow=!0,e.add(u);const f=new tt({color:6693546,emissive:G.mushGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,side:Gt});for(let M=0;M<8;M++){const P=M/8*6.28,N=new I(new ye(.35,.08),f);N.position.set(Math.cos(P)*.15,.48,Math.sin(P)*.15),N.rotation.y=-P,N.rotation.x=.1,e.add(N)}for(let M=0;M<4;M++){const P=new j({color:16777215,transparent:!0,opacity:.9}),N=new I(dn.mushDot,P),D=b()*6.28,z=.15+b()*.25;N.position.set(Math.cos(D)*z,.6+b()*.1,Math.sin(D)*z),e.add(N)}const p=new tt({color:15663103,emissive:11197951,emissiveIntensity:.2,transparent:!0,opacity:.6,roughness:0,metalness:.5}),g=2+Math.floor(b()*2);for(let M=0;M<g;M++){const P=new I(new K(.015+b()*.015,4,3),p),N=b()*6.28,D=.1+b()*.2;P.position.set(Math.cos(N)*D,.63+b()*.08,Math.sin(N)*D),e.add(P)}const _=new tt({color:4465322,emissive:G.mushGlow,emissiveIntensity:.15,transparent:!0,opacity:.35});for(let M=0;M<4;M++){const P=b()*6.28,N=.15+b()*.25,D=new I(new vt(.004,.002,N,3),_);D.position.set(Math.cos(P)*.12,.01,Math.sin(P)*.12),D.rotation.z=1.3*(P<3.14?1:-1),D.rotation.y=P,e.add(D)}const d=new tt({color:G.mushCap,emissive:G.mushGlow,emissiveIntensity:r*.6,transparent:!0,opacity:.4}),m=new I(new Te(.38,.01,4,12),d);m.position.y=.49,m.rotation.x=Math.PI/2,e.add(m);const y=new tt({color:G.mushStem,emissive:G.mushGlow,emissiveIntensity:.08,roughness:.7}),v=new I(new K(.08,5,3),y);v.scale.set(1,.5,1),v.position.y=.04,e.add(v);const x=new tt({color:1708040,roughness:.95});for(let M=0;M<3;M++){const P=b()*6.28,N=.1+b()*.12,D=new I(new K(.008+b()*.008,3,3),x);D.position.set(Math.cos(P)*N,.005,Math.sin(P)*N),e.add(D)}const A=new j({color:G.mushGlow,transparent:!0,opacity:.2});for(let M=0;M<4;M++){const P=new I(new K(.006,3,3),A);P.position.set((b()-.5)*.2,.35+b()*.1,(b()-.5)*.2),e.add(P)}const E=new tt({color:11167453,emissive:G.mushGlow,emissiveIntensity:r*.3,roughness:.5}),S=3+Math.floor(b()*3);for(let M=0;M<S;M++){const P=b()*6.28,N=b()*.25,D=new I(new K(.015+b()*.015,3,3),E);D.position.set(Math.cos(P)*N,.58+b()*.06,Math.sin(P)*N),e.add(D)}const T=new tt({color:657416,transparent:!0,opacity:.2,roughness:.95,side:Gt}),w=new I(new Oe(.18,8),T);return w.rotation.x=-Math.PI/2,w.position.y=.005,e.add(w),e.scale.setScalar(n),e.position.set(s,0,t),Mt.add(e),{group:e,capMat:h,phase:i,speed:o,base:r,x:s,z:t}}function $M(s,t){const e=new pe,n=b()*6.28,i=new tt({color:G.crystal,emissive:G.crystalCore,emissiveIntensity:1.5,transparent:!0,opacity:.7,roughness:.1,metalness:.5}),o=new I(dn.crystal,i);o.position.y=.9,o.castShadow=!0,e.add(o);for(let v=0;v<3;v++){const x=new I(dn.crystalSm,i),A=v/3*6.28+b()*.5;x.position.set(Math.cos(A)*.4,.45,Math.sin(A)*.4),x.rotation.z=(b()-.5)*.8,x.castShadow=!0,e.add(x)}const r=new tt({color:1710626,roughness:.9,metalness:.1}),a=3+Math.floor(b()*3);for(let v=0;v<a;v++){const x=b()*6.28,A=.2+b()*.5,E=.08+b()*.12,S=new I(new K(E,4,3),r);S.scale.set(1+b()*.5,.5+b()*.4,1+b()*.5),S.position.set(Math.cos(x)*A,E*.3,Math.sin(x)*A),S.rotation.set(b(),b(),b()),e.add(S)}const c=new j({color:G.crystalCore,transparent:!0,opacity:.5});for(let v=0;v<3;v++){const x=.4+b()*.8,A=new I(new vt(.008,.008,x,3),c);A.position.set((b()-.5)*.15,.5+b()*.7,(b()-.5)*.15),A.rotation.set((b()-.5)*.8,(b()-.5)*.5,(b()-.5)*.8),e.add(A)}const l=new j({color:11206638,transparent:!0,opacity:.6});for(let v=0;v<5;v++){const x=new I(new K(.012,3,3),l);x.position.set((b()-.5)*1,.3+b()*1.5,(b()-.5)*1),e.add(x)}const h=new tt({color:G.crystal,emissive:G.crystalCore,emissiveIntensity:.8,transparent:!0,opacity:.5});for(let v=0;v<4;v++){const x=b()*6.28,A=.3+b()*.3,E=new I(new vt(0,.015,.12+b()*.1,3),h);E.position.set(Math.cos(x)*A,.06+b()*.1,Math.sin(x)*A),E.rotation.z=(b()-.5)*.6,e.add(E)}const u=new tt({color:3364198,emissive:1122867,emissiveIntensity:.05,roughness:.9,side:Gt});for(let v=0;v<2;v++){const x=b()*6.28,A=.2+b()*.3,E=new I(new Oe(.04+b()*.03,5),u);E.rotation.x=-Math.PI/2+b()*.4,E.position.set(Math.cos(x)*A,.05,Math.sin(x)*A),e.add(E)}const f=new j({color:G.crystalCore,transparent:!0,opacity:.2});for(let v=0;v<2;v++){const x=new I(new vt(.003,.003,.6+b()*.4,3),f);x.position.set((b()-.5)*.3,.7+b()*.5,(b()-.5)*.3),x.rotation.set((b()-.5)*1,b(),(b()-.5)*1),e.add(x)}const p=new tt({color:1135940,emissive:1127202,emissiveIntensity:.3,transparent:!0,opacity:.25});for(let v=0;v<4;v++){const x=new I(new K(.02+b()*.02,3,3),p);x.position.set((b()-.5)*.15,.4+b()*.6,(b()-.5)*.15),e.add(x)}const g=new j({color:11206638,transparent:!0,opacity:.06}),_=new I(new Te(.35,.02,4,10),g);_.position.y=.6,_.rotation.x=Math.PI/2+b()*.3,e.add(_);const d=new j({color:G.crystal,transparent:!0,opacity:.06,side:Gt}),m=new I(new Oe(.8,8),d);m.rotation.x=-Math.PI/2,m.position.y=.01,e.add(m),e.position.set(s,0,t),Mt.add(e);const y=new ds(G.crystal,.5,8);return y.position.set(s,1.2,t),Mt.add(y),{group:e,mat:i,phase:n,x:s,z:t,light:y}}function jM(s,t,e,n,i){const o=new Ee,r=[],a=[],c=[],l=n||20,h=new lt(i?i[0]:663568),u=new lt(i?i[1]:1388056),f=new lt(i?i[2]:2777141),p=new lt(i?i[3]:4517461),g=new lt(i?i[4]:7864268),_=new lt(i?i[5]:14548838),d=new lt;for(let T=0;T<l;T++){const w=b()*6.28,M=b()*e,P=Math.cos(w)*M,N=Math.sin(w)*M,D=.25+b()*.65,z=.03+b()*.05,W=(b()-.5)*.2,H=(b()-.5)*.2,Z=(b()-.5)*.12,X=b()<.5?h:u,ct=b(),dt=ct<.4?p:ct<.7?g:_,bt=D*.35,kt=D*.7,$t=W*.3,J=W*.7,rt=H*.3,yt=H*.7;r.push(P-z,.01,N),r.push(P+z,.01,N),r.push(P+$t-z*.9,bt,N+rt),c.push(0,0,.35),a.push(X.r,X.g,X.b,X.r,X.g,X.b),d.copy(X).lerp(f,.4),a.push(d.r,d.g,d.b),r.push(P+z,.01,N),r.push(P+$t+z*.9,bt,N+rt),r.push(P+$t-z*.9,bt,N+rt),c.push(0,.35,.35),a.push(X.r,X.g,X.b),d.copy(X).lerp(f,.4),a.push(d.r,d.g,d.b,d.r,d.g,d.b);const ht=z*.65;r.push(P+$t-z*.9,bt,N+rt),r.push(P+$t+z*.9,bt,N+rt),r.push(P+J-ht,kt,N+yt+Z),c.push(.35,.35,.7),d.copy(X).lerp(f,.4),a.push(d.r,d.g,d.b,d.r,d.g,d.b),d.copy(f).lerp(dt,.3),a.push(d.r,d.g,d.b),r.push(P+$t+z*.9,bt,N+rt),r.push(P+J+ht,kt,N+yt+Z),r.push(P+J-ht,kt,N+yt+Z),c.push(.35,.7,.7),d.copy(X).lerp(f,.4),a.push(d.r,d.g,d.b),d.copy(f).lerp(dt,.3),a.push(d.r,d.g,d.b,d.r,d.g,d.b),r.push(P+J-ht,kt,N+yt+Z),r.push(P+J+ht,kt,N+yt+Z),r.push(P+W+Z*2,D,N+H+Z*1.5),c.push(.7,.7,1),d.copy(f).lerp(dt,.3),a.push(d.r,d.g,d.b,d.r,d.g,d.b),a.push(dt.r,dt.g,dt.b)}const m=new lt(i?i[6]:1725736),y=new lt(i?i[7]:3385941),v=Math.floor(l*.3);for(let T=0;T<v;T++){const w=b()*6.28,M=b()*e*.9,P=Math.cos(w)*M,N=Math.sin(w)*M,D=.02+b()*.03;r.push(P-D,.01,N),r.push(P+D,.01,N),r.push(P,.03+b()*.02,N+D),c.push(0,0,.05),a.push(m.r,m.g,m.b),a.push(m.r,m.g,m.b),a.push(y.r,y.g,y.b)}const x=new Wt(r,3);x.setUsage(pn),o.setAttribute("position",x),o.setAttribute("color",new Wt(a,3)),o.setAttribute("bladeHeight",new Wt(c,1)),o.computeVertexNormals();const A=new Float32Array(r.length);A.set(x.array);const E=new tt({vertexColors:!0,roughness:.7,side:Gt,emissive:i?i[8]:4521830,emissiveIntensity:.08}),S=new I(o,E);return S.position.set(s,0,t),Mt.add(S),{mesh:S,geo:o,cx:s,cz:t,origPos:A}}function KM(s,t,e,n,i,o,r){const a=s.geo.attributes.position.array,c=s.geo.attributes.bladeHeight.array,l=s.origPos,h=s.cx,u=s.cz,f=o-h,p=r-u;for(let g=0,_=c.length;g<_;g++){const d=c[g];if(d<.01)continue;const m=g*3,y=l[m],v=l[m+1],x=l[m+2],A=(Math.sin(t*.7+(h+y)*.05)*.06+Math.sin(t*1.3+(u+x)*.08)*.03)*e*d*d,E=(Math.sin(t*.9+(u+x)*.06)*.04+Math.sin(t*1.7+(h+y)*.04)*.02)*e*d*d;let S=A+n*d,T=E+i*d;const w=y-f,M=x-p,P=w*w+M*M;if(P<1.44){const N=1-Math.sqrt(P)/1.2,D=N*N*.7,z=Math.atan2(w,M);S+=Math.sin(z)*D*d*.15,T+=Math.cos(z)*D*d*.15,a[m+1]=v*(1-D*d)}else a[m+1]=v;a[m]=y+S,a[m+2]=x+T}s.geo.attributes.position.needsUpdate=!0}function JM(s,t){const e=new pe,n=new tt({color:G.fern,emissive:G.fernGlow,emissiveIntensity:.08,roughness:.7,side:Gt}),i=3+Math.floor(b()*2),o=.5+b()*.7,r=new tt({color:1708552,roughness:.95}),a=new I(new K(.06,5,3),r);a.scale.set(1.5,.5,1.5),a.position.y=.02,e.add(a);for(let m=0;m<3;m++){const y=b()*6.28,v=new I(new vt(.003,.002,.08,3),r);v.position.set(Math.cos(y)*.06,.01,Math.sin(y)*.06),v.rotation.z=(y<3.14?1:-1)*1.2,v.rotation.y=y,e.add(v)}for(let m=0;m<i;m++){const y=m/i*6.28+b()*.3,v=new I(new vt(.004,.006,.55,3),new tt({color:1721632,roughness:.8}));v.position.set(Math.cos(y)*.15,.25,Math.sin(y)*.15),v.rotation.y=-y,v.rotation.x=-.6-b()*.4,e.add(v);const x=new I(new ye(.12,.6,1,3),n);x.position.set(Math.cos(y)*.15,.25,Math.sin(y)*.15),x.rotation.y=-y,x.rotation.x=-.6-b()*.4,e.add(x);for(let E=0;E<6;E++){const S=new I(new ye(.07,.06,1,1),n),T=.06+E*.08,w=E%2===0?1:-1;S.position.set(Math.cos(y)*(.15+.06),T,Math.sin(y)*(.15+.06*w)),S.rotation.y=-y,S.rotation.x=-.8,S.rotation.z=w*.5,e.add(S)}const A=new tt({color:8939042,emissive:4469521,emissiveIntensity:.1});for(let E=0;E<3;E++){const S=new I(new K(.008,3,3),A),T=.12+E*.12;S.position.set(Math.cos(y)*(.15+.02),T-.01,Math.sin(y)*(.15+.02)),e.add(S)}}const c=new tt({color:G.fernGlow,emissive:G.fernGlow,emissiveIntensity:.3}),l=new I(new K(.04,4,3),c);l.position.y=.35,e.add(l);const h=new I(new vt(.006,.003,.06,3),c);h.position.set(.02,.37,0),h.rotation.z=-.8,e.add(h);const u=new tt({color:15663103,emissive:8960989,emissiveIntensity:.1,transparent:!0,opacity:.5,roughness:0,metalness:.5});for(let m=0;m<3;m++){const y=b()*6.28,v=b()*.2,x=new I(new K(.006+b()*.005,3,3),u);x.position.set(Math.cos(y)*v,.12+b()*.2,Math.sin(y)*v),e.add(x)}const f=new tt({color:3811856,roughness:.9,side:Gt,transparent:!0,opacity:.6}),p=new I(new ye(.1,.4,1,2),f),g=b()*6.28;p.position.set(Math.cos(g)*.12,.05,Math.sin(g)*.12),p.rotation.x=-1.3,p.rotation.y=g,e.add(p);const _=new j({color:2768928,transparent:!0,opacity:.3});for(let m=0;m<4;m++){const y=new I(new vt(.001,.001,.015,3),_);y.position.set((b()-.5)*.08,.08+b()*.15,(b()-.5)*.08),y.rotation.z=(b()-.5)*1.5,e.add(y)}const d=new tt({color:1708552,roughness:.95});for(let m=0;m<3;m++){const y=new I(new K(.006,3,3),d);y.position.set((b()-.5)*.1,.005,(b()-.5)*.1),e.add(y)}return e.scale.setScalar(o),e.position.set(s,0,t),Mt.add(e),{group:e,phase:b()*6.28}}function QM(s,t){const e=new pe,n=.25+b()*.4,i=new tt({color:G.flowerStem,roughness:.8}),o=new I(new vt(.01,.015,n,4),i);o.position.y=n/2,e.add(o);for(let T=0;T<2;T++){const w=new I(new Jn(.004,.012,3),i);w.position.set(.012,n*.25+T*n*.25,0),w.rotation.z=-1.2,e.add(w)}const r=new tt({color:G.fern,roughness:.7,side:Gt}),a=new I(new ye(.06,.04),r);a.position.set(.03,n*.3,0),a.rotation.z=-.5,e.add(a);const c=new I(new ye(.05,.035),r);c.position.set(-.025,n*.5,.01),c.rotation.z=.6,e.add(c);const l=new tt({color:1728560,roughness:.7,side:Gt});for(let T=0;T<5;T++){const w=T/5*6.28+.3,M=new I(new ye(.025,.02),l);M.position.set(Math.cos(w)*.025,n-.005,Math.sin(w)*.025),M.rotation.x=-1.2,M.rotation.y=-w,e.add(M)}const h=new tt({color:G.flower,emissive:G.flowerGlow,emissiveIntensity:.4+b()*.4,transparent:!0,opacity:.85,side:Gt});for(let T=0;T<6;T++){const w=T/6*6.28,M=new I(new ye(.05,.04),h);M.position.set(Math.cos(w)*.03,n+.01,Math.sin(w)*.03),M.rotation.x=-.8,M.rotation.y=-w,e.add(M)}const u=new tt({color:16777215,emissive:G.flowerGlow,emissiveIntensity:1.2}),f=new I(new K(.02,4,3),u);f.position.y=n+.02,e.add(f);const p=new j({color:16777130,transparent:!0,opacity:.7}),g=new j({color:16772676});for(let T=0;T<3;T++){const w=T/3*6.28+.5,M=new I(new vt(.002,.002,.025,3),p);M.position.set(Math.cos(w)*.012,n+.03,Math.sin(w)*.012),e.add(M);const P=new I(new K(.005,3,3),g);P.position.set(Math.cos(w)*.012,n+.045,Math.sin(w)*.012),e.add(P)}const _=new j({color:16777164,transparent:!0,opacity:.3});for(let T=0;T<2;T++){const w=new I(new K(.006,3,3),_);w.position.set((b()-.5)*.04,n+.06+b()*.04,(b()-.5)*.04),e.add(w)}const d=new tt({color:16772778,emissive:16768324,emissiveIntensity:.2,transparent:!0,opacity:.5,roughness:0,metalness:.4}),m=new I(new K(.006,3,3),d);m.position.set(.005,n+.005,.005),e.add(m);const y=new j({color:15662984}),v=new I(new vt(.002,.002,.03,3),y);v.position.y=n+.035,e.add(v);const x=new I(new K(.005,3,3),y);x.position.y=n+.055,e.add(x);const A=new tt({color:1725728,roughness:.7}),E=new I(new vt(.015,.02,.02,5),A);E.position.y=n-.01,e.add(E);const S=new j({color:16777215,transparent:!0,opacity:.35});for(let T=0;T<4;T++){const w=T/4*6.28+.3,M=new I(new K(.004,3,3),S);M.position.set(Math.cos(w)*.045,n+.005,Math.sin(w)*.045),e.add(M)}return e.position.set(s,0,t),Mt.add(e),{group:e,petalMat:h,phase:b()*6.28,baseH:n}}function ty(s,t){const e=new pe,n=new tt({color:G.reed,emissive:G.reedTip,emissiveIntensity:.05,roughness:.7}),i=new tt({color:G.reedTip,emissive:G.reedTip,emissiveIntensity:.15}),o=new tt({color:1709328,roughness:.95}),r=new I(new K(.08,5,3),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=3+Math.floor(b()*4),c=new tt({color:G.reed,roughness:.7,side:Gt});for(let p=0;p<a;p++){const g=.6+b()*1,_=(b()-.5)*.2,d=(b()-.5)*.2,m=new I(new vt(.008,.015,g,4),n);m.position.set(_,g/2,d),e.add(m);const y=2+Math.floor(b()*2),v=new tt({color:2771488,roughness:.7});for(let E=0;E<y;E++){const S=g*.2+E*g*.25,T=new I(new Te(.012,.004,4,6),v);T.position.set(_,S,d),T.rotation.x=Math.PI/2,e.add(T)}if(b()<.7){const E=.1+b()*.15,S=b()*6.28,T=new I(new ye(.02,E),c);T.position.set(_+Math.cos(S)*.02,g*.4,d+Math.sin(S)*.02),T.rotation.y=-S,T.rotation.x=-.5-b()*.4,e.add(T)}const x=new I(new K(.025,4,3),i);x.scale.set(.8,1.5,.8),x.position.set(_,g+.02,d),e.add(x);const A=new j({color:G.reedTip,transparent:!0,opacity:.4});for(let E=0;E<3;E++){const S=E/3*6.28+b()*.5,T=new I(new vt(.002,.001,.04,3),A);T.position.set(_+Math.cos(S)*.015,g+.05,d+Math.sin(S)*.015),T.rotation.z=(b()-.5)*.4,e.add(T)}}e.position.set(s,0,t),Mt.add(e);const l=new tt({color:4864536,roughness:.9,side:Gt,transparent:!0,opacity:.5});for(let p=0;p<2;p++){b()*6.28;const g=(b()-.5)*.15,_=new I(new ye(.025,.02),l);_.position.set(g,.2+p*.25,(b()-.5)*.1),_.rotation.set(b()*.5,b(),b()*.5),e.add(_)}const h=new j({color:15654348,transparent:!0,opacity:.25});for(let p=0;p<3;p++){const g=new I(new K(.005,3,3),h);g.position.set((b()-.5)*.15,.8+b()*.6,(b()-.5)*.15),e.add(g)}const u=new tt({color:2241312,roughness:.9,transparent:!0,opacity:.2}),f=new I(new Te(.1,.008,4,8),u);return f.rotation.x=Math.PI/2,f.position.y=.03,e.add(f),{group:e,phase:b()*6.28,swayAmp:.03+b()*.04}}let on=null;const Gs=[],qe=new xe,_a=new lt,Ed=new lt(G.dandSeed);function ey(s){const t=new j({color:16777215,transparent:!0,opacity:1});on=new ro(dn.dandSeed,t,s),on.instanceMatrix.setUsage(pn),on.instanceColor=new Pi(new Float32Array(s*3),3),on.instanceColor.setUsage(pn),qe.scale.setScalar(0),qe.updateMatrix();for(let e=0;e<s;e++)on.setMatrixAt(e,qe.matrix),_a.copy(Ed),on.setColorAt(e,_a),Gs.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,drift:0});on.count=s,Mt.add(on)}function Ad(s,t,e){let n=null;for(let o=0;o<Gs.length;o++)if(!Gs[o].active){n=Gs[o];break}if(!n)return;n.x=s+(Math.random()-.5)*.1,n.y=t,n.z=e+(Math.random()-.5)*.1;const i=Math.random()*6.28;n.vx=Math.cos(i)*.5+Math.random()*.3,n.vy=.6+Math.random()*.8,n.vz=Math.sin(i)*.5,n.life=4+Math.random()*5,n.max=n.life,n.active=!0,n.drift=Math.random()*6.28}let Rd=0,Cd=0,Pd=0;function ny(s,t,e){Rd=s,Cd=t,Pd=e}function iy(s,t){let e=!1;for(let n=0;n<Gs.length;n++){const i=Gs[n];if(!i.active){qe.position.set(0,-100,0),qe.scale.setScalar(0),qe.updateMatrix(),on.setMatrixAt(n,qe.matrix);continue}if(i.life-=s,i.life<=0){i.active=!1,qe.position.set(0,-100,0),qe.scale.setScalar(0),qe.updateMatrix(),on.setMatrixAt(n,qe.matrix);continue}i.drift+=(Math.random()-.5)*1.5*s,i.vx+=Math.sin(i.drift)*.3*s,i.vz+=Math.cos(i.drift)*.2*s,i.vx+=Rd*.5*s,i.vz+=Cd*.5*s,i.vy+=(.15+Pd*.1-i.vy)*s*.5,i.vx*=.998,i.vy*=.998,i.vz*=.998,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s;const r=i.life/i.max*.7*(.6+Math.sin(t*2+n)*.4),a=.8+Math.sin(t*3+n*.5)*.3;qe.position.set(i.x,i.y,i.z),qe.scale.setScalar(a),qe.updateMatrix(),on.setMatrixAt(n,qe.matrix),_a.copy(Ed).multiplyScalar(r),on.setColorAt(n,_a),e=!0}on.instanceMatrix.needsUpdate=!0,e&&(on.instanceColor.needsUpdate=!0)}function sy(s,t){const e=new pe,n=.35+b()*.45,i=new tt({color:2777128,roughness:.7,side:Gt}),o=3+Math.floor(b()*2);for(let v=0;v<o;v++){const x=v/o*6.28+b()*.3,A=new I(new ye(.08,.035),i);A.position.set(Math.cos(x)*.05,.02,Math.sin(x)*.05),A.rotation.x=-1.4,A.rotation.y=-x,e.add(A)}const r=new tt({color:G.dandStem,roughness:.8}),a=new I(new vt(.008,.012,n,4),r);a.position.y=n/2,e.add(a);const c=new j({color:14540236,transparent:!0,opacity:.3});for(let v=0;v<4;v++){const x=n*.2+v*n*.18,A=new I(new vt(.002,.001,.02,3),c);A.position.set(.01,x,0),A.rotation.z=-.8,e.add(A)}const l=new tt({color:G.fern,roughness:.7,side:Gt}),h=new I(new ye(.07,.03),l);h.position.set(.03,n*.15,0),h.rotation.z=-.4,e.add(h);const u=new tt({color:G.dandHead,emissive:G.dandSeedGlow,emissiveIntensity:.2,transparent:!0,opacity:.85}),f=new I(new K(.07,6,5),u);f.position.y=n+.05,e.add(f);const p=new tt({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.5,roughness:0,metalness:.5}),g=new I(new K(.012,4,3),p);g.position.set(.04,n+.07,.03),e.add(g);const _=new j({color:G.dandSeed,transparent:!0,opacity:.7});for(let v=0;v<8;v++){const x=v/8*6.28+b()*.2,A=new I(new Jn(.015,.05,3),_);A.position.set(Math.cos(x)*.06,n+.05+b()*.04,Math.sin(x)*.06),A.rotation.x=(b()-.5)*.6,A.rotation.z=(b()-.5)*.6,e.add(A);const E=new j({color:16777215,transparent:!0,opacity:.3}),S=new I(new vt(.001,.001,.03,3),E);S.position.set(Math.cos(x)*.08,n+.08,Math.sin(x)*.08),S.rotation.set((b()-.5)*.5,0,(b()-.5)*.5),e.add(S);const T=new j({color:15658717,transparent:!0,opacity:.15});for(let w=0;w<2;w++){const M=x+(w-.5)*.5,P=new I(new vt(8e-4,8e-4,.025,3),T);P.position.set(Math.cos(M)*.075,n+.09,Math.sin(M)*.075),P.rotation.set((b()-.5)*.8,0,(b()-.5)*.8),e.add(P)}}const d=new tt({color:3811856,roughness:.9});for(let v=0;v<4;v++){const x=v/4*6.28+b()*.5,A=new I(new K(.005,3,3),d);A.scale.set(.6,1.5,.6),A.position.set(Math.cos(x)*.04,n+.04,Math.sin(x)*.04),e.add(A)}const m=new j({color:1716240,transparent:!0,opacity:.15});for(let v=0;v<3;v++){const x=v/3*6.28,A=new I(new vt(.001,.001,n*.7,3),m);A.position.set(Math.cos(x)*.01,n*.35,Math.sin(x)*.01),e.add(A)}const y=new j({color:13426107,transparent:!0,opacity:.2});for(let v=0;v<5;v++){const x=n*.1+b()*n*.7,A=b()*6.28,E=new I(new vt(8e-4,8e-4,.012,3),y);E.position.set(Math.cos(A)*.012,x,Math.sin(A)*.012),E.rotation.z=A<3.14?-.8:.8,E.rotation.y=A,e.add(E)}return e.position.set(s,0,t),Mt.add(e),{group:e,headMat:u,x:s,z:t,h:n,dispersed:!1,phase:b()*6.28,seedCount:8,regrowTimer:0}}function oy(s,t,e,n){for(let i=0;i<s.length;i++){const o=s[i];if(o.dispersed){if(o.regrowTimer-=t,o.regrowTimer<=0){o.dispersed=!1;for(let r=2;r<o.group.children.length;r++)o.group.children[r].visible=!0}o.group.rotation.z=Math.sin(e*.9+o.phase)*.02}else{const r=o.x-n.x,a=o.z-n.z;if(r*r+a*a<1.2){o.dispersed=!0;for(let c=0;c<8;c++)Ad(o.x,o.h+.05,o.z);for(let c=2;c<o.group.children.length;c++)o.group.children[c].visible=!1;o.regrowTimer=15+Math.random()*10}else o.group.rotation.z=Math.sin(e*.9+o.phase)*.04,o.headMat.emissiveIntensity=.15+Math.sin(e*1.2+o.phase)*.1}}}function ry(s,t,e){const n=new pe,i=new tt({color:G.jellyBell,emissive:G.jellyGlow,emissiveIntensity:.8,transparent:!0,opacity:.5,roughness:.2,metalness:.1,side:Gt}),o=new I(new K(.5,8,6,0,6.28,0,Math.PI/2),i);o.scale.set(1,.6,1),o.position.y=0,n.add(o);const r=new tt({color:G.jellyBell,emissive:G.jellyGlow,emissiveIntensity:1,transparent:!0,opacity:.6}),a=new I(new Te(.48,.025,5,12),r);a.rotation.x=Math.PI/2,a.position.y=-.02,n.add(a);const c=new I(new K(.2,6,4),new j({color:G.jellyGlow,transparent:!0,opacity:.7}));c.position.y=-.05,n.add(c);const l=new j({color:12312063,transparent:!0,opacity:.3});for(let y=-1;y<=1;y+=2){const v=new I(new K(.06,4,3),l);v.scale.set(.6,1.5,.6),v.position.set(y*.08,-.03,0),n.add(v)}const h=new j({color:15663103,transparent:!0,opacity:.7});for(let y=0;y<5;y++){const v=b()*6.28,x=b()*.8,A=new I(new K(.02,3,3),h);A.position.set(Math.cos(v)*x*.35,.1-x*.15,Math.sin(v)*x*.35),n.add(A)}const u=new tt({color:G.jellyTent,emissive:G.jellyGlow,emissiveIntensity:.4,transparent:!0,opacity:.4}),f=new j({color:G.jellyGlow,transparent:!0,opacity:.6});for(let y=0;y<6;y++){const v=y/6*6.28,x=.4+b()*.6,A=new I(new vt(.015,.008,x,3),u);A.position.set(Math.cos(v)*.25,-x/2-.05,Math.sin(v)*.25),n.add(A);const E=new I(new K(.012,3,3),f);E.position.set(Math.cos(v)*.25,-x-.06,Math.sin(v)*.25),n.add(E)}const p=new j({color:G.jellyGlow,transparent:!0,opacity:.12});for(let y=0;y<8;y++){const v=y/8*6.28,x=new I(new vt(.002,.002,.4,3),p);x.position.set(Math.cos(v)*.2,.05,Math.sin(v)*.2),x.rotation.z=Math.PI/2-.3,x.rotation.y=-v,n.add(x)}const g=new tt({color:G.jellyBell,emissive:G.jellyGlow,emissiveIntensity:.6,transparent:!0,opacity:.4});for(let y=0;y<10;y++){const v=y/10*6.28,x=new I(new K(.02,3,3),g);x.scale.set(1,.5,.8),x.position.set(Math.cos(v)*.46,-.04,Math.sin(v)*.46),n.add(x)}const _=new tt({color:G.jellyTent,emissive:G.jellyGlow,emissiveIntensity:.5,transparent:!0,opacity:.35}),d=new I(new vt(.02,.01,.35,4),_);d.position.y=-.2,n.add(d);const m=new j({color:14548991,transparent:!0,opacity:.4});for(let y=0;y<3;y++){const v=y/3*6.28,x=new I(new K(.008,3,3),m);x.position.set(Math.cos(v)*.25,-.55-b()*.3,Math.sin(v)*.25),n.add(x)}return n.position.set(s,t,e),Mt.add(n),{group:n,bellMat:i,phase:b()*6.28,driftAng:b()*6.28,homeX:s,homeZ:e,floatY:t,wobble:.5+b()*.5,_init:!0,_state:"drift",_stT:20+Math.random()*30,_migrateAng:0,_pulseSync:0}}function ay(s,t){const e=new pe,n=new tt({color:G.puffBody,emissive:G.puffGlow,emissiveIntensity:.3,roughness:.8}),i=new I(new K(.3,8,6),n);i.position.y=.35,e.add(i);const o=new tt({color:16773344,emissive:G.puffGlow,emissiveIntensity:.15,roughness:.9}),r=new I(new K(.18,6,4),o);r.scale.set(.7,.9,.3),r.position.set(0,.32,.2),e.add(r);const a=new I(new K(.22,7,5),n);a.position.y=.65,e.add(a);const c=[];for(let A=-1;A<=1;A+=2){const E=new I(new Jn(.06,.15,4),n);E.position.set(A*.13,.85,0),E.rotation.z=A*.3,e.add(E),c.push({mesh:E,side:A,baseRotZ:A*.3});const S=new I(new Jn(.03,.08,4),new tt({color:G.puffCheek,emissive:G.puffCheek,emissiveIntensity:.2}));S.position.set(A*.13,.84,.01),S.rotation.z=A*.3,e.add(S),c.push({mesh:S,side:A,baseRotZ:A*.3})}const l=new j({color:G.puffEye}),h=[];for(let A=-1;A<=1;A+=2){const E=new I(new K(.035,4,4),l);E.position.set(A*.09,.68,.18),e.add(E),h.push(E);const S=new j({color:16777215}),T=new I(new K(.012,3,3),S);T.position.set(A*.09+A*.015,.695,.2),e.add(T),h.push(T)}const u=new j({color:4469555}),f=new I(new K(.015,3,3),u);f.position.set(0,.63,.22),e.add(f);const p=new tt({color:G.puffCheek,emissive:G.puffCheek,emissiveIntensity:.3});for(let A=-1;A<=1;A+=2){const E=new I(new K(.04,4,3),p);E.position.set(A*.15,.61,.15),e.add(E)}const g=new j({color:15654348,transparent:!0,opacity:.5});for(let A=-1;A<=1;A+=2)for(let E=0;E<2;E++){const S=new I(new vt(.002,.002,.06,3),g);S.position.set(A*.12,.62-E*.03,.2),S.rotation.z=A*.7+E*A*.2,S.rotation.x=-.1,e.add(S)}for(let A=-1;A<=1;A+=2){const E=new I(new K(.07,4,3),n);E.position.set(A*.12,.07,.05),E.scale.set(1,.5,1.3),e.add(E);const S=new tt({color:16755370,emissive:16746632,emissiveIntensity:.1});for(let T=0;T<3;T++){const w=T/3*6.28,M=new I(new K(.012,3,3),S);M.position.set(A*.12+Math.cos(w)*.03,.03,.05+Math.sin(w)*.03),e.add(M)}}const _=new tt({color:16777215,emissive:G.puffGlow,emissiveIntensity:.4,roughness:.9}),d=new I(new K(.06,5,4),_);d.position.set(0,.38,-.28),e.add(d);const m=new tt({color:G.puffBody,emissive:G.puffGlow,emissiveIntensity:.2,roughness:1});for(let A=0;A<6;A++){const E=b()*6.28,S=b()*1.2,T=new I(new K(.01,3,3),m);T.position.set(Math.cos(E)*.28,.25+S*.2,Math.sin(E)*.28),e.add(T)}const y=new j({color:G.puffBody});for(let A=-1;A<=1;A+=2){const E=new I(new vt(.003,.003,.04,3),y);E.position.set(A*.09,.72,.17),E.rotation.z=A*.3,e.add(E)}const v=new j({color:5583684,transparent:!0,opacity:.5}),x=new I(new vt(.002,.002,.03,3),v);return x.position.set(0,.59,.22),x.rotation.z=Math.PI/2,e.add(x),e.position.set(s,0,t),Mt.add(e),{group:e,ears:c,eyes:h,tail:d,phase:b()*6.28,wanderAng:b()*6.28,speed:.6+b()*.8,hopTimer:0,hopPhase:b()*6.28,homeX:s,homeZ:t,state:"idle",idleTimer:b()*3,_init:!0,_followT:0,_scaredT:0,_huddleTarget:-1,_baseY:0,_lastTX:s,_lastTZ:t,_blinkTimer:2+Math.random()*4,_blinkState:0}}function cy(s,t){const e=new pe,n=new tt({color:G.deerBody,emissive:G.deerGlow,emissiveIntensity:.5,transparent:!0,opacity:.7,roughness:.3}),i=new I(new K(.4,7,5),n);i.scale.set(1,.8,1.5),i.position.y=.9,e.add(i);const o=new tt({color:13431039,emissive:G.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.5}),r=new I(new K(.15,5,4),o);r.scale.set(.8,.6,.5),r.position.set(0,.78,.25),e.add(r);const a=new pe;a.position.set(0,1.15,.3);const c=new I(new vt(.08,.12,.4,5),n);c.position.set(0,.1,.08),c.rotation.x=-.4,a.add(c);const l=new I(new K(.14,6,5),n);l.position.set(0,.22,.2),a.add(l);const h=new I(new K(.07,4,3),n);h.scale.set(1,.7,1.4),h.position.set(0,.17,.35),a.add(h);const u=new j({color:2245717}),f=new I(new K(.02,3,3),u);f.position.set(0,.17,.43),a.add(f);const p=new j({color:G.deerEye});for(let M=-1;M<=1;M+=2){const P=new I(new K(.025,4,3),p);P.position.set(M*.09,.25,.28),a.add(P);const N=new I(new K(.008,3,3),new j({color:16777215}));N.position.set(M*.085,.26,.29),a.add(N);const D=new j({color:G.deerBody,transparent:!0,opacity:.5}),z=new I(new vt(.002,.002,.03,3),D);z.position.set(M*.1,.27,.28),z.rotation.z=M*.6,a.add(z)}for(let M=-1;M<=1;M+=2){const P=new I(new Jn(.04,.14,4),n);P.position.set(M*.1,.37,.15),P.rotation.z=M*.4,a.add(P)}const g=new tt({color:G.deerAntler,emissive:G.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.8});for(let M=-1;M<=1;M+=2){const P=new I(new vt(.015,.02,.25,3),g);P.position.set(M*.08,.42,.12),P.rotation.z=M*.5,a.add(P);const N=new I(new vt(.01,.015,.15,3),g);N.position.set(M*.15,.55,.1),N.rotation.z=M*.8,a.add(N);const D=new I(new vt(.008,.012,.1,3),g);D.position.set(M*.11,.5,.16),D.rotation.z=M*.3,D.rotation.x=-.5,a.add(D);const z=new I(new K(.012,3,3),new j({color:G.deerGlow,transparent:!0,opacity:.8}));z.position.set(M*.18,.61,.09),a.add(z)}const _=new tt({color:G.deerBody,emissive:G.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),d=new I(new vt(.01,.02,.1,3),_);d.position.set(0,.11,.28),d.rotation.x=.3,a.add(d);const m=new j({color:1122850});for(let M=-1;M<=1;M+=2){const P=new I(new K(.006,3,3),m);P.position.set(M*.02,.16,.42),a.add(P)}e.add(a);const y=[{x:-.15,z:.3,label:"FL"},{x:.15,z:.3,label:"FR"},{x:-.15,z:-.3,label:"BL"},{x:.15,z:-.3,label:"BR"}],v=new tt({color:6715272,emissive:G.deerGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),x=[];for(let M=0;M<4;M++){const P=y[M],N=new pe;N.position.set(P.x,.65,P.z);const D=new I(new vt(.025,.035,.35,4),n);D.position.y=-.175,N.add(D);const z=new pe;z.position.set(0,-.35,0);const W=new I(new vt(.02,.03,.3,4),n);W.position.y=-.15,z.add(W);const H=new I(new vt(.04,.032,.04,4),v);H.position.y=-.3,z.add(H);const Z=new tt({color:14544639,emissive:G.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),X=new I(new K(.025,3,3),Z);X.scale.set(1.3,.5,1.3),X.position.y=-.25,z.add(X),N.add(z),e.add(N),x.push({upper:N,lower:z,isFront:M<2,side:P.x<0?-1:1})}const A=new pe;A.position.set(0,1.1,-.55);const E=new I(new Jn(.05,.15,4),new tt({color:16777215,emissive:G.deerGlow,emissiveIntensity:1,transparent:!0,opacity:.8}));A.add(E),e.add(A);const S=new j({color:13434862,transparent:!0,opacity:.3});for(let M=0;M<4;M++){const P=new I(new K(.02,3,3),S);P.position.set((b()-.5)*.25,.8+b()*.3,(b()-.5)*.4),e.add(P)}const T=new j({color:G.deerBody,transparent:!0,opacity:.15});for(let M=0;M<3;M++){const P=new I(new vt(.002,.002,.2,3),T);P.position.set(.3,.85-M*.06,0),P.rotation.z=Math.PI/2+.3,e.add(P)}const w=new tt({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.4,roughness:0,metalness:.5});for(let M=0;M<3;M++){const P=new I(new K(.008,3,3),w);P.position.set((b()-.5)*.3,.9+b()*.3,(b()-.5)*.35),e.add(P)}return e.position.set(s,0,t),Mt.add(e),{group:e,mat:n,phase:b()*6.28,wanderAng:b()*6.28,speed:.6+b()*.4,walkTimer:0,legCycle:0,homeX:s,homeZ:t,state:"walk",pauseTimer:0,neckPivot:a,legPivots:x,tailPivot:A,fleeTimer:0,headLook:0,headBob:0,_init:!0,_stT:0,_drinkTgt:null,_zigTimer:0,_zigDir:1,_baseY:0,_lastTX:s,_lastTZ:t}}function ly(s,t,e){const n=new pe,i=new tt({color:G.mothBody,emissive:G.mothGlow,emissiveIntensity:.3,roughness:.7}),o=new I(new vt(.04,.05,.3,5),i);o.rotation.x=Math.PI/2,n.add(o);const r=new tt({color:G.mothBody,emissive:G.mothGlow,emissiveIntensity:.5,roughness:.6});for(let d=0;d<3;d++){const m=new I(new Te(.045,.006,4,8),r);m.position.z=-.05+d*.06,m.rotation.x=0,n.add(m)}const a=new I(new K(.05,5,4),i);a.position.z=.18,n.add(a);const c=new tt({color:1122867,roughness:.2,metalness:.4});for(let d=-1;d<=1;d+=2){const m=new I(new K(.018,4,3),c);m.position.set(d*.03,.01,.21),n.add(m)}for(let d=-1;d<=1;d+=2){const m=new I(new vt(.005,.005,.15,3),i);m.position.set(d*.03,.03,.22),m.rotation.x=-.6,m.rotation.z=d*.4,n.add(m);const y=new j({color:G.mothGlow,transparent:!0,opacity:.7}),v=new I(new K(.015,3,3),y);v.scale.set(2,.5,1),v.position.set(d*.05,.12,.28),n.add(v)}const l=new tt({color:G.mothWing,emissive:G.mothGlow,emissiveIntensity:.8,transparent:!0,opacity:.6,side:Gt,roughness:.4});n._wingPivots=[];for(let d=-1;d<=1;d+=2){const m=new pe;m.position.set(d*.04,0,.02);const y=new I(new K(.2,6,4),l);y.scale.set(1.8,.08,1.2),y.position.set(d*.18,0,.02),m.add(y);const v=new I(new K(.12,5,3),l);v.scale.set(1.5,.06,1),v.position.set(d*.12,0,-.1),m.add(v);const x=new tt({color:G.mothWing,emissive:G.mothGlow,emissiveIntensity:.6,transparent:!0,opacity:.45,side:Gt}),A=new I(new ye(.03,.12),x);A.position.set(d*.1,0,-.18),A.rotation.y=d*.2,m.add(A);const E=new j({color:G.mothSpot,transparent:!0,opacity:.9}),S=new I(new K(.03,4,3),E);S.position.set(d*.2,.02,.03),m.add(S);const T=new I(new K(.018,3,3),E);T.position.set(d*.1,.02,-.08),m.add(T);const w=new j({color:G.mothGlow,transparent:!0,opacity:.25});for(let M=0;M<2;M++){const P=new I(new vt(.002,.002,.2,3),w);P.position.set(d*.15,.01,-.02+M*.06),P.rotation.z=Math.PI/2+d*(.15+M*.15),m.add(P)}n.add(m),n._wingPivots.push({pivot:m,side:d})}const h=new j({color:G.mothGlow,transparent:!0,opacity:.25});for(let d=0;d<3;d++){const m=new I(new K(.008,3,3),h);m.position.set((b()-.5)*.04,0,-.15-d*.05),n.add(m)}const u=new j({color:4473907,transparent:!0,opacity:.5}),f=new I(new Te(.015,.003,4,8,Math.PI*1.5),u);f.position.set(0,-.02,.2),f.rotation.x=.4,n.add(f);const p=new tt({color:G.mothBody,emissive:G.mothGlow,emissiveIntensity:.4,roughness:1});for(let d=0;d<5;d++){const m=b()*6.28,y=new I(new K(.008,3,3),p);y.position.set(Math.cos(m)*.04,Math.sin(m)*.04,b()*.15-.05),n.add(y)}const g=new j({color:G.mothBody,transparent:!0,opacity:.4});for(let d=-1;d<=1;d+=2)for(let m=0;m<3;m++){const y=new I(new vt(.002,.002,.06,3),g);y.position.set(d*.04,-.03,-.05+m*.06),y.rotation.z=d*.8,y.rotation.x=-.3,n.add(y)}const _=new j({color:G.mothGlow,transparent:!0,opacity:.35});for(let d=-1;d<=1;d+=2)for(let m=0;m<5;m++){const y=m/5*Math.PI-Math.PI/2,v=new I(new K(.006,3,3),_);v.position.set(d*(.3+Math.cos(y)*.05),Math.sin(y)*.02,.02+m*.04),n.add(v)}return n.position.set(s,t,e),Mt.add(n),{group:n,wingMat:l,phase:b()*6.28,orbitAng:b()*6.28,orbitR:2+b()*4,centerX:s,centerZ:e,floatY:t,flapSpeed:6+b()*4,_init:!0,_state:"patrol",_stT:0,_attractTarget:null,_restTree:null}}function hy(s,t,e){const n=new pe,i=new j({color:G.wispCore}),o=new I(new K(.08,6,4),i);n.add(o);const r=new j({color:16777215,transparent:!0,opacity:.7,wireframe:!0}),a=new I(new ns(.06,0),r);n.add(a);const c=new j({color:G.wispGlow,transparent:!0,opacity:.5}),l=new I(new K(.18,6,4),c);n.add(l);const h=new j({color:G.wispGlow,transparent:!0,opacity:.25}),u=new I(new Te(.22,.008,4,12),h);u.rotation.x=Math.PI/2,n.add(u);const f=new j({color:G.wispTrail,transparent:!0,opacity:.15}),p=new I(new K(.35,5,4),f);n.add(p);const g=new j({color:16777215,transparent:!0,opacity:.8}),_=new I(new K(.02,3,3),g);_.position.set(.15,0,0),n.add(_);const d=[];for(let S=0;S<3;S++){const T=new j({color:G.wispCore,transparent:!0,opacity:.35}),w=new I(new K(.01,3,3),T);w.position.set((b()-.5)*.1,-.1-S*.08,(b()-.5)*.1),n.add(w),d.push(w)}const m=new j({color:G.wispGlow,transparent:!0,opacity:.18}),y=[];for(let S=0;S<3;S++){const T=S/3*6.28+b()*.5,w=.15+b()*.1,M=new I(new vt(.003,.001,w,3),m);M.position.set(Math.cos(T)*.1,b()*.08,Math.sin(T)*.1),M.rotation.z=Math.PI/3*(T<3.14?1:-1),M.rotation.y=T,n.add(M),y.push({mesh:M,baseAng:T})}const v=new j({color:G.wispGlow,transparent:!0,opacity:.12}),x=new I(new Te(.26,.005,4,10),v);x.rotation.x=1.2,x.rotation.z=.8,n.add(x);const A=new j({color:16777215,transparent:!0,opacity:.5});for(let S=0;S<4;S++){const T=b()*6.28,w=b()*.8,M=new I(new K(.006,3,3),A);M.position.set(Math.cos(T)*.06,Math.sin(w)*.06,Math.sin(T)*.06),n.add(M)}const E=new j({color:G.wispCore,transparent:!0,opacity:.2});for(let S=0;S<4;S++){const T=new I(new K(.004,3,3),E);T.position.set(.03+b()*.04,-.05-S*.04,b()*.04),n.add(T)}return n.scale.setScalar(.5),n.position.set(s,t,e),Mt.add(n),{group:n,glowMat:c,hazeMat:f,embers:d,tendrils:y,plasmaMat:m,facet:a,halo:u,halo2:x,phase:b()*6.28,targetX:s,targetY:t,targetZ:e,velX:0,velY:0,velZ:0,scatter:0}}function uy(s,t){const e=new pe,n=Ul,i=8+Math.floor(b()*5),o=new tt({color:G.fairyMush,emissive:G.fairyGlow,emissiveIntensity:.2,roughness:.5}),r=new tt({color:G.mushStem,roughness:.7,emissive:G.fairyGlow,emissiveIntensity:.05});for(let A=0;A<i;A++){const E=A/i*6.28+b()*.15,S=n+b()*.3-.15,T=.15+b()*.2,w=new I(dn.mushStem,r);w.scale.setScalar(T),w.position.set(Math.cos(E)*S,T*.3,Math.sin(E)*S),e.add(w);const M=new I(dn.mushCap,o);M.scale.set(T,T*.4,T),M.position.set(Math.cos(E)*S,T*.55,Math.sin(E)*S),e.add(M);const P=new j({color:16777215,transparent:!0,opacity:.7}),N=new I(new K(T*.08,3,3),P);N.position.set(Math.cos(E)*S,T*.6,Math.sin(E)*S),e.add(N)}const a=new tt({color:8934792,emissive:G.fairyGlow,emissiveIntensity:.1,roughness:.6});for(let A=0;A<5;A++){const E=b()*6.28,S=n+b()*.6-.3,T=.06+b()*.06,w=new I(dn.mushCap,a);w.scale.set(T,T*.5,T),w.position.set(Math.cos(E)*S,T*.35,Math.sin(E)*S),e.add(w)}const c=new tt({color:1725733,emissive:664080,emissiveIntensity:.05,roughness:.9});for(let A=0;A<4;A++){const E=b()*6.28,S=b()*n*.8,T=new I(new K(.08+b()*.08,4,3),c);T.scale.set(1.5,.2,1.5),T.position.set(Math.cos(E)*S,.01,Math.sin(E)*S),e.add(T)}const l=new tt({color:4478310,emissive:G.fairyGlow,emissiveIntensity:.05,roughness:.85}),h=new I(new K(.12,5,3),l);h.scale.set(1.2,.3,1),h.position.y=.03,e.add(h);const u=new j({color:G.fairyGlow,transparent:!0,opacity:.2}),f=[];for(let A=0;A<8;A++){const E=new I(new K(.012,3,3),u),S=(b()-.5)*n*.8,T=(b()-.5)*n*.8;E.position.set(S,.05+b()*.3,T),e.add(E),f.push({mesh:E,baseX:S,baseZ:T,drift:b()*6.28,speed:.2+b()*.3})}const p=new j({color:G.fairyRing,transparent:!0,opacity:0,side:Gt}),g=new I(new qo(.3,n-.3,16),p);g.rotation.x=-Math.PI/2,g.position.y=.02,e.add(g);const _=new j({color:G.fairyGlow,transparent:!0,opacity:.08});for(let A=0;A<6;A++){const E=b()*6.28,S=E+.5+b()*1.5,T=n*.6+b()*n*.4,w=new I(new vt(.002,.002,T,3),_);w.position.set(Math.cos((E+S)/2)*n*.4,.005,Math.sin((E+S)/2)*n*.4),w.rotation.x=Math.PI/2,w.rotation.z=E,e.add(w)}const d=new tt({color:4864560,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<3;A++){const E=b()*6.28,S=b()*n*.7,T=new I(new K(.03,4,3),d);T.scale.set(1.3,.3,1.3),T.position.set(Math.cos(E)*S,.008,Math.sin(E)*S),e.add(T)}const m=new tt({color:7833702,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<2;A++){const E=new I(new Oe(.02+b()*.02,4),m);E.position.set((b()-.5)*.08,.06,(b()-.5)*.06),E.rotation.x=-Math.PI/2+b()*.4,e.add(E)}const y=[];for(let A=0;A<5;A++){const E=b()*6.28,S=b()*n*.9,T=new j({color:8978346,transparent:!0,opacity:.25}),w=new I(new K(.005,3,3),T);w.position.set(Math.cos(E)*S,.01,Math.sin(E)*S),e.add(w),y.push(w)}const v=new j({color:657926,transparent:!0,opacity:.15,side:Gt}),x=new I(new qo(n*.5,n*.85,12),v);return x.rotation.x=-Math.PI/2,x.position.y=.008,e.add(x),e.position.set(s,0,t),Mt.add(e),{group:e,mushMat:o,discMat:p,sporeMat:u,spores:f,glowWorms:y,x:s,z:t,ringR:n,phase:b()*6.28,glowIntensity:0,active:!1}}function fy(s,t,e){const n=new pe,i=new tt({color:G.bubbleIris,emissive:G.bubbleIris,emissiveIntensity:.15,transparent:!0,opacity:.25,roughness:0,metalness:.6}),o=new I(dn.bubble,i);n.add(o);const r=new j({color:15650047,transparent:!0,opacity:.1}),a=new I(new Te(.13,.003,4,10),r);a.rotation.x=.5,a.rotation.y=b()*3,n.add(a);const c=new I(new Te(.11,.003,4,10),r);c.rotation.x=-.8,c.rotation.z=1.2,n.add(c);const l=new j({color:G.bubbleShine,transparent:!0,opacity:.5}),h=new I(new K(.04,4,3),l);h.position.set(.05,.07,.08),n.add(h);const u=new j({color:15658751,transparent:!0,opacity:.2}),f=new I(new K(.025,3,3),u);f.position.set(-.06,-.04,-.06),n.add(f);const p=new j({color:16755438,transparent:!0,opacity:.12}),g=new I(new K(.06,4,3),p);g.position.set(.02,-.02,.01),n.add(g);const _=new j({color:16772863,transparent:!0,opacity:.08}),d=new I(new K(.12,5,4),_);n.add(d);const m=[16764125,13426175,14548940];for(let T=0;T<3;T++){const w=new j({color:m[T],transparent:!0,opacity:.06}),M=new I(new Te(.14-T*.02,.002,4,8),w);M.position.y=-.04+T*.04,M.rotation.x=Math.PI/2,n.add(M)}const y=new j({color:16777215,transparent:!0,opacity:.6});for(let T=0;T<3;T++){const w=b()*6.28,M=b()*Math.PI-Math.PI/2,P=new I(new K(.003,3,3),y);P.position.set(Math.cos(w)*Math.cos(M)*.14,Math.sin(M)*.14,Math.sin(w)*Math.cos(M)*.14),n.add(P)}const v=new j({color:11189196,transparent:!0,opacity:.1}),x=new I(new K(.015,3,3),v);x.position.set((b()-.5)*.04,(b()-.5)*.04,(b()-.5)*.04),n.add(x);const A=new j({color:G.bubbleIris,transparent:!0,opacity:.15}),E=new I(new K(.04,4,3),A);E.scale.set(1.3,.6,1.3),E.position.y=-.12,n.add(E);const S=.6+b()*.8;return n.scale.setScalar(S),n.position.set(s,t,e),Mt.add(n),{group:n,shellMat:i,phase:b()*6.28,driftAng:b()*6.28,driftSpeed:.3+b()*.5,floatY:t,homeX:s,homeZ:e,bobAmp:.3+b()*.4,popped:!1,popTimer:0,sc:S}}function dy(s,t){const e=new pe,n=1.5+b()*1,i=new tt({color:329746,roughness:.9}),o=new I(new Oe(n*.85,10),i);o.rotation.x=-Math.PI/2,o.position.y=.005,e.add(o);const r=new tt({color:G.pondWater,emissive:G.pondGlow,emissiveIntensity:.2,transparent:!0,opacity:.55,roughness:.05,metalness:.4}),a=new I(new Oe(n,12),r);a.rotation.x=-Math.PI/2,a.position.y=.03,e.add(a);const c=new tt({color:3816002,roughness:.85}),l=5+Math.floor(b()*4);for(let D=0;D<l;D++){const z=D/l*6.28+b()*.3,W=n+b()*.2-.1,H=.06+b()*.08,Z=new I(new K(H,4,3),c);Z.scale.set(1+b()*.5,.4+b()*.3,1+b()*.5),Z.position.set(Math.cos(z)*W,H*.2,Math.sin(z)*W),Z.rotation.set(b(),b(),b()),e.add(Z)}const h=new tt({color:1725728,roughness:.7,side:Gt});for(let D=0;D<3;D++){const z=b()*6.28,W=n*.85+b()*.2;for(let H=0;H<3;H++){const Z=new I(new ye(.015,.15+b()*.1),h);Z.position.set(Math.cos(z)*W+(b()-.5)*.05,.08,Math.sin(z)*W+(b()-.5)*.05),Z.rotation.y=b()*3,Z.rotation.x=-.2,e.add(Z)}}const u=new j({color:11197934,transparent:!0,opacity:.08}),f=[];for(let D=0;D<3;D++){const z=new I(new Te(1,.004,4,20),u.clone());z.rotation.x=Math.PI/2,z.position.y=.036,e.add(z),f.push({mesh:z,phase:D/3})}const p=new tt({color:G.lilyPad,roughness:.6,side:Gt}),g=4+Math.floor(b()*2),_=[];for(let D=0;D<g;D++){const z=b()*6.28,W=b()*n*.6,H=.15+b()*.15,Z=new I(new Oe(H,8),p);Z.rotation.x=-Math.PI/2,Z.position.set(Math.cos(z)*W,.05,Math.sin(z)*W),e.add(Z);const X=new j({color:1724448,transparent:!0,opacity:.3}),ct=new I(new vt(.002,.002,H*1.5,3),X);ct.position.set(Math.cos(z)*W,.052,Math.sin(z)*W),ct.rotation.x=Math.PI/2,ct.rotation.z=b()*3,e.add(ct),_.push({mesh:Z,phase:b()*6.28})}const d=new tt({color:G.lilyFlower,emissive:G.lilyGlow,emissiveIntensity:.4,transparent:!0,opacity:.85,side:Gt}),m=.08;for(let D=0;D<6;D++){const z=D/6*6.28,W=new I(new ye(.06,.05),d);W.position.set(_[0].mesh.position.x+Math.cos(z)*.05,m,_[0].mesh.position.z+Math.sin(z)*.05),W.rotation.x=-1,W.rotation.y=-z,e.add(W)}const y=new tt({color:16777130,emissive:G.lilyGlow,emissiveIntensity:.8}),v=new I(new K(.025,4,3),y);if(v.position.set(_[0].mesh.position.x,m+.02,_[0].mesh.position.z),e.add(v),_.length>2){const D=new tt({color:G.lilyFlower,emissive:G.lilyGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),z=new I(new K(.03,5,4),D);z.scale.set(.8,1.2,.8),z.position.set(_[2].mesh.position.x,.09,_[2].mesh.position.z),e.add(z)}const x=new tt({color:3815477,roughness:.8,transparent:!0,opacity:.5});for(let D=0;D<5;D++){const z=b()*6.28,W=b()*n*.7,H=new I(new K(.02+b()*.025,4,3),x);H.scale.set(1+b()*.5,.4,1+b()*.5),H.position.set(Math.cos(z)*W,.015,Math.sin(z)*W),e.add(H)}const A=new j({color:2761752,transparent:!0,opacity:.12,side:Gt});for(let D=0;D<3;D++){const z=b()*6.28,W=b()*n*.5,H=new I(new Oe(.08+b()*.06,5),A);H.rotation.x=-Math.PI/2,H.position.set(Math.cos(z)*W,.012,Math.sin(z)*W),e.add(H)}const E=new tt({color:1122837,roughness:.7,transparent:!0,opacity:.4}),S=[];for(let D=0;D<2;D++){const z=b()*6.28,W=b()*n*.4,H=new I(new K(.012,4,3),E);H.scale.set(.8,.5,1.3),H.position.set(Math.cos(z)*W,.04,Math.sin(z)*W),e.add(H);const Z=new I(new vt(.002,.001,.025,3),E);Z.position.set(Math.cos(z)*W-Math.cos(z)*.02,.04,Math.sin(z)*W-Math.sin(z)*.02),Z.rotation.z=Math.PI/2,Z.rotation.y=z,e.add(Z),S.push({body:H,tail:Z,ang:z,orbR:.15+b()*n*.35,speed:.3+b()*.4})}const T=new j({color:2250016,transparent:!0,opacity:.1,side:Gt});for(let D=0;D<3;D++){const z=b()*6.28,W=n*.7+b()*n*.25,H=new I(new Oe(.06+b()*.04,5),T);H.rotation.x=-Math.PI/2,H.position.set(Math.cos(z)*W,.032,Math.sin(z)*W),e.add(H)}const w=new j({color:13426158,transparent:!0,opacity:.06}),M=new I(new Te(n-.05,.01,4,16),w);M.rotation.x=Math.PI/2,M.position.y=.035,e.add(M);const P=new tt({color:4861976,roughness:.8,side:Gt,transparent:!0,opacity:.6}),N=new I(new Oe(.03,5),P);return N.rotation.x=-Math.PI/2,N.position.set((b()-.5)*n*.5,.04,(b()-.5)*n*.5),e.add(N),e.position.set(s,0,t),Mt.add(e),{group:e,waterMat:r,flMat:d,pads:_,ripples:f,tadpoles:S,x:s,z:t,phase:b()*6.28,pondR:n}}function py(s,t){const e=new pe,n=new j({color:G.orbGold}),i=new I(new K(.2,10,8),n);e.add(i);const o=new j({color:16777215}),r=new I(new K(.06,6,4),o);e.add(r);const a=new j({color:16772744,transparent:!0,opacity:.4,wireframe:!0}),c=new I(new ns(.15,0),a);e.add(c);const l=new j({color:G.orbGlow,transparent:!0,opacity:.5}),h=new I(new K(.35,8,6),l);e.add(h);const u=new j({color:G.orbGlow,transparent:!0,opacity:.3});for(let S=0;S<8;S++){const T=S/8*6.28,w=new I(new Jn(.02,.25,3),u);w.position.set(Math.cos(T)*.3,Math.sin(T*2)*.05,Math.sin(T)*.3),w.rotation.z=-T+Math.PI/2,w.rotation.y=T,e.add(w)}const f=new j({color:G.orbInner,transparent:!0,opacity:.15}),p=new I(new K(.6,8,5),f);e.add(p);for(let S=0;S<6;S++){const T=new I(new K(.03,4,3),new j({color:16777215})),w=S/6*6.28;T.position.set(Math.cos(w)*.4,Math.sin(w*2)*.1,Math.sin(w)*.4),e.add(T)}const g=new j({color:G.orbGold,transparent:!0,opacity:.7});for(let S=0;S<4;S++){const T=S/4*6.28+.4,w=new I(new K(.015,3,3),g);w.position.set(Math.cos(T)*.5,0,Math.sin(T)*.5),e.add(w)}const _=new j({color:16768426,transparent:!0,opacity:.12});for(let S=0;S<3;S++){const T=new I(new Te(.28,.003,4,12),_);T.rotation.set(S*1.05,S*.7,0),e.add(T)}const d=new j({color:G.orbGlow,transparent:!0,opacity:.08}),m=new I(new Te(.4,.004,4,16),d);m.rotation.x=Math.PI/2,e.add(m);const y=new j({color:16772812,transparent:!0,opacity:.15}),v=new I(new Te(.25,.012,4,10),y);v.rotation.x=Math.PI/2,e.add(v);const x=new j({color:16777215,transparent:!0,opacity:.5});for(let S=0;S<6;S++){const T=b()*6.28,w=b()*Math.PI-Math.PI/2,M=new I(new K(.008,3,3),x);M.position.set(Math.cos(T)*Math.cos(w)*.2,Math.sin(w)*.2,Math.sin(T)*Math.cos(w)*.2),e.add(M)}const A=new j({color:G.orbGlow,transparent:!0,opacity:.1,side:Gt}),E=new I(new Oe(.5,8),A);return E.rotation.x=-Math.PI/2,E.position.y=-.95,e.add(E),e.position.set(s,1,t),Mt.add(e),{group:e,coreMat:n,glowMat:l,hazeMat:f,x:s,z:t,found:!1,flyUp:!1,flyY:1,phase:b()*6.28,laserLine:null,laserMat:null}}function my(s,t){const e=new pe,n=new tt({color:G.rockBase,roughness:.85,metalness:.05}),i=new tt({color:G.rockLight,roughness:.8,metalness:.05}),o=new tt({color:G.rockMoss,emissive:G.rockMoss,emissiveIntensity:.03,roughness:.9}),r=.3+b()*.5,a=new I(new K(r,8,6),b()<.6?n:i),c=.4+b()*.4;a.scale.set(1+b()*.6,c,1+b()*.6),a.position.y=r*c*.35,a.rotation.set(b()*.5,b()*3,b()*.3),a.castShadow=!0,a.receiveShadow=!0,e.add(a);const l=1+Math.floor(b()*3);for(let E=0;E<l;E++){const S=b()*6.28,T=r*.6+b()*r*.5,w=r*.3+b()*r*.4,M=new I(new K(w,5,4),b()<.5?n:i),P=.3+b()*.4;M.scale.set(1+b()*.5,P,1+b()*.5),M.position.set(Math.cos(S)*T,w*P*.3,Math.sin(S)*T),M.rotation.set(b()*.8,b()*3,b()*.5),e.add(M)}const h=2+Math.floor(b()*3);for(let E=0;E<h;E++){const S=b()*6.28,T=b()*r*.6,w=r*.15+b()*r*.2,M=new I(new K(w,4,3),o);M.scale.set(1.5,.2,1.5),M.position.set(Math.cos(S)*T,r*.35+b()*.05,Math.sin(S)*T),e.add(M)}const u=[8943428,10061909,6715221,11180390];for(let E=0;E<3;E++){const S=new tt({color:u[Math.floor(b()*u.length)],roughness:.9,transparent:!0,opacity:.5}),T=b()*6.28,w=new I(new K(r*.06+b()*r*.08,3,3),S);w.scale.set(2,.15,2),w.position.set(Math.cos(T)*r*.5,r*.25+b()*.1,Math.sin(T)*r*.5),e.add(w)}const f=new j({color:1381656,transparent:!0,opacity:.35}),p=2+Math.floor(b()*3);for(let E=0;E<p;E++){const S=b()*6.28,T=r*.3+b()*r*.4,w=new I(new vt(.003,.001,T,3),f),M=r*.3+b()*r*.2;w.position.set(Math.cos(S)*M,r*.2+b()*r*.15,Math.sin(S)*M),w.rotation.set(b()*.5,S,Math.PI/2+b()*.4),e.add(w)}const g=new j({color:660752,transparent:!0,opacity:.2,side:Gt}),_=1+Math.floor(b()*2);for(let E=0;E<_;E++){const S=b()*6.28,T=r*.3+b()*r*.3,w=new I(new ye(.02+b()*.015,T),g);w.position.set(Math.cos(S)*r*.45,r*.15,Math.sin(S)*r*.45),w.rotation.y=-S,e.add(w)}const d=[],m=new j({color:8965375,transparent:!0,opacity:.4});if(b()<.5){const E=2+Math.floor(b()*3);for(let S=0;S<E;S++){const T=b()*6.28,w=r*.25+b()*r*.25,M=new I(new K(.006,3,3),m);M.position.set(Math.cos(T)*w,r*.15+b()*r*.2,Math.sin(T)*w),e.add(M),d.push(M)}}const y=new j({color:657926,transparent:!0,opacity:.12,side:Gt}),v=new I(new qo(r*.5,r*1,8),y);v.rotation.x=-Math.PI/2,v.position.y=.005,e.add(v);const x=new tt({color:3816e3,roughness:.9}),A=4+Math.floor(b()*3);for(let E=0;E<A;E++){const S=b()*6.28,T=r*.5+b()*r*.6,w=.03+b()*.05,M=new I(new K(w,3,3),x);M.scale.set(1+b()*.5,.4,1+b()*.5),M.position.set(Math.cos(S)*T,w*.15,Math.sin(S)*T),e.add(M)}if(b()<.6){const E=new tt({color:3385941,emissive:G.grassTip,emissiveIntensity:.05,roughness:.7,side:Gt});for(let S=0;S<3;S++){const T=b()*6.28,w=new I(new ye(.015,.08+b()*.06),E);w.position.set(Math.cos(T)*r*.3,r*.3,Math.sin(T)*r*.3),w.rotation.y=b()*3,w.rotation.x=-.2-b()*.3,e.add(w)}}return e.position.set(s,0,t),Mt.add(e),{group:e,x:s,z:t,colR:r*.8,sparkles:d,sparkleMat:m}}let Id=null,Ld=null,Dd=null;function gy(){return Id}function xy(){return Ld}function _y(){return Dd}function vy(){const s=new pe,t=new tt({color:G.obeliskBlack,roughness:.2,metalness:.8,emissive:G.obeliskPink,emissiveIntensity:0});Ld=t;const e=new I(new vt(1.2,1.8,ze,4),t);e.position.y=ze/2,e.rotation.y=Math.PI/4,e.castShadow=!0,s.add(e);const n=new j({color:3351108,transparent:!0,opacity:.2});for(let y=0;y<4;y++){const v=y/4*6.28+Math.PI/4,x=new I(new vt(.03,.04,ze*.9,3),n);x.position.set(Math.cos(v)*1.55,ze*.45,Math.sin(v)*1.55),s.add(x)}const i=new j({color:G.obeliskPink,transparent:!0,opacity:0});for(let y=0;y<4;y++){const v=y/4*6.28+Math.PI/4;for(let A=0;A<3;A++){const E=6+A*4,S=new I(new vt(.015,.015,.8,3),i);S.position.set(Math.cos(v)*1.6,E,Math.sin(v)*1.6),S.rotation.z=Math.PI/2,S.rotation.y=-v,S.visible=!1,s.add(S)}const x=new I(new vt(.012,.012,2.5,3),i);x.position.set(Math.cos(v)*1.6,12,Math.sin(v)*1.6),x.visible=!1,s.add(x)}const o=new tt({color:G.obeliskBlack,roughness:.1,metalness:.9,emissive:G.obeliskPink,emissiveIntensity:0});Dd=o;const r=new I(new Jn(1.3,3,4),o);r.position.y=ze+1.5,r.rotation.y=Math.PI/4,s.add(r);const a=new j({color:G.obeliskPink,transparent:!0,opacity:0});for(let y=0;y<4;y++){const v=y/4*6.28+Math.PI/4,x=new I(new vt(.02,.02,3.2,3),a);x.position.set(Math.cos(v)*.8,ze+1.5,Math.sin(v)*.8),x.rotation.z=.35*(v<3.14?1:-1),x.rotation.y=-v,x.visible=!1,s.add(x)}for(let y=0;y<5;y++){const v=new I(new Te(1.85-y*.02,.04,6,4),new j({color:2236979}));v.position.y=4+y*5,v.rotation.x=Math.PI/2,s.add(v)}const c=new tt({color:1118488,roughness:.3,metalness:.7}),l=new I(new vt(2.2,2.5,.6,4),c);l.position.y=.3,l.rotation.y=Math.PI/4,s.add(l);const h=new I(new vt(2.8,3,.4,4),c);h.position.y=.05,h.rotation.y=Math.PI/4,s.add(h);const u=new j({color:G.obeliskPink,transparent:!0,opacity:0});for(let y=0;y<8;y++){const v=y/8*6.28,x=new I(new K(.06,4,3),u);x.position.set(Math.cos(v)*2.5,ze*.7+y*.5,Math.sin(v)*2.5),x.visible=!1,s.add(x)}const f=new j({color:1710626,transparent:!0,opacity:.08});for(let y=0;y<6;y++){const v=b()*6.28,x=2+b()*ze*.7,A=new I(new vt(.008,.008,.5+b()*.5,3),f);A.position.set(Math.cos(v)*1.6,x,Math.sin(v)*1.6),A.rotation.z=(b()-.5)*.8,A.rotation.y=-v,s.add(A)}const p=new tt({color:921108,roughness:.5,metalness:.4});for(let y=0;y<12;y++){const v=b()*6.28,x=3+b()*2,A=.15+b()*.25,E=new I(new K(A,4,3),p);E.scale.set(1+b()*.5,.3+b()*.3,1+b()*.5),E.position.set(Math.cos(v)*x,A*.15,Math.sin(v)*x),E.rotation.set(b(),b(),b()),s.add(E)}const g=new j({color:G.obeliskPink,transparent:!0,opacity:0});for(let y=0;y<4;y++){const v=y/4*6.28+Math.PI/4;for(let x=0;x<5;x++){const A=5+x*3.5+b()*.5,E=(b()-.5)*.4,S=new I(new K(.04,4,3),g);S.position.set(Math.cos(v)*1.58+Math.cos(v+1.57)*E,A,Math.sin(v)*1.58+Math.sin(v+1.57)*E),S.visible=!1,s.add(S)}}const _=new j({color:0,transparent:!0,opacity:.15,side:Gt}),d=new I(new Oe(4,8),_);d.rotation.x=-Math.PI/2,d.position.y=.005,s.add(d),s.position.set(0,-ze,0),Mt.add(s),Id=s;const m=new ds(8939212,0,30);s.add(m),m.position.set(0,ze+1,0)}let Ud=null,Nd=null;function My(){return Ud}function yy(){return Nd}function wy(){const s=new tt({color:G.moatBlue,emissive:1136042,emissiveIntensity:.3,transparent:!0,opacity:0,roughness:.1,metalness:.3});Nd=s;const t=new Pl;t.absarc(0,0,6,0,6.28,!1);const e=new ua;e.absarc(0,0,3,0,6.28,!0),t.holes.push(e);const n=new fa(t,24),i=new I(n,s);i.rotation.x=-Math.PI/2,i.position.y=.05,i.visible=!1,Mt.add(i),Ud=i;const o=new j({color:4491468,transparent:!0,opacity:0});for(let p=0;p<12;p++){const g=p/12*6.28+b()*.3,_=3.5+b()*2,d=new I(new K(.04+b()*.04,4,3),o);d.scale.set(1.2,.4,1.2),d.position.set(Math.cos(g)*_,.02,Math.sin(g)*_),d.visible=!1,Mt.add(d)}const r=new j({color:13426158,transparent:!0,opacity:0,side:Gt});for(let p=0;p<6;p++){const g=p/6*6.28+b()*.5,_=new I(new Oe(.12+b()*.1,5),r);_.rotation.x=-Math.PI/2,_.position.set(Math.cos(g)*3.3,.06,Math.sin(g)*3.3),_.visible=!1,Mt.add(_)}const a=new j({color:8960989,transparent:!0,opacity:0});for(let p=0;p<8;p++){const g=p/8*6.28,_=4+b()*1.5,d=new I(new vt(.003,.003,.4,3),a);d.position.set(Math.cos(g)*_,.055,Math.sin(g)*_),d.rotation.x=Math.PI/2,d.rotation.z=g+Math.PI/2,d.visible=!1,Mt.add(d)}const c=new j({color:264208,transparent:!0,opacity:0,side:Gt}),l=new Pl;l.absarc(0,0,5.2,0,6.28,!1);const h=new ua;h.absarc(0,0,3.8,0,6.28,!0),l.holes.push(h);const u=new fa(l,16),f=new I(u,c);f.rotation.x=-Math.PI/2,f.position.y=.04,f.visible=!1,Mt.add(f)}const jl=[];function Sy(){for(let r=0;r<6;r++){const a=G.rainbow[r],c=r/6*6.28,l=5+r*.5,h=ze+5+r*2,u=[];for(let E=0;E<=12;E++){const S=E/12,T=c+S*Math.PI,w=Math.cos(T)*l,M=Math.sin(T)*l,P=Math.sin(S*Math.PI)*h;u.push(new U(w,P,M))}const f=new Rl(u),p=new j({color:a,transparent:!0,opacity:0}),g=new Qs(f,20,.12-r*.008,5,!1),_=new I(g,p);_.visible=!1,Mt.add(_);const d=new j({color:a,transparent:!0,opacity:0});for(let E=0;E<5;E++){const S=(E+.5)/5,T=f.getPoint(S),w=new I(new K(.05,3,3),d);w.position.copy(T),w.visible=!1,Mt.add(w)}const m=new j({color:a,transparent:!0,opacity:0,side:Gt}),y=u[0],v=u[u.length-1],x=new I(new Oe(.5,6),m);x.rotation.x=-Math.PI/2,x.position.set(y.x,.03,y.z),x.visible=!1,Mt.add(x);const A=new I(new Oe(.5,6),m);A.rotation.x=-Math.PI/2,A.position.set(v.x,.03,v.z),A.visible=!1,Mt.add(A),jl.push({mesh:_,mat:p,targetOpacity:0})}const s=[],t=9.5,e=ze+12;for(let r=0;r<=12;r++){const a=r/12,c=a*Math.PI;s.push(new U(Math.cos(c)*t,Math.sin(a*Math.PI)*e,Math.sin(c)*t))}const n=new Rl(s),i=new j({color:15654399,transparent:!0,opacity:0}),o=new I(new Qs(n,16,.04,4,!1),i);o.visible=!1,Mt.add(o),jl.push({mesh:o,mat:i,targetOpacity:0})}let rn=null;const kn=[],Ze=new xe,zo=new lt;function by(s){const t=new j({color:16777215,transparent:!0,opacity:1});rn=new ro(dn.fly,t,s),rn.instanceMatrix.setUsage(pn),rn.instanceColor=new Pi(new Float32Array(s*3),3),rn.instanceColor.setUsage(pn),Ze.scale.setScalar(0),Ze.updateMatrix();for(let e=0;e<s;e++){rn.setMatrixAt(e,Ze.matrix);const n=e%3===0?G.fireflyB:G.firefly;zo.setHex(n),rn.setColorAt(e,zo),kn.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,phase:Math.random()*6.28,wander:Math.random()*6.28,colorHex:n})}rn.count=s,Mt.add(rn)}function Kr(s,t,e,n){let i=null;for(let o=0;o<kn.length;o++)if(!kn[o].active){i=kn[o];break}if(!i){let o=1/0;for(let r=0;r<kn.length;r++)kn[r].life<o&&(o=kn[r].life,i=kn[r])}i.x=s,i.y=t+.5+Math.random()*3,i.z=e,i.vx=(Math.random()-.5)*2,i.vy=Math.random()-.5,i.vz=(Math.random()-.5)*2,i.life=n,i.max=n,i.active=!0,i.wander=Math.random()*6.28}function Fd(s,t){let e=0,n=!1;for(let i=0;i<kn.length;i++){const o=kn[i];if(!o.active){Ze.position.set(0,-100,0),Ze.scale.setScalar(0),Ze.updateMatrix(),rn.setMatrixAt(i,Ze.matrix);continue}if(o.life-=s,o.life<=0){o.active=!1,Ze.position.set(0,-100,0),Ze.scale.setScalar(0),Ze.updateMatrix(),rn.setMatrixAt(i,Ze.matrix);continue}e++,o.wander+=(Math.random()-.5)*3*s,o.vx+=Math.cos(o.wander)*1.5*s,o.vz+=Math.sin(o.wander)*1.5*s,o.vy+=Math.sin(t*2+o.phase)*s,o.vx*=.995,o.vy*=.995,o.vz*=.995,o.x+=o.vx*s,o.y+=o.vy*s,o.z+=o.vz*s;const r=ne(o.x,o.z)+.3;o.y<r&&(o.y=r,o.vy=Math.abs(o.vy)*.5),o.y>12&&(o.vy-=2*s);const a=Math.sin(t*3+o.phase)*.5+.5,l=o.life/o.max*(.4+a*.6),h=.6+a*.6;Ze.position.set(o.x,o.y,o.z),Ze.scale.setScalar(h),Ze.updateMatrix(),rn.setMatrixAt(i,Ze.matrix),zo.setHex(o.colorHex),zo.multiplyScalar(l),rn.setColorAt(i,zo),n=!0}return rn.instanceMatrix.needsUpdate=!0,n&&(rn.instanceColor.needsUpdate=!0),e}let an=null;const Gn=[],$e=new xe,va=new lt,Ty=new lt(G.spore);function Ey(s){const t=new j({color:16777215,transparent:!0,opacity:1});an=new ro(dn.spore,t,s),an.instanceMatrix.setUsage(pn),an.instanceColor=new Pi(new Float32Array(s*3),3),an.instanceColor.setUsage(pn),$e.scale.setScalar(0),$e.updateMatrix();for(let e=0;e<s;e++)an.setMatrixAt(e,$e.matrix),va.setHex(G.spore),an.setColorAt(e,va),Gn.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});an.count=s,Mt.add(an)}function Ay(s,t,e){let n=null;for(let i=0;i<Gn.length;i++)if(!Gn[i].active){n=Gn[i];break}if(!n){let i=1/0;for(let o=0;o<Gn.length;o++)Gn[o].life<i&&(i=Gn[o].life,n=Gn[o])}n.x=s,n.y=t,n.z=e,n.vx=(Math.random()-.5)*.3,n.vy=.4+Math.random()*.4,n.vz=(Math.random()-.5)*.3,n.life=3+Math.random()*3,n.max=n.life,n.active=!0}let zd=0,Od=0;function Ry(s,t){zd=s,Od=t}function Cy(s){let t=0,e=!1;for(let n=0;n<Gn.length;n++){const i=Gn[n];if(!i.active){$e.position.set(0,-100,0),$e.scale.setScalar(0),$e.updateMatrix(),an.setMatrixAt(n,$e.matrix);continue}if(i.life-=s,i.life<=0){i.active=!1,$e.position.set(0,-100,0),$e.scale.setScalar(0),$e.updateMatrix(),an.setMatrixAt(n,$e.matrix);continue}t++,i.vy+=.3*s,i.vx+=zd*.3*s,i.vz+=Od*.3*s,i.vx*=.997,i.vy*=.997,i.vz*=.997,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s;const o=i.life/i.max*.7;$e.position.set(i.x,i.y,i.z),$e.scale.setScalar(1),$e.updateMatrix(),an.setMatrixAt(n,$e.matrix),va.copy(Ty).multiplyScalar(o),an.setColorAt(n,va),e=!0}return an.instanceMatrix.needsUpdate=!0,e&&(an.instanceColor.needsUpdate=!0),t}let cn=null;const Hs=[];let Ec=0;const je=new xe,Ma=new lt,Bd=new lt(G.starMote);function Py(s){const t=new j({color:16777215,transparent:!0,opacity:1});cn=new ro(dn.starMote,t,s),cn.instanceMatrix.setUsage(pn),cn.instanceColor=new Pi(new Float32Array(s*3),3),cn.instanceColor.setUsage(pn),je.scale.setScalar(0),je.updateMatrix();for(let e=0;e<s;e++)cn.setMatrixAt(e,je.matrix),Ma.copy(Bd),cn.setColorAt(e,Ma),Hs.push({x:0,y:0,z:0,life:0,max:0,active:!1,vy:0,drift:0});cn.count=s,Mt.add(cn)}function Iy(s){let t=null;for(let e=0;e<Hs.length;e++)if(!Hs[e].active){t=Hs[e];break}t&&(t.x=s.x+(Math.random()-.5)*60,t.z=s.z+(Math.random()-.5)*60,t.y=15+Math.random()*20,t.life=6+Math.random()*6,t.max=t.life,t.active=!0,t.vy=-.15-Math.random()*.3,t.drift=Math.random()*6.28)}function kd(s,t,e){Ec+=s,Ec>.15&&(Ec=0,Iy(e));let n=!1;for(let i=0;i<Hs.length;i++){const o=Hs[i];if(!o.active){je.position.set(0,-100,0),je.scale.setScalar(0),je.updateMatrix(),cn.setMatrixAt(i,je.matrix);continue}if(o.life-=s,o.life<=0||o.y<.5){o.active=!1,je.position.set(0,-100,0),je.scale.setScalar(0),je.updateMatrix(),cn.setMatrixAt(i,je.matrix);continue}o.y+=o.vy*s,o.drift+=(Math.random()-.5)*.5*s,o.x+=Math.sin(o.drift)*.1*s,o.z+=Math.cos(o.drift)*.08*s;const r=o.life/o.max,a=Math.sin(t*4+i)*.3+.7,c=r*a*.7,l=.5+a*.5;je.position.set(o.x,o.y,o.z),je.scale.setScalar(l),je.updateMatrix(),cn.setMatrixAt(i,je.matrix),Ma.copy(Bd).multiplyScalar(c),cn.setColorAt(i,Ma),n=!0}cn.instanceMatrix.needsUpdate=!0,n&&(cn.instanceColor.needsUpdate=!0)}let ln=null;const Vs=[],Ke=new xe,ya=new lt,Gd=new lt(8956535);function Ly(s){const t=new j({color:16777215,transparent:!0,opacity:1});ln=new ro(dn.dustMote,t,s),ln.instanceMatrix.setUsage(pn),ln.instanceColor=new Pi(new Float32Array(s*3),3),ln.instanceColor.setUsage(pn),Ke.scale.setScalar(0),Ke.updateMatrix();for(let e=0;e<s;e++)ln.setMatrixAt(e,Ke.matrix),ya.copy(Gd),ln.setColorAt(e,ya),Vs.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});ln.count=s,Mt.add(ln)}function df(s,t,e){for(let n=0;n<e;n++){let i=null;for(let a=0;a<Vs.length;a++)if(!Vs[a].active){i=Vs[a];break}if(!i)continue;const o=Math.random()*6.28,r=1+Math.random()*2;i.x=s+Math.cos(o)*.2,i.y=ne(s,t)+.1,i.z=t+Math.sin(o)*.2,i.vx=Math.cos(o)*r,i.vy=.5+Math.random()*1.5,i.vz=Math.sin(o)*r,i.life=.6+Math.random()*.6,i.max=i.life,i.active=!0}}function Dy(s){let t=!1;for(let e=0;e<Vs.length;e++){const n=Vs[e];if(!n.active){Ke.position.set(0,-100,0),Ke.scale.setScalar(0),Ke.updateMatrix(),ln.setMatrixAt(e,Ke.matrix);continue}if(n.life-=s,n.life<=0){n.active=!1,Ke.position.set(0,-100,0),Ke.scale.setScalar(0),Ke.updateMatrix(),ln.setMatrixAt(e,Ke.matrix);continue}n.vy-=3*s,n.vx*=.96,n.vy*=.96,n.vz*=.96,n.x+=n.vx*s,n.y+=n.vy*s,n.z+=n.vz*s;const i=ne(n.x,n.z)+.05;n.y<i&&(n.y=i,n.vy=0,n.vx*=.8,n.vz*=.8);const o=n.life/n.max*.4;Ke.position.set(n.x,n.y,n.z),Ke.scale.setScalar(1),Ke.updateMatrix(),ln.setMatrixAt(e,Ke.matrix),ya.copy(Gd).multiplyScalar(o),ln.setColorAt(e,ya),t=!0}ln.instanceMatrix.needsUpdate=!0,t&&(ln.instanceColor.needsUpdate=!0)}let hn=null;const Ws=[],Je=new xe,wa=new lt,Hd=new lt(G.bubblePop),Uy=new K(.02,3,3);function Ny(s){const t=new j({color:16777215,transparent:!0,opacity:1});hn=new ro(Uy,t,s),hn.instanceMatrix.setUsage(pn),hn.instanceColor=new Pi(new Float32Array(s*3),3),hn.instanceColor.setUsage(pn),Je.scale.setScalar(0),Je.updateMatrix();for(let e=0;e<s;e++)hn.setMatrixAt(e,Je.matrix),wa.copy(Hd),hn.setColorAt(e,wa),Ws.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});hn.count=s,Mt.add(hn)}function Fy(s,t,e,n){for(let i=0;i<n;i++){let o=null;for(let l=0;l<Ws.length;l++)if(!Ws[l].active){o=Ws[l];break}if(!o)continue;const r=Math.random()*6.28,a=Math.random()*3.14,c=1+Math.random()*2;o.x=s,o.y=t,o.z=e,o.vx=Math.cos(r)*Math.sin(a)*c,o.vy=Math.cos(a)*c,o.vz=Math.sin(r)*Math.sin(a)*c,o.life=.4+Math.random()*.4,o.max=o.life,o.active=!0}}function zy(s){let t=!1;for(let e=0;e<Ws.length;e++){const n=Ws[e];if(!n.active){Je.position.set(0,-100,0),Je.scale.setScalar(0),Je.updateMatrix(),hn.setMatrixAt(e,Je.matrix);continue}if(n.life-=s,n.life<=0){n.active=!1,Je.position.set(0,-100,0),Je.scale.setScalar(0),Je.updateMatrix(),hn.setMatrixAt(e,Je.matrix);continue}n.vy-=2*s,n.vx*=.97,n.vy*=.97,n.vz*=.97,n.x+=n.vx*s,n.y+=n.vy*s,n.z+=n.vz*s;const i=n.life/n.max*.8;Je.position.set(n.x,n.y,n.z),Je.scale.setScalar(1),Je.updateMatrix(),hn.setMatrixAt(e,Je.matrix),wa.copy(Hd).multiplyScalar(i),hn.setColorAt(e,wa),t=!0}hn.instanceMatrix.needsUpdate=!0,t&&(hn.instanceColor.needsUpdate=!0)}let Ac=0,An="SEEK",ki=-ze,Bn=0,qi=[],Zi=null,Eo=null,Ao=null,$i=null,Kl=null,ai=[],Ro=null,Vd=null,Wd=null,Jl=[],Ql=[],th=[],eh=[];function Oy(s){qi=s.orbs,Zi=s.obeliskGroup,Eo=s.obeliskMat,Ao=s.obeliskGlowMat,$i=s.moatMesh,Kl=s.moatMat,ai=s.rainbowArcs,Ro=s.player,Vd=s.makeLaser,Wd=s.orbHudEl,Jl=s.deers||[],Ql=s.puffs||[],th=s.jellies||[],eh=s.moths||[]}function By(s,t){let e=null,n=1/0;for(let i=0;i<qi.length;i++){const o=qi[i];if(o.found)continue;const r=o.x-Ro.pos.x,a=o.z-Ro.pos.z,c=r*r+a*a;c<n&&(n=c,e=o)}if(e&&n<_c*_c){const i=Math.sin(t*2+e.phase)*.5+.5;To.position.set(e.x,1,e.z),To.intensity=1+i*2,To.distance=_c}else To.intensity=0;for(let i=0;i<qi.length;i++){const o=qi[i];if(!(o.found&&!o.flyUp)){if(!o.found){const r=Math.sin(t*1.5+o.phase)*.5+.5;o.group.position.y=o.flyY+Math.sin(t*.8+o.phase)*.3,o.glowMat.opacity=.3+r*.4,o.hazeMat.opacity=.08+r*.12;for(let l=3;l<o.group.children.length;l++){const h=o.group.children[l],u=(l-3)/6*6.28+t*1.5;h.position.x=Math.cos(u)*.4,h.position.z=Math.sin(u)*.4,h.position.y=Math.sin(u*2+t)*.1}const a=o.x-Ro.pos.x,c=o.z-Ro.pos.z;if(a*a+c*c<sf*sf){o.found=!0,o.flyUp=!0,o.flyY=o.group.position.y,Ac++;const l=Wd||document.getElementById("orb-hud");l&&(l.innerHTML="✦ "+Ac+" / "+Nl),An==="SEEK"&&(An="RISING")}}if(o.flyUp){const r=ze+5;o.flyY+=(r-o.flyY)*s*.8,o.group.position.y=o.flyY;const a=Math.min((o.flyY-1)/(r-1),1);o.group.scale.setScalar(1-a*.6),o.glowMat.opacity=.8-a*.5,o.flyY>r-1&&!o.laserLine&&(o.flyUp=!1,o.group.visible=!1,o.laserLine=Vd(o.x,o.z,r))}}}if(An==="RISING"&&(ki<0&&(ki+=dM*s,ki>0&&(ki=0),Zi&&(Zi.position.y=ki)),Ac>=Nl&&ki>=0&&(An="COMPLETE",Bn=0)),Zi){Zi.rotation.y+=s*.03;const i=Zi.children[Zi.children.length-1];if(i&&i.isLight){const o=Math.max(0,Math.min(1,(ki+ze)/ze));i.intensity=o*1.5*(.8+Math.sin(t*1.5)*.2)}}for(let i=0;i<qi.length;i++){const o=qi[i];if(!o.laserLine)continue;const r=Math.sin(t*3+i)*.5+.5;o.laserLine.mat.opacity=.5+r*.4,o.laserLine.glowMat.opacity=.15+r*.15}if(An==="COMPLETE"){Bn+=s;const i=Math.min(Bn/3,1);if(Eo&&(Eo.emissiveIntensity=i*1.5),Ao&&(Ao.emissiveIntensity=i*2.5),Bn>1&&Kl){const o=Math.min((Bn-1)/4,1);Kl.opacity=o*.6,$i&&($i.visible||($i.visible=!0),$i.position.y=.05+Math.sin(t*3)*.02*o)}if(Bn>2)for(let o=0;o<ai.length;o++){const r=o*.3,a=Math.min(Math.max((Bn-2-r)/2,0),1);a>0&&!ai[o].mesh.visible&&(ai[o].mesh.visible=!0),ai[o].mat.opacity=a*.55,ai[o].mesh.rotation.y+=s*.1*(o+1)*.3}if(Bn>1){const o=Math.min((Bn-1)/6,1)*2;for(let r=0;r<Jl.length;r++){const a=Jl[r],c=a.group,l=-c.position.x,h=-c.position.z,u=Math.sqrt(l*l+h*h);u>8?(a.wanderAng=Math.atan2(-c.position.x,-c.position.z),a.state="walk",a.speed=1.5*o,c.position.x+=l/u*a.speed*s,c.position.z+=h/u*a.speed*s,c.rotation.y=a.wanderAng):a.state="pause"}for(let r=0;r<Ql.length;r++){const a=Ql[r],c=a.group,l=-c.position.x,h=-c.position.z,u=Math.sqrt(l*l+h*h);u>8&&(a.wanderAng=Math.atan2(-c.position.x,-c.position.z),a.state="hop",a.hopTimer=a.hopTimer%1.2,c.position.x+=l/u*1.5*o*s,c.position.z+=h/u*1.5*o*s)}for(let r=0;r<th.length;r++){const a=th[r],c=a.group;c.position.x+=(0-c.position.x)*s*.15*o,c.position.z+=(0-c.position.z)*s*.15*o}for(let r=0;r<eh.length;r++){const a=eh[r];a.centerX+=(0-a.centerX)*s*.2*o,a.centerZ+=(0-a.centerZ)*s*.2*o,a.orbitR=Math.max(a.orbitR-s*.3*o,2)}}Bn>10&&(An="FINALE")}if(An==="FINALE"){Eo&&(Eo.emissiveIntensity=1.5+Math.sin(t*.5)*.3),Ao&&(Ao.emissiveIntensity=2.5+Math.sin(t*.7)*.5),$i&&($i.position.y=.05+Math.sin(t*3)*.02);for(let i=0;i<ai.length;i++)ai[i].mesh.rotation.y+=s*.1*(i+1)*.3,ai[i].mat.opacity=.45+Math.sin(t+i)*.1}}function ky(s,t,e){const n=ze+2,i=[new U(s,e,t),new U(0,n,0)],o=new j({color:G.laserPink,transparent:!0,opacity:.8}),r=new Qf(i[0],i[1]),a=new Qs(r,1,.08,6,!1),c=new I(a,o);Mt.add(c);const l=new j({color:G.laserGlow,transparent:!0,opacity:.25}),h=new I(new Qs(r,1,.25,6,!1),l);return Mt.add(h),{tube:c,glow:h,mat:o,glowMat:l}}const Gy=600;let Fr=.25,Ce=1,pf=.85,Nh="NIGHT",Co=null,Po=null,nh=null,Io=null,Jr=null;const mf=[{label:"DUSK",sky:new lt(923685),fog:new lt(791584),fogDensity:.009,moonInt:.6,moonCol:new lt(14527112),moonElev:15,ambSky:new lt(4469589),ambGnd:new lt(2238488),ambInt:.6,stars:.4,bio:.7,plRange:16,plInt:.5},{label:"NIGHT",sky:new lt(330264),fog:new lt(528408),fogDensity:.01,moonInt:1,moonCol:new lt(12307694),moonElev:55,ambSky:new lt(3359846),ambGnd:new lt(1587232),ambInt:.7,stars:.85,bio:1,plRange:18,plInt:.55},{label:"DEEP_NIGHT",sky:new lt(198160),fog:new lt(397332),fogDensity:.012,moonInt:.55,moonCol:new lt(8952251),moonElev:75,ambSky:new lt(1712708),ambGnd:new lt(1188888),ambInt:.5,stars:1,bio:1.5,plRange:22,plInt:.7},{label:"DAWN",sky:new lt(1187888),fog:new lt(923688),fogDensity:.011,moonInt:.5,moonCol:new lt(13417386),moonElev:20,ambSky:new lt(3354197),ambGnd:new lt(1843224),ambInt:.55,stars:.35,bio:.65,plRange:17,plInt:.5}],Si=new lt,gf=new lt;function Hy(s){Co=s.scene,Po=s.moon,nh=s.moon2,Io=s.hemiLight,Jr=s.playerLight}function Vy(s){if(!Co)return;Fr=(Fr+s/Gy)%1;const t=Fr*4,e=Math.floor(t)%4,n=(e+1)%4,i=t-Math.floor(t),o=.5-.5*Math.cos(i*Math.PI),r=mf[e],a=mf[n];Nh=o<.5?r.label:a.label;const c=(l,h)=>l+(h-l)*o;if(Si.copy(r.sky).lerp(a.sky,o),Co.background.copy(Si),Si.copy(r.fog).lerp(a.fog,o),Co.fog.color.copy(Si),Co.fog.density=c(r.fogDensity,a.fogDensity),Po){Si.copy(r.moonCol).lerp(a.moonCol,o),Po.color.copy(Si),Po.intensity=c(r.moonInt,a.moonInt);const l=Fr*Math.PI*2,h=c(r.moonElev,a.moonElev)*Math.PI/180,u=60;Po.position.set(Math.cos(l)*Math.cos(h)*u,Math.sin(h)*u,Math.sin(l)*Math.cos(h)*u)}if(nh){const l=c(r.moonInt,a.moonInt)/.85;nh.intensity=.3*l}Io&&(Si.copy(r.ambSky).lerp(a.ambSky,o),gf.copy(r.ambGnd).lerp(a.ambGnd,o),Io.color.copy(Si),Io.groundColor.copy(gf),Io.intensity=c(r.ambInt,a.ambInt)),Jr&&(Jr.distance=c(r.plRange,a.plRange),Jr.intensity=c(r.plInt,a.plInt)),pf=c(r.stars,a.stars),HM(pf),Ce=c(r.bio,a.bio)}let Xs=0,Oo=0,os=0,Bo="CLEAR",Ii=!1,Vn=0;const Qr={CLEAR:{fogMult:1,windBase:.3,rainRate:0,skyDarken:0,mistCount:0,duration:[90,180]},MISTY:{fogMult:1.8,windBase:.2,rainRate:0,skyDarken:.05,mistCount:6,duration:[60,150]},LIGHT_RAIN:{fogMult:1.3,windBase:.6,rainRate:.3,skyDarken:.1,mistCount:2,duration:[60,120]},HEAVY_RAIN:{fogMult:1.6,windBase:1,rainRate:.8,skyDarken:.2,mistCount:3,duration:[45,100]},FOG_BANK:{fogMult:2.5,windBase:.15,rainRate:0,skyDarken:.1,mistCount:8,duration:[60,120]},LUMINOUS_STORM:{fogMult:1.4,windBase:1.5,rainRate:.6,skyDarken:.15,mistCount:2,duration:[40,90]}},Wy={CLEAR:{MISTY:.4,LIGHT_RAIN:.3,FOG_BANK:.2,LUMINOUS_STORM:.1},MISTY:{CLEAR:.3,LIGHT_RAIN:.3,FOG_BANK:.3,HEAVY_RAIN:.1},LIGHT_RAIN:{CLEAR:.2,MISTY:.2,HEAVY_RAIN:.4,LUMINOUS_STORM:.2},HEAVY_RAIN:{LIGHT_RAIN:.4,LUMINOUS_STORM:.3,MISTY:.2,CLEAR:.1},FOG_BANK:{MISTY:.4,CLEAR:.3,LIGHT_RAIN:.2,LUMINOUS_STORM:.1},LUMINOUS_STORM:{HEAVY_RAIN:.3,MISTY:.3,CLEAR:.2,LIGHT_RAIN:.2}};let Ds="CLEAR",Is=null,ta=0,zr=0,Rc=0,Or=!1,Br=0,Cc=Math.random()*Math.PI*2,Pc=0,Ic=0;const ih=[],Xy=8;let xf=!1,Lc=0,kr=1,ea=0,Gr=0,Dc=0;function Yy(){const s=Wy[Ds],t=Object.entries(s);let e=0;for(const[,i]of t)e+=i;let n=Math.random()*e;for(const[i,o]of t)if(n-=o,n<=0)return i;return t[0][0]}function qy(){if(xf)return;const s=document.createElement("canvas");s.width=128,s.height=64;const t=s.getContext("2d"),e=t.createRadialGradient(64,32,0,64,32,64);e.addColorStop(0,"rgba(255,255,255,0.5)"),e.addColorStop(.3,"rgba(255,255,255,0.25)"),e.addColorStop(.7,"rgba(255,255,255,0.06)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,64);const n=new Mh(s),i=new ye(40,14);for(let o=0;o<Xy;o++){const r=new j({map:n,color:5596791,transparent:!0,opacity:0,side:Gt,depthWrite:!1}),a=new I(i,r);a.visible=!1,Mt.add(a),ih.push({mesh:a,mat:r,active:!1,drift:Math.random()*Math.PI*2,speed:.3+Math.random()*.4,baseY:.8+Math.random()*2,wobble:Math.random()*Math.PI*2})}xf=!0}function Zy(){qy();const s=Qr.CLEAR.duration;ta=s[0]+Math.random()*(s[1]-s[0])}function $y(s,t,e){if(Or)if(zr-=s,zr<=0){Ds=Is,Is=null,Or=!1;const o=Qr[Ds].duration;ta=o[0]+Math.random()*(o[1]-o[0]),Br=0}else Br=1-zr/Rc;else ta-=s,ta<=0&&(Is=Yy(),Or=!0,Rc=30+Math.random()*60,zr=Rc,Br=0);const n=Qr[Ds];if(Or&&Is){const o=Qr[Is],r=.5-.5*Math.cos(Br*Math.PI),a=(c,l)=>c+(l-c)*r;kr=a(n.fogMult,o.fogMult),ea=a(n.rainRate,o.rainRate),Gr=a(n.skyDarken,o.skyDarken),Dc=a(n.mistCount,o.mistCount),os=a(n.windBase,o.windBase),Bo=r<.5?Ds:Is}else kr=n.fogMult,ea=n.rainRate,Gr=n.skyDarken,Dc=n.mistCount,os=n.windBase,Bo=Ds;Ii=Bo==="LUMINOUS_STORM",Cc+=(Math.sin(t*.05)*.2+Math.sin(t*.13)*.1)*s,Pc-=s,Pc<=0&&(Pc=2+Math.random()*6,Ic=Math.random()*.8),Ic*=Math.pow(.3,s);const i=os+Ic;if(Xs=Math.cos(Cc)*i,Oo=Math.sin(Cc)*i,Mt.fog.density*=kr,Gr>.001){const o=Mt.background,r=1-Gr;o.r*=r,o.g*=r,o.b*=r}if(e){const o=Math.round(Dc);for(let r=0;r<ih.length;r++){const a=ih[r];if(r<o){a.active||(a.active=!0,a.mesh.visible=!0,a.drift=Math.random()*Math.PI*2);const c=10+Math.sin(t*.3+a.wobble)*8,l=a.drift+t*a.speed*.05;a.mesh.position.set(e.x+Math.cos(l)*c,a.baseY+Math.sin(t*.4+a.wobble)*.5,e.z+Math.sin(l)*c),a.mesh.rotation.y=l+Math.PI/2,a.drift+=Xs*s*.02;const h=.03+kr*.012;a.mat.opacity+=(h-a.mat.opacity)*s*2}else a.active&&(a.mat.opacity-=s*.5,a.mat.opacity<=.005&&(a.active=!1,a.mesh.visible=!1,a.mat.opacity=0))}}return Ii&&(Lc-=s,Lc<=0&&(Lc=1+Math.random()*4,Vn=1)),Vn*=Math.pow(.02,s),Vn<.01&&(Vn=0),ea}function Fh(){return ea}const On=300,Mo=new Float32Array(On),yo=new Float32Array(On),wo=new Float32Array(On),Uc=new Float32Array(On),Nc=new Float32Array(On),Fc=new Float32Array(On),ji=new Float32Array(On),vn=new Float32Array(On*6);let es=null,sh=null;function jy(){const s=new Ee;s.setAttribute("position",new wn(vn,3)),sh=new Zf({color:8952251,transparent:!0,opacity:.3,depthWrite:!1}),es=new A0(s,sh),es.frustumCulled=!1,es.visible=!1,Mt.add(es);for(let t=0;t<On;t++)ji[t]=0,Xd(t)}function Xd(s){const t=s*6;vn[t]=0,vn[t+1]=-100,vn[t+2]=0,vn[t+3]=0,vn[t+4]=-100,vn[t+5]=0}function Ky(s,t,e,n,i){if(!es)return;const o=e>.01;if(es.visible=o,!o)return;sh.opacity=Math.min(.15+e*.35,.5);const r=Math.floor(e*12*s*60);for(let c=0;c<r;c++){let l=-1;for(let f=0;f<On;f++)if(ji[f]<=0){l=f;break}if(l===-1)break;const h=Math.random()*Math.PI*2,u=Math.random()*30;Mo[l]=t.x+Math.cos(h)*u,yo[l]=12+Math.random()*10,wo[l]=t.z+Math.sin(h)*u,Uc[l]=n*2+(Math.random()-.5)*.3,Nc[l]=-12-Math.random()*8,Fc[l]=i*2+(Math.random()-.5)*.3,ji[l]=2+Math.random()*1.5}const a=.06;for(let c=0;c<On;c++){if(ji[c]<=0)continue;if(ji[c]-=s,ji[c]<=0||yo[c]<ne(Mo[c],wo[c])+.1){ji[c]=0,Xd(c);continue}Mo[c]+=Uc[c]*s,yo[c]+=Nc[c]*s,wo[c]+=Fc[c]*s;const l=c*6;vn[l]=Mo[c],vn[l+1]=yo[c],vn[l+2]=wo[c],vn[l+3]=Mo[c]+Uc[c]*a,vn[l+4]=yo[c]+Nc[c]*a,vn[l+5]=wo[c]+Fc[c]*a}es.geometry.attributes.position.needsUpdate=!0}let Ct=null,He=null,gi=!1,ps=!1,ko=null,na=null,Jy=null,Yd=null,Qy=null,tw=null,qd=null,Zd=null,ew=null,$d=null,jd=null,zc=0,nw=null,Kd=null,iw=null;const li={jelly:0,puff:0,deer:0,moth:0};function _f(s,t){const e=Ct.sampleRate*t,n=Ct.createBuffer(1,e,Ct.sampleRate),i=n.getChannelData(0);if(s==="white")for(let o=0;o<e;o++)i[o]=Math.random()*2-1;else if(s==="brown"){let o=0;for(let r=0;r<e;r++){const a=Math.random()*2-1;i[r]=(o+.02*a)/1.02,o=i[r],i[r]*=3.5}}return n}function Hr(s,t,e){const n=Ct.createBufferSource();n.buffer=s,n.loop=!0;const i=Ct.createGain();i.gain.value=t;const o=Ct.createBiquadFilter();return o.type="lowpass",o.frequency.value=e,o.Q.value=.5,n.connect(o).connect(i).connect(He),n.start(),{node:n,gain:i,filter:o}}function sw(){const s=()=>{if(!gi){try{Ct=new(window.AudioContext||window.webkitAudioContext),He=Ct.createGain(),He.gain.value=.35,He.connect(Ct.destination),ko=_f("brown",2),na=_f("white",2);const t=Hr(ko,.12,180);Jy=t.node,Yd=t.gain,Qy=t.filter;const e=Hr(na,0,400);tw=e.node,qd=e.gain,Zd=e.filter;const n=Hr(na,0,2e3);ew=n.node,$d=n.gain,jd=n.filter;const i=Hr(ko,0,600);nw=i.node,Kd=i.gain,iw=i.filter,gi=!0}catch(t){console.warn("Audio init failed:",t)}document.removeEventListener("click",s),document.removeEventListener("keydown",s),document.removeEventListener("touchstart",s)}};document.addEventListener("click",s),document.addEventListener("keydown",s),document.addEventListener("touchstart",s)}function ow(s,t,e,n,i,o,r,a){if(!gi||ps)return;const c=Ct.currentTime,l=o==="DEEP_NIGHT"?.15:o==="DAWN"?.08:.12;Yd.gain.linearRampToValueAtTime(l,c+.1);const h=Math.min(t*.18,.3),u=200+t*600;qd.gain.linearRampToValueAtTime(h,c+.1),Zd.frequency.linearRampToValueAtTime(u,c+.1);const f=e*.25,p=1200+e*2e3;$d.gain.linearRampToValueAtTime(f,c+.1),jd.frequency.linearRampToValueAtTime(p,c+.1),i>.5&&zc<=0&&(rw(),zc=2+Math.random()*3),zc-=s;let g=1/0;if(r&&a)for(let m=0;m<a.length;m++){const y=a[m].x-r.x,v=a[m].z-r.z,x=y*y+v*v;x<g&&(g=x)}const d=(g<225?1-Math.sqrt(g)/15:0)*.12;Kd.gain.linearRampToValueAtTime(d,c+.1),li.jelly-=s,li.puff-=s,li.deer-=s,li.moth-=s}function rw(){if(!Ct)return;const s=Ct.createOscillator(),t=Ct.createGain(),e=Ct.createBiquadFilter();s.type="sawtooth",s.frequency.value=40+Math.random()*30,e.type="lowpass",e.frequency.value=100,e.Q.value=1,t.gain.setValueAtTime(.4,Ct.currentTime),t.gain.exponentialRampToValueAtTime(.001,Ct.currentTime+.8+Math.random()*.5),s.connect(e).connect(t).connect(He),s.start(),s.stop(Ct.currentTime+1.5);const n=Ct.createBufferSource();n.buffer=ko;const i=Ct.createGain(),o=Ct.createBiquadFilter();o.type="lowpass",o.frequency.value=80,i.gain.setValueAtTime(.3,Ct.currentTime),i.gain.exponentialRampToValueAtTime(.001,Ct.currentTime+1.2),n.connect(o).connect(i).connect(He),n.start(),n.stop(Ct.currentTime+1.5)}function ls(s,t,e){if(!gi||ps||!Ct||li[s]>0)return;const n=t.x-e.x,i=t.z-e.z,o=n*n+i*i;if(o>900)return;const r=Math.sqrt(o),a=Math.max(0,1-r/30)*.15,c=Math.max(-1,Math.min(1,n/Math.max(r,1))),l=Ct.createOscillator(),h=Ct.createGain(),u=Ct.createStereoPanner();u.pan.value=c;const f=Ct.currentTime;switch(s){case"jelly":l.type="sine",l.frequency.setValueAtTime(280+Math.random()*80,f),l.frequency.linearRampToValueAtTime(220+Math.random()*60,f+.6),h.gain.setValueAtTime(a,f),h.gain.exponentialRampToValueAtTime(.001,f+.8),l.connect(h).connect(u).connect(He),l.start(),l.stop(f+.8),li.jelly=3+Math.random()*4;break;case"puff":l.type="sine",l.frequency.setValueAtTime(600+Math.random()*200,f),l.frequency.exponentialRampToValueAtTime(400,f+.15),h.gain.setValueAtTime(a*.7,f),h.gain.exponentialRampToValueAtTime(.001,f+.15),l.connect(h).connect(u).connect(He),l.start(),l.stop(f+.2),li.puff=2+Math.random()*3;break;case"deer":l.type="sawtooth",l.frequency.setValueAtTime(120+Math.random()*40,f),l.frequency.linearRampToValueAtTime(80,f+.3);const p=Ct.createBiquadFilter();p.type="lowpass",p.frequency.value=300,h.gain.setValueAtTime(a,f),h.gain.exponentialRampToValueAtTime(.001,f+.4),l.connect(p).connect(h).connect(u).connect(He),l.start(),l.stop(f+.5),li.deer=4+Math.random()*5;break;case"moth":l.type="triangle",l.frequency.setValueAtTime(180+Math.random()*100,f);const g=Ct.createOscillator(),_=Ct.createGain();g.frequency.value=20+Math.random()*10,_.gain.value=50,g.connect(_).connect(l.frequency),h.gain.setValueAtTime(a*.4,f),h.gain.exponentialRampToValueAtTime(.001,f+.3),l.connect(h).connect(u).connect(He),g.start(),l.start(),g.stop(f+.35),l.stop(f+.35),li.moth=3+Math.random()*4;break}}let Sa=0;function aw(s,t){if(!gi||ps||!Ct||Sa>0)return;const e=Ct.currentTime;if(t){const n=Ct.createBufferSource();n.buffer=na;const i=Ct.createGain(),o=Ct.createBiquadFilter();o.type="bandpass",o.frequency.value=2e3,o.Q.value=.5,i.gain.setValueAtTime(.06,e),i.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(o).connect(i).connect(He),n.start(),n.stop(e+.15)}else{const n=Ct.createOscillator();n.type="sine",n.frequency.value=80+Math.random()*40;const i=Ct.createGain();i.gain.setValueAtTime(.04,e),i.gain.exponentialRampToValueAtTime(.001,e+.08),n.connect(i).connect(He),n.start(),n.stop(e+.1)}Sa=s?.22:.35}function cw(){if(!gi||ps||!Ct)return;const s=Ct.currentTime,t=Ct.createOscillator();t.type="sine",t.frequency.setValueAtTime(150,s),t.frequency.exponentialRampToValueAtTime(300,s+.1);const e=Ct.createGain();e.gain.setValueAtTime(.04,s),e.gain.exponentialRampToValueAtTime(.001,s+.15),t.connect(e).connect(He),t.start(),t.stop(s+.2)}function lw(s){if(!gi||ps||!Ct)return;const t=Ct.currentTime,e=Ct.createBufferSource();e.buffer=ko;const n=Ct.createGain(),i=Ct.createBiquadFilter();i.type="lowpass",i.frequency.value=200,n.gain.setValueAtTime(s*.08,t),n.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(i).connect(n).connect(He),e.start(),e.stop(t+.25)}function hw(s){Sa>0&&(Sa-=s)}function uw(s,t){if(!gi||ps||!Ct)return;const e=s.x-t.x,n=s.z-t.z,i=e*e+n*n;if(i>400)return;const o=Math.max(0,1-Math.sqrt(i)/20)*.08,r=Ct.currentTime,a=Ct.createOscillator();a.type="sine",a.frequency.setValueAtTime(800+Math.random()*400,r),a.frequency.exponentialRampToValueAtTime(200,r+.08);const c=Ct.createGain();c.gain.setValueAtTime(o,r),c.gain.exponentialRampToValueAtTime(.001,r+.1),a.connect(c).connect(He),a.start(),a.stop(r+.12)}function fw(){if(!gi||ps||!Ct)return;const s=Ct.currentTime,t=Ct.createOscillator();t.type="sine",t.frequency.setValueAtTime(300,s),t.frequency.exponentialRampToValueAtTime(800,s+.2);const e=Ct.createGain();e.gain.setValueAtTime(.08,s),e.gain.exponentialRampToValueAtTime(.001,s+.4),t.connect(e).connect(He),t.start(),t.stop(s+.5)}function dw(s,t,e,n,i){const o=e.x-s.x,r=e.z-s.z,a=o*o+r*r;if(a>n*n)return!1;if(a<.01)return!0;let l=Math.atan2(r,o)-t;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;return Math.abs(l)<i*.5}function pw(s,t,e,n){const i=t.x-s.x,o=t.z-s.z,r=n?e*1.8:e;return i*i+o*o<r*r}function mw(s,t){const e=Math.sqrt(s.x*s.x+s.z*s.z),n=le-t;if(e<n)return{x:0,z:0};const i=(e-n)/t,o=Math.min(i*2,3);return{x:-s.x/e*o,z:-s.z/e*o}}function gw(s,t,e,n,i){let o=0,r=0;const a=Math.cos(t)*n,c=Math.sin(t)*n,l=s.x+a,h=s.z+c;for(let u=0;u<e.length;u++){const f=e[u],p=l-f.x,g=h-f.z,_=p*p+g*g,d=(f.colR||i)+1;if(_<d*d&&_>.01){const m=Math.sqrt(_),y=(d-m)/d*2;o+=p/m*y,r+=g/m*y}}return{x:o,z:r}}const ci={deer:!1,puffling:!1,jelly:!1,moth:!1,fairyRing:!1,crystalChain:!1,pond:!1},xw={deer:"Spirit Deer",puffling:"Puffling",jelly:"Luminous Jelly",moth:"Moon Moth",fairyRing:"Fairy Ring",crystalChain:"Crystal Resonance",pond:"Moonlit Pond"};let ui=null,ia=0,vf="";function _w(){ui=document.createElement("div"),ui.id="discovery-text",ui.style.cssText="position:fixed;top:28%;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:22px;color:#ccffee;text-shadow:0 0 12px #44ffaa,0 0 30px #228866;pointer-events:none;opacity:0;transition:opacity 0.6s;z-index:100;letter-spacing:3px;text-transform:uppercase;",document.body.appendChild(ui)}function Gi(s){ci[s]||(ci[s]=!0,vf=xw[s],ia=3,ui&&(ui.textContent=vf,ui.style.opacity="1"))}function vw(s,t,e,n,i,o,r,a){const c=s.x,l=s.z;if(!ci.deer)for(let h=0;h<t.length;h++){const u=t[h].group.position.x-c,f=t[h].group.position.z-l;if(u*u+f*f<144){Gi("deer");break}}if(!ci.puffling)for(let h=0;h<e.length;h++){const u=e[h].group.position.x-c,f=e[h].group.position.z-l;if(u*u+f*f<64){Gi("puffling");break}}if(!ci.jelly)for(let h=0;h<n.length;h++){const u=n[h].group.position.x-c,f=n[h].group.position.z-l;if(u*u+f*f<100){Gi("jelly");break}}if(!ci.moth)for(let h=0;h<i.length;h++){const u=i[h].group.position.x-c,f=i[h].group.position.z-l;if(u*u+f*f<64){Gi("moth");break}}if(!ci.fairyRing)for(let h=0;h<o.length;h++){const u=o[h].x-c,f=o[h].z-l;if(u*u+f*f<16){Gi("fairyRing");break}}if(!ci.pond)for(let h=0;h<r.length;h++){const u=r[h].x-c,f=r[h].z-l;if(u*u+f*f<25){Gi("pond");break}}!ci.crystalChain&&a>=3&&Gi("crystalChain")}function Mw(s){ia>0&&(ia-=s,ia<=.6&&ui&&(ui.style.opacity="0"))}let oh=null,Oc=60;const yw={DUSK:"Dusk",NIGHT:"Night",DEEP_NIGHT:"Deep Night",DAWN:"Dawn"},ww={CLEAR:"Clear",MISTY:"Misty",LIGHT_RAIN:"Light Rain",HEAVY_RAIN:"Heavy Rain",FOG_BANK:"Fog",LUMINOUS_STORM:"Storm"};function Sw(){oh=document.getElementById("hud")}function bw(s,t){if(!oh)return;Oc=Oc*.95+1/Math.max(s,.001)*.05;const e=An==="SEEK"?"Seek the orbs...":An==="RISING"?"The obelisk stirs...":An==="COMPLETE"?"Convergence!":"Luminaries",n=yw[Nh]||"Night",i=ww[Bo]||"Clear";oh.innerHTML="<b>"+e+"</b> · "+n+" · "+i+" · FPS:"+Math.round(Oc)+"<br>Pos:"+t.x.toFixed(0)+","+t.z.toFixed(0)}let ba=null;function Tw(){ba=document.getElementById("orb-hud")}function Ew(){return ba}function Aw(){const s=document.getElementById("overlay");s&&(s.style.opacity="0",setTimeout(()=>{try{s.remove()}catch{}},2500)),ba&&(ba.style.display="block")}const ue=[],fn=[],ae=[],no=[],Wn=[],$n=[],io=[],rh=[],jo=[],jn=[],ah=[],Ta=[],Ea=[],Go=[],Yn=[],Xn=[],Ue=[],Mn=[],bi=[];let Mf=0,yf=0,Bc=0,Hi=null,So=0;function Rw(){for(let t=0;t<$v;t++){let e,n,i=!1;for(let o=0;o<20;o++){const r=b()*6.28,a=5+b()*(le-10);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<ue.length;c++){const l=ue[c].x-e,h=ue[c].z-n;if(l*l+h*h<9){i=!1;break}}if(i)break}if(i){const o=qM(e,n);o.position.y=ne(e,n),ue.push({group:o,x:e,z:n})}}for(let t=0;t<jv;t++){const e=ue[Math.floor(b()*ue.length)],n=b()*6.28,i=1+b()*4,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i,a=ZM(o,r);a.group.position.y=ne(o,r),fn.push(a)}for(let t=0;t<Kv;t++){const e=b()*6.28,n=8+b()*le*.6,i=Math.cos(e)*n,o=Math.sin(e)*n,r=$M(i,o);r.group.position.y=ne(i,o),ae.push(r)}for(let t=0;t<Jv;t++){const e=b()*6.28,n=10+b()*le*.5,i=Math.cos(e)*n,o=Math.sin(e)*n;no.push(ry(i,ne(i,o)+3+b()*5,o))}for(let t=0;t<Qv;t++){const e=fn[Math.floor(b()*fn.length)],n=b()*6.28,i=1+b()*5,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i,a=ay(o,r);a.group.position.y=ne(o,r),a._baseY=ne(o,r),Wn.push(a)}for(let t=0;t<tM;t++){const e=b()*6.28,n=12+b()*le*.5,i=Math.cos(e)*n,o=Math.sin(e)*n,r=cy(i,o),a=ne(i,o);r.group.position.y=a,r._baseY=a,$n.push(r)}for(let t=0;t<eM;t++){const e=ue[Math.floor(b()*ue.length)];io.push(ly(e.x,ne(e.x,e.z)+2+b()*4,e.z))}const s=[null,G.grassPurple,G.grassBlue,G.grassTeal];for(let t=0;t<nM;t++){const e=b()*6.28,n=2+b()*(le*.9),i=Math.cos(e)*n,o=Math.sin(e)*n,r=s[Math.floor(b()*s.length)],a=jM(i,o,2+b()*2.5,25+Math.floor(b()*20),r);a.mesh.position.y=ne(i,o),rh.push(a)}for(let t=0;t<rM;t++){let e,n,i=!1;for(let o=0;o<10;o++){const r=b()*6.28,a=3+b()*(le*.85);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<ue.length;c++){const l=ue[c].x-e,h=ue[c].z-n;if(l*l+h*h<4){i=!1;break}}if(i)break}if(i){const o=my(e,n);o.group.position.y=ne(e,n)-.08,Ta.push(o)}}for(let t=0;t<iM;t++){const e=ue[Math.floor(b()*ue.length)],n=b()*6.28,i=1+b()*5,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i,a=JM(o,r);a.group.position.y=ne(o,r),jo.push(a)}for(let t=0;t<sM;t++){const e=b()*6.28,n=3+b()*(le*.7),i=Math.cos(e)*n,o=Math.sin(e)*n,r=QM(i,o);r.group.position.y=ne(i,o),jn.push(r)}for(let t=0;t<oM;t++){const e=b()*6.28,n=4+b()*(le*.8),i=Math.cos(e)*n,o=Math.sin(e)*n,r=ty(i,o);r.group.position.y=ne(i,o),ah.push(r)}for(let t=0;t<Nl;t++){let e,n,i=!1;for(let o=0;o<30;o++){const r=b()*6.28,a=20+b()*(le*.6);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<Mn.length;c++){const l=Mn[c].x-e,h=Mn[c].z-n;if(l*l+h*h<225){i=!1;break}}if(i)break}if(i){const o=py(e,n);o.group.position.y=ne(e,n)+1,o.flyY=ne(e,n)+1,Mn.push(o)}}for(let t=0;t<dd;t++){const e=b()*6.28,n=2+b()*3,i=Math.cos(e)*n,o=Math.sin(e)*n;Ea.push(hy(i,ne(i,o)+1+b()*.5,o))}for(let t=0;t<aM;t++){const e=b()*6.28,n=4+b()*(le*.7),i=Math.cos(e)*n,o=Math.sin(e)*n,r=sy(i,o);r.group.position.y=ne(i,o),Go.push(r)}for(let t=0;t<cM;t++){let e,n,i=!1;for(let o=0;o<20;o++){const r=b()*6.28,a=10+b()*(le*.6);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<ue.length;c++){const l=ue[c].x-e,h=ue[c].z-n;if(l*l+h*h<36){i=!1;break}}if(i)break}if(i){kl(e,n,4);const o=uy(e,n);o.group.position.y=ne(e,n),Yn.push(o)}}for(let t=0;t<lM;t++){const e=b()*6.28,n=5+b()*le*.6,i=Math.cos(e)*n,o=Math.sin(e)*n;Xn.push(fy(i,ne(i,o)+.5+b()*5,o))}for(let t=0;t<uM;t++){let e,n,i=!1;for(let o=0;o<20;o++){const r=b()*6.28,a=8+b()*(le*.6);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<ue.length;c++){const l=ue[c].x-e,h=ue[c].z-n;if(l*l+h*h<16){i=!1;break}}if(i)break}if(i){kl(e,n,3);const o=dy(e,n);o.group.position.y=ne(e,n),Ue.push(o)}}}function Jd(s,t){const e=1+os*1.5,n=Xs*.03,i=Oo*.03;for(let o=0;o<ue.length;o++){const r=ue[o],a=r.x*.1+r.z*.13;r.group.rotation.z=Math.sin(t*.3+a)*.004*e+n*.15,r.group.rotation.x=Math.sin(t*.25+a+1)*.003*e+i*.15}for(let o=0;o<rh.length;o++)KM(rh[o],t,e,n,i,et.pos.x,et.pos.z);for(let o=0;o<jo.length;o++){const r=jo[o];r.group.rotation.z=Math.sin(t*.8+r.phase)*.03*e+n,r.group.rotation.x=Math.sin(t*.6+r.phase+1)*.02*e+i}for(let o=0;o<jn.length;o++){const r=jn[o],a=Math.sin(t*1+r.phase)*.5+.5;r.petalMat.emissiveIntensity=(.3+a*.5)*Ce,r.group.rotation.z=Math.sin(t*.9+r.phase)*.04*e+n*.5}for(let o=0;o<ah.length;o++){const r=ah[o];r.group.rotation.z=Math.sin(t*1.1+r.phase)*r.swayAmp*e+n,r.group.rotation.x=Math.sin(t*.8+r.phase+2)*r.swayAmp*.5*e+i}}function Qd(s,t){for(let e=0;e<no.length;e++){const n=no[e],i=n.group,o=i.position.x,r=i.position.z;if(n._stT-=s,n._stT<=0)if(Ii)n._state="display",n._stT=10+Math.random()*15;else{const h=Math.random();h<.5?(n._state="drift",n._stT=20+Math.random()*30):h<.75?(n._state="pulse",n._stT=8+Math.random()*12):(n._state="migrate",n._migrateAng=Math.random()*6.28,n._stT=15+Math.random()*20)}switch(Ii&&n._state!=="display"&&(n._state="display",n._stT=10,ls("jelly",{x:o,z:r},et.pos)),n._state){case"drift":{n.driftAng+=s*.15;const h=8+Math.sin(t*.1+n.phase)*4,u=n.homeX+Math.cos(n.driftAng)*h,f=n.homeZ+Math.sin(n.driftAng)*h;i.position.x+=(u-o)*s*.3,i.position.z+=(f-r)*s*.3,i.position.y=n.floatY+Math.sin(t*n.wobble+n.phase)*1.5;break}case"pulse":{n.driftAng+=s*.08,i.position.x+=Math.cos(n.driftAng)*s*.3,i.position.z+=Math.sin(n.driftAng)*s*.3,i.position.y=n.floatY+Math.sin(t*n.wobble+n.phase)*1,n._pulseSync=Math.sin(t*2+Math.floor(e/2)*Math.PI)*.5+.5;break}case"migrate":{i.position.x+=Math.cos(n._migrateAng)*s*1,i.position.z+=Math.sin(n._migrateAng)*s*1,i.position.y=n.floatY+Math.sin(t*n.wobble+n.phase)*.8,i.position.x*i.position.x+i.position.z*i.position.z>le*.8*(le*.8)&&(n._migrateAng+=Math.PI);break}case"display":{n.driftAng+=s*.4,i.position.x+=Math.cos(n.driftAng)*s*.8,i.position.z+=Math.sin(n.driftAng)*s*.8,i.position.y=n.floatY+Math.sin(t*2+n.phase)*2;break}}n._state==="pulse"&&Math.random()<.003&&ls("jelly",{x:o,z:r},et.pos);const a=Math.sin(t*1.2+n.phase)*.5+.5;let c=1,l=0;n._state==="pulse"?(c=1+n._pulseSync*1.5,l=n._pulseSync*.15):n._state==="display"&&(c=1.5+Math.sin(t*4+n.phase)*.8,l=.15),n.bellMat.emissiveIntensity=(.4+a*.8)*Ce*c,n.bellMat.opacity=.35+a*.25+l,i.rotation.y+=s*.2;for(let h=2;h<i.children.length;h++)i.children[h].rotation.x=Math.sin(t*2+h+n.phase)*.15,i.children[h].rotation.z=Math.sin(t*1.5+h*.7+n.phase)*.1}}function tp(s,t){const e=Pe.ShiftLeft||Pe.ShiftRight||tr;for(let n=0;n<Wn.length;n++){const i=Wn[n],o=i.group,r=o.position.x,a=o.position.z,c=r-et.pos.x,l=a-et.pos.z,h=c*c+l*l;if(i.state!=="startled"&&i.state!=="following"&&i.state!=="huddle"){const g=e?3.5:2;let _=h<g*g;if(!_)for(let d=0;d<$n.length;d++){if($n[d].state!=="flee")continue;const m=$n[d].group.position.x-r,y=$n[d].group.position.z-a;if(m*m+y*y<25){_=!0;break}}_&&(i.state="startled",i._scaredT=.6+Math.random()*.5,i.wanderAng=Math.atan2(c,l),i.hopTimer=0,ls("puff",{x:r,z:a},et.pos))}if(Ii&&i.state!=="startled"&&i.state!=="huddle"){let g=1/0,_=-1;for(let d=0;d<Wn.length;d++){if(d===n)continue;const m=Wn[d].group.position.x-r,y=Wn[d].group.position.z-a,v=m*m+y*y;v<g&&(g=v,_=d)}_>=0&&g>1&&(i.state="huddle",i._huddleTarget=_)}eo>8&&h<144&&i.state==="idle"&&Math.random()<.001&&(i.state="following",i._followT=10+Math.random()*10);const u=r-i._lastTX,f=a-i._lastTZ;switch(u*u+f*f>.25&&(i._baseY=ne(r,a),i._lastTX=r,i._lastTZ=a),i.state){case"idle":{i.idleTimer-=s,o.position.y=i._baseY+Math.sin(t*2+i.phase)*.02,o.rotation.y+=Math.sin(t*.5+i.phase)*s*.3,Math.random()<.001&&ls("puff",{x:r,z:a},et.pos),i.idleTimer<=0&&(i.state="hop",i.wanderAng+=(Math.random()-.5)*1.5,i.hopTimer=0);break}case"hop":{i.hopTimer+=s;const _=i.hopTimer/1.2;if(_>=1)i.state="idle",i.idleTimer=1.5+Math.random()*3,o.position.y=i._baseY;else{o.position.y=i._baseY+Math.sin(_*Math.PI)*.3,o.position.x+=Math.sin(i.wanderAng)*i.speed*s,o.position.z+=Math.cos(i.wanderAng)*i.speed*s;const d=1-Math.sin(_*Math.PI)*.15,m=1+Math.sin(_*Math.PI)*.2;o.scale.set(d,m,d),o.rotation.y=i.wanderAng}break}case"startled":{i._scaredT-=s,i.hopTimer+=s*1.5;const g=Math.min(i.hopTimer/.8,1);o.position.y=i._baseY+Math.sin(g*Math.PI)*.5,o.position.x+=Math.sin(i.wanderAng)*i.speed*2*s,o.position.z+=Math.cos(i.wanderAng)*i.speed*2*s,o.scale.set(.85,1.3,.85),i._scaredT<=0&&(i.state="idle",i.idleTimer=3+Math.random()*3,o.position.y=i._baseY,o.scale.set(1,1,1));break}case"following":{if(i._followT-=s,h>225||eo<3||i._followT<=0){i.state="idle",i.idleTimer=2;break}if(i.wanderAng=Math.atan2(et.pos.x-r,et.pos.z-a),h>9){i.hopTimer+=s;const g=i.hopTimer%1.5/1.5;o.position.y=i._baseY+Math.sin(g*Math.PI)*.2,o.position.x+=Math.sin(i.wanderAng)*i.speed*.4*s,o.position.z+=Math.cos(i.wanderAng)*i.speed*.4*s}else o.position.y=i._baseY+Math.sin(t*3+i.phase)*.03;o.rotation.y=i.wanderAng;break}case"huddle":{if(!Ii){i.state="idle",i.idleTimer=2;break}const g=Wn[i._huddleTarget];if(g){const _=g.group.position.x-r,d=g.group.position.z-a,m=Math.sqrt(_*_+d*d);m>.5&&(o.position.x+=_/m*i.speed*.5*s,o.position.z+=d/m*i.speed*.5*s)}o.rotation.z=Math.sin(t*8)*.05,o.position.y=i._baseY;break}}if(i._blinkTimer-=s,i._blinkTimer<=0)if(i._blinkState===0){for(let g=0;g<i.eyes.length;g++)i.eyes[g].scale.y=.1;i._blinkState=1,i._blinkTimer=.08+Math.random()*.06}else{for(let g=0;g<i.eyes.length;g++)i.eyes[g].scale.y=1;i._blinkState=0,i._blinkTimer=2+Math.random()*5}for(let g=0;g<i.ears.length;g++){const _=i.ears[g];_.mesh.rotation.z=_.baseRotZ+Math.sin(t*3.5+_.side*1.2+i.phase)*.08}i.tail.position.y=.38+Math.sin(t*4+i.phase)*.015,o.position.x*o.position.x+o.position.z*o.position.z>le*.85*(le*.85)&&(i.wanderAng+=Math.PI)}}function ep(s,t){const e=Pe.ShiftLeft||Pe.ShiftRight||tr;for(let n=0;n<$n.length;n++){const i=$n[n],o=i.group,r=o.position.x,a=o.position.z,c=r-et.pos.x,l=a-et.pos.z,h=c*c+l*l,u=Math.atan2(c,l),f=e?18:12,p=f*f,g=e?10:mM,_=g*g,d=r-i._lastTX,m=a-i._lastTZ;d*d+m*m>.25&&(i._baseY=ne(r,a),i._lastTX=r,i._lastTZ=a);const y=i._baseY;if(i.state!=="flee"&&i.state!=="alert"&&i.state!=="watching"){const S={x:r,z:a},T={x:et.pos.x,z:et.pos.z};h<_||pw(S,T,g,e)?(i.state="flee",i.wanderAng=u,i.fleeTimer=2.5+Math.random()*2,i._zigTimer=0,ls("deer",S,et.pos)):(h<p||dw(S,i.wanderAng,T,f,Math.PI*.5))&&(i.state="alert",i._stT=1+Math.random()*1.5,ls("deer",S,et.pos))}let v=i.speed,x=!1;switch(i.state){case"walk":{if(x=!0,i.walkTimer-=s,i.walkTimer<=0){const T=Math.random();if(T<.25)i.state="pause",i.pauseTimer=2+Math.random()*3;else if(T<.4)i.state="graze",i._stT=3+Math.random()*4;else if(T<.5&&Ue.length>0){i.state="drink",i._stT=8;let w=1/0;for(let M=0;M<Ue.length;M++){const P=Ue[M].x-r,N=Ue[M].z-a,D=P*P+N*N;D<w&&(w=D,i._drinkTgt=Ue[M])}}else T<.55?(i.state="rest",i._stT=5+Math.random()*5):(i.wanderAng+=(Math.random()-.5)*1.2,i.walkTimer=3+Math.random()*5)}if((r-i.homeX)*(r-i.homeX)+(a-i.homeZ)*(a-i.homeZ)>400){const T=Math.atan2(i.homeX-r,i.homeZ-a);i.wanderAng+=(T-i.wanderAng)*s*.5}break}case"pause":{i.pauseTimer-=s,i.headLook=Math.sin(t*.6)*.4,i.pauseTimer<=0&&(i.state="walk",i.walkTimer=3+Math.random()*5);break}case"graze":{i._stT-=s,i.headBob=-.5,i._stT<=0&&(i.state="walk",i.walkTimer=2+Math.random()*4,i.headBob=0);break}case"drink":{if(i._stT-=s,i._drinkTgt){const S=i._drinkTgt.x-r,T=i._drinkTgt.z-a;Math.sqrt(S*S+T*T)>2?(i.wanderAng=Math.atan2(S,T),x=!0,v=i.speed*.7):i.headBob=-.6}i._stT<=0&&(i.state="walk",i.walkTimer=3+Math.random()*4,i.headBob=0,i._drinkTgt=null);break}case"rest":{i._stT-=s,o.position.y=Math.max(y-.3,o.position.y-s*.5),i._stT<=0&&(i.state="walk",i.walkTimer=2+Math.random()*3);break}case"alert":{i._stT-=s,h<_?(i.state="flee",i.wanderAng=u,i.fleeTimer=2.5+Math.random()*2):i._stT<=0&&(h<f*1.2*(f*1.2)?(i.state="watching",i._stT=3+Math.random()*3):(i.state="walk",i.walkTimer=2+Math.random()*3));break}case"watching":{i._stT-=s,x=!0,v=i.speed*.3,i.wanderAng=u,h<_?(i.state="flee",i.wanderAng=u,i.fleeTimer=2.5+Math.random()*2):(h>f*1.5*(f*1.5)||i._stT<=0)&&(i.state="walk",i.walkTimer=2+Math.random()*4);break}case"flee":{x=!0,v=i.speed*gM,i.fleeTimer-=s,i._zigTimer-=s,i._zigTimer<=0&&(i._zigDir*=-1,i._zigTimer=.4+Math.random()*.4),i.wanderAng=u+i._zigDir*.3;const S=gw({x:r,z:a},i.wanderAng,ue,3,1.5);S.x*S.x+S.z*S.z>.01&&(i.wanderAng+=Math.atan2(S.z,S.x)*.3);const T=mw({x:r,z:a},8);(T.x!==0||T.z!==0)&&(i.wanderAng=Math.atan2(T.z,T.x)),(i.fleeTimer<=0||h>f*2*(f*2))&&(i.state="walk",i.walkTimer=3+Math.random()*5);break}}if(x&&(o.position.x+=Math.sin(i.wanderAng)*v*s,o.position.z+=Math.cos(i.wanderAng)*v*s,i.legCycle+=s*v*3),o.position.x*o.position.x+o.position.z*o.position.z>le*.9*(le*.9)&&(i.wanderAng=Math.atan2(-o.position.x,-o.position.z)),i.state!=="rest"){const S=y-o.position.y;Math.abs(S)>.01?o.position.y+=Math.sign(S)*Math.min(Math.abs(S),s*2):o.position.y=y}if(o.rotation.y=i.wanderAng,i.state==="alert"||i.state==="watching"){const S=u-i.wanderAng;i.headLook+=(S*.5-i.headLook)*s*3}const E=i.headBob||0;i.neckPivot.rotation.x+=(E-i.neckPivot.rotation.x)*s*3,i.neckPivot.rotation.y+=(i.headLook-i.neckPivot.rotation.y)*s*4,x&&i.state!=="graze"&&i.state!=="drink"&&(i.neckPivot.rotation.x+=Math.sin(i.legCycle*2)*.05);for(let S=0;S<i.legPivots.length;S++){const T=i.legPivots[S];if(x){const w=T.isFront?0:Math.PI,M=T.side>0?Math.PI:0,P=Math.sin(i.legCycle+w+M)*.4*(v/i.speed);T.upper.rotation.x=P,T.lower.rotation.x=Math.max(0,-P*.6)}else i.state==="rest"&&o.position.y<-.1?(T.upper.rotation.x+=(.8-T.upper.rotation.x)*s*2,T.lower.rotation.x+=(1-T.lower.rotation.x)*s*2):(T.upper.rotation.x*=.9,T.lower.rotation.x*=.9)}i.tailPivot.rotation.x=Math.sin(t*1.5+i.phase)*.15,i.state==="flee"&&(i.tailPivot.rotation.x+=.3),i.state==="alert"?i.tailPivot.rotation.z=Math.sin(t*6)*.1:i.tailPivot.rotation.z*=.9,i.mat.emissiveIntensity=(.3+Math.sin(t*.8+i.phase)*.2)*Ce,i.headLook*=.98}}function np(s,t){for(let e=0;e<io.length;e++){const n=io[e],i=n.group,o=i.position.x,r=i.position.z;if(n._state==="patrol"){if(Math.random()<.002){let u=1/0,f=null;for(let p=0;p<ae.length;p++){const g=ae[p].x-o,_=ae[p].z-r,d=g*g+_*_;d<900&&d<u&&(u=d,f=ae[p])}for(let p=0;p<Yn.length;p++){if(Yn[p].glowIntensity<.3)continue;const g=Yn[p].x-o,_=Yn[p].z-r,d=g*g+_*_;d<900&&d<u&&(u=d,f=Yn[p])}f&&(n._state="attracted",n._attractTarget=f,n._stT=6+Math.random()*8,ls("moth",{x:o,z:r},et.pos))}if(Math.random()<.001){let u=1/0,f=null;for(let p=0;p<ue.length;p++){const g=ue[p].x-o,_=ue[p].z-r,d=g*g+_*_;d<400&&d<u&&(u=d,f=ue[p])}f&&(n._state="rest",n._restTree=f,n._stT=4+Math.random()*6)}}switch(n._state){case"patrol":{n.orbitAng+=s*.4;const u=n.centerX+Math.cos(n.orbitAng)*n.orbitR,f=n.centerZ+Math.sin(n.orbitAng)*n.orbitR;i.position.x+=(u-o)*s*1.5,i.position.z+=(f-r)*s*1.5,i.position.y=n.floatY+Math.sin(t*.7+n.phase)*.8,i.rotation.y=n.orbitAng+Math.PI/2;break}case"attracted":{if(n._stT-=s,!n._attractTarget||n._stT<=0){n._state="patrol",n._attractTarget=null;break}n.orbitAng+=s*.8;const u=n._attractTarget,f=Math.max(.5,n._stT*.4),p=u.x+Math.cos(n.orbitAng)*f,g=u.z+Math.sin(n.orbitAng)*f;i.position.x+=(p-o)*s*2,i.position.z+=(g-r)*s*2,i.position.y+=(2-i.position.y)*s*.5,i.rotation.y=n.orbitAng+Math.PI/2;break}case"rest":{if(n._stT-=s,!n._restTree||n._stT<=0){n._state="patrol",n._restTree=null,n.centerX=i.position.x,n.centerZ=i.position.z;break}const u=n._restTree,f=u.x+.5-o,p=u.z+.5-r,g=Math.sqrt(f*f+p*p);g>.3&&(i.position.x+=f/g*s*2,i.position.z+=p/g*s*2),i.position.y+=(2.5-i.position.y)*s*1.5,i.rotation.y=Math.atan2(f,p);break}}const a=n._state==="rest"?.05:.4,c=Math.sin(t*n.flapSpeed+n.phase)*a;for(let u=0;u<i._wingPivots.length;u++){const f=i._wingPivots[u];f.pivot.rotation.z=c*f.side}const l=Math.sin(t*1.5+n.phase)*.5+.5,h=n._state==="attracted"?.4:0;n.wingMat.emissiveIntensity=(.5+l*.6+h)*Ce,n.wingMat.opacity=.45+l*.25}}function Cw(s,t){const e=Pe.ShiftLeft||Pe.ShiftRight||tr;let n=null;if(eo>5&&(An==="SEEK"||An==="RISING")){let i=1/0;for(let o=0;o<Mn.length;o++){if(Mn[o].found)continue;const r=Mn[o].x-et.pos.x,a=Mn[o].z-et.pos.z,c=r*r+a*a;c<i&&(i=c,n=Mn[o])}}for(let i=0;i<Ea.length;i++){const o=Ea[i],r=t*.5+o.phase+i/dd*6.28,a=e?4+i*2:1.5+i*.8,c=e?3+i:1.2+Math.sin(t*.7+o.phase)*.5;if(o.targetX=et.pos.x+Math.cos(r)*a,o.targetY=et.pos.y-Ia+c,o.targetZ=et.pos.z+Math.sin(r)*a,i===0&&n){const g=Math.min((eo-5)/3,.6);o.targetX+=(n.x-et.pos.x)*g,o.targetZ+=(n.z-et.pos.z)*g,o.targetY+=.5}const l=e?.8:2.5;o.velX+=(o.targetX-o.group.position.x)*l*s,o.velY+=(o.targetY-o.group.position.y)*l*s,o.velZ+=(o.targetZ-o.group.position.z)*l*s,o.velX*=.92,o.velY*=.92,o.velZ*=.92,o.group.position.x+=o.velX*s*4,o.group.position.y+=o.velY*s*4,o.group.position.z+=o.velZ*s*4;const h=Math.sin(t*2+o.phase)*.5+.5;o.glowMat.opacity=.3+h*.4,o.hazeMat.opacity=.08+h*.12;const u=t*(2.5+i*.5)+o.phase,f=.14+Math.sin(t*1.3+o.phase)*.06;o.group.children[5].position.set(Math.cos(u)*f,Math.sin(u*1.5)*.08,Math.sin(u)*f);for(let g=0;g<o.tendrils.length;g++){const _=o.tendrils[g],d=Math.sin(t*3+g*2.1+o.phase)*.3,m=.08+Math.sin(t*2+g*1.5)*.04;_.mesh.position.x=Math.cos(_.baseAng+d)*m,_.mesh.position.z=Math.sin(_.baseAng+d)*m,_.mesh.rotation.y=_.baseAng+d,_.mesh.rotation.z=Math.PI/3+Math.sin(t*2.5+g)*.2}for(let g=0;g<o.embers.length;g++){const _=(g+1)*.08;o.embers[g].position.y=-.06-_+Math.sin(t*4+g*1.4+o.phase)*.03,o.embers[g].position.x=Math.sin(t*2.5+g*2+o.phase)*.06,o.embers[g].material.opacity=.2+Math.sin(t*5+g*1.7)*.15}o.facet.rotation.y+=s*1.5,o.facet.rotation.x+=s*.7,o.halo.rotation.z+=s*.3,o.halo2.rotation.y+=s*.2}}function Pw(s,t){for(let e=0;e<Yn.length;e++){const n=Yn[e],i=n.x-et.pos.x,o=n.z-et.pos.z,a=i*i+o*o<(Ul+.5)*(Ul+.5),c=a?1:0;n.glowIntensity+=(c-n.glowIntensity)*s*3,n.discMat.opacity=n.glowIntensity*.25*(.6+Math.sin(t*2+n.phase)*.4),n.mushMat.emissiveIntensity=(.2+n.glowIntensity*.8)*Ce,a&&et.vel.y>0&&et.vel.y<=da+.5&&(et.vel.y=da+fM,n.glowIntensity=1.5,fw());const l=.08+n.glowIntensity*.25;n.sporeMat.opacity=l;for(let h=0;h<n.spores.length;h++){const u=n.spores[h];u.drift+=s*.3,u.mesh.position.y+=u.speed*s*(.5+n.glowIntensity),u.mesh.position.x=u.baseX+Math.sin(t*.8+u.drift)*.15,u.mesh.position.z=u.baseZ+Math.cos(t*.6+u.drift)*.12,u.mesh.position.y>.8&&(u.mesh.position.y=.03),u.mesh.scale.setScalar(.6+Math.sin(t*2+h)*.4)}for(let h=0;h<n.glowWorms.length;h++){const u=Math.sin(t*1.5+h*1.3+n.phase)*.5+.5;n.glowWorms[h].material.opacity=.1+u*.4+n.glowIntensity*.3}}}function Iw(s,t){for(let e=0;e<Xn.length;e++){const n=Xn[e];if(n.popped){if(n.popTimer-=s,n.popTimer<=0){n.popped=!1,n.group.visible=!0;const h=b()*6.28,u=8+b()*le*.5;n.homeX=Math.cos(h)*u,n.homeZ=Math.sin(h)*u,n.floatY=.5+b()*4,n.group.position.set(n.homeX,n.floatY,n.homeZ)}continue}n.driftAng+=s*.2;const i=n.homeX+Math.sin(n.driftAng)*3,o=n.homeZ+Math.cos(n.driftAng*.7)*3;n.group.position.x+=(i-n.group.position.x)*s*.5,n.group.position.z+=(o-n.group.position.z)*s*.5,n.group.position.y=n.floatY+Math.sin(t*.6+n.phase)*n.bobAmp;const r=(t*.1+n.phase)%1;n.shellMat.color.setRGB(Math.sin(r*6.28)*.15+.7,Math.sin(r*6.28+2.09)*.15+.7,Math.sin(r*6.28+4.19)*.15+.8),n.shellMat.opacity=.18+Math.sin(t*1.5+n.phase)*.08;const a=n.group.position.x-et.pos.x,c=n.group.position.y-et.pos.y,l=n.group.position.z-et.pos.z;a*a+c*c+l*l<nf*nf*n.sc*n.sc&&(n.popped=!0,n.popTimer=8+Math.random()*8,n.group.visible=!1,Fy(n.group.position.x,n.group.position.y,n.group.position.z,6),uw(n.group.position,et.pos))}}function Lw(s,t){const e=Fh();for(let n=0;n<Ue.length;n++){const i=Ue[n],o=.015+e*.01;for(let u=0;u<i.pads.length;u++)i.pads[u].mesh.position.y=.05+Math.sin(t*(.8+e*.4)+i.pads[u].phase)*o;const r=e*.08;i.waterMat.emissiveIntensity=(.15+r+Math.sin(t*1+i.phase)*.1)*Ce;const a=Math.sin(t*1.2+i.phase)*.5+.5;i.flMat.emissiveIntensity=(.3+a*.5)*Ce;const c=.25+e*.2,l=.12+e*.08;for(let u=0;u<i.ripples.length;u++){const f=i.ripples[u],p=(t*c+f.phase)%1,g=.2+p*i.pondR*.8;f.mesh.scale.setScalar(g),f.mesh.material.opacity=(1-p)*l}const h=1+e*.5;for(let u=0;u<i.tadpoles.length;u++){const f=i.tadpoles[u];f.ang+=f.speed*h*s;const p=Math.cos(f.ang)*f.orbR,g=Math.sin(f.ang)*f.orbR;f.body.position.x=p,f.body.position.z=g,f.body.rotation.y=f.ang+Math.PI/2;const _=.02;f.tail.position.x=p-Math.cos(f.ang)*_,f.tail.position.z=g-Math.sin(f.ang)*_,f.tail.rotation.y=f.ang,f.tail.rotation.z=Math.PI/2+Math.sin(t*(8+e*2)+u*3)*.4}}}function Dw(s,t){if(Bc-=s,Bc<=0){Bc=.5;for(let i=0;i<ae.length;i++){const o=ae[i],r=o.x-et.pos.x,a=o.z-et.pos.z;if(r*r+a*a<36){Hi={x:o.x,z:o.z},So=0;break}}}if(!Hi)return;if(So+=s*12,So>30){Hi=null,So=0;return}const e=So,n=4;for(let i=0;i<fn.length;i++){const o=fn[i],r=o.x-Hi.x,a=o.z-Hi.z,c=Math.sqrt(r*r+a*a);if(Math.abs(c-e)<n){const l=1-Math.abs(c-e)/n;o.capMat.emissiveIntensity=Math.max(o.capMat.emissiveIntensity,(o.base+l*2)*Ce)}}for(let i=0;i<jn.length;i++){const o=jn[i],r=o.group.position.x-Hi.x,a=o.group.position.z-Hi.z,c=Math.sqrt(r*r+a*a);if(Math.abs(c-e)<n){const l=1-Math.abs(c-e)/n;o.petalMat.emissiveIntensity=Math.max(o.petalMat.emissiveIntensity,(.3+l*1.5)*Ce)}}}function Uw(s,t){const e=et.pos.x,n=et.pos.z,i=Fh(),o=Ii?.6:i>.3?i*.4:0;for(let c=0;c<jn.length;c++){const l=jn[c],h=l.group.position.x,u=l.group.position.z,f=h-e,p=u-n,_=f*f+p*p<16?1:0;l._react=l._react||0,l._react+=(_-l._react)*s*(_>0?4:1.5);const d=(1+l._react*.15)*(1-o*.12),m=(1+l._react*.05)*(1-o*.15);l.group.scale.set(d,m,d),l.petalMat.emissiveIntensity+=l._react*.6*Ce*(1-o*.4)}for(let c=0;c<fn.length;c++){const l=fn[c],h=l.x-e,u=l.z-n,p=h*h+u*u<4?1:0;l._touch=l._touch||0,l._touch+=(p-l._touch)*s*(p>0?6:1.5);const g=i*.4;l.capMat.emissiveIntensity+=(l._touch*1.5+g)*Ce;const _=1+l._touch*.08;l.group.scale.set(_,1+l._touch*.04,_)}for(let c=0;c<jo.length;c++){const l=jo[c],h=l.group.position.x,u=l.group.position.z,f=h-e,p=u-n,_=f*f+p*p<2.25?.65:1;l._curl=l._curl===void 0?1:l._curl,l._curl+=(_-l._curl)*s*(_<1?4:1.5),l.group.scale.set(1+(1-l._curl)*.3,l._curl,1+(1-l._curl)*.3)}const r=Bo==="FOG_BANK"?.5:1;let a=0;for(let c=0;c<ae.length;c++){const l=ae[c],h=l.x-e,u=l.z-n;if(h*h+u*u<36)for(let f=0;f<ae.length;f++){if(c===f)continue;const p=ae[f],g=l.x-p.x,_=l.z-p.z,d=g*g+_*_;if(d<400){a++;const m=(1-Math.sqrt(d)/20)*.8*r;p.mat.emissiveIntensity+=m*Ce,p.light&&(p.light.intensity+=m*.3*Ce)}}}return a}let Vr="EXPLORE",kc=0,Gc=0;function Nw(s,t){let e=!1;for(let h=0;h<ae.length;h++){const u=ae[h].x-et.pos.x,f=ae[h].z-et.pos.z;if(u*u+f*f<64){e=!0;break}}Vr=e?"NEAR_CRYSTAL":"EXPLORE",kc+=s;const n=Fh(),i=Math.max(.2,1-n*.8),o=(Vr==="NEAR_CRYSTAL"?.08:.25)/i,r=Math.floor((Vr==="NEAR_CRYSTAL"?120:100)*i);if(kc>o&&(kc=0,Fd(0,t)<r))if(Vr==="NEAR_CRYSTAL")for(let u=0;u<ae.length;u++){const f=ae[u].x-et.pos.x,p=ae[u].z-et.pos.z;f*f+p*p<100&&Kr(ae[u].x,ne(ae[u].x,ae[u].z)+1,ae[u].z,3+Math.random()*4)}else if(Math.random()<.3&&jn.length>0){const u=jn[Math.floor(Math.random()*jn.length)];if(u._react>.3){const f=u.group.position.x,p=u.group.position.z;Kr(f+(Math.random()-.5)*2,ne(f,p)+.5,p+(Math.random()-.5)*2,4+Math.random()*6)}}else{const u=Math.random()*6.28,f=5+Math.random()*25,p=et.pos.x+Math.cos(u)*f,g=et.pos.z+Math.sin(u)*f;Kr(p,ne(p,g),g,6+Math.random()*10)}if(Gc+=s,Gc>.2){Gc=0;for(let h=0;h<fn.length;h++){const u=fn[h],f=u.x-et.pos.x,p=u.z-et.pos.z;f*f+p*p<200&&Math.random()<.15&&Ay(u.x,.6*u.group.scale.x,u.z)}}for(let h=0;h<fn.length;h++){const u=fn[h],f=Math.sin(t*u.speed+u.phase)*.5+.5;u.capMat.emissiveIntensity=u.base*(.5+f*.8)*Ce}for(let h=0;h<ae.length;h++){const u=ae[h],f=Math.sin(t*.6+u.phase)*.5+.5;u.mat.emissiveIntensity=(1+f*1.5)*Ce,u.group.children[0].rotation.y+=s*.15,u.light&&(u.light.intensity=(.3+f*.4)*Ce)}if(!bi.length)for(let h=0;h<ae.length;h++)bi.push({idx:h,dist:0});const a=et.pos.x-Mf,c=et.pos.z-yf;if(a*a+c*c>1){Mf=et.pos.x,yf=et.pos.z;for(let h=0;h<ae.length;h++){const u=ae[h],f=u.x-et.pos.x,p=u.z-et.pos.z;bi[h].idx=h,bi[h].dist=f*f+p*p}bi.sort((h,u)=>h.dist-u.dist)}for(let h=0;h<Xi.length;h++)if(h<bi.length&&bi[h].dist<2500){const u=ae[bi[h].idx],f=Math.sin(t*.6+u.phase)*.5+.5;Xi[h].position.set(u.x,1.5,u.z),Xi[h].intensity=(1.5+f*2)*Ce,Xi[h].distance=16,Xi[h].color.setHex(G.crystal)}else Xi[h].intensity=0;if(os>.8&&Math.random()<.005)for(let h=0;h<Go.length;h++){const u=Go[h];if(!u.dispersed&&Math.random()<.1){u.dispersed=!0;for(let f=0;f<8;f++)Ad(u.x,u.h+.05,u.z);for(let f=2;f<u.group.children.length;f++)u.group.children[f].visible=!1;u.regrowTimer=15+Math.random()*10}}Qd(s,t),tp(s,t),ep(s,t),np(s,t),bd(s,t),Jd(s,t);for(let h=0;h<Ta.length;h++){const u=Ta[h];if(u.sparkles)for(let f=0;f<u.sparkles.length;f++)u.sparkles[f].material.opacity=.15+Math.sin(t*4+h*2.3+f*1.7)*.35}Cw(s,t),oy(Go,s,t,et.pos),Pw(s,t),Iw(s,t),Lw(s,t),kd(s,t,et.pos),iy(s,t),Dy(s),zy(s),Dw(s);const l=Uw(s);By(s,t),hw(s),vw(et.pos,$n,Wn,no,io,Yn,Ue,l),Mw(s)}let Fe=0,ch=!1;function Fw(){ch||(ch=!0,RM(!0),Aw())}function ip(){requestAnimationFrame(ip);const s=Math.min(pd.getDelta(),.1);Fe+=s,Vy(s);const t=$y(s,Fe,et.pos);if(Ky(s,et.pos,t,Xs,Oo),Vn>0&&(Ch.intensity+=Vn*.8,Mt.background.r=Math.min(Mt.background.r+Vn*.08,.25),Mt.background.g=Math.min(Mt.background.g+Vn*.08,.25),Mt.background.b=Math.min(Mt.background.b+Vn*.12,.35)),ow(s,os,t,Ii,Vn,Nh,et.pos,Ue),Ry(Xs,Oo),ny(Xs,Oo,os),!ch){Qe.position.set(0,Ia,0),Qe.rotation.order="YXZ",Qe.rotation.y+=s*.08,Qe.rotation.x=0;for(let e=0;e<fn.length;e++){const n=fn[e],i=Math.sin(Fe*n.speed+n.phase)*.5+.5;n.capMat.emissiveIntensity=n.base*(.5+i*.8)*Ce}for(let e=0;e<ae.length;e++){const n=ae[e];n.mat.emissiveIntensity=(1+Math.sin(Fe*.6+n.phase)*.5*1.5+.75)*Ce}Qd(s,Fe),tp(s,Fe),ep(s,Fe),np(s,Fe),bd(s,Fe),Jd(s,Fe),kd(s,Fe,et.pos);for(let e=0;e<Xn.length;e++)Xn[e].popped||(Xn[e].group.position.y=Xn[e].floatY+Math.sin(Fe*.6+Xn[e].phase)*Xn[e].bobAmp);for(let e=0;e<Ue.length;e++)for(let n=0;n<Ue[e].pads.length;n++)Ue[e].pads[n].mesh.position.y=.05+Math.sin(Fe*.8+Ue[e].pads[n].phase)*.015;for(let e=0;e<Mn.length;e++){const n=Mn[e],i=Math.sin(Fe*1.5+n.phase)*.5+.5;n.group.position.y=n.flyY+Math.sin(Fe*.8+n.phase)*.3,n.glowMat.opacity=.3+i*.4}rf();return}YM(s),Nw(s,Fe),Fd(s,Fe),Cy(s),Qe.position.copy(et.pos),Qe.position.y+=Td,Qe.rotation.order="YXZ",Qe.rotation.y=Zo,Qe.rotation.x=ss,bw(s,et.pos),rf()}try{kl(0,0,5),OM(),Hy({scene:Mt,moon:Rn,moon2:Cn,hemiLight:Ch,playerLight:Ph}),Rw(),NM(),WM(ue,Ta),XM(df),VM(s=>{let t=!1;for(let e=0;e<Ue.length;e++){const n=Ue[e].x-et.pos.x,i=Ue[e].z-et.pos.z;if(n*n+i*i<16){t=!0;break}}aw(s,t),Math.random()<.4&&df(et.pos.x,et.pos.z,1)},()=>cw(),s=>lw(s)),Zy(),jy(),by(150),Ey(60),EM(),Py(hM),Ly(20),ey(40),Ny(30),vy(),wy(),Sy(),sw(),_w(),Sw(),Tw(),Oy({orbs:Mn,obeliskGroup:gy(),obeliskMat:xy(),obeliskGlowMat:_y(),moatMesh:My(),moatMat:yy(),rainbowArcs:jl,player:et,makeLaser:ky,orbHudEl:Ew(),deers:$n,puffs:Wn,jellies:no,moths:io}),AM(Fw);for(let s=0;s<50;s++){const t=Math.random()*6.28,e=3+Math.random()*le*.7,n=Math.cos(t)*e,i=Math.sin(t)*e;Kr(n,ne(n,i),i,8+Math.random()*12)}console.log("✓ Init: trees="+ue.length+" mush="+fn.length+" crystals="+ae.length+" orbs="+Mn.length+" creatures="+(no.length+Wn.length+$n.length+io.length)+" wisps="+Ea.length+" dandelions="+Go.length+" fairyRings="+Yn.length+" bubbles="+Xn.length+" ponds="+Ue.length+" scene="+Mt.children.length),ip()}catch(s){console.error("INIT FAILED:",s),document.body.innerHTML='<div style="color:red;padding:30px;font-family:monospace"><h2>Init Failed</h2><pre>'+(s.stack||s.message)+"</pre></div>"}
