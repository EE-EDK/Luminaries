(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $c="172",Ef=0,Pl=1,bf=2,Jh=1,jh=2,kn=3,si=0,Je=1,Bt=2,Xn=0,es=1,Fa=2,Ll=3,Il=4,Tf=5,wi=100,Af=101,Rf=102,Cf=103,Pf=104,Lf=200,If=201,Df=202,Uf=203,Oa=204,za=205,Nf=206,Ff=207,Of=208,zf=209,Bf=210,kf=211,Gf=212,Hf=213,Vf=214,Ba=0,ka=1,Ga=2,cs=3,Ha=4,Va=5,Wa=6,Xa=7,$h=0,Wf=1,Xf=2,ii=0,Yf=1,qf=2,Zf=3,Qh=4,Kf=5,Jf=6,jf=7,tu=300,ls=301,hs=302,Ya=303,qa=304,Er=306,rr=1e3,Ei=1001,Za=1002,yn=1003,$f=1004,fo=1005,Pn=1006,Dr=1007,bi=1008,Zn=1009,eu=1010,nu=1011,Ys=1012,Qc=1013,Pi=1014,Vn=1015,Yn=1016,tl=1017,el=1018,us=1020,iu=35902,su=1021,ou=1022,Mn=1023,ru=1024,au=1025,ns=1026,fs=1027,cu=1028,nl=1029,lu=1030,il=1031,sl=1033,Zo=33776,Ko=33777,Jo=33778,jo=33779,Ka=35840,Ja=35841,ja=35842,$a=35843,Qa=36196,tc=37492,ec=37496,nc=37808,ic=37809,sc=37810,oc=37811,rc=37812,ac=37813,cc=37814,lc=37815,hc=37816,uc=37817,fc=37818,dc=37819,pc=37820,mc=37821,$o=36492,gc=36494,_c=36495,hu=36283,vc=36284,xc=36285,Mc=36286,Qf=3200,td=3201,uu=0,ed=1,ni="",qe="srgb",ds="srgb-linear",ar="linear",re="srgb",Fi=7680,Dl=519,nd=512,id=513,sd=514,fu=515,od=516,rd=517,ad=518,cd=519,Ul=35044,Nl="300 es",Wn=2e3,cr=2001;class xs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ur=Math.PI/180,yc=180/Math.PI;function Ms(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Yt(i,t,e){return Math.max(t,Math.min(e,i))}function ld(i,t){return(i%t+t)%t}function Nr(i,t,e){return(1-e)*i+e*t}function Es(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,s,o,r,a,c,l){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l)}set(t,e,n,s,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],M=s[1],v=s[4],_=s[7],b=s[2],E=s[5],T=s[8];return o[0]=r*x+a*M+c*b,o[3]=r*m+a*v+c*E,o[6]=r*d+a*_+c*T,o[1]=l*x+h*M+u*b,o[4]=l*m+h*v+u*E,o[7]=l*d+h*_+u*T,o[2]=f*x+p*M+g*b,o[5]=f*m+p*v+g*E,o[8]=f*d+p*_+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,f=a*c-h*o,p=l*o-r*c,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*r)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*o-a*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fr.makeScale(t,e)),this}rotate(t){return this.premultiply(Fr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fr=new Ht;function du(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hd(){const i=lr("canvas");return i.style.display="block",i}const Fl={};function ji(i){i in Fl||(Fl[i]=!0,console.warn(i))}function ud(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function fd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function dd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ol=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zl=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pd(){const i={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===re&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===re&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?ar:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ds]:{primaries:t,whitePoint:n,transfer:ar,toXYZ:Ol,fromXYZ:zl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:n,transfer:re,toXYZ:Ol,fromXYZ:zl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),i}const ee=pd();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Oi;class md{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Oi===void 0&&(Oi=lr("canvas")),Oi.width=t.width,Oi.height=t.height;const n=Oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=lr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=qn(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gd=0;class pu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Ms(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Or(s[r].image)):o.push(Or(s[r]))}else o=Or(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Or(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?md.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _d=0;class We extends xs{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=Ei,s=Ei,o=Pn,r=bi,a=Mn,c=Zn,l=We.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Ms(),this.name="",this.source=new pu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rr:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rr:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=tu;We.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,s=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,_=(p+1)/2,b=(d+1)/2,E=(h+f)/4,T=(u+x)/4,R=(g+m)/4;return v>_&&v>b?v<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(v),s=E/n,o=T/n):_>b?_<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(_),n=E/s,o=R/s):b<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(b),n=T/o,s=R/o),this.set(n,s,o,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vd extends xs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new We(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new pu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends vd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class mu extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xd extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class io{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=o[r+0],p=o[r+1],g=o[r+2],x=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==f||l!==p||h!==g){let m=1-a;const d=c*f+l*p+h*g+u*x,M=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const b=Math.sqrt(v),E=Math.atan2(b,d*M);m=Math.sin(m*E)/b,a=Math.sin(a*E)/b}const _=a*M;if(c=c*m+f*_,l=l*m+p*_,h=h*m+g*_,u=u*m+x*_,m===1-a){const b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=o[r],f=o[r+1],p=o[r+2],g=o[r+3];return t[e]=a*g+h*u+c*p-l*f,t[e+1]=c*g+h*f+l*u-a*p,t[e+2]=l*g+h*p+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(o/2),f=c(n/2),p=c(s/2),g=c(o/2);switch(r){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(o-l)*p,this._z=(r-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(o-l)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(r-s)/p,this._x=(o+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-s*a,this._w=r*h-n*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=r*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=o*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*n),h=2*(a*e-o*s),u=2*(o*n-r*e);return this.x=e+c*l+r*u-a*h,this.y=n+c*h+a*l-o*u,this.z=s+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zr.copy(this).projectOnVector(t),this.sub(zr)}reflect(t){return this.sub(zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zr=new D,Bl=new io;class so{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,gn):gn.fromBufferAttribute(o,r),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bs),mo.subVectors(this.max,bs),zi.subVectors(t.a,bs),Bi.subVectors(t.b,bs),ki.subVectors(t.c,bs),Kn.subVectors(Bi,zi),Jn.subVectors(ki,Bi),ai.subVectors(zi,ki);let e=[0,-Kn.z,Kn.y,0,-Jn.z,Jn.y,0,-ai.z,ai.y,Kn.z,0,-Kn.x,Jn.z,0,-Jn.x,ai.z,0,-ai.x,-Kn.y,Kn.x,0,-Jn.y,Jn.x,0,-ai.y,ai.x,0];return!Br(e,zi,Bi,ki,mo)||(e=[1,0,0,0,1,0,0,0,1],!Br(e,zi,Bi,ki,mo))?!1:(go.crossVectors(Kn,Jn),e=[go.x,go.y,go.z],Br(e,zi,Bi,ki,mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new D,new D,new D,new D,new D,new D,new D,new D],gn=new D,po=new so,zi=new D,Bi=new D,ki=new D,Kn=new D,Jn=new D,ai=new D,bs=new D,mo=new D,go=new D,ci=new D;function Br(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){ci.fromArray(i,o);const a=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),c=t.dot(ci),l=e.dot(ci),h=n.dot(ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Md=new so,Ts=new D,kr=new D;class br{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Md.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);const e=Ts.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ts,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(kr)),this.expandByPoint(Ts.copy(t.center).sub(kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new D,Gr=new D,_o=new D,jn=new D,Hr=new D,vo=new D,Vr=new D;class gu{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Gr.copy(t).add(e).multiplyScalar(.5),_o.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(Gr);const o=t.distanceTo(e)*.5,r=-this.direction.dot(_o),a=jn.dot(this.direction),c=-jn.dot(_o),l=jn.lengthSq(),h=Math.abs(1-r*r);let u,f,p,g;if(h>0)if(u=r*c-a,f=r*a-c,g=o*h,u>=0)if(f>=-g)if(f<=g){const x=1/h;u*=x,f*=x,p=u*(u+r*f+2*a)+f*(r*u+f+2*c)+l}else f=o,u=Math.max(0,-(r*f+a)),p=-u*u+f*(f+2*c)+l;else f=-o,u=Math.max(0,-(r*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-r*o+a)),f=u>0?-o:Math.min(Math.max(-o,-c),o),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-o,-c),o),p=f*(f+2*c)+l):(u=Math.max(0,-(r*o+a)),f=u>0?o:Math.min(Math.max(-o,-c),o),p=-u*u+f*(f+2*c)+l);else f=r>0?-o:o,u=Math.max(0,-(r*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Gr).addScaledVector(_o,f),p}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(o=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,s,o){Hr.subVectors(e,t),vo.subVectors(n,t),Vr.crossVectors(Hr,vo);let r=this.direction.dot(Vr),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;jn.subVectors(this.origin,t);const c=a*this.direction.dot(vo.crossVectors(jn,vo));if(c<0)return null;const l=a*this.direction.dot(Hr.cross(jn));if(l<0||c+l>r)return null;const h=-a*jn.dot(Vr);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,s,o,r,a,c,l,h,u,f,p,g,x,m){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l,h,u,f,p,g,x,m)}set(t,e,n,s,o,r,a,c,l,h,u,f,p,g,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=o,d[5]=r,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Gi.setFromMatrixColumn(t,0).length(),o=1/Gi.setFromMatrixColumn(t,1).length(),r=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const f=r*h,p=r*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=g+p*l,e[10]=r*c}else if(t.order==="YXZ"){const f=c*h,p=c*u,g=l*h,x=l*u;e[0]=f+x*a,e[4]=g*a-p,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=p*a-g,e[6]=x+f*a,e[10]=r*c}else if(t.order==="ZXY"){const f=c*h,p=c*u,g=l*h,x=l*u;e[0]=f-x*a,e[4]=-r*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=r*h,e[9]=x-f*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const f=r*h,p=r*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const f=r*c,p=r*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=g*u+p,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=f-x*u}else if(t.order==="XZY"){const f=r*c,p=r*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=r*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yd,t,wd)}lookAt(t,e,n){const s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),$n.crossVectors(n,Qe),$n.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),$n.crossVectors(n,Qe)),$n.normalize(),xo.crossVectors(Qe,$n),s[0]=$n.x,s[4]=xo.x,s[8]=Qe.x,s[1]=$n.y,s[5]=xo.y,s[9]=Qe.y,s[2]=$n.z,s[6]=xo.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],M=n[3],v=n[7],_=n[11],b=n[15],E=s[0],T=s[4],R=s[8],S=s[12],w=s[1],P=s[5],U=s[9],N=s[13],G=s[2],W=s[6],K=s[10],j=s[14],Y=s[3],at=s[7],ut=s[11],Tt=s[15];return o[0]=r*E+a*w+c*G+l*Y,o[4]=r*T+a*P+c*W+l*at,o[8]=r*R+a*U+c*K+l*ut,o[12]=r*S+a*N+c*j+l*Tt,o[1]=h*E+u*w+f*G+p*Y,o[5]=h*T+u*P+f*W+p*at,o[9]=h*R+u*U+f*K+p*ut,o[13]=h*S+u*N+f*j+p*Tt,o[2]=g*E+x*w+m*G+d*Y,o[6]=g*T+x*P+m*W+d*at,o[10]=g*R+x*U+m*K+d*ut,o[14]=g*S+x*N+m*j+d*Tt,o[3]=M*E+v*w+_*G+b*Y,o[7]=M*T+v*P+_*W+b*at,o[11]=M*R+v*U+_*K+b*ut,o[15]=M*S+v*N+_*j+b*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+o*c*u-s*l*u-o*a*f+n*l*f+s*a*p-n*c*p)+x*(+e*c*p-e*l*f+o*r*f-s*r*p+s*l*h-o*c*h)+m*(+e*l*u-e*a*p-o*r*u+n*r*p+o*a*h-n*l*h)+d*(-s*a*h-e*c*u+e*a*f+s*r*u-n*r*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],M=u*m*l-x*f*l+x*c*p-a*m*p-u*c*d+a*f*d,v=g*f*l-h*m*l-g*c*p+r*m*p+h*c*d-r*f*d,_=h*x*l-g*u*l+g*a*p-r*x*p-h*a*d+r*u*d,b=g*u*c-h*x*c-g*a*f+r*x*f+h*a*m-r*u*m,E=e*M+n*v+s*_+o*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=M*T,t[1]=(x*f*o-u*m*o-x*s*p+n*m*p+u*s*d-n*f*d)*T,t[2]=(a*m*o-x*c*o+x*s*l-n*m*l-a*s*d+n*c*d)*T,t[3]=(u*c*o-a*f*o-u*s*l+n*f*l+a*s*p-n*c*p)*T,t[4]=v*T,t[5]=(h*m*o-g*f*o+g*s*p-e*m*p-h*s*d+e*f*d)*T,t[6]=(g*c*o-r*m*o-g*s*l+e*m*l+r*s*d-e*c*d)*T,t[7]=(r*f*o-h*c*o+h*s*l-e*f*l-r*s*p+e*c*p)*T,t[8]=_*T,t[9]=(g*u*o-h*x*o-g*n*p+e*x*p+h*n*d-e*u*d)*T,t[10]=(r*x*o-g*a*o+g*n*l-e*x*l-r*n*d+e*a*d)*T,t[11]=(h*a*o-r*u*o-h*n*l+e*u*l+r*n*p-e*a*p)*T,t[12]=b*T,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*m+e*u*m)*T,t[14]=(g*a*s-r*x*s-g*n*c+e*x*c+r*n*m-e*a*m)*T,t[15]=(r*u*s-h*a*s+h*n*c-e*u*c-r*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,f=o*l,p=o*h,g=o*u,x=r*h,m=r*u,d=a*u,M=c*l,v=c*h,_=c*u,b=n.x,E=n.y,T=n.z;return s[0]=(1-(x+d))*b,s[1]=(p+_)*b,s[2]=(g-v)*b,s[3]=0,s[4]=(p-_)*E,s[5]=(1-(f+d))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+v)*T,s[9]=(m-M)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Gi.set(s[0],s[1],s[2]).length();const r=Gi.set(s[4],s[5],s[6]).length(),a=Gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],_n.copy(this);const l=1/o,h=1/r,u=1/a;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,e.setFromRotationMatrix(_n),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Wn){const c=this.elements,l=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(a===Wn)p=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===cr)p=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Wn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(r-o),f=(e+t)*l,p=(n+s)*h;let g,x;if(a===Wn)g=(r+o)*u,x=-2*u;else if(a===cr)g=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Gi=new D,_n=new de,yd=new D(0,0,0),wd=new D(1,1,1),$n=new D,xo=new D,Qe=new D,kl=new de,Gl=new io;class Ln{constructor(t=0,e=0,n=0,s=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gl.setFromEuler(this),this.setFromQuaternion(Gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class _u{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sd=0;const Hl=new D,Hi=new io,On=new de,Mo=new D,As=new D,Ed=new D,bd=new io,Vl=new D(1,0,0),Wl=new D(0,1,0),Xl=new D(0,0,1),Yl={type:"added"},Td={type:"removed"},Vi={type:"childadded",child:null},Wr={type:"childremoved",child:null};class De extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new D,e=new Ln,n=new io,s=new D(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Ht}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(Vl,t)}rotateY(t){return this.rotateOnAxis(Wl,t)}rotateZ(t){return this.rotateOnAxis(Xl,t)}translateOnAxis(t,e){return Hl.copy(t).applyQuaternion(this.quaternion),this.position.add(Hl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vl,t)}translateY(t){return this.translateOnAxis(Wl,t)}translateZ(t){return this.translateOnAxis(Xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Mo.copy(t):Mo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(As,Mo,this.up):On.lookAt(Mo,As,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(On),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yl),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Td),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yl),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,Ed),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),f=r(t.skeletons),p=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}De.DEFAULT_UP=new D(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new D,zn=new D,Xr=new D,Bn=new D,Wi=new D,Xi=new D,ql=new D,Yr=new D,qr=new D,Zr=new D,Kr=new ae,Jr=new ae,jr=new ae;class xn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){vn.subVectors(s,e),zn.subVectors(n,e),Xr.subVectors(t,e);const r=vn.dot(vn),a=vn.dot(zn),c=vn.dot(Xr),l=zn.dot(zn),h=zn.dot(Xr),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const f=1/u,p=(l*c-a*h)*f,g=(r*h-a*c)*f;return o.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,o,r,a,c){return this.getBarycoord(t,e,n,s,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Bn.x),c.addScaledVector(r,Bn.y),c.addScaledVector(a,Bn.z),c)}static getInterpolatedAttribute(t,e,n,s,o,r){return Kr.setScalar(0),Jr.setScalar(0),jr.setScalar(0),Kr.fromBufferAttribute(t,e),Jr.fromBufferAttribute(t,n),jr.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Kr,o.x),r.addScaledVector(Jr,o.y),r.addScaledVector(jr,o.z),r}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),zn.subVectors(t,e),vn.cross(zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),vn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Wi.subVectors(s,n),Xi.subVectors(o,n),Yr.subVectors(t,n);const c=Wi.dot(Yr),l=Xi.dot(Yr);if(c<=0&&l<=0)return e.copy(n);qr.subVectors(t,s);const h=Wi.dot(qr),u=Xi.dot(qr);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(Wi,r);Zr.subVectors(t,o);const p=Wi.dot(Zr),g=Xi.dot(Zr);if(g>=0&&p<=g)return e.copy(o);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Xi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return ql.subVectors(o,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(ql,a);const d=1/(m+x+f);return r=x*d,a=f*d,e.copy(n).addScaledVector(Wi,r).addScaledVector(Xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},yo={h:0,s:0,l:0};function $r(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class _t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=ld(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=$r(r,o,t+1/3),this.g=$r(r,o,t),this.b=$r(r,o,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=qe){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const n=vu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return ee.fromWorkingColorSpace(Be.copy(this),t),Math.round(Yt(Be.r*255,0,255))*65536+Math.round(Yt(Be.g*255,0,255))*256+Math.round(Yt(Be.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,s=Be.g,o=Be.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case n:c=(s-o)/u+(s<o?6:0);break;case s:c=(o-n)/u+2;break;case o:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=qe){ee.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,s=Be.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(yo);const n=Nr(Qn.h,yo.h,e),s=Nr(Qn.s,yo.s,e),o=Nr(Qn.l,yo.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new _t;_t.NAMES=vu;let Ad=0;class ys extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Ms(),this.name="",this.type="Material",this.blending=es,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=za,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oa&&(n.blendSrc=this.blendSrc),this.blendDst!==za&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Z extends ys{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=$h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new D,wo=new lt;class Sn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ul,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wo.fromBufferAttribute(this,e),wo.applyMatrix3(t),this.setXY(e,wo.x,wo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Es(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Es(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Es(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Es(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),s=Ye(s,this.array),o=Ye(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ul&&(t.usage=this.usage),t}}class xu extends Sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Mu extends Sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qt extends Sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rd=0;const hn=new de,Qr=new De,Yi=new D,tn=new so,Rs=new so,Le=new D;class Ae extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(du(t)?Mu:xu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Ht().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return Qr.lookAt(t),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new qt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new so);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];tn.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(tn.min,Rs.min),tn.expandByPoint(Le),Le.addVectors(tn.max,Rs.max),tn.expandByPoint(Le)):(tn.expandByPoint(Rs.min),tn.expandByPoint(Rs.max))}tn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Le.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Le.fromBufferAttribute(a,l),c&&(Yi.fromBufferAttribute(t,l),Le.add(Yi)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new D,c[R]=new D;const l=new D,h=new D,u=new D,f=new lt,p=new lt,g=new lt,x=new D,m=new D;function d(R,S,w){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,w),f.fromBufferAttribute(o,R),p.fromBufferAttribute(o,S),g.fromBufferAttribute(o,w),h.sub(l),u.sub(l),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[R].add(x),a[S].add(x),a[w].add(x),c[R].add(m),c[S].add(m),c[w].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,S=M.length;R<S;++R){const w=M[R],P=w.start,U=w.count;for(let N=P,G=P+U;N<G;N+=3)d(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const v=new D,_=new D,b=new D,E=new D;function T(R){b.fromBufferAttribute(s,R),E.copy(b);const S=a[R];v.copy(S),v.sub(b.multiplyScalar(b.dot(S))).normalize(),_.crossVectors(E,S);const P=_.dot(c[R])<0?-1:1;r.setXYZW(R,v.x,v.y,v.z,P)}for(let R=0,S=M.length;R<S;++R){const w=M[R],P=w.start,U=w.count;for(let N=P,G=P+U;N<G;N+=3)T(t.getX(N+0)),T(t.getX(N+1)),T(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new D,o=new D,r=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new Sn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zl=new de,li=new gu,So=new br,Kl=new D,Eo=new D,bo=new D,To=new D,ta=new D,Ao=new D,Jl=new D,Ro=new D;class L extends De{constructor(t=new Ae,e=new Z){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Ao.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(ta.fromBufferAttribute(u,t),r?Ao.addScaledVector(ta,h):Ao.addScaledVector(ta.sub(e),h))}e.add(Ao)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(o),li.copy(t.ray).recast(t.near),!(So.containsPoint(li.origin)===!1&&(li.intersectSphere(So,Kl)===null||li.origin.distanceToSquared(Kl)>(t.far-t.near)**2))&&(Zl.copy(o).invert(),li.copy(t.ray).applyMatrix4(Zl),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=r[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=M,b=v;_<b;_+=3){const E=a.getX(_),T=a.getX(_+1),R=a.getX(_+2);s=Co(this,d,t,n,l,h,u,E,T,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const M=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);s=Co(this,r,t,n,l,h,u,M,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=r[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=M,b=v;_<b;_+=3){const E=_,T=_+1,R=_+2;s=Co(this,d,t,n,l,h,u,E,T,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const M=m,v=m+1,_=m+2;s=Co(this,r,t,n,l,h,u,M,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Cd(i,t,e,n,s,o,r,a){let c;if(t.side===Je?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,t.side===si,a),c===null)return null;Ro.copy(a),Ro.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ro);return l<e.near||l>e.far?null:{distance:l,point:Ro.clone(),object:i}}function Co(i,t,e,n,s,o,r,a,c,l){i.getVertexPosition(a,Eo),i.getVertexPosition(c,bo),i.getVertexPosition(l,To);const h=Cd(i,t,e,n,Eo,bo,To,Jl);if(h){const u=new D;xn.getBarycoord(Jl,Eo,bo,To,u),s&&(h.uv=xn.getInterpolatedAttribute(s,a,c,l,u,new lt)),o&&(h.uv1=xn.getInterpolatedAttribute(o,a,c,l,u,new lt)),r&&(h.normal=xn.getInterpolatedAttribute(r,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new D,materialIndex:0};xn.getNormal(Eo,bo,To,f.normal),h.face=f,h.barycoord=u}return h}class oo extends Ae{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(u,2));function g(x,m,d,M,v,_,b,E,T,R,S){const w=_/T,P=b/R,U=_/2,N=b/2,G=E/2,W=T+1,K=R+1;let j=0,Y=0;const at=new D;for(let ut=0;ut<K;ut++){const Tt=ut*P-N;for(let kt=0;kt<W;kt++){const ce=kt*w-U;at[x]=ce*M,at[m]=Tt*v,at[d]=G,l.push(at.x,at.y,at.z),at[x]=0,at[m]=0,at[d]=E>0?1:-1,h.push(at.x,at.y,at.z),u.push(kt/T),u.push(1-ut/R),j+=1}}for(let ut=0;ut<R;ut++)for(let Tt=0;Tt<T;Tt++){const kt=f+Tt+W*ut,ce=f+Tt+W*(ut+1),tt=f+(Tt+1)+W*(ut+1),ct=f+(Tt+1)+W*ut;c.push(kt,ce,ct),c.push(ce,tt,ct),Y+=6}a.addGroup(p,Y,S),p+=Y,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ps(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){const t={};for(let e=0;e<i.length;e++){const n=ps(i[e]);for(const s in n)t[s]=n[s]}return t}function Pd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function yu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const hr={clone:ps,merge:He};var Ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ze extends ys{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ld,this.fragmentShader=Id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=Pd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class wu extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new D,jl=new lt,$l=new lt;class nn extends wu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=yc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yc*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,jl,$l),e.subVectors($l,jl)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qi=-90,Zi=1;class Dd extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(qi,Zi,t,e);s.layers=this.layers,this.add(s);const o=new nn(qi,Zi,t,e);o.layers=this.layers,this.add(o);const r=new nn(qi,Zi,t,e);r.layers=this.layers,this.add(r);const a=new nn(qi,Zi,t,e);a.layers=this.layers,this.add(a);const c=new nn(qi,Zi,t,e);c.layers=this.layers,this.add(c);const l=new nn(qi,Zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Su extends We{constructor(t,e,n,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ls,super(t,e,n,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ud extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Su(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new oo(5,5,5),o=new Ze({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:Xn});o.uniforms.tEquirect.value=e;const r=new L(s,o),a=e.minFilter;return e.minFilter===bi&&(e.minFilter=Pn),new Dd(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}class ol{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new _t(t),this.density=e}clone(){return new ol(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Nd extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ea=new D,Fd=new D,Od=new Ht;class mi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ea.subVectors(n,e).cross(Fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ea),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Od.getNormalMatrix(t),s=this.coplanarPoint(ea).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new br,Po=new D;class rl{constructor(t=new mi,e=new mi,n=new mi,s=new mi,o=new mi,r=new mi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],M=s[13],v=s[14],_=s[15];if(n[0].setComponents(c-o,f-l,m-p,_-d).normalize(),n[1].setComponents(c+o,f+l,m+p,_+d).normalize(),n[2].setComponents(c+r,f+h,m+g,_+M).normalize(),n[3].setComponents(c-r,f-h,m-g,_-M).normalize(),n[4].setComponents(c-a,f-u,m-x,_-v).normalize(),e===Wn)n[5].setComponents(c+a,f+u,m+x,_+v).normalize();else if(e===cr)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Po.x=s.normal.x>0?t.max.x:t.min.x,Po.y=s.normal.y>0?t.max.y:t.min.y,Po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Po)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class al extends ys{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ur=new D,fr=new D,Ql=new de,Cs=new gu,Lo=new br,na=new D,th=new D;class Eu extends De{constructor(t=new Ae,e=new al){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)ur.fromBufferAttribute(e,s-1),fr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ur.distanceTo(fr);t.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(s),Lo.radius+=o,t.ray.intersectsSphere(Lo)===!1)return;Ql.copy(s).invert(),Cs.copy(t.ray).applyMatrix4(Ql);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let x=p,m=g-1;x<m;x+=l){const d=h.getX(x),M=h.getX(x+1),v=Io(this,t,Cs,c,d,M);v&&e.push(v)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(p),d=Io(this,t,Cs,c,x,m);d&&e.push(d)}}else{const p=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let x=p,m=g-1;x<m;x+=l){const d=Io(this,t,Cs,c,x,x+1);d&&e.push(d)}if(this.isLineLoop){const x=Io(this,t,Cs,c,g-1,p);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Io(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(ur.fromBufferAttribute(r,s),fr.fromBufferAttribute(r,o),e.distanceSqToSegment(ur,fr,na,th)>n)return;na.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(na);if(!(c<t.near||c>t.far))return{distance:c,point:th.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const eh=new D,nh=new D;class zd extends Eu{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)eh.fromBufferAttribute(e,s),nh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+eh.distanceTo(nh);t.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ne extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}class bu extends We{constructor(t,e,n,s,o,r,a,c,l){super(t,e,n,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tu extends We{constructor(t,e,n,s,o,r,a,c,l,h=ns){if(h!==ns&&h!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=Pi),n===void 0&&h===fs&&(n=us),super(null,s,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:yn,this.minFilter=c!==void 0?c:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(o-1);const h=n[s],f=n[s+1]-h,p=(r-h)/f;return(s+p)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new lt:new D);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,s=[],o=[],r=[],a=new D,c=new de;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new D)}o[0]=new D,r[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Yt(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(c.makeRotationAxis(a,g))}r[p].crossVectors(s[p],o[p])}if(e===!0){let p=Math.acos(Yt(o[0].dot(o[t]),-1,1));p/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class cl extends Dn{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new lt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Bd extends cl{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function ll(){let i=0,t=0,e=0,n=0;function s(o,r,a,c){i=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let f=(r-o)/l-(a-o)/(l+h)+(a-r)/h,p=(a-r)/h-(c-r)/(h+u)+(c-a)/u;f*=h,p*=h,s(r,a,f,p)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Do=new D,ia=new ll,sa=new ll,oa=new ll;class wc extends Dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(Do.subVectors(s[0],s[1]).add(s[0]),l=Do);const u=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Do.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Do),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ia.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,x,m),sa.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,x,m),oa.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ia.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),sa.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),oa.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(ia.calc(c),sa.calc(c),oa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ih(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*i+e}function kd(i,t){const e=1-i;return e*e*t}function Gd(i,t){return 2*(1-i)*i*t}function Hd(i,t){return i*i*t}function Vs(i,t,e,n){return kd(i,t)+Gd(i,e)+Hd(i,n)}function Vd(i,t){const e=1-i;return e*e*e*t}function Wd(i,t){const e=1-i;return 3*e*e*i*t}function Xd(i,t){return 3*(1-i)*i*i*t}function Yd(i,t){return i*i*i*t}function Ws(i,t,e,n,s){return Vd(i,t)+Wd(i,e)+Xd(i,n)+Yd(i,s)}class Au extends Dn{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ws(t,s.x,o.x,r.x,a.x),Ws(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qd extends Dn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ws(t,s.x,o.x,r.x,a.x),Ws(t,s.y,o.y,r.y,a.y),Ws(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ru extends Dn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cu extends Dn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pu extends Dn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Vs(t,s.x,o.x,r.x),Vs(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lu extends Dn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Vs(t,s.x,o.x,r.x),Vs(t,s.y,o.y,r.y),Vs(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Iu extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(ih(a,c.x,l.x,h.x,u.x),ih(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new lt().fromArray(s))}return this}}var Sc=Object.freeze({__proto__:null,ArcCurve:Bd,CatmullRomCurve3:wc,CubicBezierCurve:Au,CubicBezierCurve3:qd,EllipseCurve:cl,LineCurve:Ru,LineCurve3:Cu,QuadraticBezierCurve:Pu,QuadraticBezierCurve3:Lu,SplineCurve:Iu});class Zd extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Sc[s.type]().fromJSON(s))}return this}}class dr extends Zd{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ru(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new Pu(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new Au(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Iu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,o,r,a,c),this}absellipse(t,e,n,s,o,r,a,c){const l=new cl(t,e,n,s,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ie extends Ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new D,h=new lt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[f]/t+1)/2,h.y=(r[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ie(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class wt extends Ae{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],f=[],p=[];let g=0;const x=[],m=n/2;let d=0;M(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(p,2));function M(){const _=new D,b=new D;let E=0;const T=(e-t)/n;for(let R=0;R<=o;R++){const S=[],w=R/o,P=w*(e-t)+t;for(let U=0;U<=s;U++){const N=U/s,G=N*c+a,W=Math.sin(G),K=Math.cos(G);b.x=P*W,b.y=-w*n+m,b.z=P*K,u.push(b.x,b.y,b.z),_.set(W,T,K).normalize(),f.push(_.x,_.y,_.z),p.push(N,1-w),S.push(g++)}x.push(S)}for(let R=0;R<s;R++)for(let S=0;S<o;S++){const w=x[S][R],P=x[S+1][R],U=x[S+1][R+1],N=x[S][R+1];(t>0||S!==0)&&(h.push(w,P,N),E+=3),(e>0||S!==o-1)&&(h.push(P,U,N),E+=3)}l.addGroup(d,E,0),d+=E}function v(_){const b=g,E=new lt,T=new D;let R=0;const S=_===!0?t:e,w=_===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*w,0),f.push(0,w,0),p.push(.5,.5),g++;const P=g;for(let U=0;U<=s;U++){const G=U/s*c+a,W=Math.cos(G),K=Math.sin(G);T.x=S*K,T.y=m*w,T.z=S*W,u.push(T.x,T.y,T.z),f.push(0,w,0),E.x=W*.5+.5,E.y=K*.5*w+.5,p.push(E.x,E.y),g++}for(let U=0;U<s;U++){const N=b+U,G=P+U;_===!0?h.push(G,G+1,N):h.push(G+1,G,N),R+=3}l.addGroup(d,R,_===!0?1:2),d+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class In extends wt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new In(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hl extends Ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),l(n),h(),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(o.slice(),3)),this.setAttribute("uv",new qt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new D,_=new D,b=new D;for(let E=0;E<e.length;E+=3)p(e[E+0],v),p(e[E+1],_),p(e[E+2],b),c(v,_,b,M)}function c(M,v,_,b){const E=b+1,T=[];for(let R=0;R<=E;R++){T[R]=[];const S=M.clone().lerp(_,R/E),w=v.clone().lerp(_,R/E),P=E-R;for(let U=0;U<=P;U++)U===0&&R===E?T[R][U]=S:T[R][U]=S.clone().lerp(w,U/P)}for(let R=0;R<E;R++)for(let S=0;S<2*(E-R)-1;S++){const w=Math.floor(S/2);S%2===0?(f(T[R][w+1]),f(T[R+1][w]),f(T[R][w])):(f(T[R][w+1]),f(T[R+1][w+1]),f(T[R+1][w]))}}function l(M){const v=new D;for(let _=0;_<o.length;_+=3)v.x=o[_+0],v.y=o[_+1],v.z=o[_+2],v.normalize().multiplyScalar(M),o[_+0]=v.x,o[_+1]=v.y,o[_+2]=v.z}function h(){const M=new D;for(let v=0;v<o.length;v+=3){M.x=o[v+0],M.y=o[v+1],M.z=o[v+2];const _=m(M)/2/Math.PI+.5,b=d(M)/Math.PI+.5;r.push(_,1-b)}g(),u()}function u(){for(let M=0;M<r.length;M+=6){const v=r[M+0],_=r[M+2],b=r[M+4],E=Math.max(v,_,b),T=Math.min(v,_,b);E>.9&&T<.1&&(v<.2&&(r[M+0]+=1),_<.2&&(r[M+2]+=1),b<.2&&(r[M+4]+=1))}}function f(M){o.push(M.x,M.y,M.z)}function p(M,v){const _=M*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function g(){const M=new D,v=new D,_=new D,b=new D,E=new lt,T=new lt,R=new lt;for(let S=0,w=0;S<o.length;S+=9,w+=6){M.set(o[S+0],o[S+1],o[S+2]),v.set(o[S+3],o[S+4],o[S+5]),_.set(o[S+6],o[S+7],o[S+8]),E.set(r[w+0],r[w+1]),T.set(r[w+2],r[w+3]),R.set(r[w+4],r[w+5]),b.copy(M).add(v).add(_).divideScalar(3);const P=m(b);x(E,w+0,M,P),x(T,w+2,v,P),x(R,w+4,_,P)}}function x(M,v,_,b){b<0&&M.x===1&&(r[v]=M.x-1),_.x===0&&_.z===0&&(r[v]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hl(t.vertices,t.indices,t.radius,t.details)}}class Ec extends dr{constructor(t){super(t),this.uuid=Ms(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new dr().fromJSON(s))}return this}}const Kd={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=Du(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,u,f,p;if(n&&(o=tp(i,t,o,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return qs(o,r,e,a,c,p,0),r}};function Du(i,t,e,n,s){let o,r;if(s===up(i,t,e,n)>0)for(o=t;o<e;o+=n)r=sh(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=sh(o,i[o],i[o+1],r);return r&&Tr(r,r.next)&&(Ks(r),r=r.next),r}function Li(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Tr(e,e.next)||ge(e.prev,e,e.next)===0)){if(Ks(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qs(i,t,e,n,s,o,r){if(!i)return;!r&&o&&op(i,n,s,o);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,o?jd(i,n,s,o):Jd(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ks(i),i=l.next,a=l.next;continue}if(i=l,i===a){r?r===1?(i=$d(Li(i),t,e),qs(i,t,e,n,s,o,2)):r===2&&Qd(i,t,e,n,s,o):qs(Li(i),t,e,n,s,o,1);break}}}function Jd(i){const t=i.prev,e=i,n=i.next;if(ge(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=s<o?s<r?s:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,f=s>o?s>r?s:r:o>r?o:r,p=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&Qi(s,a,o,c,r,l,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function jd(i,t,e,n){const s=i.prev,o=i,r=i.next;if(ge(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,u=o.y,f=r.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,d=bc(p,g,t,e,n),M=bc(x,m,t,e,n);let v=i.prevZ,_=i.nextZ;for(;v&&v.z>=d&&_&&_.z<=M;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&Qi(a,h,c,u,l,f,v.x,v.y)&&ge(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==r&&Qi(a,h,c,u,l,f,_.x,_.y)&&ge(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=d;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&Qi(a,h,c,u,l,f,v.x,v.y)&&ge(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=M;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==r&&Qi(a,h,c,u,l,f,_.x,_.y)&&ge(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function $d(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!Tr(s,o)&&Uu(s,n,n.next,o)&&Zs(s,o)&&Zs(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Ks(n),Ks(n.next),n=i=o),n=n.next}while(n!==i);return Li(n)}function Qd(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&cp(r,a)){let c=Nu(r,a);r=Li(r,r.next),c=Li(c,c.next),qs(r,t,e,n,s,o,0),qs(c,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function tp(i,t,e,n){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:i.length,l=Du(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(ap(l));for(s.sort(ep),o=0;o<s.length;o++)e=np(s[o],e);return e}function ep(i,t){return i.x-t.x}function np(i,t){const e=ip(i,t);if(!e)return t;const n=Nu(e,i);return Li(n,n.next),Li(e,e.next)}function ip(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&Qi(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),Zs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&sp(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function sp(i,t){return ge(i.prev,i,t.prev)<0&&ge(t.next,i,i.next)<0}function op(i,t,e,n){let s=i;do s.z===0&&(s.z=bc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,rp(s)}function rp(i){let t,e,n,s,o,r,a,c,l=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,l*=2}while(r>1);return i}function bc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ap(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Qi(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function cp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!lp(i,t)&&(Zs(i,t)&&Zs(t,i)&&hp(i,t)&&(ge(i.prev,i,t.prev)||ge(i,t.prev,t))||Tr(i,t)&&ge(i.prev,i,i.next)>0&&ge(t.prev,t,t.next)>0)}function ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Tr(i,t){return i.x===t.x&&i.y===t.y}function Uu(i,t,e,n){const s=No(ge(i,t,e)),o=No(ge(i,t,n)),r=No(ge(e,n,i)),a=No(ge(e,n,t));return!!(s!==o&&r!==a||s===0&&Uo(i,e,t)||o===0&&Uo(i,n,t)||r===0&&Uo(e,i,n)||a===0&&Uo(e,t,n))}function Uo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function No(i){return i>0?1:i<0?-1:0}function lp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Uu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Zs(i,t){return ge(i.prev,i,i.next)<0?ge(i,t,i.next)>=0&&ge(i,i.prev,t)>=0:ge(i,t,i.prev)<0||ge(i,i.next,t)<0}function hp(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Nu(i,t){const e=new Tc(i.i,i.x,i.y),n=new Tc(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function sh(i,t,e,n){const s=new Tc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Tc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function up(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Xs{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Xs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];oh(t),rh(n,t);let r=t.length;e.forEach(oh);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,rh(n,e[c]);const a=Kd.triangulate(n,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function oh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function rh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ai extends hl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ai(t.radius,t.detail)}}class we extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,p=[],g=[],x=[],m=[];for(let d=0;d<h;d++){const M=d*f-r;for(let v=0;v<l;v++){const _=v*u-o;g.push(_,-M,0),x.push(0,0,1),m.push(v/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<a;M++){const v=M+l*d,_=M+l*(d+1),b=M+1+l*(d+1),E=M+1+l*d;p.push(v,_,E),p.push(_,b,E)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.widthSegments,t.heightSegments)}}class pr extends Ae{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const f=(e-t)/s,p=new D,g=new lt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const d=o+m/n*r;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){const m=x*(n+1);for(let d=0;d<n;d++){const M=d+m,v=M,_=M+n+1,b=M+n+2,E=M+1;a.push(v,_,E),a.push(_,b,E)}}this.setIndex(a),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class mr extends Ae{constructor(t=new Ec([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(o,3)),this.setAttribute("uv",new qt(r,2));function l(h){const u=s.length/3,f=h.extractPoints(e);let p=f.shape;const g=f.holes;Xs.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){const M=g[m];Xs.isClockWise(M)===!0&&(g[m]=M.reverse())}const x=Xs.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){const M=g[m];p=p.concat(M)}for(let m=0,d=p.length;m<d;m++){const M=p[m];s.push(M.x,M.y,0),o.push(0,0,1),r.push(M.x,M.y)}for(let m=0,d=x.length;m<d;m++){const M=x[m],v=M[0]+u,_=M[1]+u,b=M[2]+u;n.push(v,_,b),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return fp(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new mr(n,t.curveSegments)}}function fp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class q extends Ae{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new D,f=new D,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){const M=[],v=d/n;let _=0;d===0&&r===0?_=.5/e:d===n&&c===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){const E=b/e;u.x=-t*Math.cos(s+E*o)*Math.sin(r+v*a),u.y=t*Math.cos(r+v*a),u.z=t*Math.sin(s+E*o)*Math.sin(r+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(E+_,1-v),M.push(l++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<e;M++){const v=h[d][M+1],_=h[d][M],b=h[d+1][M],E=h[d+1][M+1];(d!==0||r>0)&&p.push(v,_,E),(d!==n-1||c<Math.PI)&&p.push(_,b,E)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new q(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Se extends Ae{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],c=[],l=[],h=new D,u=new D,f=new D;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const x=g/s*o,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,M=(s+1)*p+g;r.push(x,m,M),r.push(m,d,M)}this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ms extends Ae{constructor(t=new Lu(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new D,c=new D,l=new lt;let h=new D;const u=[],f=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(p,2));function x(){for(let v=0;v<e;v++)m(v);m(o===!1?e:0),M(),d()}function m(v){h=t.getPointAt(v/e,h);const _=r.normals[v],b=r.binormals[v];for(let E=0;E<=s;E++){const T=E/s*Math.PI*2,R=Math.sin(T),S=-Math.cos(T);c.x=S*_.x+R*b.x,c.y=S*_.y+R*b.y,c.z=S*_.z+R*b.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function d(){for(let v=1;v<=e;v++)for(let _=1;_<=s;_++){const b=(s+1)*(v-1)+(_-1),E=(s+1)*v+(_-1),T=(s+1)*v+_,R=(s+1)*(v-1)+_;g.push(b,E,R),g.push(E,T,R)}}function M(){for(let v=0;v<=e;v++)for(let _=0;_<=s;_++)l.x=v/e,l.y=_/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ms(new Sc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Q extends ys{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uu,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dp extends ys{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pp extends ys{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ul extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class mp extends ul{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ra=new de,ah=new D,ch=new D;class Fu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rl,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ah.setFromMatrixPosition(t.matrixWorld),e.position.copy(ah),ch.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ch),e.updateMatrixWorld(),ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ra),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const lh=new de,Ps=new D,aa=new D;class gp extends Fu{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Ps.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ps),aa.copy(n.position),aa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(aa),n.updateMatrixWorld(),s.makeTranslation(-Ps.x,-Ps.y,-Ps.z),lh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh)}}class Ui extends ul{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new gp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class fl extends wu{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class _p extends Fu{constructor(){super(new fl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ar extends ul{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new _p}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vp extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ou{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=hh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function hh(){return performance.now()}function uh(i,t,e,n){const s=xp(n);switch(e){case su:return i*t;case ru:return i*t;case au:return i*t*2;case cu:return i*t/s.components*s.byteLength;case nl:return i*t/s.components*s.byteLength;case lu:return i*t*2/s.components*s.byteLength;case il:return i*t*2/s.components*s.byteLength;case ou:return i*t*3/s.components*s.byteLength;case Mn:return i*t*4/s.components*s.byteLength;case sl:return i*t*4/s.components*s.byteLength;case Zo:case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jo:case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:case $a:return Math.max(i,16)*Math.max(t,8)/4;case Ka:case ja:return Math.max(i,8)*Math.max(t,8)/2;case Qa:case tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case rc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ac:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case hc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case $o:case gc:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*16;case hu:case vc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xc:case Mc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xp(i){switch(i){case Zn:case eu:return{byteLength:1,components:1};case Ys:case nu:case Yn:return{byteLength:2,components:1};case tl:case el:return{byteLength:2,components:4};case Pi:case Qc:case Vn:return{byteLength:4,components:1};case iu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$c);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zu(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Mp(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const x=u[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}var yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wp=`#ifdef USE_ALPHAHASH
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
#endif`,Sp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ap=`#ifdef USE_AOMAP
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
#endif`,Rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cp=`#ifdef USE_BATCHING
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
#endif`,Pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Up=`#ifdef USE_IRIDESCENCE
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
#endif`,Np=`#ifdef USE_BUMPMAP
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
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wp=`#define PI 3.141592653589793
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
} // validated`,Xp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yp=`vec3 transformedNormal = objectNormal;
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
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",$p=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qp=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c0=`#ifdef USE_GRADIENTMAP
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
}`,l0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f0=`uniform bool receiveShadow;
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
#endif`,d0=`#ifdef USE_ENVMAP
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
#endif`,p0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v0=`PhysicalMaterial material;
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
#endif`,x0=`struct PhysicalMaterial {
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
}`,M0=`
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
#endif`,y0=`#if defined( RE_IndirectDiffuse )
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
#endif`,w0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,P0=`#if defined( USE_POINTS_UV )
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
#endif`,L0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,U0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`#ifdef USE_MORPHTARGETS
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
#endif`,O0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,B0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V0=`#ifdef USE_NORMALMAP
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
#endif`,W0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,J0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,om=`float getShadowMask() {
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
}`,rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lm=`#ifdef USE_SKINNING
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
#endif`,hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#ifdef USE_TRANSMISSION
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ym=`uniform sampler2D t2D;
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`#include <common>
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
}`,Am=`#if DEPTH_PACKING == 3200
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
}`,Rm=`#define DISTANCE
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
}`,Cm=`#define DISTANCE
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`uniform float scale;
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Um=`#include <common>
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Fm=`#define LAMBERT
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
}`,Om=`#define LAMBERT
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
}`,zm=`#define MATCAP
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
}`,Bm=`#define MATCAP
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
}`,km=`#define NORMAL
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
}`,Gm=`#define NORMAL
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
}`,Hm=`#define PHONG
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
}`,Vm=`#define PHONG
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
}`,Wm=`#define STANDARD
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
}`,Xm=`#define STANDARD
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
}`,Ym=`#define TOON
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
}`,qm=`#define TOON
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
}`,Zm=`uniform float size;
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
}`,Km=`uniform vec3 diffuse;
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
}`,Jm=`#include <common>
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
}`,jm=`uniform vec3 color;
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
}`,$m=`uniform float rotation;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:yp,alphahash_pars_fragment:wp,alphamap_fragment:Sp,alphamap_pars_fragment:Ep,alphatest_fragment:bp,alphatest_pars_fragment:Tp,aomap_fragment:Ap,aomap_pars_fragment:Rp,batching_pars_vertex:Cp,batching_vertex:Pp,begin_vertex:Lp,beginnormal_vertex:Ip,bsdfs:Dp,iridescence_fragment:Up,bumpmap_pars_fragment:Np,clipping_planes_fragment:Fp,clipping_planes_pars_fragment:Op,clipping_planes_pars_vertex:zp,clipping_planes_vertex:Bp,color_fragment:kp,color_pars_fragment:Gp,color_pars_vertex:Hp,color_vertex:Vp,common:Wp,cube_uv_reflection_fragment:Xp,defaultnormal_vertex:Yp,displacementmap_pars_vertex:qp,displacementmap_vertex:Zp,emissivemap_fragment:Kp,emissivemap_pars_fragment:Jp,colorspace_fragment:jp,colorspace_pars_fragment:$p,envmap_fragment:Qp,envmap_common_pars_fragment:t0,envmap_pars_fragment:e0,envmap_pars_vertex:n0,envmap_physical_pars_fragment:d0,envmap_vertex:i0,fog_vertex:s0,fog_pars_vertex:o0,fog_fragment:r0,fog_pars_fragment:a0,gradientmap_pars_fragment:c0,lightmap_pars_fragment:l0,lights_lambert_fragment:h0,lights_lambert_pars_fragment:u0,lights_pars_begin:f0,lights_toon_fragment:p0,lights_toon_pars_fragment:m0,lights_phong_fragment:g0,lights_phong_pars_fragment:_0,lights_physical_fragment:v0,lights_physical_pars_fragment:x0,lights_fragment_begin:M0,lights_fragment_maps:y0,lights_fragment_end:w0,logdepthbuf_fragment:S0,logdepthbuf_pars_fragment:E0,logdepthbuf_pars_vertex:b0,logdepthbuf_vertex:T0,map_fragment:A0,map_pars_fragment:R0,map_particle_fragment:C0,map_particle_pars_fragment:P0,metalnessmap_fragment:L0,metalnessmap_pars_fragment:I0,morphinstance_vertex:D0,morphcolor_vertex:U0,morphnormal_vertex:N0,morphtarget_pars_vertex:F0,morphtarget_vertex:O0,normal_fragment_begin:z0,normal_fragment_maps:B0,normal_pars_fragment:k0,normal_pars_vertex:G0,normal_vertex:H0,normalmap_pars_fragment:V0,clearcoat_normal_fragment_begin:W0,clearcoat_normal_fragment_maps:X0,clearcoat_pars_fragment:Y0,iridescence_pars_fragment:q0,opaque_fragment:Z0,packing:K0,premultiplied_alpha_fragment:J0,project_vertex:j0,dithering_fragment:$0,dithering_pars_fragment:Q0,roughnessmap_fragment:tm,roughnessmap_pars_fragment:em,shadowmap_pars_fragment:nm,shadowmap_pars_vertex:im,shadowmap_vertex:sm,shadowmask_pars_fragment:om,skinbase_vertex:rm,skinning_pars_vertex:am,skinning_vertex:cm,skinnormal_vertex:lm,specularmap_fragment:hm,specularmap_pars_fragment:um,tonemapping_fragment:fm,tonemapping_pars_fragment:dm,transmission_fragment:pm,transmission_pars_fragment:mm,uv_pars_fragment:gm,uv_pars_vertex:_m,uv_vertex:vm,worldpos_vertex:xm,background_vert:Mm,background_frag:ym,backgroundCube_vert:wm,backgroundCube_frag:Sm,cube_vert:Em,cube_frag:bm,depth_vert:Tm,depth_frag:Am,distanceRGBA_vert:Rm,distanceRGBA_frag:Cm,equirect_vert:Pm,equirect_frag:Lm,linedashed_vert:Im,linedashed_frag:Dm,meshbasic_vert:Um,meshbasic_frag:Nm,meshlambert_vert:Fm,meshlambert_frag:Om,meshmatcap_vert:zm,meshmatcap_frag:Bm,meshnormal_vert:km,meshnormal_frag:Gm,meshphong_vert:Hm,meshphong_frag:Vm,meshphysical_vert:Wm,meshphysical_frag:Xm,meshtoon_vert:Ym,meshtoon_frag:qm,points_vert:Zm,points_frag:Km,shadow_vert:Jm,shadow_frag:jm,sprite_vert:$m,sprite_frag:Qm},ht={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Rn={basic:{uniforms:He([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:He([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new _t(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:He([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:He([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:He([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new _t(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:He([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:He([ht.points,ht.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:He([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:He([ht.common,ht.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:He([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:He([ht.sprite,ht.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:He([ht.common,ht.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:He([ht.lights,ht.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Rn.physical={uniforms:He([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Fo={r:0,b:0,g:0},ui=new Ln,tg=new de;function eg(i,t,e,n,s,o,r){const a=new _t(0);let c=o===!0?0:1,l,h,u=null,f=0,p=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_)),_}function x(v){let _=!1;const b=g(v);b===null?d(a,c):b&&b.isColor&&(d(b,1),_=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,_){const b=g(_);b&&(b.isCubeTexture||b.mapping===Er)?(h===void 0&&(h=new L(new oo(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:ps(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ui.copy(_.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tg.makeRotationFromEuler(ui)),h.material.toneMapped=ee.getTransfer(b.colorSpace)!==re,(u!==b||f!==b.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,p=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new L(new we(2,2),new Ze({name:"BackgroundMaterial",uniforms:ps(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ee.getTransfer(b.colorSpace)!==re,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,p=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function d(v,_){v.getRGB(Fo,yu(i)),n.buffers.color.setClear(Fo.r,Fo.g,Fo.b,_,r)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),c=_,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,d(a,c)},render:x,addToRenderList:m,dispose:M}}function ng(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let o=s,r=!1;function a(w,P,U,N,G){let W=!1;const K=u(N,U,P);o!==K&&(o=K,l(o.object)),W=p(w,N,U,G),W&&g(w,N,U,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(W||r)&&(r=!1,_(w,P,U,N),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function u(w,P,U){const N=U.wireframe===!0;let G=n[w.id];G===void 0&&(G={},n[w.id]=G);let W=G[P.id];W===void 0&&(W={},G[P.id]=W);let K=W[N];return K===void 0&&(K=f(c()),W[N]=K),K}function f(w){const P=[],U=[],N=[];for(let G=0;G<e;G++)P[G]=0,U[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:N,object:w,attributes:{},index:null}}function p(w,P,U,N){const G=o.attributes,W=P.attributes;let K=0;const j=U.getAttributes();for(const Y in j)if(j[Y].location>=0){const ut=G[Y];let Tt=W[Y];if(Tt===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(Tt=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(Tt=w.instanceColor)),ut===void 0||ut.attribute!==Tt||Tt&&ut.data!==Tt.data)return!0;K++}return o.attributesNum!==K||o.index!==N}function g(w,P,U,N){const G={},W=P.attributes;let K=0;const j=U.getAttributes();for(const Y in j)if(j[Y].location>=0){let ut=W[Y];ut===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(ut=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(ut=w.instanceColor));const Tt={};Tt.attribute=ut,ut&&ut.data&&(Tt.data=ut.data),G[Y]=Tt,K++}o.attributes=G,o.attributesNum=K,o.index=N}function x(){const w=o.newAttributes;for(let P=0,U=w.length;P<U;P++)w[P]=0}function m(w){d(w,0)}function d(w,P){const U=o.newAttributes,N=o.enabledAttributes,G=o.attributeDivisors;U[w]=1,N[w]===0&&(i.enableVertexAttribArray(w),N[w]=1),G[w]!==P&&(i.vertexAttribDivisor(w,P),G[w]=P)}function M(){const w=o.newAttributes,P=o.enabledAttributes;for(let U=0,N=P.length;U<N;U++)P[U]!==w[U]&&(i.disableVertexAttribArray(U),P[U]=0)}function v(w,P,U,N,G,W,K){K===!0?i.vertexAttribIPointer(w,P,U,G,W):i.vertexAttribPointer(w,P,U,N,G,W)}function _(w,P,U,N){x();const G=N.attributes,W=U.getAttributes(),K=P.defaultAttributeValues;for(const j in W){const Y=W[j];if(Y.location>=0){let at=G[j];if(at===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(at=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(at=w.instanceColor)),at!==void 0){const ut=at.normalized,Tt=at.itemSize,kt=t.get(at);if(kt===void 0)continue;const ce=kt.buffer,tt=kt.type,ct=kt.bytesPerElement,At=tt===i.INT||tt===i.UNSIGNED_INT||at.gpuType===Qc;if(at.isInterleavedBufferAttribute){const pt=at.data,Ut=pt.stride,Ot=at.offset;if(pt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<Y.locationSize;Xt++)d(Y.location+Xt,pt.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Xt=0;Xt<Y.locationSize;Xt++)m(Y.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let Xt=0;Xt<Y.locationSize;Xt++)v(Y.location+Xt,Tt/Y.locationSize,tt,ut,Ut*ct,(Ot+Tt/Y.locationSize*Xt)*ct,At)}else{if(at.isInstancedBufferAttribute){for(let pt=0;pt<Y.locationSize;pt++)d(Y.location+pt,at.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let pt=0;pt<Y.locationSize;pt++)m(Y.location+pt);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let pt=0;pt<Y.locationSize;pt++)v(Y.location+pt,Tt/Y.locationSize,tt,ut,Tt*ct,Tt/Y.locationSize*pt*ct,At)}}else if(K!==void 0){const ut=K[j];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(Y.location,ut);break;case 3:i.vertexAttrib3fv(Y.location,ut);break;case 4:i.vertexAttrib4fv(Y.location,ut);break;default:i.vertexAttrib1fv(Y.location,ut)}}}}M()}function b(){R();for(const w in n){const P=n[w];for(const U in P){const N=P[U];for(const G in N)h(N[G].object),delete N[G];delete P[U]}delete n[w]}}function E(w){if(n[w.id]===void 0)return;const P=n[w.id];for(const U in P){const N=P[U];for(const G in N)h(N[G].object),delete N[G];delete P[U]}delete n[w.id]}function T(w){for(const P in n){const U=n[P];if(U[w.id]===void 0)continue;const N=U[w.id];for(const G in N)h(N[G].object),delete N[G];delete U[w.id]}}function R(){S(),r=!0,o!==s&&(o=s,l(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function ig(i,t,e){let n;function s(l){n=l}function o(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)r(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function sg(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==Mn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===Yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Zn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Vn&&!R)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:b,maxSamples:E}}function og(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new mi,a=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||o&&!m)o?h(null):l();else{const M=o?0:n,v=M*4;let _=d.clippingState||null;c.value=_,_=h(g,f,v,p);for(let b=0;b!==v;++b)_[b]=e[b];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const d=p+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,_=p;v!==x;++v,_+=4)r.copy(u[v]).applyMatrix4(M,a),r.normal.toArray(m,_),m[_+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function rg(i){let t=new WeakMap;function e(r,a){return a===Ya?r.mapping=ls:a===qa&&(r.mapping=hs),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Ya||a===qa)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Ud(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const ts=4,fh=[.125,.215,.35,.446,.526,.582],Si=20,ca=new fl,dh=new _t;let la=null,ha=0,ua=0,fa=!1;const gi=(1+Math.sqrt(5))/2,Ki=1/gi,ph=[new D(-gi,Ki,0),new D(gi,Ki,0),new D(-Ki,0,gi),new D(Ki,0,gi),new D(0,gi,-Ki),new D(0,gi,Ki),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class mh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){la=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(la,ha,ua),this._renderer.xr.enabled=fa,t.scissorTest=!1,Oo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),la=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Yn,format:Mn,colorSpace:ds,depthBuffer:!1},s=gh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ag(o)),this._blurMaterial=cg(o,t,e)}return s}_compileMaterial(t){const e=new L(this._lodPlanes[0],t);this._renderer.compile(e,ca)}_sceneToCubeUV(t,e,n,s){const a=new nn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(dh),h.toneMapping=ii,h.autoClear=!1;const p=new Z({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),g=new L(new oo,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(dh),x=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):M===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const v=this._cubeSize;Oo(s,M*v,d>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ls||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new L(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;Oo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,ca)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=ph[(s-o-1)%ph.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new L(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Si-1),x=o/g,m=isFinite(o)?1+Math.floor(h*x):Si;m>Si&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);const d=[];let M=0;for(let T=0;T<Si;++T){const R=T/x,S=Math.exp(-R*R/2);d.push(S),T===0?M+=S:T<m&&(M+=2*S)}for(let T=0;T<d.length;T++)d[T]=d[T]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const _=this._sizeLods[s],b=3*_*(s>v-ts?s-v+ts:0),E=4*(this._cubeSize-_);Oo(e,b,E,3*_,2*_),c.setRenderTarget(e),c.render(u,ca)}}function ag(i){const t=[],e=[],n=[];let s=i;const o=i-ts+1+fh.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>i-ts?c=fh[r-i+ts-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,d=1,M=new Float32Array(x*g*p),v=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let E=0;E<p;E++){const T=E%3*2/3-1,R=E>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];M.set(S,x*g*E),v.set(f,m*g*E);const w=[E,E,E,E,E,E];_.set(w,d*g*E)}const b=new Ae;b.setAttribute("position",new Sn(M,x)),b.setAttribute("uv",new Sn(v,m)),b.setAttribute("faceIndex",new Sn(_,d)),t.push(b),s>ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function gh(i,t,e){const n=new wn(i,t,e);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function cg(i,t,e){const n=new Float32Array(Si),s=new D(0,1,0);return new Ze({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dl(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function _h(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function vh(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function dl(){return`

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
	`}function lg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ya||c===qa,h=c===ls||c===hs;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new mh(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new mh(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function hg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ji("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ug(i,t,e,n){const s={},o=new WeakMap;function r(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete s[f.id];const p=o.get(f);p&&(t.remove(p),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function l(u){const f=[],p=u.index,g=u.attributes.position;let x=0;if(p!==null){const M=p.array;x=p.version;for(let v=0,_=M.length;v<_;v+=3){const b=M[v+0],E=M[v+1],T=M[v+2];f.push(b,E,E,T,T,b)}}else if(g!==void 0){const M=g.array;x=g.version;for(let v=0,_=M.length/3-1;v<_;v+=3){const b=v+0,E=v+1,T=v+2;f.push(b,E,E,T,T,b)}}else return;const m=new(du(f)?Mu:xu)(f,1);m.version=x;const d=o.get(u);d&&t.remove(d),o.set(u,m)}function h(u){const f=o.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function fg(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function c(f,p){i.drawElements(n,p,o,f*r),e.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,o,f*r,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/r,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,o,f,0,x,0,g);let d=0;for(let M=0;M<g;M++)d+=p[M]*x[M];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function dg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function pg(i,t,e){const n=new WeakMap,s=new ae;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let w=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",w)};var p=w;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let b=a.attributes.position.count*_,E=1;b>t.maxTextureSize&&(E=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const T=new Float32Array(b*E*4*u),R=new mu(T,b,E,u);R.type=Vn,R.needsUpdate=!0;const S=_*4;for(let P=0;P<u;P++){const U=d[P],N=M[P],G=v[P],W=b*E*4*P;for(let K=0;K<U.count;K++){const j=K*S;g===!0&&(s.fromBufferAttribute(U,K),T[W+j+0]=s.x,T[W+j+1]=s.y,T[W+j+2]=s.z,T[W+j+3]=0),x===!0&&(s.fromBufferAttribute(N,K),T[W+j+4]=s.x,T[W+j+5]=s.y,T[W+j+6]=s.z,T[W+j+7]=0),m===!0&&(s.fromBufferAttribute(G,K),T[W+j+8]=s.x,T[W+j+9]=s.y,T[W+j+10]=s.z,T[W+j+11]=G.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new lt(b,E)},n.set(a,f),a.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function mg(i,t,e,n){let s=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}const Bu=new We,xh=new Tu(1,1),ku=new mu,Gu=new xd,Hu=new Su,Mh=[],yh=[],wh=new Float32Array(16),Sh=new Float32Array(9),Eh=new Float32Array(4);function ws(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Mh[s];if(o===void 0&&(o=new Float32Array(s),Mh[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rr(i,t){let e=yh[t];e===void 0&&(e=new Int32Array(t),yh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function gg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function Mg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Eh.set(n),i.uniformMatrix2fv(this.addr,!1,Eh),Pe(e,n)}}function yg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Sh.set(n),i.uniformMatrix3fv(this.addr,!1,Sh),Pe(e,n)}}function wg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;wh.set(n),i.uniformMatrix4fv(this.addr,!1,wh),Pe(e,n)}}function Sg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function Tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function Ag(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function Cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function Pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function Lg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(xh.compareFunction=fu,o=xh):o=Bu,e.setTexture2D(t||o,s)}function Ig(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Gu,s)}function Dg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Hu,s)}function Ug(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ku,s)}function Ng(i){switch(i){case 5126:return gg;case 35664:return _g;case 35665:return vg;case 35666:return xg;case 35674:return Mg;case 35675:return yg;case 35676:return wg;case 5124:case 35670:return Sg;case 35667:case 35671:return Eg;case 35668:case 35672:return bg;case 35669:case 35673:return Tg;case 5125:return Ag;case 36294:return Rg;case 36295:return Cg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Ug}}function Fg(i,t){i.uniform1fv(this.addr,t)}function Og(i,t){const e=ws(t,this.size,2);i.uniform2fv(this.addr,e)}function zg(i,t){const e=ws(t,this.size,3);i.uniform3fv(this.addr,e)}function Bg(i,t){const e=ws(t,this.size,4);i.uniform4fv(this.addr,e)}function kg(i,t){const e=ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Gg(i,t){const e=ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Hg(i,t){const e=ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Vg(i,t){i.uniform1iv(this.addr,t)}function Wg(i,t){i.uniform2iv(this.addr,t)}function Xg(i,t){i.uniform3iv(this.addr,t)}function Yg(i,t){i.uniform4iv(this.addr,t)}function qg(i,t){i.uniform1uiv(this.addr,t)}function Zg(i,t){i.uniform2uiv(this.addr,t)}function Kg(i,t){i.uniform3uiv(this.addr,t)}function Jg(i,t){i.uniform4uiv(this.addr,t)}function jg(i,t,e){const n=this.cache,s=t.length,o=Rr(e,s);Ce(n,o)||(i.uniform1iv(this.addr,o),Pe(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Bu,o[r])}function $g(i,t,e){const n=this.cache,s=t.length,o=Rr(e,s);Ce(n,o)||(i.uniform1iv(this.addr,o),Pe(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Gu,o[r])}function Qg(i,t,e){const n=this.cache,s=t.length,o=Rr(e,s);Ce(n,o)||(i.uniform1iv(this.addr,o),Pe(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Hu,o[r])}function t_(i,t,e){const n=this.cache,s=t.length,o=Rr(e,s);Ce(n,o)||(i.uniform1iv(this.addr,o),Pe(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||ku,o[r])}function e_(i){switch(i){case 5126:return Fg;case 35664:return Og;case 35665:return zg;case 35666:return Bg;case 35674:return kg;case 35675:return Gg;case 35676:return Hg;case 5124:case 35670:return Vg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return Yg;case 5125:return qg;case 36294:return Zg;case 36295:return Kg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return t_}}class n_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ng(e.type)}}class i_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=e_(e.type)}}class s_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const da=/(\w+)(\])?(\[|\.)?/g;function bh(i,t){i.seq.push(t),i.map[t.id]=t}function o_(i,t,e){const n=i.name,s=n.length;for(da.lastIndex=0;;){const o=da.exec(n),r=da.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){bh(e,l===void 0?new n_(a,i,t):new i_(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new s_(a),bh(e,u)),e=u}}}class Qo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);o_(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Th(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const r_=37297;let a_=0;function c_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Ah=new Ht;function l_(i){ee._getMatrix(Ah,ee.workingColorSpace,i);const t=`mat3( ${Ah.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case ar:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Rh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+c_(i.getShaderSource(t),r)}else return s}function h_(i,t){const e=l_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function u_(i,t){let e;switch(t){case Yf:e="Linear";break;case qf:e="Reinhard";break;case Zf:e="Cineon";break;case Qh:e="ACESFilmic";break;case Jf:e="AgX";break;case jf:e="Neutral";break;case Kf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zo=new D;function f_(){ee.getLuminanceCoefficients(zo);const i=zo.x.toFixed(4),t=zo.y.toFixed(4),e=zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function p_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function m_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Us(i){return i!==""}function Ch(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ph(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const g_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(i){return i.replace(g_,v_)}const __=new Map;function v_(i,t){let e=Wt[t];if(e===void 0){const n=__.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ac(e)}const x_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lh(i){return i.replace(x_,M_)}function M_(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Ih(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function y_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===jh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function w_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case hs:t="ENVMAP_TYPE_CUBE";break;case Er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function S_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function E_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $h:t="ENVMAP_BLENDING_MULTIPLY";break;case Wf:t="ENVMAP_BLENDING_MIX";break;case Xf:t="ENVMAP_BLENDING_ADD";break}return t}function b_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function T_(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=y_(e),l=w_(e),h=S_(e),u=E_(e),f=b_(e),p=d_(e),g=p_(o),x=s.createProgram();let m,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),d.length>0&&(d+=`
`)):(m=[Ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),d=[Ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Wt.tonemapping_pars_fragment:"",e.toneMapping!==ii?u_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,h_("linearToOutputTexel",e.outputColorSpace),f_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Us).join(`
`)),r=Ac(r),r=Ch(r,e),r=Ph(r,e),a=Ac(a),a=Ch(a,e),a=Ph(a,e),r=Lh(r),a=Lh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=M+m+r,_=M+d+a,b=Th(s,s.VERTEX_SHADER,v),E=Th(s,s.FRAGMENT_SHADER,_);s.attachShader(x,b),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(P){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(x).trim(),N=s.getShaderInfoLog(b).trim(),G=s.getShaderInfoLog(E).trim();let W=!0,K=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,E);else{const j=Rh(s,b,"vertex"),Y=Rh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+j+`
`+Y)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||G==="")&&(K=!1);K&&(P.diagnostics={runnable:W,programLog:U,vertexShader:{log:N,prefix:m},fragmentShader:{log:G,prefix:d}})}s.deleteShader(b),s.deleteShader(E),R=new Qo(s,x),S=m_(s,x)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(x,r_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=a_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=E,this}let A_=0;class R_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new C_(t),e.set(t,n)),n}}class C_{constructor(t){this.id=A_++,this.code=t,this.usedTimes=0}}function P_(i,t,e,n,s,o,r){const a=new _u,c=new R_,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,w,P,U,N){const G=U.fog,W=N.geometry,K=S.isMeshStandardMaterial?U.environment:null,j=(S.isMeshStandardMaterial?e:t).get(S.envMap||K),Y=j&&j.mapping===Er?j.image.height:null,at=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Tt=ut!==void 0?ut.length:0;let kt=0;W.morphAttributes.position!==void 0&&(kt=1),W.morphAttributes.normal!==void 0&&(kt=2),W.morphAttributes.color!==void 0&&(kt=3);let ce,tt,ct,At;if(at){const oe=Rn[at];ce=oe.vertexShader,tt=oe.fragmentShader}else ce=S.vertexShader,tt=S.fragmentShader,c.update(S),ct=c.getVertexShaderID(S),At=c.getFragmentShaderID(S);const pt=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),Ot=N.isInstancedMesh===!0,Xt=N.isBatchedMesh===!0,me=!!S.map,jt=!!S.matcap,ye=!!j,F=!!S.aoMap,an=!!S.lightMap,Zt=!!S.bumpMap,Kt=!!S.normalMap,Pt=!!S.displacementMap,ue=!!S.emissiveMap,Ct=!!S.metalnessMap,I=!!S.roughnessMap,A=S.anisotropy>0,H=S.clearcoat>0,et=S.dispersion>0,it=S.iridescence>0,$=S.sheen>0,Rt=S.transmission>0,mt=A&&!!S.anisotropyMap,yt=H&&!!S.clearcoatMap,$t=H&&!!S.clearcoatNormalMap,rt=H&&!!S.clearcoatRoughnessMap,St=it&&!!S.iridescenceMap,Dt=it&&!!S.iridescenceThicknessMap,Nt=$&&!!S.sheenColorMap,Et=$&&!!S.sheenRoughnessMap,Jt=!!S.specularMap,Vt=!!S.specularColorMap,he=!!S.specularIntensityMap,O=Rt&&!!S.transmissionMap,ft=Rt&&!!S.thicknessMap,J=!!S.gradientMap,nt=!!S.alphaMap,vt=S.alphaTest>0,gt=!!S.alphaHash,Gt=!!S.extensions;let _e=ii;S.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(_e=i.toneMapping);const Oe={shaderID:at,shaderType:S.type,shaderName:S.name,vertexShader:ce,fragmentShader:tt,defines:S.defines,customVertexShaderID:ct,customFragmentShaderID:At,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Xt,batchingColor:Xt&&N._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&N.instanceColor!==null,instancingMorph:Ot&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:ds,alphaToCoverage:!!S.alphaToCoverage,map:me,matcap:jt,envMap:ye,envMapMode:ye&&j.mapping,envMapCubeUVHeight:Y,aoMap:F,lightMap:an,bumpMap:Zt,normalMap:Kt,displacementMap:f&&Pt,emissiveMap:ue,normalMapObjectSpace:Kt&&S.normalMapType===ed,normalMapTangentSpace:Kt&&S.normalMapType===uu,metalnessMap:Ct,roughnessMap:I,anisotropy:A,anisotropyMap:mt,clearcoat:H,clearcoatMap:yt,clearcoatNormalMap:$t,clearcoatRoughnessMap:rt,dispersion:et,iridescence:it,iridescenceMap:St,iridescenceThicknessMap:Dt,sheen:$,sheenColorMap:Nt,sheenRoughnessMap:Et,specularMap:Jt,specularColorMap:Vt,specularIntensityMap:he,transmission:Rt,transmissionMap:O,thicknessMap:ft,gradientMap:J,opaque:S.transparent===!1&&S.blending===es&&S.alphaToCoverage===!1,alphaMap:nt,alphaTest:vt,alphaHash:gt,combine:S.combine,mapUv:me&&x(S.map.channel),aoMapUv:F&&x(S.aoMap.channel),lightMapUv:an&&x(S.lightMap.channel),bumpMapUv:Zt&&x(S.bumpMap.channel),normalMapUv:Kt&&x(S.normalMap.channel),displacementMapUv:Pt&&x(S.displacementMap.channel),emissiveMapUv:ue&&x(S.emissiveMap.channel),metalnessMapUv:Ct&&x(S.metalnessMap.channel),roughnessMapUv:I&&x(S.roughnessMap.channel),anisotropyMapUv:mt&&x(S.anisotropyMap.channel),clearcoatMapUv:yt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:$t&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Et&&x(S.sheenRoughnessMap.channel),specularMapUv:Jt&&x(S.specularMap.channel),specularColorMapUv:Vt&&x(S.specularColorMap.channel),specularIntensityMapUv:he&&x(S.specularIntensityMap.channel),transmissionMapUv:O&&x(S.transmissionMap.channel),thicknessMapUv:ft&&x(S.thicknessMap.channel),alphaMapUv:nt&&x(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Kt||A),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(me||nt),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ut,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:kt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:me&&S.map.isVideoTexture===!0&&ee.getTransfer(S.map.colorSpace)===re,decodeVideoTextureEmissive:ue&&S.emissiveMap.isVideoTexture===!0&&ee.getTransfer(S.emissiveMap.colorSpace)===re,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Bt,flipSided:S.side===Je,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Gt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&S.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function d(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)w.push(P),w.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(M(w,S),v(w,S),w.push(i.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function M(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function v(S,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const w=g[S.type];let P;if(w){const U=Rn[w];P=hr.clone(U.uniforms)}else P=S.uniforms;return P}function b(S,w){let P;for(let U=0,N=h.length;U<N;U++){const G=h[U];if(G.cacheKey===w){P=G,++P.usedTimes;break}}return P===void 0&&(P=new T_(i,w,S,o),h.push(P)),P}function E(S){if(--S.usedTimes===0){const w=h.indexOf(S);h[w]=h[h.length-1],h.pop(),S.destroy()}}function T(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:b,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:R}}function L_(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,c){i.get(r)[a]=c}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function I_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Dh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Uh(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u,f,p,g,x,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=m),t++,d}function a(u,f,p,g,x,m){const d=r(u,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(u,f,p,g,x,m){const d=r(u,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||I_),n.length>1&&n.sort(f||Dh),s.length>1&&s.sort(f||Dh)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function D_(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Uh,i.set(n,[r])):s>=o.length?(r=new Uh,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function U_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new _t};break;case"SpotLight":e={position:new D,direction:new D,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function N_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let F_=0;function O_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function z_(i){const t=new U_,e=N_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,o=new de,r=new de;function a(l){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,M=0,v=0,_=0,b=0,E=0,T=0;l.sort(O_);for(let S=0,w=l.length;S<w;S++){const P=l[S],U=P.color,N=P.intensity,G=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=U.r*N,u+=U.g*N,f+=U.b*N;else if(P.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(P.sh.coefficients[K],N);T++}else if(P.isDirectionalLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,Y=e.get(P);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=P.shadow.matrix,M++}n.directional[p]=K,p++}else if(P.isSpotLight){const K=t.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(U).multiplyScalar(N),K.distance=G,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,n.spot[x]=K;const j=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,j.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[x]=j.matrix,P.castShadow){const Y=e.get(P);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,n.spotShadow[x]=Y,n.spotShadowMap[x]=W,_++}x++}else if(P.isRectAreaLight){const K=t.get(P);K.color.copy(U).multiplyScalar(N),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=K,m++}else if(P.isPointLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),K.distance=P.distance,K.decay=P.decay,P.castShadow){const j=P.shadow,Y=e.get(P);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=K,g++}else if(P.isHemisphereLight){const K=t.get(P);K.skyColor.copy(P.color).multiplyScalar(N),K.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[d]=K,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==M||R.numPointShadows!==v||R.numSpotShadows!==_||R.numSpotMaps!==b||R.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,R.directionalLength=p,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=M,R.numPointShadows=v,R.numSpotShadows=_,R.numSpotMaps=b,R.numLightProbes=T,n.version=F_++)}function c(l,h){let u=0,f=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let d=0,M=l.length;d<M;d++){const v=l[d];if(v.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(v.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),r.identity(),o.copy(v.matrixWorld),o.premultiply(m),r.extractRotation(o),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Nh(i){const t=new z_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function B_(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Nh(i),t.set(s,[a])):o>=r.length?(a=new Nh(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const k_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G_=`uniform sampler2D shadow_pass;
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
}`;function H_(i,t,e){let n=new rl;const s=new lt,o=new lt,r=new ae,a=new dp({depthPacking:td}),c=new pp,l={},h=e.maxTextureSize,u={[si]:Je,[Je]:si,[Bt]:Bt},f=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:k_,fragmentShader:G_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new L(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jh;let d=this.type;this.render=function(E,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),w=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Xn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=d!==kn&&this.type===kn,G=d===kn&&this.type!==kn;for(let W=0,K=E.length;W<K;W++){const j=E[W],Y=j.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const at=Y.getFrameExtents();if(s.multiply(at),o.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/at.x),s.x=o.x*at.x,Y.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/at.y),s.y=o.y*at.y,Y.mapSize.y=o.y)),Y.map===null||N===!0||G===!0){const Tt=this.type!==kn?{minFilter:yn,magFilter:yn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new wn(s.x,s.y,Tt),Y.map.texture.name=j.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const ut=Y.getViewportCount();for(let Tt=0;Tt<ut;Tt++){const kt=Y.getViewport(Tt);r.set(o.x*kt.x,o.y*kt.y,o.x*kt.z,o.y*kt.w),U.viewport(r),Y.updateMatrices(j,Tt),n=Y.getFrustum(),_(T,R,Y.camera,j,this.type)}Y.isPointLightShadow!==!0&&this.type===kn&&M(Y,R),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,w,P)};function M(E,T){const R=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new wn(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,R,f,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,R,p,x,null)}function v(E,T,R,S){let w=null;const P=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)w=P;else if(w=R.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=w.uuid,N=T.uuid;let G=l[U];G===void 0&&(G={},l[U]=G);let W=G[N];W===void 0&&(W=w.clone(),G[N]=W,T.addEventListener("dispose",b)),w=W}if(w.visible=T.visible,w.wireframe=T.wireframe,S===kn?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:u[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,R.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const U=i.properties.get(w);U.light=R}return w}function _(E,T,R,S,w){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===kn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const N=t.update(E),G=E.material;if(Array.isArray(G)){const W=N.groups;for(let K=0,j=W.length;K<j;K++){const Y=W[K],at=G[Y.materialIndex];if(at&&at.visible){const ut=v(E,at,S,w);E.onBeforeShadow(i,E,T,R,N,ut,Y),i.renderBufferDirect(R,null,N,ut,E,Y),E.onAfterShadow(i,E,T,R,N,ut,Y)}}}else if(G.visible){const W=v(E,G,S,w);E.onBeforeShadow(i,E,T,R,N,W,null),i.renderBufferDirect(R,null,N,W,E,null),E.onAfterShadow(i,E,T,R,N,W,null)}}const U=E.children;for(let N=0,G=U.length;N<G;N++)_(U[N],T,R,S,w)}function b(E){E.target.removeEventListener("dispose",b);for(const R in l){const S=l[R],w=E.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}const V_={[Ba]:ka,[Ga]:Wa,[Ha]:Xa,[cs]:Va,[ka]:Ba,[Wa]:Ga,[Xa]:Ha,[Va]:cs};function W_(i,t){function e(){let O=!1;const ft=new ae;let J=null;const nt=new ae(0,0,0,0);return{setMask:function(vt){J!==vt&&!O&&(i.colorMask(vt,vt,vt,vt),J=vt)},setLocked:function(vt){O=vt},setClear:function(vt,gt,Gt,_e,Oe){Oe===!0&&(vt*=_e,gt*=_e,Gt*=_e),ft.set(vt,gt,Gt,_e),nt.equals(ft)===!1&&(i.clearColor(vt,gt,Gt,_e),nt.copy(ft))},reset:function(){O=!1,J=null,nt.set(-1,0,0,0)}}}function n(){let O=!1,ft=!1,J=null,nt=null,vt=null;return{setReversed:function(gt){if(ft!==gt){const Gt=t.get("EXT_clip_control");ft?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);const _e=vt;vt=null,this.setClear(_e)}ft=gt},getReversed:function(){return ft},setTest:function(gt){gt?pt(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(gt){J!==gt&&!O&&(i.depthMask(gt),J=gt)},setFunc:function(gt){if(ft&&(gt=V_[gt]),nt!==gt){switch(gt){case Ba:i.depthFunc(i.NEVER);break;case ka:i.depthFunc(i.ALWAYS);break;case Ga:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case Ha:i.depthFunc(i.EQUAL);break;case Va:i.depthFunc(i.GEQUAL);break;case Wa:i.depthFunc(i.GREATER);break;case Xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=gt}},setLocked:function(gt){O=gt},setClear:function(gt){vt!==gt&&(ft&&(gt=1-gt),i.clearDepth(gt),vt=gt)},reset:function(){O=!1,J=null,nt=null,vt=null,ft=!1}}}function s(){let O=!1,ft=null,J=null,nt=null,vt=null,gt=null,Gt=null,_e=null,Oe=null;return{setTest:function(oe){O||(oe?pt(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(oe){ft!==oe&&!O&&(i.stencilMask(oe),ft=oe)},setFunc:function(oe,pn,Un){(J!==oe||nt!==pn||vt!==Un)&&(i.stencilFunc(oe,pn,Un),J=oe,nt=pn,vt=Un)},setOp:function(oe,pn,Un){(gt!==oe||Gt!==pn||_e!==Un)&&(i.stencilOp(oe,pn,Un),gt=oe,Gt=pn,_e=Un)},setLocked:function(oe){O=oe},setClear:function(oe){Oe!==oe&&(i.clearStencil(oe),Oe=oe)},reset:function(){O=!1,ft=null,J=null,nt=null,vt=null,gt=null,Gt=null,_e=null,Oe=null}}}const o=new e,r=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,M=null,v=null,_=null,b=null,E=null,T=new _t(0,0,0),R=0,S=!1,w=null,P=null,U=null,N=null,G=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,j=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=j>=2);let at=null,ut={};const Tt=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),ce=new ae().fromArray(Tt),tt=new ae().fromArray(kt);function ct(O,ft,J,nt){const vt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(O,gt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<J;Gt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(ft+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return gt}const At={};At[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),pt(i.DEPTH_TEST),r.setFunc(cs),Zt(!1),Kt(Pl),pt(i.CULL_FACE),F(Xn);function pt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Ut(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Ot(O,ft){return u[O]!==ft?(i.bindFramebuffer(O,ft),u[O]=ft,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Xt(O,ft){let J=p,nt=!1;if(O){J=f.get(ft),J===void 0&&(J=[],f.set(ft,J));const vt=O.textures;if(J.length!==vt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Gt=vt.length;gt<Gt;gt++)J[gt]=i.COLOR_ATTACHMENT0+gt;J.length=vt.length,nt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,nt=!0);nt&&i.drawBuffers(J)}function me(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const jt={[wi]:i.FUNC_ADD,[Af]:i.FUNC_SUBTRACT,[Rf]:i.FUNC_REVERSE_SUBTRACT};jt[Cf]=i.MIN,jt[Pf]=i.MAX;const ye={[Lf]:i.ZERO,[If]:i.ONE,[Df]:i.SRC_COLOR,[Oa]:i.SRC_ALPHA,[Bf]:i.SRC_ALPHA_SATURATE,[Of]:i.DST_COLOR,[Nf]:i.DST_ALPHA,[Uf]:i.ONE_MINUS_SRC_COLOR,[za]:i.ONE_MINUS_SRC_ALPHA,[zf]:i.ONE_MINUS_DST_COLOR,[Ff]:i.ONE_MINUS_DST_ALPHA,[kf]:i.CONSTANT_COLOR,[Gf]:i.ONE_MINUS_CONSTANT_COLOR,[Hf]:i.CONSTANT_ALPHA,[Vf]:i.ONE_MINUS_CONSTANT_ALPHA};function F(O,ft,J,nt,vt,gt,Gt,_e,Oe,oe){if(O===Xn){x===!0&&(Ut(i.BLEND),x=!1);return}if(x===!1&&(pt(i.BLEND),x=!0),O!==Tf){if(O!==m||oe!==S){if((d!==wi||_!==wi)&&(i.blendEquation(i.FUNC_ADD),d=wi,_=wi),oe)switch(O){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fa:i.blendFunc(i.ONE,i.ONE);break;case Ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,v=null,b=null,E=null,T.set(0,0,0),R=0,m=O,S=oe}return}vt=vt||ft,gt=gt||J,Gt=Gt||nt,(ft!==d||vt!==_)&&(i.blendEquationSeparate(jt[ft],jt[vt]),d=ft,_=vt),(J!==M||nt!==v||gt!==b||Gt!==E)&&(i.blendFuncSeparate(ye[J],ye[nt],ye[gt],ye[Gt]),M=J,v=nt,b=gt,E=Gt),(_e.equals(T)===!1||Oe!==R)&&(i.blendColor(_e.r,_e.g,_e.b,Oe),T.copy(_e),R=Oe),m=O,S=!1}function an(O,ft){O.side===Bt?Ut(i.CULL_FACE):pt(i.CULL_FACE);let J=O.side===Je;ft&&(J=!J),Zt(J),O.blending===es&&O.transparent===!1?F(Xn):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),o.setMask(O.colorWrite);const nt=O.stencilWrite;a.setTest(nt),nt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ue(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(O){w!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),w=O)}function Kt(O){O!==Ef?(pt(i.CULL_FACE),O!==P&&(O===Pl?i.cullFace(i.BACK):O===bf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),P=O}function Pt(O){O!==U&&(K&&i.lineWidth(O),U=O)}function ue(O,ft,J){O?(pt(i.POLYGON_OFFSET_FILL),(N!==ft||G!==J)&&(i.polygonOffset(ft,J),N=ft,G=J)):Ut(i.POLYGON_OFFSET_FILL)}function Ct(O){O?pt(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function I(O){O===void 0&&(O=i.TEXTURE0+W-1),at!==O&&(i.activeTexture(O),at=O)}function A(O,ft,J){J===void 0&&(at===null?J=i.TEXTURE0+W-1:J=at);let nt=ut[J];nt===void 0&&(nt={type:void 0,texture:void 0},ut[J]=nt),(nt.type!==O||nt.texture!==ft)&&(at!==J&&(i.activeTexture(J),at=J),i.bindTexture(O,ft||At[O]),nt.type=O,nt.texture=ft)}function H(){const O=ut[at];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(O){ce.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ce.copy(O))}function Et(O){tt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),tt.copy(O))}function Jt(O,ft){let J=l.get(ft);J===void 0&&(J=new WeakMap,l.set(ft,J));let nt=J.get(O);nt===void 0&&(nt=i.getUniformBlockIndex(ft,O.name),J.set(O,nt))}function Vt(O,ft){const nt=l.get(ft).get(O);c.get(ft)!==nt&&(i.uniformBlockBinding(ft,nt,O.__bindingPointIndex),c.set(ft,nt))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},at=null,ut={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,M=null,v=null,_=null,b=null,E=null,T=new _t(0,0,0),R=0,S=!1,w=null,P=null,U=null,N=null,G=null,ce.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:pt,disable:Ut,bindFramebuffer:Ot,drawBuffers:Xt,useProgram:me,setBlending:F,setMaterial:an,setFlipSided:Zt,setCullFace:Kt,setLineWidth:Pt,setPolygonOffset:ue,setScissorTest:Ct,activeTexture:I,bindTexture:A,unbindTexture:H,compressedTexImage2D:et,compressedTexImage3D:it,texImage2D:St,texImage3D:Dt,updateUBOMapping:Jt,uniformBlockBinding:Vt,texStorage2D:$t,texStorage3D:rt,texSubImage2D:$,texSubImage3D:Rt,compressedTexSubImage2D:mt,compressedTexSubImage3D:yt,scissor:Nt,viewport:Et,reset:he}}function X_(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,A){return p?new OffscreenCanvas(I,A):lr("canvas")}function x(I,A,H){let et=1;const it=Ct(I);if((it.width>H||it.height>H)&&(et=H/Math.max(it.width,it.height)),et<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const $=Math.floor(et*it.width),Rt=Math.floor(et*it.height);u===void 0&&(u=g($,Rt));const mt=A?g($,Rt):u;return mt.width=$,mt.height=Rt,mt.getContext("2d").drawImage(I,0,0,$,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+$+"x"+Rt+")."),mt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),I;return I}function m(I){return I.generateMipmaps}function d(I){i.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(I,A,H,et,it=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let $=A;if(A===i.RED&&(H===i.FLOAT&&($=i.R32F),H===i.HALF_FLOAT&&($=i.R16F),H===i.UNSIGNED_BYTE&&($=i.R8)),A===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.R8UI),H===i.UNSIGNED_SHORT&&($=i.R16UI),H===i.UNSIGNED_INT&&($=i.R32UI),H===i.BYTE&&($=i.R8I),H===i.SHORT&&($=i.R16I),H===i.INT&&($=i.R32I)),A===i.RG&&(H===i.FLOAT&&($=i.RG32F),H===i.HALF_FLOAT&&($=i.RG16F),H===i.UNSIGNED_BYTE&&($=i.RG8)),A===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RG8UI),H===i.UNSIGNED_SHORT&&($=i.RG16UI),H===i.UNSIGNED_INT&&($=i.RG32UI),H===i.BYTE&&($=i.RG8I),H===i.SHORT&&($=i.RG16I),H===i.INT&&($=i.RG32I)),A===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGB8UI),H===i.UNSIGNED_SHORT&&($=i.RGB16UI),H===i.UNSIGNED_INT&&($=i.RGB32UI),H===i.BYTE&&($=i.RGB8I),H===i.SHORT&&($=i.RGB16I),H===i.INT&&($=i.RGB32I)),A===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGBA8UI),H===i.UNSIGNED_SHORT&&($=i.RGBA16UI),H===i.UNSIGNED_INT&&($=i.RGBA32UI),H===i.BYTE&&($=i.RGBA8I),H===i.SHORT&&($=i.RGBA16I),H===i.INT&&($=i.RGBA32I)),A===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),A===i.RGBA){const Rt=it?ar:ee.getTransfer(et);H===i.FLOAT&&($=i.RGBA32F),H===i.HALF_FLOAT&&($=i.RGBA16F),H===i.UNSIGNED_BYTE&&($=Rt===re?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(I,A){let H;return I?A===null||A===Pi||A===us?H=i.DEPTH24_STENCIL8:A===Vn?H=i.DEPTH32F_STENCIL8:A===Ys&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Pi||A===us?H=i.DEPTH_COMPONENT24:A===Vn?H=i.DEPTH_COMPONENT32F:A===Ys&&(H=i.DEPTH_COMPONENT16),H}function b(I,A){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==yn&&I.minFilter!==Pn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function E(I){const A=I.target;A.removeEventListener("dispose",E),R(A),A.isVideoTexture&&h.delete(A)}function T(I){const A=I.target;A.removeEventListener("dispose",T),w(A)}function R(I){const A=n.get(I);if(A.__webglInit===void 0)return;const H=I.source,et=f.get(H);if(et){const it=et[A.__cacheKey];it.usedTimes--,it.usedTimes===0&&S(I),Object.keys(et).length===0&&f.delete(H)}n.remove(I)}function S(I){const A=n.get(I);i.deleteTexture(A.__webglTexture);const H=I.source,et=f.get(H);delete et[A.__cacheKey],r.memory.textures--}function w(I){const A=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(A.__webglFramebuffer[et]))for(let it=0;it<A.__webglFramebuffer[et].length;it++)i.deleteFramebuffer(A.__webglFramebuffer[et][it]);else i.deleteFramebuffer(A.__webglFramebuffer[et]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[et])}else{if(Array.isArray(A.__webglFramebuffer))for(let et=0;et<A.__webglFramebuffer.length;et++)i.deleteFramebuffer(A.__webglFramebuffer[et]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let et=0;et<A.__webglColorRenderbuffer.length;et++)A.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[et]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const H=I.textures;for(let et=0,it=H.length;et<it;et++){const $=n.get(H[et]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),r.memory.textures--),n.remove(H[et])}n.remove(I)}let P=0;function U(){P=0}function N(){const I=P;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),P+=1,I}function G(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function W(I,A){const H=n.get(I);if(I.isVideoTexture&&Pt(I),I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){const et=I.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(H,I,A);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+A)}function K(I,A){const H=n.get(I);if(I.version>0&&H.__version!==I.version){tt(H,I,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+A)}function j(I,A){const H=n.get(I);if(I.version>0&&H.__version!==I.version){tt(H,I,A);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+A)}function Y(I,A){const H=n.get(I);if(I.version>0&&H.__version!==I.version){ct(H,I,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+A)}const at={[rr]:i.REPEAT,[Ei]:i.CLAMP_TO_EDGE,[Za]:i.MIRRORED_REPEAT},ut={[yn]:i.NEAREST,[$f]:i.NEAREST_MIPMAP_NEAREST,[fo]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[Dr]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},Tt={[nd]:i.NEVER,[cd]:i.ALWAYS,[id]:i.LESS,[fu]:i.LEQUAL,[sd]:i.EQUAL,[ad]:i.GEQUAL,[od]:i.GREATER,[rd]:i.NOTEQUAL};function kt(I,A){if(A.type===Vn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Pn||A.magFilter===Dr||A.magFilter===fo||A.magFilter===bi||A.minFilter===Pn||A.minFilter===Dr||A.minFilter===fo||A.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,at[A.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,at[A.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,at[A.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ut[A.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ut[A.minFilter]),A.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Tt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===yn||A.minFilter!==fo&&A.minFilter!==bi||A.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ce(I,A){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",E));const et=A.source;let it=f.get(et);it===void 0&&(it={},f.set(et,it));const $=G(A);if($!==I.__cacheKey){it[$]===void 0&&(it[$]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,H=!0),it[$].usedTimes++;const Rt=it[I.__cacheKey];Rt!==void 0&&(it[I.__cacheKey].usedTimes--,Rt.usedTimes===0&&S(A)),I.__cacheKey=$,I.__webglTexture=it[$].texture}return H}function tt(I,A,H){let et=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(et=i.TEXTURE_3D);const it=ce(I,A),$=A.source;e.bindTexture(et,I.__webglTexture,i.TEXTURE0+H);const Rt=n.get($);if($.version!==Rt.__version||it===!0){e.activeTexture(i.TEXTURE0+H);const mt=ee.getPrimaries(ee.workingColorSpace),yt=A.colorSpace===ni?null:ee.getPrimaries(A.colorSpace),$t=A.colorSpace===ni||mt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let rt=x(A.image,!1,s.maxTextureSize);rt=ue(A,rt);const St=o.convert(A.format,A.colorSpace),Dt=o.convert(A.type);let Nt=v(A.internalFormat,St,Dt,A.colorSpace,A.isVideoTexture);kt(et,A);let Et;const Jt=A.mipmaps,Vt=A.isVideoTexture!==!0,he=Rt.__version===void 0||it===!0,O=$.dataReady,ft=b(A,rt);if(A.isDepthTexture)Nt=_(A.format===fs,A.type),he&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,Nt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Nt,rt.width,rt.height,0,St,Dt,null));else if(A.isDataTexture)if(Jt.length>0){Vt&&he&&e.texStorage2D(i.TEXTURE_2D,ft,Nt,Jt[0].width,Jt[0].height);for(let J=0,nt=Jt.length;J<nt;J++)Et=Jt[J],Vt?O&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Et.width,Et.height,St,Dt,Et.data):e.texImage2D(i.TEXTURE_2D,J,Nt,Et.width,Et.height,0,St,Dt,Et.data);A.generateMipmaps=!1}else Vt?(he&&e.texStorage2D(i.TEXTURE_2D,ft,Nt,rt.width,rt.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,St,Dt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,rt.width,rt.height,0,St,Dt,rt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Vt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Nt,Jt[0].width,Jt[0].height,rt.depth);for(let J=0,nt=Jt.length;J<nt;J++)if(Et=Jt[J],A.format!==Mn)if(St!==null)if(Vt){if(O)if(A.layerUpdates.size>0){const vt=uh(Et.width,Et.height,A.format,A.type);for(const gt of A.layerUpdates){const Gt=Et.data.subarray(gt*vt/Et.data.BYTES_PER_ELEMENT,(gt+1)*vt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,gt,Et.width,Et.height,1,St,Gt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Et.width,Et.height,rt.depth,St,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Nt,Et.width,Et.height,rt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Et.width,Et.height,rt.depth,St,Dt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,Nt,Et.width,Et.height,rt.depth,0,St,Dt,Et.data)}else{Vt&&he&&e.texStorage2D(i.TEXTURE_2D,ft,Nt,Jt[0].width,Jt[0].height);for(let J=0,nt=Jt.length;J<nt;J++)Et=Jt[J],A.format!==Mn?St!==null?Vt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Et.width,Et.height,St,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,J,Nt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?O&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Et.width,Et.height,St,Dt,Et.data):e.texImage2D(i.TEXTURE_2D,J,Nt,Et.width,Et.height,0,St,Dt,Et.data)}else if(A.isDataArrayTexture)if(Vt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Nt,rt.width,rt.height,rt.depth),O)if(A.layerUpdates.size>0){const J=uh(rt.width,rt.height,A.format,A.type);for(const nt of A.layerUpdates){const vt=rt.data.subarray(nt*J/rt.data.BYTES_PER_ELEMENT,(nt+1)*J/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,rt.width,rt.height,1,St,Dt,vt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,St,Dt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,rt.width,rt.height,rt.depth,0,St,Dt,rt.data);else if(A.isData3DTexture)Vt?(he&&e.texStorage3D(i.TEXTURE_3D,ft,Nt,rt.width,rt.height,rt.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,St,Dt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,rt.width,rt.height,rt.depth,0,St,Dt,rt.data);else if(A.isFramebufferTexture){if(he)if(Vt)e.texStorage2D(i.TEXTURE_2D,ft,Nt,rt.width,rt.height);else{let J=rt.width,nt=rt.height;for(let vt=0;vt<ft;vt++)e.texImage2D(i.TEXTURE_2D,vt,Nt,J,nt,0,St,Dt,null),J>>=1,nt>>=1}}else if(Jt.length>0){if(Vt&&he){const J=Ct(Jt[0]);e.texStorage2D(i.TEXTURE_2D,ft,Nt,J.width,J.height)}for(let J=0,nt=Jt.length;J<nt;J++)Et=Jt[J],Vt?O&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,St,Dt,Et):e.texImage2D(i.TEXTURE_2D,J,Nt,St,Dt,Et);A.generateMipmaps=!1}else if(Vt){if(he){const J=Ct(rt);e.texStorage2D(i.TEXTURE_2D,ft,Nt,J.width,J.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Dt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Nt,St,Dt,rt);m(A)&&d(et),Rt.__version=$.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function ct(I,A,H){if(A.image.length!==6)return;const et=ce(I,A),it=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+H);const $=n.get(it);if(it.version!==$.__version||et===!0){e.activeTexture(i.TEXTURE0+H);const Rt=ee.getPrimaries(ee.workingColorSpace),mt=A.colorSpace===ni?null:ee.getPrimaries(A.colorSpace),yt=A.colorSpace===ni||Rt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const $t=A.isCompressedTexture||A.image[0].isCompressedTexture,rt=A.image[0]&&A.image[0].isDataTexture,St=[];for(let nt=0;nt<6;nt++)!$t&&!rt?St[nt]=x(A.image[nt],!0,s.maxCubemapSize):St[nt]=rt?A.image[nt].image:A.image[nt],St[nt]=ue(A,St[nt]);const Dt=St[0],Nt=o.convert(A.format,A.colorSpace),Et=o.convert(A.type),Jt=v(A.internalFormat,Nt,Et,A.colorSpace),Vt=A.isVideoTexture!==!0,he=$.__version===void 0||et===!0,O=it.dataReady;let ft=b(A,Dt);kt(i.TEXTURE_CUBE_MAP,A);let J;if($t){Vt&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Jt,Dt.width,Dt.height);for(let nt=0;nt<6;nt++){J=St[nt].mipmaps;for(let vt=0;vt<J.length;vt++){const gt=J[vt];A.format!==Mn?Nt!==null?Vt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,0,0,gt.width,gt.height,Nt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,Jt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,0,0,gt.width,gt.height,Nt,Et,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,Jt,gt.width,gt.height,0,Nt,Et,gt.data)}}}else{if(J=A.mipmaps,Vt&&he){J.length>0&&ft++;const nt=Ct(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Jt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(rt){Vt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,St[nt].width,St[nt].height,Nt,Et,St[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Jt,St[nt].width,St[nt].height,0,Nt,Et,St[nt].data);for(let vt=0;vt<J.length;vt++){const Gt=J[vt].image[nt].image;Vt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,0,0,Gt.width,Gt.height,Nt,Et,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,Jt,Gt.width,Gt.height,0,Nt,Et,Gt.data)}}else{Vt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Nt,Et,St[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Jt,Nt,Et,St[nt]);for(let vt=0;vt<J.length;vt++){const gt=J[vt];Vt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,0,0,Nt,Et,gt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,Jt,Nt,Et,gt.image[nt])}}}m(A)&&d(i.TEXTURE_CUBE_MAP),$.__version=it.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function At(I,A,H,et,it,$){const Rt=o.convert(H.format,H.colorSpace),mt=o.convert(H.type),yt=v(H.internalFormat,Rt,mt,H.colorSpace),$t=n.get(A),rt=n.get(H);if(rt.__renderTarget=A,!$t.__hasExternalTextures){const St=Math.max(1,A.width>>$),Dt=Math.max(1,A.height>>$);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,$,yt,St,Dt,A.depth,0,Rt,mt,null):e.texImage2D(it,$,yt,St,Dt,0,Rt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Kt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,it,rt.__webglTexture,0,Zt(A)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,it,rt.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(I,A,H){if(i.bindRenderbuffer(i.RENDERBUFFER,I),A.depthBuffer){const et=A.depthTexture,it=et&&et.isDepthTexture?et.type:null,$=_(A.stencilBuffer,it),Rt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=Zt(A);Kt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,$,A.width,A.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,$,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,$,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,I)}else{const et=A.textures;for(let it=0;it<et.length;it++){const $=et[it],Rt=o.convert($.format,$.colorSpace),mt=o.convert($.type),yt=v($.internalFormat,Rt,mt,$.colorSpace),$t=Zt(A);H&&Kt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,yt,A.width,A.height):Kt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,yt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,yt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=n.get(A.depthTexture);et.__renderTarget=A,(!et.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),W(A.depthTexture,0);const it=et.__webglTexture,$=Zt(A);if(A.depthTexture.format===ns)Kt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(A.depthTexture.format===fs)Kt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Ot(I){const A=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const et=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),et){const it=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,et.removeEventListener("dispose",it)};et.addEventListener("dispose",it),A.__depthDisposeCallback=it}A.__boundDepthTexture=et}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ut(A.__webglFramebuffer,I)}else if(H){A.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[et]),A.__webglDepthbuffer[et]===void 0)A.__webglDepthbuffer[et]=i.createRenderbuffer(),pt(A.__webglDepthbuffer[et],I,!1);else{const it=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=A.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),pt(A.__webglDepthbuffer,I,!1);else{const et=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(I,A,H){const et=n.get(I);A!==void 0&&At(et.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Ot(I)}function me(I){const A=I.texture,H=n.get(I),et=n.get(A);I.addEventListener("dispose",T);const it=I.textures,$=I.isWebGLCubeRenderTarget===!0,Rt=it.length>1;if(Rt||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=A.version,r.memory.textures++),$){H.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer[mt]=[];for(let yt=0;yt<A.mipmaps.length;yt++)H.__webglFramebuffer[mt][yt]=i.createFramebuffer()}else H.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer=[];for(let mt=0;mt<A.mipmaps.length;mt++)H.__webglFramebuffer[mt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let mt=0,yt=it.length;mt<yt;mt++){const $t=n.get(it[mt]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),r.memory.textures++)}if(I.samples>0&&Kt(I)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let mt=0;mt<it.length;mt++){const yt=it[mt];H.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[mt]);const $t=o.convert(yt.format,yt.colorSpace),rt=o.convert(yt.type),St=v(yt.internalFormat,$t,rt,yt.colorSpace,I.isXRRenderTarget===!0),Dt=Zt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,St,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,H.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(H.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),kt(i.TEXTURE_CUBE_MAP,A);for(let mt=0;mt<6;mt++)if(A.mipmaps&&A.mipmaps.length>0)for(let yt=0;yt<A.mipmaps.length;yt++)At(H.__webglFramebuffer[mt][yt],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,yt);else At(H.__webglFramebuffer[mt],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(A)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let mt=0,yt=it.length;mt<yt;mt++){const $t=it[mt],rt=n.get($t);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),kt(i.TEXTURE_2D,$t),At(H.__webglFramebuffer,I,$t,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),m($t)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(mt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,et.__webglTexture),kt(mt,A),A.mipmaps&&A.mipmaps.length>0)for(let yt=0;yt<A.mipmaps.length;yt++)At(H.__webglFramebuffer[yt],I,A,i.COLOR_ATTACHMENT0,mt,yt);else At(H.__webglFramebuffer,I,A,i.COLOR_ATTACHMENT0,mt,0);m(A)&&d(mt),e.unbindTexture()}I.depthBuffer&&Ot(I)}function jt(I){const A=I.textures;for(let H=0,et=A.length;H<et;H++){const it=A[H];if(m(it)){const $=M(I),Rt=n.get(it).__webglTexture;e.bindTexture($,Rt),d($),e.unbindTexture()}}}const ye=[],F=[];function an(I){if(I.samples>0){if(Kt(I)===!1){const A=I.textures,H=I.width,et=I.height;let it=i.COLOR_BUFFER_BIT;const $=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(I),mt=A.length>1;if(mt)for(let yt=0;yt<A.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let yt=0;yt<A.length;yt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[yt]);const $t=n.get(A[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,H,et,0,0,H,et,it,i.NEAREST),c===!0&&(ye.length=0,F.length=0,ye.push(i.COLOR_ATTACHMENT0+yt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ye.push($),F.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let yt=0;yt<A.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[yt]);const $t=n.get(A[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const A=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Zt(I){return Math.min(s.maxSamples,I.samples)}function Kt(I){const A=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Pt(I){const A=r.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function ue(I,A){const H=I.colorSpace,et=I.format,it=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==ds&&H!==ni&&(ee.getTransfer(H)===re?(et!==Mn||it!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),A}function Ct(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=K,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=Xt,this.setupRenderTarget=me,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Kt}function Y_(i,t){function e(n,s=ni){let o;const r=ee.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===tl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===el)return i.UNSIGNED_SHORT_5_5_5_1;if(n===iu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===eu)return i.BYTE;if(n===nu)return i.SHORT;if(n===Ys)return i.UNSIGNED_SHORT;if(n===Qc)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Yn)return i.HALF_FLOAT;if(n===su)return i.ALPHA;if(n===ou)return i.RGB;if(n===Mn)return i.RGBA;if(n===ru)return i.LUMINANCE;if(n===au)return i.LUMINANCE_ALPHA;if(n===ns)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===cu)return i.RED;if(n===nl)return i.RED_INTEGER;if(n===lu)return i.RG;if(n===il)return i.RG_INTEGER;if(n===sl)return i.RGBA_INTEGER;if(n===Zo||n===Ko||n===Jo||n===jo)if(r===re)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Zo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Zo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ko)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===Ja||n===ja||n===$a)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ka)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ja)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ja)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$a)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qa||n===tc||n===ec)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Qa||n===tc)return r===re?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===ec)return r===re?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nc||n===ic||n===sc||n===oc||n===rc||n===ac||n===cc||n===lc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===nc)return r===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ic)return r===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sc)return r===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return r===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rc)return r===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ac)return r===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cc)return r===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lc)return r===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hc)return r===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uc)return r===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fc)return r===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dc)return r===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pc)return r===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mc)return r===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$o||n===gc||n===_c)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===$o)return r===re?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_c)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hu||n===vc||n===xc||n===Mc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===$o)return o.COMPRESSED_RED_RGTC1_EXT;if(n===vc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const q_={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(q_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K_=`
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

}`;class J_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new We,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ze({vertexShader:Z_,fragmentShader:K_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new L(new we(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j_ extends xs{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null;const x=new J_,m=e.getContextAttributes();let d=null,M=null;const v=[],_=[],b=new lt;let E=null;const T=new nn;T.viewport=new ae;const R=new nn;R.viewport=new ae;const S=[T,R],w=new vp;let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ct=v[tt];return ct===void 0&&(ct=new pa,v[tt]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(tt){let ct=v[tt];return ct===void 0&&(ct=new pa,v[tt]=ct),ct.getGripSpace()},this.getHand=function(tt){let ct=v[tt];return ct===void 0&&(ct=new pa,v[tt]=ct),ct.getHandSpace()};function N(tt){const ct=_.indexOf(tt.inputSource);if(ct===-1)return;const At=v[ct];At!==void 0&&(At.update(tt.inputSource,tt.frame,l||r),At.dispatchEvent({type:tt.type,data:tt.inputSource}))}function G(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",W);for(let tt=0;tt<v.length;tt++){const ct=_[tt];ct!==null&&(_[tt]=null,v[tt].disconnect(ct))}P=null,U=null,x.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,M=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){o=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(tt){l=tt},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",G),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(b),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let At=null,pt=null,Ut=null;m.depth&&(Ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=m.stencil?fs:ns,pt=m.stencil?us:Pi);const Ot={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:o};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Ot),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new wn(f.textureWidth,f.textureHeight,{format:Mn,type:Zn,depthTexture:new Tu(f.textureWidth,f.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const At={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new wn(p.framebufferWidth,p.framebufferHeight,{format:Mn,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(tt){for(let ct=0;ct<tt.removed.length;ct++){const At=tt.removed[ct],pt=_.indexOf(At);pt>=0&&(_[pt]=null,v[pt].disconnect(At))}for(let ct=0;ct<tt.added.length;ct++){const At=tt.added[ct];let pt=_.indexOf(At);if(pt===-1){for(let Ot=0;Ot<v.length;Ot++)if(Ot>=_.length){_.push(At),pt=Ot;break}else if(_[Ot]===null){_[Ot]=At,pt=Ot;break}if(pt===-1)break}const Ut=v[pt];Ut&&Ut.connect(At)}}const K=new D,j=new D;function Y(tt,ct,At){K.setFromMatrixPosition(ct.matrixWorld),j.setFromMatrixPosition(At.matrixWorld);const pt=K.distanceTo(j),Ut=ct.projectionMatrix.elements,Ot=At.projectionMatrix.elements,Xt=Ut[14]/(Ut[10]-1),me=Ut[14]/(Ut[10]+1),jt=(Ut[9]+1)/Ut[5],ye=(Ut[9]-1)/Ut[5],F=(Ut[8]-1)/Ut[0],an=(Ot[8]+1)/Ot[0],Zt=Xt*F,Kt=Xt*an,Pt=pt/(-F+an),ue=Pt*-F;if(ct.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(ue),tt.translateZ(Pt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Ut[10]===-1)tt.projectionMatrix.copy(ct.projectionMatrix),tt.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Ct=Xt+Pt,I=me+Pt,A=Zt-ue,H=Kt+(pt-ue),et=jt*me/I*Ct,it=ye*me/I*Ct;tt.projectionMatrix.makePerspective(A,H,et,it,Ct,I),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function at(tt,ct){ct===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ct.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let ct=tt.near,At=tt.far;x.texture!==null&&(x.depthNear>0&&(ct=x.depthNear),x.depthFar>0&&(At=x.depthFar)),w.near=R.near=T.near=ct,w.far=R.far=T.far=At,(P!==w.near||U!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),P=w.near,U=w.far),T.layers.mask=tt.layers.mask|2,R.layers.mask=tt.layers.mask|4,w.layers.mask=T.layers.mask|R.layers.mask;const pt=tt.parent,Ut=w.cameras;at(w,pt);for(let Ot=0;Ot<Ut.length;Ot++)at(Ut[Ot],pt);Ut.length===2?Y(w,T,R):w.projectionMatrix.copy(T.projectionMatrix),ut(tt,w,pt)};function ut(tt,ct,At){At===null?tt.matrix.copy(ct.matrixWorld):(tt.matrix.copy(At.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ct.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ct.projectionMatrix),tt.projectionMatrixInverse.copy(ct.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=yc*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(tt){c=tt,f!==null&&(f.fixedFoveation=tt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=tt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(w)};let Tt=null;function kt(tt,ct){if(h=ct.getViewerPose(l||r),g=ct,h!==null){const At=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let pt=!1;At.length!==w.cameras.length&&(w.cameras.length=0,pt=!0);for(let Ot=0;Ot<At.length;Ot++){const Xt=At[Ot];let me=null;if(p!==null)me=p.getViewport(Xt);else{const ye=u.getViewSubImage(f,Xt);me=ye.viewport,Ot===0&&(t.setRenderTargetTextures(M,ye.colorTexture,f.ignoreDepthValues?void 0:ye.depthStencilTexture),t.setRenderTarget(M))}let jt=S[Ot];jt===void 0&&(jt=new nn,jt.layers.enable(Ot),jt.viewport=new ae,S[Ot]=jt),jt.matrix.fromArray(Xt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Xt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(me.x,me.y,me.width,me.height),Ot===0&&(w.matrix.copy(jt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),pt===!0&&w.cameras.push(jt)}const Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const Ot=u.getDepthInformation(At[0]);Ot&&Ot.isValid&&Ot.texture&&x.init(t,Ot,s.renderState)}}for(let At=0;At<v.length;At++){const pt=_[At],Ut=v[At];pt!==null&&Ut!==void 0&&Ut.update(pt,ct,l||r)}Tt&&Tt(tt,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),g=null}const ce=new zu;ce.setAnimationLoop(kt),this.setAnimationLoop=function(tt){Tt=tt},this.dispose=function(){}}}const fi=new Ln,$_=new de;function Q_(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,yu(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,v,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(m,d):d.isMeshToonMaterial?(o(m,d),u(m,d)):d.isMeshPhongMaterial?(o(m,d),h(m,d)):d.isMeshStandardMaterial?(o(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(o(m,d),g(m,d)):d.isMeshDepthMaterial?o(m,d):d.isMeshDistanceMaterial?(o(m,d),x(m,d)):d.isMeshNormalMaterial?o(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,M,v):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Je&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Je&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=t.get(d),v=M.envMap,_=M.envMapRotation;v&&(m.envMap.value=v,fi.copy(_),fi.x*=-1,fi.y*=-1,fi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.envMapRotation.value.setFromMatrix4($_.makeRotationFromEuler(fi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,M,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=v*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Je&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tv(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){const _=v.program;n.uniformBlockBinding(M,_)}function l(M,v){let _=s[M.id];_===void 0&&(g(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",m));const b=v.program;n.updateUBOMapping(M,b);const E=t.render.frame;o[M.id]!==E&&(f(M),o[M.id]=E)}function h(M){const v=u();M.__bindingPointIndex=v;const _=i.createBuffer(),b=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,b,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function u(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=s[M.id],_=M.uniforms,b=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,T=_.length;E<T;E++){const R=Array.isArray(_[E])?_[E]:[_[E]];for(let S=0,w=R.length;S<w;S++){const P=R[S];if(p(P,E,S,b)===!0){const U=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let W=0;W<N.length;W++){const K=N[W],j=x(K);typeof K=="number"||typeof K=="boolean"?(P.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,U+G,P.__data)):K.isMatrix3?(P.__data[0]=K.elements[0],P.__data[1]=K.elements[1],P.__data[2]=K.elements[2],P.__data[3]=0,P.__data[4]=K.elements[3],P.__data[5]=K.elements[4],P.__data[6]=K.elements[5],P.__data[7]=0,P.__data[8]=K.elements[6],P.__data[9]=K.elements[7],P.__data[10]=K.elements[8],P.__data[11]=0):(K.toArray(P.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,v,_,b){const E=M.value,T=v+"_"+_;if(b[T]===void 0)return typeof E=="number"||typeof E=="boolean"?b[T]=E:b[T]=E.clone(),!0;{const R=b[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return b[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(M){const v=M.uniforms;let _=0;const b=16;for(let T=0,R=v.length;T<R;T++){const S=Array.isArray(v[T])?v[T]:[v[T]];for(let w=0,P=S.length;w<P;w++){const U=S[w],N=Array.isArray(U.value)?U.value:[U.value];for(let G=0,W=N.length;G<W;G++){const K=N[G],j=x(K),Y=_%b,at=Y%j.boundary,ut=Y+at;_+=at,ut!==0&&b-ut<j.storage&&(_+=b-ut),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=_,_+=j.storage}}}const E=_%b;return E>0&&(_+=b-E),M.__size=_,M.__cache={},this}function x(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const _=r.indexOf(v.__bindingPointIndex);r.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete o[v.id]}function d(){for(const M in s)i.deleteBuffer(s[M]);r=[],s={},o={}}return{bind:c,update:l,dispose:d}}class ev{constructor(t={}){const{canvas:e=hd(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=ii,this.toneMappingExposure=1;const _=this;let b=!1,E=0,T=0,R=null,S=-1,w=null;const P=new ae,U=new ae;let N=null;const G=new _t(0);let W=0,K=e.width,j=e.height,Y=1,at=null,ut=null;const Tt=new ae(0,0,K,j),kt=new ae(0,0,K,j);let ce=!1;const tt=new rl;let ct=!1,At=!1;this.transmissionResolutionScale=1;const pt=new de,Ut=new de,Ot=new D,Xt=new ae,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function ye(){return R===null?Y:1}let F=n;function an(C,z){return e.getContext(C,z)}try{const C={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$c}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),F===null){const z="webgl2";if(F=an(z,C),F===null)throw an(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Zt,Kt,Pt,ue,Ct,I,A,H,et,it,$,Rt,mt,yt,$t,rt,St,Dt,Nt,Et,Jt,Vt,he,O;function ft(){Zt=new hg(F),Zt.init(),Vt=new Y_(F,Zt),Kt=new sg(F,Zt,t,Vt),Pt=new W_(F,Zt),Kt.reverseDepthBuffer&&f&&Pt.buffers.depth.setReversed(!0),ue=new dg(F),Ct=new L_,I=new X_(F,Zt,Pt,Ct,Kt,Vt,ue),A=new rg(_),H=new lg(_),et=new Mp(F),he=new ng(F,et),it=new ug(F,et,ue,he),$=new mg(F,it,et,ue),Nt=new pg(F,Kt,I),rt=new og(Ct),Rt=new P_(_,A,H,Zt,Kt,he,rt),mt=new Q_(_,Ct),yt=new D_,$t=new B_(Zt),Dt=new eg(_,A,H,Pt,$,p,c),St=new H_(_,$,Kt),O=new tv(F,ue,Kt,Pt),Et=new ig(F,Zt,ue),Jt=new fg(F,Zt,ue),ue.programs=Rt.programs,_.capabilities=Kt,_.extensions=Zt,_.properties=Ct,_.renderLists=yt,_.shadowMap=St,_.state=Pt,_.info=ue}ft();const J=new j_(_,F);this.xr=J,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=Zt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Zt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(K,j,!1))},this.getSize=function(C){return C.set(K,j)},this.setSize=function(C,z,V=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=C,j=z,e.width=Math.floor(C*Y),e.height=Math.floor(z*Y),V===!0&&(e.style.width=C+"px",e.style.height=z+"px"),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(K*Y,j*Y).floor()},this.setDrawingBufferSize=function(C,z,V){K=C,j=z,Y=V,e.width=Math.floor(C*V),e.height=Math.floor(z*V),this.setViewport(0,0,C,z)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(Tt)},this.setViewport=function(C,z,V,X){C.isVector4?Tt.set(C.x,C.y,C.z,C.w):Tt.set(C,z,V,X),Pt.viewport(P.copy(Tt).multiplyScalar(Y).round())},this.getScissor=function(C){return C.copy(kt)},this.setScissor=function(C,z,V,X){C.isVector4?kt.set(C.x,C.y,C.z,C.w):kt.set(C,z,V,X),Pt.scissor(U.copy(kt).multiplyScalar(Y).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(C){Pt.setScissorTest(ce=C)},this.setOpaqueSort=function(C){at=C},this.setTransparentSort=function(C){ut=C},this.getClearColor=function(C){return C.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(C=!0,z=!0,V=!0){let X=0;if(C){let k=!1;if(R!==null){const st=R.texture.format;k=st===sl||st===il||st===nl}if(k){const st=R.texture.type,dt=st===Zn||st===Pi||st===Ys||st===us||st===tl||st===el,Mt=Dt.getClearColor(),bt=Dt.getClearAlpha(),Ft=Mt.r,zt=Mt.g,Lt=Mt.b;dt?(g[0]=Ft,g[1]=zt,g[2]=Lt,g[3]=bt,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=Ft,x[1]=zt,x[2]=Lt,x[3]=bt,F.clearBufferiv(F.COLOR,0,x))}else X|=F.COLOR_BUFFER_BIT}z&&(X|=F.DEPTH_BUFFER_BIT),V&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Dt.dispose(),yt.dispose(),$t.dispose(),Ct.dispose(),A.dispose(),H.dispose(),$.dispose(),he.dispose(),O.dispose(),Rt.dispose(),J.dispose(),J.removeEventListener("sessionstart",Sl),J.removeEventListener("sessionend",El),oi.stop()};function nt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=ue.autoReset,z=St.enabled,V=St.autoUpdate,X=St.needsUpdate,k=St.type;ft(),ue.autoReset=C,St.enabled=z,St.autoUpdate=V,St.needsUpdate=X,St.type=k}function gt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Gt(C){const z=C.target;z.removeEventListener("dispose",Gt),_e(z)}function _e(C){Oe(C),Ct.remove(C)}function Oe(C){const z=Ct.get(C).programs;z!==void 0&&(z.forEach(function(V){Rt.releaseProgram(V)}),C.isShaderMaterial&&Rt.releaseShaderCache(C))}this.renderBufferDirect=function(C,z,V,X,k,st){z===null&&(z=me);const dt=k.isMesh&&k.matrixWorld.determinant()<0,Mt=vf(C,z,V,X,k);Pt.setMaterial(X,dt);let bt=V.index,Ft=1;if(X.wireframe===!0){if(bt=it.getWireframeAttribute(V),bt===void 0)return;Ft=2}const zt=V.drawRange,Lt=V.attributes.position;let Qt=zt.start*Ft,ie=(zt.start+zt.count)*Ft;st!==null&&(Qt=Math.max(Qt,st.start*Ft),ie=Math.min(ie,(st.start+st.count)*Ft)),bt!==null?(Qt=Math.max(Qt,0),ie=Math.min(ie,bt.count)):Lt!=null&&(Qt=Math.max(Qt,0),ie=Math.min(ie,Lt.count));const Ee=ie-Qt;if(Ee<0||Ee===1/0)return;he.setup(k,X,Mt,V,bt);let ve,te=Et;if(bt!==null&&(ve=et.get(bt),te=Jt,te.setIndex(ve)),k.isMesh)X.wireframe===!0?(Pt.setLineWidth(X.wireframeLinewidth*ye()),te.setMode(F.LINES)):te.setMode(F.TRIANGLES);else if(k.isLine){let It=X.linewidth;It===void 0&&(It=1),Pt.setLineWidth(It*ye()),k.isLineSegments?te.setMode(F.LINES):k.isLineLoop?te.setMode(F.LINE_LOOP):te.setMode(F.LINE_STRIP)}else k.isPoints?te.setMode(F.POINTS):k.isSprite&&te.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)te.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))te.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const It=k._multiDrawStarts,Ue=k._multiDrawCounts,se=k._multiDrawCount,mn=bt?et.get(bt).bytesPerElement:1,Ni=Ct.get(X).currentProgram.getUniforms();for(let $e=0;$e<se;$e++)Ni.setValue(F,"_gl_DrawID",$e),te.render(It[$e]/mn,Ue[$e])}else if(k.isInstancedMesh)te.renderInstances(Qt,Ee,k.count);else if(V.isInstancedBufferGeometry){const It=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ue=Math.min(V.instanceCount,It);te.renderInstances(Qt,Ee,Ue)}else te.render(Qt,Ee)};function oe(C,z,V){C.transparent===!0&&C.side===Bt&&C.forceSinglePass===!1?(C.side=Je,C.needsUpdate=!0,uo(C,z,V),C.side=si,C.needsUpdate=!0,uo(C,z,V),C.side=Bt):uo(C,z,V)}this.compile=function(C,z,V=null){V===null&&(V=C),d=$t.get(V),d.init(z),v.push(d),V.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),C!==V&&C.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights();const X=new Set;return C.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const st=k.material;if(st)if(Array.isArray(st))for(let dt=0;dt<st.length;dt++){const Mt=st[dt];oe(Mt,V,k),X.add(Mt)}else oe(st,V,k),X.add(st)}),v.pop(),d=null,X},this.compileAsync=function(C,z,V=null){const X=this.compile(C,z,V);return new Promise(k=>{function st(){if(X.forEach(function(dt){Ct.get(dt).currentProgram.isReady()&&X.delete(dt)}),X.size===0){k(C);return}setTimeout(st,10)}Zt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let pn=null;function Un(C){pn&&pn(C)}function Sl(){oi.stop()}function El(){oi.start()}const oi=new zu;oi.setAnimationLoop(Un),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(C){pn=C,J.setAnimationLoop(C),C===null?oi.stop():oi.start()},J.addEventListener("sessionstart",Sl),J.addEventListener("sessionend",El),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(z),z=J.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,z,R),d=$t.get(C,v.length),d.init(z),v.push(d),Ut.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),tt.setFromProjectionMatrix(Ut),At=this.localClippingEnabled,ct=rt.init(this.clippingPlanes,At),m=yt.get(C,M.length),m.init(),M.push(m),J.enabled===!0&&J.isPresenting===!0){const st=_.xr.getDepthSensingMesh();st!==null&&Lr(st,z,-1/0,_.sortObjects)}Lr(C,z,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(at,ut),jt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,jt&&Dt.addToRenderList(m,C),this.info.render.frame++,ct===!0&&rt.beginShadows();const V=d.state.shadowsArray;St.render(V,C,z),ct===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,k=m.transmissive;if(d.setupLights(),z.isArrayCamera){const st=z.cameras;if(k.length>0)for(let dt=0,Mt=st.length;dt<Mt;dt++){const bt=st[dt];Tl(X,k,C,bt)}jt&&Dt.render(C);for(let dt=0,Mt=st.length;dt<Mt;dt++){const bt=st[dt];bl(m,C,bt,bt.viewport)}}else k.length>0&&Tl(X,k,C,z),jt&&Dt.render(C),bl(m,C,z);R!==null&&T===0&&(I.updateMultisampleRenderTarget(R),I.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(_,C,z),he.resetDefaultState(),S=-1,w=null,v.pop(),v.length>0?(d=v[v.length-1],ct===!0&&rt.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Lr(C,z,V,X){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)V=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||tt.intersectsSprite(C)){X&&Xt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ut);const dt=$.update(C),Mt=C.material;Mt.visible&&m.push(C,dt,Mt,V,Xt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||tt.intersectsObject(C))){const dt=$.update(C),Mt=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Xt.copy(C.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Xt.copy(dt.boundingSphere.center)),Xt.applyMatrix4(C.matrixWorld).applyMatrix4(Ut)),Array.isArray(Mt)){const bt=dt.groups;for(let Ft=0,zt=bt.length;Ft<zt;Ft++){const Lt=bt[Ft],Qt=Mt[Lt.materialIndex];Qt&&Qt.visible&&m.push(C,dt,Qt,V,Xt.z,Lt)}}else Mt.visible&&m.push(C,dt,Mt,V,Xt.z,null)}}const st=C.children;for(let dt=0,Mt=st.length;dt<Mt;dt++)Lr(st[dt],z,V,X)}function bl(C,z,V,X){const k=C.opaque,st=C.transmissive,dt=C.transparent;d.setupLightsView(V),ct===!0&&rt.setGlobalState(_.clippingPlanes,V),X&&Pt.viewport(P.copy(X)),k.length>0&&ho(k,z,V),st.length>0&&ho(st,z,V),dt.length>0&&ho(dt,z,V),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Tl(C,z,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[X.id]===void 0&&(d.state.transmissionRenderTarget[X.id]=new wn(1,1,{generateMipmaps:!0,type:Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float")?Yn:Zn,minFilter:bi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const st=d.state.transmissionRenderTarget[X.id],dt=X.viewport||P;st.setSize(dt.z*_.transmissionResolutionScale,dt.w*_.transmissionResolutionScale);const Mt=_.getRenderTarget();_.setRenderTarget(st),_.getClearColor(G),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),jt&&Dt.render(V);const bt=_.toneMapping;_.toneMapping=ii;const Ft=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),d.setupLightsView(X),ct===!0&&rt.setGlobalState(_.clippingPlanes,X),ho(C,V,X),I.updateMultisampleRenderTarget(st),I.updateRenderTargetMipmap(st),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Lt=0,Qt=z.length;Lt<Qt;Lt++){const ie=z[Lt],Ee=ie.object,ve=ie.geometry,te=ie.material,It=ie.group;if(te.side===Bt&&Ee.layers.test(X.layers)){const Ue=te.side;te.side=Je,te.needsUpdate=!0,Al(Ee,V,X,ve,te,It),te.side=Ue,te.needsUpdate=!0,zt=!0}}zt===!0&&(I.updateMultisampleRenderTarget(st),I.updateRenderTargetMipmap(st))}_.setRenderTarget(Mt),_.setClearColor(G,W),Ft!==void 0&&(X.viewport=Ft),_.toneMapping=bt}function ho(C,z,V){const X=z.isScene===!0?z.overrideMaterial:null;for(let k=0,st=C.length;k<st;k++){const dt=C[k],Mt=dt.object,bt=dt.geometry,Ft=X===null?dt.material:X,zt=dt.group;Mt.layers.test(V.layers)&&Al(Mt,z,V,bt,Ft,zt)}}function Al(C,z,V,X,k,st){C.onBeforeRender(_,z,V,X,k,st),C.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),k.onBeforeRender(_,z,V,X,C,st),k.transparent===!0&&k.side===Bt&&k.forceSinglePass===!1?(k.side=Je,k.needsUpdate=!0,_.renderBufferDirect(V,z,X,k,C,st),k.side=si,k.needsUpdate=!0,_.renderBufferDirect(V,z,X,k,C,st),k.side=Bt):_.renderBufferDirect(V,z,X,k,C,st),C.onAfterRender(_,z,V,X,k,st)}function uo(C,z,V){z.isScene!==!0&&(z=me);const X=Ct.get(C),k=d.state.lights,st=d.state.shadowsArray,dt=k.state.version,Mt=Rt.getParameters(C,k.state,st,z,V),bt=Rt.getProgramCacheKey(Mt);let Ft=X.programs;X.environment=C.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(C.isMeshStandardMaterial?H:A).get(C.envMap||X.environment),X.envMapRotation=X.environment!==null&&C.envMap===null?z.environmentRotation:C.envMapRotation,Ft===void 0&&(C.addEventListener("dispose",Gt),Ft=new Map,X.programs=Ft);let zt=Ft.get(bt);if(zt!==void 0){if(X.currentProgram===zt&&X.lightsStateVersion===dt)return Cl(C,Mt),zt}else Mt.uniforms=Rt.getUniforms(C),C.onBeforeCompile(Mt,_),zt=Rt.acquireProgram(Mt,bt),Ft.set(bt,zt),X.uniforms=Mt.uniforms;const Lt=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Lt.clippingPlanes=rt.uniform),Cl(C,Mt),X.needsLights=Mf(C),X.lightsStateVersion=dt,X.needsLights&&(Lt.ambientLightColor.value=k.state.ambient,Lt.lightProbe.value=k.state.probe,Lt.directionalLights.value=k.state.directional,Lt.directionalLightShadows.value=k.state.directionalShadow,Lt.spotLights.value=k.state.spot,Lt.spotLightShadows.value=k.state.spotShadow,Lt.rectAreaLights.value=k.state.rectArea,Lt.ltc_1.value=k.state.rectAreaLTC1,Lt.ltc_2.value=k.state.rectAreaLTC2,Lt.pointLights.value=k.state.point,Lt.pointLightShadows.value=k.state.pointShadow,Lt.hemisphereLights.value=k.state.hemi,Lt.directionalShadowMap.value=k.state.directionalShadowMap,Lt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Lt.spotShadowMap.value=k.state.spotShadowMap,Lt.spotLightMatrix.value=k.state.spotLightMatrix,Lt.spotLightMap.value=k.state.spotLightMap,Lt.pointShadowMap.value=k.state.pointShadowMap,Lt.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=zt,X.uniformsList=null,zt}function Rl(C){if(C.uniformsList===null){const z=C.currentProgram.getUniforms();C.uniformsList=Qo.seqWithValue(z.seq,C.uniforms)}return C.uniformsList}function Cl(C,z){const V=Ct.get(C);V.outputColorSpace=z.outputColorSpace,V.batching=z.batching,V.batchingColor=z.batchingColor,V.instancing=z.instancing,V.instancingColor=z.instancingColor,V.instancingMorph=z.instancingMorph,V.skinning=z.skinning,V.morphTargets=z.morphTargets,V.morphNormals=z.morphNormals,V.morphColors=z.morphColors,V.morphTargetsCount=z.morphTargetsCount,V.numClippingPlanes=z.numClippingPlanes,V.numIntersection=z.numClipIntersection,V.vertexAlphas=z.vertexAlphas,V.vertexTangents=z.vertexTangents,V.toneMapping=z.toneMapping}function vf(C,z,V,X,k){z.isScene!==!0&&(z=me),I.resetTextureUnits();const st=z.fog,dt=X.isMeshStandardMaterial?z.environment:null,Mt=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ds,bt=(X.isMeshStandardMaterial?H:A).get(X.envMap||dt),Ft=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,zt=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Lt=!!V.morphAttributes.position,Qt=!!V.morphAttributes.normal,ie=!!V.morphAttributes.color;let Ee=ii;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ee=_.toneMapping);const ve=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,te=ve!==void 0?ve.length:0,It=Ct.get(X),Ue=d.state.lights;if(ct===!0&&(At===!0||C!==w)){const Ge=C===w&&X.id===S;rt.setState(X,C,Ge)}let se=!1;X.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Ue.state.version||It.outputColorSpace!==Mt||k.isBatchedMesh&&It.batching===!1||!k.isBatchedMesh&&It.batching===!0||k.isBatchedMesh&&It.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&It.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&It.instancing===!1||!k.isInstancedMesh&&It.instancing===!0||k.isSkinnedMesh&&It.skinning===!1||!k.isSkinnedMesh&&It.skinning===!0||k.isInstancedMesh&&It.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&It.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&It.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&It.instancingMorph===!1&&k.morphTexture!==null||It.envMap!==bt||X.fog===!0&&It.fog!==st||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==rt.numPlanes||It.numIntersection!==rt.numIntersection)||It.vertexAlphas!==Ft||It.vertexTangents!==zt||It.morphTargets!==Lt||It.morphNormals!==Qt||It.morphColors!==ie||It.toneMapping!==Ee||It.morphTargetsCount!==te)&&(se=!0):(se=!0,It.__version=X.version);let mn=It.currentProgram;se===!0&&(mn=uo(X,z,k));let Ni=!1,$e=!1,Ss=!1;const pe=mn.getUniforms(),cn=It.uniforms;if(Pt.useProgram(mn.program)&&(Ni=!0,$e=!0,Ss=!0),X.id!==S&&(S=X.id,$e=!0),Ni||w!==C){Pt.buffers.depth.getReversed()?(pt.copy(C.projectionMatrix),fd(pt),dd(pt),pe.setValue(F,"projectionMatrix",pt)):pe.setValue(F,"projectionMatrix",C.projectionMatrix),pe.setValue(F,"viewMatrix",C.matrixWorldInverse);const Xe=pe.map.cameraPosition;Xe!==void 0&&Xe.setValue(F,Ot.setFromMatrixPosition(C.matrixWorld)),Kt.logarithmicDepthBuffer&&pe.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pe.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,$e=!0,Ss=!0)}if(k.isSkinnedMesh){pe.setOptional(F,k,"bindMatrix"),pe.setOptional(F,k,"bindMatrixInverse");const Ge=k.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),pe.setValue(F,"boneTexture",Ge.boneTexture,I))}k.isBatchedMesh&&(pe.setOptional(F,k,"batchingTexture"),pe.setValue(F,"batchingTexture",k._matricesTexture,I),pe.setOptional(F,k,"batchingIdTexture"),pe.setValue(F,"batchingIdTexture",k._indirectTexture,I),pe.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&pe.setValue(F,"batchingColorTexture",k._colorsTexture,I));const ln=V.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Nt.update(k,V,mn),($e||It.receiveShadow!==k.receiveShadow)&&(It.receiveShadow=k.receiveShadow,pe.setValue(F,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(cn.envMap.value=bt,cn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(cn.envMapIntensity.value=z.environmentIntensity),$e&&(pe.setValue(F,"toneMappingExposure",_.toneMappingExposure),It.needsLights&&xf(cn,Ss),st&&X.fog===!0&&mt.refreshFogUniforms(cn,st),mt.refreshMaterialUniforms(cn,X,Y,j,d.state.transmissionRenderTarget[C.id]),Qo.upload(F,Rl(It),cn,I)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Qo.upload(F,Rl(It),cn,I),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pe.setValue(F,"center",k.center),pe.setValue(F,"modelViewMatrix",k.modelViewMatrix),pe.setValue(F,"normalMatrix",k.normalMatrix),pe.setValue(F,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ge=X.uniformsGroups;for(let Xe=0,Ir=Ge.length;Xe<Ir;Xe++){const ri=Ge[Xe];O.update(ri,mn),O.bind(ri,mn)}}return mn}function xf(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}function Mf(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,z,V){Ct.get(C.texture).__webglTexture=z,Ct.get(C.depthTexture).__webglTexture=V;const X=Ct.get(C);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||Zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,z){const V=Ct.get(C);V.__webglFramebuffer=z,V.__useDefaultFramebuffer=z===void 0};const yf=F.createFramebuffer();this.setRenderTarget=function(C,z=0,V=0){R=C,E=z,T=V;let X=!0,k=null,st=!1,dt=!1;if(C){const bt=Ct.get(C);if(bt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(F.FRAMEBUFFER,null),X=!1;else if(bt.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(bt.__hasExternalTextures)I.rebindTextures(C,Ct.get(C.texture).__webglTexture,Ct.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Lt=C.depthTexture;if(bt.__boundDepthTexture!==Lt){if(Lt!==null&&Ct.has(Lt)&&(C.width!==Lt.image.width||C.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}const Ft=C.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(dt=!0);const zt=Ct.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(zt[z])?k=zt[z][V]:k=zt[z],st=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?k=Ct.get(C).__webglMultisampledFramebuffer:Array.isArray(zt)?k=zt[V]:k=zt,P.copy(C.viewport),U.copy(C.scissor),N=C.scissorTest}else P.copy(Tt).multiplyScalar(Y).floor(),U.copy(kt).multiplyScalar(Y).floor(),N=ce;if(V!==0&&(k=yf),Pt.bindFramebuffer(F.FRAMEBUFFER,k)&&X&&Pt.drawBuffers(C,k),Pt.viewport(P),Pt.scissor(U),Pt.setScissorTest(N),st){const bt=Ct.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,bt.__webglTexture,V)}else if(dt){const bt=Ct.get(C.texture),Ft=z;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,bt.__webglTexture,V,Ft)}else if(C!==null&&V!==0){const bt=Ct.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,bt.__webglTexture,V)}S=-1},this.readRenderTargetPixels=function(C,z,V,X,k,st,dt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ct.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){Pt.bindFramebuffer(F.FRAMEBUFFER,Mt);try{const bt=C.texture,Ft=bt.format,zt=bt.type;if(!Kt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-X&&V>=0&&V<=C.height-k&&F.readPixels(z,V,X,k,Vt.convert(Ft),Vt.convert(zt),st)}finally{const bt=R!==null?Ct.get(R).__webglFramebuffer:null;Pt.bindFramebuffer(F.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(C,z,V,X,k,st,dt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Ct.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){const bt=C.texture,Ft=bt.format,zt=bt.type;if(!Kt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=C.width-X&&V>=0&&V<=C.height-k){Pt.bindFramebuffer(F.FRAMEBUFFER,Mt);const Lt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Lt),F.bufferData(F.PIXEL_PACK_BUFFER,st.byteLength,F.STREAM_READ),F.readPixels(z,V,X,k,Vt.convert(Ft),Vt.convert(zt),0);const Qt=R!==null?Ct.get(R).__webglFramebuffer:null;Pt.bindFramebuffer(F.FRAMEBUFFER,Qt);const ie=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ud(F,ie,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Lt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,st),F.deleteBuffer(Lt),F.deleteSync(ie),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,z=null,V=0){C.isTexture!==!0&&(ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,C=arguments[1]);const X=Math.pow(2,-V),k=Math.floor(C.image.width*X),st=Math.floor(C.image.height*X),dt=z!==null?z.x:0,Mt=z!==null?z.y:0;I.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,dt,Mt,k,st),Pt.unbindTexture()};const wf=F.createFramebuffer(),Sf=F.createFramebuffer();this.copyTextureToTexture=function(C,z,V=null,X=null,k=0,st=null){C.isTexture!==!0&&(ji("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1],z=arguments[2],st=arguments[3]||0,V=null),st===null&&(k!==0?(ji("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=k,k=0):st=0);let dt,Mt,bt,Ft,zt,Lt,Qt,ie,Ee;const ve=C.isCompressedTexture?C.mipmaps[st]:C.image;if(V!==null)dt=V.max.x-V.min.x,Mt=V.max.y-V.min.y,bt=V.isBox3?V.max.z-V.min.z:1,Ft=V.min.x,zt=V.min.y,Lt=V.isBox3?V.min.z:0;else{const ln=Math.pow(2,-k);dt=Math.floor(ve.width*ln),Mt=Math.floor(ve.height*ln),C.isDataArrayTexture?bt=ve.depth:C.isData3DTexture?bt=Math.floor(ve.depth*ln):bt=1,Ft=0,zt=0,Lt=0}X!==null?(Qt=X.x,ie=X.y,Ee=X.z):(Qt=0,ie=0,Ee=0);const te=Vt.convert(z.format),It=Vt.convert(z.type);let Ue;z.isData3DTexture?(I.setTexture3D(z,0),Ue=F.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(I.setTexture2DArray(z,0),Ue=F.TEXTURE_2D_ARRAY):(I.setTexture2D(z,0),Ue=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const se=F.getParameter(F.UNPACK_ROW_LENGTH),mn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ni=F.getParameter(F.UNPACK_SKIP_PIXELS),$e=F.getParameter(F.UNPACK_SKIP_ROWS),Ss=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ve.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ve.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ft),F.pixelStorei(F.UNPACK_SKIP_ROWS,zt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Lt);const pe=C.isDataArrayTexture||C.isData3DTexture,cn=z.isDataArrayTexture||z.isData3DTexture;if(C.isDepthTexture){const ln=Ct.get(C),Ge=Ct.get(z),Xe=Ct.get(ln.__renderTarget),Ir=Ct.get(Ge.__renderTarget);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,Xe.__webglFramebuffer),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ir.__webglFramebuffer);for(let ri=0;ri<bt;ri++)pe&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ct.get(C).__webglTexture,k,Lt+ri),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ct.get(z).__webglTexture,st,Ee+ri)),F.blitFramebuffer(Ft,zt,dt,Mt,Qt,ie,dt,Mt,F.DEPTH_BUFFER_BIT,F.NEAREST);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(k!==0||C.isRenderTargetTexture||Ct.has(C)){const ln=Ct.get(C),Ge=Ct.get(z);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,wf),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Sf);for(let Xe=0;Xe<bt;Xe++)pe?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ln.__webglTexture,k,Lt+Xe):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ln.__webglTexture,k),cn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ge.__webglTexture,st,Ee+Xe):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ge.__webglTexture,st),k!==0?F.blitFramebuffer(Ft,zt,dt,Mt,Qt,ie,dt,Mt,F.COLOR_BUFFER_BIT,F.NEAREST):cn?F.copyTexSubImage3D(Ue,st,Qt,ie,Ee+Xe,Ft,zt,dt,Mt):F.copyTexSubImage2D(Ue,st,Qt,ie,Ft,zt,dt,Mt);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else cn?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(Ue,st,Qt,ie,Ee,dt,Mt,bt,te,It,ve.data):z.isCompressedArrayTexture?F.compressedTexSubImage3D(Ue,st,Qt,ie,Ee,dt,Mt,bt,te,ve.data):F.texSubImage3D(Ue,st,Qt,ie,Ee,dt,Mt,bt,te,It,ve):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,st,Qt,ie,dt,Mt,te,It,ve.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,st,Qt,ie,ve.width,ve.height,te,ve.data):F.texSubImage2D(F.TEXTURE_2D,st,Qt,ie,dt,Mt,te,It,ve);F.pixelStorei(F.UNPACK_ROW_LENGTH,se),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ni),F.pixelStorei(F.UNPACK_SKIP_ROWS,$e),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ss),st===0&&z.generateMipmaps&&F.generateMipmap(Ue),Pt.unbindTexture()},this.copyTextureToTexture3D=function(C,z,V=null,X=null,k=0){return C.isTexture!==!0&&(ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,X=arguments[1]||null,C=arguments[2],z=arguments[3],k=arguments[4]||0),ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,z,V,X,k)},this.initRenderTarget=function(C){Ct.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),Pt.unbindTexture()},this.resetState=function(){E=0,T=0,R=null,Pt.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const nv=15,iv=6,sv=1.8,gr=8,Fh=.85,Oh=.98,_r=.003,Me=90,Js=1.7,ov=60,rv=45,av=10,cv=6,lv=8,hv=4,uv=5,fv=80,dv=35,pv=30,mv=25,gv=60,Vu=3,_v=20,vv=5,xv=30,Mv=40,yv=6,wv=600,Sv=5,Ev=8,bv=6,xe=280,Rc=2.5,Tv=6,zh=1.5,Cc=5,Bh=2.5,ma=12,Fe=30,Av=4,Rv=5,Cv=8,Pv=2.2,B={fog:396308,ground:1058840,bark:1708554,leaf:798740,leafGlow:4521898,mushCap:8926190,mushGlow:13400063,mushStem:2756928,crystal:3407837,crystalCore:8978414,firefly:15662950,fireflyB:6750173,spore:12320665,ambient:2241365,moon:12307694,jellyBell:7833855,jellyGlow:11193599,jellyTent:6715340,puffBody:16768460,puffGlow:16755336,puffEye:2236962,puffCheek:16746649,deerBody:11202303,deerGlow:8969727,deerAntler:13434862,deerEye:1127236,mothWing:11206553,mothGlow:13434794,mothBody:5596723,mothSpot:16777215,grassTip:3385941,fern:1725744,fernGlow:3394662,flower:16742348,flowerGlow:16751069,flowerStem:1721376,reed:2774325,reedTip:4504422,orbGold:16763955,orbGlow:16772778,orbInner:16775389,laserPink:16737962,laserGlow:16746700,obeliskBlack:657938,obeliskPink:16729258,moatBlue:3377356,rainbow:[16724787,16746547,16772659,3407718,3377407,8926207],wispCore:11202303,wispGlow:14544639,wispTrail:8965375,dandStem:4482611,dandHead:16777198,dandSeed:16775389,dandSeedGlow:16777215,fairyMush:13404415,fairyGlow:14527231,fairyRing:11167470,bubbleIris:11197951,bubbleShine:16777215,bubblePop:13434862,starMote:16772829,pondWater:2254506,pondGlow:3377356,lilyPad:2263108,lilyFlower:16746700,lilyGlow:16755421,rockBase:2763314,rockMoss:1721378,rockLight:3816005,skyDeep:198160,skyStarBright:16777215,skyStarDim:8952251,skyStarWarm:16768426,skyStarCool:11193599,skyAnomaly:[16729224,4521932,16755234,8930559,2285055,16737860],skyConstLine:3359846},ke=new ev({antialias:!0,powerPreference:"default"});ke.setSize(window.innerWidth,window.innerHeight);ke.setPixelRatio(Math.min(window.devicePixelRatio,2));ke.shadowMap.enabled=!0;ke.shadowMap.type=jh;ke.toneMapping=Qh;ke.toneMappingExposure=2.5;ke.outputColorSpace=qe;document.body.appendChild(ke.domElement);const Ve=new nn(65,window.innerWidth/window.innerHeight,.1,300),Wu=new Ou,xt=new Nd;xt.background=new _t(B.skyDeep);xt.fog=new ol(B.fog,.01);window.addEventListener("resize",()=>{Ve.aspect=window.innerWidth/window.innerHeight,Ve.updateProjectionMatrix(),ke.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("visibilitychange",()=>{document.hidden||Wu.getDelta()});const Xu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ro{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Lv=new fl(-1,1,1,-1,0,1);class Iv extends Ae{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}}const Dv=new Iv;class Yu{constructor(t){this._mesh=new L(Dv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Lv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Uv extends ro{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=hr.clone(t.uniforms),this.material=new Ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Yu(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class kh extends ro{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class Nv extends ro{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Fv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new lt);this._width=n.width,this._height=n.height,e=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Yn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Uv(Xu),this.copyPass.material.blending=Xn,this.clock=new Ou}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}kh!==void 0&&(r instanceof kh?n=!0:r instanceof Nv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ov extends ro{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _t}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const zv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _t(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class gs extends ro{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new lt(t.x,t.y):new lt(256,256),this.clearColor=new _t(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new wn(o,r,{type:Yn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new wn(o,r,{type:Yn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new wn(o,r,{type:Yn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),o=Math.round(o/2),r=Math.round(r/2)}const a=zv;this.highPassUniforms=hr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ze({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new lt(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Xu;this.copyUniforms=hr.clone(h.uniforms),this.blendMaterial=new Ze({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Fa,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new _t,this.oldClearAlpha=1,this.basic=new Z,this.fsQuad=new Yu(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new lt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=gs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=gs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ze({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ze({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}gs.BlurDirectionX=new lt(1,0);gs.BlurDirectionY=new lt(0,1);let Ri=null,pl=!0;try{const i=new Ov(xt,Ve),t=new gs(new lt(window.innerWidth,window.innerHeight),.6,.4,.85);Ri=new Fv(ke),Ri.addPass(i),Ri.addPass(t)}catch(i){console.warn("Bloom unavailable, falling back to direct render:",i.message),pl=!1}window.addEventListener("resize",()=>{pl&&Ri&&Ri.setSize(window.innerWidth,window.innerHeight)});function Gh(){pl&&Ri?Ri.render():ke.render(xt,Ve)}const ml=new mp(B.ambient,B.ground,.5);xt.add(ml);const fn=new Ar(B.moon,.85);fn.position.set(30,60,-20);fn.castShadow=!0;fn.shadow.camera.left=-90;fn.shadow.camera.right=90;fn.shadow.camera.top=90;fn.shadow.camera.bottom=-90;fn.shadow.camera.near=1;fn.shadow.camera.far=250;fn.shadow.mapSize.set(2048,2048);fn.shadow.bias=-.001;xt.add(fn);const dn=new Ar(2241365,.3);dn.position.set(-40,45,25);dn.castShadow=!0;dn.shadow.camera.left=-70;dn.shadow.camera.right=70;dn.shadow.camera.top=70;dn.shadow.camera.bottom=-70;dn.shadow.camera.near=1;dn.shadow.camera.far=200;dn.shadow.mapSize.set(1024,1024);dn.shadow.bias=-.002;xt.add(dn);const qu=new Ar(3359829,.4);qu.position.set(-25,15,30);xt.add(qu);const Zu=new Ui(3368516,.7,100);Zu.position.set(0,.5,0);xt.add(Zu);const Bv=[{pos:[15,3,15],col:3368618,int:.8,dist:30},{pos:[-20,4,-10],col:6702216,int:.7,dist:25},{pos:[0,5,30],col:2263142,int:.7,dist:28},{pos:[-15,3,20],col:4491417,int:.6,dist:22},{pos:[25,3,-20],col:10053188,int:.5,dist:20}];for(const i of Bv){const t=new Ui(i.col,i.int,i.dist);t.position.set(i.pos[0],i.pos[1],i.pos[2]),xt.add(t)}const Ku=new Ar(4478327,.4);Ku.position.set(-10,25,40);xt.add(Ku);const gl=new Ui(6719624,.6,20);xt.add(gl);const _i=[];function kv(){for(let i=0;i<Rv;i++){const t=new Ui(B.crystal,0,16);xt.add(t),_i.push(t)}}const Ns=new Ui(B.orbGold,0,15);xt.add(Ns);const Re={};let js=0,Ci=0,Cr=!1,Ju=!1,_l=0,vl=0,xl=!1,Pr=!1,ao=!1,vr=null,Ii=null,Pc=0,Lc=0,Ic=null;function Gv(i){Ic=i}function Hv(i){Ju=i}function Vv(i){Pr=i}function co(){!Ju&&Ic&&Ic()}window.addEventListener("keydown",i=>{Re[i.code]=!0,"Space ShiftLeft ShiftRight KeyW KeyA KeyS KeyD".split(" ").indexOf(i.code)>=0&&i.preventDefault(),co()});window.addEventListener("keyup",i=>{Re[i.code]=!1});window.addEventListener("blur",()=>{for(const i in Re)Re[i]=!1;Cr=!1});ke.domElement.addEventListener("mousedown",()=>{Cr=!0,co()});window.addEventListener("mouseup",()=>{Cr=!1});window.addEventListener("mousemove",i=>{Cr&&(js-=i.movementX*_r,Ci-=i.movementY*_r,Ci=Math.max(-1,Math.min(1,Ci)))});const Wv="ontouchstart"in window||navigator.maxTouchPoints>0,lo=document.getElementById("joy-zone"),xr=document.getElementById("joy-knob"),Ml=document.getElementById("btn-jump");Wv&&(lo.style.display="block",Ml.style.display="block",document.getElementById("controls").textContent="Stick: Move · Drag right: Look · JUMP");function ju(i,t){const e=lo.getBoundingClientRect();let n=i-(e.left+e.width/2),s=t-(e.top+e.height/2);const o=Math.sqrt(n*n+s*s),r=52;o>r&&(n=n/o*r,s=s/o*r),_l=n/r,vl=s/r,xr.style.left=40+n+"px",xr.style.top=40+s+"px"}lo.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),co();const t=i.changedTouches[0];vr=t.identifier,xl=!0,ju(t.clientX,t.clientY)},{passive:!1});lo.addEventListener("touchmove",i=>{i.preventDefault(),i.stopPropagation();for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===vr&&ju(i.changedTouches[t].clientX,i.changedTouches[t].clientY)},{passive:!1});lo.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation();for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===vr&&(vr=null,xl=!1,_l=0,vl=0,xr.style.left="40px",xr.style.top="40px")},{passive:!1});Ml.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),co(),Pr=!0},{passive:!1});Ml.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation(),Pr=!1},{passive:!1});ke.domElement.addEventListener("touchstart",i=>{i.preventDefault(),co();for(let t=0;t<i.changedTouches.length;t++){const e=i.changedTouches[t];e.clientX>window.innerWidth*.3&&Ii===null&&(Ii=e.identifier,Pc=e.clientX,Lc=e.clientY)}},{passive:!1});ke.domElement.addEventListener("touchmove",i=>{i.preventDefault();for(let t=0;t<i.changedTouches.length;t++){const e=i.changedTouches[t];e.identifier===Ii&&(js-=(e.clientX-Pc)*_r,Ci-=(e.clientY-Lc)*_r,Ci=Math.max(-1,Math.min(1,Ci)),Pc=e.clientX,Lc=e.clientY)}},{passive:!1});ke.domElement.addEventListener("touchend",i=>{for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Ii&&(Ii=null)},{passive:!1});ke.domElement.addEventListener("touchcancel",i=>{for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Ii&&(Ii=null)},{passive:!1});function Xv(){let i=0,t=0;Re.KeyW&&(t-=1),Re.KeyS&&(t+=1),Re.KeyA&&(i-=1),Re.KeyD&&(i+=1),xl&&(i+=_l,t+=vl);const e=Math.sqrt(i*i+t*t);e>1&&(i/=e,t/=e);const n=iv*(Re.ShiftLeft||Re.ShiftRight||ao?sv:1),s=Math.sin(js),o=Math.cos(js);return{x:(i*o+t*s)*n,z:(-i*s+t*o)*n}}const je={mushCap:new q(.5,8,5),mushStem:new wt(.06,.1,.6,5),mushDot:new q(.06,4,3),crystal:new wt(0,.35,1.8,6),crystalSm:new wt(0,.18,.9,5),fly:new q(.06,4,3),spore:new q(.04,3,3),dandSeed:new q(.025,3,3),bubble:new q(.15,8,6),starMote:new q(.03,3,3),dustMote:new q(.035,3,3)};let ga=42;function y(){return ga=ga*16807%2147483647,(ga&2147483647)/2147483647}function Yv(){const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d");e.fillStyle="#1a3828",e.fillRect(0,0,1024,1024);for(let c=0;c<20;c++){const l=Math.random()*1024,h=Math.random()*1024,u=40+Math.random()*80,f=e.createRadialGradient(l,h,0,l,h,u),p=Math.random();p<.4?(f.addColorStop(0,"rgba(30,60,35,0.25)"),f.addColorStop(1,"rgba(20,42,24,0)")):p<.7?(f.addColorStop(0,"rgba(40,35,18,0.2)"),f.addColorStop(1,"rgba(25,30,18,0)")):(f.addColorStop(0,"rgba(35,70,40,0.22)"),f.addColorStop(1,"rgba(20,48,28,0)")),e.fillStyle=f;for(let g=-1;g<=1;g++)for(let x=-1;x<=1;x++)e.beginPath(),e.arc(l+g*1024,h+x*1024,u,0,6.28),e.fill()}const n=[60,200,600],s=[.18,.12,.08],o=[30,12,5];for(let c=0;c<3;c++)for(let l=0;l<n[c];l++){const h=Math.random()*1024,u=Math.random()*1024,f=Math.random();f<.25?e.fillStyle="rgba(8,16,8,"+s[c]+")":f<.5?e.fillStyle="rgba(20,45,25,"+s[c]+")":f<.75?e.fillStyle="rgba(30,55,28,"+s[c]+")":e.fillStyle="rgba(28,22,12,"+s[c]+")",e.beginPath(),e.arc(h,u,o[c]+Math.random()*o[c]*.5,0,6.28),e.fill()}for(let c=0;c<12;c++){const l=Math.random()*1024,h=Math.random()*1024,u=30+Math.random()*60,f=1.5+Math.random()*3,p=Math.random()<.5?1:-1,g=Math.floor(40+Math.random()*40),x=Math.random();x<.4?e.strokeStyle="rgba(35,65,30,0.1)":x<.7?e.strokeStyle="rgba(25,50,35,0.08)":e.strokeStyle="rgba(45,35,20,0.07)",e.lineWidth=1+Math.random()*2,e.beginPath();for(let d=0;d<g;d++){const M=d/g,v=M*f*6.28*p,_=M*u,b=l+Math.cos(v)*_,E=h+Math.sin(v)*_;d===0?e.moveTo(b,E):e.lineTo(b,E)}e.stroke();const m=e.createRadialGradient(l,h,0,l,h,u*.6);m.addColorStop(0,"rgba(30,60,35,0.06)"),m.addColorStop(1,"rgba(15,30,15,0)"),e.fillStyle=m,e.beginPath(),e.arc(l,h,u*.6,0,6.28),e.fill()}for(let c=0;c<8;c++){const l=Math.random()*1024,h=Math.random()*1024,u=15+Math.random()*35;e.strokeStyle="rgba(35,55,30,"+(.06+Math.random()*.06)+")",e.lineWidth=1.5+Math.random()*2,e.beginPath(),e.arc(l,h,u,0,6.28),e.stroke(),Math.random()<.6&&(e.strokeStyle="rgba(40,65,35,0.04)",e.beginPath(),e.arc(l,h,u*.6,0,6.28),e.stroke())}for(let c=0;c<15;c++){let l=Math.random()*1024,h=Math.random()*1024;e.strokeStyle="rgba(22,40,18,"+(.08+Math.random()*.08)+")",e.lineWidth=.8+Math.random()*1.5,e.beginPath(),e.moveTo(l,h);let u=Math.random()*6.28;for(let f=0;f<20;f++)u+=Math.sin(f*.5)*.4+(Math.random()-.5)*.3,l+=Math.cos(u)*(5+Math.random()*8),h+=Math.sin(u)*(5+Math.random()*8),e.lineTo(l,h);e.stroke()}for(let c=0;c<4e3;c++){const l=Math.random()*1024,h=Math.random()*1024,u=1+Math.random()*2.5,f=Math.random();f<.25?e.fillStyle="rgba(50,28,10,0.3)":f<.4?e.fillStyle="rgba(65,40,18,0.22)":f<.6?e.fillStyle="rgba(18,45,22,0.25)":f<.8?e.fillStyle="rgba(35,60,30,0.2)":e.fillStyle="rgba(45,32,15,0.18)",e.beginPath(),e.arc(l,h,u,0,6.28),e.fill()}for(let c=0;c<600;c++){const l=Math.random()*1024,h=Math.random()*1024,u=1.5+Math.random()*3,f=Math.floor(25+Math.random()*40);e.fillStyle="rgba("+f+","+(f-3)+","+(f-8)+",0.25)",e.beginPath(),e.arc(l,h,u,0,6.28),e.fill()}e.lineWidth=.8;for(let c=0;c<100;c++){const l=Math.random()*1024,h=Math.random()*1024,u=3+Math.random()*16,f=Math.random()*6.28;e.strokeStyle="rgba(20,10,4,0.2)",e.beginPath(),e.moveTo(l,h),e.lineTo(l+Math.cos(f)*u,h+Math.sin(f)*u),e.stroke()}const r=["rgba(80,200,120,0.06)","rgba(120,80,180,0.05)","rgba(180,120,60,0.04)","rgba(60,150,180,0.05)","rgba(150,100,200,0.04)"];for(let c=0;c<200;c++){const l=Math.random()*1024,h=Math.random()*1024;e.fillStyle=r[Math.floor(Math.random()*r.length)],e.beginPath(),e.arc(l,h,.8+Math.random()*1.5,0,6.28),e.fill()}for(let c=0;c<30;c++){const l=Math.random()*1024,h=Math.random()*1024,u=12+Math.random()*25,f=e.createRadialGradient(l,h,0,l,h,u);Math.random()<.6?(f.addColorStop(0,"rgba(28,60,30,0.1)"),f.addColorStop(1,"rgba(15,35,18,0)")):(f.addColorStop(0,"rgba(38,50,22,0.08)"),f.addColorStop(1,"rgba(20,30,12,0)")),e.fillStyle=f,e.beginPath(),e.arc(l,h,u,0,6.28),e.fill()}for(let c=0;c<120;c++){const l=Math.random()*1024,h=Math.random()*1024;e.fillStyle="rgba(100,160,110,0.06)",e.beginPath(),e.arc(l,h,.5+Math.random()*1,0,6.28),e.fill()}e.lineWidth=1;for(let c=0;c<40;c++){e.strokeStyle="rgba(25,14,5,0.18)";let l=Math.random()*1024,h=Math.random()*1024,u=Math.random()*6.28;e.beginPath(),e.moveTo(l,h);for(let f=0;f<8;f++)u+=Math.sin(f*.7)*.5+(Math.random()-.5)*.4,l+=Math.cos(u)*(10+Math.random()*15),h+=Math.sin(u)*(10+Math.random()*15),e.lineTo(l,h);e.stroke()}const a=new bu(t);return a.wrapS=a.wrapT=rr,a.repeat.set(6,6),a.colorSpace=qe,a}function qv(){const i=Yv(),t=new L(new Ie(Me*1.5,64),new Q({map:i,color:14544605,roughness:.85,metalness:0,emissive:662032,emissiveIntensity:.15}));return t.rotation.x=-Math.PI/2,t.receiveShadow=!0,xt.add(t),t}const en=new ne;function Zv(){const i=[new q(.2,4,3),new q(.35,6,4),new q(.55,6,5)],t=[B.skyStarBright,B.skyStarDim,B.skyStarWarm,B.skyStarCool];for(let h=0;h<wv;h++){const u=y()*6.28,f=y()*.85*Math.PI*.5+(h<80?y()*.4:0),p=h<40?2:h<160?1:0,g=t[Math.floor(y()*t.length)],x=new Z({color:g,transparent:!0,opacity:p===0?.2+y()*.3:p===1?.45+y()*.35:.8+y()*.2}),m=new L(i[p],x),d=xe*Math.cos(u)*Math.cos(f),M=xe*Math.sin(f)+20,v=xe*Math.sin(u)*Math.cos(f);m.position.set(d,M,v),en.add(m)}for(let h=0;h<10;h++){const u=y()*6.28,f=.3+y()*.5,p=xe*.95*Math.cos(u)*Math.cos(f),g=xe*.95*Math.sin(f)+30,x=xe*.95*Math.sin(u)*Math.cos(f),m=new Z({color:t[Math.floor(y()*t.length)],transparent:!0,opacity:.03+y()*.04}),d=new L(new q(10+y()*15,12,8),m);d.position.set(p,g,x),en.add(d)}function e(h,u,f,p,g,x){const m=new ne,d=new Z({color:13421755,transparent:!0,opacity:.12});m.add(new L(new q(p*.12,10,8),d));const M=new Z({color:x,transparent:!0,opacity:.04});m.add(new L(new q(p*.35,10,8),M));const v=new Z({color:x,transparent:!0,opacity:.06}),_=new Z({color:14540236,transparent:!0,opacity:.15});for(let b=0;b<g;b++){const E=b/g*6.28;for(let T=0;T<14;T++){const R=T/14,S=p*.1+R*p,w=E+R*3.5,P=S*Math.cos(w)+(y()-.5)*p*.08,U=S*Math.sin(w)+(y()-.5)*p*.08,N=(y()-.5)*p*.03,G=.2+y()*.35,W=new L(new q(G,4,3),T%4===0?_:v);W.position.set(P,N,U),m.add(W)}}return m.position.set(h,u,f),m.rotation.set(y()*1.5,y()*3,y()*.8),m}const n=[{a:.8,ph:.6,r:xe*.88,sz:18,arms:2,col:5588087},{a:3.2,ph:.45,r:xe*.92,sz:14,arms:3,col:4482679},{a:5.1,ph:.7,r:xe*.85,sz:22,arms:2,col:6706534}];for(const h of n){const u=h.r*Math.cos(h.a)*Math.cos(h.ph),f=h.r*Math.sin(h.ph)+20,p=h.r*Math.sin(h.a)*Math.cos(h.ph);en.add(e(u,f,p,h.sz,h.arms,h.col))}const s=[5583718,3364198,6697813,3368533,5588053];for(let h=0;h<Sv;h++){const u=y()*6.28,f=.15+y()*.65,p=xe*.75+y()*xe*.15,g=p*Math.cos(u)*Math.cos(f),x=p*Math.sin(f)+15,m=p*Math.sin(u)*Math.cos(f),d=25+y()*35,M=s[h%s.length];for(let _=0;_<3;_++){const b=d*(1-_*.2),E=new Z({color:M,transparent:!0,opacity:.008+_*.005,side:Bt}),T=new L(new q(b,14,10),E);T.position.set(g+(y()-.5)*d*.3,x+(y()-.5)*d*.2,m+(y()-.5)*d*.3),T.scale.set(1+y()*.8,.3+y()*.4,1+y()*.6),en.add(T)}const v=2+Math.floor(y()*2);for(let _=0;_<v;_++){const b=y()*6.28,E=d*.3+y()*d*.5,T=d*.2+y()*d*.25,R=new Z({color:M,transparent:!0,opacity:.005+y()*.006,side:Bt}),S=new L(new q(T,8,6),R);S.position.set(g+Math.cos(b)*E,x+(y()-.5)*d*.25,m+Math.sin(b)*E),S.scale.set(1+y()*.5,.25+y()*.3,1+y()*.5),en.add(S)}}const o=[[[0,0],[.04,.03],[.08,.01],[.08,.05],[.12,.03]],[[0,0],[.03,.04],[.06,0],[.06,.06],[.09,.03]],[[0,0],[.02,.05],[.05,.02],[.08,.06],[.1,0]],[[0,0],[.04,.02],[.02,.05],[.06,.05]],[[0,0],[.03,.01],[.06,.03],[.04,.06],[.01,.04]],[[0,0],[.05,0],[.025,.04]],[[0,0],[.04,.03],[.08,0],[.12,.03],[.08,.06]],[[0,0],[.03,.02],[.06,.04],[.09,.02],[.12,0]]],r=new al({color:B.skyConstLine,transparent:!0,opacity:.1}),a=new Z({color:B.skyStarBright,transparent:!0,opacity:.8});for(let h=0;h<Ev;h++){const u=o[h%o.length],f=y()*6.28,p=.2+y()*.55,g=new ne,x=[];for(let m=0;m<u.length;m++){const d=f+u[m][0]*6,M=p+u[m][1]*3,v=xe*.93*Math.cos(d)*Math.cos(M),_=xe*.93*Math.sin(M)+20,b=xe*.93*Math.sin(d)*Math.cos(M);x.push(new D(v,_,b));const E=new L(new q(.5+y()*.4,4,3),a);E.position.set(v,_,b),g.add(E)}for(let m=0;m<x.length-1;m++){const d=new Ae().setFromPoints([x[m],x[m+1]]);g.add(new Eu(d,r))}en.add(g)}for(let h=0;h<bv;h++){const u=y()*6.28,f=.2+y()*.6,p=xe*.8+y()*xe*.1,g=p*Math.cos(u)*Math.cos(f),x=p*Math.sin(f)+20,m=p*Math.sin(u)*Math.cos(f),d=B.skyAnomaly[h%B.skyAnomaly.length],M=new ne;M.add(new L(new q(.6,6,5),new Z({color:d,transparent:!0,opacity:.6}))),M.add(new L(new q(2.5,8,6),new Z({color:d,transparent:!0,opacity:.08}))),M.add(new L(new q(5+y()*3,10,8),new Z({color:d,transparent:!0,opacity:.025}))),M.position.set(g,x,m),en.add(M)}const c=new Z({color:5596791,transparent:!0,opacity:.025,side:Bt});for(let h=0;h<14;h++){const u=h*.25+y()*.1,f=.38+y()*.18,p=xe*.9*Math.cos(u)*Math.cos(f),g=xe*.9*Math.sin(f)+20,x=xe*.9*Math.sin(u)*Math.cos(f),m=15+y()*20,d=new L(new q(m,10,8),c);d.position.set(p,g,x),d.scale.set(1.5+y()*1,.1+y()*.08,.4+y()*.3),d.lookAt(0,25,0),d.rotation.z=y()*.5,en.add(d)}const l=new Z({color:6715272,transparent:!0,opacity:.035});for(let h=0;h<6;h++){const u=h*.5+y()*.2,f=.38+y()*.12,p=xe*.88*Math.cos(u)*Math.cos(f),g=xe*.88*Math.sin(f)+22,x=xe*.88*Math.sin(u)*Math.cos(f),m=new L(new q(4+y()*6,8,6),l);m.position.set(p,g,x),en.add(m)}xt.add(en),en.traverse(h=>{h.material&&(h.material.fog=!1)})}function $u(i,t){en.rotation.y=t*.003}const ot={pos:new D(0,Js,0),vel:new D,onGround:!0};let Hh=0,_a=0,Qu=0,va=65,Vh=65,Ls=0,Wh=!0,xa=0,_s=0,Dc=[],Uc=[],Nc=null;function Kv(i,t){Dc=i,Uc=t}function Jv(i){Nc=i}function jv(i){const t=Xv(),e=Re.ShiftLeft||Re.ShiftRight||ao;if(ot.vel.x=t.x,ot.vel.z=t.z,ot.vel.y-=nv*i,(Re.Space||Pr)&&ot.onGround&&(ot.vel.y=gr,ot.onGround=!1,Vv(!1)),ot.onGround||(xa=ot.vel.y),ot.pos.x+=ot.vel.x*i,ot.pos.y+=ot.vel.y*i,ot.pos.z+=ot.vel.z*i,ot.pos.y<=Js){if(ot.pos.y=Js,ot.vel.y=0,!Wh&&xa<-3){const l=Math.min(Math.abs(xa)/gr,1);Ls=l*.15,Nc&&Nc(ot.pos.x,ot.pos.z,Math.floor(3+l*5))}ot.onGround=!0}Wh=ot.onGround,ot.onGround?(ot.vel.x*=Fh,ot.vel.z*=Fh):(ot.vel.x*=Oh,ot.vel.z*=Oh);const n=.4;for(let l=0;l<Dc.length;l++){const h=Dc[l],u=ot.pos.x-h.x,f=ot.pos.z-h.z,p=u*u+f*f,g=.6+n;if(p<g*g&&p>.001){const x=1/Math.sqrt(p);ot.pos.x=h.x+u*x*g,ot.pos.z=h.z+f*x*g}}for(let l=0;l<Uc.length;l++){const h=Uc[l],u=ot.pos.x-h.x,f=ot.pos.z-h.z,p=u*u+f*f,g=h.colR+n;if(p<g*g&&p>.001){const x=1/Math.sqrt(p);ot.pos.x=h.x+u*x*g,ot.pos.z=h.z+f*x*g}}if(Math.sqrt(ot.pos.x*ot.pos.x+ot.pos.z*ot.pos.z)>Me){const l=Math.atan2(ot.pos.z,ot.pos.x);ot.pos.x=Math.cos(l)*Me,ot.pos.z=Math.sin(l)*Me}gl.position.copy(ot.pos);const r=Math.sqrt(t.x*t.x+t.z*t.z)>.5&&ot.onGround;r?_s=0:_s+=i,_a+=((r?e?.06:.035:0)-_a)*i*6,r&&(Hh+=i*(e?12:8));const c=Math.sin(Hh)*_a;Vh=e&&r?78:65,va+=(Vh-va)*i*4,Ve.fov=va,Ve.updateProjectionMatrix(),Ls*=Math.pow(.04,i),Ls<.001&&(Ls=0),Qu=c-Ls}const Xh=[{leaf:1332520,glow:2280567,core:4521898},{leaf:931880,glow:3390378,core:5636044},{leaf:1721376,glow:4508757,core:7864200},{leaf:1060912,glow:2267562,core:4513262},{leaf:1583172,glow:3377356,core:5618687}];function $v(i,t){const e=new ne,n=6+y()*10,s=.2+y()*.3,o=new Q({color:B.bark,roughness:.9,emissive:530960,emissiveIntensity:.04}),r=new L(new wt(s*.4,s,n,6),o);r.position.y=n/2,r.castShadow=!0,e.add(r);const a=new Q({color:2263125,emissive:B.leafGlow,emissiveIntensity:.5,transparent:!0,opacity:.25}),c=2+Math.floor(y()*3);for(let M=0;M<c;M++){const v=M/c*6.28+y()*.5,_=n*.4+y()*n*.4,b=new L(new wt(.008,.015,_,3),a);b.position.set(Math.cos(v)*s*.74,n*.15+_/2,Math.sin(v)*s*.74),e.add(b)}const l=new Q({color:1707782,roughness:.92,emissive:661512,emissiveIntensity:.03}),h=3+Math.floor(y()*3);for(let M=0;M<h;M++){const v=M/h*6.28+y()*.5,_=.8+y()*1.5,b=new L(new wt(.02,s*.3,_,4),l);b.position.set(Math.cos(v)*s*.5,.08,Math.sin(v)*s*.5),b.rotation.z=v<3.14?1.2+y()*.3:-(1.2+y()*.3),b.rotation.y=v,e.add(b)}const u=3+Math.floor(y()*4);for(let M=0;M<u;M++){const v=n*(.4+y()*.5),_=y()*Math.PI*2,b=1.5+y()*3,E=new L(new wt(.02,.06,b,4),o);E.position.set(Math.cos(_)*.3,v,Math.sin(_)*.3),E.rotation.z=(y()-.5)*1.2,E.rotation.y=_,E.castShadow=!0,e.add(E);const T=Xh[Math.floor(y()*Xh.length)],R=Math.cos(_)*(b*.5),S=v+y()*1.5,w=Math.sin(_)*(b*.5),P=1+y()*2,U=new Q({color:T.core,emissive:T.core,emissiveIntensity:.7+y()*.5,transparent:!0,opacity:.55,roughness:.3}),N=new L(new Ai(P*.3,1),U);N.position.set(R,S,w),e.add(N);const G=new Q({color:T.leaf,emissive:T.glow,emissiveIntensity:.25+y()*.25,transparent:!0,opacity:.55,roughness:.7}),W=new L(new Ai(P*.75,1),G);W.position.set(R+(y()-.5)*.4,S+(y()-.5)*.4,w+(y()-.5)*.4),W.scale.set(1+y()*.4,.65+y()*.5,1+y()*.4),W.castShadow=!0,W.receiveShadow=!0,e.add(W);const K=new Q({color:T.glow,emissive:T.glow,emissiveIntensity:.12,transparent:!0,opacity:.08,depthWrite:!1}),j=new L(new Ai(P*1.2,1),K);if(j.position.set(R,S,w),e.add(j),y()<.35){const Y=new Q({color:2773040,emissive:1135904,emissiveIntensity:.08,transparent:!0,opacity:.5}),at=.3+y()*.8,ut=new L(new wt(.008,.003,at,3),Y),Tt=y()*b*.4;ut.position.set(Math.cos(_)*(.3+Tt),v-at/2-y()*.3,Math.sin(_)*(.3+Tt)),e.add(ut)}}const f=new Q({color:5911840,emissive:3349e3,emissiveIntensity:.06,roughness:.8}),p=Math.floor(y()*3);for(let M=0;M<p;M++){const v=1+y()*n*.4,_=y()*6.28,b=new L(new q(.08+y()*.08,5,3),f);b.scale.set(1.5,.3,1),b.position.set(Math.cos(_)*s*.8,v,Math.sin(_)*s*.8),b.rotation.y=-_,e.add(b)}const g=new Q({color:B.leaf,emissive:B.leafGlow,emissiveIntensity:.06,transparent:!0,opacity:.07,depthWrite:!1}),x=new L(new q(3+y()*2,8,6),g);x.position.y=n*.65,e.add(x);const m=new Q({color:1183752,roughness:.95}),d=new L(new q(s*2.5,6,3),m);return d.scale.set(1,.12,1),d.position.y=.02,e.add(d),e.position.set(i,0,t),xt.add(e),e}function Qv(i,t){const e=new ne,n=.4+y()*1.2,s=y()*6.28,o=.8+y()*1.5,r=.5+y()*.8,a=new L(je.mushStem,new Q({color:B.mushStem,roughness:.7,emissive:B.mushGlow,emissiveIntensity:.1}));a.position.y=.3,e.add(a);const c=new Q({color:B.mushStem,emissive:B.mushGlow,emissiveIntensity:.15,roughness:.6}),l=new L(new Se(.09,.012,4,8),c);l.position.y=.42,l.rotation.x=Math.PI/2,e.add(l);const h=new Q({color:B.mushCap,emissive:B.mushGlow,emissiveIntensity:r,roughness:.3,transparent:!0,opacity:.9}),u=new L(je.mushCap,h);u.scale.set(1,.5,1),u.position.y=.55,u.castShadow=!0,u.receiveShadow=!0,e.add(u);const f=new Q({color:6693546,emissive:B.mushGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,side:Bt});for(let w=0;w<8;w++){const P=w/8*6.28,U=new L(new we(.35,.08),f);U.position.set(Math.cos(P)*.15,.48,Math.sin(P)*.15),U.rotation.y=-P,U.rotation.x=.1,e.add(U)}for(let w=0;w<4;w++){const P=new Z({color:16777215,transparent:!0,opacity:.9}),U=new L(je.mushDot,P),N=y()*6.28,G=.15+y()*.25;U.position.set(Math.cos(N)*G,.6+y()*.1,Math.sin(N)*G),e.add(U)}const p=new Q({color:15663103,emissive:11197951,emissiveIntensity:.2,transparent:!0,opacity:.6,roughness:0,metalness:.5}),g=2+Math.floor(y()*2);for(let w=0;w<g;w++){const P=new L(new q(.015+y()*.015,4,3),p),U=y()*6.28,N=.1+y()*.2;P.position.set(Math.cos(U)*N,.63+y()*.08,Math.sin(U)*N),e.add(P)}const x=new Q({color:4465322,emissive:B.mushGlow,emissiveIntensity:.15,transparent:!0,opacity:.35});for(let w=0;w<4;w++){const P=y()*6.28,U=.15+y()*.25,N=new L(new wt(.004,.002,U,3),x);N.position.set(Math.cos(P)*.12,.01,Math.sin(P)*.12),N.rotation.z=1.3*(P<3.14?1:-1),N.rotation.y=P,e.add(N)}const m=new Q({color:B.mushCap,emissive:B.mushGlow,emissiveIntensity:r*.6,transparent:!0,opacity:.4}),d=new L(new Se(.38,.01,4,12),m);d.position.y=.49,d.rotation.x=Math.PI/2,e.add(d);const M=new Q({color:B.mushStem,emissive:B.mushGlow,emissiveIntensity:.08,roughness:.7}),v=new L(new q(.08,5,3),M);v.scale.set(1,.5,1),v.position.y=.04,e.add(v);const _=new Q({color:1708040,roughness:.95});for(let w=0;w<3;w++){const P=y()*6.28,U=.1+y()*.12,N=new L(new q(.008+y()*.008,3,3),_);N.position.set(Math.cos(P)*U,.005,Math.sin(P)*U),e.add(N)}const b=new Z({color:B.mushGlow,transparent:!0,opacity:.2});for(let w=0;w<4;w++){const P=new L(new q(.006,3,3),b);P.position.set((y()-.5)*.2,.35+y()*.1,(y()-.5)*.2),e.add(P)}const E=new Q({color:11167453,emissive:B.mushGlow,emissiveIntensity:r*.3,roughness:.5}),T=3+Math.floor(y()*3);for(let w=0;w<T;w++){const P=y()*6.28,U=y()*.25,N=new L(new q(.015+y()*.015,3,3),E);N.position.set(Math.cos(P)*U,.58+y()*.06,Math.sin(P)*U),e.add(N)}const R=new Q({color:657416,transparent:!0,opacity:.2,roughness:.95,side:Bt}),S=new L(new Ie(.18,8),R);return S.rotation.x=-Math.PI/2,S.position.y=.005,e.add(S),e.scale.setScalar(n),e.position.set(i,0,t),xt.add(e),{group:e,capMat:h,phase:s,speed:o,base:r,x:i,z:t}}function tx(i,t){const e=new ne,n=y()*6.28,s=new Q({color:B.crystal,emissive:B.crystalCore,emissiveIntensity:1.5,transparent:!0,opacity:.7,roughness:.1,metalness:.5}),o=new L(je.crystal,s);o.position.y=.9,o.castShadow=!0,e.add(o);for(let v=0;v<3;v++){const _=new L(je.crystalSm,s),b=v/3*6.28+y()*.5;_.position.set(Math.cos(b)*.4,.45,Math.sin(b)*.4),_.rotation.z=(y()-.5)*.8,_.castShadow=!0,e.add(_)}const r=new Q({color:1710626,roughness:.9,metalness:.1}),a=3+Math.floor(y()*3);for(let v=0;v<a;v++){const _=y()*6.28,b=.2+y()*.5,E=.08+y()*.12,T=new L(new q(E,4,3),r);T.scale.set(1+y()*.5,.5+y()*.4,1+y()*.5),T.position.set(Math.cos(_)*b,E*.3,Math.sin(_)*b),T.rotation.set(y(),y(),y()),e.add(T)}const c=new Z({color:B.crystalCore,transparent:!0,opacity:.5});for(let v=0;v<3;v++){const _=.4+y()*.8,b=new L(new wt(.008,.008,_,3),c);b.position.set((y()-.5)*.15,.5+y()*.7,(y()-.5)*.15),b.rotation.set((y()-.5)*.8,(y()-.5)*.5,(y()-.5)*.8),e.add(b)}const l=new Z({color:11206638,transparent:!0,opacity:.6});for(let v=0;v<5;v++){const _=new L(new q(.012,3,3),l);_.position.set((y()-.5)*1,.3+y()*1.5,(y()-.5)*1),e.add(_)}const h=new Q({color:B.crystal,emissive:B.crystalCore,emissiveIntensity:.8,transparent:!0,opacity:.5});for(let v=0;v<4;v++){const _=y()*6.28,b=.3+y()*.3,E=new L(new wt(0,.015,.12+y()*.1,3),h);E.position.set(Math.cos(_)*b,.06+y()*.1,Math.sin(_)*b),E.rotation.z=(y()-.5)*.6,e.add(E)}const u=new Q({color:3364198,emissive:1122867,emissiveIntensity:.05,roughness:.9,side:Bt});for(let v=0;v<2;v++){const _=y()*6.28,b=.2+y()*.3,E=new L(new Ie(.04+y()*.03,5),u);E.rotation.x=-Math.PI/2+y()*.4,E.position.set(Math.cos(_)*b,.05,Math.sin(_)*b),e.add(E)}const f=new Z({color:B.crystalCore,transparent:!0,opacity:.2});for(let v=0;v<2;v++){const _=new L(new wt(.003,.003,.6+y()*.4,3),f);_.position.set((y()-.5)*.3,.7+y()*.5,(y()-.5)*.3),_.rotation.set((y()-.5)*1,y(),(y()-.5)*1),e.add(_)}const p=new Q({color:1135940,emissive:1127202,emissiveIntensity:.3,transparent:!0,opacity:.25});for(let v=0;v<4;v++){const _=new L(new q(.02+y()*.02,3,3),p);_.position.set((y()-.5)*.15,.4+y()*.6,(y()-.5)*.15),e.add(_)}const g=new Z({color:11206638,transparent:!0,opacity:.06}),x=new L(new Se(.35,.02,4,10),g);x.position.y=.6,x.rotation.x=Math.PI/2+y()*.3,e.add(x);const m=new Z({color:B.crystal,transparent:!0,opacity:.06,side:Bt}),d=new L(new Ie(.8,8),m);d.rotation.x=-Math.PI/2,d.position.y=.01,e.add(d),e.position.set(i,0,t),xt.add(e);const M=new Ui(B.crystal,.5,8);return M.position.set(i,1.2,t),xt.add(M),{group:e,mat:s,phase:n,x:i,z:t,light:M}}function ex(i,t,e,n){const s=new Ae,o=[],r=[],a=n||20,c=new _t(663568),l=new _t(1388056),h=new _t(2777141),u=new _t(4517461),f=new _t(7864268),p=new _t(14548838),g=new _t;for(let v=0;v<a;v++){const _=y()*6.28,b=y()*e,E=Math.cos(_)*b,T=Math.sin(_)*b,R=.25+y()*.65,S=.03+y()*.05,w=(y()-.5)*.2,P=(y()-.5)*.2,U=(y()-.5)*.12,N=y()<.5?c:l,G=y(),W=G<.4?u:G<.7?f:p,K=R*.35,j=R*.7,Y=w*.3,at=w*.7,ut=P*.3,Tt=P*.7;o.push(E-S,.01,T),o.push(E+S,.01,T),o.push(E+Y-S*.9,K,T+ut),r.push(N.r,N.g,N.b,N.r,N.g,N.b),g.copy(N).lerp(h,.4),r.push(g.r,g.g,g.b),o.push(E+S,.01,T),o.push(E+Y+S*.9,K,T+ut),o.push(E+Y-S*.9,K,T+ut),r.push(N.r,N.g,N.b),g.copy(N).lerp(h,.4),r.push(g.r,g.g,g.b,g.r,g.g,g.b);const kt=S*.65;o.push(E+Y-S*.9,K,T+ut),o.push(E+Y+S*.9,K,T+ut),o.push(E+at-kt,j,T+Tt+U),g.copy(N).lerp(h,.4),r.push(g.r,g.g,g.b,g.r,g.g,g.b),g.copy(h).lerp(W,.3),r.push(g.r,g.g,g.b),o.push(E+Y+S*.9,K,T+ut),o.push(E+at+kt,j,T+Tt+U),o.push(E+at-kt,j,T+Tt+U),g.copy(N).lerp(h,.4),r.push(g.r,g.g,g.b),g.copy(h).lerp(W,.3),r.push(g.r,g.g,g.b,g.r,g.g,g.b),o.push(E+at-kt,j,T+Tt+U),o.push(E+at+kt,j,T+Tt+U),o.push(E+w+U*2,R,T+P+U*1.5),g.copy(h).lerp(W,.3),r.push(g.r,g.g,g.b,g.r,g.g,g.b),r.push(W.r,W.g,W.b)}const x=new _t(1725736),m=Math.floor(a*.3);for(let v=0;v<m;v++){const _=y()*6.28,b=y()*e*.9,E=Math.cos(_)*b,T=Math.sin(_)*b,R=.02+y()*.03;o.push(E-R,.01,T),o.push(E+R,.01,T),o.push(E,.03+y()*.02,T+R),r.push(x.r,x.g,x.b),r.push(x.r,x.g,x.b);const S=new _t(3385941);r.push(S.r,S.g,S.b)}s.setAttribute("position",new qt(o,3)),s.setAttribute("color",new qt(r,3)),s.computeVertexNormals();const d=new Q({vertexColors:!0,roughness:.7,side:Bt,emissive:4521830,emissiveIntensity:.08}),M=new L(s,d);return M.position.set(i,0,t),xt.add(M),{mesh:M,geo:s,cx:i,cz:t}}function nx(i,t){const e=new ne,n=new Q({color:B.fern,emissive:B.fernGlow,emissiveIntensity:.08,roughness:.7,side:Bt}),s=3+Math.floor(y()*2),o=.5+y()*.7,r=new Q({color:1708552,roughness:.95}),a=new L(new q(.06,5,3),r);a.scale.set(1.5,.5,1.5),a.position.y=.02,e.add(a);for(let d=0;d<3;d++){const M=y()*6.28,v=new L(new wt(.003,.002,.08,3),r);v.position.set(Math.cos(M)*.06,.01,Math.sin(M)*.06),v.rotation.z=(M<3.14?1:-1)*1.2,v.rotation.y=M,e.add(v)}for(let d=0;d<s;d++){const M=d/s*6.28+y()*.3,v=new L(new wt(.004,.006,.55,3),new Q({color:1721632,roughness:.8}));v.position.set(Math.cos(M)*.15,.25,Math.sin(M)*.15),v.rotation.y=-M,v.rotation.x=-.6-y()*.4,e.add(v);const _=new L(new we(.12,.6,1,3),n);_.position.set(Math.cos(M)*.15,.25,Math.sin(M)*.15),_.rotation.y=-M,_.rotation.x=-.6-y()*.4,e.add(_);for(let E=0;E<6;E++){const T=new L(new we(.07,.06,1,1),n),R=.06+E*.08,S=E%2===0?1:-1;T.position.set(Math.cos(M)*(.15+.06),R,Math.sin(M)*(.15+.06*S)),T.rotation.y=-M,T.rotation.x=-.8,T.rotation.z=S*.5,e.add(T)}const b=new Q({color:8939042,emissive:4469521,emissiveIntensity:.1});for(let E=0;E<3;E++){const T=new L(new q(.008,3,3),b),R=.12+E*.12;T.position.set(Math.cos(M)*(.15+.02),R-.01,Math.sin(M)*(.15+.02)),e.add(T)}}const c=new Q({color:B.fernGlow,emissive:B.fernGlow,emissiveIntensity:.3}),l=new L(new q(.04,4,3),c);l.position.y=.35,e.add(l);const h=new L(new wt(.006,.003,.06,3),c);h.position.set(.02,.37,0),h.rotation.z=-.8,e.add(h);const u=new Q({color:15663103,emissive:8960989,emissiveIntensity:.1,transparent:!0,opacity:.5,roughness:0,metalness:.5});for(let d=0;d<3;d++){const M=y()*6.28,v=y()*.2,_=new L(new q(.006+y()*.005,3,3),u);_.position.set(Math.cos(M)*v,.12+y()*.2,Math.sin(M)*v),e.add(_)}const f=new Q({color:3811856,roughness:.9,side:Bt,transparent:!0,opacity:.6}),p=new L(new we(.1,.4,1,2),f),g=y()*6.28;p.position.set(Math.cos(g)*.12,.05,Math.sin(g)*.12),p.rotation.x=-1.3,p.rotation.y=g,e.add(p);const x=new Z({color:2768928,transparent:!0,opacity:.3});for(let d=0;d<4;d++){const M=new L(new wt(.001,.001,.015,3),x);M.position.set((y()-.5)*.08,.08+y()*.15,(y()-.5)*.08),M.rotation.z=(y()-.5)*1.5,e.add(M)}const m=new Q({color:1708552,roughness:.95});for(let d=0;d<3;d++){const M=new L(new q(.006,3,3),m);M.position.set((y()-.5)*.1,.005,(y()-.5)*.1),e.add(M)}return e.scale.setScalar(o),e.position.set(i,0,t),xt.add(e),{group:e,phase:y()*6.28}}function ix(i,t){const e=new ne,n=.25+y()*.4,s=new Q({color:B.flowerStem,roughness:.8}),o=new L(new wt(.01,.015,n,4),s);o.position.y=n/2,e.add(o);for(let R=0;R<2;R++){const S=new L(new In(.004,.012,3),s);S.position.set(.012,n*.25+R*n*.25,0),S.rotation.z=-1.2,e.add(S)}const r=new Q({color:B.fern,roughness:.7,side:Bt}),a=new L(new we(.06,.04),r);a.position.set(.03,n*.3,0),a.rotation.z=-.5,e.add(a);const c=new L(new we(.05,.035),r);c.position.set(-.025,n*.5,.01),c.rotation.z=.6,e.add(c);const l=new Q({color:1728560,roughness:.7,side:Bt});for(let R=0;R<5;R++){const S=R/5*6.28+.3,w=new L(new we(.025,.02),l);w.position.set(Math.cos(S)*.025,n-.005,Math.sin(S)*.025),w.rotation.x=-1.2,w.rotation.y=-S,e.add(w)}const h=new Q({color:B.flower,emissive:B.flowerGlow,emissiveIntensity:.4+y()*.4,transparent:!0,opacity:.85,side:Bt});for(let R=0;R<6;R++){const S=R/6*6.28,w=new L(new we(.05,.04),h);w.position.set(Math.cos(S)*.03,n+.01,Math.sin(S)*.03),w.rotation.x=-.8,w.rotation.y=-S,e.add(w)}const u=new Q({color:16777215,emissive:B.flowerGlow,emissiveIntensity:1.2}),f=new L(new q(.02,4,3),u);f.position.y=n+.02,e.add(f);const p=new Z({color:16777130,transparent:!0,opacity:.7}),g=new Z({color:16772676});for(let R=0;R<3;R++){const S=R/3*6.28+.5,w=new L(new wt(.002,.002,.025,3),p);w.position.set(Math.cos(S)*.012,n+.03,Math.sin(S)*.012),e.add(w);const P=new L(new q(.005,3,3),g);P.position.set(Math.cos(S)*.012,n+.045,Math.sin(S)*.012),e.add(P)}const x=new Z({color:16777164,transparent:!0,opacity:.3});for(let R=0;R<2;R++){const S=new L(new q(.006,3,3),x);S.position.set((y()-.5)*.04,n+.06+y()*.04,(y()-.5)*.04),e.add(S)}const m=new Q({color:16772778,emissive:16768324,emissiveIntensity:.2,transparent:!0,opacity:.5,roughness:0,metalness:.4}),d=new L(new q(.006,3,3),m);d.position.set(.005,n+.005,.005),e.add(d);const M=new Z({color:15662984}),v=new L(new wt(.002,.002,.03,3),M);v.position.y=n+.035,e.add(v);const _=new L(new q(.005,3,3),M);_.position.y=n+.055,e.add(_);const b=new Q({color:1725728,roughness:.7}),E=new L(new wt(.015,.02,.02,5),b);E.position.y=n-.01,e.add(E);const T=new Z({color:16777215,transparent:!0,opacity:.35});for(let R=0;R<4;R++){const S=R/4*6.28+.3,w=new L(new q(.004,3,3),T);w.position.set(Math.cos(S)*.045,n+.005,Math.sin(S)*.045),e.add(w)}return e.position.set(i,0,t),xt.add(e),{group:e,petalMat:h,phase:y()*6.28,baseH:n}}function sx(i,t){const e=new ne,n=new Q({color:B.reed,emissive:B.reedTip,emissiveIntensity:.05,roughness:.7}),s=new Q({color:B.reedTip,emissive:B.reedTip,emissiveIntensity:.15}),o=new Q({color:1709328,roughness:.95}),r=new L(new q(.08,5,3),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=3+Math.floor(y()*4),c=new Q({color:B.reed,roughness:.7,side:Bt});for(let p=0;p<a;p++){const g=.6+y()*1,x=(y()-.5)*.2,m=(y()-.5)*.2,d=new L(new wt(.008,.015,g,4),n);d.position.set(x,g/2,m),e.add(d);const M=2+Math.floor(y()*2),v=new Q({color:2771488,roughness:.7});for(let E=0;E<M;E++){const T=g*.2+E*g*.25,R=new L(new Se(.012,.004,4,6),v);R.position.set(x,T,m),R.rotation.x=Math.PI/2,e.add(R)}if(y()<.7){const E=.1+y()*.15,T=y()*6.28,R=new L(new we(.02,E),c);R.position.set(x+Math.cos(T)*.02,g*.4,m+Math.sin(T)*.02),R.rotation.y=-T,R.rotation.x=-.5-y()*.4,e.add(R)}const _=new L(new q(.025,4,3),s);_.scale.set(.8,1.5,.8),_.position.set(x,g+.02,m),e.add(_);const b=new Z({color:B.reedTip,transparent:!0,opacity:.4});for(let E=0;E<3;E++){const T=E/3*6.28+y()*.5,R=new L(new wt(.002,.001,.04,3),b);R.position.set(x+Math.cos(T)*.015,g+.05,m+Math.sin(T)*.015),R.rotation.z=(y()-.5)*.4,e.add(R)}}e.position.set(i,0,t),xt.add(e);const l=new Q({color:4864536,roughness:.9,side:Bt,transparent:!0,opacity:.5});for(let p=0;p<2;p++){y()*6.28;const g=(y()-.5)*.15,x=new L(new we(.025,.02),l);x.position.set(g,.2+p*.25,(y()-.5)*.1),x.rotation.set(y()*.5,y(),y()*.5),e.add(x)}const h=new Z({color:15654348,transparent:!0,opacity:.25});for(let p=0;p<3;p++){const g=new L(new q(.005,3,3),h);g.position.set((y()-.5)*.15,.8+y()*.6,(y()-.5)*.15),e.add(g)}const u=new Q({color:2241312,roughness:.9,transparent:!0,opacity:.2}),f=new L(new Se(.1,.008,4,8),u);return f.rotation.x=Math.PI/2,f.position.y=.03,e.add(f),{group:e,phase:y()*6.28,swayAmp:.03+y()*.04}}const ss=[];function ox(i){for(let t=0;t<i;t++){const e=new Z({color:B.dandSeed,transparent:!0,opacity:0}),n=new L(je.dandSeed,e);n.visible=!1,xt.add(n),ss.push({mesh:n,mat:e,vel:new D,life:0,max:0,active:!1,drift:0})}}function rx(i,t,e){let n=null;for(let o=0;o<ss.length;o++)if(!ss[o].active){n=ss[o];break}if(!n)return;n.mesh.position.set(i+(Math.random()-.5)*.1,t,e+(Math.random()-.5)*.1),n.mesh.visible=!0,n.mat.opacity=.8;const s=Math.random()*6.28;n.vel.set(Math.cos(s)*.5+Math.random()*.3,.6+Math.random()*.8,Math.sin(s)*.5),n.life=4+Math.random()*5,n.max=n.life,n.active=!0,n.drift=Math.random()*6.28}function ax(i,t){for(let e=0;e<ss.length;e++){const n=ss[e];if(!n.active)continue;if(n.life-=i,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}n.drift+=(Math.random()-.5)*1.5*i,n.vel.x+=Math.sin(n.drift)*.3*i,n.vel.z+=Math.cos(n.drift)*.2*i,n.vel.y+=(.15-n.vel.y)*i*.5,n.vel.multiplyScalar(.998),n.mesh.position.x+=n.vel.x*i,n.mesh.position.y+=n.vel.y*i,n.mesh.position.z+=n.vel.z*i;const s=n.life/n.max;n.mat.opacity=s*.7*(.6+Math.sin(t*2+e)*.4),n.mesh.scale.setScalar(.8+Math.sin(t*3+e*.5)*.3)}}function cx(i,t){const e=new ne,n=.35+y()*.45,s=new Q({color:2777128,roughness:.7,side:Bt}),o=3+Math.floor(y()*2);for(let v=0;v<o;v++){const _=v/o*6.28+y()*.3,b=new L(new we(.08,.035),s);b.position.set(Math.cos(_)*.05,.02,Math.sin(_)*.05),b.rotation.x=-1.4,b.rotation.y=-_,e.add(b)}const r=new Q({color:B.dandStem,roughness:.8}),a=new L(new wt(.008,.012,n,4),r);a.position.y=n/2,e.add(a);const c=new Z({color:14540236,transparent:!0,opacity:.3});for(let v=0;v<4;v++){const _=n*.2+v*n*.18,b=new L(new wt(.002,.001,.02,3),c);b.position.set(.01,_,0),b.rotation.z=-.8,e.add(b)}const l=new Q({color:B.fern,roughness:.7,side:Bt}),h=new L(new we(.07,.03),l);h.position.set(.03,n*.15,0),h.rotation.z=-.4,e.add(h);const u=new Q({color:B.dandHead,emissive:B.dandSeedGlow,emissiveIntensity:.2,transparent:!0,opacity:.85}),f=new L(new q(.07,6,5),u);f.position.y=n+.05,e.add(f);const p=new Q({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.5,roughness:0,metalness:.5}),g=new L(new q(.012,4,3),p);g.position.set(.04,n+.07,.03),e.add(g);const x=new Z({color:B.dandSeed,transparent:!0,opacity:.7});for(let v=0;v<8;v++){const _=v/8*6.28+y()*.2,b=new L(new In(.015,.05,3),x);b.position.set(Math.cos(_)*.06,n+.05+y()*.04,Math.sin(_)*.06),b.rotation.x=(y()-.5)*.6,b.rotation.z=(y()-.5)*.6,e.add(b);const E=new Z({color:16777215,transparent:!0,opacity:.3}),T=new L(new wt(.001,.001,.03,3),E);T.position.set(Math.cos(_)*.08,n+.08,Math.sin(_)*.08),T.rotation.set((y()-.5)*.5,0,(y()-.5)*.5),e.add(T);const R=new Z({color:15658717,transparent:!0,opacity:.15});for(let S=0;S<2;S++){const w=_+(S-.5)*.5,P=new L(new wt(8e-4,8e-4,.025,3),R);P.position.set(Math.cos(w)*.075,n+.09,Math.sin(w)*.075),P.rotation.set((y()-.5)*.8,0,(y()-.5)*.8),e.add(P)}}const m=new Q({color:3811856,roughness:.9});for(let v=0;v<4;v++){const _=v/4*6.28+y()*.5,b=new L(new q(.005,3,3),m);b.scale.set(.6,1.5,.6),b.position.set(Math.cos(_)*.04,n+.04,Math.sin(_)*.04),e.add(b)}const d=new Z({color:1716240,transparent:!0,opacity:.15});for(let v=0;v<3;v++){const _=v/3*6.28,b=new L(new wt(.001,.001,n*.7,3),d);b.position.set(Math.cos(_)*.01,n*.35,Math.sin(_)*.01),e.add(b)}const M=new Z({color:13426107,transparent:!0,opacity:.2});for(let v=0;v<5;v++){const _=n*.1+y()*n*.7,b=y()*6.28,E=new L(new wt(8e-4,8e-4,.012,3),M);E.position.set(Math.cos(b)*.012,_,Math.sin(b)*.012),E.rotation.z=b<3.14?-.8:.8,E.rotation.y=b,e.add(E)}return e.position.set(i,0,t),xt.add(e),{group:e,headMat:u,x:i,z:t,h:n,dispersed:!1,phase:y()*6.28,seedCount:8,regrowTimer:0}}function lx(i,t,e,n){for(let s=0;s<i.length;s++){const o=i[s];if(o.dispersed){if(o.regrowTimer-=t,o.regrowTimer<=0){o.dispersed=!1;for(let r=2;r<o.group.children.length;r++)o.group.children[r].visible=!0}o.group.rotation.z=Math.sin(e*.9+o.phase)*.02}else{const r=o.x-n.x,a=o.z-n.z;if(r*r+a*a<1.2){o.dispersed=!0;for(let c=0;c<8;c++)rx(o.x,o.h+.05,o.z);for(let c=2;c<o.group.children.length;c++)o.group.children[c].visible=!1;o.regrowTimer=15+Math.random()*10}else o.group.rotation.z=Math.sin(e*.9+o.phase)*.04,o.headMat.emissiveIntensity=.15+Math.sin(e*1.2+o.phase)*.1}}}function hx(i,t,e){const n=new ne,s=new Q({color:B.jellyBell,emissive:B.jellyGlow,emissiveIntensity:.8,transparent:!0,opacity:.5,roughness:.2,metalness:.1,side:Bt}),o=new L(new q(.5,8,6,0,6.28,0,Math.PI/2),s);o.scale.set(1,.6,1),o.position.y=0,n.add(o);const r=new Q({color:B.jellyBell,emissive:B.jellyGlow,emissiveIntensity:1,transparent:!0,opacity:.6}),a=new L(new Se(.48,.025,5,12),r);a.rotation.x=Math.PI/2,a.position.y=-.02,n.add(a);const c=new L(new q(.2,6,4),new Z({color:B.jellyGlow,transparent:!0,opacity:.7}));c.position.y=-.05,n.add(c);const l=new Z({color:12312063,transparent:!0,opacity:.3});for(let M=-1;M<=1;M+=2){const v=new L(new q(.06,4,3),l);v.scale.set(.6,1.5,.6),v.position.set(M*.08,-.03,0),n.add(v)}const h=new Z({color:15663103,transparent:!0,opacity:.7});for(let M=0;M<5;M++){const v=y()*6.28,_=y()*.8,b=new L(new q(.02,3,3),h);b.position.set(Math.cos(v)*_*.35,.1-_*.15,Math.sin(v)*_*.35),n.add(b)}const u=new Q({color:B.jellyTent,emissive:B.jellyGlow,emissiveIntensity:.4,transparent:!0,opacity:.4}),f=new Z({color:B.jellyGlow,transparent:!0,opacity:.6});for(let M=0;M<6;M++){const v=M/6*6.28,_=.4+y()*.6,b=new L(new wt(.015,.008,_,3),u);b.position.set(Math.cos(v)*.25,-_/2-.05,Math.sin(v)*.25),n.add(b);const E=new L(new q(.012,3,3),f);E.position.set(Math.cos(v)*.25,-_-.06,Math.sin(v)*.25),n.add(E)}const p=new Z({color:B.jellyGlow,transparent:!0,opacity:.12});for(let M=0;M<8;M++){const v=M/8*6.28,_=new L(new wt(.002,.002,.4,3),p);_.position.set(Math.cos(v)*.2,.05,Math.sin(v)*.2),_.rotation.z=Math.PI/2-.3,_.rotation.y=-v,n.add(_)}const g=new Q({color:B.jellyBell,emissive:B.jellyGlow,emissiveIntensity:.6,transparent:!0,opacity:.4});for(let M=0;M<10;M++){const v=M/10*6.28,_=new L(new q(.02,3,3),g);_.scale.set(1,.5,.8),_.position.set(Math.cos(v)*.46,-.04,Math.sin(v)*.46),n.add(_)}const x=new Q({color:B.jellyTent,emissive:B.jellyGlow,emissiveIntensity:.5,transparent:!0,opacity:.35}),m=new L(new wt(.02,.01,.35,4),x);m.position.y=-.2,n.add(m);const d=new Z({color:14548991,transparent:!0,opacity:.4});for(let M=0;M<3;M++){const v=M/3*6.28,_=new L(new q(.008,3,3),d);_.position.set(Math.cos(v)*.25,-.55-y()*.3,Math.sin(v)*.25),n.add(_)}return n.position.set(i,t,e),xt.add(n),{group:n,bellMat:s,phase:y()*6.28,driftAng:y()*6.28,homeX:i,homeZ:e,floatY:t,wobble:.5+y()*.5}}function ux(i,t){const e=new ne,n=new Q({color:B.puffBody,emissive:B.puffGlow,emissiveIntensity:.3,roughness:.8}),s=new L(new q(.3,8,6),n);s.position.y=.35,e.add(s);const o=new Q({color:16773344,emissive:B.puffGlow,emissiveIntensity:.15,roughness:.9}),r=new L(new q(.18,6,4),o);r.scale.set(.7,.9,.3),r.position.set(0,.32,.2),e.add(r);const a=new L(new q(.22,7,5),n);a.position.y=.65,e.add(a);for(let v=-1;v<=1;v+=2){const _=new L(new In(.06,.15,4),n);_.position.set(v*.13,.85,0),_.rotation.z=v*.3,e.add(_);const b=new L(new In(.03,.08,4),new Q({color:B.puffCheek,emissive:B.puffCheek,emissiveIntensity:.2}));b.position.set(v*.13,.84,.01),b.rotation.z=v*.3,e.add(b)}const c=new Z({color:B.puffEye});for(let v=-1;v<=1;v+=2){const _=new L(new q(.035,4,4),c);_.position.set(v*.09,.68,.18),e.add(_);const b=new Z({color:16777215}),E=new L(new q(.012,3,3),b);E.position.set(v*.09+v*.015,.695,.2),e.add(E)}const l=new Z({color:4469555}),h=new L(new q(.015,3,3),l);h.position.set(0,.63,.22),e.add(h);const u=new Q({color:B.puffCheek,emissive:B.puffCheek,emissiveIntensity:.3});for(let v=-1;v<=1;v+=2){const _=new L(new q(.04,4,3),u);_.position.set(v*.15,.61,.15),e.add(_)}const f=new Z({color:15654348,transparent:!0,opacity:.5});for(let v=-1;v<=1;v+=2)for(let _=0;_<2;_++){const b=new L(new wt(.002,.002,.06,3),f);b.position.set(v*.12,.62-_*.03,.2),b.rotation.z=v*.7+_*v*.2,b.rotation.x=-.1,e.add(b)}for(let v=-1;v<=1;v+=2){const _=new L(new q(.07,4,3),n);_.position.set(v*.12,.07,.05),_.scale.set(1,.5,1.3),e.add(_);const b=new Q({color:16755370,emissive:16746632,emissiveIntensity:.1});for(let E=0;E<3;E++){const T=E/3*6.28,R=new L(new q(.012,3,3),b);R.position.set(v*.12+Math.cos(T)*.03,.03,.05+Math.sin(T)*.03),e.add(R)}}const p=new Q({color:16777215,emissive:B.puffGlow,emissiveIntensity:.4,roughness:.9}),g=new L(new q(.06,5,4),p);g.position.set(0,.38,-.28),e.add(g);const x=new Q({color:B.puffBody,emissive:B.puffGlow,emissiveIntensity:.2,roughness:1});for(let v=0;v<6;v++){const _=y()*6.28,b=y()*1.2,E=new L(new q(.01,3,3),x);E.position.set(Math.cos(_)*.28,.25+b*.2,Math.sin(_)*.28),e.add(E)}const m=new Z({color:B.puffBody});for(let v=-1;v<=1;v+=2){const _=new L(new wt(.003,.003,.04,3),m);_.position.set(v*.09,.72,.17),_.rotation.z=v*.3,e.add(_)}const d=new Z({color:5583684,transparent:!0,opacity:.5}),M=new L(new wt(.002,.002,.03,3),d);return M.position.set(0,.59,.22),M.rotation.z=Math.PI/2,e.add(M),e.position.set(i,0,t),xt.add(e),{group:e,phase:y()*6.28,wanderAng:y()*6.28,speed:.6+y()*.8,hopTimer:0,hopPhase:y()*6.28,homeX:i,homeZ:t,state:"idle",idleTimer:y()*3}}function fx(i,t){const e=new ne,n=new Q({color:B.deerBody,emissive:B.deerGlow,emissiveIntensity:.5,transparent:!0,opacity:.7,roughness:.3}),s=new L(new q(.4,7,5),n);s.scale.set(1,.8,1.5),s.position.y=.9,e.add(s);const o=new Q({color:13431039,emissive:B.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.5}),r=new L(new q(.15,5,4),o);r.scale.set(.8,.6,.5),r.position.set(0,.78,.25),e.add(r);const a=new ne;a.position.set(0,1.15,.3);const c=new L(new wt(.08,.12,.4,5),n);c.position.set(0,.1,.08),c.rotation.x=-.4,a.add(c);const l=new L(new q(.14,6,5),n);l.position.set(0,.22,.2),a.add(l);const h=new L(new q(.07,4,3),n);h.scale.set(1,.7,1.4),h.position.set(0,.17,.35),a.add(h);const u=new Z({color:2245717}),f=new L(new q(.02,3,3),u);f.position.set(0,.17,.43),a.add(f);const p=new Z({color:B.deerEye});for(let w=-1;w<=1;w+=2){const P=new L(new q(.025,4,3),p);P.position.set(w*.09,.25,.28),a.add(P);const U=new L(new q(.008,3,3),new Z({color:16777215}));U.position.set(w*.085,.26,.29),a.add(U);const N=new Z({color:B.deerBody,transparent:!0,opacity:.5}),G=new L(new wt(.002,.002,.03,3),N);G.position.set(w*.1,.27,.28),G.rotation.z=w*.6,a.add(G)}for(let w=-1;w<=1;w+=2){const P=new L(new In(.04,.14,4),n);P.position.set(w*.1,.37,.15),P.rotation.z=w*.4,a.add(P)}const g=new Q({color:B.deerAntler,emissive:B.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.8});for(let w=-1;w<=1;w+=2){const P=new L(new wt(.015,.02,.25,3),g);P.position.set(w*.08,.42,.12),P.rotation.z=w*.5,a.add(P);const U=new L(new wt(.01,.015,.15,3),g);U.position.set(w*.15,.55,.1),U.rotation.z=w*.8,a.add(U);const N=new L(new wt(.008,.012,.1,3),g);N.position.set(w*.11,.5,.16),N.rotation.z=w*.3,N.rotation.x=-.5,a.add(N);const G=new L(new q(.012,3,3),new Z({color:B.deerGlow,transparent:!0,opacity:.8}));G.position.set(w*.18,.61,.09),a.add(G)}const x=new Q({color:B.deerBody,emissive:B.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),m=new L(new wt(.01,.02,.1,3),x);m.position.set(0,.11,.28),m.rotation.x=.3,a.add(m);const d=new Z({color:1122850});for(let w=-1;w<=1;w+=2){const P=new L(new q(.006,3,3),d);P.position.set(w*.02,.16,.42),a.add(P)}e.add(a);const M=[{x:-.15,z:.3,label:"FL"},{x:.15,z:.3,label:"FR"},{x:-.15,z:-.3,label:"BL"},{x:.15,z:-.3,label:"BR"}],v=new Q({color:6715272,emissive:B.deerGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),_=[];for(let w=0;w<4;w++){const P=M[w],U=new ne;U.position.set(P.x,.65,P.z);const N=new L(new wt(.025,.035,.35,4),n);N.position.y=-.175,U.add(N);const G=new ne;G.position.set(0,-.35,0);const W=new L(new wt(.02,.03,.3,4),n);W.position.y=-.15,G.add(W);const K=new L(new wt(.04,.032,.04,4),v);K.position.y=-.3,G.add(K);const j=new Q({color:14544639,emissive:B.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),Y=new L(new q(.025,3,3),j);Y.scale.set(1.3,.5,1.3),Y.position.y=-.25,G.add(Y),U.add(G),e.add(U),_.push({upper:U,lower:G,isFront:w<2,side:P.x<0?-1:1})}const b=new ne;b.position.set(0,1.1,-.55);const E=new L(new In(.05,.15,4),new Q({color:16777215,emissive:B.deerGlow,emissiveIntensity:1,transparent:!0,opacity:.8}));b.add(E),e.add(b);const T=new Z({color:13434862,transparent:!0,opacity:.3});for(let w=0;w<4;w++){const P=new L(new q(.02,3,3),T);P.position.set((y()-.5)*.25,.8+y()*.3,(y()-.5)*.4),e.add(P)}const R=new Z({color:B.deerBody,transparent:!0,opacity:.15});for(let w=0;w<3;w++){const P=new L(new wt(.002,.002,.2,3),R);P.position.set(.3,.85-w*.06,0),P.rotation.z=Math.PI/2+.3,e.add(P)}const S=new Q({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.4,roughness:0,metalness:.5});for(let w=0;w<3;w++){const P=new L(new q(.008,3,3),S);P.position.set((y()-.5)*.3,.9+y()*.3,(y()-.5)*.35),e.add(P)}return e.position.set(i,0,t),xt.add(e),{group:e,mat:n,phase:y()*6.28,wanderAng:y()*6.28,speed:.6+y()*.4,walkTimer:0,legCycle:0,homeX:i,homeZ:t,state:"walk",pauseTimer:0,neckPivot:a,legPivots:_,tailPivot:b,fleeTimer:0,headLook:0,headBob:0}}function dx(i,t,e){const n=new ne,s=new Q({color:B.mothBody,emissive:B.mothGlow,emissiveIntensity:.3,roughness:.7}),o=new L(new wt(.04,.05,.3,5),s);o.rotation.x=Math.PI/2,n.add(o);const r=new Q({color:B.mothBody,emissive:B.mothGlow,emissiveIntensity:.5,roughness:.6});for(let m=0;m<3;m++){const d=new L(new Se(.045,.006,4,8),r);d.position.z=-.05+m*.06,d.rotation.x=0,n.add(d)}const a=new L(new q(.05,5,4),s);a.position.z=.18,n.add(a);const c=new Q({color:1122867,roughness:.2,metalness:.4});for(let m=-1;m<=1;m+=2){const d=new L(new q(.018,4,3),c);d.position.set(m*.03,.01,.21),n.add(d)}for(let m=-1;m<=1;m+=2){const d=new L(new wt(.005,.005,.15,3),s);d.position.set(m*.03,.03,.22),d.rotation.x=-.6,d.rotation.z=m*.4,n.add(d);const M=new Z({color:B.mothGlow,transparent:!0,opacity:.7}),v=new L(new q(.015,3,3),M);v.scale.set(2,.5,1),v.position.set(m*.05,.12,.28),n.add(v)}const l=new Q({color:B.mothWing,emissive:B.mothGlow,emissiveIntensity:.8,transparent:!0,opacity:.6,side:Bt,roughness:.4});n._wingPivots=[];for(let m=-1;m<=1;m+=2){const d=new ne;d.position.set(m*.04,0,.02);const M=new L(new q(.2,6,4),l);M.scale.set(1.8,.08,1.2),M.position.set(m*.18,0,.02),d.add(M);const v=new L(new q(.12,5,3),l);v.scale.set(1.5,.06,1),v.position.set(m*.12,0,-.1),d.add(v);const _=new Q({color:B.mothWing,emissive:B.mothGlow,emissiveIntensity:.6,transparent:!0,opacity:.45,side:Bt}),b=new L(new we(.03,.12),_);b.position.set(m*.1,0,-.18),b.rotation.y=m*.2,d.add(b);const E=new Z({color:B.mothSpot,transparent:!0,opacity:.9}),T=new L(new q(.03,4,3),E);T.position.set(m*.2,.02,.03),d.add(T);const R=new L(new q(.018,3,3),E);R.position.set(m*.1,.02,-.08),d.add(R);const S=new Z({color:B.mothGlow,transparent:!0,opacity:.25});for(let w=0;w<2;w++){const P=new L(new wt(.002,.002,.2,3),S);P.position.set(m*.15,.01,-.02+w*.06),P.rotation.z=Math.PI/2+m*(.15+w*.15),d.add(P)}n.add(d),n._wingPivots.push({pivot:d,side:m})}const h=new Z({color:B.mothGlow,transparent:!0,opacity:.25});for(let m=0;m<3;m++){const d=new L(new q(.008,3,3),h);d.position.set((y()-.5)*.04,0,-.15-m*.05),n.add(d)}const u=new Z({color:4473907,transparent:!0,opacity:.5}),f=new L(new Se(.015,.003,4,8,Math.PI*1.5),u);f.position.set(0,-.02,.2),f.rotation.x=.4,n.add(f);const p=new Q({color:B.mothBody,emissive:B.mothGlow,emissiveIntensity:.4,roughness:1});for(let m=0;m<5;m++){const d=y()*6.28,M=new L(new q(.008,3,3),p);M.position.set(Math.cos(d)*.04,Math.sin(d)*.04,y()*.15-.05),n.add(M)}const g=new Z({color:B.mothBody,transparent:!0,opacity:.4});for(let m=-1;m<=1;m+=2)for(let d=0;d<3;d++){const M=new L(new wt(.002,.002,.06,3),g);M.position.set(m*.04,-.03,-.05+d*.06),M.rotation.z=m*.8,M.rotation.x=-.3,n.add(M)}const x=new Z({color:B.mothGlow,transparent:!0,opacity:.35});for(let m=-1;m<=1;m+=2)for(let d=0;d<5;d++){const M=d/5*Math.PI-Math.PI/2,v=new L(new q(.006,3,3),x);v.position.set(m*(.3+Math.cos(M)*.05),Math.sin(M)*.02,.02+d*.04),n.add(v)}return n.position.set(i,t,e),xt.add(n),{group:n,wingMat:l,phase:y()*6.28,orbitAng:y()*6.28,orbitR:2+y()*4,centerX:i,centerZ:e,floatY:t,flapSpeed:6+y()*4}}function px(i,t,e){const n=new ne,s=new Z({color:B.wispCore}),o=new L(new q(.08,6,4),s);n.add(o);const r=new Z({color:16777215,transparent:!0,opacity:.7,wireframe:!0}),a=new L(new Ai(.06,0),r);n.add(a);const c=new Z({color:B.wispGlow,transparent:!0,opacity:.5}),l=new L(new q(.18,6,4),c);n.add(l);const h=new Z({color:B.wispGlow,transparent:!0,opacity:.25}),u=new L(new Se(.22,.008,4,12),h);u.rotation.x=Math.PI/2,n.add(u);const f=new Z({color:B.wispTrail,transparent:!0,opacity:.15}),p=new L(new q(.35,5,4),f);n.add(p);const g=new Z({color:16777215,transparent:!0,opacity:.8}),x=new L(new q(.02,3,3),g);x.position.set(.15,0,0),n.add(x);const m=new Z({color:B.wispCore,transparent:!0,opacity:.35});for(let E=0;E<3;E++){const T=new L(new q(.01,3,3),m);T.position.set((y()-.5)*.1,-.1-E*.08,(y()-.5)*.1),n.add(T)}const d=new Z({color:B.wispGlow,transparent:!0,opacity:.18});for(let E=0;E<3;E++){const T=E/3*6.28+y()*.5,R=.15+y()*.1,S=new L(new wt(.003,.001,R,3),d);S.position.set(Math.cos(T)*.1,y()*.08,Math.sin(T)*.1),S.rotation.z=Math.PI/3*(T<3.14?1:-1),S.rotation.y=T,n.add(S)}const M=new Z({color:B.wispGlow,transparent:!0,opacity:.12}),v=new L(new Se(.26,.005,4,10),M);v.rotation.x=1.2,v.rotation.z=.8,n.add(v);const _=new Z({color:16777215,transparent:!0,opacity:.5});for(let E=0;E<4;E++){const T=y()*6.28,R=y()*.8,S=new L(new q(.006,3,3),_);S.position.set(Math.cos(T)*.06,Math.sin(R)*.06,Math.sin(T)*.06),n.add(S)}const b=new Z({color:B.wispCore,transparent:!0,opacity:.2});for(let E=0;E<4;E++){const T=new L(new q(.004,3,3),b);T.position.set(.03+y()*.04,-.05-E*.04,y()*.04),n.add(T)}return n.position.set(i,t,e),xt.add(n),{group:n,glowMat:c,hazeMat:f,phase:y()*6.28,targetX:i,targetY:t,targetZ:e,velX:0,velY:0,velZ:0,scatter:0}}function mx(i,t){const e=new ne,n=Rc,s=8+Math.floor(y()*5),o=new Q({color:B.fairyMush,emissive:B.fairyGlow,emissiveIntensity:.2,roughness:.5}),r=new Q({color:B.mushStem,roughness:.7,emissive:B.fairyGlow,emissiveIntensity:.05});for(let _=0;_<s;_++){const b=_/s*6.28+y()*.15,E=n+y()*.3-.15,T=.15+y()*.2,R=new L(je.mushStem,r);R.scale.setScalar(T),R.position.set(Math.cos(b)*E,T*.3,Math.sin(b)*E),e.add(R);const S=new L(je.mushCap,o);S.scale.set(T,T*.4,T),S.position.set(Math.cos(b)*E,T*.55,Math.sin(b)*E),e.add(S);const w=new Z({color:16777215,transparent:!0,opacity:.7}),P=new L(new q(T*.08,3,3),w);P.position.set(Math.cos(b)*E,T*.6,Math.sin(b)*E),e.add(P)}const a=new Q({color:8934792,emissive:B.fairyGlow,emissiveIntensity:.1,roughness:.6});for(let _=0;_<5;_++){const b=y()*6.28,E=n+y()*.6-.3,T=.06+y()*.06,R=new L(je.mushCap,a);R.scale.set(T,T*.5,T),R.position.set(Math.cos(b)*E,T*.35,Math.sin(b)*E),e.add(R)}const c=new Q({color:1725733,emissive:664080,emissiveIntensity:.05,roughness:.9});for(let _=0;_<4;_++){const b=y()*6.28,E=y()*n*.8,T=new L(new q(.08+y()*.08,4,3),c);T.scale.set(1.5,.2,1.5),T.position.set(Math.cos(b)*E,.01,Math.sin(b)*E),e.add(T)}const l=new Q({color:4478310,emissive:B.fairyGlow,emissiveIntensity:.05,roughness:.85}),h=new L(new q(.12,5,3),l);h.scale.set(1.2,.3,1),h.position.y=.03,e.add(h);const u=new Z({color:B.fairyGlow,transparent:!0,opacity:.2});for(let _=0;_<6;_++){const b=new L(new q(.01,3,3),u);b.position.set((y()-.5)*n*.8,.1+y()*.4,(y()-.5)*n*.8),e.add(b)}const f=new Z({color:B.fairyRing,transparent:!0,opacity:0,side:Bt}),p=new L(new pr(.3,n-.3,16),f);p.rotation.x=-Math.PI/2,p.position.y=.02,e.add(p);const g=new Z({color:B.fairyGlow,transparent:!0,opacity:.08});for(let _=0;_<6;_++){const b=y()*6.28,E=b+.5+y()*1.5,T=n*.6+y()*n*.4,R=new L(new wt(.002,.002,T,3),g);R.position.set(Math.cos((b+E)/2)*n*.4,.005,Math.sin((b+E)/2)*n*.4),R.rotation.x=Math.PI/2,R.rotation.z=b,e.add(R)}const x=new Q({color:4864560,roughness:.9,transparent:!0,opacity:.5});for(let _=0;_<3;_++){const b=y()*6.28,E=y()*n*.7,T=new L(new q(.03,4,3),x);T.scale.set(1.3,.3,1.3),T.position.set(Math.cos(b)*E,.008,Math.sin(b)*E),e.add(T)}const m=new Q({color:7833702,roughness:.9,transparent:!0,opacity:.5});for(let _=0;_<2;_++){const b=new L(new Ie(.02+y()*.02,4),m);b.position.set((y()-.5)*.08,.06,(y()-.5)*.06),b.rotation.x=-Math.PI/2+y()*.4,e.add(b)}const d=new Z({color:8978346,transparent:!0,opacity:.25});for(let _=0;_<5;_++){const b=y()*6.28,E=y()*n*.9,T=new L(new q(.005,3,3),d);T.position.set(Math.cos(b)*E,.01,Math.sin(b)*E),e.add(T)}const M=new Z({color:657926,transparent:!0,opacity:.15,side:Bt}),v=new L(new pr(n*.5,n*.85,12),M);return v.rotation.x=-Math.PI/2,v.position.y=.008,e.add(v),e.position.set(i,0,t),xt.add(e),{group:e,mushMat:o,discMat:f,x:i,z:t,phase:y()*6.28,glowIntensity:0,active:!1}}function gx(i,t,e){const n=new ne,s=new Q({color:B.bubbleIris,emissive:B.bubbleIris,emissiveIntensity:.15,transparent:!0,opacity:.25,roughness:0,metalness:.6}),o=new L(je.bubble,s);n.add(o);const r=new Z({color:15650047,transparent:!0,opacity:.1}),a=new L(new Se(.13,.003,4,10),r);a.rotation.x=.5,a.rotation.y=y()*3,n.add(a);const c=new L(new Se(.11,.003,4,10),r);c.rotation.x=-.8,c.rotation.z=1.2,n.add(c);const l=new Z({color:B.bubbleShine,transparent:!0,opacity:.5}),h=new L(new q(.04,4,3),l);h.position.set(.05,.07,.08),n.add(h);const u=new Z({color:15658751,transparent:!0,opacity:.2}),f=new L(new q(.025,3,3),u);f.position.set(-.06,-.04,-.06),n.add(f);const p=new Z({color:16755438,transparent:!0,opacity:.12}),g=new L(new q(.06,4,3),p);g.position.set(.02,-.02,.01),n.add(g);const x=new Z({color:16772863,transparent:!0,opacity:.08}),m=new L(new q(.12,5,4),x);n.add(m);const d=[16764125,13426175,14548940];for(let R=0;R<3;R++){const S=new Z({color:d[R],transparent:!0,opacity:.06}),w=new L(new Se(.14-R*.02,.002,4,8),S);w.position.y=-.04+R*.04,w.rotation.x=Math.PI/2,n.add(w)}const M=new Z({color:16777215,transparent:!0,opacity:.6});for(let R=0;R<3;R++){const S=y()*6.28,w=y()*Math.PI-Math.PI/2,P=new L(new q(.003,3,3),M);P.position.set(Math.cos(S)*Math.cos(w)*.14,Math.sin(w)*.14,Math.sin(S)*Math.cos(w)*.14),n.add(P)}const v=new Z({color:11189196,transparent:!0,opacity:.1}),_=new L(new q(.015,3,3),v);_.position.set((y()-.5)*.04,(y()-.5)*.04,(y()-.5)*.04),n.add(_);const b=new Z({color:B.bubbleIris,transparent:!0,opacity:.15}),E=new L(new q(.04,4,3),b);E.scale.set(1.3,.6,1.3),E.position.y=-.12,n.add(E);const T=.6+y()*.8;return n.scale.setScalar(T),n.position.set(i,t,e),xt.add(n),{group:n,shellMat:s,phase:y()*6.28,driftAng:y()*6.28,driftSpeed:.3+y()*.5,floatY:t,homeX:i,homeZ:e,bobAmp:.3+y()*.4,popped:!1,popTimer:0,sc:T}}function _x(i,t){const e=new ne,n=1.5+y()*1,s=new Q({color:329746,roughness:.9}),o=new L(new Ie(n*.85,10),s);o.rotation.x=-Math.PI/2,o.position.y=.005,e.add(o);const r=new Q({color:B.pondWater,emissive:B.pondGlow,emissiveIntensity:.2,transparent:!0,opacity:.55,roughness:.05,metalness:.4}),a=new L(new Ie(n,12),r);a.rotation.x=-Math.PI/2,a.position.y=.03,e.add(a);const c=new Q({color:3816002,roughness:.85}),l=5+Math.floor(y()*4);for(let P=0;P<l;P++){const U=P/l*6.28+y()*.3,N=n+y()*.2-.1,G=.06+y()*.08,W=new L(new q(G,4,3),c);W.scale.set(1+y()*.5,.4+y()*.3,1+y()*.5),W.position.set(Math.cos(U)*N,G*.2,Math.sin(U)*N),W.rotation.set(y(),y(),y()),e.add(W)}const h=new Q({color:1725728,roughness:.7,side:Bt});for(let P=0;P<3;P++){const U=y()*6.28,N=n*.85+y()*.2;for(let G=0;G<3;G++){const W=new L(new we(.015,.15+y()*.1),h);W.position.set(Math.cos(U)*N+(y()-.5)*.05,.08,Math.sin(U)*N+(y()-.5)*.05),W.rotation.y=y()*3,W.rotation.x=-.2,e.add(W)}}const u=new Z({color:11197934,transparent:!0,opacity:.08});for(let P=0;P<2;P++){const U=new L(new Se(n*.3+P*n*.25,.005,4,16),u);U.rotation.x=Math.PI/2,U.position.y=.035,e.add(U)}const f=new Q({color:B.lilyPad,roughness:.6,side:Bt}),p=4+Math.floor(y()*2),g=[];for(let P=0;P<p;P++){const U=y()*6.28,N=y()*n*.6,G=.15+y()*.15,W=new L(new Ie(G,8),f);W.rotation.x=-Math.PI/2,W.position.set(Math.cos(U)*N,.05,Math.sin(U)*N),e.add(W);const K=new Z({color:1724448,transparent:!0,opacity:.3}),j=new L(new wt(.002,.002,G*1.5,3),K);j.position.set(Math.cos(U)*N,.052,Math.sin(U)*N),j.rotation.x=Math.PI/2,j.rotation.z=y()*3,e.add(j),g.push({mesh:W,phase:y()*6.28})}const x=new Q({color:B.lilyFlower,emissive:B.lilyGlow,emissiveIntensity:.4,transparent:!0,opacity:.85,side:Bt}),m=.08;for(let P=0;P<6;P++){const U=P/6*6.28,N=new L(new we(.06,.05),x);N.position.set(g[0].mesh.position.x+Math.cos(U)*.05,m,g[0].mesh.position.z+Math.sin(U)*.05),N.rotation.x=-1,N.rotation.y=-U,e.add(N)}const d=new Q({color:16777130,emissive:B.lilyGlow,emissiveIntensity:.8}),M=new L(new q(.025,4,3),d);if(M.position.set(g[0].mesh.position.x,m+.02,g[0].mesh.position.z),e.add(M),g.length>2){const P=new Q({color:B.lilyFlower,emissive:B.lilyGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),U=new L(new q(.03,5,4),P);U.scale.set(.8,1.2,.8),U.position.set(g[2].mesh.position.x,.09,g[2].mesh.position.z),e.add(U)}const v=new Q({color:3815477,roughness:.8,transparent:!0,opacity:.5});for(let P=0;P<5;P++){const U=y()*6.28,N=y()*n*.7,G=new L(new q(.02+y()*.025,4,3),v);G.scale.set(1+y()*.5,.4,1+y()*.5),G.position.set(Math.cos(U)*N,.015,Math.sin(U)*N),e.add(G)}const _=new Z({color:2761752,transparent:!0,opacity:.12,side:Bt});for(let P=0;P<3;P++){const U=y()*6.28,N=y()*n*.5,G=new L(new Ie(.08+y()*.06,5),_);G.rotation.x=-Math.PI/2,G.position.set(Math.cos(U)*N,.012,Math.sin(U)*N),e.add(G)}const b=new Q({color:1122837,roughness:.7,transparent:!0,opacity:.4});for(let P=0;P<2;P++){const U=y()*6.28,N=y()*n*.5,G=new L(new q(.012,4,3),b);G.scale.set(.8,.5,1.3),G.position.set(Math.cos(U)*N,.04,Math.sin(U)*N),e.add(G);const W=new L(new wt(.002,.001,.025,3),b);W.position.set(Math.cos(U)*N-Math.cos(U)*.02,.04,Math.sin(U)*N-Math.sin(U)*.02),W.rotation.z=Math.PI/2,W.rotation.y=U,e.add(W)}const E=new Z({color:2250016,transparent:!0,opacity:.1,side:Bt});for(let P=0;P<3;P++){const U=y()*6.28,N=n*.7+y()*n*.25,G=new L(new Ie(.06+y()*.04,5),E);G.rotation.x=-Math.PI/2,G.position.set(Math.cos(U)*N,.032,Math.sin(U)*N),e.add(G)}const T=new Z({color:13426158,transparent:!0,opacity:.06}),R=new L(new Se(n-.05,.01,4,16),T);R.rotation.x=Math.PI/2,R.position.y=.035,e.add(R);const S=new Q({color:4861976,roughness:.8,side:Bt,transparent:!0,opacity:.6}),w=new L(new Ie(.03,5),S);return w.rotation.x=-Math.PI/2,w.position.set((y()-.5)*n*.5,.04,(y()-.5)*n*.5),e.add(w),e.position.set(i,0,t),xt.add(e),{group:e,waterMat:r,flMat:x,pads:g,x:i,z:t,phase:y()*6.28,pondR:n}}function vx(i,t){const e=new ne,n=new Z({color:B.orbGold}),s=new L(new q(.2,10,8),n);e.add(s);const o=new Z({color:16777215}),r=new L(new q(.06,6,4),o);e.add(r);const a=new Z({color:16772744,transparent:!0,opacity:.4,wireframe:!0}),c=new L(new Ai(.15,0),a);e.add(c);const l=new Z({color:B.orbGlow,transparent:!0,opacity:.5}),h=new L(new q(.35,8,6),l);e.add(h);const u=new Z({color:B.orbGlow,transparent:!0,opacity:.3});for(let T=0;T<8;T++){const R=T/8*6.28,S=new L(new In(.02,.25,3),u);S.position.set(Math.cos(R)*.3,Math.sin(R*2)*.05,Math.sin(R)*.3),S.rotation.z=-R+Math.PI/2,S.rotation.y=R,e.add(S)}const f=new Z({color:B.orbInner,transparent:!0,opacity:.15}),p=new L(new q(.6,8,5),f);e.add(p);for(let T=0;T<6;T++){const R=new L(new q(.03,4,3),new Z({color:16777215})),S=T/6*6.28;R.position.set(Math.cos(S)*.4,Math.sin(S*2)*.1,Math.sin(S)*.4),e.add(R)}const g=new Z({color:B.orbGold,transparent:!0,opacity:.7});for(let T=0;T<4;T++){const R=T/4*6.28+.4,S=new L(new q(.015,3,3),g);S.position.set(Math.cos(R)*.5,0,Math.sin(R)*.5),e.add(S)}const x=new Z({color:16768426,transparent:!0,opacity:.12});for(let T=0;T<3;T++){const R=new L(new Se(.28,.003,4,12),x);R.rotation.set(T*1.05,T*.7,0),e.add(R)}const m=new Z({color:B.orbGlow,transparent:!0,opacity:.08}),d=new L(new Se(.4,.004,4,16),m);d.rotation.x=Math.PI/2,e.add(d);const M=new Z({color:16772812,transparent:!0,opacity:.15}),v=new L(new Se(.25,.012,4,10),M);v.rotation.x=Math.PI/2,e.add(v);const _=new Z({color:16777215,transparent:!0,opacity:.5});for(let T=0;T<6;T++){const R=y()*6.28,S=y()*Math.PI-Math.PI/2,w=new L(new q(.008,3,3),_);w.position.set(Math.cos(R)*Math.cos(S)*.2,Math.sin(S)*.2,Math.sin(R)*Math.cos(S)*.2),e.add(w)}const b=new Z({color:B.orbGlow,transparent:!0,opacity:.1,side:Bt}),E=new L(new Ie(.5,8),b);return E.rotation.x=-Math.PI/2,E.position.y=-.95,e.add(E),e.position.set(i,1,t),xt.add(e),{group:e,coreMat:n,glowMat:l,hazeMat:f,x:i,z:t,found:!1,flyUp:!1,flyY:1,phase:y()*6.28,laserLine:null,laserMat:null}}function xx(i,t){const e=new ne,n=new Q({color:B.rockBase,roughness:.85,metalness:.05}),s=new Q({color:B.rockLight,roughness:.8,metalness:.05}),o=new Q({color:B.rockMoss,emissive:B.rockMoss,emissiveIntensity:.03,roughness:.9}),r=.3+y()*.5,a=new L(new q(r,8,6),y()<.6?n:s);a.scale.set(1+y()*.6,.4+y()*.4,1+y()*.6),a.position.y=r*.2,a.rotation.set(y()*.5,y()*3,y()*.3),a.castShadow=!0,a.receiveShadow=!0,e.add(a);const c=1+Math.floor(y()*3);for(let p=0;p<c;p++){const g=y()*6.28,x=r*.6+y()*r*.5,m=r*.3+y()*r*.4,d=new L(new q(m,5,4),y()<.5?n:s);d.scale.set(1+y()*.5,.3+y()*.4,1+y()*.5),d.position.set(Math.cos(g)*x,m*.15,Math.sin(g)*x),d.rotation.set(y()*.8,y()*3,y()*.5),e.add(d)}const l=2+Math.floor(y()*3);for(let p=0;p<l;p++){const g=y()*6.28,x=y()*r*.6,m=r*.15+y()*r*.2,d=new L(new q(m,4,3),o);d.scale.set(1.5,.2,1.5),d.position.set(Math.cos(g)*x,r*.35+y()*.05,Math.sin(g)*x),e.add(d)}const h=[8943428,10061909,6715221,11180390];for(let p=0;p<3;p++){const g=new Q({color:h[Math.floor(y()*h.length)],roughness:.9,transparent:!0,opacity:.5}),x=y()*6.28,m=new L(new q(r*.06+y()*r*.08,3,3),g);m.scale.set(2,.15,2),m.position.set(Math.cos(x)*r*.5,r*.25+y()*.1,Math.sin(x)*r*.5),e.add(m)}const u=new Q({color:3816e3,roughness:.9}),f=4+Math.floor(y()*3);for(let p=0;p<f;p++){const g=y()*6.28,x=r*.5+y()*r*.6,m=.03+y()*.05,d=new L(new q(m,3,3),u);d.scale.set(1+y()*.5,.4,1+y()*.5),d.position.set(Math.cos(g)*x,m*.15,Math.sin(g)*x),e.add(d)}if(y()<.6){const p=new Q({color:3385941,emissive:B.grassTip,emissiveIntensity:.05,roughness:.7,side:Bt});for(let g=0;g<3;g++){const x=y()*6.28,m=new L(new we(.015,.08+y()*.06),p);m.position.set(Math.cos(x)*r*.3,r*.3,Math.sin(x)*r*.3),m.rotation.y=y()*3,m.rotation.x=-.2-y()*.3,e.add(m)}}return e.position.set(i,0,t),xt.add(e),{group:e,x:i,z:t,colR:r*.8}}let tf=null,ef=null,nf=null;function Mx(){return tf}function yx(){return ef}function wx(){return nf}function Sx(){const i=new ne,t=new Q({color:B.obeliskBlack,roughness:.2,metalness:.8,emissive:B.obeliskPink,emissiveIntensity:0});ef=t;const e=new L(new wt(1.2,1.8,Fe,4),t);e.position.y=Fe/2,e.rotation.y=Math.PI/4,e.castShadow=!0,i.add(e);const n=new Z({color:3351108,transparent:!0,opacity:.2});for(let M=0;M<4;M++){const v=M/4*6.28+Math.PI/4,_=new L(new wt(.03,.04,Fe*.9,3),n);_.position.set(Math.cos(v)*1.55,Fe*.45,Math.sin(v)*1.55),i.add(_)}const s=new Z({color:B.obeliskPink,transparent:!0,opacity:0});for(let M=0;M<4;M++){const v=M/4*6.28+Math.PI/4;for(let b=0;b<3;b++){const E=6+b*4,T=new L(new wt(.015,.015,.8,3),s);T.position.set(Math.cos(v)*1.6,E,Math.sin(v)*1.6),T.rotation.z=Math.PI/2,T.rotation.y=-v,i.add(T)}const _=new L(new wt(.012,.012,2.5,3),s);_.position.set(Math.cos(v)*1.6,12,Math.sin(v)*1.6),i.add(_)}const o=new Q({color:B.obeliskBlack,roughness:.1,metalness:.9,emissive:B.obeliskPink,emissiveIntensity:0});nf=o;const r=new L(new In(1.3,3,4),o);r.position.y=Fe+1.5,r.rotation.y=Math.PI/4,i.add(r);const a=new Z({color:B.obeliskPink,transparent:!0,opacity:0});for(let M=0;M<4;M++){const v=M/4*6.28+Math.PI/4,_=new L(new wt(.02,.02,3.2,3),a);_.position.set(Math.cos(v)*.8,Fe+1.5,Math.sin(v)*.8),_.rotation.z=.35*(v<3.14?1:-1),_.rotation.y=-v,i.add(_)}for(let M=0;M<5;M++){const v=new L(new Se(1.85-M*.02,.04,6,4),new Z({color:2236979}));v.position.y=4+M*5,v.rotation.x=Math.PI/2,i.add(v)}const c=new Q({color:1118488,roughness:.3,metalness:.7}),l=new L(new wt(2.2,2.5,.6,4),c);l.position.y=.3,l.rotation.y=Math.PI/4,i.add(l);const h=new L(new wt(2.8,3,.4,4),c);h.position.y=.05,h.rotation.y=Math.PI/4,i.add(h);const u=new Z({color:B.obeliskPink,transparent:!0,opacity:0});for(let M=0;M<8;M++){const v=M/8*6.28,_=new L(new q(.06,4,3),u);_.position.set(Math.cos(v)*2.5,Fe*.7+M*.5,Math.sin(v)*2.5),i.add(_)}const f=new Z({color:1710626,transparent:!0,opacity:.08});for(let M=0;M<6;M++){const v=y()*6.28,_=2+y()*Fe*.7,b=new L(new wt(.008,.008,.5+y()*.5,3),f);b.position.set(Math.cos(v)*1.6,_,Math.sin(v)*1.6),b.rotation.z=(y()-.5)*.8,b.rotation.y=-v,i.add(b)}const p=new Q({color:921108,roughness:.5,metalness:.4});for(let M=0;M<12;M++){const v=y()*6.28,_=3+y()*2,b=.15+y()*.25,E=new L(new q(b,4,3),p);E.scale.set(1+y()*.5,.3+y()*.3,1+y()*.5),E.position.set(Math.cos(v)*_,b*.15,Math.sin(v)*_),E.rotation.set(y(),y(),y()),i.add(E)}const g=new Z({color:B.obeliskPink,transparent:!0,opacity:0});for(let M=0;M<4;M++){const v=M/4*6.28+Math.PI/4;for(let _=0;_<5;_++){const b=5+_*3.5+y()*.5,E=(y()-.5)*.4,T=new L(new q(.04,4,3),g);T.position.set(Math.cos(v)*1.58+Math.cos(v+1.57)*E,b,Math.sin(v)*1.58+Math.sin(v+1.57)*E),i.add(T)}}const x=new Z({color:0,transparent:!0,opacity:.15,side:Bt}),m=new L(new Ie(4,8),x);m.rotation.x=-Math.PI/2,m.position.y=.005,i.add(m),i.position.set(0,-Fe,0),xt.add(i),tf=i;const d=new Ui(8939212,0,30);i.add(d),d.position.set(0,Fe+1,0)}let sf=null,of=null;function Ex(){return sf}function bx(){return of}function Tx(){const i=new Q({color:B.moatBlue,emissive:1136042,emissiveIntensity:.3,transparent:!0,opacity:0,roughness:.1,metalness:.3});of=i;const t=new Ec;t.absarc(0,0,6,0,6.28,!1);const e=new dr;e.absarc(0,0,3,0,6.28,!0),t.holes.push(e);const n=new mr(t,24),s=new L(n,i);s.rotation.x=-Math.PI/2,s.position.y=.05,xt.add(s),sf=s;const o=new Z({color:4491468,transparent:!0,opacity:0});for(let p=0;p<12;p++){const g=p/12*6.28+y()*.3,x=3.5+y()*2,m=new L(new q(.04+y()*.04,4,3),o);m.scale.set(1.2,.4,1.2),m.position.set(Math.cos(g)*x,.02,Math.sin(g)*x),xt.add(m)}const r=new Z({color:13426158,transparent:!0,opacity:0,side:Bt});for(let p=0;p<6;p++){const g=p/6*6.28+y()*.5,x=new L(new Ie(.12+y()*.1,5),r);x.rotation.x=-Math.PI/2,x.position.set(Math.cos(g)*3.3,.06,Math.sin(g)*3.3),xt.add(x)}const a=new Z({color:8960989,transparent:!0,opacity:0});for(let p=0;p<8;p++){const g=p/8*6.28,x=4+y()*1.5,m=new L(new wt(.003,.003,.4,3),a);m.position.set(Math.cos(g)*x,.055,Math.sin(g)*x),m.rotation.x=Math.PI/2,m.rotation.z=g+Math.PI/2,xt.add(m)}const c=new Z({color:264208,transparent:!0,opacity:0,side:Bt}),l=new Ec;l.absarc(0,0,5.2,0,6.28,!1);const h=new dr;h.absarc(0,0,3.8,0,6.28,!0),l.holes.push(h);const u=new mr(l,16),f=new L(u,c);f.rotation.x=-Math.PI/2,f.position.y=.04,xt.add(f)}const Fc=[];function Ax(){for(let r=0;r<6;r++){const a=B.rainbow[r],c=r/6*6.28,l=5+r*.5,h=Fe+5+r*2,u=[];for(let E=0;E<=12;E++){const T=E/12,R=c+T*Math.PI,S=Math.cos(R)*l,w=Math.sin(R)*l,P=Math.sin(T*Math.PI)*h;u.push(new D(S,P,w))}const f=new wc(u),p=new Z({color:a,transparent:!0,opacity:0}),g=new ms(f,20,.12-r*.008,5,!1),x=new L(g,p);xt.add(x);const m=new Z({color:a,transparent:!0,opacity:0});for(let E=0;E<5;E++){const T=(E+.5)/5,R=f.getPoint(T),S=new L(new q(.05,3,3),m);S.position.copy(R),xt.add(S)}const d=new Z({color:a,transparent:!0,opacity:0,side:Bt}),M=u[0],v=u[u.length-1],_=new L(new Ie(.5,6),d);_.rotation.x=-Math.PI/2,_.position.set(M.x,.03,M.z),xt.add(_);const b=new L(new Ie(.5,6),d);b.rotation.x=-Math.PI/2,b.position.set(v.x,.03,v.z),xt.add(b),Fc.push({mesh:x,mat:p,targetOpacity:0})}const i=[],t=9.5,e=Fe+12;for(let r=0;r<=12;r++){const a=r/12,c=a*Math.PI;i.push(new D(Math.cos(c)*t,Math.sin(a*Math.PI)*e,Math.sin(c)*t))}const n=new wc(i),s=new Z({color:15654399,transparent:!0,opacity:0}),o=new L(new ms(n,16,.04,4,!1),s);xt.add(o),Fc.push({mesh:o,mat:s,targetOpacity:0})}const Tn=[];function Rx(i){for(let t=0;t<i;t++){const e=new Z({color:t%3===0?B.fireflyB:B.firefly,transparent:!0,opacity:0}),n=new L(je.fly,e);n.visible=!1,xt.add(n),Tn.push({mesh:n,mat:e,vel:new D,life:0,max:0,active:!1,phase:Math.random()*6.28,wander:Math.random()*6.28})}}function Oc(i,t,e,n){let s=null;for(let o=0;o<Tn.length;o++)if(!Tn[o].active){s=Tn[o];break}if(!s){let o=1/0;for(let r=0;r<Tn.length;r++)Tn[r].life<o&&(o=Tn[r].life,s=Tn[r])}s.mesh.position.set(i,t+.5+Math.random()*3,e),s.mesh.visible=!0,s.mat.opacity=1,s.vel.set((Math.random()-.5)*2,Math.random()-.5,(Math.random()-.5)*2),s.life=n,s.max=n,s.active=!0,s.wander=Math.random()*6.28}function rf(i,t){let e=0;for(let n=0;n<Tn.length;n++){const s=Tn[n];if(!s.active)continue;if(s.life-=i,s.life<=0){s.active=!1,s.mesh.visible=!1;continue}e++,s.wander+=(Math.random()-.5)*3*i,s.vel.x+=Math.cos(s.wander)*1.5*i,s.vel.z+=Math.sin(s.wander)*1.5*i,s.vel.y+=Math.sin(t*2+s.phase)*i,s.vel.multiplyScalar(.995),s.mesh.position.x+=s.vel.x*i,s.mesh.position.y+=s.vel.y*i,s.mesh.position.z+=s.vel.z*i,s.mesh.position.y<.3&&(s.mesh.position.y=.3,s.vel.y=Math.abs(s.vel.y)*.5),s.mesh.position.y>12&&(s.vel.y-=2*i);const o=Math.sin(t*3+s.phase)*.5+.5,r=s.life/s.max;s.mat.opacity=r*(.4+o*.6),s.mesh.scale.setScalar(.6+o*.6)}return e}const An=[];function Cx(i){for(let t=0;t<i;t++){const e=new Z({color:B.spore,transparent:!0,opacity:0}),n=new L(je.spore,e);n.visible=!1,xt.add(n),An.push({mesh:n,mat:e,vel:new D,life:0,max:0,active:!1})}}function Px(i,t,e){let n=null;for(let s=0;s<An.length;s++)if(!An[s].active){n=An[s];break}if(!n){let s=1/0;for(let o=0;o<An.length;o++)An[o].life<s&&(s=An[o].life,n=An[o])}n.mesh.position.set(i,t,e),n.mesh.visible=!0,n.vel.set((Math.random()-.5)*.3,.4+Math.random()*.4,(Math.random()-.5)*.3),n.life=3+Math.random()*3,n.max=n.life,n.active=!0}function Lx(i){let t=0;for(let e=0;e<An.length;e++){const n=An[e];if(n.active){if(n.life-=i,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}t++,n.vel.y+=.3*i,n.vel.multiplyScalar(.997),n.mesh.position.x+=n.vel.x*i,n.mesh.position.y+=n.vel.y*i,n.mesh.position.z+=n.vel.z*i,n.mat.opacity=n.life/n.max*.7}}return t}const os=[];let Ma=0;function Ix(i){for(let t=0;t<i;t++){const e=new Z({color:B.starMote,transparent:!0,opacity:0}),n=new L(je.starMote,e);n.visible=!1,xt.add(n),os.push({mesh:n,mat:e,life:0,max:0,active:!1,vy:0,drift:0})}}function Dx(i){let t=null;for(let o=0;o<os.length;o++)if(!os[o].active){t=os[o];break}if(!t)return;const e=i.x+(Math.random()-.5)*60,n=i.z+(Math.random()-.5)*60,s=15+Math.random()*20;t.mesh.position.set(e,s,n),t.mesh.visible=!0,t.mat.opacity=.8,t.life=6+Math.random()*6,t.max=t.life,t.active=!0,t.vy=-.15-Math.random()*.3,t.drift=Math.random()*6.28}function af(i,t,e){Ma+=i,Ma>.15&&(Ma=0,Dx(e));for(let n=0;n<os.length;n++){const s=os[n];if(!s.active)continue;if(s.life-=i,s.life<=0||s.mesh.position.y<.5){s.active=!1,s.mesh.visible=!1;continue}s.mesh.position.y+=s.vy*i,s.drift+=(Math.random()-.5)*.5*i,s.mesh.position.x+=Math.sin(s.drift)*.1*i,s.mesh.position.z+=Math.cos(s.drift)*.08*i;const o=s.life/s.max,r=Math.sin(t*4+n)*.3+.7;s.mat.opacity=o*r*.7,s.mesh.scale.setScalar(.5+r*.5)}}const rs=[];function Ux(i){for(let t=0;t<i;t++){const e=new Z({color:8956535,transparent:!0,opacity:0}),n=new L(je.dustMote,e);n.visible=!1,xt.add(n),rs.push({mesh:n,mat:e,vel:new D,life:0,max:0,active:!1})}}function Nx(i,t,e){for(let n=0;n<e;n++){let s=null;for(let a=0;a<rs.length;a++)if(!rs[a].active){s=rs[a];break}if(!s)continue;const o=Math.random()*6.28,r=1+Math.random()*2;s.mesh.position.set(i+Math.cos(o)*.2,.1,t+Math.sin(o)*.2),s.mesh.visible=!0,s.mat.opacity=.5,s.vel.set(Math.cos(o)*r,.5+Math.random()*1.5,Math.sin(o)*r),s.life=.6+Math.random()*.6,s.max=s.life,s.active=!0}}function Fx(i){for(let t=0;t<rs.length;t++){const e=rs[t];if(e.active){if(e.life-=i,e.life<=0){e.active=!1,e.mesh.visible=!1;continue}e.vel.y-=3*i,e.vel.multiplyScalar(.96),e.mesh.position.x+=e.vel.x*i,e.mesh.position.y+=e.vel.y*i,e.mesh.position.z+=e.vel.z*i,e.mesh.position.y<.05&&(e.mesh.position.y=.05,e.vel.y=0,e.vel.x*=.8,e.vel.z*=.8),e.mat.opacity=e.life/e.max*.4}}}const as=[];function Ox(i){for(let t=0;t<i;t++){const e=new Z({color:B.bubblePop,transparent:!0,opacity:0}),n=new L(new q(.02,3,3),e);n.visible=!1,xt.add(n),as.push({mesh:n,mat:e,vel:new D,life:0,max:0,active:!1})}}function zx(i,t,e,n){for(let s=0;s<n;s++){let o=null;for(let l=0;l<as.length;l++)if(!as[l].active){o=as[l];break}if(!o)continue;const r=Math.random()*6.28,a=Math.random()*3.14,c=1+Math.random()*2;o.mesh.position.set(i,t,e),o.mesh.visible=!0,o.mat.opacity=.9,o.vel.set(Math.cos(r)*Math.sin(a)*c,Math.cos(a)*c,Math.sin(r)*Math.sin(a)*c),o.life=.4+Math.random()*.4,o.max=o.life,o.active=!0}}function Bx(i){for(let t=0;t<as.length;t++){const e=as[t];if(e.active){if(e.life-=i,e.life<=0){e.active=!1,e.mesh.visible=!1;continue}e.vel.y-=2*i,e.vel.multiplyScalar(.97),e.mesh.position.x+=e.vel.x*i,e.mesh.position.y+=e.vel.y*i,e.mesh.position.z+=e.vel.z*i,e.mat.opacity=e.life/e.max*.8}}}let ya=0,un="SEEK",di=-Fe,bn=0,vi=[],xi=null,Fs=null,Os=null,zs=null,zc=null,Mi=[],Bs=null,cf=null,Bc=null,kc=[],Gc=[],Hc=[],Vc=[];function kx(i){vi=i.orbs,xi=i.obeliskGroup,Fs=i.obeliskMat,Os=i.obeliskGlowMat,zs=i.moatMesh,zc=i.moatMat,Mi=i.rainbowArcs,Bs=i.player,cf=i.makeLaser,Bc=i.orbHudEl,kc=i.deers||[],Gc=i.puffs||[],Hc=i.jellies||[],Vc=i.moths||[]}function Gx(i,t){let e=null,n=1/0;for(let s=0;s<vi.length;s++){const o=vi[s];if(o.found)continue;const r=o.x-Bs.pos.x,a=o.z-Bs.pos.z,c=r*r+a*a;c<n&&(n=c,e=o)}if(e&&n<ma*ma){const s=Math.sin(t*2+e.phase)*.5+.5;Ns.position.set(e.x,1,e.z),Ns.intensity=1+s*2,Ns.distance=ma}else Ns.intensity=0;for(let s=0;s<vi.length;s++){const o=vi[s];if(!(o.found&&!o.flyUp)){if(!o.found){const r=Math.sin(t*1.5+o.phase)*.5+.5;o.group.position.y=1+Math.sin(t*.8+o.phase)*.3,o.glowMat.opacity=.3+r*.4,o.hazeMat.opacity=.08+r*.12;for(let l=3;l<o.group.children.length;l++){const h=o.group.children[l],u=(l-3)/6*6.28+t*1.5;h.position.x=Math.cos(u)*.4,h.position.z=Math.sin(u)*.4,h.position.y=Math.sin(u*2+t)*.1}const a=o.x-Bs.pos.x,c=o.z-Bs.pos.z;a*a+c*c<Bh*Bh&&(o.found=!0,o.flyUp=!0,o.flyY=o.group.position.y,ya++,Bc&&(Bc.innerHTML="✦ "+ya+" / "+Cc),un==="SEEK"&&(un="RISING"))}if(o.flyUp){const r=Fe+5;o.flyY+=(r-o.flyY)*i*.8,o.group.position.y=o.flyY;const a=Math.min((o.flyY-1)/(r-1),1);o.group.scale.setScalar(1-a*.6),o.glowMat.opacity=.8-a*.5,o.flyY>r-1&&!o.laserLine&&(o.flyUp=!1,o.group.visible=!1,o.laserLine=cf(o.x,o.z,r))}}}if(un==="RISING"&&(di<0&&(di+=Av*i,di>0&&(di=0),xi&&(xi.position.y=di)),ya>=Cc&&di>=0&&(un="COMPLETE",bn=0)),xi){xi.rotation.y+=i*.03;const s=xi.children[xi.children.length-1];if(s&&s.isLight){const o=Math.max(0,Math.min(1,(di+Fe)/Fe));s.intensity=o*1.5*(.8+Math.sin(t*1.5)*.2)}}for(let s=0;s<vi.length;s++){const o=vi[s];if(!o.laserLine)continue;const r=Math.sin(t*3+s)*.5+.5;o.laserLine.mat.opacity=.5+r*.4,o.laserLine.glowMat.opacity=.15+r*.15}if(un==="COMPLETE"){bn+=i;const s=Math.min(bn/3,1);if(Fs&&(Fs.emissiveIntensity=s*1.5),Os&&(Os.emissiveIntensity=s*2.5),bn>1&&zc){const o=Math.min((bn-1)/4,1);zc.opacity=o*.6,zs&&(zs.position.y=.05+Math.sin(t*3)*.02*o)}if(bn>2)for(let o=0;o<Mi.length;o++){const r=o*.3,a=Math.min(Math.max((bn-2-r)/2,0),1);Mi[o].mat.opacity=a*.55,Mi[o].mesh.rotation.y+=i*.1*(o+1)*.3}if(bn>1){const o=Math.min((bn-1)/6,1)*2;for(let r=0;r<kc.length;r++){const a=kc[r],c=a.group,l=-c.position.x,h=-c.position.z,u=Math.sqrt(l*l+h*h);u>8?(a.wanderAng=Math.atan2(-c.position.x,-c.position.z),a.state="walk",a.speed=1.5*o,c.position.x+=l/u*a.speed*i,c.position.z+=h/u*a.speed*i,c.rotation.y=a.wanderAng):a.state="pause"}for(let r=0;r<Gc.length;r++){const a=Gc[r],c=a.group,l=-c.position.x,h=-c.position.z,u=Math.sqrt(l*l+h*h);u>8&&(a.wanderAng=Math.atan2(-c.position.x,-c.position.z),a.state="hop",a.hopTimer=a.hopTimer%1.2,c.position.x+=l/u*1.5*o*i,c.position.z+=h/u*1.5*o*i)}for(let r=0;r<Hc.length;r++){const a=Hc[r],c=a.group;c.position.x+=(0-c.position.x)*i*.15*o,c.position.z+=(0-c.position.z)*i*.15*o}for(let r=0;r<Vc.length;r++){const a=Vc[r];a.centerX+=(0-a.centerX)*i*.2*o,a.centerZ+=(0-a.centerZ)*i*.2*o,a.orbitR=Math.max(a.orbitR-i*.3*o,2)}}bn>10&&(un="FINALE")}if(un==="FINALE"){Fs&&(Fs.emissiveIntensity=1.5+Math.sin(t*.5)*.3),Os&&(Os.emissiveIntensity=2.5+Math.sin(t*.7)*.5),zs&&(zs.position.y=.05+Math.sin(t*3)*.02);for(let s=0;s<Mi.length;s++)Mi[s].mesh.rotation.y+=i*.1*(s+1)*.3,Mi[s].mat.opacity=.45+Math.sin(t+s)*.1}}function Hx(i,t,e){const n=Fe+2,s=[new D(i,e,t),new D(0,n,0)],o=new Z({color:B.laserPink,transparent:!0,opacity:.8}),r=new Cu(s[0],s[1]),a=new ms(r,1,.08,6,!1),c=new L(a,o);xt.add(c);const l=new Z({color:B.laserGlow,transparent:!0,opacity:.25}),h=new L(new ms(r,1,.25,6,!1),l);return xt.add(h),{tube:c,glow:h,mat:o,glowMat:l}}const Vx=600;let Bo=.25,Te=1,Yh=.85,lf="NIGHT",ks=null,Gs=null,Wc=null,Hs=null,tr=null,Xc=null;const er=[];let Yc=!1;const qh=[{label:"DUSK",sky:new _t(923685),fog:new _t(791584),fogDensity:.009,moonInt:.6,moonCol:new _t(14527112),moonElev:15,ambSky:new _t(4469589),ambGnd:new _t(2238488),ambInt:.6,stars:.4,bio:.7,plRange:16,plInt:.5},{label:"NIGHT",sky:new _t(330264),fog:new _t(528408),fogDensity:.01,moonInt:1,moonCol:new _t(12307694),moonElev:55,ambSky:new _t(3359846),ambGnd:new _t(1587232),ambInt:.7,stars:.85,bio:1,plRange:18,plInt:.55},{label:"DEEP_NIGHT",sky:new _t(198160),fog:new _t(397332),fogDensity:.012,moonInt:.55,moonCol:new _t(8952251),moonElev:75,ambSky:new _t(1712708),ambGnd:new _t(1188888),ambInt:.5,stars:1,bio:1.5,plRange:22,plInt:.7},{label:"DAWN",sky:new _t(1187888),fog:new _t(923688),fogDensity:.011,moonInt:.5,moonCol:new _t(13417386),moonElev:20,ambSky:new _t(3354197),ambGnd:new _t(1843224),ambInt:.55,stars:.35,bio:.65,plRange:17,plInt:.5}],ei=new _t,Zh=new _t;function Wx(){if(!Xc||Yc)return;const i=new Set;Xc.traverse(t=>{const e=t.material;e&&e.transparent&&!i.has(e)&&(i.add(e),er.push({mat:e,base:e.opacity}))}),Yc=!0}function Xx(i){ks=i.scene,Gs=i.moon,Wc=i.moon2,Hs=i.hemiLight,tr=i.playerLight,Xc=i.skyGroup}function Yx(i){if(!ks)return;Yc||Wx(),Bo=(Bo+i/Vx)%1;const t=Bo*4,e=Math.floor(t)%4,n=(e+1)%4,s=t-Math.floor(t),o=.5-.5*Math.cos(s*Math.PI),r=qh[e],a=qh[n];lf=o<.5?r.label:a.label;const c=(l,h)=>l+(h-l)*o;if(ei.copy(r.sky).lerp(a.sky,o),ks.background.copy(ei),ei.copy(r.fog).lerp(a.fog,o),ks.fog.color.copy(ei),ks.fog.density=c(r.fogDensity,a.fogDensity),Gs){ei.copy(r.moonCol).lerp(a.moonCol,o),Gs.color.copy(ei),Gs.intensity=c(r.moonInt,a.moonInt);const l=Bo*Math.PI*2,h=c(r.moonElev,a.moonElev)*Math.PI/180,u=60;Gs.position.set(Math.cos(l)*Math.cos(h)*u,Math.sin(h)*u,Math.sin(l)*Math.cos(h)*u)}if(Wc){const l=c(r.moonInt,a.moonInt)/.85;Wc.intensity=.3*l}Hs&&(ei.copy(r.ambSky).lerp(a.ambSky,o),Zh.copy(r.ambGnd).lerp(a.ambGnd,o),Hs.color.copy(ei),Hs.groundColor.copy(Zh),Hs.intensity=c(r.ambInt,a.ambInt)),tr&&(tr.distance=c(r.plRange,a.plRange),tr.intensity=c(r.plInt,a.plInt)),Yh=c(r.stars,a.stars);for(let l=0;l<er.length;l++)er[l].mat.opacity=er[l].base*Yh;Te=c(r.bio,a.bio)}let Mr=0,yl=0,nr=0,ir="CLEAR",vs=!1,Hn=0;const sr={CLEAR:{fogMult:1,windBase:.3,rainRate:0,skyDarken:0,mistCount:0,duration:[90,180]},MISTY:{fogMult:1.8,windBase:.2,rainRate:0,skyDarken:.05,mistCount:6,duration:[60,150]},LIGHT_RAIN:{fogMult:1.3,windBase:.6,rainRate:.3,skyDarken:.1,mistCount:2,duration:[60,120]},HEAVY_RAIN:{fogMult:1.6,windBase:1,rainRate:.8,skyDarken:.2,mistCount:3,duration:[45,100]},FOG_BANK:{fogMult:2.5,windBase:.15,rainRate:0,skyDarken:.1,mistCount:8,duration:[60,120]},LUMINOUS_STORM:{fogMult:1.4,windBase:1.5,rainRate:.6,skyDarken:.15,mistCount:2,duration:[40,90]}},qx={CLEAR:{MISTY:.4,LIGHT_RAIN:.3,FOG_BANK:.2,LUMINOUS_STORM:.1},MISTY:{CLEAR:.3,LIGHT_RAIN:.3,FOG_BANK:.3,HEAVY_RAIN:.1},LIGHT_RAIN:{CLEAR:.2,MISTY:.2,HEAVY_RAIN:.4,LUMINOUS_STORM:.2},HEAVY_RAIN:{LIGHT_RAIN:.4,LUMINOUS_STORM:.3,MISTY:.2,CLEAR:.1},FOG_BANK:{MISTY:.4,CLEAR:.3,LIGHT_RAIN:.2,LUMINOUS_STORM:.1},LUMINOUS_STORM:{HEAVY_RAIN:.3,MISTY:.3,CLEAR:.2,LIGHT_RAIN:.2}};let $i="CLEAR",Ji=null,or=0,ko=0,wa=0,Go=!1,Ho=0,Sa=Math.random()*Math.PI*2,Ea=0,ba=0;const qc=[],Zx=8;let Kh=!1,Ta=0,Vo=1,Aa=0,Wo=0,Ra=0;function Kx(){const i=qx[$i],t=Object.entries(i);let e=0;for(const[,s]of t)e+=s;let n=Math.random()*e;for(const[s,o]of t)if(n-=o,n<=0)return s;return t[0][0]}function Jx(){if(Kh)return;const i=document.createElement("canvas");i.width=128,i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(64,32,0,64,32,64);e.addColorStop(0,"rgba(255,255,255,0.5)"),e.addColorStop(.3,"rgba(255,255,255,0.25)"),e.addColorStop(.7,"rgba(255,255,255,0.06)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,64);const n=new bu(i),s=new we(40,14);for(let o=0;o<Zx;o++){const r=new Z({map:n,color:5596791,transparent:!0,opacity:0,side:Bt,depthWrite:!1}),a=new L(s,r);a.visible=!1,xt.add(a),qc.push({mesh:a,mat:r,active:!1,drift:Math.random()*Math.PI*2,speed:.3+Math.random()*.4,baseY:.8+Math.random()*2,wobble:Math.random()*Math.PI*2})}Kh=!0}function jx(){Jx();const i=sr.CLEAR.duration;or=i[0]+Math.random()*(i[1]-i[0])}function $x(i,t,e){if(Go)if(ko-=i,ko<=0){$i=Ji,Ji=null,Go=!1;const o=sr[$i].duration;or=o[0]+Math.random()*(o[1]-o[0]),Ho=0}else Ho=1-ko/wa;else or-=i,or<=0&&(Ji=Kx(),Go=!0,wa=30+Math.random()*60,ko=wa,Ho=0);const n=sr[$i];if(Go&&Ji){const o=sr[Ji],r=.5-.5*Math.cos(Ho*Math.PI),a=(c,l)=>c+(l-c)*r;Vo=a(n.fogMult,o.fogMult),Aa=a(n.rainRate,o.rainRate),Wo=a(n.skyDarken,o.skyDarken),Ra=a(n.mistCount,o.mistCount),nr=a(n.windBase,o.windBase),ir=r<.5?$i:Ji}else Vo=n.fogMult,Aa=n.rainRate,Wo=n.skyDarken,Ra=n.mistCount,nr=n.windBase,ir=$i;vs=ir==="LUMINOUS_STORM",Sa+=(Math.sin(t*.05)*.2+Math.sin(t*.13)*.1)*i,Ea-=i,Ea<=0&&(Ea=2+Math.random()*6,ba=Math.random()*.8),ba*=Math.pow(.3,i);const s=nr+ba;if(Mr=Math.cos(Sa)*s,yl=Math.sin(Sa)*s,xt.fog.density*=Vo,Wo>.001){const o=xt.background,r=1-Wo;o.r*=r,o.g*=r,o.b*=r}if(e){const o=Math.round(Ra);for(let r=0;r<qc.length;r++){const a=qc[r];if(r<o){a.active||(a.active=!0,a.mesh.visible=!0,a.drift=Math.random()*Math.PI*2);const c=10+Math.sin(t*.3+a.wobble)*8,l=a.drift+t*a.speed*.05;a.mesh.position.set(e.x+Math.cos(l)*c,a.baseY+Math.sin(t*.4+a.wobble)*.5,e.z+Math.sin(l)*c),a.mesh.rotation.y=l+Math.PI/2,a.drift+=Mr*i*.02;const h=.03+Vo*.012;a.mat.opacity+=(h-a.mat.opacity)*i*2}else a.active&&(a.mat.opacity-=i*.5,a.mat.opacity<=.005&&(a.active=!1,a.mesh.visible=!1,a.mat.opacity=0))}}return vs&&(Ta-=i,Ta<=0&&(Ta=1+Math.random()*4,Hn=1)),Hn*=Math.pow(.02,i),Hn<.01&&(Hn=0),Aa}const En=300,Xo=new Float32Array(En),Is=new Float32Array(En),Yo=new Float32Array(En),Ca=new Float32Array(En),Pa=new Float32Array(En),La=new Float32Array(En),yi=new Float32Array(En),sn=new Float32Array(En*6);let Ti=null,Zc=null;function Qx(){const i=new Ae;i.setAttribute("position",new Sn(sn,3)),Zc=new al({color:8952251,transparent:!0,opacity:.3,depthWrite:!1}),Ti=new zd(i,Zc),Ti.frustumCulled=!1,Ti.visible=!1,xt.add(Ti);for(let t=0;t<En;t++)yi[t]=0,hf(t)}function hf(i){const t=i*6;sn[t]=0,sn[t+1]=-100,sn[t+2]=0,sn[t+3]=0,sn[t+4]=-100,sn[t+5]=0}function tM(i,t,e,n,s){if(!Ti)return;const o=e>.01;if(Ti.visible=o,!o)return;Zc.opacity=Math.min(.15+e*.35,.5);const r=Math.floor(e*12*i*60);for(let c=0;c<r;c++){let l=-1;for(let f=0;f<En;f++)if(yi[f]<=0){l=f;break}if(l===-1)break;const h=Math.random()*Math.PI*2,u=Math.random()*30;Xo[l]=t.x+Math.cos(h)*u,Is[l]=12+Math.random()*10,Yo[l]=t.z+Math.sin(h)*u,Ca[l]=n*2+(Math.random()-.5)*.3,Pa[l]=-12-Math.random()*8,La[l]=s*2+(Math.random()-.5)*.3,yi[l]=2+Math.random()*1.5}const a=.06;for(let c=0;c<En;c++){if(yi[c]<=0)continue;if(yi[c]-=i,yi[c]<=0||Is[c]<.1){yi[c]=0,hf(c);continue}Xo[c]+=Ca[c]*i,Is[c]+=Pa[c]*i,Yo[c]+=La[c]*i;const l=c*6;sn[l]=Xo[c],sn[l+1]=Is[c],sn[l+2]=Yo[c],sn[l+3]=Xo[c]+Ca[c]*a,sn[l+4]=Is[c]+Pa[c]*a,sn[l+5]=Yo[c]+La[c]*a}Ti.geometry.attributes.position.needsUpdate=!0}let Kc=null,Ia=60;const eM={DUSK:"Dusk",NIGHT:"Night",DEEP_NIGHT:"Deep Night",DAWN:"Dawn"},nM={CLEAR:"Clear",MISTY:"Misty",LIGHT_RAIN:"Light Rain",HEAVY_RAIN:"Heavy Rain",FOG_BANK:"Fog",LUMINOUS_STORM:"Storm"};function iM(){Kc=document.getElementById("hud")}function sM(i,t){if(!Kc)return;Ia=Ia*.95+1/Math.max(i,.001)*.05;const e=un==="SEEK"?"Seek the orbs...":un==="RISING"?"The obelisk stirs...":un==="COMPLETE"?"Convergence!":"Luminaries",n=eM[lf]||"Night",s=nM[ir]||"Clear";Kc.innerHTML="<b>"+e+"</b> · "+n+" · "+s+" · FPS:"+Math.round(Ia)+"<br>Pos:"+t.x.toFixed(0)+","+t.z.toFixed(0)}let yr=null;function oM(){yr=document.getElementById("orb-hud")}function rM(){return yr}function aM(){const i=document.getElementById("overlay");i&&(i.style.opacity="0",setTimeout(()=>{try{i.remove()}catch{}},2500)),yr&&(yr.style.display="block")}const fe=[],Ke=[],le=[],$s=[],Gn=[],Qs=[],to=[],eo=[],no=[],Di=[],Jc=[],uf=[],wr=[],wl=[],Sr=[],Cn=[],on=[],rn=[];let Da=0,pi=null,Ds=0;function cM(){for(let i=0;i<ov;i++){let t,e,n=!1;for(let s=0;s<20;s++){const o=y()*6.28,r=5+y()*(Me-10);t=Math.cos(o)*r,e=Math.sin(o)*r,n=!0;for(let a=0;a<fe.length;a++){const c=fe[a].x-t,l=fe[a].z-e;if(c*c+l*l<9){n=!1;break}}if(n)break}if(n){const s=$v(t,e);fe.push({group:s,x:t,z:e})}}for(let i=0;i<rv;i++){const t=fe[Math.floor(y()*fe.length)],e=y()*6.28,n=1+y()*4;Ke.push(Qv(t.x+Math.cos(e)*n,t.z+Math.sin(e)*n))}for(let i=0;i<av;i++){const t=y()*6.28,e=8+y()*Me*.6;le.push(tx(Math.cos(t)*e,Math.sin(t)*e))}for(let i=0;i<cv;i++){const t=y()*6.28,e=10+y()*Me*.5;$s.push(hx(Math.cos(t)*e,3+y()*5,Math.sin(t)*e))}for(let i=0;i<lv;i++){const t=Ke[Math.floor(y()*Ke.length)],e=y()*6.28,n=1+y()*5;Gn.push(ux(t.x+Math.cos(e)*n,t.z+Math.sin(e)*n))}for(let i=0;i<hv;i++){const t=y()*6.28,e=12+y()*Me*.5;Qs.push(fx(Math.cos(t)*e,Math.sin(t)*e))}for(let i=0;i<uv;i++){const t=fe[Math.floor(y()*fe.length)];to.push(dx(t.x,2+y()*4,t.z))}for(let i=0;i<fv;i++){const t=y()*6.28,e=2+y()*(Me*.9);eo.push(ex(Math.cos(t)*e,Math.sin(t)*e,2+y()*2.5,25+Math.floor(y()*20)))}for(let i=0;i<gv;i++){let t,e,n=!1;for(let s=0;s<10;s++){const o=y()*6.28,r=3+y()*(Me*.85);t=Math.cos(o)*r,e=Math.sin(o)*r,n=!0;for(let a=0;a<fe.length;a++){const c=fe[a].x-t,l=fe[a].z-e;if(c*c+l*l<4){n=!1;break}}if(n)break}n&&uf.push(xx(t,e))}for(let i=0;i<dv;i++){const t=fe[Math.floor(y()*fe.length)],e=y()*6.28,n=1+y()*5;no.push(nx(t.x+Math.cos(e)*n,t.z+Math.sin(e)*n))}for(let i=0;i<pv;i++){const t=y()*6.28,e=3+y()*(Me*.7);Di.push(ix(Math.cos(t)*e,Math.sin(t)*e))}for(let i=0;i<mv;i++){const t=y()*6.28,e=4+y()*(Me*.8);Jc.push(sx(Math.cos(t)*e,Math.sin(t)*e))}for(let i=0;i<Cc;i++){let t,e,n=!1;for(let s=0;s<30;s++){const o=y()*6.28,r=20+y()*(Me*.6);t=Math.cos(o)*r,e=Math.sin(o)*r,n=!0;for(let a=0;a<rn.length;a++){const c=rn[a].x-t,l=rn[a].z-e;if(c*c+l*l<225){n=!1;break}}if(n)break}n&&rn.push(vx(t,e))}for(let i=0;i<Vu;i++){const t=y()*6.28,e=2+y()*3;wr.push(px(Math.cos(t)*e,1+y()*.5,Math.sin(t)*e))}for(let i=0;i<_v;i++){const t=y()*6.28,e=4+y()*(Me*.7);wl.push(cx(Math.cos(t)*e,Math.sin(t)*e))}for(let i=0;i<vv;i++){let t,e,n=!1;for(let s=0;s<20;s++){const o=y()*6.28,r=10+y()*(Me*.6);t=Math.cos(o)*r,e=Math.sin(o)*r,n=!0;for(let a=0;a<fe.length;a++){const c=fe[a].x-t,l=fe[a].z-e;if(c*c+l*l<36){n=!1;break}}if(n)break}n&&Sr.push(mx(t,e))}for(let i=0;i<xv;i++){const t=y()*6.28,e=5+y()*Me*.6;Cn.push(gx(Math.cos(t)*e,.5+y()*5,Math.sin(t)*e))}for(let i=0;i<yv;i++){let t,e,n=!1;for(let s=0;s<20;s++){const o=y()*6.28,r=8+y()*(Me*.6);t=Math.cos(o)*r,e=Math.sin(o)*r,n=!0;for(let a=0;a<fe.length;a++){const c=fe[a].x-t,l=fe[a].z-e;if(c*c+l*l<16){n=!1;break}}if(n)break}n&&on.push(_x(t,e))}}function ff(i,t){const e=1+nr*1.5,n=Mr*.03,s=yl*.03;for(let o=0;o<eo.length;o++){const r=eo[o],a=(Math.sin(t*.7+r.cx*.05)*.04+Math.sin(t*1.3+r.cz*.08)*.02)*e;r.mesh.rotation.z=a+n,r.mesh.rotation.x=Math.sin(t*.9+r.cz*.06)*.03*e+s}for(let o=0;o<no.length;o++){const r=no[o];r.group.rotation.z=Math.sin(t*.8+r.phase)*.03*e+n,r.group.rotation.x=Math.sin(t*.6+r.phase+1)*.02*e+s}for(let o=0;o<Di.length;o++){const r=Di[o],a=Math.sin(t*1+r.phase)*.5+.5;r.petalMat.emissiveIntensity=(.3+a*.5)*Te,r.group.rotation.z=Math.sin(t*.9+r.phase)*.04*e+n*.5}for(let o=0;o<Jc.length;o++){const r=Jc[o];r.group.rotation.z=Math.sin(t*1.1+r.phase)*r.swayAmp*e+n,r.group.rotation.x=Math.sin(t*.8+r.phase+2)*r.swayAmp*.5*e+s}}function df(i,t){for(let e=0;e<$s.length;e++){const n=$s[e],s=n.group,o=s.position.x,r=s.position.z;if(n._init||(n._init=!0,n._state="drift",n._stT=20+Math.random()*30,n._migrateAng=0,n._pulseSync=0),n._stT-=i,n._stT<=0)if(vs)n._state="display",n._stT=10+Math.random()*15;else{const h=Math.random();h<.5?(n._state="drift",n._stT=20+Math.random()*30):h<.75?(n._state="pulse",n._stT=8+Math.random()*12):(n._state="migrate",n._migrateAng=Math.random()*6.28,n._stT=15+Math.random()*20)}switch(vs&&n._state!=="display"&&(n._state="display",n._stT=10),n._state){case"drift":{n.driftAng+=i*.15;const h=8+Math.sin(t*.1+n.phase)*4,u=n.homeX+Math.cos(n.driftAng)*h,f=n.homeZ+Math.sin(n.driftAng)*h;s.position.x+=(u-o)*i*.3,s.position.z+=(f-r)*i*.3,s.position.y=n.floatY+Math.sin(t*n.wobble+n.phase)*1.5;break}case"pulse":{n.driftAng+=i*.08,s.position.x+=Math.cos(n.driftAng)*i*.3,s.position.z+=Math.sin(n.driftAng)*i*.3,s.position.y=n.floatY+Math.sin(t*n.wobble+n.phase)*1,n._pulseSync=Math.sin(t*2+Math.floor(e/2)*Math.PI)*.5+.5;break}case"migrate":{s.position.x+=Math.cos(n._migrateAng)*i*1,s.position.z+=Math.sin(n._migrateAng)*i*1,s.position.y=n.floatY+Math.sin(t*n.wobble+n.phase)*.8,Math.sqrt(s.position.x*s.position.x+s.position.z*s.position.z)>Me*.8&&(n._migrateAng+=Math.PI);break}case"display":{n.driftAng+=i*.4,s.position.x+=Math.cos(n.driftAng)*i*.8,s.position.z+=Math.sin(n.driftAng)*i*.8,s.position.y=n.floatY+Math.sin(t*2+n.phase)*2;break}}const a=Math.sin(t*1.2+n.phase)*.5+.5;let c=1,l=0;n._state==="pulse"?(c=1+n._pulseSync*1.5,l=n._pulseSync*.15):n._state==="display"&&(c=1.5+Math.sin(t*4+n.phase)*.8,l=.15),n.bellMat.emissiveIntensity=(.4+a*.8)*Te*c,n.bellMat.opacity=.35+a*.25+l,s.rotation.y+=i*.2;for(let h=2;h<s.children.length;h++)s.children[h].rotation.x=Math.sin(t*2+h+n.phase)*.15,s.children[h].rotation.z=Math.sin(t*1.5+h*.7+n.phase)*.1}}function pf(i,t){const e=Re.ShiftLeft||Re.ShiftRight||ao;for(let n=0;n<Gn.length;n++){const s=Gn[n],o=s.group,r=o.position.x,a=o.position.z,c=r-ot.pos.x,l=a-ot.pos.z,h=c*c+l*l,u=Math.sqrt(h);if(s._init||(s._init=!0,s._followT=0,s._scaredT=0,s._huddleTarget=-1),s.state!=="startled"&&s.state!=="following"&&s.state!=="huddle"&&u<(e?3.5:2)&&(s.state="startled",s._scaredT=.6+Math.random()*.5,s.wanderAng=Math.atan2(c,l),s.hopTimer=0),vs&&s.state!=="startled"&&s.state!=="huddle"){let p=1/0,g=-1;for(let x=0;x<Gn.length;x++){if(x===n)continue;const m=Gn[x].group.position.x-r,d=Gn[x].group.position.z-a,M=m*m+d*d;M<p&&(p=M,g=x)}g>=0&&p>1&&(s.state="huddle",s._huddleTarget=g)}switch(_s>8&&u<12&&s.state==="idle"&&Math.random()<.001&&(s.state="following",s._followT=10+Math.random()*10),s.state){case"idle":{s.idleTimer-=i,o.position.y=Math.sin(t*2+s.phase)*.02,o.rotation.y+=Math.sin(t*.5+s.phase)*i*.3,s.idleTimer<=0&&(s.state="hop",s.wanderAng+=(Math.random()-.5)*1.5,s.hopTimer=0);break}case"hop":{s.hopTimer+=i;const g=s.hopTimer/1.2;if(g>=1)s.state="idle",s.idleTimer=1.5+Math.random()*3,o.position.y=0;else{o.position.y=Math.sin(g*Math.PI)*.3,o.position.x+=Math.sin(s.wanderAng)*s.speed*i,o.position.z+=Math.cos(s.wanderAng)*s.speed*i;const x=1-Math.sin(g*Math.PI)*.15,m=1+Math.sin(g*Math.PI)*.2;o.scale.set(x,m,x),o.rotation.y=s.wanderAng}break}case"startled":{s._scaredT-=i,s.hopTimer+=i*1.5;const p=Math.min(s.hopTimer/.8,1);o.position.y=Math.sin(p*Math.PI)*.5,o.position.x+=Math.sin(s.wanderAng)*s.speed*2*i,o.position.z+=Math.cos(s.wanderAng)*s.speed*2*i,o.scale.set(.85,1.3,.85),s._scaredT<=0&&(s.state="idle",s.idleTimer=3+Math.random()*3,o.position.y=0,o.scale.set(1,1,1));break}case"following":{if(s._followT-=i,u>15||_s<3||s._followT<=0){s.state="idle",s.idleTimer=2;break}if(s.wanderAng=Math.atan2(ot.pos.x-r,ot.pos.z-a),u>3){s.hopTimer+=i;const p=s.hopTimer%1.5/1.5;o.position.y=Math.sin(p*Math.PI)*.2,o.position.x+=Math.sin(s.wanderAng)*s.speed*.4*i,o.position.z+=Math.cos(s.wanderAng)*s.speed*.4*i}else o.position.y=Math.sin(t*3+s.phase)*.03;o.rotation.y=s.wanderAng;break}case"huddle":{if(!vs){s.state="idle",s.idleTimer=2;break}const p=Gn[s._huddleTarget];if(p){const g=p.group.position.x-r,x=p.group.position.z-a,m=Math.sqrt(g*g+x*x);m>.5&&(o.position.x+=g/m*s.speed*.5*i,o.position.z+=x/m*s.speed*.5*i)}o.rotation.z=Math.sin(t*8)*.05,o.position.y=0;break}}Math.sqrt(o.position.x*o.position.x+o.position.z*o.position.z)>Me*.85&&(s.wanderAng+=Math.PI)}}function mf(i,t){const e=Re.ShiftLeft||Re.ShiftRight||ao;for(let n=0;n<Qs.length;n++){const s=Qs[n],o=s.group,r=o.position.x,a=o.position.z,c=r-ot.pos.x,l=a-ot.pos.z,h=Math.sqrt(c*c+l*l),u=Math.atan2(c,l),f=e?18:12,p=e?10:Cv;s._init||(s._init=!0,s._stT=0,s._drinkTgt=null,s._zigTimer=0,s._zigDir=1),s.state!=="flee"&&s.state!=="alert"&&s.state!=="watching"&&(h<p?(s.state="flee",s.wanderAng=u,s.fleeTimer=2.5+Math.random()*2,s._zigTimer=0):h<f&&(s.state="alert",s._stT=1+Math.random()*1.5));let g=s.speed,x=!1;switch(s.state){case"walk":{if(x=!0,s.walkTimer-=i,s.walkTimer<=0){const v=Math.random();if(v<.25)s.state="pause",s.pauseTimer=2+Math.random()*3;else if(v<.4)s.state="graze",s._stT=3+Math.random()*4;else if(v<.5&&on.length>0){s.state="drink",s._stT=8;let _=1/0;for(let b=0;b<on.length;b++){const E=on[b].x-r,T=on[b].z-a,R=E*E+T*T;R<_&&(_=R,s._drinkTgt=on[b])}}else v<.55?(s.state="rest",s._stT=5+Math.random()*5):(s.wanderAng+=(Math.random()-.5)*1.2,s.walkTimer=3+Math.random()*5)}if((r-s.homeX)*(r-s.homeX)+(a-s.homeZ)*(a-s.homeZ)>400){const v=Math.atan2(s.homeX-r,s.homeZ-a);s.wanderAng+=(v-s.wanderAng)*i*.5}break}case"pause":{s.pauseTimer-=i,s.headLook=Math.sin(t*.6)*.4,s.pauseTimer<=0&&(s.state="walk",s.walkTimer=3+Math.random()*5);break}case"graze":{s._stT-=i,s.headBob=-.5,s._stT<=0&&(s.state="walk",s.walkTimer=2+Math.random()*4,s.headBob=0);break}case"drink":{if(s._stT-=i,s._drinkTgt){const M=s._drinkTgt.x-r,v=s._drinkTgt.z-a;Math.sqrt(M*M+v*v)>2?(s.wanderAng=Math.atan2(M,v),x=!0,g=s.speed*.7):s.headBob=-.6}s._stT<=0&&(s.state="walk",s.walkTimer=3+Math.random()*4,s.headBob=0,s._drinkTgt=null);break}case"rest":{s._stT-=i,o.position.y=Math.max(-.3,o.position.y-i*.5),s._stT<=0&&(s.state="walk",s.walkTimer=2+Math.random()*3);break}case"alert":{s._stT-=i,h<p?(s.state="flee",s.wanderAng=u,s.fleeTimer=2.5+Math.random()*2):s._stT<=0&&(h<f*1.2?(s.state="watching",s._stT=3+Math.random()*3):(s.state="walk",s.walkTimer=2+Math.random()*3));break}case"watching":{s._stT-=i,x=!0,g=s.speed*.3,s.wanderAng=u,h<p?(s.state="flee",s.wanderAng=u,s.fleeTimer=2.5+Math.random()*2):(h>f*1.5||s._stT<=0)&&(s.state="walk",s.walkTimer=2+Math.random()*4);break}case"flee":{x=!0,g=s.speed*Pv,s.fleeTimer-=i,s._zigTimer-=i,s._zigTimer<=0&&(s._zigDir*=-1,s._zigTimer=.4+Math.random()*.4),s.wanderAng=u+s._zigDir*.3,(s.fleeTimer<=0||h>f*2)&&(s.state="walk",s.walkTimer=3+Math.random()*5);break}}if(x&&(o.position.x+=Math.sin(s.wanderAng)*g*i,o.position.z+=Math.cos(s.wanderAng)*g*i,s.legCycle+=i*g*3),Math.sqrt(o.position.x*o.position.x+o.position.z*o.position.z)>Me*.9&&(s.wanderAng=Math.atan2(-o.position.x,-o.position.z)),s.state!=="rest"&&o.position.y<0&&(o.position.y=Math.min(0,o.position.y+i*.5)),o.rotation.y=s.wanderAng,s.state==="alert"||s.state==="watching"){const M=u-s.wanderAng;s.headLook+=(M*.5-s.headLook)*i*3}const d=s.headBob||0;s.neckPivot.rotation.x+=(d-s.neckPivot.rotation.x)*i*3,s.neckPivot.rotation.y+=(s.headLook-s.neckPivot.rotation.y)*i*4,x&&s.state!=="graze"&&s.state!=="drink"&&(s.neckPivot.rotation.x+=Math.sin(s.legCycle*2)*.05);for(let M=0;M<s.legPivots.length;M++){const v=s.legPivots[M];if(x){const _=v.isFront?0:Math.PI,b=v.side>0?Math.PI:0,E=Math.sin(s.legCycle+_+b)*.4*(g/s.speed);v.upper.rotation.x=E,v.lower.rotation.x=Math.max(0,-E*.6)}else s.state==="rest"&&o.position.y<-.1?(v.upper.rotation.x+=(.8-v.upper.rotation.x)*i*2,v.lower.rotation.x+=(1-v.lower.rotation.x)*i*2):(v.upper.rotation.x*=.9,v.lower.rotation.x*=.9)}s.tailPivot.rotation.x=Math.sin(t*1.5+s.phase)*.15,s.state==="flee"&&(s.tailPivot.rotation.x+=.3),s.state==="alert"?s.tailPivot.rotation.z=Math.sin(t*6)*.1:s.tailPivot.rotation.z*=.9,s.mat.emissiveIntensity=(.3+Math.sin(t*.8+s.phase)*.2)*Te,s.headLook*=.98}}function gf(i,t){for(let e=0;e<to.length;e++){const n=to[e],s=n.group,o=s.position.x,r=s.position.z;if(n._init||(n._init=!0,n._state="patrol",n._stT=0,n._attractTarget=null,n._restTree=null),n._state==="patrol"){if(Math.random()<.002){let u=1/0,f=null;for(let p=0;p<le.length;p++){const g=le[p].x-o,x=le[p].z-r,m=g*g+x*x;m<900&&m<u&&(u=m,f=le[p])}f&&(n._state="attracted",n._attractTarget=f,n._stT=6+Math.random()*8)}if(Math.random()<.001){let u=1/0,f=null;for(let p=0;p<fe.length;p++){const g=fe[p].x-o,x=fe[p].z-r,m=g*g+x*x;m<400&&m<u&&(u=m,f=fe[p])}f&&(n._state="rest",n._restTree=f,n._stT=4+Math.random()*6)}}switch(n._state){case"patrol":{n.orbitAng+=i*.4;const u=n.centerX+Math.cos(n.orbitAng)*n.orbitR,f=n.centerZ+Math.sin(n.orbitAng)*n.orbitR;s.position.x+=(u-o)*i*1.5,s.position.z+=(f-r)*i*1.5,s.position.y=n.floatY+Math.sin(t*.7+n.phase)*.8,s.rotation.y=n.orbitAng+Math.PI/2;break}case"attracted":{if(n._stT-=i,!n._attractTarget||n._stT<=0){n._state="patrol",n._attractTarget=null;break}n.orbitAng+=i*.8;const u=n._attractTarget,f=Math.max(.5,n._stT*.4),p=u.x+Math.cos(n.orbitAng)*f,g=u.z+Math.sin(n.orbitAng)*f;s.position.x+=(p-o)*i*2,s.position.z+=(g-r)*i*2,s.position.y+=(2-s.position.y)*i*.5,s.rotation.y=n.orbitAng+Math.PI/2;break}case"rest":{if(n._stT-=i,!n._restTree||n._stT<=0){n._state="patrol",n._restTree=null,n.centerX=s.position.x,n.centerZ=s.position.z;break}const u=n._restTree,f=u.x+.5-o,p=u.z+.5-r,g=Math.sqrt(f*f+p*p);g>.3&&(s.position.x+=f/g*i*2,s.position.z+=p/g*i*2),s.position.y+=(2.5-s.position.y)*i*1.5,s.rotation.y=Math.atan2(f,p);break}}const a=n._state==="rest"?.05:.4,c=Math.sin(t*n.flapSpeed+n.phase)*a;for(let u=0;u<s._wingPivots.length;u++){const f=s._wingPivots[u];f.pivot.rotation.z=c*f.side}const l=Math.sin(t*1.5+n.phase)*.5+.5,h=n._state==="attracted"?.4:0;n.wingMat.emissiveIntensity=(.5+l*.6+h)*Te,n.wingMat.opacity=.45+l*.25}}function lM(i,t){const e=Re.ShiftLeft||Re.ShiftRight||ao;let n=null;if(_s>5&&(un==="SEEK"||un==="RISING")){let s=1/0;for(let o=0;o<rn.length;o++){if(rn[o].found)continue;const r=rn[o].x-ot.pos.x,a=rn[o].z-ot.pos.z,c=r*r+a*a;c<s&&(s=c,n=rn[o])}}for(let s=0;s<wr.length;s++){const o=wr[s],r=t*.5+o.phase+s/Vu*6.28,a=e?4+s*2:1.5+s*.8,c=e?3+s:1.2+Math.sin(t*.7+o.phase)*.5;if(o.targetX=ot.pos.x+Math.cos(r)*a,o.targetY=ot.pos.y-Js+c,o.targetZ=ot.pos.z+Math.sin(r)*a,s===0&&n){const p=Math.min((_s-5)/3,.6);o.targetX+=(n.x-ot.pos.x)*p,o.targetZ+=(n.z-ot.pos.z)*p,o.targetY+=.5}const l=e?.8:2.5;o.velX+=(o.targetX-o.group.position.x)*l*i,o.velY+=(o.targetY-o.group.position.y)*l*i,o.velZ+=(o.targetZ-o.group.position.z)*l*i,o.velX*=.92,o.velY*=.92,o.velZ*=.92,o.group.position.x+=o.velX*i*4,o.group.position.y+=o.velY*i*4,o.group.position.z+=o.velZ*i*4;const h=Math.sin(t*2+o.phase)*.5+.5;o.glowMat.opacity=.3+h*.4,o.hazeMat.opacity=.08+h*.12;const u=o.group.children[3],f=t*3+o.phase;u.position.set(Math.cos(f)*.18,Math.sin(f*1.5)*.06,Math.sin(f)*.18)}}function hM(i,t){for(let e=0;e<Sr.length;e++){const n=Sr[e],s=n.x-ot.pos.x,o=n.z-ot.pos.z,a=s*s+o*o<(Rc+.5)*(Rc+.5),c=a?1:0;n.glowIntensity+=(c-n.glowIntensity)*i*3,n.discMat.opacity=n.glowIntensity*.25*(.6+Math.sin(t*2+n.phase)*.4),n.mushMat.emissiveIntensity=(.2+n.glowIntensity*.8)*Te,a&&ot.vel.y>0&&ot.vel.y<=gr+.5&&(ot.vel.y=gr+Tv,n.glowIntensity=1.5)}}function uM(i,t){for(let e=0;e<Cn.length;e++){const n=Cn[e];if(n.popped){if(n.popTimer-=i,n.popTimer<=0){n.popped=!1,n.group.visible=!0;const h=y()*6.28,u=8+y()*Me*.5;n.homeX=Math.cos(h)*u,n.homeZ=Math.sin(h)*u,n.floatY=.5+y()*4,n.group.position.set(n.homeX,n.floatY,n.homeZ)}continue}n.driftAng+=i*.2;const s=n.homeX+Math.sin(n.driftAng)*3,o=n.homeZ+Math.cos(n.driftAng*.7)*3;n.group.position.x+=(s-n.group.position.x)*i*.5,n.group.position.z+=(o-n.group.position.z)*i*.5,n.group.position.y=n.floatY+Math.sin(t*.6+n.phase)*n.bobAmp;const r=(t*.1+n.phase)%1;n.shellMat.color.setRGB(Math.sin(r*6.28)*.15+.7,Math.sin(r*6.28+2.09)*.15+.7,Math.sin(r*6.28+4.19)*.15+.8),n.shellMat.opacity=.18+Math.sin(t*1.5+n.phase)*.08;const a=n.group.position.x-ot.pos.x,c=n.group.position.y-ot.pos.y,l=n.group.position.z-ot.pos.z;a*a+c*c+l*l<zh*zh*n.sc*n.sc&&(n.popped=!0,n.popTimer=8+Math.random()*8,n.group.visible=!1,zx(n.group.position.x,n.group.position.y,n.group.position.z,6))}}function fM(i,t){for(let e=0;e<on.length;e++){const n=on[e];for(let o=0;o<n.pads.length;o++)n.pads[o].mesh.position.y=.05+Math.sin(t*.8+n.pads[o].phase)*.015;n.waterMat.emissiveIntensity=(.15+Math.sin(t*1+n.phase)*.1)*Te;const s=Math.sin(t*1.2+n.phase)*.5+.5;n.flMat.emissiveIntensity=(.3+s*.5)*Te}}function dM(i,t){if(Da-=i,Da<=0){Da=.5;for(let s=0;s<le.length;s++){const o=le[s],r=o.x-ot.pos.x,a=o.z-ot.pos.z;if(r*r+a*a<36){pi={x:o.x,z:o.z},Ds=0;break}}}if(!pi)return;if(Ds+=i*12,Ds>30){pi=null,Ds=0;return}const e=Ds,n=4;for(let s=0;s<Ke.length;s++){const o=Ke[s],r=o.x-pi.x,a=o.z-pi.z,c=Math.sqrt(r*r+a*a);if(Math.abs(c-e)<n){const l=1-Math.abs(c-e)/n;o.capMat.emissiveIntensity=Math.max(o.capMat.emissiveIntensity,(o.base+l*2)*Te)}}for(let s=0;s<Di.length;s++){const o=Di[s],r=o.group.position.x-pi.x,a=o.group.position.z-pi.z,c=Math.sqrt(r*r+a*a);if(Math.abs(c-e)<n){const l=1-Math.abs(c-e)/n;o.petalMat.emissiveIntensity=Math.max(o.petalMat.emissiveIntensity,(.3+l*1.5)*Te)}}}function pM(i,t){const e=ot.pos.x,n=ot.pos.z;for(let s=0;s<Di.length;s++){const o=Di[s],r=o.group.position.x,a=o.group.position.z,c=r-e,l=a-n,u=c*c+l*l<16?1:0;o._react=o._react||0,o._react+=(u-o._react)*i*(u>0?4:1.5);const f=1+o._react*.15;o.group.scale.set(f,1+o._react*.05,f),o.petalMat.emissiveIntensity+=o._react*.6*Te}for(let s=0;s<Ke.length;s++){const o=Ke[s],r=o.x-e,a=o.z-n,l=r*r+a*a<4?1:0;o._touch=o._touch||0,o._touch+=(l-o._touch)*i*(l>0?6:1.5),o.capMat.emissiveIntensity+=o._touch*1.5*Te;const h=1+o._touch*.08;o.group.scale.set(h,1+o._touch*.04,h)}for(let s=0;s<eo.length;s++){const o=eo[s],r=o.cx-e,a=o.cz-n,c=r*r+a*a;if(c<25&&c>.01){const l=Math.sqrt(c),h=(1-l/5)*.08;o.mesh.rotation.z+=r/l*h,o.mesh.rotation.x+=a/l*h}}for(let s=0;s<no.length;s++){const o=no[s],r=o.group.position.x,a=o.group.position.z,c=r-e,l=a-n,u=c*c+l*l<2.25?.65:1;o._curl=o._curl===void 0?1:o._curl,o._curl+=(u-o._curl)*i*(u<1?4:1.5),o.group.scale.set(1+(1-o._curl)*.3,o._curl,1+(1-o._curl)*.3)}for(let s=0;s<le.length;s++){const o=le[s],r=o.x-e,a=o.z-n;if(r*r+a*a<36)for(let c=0;c<le.length;c++){if(s===c)continue;const l=le[c],h=o.x-l.x,u=o.z-l.z,f=h*h+u*u;if(f<400){const p=(1-Math.sqrt(f)/20)*.8;l.mat.emissiveIntensity+=p*Te,l.light&&(l.light.intensity+=p*.3*Te)}}}}let qo="EXPLORE",Ua=0,Na=0;function mM(i,t){let e=!1;for(let r=0;r<le.length;r++){const a=le[r].x-ot.pos.x,c=le[r].z-ot.pos.z;if(a*a+c*c<64){e=!0;break}}qo=e?"NEAR_CRYSTAL":"EXPLORE",Ua+=i;const n=qo==="NEAR_CRYSTAL"?.08:.25,s=qo==="NEAR_CRYSTAL"?120:100;if(Ua>n&&(Ua=0,rf(0,t)<s))if(qo==="NEAR_CRYSTAL")for(let a=0;a<le.length;a++){const c=le[a].x-ot.pos.x,l=le[a].z-ot.pos.z;c*c+l*l<100&&Oc(le[a].x,1,le[a].z,3+Math.random()*4)}else{const a=Math.random()*6.28,c=5+Math.random()*25;Oc(ot.pos.x+Math.cos(a)*c,0,ot.pos.z+Math.sin(a)*c,6+Math.random()*10)}if(Na+=i,Na>.2){Na=0;for(let r=0;r<Ke.length;r++){const a=Ke[r],c=a.x-ot.pos.x,l=a.z-ot.pos.z;c*c+l*l<200&&Math.random()<.15&&Px(a.x,.6*a.group.scale.x,a.z)}}for(let r=0;r<Ke.length;r++){const a=Ke[r],c=Math.sin(t*a.speed+a.phase)*.5+.5;a.capMat.emissiveIntensity=a.base*(.5+c*.8)*Te}for(let r=0;r<le.length;r++){const a=le[r],c=Math.sin(t*.6+a.phase)*.5+.5;a.mat.emissiveIntensity=(1+c*1.5)*Te,a.group.children[0].rotation.y+=i*.15,a.light&&(a.light.intensity=(.3+c*.4)*Te)}const o=[];for(let r=0;r<le.length;r++){const a=le[r],c=a.x-ot.pos.x,l=a.z-ot.pos.z;o.push({idx:r,dist:c*c+l*l})}o.sort((r,a)=>r.dist-a.dist);for(let r=0;r<_i.length;r++)if(r<o.length&&o[r].dist<2500){const a=le[o[r].idx],c=Math.sin(t*.6+a.phase)*.5+.5;_i[r].position.set(a.x,1.5,a.z),_i[r].intensity=(1.5+c*2)*Te,_i[r].distance=16,_i[r].color.setHex(B.crystal)}else _i[r].intensity=0;df(i,t),pf(i,t),mf(i,t),gf(i,t),$u(i,t),ff(i,t),lM(i,t),lx(wl,i,t,ot.pos),hM(i,t),uM(i,t),fM(i,t),af(i,t,ot.pos),ax(i,t),Fx(i),Bx(i),dM(i),pM(i),Gx(i,t)}let Ne=0,jc=!1;function gM(){jc||(jc=!0,Hv(!0),aM())}function _f(){requestAnimationFrame(_f);const i=Math.min(Wu.getDelta(),.1);Ne+=i,Yx(i);const t=$x(i,Ne,ot.pos);if(tM(i,ot.pos,t,Mr,yl),Hn>0&&(ml.intensity+=Hn*2.5,xt.background.r=Math.min(1,xt.background.r+Hn*.3),xt.background.g=Math.min(1,xt.background.g+Hn*.3),xt.background.b=Math.min(1,xt.background.b+Hn*.4)),!jc){Ve.position.set(0,Js,0),Ve.rotation.order="YXZ",Ve.rotation.y+=i*.08,Ve.rotation.x=0;for(let e=0;e<Ke.length;e++){const n=Ke[e],s=Math.sin(Ne*n.speed+n.phase)*.5+.5;n.capMat.emissiveIntensity=n.base*(.5+s*.8)*Te}for(let e=0;e<le.length;e++){const n=le[e];n.mat.emissiveIntensity=(1+Math.sin(Ne*.6+n.phase)*.5*1.5+.75)*Te}df(i,Ne),pf(i,Ne),mf(i,Ne),gf(i,Ne),$u(i,Ne),ff(i,Ne),af(i,Ne,ot.pos);for(let e=0;e<Cn.length;e++)Cn[e].popped||(Cn[e].group.position.y=Cn[e].floatY+Math.sin(Ne*.6+Cn[e].phase)*Cn[e].bobAmp);for(let e=0;e<on.length;e++)for(let n=0;n<on[e].pads.length;n++)on[e].pads[n].mesh.position.y=.05+Math.sin(Ne*.8+on[e].pads[n].phase)*.015;for(let e=0;e<rn.length;e++){const n=rn[e],s=Math.sin(Ne*1.5+n.phase)*.5+.5;n.group.position.y=1+Math.sin(Ne*.8+n.phase)*.3,n.glowMat.opacity=.3+s*.4}Gh();return}jv(i),mM(i,Ne),rf(i,Ne),Lx(i),Ve.position.copy(ot.pos),Ve.position.y+=Qu,Ve.rotation.order="YXZ",Ve.rotation.y=js,Ve.rotation.x=Ci,sM(i,ot.pos),Gh()}try{qv(),Zv(),Xx({scene:xt,moon:fn,moon2:dn,hemiLight:ml,playerLight:gl,skyGroup:en}),cM(),Kv(fe,uf),Jv(Nx),jx(),Qx(),Rx(150),Cx(60),kv(),Ix(Mv),Ux(20),ox(40),Ox(30),Sx(),Tx(),Ax(),kx({orbs:rn,obeliskGroup:Mx(),obeliskMat:yx(),obeliskGlowMat:wx(),moatMesh:Ex(),moatMat:bx(),rainbowArcs:Fc,player:ot,makeLaser:Hx,orbHudEl:rM(),deers:Qs,puffs:Gn,jellies:$s,moths:to}),iM(),oM(),Gv(gM);for(let i=0;i<50;i++){const t=Math.random()*6.28,e=3+Math.random()*Me*.7;Oc(Math.cos(t)*e,0,Math.sin(t)*e,8+Math.random()*12)}console.log("✓ Init: trees="+fe.length+" mush="+Ke.length+" crystals="+le.length+" orbs="+rn.length+" creatures="+($s.length+Gn.length+Qs.length+to.length)+" wisps="+wr.length+" dandelions="+wl.length+" fairyRings="+Sr.length+" bubbles="+Cn.length+" ponds="+on.length+" scene="+xt.children.length),_f()}catch(i){console.error("INIT FAILED:",i),document.body.innerHTML='<div style="color:red;padding:30px;font-family:monospace"><h2>Init Failed</h2><pre>'+(i.stack||i.message)+"</pre></div>"}
