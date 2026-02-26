(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tl="172",bf=0,Il=1,Tf=2,jh=1,Qh=2,zn=3,si=0,We=1,Ht=2,Vn=0,es=1,za=2,Dl=3,Ul=4,Af=5,wi=100,Rf=101,Cf=102,Pf=103,Lf=104,If=200,Df=201,Uf=202,Nf=203,Ba=204,ka=205,Ff=206,Of=207,zf=208,Bf=209,kf=210,Gf=211,Hf=212,Vf=213,Wf=214,Ga=0,Ha=1,Va=2,cs=3,Wa=4,Xa=5,Ya=6,qa=7,tu=0,Xf=1,Yf=2,ii=0,qf=1,Zf=2,Kf=3,eu=4,$f=5,Jf=6,jf=7,nu=300,ls=301,hs=302,Za=303,Ka=304,Tr=306,ar=1e3,Ei=1001,$a=1002,xn=1003,Qf=1004,po=1005,Rn=1006,Nr=1007,bi=1008,Yn=1009,iu=1010,su=1011,qs=1012,el=1013,Pi=1014,Gn=1015,Wn=1016,nl=1017,il=1018,us=1020,ou=35902,ru=1021,au=1022,vn=1023,cu=1024,lu=1025,ns=1026,fs=1027,hu=1028,sl=1029,uu=1030,ol=1031,rl=1033,Ko=33776,$o=33777,Jo=33778,jo=33779,Ja=35840,ja=35841,Qa=35842,tc=35843,ec=36196,nc=37492,ic=37496,sc=37808,oc=37809,rc=37810,ac=37811,cc=37812,lc=37813,hc=37814,uc=37815,fc=37816,dc=37817,pc=37818,mc=37819,gc=37820,_c=37821,Qo=36492,vc=36494,xc=36495,fu=36283,Mc=36284,yc=36285,wc=36286,td=3200,ed=3201,du=0,nd=1,ti="",Ve="srgb",ds="srgb-linear",cr="linear",oe="srgb",Fi=7680,Nl=519,id=512,sd=513,od=514,pu=515,rd=516,ad=517,cd=518,ld=519,Fl=35044,Ol="300 es",Hn=2e3,lr=2001;class xs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fr=Math.PI/180,Sc=180/Math.PI;function Ms(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Yt(i,t,e){return Math.max(t,Math.min(e,i))}function hd(i,t){return(i%t+t)%t}function Or(i,t,e){return(1-e)*i+e*t}function Es(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,s,o,r,a,c,l){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l)}set(t,e,n,s,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],M=s[1],_=s[4],v=s[7],b=s[2],E=s[5],T=s[8];return o[0]=r*x+a*M+c*b,o[3]=r*m+a*_+c*E,o[6]=r*p+a*v+c*T,o[1]=l*x+h*M+u*b,o[4]=l*m+h*_+u*E,o[7]=l*p+h*v+u*T,o[2]=f*x+d*M+g*b,o[5]=f*m+d*_+g*E,o[8]=f*p+d*v+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,f=a*c-h*o,d=l*o-r*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*r)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*o-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(zr.makeScale(t,e)),this}rotate(t){return this.premultiply(zr.makeRotation(-t)),this}translate(t,e){return this.premultiply(zr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zr=new Gt;function mu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ud(){const i=hr("canvas");return i.style.display="block",i}const zl={};function Ji(i){i in zl||(zl[i]=!0,console.warn(i))}function fd(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function dd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Bl=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kl=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function md(){const i={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===oe&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===oe&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?cr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ds]:{primaries:t,whitePoint:n,transfer:cr,toXYZ:Bl,fromXYZ:kl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:Bl,fromXYZ:kl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),i}const ee=md();function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Oi;class gd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Oi===void 0&&(Oi=hr("canvas")),Oi.width=t.width,Oi.height=t.height;const n=Oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=hr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Xn(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _d=0;class gu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Ms(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Br(s[r].image)):o.push(Br(s[r]))}else o=Br(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Br(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vd=0;class Xe extends xs{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=Ei,s=Ei,o=Rn,r=bi,a=vn,c=Yn,l=Xe.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Ms(),this.name="",this.source=new gu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ar:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case $a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ar:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case $a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=nu;Xe.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,s=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,v=(d+1)/2,b=(p+1)/2,E=(h+f)/4,T=(u+x)/4,C=(g+m)/4;return _>v&&_>b?_<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(_),s=E/n,o=T/n):v>b?v<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),n=E/s,o=C/s):b<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(b),n=T/o,s=C/o),this.set(n,s,o,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xd extends xs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Xe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new gu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends xd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class _u extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Md extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class so{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=o[r+0],d=o[r+1],g=o[r+2],x=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==f||l!==d||h!==g){let m=1-a;const p=c*f+l*d+h*g+u*x,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const b=Math.sqrt(_),E=Math.atan2(b,p*M);m=Math.sin(m*E)/b,a=Math.sin(a*E)/b}const v=a*M;if(c=c*m+f*v,l=l*m+d*v,h=h*m+g*v,u=u*m+x*v,m===1-a){const b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=o[r],f=o[r+1],d=o[r+2],g=o[r+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(o/2),f=c(n/2),d=c(s/2),g=c(o/2);switch(r){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(o-l)*d,this._z=(r-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(o-l)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(r-s)/d,this._x=(o+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-s*a,this._w=r*h-n*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=r*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=o*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*n),h=2*(a*e-o*s),u=2*(o*n-r*e);return this.x=e+c*l+r*u-a*h,this.y=n+c*h+a*l-o*u,this.z=s+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kr.copy(this).projectOnVector(t),this.sub(kr)}reflect(t){return this.sub(kr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kr=new D,Gl=new so;class oo{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,pn):pn.fromBufferAttribute(o,r),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mo.copy(n.boundingBox)),mo.applyMatrix4(t.matrixWorld),this.union(mo)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bs),go.subVectors(this.max,bs),zi.subVectors(t.a,bs),Bi.subVectors(t.b,bs),ki.subVectors(t.c,bs),qn.subVectors(Bi,zi),Zn.subVectors(ki,Bi),ai.subVectors(zi,ki);let e=[0,-qn.z,qn.y,0,-Zn.z,Zn.y,0,-ai.z,ai.y,qn.z,0,-qn.x,Zn.z,0,-Zn.x,ai.z,0,-ai.x,-qn.y,qn.x,0,-Zn.y,Zn.x,0,-ai.y,ai.x,0];return!Gr(e,zi,Bi,ki,go)||(e=[1,0,0,0,1,0,0,0,1],!Gr(e,zi,Bi,ki,go))?!1:(_o.crossVectors(qn,Zn),e=[_o.x,_o.y,_o.z],Gr(e,zi,Bi,ki,go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Dn=[new D,new D,new D,new D,new D,new D,new D,new D],pn=new D,mo=new oo,zi=new D,Bi=new D,ki=new D,qn=new D,Zn=new D,ai=new D,bs=new D,go=new D,_o=new D,ci=new D;function Gr(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){ci.fromArray(i,o);const a=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),c=t.dot(ci),l=e.dot(ci),h=n.dot(ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const yd=new oo,Ts=new D,Hr=new D;class Ar{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):yd.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);const e=Ts.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ts,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(Hr)),this.expandByPoint(Ts.copy(t.center).sub(Hr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new D,Vr=new D,vo=new D,Kn=new D,Wr=new D,xo=new D,Xr=new D;class vu{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Vr.copy(t).add(e).multiplyScalar(.5),vo.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(Vr);const o=t.distanceTo(e)*.5,r=-this.direction.dot(vo),a=Kn.dot(this.direction),c=-Kn.dot(vo),l=Kn.lengthSq(),h=Math.abs(1-r*r);let u,f,d,g;if(h>0)if(u=r*c-a,f=r*a-c,g=o*h,u>=0)if(f>=-g)if(f<=g){const x=1/h;u*=x,f*=x,d=u*(u+r*f+2*a)+f*(r*u+f+2*c)+l}else f=o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*c)+l;else f=-o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-r*o+a)),f=u>0?-o:Math.min(Math.max(-o,-c),o),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-o,-c),o),d=f*(f+2*c)+l):(u=Math.max(0,-(r*o+a)),f=u>0?o:Math.min(Math.max(-o,-c),o),d=-u*u+f*(f+2*c)+l);else f=r>0?-o:o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Vr).addScaledVector(vo,f),d}intersectSphere(t,e){Un.subVectors(t.center,this.origin);const n=Un.dot(this.direction),s=Un.dot(Un)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(o=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,s,o){Wr.subVectors(e,t),xo.subVectors(n,t),Xr.crossVectors(Wr,xo);let r=this.direction.dot(Xr),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Kn.subVectors(this.origin,t);const c=a*this.direction.dot(xo.crossVectors(Kn,xo));if(c<0)return null;const l=a*this.direction.dot(Wr.cross(Kn));if(l<0||c+l>r)return null;const h=-a*Kn.dot(Xr);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,s,o,r,a,c,l,h,u,f,d,g,x,m){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l,h,u,f,d,g,x,m)}set(t,e,n,s,o,r,a,c,l,h,u,f,d,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Gi.setFromMatrixColumn(t,0).length(),o=1/Gi.setFromMatrixColumn(t,1).length(),r=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const f=r*h,d=r*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=g+d*l,e[10]=r*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,g=l*h,x=l*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=r*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,g=l*h,x=l*u;e[0]=f-x*a,e[4]=-r*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=r*h,e[9]=x-f*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const f=r*h,d=r*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const f=r*c,d=r*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){const f=r*c,d=r*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=r*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wd,t,Sd)}lookAt(t,e,n){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),$n.crossVectors(n,je),$n.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),$n.crossVectors(n,je)),$n.normalize(),Mo.crossVectors(je,$n),s[0]=$n.x,s[4]=Mo.x,s[8]=je.x,s[1]=$n.y,s[5]=Mo.y,s[9]=je.y,s[2]=$n.z,s[6]=Mo.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],_=n[7],v=n[11],b=n[15],E=s[0],T=s[4],C=s[8],S=s[12],y=s[1],P=s[5],U=s[9],N=s[13],G=s[2],W=s[6],q=s[10],J=s[14],Y=s[3],at=s[7],ut=s[11],Tt=s[15];return o[0]=r*E+a*y+c*G+l*Y,o[4]=r*T+a*P+c*W+l*at,o[8]=r*C+a*U+c*q+l*ut,o[12]=r*S+a*N+c*J+l*Tt,o[1]=h*E+u*y+f*G+d*Y,o[5]=h*T+u*P+f*W+d*at,o[9]=h*C+u*U+f*q+d*ut,o[13]=h*S+u*N+f*J+d*Tt,o[2]=g*E+x*y+m*G+p*Y,o[6]=g*T+x*P+m*W+p*at,o[10]=g*C+x*U+m*q+p*ut,o[14]=g*S+x*N+m*J+p*Tt,o[3]=M*E+_*y+v*G+b*Y,o[7]=M*T+_*P+v*W+b*at,o[11]=M*C+_*U+v*q+b*ut,o[15]=M*S+_*N+v*J+b*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+o*c*u-s*l*u-o*a*f+n*l*f+s*a*d-n*c*d)+x*(+e*c*d-e*l*f+o*r*f-s*r*d+s*l*h-o*c*h)+m*(+e*l*u-e*a*d-o*r*u+n*r*d+o*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*r*u-n*r*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],M=u*m*l-x*f*l+x*c*d-a*m*d-u*c*p+a*f*p,_=g*f*l-h*m*l-g*c*d+r*m*d+h*c*p-r*f*p,v=h*x*l-g*u*l+g*a*d-r*x*d-h*a*p+r*u*p,b=g*u*c-h*x*c-g*a*f+r*x*f+h*a*m-r*u*m,E=e*M+n*_+s*v+o*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=M*T,t[1]=(x*f*o-u*m*o-x*s*d+n*m*d+u*s*p-n*f*p)*T,t[2]=(a*m*o-x*c*o+x*s*l-n*m*l-a*s*p+n*c*p)*T,t[3]=(u*c*o-a*f*o-u*s*l+n*f*l+a*s*d-n*c*d)*T,t[4]=_*T,t[5]=(h*m*o-g*f*o+g*s*d-e*m*d-h*s*p+e*f*p)*T,t[6]=(g*c*o-r*m*o-g*s*l+e*m*l+r*s*p-e*c*p)*T,t[7]=(r*f*o-h*c*o+h*s*l-e*f*l-r*s*d+e*c*d)*T,t[8]=v*T,t[9]=(g*u*o-h*x*o-g*n*d+e*x*d+h*n*p-e*u*p)*T,t[10]=(r*x*o-g*a*o+g*n*l-e*x*l-r*n*p+e*a*p)*T,t[11]=(h*a*o-r*u*o-h*n*l+e*u*l+r*n*d-e*a*d)*T,t[12]=b*T,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*m+e*u*m)*T,t[14]=(g*a*s-r*x*s-g*n*c+e*x*c+r*n*m-e*a*m)*T,t[15]=(r*u*s-h*a*s+h*n*c-e*u*c-r*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,f=o*l,d=o*h,g=o*u,x=r*h,m=r*u,p=a*u,M=c*l,_=c*h,v=c*u,b=n.x,E=n.y,T=n.z;return s[0]=(1-(x+p))*b,s[1]=(d+v)*b,s[2]=(g-_)*b,s[3]=0,s[4]=(d-v)*E,s[5]=(1-(f+p))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+_)*T,s[9]=(m-M)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Gi.set(s[0],s[1],s[2]).length();const r=Gi.set(s[4],s[5],s[6]).length(),a=Gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],mn.copy(this);const l=1/o,h=1/r,u=1/a;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,e.setFromRotationMatrix(mn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Hn){const c=this.elements,l=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(a===Hn)d=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===lr)d=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Hn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(r-o),f=(e+t)*l,d=(n+s)*h;let g,x;if(a===Hn)g=(r+o)*u,x=-2*u;else if(a===lr)g=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Gi=new D,mn=new de,wd=new D(0,0,0),Sd=new D(1,1,1),$n=new D,Mo=new D,je=new D,Hl=new de,Vl=new so;class Cn{constructor(t=0,e=0,n=0,s=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Yt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class xu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ed=0;const Wl=new D,Hi=new so,Nn=new de,yo=new D,As=new D,bd=new D,Td=new so,Xl=new D(1,0,0),Yl=new D(0,1,0),ql=new D(0,0,1),Zl={type:"added"},Ad={type:"removed"},Vi={type:"childadded",child:null},Yr={type:"childremoved",child:null};class Ie extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new D,e=new Cn,n=new so,s=new D(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Gt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(Xl,t)}rotateY(t){return this.rotateOnAxis(Yl,t)}rotateZ(t){return this.rotateOnAxis(ql,t)}translateOnAxis(t,e){return Wl.copy(t).applyQuaternion(this.quaternion),this.position.add(Wl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xl,t)}translateY(t){return this.translateOnAxis(Yl,t)}translateZ(t){return this.translateOnAxis(ql,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yo.copy(t):yo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(As,yo,this.up):Nn.lookAt(yo,As,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zl),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ad),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zl),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,bd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,Td,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),f=r(t.skeletons),d=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ie.DEFAULT_UP=new D(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new D,Fn=new D,qr=new D,On=new D,Wi=new D,Xi=new D,Kl=new D,Zr=new D,Kr=new D,$r=new D,Jr=new re,jr=new re,Qr=new re;class _n{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){gn.subVectors(s,e),Fn.subVectors(n,e),qr.subVectors(t,e);const r=gn.dot(gn),a=gn.dot(Fn),c=gn.dot(qr),l=Fn.dot(Fn),h=Fn.dot(qr),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,g=(r*h-a*c)*f;return o.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,s,o,r,a,c){return this.getBarycoord(t,e,n,s,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,On.x),c.addScaledVector(r,On.y),c.addScaledVector(a,On.z),c)}static getInterpolatedAttribute(t,e,n,s,o,r){return Jr.setScalar(0),jr.setScalar(0),Qr.setScalar(0),Jr.fromBufferAttribute(t,e),jr.fromBufferAttribute(t,n),Qr.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Jr,o.x),r.addScaledVector(jr,o.y),r.addScaledVector(Qr,o.z),r}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),Fn.subVectors(t,e),gn.cross(Fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),gn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return _n.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Wi.subVectors(s,n),Xi.subVectors(o,n),Zr.subVectors(t,n);const c=Wi.dot(Zr),l=Xi.dot(Zr);if(c<=0&&l<=0)return e.copy(n);Kr.subVectors(t,s);const h=Wi.dot(Kr),u=Xi.dot(Kr);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(Wi,r);$r.subVectors(t,o);const d=Wi.dot($r),g=Xi.dot($r);if(g>=0&&d<=g)return e.copy(o);const x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Xi,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Kl.subVectors(o,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Kl,a);const p=1/(m+x+f);return r=x*p,a=f*p,e.copy(n).addScaledVector(Wi,r).addScaledVector(Xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},wo={h:0,s:0,l:0};function ta(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class _t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=hd(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=ta(r,o,t+1/3),this.g=ta(r,o,t),this.b=ta(r,o,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=Mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return ee.fromWorkingColorSpace(ze.copy(this),t),Math.round(Yt(ze.r*255,0,255))*65536+Math.round(Yt(ze.g*255,0,255))*256+Math.round(Yt(ze.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(ze.copy(this),e);const n=ze.r,s=ze.g,o=ze.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case n:c=(s-o)/u+(s<o?6:0);break;case s:c=(o-n)/u+2;break;case o:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Ve){ee.fromWorkingColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,s=ze.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(wo);const n=Or(Jn.h,wo.h,e),s=Or(Jn.s,wo.s,e),o=Or(Jn.l,wo.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new _t;_t.NAMES=Mu;let Rd=0;class ys extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Ms(),this.name="",this.type="Material",this.blending=es,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ba,this.blendDst=ka,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ba&&(n.blendSrc=this.blendSrc),this.blendDst!==ka&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $ extends ys{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new D,So=new lt;class yn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fl,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)So.fromBufferAttribute(this,e),So.applyMatrix3(t),this.setXY(e,So.x,So.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Es(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Es(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Es(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Es(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),o=qe(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fl&&(t.usage=this.usage),t}}class yu extends yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wu extends yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qt extends yn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Cd=0;const cn=new de,ea=new Ie,Yi=new D,Qe=new oo,Rs=new oo,Pe=new D;class Ce extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mu(t)?wu:yu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Gt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return ea.lookAt(t),ea.updateMatrix(),this.applyMatrix4(ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new qt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Qe.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(Qe.min,Rs.min),Qe.expandByPoint(Pe),Pe.addVectors(Qe.max,Rs.max),Qe.expandByPoint(Pe)):(Qe.expandByPoint(Rs.min),Qe.expandByPoint(Rs.max))}Qe.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Pe.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Pe.fromBufferAttribute(a,l),c&&(Yi.fromBufferAttribute(t,l),Pe.add(Yi)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new D,c[C]=new D;const l=new D,h=new D,u=new D,f=new lt,d=new lt,g=new lt,x=new D,m=new D;function p(C,S,y){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),f.fromBufferAttribute(o,C),d.fromBufferAttribute(o,S),g.fromBufferAttribute(o,y),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),a[C].add(x),a[S].add(x),a[y].add(x),c[C].add(m),c[S].add(m),c[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,S=M.length;C<S;++C){const y=M[C],P=y.start,U=y.count;for(let N=P,G=P+U;N<G;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const _=new D,v=new D,b=new D,E=new D;function T(C){b.fromBufferAttribute(s,C),E.copy(b);const S=a[C];_.copy(S),_.sub(b.multiplyScalar(b.dot(S))).normalize(),v.crossVectors(E,S);const P=v.dot(c[C])<0?-1:1;r.setXYZW(C,_.x,_.y,_.z,P)}for(let C=0,S=M.length;C<S;++C){const y=M[C],P=y.start,U=y.count;for(let N=P,G=P+U;N<G;N+=3)T(t.getX(N+0)),T(t.getX(N+1)),T(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new D,o=new D,r=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new yn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $l=new de,li=new vu,Eo=new Ar,Jl=new D,bo=new D,To=new D,Ao=new D,na=new D,Ro=new D,jl=new D,Co=new D;class L extends Ie{constructor(t=new Ce,e=new $){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Ro.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(na.fromBufferAttribute(u,t),r?Ro.addScaledVector(na,h):Ro.addScaledVector(na.sub(e),h))}e.add(Ro)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(o),li.copy(t.ray).recast(t.near),!(Eo.containsPoint(li.origin)===!1&&(li.intersectSphere(Eo,Jl)===null||li.origin.distanceToSquared(Jl)>(t.far-t.near)**2))&&($l.copy(o).invert(),li.copy(t.ray).applyMatrix4($l),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=r[m.materialIndex],M=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,b=_;v<b;v+=3){const E=a.getX(v),T=a.getX(v+1),C=a.getX(v+2);s=Po(this,p,t,n,l,h,u,E,T,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const M=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);s=Po(this,r,t,n,l,h,u,M,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=r[m.materialIndex],M=Math.max(m.start,d.start),_=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,b=_;v<b;v+=3){const E=v,T=v+1,C=v+2;s=Po(this,p,t,n,l,h,u,E,T,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const M=m,_=m+1,v=m+2;s=Po(this,r,t,n,l,h,u,M,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Pd(i,t,e,n,s,o,r,a){let c;if(t.side===We?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,t.side===si,a),c===null)return null;Co.copy(a),Co.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Co);return l<e.near||l>e.far?null:{distance:l,point:Co.clone(),object:i}}function Po(i,t,e,n,s,o,r,a,c,l){i.getVertexPosition(a,bo),i.getVertexPosition(c,To),i.getVertexPosition(l,Ao);const h=Pd(i,t,e,n,bo,To,Ao,jl);if(h){const u=new D;_n.getBarycoord(jl,bo,To,Ao,u),s&&(h.uv=_n.getInterpolatedAttribute(s,a,c,l,u,new lt)),o&&(h.uv1=_n.getInterpolatedAttribute(o,a,c,l,u,new lt)),r&&(h.normal=_n.getInterpolatedAttribute(r,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new D,materialIndex:0};_n.getNormal(bo,To,Ao,f.normal),h.face=f,h.barycoord=u}return h}class ro extends Ce{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(u,2));function g(x,m,p,M,_,v,b,E,T,C,S){const y=v/T,P=b/C,U=v/2,N=b/2,G=E/2,W=T+1,q=C+1;let J=0,Y=0;const at=new D;for(let ut=0;ut<q;ut++){const Tt=ut*P-N;for(let Bt=0;Bt<W;Bt++){const ce=Bt*y-U;at[x]=ce*M,at[m]=Tt*_,at[p]=G,l.push(at.x,at.y,at.z),at[x]=0,at[m]=0,at[p]=E>0?1:-1,h.push(at.x,at.y,at.z),u.push(Bt/T),u.push(1-ut/C),J+=1}}for(let ut=0;ut<C;ut++)for(let Tt=0;Tt<T;Tt++){const Bt=f+Tt+W*ut,ce=f+Tt+W*(ut+1),tt=f+(Tt+1)+W*(ut+1),ct=f+(Tt+1)+W*ut;c.push(Bt,ce,ct),c.push(ce,tt,ct),Y+=6}a.addGroup(d,Y,S),d+=Y,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ps(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ge(i){const t={};for(let e=0;e<i.length;e++){const n=ps(i[e]);for(const s in n)t[s]=n[s]}return t}function Ld(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Su(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const ur={clone:ps,merge:Ge};var Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ze extends ys{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=Ld(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Eu extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new D,Ql=new lt,th=new lt;class tn extends Eu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Sc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sc*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,Ql,th),e.subVectors(th,Ql)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qi=-90,Zi=1;class Ud extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(qi,Zi,t,e);s.layers=this.layers,this.add(s);const o=new tn(qi,Zi,t,e);o.layers=this.layers,this.add(o);const r=new tn(qi,Zi,t,e);r.layers=this.layers,this.add(r);const a=new tn(qi,Zi,t,e);a.layers=this.layers,this.add(a);const c=new tn(qi,Zi,t,e);c.layers=this.layers,this.add(c);const l=new tn(qi,Zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bu extends Xe{constructor(t,e,n,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ls,super(t,e,n,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nd extends Mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new bu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ro(5,5,5),o=new Ze({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Vn});o.uniforms.tEquirect.value=e;const r=new L(s,o),a=e.minFilter;return e.minFilter===bi&&(e.minFilter=Rn),new Ud(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}class al{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new _t(t),this.density=e}clone(){return new al(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Fd extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ia=new D,Od=new D,zd=new Gt;class mi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ia.subVectors(n,e).cross(Od.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ia),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zd.getNormalMatrix(t),s=this.coplanarPoint(ia).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new Ar,Lo=new D;class cl{constructor(t=new mi,e=new mi,n=new mi,s=new mi,o=new mi,r=new mi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],M=s[13],_=s[14],v=s[15];if(n[0].setComponents(c-o,f-l,m-d,v-p).normalize(),n[1].setComponents(c+o,f+l,m+d,v+p).normalize(),n[2].setComponents(c+r,f+h,m+g,v+M).normalize(),n[3].setComponents(c-r,f-h,m-g,v-M).normalize(),n[4].setComponents(c-a,f-u,m-x,v-_).normalize(),e===Hn)n[5].setComponents(c+a,f+u,m+x,v+_).normalize();else if(e===lr)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Lo.x=s.normal.x>0?t.max.x:t.min.x,Lo.y=s.normal.y>0?t.max.y:t.min.y,Lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tu extends ys{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fr=new D,dr=new D,eh=new de,Cs=new vu,Io=new Ar,sa=new D,nh=new D;class Bd extends Ie{constructor(t=new Ce,e=new Tu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)fr.fromBufferAttribute(e,s-1),dr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=fr.distanceTo(dr);t.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(s),Io.radius+=o,t.ray.intersectsSphere(Io)===!1)return;eh.copy(s).invert(),Cs.copy(t.ray).applyMatrix4(eh);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let x=d,m=g-1;x<m;x+=l){const p=h.getX(x),M=h.getX(x+1),_=Do(this,t,Cs,c,p,M);_&&e.push(_)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(d),p=Do(this,t,Cs,c,x,m);p&&e.push(p)}}else{const d=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let x=d,m=g-1;x<m;x+=l){const p=Do(this,t,Cs,c,x,x+1);p&&e.push(p)}if(this.isLineLoop){const x=Do(this,t,Cs,c,g-1,d);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Do(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(fr.fromBufferAttribute(r,s),dr.fromBufferAttribute(r,o),e.distanceSqToSegment(fr,dr,sa,nh)>n)return;sa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(sa);if(!(c<t.near||c>t.far))return{distance:c,point:nh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const ih=new D,sh=new D;class kd extends Bd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)ih.fromBufferAttribute(e,s),sh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ih.distanceTo(sh);t.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ae extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}class ll extends Xe{constructor(t,e,n,s,o,r,a,c,l){super(t,e,n,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Au extends Xe{constructor(t,e,n,s,o,r,a,c,l,h=ns){if(h!==ns&&h!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=Pi),n===void 0&&h===fs&&(n=us),super(null,s,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:xn,this.minFilter=c!==void 0?c:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(o-1);const h=n[s],f=n[s+1]-h,d=(r-h)/f;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new lt:new D);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,s=[],o=[],r=[],a=new D,c=new de;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new D)}o[0]=new D,r[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Yt(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(c.makeRotationAxis(a,g))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(Yt(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hl extends Ln{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new lt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Gd extends hl{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function ul(){let i=0,t=0,e=0,n=0;function s(o,r,a,c){i=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let f=(r-o)/l-(a-o)/(l+h)+(a-r)/h,d=(a-r)/h-(c-r)/(h+u)+(c-a)/u;f*=h,d*=h,s(r,a,f,d)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Uo=new D,oa=new ul,ra=new ul,aa=new ul;class Ec extends Ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(Uo.subVectors(s[0],s[1]).add(s[0]),l=Uo);const u=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Uo.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Uo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),oa.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,x,m),ra.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,x,m),aa.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(oa.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),ra.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),aa.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(oa.calc(c),ra.calc(c),aa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function oh(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*i+e}function Hd(i,t){const e=1-i;return e*e*t}function Vd(i,t){return 2*(1-i)*i*t}function Wd(i,t){return i*i*t}function Vs(i,t,e,n){return Hd(i,t)+Vd(i,e)+Wd(i,n)}function Xd(i,t){const e=1-i;return e*e*e*t}function Yd(i,t){const e=1-i;return 3*e*e*i*t}function qd(i,t){return 3*(1-i)*i*i*t}function Zd(i,t){return i*i*i*t}function Ws(i,t,e,n,s){return Xd(i,t)+Yd(i,e)+qd(i,n)+Zd(i,s)}class Ru extends Ln{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ws(t,s.x,o.x,r.x,a.x),Ws(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Kd extends Ln{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ws(t,s.x,o.x,r.x,a.x),Ws(t,s.y,o.y,r.y,a.y),Ws(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cu extends Ln{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pu extends Ln{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lu extends Ln{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Vs(t,s.x,o.x,r.x),Vs(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Iu extends Ln{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Vs(t,s.x,o.x,r.x),Vs(t,s.y,o.y,r.y),Vs(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Du extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(oh(a,c.x,l.x,h.x,u.x),oh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new lt().fromArray(s))}return this}}var bc=Object.freeze({__proto__:null,ArcCurve:Gd,CatmullRomCurve3:Ec,CubicBezierCurve:Ru,CubicBezierCurve3:Kd,EllipseCurve:hl,LineCurve:Cu,LineCurve3:Pu,QuadraticBezierCurve:Lu,QuadraticBezierCurve3:Iu,SplineCurve:Du});class $d extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new bc[s.type]().fromJSON(s))}return this}}class pr extends $d{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Cu(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new Lu(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new Ru(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Du(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,o,r,a,c),this}absellipse(t,e,n,s,o,r,a,c){const l=new hl(t,e,n,s,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Le extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new D,h=new lt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[f]/t+1)/2,h.y=(r[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class wt extends Ce{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],f=[],d=[];let g=0;const x=[],m=n/2;let p=0;M(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(d,2));function M(){const v=new D,b=new D;let E=0;const T=(e-t)/n;for(let C=0;C<=o;C++){const S=[],y=C/o,P=y*(e-t)+t;for(let U=0;U<=s;U++){const N=U/s,G=N*c+a,W=Math.sin(G),q=Math.cos(G);b.x=P*W,b.y=-y*n+m,b.z=P*q,u.push(b.x,b.y,b.z),v.set(W,T,q).normalize(),f.push(v.x,v.y,v.z),d.push(N,1-y),S.push(g++)}x.push(S)}for(let C=0;C<s;C++)for(let S=0;S<o;S++){const y=x[S][C],P=x[S+1][C],U=x[S+1][C+1],N=x[S][C+1];(t>0||S!==0)&&(h.push(y,P,N),E+=3),(e>0||S!==o-1)&&(h.push(P,U,N),E+=3)}l.addGroup(p,E,0),p+=E}function _(v){const b=g,E=new lt,T=new D;let C=0;const S=v===!0?t:e,y=v===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const P=g;for(let U=0;U<=s;U++){const G=U/s*c+a,W=Math.cos(G),q=Math.sin(G);T.x=S*q,T.y=m*y,T.z=S*W,u.push(T.x,T.y,T.z),f.push(0,y,0),E.x=W*.5+.5,E.y=q*.5*y+.5,d.push(E.x,E.y),g++}for(let U=0;U<s;U++){const N=b+U,G=P+U;v===!0?h.push(G,G+1,N):h.push(G+1,G,N),C+=3}l.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pn extends wt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Pn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fl extends Ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),l(n),h(),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(o.slice(),3)),this.setAttribute("uv",new qt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const _=new D,v=new D,b=new D;for(let E=0;E<e.length;E+=3)d(e[E+0],_),d(e[E+1],v),d(e[E+2],b),c(_,v,b,M)}function c(M,_,v,b){const E=b+1,T=[];for(let C=0;C<=E;C++){T[C]=[];const S=M.clone().lerp(v,C/E),y=_.clone().lerp(v,C/E),P=E-C;for(let U=0;U<=P;U++)U===0&&C===E?T[C][U]=S:T[C][U]=S.clone().lerp(y,U/P)}for(let C=0;C<E;C++)for(let S=0;S<2*(E-C)-1;S++){const y=Math.floor(S/2);S%2===0?(f(T[C][y+1]),f(T[C+1][y]),f(T[C][y])):(f(T[C][y+1]),f(T[C+1][y+1]),f(T[C+1][y]))}}function l(M){const _=new D;for(let v=0;v<o.length;v+=3)_.x=o[v+0],_.y=o[v+1],_.z=o[v+2],_.normalize().multiplyScalar(M),o[v+0]=_.x,o[v+1]=_.y,o[v+2]=_.z}function h(){const M=new D;for(let _=0;_<o.length;_+=3){M.x=o[_+0],M.y=o[_+1],M.z=o[_+2];const v=m(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;r.push(v,1-b)}g(),u()}function u(){for(let M=0;M<r.length;M+=6){const _=r[M+0],v=r[M+2],b=r[M+4],E=Math.max(_,v,b),T=Math.min(_,v,b);E>.9&&T<.1&&(_<.2&&(r[M+0]+=1),v<.2&&(r[M+2]+=1),b<.2&&(r[M+4]+=1))}}function f(M){o.push(M.x,M.y,M.z)}function d(M,_){const v=M*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function g(){const M=new D,_=new D,v=new D,b=new D,E=new lt,T=new lt,C=new lt;for(let S=0,y=0;S<o.length;S+=9,y+=6){M.set(o[S+0],o[S+1],o[S+2]),_.set(o[S+3],o[S+4],o[S+5]),v.set(o[S+6],o[S+7],o[S+8]),E.set(r[y+0],r[y+1]),T.set(r[y+2],r[y+3]),C.set(r[y+4],r[y+5]),b.copy(M).add(_).add(v).divideScalar(3);const P=m(b);x(E,y+0,M,P),x(T,y+2,_,P),x(C,y+4,v,P)}}function x(M,_,v,b){b<0&&M.x===1&&(r[_]=M.x-1),v.x===0&&v.z===0&&(r[_]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.vertices,t.indices,t.radius,t.details)}}class Tc extends pr{constructor(t){super(t),this.uuid=Ms(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new pr().fromJSON(s))}return this}}const Jd={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=Uu(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,u,f,d;if(n&&(o=np(i,t,o,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Zs(o,r,e,a,c,d,0),r}};function Uu(i,t,e,n,s){let o,r;if(s===dp(i,t,e,n)>0)for(o=t;o<e;o+=n)r=rh(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=rh(o,i[o],i[o+1],r);return r&&Rr(r,r.next)&&($s(r),r=r.next),r}function Li(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Rr(e,e.next)||ge(e.prev,e,e.next)===0)){if($s(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Zs(i,t,e,n,s,o,r){if(!i)return;!r&&o&&ap(i,n,s,o);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,o?Qd(i,n,s,o):jd(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),$s(i),i=l.next,a=l.next;continue}if(i=l,i===a){r?r===1?(i=tp(Li(i),t,e),Zs(i,t,e,n,s,o,2)):r===2&&ep(i,t,e,n,s,o):Zs(Li(i),t,e,n,s,o,1);break}}}function jd(i){const t=i.prev,e=i,n=i.next;if(ge(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=s<o?s<r?s:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,f=s>o?s>r?s:r:o>r?o:r,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Qi(s,a,o,c,r,l,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qd(i,t,e,n){const s=i.prev,o=i,r=i.next;if(ge(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,u=o.y,f=r.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=Ac(d,g,t,e,n),M=Ac(x,m,t,e,n);let _=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=M;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==r&&Qi(a,h,c,u,l,f,_.x,_.y)&&ge(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&Qi(a,h,c,u,l,f,v.x,v.y)&&ge(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==r&&Qi(a,h,c,u,l,f,_.x,_.y)&&ge(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&Qi(a,h,c,u,l,f,v.x,v.y)&&ge(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function tp(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!Rr(s,o)&&Nu(s,n,n.next,o)&&Ks(s,o)&&Ks(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),$s(n),$s(n.next),n=i=o),n=n.next}while(n!==i);return Li(n)}function ep(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&hp(r,a)){let c=Fu(r,a);r=Li(r,r.next),c=Li(c,c.next),Zs(r,t,e,n,s,o,0),Zs(c,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function np(i,t,e,n){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:i.length,l=Uu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(lp(l));for(s.sort(ip),o=0;o<s.length;o++)e=sp(s[o],e);return e}function ip(i,t){return i.x-t.x}function sp(i,t){const e=op(i,t);if(!e)return t;const n=Fu(e,i);return Li(n,n.next),Li(e,e.next)}function op(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&Qi(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),Ks(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&rp(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function rp(i,t){return ge(i.prev,i,t.prev)<0&&ge(t.next,i,i.next)<0}function ap(i,t,e,n){let s=i;do s.z===0&&(s.z=Ac(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,cp(s)}function cp(i){let t,e,n,s,o,r,a,c,l=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,l*=2}while(r>1);return i}function Ac(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function lp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Qi(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function hp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!up(i,t)&&(Ks(i,t)&&Ks(t,i)&&fp(i,t)&&(ge(i.prev,i,t.prev)||ge(i,t.prev,t))||Rr(i,t)&&ge(i.prev,i,i.next)>0&&ge(t.prev,t,t.next)>0)}function ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Rr(i,t){return i.x===t.x&&i.y===t.y}function Nu(i,t,e,n){const s=Fo(ge(i,t,e)),o=Fo(ge(i,t,n)),r=Fo(ge(e,n,i)),a=Fo(ge(e,n,t));return!!(s!==o&&r!==a||s===0&&No(i,e,t)||o===0&&No(i,n,t)||r===0&&No(e,i,n)||a===0&&No(e,t,n))}function No(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Fo(i){return i>0?1:i<0?-1:0}function up(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Nu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ks(i,t){return ge(i.prev,i,i.next)<0?ge(i,t,i.next)>=0&&ge(i,i.prev,t)>=0:ge(i,t,i.prev)<0||ge(i,i.next,t)<0}function fp(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Fu(i,t){const e=new Rc(i.i,i.x,i.y),n=new Rc(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function rh(i,t,e,n){const s=new Rc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $s(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Rc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function dp(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Xs{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Xs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];ah(t),ch(n,t);let r=t.length;e.forEach(ah);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,ch(n,e[c]);const a=Jd.triangulate(n,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function ah(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ch(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ai extends fl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ai(t.radius,t.detail)}}class ye extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const M=p*f-r;for(let _=0;_<l;_++){const v=_*u-o;g.push(v,-M,0),x.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const _=M+l*p,v=M+l*(p+1),b=M+1+l*(p+1),E=M+1+l*p;d.push(_,v,E),d.push(v,b,E)}this.setIndex(d),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.width,t.height,t.widthSegments,t.heightSegments)}}class mr extends Ce{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const f=(e-t)/s,d=new D,g=new lt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const p=o+m/n*r;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){const m=x*(n+1);for(let p=0;p<n;p++){const M=p+m,_=M,v=M+n+1,b=M+n+2,E=M+1;a.push(_,v,E),a.push(v,b,E)}}this.setIndex(a),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class gr extends Ce{constructor(t=new Tc([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(o,3)),this.setAttribute("uv",new qt(r,2));function l(h){const u=s.length/3,f=h.extractPoints(e);let d=f.shape;const g=f.holes;Xs.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const M=g[m];Xs.isClockWise(M)===!0&&(g[m]=M.reverse())}const x=Xs.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const M=g[m];d=d.concat(M)}for(let m=0,p=d.length;m<p;m++){const M=d[m];s.push(M.x,M.y,0),o.push(0,0,1),r.push(M.x,M.y)}for(let m=0,p=x.length;m<p;m++){const M=x[m],_=M[0]+u,v=M[1]+u,b=M[2]+u;n.push(_,v,b),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return pp(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new gr(n,t.curveSegments)}}function pp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class K extends Ce{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new D,f=new D,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const M=[],_=p/n;let v=0;p===0&&r===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){const E=b/e;u.x=-t*Math.cos(s+E*o)*Math.sin(r+_*a),u.y=t*Math.cos(r+_*a),u.z=t*Math.sin(s+E*o)*Math.sin(r+_*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(E+v,1-_),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const _=h[p][M+1],v=h[p][M],b=h[p+1][M],E=h[p+1][M+1];(p!==0||r>0)&&d.push(_,v,E),(p!==n-1||c<Math.PI)&&d.push(v,b,E)}this.setIndex(d),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new K(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class we extends Ce{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],c=[],l=[],h=new D,u=new D,f=new D;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const x=g/s*o,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,M=(s+1)*d+g;r.push(x,m,M),r.push(m,p,M)}this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ms extends Ce{constructor(t=new Iu(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new D,c=new D,l=new lt;let h=new D;const u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(d,2));function x(){for(let _=0;_<e;_++)m(_);m(o===!1?e:0),M(),p()}function m(_){h=t.getPointAt(_/e,h);const v=r.normals[_],b=r.binormals[_];for(let E=0;E<=s;E++){const T=E/s*Math.PI*2,C=Math.sin(T),S=-Math.cos(T);c.x=S*v.x+C*b.x,c.y=S*v.y+C*b.y,c.z=S*v.z+C*b.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let v=1;v<=s;v++){const b=(s+1)*(_-1)+(v-1),E=(s+1)*_+(v-1),T=(s+1)*_+v,C=(s+1)*(_-1)+v;g.push(b,E,C),g.push(E,T,C)}}function M(){for(let _=0;_<=e;_++)for(let v=0;v<=s;v++)l.x=_/e,l.y=v/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ms(new bc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Q extends ys{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=du,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mp extends ys{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gp extends ys{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class dl extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class _p extends dl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ca=new de,lh=new D,hh=new D;class Ou{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cl,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;lh.setFromMatrixPosition(t.matrixWorld),e.position.copy(lh),hh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hh),e.updateMatrixWorld(),ca.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ca)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const uh=new de,Ps=new D,la=new D;class vp extends Ou{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Ps.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ps),la.copy(n.position),la.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(la),n.updateMatrixWorld(),s.makeTranslation(-Ps.x,-Ps.y,-Ps.z),uh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uh)}}class Ui extends dl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class pl extends Eu{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class xp extends Ou{constructor(){super(new pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cr extends dl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new xp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Mp extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class zu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=fh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function fh(){return performance.now()}function dh(i,t,e,n){const s=yp(n);switch(e){case ru:return i*t;case cu:return i*t;case lu:return i*t*2;case hu:return i*t/s.components*s.byteLength;case sl:return i*t/s.components*s.byteLength;case uu:return i*t*2/s.components*s.byteLength;case ol:return i*t*2/s.components*s.byteLength;case au:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case rl:return i*t*4/s.components*s.byteLength;case Ko:case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jo:case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:case tc:return Math.max(i,16)*Math.max(t,8)/4;case Ja:case Qa:return Math.max(i,8)*Math.max(t,8)/2;case ec:case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case hc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case uc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qo:case vc:case xc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fu:case Mc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case yc:case wc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yp(i){switch(i){case Yn:case iu:return{byteLength:1,components:1};case qs:case su:case Wn:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case Pi:case el:case Gn:return{byteLength:4,components:1};case ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tl);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bu(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function wp(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const x=u[d];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}var Sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ep=`#ifdef USE_ALPHAHASH
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
#endif`,bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cp=`#ifdef USE_AOMAP
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
#endif`,Pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lp=`#ifdef USE_BATCHING
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
#endif`,Ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Np=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fp=`#ifdef USE_IRIDESCENCE
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
#endif`,Op=`#ifdef USE_BUMPMAP
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
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yp=`#define PI 3.141592653589793
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
} // validated`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zp=`vec3 transformedNormal = objectNormal;
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
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",t0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h0=`#ifdef USE_GRADIENTMAP
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
}`,u0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p0=`uniform bool receiveShadow;
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
#endif`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M0=`PhysicalMaterial material;
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
#endif`,y0=`struct PhysicalMaterial {
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
}`,w0=`
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
#endif`,S0=`#if defined( RE_IndirectDiffuse )
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
#endif`,E0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I0=`#if defined( USE_POINTS_UV )
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
#endif`,D0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z0=`#ifdef USE_MORPHTARGETS
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
#endif`,B0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,G0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,H0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,X0=`#ifdef USE_NORMALMAP
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
#endif`,Y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,j0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,am=`float getShadowMask() {
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
}`,cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lm=`#ifdef USE_SKINNING
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
#endif`,hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,um=`#ifdef USE_SKINNING
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
#endif`,fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gm=`#ifdef USE_TRANSMISSION
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
#endif`,_m=`#ifdef USE_TRANSMISSION
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sm=`uniform sampler2D t2D;
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`#include <common>
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
}`,Cm=`#if DEPTH_PACKING == 3200
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
}`,Pm=`#define DISTANCE
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
}`,Lm=`#define DISTANCE
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`uniform float scale;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Fm=`#include <common>
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
}`,Om=`uniform vec3 diffuse;
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
}`,zm=`#define LAMBERT
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
}`,Bm=`#define LAMBERT
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
}`,km=`#define MATCAP
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
}`,Gm=`#define MATCAP
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
}`,Hm=`#define NORMAL
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
}`,Vm=`#define NORMAL
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
}`,Wm=`#define PHONG
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
}`,Xm=`#define PHONG
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
}`,Ym=`#define STANDARD
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
}`,qm=`#define STANDARD
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
}`,Zm=`#define TOON
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
}`,Km=`#define TOON
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
}`,$m=`uniform float size;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,jm=`#include <common>
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
}`,Qm=`uniform vec3 color;
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
}`,tg=`uniform float rotation;
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
}`,eg=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Sp,alphahash_pars_fragment:Ep,alphamap_fragment:bp,alphamap_pars_fragment:Tp,alphatest_fragment:Ap,alphatest_pars_fragment:Rp,aomap_fragment:Cp,aomap_pars_fragment:Pp,batching_pars_vertex:Lp,batching_vertex:Ip,begin_vertex:Dp,beginnormal_vertex:Up,bsdfs:Np,iridescence_fragment:Fp,bumpmap_pars_fragment:Op,clipping_planes_fragment:zp,clipping_planes_pars_fragment:Bp,clipping_planes_pars_vertex:kp,clipping_planes_vertex:Gp,color_fragment:Hp,color_pars_fragment:Vp,color_pars_vertex:Wp,color_vertex:Xp,common:Yp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:Zp,displacementmap_pars_vertex:Kp,displacementmap_vertex:$p,emissivemap_fragment:Jp,emissivemap_pars_fragment:jp,colorspace_fragment:Qp,colorspace_pars_fragment:t0,envmap_fragment:e0,envmap_common_pars_fragment:n0,envmap_pars_fragment:i0,envmap_pars_vertex:s0,envmap_physical_pars_fragment:m0,envmap_vertex:o0,fog_vertex:r0,fog_pars_vertex:a0,fog_fragment:c0,fog_pars_fragment:l0,gradientmap_pars_fragment:h0,lightmap_pars_fragment:u0,lights_lambert_fragment:f0,lights_lambert_pars_fragment:d0,lights_pars_begin:p0,lights_toon_fragment:g0,lights_toon_pars_fragment:_0,lights_phong_fragment:v0,lights_phong_pars_fragment:x0,lights_physical_fragment:M0,lights_physical_pars_fragment:y0,lights_fragment_begin:w0,lights_fragment_maps:S0,lights_fragment_end:E0,logdepthbuf_fragment:b0,logdepthbuf_pars_fragment:T0,logdepthbuf_pars_vertex:A0,logdepthbuf_vertex:R0,map_fragment:C0,map_pars_fragment:P0,map_particle_fragment:L0,map_particle_pars_fragment:I0,metalnessmap_fragment:D0,metalnessmap_pars_fragment:U0,morphinstance_vertex:N0,morphcolor_vertex:F0,morphnormal_vertex:O0,morphtarget_pars_vertex:z0,morphtarget_vertex:B0,normal_fragment_begin:k0,normal_fragment_maps:G0,normal_pars_fragment:H0,normal_pars_vertex:V0,normal_vertex:W0,normalmap_pars_fragment:X0,clearcoat_normal_fragment_begin:Y0,clearcoat_normal_fragment_maps:q0,clearcoat_pars_fragment:Z0,iridescence_pars_fragment:K0,opaque_fragment:$0,packing:J0,premultiplied_alpha_fragment:j0,project_vertex:Q0,dithering_fragment:tm,dithering_pars_fragment:em,roughnessmap_fragment:nm,roughnessmap_pars_fragment:im,shadowmap_pars_fragment:sm,shadowmap_pars_vertex:om,shadowmap_vertex:rm,shadowmask_pars_fragment:am,skinbase_vertex:cm,skinning_pars_vertex:lm,skinning_vertex:hm,skinnormal_vertex:um,specularmap_fragment:fm,specularmap_pars_fragment:dm,tonemapping_fragment:pm,tonemapping_pars_fragment:mm,transmission_fragment:gm,transmission_pars_fragment:_m,uv_pars_fragment:vm,uv_pars_vertex:xm,uv_vertex:Mm,worldpos_vertex:ym,background_vert:wm,background_frag:Sm,backgroundCube_vert:Em,backgroundCube_frag:bm,cube_vert:Tm,cube_frag:Am,depth_vert:Rm,depth_frag:Cm,distanceRGBA_vert:Pm,distanceRGBA_frag:Lm,equirect_vert:Im,equirect_frag:Dm,linedashed_vert:Um,linedashed_frag:Nm,meshbasic_vert:Fm,meshbasic_frag:Om,meshlambert_vert:zm,meshlambert_frag:Bm,meshmatcap_vert:km,meshmatcap_frag:Gm,meshnormal_vert:Hm,meshnormal_frag:Vm,meshphong_vert:Wm,meshphong_frag:Xm,meshphysical_vert:Ym,meshphysical_frag:qm,meshtoon_vert:Zm,meshtoon_frag:Km,points_vert:$m,points_frag:Jm,shadow_vert:jm,shadow_frag:Qm,sprite_vert:tg,sprite_frag:eg},ht={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Tn={basic:{uniforms:Ge([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ge([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new _t(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ge([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ge([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ge([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new _t(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ge([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ge([ht.points,ht.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ge([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ge([ht.common,ht.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ge([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ge([ht.sprite,ht.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ge([ht.common,ht.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ge([ht.lights,ht.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Tn.physical={uniforms:Ge([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Oo={r:0,b:0,g:0},ui=new Cn,ng=new de;function ig(i,t,e,n,s,o,r){const a=new _t(0);let c=o===!0?0:1,l,h,u=null,f=0,d=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function x(_){let v=!1;const b=g(_);b===null?p(a,c):b&&b.isColor&&(p(b,1),v=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,v){const b=g(v);b&&(b.isCubeTexture||b.mapping===Tr)?(h===void 0&&(h=new L(new ro(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:ps(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ui.copy(v.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ng.makeRotationFromEuler(ui)),h.material.toneMapped=ee.getTransfer(b.colorSpace)!==oe,(u!==b||f!==b.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new L(new ye(2,2),new Ze({name:"BackgroundMaterial",uniforms:ps(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ee.getTransfer(b.colorSpace)!==oe,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,v){_.getRGB(Oo,Su(i)),n.buffers.color.setClear(Oo.r,Oo.g,Oo.b,v,r)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(a,c)},render:x,addToRenderList:m,dispose:M}}function sg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let o=s,r=!1;function a(y,P,U,N,G){let W=!1;const q=u(N,U,P);o!==q&&(o=q,l(o.object)),W=d(y,N,U,G),W&&g(y,N,U,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(W||r)&&(r=!1,v(y,P,U,N),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,P,U){const N=U.wireframe===!0;let G=n[y.id];G===void 0&&(G={},n[y.id]=G);let W=G[P.id];W===void 0&&(W={},G[P.id]=W);let q=W[N];return q===void 0&&(q=f(c()),W[N]=q),q}function f(y){const P=[],U=[],N=[];for(let G=0;G<e;G++)P[G]=0,U[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:N,object:y,attributes:{},index:null}}function d(y,P,U,N){const G=o.attributes,W=P.attributes;let q=0;const J=U.getAttributes();for(const Y in J)if(J[Y].location>=0){const ut=G[Y];let Tt=W[Y];if(Tt===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(Tt=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(Tt=y.instanceColor)),ut===void 0||ut.attribute!==Tt||Tt&&ut.data!==Tt.data)return!0;q++}return o.attributesNum!==q||o.index!==N}function g(y,P,U,N){const G={},W=P.attributes;let q=0;const J=U.getAttributes();for(const Y in J)if(J[Y].location>=0){let ut=W[Y];ut===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor));const Tt={};Tt.attribute=ut,ut&&ut.data&&(Tt.data=ut.data),G[Y]=Tt,q++}o.attributes=G,o.attributesNum=q,o.index=N}function x(){const y=o.newAttributes;for(let P=0,U=y.length;P<U;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const U=o.newAttributes,N=o.enabledAttributes,G=o.attributeDivisors;U[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),G[y]!==P&&(i.vertexAttribDivisor(y,P),G[y]=P)}function M(){const y=o.newAttributes,P=o.enabledAttributes;for(let U=0,N=P.length;U<N;U++)P[U]!==y[U]&&(i.disableVertexAttribArray(U),P[U]=0)}function _(y,P,U,N,G,W,q){q===!0?i.vertexAttribIPointer(y,P,U,G,W):i.vertexAttribPointer(y,P,U,N,G,W)}function v(y,P,U,N){x();const G=N.attributes,W=U.getAttributes(),q=P.defaultAttributeValues;for(const J in W){const Y=W[J];if(Y.location>=0){let at=G[J];if(at===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(at=y.instanceColor)),at!==void 0){const ut=at.normalized,Tt=at.itemSize,Bt=t.get(at);if(Bt===void 0)continue;const ce=Bt.buffer,tt=Bt.type,ct=Bt.bytesPerElement,At=tt===i.INT||tt===i.UNSIGNED_INT||at.gpuType===el;if(at.isInterleavedBufferAttribute){const pt=at.data,Ut=pt.stride,Ot=at.offset;if(pt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<Y.locationSize;Xt++)p(Y.location+Xt,pt.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Xt=0;Xt<Y.locationSize;Xt++)m(Y.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let Xt=0;Xt<Y.locationSize;Xt++)_(Y.location+Xt,Tt/Y.locationSize,tt,ut,Ut*ct,(Ot+Tt/Y.locationSize*Xt)*ct,At)}else{if(at.isInstancedBufferAttribute){for(let pt=0;pt<Y.locationSize;pt++)p(Y.location+pt,at.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let pt=0;pt<Y.locationSize;pt++)m(Y.location+pt);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let pt=0;pt<Y.locationSize;pt++)_(Y.location+pt,Tt/Y.locationSize,tt,ut,Tt*ct,Tt/Y.locationSize*pt*ct,At)}}else if(q!==void 0){const ut=q[J];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(Y.location,ut);break;case 3:i.vertexAttrib3fv(Y.location,ut);break;case 4:i.vertexAttrib4fv(Y.location,ut);break;default:i.vertexAttrib1fv(Y.location,ut)}}}}M()}function b(){C();for(const y in n){const P=n[y];for(const U in P){const N=P[U];for(const G in N)h(N[G].object),delete N[G];delete P[U]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const U in P){const N=P[U];for(const G in N)h(N[G].object),delete N[G];delete P[U]}delete n[y.id]}function T(y){for(const P in n){const U=n[P];if(U[y.id]===void 0)continue;const N=U[y.id];for(const G in N)h(N[G].object),delete N[G];delete U[y.id]}}function C(){S(),r=!0,o!==s&&(o=s,l(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function og(i,t,e){let n;function s(l){n=l}function o(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)r(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function rg(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==vn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===Wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Yn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Gn&&!C)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:b,maxSamples:E}}function ag(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new mi,a=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||o&&!m)o?h(null):l();else{const M=o?0:n,_=M*4;let v=p.clippingState||null;c.value=v,v=h(g,f,_,d);for(let b=0;b!==_;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=d+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=d;_!==x;++_,v+=4)r.copy(u[_]).applyMatrix4(M,a),r.normal.toArray(m,v),m[v+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function cg(i){let t=new WeakMap;function e(r,a){return a===Za?r.mapping=ls:a===Ka&&(r.mapping=hs),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Za||a===Ka)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Nd(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const ts=4,ph=[.125,.215,.35,.446,.526,.582],Si=20,ha=new pl,mh=new _t;let ua=null,fa=0,da=0,pa=!1;const gi=(1+Math.sqrt(5))/2,Ki=1/gi,gh=[new D(-gi,Ki,0),new D(gi,Ki,0),new D(-Ki,0,gi),new D(Ki,0,gi),new D(0,gi,-Ki),new D(0,gi,Ki),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class _h{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ua=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ua,fa,da),this._renderer.xr.enabled=pa,t.scissorTest=!1,zo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ua=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Wn,format:vn,colorSpace:ds,depthBuffer:!1},s=vh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lg(o)),this._blurMaterial=hg(o,t,e)}return s}_compileMaterial(t){const e=new L(this._lodPlanes[0],t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,n,s){const a=new tn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(mh),h.toneMapping=ii,h.autoClear=!1;const d=new $({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new L(new ro,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(mh),x=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const _=this._cubeSize;zo(s,M*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ls||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xh());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new L(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;zo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,ha)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=gh[(s-o-1)%gh.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new L(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*Si-1),x=o/g,m=isFinite(o)?1+Math.floor(h*x):Si;m>Si&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);const p=[];let M=0;for(let T=0;T<Si;++T){const C=T/x,S=Math.exp(-C*C/2);p.push(S),T===0?M+=S:T<m&&(M+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const v=this._sizeLods[s],b=3*v*(s>_-ts?s-_+ts:0),E=4*(this._cubeSize-v);zo(e,b,E,3*v,2*v),c.setRenderTarget(e),c.render(u,ha)}}function lg(i){const t=[],e=[],n=[];let s=i;const o=i-ts+1+ph.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>i-ts?c=ph[r-i+ts-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*d),_=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let E=0;E<d;E++){const T=E%3*2/3-1,C=E>2?0:-1,S=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];M.set(S,x*g*E),_.set(f,m*g*E);const y=[E,E,E,E,E,E];v.set(y,p*g*E)}const b=new Ce;b.setAttribute("position",new yn(M,x)),b.setAttribute("uv",new yn(_,m)),b.setAttribute("faceIndex",new yn(v,p)),t.push(b),s>ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vh(i,t,e){const n=new Mn(i,t,e);return n.texture.mapping=Tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function hg(i,t,e){const n=new Float32Array(Si),s=new D(0,1,0);return new Ze({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ml(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function xh(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ml(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Mh(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function ml(){return`

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
	`}function ug(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Za||c===Ka,h=c===ls||c===hs;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new _h(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new _h(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function fg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ji("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function dg(i,t,e,n){const s={},o=new WeakMap;function r(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete s[f.id];const d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,g=u.attributes.position;let x=0;if(d!==null){const M=d.array;x=d.version;for(let _=0,v=M.length;_<v;_+=3){const b=M[_+0],E=M[_+1],T=M[_+2];f.push(b,E,E,T,T,b)}}else if(g!==void 0){const M=g.array;x=g.version;for(let _=0,v=M.length/3-1;_<v;_+=3){const b=_+0,E=_+1,T=_+2;f.push(b,E,E,T,T,b)}}else return;const m=new(mu(f)?wu:yu)(f,1);m.version=x;const p=o.get(u);p&&t.remove(p),o.set(u,m)}function h(u){const f=o.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function pg(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function c(f,d){i.drawElements(n,d,o,f*r),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,o,f*r,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/r,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,o,f,0,x,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*x[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function mg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function gg(i,t,e){const n=new WeakMap,s=new re;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let y=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let b=a.attributes.position.count*v,E=1;b>t.maxTextureSize&&(E=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const T=new Float32Array(b*E*4*u),C=new _u(T,b,E,u);C.type=Gn,C.needsUpdate=!0;const S=v*4;for(let P=0;P<u;P++){const U=p[P],N=M[P],G=_[P],W=b*E*4*P;for(let q=0;q<U.count;q++){const J=q*S;g===!0&&(s.fromBufferAttribute(U,q),T[W+J+0]=s.x,T[W+J+1]=s.y,T[W+J+2]=s.z,T[W+J+3]=0),x===!0&&(s.fromBufferAttribute(N,q),T[W+J+4]=s.x,T[W+J+5]=s.y,T[W+J+6]=s.z,T[W+J+7]=0),m===!0&&(s.fromBufferAttribute(G,q),T[W+J+8]=s.x,T[W+J+9]=s.y,T[W+J+10]=s.z,T[W+J+11]=G.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new lt(b,E)},n.set(a,f),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function _g(i,t,e,n){let s=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}const ku=new Xe,yh=new Au(1,1),Gu=new _u,Hu=new Md,Vu=new bu,wh=[],Sh=[],Eh=new Float32Array(16),bh=new Float32Array(9),Th=new Float32Array(4);function ws(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=wh[s];if(o===void 0&&(o=new Float32Array(s),wh[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Pr(i,t){let e=Sh[t];e===void 0&&(e=new Int32Array(t),Sh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function Mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function wg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Th.set(n),i.uniformMatrix2fv(this.addr,!1,Th),Re(e,n)}}function Sg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;bh.set(n),i.uniformMatrix3fv(this.addr,!1,bh),Re(e,n)}}function Eg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Eh.set(n),i.uniformMatrix4fv(this.addr,!1,Eh),Re(e,n)}}function bg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function Rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function Cg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function Lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function Ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function Dg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(yh.compareFunction=pu,o=yh):o=ku,e.setTexture2D(t||o,s)}function Ug(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Hu,s)}function Ng(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Vu,s)}function Fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gu,s)}function Og(i){switch(i){case 5126:return vg;case 35664:return xg;case 35665:return Mg;case 35666:return yg;case 35674:return wg;case 35675:return Sg;case 35676:return Eg;case 5124:case 35670:return bg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Pg;case 36295:return Lg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Fg}}function zg(i,t){i.uniform1fv(this.addr,t)}function Bg(i,t){const e=ws(t,this.size,2);i.uniform2fv(this.addr,e)}function kg(i,t){const e=ws(t,this.size,3);i.uniform3fv(this.addr,e)}function Gg(i,t){const e=ws(t,this.size,4);i.uniform4fv(this.addr,e)}function Hg(i,t){const e=ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Vg(i,t){const e=ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Wg(i,t){const e=ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Xg(i,t){i.uniform1iv(this.addr,t)}function Yg(i,t){i.uniform2iv(this.addr,t)}function qg(i,t){i.uniform3iv(this.addr,t)}function Zg(i,t){i.uniform4iv(this.addr,t)}function Kg(i,t){i.uniform1uiv(this.addr,t)}function $g(i,t){i.uniform2uiv(this.addr,t)}function Jg(i,t){i.uniform3uiv(this.addr,t)}function jg(i,t){i.uniform4uiv(this.addr,t)}function Qg(i,t,e){const n=this.cache,s=t.length,o=Pr(e,s);Ae(n,o)||(i.uniform1iv(this.addr,o),Re(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||ku,o[r])}function t_(i,t,e){const n=this.cache,s=t.length,o=Pr(e,s);Ae(n,o)||(i.uniform1iv(this.addr,o),Re(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Hu,o[r])}function e_(i,t,e){const n=this.cache,s=t.length,o=Pr(e,s);Ae(n,o)||(i.uniform1iv(this.addr,o),Re(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Vu,o[r])}function n_(i,t,e){const n=this.cache,s=t.length,o=Pr(e,s);Ae(n,o)||(i.uniform1iv(this.addr,o),Re(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Gu,o[r])}function i_(i){switch(i){case 5126:return zg;case 35664:return Bg;case 35665:return kg;case 35666:return Gg;case 35674:return Hg;case 35675:return Vg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return Yg;case 35668:case 35672:return qg;case 35669:case 35673:return Zg;case 5125:return Kg;case 36294:return $g;case 36295:return Jg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return n_}}class s_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Og(e.type)}}class o_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=i_(e.type)}}class r_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function Ah(i,t){i.seq.push(t),i.map[t.id]=t}function a_(i,t,e){const n=i.name,s=n.length;for(ma.lastIndex=0;;){const o=ma.exec(n),r=ma.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){Ah(e,l===void 0?new s_(a,i,t):new o_(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new r_(a),Ah(e,u)),e=u}}}class tr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);a_(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Rh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const c_=37297;let l_=0;function h_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Ch=new Gt;function u_(i){ee._getMatrix(Ch,ee.workingColorSpace,i);const t=`mat3( ${Ch.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case cr:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ph(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+h_(i.getShaderSource(t),r)}else return s}function f_(i,t){const e=u_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function d_(i,t){let e;switch(t){case qf:e="Linear";break;case Zf:e="Reinhard";break;case Kf:e="Cineon";break;case eu:e="ACESFilmic";break;case Jf:e="AgX";break;case jf:e="Neutral";break;case $f:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Bo=new D;function p_(){ee.getLuminanceCoefficients(Bo);const i=Bo.x.toFixed(4),t=Bo.y.toFixed(4),e=Bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function g_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function __(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Us(i){return i!==""}function Lh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ih(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const v_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(i){return i.replace(v_,M_)}const x_=new Map;function M_(i,t){let e=Wt[t];if(e===void 0){const n=x_.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Cc(e)}const y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(i){return i.replace(y_,w_)}function w_(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Uh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function S_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function E_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case hs:t="ENVMAP_TYPE_CUBE";break;case Tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function b_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function T_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tu:t="ENVMAP_BLENDING_MULTIPLY";break;case Xf:t="ENVMAP_BLENDING_MIX";break;case Yf:t="ENVMAP_BLENDING_ADD";break}return t}function A_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function R_(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=S_(e),l=E_(e),h=b_(e),u=T_(e),f=A_(e),d=m_(e),g=g_(o),x=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),p.length>0&&(p+=`
`)):(m=[Uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),p=[Uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Wt.tonemapping_pars_fragment:"",e.toneMapping!==ii?d_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,f_("linearToOutputTexel",e.outputColorSpace),p_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Us).join(`
`)),r=Cc(r),r=Lh(r,e),r=Ih(r,e),a=Cc(a),a=Lh(a,e),a=Ih(a,e),r=Dh(r),a=Dh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=M+m+r,v=M+p+a,b=Rh(s,s.VERTEX_SHADER,_),E=Rh(s,s.FRAGMENT_SHADER,v);s.attachShader(x,b),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(P){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(x).trim(),N=s.getShaderInfoLog(b).trim(),G=s.getShaderInfoLog(E).trim();let W=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,E);else{const J=Ph(s,b,"vertex"),Y=Ph(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+J+`
`+Y)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||G==="")&&(q=!1);q&&(P.diagnostics={runnable:W,programLog:U,vertexShader:{log:N,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(b),s.deleteShader(E),C=new tr(s,x),S=__(s,x)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,c_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=l_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=E,this}let C_=0;class P_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new L_(t),e.set(t,n)),n}}class L_{constructor(t){this.id=C_++,this.code=t,this.usedTimes=0}}function I_(i,t,e,n,s,o,r){const a=new xu,c=new P_,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,P,U,N){const G=U.fog,W=N.geometry,q=S.isMeshStandardMaterial?U.environment:null,J=(S.isMeshStandardMaterial?e:t).get(S.envMap||q),Y=J&&J.mapping===Tr?J.image.height:null,at=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Tt=ut!==void 0?ut.length:0;let Bt=0;W.morphAttributes.position!==void 0&&(Bt=1),W.morphAttributes.normal!==void 0&&(Bt=2),W.morphAttributes.color!==void 0&&(Bt=3);let ce,tt,ct,At;if(at){const se=Tn[at];ce=se.vertexShader,tt=se.fragmentShader}else ce=S.vertexShader,tt=S.fragmentShader,c.update(S),ct=c.getVertexShaderID(S),At=c.getFragmentShaderID(S);const pt=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),Ot=N.isInstancedMesh===!0,Xt=N.isBatchedMesh===!0,me=!!S.map,Jt=!!S.matcap,Me=!!J,F=!!S.aoMap,on=!!S.lightMap,Zt=!!S.bumpMap,Kt=!!S.normalMap,Pt=!!S.displacementMap,ue=!!S.emissiveMap,Ct=!!S.metalnessMap,I=!!S.roughnessMap,A=S.anisotropy>0,H=S.clearcoat>0,et=S.dispersion>0,it=S.iridescence>0,j=S.sheen>0,Rt=S.transmission>0,mt=A&&!!S.anisotropyMap,yt=H&&!!S.clearcoatMap,jt=H&&!!S.clearcoatNormalMap,rt=H&&!!S.clearcoatRoughnessMap,St=it&&!!S.iridescenceMap,Dt=it&&!!S.iridescenceThicknessMap,Nt=j&&!!S.sheenColorMap,Et=j&&!!S.sheenRoughnessMap,$t=!!S.specularMap,Vt=!!S.specularColorMap,he=!!S.specularIntensityMap,O=Rt&&!!S.transmissionMap,ft=Rt&&!!S.thicknessMap,Z=!!S.gradientMap,nt=!!S.alphaMap,vt=S.alphaTest>0,gt=!!S.alphaHash,kt=!!S.extensions;let _e=ii;S.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(_e=i.toneMapping);const Fe={shaderID:at,shaderType:S.type,shaderName:S.name,vertexShader:ce,fragmentShader:tt,defines:S.defines,customVertexShaderID:ct,customFragmentShaderID:At,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Xt,batchingColor:Xt&&N._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&N.instanceColor!==null,instancingMorph:Ot&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:ds,alphaToCoverage:!!S.alphaToCoverage,map:me,matcap:Jt,envMap:Me,envMapMode:Me&&J.mapping,envMapCubeUVHeight:Y,aoMap:F,lightMap:on,bumpMap:Zt,normalMap:Kt,displacementMap:f&&Pt,emissiveMap:ue,normalMapObjectSpace:Kt&&S.normalMapType===nd,normalMapTangentSpace:Kt&&S.normalMapType===du,metalnessMap:Ct,roughnessMap:I,anisotropy:A,anisotropyMap:mt,clearcoat:H,clearcoatMap:yt,clearcoatNormalMap:jt,clearcoatRoughnessMap:rt,dispersion:et,iridescence:it,iridescenceMap:St,iridescenceThicknessMap:Dt,sheen:j,sheenColorMap:Nt,sheenRoughnessMap:Et,specularMap:$t,specularColorMap:Vt,specularIntensityMap:he,transmission:Rt,transmissionMap:O,thicknessMap:ft,gradientMap:Z,opaque:S.transparent===!1&&S.blending===es&&S.alphaToCoverage===!1,alphaMap:nt,alphaTest:vt,alphaHash:gt,combine:S.combine,mapUv:me&&x(S.map.channel),aoMapUv:F&&x(S.aoMap.channel),lightMapUv:on&&x(S.lightMap.channel),bumpMapUv:Zt&&x(S.bumpMap.channel),normalMapUv:Kt&&x(S.normalMap.channel),displacementMapUv:Pt&&x(S.displacementMap.channel),emissiveMapUv:ue&&x(S.emissiveMap.channel),metalnessMapUv:Ct&&x(S.metalnessMap.channel),roughnessMapUv:I&&x(S.roughnessMap.channel),anisotropyMapUv:mt&&x(S.anisotropyMap.channel),clearcoatMapUv:yt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:jt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Et&&x(S.sheenRoughnessMap.channel),specularMapUv:$t&&x(S.specularMap.channel),specularColorMapUv:Vt&&x(S.specularColorMap.channel),specularIntensityMapUv:he&&x(S.specularIntensityMap.channel),transmissionMapUv:O&&x(S.transmissionMap.channel),thicknessMapUv:ft&&x(S.thicknessMap.channel),alphaMapUv:nt&&x(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Kt||A),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(me||nt),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ut,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Bt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:me&&S.map.isVideoTexture===!0&&ee.getTransfer(S.map.colorSpace)===oe,decodeVideoTextureEmissive:ue&&S.emissiveMap.isVideoTexture===!0&&ee.getTransfer(S.emissiveMap.colorSpace)===oe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ht,flipSided:S.side===We,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:kt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&S.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(M(y,S),_(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function _(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const y=g[S.type];let P;if(y){const U=Tn[y];P=ur.clone(U.uniforms)}else P=S.uniforms;return P}function b(S,y){let P;for(let U=0,N=h.length;U<N;U++){const G=h[U];if(G.cacheKey===y){P=G,++P.usedTimes;break}}return P===void 0&&(P=new R_(i,y,S,o),h.push(P)),P}function E(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function T(S){c.remove(S)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:C}}function D_(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,c){i.get(r)[a]=c}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function U_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Nh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fh(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u,f,d,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,g,x,m){const p=r(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,x,m){const p=r(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||U_),n.length>1&&n.sort(f||Nh),s.length>1&&s.sort(f||Nh)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function N_(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Fh,i.set(n,[r])):s>=o.length?(r=new Fh,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function F_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new _t};break;case"SpotLight":e={position:new D,direction:new D,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function O_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let z_=0;function B_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function k_(i){const t=new F_,e=O_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,o=new de,r=new de;function a(l){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,M=0,_=0,v=0,b=0,E=0,T=0;l.sort(B_);for(let S=0,y=l.length;S<y;S++){const P=l[S],U=P.color,N=P.intensity,G=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=U.r*N,u+=U.g*N,f+=U.b*N;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],N);T++}else if(P.isDirectionalLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,Y=e.get(P);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,n.directionalShadow[d]=Y,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=P.shadow.matrix,M++}n.directional[d]=q,d++}else if(P.isSpotLight){const q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(U).multiplyScalar(N),q.distance=G,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[x]=q;const J=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,J.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[x]=J.matrix,P.castShadow){const Y=e.get(P);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,n.spotShadow[x]=Y,n.spotShadowMap[x]=W,v++}x++}else if(P.isRectAreaLight){const q=t.get(P);q.color.copy(U).multiplyScalar(N),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=q,m++}else if(P.isPointLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const J=P.shadow,Y=e.get(P);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,Y.shadowCameraNear=J.camera.near,Y.shadowCameraFar=J.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,_++}n.point[g]=q,g++}else if(P.isHemisphereLight){const q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(N),q.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==_||C.numSpotShadows!==v||C.numSpotMaps!==b||C.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,C.directionalLength=d,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=_,C.numSpotShadows=v,C.numSpotMaps=b,C.numLightProbes=T,n.version=z_++)}function c(l,h){let u=0,f=0,d=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const _=l[p];if(_.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(_.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(_.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),r.identity(),o.copy(_.matrixWorld),o.premultiply(m),r.extractRotation(o),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(_.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Oh(i){const t=new k_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function G_(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Oh(i),t.set(s,[a])):o>=r.length?(a=new Oh(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const H_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V_=`uniform sampler2D shadow_pass;
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
}`;function W_(i,t,e){let n=new cl;const s=new lt,o=new lt,r=new re,a=new mp({depthPacking:ed}),c=new gp,l={},h=e.maxTextureSize,u={[si]:We,[We]:si,[Ht]:Ht},f=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:H_,fragmentShader:V_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ce;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new L(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jh;let p=this.type;this.render=function(E,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Vn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=p!==zn&&this.type===zn,G=p===zn&&this.type!==zn;for(let W=0,q=E.length;W<q;W++){const J=E[W],Y=J.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const at=Y.getFrameExtents();if(s.multiply(at),o.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/at.x),s.x=o.x*at.x,Y.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/at.y),s.y=o.y*at.y,Y.mapSize.y=o.y)),Y.map===null||N===!0||G===!0){const Tt=this.type!==zn?{minFilter:xn,magFilter:xn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Mn(s.x,s.y,Tt),Y.map.texture.name=J.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const ut=Y.getViewportCount();for(let Tt=0;Tt<ut;Tt++){const Bt=Y.getViewport(Tt);r.set(o.x*Bt.x,o.y*Bt.y,o.x*Bt.z,o.y*Bt.w),U.viewport(r),Y.updateMatrices(J,Tt),n=Y.getFrustum(),v(T,C,Y.camera,J,this.type)}Y.isPointLightShadow!==!0&&this.type===zn&&M(Y,C),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,P)};function M(E,T){const C=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Mn(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,C,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,C,d,x,null)}function _(E,T,C,S){let y=null;const P=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)y=P;else if(y=C.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=y.uuid,N=T.uuid;let G=l[U];G===void 0&&(G={},l[U]=G);let W=G[N];W===void 0&&(W=y.clone(),G[N]=W,T.addEventListener("dispose",b)),y=W}if(y.visible=T.visible,y.wireframe=T.wireframe,S===zn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=i.properties.get(y);U.light=C}return y}function v(E,T,C,S,y){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===zn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const N=t.update(E),G=E.material;if(Array.isArray(G)){const W=N.groups;for(let q=0,J=W.length;q<J;q++){const Y=W[q],at=G[Y.materialIndex];if(at&&at.visible){const ut=_(E,at,S,y);E.onBeforeShadow(i,E,T,C,N,ut,Y),i.renderBufferDirect(C,null,N,ut,E,Y),E.onAfterShadow(i,E,T,C,N,ut,Y)}}}else if(G.visible){const W=_(E,G,S,y);E.onBeforeShadow(i,E,T,C,N,W,null),i.renderBufferDirect(C,null,N,W,E,null),E.onAfterShadow(i,E,T,C,N,W,null)}}const U=E.children;for(let N=0,G=U.length;N<G;N++)v(U[N],T,C,S,y)}function b(E){E.target.removeEventListener("dispose",b);for(const C in l){const S=l[C],y=E.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const X_={[Ga]:Ha,[Va]:Ya,[Wa]:qa,[cs]:Xa,[Ha]:Ga,[Ya]:Va,[qa]:Wa,[Xa]:cs};function Y_(i,t){function e(){let O=!1;const ft=new re;let Z=null;const nt=new re(0,0,0,0);return{setMask:function(vt){Z!==vt&&!O&&(i.colorMask(vt,vt,vt,vt),Z=vt)},setLocked:function(vt){O=vt},setClear:function(vt,gt,kt,_e,Fe){Fe===!0&&(vt*=_e,gt*=_e,kt*=_e),ft.set(vt,gt,kt,_e),nt.equals(ft)===!1&&(i.clearColor(vt,gt,kt,_e),nt.copy(ft))},reset:function(){O=!1,Z=null,nt.set(-1,0,0,0)}}}function n(){let O=!1,ft=!1,Z=null,nt=null,vt=null;return{setReversed:function(gt){if(ft!==gt){const kt=t.get("EXT_clip_control");ft?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const _e=vt;vt=null,this.setClear(_e)}ft=gt},getReversed:function(){return ft},setTest:function(gt){gt?pt(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(gt){Z!==gt&&!O&&(i.depthMask(gt),Z=gt)},setFunc:function(gt){if(ft&&(gt=X_[gt]),nt!==gt){switch(gt){case Ga:i.depthFunc(i.NEVER);break;case Ha:i.depthFunc(i.ALWAYS);break;case Va:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case Wa:i.depthFunc(i.EQUAL);break;case Xa:i.depthFunc(i.GEQUAL);break;case Ya:i.depthFunc(i.GREATER);break;case qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=gt}},setLocked:function(gt){O=gt},setClear:function(gt){vt!==gt&&(ft&&(gt=1-gt),i.clearDepth(gt),vt=gt)},reset:function(){O=!1,Z=null,nt=null,vt=null,ft=!1}}}function s(){let O=!1,ft=null,Z=null,nt=null,vt=null,gt=null,kt=null,_e=null,Fe=null;return{setTest:function(se){O||(se?pt(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(se){ft!==se&&!O&&(i.stencilMask(se),ft=se)},setFunc:function(se,fn,In){(Z!==se||nt!==fn||vt!==In)&&(i.stencilFunc(se,fn,In),Z=se,nt=fn,vt=In)},setOp:function(se,fn,In){(gt!==se||kt!==fn||_e!==In)&&(i.stencilOp(se,fn,In),gt=se,kt=fn,_e=In)},setLocked:function(se){O=se},setClear:function(se){Fe!==se&&(i.clearStencil(se),Fe=se)},reset:function(){O=!1,ft=null,Z=null,nt=null,vt=null,gt=null,kt=null,_e=null,Fe=null}}}const o=new e,r=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,M=null,_=null,v=null,b=null,E=null,T=new _t(0,0,0),C=0,S=!1,y=null,P=null,U=null,N=null,G=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,J=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=J>=1):Y.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=J>=2);let at=null,ut={};const Tt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),ce=new re().fromArray(Tt),tt=new re().fromArray(Bt);function ct(O,ft,Z,nt){const vt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(O,gt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<Z;kt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(ft+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return gt}const At={};At[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),pt(i.DEPTH_TEST),r.setFunc(cs),Zt(!1),Kt(Il),pt(i.CULL_FACE),F(Vn);function pt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Ut(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Ot(O,ft){return u[O]!==ft?(i.bindFramebuffer(O,ft),u[O]=ft,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Xt(O,ft){let Z=d,nt=!1;if(O){Z=f.get(ft),Z===void 0&&(Z=[],f.set(ft,Z));const vt=O.textures;if(Z.length!==vt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,kt=vt.length;gt<kt;gt++)Z[gt]=i.COLOR_ATTACHMENT0+gt;Z.length=vt.length,nt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,nt=!0);nt&&i.drawBuffers(Z)}function me(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const Jt={[wi]:i.FUNC_ADD,[Rf]:i.FUNC_SUBTRACT,[Cf]:i.FUNC_REVERSE_SUBTRACT};Jt[Pf]=i.MIN,Jt[Lf]=i.MAX;const Me={[If]:i.ZERO,[Df]:i.ONE,[Uf]:i.SRC_COLOR,[Ba]:i.SRC_ALPHA,[kf]:i.SRC_ALPHA_SATURATE,[zf]:i.DST_COLOR,[Ff]:i.DST_ALPHA,[Nf]:i.ONE_MINUS_SRC_COLOR,[ka]:i.ONE_MINUS_SRC_ALPHA,[Bf]:i.ONE_MINUS_DST_COLOR,[Of]:i.ONE_MINUS_DST_ALPHA,[Gf]:i.CONSTANT_COLOR,[Hf]:i.ONE_MINUS_CONSTANT_COLOR,[Vf]:i.CONSTANT_ALPHA,[Wf]:i.ONE_MINUS_CONSTANT_ALPHA};function F(O,ft,Z,nt,vt,gt,kt,_e,Fe,se){if(O===Vn){x===!0&&(Ut(i.BLEND),x=!1);return}if(x===!1&&(pt(i.BLEND),x=!0),O!==Af){if(O!==m||se!==S){if((p!==wi||v!==wi)&&(i.blendEquation(i.FUNC_ADD),p=wi,v=wi),se)switch(O){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case za:i.blendFunc(i.ONE,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ul:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case za:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ul:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,_=null,b=null,E=null,T.set(0,0,0),C=0,m=O,S=se}return}vt=vt||ft,gt=gt||Z,kt=kt||nt,(ft!==p||vt!==v)&&(i.blendEquationSeparate(Jt[ft],Jt[vt]),p=ft,v=vt),(Z!==M||nt!==_||gt!==b||kt!==E)&&(i.blendFuncSeparate(Me[Z],Me[nt],Me[gt],Me[kt]),M=Z,_=nt,b=gt,E=kt),(_e.equals(T)===!1||Fe!==C)&&(i.blendColor(_e.r,_e.g,_e.b,Fe),T.copy(_e),C=Fe),m=O,S=!1}function on(O,ft){O.side===Ht?Ut(i.CULL_FACE):pt(i.CULL_FACE);let Z=O.side===We;ft&&(Z=!Z),Zt(Z),O.blending===es&&O.transparent===!1?F(Vn):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),o.setMask(O.colorWrite);const nt=O.stencilWrite;a.setTest(nt),nt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ue(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(O){y!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),y=O)}function Kt(O){O!==bf?(pt(i.CULL_FACE),O!==P&&(O===Il?i.cullFace(i.BACK):O===Tf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),P=O}function Pt(O){O!==U&&(q&&i.lineWidth(O),U=O)}function ue(O,ft,Z){O?(pt(i.POLYGON_OFFSET_FILL),(N!==ft||G!==Z)&&(i.polygonOffset(ft,Z),N=ft,G=Z)):Ut(i.POLYGON_OFFSET_FILL)}function Ct(O){O?pt(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function I(O){O===void 0&&(O=i.TEXTURE0+W-1),at!==O&&(i.activeTexture(O),at=O)}function A(O,ft,Z){Z===void 0&&(at===null?Z=i.TEXTURE0+W-1:Z=at);let nt=ut[Z];nt===void 0&&(nt={type:void 0,texture:void 0},ut[Z]=nt),(nt.type!==O||nt.texture!==ft)&&(at!==Z&&(i.activeTexture(Z),at=Z),i.bindTexture(O,ft||At[O]),nt.type=O,nt.texture=ft)}function H(){const O=ut[at];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(O){ce.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ce.copy(O))}function Et(O){tt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),tt.copy(O))}function $t(O,ft){let Z=l.get(ft);Z===void 0&&(Z=new WeakMap,l.set(ft,Z));let nt=Z.get(O);nt===void 0&&(nt=i.getUniformBlockIndex(ft,O.name),Z.set(O,nt))}function Vt(O,ft){const nt=l.get(ft).get(O);c.get(ft)!==nt&&(i.uniformBlockBinding(ft,nt,O.__bindingPointIndex),c.set(ft,nt))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},at=null,ut={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,M=null,_=null,v=null,b=null,E=null,T=new _t(0,0,0),C=0,S=!1,y=null,P=null,U=null,N=null,G=null,ce.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:pt,disable:Ut,bindFramebuffer:Ot,drawBuffers:Xt,useProgram:me,setBlending:F,setMaterial:on,setFlipSided:Zt,setCullFace:Kt,setLineWidth:Pt,setPolygonOffset:ue,setScissorTest:Ct,activeTexture:I,bindTexture:A,unbindTexture:H,compressedTexImage2D:et,compressedTexImage3D:it,texImage2D:St,texImage3D:Dt,updateUBOMapping:$t,uniformBlockBinding:Vt,texStorage2D:jt,texStorage3D:rt,texSubImage2D:j,texSubImage3D:Rt,compressedTexSubImage2D:mt,compressedTexSubImage3D:yt,scissor:Nt,viewport:Et,reset:he}}function q_(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,A){return d?new OffscreenCanvas(I,A):hr("canvas")}function x(I,A,H){let et=1;const it=Ct(I);if((it.width>H||it.height>H)&&(et=H/Math.max(it.width,it.height)),et<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const j=Math.floor(et*it.width),Rt=Math.floor(et*it.height);u===void 0&&(u=g(j,Rt));const mt=A?g(j,Rt):u;return mt.width=j,mt.height=Rt,mt.getContext("2d").drawImage(I,0,0,j,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+j+"x"+Rt+")."),mt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,A,H,et,it=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let j=A;if(A===i.RED&&(H===i.FLOAT&&(j=i.R32F),H===i.HALF_FLOAT&&(j=i.R16F),H===i.UNSIGNED_BYTE&&(j=i.R8)),A===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.R8UI),H===i.UNSIGNED_SHORT&&(j=i.R16UI),H===i.UNSIGNED_INT&&(j=i.R32UI),H===i.BYTE&&(j=i.R8I),H===i.SHORT&&(j=i.R16I),H===i.INT&&(j=i.R32I)),A===i.RG&&(H===i.FLOAT&&(j=i.RG32F),H===i.HALF_FLOAT&&(j=i.RG16F),H===i.UNSIGNED_BYTE&&(j=i.RG8)),A===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RG8UI),H===i.UNSIGNED_SHORT&&(j=i.RG16UI),H===i.UNSIGNED_INT&&(j=i.RG32UI),H===i.BYTE&&(j=i.RG8I),H===i.SHORT&&(j=i.RG16I),H===i.INT&&(j=i.RG32I)),A===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGB8UI),H===i.UNSIGNED_SHORT&&(j=i.RGB16UI),H===i.UNSIGNED_INT&&(j=i.RGB32UI),H===i.BYTE&&(j=i.RGB8I),H===i.SHORT&&(j=i.RGB16I),H===i.INT&&(j=i.RGB32I)),A===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),H===i.UNSIGNED_INT&&(j=i.RGBA32UI),H===i.BYTE&&(j=i.RGBA8I),H===i.SHORT&&(j=i.RGBA16I),H===i.INT&&(j=i.RGBA32I)),A===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),A===i.RGBA){const Rt=it?cr:ee.getTransfer(et);H===i.FLOAT&&(j=i.RGBA32F),H===i.HALF_FLOAT&&(j=i.RGBA16F),H===i.UNSIGNED_BYTE&&(j=Rt===oe?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(I,A){let H;return I?A===null||A===Pi||A===us?H=i.DEPTH24_STENCIL8:A===Gn?H=i.DEPTH32F_STENCIL8:A===qs&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Pi||A===us?H=i.DEPTH_COMPONENT24:A===Gn?H=i.DEPTH_COMPONENT32F:A===qs&&(H=i.DEPTH_COMPONENT16),H}function b(I,A){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==xn&&I.minFilter!==Rn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function E(I){const A=I.target;A.removeEventListener("dispose",E),C(A),A.isVideoTexture&&h.delete(A)}function T(I){const A=I.target;A.removeEventListener("dispose",T),y(A)}function C(I){const A=n.get(I);if(A.__webglInit===void 0)return;const H=I.source,et=f.get(H);if(et){const it=et[A.__cacheKey];it.usedTimes--,it.usedTimes===0&&S(I),Object.keys(et).length===0&&f.delete(H)}n.remove(I)}function S(I){const A=n.get(I);i.deleteTexture(A.__webglTexture);const H=I.source,et=f.get(H);delete et[A.__cacheKey],r.memory.textures--}function y(I){const A=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(A.__webglFramebuffer[et]))for(let it=0;it<A.__webglFramebuffer[et].length;it++)i.deleteFramebuffer(A.__webglFramebuffer[et][it]);else i.deleteFramebuffer(A.__webglFramebuffer[et]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[et])}else{if(Array.isArray(A.__webglFramebuffer))for(let et=0;et<A.__webglFramebuffer.length;et++)i.deleteFramebuffer(A.__webglFramebuffer[et]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let et=0;et<A.__webglColorRenderbuffer.length;et++)A.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[et]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const H=I.textures;for(let et=0,it=H.length;et<it;et++){const j=n.get(H[et]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),r.memory.textures--),n.remove(H[et])}n.remove(I)}let P=0;function U(){P=0}function N(){const I=P;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),P+=1,I}function G(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function W(I,A){const H=n.get(I);if(I.isVideoTexture&&Pt(I),I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){const et=I.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(H,I,A);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+A)}function q(I,A){const H=n.get(I);if(I.version>0&&H.__version!==I.version){tt(H,I,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+A)}function J(I,A){const H=n.get(I);if(I.version>0&&H.__version!==I.version){tt(H,I,A);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+A)}function Y(I,A){const H=n.get(I);if(I.version>0&&H.__version!==I.version){ct(H,I,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+A)}const at={[ar]:i.REPEAT,[Ei]:i.CLAMP_TO_EDGE,[$a]:i.MIRRORED_REPEAT},ut={[xn]:i.NEAREST,[Qf]:i.NEAREST_MIPMAP_NEAREST,[po]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[Nr]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},Tt={[id]:i.NEVER,[ld]:i.ALWAYS,[sd]:i.LESS,[pu]:i.LEQUAL,[od]:i.EQUAL,[cd]:i.GEQUAL,[rd]:i.GREATER,[ad]:i.NOTEQUAL};function Bt(I,A){if(A.type===Gn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Rn||A.magFilter===Nr||A.magFilter===po||A.magFilter===bi||A.minFilter===Rn||A.minFilter===Nr||A.minFilter===po||A.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,at[A.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,at[A.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,at[A.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ut[A.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ut[A.minFilter]),A.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Tt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===xn||A.minFilter!==po&&A.minFilter!==bi||A.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ce(I,A){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",E));const et=A.source;let it=f.get(et);it===void 0&&(it={},f.set(et,it));const j=G(A);if(j!==I.__cacheKey){it[j]===void 0&&(it[j]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,H=!0),it[j].usedTimes++;const Rt=it[I.__cacheKey];Rt!==void 0&&(it[I.__cacheKey].usedTimes--,Rt.usedTimes===0&&S(A)),I.__cacheKey=j,I.__webglTexture=it[j].texture}return H}function tt(I,A,H){let et=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(et=i.TEXTURE_3D);const it=ce(I,A),j=A.source;e.bindTexture(et,I.__webglTexture,i.TEXTURE0+H);const Rt=n.get(j);if(j.version!==Rt.__version||it===!0){e.activeTexture(i.TEXTURE0+H);const mt=ee.getPrimaries(ee.workingColorSpace),yt=A.colorSpace===ti?null:ee.getPrimaries(A.colorSpace),jt=A.colorSpace===ti||mt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let rt=x(A.image,!1,s.maxTextureSize);rt=ue(A,rt);const St=o.convert(A.format,A.colorSpace),Dt=o.convert(A.type);let Nt=_(A.internalFormat,St,Dt,A.colorSpace,A.isVideoTexture);Bt(et,A);let Et;const $t=A.mipmaps,Vt=A.isVideoTexture!==!0,he=Rt.__version===void 0||it===!0,O=j.dataReady,ft=b(A,rt);if(A.isDepthTexture)Nt=v(A.format===fs,A.type),he&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,Nt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Nt,rt.width,rt.height,0,St,Dt,null));else if(A.isDataTexture)if($t.length>0){Vt&&he&&e.texStorage2D(i.TEXTURE_2D,ft,Nt,$t[0].width,$t[0].height);for(let Z=0,nt=$t.length;Z<nt;Z++)Et=$t[Z],Vt?O&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Et.width,Et.height,St,Dt,Et.data):e.texImage2D(i.TEXTURE_2D,Z,Nt,Et.width,Et.height,0,St,Dt,Et.data);A.generateMipmaps=!1}else Vt?(he&&e.texStorage2D(i.TEXTURE_2D,ft,Nt,rt.width,rt.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,St,Dt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,rt.width,rt.height,0,St,Dt,rt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Vt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Nt,$t[0].width,$t[0].height,rt.depth);for(let Z=0,nt=$t.length;Z<nt;Z++)if(Et=$t[Z],A.format!==vn)if(St!==null)if(Vt){if(O)if(A.layerUpdates.size>0){const vt=dh(Et.width,Et.height,A.format,A.type);for(const gt of A.layerUpdates){const kt=Et.data.subarray(gt*vt/Et.data.BYTES_PER_ELEMENT,(gt+1)*vt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,gt,Et.width,Et.height,1,St,kt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Et.width,Et.height,rt.depth,St,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Nt,Et.width,Et.height,rt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Et.width,Et.height,rt.depth,St,Dt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Nt,Et.width,Et.height,rt.depth,0,St,Dt,Et.data)}else{Vt&&he&&e.texStorage2D(i.TEXTURE_2D,ft,Nt,$t[0].width,$t[0].height);for(let Z=0,nt=$t.length;Z<nt;Z++)Et=$t[Z],A.format!==vn?St!==null?Vt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Et.width,Et.height,St,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Nt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?O&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Et.width,Et.height,St,Dt,Et.data):e.texImage2D(i.TEXTURE_2D,Z,Nt,Et.width,Et.height,0,St,Dt,Et.data)}else if(A.isDataArrayTexture)if(Vt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Nt,rt.width,rt.height,rt.depth),O)if(A.layerUpdates.size>0){const Z=dh(rt.width,rt.height,A.format,A.type);for(const nt of A.layerUpdates){const vt=rt.data.subarray(nt*Z/rt.data.BYTES_PER_ELEMENT,(nt+1)*Z/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,rt.width,rt.height,1,St,Dt,vt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,St,Dt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,rt.width,rt.height,rt.depth,0,St,Dt,rt.data);else if(A.isData3DTexture)Vt?(he&&e.texStorage3D(i.TEXTURE_3D,ft,Nt,rt.width,rt.height,rt.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,St,Dt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,rt.width,rt.height,rt.depth,0,St,Dt,rt.data);else if(A.isFramebufferTexture){if(he)if(Vt)e.texStorage2D(i.TEXTURE_2D,ft,Nt,rt.width,rt.height);else{let Z=rt.width,nt=rt.height;for(let vt=0;vt<ft;vt++)e.texImage2D(i.TEXTURE_2D,vt,Nt,Z,nt,0,St,Dt,null),Z>>=1,nt>>=1}}else if($t.length>0){if(Vt&&he){const Z=Ct($t[0]);e.texStorage2D(i.TEXTURE_2D,ft,Nt,Z.width,Z.height)}for(let Z=0,nt=$t.length;Z<nt;Z++)Et=$t[Z],Vt?O&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,St,Dt,Et):e.texImage2D(i.TEXTURE_2D,Z,Nt,St,Dt,Et);A.generateMipmaps=!1}else if(Vt){if(he){const Z=Ct(rt);e.texStorage2D(i.TEXTURE_2D,ft,Nt,Z.width,Z.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Dt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Nt,St,Dt,rt);m(A)&&p(et),Rt.__version=j.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function ct(I,A,H){if(A.image.length!==6)return;const et=ce(I,A),it=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+H);const j=n.get(it);if(it.version!==j.__version||et===!0){e.activeTexture(i.TEXTURE0+H);const Rt=ee.getPrimaries(ee.workingColorSpace),mt=A.colorSpace===ti?null:ee.getPrimaries(A.colorSpace),yt=A.colorSpace===ti||Rt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const jt=A.isCompressedTexture||A.image[0].isCompressedTexture,rt=A.image[0]&&A.image[0].isDataTexture,St=[];for(let nt=0;nt<6;nt++)!jt&&!rt?St[nt]=x(A.image[nt],!0,s.maxCubemapSize):St[nt]=rt?A.image[nt].image:A.image[nt],St[nt]=ue(A,St[nt]);const Dt=St[0],Nt=o.convert(A.format,A.colorSpace),Et=o.convert(A.type),$t=_(A.internalFormat,Nt,Et,A.colorSpace),Vt=A.isVideoTexture!==!0,he=j.__version===void 0||et===!0,O=it.dataReady;let ft=b(A,Dt);Bt(i.TEXTURE_CUBE_MAP,A);let Z;if(jt){Vt&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,$t,Dt.width,Dt.height);for(let nt=0;nt<6;nt++){Z=St[nt].mipmaps;for(let vt=0;vt<Z.length;vt++){const gt=Z[vt];A.format!==vn?Nt!==null?Vt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,0,0,gt.width,gt.height,Nt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,$t,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,0,0,gt.width,gt.height,Nt,Et,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,$t,gt.width,gt.height,0,Nt,Et,gt.data)}}}else{if(Z=A.mipmaps,Vt&&he){Z.length>0&&ft++;const nt=Ct(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,$t,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(rt){Vt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,St[nt].width,St[nt].height,Nt,Et,St[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,$t,St[nt].width,St[nt].height,0,Nt,Et,St[nt].data);for(let vt=0;vt<Z.length;vt++){const kt=Z[vt].image[nt].image;Vt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,0,0,kt.width,kt.height,Nt,Et,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,$t,kt.width,kt.height,0,Nt,Et,kt.data)}}else{Vt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Nt,Et,St[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,$t,Nt,Et,St[nt]);for(let vt=0;vt<Z.length;vt++){const gt=Z[vt];Vt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,0,0,Nt,Et,gt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,$t,Nt,Et,gt.image[nt])}}}m(A)&&p(i.TEXTURE_CUBE_MAP),j.__version=it.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function At(I,A,H,et,it,j){const Rt=o.convert(H.format,H.colorSpace),mt=o.convert(H.type),yt=_(H.internalFormat,Rt,mt,H.colorSpace),jt=n.get(A),rt=n.get(H);if(rt.__renderTarget=A,!jt.__hasExternalTextures){const St=Math.max(1,A.width>>j),Dt=Math.max(1,A.height>>j);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,j,yt,St,Dt,A.depth,0,Rt,mt,null):e.texImage2D(it,j,yt,St,Dt,0,Rt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Kt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,it,rt.__webglTexture,0,Zt(A)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,it,rt.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(I,A,H){if(i.bindRenderbuffer(i.RENDERBUFFER,I),A.depthBuffer){const et=A.depthTexture,it=et&&et.isDepthTexture?et.type:null,j=v(A.stencilBuffer,it),Rt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=Zt(A);Kt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,j,A.width,A.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,j,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,j,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,I)}else{const et=A.textures;for(let it=0;it<et.length;it++){const j=et[it],Rt=o.convert(j.format,j.colorSpace),mt=o.convert(j.type),yt=_(j.internalFormat,Rt,mt,j.colorSpace),jt=Zt(A);H&&Kt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,yt,A.width,A.height):Kt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,yt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,yt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=n.get(A.depthTexture);et.__renderTarget=A,(!et.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),W(A.depthTexture,0);const it=et.__webglTexture,j=Zt(A);if(A.depthTexture.format===ns)Kt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(A.depthTexture.format===fs)Kt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Ot(I){const A=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const et=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),et){const it=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,et.removeEventListener("dispose",it)};et.addEventListener("dispose",it),A.__depthDisposeCallback=it}A.__boundDepthTexture=et}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ut(A.__webglFramebuffer,I)}else if(H){A.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[et]),A.__webglDepthbuffer[et]===void 0)A.__webglDepthbuffer[et]=i.createRenderbuffer(),pt(A.__webglDepthbuffer[et],I,!1);else{const it=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=A.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),pt(A.__webglDepthbuffer,I,!1);else{const et=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(I,A,H){const et=n.get(I);A!==void 0&&At(et.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Ot(I)}function me(I){const A=I.texture,H=n.get(I),et=n.get(A);I.addEventListener("dispose",T);const it=I.textures,j=I.isWebGLCubeRenderTarget===!0,Rt=it.length>1;if(Rt||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=A.version,r.memory.textures++),j){H.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer[mt]=[];for(let yt=0;yt<A.mipmaps.length;yt++)H.__webglFramebuffer[mt][yt]=i.createFramebuffer()}else H.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer=[];for(let mt=0;mt<A.mipmaps.length;mt++)H.__webglFramebuffer[mt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let mt=0,yt=it.length;mt<yt;mt++){const jt=n.get(it[mt]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),r.memory.textures++)}if(I.samples>0&&Kt(I)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let mt=0;mt<it.length;mt++){const yt=it[mt];H.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[mt]);const jt=o.convert(yt.format,yt.colorSpace),rt=o.convert(yt.type),St=_(yt.internalFormat,jt,rt,yt.colorSpace,I.isXRRenderTarget===!0),Dt=Zt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,St,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,H.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(H.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,A);for(let mt=0;mt<6;mt++)if(A.mipmaps&&A.mipmaps.length>0)for(let yt=0;yt<A.mipmaps.length;yt++)At(H.__webglFramebuffer[mt][yt],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,yt);else At(H.__webglFramebuffer[mt],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(A)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let mt=0,yt=it.length;mt<yt;mt++){const jt=it[mt],rt=n.get(jt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),Bt(i.TEXTURE_2D,jt),At(H.__webglFramebuffer,I,jt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),m(jt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(mt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,et.__webglTexture),Bt(mt,A),A.mipmaps&&A.mipmaps.length>0)for(let yt=0;yt<A.mipmaps.length;yt++)At(H.__webglFramebuffer[yt],I,A,i.COLOR_ATTACHMENT0,mt,yt);else At(H.__webglFramebuffer,I,A,i.COLOR_ATTACHMENT0,mt,0);m(A)&&p(mt),e.unbindTexture()}I.depthBuffer&&Ot(I)}function Jt(I){const A=I.textures;for(let H=0,et=A.length;H<et;H++){const it=A[H];if(m(it)){const j=M(I),Rt=n.get(it).__webglTexture;e.bindTexture(j,Rt),p(j),e.unbindTexture()}}}const Me=[],F=[];function on(I){if(I.samples>0){if(Kt(I)===!1){const A=I.textures,H=I.width,et=I.height;let it=i.COLOR_BUFFER_BIT;const j=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(I),mt=A.length>1;if(mt)for(let yt=0;yt<A.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let yt=0;yt<A.length;yt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[yt]);const jt=n.get(A[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,H,et,0,0,H,et,it,i.NEAREST),c===!0&&(Me.length=0,F.length=0,Me.push(i.COLOR_ATTACHMENT0+yt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Me.push(j),F.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let yt=0;yt<A.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[yt]);const jt=n.get(A[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const A=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Zt(I){return Math.min(s.maxSamples,I.samples)}function Kt(I){const A=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Pt(I){const A=r.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function ue(I,A){const H=I.colorSpace,et=I.format,it=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==ds&&H!==ti&&(ee.getTransfer(H)===oe?(et!==vn||it!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),A}function Ct(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=Y,this.rebindTextures=Xt,this.setupRenderTarget=me,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Kt}function Z_(i,t){function e(n,s=ti){let o;const r=ee.getTransfer(s);if(n===Yn)return i.UNSIGNED_BYTE;if(n===nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ou)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===iu)return i.BYTE;if(n===su)return i.SHORT;if(n===qs)return i.UNSIGNED_SHORT;if(n===el)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===Wn)return i.HALF_FLOAT;if(n===ru)return i.ALPHA;if(n===au)return i.RGB;if(n===vn)return i.RGBA;if(n===cu)return i.LUMINANCE;if(n===lu)return i.LUMINANCE_ALPHA;if(n===ns)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===hu)return i.RED;if(n===sl)return i.RED_INTEGER;if(n===uu)return i.RG;if(n===ol)return i.RG_INTEGER;if(n===rl)return i.RGBA_INTEGER;if(n===Ko||n===$o||n===Jo||n===jo)if(r===oe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ko)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ko)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$o)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ja||n===ja||n===Qa||n===tc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ja)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ec||n===nc||n===ic)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===ec||n===nc)return r===oe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===ic)return r===oe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sc||n===oc||n===rc||n===ac||n===cc||n===lc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc||n===_c)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===sc)return r===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oc)return r===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return r===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ac)return r===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cc)return r===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lc)return r===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hc)return r===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uc)return r===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fc)return r===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dc)return r===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pc)return r===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mc)return r===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gc)return r===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_c)return r===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qo||n===vc||n===xc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Qo)return r===oe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fu||n===Mc||n===yc||n===wc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Qo)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Mc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const K_={type:"move"};class ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(K_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const $_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J_=`
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

}`;class j_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Xe,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ze({vertexShader:$_,fragmentShader:J_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new L(new ye(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q_ extends xs{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const x=new j_,m=e.getContextAttributes();let p=null,M=null;const _=[],v=[],b=new lt;let E=null;const T=new tn;T.viewport=new re;const C=new tn;C.viewport=new re;const S=[T,C],y=new Mp;let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ct=_[tt];return ct===void 0&&(ct=new ga,_[tt]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(tt){let ct=_[tt];return ct===void 0&&(ct=new ga,_[tt]=ct),ct.getGripSpace()},this.getHand=function(tt){let ct=_[tt];return ct===void 0&&(ct=new ga,_[tt]=ct),ct.getHandSpace()};function N(tt){const ct=v.indexOf(tt.inputSource);if(ct===-1)return;const At=_[ct];At!==void 0&&(At.update(tt.inputSource,tt.frame,l||r),At.dispatchEvent({type:tt.type,data:tt.inputSource}))}function G(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",W);for(let tt=0;tt<_.length;tt++){const ct=v[tt];ct!==null&&(v[tt]=null,_[tt].disconnect(ct))}P=null,U=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,M=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){o=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(tt){l=tt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",G),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(b),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let At=null,pt=null,Ut=null;m.depth&&(Ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=m.stencil?fs:ns,pt=m.stencil?us:Pi);const Ot={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:o};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Ot),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Mn(f.textureWidth,f.textureHeight,{format:vn,type:Yn,depthTexture:new Au(f.textureWidth,f.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const At={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Mn(d.framebufferWidth,d.framebufferHeight,{format:vn,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(tt){for(let ct=0;ct<tt.removed.length;ct++){const At=tt.removed[ct],pt=v.indexOf(At);pt>=0&&(v[pt]=null,_[pt].disconnect(At))}for(let ct=0;ct<tt.added.length;ct++){const At=tt.added[ct];let pt=v.indexOf(At);if(pt===-1){for(let Ot=0;Ot<_.length;Ot++)if(Ot>=v.length){v.push(At),pt=Ot;break}else if(v[Ot]===null){v[Ot]=At,pt=Ot;break}if(pt===-1)break}const Ut=_[pt];Ut&&Ut.connect(At)}}const q=new D,J=new D;function Y(tt,ct,At){q.setFromMatrixPosition(ct.matrixWorld),J.setFromMatrixPosition(At.matrixWorld);const pt=q.distanceTo(J),Ut=ct.projectionMatrix.elements,Ot=At.projectionMatrix.elements,Xt=Ut[14]/(Ut[10]-1),me=Ut[14]/(Ut[10]+1),Jt=(Ut[9]+1)/Ut[5],Me=(Ut[9]-1)/Ut[5],F=(Ut[8]-1)/Ut[0],on=(Ot[8]+1)/Ot[0],Zt=Xt*F,Kt=Xt*on,Pt=pt/(-F+on),ue=Pt*-F;if(ct.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(ue),tt.translateZ(Pt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Ut[10]===-1)tt.projectionMatrix.copy(ct.projectionMatrix),tt.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Ct=Xt+Pt,I=me+Pt,A=Zt-ue,H=Kt+(pt-ue),et=Jt*me/I*Ct,it=Me*me/I*Ct;tt.projectionMatrix.makePerspective(A,H,et,it,Ct,I),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function at(tt,ct){ct===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ct.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let ct=tt.near,At=tt.far;x.texture!==null&&(x.depthNear>0&&(ct=x.depthNear),x.depthFar>0&&(At=x.depthFar)),y.near=C.near=T.near=ct,y.far=C.far=T.far=At,(P!==y.near||U!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,U=y.far),T.layers.mask=tt.layers.mask|2,C.layers.mask=tt.layers.mask|4,y.layers.mask=T.layers.mask|C.layers.mask;const pt=tt.parent,Ut=y.cameras;at(y,pt);for(let Ot=0;Ot<Ut.length;Ot++)at(Ut[Ot],pt);Ut.length===2?Y(y,T,C):y.projectionMatrix.copy(T.projectionMatrix),ut(tt,y,pt)};function ut(tt,ct,At){At===null?tt.matrix.copy(ct.matrixWorld):(tt.matrix.copy(At.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ct.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ct.projectionMatrix),tt.projectionMatrixInverse.copy(ct.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Sc*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(tt){c=tt,f!==null&&(f.fixedFoveation=tt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=tt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let Tt=null;function Bt(tt,ct){if(h=ct.getViewerPose(l||r),g=ct,h!==null){const At=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let pt=!1;At.length!==y.cameras.length&&(y.cameras.length=0,pt=!0);for(let Ot=0;Ot<At.length;Ot++){const Xt=At[Ot];let me=null;if(d!==null)me=d.getViewport(Xt);else{const Me=u.getViewSubImage(f,Xt);me=Me.viewport,Ot===0&&(t.setRenderTargetTextures(M,Me.colorTexture,f.ignoreDepthValues?void 0:Me.depthStencilTexture),t.setRenderTarget(M))}let Jt=S[Ot];Jt===void 0&&(Jt=new tn,Jt.layers.enable(Ot),Jt.viewport=new re,S[Ot]=Jt),Jt.matrix.fromArray(Xt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Xt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(me.x,me.y,me.width,me.height),Ot===0&&(y.matrix.copy(Jt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),pt===!0&&y.cameras.push(Jt)}const Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const Ot=u.getDepthInformation(At[0]);Ot&&Ot.isValid&&Ot.texture&&x.init(t,Ot,s.renderState)}}for(let At=0;At<_.length;At++){const pt=v[At],Ut=_[At];pt!==null&&Ut!==void 0&&Ut.update(pt,ct,l||r)}Tt&&Tt(tt,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),g=null}const ce=new Bu;ce.setAnimationLoop(Bt),this.setAnimationLoop=function(tt){Tt=tt},this.dispose=function(){}}}const fi=new Cn,tv=new de;function ev(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Su(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),x(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),_=M.envMap,v=M.envMapRotation;_&&(m.envMap.value=_,fi.copy(v),fi.x*=-1,fi.y*=-1,fi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.envMapRotation.value.setFromMatrix4(tv.makeRotationFromEuler(fi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function nv(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,_){const v=_.program;n.uniformBlockBinding(M,v)}function l(M,_){let v=s[M.id];v===void 0&&(g(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",m));const b=_.program;n.updateUBOMapping(M,b);const E=t.render.frame;o[M.id]!==E&&(f(M),o[M.id]=E)}function h(M){const _=u();M.__bindingPointIndex=_;const v=i.createBuffer(),b=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,b,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const _=s[M.id],v=M.uniforms,b=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,T=v.length;E<T;E++){const C=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,y=C.length;S<y;S++){const P=C[S];if(d(P,E,S,b)===!0){const U=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let W=0;W<N.length;W++){const q=N[W],J=x(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,U+G,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,_,v,b){const E=M.value,T=_+"_"+v;if(b[T]===void 0)return typeof E=="number"||typeof E=="boolean"?b[T]=E:b[T]=E.clone(),!0;{const C=b[T];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return b[T]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(M){const _=M.uniforms;let v=0;const b=16;for(let T=0,C=_.length;T<C;T++){const S=Array.isArray(_[T])?_[T]:[_[T]];for(let y=0,P=S.length;y<P;y++){const U=S[y],N=Array.isArray(U.value)?U.value:[U.value];for(let G=0,W=N.length;G<W;G++){const q=N[G],J=x(q),Y=v%b,at=Y%J.boundary,ut=Y+at;v+=at,ut!==0&&b-ut<J.storage&&(v+=b-ut),U.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=J.storage}}}const E=v%b;return E>0&&(v+=b-E),M.__size=v,M.__cache={},this}function x(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){const _=M.target;_.removeEventListener("dispose",m);const v=r.indexOf(_.__bindingPointIndex);r.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete o[_.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);r=[],s={},o={}}return{bind:c,update:l,dispose:p}}class iv{constructor(t={}){const{canvas:e=ud(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const M=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=ii,this.toneMappingExposure=1;const v=this;let b=!1,E=0,T=0,C=null,S=-1,y=null;const P=new re,U=new re;let N=null;const G=new _t(0);let W=0,q=e.width,J=e.height,Y=1,at=null,ut=null;const Tt=new re(0,0,q,J),Bt=new re(0,0,q,J);let ce=!1;const tt=new cl;let ct=!1,At=!1;this.transmissionResolutionScale=1;const pt=new de,Ut=new de,Ot=new D,Xt=new re,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function Me(){return C===null?Y:1}let F=n;function on(R,z){return e.getContext(R,z)}try{const R={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tl}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),F===null){const z="webgl2";if(F=on(z,R),F===null)throw on(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Zt,Kt,Pt,ue,Ct,I,A,H,et,it,j,Rt,mt,yt,jt,rt,St,Dt,Nt,Et,$t,Vt,he,O;function ft(){Zt=new fg(F),Zt.init(),Vt=new Z_(F,Zt),Kt=new rg(F,Zt,t,Vt),Pt=new Y_(F,Zt),Kt.reverseDepthBuffer&&f&&Pt.buffers.depth.setReversed(!0),ue=new mg(F),Ct=new D_,I=new q_(F,Zt,Pt,Ct,Kt,Vt,ue),A=new cg(v),H=new ug(v),et=new wp(F),he=new sg(F,et),it=new dg(F,et,ue,he),j=new _g(F,it,et,ue),Nt=new gg(F,Kt,I),rt=new ag(Ct),Rt=new I_(v,A,H,Zt,Kt,he,rt),mt=new ev(v,Ct),yt=new N_,jt=new G_(Zt),Dt=new ig(v,A,H,Pt,j,d,c),St=new W_(v,j,Kt),O=new nv(F,ue,Kt,Pt),Et=new og(F,Zt,ue),$t=new pg(F,Zt,ue),ue.programs=Rt.programs,v.capabilities=Kt,v.extensions=Zt,v.properties=Ct,v.renderLists=yt,v.shadowMap=St,v.state=Pt,v.info=ue}ft();const Z=new Q_(v,F);this.xr=Z,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=Zt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Zt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(q,J,!1))},this.getSize=function(R){return R.set(q,J)},this.setSize=function(R,z,V=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,J=z,e.width=Math.floor(R*Y),e.height=Math.floor(z*Y),V===!0&&(e.style.width=R+"px",e.style.height=z+"px"),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(q*Y,J*Y).floor()},this.setDrawingBufferSize=function(R,z,V){q=R,J=z,Y=V,e.width=Math.floor(R*V),e.height=Math.floor(z*V),this.setViewport(0,0,R,z)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(Tt)},this.setViewport=function(R,z,V,X){R.isVector4?Tt.set(R.x,R.y,R.z,R.w):Tt.set(R,z,V,X),Pt.viewport(P.copy(Tt).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(Bt)},this.setScissor=function(R,z,V,X){R.isVector4?Bt.set(R.x,R.y,R.z,R.w):Bt.set(R,z,V,X),Pt.scissor(U.copy(Bt).multiplyScalar(Y).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(R){Pt.setScissorTest(ce=R)},this.setOpaqueSort=function(R){at=R},this.setTransparentSort=function(R){ut=R},this.getClearColor=function(R){return R.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(R=!0,z=!0,V=!0){let X=0;if(R){let B=!1;if(C!==null){const st=C.texture.format;B=st===rl||st===ol||st===sl}if(B){const st=C.texture.type,dt=st===Yn||st===Pi||st===qs||st===us||st===nl||st===il,Mt=Dt.getClearColor(),bt=Dt.getClearAlpha(),Ft=Mt.r,zt=Mt.g,Lt=Mt.b;dt?(g[0]=Ft,g[1]=zt,g[2]=Lt,g[3]=bt,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=Ft,x[1]=zt,x[2]=Lt,x[3]=bt,F.clearBufferiv(F.COLOR,0,x))}else X|=F.COLOR_BUFFER_BIT}z&&(X|=F.DEPTH_BUFFER_BIT),V&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Dt.dispose(),yt.dispose(),jt.dispose(),Ct.dispose(),A.dispose(),H.dispose(),j.dispose(),he.dispose(),O.dispose(),Rt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",bl),Z.removeEventListener("sessionend",Tl),oi.stop()};function nt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=ue.autoReset,z=St.enabled,V=St.autoUpdate,X=St.needsUpdate,B=St.type;ft(),ue.autoReset=R,St.enabled=z,St.autoUpdate=V,St.needsUpdate=X,St.type=B}function gt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function kt(R){const z=R.target;z.removeEventListener("dispose",kt),_e(z)}function _e(R){Fe(R),Ct.remove(R)}function Fe(R){const z=Ct.get(R).programs;z!==void 0&&(z.forEach(function(V){Rt.releaseProgram(V)}),R.isShaderMaterial&&Rt.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,V,X,B,st){z===null&&(z=me);const dt=B.isMesh&&B.matrixWorld.determinant()<0,Mt=xf(R,z,V,X,B);Pt.setMaterial(X,dt);let bt=V.index,Ft=1;if(X.wireframe===!0){if(bt=it.getWireframeAttribute(V),bt===void 0)return;Ft=2}const zt=V.drawRange,Lt=V.attributes.position;let Qt=zt.start*Ft,ne=(zt.start+zt.count)*Ft;st!==null&&(Qt=Math.max(Qt,st.start*Ft),ne=Math.min(ne,(st.start+st.count)*Ft)),bt!==null?(Qt=Math.max(Qt,0),ne=Math.min(ne,bt.count)):Lt!=null&&(Qt=Math.max(Qt,0),ne=Math.min(ne,Lt.count));const Se=ne-Qt;if(Se<0||Se===1/0)return;he.setup(B,X,Mt,V,bt);let ve,te=Et;if(bt!==null&&(ve=et.get(bt),te=$t,te.setIndex(ve)),B.isMesh)X.wireframe===!0?(Pt.setLineWidth(X.wireframeLinewidth*Me()),te.setMode(F.LINES)):te.setMode(F.TRIANGLES);else if(B.isLine){let It=X.linewidth;It===void 0&&(It=1),Pt.setLineWidth(It*Me()),B.isLineSegments?te.setMode(F.LINES):B.isLineLoop?te.setMode(F.LINE_LOOP):te.setMode(F.LINE_STRIP)}else B.isPoints?te.setMode(F.POINTS):B.isSprite&&te.setMode(F.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)te.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))te.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const It=B._multiDrawStarts,De=B._multiDrawCounts,ie=B._multiDrawCount,dn=bt?et.get(bt).bytesPerElement:1,Ni=Ct.get(X).currentProgram.getUniforms();for(let Je=0;Je<ie;Je++)Ni.setValue(F,"_gl_DrawID",Je),te.render(It[Je]/dn,De[Je])}else if(B.isInstancedMesh)te.renderInstances(Qt,Se,B.count);else if(V.isInstancedBufferGeometry){const It=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,De=Math.min(V.instanceCount,It);te.renderInstances(Qt,Se,De)}else te.render(Qt,Se)};function se(R,z,V){R.transparent===!0&&R.side===Ht&&R.forceSinglePass===!1?(R.side=We,R.needsUpdate=!0,fo(R,z,V),R.side=si,R.needsUpdate=!0,fo(R,z,V),R.side=Ht):fo(R,z,V)}this.compile=function(R,z,V=null){V===null&&(V=R),p=jt.get(V),p.init(z),_.push(p),V.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),R!==V&&R.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const X=new Set;return R.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const st=B.material;if(st)if(Array.isArray(st))for(let dt=0;dt<st.length;dt++){const Mt=st[dt];se(Mt,V,B),X.add(Mt)}else se(st,V,B),X.add(st)}),_.pop(),p=null,X},this.compileAsync=function(R,z,V=null){const X=this.compile(R,z,V);return new Promise(B=>{function st(){if(X.forEach(function(dt){Ct.get(dt).currentProgram.isReady()&&X.delete(dt)}),X.size===0){B(R);return}setTimeout(st,10)}Zt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let fn=null;function In(R){fn&&fn(R)}function bl(){oi.stop()}function Tl(){oi.start()}const oi=new Bu;oi.setAnimationLoop(In),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(R){fn=R,Z.setAnimationLoop(R),R===null?oi.stop():oi.start()},Z.addEventListener("sessionstart",bl),Z.addEventListener("sessionend",Tl),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(z),z=Z.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,z,C),p=jt.get(R,_.length),p.init(z),_.push(p),Ut.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),tt.setFromProjectionMatrix(Ut),At=this.localClippingEnabled,ct=rt.init(this.clippingPlanes,At),m=yt.get(R,M.length),m.init(),M.push(m),Z.enabled===!0&&Z.isPresenting===!0){const st=v.xr.getDepthSensingMesh();st!==null&&Dr(st,z,-1/0,v.sortObjects)}Dr(R,z,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(at,ut),Jt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Jt&&Dt.addToRenderList(m,R),this.info.render.frame++,ct===!0&&rt.beginShadows();const V=p.state.shadowsArray;St.render(V,R,z),ct===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,B=m.transmissive;if(p.setupLights(),z.isArrayCamera){const st=z.cameras;if(B.length>0)for(let dt=0,Mt=st.length;dt<Mt;dt++){const bt=st[dt];Rl(X,B,R,bt)}Jt&&Dt.render(R);for(let dt=0,Mt=st.length;dt<Mt;dt++){const bt=st[dt];Al(m,R,bt,bt.viewport)}}else B.length>0&&Rl(X,B,R,z),Jt&&Dt.render(R),Al(m,R,z);C!==null&&T===0&&(I.updateMultisampleRenderTarget(C),I.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(v,R,z),he.resetDefaultState(),S=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],ct===!0&&rt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Dr(R,z,V,X){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)V=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||tt.intersectsSprite(R)){X&&Xt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ut);const dt=j.update(R),Mt=R.material;Mt.visible&&m.push(R,dt,Mt,V,Xt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||tt.intersectsObject(R))){const dt=j.update(R),Mt=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Xt.copy(R.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Xt.copy(dt.boundingSphere.center)),Xt.applyMatrix4(R.matrixWorld).applyMatrix4(Ut)),Array.isArray(Mt)){const bt=dt.groups;for(let Ft=0,zt=bt.length;Ft<zt;Ft++){const Lt=bt[Ft],Qt=Mt[Lt.materialIndex];Qt&&Qt.visible&&m.push(R,dt,Qt,V,Xt.z,Lt)}}else Mt.visible&&m.push(R,dt,Mt,V,Xt.z,null)}}const st=R.children;for(let dt=0,Mt=st.length;dt<Mt;dt++)Dr(st[dt],z,V,X)}function Al(R,z,V,X){const B=R.opaque,st=R.transmissive,dt=R.transparent;p.setupLightsView(V),ct===!0&&rt.setGlobalState(v.clippingPlanes,V),X&&Pt.viewport(P.copy(X)),B.length>0&&uo(B,z,V),st.length>0&&uo(st,z,V),dt.length>0&&uo(dt,z,V),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Rl(R,z,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Mn(1,1,{generateMipmaps:!0,type:Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float")?Wn:Yn,minFilter:bi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const st=p.state.transmissionRenderTarget[X.id],dt=X.viewport||P;st.setSize(dt.z*v.transmissionResolutionScale,dt.w*v.transmissionResolutionScale);const Mt=v.getRenderTarget();v.setRenderTarget(st),v.getClearColor(G),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Jt&&Dt.render(V);const bt=v.toneMapping;v.toneMapping=ii;const Ft=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ct===!0&&rt.setGlobalState(v.clippingPlanes,X),uo(R,V,X),I.updateMultisampleRenderTarget(st),I.updateRenderTargetMipmap(st),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Lt=0,Qt=z.length;Lt<Qt;Lt++){const ne=z[Lt],Se=ne.object,ve=ne.geometry,te=ne.material,It=ne.group;if(te.side===Ht&&Se.layers.test(X.layers)){const De=te.side;te.side=We,te.needsUpdate=!0,Cl(Se,V,X,ve,te,It),te.side=De,te.needsUpdate=!0,zt=!0}}zt===!0&&(I.updateMultisampleRenderTarget(st),I.updateRenderTargetMipmap(st))}v.setRenderTarget(Mt),v.setClearColor(G,W),Ft!==void 0&&(X.viewport=Ft),v.toneMapping=bt}function uo(R,z,V){const X=z.isScene===!0?z.overrideMaterial:null;for(let B=0,st=R.length;B<st;B++){const dt=R[B],Mt=dt.object,bt=dt.geometry,Ft=X===null?dt.material:X,zt=dt.group;Mt.layers.test(V.layers)&&Cl(Mt,z,V,bt,Ft,zt)}}function Cl(R,z,V,X,B,st){R.onBeforeRender(v,z,V,X,B,st),R.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),B.onBeforeRender(v,z,V,X,R,st),B.transparent===!0&&B.side===Ht&&B.forceSinglePass===!1?(B.side=We,B.needsUpdate=!0,v.renderBufferDirect(V,z,X,B,R,st),B.side=si,B.needsUpdate=!0,v.renderBufferDirect(V,z,X,B,R,st),B.side=Ht):v.renderBufferDirect(V,z,X,B,R,st),R.onAfterRender(v,z,V,X,B,st)}function fo(R,z,V){z.isScene!==!0&&(z=me);const X=Ct.get(R),B=p.state.lights,st=p.state.shadowsArray,dt=B.state.version,Mt=Rt.getParameters(R,B.state,st,z,V),bt=Rt.getProgramCacheKey(Mt);let Ft=X.programs;X.environment=R.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(R.isMeshStandardMaterial?H:A).get(R.envMap||X.environment),X.envMapRotation=X.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,Ft===void 0&&(R.addEventListener("dispose",kt),Ft=new Map,X.programs=Ft);let zt=Ft.get(bt);if(zt!==void 0){if(X.currentProgram===zt&&X.lightsStateVersion===dt)return Ll(R,Mt),zt}else Mt.uniforms=Rt.getUniforms(R),R.onBeforeCompile(Mt,v),zt=Rt.acquireProgram(Mt,bt),Ft.set(bt,zt),X.uniforms=Mt.uniforms;const Lt=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Lt.clippingPlanes=rt.uniform),Ll(R,Mt),X.needsLights=yf(R),X.lightsStateVersion=dt,X.needsLights&&(Lt.ambientLightColor.value=B.state.ambient,Lt.lightProbe.value=B.state.probe,Lt.directionalLights.value=B.state.directional,Lt.directionalLightShadows.value=B.state.directionalShadow,Lt.spotLights.value=B.state.spot,Lt.spotLightShadows.value=B.state.spotShadow,Lt.rectAreaLights.value=B.state.rectArea,Lt.ltc_1.value=B.state.rectAreaLTC1,Lt.ltc_2.value=B.state.rectAreaLTC2,Lt.pointLights.value=B.state.point,Lt.pointLightShadows.value=B.state.pointShadow,Lt.hemisphereLights.value=B.state.hemi,Lt.directionalShadowMap.value=B.state.directionalShadowMap,Lt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Lt.spotShadowMap.value=B.state.spotShadowMap,Lt.spotLightMatrix.value=B.state.spotLightMatrix,Lt.spotLightMap.value=B.state.spotLightMap,Lt.pointShadowMap.value=B.state.pointShadowMap,Lt.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=zt,X.uniformsList=null,zt}function Pl(R){if(R.uniformsList===null){const z=R.currentProgram.getUniforms();R.uniformsList=tr.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function Ll(R,z){const V=Ct.get(R);V.outputColorSpace=z.outputColorSpace,V.batching=z.batching,V.batchingColor=z.batchingColor,V.instancing=z.instancing,V.instancingColor=z.instancingColor,V.instancingMorph=z.instancingMorph,V.skinning=z.skinning,V.morphTargets=z.morphTargets,V.morphNormals=z.morphNormals,V.morphColors=z.morphColors,V.morphTargetsCount=z.morphTargetsCount,V.numClippingPlanes=z.numClippingPlanes,V.numIntersection=z.numClipIntersection,V.vertexAlphas=z.vertexAlphas,V.vertexTangents=z.vertexTangents,V.toneMapping=z.toneMapping}function xf(R,z,V,X,B){z.isScene!==!0&&(z=me),I.resetTextureUnits();const st=z.fog,dt=X.isMeshStandardMaterial?z.environment:null,Mt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ds,bt=(X.isMeshStandardMaterial?H:A).get(X.envMap||dt),Ft=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,zt=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Lt=!!V.morphAttributes.position,Qt=!!V.morphAttributes.normal,ne=!!V.morphAttributes.color;let Se=ii;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Se=v.toneMapping);const ve=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,te=ve!==void 0?ve.length:0,It=Ct.get(X),De=p.state.lights;if(ct===!0&&(At===!0||R!==y)){const ke=R===y&&X.id===S;rt.setState(X,R,ke)}let ie=!1;X.version===It.__version?(It.needsLights&&It.lightsStateVersion!==De.state.version||It.outputColorSpace!==Mt||B.isBatchedMesh&&It.batching===!1||!B.isBatchedMesh&&It.batching===!0||B.isBatchedMesh&&It.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&It.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&It.instancing===!1||!B.isInstancedMesh&&It.instancing===!0||B.isSkinnedMesh&&It.skinning===!1||!B.isSkinnedMesh&&It.skinning===!0||B.isInstancedMesh&&It.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&It.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&It.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&It.instancingMorph===!1&&B.morphTexture!==null||It.envMap!==bt||X.fog===!0&&It.fog!==st||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==rt.numPlanes||It.numIntersection!==rt.numIntersection)||It.vertexAlphas!==Ft||It.vertexTangents!==zt||It.morphTargets!==Lt||It.morphNormals!==Qt||It.morphColors!==ne||It.toneMapping!==Se||It.morphTargetsCount!==te)&&(ie=!0):(ie=!0,It.__version=X.version);let dn=It.currentProgram;ie===!0&&(dn=fo(X,z,B));let Ni=!1,Je=!1,Ss=!1;const pe=dn.getUniforms(),rn=It.uniforms;if(Pt.useProgram(dn.program)&&(Ni=!0,Je=!0,Ss=!0),X.id!==S&&(S=X.id,Je=!0),Ni||y!==R){Pt.buffers.depth.getReversed()?(pt.copy(R.projectionMatrix),dd(pt),pd(pt),pe.setValue(F,"projectionMatrix",pt)):pe.setValue(F,"projectionMatrix",R.projectionMatrix),pe.setValue(F,"viewMatrix",R.matrixWorldInverse);const Ye=pe.map.cameraPosition;Ye!==void 0&&Ye.setValue(F,Ot.setFromMatrixPosition(R.matrixWorld)),Kt.logarithmicDepthBuffer&&pe.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pe.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,Je=!0,Ss=!0)}if(B.isSkinnedMesh){pe.setOptional(F,B,"bindMatrix"),pe.setOptional(F,B,"bindMatrixInverse");const ke=B.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),pe.setValue(F,"boneTexture",ke.boneTexture,I))}B.isBatchedMesh&&(pe.setOptional(F,B,"batchingTexture"),pe.setValue(F,"batchingTexture",B._matricesTexture,I),pe.setOptional(F,B,"batchingIdTexture"),pe.setValue(F,"batchingIdTexture",B._indirectTexture,I),pe.setOptional(F,B,"batchingColorTexture"),B._colorsTexture!==null&&pe.setValue(F,"batchingColorTexture",B._colorsTexture,I));const an=V.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&Nt.update(B,V,dn),(Je||It.receiveShadow!==B.receiveShadow)&&(It.receiveShadow=B.receiveShadow,pe.setValue(F,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(rn.envMap.value=bt,rn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(rn.envMapIntensity.value=z.environmentIntensity),Je&&(pe.setValue(F,"toneMappingExposure",v.toneMappingExposure),It.needsLights&&Mf(rn,Ss),st&&X.fog===!0&&mt.refreshFogUniforms(rn,st),mt.refreshMaterialUniforms(rn,X,Y,J,p.state.transmissionRenderTarget[R.id]),tr.upload(F,Pl(It),rn,I)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(tr.upload(F,Pl(It),rn,I),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pe.setValue(F,"center",B.center),pe.setValue(F,"modelViewMatrix",B.modelViewMatrix),pe.setValue(F,"normalMatrix",B.normalMatrix),pe.setValue(F,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const ke=X.uniformsGroups;for(let Ye=0,Ur=ke.length;Ye<Ur;Ye++){const ri=ke[Ye];O.update(ri,dn),O.bind(ri,dn)}}return dn}function Mf(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function yf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,z,V){Ct.get(R.texture).__webglTexture=z,Ct.get(R.depthTexture).__webglTexture=V;const X=Ct.get(R);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||Zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,z){const V=Ct.get(R);V.__webglFramebuffer=z,V.__useDefaultFramebuffer=z===void 0};const wf=F.createFramebuffer();this.setRenderTarget=function(R,z=0,V=0){C=R,E=z,T=V;let X=!0,B=null,st=!1,dt=!1;if(R){const bt=Ct.get(R);if(bt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(F.FRAMEBUFFER,null),X=!1;else if(bt.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(bt.__hasExternalTextures)I.rebindTextures(R,Ct.get(R.texture).__webglTexture,Ct.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Lt=R.depthTexture;if(bt.__boundDepthTexture!==Lt){if(Lt!==null&&Ct.has(Lt)&&(R.width!==Lt.image.width||R.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}const Ft=R.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(dt=!0);const zt=Ct.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(zt[z])?B=zt[z][V]:B=zt[z],st=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?B=Ct.get(R).__webglMultisampledFramebuffer:Array.isArray(zt)?B=zt[V]:B=zt,P.copy(R.viewport),U.copy(R.scissor),N=R.scissorTest}else P.copy(Tt).multiplyScalar(Y).floor(),U.copy(Bt).multiplyScalar(Y).floor(),N=ce;if(V!==0&&(B=wf),Pt.bindFramebuffer(F.FRAMEBUFFER,B)&&X&&Pt.drawBuffers(R,B),Pt.viewport(P),Pt.scissor(U),Pt.setScissorTest(N),st){const bt=Ct.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,bt.__webglTexture,V)}else if(dt){const bt=Ct.get(R.texture),Ft=z;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,bt.__webglTexture,V,Ft)}else if(R!==null&&V!==0){const bt=Ct.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,bt.__webglTexture,V)}S=-1},this.readRenderTargetPixels=function(R,z,V,X,B,st,dt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ct.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){Pt.bindFramebuffer(F.FRAMEBUFFER,Mt);try{const bt=R.texture,Ft=bt.format,zt=bt.type;if(!Kt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-X&&V>=0&&V<=R.height-B&&F.readPixels(z,V,X,B,Vt.convert(Ft),Vt.convert(zt),st)}finally{const bt=C!==null?Ct.get(C).__webglFramebuffer:null;Pt.bindFramebuffer(F.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(R,z,V,X,B,st,dt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Ct.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){const bt=R.texture,Ft=bt.format,zt=bt.type;if(!Kt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=R.width-X&&V>=0&&V<=R.height-B){Pt.bindFramebuffer(F.FRAMEBUFFER,Mt);const Lt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Lt),F.bufferData(F.PIXEL_PACK_BUFFER,st.byteLength,F.STREAM_READ),F.readPixels(z,V,X,B,Vt.convert(Ft),Vt.convert(zt),0);const Qt=C!==null?Ct.get(C).__webglFramebuffer:null;Pt.bindFramebuffer(F.FRAMEBUFFER,Qt);const ne=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await fd(F,ne,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Lt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,st),F.deleteBuffer(Lt),F.deleteSync(ne),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,z=null,V=0){R.isTexture!==!0&&(Ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,R=arguments[1]);const X=Math.pow(2,-V),B=Math.floor(R.image.width*X),st=Math.floor(R.image.height*X),dt=z!==null?z.x:0,Mt=z!==null?z.y:0;I.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,dt,Mt,B,st),Pt.unbindTexture()};const Sf=F.createFramebuffer(),Ef=F.createFramebuffer();this.copyTextureToTexture=function(R,z,V=null,X=null,B=0,st=null){R.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1],z=arguments[2],st=arguments[3]||0,V=null),st===null&&(B!==0?(Ji("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=B,B=0):st=0);let dt,Mt,bt,Ft,zt,Lt,Qt,ne,Se;const ve=R.isCompressedTexture?R.mipmaps[st]:R.image;if(V!==null)dt=V.max.x-V.min.x,Mt=V.max.y-V.min.y,bt=V.isBox3?V.max.z-V.min.z:1,Ft=V.min.x,zt=V.min.y,Lt=V.isBox3?V.min.z:0;else{const an=Math.pow(2,-B);dt=Math.floor(ve.width*an),Mt=Math.floor(ve.height*an),R.isDataArrayTexture?bt=ve.depth:R.isData3DTexture?bt=Math.floor(ve.depth*an):bt=1,Ft=0,zt=0,Lt=0}X!==null?(Qt=X.x,ne=X.y,Se=X.z):(Qt=0,ne=0,Se=0);const te=Vt.convert(z.format),It=Vt.convert(z.type);let De;z.isData3DTexture?(I.setTexture3D(z,0),De=F.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(I.setTexture2DArray(z,0),De=F.TEXTURE_2D_ARRAY):(I.setTexture2D(z,0),De=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const ie=F.getParameter(F.UNPACK_ROW_LENGTH),dn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ni=F.getParameter(F.UNPACK_SKIP_PIXELS),Je=F.getParameter(F.UNPACK_SKIP_ROWS),Ss=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ve.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ve.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ft),F.pixelStorei(F.UNPACK_SKIP_ROWS,zt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Lt);const pe=R.isDataArrayTexture||R.isData3DTexture,rn=z.isDataArrayTexture||z.isData3DTexture;if(R.isDepthTexture){const an=Ct.get(R),ke=Ct.get(z),Ye=Ct.get(an.__renderTarget),Ur=Ct.get(ke.__renderTarget);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,Ye.__webglFramebuffer),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ur.__webglFramebuffer);for(let ri=0;ri<bt;ri++)pe&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ct.get(R).__webglTexture,B,Lt+ri),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ct.get(z).__webglTexture,st,Se+ri)),F.blitFramebuffer(Ft,zt,dt,Mt,Qt,ne,dt,Mt,F.DEPTH_BUFFER_BIT,F.NEAREST);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(B!==0||R.isRenderTargetTexture||Ct.has(R)){const an=Ct.get(R),ke=Ct.get(z);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,Sf),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ef);for(let Ye=0;Ye<bt;Ye++)pe?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,an.__webglTexture,B,Lt+Ye):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,an.__webglTexture,B),rn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.__webglTexture,st,Se+Ye):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ke.__webglTexture,st),B!==0?F.blitFramebuffer(Ft,zt,dt,Mt,Qt,ne,dt,Mt,F.COLOR_BUFFER_BIT,F.NEAREST):rn?F.copyTexSubImage3D(De,st,Qt,ne,Se+Ye,Ft,zt,dt,Mt):F.copyTexSubImage2D(De,st,Qt,ne,Ft,zt,dt,Mt);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else rn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(De,st,Qt,ne,Se,dt,Mt,bt,te,It,ve.data):z.isCompressedArrayTexture?F.compressedTexSubImage3D(De,st,Qt,ne,Se,dt,Mt,bt,te,ve.data):F.texSubImage3D(De,st,Qt,ne,Se,dt,Mt,bt,te,It,ve):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,st,Qt,ne,dt,Mt,te,It,ve.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,st,Qt,ne,ve.width,ve.height,te,ve.data):F.texSubImage2D(F.TEXTURE_2D,st,Qt,ne,dt,Mt,te,It,ve);F.pixelStorei(F.UNPACK_ROW_LENGTH,ie),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,dn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ni),F.pixelStorei(F.UNPACK_SKIP_ROWS,Je),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ss),st===0&&z.generateMipmaps&&F.generateMipmap(De),Pt.unbindTexture()},this.copyTextureToTexture3D=function(R,z,V=null,X=null,B=0){return R.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,X=arguments[1]||null,R=arguments[2],z=arguments[3],B=arguments[4]||0),Ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,z,V,X,B)},this.initRenderTarget=function(R){Ct.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),Pt.unbindTexture()},this.resetState=function(){E=0,T=0,C=null,Pt.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const sv=15,ov=6,rv=1.8,_r=8,zh=.85,Bh=.98,vr=.003,xe=90,Js=1.7,av=60,cv=45,lv=10,hv=6,uv=8,fv=4,dv=5,pv=80,mv=35,gv=30,_v=25,vv=60,Wu=3,xv=20,Mv=5,yv=30,wv=40,Sv=6,Ev=280,Pc=2.5,bv=6,kh=1.5,Lc=5,Gh=2.5,_a=12,Ne=30,Tv=4,Av=5,Rv=8,Cv=2.2,k={fog:396308,ground:1058840,bark:1708554,leaf:798740,leafGlow:4521898,mushCap:8926190,mushGlow:13400063,mushStem:2756928,crystal:3407837,crystalCore:8978414,firefly:15662950,fireflyB:6750173,spore:12320665,ambient:2241365,moon:12307694,jellyBell:7833855,jellyGlow:11193599,jellyTent:6715340,puffBody:16768460,puffGlow:16755336,puffEye:2236962,puffCheek:16746649,deerBody:11202303,deerGlow:8969727,deerAntler:13434862,deerEye:1127236,mothWing:11206553,mothGlow:13434794,mothBody:5596723,mothSpot:16777215,grassTip:3385941,fern:1725744,fernGlow:3394662,flower:16742348,flowerGlow:16751069,flowerStem:1721376,reed:2774325,reedTip:4504422,orbGold:16763955,orbGlow:16772778,orbInner:16775389,laserPink:16737962,laserGlow:16746700,obeliskBlack:657938,obeliskPink:16729258,moatBlue:3377356,rainbow:[16724787,16746547,16772659,3407718,3377407,8926207],wispCore:11202303,wispGlow:14544639,wispTrail:8965375,dandStem:4482611,dandHead:16777198,dandSeed:16775389,dandSeedGlow:16777215,fairyMush:13404415,fairyGlow:14527231,fairyRing:11167470,bubbleIris:11197951,bubbleShine:16777215,bubblePop:13434862,starMote:16772829,pondWater:2254506,pondGlow:3377356,lilyPad:2263108,lilyFlower:16746700,lilyGlow:16755421,rockBase:2763314,rockMoss:1721378,rockLight:3816005,skyDeep:198160},Be=new iv({antialias:!0,powerPreference:"default"});Be.setSize(window.innerWidth,window.innerHeight);Be.setPixelRatio(Math.min(window.devicePixelRatio,2));Be.shadowMap.enabled=!0;Be.shadowMap.type=Qh;Be.toneMapping=eu;Be.toneMappingExposure=2.5;Be.outputColorSpace=Ve;document.body.appendChild(Be.domElement);const He=new tn(65,window.innerWidth/window.innerHeight,.1,300),Xu=new zu,xt=new Fd;xt.background=new _t(k.skyDeep);xt.fog=new al(k.fog,.01);window.addEventListener("resize",()=>{He.aspect=window.innerWidth/window.innerHeight,He.updateProjectionMatrix(),Be.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("visibilitychange",()=>{document.hidden||Xu.getDelta()});const Yu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ao{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Pv=new pl(-1,1,1,-1,0,1);class Lv extends Ce{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}}const Iv=new Lv;class qu{constructor(t){this._mesh=new L(Iv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Pv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Dv extends ao{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ur.clone(t.uniforms),this.material=new Ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new qu(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Hh extends ao{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class Uv extends ao{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Nv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new lt);this._width=n.width,this._height=n.height,e=new Mn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Dv(Yu),this.copyPass.material.blending=Vn,this.clock=new zu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Hh!==void 0&&(r instanceof Hh?n=!0:r instanceof Uv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Fv extends ao{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _t}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const Ov={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _t(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class gs extends ao{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new lt(t.x,t.y):new lt(256,256),this.clearColor=new _t(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Mn(o,r,{type:Wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Mn(o,r,{type:Wn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Mn(o,r,{type:Wn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),o=Math.round(o/2),r=Math.round(r/2)}const a=Ov;this.highPassUniforms=ur.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ze({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new lt(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Yu;this.copyUniforms=ur.clone(h.uniforms),this.blendMaterial=new Ze({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:za,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new _t,this.oldClearAlpha=1,this.basic=new $,this.fsQuad=new qu(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new lt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=gs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=gs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ze({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}}gs.BlurDirectionX=new lt(1,0);gs.BlurDirectionY=new lt(0,1);let Ri=null,gl=!0;try{const i=new Fv(xt,He),t=new gs(new lt(window.innerWidth,window.innerHeight),.6,.4,.85);Ri=new Nv(Be),Ri.addPass(i),Ri.addPass(t)}catch(i){console.warn("Bloom unavailable, falling back to direct render:",i.message),gl=!1}window.addEventListener("resize",()=>{gl&&Ri&&Ri.setSize(window.innerWidth,window.innerHeight)});function Vh(){gl&&Ri?Ri.render():Be.render(xt,He)}const _l=new _p(k.ambient,k.ground,.5);xt.add(_l);const hn=new Cr(k.moon,.85);hn.position.set(30,60,-20);hn.castShadow=!0;hn.shadow.camera.left=-90;hn.shadow.camera.right=90;hn.shadow.camera.top=90;hn.shadow.camera.bottom=-90;hn.shadow.camera.near=1;hn.shadow.camera.far=250;hn.shadow.mapSize.set(2048,2048);hn.shadow.bias=-.001;xt.add(hn);const un=new Cr(2241365,.3);un.position.set(-40,45,25);un.castShadow=!0;un.shadow.camera.left=-70;un.shadow.camera.right=70;un.shadow.camera.top=70;un.shadow.camera.bottom=-70;un.shadow.camera.near=1;un.shadow.camera.far=200;un.shadow.mapSize.set(1024,1024);un.shadow.bias=-.002;xt.add(un);const Zu=new Cr(3359829,.4);Zu.position.set(-25,15,30);xt.add(Zu);const Ku=new Ui(3368516,.7,100);Ku.position.set(0,.5,0);xt.add(Ku);const zv=[{pos:[15,3,15],col:3368618,int:.8,dist:30},{pos:[-20,4,-10],col:6702216,int:.7,dist:25},{pos:[0,5,30],col:2263142,int:.7,dist:28},{pos:[-15,3,20],col:4491417,int:.6,dist:22},{pos:[25,3,-20],col:10053188,int:.5,dist:20}];for(const i of zv){const t=new Ui(i.col,i.int,i.dist);t.position.set(i.pos[0],i.pos[1],i.pos[2]),xt.add(t)}const $u=new Cr(4478327,.4);$u.position.set(-10,25,40);xt.add($u);const vl=new Ui(6719624,.6,20);xt.add(vl);const _i=[];function Bv(){for(let i=0;i<Av;i++){const t=new Ui(k.crystal,0,16);xt.add(t),_i.push(t)}}const Ns=new Ui(k.orbGold,0,15);xt.add(Ns);const Te={};let js=0,Ci=0,Lr=!1,Ju=!1,xl=0,Ml=0,yl=!1,Ir=!1,co=!1,xr=null,Ii=null,Ic=0,Dc=0,Uc=null;function kv(i){Uc=i}function Gv(i){Ju=i}function Hv(i){Ir=i}function lo(){!Ju&&Uc&&Uc()}window.addEventListener("keydown",i=>{Te[i.code]=!0,"Space ShiftLeft ShiftRight KeyW KeyA KeyS KeyD".split(" ").indexOf(i.code)>=0&&i.preventDefault(),lo()});window.addEventListener("keyup",i=>{Te[i.code]=!1});window.addEventListener("blur",()=>{for(const i in Te)Te[i]=!1;Lr=!1});Be.domElement.addEventListener("mousedown",()=>{Lr=!0,lo()});window.addEventListener("mouseup",()=>{Lr=!1});window.addEventListener("mousemove",i=>{Lr&&(js-=i.movementX*vr,Ci-=i.movementY*vr,Ci=Math.max(-1,Math.min(1,Ci)))});const Vv="ontouchstart"in window||navigator.maxTouchPoints>0,ho=document.getElementById("joy-zone"),Mr=document.getElementById("joy-knob"),wl=document.getElementById("btn-jump");Vv&&(ho.style.display="block",wl.style.display="block",document.getElementById("controls").textContent="Stick: Move · Drag right: Look · JUMP");function ju(i,t){const e=ho.getBoundingClientRect();let n=i-(e.left+e.width/2),s=t-(e.top+e.height/2);const o=Math.sqrt(n*n+s*s),r=52;o>r&&(n=n/o*r,s=s/o*r),xl=n/r,Ml=s/r,Mr.style.left=40+n+"px",Mr.style.top=40+s+"px"}ho.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),lo();const t=i.changedTouches[0];xr=t.identifier,yl=!0,ju(t.clientX,t.clientY)},{passive:!1});ho.addEventListener("touchmove",i=>{i.preventDefault(),i.stopPropagation();for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===xr&&ju(i.changedTouches[t].clientX,i.changedTouches[t].clientY)},{passive:!1});ho.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation();for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===xr&&(xr=null,yl=!1,xl=0,Ml=0,Mr.style.left="40px",Mr.style.top="40px")},{passive:!1});wl.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),lo(),Ir=!0},{passive:!1});wl.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation(),Ir=!1},{passive:!1});Be.domElement.addEventListener("touchstart",i=>{i.preventDefault(),lo();for(let t=0;t<i.changedTouches.length;t++){const e=i.changedTouches[t];e.clientX>window.innerWidth*.3&&Ii===null&&(Ii=e.identifier,Ic=e.clientX,Dc=e.clientY)}},{passive:!1});Be.domElement.addEventListener("touchmove",i=>{i.preventDefault();for(let t=0;t<i.changedTouches.length;t++){const e=i.changedTouches[t];e.identifier===Ii&&(js-=(e.clientX-Ic)*vr,Ci-=(e.clientY-Dc)*vr,Ci=Math.max(-1,Math.min(1,Ci)),Ic=e.clientX,Dc=e.clientY)}},{passive:!1});Be.domElement.addEventListener("touchend",i=>{for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Ii&&(Ii=null)},{passive:!1});Be.domElement.addEventListener("touchcancel",i=>{for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Ii&&(Ii=null)},{passive:!1});function Wv(){let i=0,t=0;Te.KeyW&&(t-=1),Te.KeyS&&(t+=1),Te.KeyA&&(i-=1),Te.KeyD&&(i+=1),yl&&(i+=xl,t+=Ml);const e=Math.sqrt(i*i+t*t);e>1&&(i/=e,t/=e);const n=ov*(Te.ShiftLeft||Te.ShiftRight||co?rv:1),s=Math.sin(js),o=Math.cos(js);return{x:(i*o+t*s)*n,z:(-i*s+t*o)*n}}const $e={mushCap:new K(.5,8,5),mushStem:new wt(.06,.1,.6,5),mushDot:new K(.06,4,3),crystal:new wt(0,.35,1.8,6),crystalSm:new wt(0,.18,.9,5),fly:new K(.06,4,3),spore:new K(.04,3,3),dandSeed:new K(.025,3,3),bubble:new K(.15,8,6),starMote:new K(.03,3,3),dustMote:new K(.035,3,3)};let Ys=42;function w(){return Ys=Ys*16807%2147483647,(Ys&2147483647)/2147483647}function Xv(){return Ys}function Yv(i){Ys=i}function qv(){const t=document.createElement("canvas");t.width=2048,t.height=2048;const e=t.getContext("2d"),n=Math.random;e.fillStyle="#1e3a2a",e.fillRect(0,0,2048,2048);const s=[{col:"rgba(25,55,30,0.3)",n:15,r:120},{col:"rgba(40,30,15,0.25)",n:12,r:100},{col:"rgba(15,40,35,0.2)",n:10,r:110},{col:"rgba(35,45,20,0.2)",n:8,r:90},{col:"rgba(20,25,15,0.25)",n:8,r:80}];for(const h of s)for(let u=0;u<h.n;u++){const f=n()*2048,d=n()*2048,g=h.r*(.5+n()*.8),x=e.createRadialGradient(f,d,0,f,d,g);x.addColorStop(0,h.col),x.addColorStop(.6,h.col.replace(/[\d.]+\)$/,parseFloat(h.col.match(/[\d.]+\)$/)[0])*.4+")")),x.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=x;for(let m=-1;m<=1;m++)for(let p=-1;p<=1;p++)e.beginPath(),e.arc(f+m*2048,d+p*2048,g,0,6.28),e.fill()}const o=[{n:80,r:25,colors:["rgba(20,45,25,0.2)","rgba(35,55,28,0.18)","rgba(28,22,12,0.2)","rgba(15,38,30,0.15)"]},{n:200,r:10,colors:["rgba(30,55,30,0.14)","rgba(45,35,18,0.12)","rgba(22,48,35,0.12)","rgba(38,28,14,0.1)"]},{n:500,r:4,colors:["rgba(25,50,28,0.1)","rgba(40,30,15,0.08)","rgba(18,42,32,0.08)","rgba(32,25,10,0.06)"]}];for(const h of o)for(let u=0;u<h.n;u++){e.fillStyle=h.colors[Math.floor(n()*h.colors.length)];const f=n()*2048,d=n()*2048;e.beginPath(),e.arc(f,d,h.r+n()*h.r*.6,0,6.28),e.fill()}const r=["rgba(60,200,100,0.06)","rgba(50,180,120,0.05)","rgba(80,160,200,0.04)","rgba(100,220,150,0.05)"];for(let h=0;h<25;h++){let u=n()*2048,f=n()*2048;const d=r[Math.floor(n()*r.length)];e.strokeStyle=d,e.lineWidth=1+n()*2,e.beginPath(),e.moveTo(u,f);let g=n()*6.28;const x=12+Math.floor(n()*16);for(let m=0;m<x;m++)g+=Math.sin(m*.6)*.5+(n()-.5)*.4,u+=Math.cos(g)*(6+n()*10),f+=Math.sin(g)*(6+n()*10),e.lineTo(u,f);if(e.stroke(),n()<.6){const m=e.createRadialGradient(u,f,0,u,f,6+n()*8);m.addColorStop(0,d.replace("0.0","0.1")),m.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=m,e.beginPath(),e.arc(u,f,6+n()*8,0,6.28),e.fill()}}e.lineWidth=1.2;for(let h=0;h<30;h++){e.strokeStyle=`rgba(20,12,5,${.15+n()*.12})`;let u=n()*2048,f=n()*2048,d=n()*6.28;e.beginPath(),e.moveTo(u,f);for(let g=0;g<10;g++)d+=Math.sin(g*.7)*.5+(n()-.5)*.35,u+=Math.cos(d)*(8+n()*14),f+=Math.sin(d)*(8+n()*14),e.lineTo(u,f);e.stroke()}const a=["rgba(55,32,12,0.3)","rgba(70,42,18,0.25)","rgba(40,55,22,0.22)","rgba(22,50,28,0.2)","rgba(60,45,20,0.25)","rgba(30,60,35,0.18)","rgba(50,25,8,0.22)","rgba(65,55,25,0.18)"];for(let h=0;h<3e3;h++){e.fillStyle=a[Math.floor(n()*a.length)];const u=n()*2048,f=n()*2048,d=.8+n()*2.5;e.beginPath(),e.arc(u,f,d,0,6.28),e.fill()}for(let h=0;h<40;h++){const u=n()*2048,f=n()*2048,d=15+n()*35,g=e.createRadialGradient(u,f,0,u,f,d),x=n();x<.4?(g.addColorStop(0,"rgba(30,65,35,0.14)"),g.addColorStop(1,"rgba(18,40,22,0)")):x<.7?(g.addColorStop(0,"rgba(25,55,45,0.12)"),g.addColorStop(1,"rgba(15,35,28,0)")):(g.addColorStop(0,"rgba(40,55,25,0.1)"),g.addColorStop(1,"rgba(22,32,14,0)")),e.fillStyle=g,e.beginPath(),e.arc(u,f,d,0,6.28),e.fill()}for(let h=0;h<400;h++){const u=n()*2048,f=n()*2048,d=1.5+n()*3.5,g=Math.floor(28+n()*42);e.fillStyle=`rgba(${g},${g-4},${g-10},0.3)`,e.beginPath(),e.arc(u,f,d,0,6.28),e.fill()}e.lineWidth=.7;for(let h=0;h<80;h++){const u=n()*2048,f=n()*2048,d=4+n()*18,g=n()*6.28;e.strokeStyle=`rgba(22,12,5,${.15+n()*.1})`,e.beginPath(),e.moveTo(u,f),e.lineTo(u+Math.cos(g)*d,f+Math.sin(g)*d),e.stroke()}const c=["rgba(80,220,120,0.08)","rgba(60,200,160,0.07)","rgba(100,180,220,0.06)","rgba(120,100,200,0.05)","rgba(200,150,80,0.04)","rgba(60,180,180,0.06)"];for(let h=0;h<300;h++){const u=n()*2048,f=n()*2048,d=c[Math.floor(n()*c.length)];if(e.fillStyle=d,e.beginPath(),e.arc(u,f,1+n()*2,0,6.28),e.fill(),n()<.3){const g=e.createRadialGradient(u,f,0,u,f,4+n()*5);g.addColorStop(0,d),g.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=g,e.beginPath(),e.arc(u,f,4+n()*5,0,6.28),e.fill()}}for(let h=0;h<150;h++){const u=n()*2048,f=n()*2048;e.fillStyle=`rgba(120,180,130,${.04+n()*.04})`,e.beginPath(),e.arc(u,f,.5+n()*1.2,0,6.28),e.fill()}const l=new ll(t);return l.wrapS=l.wrapT=ar,l.repeat.set(5,5),l.colorSpace=Ve,l}function Zv(){const i=qv(),t=new L(new Le(xe*1.5,64),new Q({map:i,color:14544605,roughness:.82,metalness:0,emissive:794132,emissiveIntensity:.18}));return t.rotation.x=-Math.PI/2,t.receiveShadow=!0,xt.add(t),t}const yr=new ae;function ei(i,t){const e=i>>16&255,n=i>>8&255,s=i&255;return`rgba(${e},${n},${s},${t})`}function ni(i,t,e,n,s,o,r){i.save(),i.translate(t,e),Math.abs(s/n-1)>.01&&i.scale(1,s/n);const a=i.createRadialGradient(0,0,0,0,0,n);a.addColorStop(0,ei(o,r)),a.addColorStop(.25,ei(o,r*.55)),a.addColorStop(.55,ei(o,r*.15)),a.addColorStop(.85,ei(o,r*.03)),a.addColorStop(1,ei(o,0)),i.fillStyle=a,i.beginPath(),i.arc(0,0,n,0,6.2832),i.fill(),i.restore()}function va(i,t,e,n,s,o,r,a){ni(i,t,e,n,s,o,r),t-n<0&&ni(i,t+a,e,n,s,o,r),t+n>a&&ni(i,t-a,e,n,s,o,r)}function Kv(){const e=document.createElement("canvas");e.width=4096,e.height=2048;const n=e.getContext("2d"),s=Math.random,o=n.createLinearGradient(0,0,0,2048);o.addColorStop(0,"#030610"),o.addColorStop(.2,"#050a18"),o.addColorStop(.4,"#0a1222"),o.addColorStop(.55,"#0c1828"),o.addColorStop(.75,"#081018"),o.addColorStop(1,"#040810"),n.fillStyle=o,n.fillRect(0,0,4096,2048);const r=[{x:.12,y:.22,rx:.18,ry:.14,col:1717094,a:.14},{x:.42,y:.28,rx:.22,ry:.1,col:2758741,a:.12},{x:.72,y:.18,rx:.16,ry:.12,col:1721446,a:.13},{x:.88,y:.32,rx:.2,ry:.09,col:3348548,a:.1},{x:.28,y:.12,rx:.14,ry:.18,col:2245768,a:.1},{x:.58,y:.38,rx:.18,ry:.07,col:4465220,a:.08},{x:.05,y:.4,rx:.15,ry:.1,col:1586005,a:.09},{x:.52,y:.15,rx:.12,ry:.16,col:2765670,a:.07}];for(const u of r){va(n,u.x*4096,u.y*2048,u.rx*4096,u.ry*2048,u.col,u.a,4096);for(let f=0;f<4;f++){const d=(u.x+(s()-.5)*u.rx)*4096,g=(u.y+(s()-.5)*u.ry)*2048,x=u.rx*4096*(.2+s()*.35),m=u.ry*2048*(.2+s()*.4);va(n,d,g,x,m,u.col,u.a*(.4+s()*.5),4096)}}const a=[2245802,2245734,4465254,5583701,3368584,2245717,3809894];for(let u=0;u<30;u++){const f=s()*4096,d=s()*2048*.55,g=40+s()*180,x=25+s()*100;va(n,f,d,g,x,a[Math.floor(s()*a.length)],.025+s()*.035,4096)}n.save(),n.globalCompositeOperation="screen";const c=.26;for(let u=0;u<50;u++){const f=u/50,d=f*4096,g=(c+Math.sin(f*Math.PI)*.06+(s()-.5)*.02)*2048,x=4096*.05+s()*4096*.035,m=2048*.04*(.4+s()*.6);ni(n,d,g,x,m,4478310,.025+s()*.015)}for(let u=0;u<25;u++){const f=.2+s()*.6,d=f*4096,g=(c+Math.sin(f*Math.PI)*.04)*2048;ni(n,d,g,4096*.03+s()*4096*.02,2048*.02+s()*2048*.01,6719658,.015+s()*.012)}for(let u=0;u<10;u++){const f=.35+s()*.3,d=f*4096,g=(c+Math.sin(f*Math.PI)*.02)*2048;ni(n,d,g,4096*.02,2048*.012,8943462,.01+s()*.008)}n.globalCompositeOperation="source-over",n.restore();for(let u=0;u<12;u++){const f=.1+s()*.8,d=f*4096,g=(c+Math.sin(f*Math.PI)*.04+(s()-.5)*.02)*2048,x=20+s()*60,m=8+s()*20;ni(n,d,g,x,m,132104,.15+s()*.1)}const l=["255,255,255","220,230,255","255,240,220","200,215,255","255,225,200","240,240,255","255,245,235"];for(let u=0;u<5e3;u++){const f=s()*4096,d=s()*2048*.65,g=.3+s()*.7,x=.1+s()*.5;n.fillStyle=`rgba(${l[Math.floor(s()*l.length)]},${x})`,n.beginPath(),n.arc(f,d,g,0,6.28),n.fill()}for(let u=0;u<3e3;u++){const f=s(),d=f*4096,x=(c+Math.sin(f*Math.PI)*.06)*2048+(s()-.5)*2048*.1;if(x<0||x>2048*.6)continue;const m=.2+s()*.6,p=.2+s()*.7;n.fillStyle=`rgba(${l[Math.floor(s()*l.length)]},${p})`,n.beginPath(),n.arc(d,x,m,0,6.28),n.fill()}for(let u=0;u<60;u++){const f=s()*4096,d=s()*2048*.58,g=1.2+s()*1.8,x=6+s()*14,m=s();let p;m<.45?p="255,255,255":m<.65?p="210,225,255":m<.8?p="255,230,200":m<.92?p="190,210,255":p="255,200,180";const M=n.createRadialGradient(f,d,0,f,d,x);M.addColorStop(0,`rgba(${p},0.5)`),M.addColorStop(.1,`rgba(${p},0.18)`),M.addColorStop(.35,`rgba(${p},0.04)`),M.addColorStop(1,`rgba(${p},0)`),n.fillStyle=M,n.beginPath(),n.arc(f,d,x,0,6.28),n.fill(),n.strokeStyle=`rgba(${p},0.12)`,n.lineWidth=.5;const _=x*.8;n.beginPath(),n.moveTo(f-_,d),n.lineTo(f+_,d),n.moveTo(f,d-_),n.lineTo(f,d+_),n.stroke(),n.fillStyle=`rgba(${p},1)`,n.beginPath(),n.arc(f,d,g,0,6.28),n.fill()}for(let u=0;u<8;u++){const f=s()*4096,d=2048*.08+s()*2048*.42,g=50+s()*90;ni(n,f,d,g,g*.7,3359846,.03);for(let x=0;x<100;x++){const m=s()*6.28,p=s()*s()*g,M=f+Math.cos(m)*p,_=d+Math.sin(m)*p*.65;if(M<0||M>4096||_<0||_>2048)continue;const v=.2+s()*.6;n.fillStyle=`rgba(255,255,255,${.25+s()*.6})`,n.beginPath(),n.arc(M,_,v,0,6.28),n.fill()}}for(let u=0;u<15;u++){const f=r[Math.floor(s()*r.length)],d=(f.x+(s()-.5)*f.rx*.5)*4096,g=(f.y+(s()-.5)*f.ry*.5)*2048,x=3+s()*8,m=n.createRadialGradient(d,g,0,d,g,x*3);m.addColorStop(0,ei(f.col,.2)),m.addColorStop(.3,ei(f.col,.06)),m.addColorStop(1,ei(f.col,0)),n.fillStyle=m,n.beginPath(),n.arc(d,g,x*3,0,6.28),n.fill()}const h=new ll(e);return h.colorSpace=Ve,h}function $v(){const i=Xv(),t=Kv(),e=new K(Ev,64,32),n=new $({map:t,side:We,fog:!1,transparent:!0,opacity:1}),s=new L(e,n);yr.add(s),xt.add(yr),Yv(i)}function Qu(i,t){yr.rotation.y=t*.003}const ot={pos:new D(0,Js,0),vel:new D,onGround:!0};let Wh=0,xa=0,tf=0,Ma=65,Xh=65,Ls=0,Yh=!0,ya=0,_s=0,Nc=[],Fc=[],Oc=null;function Jv(i,t){Nc=i,Fc=t}function jv(i){Oc=i}function Qv(i){const t=Wv(),e=Te.ShiftLeft||Te.ShiftRight||co;if(ot.vel.x=t.x,ot.vel.z=t.z,ot.vel.y-=sv*i,(Te.Space||Ir)&&ot.onGround&&(ot.vel.y=_r,ot.onGround=!1,Hv(!1)),ot.onGround||(ya=ot.vel.y),ot.pos.x+=ot.vel.x*i,ot.pos.y+=ot.vel.y*i,ot.pos.z+=ot.vel.z*i,ot.pos.y<=Js){if(ot.pos.y=Js,ot.vel.y=0,!Yh&&ya<-3){const l=Math.min(Math.abs(ya)/_r,1);Ls=l*.15,Oc&&Oc(ot.pos.x,ot.pos.z,Math.floor(3+l*5))}ot.onGround=!0}Yh=ot.onGround,ot.onGround?(ot.vel.x*=zh,ot.vel.z*=zh):(ot.vel.x*=Bh,ot.vel.z*=Bh);const n=.4;for(let l=0;l<Nc.length;l++){const h=Nc[l],u=ot.pos.x-h.x,f=ot.pos.z-h.z,d=u*u+f*f,g=.6+n;if(d<g*g&&d>.001){const x=1/Math.sqrt(d);ot.pos.x=h.x+u*x*g,ot.pos.z=h.z+f*x*g}}for(let l=0;l<Fc.length;l++){const h=Fc[l],u=ot.pos.x-h.x,f=ot.pos.z-h.z,d=u*u+f*f,g=h.colR+n;if(d<g*g&&d>.001){const x=1/Math.sqrt(d);ot.pos.x=h.x+u*x*g,ot.pos.z=h.z+f*x*g}}if(Math.sqrt(ot.pos.x*ot.pos.x+ot.pos.z*ot.pos.z)>xe){const l=Math.atan2(ot.pos.z,ot.pos.x);ot.pos.x=Math.cos(l)*xe,ot.pos.z=Math.sin(l)*xe}vl.position.copy(ot.pos);const r=Math.sqrt(t.x*t.x+t.z*t.z)>.5&&ot.onGround;r?_s=0:_s+=i,xa+=((r?e?.06:.035:0)-xa)*i*6,r&&(Wh+=i*(e?12:8));const c=Math.sin(Wh)*xa;Xh=e&&r?78:65,Ma+=(Xh-Ma)*i*4,He.fov=Ma,He.updateProjectionMatrix(),Ls*=Math.pow(.04,i),Ls<.001&&(Ls=0),tf=c-Ls}const qh=[{leaf:1332520,glow:2280567,core:4521898},{leaf:931880,glow:3390378,core:5636044},{leaf:1721376,glow:4508757,core:7864200},{leaf:1060912,glow:2267562,core:4513262},{leaf:1583172,glow:3377356,core:5618687}];function tx(i,t){const e=new ae,n=6+w()*10,s=.2+w()*.3,o=new Q({color:k.bark,roughness:.9,emissive:530960,emissiveIntensity:.04}),r=new L(new wt(s*.4,s,n,6),o);r.position.y=n/2,r.castShadow=!0,e.add(r);const a=new Q({color:2263125,emissive:k.leafGlow,emissiveIntensity:.5,transparent:!0,opacity:.25}),c=2+Math.floor(w()*3);for(let M=0;M<c;M++){const _=M/c*6.28+w()*.5,v=n*.4+w()*n*.4,b=new L(new wt(.008,.015,v,3),a);b.position.set(Math.cos(_)*s*.74,n*.15+v/2,Math.sin(_)*s*.74),e.add(b)}const l=new Q({color:1707782,roughness:.92,emissive:661512,emissiveIntensity:.03}),h=3+Math.floor(w()*3);for(let M=0;M<h;M++){const _=M/h*6.28+w()*.5,v=.8+w()*1.5,b=new L(new wt(.02,s*.3,v,4),l);b.position.set(Math.cos(_)*s*.5,.08,Math.sin(_)*s*.5),b.rotation.z=_<3.14?1.2+w()*.3:-(1.2+w()*.3),b.rotation.y=_,e.add(b)}const u=3+Math.floor(w()*4);for(let M=0;M<u;M++){const _=n*(.4+w()*.5),v=w()*Math.PI*2,b=1.5+w()*3,E=new L(new wt(.02,.06,b,4),o);E.position.set(Math.cos(v)*.3,_,Math.sin(v)*.3),E.rotation.z=(w()-.5)*1.2,E.rotation.y=v,E.castShadow=!0,e.add(E);const T=qh[Math.floor(w()*qh.length)],C=Math.cos(v)*(b*.5),S=_+w()*1.5,y=Math.sin(v)*(b*.5),P=1+w()*2,U=new Q({color:T.core,emissive:T.core,emissiveIntensity:.7+w()*.5,transparent:!0,opacity:.55,roughness:.3}),N=new L(new Ai(P*.3,1),U);N.position.set(C,S,y),e.add(N);const G=new Q({color:T.leaf,emissive:T.glow,emissiveIntensity:.25+w()*.25,transparent:!0,opacity:.55,roughness:.7}),W=new L(new Ai(P*.75,1),G);W.position.set(C+(w()-.5)*.4,S+(w()-.5)*.4,y+(w()-.5)*.4),W.scale.set(1+w()*.4,.65+w()*.5,1+w()*.4),W.castShadow=!0,W.receiveShadow=!0,e.add(W);const q=new Q({color:T.glow,emissive:T.glow,emissiveIntensity:.12,transparent:!0,opacity:.08,depthWrite:!1}),J=new L(new Ai(P*1.2,1),q);if(J.position.set(C,S,y),e.add(J),w()<.35){const Y=new Q({color:2773040,emissive:1135904,emissiveIntensity:.08,transparent:!0,opacity:.5}),at=.3+w()*.8,ut=new L(new wt(.008,.003,at,3),Y),Tt=w()*b*.4;ut.position.set(Math.cos(v)*(.3+Tt),_-at/2-w()*.3,Math.sin(v)*(.3+Tt)),e.add(ut)}}const f=new Q({color:5911840,emissive:3349e3,emissiveIntensity:.06,roughness:.8}),d=Math.floor(w()*3);for(let M=0;M<d;M++){const _=1+w()*n*.4,v=w()*6.28,b=new L(new K(.08+w()*.08,5,3),f);b.scale.set(1.5,.3,1),b.position.set(Math.cos(v)*s*.8,_,Math.sin(v)*s*.8),b.rotation.y=-v,e.add(b)}const g=new Q({color:k.leaf,emissive:k.leafGlow,emissiveIntensity:.06,transparent:!0,opacity:.07,depthWrite:!1}),x=new L(new K(3+w()*2,8,6),g);x.position.y=n*.65,e.add(x);const m=new Q({color:1183752,roughness:.95}),p=new L(new K(s*2.5,6,3),m);return p.scale.set(1,.12,1),p.position.y=.02,e.add(p),e.position.set(i,0,t),xt.add(e),e}function ex(i,t){const e=new ae,n=.4+w()*1.2,s=w()*6.28,o=.8+w()*1.5,r=.5+w()*.8,a=new L($e.mushStem,new Q({color:k.mushStem,roughness:.7,emissive:k.mushGlow,emissiveIntensity:.1}));a.position.y=.3,e.add(a);const c=new Q({color:k.mushStem,emissive:k.mushGlow,emissiveIntensity:.15,roughness:.6}),l=new L(new we(.09,.012,4,8),c);l.position.y=.42,l.rotation.x=Math.PI/2,e.add(l);const h=new Q({color:k.mushCap,emissive:k.mushGlow,emissiveIntensity:r,roughness:.3,transparent:!0,opacity:.9}),u=new L($e.mushCap,h);u.scale.set(1,.5,1),u.position.y=.55,u.castShadow=!0,u.receiveShadow=!0,e.add(u);const f=new Q({color:6693546,emissive:k.mushGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,side:Ht});for(let y=0;y<8;y++){const P=y/8*6.28,U=new L(new ye(.35,.08),f);U.position.set(Math.cos(P)*.15,.48,Math.sin(P)*.15),U.rotation.y=-P,U.rotation.x=.1,e.add(U)}for(let y=0;y<4;y++){const P=new $({color:16777215,transparent:!0,opacity:.9}),U=new L($e.mushDot,P),N=w()*6.28,G=.15+w()*.25;U.position.set(Math.cos(N)*G,.6+w()*.1,Math.sin(N)*G),e.add(U)}const d=new Q({color:15663103,emissive:11197951,emissiveIntensity:.2,transparent:!0,opacity:.6,roughness:0,metalness:.5}),g=2+Math.floor(w()*2);for(let y=0;y<g;y++){const P=new L(new K(.015+w()*.015,4,3),d),U=w()*6.28,N=.1+w()*.2;P.position.set(Math.cos(U)*N,.63+w()*.08,Math.sin(U)*N),e.add(P)}const x=new Q({color:4465322,emissive:k.mushGlow,emissiveIntensity:.15,transparent:!0,opacity:.35});for(let y=0;y<4;y++){const P=w()*6.28,U=.15+w()*.25,N=new L(new wt(.004,.002,U,3),x);N.position.set(Math.cos(P)*.12,.01,Math.sin(P)*.12),N.rotation.z=1.3*(P<3.14?1:-1),N.rotation.y=P,e.add(N)}const m=new Q({color:k.mushCap,emissive:k.mushGlow,emissiveIntensity:r*.6,transparent:!0,opacity:.4}),p=new L(new we(.38,.01,4,12),m);p.position.y=.49,p.rotation.x=Math.PI/2,e.add(p);const M=new Q({color:k.mushStem,emissive:k.mushGlow,emissiveIntensity:.08,roughness:.7}),_=new L(new K(.08,5,3),M);_.scale.set(1,.5,1),_.position.y=.04,e.add(_);const v=new Q({color:1708040,roughness:.95});for(let y=0;y<3;y++){const P=w()*6.28,U=.1+w()*.12,N=new L(new K(.008+w()*.008,3,3),v);N.position.set(Math.cos(P)*U,.005,Math.sin(P)*U),e.add(N)}const b=new $({color:k.mushGlow,transparent:!0,opacity:.2});for(let y=0;y<4;y++){const P=new L(new K(.006,3,3),b);P.position.set((w()-.5)*.2,.35+w()*.1,(w()-.5)*.2),e.add(P)}const E=new Q({color:11167453,emissive:k.mushGlow,emissiveIntensity:r*.3,roughness:.5}),T=3+Math.floor(w()*3);for(let y=0;y<T;y++){const P=w()*6.28,U=w()*.25,N=new L(new K(.015+w()*.015,3,3),E);N.position.set(Math.cos(P)*U,.58+w()*.06,Math.sin(P)*U),e.add(N)}const C=new Q({color:657416,transparent:!0,opacity:.2,roughness:.95,side:Ht}),S=new L(new Le(.18,8),C);return S.rotation.x=-Math.PI/2,S.position.y=.005,e.add(S),e.scale.setScalar(n),e.position.set(i,0,t),xt.add(e),{group:e,capMat:h,phase:s,speed:o,base:r,x:i,z:t}}function nx(i,t){const e=new ae,n=w()*6.28,s=new Q({color:k.crystal,emissive:k.crystalCore,emissiveIntensity:1.5,transparent:!0,opacity:.7,roughness:.1,metalness:.5}),o=new L($e.crystal,s);o.position.y=.9,o.castShadow=!0,e.add(o);for(let _=0;_<3;_++){const v=new L($e.crystalSm,s),b=_/3*6.28+w()*.5;v.position.set(Math.cos(b)*.4,.45,Math.sin(b)*.4),v.rotation.z=(w()-.5)*.8,v.castShadow=!0,e.add(v)}const r=new Q({color:1710626,roughness:.9,metalness:.1}),a=3+Math.floor(w()*3);for(let _=0;_<a;_++){const v=w()*6.28,b=.2+w()*.5,E=.08+w()*.12,T=new L(new K(E,4,3),r);T.scale.set(1+w()*.5,.5+w()*.4,1+w()*.5),T.position.set(Math.cos(v)*b,E*.3,Math.sin(v)*b),T.rotation.set(w(),w(),w()),e.add(T)}const c=new $({color:k.crystalCore,transparent:!0,opacity:.5});for(let _=0;_<3;_++){const v=.4+w()*.8,b=new L(new wt(.008,.008,v,3),c);b.position.set((w()-.5)*.15,.5+w()*.7,(w()-.5)*.15),b.rotation.set((w()-.5)*.8,(w()-.5)*.5,(w()-.5)*.8),e.add(b)}const l=new $({color:11206638,transparent:!0,opacity:.6});for(let _=0;_<5;_++){const v=new L(new K(.012,3,3),l);v.position.set((w()-.5)*1,.3+w()*1.5,(w()-.5)*1),e.add(v)}const h=new Q({color:k.crystal,emissive:k.crystalCore,emissiveIntensity:.8,transparent:!0,opacity:.5});for(let _=0;_<4;_++){const v=w()*6.28,b=.3+w()*.3,E=new L(new wt(0,.015,.12+w()*.1,3),h);E.position.set(Math.cos(v)*b,.06+w()*.1,Math.sin(v)*b),E.rotation.z=(w()-.5)*.6,e.add(E)}const u=new Q({color:3364198,emissive:1122867,emissiveIntensity:.05,roughness:.9,side:Ht});for(let _=0;_<2;_++){const v=w()*6.28,b=.2+w()*.3,E=new L(new Le(.04+w()*.03,5),u);E.rotation.x=-Math.PI/2+w()*.4,E.position.set(Math.cos(v)*b,.05,Math.sin(v)*b),e.add(E)}const f=new $({color:k.crystalCore,transparent:!0,opacity:.2});for(let _=0;_<2;_++){const v=new L(new wt(.003,.003,.6+w()*.4,3),f);v.position.set((w()-.5)*.3,.7+w()*.5,(w()-.5)*.3),v.rotation.set((w()-.5)*1,w(),(w()-.5)*1),e.add(v)}const d=new Q({color:1135940,emissive:1127202,emissiveIntensity:.3,transparent:!0,opacity:.25});for(let _=0;_<4;_++){const v=new L(new K(.02+w()*.02,3,3),d);v.position.set((w()-.5)*.15,.4+w()*.6,(w()-.5)*.15),e.add(v)}const g=new $({color:11206638,transparent:!0,opacity:.06}),x=new L(new we(.35,.02,4,10),g);x.position.y=.6,x.rotation.x=Math.PI/2+w()*.3,e.add(x);const m=new $({color:k.crystal,transparent:!0,opacity:.06,side:Ht}),p=new L(new Le(.8,8),m);p.rotation.x=-Math.PI/2,p.position.y=.01,e.add(p),e.position.set(i,0,t),xt.add(e);const M=new Ui(k.crystal,.5,8);return M.position.set(i,1.2,t),xt.add(M),{group:e,mat:s,phase:n,x:i,z:t,light:M}}function ix(i,t,e,n){const s=new Ce,o=[],r=[],a=n||20,c=new _t(663568),l=new _t(1388056),h=new _t(2777141),u=new _t(4517461),f=new _t(7864268),d=new _t(14548838),g=new _t;for(let _=0;_<a;_++){const v=w()*6.28,b=w()*e,E=Math.cos(v)*b,T=Math.sin(v)*b,C=.25+w()*.65,S=.03+w()*.05,y=(w()-.5)*.2,P=(w()-.5)*.2,U=(w()-.5)*.12,N=w()<.5?c:l,G=w(),W=G<.4?u:G<.7?f:d,q=C*.35,J=C*.7,Y=y*.3,at=y*.7,ut=P*.3,Tt=P*.7;o.push(E-S,.01,T),o.push(E+S,.01,T),o.push(E+Y-S*.9,q,T+ut),r.push(N.r,N.g,N.b,N.r,N.g,N.b),g.copy(N).lerp(h,.4),r.push(g.r,g.g,g.b),o.push(E+S,.01,T),o.push(E+Y+S*.9,q,T+ut),o.push(E+Y-S*.9,q,T+ut),r.push(N.r,N.g,N.b),g.copy(N).lerp(h,.4),r.push(g.r,g.g,g.b,g.r,g.g,g.b);const Bt=S*.65;o.push(E+Y-S*.9,q,T+ut),o.push(E+Y+S*.9,q,T+ut),o.push(E+at-Bt,J,T+Tt+U),g.copy(N).lerp(h,.4),r.push(g.r,g.g,g.b,g.r,g.g,g.b),g.copy(h).lerp(W,.3),r.push(g.r,g.g,g.b),o.push(E+Y+S*.9,q,T+ut),o.push(E+at+Bt,J,T+Tt+U),o.push(E+at-Bt,J,T+Tt+U),g.copy(N).lerp(h,.4),r.push(g.r,g.g,g.b),g.copy(h).lerp(W,.3),r.push(g.r,g.g,g.b,g.r,g.g,g.b),o.push(E+at-Bt,J,T+Tt+U),o.push(E+at+Bt,J,T+Tt+U),o.push(E+y+U*2,C,T+P+U*1.5),g.copy(h).lerp(W,.3),r.push(g.r,g.g,g.b,g.r,g.g,g.b),r.push(W.r,W.g,W.b)}const x=new _t(1725736),m=Math.floor(a*.3);for(let _=0;_<m;_++){const v=w()*6.28,b=w()*e*.9,E=Math.cos(v)*b,T=Math.sin(v)*b,C=.02+w()*.03;o.push(E-C,.01,T),o.push(E+C,.01,T),o.push(E,.03+w()*.02,T+C),r.push(x.r,x.g,x.b),r.push(x.r,x.g,x.b);const S=new _t(3385941);r.push(S.r,S.g,S.b)}s.setAttribute("position",new qt(o,3)),s.setAttribute("color",new qt(r,3)),s.computeVertexNormals();const p=new Q({vertexColors:!0,roughness:.7,side:Ht,emissive:4521830,emissiveIntensity:.08}),M=new L(s,p);return M.position.set(i,0,t),xt.add(M),{mesh:M,geo:s,cx:i,cz:t}}function sx(i,t){const e=new ae,n=new Q({color:k.fern,emissive:k.fernGlow,emissiveIntensity:.08,roughness:.7,side:Ht}),s=3+Math.floor(w()*2),o=.5+w()*.7,r=new Q({color:1708552,roughness:.95}),a=new L(new K(.06,5,3),r);a.scale.set(1.5,.5,1.5),a.position.y=.02,e.add(a);for(let p=0;p<3;p++){const M=w()*6.28,_=new L(new wt(.003,.002,.08,3),r);_.position.set(Math.cos(M)*.06,.01,Math.sin(M)*.06),_.rotation.z=(M<3.14?1:-1)*1.2,_.rotation.y=M,e.add(_)}for(let p=0;p<s;p++){const M=p/s*6.28+w()*.3,_=new L(new wt(.004,.006,.55,3),new Q({color:1721632,roughness:.8}));_.position.set(Math.cos(M)*.15,.25,Math.sin(M)*.15),_.rotation.y=-M,_.rotation.x=-.6-w()*.4,e.add(_);const v=new L(new ye(.12,.6,1,3),n);v.position.set(Math.cos(M)*.15,.25,Math.sin(M)*.15),v.rotation.y=-M,v.rotation.x=-.6-w()*.4,e.add(v);for(let E=0;E<6;E++){const T=new L(new ye(.07,.06,1,1),n),C=.06+E*.08,S=E%2===0?1:-1;T.position.set(Math.cos(M)*(.15+.06),C,Math.sin(M)*(.15+.06*S)),T.rotation.y=-M,T.rotation.x=-.8,T.rotation.z=S*.5,e.add(T)}const b=new Q({color:8939042,emissive:4469521,emissiveIntensity:.1});for(let E=0;E<3;E++){const T=new L(new K(.008,3,3),b),C=.12+E*.12;T.position.set(Math.cos(M)*(.15+.02),C-.01,Math.sin(M)*(.15+.02)),e.add(T)}}const c=new Q({color:k.fernGlow,emissive:k.fernGlow,emissiveIntensity:.3}),l=new L(new K(.04,4,3),c);l.position.y=.35,e.add(l);const h=new L(new wt(.006,.003,.06,3),c);h.position.set(.02,.37,0),h.rotation.z=-.8,e.add(h);const u=new Q({color:15663103,emissive:8960989,emissiveIntensity:.1,transparent:!0,opacity:.5,roughness:0,metalness:.5});for(let p=0;p<3;p++){const M=w()*6.28,_=w()*.2,v=new L(new K(.006+w()*.005,3,3),u);v.position.set(Math.cos(M)*_,.12+w()*.2,Math.sin(M)*_),e.add(v)}const f=new Q({color:3811856,roughness:.9,side:Ht,transparent:!0,opacity:.6}),d=new L(new ye(.1,.4,1,2),f),g=w()*6.28;d.position.set(Math.cos(g)*.12,.05,Math.sin(g)*.12),d.rotation.x=-1.3,d.rotation.y=g,e.add(d);const x=new $({color:2768928,transparent:!0,opacity:.3});for(let p=0;p<4;p++){const M=new L(new wt(.001,.001,.015,3),x);M.position.set((w()-.5)*.08,.08+w()*.15,(w()-.5)*.08),M.rotation.z=(w()-.5)*1.5,e.add(M)}const m=new Q({color:1708552,roughness:.95});for(let p=0;p<3;p++){const M=new L(new K(.006,3,3),m);M.position.set((w()-.5)*.1,.005,(w()-.5)*.1),e.add(M)}return e.scale.setScalar(o),e.position.set(i,0,t),xt.add(e),{group:e,phase:w()*6.28}}function ox(i,t){const e=new ae,n=.25+w()*.4,s=new Q({color:k.flowerStem,roughness:.8}),o=new L(new wt(.01,.015,n,4),s);o.position.y=n/2,e.add(o);for(let C=0;C<2;C++){const S=new L(new Pn(.004,.012,3),s);S.position.set(.012,n*.25+C*n*.25,0),S.rotation.z=-1.2,e.add(S)}const r=new Q({color:k.fern,roughness:.7,side:Ht}),a=new L(new ye(.06,.04),r);a.position.set(.03,n*.3,0),a.rotation.z=-.5,e.add(a);const c=new L(new ye(.05,.035),r);c.position.set(-.025,n*.5,.01),c.rotation.z=.6,e.add(c);const l=new Q({color:1728560,roughness:.7,side:Ht});for(let C=0;C<5;C++){const S=C/5*6.28+.3,y=new L(new ye(.025,.02),l);y.position.set(Math.cos(S)*.025,n-.005,Math.sin(S)*.025),y.rotation.x=-1.2,y.rotation.y=-S,e.add(y)}const h=new Q({color:k.flower,emissive:k.flowerGlow,emissiveIntensity:.4+w()*.4,transparent:!0,opacity:.85,side:Ht});for(let C=0;C<6;C++){const S=C/6*6.28,y=new L(new ye(.05,.04),h);y.position.set(Math.cos(S)*.03,n+.01,Math.sin(S)*.03),y.rotation.x=-.8,y.rotation.y=-S,e.add(y)}const u=new Q({color:16777215,emissive:k.flowerGlow,emissiveIntensity:1.2}),f=new L(new K(.02,4,3),u);f.position.y=n+.02,e.add(f);const d=new $({color:16777130,transparent:!0,opacity:.7}),g=new $({color:16772676});for(let C=0;C<3;C++){const S=C/3*6.28+.5,y=new L(new wt(.002,.002,.025,3),d);y.position.set(Math.cos(S)*.012,n+.03,Math.sin(S)*.012),e.add(y);const P=new L(new K(.005,3,3),g);P.position.set(Math.cos(S)*.012,n+.045,Math.sin(S)*.012),e.add(P)}const x=new $({color:16777164,transparent:!0,opacity:.3});for(let C=0;C<2;C++){const S=new L(new K(.006,3,3),x);S.position.set((w()-.5)*.04,n+.06+w()*.04,(w()-.5)*.04),e.add(S)}const m=new Q({color:16772778,emissive:16768324,emissiveIntensity:.2,transparent:!0,opacity:.5,roughness:0,metalness:.4}),p=new L(new K(.006,3,3),m);p.position.set(.005,n+.005,.005),e.add(p);const M=new $({color:15662984}),_=new L(new wt(.002,.002,.03,3),M);_.position.y=n+.035,e.add(_);const v=new L(new K(.005,3,3),M);v.position.y=n+.055,e.add(v);const b=new Q({color:1725728,roughness:.7}),E=new L(new wt(.015,.02,.02,5),b);E.position.y=n-.01,e.add(E);const T=new $({color:16777215,transparent:!0,opacity:.35});for(let C=0;C<4;C++){const S=C/4*6.28+.3,y=new L(new K(.004,3,3),T);y.position.set(Math.cos(S)*.045,n+.005,Math.sin(S)*.045),e.add(y)}return e.position.set(i,0,t),xt.add(e),{group:e,petalMat:h,phase:w()*6.28,baseH:n}}function rx(i,t){const e=new ae,n=new Q({color:k.reed,emissive:k.reedTip,emissiveIntensity:.05,roughness:.7}),s=new Q({color:k.reedTip,emissive:k.reedTip,emissiveIntensity:.15}),o=new Q({color:1709328,roughness:.95}),r=new L(new K(.08,5,3),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=3+Math.floor(w()*4),c=new Q({color:k.reed,roughness:.7,side:Ht});for(let d=0;d<a;d++){const g=.6+w()*1,x=(w()-.5)*.2,m=(w()-.5)*.2,p=new L(new wt(.008,.015,g,4),n);p.position.set(x,g/2,m),e.add(p);const M=2+Math.floor(w()*2),_=new Q({color:2771488,roughness:.7});for(let E=0;E<M;E++){const T=g*.2+E*g*.25,C=new L(new we(.012,.004,4,6),_);C.position.set(x,T,m),C.rotation.x=Math.PI/2,e.add(C)}if(w()<.7){const E=.1+w()*.15,T=w()*6.28,C=new L(new ye(.02,E),c);C.position.set(x+Math.cos(T)*.02,g*.4,m+Math.sin(T)*.02),C.rotation.y=-T,C.rotation.x=-.5-w()*.4,e.add(C)}const v=new L(new K(.025,4,3),s);v.scale.set(.8,1.5,.8),v.position.set(x,g+.02,m),e.add(v);const b=new $({color:k.reedTip,transparent:!0,opacity:.4});for(let E=0;E<3;E++){const T=E/3*6.28+w()*.5,C=new L(new wt(.002,.001,.04,3),b);C.position.set(x+Math.cos(T)*.015,g+.05,m+Math.sin(T)*.015),C.rotation.z=(w()-.5)*.4,e.add(C)}}e.position.set(i,0,t),xt.add(e);const l=new Q({color:4864536,roughness:.9,side:Ht,transparent:!0,opacity:.5});for(let d=0;d<2;d++){w()*6.28;const g=(w()-.5)*.15,x=new L(new ye(.025,.02),l);x.position.set(g,.2+d*.25,(w()-.5)*.1),x.rotation.set(w()*.5,w(),w()*.5),e.add(x)}const h=new $({color:15654348,transparent:!0,opacity:.25});for(let d=0;d<3;d++){const g=new L(new K(.005,3,3),h);g.position.set((w()-.5)*.15,.8+w()*.6,(w()-.5)*.15),e.add(g)}const u=new Q({color:2241312,roughness:.9,transparent:!0,opacity:.2}),f=new L(new we(.1,.008,4,8),u);return f.rotation.x=Math.PI/2,f.position.y=.03,e.add(f),{group:e,phase:w()*6.28,swayAmp:.03+w()*.04}}const ss=[];function ax(i){for(let t=0;t<i;t++){const e=new $({color:k.dandSeed,transparent:!0,opacity:0}),n=new L($e.dandSeed,e);n.visible=!1,xt.add(n),ss.push({mesh:n,mat:e,vel:new D,life:0,max:0,active:!1,drift:0})}}function cx(i,t,e){let n=null;for(let o=0;o<ss.length;o++)if(!ss[o].active){n=ss[o];break}if(!n)return;n.mesh.position.set(i+(Math.random()-.5)*.1,t,e+(Math.random()-.5)*.1),n.mesh.visible=!0,n.mat.opacity=.8;const s=Math.random()*6.28;n.vel.set(Math.cos(s)*.5+Math.random()*.3,.6+Math.random()*.8,Math.sin(s)*.5),n.life=4+Math.random()*5,n.max=n.life,n.active=!0,n.drift=Math.random()*6.28}function lx(i,t){for(let e=0;e<ss.length;e++){const n=ss[e];if(!n.active)continue;if(n.life-=i,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}n.drift+=(Math.random()-.5)*1.5*i,n.vel.x+=Math.sin(n.drift)*.3*i,n.vel.z+=Math.cos(n.drift)*.2*i,n.vel.y+=(.15-n.vel.y)*i*.5,n.vel.multiplyScalar(.998),n.mesh.position.x+=n.vel.x*i,n.mesh.position.y+=n.vel.y*i,n.mesh.position.z+=n.vel.z*i;const s=n.life/n.max;n.mat.opacity=s*.7*(.6+Math.sin(t*2+e)*.4),n.mesh.scale.setScalar(.8+Math.sin(t*3+e*.5)*.3)}}function hx(i,t){const e=new ae,n=.35+w()*.45,s=new Q({color:2777128,roughness:.7,side:Ht}),o=3+Math.floor(w()*2);for(let _=0;_<o;_++){const v=_/o*6.28+w()*.3,b=new L(new ye(.08,.035),s);b.position.set(Math.cos(v)*.05,.02,Math.sin(v)*.05),b.rotation.x=-1.4,b.rotation.y=-v,e.add(b)}const r=new Q({color:k.dandStem,roughness:.8}),a=new L(new wt(.008,.012,n,4),r);a.position.y=n/2,e.add(a);const c=new $({color:14540236,transparent:!0,opacity:.3});for(let _=0;_<4;_++){const v=n*.2+_*n*.18,b=new L(new wt(.002,.001,.02,3),c);b.position.set(.01,v,0),b.rotation.z=-.8,e.add(b)}const l=new Q({color:k.fern,roughness:.7,side:Ht}),h=new L(new ye(.07,.03),l);h.position.set(.03,n*.15,0),h.rotation.z=-.4,e.add(h);const u=new Q({color:k.dandHead,emissive:k.dandSeedGlow,emissiveIntensity:.2,transparent:!0,opacity:.85}),f=new L(new K(.07,6,5),u);f.position.y=n+.05,e.add(f);const d=new Q({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.5,roughness:0,metalness:.5}),g=new L(new K(.012,4,3),d);g.position.set(.04,n+.07,.03),e.add(g);const x=new $({color:k.dandSeed,transparent:!0,opacity:.7});for(let _=0;_<8;_++){const v=_/8*6.28+w()*.2,b=new L(new Pn(.015,.05,3),x);b.position.set(Math.cos(v)*.06,n+.05+w()*.04,Math.sin(v)*.06),b.rotation.x=(w()-.5)*.6,b.rotation.z=(w()-.5)*.6,e.add(b);const E=new $({color:16777215,transparent:!0,opacity:.3}),T=new L(new wt(.001,.001,.03,3),E);T.position.set(Math.cos(v)*.08,n+.08,Math.sin(v)*.08),T.rotation.set((w()-.5)*.5,0,(w()-.5)*.5),e.add(T);const C=new $({color:15658717,transparent:!0,opacity:.15});for(let S=0;S<2;S++){const y=v+(S-.5)*.5,P=new L(new wt(8e-4,8e-4,.025,3),C);P.position.set(Math.cos(y)*.075,n+.09,Math.sin(y)*.075),P.rotation.set((w()-.5)*.8,0,(w()-.5)*.8),e.add(P)}}const m=new Q({color:3811856,roughness:.9});for(let _=0;_<4;_++){const v=_/4*6.28+w()*.5,b=new L(new K(.005,3,3),m);b.scale.set(.6,1.5,.6),b.position.set(Math.cos(v)*.04,n+.04,Math.sin(v)*.04),e.add(b)}const p=new $({color:1716240,transparent:!0,opacity:.15});for(let _=0;_<3;_++){const v=_/3*6.28,b=new L(new wt(.001,.001,n*.7,3),p);b.position.set(Math.cos(v)*.01,n*.35,Math.sin(v)*.01),e.add(b)}const M=new $({color:13426107,transparent:!0,opacity:.2});for(let _=0;_<5;_++){const v=n*.1+w()*n*.7,b=w()*6.28,E=new L(new wt(8e-4,8e-4,.012,3),M);E.position.set(Math.cos(b)*.012,v,Math.sin(b)*.012),E.rotation.z=b<3.14?-.8:.8,E.rotation.y=b,e.add(E)}return e.position.set(i,0,t),xt.add(e),{group:e,headMat:u,x:i,z:t,h:n,dispersed:!1,phase:w()*6.28,seedCount:8,regrowTimer:0}}function ux(i,t,e,n){for(let s=0;s<i.length;s++){const o=i[s];if(o.dispersed){if(o.regrowTimer-=t,o.regrowTimer<=0){o.dispersed=!1;for(let r=2;r<o.group.children.length;r++)o.group.children[r].visible=!0}o.group.rotation.z=Math.sin(e*.9+o.phase)*.02}else{const r=o.x-n.x,a=o.z-n.z;if(r*r+a*a<1.2){o.dispersed=!0;for(let c=0;c<8;c++)cx(o.x,o.h+.05,o.z);for(let c=2;c<o.group.children.length;c++)o.group.children[c].visible=!1;o.regrowTimer=15+Math.random()*10}else o.group.rotation.z=Math.sin(e*.9+o.phase)*.04,o.headMat.emissiveIntensity=.15+Math.sin(e*1.2+o.phase)*.1}}}function fx(i,t,e){const n=new ae,s=new Q({color:k.jellyBell,emissive:k.jellyGlow,emissiveIntensity:.8,transparent:!0,opacity:.5,roughness:.2,metalness:.1,side:Ht}),o=new L(new K(.5,8,6,0,6.28,0,Math.PI/2),s);o.scale.set(1,.6,1),o.position.y=0,n.add(o);const r=new Q({color:k.jellyBell,emissive:k.jellyGlow,emissiveIntensity:1,transparent:!0,opacity:.6}),a=new L(new we(.48,.025,5,12),r);a.rotation.x=Math.PI/2,a.position.y=-.02,n.add(a);const c=new L(new K(.2,6,4),new $({color:k.jellyGlow,transparent:!0,opacity:.7}));c.position.y=-.05,n.add(c);const l=new $({color:12312063,transparent:!0,opacity:.3});for(let M=-1;M<=1;M+=2){const _=new L(new K(.06,4,3),l);_.scale.set(.6,1.5,.6),_.position.set(M*.08,-.03,0),n.add(_)}const h=new $({color:15663103,transparent:!0,opacity:.7});for(let M=0;M<5;M++){const _=w()*6.28,v=w()*.8,b=new L(new K(.02,3,3),h);b.position.set(Math.cos(_)*v*.35,.1-v*.15,Math.sin(_)*v*.35),n.add(b)}const u=new Q({color:k.jellyTent,emissive:k.jellyGlow,emissiveIntensity:.4,transparent:!0,opacity:.4}),f=new $({color:k.jellyGlow,transparent:!0,opacity:.6});for(let M=0;M<6;M++){const _=M/6*6.28,v=.4+w()*.6,b=new L(new wt(.015,.008,v,3),u);b.position.set(Math.cos(_)*.25,-v/2-.05,Math.sin(_)*.25),n.add(b);const E=new L(new K(.012,3,3),f);E.position.set(Math.cos(_)*.25,-v-.06,Math.sin(_)*.25),n.add(E)}const d=new $({color:k.jellyGlow,transparent:!0,opacity:.12});for(let M=0;M<8;M++){const _=M/8*6.28,v=new L(new wt(.002,.002,.4,3),d);v.position.set(Math.cos(_)*.2,.05,Math.sin(_)*.2),v.rotation.z=Math.PI/2-.3,v.rotation.y=-_,n.add(v)}const g=new Q({color:k.jellyBell,emissive:k.jellyGlow,emissiveIntensity:.6,transparent:!0,opacity:.4});for(let M=0;M<10;M++){const _=M/10*6.28,v=new L(new K(.02,3,3),g);v.scale.set(1,.5,.8),v.position.set(Math.cos(_)*.46,-.04,Math.sin(_)*.46),n.add(v)}const x=new Q({color:k.jellyTent,emissive:k.jellyGlow,emissiveIntensity:.5,transparent:!0,opacity:.35}),m=new L(new wt(.02,.01,.35,4),x);m.position.y=-.2,n.add(m);const p=new $({color:14548991,transparent:!0,opacity:.4});for(let M=0;M<3;M++){const _=M/3*6.28,v=new L(new K(.008,3,3),p);v.position.set(Math.cos(_)*.25,-.55-w()*.3,Math.sin(_)*.25),n.add(v)}return n.position.set(i,t,e),xt.add(n),{group:n,bellMat:s,phase:w()*6.28,driftAng:w()*6.28,homeX:i,homeZ:e,floatY:t,wobble:.5+w()*.5}}function dx(i,t){const e=new ae,n=new Q({color:k.puffBody,emissive:k.puffGlow,emissiveIntensity:.3,roughness:.8}),s=new L(new K(.3,8,6),n);s.position.y=.35,e.add(s);const o=new Q({color:16773344,emissive:k.puffGlow,emissiveIntensity:.15,roughness:.9}),r=new L(new K(.18,6,4),o);r.scale.set(.7,.9,.3),r.position.set(0,.32,.2),e.add(r);const a=new L(new K(.22,7,5),n);a.position.y=.65,e.add(a);for(let _=-1;_<=1;_+=2){const v=new L(new Pn(.06,.15,4),n);v.position.set(_*.13,.85,0),v.rotation.z=_*.3,e.add(v);const b=new L(new Pn(.03,.08,4),new Q({color:k.puffCheek,emissive:k.puffCheek,emissiveIntensity:.2}));b.position.set(_*.13,.84,.01),b.rotation.z=_*.3,e.add(b)}const c=new $({color:k.puffEye});for(let _=-1;_<=1;_+=2){const v=new L(new K(.035,4,4),c);v.position.set(_*.09,.68,.18),e.add(v);const b=new $({color:16777215}),E=new L(new K(.012,3,3),b);E.position.set(_*.09+_*.015,.695,.2),e.add(E)}const l=new $({color:4469555}),h=new L(new K(.015,3,3),l);h.position.set(0,.63,.22),e.add(h);const u=new Q({color:k.puffCheek,emissive:k.puffCheek,emissiveIntensity:.3});for(let _=-1;_<=1;_+=2){const v=new L(new K(.04,4,3),u);v.position.set(_*.15,.61,.15),e.add(v)}const f=new $({color:15654348,transparent:!0,opacity:.5});for(let _=-1;_<=1;_+=2)for(let v=0;v<2;v++){const b=new L(new wt(.002,.002,.06,3),f);b.position.set(_*.12,.62-v*.03,.2),b.rotation.z=_*.7+v*_*.2,b.rotation.x=-.1,e.add(b)}for(let _=-1;_<=1;_+=2){const v=new L(new K(.07,4,3),n);v.position.set(_*.12,.07,.05),v.scale.set(1,.5,1.3),e.add(v);const b=new Q({color:16755370,emissive:16746632,emissiveIntensity:.1});for(let E=0;E<3;E++){const T=E/3*6.28,C=new L(new K(.012,3,3),b);C.position.set(_*.12+Math.cos(T)*.03,.03,.05+Math.sin(T)*.03),e.add(C)}}const d=new Q({color:16777215,emissive:k.puffGlow,emissiveIntensity:.4,roughness:.9}),g=new L(new K(.06,5,4),d);g.position.set(0,.38,-.28),e.add(g);const x=new Q({color:k.puffBody,emissive:k.puffGlow,emissiveIntensity:.2,roughness:1});for(let _=0;_<6;_++){const v=w()*6.28,b=w()*1.2,E=new L(new K(.01,3,3),x);E.position.set(Math.cos(v)*.28,.25+b*.2,Math.sin(v)*.28),e.add(E)}const m=new $({color:k.puffBody});for(let _=-1;_<=1;_+=2){const v=new L(new wt(.003,.003,.04,3),m);v.position.set(_*.09,.72,.17),v.rotation.z=_*.3,e.add(v)}const p=new $({color:5583684,transparent:!0,opacity:.5}),M=new L(new wt(.002,.002,.03,3),p);return M.position.set(0,.59,.22),M.rotation.z=Math.PI/2,e.add(M),e.position.set(i,0,t),xt.add(e),{group:e,phase:w()*6.28,wanderAng:w()*6.28,speed:.6+w()*.8,hopTimer:0,hopPhase:w()*6.28,homeX:i,homeZ:t,state:"idle",idleTimer:w()*3}}function px(i,t){const e=new ae,n=new Q({color:k.deerBody,emissive:k.deerGlow,emissiveIntensity:.5,transparent:!0,opacity:.7,roughness:.3}),s=new L(new K(.4,7,5),n);s.scale.set(1,.8,1.5),s.position.y=.9,e.add(s);const o=new Q({color:13431039,emissive:k.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.5}),r=new L(new K(.15,5,4),o);r.scale.set(.8,.6,.5),r.position.set(0,.78,.25),e.add(r);const a=new ae;a.position.set(0,1.15,.3);const c=new L(new wt(.08,.12,.4,5),n);c.position.set(0,.1,.08),c.rotation.x=-.4,a.add(c);const l=new L(new K(.14,6,5),n);l.position.set(0,.22,.2),a.add(l);const h=new L(new K(.07,4,3),n);h.scale.set(1,.7,1.4),h.position.set(0,.17,.35),a.add(h);const u=new $({color:2245717}),f=new L(new K(.02,3,3),u);f.position.set(0,.17,.43),a.add(f);const d=new $({color:k.deerEye});for(let y=-1;y<=1;y+=2){const P=new L(new K(.025,4,3),d);P.position.set(y*.09,.25,.28),a.add(P);const U=new L(new K(.008,3,3),new $({color:16777215}));U.position.set(y*.085,.26,.29),a.add(U);const N=new $({color:k.deerBody,transparent:!0,opacity:.5}),G=new L(new wt(.002,.002,.03,3),N);G.position.set(y*.1,.27,.28),G.rotation.z=y*.6,a.add(G)}for(let y=-1;y<=1;y+=2){const P=new L(new Pn(.04,.14,4),n);P.position.set(y*.1,.37,.15),P.rotation.z=y*.4,a.add(P)}const g=new Q({color:k.deerAntler,emissive:k.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.8});for(let y=-1;y<=1;y+=2){const P=new L(new wt(.015,.02,.25,3),g);P.position.set(y*.08,.42,.12),P.rotation.z=y*.5,a.add(P);const U=new L(new wt(.01,.015,.15,3),g);U.position.set(y*.15,.55,.1),U.rotation.z=y*.8,a.add(U);const N=new L(new wt(.008,.012,.1,3),g);N.position.set(y*.11,.5,.16),N.rotation.z=y*.3,N.rotation.x=-.5,a.add(N);const G=new L(new K(.012,3,3),new $({color:k.deerGlow,transparent:!0,opacity:.8}));G.position.set(y*.18,.61,.09),a.add(G)}const x=new Q({color:k.deerBody,emissive:k.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),m=new L(new wt(.01,.02,.1,3),x);m.position.set(0,.11,.28),m.rotation.x=.3,a.add(m);const p=new $({color:1122850});for(let y=-1;y<=1;y+=2){const P=new L(new K(.006,3,3),p);P.position.set(y*.02,.16,.42),a.add(P)}e.add(a);const M=[{x:-.15,z:.3,label:"FL"},{x:.15,z:.3,label:"FR"},{x:-.15,z:-.3,label:"BL"},{x:.15,z:-.3,label:"BR"}],_=new Q({color:6715272,emissive:k.deerGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),v=[];for(let y=0;y<4;y++){const P=M[y],U=new ae;U.position.set(P.x,.65,P.z);const N=new L(new wt(.025,.035,.35,4),n);N.position.y=-.175,U.add(N);const G=new ae;G.position.set(0,-.35,0);const W=new L(new wt(.02,.03,.3,4),n);W.position.y=-.15,G.add(W);const q=new L(new wt(.04,.032,.04,4),_);q.position.y=-.3,G.add(q);const J=new Q({color:14544639,emissive:k.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),Y=new L(new K(.025,3,3),J);Y.scale.set(1.3,.5,1.3),Y.position.y=-.25,G.add(Y),U.add(G),e.add(U),v.push({upper:U,lower:G,isFront:y<2,side:P.x<0?-1:1})}const b=new ae;b.position.set(0,1.1,-.55);const E=new L(new Pn(.05,.15,4),new Q({color:16777215,emissive:k.deerGlow,emissiveIntensity:1,transparent:!0,opacity:.8}));b.add(E),e.add(b);const T=new $({color:13434862,transparent:!0,opacity:.3});for(let y=0;y<4;y++){const P=new L(new K(.02,3,3),T);P.position.set((w()-.5)*.25,.8+w()*.3,(w()-.5)*.4),e.add(P)}const C=new $({color:k.deerBody,transparent:!0,opacity:.15});for(let y=0;y<3;y++){const P=new L(new wt(.002,.002,.2,3),C);P.position.set(.3,.85-y*.06,0),P.rotation.z=Math.PI/2+.3,e.add(P)}const S=new Q({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.4,roughness:0,metalness:.5});for(let y=0;y<3;y++){const P=new L(new K(.008,3,3),S);P.position.set((w()-.5)*.3,.9+w()*.3,(w()-.5)*.35),e.add(P)}return e.position.set(i,0,t),xt.add(e),{group:e,mat:n,phase:w()*6.28,wanderAng:w()*6.28,speed:.6+w()*.4,walkTimer:0,legCycle:0,homeX:i,homeZ:t,state:"walk",pauseTimer:0,neckPivot:a,legPivots:v,tailPivot:b,fleeTimer:0,headLook:0,headBob:0}}function mx(i,t,e){const n=new ae,s=new Q({color:k.mothBody,emissive:k.mothGlow,emissiveIntensity:.3,roughness:.7}),o=new L(new wt(.04,.05,.3,5),s);o.rotation.x=Math.PI/2,n.add(o);const r=new Q({color:k.mothBody,emissive:k.mothGlow,emissiveIntensity:.5,roughness:.6});for(let m=0;m<3;m++){const p=new L(new we(.045,.006,4,8),r);p.position.z=-.05+m*.06,p.rotation.x=0,n.add(p)}const a=new L(new K(.05,5,4),s);a.position.z=.18,n.add(a);const c=new Q({color:1122867,roughness:.2,metalness:.4});for(let m=-1;m<=1;m+=2){const p=new L(new K(.018,4,3),c);p.position.set(m*.03,.01,.21),n.add(p)}for(let m=-1;m<=1;m+=2){const p=new L(new wt(.005,.005,.15,3),s);p.position.set(m*.03,.03,.22),p.rotation.x=-.6,p.rotation.z=m*.4,n.add(p);const M=new $({color:k.mothGlow,transparent:!0,opacity:.7}),_=new L(new K(.015,3,3),M);_.scale.set(2,.5,1),_.position.set(m*.05,.12,.28),n.add(_)}const l=new Q({color:k.mothWing,emissive:k.mothGlow,emissiveIntensity:.8,transparent:!0,opacity:.6,side:Ht,roughness:.4});n._wingPivots=[];for(let m=-1;m<=1;m+=2){const p=new ae;p.position.set(m*.04,0,.02);const M=new L(new K(.2,6,4),l);M.scale.set(1.8,.08,1.2),M.position.set(m*.18,0,.02),p.add(M);const _=new L(new K(.12,5,3),l);_.scale.set(1.5,.06,1),_.position.set(m*.12,0,-.1),p.add(_);const v=new Q({color:k.mothWing,emissive:k.mothGlow,emissiveIntensity:.6,transparent:!0,opacity:.45,side:Ht}),b=new L(new ye(.03,.12),v);b.position.set(m*.1,0,-.18),b.rotation.y=m*.2,p.add(b);const E=new $({color:k.mothSpot,transparent:!0,opacity:.9}),T=new L(new K(.03,4,3),E);T.position.set(m*.2,.02,.03),p.add(T);const C=new L(new K(.018,3,3),E);C.position.set(m*.1,.02,-.08),p.add(C);const S=new $({color:k.mothGlow,transparent:!0,opacity:.25});for(let y=0;y<2;y++){const P=new L(new wt(.002,.002,.2,3),S);P.position.set(m*.15,.01,-.02+y*.06),P.rotation.z=Math.PI/2+m*(.15+y*.15),p.add(P)}n.add(p),n._wingPivots.push({pivot:p,side:m})}const h=new $({color:k.mothGlow,transparent:!0,opacity:.25});for(let m=0;m<3;m++){const p=new L(new K(.008,3,3),h);p.position.set((w()-.5)*.04,0,-.15-m*.05),n.add(p)}const u=new $({color:4473907,transparent:!0,opacity:.5}),f=new L(new we(.015,.003,4,8,Math.PI*1.5),u);f.position.set(0,-.02,.2),f.rotation.x=.4,n.add(f);const d=new Q({color:k.mothBody,emissive:k.mothGlow,emissiveIntensity:.4,roughness:1});for(let m=0;m<5;m++){const p=w()*6.28,M=new L(new K(.008,3,3),d);M.position.set(Math.cos(p)*.04,Math.sin(p)*.04,w()*.15-.05),n.add(M)}const g=new $({color:k.mothBody,transparent:!0,opacity:.4});for(let m=-1;m<=1;m+=2)for(let p=0;p<3;p++){const M=new L(new wt(.002,.002,.06,3),g);M.position.set(m*.04,-.03,-.05+p*.06),M.rotation.z=m*.8,M.rotation.x=-.3,n.add(M)}const x=new $({color:k.mothGlow,transparent:!0,opacity:.35});for(let m=-1;m<=1;m+=2)for(let p=0;p<5;p++){const M=p/5*Math.PI-Math.PI/2,_=new L(new K(.006,3,3),x);_.position.set(m*(.3+Math.cos(M)*.05),Math.sin(M)*.02,.02+p*.04),n.add(_)}return n.position.set(i,t,e),xt.add(n),{group:n,wingMat:l,phase:w()*6.28,orbitAng:w()*6.28,orbitR:2+w()*4,centerX:i,centerZ:e,floatY:t,flapSpeed:6+w()*4}}function gx(i,t,e){const n=new ae,s=new $({color:k.wispCore}),o=new L(new K(.08,6,4),s);n.add(o);const r=new $({color:16777215,transparent:!0,opacity:.7,wireframe:!0}),a=new L(new Ai(.06,0),r);n.add(a);const c=new $({color:k.wispGlow,transparent:!0,opacity:.5}),l=new L(new K(.18,6,4),c);n.add(l);const h=new $({color:k.wispGlow,transparent:!0,opacity:.25}),u=new L(new we(.22,.008,4,12),h);u.rotation.x=Math.PI/2,n.add(u);const f=new $({color:k.wispTrail,transparent:!0,opacity:.15}),d=new L(new K(.35,5,4),f);n.add(d);const g=new $({color:16777215,transparent:!0,opacity:.8}),x=new L(new K(.02,3,3),g);x.position.set(.15,0,0),n.add(x);const m=new $({color:k.wispCore,transparent:!0,opacity:.35});for(let E=0;E<3;E++){const T=new L(new K(.01,3,3),m);T.position.set((w()-.5)*.1,-.1-E*.08,(w()-.5)*.1),n.add(T)}const p=new $({color:k.wispGlow,transparent:!0,opacity:.18});for(let E=0;E<3;E++){const T=E/3*6.28+w()*.5,C=.15+w()*.1,S=new L(new wt(.003,.001,C,3),p);S.position.set(Math.cos(T)*.1,w()*.08,Math.sin(T)*.1),S.rotation.z=Math.PI/3*(T<3.14?1:-1),S.rotation.y=T,n.add(S)}const M=new $({color:k.wispGlow,transparent:!0,opacity:.12}),_=new L(new we(.26,.005,4,10),M);_.rotation.x=1.2,_.rotation.z=.8,n.add(_);const v=new $({color:16777215,transparent:!0,opacity:.5});for(let E=0;E<4;E++){const T=w()*6.28,C=w()*.8,S=new L(new K(.006,3,3),v);S.position.set(Math.cos(T)*.06,Math.sin(C)*.06,Math.sin(T)*.06),n.add(S)}const b=new $({color:k.wispCore,transparent:!0,opacity:.2});for(let E=0;E<4;E++){const T=new L(new K(.004,3,3),b);T.position.set(.03+w()*.04,-.05-E*.04,w()*.04),n.add(T)}return n.position.set(i,t,e),xt.add(n),{group:n,glowMat:c,hazeMat:f,phase:w()*6.28,targetX:i,targetY:t,targetZ:e,velX:0,velY:0,velZ:0,scatter:0}}function _x(i,t){const e=new ae,n=Pc,s=8+Math.floor(w()*5),o=new Q({color:k.fairyMush,emissive:k.fairyGlow,emissiveIntensity:.2,roughness:.5}),r=new Q({color:k.mushStem,roughness:.7,emissive:k.fairyGlow,emissiveIntensity:.05});for(let v=0;v<s;v++){const b=v/s*6.28+w()*.15,E=n+w()*.3-.15,T=.15+w()*.2,C=new L($e.mushStem,r);C.scale.setScalar(T),C.position.set(Math.cos(b)*E,T*.3,Math.sin(b)*E),e.add(C);const S=new L($e.mushCap,o);S.scale.set(T,T*.4,T),S.position.set(Math.cos(b)*E,T*.55,Math.sin(b)*E),e.add(S);const y=new $({color:16777215,transparent:!0,opacity:.7}),P=new L(new K(T*.08,3,3),y);P.position.set(Math.cos(b)*E,T*.6,Math.sin(b)*E),e.add(P)}const a=new Q({color:8934792,emissive:k.fairyGlow,emissiveIntensity:.1,roughness:.6});for(let v=0;v<5;v++){const b=w()*6.28,E=n+w()*.6-.3,T=.06+w()*.06,C=new L($e.mushCap,a);C.scale.set(T,T*.5,T),C.position.set(Math.cos(b)*E,T*.35,Math.sin(b)*E),e.add(C)}const c=new Q({color:1725733,emissive:664080,emissiveIntensity:.05,roughness:.9});for(let v=0;v<4;v++){const b=w()*6.28,E=w()*n*.8,T=new L(new K(.08+w()*.08,4,3),c);T.scale.set(1.5,.2,1.5),T.position.set(Math.cos(b)*E,.01,Math.sin(b)*E),e.add(T)}const l=new Q({color:4478310,emissive:k.fairyGlow,emissiveIntensity:.05,roughness:.85}),h=new L(new K(.12,5,3),l);h.scale.set(1.2,.3,1),h.position.y=.03,e.add(h);const u=new $({color:k.fairyGlow,transparent:!0,opacity:.2});for(let v=0;v<6;v++){const b=new L(new K(.01,3,3),u);b.position.set((w()-.5)*n*.8,.1+w()*.4,(w()-.5)*n*.8),e.add(b)}const f=new $({color:k.fairyRing,transparent:!0,opacity:0,side:Ht}),d=new L(new mr(.3,n-.3,16),f);d.rotation.x=-Math.PI/2,d.position.y=.02,e.add(d);const g=new $({color:k.fairyGlow,transparent:!0,opacity:.08});for(let v=0;v<6;v++){const b=w()*6.28,E=b+.5+w()*1.5,T=n*.6+w()*n*.4,C=new L(new wt(.002,.002,T,3),g);C.position.set(Math.cos((b+E)/2)*n*.4,.005,Math.sin((b+E)/2)*n*.4),C.rotation.x=Math.PI/2,C.rotation.z=b,e.add(C)}const x=new Q({color:4864560,roughness:.9,transparent:!0,opacity:.5});for(let v=0;v<3;v++){const b=w()*6.28,E=w()*n*.7,T=new L(new K(.03,4,3),x);T.scale.set(1.3,.3,1.3),T.position.set(Math.cos(b)*E,.008,Math.sin(b)*E),e.add(T)}const m=new Q({color:7833702,roughness:.9,transparent:!0,opacity:.5});for(let v=0;v<2;v++){const b=new L(new Le(.02+w()*.02,4),m);b.position.set((w()-.5)*.08,.06,(w()-.5)*.06),b.rotation.x=-Math.PI/2+w()*.4,e.add(b)}const p=new $({color:8978346,transparent:!0,opacity:.25});for(let v=0;v<5;v++){const b=w()*6.28,E=w()*n*.9,T=new L(new K(.005,3,3),p);T.position.set(Math.cos(b)*E,.01,Math.sin(b)*E),e.add(T)}const M=new $({color:657926,transparent:!0,opacity:.15,side:Ht}),_=new L(new mr(n*.5,n*.85,12),M);return _.rotation.x=-Math.PI/2,_.position.y=.008,e.add(_),e.position.set(i,0,t),xt.add(e),{group:e,mushMat:o,discMat:f,x:i,z:t,phase:w()*6.28,glowIntensity:0,active:!1}}function vx(i,t,e){const n=new ae,s=new Q({color:k.bubbleIris,emissive:k.bubbleIris,emissiveIntensity:.15,transparent:!0,opacity:.25,roughness:0,metalness:.6}),o=new L($e.bubble,s);n.add(o);const r=new $({color:15650047,transparent:!0,opacity:.1}),a=new L(new we(.13,.003,4,10),r);a.rotation.x=.5,a.rotation.y=w()*3,n.add(a);const c=new L(new we(.11,.003,4,10),r);c.rotation.x=-.8,c.rotation.z=1.2,n.add(c);const l=new $({color:k.bubbleShine,transparent:!0,opacity:.5}),h=new L(new K(.04,4,3),l);h.position.set(.05,.07,.08),n.add(h);const u=new $({color:15658751,transparent:!0,opacity:.2}),f=new L(new K(.025,3,3),u);f.position.set(-.06,-.04,-.06),n.add(f);const d=new $({color:16755438,transparent:!0,opacity:.12}),g=new L(new K(.06,4,3),d);g.position.set(.02,-.02,.01),n.add(g);const x=new $({color:16772863,transparent:!0,opacity:.08}),m=new L(new K(.12,5,4),x);n.add(m);const p=[16764125,13426175,14548940];for(let C=0;C<3;C++){const S=new $({color:p[C],transparent:!0,opacity:.06}),y=new L(new we(.14-C*.02,.002,4,8),S);y.position.y=-.04+C*.04,y.rotation.x=Math.PI/2,n.add(y)}const M=new $({color:16777215,transparent:!0,opacity:.6});for(let C=0;C<3;C++){const S=w()*6.28,y=w()*Math.PI-Math.PI/2,P=new L(new K(.003,3,3),M);P.position.set(Math.cos(S)*Math.cos(y)*.14,Math.sin(y)*.14,Math.sin(S)*Math.cos(y)*.14),n.add(P)}const _=new $({color:11189196,transparent:!0,opacity:.1}),v=new L(new K(.015,3,3),_);v.position.set((w()-.5)*.04,(w()-.5)*.04,(w()-.5)*.04),n.add(v);const b=new $({color:k.bubbleIris,transparent:!0,opacity:.15}),E=new L(new K(.04,4,3),b);E.scale.set(1.3,.6,1.3),E.position.y=-.12,n.add(E);const T=.6+w()*.8;return n.scale.setScalar(T),n.position.set(i,t,e),xt.add(n),{group:n,shellMat:s,phase:w()*6.28,driftAng:w()*6.28,driftSpeed:.3+w()*.5,floatY:t,homeX:i,homeZ:e,bobAmp:.3+w()*.4,popped:!1,popTimer:0,sc:T}}function xx(i,t){const e=new ae,n=1.5+w()*1,s=new Q({color:329746,roughness:.9}),o=new L(new Le(n*.85,10),s);o.rotation.x=-Math.PI/2,o.position.y=.005,e.add(o);const r=new Q({color:k.pondWater,emissive:k.pondGlow,emissiveIntensity:.2,transparent:!0,opacity:.55,roughness:.05,metalness:.4}),a=new L(new Le(n,12),r);a.rotation.x=-Math.PI/2,a.position.y=.03,e.add(a);const c=new Q({color:3816002,roughness:.85}),l=5+Math.floor(w()*4);for(let P=0;P<l;P++){const U=P/l*6.28+w()*.3,N=n+w()*.2-.1,G=.06+w()*.08,W=new L(new K(G,4,3),c);W.scale.set(1+w()*.5,.4+w()*.3,1+w()*.5),W.position.set(Math.cos(U)*N,G*.2,Math.sin(U)*N),W.rotation.set(w(),w(),w()),e.add(W)}const h=new Q({color:1725728,roughness:.7,side:Ht});for(let P=0;P<3;P++){const U=w()*6.28,N=n*.85+w()*.2;for(let G=0;G<3;G++){const W=new L(new ye(.015,.15+w()*.1),h);W.position.set(Math.cos(U)*N+(w()-.5)*.05,.08,Math.sin(U)*N+(w()-.5)*.05),W.rotation.y=w()*3,W.rotation.x=-.2,e.add(W)}}const u=new $({color:11197934,transparent:!0,opacity:.08});for(let P=0;P<2;P++){const U=new L(new we(n*.3+P*n*.25,.005,4,16),u);U.rotation.x=Math.PI/2,U.position.y=.035,e.add(U)}const f=new Q({color:k.lilyPad,roughness:.6,side:Ht}),d=4+Math.floor(w()*2),g=[];for(let P=0;P<d;P++){const U=w()*6.28,N=w()*n*.6,G=.15+w()*.15,W=new L(new Le(G,8),f);W.rotation.x=-Math.PI/2,W.position.set(Math.cos(U)*N,.05,Math.sin(U)*N),e.add(W);const q=new $({color:1724448,transparent:!0,opacity:.3}),J=new L(new wt(.002,.002,G*1.5,3),q);J.position.set(Math.cos(U)*N,.052,Math.sin(U)*N),J.rotation.x=Math.PI/2,J.rotation.z=w()*3,e.add(J),g.push({mesh:W,phase:w()*6.28})}const x=new Q({color:k.lilyFlower,emissive:k.lilyGlow,emissiveIntensity:.4,transparent:!0,opacity:.85,side:Ht}),m=.08;for(let P=0;P<6;P++){const U=P/6*6.28,N=new L(new ye(.06,.05),x);N.position.set(g[0].mesh.position.x+Math.cos(U)*.05,m,g[0].mesh.position.z+Math.sin(U)*.05),N.rotation.x=-1,N.rotation.y=-U,e.add(N)}const p=new Q({color:16777130,emissive:k.lilyGlow,emissiveIntensity:.8}),M=new L(new K(.025,4,3),p);if(M.position.set(g[0].mesh.position.x,m+.02,g[0].mesh.position.z),e.add(M),g.length>2){const P=new Q({color:k.lilyFlower,emissive:k.lilyGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),U=new L(new K(.03,5,4),P);U.scale.set(.8,1.2,.8),U.position.set(g[2].mesh.position.x,.09,g[2].mesh.position.z),e.add(U)}const _=new Q({color:3815477,roughness:.8,transparent:!0,opacity:.5});for(let P=0;P<5;P++){const U=w()*6.28,N=w()*n*.7,G=new L(new K(.02+w()*.025,4,3),_);G.scale.set(1+w()*.5,.4,1+w()*.5),G.position.set(Math.cos(U)*N,.015,Math.sin(U)*N),e.add(G)}const v=new $({color:2761752,transparent:!0,opacity:.12,side:Ht});for(let P=0;P<3;P++){const U=w()*6.28,N=w()*n*.5,G=new L(new Le(.08+w()*.06,5),v);G.rotation.x=-Math.PI/2,G.position.set(Math.cos(U)*N,.012,Math.sin(U)*N),e.add(G)}const b=new Q({color:1122837,roughness:.7,transparent:!0,opacity:.4});for(let P=0;P<2;P++){const U=w()*6.28,N=w()*n*.5,G=new L(new K(.012,4,3),b);G.scale.set(.8,.5,1.3),G.position.set(Math.cos(U)*N,.04,Math.sin(U)*N),e.add(G);const W=new L(new wt(.002,.001,.025,3),b);W.position.set(Math.cos(U)*N-Math.cos(U)*.02,.04,Math.sin(U)*N-Math.sin(U)*.02),W.rotation.z=Math.PI/2,W.rotation.y=U,e.add(W)}const E=new $({color:2250016,transparent:!0,opacity:.1,side:Ht});for(let P=0;P<3;P++){const U=w()*6.28,N=n*.7+w()*n*.25,G=new L(new Le(.06+w()*.04,5),E);G.rotation.x=-Math.PI/2,G.position.set(Math.cos(U)*N,.032,Math.sin(U)*N),e.add(G)}const T=new $({color:13426158,transparent:!0,opacity:.06}),C=new L(new we(n-.05,.01,4,16),T);C.rotation.x=Math.PI/2,C.position.y=.035,e.add(C);const S=new Q({color:4861976,roughness:.8,side:Ht,transparent:!0,opacity:.6}),y=new L(new Le(.03,5),S);return y.rotation.x=-Math.PI/2,y.position.set((w()-.5)*n*.5,.04,(w()-.5)*n*.5),e.add(y),e.position.set(i,0,t),xt.add(e),{group:e,waterMat:r,flMat:x,pads:g,x:i,z:t,phase:w()*6.28,pondR:n}}function Mx(i,t){const e=new ae,n=new $({color:k.orbGold}),s=new L(new K(.2,10,8),n);e.add(s);const o=new $({color:16777215}),r=new L(new K(.06,6,4),o);e.add(r);const a=new $({color:16772744,transparent:!0,opacity:.4,wireframe:!0}),c=new L(new Ai(.15,0),a);e.add(c);const l=new $({color:k.orbGlow,transparent:!0,opacity:.5}),h=new L(new K(.35,8,6),l);e.add(h);const u=new $({color:k.orbGlow,transparent:!0,opacity:.3});for(let T=0;T<8;T++){const C=T/8*6.28,S=new L(new Pn(.02,.25,3),u);S.position.set(Math.cos(C)*.3,Math.sin(C*2)*.05,Math.sin(C)*.3),S.rotation.z=-C+Math.PI/2,S.rotation.y=C,e.add(S)}const f=new $({color:k.orbInner,transparent:!0,opacity:.15}),d=new L(new K(.6,8,5),f);e.add(d);for(let T=0;T<6;T++){const C=new L(new K(.03,4,3),new $({color:16777215})),S=T/6*6.28;C.position.set(Math.cos(S)*.4,Math.sin(S*2)*.1,Math.sin(S)*.4),e.add(C)}const g=new $({color:k.orbGold,transparent:!0,opacity:.7});for(let T=0;T<4;T++){const C=T/4*6.28+.4,S=new L(new K(.015,3,3),g);S.position.set(Math.cos(C)*.5,0,Math.sin(C)*.5),e.add(S)}const x=new $({color:16768426,transparent:!0,opacity:.12});for(let T=0;T<3;T++){const C=new L(new we(.28,.003,4,12),x);C.rotation.set(T*1.05,T*.7,0),e.add(C)}const m=new $({color:k.orbGlow,transparent:!0,opacity:.08}),p=new L(new we(.4,.004,4,16),m);p.rotation.x=Math.PI/2,e.add(p);const M=new $({color:16772812,transparent:!0,opacity:.15}),_=new L(new we(.25,.012,4,10),M);_.rotation.x=Math.PI/2,e.add(_);const v=new $({color:16777215,transparent:!0,opacity:.5});for(let T=0;T<6;T++){const C=w()*6.28,S=w()*Math.PI-Math.PI/2,y=new L(new K(.008,3,3),v);y.position.set(Math.cos(C)*Math.cos(S)*.2,Math.sin(S)*.2,Math.sin(C)*Math.cos(S)*.2),e.add(y)}const b=new $({color:k.orbGlow,transparent:!0,opacity:.1,side:Ht}),E=new L(new Le(.5,8),b);return E.rotation.x=-Math.PI/2,E.position.y=-.95,e.add(E),e.position.set(i,1,t),xt.add(e),{group:e,coreMat:n,glowMat:l,hazeMat:f,x:i,z:t,found:!1,flyUp:!1,flyY:1,phase:w()*6.28,laserLine:null,laserMat:null}}function yx(i,t){const e=new ae,n=new Q({color:k.rockBase,roughness:.85,metalness:.05}),s=new Q({color:k.rockLight,roughness:.8,metalness:.05}),o=new Q({color:k.rockMoss,emissive:k.rockMoss,emissiveIntensity:.03,roughness:.9}),r=.3+w()*.5,a=new L(new K(r,8,6),w()<.6?n:s);a.scale.set(1+w()*.6,.4+w()*.4,1+w()*.6),a.position.y=r*.2,a.rotation.set(w()*.5,w()*3,w()*.3),a.castShadow=!0,a.receiveShadow=!0,e.add(a);const c=1+Math.floor(w()*3);for(let d=0;d<c;d++){const g=w()*6.28,x=r*.6+w()*r*.5,m=r*.3+w()*r*.4,p=new L(new K(m,5,4),w()<.5?n:s);p.scale.set(1+w()*.5,.3+w()*.4,1+w()*.5),p.position.set(Math.cos(g)*x,m*.15,Math.sin(g)*x),p.rotation.set(w()*.8,w()*3,w()*.5),e.add(p)}const l=2+Math.floor(w()*3);for(let d=0;d<l;d++){const g=w()*6.28,x=w()*r*.6,m=r*.15+w()*r*.2,p=new L(new K(m,4,3),o);p.scale.set(1.5,.2,1.5),p.position.set(Math.cos(g)*x,r*.35+w()*.05,Math.sin(g)*x),e.add(p)}const h=[8943428,10061909,6715221,11180390];for(let d=0;d<3;d++){const g=new Q({color:h[Math.floor(w()*h.length)],roughness:.9,transparent:!0,opacity:.5}),x=w()*6.28,m=new L(new K(r*.06+w()*r*.08,3,3),g);m.scale.set(2,.15,2),m.position.set(Math.cos(x)*r*.5,r*.25+w()*.1,Math.sin(x)*r*.5),e.add(m)}const u=new Q({color:3816e3,roughness:.9}),f=4+Math.floor(w()*3);for(let d=0;d<f;d++){const g=w()*6.28,x=r*.5+w()*r*.6,m=.03+w()*.05,p=new L(new K(m,3,3),u);p.scale.set(1+w()*.5,.4,1+w()*.5),p.position.set(Math.cos(g)*x,m*.15,Math.sin(g)*x),e.add(p)}if(w()<.6){const d=new Q({color:3385941,emissive:k.grassTip,emissiveIntensity:.05,roughness:.7,side:Ht});for(let g=0;g<3;g++){const x=w()*6.28,m=new L(new ye(.015,.08+w()*.06),d);m.position.set(Math.cos(x)*r*.3,r*.3,Math.sin(x)*r*.3),m.rotation.y=w()*3,m.rotation.x=-.2-w()*.3,e.add(m)}}return e.position.set(i,0,t),xt.add(e),{group:e,x:i,z:t,colR:r*.8}}let ef=null,nf=null,sf=null;function wx(){return ef}function Sx(){return nf}function Ex(){return sf}function bx(){const i=new ae,t=new Q({color:k.obeliskBlack,roughness:.2,metalness:.8,emissive:k.obeliskPink,emissiveIntensity:0});nf=t;const e=new L(new wt(1.2,1.8,Ne,4),t);e.position.y=Ne/2,e.rotation.y=Math.PI/4,e.castShadow=!0,i.add(e);const n=new $({color:3351108,transparent:!0,opacity:.2});for(let M=0;M<4;M++){const _=M/4*6.28+Math.PI/4,v=new L(new wt(.03,.04,Ne*.9,3),n);v.position.set(Math.cos(_)*1.55,Ne*.45,Math.sin(_)*1.55),i.add(v)}const s=new $({color:k.obeliskPink,transparent:!0,opacity:0});for(let M=0;M<4;M++){const _=M/4*6.28+Math.PI/4;for(let b=0;b<3;b++){const E=6+b*4,T=new L(new wt(.015,.015,.8,3),s);T.position.set(Math.cos(_)*1.6,E,Math.sin(_)*1.6),T.rotation.z=Math.PI/2,T.rotation.y=-_,i.add(T)}const v=new L(new wt(.012,.012,2.5,3),s);v.position.set(Math.cos(_)*1.6,12,Math.sin(_)*1.6),i.add(v)}const o=new Q({color:k.obeliskBlack,roughness:.1,metalness:.9,emissive:k.obeliskPink,emissiveIntensity:0});sf=o;const r=new L(new Pn(1.3,3,4),o);r.position.y=Ne+1.5,r.rotation.y=Math.PI/4,i.add(r);const a=new $({color:k.obeliskPink,transparent:!0,opacity:0});for(let M=0;M<4;M++){const _=M/4*6.28+Math.PI/4,v=new L(new wt(.02,.02,3.2,3),a);v.position.set(Math.cos(_)*.8,Ne+1.5,Math.sin(_)*.8),v.rotation.z=.35*(_<3.14?1:-1),v.rotation.y=-_,i.add(v)}for(let M=0;M<5;M++){const _=new L(new we(1.85-M*.02,.04,6,4),new $({color:2236979}));_.position.y=4+M*5,_.rotation.x=Math.PI/2,i.add(_)}const c=new Q({color:1118488,roughness:.3,metalness:.7}),l=new L(new wt(2.2,2.5,.6,4),c);l.position.y=.3,l.rotation.y=Math.PI/4,i.add(l);const h=new L(new wt(2.8,3,.4,4),c);h.position.y=.05,h.rotation.y=Math.PI/4,i.add(h);const u=new $({color:k.obeliskPink,transparent:!0,opacity:0});for(let M=0;M<8;M++){const _=M/8*6.28,v=new L(new K(.06,4,3),u);v.position.set(Math.cos(_)*2.5,Ne*.7+M*.5,Math.sin(_)*2.5),i.add(v)}const f=new $({color:1710626,transparent:!0,opacity:.08});for(let M=0;M<6;M++){const _=w()*6.28,v=2+w()*Ne*.7,b=new L(new wt(.008,.008,.5+w()*.5,3),f);b.position.set(Math.cos(_)*1.6,v,Math.sin(_)*1.6),b.rotation.z=(w()-.5)*.8,b.rotation.y=-_,i.add(b)}const d=new Q({color:921108,roughness:.5,metalness:.4});for(let M=0;M<12;M++){const _=w()*6.28,v=3+w()*2,b=.15+w()*.25,E=new L(new K(b,4,3),d);E.scale.set(1+w()*.5,.3+w()*.3,1+w()*.5),E.position.set(Math.cos(_)*v,b*.15,Math.sin(_)*v),E.rotation.set(w(),w(),w()),i.add(E)}const g=new $({color:k.obeliskPink,transparent:!0,opacity:0});for(let M=0;M<4;M++){const _=M/4*6.28+Math.PI/4;for(let v=0;v<5;v++){const b=5+v*3.5+w()*.5,E=(w()-.5)*.4,T=new L(new K(.04,4,3),g);T.position.set(Math.cos(_)*1.58+Math.cos(_+1.57)*E,b,Math.sin(_)*1.58+Math.sin(_+1.57)*E),i.add(T)}}const x=new $({color:0,transparent:!0,opacity:.15,side:Ht}),m=new L(new Le(4,8),x);m.rotation.x=-Math.PI/2,m.position.y=.005,i.add(m),i.position.set(0,-Ne,0),xt.add(i),ef=i;const p=new Ui(8939212,0,30);i.add(p),p.position.set(0,Ne+1,0)}let of=null,rf=null;function Tx(){return of}function Ax(){return rf}function Rx(){const i=new Q({color:k.moatBlue,emissive:1136042,emissiveIntensity:.3,transparent:!0,opacity:0,roughness:.1,metalness:.3});rf=i;const t=new Tc;t.absarc(0,0,6,0,6.28,!1);const e=new pr;e.absarc(0,0,3,0,6.28,!0),t.holes.push(e);const n=new gr(t,24),s=new L(n,i);s.rotation.x=-Math.PI/2,s.position.y=.05,xt.add(s),of=s;const o=new $({color:4491468,transparent:!0,opacity:0});for(let d=0;d<12;d++){const g=d/12*6.28+w()*.3,x=3.5+w()*2,m=new L(new K(.04+w()*.04,4,3),o);m.scale.set(1.2,.4,1.2),m.position.set(Math.cos(g)*x,.02,Math.sin(g)*x),xt.add(m)}const r=new $({color:13426158,transparent:!0,opacity:0,side:Ht});for(let d=0;d<6;d++){const g=d/6*6.28+w()*.5,x=new L(new Le(.12+w()*.1,5),r);x.rotation.x=-Math.PI/2,x.position.set(Math.cos(g)*3.3,.06,Math.sin(g)*3.3),xt.add(x)}const a=new $({color:8960989,transparent:!0,opacity:0});for(let d=0;d<8;d++){const g=d/8*6.28,x=4+w()*1.5,m=new L(new wt(.003,.003,.4,3),a);m.position.set(Math.cos(g)*x,.055,Math.sin(g)*x),m.rotation.x=Math.PI/2,m.rotation.z=g+Math.PI/2,xt.add(m)}const c=new $({color:264208,transparent:!0,opacity:0,side:Ht}),l=new Tc;l.absarc(0,0,5.2,0,6.28,!1);const h=new pr;h.absarc(0,0,3.8,0,6.28,!0),l.holes.push(h);const u=new gr(l,16),f=new L(u,c);f.rotation.x=-Math.PI/2,f.position.y=.04,xt.add(f)}const zc=[];function Cx(){for(let r=0;r<6;r++){const a=k.rainbow[r],c=r/6*6.28,l=5+r*.5,h=Ne+5+r*2,u=[];for(let E=0;E<=12;E++){const T=E/12,C=c+T*Math.PI,S=Math.cos(C)*l,y=Math.sin(C)*l,P=Math.sin(T*Math.PI)*h;u.push(new D(S,P,y))}const f=new Ec(u),d=new $({color:a,transparent:!0,opacity:0}),g=new ms(f,20,.12-r*.008,5,!1),x=new L(g,d);xt.add(x);const m=new $({color:a,transparent:!0,opacity:0});for(let E=0;E<5;E++){const T=(E+.5)/5,C=f.getPoint(T),S=new L(new K(.05,3,3),m);S.position.copy(C),xt.add(S)}const p=new $({color:a,transparent:!0,opacity:0,side:Ht}),M=u[0],_=u[u.length-1],v=new L(new Le(.5,6),p);v.rotation.x=-Math.PI/2,v.position.set(M.x,.03,M.z),xt.add(v);const b=new L(new Le(.5,6),p);b.rotation.x=-Math.PI/2,b.position.set(_.x,.03,_.z),xt.add(b),zc.push({mesh:x,mat:d,targetOpacity:0})}const i=[],t=9.5,e=Ne+12;for(let r=0;r<=12;r++){const a=r/12,c=a*Math.PI;i.push(new D(Math.cos(c)*t,Math.sin(a*Math.PI)*e,Math.sin(c)*t))}const n=new Ec(i),s=new $({color:15654399,transparent:!0,opacity:0}),o=new L(new ms(n,16,.04,4,!1),s);xt.add(o),zc.push({mesh:o,mat:s,targetOpacity:0})}const En=[];function Px(i){for(let t=0;t<i;t++){const e=new $({color:t%3===0?k.fireflyB:k.firefly,transparent:!0,opacity:0}),n=new L($e.fly,e);n.visible=!1,xt.add(n),En.push({mesh:n,mat:e,vel:new D,life:0,max:0,active:!1,phase:Math.random()*6.28,wander:Math.random()*6.28})}}function Bc(i,t,e,n){let s=null;for(let o=0;o<En.length;o++)if(!En[o].active){s=En[o];break}if(!s){let o=1/0;for(let r=0;r<En.length;r++)En[r].life<o&&(o=En[r].life,s=En[r])}s.mesh.position.set(i,t+.5+Math.random()*3,e),s.mesh.visible=!0,s.mat.opacity=1,s.vel.set((Math.random()-.5)*2,Math.random()-.5,(Math.random()-.5)*2),s.life=n,s.max=n,s.active=!0,s.wander=Math.random()*6.28}function af(i,t){let e=0;for(let n=0;n<En.length;n++){const s=En[n];if(!s.active)continue;if(s.life-=i,s.life<=0){s.active=!1,s.mesh.visible=!1;continue}e++,s.wander+=(Math.random()-.5)*3*i,s.vel.x+=Math.cos(s.wander)*1.5*i,s.vel.z+=Math.sin(s.wander)*1.5*i,s.vel.y+=Math.sin(t*2+s.phase)*i,s.vel.multiplyScalar(.995),s.mesh.position.x+=s.vel.x*i,s.mesh.position.y+=s.vel.y*i,s.mesh.position.z+=s.vel.z*i,s.mesh.position.y<.3&&(s.mesh.position.y=.3,s.vel.y=Math.abs(s.vel.y)*.5),s.mesh.position.y>12&&(s.vel.y-=2*i);const o=Math.sin(t*3+s.phase)*.5+.5,r=s.life/s.max;s.mat.opacity=r*(.4+o*.6),s.mesh.scale.setScalar(.6+o*.6)}return e}const bn=[];function Lx(i){for(let t=0;t<i;t++){const e=new $({color:k.spore,transparent:!0,opacity:0}),n=new L($e.spore,e);n.visible=!1,xt.add(n),bn.push({mesh:n,mat:e,vel:new D,life:0,max:0,active:!1})}}function Ix(i,t,e){let n=null;for(let s=0;s<bn.length;s++)if(!bn[s].active){n=bn[s];break}if(!n){let s=1/0;for(let o=0;o<bn.length;o++)bn[o].life<s&&(s=bn[o].life,n=bn[o])}n.mesh.position.set(i,t,e),n.mesh.visible=!0,n.vel.set((Math.random()-.5)*.3,.4+Math.random()*.4,(Math.random()-.5)*.3),n.life=3+Math.random()*3,n.max=n.life,n.active=!0}function Dx(i){let t=0;for(let e=0;e<bn.length;e++){const n=bn[e];if(n.active){if(n.life-=i,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}t++,n.vel.y+=.3*i,n.vel.multiplyScalar(.997),n.mesh.position.x+=n.vel.x*i,n.mesh.position.y+=n.vel.y*i,n.mesh.position.z+=n.vel.z*i,n.mat.opacity=n.life/n.max*.7}}return t}const os=[];let wa=0;function Ux(i){for(let t=0;t<i;t++){const e=new $({color:k.starMote,transparent:!0,opacity:0}),n=new L($e.starMote,e);n.visible=!1,xt.add(n),os.push({mesh:n,mat:e,life:0,max:0,active:!1,vy:0,drift:0})}}function Nx(i){let t=null;for(let o=0;o<os.length;o++)if(!os[o].active){t=os[o];break}if(!t)return;const e=i.x+(Math.random()-.5)*60,n=i.z+(Math.random()-.5)*60,s=15+Math.random()*20;t.mesh.position.set(e,s,n),t.mesh.visible=!0,t.mat.opacity=.8,t.life=6+Math.random()*6,t.max=t.life,t.active=!0,t.vy=-.15-Math.random()*.3,t.drift=Math.random()*6.28}function cf(i,t,e){wa+=i,wa>.15&&(wa=0,Nx(e));for(let n=0;n<os.length;n++){const s=os[n];if(!s.active)continue;if(s.life-=i,s.life<=0||s.mesh.position.y<.5){s.active=!1,s.mesh.visible=!1;continue}s.mesh.position.y+=s.vy*i,s.drift+=(Math.random()-.5)*.5*i,s.mesh.position.x+=Math.sin(s.drift)*.1*i,s.mesh.position.z+=Math.cos(s.drift)*.08*i;const o=s.life/s.max,r=Math.sin(t*4+n)*.3+.7;s.mat.opacity=o*r*.7,s.mesh.scale.setScalar(.5+r*.5)}}const rs=[];function Fx(i){for(let t=0;t<i;t++){const e=new $({color:8956535,transparent:!0,opacity:0}),n=new L($e.dustMote,e);n.visible=!1,xt.add(n),rs.push({mesh:n,mat:e,vel:new D,life:0,max:0,active:!1})}}function Ox(i,t,e){for(let n=0;n<e;n++){let s=null;for(let a=0;a<rs.length;a++)if(!rs[a].active){s=rs[a];break}if(!s)continue;const o=Math.random()*6.28,r=1+Math.random()*2;s.mesh.position.set(i+Math.cos(o)*.2,.1,t+Math.sin(o)*.2),s.mesh.visible=!0,s.mat.opacity=.5,s.vel.set(Math.cos(o)*r,.5+Math.random()*1.5,Math.sin(o)*r),s.life=.6+Math.random()*.6,s.max=s.life,s.active=!0}}function zx(i){for(let t=0;t<rs.length;t++){const e=rs[t];if(e.active){if(e.life-=i,e.life<=0){e.active=!1,e.mesh.visible=!1;continue}e.vel.y-=3*i,e.vel.multiplyScalar(.96),e.mesh.position.x+=e.vel.x*i,e.mesh.position.y+=e.vel.y*i,e.mesh.position.z+=e.vel.z*i,e.mesh.position.y<.05&&(e.mesh.position.y=.05,e.vel.y=0,e.vel.x*=.8,e.vel.z*=.8),e.mat.opacity=e.life/e.max*.4}}}const as=[];function Bx(i){for(let t=0;t<i;t++){const e=new $({color:k.bubblePop,transparent:!0,opacity:0}),n=new L(new K(.02,3,3),e);n.visible=!1,xt.add(n),as.push({mesh:n,mat:e,vel:new D,life:0,max:0,active:!1})}}function kx(i,t,e,n){for(let s=0;s<n;s++){let o=null;for(let l=0;l<as.length;l++)if(!as[l].active){o=as[l];break}if(!o)continue;const r=Math.random()*6.28,a=Math.random()*3.14,c=1+Math.random()*2;o.mesh.position.set(i,t,e),o.mesh.visible=!0,o.mat.opacity=.9,o.vel.set(Math.cos(r)*Math.sin(a)*c,Math.cos(a)*c,Math.sin(r)*Math.sin(a)*c),o.life=.4+Math.random()*.4,o.max=o.life,o.active=!0}}function Gx(i){for(let t=0;t<as.length;t++){const e=as[t];if(e.active){if(e.life-=i,e.life<=0){e.active=!1,e.mesh.visible=!1;continue}e.vel.y-=2*i,e.vel.multiplyScalar(.97),e.mesh.position.x+=e.vel.x*i,e.mesh.position.y+=e.vel.y*i,e.mesh.position.z+=e.vel.z*i,e.mat.opacity=e.life/e.max*.8}}}let Sa=0,ln="SEEK",di=-Ne,Sn=0,vi=[],xi=null,Fs=null,Os=null,zs=null,kc=null,Mi=[],Bs=null,lf=null,Gc=null,Hc=[],Vc=[],Wc=[],Xc=[];function Hx(i){vi=i.orbs,xi=i.obeliskGroup,Fs=i.obeliskMat,Os=i.obeliskGlowMat,zs=i.moatMesh,kc=i.moatMat,Mi=i.rainbowArcs,Bs=i.player,lf=i.makeLaser,Gc=i.orbHudEl,Hc=i.deers||[],Vc=i.puffs||[],Wc=i.jellies||[],Xc=i.moths||[]}function Vx(i,t){let e=null,n=1/0;for(let s=0;s<vi.length;s++){const o=vi[s];if(o.found)continue;const r=o.x-Bs.pos.x,a=o.z-Bs.pos.z,c=r*r+a*a;c<n&&(n=c,e=o)}if(e&&n<_a*_a){const s=Math.sin(t*2+e.phase)*.5+.5;Ns.position.set(e.x,1,e.z),Ns.intensity=1+s*2,Ns.distance=_a}else Ns.intensity=0;for(let s=0;s<vi.length;s++){const o=vi[s];if(!(o.found&&!o.flyUp)){if(!o.found){const r=Math.sin(t*1.5+o.phase)*.5+.5;o.group.position.y=1+Math.sin(t*.8+o.phase)*.3,o.glowMat.opacity=.3+r*.4,o.hazeMat.opacity=.08+r*.12;for(let l=3;l<o.group.children.length;l++){const h=o.group.children[l],u=(l-3)/6*6.28+t*1.5;h.position.x=Math.cos(u)*.4,h.position.z=Math.sin(u)*.4,h.position.y=Math.sin(u*2+t)*.1}const a=o.x-Bs.pos.x,c=o.z-Bs.pos.z;a*a+c*c<Gh*Gh&&(o.found=!0,o.flyUp=!0,o.flyY=o.group.position.y,Sa++,Gc&&(Gc.innerHTML="✦ "+Sa+" / "+Lc),ln==="SEEK"&&(ln="RISING"))}if(o.flyUp){const r=Ne+5;o.flyY+=(r-o.flyY)*i*.8,o.group.position.y=o.flyY;const a=Math.min((o.flyY-1)/(r-1),1);o.group.scale.setScalar(1-a*.6),o.glowMat.opacity=.8-a*.5,o.flyY>r-1&&!o.laserLine&&(o.flyUp=!1,o.group.visible=!1,o.laserLine=lf(o.x,o.z,r))}}}if(ln==="RISING"&&(di<0&&(di+=Tv*i,di>0&&(di=0),xi&&(xi.position.y=di)),Sa>=Lc&&di>=0&&(ln="COMPLETE",Sn=0)),xi){xi.rotation.y+=i*.03;const s=xi.children[xi.children.length-1];if(s&&s.isLight){const o=Math.max(0,Math.min(1,(di+Ne)/Ne));s.intensity=o*1.5*(.8+Math.sin(t*1.5)*.2)}}for(let s=0;s<vi.length;s++){const o=vi[s];if(!o.laserLine)continue;const r=Math.sin(t*3+s)*.5+.5;o.laserLine.mat.opacity=.5+r*.4,o.laserLine.glowMat.opacity=.15+r*.15}if(ln==="COMPLETE"){Sn+=i;const s=Math.min(Sn/3,1);if(Fs&&(Fs.emissiveIntensity=s*1.5),Os&&(Os.emissiveIntensity=s*2.5),Sn>1&&kc){const o=Math.min((Sn-1)/4,1);kc.opacity=o*.6,zs&&(zs.position.y=.05+Math.sin(t*3)*.02*o)}if(Sn>2)for(let o=0;o<Mi.length;o++){const r=o*.3,a=Math.min(Math.max((Sn-2-r)/2,0),1);Mi[o].mat.opacity=a*.55,Mi[o].mesh.rotation.y+=i*.1*(o+1)*.3}if(Sn>1){const o=Math.min((Sn-1)/6,1)*2;for(let r=0;r<Hc.length;r++){const a=Hc[r],c=a.group,l=-c.position.x,h=-c.position.z,u=Math.sqrt(l*l+h*h);u>8?(a.wanderAng=Math.atan2(-c.position.x,-c.position.z),a.state="walk",a.speed=1.5*o,c.position.x+=l/u*a.speed*i,c.position.z+=h/u*a.speed*i,c.rotation.y=a.wanderAng):a.state="pause"}for(let r=0;r<Vc.length;r++){const a=Vc[r],c=a.group,l=-c.position.x,h=-c.position.z,u=Math.sqrt(l*l+h*h);u>8&&(a.wanderAng=Math.atan2(-c.position.x,-c.position.z),a.state="hop",a.hopTimer=a.hopTimer%1.2,c.position.x+=l/u*1.5*o*i,c.position.z+=h/u*1.5*o*i)}for(let r=0;r<Wc.length;r++){const a=Wc[r],c=a.group;c.position.x+=(0-c.position.x)*i*.15*o,c.position.z+=(0-c.position.z)*i*.15*o}for(let r=0;r<Xc.length;r++){const a=Xc[r];a.centerX+=(0-a.centerX)*i*.2*o,a.centerZ+=(0-a.centerZ)*i*.2*o,a.orbitR=Math.max(a.orbitR-i*.3*o,2)}}Sn>10&&(ln="FINALE")}if(ln==="FINALE"){Fs&&(Fs.emissiveIntensity=1.5+Math.sin(t*.5)*.3),Os&&(Os.emissiveIntensity=2.5+Math.sin(t*.7)*.5),zs&&(zs.position.y=.05+Math.sin(t*3)*.02);for(let s=0;s<Mi.length;s++)Mi[s].mesh.rotation.y+=i*.1*(s+1)*.3,Mi[s].mat.opacity=.45+Math.sin(t+s)*.1}}function Wx(i,t,e){const n=Ne+2,s=[new D(i,e,t),new D(0,n,0)],o=new $({color:k.laserPink,transparent:!0,opacity:.8}),r=new Pu(s[0],s[1]),a=new ms(r,1,.08,6,!1),c=new L(a,o);xt.add(c);const l=new $({color:k.laserGlow,transparent:!0,opacity:.25}),h=new L(new ms(r,1,.25,6,!1),l);return xt.add(h),{tube:c,glow:h,mat:o,glowMat:l}}const Xx=600;let ko=.25,be=1,Zh=.85,hf="NIGHT",ks=null,Gs=null,Yc=null,Hs=null,er=null,qc=null;const nr=[];let Zc=!1;const Kh=[{label:"DUSK",sky:new _t(923685),fog:new _t(791584),fogDensity:.009,moonInt:.6,moonCol:new _t(14527112),moonElev:15,ambSky:new _t(4469589),ambGnd:new _t(2238488),ambInt:.6,stars:.4,bio:.7,plRange:16,plInt:.5},{label:"NIGHT",sky:new _t(330264),fog:new _t(528408),fogDensity:.01,moonInt:1,moonCol:new _t(12307694),moonElev:55,ambSky:new _t(3359846),ambGnd:new _t(1587232),ambInt:.7,stars:.85,bio:1,plRange:18,plInt:.55},{label:"DEEP_NIGHT",sky:new _t(198160),fog:new _t(397332),fogDensity:.012,moonInt:.55,moonCol:new _t(8952251),moonElev:75,ambSky:new _t(1712708),ambGnd:new _t(1188888),ambInt:.5,stars:1,bio:1.5,plRange:22,plInt:.7},{label:"DAWN",sky:new _t(1187888),fog:new _t(923688),fogDensity:.011,moonInt:.5,moonCol:new _t(13417386),moonElev:20,ambSky:new _t(3354197),ambGnd:new _t(1843224),ambInt:.55,stars:.35,bio:.65,plRange:17,plInt:.5}],Qn=new _t,$h=new _t;function Yx(){if(!qc||Zc)return;const i=new Set;qc.traverse(t=>{const e=t.material;e&&e.transparent&&!i.has(e)&&(i.add(e),nr.push({mat:e,base:e.opacity}))}),Zc=!0}function qx(i){ks=i.scene,Gs=i.moon,Yc=i.moon2,Hs=i.hemiLight,er=i.playerLight,qc=i.skyGroup}function Zx(i){if(!ks)return;Zc||Yx(),ko=(ko+i/Xx)%1;const t=ko*4,e=Math.floor(t)%4,n=(e+1)%4,s=t-Math.floor(t),o=.5-.5*Math.cos(s*Math.PI),r=Kh[e],a=Kh[n];hf=o<.5?r.label:a.label;const c=(l,h)=>l+(h-l)*o;if(Qn.copy(r.sky).lerp(a.sky,o),ks.background.copy(Qn),Qn.copy(r.fog).lerp(a.fog,o),ks.fog.color.copy(Qn),ks.fog.density=c(r.fogDensity,a.fogDensity),Gs){Qn.copy(r.moonCol).lerp(a.moonCol,o),Gs.color.copy(Qn),Gs.intensity=c(r.moonInt,a.moonInt);const l=ko*Math.PI*2,h=c(r.moonElev,a.moonElev)*Math.PI/180,u=60;Gs.position.set(Math.cos(l)*Math.cos(h)*u,Math.sin(h)*u,Math.sin(l)*Math.cos(h)*u)}if(Yc){const l=c(r.moonInt,a.moonInt)/.85;Yc.intensity=.3*l}Hs&&(Qn.copy(r.ambSky).lerp(a.ambSky,o),$h.copy(r.ambGnd).lerp(a.ambGnd,o),Hs.color.copy(Qn),Hs.groundColor.copy($h),Hs.intensity=c(r.ambInt,a.ambInt)),er&&(er.distance=c(r.plRange,a.plRange),er.intensity=c(r.plInt,a.plInt)),Zh=c(r.stars,a.stars);for(let l=0;l<nr.length;l++)nr[l].mat.opacity=nr[l].base*Zh;be=c(r.bio,a.bio)}let wr=0,Sl=0,ir=0,sr="CLEAR",vs=!1,kn=0;const or={CLEAR:{fogMult:1,windBase:.3,rainRate:0,skyDarken:0,mistCount:0,duration:[90,180]},MISTY:{fogMult:1.8,windBase:.2,rainRate:0,skyDarken:.05,mistCount:6,duration:[60,150]},LIGHT_RAIN:{fogMult:1.3,windBase:.6,rainRate:.3,skyDarken:.1,mistCount:2,duration:[60,120]},HEAVY_RAIN:{fogMult:1.6,windBase:1,rainRate:.8,skyDarken:.2,mistCount:3,duration:[45,100]},FOG_BANK:{fogMult:2.5,windBase:.15,rainRate:0,skyDarken:.1,mistCount:8,duration:[60,120]},LUMINOUS_STORM:{fogMult:1.4,windBase:1.5,rainRate:.6,skyDarken:.15,mistCount:2,duration:[40,90]}},Kx={CLEAR:{MISTY:.4,LIGHT_RAIN:.3,FOG_BANK:.2,LUMINOUS_STORM:.1},MISTY:{CLEAR:.3,LIGHT_RAIN:.3,FOG_BANK:.3,HEAVY_RAIN:.1},LIGHT_RAIN:{CLEAR:.2,MISTY:.2,HEAVY_RAIN:.4,LUMINOUS_STORM:.2},HEAVY_RAIN:{LIGHT_RAIN:.4,LUMINOUS_STORM:.3,MISTY:.2,CLEAR:.1},FOG_BANK:{MISTY:.4,CLEAR:.3,LIGHT_RAIN:.2,LUMINOUS_STORM:.1},LUMINOUS_STORM:{HEAVY_RAIN:.3,MISTY:.3,CLEAR:.2,LIGHT_RAIN:.2}};let ji="CLEAR",$i=null,rr=0,Go=0,Ea=0,Ho=!1,Vo=0,ba=Math.random()*Math.PI*2,Ta=0,Aa=0;const Kc=[],$x=8;let Jh=!1,Ra=0,Wo=1,Ca=0,Xo=0,Pa=0;function Jx(){const i=Kx[ji],t=Object.entries(i);let e=0;for(const[,s]of t)e+=s;let n=Math.random()*e;for(const[s,o]of t)if(n-=o,n<=0)return s;return t[0][0]}function jx(){if(Jh)return;const i=document.createElement("canvas");i.width=128,i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(64,32,0,64,32,64);e.addColorStop(0,"rgba(255,255,255,0.5)"),e.addColorStop(.3,"rgba(255,255,255,0.25)"),e.addColorStop(.7,"rgba(255,255,255,0.06)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,64);const n=new ll(i),s=new ye(40,14);for(let o=0;o<$x;o++){const r=new $({map:n,color:5596791,transparent:!0,opacity:0,side:Ht,depthWrite:!1}),a=new L(s,r);a.visible=!1,xt.add(a),Kc.push({mesh:a,mat:r,active:!1,drift:Math.random()*Math.PI*2,speed:.3+Math.random()*.4,baseY:.8+Math.random()*2,wobble:Math.random()*Math.PI*2})}Jh=!0}function Qx(){jx();const i=or.CLEAR.duration;rr=i[0]+Math.random()*(i[1]-i[0])}function tM(i,t,e){if(Ho)if(Go-=i,Go<=0){ji=$i,$i=null,Ho=!1;const o=or[ji].duration;rr=o[0]+Math.random()*(o[1]-o[0]),Vo=0}else Vo=1-Go/Ea;else rr-=i,rr<=0&&($i=Jx(),Ho=!0,Ea=30+Math.random()*60,Go=Ea,Vo=0);const n=or[ji];if(Ho&&$i){const o=or[$i],r=.5-.5*Math.cos(Vo*Math.PI),a=(c,l)=>c+(l-c)*r;Wo=a(n.fogMult,o.fogMult),Ca=a(n.rainRate,o.rainRate),Xo=a(n.skyDarken,o.skyDarken),Pa=a(n.mistCount,o.mistCount),ir=a(n.windBase,o.windBase),sr=r<.5?ji:$i}else Wo=n.fogMult,Ca=n.rainRate,Xo=n.skyDarken,Pa=n.mistCount,ir=n.windBase,sr=ji;vs=sr==="LUMINOUS_STORM",ba+=(Math.sin(t*.05)*.2+Math.sin(t*.13)*.1)*i,Ta-=i,Ta<=0&&(Ta=2+Math.random()*6,Aa=Math.random()*.8),Aa*=Math.pow(.3,i);const s=ir+Aa;if(wr=Math.cos(ba)*s,Sl=Math.sin(ba)*s,xt.fog.density*=Wo,Xo>.001){const o=xt.background,r=1-Xo;o.r*=r,o.g*=r,o.b*=r}if(e){const o=Math.round(Pa);for(let r=0;r<Kc.length;r++){const a=Kc[r];if(r<o){a.active||(a.active=!0,a.mesh.visible=!0,a.drift=Math.random()*Math.PI*2);const c=10+Math.sin(t*.3+a.wobble)*8,l=a.drift+t*a.speed*.05;a.mesh.position.set(e.x+Math.cos(l)*c,a.baseY+Math.sin(t*.4+a.wobble)*.5,e.z+Math.sin(l)*c),a.mesh.rotation.y=l+Math.PI/2,a.drift+=wr*i*.02;const h=.03+Wo*.012;a.mat.opacity+=(h-a.mat.opacity)*i*2}else a.active&&(a.mat.opacity-=i*.5,a.mat.opacity<=.005&&(a.active=!1,a.mesh.visible=!1,a.mat.opacity=0))}}return vs&&(Ra-=i,Ra<=0&&(Ra=1+Math.random()*4,kn=1)),kn*=Math.pow(.02,i),kn<.01&&(kn=0),Ca}const wn=300,Yo=new Float32Array(wn),Is=new Float32Array(wn),qo=new Float32Array(wn),La=new Float32Array(wn),Ia=new Float32Array(wn),Da=new Float32Array(wn),yi=new Float32Array(wn),en=new Float32Array(wn*6);let Ti=null,$c=null;function eM(){const i=new Ce;i.setAttribute("position",new yn(en,3)),$c=new Tu({color:8952251,transparent:!0,opacity:.3,depthWrite:!1}),Ti=new kd(i,$c),Ti.frustumCulled=!1,Ti.visible=!1,xt.add(Ti);for(let t=0;t<wn;t++)yi[t]=0,uf(t)}function uf(i){const t=i*6;en[t]=0,en[t+1]=-100,en[t+2]=0,en[t+3]=0,en[t+4]=-100,en[t+5]=0}function nM(i,t,e,n,s){if(!Ti)return;const o=e>.01;if(Ti.visible=o,!o)return;$c.opacity=Math.min(.15+e*.35,.5);const r=Math.floor(e*12*i*60);for(let c=0;c<r;c++){let l=-1;for(let f=0;f<wn;f++)if(yi[f]<=0){l=f;break}if(l===-1)break;const h=Math.random()*Math.PI*2,u=Math.random()*30;Yo[l]=t.x+Math.cos(h)*u,Is[l]=12+Math.random()*10,qo[l]=t.z+Math.sin(h)*u,La[l]=n*2+(Math.random()-.5)*.3,Ia[l]=-12-Math.random()*8,Da[l]=s*2+(Math.random()-.5)*.3,yi[l]=2+Math.random()*1.5}const a=.06;for(let c=0;c<wn;c++){if(yi[c]<=0)continue;if(yi[c]-=i,yi[c]<=0||Is[c]<.1){yi[c]=0,uf(c);continue}Yo[c]+=La[c]*i,Is[c]+=Ia[c]*i,qo[c]+=Da[c]*i;const l=c*6;en[l]=Yo[c],en[l+1]=Is[c],en[l+2]=qo[c],en[l+3]=Yo[c]+La[c]*a,en[l+4]=Is[c]+Ia[c]*a,en[l+5]=qo[c]+Da[c]*a}Ti.geometry.attributes.position.needsUpdate=!0}let Jc=null,Ua=60;const iM={DUSK:"Dusk",NIGHT:"Night",DEEP_NIGHT:"Deep Night",DAWN:"Dawn"},sM={CLEAR:"Clear",MISTY:"Misty",LIGHT_RAIN:"Light Rain",HEAVY_RAIN:"Heavy Rain",FOG_BANK:"Fog",LUMINOUS_STORM:"Storm"};function oM(){Jc=document.getElementById("hud")}function rM(i,t){if(!Jc)return;Ua=Ua*.95+1/Math.max(i,.001)*.05;const e=ln==="SEEK"?"Seek the orbs...":ln==="RISING"?"The obelisk stirs...":ln==="COMPLETE"?"Convergence!":"Luminaries",n=iM[hf]||"Night",s=sM[sr]||"Clear";Jc.innerHTML="<b>"+e+"</b> · "+n+" · "+s+" · FPS:"+Math.round(Ua)+"<br>Pos:"+t.x.toFixed(0)+","+t.z.toFixed(0)}let Sr=null;function aM(){Sr=document.getElementById("orb-hud")}function cM(){return Sr}function lM(){const i=document.getElementById("overlay");i&&(i.style.opacity="0",setTimeout(()=>{try{i.remove()}catch{}},2500)),Sr&&(Sr.style.display="block")}const fe=[],Ke=[],le=[],Qs=[],Bn=[],to=[],eo=[],no=[],io=[],Di=[],jc=[],ff=[],Er=[],El=[],br=[],An=[],nn=[],sn=[];let Na=0,pi=null,Ds=0;function hM(){for(let i=0;i<av;i++){let t,e,n=!1;for(let s=0;s<20;s++){const o=w()*6.28,r=5+w()*(xe-10);t=Math.cos(o)*r,e=Math.sin(o)*r,n=!0;for(let a=0;a<fe.length;a++){const c=fe[a].x-t,l=fe[a].z-e;if(c*c+l*l<9){n=!1;break}}if(n)break}if(n){const s=tx(t,e);fe.push({group:s,x:t,z:e})}}for(let i=0;i<cv;i++){const t=fe[Math.floor(w()*fe.length)],e=w()*6.28,n=1+w()*4;Ke.push(ex(t.x+Math.cos(e)*n,t.z+Math.sin(e)*n))}for(let i=0;i<lv;i++){const t=w()*6.28,e=8+w()*xe*.6;le.push(nx(Math.cos(t)*e,Math.sin(t)*e))}for(let i=0;i<hv;i++){const t=w()*6.28,e=10+w()*xe*.5;Qs.push(fx(Math.cos(t)*e,3+w()*5,Math.sin(t)*e))}for(let i=0;i<uv;i++){const t=Ke[Math.floor(w()*Ke.length)],e=w()*6.28,n=1+w()*5;Bn.push(dx(t.x+Math.cos(e)*n,t.z+Math.sin(e)*n))}for(let i=0;i<fv;i++){const t=w()*6.28,e=12+w()*xe*.5;to.push(px(Math.cos(t)*e,Math.sin(t)*e))}for(let i=0;i<dv;i++){const t=fe[Math.floor(w()*fe.length)];eo.push(mx(t.x,2+w()*4,t.z))}for(let i=0;i<pv;i++){const t=w()*6.28,e=2+w()*(xe*.9);no.push(ix(Math.cos(t)*e,Math.sin(t)*e,2+w()*2.5,25+Math.floor(w()*20)))}for(let i=0;i<vv;i++){let t,e,n=!1;for(let s=0;s<10;s++){const o=w()*6.28,r=3+w()*(xe*.85);t=Math.cos(o)*r,e=Math.sin(o)*r,n=!0;for(let a=0;a<fe.length;a++){const c=fe[a].x-t,l=fe[a].z-e;if(c*c+l*l<4){n=!1;break}}if(n)break}n&&ff.push(yx(t,e))}for(let i=0;i<mv;i++){const t=fe[Math.floor(w()*fe.length)],e=w()*6.28,n=1+w()*5;io.push(sx(t.x+Math.cos(e)*n,t.z+Math.sin(e)*n))}for(let i=0;i<gv;i++){const t=w()*6.28,e=3+w()*(xe*.7);Di.push(ox(Math.cos(t)*e,Math.sin(t)*e))}for(let i=0;i<_v;i++){const t=w()*6.28,e=4+w()*(xe*.8);jc.push(rx(Math.cos(t)*e,Math.sin(t)*e))}for(let i=0;i<Lc;i++){let t,e,n=!1;for(let s=0;s<30;s++){const o=w()*6.28,r=20+w()*(xe*.6);t=Math.cos(o)*r,e=Math.sin(o)*r,n=!0;for(let a=0;a<sn.length;a++){const c=sn[a].x-t,l=sn[a].z-e;if(c*c+l*l<225){n=!1;break}}if(n)break}n&&sn.push(Mx(t,e))}for(let i=0;i<Wu;i++){const t=w()*6.28,e=2+w()*3;Er.push(gx(Math.cos(t)*e,1+w()*.5,Math.sin(t)*e))}for(let i=0;i<xv;i++){const t=w()*6.28,e=4+w()*(xe*.7);El.push(hx(Math.cos(t)*e,Math.sin(t)*e))}for(let i=0;i<Mv;i++){let t,e,n=!1;for(let s=0;s<20;s++){const o=w()*6.28,r=10+w()*(xe*.6);t=Math.cos(o)*r,e=Math.sin(o)*r,n=!0;for(let a=0;a<fe.length;a++){const c=fe[a].x-t,l=fe[a].z-e;if(c*c+l*l<36){n=!1;break}}if(n)break}n&&br.push(_x(t,e))}for(let i=0;i<yv;i++){const t=w()*6.28,e=5+w()*xe*.6;An.push(vx(Math.cos(t)*e,.5+w()*5,Math.sin(t)*e))}for(let i=0;i<Sv;i++){let t,e,n=!1;for(let s=0;s<20;s++){const o=w()*6.28,r=8+w()*(xe*.6);t=Math.cos(o)*r,e=Math.sin(o)*r,n=!0;for(let a=0;a<fe.length;a++){const c=fe[a].x-t,l=fe[a].z-e;if(c*c+l*l<16){n=!1;break}}if(n)break}n&&nn.push(xx(t,e))}}function df(i,t){const e=1+ir*1.5,n=wr*.03,s=Sl*.03;for(let o=0;o<no.length;o++){const r=no[o],a=(Math.sin(t*.7+r.cx*.05)*.04+Math.sin(t*1.3+r.cz*.08)*.02)*e;r.mesh.rotation.z=a+n,r.mesh.rotation.x=Math.sin(t*.9+r.cz*.06)*.03*e+s}for(let o=0;o<io.length;o++){const r=io[o];r.group.rotation.z=Math.sin(t*.8+r.phase)*.03*e+n,r.group.rotation.x=Math.sin(t*.6+r.phase+1)*.02*e+s}for(let o=0;o<Di.length;o++){const r=Di[o],a=Math.sin(t*1+r.phase)*.5+.5;r.petalMat.emissiveIntensity=(.3+a*.5)*be,r.group.rotation.z=Math.sin(t*.9+r.phase)*.04*e+n*.5}for(let o=0;o<jc.length;o++){const r=jc[o];r.group.rotation.z=Math.sin(t*1.1+r.phase)*r.swayAmp*e+n,r.group.rotation.x=Math.sin(t*.8+r.phase+2)*r.swayAmp*.5*e+s}}function pf(i,t){for(let e=0;e<Qs.length;e++){const n=Qs[e],s=n.group,o=s.position.x,r=s.position.z;if(n._init||(n._init=!0,n._state="drift",n._stT=20+Math.random()*30,n._migrateAng=0,n._pulseSync=0),n._stT-=i,n._stT<=0)if(vs)n._state="display",n._stT=10+Math.random()*15;else{const h=Math.random();h<.5?(n._state="drift",n._stT=20+Math.random()*30):h<.75?(n._state="pulse",n._stT=8+Math.random()*12):(n._state="migrate",n._migrateAng=Math.random()*6.28,n._stT=15+Math.random()*20)}switch(vs&&n._state!=="display"&&(n._state="display",n._stT=10),n._state){case"drift":{n.driftAng+=i*.15;const h=8+Math.sin(t*.1+n.phase)*4,u=n.homeX+Math.cos(n.driftAng)*h,f=n.homeZ+Math.sin(n.driftAng)*h;s.position.x+=(u-o)*i*.3,s.position.z+=(f-r)*i*.3,s.position.y=n.floatY+Math.sin(t*n.wobble+n.phase)*1.5;break}case"pulse":{n.driftAng+=i*.08,s.position.x+=Math.cos(n.driftAng)*i*.3,s.position.z+=Math.sin(n.driftAng)*i*.3,s.position.y=n.floatY+Math.sin(t*n.wobble+n.phase)*1,n._pulseSync=Math.sin(t*2+Math.floor(e/2)*Math.PI)*.5+.5;break}case"migrate":{s.position.x+=Math.cos(n._migrateAng)*i*1,s.position.z+=Math.sin(n._migrateAng)*i*1,s.position.y=n.floatY+Math.sin(t*n.wobble+n.phase)*.8,Math.sqrt(s.position.x*s.position.x+s.position.z*s.position.z)>xe*.8&&(n._migrateAng+=Math.PI);break}case"display":{n.driftAng+=i*.4,s.position.x+=Math.cos(n.driftAng)*i*.8,s.position.z+=Math.sin(n.driftAng)*i*.8,s.position.y=n.floatY+Math.sin(t*2+n.phase)*2;break}}const a=Math.sin(t*1.2+n.phase)*.5+.5;let c=1,l=0;n._state==="pulse"?(c=1+n._pulseSync*1.5,l=n._pulseSync*.15):n._state==="display"&&(c=1.5+Math.sin(t*4+n.phase)*.8,l=.15),n.bellMat.emissiveIntensity=(.4+a*.8)*be*c,n.bellMat.opacity=.35+a*.25+l,s.rotation.y+=i*.2;for(let h=2;h<s.children.length;h++)s.children[h].rotation.x=Math.sin(t*2+h+n.phase)*.15,s.children[h].rotation.z=Math.sin(t*1.5+h*.7+n.phase)*.1}}function mf(i,t){const e=Te.ShiftLeft||Te.ShiftRight||co;for(let n=0;n<Bn.length;n++){const s=Bn[n],o=s.group,r=o.position.x,a=o.position.z,c=r-ot.pos.x,l=a-ot.pos.z,h=c*c+l*l,u=Math.sqrt(h);if(s._init||(s._init=!0,s._followT=0,s._scaredT=0,s._huddleTarget=-1),s.state!=="startled"&&s.state!=="following"&&s.state!=="huddle"&&u<(e?3.5:2)&&(s.state="startled",s._scaredT=.6+Math.random()*.5,s.wanderAng=Math.atan2(c,l),s.hopTimer=0),vs&&s.state!=="startled"&&s.state!=="huddle"){let d=1/0,g=-1;for(let x=0;x<Bn.length;x++){if(x===n)continue;const m=Bn[x].group.position.x-r,p=Bn[x].group.position.z-a,M=m*m+p*p;M<d&&(d=M,g=x)}g>=0&&d>1&&(s.state="huddle",s._huddleTarget=g)}switch(_s>8&&u<12&&s.state==="idle"&&Math.random()<.001&&(s.state="following",s._followT=10+Math.random()*10),s.state){case"idle":{s.idleTimer-=i,o.position.y=Math.sin(t*2+s.phase)*.02,o.rotation.y+=Math.sin(t*.5+s.phase)*i*.3,s.idleTimer<=0&&(s.state="hop",s.wanderAng+=(Math.random()-.5)*1.5,s.hopTimer=0);break}case"hop":{s.hopTimer+=i;const g=s.hopTimer/1.2;if(g>=1)s.state="idle",s.idleTimer=1.5+Math.random()*3,o.position.y=0;else{o.position.y=Math.sin(g*Math.PI)*.3,o.position.x+=Math.sin(s.wanderAng)*s.speed*i,o.position.z+=Math.cos(s.wanderAng)*s.speed*i;const x=1-Math.sin(g*Math.PI)*.15,m=1+Math.sin(g*Math.PI)*.2;o.scale.set(x,m,x),o.rotation.y=s.wanderAng}break}case"startled":{s._scaredT-=i,s.hopTimer+=i*1.5;const d=Math.min(s.hopTimer/.8,1);o.position.y=Math.sin(d*Math.PI)*.5,o.position.x+=Math.sin(s.wanderAng)*s.speed*2*i,o.position.z+=Math.cos(s.wanderAng)*s.speed*2*i,o.scale.set(.85,1.3,.85),s._scaredT<=0&&(s.state="idle",s.idleTimer=3+Math.random()*3,o.position.y=0,o.scale.set(1,1,1));break}case"following":{if(s._followT-=i,u>15||_s<3||s._followT<=0){s.state="idle",s.idleTimer=2;break}if(s.wanderAng=Math.atan2(ot.pos.x-r,ot.pos.z-a),u>3){s.hopTimer+=i;const d=s.hopTimer%1.5/1.5;o.position.y=Math.sin(d*Math.PI)*.2,o.position.x+=Math.sin(s.wanderAng)*s.speed*.4*i,o.position.z+=Math.cos(s.wanderAng)*s.speed*.4*i}else o.position.y=Math.sin(t*3+s.phase)*.03;o.rotation.y=s.wanderAng;break}case"huddle":{if(!vs){s.state="idle",s.idleTimer=2;break}const d=Bn[s._huddleTarget];if(d){const g=d.group.position.x-r,x=d.group.position.z-a,m=Math.sqrt(g*g+x*x);m>.5&&(o.position.x+=g/m*s.speed*.5*i,o.position.z+=x/m*s.speed*.5*i)}o.rotation.z=Math.sin(t*8)*.05,o.position.y=0;break}}Math.sqrt(o.position.x*o.position.x+o.position.z*o.position.z)>xe*.85&&(s.wanderAng+=Math.PI)}}function gf(i,t){const e=Te.ShiftLeft||Te.ShiftRight||co;for(let n=0;n<to.length;n++){const s=to[n],o=s.group,r=o.position.x,a=o.position.z,c=r-ot.pos.x,l=a-ot.pos.z,h=Math.sqrt(c*c+l*l),u=Math.atan2(c,l),f=e?18:12,d=e?10:Rv;s._init||(s._init=!0,s._stT=0,s._drinkTgt=null,s._zigTimer=0,s._zigDir=1),s.state!=="flee"&&s.state!=="alert"&&s.state!=="watching"&&(h<d?(s.state="flee",s.wanderAng=u,s.fleeTimer=2.5+Math.random()*2,s._zigTimer=0):h<f&&(s.state="alert",s._stT=1+Math.random()*1.5));let g=s.speed,x=!1;switch(s.state){case"walk":{if(x=!0,s.walkTimer-=i,s.walkTimer<=0){const _=Math.random();if(_<.25)s.state="pause",s.pauseTimer=2+Math.random()*3;else if(_<.4)s.state="graze",s._stT=3+Math.random()*4;else if(_<.5&&nn.length>0){s.state="drink",s._stT=8;let v=1/0;for(let b=0;b<nn.length;b++){const E=nn[b].x-r,T=nn[b].z-a,C=E*E+T*T;C<v&&(v=C,s._drinkTgt=nn[b])}}else _<.55?(s.state="rest",s._stT=5+Math.random()*5):(s.wanderAng+=(Math.random()-.5)*1.2,s.walkTimer=3+Math.random()*5)}if((r-s.homeX)*(r-s.homeX)+(a-s.homeZ)*(a-s.homeZ)>400){const _=Math.atan2(s.homeX-r,s.homeZ-a);s.wanderAng+=(_-s.wanderAng)*i*.5}break}case"pause":{s.pauseTimer-=i,s.headLook=Math.sin(t*.6)*.4,s.pauseTimer<=0&&(s.state="walk",s.walkTimer=3+Math.random()*5);break}case"graze":{s._stT-=i,s.headBob=-.5,s._stT<=0&&(s.state="walk",s.walkTimer=2+Math.random()*4,s.headBob=0);break}case"drink":{if(s._stT-=i,s._drinkTgt){const M=s._drinkTgt.x-r,_=s._drinkTgt.z-a;Math.sqrt(M*M+_*_)>2?(s.wanderAng=Math.atan2(M,_),x=!0,g=s.speed*.7):s.headBob=-.6}s._stT<=0&&(s.state="walk",s.walkTimer=3+Math.random()*4,s.headBob=0,s._drinkTgt=null);break}case"rest":{s._stT-=i,o.position.y=Math.max(-.3,o.position.y-i*.5),s._stT<=0&&(s.state="walk",s.walkTimer=2+Math.random()*3);break}case"alert":{s._stT-=i,h<d?(s.state="flee",s.wanderAng=u,s.fleeTimer=2.5+Math.random()*2):s._stT<=0&&(h<f*1.2?(s.state="watching",s._stT=3+Math.random()*3):(s.state="walk",s.walkTimer=2+Math.random()*3));break}case"watching":{s._stT-=i,x=!0,g=s.speed*.3,s.wanderAng=u,h<d?(s.state="flee",s.wanderAng=u,s.fleeTimer=2.5+Math.random()*2):(h>f*1.5||s._stT<=0)&&(s.state="walk",s.walkTimer=2+Math.random()*4);break}case"flee":{x=!0,g=s.speed*Cv,s.fleeTimer-=i,s._zigTimer-=i,s._zigTimer<=0&&(s._zigDir*=-1,s._zigTimer=.4+Math.random()*.4),s.wanderAng=u+s._zigDir*.3,(s.fleeTimer<=0||h>f*2)&&(s.state="walk",s.walkTimer=3+Math.random()*5);break}}if(x&&(o.position.x+=Math.sin(s.wanderAng)*g*i,o.position.z+=Math.cos(s.wanderAng)*g*i,s.legCycle+=i*g*3),Math.sqrt(o.position.x*o.position.x+o.position.z*o.position.z)>xe*.9&&(s.wanderAng=Math.atan2(-o.position.x,-o.position.z)),s.state!=="rest"&&o.position.y<0&&(o.position.y=Math.min(0,o.position.y+i*.5)),o.rotation.y=s.wanderAng,s.state==="alert"||s.state==="watching"){const M=u-s.wanderAng;s.headLook+=(M*.5-s.headLook)*i*3}const p=s.headBob||0;s.neckPivot.rotation.x+=(p-s.neckPivot.rotation.x)*i*3,s.neckPivot.rotation.y+=(s.headLook-s.neckPivot.rotation.y)*i*4,x&&s.state!=="graze"&&s.state!=="drink"&&(s.neckPivot.rotation.x+=Math.sin(s.legCycle*2)*.05);for(let M=0;M<s.legPivots.length;M++){const _=s.legPivots[M];if(x){const v=_.isFront?0:Math.PI,b=_.side>0?Math.PI:0,E=Math.sin(s.legCycle+v+b)*.4*(g/s.speed);_.upper.rotation.x=E,_.lower.rotation.x=Math.max(0,-E*.6)}else s.state==="rest"&&o.position.y<-.1?(_.upper.rotation.x+=(.8-_.upper.rotation.x)*i*2,_.lower.rotation.x+=(1-_.lower.rotation.x)*i*2):(_.upper.rotation.x*=.9,_.lower.rotation.x*=.9)}s.tailPivot.rotation.x=Math.sin(t*1.5+s.phase)*.15,s.state==="flee"&&(s.tailPivot.rotation.x+=.3),s.state==="alert"?s.tailPivot.rotation.z=Math.sin(t*6)*.1:s.tailPivot.rotation.z*=.9,s.mat.emissiveIntensity=(.3+Math.sin(t*.8+s.phase)*.2)*be,s.headLook*=.98}}function _f(i,t){for(let e=0;e<eo.length;e++){const n=eo[e],s=n.group,o=s.position.x,r=s.position.z;if(n._init||(n._init=!0,n._state="patrol",n._stT=0,n._attractTarget=null,n._restTree=null),n._state==="patrol"){if(Math.random()<.002){let u=1/0,f=null;for(let d=0;d<le.length;d++){const g=le[d].x-o,x=le[d].z-r,m=g*g+x*x;m<900&&m<u&&(u=m,f=le[d])}f&&(n._state="attracted",n._attractTarget=f,n._stT=6+Math.random()*8)}if(Math.random()<.001){let u=1/0,f=null;for(let d=0;d<fe.length;d++){const g=fe[d].x-o,x=fe[d].z-r,m=g*g+x*x;m<400&&m<u&&(u=m,f=fe[d])}f&&(n._state="rest",n._restTree=f,n._stT=4+Math.random()*6)}}switch(n._state){case"patrol":{n.orbitAng+=i*.4;const u=n.centerX+Math.cos(n.orbitAng)*n.orbitR,f=n.centerZ+Math.sin(n.orbitAng)*n.orbitR;s.position.x+=(u-o)*i*1.5,s.position.z+=(f-r)*i*1.5,s.position.y=n.floatY+Math.sin(t*.7+n.phase)*.8,s.rotation.y=n.orbitAng+Math.PI/2;break}case"attracted":{if(n._stT-=i,!n._attractTarget||n._stT<=0){n._state="patrol",n._attractTarget=null;break}n.orbitAng+=i*.8;const u=n._attractTarget,f=Math.max(.5,n._stT*.4),d=u.x+Math.cos(n.orbitAng)*f,g=u.z+Math.sin(n.orbitAng)*f;s.position.x+=(d-o)*i*2,s.position.z+=(g-r)*i*2,s.position.y+=(2-s.position.y)*i*.5,s.rotation.y=n.orbitAng+Math.PI/2;break}case"rest":{if(n._stT-=i,!n._restTree||n._stT<=0){n._state="patrol",n._restTree=null,n.centerX=s.position.x,n.centerZ=s.position.z;break}const u=n._restTree,f=u.x+.5-o,d=u.z+.5-r,g=Math.sqrt(f*f+d*d);g>.3&&(s.position.x+=f/g*i*2,s.position.z+=d/g*i*2),s.position.y+=(2.5-s.position.y)*i*1.5,s.rotation.y=Math.atan2(f,d);break}}const a=n._state==="rest"?.05:.4,c=Math.sin(t*n.flapSpeed+n.phase)*a;for(let u=0;u<s._wingPivots.length;u++){const f=s._wingPivots[u];f.pivot.rotation.z=c*f.side}const l=Math.sin(t*1.5+n.phase)*.5+.5,h=n._state==="attracted"?.4:0;n.wingMat.emissiveIntensity=(.5+l*.6+h)*be,n.wingMat.opacity=.45+l*.25}}function uM(i,t){const e=Te.ShiftLeft||Te.ShiftRight||co;let n=null;if(_s>5&&(ln==="SEEK"||ln==="RISING")){let s=1/0;for(let o=0;o<sn.length;o++){if(sn[o].found)continue;const r=sn[o].x-ot.pos.x,a=sn[o].z-ot.pos.z,c=r*r+a*a;c<s&&(s=c,n=sn[o])}}for(let s=0;s<Er.length;s++){const o=Er[s],r=t*.5+o.phase+s/Wu*6.28,a=e?4+s*2:1.5+s*.8,c=e?3+s:1.2+Math.sin(t*.7+o.phase)*.5;if(o.targetX=ot.pos.x+Math.cos(r)*a,o.targetY=ot.pos.y-Js+c,o.targetZ=ot.pos.z+Math.sin(r)*a,s===0&&n){const d=Math.min((_s-5)/3,.6);o.targetX+=(n.x-ot.pos.x)*d,o.targetZ+=(n.z-ot.pos.z)*d,o.targetY+=.5}const l=e?.8:2.5;o.velX+=(o.targetX-o.group.position.x)*l*i,o.velY+=(o.targetY-o.group.position.y)*l*i,o.velZ+=(o.targetZ-o.group.position.z)*l*i,o.velX*=.92,o.velY*=.92,o.velZ*=.92,o.group.position.x+=o.velX*i*4,o.group.position.y+=o.velY*i*4,o.group.position.z+=o.velZ*i*4;const h=Math.sin(t*2+o.phase)*.5+.5;o.glowMat.opacity=.3+h*.4,o.hazeMat.opacity=.08+h*.12;const u=o.group.children[3],f=t*3+o.phase;u.position.set(Math.cos(f)*.18,Math.sin(f*1.5)*.06,Math.sin(f)*.18)}}function fM(i,t){for(let e=0;e<br.length;e++){const n=br[e],s=n.x-ot.pos.x,o=n.z-ot.pos.z,a=s*s+o*o<(Pc+.5)*(Pc+.5),c=a?1:0;n.glowIntensity+=(c-n.glowIntensity)*i*3,n.discMat.opacity=n.glowIntensity*.25*(.6+Math.sin(t*2+n.phase)*.4),n.mushMat.emissiveIntensity=(.2+n.glowIntensity*.8)*be,a&&ot.vel.y>0&&ot.vel.y<=_r+.5&&(ot.vel.y=_r+bv,n.glowIntensity=1.5)}}function dM(i,t){for(let e=0;e<An.length;e++){const n=An[e];if(n.popped){if(n.popTimer-=i,n.popTimer<=0){n.popped=!1,n.group.visible=!0;const h=w()*6.28,u=8+w()*xe*.5;n.homeX=Math.cos(h)*u,n.homeZ=Math.sin(h)*u,n.floatY=.5+w()*4,n.group.position.set(n.homeX,n.floatY,n.homeZ)}continue}n.driftAng+=i*.2;const s=n.homeX+Math.sin(n.driftAng)*3,o=n.homeZ+Math.cos(n.driftAng*.7)*3;n.group.position.x+=(s-n.group.position.x)*i*.5,n.group.position.z+=(o-n.group.position.z)*i*.5,n.group.position.y=n.floatY+Math.sin(t*.6+n.phase)*n.bobAmp;const r=(t*.1+n.phase)%1;n.shellMat.color.setRGB(Math.sin(r*6.28)*.15+.7,Math.sin(r*6.28+2.09)*.15+.7,Math.sin(r*6.28+4.19)*.15+.8),n.shellMat.opacity=.18+Math.sin(t*1.5+n.phase)*.08;const a=n.group.position.x-ot.pos.x,c=n.group.position.y-ot.pos.y,l=n.group.position.z-ot.pos.z;a*a+c*c+l*l<kh*kh*n.sc*n.sc&&(n.popped=!0,n.popTimer=8+Math.random()*8,n.group.visible=!1,kx(n.group.position.x,n.group.position.y,n.group.position.z,6))}}function pM(i,t){for(let e=0;e<nn.length;e++){const n=nn[e];for(let o=0;o<n.pads.length;o++)n.pads[o].mesh.position.y=.05+Math.sin(t*.8+n.pads[o].phase)*.015;n.waterMat.emissiveIntensity=(.15+Math.sin(t*1+n.phase)*.1)*be;const s=Math.sin(t*1.2+n.phase)*.5+.5;n.flMat.emissiveIntensity=(.3+s*.5)*be}}function mM(i,t){if(Na-=i,Na<=0){Na=.5;for(let s=0;s<le.length;s++){const o=le[s],r=o.x-ot.pos.x,a=o.z-ot.pos.z;if(r*r+a*a<36){pi={x:o.x,z:o.z},Ds=0;break}}}if(!pi)return;if(Ds+=i*12,Ds>30){pi=null,Ds=0;return}const e=Ds,n=4;for(let s=0;s<Ke.length;s++){const o=Ke[s],r=o.x-pi.x,a=o.z-pi.z,c=Math.sqrt(r*r+a*a);if(Math.abs(c-e)<n){const l=1-Math.abs(c-e)/n;o.capMat.emissiveIntensity=Math.max(o.capMat.emissiveIntensity,(o.base+l*2)*be)}}for(let s=0;s<Di.length;s++){const o=Di[s],r=o.group.position.x-pi.x,a=o.group.position.z-pi.z,c=Math.sqrt(r*r+a*a);if(Math.abs(c-e)<n){const l=1-Math.abs(c-e)/n;o.petalMat.emissiveIntensity=Math.max(o.petalMat.emissiveIntensity,(.3+l*1.5)*be)}}}function gM(i,t){const e=ot.pos.x,n=ot.pos.z;for(let s=0;s<Di.length;s++){const o=Di[s],r=o.group.position.x,a=o.group.position.z,c=r-e,l=a-n,u=c*c+l*l<16?1:0;o._react=o._react||0,o._react+=(u-o._react)*i*(u>0?4:1.5);const f=1+o._react*.15;o.group.scale.set(f,1+o._react*.05,f),o.petalMat.emissiveIntensity+=o._react*.6*be}for(let s=0;s<Ke.length;s++){const o=Ke[s],r=o.x-e,a=o.z-n,l=r*r+a*a<4?1:0;o._touch=o._touch||0,o._touch+=(l-o._touch)*i*(l>0?6:1.5),o.capMat.emissiveIntensity+=o._touch*1.5*be;const h=1+o._touch*.08;o.group.scale.set(h,1+o._touch*.04,h)}for(let s=0;s<no.length;s++){const o=no[s],r=o.cx-e,a=o.cz-n,c=r*r+a*a;if(c<25&&c>.01){const l=Math.sqrt(c),h=(1-l/5)*.08;o.mesh.rotation.z+=r/l*h,o.mesh.rotation.x+=a/l*h}}for(let s=0;s<io.length;s++){const o=io[s],r=o.group.position.x,a=o.group.position.z,c=r-e,l=a-n,u=c*c+l*l<2.25?.65:1;o._curl=o._curl===void 0?1:o._curl,o._curl+=(u-o._curl)*i*(u<1?4:1.5),o.group.scale.set(1+(1-o._curl)*.3,o._curl,1+(1-o._curl)*.3)}for(let s=0;s<le.length;s++){const o=le[s],r=o.x-e,a=o.z-n;if(r*r+a*a<36)for(let c=0;c<le.length;c++){if(s===c)continue;const l=le[c],h=o.x-l.x,u=o.z-l.z,f=h*h+u*u;if(f<400){const d=(1-Math.sqrt(f)/20)*.8;l.mat.emissiveIntensity+=d*be,l.light&&(l.light.intensity+=d*.3*be)}}}}let Zo="EXPLORE",Fa=0,Oa=0;function _M(i,t){let e=!1;for(let r=0;r<le.length;r++){const a=le[r].x-ot.pos.x,c=le[r].z-ot.pos.z;if(a*a+c*c<64){e=!0;break}}Zo=e?"NEAR_CRYSTAL":"EXPLORE",Fa+=i;const n=Zo==="NEAR_CRYSTAL"?.08:.25,s=Zo==="NEAR_CRYSTAL"?120:100;if(Fa>n&&(Fa=0,af(0,t)<s))if(Zo==="NEAR_CRYSTAL")for(let a=0;a<le.length;a++){const c=le[a].x-ot.pos.x,l=le[a].z-ot.pos.z;c*c+l*l<100&&Bc(le[a].x,1,le[a].z,3+Math.random()*4)}else{const a=Math.random()*6.28,c=5+Math.random()*25;Bc(ot.pos.x+Math.cos(a)*c,0,ot.pos.z+Math.sin(a)*c,6+Math.random()*10)}if(Oa+=i,Oa>.2){Oa=0;for(let r=0;r<Ke.length;r++){const a=Ke[r],c=a.x-ot.pos.x,l=a.z-ot.pos.z;c*c+l*l<200&&Math.random()<.15&&Ix(a.x,.6*a.group.scale.x,a.z)}}for(let r=0;r<Ke.length;r++){const a=Ke[r],c=Math.sin(t*a.speed+a.phase)*.5+.5;a.capMat.emissiveIntensity=a.base*(.5+c*.8)*be}for(let r=0;r<le.length;r++){const a=le[r],c=Math.sin(t*.6+a.phase)*.5+.5;a.mat.emissiveIntensity=(1+c*1.5)*be,a.group.children[0].rotation.y+=i*.15,a.light&&(a.light.intensity=(.3+c*.4)*be)}const o=[];for(let r=0;r<le.length;r++){const a=le[r],c=a.x-ot.pos.x,l=a.z-ot.pos.z;o.push({idx:r,dist:c*c+l*l})}o.sort((r,a)=>r.dist-a.dist);for(let r=0;r<_i.length;r++)if(r<o.length&&o[r].dist<2500){const a=le[o[r].idx],c=Math.sin(t*.6+a.phase)*.5+.5;_i[r].position.set(a.x,1.5,a.z),_i[r].intensity=(1.5+c*2)*be,_i[r].distance=16,_i[r].color.setHex(k.crystal)}else _i[r].intensity=0;pf(i,t),mf(i,t),gf(i,t),_f(i,t),Qu(i,t),df(i,t),uM(i,t),ux(El,i,t,ot.pos),fM(i,t),dM(i,t),pM(i,t),cf(i,t,ot.pos),lx(i,t),zx(i),Gx(i),mM(i),gM(i),Vx(i,t)}let Ue=0,Qc=!1;function vM(){Qc||(Qc=!0,Gv(!0),lM())}function vf(){requestAnimationFrame(vf);const i=Math.min(Xu.getDelta(),.1);Ue+=i,Zx(i);const t=tM(i,Ue,ot.pos);if(nM(i,ot.pos,t,wr,Sl),kn>0&&(_l.intensity+=kn*2.5,xt.background.r=Math.min(1,xt.background.r+kn*.3),xt.background.g=Math.min(1,xt.background.g+kn*.3),xt.background.b=Math.min(1,xt.background.b+kn*.4)),!Qc){He.position.set(0,Js,0),He.rotation.order="YXZ",He.rotation.y+=i*.08,He.rotation.x=0;for(let e=0;e<Ke.length;e++){const n=Ke[e],s=Math.sin(Ue*n.speed+n.phase)*.5+.5;n.capMat.emissiveIntensity=n.base*(.5+s*.8)*be}for(let e=0;e<le.length;e++){const n=le[e];n.mat.emissiveIntensity=(1+Math.sin(Ue*.6+n.phase)*.5*1.5+.75)*be}pf(i,Ue),mf(i,Ue),gf(i,Ue),_f(i,Ue),Qu(i,Ue),df(i,Ue),cf(i,Ue,ot.pos);for(let e=0;e<An.length;e++)An[e].popped||(An[e].group.position.y=An[e].floatY+Math.sin(Ue*.6+An[e].phase)*An[e].bobAmp);for(let e=0;e<nn.length;e++)for(let n=0;n<nn[e].pads.length;n++)nn[e].pads[n].mesh.position.y=.05+Math.sin(Ue*.8+nn[e].pads[n].phase)*.015;for(let e=0;e<sn.length;e++){const n=sn[e],s=Math.sin(Ue*1.5+n.phase)*.5+.5;n.group.position.y=1+Math.sin(Ue*.8+n.phase)*.3,n.glowMat.opacity=.3+s*.4}Vh();return}Qv(i),_M(i,Ue),af(i,Ue),Dx(i),He.position.copy(ot.pos),He.position.y+=tf,He.rotation.order="YXZ",He.rotation.y=js,He.rotation.x=Ci,rM(i,ot.pos),Vh()}try{Zv(),$v(),qx({scene:xt,moon:hn,moon2:un,hemiLight:_l,playerLight:vl,skyGroup:yr}),hM(),Jv(fe,ff),jv(Ox),Qx(),eM(),Px(150),Lx(60),Bv(),Ux(wv),Fx(20),ax(40),Bx(30),bx(),Rx(),Cx(),oM(),aM(),Hx({orbs:sn,obeliskGroup:wx(),obeliskMat:Sx(),obeliskGlowMat:Ex(),moatMesh:Tx(),moatMat:Ax(),rainbowArcs:zc,player:ot,makeLaser:Wx,orbHudEl:cM(),deers:to,puffs:Bn,jellies:Qs,moths:eo}),kv(vM);for(let i=0;i<50;i++){const t=Math.random()*6.28,e=3+Math.random()*xe*.7;Bc(Math.cos(t)*e,0,Math.sin(t)*e,8+Math.random()*12)}console.log("✓ Init: trees="+fe.length+" mush="+Ke.length+" crystals="+le.length+" orbs="+sn.length+" creatures="+(Qs.length+Bn.length+to.length+eo.length)+" wisps="+Er.length+" dandelions="+El.length+" fairyRings="+br.length+" bubbles="+An.length+" ponds="+nn.length+" scene="+xt.children.length),vf()}catch(i){console.error("INIT FAILED:",i),document.body.innerHTML='<div style="color:red;padding:30px;font-family:monospace"><h2>Init Failed</h2><pre>'+(i.stack||i.message)+"</pre></div>"}
