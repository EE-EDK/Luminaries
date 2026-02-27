(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xh="172",bp=0,Jh=1,Tp=2,If=1,Lf=2,fi=3,Oi=0,rn=1,Ot=2,_i=0,Ys=1,Bi=2,Qh=3,tu=4,Ep=5,os=100,Ap=101,Rp=102,Cp=103,Pp=104,Ip=200,Lp=201,Dp=202,Up=203,Zc=204,$c=205,Np=206,Fp=207,zp=208,Op=209,Bp=210,kp=211,Gp=212,Hp=213,Vp=214,jc=0,Kc=1,Jc=2,no=3,Qc=4,tl=5,el=6,nl=7,Df=0,Wp=1,Xp=2,zi=0,Yp=1,qp=2,Zp=3,Uf=4,$p=5,jp=6,Kp=7,Nf=300,io=301,so=302,il=303,sl=304,Da=306,la=1e3,as=1001,ol=1002,An=1003,Jp=1004,hr=1005,ti=1006,Ha=1007,cs=1008,wi=1009,Ff=1010,zf=1011,$o=1012,_h=1013,ps=1014,ei=1015,vi=1016,vh=1017,Mh=1018,oo=1020,Of=35902,Bf=1021,kf=1022,Hn=1023,Gf=1024,Hf=1025,qs=1026,ro=1027,yh=1028,wh=1029,Vf=1030,Sh=1031,bh=1033,$r=33776,jr=33777,Kr=33778,Jr=33779,rl=35840,al=35841,cl=35842,ll=35843,hl=36196,ul=37492,fl=37496,dl=37808,pl=37809,ml=37810,gl=37811,xl=37812,_l=37813,vl=37814,Ml=37815,yl=37816,wl=37817,Sl=37818,bl=37819,Tl=37820,El=37821,Qr=36492,Al=36494,Rl=36495,Wf=36283,Cl=36284,Pl=36285,Il=36286,Qp=3200,t0=3201,Xf=0,e0=1,Ui="",on="srgb",ao="srgb-linear",ha="linear",fe="srgb",Ts=7680,eu=519,n0=512,i0=513,s0=514,Yf=515,o0=516,r0=517,a0=518,c0=519,nu=35044,Ge=35048,iu="300 es",gi=2e3,ua=2001;class mo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Va=Math.PI/180,Ll=180/Math.PI;function go(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[s&255]+Ve[s>>8&255]+Ve[s>>16&255]+Ve[s>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Zt(s,t,e){return Math.max(t,Math.min(e,s))}function l0(s,t){return(s%t+t)%t}function Wa(s,t,e){return(1-e)*s+e*t}function vo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function cn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,i,o,r,a,c,l){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l)}set(t,e,n,i,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],M=i[0],p=i[3],m=i[6],y=i[1],x=i[4],_=i[7],A=i[2],T=i[5],S=i[8];return o[0]=r*M+a*y+c*A,o[3]=r*p+a*x+c*T,o[6]=r*m+a*_+c*S,o[1]=l*M+h*y+f*A,o[4]=l*p+h*x+f*T,o[7]=l*m+h*_+f*S,o[2]=u*M+d*y+g*A,o[5]=u*p+d*x+g*T,o[8]=u*m+d*_+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+i*o*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*r-a*l,u=a*c-h*o,d=l*o-r*c,g=e*f+n*u+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=f*M,t[1]=(i*l-h*n)*M,t[2]=(a*n-i*r)*M,t[3]=u*M,t[4]=(h*e-i*c)*M,t[5]=(i*o-a*e)*M,t[6]=d*M,t[7]=(n*c-l*e)*M,t[8]=(r*e-n*o)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xa.makeScale(t,e)),this}rotate(t){return this.premultiply(Xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new Vt;function qf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function fa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function h0(){const s=fa("canvas");return s.style.display="block",s}const su={};function Gs(s){s in su||(su[s]=!0,console.warn(s))}function u0(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function f0(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function d0(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ou=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ru=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function p0(){const s={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(i,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===fe&&(i.r=Mi(i.r),i.g=Mi(i.g),i.b=Mi(i.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===fe&&(i.r=Zs(i.r),i.g=Zs(i.g),i.b=Zs(i.b))),i},fromWorkingColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},toWorkingColorSpace:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ui?ha:this.spaces[i].transfer},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,r){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ao]:{primaries:t,whitePoint:n,transfer:ha,toXYZ:ou,fromXYZ:ru,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:ou,fromXYZ:ru,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),s}const oe=p0();function Mi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Es;class m0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Es===void 0&&(Es=fa("canvas")),Es.width=t.width,Es.height=t.height;const n=Es.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=Mi(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let g0=0;class Zf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=go(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Ya(i[r].image)):o.push(Ya(i[r]))}else o=Ya(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Ya(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?m0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let x0=0;class qe extends mo{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=as,i=as,o=ti,r=cs,a=Hn,c=wi,l=qe.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=go(),this.name="",this.source=new Zf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case la:t.x=t.x-Math.floor(t.x);break;case as:t.x=t.x<0?0:1;break;case ol:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case la:t.y=t.y-Math.floor(t.y);break;case as:t.y=t.y<0?0:1;break;case ol:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Nf;qe.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,i=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],M=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+M)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,_=(d+1)/2,A=(m+1)/2,T=(h+u)/4,S=(f+M)/4,E=(g+p)/4;return x>_&&x>A?x<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(x),i=T/n,o=S/n):_>A?_<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(_),n=T/i,o=E/i):A<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(A),n=S/o,i=E/o),this.set(n,i,o,e),this}let y=Math.sqrt((p-g)*(p-g)+(f-M)*(f-M)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-M)/y,this.z=(u-h)/y,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _0 extends mo{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new qe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Zf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends _0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class $f extends qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=An,this.minFilter=An,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class v0 extends qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=An,this.minFilter=An,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let c=n[i+0],l=n[i+1],h=n[i+2],f=n[i+3];const u=o[r+0],d=o[r+1],g=o[r+2],M=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=M;return}if(f!==M||c!==u||l!==d||h!==g){let p=1-a;const m=c*u+l*d+h*g+f*M,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const A=Math.sqrt(x),T=Math.atan2(A,m*y);p=Math.sin(p*T)/A,a=Math.sin(a*T)/A}const _=a*y;if(c=c*p+u*_,l=l*p+d*_,h=h*p+g*_,f=f*p+M*_,p===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=A,l*=A,h*=A,f*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],f=o[r],u=o[r+1],d=o[r+2],g=o[r+3];return t[e]=a*g+h*f+c*d-l*u,t[e+1]=c*g+h*u+l*f-a*d,t[e+2]=l*g+h*d+a*u-c*f,t[e+3]=h*g-a*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),f=a(o/2),u=c(n/2),d=c(i/2),g=c(o/2);switch(r){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(o-l)*d,this._z=(r-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(o+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(o-l)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(r-i)/d,this._x=(o+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+i*l-o*c,this._y=i*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-i*a,this._w=r*h-n*a-i*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=r*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=o*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(au.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(au.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*i-a*n),h=2*(a*e-o*i),f=2*(o*n-r*e);return this.x=e+c*l+r*f-a*h,this.y=n+c*h+a*l-o*f,this.z=i+c*f+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-o*a,this.y=o*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qa.copy(this).projectOnVector(t),this.sub(qa)}reflect(t){return this.sub(qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qa=new U,au=new nr;class _s{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,On):On.fromBufferAttribute(o,r),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mo),fr.subVectors(this.max,Mo),As.subVectors(t.a,Mo),Rs.subVectors(t.b,Mo),Cs.subVectors(t.c,Mo),Ei.subVectors(Rs,As),Ai.subVectors(Cs,Rs),Hi.subVectors(As,Cs);let e=[0,-Ei.z,Ei.y,0,-Ai.z,Ai.y,0,-Hi.z,Hi.y,Ei.z,0,-Ei.x,Ai.z,0,-Ai.x,Hi.z,0,-Hi.x,-Ei.y,Ei.x,0,-Ai.y,Ai.x,0,-Hi.y,Hi.x,0];return!Za(e,As,Rs,Cs,fr)||(e=[1,0,0,0,1,0,0,0,1],!Za(e,As,Rs,Cs,fr))?!1:(dr.crossVectors(Ei,Ai),e=[dr.x,dr.y,dr.z],Za(e,As,Rs,Cs,fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ai=[new U,new U,new U,new U,new U,new U,new U,new U],On=new U,ur=new _s,As=new U,Rs=new U,Cs=new U,Ei=new U,Ai=new U,Hi=new U,Mo=new U,fr=new U,dr=new U,Vi=new U;function Za(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){Vi.fromArray(s,o);const a=i.x*Math.abs(Vi.x)+i.y*Math.abs(Vi.y)+i.z*Math.abs(Vi.z),c=t.dot(Vi),l=e.dot(Vi),h=n.dot(Vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const M0=new _s,yo=new U,$a=new U;class vs{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):M0.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yo.subVectors(t,this.center);const e=yo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(yo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yo.copy(t.center).add($a)),this.expandByPoint(yo.copy(t.center).sub($a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new U,ja=new U,pr=new U,Ri=new U,Ka=new U,mr=new U,Ja=new U;class Th{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ja.copy(t).add(e).multiplyScalar(.5),pr.copy(e).sub(t).normalize(),Ri.copy(this.origin).sub(ja);const o=t.distanceTo(e)*.5,r=-this.direction.dot(pr),a=Ri.dot(this.direction),c=-Ri.dot(pr),l=Ri.lengthSq(),h=Math.abs(1-r*r);let f,u,d,g;if(h>0)if(f=r*c-a,u=r*a-c,g=o*h,f>=0)if(u>=-g)if(u<=g){const M=1/h;f*=M,u*=M,d=f*(f+r*u+2*a)+u*(r*f+u+2*c)+l}else u=o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*c)+l;else u=-o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-r*o+a)),u=f>0?-o:Math.min(Math.max(-o,-c),o),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-o,-c),o),d=u*(u+2*c)+l):(f=Math.max(0,-(r*o+a)),u=f>0?o:Math.min(Math.max(-o,-c),o),d=-f*f+u*(u+2*c)+l);else u=r>0?-o:o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ja).addScaledVector(pr,u),d}intersectSphere(t,e){ci.subVectors(t.center,this.origin);const n=ci.dot(this.direction),i=ci.dot(ci)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),f>=0?(a=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,n,i,o){Ka.subVectors(e,t),mr.subVectors(n,t),Ja.crossVectors(Ka,mr);let r=this.direction.dot(Ja),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Ri.subVectors(this.origin,t);const c=a*this.direction.dot(mr.crossVectors(Ri,mr));if(c<0)return null;const l=a*this.direction.dot(Ka.cross(Ri));if(l<0||c+l>r)return null;const h=-a*Ri.dot(Ja);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,i,o,r,a,c,l,h,f,u,d,g,M,p){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l,h,f,u,d,g,M,p)}set(t,e,n,i,o,r,a,c,l,h,f,u,d,g,M,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=o,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=M,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ps.setFromMatrixColumn(t,0).length(),o=1/Ps.setFromMatrixColumn(t,1).length(),r=1/Ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const u=r*h,d=r*f,g=a*h,M=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=u-M*l,e[9]=-a*c,e[2]=M-u*l,e[6]=g+d*l,e[10]=r*c}else if(t.order==="YXZ"){const u=c*h,d=c*f,g=l*h,M=l*f;e[0]=u+M*a,e[4]=g*a-d,e[8]=r*l,e[1]=r*f,e[5]=r*h,e[9]=-a,e[2]=d*a-g,e[6]=M+u*a,e[10]=r*c}else if(t.order==="ZXY"){const u=c*h,d=c*f,g=l*h,M=l*f;e[0]=u-M*a,e[4]=-r*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=r*h,e[9]=M-u*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const u=r*h,d=r*f,g=a*h,M=a*f;e[0]=c*h,e[4]=g*l-d,e[8]=u*l+M,e[1]=c*f,e[5]=M*l+u,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const u=r*c,d=r*l,g=a*c,M=a*l;e[0]=c*h,e[4]=M-u*f,e[8]=g*f+d,e[1]=f,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*f+g,e[10]=u-M*f}else if(t.order==="XZY"){const u=r*c,d=r*l,g=a*c,M=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+M,e[5]=r*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=M*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(y0,t,w0)}lookAt(t,e,n){const i=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ci.crossVectors(n,yn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ci.crossVectors(n,yn)),Ci.normalize(),gr.crossVectors(yn,Ci),i[0]=Ci.x,i[4]=gr.x,i[8]=yn.x,i[1]=Ci.y,i[5]=gr.y,i[9]=yn.y,i[2]=Ci.z,i[6]=gr.z,i[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],M=n[6],p=n[10],m=n[14],y=n[3],x=n[7],_=n[11],A=n[15],T=i[0],S=i[4],E=i[8],w=i[12],v=i[1],R=i[5],N=i[9],D=i[13],z=i[2],H=i[6],V=i[10],Z=i[14],W=i[3],lt=i[7],dt=i[11],bt=i[15];return o[0]=r*T+a*v+c*z+l*W,o[4]=r*S+a*R+c*H+l*lt,o[8]=r*E+a*N+c*V+l*dt,o[12]=r*w+a*D+c*Z+l*bt,o[1]=h*T+f*v+u*z+d*W,o[5]=h*S+f*R+u*H+d*lt,o[9]=h*E+f*N+u*V+d*dt,o[13]=h*w+f*D+u*Z+d*bt,o[2]=g*T+M*v+p*z+m*W,o[6]=g*S+M*R+p*H+m*lt,o[10]=g*E+M*N+p*V+m*dt,o[14]=g*w+M*D+p*Z+m*bt,o[3]=y*T+x*v+_*z+A*W,o[7]=y*S+x*R+_*H+A*lt,o[11]=y*E+x*N+_*V+A*dt,o[15]=y*w+x*D+_*Z+A*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],M=t[7],p=t[11],m=t[15];return g*(+o*c*f-i*l*f-o*a*u+n*l*u+i*a*d-n*c*d)+M*(+e*c*d-e*l*u+o*r*u-i*r*d+i*l*h-o*c*h)+p*(+e*l*f-e*a*d-o*r*f+n*r*d+o*a*h-n*l*h)+m*(-i*a*h-e*c*f+e*a*u+i*r*f-n*r*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],M=t[13],p=t[14],m=t[15],y=f*p*l-M*u*l+M*c*d-a*p*d-f*c*m+a*u*m,x=g*u*l-h*p*l-g*c*d+r*p*d+h*c*m-r*u*m,_=h*M*l-g*f*l+g*a*d-r*M*d-h*a*m+r*f*m,A=g*f*c-h*M*c-g*a*u+r*M*u+h*a*p-r*f*p,T=e*y+n*x+i*_+o*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/T;return t[0]=y*S,t[1]=(M*u*o-f*p*o-M*i*d+n*p*d+f*i*m-n*u*m)*S,t[2]=(a*p*o-M*c*o+M*i*l-n*p*l-a*i*m+n*c*m)*S,t[3]=(f*c*o-a*u*o-f*i*l+n*u*l+a*i*d-n*c*d)*S,t[4]=x*S,t[5]=(h*p*o-g*u*o+g*i*d-e*p*d-h*i*m+e*u*m)*S,t[6]=(g*c*o-r*p*o-g*i*l+e*p*l+r*i*m-e*c*m)*S,t[7]=(r*u*o-h*c*o+h*i*l-e*u*l-r*i*d+e*c*d)*S,t[8]=_*S,t[9]=(g*f*o-h*M*o-g*n*d+e*M*d+h*n*m-e*f*m)*S,t[10]=(r*M*o-g*a*o+g*n*l-e*M*l-r*n*m+e*a*m)*S,t[11]=(h*a*o-r*f*o-h*n*l+e*f*l+r*n*d-e*a*d)*S,t[12]=A*S,t[13]=(h*M*i-g*f*i+g*n*u-e*M*u-h*n*p+e*f*p)*S,t[14]=(g*a*i-r*M*i-g*n*c+e*M*c+r*n*p-e*a*p)*S,t[15]=(r*f*i-h*a*i+h*n*c-e*f*c-r*n*u+e*a*u)*S,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*r,0,l*c-i*a,h*c+i*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,f=a+a,u=o*l,d=o*h,g=o*f,M=r*h,p=r*f,m=a*f,y=c*l,x=c*h,_=c*f,A=n.x,T=n.y,S=n.z;return i[0]=(1-(M+m))*A,i[1]=(d+_)*A,i[2]=(g-x)*A,i[3]=0,i[4]=(d-_)*T,i[5]=(1-(u+m))*T,i[6]=(p+y)*T,i[7]=0,i[8]=(g+x)*S,i[9]=(p-y)*S,i[10]=(1-(u+M))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=Ps.set(i[0],i[1],i[2]).length();const r=Ps.set(i[4],i[5],i[6]).length(),a=Ps.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],Bn.copy(this);const l=1/o,h=1/r,f=1/a;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=f,Bn.elements[9]*=f,Bn.elements[10]*=f,e.setFromRotationMatrix(Bn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=gi){const c=this.elements,l=2*o/(e-t),h=2*o/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i);let d,g;if(a===gi)d=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===ua)d=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=gi){const c=this.elements,l=1/(e-t),h=1/(n-i),f=1/(r-o),u=(e+t)*l,d=(n+i)*h;let g,M;if(a===gi)g=(r+o)*f,M=-2*f;else if(a===ua)g=o*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=M,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ps=new U,Bn=new ue,y0=new U(0,0,0),w0=new U(1,1,1),Ci=new U,gr=new U,yn=new U,cu=new ue,lu=new nr;class ii{constructor(t=0,e=0,n=0,i=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],c=i[1],l=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Zt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lu.setFromEuler(this),this.setFromQuaternion(lu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class jf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let S0=0;const hu=new U,Is=new nr,li=new ue,xr=new U,wo=new U,b0=new U,T0=new nr,uu=new U(1,0,0),fu=new U(0,1,0),du=new U(0,0,1),pu={type:"added"},E0={type:"removed"},Ls={type:"childadded",child:null},Qa={type:"childremoved",child:null};class ge extends mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new U,e=new ii,n=new nr,i=new U(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new Vt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.multiply(Is),this}rotateOnWorldAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.premultiply(Is),this}rotateX(t){return this.rotateOnAxis(uu,t)}rotateY(t){return this.rotateOnAxis(fu,t)}rotateZ(t){return this.rotateOnAxis(du,t)}translateOnAxis(t,e){return hu.copy(t).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uu,t)}translateY(t){return this.translateOnAxis(fu,t)}translateZ(t){return this.translateOnAxis(du,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xr.copy(t):xr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(wo,xr,this.up):li.lookAt(xr,wo,this.up),this.quaternion.setFromRotationMatrix(li),i&&(li.extractRotation(i.matrixWorld),Is.setFromRotationMatrix(li),this.quaternion.premultiply(Is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pu),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(E0),Qa.child=t,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pu),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,t,b0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,T0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];o(t.shapes,f)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),f=r(t.shapes),u=r(t.skeletons),d=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DEFAULT_UP=new U(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new U,hi=new U,tc=new U,ui=new U,Ds=new U,Us=new U,mu=new U,ec=new U,nc=new U,ic=new U,sc=new de,oc=new de,rc=new de;class Gn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),kn.subVectors(t,e),i.cross(kn);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){kn.subVectors(i,e),hi.subVectors(n,e),tc.subVectors(t,e);const r=kn.dot(kn),a=kn.dot(hi),c=kn.dot(tc),l=hi.dot(hi),h=hi.dot(tc),f=r*l-a*a;if(f===0)return o.set(0,0,0),null;const u=1/f,d=(l*c-a*h)*u,g=(r*h-a*c)*u;return o.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,e,n,i,o,r,a,c){return this.getBarycoord(t,e,n,i,ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,ui.x),c.addScaledVector(r,ui.y),c.addScaledVector(a,ui.z),c)}static getInterpolatedAttribute(t,e,n,i,o,r){return sc.setScalar(0),oc.setScalar(0),rc.setScalar(0),sc.fromBufferAttribute(t,e),oc.fromBufferAttribute(t,n),rc.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(sc,o.x),r.addScaledVector(oc,o.y),r.addScaledVector(rc,o.z),r}static isFrontFacing(t,e,n,i){return kn.subVectors(n,e),hi.subVectors(t,e),kn.cross(hi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),kn.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return Gn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return Gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;Ds.subVectors(i,n),Us.subVectors(o,n),ec.subVectors(t,n);const c=Ds.dot(ec),l=Us.dot(ec);if(c<=0&&l<=0)return e.copy(n);nc.subVectors(t,i);const h=Ds.dot(nc),f=Us.dot(nc);if(h>=0&&f<=h)return e.copy(i);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(Ds,r);ic.subVectors(t,o);const d=Ds.dot(ic),g=Us.dot(ic);if(g>=0&&d<=g)return e.copy(o);const M=d*l-c*g;if(M<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Us,a);const p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return mu.subVectors(o,i),a=(f-h)/(f-h+(d-g)),e.copy(i).addScaledVector(mu,a);const m=1/(p+M+u);return r=M*m,a=u*m,e.copy(n).addScaledVector(Ds,r).addScaledVector(Us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},_r={h:0,s:0,l:0};function ac(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=l0(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=ac(r,o,t+1/3),this.g=ac(r,o,t),this.b=ac(r,o,t-1/3)}return oe.toWorkingColorSpace(this,i),this}setStyle(t,e=on){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){const n=Kf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return oe.fromWorkingColorSpace(We.copy(this),t),Math.round(Zt(We.r*255,0,255))*65536+Math.round(Zt(We.g*255,0,255))*256+Math.round(Zt(We.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(We.copy(this),e);const n=We.r,i=We.g,o=We.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const f=r-a;switch(l=h<=.5?f/(r+a):f/(2-r-a),r){case n:c=(i-o)/f+(i<o?6:0);break;case i:c=(o-n)/f+2;break;case o:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=on){oe.fromWorkingColorSpace(We.copy(this),t);const e=We.r,n=We.g,i=We.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(_r);const n=Wa(Pi.h,_r.h,e),i=Wa(Pi.s,_r.s,e),o=Wa(Pi.l,_r.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new rt;rt.NAMES=Kf;let A0=0;class Ms extends mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=go(),this.name="",this.type="Material",this.blending=Ys,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=$c,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==Oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zc&&(n.blendSrc=this.blendSrc),this.blendDst!==$c&&(n.blendDst=this.blendDst),this.blendEquation!==os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $ extends Ms{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Df,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new U,vr=new ut;class _n{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nu,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vo(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vo(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vo(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),i=cn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),i=cn(i,this.array),o=cn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nu&&(t.usage=this.usage),t}}class Jf extends _n{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Qf extends _n{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Wt extends _n{constructor(t,e,n){super(new Float32Array(t),e,n)}}let R0=0;const In=new ue,cc=new ge,Ns=new U,wn=new _s,So=new _s,Ue=new U;class be extends mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qf(t)?Qf:Jf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Vt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,n){return In.makeTranslation(t,e,n),this.applyMatrix4(In),this}scale(t,e,n){return In.makeScale(t,e,n),this.applyMatrix4(In),this}lookAt(t){return cc.lookAt(t),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Wt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];wn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];So.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(wn.min,So.min),wn.expandByPoint(Ue),Ue.addVectors(wn.max,So.max),wn.expandByPoint(Ue)):(wn.expandByPoint(So.min),wn.expandByPoint(So.max))}wn.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)Ue.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Ue));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ue.fromBufferAttribute(a,l),c&&(Ns.fromBufferAttribute(t,l),Ue.add(Ns)),i=Math.max(i,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let E=0;E<n.count;E++)a[E]=new U,c[E]=new U;const l=new U,h=new U,f=new U,u=new ut,d=new ut,g=new ut,M=new U,p=new U;function m(E,w,v){l.fromBufferAttribute(n,E),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,v),u.fromBufferAttribute(o,E),d.fromBufferAttribute(o,w),g.fromBufferAttribute(o,v),h.sub(l),f.sub(l),d.sub(u),g.sub(u);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(R),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(R),a[E].add(M),a[w].add(M),a[v].add(M),c[E].add(p),c[w].add(p),c[v].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let E=0,w=y.length;E<w;++E){const v=y[E],R=v.start,N=v.count;for(let D=R,z=R+N;D<z;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const x=new U,_=new U,A=new U,T=new U;function S(E){A.fromBufferAttribute(i,E),T.copy(A);const w=a[E];x.copy(w),x.sub(A.multiplyScalar(A.dot(w))).normalize(),_.crossVectors(T,w);const R=_.dot(c[E])<0?-1:1;r.setXYZW(E,x.x,x.y,x.z,R)}for(let E=0,w=y.length;E<w;++E){const v=y[E],R=v.start,N=v.count;for(let D=R,z=R+N;D<z;D+=3)S(t.getX(D+0)),S(t.getX(D+1)),S(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new U,o=new U,r=new U,a=new U,c=new U,l=new U,h=new U,f=new U;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),M=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,M),r.fromBufferAttribute(e,p),h.subVectors(r,o),f.subVectors(i,o),h.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),f.subVectors(i,o),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h);let d=0,g=0;for(let M=0,p=c.length;M<p;M++){a.isInterleavedBufferAttribute?d=c[M]*a.data.stride+a.offset:d=c[M]*h;for(let m=0;m<h;m++)u[g++]=l[d++]}return new _n(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,f=l.length;h<f;h++){const u=l[h],d=t(u,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],f=o[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const f=r[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gu=new ue,Wi=new Th,Mr=new vs,xu=new U,yr=new U,wr=new U,Sr=new U,lc=new U,br=new U,_u=new U,Tr=new U;class I extends ge{constructor(t=new be,e=new $){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){br.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],f=o[c];h!==0&&(lc.fromBufferAttribute(f,t),r?br.addScaledVector(lc,h):br.addScaledVector(lc.sub(e),h))}e.add(br)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(o),Wi.copy(t.ray).recast(t.near),!(Mr.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Mr,xu)===null||Wi.origin.distanceToSquared(xu)>(t.far-t.near)**2))&&(gu.copy(o).invert(),Wi.copy(t.ray).applyMatrix4(gu),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,u=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,M=u.length;g<M;g++){const p=u[g],m=r[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let _=y,A=x;_<A;_+=3){const T=a.getX(_),S=a.getX(_+1),E=a.getX(_+2);i=Er(this,m,t,n,l,h,f,T,S,E),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let p=g,m=M;p<m;p+=3){const y=a.getX(p),x=a.getX(p+1),_=a.getX(p+2);i=Er(this,r,t,n,l,h,f,y,x,_),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,M=u.length;g<M;g++){const p=u[g],m=r[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let _=y,A=x;_<A;_+=3){const T=_,S=_+1,E=_+2;i=Er(this,m,t,n,l,h,f,T,S,E),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let p=g,m=M;p<m;p+=3){const y=p,x=p+1,_=p+2;i=Er(this,r,t,n,l,h,f,y,x,_),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function C0(s,t,e,n,i,o,r,a){let c;if(t.side===rn?c=n.intersectTriangle(r,o,i,!0,a):c=n.intersectTriangle(i,o,r,t.side===Oi,a),c===null)return null;Tr.copy(a),Tr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Tr);return l<e.near||l>e.far?null:{distance:l,point:Tr.clone(),object:s}}function Er(s,t,e,n,i,o,r,a,c,l){s.getVertexPosition(a,yr),s.getVertexPosition(c,wr),s.getVertexPosition(l,Sr);const h=C0(s,t,e,n,yr,wr,Sr,_u);if(h){const f=new U;Gn.getBarycoord(_u,yr,wr,Sr,f),i&&(h.uv=Gn.getInterpolatedAttribute(i,a,c,l,f,new ut)),o&&(h.uv1=Gn.getInterpolatedAttribute(o,a,c,l,f,new ut)),r&&(h.normal=Gn.getInterpolatedAttribute(r,a,c,l,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new U,materialIndex:0};Gn.getNormal(yr,wr,Sr,u.normal),h.face=u,h.barycoord=f}return h}class ir extends be{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,o,4),g("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(f,2));function g(M,p,m,y,x,_,A,T,S,E,w){const v=_/S,R=A/E,N=_/2,D=A/2,z=T/2,H=S+1,V=E+1;let Z=0,W=0;const lt=new U;for(let dt=0;dt<V;dt++){const bt=dt*R-D;for(let Gt=0;Gt<H;Gt++){const $t=Gt*v-N;lt[M]=$t*y,lt[p]=bt*x,lt[m]=z,l.push(lt.x,lt.y,lt.z),lt[M]=0,lt[p]=0,lt[m]=T>0?1:-1,h.push(lt.x,lt.y,lt.z),f.push(Gt/S),f.push(1-dt/E),Z+=1}}for(let dt=0;dt<E;dt++)for(let bt=0;bt<S;bt++){const Gt=u+bt+H*dt,$t=u+bt+H*(dt+1),J=u+(bt+1)+H*(dt+1),at=u+(bt+1)+H*dt;c.push(Gt,$t,at),c.push($t,J,at),W+=6}a.addGroup(d,W,w),d+=W,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function co(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function je(s){const t={};for(let e=0;e<s.length;e++){const n=co(s[e]);for(const i in n)t[i]=n[i]}return t}function P0(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function td(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const da={clone:co,merge:je};var I0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends Ms{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I0,this.fragmentShader=L0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=co(t.uniforms),this.uniformsGroups=P0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ed extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=gi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new U,vu=new ut,Mu=new ut;class bn extends ed{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ll*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Va*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ll*2*Math.atan(Math.tan(Va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,vu,Mu),e.subVectors(Mu,vu)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Va*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fs=-90,zs=1;class D0 extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new bn(Fs,zs,t,e);i.layers=this.layers,this.add(i);const o=new bn(Fs,zs,t,e);o.layers=this.layers,this.add(o);const r=new bn(Fs,zs,t,e);r.layers=this.layers,this.add(r);const a=new bn(Fs,zs,t,e);a.layers=this.layers,this.add(a);const c=new bn(Fs,zs,t,e);c.layers=this.layers,this.add(c);const l=new bn(Fs,zs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===gi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nd extends qe{constructor(t,e,n,i,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:io,super(t,e,n,i,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class U0 extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new nd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ti}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ir(5,5,5),o=new gn({name:"CubemapFromEquirect",uniforms:co(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:_i});o.uniforms.tEquirect.value=e;const r=new I(i,o),a=e.minFilter;return e.minFilter===cs&&(e.minFilter=ti),new D0(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}class Eh{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new rt(t),this.density=e}clone(){return new Eh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class N0 extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class F0 extends qe{constructor(t=null,e=1,n=1,i,o,r,a,c,l=An,h=An,f,u){super(null,r,a,c,l,h,i,o,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si extends _n{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Os=new ue,yu=new ue,Ar=[],wu=new _s,z0=new ue,bo=new I,To=new vs;class ys extends I{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Si(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,z0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _s),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Os),wu.copy(t.boundingBox).applyMatrix4(Os),this.boundingBox.union(wu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Os),To.copy(t.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(To)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(bo.geometry=this.geometry,bo.material=this.material,bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),To.copy(this.boundingSphere),To.applyMatrix4(n),t.ray.intersectsSphere(To)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,Os),yu.multiplyMatrices(n,Os),bo.matrixWorld=yu,bo.raycast(t,Ar);for(let r=0,a=Ar.length;r<a;r++){const c=Ar[r];c.instanceId=o,c.object=this,e.push(c)}Ar.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Si(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new F0(new Float32Array(i*this.count),i,this.count,yh,ei));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=i*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const hc=new U,O0=new U,B0=new Vt;class Ki{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=hc.subVectors(n,e).cross(O0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(hc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||B0.getNormalMatrix(t),i=this.coplanarPoint(hc).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new vs,Rr=new U;class Ah{constructor(t=new Ki,e=new Ki,n=new Ki,i=new Ki,o=new Ki,r=new Ki){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gi){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],c=i[3],l=i[4],h=i[5],f=i[6],u=i[7],d=i[8],g=i[9],M=i[10],p=i[11],m=i[12],y=i[13],x=i[14],_=i[15];if(n[0].setComponents(c-o,u-l,p-d,_-m).normalize(),n[1].setComponents(c+o,u+l,p+d,_+m).normalize(),n[2].setComponents(c+r,u+h,p+g,_+y).normalize(),n[3].setComponents(c-r,u-h,p-g,_-y).normalize(),n[4].setComponents(c-a,u-f,p-M,_-x).normalize(),e===gi)n[5].setComponents(c+a,u+f,p+M,_+x).normalize();else if(e===ua)n[5].setComponents(a,f,M,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Rr.x=i.normal.x>0?t.max.x:t.min.x,Rr.y=i.normal.y>0?t.max.y:t.min.y,Rr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rh extends Ms{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const pa=new U,ma=new U,Su=new ue,Eo=new Th,Cr=new vs,uc=new U,bu=new U;class id extends ge{constructor(t=new be,e=new Rh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)pa.fromBufferAttribute(e,i-1),ma.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=pa.distanceTo(ma);t.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(i),Cr.radius+=o,t.ray.intersectsSphere(Cr)===!1)return;Su.copy(i).invert(),Eo.copy(t.ray).applyMatrix4(Su);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let M=d,p=g-1;M<p;M+=l){const m=h.getX(M),y=h.getX(M+1),x=Pr(this,t,Eo,c,m,y);x&&e.push(x)}if(this.isLineLoop){const M=h.getX(g-1),p=h.getX(d),m=Pr(this,t,Eo,c,M,p);m&&e.push(m)}}else{const d=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let M=d,p=g-1;M<p;M+=l){const m=Pr(this,t,Eo,c,M,M+1);m&&e.push(m)}if(this.isLineLoop){const M=Pr(this,t,Eo,c,g-1,d);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Pr(s,t,e,n,i,o){const r=s.geometry.attributes.position;if(pa.fromBufferAttribute(r,i),ma.fromBufferAttribute(r,o),e.distanceSqToSegment(pa,ma,uc,bu)>n)return;uc.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(uc);if(!(c<t.near||c>t.far))return{distance:c,point:bu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Tu=new U,Eu=new U;class k0 extends id{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,o=e.count;i<o;i+=2)Tu.fromBufferAttribute(e,i),Eu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Tu.distanceTo(Eu);t.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sd extends Ms{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Au=new ue,Dl=new Th,Ir=new vs,Lr=new U;class G0 extends ge{constructor(t=new be,e=new sd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(i),Ir.radius+=o,t.ray.intersectsSphere(Ir)===!1)return;Au.copy(i).invert(),Dl.copy(t.ray).applyMatrix4(Au);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){const u=Math.max(0,r.start),d=Math.min(l.count,r.start+r.count);for(let g=u,M=d;g<M;g++){const p=l.getX(g);Lr.fromBufferAttribute(f,p),Ru(Lr,p,c,i,t,e,this)}}else{const u=Math.max(0,r.start),d=Math.min(f.count,r.start+r.count);for(let g=u,M=d;g<M;g++)Lr.fromBufferAttribute(f,g),Ru(Lr,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ru(s,t,e,n,i,o,r){const a=Dl.distanceSqToPoint(s);if(a<e){const c=new U;Dl.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class pe extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Ch extends qe{constructor(t,e,n,i,o,r,a,c,l){super(t,e,n,i,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class od extends qe{constructor(t,e,n,i,o,r,a,c,l,h=qs){if(h!==qs&&h!==ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===qs&&(n=ps),n===void 0&&h===ro&&(n=oo),super(null,i,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:An,this.minFilter=c!==void 0?c:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class oi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(o-1);const h=n[i],u=n[i+1]-h,d=(r-h)/u;return(i+d)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),c=e||(r.isVector2?new ut:new U);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new U,i=[],o=[],r=[],a=new U,c=new ue;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new U)}o[0]=new U,r[0]=new U;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Zt(i[d-1].dot(i[d]),-1,1));o[d].applyMatrix4(c.makeRotationAxis(a,g))}r[d].crossVectors(i[d],o[d])}if(e===!0){let d=Math.acos(Zt(o[0].dot(o[t]),-1,1));d/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),r[g].crossVectors(i[g],o[g])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ph extends oi{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ut){const n=e,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class H0 extends Ph{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Ih(){let s=0,t=0,e=0,n=0;function i(o,r,a,c){s=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){i(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,f){let u=(r-o)/l-(a-o)/(l+h)+(a-r)/h,d=(a-r)/h-(c-r)/(h+f)+(c-a)/f;u*=h,d*=h,i(r,a,u,d)},calc:function(o){const r=o*o,a=r*o;return s+t*o+e*r+n*a}}}const Dr=new U,fc=new Ih,dc=new Ih,pc=new Ih;class Ul extends oi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){const n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%o]:(Dr.subVectors(i[0],i[1]).add(i[0]),l=Dr);const f=i[a%o],u=i[(a+1)%o];if(this.closed||a+2<o?h=i[(a+2)%o]:(Dr.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=Dr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);M<1e-4&&(M=1),g<1e-4&&(g=M),p<1e-4&&(p=M),fc.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,M,p),dc.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,M,p),pc.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,M,p)}else this.curveType==="catmullrom"&&(fc.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),dc.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),pc.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(fc.calc(c),dc.calc(c),pc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Cu(s,t,e,n,i){const o=(n-t)*.5,r=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*s+e}function V0(s,t){const e=1-s;return e*e*t}function W0(s,t){return 2*(1-s)*s*t}function X0(s,t){return s*s*t}function ko(s,t,e,n){return V0(s,t)+W0(s,e)+X0(s,n)}function Y0(s,t){const e=1-s;return e*e*e*t}function q0(s,t){const e=1-s;return 3*e*e*s*t}function Z0(s,t){return 3*(1-s)*s*s*t}function $0(s,t){return s*s*s*t}function Go(s,t,e,n,i){return Y0(s,t)+q0(s,e)+Z0(s,n)+$0(s,i)}class rd extends oi{constructor(t=new ut,e=new ut,n=new ut,i=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ut){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Go(t,i.x,o.x,r.x,a.x),Go(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class j0 extends oi{constructor(t=new U,e=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Go(t,i.x,o.x,r.x,a.x),Go(t,i.y,o.y,r.y,a.y),Go(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ad extends oi{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cd extends oi{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ld extends oi{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(ko(t,i.x,o.x,r.x),ko(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hd extends oi{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(ko(t,i.x,o.x,r.x),ko(t,i.y,o.y,r.y),ko(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ud extends oi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],f=i[r>i.length-3?i.length-1:r+2];return n.set(Cu(a,c.x,l.x,h.x,f.x),Cu(a,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ut().fromArray(i))}return this}}var Nl=Object.freeze({__proto__:null,ArcCurve:H0,CatmullRomCurve3:Ul,CubicBezierCurve:rd,CubicBezierCurve3:j0,EllipseCurve:Ph,LineCurve:ad,LineCurve3:cd,QuadraticBezierCurve:ld,QuadraticBezierCurve3:hd,SplineCurve:ud});class K0 extends oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Nl[i.type]().fromJSON(i))}return this}}class ga extends K0{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ad(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new ld(this.currentPoint.clone(),new ut(t,e),new ut(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){const a=new rd(this.currentPoint.clone(),new ut(t,e),new ut(n,i),new ut(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ud(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,o,r,a,c),this}absellipse(t,e,n,i,o,r,a,c){const l=new Ph(t,e,n,i,o,r,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ke extends be{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new U,h=new ut;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new Wt(r,3)),this.setAttribute("normal",new Wt(a,3)),this.setAttribute("uv",new Wt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Mt extends be{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),o=Math.floor(o);const h=[],f=[],u=[],d=[];let g=0;const M=[],p=n/2;let m=0;y(),r===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Wt(f,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(d,2));function y(){const _=new U,A=new U;let T=0;const S=(e-t)/n;for(let E=0;E<=o;E++){const w=[],v=E/o,R=v*(e-t)+t;for(let N=0;N<=i;N++){const D=N/i,z=D*c+a,H=Math.sin(z),V=Math.cos(z);A.x=R*H,A.y=-v*n+p,A.z=R*V,f.push(A.x,A.y,A.z),_.set(H,S,V).normalize(),u.push(_.x,_.y,_.z),d.push(D,1-v),w.push(g++)}M.push(w)}for(let E=0;E<i;E++)for(let w=0;w<o;w++){const v=M[w][E],R=M[w+1][E],N=M[w+1][E+1],D=M[w][E+1];(t>0||w!==0)&&(h.push(v,R,D),T+=3),(e>0||w!==o-1)&&(h.push(R,N,D),T+=3)}l.addGroup(m,T,0),m+=T}function x(_){const A=g,T=new ut,S=new U;let E=0;const w=_===!0?t:e,v=_===!0?1:-1;for(let N=1;N<=i;N++)f.push(0,p*v,0),u.push(0,v,0),d.push(.5,.5),g++;const R=g;for(let N=0;N<=i;N++){const z=N/i*c+a,H=Math.cos(z),V=Math.sin(z);S.x=w*V,S.y=p*v,S.z=w*H,f.push(S.x,S.y,S.z),u.push(0,v,0),T.x=H*.5+.5,T.y=V*.5*v+.5,d.push(T.x,T.y),g++}for(let N=0;N<i;N++){const D=A+N,z=R+N;_===!0?h.push(z,z+1,D):h.push(z+1,z,D),E+=3}l.addGroup(m,E,_===!0?1:2),m+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class si extends Mt{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new si(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Lh extends be{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],r=[];a(i),l(n),h(),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(o.slice(),3)),this.setAttribute("uv",new Wt(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new U,_=new U,A=new U;for(let T=0;T<e.length;T+=3)d(e[T+0],x),d(e[T+1],_),d(e[T+2],A),c(x,_,A,y)}function c(y,x,_,A){const T=A+1,S=[];for(let E=0;E<=T;E++){S[E]=[];const w=y.clone().lerp(_,E/T),v=x.clone().lerp(_,E/T),R=T-E;for(let N=0;N<=R;N++)N===0&&E===T?S[E][N]=w:S[E][N]=w.clone().lerp(v,N/R)}for(let E=0;E<T;E++)for(let w=0;w<2*(T-E)-1;w++){const v=Math.floor(w/2);w%2===0?(u(S[E][v+1]),u(S[E+1][v]),u(S[E][v])):(u(S[E][v+1]),u(S[E+1][v+1]),u(S[E+1][v]))}}function l(y){const x=new U;for(let _=0;_<o.length;_+=3)x.x=o[_+0],x.y=o[_+1],x.z=o[_+2],x.normalize().multiplyScalar(y),o[_+0]=x.x,o[_+1]=x.y,o[_+2]=x.z}function h(){const y=new U;for(let x=0;x<o.length;x+=3){y.x=o[x+0],y.y=o[x+1],y.z=o[x+2];const _=p(y)/2/Math.PI+.5,A=m(y)/Math.PI+.5;r.push(_,1-A)}g(),f()}function f(){for(let y=0;y<r.length;y+=6){const x=r[y+0],_=r[y+2],A=r[y+4],T=Math.max(x,_,A),S=Math.min(x,_,A);T>.9&&S<.1&&(x<.2&&(r[y+0]+=1),_<.2&&(r[y+2]+=1),A<.2&&(r[y+4]+=1))}}function u(y){o.push(y.x,y.y,y.z)}function d(y,x){const _=y*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function g(){const y=new U,x=new U,_=new U,A=new U,T=new ut,S=new ut,E=new ut;for(let w=0,v=0;w<o.length;w+=9,v+=6){y.set(o[w+0],o[w+1],o[w+2]),x.set(o[w+3],o[w+4],o[w+5]),_.set(o[w+6],o[w+7],o[w+8]),T.set(r[v+0],r[v+1]),S.set(r[v+2],r[v+3]),E.set(r[v+4],r[v+5]),A.copy(y).add(x).add(_).divideScalar(3);const R=p(A);M(T,v+0,y,R),M(S,v+2,x,R),M(E,v+4,_,R)}}function M(y,x,_,A){A<0&&y.x===1&&(r[x]=y.x-1),_.x===0&&_.z===0&&(r[x]=A/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lh(t.vertices,t.indices,t.radius,t.details)}}class Fl extends ga{constructor(t){super(t),this.uuid=go(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ga().fromJSON(i))}return this}}const J0={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=fd(s,0,i,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,f,u,d;if(n&&(o=im(s,t,o,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let g=e;g<i;g+=e)f=s[g],u=s[g+1],f<a&&(a=f),u<c&&(c=u),f>l&&(l=f),u>h&&(h=u);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return jo(o,r,e,a,c,d,0),r}};function fd(s,t,e,n,i){let o,r;if(i===pm(s,t,e,n)>0)for(o=t;o<e;o+=n)r=Pu(o,s[o],s[o+1],r);else for(o=e-n;o>=t;o-=n)r=Pu(o,s[o],s[o+1],r);return r&&Ua(r,r.next)&&(Jo(r),r=r.next),r}function ms(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ua(e,e.next)||ye(e.prev,e,e.next)===0)){if(Jo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function jo(s,t,e,n,i,o,r){if(!s)return;!r&&o&&cm(s,n,i,o);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,o?tm(s,n,i,o):Q0(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Jo(s),s=l.next,a=l.next;continue}if(s=l,s===a){r?r===1?(s=em(ms(s),t,e),jo(s,t,e,n,i,o,2)):r===2&&nm(s,t,e,n,i,o):jo(ms(s),t,e,n,i,o,1);break}}}function Q0(s){const t=s.prev,e=s,n=s.next;if(ye(t,e,n)>=0)return!1;const i=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=i<o?i<r?i:r:o<r?o:r,f=a<c?a<l?a:l:c<l?c:l,u=i>o?i>r?i:r:o>r?o:r,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Vs(i,a,o,c,r,l,g.x,g.y)&&ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function tm(s,t,e,n){const i=s.prev,o=s,r=s.next;if(ye(i,o,r)>=0)return!1;const a=i.x,c=o.x,l=r.x,h=i.y,f=o.y,u=r.y,d=a<c?a<l?a:l:c<l?c:l,g=h<f?h<u?h:u:f<u?f:u,M=a>c?a>l?a:l:c>l?c:l,p=h>f?h>u?h:u:f>u?f:u,m=zl(d,g,t,e,n),y=zl(M,p,t,e,n);let x=s.prevZ,_=s.nextZ;for(;x&&x.z>=m&&_&&_.z<=y;){if(x.x>=d&&x.x<=M&&x.y>=g&&x.y<=p&&x!==i&&x!==r&&Vs(a,h,c,f,l,u,x.x,x.y)&&ye(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=d&&_.x<=M&&_.y>=g&&_.y<=p&&_!==i&&_!==r&&Vs(a,h,c,f,l,u,_.x,_.y)&&ye(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=M&&x.y>=g&&x.y<=p&&x!==i&&x!==r&&Vs(a,h,c,f,l,u,x.x,x.y)&&ye(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=M&&_.y>=g&&_.y<=p&&_!==i&&_!==r&&Vs(a,h,c,f,l,u,_.x,_.y)&&ye(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function em(s,t,e){let n=s;do{const i=n.prev,o=n.next.next;!Ua(i,o)&&dd(i,n,n.next,o)&&Ko(i,o)&&Ko(o,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Jo(n),Jo(n.next),n=s=o),n=n.next}while(n!==s);return ms(n)}function nm(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&um(r,a)){let c=pd(r,a);r=ms(r,r.next),c=ms(c,c.next),jo(r,t,e,n,i,o,0),jo(c,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function im(s,t,e,n){const i=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:s.length,l=fd(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(hm(l));for(i.sort(sm),o=0;o<i.length;o++)e=om(i[o],e);return e}function sm(s,t){return s.x-t.x}function om(s,t){const e=rm(s,t);if(!e)return t;const n=pd(e,s);return ms(n,n.next),ms(e,e.next)}function rm(s,t){let e=t,n=-1/0,i;const o=s.x,r=s.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=o&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===o))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,f;e=i;do o>=e.x&&e.x>=c&&o!==e.x&&Vs(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(f=Math.abs(r-e.y)/(o-e.x),Ko(e,s)&&(f<h||f===h&&(e.x>i.x||e.x===i.x&&am(i,e)))&&(i=e,h=f)),e=e.next;while(e!==a);return i}function am(s,t){return ye(s.prev,s,t.prev)<0&&ye(t.next,s,s.next)<0}function cm(s,t,e,n){let i=s;do i.z===0&&(i.z=zl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,lm(i)}function lm(s){let t,e,n,i,o,r,a,c,l=1;do{for(e=s,s=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;e=n}o.nextZ=null,l*=2}while(r>1);return s}function zl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function hm(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Vs(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function um(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!fm(s,t)&&(Ko(s,t)&&Ko(t,s)&&dm(s,t)&&(ye(s.prev,s,t.prev)||ye(s,t.prev,t))||Ua(s,t)&&ye(s.prev,s,s.next)>0&&ye(t.prev,t,t.next)>0)}function ye(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ua(s,t){return s.x===t.x&&s.y===t.y}function dd(s,t,e,n){const i=Nr(ye(s,t,e)),o=Nr(ye(s,t,n)),r=Nr(ye(e,n,s)),a=Nr(ye(e,n,t));return!!(i!==o&&r!==a||i===0&&Ur(s,e,t)||o===0&&Ur(s,n,t)||r===0&&Ur(e,s,n)||a===0&&Ur(e,t,n))}function Ur(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Nr(s){return s>0?1:s<0?-1:0}function fm(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&dd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ko(s,t){return ye(s.prev,s,s.next)<0?ye(s,t,s.next)>=0&&ye(s,s.prev,t)>=0:ye(s,t,s.prev)<0||ye(s,s.next,t)<0}function dm(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function pd(s,t){const e=new Ol(s.i,s.x,s.y),n=new Ol(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Pu(s,t,e,n){const i=new Ol(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Jo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ol(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function pm(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}class Ho{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return Ho.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];Iu(t),Lu(n,t);let r=t.length;e.forEach(Iu);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,Lu(n,e[c]);const a=J0.triangulate(n,i);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Iu(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Lu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class us extends Lh{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new us(t.radius,t.detail)}}class ve extends be{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,f=t/a,u=e/c,d=[],g=[],M=[],p=[];for(let m=0;m<h;m++){const y=m*u-r;for(let x=0;x<l;x++){const _=x*f-o;g.push(_,-y,0),M.push(0,0,1),p.push(x/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<a;y++){const x=y+l*m,_=y+l*(m+1),A=y+1+l*(m+1),T=y+1+l*m;d.push(x,_,T),d.push(_,A,T)}this.setIndex(d),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(M,3)),this.setAttribute("uv",new Wt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.width,t.height,t.widthSegments,t.heightSegments)}}class lo extends be{constructor(t=.5,e=1,n=32,i=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let f=t;const u=(e-t)/i,d=new U,g=new ut;for(let M=0;M<=i;M++){for(let p=0;p<=n;p++){const m=o+p/n*r;d.x=f*Math.cos(m),d.y=f*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}f+=u}for(let M=0;M<i;M++){const p=M*(n+1);for(let m=0;m<n;m++){const y=m+p,x=y,_=y+n+1,A=y+n+2,T=y+1;a.push(x,_,T),a.push(_,A,T)}}this.setIndex(a),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(l,3)),this.setAttribute("uv",new Wt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class xa extends be{constructor(t=new Fl([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Wt(i,3)),this.setAttribute("normal",new Wt(o,3)),this.setAttribute("uv",new Wt(r,2));function l(h){const f=i.length/3,u=h.extractPoints(e);let d=u.shape;const g=u.holes;Ho.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const y=g[p];Ho.isClockWise(y)===!0&&(g[p]=y.reverse())}const M=Ho.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const y=g[p];d=d.concat(y)}for(let p=0,m=d.length;p<m;p++){const y=d[p];i.push(y.x,y.y,0),o.push(0,0,1),r.push(y.x,y.y)}for(let p=0,m=M.length;p<m;p++){const y=M[p],x=y[0]+f,_=y[1]+f,A=y[2]+f;n.push(x,_,A),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return mm(e,t)}static fromJSON(t,e){const n=[];for(let i=0,o=t.shapes.length;i<o;i++){const r=e[t.shapes[i]];n.push(r)}return new xa(n,t.curveSegments)}}function mm(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class K extends be{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],f=new U,u=new U,d=[],g=[],M=[],p=[];for(let m=0;m<=n;m++){const y=[],x=m/n;let _=0;m===0&&r===0?_=.5/e:m===n&&c===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){const T=A/e;f.x=-t*Math.cos(i+T*o)*Math.sin(r+x*a),f.y=t*Math.cos(r+x*a),f.z=t*Math.sin(i+T*o)*Math.sin(r+x*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),M.push(u.x,u.y,u.z),p.push(T+_,1-x),y.push(l++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const x=h[m][y+1],_=h[m][y],A=h[m+1][y],T=h[m+1][y+1];(m!==0||r>0)&&d.push(x,_,T),(m!==n-1||c<Math.PI)&&d.push(_,A,T)}this.setIndex(d),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(M,3)),this.setAttribute("uv",new Wt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new K(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ae extends be{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],c=[],l=[],h=new U,f=new U,u=new U;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const M=g/i*o,p=d/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(M),f.y=(t+e*Math.cos(p))*Math.sin(M),f.z=e*Math.sin(p),a.push(f.x,f.y,f.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),u.subVectors(f,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const M=(i+1)*d+g-1,p=(i+1)*(d-1)+g-1,m=(i+1)*(d-1)+g,y=(i+1)*d+g;r.push(M,p,y),r.push(p,m,y)}this.setIndex(r),this.setAttribute("position",new Wt(a,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ho extends be{constructor(t=new hd(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new U,c=new U,l=new ut;let h=new U;const f=[],u=[],d=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new Wt(f,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(d,2));function M(){for(let x=0;x<e;x++)p(x);p(o===!1?e:0),y(),m()}function p(x){h=t.getPointAt(x/e,h);const _=r.normals[x],A=r.binormals[x];for(let T=0;T<=i;T++){const S=T/i*Math.PI*2,E=Math.sin(S),w=-Math.cos(S);c.x=w*_.x+E*A.x,c.y=w*_.y+E*A.y,c.z=w*_.z+E*A.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,f.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=e;x++)for(let _=1;_<=i;_++){const A=(i+1)*(x-1)+(_-1),T=(i+1)*x+(_-1),S=(i+1)*x+_,E=(i+1)*(x-1)+_;g.push(A,T,E),g.push(T,S,E)}}function y(){for(let x=0;x<=e;x++)for(let _=0;_<=i;_++)l.x=x/e,l.y=_/i,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ho(new Nl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class et extends Ms{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xf,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gm extends Ms{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xm extends Ms{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Dh extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class _m extends Dh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const mc=new ue,Du=new U,Uu=new U;class md{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ah,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Du.setFromMatrixPosition(t.matrixWorld),e.position.copy(Du),Uu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uu),e.updateMatrixWorld(),mc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Nu=new ue,Ao=new U,gc=new U;class vm extends md{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ut(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Ao.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ao),gc.copy(n.position),gc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(gc),n.updateMatrixWorld(),i.makeTranslation(-Ao.x,-Ao.y,-Ao.z),Nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nu)}}class ws extends Dh{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Uh extends ed{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Mm extends md{constructor(){super(new Uh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Na extends Dh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new Mm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ym extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class gd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Fu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Fu(){return performance.now()}function zu(s,t,e,n){const i=wm(n);switch(e){case Bf:return s*t;case Gf:return s*t;case Hf:return s*t*2;case yh:return s*t/i.components*i.byteLength;case wh:return s*t/i.components*i.byteLength;case Vf:return s*t*2/i.components*i.byteLength;case Sh:return s*t*2/i.components*i.byteLength;case kf:return s*t*3/i.components*i.byteLength;case Hn:return s*t*4/i.components*i.byteLength;case bh:return s*t*4/i.components*i.byteLength;case $r:case jr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Kr:case Jr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case al:case ll:return Math.max(s,16)*Math.max(t,8)/4;case rl:case cl:return Math.max(s,8)*Math.max(t,8)/2;case hl:case ul:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case dl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ml:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case gl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case xl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case _l:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case vl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case yl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case wl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case bl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Tl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case El:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Qr:case Al:case Rl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Wf:case Cl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Pl:case Il:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wm(s){switch(s){case wi:case Ff:return{byteLength:1,components:1};case $o:case zf:case vi:return{byteLength:2,components:1};case vh:case Mh:return{byteLength:2,components:4};case ps:case _h:case ei:return{byteLength:4,components:1};case Of:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xd(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function Sm(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,f=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const h=c.array,f=c.updateRanges;if(s.bindBuffer(l,a),f.length===0)s.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],M=f[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,f[u]=M)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const M=f[d];s.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:o,update:r}}var bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tm=`#ifdef USE_ALPHAHASH
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
#endif`,Em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pm=`#ifdef USE_AOMAP
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
#endif`,Im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lm=`#ifdef USE_BATCHING
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
#endif`,Dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zm=`#ifdef USE_IRIDESCENCE
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
#endif`,Om=`#ifdef USE_BUMPMAP
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
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qm=`#define PI 3.141592653589793
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
} // validated`,Zm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$m=`vec3 transformedNormal = objectNormal;
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
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",eg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ng=`#ifdef USE_ENVMAP
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
#endif`,ig=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sg=`#ifdef USE_ENVMAP
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
#endif`,og=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
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
#endif`,ag=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ug=`#ifdef USE_GRADIENTMAP
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
}`,fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mg=`uniform bool receiveShadow;
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
#endif`,gg=`#ifdef USE_ENVMAP
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
#endif`,xg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yg=`PhysicalMaterial material;
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
#endif`,wg=`struct PhysicalMaterial {
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
}`,Sg=`
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
#endif`,bg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Eg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ag=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dg=`#if defined( USE_POINTS_UV )
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
#endif`,Ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bg=`#ifdef USE_MORPHTARGETS
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
#endif`,kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yg=`#ifdef USE_NORMALMAP
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
#endif`,qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cx=`float getShadowMask() {
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
}`,lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hx=`#ifdef USE_SKINNING
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
#endif`,ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fx=`#ifdef USE_SKINNING
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
#endif`,dx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,px=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xx=`#ifdef USE_TRANSMISSION
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
#endif`,_x=`#ifdef USE_TRANSMISSION
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
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bx=`uniform sampler2D t2D;
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
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ex=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`#include <common>
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
}`,Px=`#if DEPTH_PACKING == 3200
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
}`,Ix=`#define DISTANCE
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
}`,Lx=`#define DISTANCE
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
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`uniform float scale;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,zx=`#include <common>
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
}`,Ox=`uniform vec3 diffuse;
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
}`,Bx=`#define LAMBERT
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
}`,kx=`#define LAMBERT
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
}`,Gx=`#define MATCAP
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
}`,Hx=`#define MATCAP
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
}`,Vx=`#define NORMAL
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
}`,Wx=`#define NORMAL
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
}`,Xx=`#define PHONG
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
}`,Yx=`#define PHONG
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
}`,qx=`#define STANDARD
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
}`,Zx=`#define STANDARD
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
}`,$x=`#define TOON
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
}`,jx=`#define TOON
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
}`,Kx=`uniform float size;
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
}`,Jx=`uniform vec3 diffuse;
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
}`,Qx=`#include <common>
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
}`,t_=`uniform vec3 color;
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
}`,e_=`uniform float rotation;
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
}`,n_=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:bm,alphahash_pars_fragment:Tm,alphamap_fragment:Em,alphamap_pars_fragment:Am,alphatest_fragment:Rm,alphatest_pars_fragment:Cm,aomap_fragment:Pm,aomap_pars_fragment:Im,batching_pars_vertex:Lm,batching_vertex:Dm,begin_vertex:Um,beginnormal_vertex:Nm,bsdfs:Fm,iridescence_fragment:zm,bumpmap_pars_fragment:Om,clipping_planes_fragment:Bm,clipping_planes_pars_fragment:km,clipping_planes_pars_vertex:Gm,clipping_planes_vertex:Hm,color_fragment:Vm,color_pars_fragment:Wm,color_pars_vertex:Xm,color_vertex:Ym,common:qm,cube_uv_reflection_fragment:Zm,defaultnormal_vertex:$m,displacementmap_pars_vertex:jm,displacementmap_vertex:Km,emissivemap_fragment:Jm,emissivemap_pars_fragment:Qm,colorspace_fragment:tg,colorspace_pars_fragment:eg,envmap_fragment:ng,envmap_common_pars_fragment:ig,envmap_pars_fragment:sg,envmap_pars_vertex:og,envmap_physical_pars_fragment:gg,envmap_vertex:rg,fog_vertex:ag,fog_pars_vertex:cg,fog_fragment:lg,fog_pars_fragment:hg,gradientmap_pars_fragment:ug,lightmap_pars_fragment:fg,lights_lambert_fragment:dg,lights_lambert_pars_fragment:pg,lights_pars_begin:mg,lights_toon_fragment:xg,lights_toon_pars_fragment:_g,lights_phong_fragment:vg,lights_phong_pars_fragment:Mg,lights_physical_fragment:yg,lights_physical_pars_fragment:wg,lights_fragment_begin:Sg,lights_fragment_maps:bg,lights_fragment_end:Tg,logdepthbuf_fragment:Eg,logdepthbuf_pars_fragment:Ag,logdepthbuf_pars_vertex:Rg,logdepthbuf_vertex:Cg,map_fragment:Pg,map_pars_fragment:Ig,map_particle_fragment:Lg,map_particle_pars_fragment:Dg,metalnessmap_fragment:Ug,metalnessmap_pars_fragment:Ng,morphinstance_vertex:Fg,morphcolor_vertex:zg,morphnormal_vertex:Og,morphtarget_pars_vertex:Bg,morphtarget_vertex:kg,normal_fragment_begin:Gg,normal_fragment_maps:Hg,normal_pars_fragment:Vg,normal_pars_vertex:Wg,normal_vertex:Xg,normalmap_pars_fragment:Yg,clearcoat_normal_fragment_begin:qg,clearcoat_normal_fragment_maps:Zg,clearcoat_pars_fragment:$g,iridescence_pars_fragment:jg,opaque_fragment:Kg,packing:Jg,premultiplied_alpha_fragment:Qg,project_vertex:tx,dithering_fragment:ex,dithering_pars_fragment:nx,roughnessmap_fragment:ix,roughnessmap_pars_fragment:sx,shadowmap_pars_fragment:ox,shadowmap_pars_vertex:rx,shadowmap_vertex:ax,shadowmask_pars_fragment:cx,skinbase_vertex:lx,skinning_pars_vertex:hx,skinning_vertex:ux,skinnormal_vertex:fx,specularmap_fragment:dx,specularmap_pars_fragment:px,tonemapping_fragment:mx,tonemapping_pars_fragment:gx,transmission_fragment:xx,transmission_pars_fragment:_x,uv_pars_fragment:vx,uv_pars_vertex:Mx,uv_vertex:yx,worldpos_vertex:wx,background_vert:Sx,background_frag:bx,backgroundCube_vert:Tx,backgroundCube_frag:Ex,cube_vert:Ax,cube_frag:Rx,depth_vert:Cx,depth_frag:Px,distanceRGBA_vert:Ix,distanceRGBA_frag:Lx,equirect_vert:Dx,equirect_frag:Ux,linedashed_vert:Nx,linedashed_frag:Fx,meshbasic_vert:zx,meshbasic_frag:Ox,meshlambert_vert:Bx,meshlambert_frag:kx,meshmatcap_vert:Gx,meshmatcap_frag:Hx,meshnormal_vert:Vx,meshnormal_frag:Wx,meshphong_vert:Xx,meshphong_frag:Yx,meshphysical_vert:qx,meshphysical_frag:Zx,meshtoon_vert:$x,meshtoon_frag:jx,points_vert:Kx,points_frag:Jx,shadow_vert:Qx,shadow_frag:t_,sprite_vert:e_,sprite_frag:n_},ft={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},$n={basic:{uniforms:je([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:je([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new rt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:je([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:je([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:je([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new rt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:je([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:je([ft.points,ft.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:je([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:je([ft.common,ft.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:je([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:je([ft.sprite,ft.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:je([ft.common,ft.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:je([ft.lights,ft.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};$n.physical={uniforms:je([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Fr={r:0,b:0,g:0},Yi=new ii,i_=new ue;function s_(s,t,e,n,i,o,r){const a=new rt(0);let c=o===!0?0:1,l,h,f=null,u=0,d=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function M(x){let _=!1;const A=g(x);A===null?m(a,c):A&&A.isColor&&(m(A,1),_=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(x,_){const A=g(_);A&&(A.isCubeTexture||A.mapping===Da)?(h===void 0&&(h=new I(new ir(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:co($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Yi.copy(_.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(i_.makeRotationFromEuler(Yi)),h.material.toneMapped=oe.getTransfer(A.colorSpace)!==fe,(f!==A||u!==A.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,f=A,u=A.version,d=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new I(new ve(2,2),new gn({name:"BackgroundMaterial",uniforms:co($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=oe.getTransfer(A.colorSpace)!==fe,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||u!==A.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,f=A,u=A.version,d=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,_){x.getRGB(Fr,td(s)),n.buffers.color.setClear(Fr.r,Fr.g,Fr.b,_,r)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),c=_,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,m(a,c)},render:M,addToRenderList:p,dispose:y}}function o_(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let o=i,r=!1;function a(v,R,N,D,z){let H=!1;const V=f(D,N,R);o!==V&&(o=V,l(o.object)),H=d(v,D,N,z),H&&g(v,D,N,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(H||r)&&(r=!1,_(v,R,N,D),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function f(v,R,N){const D=N.wireframe===!0;let z=n[v.id];z===void 0&&(z={},n[v.id]=z);let H=z[R.id];H===void 0&&(H={},z[R.id]=H);let V=H[D];return V===void 0&&(V=u(c()),H[D]=V),V}function u(v){const R=[],N=[],D=[];for(let z=0;z<e;z++)R[z]=0,N[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:D,object:v,attributes:{},index:null}}function d(v,R,N,D){const z=o.attributes,H=R.attributes;let V=0;const Z=N.getAttributes();for(const W in Z)if(Z[W].location>=0){const dt=z[W];let bt=H[W];if(bt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(bt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(bt=v.instanceColor)),dt===void 0||dt.attribute!==bt||bt&&dt.data!==bt.data)return!0;V++}return o.attributesNum!==V||o.index!==D}function g(v,R,N,D){const z={},H=R.attributes;let V=0;const Z=N.getAttributes();for(const W in Z)if(Z[W].location>=0){let dt=H[W];dt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(dt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(dt=v.instanceColor));const bt={};bt.attribute=dt,dt&&dt.data&&(bt.data=dt.data),z[W]=bt,V++}o.attributes=z,o.attributesNum=V,o.index=D}function M(){const v=o.newAttributes;for(let R=0,N=v.length;R<N;R++)v[R]=0}function p(v){m(v,0)}function m(v,R){const N=o.newAttributes,D=o.enabledAttributes,z=o.attributeDivisors;N[v]=1,D[v]===0&&(s.enableVertexAttribArray(v),D[v]=1),z[v]!==R&&(s.vertexAttribDivisor(v,R),z[v]=R)}function y(){const v=o.newAttributes,R=o.enabledAttributes;for(let N=0,D=R.length;N<D;N++)R[N]!==v[N]&&(s.disableVertexAttribArray(N),R[N]=0)}function x(v,R,N,D,z,H,V){V===!0?s.vertexAttribIPointer(v,R,N,z,H):s.vertexAttribPointer(v,R,N,D,z,H)}function _(v,R,N,D){M();const z=D.attributes,H=N.getAttributes(),V=R.defaultAttributeValues;for(const Z in H){const W=H[Z];if(W.location>=0){let lt=z[Z];if(lt===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(lt=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(lt=v.instanceColor)),lt!==void 0){const dt=lt.normalized,bt=lt.itemSize,Gt=t.get(lt);if(Gt===void 0)continue;const $t=Gt.buffer,J=Gt.type,at=Gt.bytesPerElement,yt=J===s.INT||J===s.UNSIGNED_INT||lt.gpuType===_h;if(lt.isInterleavedBufferAttribute){const ht=lt.data,Nt=ht.stride,Bt=lt.offset;if(ht.isInstancedInterleavedBuffer){for(let qt=0;qt<W.locationSize;qt++)m(W.location+qt,ht.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let qt=0;qt<W.locationSize;qt++)p(W.location+qt);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let qt=0;qt<W.locationSize;qt++)x(W.location+qt,bt/W.locationSize,J,dt,Nt*at,(Bt+bt/W.locationSize*qt)*at,yt)}else{if(lt.isInstancedBufferAttribute){for(let ht=0;ht<W.locationSize;ht++)m(W.location+ht,lt.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ht=0;ht<W.locationSize;ht++)p(W.location+ht);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let ht=0;ht<W.locationSize;ht++)x(W.location+ht,bt/W.locationSize,J,dt,bt*at,bt/W.locationSize*ht*at,yt)}}else if(V!==void 0){const dt=V[Z];if(dt!==void 0)switch(dt.length){case 2:s.vertexAttrib2fv(W.location,dt);break;case 3:s.vertexAttrib3fv(W.location,dt);break;case 4:s.vertexAttrib4fv(W.location,dt);break;default:s.vertexAttrib1fv(W.location,dt)}}}}y()}function A(){E();for(const v in n){const R=n[v];for(const N in R){const D=R[N];for(const z in D)h(D[z].object),delete D[z];delete R[N]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const N in R){const D=R[N];for(const z in D)h(D[z].object),delete D[z];delete R[N]}delete n[v.id]}function S(v){for(const R in n){const N=n[R];if(N[v.id]===void 0)continue;const D=N[v.id];for(const z in D)h(D[z].object),delete D[z];delete N[v.id]}}function E(){w(),r=!0,o!==i&&(o=i,l(o.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:S,initAttributes:M,enableAttribute:p,disableUnusedAttributes:y}}function r_(s,t,e){let n;function i(l){n=l}function o(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,f){f!==0&&(s.drawArraysInstanced(n,l,h,f),e.update(h,n,f))}function a(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];e.update(d,n,1)}function c(l,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)r(l[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,f);let g=0;for(let M=0;M<f;M++)g+=h[M]*u[M];e.update(g,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function a_(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(S){return!(S!==Hn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const E=S===vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==wi&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==ei&&!E)}function c(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:A,maxSamples:T}}function c_(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new Ki,a=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,m=s.get(f);if(!i||g===null||g.length===0||o&&!p)o?h(null):l();else{const y=o?0:n,x=y*4;let _=m.clippingState||null;c.value=_,_=h(g,u,x,d);for(let A=0;A!==x;++A)_[A]=e[A];m.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){const M=f!==null?f.length:0;let p=null;if(M!==0){if(p=c.value,g!==!0||p===null){const m=d+M*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,_=d;x!==M;++x,_+=4)r.copy(f[x]).applyMatrix4(y,a),r.normal.toArray(p,_),p[_+3]=r.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}function l_(s){let t=new WeakMap;function e(r,a){return a===il?r.mapping=io:a===sl&&(r.mapping=so),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===il||a===sl)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new U0(c.height);return l.fromEquirectangularTexture(s,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const Ws=4,Ou=[.125,.215,.35,.446,.526,.582],rs=20,xc=new Uh,Bu=new rt;let _c=null,vc=0,Mc=0,yc=!1;const Ji=(1+Math.sqrt(5))/2,Bs=1/Ji,ku=[new U(-Ji,Bs,0),new U(Ji,Bs,0),new U(-Bs,0,Ji),new U(Bs,0,Ji),new U(0,Ji,-Bs),new U(0,Ji,Bs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Gu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_c,vc,Mc),this._renderer.xr.enabled=yc,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===io||t.mapping===so?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:vi,format:Hn,colorSpace:ao,depthBuffer:!1},i=Hu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hu(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h_(o)),this._blurMaterial=u_(o,t,e)}return i}_compileMaterial(t){const e=new I(this._lodPlanes[0],t);this._renderer.compile(e,xc)}_sceneToCubeUV(t,e,n,i){const a=new bn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Bu),h.toneMapping=zi,h.autoClear=!1;const d=new $({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new I(new ir,d);let M=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,M=!0):(d.color.copy(Bu),M=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):y===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const x=this._cubeSize;zr(i,y*x,m>2?x:0,x,x),h.setRenderTarget(i),M&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===io||t.mapping===so;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vu());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new I(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;zr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,xc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=ku[(i-o-1)%ku.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new I(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*rs-1),M=o/g,p=isFinite(o)?1+Math.floor(h*M):rs;p>rs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${rs}`);const m=[];let y=0;for(let S=0;S<rs;++S){const E=S/M,w=Math.exp(-E*E/2);m.push(w),S===0?y+=w:S<p&&(y+=2*w)}for(let S=0;S<m.length;S++)m[S]=m[S]/y;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const _=this._sizeLods[i],A=3*_*(i>x-Ws?i-x+Ws:0),T=4*(this._cubeSize-_);zr(e,A,T,3*_,2*_),c.setRenderTarget(e),c.render(f,xc)}}function h_(s){const t=[],e=[],n=[];let i=s;const o=s-Ws+1+Ou.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let c=1/a;r>s-Ws?c=Ou[r-s+Ws-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,M=3,p=2,m=1,y=new Float32Array(M*g*d),x=new Float32Array(p*g*d),_=new Float32Array(m*g*d);for(let T=0;T<d;T++){const S=T%3*2/3-1,E=T>2?0:-1,w=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];y.set(w,M*g*T),x.set(u,p*g*T);const v=[T,T,T,T,T,T];_.set(v,m*g*T)}const A=new be;A.setAttribute("position",new _n(y,M)),A.setAttribute("uv",new _n(x,p)),A.setAttribute("faceIndex",new _n(_,m)),t.push(A),i>Ws&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Hu(s,t,e){const n=new Vn(s,t,e);return n.texture.mapping=Da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function u_(s,t,e){const n=new Float32Array(rs),i=new U(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Nh(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Vu(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nh(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Wu(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Nh(){return`

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
	`}function f_(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===il||c===sl,h=c===io||c===so;if(l||h){let f=t.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Gu(s)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Gu(s)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function d_(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Gs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function p_(s,t,e,n){const i={},o=new WeakMap;function r(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete i[u.id];const d=o.get(u);d&&(t.remove(d),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function c(f){const u=f.attributes;for(const d in u)t.update(u[d],s.ARRAY_BUFFER)}function l(f){const u=[],d=f.index,g=f.attributes.position;let M=0;if(d!==null){const y=d.array;M=d.version;for(let x=0,_=y.length;x<_;x+=3){const A=y[x+0],T=y[x+1],S=y[x+2];u.push(A,T,T,S,S,A)}}else if(g!==void 0){const y=g.array;M=g.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const A=x+0,T=x+1,S=x+2;u.push(A,T,T,S,S,A)}}else return;const p=new(qf(u)?Qf:Jf)(u,1);p.version=M;const m=o.get(f);m&&t.remove(m),o.set(f,p)}function h(f){const u=o.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return o.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function m_(s,t,e){let n;function i(u){n=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function c(u,d){s.drawElements(n,d,o,u*r),e.update(d,n,1)}function l(u,d,g){g!==0&&(s.drawElementsInstanced(n,d,o,u*r,g),e.update(d,n,g))}function h(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,u,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function f(u,d,g,M){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)l(u[m]/r,d[m],M[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,o,u,0,M,0,g);let m=0;for(let y=0;y<g;y++)m+=d[y]*M[y];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function g_(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function x_(s,t,e){const n=new WeakMap,i=new de;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let v=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var d=v;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),M===!0&&(_=2),p===!0&&(_=3);let A=a.attributes.position.count*_,T=1;A>t.maxTextureSize&&(T=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const S=new Float32Array(A*T*4*f),E=new $f(S,A,T,f);E.type=ei,E.needsUpdate=!0;const w=_*4;for(let R=0;R<f;R++){const N=m[R],D=y[R],z=x[R],H=A*T*4*R;for(let V=0;V<N.count;V++){const Z=V*w;g===!0&&(i.fromBufferAttribute(N,V),S[H+Z+0]=i.x,S[H+Z+1]=i.y,S[H+Z+2]=i.z,S[H+Z+3]=0),M===!0&&(i.fromBufferAttribute(D,V),S[H+Z+4]=i.x,S[H+Z+5]=i.y,S[H+Z+6]=i.z,S[H+Z+7]=0),p===!0&&(i.fromBufferAttribute(z,V),S[H+Z+8]=i.x,S[H+Z+9]=i.y,S[H+Z+10]=i.z,S[H+Z+11]=z.itemSize===4?i.w:1)}}u={count:f,texture:E,size:new ut(A,T)},n.set(a,u),a.addEventListener("dispose",v)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const M=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",M),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:o}}function __(s,t,e,n){let i=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,f=t.get(c,h);if(i.get(f)!==l&&(t.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return f}function r(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}const _d=new qe,Xu=new od(1,1),vd=new $f,Md=new v0,yd=new nd,Yu=[],qu=[],Zu=new Float32Array(16),$u=new Float32Array(9),ju=new Float32Array(4);function xo(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=Yu[i];if(o===void 0&&(o=new Float32Array(i),Yu[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function Le(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function De(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Fa(s,t){let e=qu[t];e===void 0&&(e=new Int32Array(t),qu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function v_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function M_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;s.uniform2fv(this.addr,t),De(e,t)}}function y_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;s.uniform3fv(this.addr,t),De(e,t)}}function w_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;s.uniform4fv(this.addr,t),De(e,t)}}function S_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;ju.set(n),s.uniformMatrix2fv(this.addr,!1,ju),De(e,n)}}function b_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;$u.set(n),s.uniformMatrix3fv(this.addr,!1,$u),De(e,n)}}function T_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Zu.set(n),s.uniformMatrix4fv(this.addr,!1,Zu),De(e,n)}}function E_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function A_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;s.uniform2iv(this.addr,t),De(e,t)}}function R_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;s.uniform3iv(this.addr,t),De(e,t)}}function C_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;s.uniform4iv(this.addr,t),De(e,t)}}function P_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function I_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;s.uniform2uiv(this.addr,t),De(e,t)}}function L_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;s.uniform3uiv(this.addr,t),De(e,t)}}function D_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;s.uniform4uiv(this.addr,t),De(e,t)}}function U_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(Xu.compareFunction=Yf,o=Xu):o=_d,e.setTexture2D(t||o,i)}function N_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Md,i)}function F_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||yd,i)}function z_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||vd,i)}function O_(s){switch(s){case 5126:return v_;case 35664:return M_;case 35665:return y_;case 35666:return w_;case 35674:return S_;case 35675:return b_;case 35676:return T_;case 5124:case 35670:return E_;case 35667:case 35671:return A_;case 35668:case 35672:return R_;case 35669:case 35673:return C_;case 5125:return P_;case 36294:return I_;case 36295:return L_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return U_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return z_}}function B_(s,t){s.uniform1fv(this.addr,t)}function k_(s,t){const e=xo(t,this.size,2);s.uniform2fv(this.addr,e)}function G_(s,t){const e=xo(t,this.size,3);s.uniform3fv(this.addr,e)}function H_(s,t){const e=xo(t,this.size,4);s.uniform4fv(this.addr,e)}function V_(s,t){const e=xo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function W_(s,t){const e=xo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function X_(s,t){const e=xo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Y_(s,t){s.uniform1iv(this.addr,t)}function q_(s,t){s.uniform2iv(this.addr,t)}function Z_(s,t){s.uniform3iv(this.addr,t)}function $_(s,t){s.uniform4iv(this.addr,t)}function j_(s,t){s.uniform1uiv(this.addr,t)}function K_(s,t){s.uniform2uiv(this.addr,t)}function J_(s,t){s.uniform3uiv(this.addr,t)}function Q_(s,t){s.uniform4uiv(this.addr,t)}function tv(s,t,e){const n=this.cache,i=t.length,o=Fa(e,i);Le(n,o)||(s.uniform1iv(this.addr,o),De(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||_d,o[r])}function ev(s,t,e){const n=this.cache,i=t.length,o=Fa(e,i);Le(n,o)||(s.uniform1iv(this.addr,o),De(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Md,o[r])}function nv(s,t,e){const n=this.cache,i=t.length,o=Fa(e,i);Le(n,o)||(s.uniform1iv(this.addr,o),De(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||yd,o[r])}function iv(s,t,e){const n=this.cache,i=t.length,o=Fa(e,i);Le(n,o)||(s.uniform1iv(this.addr,o),De(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||vd,o[r])}function sv(s){switch(s){case 5126:return B_;case 35664:return k_;case 35665:return G_;case 35666:return H_;case 35674:return V_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return Y_;case 35667:case 35671:return q_;case 35668:case 35672:return Z_;case 35669:case 35673:return $_;case 5125:return j_;case 36294:return K_;case 36295:return J_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return tv;case 35679:case 36299:case 36307:return ev;case 35680:case 36300:case 36308:case 36293:return nv;case 36289:case 36303:case 36311:case 36292:return iv}}class ov{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=O_(e.type)}}class rv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sv(e.type)}}class av{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const wc=/(\w+)(\])?(\[|\.)?/g;function Ku(s,t){s.seq.push(t),s.map[t.id]=t}function cv(s,t,e){const n=s.name,i=n.length;for(wc.lastIndex=0;;){const o=wc.exec(n),r=wc.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){Ku(e,l===void 0?new ov(a,s,t):new rv(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new av(a),Ku(e,f)),e=f}}}class ta{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);cv(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Ju(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const lv=37297;let hv=0;function uv(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Qu=new Vt;function fv(s){oe._getMatrix(Qu,oe.workingColorSpace,s);const t=`mat3( ${Qu.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(s)){case ha:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function tf(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+uv(s.getShaderSource(t),r)}else return i}function dv(s,t){const e=fv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function pv(s,t){let e;switch(t){case Yp:e="Linear";break;case qp:e="Reinhard";break;case Zp:e="Cineon";break;case Uf:e="ACESFilmic";break;case jp:e="AgX";break;case Kp:e="Neutral";break;case $p:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Or=new U;function mv(){oe.getLuminanceCoefficients(Or);const s=Or.x.toFixed(4),t=Or.y.toFixed(4),e=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function xv(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _v(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function Lo(s){return s!==""}function ef(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bl(s){return s.replace(vv,yv)}const Mv=new Map;function yv(s,t){let e=Yt[t];if(e===void 0){const n=Mv.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Bl(e)}const wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sf(s){return s.replace(wv,Sv)}function Sv(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function of(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function bv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===If?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Lf?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fi&&(t="SHADOWMAP_TYPE_VSM"),t}function Tv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case io:case so:t="ENVMAP_TYPE_CUBE";break;case Da:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ev(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case so:t="ENVMAP_MODE_REFRACTION";break}return t}function Av(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Df:t="ENVMAP_BLENDING_MULTIPLY";break;case Wp:t="ENVMAP_BLENDING_MIX";break;case Xp:t="ENVMAP_BLENDING_ADD";break}return t}function Rv(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Cv(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=bv(e),l=Tv(e),h=Ev(e),f=Av(e),u=Rv(e),d=gv(e),g=xv(o),M=i.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lo).join(`
`),m.length>0&&(m+=`
`)):(p=[of(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),m=[of(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zi?"#define TONE_MAPPING":"",e.toneMapping!==zi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==zi?pv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,dv("linearToOutputTexel",e.outputColorSpace),mv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lo).join(`
`)),r=Bl(r),r=ef(r,e),r=nf(r,e),a=Bl(a),a=ef(a,e),a=nf(a,e),r=sf(r),a=sf(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+p+r,_=y+m+a,A=Ju(i,i.VERTEX_SHADER,x),T=Ju(i,i.FRAGMENT_SHADER,_);i.attachShader(M,A),i.attachShader(M,T),e.index0AttributeName!==void 0?i.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function S(R){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(M).trim(),D=i.getShaderInfoLog(A).trim(),z=i.getShaderInfoLog(T).trim();let H=!0,V=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,M,A,T);else{const Z=tf(i,A,"vertex"),W=tf(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+Z+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||z==="")&&(V=!1);V&&(R.diagnostics={runnable:H,programLog:N,vertexShader:{log:D,prefix:p},fragmentShader:{log:z,prefix:m}})}i.deleteShader(A),i.deleteShader(T),E=new ta(i,M),w=_v(i,M)}let E;this.getUniforms=function(){return E===void 0&&S(this),E};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(M,lv)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hv++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=T,this}let Pv=0;class Iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Lv(t),e.set(t,n)),n}}class Lv{constructor(t){this.id=Pv++,this.code=t,this.usedTimes=0}}function Dv(s,t,e,n,i,o,r){const a=new jf,c=new Iv,l=new Set,h=[],f=i.logarithmicDepthBuffer,u=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return l.add(w),w===0?"uv":`uv${w}`}function p(w,v,R,N,D){const z=N.fog,H=D.geometry,V=w.isMeshStandardMaterial?N.environment:null,Z=(w.isMeshStandardMaterial?e:t).get(w.envMap||V),W=Z&&Z.mapping===Da?Z.image.height:null,lt=g[w.type];w.precision!==null&&(d=i.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const dt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,bt=dt!==void 0?dt.length:0;let Gt=0;H.morphAttributes.position!==void 0&&(Gt=1),H.morphAttributes.normal!==void 0&&(Gt=2),H.morphAttributes.color!==void 0&&(Gt=3);let $t,J,at,yt;if(lt){const le=$n[lt];$t=le.vertexShader,J=le.fragmentShader}else $t=w.vertexShader,J=w.fragmentShader,c.update(w),at=c.getVertexShaderID(w),yt=c.getFragmentShaderID(w);const ht=s.getRenderTarget(),Nt=s.state.buffers.depth.getReversed(),Bt=D.isInstancedMesh===!0,qt=D.isBatchedMesh===!0,Me=!!w.map,Qt=!!w.matcap,Te=!!Z,F=!!w.aoMap,Rn=!!w.lightMap,jt=!!w.bumpMap,Kt=!!w.normalMap,It=!!w.displacementMap,xe=!!w.emissiveMap,Pt=!!w.metalnessMap,L=!!w.roughnessMap,C=w.anisotropy>0,X=w.clearcoat>0,nt=w.dispersion>0,st=w.iridescence>0,tt=w.sheen>0,Rt=w.transmission>0,gt=C&&!!w.anisotropyMap,St=X&&!!w.clearcoatMap,te=X&&!!w.clearcoatNormalMap,ct=X&&!!w.clearcoatRoughnessMap,Tt=st&&!!w.iridescenceMap,Ut=st&&!!w.iridescenceThicknessMap,Ft=tt&&!!w.sheenColorMap,Et=tt&&!!w.sheenRoughnessMap,Jt=!!w.specularMap,Xt=!!w.specularColorMap,me=!!w.specularIntensityMap,O=Rt&&!!w.transmissionMap,pt=Rt&&!!w.thicknessMap,j=!!w.gradientMap,it=!!w.alphaMap,_t=w.alphaTest>0,xt=!!w.alphaHash,Ht=!!w.extensions;let we=zi;w.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(we=s.toneMapping);const He={shaderID:lt,shaderType:w.type,shaderName:w.name,vertexShader:$t,fragmentShader:J,defines:w.defines,customVertexShaderID:at,customFragmentShaderID:yt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:qt,batchingColor:qt&&D._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&D.instanceColor!==null,instancingMorph:Bt&&D.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ht===null?s.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ao,alphaToCoverage:!!w.alphaToCoverage,map:Me,matcap:Qt,envMap:Te,envMapMode:Te&&Z.mapping,envMapCubeUVHeight:W,aoMap:F,lightMap:Rn,bumpMap:jt,normalMap:Kt,displacementMap:u&&It,emissiveMap:xe,normalMapObjectSpace:Kt&&w.normalMapType===e0,normalMapTangentSpace:Kt&&w.normalMapType===Xf,metalnessMap:Pt,roughnessMap:L,anisotropy:C,anisotropyMap:gt,clearcoat:X,clearcoatMap:St,clearcoatNormalMap:te,clearcoatRoughnessMap:ct,dispersion:nt,iridescence:st,iridescenceMap:Tt,iridescenceThicknessMap:Ut,sheen:tt,sheenColorMap:Ft,sheenRoughnessMap:Et,specularMap:Jt,specularColorMap:Xt,specularIntensityMap:me,transmission:Rt,transmissionMap:O,thicknessMap:pt,gradientMap:j,opaque:w.transparent===!1&&w.blending===Ys&&w.alphaToCoverage===!1,alphaMap:it,alphaTest:_t,alphaHash:xt,combine:w.combine,mapUv:Me&&M(w.map.channel),aoMapUv:F&&M(w.aoMap.channel),lightMapUv:Rn&&M(w.lightMap.channel),bumpMapUv:jt&&M(w.bumpMap.channel),normalMapUv:Kt&&M(w.normalMap.channel),displacementMapUv:It&&M(w.displacementMap.channel),emissiveMapUv:xe&&M(w.emissiveMap.channel),metalnessMapUv:Pt&&M(w.metalnessMap.channel),roughnessMapUv:L&&M(w.roughnessMap.channel),anisotropyMapUv:gt&&M(w.anisotropyMap.channel),clearcoatMapUv:St&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:te&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:Et&&M(w.sheenRoughnessMap.channel),specularMapUv:Jt&&M(w.specularMap.channel),specularColorMapUv:Xt&&M(w.specularColorMap.channel),specularIntensityMapUv:me&&M(w.specularIntensityMap.channel),transmissionMapUv:O&&M(w.transmissionMap.channel),thicknessMapUv:pt&&M(w.thicknessMap.channel),alphaMapUv:it&&M(w.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Kt||C),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(Me||it),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Nt,skinning:D.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Gt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:we,decodeVideoTexture:Me&&w.map.isVideoTexture===!0&&oe.getTransfer(w.map.colorSpace)===fe,decodeVideoTextureEmissive:xe&&w.emissiveMap.isVideoTexture===!0&&oe.getTransfer(w.emissiveMap.colorSpace)===fe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ot,flipSided:w.side===rn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ht&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&w.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return He.vertexUv1s=l.has(1),He.vertexUv2s=l.has(2),He.vertexUv3s=l.has(3),l.clear(),He}function m(w){const v=[];if(w.shaderID?v.push(w.shaderID):(v.push(w.customVertexShaderID),v.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)v.push(R),v.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(y(v,w),x(v,w),v.push(s.outputColorSpace)),v.push(w.customProgramCacheKey),v.join()}function y(w,v){w.push(v.precision),w.push(v.outputColorSpace),w.push(v.envMapMode),w.push(v.envMapCubeUVHeight),w.push(v.mapUv),w.push(v.alphaMapUv),w.push(v.lightMapUv),w.push(v.aoMapUv),w.push(v.bumpMapUv),w.push(v.normalMapUv),w.push(v.displacementMapUv),w.push(v.emissiveMapUv),w.push(v.metalnessMapUv),w.push(v.roughnessMapUv),w.push(v.anisotropyMapUv),w.push(v.clearcoatMapUv),w.push(v.clearcoatNormalMapUv),w.push(v.clearcoatRoughnessMapUv),w.push(v.iridescenceMapUv),w.push(v.iridescenceThicknessMapUv),w.push(v.sheenColorMapUv),w.push(v.sheenRoughnessMapUv),w.push(v.specularMapUv),w.push(v.specularColorMapUv),w.push(v.specularIntensityMapUv),w.push(v.transmissionMapUv),w.push(v.thicknessMapUv),w.push(v.combine),w.push(v.fogExp2),w.push(v.sizeAttenuation),w.push(v.morphTargetsCount),w.push(v.morphAttributeCount),w.push(v.numDirLights),w.push(v.numPointLights),w.push(v.numSpotLights),w.push(v.numSpotLightMaps),w.push(v.numHemiLights),w.push(v.numRectAreaLights),w.push(v.numDirLightShadows),w.push(v.numPointLightShadows),w.push(v.numSpotLightShadows),w.push(v.numSpotLightShadowsWithMaps),w.push(v.numLightProbes),w.push(v.shadowMapType),w.push(v.toneMapping),w.push(v.numClippingPlanes),w.push(v.numClipIntersection),w.push(v.depthPacking)}function x(w,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){const v=g[w.type];let R;if(v){const N=$n[v];R=da.clone(N.uniforms)}else R=w.uniforms;return R}function A(w,v){let R;for(let N=0,D=h.length;N<D;N++){const z=h[N];if(z.cacheKey===v){R=z,++R.usedTimes;break}}return R===void 0&&(R=new Cv(s,v,w,o),h.push(R)),R}function T(w){if(--w.usedTimes===0){const v=h.indexOf(w);h[v]=h[h.length-1],h.pop(),w.destroy()}}function S(w){c.remove(w)}function E(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:_,acquireProgram:A,releaseProgram:T,releaseShaderCache:S,programs:h,dispose:E}}function Uv(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,c){s.get(r)[a]=c}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function Nv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function rf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function af(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(f,u,d,g,M,p){let m=s[t];return m===void 0?(m={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:M,group:p},s[t]=m):(m.id=f.id,m.object=f,m.geometry=u,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=M,m.group=p),t++,m}function a(f,u,d,g,M,p){const m=r(f,u,d,g,M,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function c(f,u,d,g,M,p){const m=r(f,u,d,g,M,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function l(f,u){e.length>1&&e.sort(f||Nv),n.length>1&&n.sort(u||rf),i.length>1&&i.sort(u||rf)}function h(){for(let f=t,u=s.length;f<u;f++){const d=s[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:c,finish:h,sort:l}}function Fv(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new af,s.set(n,[r])):i>=o.length?(r=new af,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function zv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new rt};break;case"SpotLight":e={position:new U,direction:new U,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":e={color:new rt,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function Ov(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Bv=0;function kv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Gv(s){const t=new zv,e=Ov(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const i=new U,o=new ue,r=new ue;function a(l){let h=0,f=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,g=0,M=0,p=0,m=0,y=0,x=0,_=0,A=0,T=0,S=0;l.sort(kv);for(let w=0,v=l.length;w<v;w++){const R=l[w],N=R.color,D=R.intensity,z=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=N.r*D,f+=N.g*D,u+=N.b*D;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],D);S++}else if(R.isDirectionalLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,W=e.get(R);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=R.shadow.matrix,y++}n.directional[d]=V,d++}else if(R.isSpotLight){const V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(N).multiplyScalar(D),V.distance=z,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[M]=V;const Z=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,Z.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[M]=Z.matrix,R.castShadow){const W=e.get(R);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.spotShadow[M]=W,n.spotShadowMap[M]=H,_++}M++}else if(R.isRectAreaLight){const V=t.get(R);V.color.copy(N).multiplyScalar(D),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=V,p++}else if(R.isPointLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const Z=R.shadow,W=e.get(R);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=R.shadow.matrix,x++}n.point[g]=V,g++}else if(R.isHemisphereLight){const V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(D),V.groundColor.copy(R.groundColor).multiplyScalar(D),n.hemi[m]=V,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const E=n.hash;(E.directionalLength!==d||E.pointLength!==g||E.spotLength!==M||E.rectAreaLength!==p||E.hemiLength!==m||E.numDirectionalShadows!==y||E.numPointShadows!==x||E.numSpotShadows!==_||E.numSpotMaps!==A||E.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=M,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=S,E.directionalLength=d,E.pointLength=g,E.spotLength=M,E.rectAreaLength=p,E.hemiLength=m,E.numDirectionalShadows=y,E.numPointShadows=x,E.numSpotShadows=_,E.numSpotMaps=A,E.numLightProbes=S,n.version=Bv++)}function c(l,h){let f=0,u=0,d=0,g=0,M=0;const p=h.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){const x=l[m];if(x.isDirectionalLight){const _=n.directional[f];_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),f++}else if(x.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(p),r.identity(),o.copy(x.matrixWorld),o.premultiply(p),r.extractRotation(o),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),g++}else if(x.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(p),u++}else if(x.isHemisphereLight){const _=n.hemi[M];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(p),M++}}}return{setup:a,setupView:c,state:n}}function cf(s){const t=new Gv(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function Hv(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new cf(s),t.set(i,[a])):o>=r.length?(a=new cf(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wv=`uniform sampler2D shadow_pass;
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
}`;function Xv(s,t,e){let n=new Ah;const i=new ut,o=new ut,r=new de,a=new gm({depthPacking:t0}),c=new xm,l={},h=e.maxTextureSize,f={[Oi]:rn,[rn]:Oi,[Ot]:Ot},u=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Vv,fragmentShader:Wv}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new be;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new I(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=If;let m=this.type;this.render=function(T,S,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const w=s.getRenderTarget(),v=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),N=s.state;N.setBlending(_i),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const D=m!==fi&&this.type===fi,z=m===fi&&this.type!==fi;for(let H=0,V=T.length;H<V;H++){const Z=T[H],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const lt=W.getFrameExtents();if(i.multiply(lt),o.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/lt.x),i.x=o.x*lt.x,W.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/lt.y),i.y=o.y*lt.y,W.mapSize.y=o.y)),W.map===null||D===!0||z===!0){const bt=this.type!==fi?{minFilter:An,magFilter:An}:{};W.map!==null&&W.map.dispose(),W.map=new Vn(i.x,i.y,bt),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const dt=W.getViewportCount();for(let bt=0;bt<dt;bt++){const Gt=W.getViewport(bt);r.set(o.x*Gt.x,o.y*Gt.y,o.x*Gt.z,o.y*Gt.w),N.viewport(r),W.updateMatrices(Z,bt),n=W.getFrustum(),_(S,E,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===fi&&y(W,E),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(w,v,R)};function y(T,S){const E=t.update(M);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Vn(i.x,i.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(S,null,E,u,M,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(S,null,E,d,M,null)}function x(T,S,E,w){let v=null;const R=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)v=R;else if(v=E.isPointLight===!0?c:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const N=v.uuid,D=S.uuid;let z=l[N];z===void 0&&(z={},l[N]=z);let H=z[D];H===void 0&&(H=v.clone(),z[D]=H,S.addEventListener("dispose",A)),v=H}if(v.visible=S.visible,v.wireframe=S.wireframe,w===fi?v.side=S.shadowSide!==null?S.shadowSide:S.side:v.side=S.shadowSide!==null?S.shadowSide:f[S.side],v.alphaMap=S.alphaMap,v.alphaTest=S.alphaTest,v.map=S.map,v.clipShadows=S.clipShadows,v.clippingPlanes=S.clippingPlanes,v.clipIntersection=S.clipIntersection,v.displacementMap=S.displacementMap,v.displacementScale=S.displacementScale,v.displacementBias=S.displacementBias,v.wireframeLinewidth=S.wireframeLinewidth,v.linewidth=S.linewidth,E.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=s.properties.get(v);N.light=E}return v}function _(T,S,E,w,v){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===fi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);const D=t.update(T),z=T.material;if(Array.isArray(z)){const H=D.groups;for(let V=0,Z=H.length;V<Z;V++){const W=H[V],lt=z[W.materialIndex];if(lt&&lt.visible){const dt=x(T,lt,w,v);T.onBeforeShadow(s,T,S,E,D,dt,W),s.renderBufferDirect(E,null,D,dt,T,W),T.onAfterShadow(s,T,S,E,D,dt,W)}}}else if(z.visible){const H=x(T,z,w,v);T.onBeforeShadow(s,T,S,E,D,H,null),s.renderBufferDirect(E,null,D,H,T,null),T.onAfterShadow(s,T,S,E,D,H,null)}}const N=T.children;for(let D=0,z=N.length;D<z;D++)_(N[D],S,E,w,v)}function A(T){T.target.removeEventListener("dispose",A);for(const E in l){const w=l[E],v=T.target.uuid;v in w&&(w[v].dispose(),delete w[v])}}}const Yv={[jc]:Kc,[Jc]:el,[Qc]:nl,[no]:tl,[Kc]:jc,[el]:Jc,[nl]:Qc,[tl]:no};function qv(s,t){function e(){let O=!1;const pt=new de;let j=null;const it=new de(0,0,0,0);return{setMask:function(_t){j!==_t&&!O&&(s.colorMask(_t,_t,_t,_t),j=_t)},setLocked:function(_t){O=_t},setClear:function(_t,xt,Ht,we,He){He===!0&&(_t*=we,xt*=we,Ht*=we),pt.set(_t,xt,Ht,we),it.equals(pt)===!1&&(s.clearColor(_t,xt,Ht,we),it.copy(pt))},reset:function(){O=!1,j=null,it.set(-1,0,0,0)}}}function n(){let O=!1,pt=!1,j=null,it=null,_t=null;return{setReversed:function(xt){if(pt!==xt){const Ht=t.get("EXT_clip_control");pt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);const we=_t;_t=null,this.setClear(we)}pt=xt},getReversed:function(){return pt},setTest:function(xt){xt?ht(s.DEPTH_TEST):Nt(s.DEPTH_TEST)},setMask:function(xt){j!==xt&&!O&&(s.depthMask(xt),j=xt)},setFunc:function(xt){if(pt&&(xt=Yv[xt]),it!==xt){switch(xt){case jc:s.depthFunc(s.NEVER);break;case Kc:s.depthFunc(s.ALWAYS);break;case Jc:s.depthFunc(s.LESS);break;case no:s.depthFunc(s.LEQUAL);break;case Qc:s.depthFunc(s.EQUAL);break;case tl:s.depthFunc(s.GEQUAL);break;case el:s.depthFunc(s.GREATER);break;case nl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}it=xt}},setLocked:function(xt){O=xt},setClear:function(xt){_t!==xt&&(pt&&(xt=1-xt),s.clearDepth(xt),_t=xt)},reset:function(){O=!1,j=null,it=null,_t=null,pt=!1}}}function i(){let O=!1,pt=null,j=null,it=null,_t=null,xt=null,Ht=null,we=null,He=null;return{setTest:function(le){O||(le?ht(s.STENCIL_TEST):Nt(s.STENCIL_TEST))},setMask:function(le){pt!==le&&!O&&(s.stencilMask(le),pt=le)},setFunc:function(le,Fn,ri){(j!==le||it!==Fn||_t!==ri)&&(s.stencilFunc(le,Fn,ri),j=le,it=Fn,_t=ri)},setOp:function(le,Fn,ri){(xt!==le||Ht!==Fn||we!==ri)&&(s.stencilOp(le,Fn,ri),xt=le,Ht=Fn,we=ri)},setLocked:function(le){O=le},setClear:function(le){He!==le&&(s.clearStencil(le),He=le)},reset:function(){O=!1,pt=null,j=null,it=null,_t=null,xt=null,Ht=null,we=null,He=null}}}const o=new e,r=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},f={},u=new WeakMap,d=[],g=null,M=!1,p=null,m=null,y=null,x=null,_=null,A=null,T=null,S=new rt(0,0,0),E=0,w=!1,v=null,R=null,N=null,D=null,z=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Z=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=Z>=2);let lt=null,dt={};const bt=s.getParameter(s.SCISSOR_BOX),Gt=s.getParameter(s.VIEWPORT),$t=new de().fromArray(bt),J=new de().fromArray(Gt);function at(O,pt,j,it){const _t=new Uint8Array(4),xt=s.createTexture();s.bindTexture(O,xt),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<j;Ht++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(pt,0,s.RGBA,1,1,it,0,s.RGBA,s.UNSIGNED_BYTE,_t):s.texImage2D(pt+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_t);return xt}const yt={};yt[s.TEXTURE_2D]=at(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=at(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=at(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=at(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ht(s.DEPTH_TEST),r.setFunc(no),jt(!1),Kt(Jh),ht(s.CULL_FACE),F(_i);function ht(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function Nt(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function Bt(O,pt){return f[O]!==pt?(s.bindFramebuffer(O,pt),f[O]=pt,O===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=pt),O===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=pt),!0):!1}function qt(O,pt){let j=d,it=!1;if(O){j=u.get(pt),j===void 0&&(j=[],u.set(pt,j));const _t=O.textures;if(j.length!==_t.length||j[0]!==s.COLOR_ATTACHMENT0){for(let xt=0,Ht=_t.length;xt<Ht;xt++)j[xt]=s.COLOR_ATTACHMENT0+xt;j.length=_t.length,it=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,it=!0);it&&s.drawBuffers(j)}function Me(O){return g!==O?(s.useProgram(O),g=O,!0):!1}const Qt={[os]:s.FUNC_ADD,[Ap]:s.FUNC_SUBTRACT,[Rp]:s.FUNC_REVERSE_SUBTRACT};Qt[Cp]=s.MIN,Qt[Pp]=s.MAX;const Te={[Ip]:s.ZERO,[Lp]:s.ONE,[Dp]:s.SRC_COLOR,[Zc]:s.SRC_ALPHA,[Bp]:s.SRC_ALPHA_SATURATE,[zp]:s.DST_COLOR,[Np]:s.DST_ALPHA,[Up]:s.ONE_MINUS_SRC_COLOR,[$c]:s.ONE_MINUS_SRC_ALPHA,[Op]:s.ONE_MINUS_DST_COLOR,[Fp]:s.ONE_MINUS_DST_ALPHA,[kp]:s.CONSTANT_COLOR,[Gp]:s.ONE_MINUS_CONSTANT_COLOR,[Hp]:s.CONSTANT_ALPHA,[Vp]:s.ONE_MINUS_CONSTANT_ALPHA};function F(O,pt,j,it,_t,xt,Ht,we,He,le){if(O===_i){M===!0&&(Nt(s.BLEND),M=!1);return}if(M===!1&&(ht(s.BLEND),M=!0),O!==Ep){if(O!==p||le!==w){if((m!==os||_!==os)&&(s.blendEquation(s.FUNC_ADD),m=os,_=os),le)switch(O){case Ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bi:s.blendFunc(s.ONE,s.ONE);break;case Qh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Qh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,x=null,A=null,T=null,S.set(0,0,0),E=0,p=O,w=le}return}_t=_t||pt,xt=xt||j,Ht=Ht||it,(pt!==m||_t!==_)&&(s.blendEquationSeparate(Qt[pt],Qt[_t]),m=pt,_=_t),(j!==y||it!==x||xt!==A||Ht!==T)&&(s.blendFuncSeparate(Te[j],Te[it],Te[xt],Te[Ht]),y=j,x=it,A=xt,T=Ht),(we.equals(S)===!1||He!==E)&&(s.blendColor(we.r,we.g,we.b,He),S.copy(we),E=He),p=O,w=!1}function Rn(O,pt){O.side===Ot?Nt(s.CULL_FACE):ht(s.CULL_FACE);let j=O.side===rn;pt&&(j=!j),jt(j),O.blending===Ys&&O.transparent===!1?F(_i):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),o.setMask(O.colorWrite);const it=O.stencilWrite;a.setTest(it),it&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),xe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ht(s.SAMPLE_ALPHA_TO_COVERAGE):Nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function jt(O){v!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),v=O)}function Kt(O){O!==bp?(ht(s.CULL_FACE),O!==R&&(O===Jh?s.cullFace(s.BACK):O===Tp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Nt(s.CULL_FACE),R=O}function It(O){O!==N&&(V&&s.lineWidth(O),N=O)}function xe(O,pt,j){O?(ht(s.POLYGON_OFFSET_FILL),(D!==pt||z!==j)&&(s.polygonOffset(pt,j),D=pt,z=j)):Nt(s.POLYGON_OFFSET_FILL)}function Pt(O){O?ht(s.SCISSOR_TEST):Nt(s.SCISSOR_TEST)}function L(O){O===void 0&&(O=s.TEXTURE0+H-1),lt!==O&&(s.activeTexture(O),lt=O)}function C(O,pt,j){j===void 0&&(lt===null?j=s.TEXTURE0+H-1:j=lt);let it=dt[j];it===void 0&&(it={type:void 0,texture:void 0},dt[j]=it),(it.type!==O||it.texture!==pt)&&(lt!==j&&(s.activeTexture(j),lt=j),s.bindTexture(O,pt||yt[O]),it.type=O,it.texture=pt)}function X(){const O=dt[lt];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function nt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function tt(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ft(O){$t.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),$t.copy(O))}function Et(O){J.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),J.copy(O))}function Jt(O,pt){let j=l.get(pt);j===void 0&&(j=new WeakMap,l.set(pt,j));let it=j.get(O);it===void 0&&(it=s.getUniformBlockIndex(pt,O.name),j.set(O,it))}function Xt(O,pt){const it=l.get(pt).get(O);c.get(pt)!==it&&(s.uniformBlockBinding(pt,it,O.__bindingPointIndex),c.set(pt,it))}function me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},lt=null,dt={},f={},u=new WeakMap,d=[],g=null,M=!1,p=null,m=null,y=null,x=null,_=null,A=null,T=null,S=new rt(0,0,0),E=0,w=!1,v=null,R=null,N=null,D=null,z=null,$t.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:ht,disable:Nt,bindFramebuffer:Bt,drawBuffers:qt,useProgram:Me,setBlending:F,setMaterial:Rn,setFlipSided:jt,setCullFace:Kt,setLineWidth:It,setPolygonOffset:xe,setScissorTest:Pt,activeTexture:L,bindTexture:C,unbindTexture:X,compressedTexImage2D:nt,compressedTexImage3D:st,texImage2D:Tt,texImage3D:Ut,updateUBOMapping:Jt,uniformBlockBinding:Xt,texStorage2D:te,texStorage3D:ct,texSubImage2D:tt,texSubImage3D:Rt,compressedTexSubImage2D:gt,compressedTexSubImage3D:St,scissor:Ft,viewport:Et,reset:me}}function Zv(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ut,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,C){return d?new OffscreenCanvas(L,C):fa("canvas")}function M(L,C,X){let nt=1;const st=Pt(L);if((st.width>X||st.height>X)&&(nt=X/Math.max(st.width,st.height)),nt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const tt=Math.floor(nt*st.width),Rt=Math.floor(nt*st.height);f===void 0&&(f=g(tt,Rt));const gt=C?g(tt,Rt):f;return gt.width=tt,gt.height=Rt,gt.getContext("2d").drawImage(L,0,0,tt,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+tt+"x"+Rt+")."),gt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),L;return L}function p(L){return L.generateMipmaps}function m(L){s.generateMipmap(L)}function y(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(L,C,X,nt,st=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let tt=C;if(C===s.RED&&(X===s.FLOAT&&(tt=s.R32F),X===s.HALF_FLOAT&&(tt=s.R16F),X===s.UNSIGNED_BYTE&&(tt=s.R8)),C===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(tt=s.R8UI),X===s.UNSIGNED_SHORT&&(tt=s.R16UI),X===s.UNSIGNED_INT&&(tt=s.R32UI),X===s.BYTE&&(tt=s.R8I),X===s.SHORT&&(tt=s.R16I),X===s.INT&&(tt=s.R32I)),C===s.RG&&(X===s.FLOAT&&(tt=s.RG32F),X===s.HALF_FLOAT&&(tt=s.RG16F),X===s.UNSIGNED_BYTE&&(tt=s.RG8)),C===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(tt=s.RG8UI),X===s.UNSIGNED_SHORT&&(tt=s.RG16UI),X===s.UNSIGNED_INT&&(tt=s.RG32UI),X===s.BYTE&&(tt=s.RG8I),X===s.SHORT&&(tt=s.RG16I),X===s.INT&&(tt=s.RG32I)),C===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(tt=s.RGB8UI),X===s.UNSIGNED_SHORT&&(tt=s.RGB16UI),X===s.UNSIGNED_INT&&(tt=s.RGB32UI),X===s.BYTE&&(tt=s.RGB8I),X===s.SHORT&&(tt=s.RGB16I),X===s.INT&&(tt=s.RGB32I)),C===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(tt=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(tt=s.RGBA16UI),X===s.UNSIGNED_INT&&(tt=s.RGBA32UI),X===s.BYTE&&(tt=s.RGBA8I),X===s.SHORT&&(tt=s.RGBA16I),X===s.INT&&(tt=s.RGBA32I)),C===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(tt=s.RGB9_E5),C===s.RGBA){const Rt=st?ha:oe.getTransfer(nt);X===s.FLOAT&&(tt=s.RGBA32F),X===s.HALF_FLOAT&&(tt=s.RGBA16F),X===s.UNSIGNED_BYTE&&(tt=Rt===fe?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function _(L,C){let X;return L?C===null||C===ps||C===oo?X=s.DEPTH24_STENCIL8:C===ei?X=s.DEPTH32F_STENCIL8:C===$o&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===ps||C===oo?X=s.DEPTH_COMPONENT24:C===ei?X=s.DEPTH_COMPONENT32F:C===$o&&(X=s.DEPTH_COMPONENT16),X}function A(L,C){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==An&&L.minFilter!==ti?Math.log2(Math.max(C.width,C.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?C.mipmaps.length:1}function T(L){const C=L.target;C.removeEventListener("dispose",T),E(C),C.isVideoTexture&&h.delete(C)}function S(L){const C=L.target;C.removeEventListener("dispose",S),v(C)}function E(L){const C=n.get(L);if(C.__webglInit===void 0)return;const X=L.source,nt=u.get(X);if(nt){const st=nt[C.__cacheKey];st.usedTimes--,st.usedTimes===0&&w(L),Object.keys(nt).length===0&&u.delete(X)}n.remove(L)}function w(L){const C=n.get(L);s.deleteTexture(C.__webglTexture);const X=L.source,nt=u.get(X);delete nt[C.__cacheKey],r.memory.textures--}function v(L){const C=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(C.__webglFramebuffer[nt]))for(let st=0;st<C.__webglFramebuffer[nt].length;st++)s.deleteFramebuffer(C.__webglFramebuffer[nt][st]);else s.deleteFramebuffer(C.__webglFramebuffer[nt]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[nt])}else{if(Array.isArray(C.__webglFramebuffer))for(let nt=0;nt<C.__webglFramebuffer.length;nt++)s.deleteFramebuffer(C.__webglFramebuffer[nt]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let nt=0;nt<C.__webglColorRenderbuffer.length;nt++)C.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[nt]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const X=L.textures;for(let nt=0,st=X.length;nt<st;nt++){const tt=n.get(X[nt]);tt.__webglTexture&&(s.deleteTexture(tt.__webglTexture),r.memory.textures--),n.remove(X[nt])}n.remove(L)}let R=0;function N(){R=0}function D(){const L=R;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),R+=1,L}function z(L){const C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.wrapR||0),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.colorSpace),C.join()}function H(L,C){const X=n.get(L);if(L.isVideoTexture&&It(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const nt=L.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(X,L,C);return}}e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+C)}function V(L,C){const X=n.get(L);if(L.version>0&&X.__version!==L.version){J(X,L,C);return}e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+C)}function Z(L,C){const X=n.get(L);if(L.version>0&&X.__version!==L.version){J(X,L,C);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+C)}function W(L,C){const X=n.get(L);if(L.version>0&&X.__version!==L.version){at(X,L,C);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+C)}const lt={[la]:s.REPEAT,[as]:s.CLAMP_TO_EDGE,[ol]:s.MIRRORED_REPEAT},dt={[An]:s.NEAREST,[Jp]:s.NEAREST_MIPMAP_NEAREST,[hr]:s.NEAREST_MIPMAP_LINEAR,[ti]:s.LINEAR,[Ha]:s.LINEAR_MIPMAP_NEAREST,[cs]:s.LINEAR_MIPMAP_LINEAR},bt={[n0]:s.NEVER,[c0]:s.ALWAYS,[i0]:s.LESS,[Yf]:s.LEQUAL,[s0]:s.EQUAL,[a0]:s.GEQUAL,[o0]:s.GREATER,[r0]:s.NOTEQUAL};function Gt(L,C){if(C.type===ei&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===ti||C.magFilter===Ha||C.magFilter===hr||C.magFilter===cs||C.minFilter===ti||C.minFilter===Ha||C.minFilter===hr||C.minFilter===cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,lt[C.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,lt[C.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,lt[C.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,dt[C.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,dt[C.minFilter]),C.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,bt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===An||C.minFilter!==hr&&C.minFilter!==cs||C.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function $t(L,C){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",T));const nt=C.source;let st=u.get(nt);st===void 0&&(st={},u.set(nt,st));const tt=z(C);if(tt!==L.__cacheKey){st[tt]===void 0&&(st[tt]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,X=!0),st[tt].usedTimes++;const Rt=st[L.__cacheKey];Rt!==void 0&&(st[L.__cacheKey].usedTimes--,Rt.usedTimes===0&&w(C)),L.__cacheKey=tt,L.__webglTexture=st[tt].texture}return X}function J(L,C,X){let nt=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(nt=s.TEXTURE_3D);const st=$t(L,C),tt=C.source;e.bindTexture(nt,L.__webglTexture,s.TEXTURE0+X);const Rt=n.get(tt);if(tt.version!==Rt.__version||st===!0){e.activeTexture(s.TEXTURE0+X);const gt=oe.getPrimaries(oe.workingColorSpace),St=C.colorSpace===Ui?null:oe.getPrimaries(C.colorSpace),te=C.colorSpace===Ui||gt===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let ct=M(C.image,!1,i.maxTextureSize);ct=xe(C,ct);const Tt=o.convert(C.format,C.colorSpace),Ut=o.convert(C.type);let Ft=x(C.internalFormat,Tt,Ut,C.colorSpace,C.isVideoTexture);Gt(nt,C);let Et;const Jt=C.mipmaps,Xt=C.isVideoTexture!==!0,me=Rt.__version===void 0||st===!0,O=tt.dataReady,pt=A(C,ct);if(C.isDepthTexture)Ft=_(C.format===ro,C.type),me&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,Ft,ct.width,ct.height):e.texImage2D(s.TEXTURE_2D,0,Ft,ct.width,ct.height,0,Tt,Ut,null));else if(C.isDataTexture)if(Jt.length>0){Xt&&me&&e.texStorage2D(s.TEXTURE_2D,pt,Ft,Jt[0].width,Jt[0].height);for(let j=0,it=Jt.length;j<it;j++)Et=Jt[j],Xt?O&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,Et.width,Et.height,Tt,Ut,Et.data):e.texImage2D(s.TEXTURE_2D,j,Ft,Et.width,Et.height,0,Tt,Ut,Et.data);C.generateMipmaps=!1}else Xt?(me&&e.texStorage2D(s.TEXTURE_2D,pt,Ft,ct.width,ct.height),O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct.width,ct.height,Tt,Ut,ct.data)):e.texImage2D(s.TEXTURE_2D,0,Ft,ct.width,ct.height,0,Tt,Ut,ct.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Xt&&me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,Ft,Jt[0].width,Jt[0].height,ct.depth);for(let j=0,it=Jt.length;j<it;j++)if(Et=Jt[j],C.format!==Hn)if(Tt!==null)if(Xt){if(O)if(C.layerUpdates.size>0){const _t=zu(Et.width,Et.height,C.format,C.type);for(const xt of C.layerUpdates){const Ht=Et.data.subarray(xt*_t/Et.data.BYTES_PER_ELEMENT,(xt+1)*_t/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,xt,Et.width,Et.height,1,Tt,Ht)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,Et.width,Et.height,ct.depth,Tt,Et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,Ft,Et.width,Et.height,ct.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?O&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,Et.width,Et.height,ct.depth,Tt,Ut,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,Ft,Et.width,Et.height,ct.depth,0,Tt,Ut,Et.data)}else{Xt&&me&&e.texStorage2D(s.TEXTURE_2D,pt,Ft,Jt[0].width,Jt[0].height);for(let j=0,it=Jt.length;j<it;j++)Et=Jt[j],C.format!==Hn?Tt!==null?Xt?O&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,Et.width,Et.height,Tt,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,j,Ft,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?O&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,Et.width,Et.height,Tt,Ut,Et.data):e.texImage2D(s.TEXTURE_2D,j,Ft,Et.width,Et.height,0,Tt,Ut,Et.data)}else if(C.isDataArrayTexture)if(Xt){if(me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,Ft,ct.width,ct.height,ct.depth),O)if(C.layerUpdates.size>0){const j=zu(ct.width,ct.height,C.format,C.type);for(const it of C.layerUpdates){const _t=ct.data.subarray(it*j/ct.data.BYTES_PER_ELEMENT,(it+1)*j/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,ct.width,ct.height,1,Tt,Ut,_t)}C.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Tt,Ut,ct.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ft,ct.width,ct.height,ct.depth,0,Tt,Ut,ct.data);else if(C.isData3DTexture)Xt?(me&&e.texStorage3D(s.TEXTURE_3D,pt,Ft,ct.width,ct.height,ct.depth),O&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Tt,Ut,ct.data)):e.texImage3D(s.TEXTURE_3D,0,Ft,ct.width,ct.height,ct.depth,0,Tt,Ut,ct.data);else if(C.isFramebufferTexture){if(me)if(Xt)e.texStorage2D(s.TEXTURE_2D,pt,Ft,ct.width,ct.height);else{let j=ct.width,it=ct.height;for(let _t=0;_t<pt;_t++)e.texImage2D(s.TEXTURE_2D,_t,Ft,j,it,0,Tt,Ut,null),j>>=1,it>>=1}}else if(Jt.length>0){if(Xt&&me){const j=Pt(Jt[0]);e.texStorage2D(s.TEXTURE_2D,pt,Ft,j.width,j.height)}for(let j=0,it=Jt.length;j<it;j++)Et=Jt[j],Xt?O&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,Tt,Ut,Et):e.texImage2D(s.TEXTURE_2D,j,Ft,Tt,Ut,Et);C.generateMipmaps=!1}else if(Xt){if(me){const j=Pt(ct);e.texStorage2D(s.TEXTURE_2D,pt,Ft,j.width,j.height)}O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Tt,Ut,ct)}else e.texImage2D(s.TEXTURE_2D,0,Ft,Tt,Ut,ct);p(C)&&m(nt),Rt.__version=tt.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function at(L,C,X){if(C.image.length!==6)return;const nt=$t(L,C),st=C.source;e.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+X);const tt=n.get(st);if(st.version!==tt.__version||nt===!0){e.activeTexture(s.TEXTURE0+X);const Rt=oe.getPrimaries(oe.workingColorSpace),gt=C.colorSpace===Ui?null:oe.getPrimaries(C.colorSpace),St=C.colorSpace===Ui||Rt===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const te=C.isCompressedTexture||C.image[0].isCompressedTexture,ct=C.image[0]&&C.image[0].isDataTexture,Tt=[];for(let it=0;it<6;it++)!te&&!ct?Tt[it]=M(C.image[it],!0,i.maxCubemapSize):Tt[it]=ct?C.image[it].image:C.image[it],Tt[it]=xe(C,Tt[it]);const Ut=Tt[0],Ft=o.convert(C.format,C.colorSpace),Et=o.convert(C.type),Jt=x(C.internalFormat,Ft,Et,C.colorSpace),Xt=C.isVideoTexture!==!0,me=tt.__version===void 0||nt===!0,O=st.dataReady;let pt=A(C,Ut);Gt(s.TEXTURE_CUBE_MAP,C);let j;if(te){Xt&&me&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Jt,Ut.width,Ut.height);for(let it=0;it<6;it++){j=Tt[it].mipmaps;for(let _t=0;_t<j.length;_t++){const xt=j[_t];C.format!==Hn?Ft!==null?Xt?O&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,0,0,xt.width,xt.height,Ft,xt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,Jt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,0,0,xt.width,xt.height,Ft,Et,xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t,Jt,xt.width,xt.height,0,Ft,Et,xt.data)}}}else{if(j=C.mipmaps,Xt&&me){j.length>0&&pt++;const it=Pt(Tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Jt,it.width,it.height)}for(let it=0;it<6;it++)if(ct){Xt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Tt[it].width,Tt[it].height,Ft,Et,Tt[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Jt,Tt[it].width,Tt[it].height,0,Ft,Et,Tt[it].data);for(let _t=0;_t<j.length;_t++){const Ht=j[_t].image[it].image;Xt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,0,0,Ht.width,Ht.height,Ft,Et,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,Jt,Ht.width,Ht.height,0,Ft,Et,Ht.data)}}else{Xt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ft,Et,Tt[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Jt,Ft,Et,Tt[it]);for(let _t=0;_t<j.length;_t++){const xt=j[_t];Xt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,0,0,Ft,Et,xt.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,_t+1,Jt,Ft,Et,xt.image[it])}}}p(C)&&m(s.TEXTURE_CUBE_MAP),tt.__version=st.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function yt(L,C,X,nt,st,tt){const Rt=o.convert(X.format,X.colorSpace),gt=o.convert(X.type),St=x(X.internalFormat,Rt,gt,X.colorSpace),te=n.get(C),ct=n.get(X);if(ct.__renderTarget=C,!te.__hasExternalTextures){const Tt=Math.max(1,C.width>>tt),Ut=Math.max(1,C.height>>tt);st===s.TEXTURE_3D||st===s.TEXTURE_2D_ARRAY?e.texImage3D(st,tt,St,Tt,Ut,C.depth,0,Rt,gt,null):e.texImage2D(st,tt,St,Tt,Ut,0,Rt,gt,null)}e.bindFramebuffer(s.FRAMEBUFFER,L),Kt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,st,ct.__webglTexture,0,jt(C)):(st===s.TEXTURE_2D||st>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,st,ct.__webglTexture,tt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(L,C,X){if(s.bindRenderbuffer(s.RENDERBUFFER,L),C.depthBuffer){const nt=C.depthTexture,st=nt&&nt.isDepthTexture?nt.type:null,tt=_(C.stencilBuffer,st),Rt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=jt(C);Kt(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt,tt,C.width,C.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,tt,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,tt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Rt,s.RENDERBUFFER,L)}else{const nt=C.textures;for(let st=0;st<nt.length;st++){const tt=nt[st],Rt=o.convert(tt.format,tt.colorSpace),gt=o.convert(tt.type),St=x(tt.internalFormat,Rt,gt,tt.colorSpace),te=jt(C);X&&Kt(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,te,St,C.width,C.height):Kt(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,St,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,St,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Nt(L,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,L),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=n.get(C.depthTexture);nt.__renderTarget=C,(!nt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),H(C.depthTexture,0);const st=nt.__webglTexture,tt=jt(C);if(C.depthTexture.format===qs)Kt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0);else if(C.depthTexture.format===ro)Kt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Bt(L){const C=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==L.depthTexture){const nt=L.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),nt){const st=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,nt.removeEventListener("dispose",st)};nt.addEventListener("dispose",st),C.__depthDisposeCallback=st}C.__boundDepthTexture=nt}if(L.depthTexture&&!C.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Nt(C.__webglFramebuffer,L)}else if(X){C.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[nt]),C.__webglDepthbuffer[nt]===void 0)C.__webglDepthbuffer[nt]=s.createRenderbuffer(),ht(C.__webglDepthbuffer[nt],L,!1);else{const st=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=C.__webglDepthbuffer[nt];s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),ht(C.__webglDepthbuffer,L,!1);else{const nt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,st)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(L,C,X){const nt=n.get(L);C!==void 0&&yt(nt.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Bt(L)}function Me(L){const C=L.texture,X=n.get(L),nt=n.get(C);L.addEventListener("dispose",S);const st=L.textures,tt=L.isWebGLCubeRenderTarget===!0,Rt=st.length>1;if(Rt||(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=C.version,r.memory.textures++),tt){X.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer[gt]=[];for(let St=0;St<C.mipmaps.length;St++)X.__webglFramebuffer[gt][St]=s.createFramebuffer()}else X.__webglFramebuffer[gt]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer=[];for(let gt=0;gt<C.mipmaps.length;gt++)X.__webglFramebuffer[gt]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Rt)for(let gt=0,St=st.length;gt<St;gt++){const te=n.get(st[gt]);te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture(),r.memory.textures++)}if(L.samples>0&&Kt(L)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let gt=0;gt<st.length;gt++){const St=st[gt];X.__webglColorRenderbuffer[gt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[gt]);const te=o.convert(St.format,St.colorSpace),ct=o.convert(St.type),Tt=x(St.internalFormat,te,ct,St.colorSpace,L.isXRRenderTarget===!0),Ut=jt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,Tt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,X.__webglColorRenderbuffer[gt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),ht(X.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(tt){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),Gt(s.TEXTURE_CUBE_MAP,C);for(let gt=0;gt<6;gt++)if(C.mipmaps&&C.mipmaps.length>0)for(let St=0;St<C.mipmaps.length;St++)yt(X.__webglFramebuffer[gt][St],L,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,St);else yt(X.__webglFramebuffer[gt],L,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);p(C)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let gt=0,St=st.length;gt<St;gt++){const te=st[gt],ct=n.get(te);e.bindTexture(s.TEXTURE_2D,ct.__webglTexture),Gt(s.TEXTURE_2D,te),yt(X.__webglFramebuffer,L,te,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,0),p(te)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let gt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(gt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(gt,nt.__webglTexture),Gt(gt,C),C.mipmaps&&C.mipmaps.length>0)for(let St=0;St<C.mipmaps.length;St++)yt(X.__webglFramebuffer[St],L,C,s.COLOR_ATTACHMENT0,gt,St);else yt(X.__webglFramebuffer,L,C,s.COLOR_ATTACHMENT0,gt,0);p(C)&&m(gt),e.unbindTexture()}L.depthBuffer&&Bt(L)}function Qt(L){const C=L.textures;for(let X=0,nt=C.length;X<nt;X++){const st=C[X];if(p(st)){const tt=y(L),Rt=n.get(st).__webglTexture;e.bindTexture(tt,Rt),m(tt),e.unbindTexture()}}}const Te=[],F=[];function Rn(L){if(L.samples>0){if(Kt(L)===!1){const C=L.textures,X=L.width,nt=L.height;let st=s.COLOR_BUFFER_BIT;const tt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=n.get(L),gt=C.length>1;if(gt)for(let St=0;St<C.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let St=0;St<C.length;St++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(st|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(st|=s.STENCIL_BUFFER_BIT)),gt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[St]);const te=n.get(C[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,X,nt,0,0,X,nt,st,s.NEAREST),c===!0&&(Te.length=0,F.length=0,Te.push(s.COLOR_ATTACHMENT0+St),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Te.push(tt),F.push(tt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Te))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),gt)for(let St=0;St<C.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[St]);const te=n.get(C[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,te,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const C=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function jt(L){return Math.min(i.maxSamples,L.samples)}function Kt(L){const C=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function It(L){const C=r.render.frame;h.get(L)!==C&&(h.set(L,C),L.update())}function xe(L,C){const X=L.colorSpace,nt=L.format,st=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==ao&&X!==Ui&&(oe.getTransfer(X)===fe?(nt!==Hn||st!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),C}function Pt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=N,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=qt,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Rn,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Kt}function $v(s,t){function e(n,i=Ui){let o;const r=oe.getTransfer(i);if(n===wi)return s.UNSIGNED_BYTE;if(n===vh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Mh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Of)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ff)return s.BYTE;if(n===zf)return s.SHORT;if(n===$o)return s.UNSIGNED_SHORT;if(n===_h)return s.INT;if(n===ps)return s.UNSIGNED_INT;if(n===ei)return s.FLOAT;if(n===vi)return s.HALF_FLOAT;if(n===Bf)return s.ALPHA;if(n===kf)return s.RGB;if(n===Hn)return s.RGBA;if(n===Gf)return s.LUMINANCE;if(n===Hf)return s.LUMINANCE_ALPHA;if(n===qs)return s.DEPTH_COMPONENT;if(n===ro)return s.DEPTH_STENCIL;if(n===yh)return s.RED;if(n===wh)return s.RED_INTEGER;if(n===Vf)return s.RG;if(n===Sh)return s.RG_INTEGER;if(n===bh)return s.RGBA_INTEGER;if(n===$r||n===jr||n===Kr||n===Jr)if(r===fe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===$r)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===$r)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rl||n===al||n===cl||n===ll)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===rl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===al)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ll)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hl||n===ul||n===fl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===hl||n===ul)return r===fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===fl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===dl||n===pl||n===ml||n===gl||n===xl||n===_l||n===vl||n===Ml||n===yl||n===wl||n===Sl||n===bl||n===Tl||n===El)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===dl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ml)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_l)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ml)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tl)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===El)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qr||n===Al||n===Rl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Qr)return r===fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Al)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wf||n===Cl||n===Pl||n===Il)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Qr)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Cl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Il)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===oo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const jv={type:"move"};class Sc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const M of t.hand.values()){const p=e.getJointPose(M,n),m=this._getHandJoint(l,M);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jv)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Kv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jv=`
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

}`;class Qv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new qe,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new gn({vertexShader:Kv,fragmentShader:Jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new I(new ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tM extends mo{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null;const M=new Qv,p=e.getContextAttributes();let m=null,y=null;const x=[],_=[],A=new ut;let T=null;const S=new bn;S.viewport=new de;const E=new bn;E.viewport=new de;const w=[S,E],v=new ym;let R=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let at=x[J];return at===void 0&&(at=new Sc,x[J]=at),at.getTargetRaySpace()},this.getControllerGrip=function(J){let at=x[J];return at===void 0&&(at=new Sc,x[J]=at),at.getGripSpace()},this.getHand=function(J){let at=x[J];return at===void 0&&(at=new Sc,x[J]=at),at.getHandSpace()};function D(J){const at=_.indexOf(J.inputSource);if(at===-1)return;const yt=x[at];yt!==void 0&&(yt.update(J.inputSource,J.frame,l||r),yt.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",H);for(let J=0;J<x.length;J++){const at=_[J];at!==null&&(_[J]=null,x[J].disconnect(at))}R=null,N=null,M.reset(),t.setRenderTarget(m),d=null,u=null,f=null,i=null,y=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",z),i.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(A),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let yt=null,ht=null,Nt=null;p.depth&&(Nt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=p.stencil?ro:qs,ht=p.stencil?oo:ps);const Bt={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:o};f=new XRWebGLBinding(i,e),u=f.createProjectionLayer(Bt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Vn(u.textureWidth,u.textureHeight,{format:Hn,type:wi,depthTexture:new od(u.textureWidth,u.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}else{const yt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(i,e,yt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Vn(d.framebufferWidth,d.framebufferHeight,{format:Hn,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(J){for(let at=0;at<J.removed.length;at++){const yt=J.removed[at],ht=_.indexOf(yt);ht>=0&&(_[ht]=null,x[ht].disconnect(yt))}for(let at=0;at<J.added.length;at++){const yt=J.added[at];let ht=_.indexOf(yt);if(ht===-1){for(let Bt=0;Bt<x.length;Bt++)if(Bt>=_.length){_.push(yt),ht=Bt;break}else if(_[Bt]===null){_[Bt]=yt,ht=Bt;break}if(ht===-1)break}const Nt=x[ht];Nt&&Nt.connect(yt)}}const V=new U,Z=new U;function W(J,at,yt){V.setFromMatrixPosition(at.matrixWorld),Z.setFromMatrixPosition(yt.matrixWorld);const ht=V.distanceTo(Z),Nt=at.projectionMatrix.elements,Bt=yt.projectionMatrix.elements,qt=Nt[14]/(Nt[10]-1),Me=Nt[14]/(Nt[10]+1),Qt=(Nt[9]+1)/Nt[5],Te=(Nt[9]-1)/Nt[5],F=(Nt[8]-1)/Nt[0],Rn=(Bt[8]+1)/Bt[0],jt=qt*F,Kt=qt*Rn,It=ht/(-F+Rn),xe=It*-F;if(at.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(xe),J.translateZ(It),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Nt[10]===-1)J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Pt=qt+It,L=Me+It,C=jt-xe,X=Kt+(ht-xe),nt=Qt*Me/L*Pt,st=Te*Me/L*Pt;J.projectionMatrix.makePerspective(C,X,nt,st,Pt,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function lt(J,at){at===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(at.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let at=J.near,yt=J.far;M.texture!==null&&(M.depthNear>0&&(at=M.depthNear),M.depthFar>0&&(yt=M.depthFar)),v.near=E.near=S.near=at,v.far=E.far=S.far=yt,(R!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,N=v.far),S.layers.mask=J.layers.mask|2,E.layers.mask=J.layers.mask|4,v.layers.mask=S.layers.mask|E.layers.mask;const ht=J.parent,Nt=v.cameras;lt(v,ht);for(let Bt=0;Bt<Nt.length;Bt++)lt(Nt[Bt],ht);Nt.length===2?W(v,S,E):v.projectionMatrix.copy(S.projectionMatrix),dt(J,v,ht)};function dt(J,at,yt){yt===null?J.matrix.copy(at.matrixWorld):(J.matrix.copy(yt.matrixWorld),J.matrix.invert(),J.matrix.multiply(at.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ll*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(v)};let bt=null;function Gt(J,at){if(h=at.getViewerPose(l||r),g=at,h!==null){const yt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let ht=!1;yt.length!==v.cameras.length&&(v.cameras.length=0,ht=!0);for(let Bt=0;Bt<yt.length;Bt++){const qt=yt[Bt];let Me=null;if(d!==null)Me=d.getViewport(qt);else{const Te=f.getViewSubImage(u,qt);Me=Te.viewport,Bt===0&&(t.setRenderTargetTextures(y,Te.colorTexture,u.ignoreDepthValues?void 0:Te.depthStencilTexture),t.setRenderTarget(y))}let Qt=w[Bt];Qt===void 0&&(Qt=new bn,Qt.layers.enable(Bt),Qt.viewport=new de,w[Bt]=Qt),Qt.matrix.fromArray(qt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(qt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(Me.x,Me.y,Me.width,Me.height),Bt===0&&(v.matrix.copy(Qt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ht===!0&&v.cameras.push(Qt)}const Nt=i.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Bt=f.getDepthInformation(yt[0]);Bt&&Bt.isValid&&Bt.texture&&M.init(t,Bt,i.renderState)}}for(let yt=0;yt<x.length;yt++){const ht=_[yt],Nt=x[yt];ht!==null&&Nt!==void 0&&Nt.update(ht,at,l||r)}bt&&bt(J,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const $t=new xd;$t.setAnimationLoop(Gt),this.setAnimationLoop=function(J){bt=J},this.dispose=function(){}}}const qi=new ii,eM=new ue;function nM(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,td(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,x,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(p,m):m.isMeshToonMaterial?(o(p,m),f(p,m)):m.isMeshPhongMaterial?(o(p,m),h(p,m)):m.isMeshStandardMaterial?(o(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,_)):m.isMeshMatcapMaterial?(o(p,m),g(p,m)):m.isMeshDepthMaterial?o(p,m):m.isMeshDistanceMaterial?(o(p,m),M(p,m)):m.isMeshNormalMaterial?o(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,y,x):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===rn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===rn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),x=y.envMap,_=y.envMapRotation;x&&(p.envMap.value=x,qi.copy(_),qi.x*=-1,qi.y*=-1,qi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),p.envMapRotation.value.setFromMatrix4(eM.makeRotationFromEuler(qi)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,y,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function M(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function iM(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const _=x.program;n.uniformBlockBinding(y,_)}function l(y,x){let _=i[y.id];_===void 0&&(g(y),_=h(y),i[y.id]=_,y.addEventListener("dispose",p));const A=x.program;n.updateUBOMapping(y,A);const T=t.render.frame;o[y.id]!==T&&(u(y),o[y.id]=T)}function h(y){const x=f();y.__bindingPointIndex=x;const _=s.createBuffer(),A=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,A,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,_),_}function f(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const x=i[y.id],_=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,S=_.length;T<S;T++){const E=Array.isArray(_[T])?_[T]:[_[T]];for(let w=0,v=E.length;w<v;w++){const R=E[w];if(d(R,T,w,A)===!0){const N=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let H=0;H<D.length;H++){const V=D[H],Z=M(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,N+z,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,z),z+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,x,_,A){const T=y.value,S=x+"_"+_;if(A[S]===void 0)return typeof T=="number"||typeof T=="boolean"?A[S]=T:A[S]=T.clone(),!0;{const E=A[S];if(typeof T=="number"||typeof T=="boolean"){if(E!==T)return A[S]=T,!0}else if(E.equals(T)===!1)return E.copy(T),!0}return!1}function g(y){const x=y.uniforms;let _=0;const A=16;for(let S=0,E=x.length;S<E;S++){const w=Array.isArray(x[S])?x[S]:[x[S]];for(let v=0,R=w.length;v<R;v++){const N=w[v],D=Array.isArray(N.value)?N.value:[N.value];for(let z=0,H=D.length;z<H;z++){const V=D[z],Z=M(V),W=_%A,lt=W%Z.boundary,dt=W+lt;_+=lt,dt!==0&&A-dt<Z.storage&&(_+=A-dt),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=Z.storage}}}const T=_%A;return T>0&&(_+=A-T),y.__size=_,y.__cache={},this}function M(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const _=r.indexOf(x.__bindingPointIndex);r.splice(_,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete o[x.id]}function m(){for(const y in i)s.deleteBuffer(i[y]);r=[],i={},o={}}return{bind:c,update:l,dispose:m}}class sM{constructor(t={}){const{canvas:e=h0(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const g=new Uint32Array(4),M=new Int32Array(4);let p=null,m=null;const y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=zi,this.toneMappingExposure=1;const _=this;let A=!1,T=0,S=0,E=null,w=-1,v=null;const R=new de,N=new de;let D=null;const z=new rt(0);let H=0,V=e.width,Z=e.height,W=1,lt=null,dt=null;const bt=new de(0,0,V,Z),Gt=new de(0,0,V,Z);let $t=!1;const J=new Ah;let at=!1,yt=!1;this.transmissionResolutionScale=1;const ht=new ue,Nt=new ue,Bt=new U,qt=new de,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function Te(){return E===null?W:1}let F=n;function Rn(P,B){return e.getContext(P,B)}try{const P={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xh}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",xt,!1),F===null){const B="webgl2";if(F=Rn(B,P),F===null)throw Rn(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let jt,Kt,It,xe,Pt,L,C,X,nt,st,tt,Rt,gt,St,te,ct,Tt,Ut,Ft,Et,Jt,Xt,me,O;function pt(){jt=new d_(F),jt.init(),Xt=new $v(F,jt),Kt=new a_(F,jt,t,Xt),It=new qv(F,jt),Kt.reverseDepthBuffer&&u&&It.buffers.depth.setReversed(!0),xe=new g_(F),Pt=new Uv,L=new Zv(F,jt,It,Pt,Kt,Xt,xe),C=new l_(_),X=new f_(_),nt=new Sm(F),me=new o_(F,nt),st=new p_(F,nt,xe,me),tt=new __(F,st,nt,xe),Ft=new x_(F,Kt,L),ct=new c_(Pt),Rt=new Dv(_,C,X,jt,Kt,me,ct),gt=new nM(_,Pt),St=new Fv,te=new Hv(jt),Ut=new s_(_,C,X,It,tt,d,c),Tt=new Xv(_,tt,Kt),O=new iM(F,xe,Kt,It),Et=new r_(F,jt,xe),Jt=new m_(F,jt,xe),xe.programs=Rt.programs,_.capabilities=Kt,_.extensions=jt,_.properties=Pt,_.renderLists=St,_.shadowMap=Tt,_.state=It,_.info=xe}pt();const j=new tM(_,F);this.xr=j,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const P=jt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=jt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(P){P!==void 0&&(W=P,this.setSize(V,Z,!1))},this.getSize=function(P){return P.set(V,Z)},this.setSize=function(P,B,Y=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=P,Z=B,e.width=Math.floor(P*W),e.height=Math.floor(B*W),Y===!0&&(e.style.width=P+"px",e.style.height=B+"px"),this.setViewport(0,0,P,B)},this.getDrawingBufferSize=function(P){return P.set(V*W,Z*W).floor()},this.setDrawingBufferSize=function(P,B,Y){V=P,Z=B,W=Y,e.width=Math.floor(P*Y),e.height=Math.floor(B*Y),this.setViewport(0,0,P,B)},this.getCurrentViewport=function(P){return P.copy(R)},this.getViewport=function(P){return P.copy(bt)},this.setViewport=function(P,B,Y,q){P.isVector4?bt.set(P.x,P.y,P.z,P.w):bt.set(P,B,Y,q),It.viewport(R.copy(bt).multiplyScalar(W).round())},this.getScissor=function(P){return P.copy(Gt)},this.setScissor=function(P,B,Y,q){P.isVector4?Gt.set(P.x,P.y,P.z,P.w):Gt.set(P,B,Y,q),It.scissor(N.copy(Gt).multiplyScalar(W).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(P){It.setScissorTest($t=P)},this.setOpaqueSort=function(P){lt=P},this.setTransparentSort=function(P){dt=P},this.getClearColor=function(P){return P.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(P=!0,B=!0,Y=!0){let q=0;if(P){let G=!1;if(E!==null){const ot=E.texture.format;G=ot===bh||ot===Sh||ot===wh}if(G){const ot=E.texture.type,mt=ot===wi||ot===ps||ot===$o||ot===oo||ot===vh||ot===Mh,wt=Ut.getClearColor(),At=Ut.getClearAlpha(),zt=wt.r,kt=wt.g,Lt=wt.b;mt?(g[0]=zt,g[1]=kt,g[2]=Lt,g[3]=At,F.clearBufferuiv(F.COLOR,0,g)):(M[0]=zt,M[1]=kt,M[2]=Lt,M[3]=At,F.clearBufferiv(F.COLOR,0,M))}else q|=F.COLOR_BUFFER_BIT}B&&(q|=F.DEPTH_BUFFER_BIT),Y&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Ut.dispose(),St.dispose(),te.dispose(),Pt.dispose(),C.dispose(),X.dispose(),tt.dispose(),me.dispose(),O.dispose(),Rt.dispose(),j.dispose(),j.removeEventListener("sessionstart",Xh),j.removeEventListener("sessionend",Yh),ki.stop()};function it(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=xe.autoReset,B=Tt.enabled,Y=Tt.autoUpdate,q=Tt.needsUpdate,G=Tt.type;pt(),xe.autoReset=P,Tt.enabled=B,Tt.autoUpdate=Y,Tt.needsUpdate=q,Tt.type=G}function xt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ht(P){const B=P.target;B.removeEventListener("dispose",Ht),we(B)}function we(P){He(P),Pt.remove(P)}function He(P){const B=Pt.get(P).programs;B!==void 0&&(B.forEach(function(Y){Rt.releaseProgram(Y)}),P.isShaderMaterial&&Rt.releaseShaderCache(P))}this.renderBufferDirect=function(P,B,Y,q,G,ot){B===null&&(B=Me);const mt=G.isMesh&&G.matrixWorld.determinant()<0,wt=_p(P,B,Y,q,G);It.setMaterial(q,mt);let At=Y.index,zt=1;if(q.wireframe===!0){if(At=st.getWireframeAttribute(Y),At===void 0)return;zt=2}const kt=Y.drawRange,Lt=Y.attributes.position;let ee=kt.start*zt,re=(kt.start+kt.count)*zt;ot!==null&&(ee=Math.max(ee,ot.start*zt),re=Math.min(re,(ot.start+ot.count)*zt)),At!==null?(ee=Math.max(ee,0),re=Math.min(re,At.count)):Lt!=null&&(ee=Math.max(ee,0),re=Math.min(re,Lt.count));const Re=re-ee;if(Re<0||Re===1/0)return;me.setup(G,q,wt,Y,At);let Se,se=Et;if(At!==null&&(Se=nt.get(At),se=Jt,se.setIndex(Se)),G.isMesh)q.wireframe===!0?(It.setLineWidth(q.wireframeLinewidth*Te()),se.setMode(F.LINES)):se.setMode(F.TRIANGLES);else if(G.isLine){let Dt=q.linewidth;Dt===void 0&&(Dt=1),It.setLineWidth(Dt*Te()),G.isLineSegments?se.setMode(F.LINES):G.isLineLoop?se.setMode(F.LINE_LOOP):se.setMode(F.LINE_STRIP)}else G.isPoints?se.setMode(F.POINTS):G.isSprite&&se.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)se.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))se.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Dt=G._multiDrawStarts,ze=G._multiDrawCounts,ae=G._multiDrawCount,zn=At?nt.get(At).bytesPerElement:1,bs=Pt.get(q).currentProgram.getUniforms();for(let Mn=0;Mn<ae;Mn++)bs.setValue(F,"_gl_DrawID",Mn),se.render(Dt[Mn]/zn,ze[Mn])}else if(G.isInstancedMesh)se.renderInstances(ee,Re,G.count);else if(Y.isInstancedBufferGeometry){const Dt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ze=Math.min(Y.instanceCount,Dt);se.renderInstances(ee,Re,ze)}else se.render(ee,Re)};function le(P,B,Y){P.transparent===!0&&P.side===Ot&&P.forceSinglePass===!1?(P.side=rn,P.needsUpdate=!0,lr(P,B,Y),P.side=Oi,P.needsUpdate=!0,lr(P,B,Y),P.side=Ot):lr(P,B,Y)}this.compile=function(P,B,Y=null){Y===null&&(Y=P),m=te.get(Y),m.init(B),x.push(m),Y.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),P!==Y&&P.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const q=new Set;return P.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ot=G.material;if(ot)if(Array.isArray(ot))for(let mt=0;mt<ot.length;mt++){const wt=ot[mt];le(wt,Y,G),q.add(wt)}else le(ot,Y,G),q.add(ot)}),x.pop(),m=null,q},this.compileAsync=function(P,B,Y=null){const q=this.compile(P,B,Y);return new Promise(G=>{function ot(){if(q.forEach(function(mt){Pt.get(mt).currentProgram.isReady()&&q.delete(mt)}),q.size===0){G(P);return}setTimeout(ot,10)}jt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Fn=null;function ri(P){Fn&&Fn(P)}function Xh(){ki.stop()}function Yh(){ki.start()}const ki=new xd;ki.setAnimationLoop(ri),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(P){Fn=P,j.setAnimationLoop(P),P===null?ki.stop():ki.start()},j.addEventListener("sessionstart",Xh),j.addEventListener("sessionend",Yh),this.render=function(P,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(B),B=j.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,B,E),m=te.get(P,x.length),m.init(B),x.push(m),Nt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),J.setFromProjectionMatrix(Nt),yt=this.localClippingEnabled,at=ct.init(this.clippingPlanes,yt),p=St.get(P,y.length),p.init(),y.push(p),j.enabled===!0&&j.isPresenting===!0){const ot=_.xr.getDepthSensingMesh();ot!==null&&ka(ot,B,-1/0,_.sortObjects)}ka(P,B,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(lt,dt),Qt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Qt&&Ut.addToRenderList(p,P),this.info.render.frame++,at===!0&&ct.beginShadows();const Y=m.state.shadowsArray;Tt.render(Y,P,B),at===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=p.opaque,G=p.transmissive;if(m.setupLights(),B.isArrayCamera){const ot=B.cameras;if(G.length>0)for(let mt=0,wt=ot.length;mt<wt;mt++){const At=ot[mt];Zh(q,G,P,At)}Qt&&Ut.render(P);for(let mt=0,wt=ot.length;mt<wt;mt++){const At=ot[mt];qh(p,P,At,At.viewport)}}else G.length>0&&Zh(q,G,P,B),Qt&&Ut.render(P),qh(p,P,B);E!==null&&S===0&&(L.updateMultisampleRenderTarget(E),L.updateRenderTargetMipmap(E)),P.isScene===!0&&P.onAfterRender(_,P,B),me.resetDefaultState(),w=-1,v=null,x.pop(),x.length>0?(m=x[x.length-1],at===!0&&ct.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function ka(P,B,Y,q){if(P.visible===!1)return;if(P.layers.test(B.layers)){if(P.isGroup)Y=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(B);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||J.intersectsSprite(P)){q&&qt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Nt);const mt=tt.update(P),wt=P.material;wt.visible&&p.push(P,mt,wt,Y,qt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||J.intersectsObject(P))){const mt=tt.update(P),wt=P.material;if(q&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),qt.copy(P.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),qt.copy(mt.boundingSphere.center)),qt.applyMatrix4(P.matrixWorld).applyMatrix4(Nt)),Array.isArray(wt)){const At=mt.groups;for(let zt=0,kt=At.length;zt<kt;zt++){const Lt=At[zt],ee=wt[Lt.materialIndex];ee&&ee.visible&&p.push(P,mt,ee,Y,qt.z,Lt)}}else wt.visible&&p.push(P,mt,wt,Y,qt.z,null)}}const ot=P.children;for(let mt=0,wt=ot.length;mt<wt;mt++)ka(ot[mt],B,Y,q)}function qh(P,B,Y,q){const G=P.opaque,ot=P.transmissive,mt=P.transparent;m.setupLightsView(Y),at===!0&&ct.setGlobalState(_.clippingPlanes,Y),q&&It.viewport(R.copy(q)),G.length>0&&cr(G,B,Y),ot.length>0&&cr(ot,B,Y),mt.length>0&&cr(mt,B,Y),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Zh(P,B,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new Vn(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?vi:wi,minFilter:cs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const ot=m.state.transmissionRenderTarget[q.id],mt=q.viewport||R;ot.setSize(mt.z*_.transmissionResolutionScale,mt.w*_.transmissionResolutionScale);const wt=_.getRenderTarget();_.setRenderTarget(ot),_.getClearColor(z),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),Qt&&Ut.render(Y);const At=_.toneMapping;_.toneMapping=zi;const zt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),at===!0&&ct.setGlobalState(_.clippingPlanes,q),cr(P,Y,q),L.updateMultisampleRenderTarget(ot),L.updateRenderTargetMipmap(ot),jt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Lt=0,ee=B.length;Lt<ee;Lt++){const re=B[Lt],Re=re.object,Se=re.geometry,se=re.material,Dt=re.group;if(se.side===Ot&&Re.layers.test(q.layers)){const ze=se.side;se.side=rn,se.needsUpdate=!0,$h(Re,Y,q,Se,se,Dt),se.side=ze,se.needsUpdate=!0,kt=!0}}kt===!0&&(L.updateMultisampleRenderTarget(ot),L.updateRenderTargetMipmap(ot))}_.setRenderTarget(wt),_.setClearColor(z,H),zt!==void 0&&(q.viewport=zt),_.toneMapping=At}function cr(P,B,Y){const q=B.isScene===!0?B.overrideMaterial:null;for(let G=0,ot=P.length;G<ot;G++){const mt=P[G],wt=mt.object,At=mt.geometry,zt=q===null?mt.material:q,kt=mt.group;wt.layers.test(Y.layers)&&$h(wt,B,Y,At,zt,kt)}}function $h(P,B,Y,q,G,ot){P.onBeforeRender(_,B,Y,q,G,ot),P.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),G.onBeforeRender(_,B,Y,q,P,ot),G.transparent===!0&&G.side===Ot&&G.forceSinglePass===!1?(G.side=rn,G.needsUpdate=!0,_.renderBufferDirect(Y,B,q,G,P,ot),G.side=Oi,G.needsUpdate=!0,_.renderBufferDirect(Y,B,q,G,P,ot),G.side=Ot):_.renderBufferDirect(Y,B,q,G,P,ot),P.onAfterRender(_,B,Y,q,G,ot)}function lr(P,B,Y){B.isScene!==!0&&(B=Me);const q=Pt.get(P),G=m.state.lights,ot=m.state.shadowsArray,mt=G.state.version,wt=Rt.getParameters(P,G.state,ot,B,Y),At=Rt.getProgramCacheKey(wt);let zt=q.programs;q.environment=P.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(P.isMeshStandardMaterial?X:C).get(P.envMap||q.environment),q.envMapRotation=q.environment!==null&&P.envMap===null?B.environmentRotation:P.envMapRotation,zt===void 0&&(P.addEventListener("dispose",Ht),zt=new Map,q.programs=zt);let kt=zt.get(At);if(kt!==void 0){if(q.currentProgram===kt&&q.lightsStateVersion===mt)return Kh(P,wt),kt}else wt.uniforms=Rt.getUniforms(P),P.onBeforeCompile(wt,_),kt=Rt.acquireProgram(wt,At),zt.set(At,kt),q.uniforms=wt.uniforms;const Lt=q.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Lt.clippingPlanes=ct.uniform),Kh(P,wt),q.needsLights=Mp(P),q.lightsStateVersion=mt,q.needsLights&&(Lt.ambientLightColor.value=G.state.ambient,Lt.lightProbe.value=G.state.probe,Lt.directionalLights.value=G.state.directional,Lt.directionalLightShadows.value=G.state.directionalShadow,Lt.spotLights.value=G.state.spot,Lt.spotLightShadows.value=G.state.spotShadow,Lt.rectAreaLights.value=G.state.rectArea,Lt.ltc_1.value=G.state.rectAreaLTC1,Lt.ltc_2.value=G.state.rectAreaLTC2,Lt.pointLights.value=G.state.point,Lt.pointLightShadows.value=G.state.pointShadow,Lt.hemisphereLights.value=G.state.hemi,Lt.directionalShadowMap.value=G.state.directionalShadowMap,Lt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Lt.spotShadowMap.value=G.state.spotShadowMap,Lt.spotLightMatrix.value=G.state.spotLightMatrix,Lt.spotLightMap.value=G.state.spotLightMap,Lt.pointShadowMap.value=G.state.pointShadowMap,Lt.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=kt,q.uniformsList=null,kt}function jh(P){if(P.uniformsList===null){const B=P.currentProgram.getUniforms();P.uniformsList=ta.seqWithValue(B.seq,P.uniforms)}return P.uniformsList}function Kh(P,B){const Y=Pt.get(P);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function _p(P,B,Y,q,G){B.isScene!==!0&&(B=Me),L.resetTextureUnits();const ot=B.fog,mt=q.isMeshStandardMaterial?B.environment:null,wt=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ao,At=(q.isMeshStandardMaterial?X:C).get(q.envMap||mt),zt=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,kt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Lt=!!Y.morphAttributes.position,ee=!!Y.morphAttributes.normal,re=!!Y.morphAttributes.color;let Re=zi;q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Re=_.toneMapping);const Se=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,se=Se!==void 0?Se.length:0,Dt=Pt.get(q),ze=m.state.lights;if(at===!0&&(yt===!0||P!==v)){const $e=P===v&&q.id===w;ct.setState(q,P,$e)}let ae=!1;q.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==ze.state.version||Dt.outputColorSpace!==wt||G.isBatchedMesh&&Dt.batching===!1||!G.isBatchedMesh&&Dt.batching===!0||G.isBatchedMesh&&Dt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Dt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Dt.instancing===!1||!G.isInstancedMesh&&Dt.instancing===!0||G.isSkinnedMesh&&Dt.skinning===!1||!G.isSkinnedMesh&&Dt.skinning===!0||G.isInstancedMesh&&Dt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Dt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Dt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Dt.instancingMorph===!1&&G.morphTexture!==null||Dt.envMap!==At||q.fog===!0&&Dt.fog!==ot||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==ct.numPlanes||Dt.numIntersection!==ct.numIntersection)||Dt.vertexAlphas!==zt||Dt.vertexTangents!==kt||Dt.morphTargets!==Lt||Dt.morphNormals!==ee||Dt.morphColors!==re||Dt.toneMapping!==Re||Dt.morphTargetsCount!==se)&&(ae=!0):(ae=!0,Dt.__version=q.version);let zn=Dt.currentProgram;ae===!0&&(zn=lr(q,B,G));let bs=!1,Mn=!1,_o=!1;const _e=zn.getUniforms(),Cn=Dt.uniforms;if(It.useProgram(zn.program)&&(bs=!0,Mn=!0,_o=!0),q.id!==w&&(w=q.id,Mn=!0),bs||v!==P){It.buffers.depth.getReversed()?(ht.copy(P.projectionMatrix),f0(ht),d0(ht),_e.setValue(F,"projectionMatrix",ht)):_e.setValue(F,"projectionMatrix",P.projectionMatrix),_e.setValue(F,"viewMatrix",P.matrixWorldInverse);const an=_e.map.cameraPosition;an!==void 0&&an.setValue(F,Bt.setFromMatrixPosition(P.matrixWorld)),Kt.logarithmicDepthBuffer&&_e.setValue(F,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&_e.setValue(F,"isOrthographic",P.isOrthographicCamera===!0),v!==P&&(v=P,Mn=!0,_o=!0)}if(G.isSkinnedMesh){_e.setOptional(F,G,"bindMatrix"),_e.setOptional(F,G,"bindMatrixInverse");const $e=G.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),_e.setValue(F,"boneTexture",$e.boneTexture,L))}G.isBatchedMesh&&(_e.setOptional(F,G,"batchingTexture"),_e.setValue(F,"batchingTexture",G._matricesTexture,L),_e.setOptional(F,G,"batchingIdTexture"),_e.setValue(F,"batchingIdTexture",G._indirectTexture,L),_e.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&_e.setValue(F,"batchingColorTexture",G._colorsTexture,L));const Pn=Y.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Ft.update(G,Y,zn),(Mn||Dt.receiveShadow!==G.receiveShadow)&&(Dt.receiveShadow=G.receiveShadow,_e.setValue(F,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Cn.envMap.value=At,Cn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(Cn.envMapIntensity.value=B.environmentIntensity),Mn&&(_e.setValue(F,"toneMappingExposure",_.toneMappingExposure),Dt.needsLights&&vp(Cn,_o),ot&&q.fog===!0&&gt.refreshFogUniforms(Cn,ot),gt.refreshMaterialUniforms(Cn,q,W,Z,m.state.transmissionRenderTarget[P.id]),ta.upload(F,jh(Dt),Cn,L)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ta.upload(F,jh(Dt),Cn,L),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&_e.setValue(F,"center",G.center),_e.setValue(F,"modelViewMatrix",G.modelViewMatrix),_e.setValue(F,"normalMatrix",G.normalMatrix),_e.setValue(F,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const $e=q.uniformsGroups;for(let an=0,Ga=$e.length;an<Ga;an++){const Gi=$e[an];O.update(Gi,zn),O.bind(Gi,zn)}}return zn}function vp(P,B){P.ambientLightColor.needsUpdate=B,P.lightProbe.needsUpdate=B,P.directionalLights.needsUpdate=B,P.directionalLightShadows.needsUpdate=B,P.pointLights.needsUpdate=B,P.pointLightShadows.needsUpdate=B,P.spotLights.needsUpdate=B,P.spotLightShadows.needsUpdate=B,P.rectAreaLights.needsUpdate=B,P.hemisphereLights.needsUpdate=B}function Mp(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(P,B,Y){Pt.get(P.texture).__webglTexture=B,Pt.get(P.depthTexture).__webglTexture=Y;const q=Pt.get(P);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=Y===void 0,q.__autoAllocateDepthBuffer||jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,B){const Y=Pt.get(P);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0};const yp=F.createFramebuffer();this.setRenderTarget=function(P,B=0,Y=0){E=P,T=B,S=Y;let q=!0,G=null,ot=!1,mt=!1;if(P){const At=Pt.get(P);if(At.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(F.FRAMEBUFFER,null),q=!1;else if(At.__webglFramebuffer===void 0)L.setupRenderTarget(P);else if(At.__hasExternalTextures)L.rebindTextures(P,Pt.get(P.texture).__webglTexture,Pt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Lt=P.depthTexture;if(At.__boundDepthTexture!==Lt){if(Lt!==null&&Pt.has(Lt)&&(P.width!==Lt.image.width||P.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(P)}}const zt=P.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(mt=!0);const kt=Pt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(kt[B])?G=kt[B][Y]:G=kt[B],ot=!0):P.samples>0&&L.useMultisampledRTT(P)===!1?G=Pt.get(P).__webglMultisampledFramebuffer:Array.isArray(kt)?G=kt[Y]:G=kt,R.copy(P.viewport),N.copy(P.scissor),D=P.scissorTest}else R.copy(bt).multiplyScalar(W).floor(),N.copy(Gt).multiplyScalar(W).floor(),D=$t;if(Y!==0&&(G=yp),It.bindFramebuffer(F.FRAMEBUFFER,G)&&q&&It.drawBuffers(P,G),It.viewport(R),It.scissor(N),It.setScissorTest(D),ot){const At=Pt.get(P.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,At.__webglTexture,Y)}else if(mt){const At=Pt.get(P.texture),zt=B;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.__webglTexture,Y,zt)}else if(P!==null&&Y!==0){const At=Pt.get(P.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,At.__webglTexture,Y)}w=-1},this.readRenderTargetPixels=function(P,B,Y,q,G,ot,mt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Pt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&mt!==void 0&&(wt=wt[mt]),wt){It.bindFramebuffer(F.FRAMEBUFFER,wt);try{const At=P.texture,zt=At.format,kt=At.type;if(!Kt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=P.width-q&&Y>=0&&Y<=P.height-G&&F.readPixels(B,Y,q,G,Xt.convert(zt),Xt.convert(kt),ot)}finally{const At=E!==null?Pt.get(E).__webglFramebuffer:null;It.bindFramebuffer(F.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(P,B,Y,q,G,ot,mt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Pt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&mt!==void 0&&(wt=wt[mt]),wt){const At=P.texture,zt=At.format,kt=At.type;if(!Kt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=P.width-q&&Y>=0&&Y<=P.height-G){It.bindFramebuffer(F.FRAMEBUFFER,wt);const Lt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Lt),F.bufferData(F.PIXEL_PACK_BUFFER,ot.byteLength,F.STREAM_READ),F.readPixels(B,Y,q,G,Xt.convert(zt),Xt.convert(kt),0);const ee=E!==null?Pt.get(E).__webglFramebuffer:null;It.bindFramebuffer(F.FRAMEBUFFER,ee);const re=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await u0(F,re,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Lt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ot),F.deleteBuffer(Lt),F.deleteSync(re),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,B=null,Y=0){P.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,P=arguments[1]);const q=Math.pow(2,-Y),G=Math.floor(P.image.width*q),ot=Math.floor(P.image.height*q),mt=B!==null?B.x:0,wt=B!==null?B.y:0;L.setTexture2D(P,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,mt,wt,G,ot),It.unbindTexture()};const wp=F.createFramebuffer(),Sp=F.createFramebuffer();this.copyTextureToTexture=function(P,B,Y=null,q=null,G=0,ot=null){P.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,P=arguments[1],B=arguments[2],ot=arguments[3]||0,Y=null),ot===null&&(G!==0?(Gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=G,G=0):ot=0);let mt,wt,At,zt,kt,Lt,ee,re,Re;const Se=P.isCompressedTexture?P.mipmaps[ot]:P.image;if(Y!==null)mt=Y.max.x-Y.min.x,wt=Y.max.y-Y.min.y,At=Y.isBox3?Y.max.z-Y.min.z:1,zt=Y.min.x,kt=Y.min.y,Lt=Y.isBox3?Y.min.z:0;else{const Pn=Math.pow(2,-G);mt=Math.floor(Se.width*Pn),wt=Math.floor(Se.height*Pn),P.isDataArrayTexture?At=Se.depth:P.isData3DTexture?At=Math.floor(Se.depth*Pn):At=1,zt=0,kt=0,Lt=0}q!==null?(ee=q.x,re=q.y,Re=q.z):(ee=0,re=0,Re=0);const se=Xt.convert(B.format),Dt=Xt.convert(B.type);let ze;B.isData3DTexture?(L.setTexture3D(B,0),ze=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(L.setTexture2DArray(B,0),ze=F.TEXTURE_2D_ARRAY):(L.setTexture2D(B,0),ze=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);const ae=F.getParameter(F.UNPACK_ROW_LENGTH),zn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),bs=F.getParameter(F.UNPACK_SKIP_PIXELS),Mn=F.getParameter(F.UNPACK_SKIP_ROWS),_o=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Se.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Se.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,zt),F.pixelStorei(F.UNPACK_SKIP_ROWS,kt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Lt);const _e=P.isDataArrayTexture||P.isData3DTexture,Cn=B.isDataArrayTexture||B.isData3DTexture;if(P.isDepthTexture){const Pn=Pt.get(P),$e=Pt.get(B),an=Pt.get(Pn.__renderTarget),Ga=Pt.get($e.__renderTarget);It.bindFramebuffer(F.READ_FRAMEBUFFER,an.__webglFramebuffer),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ga.__webglFramebuffer);for(let Gi=0;Gi<At;Gi++)_e&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.get(P).__webglTexture,G,Lt+Gi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.get(B).__webglTexture,ot,Re+Gi)),F.blitFramebuffer(zt,kt,mt,wt,ee,re,mt,wt,F.DEPTH_BUFFER_BIT,F.NEAREST);It.bindFramebuffer(F.READ_FRAMEBUFFER,null),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||P.isRenderTargetTexture||Pt.has(P)){const Pn=Pt.get(P),$e=Pt.get(B);It.bindFramebuffer(F.READ_FRAMEBUFFER,wp),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,Sp);for(let an=0;an<At;an++)_e?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pn.__webglTexture,G,Lt+an):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Pn.__webglTexture,G),Cn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$e.__webglTexture,ot,Re+an):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,$e.__webglTexture,ot),G!==0?F.blitFramebuffer(zt,kt,mt,wt,ee,re,mt,wt,F.COLOR_BUFFER_BIT,F.NEAREST):Cn?F.copyTexSubImage3D(ze,ot,ee,re,Re+an,zt,kt,mt,wt):F.copyTexSubImage2D(ze,ot,ee,re,zt,kt,mt,wt);It.bindFramebuffer(F.READ_FRAMEBUFFER,null),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Cn?P.isDataTexture||P.isData3DTexture?F.texSubImage3D(ze,ot,ee,re,Re,mt,wt,At,se,Dt,Se.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(ze,ot,ee,re,Re,mt,wt,At,se,Se.data):F.texSubImage3D(ze,ot,ee,re,Re,mt,wt,At,se,Dt,Se):P.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ot,ee,re,mt,wt,se,Dt,Se.data):P.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ot,ee,re,Se.width,Se.height,se,Se.data):F.texSubImage2D(F.TEXTURE_2D,ot,ee,re,mt,wt,se,Dt,Se);F.pixelStorei(F.UNPACK_ROW_LENGTH,ae),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,zn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,bs),F.pixelStorei(F.UNPACK_SKIP_ROWS,Mn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,_o),ot===0&&B.generateMipmaps&&F.generateMipmap(ze),It.unbindTexture()},this.copyTextureToTexture3D=function(P,B,Y=null,q=null,G=0){return P.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,q=arguments[1]||null,P=arguments[2],B=arguments[3],G=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,B,Y,q,G)},this.initRenderTarget=function(P){Pt.get(P).__webglFramebuffer===void 0&&L.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?L.setTextureCube(P,0):P.isData3DTexture?L.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?L.setTexture2DArray(P,0):L.setTexture2D(P,0),It.unbindTexture()},this.resetState=function(){T=0,S=0,E=null,It.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}const oM=15,rM=6,aM=1.8,_a=8,lf=.85,hf=.98,va=.003,he=90,za=1.7,cM=60,lM=45,hM=10,uM=6,fM=8,dM=4,pM=5,mM=55,gM=35,xM=30,_M=25,vM=60,wd=3,MM=20,yM=5,wM=30,SM=40,bM=6,Fh=280,kl=2.5,TM=6,uf=1.5,Gl=5,ff=2.5,bc=12,Be=30,EM=4,AM=5,RM=8,CM=2.2,k={fog:396308,ground:1720360,leaf:1722400,leafGlow:4521898,mushCap:8926190,mushGlow:13400063,mushStem:2756928,crystal:3407837,crystalCore:8978414,firefly:15662950,fireflyB:6750173,spore:12320665,ambient:2241365,moon:12307694,jellyBell:7833855,jellyGlow:11193599,jellyTent:6715340,puffBody:16768460,puffGlow:16755336,puffEye:2236962,puffCheek:16746649,deerBody:11202303,deerGlow:8969727,deerAntler:13434862,deerEye:1127236,mothWing:11206553,mothGlow:13434794,mothBody:5596723,mothSpot:16777215,grassTip:3385941,grassPurple:[1706530,2363962,4857960,11158766,13400063,16746717,2757952,6697898,11158783],grassBlue:[660514,858677,2114917,4500206,6741503,8974079,1387077,3368618,4500223],grassTeal:[662042,1059362,2121808,4517563,6750173,11206536,1720376,3385992,4521915],fern:1725744,fernGlow:3394662,flower:16742348,flowerGlow:16751069,flowerStem:1721376,reed:2774325,reedTip:4504422,orbGold:16763955,orbGlow:16772778,orbInner:16775389,laserPink:16737962,laserGlow:16746700,obeliskBlack:657938,obeliskPink:16729258,moatBlue:3377356,rainbow:[16724787,16746547,16772659,3407718,3377407,8926207],wispCore:11202303,wispGlow:14544639,wispTrail:8965375,dandStem:4482611,dandHead:16777198,dandSeed:16775389,dandSeedGlow:16777215,fairyMush:13404415,fairyGlow:14527231,fairyRing:11167470,bubbleIris:11197951,bubbleShine:16777215,bubblePop:13434862,starMote:16772829,pondWater:2254506,pondGlow:3377356,lilyPad:2263108,lilyFlower:16746700,lilyGlow:16755421,echoBloom:11206604,rockBase:2763314,rockMoss:1721378,rockLight:3816005,skyDeep:198160},Ze=new sM({antialias:!0,powerPreference:"default"});Ze.setSize(window.innerWidth,window.innerHeight);Ze.setPixelRatio(Math.min(window.devicePixelRatio,2));Ze.shadowMap.enabled=!0;Ze.shadowMap.type=Lf;Ze.toneMapping=Uf;Ze.toneMappingExposure=2.8;Ze.outputColorSpace=on;document.body.appendChild(Ze.domElement);const sn=new bn(65,window.innerWidth/window.innerHeight,.1,300),Sd=new gd,vt=new N0;vt.background=new rt(k.skyDeep);vt.fog=new Eh(k.fog,.01);window.addEventListener("resize",()=>{sn.aspect=window.innerWidth/window.innerHeight,sn.updateProjectionMatrix(),Ze.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("visibilitychange",()=>{document.hidden||Sd.getDelta()});const bd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class sr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const PM=new Uh(-1,1,1,-1,0,1);class IM extends be{constructor(){super(),this.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Wt([0,2,0,0,2,0],2))}}const LM=new IM;class Td{constructor(t){this._mesh=new I(LM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,PM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class DM extends sr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof gn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=da.clone(t.uniforms),this.material=new gn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Td(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class df extends sr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),o.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(i.EQUAL,1,4294967295),o.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),o.buffers.stencil.setLocked(!0)}}class UM extends sr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class NM{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ut);this._width=n.width,this._height=n.height,e=new Vn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new DM(bd),this.copyPass.material.blending=_i,this.clock=new gd}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,o=this.passes.length;i<o;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}df!==void 0&&(r instanceof df?n=!0:r instanceof UM&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class FM extends sr{constructor(t,e,n=null,i=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=i}}const zM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new rt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class uo extends sr{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new ut(t.x,t.y):new ut(256,256),this.clearColor=new rt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Vn(o,r,{type:vi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const u=new Vn(o,r,{type:vi});u.texture.name="UnrealBloomPass.h"+f,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Vn(o,r,{type:vi});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),o=Math.round(o/2),r=Math.round(r/2)}const a=zM;this.highPassUniforms=da.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new gn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new ut(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=bd;this.copyUniforms=da.clone(h.uniforms),this.blendMaterial=new gn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Bi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new rt,this.oldClearAlpha=1,this.basic=new $,this.fsQuad=new Td(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,i),this.renderTargetsVertical[o].setSize(n,i),this.separableBlurMaterials[o].uniforms.invSize.value=new ut(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=uo.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=uo.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new gn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ut(.5,.5)},direction:{value:new ut(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new gn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}uo.BlurDirectionX=new ut(1,0);uo.BlurDirectionY=new ut(0,1);let fs=null,zh=!0;try{const s=new FM(vt,sn),t=new uo(new ut(window.innerWidth,window.innerHeight),.6,.4,.85);fs=new NM(Ze),fs.addPass(s),fs.addPass(t)}catch(s){console.warn("Bloom unavailable, falling back to direct render:",s.message),zh=!1}window.addEventListener("resize",()=>{zh&&fs&&fs.setSize(window.innerWidth,window.innerHeight)});function pf(){zh&&fs?fs.render():Ze.render(vt,sn)}const Oh=new _m(k.ambient,k.ground,.5);vt.add(Oh);const Un=new Na(k.moon,.85);Un.position.set(30,60,-20);Un.castShadow=!0;Un.shadow.camera.left=-90;Un.shadow.camera.right=90;Un.shadow.camera.top=90;Un.shadow.camera.bottom=-90;Un.shadow.camera.near=1;Un.shadow.camera.far=250;Un.shadow.mapSize.set(1024,1024);Un.shadow.bias=-.001;vt.add(Un);const Nn=new Na(2241365,.3);Nn.position.set(-40,45,25);Nn.castShadow=!0;Nn.shadow.camera.left=-70;Nn.shadow.camera.right=70;Nn.shadow.camera.top=70;Nn.shadow.camera.bottom=-70;Nn.shadow.camera.near=1;Nn.shadow.camera.far=200;Nn.shadow.mapSize.set(512,512);Nn.shadow.bias=-.002;vt.add(Nn);const Ed=new Na(3359829,.4);Ed.position.set(-25,15,30);vt.add(Ed);const Ad=new ws(3368516,.7,100);Ad.position.set(0,.5,0);vt.add(Ad);const OM=[{pos:[15,3,15],col:3368618,int:.8,dist:30},{pos:[-20,4,-10],col:6702216,int:.7,dist:25},{pos:[0,5,30],col:2263142,int:.7,dist:28},{pos:[-15,3,20],col:4491417,int:.6,dist:22},{pos:[25,3,-20],col:10053188,int:.5,dist:20}];for(const s of OM){const t=new ws(s.col,s.int,s.dist);t.position.set(s.pos[0],s.pos[1],s.pos[2]),vt.add(t)}const Rd=new Na(4478327,.4);Rd.position.set(-10,25,40);vt.add(Rd);const Bh=new ws(6719624,.6,20);vt.add(Bh);const Qi=[];function BM(){for(let s=0;s<AM;s++){const t=new ws(k.crystal,0,16);vt.add(t),Qi.push(t)}}const Do=new ws(k.orbGold,0,15);vt.add(Do);const Pe={};let Qo=0,ds=0,Oa=!1,Cd=!1,kh=0,Gh=0,Hh=!1,Ba=!1,or=!1,Ma=null,gs=null,Hl=0,Vl=0,Wl=null;function kM(s){Wl=s}function GM(s){Cd=s}function HM(s){Ba=s}function rr(){!Cd&&Wl&&Wl()}window.addEventListener("keydown",s=>{Pe[s.code]=!0,"Space ShiftLeft ShiftRight KeyW KeyA KeyS KeyD".split(" ").indexOf(s.code)>=0&&s.preventDefault(),rr()});window.addEventListener("keyup",s=>{Pe[s.code]=!1});window.addEventListener("blur",()=>{for(const s in Pe)Pe[s]=!1;Oa=!1});Ze.domElement.addEventListener("mousedown",()=>{Oa=!0,rr()});window.addEventListener("mouseup",()=>{Oa=!1});window.addEventListener("mousemove",s=>{Oa&&(Qo-=s.movementX*va,ds-=s.movementY*va,ds=Math.max(-1,Math.min(1,ds)))});const VM="ontouchstart"in window||navigator.maxTouchPoints>0,ar=document.getElementById("joy-zone"),ya=document.getElementById("joy-knob"),Vh=document.getElementById("btn-jump");VM&&(ar.style.display="block",Vh.style.display="block",document.getElementById("controls").textContent="Stick: Move · Drag right: Look · JUMP");function Pd(s,t){const e=ar.getBoundingClientRect();let n=s-(e.left+e.width/2),i=t-(e.top+e.height/2);const o=Math.sqrt(n*n+i*i),r=52;o>r&&(n=n/o*r,i=i/o*r),kh=n/r,Gh=i/r,ya.style.left=40+n+"px",ya.style.top=40+i+"px"}ar.addEventListener("touchstart",s=>{s.preventDefault(),s.stopPropagation(),rr();const t=s.changedTouches[0];Ma=t.identifier,Hh=!0,Pd(t.clientX,t.clientY)},{passive:!1});ar.addEventListener("touchmove",s=>{s.preventDefault(),s.stopPropagation();for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===Ma&&Pd(s.changedTouches[t].clientX,s.changedTouches[t].clientY)},{passive:!1});ar.addEventListener("touchend",s=>{s.preventDefault(),s.stopPropagation();for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===Ma&&(Ma=null,Hh=!1,kh=0,Gh=0,ya.style.left="40px",ya.style.top="40px")},{passive:!1});Vh.addEventListener("touchstart",s=>{s.preventDefault(),s.stopPropagation(),rr(),Ba=!0},{passive:!1});Vh.addEventListener("touchend",s=>{s.preventDefault(),s.stopPropagation(),Ba=!1},{passive:!1});Ze.domElement.addEventListener("touchstart",s=>{s.preventDefault(),rr();for(let t=0;t<s.changedTouches.length;t++){const e=s.changedTouches[t];e.clientX>window.innerWidth*.3&&gs===null&&(gs=e.identifier,Hl=e.clientX,Vl=e.clientY)}},{passive:!1});Ze.domElement.addEventListener("touchmove",s=>{s.preventDefault();for(let t=0;t<s.changedTouches.length;t++){const e=s.changedTouches[t];e.identifier===gs&&(Qo-=(e.clientX-Hl)*va,ds-=(e.clientY-Vl)*va,ds=Math.max(-1,Math.min(1,ds)),Hl=e.clientX,Vl=e.clientY)}},{passive:!1});Ze.domElement.addEventListener("touchend",s=>{for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===gs&&(gs=null)},{passive:!1});Ze.domElement.addEventListener("touchcancel",s=>{for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===gs&&(gs=null)},{passive:!1});function WM(){let s=0,t=0;Pe.KeyW&&(t-=1),Pe.KeyS&&(t+=1),Pe.KeyA&&(s-=1),Pe.KeyD&&(s+=1),Hh&&(s+=kh,t+=Gh);const e=Math.sqrt(s*s+t*t);e>1&&(s/=e,t/=e);const n=rM*(Pe.ShiftLeft||Pe.ShiftRight||or?aM:1),i=Math.sin(Qo),o=Math.cos(Qo);return{x:(s*o+t*i)*n,z:(-s*i+t*o)*n}}const vn={mushCap:new K(.5,8,5),mushStem:new Mt(.06,.1,.6,5),mushDot:new K(.06,4,3),crystal:new Mt(0,.35,1.8,6),crystalSm:new Mt(0,.18,.9,5),fly:new K(.06,4,3),spore:new K(.04,3,3),dandSeed:new K(.025,3,3),bubble:new K(.15,8,6),starMote:new K(.03,3,3),dustMote:new K(.035,3,3)};let Vo=42;function b(){return Vo=Vo*16807%2147483647,(Vo&2147483647)/2147483647}function XM(){return Vo}function YM(s){Vo=s}function Br(s,t){let e=s*374761393+t*668265263+1274126177|0;return e=(e^e>>13)*1274126177|0,(e&2147483647)/2147483647}function Wo(s){return s*s*(3-2*s)}function Id(s,t){const e=Math.floor(s),n=Math.floor(t),i=Wo(s-e),o=Wo(t-n),r=Br(e,n),a=Br(e+1,n),c=Br(e,n+1),l=Br(e+1,n+1);return r+(a-r)*i+(c-r)*o+(r-a-c+l)*i*o}function mf(s,t,e){let n=0,i=.5,o=1;for(let r=0;r<e;r++)n+=Id(s*o,t*o)*i,i*=.5,o*=2;return n}const Xl=[];function Yl(s,t,e){Xl.push({x:s,z:t,r:e})}function ne(s,t){const e=Math.sqrt(s*s+t*t),n=1-Wo(Math.max(0,(e-he*.7)/(he*.3))),i=Wo(Math.min(1,e/8)),o=.035,r=mf(s*o,t*o,4),a=mf(s*o*2.7+50,t*o*2.7+50,3),c=Id(s*.15,t*.15);let l=r*2.5+a*.8+c*.15;l*=n*i;for(let h=0;h<Xl.length;h++){const f=Xl[h],u=s-f.x,d=t-f.z,g=Math.sqrt(u*u+d*d);if(g<f.r*2){const M=Wo(Math.max(0,(g-f.r*.5)/(f.r*1.5)));l*=M}}return l}function qM(){const t=document.createElement("canvas");t.width=2048,t.height=2048;const e=t.getContext("2d"),n=Math.random;e.fillStyle="#2a5038",e.fillRect(0,0,2048,2048);const i=[{col:"rgba(40,80,50,0.35)",n:15,r:120},{col:"rgba(60,50,25,0.25)",n:12,r:100},{col:"rgba(30,65,55,0.25)",n:10,r:110},{col:"rgba(55,70,35,0.2)",n:8,r:90},{col:"rgba(35,40,25,0.25)",n:8,r:80}];for(const h of i)for(let f=0;f<h.n;f++){const u=n()*2048,d=n()*2048,g=h.r*(.5+n()*.8),M=e.createRadialGradient(u,d,0,u,d,g);M.addColorStop(0,h.col),M.addColorStop(.6,h.col.replace(/[\d.]+\)$/,parseFloat(h.col.match(/[\d.]+\)$/)[0])*.4+")")),M.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=M;for(let p=-1;p<=1;p++)for(let m=-1;m<=1;m++)e.beginPath(),e.arc(u+p*2048,d+m*2048,g,0,6.28),e.fill()}const o=[{n:80,r:25,colors:["rgba(20,45,25,0.2)","rgba(35,55,28,0.18)","rgba(28,22,12,0.2)","rgba(15,38,30,0.15)"]},{n:200,r:10,colors:["rgba(30,55,30,0.14)","rgba(45,35,18,0.12)","rgba(22,48,35,0.12)","rgba(38,28,14,0.1)"]},{n:500,r:4,colors:["rgba(25,50,28,0.1)","rgba(40,30,15,0.08)","rgba(18,42,32,0.08)","rgba(32,25,10,0.06)"]}];for(const h of o)for(let f=0;f<h.n;f++){e.fillStyle=h.colors[Math.floor(n()*h.colors.length)];const u=n()*2048,d=n()*2048;e.beginPath(),e.arc(u,d,h.r+n()*h.r*.6,0,6.28),e.fill()}const r=["rgba(60,200,100,0.06)","rgba(50,180,120,0.05)","rgba(80,160,200,0.04)","rgba(100,220,150,0.05)"];for(let h=0;h<25;h++){let f=n()*2048,u=n()*2048;const d=r[Math.floor(n()*r.length)];e.strokeStyle=d,e.lineWidth=1+n()*2,e.beginPath(),e.moveTo(f,u);let g=n()*6.28;const M=12+Math.floor(n()*16);for(let p=0;p<M;p++)g+=Math.sin(p*.6)*.5+(n()-.5)*.4,f+=Math.cos(g)*(6+n()*10),u+=Math.sin(g)*(6+n()*10),e.lineTo(f,u);if(e.stroke(),n()<.6){const p=e.createRadialGradient(f,u,0,f,u,6+n()*8);p.addColorStop(0,d.replace("0.0","0.1")),p.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=p,e.beginPath(),e.arc(f,u,6+n()*8,0,6.28),e.fill()}}e.lineWidth=1.2;for(let h=0;h<30;h++){e.strokeStyle=`rgba(20,12,5,${.15+n()*.12})`;let f=n()*2048,u=n()*2048,d=n()*6.28;e.beginPath(),e.moveTo(f,u);for(let g=0;g<10;g++)d+=Math.sin(g*.7)*.5+(n()-.5)*.35,f+=Math.cos(d)*(8+n()*14),u+=Math.sin(d)*(8+n()*14),e.lineTo(f,u);e.stroke()}const a=["rgba(55,32,12,0.3)","rgba(70,42,18,0.25)","rgba(40,55,22,0.22)","rgba(22,50,28,0.2)","rgba(60,45,20,0.25)","rgba(30,60,35,0.18)","rgba(50,25,8,0.22)","rgba(65,55,25,0.18)"];for(let h=0;h<3e3;h++){e.fillStyle=a[Math.floor(n()*a.length)];const f=n()*2048,u=n()*2048,d=.8+n()*2.5;e.beginPath(),e.arc(f,u,d,0,6.28),e.fill()}for(let h=0;h<40;h++){const f=n()*2048,u=n()*2048,d=15+n()*35,g=e.createRadialGradient(f,u,0,f,u,d),M=n();M<.4?(g.addColorStop(0,"rgba(45,90,50,0.18)"),g.addColorStop(1,"rgba(25,55,30,0)")):M<.7?(g.addColorStop(0,"rgba(35,75,60,0.16)"),g.addColorStop(1,"rgba(20,50,38,0)")):(g.addColorStop(0,"rgba(55,75,35,0.14)"),g.addColorStop(1,"rgba(30,45,20,0)")),e.fillStyle=g,e.beginPath(),e.arc(f,u,d,0,6.28),e.fill()}for(let h=0;h<400;h++){const f=n()*2048,u=n()*2048,d=1.5+n()*3.5,g=Math.floor(28+n()*42);e.fillStyle=`rgba(${g},${g-4},${g-10},0.3)`,e.beginPath(),e.arc(f,u,d,0,6.28),e.fill()}e.lineWidth=.7;for(let h=0;h<80;h++){const f=n()*2048,u=n()*2048,d=4+n()*18,g=n()*6.28;e.strokeStyle=`rgba(22,12,5,${.15+n()*.1})`,e.beginPath(),e.moveTo(f,u),e.lineTo(f+Math.cos(g)*d,u+Math.sin(g)*d),e.stroke()}const c=["rgba(80,220,120,0.08)","rgba(60,200,160,0.07)","rgba(100,180,220,0.06)","rgba(120,100,200,0.05)","rgba(200,150,80,0.04)","rgba(60,180,180,0.06)"];for(let h=0;h<300;h++){const f=n()*2048,u=n()*2048,d=c[Math.floor(n()*c.length)];if(e.fillStyle=d,e.beginPath(),e.arc(f,u,1+n()*2,0,6.28),e.fill(),n()<.3){const g=e.createRadialGradient(f,u,0,f,u,4+n()*5);g.addColorStop(0,d),g.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=g,e.beginPath(),e.arc(f,u,4+n()*5,0,6.28),e.fill()}}for(let h=0;h<150;h++){const f=n()*2048,u=n()*2048;e.fillStyle=`rgba(120,180,130,${.04+n()*.04})`,e.beginPath(),e.arc(f,u,.5+n()*1.2,0,6.28),e.fill()}const l=new Ch(t);return l.wrapS=l.wrapT=la,l.repeat.set(8,8),l.colorSpace=on,l}function kr(s,t){let e=s*127961+t*372143+918273|0;return e=(e^e>>13)*517261|0,(e&2147483647)/2147483647}function ql(s){return s*s*(3-2*s)}function Ld(s,t){const e=Math.floor(s),n=Math.floor(t),i=ql(s-e),o=ql(t-n),r=kr(e,n),a=kr(e+1,n),c=kr(e,n+1),l=kr(e+1,n+1);return r+(a-r)*i+(c-r)*o+(r-a-c+l)*i*o}function Tc(s,t,e){let n=0,i=.5,o=1;for(let r=0;r<e;r++)n+=Ld(s*o,t*o)*i,i*=.5,o*=2;return n}function ZM(){const s=qM(),t=he*3,e=200,n=new ve(t,t,e,e),i=n.attributes.position,o=[[.55,.95,.6],[.45,.85,.95],[.8,.5,1],[.85,.65,.4],[.5,1.1,.65],[.4,.7,.9]],r=i.count,a=new Float32Array(r*3);for(let l=0;l<r;l++){const h=i.getX(l),f=i.getY(l);Math.sqrt(h*h+f*f)<he*1.4?i.setZ(l,ne(h,-f)):i.setZ(l,0);const d=h,g=-f,M=Tc(d*.025+100,g*.025+200,3),p=Tc(d*.06+300,g*.06+400,2),m=Ld(d*.15+500,g*.15+600),y=Tc(d*.04-150,g*.04-250,3),x=Math.floor(M*o.length*.999),_=Math.floor(y*o.length*.999),A=o[x],T=o[_],S=ql(p),E=.85+m*.3,w=(A[0]*(1-S)+T[0]*S)*E,v=(A[1]*(1-S)+T[1]*S)*E,R=(A[2]*(1-S)+T[2]*S)*E,D=1+ne(d,g)*.06;a[l*3]=w*D,a[l*3+1]=v*D,a[l*3+2]=R*D}n.setAttribute("color",new _n(a,3)),n.computeVertexNormals();const c=new I(n,new et({map:s,vertexColors:!0,roughness:.75,metalness:0,emissive:1718304,emissiveIntensity:.25}));return c.rotation.x=-Math.PI/2,c.receiveShadow=!0,vt.add(c),c}const tr=new pe;let wa=null;const ts=120;let gf=null,ea=null,Zl=null,$l=null,$s=null;const js=[],$M=3;let Ec=0;function Ni(s,t){const e=s>>16&255,n=s>>8&255,i=s&255;return`rgba(${e},${n},${i},${t})`}function Fi(s,t,e,n,i,o,r){s.save(),s.translate(t,e),Math.abs(i/n-1)>.01&&s.scale(1,i/n);const a=s.createRadialGradient(0,0,0,0,0,n);a.addColorStop(0,Ni(o,r)),a.addColorStop(.25,Ni(o,r*.55)),a.addColorStop(.55,Ni(o,r*.15)),a.addColorStop(.85,Ni(o,r*.03)),a.addColorStop(1,Ni(o,0)),s.fillStyle=a,s.beginPath(),s.arc(0,0,n,0,6.2832),s.fill(),s.restore()}function Ac(s,t,e,n,i,o,r,a){Fi(s,t,e,n,i,o,r),t-n<0&&Fi(s,t+a,e,n,i,o,r),t+n>a&&Fi(s,t-a,e,n,i,o,r)}function jM(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),i=Math.random,o=n.createLinearGradient(0,0,0,1024);o.addColorStop(0,"#030610"),o.addColorStop(.2,"#050a18"),o.addColorStop(.4,"#0a1222"),o.addColorStop(.55,"#0c1828"),o.addColorStop(.75,"#081018"),o.addColorStop(1,"#040810"),n.fillStyle=o,n.fillRect(0,0,2048,1024);const r=[{x:.12,y:.22,rx:.18,ry:.14,col:1717094,a:.14},{x:.42,y:.28,rx:.22,ry:.1,col:2758741,a:.12},{x:.72,y:.18,rx:.16,ry:.12,col:1721446,a:.13},{x:.88,y:.32,rx:.2,ry:.09,col:3348548,a:.1},{x:.28,y:.12,rx:.14,ry:.18,col:2245768,a:.1},{x:.58,y:.38,rx:.18,ry:.07,col:4465220,a:.08},{x:.05,y:.4,rx:.15,ry:.1,col:1586005,a:.09},{x:.52,y:.15,rx:.12,ry:.16,col:2765670,a:.07}];for(const f of r){Ac(n,f.x*2048,f.y*1024,f.rx*2048,f.ry*1024,f.col,f.a,2048);for(let u=0;u<4;u++){const d=(f.x+(i()-.5)*f.rx)*2048,g=(f.y+(i()-.5)*f.ry)*1024,M=f.rx*2048*(.2+i()*.35),p=f.ry*1024*(.2+i()*.4);Ac(n,d,g,M,p,f.col,f.a*(.4+i()*.5),2048)}}const a=[2245802,2245734,4465254,5583701,3368584,2245717,3809894];for(let f=0;f<30;f++){const u=i()*2048,d=i()*1024*.55,g=40+i()*180,M=25+i()*100;Ac(n,u,d,g,M,a[Math.floor(i()*a.length)],.025+i()*.035,2048)}n.save(),n.globalCompositeOperation="screen";const c=.26;for(let f=0;f<50;f++){const u=f/50,d=u*2048,g=(c+Math.sin(u*Math.PI)*.06+(i()-.5)*.02)*1024,M=2048*.05+i()*2048*.035,p=1024*.04*(.4+i()*.6);Fi(n,d,g,M,p,4478310,.025+i()*.015)}for(let f=0;f<25;f++){const u=.2+i()*.6,d=u*2048,g=(c+Math.sin(u*Math.PI)*.04)*1024;Fi(n,d,g,2048*.03+i()*2048*.02,1024*.02+i()*1024*.01,6719658,.015+i()*.012)}for(let f=0;f<10;f++){const u=.35+i()*.3,d=u*2048,g=(c+Math.sin(u*Math.PI)*.02)*1024;Fi(n,d,g,2048*.02,1024*.012,8943462,.01+i()*.008)}n.globalCompositeOperation="source-over",n.restore();for(let f=0;f<12;f++){const u=.1+i()*.8,d=u*2048,g=(c+Math.sin(u*Math.PI)*.04+(i()-.5)*.02)*1024,M=20+i()*60,p=8+i()*20;Fi(n,d,g,M,p,132104,.15+i()*.1)}const l=["255,255,255","220,230,255","255,240,220","200,215,255","255,225,200","240,240,255","255,245,235"];for(let f=0;f<5e3;f++){const u=i()*2048,d=i()*1024*.65,g=.3+i()*.7,M=.1+i()*.5;n.fillStyle=`rgba(${l[Math.floor(i()*l.length)]},${M})`,n.beginPath(),n.arc(u,d,g,0,6.28),n.fill()}for(let f=0;f<3e3;f++){const u=i(),d=u*2048,M=(c+Math.sin(u*Math.PI)*.06)*1024+(i()-.5)*1024*.1;if(M<0||M>1024*.6)continue;const p=.2+i()*.6,m=.2+i()*.7;n.fillStyle=`rgba(${l[Math.floor(i()*l.length)]},${m})`,n.beginPath(),n.arc(d,M,p,0,6.28),n.fill()}for(let f=0;f<60;f++){const u=i()*2048,d=i()*1024*.58,g=1.2+i()*1.8,M=6+i()*14,p=i();let m;p<.45?m="255,255,255":p<.65?m="210,225,255":p<.8?m="255,230,200":p<.92?m="190,210,255":m="255,200,180";const y=n.createRadialGradient(u,d,0,u,d,M);y.addColorStop(0,`rgba(${m},0.5)`),y.addColorStop(.1,`rgba(${m},0.18)`),y.addColorStop(.35,`rgba(${m},0.04)`),y.addColorStop(1,`rgba(${m},0)`),n.fillStyle=y,n.beginPath(),n.arc(u,d,M,0,6.28),n.fill(),n.strokeStyle=`rgba(${m},0.12)`,n.lineWidth=.5;const x=M*.8;n.beginPath(),n.moveTo(u-x,d),n.lineTo(u+x,d),n.moveTo(u,d-x),n.lineTo(u,d+x),n.stroke(),n.fillStyle=`rgba(${m},1)`,n.beginPath(),n.arc(u,d,g,0,6.28),n.fill()}for(let f=0;f<8;f++){const u=i()*2048,d=1024*.08+i()*1024*.42,g=50+i()*90;Fi(n,u,d,g,g*.7,3359846,.03);for(let M=0;M<100;M++){const p=i()*6.28,m=i()*i()*g,y=u+Math.cos(p)*m,x=d+Math.sin(p)*m*.65;if(y<0||y>2048||x<0||x>1024)continue;const _=.2+i()*.6;n.fillStyle=`rgba(255,255,255,${.25+i()*.6})`,n.beginPath(),n.arc(y,x,_,0,6.28),n.fill()}}for(let f=0;f<15;f++){const u=r[Math.floor(i()*r.length)],d=(u.x+(i()-.5)*u.rx*.5)*2048,g=(u.y+(i()-.5)*u.ry*.5)*1024,M=3+i()*8,p=n.createRadialGradient(d,g,0,d,g,M*3);p.addColorStop(0,Ni(u.col,.2)),p.addColorStop(.3,Ni(u.col,.06)),p.addColorStop(1,Ni(u.col,0)),n.fillStyle=p,n.beginPath(),n.arc(d,g,M*3,0,6.28),n.fill()}const h=new Ch(e);return h.colorSpace=on,h}function KM(){const s=XM(),t=jM(),e=new K(Fh,64,32,0,Math.PI*2,0,Math.PI*.55);wa=new $({map:t,side:rn,fog:!1,transparent:!1});const n=new I(e,wa);tr.add(n),JM(),QM(),vt.add(tr),YM(s)}function JM(){const s=new Float32Array(ts*3),t=new Float32Array(ts*3);ea=new Float32Array(ts),Zl=new Float32Array(ts),$l=new Float32Array(ts);const e=[[1,1,1],[.85,.9,1],[1,.94,.86],[.78,.84,1],[1,.88,.78],[.9,.95,1]],n=Math.random,i=Fh*.97;for(let a=0;a<ts;a++){const c=n()*Math.PI*2,l=n()*Math.PI*.48,h=i*Math.cos(c)*Math.sin(l),f=i*Math.cos(l),u=i*Math.sin(c)*Math.sin(l);s[a*3]=h,s[a*3+1]=f,s[a*3+2]=u;const d=e[Math.floor(n()*e.length)];t[a*3]=d[0],t[a*3+1]=d[1],t[a*3+2]=d[2],ea[a]=2+n()*4,Zl[a]=n()*Math.PI*2,$l[a]=.5+n()*2.5}const o=new be;o.setAttribute("position",new Wt(s,3)),o.setAttribute("color",new Wt(t,3)),$s=new Wt(ea.slice(),1),$s.setUsage(Ge),o.setAttribute("size",$s);const r=new sd({vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,fog:!1,blending:Bi,depthWrite:!1});gf=new G0(o,r),tr.add(gf)}function QM(){const s=new $({color:16777215,transparent:!0,opacity:0,fog:!1,blending:Bi,depthWrite:!1});for(let t=0;t<$M;t++){const e=new I(new Mt(.15,0,12,4),s.clone());e.visible=!1,tr.add(e),js.push({mesh:e,mat:e.material,active:!1,life:0,maxLife:0,sx:0,sy:0,sz:0,dx:0,dy:0,dz:0})}}function ty(){let s=null;for(let a=0;a<js.length;a++)if(!js[a].active){s=js[a];break}if(!s)return;const t=Math.random,e=t()*Math.PI*2,n=.1+t()*.35,i=Fh*.85;s.sx=i*Math.cos(e)*Math.sin(n),s.sy=i*Math.cos(n),s.sz=i*Math.sin(e)*Math.sin(n);const o=e+(t()-.5)*1,r=80+t()*120;s.dx=Math.cos(o)*r,s.dy=-r*(.5+t()*.5),s.dz=Math.sin(o)*r,s.life=.5+t()*.8,s.maxLife=s.life,s.active=!0,s.mesh.visible=!0}function Dd(s,t){if(tr.rotation.y=t*.003,$s){const e=$s.array;for(let n=0;n<ts;n++){const i=ea[n],o=Math.sin(t*$l[n]+Zl[n]);e[n]=i*(.65+o*.35)}$s.needsUpdate=!0}Ec-=s,Ec<=0&&(Ec=4+Math.random()*12,ty());for(let e=0;e<js.length;e++){const n=js[e];if(!n.active)continue;if(n.life-=s,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}const i=n.life/n.maxLife;n.sx+=n.dx*s,n.sy+=n.dy*s,n.sz+=n.dz*s,n.mesh.position.set(n.sx,n.sy,n.sz),n.mesh.lookAt(n.sx+n.dx,n.sy+n.dy,n.sz+n.dz),n.mesh.rotateX(Math.PI/2),n.mat.opacity=i*.7,n.mesh.scale.setScalar(.6+i*.4)}}function ey(s){if(wa){const t=Math.max(.15,s);wa.color.setRGB(t,t,t)}}const Q={pos:new U(0,za,0),vel:new U,onGround:!0};let Rc=0,Cc=0,Ud=0,Pc=65,xf=65,Ro=0,_f=!0,Ic=0,fo=0,jl=null,Kl=null,Jl=null,vf=1;function ny(s,t,e){jl=s,Kl=t,Jl=e}let Ql=[],th=[],eh=null;function iy(s,t){Ql=s,th=t}function sy(s){eh=s}function oy(s){const t=WM(),e=Pe.ShiftLeft||Pe.ShiftRight||or;Q.vel.x=t.x,Q.vel.z=t.z,Q.vel.y-=oM*s,(Pe.Space||Ba)&&Q.onGround&&(Q.vel.y=_a,Q.onGround=!1,HM(!1),Kl&&Kl()),Q.onGround||(Ic=Q.vel.y),Q.pos.x+=Q.vel.x*s,Q.pos.y+=Q.vel.y*s,Q.pos.z+=Q.vel.z*s;const n=ne(Q.pos.x,Q.pos.z)+za;if(Q.pos.y<=n){if(Q.pos.y=n,Q.vel.y=0,!_f&&Ic<-3){const h=Math.min(Math.abs(Ic)/_a,1);Ro=h*.15,eh&&eh(Q.pos.x,Q.pos.z,Math.floor(3+h*5)),Jl&&Jl(h)}Q.onGround=!0}_f=Q.onGround,Q.onGround?(Q.vel.x*=lf,Q.vel.z*=lf):(Q.vel.x*=hf,Q.vel.z*=hf);const i=.4;for(let h=0;h<Ql.length;h++){const f=Ql[h],u=Q.pos.x-f.x,d=Q.pos.z-f.z,g=u*u+d*d,M=.6+i;if(g<M*M&&g>.001){const p=1/Math.sqrt(g);Q.pos.x=f.x+u*p*M,Q.pos.z=f.z+d*p*M}}for(let h=0;h<th.length;h++){const f=th[h],u=Q.pos.x-f.x,d=Q.pos.z-f.z,g=u*u+d*d,M=f.colR+i;if(g<M*M&&g>.001){const p=1/Math.sqrt(g);Q.pos.x=f.x+u*p*M,Q.pos.z=f.z+d*p*M}}if(Math.sqrt(Q.pos.x*Q.pos.x+Q.pos.z*Q.pos.z)>he){const h=Math.atan2(Q.pos.z,Q.pos.x);Q.pos.x=Math.cos(h)*he,Q.pos.z=Math.sin(h)*he}Bh.position.copy(Q.pos);const a=Math.sqrt(t.x*t.x+t.z*t.z)>.5&&Q.onGround;a?fo=0:fo+=s,Cc+=((a?e?.06:.035:0)-Cc)*s*6,a&&(Rc+=s*(e?12:8));const l=Math.sin(Rc)*Cc;if(a&&jl){const h=Math.sin(Rc)>=0?1:-1;vf>0&&h<0&&jl(e),vf=h}xf=e&&a?78:65,Pc+=(xf-Pc)*s*4,sn.fov=Pc,sn.updateProjectionMatrix(),Ro*=Math.pow(.04,s),Ro<.001&&(Ro=0),Ud=l-Ro}const Mf=[{leaf:1332520,glow:2280567,core:4521898},{leaf:931880,glow:3390378,core:5636044},{leaf:1721376,glow:4508757,core:7864200},{leaf:1060912,glow:2267562,core:4513262},{leaf:1583172,glow:3377356,core:5618687}];function ry(s,t){const e=new pe,n=6+b()*10,i=.2+b()*.3,o=new et({color:5914672,roughness:.75,emissive:1718304,emissiveIntensity:.18}),r=new I(new Mt(i*.4,i,n,6),o);r.position.y=n/2,r.castShadow=!0,e.add(r);const a=new et({color:2263125,emissive:k.leafGlow,emissiveIntensity:.5,transparent:!0,opacity:.25}),c=2+Math.floor(b()*3);for(let y=0;y<c;y++){const x=y/c*6.28+b()*.5,_=n*.4+b()*n*.4,A=new I(new Mt(.008,.015,_,3),a);A.position.set(Math.cos(x)*i*.74,n*.15+_/2,Math.sin(x)*i*.74),e.add(A)}const l=new et({color:3812378,roughness:.85,emissive:1583636,emissiveIntensity:.12}),h=3+Math.floor(b()*3);for(let y=0;y<h;y++){const x=y/h*6.28+b()*.5,_=.8+b()*1.5,A=new I(new Mt(.02,i*.3,_,4),l);A.position.set(Math.cos(x)*i*.5,.08,Math.sin(x)*i*.5),A.rotation.z=x<3.14?1.2+b()*.3:-(1.2+b()*.3),A.rotation.y=x,e.add(A)}const f=3+Math.floor(b()*4);for(let y=0;y<f;y++){const x=n*(.4+b()*.5),_=b()*Math.PI*2,A=1.5+b()*3,T=new I(new Mt(.02,.06,A,4),o);T.position.set(Math.cos(_)*.3,x,Math.sin(_)*.3),T.rotation.z=(b()-.5)*1.2,T.rotation.y=_,T.castShadow=!0,e.add(T);const S=Mf[Math.floor(b()*Mf.length)],E=Math.cos(_)*(A*.5),w=x+b()*1.5,v=Math.sin(_)*(A*.5),R=1+b()*2,N=new et({color:S.core,emissive:S.core,emissiveIntensity:.7+b()*.5,transparent:!0,opacity:.55,roughness:.3}),D=new I(new us(R*.3,1),N);D.position.set(E,w,v),e.add(D);const z=new et({color:S.leaf,emissive:S.glow,emissiveIntensity:.25+b()*.25,transparent:!0,opacity:.55,roughness:.7}),H=new I(new us(R*.75,1),z);H.position.set(E+(b()-.5)*.4,w+(b()-.5)*.4,v+(b()-.5)*.4),H.scale.set(1+b()*.4,.65+b()*.5,1+b()*.4),H.castShadow=!0,H.receiveShadow=!0,e.add(H);const V=new et({color:S.glow,emissive:S.glow,emissiveIntensity:.12,transparent:!0,opacity:.08,depthWrite:!1}),Z=new I(new us(R*1.2,1),V);if(Z.position.set(E,w,v),e.add(Z),b()<.35){const W=new et({color:2773040,emissive:1135904,emissiveIntensity:.08,transparent:!0,opacity:.5}),lt=.3+b()*.8,dt=new I(new Mt(.008,.003,lt,3),W),bt=b()*A*.4;dt.position.set(Math.cos(_)*(.3+bt),x-lt/2-b()*.3,Math.sin(_)*(.3+bt)),e.add(dt)}}const u=new et({color:5911840,emissive:3349e3,emissiveIntensity:.06,roughness:.8}),d=Math.floor(b()*3);for(let y=0;y<d;y++){const x=1+b()*n*.4,_=b()*6.28,A=new I(new K(.08+b()*.08,5,3),u);A.scale.set(1.5,.3,1),A.position.set(Math.cos(_)*i*.8,x,Math.sin(_)*i*.8),A.rotation.y=-_,e.add(A)}const g=new et({color:k.leaf,emissive:k.leafGlow,emissiveIntensity:.06,transparent:!0,opacity:.07,depthWrite:!1}),M=new I(new K(3+b()*2,8,6),g);M.position.y=n*.65,e.add(M);const p=new et({color:1183752,roughness:.95}),m=new I(new K(i*2.5,6,3),p);return m.scale.set(1,.12,1),m.position.y=.02,e.add(m),e.position.set(s,0,t),vt.add(e),e}function ay(s,t){const e=new pe,n=.4+b()*1.2,i=b()*6.28,o=.8+b()*1.5,r=.5+b()*.8,a=new I(vn.mushStem,new et({color:k.mushStem,roughness:.7,emissive:k.mushGlow,emissiveIntensity:.1}));a.position.y=.3,e.add(a);const c=new et({color:k.mushStem,emissive:k.mushGlow,emissiveIntensity:.15,roughness:.6}),l=new I(new Ae(.09,.012,4,8),c);l.position.y=.42,l.rotation.x=Math.PI/2,e.add(l);const h=new et({color:k.mushCap,emissive:k.mushGlow,emissiveIntensity:r,roughness:.3,transparent:!0,opacity:.9}),f=new I(vn.mushCap,h);f.scale.set(1,.5,1),f.position.y=.55,f.castShadow=!0,f.receiveShadow=!0,e.add(f);const u=new et({color:6693546,emissive:k.mushGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,side:Ot});for(let v=0;v<8;v++){const R=v/8*6.28,N=new I(new ve(.35,.08),u);N.position.set(Math.cos(R)*.15,.48,Math.sin(R)*.15),N.rotation.y=-R,N.rotation.x=.1,e.add(N)}for(let v=0;v<4;v++){const R=new $({color:16777215,transparent:!0,opacity:.9}),N=new I(vn.mushDot,R),D=b()*6.28,z=.15+b()*.25;N.position.set(Math.cos(D)*z,.6+b()*.1,Math.sin(D)*z),e.add(N)}const d=new et({color:15663103,emissive:11197951,emissiveIntensity:.2,transparent:!0,opacity:.6,roughness:0,metalness:.5}),g=2+Math.floor(b()*2);for(let v=0;v<g;v++){const R=new I(new K(.015+b()*.015,4,3),d),N=b()*6.28,D=.1+b()*.2;R.position.set(Math.cos(N)*D,.63+b()*.08,Math.sin(N)*D),e.add(R)}const M=new et({color:4465322,emissive:k.mushGlow,emissiveIntensity:.15,transparent:!0,opacity:.35});for(let v=0;v<4;v++){const R=b()*6.28,N=.15+b()*.25,D=new I(new Mt(.004,.002,N,3),M);D.position.set(Math.cos(R)*.12,.01,Math.sin(R)*.12),D.rotation.z=1.3*(R<3.14?1:-1),D.rotation.y=R,e.add(D)}const p=new et({color:k.mushCap,emissive:k.mushGlow,emissiveIntensity:r*.6,transparent:!0,opacity:.4}),m=new I(new Ae(.38,.01,4,12),p);m.position.y=.49,m.rotation.x=Math.PI/2,e.add(m);const y=new et({color:k.mushStem,emissive:k.mushGlow,emissiveIntensity:.08,roughness:.7}),x=new I(new K(.08,5,3),y);x.scale.set(1,.5,1),x.position.y=.04,e.add(x);const _=new et({color:1708040,roughness:.95});for(let v=0;v<3;v++){const R=b()*6.28,N=.1+b()*.12,D=new I(new K(.008+b()*.008,3,3),_);D.position.set(Math.cos(R)*N,.005,Math.sin(R)*N),e.add(D)}const A=new $({color:k.mushGlow,transparent:!0,opacity:.2});for(let v=0;v<4;v++){const R=new I(new K(.006,3,3),A);R.position.set((b()-.5)*.2,.35+b()*.1,(b()-.5)*.2),e.add(R)}const T=new et({color:11167453,emissive:k.mushGlow,emissiveIntensity:r*.3,roughness:.5}),S=3+Math.floor(b()*3);for(let v=0;v<S;v++){const R=b()*6.28,N=b()*.25,D=new I(new K(.015+b()*.015,3,3),T);D.position.set(Math.cos(R)*N,.58+b()*.06,Math.sin(R)*N),e.add(D)}const E=new et({color:657416,transparent:!0,opacity:.2,roughness:.95,side:Ot}),w=new I(new ke(.18,8),E);return w.rotation.x=-Math.PI/2,w.position.y=.005,e.add(w),e.scale.setScalar(n),e.position.set(s,0,t),vt.add(e),{group:e,capMat:h,phase:i,speed:o,base:r,x:s,z:t}}function cy(s,t){const e=new pe,n=b()*6.28,i=new et({color:k.crystal,emissive:k.crystalCore,emissiveIntensity:1.5,transparent:!0,opacity:.7,roughness:.1,metalness:.5}),o=new I(vn.crystal,i);o.position.y=.9,o.castShadow=!0,e.add(o);for(let x=0;x<3;x++){const _=new I(vn.crystalSm,i),A=x/3*6.28+b()*.5;_.position.set(Math.cos(A)*.4,.45,Math.sin(A)*.4),_.rotation.z=(b()-.5)*.8,_.castShadow=!0,e.add(_)}const r=new et({color:1710626,roughness:.9,metalness:.1}),a=3+Math.floor(b()*3);for(let x=0;x<a;x++){const _=b()*6.28,A=.2+b()*.5,T=.08+b()*.12,S=new I(new K(T,4,3),r);S.scale.set(1+b()*.5,.5+b()*.4,1+b()*.5),S.position.set(Math.cos(_)*A,T*.3,Math.sin(_)*A),S.rotation.set(b(),b(),b()),e.add(S)}const c=new $({color:k.crystalCore,transparent:!0,opacity:.5});for(let x=0;x<3;x++){const _=.4+b()*.8,A=new I(new Mt(.008,.008,_,3),c);A.position.set((b()-.5)*.15,.5+b()*.7,(b()-.5)*.15),A.rotation.set((b()-.5)*.8,(b()-.5)*.5,(b()-.5)*.8),e.add(A)}const l=new $({color:11206638,transparent:!0,opacity:.6});for(let x=0;x<5;x++){const _=new I(new K(.012,3,3),l);_.position.set((b()-.5)*1,.3+b()*1.5,(b()-.5)*1),e.add(_)}const h=new et({color:k.crystal,emissive:k.crystalCore,emissiveIntensity:.8,transparent:!0,opacity:.5});for(let x=0;x<4;x++){const _=b()*6.28,A=.3+b()*.3,T=new I(new Mt(0,.015,.12+b()*.1,3),h);T.position.set(Math.cos(_)*A,.06+b()*.1,Math.sin(_)*A),T.rotation.z=(b()-.5)*.6,e.add(T)}const f=new et({color:3364198,emissive:1122867,emissiveIntensity:.05,roughness:.9,side:Ot});for(let x=0;x<2;x++){const _=b()*6.28,A=.2+b()*.3,T=new I(new ke(.04+b()*.03,5),f);T.rotation.x=-Math.PI/2+b()*.4,T.position.set(Math.cos(_)*A,.05,Math.sin(_)*A),e.add(T)}const u=new $({color:k.crystalCore,transparent:!0,opacity:.2});for(let x=0;x<2;x++){const _=new I(new Mt(.003,.003,.6+b()*.4,3),u);_.position.set((b()-.5)*.3,.7+b()*.5,(b()-.5)*.3),_.rotation.set((b()-.5)*1,b(),(b()-.5)*1),e.add(_)}const d=new et({color:1135940,emissive:1127202,emissiveIntensity:.3,transparent:!0,opacity:.25});for(let x=0;x<4;x++){const _=new I(new K(.02+b()*.02,3,3),d);_.position.set((b()-.5)*.15,.4+b()*.6,(b()-.5)*.15),e.add(_)}const g=new $({color:11206638,transparent:!0,opacity:.06}),M=new I(new Ae(.35,.02,4,10),g);M.position.y=.6,M.rotation.x=Math.PI/2+b()*.3,e.add(M);const p=new $({color:k.crystal,transparent:!0,opacity:.06,side:Ot}),m=new I(new ke(.8,8),p);m.rotation.x=-Math.PI/2,m.position.y=.01,e.add(m),e.position.set(s,0,t),vt.add(e);const y=new ws(k.crystal,.5,8);return y.position.set(s,1.2,t),vt.add(y),{group:e,mat:i,phase:n,x:s,z:t,light:y}}function ly(s,t,e,n,i){const o=new be,r=[],a=[],c=[],l=n||20,h=new rt(i?i[0]:663568),f=new rt(i?i[1]:1388056),u=new rt(i?i[2]:2777141),d=new rt(i?i[3]:4517461),g=new rt(i?i[4]:7864268),M=new rt(i?i[5]:14548838),p=new rt;for(let E=0;E<l;E++){const w=b()*6.28,v=b()*e,R=Math.cos(w)*v,N=Math.sin(w)*v,D=.25+b()*.65,z=.03+b()*.05,H=(b()-.5)*.2,V=(b()-.5)*.2,Z=(b()-.5)*.12,W=b()<.5?h:f,lt=b(),dt=lt<.4?d:lt<.7?g:M,bt=D*.35,Gt=D*.7,$t=H*.3,J=H*.7,at=V*.3,yt=V*.7;r.push(R-z,.01,N),r.push(R+z,.01,N),r.push(R+$t-z*.9,bt,N+at),c.push(0,0,.35),a.push(W.r,W.g,W.b,W.r,W.g,W.b),p.copy(W).lerp(u,.4),a.push(p.r,p.g,p.b),r.push(R+z,.01,N),r.push(R+$t+z*.9,bt,N+at),r.push(R+$t-z*.9,bt,N+at),c.push(0,.35,.35),a.push(W.r,W.g,W.b),p.copy(W).lerp(u,.4),a.push(p.r,p.g,p.b,p.r,p.g,p.b);const ht=z*.65;r.push(R+$t-z*.9,bt,N+at),r.push(R+$t+z*.9,bt,N+at),r.push(R+J-ht,Gt,N+yt+Z),c.push(.35,.35,.7),p.copy(W).lerp(u,.4),a.push(p.r,p.g,p.b,p.r,p.g,p.b),p.copy(u).lerp(dt,.3),a.push(p.r,p.g,p.b),r.push(R+$t+z*.9,bt,N+at),r.push(R+J+ht,Gt,N+yt+Z),r.push(R+J-ht,Gt,N+yt+Z),c.push(.35,.7,.7),p.copy(W).lerp(u,.4),a.push(p.r,p.g,p.b),p.copy(u).lerp(dt,.3),a.push(p.r,p.g,p.b,p.r,p.g,p.b),r.push(R+J-ht,Gt,N+yt+Z),r.push(R+J+ht,Gt,N+yt+Z),r.push(R+H+Z*2,D,N+V+Z*1.5),c.push(.7,.7,1),p.copy(u).lerp(dt,.3),a.push(p.r,p.g,p.b,p.r,p.g,p.b),a.push(dt.r,dt.g,dt.b)}const m=new rt(i?i[6]:1725736),y=new rt(i?i[7]:3385941),x=Math.floor(l*.3);for(let E=0;E<x;E++){const w=b()*6.28,v=b()*e*.9,R=Math.cos(w)*v,N=Math.sin(w)*v,D=.02+b()*.03;r.push(R-D,.01,N),r.push(R+D,.01,N),r.push(R,.03+b()*.02,N+D),c.push(0,0,.05),a.push(m.r,m.g,m.b),a.push(m.r,m.g,m.b),a.push(y.r,y.g,y.b)}const _=new Wt(r,3);_.setUsage(Ge),o.setAttribute("position",_),o.setAttribute("color",new Wt(a,3)),o.setAttribute("bladeHeight",new Wt(c,1)),o.computeVertexNormals();const A=new Float32Array(r.length);A.set(_.array);const T=new et({vertexColors:!0,roughness:.7,side:Ot,emissive:i?i[8]:4521830,emissiveIntensity:.08}),S=new I(o,T);return S.position.set(s,0,t),vt.add(S),{mesh:S,geo:o,cx:s,cz:t,origPos:A}}function hy(s,t,e,n,i,o,r){const a=s.geo.attributes.position.array,c=s.geo.attributes.bladeHeight.array,l=s.origPos,h=s.cx,f=s.cz,u=o-h,d=r-f;for(let g=0,M=c.length;g<M;g++){const p=c[g];if(p<.01)continue;const m=g*3,y=l[m],x=l[m+1],_=l[m+2],A=(Math.sin(t*.7+(h+y)*.05)*.06+Math.sin(t*1.3+(f+_)*.08)*.03)*e*p*p,T=(Math.sin(t*.9+(f+_)*.06)*.04+Math.sin(t*1.7+(h+y)*.04)*.02)*e*p*p;let S=A+n*p,E=T+i*p;const w=y-u,v=_-d,R=w*w+v*v;if(R<1.44){const N=1-Math.sqrt(R)/1.2,D=N*N*.7,z=Math.atan2(w,v);S+=Math.sin(z)*D*p*.15,E+=Math.cos(z)*D*p*.15,a[m+1]=x*(1-D*p)}else a[m+1]=x;a[m]=y+S,a[m+2]=_+E}s.geo.attributes.position.needsUpdate=!0}function uy(s,t){const e=new pe,n=new et({color:k.fern,emissive:k.fernGlow,emissiveIntensity:.08,roughness:.7,side:Ot}),i=3+Math.floor(b()*2),o=.5+b()*.7,r=new et({color:1708552,roughness:.95}),a=new I(new K(.06,5,3),r);a.scale.set(1.5,.5,1.5),a.position.y=.02,e.add(a);for(let m=0;m<3;m++){const y=b()*6.28,x=new I(new Mt(.003,.002,.08,3),r);x.position.set(Math.cos(y)*.06,.01,Math.sin(y)*.06),x.rotation.z=(y<3.14?1:-1)*1.2,x.rotation.y=y,e.add(x)}for(let m=0;m<i;m++){const y=m/i*6.28+b()*.3,x=new I(new Mt(.004,.006,.55,3),new et({color:1721632,roughness:.8}));x.position.set(Math.cos(y)*.15,.25,Math.sin(y)*.15),x.rotation.y=-y,x.rotation.x=-.6-b()*.4,e.add(x);const _=new I(new ve(.12,.6,1,3),n);_.position.set(Math.cos(y)*.15,.25,Math.sin(y)*.15),_.rotation.y=-y,_.rotation.x=-.6-b()*.4,e.add(_);for(let T=0;T<6;T++){const S=new I(new ve(.07,.06,1,1),n),E=.06+T*.08,w=T%2===0?1:-1;S.position.set(Math.cos(y)*(.15+.06),E,Math.sin(y)*(.15+.06*w)),S.rotation.y=-y,S.rotation.x=-.8,S.rotation.z=w*.5,e.add(S)}const A=new et({color:8939042,emissive:4469521,emissiveIntensity:.1});for(let T=0;T<3;T++){const S=new I(new K(.008,3,3),A),E=.12+T*.12;S.position.set(Math.cos(y)*(.15+.02),E-.01,Math.sin(y)*(.15+.02)),e.add(S)}}const c=new et({color:k.fernGlow,emissive:k.fernGlow,emissiveIntensity:.3}),l=new I(new K(.04,4,3),c);l.position.y=.35,e.add(l);const h=new I(new Mt(.006,.003,.06,3),c);h.position.set(.02,.37,0),h.rotation.z=-.8,e.add(h);const f=new et({color:15663103,emissive:8960989,emissiveIntensity:.1,transparent:!0,opacity:.5,roughness:0,metalness:.5});for(let m=0;m<3;m++){const y=b()*6.28,x=b()*.2,_=new I(new K(.006+b()*.005,3,3),f);_.position.set(Math.cos(y)*x,.12+b()*.2,Math.sin(y)*x),e.add(_)}const u=new et({color:3811856,roughness:.9,side:Ot,transparent:!0,opacity:.6}),d=new I(new ve(.1,.4,1,2),u),g=b()*6.28;d.position.set(Math.cos(g)*.12,.05,Math.sin(g)*.12),d.rotation.x=-1.3,d.rotation.y=g,e.add(d);const M=new $({color:2768928,transparent:!0,opacity:.3});for(let m=0;m<4;m++){const y=new I(new Mt(.001,.001,.015,3),M);y.position.set((b()-.5)*.08,.08+b()*.15,(b()-.5)*.08),y.rotation.z=(b()-.5)*1.5,e.add(y)}const p=new et({color:1708552,roughness:.95});for(let m=0;m<3;m++){const y=new I(new K(.006,3,3),p);y.position.set((b()-.5)*.1,.005,(b()-.5)*.1),e.add(y)}return e.scale.setScalar(o),e.position.set(s,0,t),vt.add(e),{group:e,phase:b()*6.28}}function fy(s,t){const e=new pe,n=.25+b()*.4,i=new et({color:k.flowerStem,roughness:.8}),o=new I(new Mt(.01,.015,n,4),i);o.position.y=n/2,e.add(o);for(let E=0;E<2;E++){const w=new I(new si(.004,.012,3),i);w.position.set(.012,n*.25+E*n*.25,0),w.rotation.z=-1.2,e.add(w)}const r=new et({color:k.fern,roughness:.7,side:Ot}),a=new I(new ve(.06,.04),r);a.position.set(.03,n*.3,0),a.rotation.z=-.5,e.add(a);const c=new I(new ve(.05,.035),r);c.position.set(-.025,n*.5,.01),c.rotation.z=.6,e.add(c);const l=new et({color:1728560,roughness:.7,side:Ot});for(let E=0;E<5;E++){const w=E/5*6.28+.3,v=new I(new ve(.025,.02),l);v.position.set(Math.cos(w)*.025,n-.005,Math.sin(w)*.025),v.rotation.x=-1.2,v.rotation.y=-w,e.add(v)}const h=new et({color:k.flower,emissive:k.flowerGlow,emissiveIntensity:.4+b()*.4,transparent:!0,opacity:.85,side:Ot});for(let E=0;E<6;E++){const w=E/6*6.28,v=new I(new ve(.05,.04),h);v.position.set(Math.cos(w)*.03,n+.01,Math.sin(w)*.03),v.rotation.x=-.8,v.rotation.y=-w,e.add(v)}const f=new et({color:16777215,emissive:k.flowerGlow,emissiveIntensity:1.2}),u=new I(new K(.02,4,3),f);u.position.y=n+.02,e.add(u);const d=new $({color:16777130,transparent:!0,opacity:.7}),g=new $({color:16772676});for(let E=0;E<3;E++){const w=E/3*6.28+.5,v=new I(new Mt(.002,.002,.025,3),d);v.position.set(Math.cos(w)*.012,n+.03,Math.sin(w)*.012),e.add(v);const R=new I(new K(.005,3,3),g);R.position.set(Math.cos(w)*.012,n+.045,Math.sin(w)*.012),e.add(R)}const M=new $({color:16777164,transparent:!0,opacity:.3});for(let E=0;E<2;E++){const w=new I(new K(.006,3,3),M);w.position.set((b()-.5)*.04,n+.06+b()*.04,(b()-.5)*.04),e.add(w)}const p=new et({color:16772778,emissive:16768324,emissiveIntensity:.2,transparent:!0,opacity:.5,roughness:0,metalness:.4}),m=new I(new K(.006,3,3),p);m.position.set(.005,n+.005,.005),e.add(m);const y=new $({color:15662984}),x=new I(new Mt(.002,.002,.03,3),y);x.position.y=n+.035,e.add(x);const _=new I(new K(.005,3,3),y);_.position.y=n+.055,e.add(_);const A=new et({color:1725728,roughness:.7}),T=new I(new Mt(.015,.02,.02,5),A);T.position.y=n-.01,e.add(T);const S=new $({color:16777215,transparent:!0,opacity:.35});for(let E=0;E<4;E++){const w=E/4*6.28+.3,v=new I(new K(.004,3,3),S);v.position.set(Math.cos(w)*.045,n+.005,Math.sin(w)*.045),e.add(v)}return e.position.set(s,0,t),vt.add(e),{group:e,petalMat:h,phase:b()*6.28,baseH:n}}function dy(s,t){const e=new pe,n=new et({color:k.reed,emissive:k.reedTip,emissiveIntensity:.05,roughness:.7}),i=new et({color:k.reedTip,emissive:k.reedTip,emissiveIntensity:.15}),o=new et({color:1709328,roughness:.95}),r=new I(new K(.08,5,3),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=3+Math.floor(b()*4),c=new et({color:k.reed,roughness:.7,side:Ot});for(let d=0;d<a;d++){const g=.6+b()*1,M=(b()-.5)*.2,p=(b()-.5)*.2,m=new I(new Mt(.008,.015,g,4),n);m.position.set(M,g/2,p),e.add(m);const y=2+Math.floor(b()*2),x=new et({color:2771488,roughness:.7});for(let T=0;T<y;T++){const S=g*.2+T*g*.25,E=new I(new Ae(.012,.004,4,6),x);E.position.set(M,S,p),E.rotation.x=Math.PI/2,e.add(E)}if(b()<.7){const T=.1+b()*.15,S=b()*6.28,E=new I(new ve(.02,T),c);E.position.set(M+Math.cos(S)*.02,g*.4,p+Math.sin(S)*.02),E.rotation.y=-S,E.rotation.x=-.5-b()*.4,e.add(E)}const _=new I(new K(.025,4,3),i);_.scale.set(.8,1.5,.8),_.position.set(M,g+.02,p),e.add(_);const A=new $({color:k.reedTip,transparent:!0,opacity:.4});for(let T=0;T<3;T++){const S=T/3*6.28+b()*.5,E=new I(new Mt(.002,.001,.04,3),A);E.position.set(M+Math.cos(S)*.015,g+.05,p+Math.sin(S)*.015),E.rotation.z=(b()-.5)*.4,e.add(E)}}e.position.set(s,0,t),vt.add(e);const l=new et({color:4864536,roughness:.9,side:Ot,transparent:!0,opacity:.5});for(let d=0;d<2;d++){b()*6.28;const g=(b()-.5)*.15,M=new I(new ve(.025,.02),l);M.position.set(g,.2+d*.25,(b()-.5)*.1),M.rotation.set(b()*.5,b(),b()*.5),e.add(M)}const h=new $({color:15654348,transparent:!0,opacity:.25});for(let d=0;d<3;d++){const g=new I(new K(.005,3,3),h);g.position.set((b()-.5)*.15,.8+b()*.6,(b()-.5)*.15),e.add(g)}const f=new et({color:2241312,roughness:.9,transparent:!0,opacity:.2}),u=new I(new Ae(.1,.008,4,8),f);return u.rotation.x=Math.PI/2,u.position.y=.03,e.add(u),{group:e,phase:b()*6.28,swayAmp:.03+b()*.04}}let ln=null;const Ks=[],Ke=new ge,Sa=new rt,Nd=new rt(k.dandSeed);function py(s){const t=new $({color:16777215,transparent:!0,opacity:1});ln=new ys(vn.dandSeed,t,s),ln.instanceMatrix.setUsage(Ge),ln.instanceColor=new Si(new Float32Array(s*3),3),ln.instanceColor.setUsage(Ge),Ke.scale.setScalar(0),Ke.updateMatrix();for(let e=0;e<s;e++)ln.setMatrixAt(e,Ke.matrix),Sa.copy(Nd),ln.setColorAt(e,Sa),Ks.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,drift:0});ln.count=s,vt.add(ln)}function Fd(s,t,e){let n=null;for(let o=0;o<Ks.length;o++)if(!Ks[o].active){n=Ks[o];break}if(!n)return;n.x=s+(Math.random()-.5)*.1,n.y=t,n.z=e+(Math.random()-.5)*.1;const i=Math.random()*6.28;n.vx=Math.cos(i)*.5+Math.random()*.3,n.vy=.6+Math.random()*.8,n.vz=Math.sin(i)*.5,n.life=4+Math.random()*5,n.max=n.life,n.active=!0,n.drift=Math.random()*6.28}let zd=0,Od=0,Bd=0;function my(s,t,e){zd=s,Od=t,Bd=e}function gy(s,t){let e=!1;for(let n=0;n<Ks.length;n++){const i=Ks[n];if(!i.active){Ke.position.set(0,-100,0),Ke.scale.setScalar(0),Ke.updateMatrix(),ln.setMatrixAt(n,Ke.matrix);continue}if(i.life-=s,i.life<=0){i.active=!1,Ke.position.set(0,-100,0),Ke.scale.setScalar(0),Ke.updateMatrix(),ln.setMatrixAt(n,Ke.matrix);continue}i.drift+=(Math.random()-.5)*1.5*s,i.vx+=Math.sin(i.drift)*.3*s,i.vz+=Math.cos(i.drift)*.2*s,i.vx+=zd*.5*s,i.vz+=Od*.5*s,i.vy+=(.15+Bd*.1-i.vy)*s*.5,i.vx*=.998,i.vy*=.998,i.vz*=.998,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s;const r=i.life/i.max*.7*(.6+Math.sin(t*2+n)*.4),a=.8+Math.sin(t*3+n*.5)*.3;Ke.position.set(i.x,i.y,i.z),Ke.scale.setScalar(a),Ke.updateMatrix(),ln.setMatrixAt(n,Ke.matrix),Sa.copy(Nd).multiplyScalar(r),ln.setColorAt(n,Sa),e=!0}ln.instanceMatrix.needsUpdate=!0,e&&(ln.instanceColor.needsUpdate=!0)}function xy(s,t){const e=new pe,n=.35+b()*.45,i=new et({color:2777128,roughness:.7,side:Ot}),o=3+Math.floor(b()*2);for(let x=0;x<o;x++){const _=x/o*6.28+b()*.3,A=new I(new ve(.08,.035),i);A.position.set(Math.cos(_)*.05,.02,Math.sin(_)*.05),A.rotation.x=-1.4,A.rotation.y=-_,e.add(A)}const r=new et({color:k.dandStem,roughness:.8}),a=new I(new Mt(.008,.012,n,4),r);a.position.y=n/2,e.add(a);const c=new $({color:14540236,transparent:!0,opacity:.3});for(let x=0;x<4;x++){const _=n*.2+x*n*.18,A=new I(new Mt(.002,.001,.02,3),c);A.position.set(.01,_,0),A.rotation.z=-.8,e.add(A)}const l=new et({color:k.fern,roughness:.7,side:Ot}),h=new I(new ve(.07,.03),l);h.position.set(.03,n*.15,0),h.rotation.z=-.4,e.add(h);const f=new et({color:k.dandHead,emissive:k.dandSeedGlow,emissiveIntensity:.2,transparent:!0,opacity:.85}),u=new I(new K(.07,6,5),f);u.position.y=n+.05,e.add(u);const d=new et({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.5,roughness:0,metalness:.5}),g=new I(new K(.012,4,3),d);g.position.set(.04,n+.07,.03),e.add(g);const M=new $({color:k.dandSeed,transparent:!0,opacity:.7});for(let x=0;x<8;x++){const _=x/8*6.28+b()*.2,A=new I(new si(.015,.05,3),M);A.position.set(Math.cos(_)*.06,n+.05+b()*.04,Math.sin(_)*.06),A.rotation.x=(b()-.5)*.6,A.rotation.z=(b()-.5)*.6,e.add(A);const T=new $({color:16777215,transparent:!0,opacity:.3}),S=new I(new Mt(.001,.001,.03,3),T);S.position.set(Math.cos(_)*.08,n+.08,Math.sin(_)*.08),S.rotation.set((b()-.5)*.5,0,(b()-.5)*.5),e.add(S);const E=new $({color:15658717,transparent:!0,opacity:.15});for(let w=0;w<2;w++){const v=_+(w-.5)*.5,R=new I(new Mt(8e-4,8e-4,.025,3),E);R.position.set(Math.cos(v)*.075,n+.09,Math.sin(v)*.075),R.rotation.set((b()-.5)*.8,0,(b()-.5)*.8),e.add(R)}}const p=new et({color:3811856,roughness:.9});for(let x=0;x<4;x++){const _=x/4*6.28+b()*.5,A=new I(new K(.005,3,3),p);A.scale.set(.6,1.5,.6),A.position.set(Math.cos(_)*.04,n+.04,Math.sin(_)*.04),e.add(A)}const m=new $({color:1716240,transparent:!0,opacity:.15});for(let x=0;x<3;x++){const _=x/3*6.28,A=new I(new Mt(.001,.001,n*.7,3),m);A.position.set(Math.cos(_)*.01,n*.35,Math.sin(_)*.01),e.add(A)}const y=new $({color:13426107,transparent:!0,opacity:.2});for(let x=0;x<5;x++){const _=n*.1+b()*n*.7,A=b()*6.28,T=new I(new Mt(8e-4,8e-4,.012,3),y);T.position.set(Math.cos(A)*.012,_,Math.sin(A)*.012),T.rotation.z=A<3.14?-.8:.8,T.rotation.y=A,e.add(T)}return e.position.set(s,0,t),vt.add(e),{group:e,headMat:f,x:s,z:t,h:n,dispersed:!1,phase:b()*6.28,seedCount:8,regrowTimer:0}}function _y(s,t,e,n){for(let i=0;i<s.length;i++){const o=s[i];if(o.dispersed){if(o.regrowTimer-=t,o.regrowTimer<=0){o.dispersed=!1;for(let r=2;r<o.group.children.length;r++)o.group.children[r].visible=!0}o.group.rotation.z=Math.sin(e*.9+o.phase)*.02}else{const r=o.x-n.x,a=o.z-n.z;if(r*r+a*a<1.2){o.dispersed=!0;for(let c=0;c<8;c++)Fd(o.x,o.h+.05,o.z);for(let c=2;c<o.group.children.length;c++)o.group.children[c].visible=!1;o.regrowTimer=15+Math.random()*10}else o.group.rotation.z=Math.sin(e*.9+o.phase)*.04,o.headMat.emissiveIntensity=.15+Math.sin(e*1.2+o.phase)*.1}}}function vy(s,t,e){const n=new pe,i=new et({color:k.jellyBell,emissive:k.jellyGlow,emissiveIntensity:.8,transparent:!0,opacity:.5,roughness:.2,metalness:.1,side:Ot}),o=new I(new K(.5,8,6,0,6.28,0,Math.PI/2),i);o.scale.set(1,.6,1),o.position.y=0,n.add(o);const r=new et({color:k.jellyBell,emissive:k.jellyGlow,emissiveIntensity:1,transparent:!0,opacity:.6}),a=new I(new Ae(.48,.025,5,12),r);a.rotation.x=Math.PI/2,a.position.y=-.02,n.add(a);const c=new I(new K(.2,6,4),new $({color:k.jellyGlow,transparent:!0,opacity:.7}));c.position.y=-.05,n.add(c);const l=new $({color:12312063,transparent:!0,opacity:.3});for(let y=-1;y<=1;y+=2){const x=new I(new K(.06,4,3),l);x.scale.set(.6,1.5,.6),x.position.set(y*.08,-.03,0),n.add(x)}const h=new $({color:15663103,transparent:!0,opacity:.7});for(let y=0;y<5;y++){const x=b()*6.28,_=b()*.8,A=new I(new K(.02,3,3),h);A.position.set(Math.cos(x)*_*.35,.1-_*.15,Math.sin(x)*_*.35),n.add(A)}const f=new et({color:k.jellyTent,emissive:k.jellyGlow,emissiveIntensity:.4,transparent:!0,opacity:.4}),u=new $({color:k.jellyGlow,transparent:!0,opacity:.6});for(let y=0;y<6;y++){const x=y/6*6.28,_=.4+b()*.6,A=new I(new Mt(.015,.008,_,3),f);A.position.set(Math.cos(x)*.25,-_/2-.05,Math.sin(x)*.25),n.add(A);const T=new I(new K(.012,3,3),u);T.position.set(Math.cos(x)*.25,-_-.06,Math.sin(x)*.25),n.add(T)}const d=new $({color:k.jellyGlow,transparent:!0,opacity:.12});for(let y=0;y<8;y++){const x=y/8*6.28,_=new I(new Mt(.002,.002,.4,3),d);_.position.set(Math.cos(x)*.2,.05,Math.sin(x)*.2),_.rotation.z=Math.PI/2-.3,_.rotation.y=-x,n.add(_)}const g=new et({color:k.jellyBell,emissive:k.jellyGlow,emissiveIntensity:.6,transparent:!0,opacity:.4});for(let y=0;y<10;y++){const x=y/10*6.28,_=new I(new K(.02,3,3),g);_.scale.set(1,.5,.8),_.position.set(Math.cos(x)*.46,-.04,Math.sin(x)*.46),n.add(_)}const M=new et({color:k.jellyTent,emissive:k.jellyGlow,emissiveIntensity:.5,transparent:!0,opacity:.35}),p=new I(new Mt(.02,.01,.35,4),M);p.position.y=-.2,n.add(p);const m=new $({color:14548991,transparent:!0,opacity:.4});for(let y=0;y<3;y++){const x=y/3*6.28,_=new I(new K(.008,3,3),m);_.position.set(Math.cos(x)*.25,-.55-b()*.3,Math.sin(x)*.25),n.add(_)}return n.position.set(s,t,e),vt.add(n),{group:n,bellMat:i,phase:b()*6.28,driftAng:b()*6.28,homeX:s,homeZ:e,floatY:t,wobble:.5+b()*.5,_init:!0,_state:"drift",_stT:20+Math.random()*30,_migrateAng:0,_pulseSync:0}}function My(s,t){const e=new pe,n=new et({color:k.puffBody,emissive:k.puffGlow,emissiveIntensity:.3,roughness:.8}),i=new I(new K(.3,8,6),n);i.position.y=.35,e.add(i);const o=new et({color:16773344,emissive:k.puffGlow,emissiveIntensity:.15,roughness:.9}),r=new I(new K(.18,6,4),o);r.scale.set(.7,.9,.3),r.position.set(0,.32,.2),e.add(r);const a=new I(new K(.22,7,5),n);a.position.y=.65,e.add(a);const c=[];for(let A=-1;A<=1;A+=2){const T=new I(new si(.06,.15,4),n);T.position.set(A*.13,.85,0),T.rotation.z=A*.3,e.add(T),c.push({mesh:T,side:A,baseRotZ:A*.3});const S=new I(new si(.03,.08,4),new et({color:k.puffCheek,emissive:k.puffCheek,emissiveIntensity:.2}));S.position.set(A*.13,.84,.01),S.rotation.z=A*.3,e.add(S),c.push({mesh:S,side:A,baseRotZ:A*.3})}const l=new $({color:k.puffEye}),h=[];for(let A=-1;A<=1;A+=2){const T=new I(new K(.035,4,4),l);T.position.set(A*.09,.68,.18),e.add(T),h.push(T);const S=new $({color:16777215}),E=new I(new K(.012,3,3),S);E.position.set(A*.09+A*.015,.695,.2),e.add(E),h.push(E)}const f=new $({color:4469555}),u=new I(new K(.015,3,3),f);u.position.set(0,.63,.22),e.add(u);const d=new et({color:k.puffCheek,emissive:k.puffCheek,emissiveIntensity:.3});for(let A=-1;A<=1;A+=2){const T=new I(new K(.04,4,3),d);T.position.set(A*.15,.61,.15),e.add(T)}const g=new $({color:15654348,transparent:!0,opacity:.5});for(let A=-1;A<=1;A+=2)for(let T=0;T<2;T++){const S=new I(new Mt(.002,.002,.06,3),g);S.position.set(A*.12,.62-T*.03,.2),S.rotation.z=A*.7+T*A*.2,S.rotation.x=-.1,e.add(S)}for(let A=-1;A<=1;A+=2){const T=new I(new K(.07,4,3),n);T.position.set(A*.12,.07,.05),T.scale.set(1,.5,1.3),e.add(T);const S=new et({color:16755370,emissive:16746632,emissiveIntensity:.1});for(let E=0;E<3;E++){const w=E/3*6.28,v=new I(new K(.012,3,3),S);v.position.set(A*.12+Math.cos(w)*.03,.03,.05+Math.sin(w)*.03),e.add(v)}}const M=new et({color:16777215,emissive:k.puffGlow,emissiveIntensity:.4,roughness:.9}),p=new I(new K(.06,5,4),M);p.position.set(0,.38,-.28),e.add(p);const m=new et({color:k.puffBody,emissive:k.puffGlow,emissiveIntensity:.2,roughness:1});for(let A=0;A<6;A++){const T=b()*6.28,S=b()*1.2,E=new I(new K(.01,3,3),m);E.position.set(Math.cos(T)*.28,.25+S*.2,Math.sin(T)*.28),e.add(E)}const y=new $({color:k.puffBody});for(let A=-1;A<=1;A+=2){const T=new I(new Mt(.003,.003,.04,3),y);T.position.set(A*.09,.72,.17),T.rotation.z=A*.3,e.add(T)}const x=new $({color:5583684,transparent:!0,opacity:.5}),_=new I(new Mt(.002,.002,.03,3),x);return _.position.set(0,.59,.22),_.rotation.z=Math.PI/2,e.add(_),e.position.set(s,0,t),vt.add(e),{group:e,ears:c,eyes:h,tail:p,phase:b()*6.28,wanderAng:b()*6.28,speed:.6+b()*.8,hopTimer:0,hopPhase:b()*6.28,homeX:s,homeZ:t,state:"idle",idleTimer:b()*3,_init:!0,_followT:0,_scaredT:0,_huddleTarget:-1,_baseY:0,_lastTX:s,_lastTZ:t,_blinkTimer:2+Math.random()*4,_blinkState:0}}function yy(s,t){const e=new pe,n=new et({color:k.deerBody,emissive:k.deerGlow,emissiveIntensity:.5,transparent:!0,opacity:.7,roughness:.3}),i=new I(new K(.4,7,5),n);i.scale.set(1,.8,1.5),i.position.y=.9,e.add(i);const o=new et({color:13431039,emissive:k.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.5}),r=new I(new K(.15,5,4),o);r.scale.set(.8,.6,.5),r.position.set(0,.78,.25),e.add(r);const a=new pe;a.position.set(0,1.15,.3);const c=new I(new Mt(.08,.12,.4,5),n);c.position.set(0,.1,.08),c.rotation.x=-.4,a.add(c);const l=new I(new K(.14,6,5),n);l.position.set(0,.22,.2),a.add(l);const h=new I(new K(.07,4,3),n);h.scale.set(1,.7,1.4),h.position.set(0,.17,.35),a.add(h);const f=new $({color:2245717}),u=new I(new K(.02,3,3),f);u.position.set(0,.17,.43),a.add(u);const d=new $({color:k.deerEye});for(let v=-1;v<=1;v+=2){const R=new I(new K(.025,4,3),d);R.position.set(v*.09,.25,.28),a.add(R);const N=new I(new K(.008,3,3),new $({color:16777215}));N.position.set(v*.085,.26,.29),a.add(N);const D=new $({color:k.deerBody,transparent:!0,opacity:.5}),z=new I(new Mt(.002,.002,.03,3),D);z.position.set(v*.1,.27,.28),z.rotation.z=v*.6,a.add(z)}for(let v=-1;v<=1;v+=2){const R=new I(new si(.04,.14,4),n);R.position.set(v*.1,.37,.15),R.rotation.z=v*.4,a.add(R)}const g=new et({color:k.deerAntler,emissive:k.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.8});for(let v=-1;v<=1;v+=2){const R=new I(new Mt(.015,.02,.25,3),g);R.position.set(v*.08,.42,.12),R.rotation.z=v*.5,a.add(R);const N=new I(new Mt(.01,.015,.15,3),g);N.position.set(v*.15,.55,.1),N.rotation.z=v*.8,a.add(N);const D=new I(new Mt(.008,.012,.1,3),g);D.position.set(v*.11,.5,.16),D.rotation.z=v*.3,D.rotation.x=-.5,a.add(D);const z=new I(new K(.012,3,3),new $({color:k.deerGlow,transparent:!0,opacity:.8}));z.position.set(v*.18,.61,.09),a.add(z)}const M=new et({color:k.deerBody,emissive:k.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),p=new I(new Mt(.01,.02,.1,3),M);p.position.set(0,.11,.28),p.rotation.x=.3,a.add(p);const m=new $({color:1122850});for(let v=-1;v<=1;v+=2){const R=new I(new K(.006,3,3),m);R.position.set(v*.02,.16,.42),a.add(R)}e.add(a);const y=[{x:-.15,z:.3,label:"FL"},{x:.15,z:.3,label:"FR"},{x:-.15,z:-.3,label:"BL"},{x:.15,z:-.3,label:"BR"}],x=new et({color:6715272,emissive:k.deerGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),_=[];for(let v=0;v<4;v++){const R=y[v],N=new pe;N.position.set(R.x,.65,R.z);const D=new I(new Mt(.025,.035,.35,4),n);D.position.y=-.175,N.add(D);const z=new pe;z.position.set(0,-.35,0);const H=new I(new Mt(.02,.03,.3,4),n);H.position.y=-.15,z.add(H);const V=new I(new Mt(.04,.032,.04,4),x);V.position.y=-.3,z.add(V);const Z=new et({color:14544639,emissive:k.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),W=new I(new K(.025,3,3),Z);W.scale.set(1.3,.5,1.3),W.position.y=-.25,z.add(W),N.add(z),e.add(N),_.push({upper:N,lower:z,isFront:v<2,side:R.x<0?-1:1})}const A=new pe;A.position.set(0,1.1,-.55);const T=new I(new si(.05,.15,4),new et({color:16777215,emissive:k.deerGlow,emissiveIntensity:1,transparent:!0,opacity:.8}));A.add(T),e.add(A);const S=new $({color:13434862,transparent:!0,opacity:.3});for(let v=0;v<4;v++){const R=new I(new K(.02,3,3),S);R.position.set((b()-.5)*.25,.8+b()*.3,(b()-.5)*.4),e.add(R)}const E=new $({color:k.deerBody,transparent:!0,opacity:.15});for(let v=0;v<3;v++){const R=new I(new Mt(.002,.002,.2,3),E);R.position.set(.3,.85-v*.06,0),R.rotation.z=Math.PI/2+.3,e.add(R)}const w=new et({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.4,roughness:0,metalness:.5});for(let v=0;v<3;v++){const R=new I(new K(.008,3,3),w);R.position.set((b()-.5)*.3,.9+b()*.3,(b()-.5)*.35),e.add(R)}return e.position.set(s,0,t),vt.add(e),{group:e,mat:n,phase:b()*6.28,wanderAng:b()*6.28,speed:.6+b()*.4,walkTimer:0,legCycle:0,homeX:s,homeZ:t,state:"walk",pauseTimer:0,neckPivot:a,legPivots:_,tailPivot:A,fleeTimer:0,headLook:0,headBob:0,_init:!0,_stT:0,_drinkTgt:null,_zigTimer:0,_zigDir:1,_baseY:0,_lastTX:s,_lastTZ:t}}function wy(s,t,e){const n=new pe,i=new et({color:k.mothBody,emissive:k.mothGlow,emissiveIntensity:.3,roughness:.7}),o=new I(new Mt(.04,.05,.3,5),i);o.rotation.x=Math.PI/2,n.add(o);const r=new et({color:k.mothBody,emissive:k.mothGlow,emissiveIntensity:.5,roughness:.6});for(let p=0;p<3;p++){const m=new I(new Ae(.045,.006,4,8),r);m.position.z=-.05+p*.06,m.rotation.x=0,n.add(m)}const a=new I(new K(.05,5,4),i);a.position.z=.18,n.add(a);const c=new et({color:1122867,roughness:.2,metalness:.4});for(let p=-1;p<=1;p+=2){const m=new I(new K(.018,4,3),c);m.position.set(p*.03,.01,.21),n.add(m)}for(let p=-1;p<=1;p+=2){const m=new I(new Mt(.005,.005,.15,3),i);m.position.set(p*.03,.03,.22),m.rotation.x=-.6,m.rotation.z=p*.4,n.add(m);const y=new $({color:k.mothGlow,transparent:!0,opacity:.7}),x=new I(new K(.015,3,3),y);x.scale.set(2,.5,1),x.position.set(p*.05,.12,.28),n.add(x)}const l=new et({color:k.mothWing,emissive:k.mothGlow,emissiveIntensity:.8,transparent:!0,opacity:.6,side:Ot,roughness:.4});n._wingPivots=[];for(let p=-1;p<=1;p+=2){const m=new pe;m.position.set(p*.04,0,.02);const y=new I(new K(.2,6,4),l);y.scale.set(1.8,.08,1.2),y.position.set(p*.18,0,.02),m.add(y);const x=new I(new K(.12,5,3),l);x.scale.set(1.5,.06,1),x.position.set(p*.12,0,-.1),m.add(x);const _=new et({color:k.mothWing,emissive:k.mothGlow,emissiveIntensity:.6,transparent:!0,opacity:.45,side:Ot}),A=new I(new ve(.03,.12),_);A.position.set(p*.1,0,-.18),A.rotation.y=p*.2,m.add(A);const T=new $({color:k.mothSpot,transparent:!0,opacity:.9}),S=new I(new K(.03,4,3),T);S.position.set(p*.2,.02,.03),m.add(S);const E=new I(new K(.018,3,3),T);E.position.set(p*.1,.02,-.08),m.add(E);const w=new $({color:k.mothGlow,transparent:!0,opacity:.25});for(let v=0;v<2;v++){const R=new I(new Mt(.002,.002,.2,3),w);R.position.set(p*.15,.01,-.02+v*.06),R.rotation.z=Math.PI/2+p*(.15+v*.15),m.add(R)}n.add(m),n._wingPivots.push({pivot:m,side:p})}const h=new $({color:k.mothGlow,transparent:!0,opacity:.25});for(let p=0;p<3;p++){const m=new I(new K(.008,3,3),h);m.position.set((b()-.5)*.04,0,-.15-p*.05),n.add(m)}const f=new $({color:4473907,transparent:!0,opacity:.5}),u=new I(new Ae(.015,.003,4,8,Math.PI*1.5),f);u.position.set(0,-.02,.2),u.rotation.x=.4,n.add(u);const d=new et({color:k.mothBody,emissive:k.mothGlow,emissiveIntensity:.4,roughness:1});for(let p=0;p<5;p++){const m=b()*6.28,y=new I(new K(.008,3,3),d);y.position.set(Math.cos(m)*.04,Math.sin(m)*.04,b()*.15-.05),n.add(y)}const g=new $({color:k.mothBody,transparent:!0,opacity:.4});for(let p=-1;p<=1;p+=2)for(let m=0;m<3;m++){const y=new I(new Mt(.002,.002,.06,3),g);y.position.set(p*.04,-.03,-.05+m*.06),y.rotation.z=p*.8,y.rotation.x=-.3,n.add(y)}const M=new $({color:k.mothGlow,transparent:!0,opacity:.35});for(let p=-1;p<=1;p+=2)for(let m=0;m<5;m++){const y=m/5*Math.PI-Math.PI/2,x=new I(new K(.006,3,3),M);x.position.set(p*(.3+Math.cos(y)*.05),Math.sin(y)*.02,.02+m*.04),n.add(x)}return n.position.set(s,t,e),vt.add(n),{group:n,wingMat:l,phase:b()*6.28,orbitAng:b()*6.28,orbitR:2+b()*4,centerX:s,centerZ:e,floatY:t,flapSpeed:6+b()*4,_init:!0,_state:"patrol",_stT:0,_attractTarget:null,_restTree:null}}function Sy(s,t,e){const n=new pe,i=new $({color:k.wispCore}),o=new I(new K(.08,6,4),i);n.add(o);const r=new $({color:16777215,transparent:!0,opacity:.7,wireframe:!0}),a=new I(new us(.06,0),r);n.add(a);const c=new $({color:k.wispGlow,transparent:!0,opacity:.5}),l=new I(new K(.18,6,4),c);n.add(l);const h=new $({color:k.wispGlow,transparent:!0,opacity:.25}),f=new I(new Ae(.22,.008,4,12),h);f.rotation.x=Math.PI/2,n.add(f);const u=new $({color:k.wispTrail,transparent:!0,opacity:.15}),d=new I(new K(.35,5,4),u);n.add(d);const g=new $({color:16777215,transparent:!0,opacity:.8}),M=new I(new K(.02,3,3),g);M.position.set(.15,0,0),n.add(M);const p=[];for(let S=0;S<3;S++){const E=new $({color:k.wispCore,transparent:!0,opacity:.35}),w=new I(new K(.01,3,3),E);w.position.set((b()-.5)*.1,-.1-S*.08,(b()-.5)*.1),n.add(w),p.push(w)}const m=new $({color:k.wispGlow,transparent:!0,opacity:.18}),y=[];for(let S=0;S<3;S++){const E=S/3*6.28+b()*.5,w=.15+b()*.1,v=new I(new Mt(.003,.001,w,3),m);v.position.set(Math.cos(E)*.1,b()*.08,Math.sin(E)*.1),v.rotation.z=Math.PI/3*(E<3.14?1:-1),v.rotation.y=E,n.add(v),y.push({mesh:v,baseAng:E})}const x=new $({color:k.wispGlow,transparent:!0,opacity:.12}),_=new I(new Ae(.26,.005,4,10),x);_.rotation.x=1.2,_.rotation.z=.8,n.add(_);const A=new $({color:16777215,transparent:!0,opacity:.5});for(let S=0;S<4;S++){const E=b()*6.28,w=b()*.8,v=new I(new K(.006,3,3),A);v.position.set(Math.cos(E)*.06,Math.sin(w)*.06,Math.sin(E)*.06),n.add(v)}const T=new $({color:k.wispCore,transparent:!0,opacity:.2});for(let S=0;S<4;S++){const E=new I(new K(.004,3,3),T);E.position.set(.03+b()*.04,-.05-S*.04,b()*.04),n.add(E)}return n.scale.setScalar(.5),n.position.set(s,t,e),vt.add(n),{group:n,glowMat:c,hazeMat:u,embers:p,tendrils:y,plasmaMat:m,facet:a,halo:f,halo2:_,phase:b()*6.28,targetX:s,targetY:t,targetZ:e,velX:0,velY:0,velZ:0,scatter:0}}function by(s,t){const e=new pe,n=kl,i=8+Math.floor(b()*5),o=new et({color:k.fairyMush,emissive:k.fairyGlow,emissiveIntensity:.2,roughness:.5}),r=new et({color:k.mushStem,roughness:.7,emissive:k.fairyGlow,emissiveIntensity:.05});for(let A=0;A<i;A++){const T=A/i*6.28+b()*.15,S=n+b()*.3-.15,E=.15+b()*.2,w=new I(vn.mushStem,r);w.scale.setScalar(E),w.position.set(Math.cos(T)*S,E*.3,Math.sin(T)*S),e.add(w);const v=new I(vn.mushCap,o);v.scale.set(E,E*.4,E),v.position.set(Math.cos(T)*S,E*.55,Math.sin(T)*S),e.add(v);const R=new $({color:16777215,transparent:!0,opacity:.7}),N=new I(new K(E*.08,3,3),R);N.position.set(Math.cos(T)*S,E*.6,Math.sin(T)*S),e.add(N)}const a=new et({color:8934792,emissive:k.fairyGlow,emissiveIntensity:.1,roughness:.6});for(let A=0;A<5;A++){const T=b()*6.28,S=n+b()*.6-.3,E=.06+b()*.06,w=new I(vn.mushCap,a);w.scale.set(E,E*.5,E),w.position.set(Math.cos(T)*S,E*.35,Math.sin(T)*S),e.add(w)}const c=new et({color:1725733,emissive:664080,emissiveIntensity:.05,roughness:.9});for(let A=0;A<4;A++){const T=b()*6.28,S=b()*n*.8,E=new I(new K(.08+b()*.08,4,3),c);E.scale.set(1.5,.2,1.5),E.position.set(Math.cos(T)*S,.01,Math.sin(T)*S),e.add(E)}const l=new et({color:4478310,emissive:k.fairyGlow,emissiveIntensity:.05,roughness:.85}),h=new I(new K(.12,5,3),l);h.scale.set(1.2,.3,1),h.position.y=.03,e.add(h);const f=new $({color:k.fairyGlow,transparent:!0,opacity:.2}),u=[];for(let A=0;A<8;A++){const T=new I(new K(.012,3,3),f),S=(b()-.5)*n*.8,E=(b()-.5)*n*.8;T.position.set(S,.05+b()*.3,E),e.add(T),u.push({mesh:T,baseX:S,baseZ:E,drift:b()*6.28,speed:.2+b()*.3})}const d=new $({color:k.fairyRing,transparent:!0,opacity:0,side:Ot}),g=new I(new lo(.3,n-.3,16),d);g.rotation.x=-Math.PI/2,g.position.y=.02,e.add(g);const M=new $({color:k.fairyGlow,transparent:!0,opacity:.08});for(let A=0;A<6;A++){const T=b()*6.28,S=T+.5+b()*1.5,E=n*.6+b()*n*.4,w=new I(new Mt(.002,.002,E,3),M);w.position.set(Math.cos((T+S)/2)*n*.4,.005,Math.sin((T+S)/2)*n*.4),w.rotation.x=Math.PI/2,w.rotation.z=T,e.add(w)}const p=new et({color:4864560,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<3;A++){const T=b()*6.28,S=b()*n*.7,E=new I(new K(.03,4,3),p);E.scale.set(1.3,.3,1.3),E.position.set(Math.cos(T)*S,.008,Math.sin(T)*S),e.add(E)}const m=new et({color:7833702,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<2;A++){const T=new I(new ke(.02+b()*.02,4),m);T.position.set((b()-.5)*.08,.06,(b()-.5)*.06),T.rotation.x=-Math.PI/2+b()*.4,e.add(T)}const y=[];for(let A=0;A<5;A++){const T=b()*6.28,S=b()*n*.9,E=new $({color:8978346,transparent:!0,opacity:.25}),w=new I(new K(.005,3,3),E);w.position.set(Math.cos(T)*S,.01,Math.sin(T)*S),e.add(w),y.push(w)}const x=new $({color:657926,transparent:!0,opacity:.15,side:Ot}),_=new I(new lo(n*.5,n*.85,12),x);return _.rotation.x=-Math.PI/2,_.position.y=.008,e.add(_),e.position.set(s,0,t),vt.add(e),{group:e,mushMat:o,discMat:d,sporeMat:f,spores:u,glowWorms:y,x:s,z:t,ringR:n,phase:b()*6.28,glowIntensity:0,active:!1}}function Ty(s,t,e){const n=new pe,i=new et({color:k.bubbleIris,emissive:k.bubbleIris,emissiveIntensity:.15,transparent:!0,opacity:.25,roughness:0,metalness:.6}),o=new I(vn.bubble,i);n.add(o);const r=new $({color:15650047,transparent:!0,opacity:.1}),a=new I(new Ae(.13,.003,4,10),r);a.rotation.x=.5,a.rotation.y=b()*3,n.add(a);const c=new I(new Ae(.11,.003,4,10),r);c.rotation.x=-.8,c.rotation.z=1.2,n.add(c);const l=new $({color:k.bubbleShine,transparent:!0,opacity:.5}),h=new I(new K(.04,4,3),l);h.position.set(.05,.07,.08),n.add(h);const f=new $({color:15658751,transparent:!0,opacity:.2}),u=new I(new K(.025,3,3),f);u.position.set(-.06,-.04,-.06),n.add(u);const d=new $({color:16755438,transparent:!0,opacity:.12}),g=new I(new K(.06,4,3),d);g.position.set(.02,-.02,.01),n.add(g);const M=new $({color:16772863,transparent:!0,opacity:.08}),p=new I(new K(.12,5,4),M);n.add(p);const m=[16764125,13426175,14548940];for(let E=0;E<3;E++){const w=new $({color:m[E],transparent:!0,opacity:.06}),v=new I(new Ae(.14-E*.02,.002,4,8),w);v.position.y=-.04+E*.04,v.rotation.x=Math.PI/2,n.add(v)}const y=new $({color:16777215,transparent:!0,opacity:.6});for(let E=0;E<3;E++){const w=b()*6.28,v=b()*Math.PI-Math.PI/2,R=new I(new K(.003,3,3),y);R.position.set(Math.cos(w)*Math.cos(v)*.14,Math.sin(v)*.14,Math.sin(w)*Math.cos(v)*.14),n.add(R)}const x=new $({color:11189196,transparent:!0,opacity:.1}),_=new I(new K(.015,3,3),x);_.position.set((b()-.5)*.04,(b()-.5)*.04,(b()-.5)*.04),n.add(_);const A=new $({color:k.bubbleIris,transparent:!0,opacity:.15}),T=new I(new K(.04,4,3),A);T.scale.set(1.3,.6,1.3),T.position.y=-.12,n.add(T);const S=.6+b()*.8;return n.scale.setScalar(S),n.position.set(s,t,e),vt.add(n),{group:n,shellMat:i,phase:b()*6.28,driftAng:b()*6.28,driftSpeed:.3+b()*.5,floatY:t,homeX:s,homeZ:e,bobAmp:.3+b()*.4,popped:!1,popTimer:0,sc:S}}function Ey(s,t){const e=new pe,n=1.5+b()*1,i=new et({color:329746,roughness:.9}),o=new I(new ke(n*.85,10),i);o.rotation.x=-Math.PI/2,o.position.y=.005,e.add(o);const r=new et({color:k.pondWater,emissive:k.pondGlow,emissiveIntensity:.2,transparent:!0,opacity:.55,roughness:.05,metalness:.4}),a=new I(new ke(n,12),r);a.rotation.x=-Math.PI/2,a.position.y=.03,e.add(a);const c=new et({color:3816002,roughness:.85}),l=5+Math.floor(b()*4);for(let D=0;D<l;D++){const z=D/l*6.28+b()*.3,H=n+b()*.2-.1,V=.06+b()*.08,Z=new I(new K(V,4,3),c);Z.scale.set(1+b()*.5,.4+b()*.3,1+b()*.5),Z.position.set(Math.cos(z)*H,V*.2,Math.sin(z)*H),Z.rotation.set(b(),b(),b()),e.add(Z)}const h=new et({color:1725728,roughness:.7,side:Ot});for(let D=0;D<3;D++){const z=b()*6.28,H=n*.85+b()*.2;for(let V=0;V<3;V++){const Z=new I(new ve(.015,.15+b()*.1),h);Z.position.set(Math.cos(z)*H+(b()-.5)*.05,.08,Math.sin(z)*H+(b()-.5)*.05),Z.rotation.y=b()*3,Z.rotation.x=-.2,e.add(Z)}}const f=new $({color:11197934,transparent:!0,opacity:.08}),u=[];for(let D=0;D<3;D++){const z=new I(new Ae(1,.004,4,20),f.clone());z.rotation.x=Math.PI/2,z.position.y=.036,e.add(z),u.push({mesh:z,phase:D/3})}const d=new et({color:k.lilyPad,roughness:.6,side:Ot}),g=4+Math.floor(b()*2),M=[];for(let D=0;D<g;D++){const z=b()*6.28,H=b()*n*.6,V=.15+b()*.15,Z=new I(new ke(V,8),d);Z.rotation.x=-Math.PI/2,Z.position.set(Math.cos(z)*H,.05,Math.sin(z)*H),e.add(Z);const W=new $({color:1724448,transparent:!0,opacity:.3}),lt=new I(new Mt(.002,.002,V*1.5,3),W);lt.position.set(Math.cos(z)*H,.052,Math.sin(z)*H),lt.rotation.x=Math.PI/2,lt.rotation.z=b()*3,e.add(lt),M.push({mesh:Z,phase:b()*6.28})}const p=new et({color:k.lilyFlower,emissive:k.lilyGlow,emissiveIntensity:.4,transparent:!0,opacity:.85,side:Ot}),m=.08;for(let D=0;D<6;D++){const z=D/6*6.28,H=new I(new ve(.06,.05),p);H.position.set(M[0].mesh.position.x+Math.cos(z)*.05,m,M[0].mesh.position.z+Math.sin(z)*.05),H.rotation.x=-1,H.rotation.y=-z,e.add(H)}const y=new et({color:16777130,emissive:k.lilyGlow,emissiveIntensity:.8}),x=new I(new K(.025,4,3),y);if(x.position.set(M[0].mesh.position.x,m+.02,M[0].mesh.position.z),e.add(x),M.length>2){const D=new et({color:k.lilyFlower,emissive:k.lilyGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),z=new I(new K(.03,5,4),D);z.scale.set(.8,1.2,.8),z.position.set(M[2].mesh.position.x,.09,M[2].mesh.position.z),e.add(z)}const _=new et({color:3815477,roughness:.8,transparent:!0,opacity:.5});for(let D=0;D<5;D++){const z=b()*6.28,H=b()*n*.7,V=new I(new K(.02+b()*.025,4,3),_);V.scale.set(1+b()*.5,.4,1+b()*.5),V.position.set(Math.cos(z)*H,.015,Math.sin(z)*H),e.add(V)}const A=new $({color:2761752,transparent:!0,opacity:.12,side:Ot});for(let D=0;D<3;D++){const z=b()*6.28,H=b()*n*.5,V=new I(new ke(.08+b()*.06,5),A);V.rotation.x=-Math.PI/2,V.position.set(Math.cos(z)*H,.012,Math.sin(z)*H),e.add(V)}const T=new et({color:1122837,roughness:.7,transparent:!0,opacity:.4}),S=[];for(let D=0;D<2;D++){const z=b()*6.28,H=b()*n*.4,V=new I(new K(.012,4,3),T);V.scale.set(.8,.5,1.3),V.position.set(Math.cos(z)*H,.04,Math.sin(z)*H),e.add(V);const Z=new I(new Mt(.002,.001,.025,3),T);Z.position.set(Math.cos(z)*H-Math.cos(z)*.02,.04,Math.sin(z)*H-Math.sin(z)*.02),Z.rotation.z=Math.PI/2,Z.rotation.y=z,e.add(Z),S.push({body:V,tail:Z,ang:z,orbR:.15+b()*n*.35,speed:.3+b()*.4})}const E=new $({color:2250016,transparent:!0,opacity:.1,side:Ot});for(let D=0;D<3;D++){const z=b()*6.28,H=n*.7+b()*n*.25,V=new I(new ke(.06+b()*.04,5),E);V.rotation.x=-Math.PI/2,V.position.set(Math.cos(z)*H,.032,Math.sin(z)*H),e.add(V)}const w=new $({color:13426158,transparent:!0,opacity:.06}),v=new I(new Ae(n-.05,.01,4,16),w);v.rotation.x=Math.PI/2,v.position.y=.035,e.add(v);const R=new et({color:4861976,roughness:.8,side:Ot,transparent:!0,opacity:.6}),N=new I(new ke(.03,5),R);return N.rotation.x=-Math.PI/2,N.position.set((b()-.5)*n*.5,.04,(b()-.5)*n*.5),e.add(N),e.position.set(s,0,t),vt.add(e),{group:e,waterMat:r,flMat:p,pads:M,ripples:u,tadpoles:S,x:s,z:t,phase:b()*6.28,pondR:n}}function Ay(s,t){const e=new pe,n=new $({color:k.orbGold}),i=new I(new K(.2,10,8),n);e.add(i);const o=new $({color:16777215}),r=new I(new K(.06,6,4),o);e.add(r);const a=new $({color:16772744,transparent:!0,opacity:.4,wireframe:!0}),c=new I(new us(.15,0),a);e.add(c);const l=new $({color:k.orbGlow,transparent:!0,opacity:.5}),h=new I(new K(.35,8,6),l);e.add(h);const f=new $({color:k.orbGlow,transparent:!0,opacity:.3});for(let S=0;S<8;S++){const E=S/8*6.28,w=new I(new si(.02,.25,3),f);w.position.set(Math.cos(E)*.3,Math.sin(E*2)*.05,Math.sin(E)*.3),w.rotation.z=-E+Math.PI/2,w.rotation.y=E,e.add(w)}const u=new $({color:k.orbInner,transparent:!0,opacity:.15}),d=new I(new K(.6,8,5),u);e.add(d);for(let S=0;S<6;S++){const E=new I(new K(.03,4,3),new $({color:16777215})),w=S/6*6.28;E.position.set(Math.cos(w)*.4,Math.sin(w*2)*.1,Math.sin(w)*.4),e.add(E)}const g=new $({color:k.orbGold,transparent:!0,opacity:.7});for(let S=0;S<4;S++){const E=S/4*6.28+.4,w=new I(new K(.015,3,3),g);w.position.set(Math.cos(E)*.5,0,Math.sin(E)*.5),e.add(w)}const M=new $({color:16768426,transparent:!0,opacity:.12});for(let S=0;S<3;S++){const E=new I(new Ae(.28,.003,4,12),M);E.rotation.set(S*1.05,S*.7,0),e.add(E)}const p=new $({color:k.orbGlow,transparent:!0,opacity:.08}),m=new I(new Ae(.4,.004,4,16),p);m.rotation.x=Math.PI/2,e.add(m);const y=new $({color:16772812,transparent:!0,opacity:.15}),x=new I(new Ae(.25,.012,4,10),y);x.rotation.x=Math.PI/2,e.add(x);const _=new $({color:16777215,transparent:!0,opacity:.5});for(let S=0;S<6;S++){const E=b()*6.28,w=b()*Math.PI-Math.PI/2,v=new I(new K(.008,3,3),_);v.position.set(Math.cos(E)*Math.cos(w)*.2,Math.sin(w)*.2,Math.sin(E)*Math.cos(w)*.2),e.add(v)}const A=new $({color:k.orbGlow,transparent:!0,opacity:.1,side:Ot}),T=new I(new ke(.5,8),A);return T.rotation.x=-Math.PI/2,T.position.y=-.95,e.add(T),e.position.set(s,1,t),vt.add(e),{group:e,coreMat:n,glowMat:l,hazeMat:u,x:s,z:t,found:!1,flyUp:!1,flyY:1,phase:b()*6.28,laserLine:null,laserMat:null}}function Ry(s,t){const e=new pe,n=new et({color:k.rockBase,roughness:.85,metalness:.05}),i=new et({color:k.rockLight,roughness:.8,metalness:.05}),o=new et({color:k.rockMoss,emissive:k.rockMoss,emissiveIntensity:.03,roughness:.9}),r=.3+b()*.5,a=new I(new K(r,8,6),b()<.6?n:i),c=.4+b()*.4;a.scale.set(1+b()*.6,c,1+b()*.6),a.position.y=r*c*.35,a.rotation.set(b()*.5,b()*3,b()*.3),a.castShadow=!0,a.receiveShadow=!0,e.add(a);const l=1+Math.floor(b()*3);for(let T=0;T<l;T++){const S=b()*6.28,E=r*.6+b()*r*.5,w=r*.3+b()*r*.4,v=new I(new K(w,5,4),b()<.5?n:i),R=.3+b()*.4;v.scale.set(1+b()*.5,R,1+b()*.5),v.position.set(Math.cos(S)*E,w*R*.3,Math.sin(S)*E),v.rotation.set(b()*.8,b()*3,b()*.5),e.add(v)}const h=2+Math.floor(b()*3);for(let T=0;T<h;T++){const S=b()*6.28,E=b()*r*.6,w=r*.15+b()*r*.2,v=new I(new K(w,4,3),o);v.scale.set(1.5,.2,1.5),v.position.set(Math.cos(S)*E,r*.35+b()*.05,Math.sin(S)*E),e.add(v)}const f=[8943428,10061909,6715221,11180390];for(let T=0;T<3;T++){const S=new et({color:f[Math.floor(b()*f.length)],roughness:.9,transparent:!0,opacity:.5}),E=b()*6.28,w=new I(new K(r*.06+b()*r*.08,3,3),S);w.scale.set(2,.15,2),w.position.set(Math.cos(E)*r*.5,r*.25+b()*.1,Math.sin(E)*r*.5),e.add(w)}const u=new $({color:1381656,transparent:!0,opacity:.35}),d=2+Math.floor(b()*3);for(let T=0;T<d;T++){const S=b()*6.28,E=r*.3+b()*r*.4,w=new I(new Mt(.003,.001,E,3),u),v=r*.3+b()*r*.2;w.position.set(Math.cos(S)*v,r*.2+b()*r*.15,Math.sin(S)*v),w.rotation.set(b()*.5,S,Math.PI/2+b()*.4),e.add(w)}const g=new $({color:660752,transparent:!0,opacity:.2,side:Ot}),M=1+Math.floor(b()*2);for(let T=0;T<M;T++){const S=b()*6.28,E=r*.3+b()*r*.3,w=new I(new ve(.02+b()*.015,E),g);w.position.set(Math.cos(S)*r*.45,r*.15,Math.sin(S)*r*.45),w.rotation.y=-S,e.add(w)}const p=[],m=new $({color:8965375,transparent:!0,opacity:.4});if(b()<.5){const T=2+Math.floor(b()*3);for(let S=0;S<T;S++){const E=b()*6.28,w=r*.25+b()*r*.25,v=new I(new K(.006,3,3),m);v.position.set(Math.cos(E)*w,r*.15+b()*r*.2,Math.sin(E)*w),e.add(v),p.push(v)}}const y=new $({color:657926,transparent:!0,opacity:.12,side:Ot}),x=new I(new lo(r*.5,r*1,8),y);x.rotation.x=-Math.PI/2,x.position.y=.005,e.add(x);const _=new et({color:3816e3,roughness:.9}),A=4+Math.floor(b()*3);for(let T=0;T<A;T++){const S=b()*6.28,E=r*.5+b()*r*.6,w=.03+b()*.05,v=new I(new K(w,3,3),_);v.scale.set(1+b()*.5,.4,1+b()*.5),v.position.set(Math.cos(S)*E,w*.15,Math.sin(S)*E),e.add(v)}if(b()<.6){const T=new et({color:3385941,emissive:k.grassTip,emissiveIntensity:.05,roughness:.7,side:Ot});for(let S=0;S<3;S++){const E=b()*6.28,w=new I(new ve(.015,.08+b()*.06),T);w.position.set(Math.cos(E)*r*.3,r*.3,Math.sin(E)*r*.3),w.rotation.y=b()*3,w.rotation.x=-.2-b()*.3,e.add(w)}}return e.position.set(s,0,t),vt.add(e),{group:e,x:s,z:t,colR:r*.8,sparkles:p,sparkleMat:m}}let kd=null,Gd=null,Hd=null;function Cy(){return kd}function Py(){return Gd}function Iy(){return Hd}function Ly(){const s=new pe,t=new et({color:k.obeliskBlack,roughness:.2,metalness:.8,emissive:k.obeliskPink,emissiveIntensity:0});Gd=t;const e=new I(new Mt(1.2,1.8,Be,4),t);e.position.y=Be/2,e.rotation.y=Math.PI/4,e.castShadow=!0,s.add(e);const n=new $({color:3351108,transparent:!0,opacity:.2});for(let y=0;y<4;y++){const x=y/4*6.28+Math.PI/4,_=new I(new Mt(.03,.04,Be*.9,3),n);_.position.set(Math.cos(x)*1.55,Be*.45,Math.sin(x)*1.55),s.add(_)}const i=new $({color:k.obeliskPink,transparent:!0,opacity:0});for(let y=0;y<4;y++){const x=y/4*6.28+Math.PI/4;for(let A=0;A<3;A++){const T=6+A*4,S=new I(new Mt(.015,.015,.8,3),i);S.position.set(Math.cos(x)*1.6,T,Math.sin(x)*1.6),S.rotation.z=Math.PI/2,S.rotation.y=-x,S.visible=!1,s.add(S)}const _=new I(new Mt(.012,.012,2.5,3),i);_.position.set(Math.cos(x)*1.6,12,Math.sin(x)*1.6),_.visible=!1,s.add(_)}const o=new et({color:k.obeliskBlack,roughness:.1,metalness:.9,emissive:k.obeliskPink,emissiveIntensity:0});Hd=o;const r=new I(new si(1.3,3,4),o);r.position.y=Be+1.5,r.rotation.y=Math.PI/4,s.add(r);const a=new $({color:k.obeliskPink,transparent:!0,opacity:0});for(let y=0;y<4;y++){const x=y/4*6.28+Math.PI/4,_=new I(new Mt(.02,.02,3.2,3),a);_.position.set(Math.cos(x)*.8,Be+1.5,Math.sin(x)*.8),_.rotation.z=.35*(x<3.14?1:-1),_.rotation.y=-x,_.visible=!1,s.add(_)}for(let y=0;y<5;y++){const x=new I(new Ae(1.85-y*.02,.04,6,4),new $({color:2236979}));x.position.y=4+y*5,x.rotation.x=Math.PI/2,s.add(x)}const c=new et({color:1118488,roughness:.3,metalness:.7}),l=new I(new Mt(2.2,2.5,.6,4),c);l.position.y=.3,l.rotation.y=Math.PI/4,s.add(l);const h=new I(new Mt(2.8,3,.4,4),c);h.position.y=.05,h.rotation.y=Math.PI/4,s.add(h);const f=new $({color:k.obeliskPink,transparent:!0,opacity:0});for(let y=0;y<8;y++){const x=y/8*6.28,_=new I(new K(.06,4,3),f);_.position.set(Math.cos(x)*2.5,Be*.7+y*.5,Math.sin(x)*2.5),_.visible=!1,s.add(_)}const u=new $({color:1710626,transparent:!0,opacity:.08});for(let y=0;y<6;y++){const x=b()*6.28,_=2+b()*Be*.7,A=new I(new Mt(.008,.008,.5+b()*.5,3),u);A.position.set(Math.cos(x)*1.6,_,Math.sin(x)*1.6),A.rotation.z=(b()-.5)*.8,A.rotation.y=-x,s.add(A)}const d=new et({color:921108,roughness:.5,metalness:.4});for(let y=0;y<12;y++){const x=b()*6.28,_=3+b()*2,A=.15+b()*.25,T=new I(new K(A,4,3),d);T.scale.set(1+b()*.5,.3+b()*.3,1+b()*.5),T.position.set(Math.cos(x)*_,A*.15,Math.sin(x)*_),T.rotation.set(b(),b(),b()),s.add(T)}const g=new $({color:k.obeliskPink,transparent:!0,opacity:0});for(let y=0;y<4;y++){const x=y/4*6.28+Math.PI/4;for(let _=0;_<5;_++){const A=5+_*3.5+b()*.5,T=(b()-.5)*.4,S=new I(new K(.04,4,3),g);S.position.set(Math.cos(x)*1.58+Math.cos(x+1.57)*T,A,Math.sin(x)*1.58+Math.sin(x+1.57)*T),S.visible=!1,s.add(S)}}const M=new $({color:0,transparent:!0,opacity:.15,side:Ot}),p=new I(new ke(4,8),M);p.rotation.x=-Math.PI/2,p.position.y=.005,s.add(p),s.position.set(0,-Be,0),vt.add(s),kd=s;const m=new ws(8939212,0,30);s.add(m),m.position.set(0,Be+1,0)}let Vd=null,Wd=null;function Dy(){return Vd}function Uy(){return Wd}function Ny(){const s=new et({color:k.moatBlue,emissive:1136042,emissiveIntensity:.3,transparent:!0,opacity:0,roughness:.1,metalness:.3});Wd=s;const t=new Fl;t.absarc(0,0,6,0,6.28,!1);const e=new ga;e.absarc(0,0,3,0,6.28,!0),t.holes.push(e);const n=new xa(t,24),i=new I(n,s);i.rotation.x=-Math.PI/2,i.position.y=.05,i.visible=!1,vt.add(i),Vd=i;const o=new $({color:4491468,transparent:!0,opacity:0});for(let d=0;d<12;d++){const g=d/12*6.28+b()*.3,M=3.5+b()*2,p=new I(new K(.04+b()*.04,4,3),o);p.scale.set(1.2,.4,1.2),p.position.set(Math.cos(g)*M,.02,Math.sin(g)*M),p.visible=!1,vt.add(p)}const r=new $({color:13426158,transparent:!0,opacity:0,side:Ot});for(let d=0;d<6;d++){const g=d/6*6.28+b()*.5,M=new I(new ke(.12+b()*.1,5),r);M.rotation.x=-Math.PI/2,M.position.set(Math.cos(g)*3.3,.06,Math.sin(g)*3.3),M.visible=!1,vt.add(M)}const a=new $({color:8960989,transparent:!0,opacity:0});for(let d=0;d<8;d++){const g=d/8*6.28,M=4+b()*1.5,p=new I(new Mt(.003,.003,.4,3),a);p.position.set(Math.cos(g)*M,.055,Math.sin(g)*M),p.rotation.x=Math.PI/2,p.rotation.z=g+Math.PI/2,p.visible=!1,vt.add(p)}const c=new $({color:264208,transparent:!0,opacity:0,side:Ot}),l=new Fl;l.absarc(0,0,5.2,0,6.28,!1);const h=new ga;h.absarc(0,0,3.8,0,6.28,!0),l.holes.push(h);const f=new xa(l,16),u=new I(f,c);u.rotation.x=-Math.PI/2,u.position.y=.04,u.visible=!1,vt.add(u)}const nh=[];function Fy(){for(let r=0;r<6;r++){const a=k.rainbow[r],c=r/6*6.28,l=5+r*.5,h=Be+5+r*2,f=[];for(let T=0;T<=12;T++){const S=T/12,E=c+S*Math.PI,w=Math.cos(E)*l,v=Math.sin(E)*l,R=Math.sin(S*Math.PI)*h;f.push(new U(w,R,v))}const u=new Ul(f),d=new $({color:a,transparent:!0,opacity:0}),g=new ho(u,20,.12-r*.008,5,!1),M=new I(g,d);M.visible=!1,vt.add(M);const p=new $({color:a,transparent:!0,opacity:0});for(let T=0;T<5;T++){const S=(T+.5)/5,E=u.getPoint(S),w=new I(new K(.05,3,3),p);w.position.copy(E),w.visible=!1,vt.add(w)}const m=new $({color:a,transparent:!0,opacity:0,side:Ot}),y=f[0],x=f[f.length-1],_=new I(new ke(.5,6),m);_.rotation.x=-Math.PI/2,_.position.set(y.x,.03,y.z),_.visible=!1,vt.add(_);const A=new I(new ke(.5,6),m);A.rotation.x=-Math.PI/2,A.position.set(x.x,.03,x.z),A.visible=!1,vt.add(A),nh.push({mesh:M,mat:d,targetOpacity:0})}const s=[],t=9.5,e=Be+12;for(let r=0;r<=12;r++){const a=r/12,c=a*Math.PI;s.push(new U(Math.cos(c)*t,Math.sin(a*Math.PI)*e,Math.sin(c)*t))}const n=new Ul(s),i=new $({color:15654399,transparent:!0,opacity:0}),o=new I(new ho(n,16,.04,4,!1),i);o.visible=!1,vt.add(o),nh.push({mesh:o,mat:i,targetOpacity:0})}let hn=null;const Yn=[],Je=new ge,Xo=new rt;function zy(s){const t=new $({color:16777215,transparent:!0,opacity:1});hn=new ys(vn.fly,t,s),hn.instanceMatrix.setUsage(Ge),hn.instanceColor=new Si(new Float32Array(s*3),3),hn.instanceColor.setUsage(Ge),Je.scale.setScalar(0),Je.updateMatrix();for(let e=0;e<s;e++){hn.setMatrixAt(e,Je.matrix);const n=e%3===0?k.fireflyB:k.firefly;Xo.setHex(n),hn.setColorAt(e,Xo),Yn.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,phase:Math.random()*6.28,wander:Math.random()*6.28,colorHex:n})}hn.count=s,vt.add(hn)}function na(s,t,e,n){let i=null;for(let o=0;o<Yn.length;o++)if(!Yn[o].active){i=Yn[o];break}if(!i){let o=1/0;for(let r=0;r<Yn.length;r++)Yn[r].life<o&&(o=Yn[r].life,i=Yn[r])}i.x=s,i.y=t+.5+Math.random()*3,i.z=e,i.vx=(Math.random()-.5)*2,i.vy=Math.random()-.5,i.vz=(Math.random()-.5)*2,i.life=n,i.max=n,i.active=!0,i.wander=Math.random()*6.28}function Xd(s,t){let e=0,n=!1;for(let i=0;i<Yn.length;i++){const o=Yn[i];if(!o.active){Je.position.set(0,-100,0),Je.scale.setScalar(0),Je.updateMatrix(),hn.setMatrixAt(i,Je.matrix);continue}if(o.life-=s,o.life<=0){o.active=!1,Je.position.set(0,-100,0),Je.scale.setScalar(0),Je.updateMatrix(),hn.setMatrixAt(i,Je.matrix);continue}e++,o.wander+=(Math.random()-.5)*3*s,o.vx+=Math.cos(o.wander)*1.5*s,o.vz+=Math.sin(o.wander)*1.5*s,o.vy+=Math.sin(t*2+o.phase)*s,o.vx*=.995,o.vy*=.995,o.vz*=.995,o.x+=o.vx*s,o.y+=o.vy*s,o.z+=o.vz*s;const r=ne(o.x,o.z)+.3;o.y<r&&(o.y=r,o.vy=Math.abs(o.vy)*.5),o.y>12&&(o.vy-=2*s);const a=Math.sin(t*3+o.phase)*.5+.5,l=o.life/o.max*(.4+a*.6),h=.6+a*.6;Je.position.set(o.x,o.y,o.z),Je.scale.setScalar(h),Je.updateMatrix(),hn.setMatrixAt(i,Je.matrix),Xo.setHex(o.colorHex),Xo.multiplyScalar(l),hn.setColorAt(i,Xo),n=!0}return hn.instanceMatrix.needsUpdate=!0,n&&(hn.instanceColor.needsUpdate=!0),e}let un=null;const qn=[],Qe=new ge,ba=new rt,Oy=new rt(k.spore);function By(s){const t=new $({color:16777215,transparent:!0,opacity:1});un=new ys(vn.spore,t,s),un.instanceMatrix.setUsage(Ge),un.instanceColor=new Si(new Float32Array(s*3),3),un.instanceColor.setUsage(Ge),Qe.scale.setScalar(0),Qe.updateMatrix();for(let e=0;e<s;e++)un.setMatrixAt(e,Qe.matrix),ba.setHex(k.spore),un.setColorAt(e,ba),qn.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});un.count=s,vt.add(un)}function ky(s,t,e){let n=null;for(let i=0;i<qn.length;i++)if(!qn[i].active){n=qn[i];break}if(!n){let i=1/0;for(let o=0;o<qn.length;o++)qn[o].life<i&&(i=qn[o].life,n=qn[o])}n.x=s,n.y=t,n.z=e,n.vx=(Math.random()-.5)*.3,n.vy=.4+Math.random()*.4,n.vz=(Math.random()-.5)*.3,n.life=3+Math.random()*3,n.max=n.life,n.active=!0}let Yd=0,qd=0;function Gy(s,t){Yd=s,qd=t}function Hy(s){let t=0,e=!1;for(let n=0;n<qn.length;n++){const i=qn[n];if(!i.active){Qe.position.set(0,-100,0),Qe.scale.setScalar(0),Qe.updateMatrix(),un.setMatrixAt(n,Qe.matrix);continue}if(i.life-=s,i.life<=0){i.active=!1,Qe.position.set(0,-100,0),Qe.scale.setScalar(0),Qe.updateMatrix(),un.setMatrixAt(n,Qe.matrix);continue}t++,i.vy+=.3*s,i.vx+=Yd*.3*s,i.vz+=qd*.3*s,i.vx*=.997,i.vy*=.997,i.vz*=.997,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s;const o=i.life/i.max*.7;Qe.position.set(i.x,i.y,i.z),Qe.scale.setScalar(1),Qe.updateMatrix(),un.setMatrixAt(n,Qe.matrix),ba.copy(Oy).multiplyScalar(o),un.setColorAt(n,ba),e=!0}return un.instanceMatrix.needsUpdate=!0,e&&(un.instanceColor.needsUpdate=!0),t}let fn=null;const Js=[];let Lc=0;const tn=new ge,Ta=new rt,Zd=new rt(k.starMote);function Vy(s){const t=new $({color:16777215,transparent:!0,opacity:1});fn=new ys(vn.starMote,t,s),fn.instanceMatrix.setUsage(Ge),fn.instanceColor=new Si(new Float32Array(s*3),3),fn.instanceColor.setUsage(Ge),tn.scale.setScalar(0),tn.updateMatrix();for(let e=0;e<s;e++)fn.setMatrixAt(e,tn.matrix),Ta.copy(Zd),fn.setColorAt(e,Ta),Js.push({x:0,y:0,z:0,life:0,max:0,active:!1,vy:0,drift:0});fn.count=s,vt.add(fn)}function Wy(s){let t=null;for(let e=0;e<Js.length;e++)if(!Js[e].active){t=Js[e];break}t&&(t.x=s.x+(Math.random()-.5)*60,t.z=s.z+(Math.random()-.5)*60,t.y=15+Math.random()*20,t.life=6+Math.random()*6,t.max=t.life,t.active=!0,t.vy=-.15-Math.random()*.3,t.drift=Math.random()*6.28)}function $d(s,t,e){Lc+=s,Lc>.15&&(Lc=0,Wy(e));let n=!1;for(let i=0;i<Js.length;i++){const o=Js[i];if(!o.active){tn.position.set(0,-100,0),tn.scale.setScalar(0),tn.updateMatrix(),fn.setMatrixAt(i,tn.matrix);continue}if(o.life-=s,o.life<=0||o.y<.5){o.active=!1,tn.position.set(0,-100,0),tn.scale.setScalar(0),tn.updateMatrix(),fn.setMatrixAt(i,tn.matrix);continue}o.y+=o.vy*s,o.drift+=(Math.random()-.5)*.5*s,o.x+=Math.sin(o.drift)*.1*s,o.z+=Math.cos(o.drift)*.08*s;const r=o.life/o.max,a=Math.sin(t*4+i)*.3+.7,c=r*a*.7,l=.5+a*.5;tn.position.set(o.x,o.y,o.z),tn.scale.setScalar(l),tn.updateMatrix(),fn.setMatrixAt(i,tn.matrix),Ta.copy(Zd).multiplyScalar(c),fn.setColorAt(i,Ta),n=!0}fn.instanceMatrix.needsUpdate=!0,n&&(fn.instanceColor.needsUpdate=!0)}let dn=null;const Qs=[],en=new ge,Ea=new rt,jd=new rt(8956535);function Xy(s){const t=new $({color:16777215,transparent:!0,opacity:1});dn=new ys(vn.dustMote,t,s),dn.instanceMatrix.setUsage(Ge),dn.instanceColor=new Si(new Float32Array(s*3),3),dn.instanceColor.setUsage(Ge),en.scale.setScalar(0),en.updateMatrix();for(let e=0;e<s;e++)dn.setMatrixAt(e,en.matrix),Ea.copy(jd),dn.setColorAt(e,Ea),Qs.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});dn.count=s,vt.add(dn)}function yf(s,t,e){for(let n=0;n<e;n++){let i=null;for(let a=0;a<Qs.length;a++)if(!Qs[a].active){i=Qs[a];break}if(!i)continue;const o=Math.random()*6.28,r=1+Math.random()*2;i.x=s+Math.cos(o)*.2,i.y=ne(s,t)+.1,i.z=t+Math.sin(o)*.2,i.vx=Math.cos(o)*r,i.vy=.5+Math.random()*1.5,i.vz=Math.sin(o)*r,i.life=.6+Math.random()*.6,i.max=i.life,i.active=!0}}function Yy(s){let t=!1;for(let e=0;e<Qs.length;e++){const n=Qs[e];if(!n.active){en.position.set(0,-100,0),en.scale.setScalar(0),en.updateMatrix(),dn.setMatrixAt(e,en.matrix);continue}if(n.life-=s,n.life<=0){n.active=!1,en.position.set(0,-100,0),en.scale.setScalar(0),en.updateMatrix(),dn.setMatrixAt(e,en.matrix);continue}n.vy-=3*s,n.vx*=.96,n.vy*=.96,n.vz*=.96,n.x+=n.vx*s,n.y+=n.vy*s,n.z+=n.vz*s;const i=ne(n.x,n.z)+.05;n.y<i&&(n.y=i,n.vy=0,n.vx*=.8,n.vz*=.8);const o=n.life/n.max*.4;en.position.set(n.x,n.y,n.z),en.scale.setScalar(1),en.updateMatrix(),dn.setMatrixAt(e,en.matrix),Ea.copy(jd).multiplyScalar(o),dn.setColorAt(e,Ea),t=!0}dn.instanceMatrix.needsUpdate=!0,t&&(dn.instanceColor.needsUpdate=!0)}let pn=null;const to=[],nn=new ge,Aa=new rt,Kd=new rt(k.bubblePop),qy=new K(.02,3,3);function Zy(s){const t=new $({color:16777215,transparent:!0,opacity:1});pn=new ys(qy,t,s),pn.instanceMatrix.setUsage(Ge),pn.instanceColor=new Si(new Float32Array(s*3),3),pn.instanceColor.setUsage(Ge),nn.scale.setScalar(0),nn.updateMatrix();for(let e=0;e<s;e++)pn.setMatrixAt(e,nn.matrix),Aa.copy(Kd),pn.setColorAt(e,Aa),to.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});pn.count=s,vt.add(pn)}function $y(s,t,e,n){for(let i=0;i<n;i++){let o=null;for(let l=0;l<to.length;l++)if(!to[l].active){o=to[l];break}if(!o)continue;const r=Math.random()*6.28,a=Math.random()*3.14,c=1+Math.random()*2;o.x=s,o.y=t,o.z=e,o.vx=Math.cos(r)*Math.sin(a)*c,o.vy=Math.cos(a)*c,o.vz=Math.sin(r)*Math.sin(a)*c,o.life=.4+Math.random()*.4,o.max=o.life,o.active=!0}}function jy(s){let t=!1;for(let e=0;e<to.length;e++){const n=to[e];if(!n.active){nn.position.set(0,-100,0),nn.scale.setScalar(0),nn.updateMatrix(),pn.setMatrixAt(e,nn.matrix);continue}if(n.life-=s,n.life<=0){n.active=!1,nn.position.set(0,-100,0),nn.scale.setScalar(0),nn.updateMatrix(),pn.setMatrixAt(e,nn.matrix);continue}n.vy-=2*s,n.vx*=.97,n.vy*=.97,n.vz*=.97,n.x+=n.vx*s,n.y+=n.vy*s,n.z+=n.vz*s;const i=n.life/n.max*.8;nn.position.set(n.x,n.y,n.z),nn.scale.setScalar(1),nn.updateMatrix(),pn.setMatrixAt(e,nn.matrix),Aa.copy(Kd).multiplyScalar(i),pn.setColorAt(e,Aa),t=!0}pn.instanceMatrix.needsUpdate=!0,t&&(pn.instanceColor.needsUpdate=!0)}let mn=null;const eo=[],Xe=new ge,Ra=new rt,Jd=[new rt(k.leafGlow),new rt(3394662),new rt(2271880),new rt(5636044),new rt(4513262)];let Qd=0,tp=0;function Ky(s,t,e){Qd=s,tp=t}function Jy(s){const t=new ve(.12,.08),e=new $({color:16777215,transparent:!0,opacity:1,side:Ot,depthWrite:!1,blending:Bi});mn=new ys(t,e,s),mn.instanceMatrix.setUsage(Ge),mn.instanceColor=new Si(new Float32Array(s*3),3),mn.instanceColor.setUsage(Ge),Xe.scale.setScalar(0),Xe.updateMatrix();for(let n=0;n<s;n++)mn.setMatrixAt(n,Xe.matrix),Ra.setHex(0),mn.setColorAt(n,Ra),eo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,rvx:0,rvy:0,rvz:0,life:0,max:0,active:!1,colorIdx:0});mn.count=s,vt.add(mn)}function Qy(s,t,e){let n=null;for(let o=0;o<eo.length;o++)if(!eo[o].active){n=eo[o];break}if(!n)return;n.x=s+(Math.random()-.5)*2,n.y=t+Math.random()*2,n.z=e+(Math.random()-.5)*2;const i=Math.random()*6.28;n.vx=Math.cos(i)*.3,n.vy=-.2-Math.random()*.3,n.vz=Math.sin(i)*.3,n.rvx=(Math.random()-.5)*4,n.rvy=(Math.random()-.5)*3,n.rvz=(Math.random()-.5)*2,n.rx=Math.random()*6.28,n.ry=Math.random()*6.28,n.rz=Math.random()*6.28,n.life=4+Math.random()*4,n.max=n.life,n.active=!0,n.colorIdx=Math.floor(Math.random()*Jd.length)}function tw(s,t){let e=!1;for(let n=0;n<eo.length;n++){const i=eo[n];if(!i.active){Xe.position.set(0,-100,0),Xe.scale.setScalar(0),Xe.updateMatrix(),mn.setMatrixAt(n,Xe.matrix);continue}if(i.life-=s,i.life<=0||i.y<-.5){i.active=!1,Xe.position.set(0,-100,0),Xe.scale.setScalar(0),Xe.updateMatrix(),mn.setMatrixAt(n,Xe.matrix);continue}i.vx+=Qd*.4*s,i.vz+=tp*.4*s,i.vx+=Math.sin(t*3+n*1.7)*.5*s,i.vz+=Math.cos(t*2.5+n*2.1)*.3*s,i.vy-=.3*s,i.vx*=.995,i.vy=Math.max(i.vy,-.8),i.vz*=.995,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s,i.rx+=i.rvx*s,i.ry+=i.rvy*s,i.rz+=i.rvz*s;const o=i.life/i.max,r=o*(.6+Math.sin(t*2+n*.8)*.4),a=.8+o*.4;Xe.position.set(i.x,i.y,i.z),Xe.rotation.set(i.rx,i.ry,i.rz),Xe.scale.setScalar(a),Xe.updateMatrix(),mn.setMatrixAt(n,Xe.matrix),Ra.copy(Jd[i.colorIdx]).multiplyScalar(r),mn.setColorAt(n,Ra),e=!0}mn.instanceMatrix.needsUpdate=!0,e&&(mn.instanceColor.needsUpdate=!0)}let Dc=0,Dn="SEEK",Zi=-Be,Xn=0,es=[],ns=null,Uo=null,No=null,is=null,ih=null,di=[],Fo=null,ep=null,np=null,sh=[],oh=[],rh=[],ah=[];function ew(s){es=s.orbs,ns=s.obeliskGroup,Uo=s.obeliskMat,No=s.obeliskGlowMat,is=s.moatMesh,ih=s.moatMat,di=s.rainbowArcs,Fo=s.player,ep=s.makeLaser,np=s.orbHudEl,sh=s.deers||[],oh=s.puffs||[],rh=s.jellies||[],ah=s.moths||[]}function nw(s,t){let e=null,n=1/0;for(let i=0;i<es.length;i++){const o=es[i];if(o.found)continue;const r=o.x-Fo.pos.x,a=o.z-Fo.pos.z,c=r*r+a*a;c<n&&(n=c,e=o)}if(e&&n<bc*bc){const i=Math.sin(t*2+e.phase)*.5+.5;Do.position.set(e.x,1,e.z),Do.intensity=1+i*2,Do.distance=bc}else Do.intensity=0;for(let i=0;i<es.length;i++){const o=es[i];if(!(o.found&&!o.flyUp)){if(!o.found){const r=Math.sin(t*1.5+o.phase)*.5+.5;o.group.position.y=o.flyY+Math.sin(t*.8+o.phase)*.3,o.glowMat.opacity=.3+r*.4,o.hazeMat.opacity=.08+r*.12;for(let l=3;l<o.group.children.length;l++){const h=o.group.children[l],f=(l-3)/6*6.28+t*1.5;h.position.x=Math.cos(f)*.4,h.position.z=Math.sin(f)*.4,h.position.y=Math.sin(f*2+t)*.1}const a=o.x-Fo.pos.x,c=o.z-Fo.pos.z;if(a*a+c*c<ff*ff){o.found=!0,o.flyUp=!0,o.flyY=o.group.position.y,Dc++;const l=np||document.getElementById("orb-hud");l&&(l.innerHTML="✦ "+Dc+" / "+Gl),Dn==="SEEK"&&(Dn="RISING")}}if(o.flyUp){const r=Be+5;o.flyY+=(r-o.flyY)*s*.8,o.group.position.y=o.flyY;const a=Math.min((o.flyY-1)/(r-1),1);o.group.scale.setScalar(1-a*.6),o.glowMat.opacity=.8-a*.5,o.flyY>r-1&&!o.laserLine&&(o.flyUp=!1,o.group.visible=!1,o.laserLine=ep(o.x,o.z,r))}}}if(Dn==="RISING"&&(Zi<0&&(Zi+=EM*s,Zi>0&&(Zi=0),ns&&(ns.position.y=Zi)),Dc>=Gl&&Zi>=0&&(Dn="COMPLETE",Xn=0)),ns){ns.rotation.y+=s*.03;const i=ns.children[ns.children.length-1];if(i&&i.isLight){const o=Math.max(0,Math.min(1,(Zi+Be)/Be));i.intensity=o*1.5*(.8+Math.sin(t*1.5)*.2)}}for(let i=0;i<es.length;i++){const o=es[i];if(!o.laserLine)continue;const r=Math.sin(t*3+i)*.5+.5;o.laserLine.mat.opacity=.5+r*.4,o.laserLine.glowMat.opacity=.15+r*.15}if(Dn==="COMPLETE"){Xn+=s;const i=Math.min(Xn/3,1);if(Uo&&(Uo.emissiveIntensity=i*1.5),No&&(No.emissiveIntensity=i*2.5),Xn>1&&ih){const o=Math.min((Xn-1)/4,1);ih.opacity=o*.6,is&&(is.visible||(is.visible=!0),is.position.y=.05+Math.sin(t*3)*.02*o)}if(Xn>2)for(let o=0;o<di.length;o++){const r=o*.3,a=Math.min(Math.max((Xn-2-r)/2,0),1);a>0&&!di[o].mesh.visible&&(di[o].mesh.visible=!0),di[o].mat.opacity=a*.55,di[o].mesh.rotation.y+=s*.1*(o+1)*.3}if(Xn>1){const o=Math.min((Xn-1)/6,1)*2;for(let r=0;r<sh.length;r++){const a=sh[r],c=a.group,l=-c.position.x,h=-c.position.z,f=Math.sqrt(l*l+h*h);f>8?(a.wanderAng=Math.atan2(-c.position.x,-c.position.z),a.state="walk",a.speed=1.5*o,c.position.x+=l/f*a.speed*s,c.position.z+=h/f*a.speed*s,c.rotation.y=a.wanderAng):a.state="pause"}for(let r=0;r<oh.length;r++){const a=oh[r],c=a.group,l=-c.position.x,h=-c.position.z,f=Math.sqrt(l*l+h*h);f>8&&(a.wanderAng=Math.atan2(-c.position.x,-c.position.z),a.state="hop",a.hopTimer=a.hopTimer%1.2,c.position.x+=l/f*1.5*o*s,c.position.z+=h/f*1.5*o*s)}for(let r=0;r<rh.length;r++){const a=rh[r],c=a.group;c.position.x+=(0-c.position.x)*s*.15*o,c.position.z+=(0-c.position.z)*s*.15*o}for(let r=0;r<ah.length;r++){const a=ah[r];a.centerX+=(0-a.centerX)*s*.2*o,a.centerZ+=(0-a.centerZ)*s*.2*o,a.orbitR=Math.max(a.orbitR-s*.3*o,2)}}Xn>10&&(Dn="FINALE")}if(Dn==="FINALE"){Uo&&(Uo.emissiveIntensity=1.5+Math.sin(t*.5)*.3),No&&(No.emissiveIntensity=2.5+Math.sin(t*.7)*.5),is&&(is.position.y=.05+Math.sin(t*3)*.02);for(let i=0;i<di.length;i++)di[i].mesh.rotation.y+=s*.1*(i+1)*.3,di[i].mat.opacity=.45+Math.sin(t+i)*.1}}function iw(s,t,e){const n=Be+2,i=[new U(s,e,t),new U(0,n,0)],o=new $({color:k.laserPink,transparent:!0,opacity:.8}),r=new cd(i[0],i[1]),a=new ho(r,1,.08,6,!1),c=new I(a,o);vt.add(c);const l=new $({color:k.laserGlow,transparent:!0,opacity:.25}),h=new I(new ho(r,1,.25,6,!1),l);return vt.add(h),{tube:c,glow:h,mat:o,glowMat:l}}const sw=600;let Gr=.25,Ee=1,wf=.85,Ie="NIGHT",zo=null,Oo=null,ch=null,Bo=null,ia=null;const Sf=[{label:"DUSK",sky:new rt(923685),fog:new rt(791584),fogDensity:.009,moonInt:.6,moonCol:new rt(14527112),moonElev:15,ambSky:new rt(4469589),ambGnd:new rt(2238488),ambInt:.6,stars:.4,bio:.7,plRange:16,plInt:.5},{label:"NIGHT",sky:new rt(330264),fog:new rt(528408),fogDensity:.01,moonInt:1,moonCol:new rt(12307694),moonElev:55,ambSky:new rt(3359846),ambGnd:new rt(1587232),ambInt:.7,stars:.85,bio:1,plRange:18,plInt:.55},{label:"DEEP_NIGHT",sky:new rt(198160),fog:new rt(397332),fogDensity:.012,moonInt:.55,moonCol:new rt(8952251),moonElev:75,ambSky:new rt(1712708),ambGnd:new rt(1188888),ambInt:.5,stars:1,bio:1.5,plRange:22,plInt:.7},{label:"DAWN",sky:new rt(1187888),fog:new rt(923688),fogDensity:.011,moonInt:.5,moonCol:new rt(13417386),moonElev:20,ambSky:new rt(3354197),ambGnd:new rt(1843224),ambInt:.55,stars:.35,bio:.65,plRange:17,plInt:.5}],Li=new rt,bf=new rt;function ow(s){zo=s.scene,Oo=s.moon,ch=s.moon2,Bo=s.hemiLight,ia=s.playerLight}function rw(s){if(!zo)return;Gr=(Gr+s/sw)%1;const t=Gr*4,e=Math.floor(t)%4,n=(e+1)%4,i=t-Math.floor(t),o=.5-.5*Math.cos(i*Math.PI),r=Sf[e],a=Sf[n];Ie=o<.5?r.label:a.label;const c=(l,h)=>l+(h-l)*o;if(Li.copy(r.sky).lerp(a.sky,o),zo.background.copy(Li),Li.copy(r.fog).lerp(a.fog,o),zo.fog.color.copy(Li),zo.fog.density=c(r.fogDensity,a.fogDensity),Oo){Li.copy(r.moonCol).lerp(a.moonCol,o),Oo.color.copy(Li),Oo.intensity=c(r.moonInt,a.moonInt);const l=Gr*Math.PI*2,h=c(r.moonElev,a.moonElev)*Math.PI/180,f=60;Oo.position.set(Math.cos(l)*Math.cos(h)*f,Math.sin(h)*f,Math.sin(l)*Math.cos(h)*f)}if(ch){const l=c(r.moonInt,a.moonInt)/.85;ch.intensity=.3*l}Bo&&(Li.copy(r.ambSky).lerp(a.ambSky,o),bf.copy(r.ambGnd).lerp(a.ambGnd,o),Bo.color.copy(Li),Bo.groundColor.copy(bf),Bo.intensity=c(r.ambInt,a.ambInt)),ia&&(ia.distance=c(r.plRange,a.plRange),ia.intensity=c(r.plInt,a.plInt)),wf=c(r.stars,a.stars),ey(wf),Ee=c(r.bio,a.bio)}let ls=0,Xs=0,yi=0,Yo="CLEAR",bi=!1,jn=0;const sa={CLEAR:{fogMult:1,windBase:.3,rainRate:0,skyDarken:0,mistCount:0,duration:[90,180]},MISTY:{fogMult:1.8,windBase:.2,rainRate:0,skyDarken:.05,mistCount:6,duration:[60,150]},LIGHT_RAIN:{fogMult:1.3,windBase:.6,rainRate:.3,skyDarken:.1,mistCount:2,duration:[60,120]},HEAVY_RAIN:{fogMult:1.6,windBase:1,rainRate:.8,skyDarken:.2,mistCount:3,duration:[45,100]},FOG_BANK:{fogMult:2.5,windBase:.15,rainRate:0,skyDarken:.1,mistCount:8,duration:[60,120]},LUMINOUS_STORM:{fogMult:1.4,windBase:1.5,rainRate:.6,skyDarken:.15,mistCount:2,duration:[40,90]}},aw={CLEAR:{MISTY:.4,LIGHT_RAIN:.3,FOG_BANK:.2,LUMINOUS_STORM:.1},MISTY:{CLEAR:.3,LIGHT_RAIN:.3,FOG_BANK:.3,HEAVY_RAIN:.1},LIGHT_RAIN:{CLEAR:.2,MISTY:.2,HEAVY_RAIN:.4,LUMINOUS_STORM:.2},HEAVY_RAIN:{LIGHT_RAIN:.4,LUMINOUS_STORM:.3,MISTY:.2,CLEAR:.1},FOG_BANK:{MISTY:.4,CLEAR:.3,LIGHT_RAIN:.2,LUMINOUS_STORM:.1},LUMINOUS_STORM:{HEAVY_RAIN:.3,MISTY:.3,CLEAR:.2,LIGHT_RAIN:.2}};let Hs="CLEAR",ks=null,oa=0,Hr=0,Uc=0,Vr=!1,Wr=0,Nc=Math.random()*Math.PI*2,Fc=0,zc=0;const lh=[],cw=8;let Tf=!1,Oc=0,Xr=1,ra=0,Yr=0,Bc=0;function lw(){const s=aw[Hs],t=Object.entries(s);let e=0;for(const[,i]of t)e+=i;let n=Math.random()*e;for(const[i,o]of t)if(n-=o,n<=0)return i;return t[0][0]}function hw(){if(Tf)return;const s=document.createElement("canvas");s.width=128,s.height=64;const t=s.getContext("2d"),e=t.createRadialGradient(64,32,0,64,32,64);e.addColorStop(0,"rgba(255,255,255,0.5)"),e.addColorStop(.3,"rgba(255,255,255,0.25)"),e.addColorStop(.7,"rgba(255,255,255,0.06)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,64);const n=new Ch(s),i=new ve(40,14);for(let o=0;o<cw;o++){const r=new $({map:n,color:5596791,transparent:!0,opacity:0,side:Ot,depthWrite:!1}),a=new I(i,r);a.visible=!1,vt.add(a),lh.push({mesh:a,mat:r,active:!1,drift:Math.random()*Math.PI*2,speed:.3+Math.random()*.4,baseY:.8+Math.random()*2,wobble:Math.random()*Math.PI*2})}Tf=!0}function uw(){hw();const s=sa.CLEAR.duration;oa=s[0]+Math.random()*(s[1]-s[0])}function fw(s,t,e){if(Vr)if(Hr-=s,Hr<=0){Hs=ks,ks=null,Vr=!1;const o=sa[Hs].duration;oa=o[0]+Math.random()*(o[1]-o[0]),Wr=0}else Wr=1-Hr/Uc;else oa-=s,oa<=0&&(ks=lw(),Vr=!0,Uc=30+Math.random()*60,Hr=Uc,Wr=0);const n=sa[Hs];if(Vr&&ks){const o=sa[ks],r=.5-.5*Math.cos(Wr*Math.PI),a=(c,l)=>c+(l-c)*r;Xr=a(n.fogMult,o.fogMult),ra=a(n.rainRate,o.rainRate),Yr=a(n.skyDarken,o.skyDarken),Bc=a(n.mistCount,o.mistCount),yi=a(n.windBase,o.windBase),Yo=r<.5?Hs:ks}else Xr=n.fogMult,ra=n.rainRate,Yr=n.skyDarken,Bc=n.mistCount,yi=n.windBase,Yo=Hs;bi=Yo==="LUMINOUS_STORM",Nc+=(Math.sin(t*.05)*.2+Math.sin(t*.13)*.1)*s,Fc-=s,Fc<=0&&(Fc=2+Math.random()*6,zc=Math.random()*.8),zc*=Math.pow(.3,s);const i=yi+zc;if(ls=Math.cos(Nc)*i,Xs=Math.sin(Nc)*i,vt.fog.density*=Xr,Yr>.001){const o=vt.background,r=1-Yr;o.r*=r,o.g*=r,o.b*=r}if(e){const o=Math.round(Bc);for(let r=0;r<lh.length;r++){const a=lh[r];if(r<o){a.active||(a.active=!0,a.mesh.visible=!0,a.drift=Math.random()*Math.PI*2);const c=10+Math.sin(t*.3+a.wobble)*8,l=a.drift+t*a.speed*.05;a.mesh.position.set(e.x+Math.cos(l)*c,a.baseY+Math.sin(t*.4+a.wobble)*.5,e.z+Math.sin(l)*c),a.mesh.rotation.y=l+Math.PI/2,a.drift+=ls*s*.02;const h=.03+Xr*.012;a.mat.opacity+=(h-a.mat.opacity)*s*2}else a.active&&(a.mat.opacity-=s*.5,a.mat.opacity<=.005&&(a.active=!1,a.mesh.visible=!1,a.mat.opacity=0))}}return bi&&(Oc-=s,Oc<=0&&(Oc=1+Math.random()*4,jn=1)),jn*=Math.pow(.02,s),jn<.01&&(jn=0),ra}function Wh(){return ra}const Wn=300,Co=new Float32Array(Wn),Po=new Float32Array(Wn),Io=new Float32Array(Wn),kc=new Float32Array(Wn),Gc=new Float32Array(Wn),Hc=new Float32Array(Wn),ss=new Float32Array(Wn),Tn=new Float32Array(Wn*6);let hs=null,hh=null;function dw(){const s=new be;s.setAttribute("position",new _n(Tn,3)),hh=new Rh({color:8952251,transparent:!0,opacity:.3,depthWrite:!1}),hs=new k0(s,hh),hs.frustumCulled=!1,hs.visible=!1,vt.add(hs);for(let t=0;t<Wn;t++)ss[t]=0,ip(t)}function ip(s){const t=s*6;Tn[t]=0,Tn[t+1]=-100,Tn[t+2]=0,Tn[t+3]=0,Tn[t+4]=-100,Tn[t+5]=0}function pw(s,t,e,n,i){if(!hs)return;const o=e>.01;if(hs.visible=o,!o)return;hh.opacity=Math.min(.15+e*.35,.5);const r=Math.floor(e*12*s*60);for(let c=0;c<r;c++){let l=-1;for(let u=0;u<Wn;u++)if(ss[u]<=0){l=u;break}if(l===-1)break;const h=Math.random()*Math.PI*2,f=Math.random()*30;Co[l]=t.x+Math.cos(h)*f,Po[l]=12+Math.random()*10,Io[l]=t.z+Math.sin(h)*f,kc[l]=n*2+(Math.random()-.5)*.3,Gc[l]=-12-Math.random()*8,Hc[l]=i*2+(Math.random()-.5)*.3,ss[l]=2+Math.random()*1.5}const a=.06;for(let c=0;c<Wn;c++){if(ss[c]<=0)continue;if(ss[c]-=s,ss[c]<=0||Po[c]<ne(Co[c],Io[c])+.1){ss[c]=0,ip(c);continue}Co[c]+=kc[c]*s,Po[c]+=Gc[c]*s,Io[c]+=Hc[c]*s;const l=c*6;Tn[l]=Co[c],Tn[l+1]=Po[c],Tn[l+2]=Io[c],Tn[l+3]=Co[c]+kc[c]*a,Tn[l+4]=Po[c]+Gc[c]*a,Tn[l+5]=Io[c]+Hc[c]*a}hs.geometry.attributes.position.needsUpdate=!0}let Ct=null,Ye=null,Ti=!1,Ss=!1,qo=null,aa=null,mw=null,sp=null,gw=null,xw=null,op=null,rp=null,_w=null,ap=null,cp=null,Vc=0,vw=null,lp=null,Mw=null;const mi={jelly:0,puff:0,deer:0,moth:0};function Ef(s,t){const e=Ct.sampleRate*t,n=Ct.createBuffer(1,e,Ct.sampleRate),i=n.getChannelData(0);if(s==="white")for(let o=0;o<e;o++)i[o]=Math.random()*2-1;else if(s==="brown"){let o=0;for(let r=0;r<e;r++){const a=Math.random()*2-1;i[r]=(o+.02*a)/1.02,o=i[r],i[r]*=3.5}}return n}function qr(s,t,e){const n=Ct.createBufferSource();n.buffer=s,n.loop=!0;const i=Ct.createGain();i.gain.value=t;const o=Ct.createBiquadFilter();return o.type="lowpass",o.frequency.value=e,o.Q.value=.5,n.connect(o).connect(i).connect(Ye),n.start(),{node:n,gain:i,filter:o}}function yw(){const s=()=>{if(!Ti){try{Ct=new(window.AudioContext||window.webkitAudioContext),Ye=Ct.createGain(),Ye.gain.value=.35,Ye.connect(Ct.destination),qo=Ef("brown",2),aa=Ef("white",2);const t=qr(qo,.12,180);mw=t.node,sp=t.gain,gw=t.filter;const e=qr(aa,0,400);xw=e.node,op=e.gain,rp=e.filter;const n=qr(aa,0,2e3);_w=n.node,ap=n.gain,cp=n.filter;const i=qr(qo,0,600);vw=i.node,lp=i.gain,Mw=i.filter,Ti=!0}catch(t){console.warn("Audio init failed:",t)}document.removeEventListener("click",s),document.removeEventListener("keydown",s),document.removeEventListener("touchstart",s)}};document.addEventListener("click",s),document.addEventListener("keydown",s),document.addEventListener("touchstart",s)}function ww(s,t,e,n,i,o,r,a){if(!Ti||Ss)return;const c=Ct.currentTime,l=o==="DEEP_NIGHT"?.15:o==="DAWN"?.08:.12;sp.gain.linearRampToValueAtTime(l,c+.1);const h=Math.min(t*.18,.3),f=200+t*600;op.gain.linearRampToValueAtTime(h,c+.1),rp.frequency.linearRampToValueAtTime(f,c+.1);const u=e*.25,d=1200+e*2e3;ap.gain.linearRampToValueAtTime(u,c+.1),cp.frequency.linearRampToValueAtTime(d,c+.1),i>.5&&Vc<=0&&(Sw(),Vc=2+Math.random()*3),Vc-=s;let g=1/0;if(r&&a)for(let m=0;m<a.length;m++){const y=a[m].x-r.x,x=a[m].z-r.z,_=y*y+x*x;_<g&&(g=_)}const p=(g<225?1-Math.sqrt(g)/15:0)*.12;lp.gain.linearRampToValueAtTime(p,c+.1),mi.jelly-=s,mi.puff-=s,mi.deer-=s,mi.moth-=s}function Sw(){if(!Ct)return;const s=Ct.createOscillator(),t=Ct.createGain(),e=Ct.createBiquadFilter();s.type="sawtooth",s.frequency.value=40+Math.random()*30,e.type="lowpass",e.frequency.value=100,e.Q.value=1,t.gain.setValueAtTime(.4,Ct.currentTime),t.gain.exponentialRampToValueAtTime(.001,Ct.currentTime+.8+Math.random()*.5),s.connect(e).connect(t).connect(Ye),s.start(),s.stop(Ct.currentTime+1.5);const n=Ct.createBufferSource();n.buffer=qo;const i=Ct.createGain(),o=Ct.createBiquadFilter();o.type="lowpass",o.frequency.value=80,i.gain.setValueAtTime(.3,Ct.currentTime),i.gain.exponentialRampToValueAtTime(.001,Ct.currentTime+1.2),n.connect(o).connect(i).connect(Ye),n.start(),n.stop(Ct.currentTime+1.5)}function xs(s,t,e){if(!Ti||Ss||!Ct||mi[s]>0)return;const n=t.x-e.x,i=t.z-e.z,o=n*n+i*i;if(o>900)return;const r=Math.sqrt(o),a=Math.max(0,1-r/30)*.15,c=Math.max(-1,Math.min(1,n/Math.max(r,1))),l=Ct.createOscillator(),h=Ct.createGain(),f=Ct.createStereoPanner();f.pan.value=c;const u=Ct.currentTime;switch(s){case"jelly":l.type="sine",l.frequency.setValueAtTime(280+Math.random()*80,u),l.frequency.linearRampToValueAtTime(220+Math.random()*60,u+.6),h.gain.setValueAtTime(a,u),h.gain.exponentialRampToValueAtTime(.001,u+.8),l.connect(h).connect(f).connect(Ye),l.start(),l.stop(u+.8),mi.jelly=3+Math.random()*4;break;case"puff":l.type="sine",l.frequency.setValueAtTime(600+Math.random()*200,u),l.frequency.exponentialRampToValueAtTime(400,u+.15),h.gain.setValueAtTime(a*.7,u),h.gain.exponentialRampToValueAtTime(.001,u+.15),l.connect(h).connect(f).connect(Ye),l.start(),l.stop(u+.2),mi.puff=2+Math.random()*3;break;case"deer":l.type="sawtooth",l.frequency.setValueAtTime(120+Math.random()*40,u),l.frequency.linearRampToValueAtTime(80,u+.3);const d=Ct.createBiquadFilter();d.type="lowpass",d.frequency.value=300,h.gain.setValueAtTime(a,u),h.gain.exponentialRampToValueAtTime(.001,u+.4),l.connect(d).connect(h).connect(f).connect(Ye),l.start(),l.stop(u+.5),mi.deer=4+Math.random()*5;break;case"moth":l.type="triangle",l.frequency.setValueAtTime(180+Math.random()*100,u);const g=Ct.createOscillator(),M=Ct.createGain();g.frequency.value=20+Math.random()*10,M.gain.value=50,g.connect(M).connect(l.frequency),h.gain.setValueAtTime(a*.4,u),h.gain.exponentialRampToValueAtTime(.001,u+.3),l.connect(h).connect(f).connect(Ye),g.start(),l.start(),g.stop(u+.35),l.stop(u+.35),mi.moth=3+Math.random()*4;break}}let Ca=0;function bw(s,t){if(!Ti||Ss||!Ct||Ca>0)return;const e=Ct.currentTime;if(t){const n=Ct.createBufferSource();n.buffer=aa;const i=Ct.createGain(),o=Ct.createBiquadFilter();o.type="bandpass",o.frequency.value=2e3,o.Q.value=.5,i.gain.setValueAtTime(.06,e),i.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(o).connect(i).connect(Ye),n.start(),n.stop(e+.15)}else{const n=Ct.createOscillator();n.type="sine",n.frequency.value=80+Math.random()*40;const i=Ct.createGain();i.gain.setValueAtTime(.04,e),i.gain.exponentialRampToValueAtTime(.001,e+.08),n.connect(i).connect(Ye),n.start(),n.stop(e+.1)}Ca=s?.22:.35}function Tw(){if(!Ti||Ss||!Ct)return;const s=Ct.currentTime,t=Ct.createOscillator();t.type="sine",t.frequency.setValueAtTime(150,s),t.frequency.exponentialRampToValueAtTime(300,s+.1);const e=Ct.createGain();e.gain.setValueAtTime(.04,s),e.gain.exponentialRampToValueAtTime(.001,s+.15),t.connect(e).connect(Ye),t.start(),t.stop(s+.2)}function Ew(s){if(!Ti||Ss||!Ct)return;const t=Ct.currentTime,e=Ct.createBufferSource();e.buffer=qo;const n=Ct.createGain(),i=Ct.createBiquadFilter();i.type="lowpass",i.frequency.value=200,n.gain.setValueAtTime(s*.08,t),n.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(i).connect(n).connect(Ye),e.start(),e.stop(t+.25)}function Aw(s){Ca>0&&(Ca-=s)}function Rw(s,t){if(!Ti||Ss||!Ct)return;const e=s.x-t.x,n=s.z-t.z,i=e*e+n*n;if(i>400)return;const o=Math.max(0,1-Math.sqrt(i)/20)*.08,r=Ct.currentTime,a=Ct.createOscillator();a.type="sine",a.frequency.setValueAtTime(800+Math.random()*400,r),a.frequency.exponentialRampToValueAtTime(200,r+.08);const c=Ct.createGain();c.gain.setValueAtTime(o,r),c.gain.exponentialRampToValueAtTime(.001,r+.1),a.connect(c).connect(Ye),a.start(),a.stop(r+.12)}function Cw(){if(!Ti||Ss||!Ct)return;const s=Ct.currentTime,t=Ct.createOscillator();t.type="sine",t.frequency.setValueAtTime(300,s),t.frequency.exponentialRampToValueAtTime(800,s+.2);const e=Ct.createGain();e.gain.setValueAtTime(.08,s),e.gain.exponentialRampToValueAtTime(.001,s+.4),t.connect(e).connect(Ye),t.start(),t.stop(s+.5)}function Pw(s,t,e,n,i){const o=e.x-s.x,r=e.z-s.z,a=o*o+r*r;if(a>n*n)return!1;if(a<.01)return!0;let l=Math.atan2(r,o)-t;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;return Math.abs(l)<i*.5}function Iw(s,t,e,n){const i=t.x-s.x,o=t.z-s.z,r=n?e*1.8:e;return i*i+o*o<r*r}function hp(s,t,e){let n=0,i=0,o=0;for(let r=0;r<t.length;r++){const a=t[r],c=s.x-a.x,l=s.z-a.z,h=c*c+l*l;if(h>.01&&h<e*e){const f=Math.sqrt(h);n+=c/f/f,i+=l/f/f,o++}}return o>0&&(n/=o,i/=o),{x:n,z:i}}function up(s,t){if(t.length===0)return{x:0,z:0};let e=0,n=0;for(let i=0;i<t.length;i++)e+=t[i].x,n+=t[i].z;return e/=t.length,n/=t.length,{x:e-s.x,z:n-s.z}}function Lw(s,t){const e=Math.sqrt(s.x*s.x+s.z*s.z),n=he-t;if(e<n)return{x:0,z:0};const i=(e-n)/t,o=Math.min(i*2,3);return{x:-s.x/e*o,z:-s.z/e*o}}function Dw(s,t,e,n,i){let o=0,r=0;const a=Math.cos(t)*n,c=Math.sin(t)*n,l=s.x+a,h=s.z+c;for(let f=0;f<e.length;f++){const u=e[f],d=l-u.x,g=h-u.z,M=d*d+g*g,p=(u.colR||i)+1;if(M<p*p&&M>.01){const m=Math.sqrt(M),y=(p-m)/p*2;o+=d/m*y,r+=g/m*y}}return{x:o,z:r}}const pi={deer:!1,puffling:!1,jelly:!1,moth:!1,fairyRing:!1,crystalChain:!1,pond:!1},Uw={deer:"Spirit Deer",puffling:"Puffling",jelly:"Luminous Jelly",moth:"Moon Moth",fairyRing:"Fairy Ring",crystalChain:"Crystal Resonance",pond:"Moonlit Pond"};let xi=null,ca=0,Af="";function Nw(){xi=document.createElement("div"),xi.id="discovery-text",xi.style.cssText="position:fixed;top:28%;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:22px;color:#ccffee;text-shadow:0 0 12px #44ffaa,0 0 30px #228866;pointer-events:none;opacity:0;transition:opacity 0.6s;z-index:100;letter-spacing:3px;text-transform:uppercase;",document.body.appendChild(xi)}function $i(s){pi[s]||(pi[s]=!0,Af=Uw[s],ca=3,xi&&(xi.textContent=Af,xi.style.opacity="1"))}function Fw(s,t,e,n,i,o,r,a){const c=s.x,l=s.z;if(!pi.deer)for(let h=0;h<t.length;h++){const f=t[h].group.position.x-c,u=t[h].group.position.z-l;if(f*f+u*u<144){$i("deer");break}}if(!pi.puffling)for(let h=0;h<e.length;h++){const f=e[h].group.position.x-c,u=e[h].group.position.z-l;if(f*f+u*u<64){$i("puffling");break}}if(!pi.jelly)for(let h=0;h<n.length;h++){const f=n[h].group.position.x-c,u=n[h].group.position.z-l;if(f*f+u*u<100){$i("jelly");break}}if(!pi.moth)for(let h=0;h<i.length;h++){const f=i[h].group.position.x-c,u=i[h].group.position.z-l;if(f*f+u*u<64){$i("moth");break}}if(!pi.fairyRing)for(let h=0;h<o.length;h++){const f=o[h].x-c,u=o[h].z-l;if(f*f+u*u<16){$i("fairyRing");break}}if(!pi.pond)for(let h=0;h<r.length;h++){const f=r[h].x-c,u=r[h].z-l;if(f*f+u*u<25){$i("pond");break}}!pi.crystalChain&&a>=3&&$i("crystalChain")}function zw(s){ca>0&&(ca-=s,ca<=.6&&xi&&(xi.style.opacity="0"))}let uh=null,Wc=60;const Ow={DUSK:"Dusk",NIGHT:"Night",DEEP_NIGHT:"Deep Night",DAWN:"Dawn"},Bw={CLEAR:"Clear",MISTY:"Misty",LIGHT_RAIN:"Light Rain",HEAVY_RAIN:"Heavy Rain",FOG_BANK:"Fog",LUMINOUS_STORM:"Storm"};function kw(){uh=document.getElementById("hud")}function Gw(s,t){if(!uh)return;Wc=Wc*.95+1/Math.max(s,.001)*.05;const e=Dn==="SEEK"?"Seek the orbs...":Dn==="RISING"?"The obelisk stirs...":Dn==="COMPLETE"?"Convergence!":"Luminaries",n=Ow[Ie]||"Night",i=Bw[Yo]||"Clear";uh.innerHTML="<b>"+e+"</b> · "+n+" · "+i+" · FPS:"+Math.round(Wc)+"<br>Pos:"+t.x.toFixed(0)+","+t.z.toFixed(0)}let Pa=null;function Hw(){Pa=document.getElementById("orb-hud")}function Vw(){return Pa}function Ww(){const s=document.getElementById("overlay");s&&(s.style.opacity="0",setTimeout(()=>{try{s.remove()}catch{}},2500)),Pa&&(Pa.style.display="block")}const ce=[],xn=[],ie=[],Kn=[],Sn=[],Ne=[],po=[],fh=[],er=[],ni=[],dh=[],Ia=[],La=[],Zo=[],Qn=[],Jn=[],Fe=[],En=[],Di=[];let Rf=0,Cf=0,Xc=0,Ln=null,Zn=0;const ph=15,mh=[];let Pf=!1;function Xw(){if(Pf)return;Pf=!0;const s=new Rh({color:k.crystal,transparent:!0,opacity:0,blending:Bi,depthWrite:!1});for(let t=0;t<ph;t++){const e=new be,n=new Float32Array(6);e.setAttribute("position",new _n(n,3)),e.attributes.position.setUsage(Ge);const i=new id(e,s.clone());i.visible=!1,vt.add(i),mh.push({line:i,geo:e,opacity:0,active:!1})}}let ji=null;function Yw(){if(ji)return ji;const s=new lo(.9,1,48),t=new $({color:k.echoBloom,transparent:!0,opacity:.5,side:Ot,depthWrite:!1,blending:Bi});return ji=new I(s,t),ji.rotation.x=-Math.PI/2,ji.visible=!1,vt.add(ji),ji}function qw(){for(let t=0;t<cM;t++){let e,n,i=!1;for(let o=0;o<20;o++){const r=b()*6.28,a=5+b()*(he-10);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<ce.length;c++){const l=ce[c].x-e,h=ce[c].z-n;if(l*l+h*h<9){i=!1;break}}if(i)break}if(i){const o=ry(e,n);o.position.y=ne(e,n),ce.push({group:o,x:e,z:n})}}for(let t=0;t<lM;t++){const e=ce[Math.floor(b()*ce.length)],n=b()*6.28,i=1+b()*4,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i,a=ay(o,r);a.group.position.y=ne(o,r),xn.push(a)}for(let t=0;t<hM;t++){const e=b()*6.28,n=8+b()*he*.6,i=Math.cos(e)*n,o=Math.sin(e)*n,r=cy(i,o);r.group.position.y=ne(i,o),ie.push(r)}for(let t=0;t<uM;t++){const e=b()*6.28,n=10+b()*he*.5,i=Math.cos(e)*n,o=Math.sin(e)*n;Kn.push(vy(i,ne(i,o)+3+b()*5,o))}for(let t=0;t<fM;t++){const e=xn[Math.floor(b()*xn.length)],n=b()*6.28,i=1+b()*5,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i,a=My(o,r);a.group.position.y=ne(o,r),a._baseY=ne(o,r),Sn.push(a)}for(let t=0;t<dM;t++){const e=b()*6.28,n=12+b()*he*.5,i=Math.cos(e)*n,o=Math.sin(e)*n,r=yy(i,o),a=ne(i,o);r.group.position.y=a,r._baseY=a,Ne.push(r)}for(let t=0;t<pM;t++){const e=ce[Math.floor(b()*ce.length)];po.push(wy(e.x,ne(e.x,e.z)+2+b()*4,e.z))}const s=[null,k.grassPurple,k.grassBlue,k.grassTeal];for(let t=0;t<mM;t++){const e=b()*6.28,n=2+b()*(he*.9),i=Math.cos(e)*n,o=Math.sin(e)*n,r=s[Math.floor(b()*s.length)],a=ly(i,o,2+b()*2.5,25+Math.floor(b()*20),r);a.mesh.position.y=ne(i,o),fh.push(a)}for(let t=0;t<vM;t++){let e,n,i=!1;for(let o=0;o<10;o++){const r=b()*6.28,a=3+b()*(he*.85);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<ce.length;c++){const l=ce[c].x-e,h=ce[c].z-n;if(l*l+h*h<4){i=!1;break}}if(i)break}if(i){const o=Ry(e,n);o.group.position.y=ne(e,n)-.08,Ia.push(o)}}for(let t=0;t<gM;t++){const e=ce[Math.floor(b()*ce.length)],n=b()*6.28,i=1+b()*5,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i,a=uy(o,r);a.group.position.y=ne(o,r),er.push(a)}for(let t=0;t<xM;t++){const e=b()*6.28,n=3+b()*(he*.7),i=Math.cos(e)*n,o=Math.sin(e)*n,r=fy(i,o);r.group.position.y=ne(i,o),ni.push(r)}for(let t=0;t<_M;t++){const e=b()*6.28,n=4+b()*(he*.8),i=Math.cos(e)*n,o=Math.sin(e)*n,r=dy(i,o);r.group.position.y=ne(i,o),dh.push(r)}for(let t=0;t<Gl;t++){let e,n,i=!1;for(let o=0;o<30;o++){const r=b()*6.28,a=20+b()*(he*.6);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<En.length;c++){const l=En[c].x-e,h=En[c].z-n;if(l*l+h*h<225){i=!1;break}}if(i)break}if(i){const o=Ay(e,n);o.group.position.y=ne(e,n)+1,o.flyY=ne(e,n)+1,En.push(o)}}for(let t=0;t<wd;t++){const e=b()*6.28,n=2+b()*3,i=Math.cos(e)*n,o=Math.sin(e)*n;La.push(Sy(i,ne(i,o)+1+b()*.5,o))}for(let t=0;t<MM;t++){const e=b()*6.28,n=4+b()*(he*.7),i=Math.cos(e)*n,o=Math.sin(e)*n,r=xy(i,o);r.group.position.y=ne(i,o),Zo.push(r)}for(let t=0;t<yM;t++){let e,n,i=!1;for(let o=0;o<20;o++){const r=b()*6.28,a=10+b()*(he*.6);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<ce.length;c++){const l=ce[c].x-e,h=ce[c].z-n;if(l*l+h*h<36){i=!1;break}}if(i)break}if(i){Yl(e,n,4);const o=by(e,n);o.group.position.y=ne(e,n),Qn.push(o)}}for(let t=0;t<wM;t++){const e=b()*6.28,n=5+b()*he*.6,i=Math.cos(e)*n,o=Math.sin(e)*n;Jn.push(Ty(i,ne(i,o)+.5+b()*5,o))}for(let t=0;t<bM;t++){let e,n,i=!1;for(let o=0;o<20;o++){const r=b()*6.28,a=8+b()*(he*.6);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<ce.length;c++){const l=ce[c].x-e,h=ce[c].z-n;if(l*l+h*h<16){i=!1;break}}if(i)break}if(i){Yl(e,n,3);const o=Ey(e,n);o.group.position.y=ne(e,n),Fe.push(o)}}}function fp(s,t){const e=1+yi*1.5,n=ls*.03,i=Xs*.03;for(let o=0;o<ce.length;o++){const r=ce[o],a=r.x*.1+r.z*.13;r.group.rotation.z=Math.sin(t*.3+a)*.004*e+n*.15,r.group.rotation.x=Math.sin(t*.25+a+1)*.003*e+i*.15}for(let o=0;o<fh.length;o++)hy(fh[o],t,e,n,i,Q.pos.x,Q.pos.z);for(let o=0;o<er.length;o++){const r=er[o];r.group.rotation.z=Math.sin(t*.8+r.phase)*.03*e+n,r.group.rotation.x=Math.sin(t*.6+r.phase+1)*.02*e+i}for(let o=0;o<ni.length;o++){const r=ni[o],a=Math.sin(t*1+r.phase)*.5+.5;r.petalMat.emissiveIntensity=(.3+a*.5)*Ee,r.group.rotation.z=Math.sin(t*.9+r.phase)*.04*e+n*.5}for(let o=0;o<dh.length;o++){const r=dh[o];r.group.rotation.z=Math.sin(t*1.1+r.phase)*r.swayAmp*e+n,r.group.rotation.x=Math.sin(t*.8+r.phase+2)*r.swayAmp*.5*e+i}}function dp(s,t){for(let n=0;n<Kn.length;n++){const i=Kn[n],o=i.group,r=o.position.x,a=o.position.z;i._syncPhase===void 0&&(i._syncPhase=i.phase);let c=0,l=0;for(let h=0;h<Kn.length;h++){if(h===n)continue;const f=Kn[h],u=f.group.position.x-r,d=f.group.position.z-a;u*u+d*d<225&&(c+=f._syncPhase||f.phase,l++)}if(l>0){const h=c/l;i._syncPhase+=(h-i._syncPhase)*s*.4}}const e=Ie==="DEEP_NIGHT"?2:Ie==="DAWN"?-1.5:0;for(let n=0;n<Kn.length;n++){const i=Kn[n],o=i.group,r=o.position.x,a=o.position.z,c=i.floatY+e;if(i._stT-=s,i._stT<=0)if(bi)i._state="display",i._stT=10+Math.random()*15;else{const d=Math.random();d<.5?(i._state="drift",i._stT=20+Math.random()*30):d<.75?(i._state="pulse",i._stT=8+Math.random()*12):(i._state="migrate",i._migrateAng=Math.random()*6.28,i._stT=15+Math.random()*20)}switch(bi&&i._state!=="display"&&(i._state="display",i._stT=10,xs("jelly",{x:r,z:a},Q.pos)),i._state){case"drift":{i.driftAng+=s*.15;const d=8+Math.sin(t*.1+i.phase)*4,g=i.homeX+Math.cos(i.driftAng)*d,M=i.homeZ+Math.sin(i.driftAng)*d;o.position.x+=(g-r)*s*.3,o.position.z+=(M-a)*s*.3,o.position.y=c+Math.sin(t*i.wobble+i.phase)*1.5;break}case"pulse":{i.driftAng+=s*.08,o.position.x+=Math.cos(i.driftAng)*s*.3,o.position.z+=Math.sin(i.driftAng)*s*.3,o.position.y=c+Math.sin(t*i.wobble+i.phase)*1,i._pulseSync=Math.sin(t*2+i._syncPhase)*.5+.5;break}case"migrate":{o.position.x+=Math.cos(i._migrateAng)*s*1,o.position.z+=Math.sin(i._migrateAng)*s*1,o.position.y=c+Math.sin(t*i.wobble+i.phase)*.8,o.position.x*o.position.x+o.position.z*o.position.z>he*.8*(he*.8)&&(i._migrateAng+=Math.PI);break}case"display":{i.driftAng+=s*.4,o.position.x+=Math.cos(i.driftAng)*s*.8,o.position.z+=Math.sin(i.driftAng)*s*.8,o.position.y=c+Math.sin(t*2+i.phase)*2,i._syncPhase+=(0-i._syncPhase)*s*2;break}}i._state==="pulse"&&Math.random()<.003&&xs("jelly",{x:r,z:a},Q.pos);const l=i._syncPhase||i.phase,h=Math.sin(t*1.2+l)*.5+.5;let f=1,u=0;if(i._state==="pulse")f=1+i._pulseSync*1.5,u=i._pulseSync*.15;else if(i._state==="display"){const d=Math.sin(t*4)*.5+.5;f=1.5+d*1.2,u=.15+d*.1}else i._state==="drift"&&(f=1+h*.3);i.bellMat.emissiveIntensity=(.4+h*.8)*Ee*f,i.bellMat.opacity=.35+h*.25+u,o.rotation.y+=s*.2;for(let d=2;d<o.children.length;d++)o.children[d].rotation.x=Math.sin(t*2+d+l)*.15,o.children[d].rotation.z=Math.sin(t*1.5+d*.7+l)*.1}}function pp(s,t){const e=Pe.ShiftLeft||Pe.ShiftRight||or,n=Ie==="DAWN"?.6:Ie==="NIGHT"?1.3:1,i=Ie==="DAWN"?2:Ie==="NIGHT"?.6:1;for(let o=0;o<Sn.length;o++){const r=Sn[o],a=r.group,c=a.position.x,l=a.position.z,h=c-Q.pos.x,f=l-Q.pos.z,u=h*h+f*f;if(r.state!=="startled"&&r.state!=="following"&&r.state!=="huddle"){const S=e?3.5:2;let E=u<S*S;if(!E)for(let w=0;w<Ne.length;w++){if(Ne[w].state!=="flee")continue;const v=Ne[w].group.position.x-c,R=Ne[w].group.position.z-l;if(v*v+R*R<25){E=!0;break}}E&&(r.state="startled",r._scaredT=.6+Math.random()*.5,r.wanderAng=Math.atan2(h,f),r.hopTimer=0,xs("puff",{x:c,z:l},Q.pos))}if(bi&&r.state!=="startled"&&r.state!=="huddle"){let S=1/0,E=-1;for(let w=0;w<Sn.length;w++){if(w===o)continue;const v=Sn[w].group.position.x-c,R=Sn[w].group.position.z-l,N=v*v+R*R;N<S&&(S=N,E=w)}E>=0&&S>1&&(r.state="huddle",r._huddleTarget=E)}fo>8&&u<144&&r.state==="idle"&&Math.random()<.001&&(r.state="following",r._followT=10+Math.random()*10);const d=c-r._lastTX,g=l-r._lastTZ;d*d+g*g>.25&&(r._baseY=ne(c,l),r._lastTX=c,r._lastTZ=l);const M={x:c,z:l},p=[];for(let S=0;S<Sn.length;S++){if(S===o)continue;const E=Sn[S].group.position.x,w=Sn[S].group.position.z;(E-c)*(E-c)+(w-l)*(w-l)<100&&p.push({x:E,z:w})}const m=hp(M,p,1.5),y=p.length>0?up(M,p):{x:0,z:0},x=m.x*2+y.x*.3,_=m.z*2+y.z*.3,A=Math.sqrt(x*x+_*_);switch(r.state){case"idle":{if(r.idleTimer-=s,a.position.y=r._baseY+Math.sin(t*2+r.phase)*.02,a.rotation.y+=Math.sin(t*.5+r.phase)*s*.3,A>.1&&p.length>1&&(a.position.x+=y.x*.05*s,a.position.z+=y.z*.05*s),Math.random()<.001&&xs("puff",{x:c,z:l},Q.pos),r.idleTimer<=0){const S=A>.2?Math.atan2(x,_):0;r.state="hop",r.wanderAng+=(Math.random()-.5)*1.5+S*.3,r.hopTimer=0}break}case"hop":{r.hopTimer+=s;const E=r.hopTimer/1.2;if(E>=1)r.state="idle",r.idleTimer=(1.5+Math.random()*3)*i,a.position.y=r._baseY;else{a.position.y=r._baseY+Math.sin(E*Math.PI)*.3,a.position.x+=Math.sin(r.wanderAng)*r.speed*n*s,a.position.z+=Math.cos(r.wanderAng)*r.speed*s;const w=1-Math.sin(E*Math.PI)*.15,v=1+Math.sin(E*Math.PI)*.2;a.scale.set(w,v,w),a.rotation.y=r.wanderAng}break}case"startled":{r._scaredT-=s,r.hopTimer+=s*1.5;const S=Math.min(r.hopTimer/.8,1);a.position.y=r._baseY+Math.sin(S*Math.PI)*.5,a.position.x+=Math.sin(r.wanderAng)*r.speed*2*s+m.x*.5*s,a.position.z+=Math.cos(r.wanderAng)*r.speed*2*s+m.z*.5*s,a.scale.set(.85,1.3,.85),r._scaredT<=0&&(r.state="idle",r.idleTimer=3+Math.random()*3,a.position.y=r._baseY,a.scale.set(1,1,1));break}case"following":{if(r._followT-=s,u>225||fo<3||r._followT<=0){r.state="idle",r.idleTimer=2;break}if(r.wanderAng=Math.atan2(Q.pos.x-c,Q.pos.z-l),u>9){r.hopTimer+=s;const S=r.hopTimer%1.5/1.5;a.position.y=r._baseY+Math.sin(S*Math.PI)*.2,a.position.x+=Math.sin(r.wanderAng)*r.speed*.4*s,a.position.z+=Math.cos(r.wanderAng)*r.speed*.4*s}else a.position.y=r._baseY+Math.sin(t*3+r.phase)*.03;a.rotation.y=r.wanderAng;break}case"huddle":{if(!bi){r.state="idle",r.idleTimer=2;break}const S=Sn[r._huddleTarget];if(S){const E=S.group.position.x-c,w=S.group.position.z-l,v=Math.sqrt(E*E+w*w);v>.5&&(a.position.x+=E/v*r.speed*.5*s,a.position.z+=w/v*r.speed*.5*s)}a.rotation.z=Math.sin(t*8)*.05,a.position.y=r._baseY;break}}if(r._blinkTimer-=s,r._blinkTimer<=0)if(r._blinkState===0){for(let S=0;S<r.eyes.length;S++)r.eyes[S].scale.y=.1;r._blinkState=1,r._blinkTimer=.08+Math.random()*.06}else{for(let S=0;S<r.eyes.length;S++)r.eyes[S].scale.y=1;r._blinkState=0,r._blinkTimer=2+Math.random()*5}for(let S=0;S<r.ears.length;S++){const E=r.ears[S];E.mesh.rotation.z=E.baseRotZ+Math.sin(t*3.5+E.side*1.2+r.phase)*.08}r.tail.position.y=.38+Math.sin(t*4+r.phase)*.015,a.position.x*a.position.x+a.position.z*a.position.z>he*.85*(he*.85)&&(r.wanderAng+=Math.PI)}}function mp(s,t){const e=Pe.ShiftLeft||Pe.ShiftRight||or;for(let n=0;n<Ne.length;n++){const i=Ne[n],o=i.group,r=o.position.x,a=o.position.z,c=r-Q.pos.x,l=a-Q.pos.z,h=c*c+l*l,f=Math.atan2(c,l),u=e?18:12,d=u*u,g=e?10:RM,M=g*g,p=r-i._lastTX,m=a-i._lastTZ;p*p+m*m>.25&&(i._baseY=ne(r,a),i._lastTX=r,i._lastTZ=a);const y=i._baseY;if(i.state!=="flee"&&i.state!=="alert"&&i.state!=="watching"){const v={x:r,z:a},R={x:Q.pos.x,z:Q.pos.z};h<M||Iw(v,R,g,e)?(i.state="flee",i.wanderAng=f,i.fleeTimer=2.5+Math.random()*2,i._zigTimer=0,xs("deer",v,Q.pos)):(h<d||Pw(v,i.wanderAng,R,u,Math.PI*.5))&&(i.state="alert",i._stT=1+Math.random()*1.5,xs("deer",v,Q.pos))}if(i.state!=="flee")for(let v=0;v<Ne.length;v++){if(v===n||Ne[v].state!=="flee")continue;const R=Ne[v].group.position.x-r,N=Ne[v].group.position.z-a;if(R*R+N*N<400){i.state="flee",i.wanderAng=Ne[v].wanderAng+(Math.random()-.5)*.4,i.fleeTimer=2+Math.random()*1.5,i._zigTimer=0;break}}const x=[];for(let v=0;v<Ne.length;v++){if(v===n)continue;const R=Ne[v].group.position.x,N=Ne[v].group.position.z;(R-r)*(R-r)+(N-a)*(N-a)<400&&x.push({x:R,z:N})}const _=hp({x:r,z:a},x,3),A=x.length>0?up({x:r,z:a},x):{x:0,z:0};(i.state==="alert"||i.state==="watching")&&(i.headLook+=(f-i.wanderAng)*.3*s);let T=i.speed,S=!1;switch(i.state){case"walk":{if(S=!0,i.walkTimer-=s,i.walkTimer<=0){const R=Math.random(),N=Ie==="DUSK"?.55:.4,D=Ie==="DEEP_NIGHT"?.25:.1;if(R<.25)i.state="pause",i.pauseTimer=2+Math.random()*3;else if(R<N)i.state="graze",i._stT=Ie==="DUSK"?5+Math.random()*6:3+Math.random()*4;else if(R<N+.1&&Fe.length>0){i.state="drink",i._stT=8;let z=1/0;for(let H=0;H<Fe.length;H++){const V=Fe[H].x-r,Z=Fe[H].z-a,W=V*V+Z*Z;W<z&&(z=W,i._drinkTgt=Fe[H])}}else R<N+.1+D?(i.state="rest",i._stT=Ie==="DEEP_NIGHT"?8+Math.random()*8:5+Math.random()*5):(i.wanderAng+=(Math.random()-.5)*1.2,i.walkTimer=3+Math.random()*5)}if((r-i.homeX)*(r-i.homeX)+(a-i.homeZ)*(a-i.homeZ)>400){const R=Math.atan2(i.homeX-r,i.homeZ-a);i.wanderAng+=(R-i.wanderAng)*s*.5}if(x.length>0){const R=Math.atan2(A.x*.15+_.x*.8,A.z*.15+_.z*.8);i.wanderAng+=(R-i.wanderAng)*s*.3}break}case"pause":{i.pauseTimer-=s,i.headLook=Math.sin(t*.6)*.4,i.pauseTimer<=0&&(i.state="walk",i.walkTimer=3+Math.random()*5);break}case"graze":{i._stT-=s,i.headBob=-.5,i._stT<=0&&(i.state="walk",i.walkTimer=2+Math.random()*4,i.headBob=0);break}case"drink":{if(i._stT-=s,i._drinkTgt){const v=i._drinkTgt.x-r,R=i._drinkTgt.z-a;Math.sqrt(v*v+R*R)>2?(i.wanderAng=Math.atan2(v,R),S=!0,T=i.speed*.7):i.headBob=-.6}i._stT<=0&&(i.state="walk",i.walkTimer=3+Math.random()*4,i.headBob=0,i._drinkTgt=null);break}case"rest":{i._stT-=s,o.position.y=Math.max(y-.3,o.position.y-s*.5),i._stT<=0&&(i.state="walk",i.walkTimer=2+Math.random()*3);break}case"alert":{i._stT-=s,h<M?(i.state="flee",i.wanderAng=f,i.fleeTimer=2.5+Math.random()*2):i._stT<=0&&(h<u*1.2*(u*1.2)?(i.state="watching",i._stT=3+Math.random()*3):(i.state="walk",i.walkTimer=2+Math.random()*3));break}case"watching":{i._stT-=s,S=!0,T=i.speed*.3,i.wanderAng=f,h<M?(i.state="flee",i.wanderAng=f,i.fleeTimer=2.5+Math.random()*2):(h>u*1.5*(u*1.5)||i._stT<=0)&&(i.state="walk",i.walkTimer=2+Math.random()*4);break}case"flee":{S=!0,T=i.speed*CM,i.fleeTimer-=s,i._zigTimer-=s,i._zigTimer<=0&&(i._zigDir*=-1,i._zigTimer=.4+Math.random()*.4),i.wanderAng=f+i._zigDir*.3;const v=Dw({x:r,z:a},i.wanderAng,ce,3,1.5);v.x*v.x+v.z*v.z>.01&&(i.wanderAng+=Math.atan2(v.z,v.x)*.3);const R=Lw({x:r,z:a},8);(R.x!==0||R.z!==0)&&(i.wanderAng=Math.atan2(R.z,R.x)),(i.fleeTimer<=0||h>u*2*(u*2))&&(i.state="walk",i.walkTimer=3+Math.random()*5);break}}if(S&&(o.position.x+=Math.sin(i.wanderAng)*T*s,o.position.z+=Math.cos(i.wanderAng)*T*s,i.legCycle+=s*T*3),o.position.x*o.position.x+o.position.z*o.position.z>he*.9*(he*.9)&&(i.wanderAng=Math.atan2(-o.position.x,-o.position.z)),i.state!=="rest"){const v=y-o.position.y;Math.abs(v)>.01?o.position.y+=Math.sign(v)*Math.min(Math.abs(v),s*2):o.position.y=y}if(o.rotation.y=i.wanderAng,i.state==="alert"||i.state==="watching"){const v=f-i.wanderAng;i.headLook+=(v*.5-i.headLook)*s*3}const w=i.headBob||0;i.neckPivot.rotation.x+=(w-i.neckPivot.rotation.x)*s*3,i.neckPivot.rotation.y+=(i.headLook-i.neckPivot.rotation.y)*s*4,S&&i.state!=="graze"&&i.state!=="drink"&&(i.neckPivot.rotation.x+=Math.sin(i.legCycle*2)*.05);for(let v=0;v<i.legPivots.length;v++){const R=i.legPivots[v];if(S){const N=R.isFront?0:Math.PI,D=R.side>0?Math.PI:0,z=Math.sin(i.legCycle+N+D)*.4*(T/i.speed);R.upper.rotation.x=z,R.lower.rotation.x=Math.max(0,-z*.6)}else i.state==="rest"&&o.position.y<-.1?(R.upper.rotation.x+=(.8-R.upper.rotation.x)*s*2,R.lower.rotation.x+=(1-R.lower.rotation.x)*s*2):(R.upper.rotation.x*=.9,R.lower.rotation.x*=.9)}i.tailPivot.rotation.x=Math.sin(t*1.5+i.phase)*.15,i.state==="flee"&&(i.tailPivot.rotation.x+=.3),i.state==="alert"?i.tailPivot.rotation.z=Math.sin(t*6)*.1:i.tailPivot.rotation.z*=.9,i.mat.emissiveIntensity=(.3+Math.sin(t*.8+i.phase)*.2)*Ee,i.headLook*=.98}}function gp(s,t){for(let e=0;e<po.length;e++){const n=po[e],i=n.group,o=i.position.x,r=i.position.z;if(n._state==="patrol"){if(Math.random()<.002){let g=1/0,M=null;for(let p=0;p<ie.length;p++){const m=ie[p].x-o,y=ie[p].z-r,x=m*m+y*y;x<900&&x<g&&(g=x,M=ie[p])}for(let p=0;p<Qn.length;p++){if(Qn[p].glowIntensity<.3)continue;const m=Qn[p].x-o,y=Qn[p].z-r,x=m*m+y*y;x<900&&x<g&&(g=x,M=Qn[p])}M&&(n._state="attracted",n._attractTarget=M,n._stT=6+Math.random()*8,xs("moth",{x:o,z:r},Q.pos))}const d=Ie==="DAWN"?.005:Ie==="DEEP_NIGHT"?3e-4:.001;if(Math.random()<d){let g=1/0,M=null;for(let p=0;p<ce.length;p++){const m=ce[p].x-o,y=ce[p].z-r,x=m*m+y*y;x<400&&x<g&&(g=x,M=ce[p])}M&&(n._state="rest",n._restTree=M,n._stT=Ie==="DAWN"?8+Math.random()*10:4+Math.random()*6)}}const a=Ie==="DEEP_NIGHT"?1.6:Ie==="DAWN"?.5:1,c=Ie==="DEEP_NIGHT"?1.4:1;switch(n._state){case"patrol":{n.orbitAng+=s*.4*a;const d=n.centerX+Math.cos(n.orbitAng)*n.orbitR*c,g=n.centerZ+Math.sin(n.orbitAng)*n.orbitR*c;i.position.x+=(d-o)*s*1.5,i.position.z+=(g-r)*s*1.5,i.position.y=n.floatY+Math.sin(t*.7+n.phase)*.8,i.rotation.y=n.orbitAng+Math.PI/2;break}case"attracted":{if(n._stT-=s,!n._attractTarget||n._stT<=0){n._state="patrol",n._attractTarget=null;break}n.orbitAng+=s*.8;const d=n._attractTarget,g=Math.max(.5,n._stT*.4),M=d.x+Math.cos(n.orbitAng)*g,p=d.z+Math.sin(n.orbitAng)*g;i.position.x+=(M-o)*s*2,i.position.z+=(p-r)*s*2,i.position.y+=(2-i.position.y)*s*.5,i.rotation.y=n.orbitAng+Math.PI/2;break}case"rest":{if(n._stT-=s,!n._restTree||n._stT<=0){n._state="patrol",n._restTree=null,n.centerX=i.position.x,n.centerZ=i.position.z;break}const d=n._restTree,g=d.x+.5-o,M=d.z+.5-r,p=Math.sqrt(g*g+M*M);p>.3&&(i.position.x+=g/p*s*2,i.position.z+=M/p*s*2),i.position.y+=(2.5-i.position.y)*s*1.5,i.rotation.y=Math.atan2(g,M);break}}const l=n._state==="rest"?.05:.4,h=Math.sin(t*n.flapSpeed+n.phase)*l;for(let d=0;d<i._wingPivots.length;d++){const g=i._wingPivots[d];g.pivot.rotation.z=h*g.side}const f=Math.sin(t*1.5+n.phase)*.5+.5,u=n._state==="attracted"?.4:0;n.wingMat.emissiveIntensity=(.5+f*.6+u)*Ee,n.wingMat.opacity=.45+f*.25}}function Zw(s,t){const e=Pe.ShiftLeft||Pe.ShiftRight||or;let n=null;if(fo>5&&(Dn==="SEEK"||Dn==="RISING")){let i=1/0;for(let o=0;o<En.length;o++){if(En[o].found)continue;const r=En[o].x-Q.pos.x,a=En[o].z-Q.pos.z,c=r*r+a*a;c<i&&(i=c,n=En[o])}}for(let i=0;i<La.length;i++){const o=La[i],r=t*.5+o.phase+i/wd*6.28,a=e?4+i*2:1.5+i*.8,c=e?3+i:1.2+Math.sin(t*.7+o.phase)*.5;if(o.targetX=Q.pos.x+Math.cos(r)*a,o.targetY=Q.pos.y-za+c,o.targetZ=Q.pos.z+Math.sin(r)*a,i===0&&n){const g=Math.min((fo-5)/3,.6);o.targetX+=(n.x-Q.pos.x)*g,o.targetZ+=(n.z-Q.pos.z)*g,o.targetY+=.5}const l=e?.8:2.5;o.velX+=(o.targetX-o.group.position.x)*l*s,o.velY+=(o.targetY-o.group.position.y)*l*s,o.velZ+=(o.targetZ-o.group.position.z)*l*s,o.velX*=.92,o.velY*=.92,o.velZ*=.92,o.group.position.x+=o.velX*s*4,o.group.position.y+=o.velY*s*4,o.group.position.z+=o.velZ*s*4;const h=Math.sin(t*2+o.phase)*.5+.5;o.glowMat.opacity=.3+h*.4,o.hazeMat.opacity=.08+h*.12;const f=t*(2.5+i*.5)+o.phase,u=.14+Math.sin(t*1.3+o.phase)*.06;o.group.children[5].position.set(Math.cos(f)*u,Math.sin(f*1.5)*.08,Math.sin(f)*u);for(let g=0;g<o.tendrils.length;g++){const M=o.tendrils[g],p=Math.sin(t*3+g*2.1+o.phase)*.3,m=.08+Math.sin(t*2+g*1.5)*.04;M.mesh.position.x=Math.cos(M.baseAng+p)*m,M.mesh.position.z=Math.sin(M.baseAng+p)*m,M.mesh.rotation.y=M.baseAng+p,M.mesh.rotation.z=Math.PI/3+Math.sin(t*2.5+g)*.2}for(let g=0;g<o.embers.length;g++){const M=(g+1)*.08;o.embers[g].position.y=-.06-M+Math.sin(t*4+g*1.4+o.phase)*.03,o.embers[g].position.x=Math.sin(t*2.5+g*2+o.phase)*.06,o.embers[g].material.opacity=.2+Math.sin(t*5+g*1.7)*.15}o.facet.rotation.y+=s*1.5,o.facet.rotation.x+=s*.7,o.halo.rotation.z+=s*.3,o.halo2.rotation.y+=s*.2}}function $w(s,t){for(let e=0;e<Qn.length;e++){const n=Qn[e],i=n.x-Q.pos.x,o=n.z-Q.pos.z,a=i*i+o*o<(kl+.5)*(kl+.5),c=a?1:0;n.glowIntensity+=(c-n.glowIntensity)*s*3,n.discMat.opacity=n.glowIntensity*.25*(.6+Math.sin(t*2+n.phase)*.4),n.mushMat.emissiveIntensity=(.2+n.glowIntensity*.8)*Ee,a&&Q.vel.y>0&&Q.vel.y<=_a+.5&&(Q.vel.y=_a+TM,n.glowIntensity=1.5,Cw());const l=.08+n.glowIntensity*.25;n.sporeMat.opacity=l;for(let h=0;h<n.spores.length;h++){const f=n.spores[h];f.drift+=s*.3,f.mesh.position.y+=f.speed*s*(.5+n.glowIntensity),f.mesh.position.x=f.baseX+Math.sin(t*.8+f.drift)*.15,f.mesh.position.z=f.baseZ+Math.cos(t*.6+f.drift)*.12,f.mesh.position.y>.8&&(f.mesh.position.y=.03),f.mesh.scale.setScalar(.6+Math.sin(t*2+h)*.4)}for(let h=0;h<n.glowWorms.length;h++){const f=Math.sin(t*1.5+h*1.3+n.phase)*.5+.5;n.glowWorms[h].material.opacity=.1+f*.4+n.glowIntensity*.3}}}function jw(s,t){for(let e=0;e<Jn.length;e++){const n=Jn[e];if(n.popped){if(n.popTimer-=s,n.popTimer<=0){n.popped=!1,n.group.visible=!0;const h=b()*6.28,f=8+b()*he*.5;n.homeX=Math.cos(h)*f,n.homeZ=Math.sin(h)*f,n.floatY=.5+b()*4,n.group.position.set(n.homeX,n.floatY,n.homeZ)}continue}n.driftAng+=s*.2;const i=n.homeX+Math.sin(n.driftAng)*3,o=n.homeZ+Math.cos(n.driftAng*.7)*3;n.group.position.x+=(i-n.group.position.x)*s*.5,n.group.position.z+=(o-n.group.position.z)*s*.5,n.group.position.y=n.floatY+Math.sin(t*.6+n.phase)*n.bobAmp;const r=(t*.1+n.phase)%1;n.shellMat.color.setRGB(Math.sin(r*6.28)*.15+.7,Math.sin(r*6.28+2.09)*.15+.7,Math.sin(r*6.28+4.19)*.15+.8),n.shellMat.opacity=.18+Math.sin(t*1.5+n.phase)*.08;const a=n.group.position.x-Q.pos.x,c=n.group.position.y-Q.pos.y,l=n.group.position.z-Q.pos.z;a*a+c*c+l*l<uf*uf*n.sc*n.sc&&(n.popped=!0,n.popTimer=8+Math.random()*8,n.group.visible=!1,$y(n.group.position.x,n.group.position.y,n.group.position.z,6),Rw(n.group.position,Q.pos))}}function Kw(s,t){const e=Wh();for(let n=0;n<Fe.length;n++){const i=Fe[n],o=.015+e*.01;for(let f=0;f<i.pads.length;f++)i.pads[f].mesh.position.y=.05+Math.sin(t*(.8+e*.4)+i.pads[f].phase)*o;const r=e*.08;i.waterMat.emissiveIntensity=(.15+r+Math.sin(t*1+i.phase)*.1)*Ee;const a=Math.sin(t*1.2+i.phase)*.5+.5;i.flMat.emissiveIntensity=(.3+a*.5)*Ee;const c=.25+e*.2,l=.12+e*.08;for(let f=0;f<i.ripples.length;f++){const u=i.ripples[f],d=(t*c+u.phase)%1,g=.2+d*i.pondR*.8;u.mesh.scale.setScalar(g),u.mesh.material.opacity=(1-d)*l}const h=1+e*.5;for(let f=0;f<i.tadpoles.length;f++){const u=i.tadpoles[f];u.ang+=u.speed*h*s;const d=Math.cos(u.ang)*u.orbR,g=Math.sin(u.ang)*u.orbR;u.body.position.x=d,u.body.position.z=g,u.body.rotation.y=u.ang+Math.PI/2;const M=.02;u.tail.position.x=d-Math.cos(u.ang)*M,u.tail.position.z=g-Math.sin(u.ang)*M,u.tail.rotation.y=u.ang,u.tail.rotation.z=Math.PI/2+Math.sin(t*(8+e*2)+f*3)*.4}}}function Jw(s,t){if(Xc-=s,Xc<=0){Xc=.5;for(let o=0;o<ie.length;o++){const r=ie[o],a=r.x-Q.pos.x,c=r.z-Q.pos.z;if(a*a+c*c<36){Ln={x:r.x,z:r.z},Zn=0;break}}}const e=Yw();if(!Ln){e.visible=!1;return}if(Zn+=s*12,Zn>30){Ln=null,Zn=0,e.visible=!1;return}e.visible=!0,e.position.set(Ln.x,.15,Ln.z),e.scale.setScalar(Zn),e.material.opacity=(1-Zn/30)*.45;const n=Zn,i=4;for(let o=0;o<xn.length;o++){const r=xn[o],a=r.x-Ln.x,c=r.z-Ln.z,l=Math.sqrt(a*a+c*c);if(Math.abs(l-n)<i){const h=1-Math.abs(l-n)/i;r.capMat.emissiveIntensity=Math.max(r.capMat.emissiveIntensity,(r.base+h*2)*Ee)}}for(let o=0;o<ni.length;o++){const r=ni[o],a=r.group.position.x-Ln.x,c=r.group.position.z-Ln.z,l=Math.sqrt(a*a+c*c);if(Math.abs(l-n)<i){const h=1-Math.abs(l-n)/i;r.petalMat.emissiveIntensity=Math.max(r.petalMat.emissiveIntensity,(.3+h*1.5)*Ee)}}}function Qw(s,t){const e=Q.pos.x,n=Q.pos.z,i=Wh(),o=bi?.6:i>.3?i*.4:0;for(let l=0;l<ni.length;l++){const h=ni[l],f=h.group.position.x,u=h.group.position.z,d=f-e,g=u-n,p=d*d+g*g<16?1:0;h._react=h._react||0,h._react+=(p-h._react)*s*(p>0?4:1.5);const m=(1+h._react*.15)*(1-o*.12),y=(1+h._react*.05)*(1-o*.15);h.group.scale.set(m,y,m),h.petalMat.emissiveIntensity+=h._react*.6*Ee*(1-o*.4)}for(let l=0;l<xn.length;l++){const h=xn[l],f=h.x-e,u=h.z-n,g=f*f+u*u<4?1:0;h._touch=h._touch||0,h._touch+=(g-h._touch)*s*(g>0?6:1.5);const M=i*.4;h.capMat.emissiveIntensity+=(h._touch*1.5+M)*Ee;const p=1+h._touch*.08;h.group.scale.set(p,1+h._touch*.04,p)}for(let l=0;l<er.length;l++){const h=er[l],f=h.group.position.x,u=h.group.position.z,d=f-e,g=u-n,p=d*d+g*g<2.25?.65:1;h._curl=h._curl===void 0?1:h._curl,h._curl+=(p-h._curl)*s*(p<1?4:1.5),h.group.scale.set(1+(1-h._curl)*.3,h._curl,1+(1-h._curl)*.3)}Xw();const r=Yo==="FOG_BANK"?.5:1;let a=0,c=0;for(let l=0;l<ie.length;l++){const h=ie[l],f=h.x-e,u=h.z-n;if(f*f+u*u<36)for(let d=0;d<ie.length;d++){if(l===d)continue;const g=ie[d],M=h.x-g.x,p=h.z-g.z,m=M*M+p*p;if(m<400){a++;const y=(1-Math.sqrt(m)/20)*.8*r;if(g.mat.emissiveIntensity+=y*Ee,g.light&&(g.light.intensity+=y*.3*Ee),c<ph){const x=mh[c],_=x.geo.attributes.position.array,A=1,T=1;_[0]=h.x,_[1]=A,_[2]=h.z,_[3]=g.x,_[4]=T,_[5]=g.z,x.geo.attributes.position.needsUpdate=!0,x.geo.computeBoundingSphere(),x.active=!0;const S=Math.sin(t*3+l*1.5+d*.7)*.3+.5;x.opacity=y*S*Ee,x.line.material.opacity=x.opacity,x.line.visible=!0,c++}}}}for(let l=c;l<ph;l++){const h=mh[l];h.line.visible&&(h.opacity*=.85,h.line.material.opacity=h.opacity,h.opacity<.01&&(h.line.visible=!1))}return a}let Zr="EXPLORE",Yc=0,qc=0;function tS(s,t){let e=!1;for(let u=0;u<ie.length;u++){const d=ie[u].x-Q.pos.x,g=ie[u].z-Q.pos.z;if(d*d+g*g<64){e=!0;break}}Zr=e?"NEAR_CRYSTAL":"EXPLORE",Yc+=s;const n=Wh(),i=Math.max(.2,1-n*.8),o=(Zr==="NEAR_CRYSTAL"?.08:.25)/i,r=Math.floor((Zr==="NEAR_CRYSTAL"?120:100)*i);if(Yc>o&&(Yc=0,Xd(0,t)<r))if(Zr==="NEAR_CRYSTAL")for(let d=0;d<ie.length;d++){const g=ie[d].x-Q.pos.x,M=ie[d].z-Q.pos.z;g*g+M*M<100&&na(ie[d].x,ne(ie[d].x,ie[d].z)+1,ie[d].z,3+Math.random()*4)}else if(Math.random()<.3&&ni.length>0){const d=ni[Math.floor(Math.random()*ni.length)];if(d._react>.3){const g=d.group.position.x,M=d.group.position.z;na(g+(Math.random()-.5)*2,ne(g,M)+.5,M+(Math.random()-.5)*2,4+Math.random()*6)}}else{const d=Math.random()*6.28,g=5+Math.random()*25,M=Q.pos.x+Math.cos(d)*g,p=Q.pos.z+Math.sin(d)*g;na(M,ne(M,p),p,6+Math.random()*10)}if(qc+=s,qc>.2){qc=0;for(let u=0;u<xn.length;u++){const d=xn[u],g=d.x-Q.pos.x,M=d.z-Q.pos.z;g*g+M*M<200&&Math.random()<.15&&ky(d.x,.6*d.group.scale.x,d.z)}}for(let u=0;u<xn.length;u++){const d=xn[u],g=Math.sin(t*d.speed+d.phase)*.5+.5;d.capMat.emissiveIntensity=d.base*(.5+g*.8)*Ee}for(let u=0;u<ie.length;u++){const d=ie[u],g=Math.sin(t*.6+d.phase)*.5+.5;d.mat.emissiveIntensity=(1+g*1.5)*Ee,d.group.children[0].rotation.y+=s*.15,d.light&&(d.light.intensity=(.3+g*.4)*Ee)}if(!Di.length)for(let u=0;u<ie.length;u++)Di.push({idx:u,dist:0});const a=Q.pos.x-Rf,c=Q.pos.z-Cf;if(a*a+c*c>1){Rf=Q.pos.x,Cf=Q.pos.z;for(let u=0;u<ie.length;u++){const d=ie[u],g=d.x-Q.pos.x,M=d.z-Q.pos.z;Di[u].idx=u,Di[u].dist=g*g+M*M}Di.sort((u,d)=>u.dist-d.dist)}for(let u=0;u<Qi.length;u++)if(u<Di.length&&Di[u].dist<2500){const d=ie[Di[u].idx],g=Math.sin(t*.6+d.phase)*.5+.5;Qi[u].position.set(d.x,1.5,d.z),Qi[u].intensity=(1.5+g*2)*Ee,Qi[u].distance=16,Qi[u].color.setHex(k.crystal)}else Qi[u].intensity=0;if(yi>.8&&Math.random()<.005)for(let u=0;u<Zo.length;u++){const d=Zo[u];if(!d.dispersed&&Math.random()<.1){d.dispersed=!0;for(let g=0;g<8;g++)Fd(d.x,d.h+.05,d.z);for(let g=2;g<d.group.children.length;g++)d.group.children[g].visible=!1;d.regrowTimer=15+Math.random()*10}}const l=yi>.3?(yi-.3)*.02:0,h=bi?.03:0;if(Math.random()<l+h)for(let u=0;u<ce.length;u++){const d=ce[u],g=d.x-Q.pos.x,M=d.z-Q.pos.z;if(g*g+M*M<900&&Math.random()<.15){const p=(d.group.children[0]?d.group.children[0].geometry.parameters.height*.7:6)+d.group.position.y;Qy(d.x,p,d.z);break}}dp(s,t),pp(s,t),mp(s,t),gp(s,t),Dd(s,t),fp(s,t);for(let u=0;u<Ia.length;u++){const d=Ia[u];if(!d.sparkles)continue;const g=d.x||d.group.position.x,M=d.z||d.group.position.z;let p=0;for(let T=0;T<ie.length;T++){const S=ie[T].x-g,E=ie[T].z-M,w=S*S+E*E;w<100&&(p=Math.max(p,(1-Math.sqrt(w)/10)*.6))}const m=g-Q.pos.x,y=M-Q.pos.z,x=m*m+y*y,_=x<25?(1-Math.sqrt(x)/5)*.3:0;let A=0;if(Ln&&Zn>0){const T=g-Ln.x,S=M-Ln.z,E=Math.sqrt(T*T+S*S);Math.abs(E-Zn)<3&&(A=(1-Math.abs(E-Zn)/3)*.8)}for(let T=0;T<d.sparkles.length;T++){const S=Math.sin(t*4+u*2.3+T*1.7)*.35;d.sparkles[T].material.opacity=.15+S+p+_+A}d.mossMat&&_>0&&(d.mossMat.emissiveIntensity=.05+_*.4*Math.sin(t*2+u)*.5+.5)}Zw(s,t),_y(Zo,s,t,Q.pos),$w(s,t),jw(s,t),Kw(s,t),$d(s,t,Q.pos),gy(s,t),tw(s,t),Yy(s),jy(s),Jw(s);const f=Qw(s,t);nw(s,t),Aw(s),Fw(Q.pos,Ne,Sn,Kn,po,Qn,Fe,f),zw(s)}let Oe=0,gh=!1;function eS(){gh||(gh=!0,GM(!0),Ww())}function xp(){requestAnimationFrame(xp);const s=Math.min(Sd.getDelta(),.1);Oe+=s,rw(s);const t=fw(s,Oe,Q.pos);if(pw(s,Q.pos,t,ls,Xs),jn>0&&(Oh.intensity+=jn*.8,vt.background.r=Math.min(vt.background.r+jn*.08,.25),vt.background.g=Math.min(vt.background.g+jn*.08,.25),vt.background.b=Math.min(vt.background.b+jn*.12,.35)),ww(s,yi,t,bi,jn,Ie,Q.pos,Fe),Gy(ls,Xs),my(ls,Xs,yi),Ky(ls,Xs),!gh){sn.position.set(0,za,0),sn.rotation.order="YXZ",sn.rotation.y+=s*.08,sn.rotation.x=0;for(let e=0;e<xn.length;e++){const n=xn[e],i=Math.sin(Oe*n.speed+n.phase)*.5+.5;n.capMat.emissiveIntensity=n.base*(.5+i*.8)*Ee}for(let e=0;e<ie.length;e++){const n=ie[e];n.mat.emissiveIntensity=(1+Math.sin(Oe*.6+n.phase)*.5*1.5+.75)*Ee}dp(s,Oe),pp(s,Oe),mp(s,Oe),gp(s,Oe),Dd(s,Oe),fp(s,Oe),$d(s,Oe,Q.pos);for(let e=0;e<Jn.length;e++)Jn[e].popped||(Jn[e].group.position.y=Jn[e].floatY+Math.sin(Oe*.6+Jn[e].phase)*Jn[e].bobAmp);for(let e=0;e<Fe.length;e++)for(let n=0;n<Fe[e].pads.length;n++)Fe[e].pads[n].mesh.position.y=.05+Math.sin(Oe*.8+Fe[e].pads[n].phase)*.015;for(let e=0;e<En.length;e++){const n=En[e],i=Math.sin(Oe*1.5+n.phase)*.5+.5;n.group.position.y=n.flyY+Math.sin(Oe*.8+n.phase)*.3,n.glowMat.opacity=.3+i*.4}pf();return}oy(s),tS(s,Oe),Xd(s,Oe),Hy(s),sn.position.copy(Q.pos),sn.position.y+=Ud,sn.rotation.order="YXZ",sn.rotation.y=Qo,sn.rotation.x=ds,Gw(s,Q.pos),pf()}try{Yl(0,0,5),KM(),ow({scene:vt,moon:Un,moon2:Nn,hemiLight:Oh,playerLight:Bh}),qw(),ZM(),iy(ce,Ia),sy(yf),ny(s=>{let t=!1;for(let e=0;e<Fe.length;e++){const n=Fe[e].x-Q.pos.x,i=Fe[e].z-Q.pos.z;if(n*n+i*i<16){t=!0;break}}bw(s,t),Math.random()<.4&&yf(Q.pos.x,Q.pos.z,1)},()=>Tw(),s=>Ew(s)),uw(),dw(),zy(150),By(60),BM(),Vy(SM),Xy(20),py(40),Zy(30),Jy(50),Ly(),Ny(),Fy(),yw(),Nw(),kw(),Hw(),ew({orbs:En,obeliskGroup:Cy(),obeliskMat:Py(),obeliskGlowMat:Iy(),moatMesh:Dy(),moatMat:Uy(),rainbowArcs:nh,player:Q,makeLaser:iw,orbHudEl:Vw(),deers:Ne,puffs:Sn,jellies:Kn,moths:po}),kM(eS);for(let s=0;s<50;s++){const t=Math.random()*6.28,e=3+Math.random()*he*.7,n=Math.cos(t)*e,i=Math.sin(t)*e;na(n,ne(n,i),i,8+Math.random()*12)}console.log("✓ Init: trees="+ce.length+" mush="+xn.length+" crystals="+ie.length+" orbs="+En.length+" creatures="+(Kn.length+Sn.length+Ne.length+po.length)+" wisps="+La.length+" dandelions="+Zo.length+" fairyRings="+Qn.length+" bubbles="+Jn.length+" ponds="+Fe.length+" scene="+vt.children.length),xp()}catch(s){console.error("INIT FAILED:",s),document.body.innerHTML='<div style="color:red;padding:30px;font-family:monospace"><h2>Init Failed</h2><pre>'+(s.stack||s.message)+"</pre></div>"}
