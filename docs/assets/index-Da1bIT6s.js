(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bu="172",cm=0,lf=1,lm=2,ip=1,sp=2,Ii=3,os=0,Sn=1,Dt=2,Fi=0,Eo=1,le=2,hf=3,uf=4,hm=5,As=100,um=101,fm=102,dm=103,pm=104,mm=200,gm=201,xm=202,vm=203,jl=204,Kl=205,_m=206,Mm=207,ym=208,wm=209,Sm=210,bm=211,Tm=212,Em=213,Am=214,Jl=0,Ql=1,th=2,Fo=3,eh=4,nh=5,ih=6,sh=7,op=0,Rm=1,Cm=2,ss=0,Pm=1,Im=2,Lm=3,rp=4,Dm=5,Um=6,Nm=7,ap=300,Oo=301,Bo=302,oh=303,rh=304,Rc=306,nc=1e3,Cs=1001,ah=1002,Fn=1003,zm=1004,jr=1005,xi=1006,Oc=1007,Ps=1008,Hi=1009,cp=1010,lp=1011,Dr=1012,Tu=1013,Fs=1014,vi=1015,Oi=1016,Eu=1017,Au=1018,Go=1020,hp=35902,up=1021,fp=1022,ni=1023,dp=1024,pp=1025,Ao=1026,ko=1027,Ru=1028,Cu=1029,mp=1030,Pu=1031,Iu=1033,ka=33776,Ha=33777,Va=33778,Wa=33779,ch=35840,lh=35841,hh=35842,uh=35843,fh=36196,dh=37492,ph=37496,mh=37808,gh=37809,xh=37810,vh=37811,_h=37812,Mh=37813,yh=37814,wh=37815,Sh=37816,bh=37817,Th=37818,Eh=37819,Ah=37820,Rh=37821,Xa=36492,Ch=36494,Ph=36495,gp=36283,Ih=36284,Lh=36285,Dh=36286,Fm=3200,Om=3201,xp=0,Bm=1,ts="",wn="srgb",Ho="srgb-linear",ic="linear",pe="srgb",Ws=7680,ff=519,Gm=512,km=513,Hm=514,vp=515,Vm=516,Wm=517,Xm=518,qm=519,Uh=35044,Re=35048,df="300 es",Ni=2e3,sc=2001;class $o{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bc=Math.PI/180,Nh=180/Math.PI;function Bi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[s&255]+je[s>>8&255]+je[s>>16&255]+je[s>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function $t(s,t,e){return Math.max(t,Math.min(e,s))}function Ym(s,t){return(s%t+t)%t}function Gc(s,t,e){return(1-e)*s+e*t}function pi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function me(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,i,o,r,a,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,l,c)}set(t,e,n,i,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=i[0],f=i[3],m=i[6],w=i[1],_=i[4],M=i[7],A=i[2],E=i[5],T=i[8];return o[0]=r*x+a*w+l*A,o[3]=r*f+a*_+l*E,o[6]=r*m+a*M+l*T,o[1]=c*x+h*w+u*A,o[4]=c*f+h*_+u*E,o[7]=c*m+h*M+u*T,o[2]=d*x+p*w+g*A,o[5]=d*f+p*_+g*E,o[8]=d*m+p*M+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+i*o*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,d=a*l-h*o,p=c*o-r*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*r)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*o-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(kc.makeScale(t,e)),this}rotate(t){return this.premultiply(kc.makeRotation(-t)),this}translate(t,e){return this.premultiply(kc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kc=new Wt;function _p(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function oc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zm(){const s=oc("canvas");return s.style.display="block",s}const pf={};function mo(s){s in pf||(pf[s]=!0,console.warn(s))}function $m(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function jm(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Km(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const mf=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gf=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jm(){const s={enabled:!0,workingColorSpace:Ho,spaces:{},convert:function(i,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===pe&&(i.r=Gi(i.r),i.g=Gi(i.g),i.b=Gi(i.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===pe&&(i.r=Ro(i.r),i.g=Ro(i.g),i.b=Ro(i.b))),i},fromWorkingColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},toWorkingColorSpace:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ts?ic:this.spaces[i].transfer},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,r){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ho]:{primaries:t,whitePoint:n,transfer:ic,toXYZ:mf,fromXYZ:gf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:mf,fromXYZ:gf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),s}const re=Jm();function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ro(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Xs;class Qm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xs===void 0&&(Xs=oc("canvas")),Xs.width=t.width,Xs.height=t.height;const n=Xs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=oc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=Gi(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gi(e[n]/255)*255):e[n]=Gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tg=0;class Mp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Bi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Hc(i[r].image)):o.push(Hc(i[r]))}else o=Hc(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Hc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eg=0;class en extends $o{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,n=Cs,i=Cs,o=xi,r=Ps,a=ni,l=Hi,c=en.DEFAULT_ANISOTROPY,h=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Bi(),this.name="",this.source=new Mp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ap)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nc:t.x=t.x-Math.floor(t.x);break;case Cs:t.x=t.x<0?0:1;break;case ah:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nc:t.y=t.y-Math.floor(t.y);break;case Cs:t.y=t.y<0?0:1;break;case ah:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=ap;en.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,i=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],f=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,M=(p+1)/2,A=(m+1)/2,E=(h+d)/4,T=(u+x)/4,b=(g+f)/4;return _>M&&_>A?_<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(_),i=E/n,o=T/n):M>A?M<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(M),n=E/i,o=b/i):A<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(A),n=T/o,i=b/o),this.set(n,i,o,e),this}let w=Math.sqrt((f-g)*(f-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(f-g)/w,this.y=(u-x)/w,this.z=(d-h)/w,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ng extends $o{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new en(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Mp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends ng{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yp extends en{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ig extends en{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=o[r+0],p=o[r+1],g=o[r+2],x=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==p||h!==g){let f=1-a;const m=l*d+c*p+h*g+u*x,w=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const A=Math.sqrt(_),E=Math.atan2(A,m*w);f=Math.sin(f*E)/A,a=Math.sin(a*E)/A}const M=a*w;if(l=l*f+d*M,c=c*f+p*M,h=h*f+g*M,u=u*f+x*M,f===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=o[r],d=o[r+1],p=o[r+2],g=o[r+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(o/2),d=l(n/2),p=l(i/2),g=l(o/2);switch(r){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(o-c)*p,this._z=(r-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(o+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(o-c)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(r-i)/p,this._x=(o+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+i*c-o*l,this._y=i*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*n),h=2*(a*e-o*i),u=2*(o*n-r*e);return this.x=e+l*c+r*u-a*h,this.y=n+l*h+a*c-o*u,this.z=i+l*u+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-o*a,this.y=o*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vc.copy(this).projectOnVector(t),this.sub(Vc)}reflect(t){return this.sub(Vc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vc=new N,xf=new rs;class ks{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Qn):Qn.fromBufferAttribute(o,r),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(t.matrixWorld),this.union(Kr)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tr),Jr.subVectors(this.max,tr),qs.subVectors(t.a,tr),Ys.subVectors(t.b,tr),Zs.subVectors(t.c,tr),Wi.subVectors(Ys,qs),Xi.subVectors(Zs,Ys),us.subVectors(qs,Zs);let e=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-us.z,us.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,us.z,0,-us.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-us.y,us.x,0];return!Wc(e,qs,Ys,Zs,Jr)||(e=[1,0,0,0,1,0,0,0,1],!Wc(e,qs,Ys,Zs,Jr))?!1:(Qr.crossVectors(Wi,Xi),e=[Qr.x,Qr.y,Qr.z],Wc(e,qs,Ys,Zs,Jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ei=[new N,new N,new N,new N,new N,new N,new N,new N],Qn=new N,Kr=new ks,qs=new N,Ys=new N,Zs=new N,Wi=new N,Xi=new N,us=new N,tr=new N,Jr=new N,Qr=new N,fs=new N;function Wc(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){fs.fromArray(s,o);const a=i.x*Math.abs(fs.x)+i.y*Math.abs(fs.y)+i.z*Math.abs(fs.z),l=t.dot(fs),c=e.dot(fs),h=n.dot(fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const sg=new ks,er=new N,Xc=new N;class Hs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):sg.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;er.subVectors(t,this.center);const e=er.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(er,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(er.copy(t.center).add(Xc)),this.expandByPoint(er.copy(t.center).sub(Xc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new N,qc=new N,ta=new N,qi=new N,Yc=new N,ea=new N,Zc=new N;class Lu{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){qc.copy(t).add(e).multiplyScalar(.5),ta.copy(e).sub(t).normalize(),qi.copy(this.origin).sub(qc);const o=t.distanceTo(e)*.5,r=-this.direction.dot(ta),a=qi.dot(this.direction),l=-qi.dot(ta),c=qi.lengthSq(),h=Math.abs(1-r*r);let u,d,p,g;if(h>0)if(u=r*l-a,d=r*a-l,g=o*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,p=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-l),o),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-o,-l),o),p=d*(d+2*l)+c):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-l),o),p=-u*u+d*(d+2*l)+c);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(qc).addScaledVector(ta,d),p}intersectSphere(t,e){Ai.subVectors(t.center,this.origin);const n=Ai.dot(this.direction),i=Ai.dot(Ai)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,n,i,o){Yc.subVectors(e,t),ea.subVectors(n,t),Zc.crossVectors(Yc,ea);let r=this.direction.dot(Zc),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;qi.subVectors(this.origin,t);const l=a*this.direction.dot(ea.crossVectors(qi,ea));if(l<0)return null;const c=a*this.direction.dot(Yc.cross(qi));if(c<0||l+c>r)return null;const h=-a*qi.dot(Zc);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,i,o,r,a,l,c,h,u,d,p,g,x,f){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,l,c,h,u,d,p,g,x,f)}set(t,e,n,i,o,r,a,l,c,h,u,d,p,g,x,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=o,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=g,m[11]=x,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/$s.setFromMatrixColumn(t,0).length(),o=1/$s.setFromMatrixColumn(t,1).length(),r=1/$s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,p=r*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-p,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-r*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=r*h,e[9]=x-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,p=r*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,p=r*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=r*l,p=r*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=r*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(og,t,rg)}lookAt(t,e,n){const i=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Yi.crossVectors(n,Pn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Yi.crossVectors(n,Pn)),Yi.normalize(),na.crossVectors(Pn,Yi),i[0]=Yi.x,i[4]=na.x,i[8]=Pn.x,i[1]=Yi.y,i[5]=na.y,i[9]=Pn.y,i[2]=Yi.z,i[6]=na.z,i[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],f=n[10],m=n[14],w=n[3],_=n[7],M=n[11],A=n[15],E=i[0],T=i[4],b=i[8],y=i[12],v=i[1],R=i[5],U=i[9],L=i[13],z=i[2],V=i[6],k=i[10],$=i[14],W=i[3],at=i[7],pt=i[11],Rt=i[15];return o[0]=r*E+a*v+l*z+c*W,o[4]=r*T+a*R+l*V+c*at,o[8]=r*b+a*U+l*k+c*pt,o[12]=r*y+a*L+l*$+c*Rt,o[1]=h*E+u*v+d*z+p*W,o[5]=h*T+u*R+d*V+p*at,o[9]=h*b+u*U+d*k+p*pt,o[13]=h*y+u*L+d*$+p*Rt,o[2]=g*E+x*v+f*z+m*W,o[6]=g*T+x*R+f*V+m*at,o[10]=g*b+x*U+f*k+m*pt,o[14]=g*y+x*L+f*$+m*Rt,o[3]=w*E+_*v+M*z+A*W,o[7]=w*T+_*R+M*V+A*at,o[11]=w*b+_*U+M*k+A*pt,o[15]=w*y+_*L+M*$+A*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],f=t[11],m=t[15];return g*(+o*l*u-i*c*u-o*a*d+n*c*d+i*a*p-n*l*p)+x*(+e*l*p-e*c*d+o*r*d-i*r*p+i*c*h-o*l*h)+f*(+e*c*u-e*a*p-o*r*u+n*r*p+o*a*h-n*c*h)+m*(-i*a*h-e*l*u+e*a*d+i*r*u-n*r*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],f=t[14],m=t[15],w=u*f*c-x*d*c+x*l*p-a*f*p-u*l*m+a*d*m,_=g*d*c-h*f*c-g*l*p+r*f*p+h*l*m-r*d*m,M=h*x*c-g*u*c+g*a*p-r*x*p-h*a*m+r*u*m,A=g*u*l-h*x*l-g*a*d+r*x*d+h*a*f-r*u*f,E=e*w+n*_+i*M+o*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=w*T,t[1]=(x*d*o-u*f*o-x*i*p+n*f*p+u*i*m-n*d*m)*T,t[2]=(a*f*o-x*l*o+x*i*c-n*f*c-a*i*m+n*l*m)*T,t[3]=(u*l*o-a*d*o-u*i*c+n*d*c+a*i*p-n*l*p)*T,t[4]=_*T,t[5]=(h*f*o-g*d*o+g*i*p-e*f*p-h*i*m+e*d*m)*T,t[6]=(g*l*o-r*f*o-g*i*c+e*f*c+r*i*m-e*l*m)*T,t[7]=(r*d*o-h*l*o+h*i*c-e*d*c-r*i*p+e*l*p)*T,t[8]=M*T,t[9]=(g*u*o-h*x*o-g*n*p+e*x*p+h*n*m-e*u*m)*T,t[10]=(r*x*o-g*a*o+g*n*c-e*x*c-r*n*m+e*a*m)*T,t[11]=(h*a*o-r*u*o-h*n*c+e*u*c+r*n*p-e*a*p)*T,t[12]=A*T,t[13]=(h*x*i-g*u*i+g*n*d-e*x*d-h*n*f+e*u*f)*T,t[14]=(g*a*i-r*x*i-g*n*l+e*x*l+r*n*f-e*a*f)*T,t[15]=(r*u*i-h*a*i+h*n*l-e*u*l-r*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,u=a+a,d=o*c,p=o*h,g=o*u,x=r*h,f=r*u,m=a*u,w=l*c,_=l*h,M=l*u,A=n.x,E=n.y,T=n.z;return i[0]=(1-(x+m))*A,i[1]=(p+M)*A,i[2]=(g-_)*A,i[3]=0,i[4]=(p-M)*E,i[5]=(1-(d+m))*E,i[6]=(f+w)*E,i[7]=0,i[8]=(g+_)*T,i[9]=(f-w)*T,i[10]=(1-(d+x))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=$s.set(i[0],i[1],i[2]).length();const r=$s.set(i[4],i[5],i[6]).length(),a=$s.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],ti.copy(this);const c=1/o,h=1/r,u=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=u,ti.elements[9]*=u,ti.elements[10]*=u,e.setFromRotationMatrix(ti),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=Ni){const l=this.elements,c=2*o/(e-t),h=2*o/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(a===Ni)p=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===sc)p=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=Ni){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(r-o),d=(e+t)*c,p=(n+i)*h;let g,x;if(a===Ni)g=(r+o)*u,x=-2*u;else if(a===sc)g=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const $s=new N,ti=new se,og=new N(0,0,0),rg=new N(1,1,1),Yi=new N,na=new N,Pn=new N,vf=new se,_f=new rs;class si{constructor(t=0,e=0,n=0,i=si.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$t(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _f.setFromEuler(this),this.setFromQuaternion(_f,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class wp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ag=0;const Mf=new N,js=new rs,Ri=new se,ia=new N,nr=new N,cg=new N,lg=new rs,yf=new N(1,0,0),wf=new N(0,1,0),Sf=new N(0,0,1),bf={type:"added"},hg={type:"removed"},Ks={type:"childadded",child:null},$c={type:"childremoved",child:null};class de extends $o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new N,e=new si,n=new rs,i=new N(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Wt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.multiply(js),this}rotateOnWorldAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.premultiply(js),this}rotateX(t){return this.rotateOnAxis(yf,t)}rotateY(t){return this.rotateOnAxis(wf,t)}rotateZ(t){return this.rotateOnAxis(Sf,t)}translateOnAxis(t,e){return Mf.copy(t).applyQuaternion(this.quaternion),this.position.add(Mf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yf,t)}translateY(t){return this.translateOnAxis(wf,t)}translateZ(t){return this.translateOnAxis(Sf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ia.copy(t):ia.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(nr,ia,this.up):Ri.lookAt(ia,nr,this.up),this.quaternion.setFromRotationMatrix(Ri),i&&(Ri.extractRotation(i.matrixWorld),js.setFromRotationMatrix(Ri),this.quaternion.premultiply(js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bf),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hg),$c.child=t,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bf),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,cg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,lg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),p=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}de.DEFAULT_UP=new N(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new N,Ci=new N,jc=new N,Pi=new N,Js=new N,Qs=new N,Tf=new N,Kc=new N,Jc=new N,Qc=new N,tl=new ge,el=new ge,nl=new ge;class Zn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ei.subVectors(t,e),i.cross(ei);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){ei.subVectors(i,e),Ci.subVectors(n,e),jc.subVectors(t,e);const r=ei.dot(ei),a=ei.dot(Ci),l=ei.dot(jc),c=Ci.dot(Ci),h=Ci.dot(jc),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(r*h-a*l)*d;return o.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,n,i,o,r,a,l){return this.getBarycoord(t,e,n,i,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Pi.x),l.addScaledVector(r,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(t,e,n,i,o,r){return tl.setScalar(0),el.setScalar(0),nl.setScalar(0),tl.fromBufferAttribute(t,e),el.fromBufferAttribute(t,n),nl.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(tl,o.x),r.addScaledVector(el,o.y),r.addScaledVector(nl,o.z),r}static isFrontFacing(t,e,n,i){return ei.subVectors(n,e),Ci.subVectors(t,e),ei.cross(Ci).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ei.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Zn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return Zn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return Zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;Js.subVectors(i,n),Qs.subVectors(o,n),Kc.subVectors(t,n);const l=Js.dot(Kc),c=Qs.dot(Kc);if(l<=0&&c<=0)return e.copy(n);Jc.subVectors(t,i);const h=Js.dot(Jc),u=Qs.dot(Jc);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Js,r);Qc.subVectors(t,o);const p=Js.dot(Qc),g=Qs.dot(Qc);if(g>=0&&p<=g)return e.copy(o);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Qs,a);const f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return Tf.subVectors(o,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(Tf,a);const m=1/(f+x+d);return r=x*m,a=d*m,e.copy(n).addScaledVector(Js,r).addScaledVector(Qs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},sa={h:0,s:0,l:0};function il(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class st{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=re.workingColorSpace){if(t=Ym(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=il(r,o,t+1/3),this.g=il(r,o,t),this.b=il(r,o,t-1/3)}return re.toWorkingColorSpace(this,i),this}setStyle(t,e=wn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=wn){const n=Sp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=Ro(t.r),this.g=Ro(t.g),this.b=Ro(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wn){return re.fromWorkingColorSpace(Ke.copy(this),t),Math.round($t(Ke.r*255,0,255))*65536+Math.round($t(Ke.g*255,0,255))*256+Math.round($t(Ke.b*255,0,255))}getHexString(t=wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Ke.copy(this),e);const n=Ke.r,i=Ke.g,o=Ke.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(i-o)/u+(i<o?6:0);break;case i:l=(o-n)/u+2;break;case o:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=wn){re.fromWorkingColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,i=Ke.b;return t!==wn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+e,Zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zi),t.getHSL(sa);const n=Gc(Zi.h,sa.h,e),i=Gc(Zi.s,sa.s,e),o=Gc(Zi.l,sa.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new st;st.NAMES=Sp;let ug=0;class as extends $o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=Eo,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jl,this.blendDst=Kl,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Eo&&(n.blending=this.blending),this.side!==os&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jl&&(n.blendSrc=this.blendSrc),this.blendDst!==Kl&&(n.blendDst=this.blendDst),this.blendEquation!==As&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ff&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Y extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=op,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new N,oa=new ut;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Uh,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)oa.fromBufferAttribute(this,e),oa.applyMatrix3(t),this.setXY(e,oa.x,oa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array),o=me(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Uh&&(t.usage=this.usage),t}}class bp extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Tp extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Gt extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let fg=0;const kn=new se,sl=new de,to=new N,In=new ks,ir=new ks,ke=new N;class Me extends $o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_p(t)?Tp:bp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Wt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,e,n){return kn.makeTranslation(t,e,n),this.applyMatrix4(kn),this}scale(t,e,n){return kn.makeScale(t,e,n),this.applyMatrix4(kn),this}lookAt(t){return sl.lookAt(t),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Gt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];In.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(In.min,ir.min),In.expandByPoint(ke),ke.addVectors(In.max,ir.max),In.expandByPoint(ke)):(In.expandByPoint(ir.min),In.expandByPoint(ir.max))}In.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)ke.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(ke));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ke.fromBufferAttribute(a,c),l&&(to.fromBufferAttribute(t,c),ke.add(to)),i=Math.max(i,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new N,l[b]=new N;const c=new N,h=new N,u=new N,d=new ut,p=new ut,g=new ut,x=new N,f=new N;function m(b,y,v){c.fromBufferAttribute(n,b),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,v),d.fromBufferAttribute(o,b),p.fromBufferAttribute(o,y),g.fromBufferAttribute(o,v),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),a[b].add(x),a[y].add(x),a[v].add(x),l[b].add(f),l[y].add(f),l[v].add(f))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let b=0,y=w.length;b<y;++b){const v=w[b],R=v.start,U=v.count;for(let L=R,z=R+U;L<z;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const _=new N,M=new N,A=new N,E=new N;function T(b){A.fromBufferAttribute(i,b),E.copy(A);const y=a[b];_.copy(y),_.sub(A.multiplyScalar(A.dot(y))).normalize(),M.crossVectors(E,y);const R=M.dot(l[b])<0?-1:1;r.setXYZW(b,_.x,_.y,_.z,R)}for(let b=0,y=w.length;b<y;++b){const v=w[b],R=v.start,U=v.count;for(let L=R,z=R+U;L<z;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new N,o=new N,r=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),x=t.getX(d+1),f=t.getX(d+2);i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,f),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,f=l.length;x<f;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let m=0;m<h;m++)d[g++]=c[p++]}return new ze(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ef=new se,ds=new Lu,ra=new Hs,Af=new N,aa=new N,ca=new N,la=new N,ol=new N,ha=new N,Rf=new N,ua=new N;class I extends de{constructor(t=new Me,e=new Y){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){ha.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],u=o[l];h!==0&&(ol.fromBufferAttribute(u,t),r?ha.addScaledVector(ol,h):ha.addScaledVector(ol.sub(e),h))}e.add(ha)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(o),ds.copy(t.ray).recast(t.near),!(ra.containsPoint(ds.origin)===!1&&(ds.intersectSphere(ra,Af)===null||ds.origin.distanceToSquared(Af)>(t.far-t.near)**2))&&(Ef.copy(o).invert(),ds.copy(t.ray).applyMatrix4(Ef),!(n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ds)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const f=d[g],m=r[f.materialIndex],w=Math.max(f.start,p.start),_=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let M=w,A=_;M<A;M+=3){const E=a.getX(M),T=a.getX(M+1),b=a.getX(M+2);i=fa(this,m,t,n,c,h,u,E,T,b),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let f=g,m=x;f<m;f+=3){const w=a.getX(f),_=a.getX(f+1),M=a.getX(f+2);i=fa(this,r,t,n,c,h,u,w,_,M),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const f=d[g],m=r[f.materialIndex],w=Math.max(f.start,p.start),_=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let M=w,A=_;M<A;M+=3){const E=M,T=M+1,b=M+2;i=fa(this,m,t,n,c,h,u,E,T,b),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let f=g,m=x;f<m;f+=3){const w=f,_=f+1,M=f+2;i=fa(this,r,t,n,c,h,u,w,_,M),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function dg(s,t,e,n,i,o,r,a){let l;if(t.side===Sn?l=n.intersectTriangle(r,o,i,!0,a):l=n.intersectTriangle(i,o,r,t.side===os,a),l===null)return null;ua.copy(a),ua.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ua);return c<e.near||c>e.far?null:{distance:c,point:ua.clone(),object:s}}function fa(s,t,e,n,i,o,r,a,l,c){s.getVertexPosition(a,aa),s.getVertexPosition(l,ca),s.getVertexPosition(c,la);const h=dg(s,t,e,n,aa,ca,la,Rf);if(h){const u=new N;Zn.getBarycoord(Rf,aa,ca,la,u),i&&(h.uv=Zn.getInterpolatedAttribute(i,a,l,c,u,new ut)),o&&(h.uv1=Zn.getInterpolatedAttribute(o,a,l,c,u,new ut)),r&&(h.normal=Zn.getInterpolatedAttribute(r,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};Zn.getNormal(aa,ca,la,d.normal),h.face=d,h.barycoord=u}return h}class Hr extends Me{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,o,4),g("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(u,2));function g(x,f,m,w,_,M,A,E,T,b,y){const v=M/T,R=A/b,U=M/2,L=A/2,z=E/2,V=T+1,k=b+1;let $=0,W=0;const at=new N;for(let pt=0;pt<k;pt++){const Rt=pt*R-L;for(let Ft=0;Ft<V;Ft++){const jt=Ft*v-U;at[x]=jt*w,at[f]=Rt*_,at[m]=z,c.push(at.x,at.y,at.z),at[x]=0,at[f]=0,at[m]=E>0?1:-1,h.push(at.x,at.y,at.z),u.push(Ft/T),u.push(1-pt/b),$+=1}}for(let pt=0;pt<b;pt++)for(let Rt=0;Rt<T;Rt++){const Ft=d+Rt+V*pt,jt=d+Rt+V*(pt+1),tt=d+(Rt+1)+V*(pt+1),lt=d+(Rt+1)+V*pt;l.push(Ft,jt,lt),l.push(jt,tt,lt),W+=6}a.addGroup(p,W,y),p+=W,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vo(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function an(s){const t={};for(let e=0;e<s.length;e++){const n=Vo(s[e]);for(const i in n)t[i]=n[i]}return t}function pg(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ep(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const rc={clone:Vo,merge:an};var mg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mg,this.fragmentShader=gg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vo(t.uniforms),this.uniformsGroups=pg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ap extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new N,Cf=new ut,Pf=new ut;class Dn extends Ap{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Nh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nh*2*Math.atan(Math.tan(Bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,Cf,Pf),e.subVectors(Pf,Cf)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const eo=-90,no=1;class xg extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Dn(eo,no,t,e);i.layers=this.layers,this.add(i);const o=new Dn(eo,no,t,e);o.layers=this.layers,this.add(o);const r=new Dn(eo,no,t,e);r.layers=this.layers,this.add(r);const a=new Dn(eo,no,t,e);a.layers=this.layers,this.add(a);const l=new Dn(eo,no,t,e);l.layers=this.layers,this.add(l);const c=new Dn(eo,no,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===Ni)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===sc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rp extends en{constructor(t,e,n,i,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Oo,super(t,e,n,i,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vg extends ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Rp(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Hr(5,5,5),o=new En({name:"CubemapFromEquirect",uniforms:Vo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:Fi});o.uniforms.tEquirect.value=e;const r=new I(i,o),a=e.minFilter;return e.minFilter===Ps&&(e.minFilter=xi),new xg(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}class Du{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new st(t),this.density=e}clone(){return new Du(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _g extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Mg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Uh,this.updateRanges=[],this.version=0,this.uuid=Bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,o=this.stride;i<o;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new N;class ac{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array),o=me(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ac(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Cp extends as{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let io;const sr=new N,so=new N,oo=new N,ro=new ut,or=new ut,Pp=new se,da=new N,rr=new N,pa=new N,If=new ut,rl=new ut,Lf=new ut;class yg extends de{constructor(t=new Cp){if(super(),this.isSprite=!0,this.type="Sprite",io===void 0){io=new Me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Mg(e,5);io.setIndex([0,1,2,0,2,3]),io.setAttribute("position",new ac(n,3,0,!1)),io.setAttribute("uv",new ac(n,2,3,!1))}this.geometry=io,this.material=t,this.center=new ut(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),so.setFromMatrixScale(this.matrixWorld),Pp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),oo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&so.multiplyScalar(-oo.z);const n=this.material.rotation;let i,o;n!==0&&(o=Math.cos(n),i=Math.sin(n));const r=this.center;ma(da.set(-.5,-.5,0),oo,r,so,i,o),ma(rr.set(.5,-.5,0),oo,r,so,i,o),ma(pa.set(.5,.5,0),oo,r,so,i,o),If.set(0,0),rl.set(1,0),Lf.set(1,1);let a=t.ray.intersectTriangle(da,rr,pa,!1,sr);if(a===null&&(ma(rr.set(-.5,.5,0),oo,r,so,i,o),rl.set(0,1),a=t.ray.intersectTriangle(da,pa,rr,!1,sr),a===null))return;const l=t.ray.origin.distanceTo(sr);l<t.near||l>t.far||e.push({distance:l,point:sr.clone(),uv:Zn.getInterpolation(sr,da,rr,pa,If,rl,Lf,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ma(s,t,e,n,i,o){ro.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(or.x=o*ro.x-i*ro.y,or.y=i*ro.x+o*ro.y):or.copy(ro),s.copy(t),s.x+=or.x,s.y+=or.y,s.applyMatrix4(Pp)}class wg extends en{constructor(t=null,e=1,n=1,i,o,r,a,l,c=Fn,h=Fn,u,d){super(null,r,a,l,c,h,i,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi extends ze{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ao=new se,Df=new se,ga=[],Uf=new ks,Sg=new se,ar=new I,cr=new Hs;class wi extends I{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Sg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ks),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ao),Uf.copy(t.boundingBox).applyMatrix4(ao),this.boundingBox.union(Uf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ao),cr.copy(t.boundingSphere).applyMatrix4(ao),this.boundingSphere.union(cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),t.ray.intersectsSphere(cr)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,ao),Df.multiplyMatrices(n,ao),ar.matrixWorld=Df,ar.raycast(t,ga);for(let r=0,a=ga.length;r<a;r++){const l=ga[r];l.instanceId=o,l.object=this,e.push(l)}ga.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new yi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new wg(new Float32Array(i*this.count),i,this.count,Ru,vi));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=i*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const al=new N,bg=new N,Tg=new Wt;class _s{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=al.subVectors(n,e).cross(bg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(al),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Tg.getNormalMatrix(t),i=this.coplanarPoint(al).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Hs,xa=new N;class Uu{constructor(t=new _s,e=new _s,n=new _s,i=new _s,o=new _s,r=new _s){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ni){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],x=i[10],f=i[11],m=i[12],w=i[13],_=i[14],M=i[15];if(n[0].setComponents(l-o,d-c,f-p,M-m).normalize(),n[1].setComponents(l+o,d+c,f+p,M+m).normalize(),n[2].setComponents(l+r,d+h,f+g,M+w).normalize(),n[3].setComponents(l-r,d-h,f-g,M-w).normalize(),n[4].setComponents(l-a,d-u,f-x,M-_).normalize(),e===Ni)n[5].setComponents(l+a,d+u,f+x,M+_).normalize();else if(e===sc)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(xa.x=i.normal.x>0?t.max.x:t.min.x,xa.y=i.normal.y>0?t.max.y:t.min.y,xa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(xa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nu extends as{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const cc=new N,lc=new N,Nf=new se,lr=new Lu,va=new Hs,cl=new N,zf=new N;class Ip extends de{constructor(t=new Me,e=new Nu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)cc.fromBufferAttribute(e,i-1),lc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=cc.distanceTo(lc);t.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(i),va.radius+=o,t.ray.intersectsSphere(va)===!1)return;Nf.copy(i).invert(),lr.copy(t.ray).applyMatrix4(Nf);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let x=p,f=g-1;x<f;x+=c){const m=h.getX(x),w=h.getX(x+1),_=_a(this,t,lr,l,m,w);_&&e.push(_)}if(this.isLineLoop){const x=h.getX(g-1),f=h.getX(p),m=_a(this,t,lr,l,x,f);m&&e.push(m)}}else{const p=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let x=p,f=g-1;x<f;x+=c){const m=_a(this,t,lr,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){const x=_a(this,t,lr,l,g-1,p);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function _a(s,t,e,n,i,o){const r=s.geometry.attributes.position;if(cc.fromBufferAttribute(r,i),lc.fromBufferAttribute(r,o),e.distanceSqToSegment(cc,lc,cl,zf)>n)return;cl.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(cl);if(!(l<t.near||l>t.far))return{distance:l,point:zf.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Ff=new N,Of=new N;class Eg extends Ip{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,o=e.count;i<o;i+=2)Ff.fromBufferAttribute(e,i),Of.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ff.distanceTo(Of);t.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zu extends as{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Bf=new se,zh=new Lu,Ma=new Hs,ya=new N;class Lp extends de{constructor(t=new Me,e=new zu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(i),Ma.radius+=o,t.ray.intersectsSphere(Ma)===!1)return;Bf.copy(i).invert(),zh.copy(t.ray).applyMatrix4(Bf);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=d,x=p;g<x;g++){const f=c.getX(g);ya.fromBufferAttribute(u,f),Gf(ya,f,l,i,t,e,this)}}else{const d=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let g=d,x=p;g<x;g++)ya.fromBufferAttribute(u,g),Gf(ya,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Gf(s,t,e,n,i,o,r){const a=zh.distanceSqToPoint(s);if(a<e){const l=new N;zh.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class ae extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Cc extends en{constructor(t,e,n,i,o,r,a,l,c){super(t,e,n,i,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dp extends en{constructor(t,e,n,i,o,r,a,l,c,h=Ao){if(h!==Ao&&h!==ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ao&&(n=Fs),n===void 0&&h===ko&&(n=Go),super(null,i,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(o-1);const h=n[i],d=n[i+1]-h,p=(r-h)/d;return(i+p)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),l=e||(r.isVector2?new ut:new N);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,i=[],o=[],r=[],a=new N,l=new se;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new N)}o[0]=new N,r[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($t(i[p-1].dot(i[p]),-1,1));o[p].applyMatrix4(l.makeRotationAxis(a,g))}r[p].crossVectors(i[p],o[p])}if(e===!0){let p=Math.acos($t(o[0].dot(o[t]),-1,1));p/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),r[g].crossVectors(i[g],o[g])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fu extends bi{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ut){const n=e,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ag extends Fu{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Ou(){let s=0,t=0,e=0,n=0;function i(o,r,a,l){s=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){i(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,u){let d=(r-o)/c-(a-o)/(c+h)+(a-r)/h,p=(a-r)/h-(l-r)/(h+u)+(l-a)/u;d*=h,p*=h,i(r,a,d,p)},calc:function(o){const r=o*o,a=r*o;return s+t*o+e*r+n*a}}}const wa=new N,ll=new Ou,hl=new Ou,ul=new Ou;class Vr extends bi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new N){const n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%o]:(wa.subVectors(i[0],i[1]).add(i[0]),c=wa);const u=i[a%o],d=i[(a+1)%o];if(this.closed||a+2<o?h=i[(a+2)%o]:(wa.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=wa),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),f<1e-4&&(f=x),ll.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,f),hl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,f),ul.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,f)}else this.curveType==="catmullrom"&&(ll.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),hl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ul.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ll.calc(l),hl.calc(l),ul.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function kf(s,t,e,n,i){const o=(n-t)*.5,r=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*s+e}function Rg(s,t){const e=1-s;return e*e*t}function Cg(s,t){return 2*(1-s)*s*t}function Pg(s,t){return s*s*t}function Tr(s,t,e,n){return Rg(s,t)+Cg(s,e)+Pg(s,n)}function Ig(s,t){const e=1-s;return e*e*e*t}function Lg(s,t){const e=1-s;return 3*e*e*s*t}function Dg(s,t){return 3*(1-s)*s*s*t}function Ug(s,t){return s*s*s*t}function Er(s,t,e,n,i){return Ig(s,t)+Lg(s,e)+Dg(s,n)+Ug(s,i)}class Up extends bi{constructor(t=new ut,e=new ut,n=new ut,i=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ut){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Er(t,i.x,o.x,r.x,a.x),Er(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ng extends bi{constructor(t=new N,e=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new N){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Er(t,i.x,o.x,r.x,a.x),Er(t,i.y,o.y,r.y,a.y),Er(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Np extends bi{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bu extends bi{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zp extends bi{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(Tr(t,i.x,o.x,r.x),Tr(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fp extends bi{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(Tr(t,i.x,o.x,r.x),Tr(t,i.y,o.y,r.y),Tr(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Op extends bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(kf(a,l.x,c.x,h.x,u.x),kf(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ut().fromArray(i))}return this}}var Fh=Object.freeze({__proto__:null,ArcCurve:Ag,CatmullRomCurve3:Vr,CubicBezierCurve:Up,CubicBezierCurve3:Ng,EllipseCurve:Fu,LineCurve:Np,LineCurve3:Bu,QuadraticBezierCurve:zp,QuadraticBezierCurve3:Fp,SplineCurve:Op});class zg extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Fh[i.type]().fromJSON(i))}return this}}class hc extends zg{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Np(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new zp(this.currentPoint.clone(),new ut(t,e),new ut(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){const a=new Up(this.currentPoint.clone(),new ut(t,e),new ut(n,i),new ut(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Op(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,o,r,a,l),this}absellipse(t,e,n,i,o,r,a,l){const c=new Fu(t,e,n,i,o,r,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ze extends Me{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new N,h=new ut;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(a,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class yt extends Me{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),o=Math.floor(o);const h=[],u=[],d=[],p=[];let g=0;const x=[],f=n/2;let m=0;w(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(p,2));function w(){const M=new N,A=new N;let E=0;const T=(e-t)/n;for(let b=0;b<=o;b++){const y=[],v=b/o,R=v*(e-t)+t;for(let U=0;U<=i;U++){const L=U/i,z=L*l+a,V=Math.sin(z),k=Math.cos(z);A.x=R*V,A.y=-v*n+f,A.z=R*k,u.push(A.x,A.y,A.z),M.set(V,T,k).normalize(),d.push(M.x,M.y,M.z),p.push(L,1-v),y.push(g++)}x.push(y)}for(let b=0;b<i;b++)for(let y=0;y<o;y++){const v=x[y][b],R=x[y+1][b],U=x[y+1][b+1],L=x[y][b+1];(t>0||y!==0)&&(h.push(v,R,L),E+=3),(e>0||y!==o-1)&&(h.push(R,U,L),E+=3)}c.addGroup(m,E,0),m+=E}function _(M){const A=g,E=new ut,T=new N;let b=0;const y=M===!0?t:e,v=M===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,f*v,0),d.push(0,v,0),p.push(.5,.5),g++;const R=g;for(let U=0;U<=i;U++){const z=U/i*l+a,V=Math.cos(z),k=Math.sin(z);T.x=y*k,T.y=f*v,T.z=y*V,u.push(T.x,T.y,T.z),d.push(0,v,0),E.x=V*.5+.5,E.y=k*.5*v+.5,p.push(E.x,E.y),g++}for(let U=0;U<i;U++){const L=A+U,z=R+U;M===!0?h.push(z,z+1,L):h.push(z+1,z,L),b+=3}c.addGroup(m,b,M===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $n extends yt{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new $n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wr extends Me{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],r=[];a(i),c(n),h(),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(o.slice(),3)),this.setAttribute("uv",new Gt(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const _=new N,M=new N,A=new N;for(let E=0;E<e.length;E+=3)p(e[E+0],_),p(e[E+1],M),p(e[E+2],A),l(_,M,A,w)}function l(w,_,M,A){const E=A+1,T=[];for(let b=0;b<=E;b++){T[b]=[];const y=w.clone().lerp(M,b/E),v=_.clone().lerp(M,b/E),R=E-b;for(let U=0;U<=R;U++)U===0&&b===E?T[b][U]=y:T[b][U]=y.clone().lerp(v,U/R)}for(let b=0;b<E;b++)for(let y=0;y<2*(E-b)-1;y++){const v=Math.floor(y/2);y%2===0?(d(T[b][v+1]),d(T[b+1][v]),d(T[b][v])):(d(T[b][v+1]),d(T[b+1][v+1]),d(T[b+1][v]))}}function c(w){const _=new N;for(let M=0;M<o.length;M+=3)_.x=o[M+0],_.y=o[M+1],_.z=o[M+2],_.normalize().multiplyScalar(w),o[M+0]=_.x,o[M+1]=_.y,o[M+2]=_.z}function h(){const w=new N;for(let _=0;_<o.length;_+=3){w.x=o[_+0],w.y=o[_+1],w.z=o[_+2];const M=f(w)/2/Math.PI+.5,A=m(w)/Math.PI+.5;r.push(M,1-A)}g(),u()}function u(){for(let w=0;w<r.length;w+=6){const _=r[w+0],M=r[w+2],A=r[w+4],E=Math.max(_,M,A),T=Math.min(_,M,A);E>.9&&T<.1&&(_<.2&&(r[w+0]+=1),M<.2&&(r[w+2]+=1),A<.2&&(r[w+4]+=1))}}function d(w){o.push(w.x,w.y,w.z)}function p(w,_){const M=w*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function g(){const w=new N,_=new N,M=new N,A=new N,E=new ut,T=new ut,b=new ut;for(let y=0,v=0;y<o.length;y+=9,v+=6){w.set(o[y+0],o[y+1],o[y+2]),_.set(o[y+3],o[y+4],o[y+5]),M.set(o[y+6],o[y+7],o[y+8]),E.set(r[v+0],r[v+1]),T.set(r[v+2],r[v+3]),b.set(r[v+4],r[v+5]),A.copy(w).add(_).add(M).divideScalar(3);const R=f(A);x(E,v+0,w,R),x(T,v+2,_,R),x(b,v+4,M,R)}}function x(w,_,M,A){A<0&&w.x===1&&(r[_]=w.x-1),M.x===0&&M.z===0&&(r[_]=A/2/Math.PI+.5)}function f(w){return Math.atan2(w.z,-w.x)}function m(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.vertices,t.indices,t.radius,t.details)}}class Gu extends Wr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Gu(t.radius,t.detail)}}class uc extends hc{constructor(t){super(t),this.uuid=Bi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new hc().fromJSON(i))}return this}}const Fg={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=Bp(s,0,i,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,u,d,p;if(n&&(o=Hg(s,t,o,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return Ur(o,r,e,a,l,p,0),r}};function Bp(s,t,e,n,i){let o,r;if(i===Qg(s,t,e,n)>0)for(o=t;o<e;o+=n)r=Hf(o,s[o],s[o+1],r);else for(o=e-n;o>=t;o-=n)r=Hf(o,s[o],s[o+1],r);return r&&Pc(r,r.next)&&(zr(r),r=r.next),r}function Os(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Pc(e,e.next)||Ae(e.prev,e,e.next)===0)){if(zr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ur(s,t,e,n,i,o,r){if(!s)return;!r&&o&&Yg(s,n,i,o);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,o?Bg(s,n,i,o):Og(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),zr(s),s=c.next,a=c.next;continue}if(s=c,s===a){r?r===1?(s=Gg(Os(s),t,e),Ur(s,t,e,n,i,o,2)):r===2&&kg(s,t,e,n,i,o):Ur(Os(s),t,e,n,i,o,1);break}}}function Og(s){const t=s.prev,e=s,n=s.next;if(Ae(t,e,n)>=0)return!1;const i=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=i<o?i<r?i:r:o<r?o:r,u=a<l?a<c?a:c:l<c?l:c,d=i>o?i>r?i:r:o>r?o:r,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&yo(i,a,o,l,r,c,g.x,g.y)&&Ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Bg(s,t,e,n){const i=s.prev,o=s,r=s.next;if(Ae(i,o,r)>=0)return!1;const a=i.x,l=o.x,c=r.x,h=i.y,u=o.y,d=r.y,p=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,f=h>u?h>d?h:d:u>d?u:d,m=Oh(p,g,t,e,n),w=Oh(x,f,t,e,n);let _=s.prevZ,M=s.nextZ;for(;_&&_.z>=m&&M&&M.z<=w;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=f&&_!==i&&_!==r&&yo(a,h,l,u,c,d,_.x,_.y)&&Ae(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=p&&M.x<=x&&M.y>=g&&M.y<=f&&M!==i&&M!==r&&yo(a,h,l,u,c,d,M.x,M.y)&&Ae(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=m;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=f&&_!==i&&_!==r&&yo(a,h,l,u,c,d,_.x,_.y)&&Ae(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=w;){if(M.x>=p&&M.x<=x&&M.y>=g&&M.y<=f&&M!==i&&M!==r&&yo(a,h,l,u,c,d,M.x,M.y)&&Ae(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Gg(s,t,e){let n=s;do{const i=n.prev,o=n.next.next;!Pc(i,o)&&Gp(i,n,n.next,o)&&Nr(i,o)&&Nr(o,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),zr(n),zr(n.next),n=s=o),n=n.next}while(n!==s);return Os(n)}function kg(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&jg(r,a)){let l=kp(r,a);r=Os(r,r.next),l=Os(l,l.next),Ur(r,t,e,n,i,o,0),Ur(l,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function Hg(s,t,e,n){const i=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*n,l=o<r-1?t[o+1]*n:s.length,c=Bp(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push($g(c));for(i.sort(Vg),o=0;o<i.length;o++)e=Wg(i[o],e);return e}function Vg(s,t){return s.x-t.x}function Wg(s,t){const e=Xg(s,t);if(!e)return t;const n=kp(e,s);return Os(n,n.next),Os(e,e.next)}function Xg(s,t){let e=t,n=-1/0,i;const o=s.x,r=s.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===o))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;e=i;do o>=e.x&&e.x>=l&&o!==e.x&&yo(r<c?o:n,r,l,c,r<c?n:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),Nr(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&qg(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function qg(s,t){return Ae(s.prev,s,t.prev)<0&&Ae(t.next,s,s.next)<0}function Yg(s,t,e,n){let i=s;do i.z===0&&(i.z=Oh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Zg(i)}function Zg(s){let t,e,n,i,o,r,a,l,c=1;do{for(e=s,s=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;e=n}o.nextZ=null,c*=2}while(r>1);return s}function Oh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function $g(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function yo(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function jg(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Kg(s,t)&&(Nr(s,t)&&Nr(t,s)&&Jg(s,t)&&(Ae(s.prev,s,t.prev)||Ae(s,t.prev,t))||Pc(s,t)&&Ae(s.prev,s,s.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Pc(s,t){return s.x===t.x&&s.y===t.y}function Gp(s,t,e,n){const i=ba(Ae(s,t,e)),o=ba(Ae(s,t,n)),r=ba(Ae(e,n,s)),a=ba(Ae(e,n,t));return!!(i!==o&&r!==a||i===0&&Sa(s,e,t)||o===0&&Sa(s,n,t)||r===0&&Sa(e,s,n)||a===0&&Sa(e,t,n))}function Sa(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ba(s){return s>0?1:s<0?-1:0}function Kg(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Gp(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Nr(s,t){return Ae(s.prev,s,s.next)<0?Ae(s,t,s.next)>=0&&Ae(s,s.prev,t)>=0:Ae(s,t,s.prev)<0||Ae(s,s.next,t)<0}function Jg(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function kp(s,t){const e=new Bh(s.i,s.x,s.y),n=new Bh(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Hf(s,t,e,n){const i=new Bh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function zr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Bh(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Qg(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}class Ar{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return Ar.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];Vf(t),Wf(n,t);let r=t.length;e.forEach(Vf);for(let l=0;l<e.length;l++)i.push(r),r+=e[l].length,Wf(n,e[l]);const a=Fg.triangulate(n,i);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Vf(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Wf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Wo extends Wr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Wo(t.radius,t.detail)}}class ku extends Wr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ku(t.radius,t.detail)}}class xe extends Me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],x=[],f=[];for(let m=0;m<h;m++){const w=m*d-r;for(let _=0;_<c;_++){const M=_*u-o;g.push(M,-w,0),x.push(0,0,1),f.push(_/a),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<a;w++){const _=w+c*m,M=w+c*(m+1),A=w+1+c*(m+1),E=w+1+c*m;p.push(_,M,E),p.push(M,A,E)}this.setIndex(p),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.width,t.height,t.widthSegments,t.heightSegments)}}class Xo extends Me{constructor(t=.5,e=1,n=32,i=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,p=new N,g=new ut;for(let x=0;x<=i;x++){for(let f=0;f<=n;f++){const m=o+f/n*r;p.x=u*Math.cos(m),p.y=u*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<i;x++){const f=x*(n+1);for(let m=0;m<n;m++){const w=m+f,_=w,M=w+n+1,A=w+n+2,E=w+1;a.push(_,M,E),a.push(M,A,E)}}this.setIndex(a),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Fr extends Me{constructor(t=new uc([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],o=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Gt(i,3)),this.setAttribute("normal",new Gt(o,3)),this.setAttribute("uv",new Gt(r,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let p=d.shape;const g=d.holes;Ar.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,m=g.length;f<m;f++){const w=g[f];Ar.isClockWise(w)===!0&&(g[f]=w.reverse())}const x=Ar.triangulateShape(p,g);for(let f=0,m=g.length;f<m;f++){const w=g[f];p=p.concat(w)}for(let f=0,m=p.length;f<m;f++){const w=p[f];i.push(w.x,w.y,0),o.push(0,0,1),r.push(w.x,w.y)}for(let f=0,m=x.length;f<m;f++){const w=x[f],_=w[0]+u,M=w[1]+u,A=w[2]+u;n.push(_,M,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return tx(e,t)}static fromJSON(t,e){const n=[];for(let i=0,o=t.shapes.length;i<o;i++){const r=e[t.shapes[i]];n.push(r)}return new Fr(n,t.curveSegments)}}function tx(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class K extends Me{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new N,d=new N,p=[],g=[],x=[],f=[];for(let m=0;m<=n;m++){const w=[],_=m/n;let M=0;m===0&&r===0?M=.5/e:m===n&&l===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const E=A/e;u.x=-t*Math.cos(i+E*o)*Math.sin(r+_*a),u.y=t*Math.cos(r+_*a),u.z=t*Math.sin(i+E*o)*Math.sin(r+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),f.push(E+M,1-_),w.push(c++)}h.push(w)}for(let m=0;m<n;m++)for(let w=0;w<e;w++){const _=h[m][w+1],M=h[m][w],A=h[m+1][w],E=h[m+1][w+1];(m!==0||r>0)&&p.push(_,M,E),(m!==n-1||l<Math.PI)&&p.push(M,A,E)}this.setIndex(p),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new K(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Te extends Me{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],l=[],c=[],h=new N,u=new N,d=new N;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const x=g/i*o,f=p/n*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(x),u.y=(t+e*Math.cos(f))*Math.sin(x),u.z=e*Math.sin(f),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const x=(i+1)*p+g-1,f=(i+1)*(p-1)+g-1,m=(i+1)*(p-1)+g,w=(i+1)*p+g;r.push(x,f,w),r.push(f,m,w)}this.setIndex(r),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Tn extends Me{constructor(t=new Fp(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new N,l=new N,c=new ut;let h=new N;const u=[],d=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(p,2));function x(){for(let _=0;_<e;_++)f(_);f(o===!1?e:0),w(),m()}function f(_){h=t.getPointAt(_/e,h);const M=r.normals[_],A=r.binormals[_];for(let E=0;E<=i;E++){const T=E/i*Math.PI*2,b=Math.sin(T),y=-Math.cos(T);l.x=y*M.x+b*A.x,l.y=y*M.y+b*A.y,l.z=y*M.z+b*A.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let _=1;_<=e;_++)for(let M=1;M<=i;M++){const A=(i+1)*(_-1)+(M-1),E=(i+1)*_+(M-1),T=(i+1)*_+M,b=(i+1)*(_-1)+M;g.push(A,E,b),g.push(E,T,b)}}function w(){for(let _=0;_<=e;_++)for(let M=0;M<=i;M++)c.x=_/e,c.y=M/i,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Tn(new Fh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class J extends as{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xp,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ex extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nx extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Hu extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new st(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ix extends Hu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const fl=new se,Xf=new N,qf=new N;class Hp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uu,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Xf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xf),qf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qf),e.updateMatrixWorld(),fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Yf=new se,hr=new N,dl=new N;class sx extends Hp{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ut(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),hr.setFromMatrixPosition(t.matrixWorld),n.position.copy(hr),dl.copy(n.position),dl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(dl),n.updateMatrixWorld(),i.makeTranslation(-hr.x,-hr.y,-hr.z),Yf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yf)}}class jo extends Hu{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Vu extends Ap{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ox extends Hp{constructor(){super(new Vu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ic extends Hu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new ox}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rx extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Vp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Zf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Zf(){return performance.now()}function $f(s,t,e,n){const i=ax(n);switch(e){case up:return s*t;case dp:return s*t;case pp:return s*t*2;case Ru:return s*t/i.components*i.byteLength;case Cu:return s*t/i.components*i.byteLength;case mp:return s*t*2/i.components*i.byteLength;case Pu:return s*t*2/i.components*i.byteLength;case fp:return s*t*3/i.components*i.byteLength;case ni:return s*t*4/i.components*i.byteLength;case Iu:return s*t*4/i.components*i.byteLength;case ka:case Ha:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Va:case Wa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lh:case uh:return Math.max(s,16)*Math.max(t,8)/4;case ch:case hh:return Math.max(s,8)*Math.max(t,8)/2;case fh:case dh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ph:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case mh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case xh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case vh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case _h:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Mh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case yh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case wh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Sh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case bh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Th:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Eh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ah:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Rh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Xa:case Ch:case Ph:return Math.ceil(s/4)*Math.ceil(t/4)*16;case gp:case Ih:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Lh:case Dh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ax(s){switch(s){case Hi:case cp:return{byteLength:1,components:1};case Dr:case lp:case Oi:return{byteLength:2,components:1};case Eu:case Au:return{byteLength:2,components:4};case Fs:case Tu:case vi:return{byteLength:4,components:1};case hp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bu);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wp(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function cx(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const x=u[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:o,update:r}}var lx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hx=`#ifdef USE_ALPHAHASH
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
#endif`,ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,px=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mx=`#ifdef USE_AOMAP
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
#endif`,gx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xx=`#ifdef USE_BATCHING
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
#endif`,vx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_x=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wx=`#ifdef USE_IRIDESCENCE
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
#endif`,Sx=`#ifdef USE_BUMPMAP
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
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lx=`#define PI 3.141592653589793
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
} // validated`,Dx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ux=`vec3 transformedNormal = objectNormal;
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
#endif`,Nx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xx=`#ifdef USE_ENVMAP
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
#endif`,qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jx=`#ifdef USE_GRADIENTMAP
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
}`,Kx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tv=`uniform bool receiveShadow;
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
#endif`,ev=`#ifdef USE_ENVMAP
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
#endif`,nv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rv=`PhysicalMaterial material;
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
#endif`,av=`struct PhysicalMaterial {
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
}`,cv=`
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
#endif`,lv=`#if defined( RE_IndirectDiffuse )
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
#endif`,hv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vv=`#if defined( USE_POINTS_UV )
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
#endif`,_v=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bv=`#ifdef USE_MORPHTARGETS
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
#endif`,Tv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ev=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Av=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Iv=`#ifdef USE_NORMALMAP
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
#endif`,Lv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ov=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yv=`float getShadowMask() {
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
}`,Zv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$v=`#ifdef USE_SKINNING
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
#endif`,jv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kv=`#ifdef USE_SKINNING
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
#endif`,Jv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n_=`#ifdef USE_TRANSMISSION
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
#endif`,i_=`#ifdef USE_TRANSMISSION
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
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l_=`uniform sampler2D t2D;
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
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`#include <common>
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
}`,m_=`#if DEPTH_PACKING == 3200
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
}`,g_=`#define DISTANCE
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
}`,x_=`#define DISTANCE
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
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,__=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`uniform float scale;
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
}`,y_=`uniform vec3 diffuse;
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
}`,w_=`#include <common>
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
}`,S_=`uniform vec3 diffuse;
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
}`,b_=`#define LAMBERT
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
}`,T_=`#define LAMBERT
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
}`,E_=`#define MATCAP
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
}`,A_=`#define MATCAP
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
}`,R_=`#define NORMAL
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
}`,C_=`#define NORMAL
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
}`,P_=`#define PHONG
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
}`,I_=`#define PHONG
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
}`,L_=`#define STANDARD
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
}`,D_=`#define STANDARD
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
}`,U_=`#define TOON
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
}`,N_=`#define TOON
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
}`,z_=`uniform float size;
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
}`,F_=`uniform vec3 diffuse;
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
}`,O_=`#include <common>
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
}`,B_=`uniform vec3 color;
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
}`,G_=`uniform float rotation;
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
}`,k_=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:lx,alphahash_pars_fragment:hx,alphamap_fragment:ux,alphamap_pars_fragment:fx,alphatest_fragment:dx,alphatest_pars_fragment:px,aomap_fragment:mx,aomap_pars_fragment:gx,batching_pars_vertex:xx,batching_vertex:vx,begin_vertex:_x,beginnormal_vertex:Mx,bsdfs:yx,iridescence_fragment:wx,bumpmap_pars_fragment:Sx,clipping_planes_fragment:bx,clipping_planes_pars_fragment:Tx,clipping_planes_pars_vertex:Ex,clipping_planes_vertex:Ax,color_fragment:Rx,color_pars_fragment:Cx,color_pars_vertex:Px,color_vertex:Ix,common:Lx,cube_uv_reflection_fragment:Dx,defaultnormal_vertex:Ux,displacementmap_pars_vertex:Nx,displacementmap_vertex:zx,emissivemap_fragment:Fx,emissivemap_pars_fragment:Ox,colorspace_fragment:Bx,colorspace_pars_fragment:Gx,envmap_fragment:kx,envmap_common_pars_fragment:Hx,envmap_pars_fragment:Vx,envmap_pars_vertex:Wx,envmap_physical_pars_fragment:ev,envmap_vertex:Xx,fog_vertex:qx,fog_pars_vertex:Yx,fog_fragment:Zx,fog_pars_fragment:$x,gradientmap_pars_fragment:jx,lightmap_pars_fragment:Kx,lights_lambert_fragment:Jx,lights_lambert_pars_fragment:Qx,lights_pars_begin:tv,lights_toon_fragment:nv,lights_toon_pars_fragment:iv,lights_phong_fragment:sv,lights_phong_pars_fragment:ov,lights_physical_fragment:rv,lights_physical_pars_fragment:av,lights_fragment_begin:cv,lights_fragment_maps:lv,lights_fragment_end:hv,logdepthbuf_fragment:uv,logdepthbuf_pars_fragment:fv,logdepthbuf_pars_vertex:dv,logdepthbuf_vertex:pv,map_fragment:mv,map_pars_fragment:gv,map_particle_fragment:xv,map_particle_pars_fragment:vv,metalnessmap_fragment:_v,metalnessmap_pars_fragment:Mv,morphinstance_vertex:yv,morphcolor_vertex:wv,morphnormal_vertex:Sv,morphtarget_pars_vertex:bv,morphtarget_vertex:Tv,normal_fragment_begin:Ev,normal_fragment_maps:Av,normal_pars_fragment:Rv,normal_pars_vertex:Cv,normal_vertex:Pv,normalmap_pars_fragment:Iv,clearcoat_normal_fragment_begin:Lv,clearcoat_normal_fragment_maps:Dv,clearcoat_pars_fragment:Uv,iridescence_pars_fragment:Nv,opaque_fragment:zv,packing:Fv,premultiplied_alpha_fragment:Ov,project_vertex:Bv,dithering_fragment:Gv,dithering_pars_fragment:kv,roughnessmap_fragment:Hv,roughnessmap_pars_fragment:Vv,shadowmap_pars_fragment:Wv,shadowmap_pars_vertex:Xv,shadowmap_vertex:qv,shadowmask_pars_fragment:Yv,skinbase_vertex:Zv,skinning_pars_vertex:$v,skinning_vertex:jv,skinnormal_vertex:Kv,specularmap_fragment:Jv,specularmap_pars_fragment:Qv,tonemapping_fragment:t_,tonemapping_pars_fragment:e_,transmission_fragment:n_,transmission_pars_fragment:i_,uv_pars_fragment:s_,uv_pars_vertex:o_,uv_vertex:r_,worldpos_vertex:a_,background_vert:c_,background_frag:l_,backgroundCube_vert:h_,backgroundCube_frag:u_,cube_vert:f_,cube_frag:d_,depth_vert:p_,depth_frag:m_,distanceRGBA_vert:g_,distanceRGBA_frag:x_,equirect_vert:v_,equirect_frag:__,linedashed_vert:M_,linedashed_frag:y_,meshbasic_vert:w_,meshbasic_frag:S_,meshlambert_vert:b_,meshlambert_frag:T_,meshmatcap_vert:E_,meshmatcap_frag:A_,meshnormal_vert:R_,meshnormal_frag:C_,meshphong_vert:P_,meshphong_frag:I_,meshphysical_vert:L_,meshphysical_frag:D_,meshtoon_vert:U_,meshtoon_frag:N_,points_vert:z_,points_frag:F_,shadow_vert:O_,shadow_frag:B_,sprite_vert:G_,sprite_frag:k_},mt={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},hi={basic:{uniforms:an([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:an([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new st(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:an([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:an([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:an([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new st(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:an([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:an([mt.points,mt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:an([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:an([mt.common,mt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:an([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:an([mt.sprite,mt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:an([mt.common,mt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:an([mt.lights,mt.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};hi.physical={uniforms:an([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Ta={r:0,b:0,g:0},ms=new si,H_=new se;function V_(s,t,e,n,i,o,r){const a=new st(0);let l=o===!0?0:1,c,h,u=null,d=0,p=null;function g(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?e:t).get(M)),M}function x(_){let M=!1;const A=g(_);A===null?m(a,l):A&&A.isColor&&(m(A,1),M=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function f(_,M){const A=g(M);A&&(A.isCubeTexture||A.mapping===Rc)?(h===void 0&&(h=new I(new Hr(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Vo(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ms.copy(M.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(H_.makeRotationFromEuler(ms)),h.material.toneMapped=re.getTransfer(A.colorSpace)!==pe,(u!==A||d!==A.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,p=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new I(new xe(2,2),new En({name:"BackgroundMaterial",uniforms:Vo(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=re.getTransfer(A.colorSpace)!==pe,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,p=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,M){_.getRGB(Ta,Ep(s)),n.buffers.color.setClear(Ta.r,Ta.g,Ta.b,M,r)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(a,l)},render:x,addToRenderList:f,dispose:w}}function W_(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let o=i,r=!1;function a(v,R,U,L,z){let V=!1;const k=u(L,U,R);o!==k&&(o=k,c(o.object)),V=p(v,L,U,z),V&&g(v,L,U,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,M(v,R,U,L),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,R,U){const L=U.wireframe===!0;let z=n[v.id];z===void 0&&(z={},n[v.id]=z);let V=z[R.id];V===void 0&&(V={},z[R.id]=V);let k=V[L];return k===void 0&&(k=d(l()),V[L]=k),k}function d(v){const R=[],U=[],L=[];for(let z=0;z<e;z++)R[z]=0,U[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:L,object:v,attributes:{},index:null}}function p(v,R,U,L){const z=o.attributes,V=R.attributes;let k=0;const $=U.getAttributes();for(const W in $)if($[W].location>=0){const pt=z[W];let Rt=V[W];if(Rt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(Rt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(Rt=v.instanceColor)),pt===void 0||pt.attribute!==Rt||Rt&&pt.data!==Rt.data)return!0;k++}return o.attributesNum!==k||o.index!==L}function g(v,R,U,L){const z={},V=R.attributes;let k=0;const $=U.getAttributes();for(const W in $)if($[W].location>=0){let pt=V[W];pt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor));const Rt={};Rt.attribute=pt,pt&&pt.data&&(Rt.data=pt.data),z[W]=Rt,k++}o.attributes=z,o.attributesNum=k,o.index=L}function x(){const v=o.newAttributes;for(let R=0,U=v.length;R<U;R++)v[R]=0}function f(v){m(v,0)}function m(v,R){const U=o.newAttributes,L=o.enabledAttributes,z=o.attributeDivisors;U[v]=1,L[v]===0&&(s.enableVertexAttribArray(v),L[v]=1),z[v]!==R&&(s.vertexAttribDivisor(v,R),z[v]=R)}function w(){const v=o.newAttributes,R=o.enabledAttributes;for(let U=0,L=R.length;U<L;U++)R[U]!==v[U]&&(s.disableVertexAttribArray(U),R[U]=0)}function _(v,R,U,L,z,V,k){k===!0?s.vertexAttribIPointer(v,R,U,z,V):s.vertexAttribPointer(v,R,U,L,z,V)}function M(v,R,U,L){x();const z=L.attributes,V=U.getAttributes(),k=R.defaultAttributeValues;for(const $ in V){const W=V[$];if(W.location>=0){let at=z[$];if(at===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(at=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(at=v.instanceColor)),at!==void 0){const pt=at.normalized,Rt=at.itemSize,Ft=t.get(at);if(Ft===void 0)continue;const jt=Ft.buffer,tt=Ft.type,lt=Ft.bytesPerElement,wt=tt===s.INT||tt===s.UNSIGNED_INT||at.gpuType===Tu;if(at.isInterleavedBufferAttribute){const dt=at.data,zt=dt.stride,kt=at.offset;if(dt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<W.locationSize;Yt++)m(W.location+Yt,dt.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Yt=0;Yt<W.locationSize;Yt++)f(W.location+Yt);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let Yt=0;Yt<W.locationSize;Yt++)_(W.location+Yt,Rt/W.locationSize,tt,pt,zt*lt,(kt+Rt/W.locationSize*Yt)*lt,wt)}else{if(at.isInstancedBufferAttribute){for(let dt=0;dt<W.locationSize;dt++)m(W.location+dt,at.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let dt=0;dt<W.locationSize;dt++)f(W.location+dt);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let dt=0;dt<W.locationSize;dt++)_(W.location+dt,Rt/W.locationSize,tt,pt,Rt*lt,Rt/W.locationSize*dt*lt,wt)}}else if(k!==void 0){const pt=k[$];if(pt!==void 0)switch(pt.length){case 2:s.vertexAttrib2fv(W.location,pt);break;case 3:s.vertexAttrib3fv(W.location,pt);break;case 4:s.vertexAttrib4fv(W.location,pt);break;default:s.vertexAttrib1fv(W.location,pt)}}}}w()}function A(){b();for(const v in n){const R=n[v];for(const U in R){const L=R[U];for(const z in L)h(L[z].object),delete L[z];delete R[U]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const U in R){const L=R[U];for(const z in L)h(L[z].object),delete L[z];delete R[U]}delete n[v.id]}function T(v){for(const R in n){const U=n[R];if(U[v.id]===void 0)continue;const L=U[v.id];for(const z in L)h(L[z].object),delete L[z];delete U[v.id]}}function b(){y(),r=!0,o!==i&&(o=i,c(o.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:b,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:f,disableUnusedAttributes:w}}function X_(s,t,e){let n;function i(c){n=c}function o(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function q_(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){return!(T!==ni&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===Oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Hi&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==vi&&!b)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),f=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:w,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:A,maxSamples:E}}function Y_(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new _s,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,x=u.clipIntersection,f=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||o&&!f)o?h(null):c();else{const w=o?0:n,_=w*4;let M=m.clippingState||null;l.value=M,M=h(g,d,_,p);for(let A=0;A!==_;++A)M[A]=e[A];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const x=u!==null?u.length:0;let f=null;if(x!==0){if(f=l.value,g!==!0||f===null){const m=p+x*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(f===null||f.length<m)&&(f=new Float32Array(m));for(let _=0,M=p;_!==x;++_,M+=4)r.copy(u[_]).applyMatrix4(w,a),r.normal.toArray(f,M),f[M+3]=r.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}function Z_(s){let t=new WeakMap;function e(r,a){return a===oh?r.mapping=Oo:a===rh&&(r.mapping=Bo),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===oh||a===rh)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new vg(l.height);return c.fromEquirectangularTexture(s,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const wo=4,jf=[.125,.215,.35,.446,.526,.582],Rs=20,pl=new Vu,Kf=new st;let ml=null,gl=0,xl=0,vl=!1;const Ms=(1+Math.sqrt(5))/2,co=1/Ms,Jf=[new N(-Ms,co,0),new N(Ms,co,0),new N(-co,0,Ms),new N(co,0,Ms),new N(0,Ms,-co),new N(0,Ms,co),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Qf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ml,gl,xl),this._renderer.xr.enabled=vl,t.scissorTest=!1,Ea(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oo||t.mapping===Bo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Oi,format:ni,colorSpace:Ho,depthBuffer:!1},i=td(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=td(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$_(o)),this._blurMaterial=j_(o,t,e)}return i}_compileMaterial(t){const e=new I(this._lodPlanes[0],t);this._renderer.compile(e,pl)}_sceneToCubeUV(t,e,n,i){const a=new Dn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Kf),h.toneMapping=ss,h.autoClear=!1;const p=new Y({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),g=new I(new Hr,p);let x=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,x=!0):(p.color.copy(Kf),x=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):w===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const _=this._cubeSize;Ea(i,w*_,m>2?_:0,_,_),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Oo||t.mapping===Bo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ed());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new I(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Ea(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,pl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Jf[(i-o-1)%Jf.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new I(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Rs-1),x=o/g,f=isFinite(o)?1+Math.floor(h*x):Rs;f>Rs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Rs}`);const m=[];let w=0;for(let T=0;T<Rs;++T){const b=T/x,y=Math.exp(-b*b/2);m.push(y),T===0?w+=y:T<f&&(w+=2*y)}for(let T=0;T<m.length;T++)m[T]=m[T]/w;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const M=this._sizeLods[i],A=3*M*(i>_-wo?i-_+wo:0),E=4*(this._cubeSize-M);Ea(e,A,E,3*M,2*M),l.setRenderTarget(e),l.render(u,pl)}}function $_(s){const t=[],e=[],n=[];let i=s;const o=s-wo+1+jf.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let l=1/a;r>s-wo?l=jf[r-s+wo-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,f=2,m=1,w=new Float32Array(x*g*p),_=new Float32Array(f*g*p),M=new Float32Array(m*g*p);for(let E=0;E<p;E++){const T=E%3*2/3-1,b=E>2?0:-1,y=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];w.set(y,x*g*E),_.set(d,f*g*E);const v=[E,E,E,E,E,E];M.set(v,m*g*E)}const A=new Me;A.setAttribute("position",new ze(w,x)),A.setAttribute("uv",new ze(_,f)),A.setAttribute("faceIndex",new ze(M,m)),t.push(A),i>wo&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function td(s,t,e){const n=new ii(s,t,e);return n.texture.mapping=Rc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function j_(s,t,e){const n=new Float32Array(Rs),i=new N(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wu(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function ed(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wu(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function nd(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Wu(){return`

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
	`}function K_(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===oh||l===rh,h=l===Oo||l===Bo;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Qf(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Qf(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function J_(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&mo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Q_(s,t,e,n){const i={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete i[d.id];const p=o.get(d);p&&(t.remove(p),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],s.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let x=0;if(p!==null){const w=p.array;x=p.version;for(let _=0,M=w.length;_<M;_+=3){const A=w[_+0],E=w[_+1],T=w[_+2];d.push(A,E,E,T,T,A)}}else if(g!==void 0){const w=g.array;x=g.version;for(let _=0,M=w.length/3-1;_<M;_+=3){const A=_+0,E=_+1,T=_+2;d.push(A,E,E,T,T,A)}}else return;const f=new(_p(d)?Tp:bp)(d,1);f.version=x;const m=o.get(u);m&&t.remove(m),o.set(u,f)}function h(u){const d=o.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function tM(s,t,e){let n;function i(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function l(d,p){s.drawElements(n,p,o,d*r),e.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,o,d*r,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,d,0,g);let f=0;for(let m=0;m<g;m++)f+=p[m];e.update(f,n,1)}function u(d,p,g,x){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)c(d[m]/r,p[m],x[m]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,o,d,0,x,0,g);let m=0;for(let w=0;w<g;w++)m+=p[w]*x[w];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function eM(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function nM(s,t,e){const n=new WeakMap,i=new ge;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let v=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var p=v;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),f===!0&&(M=3);let A=a.attributes.position.count*M,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const T=new Float32Array(A*E*4*u),b=new yp(T,A,E,u);b.type=vi,b.needsUpdate=!0;const y=M*4;for(let R=0;R<u;R++){const U=m[R],L=w[R],z=_[R],V=A*E*4*R;for(let k=0;k<U.count;k++){const $=k*y;g===!0&&(i.fromBufferAttribute(U,k),T[V+$+0]=i.x,T[V+$+1]=i.y,T[V+$+2]=i.z,T[V+$+3]=0),x===!0&&(i.fromBufferAttribute(L,k),T[V+$+4]=i.x,T[V+$+5]=i.y,T[V+$+6]=i.z,T[V+$+7]=0),f===!0&&(i.fromBufferAttribute(z,k),T[V+$+8]=i.x,T[V+$+9]=i.y,T[V+$+10]=i.z,T[V+$+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:b,size:new ut(A,E)},n.set(a,d),a.addEventListener("dispose",v)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:o}}function iM(s,t,e,n){let i=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}const Xp=new en,id=new Dp(1,1),qp=new yp,Yp=new ig,Zp=new Rp,sd=[],od=[],rd=new Float32Array(16),ad=new Float32Array(9),cd=new Float32Array(4);function Ko(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=sd[i];if(o===void 0&&(o=new Float32Array(i),sd[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function Be(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Lc(s,t){let e=od[t];e===void 0&&(e=new Int32Array(t),od[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function sM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function oM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2fv(this.addr,t),Ge(e,t)}}function rM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;s.uniform3fv(this.addr,t),Ge(e,t)}}function aM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4fv(this.addr,t),Ge(e,t)}}function cM(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(Be(e,n))return;cd.set(n),s.uniformMatrix2fv(this.addr,!1,cd),Ge(e,n)}}function lM(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(Be(e,n))return;ad.set(n),s.uniformMatrix3fv(this.addr,!1,ad),Ge(e,n)}}function hM(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(Be(e,n))return;rd.set(n),s.uniformMatrix4fv(this.addr,!1,rd),Ge(e,n)}}function uM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function fM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2iv(this.addr,t),Ge(e,t)}}function dM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3iv(this.addr,t),Ge(e,t)}}function pM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4iv(this.addr,t),Ge(e,t)}}function mM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function gM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2uiv(this.addr,t),Ge(e,t)}}function xM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3uiv(this.addr,t),Ge(e,t)}}function vM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4uiv(this.addr,t),Ge(e,t)}}function _M(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(id.compareFunction=vp,o=id):o=Xp,e.setTexture2D(t||o,i)}function MM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Yp,i)}function yM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Zp,i)}function wM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||qp,i)}function SM(s){switch(s){case 5126:return sM;case 35664:return oM;case 35665:return rM;case 35666:return aM;case 35674:return cM;case 35675:return lM;case 35676:return hM;case 5124:case 35670:return uM;case 35667:case 35671:return fM;case 35668:case 35672:return dM;case 35669:case 35673:return pM;case 5125:return mM;case 36294:return gM;case 36295:return xM;case 36296:return vM;case 35678:case 36198:case 36298:case 36306:case 35682:return _M;case 35679:case 36299:case 36307:return MM;case 35680:case 36300:case 36308:case 36293:return yM;case 36289:case 36303:case 36311:case 36292:return wM}}function bM(s,t){s.uniform1fv(this.addr,t)}function TM(s,t){const e=Ko(t,this.size,2);s.uniform2fv(this.addr,e)}function EM(s,t){const e=Ko(t,this.size,3);s.uniform3fv(this.addr,e)}function AM(s,t){const e=Ko(t,this.size,4);s.uniform4fv(this.addr,e)}function RM(s,t){const e=Ko(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function CM(s,t){const e=Ko(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function PM(s,t){const e=Ko(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function IM(s,t){s.uniform1iv(this.addr,t)}function LM(s,t){s.uniform2iv(this.addr,t)}function DM(s,t){s.uniform3iv(this.addr,t)}function UM(s,t){s.uniform4iv(this.addr,t)}function NM(s,t){s.uniform1uiv(this.addr,t)}function zM(s,t){s.uniform2uiv(this.addr,t)}function FM(s,t){s.uniform3uiv(this.addr,t)}function OM(s,t){s.uniform4uiv(this.addr,t)}function BM(s,t,e){const n=this.cache,i=t.length,o=Lc(e,i);Be(n,o)||(s.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Xp,o[r])}function GM(s,t,e){const n=this.cache,i=t.length,o=Lc(e,i);Be(n,o)||(s.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Yp,o[r])}function kM(s,t,e){const n=this.cache,i=t.length,o=Lc(e,i);Be(n,o)||(s.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Zp,o[r])}function HM(s,t,e){const n=this.cache,i=t.length,o=Lc(e,i);Be(n,o)||(s.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||qp,o[r])}function VM(s){switch(s){case 5126:return bM;case 35664:return TM;case 35665:return EM;case 35666:return AM;case 35674:return RM;case 35675:return CM;case 35676:return PM;case 5124:case 35670:return IM;case 35667:case 35671:return LM;case 35668:case 35672:return DM;case 35669:case 35673:return UM;case 5125:return NM;case 36294:return zM;case 36295:return FM;case 36296:return OM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return HM}}class WM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=SM(e.type)}}class XM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=VM(e.type)}}class qM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const _l=/(\w+)(\])?(\[|\.)?/g;function ld(s,t){s.seq.push(t),s.map[t.id]=t}function YM(s,t,e){const n=s.name,i=n.length;for(_l.lastIndex=0;;){const o=_l.exec(n),r=_l.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){ld(e,c===void 0?new WM(a,s,t):new XM(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new qM(a),ld(e,u)),e=u}}}class qa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);YM(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function hd(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const ZM=37297;let $M=0;function jM(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const ud=new Wt;function KM(s){re._getMatrix(ud,re.workingColorSpace,s);const t=`mat3( ${ud.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(s)){case ic:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function fd(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+jM(s.getShaderSource(t),r)}else return i}function JM(s,t){const e=KM(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function QM(s,t){let e;switch(t){case Pm:e="Linear";break;case Im:e="Reinhard";break;case Lm:e="Cineon";break;case rp:e="ACESFilmic";break;case Um:e="AgX";break;case Nm:e="Neutral";break;case Dm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Aa=new N;function ty(){re.getLuminanceCoefficients(Aa);const s=Aa.x.toFixed(4),t=Aa.y.toFixed(4),e=Aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ey(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function ny(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function iy(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function xr(s){return s!==""}function dd(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(s){return s.replace(sy,ry)}const oy=new Map;function ry(s,t){let e=qt[t];if(e===void 0){const n=oy.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gh(e)}const ay=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(s){return s.replace(ay,cy)}function cy(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function gd(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function ly(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ip?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===sp?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ii&&(t="SHADOWMAP_TYPE_VSM"),t}function hy(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Oo:case Bo:t="ENVMAP_TYPE_CUBE";break;case Rc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function uy(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bo:t="ENVMAP_MODE_REFRACTION";break}return t}function fy(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case op:t="ENVMAP_BLENDING_MULTIPLY";break;case Rm:t="ENVMAP_BLENDING_MIX";break;case Cm:t="ENVMAP_BLENDING_ADD";break}return t}function dy(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function py(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=ly(e),c=hy(e),h=uy(e),u=fy(e),d=dy(e),p=ey(e),g=ny(o),x=i.createProgram();let f,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),m.length>0&&(m+=`
`)):(f=[gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),m=[gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ss?"#define TONE_MAPPING":"",e.toneMapping!==ss?qt.tonemapping_pars_fragment:"",e.toneMapping!==ss?QM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,JM("linearToOutputTexel",e.outputColorSpace),ty(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xr).join(`
`)),r=Gh(r),r=dd(r,e),r=pd(r,e),a=Gh(a),a=dd(a,e),a=pd(a,e),r=md(r),a=md(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",e.glslVersion===df?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=w+f+r,M=w+m+a,A=hd(i,i.VERTEX_SHADER,_),E=hd(i,i.FRAGMENT_SHADER,M);i.attachShader(x,A),i.attachShader(x,E),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(R){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(x).trim(),L=i.getShaderInfoLog(A).trim(),z=i.getShaderInfoLog(E).trim();let V=!0,k=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,A,E);else{const $=fd(i,A,"vertex"),W=fd(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+$+`
`+W)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||z==="")&&(k=!1);k&&(R.diagnostics={runnable:V,programLog:U,vertexShader:{log:L,prefix:f},fragmentShader:{log:z,prefix:m}})}i.deleteShader(A),i.deleteShader(E),b=new qa(i,x),y=iy(i,x)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(x,ZM)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$M++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}let my=0;class gy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new xy(t),e.set(t,n)),n}}class xy{constructor(t){this.id=my++,this.code=t,this.usedTimes=0}}function vy(s,t,e,n,i,o,r){const a=new wp,l=new gy,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function f(y,v,R,U,L){const z=U.fog,V=L.geometry,k=y.isMeshStandardMaterial?U.environment:null,$=(y.isMeshStandardMaterial?e:t).get(y.envMap||k),W=$&&$.mapping===Rc?$.image.height:null,at=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const pt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Rt=pt!==void 0?pt.length:0;let Ft=0;V.morphAttributes.position!==void 0&&(Ft=1),V.morphAttributes.normal!==void 0&&(Ft=2),V.morphAttributes.color!==void 0&&(Ft=3);let jt,tt,lt,wt;if(at){const fe=hi[at];jt=fe.vertexShader,tt=fe.fragmentShader}else jt=y.vertexShader,tt=y.fragmentShader,l.update(y),lt=l.getVertexShaderID(y),wt=l.getFragmentShaderID(y);const dt=s.getRenderTarget(),zt=s.state.buffers.depth.getReversed(),kt=L.isInstancedMesh===!0,Yt=L.isBatchedMesh===!0,Ee=!!y.map,te=!!y.matcap,Ie=!!$,O=!!y.aoMap,On=!!y.lightMap,Kt=!!y.bumpMap,Jt=!!y.normalMap,It=!!y.displacementMap,ye=!!y.emissiveMap,Pt=!!y.metalnessMap,D=!!y.roughnessMap,C=y.anisotropy>0,X=y.clearcoat>0,nt=y.dispersion>0,ot=y.iridescence>0,et=y.sheen>0,Ct=y.transmission>0,vt=C&&!!y.anisotropyMap,bt=X&&!!y.clearcoatMap,ee=X&&!!y.clearcoatNormalMap,ht=X&&!!y.clearcoatRoughnessMap,Tt=ot&&!!y.iridescenceMap,Nt=ot&&!!y.iridescenceThicknessMap,Ot=et&&!!y.sheenColorMap,Et=et&&!!y.sheenRoughnessMap,Qt=!!y.specularMap,Xt=!!y.specularColorMap,ve=!!y.specularIntensityMap,B=Ct&&!!y.transmissionMap,gt=Ct&&!!y.thicknessMap,Q=!!y.gradientMap,it=!!y.alphaMap,Mt=y.alphaTest>0,_t=!!y.alphaHash,Vt=!!y.extensions;let Ce=ss;y.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Ce=s.toneMapping);const $e={shaderID:at,shaderType:y.type,shaderName:y.name,vertexShader:jt,fragmentShader:tt,defines:y.defines,customVertexShaderID:lt,customFragmentShaderID:wt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Yt,batchingColor:Yt&&L._colorsTexture!==null,instancing:kt,instancingColor:kt&&L.instanceColor!==null,instancingMorph:kt&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?s.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Ho,alphaToCoverage:!!y.alphaToCoverage,map:Ee,matcap:te,envMap:Ie,envMapMode:Ie&&$.mapping,envMapCubeUVHeight:W,aoMap:O,lightMap:On,bumpMap:Kt,normalMap:Jt,displacementMap:d&&It,emissiveMap:ye,normalMapObjectSpace:Jt&&y.normalMapType===Bm,normalMapTangentSpace:Jt&&y.normalMapType===xp,metalnessMap:Pt,roughnessMap:D,anisotropy:C,anisotropyMap:vt,clearcoat:X,clearcoatMap:bt,clearcoatNormalMap:ee,clearcoatRoughnessMap:ht,dispersion:nt,iridescence:ot,iridescenceMap:Tt,iridescenceThicknessMap:Nt,sheen:et,sheenColorMap:Ot,sheenRoughnessMap:Et,specularMap:Qt,specularColorMap:Xt,specularIntensityMap:ve,transmission:Ct,transmissionMap:B,thicknessMap:gt,gradientMap:Q,opaque:y.transparent===!1&&y.blending===Eo&&y.alphaToCoverage===!1,alphaMap:it,alphaTest:Mt,alphaHash:_t,combine:y.combine,mapUv:Ee&&x(y.map.channel),aoMapUv:O&&x(y.aoMap.channel),lightMapUv:On&&x(y.lightMap.channel),bumpMapUv:Kt&&x(y.bumpMap.channel),normalMapUv:Jt&&x(y.normalMap.channel),displacementMapUv:It&&x(y.displacementMap.channel),emissiveMapUv:ye&&x(y.emissiveMap.channel),metalnessMapUv:Pt&&x(y.metalnessMap.channel),roughnessMapUv:D&&x(y.roughnessMap.channel),anisotropyMapUv:vt&&x(y.anisotropyMap.channel),clearcoatMapUv:bt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Et&&x(y.sheenRoughnessMap.channel),specularMapUv:Qt&&x(y.specularMap.channel),specularColorMapUv:Xt&&x(y.specularColorMap.channel),specularIntensityMapUv:ve&&x(y.specularIntensityMap.channel),transmissionMapUv:B&&x(y.transmissionMap.channel),thicknessMapUv:gt&&x(y.thicknessMap.channel),alphaMapUv:it&&x(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Jt||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!V.attributes.uv&&(Ee||it),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:zt,skinning:L.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Ft,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Ee&&y.map.isVideoTexture===!0&&re.getTransfer(y.map.colorSpace)===pe,decodeVideoTextureEmissive:ye&&y.emissiveMap.isVideoTexture===!0&&re.getTransfer(y.emissiveMap.colorSpace)===pe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dt,flipSided:y.side===Sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Vt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&y.extensions.multiDraw===!0||Yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function m(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)v.push(R),v.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(w(v,y),_(v,y),v.push(s.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function w(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function _(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const v=g[y.type];let R;if(v){const U=hi[v];R=rc.clone(U.uniforms)}else R=y.uniforms;return R}function A(y,v){let R;for(let U=0,L=h.length;U<L;U++){const z=h[U];if(z.cacheKey===v){R=z,++R.usedTimes;break}}return R===void 0&&(R=new py(s,v,y,o),h.push(R)),R}function E(y){if(--y.usedTimes===0){const v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function T(y){l.remove(y)}function b(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:M,acquireProgram:A,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:b}}function _y(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,l){s.get(r)[a]=l}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function My(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function xd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function vd(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(u,d,p,g,x,f){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:f},s[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=f),t++,m}function a(u,d,p,g,x,f){const m=r(u,d,p,g,x,f);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):e.push(m)}function l(u,d,p,g,x,f){const m=r(u,d,p,g,x,f);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||My),n.length>1&&n.sort(d||xd),i.length>1&&i.sort(d||xd)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:l,finish:h,sort:c}}function yy(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new vd,s.set(n,[r])):i>=o.length?(r=new vd,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function wy(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new st};break;case"SpotLight":e={position:new N,direction:new N,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new st,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new st,groundColor:new st};break;case"RectAreaLight":e={color:new st,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function Sy(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let by=0;function Ty(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ey(s){const t=new wy,e=Sy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,o=new se,r=new se;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,x=0,f=0,m=0,w=0,_=0,M=0,A=0,E=0,T=0;c.sort(Ty);for(let y=0,v=c.length;y<v;y++){const R=c[y],U=R.color,L=R.intensity,z=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=U.r*L,u+=U.g*L,d+=U.b*L;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],L);T++}else if(R.isDirectionalLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const $=R.shadow,W=e.get(R);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=R.shadow.matrix,w++}n.directional[p]=k,p++}else if(R.isSpotLight){const k=t.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(U).multiplyScalar(L),k.distance=z,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[x]=k;const $=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,$.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[x]=$.matrix,R.castShadow){const W=e.get(R);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=V,M++}x++}else if(R.isRectAreaLight){const k=t.get(R);k.color.copy(U).multiplyScalar(L),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[f]=k,f++}else if(R.isPointLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const $=R.shadow,W=e.get(R);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=R.shadow.matrix,_++}n.point[g]=k,g++}else if(R.isHemisphereLight){const k=t.get(R);k.skyColor.copy(R.color).multiplyScalar(L),k.groundColor.copy(R.groundColor).multiplyScalar(L),n.hemi[m]=k,m++}}f>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const b=n.hash;(b.directionalLength!==p||b.pointLength!==g||b.spotLength!==x||b.rectAreaLength!==f||b.hemiLength!==m||b.numDirectionalShadows!==w||b.numPointShadows!==_||b.numSpotShadows!==M||b.numSpotMaps!==A||b.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=f,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,b.directionalLength=p,b.pointLength=g,b.spotLength=x,b.rectAreaLength=f,b.hemiLength=m,b.numDirectionalShadows=w,b.numPointShadows=_,b.numSpotShadows=M,b.numSpotMaps=A,b.numLightProbes=T,n.version=by++)}function l(c,h){let u=0,d=0,p=0,g=0,x=0;const f=h.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){const _=c[m];if(_.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(f),u++}else if(_.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(f),p++}else if(_.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),r.identity(),o.copy(_.matrixWorld),o.premultiply(f),r.extractRotation(o),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),g++}else if(_.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),d++}else if(_.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(f),x++}}}return{setup:a,setupView:l,state:n}}function _d(s){const t=new Ey(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function Ay(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new _d(s),t.set(i,[a])):o>=r.length?(a=new _d(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Ry=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cy=`uniform sampler2D shadow_pass;
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
}`;function Py(s,t,e){let n=new Uu;const i=new ut,o=new ut,r=new ge,a=new ex({depthPacking:Om}),l=new nx,c={},h=e.maxTextureSize,u={[os]:Sn,[Sn]:os,[Dt]:Dt},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Ry,fragmentShader:Cy}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new I(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ip;let m=this.type;this.render=function(E,T,b){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;const y=s.getRenderTarget(),v=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Fi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const L=m!==Ii&&this.type===Ii,z=m===Ii&&this.type!==Ii;for(let V=0,k=E.length;V<k;V++){const $=E[V],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const at=W.getFrameExtents();if(i.multiply(at),o.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/at.x),i.x=o.x*at.x,W.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/at.y),i.y=o.y*at.y,W.mapSize.y=o.y)),W.map===null||L===!0||z===!0){const Rt=this.type!==Ii?{minFilter:Fn,magFilter:Fn}:{};W.map!==null&&W.map.dispose(),W.map=new ii(i.x,i.y,Rt),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const pt=W.getViewportCount();for(let Rt=0;Rt<pt;Rt++){const Ft=W.getViewport(Rt);r.set(o.x*Ft.x,o.y*Ft.y,o.x*Ft.z,o.y*Ft.w),U.viewport(r),W.updateMatrices($,Rt),n=W.getFrustum(),M(T,b,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===Ii&&w(W,b),W.needsUpdate=!1}m=this.type,f.needsUpdate=!1,s.setRenderTarget(y,v,R)};function w(E,T){const b=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ii(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(T,null,b,d,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(T,null,b,p,x,null)}function _(E,T,b,y){let v=null;const R=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)v=R;else if(v=b.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=v.uuid,L=T.uuid;let z=c[U];z===void 0&&(z={},c[U]=z);let V=z[L];V===void 0&&(V=v.clone(),z[L]=V,T.addEventListener("dispose",A)),v=V}if(v.visible=T.visible,v.wireframe=T.wireframe,y===Ii?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:u[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,b.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=s.properties.get(v);U.light=b}return v}function M(E,T,b,y,v){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Ii)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const L=t.update(E),z=E.material;if(Array.isArray(z)){const V=L.groups;for(let k=0,$=V.length;k<$;k++){const W=V[k],at=z[W.materialIndex];if(at&&at.visible){const pt=_(E,at,y,v);E.onBeforeShadow(s,E,T,b,L,pt,W),s.renderBufferDirect(b,null,L,pt,E,W),E.onAfterShadow(s,E,T,b,L,pt,W)}}}else if(z.visible){const V=_(E,z,y,v);E.onBeforeShadow(s,E,T,b,L,V,null),s.renderBufferDirect(b,null,L,V,E,null),E.onAfterShadow(s,E,T,b,L,V,null)}}const U=E.children;for(let L=0,z=U.length;L<z;L++)M(U[L],T,b,y,v)}function A(E){E.target.removeEventListener("dispose",A);for(const b in c){const y=c[b],v=E.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const Iy={[Jl]:Ql,[th]:ih,[eh]:sh,[Fo]:nh,[Ql]:Jl,[ih]:th,[sh]:eh,[nh]:Fo};function Ly(s,t){function e(){let B=!1;const gt=new ge;let Q=null;const it=new ge(0,0,0,0);return{setMask:function(Mt){Q!==Mt&&!B&&(s.colorMask(Mt,Mt,Mt,Mt),Q=Mt)},setLocked:function(Mt){B=Mt},setClear:function(Mt,_t,Vt,Ce,$e){$e===!0&&(Mt*=Ce,_t*=Ce,Vt*=Ce),gt.set(Mt,_t,Vt,Ce),it.equals(gt)===!1&&(s.clearColor(Mt,_t,Vt,Ce),it.copy(gt))},reset:function(){B=!1,Q=null,it.set(-1,0,0,0)}}}function n(){let B=!1,gt=!1,Q=null,it=null,Mt=null;return{setReversed:function(_t){if(gt!==_t){const Vt=t.get("EXT_clip_control");gt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const Ce=Mt;Mt=null,this.setClear(Ce)}gt=_t},getReversed:function(){return gt},setTest:function(_t){_t?dt(s.DEPTH_TEST):zt(s.DEPTH_TEST)},setMask:function(_t){Q!==_t&&!B&&(s.depthMask(_t),Q=_t)},setFunc:function(_t){if(gt&&(_t=Iy[_t]),it!==_t){switch(_t){case Jl:s.depthFunc(s.NEVER);break;case Ql:s.depthFunc(s.ALWAYS);break;case th:s.depthFunc(s.LESS);break;case Fo:s.depthFunc(s.LEQUAL);break;case eh:s.depthFunc(s.EQUAL);break;case nh:s.depthFunc(s.GEQUAL);break;case ih:s.depthFunc(s.GREATER);break;case sh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}it=_t}},setLocked:function(_t){B=_t},setClear:function(_t){Mt!==_t&&(gt&&(_t=1-_t),s.clearDepth(_t),Mt=_t)},reset:function(){B=!1,Q=null,it=null,Mt=null,gt=!1}}}function i(){let B=!1,gt=null,Q=null,it=null,Mt=null,_t=null,Vt=null,Ce=null,$e=null;return{setTest:function(fe){B||(fe?dt(s.STENCIL_TEST):zt(s.STENCIL_TEST))},setMask:function(fe){gt!==fe&&!B&&(s.stencilMask(fe),gt=fe)},setFunc:function(fe,Kn,Ti){(Q!==fe||it!==Kn||Mt!==Ti)&&(s.stencilFunc(fe,Kn,Ti),Q=fe,it=Kn,Mt=Ti)},setOp:function(fe,Kn,Ti){(_t!==fe||Vt!==Kn||Ce!==Ti)&&(s.stencilOp(fe,Kn,Ti),_t=fe,Vt=Kn,Ce=Ti)},setLocked:function(fe){B=fe},setClear:function(fe){$e!==fe&&(s.clearStencil(fe),$e=fe)},reset:function(){B=!1,gt=null,Q=null,it=null,Mt=null,_t=null,Vt=null,Ce=null,$e=null}}}const o=new e,r=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,x=!1,f=null,m=null,w=null,_=null,M=null,A=null,E=null,T=new st(0,0,0),b=0,y=!1,v=null,R=null,U=null,L=null,z=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,$=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=$>=2);let at=null,pt={};const Rt=s.getParameter(s.SCISSOR_BOX),Ft=s.getParameter(s.VIEWPORT),jt=new ge().fromArray(Rt),tt=new ge().fromArray(Ft);function lt(B,gt,Q,it){const Mt=new Uint8Array(4),_t=s.createTexture();s.bindTexture(B,_t),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<Q;Vt++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(gt,0,s.RGBA,1,1,it,0,s.RGBA,s.UNSIGNED_BYTE,Mt):s.texImage2D(gt+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Mt);return _t}const wt={};wt[s.TEXTURE_2D]=lt(s.TEXTURE_2D,s.TEXTURE_2D,1),wt[s.TEXTURE_CUBE_MAP]=lt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[s.TEXTURE_2D_ARRAY]=lt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),wt[s.TEXTURE_3D]=lt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),dt(s.DEPTH_TEST),r.setFunc(Fo),Kt(!1),Jt(lf),dt(s.CULL_FACE),O(Fi);function dt(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function zt(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function kt(B,gt){return u[B]!==gt?(s.bindFramebuffer(B,gt),u[B]=gt,B===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=gt),B===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=gt),!0):!1}function Yt(B,gt){let Q=p,it=!1;if(B){Q=d.get(gt),Q===void 0&&(Q=[],d.set(gt,Q));const Mt=B.textures;if(Q.length!==Mt.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,Vt=Mt.length;_t<Vt;_t++)Q[_t]=s.COLOR_ATTACHMENT0+_t;Q.length=Mt.length,it=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,it=!0);it&&s.drawBuffers(Q)}function Ee(B){return g!==B?(s.useProgram(B),g=B,!0):!1}const te={[As]:s.FUNC_ADD,[um]:s.FUNC_SUBTRACT,[fm]:s.FUNC_REVERSE_SUBTRACT};te[dm]=s.MIN,te[pm]=s.MAX;const Ie={[mm]:s.ZERO,[gm]:s.ONE,[xm]:s.SRC_COLOR,[jl]:s.SRC_ALPHA,[Sm]:s.SRC_ALPHA_SATURATE,[ym]:s.DST_COLOR,[_m]:s.DST_ALPHA,[vm]:s.ONE_MINUS_SRC_COLOR,[Kl]:s.ONE_MINUS_SRC_ALPHA,[wm]:s.ONE_MINUS_DST_COLOR,[Mm]:s.ONE_MINUS_DST_ALPHA,[bm]:s.CONSTANT_COLOR,[Tm]:s.ONE_MINUS_CONSTANT_COLOR,[Em]:s.CONSTANT_ALPHA,[Am]:s.ONE_MINUS_CONSTANT_ALPHA};function O(B,gt,Q,it,Mt,_t,Vt,Ce,$e,fe){if(B===Fi){x===!0&&(zt(s.BLEND),x=!1);return}if(x===!1&&(dt(s.BLEND),x=!0),B!==hm){if(B!==f||fe!==y){if((m!==As||M!==As)&&(s.blendEquation(s.FUNC_ADD),m=As,M=As),fe)switch(B){case Eo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case le:s.blendFunc(s.ONE,s.ONE);break;case hf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case uf:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Eo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case le:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case hf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case uf:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}w=null,_=null,A=null,E=null,T.set(0,0,0),b=0,f=B,y=fe}return}Mt=Mt||gt,_t=_t||Q,Vt=Vt||it,(gt!==m||Mt!==M)&&(s.blendEquationSeparate(te[gt],te[Mt]),m=gt,M=Mt),(Q!==w||it!==_||_t!==A||Vt!==E)&&(s.blendFuncSeparate(Ie[Q],Ie[it],Ie[_t],Ie[Vt]),w=Q,_=it,A=_t,E=Vt),(Ce.equals(T)===!1||$e!==b)&&(s.blendColor(Ce.r,Ce.g,Ce.b,$e),T.copy(Ce),b=$e),f=B,y=!1}function On(B,gt){B.side===Dt?zt(s.CULL_FACE):dt(s.CULL_FACE);let Q=B.side===Sn;gt&&(Q=!Q),Kt(Q),B.blending===Eo&&B.transparent===!1?O(Fi):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),o.setMask(B.colorWrite);const it=B.stencilWrite;a.setTest(it),it&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ye(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?dt(s.SAMPLE_ALPHA_TO_COVERAGE):zt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(B){v!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),v=B)}function Jt(B){B!==cm?(dt(s.CULL_FACE),B!==R&&(B===lf?s.cullFace(s.BACK):B===lm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):zt(s.CULL_FACE),R=B}function It(B){B!==U&&(k&&s.lineWidth(B),U=B)}function ye(B,gt,Q){B?(dt(s.POLYGON_OFFSET_FILL),(L!==gt||z!==Q)&&(s.polygonOffset(gt,Q),L=gt,z=Q)):zt(s.POLYGON_OFFSET_FILL)}function Pt(B){B?dt(s.SCISSOR_TEST):zt(s.SCISSOR_TEST)}function D(B){B===void 0&&(B=s.TEXTURE0+V-1),at!==B&&(s.activeTexture(B),at=B)}function C(B,gt,Q){Q===void 0&&(at===null?Q=s.TEXTURE0+V-1:Q=at);let it=pt[Q];it===void 0&&(it={type:void 0,texture:void 0},pt[Q]=it),(it.type!==B||it.texture!==gt)&&(at!==Q&&(s.activeTexture(Q),at=Q),s.bindTexture(B,gt||wt[B]),it.type=B,it.texture=gt)}function X(){const B=pt[at];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function nt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function vt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function bt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Nt(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ot(B){jt.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),jt.copy(B))}function Et(B){tt.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),tt.copy(B))}function Qt(B,gt){let Q=c.get(gt);Q===void 0&&(Q=new WeakMap,c.set(gt,Q));let it=Q.get(B);it===void 0&&(it=s.getUniformBlockIndex(gt,B.name),Q.set(B,it))}function Xt(B,gt){const it=c.get(gt).get(B);l.get(gt)!==it&&(s.uniformBlockBinding(gt,it,B.__bindingPointIndex),l.set(gt,it))}function ve(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},at=null,pt={},u={},d=new WeakMap,p=[],g=null,x=!1,f=null,m=null,w=null,_=null,M=null,A=null,E=null,T=new st(0,0,0),b=0,y=!1,v=null,R=null,U=null,L=null,z=null,jt.set(0,0,s.canvas.width,s.canvas.height),tt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:dt,disable:zt,bindFramebuffer:kt,drawBuffers:Yt,useProgram:Ee,setBlending:O,setMaterial:On,setFlipSided:Kt,setCullFace:Jt,setLineWidth:It,setPolygonOffset:ye,setScissorTest:Pt,activeTexture:D,bindTexture:C,unbindTexture:X,compressedTexImage2D:nt,compressedTexImage3D:ot,texImage2D:Tt,texImage3D:Nt,updateUBOMapping:Qt,uniformBlockBinding:Xt,texStorage2D:ee,texStorage3D:ht,texSubImage2D:et,texSubImage3D:Ct,compressedTexSubImage2D:vt,compressedTexSubImage3D:bt,scissor:Ot,viewport:Et,reset:ve}}function Dy(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,C){return p?new OffscreenCanvas(D,C):oc("canvas")}function x(D,C,X){let nt=1;const ot=Pt(D);if((ot.width>X||ot.height>X)&&(nt=X/Math.max(ot.width,ot.height)),nt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const et=Math.floor(nt*ot.width),Ct=Math.floor(nt*ot.height);u===void 0&&(u=g(et,Ct));const vt=C?g(et,Ct):u;return vt.width=et,vt.height=Ct,vt.getContext("2d").drawImage(D,0,0,et,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+et+"x"+Ct+")."),vt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),D;return D}function f(D){return D.generateMipmaps}function m(D){s.generateMipmap(D)}function w(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(D,C,X,nt,ot=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let et=C;if(C===s.RED&&(X===s.FLOAT&&(et=s.R32F),X===s.HALF_FLOAT&&(et=s.R16F),X===s.UNSIGNED_BYTE&&(et=s.R8)),C===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.R8UI),X===s.UNSIGNED_SHORT&&(et=s.R16UI),X===s.UNSIGNED_INT&&(et=s.R32UI),X===s.BYTE&&(et=s.R8I),X===s.SHORT&&(et=s.R16I),X===s.INT&&(et=s.R32I)),C===s.RG&&(X===s.FLOAT&&(et=s.RG32F),X===s.HALF_FLOAT&&(et=s.RG16F),X===s.UNSIGNED_BYTE&&(et=s.RG8)),C===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.RG8UI),X===s.UNSIGNED_SHORT&&(et=s.RG16UI),X===s.UNSIGNED_INT&&(et=s.RG32UI),X===s.BYTE&&(et=s.RG8I),X===s.SHORT&&(et=s.RG16I),X===s.INT&&(et=s.RG32I)),C===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.RGB8UI),X===s.UNSIGNED_SHORT&&(et=s.RGB16UI),X===s.UNSIGNED_INT&&(et=s.RGB32UI),X===s.BYTE&&(et=s.RGB8I),X===s.SHORT&&(et=s.RGB16I),X===s.INT&&(et=s.RGB32I)),C===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(et=s.RGBA16UI),X===s.UNSIGNED_INT&&(et=s.RGBA32UI),X===s.BYTE&&(et=s.RGBA8I),X===s.SHORT&&(et=s.RGBA16I),X===s.INT&&(et=s.RGBA32I)),C===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(et=s.RGB9_E5),C===s.RGBA){const Ct=ot?ic:re.getTransfer(nt);X===s.FLOAT&&(et=s.RGBA32F),X===s.HALF_FLOAT&&(et=s.RGBA16F),X===s.UNSIGNED_BYTE&&(et=Ct===pe?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function M(D,C){let X;return D?C===null||C===Fs||C===Go?X=s.DEPTH24_STENCIL8:C===vi?X=s.DEPTH32F_STENCIL8:C===Dr&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Fs||C===Go?X=s.DEPTH_COMPONENT24:C===vi?X=s.DEPTH_COMPONENT32F:C===Dr&&(X=s.DEPTH_COMPONENT16),X}function A(D,C){return f(D)===!0||D.isFramebufferTexture&&D.minFilter!==Fn&&D.minFilter!==xi?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function E(D){const C=D.target;C.removeEventListener("dispose",E),b(C),C.isVideoTexture&&h.delete(C)}function T(D){const C=D.target;C.removeEventListener("dispose",T),v(C)}function b(D){const C=n.get(D);if(C.__webglInit===void 0)return;const X=D.source,nt=d.get(X);if(nt){const ot=nt[C.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&y(D),Object.keys(nt).length===0&&d.delete(X)}n.remove(D)}function y(D){const C=n.get(D);s.deleteTexture(C.__webglTexture);const X=D.source,nt=d.get(X);delete nt[C.__cacheKey],r.memory.textures--}function v(D){const C=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(C.__webglFramebuffer[nt]))for(let ot=0;ot<C.__webglFramebuffer[nt].length;ot++)s.deleteFramebuffer(C.__webglFramebuffer[nt][ot]);else s.deleteFramebuffer(C.__webglFramebuffer[nt]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[nt])}else{if(Array.isArray(C.__webglFramebuffer))for(let nt=0;nt<C.__webglFramebuffer.length;nt++)s.deleteFramebuffer(C.__webglFramebuffer[nt]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let nt=0;nt<C.__webglColorRenderbuffer.length;nt++)C.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[nt]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const X=D.textures;for(let nt=0,ot=X.length;nt<ot;nt++){const et=n.get(X[nt]);et.__webglTexture&&(s.deleteTexture(et.__webglTexture),r.memory.textures--),n.remove(X[nt])}n.remove(D)}let R=0;function U(){R=0}function L(){const D=R;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),R+=1,D}function z(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function V(D,C){const X=n.get(D);if(D.isVideoTexture&&It(D),D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){const nt=D.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(X,D,C);return}}e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+C)}function k(D,C){const X=n.get(D);if(D.version>0&&X.__version!==D.version){tt(X,D,C);return}e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+C)}function $(D,C){const X=n.get(D);if(D.version>0&&X.__version!==D.version){tt(X,D,C);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+C)}function W(D,C){const X=n.get(D);if(D.version>0&&X.__version!==D.version){lt(X,D,C);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+C)}const at={[nc]:s.REPEAT,[Cs]:s.CLAMP_TO_EDGE,[ah]:s.MIRRORED_REPEAT},pt={[Fn]:s.NEAREST,[zm]:s.NEAREST_MIPMAP_NEAREST,[jr]:s.NEAREST_MIPMAP_LINEAR,[xi]:s.LINEAR,[Oc]:s.LINEAR_MIPMAP_NEAREST,[Ps]:s.LINEAR_MIPMAP_LINEAR},Rt={[Gm]:s.NEVER,[qm]:s.ALWAYS,[km]:s.LESS,[vp]:s.LEQUAL,[Hm]:s.EQUAL,[Xm]:s.GEQUAL,[Vm]:s.GREATER,[Wm]:s.NOTEQUAL};function Ft(D,C){if(C.type===vi&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===xi||C.magFilter===Oc||C.magFilter===jr||C.magFilter===Ps||C.minFilter===xi||C.minFilter===Oc||C.minFilter===jr||C.minFilter===Ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,at[C.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,at[C.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,at[C.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,pt[C.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,pt[C.minFilter]),C.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,Rt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Fn||C.minFilter!==jr&&C.minFilter!==Ps||C.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");s.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function jt(D,C){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",E));const nt=C.source;let ot=d.get(nt);ot===void 0&&(ot={},d.set(nt,ot));const et=z(C);if(et!==D.__cacheKey){ot[et]===void 0&&(ot[et]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,X=!0),ot[et].usedTimes++;const Ct=ot[D.__cacheKey];Ct!==void 0&&(ot[D.__cacheKey].usedTimes--,Ct.usedTimes===0&&y(C)),D.__cacheKey=et,D.__webglTexture=ot[et].texture}return X}function tt(D,C,X){let nt=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(nt=s.TEXTURE_3D);const ot=jt(D,C),et=C.source;e.bindTexture(nt,D.__webglTexture,s.TEXTURE0+X);const Ct=n.get(et);if(et.version!==Ct.__version||ot===!0){e.activeTexture(s.TEXTURE0+X);const vt=re.getPrimaries(re.workingColorSpace),bt=C.colorSpace===ts?null:re.getPrimaries(C.colorSpace),ee=C.colorSpace===ts||vt===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ht=x(C.image,!1,i.maxTextureSize);ht=ye(C,ht);const Tt=o.convert(C.format,C.colorSpace),Nt=o.convert(C.type);let Ot=_(C.internalFormat,Tt,Nt,C.colorSpace,C.isVideoTexture);Ft(nt,C);let Et;const Qt=C.mipmaps,Xt=C.isVideoTexture!==!0,ve=Ct.__version===void 0||ot===!0,B=et.dataReady,gt=A(C,ht);if(C.isDepthTexture)Ot=M(C.format===ko,C.type),ve&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,Ot,ht.width,ht.height):e.texImage2D(s.TEXTURE_2D,0,Ot,ht.width,ht.height,0,Tt,Nt,null));else if(C.isDataTexture)if(Qt.length>0){Xt&&ve&&e.texStorage2D(s.TEXTURE_2D,gt,Ot,Qt[0].width,Qt[0].height);for(let Q=0,it=Qt.length;Q<it;Q++)Et=Qt[Q],Xt?B&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,Et.width,Et.height,Tt,Nt,Et.data):e.texImage2D(s.TEXTURE_2D,Q,Ot,Et.width,Et.height,0,Tt,Nt,Et.data);C.generateMipmaps=!1}else Xt?(ve&&e.texStorage2D(s.TEXTURE_2D,gt,Ot,ht.width,ht.height),B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht.width,ht.height,Tt,Nt,ht.data)):e.texImage2D(s.TEXTURE_2D,0,Ot,ht.width,ht.height,0,Tt,Nt,ht.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Xt&&ve&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Ot,Qt[0].width,Qt[0].height,ht.depth);for(let Q=0,it=Qt.length;Q<it;Q++)if(Et=Qt[Q],C.format!==ni)if(Tt!==null)if(Xt){if(B)if(C.layerUpdates.size>0){const Mt=$f(Et.width,Et.height,C.format,C.type);for(const _t of C.layerUpdates){const Vt=Et.data.subarray(_t*Mt/Et.data.BYTES_PER_ELEMENT,(_t+1)*Mt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,_t,Et.width,Et.height,1,Tt,Vt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,Et.width,Et.height,ht.depth,Tt,Et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,Ot,Et.width,Et.height,ht.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?B&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,Et.width,Et.height,ht.depth,Tt,Nt,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,Ot,Et.width,Et.height,ht.depth,0,Tt,Nt,Et.data)}else{Xt&&ve&&e.texStorage2D(s.TEXTURE_2D,gt,Ot,Qt[0].width,Qt[0].height);for(let Q=0,it=Qt.length;Q<it;Q++)Et=Qt[Q],C.format!==ni?Tt!==null?Xt?B&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,Et.width,Et.height,Tt,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,Ot,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?B&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,Et.width,Et.height,Tt,Nt,Et.data):e.texImage2D(s.TEXTURE_2D,Q,Ot,Et.width,Et.height,0,Tt,Nt,Et.data)}else if(C.isDataArrayTexture)if(Xt){if(ve&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Ot,ht.width,ht.height,ht.depth),B)if(C.layerUpdates.size>0){const Q=$f(ht.width,ht.height,C.format,C.type);for(const it of C.layerUpdates){const Mt=ht.data.subarray(it*Q/ht.data.BYTES_PER_ELEMENT,(it+1)*Q/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,ht.width,ht.height,1,Tt,Nt,Mt)}C.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Tt,Nt,ht.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,ht.width,ht.height,ht.depth,0,Tt,Nt,ht.data);else if(C.isData3DTexture)Xt?(ve&&e.texStorage3D(s.TEXTURE_3D,gt,Ot,ht.width,ht.height,ht.depth),B&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Tt,Nt,ht.data)):e.texImage3D(s.TEXTURE_3D,0,Ot,ht.width,ht.height,ht.depth,0,Tt,Nt,ht.data);else if(C.isFramebufferTexture){if(ve)if(Xt)e.texStorage2D(s.TEXTURE_2D,gt,Ot,ht.width,ht.height);else{let Q=ht.width,it=ht.height;for(let Mt=0;Mt<gt;Mt++)e.texImage2D(s.TEXTURE_2D,Mt,Ot,Q,it,0,Tt,Nt,null),Q>>=1,it>>=1}}else if(Qt.length>0){if(Xt&&ve){const Q=Pt(Qt[0]);e.texStorage2D(s.TEXTURE_2D,gt,Ot,Q.width,Q.height)}for(let Q=0,it=Qt.length;Q<it;Q++)Et=Qt[Q],Xt?B&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,Tt,Nt,Et):e.texImage2D(s.TEXTURE_2D,Q,Ot,Tt,Nt,Et);C.generateMipmaps=!1}else if(Xt){if(ve){const Q=Pt(ht);e.texStorage2D(s.TEXTURE_2D,gt,Ot,Q.width,Q.height)}B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Tt,Nt,ht)}else e.texImage2D(s.TEXTURE_2D,0,Ot,Tt,Nt,ht);f(C)&&m(nt),Ct.__version=et.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function lt(D,C,X){if(C.image.length!==6)return;const nt=jt(D,C),ot=C.source;e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+X);const et=n.get(ot);if(ot.version!==et.__version||nt===!0){e.activeTexture(s.TEXTURE0+X);const Ct=re.getPrimaries(re.workingColorSpace),vt=C.colorSpace===ts?null:re.getPrimaries(C.colorSpace),bt=C.colorSpace===ts||Ct===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const ee=C.isCompressedTexture||C.image[0].isCompressedTexture,ht=C.image[0]&&C.image[0].isDataTexture,Tt=[];for(let it=0;it<6;it++)!ee&&!ht?Tt[it]=x(C.image[it],!0,i.maxCubemapSize):Tt[it]=ht?C.image[it].image:C.image[it],Tt[it]=ye(C,Tt[it]);const Nt=Tt[0],Ot=o.convert(C.format,C.colorSpace),Et=o.convert(C.type),Qt=_(C.internalFormat,Ot,Et,C.colorSpace),Xt=C.isVideoTexture!==!0,ve=et.__version===void 0||nt===!0,B=ot.dataReady;let gt=A(C,Nt);Ft(s.TEXTURE_CUBE_MAP,C);let Q;if(ee){Xt&&ve&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Qt,Nt.width,Nt.height);for(let it=0;it<6;it++){Q=Tt[it].mipmaps;for(let Mt=0;Mt<Q.length;Mt++){const _t=Q[Mt];C.format!==ni?Ot!==null?Xt?B&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,0,0,_t.width,_t.height,Ot,_t.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,Qt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,0,0,_t.width,_t.height,Ot,Et,_t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,Qt,_t.width,_t.height,0,Ot,Et,_t.data)}}}else{if(Q=C.mipmaps,Xt&&ve){Q.length>0&&gt++;const it=Pt(Tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Qt,it.width,it.height)}for(let it=0;it<6;it++)if(ht){Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Tt[it].width,Tt[it].height,Ot,Et,Tt[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Qt,Tt[it].width,Tt[it].height,0,Ot,Et,Tt[it].data);for(let Mt=0;Mt<Q.length;Mt++){const Vt=Q[Mt].image[it].image;Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,0,0,Vt.width,Vt.height,Ot,Et,Vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,Qt,Vt.width,Vt.height,0,Ot,Et,Vt.data)}}else{Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ot,Et,Tt[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Qt,Ot,Et,Tt[it]);for(let Mt=0;Mt<Q.length;Mt++){const _t=Q[Mt];Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,0,0,Ot,Et,_t.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,Qt,Ot,Et,_t.image[it])}}}f(C)&&m(s.TEXTURE_CUBE_MAP),et.__version=ot.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function wt(D,C,X,nt,ot,et){const Ct=o.convert(X.format,X.colorSpace),vt=o.convert(X.type),bt=_(X.internalFormat,Ct,vt,X.colorSpace),ee=n.get(C),ht=n.get(X);if(ht.__renderTarget=C,!ee.__hasExternalTextures){const Tt=Math.max(1,C.width>>et),Nt=Math.max(1,C.height>>et);ot===s.TEXTURE_3D||ot===s.TEXTURE_2D_ARRAY?e.texImage3D(ot,et,bt,Tt,Nt,C.depth,0,Ct,vt,null):e.texImage2D(ot,et,bt,Tt,Nt,0,Ct,vt,null)}e.bindFramebuffer(s.FRAMEBUFFER,D),Jt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,ot,ht.__webglTexture,0,Kt(C)):(ot===s.TEXTURE_2D||ot>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,ot,ht.__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(D,C,X){if(s.bindRenderbuffer(s.RENDERBUFFER,D),C.depthBuffer){const nt=C.depthTexture,ot=nt&&nt.isDepthTexture?nt.type:null,et=M(C.stencilBuffer,ot),Ct=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=Kt(C);Jt(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,vt,et,C.width,C.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,vt,et,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,et,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,D)}else{const nt=C.textures;for(let ot=0;ot<nt.length;ot++){const et=nt[ot],Ct=o.convert(et.format,et.colorSpace),vt=o.convert(et.type),bt=_(et.internalFormat,Ct,vt,et.colorSpace),ee=Kt(C);X&&Jt(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,bt,C.width,C.height):Jt(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,bt,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,bt,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function zt(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=n.get(C.depthTexture);nt.__renderTarget=C,(!nt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),V(C.depthTexture,0);const ot=nt.__webglTexture,et=Kt(C);if(C.depthTexture.format===Ao)Jt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0);else if(C.depthTexture.format===ko)Jt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function kt(D){const C=n.get(D),X=D.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==D.depthTexture){const nt=D.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),nt){const ot=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,nt.removeEventListener("dispose",ot)};nt.addEventListener("dispose",ot),C.__depthDisposeCallback=ot}C.__boundDepthTexture=nt}if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");zt(C.__webglFramebuffer,D)}else if(X){C.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[nt]),C.__webglDepthbuffer[nt]===void 0)C.__webglDepthbuffer[nt]=s.createRenderbuffer(),dt(C.__webglDepthbuffer[nt],D,!1);else{const ot=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=C.__webglDepthbuffer[nt];s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,et)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),dt(C.__webglDepthbuffer,D,!1);else{const nt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,ot)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(D,C,X){const nt=n.get(D);C!==void 0&&wt(nt.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&kt(D)}function Ee(D){const C=D.texture,X=n.get(D),nt=n.get(C);D.addEventListener("dispose",T);const ot=D.textures,et=D.isWebGLCubeRenderTarget===!0,Ct=ot.length>1;if(Ct||(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=C.version,r.memory.textures++),et){X.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer[vt]=[];for(let bt=0;bt<C.mipmaps.length;bt++)X.__webglFramebuffer[vt][bt]=s.createFramebuffer()}else X.__webglFramebuffer[vt]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer=[];for(let vt=0;vt<C.mipmaps.length;vt++)X.__webglFramebuffer[vt]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let vt=0,bt=ot.length;vt<bt;vt++){const ee=n.get(ot[vt]);ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture(),r.memory.textures++)}if(D.samples>0&&Jt(D)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let vt=0;vt<ot.length;vt++){const bt=ot[vt];X.__webglColorRenderbuffer[vt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[vt]);const ee=o.convert(bt.format,bt.colorSpace),ht=o.convert(bt.type),Tt=_(bt.internalFormat,ee,ht,bt.colorSpace,D.isXRRenderTarget===!0),Nt=Kt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,Tt,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,X.__webglColorRenderbuffer[vt])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),dt(X.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(et){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),Ft(s.TEXTURE_CUBE_MAP,C);for(let vt=0;vt<6;vt++)if(C.mipmaps&&C.mipmaps.length>0)for(let bt=0;bt<C.mipmaps.length;bt++)wt(X.__webglFramebuffer[vt][bt],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,bt);else wt(X.__webglFramebuffer[vt],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);f(C)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let vt=0,bt=ot.length;vt<bt;vt++){const ee=ot[vt],ht=n.get(ee);e.bindTexture(s.TEXTURE_2D,ht.__webglTexture),Ft(s.TEXTURE_2D,ee),wt(X.__webglFramebuffer,D,ee,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,0),f(ee)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let vt=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(vt=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(vt,nt.__webglTexture),Ft(vt,C),C.mipmaps&&C.mipmaps.length>0)for(let bt=0;bt<C.mipmaps.length;bt++)wt(X.__webglFramebuffer[bt],D,C,s.COLOR_ATTACHMENT0,vt,bt);else wt(X.__webglFramebuffer,D,C,s.COLOR_ATTACHMENT0,vt,0);f(C)&&m(vt),e.unbindTexture()}D.depthBuffer&&kt(D)}function te(D){const C=D.textures;for(let X=0,nt=C.length;X<nt;X++){const ot=C[X];if(f(ot)){const et=w(D),Ct=n.get(ot).__webglTexture;e.bindTexture(et,Ct),m(et),e.unbindTexture()}}}const Ie=[],O=[];function On(D){if(D.samples>0){if(Jt(D)===!1){const C=D.textures,X=D.width,nt=D.height;let ot=s.COLOR_BUFFER_BIT;const et=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=n.get(D),vt=C.length>1;if(vt)for(let bt=0;bt<C.length;bt++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let bt=0;bt<C.length;bt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ot|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ot|=s.STENCIL_BUFFER_BIT)),vt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[bt]);const ee=n.get(C[bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,X,nt,0,0,X,nt,ot,s.NEAREST),l===!0&&(Ie.length=0,O.length=0,Ie.push(s.COLOR_ATTACHMENT0+bt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ie.push(et),O.push(et),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ie))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),vt)for(let bt=0;bt<C.length;bt++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[bt]);const ee=n.get(C[bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,ee,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const C=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function Kt(D){return Math.min(i.maxSamples,D.samples)}function Jt(D){const C=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function It(D){const C=r.render.frame;h.get(D)!==C&&(h.set(D,C),D.update())}function ye(D,C){const X=D.colorSpace,nt=D.format,ot=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==Ho&&X!==ts&&(re.getTransfer(X)===pe?(nt!==ni||ot!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),C}function Pt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=Yt,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=On,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Jt}function Uy(s,t){function e(n,i=ts){let o;const r=re.getTransfer(i);if(n===Hi)return s.UNSIGNED_BYTE;if(n===Eu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Au)return s.UNSIGNED_SHORT_5_5_5_1;if(n===hp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===cp)return s.BYTE;if(n===lp)return s.SHORT;if(n===Dr)return s.UNSIGNED_SHORT;if(n===Tu)return s.INT;if(n===Fs)return s.UNSIGNED_INT;if(n===vi)return s.FLOAT;if(n===Oi)return s.HALF_FLOAT;if(n===up)return s.ALPHA;if(n===fp)return s.RGB;if(n===ni)return s.RGBA;if(n===dp)return s.LUMINANCE;if(n===pp)return s.LUMINANCE_ALPHA;if(n===Ao)return s.DEPTH_COMPONENT;if(n===ko)return s.DEPTH_STENCIL;if(n===Ru)return s.RED;if(n===Cu)return s.RED_INTEGER;if(n===mp)return s.RG;if(n===Pu)return s.RG_INTEGER;if(n===Iu)return s.RGBA_INTEGER;if(n===ka||n===Ha||n===Va||n===Wa)if(r===pe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ka)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ka)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ha)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Va)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ch||n===lh||n===hh||n===uh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ch)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fh||n===dh||n===ph)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===fh||n===dh)return r===pe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===ph)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mh||n===gh||n===xh||n===vh||n===_h||n===Mh||n===yh||n===wh||n===Sh||n===bh||n===Th||n===Eh||n===Ah||n===Rh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===mh)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gh)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xh)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vh)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_h)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mh)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yh)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wh)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sh)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bh)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Th)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Eh)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ah)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rh)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xa||n===Ch||n===Ph)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Xa)return r===pe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ch)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ph)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gp||n===Ih||n===Lh||n===Dh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Xa)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Ih)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Go?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Ny={type:"move"};class Ml{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const f=e.getJointPose(x,n),m=this._getHandJoint(c,x);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ny)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const zy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fy=`
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

}`;class Oy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new en,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new En({vertexShader:zy,fragmentShader:Fy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new I(new xe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class By extends $o{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const x=new Oy,f=e.getContextAttributes();let m=null,w=null;const _=[],M=[],A=new ut;let E=null;const T=new Dn;T.viewport=new ge;const b=new Dn;b.viewport=new ge;const y=[T,b],v=new rx;let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let lt=_[tt];return lt===void 0&&(lt=new Ml,_[tt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(tt){let lt=_[tt];return lt===void 0&&(lt=new Ml,_[tt]=lt),lt.getGripSpace()},this.getHand=function(tt){let lt=_[tt];return lt===void 0&&(lt=new Ml,_[tt]=lt),lt.getHandSpace()};function L(tt){const lt=M.indexOf(tt.inputSource);if(lt===-1)return;const wt=_[lt];wt!==void 0&&(wt.update(tt.inputSource,tt.frame,c||r),wt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function z(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",V);for(let tt=0;tt<_.length;tt++){const lt=M[tt];lt!==null&&(M[tt]=null,_[tt].disconnect(lt))}R=null,U=null,x.reset(),t.setRenderTarget(m),p=null,d=null,u=null,i=null,w=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){o=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(tt){if(i=tt,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",z),i.addEventListener("inputsourceschange",V),f.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let wt=null,dt=null,zt=null;f.depth&&(zt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=f.stencil?ko:Ao,dt=f.stencil?Go:Fs);const kt={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:o};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(kt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new ii(d.textureWidth,d.textureHeight,{format:ni,type:Hi,depthTexture:new Dp(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const wt={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(i,e,wt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new ii(p.framebufferWidth,p.framebufferHeight,{format:ni,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),jt.setContext(i),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(tt){for(let lt=0;lt<tt.removed.length;lt++){const wt=tt.removed[lt],dt=M.indexOf(wt);dt>=0&&(M[dt]=null,_[dt].disconnect(wt))}for(let lt=0;lt<tt.added.length;lt++){const wt=tt.added[lt];let dt=M.indexOf(wt);if(dt===-1){for(let kt=0;kt<_.length;kt++)if(kt>=M.length){M.push(wt),dt=kt;break}else if(M[kt]===null){M[kt]=wt,dt=kt;break}if(dt===-1)break}const zt=_[dt];zt&&zt.connect(wt)}}const k=new N,$=new N;function W(tt,lt,wt){k.setFromMatrixPosition(lt.matrixWorld),$.setFromMatrixPosition(wt.matrixWorld);const dt=k.distanceTo($),zt=lt.projectionMatrix.elements,kt=wt.projectionMatrix.elements,Yt=zt[14]/(zt[10]-1),Ee=zt[14]/(zt[10]+1),te=(zt[9]+1)/zt[5],Ie=(zt[9]-1)/zt[5],O=(zt[8]-1)/zt[0],On=(kt[8]+1)/kt[0],Kt=Yt*O,Jt=Yt*On,It=dt/(-O+On),ye=It*-O;if(lt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(ye),tt.translateZ(It),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),zt[10]===-1)tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Pt=Yt+It,D=Ee+It,C=Kt-ye,X=Jt+(dt-ye),nt=te*Ee/D*Pt,ot=Ie*Ee/D*Pt;tt.projectionMatrix.makePerspective(C,X,nt,ot,Pt,D),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function at(tt,lt){lt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(lt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(i===null)return;let lt=tt.near,wt=tt.far;x.texture!==null&&(x.depthNear>0&&(lt=x.depthNear),x.depthFar>0&&(wt=x.depthFar)),v.near=b.near=T.near=lt,v.far=b.far=T.far=wt,(R!==v.near||U!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,U=v.far),T.layers.mask=tt.layers.mask|2,b.layers.mask=tt.layers.mask|4,v.layers.mask=T.layers.mask|b.layers.mask;const dt=tt.parent,zt=v.cameras;at(v,dt);for(let kt=0;kt<zt.length;kt++)at(zt[kt],dt);zt.length===2?W(v,T,b):v.projectionMatrix.copy(T.projectionMatrix),pt(tt,v,dt)};function pt(tt,lt,wt){wt===null?tt.matrix.copy(lt.matrixWorld):(tt.matrix.copy(wt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(lt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Nh*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(tt){l=tt,d!==null&&(d.fixedFoveation=tt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=tt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let Rt=null;function Ft(tt,lt){if(h=lt.getViewerPose(c||r),g=lt,h!==null){const wt=h.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let dt=!1;wt.length!==v.cameras.length&&(v.cameras.length=0,dt=!0);for(let kt=0;kt<wt.length;kt++){const Yt=wt[kt];let Ee=null;if(p!==null)Ee=p.getViewport(Yt);else{const Ie=u.getViewSubImage(d,Yt);Ee=Ie.viewport,kt===0&&(t.setRenderTargetTextures(w,Ie.colorTexture,d.ignoreDepthValues?void 0:Ie.depthStencilTexture),t.setRenderTarget(w))}let te=y[kt];te===void 0&&(te=new Dn,te.layers.enable(kt),te.viewport=new ge,y[kt]=te),te.matrix.fromArray(Yt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Yt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),kt===0&&(v.matrix.copy(te.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),dt===!0&&v.cameras.push(te)}const zt=i.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const kt=u.getDepthInformation(wt[0]);kt&&kt.isValid&&kt.texture&&x.init(t,kt,i.renderState)}}for(let wt=0;wt<_.length;wt++){const dt=M[wt],zt=_[wt];dt!==null&&zt!==void 0&&zt.update(dt,lt,c||r)}Rt&&Rt(tt,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),g=null}const jt=new Wp;jt.setAnimationLoop(Ft),this.setAnimationLoop=function(tt){Rt=tt},this.dispose=function(){}}}const gs=new si,Gy=new se;function ky(s,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,Ep(s)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function i(f,m,w,_,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(f,m):m.isMeshToonMaterial?(o(f,m),u(f,m)):m.isMeshPhongMaterial?(o(f,m),h(f,m)):m.isMeshStandardMaterial?(o(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,M)):m.isMeshMatcapMaterial?(o(f,m),g(f,m)):m.isMeshDepthMaterial?o(f,m):m.isMeshDistanceMaterial?(o(f,m),x(f,m)):m.isMeshNormalMaterial?o(f,m):m.isLineBasicMaterial?(r(f,m),m.isLineDashedMaterial&&a(f,m)):m.isPointsMaterial?l(f,m,w,_):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Sn&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Sn&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const w=t.get(m),_=w.envMap,M=w.envMapRotation;_&&(f.envMap.value=_,gs.copy(M),gs.x*=-1,gs.y*=-1,gs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),f.envMapRotation.value.setFromMatrix4(Gy.makeRotationFromEuler(gs)),f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function r(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,w,_){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*w,f.scale.value=_*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,w){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Sn&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function x(f,m){const w=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Hy(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,_){const M=_.program;n.uniformBlockBinding(w,M)}function c(w,_){let M=i[w.id];M===void 0&&(g(w),M=h(w),i[w.id]=M,w.addEventListener("dispose",f));const A=_.program;n.updateUBOMapping(w,A);const E=t.render.frame;o[w.id]!==E&&(d(w),o[w.id]=E)}function h(w){const _=u();w.__bindingPointIndex=_;const M=s.createBuffer(),A=w.__size,E=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,A,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,M),M}function u(){for(let w=0;w<a;w++)if(r.indexOf(w)===-1)return r.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const _=i[w.id],M=w.uniforms,A=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let E=0,T=M.length;E<T;E++){const b=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,v=b.length;y<v;y++){const R=b[y];if(p(R,E,y,A)===!0){const U=R.__offset,L=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let V=0;V<L.length;V++){const k=L[V],$=x(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,U+z,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,z),z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(w,_,M,A){const E=w.value,T=_+"_"+M;if(A[T]===void 0)return typeof E=="number"||typeof E=="boolean"?A[T]=E:A[T]=E.clone(),!0;{const b=A[T];if(typeof E=="number"||typeof E=="boolean"){if(b!==E)return A[T]=E,!0}else if(b.equals(E)===!1)return b.copy(E),!0}return!1}function g(w){const _=w.uniforms;let M=0;const A=16;for(let T=0,b=_.length;T<b;T++){const y=Array.isArray(_[T])?_[T]:[_[T]];for(let v=0,R=y.length;v<R;v++){const U=y[v],L=Array.isArray(U.value)?U.value:[U.value];for(let z=0,V=L.length;z<V;z++){const k=L[z],$=x(k),W=M%A,at=W%$.boundary,pt=W+at;M+=at,pt!==0&&A-pt<$.storage&&(M+=A-pt),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=$.storage}}}const E=M%A;return E>0&&(M+=A-E),w.__size=M,w.__cache={},this}function x(w){const _={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function f(w){const _=w.target;_.removeEventListener("dispose",f);const M=r.indexOf(_.__bindingPointIndex);r.splice(M,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete o[_.id]}function m(){for(const w in i)s.deleteBuffer(i[w]);r=[],i={},o={}}return{bind:l,update:c,dispose:m}}class Vy{constructor(t={}){const{canvas:e=Zm(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),x=new Int32Array(4);let f=null,m=null;const w=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wn,this.toneMapping=ss,this.toneMappingExposure=1;const M=this;let A=!1,E=0,T=0,b=null,y=-1,v=null;const R=new ge,U=new ge;let L=null;const z=new st(0);let V=0,k=e.width,$=e.height,W=1,at=null,pt=null;const Rt=new ge(0,0,k,$),Ft=new ge(0,0,k,$);let jt=!1;const tt=new Uu;let lt=!1,wt=!1;this.transmissionResolutionScale=1;const dt=new se,zt=new se,kt=new N,Yt=new ge,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function Ie(){return b===null?W:1}let O=n;function On(P,G){return e.getContext(P,G)}try{const P={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bu}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),O===null){const G="webgl2";if(O=On(G,P),O===null)throw On(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Kt,Jt,It,ye,Pt,D,C,X,nt,ot,et,Ct,vt,bt,ee,ht,Tt,Nt,Ot,Et,Qt,Xt,ve,B;function gt(){Kt=new J_(O),Kt.init(),Xt=new Uy(O,Kt),Jt=new q_(O,Kt,t,Xt),It=new Ly(O,Kt),Jt.reverseDepthBuffer&&d&&It.buffers.depth.setReversed(!0),ye=new eM(O),Pt=new _y,D=new Dy(O,Kt,It,Pt,Jt,Xt,ye),C=new Z_(M),X=new K_(M),nt=new cx(O),ve=new W_(O,nt),ot=new Q_(O,nt,ye,ve),et=new iM(O,ot,nt,ye),Ot=new nM(O,Jt,D),ht=new Y_(Pt),Ct=new vy(M,C,X,Kt,Jt,ve,ht),vt=new ky(M,Pt),bt=new yy,ee=new Ay(Kt),Nt=new V_(M,C,X,It,et,p,l),Tt=new Py(M,et,Jt),B=new Hy(O,ye,Jt,It),Et=new X_(O,Kt,ye),Qt=new tM(O,Kt,ye),ye.programs=Ct.programs,M.capabilities=Jt,M.extensions=Kt,M.properties=Pt,M.renderLists=bt,M.shadowMap=Tt,M.state=It,M.info=ye}gt();const Q=new By(M,O);this.xr=Q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const P=Kt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Kt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(P){P!==void 0&&(W=P,this.setSize(k,$,!1))},this.getSize=function(P){return P.set(k,$)},this.setSize=function(P,G,q=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=P,$=G,e.width=Math.floor(P*W),e.height=Math.floor(G*W),q===!0&&(e.style.width=P+"px",e.style.height=G+"px"),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set(k*W,$*W).floor()},this.setDrawingBufferSize=function(P,G,q){k=P,$=G,W=q,e.width=Math.floor(P*q),e.height=Math.floor(G*q),this.setViewport(0,0,P,G)},this.getCurrentViewport=function(P){return P.copy(R)},this.getViewport=function(P){return P.copy(Rt)},this.setViewport=function(P,G,q,Z){P.isVector4?Rt.set(P.x,P.y,P.z,P.w):Rt.set(P,G,q,Z),It.viewport(R.copy(Rt).multiplyScalar(W).round())},this.getScissor=function(P){return P.copy(Ft)},this.setScissor=function(P,G,q,Z){P.isVector4?Ft.set(P.x,P.y,P.z,P.w):Ft.set(P,G,q,Z),It.scissor(U.copy(Ft).multiplyScalar(W).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(P){It.setScissorTest(jt=P)},this.setOpaqueSort=function(P){at=P},this.setTransparentSort=function(P){pt=P},this.getClearColor=function(P){return P.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(P=!0,G=!0,q=!0){let Z=0;if(P){let H=!1;if(b!==null){const rt=b.texture.format;H=rt===Iu||rt===Pu||rt===Cu}if(H){const rt=b.texture.type,xt=rt===Hi||rt===Fs||rt===Dr||rt===Go||rt===Eu||rt===Au,St=Nt.getClearColor(),At=Nt.getClearAlpha(),Bt=St.r,Ht=St.g,Lt=St.b;xt?(g[0]=Bt,g[1]=Ht,g[2]=Lt,g[3]=At,O.clearBufferuiv(O.COLOR,0,g)):(x[0]=Bt,x[1]=Ht,x[2]=Lt,x[3]=At,O.clearBufferiv(O.COLOR,0,x))}else Z|=O.COLOR_BUFFER_BIT}G&&(Z|=O.DEPTH_BUFFER_BIT),q&&(Z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Nt.dispose(),bt.dispose(),ee.dispose(),Pt.dispose(),C.dispose(),X.dispose(),et.dispose(),ve.dispose(),B.dispose(),Ct.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",ef),Q.removeEventListener("sessionend",nf),ls.stop()};function it(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=ye.autoReset,G=Tt.enabled,q=Tt.autoUpdate,Z=Tt.needsUpdate,H=Tt.type;gt(),ye.autoReset=P,Tt.enabled=G,Tt.autoUpdate=q,Tt.needsUpdate=Z,Tt.type=H}function _t(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Vt(P){const G=P.target;G.removeEventListener("dispose",Vt),Ce(G)}function Ce(P){$e(P),Pt.remove(P)}function $e(P){const G=Pt.get(P).programs;G!==void 0&&(G.forEach(function(q){Ct.releaseProgram(q)}),P.isShaderMaterial&&Ct.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,q,Z,H,rt){G===null&&(G=Ee);const xt=H.isMesh&&H.matrixWorld.determinant()<0,St=nm(P,G,q,Z,H);It.setMaterial(Z,xt);let At=q.index,Bt=1;if(Z.wireframe===!0){if(At=ot.getWireframeAttribute(q),At===void 0)return;Bt=2}const Ht=q.drawRange,Lt=q.attributes.position;let ne=Ht.start*Bt,he=(Ht.start+Ht.count)*Bt;rt!==null&&(ne=Math.max(ne,rt.start*Bt),he=Math.min(he,(rt.start+rt.count)*Bt)),At!==null?(ne=Math.max(ne,0),he=Math.min(he,At.count)):Lt!=null&&(ne=Math.max(ne,0),he=Math.min(he,Lt.count));const Ue=he-ne;if(Ue<0||Ue===1/0)return;ve.setup(H,Z,St,q,At);let Pe,oe=Et;if(At!==null&&(Pe=nt.get(At),oe=Qt,oe.setIndex(Pe)),H.isMesh)Z.wireframe===!0?(It.setLineWidth(Z.wireframeLinewidth*Ie()),oe.setMode(O.LINES)):oe.setMode(O.TRIANGLES);else if(H.isLine){let Ut=Z.linewidth;Ut===void 0&&(Ut=1),It.setLineWidth(Ut*Ie()),H.isLineSegments?oe.setMode(O.LINES):H.isLineLoop?oe.setMode(O.LINE_LOOP):oe.setMode(O.LINE_STRIP)}else H.isPoints?oe.setMode(O.POINTS):H.isSprite&&oe.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)oe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))oe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ut=H._multiDrawStarts,qe=H._multiDrawCounts,ue=H._multiDrawCount,Jn=At?nt.get(At).bytesPerElement:1,Vs=Pt.get(Z).currentProgram.getUniforms();for(let Cn=0;Cn<ue;Cn++)Vs.setValue(O,"_gl_DrawID",Cn),oe.render(Ut[Cn]/Jn,qe[Cn])}else if(H.isInstancedMesh)oe.renderInstances(ne,Ue,H.count);else if(q.isInstancedBufferGeometry){const Ut=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,qe=Math.min(q.instanceCount,Ut);oe.renderInstances(ne,Ue,qe)}else oe.render(ne,Ue)};function fe(P,G,q){P.transparent===!0&&P.side===Dt&&P.forceSinglePass===!1?(P.side=Sn,P.needsUpdate=!0,$r(P,G,q),P.side=os,P.needsUpdate=!0,$r(P,G,q),P.side=Dt):$r(P,G,q)}this.compile=function(P,G,q=null){q===null&&(q=P),m=ee.get(q),m.init(G),_.push(m),q.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),P!==q&&P.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const Z=new Set;return P.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const rt=H.material;if(rt)if(Array.isArray(rt))for(let xt=0;xt<rt.length;xt++){const St=rt[xt];fe(St,q,H),Z.add(St)}else fe(rt,q,H),Z.add(rt)}),_.pop(),m=null,Z},this.compileAsync=function(P,G,q=null){const Z=this.compile(P,G,q);return new Promise(H=>{function rt(){if(Z.forEach(function(xt){Pt.get(xt).currentProgram.isReady()&&Z.delete(xt)}),Z.size===0){H(P);return}setTimeout(rt,10)}Kt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Kn=null;function Ti(P){Kn&&Kn(P)}function ef(){ls.stop()}function nf(){ls.start()}const ls=new Wp;ls.setAnimationLoop(Ti),typeof self<"u"&&ls.setContext(self),this.setAnimationLoop=function(P){Kn=P,Q.setAnimationLoop(P),P===null?ls.stop():ls.start()},Q.addEventListener("sessionstart",ef),Q.addEventListener("sessionend",nf),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(G),G=Q.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,G,b),m=ee.get(P,_.length),m.init(G),_.push(m),zt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),tt.setFromProjectionMatrix(zt),wt=this.localClippingEnabled,lt=ht.init(this.clippingPlanes,wt),f=bt.get(P,w.length),f.init(),w.push(f),Q.enabled===!0&&Q.isPresenting===!0){const rt=M.xr.getDepthSensingMesh();rt!==null&&zc(rt,G,-1/0,M.sortObjects)}zc(P,G,0,M.sortObjects),f.finish(),M.sortObjects===!0&&f.sort(at,pt),te=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,te&&Nt.addToRenderList(f,P),this.info.render.frame++,lt===!0&&ht.beginShadows();const q=m.state.shadowsArray;Tt.render(q,P,G),lt===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=f.opaque,H=f.transmissive;if(m.setupLights(),G.isArrayCamera){const rt=G.cameras;if(H.length>0)for(let xt=0,St=rt.length;xt<St;xt++){const At=rt[xt];of(Z,H,P,At)}te&&Nt.render(P);for(let xt=0,St=rt.length;xt<St;xt++){const At=rt[xt];sf(f,P,At,At.viewport)}}else H.length>0&&of(Z,H,P,G),te&&Nt.render(P),sf(f,P,G);b!==null&&T===0&&(D.updateMultisampleRenderTarget(b),D.updateRenderTargetMipmap(b)),P.isScene===!0&&P.onAfterRender(M,P,G),ve.resetDefaultState(),y=-1,v=null,_.pop(),_.length>0?(m=_[_.length-1],lt===!0&&ht.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,w.pop(),w.length>0?f=w[w.length-1]:f=null};function zc(P,G,q,Z){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||tt.intersectsSprite(P)){Z&&Yt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(zt);const xt=et.update(P),St=P.material;St.visible&&f.push(P,xt,St,q,Yt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||tt.intersectsObject(P))){const xt=et.update(P),St=P.material;if(Z&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Yt.copy(P.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Yt.copy(xt.boundingSphere.center)),Yt.applyMatrix4(P.matrixWorld).applyMatrix4(zt)),Array.isArray(St)){const At=xt.groups;for(let Bt=0,Ht=At.length;Bt<Ht;Bt++){const Lt=At[Bt],ne=St[Lt.materialIndex];ne&&ne.visible&&f.push(P,xt,ne,q,Yt.z,Lt)}}else St.visible&&f.push(P,xt,St,q,Yt.z,null)}}const rt=P.children;for(let xt=0,St=rt.length;xt<St;xt++)zc(rt[xt],G,q,Z)}function sf(P,G,q,Z){const H=P.opaque,rt=P.transmissive,xt=P.transparent;m.setupLightsView(q),lt===!0&&ht.setGlobalState(M.clippingPlanes,q),Z&&It.viewport(R.copy(Z)),H.length>0&&Zr(H,G,q),rt.length>0&&Zr(rt,G,q),xt.length>0&&Zr(xt,G,q),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function of(P,G,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new ii(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?Oi:Hi,minFilter:Ps,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const rt=m.state.transmissionRenderTarget[Z.id],xt=Z.viewport||R;rt.setSize(xt.z*M.transmissionResolutionScale,xt.w*M.transmissionResolutionScale);const St=M.getRenderTarget();M.setRenderTarget(rt),M.getClearColor(z),V=M.getClearAlpha(),V<1&&M.setClearColor(16777215,.5),M.clear(),te&&Nt.render(q);const At=M.toneMapping;M.toneMapping=ss;const Bt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),lt===!0&&ht.setGlobalState(M.clippingPlanes,Z),Zr(P,q,Z),D.updateMultisampleRenderTarget(rt),D.updateRenderTargetMipmap(rt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Lt=0,ne=G.length;Lt<ne;Lt++){const he=G[Lt],Ue=he.object,Pe=he.geometry,oe=he.material,Ut=he.group;if(oe.side===Dt&&Ue.layers.test(Z.layers)){const qe=oe.side;oe.side=Sn,oe.needsUpdate=!0,rf(Ue,q,Z,Pe,oe,Ut),oe.side=qe,oe.needsUpdate=!0,Ht=!0}}Ht===!0&&(D.updateMultisampleRenderTarget(rt),D.updateRenderTargetMipmap(rt))}M.setRenderTarget(St),M.setClearColor(z,V),Bt!==void 0&&(Z.viewport=Bt),M.toneMapping=At}function Zr(P,G,q){const Z=G.isScene===!0?G.overrideMaterial:null;for(let H=0,rt=P.length;H<rt;H++){const xt=P[H],St=xt.object,At=xt.geometry,Bt=Z===null?xt.material:Z,Ht=xt.group;St.layers.test(q.layers)&&rf(St,G,q,At,Bt,Ht)}}function rf(P,G,q,Z,H,rt){P.onBeforeRender(M,G,q,Z,H,rt),P.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),H.onBeforeRender(M,G,q,Z,P,rt),H.transparent===!0&&H.side===Dt&&H.forceSinglePass===!1?(H.side=Sn,H.needsUpdate=!0,M.renderBufferDirect(q,G,Z,H,P,rt),H.side=os,H.needsUpdate=!0,M.renderBufferDirect(q,G,Z,H,P,rt),H.side=Dt):M.renderBufferDirect(q,G,Z,H,P,rt),P.onAfterRender(M,G,q,Z,H,rt)}function $r(P,G,q){G.isScene!==!0&&(G=Ee);const Z=Pt.get(P),H=m.state.lights,rt=m.state.shadowsArray,xt=H.state.version,St=Ct.getParameters(P,H.state,rt,G,q),At=Ct.getProgramCacheKey(St);let Bt=Z.programs;Z.environment=P.isMeshStandardMaterial?G.environment:null,Z.fog=G.fog,Z.envMap=(P.isMeshStandardMaterial?X:C).get(P.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&P.envMap===null?G.environmentRotation:P.envMapRotation,Bt===void 0&&(P.addEventListener("dispose",Vt),Bt=new Map,Z.programs=Bt);let Ht=Bt.get(At);if(Ht!==void 0){if(Z.currentProgram===Ht&&Z.lightsStateVersion===xt)return cf(P,St),Ht}else St.uniforms=Ct.getUniforms(P),P.onBeforeCompile(St,M),Ht=Ct.acquireProgram(St,At),Bt.set(At,Ht),Z.uniforms=St.uniforms;const Lt=Z.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Lt.clippingPlanes=ht.uniform),cf(P,St),Z.needsLights=sm(P),Z.lightsStateVersion=xt,Z.needsLights&&(Lt.ambientLightColor.value=H.state.ambient,Lt.lightProbe.value=H.state.probe,Lt.directionalLights.value=H.state.directional,Lt.directionalLightShadows.value=H.state.directionalShadow,Lt.spotLights.value=H.state.spot,Lt.spotLightShadows.value=H.state.spotShadow,Lt.rectAreaLights.value=H.state.rectArea,Lt.ltc_1.value=H.state.rectAreaLTC1,Lt.ltc_2.value=H.state.rectAreaLTC2,Lt.pointLights.value=H.state.point,Lt.pointLightShadows.value=H.state.pointShadow,Lt.hemisphereLights.value=H.state.hemi,Lt.directionalShadowMap.value=H.state.directionalShadowMap,Lt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Lt.spotShadowMap.value=H.state.spotShadowMap,Lt.spotLightMatrix.value=H.state.spotLightMatrix,Lt.spotLightMap.value=H.state.spotLightMap,Lt.pointShadowMap.value=H.state.pointShadowMap,Lt.pointShadowMatrix.value=H.state.pointShadowMatrix),Z.currentProgram=Ht,Z.uniformsList=null,Ht}function af(P){if(P.uniformsList===null){const G=P.currentProgram.getUniforms();P.uniformsList=qa.seqWithValue(G.seq,P.uniforms)}return P.uniformsList}function cf(P,G){const q=Pt.get(P);q.outputColorSpace=G.outputColorSpace,q.batching=G.batching,q.batchingColor=G.batchingColor,q.instancing=G.instancing,q.instancingColor=G.instancingColor,q.instancingMorph=G.instancingMorph,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function nm(P,G,q,Z,H){G.isScene!==!0&&(G=Ee),D.resetTextureUnits();const rt=G.fog,xt=Z.isMeshStandardMaterial?G.environment:null,St=b===null?M.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ho,At=(Z.isMeshStandardMaterial?X:C).get(Z.envMap||xt),Bt=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ht=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Lt=!!q.morphAttributes.position,ne=!!q.morphAttributes.normal,he=!!q.morphAttributes.color;let Ue=ss;Z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ue=M.toneMapping);const Pe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,oe=Pe!==void 0?Pe.length:0,Ut=Pt.get(Z),qe=m.state.lights;if(lt===!0&&(wt===!0||P!==v)){const sn=P===v&&Z.id===y;ht.setState(Z,P,sn)}let ue=!1;Z.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==qe.state.version||Ut.outputColorSpace!==St||H.isBatchedMesh&&Ut.batching===!1||!H.isBatchedMesh&&Ut.batching===!0||H.isBatchedMesh&&Ut.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ut.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ut.instancing===!1||!H.isInstancedMesh&&Ut.instancing===!0||H.isSkinnedMesh&&Ut.skinning===!1||!H.isSkinnedMesh&&Ut.skinning===!0||H.isInstancedMesh&&Ut.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ut.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ut.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ut.instancingMorph===!1&&H.morphTexture!==null||Ut.envMap!==At||Z.fog===!0&&Ut.fog!==rt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ht.numPlanes||Ut.numIntersection!==ht.numIntersection)||Ut.vertexAlphas!==Bt||Ut.vertexTangents!==Ht||Ut.morphTargets!==Lt||Ut.morphNormals!==ne||Ut.morphColors!==he||Ut.toneMapping!==Ue||Ut.morphTargetsCount!==oe)&&(ue=!0):(ue=!0,Ut.__version=Z.version);let Jn=Ut.currentProgram;ue===!0&&(Jn=$r(Z,G,H));let Vs=!1,Cn=!1,Qo=!1;const be=Jn.getUniforms(),Bn=Ut.uniforms;if(It.useProgram(Jn.program)&&(Vs=!0,Cn=!0,Qo=!0),Z.id!==y&&(y=Z.id,Cn=!0),Vs||v!==P){It.buffers.depth.getReversed()?(dt.copy(P.projectionMatrix),jm(dt),Km(dt),be.setValue(O,"projectionMatrix",dt)):be.setValue(O,"projectionMatrix",P.projectionMatrix),be.setValue(O,"viewMatrix",P.matrixWorldInverse);const bn=be.map.cameraPosition;bn!==void 0&&bn.setValue(O,kt.setFromMatrixPosition(P.matrixWorld)),Jt.logarithmicDepthBuffer&&be.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&be.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),v!==P&&(v=P,Cn=!0,Qo=!0)}if(H.isSkinnedMesh){be.setOptional(O,H,"bindMatrix"),be.setOptional(O,H,"bindMatrixInverse");const sn=H.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),be.setValue(O,"boneTexture",sn.boneTexture,D))}H.isBatchedMesh&&(be.setOptional(O,H,"batchingTexture"),be.setValue(O,"batchingTexture",H._matricesTexture,D),be.setOptional(O,H,"batchingIdTexture"),be.setValue(O,"batchingIdTexture",H._indirectTexture,D),be.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&be.setValue(O,"batchingColorTexture",H._colorsTexture,D));const Gn=q.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&Ot.update(H,q,Jn),(Cn||Ut.receiveShadow!==H.receiveShadow)&&(Ut.receiveShadow=H.receiveShadow,be.setValue(O,"receiveShadow",H.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Bn.envMap.value=At,Bn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&G.environment!==null&&(Bn.envMapIntensity.value=G.environmentIntensity),Cn&&(be.setValue(O,"toneMappingExposure",M.toneMappingExposure),Ut.needsLights&&im(Bn,Qo),rt&&Z.fog===!0&&vt.refreshFogUniforms(Bn,rt),vt.refreshMaterialUniforms(Bn,Z,W,$,m.state.transmissionRenderTarget[P.id]),qa.upload(O,af(Ut),Bn,D)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(qa.upload(O,af(Ut),Bn,D),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&be.setValue(O,"center",H.center),be.setValue(O,"modelViewMatrix",H.modelViewMatrix),be.setValue(O,"normalMatrix",H.normalMatrix),be.setValue(O,"modelMatrix",H.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const sn=Z.uniformsGroups;for(let bn=0,Fc=sn.length;bn<Fc;bn++){const hs=sn[bn];B.update(hs,Jn),B.bind(hs,Jn)}}return Jn}function im(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function sm(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(P,G,q){Pt.get(P.texture).__webglTexture=G,Pt.get(P.depthTexture).__webglTexture=q;const Z=Pt.get(P);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=q===void 0,Z.__autoAllocateDepthBuffer||Kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,G){const q=Pt.get(P);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0};const om=O.createFramebuffer();this.setRenderTarget=function(P,G=0,q=0){b=P,E=G,T=q;let Z=!0,H=null,rt=!1,xt=!1;if(P){const At=Pt.get(P);if(At.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(O.FRAMEBUFFER,null),Z=!1;else if(At.__webglFramebuffer===void 0)D.setupRenderTarget(P);else if(At.__hasExternalTextures)D.rebindTextures(P,Pt.get(P.texture).__webglTexture,Pt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Lt=P.depthTexture;if(At.__boundDepthTexture!==Lt){if(Lt!==null&&Pt.has(Lt)&&(P.width!==Lt.image.width||P.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(P)}}const Bt=P.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(xt=!0);const Ht=Pt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ht[G])?H=Ht[G][q]:H=Ht[G],rt=!0):P.samples>0&&D.useMultisampledRTT(P)===!1?H=Pt.get(P).__webglMultisampledFramebuffer:Array.isArray(Ht)?H=Ht[q]:H=Ht,R.copy(P.viewport),U.copy(P.scissor),L=P.scissorTest}else R.copy(Rt).multiplyScalar(W).floor(),U.copy(Ft).multiplyScalar(W).floor(),L=jt;if(q!==0&&(H=om),It.bindFramebuffer(O.FRAMEBUFFER,H)&&Z&&It.drawBuffers(P,H),It.viewport(R),It.scissor(U),It.setScissorTest(L),rt){const At=Pt.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,At.__webglTexture,q)}else if(xt){const At=Pt.get(P.texture),Bt=G;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,At.__webglTexture,q,Bt)}else if(P!==null&&q!==0){const At=Pt.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,At.__webglTexture,q)}y=-1},this.readRenderTargetPixels=function(P,G,q,Z,H,rt,xt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Pt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St){It.bindFramebuffer(O.FRAMEBUFFER,St);try{const At=P.texture,Bt=At.format,Ht=At.type;if(!Jt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-Z&&q>=0&&q<=P.height-H&&O.readPixels(G,q,Z,H,Xt.convert(Bt),Xt.convert(Ht),rt)}finally{const At=b!==null?Pt.get(b).__webglFramebuffer:null;It.bindFramebuffer(O.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(P,G,q,Z,H,rt,xt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Pt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St){const At=P.texture,Bt=At.format,Ht=At.type;if(!Jt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=P.width-Z&&q>=0&&q<=P.height-H){It.bindFramebuffer(O.FRAMEBUFFER,St);const Lt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Lt),O.bufferData(O.PIXEL_PACK_BUFFER,rt.byteLength,O.STREAM_READ),O.readPixels(G,q,Z,H,Xt.convert(Bt),Xt.convert(Ht),0);const ne=b!==null?Pt.get(b).__webglFramebuffer:null;It.bindFramebuffer(O.FRAMEBUFFER,ne);const he=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await $m(O,he,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Lt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,rt),O.deleteBuffer(Lt),O.deleteSync(he),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,G=null,q=0){P.isTexture!==!0&&(mo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,P=arguments[1]);const Z=Math.pow(2,-q),H=Math.floor(P.image.width*Z),rt=Math.floor(P.image.height*Z),xt=G!==null?G.x:0,St=G!==null?G.y:0;D.setTexture2D(P,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,xt,St,H,rt),It.unbindTexture()};const rm=O.createFramebuffer(),am=O.createFramebuffer();this.copyTextureToTexture=function(P,G,q=null,Z=null,H=0,rt=null){P.isTexture!==!0&&(mo("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,P=arguments[1],G=arguments[2],rt=arguments[3]||0,q=null),rt===null&&(H!==0?(mo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),rt=H,H=0):rt=0);let xt,St,At,Bt,Ht,Lt,ne,he,Ue;const Pe=P.isCompressedTexture?P.mipmaps[rt]:P.image;if(q!==null)xt=q.max.x-q.min.x,St=q.max.y-q.min.y,At=q.isBox3?q.max.z-q.min.z:1,Bt=q.min.x,Ht=q.min.y,Lt=q.isBox3?q.min.z:0;else{const Gn=Math.pow(2,-H);xt=Math.floor(Pe.width*Gn),St=Math.floor(Pe.height*Gn),P.isDataArrayTexture?At=Pe.depth:P.isData3DTexture?At=Math.floor(Pe.depth*Gn):At=1,Bt=0,Ht=0,Lt=0}Z!==null?(ne=Z.x,he=Z.y,Ue=Z.z):(ne=0,he=0,Ue=0);const oe=Xt.convert(G.format),Ut=Xt.convert(G.type);let qe;G.isData3DTexture?(D.setTexture3D(G,0),qe=O.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(D.setTexture2DArray(G,0),qe=O.TEXTURE_2D_ARRAY):(D.setTexture2D(G,0),qe=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);const ue=O.getParameter(O.UNPACK_ROW_LENGTH),Jn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Vs=O.getParameter(O.UNPACK_SKIP_PIXELS),Cn=O.getParameter(O.UNPACK_SKIP_ROWS),Qo=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Pe.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pe.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Bt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ht),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Lt);const be=P.isDataArrayTexture||P.isData3DTexture,Bn=G.isDataArrayTexture||G.isData3DTexture;if(P.isDepthTexture){const Gn=Pt.get(P),sn=Pt.get(G),bn=Pt.get(Gn.__renderTarget),Fc=Pt.get(sn.__renderTarget);It.bindFramebuffer(O.READ_FRAMEBUFFER,bn.__webglFramebuffer),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,Fc.__webglFramebuffer);for(let hs=0;hs<At;hs++)be&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.get(P).__webglTexture,H,Lt+hs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.get(G).__webglTexture,rt,Ue+hs)),O.blitFramebuffer(Bt,Ht,xt,St,ne,he,xt,St,O.DEPTH_BUFFER_BIT,O.NEAREST);It.bindFramebuffer(O.READ_FRAMEBUFFER,null),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||P.isRenderTargetTexture||Pt.has(P)){const Gn=Pt.get(P),sn=Pt.get(G);It.bindFramebuffer(O.READ_FRAMEBUFFER,rm),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,am);for(let bn=0;bn<At;bn++)be?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Gn.__webglTexture,H,Lt+bn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Gn.__webglTexture,H),Bn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,sn.__webglTexture,rt,Ue+bn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,sn.__webglTexture,rt),H!==0?O.blitFramebuffer(Bt,Ht,xt,St,ne,he,xt,St,O.COLOR_BUFFER_BIT,O.NEAREST):Bn?O.copyTexSubImage3D(qe,rt,ne,he,Ue+bn,Bt,Ht,xt,St):O.copyTexSubImage2D(qe,rt,ne,he,Bt,Ht,xt,St);It.bindFramebuffer(O.READ_FRAMEBUFFER,null),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Bn?P.isDataTexture||P.isData3DTexture?O.texSubImage3D(qe,rt,ne,he,Ue,xt,St,At,oe,Ut,Pe.data):G.isCompressedArrayTexture?O.compressedTexSubImage3D(qe,rt,ne,he,Ue,xt,St,At,oe,Pe.data):O.texSubImage3D(qe,rt,ne,he,Ue,xt,St,At,oe,Ut,Pe):P.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,rt,ne,he,xt,St,oe,Ut,Pe.data):P.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,rt,ne,he,Pe.width,Pe.height,oe,Pe.data):O.texSubImage2D(O.TEXTURE_2D,rt,ne,he,xt,St,oe,Ut,Pe);O.pixelStorei(O.UNPACK_ROW_LENGTH,ue),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Jn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Vs),O.pixelStorei(O.UNPACK_SKIP_ROWS,Cn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Qo),rt===0&&G.generateMipmaps&&O.generateMipmap(qe),It.unbindTexture()},this.copyTextureToTexture3D=function(P,G,q=null,Z=null,H=0){return P.isTexture!==!0&&(mo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Z=arguments[1]||null,P=arguments[2],G=arguments[3],H=arguments[4]||0),mo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,G,q,Z,H)},this.initRenderTarget=function(P){Pt.get(P).__webglFramebuffer===void 0&&D.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?D.setTextureCube(P,0):P.isData3DTexture?D.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?D.setTexture2DArray(P,0):D.setTexture2D(P,0),It.unbindTexture()},this.resetState=function(){E=0,T=0,b=null,It.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}const Wy=15,Xy=6,qy=1.8,fc=8,Md=.85,yd=.98,dc=.003,ce=90,Dc=1.7,Yy=500,Zy=60,$y=18,jy=10,Ky=14,Jy=6,Qy=10,tw=350,ew=50,nw=45,iw=40,sw=60,$p=6,ow=25,rw=8,aw=25,cw=50,lw=10,hw=10,uw=10,fw=8,Us=280,kh=2.5,dw=6,wd=1.5,go=5,Sd=2.5,lo=12,we=30,pw=5,mw=8,gw=2.2,F={fog:396308,ground:1720360,leafGlow:4521898,mushCap:8926190,mushGlow:13400063,mushStem:2756928,crystal:3407837,crystalCore:8978414,firefly:15662950,fireflyB:6750173,spore:12320665,ambient:2241365,moon:12307694,jellyBell:7833855,jellyGlow:11193599,jellyTent:6715340,puffBody:16768460,puffGlow:16755336,puffEye:2236962,puffCheek:16746649,deerBody:11202303,deerGlow:8969727,deerAntler:13434862,deerEye:1127236,mothWing:11206553,mothGlow:13434794,mothBody:5596723,mothSpot:16777215,grassTip:3385941,grassPurple:[1706530,2363962,4857960,11158766,13400063,16746717,2757952,6697898,11158783],grassBlue:[660514,858677,2114917,4500206,6741503,8974079,1387077,3368618,4500223],grassTeal:[662042,1059362,2121808,4517563,6750173,11206536,1720376,3385992,4521915],fern:1725744,fernGlow:3394662,flower:16742348,flowerGlow:16751069,flowerStem:1721376,reed:2774325,reedTip:4504422,orbGold:16763955,orbGlow:16772778,orbInner:16775389,laserPink:16737962,laserGlow:16746700,obeliskBlack:657938,obeliskPink:16729258,moatBlue:3377356,rainbow:[16724787,16746547,16772659,3407718,3377407,8926207],wispCore:11202303,wispGlow:14544639,wispTrail:8965375,dandStem:4482611,dandHead:16777198,dandSeed:16775389,dandSeedGlow:16777215,fairyMush:13404415,fairyGlow:14527231,fairyRing:11167470,bubbleIris:11197951,bubbleShine:16777215,bubblePop:13434862,starMote:16772829,pondWater:2254506,pondGlow:3377356,lilyPad:2263108,lilyFlower:16746700,lilyGlow:16755421,echoBloom:11206604,rockBase:2763314,rockMoss:1721378,rockLight:3816005,skyDeep:198160,thornOrb:16755268,thornOrbGlow:16764006,thornPetal:6689075,thornSpike:2759184,thornStem:1717024,helixStem:1714240,helixPod:6697983,helixPodGlow:8934911,helixRing:4465322,helixNode:5588172,snapBody:2271846,snapBodyGlow:4521864,snapTip:6750122,snapTipGlow:8978380,snapFrond:1730116},nn=new Vy({antialias:!0,powerPreference:"default"});nn.setSize(window.innerWidth,window.innerHeight);nn.setPixelRatio(Math.min(window.devicePixelRatio,1.5));nn.shadowMap.enabled=!0;nn.shadowMap.type=sp;nn.toneMapping=rp;nn.toneMappingExposure=2.8;nn.outputColorSpace=wn;document.body.appendChild(nn.domElement);const pn=new Dn(65,window.innerWidth/window.innerHeight,.1,300),jp=new Vp,ct=new _g;ct.background=new st(F.skyDeep);ct.fog=new Du(F.fog,.01);window.addEventListener("resize",()=>{pn.aspect=window.innerWidth/window.innerHeight,pn.updateProjectionMatrix(),nn.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("visibilitychange",()=>{document.hidden||jp.getDelta()});const Kp={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Xr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const xw=new Vu(-1,1,1,-1,0,1);class vw extends Me{constructor(){super(),this.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Gt([0,2,0,0,2,0],2))}}const _w=new vw;class Jp{constructor(t){this._mesh=new I(_w,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,xw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Mw extends Xr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof En?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=rc.clone(t.uniforms),this.material=new En({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Jp(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class bd extends Xr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),o.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(i.EQUAL,1,4294967295),o.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),o.buffers.stencil.setLocked(!0)}}class yw extends Xr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class ww{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ut);this._width=n.width,this._height=n.height,e=new ii(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Oi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mw(Kp),this.copyPass.material.blending=Fi,this.clock=new Vp}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,o=this.passes.length;i<o;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}bd!==void 0&&(r instanceof bd?n=!0:r instanceof yw&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Sw extends Xr{constructor(t,e,n=null,i=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new st}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=i}}const bw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new st(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class qo extends Xr{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new ut(t.x,t.y):new ut(256,256),this.clearColor=new st(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new ii(o,r,{type:Oi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new ii(o,r,{type:Oi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new ii(o,r,{type:Oi});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),o=Math.round(o/2),r=Math.round(r/2)}const a=bw;this.highPassUniforms=rc.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new En({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ut(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Kp;this.copyUniforms=rc.clone(h.uniforms),this.blendMaterial=new En({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:le,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new st,this.oldClearAlpha=1,this.basic=new Y,this.fsQuad=new Jp(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,i),this.renderTargetsVertical[o].setSize(n,i),this.separableBlurMaterials[o].uniforms.invSize.value=new ut(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=qo.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=qo.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new En({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ut(.5,.5)},direction:{value:new ut(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new En({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}qo.BlurDirectionX=new ut(1,0);qo.BlurDirectionY=new ut(0,1);let Ns=null,Xu=!0;try{const s=new Sw(ct,pn),t=new qo(new ut(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2)),.6,.4,.85);Ns=new ww(nn),Ns.addPass(s),Ns.addPass(t)}catch(s){console.warn("Bloom unavailable, falling back to direct render:",s.message),Xu=!1}window.addEventListener("resize",()=>{Xu&&Ns&&Ns.setSize(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2))});function Td(){Xu&&Ns?Ns.render():nn.render(ct,pn)}const qu=new ix(F.ambient,F.ground,.65);ct.add(qu);const jn=new Ic(F.moon,.85);jn.position.set(30,60,-20);jn.castShadow=!0;jn.shadow.camera.left=-90;jn.shadow.camera.right=90;jn.shadow.camera.top=90;jn.shadow.camera.bottom=-90;jn.shadow.camera.near=1;jn.shadow.camera.far=250;jn.shadow.mapSize.set(1024,1024);jn.shadow.bias=-.001;ct.add(jn);const Yu=new Ic(2241365,.3);Yu.position.set(-40,45,25);ct.add(Yu);const Qp=new Ic(3359829,.4);Qp.position.set(-25,15,30);ct.add(Qp);const t0=new jo(3368516,.7,100);t0.position.set(0,.5,0);ct.add(t0);const e0=new Ic(4478327,.4);e0.position.set(-10,25,40);ct.add(e0);const Zu=new jo(6719624,.6,20);ct.add(Zu);const ys=[];function Tw(){for(let s=0;s<pw;s++){const t=new jo(F.crystal,0,16);ct.add(t),ys.push(t)}}const vr=new jo(F.orbGold,0,15);ct.add(vr);const Le={};let Or=0,zs=0,Uc=!1,n0=!1,$u=0,ju=0,Ku=!1,Nc=!1,Jo=!1,pc=null,Bs=null,Hh=0,Vh=0,Wh=null;function Ew(s){Wh=s}function Aw(s){n0=s}function Rw(s){Nc=s}function qr(){!n0&&Wh&&Wh()}window.addEventListener("keydown",s=>{Le[s.code]=!0,"Space ShiftLeft ShiftRight KeyW KeyA KeyS KeyD".split(" ").indexOf(s.code)>=0&&s.preventDefault(),qr()});window.addEventListener("keyup",s=>{Le[s.code]=!1});window.addEventListener("blur",()=>{for(const s in Le)Le[s]=!1;Uc=!1});nn.domElement.addEventListener("mousedown",()=>{Uc=!0,qr()});window.addEventListener("mouseup",()=>{Uc=!1});window.addEventListener("mousemove",s=>{Uc&&(Or-=s.movementX*dc,zs-=s.movementY*dc,zs=Math.max(-1,Math.min(1,zs)))});const Cw="ontouchstart"in window||navigator.maxTouchPoints>0,Yr=document.getElementById("joy-zone"),mc=document.getElementById("joy-knob"),Ju=document.getElementById("btn-jump");Cw&&(Yr.style.display="block",Ju.style.display="block",document.getElementById("controls").textContent="Stick: Move · Drag right: Look · JUMP");function i0(s,t){const e=Yr.getBoundingClientRect();let n=s-(e.left+e.width/2),i=t-(e.top+e.height/2);const o=Math.sqrt(n*n+i*i),r=52;o>r&&(n=n/o*r,i=i/o*r),$u=n/r,ju=i/r,mc.style.left=40+n+"px",mc.style.top=40+i+"px"}Yr.addEventListener("touchstart",s=>{s.preventDefault(),s.stopPropagation(),qr();const t=s.changedTouches[0];pc=t.identifier,Ku=!0,i0(t.clientX,t.clientY)},{passive:!1});Yr.addEventListener("touchmove",s=>{s.preventDefault(),s.stopPropagation();for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===pc&&i0(s.changedTouches[t].clientX,s.changedTouches[t].clientY)},{passive:!1});Yr.addEventListener("touchend",s=>{s.preventDefault(),s.stopPropagation();for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===pc&&(pc=null,Ku=!1,$u=0,ju=0,mc.style.left="40px",mc.style.top="40px")},{passive:!1});Ju.addEventListener("touchstart",s=>{s.preventDefault(),s.stopPropagation(),qr(),Nc=!0},{passive:!1});Ju.addEventListener("touchend",s=>{s.preventDefault(),s.stopPropagation(),Nc=!1},{passive:!1});nn.domElement.addEventListener("touchstart",s=>{s.preventDefault(),qr();for(let t=0;t<s.changedTouches.length;t++){const e=s.changedTouches[t];e.clientX>window.innerWidth*.3&&Bs===null&&(Bs=e.identifier,Hh=e.clientX,Vh=e.clientY)}},{passive:!1});nn.domElement.addEventListener("touchmove",s=>{s.preventDefault();for(let t=0;t<s.changedTouches.length;t++){const e=s.changedTouches[t];e.identifier===Bs&&(Or-=(e.clientX-Hh)*dc,zs-=(e.clientY-Vh)*dc,zs=Math.max(-1,Math.min(1,zs)),Hh=e.clientX,Vh=e.clientY)}},{passive:!1});nn.domElement.addEventListener("touchend",s=>{for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===Bs&&(Bs=null)},{passive:!1});nn.domElement.addEventListener("touchcancel",s=>{for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===Bs&&(Bs=null)},{passive:!1});function Pw(){let s=0,t=0;Le.KeyW&&(t-=1),Le.KeyS&&(t+=1),Le.KeyA&&(s-=1),Le.KeyD&&(s+=1),Ku&&(s+=$u,t+=ju);const e=Math.sqrt(s*s+t*t);e>1&&(s/=e,t/=e);const n=Xy*(Le.ShiftLeft||Le.ShiftRight||Jo?qy:1),i=Math.sin(Or),o=Math.cos(Or);return{x:(s*o+t*i)*n,z:(-s*i+t*o)*n}}const Rn={mushCap:new K(.5,8,5),mushStem:new yt(.06,.1,.6,5),mushDot:new K(.06,4,3),crystal:new yt(0,.35,1.8,6),crystalSm:new yt(0,.18,.9,5),fly:new K(.06,4,3),spore:new K(.04,3,3),dandSeed:new K(.025,3,3),bubble:new K(.15,8,6),starMote:new K(.03,3,3),dustMote:new K(.035,3,3)};let Rr=42;function S(){return Rr=Rr*16807%2147483647,(Rr&2147483647)/2147483647}function s0(){return Rr}function Xh(s){Rr=s}function Ra(s,t){let e=s*374761393+t*668265263+1274126177|0;return e=(e^e>>13)*1274126177|0,(e&2147483647)/2147483647}function Cr(s){return s*s*(3-2*s)}function o0(s,t){const e=Math.floor(s),n=Math.floor(t),i=Cr(s-e),o=Cr(t-n),r=Ra(e,n),a=Ra(e+1,n),l=Ra(e,n+1),c=Ra(e+1,n+1);return r+(a-r)*i+(l-r)*o+(r-a-l+c)*i*o}function Ed(s,t,e){let n=0,i=.5,o=1;for(let r=0;r<e;r++)n+=o0(s*o,t*o)*i,i*=.5,o*=2;return n}const qh=[];function Yh(s,t,e){qh.push({x:s,z:t,r:e})}function Zt(s,t){const e=Math.sqrt(s*s+t*t),n=1-Cr(Math.max(0,(e-ce*.7)/(ce*.3))),i=Cr(Math.min(1,e/8)),o=.035,r=Ed(s*o,t*o,4),a=Ed(s*o*2.7+50,t*o*2.7+50,3),l=o0(s*.15,t*.15);let c=r*2.5+a*.8+l*.15;c*=n*i;for(let h=0;h<qh.length;h++){const u=qh[h],d=s-u.x,p=t-u.z,g=Math.sqrt(d*d+p*p);if(g<u.r*2){const x=Cr(Math.max(0,(g-u.r*.5)/(u.r*1.5)));c*=x}}return c}function Iw(){const t=document.createElement("canvas");t.width=2048,t.height=2048;const e=t.getContext("2d"),n=Math.random;e.fillStyle="#2a5038",e.fillRect(0,0,2048,2048);const i=[{col:"rgba(40,80,50,0.35)",n:15,r:120},{col:"rgba(60,50,25,0.25)",n:12,r:100},{col:"rgba(30,65,55,0.25)",n:10,r:110},{col:"rgba(55,70,35,0.2)",n:8,r:90},{col:"rgba(35,40,25,0.25)",n:8,r:80}];for(const h of i)for(let u=0;u<h.n;u++){const d=n()*2048,p=n()*2048,g=h.r*(.5+n()*.8),x=e.createRadialGradient(d,p,0,d,p,g);x.addColorStop(0,h.col),x.addColorStop(.6,h.col.replace(/[\d.]+\)$/,parseFloat(h.col.match(/[\d.]+\)$/)[0])*.4+")")),x.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=x;for(let f=-1;f<=1;f++)for(let m=-1;m<=1;m++)e.beginPath(),e.arc(d+f*2048,p+m*2048,g,0,6.28),e.fill()}const o=[{n:80,r:25,colors:["rgba(20,45,25,0.2)","rgba(35,55,28,0.18)","rgba(28,22,12,0.2)","rgba(15,38,30,0.15)"]},{n:200,r:10,colors:["rgba(30,55,30,0.14)","rgba(45,35,18,0.12)","rgba(22,48,35,0.12)","rgba(38,28,14,0.1)"]},{n:500,r:4,colors:["rgba(25,50,28,0.1)","rgba(40,30,15,0.08)","rgba(18,42,32,0.08)","rgba(32,25,10,0.06)"]}];for(const h of o)for(let u=0;u<h.n;u++){e.fillStyle=h.colors[Math.floor(n()*h.colors.length)];const d=n()*2048,p=n()*2048;e.beginPath(),e.arc(d,p,h.r+n()*h.r*.6,0,6.28),e.fill()}const r=["rgba(60,200,100,0.06)","rgba(50,180,120,0.05)","rgba(80,160,200,0.04)","rgba(100,220,150,0.05)"];for(let h=0;h<25;h++){let u=n()*2048,d=n()*2048;const p=r[Math.floor(n()*r.length)];e.strokeStyle=p,e.lineWidth=1+n()*2,e.beginPath(),e.moveTo(u,d);let g=n()*6.28;const x=12+Math.floor(n()*16);for(let f=0;f<x;f++)g+=Math.sin(f*.6)*.5+(n()-.5)*.4,u+=Math.cos(g)*(6+n()*10),d+=Math.sin(g)*(6+n()*10),e.lineTo(u,d);if(e.stroke(),n()<.6){const f=e.createRadialGradient(u,d,0,u,d,6+n()*8);f.addColorStop(0,p.replace("0.0","0.1")),f.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=f,e.beginPath(),e.arc(u,d,6+n()*8,0,6.28),e.fill()}}e.lineWidth=1.2;for(let h=0;h<30;h++){e.strokeStyle=`rgba(20,12,5,${.15+n()*.12})`;let u=n()*2048,d=n()*2048,p=n()*6.28;e.beginPath(),e.moveTo(u,d);for(let g=0;g<10;g++)p+=Math.sin(g*.7)*.5+(n()-.5)*.35,u+=Math.cos(p)*(8+n()*14),d+=Math.sin(p)*(8+n()*14),e.lineTo(u,d);e.stroke()}const a=["rgba(55,32,12,0.3)","rgba(70,42,18,0.25)","rgba(40,55,22,0.22)","rgba(22,50,28,0.2)","rgba(60,45,20,0.25)","rgba(30,60,35,0.18)","rgba(50,25,8,0.22)","rgba(65,55,25,0.18)"];for(let h=0;h<3e3;h++){e.fillStyle=a[Math.floor(n()*a.length)];const u=n()*2048,d=n()*2048,p=.8+n()*2.5;e.beginPath(),e.arc(u,d,p,0,6.28),e.fill()}for(let h=0;h<40;h++){const u=n()*2048,d=n()*2048,p=15+n()*35,g=e.createRadialGradient(u,d,0,u,d,p),x=n();x<.4?(g.addColorStop(0,"rgba(45,90,50,0.18)"),g.addColorStop(1,"rgba(25,55,30,0)")):x<.7?(g.addColorStop(0,"rgba(35,75,60,0.16)"),g.addColorStop(1,"rgba(20,50,38,0)")):(g.addColorStop(0,"rgba(55,75,35,0.14)"),g.addColorStop(1,"rgba(30,45,20,0)")),e.fillStyle=g,e.beginPath(),e.arc(u,d,p,0,6.28),e.fill()}for(let h=0;h<400;h++){const u=n()*2048,d=n()*2048,p=1.5+n()*3.5,g=Math.floor(28+n()*42);e.fillStyle=`rgba(${g},${g-4},${g-10},0.3)`,e.beginPath(),e.arc(u,d,p,0,6.28),e.fill()}e.lineWidth=.7;for(let h=0;h<80;h++){const u=n()*2048,d=n()*2048,p=4+n()*18,g=n()*6.28;e.strokeStyle=`rgba(22,12,5,${.15+n()*.1})`,e.beginPath(),e.moveTo(u,d),e.lineTo(u+Math.cos(g)*p,d+Math.sin(g)*p),e.stroke()}const l=["rgba(80,220,120,0.08)","rgba(60,200,160,0.07)","rgba(100,180,220,0.06)","rgba(120,100,200,0.05)","rgba(200,150,80,0.04)","rgba(60,180,180,0.06)"];for(let h=0;h<300;h++){const u=n()*2048,d=n()*2048,p=l[Math.floor(n()*l.length)];if(e.fillStyle=p,e.beginPath(),e.arc(u,d,1+n()*2,0,6.28),e.fill(),n()<.3){const g=e.createRadialGradient(u,d,0,u,d,4+n()*5);g.addColorStop(0,p),g.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=g,e.beginPath(),e.arc(u,d,4+n()*5,0,6.28),e.fill()}}for(let h=0;h<150;h++){const u=n()*2048,d=n()*2048;e.fillStyle=`rgba(120,180,130,${.04+n()*.04})`,e.beginPath(),e.arc(u,d,.5+n()*1.2,0,6.28),e.fill()}const c=new Cc(t);return c.wrapS=c.wrapT=nc,c.repeat.set(8,8),c.colorSpace=wn,c}function Ca(s,t){let e=s*127961+t*372143+918273|0;return e=(e^e>>13)*517261|0,(e&2147483647)/2147483647}function Zh(s){return s*s*(3-2*s)}function r0(s,t){const e=Math.floor(s),n=Math.floor(t),i=Zh(s-e),o=Zh(t-n),r=Ca(e,n),a=Ca(e+1,n),l=Ca(e,n+1),c=Ca(e+1,n+1);return r+(a-r)*i+(l-r)*o+(r-a-l+c)*i*o}function yl(s,t,e){let n=0,i=.5,o=1;for(let r=0;r<e;r++)n+=r0(s*o,t*o)*i,i*=.5,o*=2;return n}function Lw(){const s=Iw(),t=ce*3,e=200,n=new xe(t,t,e,e),i=n.attributes.position,o=[[.55,.95,.6],[.45,.85,.95],[.8,.5,1],[.85,.65,.4],[.5,1.1,.65],[.4,.7,.9]],r=i.count,a=new Float32Array(r*3);for(let c=0;c<r;c++){const h=i.getX(c),u=i.getY(c);Math.sqrt(h*h+u*u)<ce*1.4?i.setZ(c,Zt(h,-u)):i.setZ(c,0);const p=h,g=-u,x=yl(p*.025+100,g*.025+200,3),f=yl(p*.06+300,g*.06+400,2),m=r0(p*.15+500,g*.15+600),w=yl(p*.04-150,g*.04-250,3),_=Math.floor(x*o.length*.999),M=Math.floor(w*o.length*.999),A=o[_],E=o[M],T=Zh(f),b=.85+m*.3,y=(A[0]*(1-T)+E[0]*T)*b,v=(A[1]*(1-T)+E[1]*T)*b,R=(A[2]*(1-T)+E[2]*T)*b,L=1+Zt(p,g)*.06;a[c*3]=y*L,a[c*3+1]=v*L,a[c*3+2]=R*L}n.setAttribute("color",new ze(a,3)),n.computeVertexNormals();const l=new I(n,new J({map:s,vertexColors:!0,roughness:.75,metalness:0,emissive:1718304,emissiveIntensity:.25}));return l.rotation.x=-Math.PI/2,l.receiveShadow=!0,ct.add(l),l}const Br=new ae;let gc=null;const ws=120;let Ad=null,Ya=null,$h=null,jh=null,Co=null;const Po=[],Dw=3;let wl=0;function es(s,t){const e=s>>16&255,n=s>>8&255,i=s&255;return`rgba(${e},${n},${i},${t})`}function ns(s,t,e,n,i,o,r){s.save(),s.translate(t,e),Math.abs(i/n-1)>.01&&s.scale(1,i/n);const a=s.createRadialGradient(0,0,0,0,0,n);a.addColorStop(0,es(o,r)),a.addColorStop(.25,es(o,r*.55)),a.addColorStop(.55,es(o,r*.15)),a.addColorStop(.85,es(o,r*.03)),a.addColorStop(1,es(o,0)),s.fillStyle=a,s.beginPath(),s.arc(0,0,n,0,6.2832),s.fill(),s.restore()}function Sl(s,t,e,n,i,o,r,a){ns(s,t,e,n,i,o,r),t-n<0&&ns(s,t+a,e,n,i,o,r),t+n>a&&ns(s,t-a,e,n,i,o,r)}function Uw(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),i=Math.random,o=n.createLinearGradient(0,0,0,1024);o.addColorStop(0,"#030610"),o.addColorStop(.2,"#050a18"),o.addColorStop(.4,"#0a1222"),o.addColorStop(.55,"#0c1828"),o.addColorStop(.75,"#081018"),o.addColorStop(1,"#040810"),n.fillStyle=o,n.fillRect(0,0,2048,1024);const r=[{x:.12,y:.22,rx:.18,ry:.14,col:1717094,a:.14},{x:.42,y:.28,rx:.22,ry:.1,col:2758741,a:.12},{x:.72,y:.18,rx:.16,ry:.12,col:1721446,a:.13},{x:.88,y:.32,rx:.2,ry:.09,col:3348548,a:.1},{x:.28,y:.12,rx:.14,ry:.18,col:2245768,a:.1},{x:.58,y:.38,rx:.18,ry:.07,col:4465220,a:.08},{x:.05,y:.4,rx:.15,ry:.1,col:1586005,a:.09},{x:.52,y:.15,rx:.12,ry:.16,col:2765670,a:.07}];for(const u of r){Sl(n,u.x*2048,u.y*1024,u.rx*2048,u.ry*1024,u.col,u.a,2048);for(let d=0;d<4;d++){const p=(u.x+(i()-.5)*u.rx)*2048,g=(u.y+(i()-.5)*u.ry)*1024,x=u.rx*2048*(.2+i()*.35),f=u.ry*1024*(.2+i()*.4);Sl(n,p,g,x,f,u.col,u.a*(.4+i()*.5),2048)}}const a=[2245802,2245734,4465254,5583701,3368584,2245717,3809894];for(let u=0;u<30;u++){const d=i()*2048,p=i()*1024*.55,g=40+i()*180,x=25+i()*100;Sl(n,d,p,g,x,a[Math.floor(i()*a.length)],.025+i()*.035,2048)}n.save(),n.globalCompositeOperation="screen";const l=.26;for(let u=0;u<50;u++){const d=u/50,p=d*2048,g=(l+Math.sin(d*Math.PI)*.06+(i()-.5)*.02)*1024,x=2048*.05+i()*2048*.035,f=1024*.04*(.4+i()*.6);ns(n,p,g,x,f,4478310,.025+i()*.015)}for(let u=0;u<25;u++){const d=.2+i()*.6,p=d*2048,g=(l+Math.sin(d*Math.PI)*.04)*1024;ns(n,p,g,2048*.03+i()*2048*.02,1024*.02+i()*1024*.01,6719658,.015+i()*.012)}for(let u=0;u<10;u++){const d=.35+i()*.3,p=d*2048,g=(l+Math.sin(d*Math.PI)*.02)*1024;ns(n,p,g,2048*.02,1024*.012,8943462,.01+i()*.008)}n.globalCompositeOperation="source-over",n.restore();for(let u=0;u<12;u++){const d=.1+i()*.8,p=d*2048,g=(l+Math.sin(d*Math.PI)*.04+(i()-.5)*.02)*1024,x=20+i()*60,f=8+i()*20;ns(n,p,g,x,f,132104,.15+i()*.1)}const c=["255,255,255","220,230,255","255,240,220","200,215,255","255,225,200","240,240,255","255,245,235"];for(let u=0;u<5e3;u++){const d=i()*2048,p=i()*1024*.65,g=.3+i()*.7,x=.1+i()*.5;n.fillStyle=`rgba(${c[Math.floor(i()*c.length)]},${x})`,n.beginPath(),n.arc(d,p,g,0,6.28),n.fill()}for(let u=0;u<3e3;u++){const d=i(),p=d*2048,x=(l+Math.sin(d*Math.PI)*.06)*1024+(i()-.5)*1024*.1;if(x<0||x>1024*.6)continue;const f=.2+i()*.6,m=.2+i()*.7;n.fillStyle=`rgba(${c[Math.floor(i()*c.length)]},${m})`,n.beginPath(),n.arc(p,x,f,0,6.28),n.fill()}for(let u=0;u<60;u++){const d=i()*2048,p=i()*1024*.58,g=1.2+i()*1.8,x=6+i()*14,f=i();let m;f<.45?m="255,255,255":f<.65?m="210,225,255":f<.8?m="255,230,200":f<.92?m="190,210,255":m="255,200,180";const w=n.createRadialGradient(d,p,0,d,p,x);w.addColorStop(0,`rgba(${m},0.5)`),w.addColorStop(.1,`rgba(${m},0.18)`),w.addColorStop(.35,`rgba(${m},0.04)`),w.addColorStop(1,`rgba(${m},0)`),n.fillStyle=w,n.beginPath(),n.arc(d,p,x,0,6.28),n.fill(),n.strokeStyle=`rgba(${m},0.12)`,n.lineWidth=.5;const _=x*.8;n.beginPath(),n.moveTo(d-_,p),n.lineTo(d+_,p),n.moveTo(d,p-_),n.lineTo(d,p+_),n.stroke(),n.fillStyle=`rgba(${m},1)`,n.beginPath(),n.arc(d,p,g,0,6.28),n.fill()}for(let u=0;u<8;u++){const d=i()*2048,p=1024*.08+i()*1024*.42,g=50+i()*90;ns(n,d,p,g,g*.7,3359846,.03);for(let x=0;x<100;x++){const f=i()*6.28,m=i()*i()*g,w=d+Math.cos(f)*m,_=p+Math.sin(f)*m*.65;if(w<0||w>2048||_<0||_>1024)continue;const M=.2+i()*.6;n.fillStyle=`rgba(255,255,255,${.25+i()*.6})`,n.beginPath(),n.arc(w,_,M,0,6.28),n.fill()}}for(let u=0;u<15;u++){const d=r[Math.floor(i()*r.length)],p=(d.x+(i()-.5)*d.rx*.5)*2048,g=(d.y+(i()-.5)*d.ry*.5)*1024,x=3+i()*8,f=n.createRadialGradient(p,g,0,p,g,x*3);f.addColorStop(0,es(d.col,.2)),f.addColorStop(.3,es(d.col,.06)),f.addColorStop(1,es(d.col,0)),n.fillStyle=f,n.beginPath(),n.arc(p,g,x*3,0,6.28),n.fill()}const h=new Cc(e);return h.colorSpace=wn,h}function Nw(){const s=s0(),t=Uw(),e=new K(Us,64,32,0,Math.PI*2,0,Math.PI*.55);gc=new Y({map:t,side:Sn,fog:!1,transparent:!1});const n=new I(e,gc);Br.add(n),zw(),Fw(),ct.add(Br),Xh(s)}function zw(){const s=new Float32Array(ws*3),t=new Float32Array(ws*3);Ya=new Float32Array(ws),$h=new Float32Array(ws),jh=new Float32Array(ws);const e=[[1,1,1],[.85,.9,1],[1,.94,.86],[.78,.84,1],[1,.88,.78],[.9,.95,1]],n=Math.random,i=Us*.97;for(let a=0;a<ws;a++){const l=n()*Math.PI*2,c=n()*Math.PI*.48,h=i*Math.cos(l)*Math.sin(c),u=i*Math.cos(c),d=i*Math.sin(l)*Math.sin(c);s[a*3]=h,s[a*3+1]=u,s[a*3+2]=d;const p=e[Math.floor(n()*e.length)];t[a*3]=p[0],t[a*3+1]=p[1],t[a*3+2]=p[2],Ya[a]=2+n()*4,$h[a]=n()*Math.PI*2,jh[a]=.5+n()*2.5}const o=new Me;o.setAttribute("position",new Gt(s,3)),o.setAttribute("color",new Gt(t,3)),Co=new Gt(Ya.slice(),1),Co.setUsage(Re),o.setAttribute("size",Co);const r=new zu({vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,fog:!1,blending:le,depthWrite:!1});Ad=new Lp(o,r),Br.add(Ad)}function Fw(){const s=new Y({color:16777215,transparent:!0,opacity:0,fog:!1,blending:le,depthWrite:!1});for(let t=0;t<Dw;t++){const e=new I(new yt(.15,0,12,4),s.clone());e.visible=!1,Br.add(e),Po.push({mesh:e,mat:e.material,active:!1,life:0,maxLife:0,sx:0,sy:0,sz:0,dx:0,dy:0,dz:0})}}function Ow(){let s=null;for(let a=0;a<Po.length;a++)if(!Po[a].active){s=Po[a];break}if(!s)return;const t=Math.random,e=t()*Math.PI*2,n=.1+t()*.35,i=Us*.85;s.sx=i*Math.cos(e)*Math.sin(n),s.sy=i*Math.cos(n),s.sz=i*Math.sin(e)*Math.sin(n);const o=e+(t()-.5)*1,r=80+t()*120;s.dx=Math.cos(o)*r,s.dy=-r*(.5+t()*.5),s.dz=Math.sin(o)*r,s.life=.5+t()*.8,s.maxLife=s.life,s.active=!0,s.mesh.visible=!0}function a0(s,t){if(Br.rotation.y=t*.003,Co){const e=Co.array;for(let n=0;n<ws;n++){const i=Ya[n],o=Math.sin(t*jh[n]+$h[n]);e[n]=i*(.65+o*.35)}Co.needsUpdate=!0}wl-=s,wl<=0&&(wl=4+Math.random()*12,Ow());for(let e=0;e<Po.length;e++){const n=Po[e];if(!n.active)continue;if(n.life-=s,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}const i=n.life/n.maxLife;n.sx+=n.dx*s,n.sy+=n.dy*s,n.sz+=n.dz*s,n.mesh.position.set(n.sx,n.sy,n.sz),n.mesh.lookAt(n.sx+n.dx,n.sy+n.dy,n.sz+n.dz),n.mesh.rotateX(Math.PI/2),n.mat.opacity=i*.7,n.mesh.scale.setScalar(.6+i*.4)}}function Bw(s){if(gc){const t=Math.max(.15,s);gc.color.setRGB(t,t,t)}}const Gw=6,Pa=64,Kh=[];let Is=null;const ur=[new st(1734485),new st(2787447),new st(5601126),new st(6706568),new st(8930406),new st(3368533)];function kw(){Is=new ae,Is.visible=!1;for(let s=0;s<Gw;s++){const t=1.2+s*.2+Math.sin(s*1.7)*.15,e=Us*t,n=.1+s*.012+Math.sin(s*2.3)*.02,i=Us*n,o=new xe(e,i,Pa,3),r=o.attributes.position.array,a=4,l=(Pa+1)*a,c=Math.PI*(.45+s*.08+Math.sin(s*.9)*.05),h=-c/2,u=(.25+s*.04+Math.sin(s*1.3)*.02)*Math.PI,d=s*.18-.45;for(let f=0;f<l;f++){const m=Math.floor(f/a),w=f%a,_=m/Pa,M=h+_*c+d,E=(w/(a-1)-.5)*.05,T=u+E,b=Us*.92;r[f*3]=Math.sin(M)*Math.sin(T)*b,r[f*3+1]=Math.cos(T)*b,r[f*3+2]=Math.cos(M)*Math.sin(T)*b}o.attributes.position.needsUpdate=!0,o.attributes.position.setUsage(Re),o.computeVertexNormals();const p=new Float32Array(l*3);o.setAttribute("color",new ze(p,3)),o.attributes.color.setUsage(Re);const g=new Y({vertexColors:!0,transparent:!0,opacity:0,side:Dt,blending:le,depthWrite:!1,fog:!1}),x=new I(o,g);Is.add(x),Kh.push({mesh:x,mat:g,geo:o,colorArr:p,posArr:r,vertCount:l,rows:a,segments:Pa,phase:s*1.7+Math.sin(s*.8)*.5,speed:.15+s*.05+Math.sin(s*2.1)*.03,colorShift:s*1.1,elevation:u,arcStart:h,arcSpan:c,azimuthOffset:d})}ct.add(Is)}let ho=0;function Hw(s,t,e,n,i){if(!Is)return;const o=i==="HEAVY_RAIN"||i==="LUMINOUS_STORM"||i==="FOG_BANK";let r=0;o||(e==="DEEP_NIGHT"?r=.25:e==="NIGHT"&&(r=.08));const a=r>ho?.2:.4;if(ho+=(r-ho)*a*s,ho<.005){Is.visible=!1;return}Is.visible=!0;const l=Us*.92;for(let c=0;c<Kh.length;c++){const h=Kh[c],u=h.colorArr,d=h.posArr,p=h.segments,g=h.rows;h.mat.opacity=ho*(.5+c*.05);for(let x=0;x<=p;x++){const f=x/p,m=Math.sin(f*6+t*h.speed+h.phase)*.5+.5,w=Math.sin(f*3-t*h.speed*.4+h.phase*1.3)*.5+.5,_=Math.sin(f*1.5+t*.07)*.5+.5,M=Math.sin(f*1.2+t*.05+h.phase*.7)*.5+.5,A=(m*.3+w*.25+_*.2+M*.25)*ho,E=(f*3+t*.08+h.colorShift)%ur.length,T=Math.floor(E),b=E-T,y=ur[T%ur.length],v=ur[(T+1)%ur.length],R=(y.r+(v.r-y.r)*b)*A,U=(y.g+(v.g-y.g)*b)*A,L=(y.b+(v.b-y.b)*b)*A,z=l*.025,V=Math.sin(f*5+t*.3+h.phase)*z+Math.sin(f*2.5-t*.15+h.phase*.6)*z*.5;for(let k=0;k<g;k++){const $=x*g+k,W=k/(g-1);let at;W<.33?at=W*1.2:W>.67?at=(1-W)*1.5:at=.7+Math.sin(W*Math.PI)*.3,u[$*3]=R*at,u[$*3+1]=U*at,u[$*3+2]=L*at,h.arcStart+f*h.arcSpan+h.azimuthOffset;const pt=(W-.5)*.05,Rt=h.elevation+pt,Ft=V*(.3+W*.7);d[$*3+1]=Math.cos(Rt)*l+Ft}}h.geo.attributes.color.needsUpdate=!0,h.geo.attributes.position.needsUpdate=!0}}const j={pos:new N(0,Dc,0),vel:new N,onGround:!0};let bl=0,Tl=0,c0=0,El=65,Rd=65,fr=0,Cd=!0,Al=0,Yo=0,Jh=null,Qh=null,tu=null,Pd=1;function Vw(s,t,e){Jh=s,Qh=t,tu=e}let eu=[],nu=[],iu=null;function Ww(s,t){eu=s,nu=t}function Xw(s){iu=s}function qw(s){const t=Pw(),e=Le.ShiftLeft||Le.ShiftRight||Jo;j.vel.x=t.x,j.vel.z=t.z,j.vel.y-=Wy*s,(Le.Space||Nc)&&j.onGround&&(j.vel.y=fc,j.onGround=!1,Rw(!1),Qh&&Qh()),j.onGround||(Al=j.vel.y),j.pos.x+=j.vel.x*s,j.pos.y+=j.vel.y*s,j.pos.z+=j.vel.z*s;const n=Zt(j.pos.x,j.pos.z)+Dc;if(j.pos.y<=n){if(j.pos.y=n,j.vel.y=0,!Cd&&Al<-3){const h=Math.min(Math.abs(Al)/fc,1);fr=h*.15,iu&&iu(j.pos.x,j.pos.z,Math.floor(3+h*5)),tu&&tu(h)}j.onGround=!0}Cd=j.onGround,j.onGround?(j.vel.x*=Md,j.vel.z*=Md):(j.vel.x*=yd,j.vel.z*=yd);const i=.4;for(let h=0;h<eu.length;h++){const u=eu[h],d=j.pos.x-u.x,p=j.pos.z-u.z,g=d*d+p*p,x=.6+i;if(g<x*x&&g>.001){const f=1/Math.sqrt(g);j.pos.x=u.x+d*f*x,j.pos.z=u.z+p*f*x}}for(let h=0;h<nu.length;h++){const u=nu[h],d=j.pos.x-u.x,p=j.pos.z-u.z,g=d*d+p*p,x=u.colR+i;if(g<x*x&&g>.001){const f=1/Math.sqrt(g);j.pos.x=u.x+d*f*x,j.pos.z=u.z+p*f*x}}if(Math.sqrt(j.pos.x*j.pos.x+j.pos.z*j.pos.z)>ce){const h=Math.atan2(j.pos.z,j.pos.x);j.pos.x=Math.cos(h)*ce,j.pos.z=Math.sin(h)*ce}Zu.position.copy(j.pos);const a=Math.sqrt(t.x*t.x+t.z*t.z)>.5&&j.onGround;a?Yo=0:Yo+=s,Tl+=((a?e?.06:.035:0)-Tl)*s*6,a&&(bl+=s*(e?12:8));const c=Math.sin(bl)*Tl;if(a&&Jh){const h=Math.sin(bl)>=0?1:-1;Pd>0&&h<0&&Jh(e),Pd=h}Rd=e&&a?78:65,El+=(Rd-El)*s*4,pn.fov=El,pn.updateProjectionMatrix(),fr*=Math.pow(.04,s),fr<.001&&(fr=0),c0=c-fr}function Id(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),o={},r={},a=s[0].morphTargetsRelative,l=new Me;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const u=[];for(let d=0;d<s.length;++d){const p=s[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in o){const u=Ld(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in r){const u=r[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const p=[];for(let x=0;x<r[h].length;++x)p.push(r[h][x][d]);const g=Ld(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ld(s){let t,e,n,i=-1,o=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new ze(r,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<e;g++){const x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else r.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}const Dd=[{leaf:1332520,glow:2280567,core:4521898},{leaf:931880,glow:3390378,core:5636044},{leaf:1721376,glow:4508757,core:7864200},{leaf:1060912,glow:2267562,core:4513262},{leaf:1583172,glow:3377356,core:5618687}],Za=10,su=[],_i=[];let Ia=null;function Yw(){if(Ia)return Ia;const s=64,t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d"),n=e.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);return n.addColorStop(0,"rgba(68, 255, 136, 0.55)"),n.addColorStop(.25,"rgba(34, 204, 100, 0.35)"),n.addColorStop(.6,"rgba(20, 120, 60, 0.12)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=n,e.fillRect(0,0,s,s),Ia=new Cc(t),Ia}function Zw(s,t){const e=new Cp({map:Yw(),color:3394696,transparent:!0,opacity:.65,depthWrite:!1,blending:le}),n=new yg(e),i=s*.55;return n.scale.set(i*2.2,i*1.6,1),n.position.y=t+s*.6,n.visible=!1,ct.add(n),n}function $w(){const s=new ae,t=6+S()*10,e=.2+S()*.3,n=new J({color:5914672,roughness:.75,emissive:1718304,emissiveIntensity:.18}),i=new I(new yt(e*.4,e,t,6),n);i.position.y=t/2,s.add(i);const o=new J({color:2263125,emissive:F.leafGlow,emissiveIntensity:.5,transparent:!0,opacity:.25}),r=2+Math.floor(S()*3);for(let p=0;p<r;p++){const g=p/r*6.28+S()*.5,x=t*.4+S()*t*.4,f=new I(new yt(.008,.015,x,3),o);f.position.set(Math.cos(g)*e*.74,t*.15+x/2,Math.sin(g)*e*.74),f.userData._glow=!0,s.add(f)}const a=new J({color:3812378,roughness:.85,emissive:1583636,emissiveIntensity:.12}),l=3+Math.floor(S()*3);for(let p=0;p<l;p++){const g=p/l*6.28+S()*.5,x=.8+S()*1.5,f=new I(new yt(.02,e*.3,x,4),a);f.position.set(Math.cos(g)*e*.5,.08,Math.sin(g)*e*.5),f.rotation.z=g<3.14?1.2+S()*.3:-(1.2+S()*.3),f.rotation.y=g,s.add(f)}const c=3+Math.floor(S()*4);for(let p=0;p<c;p++){const g=t*(.4+S()*.5),x=S()*Math.PI*2,f=1.5+S()*3,m=new I(new yt(.02,.06,f,4),n);m.position.set(Math.cos(x)*.3,g,Math.sin(x)*.3),m.rotation.z=(S()-.5)*1.2,m.rotation.y=x,s.add(m);const w=Dd[Math.floor(S()*Dd.length)],_=Math.cos(x)*(f*.5),M=g+S()*1.5,A=Math.sin(x)*(f*.5),E=1+S()*2,T=new J({color:w.core,emissive:w.core,emissiveIntensity:.7+S()*.5,transparent:!0,opacity:.55,roughness:.3}),b=new I(new Wo(E*.3,1),T);b.position.set(_,M,A),b.userData._glow=!0,s.add(b);const y=new J({color:w.leaf,emissive:w.glow,emissiveIntensity:.25+S()*.25,transparent:!0,opacity:.55,roughness:.7}),v=new I(new Wo(E*.75,1),y);v.position.set(_+(S()-.5)*.4,M+(S()-.5)*.4,A+(S()-.5)*.4),v.scale.set(1+S()*.4,.65+S()*.5,1+S()*.4),v.userData._glow=!0,s.add(v),S()<.35&&(S(),S(),S())}const h=Math.floor(S()*3);for(let p=0;p<h;p++){const g=1+S()*t*.4,x=S()*6.28,f=new J({color:5911840,emissive:3349e3,emissiveIntensity:.06,roughness:.8}),m=new I(new K(.08+S()*.08,5,3),f);m.scale.set(1.5,.3,1),m.position.set(Math.cos(x)*e*.8,g,Math.sin(x)*e*.8),m.rotation.y=-x,s.add(m)}S();const u=new J({color:1183752,roughness:.95}),d=new I(new K(e*2.5,6,3),u);return d.scale.set(1,.12,1),d.position.y=.02,s.add(d),s.userData.treeH=t,s}function Ud(s,t){const e=s.attributes.position.count,n=new Float32Array(e*3),i=new st(t);for(let o=0;o<e;o++)n[o*3]=i.r,n[o*3+1]=i.g,n[o*3+2]=i.b;s.setAttribute("color",new Gt(n,3))}function jw(s){const t=[],e=[];return s.updateMatrixWorld(!0),s.traverse(n=>{if(!n.isMesh)return;const i=n.material,o=n.geometry.clone();if(o.applyMatrix4(n.matrixWorld),o.attributes.uv&&o.deleteAttribute("uv"),o.attributes.uv1&&o.deleteAttribute("uv1"),o.attributes.uv2&&o.deleteAttribute("uv2"),o.attributes.normal||o.computeVertexNormals(),n.userData._glow===!0){const a=i.emissive||new st(4521898);Ud(o,a),e.push(o)}else Ud(o,i.color),t.push(o)}),{opaqueGeo:t.length>0?Id(t):null,glowGeo:e.length>0?Id(e):null}}function Kw(){const s=s0();Xh(9999);for(let t=0;t<Za;t++){const e=$w(),n=e.userData.treeH,i=jw(e);su.push({opaqueGeo:i.opaqueGeo,glowGeo:i.glowGeo,treeH:n}),e.traverse(o=>{o.isMesh&&(o.geometry.dispose(),o.material.dispose&&o.material.dispose())})}Xh(s)}function Jw(s){const t=[];for(let c=0;c<Za;c++)t.push([]);for(let c=0;c<s.length;c++){const h=s[c],u=c%Za,d=c*2.39996%6.28,p=.7+(c*7+3)%13/13*.6,g=su[u].treeH*p;h.treeH=g,t[u].push({x:h.x,z:h.z,groundY:h.groundY,yRot:d,scale:p,dataIdx:c})}const e=new J({vertexColors:!0,roughness:.75,emissive:1718304,emissiveIntensity:.1}),n=new J({vertexColors:!0,transparent:!0,opacity:.45,roughness:.5,depthWrite:!1});n.onBeforeCompile=c=>{c.fragmentShader=c.fragmentShader.replace("#include <emissivemap_fragment>","totalEmissiveRadiance = vColor * 2.0;")};const i=new se,o=new N,r=new rs,a=new N,l=new N(0,1,0);for(let c=0;c<Za;c++){const h=su[c],u=t[c];if(u.length===0){_i.push({opaque:null,glow:null,instances:[]});continue}let d=null;if(h.opaqueGeo){d=new wi(h.opaqueGeo,e.clone(),u.length),d.castShadow=!0,d.receiveShadow=!0;for(let g=0;g<u.length;g++){const x=u[g];o.set(x.x,x.groundY,x.z),r.setFromAxisAngle(l,x.yRot),a.set(x.scale,x.scale,x.scale),i.compose(o,r,a),d.setMatrixAt(g,i)}d.instanceMatrix.needsUpdate=!0,ct.add(d)}let p=null;if(h.glowGeo){const g=n.clone();g.onBeforeCompile=x=>{x.fragmentShader=x.fragmentShader.replace("#include <emissivemap_fragment>","totalEmissiveRadiance = vColor * 2.0;")},p=new wi(h.glowGeo,g,u.length);for(let x=0;x<u.length;x++){const f=u[x];o.set(f.x,f.groundY,f.z),r.setFromAxisAngle(l,f.yRot),a.set(f.scale,f.scale,f.scale),i.compose(o,r,a),p.setMatrixAt(x,i)}p.instanceMatrix.needsUpdate=!0,ct.add(p)}_i.push({opaque:d,glow:p,instances:u})}for(let c=0;c<_i.length;c++){const h=_i[c];for(let u=0;u<h.instances.length;u++){const d=h.instances[u],p=s[d.dataIdx];p._tmplIdx=c,p._instIdx=u,p._yRot=d.yRot,p._scale=d.scale,p._lod=-1}}}const Rl=new se,Nd=new N,Cl=new rs,zd=new N,Fd=new si,Qw=new N(0,1,0),Od=new se().compose(new N(0,-1e3,0),new rs,new N(0,0,0));function t1(s,t,e,n,i,o,r,a){const l=new Uint8Array(_i.length);for(let c=0;c<s.length;c++){const h=s[c],u=h.x-t,d=h.z-n,p=h.groundY+(h.treeH||10)*.4-e,g=u*u+p*p+d*d;let x;g>12100?x=3:g>4900?x=2:g>400?x=1:x=0;const f=h._tmplIdx,m=h._instIdx,w=_i[f];if(h.impostor){const _=x===2;h.impostor.visible!==_&&(h.impostor.visible=_)}if(x!==h._lod||x===0){if(x>=2)h._lod<2&&(w.opaque&&w.opaque.setMatrixAt(m,Od),w.glow&&w.glow.setMatrixAt(m,Od),l[f]=1);else{if(Nd.set(h.x,h.groundY,h.z),zd.set(h._scale,h._scale,h._scale),x===0){const _=h.x*.1+h.z*.13;Fd.set(Math.sin(i*.25+_+1)*.003*o+a*.15,h._yRot,Math.sin(i*.3+_)*.004*o+r*.15),Cl.setFromEuler(Fd)}else Cl.setFromAxisAngle(Qw,h._yRot);Rl.compose(Nd,Cl,zd),w.opaque&&w.opaque.setMatrixAt(m,Rl),w.glow&&w.glow.setMatrixAt(m,Rl),l[f]=1}h._lod=x}}for(let c=0;c<_i.length;c++)if(l[c]){const h=_i[c];h.opaque&&(h.opaque.instanceMatrix.needsUpdate=!0),h.glow&&(h.glow.instanceMatrix.needsUpdate=!0)}}function e1(){const s=[{color:5575728,glow:13378167},{color:3805248,glow:11154363},{color:4461608,glow:14496648},{color:2756688,glow:8926156},{color:4200496,glow:13386905}];for(let t=0;t<_i.length;t++){const e=s[t%s.length],n=_i[t];n.opaque&&(n.opaque.material.color.set(e.color),n.opaque.material.emissive.set(e.glow),n.opaque.material.emissiveIntensity=.3,n.opaque.material.vertexColors=!1,n.opaque.material.needsUpdate=!0),n.glow&&(n.glow.material.onBeforeCompile=()=>{},n.glow.material.color.set(e.glow),n.glow.material.emissive.set(e.glow),n.glow.material.emissiveIntensity=.8,n.glow.material.vertexColors=!1,n.glow.material.needsUpdate=!0)}}function n1(s,t){const e=new ae,n=.4+S()*1.2,i=S()*6.28,o=.8+S()*1.5,r=.5+S()*.8,a=new I(Rn.mushStem,new J({color:F.mushStem,roughness:.7,emissive:F.mushGlow,emissiveIntensity:.1}));a.position.y=.3,e.add(a);const l=new J({color:F.mushStem,emissive:F.mushGlow,emissiveIntensity:.15,roughness:.6}),c=new I(new Te(.09,.012,4,8),l);c.position.y=.42,c.rotation.x=Math.PI/2,e.add(c);const h=new J({color:F.mushCap,emissive:F.mushGlow,emissiveIntensity:r,roughness:.3,transparent:!0,opacity:.9}),u=new I(Rn.mushCap,h);u.scale.set(1,.5,1),u.position.y=.55,u.castShadow=!0,u.receiveShadow=!0,e.add(u);const d=new J({color:6693546,emissive:F.mushGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,side:Dt});for(let v=0;v<8;v++){const R=v/8*6.28,U=new I(new xe(.35,.08),d);U.position.set(Math.cos(R)*.15,.48,Math.sin(R)*.15),U.rotation.y=-R,U.rotation.x=.1,e.add(U)}for(let v=0;v<4;v++){const R=new Y({color:16777215,transparent:!0,opacity:.9}),U=new I(Rn.mushDot,R),L=S()*6.28,z=.15+S()*.25;U.position.set(Math.cos(L)*z,.6+S()*.1,Math.sin(L)*z),e.add(U)}const p=new J({color:15663103,emissive:11197951,emissiveIntensity:.2,transparent:!0,opacity:.6,roughness:0,metalness:.5}),g=2+Math.floor(S()*2);for(let v=0;v<g;v++){const R=new I(new K(.015+S()*.015,4,3),p),U=S()*6.28,L=.1+S()*.2;R.position.set(Math.cos(U)*L,.63+S()*.08,Math.sin(U)*L),e.add(R)}const x=new J({color:4465322,emissive:F.mushGlow,emissiveIntensity:.15,transparent:!0,opacity:.35});for(let v=0;v<4;v++){const R=S()*6.28,U=.15+S()*.25,L=new I(new yt(.004,.002,U,3),x);L.position.set(Math.cos(R)*.12,.01,Math.sin(R)*.12),L.rotation.z=1.3*(R<3.14?1:-1),L.rotation.y=R,e.add(L)}const f=new J({color:F.mushCap,emissive:F.mushGlow,emissiveIntensity:r*.6,transparent:!0,opacity:.4}),m=new I(new Te(.38,.01,4,12),f);m.position.y=.49,m.rotation.x=Math.PI/2,e.add(m);const w=new J({color:F.mushStem,emissive:F.mushGlow,emissiveIntensity:.08,roughness:.7}),_=new I(new K(.08,5,3),w);_.scale.set(1,.5,1),_.position.y=.04,e.add(_);const M=new J({color:1708040,roughness:.95});for(let v=0;v<3;v++){const R=S()*6.28,U=.1+S()*.12,L=new I(new K(.008+S()*.008,3,3),M);L.position.set(Math.cos(R)*U,.005,Math.sin(R)*U),e.add(L)}const A=new Y({color:F.mushGlow,transparent:!0,opacity:.2});for(let v=0;v<4;v++){const R=new I(new K(.006,3,3),A);R.position.set((S()-.5)*.2,.35+S()*.1,(S()-.5)*.2),e.add(R)}const E=new J({color:11167453,emissive:F.mushGlow,emissiveIntensity:r*.3,roughness:.5}),T=3+Math.floor(S()*3);for(let v=0;v<T;v++){const R=S()*6.28,U=S()*.25,L=new I(new K(.015+S()*.015,3,3),E);L.position.set(Math.cos(R)*U,.58+S()*.06,Math.sin(R)*U),e.add(L)}const b=new J({color:657416,transparent:!0,opacity:.2,roughness:.95,side:Dt}),y=new I(new Ze(.18,8),b);return y.rotation.x=-Math.PI/2,y.position.y=.005,e.add(y),e.scale.setScalar(n),e.position.set(s,0,t),ct.add(e),{group:e,capMat:h,phase:i,speed:o,base:r,x:s,z:t}}function i1(s,t){const e=new ae,n=S()*6.28,i=new J({color:F.crystal,emissive:F.crystalCore,emissiveIntensity:1.5,transparent:!0,opacity:.7,roughness:.1,metalness:.5}),o=new I(Rn.crystal,i);o.position.y=.9,o.castShadow=!0,e.add(o);for(let _=0;_<3;_++){const M=new I(Rn.crystalSm,i),A=_/3*6.28+S()*.5;M.position.set(Math.cos(A)*.4,.45,Math.sin(A)*.4),M.rotation.z=(S()-.5)*.8,M.castShadow=!0,e.add(M)}const r=new J({color:1710626,roughness:.9,metalness:.1}),a=3+Math.floor(S()*3);for(let _=0;_<a;_++){const M=S()*6.28,A=.2+S()*.5,E=.08+S()*.12,T=new I(new K(E,4,3),r);T.scale.set(1+S()*.5,.5+S()*.4,1+S()*.5),T.position.set(Math.cos(M)*A,E*.3,Math.sin(M)*A),T.rotation.set(S(),S(),S()),e.add(T)}const l=new Y({color:F.crystalCore,transparent:!0,opacity:.5});for(let _=0;_<3;_++){const M=.4+S()*.8,A=new I(new yt(.008,.008,M,3),l);A.position.set((S()-.5)*.15,.5+S()*.7,(S()-.5)*.15),A.rotation.set((S()-.5)*.8,(S()-.5)*.5,(S()-.5)*.8),e.add(A)}const c=new Y({color:11206638,transparent:!0,opacity:.6});for(let _=0;_<5;_++){const M=new I(new K(.012,3,3),c);M.position.set((S()-.5)*1,.3+S()*1.5,(S()-.5)*1),e.add(M)}const h=new J({color:F.crystal,emissive:F.crystalCore,emissiveIntensity:.8,transparent:!0,opacity:.5});for(let _=0;_<4;_++){const M=S()*6.28,A=.3+S()*.3,E=new I(new yt(0,.015,.12+S()*.1,3),h);E.position.set(Math.cos(M)*A,.06+S()*.1,Math.sin(M)*A),E.rotation.z=(S()-.5)*.6,e.add(E)}const u=new J({color:3364198,emissive:1122867,emissiveIntensity:.05,roughness:.9,side:Dt});for(let _=0;_<2;_++){const M=S()*6.28,A=.2+S()*.3,E=new I(new Ze(.04+S()*.03,5),u);E.rotation.x=-Math.PI/2+S()*.4,E.position.set(Math.cos(M)*A,.05,Math.sin(M)*A),e.add(E)}const d=new Y({color:F.crystalCore,transparent:!0,opacity:.2});for(let _=0;_<2;_++){const M=new I(new yt(.003,.003,.6+S()*.4,3),d);M.position.set((S()-.5)*.3,.7+S()*.5,(S()-.5)*.3),M.rotation.set((S()-.5)*1,S(),(S()-.5)*1),e.add(M)}const p=new J({color:1135940,emissive:1127202,emissiveIntensity:.3,transparent:!0,opacity:.25});for(let _=0;_<4;_++){const M=new I(new K(.02+S()*.02,3,3),p);M.position.set((S()-.5)*.15,.4+S()*.6,(S()-.5)*.15),e.add(M)}const g=new Y({color:11206638,transparent:!0,opacity:.06}),x=new I(new Te(.35,.02,4,10),g);x.position.y=.6,x.rotation.x=Math.PI/2+S()*.3,e.add(x);const f=new Y({color:F.crystal,transparent:!0,opacity:.06,side:Dt}),m=new I(new Ze(.8,8),f);m.rotation.x=-Math.PI/2,m.position.y=.01,e.add(m),e.position.set(s,0,t),ct.add(e);const w=new jo(F.crystal,.5,8);return w.position.set(s,1.2,t),ct.add(w),{group:e,mat:i,phase:n,x:s,z:t,light:w}}const Yn={uTime:{value:0},uWindAmp:{value:1},uWindLeanX:{value:0},uWindLeanZ:{value:0},uPlayerX:{value:0},uPlayerZ:{value:0}};function s1(s,t,e,n,i,o){Yn.uTime.value=s,Yn.uWindAmp.value=t,Yn.uWindLeanX.value=e,Yn.uWindLeanZ.value=n,Yn.uPlayerX.value=i,Yn.uPlayerZ.value=o}function o1(s,t,e,n,i){const o=new Me,r=[],a=[],l=[],c=n||20,h=new st(i?i[0]:663568),u=new st(i?i[1]:1388056),d=new st(i?i[2]:2777141),p=new st(i?i[3]:4517461),g=new st(i?i[4]:7864268),x=new st(i?i[5]:14548838),f=new st;for(let b=0;b<c;b++){const y=S()*6.28,v=S()*e,R=Math.cos(y)*v,U=Math.sin(y)*v,L=.25+S()*.65,z=.03+S()*.05,V=(S()-.5)*.2,k=(S()-.5)*.2,$=(S()-.5)*.12,W=S()<.5?h:u,at=S(),pt=at<.4?p:at<.7?g:x,Rt=L*.35,Ft=L*.7,jt=V*.3,tt=V*.7,lt=k*.3,wt=k*.7;r.push(R-z,.01,U),r.push(R+z,.01,U),r.push(R+jt-z*.9,Rt,U+lt),l.push(0,0,.35),a.push(W.r,W.g,W.b,W.r,W.g,W.b),f.copy(W).lerp(d,.4),a.push(f.r,f.g,f.b),r.push(R+z,.01,U),r.push(R+jt+z*.9,Rt,U+lt),r.push(R+jt-z*.9,Rt,U+lt),l.push(0,.35,.35),a.push(W.r,W.g,W.b),f.copy(W).lerp(d,.4),a.push(f.r,f.g,f.b,f.r,f.g,f.b);const dt=z*.65;r.push(R+jt-z*.9,Rt,U+lt),r.push(R+jt+z*.9,Rt,U+lt),r.push(R+tt-dt,Ft,U+wt+$),l.push(.35,.35,.7),f.copy(W).lerp(d,.4),a.push(f.r,f.g,f.b,f.r,f.g,f.b),f.copy(d).lerp(pt,.3),a.push(f.r,f.g,f.b),r.push(R+jt+z*.9,Rt,U+lt),r.push(R+tt+dt,Ft,U+wt+$),r.push(R+tt-dt,Ft,U+wt+$),l.push(.35,.7,.7),f.copy(W).lerp(d,.4),a.push(f.r,f.g,f.b),f.copy(d).lerp(pt,.3),a.push(f.r,f.g,f.b,f.r,f.g,f.b),r.push(R+tt-dt,Ft,U+wt+$),r.push(R+tt+dt,Ft,U+wt+$),r.push(R+V+$*2,L,U+k+$*1.5),l.push(.7,.7,1),f.copy(d).lerp(pt,.3),a.push(f.r,f.g,f.b,f.r,f.g,f.b),a.push(pt.r,pt.g,pt.b)}const m=new st(i?i[6]:1725736),w=new st(i?i[7]:3385941),_=Math.floor(c*.3);for(let b=0;b<_;b++){const y=S()*6.28,v=S()*e*.9,R=Math.cos(y)*v,U=Math.sin(y)*v,L=.02+S()*.03;r.push(R-L,.01,U),r.push(R+L,.01,U),r.push(R,.03+S()*.02,U+L),l.push(0,0,.05),a.push(m.r,m.g,m.b),a.push(m.r,m.g,m.b),a.push(w.r,w.g,w.b)}o.setAttribute("position",new Gt(r,3)),o.setAttribute("color",new Gt(a,3)),o.setAttribute("bladeHeight",new Gt(l,1)),o.computeVertexNormals();const M=new J({vertexColors:!0,roughness:.7,side:Dt,emissive:i?i[8]:4521830,emissiveIntensity:.08}),A=s,E=t;M.onBeforeCompile=b=>{b.uniforms.uTime=Yn.uTime,b.uniforms.uWindAmp=Yn.uWindAmp,b.uniforms.uWindLeanX=Yn.uWindLeanX,b.uniforms.uWindLeanZ=Yn.uWindLeanZ,b.uniforms.uPlayerX=Yn.uPlayerX,b.uniforms.uPlayerZ=Yn.uPlayerZ,b.uniforms.uPatchX={value:A},b.uniforms.uPatchZ={value:E},b.vertexShader=b.vertexShader.replace("#include <common>",`#include <common>
      attribute float bladeHeight;
      uniform float uTime;
      uniform float uWindAmp;
      uniform float uWindLeanX;
      uniform float uWindLeanZ;
      uniform float uPlayerX;
      uniform float uPlayerZ;
      uniform float uPatchX;
      uniform float uPatchZ;
      `),b.vertexShader=b.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
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
      }
      `)};const T=new I(o,M);return T.position.set(s,0,t),ct.add(T),{mesh:T,geo:o,cx:s,cz:t}}function r1(s,t){const e=new ae,n=new J({color:F.fern,emissive:F.fernGlow,emissiveIntensity:.08,roughness:.7,side:Dt}),i=3+Math.floor(S()*2),o=.5+S()*.7,r=new J({color:1708552,roughness:.95}),a=new I(new K(.06,5,3),r);a.scale.set(1.5,.5,1.5),a.position.y=.02,e.add(a);for(let m=0;m<3;m++){const w=S()*6.28,_=new I(new yt(.003,.002,.08,3),r);_.position.set(Math.cos(w)*.06,.01,Math.sin(w)*.06),_.rotation.z=(w<3.14?1:-1)*1.2,_.rotation.y=w,e.add(_)}for(let m=0;m<i;m++){const w=m/i*6.28+S()*.3,_=new I(new yt(.004,.006,.55,3),new J({color:1721632,roughness:.8}));_.position.set(Math.cos(w)*.15,.25,Math.sin(w)*.15),_.rotation.y=-w,_.rotation.x=-.6-S()*.4,e.add(_);const M=new I(new xe(.12,.6,1,3),n);M.position.set(Math.cos(w)*.15,.25,Math.sin(w)*.15),M.rotation.y=-w,M.rotation.x=-.6-S()*.4,e.add(M);for(let E=0;E<6;E++){const T=new I(new xe(.07,.06,1,1),n),b=.06+E*.08,y=E%2===0?1:-1;T.position.set(Math.cos(w)*(.15+.06),b,Math.sin(w)*(.15+.06*y)),T.rotation.y=-w,T.rotation.x=-.8,T.rotation.z=y*.5,e.add(T)}const A=new J({color:8939042,emissive:4469521,emissiveIntensity:.1});for(let E=0;E<3;E++){const T=new I(new K(.008,3,3),A),b=.12+E*.12;T.position.set(Math.cos(w)*(.15+.02),b-.01,Math.sin(w)*(.15+.02)),e.add(T)}}const l=new J({color:F.fernGlow,emissive:F.fernGlow,emissiveIntensity:.3}),c=new I(new K(.04,4,3),l);c.position.y=.35,e.add(c);const h=new I(new yt(.006,.003,.06,3),l);h.position.set(.02,.37,0),h.rotation.z=-.8,e.add(h);const u=new J({color:15663103,emissive:8960989,emissiveIntensity:.1,transparent:!0,opacity:.5,roughness:0,metalness:.5});for(let m=0;m<3;m++){const w=S()*6.28,_=S()*.2,M=new I(new K(.006+S()*.005,3,3),u);M.position.set(Math.cos(w)*_,.12+S()*.2,Math.sin(w)*_),e.add(M)}const d=new J({color:3811856,roughness:.9,side:Dt,transparent:!0,opacity:.6}),p=new I(new xe(.1,.4,1,2),d),g=S()*6.28;p.position.set(Math.cos(g)*.12,.05,Math.sin(g)*.12),p.rotation.x=-1.3,p.rotation.y=g,e.add(p);const x=new Y({color:2768928,transparent:!0,opacity:.3});for(let m=0;m<4;m++){const w=new I(new yt(.001,.001,.015,3),x);w.position.set((S()-.5)*.08,.08+S()*.15,(S()-.5)*.08),w.rotation.z=(S()-.5)*1.5,e.add(w)}const f=new J({color:1708552,roughness:.95});for(let m=0;m<3;m++){const w=new I(new K(.006,3,3),f);w.position.set((S()-.5)*.1,.005,(S()-.5)*.1),e.add(w)}return e.scale.setScalar(o),e.position.set(s,0,t),ct.add(e),{group:e,phase:S()*6.28}}function a1(s,t){const e=new ae,n=.25+S()*.4,i=new J({color:F.flowerStem,roughness:.8}),o=new I(new yt(.01,.015,n,4),i);o.position.y=n/2,e.add(o);for(let b=0;b<2;b++){const y=new I(new $n(.004,.012,3),i);y.position.set(.012,n*.25+b*n*.25,0),y.rotation.z=-1.2,e.add(y)}const r=new J({color:F.fern,roughness:.7,side:Dt}),a=new I(new xe(.06,.04),r);a.position.set(.03,n*.3,0),a.rotation.z=-.5,e.add(a);const l=new I(new xe(.05,.035),r);l.position.set(-.025,n*.5,.01),l.rotation.z=.6,e.add(l);const c=new J({color:1728560,roughness:.7,side:Dt});for(let b=0;b<5;b++){const y=b/5*6.28+.3,v=new I(new xe(.025,.02),c);v.position.set(Math.cos(y)*.025,n-.005,Math.sin(y)*.025),v.rotation.x=-1.2,v.rotation.y=-y,e.add(v)}const h=new J({color:F.flower,emissive:F.flowerGlow,emissiveIntensity:.4+S()*.4,transparent:!0,opacity:.85,side:Dt});for(let b=0;b<6;b++){const y=b/6*6.28,v=new I(new xe(.05,.04),h);v.position.set(Math.cos(y)*.03,n+.01,Math.sin(y)*.03),v.rotation.x=-.8,v.rotation.y=-y,e.add(v)}const u=new J({color:16777215,emissive:F.flowerGlow,emissiveIntensity:1.2}),d=new I(new K(.02,4,3),u);d.position.y=n+.02,e.add(d);const p=new Y({color:16777130,transparent:!0,opacity:.7}),g=new Y({color:16772676});for(let b=0;b<3;b++){const y=b/3*6.28+.5,v=new I(new yt(.002,.002,.025,3),p);v.position.set(Math.cos(y)*.012,n+.03,Math.sin(y)*.012),e.add(v);const R=new I(new K(.005,3,3),g);R.position.set(Math.cos(y)*.012,n+.045,Math.sin(y)*.012),e.add(R)}const x=new Y({color:16777164,transparent:!0,opacity:.3});for(let b=0;b<2;b++){const y=new I(new K(.006,3,3),x);y.position.set((S()-.5)*.04,n+.06+S()*.04,(S()-.5)*.04),e.add(y)}const f=new J({color:16772778,emissive:16768324,emissiveIntensity:.2,transparent:!0,opacity:.5,roughness:0,metalness:.4}),m=new I(new K(.006,3,3),f);m.position.set(.005,n+.005,.005),e.add(m);const w=new Y({color:15662984}),_=new I(new yt(.002,.002,.03,3),w);_.position.y=n+.035,e.add(_);const M=new I(new K(.005,3,3),w);M.position.y=n+.055,e.add(M);const A=new J({color:1725728,roughness:.7}),E=new I(new yt(.015,.02,.02,5),A);E.position.y=n-.01,e.add(E);const T=new Y({color:16777215,transparent:!0,opacity:.35});for(let b=0;b<4;b++){const y=b/4*6.28+.3,v=new I(new K(.004,3,3),T);v.position.set(Math.cos(y)*.045,n+.005,Math.sin(y)*.045),e.add(v)}return e.position.set(s,0,t),ct.add(e),{group:e,petalMat:h,phase:S()*6.28,baseH:n}}function c1(s,t){const e=new ae,n=new J({color:F.reed,emissive:F.reedTip,emissiveIntensity:.05,roughness:.7}),i=new J({color:F.reedTip,emissive:F.reedTip,emissiveIntensity:.15}),o=new J({color:1709328,roughness:.95}),r=new I(new K(.08,5,3),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=3+Math.floor(S()*4),l=new J({color:F.reed,roughness:.7,side:Dt});for(let p=0;p<a;p++){const g=.6+S()*1,x=(S()-.5)*.2,f=(S()-.5)*.2,m=new I(new yt(.008,.015,g,4),n);m.position.set(x,g/2,f),e.add(m);const w=2+Math.floor(S()*2),_=new J({color:2771488,roughness:.7});for(let E=0;E<w;E++){const T=g*.2+E*g*.25,b=new I(new Te(.012,.004,4,6),_);b.position.set(x,T,f),b.rotation.x=Math.PI/2,e.add(b)}if(S()<.7){const E=.1+S()*.15,T=S()*6.28,b=new I(new xe(.02,E),l);b.position.set(x+Math.cos(T)*.02,g*.4,f+Math.sin(T)*.02),b.rotation.y=-T,b.rotation.x=-.5-S()*.4,e.add(b)}const M=new I(new K(.025,4,3),i);M.scale.set(.8,1.5,.8),M.position.set(x,g+.02,f),e.add(M);const A=new Y({color:F.reedTip,transparent:!0,opacity:.4});for(let E=0;E<3;E++){const T=E/3*6.28+S()*.5,b=new I(new yt(.002,.001,.04,3),A);b.position.set(x+Math.cos(T)*.015,g+.05,f+Math.sin(T)*.015),b.rotation.z=(S()-.5)*.4,e.add(b)}}e.position.set(s,0,t),ct.add(e);const c=new J({color:4864536,roughness:.9,side:Dt,transparent:!0,opacity:.5});for(let p=0;p<2;p++){S()*6.28;const g=(S()-.5)*.15,x=new I(new xe(.025,.02),c);x.position.set(g,.2+p*.25,(S()-.5)*.1),x.rotation.set(S()*.5,S(),S()*.5),e.add(x)}const h=new Y({color:15654348,transparent:!0,opacity:.25});for(let p=0;p<3;p++){const g=new I(new K(.005,3,3),h);g.position.set((S()-.5)*.15,.8+S()*.6,(S()-.5)*.15),e.add(g)}const u=new J({color:2241312,roughness:.9,transparent:!0,opacity:.2}),d=new I(new Te(.1,.008,4,8),u);return d.rotation.x=Math.PI/2,d.position.y=.03,e.add(d),{group:e,phase:S()*6.28,swayAmp:.03+S()*.04}}let mn=null;const Io=[],cn=new de,xc=new st,l0=new st(F.dandSeed);function l1(s){const t=new Y({color:16777215,transparent:!0,opacity:1});mn=new wi(Rn.dandSeed,t,s),mn.instanceMatrix.setUsage(Re),mn.instanceColor=new yi(new Float32Array(s*3),3),mn.instanceColor.setUsage(Re),cn.scale.setScalar(0),cn.updateMatrix();for(let e=0;e<s;e++)mn.setMatrixAt(e,cn.matrix),xc.copy(l0),mn.setColorAt(e,xc),Io.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,drift:0});mn.count=s,mn.frustumCulled=!1,ct.add(mn)}function h0(s,t,e){let n=null;for(let o=0;o<Io.length;o++)if(!Io[o].active){n=Io[o];break}if(!n)return;n.x=s+(Math.random()-.5)*.1,n.y=t,n.z=e+(Math.random()-.5)*.1;const i=Math.random()*6.28;n.vx=Math.cos(i)*.5+Math.random()*.3,n.vy=.6+Math.random()*.8,n.vz=Math.sin(i)*.5,n.life=4+Math.random()*5,n.max=n.life,n.active=!0,n.drift=Math.random()*6.28}let u0=0,f0=0,d0=0;function h1(s,t,e){u0=s,f0=t,d0=e}function u1(s,t){let e=!1;for(let n=0;n<Io.length;n++){const i=Io[n];if(!i.active){cn.position.set(0,-100,0),cn.scale.setScalar(0),cn.updateMatrix(),mn.setMatrixAt(n,cn.matrix);continue}if(i.life-=s,i.life<=0){i.active=!1,cn.position.set(0,-100,0),cn.scale.setScalar(0),cn.updateMatrix(),mn.setMatrixAt(n,cn.matrix);continue}i.drift+=(Math.random()-.5)*1.5*s,i.vx+=Math.sin(i.drift)*.3*s,i.vz+=Math.cos(i.drift)*.2*s,i.vx+=u0*.5*s,i.vz+=f0*.5*s,i.vy+=(.15+d0*.1-i.vy)*s*.5,i.vx*=.998,i.vy*=.998,i.vz*=.998,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s;const r=i.life/i.max*.7*(.6+Math.sin(t*2+n)*.4),a=.8+Math.sin(t*3+n*.5)*.3;cn.position.set(i.x,i.y,i.z),cn.scale.setScalar(a),cn.updateMatrix(),mn.setMatrixAt(n,cn.matrix),xc.copy(l0).multiplyScalar(r),mn.setColorAt(n,xc),e=!0}mn.instanceMatrix.needsUpdate=!0,e&&(mn.instanceColor.needsUpdate=!0)}function f1(s,t){const e=new ae,n=.35+S()*.45,i=new J({color:2777128,roughness:.7,side:Dt}),o=3+Math.floor(S()*2);for(let _=0;_<o;_++){const M=_/o*6.28+S()*.3,A=new I(new xe(.08,.035),i);A.position.set(Math.cos(M)*.05,.02,Math.sin(M)*.05),A.rotation.x=-1.4,A.rotation.y=-M,e.add(A)}const r=new J({color:F.dandStem,roughness:.8}),a=new I(new yt(.008,.012,n,4),r);a.position.y=n/2,e.add(a);const l=new Y({color:14540236,transparent:!0,opacity:.3});for(let _=0;_<4;_++){const M=n*.2+_*n*.18,A=new I(new yt(.002,.001,.02,3),l);A.position.set(.01,M,0),A.rotation.z=-.8,e.add(A)}const c=new J({color:F.fern,roughness:.7,side:Dt}),h=new I(new xe(.07,.03),c);h.position.set(.03,n*.15,0),h.rotation.z=-.4,e.add(h);const u=new J({color:F.dandHead,emissive:F.dandSeedGlow,emissiveIntensity:.2,transparent:!0,opacity:.85}),d=new I(new K(.07,6,5),u);d.position.y=n+.05,e.add(d);const p=new J({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.5,roughness:0,metalness:.5}),g=new I(new K(.012,4,3),p);g.position.set(.04,n+.07,.03),e.add(g);const x=new Y({color:F.dandSeed,transparent:!0,opacity:.7});for(let _=0;_<8;_++){const M=_/8*6.28+S()*.2,A=new I(new $n(.015,.05,3),x);A.position.set(Math.cos(M)*.06,n+.05+S()*.04,Math.sin(M)*.06),A.rotation.x=(S()-.5)*.6,A.rotation.z=(S()-.5)*.6,e.add(A);const E=new Y({color:16777215,transparent:!0,opacity:.3}),T=new I(new yt(.001,.001,.03,3),E);T.position.set(Math.cos(M)*.08,n+.08,Math.sin(M)*.08),T.rotation.set((S()-.5)*.5,0,(S()-.5)*.5),e.add(T);const b=new Y({color:15658717,transparent:!0,opacity:.15});for(let y=0;y<2;y++){const v=M+(y-.5)*.5,R=new I(new yt(8e-4,8e-4,.025,3),b);R.position.set(Math.cos(v)*.075,n+.09,Math.sin(v)*.075),R.rotation.set((S()-.5)*.8,0,(S()-.5)*.8),e.add(R)}}const f=new J({color:3811856,roughness:.9});for(let _=0;_<4;_++){const M=_/4*6.28+S()*.5,A=new I(new K(.005,3,3),f);A.scale.set(.6,1.5,.6),A.position.set(Math.cos(M)*.04,n+.04,Math.sin(M)*.04),e.add(A)}const m=new Y({color:1716240,transparent:!0,opacity:.15});for(let _=0;_<3;_++){const M=_/3*6.28,A=new I(new yt(.001,.001,n*.7,3),m);A.position.set(Math.cos(M)*.01,n*.35,Math.sin(M)*.01),e.add(A)}const w=new Y({color:13426107,transparent:!0,opacity:.2});for(let _=0;_<5;_++){const M=n*.1+S()*n*.7,A=S()*6.28,E=new I(new yt(8e-4,8e-4,.012,3),w);E.position.set(Math.cos(A)*.012,M,Math.sin(A)*.012),E.rotation.z=A<3.14?-.8:.8,E.rotation.y=A,e.add(E)}return e.position.set(s,0,t),ct.add(e),{group:e,headMat:u,x:s,z:t,h:n,dispersed:!1,phase:S()*6.28,seedCount:8,regrowTimer:0}}function d1(s,t,e,n){for(let i=0;i<s.length;i++){const o=s[i];if(o.dispersed){if(o.regrowTimer-=t,o.regrowTimer<=0){o.dispersed=!1;for(let r=2;r<o.group.children.length;r++)o.group.children[r].visible=!0}o.group.rotation.z=Math.sin(e*.9+o.phase)*.02}else{const r=o.x-n.x,a=o.z-n.z;if(r*r+a*a<1.2){o.dispersed=!0;for(let l=0;l<8;l++)h0(o.x,o.h+.05,o.z);for(let l=2;l<o.group.children.length;l++)o.group.children[l].visible=!1;o.regrowTimer=15+Math.random()*10}else o.group.rotation.z=Math.sin(e*.9+o.phase)*.04,o.headMat.emissiveIntensity=.15+Math.sin(e*1.2+o.phase)*.1}}}function p1(s,t){const e=new ae,n=1+S()*.8,i=.25+S()*.15,o=new J({color:F.thornStem,roughness:.8,emissive:662032,emissiveIntensity:.1}),r=new I(new yt(.04,.07,n,5),o);r.position.y=n/2,e.add(r);const a=new J({color:F.thornSpike,roughness:.6}),l=4+Math.floor(S()*3);for(let M=0;M<l;M++){const A=n*.15+M/l*n*.6,E=M/l*6.28+S()*1,T=new I(new $n(.015,.08+S()*.04,3),a);T.position.set(Math.cos(E)*.06,A,Math.sin(E)*.06),T.rotation.z=(E<3.14?1.3:-1.3)+S()*.2,T.rotation.y=E,e.add(T)}const c=new J({color:F.thornOrb,emissive:F.thornOrbGlow,emissiveIntensity:.8,transparent:!0,opacity:.35,roughness:.1,metalness:.3}),h=new I(new K(i,12,10),c);h.position.y=n+i*.5,e.add(h);const u=new J({color:16777164,emissive:F.thornOrbGlow,emissiveIntensity:1.2,transparent:!0,opacity:.6,roughness:0,metalness:.1}),d=new I(new K(i*.35,8,6),u);d.position.y=n+i*.5,e.add(d);const p=new Y({color:F.thornOrbGlow,transparent:!0,opacity:.06,blending:le,depthWrite:!1}),g=new I(new K(i*2,8,6),p);g.position.y=n+i*.5,e.add(g);const x=new J({color:F.thornSpike,emissive:F.thornOrbGlow,emissiveIntensity:.3,roughness:.5}),f=6+Math.floor(S()*3);for(let M=0;M<f;M++){const A=M/f*6.28+S()*.3,E=(S()-.5)*1.2,T=.3+S()*.3,b=new I(new $n(.018,T,4),x);b.position.set(Math.cos(A)*i*.8,n+i*.5+Math.sin(E)*i*.5,Math.sin(A)*i*.8),b.rotation.z=-E+(A<3.14?1.4:-1.4),b.rotation.y=A,e.add(b)}const m=new J({color:F.thornPetal,emissive:3344920,emissiveIntensity:.15,transparent:!0,opacity:.7,roughness:.6,side:Dt}),w=4+Math.floor(S()*2);for(let M=0;M<w;M++){const A=M/w*6.28+S()*.3,E=.2+S()*.15,T=new I(new xe(E,E*1.5),m);T.position.set(Math.cos(A)*(i+.05),n+i*.3-S()*.1,Math.sin(A)*(i+.05)),T.rotation.y=-A,T.rotation.x=-.4-S()*.3,e.add(T)}const _=new J({color:1718296,emissive:662026,emissiveIntensity:.05,side:Dt});for(let M=0;M<2;M++){const A=S()*6.28,E=new I(new xe(.15,.25),_);E.position.set(Math.cos(A)*.12,n*.3,Math.sin(A)*.12),E.rotation.y=-A,E.rotation.x=-.8,e.add(E)}return e.position.set(s,0,t),ct.add(e),{group:e,orbMat:c,hazeMat:p,phase:S()*6.28,x:s,z:t}}function m1(s,t){const e=new ae,n=2+Math.floor(S()*2),i=new J({color:1710128,roughness:.85,emissive:F.helixStem,emissiveIntensity:.1}),o=new I(new K(.18,8,6),i);o.scale.set(1.2,.5,1.2),o.position.y=.05,e.add(o);const r=[];for(let c=0;c<n;c++){const h=1.5+S()*1,u=.15+S()*.15,d=1.5+S()*1.5,p=S()*6.28,g=[],x=16;for(let U=0;U<=x;U++){const L=U/x,z=p+L*d*6.28,V=u*(.3+L*.7);g.push(new N(Math.cos(z)*V,L*h,Math.sin(z)*V))}const f=new Vr(g),m=new J({color:F.helixStem,emissive:F.helixNode,emissiveIntensity:.12,roughness:.7}),w=new I(new Tn(f,20,.025+S()*.01,5,!1),m);e.add(w);const _=.1+S()*.08,A=S()<.5?new ku(_,0):new Gu(_,0),E=new J({color:F.helixPod,emissive:F.helixPodGlow,emissiveIntensity:.5+S()*.3,transparent:!0,opacity:.65,roughness:.2,metalness:.2}),T=new I(A,E),b=f.getPoint(1);T.position.copy(b),T.rotation.set(S()*3,S()*3,S()*3),e.add(T),r.push(E);const y=new I(new K(_*2.5,6,4),new Y({color:F.helixPodGlow,transparent:!0,opacity:.05,blending:le,depthWrite:!1}));y.position.copy(b),e.add(y);const v=1+Math.floor(S()*2);for(let U=0;U<v;U++){const L=.3+S()*.5,z=f.getPoint(L),V=new J({color:F.helixRing,emissive:F.helixPodGlow,emissiveIntensity:.2,transparent:!0,opacity:.45,roughness:.3}),k=new I(new Te(.1+S()*.08,.008,6,12),V);k.position.copy(z),k.rotation.set(S()*3,S()*3,S()*3),e.add(k)}const R=2+Math.floor(S()*2);for(let U=0;U<R;U++){const L=.2+U/R*.6,z=f.getPoint(L),V=new J({color:F.helixNode,emissive:F.helixPodGlow,emissiveIntensity:.35,transparent:!0,opacity:.5}),k=new I(new K(.025+S()*.015,5,4),V);k.position.copy(z),e.add(k)}}const a=new J({color:F.helixStem,emissive:F.helixNode,emissiveIntensity:.06,roughness:.8}),l=2+Math.floor(S()*2);for(let c=0;c<l;c++){const h=c/l*6.28+S()*.5,u=.3+S()*.4,d=new I(new yt(.006,.015,u,3),a);d.position.set(Math.cos(h)*.12,u*.3,Math.sin(h)*.12),d.rotation.z=(h<3.14?.8:-.8)+S()*.3,d.rotation.y=h,e.add(d)}return e.position.set(s,0,t),ct.add(e),{group:e,podMats:r,phase:S()*6.28}}function g1(s,t){const e=new ae,n=.25+S()*.1,i=new J({color:1718309,roughness:.85,emissive:662032,emissiveIntensity:.06});for(let d=0;d<3;d++){const p=d/3*6.28+S()*.5,g=new I(new yt(.01,.035,.25+S()*.15,4),i);g.position.set(Math.cos(p)*n*.6,.06,Math.sin(p)*n*.6),g.rotation.z=p<3.14?1:-1,g.rotation.y=p,e.add(g)}const o=new J({color:F.snapBody,emissive:F.snapBodyGlow,emissiveIntensity:.4,transparent:!0,opacity:.7,roughness:.4,metalness:.1}),r=new I(new K(n,10,8),o);r.position.y=n+.05,r.scale.set(1,.85,1),e.add(r);const a=new J({color:1730116,emissive:F.snapBodyGlow,emissiveIntensity:.25,transparent:!0,opacity:.6}),l=new I(new Te(n*.45,.02,6,12),a);l.position.y=n*1.7,l.rotation.x=Math.PI/2,e.add(l);const c=5+Math.floor(S()*3),h=[],u=[];for(let d=0;d<c;d++){const p=d/c*6.28+S()*.3,g=S()*6.28,x=3+Math.floor(S()*2),f=.2+S()*.1,m=[],w=new de;w.position.set(Math.cos(p)*n*.6,n*1.4,Math.sin(p)*n*.6),w.rotation.y=p,e.add(w);let _=w;for(let T=0;T<x;T++){const b=T/x,y=.02*(1-b*.6),v=new J({color:F.snapFrond,emissive:F.snapBodyGlow,emissiveIntensity:.08+b*.15,roughness:.6}),R=new I(new yt(y*.7,y,f,4),v);R.position.y=T===0?0:f,R.geometry.translate(0,f/2,0),_.add(R),m.push(R),_=R}const M=new J({color:F.snapTip,emissive:F.snapTipGlow,emissiveIntensity:.6,transparent:!0,opacity:.7,roughness:.2}),A=new I(new K(.025+S()*.015,5,4),M);A.position.y=f,_.add(A),u.push(M);const E=new I(new K(.06,4,3),new Y({color:F.snapTipGlow,transparent:!0,opacity:.04,blending:le,depthWrite:!1}));A.add(E),h.push({segments:m,baseAngle:p,phaseOffset:g,segLen:f})}return e.position.set(s,0,t),ct.add(e),{group:e,body:r,bodyMat:o,tipMats:u,fronds:h,phase:S()*6.28,x:s,z:t}}function x1(s,t,e,n){for(let i=0;i<s.length;i++){const o=s[i],r=Math.sin(e*1.5+o.phase)*.08;o.body.scale.set(1+r,.85+r*.5,1+r),o.bodyMat.emissiveIntensity=(.3+Math.sin(e*2+o.phase)*.15)*n;for(let a=0;a<o.fronds.length;a++){const l=o.fronds[a],c=1.2+a%3*.3;for(let h=0;h<l.segments.length;h++){const u=l.segments[h],d=.15+h*.12,p=Math.sin(e*c+l.phaseOffset+h*.5)*d,g=Math.cos(e*c*.7+l.phaseOffset+h*.3)*d*.6;u.rotation.z=p,u.rotation.x=g}}for(let a=0;a<o.tipMats.length;a++){const l=Math.sin(e*2.5+o.phase+a*1.2)*.5+.5;o.tipMats[a].emissiveIntensity=(.4+l*.4)*n}}}function v1(s,t,e){const n=new ae,i=new J({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:.8,transparent:!0,opacity:.5,roughness:.2,metalness:.1,side:Dt}),o=new I(new K(.5,8,6,0,6.28,0,Math.PI/2),i);o.scale.set(1,.6,1),o.position.y=0,n.add(o);const r=new J({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:1,transparent:!0,opacity:.6}),a=new I(new Te(.48,.025,5,12),r);a.rotation.x=Math.PI/2,a.position.y=-.02,n.add(a);const l=new I(new K(.2,6,4),new Y({color:F.jellyGlow,transparent:!0,opacity:.7}));l.position.y=-.05,n.add(l);const c=new Y({color:12312063,transparent:!0,opacity:.3});for(let w=-1;w<=1;w+=2){const _=new I(new K(.06,4,3),c);_.scale.set(.6,1.5,.6),_.position.set(w*.08,-.03,0),n.add(_)}const h=new Y({color:15663103,transparent:!0,opacity:.7});for(let w=0;w<5;w++){const _=S()*6.28,M=S()*.8,A=new I(new K(.02,3,3),h);A.position.set(Math.cos(_)*M*.35,.1-M*.15,Math.sin(_)*M*.35),n.add(A)}const u=new J({color:F.jellyTent,emissive:F.jellyGlow,emissiveIntensity:.4,transparent:!0,opacity:.4}),d=new Y({color:F.jellyGlow,transparent:!0,opacity:.6});for(let w=0;w<6;w++){const _=w/6*6.28,M=.4+S()*.6,A=new I(new yt(.015,.008,M,3),u);A.position.set(Math.cos(_)*.25,-M/2-.05,Math.sin(_)*.25),n.add(A);const E=new I(new K(.012,3,3),d);E.position.set(Math.cos(_)*.25,-M-.06,Math.sin(_)*.25),n.add(E)}const p=new Y({color:F.jellyGlow,transparent:!0,opacity:.12});for(let w=0;w<8;w++){const _=w/8*6.28,M=new I(new yt(.002,.002,.4,3),p);M.position.set(Math.cos(_)*.2,.05,Math.sin(_)*.2),M.rotation.z=Math.PI/2-.3,M.rotation.y=-_,n.add(M)}const g=new J({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:.6,transparent:!0,opacity:.4});for(let w=0;w<10;w++){const _=w/10*6.28,M=new I(new K(.02,3,3),g);M.scale.set(1,.5,.8),M.position.set(Math.cos(_)*.46,-.04,Math.sin(_)*.46),n.add(M)}const x=new J({color:F.jellyTent,emissive:F.jellyGlow,emissiveIntensity:.5,transparent:!0,opacity:.35}),f=new I(new yt(.02,.01,.35,4),x);f.position.y=-.2,n.add(f);const m=new Y({color:14548991,transparent:!0,opacity:.4});for(let w=0;w<3;w++){const _=w/3*6.28,M=new I(new K(.008,3,3),m);M.position.set(Math.cos(_)*.25,-.55-S()*.3,Math.sin(_)*.25),n.add(M)}return n.position.set(s,t,e),ct.add(n),{group:n,bellMat:i,phase:S()*6.28,driftAng:S()*6.28,homeX:s,homeZ:e,floatY:t,wobble:.5+S()*.5,_init:!0,_state:"drift",_stT:20+Math.random()*30,_migrateAng:0,_pulseSync:0}}function _1(s,t){const e=new ae,n=new J({color:F.puffBody,emissive:F.puffGlow,emissiveIntensity:.3,roughness:.8}),i=new I(new K(.3,8,6),n);i.position.y=.35,e.add(i);const o=new J({color:16773344,emissive:F.puffGlow,emissiveIntensity:.15,roughness:.9}),r=new I(new K(.18,6,4),o);r.scale.set(.7,.9,.3),r.position.set(0,.32,.2),e.add(r);const a=new I(new K(.22,7,5),n);a.position.y=.65,e.add(a);const l=[];for(let A=-1;A<=1;A+=2){const E=new I(new $n(.06,.15,4),n);E.position.set(A*.13,.85,0),E.rotation.z=A*.3,e.add(E),l.push({mesh:E,side:A,baseRotZ:A*.3});const T=new I(new $n(.03,.08,4),new J({color:F.puffCheek,emissive:F.puffCheek,emissiveIntensity:.2}));T.position.set(A*.13,.84,.01),T.rotation.z=A*.3,e.add(T),l.push({mesh:T,side:A,baseRotZ:A*.3})}const c=new Y({color:F.puffEye}),h=[];for(let A=-1;A<=1;A+=2){const E=new I(new K(.035,4,4),c);E.position.set(A*.09,.68,.18),e.add(E),h.push(E);const T=new Y({color:16777215}),b=new I(new K(.012,3,3),T);b.position.set(A*.09+A*.015,.695,.2),e.add(b),h.push(b)}const u=new Y({color:4469555}),d=new I(new K(.015,3,3),u);d.position.set(0,.63,.22),e.add(d);const p=new J({color:F.puffCheek,emissive:F.puffCheek,emissiveIntensity:.3});for(let A=-1;A<=1;A+=2){const E=new I(new K(.04,4,3),p);E.position.set(A*.15,.61,.15),e.add(E)}const g=new Y({color:15654348,transparent:!0,opacity:.5});for(let A=-1;A<=1;A+=2)for(let E=0;E<2;E++){const T=new I(new yt(.002,.002,.06,3),g);T.position.set(A*.12,.62-E*.03,.2),T.rotation.z=A*.7+E*A*.2,T.rotation.x=-.1,e.add(T)}for(let A=-1;A<=1;A+=2){const E=new I(new K(.07,4,3),n);E.position.set(A*.12,.07,.05),E.scale.set(1,.5,1.3),e.add(E);const T=new J({color:16755370,emissive:16746632,emissiveIntensity:.1});for(let b=0;b<3;b++){const y=b/3*6.28,v=new I(new K(.012,3,3),T);v.position.set(A*.12+Math.cos(y)*.03,.03,.05+Math.sin(y)*.03),e.add(v)}}const x=new J({color:16777215,emissive:F.puffGlow,emissiveIntensity:.4,roughness:.9}),f=new I(new K(.06,5,4),x);f.position.set(0,.38,-.28),e.add(f);const m=new J({color:F.puffBody,emissive:F.puffGlow,emissiveIntensity:.2,roughness:1});for(let A=0;A<6;A++){const E=S()*6.28,T=S()*1.2,b=new I(new K(.01,3,3),m);b.position.set(Math.cos(E)*.28,.25+T*.2,Math.sin(E)*.28),e.add(b)}const w=new Y({color:F.puffBody});for(let A=-1;A<=1;A+=2){const E=new I(new yt(.003,.003,.04,3),w);E.position.set(A*.09,.72,.17),E.rotation.z=A*.3,e.add(E)}const _=new Y({color:5583684,transparent:!0,opacity:.5}),M=new I(new yt(.002,.002,.03,3),_);return M.position.set(0,.59,.22),M.rotation.z=Math.PI/2,e.add(M),e.position.set(s,0,t),ct.add(e),{group:e,ears:l,eyes:h,tail:f,phase:S()*6.28,wanderAng:S()*6.28,speed:.6+S()*.8,hopTimer:0,hopPhase:S()*6.28,homeX:s,homeZ:t,state:"idle",idleTimer:S()*3,_init:!0,_followT:0,_scaredT:0,_huddleTarget:-1,_baseY:0,_lastTX:s,_lastTZ:t,_blinkTimer:2+Math.random()*4,_blinkState:0}}function M1(s,t){const e=new ae,n=new J({color:F.deerBody,emissive:F.deerGlow,emissiveIntensity:.5,transparent:!0,opacity:.7,roughness:.3}),i=new I(new K(.4,7,5),n);i.scale.set(1,.8,1.5),i.position.y=.9,e.add(i);const o=new J({color:13431039,emissive:F.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.5}),r=new I(new K(.15,5,4),o);r.scale.set(.8,.6,.5),r.position.set(0,.78,.25),e.add(r);const a=new ae;a.position.set(0,1.15,.3);const l=new I(new yt(.08,.12,.4,5),n);l.position.set(0,.1,.08),l.rotation.x=-.4,a.add(l);const c=new I(new K(.14,6,5),n);c.position.set(0,.22,.2),a.add(c);const h=new I(new K(.07,4,3),n);h.scale.set(1,.7,1.4),h.position.set(0,.17,.35),a.add(h);const u=new Y({color:2245717}),d=new I(new K(.02,3,3),u);d.position.set(0,.17,.43),a.add(d);const p=new Y({color:F.deerEye});for(let v=-1;v<=1;v+=2){const R=new I(new K(.025,4,3),p);R.position.set(v*.09,.25,.28),a.add(R);const U=new I(new K(.008,3,3),new Y({color:16777215}));U.position.set(v*.085,.26,.29),a.add(U);const L=new Y({color:F.deerBody,transparent:!0,opacity:.5}),z=new I(new yt(.002,.002,.03,3),L);z.position.set(v*.1,.27,.28),z.rotation.z=v*.6,a.add(z)}for(let v=-1;v<=1;v+=2){const R=new I(new $n(.04,.14,4),n);R.position.set(v*.1,.37,.15),R.rotation.z=v*.4,a.add(R)}const g=new J({color:F.deerAntler,emissive:F.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.8});for(let v=-1;v<=1;v+=2){const R=new I(new yt(.015,.02,.25,3),g);R.position.set(v*.08,.42,.12),R.rotation.z=v*.5,a.add(R);const U=new I(new yt(.01,.015,.15,3),g);U.position.set(v*.15,.55,.1),U.rotation.z=v*.8,a.add(U);const L=new I(new yt(.008,.012,.1,3),g);L.position.set(v*.11,.5,.16),L.rotation.z=v*.3,L.rotation.x=-.5,a.add(L);const z=new I(new K(.012,3,3),new Y({color:F.deerGlow,transparent:!0,opacity:.8}));z.position.set(v*.18,.61,.09),a.add(z)}const x=new J({color:F.deerBody,emissive:F.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),f=new I(new yt(.01,.02,.1,3),x);f.position.set(0,.11,.28),f.rotation.x=.3,a.add(f);const m=new Y({color:1122850});for(let v=-1;v<=1;v+=2){const R=new I(new K(.006,3,3),m);R.position.set(v*.02,.16,.42),a.add(R)}e.add(a);const w=[{x:-.15,z:.3,label:"FL"},{x:.15,z:.3,label:"FR"},{x:-.15,z:-.3,label:"BL"},{x:.15,z:-.3,label:"BR"}],_=new J({color:6715272,emissive:F.deerGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),M=[];for(let v=0;v<4;v++){const R=w[v],U=new ae;U.position.set(R.x,.65,R.z);const L=new I(new yt(.025,.035,.35,4),n);L.position.y=-.175,U.add(L);const z=new ae;z.position.set(0,-.35,0);const V=new I(new yt(.02,.03,.3,4),n);V.position.y=-.15,z.add(V);const k=new I(new yt(.04,.032,.04,4),_);k.position.y=-.3,z.add(k);const $=new J({color:14544639,emissive:F.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),W=new I(new K(.025,3,3),$);W.scale.set(1.3,.5,1.3),W.position.y=-.25,z.add(W),U.add(z),e.add(U),M.push({upper:U,lower:z,isFront:v<2,side:R.x<0?-1:1})}const A=new ae;A.position.set(0,1.1,-.55);const E=new I(new $n(.05,.15,4),new J({color:16777215,emissive:F.deerGlow,emissiveIntensity:1,transparent:!0,opacity:.8}));A.add(E),e.add(A);const T=new Y({color:13434862,transparent:!0,opacity:.3});for(let v=0;v<4;v++){const R=new I(new K(.02,3,3),T);R.position.set((S()-.5)*.25,.8+S()*.3,(S()-.5)*.4),e.add(R)}const b=new Y({color:F.deerBody,transparent:!0,opacity:.15});for(let v=0;v<3;v++){const R=new I(new yt(.002,.002,.2,3),b);R.position.set(.3,.85-v*.06,0),R.rotation.z=Math.PI/2+.3,e.add(R)}const y=new J({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.4,roughness:0,metalness:.5});for(let v=0;v<3;v++){const R=new I(new K(.008,3,3),y);R.position.set((S()-.5)*.3,.9+S()*.3,(S()-.5)*.35),e.add(R)}return e.position.set(s,0,t),ct.add(e),{group:e,mat:n,phase:S()*6.28,wanderAng:S()*6.28,speed:.6+S()*.4,walkTimer:0,legCycle:0,homeX:s,homeZ:t,state:"walk",pauseTimer:0,neckPivot:a,legPivots:M,tailPivot:A,fleeTimer:0,headLook:0,headBob:0,_init:!0,_stT:0,_drinkTgt:null,_zigTimer:0,_zigDir:1,_baseY:0,_lastTX:s,_lastTZ:t}}function y1(s,t,e){const n=new ae,i=new J({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.3,roughness:.7}),o=new I(new yt(.04,.05,.3,5),i);o.rotation.x=Math.PI/2,n.add(o);const r=new J({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.5,roughness:.6});for(let f=0;f<3;f++){const m=new I(new Te(.045,.006,4,8),r);m.position.z=-.05+f*.06,m.rotation.x=0,n.add(m)}const a=new I(new K(.05,5,4),i);a.position.z=.18,n.add(a);const l=new J({color:1122867,roughness:.2,metalness:.4});for(let f=-1;f<=1;f+=2){const m=new I(new K(.018,4,3),l);m.position.set(f*.03,.01,.21),n.add(m)}for(let f=-1;f<=1;f+=2){const m=new I(new yt(.005,.005,.15,3),i);m.position.set(f*.03,.03,.22),m.rotation.x=-.6,m.rotation.z=f*.4,n.add(m);const w=new Y({color:F.mothGlow,transparent:!0,opacity:.7}),_=new I(new K(.015,3,3),w);_.scale.set(2,.5,1),_.position.set(f*.05,.12,.28),n.add(_)}const c=new J({color:F.mothWing,emissive:F.mothGlow,emissiveIntensity:.8,transparent:!0,opacity:.6,side:Dt,roughness:.4});n._wingPivots=[];for(let f=-1;f<=1;f+=2){const m=new ae;m.position.set(f*.04,0,.02);const w=new I(new K(.2,6,4),c);w.scale.set(1.8,.08,1.2),w.position.set(f*.18,0,.02),m.add(w);const _=new I(new K(.12,5,3),c);_.scale.set(1.5,.06,1),_.position.set(f*.12,0,-.1),m.add(_);const M=new J({color:F.mothWing,emissive:F.mothGlow,emissiveIntensity:.6,transparent:!0,opacity:.45,side:Dt}),A=new I(new xe(.03,.12),M);A.position.set(f*.1,0,-.18),A.rotation.y=f*.2,m.add(A);const E=new Y({color:F.mothSpot,transparent:!0,opacity:.9}),T=new I(new K(.03,4,3),E);T.position.set(f*.2,.02,.03),m.add(T);const b=new I(new K(.018,3,3),E);b.position.set(f*.1,.02,-.08),m.add(b);const y=new Y({color:F.mothGlow,transparent:!0,opacity:.25});for(let v=0;v<2;v++){const R=new I(new yt(.002,.002,.2,3),y);R.position.set(f*.15,.01,-.02+v*.06),R.rotation.z=Math.PI/2+f*(.15+v*.15),m.add(R)}n.add(m),n._wingPivots.push({pivot:m,side:f})}const h=new Y({color:F.mothGlow,transparent:!0,opacity:.25});for(let f=0;f<3;f++){const m=new I(new K(.008,3,3),h);m.position.set((S()-.5)*.04,0,-.15-f*.05),n.add(m)}const u=new Y({color:4473907,transparent:!0,opacity:.5}),d=new I(new Te(.015,.003,4,8,Math.PI*1.5),u);d.position.set(0,-.02,.2),d.rotation.x=.4,n.add(d);const p=new J({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.4,roughness:1});for(let f=0;f<5;f++){const m=S()*6.28,w=new I(new K(.008,3,3),p);w.position.set(Math.cos(m)*.04,Math.sin(m)*.04,S()*.15-.05),n.add(w)}const g=new Y({color:F.mothBody,transparent:!0,opacity:.4});for(let f=-1;f<=1;f+=2)for(let m=0;m<3;m++){const w=new I(new yt(.002,.002,.06,3),g);w.position.set(f*.04,-.03,-.05+m*.06),w.rotation.z=f*.8,w.rotation.x=-.3,n.add(w)}const x=new Y({color:F.mothGlow,transparent:!0,opacity:.35});for(let f=-1;f<=1;f+=2)for(let m=0;m<5;m++){const w=m/5*Math.PI-Math.PI/2,_=new I(new K(.006,3,3),x);_.position.set(f*(.3+Math.cos(w)*.05),Math.sin(w)*.02,.02+m*.04),n.add(_)}return n.position.set(s,t,e),ct.add(n),{group:n,wingMat:c,phase:S()*6.28,orbitAng:S()*6.28,orbitR:2+S()*4,centerX:s,centerZ:e,floatY:t,flapSpeed:6+S()*4,_init:!0,_state:"patrol",_stT:0,_attractTarget:null,_restTree:null}}function w1(s,t,e){const n=new ae,i=new Y({color:F.wispCore}),o=new I(new K(.08,6,4),i);n.add(o);const r=new Y({color:16777215,transparent:!0,opacity:.7,wireframe:!0}),a=new I(new Wo(.06,0),r);n.add(a);const l=new Y({color:F.wispGlow,transparent:!0,opacity:.5}),c=new I(new K(.18,6,4),l);n.add(c);const h=new Y({color:F.wispGlow,transparent:!0,opacity:.25}),u=new I(new Te(.22,.008,4,12),h);u.rotation.x=Math.PI/2,n.add(u);const d=new Y({color:F.wispTrail,transparent:!0,opacity:.15}),p=new I(new K(.35,5,4),d);n.add(p);const g=new Y({color:16777215,transparent:!0,opacity:.8}),x=new I(new K(.02,3,3),g);x.position.set(.15,0,0),n.add(x);const f=[];for(let T=0;T<3;T++){const b=new Y({color:F.wispCore,transparent:!0,opacity:.35}),y=new I(new K(.01,3,3),b);y.position.set((S()-.5)*.1,-.1-T*.08,(S()-.5)*.1),n.add(y),f.push(y)}const m=new Y({color:F.wispGlow,transparent:!0,opacity:.18}),w=[];for(let T=0;T<3;T++){const b=T/3*6.28+S()*.5,y=.15+S()*.1,v=new I(new yt(.003,.001,y,3),m);v.position.set(Math.cos(b)*.1,S()*.08,Math.sin(b)*.1),v.rotation.z=Math.PI/3*(b<3.14?1:-1),v.rotation.y=b,n.add(v),w.push({mesh:v,baseAng:b})}const _=new Y({color:F.wispGlow,transparent:!0,opacity:.12}),M=new I(new Te(.26,.005,4,10),_);M.rotation.x=1.2,M.rotation.z=.8,n.add(M);const A=new Y({color:16777215,transparent:!0,opacity:.5});for(let T=0;T<4;T++){const b=S()*6.28,y=S()*.8,v=new I(new K(.006,3,3),A);v.position.set(Math.cos(b)*.06,Math.sin(y)*.06,Math.sin(b)*.06),n.add(v)}const E=new Y({color:F.wispCore,transparent:!0,opacity:.2});for(let T=0;T<4;T++){const b=new I(new K(.004,3,3),E);b.position.set(.03+S()*.04,-.05-T*.04,S()*.04),n.add(b)}return n.scale.setScalar(.5),n.position.set(s,t,e),ct.add(n),{group:n,glowMat:l,hazeMat:d,embers:f,tendrils:w,plasmaMat:m,facet:a,halo:u,halo2:M,phase:S()*6.28,targetX:s,targetY:t,targetZ:e,velX:0,velY:0,velZ:0,scatter:0}}function S1(s,t){const e=new ae,n=kh,i=8+Math.floor(S()*5),o=new J({color:F.fairyMush,emissive:F.fairyGlow,emissiveIntensity:.2,roughness:.5}),r=new J({color:F.mushStem,roughness:.7,emissive:F.fairyGlow,emissiveIntensity:.05});for(let A=0;A<i;A++){const E=A/i*6.28+S()*.15,T=n+S()*.3-.15,b=.15+S()*.2,y=new I(Rn.mushStem,r);y.scale.setScalar(b),y.position.set(Math.cos(E)*T,b*.3,Math.sin(E)*T),e.add(y);const v=new I(Rn.mushCap,o);v.scale.set(b,b*.4,b),v.position.set(Math.cos(E)*T,b*.55,Math.sin(E)*T),e.add(v);const R=new Y({color:16777215,transparent:!0,opacity:.7}),U=new I(new K(b*.08,3,3),R);U.position.set(Math.cos(E)*T,b*.6,Math.sin(E)*T),e.add(U)}const a=new J({color:8934792,emissive:F.fairyGlow,emissiveIntensity:.1,roughness:.6});for(let A=0;A<5;A++){const E=S()*6.28,T=n+S()*.6-.3,b=.06+S()*.06,y=new I(Rn.mushCap,a);y.scale.set(b,b*.5,b),y.position.set(Math.cos(E)*T,b*.35,Math.sin(E)*T),e.add(y)}const l=new J({color:1725733,emissive:664080,emissiveIntensity:.05,roughness:.9});for(let A=0;A<4;A++){const E=S()*6.28,T=S()*n*.8,b=new I(new K(.08+S()*.08,4,3),l);b.scale.set(1.5,.2,1.5),b.position.set(Math.cos(E)*T,.01,Math.sin(E)*T),e.add(b)}const c=new J({color:4478310,emissive:F.fairyGlow,emissiveIntensity:.05,roughness:.85}),h=new I(new K(.12,5,3),c);h.scale.set(1.2,.3,1),h.position.y=.03,e.add(h);const u=new Y({color:F.fairyGlow,transparent:!0,opacity:.2}),d=[];for(let A=0;A<8;A++){const E=new I(new K(.012,3,3),u),T=(S()-.5)*n*.8,b=(S()-.5)*n*.8;E.position.set(T,.05+S()*.3,b),e.add(E),d.push({mesh:E,baseX:T,baseZ:b,drift:S()*6.28,speed:.2+S()*.3})}const p=new Y({color:F.fairyRing,transparent:!0,opacity:0,side:Dt}),g=new I(new Xo(.3,n-.3,16),p);g.rotation.x=-Math.PI/2,g.position.y=.02,e.add(g);const x=new Y({color:F.fairyGlow,transparent:!0,opacity:.08});for(let A=0;A<6;A++){const E=S()*6.28,T=E+.5+S()*1.5,b=n*.6+S()*n*.4,y=new I(new yt(.002,.002,b,3),x);y.position.set(Math.cos((E+T)/2)*n*.4,.005,Math.sin((E+T)/2)*n*.4),y.rotation.x=Math.PI/2,y.rotation.z=E,e.add(y)}const f=new J({color:4864560,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<3;A++){const E=S()*6.28,T=S()*n*.7,b=new I(new K(.03,4,3),f);b.scale.set(1.3,.3,1.3),b.position.set(Math.cos(E)*T,.008,Math.sin(E)*T),e.add(b)}const m=new J({color:7833702,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<2;A++){const E=new I(new Ze(.02+S()*.02,4),m);E.position.set((S()-.5)*.08,.06,(S()-.5)*.06),E.rotation.x=-Math.PI/2+S()*.4,e.add(E)}const w=[];for(let A=0;A<5;A++){const E=S()*6.28,T=S()*n*.9,b=new Y({color:8978346,transparent:!0,opacity:.25}),y=new I(new K(.005,3,3),b);y.position.set(Math.cos(E)*T,.01,Math.sin(E)*T),e.add(y),w.push(y)}const _=new Y({color:657926,transparent:!0,opacity:.15,side:Dt}),M=new I(new Xo(n*.5,n*.85,12),_);return M.rotation.x=-Math.PI/2,M.position.y=.008,e.add(M),e.position.set(s,0,t),ct.add(e),{group:e,mushMat:o,discMat:p,sporeMat:u,spores:d,glowWorms:w,x:s,z:t,ringR:n,phase:S()*6.28,glowIntensity:0,active:!1}}function b1(s,t,e){const n=new ae,i=new J({color:F.bubbleIris,emissive:F.bubbleIris,emissiveIntensity:.15,transparent:!0,opacity:.25,roughness:0,metalness:.6}),o=new I(Rn.bubble,i);n.add(o);const r=new Y({color:15650047,transparent:!0,opacity:.1}),a=new I(new Te(.13,.003,4,10),r);a.rotation.x=.5,a.rotation.y=S()*3,n.add(a);const l=new I(new Te(.11,.003,4,10),r);l.rotation.x=-.8,l.rotation.z=1.2,n.add(l);const c=new Y({color:F.bubbleShine,transparent:!0,opacity:.5}),h=new I(new K(.04,4,3),c);h.position.set(.05,.07,.08),n.add(h);const u=new Y({color:15658751,transparent:!0,opacity:.2}),d=new I(new K(.025,3,3),u);d.position.set(-.06,-.04,-.06),n.add(d);const p=new Y({color:16755438,transparent:!0,opacity:.12}),g=new I(new K(.06,4,3),p);g.position.set(.02,-.02,.01),n.add(g);const x=new Y({color:16772863,transparent:!0,opacity:.08}),f=new I(new K(.12,5,4),x);n.add(f);const m=[16764125,13426175,14548940];for(let b=0;b<3;b++){const y=new Y({color:m[b],transparent:!0,opacity:.06}),v=new I(new Te(.14-b*.02,.002,4,8),y);v.position.y=-.04+b*.04,v.rotation.x=Math.PI/2,n.add(v)}const w=new Y({color:16777215,transparent:!0,opacity:.6});for(let b=0;b<3;b++){const y=S()*6.28,v=S()*Math.PI-Math.PI/2,R=new I(new K(.003,3,3),w);R.position.set(Math.cos(y)*Math.cos(v)*.14,Math.sin(v)*.14,Math.sin(y)*Math.cos(v)*.14),n.add(R)}const _=new Y({color:11189196,transparent:!0,opacity:.1}),M=new I(new K(.015,3,3),_);M.position.set((S()-.5)*.04,(S()-.5)*.04,(S()-.5)*.04),n.add(M);const A=new Y({color:F.bubbleIris,transparent:!0,opacity:.15}),E=new I(new K(.04,4,3),A);E.scale.set(1.3,.6,1.3),E.position.y=-.12,n.add(E);const T=.6+S()*.8;return n.scale.setScalar(T),n.position.set(s,t,e),ct.add(n),{group:n,shellMat:i,phase:S()*6.28,driftAng:S()*6.28,driftSpeed:.3+S()*.5,floatY:t,homeX:s,homeZ:e,bobAmp:.3+S()*.4,popped:!1,popTimer:0,sc:T}}function T1(s,t){const e=new ae,n=1.5+S()*1,i=new J({color:329746,roughness:.9}),o=new I(new Ze(n*.85,10),i);o.rotation.x=-Math.PI/2,o.position.y=.005,e.add(o);const r=new J({color:F.pondWater,emissive:F.pondGlow,emissiveIntensity:.2,transparent:!0,opacity:.55,roughness:.05,metalness:.4}),a=new I(new Ze(n,12),r);a.rotation.x=-Math.PI/2,a.position.y=.03,e.add(a);const l=new J({color:3816002,roughness:.85}),c=5+Math.floor(S()*4);for(let L=0;L<c;L++){const z=L/c*6.28+S()*.3,V=n+S()*.2-.1,k=.06+S()*.08,$=new I(new K(k,4,3),l);$.scale.set(1+S()*.5,.4+S()*.3,1+S()*.5),$.position.set(Math.cos(z)*V,k*.2,Math.sin(z)*V),$.rotation.set(S(),S(),S()),e.add($)}const h=new J({color:1725728,roughness:.7,side:Dt});for(let L=0;L<3;L++){const z=S()*6.28,V=n*.85+S()*.2;for(let k=0;k<3;k++){const $=new I(new xe(.015,.15+S()*.1),h);$.position.set(Math.cos(z)*V+(S()-.5)*.05,.08,Math.sin(z)*V+(S()-.5)*.05),$.rotation.y=S()*3,$.rotation.x=-.2,e.add($)}}const u=new Y({color:11197934,transparent:!0,opacity:.08}),d=[];for(let L=0;L<3;L++){const z=new I(new Te(1,.004,4,20),u.clone());z.rotation.x=Math.PI/2,z.position.y=.036,e.add(z),d.push({mesh:z,phase:L/3})}const p=new J({color:F.lilyPad,roughness:.6,side:Dt}),g=4+Math.floor(S()*2),x=[];for(let L=0;L<g;L++){const z=S()*6.28,V=S()*n*.6,k=.15+S()*.15,$=new I(new Ze(k,8),p);$.rotation.x=-Math.PI/2,$.position.set(Math.cos(z)*V,.05,Math.sin(z)*V),e.add($);const W=new Y({color:1724448,transparent:!0,opacity:.3}),at=new I(new yt(.002,.002,k*1.5,3),W);at.position.set(Math.cos(z)*V,.052,Math.sin(z)*V),at.rotation.x=Math.PI/2,at.rotation.z=S()*3,e.add(at),x.push({mesh:$,phase:S()*6.28})}const f=new J({color:F.lilyFlower,emissive:F.lilyGlow,emissiveIntensity:.4,transparent:!0,opacity:.85,side:Dt}),m=.08;for(let L=0;L<6;L++){const z=L/6*6.28,V=new I(new xe(.06,.05),f);V.position.set(x[0].mesh.position.x+Math.cos(z)*.05,m,x[0].mesh.position.z+Math.sin(z)*.05),V.rotation.x=-1,V.rotation.y=-z,e.add(V)}const w=new J({color:16777130,emissive:F.lilyGlow,emissiveIntensity:.8}),_=new I(new K(.025,4,3),w);if(_.position.set(x[0].mesh.position.x,m+.02,x[0].mesh.position.z),e.add(_),x.length>2){const L=new J({color:F.lilyFlower,emissive:F.lilyGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),z=new I(new K(.03,5,4),L);z.scale.set(.8,1.2,.8),z.position.set(x[2].mesh.position.x,.09,x[2].mesh.position.z),e.add(z)}const M=new J({color:3815477,roughness:.8,transparent:!0,opacity:.5});for(let L=0;L<5;L++){const z=S()*6.28,V=S()*n*.7,k=new I(new K(.02+S()*.025,4,3),M);k.scale.set(1+S()*.5,.4,1+S()*.5),k.position.set(Math.cos(z)*V,.015,Math.sin(z)*V),e.add(k)}const A=new Y({color:2761752,transparent:!0,opacity:.12,side:Dt});for(let L=0;L<3;L++){const z=S()*6.28,V=S()*n*.5,k=new I(new Ze(.08+S()*.06,5),A);k.rotation.x=-Math.PI/2,k.position.set(Math.cos(z)*V,.012,Math.sin(z)*V),e.add(k)}const E=new J({color:1122837,roughness:.7,transparent:!0,opacity:.4}),T=[];for(let L=0;L<2;L++){const z=S()*6.28,V=S()*n*.4,k=new I(new K(.012,4,3),E);k.scale.set(.8,.5,1.3),k.position.set(Math.cos(z)*V,.04,Math.sin(z)*V),e.add(k);const $=new I(new yt(.002,.001,.025,3),E);$.position.set(Math.cos(z)*V-Math.cos(z)*.02,.04,Math.sin(z)*V-Math.sin(z)*.02),$.rotation.z=Math.PI/2,$.rotation.y=z,e.add($),T.push({body:k,tail:$,ang:z,orbR:.15+S()*n*.35,speed:.3+S()*.4})}const b=new Y({color:2250016,transparent:!0,opacity:.1,side:Dt});for(let L=0;L<3;L++){const z=S()*6.28,V=n*.7+S()*n*.25,k=new I(new Ze(.06+S()*.04,5),b);k.rotation.x=-Math.PI/2,k.position.set(Math.cos(z)*V,.032,Math.sin(z)*V),e.add(k)}const y=new Y({color:13426158,transparent:!0,opacity:.06}),v=new I(new Te(n-.05,.01,4,16),y);v.rotation.x=Math.PI/2,v.position.y=.035,e.add(v);const R=new J({color:4861976,roughness:.8,side:Dt,transparent:!0,opacity:.6}),U=new I(new Ze(.03,5),R);return U.rotation.x=-Math.PI/2,U.position.set((S()-.5)*n*.5,.04,(S()-.5)*n*.5),e.add(U),e.position.set(s,0,t),ct.add(e),{group:e,waterMat:r,flMat:f,pads:x,ripples:d,tadpoles:T,x:s,z:t,phase:S()*6.28,pondR:n}}function E1(s,t){const e=new ae,n=new Y({color:F.orbGold}),i=new I(new K(.2,10,8),n);e.add(i);const o=new Y({color:16777215}),r=new I(new K(.06,6,4),o);e.add(r);const a=new Y({color:16772744,transparent:!0,opacity:.4,wireframe:!0}),l=new I(new Wo(.15,0),a);e.add(l);const c=new Y({color:F.orbGlow,transparent:!0,opacity:.5}),h=new I(new K(.35,8,6),c);e.add(h);const u=new Y({color:F.orbGlow,transparent:!0,opacity:.3});for(let T=0;T<8;T++){const b=T/8*6.28,y=new I(new $n(.02,.25,3),u);y.position.set(Math.cos(b)*.3,Math.sin(b*2)*.05,Math.sin(b)*.3),y.rotation.z=-b+Math.PI/2,y.rotation.y=b,e.add(y)}const d=new Y({color:F.orbInner,transparent:!0,opacity:.15}),p=new I(new K(.6,8,5),d);e.add(p);for(let T=0;T<6;T++){const b=new I(new K(.03,4,3),new Y({color:16777215})),y=T/6*6.28;b.position.set(Math.cos(y)*.4,Math.sin(y*2)*.1,Math.sin(y)*.4),e.add(b)}const g=new Y({color:F.orbGold,transparent:!0,opacity:.7});for(let T=0;T<4;T++){const b=T/4*6.28+.4,y=new I(new K(.015,3,3),g);y.position.set(Math.cos(b)*.5,0,Math.sin(b)*.5),e.add(y)}const x=new Y({color:16768426,transparent:!0,opacity:.12});for(let T=0;T<3;T++){const b=new I(new Te(.28,.003,4,12),x);b.rotation.set(T*1.05,T*.7,0),e.add(b)}const f=new Y({color:F.orbGlow,transparent:!0,opacity:.08}),m=new I(new Te(.4,.004,4,16),f);m.rotation.x=Math.PI/2,e.add(m);const w=new Y({color:16772812,transparent:!0,opacity:.15}),_=new I(new Te(.25,.012,4,10),w);_.rotation.x=Math.PI/2,e.add(_);const M=new Y({color:16777215,transparent:!0,opacity:.5});for(let T=0;T<6;T++){const b=S()*6.28,y=S()*Math.PI-Math.PI/2,v=new I(new K(.008,3,3),M);v.position.set(Math.cos(b)*Math.cos(y)*.2,Math.sin(y)*.2,Math.sin(b)*Math.cos(y)*.2),e.add(v)}const A=new Y({color:F.orbGlow,transparent:!0,opacity:.1,side:Dt}),E=new I(new Ze(.5,8),A);return E.rotation.x=-Math.PI/2,E.position.y=-.95,e.add(E),e.position.set(s,1,t),ct.add(e),{group:e,coreMat:n,glowMat:c,hazeMat:d,x:s,z:t,found:!1,flyUp:!1,flyY:1,phase:S()*6.28,laserLine:null,laserMat:null}}function A1(s,t){const e=new ae,n=new J({color:F.rockBase,roughness:.85,metalness:.05}),i=new J({color:F.rockLight,roughness:.8,metalness:.05}),o=new J({color:F.rockMoss,emissive:F.rockMoss,emissiveIntensity:.03,roughness:.9}),r=.3+S()*.5,a=new I(new K(r,8,6),S()<.6?n:i),l=.4+S()*.4;a.scale.set(1+S()*.6,l,1+S()*.6),a.position.y=r*l*.35,a.rotation.set(S()*.5,S()*3,S()*.3),a.castShadow=!0,a.receiveShadow=!0,e.add(a);const c=1+Math.floor(S()*3);for(let E=0;E<c;E++){const T=S()*6.28,b=r*.6+S()*r*.5,y=r*.3+S()*r*.4,v=new I(new K(y,5,4),S()<.5?n:i),R=.3+S()*.4;v.scale.set(1+S()*.5,R,1+S()*.5),v.position.set(Math.cos(T)*b,y*R*.3,Math.sin(T)*b),v.rotation.set(S()*.8,S()*3,S()*.5),e.add(v)}const h=2+Math.floor(S()*3);for(let E=0;E<h;E++){const T=S()*6.28,b=S()*r*.6,y=r*.15+S()*r*.2,v=new I(new K(y,4,3),o);v.scale.set(1.5,.2,1.5),v.position.set(Math.cos(T)*b,r*.35+S()*.05,Math.sin(T)*b),e.add(v)}const u=[8943428,10061909,6715221,11180390];for(let E=0;E<3;E++){const T=new J({color:u[Math.floor(S()*u.length)],roughness:.9,transparent:!0,opacity:.5}),b=S()*6.28,y=new I(new K(r*.06+S()*r*.08,3,3),T);y.scale.set(2,.15,2),y.position.set(Math.cos(b)*r*.5,r*.25+S()*.1,Math.sin(b)*r*.5),e.add(y)}const d=new Y({color:1381656,transparent:!0,opacity:.35}),p=2+Math.floor(S()*3);for(let E=0;E<p;E++){const T=S()*6.28,b=r*.3+S()*r*.4,y=new I(new yt(.003,.001,b,3),d),v=r*.3+S()*r*.2;y.position.set(Math.cos(T)*v,r*.2+S()*r*.15,Math.sin(T)*v),y.rotation.set(S()*.5,T,Math.PI/2+S()*.4),e.add(y)}const g=new Y({color:660752,transparent:!0,opacity:.2,side:Dt}),x=1+Math.floor(S()*2);for(let E=0;E<x;E++){const T=S()*6.28,b=r*.3+S()*r*.3,y=new I(new xe(.02+S()*.015,b),g);y.position.set(Math.cos(T)*r*.45,r*.15,Math.sin(T)*r*.45),y.rotation.y=-T,e.add(y)}const f=[],m=new Y({color:8965375,transparent:!0,opacity:.4});if(S()<.5){const E=2+Math.floor(S()*3);for(let T=0;T<E;T++){const b=S()*6.28,y=r*.25+S()*r*.25,v=new I(new K(.006,3,3),m);v.position.set(Math.cos(b)*y,r*.15+S()*r*.2,Math.sin(b)*y),e.add(v),f.push(v)}}const w=new Y({color:657926,transparent:!0,opacity:.12,side:Dt}),_=new I(new Xo(r*.5,r*1,8),w);_.rotation.x=-Math.PI/2,_.position.y=.005,e.add(_);const M=new J({color:3816e3,roughness:.9}),A=4+Math.floor(S()*3);for(let E=0;E<A;E++){const T=S()*6.28,b=r*.5+S()*r*.6,y=.03+S()*.05,v=new I(new K(y,3,3),M);v.scale.set(1+S()*.5,.4,1+S()*.5),v.position.set(Math.cos(T)*b,y*.15,Math.sin(T)*b),e.add(v)}if(S()<.6){const E=new J({color:3385941,emissive:F.grassTip,emissiveIntensity:.05,roughness:.7,side:Dt});for(let T=0;T<3;T++){const b=S()*6.28,y=new I(new xe(.015,.08+S()*.06),E);y.position.set(Math.cos(b)*r*.3,r*.3,Math.sin(b)*r*.3),y.rotation.y=S()*3,y.rotation.x=-.2-S()*.3,e.add(y)}}return e.position.set(s,0,t),ct.add(e),{group:e,x:s,z:t,colR:r*.8,sparkles:f,sparkleMat:m}}let p0=null,m0=null,g0=null,x0=null,ou=[];function R1(){return p0}function C1(){return m0}function P1(){return g0}function I1(){return x0}function L1(){return ou}function D1(){const s=new ae,t=new J({color:F.obeliskBlack,roughness:.2,metalness:.8,emissive:F.obeliskPink,emissiveIntensity:0});m0=t;const e=new I(new yt(1.2,1.8,we,4),t);e.position.y=we/2,e.rotation.y=Math.PI/4,e.castShadow=!0,s.add(e);const n=new Y({color:3351108,transparent:!0,opacity:.2});for(let b=0;b<4;b++){const y=b/4*6.28+Math.PI/4,v=new I(new yt(.03,.04,we*.9,3),n);v.position.set(Math.cos(y)*1.55,we*.45,Math.sin(y)*1.55),s.add(v)}const i=new Y({color:F.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<4;b++){const y=b/4*6.28+Math.PI/4;for(let R=0;R<3;R++){const U=6+R*4,L=new I(new yt(.015,.015,.8,3),i);L.position.set(Math.cos(y)*1.6,U,Math.sin(y)*1.6),L.rotation.z=Math.PI/2,L.rotation.y=-y,L.visible=!1,s.add(L)}const v=new I(new yt(.012,.012,2.5,3),i);v.position.set(Math.cos(y)*1.6,12,Math.sin(y)*1.6),v.visible=!1,s.add(v)}const o=new J({color:F.obeliskBlack,roughness:.1,metalness:.9,emissive:F.obeliskPink,emissiveIntensity:0});g0=o;const r=new I(new $n(1.3,3,4),o);r.position.y=we+1.5,r.rotation.y=Math.PI/4,s.add(r);const a=new Y({color:F.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<4;b++){const y=b/4*6.28+Math.PI/4,v=new I(new yt(.02,.02,3.2,3),a);v.position.set(Math.cos(y)*.8,we+1.5,Math.sin(y)*.8),v.rotation.z=.35*(y<3.14?1:-1),v.rotation.y=-y,v.visible=!1,s.add(v)}for(let b=0;b<5;b++){const y=new I(new Te(1.85-b*.02,.04,6,4),new Y({color:2236979}));y.position.y=4+b*5,y.rotation.x=Math.PI/2,s.add(y)}const l=new J({color:1118488,roughness:.3,metalness:.7}),c=new I(new yt(2.2,2.5,.6,4),l);c.position.y=.3,c.rotation.y=Math.PI/4,s.add(c);const h=new I(new yt(2.8,3,.4,4),l);h.position.y=.05,h.rotation.y=Math.PI/4,s.add(h);const u=new Y({color:F.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<8;b++){const y=b/8*6.28,v=new I(new K(.06,4,3),u);v.position.set(Math.cos(y)*2.5,we*.7+b*.5,Math.sin(y)*2.5),v.visible=!1,s.add(v)}const d=new Y({color:1710626,transparent:!0,opacity:.08});for(let b=0;b<6;b++){const y=S()*6.28,v=2+S()*we*.7,R=new I(new yt(.008,.008,.5+S()*.5,3),d);R.position.set(Math.cos(y)*1.6,v,Math.sin(y)*1.6),R.rotation.z=(S()-.5)*.8,R.rotation.y=-y,s.add(R)}const p=new J({color:921108,roughness:.5,metalness:.4});for(let b=0;b<12;b++){const y=S()*6.28,v=3+S()*2,R=.15+S()*.25,U=new I(new K(R,4,3),p);U.scale.set(1+S()*.5,.3+S()*.3,1+S()*.5),U.position.set(Math.cos(y)*v,R*.15,Math.sin(y)*v),U.rotation.set(S(),S(),S()),s.add(U)}const g=new Y({color:F.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<4;b++){const y=b/4*6.28+Math.PI/4;for(let v=0;v<5;v++){const R=5+v*3.5+S()*.5,U=(S()-.5)*.4,L=new I(new K(.04,4,3),g);L.position.set(Math.cos(y)*1.58+Math.cos(y+1.57)*U,R,Math.sin(y)*1.58+Math.sin(y+1.57)*U),L.visible=!1,s.add(L)}}const x=new Y({color:F.obeliskPink,transparent:!0,opacity:.8,blending:le,depthWrite:!1}),f=new I(new K(.5,12,8),x);f.position.y=we+3,s.add(f);const m=new Y({color:F.obeliskPink,transparent:!0,opacity:.2,blending:le,depthWrite:!1}),w=new I(new K(.9,8,6),m);w.position.y=we+3,s.add(w),x0={mesh:f,haze:w,mat:x,hazeMat:m},ou=[];const _=[.8,1.1,1.4,1.8],M=[11158783,10040302,12277247,8921821];for(let b=0;b<4;b++){const y=new Y({color:M[b],transparent:!0,opacity:.4,blending:le,depthWrite:!1,side:Dt}),v=new I(new Te(_[b],.02,6,24),y);v.position.y=we+3,v.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),s.add(v),ou.push({mesh:v,mat:y,rx:(Math.random()-.5)*2,ry:(Math.random()-.5)*2,rz:(Math.random()-.5)*1.5})}const A=new Y({color:0,transparent:!0,opacity:.15,side:Dt}),E=new I(new Ze(4,8),A);E.rotation.x=-Math.PI/2,E.position.y=.005,s.add(E),s.position.set(0,-we,0),ct.add(s),p0=s;const T=new jo(8939212,0,30);s.add(T),T.position.set(0,we+1,0)}let v0=null,_0=null;function U1(){return v0}function N1(){return _0}function z1(){const s=new J({color:F.moatBlue,emissive:1136042,emissiveIntensity:.3,transparent:!0,opacity:0,roughness:.1,metalness:.3});_0=s;const t=new uc;t.absarc(0,0,6,0,6.28,!1);const e=new hc;e.absarc(0,0,3,0,6.28,!0),t.holes.push(e);const n=new Fr(t,24),i=new I(n,s);i.rotation.x=-Math.PI/2,i.position.y=.05,i.visible=!1,ct.add(i),v0=i;const o=new Y({color:4491468,transparent:!0,opacity:0});for(let p=0;p<12;p++){const g=p/12*6.28+S()*.3,x=3.5+S()*2,f=new I(new K(.04+S()*.04,4,3),o);f.scale.set(1.2,.4,1.2),f.position.set(Math.cos(g)*x,.02,Math.sin(g)*x),f.visible=!1,ct.add(f)}const r=new Y({color:13426158,transparent:!0,opacity:0,side:Dt});for(let p=0;p<6;p++){const g=p/6*6.28+S()*.5,x=new I(new Ze(.12+S()*.1,5),r);x.rotation.x=-Math.PI/2,x.position.set(Math.cos(g)*3.3,.06,Math.sin(g)*3.3),x.visible=!1,ct.add(x)}const a=new Y({color:8960989,transparent:!0,opacity:0});for(let p=0;p<8;p++){const g=p/8*6.28,x=4+S()*1.5,f=new I(new yt(.003,.003,.4,3),a);f.position.set(Math.cos(g)*x,.055,Math.sin(g)*x),f.rotation.x=Math.PI/2,f.rotation.z=g+Math.PI/2,f.visible=!1,ct.add(f)}const l=new Y({color:264208,transparent:!0,opacity:0,side:Dt}),c=new uc;c.absarc(0,0,5.2,0,6.28,!1);const h=new hc;h.absarc(0,0,3.8,0,6.28,!0),c.holes.push(h);const u=new Fr(c,16),d=new I(u,l);d.rotation.x=-Math.PI/2,d.position.y=.04,d.visible=!1,ct.add(d)}const Gr=[];function Bd(s,t,e,n,i){const o=[],r=[],a=[];for(let c=0;c<e;c++){const h=s[c],u=s[c+1],d=u.x-h.x;u.y-h.y;const p=u.z-h.z,g=Math.sqrt(d*d+p*p)||1,x=-p/g,f=d/g,m=(c+.5)/e,w=.7+Math.sin(m*Math.PI)*.5,_=t*w/2,M=[h.x+x*_,h.y,h.z+f*_],A=[h.x-x*_,h.y,h.z-f*_],E=[u.x+x*_,u.y,u.z+f*_],T=[u.x-x*_,u.y,u.z-f*_];o.push(...M,...E,...A,...A,...E,...T);const b=c/e,y=(c+1)/e;if(a.push(b,0,y,0,b,1,b,1,y,0,y,1),i){const U=.85+Math.sin(m*Math.PI*3)*.15,L=1.2*U,z=.6*U;r.push(i.r*L,i.g*L,i.b*L),r.push(i.r*L,i.g*L,i.b*L),r.push(i.r*z,i.g*z,i.b*z),r.push(i.r*z,i.g*z,i.b*z),r.push(i.r*L,i.g*L,i.b*L),r.push(i.r*z,i.g*z,i.b*z)}}const l=new Me;return l.setAttribute("position",new Gt(o,3)),l.setAttribute("uv",new Gt(a,2)),r&&l.setAttribute("color",new Gt(r,3)),l.computeVertexNormals(),l}function F1(){for(let l=0;l<6;l++){const c=F.rainbow[l],h=l/6*6.28,u=6+l*.8,d=we+6+l*2.5,p=1-l*.05,g=[],x=32;for(let V=0;V<=x;V++){const k=V/x,$=h+k*Math.PI,W=Math.cos($)*u,at=Math.sin($)*u,pt=Math.sin(k*Math.PI)*d;g.push(new N(W,pt,at))}const f=new st(c),m=Bd(g,p,x,!0,f),w=new Y({vertexColors:!0,transparent:!0,opacity:0,side:Dt,depthWrite:!1,blending:le}),_=new I(m,w);_.visible=!1,ct.add(_);const M=new Vr(g),A=new Y({color:16777215,transparent:!0,opacity:0,blending:le,depthWrite:!1}),E=new Tn(M,x,.03,4,!1),T=new I(E,A);T.visible=!1,ct.add(T);const b=[],y=new Y({color:16777215,transparent:!0,opacity:0,blending:le,depthWrite:!1});for(let V=0;V<8;V++){const k=new I(new K(.06,4,3),y.clone());k.visible=!1,ct.add(k),b.push({mesh:k,mat:k.material,phase:V/8,speed:.15+Math.random()*.1})}const v=new Y({color:c,transparent:!0,opacity:0,side:Dt,blending:le}),R=g[0],U=g[g.length-1],L=new I(new Ze(1.2,8),v);L.rotation.x=-Math.PI/2,L.position.set(R.x,.03,R.z),L.visible=!1,ct.add(L);const z=new I(new Ze(1.2,8),v.clone());z.rotation.x=-Math.PI/2,z.position.set(U.x,.03,U.z),z.visible=!1,ct.add(z),Gr.push({mesh:_,mat:w,coreLine:T,coreMat:A,curve:M,sparkles:b,pools:[L,z],poolMat:v,targetOpacity:0})}const s=[],t=10,e=we+14,n=32;for(let l=0;l<=n;l++){const c=l/n,h=c*Math.PI;s.push(new N(Math.cos(h)*t,Math.sin(c*Math.PI)*e,Math.sin(h)*t))}const i=new st(15654399),o=Bd(s,1.5,n,!0,i),r=new Y({vertexColors:!0,transparent:!0,opacity:0,side:Dt,depthWrite:!1,blending:le}),a=new I(o,r);a.visible=!1,ct.add(a),Gr.push({mesh:a,mat:r,targetOpacity:0})}function O1(s){for(let t=0;t<Gr.length;t++){const e=Gr[t];if(!(!e.sparkles||!e.curve)&&e.mesh.visible){e.coreLine&&(e.coreLine.visible=e.mesh.visible,e.coreMat.opacity=e.mat.opacity*.4);for(let n=0;n<e.sparkles.length;n++){const i=e.sparkles[n];i.phase+=i.speed*.016,i.phase>1&&(i.phase-=1);const o=e.curve.getPoint(i.phase);i.mesh.position.copy(o),i.mesh.visible=e.mesh.visible;const r=Math.sin(s*8+n*2.1)*.5+.5;i.mat.opacity=e.mat.opacity*r*.7}if(e.pools)for(let n=0;n<e.pools.length;n++)e.pools[n].visible=e.mesh.visible,e.poolMat&&(e.poolMat.opacity=e.mat.opacity*.3)}}}let gn=null;const ri=[],ln=new de,Pr=new st;function B1(s){const t=new Y({color:16777215,transparent:!0,opacity:1});gn=new wi(Rn.fly,t,s),gn.instanceMatrix.setUsage(Re),gn.instanceColor=new yi(new Float32Array(s*3),3),gn.instanceColor.setUsage(Re),ln.scale.setScalar(0),ln.updateMatrix();for(let e=0;e<s;e++){gn.setMatrixAt(e,ln.matrix);const n=e%3===0?F.fireflyB:F.firefly;Pr.setHex(n),gn.setColorAt(e,Pr),ri.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,phase:Math.random()*6.28,wander:Math.random()*6.28,colorHex:n})}gn.count=s,gn.frustumCulled=!1,ct.add(gn)}function $a(s,t,e,n){let i=null;for(let o=0;o<ri.length;o++)if(!ri[o].active){i=ri[o];break}if(!i){let o=1/0;for(let r=0;r<ri.length;r++)ri[r].life<o&&(o=ri[r].life,i=ri[r])}i.x=s,i.y=t+.5+Math.random()*3,i.z=e,i.vx=(Math.random()-.5)*2,i.vy=Math.random()-.5,i.vz=(Math.random()-.5)*2,i.life=n,i.max=n,i.active=!0,i.wander=Math.random()*6.28}function M0(s,t){let e=0,n=!1;for(let i=0;i<ri.length;i++){const o=ri[i];if(!o.active){ln.position.set(0,-100,0),ln.scale.setScalar(0),ln.updateMatrix(),gn.setMatrixAt(i,ln.matrix);continue}if(o.life-=s,o.life<=0){o.active=!1,ln.position.set(0,-100,0),ln.scale.setScalar(0),ln.updateMatrix(),gn.setMatrixAt(i,ln.matrix);continue}e++,o.wander+=(Math.random()-.5)*3*s,o.vx+=Math.cos(o.wander)*1.5*s,o.vz+=Math.sin(o.wander)*1.5*s,o.vy+=Math.sin(t*2+o.phase)*s,o.vx*=.995,o.vy*=.995,o.vz*=.995,o.x+=o.vx*s,o.y+=o.vy*s,o.z+=o.vz*s;const r=Zt(o.x,o.z)+.3;o.y<r&&(o.y=r,o.vy=Math.abs(o.vy)*.5),o.y>12&&(o.vy-=2*s);const a=Math.sin(t*3+o.phase)*.5+.5,c=o.life/o.max*(.4+a*.6),h=.6+a*.6;ln.position.set(o.x,o.y,o.z),ln.scale.setScalar(h),ln.updateMatrix(),gn.setMatrixAt(i,ln.matrix),Pr.setHex(o.colorHex),Pr.multiplyScalar(c),gn.setColorAt(i,Pr),n=!0}return gn.instanceMatrix.needsUpdate=!0,n&&(gn.instanceColor.needsUpdate=!0),e}let xn=null;const ai=[],hn=new de,vc=new st,G1=new st(F.spore);function k1(s){const t=new Y({color:16777215,transparent:!0,opacity:1});xn=new wi(Rn.spore,t,s),xn.instanceMatrix.setUsage(Re),xn.instanceColor=new yi(new Float32Array(s*3),3),xn.instanceColor.setUsage(Re),hn.scale.setScalar(0),hn.updateMatrix();for(let e=0;e<s;e++)xn.setMatrixAt(e,hn.matrix),vc.setHex(F.spore),xn.setColorAt(e,vc),ai.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});xn.count=s,xn.frustumCulled=!1,ct.add(xn)}function H1(s,t,e){let n=null;for(let i=0;i<ai.length;i++)if(!ai[i].active){n=ai[i];break}if(!n){let i=1/0;for(let o=0;o<ai.length;o++)ai[o].life<i&&(i=ai[o].life,n=ai[o])}n.x=s,n.y=t,n.z=e,n.vx=(Math.random()-.5)*.3,n.vy=.4+Math.random()*.4,n.vz=(Math.random()-.5)*.3,n.life=3+Math.random()*3,n.max=n.life,n.active=!0}let y0=0,w0=0;function V1(s,t){y0=s,w0=t}function W1(s){let t=0,e=!1;for(let n=0;n<ai.length;n++){const i=ai[n];if(!i.active){hn.position.set(0,-100,0),hn.scale.setScalar(0),hn.updateMatrix(),xn.setMatrixAt(n,hn.matrix);continue}if(i.life-=s,i.life<=0){i.active=!1,hn.position.set(0,-100,0),hn.scale.setScalar(0),hn.updateMatrix(),xn.setMatrixAt(n,hn.matrix);continue}t++,i.vy+=.3*s,i.vx+=y0*.3*s,i.vz+=w0*.3*s,i.vx*=.997,i.vy*=.997,i.vz*=.997,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s;const o=i.life/i.max*.7;hn.position.set(i.x,i.y,i.z),hn.scale.setScalar(1),hn.updateMatrix(),xn.setMatrixAt(n,hn.matrix),vc.copy(G1).multiplyScalar(o),xn.setColorAt(n,vc),e=!0}return xn.instanceMatrix.needsUpdate=!0,e&&(xn.instanceColor.needsUpdate=!0),t}let vn=null;const Lo=[];let Pl=0;const un=new de,_c=new st,S0=new st(F.starMote);function X1(s){const t=new Y({color:16777215,transparent:!0,opacity:1});vn=new wi(Rn.starMote,t,s),vn.instanceMatrix.setUsage(Re),vn.instanceColor=new yi(new Float32Array(s*3),3),vn.instanceColor.setUsage(Re),un.scale.setScalar(0),un.updateMatrix();for(let e=0;e<s;e++)vn.setMatrixAt(e,un.matrix),_c.copy(S0),vn.setColorAt(e,_c),Lo.push({x:0,y:0,z:0,life:0,max:0,active:!1,vy:0,drift:0});vn.count=s,vn.frustumCulled=!1,ct.add(vn)}function q1(s){let t=null;for(let e=0;e<Lo.length;e++)if(!Lo[e].active){t=Lo[e];break}t&&(t.x=s.x+(Math.random()-.5)*60,t.z=s.z+(Math.random()-.5)*60,t.y=15+Math.random()*20,t.life=6+Math.random()*6,t.max=t.life,t.active=!0,t.vy=-.15-Math.random()*.3,t.drift=Math.random()*6.28)}function b0(s,t,e){Pl+=s,Pl>.15&&(Pl=0,q1(e));let n=!1;for(let i=0;i<Lo.length;i++){const o=Lo[i];if(!o.active){un.position.set(0,-100,0),un.scale.setScalar(0),un.updateMatrix(),vn.setMatrixAt(i,un.matrix);continue}if(o.life-=s,o.life<=0||o.y<.5){o.active=!1,un.position.set(0,-100,0),un.scale.setScalar(0),un.updateMatrix(),vn.setMatrixAt(i,un.matrix);continue}o.y+=o.vy*s,o.drift+=(Math.random()-.5)*.5*s,o.x+=Math.sin(o.drift)*.1*s,o.z+=Math.cos(o.drift)*.08*s;const r=o.life/o.max,a=Math.sin(t*4+i)*.3+.7,l=r*a*.7,c=.5+a*.5;un.position.set(o.x,o.y,o.z),un.scale.setScalar(c),un.updateMatrix(),vn.setMatrixAt(i,un.matrix),_c.copy(S0).multiplyScalar(l),vn.setColorAt(i,_c),n=!0}vn.instanceMatrix.needsUpdate=!0,n&&(vn.instanceColor.needsUpdate=!0)}let _n=null;const Do=[],fn=new de,Mc=new st,T0=new st(8956535);function Y1(s){const t=new Y({color:16777215,transparent:!0,opacity:1});_n=new wi(Rn.dustMote,t,s),_n.instanceMatrix.setUsage(Re),_n.instanceColor=new yi(new Float32Array(s*3),3),_n.instanceColor.setUsage(Re),fn.scale.setScalar(0),fn.updateMatrix();for(let e=0;e<s;e++)_n.setMatrixAt(e,fn.matrix),Mc.copy(T0),_n.setColorAt(e,Mc),Do.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});_n.count=s,_n.frustumCulled=!1,ct.add(_n)}function Gd(s,t,e){for(let n=0;n<e;n++){let i=null;for(let a=0;a<Do.length;a++)if(!Do[a].active){i=Do[a];break}if(!i)continue;const o=Math.random()*6.28,r=1+Math.random()*2;i.x=s+Math.cos(o)*.2,i.y=Zt(s,t)+.1,i.z=t+Math.sin(o)*.2,i.vx=Math.cos(o)*r,i.vy=.5+Math.random()*1.5,i.vz=Math.sin(o)*r,i.life=.6+Math.random()*.6,i.max=i.life,i.active=!0}}function Z1(s){let t=!1;for(let e=0;e<Do.length;e++){const n=Do[e];if(!n.active){fn.position.set(0,-100,0),fn.scale.setScalar(0),fn.updateMatrix(),_n.setMatrixAt(e,fn.matrix);continue}if(n.life-=s,n.life<=0){n.active=!1,fn.position.set(0,-100,0),fn.scale.setScalar(0),fn.updateMatrix(),_n.setMatrixAt(e,fn.matrix);continue}n.vy-=3*s,n.vx*=.96,n.vy*=.96,n.vz*=.96,n.x+=n.vx*s,n.y+=n.vy*s,n.z+=n.vz*s;const i=Zt(n.x,n.z)+.05;n.y<i&&(n.y=i,n.vy=0,n.vx*=.8,n.vz*=.8);const o=n.life/n.max*.4;fn.position.set(n.x,n.y,n.z),fn.scale.setScalar(1),fn.updateMatrix(),_n.setMatrixAt(e,fn.matrix),Mc.copy(T0).multiplyScalar(o),_n.setColorAt(e,Mc),t=!0}_n.instanceMatrix.needsUpdate=!0,t&&(_n.instanceColor.needsUpdate=!0)}let Mn=null;const Uo=[],dn=new de,yc=new st,E0=new st(F.bubblePop),$1=new K(.02,3,3);function j1(s){const t=new Y({color:16777215,transparent:!0,opacity:1});Mn=new wi($1,t,s),Mn.instanceMatrix.setUsage(Re),Mn.instanceColor=new yi(new Float32Array(s*3),3),Mn.instanceColor.setUsage(Re),dn.scale.setScalar(0),dn.updateMatrix();for(let e=0;e<s;e++)Mn.setMatrixAt(e,dn.matrix),yc.copy(E0),Mn.setColorAt(e,yc),Uo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});Mn.count=s,Mn.frustumCulled=!1,ct.add(Mn)}function K1(s,t,e,n){for(let i=0;i<n;i++){let o=null;for(let c=0;c<Uo.length;c++)if(!Uo[c].active){o=Uo[c];break}if(!o)continue;const r=Math.random()*6.28,a=Math.random()*3.14,l=1+Math.random()*2;o.x=s,o.y=t,o.z=e,o.vx=Math.cos(r)*Math.sin(a)*l,o.vy=Math.cos(a)*l,o.vz=Math.sin(r)*Math.sin(a)*l,o.life=.4+Math.random()*.4,o.max=o.life,o.active=!0}}function J1(s){let t=!1;for(let e=0;e<Uo.length;e++){const n=Uo[e];if(!n.active){dn.position.set(0,-100,0),dn.scale.setScalar(0),dn.updateMatrix(),Mn.setMatrixAt(e,dn.matrix);continue}if(n.life-=s,n.life<=0){n.active=!1,dn.position.set(0,-100,0),dn.scale.setScalar(0),dn.updateMatrix(),Mn.setMatrixAt(e,dn.matrix);continue}n.vy-=2*s,n.vx*=.97,n.vy*=.97,n.vz*=.97,n.x+=n.vx*s,n.y+=n.vy*s,n.z+=n.vz*s;const i=n.life/n.max*.8;dn.position.set(n.x,n.y,n.z),dn.scale.setScalar(1),dn.updateMatrix(),Mn.setMatrixAt(e,dn.matrix),yc.copy(E0).multiplyScalar(i),Mn.setColorAt(e,yc),t=!0}Mn.instanceMatrix.needsUpdate=!0,t&&(Mn.instanceColor.needsUpdate=!0)}let yn=null;const No=[],Qe=new de,wc=new st,A0=[new st(F.leafGlow),new st(3394662),new st(2271880),new st(5636044),new st(4513262)];let R0=0,C0=0;function Q1(s,t,e){R0=s,C0=t}function tS(s){const t=new xe(.12,.08),e=new Y({color:16777215,transparent:!0,opacity:1,side:Dt,depthWrite:!1,blending:le});yn=new wi(t,e,s),yn.instanceMatrix.setUsage(Re),yn.instanceColor=new yi(new Float32Array(s*3),3),yn.instanceColor.setUsage(Re),Qe.scale.setScalar(0),Qe.updateMatrix();for(let n=0;n<s;n++)yn.setMatrixAt(n,Qe.matrix),wc.setHex(0),yn.setColorAt(n,wc),No.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,rvx:0,rvy:0,rvz:0,life:0,max:0,active:!1,colorIdx:0});yn.count=s,yn.frustumCulled=!1,ct.add(yn)}function eS(s,t,e){let n=null;for(let o=0;o<No.length;o++)if(!No[o].active){n=No[o];break}if(!n)return;n.x=s+(Math.random()-.5)*2,n.y=t+Math.random()*2,n.z=e+(Math.random()-.5)*2;const i=Math.random()*6.28;n.vx=Math.cos(i)*.3,n.vy=-.2-Math.random()*.3,n.vz=Math.sin(i)*.3,n.rvx=(Math.random()-.5)*4,n.rvy=(Math.random()-.5)*3,n.rvz=(Math.random()-.5)*2,n.rx=Math.random()*6.28,n.ry=Math.random()*6.28,n.rz=Math.random()*6.28,n.life=4+Math.random()*4,n.max=n.life,n.active=!0,n.colorIdx=Math.floor(Math.random()*A0.length)}function nS(s,t){let e=!1;for(let n=0;n<No.length;n++){const i=No[n];if(!i.active){Qe.position.set(0,-100,0),Qe.scale.setScalar(0),Qe.updateMatrix(),yn.setMatrixAt(n,Qe.matrix);continue}if(i.life-=s,i.life<=0||i.y<-.5){i.active=!1,Qe.position.set(0,-100,0),Qe.scale.setScalar(0),Qe.updateMatrix(),yn.setMatrixAt(n,Qe.matrix);continue}i.vx+=R0*.4*s,i.vz+=C0*.4*s,i.vx+=Math.sin(t*3+n*1.7)*.5*s,i.vz+=Math.cos(t*2.5+n*2.1)*.3*s,i.vy-=.3*s,i.vx*=.995,i.vy=Math.max(i.vy,-.8),i.vz*=.995,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s,i.rx+=i.rvx*s,i.ry+=i.rvy*s,i.rz+=i.rvz*s;const o=i.life/i.max,r=o*(.6+Math.sin(t*2+n*.8)*.4),a=.8+o*.4;Qe.position.set(i.x,i.y,i.z),Qe.rotation.set(i.rx,i.ry,i.rz),Qe.scale.setScalar(a),Qe.updateMatrix(),yn.setMatrixAt(n,Qe.matrix),wc.copy(A0[i.colorIdx]).multiplyScalar(r),yn.setColorAt(n,wc),e=!0}yn.instanceMatrix.needsUpdate=!0,e&&(yn.instanceColor.needsUpdate=!0)}const La=40,ru=8;let tn=null;const ci=[],Nn=new de,is=new st,P0=new st(4513194);let kd=0,Hd=0,Qu=!1;function iS(){const s=new uc;return s.moveTo(0,-.18),s.quadraticCurveTo(.1,-.17,.11,-.06),s.lineTo(.1,-.02),s.lineTo(.13,.12),s.quadraticCurveTo(.125,.14,.11,.12),s.lineTo(.08,0),s.quadraticCurveTo(.05,-.02,.03,0),s.lineTo(.03,.05),s.lineTo(.02,.22),s.quadraticCurveTo(0,.245,-.02,.22),s.lineTo(-.03,.05),s.lineTo(-.03,0),s.quadraticCurveTo(-.05,-.02,-.08,0),s.lineTo(-.11,.12),s.quadraticCurveTo(-.125,.14,-.13,.12),s.lineTo(-.1,-.02),s.lineTo(-.11,-.06),s.quadraticCurveTo(-.1,-.17,0,-.18),new Fr(s)}function sS(){const s=iS(),t=new Y({color:16777215,transparent:!0,opacity:1,blending:le,depthWrite:!1,side:Dt});tn=new wi(s,t,La),tn.instanceMatrix.setUsage(Re),tn.instanceColor=new yi(new Float32Array(La*3),3),tn.instanceColor.setUsage(Re),Nn.position.set(0,-100,0),Nn.scale.setScalar(0),Nn.updateMatrix();for(let e=0;e<La;e++)tn.setMatrixAt(e,Nn.matrix),is.setScalar(0),tn.setColorAt(e,is),ci.push({active:!1,life:0,maxLife:ru,x:0,z:0});tn.count=La,tn.frustumCulled=!1,ct.add(tn),Qu=!0}function oS(s,t,e,n){if(!Qu)return;const i=s-kd,o=t-Hd;if(i*i+o*o<(n?.25:.64))return;kd=s,Hd=t;let l=null,c=-1;for(let f=0;f<ci.length;f++)if(!ci[f].active){l=ci[f],c=f;break}if(!l){let f=1/0;for(let m=0;m<ci.length;m++)ci[m].life<f&&(f=ci[m].life,l=ci[m],c=m)}const h=Zt(s,t);l.active=!0,l.life=ru,l.maxLife=ru,l.x=s,l.z=t;const u=c%2===0?1:-1,d=Math.sin(e+Math.PI/2)*.12*u,p=Math.cos(e+Math.PI/2)*.12*u,g=n?1.15:1;Nn.position.set(s+d,h+.015,t+p),Nn.rotation.set(-Math.PI/2,0,-e+(Math.random()-.5)*.15),Nn.scale.set(g,g,g),Nn.updateMatrix(),tn.setMatrixAt(c,Nn.matrix);const x=n?.9:.6;is.copy(P0).multiplyScalar(x),tn.setColorAt(c,is)}function rS(s,t){if(!Qu)return;const e=1+(t||0)*1.5;let n=!1;for(let i=0;i<ci.length;i++){const o=ci[i];if(!o.active)continue;if(o.life-=s*e,o.life<=0){o.active=!1,Nn.position.set(0,-100,0),Nn.scale.setScalar(0),Nn.updateMatrix(),tn.setMatrixAt(i,Nn.matrix),is.setScalar(0),tn.setColorAt(i,is),n=!0;continue}const r=o.life/o.maxLife,a=r*r;is.copy(P0).multiplyScalar(a*.6),tn.setColorAt(i,is),n=!0}tn.instanceMatrix.needsUpdate=!0,n&&(tn.instanceColor.needsUpdate=!0)}const mi=[],xo=[];let Vd=we+2,Ji=1;function Wd(s){Ji=s}function I0(s,t,e,n){const i=[];for(let r=0;r<=12;r++){const a=r/12,l=s*(1-a*a),c=t*(1-a*a),h=e+(n-e)*a;i.push(new N(l,h,c))}return{curve:new Vr(i),pts:i}}function aS(s,t,e,n){const i=n||we+2,o=e+15,r=new Bu(new N(s,e,t),new N(s,o,t)),a=new Y({color:F.laserPink,transparent:!0,opacity:0,blending:le,depthWrite:!1}),l=new I(new Tn(r,1,.06,6,!1),a);ct.add(l);const c=new Y({color:F.laserGlow,transparent:!0,opacity:0,blending:le,depthWrite:!1}),h=new I(new Tn(r,1,.2,6,!1),c);ct.add(h);const{curve:u}=I0(s,t,o,i),d=new Y({color:F.laserPink,transparent:!0,opacity:0,blending:le,depthWrite:!1}),p=new I(new Tn(u,16,.05,6,!1),d);ct.add(p);const g=new Y({color:F.laserGlow,transparent:!0,opacity:0,blending:le,depthWrite:!1}),x=new I(new Tn(u,16,.18,6,!1),g);ct.add(x);const f={upTube:l,upGlow:h,bendTube:p,bendGlow:x,mat:a,glowMat:c,bendMat:d,bendGlowMat:g,fromX:s,fromZ:t,floatY:e,skyY:o,tipY:i,animPhase:0,animTimer:0};mi.push(f);for(let m=0;m<mi.length-1;m++){const w=mi[m],_=(f.skyY+w.skyY)/2,M=[];for(let v=0;v<=8;v++){const R=v/8,U=f.fromX*(1-R)+w.fromX*R,L=f.fromZ*(1-R)+w.fromZ*R,z=_+Math.sin(R*Math.PI)*3;M.push(new N(U,z,L))}const A=new Vr(M),E=new Y({color:F.laserGlow,transparent:!0,opacity:0,blending:le,depthWrite:!1}),T=new I(new Tn(A,10,.03,4,!1),E);ct.add(T);const b=new Y({color:F.laserPink,transparent:!0,opacity:0,blending:le,depthWrite:!1}),y=new I(new Tn(A,10,.1,4,!1),b);ct.add(y),xo.push({tube:T,glow:y,mat:E,glowMat:b,opacity:0})}return f}function cS(s){for(let t=0;t<mi.length;t++){const e=mi[t];e.tipY=s;const{curve:n}=I0(e.fromX,e.fromZ,e.skyY,s);ct.remove(e.bendTube),e.bendTube.geometry.dispose(),e.bendTube.geometry=new Tn(n,16,.05,6,!1),ct.add(e.bendTube),ct.remove(e.bendGlow),e.bendGlow.geometry.dispose(),e.bendGlow.geometry=new Tn(n,16,.18,6,!1),ct.add(e.bendGlow)}}function lS(s,t,e){const n=e||we+2;Math.abs(n-Vd)>.1&&mi.length>0&&(cS(n),Vd=n);for(let i=0;i<mi.length;i++){const o=mi[i];if(o.animTimer+=s,o.animPhase===0){const r=Math.min(o.animTimer/.5,1);o.mat.opacity=r*.8,o.glowMat.opacity=r*.3,o.animTimer>.5&&(o.animPhase=1,o.animTimer=0)}else if(o.animPhase===1){const r=Math.min(o.animTimer/.8,1);o.bendMat.opacity=r*.7,o.bendGlowMat.opacity=r*.2,o.mat.opacity=.8,o.glowMat.opacity=.3,o.animTimer>.8&&(o.animPhase=2)}else{const r=Math.sin(t*3+i*1.2)*.5+.5;o.mat.opacity=.5+r*.4,o.glowMat.opacity=.15+r*.15,o.bendMat.opacity=.4+r*.3,o.bendGlowMat.opacity=.1+r*.12}}for(let i=0;i<xo.length;i++){const o=xo[i];o.opacity=Math.min(o.opacity+s*.5,.3);const r=Math.sin(t*2+i*.8)*.5+.5;o.mat.opacity=o.opacity*(.6+r*.4),o.glowMat.opacity=o.opacity*(.2+r*.15)}if(Ji<1){for(let i=0;i<mi.length;i++){const o=mi[i];o.mat.opacity*=Ji,o.glowMat.opacity*=Ji,o.bendMat.opacity*=Ji,o.bendGlowMat.opacity*=Ji}for(let i=0;i<xo.length;i++)xo[i].mat.opacity*=Ji,xo[i].glowMat.opacity*=Ji}}const hS=new st(F.orbGold),uS=new st(16777215);let uo=0,Ye="SEEK",Qi=-we,Je=0,_r=[],Vn=null,Ss=null,bs=null,Ve=null,Ts=[],Li=null,au=null,Wn=[],Mr=null,L0=null,D0=null,cu=[],lu=[],hu=[],uu=[],vo=[],_o=null,Xd=0,Hn=0,fo=[],So=null,qd=!1;const bo=200;let qn=null;const tf=[];let U0=!1;function fS(){if(qn)return;const s=new Me,t=new Float32Array(bo*3),e=new Float32Array(bo*3),n=new Float32Array(bo);s.setAttribute("position",new ze(t,3)),s.setAttribute("color",new ze(e,3)),s.setAttribute("size",new ze(n,1)),s.attributes.position.setUsage(Re),s.attributes.color.setUsage(Re),s.attributes.size.setUsage(Re);const i=new zu({size:.3,vertexColors:!0,transparent:!0,opacity:.9,blending:le,depthWrite:!1,sizeAttenuation:!0});qn=new Lp(s,i),qn.visible=!1,ct.add(qn);const o=new st(F.obeliskPink),r=new st(11158783);for(let a=0;a<bo;a++){const l=Math.random()<.7?o:r;e[a*3]=l.r*(.8+Math.random()*.4),e[a*3+1]=l.g*(.8+Math.random()*.4),e[a*3+2]=l.b*(.8+Math.random()*.4),n[a]=.15+Math.random()*.25,tf.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,active:!1,sparklePhase:Math.random()*6.28})}s.attributes.color.needsUpdate=!0,s.attributes.size.needsUpdate=!0}function dS(s,t,e){U0=!0,qn.visible=!0;for(let n=0;n<bo;n++){const i=tf[n];i.x=s,i.y=t,i.z=e;const o=Math.random()*6.28,r=Math.random()*Math.PI,a=2+Math.random()*5;i.vx=Math.sin(r)*Math.cos(o)*a,i.vy=Math.cos(r)*a*.5+Math.random()*2,i.vz=Math.sin(r)*Math.sin(o)*a,i.life=5+Math.random()*6,i.active=!0}}function pS(s,t){if(!qn||!qn.visible)return;const e=qn.geometry.attributes.position.array,n=qn.geometry.attributes.size.array;let i=!1;for(let o=0;o<bo;o++){const r=tf[o];if(!r.active){e[o*3+1]=-100,n[o]=0;continue}if(i=!0,r.life-=s,r.life<=0||r.y<-1){r.active=!1;continue}r.vy-=1.5*s,r.vx*=.995,r.vz*=.995,r.vx+=Math.sin(t*3+o*.7)*.3*s,r.vz+=Math.cos(t*2.5+o*1.1)*.2*s,r.x+=r.vx*s,r.y+=r.vy*s,r.z+=r.vz*s,e[o*3]=r.x,e[o*3+1]=r.y,e[o*3+2]=r.z;const a=Math.sin(t*6+r.sparklePhase)*.5+.5,l=Math.min(r.life/2,1);n[o]=(.15+a*.2)*l}qn.geometry.attributes.position.needsUpdate=!0,qn.geometry.attributes.size.needsUpdate=!0,i||(qn.visible=!1)}function mS(s){_r=s.orbs,Vn=s.obeliskGroup,Ss=s.obeliskMat,bs=s.obeliskGlowMat,Ve=s.pinnacleOrb,Ts=s.pinnacleRings||[],Li=s.moatMesh,au=s.moatMat,Wn=s.rainbowArcs,Mr=s.player,L0=s.makeLaser,D0=s.orbHudEl,cu=s.deers||[],lu=s.puffs||[],hu=s.jellies||[],uu=s.moths||[],vo=s.trees||[],_o=s.groundMesh||null,fS()}function gS(s,t){let e=null,n=1/0;for(let l=0;l<_r.length;l++){const c=_r[l];if(c.found)continue;const h=c.x-Mr.pos.x,u=c.z-Mr.pos.z,d=h*h+u*u;d<n&&(n=d,e=c)}if(e&&n<lo*lo){const l=Math.sin(t*2+e.phase)*.5+.5;vr.position.set(e.x,1,e.z),vr.intensity=1+l*2,vr.distance=lo}else vr.intensity=0;for(let l=0;l<_r.length;l++){const c=_r[l];if(!(c.found&&!c.flyUp&&!c._flashing)){if(!c.found){const h=Math.sin(t*1.5+c.phase)*.5+.5;c.group.position.y=c.flyY+Math.sin(t*.8+c.phase)*.3,c.glowMat.opacity=.3+h*.4,c.hazeMat.opacity=.08+h*.12;const u=c.x-Mr.pos.x,d=c.z-Mr.pos.z,p=u*u+d*d,g=lo*lo;if(p<g){const x=1-Math.sqrt(p)/lo,f=x*x;c.glowMat.opacity=Math.min(.3+h*.4+f*.5,1),c.hazeMat.opacity=Math.min(.08+h*.12+f*.25,.6),c.coreMat.color.copy(uS).lerp(hS,1-f);const m=1+f*.3;c.group.scale.setScalar(m)}else c.group.scale.setScalar(1);for(let x=3;x<c.group.children.length;x++){const f=c.group.children[x],m=(x-3)/6*6.28+t*1.5;f.position.x=Math.cos(m)*.4,f.position.z=Math.sin(m)*.4,f.position.y=Math.sin(m*2+t)*.1}if(p<Sd*Sd){c.found=!0,c._flashing=!0,c._flashTimer=0,c.flyY=c.group.position.y,uo++;const x=D0||document.getElementById("orb-hud");x&&(x.innerHTML="✦ "+uo+" / "+go),Ye==="SEEK"&&(Ye="RISING")}}if(c._flashing){c._flashTimer+=s;const h=Math.min(c._flashTimer/1.5,1),u=h<.3?h/.3:1-(h-.3)/.7;c.glowMat.opacity=.5+u*.5,c.hazeMat.opacity=.3+u*.5,c.group.scale.setScalar(1+u*.6),c.group.position.x=c.x+Math.sin(t*30)*u*.05,c.group.position.z=c.z+Math.cos(t*25)*u*.05,c._flashTimer>1.5&&(c._flashing=!1,c.flyUp=!0,c.group.position.x=c.x,c.group.position.z=c.z)}if(c.flyUp){const h=we+5;c.flyY+=(h-c.flyY)*s*.8,c.group.position.y=c.flyY;const u=Math.min((c.flyY-1)/(h-1),1);if(c.group.scale.setScalar(1-u*.6),c.glowMat.opacity=.8-u*.5,c.flyY>h-1&&!c.laserLine){c.flyUp=!1,c.group.visible=!1;const d=Il();c.laserLine=L0(c.x,c.z,0,d)}}}}const i=we/go,o=-we+uo*i;if(Qi<o-.01?(Qi+=8*s,Qi>o&&(Qi=o),Vn&&(Vn.position.y=Qi,Vn.position.x=Math.sin(t*25)*.04,Vn.position.z=Math.cos(t*30)*.03)):Vn&&(Vn.position.x*=.9,Vn.position.z*=.9),uo>=go&&Qi>=-.01&&Ye==="RISING"&&(Ye="COMPLETE",Je=0),Vn){Vn.rotation.y+=s*.03;const l=Vn.children[Vn.children.length-1];if(l&&l.isLight){const c=Math.max(0,Math.min(1,(Qi+we)/we));l.intensity=c*1.5*(.8+Math.sin(t*1.5)*.2)}}if(Ve&&Ve.mesh.visible){const l=Math.sin(t*2)*.5+.5;Ve.mat.opacity=.6+l*.3,Ve.hazeMat.opacity=.15+l*.12;const c=uo/go;Ve.mat.opacity*=.3+c*.7,Ve.hazeMat.opacity*=.2+c*.8}for(let l=0;l<Ts.length;l++){const c=Ts[l];if(!c.mesh.visible)continue;c.mesh.rotation.x+=c.rx*s,c.mesh.rotation.y+=c.ry*s,c.mesh.rotation.z+=c.rz*s;const h=uo/go;c.mat.opacity=(.15+h*.35)*(.8+Math.sin(t*1.5+l)*.2)}const a=Il();if(lS(s,t,a),Ye==="COMPLETE"&&Je>3?Wd(Math.max(0,1-(Je-3)/4)):(Ye==="FINALE"||Ye==="TRANSFORM")&&Wd(0),pS(s,t),Ye==="COMPLETE"){Je+=s;const l=Math.min(Je/3,1);if(Ss&&(Ss.emissiveIntensity=l*1.5),bs&&(bs.emissiveIntensity=l*2.5),Ve&&Ve.mesh.visible&&Je>1&&Je<3){const c=Math.min((Je-1)/1.5,1);Ve.mat.opacity=.9+c*.1,Ve.hazeMat.opacity=.5+c*.5,Ve.mesh.scale.setScalar(1+c*.5),Ve.haze.scale.setScalar(1+c*1);for(let h=0;h<Ts.length;h++){const u=Ts[h];u.mesh.rotation.x+=u.rx*s*(1+c*4),u.mesh.rotation.y+=u.ry*s*(1+c*4),u.mesh.rotation.z+=u.rz*s*(1+c*4)}}if(Ve&&Ve.mesh.visible&&Je>=3&&!U0){const c=new N;Ve.mesh.getWorldPosition(c),dS(c.x,c.y,c.z),Ve.mesh.visible=!1,Ve.haze.visible=!1;for(let h=0;h<Ts.length;h++)Ts[h].mesh.visible=!1}if(Je>3&&au){const c=Math.min((Je-3)/4,1);au.opacity=c*.6,Li&&(Li.visible||(Li.visible=!0),Li.position.y=.05+Math.sin(t*3)*.02*c)}if(Je>4)for(let c=0;c<Wn.length;c++){const h=c*.3,u=Math.min(Math.max((Je-4-h)/2,0),1);u>0&&!Wn[c].mesh.visible&&(Wn[c].mesh.visible=!0),Wn[c].mat.opacity=u*.55,Wn[c].mesh.rotation.y+=s*.1*(c+1)*.3}if(Je>3){const c=Math.min((Je-3)/6,1)*2;for(let h=0;h<cu.length;h++){const u=cu[h],d=u.group,p=-d.position.x,g=-d.position.z,x=Math.sqrt(p*p+g*g);x>8?(u.wanderAng=Math.atan2(-d.position.x,-d.position.z),u.state="walk",u.speed=1.5*c,d.position.x+=p/x*u.speed*s,d.position.z+=g/x*u.speed*s,d.rotation.y=u.wanderAng):u.state="pause"}for(let h=0;h<lu.length;h++){const u=lu[h],d=u.group,p=-d.position.x,g=-d.position.z,x=Math.sqrt(p*p+g*g);x>8&&(u.wanderAng=Math.atan2(-d.position.x,-d.position.z),u.state="hop",u.hopTimer=u.hopTimer%1.2,d.position.x+=p/x*1.5*c*s,d.position.z+=g/x*1.5*c*s)}for(let h=0;h<hu.length;h++){const u=hu[h],d=u.group;d.position.x+=(0-d.position.x)*s*.15*c,d.position.z+=(0-d.position.z)*s*.15*c}for(let h=0;h<uu.length;h++){const u=uu[h];u.centerX+=(0-u.centerX)*s*.2*c,u.centerZ+=(0-u.centerZ)*s*.2*c,u.orbitR=Math.max(u.orbitR-s*.3*c,2)}}Je>12&&(Ye="FINALE",console.log("✦ Quest → FINALE"))}if(Ye==="FINALE"){Xd+=s,Ss&&(Ss.emissiveIntensity=1.5+Math.sin(t*.5)*.3),bs&&(bs.emissiveIntensity=2.5+Math.sin(t*.7)*.5),Li&&(Li.position.y=.05+Math.sin(t*3)*.02);for(let l=0;l<Wn.length;l++)Wn[l].mesh.rotation.y+=s*.1*(l+1)*.3,Wn[l].mat.opacity=.45+Math.sin(t+l)*.1;Xd>30&&(Ye="TRANSFORM",Hn=0,xS(),console.log("✦ Quest → TRANSFORM (trees="+vo.length+")"))}if(Ye==="TRANSFORM"){Hn+=s,Ss&&(Ss.emissiveIntensity=1.5+Math.sin(t*.5)*.3),bs&&(bs.emissiveIntensity=2.5+Math.sin(t*.7)*.5),Li&&(Li.position.y=.05+Math.sin(t*3)*.02);for(let c=0;c<Wn.length;c++)Wn[c].mesh.rotation.y+=s*.1*(c+1)*.3,Wn[c].mat.opacity=.45+Math.sin(t+c)*.1;if(Hn<3&&fo.length<vo.length){const c=Math.min(Math.floor(Hn/3*vo.length),vo.length);for(;fo.length<c;){const h=fo.length,u=vo[h],d=Il(),p=new Bu(new N(0,d,0),new N(u.x,0,u.z)),g=new Y({color:F.laserPink,transparent:!0,opacity:0,blending:le,depthWrite:!1}),x=new I(new Tn(p,8,.06,4,!1),g);ct.add(x);const f=new Y({color:F.laserGlow,transparent:!0,opacity:0,blending:le,depthWrite:!1}),m=new I(new Tn(p,8,.18,4,!1),f);ct.add(m),fo.push({tube:x,glow:m,mat:g,glowMat:f,timer:0})}}for(let c=0;c<fo.length;c++){const h=fo[c];h.timer+=s;const u=Math.min(h.timer/.5,1),d=Math.sin(t*3+c*.5)*.5+.5;h.mat.opacity=u*(.6+d*.4),h.glowMat.opacity=u*(.2+d*.15)}let l=0;Hn>=3&&Hn<6?l=(Hn-3)/3:Hn>=6&&Hn<10?(l=1,qd||(vS(),qd=!0,console.log("✦ Trees + ground transformed"))):Hn>=10&&Hn<13&&(l=1-(Hn-10)/3),So&&(So.style.opacity=l)}}function Il(){return Qi+we+3}function xS(){So||(So=document.createElement("div"),So.style.cssText="position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;opacity:0;pointer-events:none;z-index:9999;",document.body.appendChild(So))}function vS(){if(e1(),_o&&_o.material){_o.material.emissive.set(2099264),_o.material.emissiveIntensity=.3;const s=_o.geometry.attributes.color;if(s){const t=s.array;for(let e=0;e<t.length;e+=3){const n=t[e],i=t[e+1],o=t[e+2];t[e]=n*.5+o*.3,t[e+1]=i*.15,t[e+2]=o*.7+i*.4}s.needsUpdate=!0}}}const _S=600;let Da=.25,Se=1,Yd=.85,De="NIGHT",yr=null,wr=null,fu=null,Sr=null,ja=null;const Zd=[{label:"DUSK",sky:new st(923685),fog:new st(791584),fogDensity:.009,moonInt:.6,moonCol:new st(14527112),moonElev:15,ambSky:new st(4469589),ambGnd:new st(2238488),ambInt:.6,stars:.4,bio:.7,plRange:16,plInt:.5},{label:"NIGHT",sky:new st(330264),fog:new st(528408),fogDensity:.01,moonInt:1,moonCol:new st(12307694),moonElev:55,ambSky:new st(3359846),ambGnd:new st(1587232),ambInt:.7,stars:.85,bio:1,plRange:18,plInt:.55},{label:"DEEP_NIGHT",sky:new st(198160),fog:new st(397332),fogDensity:.012,moonInt:.55,moonCol:new st(8952251),moonElev:75,ambSky:new st(1712708),ambGnd:new st(1188888),ambInt:.5,stars:1,bio:1.5,plRange:22,plInt:.7},{label:"DAWN",sky:new st(1187888),fog:new st(923688),fogDensity:.011,moonInt:.5,moonCol:new st(13417386),moonElev:20,ambSky:new st(3354197),ambGnd:new st(1843224),ambInt:.55,stars:.35,bio:.65,plRange:17,plInt:.5}],ji=new st,$d=new st;function MS(s){yr=s.scene,wr=s.moon,fu=s.moon2,Sr=s.hemiLight,ja=s.playerLight}function yS(s){if(!yr)return;Da=(Da+s/_S)%1;const t=Da*4,e=Math.floor(t)%4,n=(e+1)%4,i=t-Math.floor(t),o=.5-.5*Math.cos(i*Math.PI),r=Zd[e],a=Zd[n];De=o<.5?r.label:a.label;const l=(c,h)=>c+(h-c)*o;if(ji.copy(r.sky).lerp(a.sky,o),yr.background.copy(ji),ji.copy(r.fog).lerp(a.fog,o),yr.fog.color.copy(ji),yr.fog.density=l(r.fogDensity,a.fogDensity),wr){ji.copy(r.moonCol).lerp(a.moonCol,o),wr.color.copy(ji),wr.intensity=l(r.moonInt,a.moonInt);const c=Da*Math.PI*2,h=l(r.moonElev,a.moonElev)*Math.PI/180,u=60;wr.position.set(Math.cos(c)*Math.cos(h)*u,Math.sin(h)*u,Math.sin(c)*Math.cos(h)*u)}if(fu){const c=l(r.moonInt,a.moonInt)/.85;fu.intensity=.3*c}Sr&&(ji.copy(r.ambSky).lerp(a.ambSky,o),$d.copy(r.ambGnd).lerp(a.ambGnd,o),Sr.color.copy(ji),Sr.groundColor.copy($d),Sr.intensity=l(r.ambInt,a.ambInt)),ja&&(ja.distance=l(r.plRange,a.plRange),ja.intensity=l(r.plInt,a.plInt)),Yd=l(r.stars,a.stars),Bw(Yd),Se=l(r.bio,a.bio)}let Ls=0,To=0,ki=0,zo="CLEAR",Vi=!1,ui=0;const Ka={CLEAR:{fogMult:1,windBase:.3,rainRate:0,skyDarken:0,mistCount:0,duration:[90,180]},MISTY:{fogMult:1.8,windBase:.2,rainRate:0,skyDarken:.05,mistCount:6,duration:[60,150]},LIGHT_RAIN:{fogMult:1.3,windBase:.6,rainRate:.3,skyDarken:.1,mistCount:2,duration:[60,120]},HEAVY_RAIN:{fogMult:1.6,windBase:1,rainRate:.8,skyDarken:.2,mistCount:3,duration:[45,100]},FOG_BANK:{fogMult:2.5,windBase:.15,rainRate:0,skyDarken:.1,mistCount:8,duration:[60,120]},LUMINOUS_STORM:{fogMult:1.4,windBase:1.5,rainRate:.6,skyDarken:.15,mistCount:2,duration:[40,90]}},wS={CLEAR:{MISTY:.4,LIGHT_RAIN:.3,FOG_BANK:.2,LUMINOUS_STORM:.1},MISTY:{CLEAR:.3,LIGHT_RAIN:.3,FOG_BANK:.3,HEAVY_RAIN:.1},LIGHT_RAIN:{CLEAR:.2,MISTY:.2,HEAVY_RAIN:.4,LUMINOUS_STORM:.2},HEAVY_RAIN:{LIGHT_RAIN:.4,LUMINOUS_STORM:.3,MISTY:.2,CLEAR:.1},FOG_BANK:{MISTY:.4,CLEAR:.3,LIGHT_RAIN:.2,LUMINOUS_STORM:.1},LUMINOUS_STORM:{HEAVY_RAIN:.3,MISTY:.3,CLEAR:.2,LIGHT_RAIN:.2}};let Mo="CLEAR",po=null,Ja=0,Ua=0,Ll=0,Na=!1,za=0,Dl=Math.random()*Math.PI*2,Ul=0,Nl=0;const du=[],SS=8;let jd=!1,zl=0,Fa=1,Qa=0,Oa=0,Fl=0;function bS(){const s=wS[Mo],t=Object.entries(s);let e=0;for(const[,i]of t)e+=i;let n=Math.random()*e;for(const[i,o]of t)if(n-=o,n<=0)return i;return t[0][0]}function TS(){if(jd)return;const s=document.createElement("canvas");s.width=128,s.height=64;const t=s.getContext("2d"),e=t.createRadialGradient(64,32,0,64,32,64);e.addColorStop(0,"rgba(255,255,255,0.5)"),e.addColorStop(.3,"rgba(255,255,255,0.25)"),e.addColorStop(.7,"rgba(255,255,255,0.06)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,64);const n=new Cc(s),i=new xe(40,14);for(let o=0;o<SS;o++){const r=new Y({map:n,color:5596791,transparent:!0,opacity:0,side:Dt,depthWrite:!1}),a=new I(i,r);a.visible=!1,ct.add(a),du.push({mesh:a,mat:r,active:!1,drift:Math.random()*Math.PI*2,speed:.3+Math.random()*.4,baseY:.8+Math.random()*2,wobble:Math.random()*Math.PI*2})}jd=!0}function ES(){TS();const s=Ka.CLEAR.duration;Ja=s[0]+Math.random()*(s[1]-s[0])}function AS(s,t,e){if(Na)if(Ua-=s,Ua<=0){Mo=po,po=null,Na=!1;const o=Ka[Mo].duration;Ja=o[0]+Math.random()*(o[1]-o[0]),za=0}else za=1-Ua/Ll;else Ja-=s,Ja<=0&&(po=bS(),Na=!0,Ll=30+Math.random()*60,Ua=Ll,za=0);const n=Ka[Mo];if(Na&&po){const o=Ka[po],r=.5-.5*Math.cos(za*Math.PI),a=(l,c)=>l+(c-l)*r;Fa=a(n.fogMult,o.fogMult),Qa=a(n.rainRate,o.rainRate),Oa=a(n.skyDarken,o.skyDarken),Fl=a(n.mistCount,o.mistCount),ki=a(n.windBase,o.windBase),zo=r<.5?Mo:po}else Fa=n.fogMult,Qa=n.rainRate,Oa=n.skyDarken,Fl=n.mistCount,ki=n.windBase,zo=Mo;Vi=zo==="LUMINOUS_STORM",Dl+=(Math.sin(t*.05)*.2+Math.sin(t*.13)*.1)*s,Ul-=s,Ul<=0&&(Ul=2+Math.random()*6,Nl=Math.random()*.8),Nl*=Math.pow(.3,s);const i=ki+Nl;if(Ls=Math.cos(Dl)*i,To=Math.sin(Dl)*i,ct.fog.density*=Fa,Oa>.001){const o=ct.background,r=1-Oa;o.r*=r,o.g*=r,o.b*=r}if(e){const o=Math.round(Fl);for(let r=0;r<du.length;r++){const a=du[r];if(r<o){a.active||(a.active=!0,a.mesh.visible=!0,a.drift=Math.random()*Math.PI*2);const l=10+Math.sin(t*.3+a.wobble)*8,c=a.drift+t*a.speed*.05;a.mesh.position.set(e.x+Math.cos(c)*l,a.baseY+Math.sin(t*.4+a.wobble)*.5,e.z+Math.sin(c)*l),a.mesh.rotation.y=c+Math.PI/2,a.drift+=Ls*s*.02;const h=.03+Fa*.012;a.mat.opacity+=(h-a.mat.opacity)*s*2}else a.active&&(a.mat.opacity-=s*.5,a.mat.opacity<=.005&&(a.active=!1,a.mesh.visible=!1,a.mat.opacity=0))}}return Vi&&(zl-=s,zl<=0&&(zl=1+Math.random()*4,ui=1)),ui*=Math.pow(.02,s),ui<.01&&(ui=0),Qa}function Ir(){return Qa}const oi=300,dr=new Float32Array(oi),pr=new Float32Array(oi),mr=new Float32Array(oi),Ol=new Float32Array(oi),Bl=new Float32Array(oi),Gl=new Float32Array(oi),Es=new Float32Array(oi),Un=new Float32Array(oi*6);let Ds=null,pu=null;function RS(){const s=new Me;s.setAttribute("position",new ze(Un,3)),pu=new Nu({color:8952251,transparent:!0,opacity:.3,depthWrite:!1}),Ds=new Eg(s,pu),Ds.frustumCulled=!1,Ds.visible=!1,ct.add(Ds);for(let t=0;t<oi;t++)Es[t]=0,N0(t)}function N0(s){const t=s*6;Un[t]=0,Un[t+1]=-100,Un[t+2]=0,Un[t+3]=0,Un[t+4]=-100,Un[t+5]=0}function CS(s,t,e,n,i){if(!Ds)return;const o=e>.01;if(Ds.visible=o,!o)return;pu.opacity=Math.min(.15+e*.35,.5);const r=Math.floor(e*12*s*60);for(let l=0;l<r;l++){let c=-1;for(let d=0;d<oi;d++)if(Es[d]<=0){c=d;break}if(c===-1)break;const h=Math.random()*Math.PI*2,u=Math.random()*30;dr[c]=t.x+Math.cos(h)*u,pr[c]=12+Math.random()*10,mr[c]=t.z+Math.sin(h)*u,Ol[c]=n*2+(Math.random()-.5)*.3,Bl[c]=-12-Math.random()*8,Gl[c]=i*2+(Math.random()-.5)*.3,Es[c]=2+Math.random()*1.5}const a=.06;for(let l=0;l<oi;l++){if(Es[l]<=0)continue;if(Es[l]-=s,Es[l]<=0||pr[l]<Zt(dr[l],mr[l])+.1){Es[l]=0,N0(l);continue}dr[l]+=Ol[l]*s,pr[l]+=Bl[l]*s,mr[l]+=Gl[l]*s;const c=l*6;Un[c]=dr[l],Un[c+1]=pr[l],Un[c+2]=mr[l],Un[c+3]=dr[l]+Ol[l]*a,Un[c+4]=pr[l]+Bl[l]*a,Un[c+5]=mr[l]+Gl[l]*a}Ds.geometry.attributes.position.needsUpdate=!0}let ft=null,Oe=null,mu=null,Si=!1,cs=!1,Sc=null,kl=null,tc=null,PS=null,z0=null,IS=null,LS=null,F0=null,DS=null,O0=null,B0=null,US=null,G0=null,k0=null,Hl=0,NS=null,H0=null,zS=null;const Ui={jelly:0,puff:0,deer:0,moth:0};function Vl(s,t){const e=ft.sampleRate*t,n=ft.createBuffer(1,e,ft.sampleRate),i=n.getChannelData(0);if(s==="white")for(let r=0;r<e;r++)i[r]=Math.random()*2-1;else if(s==="brown"){let r=0;for(let a=0;a<e;a++){const l=Math.random()*2-1;i[a]=(r+.02*l)/1.02,r=i[a],i[a]*=1.8}}const o=Math.min(Math.floor(ft.sampleRate*.05),e>>1);for(let r=0;r<o;r++){const a=r/o;i[r]*=a,i[e-1-r]*=a}return n}function gr(s,t,e,n){const i=ft.createBufferSource();i.buffer=s,i.loop=!0;const o=ft.createGain();o.gain.value=t;const r=ft.createBiquadFilter();r.type="lowpass",r.frequency.value=e,r.Q.value=.5;const a=ft.createBiquadFilter();return a.type="highpass",a.frequency.value=n||40,a.Q.value=.5,i.connect(a).connect(r).connect(o).connect(Oe),i.start(),{node:i,gain:o,filter:r}}function FS(){const s=ft.createDelay(1);s.delayTime.value=.37;const t=ft.createDelay(1);t.delayTime.value=.53;const e=ft.createGain();e.gain.value=.2;const n=ft.createGain();n.gain.value=.15;const i=ft.createBiquadFilter();i.type="lowpass",i.frequency.value=2500;const o=ft.createBiquadFilter();o.type="lowpass",o.frequency.value=2e3;const r=ft.createBiquadFilter();r.type="highpass",r.frequency.value=120,r.Q.value=.5;const a=ft.createBiquadFilter();a.type="highpass",a.frequency.value=120,a.Q.value=.5;const l=ft.createGain();l.gain.value=.3,s.connect(i).connect(r).connect(e).connect(s),t.connect(o).connect(a).connect(n).connect(t),s.connect(l),t.connect(l),l.connect(Oe);const c=ft.createGain();c.gain.value=1,c.connect(s),c.connect(t),mu=c}function br(s,t,e){if(s.connect(t),mu&&e>0){const n=ft.createGain();n.gain.value=e,s.connect(n).connect(mu)}}function OS(){const s=()=>{if(!Si){try{ft=new(window.AudioContext||window.webkitAudioContext),Oe=ft.createGain(),Oe.gain.value=.35,Oe.connect(ft.destination),Sc=Vl("brown",8),kl=Vl("brown",5),tc=Vl("white",4),FS();const t=gr(Sc,.05,200,50);PS=t.node,z0=t.gain,IS=t.filter;const e=gr(kl,.03,350,80);LS=e.node,F0=e.gain;const n=gr(tc,0,400,60);DS=n.node,O0=n.gain,B0=n.filter;const i=gr(tc,0,2e3,80);US=i.node,G0=i.gain,k0=i.filter;const o=gr(kl,0,600,60);NS=o.node,H0=o.gain,zS=o.filter,Si=!0}catch(t){console.warn("Audio init failed:",t)}document.removeEventListener("click",s),document.removeEventListener("keydown",s),document.removeEventListener("touchstart",s)}};document.addEventListener("click",s),document.addEventListener("keydown",s),document.addEventListener("touchstart",s)}function BS(s,t,e,n,i,o,r,a){if(!Si||cs)return;const l=ft.currentTime,c=o==="DEEP_NIGHT"?.07:o==="DAWN"?.03:.05;z0.gain.linearRampToValueAtTime(c,l+.1),F0.gain.linearRampToValueAtTime(c*.6,l+.1);const h=Math.min(t*.12,.18),u=200+t*600;O0.gain.linearRampToValueAtTime(h,l+.1),B0.frequency.linearRampToValueAtTime(u,l+.1);const d=e*.15,p=1200+e*2e3;G0.gain.linearRampToValueAtTime(d,l+.1),k0.frequency.linearRampToValueAtTime(p,l+.1),i>.5&&Hl<=0&&(GS(),Hl=2+Math.random()*3),Hl-=s;let g=1/0;if(r&&a)for(let m=0;m<a.length;m++){const w=a[m].x-r.x,_=a[m].z-r.z,M=w*w+_*_;M<g&&(g=M)}const f=(g<225?1-Math.sqrt(g)/15:0)*.08;H0.gain.linearRampToValueAtTime(f,l+.1),Ui.jelly-=s,Ui.puff-=s,Ui.deer-=s,Ui.moth-=s}function GS(){if(!ft)return;const s=ft.currentTime,t=ft.createOscillator(),e=ft.createGain(),n=ft.createBiquadFilter();t.type="sawtooth",t.frequency.value=50+Math.random()*25,n.type="lowpass",n.frequency.value=120,n.Q.value=1,e.gain.setValueAtTime(.2,s),e.gain.exponentialRampToValueAtTime(.001,s+.8+Math.random()*.5),t.connect(n).connect(e).connect(Oe),t.start(),t.stop(s+1.5);const i=ft.createBufferSource();i.buffer=Sc;const o=ft.createGain(),r=ft.createBiquadFilter();r.type="lowpass",r.frequency.value=120;const a=ft.createBiquadFilter();a.type="highpass",a.frequency.value=45,a.Q.value=.5,o.gain.setValueAtTime(.15,s),o.gain.exponentialRampToValueAtTime(.001,s+1.2),i.connect(a).connect(r).connect(o).connect(Oe),i.start(),i.stop(s+1.5)}function Gs(s,t,e){if(!Si||cs||Ui[s]>0)return;const n=t.x-e.x,i=t.z-e.z,o=n*n+i*i;if(o>900)return;const r=Math.sqrt(o),a=Math.max(0,1-r/30)*.1,l=Math.max(-1,Math.min(1,n/Math.max(r,1))),c=ft.createStereoPanner();c.pan.value=l;const h=ft.currentTime;switch(s){case"jelly":{const u=360+Math.random()*60,d=ft.createOscillator(),p=ft.createOscillator();d.type="sine",p.type="sine",d.frequency.setValueAtTime(u,h),p.frequency.setValueAtTime(u+3,h),d.frequency.linearRampToValueAtTime(u-40,h+1.2),p.frequency.linearRampToValueAtTime(u-37,h+1.2);const g=ft.createOscillator(),x=ft.createGain();g.frequency.value=4,x.gain.value=5,g.connect(x),x.connect(d.frequency),x.connect(p.frequency);const f=ft.createGain();f.gain.setValueAtTime(0,h),f.gain.linearRampToValueAtTime(a,h+.15),f.gain.setValueAtTime(a,h+.6),f.gain.exponentialRampToValueAtTime(.001,h+1.4),d.connect(f),p.connect(f),f.connect(c),br(c,Oe,.4),g.start(h),d.start(h),p.start(h),g.stop(h+1.5),d.stop(h+1.5),p.stop(h+1.5),Ui.jelly=4+Math.random()*5;break}case"puff":{const u=500+Math.random()*100,d=[u,u*1.2,u*1.5];for(let p=0;p<d.length;p++){const g=ft.createOscillator();g.type="sine",g.frequency.value=d[p];const x=ft.createGain(),f=h+p*.07;x.gain.setValueAtTime(0,f),x.gain.linearRampToValueAtTime(a*.5,f+.02),x.gain.exponentialRampToValueAtTime(.001,f+.15),g.connect(x).connect(c),g.start(f),g.stop(f+.18)}br(c,Oe,.3),Ui.puff=8+Math.random()*10;break}case"deer":{const u=100+Math.random()*30,d=ft.createOscillator(),p=ft.createOscillator();d.type="triangle",p.type="triangle",d.frequency.setValueAtTime(u,h),p.frequency.setValueAtTime(u+2,h),d.frequency.linearRampToValueAtTime(u-15,h+.5),p.frequency.linearRampToValueAtTime(u-13,h+.5);const g=ft.createBiquadFilter();g.type="lowpass",g.frequency.value=250,g.Q.value=.5;const x=ft.createGain();x.gain.setValueAtTime(0,h),x.gain.linearRampToValueAtTime(a*.7,h+.12),x.gain.setValueAtTime(a*.7,h+.3),x.gain.exponentialRampToValueAtTime(.001,h+.6),d.connect(g),p.connect(g),g.connect(x).connect(c),br(c,Oe,.3),d.start(h),p.start(h),d.stop(h+.7),p.stop(h+.7),Ui.deer=5+Math.random()*6;break}case"moth":{const u=ft.createOscillator();u.type="sine",u.frequency.setValueAtTime(200+Math.random()*80,h);const d=ft.createOscillator(),p=ft.createGain();d.frequency.value=8+Math.random()*4,p.gain.value=12,d.connect(p).connect(u.frequency);const g=ft.createGain();g.gain.setValueAtTime(0,h),g.gain.linearRampToValueAtTime(a*.2,h+.05),g.gain.exponentialRampToValueAtTime(.001,h+.25),u.connect(g).connect(c),br(c,Oe,.2),d.start(h),u.start(h),d.stop(h+.3),u.stop(h+.3),Ui.moth=4+Math.random()*5;break}}}let bc=0;function kS(s,t){if(!Si||cs||bc>0)return;const e=ft.currentTime;if(t){const n=ft.createBufferSource();n.buffer=tc;const i=ft.createGain(),o=ft.createBiquadFilter();o.type="bandpass",o.frequency.value=2e3,o.Q.value=.5,i.gain.setValueAtTime(.05,e),i.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(o).connect(i).connect(Oe),n.start(),n.stop(e+.15)}else{const n=ft.createOscillator();n.type="sine",n.frequency.value=80+Math.random()*40;const i=ft.createGain();i.gain.setValueAtTime(.03,e),i.gain.exponentialRampToValueAtTime(.001,e+.08),n.connect(i).connect(Oe),n.start(),n.stop(e+.1)}bc=s?.22:.35}function HS(){if(!Si||cs)return;const s=ft.currentTime,t=ft.createOscillator();t.type="sine",t.frequency.setValueAtTime(150,s),t.frequency.exponentialRampToValueAtTime(300,s+.1);const e=ft.createGain();e.gain.setValueAtTime(.03,s),e.gain.exponentialRampToValueAtTime(.001,s+.15),t.connect(e).connect(Oe),t.start(),t.stop(s+.2)}function VS(s){if(!Si||cs)return;const t=ft.currentTime,e=ft.createBufferSource();e.buffer=Sc;const n=ft.createGain(),i=ft.createBiquadFilter();i.type="lowpass",i.frequency.value=200;const o=ft.createBiquadFilter();o.type="highpass",o.frequency.value=50,o.Q.value=.5,n.gain.setValueAtTime(s*.05,t),n.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(o).connect(i).connect(n).connect(Oe),e.start(),e.stop(t+.25)}function WS(s){bc>0&&(bc-=s)}function XS(s,t){if(!Si||cs)return;const e=s.x-t.x,n=s.z-t.z,i=e*e+n*n;if(i>400)return;const o=Math.max(0,1-Math.sqrt(i)/20)*.06,r=ft.currentTime,a=ft.createOscillator();a.type="sine",a.frequency.setValueAtTime(600+Math.random()*300,r),a.frequency.exponentialRampToValueAtTime(200,r+.1);const l=ft.createGain();l.gain.setValueAtTime(o,r),l.gain.exponentialRampToValueAtTime(.001,r+.12),a.connect(l).connect(Oe),a.start(),a.stop(r+.15)}function qS(){if(!Si||cs)return;const s=ft.currentTime,t=ft.createOscillator();t.type="sine",t.frequency.setValueAtTime(400,s),t.frequency.exponentialRampToValueAtTime(900,s+.15);const e=ft.createGain();e.gain.setValueAtTime(.06,s),e.gain.exponentialRampToValueAtTime(.001,s+.5),t.connect(e),br(e,Oe,.4),t.start(),t.stop(s+.6)}let V0=null,W0=null,X0=null,Wl=0,Kd=0,Ba=0,Xl=0,Jd=1,gu=!1;function YS(){if(gu||!ft)return;gu=!0;const s=ft.createGain();s.gain.value=0;const t=ft.createOscillator();t.type="sine",t.frequency.value=160;const e=ft.createOscillator();e.type="sine",e.frequency.value=190;const n=ft.createBiquadFilter();n.type="lowpass",n.frequency.value=350,n.Q.value=.5,t.connect(n).connect(s),e.connect(n),s.connect(Oe),t.start(),e.start(),V0=t,W0=e,X0=s}function ZS(s){if(!ft||s<.001)return;const t=ft.currentTime,e=1800+Math.random()*800,n=ft.createOscillator();n.type="sine",n.frequency.value=e,n.frequency.exponentialRampToValueAtTime(e*.88,t+.1);const i=ft.createGain();i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(s*.5,t+.01),i.gain.exponentialRampToValueAtTime(.001,t+.1),n.connect(i).connect(Oe),n.start(t),n.stop(t+.12)}function $S(s,t,e,n,i,o){if(!Si||cs||(YS(),!gu))return;const r=ft.currentTime,a=i==="DEEP_NIGHT"||i==="NIGHT"?1:i==="DUSK"?.5:.3;Jd=i==="DUSK"||i==="NIGHT"?1:i==="DEEP_NIGHT"?.6:.3;const l=Math.max(.15,1-o*.7);let c=1/0;if(t&&e)for(let x=0;x<e.length;x++){const f=e[x].x-t.x,m=e[x].z-t.z,w=f*f+m*m;w<c&&(c=w)}const h=c<400?1-Math.sqrt(c)/20:0;Kd+=s*2;const u=.7+.3*Math.sin(Kd*Math.PI*2),d=h*.025*a*l*u;if(X0.gain.linearRampToValueAtTime(d,r+.15),Wl+=s,Wl>3+Math.random()*4){Wl=0;const x=150+Math.random()*40;V0.frequency.linearRampToValueAtTime(x,r+.5),W0.frequency.linearRampToValueAtTime(x+20+Math.random()*15,r+.5)}let p=1/0;if(t&&n)for(let x=0;x<n.length;x++){const f=n[x].cx-t.x,m=n[x].cz-t.z,w=f*f+m*m;w<p&&(p=w)}const g=p<144?1-Math.sqrt(p)/12:0;if(Xl=g*.02*Jd*l,Xl>.001){if(Ba-=s,Ba<=0){ZS(Xl);const x=1.5+(1-g)*1.5;Ba=x+Math.random()*x}}else Ba=0}function jS(s,t,e,n,i){const o=e.x-s.x,r=e.z-s.z,a=o*o+r*r;if(a>n*n)return!1;if(a<.01)return!0;let c=Math.atan2(r,o)-t;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;return Math.abs(c)<i*.5}function KS(s,t,e,n){const i=t.x-s.x,o=t.z-s.z,r=n?e*1.8:e;return i*i+o*o<r*r}function q0(s,t,e){let n=0,i=0,o=0;for(let r=0;r<t.length;r++){const a=t[r],l=s.x-a.x,c=s.z-a.z,h=l*l+c*c;if(h>.01&&h<e*e){const u=Math.sqrt(h);n+=l/u/u,i+=c/u/u,o++}}return o>0&&(n/=o,i/=o),{x:n,z:i}}function Y0(s,t){if(t.length===0)return{x:0,z:0};let e=0,n=0;for(let i=0;i<t.length;i++)e+=t[i].x,n+=t[i].z;return e/=t.length,n/=t.length,{x:e-s.x,z:n-s.z}}function JS(s,t){const e=Math.sqrt(s.x*s.x+s.z*s.z),n=ce-t;if(e<n)return{x:0,z:0};const i=(e-n)/t,o=Math.min(i*2,3);return{x:-s.x/e*o,z:-s.z/e*o}}function QS(s,t,e,n,i){let o=0,r=0;const a=Math.cos(t)*n,l=Math.sin(t)*n,c=s.x+a,h=s.z+l;for(let u=0;u<e.length;u++){const d=e[u],p=c-d.x,g=h-d.z,x=p*p+g*g,f=(d.colR||i)+1;if(x<f*f&&x>.01){const m=Math.sqrt(x),w=(f-m)/f*2;o+=p/m*w,r+=g/m*w}}return{x:o,z:r}}const Di={deer:!1,puffling:!1,jelly:!1,moth:!1,fairyRing:!1,crystalChain:!1,pond:!1},tb={deer:"Spirit Deer",puffling:"Puffling",jelly:"Luminous Jelly",moth:"Moon Moth",fairyRing:"Fairy Ring",crystalChain:"Crystal Resonance",pond:"Moonlit Pond"};let zi=null,ec=0,Qd="";function eb(){zi=document.createElement("div"),zi.id="discovery-text",zi.style.cssText="position:fixed;top:28%;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:22px;color:#ccffee;text-shadow:0 0 12px #44ffaa,0 0 30px #228866;pointer-events:none;opacity:0;transition:opacity 0.6s;z-index:100;letter-spacing:3px;text-transform:uppercase;",document.body.appendChild(zi)}function xs(s){Di[s]||(Di[s]=!0,Qd=tb[s],ec=3,zi&&(zi.textContent=Qd,zi.style.opacity="1"))}function nb(s,t,e,n,i,o,r,a){const l=s.x,c=s.z;if(!Di.deer)for(let h=0;h<t.length;h++){const u=t[h].group.position.x-l,d=t[h].group.position.z-c;if(u*u+d*d<144){xs("deer");break}}if(!Di.puffling)for(let h=0;h<e.length;h++){const u=e[h].group.position.x-l,d=e[h].group.position.z-c;if(u*u+d*d<64){xs("puffling");break}}if(!Di.jelly)for(let h=0;h<n.length;h++){const u=n[h].group.position.x-l,d=n[h].group.position.z-c;if(u*u+d*d<100){xs("jelly");break}}if(!Di.moth)for(let h=0;h<i.length;h++){const u=i[h].group.position.x-l,d=i[h].group.position.z-c;if(u*u+d*d<64){xs("moth");break}}if(!Di.fairyRing)for(let h=0;h<o.length;h++){const u=o[h].x-l,d=o[h].z-c;if(u*u+d*d<16){xs("fairyRing");break}}if(!Di.pond)for(let h=0;h<r.length;h++){const u=r[h].x-l,d=r[h].z-c;if(u*u+d*d<25){xs("pond");break}}!Di.crystalChain&&a>=3&&xs("crystalChain")}function ib(s){ec>0&&(ec-=s,ec<=.6&&zi&&(zi.style.opacity="0"))}let xu=null,ql=60;const sb={DUSK:"Dusk",NIGHT:"Night",DEEP_NIGHT:"Deep Night",DAWN:"Dawn"},ob={CLEAR:"Clear",MISTY:"Misty",LIGHT_RAIN:"Light Rain",HEAVY_RAIN:"Heavy Rain",FOG_BANK:"Fog",LUMINOUS_STORM:"Storm"};function rb(){xu=document.getElementById("hud")}function ab(s,t){if(!xu)return;ql=ql*.95+1/Math.max(s,.001)*.05;const e=Ye==="SEEK"?"Seek the orbs...":Ye==="RISING"?"The obelisk stirs...":Ye==="COMPLETE"?"Convergence!":"Luminaries",n=sb[De]||"Night",i=ob[zo]||"Clear";xu.innerHTML="<b>"+e+"</b> · "+n+" · "+i+" · FPS:"+Math.round(ql)+"<br>Pos:"+t.x.toFixed(0)+","+t.z.toFixed(0)}let Tc=null;function cb(){Tc=document.getElementById("orb-hud")}function lb(){return Tc}function hb(){const s=document.getElementById("overlay");s&&(s.style.opacity="0",setTimeout(()=>{try{s.remove()}catch{}},2500)),Tc&&(Tc.style.display="block")}const _e=[],An=[],ie=[],fi=[],Ln=[],Xe=[],Zo=[],Z0=[],kr=[],Mi=[],vu=[],Ec=[],Ac=[],Lr=[],gi=[],di=[],Fe=[],zn=[],_u=[],Mu=[],$0=[],Ki=[];let tp=0,ep=0,Yl=0,Xn=null,li=0;const yu=15,wu=[];let np=!1;function ub(){if(np)return;np=!0;const s=new Nu({color:F.crystal,transparent:!0,opacity:0,blending:le,depthWrite:!1});for(let t=0;t<yu;t++){const e=new Me,n=new Float32Array(6);e.setAttribute("position",new ze(n,3)),e.attributes.position.setUsage(Re);const i=new Ip(e,s.clone());i.visible=!1,ct.add(i),wu.push({line:i,geo:e,opacity:0,active:!1})}}let vs=null;function fb(){if(vs)return vs;const s=new Xo(.9,1,48),t=new Y({color:F.echoBloom,transparent:!0,opacity:.5,side:Dt,depthWrite:!1,blending:le});return vs=new I(s,t),vs.rotation.x=-Math.PI/2,vs.visible=!1,ct.add(vs),vs}const We=[];function rn(s,t){for(let e=0;e<We.length;e++){const n=We[e].x-s,i=We[e].z-t;if(n*n+i*i<We[e].r2)return!0}return!1}function db(){Kw();for(let t=0;t<Yy;t++){let e,n,i=!1;for(let o=0;o<20;o++){const r=S()*6.28,a=5+S()*(ce-10);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let l=0;l<_e.length;l++){const c=_e[l].x-e,h=_e[l].z-n;if(c*c+h*h<9){i=!1;break}}if(i)break}if(i){const o=Zt(e,n);_e.push({x:e,z:n,groundY:o}),We.push({x:e,z:n,r2:4})}}Jw(_e);for(let t=0;t<_e.length;t++){const e=_e[t],n=Zw(e.treeH,e.groundY);n.position.x=e.x,n.position.z=e.z,e.impostor=n}for(let t=0;t<rw;t++){let e,n,i=!1;for(let o=0;o<20;o++){const r=S()*6.28,a=10+S()*(ce*.6);if(e=Math.cos(r)*a,n=Math.sin(r)*a,i=!rn(e,n),i)break}if(i){Yh(e,n,4);const o=S1(e,n);o.group.position.y=Zt(e,n),gi.push(o),We.push({x:e,z:n,r2:25})}}for(let t=0;t<lw;t++){let e,n,i=!1;for(let o=0;o<20;o++){const r=S()*6.28,a=8+S()*(ce*.6);if(e=Math.cos(r)*a,n=Math.sin(r)*a,i=!rn(e,n),i)break}if(i){Yh(e,n,3);const o=T1(e,n);o.group.position.y=Zt(e,n),Fe.push(o),We.push({x:e,z:n,r2:16})}}for(let t=0;t<Zy;t++){const e=_e[Math.floor(S()*_e.length)],n=S()*6.28,i=1+S()*4,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i;if(rn(o,r))continue;const a=n1(o,r);a.group.position.y=Zt(o,r),An.push(a),We.push({x:o,z:r,r2:1})}for(let t=0;t<$y;t++){const e=S()*6.28,n=8+S()*ce*.6,i=Math.cos(e)*n,o=Math.sin(e)*n;if(rn(i,o))continue;const r=i1(i,o);r.group.position.y=Zt(i,o),ie.push(r),We.push({x:i,z:o,r2:4})}for(let t=0;t<jy;t++){const e=S()*6.28,n=10+S()*ce*.5,i=Math.cos(e)*n,o=Math.sin(e)*n;fi.push(v1(i,Zt(i,o)+3+S()*5,o))}for(let t=0;t<Ky;t++){const e=An[Math.floor(S()*An.length)],n=S()*6.28,i=1+S()*5,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i;if(rn(o,r))continue;const a=_1(o,r);a.group.position.y=Zt(o,r),a._baseY=Zt(o,r),Ln.push(a)}for(let t=0;t<Jy;t++){const e=S()*6.28,n=12+S()*ce*.5,i=Math.cos(e)*n,o=Math.sin(e)*n;if(rn(i,o))continue;const r=M1(i,o),a=Zt(i,o);r.group.position.y=a,r._baseY=a,Xe.push(r)}for(let t=0;t<Qy;t++){const e=_e[Math.floor(S()*_e.length)];Zo.push(y1(e.x,Zt(e.x,e.z)+2+S()*4,e.z))}const s=[null,F.grassPurple,F.grassBlue,F.grassTeal];for(let t=0;t<tw;t++){const e=S()*6.28,n=2+S()*(ce*.9),i=Math.cos(e)*n,o=Math.sin(e)*n,r=s[Math.floor(S()*s.length)],a=2+S()*2.5,l=25+Math.floor(S()*20);if(rn(i,o))continue;const c=o1(i,o,a,l,r);c.mesh.position.y=Zt(i,o),Z0.push(c),We.push({x:i,z:o,r2:a*a})}for(let t=0;t<sw;t++){let e,n,i=!1;for(let o=0;o<10;o++){const r=S()*6.28,a=3+S()*(ce*.85);if(e=Math.cos(r)*a,n=Math.sin(r)*a,i=!rn(e,n),i)break}if(i){const o=A1(e,n);o.group.position.y=Zt(e,n)-.08,Ec.push(o),We.push({x:e,z:n,r2:2.25})}}for(let t=0;t<ew;t++){const e=_e[Math.floor(S()*_e.length)],n=S()*6.28,i=1+S()*5,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i;if(rn(o,r))continue;const a=r1(o,r);a.group.position.y=Zt(o,r),kr.push(a),We.push({x:o,z:r,r2:1})}for(let t=0;t<nw;t++){const e=S()*6.28,n=3+S()*(ce*.7),i=Math.cos(e)*n,o=Math.sin(e)*n;if(rn(i,o))continue;const r=a1(i,o);r.group.position.y=Zt(i,o),Mi.push(r),We.push({x:i,z:o,r2:1})}for(let t=0;t<iw;t++){const e=S()*6.28,n=4+S()*(ce*.8),i=Math.cos(e)*n,o=Math.sin(e)*n;if(rn(i,o))continue;const r=c1(i,o);r.group.position.y=Zt(i,o),vu.push(r),We.push({x:i,z:o,r2:1})}for(let t=0;t<go;t++){let e,n,i=!1;for(let o=0;o<30;o++){const r=S()*6.28,a=20+S()*(ce*.6);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let l=0;l<zn.length;l++){const c=zn[l].x-e,h=zn[l].z-n;if(c*c+h*h<225){i=!1;break}}if(i)break}if(i){const o=E1(e,n);o.group.position.y=Zt(e,n)+1,o.flyY=Zt(e,n)+1,zn.push(o)}}for(let t=0;t<$p;t++){const e=S()*6.28,n=2+S()*3,i=Math.cos(e)*n,o=Math.sin(e)*n;Ac.push(w1(i,Zt(i,o)+1+S()*.5,o))}for(let t=0;t<ow;t++){const e=S()*6.28,n=4+S()*(ce*.7),i=Math.cos(e)*n,o=Math.sin(e)*n;if(rn(i,o))continue;const r=f1(i,o);r.group.position.y=Zt(i,o),Lr.push(r),We.push({x:i,z:o,r2:1})}for(let t=0;t<aw;t++){const e=S()*6.28,n=5+S()*ce*.6,i=Math.cos(e)*n,o=Math.sin(e)*n;di.push(b1(i,Zt(i,o)+.5+S()*5,o))}for(let t=0;t<hw;t++){const e=S()*6.28,n=5+S()*(ce*.7),i=Math.cos(e)*n,o=Math.sin(e)*n;if(rn(i,o))continue;const r=p1(i,o);r.group.position.y=Zt(i,o),_u.push(r),We.push({x:i,z:o,r2:2.25})}for(let t=0;t<uw;t++){const e=_e[Math.floor(S()*_e.length)],n=S()*6.28,i=2+S()*4,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i;if(rn(o,r))continue;const a=m1(o,r);a.group.position.y=Zt(o,r),Mu.push(a),We.push({x:o,z:r,r2:1})}for(let t=0;t<fw;t++){const e=S()*6.28,n=6+S()*(ce*.65),i=Math.cos(e)*n,o=Math.sin(e)*n;if(rn(i,o))continue;const r=g1(i,o);r.group.position.y=Zt(i,o),$0.push(r),We.push({x:i,z:o,r2:2.25})}}function j0(s,t){const e=1+ki*1.5,n=Ls*.03,i=To*.03,o=j.pos.x,r=j.pos.y,a=j.pos.z;t1(_e,o,r,a,t,e,n,i),s1(t,e,n,i,o,a);for(let l=0;l<kr.length;l++){const c=kr[l],h=c.group.position.x-o,u=c.group.position.y-r,d=c.group.position.z-a,p=h*h+u*u+d*d;if(p>1600){c.group.visible&&(c.group.visible=!1);continue}c.group.visible||(c.group.visible=!0),!(p>900)&&(c.group.rotation.z=Math.sin(t*.8+c.phase)*.03*e+n,c.group.rotation.x=Math.sin(t*.6+c.phase+1)*.02*e+i)}for(let l=0;l<Mi.length;l++){const c=Mi[l],h=c.group.position.x-o,u=c.group.position.y-r,d=c.group.position.z-a,p=h*h+u*u+d*d;if(p>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),p>900)continue;const g=Math.sin(t*1+c.phase)*.5+.5;c.petalMat.emissiveIntensity=(.3+g*.5)*Se,c.group.rotation.z=Math.sin(t*.9+c.phase)*.04*e+n*.5}for(let l=0;l<vu.length;l++){const c=vu[l],h=c.group.position.x-o,u=c.group.position.y-r,d=c.group.position.z-a,p=h*h+u*u+d*d;if(p>1600){c.group.visible&&(c.group.visible=!1);continue}c.group.visible||(c.group.visible=!0),!(p>900)&&(c.group.rotation.z=Math.sin(t*1.1+c.phase)*c.swayAmp*e+n,c.group.rotation.x=Math.sin(t*.8+c.phase+2)*c.swayAmp*.5*e+i)}for(let l=0;l<_u.length;l++){const c=_u[l],h=Math.sin(t*1.2+c.phase)*.5+.5;c.orbMat.emissiveIntensity=(.5+h*.5)*Se,c.hazeMat.opacity=(.04+h*.04)*Se,c.group.rotation.z=Math.sin(t*.5+c.phase)*.02*e+n*.3,c.group.rotation.x=Math.sin(t*.4+c.phase+1)*.015*e+i*.3}for(let l=0;l<Mu.length;l++){const c=Mu[l];for(let h=0;h<c.podMats.length;h++){const u=Math.sin(t*1.5+c.phase+h*1.8)*.5+.5;c.podMats[h].emissiveIntensity=(.3+u*.5)*Se}c.group.rotation.z=Math.sin(t*.35+c.phase)*.01*e+n*.2}x1($0,s,t,Se)}function K0(s,t){for(let n=0;n<fi.length;n++){const i=fi[n],o=i.group,r=o.position.x,a=o.position.z;i._syncPhase===void 0&&(i._syncPhase=i.phase);let l=0,c=0;for(let h=0;h<fi.length;h++){if(h===n)continue;const u=fi[h],d=u.group.position.x-r,p=u.group.position.z-a;d*d+p*p<225&&(l+=u._syncPhase||u.phase,c++)}if(c>0){const h=l/c;i._syncPhase+=(h-i._syncPhase)*s*.4}}const e=De==="DEEP_NIGHT"?2:De==="DAWN"?-1.5:0;for(let n=0;n<fi.length;n++){const i=fi[n],o=i.group,r=o.position.x,a=o.position.z,l=i.floatY+e;if(i._stT-=s,i._stT<=0)if(Vi)i._state="display",i._stT=10+Math.random()*15;else{const p=Math.random();p<.5?(i._state="drift",i._stT=20+Math.random()*30):p<.75?(i._state="pulse",i._stT=8+Math.random()*12):(i._state="migrate",i._migrateAng=Math.random()*6.28,i._stT=15+Math.random()*20)}switch(Vi&&i._state!=="display"&&(i._state="display",i._stT=10,Gs("jelly",{x:r,z:a},j.pos)),i._state){case"drift":{i.driftAng+=s*.15;const p=8+Math.sin(t*.1+i.phase)*4,g=i.homeX+Math.cos(i.driftAng)*p,x=i.homeZ+Math.sin(i.driftAng)*p;o.position.x+=(g-r)*s*.3,o.position.z+=(x-a)*s*.3,o.position.y=l+Math.sin(t*i.wobble+i.phase)*1.5;break}case"pulse":{i.driftAng+=s*.08,o.position.x+=Math.cos(i.driftAng)*s*.3,o.position.z+=Math.sin(i.driftAng)*s*.3,o.position.y=l+Math.sin(t*i.wobble+i.phase)*1,i._pulseSync=Math.sin(t*2+i._syncPhase)*.5+.5;break}case"migrate":{o.position.x+=Math.cos(i._migrateAng)*s*1,o.position.z+=Math.sin(i._migrateAng)*s*1,o.position.y=l+Math.sin(t*i.wobble+i.phase)*.8,o.position.x*o.position.x+o.position.z*o.position.z>ce*.8*(ce*.8)&&(i._migrateAng+=Math.PI);break}case"display":{i.driftAng+=s*.4,o.position.x+=Math.cos(i.driftAng)*s*.8,o.position.z+=Math.sin(i.driftAng)*s*.8,o.position.y=l+Math.sin(t*2+i.phase)*2,i._syncPhase+=(0-i._syncPhase)*s*2;break}}i._state==="pulse"&&Math.random()<.003&&Gs("jelly",{x:r,z:a},j.pos);const c=i._syncPhase||i.phase,h=Math.sin(t*1.2+c)*.5+.5;let u=1,d=0;if(i._state==="pulse")u=1+i._pulseSync*1.5,d=i._pulseSync*.15;else if(i._state==="display"){const p=Math.sin(t*4)*.5+.5;u=1.5+p*1.2,d=.15+p*.1}else i._state==="drift"&&(u=1+h*.3);i.bellMat.emissiveIntensity=(.4+h*.8)*Se*u,i.bellMat.opacity=.35+h*.25+d,o.rotation.y+=s*.2;for(let p=2;p<o.children.length;p++)o.children[p].rotation.x=Math.sin(t*2+p+c)*.15,o.children[p].rotation.z=Math.sin(t*1.5+p*.7+c)*.1}}function J0(s,t){const e=Le.ShiftLeft||Le.ShiftRight||Jo,n=De==="DAWN"?.6:De==="NIGHT"?1.3:1,i=De==="DAWN"?2:De==="NIGHT"?.6:1;for(let o=0;o<Ln.length;o++){const r=Ln[o],a=r.group,l=a.position.x,c=a.position.z,h=l-j.pos.x,u=c-j.pos.z,d=h*h+u*u;if(r.state!=="startled"&&r.state!=="following"&&r.state!=="huddle"){const T=e?3.5:2;let b=d<T*T;if(!b)for(let y=0;y<Xe.length;y++){if(Xe[y].state!=="flee")continue;const v=Xe[y].group.position.x-l,R=Xe[y].group.position.z-c;if(v*v+R*R<25){b=!0;break}}b&&(r.state="startled",r._scaredT=.6+Math.random()*.5,r.wanderAng=Math.atan2(h,u),r.hopTimer=0,Gs("puff",{x:l,z:c},j.pos))}if(Vi&&r.state!=="startled"&&r.state!=="huddle"){let T=1/0,b=-1;for(let y=0;y<Ln.length;y++){if(y===o)continue;const v=Ln[y].group.position.x-l,R=Ln[y].group.position.z-c,U=v*v+R*R;U<T&&(T=U,b=y)}b>=0&&T>1&&(r.state="huddle",r._huddleTarget=b)}Yo>8&&d<144&&r.state==="idle"&&Math.random()<.001&&(r.state="following",r._followT=10+Math.random()*10);const p=l-r._lastTX,g=c-r._lastTZ;p*p+g*g>.25&&(r._baseY=Zt(l,c),r._lastTX=l,r._lastTZ=c);const x={x:l,z:c},f=[];for(let T=0;T<Ln.length;T++){if(T===o)continue;const b=Ln[T].group.position.x,y=Ln[T].group.position.z;(b-l)*(b-l)+(y-c)*(y-c)<100&&f.push({x:b,z:y})}const m=q0(x,f,1.5),w=f.length>0?Y0(x,f):{x:0,z:0},_=m.x*2+w.x*.3,M=m.z*2+w.z*.3,A=Math.sqrt(_*_+M*M);switch(r.state){case"idle":{if(r.idleTimer-=s,a.position.y=r._baseY+Math.sin(t*2+r.phase)*.02,a.rotation.y+=Math.sin(t*.5+r.phase)*s*.3,A>.1&&f.length>1&&(a.position.x+=w.x*.05*s,a.position.z+=w.z*.05*s),Math.random()<2e-4&&Gs("puff",{x:l,z:c},j.pos),r.idleTimer<=0){const T=A>.2?Math.atan2(_,M):0;r.state="hop",r.wanderAng+=(Math.random()-.5)*1.5+T*.3,r.hopTimer=0}break}case"hop":{r.hopTimer+=s;const b=r.hopTimer/1.2;if(b>=1)r.state="idle",r.idleTimer=(1.5+Math.random()*3)*i,a.position.y=r._baseY;else{a.position.y=r._baseY+Math.sin(b*Math.PI)*.3,a.position.x+=Math.sin(r.wanderAng)*r.speed*n*s,a.position.z+=Math.cos(r.wanderAng)*r.speed*s;const y=1-Math.sin(b*Math.PI)*.15,v=1+Math.sin(b*Math.PI)*.2;a.scale.set(y,v,y),a.rotation.y=r.wanderAng}break}case"startled":{r._scaredT-=s,r.hopTimer+=s*1.5;const T=Math.min(r.hopTimer/.8,1);a.position.y=r._baseY+Math.sin(T*Math.PI)*.5,a.position.x+=Math.sin(r.wanderAng)*r.speed*2*s+m.x*.5*s,a.position.z+=Math.cos(r.wanderAng)*r.speed*2*s+m.z*.5*s,a.scale.set(.85,1.3,.85),r._scaredT<=0&&(r.state="idle",r.idleTimer=3+Math.random()*3,a.position.y=r._baseY,a.scale.set(1,1,1));break}case"following":{if(r._followT-=s,d>225||Yo<3||r._followT<=0){r.state="idle",r.idleTimer=2;break}if(r.wanderAng=Math.atan2(j.pos.x-l,j.pos.z-c),d>9){r.hopTimer+=s;const T=r.hopTimer%1.5/1.5;a.position.y=r._baseY+Math.sin(T*Math.PI)*.2,a.position.x+=Math.sin(r.wanderAng)*r.speed*.4*s,a.position.z+=Math.cos(r.wanderAng)*r.speed*.4*s}else a.position.y=r._baseY+Math.sin(t*3+r.phase)*.03;a.rotation.y=r.wanderAng;break}case"huddle":{if(!Vi){r.state="idle",r.idleTimer=2;break}const T=Ln[r._huddleTarget];if(T){const b=T.group.position.x-l,y=T.group.position.z-c,v=Math.sqrt(b*b+y*y);v>.5&&(a.position.x+=b/v*r.speed*.5*s,a.position.z+=y/v*r.speed*.5*s)}a.rotation.z=Math.sin(t*8)*.05,a.position.y=r._baseY;break}}if(r._blinkTimer-=s,r._blinkTimer<=0)if(r._blinkState===0){for(let T=0;T<r.eyes.length;T++)r.eyes[T].scale.y=.1;r._blinkState=1,r._blinkTimer=.08+Math.random()*.06}else{for(let T=0;T<r.eyes.length;T++)r.eyes[T].scale.y=1;r._blinkState=0,r._blinkTimer=2+Math.random()*5}for(let T=0;T<r.ears.length;T++){const b=r.ears[T];b.mesh.rotation.z=b.baseRotZ+Math.sin(t*3.5+b.side*1.2+r.phase)*.08}r.tail.position.y=.38+Math.sin(t*4+r.phase)*.015,a.position.x*a.position.x+a.position.z*a.position.z>ce*.85*(ce*.85)&&(r.wanderAng+=Math.PI)}}function Q0(s,t){const e=Le.ShiftLeft||Le.ShiftRight||Jo;for(let n=0;n<Xe.length;n++){const i=Xe[n],o=i.group,r=o.position.x,a=o.position.z,l=r-j.pos.x,c=a-j.pos.z,h=l*l+c*c,u=Math.atan2(l,c),d=e?18:12,p=d*d,g=e?10:mw,x=g*g,f=r-i._lastTX,m=a-i._lastTZ;f*f+m*m>.25&&(i._baseY=Zt(r,a),i._lastTX=r,i._lastTZ=a);const w=i._baseY;if(i.state!=="flee"&&i.state!=="alert"&&i.state!=="watching"){const v={x:r,z:a},R={x:j.pos.x,z:j.pos.z};h<x||KS(v,R,g,e)?(i.state="flee",i.wanderAng=u,i.fleeTimer=2.5+Math.random()*2,i._zigTimer=0,Gs("deer",v,j.pos)):(h<p||jS(v,i.wanderAng,R,d,Math.PI*.5))&&(i.state="alert",i._stT=1+Math.random()*1.5,Gs("deer",v,j.pos))}if(i.state!=="flee")for(let v=0;v<Xe.length;v++){if(v===n||Xe[v].state!=="flee")continue;const R=Xe[v].group.position.x-r,U=Xe[v].group.position.z-a;if(R*R+U*U<400){i.state="flee",i.wanderAng=Xe[v].wanderAng+(Math.random()-.5)*.4,i.fleeTimer=2+Math.random()*1.5,i._zigTimer=0;break}}const _=[];for(let v=0;v<Xe.length;v++){if(v===n)continue;const R=Xe[v].group.position.x,U=Xe[v].group.position.z;(R-r)*(R-r)+(U-a)*(U-a)<400&&_.push({x:R,z:U})}const M=q0({x:r,z:a},_,3),A=_.length>0?Y0({x:r,z:a},_):{x:0,z:0};(i.state==="alert"||i.state==="watching")&&(i.headLook+=(u-i.wanderAng)*.3*s);let E=i.speed,T=!1;switch(i.state){case"walk":{if(T=!0,i.walkTimer-=s,i.walkTimer<=0){const R=Math.random(),U=De==="DUSK"?.55:.4,L=De==="DEEP_NIGHT"?.25:.1;if(R<.25)i.state="pause",i.pauseTimer=2+Math.random()*3;else if(R<U)i.state="graze",i._stT=De==="DUSK"?5+Math.random()*6:3+Math.random()*4;else if(R<U+.1&&Fe.length>0){i.state="drink",i._stT=8;let z=1/0;for(let V=0;V<Fe.length;V++){const k=Fe[V].x-r,$=Fe[V].z-a,W=k*k+$*$;W<z&&(z=W,i._drinkTgt=Fe[V])}}else R<U+.1+L?(i.state="rest",i._stT=De==="DEEP_NIGHT"?8+Math.random()*8:5+Math.random()*5):(i.wanderAng+=(Math.random()-.5)*1.2,i.walkTimer=3+Math.random()*5)}if((r-i.homeX)*(r-i.homeX)+(a-i.homeZ)*(a-i.homeZ)>400){const R=Math.atan2(i.homeX-r,i.homeZ-a);i.wanderAng+=(R-i.wanderAng)*s*.5}if(_.length>0){const R=Math.atan2(A.x*.15+M.x*.8,A.z*.15+M.z*.8);i.wanderAng+=(R-i.wanderAng)*s*.3}break}case"pause":{i.pauseTimer-=s,i.headLook=Math.sin(t*.6)*.4,i.pauseTimer<=0&&(i.state="walk",i.walkTimer=3+Math.random()*5);break}case"graze":{i._stT-=s,i.headBob=-.5,i._stT<=0&&(i.state="walk",i.walkTimer=2+Math.random()*4,i.headBob=0);break}case"drink":{if(i._stT-=s,i._drinkTgt){const v=i._drinkTgt.x-r,R=i._drinkTgt.z-a;Math.sqrt(v*v+R*R)>2?(i.wanderAng=Math.atan2(v,R),T=!0,E=i.speed*.7):i.headBob=-.6}i._stT<=0&&(i.state="walk",i.walkTimer=3+Math.random()*4,i.headBob=0,i._drinkTgt=null);break}case"rest":{i._stT-=s,o.position.y=Math.max(w-.3,o.position.y-s*.5),i._stT<=0&&(i.state="walk",i.walkTimer=2+Math.random()*3);break}case"alert":{i._stT-=s,h<x?(i.state="flee",i.wanderAng=u,i.fleeTimer=2.5+Math.random()*2):i._stT<=0&&(h<d*1.2*(d*1.2)?(i.state="watching",i._stT=3+Math.random()*3):(i.state="walk",i.walkTimer=2+Math.random()*3));break}case"watching":{i._stT-=s,T=!0,E=i.speed*.3,i.wanderAng=u,h<x?(i.state="flee",i.wanderAng=u,i.fleeTimer=2.5+Math.random()*2):(h>d*1.5*(d*1.5)||i._stT<=0)&&(i.state="walk",i.walkTimer=2+Math.random()*4);break}case"flee":{T=!0,E=i.speed*gw,i.fleeTimer-=s,i._zigTimer-=s,i._zigTimer<=0&&(i._zigDir*=-1,i._zigTimer=.4+Math.random()*.4),i.wanderAng=u+i._zigDir*.3;const v=QS({x:r,z:a},i.wanderAng,_e,3,1.5);v.x*v.x+v.z*v.z>.01&&(i.wanderAng+=Math.atan2(v.z,v.x)*.3);const R=JS({x:r,z:a},8);(R.x!==0||R.z!==0)&&(i.wanderAng=Math.atan2(R.z,R.x)),(i.fleeTimer<=0||h>d*2*(d*2))&&(i.state="walk",i.walkTimer=3+Math.random()*5);break}}if(T&&(o.position.x+=Math.sin(i.wanderAng)*E*s,o.position.z+=Math.cos(i.wanderAng)*E*s,i.legCycle+=s*E*3),o.position.x*o.position.x+o.position.z*o.position.z>ce*.9*(ce*.9)&&(i.wanderAng=Math.atan2(-o.position.x,-o.position.z)),i.state!=="rest"){const v=w-o.position.y;Math.abs(v)>.01?o.position.y+=Math.sign(v)*Math.min(Math.abs(v),s*2):o.position.y=w}if(o.rotation.y=i.wanderAng,i.state==="alert"||i.state==="watching"){const v=u-i.wanderAng;i.headLook+=(v*.5-i.headLook)*s*3}const y=i.headBob||0;i.neckPivot.rotation.x+=(y-i.neckPivot.rotation.x)*s*3,i.neckPivot.rotation.y+=(i.headLook-i.neckPivot.rotation.y)*s*4,T&&i.state!=="graze"&&i.state!=="drink"&&(i.neckPivot.rotation.x+=Math.sin(i.legCycle*2)*.05);for(let v=0;v<i.legPivots.length;v++){const R=i.legPivots[v];if(T){const U=R.isFront?0:Math.PI,L=R.side>0?Math.PI:0,z=Math.sin(i.legCycle+U+L)*.4*(E/i.speed);R.upper.rotation.x=z,R.lower.rotation.x=Math.max(0,-z*.6)}else i.state==="rest"&&o.position.y<-.1?(R.upper.rotation.x+=(.8-R.upper.rotation.x)*s*2,R.lower.rotation.x+=(1-R.lower.rotation.x)*s*2):(R.upper.rotation.x*=.9,R.lower.rotation.x*=.9)}i.tailPivot.rotation.x=Math.sin(t*1.5+i.phase)*.15,i.state==="flee"&&(i.tailPivot.rotation.x+=.3),i.state==="alert"?i.tailPivot.rotation.z=Math.sin(t*6)*.1:i.tailPivot.rotation.z*=.9,i.mat.emissiveIntensity=(.3+Math.sin(t*.8+i.phase)*.2)*Se,i.headLook*=.98}}function tm(s,t){for(let e=0;e<Zo.length;e++){const n=Zo[e],i=n.group,o=i.position.x,r=i.position.z;if(n._state==="patrol"){if(Math.random()<.002){let g=1/0,x=null;for(let f=0;f<ie.length;f++){const m=ie[f].x-o,w=ie[f].z-r,_=m*m+w*w;_<900&&_<g&&(g=_,x=ie[f])}for(let f=0;f<gi.length;f++){if(gi[f].glowIntensity<.3)continue;const m=gi[f].x-o,w=gi[f].z-r,_=m*m+w*w;_<900&&_<g&&(g=_,x=gi[f])}x&&(n._state="attracted",n._attractTarget=x,n._stT=6+Math.random()*8,Gs("moth",{x:o,z:r},j.pos))}const p=De==="DAWN"?.005:De==="DEEP_NIGHT"?3e-4:.001;if(Math.random()<p){let g=1/0,x=null;for(let f=0;f<_e.length;f++){const m=_e[f].x-o,w=_e[f].z-r,_=m*m+w*w;_<400&&_<g&&(g=_,x=_e[f])}x&&(n._state="rest",n._restTree=x,n._stT=De==="DAWN"?8+Math.random()*10:4+Math.random()*6)}}const a=De==="DEEP_NIGHT"?1.6:De==="DAWN"?.5:1,l=De==="DEEP_NIGHT"?1.4:1;switch(n._state){case"patrol":{n.orbitAng+=s*.4*a;const p=n.centerX+Math.cos(n.orbitAng)*n.orbitR*l,g=n.centerZ+Math.sin(n.orbitAng)*n.orbitR*l;i.position.x+=(p-o)*s*1.5,i.position.z+=(g-r)*s*1.5,i.position.y=n.floatY+Math.sin(t*.7+n.phase)*.8,i.rotation.y=n.orbitAng+Math.PI/2;break}case"attracted":{if(n._stT-=s,!n._attractTarget||n._stT<=0){n._state="patrol",n._attractTarget=null;break}n.orbitAng+=s*.8;const p=n._attractTarget,g=Math.max(.5,n._stT*.4),x=p.x+Math.cos(n.orbitAng)*g,f=p.z+Math.sin(n.orbitAng)*g;i.position.x+=(x-o)*s*2,i.position.z+=(f-r)*s*2,i.position.y+=(2-i.position.y)*s*.5,i.rotation.y=n.orbitAng+Math.PI/2;break}case"rest":{if(n._stT-=s,!n._restTree||n._stT<=0){n._state="patrol",n._restTree=null,n.centerX=i.position.x,n.centerZ=i.position.z;break}const p=n._restTree,g=p.x+.5-o,x=p.z+.5-r,f=Math.sqrt(g*g+x*x);f>.3&&(i.position.x+=g/f*s*2,i.position.z+=x/f*s*2),i.position.y+=(2.5-i.position.y)*s*1.5,i.rotation.y=Math.atan2(g,x);break}}const c=n._state==="rest"?.05:.4,h=Math.sin(t*n.flapSpeed+n.phase)*c;for(let p=0;p<i._wingPivots.length;p++){const g=i._wingPivots[p];g.pivot.rotation.z=h*g.side}const u=Math.sin(t*1.5+n.phase)*.5+.5,d=n._state==="attracted"?.4:0;n.wingMat.emissiveIntensity=(.5+u*.6+d)*Se,n.wingMat.opacity=.45+u*.25}}function pb(s,t){const e=Le.ShiftLeft||Le.ShiftRight||Jo;let n=null;if(Yo>5&&(Ye==="SEEK"||Ye==="RISING")){let i=1/0;for(let o=0;o<zn.length;o++){if(zn[o].found)continue;const r=zn[o].x-j.pos.x,a=zn[o].z-j.pos.z,l=r*r+a*a;l<i&&(i=l,n=zn[o])}}for(let i=0;i<Ac.length;i++){const o=Ac[i],r=t*.5+o.phase+i/$p*6.28,a=e?4+i*2:1.5+i*.8,l=e?3+i:1.2+Math.sin(t*.7+o.phase)*.5;if(o.targetX=j.pos.x+Math.cos(r)*a,o.targetY=j.pos.y-Dc+l,o.targetZ=j.pos.z+Math.sin(r)*a,i===0&&n){const g=Math.min((Yo-5)/3,.6);o.targetX+=(n.x-j.pos.x)*g,o.targetZ+=(n.z-j.pos.z)*g,o.targetY+=.5}const c=e?.8:2.5;o.velX+=(o.targetX-o.group.position.x)*c*s,o.velY+=(o.targetY-o.group.position.y)*c*s,o.velZ+=(o.targetZ-o.group.position.z)*c*s,o.velX*=.92,o.velY*=.92,o.velZ*=.92,o.group.position.x+=o.velX*s*4,o.group.position.y+=o.velY*s*4,o.group.position.z+=o.velZ*s*4;const h=Math.sin(t*2+o.phase)*.5+.5;o.glowMat.opacity=.3+h*.4,o.hazeMat.opacity=.08+h*.12;const u=t*(2.5+i*.5)+o.phase,d=.14+Math.sin(t*1.3+o.phase)*.06;o.group.children[5].position.set(Math.cos(u)*d,Math.sin(u*1.5)*.08,Math.sin(u)*d);for(let g=0;g<o.tendrils.length;g++){const x=o.tendrils[g],f=Math.sin(t*3+g*2.1+o.phase)*.3,m=.08+Math.sin(t*2+g*1.5)*.04;x.mesh.position.x=Math.cos(x.baseAng+f)*m,x.mesh.position.z=Math.sin(x.baseAng+f)*m,x.mesh.rotation.y=x.baseAng+f,x.mesh.rotation.z=Math.PI/3+Math.sin(t*2.5+g)*.2}for(let g=0;g<o.embers.length;g++){const x=(g+1)*.08;o.embers[g].position.y=-.06-x+Math.sin(t*4+g*1.4+o.phase)*.03,o.embers[g].position.x=Math.sin(t*2.5+g*2+o.phase)*.06,o.embers[g].material.opacity=.2+Math.sin(t*5+g*1.7)*.15}o.facet.rotation.y+=s*1.5,o.facet.rotation.x+=s*.7,o.halo.rotation.z+=s*.3,o.halo2.rotation.y+=s*.2}}function mb(s,t){for(let e=0;e<gi.length;e++){const n=gi[e],i=n.x-j.pos.x,o=n.z-j.pos.z,a=i*i+o*o<(kh+.5)*(kh+.5),l=a?1:0;n.glowIntensity+=(l-n.glowIntensity)*s*3,n.discMat.opacity=n.glowIntensity*.25*(.6+Math.sin(t*2+n.phase)*.4),n.mushMat.emissiveIntensity=(.2+n.glowIntensity*.8)*Se,a&&j.vel.y>0&&j.vel.y<=fc+.5&&(j.vel.y=fc+dw,n.glowIntensity=1.5,qS());const c=.08+n.glowIntensity*.25;n.sporeMat.opacity=c;for(let h=0;h<n.spores.length;h++){const u=n.spores[h];u.drift+=s*.3,u.mesh.position.y+=u.speed*s*(.5+n.glowIntensity),u.mesh.position.x=u.baseX+Math.sin(t*.8+u.drift)*.15,u.mesh.position.z=u.baseZ+Math.cos(t*.6+u.drift)*.12,u.mesh.position.y>.8&&(u.mesh.position.y=.03),u.mesh.scale.setScalar(.6+Math.sin(t*2+h)*.4)}for(let h=0;h<n.glowWorms.length;h++){const u=Math.sin(t*1.5+h*1.3+n.phase)*.5+.5;n.glowWorms[h].material.opacity=.1+u*.4+n.glowIntensity*.3}}}function gb(s,t){for(let e=0;e<di.length;e++){const n=di[e];if(n.popped){if(n.popTimer-=s,n.popTimer<=0){n.popped=!1,n.group.visible=!0;const h=S()*6.28,u=8+S()*ce*.5;n.homeX=Math.cos(h)*u,n.homeZ=Math.sin(h)*u,n.floatY=.5+S()*4,n.group.position.set(n.homeX,n.floatY,n.homeZ)}continue}n.driftAng+=s*.2;const i=n.homeX+Math.sin(n.driftAng)*3,o=n.homeZ+Math.cos(n.driftAng*.7)*3;n.group.position.x+=(i-n.group.position.x)*s*.5,n.group.position.z+=(o-n.group.position.z)*s*.5,n.group.position.y=n.floatY+Math.sin(t*.6+n.phase)*n.bobAmp;const r=(t*.1+n.phase)%1;n.shellMat.color.setRGB(Math.sin(r*6.28)*.15+.7,Math.sin(r*6.28+2.09)*.15+.7,Math.sin(r*6.28+4.19)*.15+.8),n.shellMat.opacity=.18+Math.sin(t*1.5+n.phase)*.08;const a=n.group.position.x-j.pos.x,l=n.group.position.y-j.pos.y,c=n.group.position.z-j.pos.z;a*a+l*l+c*c<wd*wd*n.sc*n.sc&&(n.popped=!0,n.popTimer=8+Math.random()*8,n.group.visible=!1,K1(n.group.position.x,n.group.position.y,n.group.position.z,6),XS(n.group.position,j.pos))}}function xb(s,t){const e=Ir();for(let n=0;n<Fe.length;n++){const i=Fe[n],o=.015+e*.01;for(let u=0;u<i.pads.length;u++)i.pads[u].mesh.position.y=.05+Math.sin(t*(.8+e*.4)+i.pads[u].phase)*o;const r=e*.08;i.waterMat.emissiveIntensity=(.15+r+Math.sin(t*1+i.phase)*.1)*Se;const a=Math.sin(t*1.2+i.phase)*.5+.5;i.flMat.emissiveIntensity=(.3+a*.5)*Se;const l=.25+e*.2,c=.12+e*.08;for(let u=0;u<i.ripples.length;u++){const d=i.ripples[u],p=(t*l+d.phase)%1,g=.2+p*i.pondR*.8;d.mesh.scale.setScalar(g),d.mesh.material.opacity=(1-p)*c}const h=1+e*.5;for(let u=0;u<i.tadpoles.length;u++){const d=i.tadpoles[u];d.ang+=d.speed*h*s;const p=Math.cos(d.ang)*d.orbR,g=Math.sin(d.ang)*d.orbR;d.body.position.x=p,d.body.position.z=g,d.body.rotation.y=d.ang+Math.PI/2;const x=.02;d.tail.position.x=p-Math.cos(d.ang)*x,d.tail.position.z=g-Math.sin(d.ang)*x,d.tail.rotation.y=d.ang,d.tail.rotation.z=Math.PI/2+Math.sin(t*(8+e*2)+u*3)*.4}}}function vb(s,t){if(Yl-=s,Yl<=0){Yl=.5;for(let o=0;o<ie.length;o++){const r=ie[o],a=r.x-j.pos.x,l=r.z-j.pos.z;if(a*a+l*l<36){Xn={x:r.x,z:r.z},li=0;break}}}const e=fb();if(!Xn){e.visible=!1;return}if(li+=s*12,li>30){Xn=null,li=0,e.visible=!1;return}e.visible=!0,e.position.set(Xn.x,.15,Xn.z),e.scale.setScalar(li),e.material.opacity=(1-li/30)*.45;const n=li,i=4;for(let o=0;o<An.length;o++){const r=An[o],a=r.x-Xn.x,l=r.z-Xn.z,c=Math.sqrt(a*a+l*l);if(Math.abs(c-n)<i){const h=1-Math.abs(c-n)/i;r.capMat.emissiveIntensity=Math.max(r.capMat.emissiveIntensity,(r.base+h*2)*Se)}}for(let o=0;o<Mi.length;o++){const r=Mi[o],a=r.group.position.x-Xn.x,l=r.group.position.z-Xn.z,c=Math.sqrt(a*a+l*l);if(Math.abs(c-n)<i){const h=1-Math.abs(c-n)/i;r.petalMat.emissiveIntensity=Math.max(r.petalMat.emissiveIntensity,(.3+h*1.5)*Se)}}}function _b(s,t){const e=j.pos.x;j.pos.y;const n=j.pos.z,i=Ir(),o=Vi?.6:i>.3?i*.4:0;for(let c=0;c<Mi.length;c++){const h=Mi[c],u=h.group.position.x,d=h.group.position.z,p=u-e,g=d-n,f=p*p+g*g<16?1:0;h._react=h._react||0,h._react+=(f-h._react)*s*(f>0?4:1.5);const m=(1+h._react*.15)*(1-o*.12),w=(1+h._react*.05)*(1-o*.15);h.group.scale.set(m,w,m),h.petalMat.emissiveIntensity+=h._react*.6*Se*(1-o*.4)}for(let c=0;c<An.length;c++){const h=An[c],u=h.x-e,d=h.z-n,g=u*u+d*d<4?1:0;h._touch=h._touch||0,h._touch+=(g-h._touch)*s*(g>0?6:1.5);const x=i*.4;h.capMat.emissiveIntensity+=(h._touch*1.5+x)*Se;const f=1+h._touch*.08;h.group.scale.set(f,1+h._touch*.04,f)}for(let c=0;c<kr.length;c++){const h=kr[c],u=h.group.position.x,d=h.group.position.z,p=u-e,g=d-n,f=p*p+g*g<2.25?.65:1;h._curl=h._curl===void 0?1:h._curl,h._curl+=(f-h._curl)*s*(f<1?4:1.5),h.group.scale.set(1+(1-h._curl)*.3,h._curl,1+(1-h._curl)*.3)}ub();const r=zo==="FOG_BANK"?.5:1;let a=0,l=0;for(let c=0;c<ie.length;c++){const h=ie[c],u=h.x-e,d=h.z-n;if(u*u+d*d<36)for(let p=0;p<ie.length;p++){if(c===p)continue;const g=ie[p],x=h.x-g.x,f=h.z-g.z,m=x*x+f*f;if(m<400){a++;const w=(1-Math.sqrt(m)/20)*.8*r;if(g.mat.emissiveIntensity+=w*Se,l<yu){const _=wu[l],M=_.geo.attributes.position.array,A=1,E=1;M[0]=h.x,M[1]=A,M[2]=h.z,M[3]=g.x,M[4]=E,M[5]=g.z,_.geo.attributes.position.needsUpdate=!0,_.geo.computeBoundingSphere(),_.active=!0;const T=Math.sin(t*3+c*1.5+p*.7)*.3+.5;_.opacity=w*T*Se,_.line.material.opacity=_.opacity,_.line.visible=!0,l++}}}}for(let c=l;c<yu;c++){const h=wu[c];h.line.visible&&(h.opacity*=.85,h.line.material.opacity=h.opacity,h.opacity<.01&&(h.line.visible=!1))}return a}let Ga="EXPLORE",Zl=0,$l=0;function Mb(s,t){let e=!1;for(let x=0;x<ie.length;x++){const f=ie[x].x-j.pos.x,m=ie[x].z-j.pos.z;if(f*f+m*m<64){e=!0;break}}Ga=e?"NEAR_CRYSTAL":"EXPLORE",Zl+=s;const n=Ir(),i=Math.max(.2,1-n*.8),o=(Ga==="NEAR_CRYSTAL"?.08:.25)/i,r=Math.floor((Ga==="NEAR_CRYSTAL"?120:100)*i);if(Zl>o&&(Zl=0,M0(0,t)<r))if(Ga==="NEAR_CRYSTAL")for(let f=0;f<ie.length;f++){const m=ie[f].x-j.pos.x,w=ie[f].z-j.pos.z;m*m+w*w<100&&$a(ie[f].x,Zt(ie[f].x,ie[f].z)+1,ie[f].z,3+Math.random()*4)}else if(Math.random()<.3&&Mi.length>0){const f=Mi[Math.floor(Math.random()*Mi.length)];if(f._react>.3){const m=f.group.position.x,w=f.group.position.z;$a(m+(Math.random()-.5)*2,Zt(m,w)+.5,w+(Math.random()-.5)*2,4+Math.random()*6)}}else{const f=Math.random()*6.28,m=5+Math.random()*25,w=j.pos.x+Math.cos(f)*m,_=j.pos.z+Math.sin(f)*m;$a(w,Zt(w,_),_,6+Math.random()*10)}if($l+=s,$l>.2){$l=0;for(let x=0;x<An.length;x++){const f=An[x],m=f.x-j.pos.x,w=f.z-j.pos.z;m*m+w*w<200&&Math.random()<.15&&H1(f.x,.6*f.group.scale.x,f.z)}}for(let x=0;x<An.length;x++){const f=An[x],m=f.x-j.pos.x,w=(f.group.position.y||0)-j.pos.y,_=f.z-j.pos.z;if(m*m+w*w+_*_>2500){f.group.visible&&(f.group.visible=!1);continue}f.group.visible||(f.group.visible=!0);const A=Math.sin(t*f.speed+f.phase)*.5+.5;f.capMat.emissiveIntensity=f.base*(.5+A*.8)*Se}for(let x=0;x<ie.length;x++){const f=ie[x],m=Math.sin(t*.6+f.phase)*.5+.5;f.mat.emissiveIntensity=(1+m*1.5)*Se,f.group.children[0].rotation.y+=s*.15,f.light&&(f.light.intensity=(.3+m*.4)*Se)}if(!Ki.length)for(let x=0;x<ie.length;x++)Ki.push({idx:x,dist:0});const a=j.pos.x-tp,l=j.pos.z-ep;if(a*a+l*l>1){tp=j.pos.x,ep=j.pos.z;for(let x=0;x<ie.length;x++){const f=ie[x],m=f.x-j.pos.x,w=f.z-j.pos.z;Ki[x].idx=x,Ki[x].dist=m*m+w*w}Ki.sort((x,f)=>x.dist-f.dist)}for(let x=0;x<ys.length;x++)if(x<Ki.length&&Ki[x].dist<2500){const f=ie[Ki[x].idx],m=Math.sin(t*.6+f.phase)*.5+.5;ys[x].position.set(f.x,1.5,f.z),ys[x].intensity=(1.5+m*2)*Se,ys[x].distance=16,ys[x].color.setHex(F.crystal)}else ys[x].intensity=0;if(ki>.8&&Math.random()<.005)for(let x=0;x<Lr.length;x++){const f=Lr[x];if(!f.dispersed&&Math.random()<.1){f.dispersed=!0;for(let m=0;m<8;m++)h0(f.x,f.h+.05,f.z);for(let m=2;m<f.group.children.length;m++)f.group.children[m].visible=!1;f.regrowTimer=15+Math.random()*10}}const c=ki>.3?(ki-.3)*.02:0,h=Vi?.03:0;if(Math.random()<c+h)for(let x=0;x<_e.length;x++){const f=_e[x],m=f.x-j.pos.x,w=f.z-j.pos.z;if(m*m+w*w<900&&Math.random()<.15){const _=(f.treeH||10)*.7+(f.groundY||0);eS(f.x,_,f.z);break}}K0(s,t),J0(s,t),Q0(s,t),tm(s,t),a0(s,t),j0(s,t);const u=j.pos.x,d=j.pos.y,p=j.pos.z;for(let x=0;x<Ec.length;x++){const f=Ec[x],m=f.x||f.group.position.x,w=f.z||f.group.position.z,_=m-u,M=(f.group.position.y||0)-d,A=w-p,E=_*_+M*M+A*A;if(E>2500){f.group.visible&&(f.group.visible=!1);continue}if(f.group.visible||(f.group.visible=!0),!f.sparkles||E>400)continue;let T=0;for(let L=0;L<ie.length;L++){const z=ie[L].x-m,V=ie[L].z-w,k=z*z+V*V;k<100&&(T=Math.max(T,(1-Math.sqrt(k)/10)*.6))}const b=m-j.pos.x,y=w-j.pos.z,v=b*b+y*y,R=v<25?(1-Math.sqrt(v)/5)*.3:0;let U=0;if(Xn&&li>0){const L=m-Xn.x,z=w-Xn.z,V=Math.sqrt(L*L+z*z);Math.abs(V-li)<3&&(U=(1-Math.abs(V-li)/3)*.8)}for(let L=0;L<f.sparkles.length;L++){const z=Math.sin(t*4+x*2.3+L*1.7)*.35;f.sparkles[L].material.opacity=.15+z+T+R+U}f.mossMat&&R>0&&(f.mossMat.emissiveIntensity=.05+R*.4*Math.sin(t*2+x)*.5+.5)}pb(s,t),d1(Lr,s,t,j.pos),mb(s,t),gb(s,t),xb(s,t),b0(s,t,j.pos),u1(s,t),nS(s,t),Z1(s),J1(s),vb(s);const g=_b(s,t);if(gS(s,t),O1(t),j.onGround&&j.vel.x*j.vel.x+j.vel.z*j.vel.z>.5){const f=Math.atan2(j.vel.x,j.vel.z),m=Le.ShiftLeft||Le.ShiftRight||Jo;oS(j.pos.x,j.pos.z,f,m)}rS(s,Ir()),$S(s,j.pos,Fe,Z0,De,Ir()),WS(s),nb(j.pos,Xe,Ln,fi,Zo,gi,Fe,g),ib(s)}let He=0,Su=!1;function yb(){Su||(Su=!0,Aw(!0),hb())}function em(){requestAnimationFrame(em);const s=Math.min(jp.getDelta(),.1);He+=s,yS(s);const t=AS(s,He,j.pos);if(CS(s,j.pos,t,Ls,To),Hw(s,He,De,Se,zo),ui>0&&(qu.intensity+=ui*.8,ct.background.r=Math.min(ct.background.r+ui*.08,.25),ct.background.g=Math.min(ct.background.g+ui*.08,.25),ct.background.b=Math.min(ct.background.b+ui*.12,.35)),BS(s,ki,t,Vi,ui,De,j.pos,Fe),V1(Ls,To),h1(Ls,To,ki),Q1(Ls,To),!Su){pn.position.set(0,Dc,0),pn.rotation.order="YXZ",pn.rotation.y+=s*.08,pn.rotation.x=0;for(let e=0;e<An.length;e++){const n=An[e],i=Math.sin(He*n.speed+n.phase)*.5+.5;n.capMat.emissiveIntensity=n.base*(.5+i*.8)*Se}for(let e=0;e<ie.length;e++){const n=ie[e];n.mat.emissiveIntensity=(1+Math.sin(He*.6+n.phase)*.5*1.5+.75)*Se}K0(s,He),J0(s,He),Q0(s,He),tm(s,He),a0(s,He),j0(s,He),b0(s,He,j.pos);for(let e=0;e<di.length;e++)di[e].popped||(di[e].group.position.y=di[e].floatY+Math.sin(He*.6+di[e].phase)*di[e].bobAmp);for(let e=0;e<Fe.length;e++)for(let n=0;n<Fe[e].pads.length;n++)Fe[e].pads[n].mesh.position.y=.05+Math.sin(He*.8+Fe[e].pads[n].phase)*.015;for(let e=0;e<zn.length;e++){const n=zn[e],i=Math.sin(He*1.5+n.phase)*.5+.5;n.group.position.y=n.flyY+Math.sin(He*.8+n.phase)*.3,n.glowMat.opacity=.3+i*.4}Td();return}qw(s),Mb(s,He),M0(s,He),W1(s),pn.position.copy(j.pos),pn.position.y+=c0,pn.rotation.order="YXZ",pn.rotation.y=Or,pn.rotation.x=zs,ab(s,j.pos),Td()}try{Yh(0,0,5),Nw(),MS({scene:ct,moon:jn,moon2:Yu,hemiLight:qu,playerLight:Zu}),db();const s=Lw();Ww(_e,Ec),Xw(Gd),Vw(t=>{let e=!1;for(let n=0;n<Fe.length;n++){const i=Fe[n].x-j.pos.x,o=Fe[n].z-j.pos.z;if(i*i+o*o<16){e=!0;break}}kS(t,e),Math.random()<.4&&Gd(j.pos.x,j.pos.z,1)},()=>HS(),t=>VS(t)),ES(),RS(),B1(150),k1(60),Tw(),X1(cw),Y1(20),l1(40),j1(30),tS(50),sS(),kw(),D1(),z1(),F1(),OS(),eb(),rb(),cb(),mS({orbs:zn,obeliskGroup:R1(),obeliskMat:C1(),obeliskGlowMat:P1(),pinnacleOrb:I1(),pinnacleRings:L1(),moatMesh:U1(),moatMat:N1(),rainbowArcs:Gr,player:j,makeLaser:aS,orbHudEl:lb(),deers:Xe,puffs:Ln,jellies:fi,moths:Zo,trees:_e,groundMesh:s}),Ew(yb);for(let t=0;t<50;t++){const e=Math.random()*6.28,n=3+Math.random()*ce*.7,i=Math.cos(e)*n,o=Math.sin(e)*n;$a(i,Zt(i,o),o,8+Math.random()*12)}console.log("✓ Init: trees="+_e.length+" mush="+An.length+" crystals="+ie.length+" orbs="+zn.length+" creatures="+(fi.length+Ln.length+Xe.length+Zo.length)+" wisps="+Ac.length+" dandelions="+Lr.length+" fairyRings="+gi.length+" bubbles="+di.length+" ponds="+Fe.length+" scene="+ct.children.length),em()}catch(s){console.error("INIT FAILED:",s),document.body.innerHTML='<div style="color:red;padding:30px;font-family:monospace"><h2>Init Failed</h2><pre>'+(s.stack||s.message)+"</pre></div>"}
