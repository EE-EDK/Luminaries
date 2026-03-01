(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zh="172",Lm=0,Nf=1,Dm=2,bp=1,Tp=2,Ni=3,fs=0,Tn=1,Dt=2,ki=0,No=1,ce=2,zf=3,Ff=4,Um=5,Ds=100,Nm=101,zm=102,Fm=103,Om=104,Bm=200,Gm=201,km=202,Hm=203,mu=204,gu=205,Vm=206,Wm=207,Xm=208,qm=209,Ym=210,Zm=211,$m=212,jm=213,Km=214,xu=0,vu=1,Mu=2,Yo=3,_u=4,yu=5,wu=6,Su=7,Ep=0,Jm=1,Qm=2,hs=0,tg=1,eg=2,ng=3,Ap=4,ig=5,sg=6,og=7,Rp=300,Zo=301,$o=302,bu=303,Tu=304,$c=306,jo=1e3,Ns=1001,Eu=1002,kn=1003,rg=1004,fa=1005,wi=1006,sl=1007,zs=1008,qi=1009,Cp=1010,Pp=1011,Wr=1012,$h=1013,Ws=1014,Si=1015,Hi=1016,jh=1017,Kh=1018,Ko=1020,Ip=35902,Lp=1021,Dp=1022,li=1023,Up=1024,Np=1025,zo=1026,Jo=1027,Jh=1028,Qh=1029,zp=1030,tf=1031,ef=1033,oc=33776,rc=33777,ac=33778,cc=33779,Au=35840,Ru=35841,Cu=35842,Pu=35843,Iu=36196,Lu=37492,Du=37496,Uu=37808,Nu=37809,zu=37810,Fu=37811,Ou=37812,Bu=37813,Gu=37814,ku=37815,Hu=37816,Vu=37817,Wu=37818,Xu=37819,qu=37820,Yu=37821,lc=36492,Zu=36494,$u=36495,Fp=36283,ju=36284,Ku=36285,Ju=36286,ag=3200,cg=3201,Op=0,lg=1,as="",bn="srgb",Qo="srgb-linear",Sc="linear",pe="srgb",Ks=7680,Of=519,ug=512,hg=513,fg=514,Bp=515,dg=516,pg=517,mg=518,gg=519,Qu=35044,xe=35048,Bf="300 es",Bi=2e3,bc=2001;class rr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ol=Math.PI/180,th=180/Math.PI;function Vi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function $t(i,t,e){return Math.max(t,Math.min(e,i))}function xg(i,t){return(i%t+t)%t}function rl(i,t,e){return(1-e)*i+e*t}function _i(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,s,o,r,a,c,l){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l)}set(t,e,n,s,o,r,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=o,u[5]=c,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],x=s[0],f=s[3],m=s[6],w=s[1],_=s[4],M=s[7],A=s[2],E=s[5],T=s[8];return o[0]=r*x+a*w+c*A,o[3]=r*f+a*_+c*E,o[6]=r*m+a*M+c*T,o[1]=l*x+u*w+h*A,o[4]=l*f+u*_+h*E,o[7]=l*m+u*M+h*T,o[2]=d*x+p*w+g*A,o[5]=d*f+p*_+g*E,o[8]=d*m+p*M+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*r*u-e*a*l-n*o*u+n*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*r-a*l,d=a*c-u*o,p=l*o-r*c,g=e*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*r)*x,t[3]=d*x,t[4]=(u*e-s*c)*x,t[5]=(s*o-a*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(al.makeScale(t,e)),this}rotate(t){return this.premultiply(al.makeRotation(-t)),this}translate(t,e){return this.premultiply(al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const al=new Wt;function Gp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Tc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vg(){const i=Tc("canvas");return i.style.display="block",i}const Gf={};function So(i){i in Gf||(Gf[i]=!0,console.warn(i))}function Mg(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function _g(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yg(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const kf=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hf=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wg(){const i={enabled:!0,workingColorSpace:Qo,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===pe&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===pe&&(s.r=Fo(s.r),s.g=Fo(s.g),s.b=Fo(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===as?Sc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qo]:{primaries:t,whitePoint:n,transfer:Sc,toXYZ:kf,fromXYZ:Hf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:kf,fromXYZ:Hf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),i}const oe=wg();function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Js;class Sg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Js===void 0&&(Js=Tc("canvas")),Js.width=t.width,Js.height=t.height;const n=Js.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Js}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Tc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Wi(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wi(e[n]/255)*255):e[n]=Wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bg=0;class kp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(cl(s[r].image)):o.push(cl(s[r]))}else o=cl(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function cl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tg=0;class nn extends rr{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,n=Ns,s=Ns,o=wi,r=zs,a=li,c=qi,l=nn.DEFAULT_ANISOTROPY,u=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Vi(),this.name="",this.source=new kp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jo:t.x=t.x-Math.floor(t.x);break;case Ns:t.x=t.x<0?0:1;break;case Eu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jo:t.y=t.y-Math.floor(t.y);break;case Ns:t.y=t.y<0?0:1;break;case Eu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Rp;nn.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],x=c[2],f=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+f)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,M=(p+1)/2,A=(m+1)/2,E=(u+d)/4,T=(h+x)/4,b=(g+f)/4;return _>M&&_>A?_<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(_),s=E/n,o=T/n):M>A?M<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(M),n=E/s,o=b/s):A<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(A),n=T/o,s=b/o),this.set(n,s,o,e),this}let w=Math.sqrt((f-g)*(f-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(f-g)/w,this.y=(h-x)/w,this.z=(d-u)/w,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Eg extends rr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new nn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new kp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends Eg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Hp extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ag extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class na{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=o[r+0],p=o[r+1],g=o[r+2],x=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(h!==x||c!==d||l!==p||u!==g){let f=1-a;const m=c*d+l*p+u*g+h*x,w=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const A=Math.sqrt(_),E=Math.atan2(A,m*w);f=Math.sin(f*E)/A,a=Math.sin(a*E)/A}const M=a*w;if(c=c*f+d*M,l=l*f+p*M,u=u*f+g*M,h=h*f+x*M,f===1-a){const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=o[r],d=o[r+1],p=o[r+2],g=o[r+3];return t[e]=a*g+u*h+c*p-l*d,t[e+1]=c*g+u*d+l*h-a*p,t[e+2]=l*g+u*p+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(o/2),d=c(n/2),p=c(s/2),g=c(o/2);switch(r){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(o-l)*p,this._z=(r-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(o-l)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(r-s)/p,this._x=(o+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+r*a+s*l-o*c,this._y=s*u+r*c+o*a-n*l,this._z=o*u+r*l+n*c-s*a,this._w=r*u-n*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=r*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*n),u=2*(a*e-o*s),h=2*(o*n-r*e);return this.x=e+c*l+r*h-a*u,this.y=n+c*u+a*l-o*h,this.z=s+c*h+o*u-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ll.copy(this).projectOnVector(t),this.sub(ll)}reflect(t){return this.sub(ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ll=new N,Vf=new na;class Zs{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,oi):oi.fromBufferAttribute(o,r),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),da.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),da.copy(n.boundingBox)),da.applyMatrix4(t.matrixWorld),this.union(da)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),pa.subVectors(this.max,hr),Qs.subVectors(t.a,hr),to.subVectors(t.b,hr),eo.subVectors(t.c,hr),Zi.subVectors(to,Qs),$i.subVectors(eo,to),gs.subVectors(Qs,eo);let e=[0,-Zi.z,Zi.y,0,-$i.z,$i.y,0,-gs.z,gs.y,Zi.z,0,-Zi.x,$i.z,0,-$i.x,gs.z,0,-gs.x,-Zi.y,Zi.x,0,-$i.y,$i.x,0,-gs.y,gs.x,0];return!ul(e,Qs,to,eo,pa)||(e=[1,0,0,0,1,0,0,0,1],!ul(e,Qs,to,eo,pa))?!1:(ma.crossVectors(Zi,$i),e=[ma.x,ma.y,ma.z],ul(e,Qs,to,eo,pa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ci=[new N,new N,new N,new N,new N,new N,new N,new N],oi=new N,da=new Zs,Qs=new N,to=new N,eo=new N,Zi=new N,$i=new N,gs=new N,hr=new N,pa=new N,ma=new N,xs=new N;function ul(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){xs.fromArray(i,o);const a=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),c=t.dot(xs),l=e.dot(xs),u=n.dot(xs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Rg=new Zs,fr=new N,hl=new N;class $s{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Rg.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);const e=fr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(hl)),this.expandByPoint(fr.copy(t.center).sub(hl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new N,fl=new N,ga=new N,ji=new N,dl=new N,xa=new N,pl=new N;class nf{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fl.copy(t).add(e).multiplyScalar(.5),ga.copy(e).sub(t).normalize(),ji.copy(this.origin).sub(fl);const o=t.distanceTo(e)*.5,r=-this.direction.dot(ga),a=ji.dot(this.direction),c=-ji.dot(ga),l=ji.lengthSq(),u=Math.abs(1-r*r);let h,d,p,g;if(u>0)if(h=r*c-a,d=r*a-c,g=o*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,p=h*(h+r*d+2*a)+d*(r*h+d+2*c)+l}else d=o,h=Math.max(0,-(r*d+a)),p=-h*h+d*(d+2*c)+l;else d=-o,h=Math.max(0,-(r*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-r*o+a)),d=h>0?-o:Math.min(Math.max(-o,-c),o),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-o,-c),o),p=d*(d+2*c)+l):(h=Math.max(0,-(r*o+a)),d=h>0?o:Math.min(Math.max(-o,-c),o),p=-h*h+d*(d+2*c)+l);else d=r>0?-o:o,h=Math.max(0,-(r*d+a)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(fl).addScaledVector(ga,d),p}intersectSphere(t,e){Pi.subVectors(t.center,this.origin);const n=Pi.dot(this.direction),s=Pi.dot(Pi)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(o=(t.min.y-d.y)*u,r=(t.max.y-d.y)*u):(o=(t.max.y-d.y)*u,r=(t.min.y-d.y)*u),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,n,s,o){dl.subVectors(e,t),xa.subVectors(n,t),pl.crossVectors(dl,xa);let r=this.direction.dot(pl),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ji.subVectors(this.origin,t);const c=a*this.direction.dot(xa.crossVectors(ji,xa));if(c<0)return null;const l=a*this.direction.dot(dl.cross(ji));if(l<0||c+l>r)return null;const u=-a*ji.dot(pl);return u<0?null:this.at(u/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,s,o,r,a,c,l,u,h,d,p,g,x,f){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l,u,h,d,p,g,x,f)}set(t,e,n,s,o,r,a,c,l,u,h,d,p,g,x,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=p,m[7]=g,m[11]=x,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/no.setFromMatrixColumn(t,0).length(),o=1/no.setFromMatrixColumn(t,1).length(),r=1/no.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){const d=r*u,p=r*h,g=a*u,x=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+p*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*u,p=c*h,g=l*u,x=l*h;e[0]=d+x*a,e[4]=g*a-p,e[8]=r*l,e[1]=r*h,e[5]=r*u,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*u,p=c*h,g=l*u,x=l*h;e[0]=d-x*a,e[4]=-r*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=r*u,e[9]=x-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*u,p=r*h,g=a*u,x=a*h;e[0]=c*u,e[4]=g*l-p,e[8]=d*l+x,e[1]=c*h,e[5]=x*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,p=r*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-d*h,e[8]=g*h+p,e[1]=h,e[5]=r*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+g,e[10]=d-x*h}else if(t.order==="XZY"){const d=r*c,p=r*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+x,e[5]=r*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cg,t,Pg)}lookAt(t,e,n){const s=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Ki.crossVectors(n,Ln),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Ki.crossVectors(n,Ln)),Ki.normalize(),va.crossVectors(Ln,Ki),s[0]=Ki.x,s[4]=va.x,s[8]=Ln.x,s[1]=Ki.y,s[5]=va.y,s[9]=Ln.y,s[2]=Ki.z,s[6]=va.z,s[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],x=n[6],f=n[10],m=n[14],w=n[3],_=n[7],M=n[11],A=n[15],E=s[0],T=s[4],b=s[8],y=s[12],v=s[1],R=s[5],U=s[9],L=s[13],z=s[2],V=s[6],k=s[10],K=s[14],W=s[3],lt=s[7],pt=s[11],Rt=s[15];return o[0]=r*E+a*v+c*z+l*W,o[4]=r*T+a*R+c*V+l*lt,o[8]=r*b+a*U+c*k+l*pt,o[12]=r*y+a*L+c*K+l*Rt,o[1]=u*E+h*v+d*z+p*W,o[5]=u*T+h*R+d*V+p*lt,o[9]=u*b+h*U+d*k+p*pt,o[13]=u*y+h*L+d*K+p*Rt,o[2]=g*E+x*v+f*z+m*W,o[6]=g*T+x*R+f*V+m*lt,o[10]=g*b+x*U+f*k+m*pt,o[14]=g*y+x*L+f*K+m*Rt,o[3]=w*E+_*v+M*z+A*W,o[7]=w*T+_*R+M*V+A*lt,o[11]=w*b+_*U+M*k+A*pt,o[15]=w*y+_*L+M*K+A*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],x=t[7],f=t[11],m=t[15];return g*(+o*c*h-s*l*h-o*a*d+n*l*d+s*a*p-n*c*p)+x*(+e*c*p-e*l*d+o*r*d-s*r*p+s*l*u-o*c*u)+f*(+e*l*h-e*a*p-o*r*h+n*r*p+o*a*u-n*l*u)+m*(-s*a*u-e*c*h+e*a*d+s*r*h-n*r*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],x=t[13],f=t[14],m=t[15],w=h*f*l-x*d*l+x*c*p-a*f*p-h*c*m+a*d*m,_=g*d*l-u*f*l-g*c*p+r*f*p+u*c*m-r*d*m,M=u*x*l-g*h*l+g*a*p-r*x*p-u*a*m+r*h*m,A=g*h*c-u*x*c-g*a*d+r*x*d+u*a*f-r*h*f,E=e*w+n*_+s*M+o*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=w*T,t[1]=(x*d*o-h*f*o-x*s*p+n*f*p+h*s*m-n*d*m)*T,t[2]=(a*f*o-x*c*o+x*s*l-n*f*l-a*s*m+n*c*m)*T,t[3]=(h*c*o-a*d*o-h*s*l+n*d*l+a*s*p-n*c*p)*T,t[4]=_*T,t[5]=(u*f*o-g*d*o+g*s*p-e*f*p-u*s*m+e*d*m)*T,t[6]=(g*c*o-r*f*o-g*s*l+e*f*l+r*s*m-e*c*m)*T,t[7]=(r*d*o-u*c*o+u*s*l-e*d*l-r*s*p+e*c*p)*T,t[8]=M*T,t[9]=(g*h*o-u*x*o-g*n*p+e*x*p+u*n*m-e*h*m)*T,t[10]=(r*x*o-g*a*o+g*n*l-e*x*l-r*n*m+e*a*m)*T,t[11]=(u*a*o-r*h*o-u*n*l+e*h*l+r*n*p-e*a*p)*T,t[12]=A*T,t[13]=(u*x*s-g*h*s+g*n*d-e*x*d-u*n*f+e*h*f)*T,t[14]=(g*a*s-r*x*s-g*n*c+e*x*c+r*n*f-e*a*f)*T,t[15]=(r*h*s-u*a*s+u*n*c-e*h*c-r*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,u=o*a;return this.set(l*r+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*r,0,l*c-s*a,u*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,u=r+r,h=a+a,d=o*l,p=o*u,g=o*h,x=r*u,f=r*h,m=a*h,w=c*l,_=c*u,M=c*h,A=n.x,E=n.y,T=n.z;return s[0]=(1-(x+m))*A,s[1]=(p+M)*A,s[2]=(g-_)*A,s[3]=0,s[4]=(p-M)*E,s[5]=(1-(d+m))*E,s[6]=(f+w)*E,s[7]=0,s[8]=(g+_)*T,s[9]=(f-w)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=no.set(s[0],s[1],s[2]).length();const r=no.set(s[4],s[5],s[6]).length(),a=no.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],ri.copy(this);const l=1/o,u=1/r,h=1/a;return ri.elements[0]*=l,ri.elements[1]*=l,ri.elements[2]*=l,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=h,ri.elements[9]*=h,ri.elements[10]*=h,e.setFromRotationMatrix(ri),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Bi){const c=this.elements,l=2*o/(e-t),u=2*o/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(a===Bi)p=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===bc)p=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Bi){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(r-o),d=(e+t)*l,p=(n+s)*u;let g,x;if(a===Bi)g=(r+o)*h,x=-2*h;else if(a===bc)g=o*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const no=new N,ri=new fe,Cg=new N(0,0,0),Pg=new N(1,1,1),Ki=new N,va=new N,Ln=new N,Wf=new fe,Xf=new na;class Ti{constructor(t=0,e=0,n=0,s=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$t(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xf.setFromEuler(this),this.setFromQuaternion(Xf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class Vp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ig=0;const qf=new N,io=new na,Ii=new fe,Ma=new N,dr=new N,Lg=new N,Dg=new na,Yf=new N(1,0,0),Zf=new N(0,1,0),$f=new N(0,0,1),jf={type:"added"},Ug={type:"removed"},so={type:"childadded",child:null},ml={type:"childremoved",child:null};class le extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=le.DEFAULT_UP.clone();const t=new N,e=new Ti,n=new na,s=new N(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Wt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return io.setFromAxisAngle(t,e),this.quaternion.multiply(io),this}rotateOnWorldAxis(t,e){return io.setFromAxisAngle(t,e),this.quaternion.premultiply(io),this}rotateX(t){return this.rotateOnAxis(Yf,t)}rotateY(t){return this.rotateOnAxis(Zf,t)}rotateZ(t){return this.rotateOnAxis($f,t)}translateOnAxis(t,e){return qf.copy(t).applyQuaternion(this.quaternion),this.position.add(qf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yf,t)}translateY(t){return this.translateOnAxis(Zf,t)}translateZ(t){return this.translateOnAxis($f,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ma.copy(t):Ma.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(dr,Ma,this.up):Ii.lookAt(Ma,dr,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),io.setFromRotationMatrix(Ii),this.quaternion.premultiply(io.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jf),so.child=t,this.dispatchEvent(so),so.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ug),ml.child=t,this.dispatchEvent(ml),ml.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jf),so.child=t,this.dispatchEvent(so),so.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,Lg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Dg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];o(t.shapes,h)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),u=r(t.images),h=r(t.shapes),d=r(t.skeletons),p=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}le.DEFAULT_UP=new N(0,1,0);le.DEFAULT_MATRIX_AUTO_UPDATE=!0;le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new N,Li=new N,gl=new N,Di=new N,oo=new N,ro=new N,Kf=new N,xl=new N,vl=new N,Ml=new N,_l=new ge,yl=new ge,wl=new ge;class Qn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ai.subVectors(t,e),s.cross(ai);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){ai.subVectors(s,e),Li.subVectors(n,e),gl.subVectors(t,e);const r=ai.dot(ai),a=ai.dot(Li),c=ai.dot(gl),l=Li.dot(Li),u=Li.dot(gl),h=r*l-a*a;if(h===0)return o.set(0,0,0),null;const d=1/h,p=(l*c-a*u)*d,g=(r*u-a*c)*d;return o.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,n,s,o,r,a,c){return this.getBarycoord(t,e,n,s,Di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Di.x),c.addScaledVector(r,Di.y),c.addScaledVector(a,Di.z),c)}static getInterpolatedAttribute(t,e,n,s,o,r){return _l.setScalar(0),yl.setScalar(0),wl.setScalar(0),_l.fromBufferAttribute(t,e),yl.fromBufferAttribute(t,n),wl.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(_l,o.x),r.addScaledVector(yl,o.y),r.addScaledVector(wl,o.z),r}static isFrontFacing(t,e,n,s){return ai.subVectors(n,e),Li.subVectors(t,e),ai.cross(Li).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ai.cross(Li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return Qn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return Qn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;oo.subVectors(s,n),ro.subVectors(o,n),xl.subVectors(t,n);const c=oo.dot(xl),l=ro.dot(xl);if(c<=0&&l<=0)return e.copy(n);vl.subVectors(t,s);const u=oo.dot(vl),h=ro.dot(vl);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return r=c/(c-u),e.copy(n).addScaledVector(oo,r);Ml.subVectors(t,o);const p=oo.dot(Ml),g=ro.dot(Ml);if(g>=0&&p<=g)return e.copy(o);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ro,a);const f=u*g-p*h;if(f<=0&&h-u>=0&&p-g>=0)return Kf.subVectors(o,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(Kf,a);const m=1/(f+x+d);return r=x*m,a=d*m,e.copy(n).addScaledVector(oo,r).addScaledVector(ro,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Sl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=xg(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Sl(r,o,t+1/3),this.g=Sl(r,o,t),this.b=Sl(r,o,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=bn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=bn){const n=Wp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}copyLinearToSRGB(t){return this.r=Fo(t.r),this.g=Fo(t.g),this.b=Fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bn){return oe.fromWorkingColorSpace(Je.copy(this),t),Math.round($t(Je.r*255,0,255))*65536+Math.round($t(Je.g*255,0,255))*256+Math.round($t(Je.b*255,0,255))}getHexString(t=bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Je.copy(this),e);const n=Je.r,s=Je.g,o=Je.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let c,l;const u=(a+r)/2;if(a===r)c=0,l=0;else{const h=r-a;switch(l=u<=.5?h/(r+a):h/(2-r-a),r){case n:c=(s-o)/h+(s<o?6:0);break;case s:c=(o-n)/h+2;break;case o:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=bn){oe.fromWorkingColorSpace(Je.copy(this),t);const e=Je.r,n=Je.g,s=Je.b;return t!==bn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(_a);const n=rl(Ji.h,_a.h,e),s=rl(Ji.s,_a.s,e),o=rl(Ji.l,_a.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new ot;ot.NAMES=Wp;let Ng=0;class ds extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=No,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mu,this.blendDst=gu,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==No&&(n.blending=this.blending),this.side!==fs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mu&&(n.blendSrc=this.blendSrc),this.blendDst!==gu&&(n.blendDst=this.blendDst),this.blendEquation!==Ds&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Of&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $ extends ds{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Ep,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new N,ya=new ft;class Ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qu,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ya.fromBufferAttribute(this,e),ya.applyMatrix3(t),this.setXY(e,ya.x,ya.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_i(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_i(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_i(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),o=me(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qu&&(t.usage=this.usage),t}}class Xp extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class qp extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ht extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let zg=0;const qn=new fe,bl=new le,ao=new N,Dn=new Zs,pr=new Zs,ke=new N;class we extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gp(t)?qp:Xp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Wt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return bl.lookAt(t),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ht(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Dn.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(Dn.min,pr.min),Dn.expandByPoint(ke),ke.addVectors(Dn.max,pr.max),Dn.expandByPoint(ke)):(Dn.expandByPoint(pr.min),Dn.expandByPoint(pr.max))}Dn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)ke.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ke.fromBufferAttribute(a,l),c&&(ao.fromBufferAttribute(t,l),ke.add(ao)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let b=0;b<n.count;b++)a[b]=new N,c[b]=new N;const l=new N,u=new N,h=new N,d=new ft,p=new ft,g=new ft,x=new N,f=new N;function m(b,y,v){l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,v),d.fromBufferAttribute(o,b),p.fromBufferAttribute(o,y),g.fromBufferAttribute(o,v),u.sub(l),h.sub(l),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(R),f.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[b].add(x),a[y].add(x),a[v].add(x),c[b].add(f),c[y].add(f),c[v].add(f))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let b=0,y=w.length;b<y;++b){const v=w[b],R=v.start,U=v.count;for(let L=R,z=R+U;L<z;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const _=new N,M=new N,A=new N,E=new N;function T(b){A.fromBufferAttribute(s,b),E.copy(A);const y=a[b];_.copy(y),_.sub(A.multiplyScalar(A.dot(y))).normalize(),M.crossVectors(E,y);const R=M.dot(c[b])<0?-1:1;r.setXYZW(b,_.x,_.y,_.z,R)}for(let b=0,y=w.length;b<y;++b){const v=w[b],R=v.start,U=v.count;for(let L=R,z=R+U;L<z;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new N,o=new N,r=new N,a=new N,c=new N,l=new N,u=new N,h=new N;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),x=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,f),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,f),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let x=0,f=c.length;x<f;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*u;for(let m=0;m<u;m++)d[g++]=l[p++]}return new Ue(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const o=t.morphAttributes;for(const l in o){const u=[],h=o[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,u=r.length;l<u;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jf=new fe,vs=new nf,wa=new $s,Qf=new N,Sa=new N,ba=new N,Ta=new N,Tl=new N,Ea=new N,td=new N,Aa=new N;class I extends le{constructor(t=new we,e=new $){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Ea.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],h=o[c];u!==0&&(Tl.fromBufferAttribute(h,t),r?Ea.addScaledVector(Tl,u):Ea.addScaledVector(Tl.sub(e),u))}e.add(Ea)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(o),vs.copy(t.ray).recast(t.near),!(wa.containsPoint(vs.origin)===!1&&(vs.intersectSphere(wa,Qf)===null||vs.origin.distanceToSquared(Qf)>(t.far-t.near)**2))&&(Jf.copy(o).invert(),vs.copy(t.ray).applyMatrix4(Jf),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const f=d[g],m=r[f.materialIndex],w=Math.max(f.start,p.start),_=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let M=w,A=_;M<A;M+=3){const E=a.getX(M),T=a.getX(M+1),b=a.getX(M+2);s=Ra(this,m,t,n,l,u,h,E,T,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let f=g,m=x;f<m;f+=3){const w=a.getX(f),_=a.getX(f+1),M=a.getX(f+2);s=Ra(this,r,t,n,l,u,h,w,_,M),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const f=d[g],m=r[f.materialIndex],w=Math.max(f.start,p.start),_=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));for(let M=w,A=_;M<A;M+=3){const E=M,T=M+1,b=M+2;s=Ra(this,m,t,n,l,u,h,E,T,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let f=g,m=x;f<m;f+=3){const w=f,_=f+1,M=f+2;s=Ra(this,r,t,n,l,u,h,w,_,M),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function Fg(i,t,e,n,s,o,r,a){let c;if(t.side===Tn?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,t.side===fs,a),c===null)return null;Aa.copy(a),Aa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Aa);return l<e.near||l>e.far?null:{distance:l,point:Aa.clone(),object:i}}function Ra(i,t,e,n,s,o,r,a,c,l){i.getVertexPosition(a,Sa),i.getVertexPosition(c,ba),i.getVertexPosition(l,Ta);const u=Fg(i,t,e,n,Sa,ba,Ta,td);if(u){const h=new N;Qn.getBarycoord(td,Sa,ba,Ta,h),s&&(u.uv=Qn.getInterpolatedAttribute(s,a,c,l,h,new ft)),o&&(u.uv1=Qn.getInterpolatedAttribute(o,a,c,l,h,new ft)),r&&(u.normal=Qn.getInterpolatedAttribute(r,a,c,l,h,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new N,materialIndex:0};Qn.getNormal(Sa,ba,Ta,d.normal),u.face=d,u.barycoord=h}return u}class ia extends we{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(h,2));function g(x,f,m,w,_,M,A,E,T,b,y){const v=M/T,R=A/b,U=M/2,L=A/2,z=E/2,V=T+1,k=b+1;let K=0,W=0;const lt=new N;for(let pt=0;pt<k;pt++){const Rt=pt*R-L;for(let Ft=0;Ft<V;Ft++){const jt=Ft*v-U;lt[x]=jt*w,lt[f]=Rt*_,lt[m]=z,l.push(lt.x,lt.y,lt.z),lt[x]=0,lt[f]=0,lt[m]=E>0?1:-1,u.push(lt.x,lt.y,lt.z),h.push(Ft/T),h.push(1-pt/b),K+=1}}for(let pt=0;pt<b;pt++)for(let Rt=0;Rt<T;Rt++){const Ft=d+Rt+V*pt,jt=d+Rt+V*(pt+1),et=d+(Rt+1)+V*(pt+1),ut=d+(Rt+1)+V*pt;c.push(Ft,jt,ut),c.push(jt,et,ut),W+=6}a.addGroup(p,W,y),p+=W,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ia(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function tr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ln(i){const t={};for(let e=0;e<i.length;e++){const n=tr(i[e]);for(const s in n)t[s]=n[s]}return t}function Og(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yp(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const Ec={clone:tr,merge:ln};var Bg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends ds{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bg,this.fragmentShader=Gg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=tr(t.uniforms),this.uniformsGroups=Og(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zp extends le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new N,ed=new ft,nd=new ft;class Nn extends Zp{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=th*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ol*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return th*2*Math.atan(Math.tan(ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z)}getViewSize(t,e){return this.getViewBounds(t,ed,nd),e.subVectors(nd,ed)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ol*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const co=-90,lo=1;class kg extends le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Nn(co,lo,t,e);s.layers=this.layers,this.add(s);const o=new Nn(co,lo,t,e);o.layers=this.layers,this.add(o);const r=new Nn(co,lo,t,e);r.layers=this.layers,this.add(r);const a=new Nn(co,lo,t,e);a.layers=this.layers,this.add(a);const c=new Nn(co,lo,t,e);c.layers=this.layers,this.add(c);const l=new Nn(co,lo,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===bc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $p extends nn{constructor(t,e,n,s,o,r,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Zo,super(t,e,n,s,o,r,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hg extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new $p(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ia(5,5,5),o=new Rn({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:ki});o.uniforms.tEquirect.value=e;const r=new I(s,o),a=e.minFilter;return e.minFilter===zs&&(e.minFilter=wi),new kg(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}class sf{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(t),this.density=e}clone(){return new sf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Vg extends le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Wg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qu,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new N;class Ac{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_i(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_i(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_i(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_i(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),o=me(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ac(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class jp extends ds{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let uo;const mr=new N,ho=new N,fo=new N,po=new ft,gr=new ft,Kp=new fe,Ca=new N,xr=new N,Pa=new N,id=new ft,El=new ft,sd=new ft;class Xg extends le{constructor(t=new jp){if(super(),this.isSprite=!0,this.type="Sprite",uo===void 0){uo=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wg(e,5);uo.setIndex([0,1,2,0,2,3]),uo.setAttribute("position",new Ac(n,3,0,!1)),uo.setAttribute("uv",new Ac(n,2,3,!1))}this.geometry=uo,this.material=t,this.center=new ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ho.setFromMatrixScale(this.matrixWorld),Kp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ho.multiplyScalar(-fo.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;Ia(Ca.set(-.5,-.5,0),fo,r,ho,s,o),Ia(xr.set(.5,-.5,0),fo,r,ho,s,o),Ia(Pa.set(.5,.5,0),fo,r,ho,s,o),id.set(0,0),El.set(1,0),sd.set(1,1);let a=t.ray.intersectTriangle(Ca,xr,Pa,!1,mr);if(a===null&&(Ia(xr.set(-.5,.5,0),fo,r,ho,s,o),El.set(0,1),a=t.ray.intersectTriangle(Ca,Pa,xr,!1,mr),a===null))return;const c=t.ray.origin.distanceTo(mr);c<t.near||c>t.far||e.push({distance:c,point:mr.clone(),uv:Qn.getInterpolation(mr,Ca,xr,Pa,id,El,sd,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ia(i,t,e,n,s,o){po.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(gr.x=o*po.x-s*po.y,gr.y=s*po.x+o*po.y):gr.copy(po),i.copy(t),i.x+=gr.x,i.y+=gr.y,i.applyMatrix4(Kp)}class qg extends nn{constructor(t=null,e=1,n=1,s,o,r,a,c,l=kn,u=kn,h,d){super(null,r,a,c,l,u,s,o,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei extends Ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const mo=new fe,od=new fe,La=[],rd=new Zs,Yg=new fe,vr=new I,Mr=new $s;class ti extends I{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ei(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Yg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mo),rd.copy(t.boundingBox).applyMatrix4(mo),this.boundingBox.union(rd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $s),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,mo),Mr.copy(t.boundingSphere).applyMatrix4(mo),this.boundingSphere.union(Mr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(n),t.ray.intersectsSphere(Mr)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,mo),od.multiplyMatrices(n,mo),vr.matrixWorld=od,vr.raycast(t,La);for(let r=0,a=La.length;r<a;r++){const c=La[r];c.instanceId=o,c.object=this,e.push(c)}La.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ei(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new qg(new Float32Array(s*this.count),s,this.count,Jh,Si));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Al=new N,Zg=new N,$g=new Wt;class Ts{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Al.subVectors(n,e).cross(Zg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Al),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||$g.getNormalMatrix(t),s=this.coplanarPoint(Al).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new $s,Da=new N;class of{constructor(t=new Ts,e=new Ts,n=new Ts,s=new Ts,o=new Ts,r=new Ts){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bi){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],x=s[10],f=s[11],m=s[12],w=s[13],_=s[14],M=s[15];if(n[0].setComponents(c-o,d-l,f-p,M-m).normalize(),n[1].setComponents(c+o,d+l,f+p,M+m).normalize(),n[2].setComponents(c+r,d+u,f+g,M+w).normalize(),n[3].setComponents(c-r,d-u,f-g,M-w).normalize(),n[4].setComponents(c-a,d-h,f-x,M-_).normalize(),e===Bi)n[5].setComponents(c+a,d+h,f+x,M+_).normalize();else if(e===bc)n[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(t){return Ms.center.set(0,0,0),Ms.radius=.7071067811865476,Ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Da.x=s.normal.x>0?t.max.x:t.min.x,Da.y=s.normal.y>0?t.max.y:t.min.y,Da.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Da)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rf extends ds{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Rc=new N,Cc=new N,ad=new fe,_r=new nf,Ua=new $s,Rl=new N,cd=new N;class Jp extends le{constructor(t=new we,e=new rf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)Rc.fromBufferAttribute(e,s-1),Cc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Rc.distanceTo(Cc);t.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(s),Ua.radius+=o,t.ray.intersectsSphere(Ua)===!1)return;ad.copy(s).invert(),_r.copy(t.ray).applyMatrix4(ad);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let x=p,f=g-1;x<f;x+=l){const m=u.getX(x),w=u.getX(x+1),_=Na(this,t,_r,c,m,w);_&&e.push(_)}if(this.isLineLoop){const x=u.getX(g-1),f=u.getX(p),m=Na(this,t,_r,c,x,f);m&&e.push(m)}}else{const p=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let x=p,f=g-1;x<f;x+=l){const m=Na(this,t,_r,c,x,x+1);m&&e.push(m)}if(this.isLineLoop){const x=Na(this,t,_r,c,g-1,p);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Na(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(Rc.fromBufferAttribute(r,s),Cc.fromBufferAttribute(r,o),e.distanceSqToSegment(Rc,Cc,Rl,cd)>n)return;Rl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Rl);if(!(c<t.near||c>t.far))return{distance:c,point:cd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const ld=new N,ud=new N;class jg extends Jp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)ld.fromBufferAttribute(e,s),ud.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ld.distanceTo(ud);t.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class af extends ds{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const hd=new fe,eh=new nf,za=new $s,Fa=new N;class Qp extends le{constructor(t=new we,e=new af){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(s),za.radius+=o,t.ray.intersectsSphere(za)===!1)return;hd.copy(s).invert(),eh.copy(t.ray).applyMatrix4(hd);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let g=d,x=p;g<x;g++){const f=l.getX(g);Fa.fromBufferAttribute(h,f),fd(Fa,f,c,s,t,e,this)}}else{const d=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let g=d,x=p;g<x;g++)Fa.fromBufferAttribute(h,g),fd(Fa,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function fd(i,t,e,n,s,o,r){const a=eh.distanceSqToPoint(i);if(a<e){const c=new N;eh.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class re extends le{constructor(){super(),this.isGroup=!0,this.type="Group"}}class sa extends nn{constructor(t,e,n,s,o,r,a,c,l){super(t,e,n,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class t0 extends nn{constructor(t,e,n,s,o,r,a,c,l,u=zo){if(u!==zo&&u!==Jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===zo&&(n=Ws),n===void 0&&u===Jo&&(n=Ko),super(null,s,o,r,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:kn,this.minFilter=c!==void 0?c:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ai{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(o-1);const u=n[s],d=n[s+1]-u,p=(r-u)/d;return(s+p)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new ft:new N);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,s=[],o=[],r=[],a=new N,c=new fe;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new N)}o[0]=new N,r[0]=new N;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($t(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(c.makeRotationAxis(a,g))}r[p].crossVectors(s[p],o[p])}if(e===!0){let p=Math.acos($t(o[0].dot(o[t]),-1,1));p/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class cf extends Ai{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ft){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*u-p*h+this.aX,l=d*h+p*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Kg extends cf{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function lf(){let i=0,t=0,e=0,n=0;function s(o,r,a,c){i=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,u,h){let d=(r-o)/l-(a-o)/(l+u)+(a-r)/u,p=(a-r)/u-(c-r)/(u+h)+(c-a)/h;d*=u,p*=u,s(r,a,d,p)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Oa=new N,Cl=new lf,Pl=new lf,Il=new lf;class oa extends Ai{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%o]:(Oa.subVectors(s[0],s[1]).add(s[0]),l=Oa);const h=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?u=s[(a+2)%o]:(Oa.subVectors(s[o-1],s[o-2]).add(s[o-1]),u=Oa),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),f<1e-4&&(f=x),Cl.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,x,f),Pl.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,x,f),Il.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,x,f)}else this.curveType==="catmullrom"&&(Cl.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Pl.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Il.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Cl.calc(c),Pl.calc(c),Il.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function dd(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*i+e}function Jg(i,t){const e=1-i;return e*e*t}function Qg(i,t){return 2*(1-i)*i*t}function tx(i,t){return i*i*t}function Nr(i,t,e,n){return Jg(i,t)+Qg(i,e)+tx(i,n)}function ex(i,t){const e=1-i;return e*e*e*t}function nx(i,t){const e=1-i;return 3*e*e*i*t}function ix(i,t){return 3*(1-i)*i*i*t}function sx(i,t){return i*i*i*t}function zr(i,t,e,n,s){return ex(i,t)+nx(i,e)+ix(i,n)+sx(i,s)}class e0 extends Ai{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(zr(t,s.x,o.x,r.x,a.x),zr(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ox extends Ai{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(zr(t,s.x,o.x,r.x,a.x),zr(t,s.y,o.y,r.y,a.y),zr(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class n0 extends Ai{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uf extends Ai{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class i0 extends Ai{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Nr(t,s.x,o.x,r.x),Nr(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class s0 extends Ai{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Nr(t,s.x,o.x,r.x),Nr(t,s.y,o.y,r.y),Nr(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class o0 extends Ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],u=s[r>s.length-2?s.length-1:r+1],h=s[r>s.length-3?s.length-1:r+2];return n.set(dd(a,c.x,l.x,u.x,h.x),dd(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ft().fromArray(s))}return this}}var nh=Object.freeze({__proto__:null,ArcCurve:Kg,CatmullRomCurve3:oa,CubicBezierCurve:e0,CubicBezierCurve3:ox,EllipseCurve:cf,LineCurve:n0,LineCurve3:uf,QuadraticBezierCurve:i0,QuadraticBezierCurve3:s0,SplineCurve:o0});class rx extends Ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new nh[s.type]().fromJSON(s))}return this}}class Pc extends rx{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new n0(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new i0(this.currentPoint.clone(),new ft(t,e),new ft(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new e0(this.currentPoint.clone(),new ft(t,e),new ft(n,s),new ft(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new o0(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,o,r,a,c),this}absellipse(t,e,n,s,o,r,a,c){const l=new cf(t,e,n,s,o,r,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $e extends we{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new N,u=new ft;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const p=n+h/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),r.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(r[d]/t+1)/2,u.y=(r[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new Ht(r,3)),this.setAttribute("normal",new Ht(a,3)),this.setAttribute("uv",new Ht(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class _t extends we{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const u=[],h=[],d=[],p=[];let g=0;const x=[],f=n/2;let m=0;w(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Ht(h,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(p,2));function w(){const M=new N,A=new N;let E=0;const T=(e-t)/n;for(let b=0;b<=o;b++){const y=[],v=b/o,R=v*(e-t)+t;for(let U=0;U<=s;U++){const L=U/s,z=L*c+a,V=Math.sin(z),k=Math.cos(z);A.x=R*V,A.y=-v*n+f,A.z=R*k,h.push(A.x,A.y,A.z),M.set(V,T,k).normalize(),d.push(M.x,M.y,M.z),p.push(L,1-v),y.push(g++)}x.push(y)}for(let b=0;b<s;b++)for(let y=0;y<o;y++){const v=x[y][b],R=x[y+1][b],U=x[y+1][b+1],L=x[y][b+1];(t>0||y!==0)&&(u.push(v,R,L),E+=3),(e>0||y!==o-1)&&(u.push(R,U,L),E+=3)}l.addGroup(m,E,0),m+=E}function _(M){const A=g,E=new ft,T=new N;let b=0;const y=M===!0?t:e,v=M===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,f*v,0),d.push(0,v,0),p.push(.5,.5),g++;const R=g;for(let U=0;U<=s;U++){const z=U/s*c+a,V=Math.cos(z),k=Math.sin(z);T.x=y*k,T.y=f*v,T.z=y*V,h.push(T.x,T.y,T.z),d.push(0,v,0),E.x=V*.5+.5,E.y=k*.5*v+.5,p.push(E.x,E.y),g++}for(let U=0;U<s;U++){const L=A+U,z=R+U;M===!0?u.push(z,z+1,L):u.push(z+1,z,L),b+=3}l.addGroup(m,b,M===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _t(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ei extends _t{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new ei(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ra extends we{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),l(n),u(),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(o.slice(),3)),this.setAttribute("uv",new Ht(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const _=new N,M=new N,A=new N;for(let E=0;E<e.length;E+=3)p(e[E+0],_),p(e[E+1],M),p(e[E+2],A),c(_,M,A,w)}function c(w,_,M,A){const E=A+1,T=[];for(let b=0;b<=E;b++){T[b]=[];const y=w.clone().lerp(M,b/E),v=_.clone().lerp(M,b/E),R=E-b;for(let U=0;U<=R;U++)U===0&&b===E?T[b][U]=y:T[b][U]=y.clone().lerp(v,U/R)}for(let b=0;b<E;b++)for(let y=0;y<2*(E-b)-1;y++){const v=Math.floor(y/2);y%2===0?(d(T[b][v+1]),d(T[b+1][v]),d(T[b][v])):(d(T[b][v+1]),d(T[b+1][v+1]),d(T[b+1][v]))}}function l(w){const _=new N;for(let M=0;M<o.length;M+=3)_.x=o[M+0],_.y=o[M+1],_.z=o[M+2],_.normalize().multiplyScalar(w),o[M+0]=_.x,o[M+1]=_.y,o[M+2]=_.z}function u(){const w=new N;for(let _=0;_<o.length;_+=3){w.x=o[_+0],w.y=o[_+1],w.z=o[_+2];const M=f(w)/2/Math.PI+.5,A=m(w)/Math.PI+.5;r.push(M,1-A)}g(),h()}function h(){for(let w=0;w<r.length;w+=6){const _=r[w+0],M=r[w+2],A=r[w+4],E=Math.max(_,M,A),T=Math.min(_,M,A);E>.9&&T<.1&&(_<.2&&(r[w+0]+=1),M<.2&&(r[w+2]+=1),A<.2&&(r[w+4]+=1))}}function d(w){o.push(w.x,w.y,w.z)}function p(w,_){const M=w*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function g(){const w=new N,_=new N,M=new N,A=new N,E=new ft,T=new ft,b=new ft;for(let y=0,v=0;y<o.length;y+=9,v+=6){w.set(o[y+0],o[y+1],o[y+2]),_.set(o[y+3],o[y+4],o[y+5]),M.set(o[y+6],o[y+7],o[y+8]),E.set(r[v+0],r[v+1]),T.set(r[v+2],r[v+3]),b.set(r[v+4],r[v+5]),A.copy(w).add(_).add(M).divideScalar(3);const R=f(A);x(E,v+0,w,R),x(T,v+2,_,R),x(b,v+4,M,R)}}function x(w,_,M,A){A<0&&w.x===1&&(r[_]=w.x-1),M.x===0&&M.z===0&&(r[_]=A/2/Math.PI+.5)}function f(w){return Math.atan2(w.z,-w.x)}function m(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.vertices,t.indices,t.radius,t.details)}}class hf extends ra{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hf(t.radius,t.detail)}}class Ic extends Pc{constructor(t){super(t),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Pc().fromJSON(s))}return this}}const ax={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=r0(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,u,h,d,p;if(n&&(o=fx(i,t,o,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],d=i[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);p=Math.max(l-a,u-c),p=p!==0?32767/p:0}return Xr(o,r,e,a,c,p,0),r}};function r0(i,t,e,n,s){let o,r;if(s===Sx(i,t,e,n)>0)for(o=t;o<e;o+=n)r=pd(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=pd(o,i[o],i[o+1],r);return r&&jc(r,r.next)&&(Yr(r),r=r.next),r}function Xs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(jc(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Yr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xr(i,t,e,n,s,o,r){if(!i)return;!r&&o&&xx(i,n,s,o);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,o?lx(i,n,s,o):cx(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Yr(i),i=l.next,a=l.next;continue}if(i=l,i===a){r?r===1?(i=ux(Xs(i),t,e),Xr(i,t,e,n,s,o,2)):r===2&&hx(i,t,e,n,s,o):Xr(Xs(i),t,e,n,s,o,1);break}}}function cx(i){const t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,u=s<o?s<r?s:r:o<r?o:r,h=a<c?a<l?a:l:c<l?c:l,d=s>o?s>r?s:r:o>r?o:r,p=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&Co(s,a,o,c,r,l,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function lx(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Ce(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,u=s.y,h=o.y,d=r.y,p=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,x=a>c?a>l?a:l:c>l?c:l,f=u>h?u>d?u:d:h>d?h:d,m=ih(p,g,t,e,n),w=ih(x,f,t,e,n);let _=i.prevZ,M=i.nextZ;for(;_&&_.z>=m&&M&&M.z<=w;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=f&&_!==s&&_!==r&&Co(a,u,c,h,l,d,_.x,_.y)&&Ce(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=p&&M.x<=x&&M.y>=g&&M.y<=f&&M!==s&&M!==r&&Co(a,u,c,h,l,d,M.x,M.y)&&Ce(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=m;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=f&&_!==s&&_!==r&&Co(a,u,c,h,l,d,_.x,_.y)&&Ce(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=w;){if(M.x>=p&&M.x<=x&&M.y>=g&&M.y<=f&&M!==s&&M!==r&&Co(a,u,c,h,l,d,M.x,M.y)&&Ce(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function ux(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!jc(s,o)&&a0(s,n,n.next,o)&&qr(s,o)&&qr(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Yr(n),Yr(n.next),n=i=o),n=n.next}while(n!==i);return Xs(n)}function hx(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&_x(r,a)){let c=c0(r,a);r=Xs(r,r.next),c=Xs(c,c.next),Xr(r,t,e,n,s,o,0),Xr(c,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function fx(i,t,e,n){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:i.length,l=r0(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Mx(l));for(s.sort(dx),o=0;o<s.length;o++)e=px(s[o],e);return e}function dx(i,t){return i.x-t.x}function px(i,t){const e=mx(i,t);if(!e)return t;const n=c0(e,i);return Xs(n,n.next),Xs(e,e.next)}function mx(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&Co(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(h=Math.abs(r-e.y)/(o-e.x),qr(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&gx(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function gx(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function xx(i,t,e,n){let s=i;do s.z===0&&(s.z=ih(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,vx(s)}function vx(i){let t,e,n,s,o,r,a,c,l=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,l*=2}while(r>1);return i}function ih(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Mx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Co(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function _x(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!yx(i,t)&&(qr(i,t)&&qr(t,i)&&wx(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||jc(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function jc(i,t){return i.x===t.x&&i.y===t.y}function a0(i,t,e,n){const s=Ga(Ce(i,t,e)),o=Ga(Ce(i,t,n)),r=Ga(Ce(e,n,i)),a=Ga(Ce(e,n,t));return!!(s!==o&&r!==a||s===0&&Ba(i,e,t)||o===0&&Ba(i,n,t)||r===0&&Ba(e,i,n)||a===0&&Ba(e,t,n))}function Ba(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ga(i){return i>0?1:i<0?-1:0}function yx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&a0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function qr(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function wx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function c0(i,t){const e=new sh(i.i,i.x,i.y),n=new sh(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function pd(i,t,e,n){const s=new sh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Yr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function sh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Sx(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Fr{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Fr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];md(t),gd(n,t);let r=t.length;e.forEach(md);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,gd(n,e[c]);const a=ax.triangulate(n,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function md(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function gd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Gs extends ra{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Gs(t.radius,t.detail)}}class ff extends ra{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ff(t.radius,t.detail)}}class ve extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,p=[],g=[],x=[],f=[];for(let m=0;m<u;m++){const w=m*d-r;for(let _=0;_<l;_++){const M=_*h-o;g.push(M,-w,0),x.push(0,0,1),f.push(_/a),f.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<a;w++){const _=w+l*m,M=w+l*(m+1),A=w+1+l*(m+1),E=w+1+l*m;p.push(_,M,E),p.push(M,A,E)}this.setIndex(p),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.width,t.height,t.widthSegments,t.heightSegments)}}class er extends we{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const d=(e-t)/s,p=new N,g=new ft;for(let x=0;x<=s;x++){for(let f=0;f<=n;f++){const m=o+f/n*r;p.x=h*Math.cos(m),p.y=h*Math.sin(m),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<s;x++){const f=x*(n+1);for(let m=0;m<n;m++){const w=m+f,_=w,M=w+n+1,A=w+n+2,E=w+1;a.push(_,M,E),a.push(M,A,E)}}this.setIndex(a),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Zr extends we{constructor(t=new Ic([new ft(0,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ht(s,3)),this.setAttribute("normal",new Ht(o,3)),this.setAttribute("uv",new Ht(r,2));function l(u){const h=s.length/3,d=u.extractPoints(e);let p=d.shape;const g=d.holes;Fr.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,m=g.length;f<m;f++){const w=g[f];Fr.isClockWise(w)===!0&&(g[f]=w.reverse())}const x=Fr.triangulateShape(p,g);for(let f=0,m=g.length;f<m;f++){const w=g[f];p=p.concat(w)}for(let f=0,m=p.length;f<m;f++){const w=p[f];s.push(w.x,w.y,0),o.push(0,0,1),r.push(w.x,w.y)}for(let f=0,m=x.length;f<m;f++){const w=x[f],_=w[0]+h,M=w[1]+h,A=w[2]+h;n.push(_,M,A),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return bx(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new Zr(n,t.curveSegments)}}function bx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Q extends we{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const u=[],h=new N,d=new N,p=[],g=[],x=[],f=[];for(let m=0;m<=n;m++){const w=[],_=m/n;let M=0;m===0&&r===0?M=.5/e:m===n&&c===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const E=A/e;h.x=-t*Math.cos(s+E*o)*Math.sin(r+_*a),h.y=t*Math.cos(r+_*a),h.z=t*Math.sin(s+E*o)*Math.sin(r+_*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),f.push(E+M,1-_),w.push(l++)}u.push(w)}for(let m=0;m<n;m++)for(let w=0;w<e;w++){const _=u[m][w+1],M=u[m][w],A=u[m+1][w],E=u[m+1][w+1];(m!==0||r>0)&&p.push(_,M,E),(m!==n-1||c<Math.PI)&&p.push(M,A,E)}this.setIndex(p),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Q(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ae extends we{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],c=[],l=[],u=new N,h=new N,d=new N;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const x=g/s*o,f=p/n*Math.PI*2;h.x=(t+e*Math.cos(f))*Math.cos(x),h.y=(t+e*Math.cos(f))*Math.sin(x),h.z=e*Math.sin(f),a.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const x=(s+1)*p+g-1,f=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,w=(s+1)*p+g;r.push(x,f,w),r.push(f,m,w)}this.setIndex(r),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class An extends we{constructor(t=new s0(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new N,c=new N,l=new ft;let u=new N;const h=[],d=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Ht(h,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(p,2));function x(){for(let _=0;_<e;_++)f(_);f(o===!1?e:0),w(),m()}function f(_){u=t.getPointAt(_/e,u);const M=r.normals[_],A=r.binormals[_];for(let E=0;E<=s;E++){const T=E/s*Math.PI*2,b=Math.sin(T),y=-Math.cos(T);c.x=y*M.x+b*A.x,c.y=y*M.y+b*A.y,c.z=y*M.z+b*A.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function m(){for(let _=1;_<=e;_++)for(let M=1;M<=s;M++){const A=(s+1)*(_-1)+(M-1),E=(s+1)*_+(M-1),T=(s+1)*_+M,b=(s+1)*(_-1)+M;g.push(A,E,b),g.push(E,T,b)}}function w(){for(let _=0;_<=e;_++)for(let M=0;M<=s;M++)l.x=_/e,l.y=M/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new An(new nh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class J extends ds{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Op,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Tx extends ds{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ag,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ex extends ds{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class df extends le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ax extends df{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ll=new fe,xd=new N,vd=new N;class l0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new of,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;xd.setFromMatrixPosition(t.matrixWorld),e.position.copy(xd),vd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vd),e.updateMatrixWorld(),Ll.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ll)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Md=new fe,yr=new N,Dl=new N;class Rx extends l0{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),yr.setFromMatrixPosition(t.matrixWorld),n.position.copy(yr),Dl.copy(n.position),Dl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Dl),n.updateMatrixWorld(),s.makeTranslation(-yr.x,-yr.y,-yr.z),Md.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Md)}}class ar extends df{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Rx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class pf extends Zp{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Cx extends l0{constructor(){super(new pf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kc extends df{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.shadow=new Cx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Px extends Nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class u0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_d(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=_d();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function _d(){return performance.now()}function yd(i,t,e,n){const s=Ix(n);switch(e){case Lp:return i*t;case Up:return i*t;case Np:return i*t*2;case Jh:return i*t/s.components*s.byteLength;case Qh:return i*t/s.components*s.byteLength;case zp:return i*t*2/s.components*s.byteLength;case tf:return i*t*2/s.components*s.byteLength;case Dp:return i*t*3/s.components*s.byteLength;case li:return i*t*4/s.components*s.byteLength;case ef:return i*t*4/s.components*s.byteLength;case oc:case rc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ac:case cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ru:case Pu:return Math.max(i,16)*Math.max(t,8)/4;case Au:case Cu:return Math.max(i,8)*Math.max(t,8)/2;case Iu:case Lu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Du:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nu:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case zu:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fu:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ou:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bu:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Gu:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ku:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Hu:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Vu:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wu:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xu:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case qu:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Yu:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case lc:case Zu:case $u:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Fp:case ju:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ku:case Ju:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ix(i){switch(i){case qi:case Cp:return{byteLength:1,components:1};case Wr:case Pp:case Hi:return{byteLength:2,components:1};case jh:case Kh:return{byteLength:2,components:4};case Ws:case $h:case Si:return{byteLength:4,components:1};case Ip:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function h0(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Lx(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}var Dx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ux=`#ifdef USE_ALPHAHASH
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
#endif`,Nx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ox=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bx=`#ifdef USE_AOMAP
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
#endif`,Gx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kx=`#ifdef USE_BATCHING
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
#endif`,Hx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qx=`#ifdef USE_IRIDESCENCE
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
#endif`,Yx=`#ifdef USE_BUMPMAP
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
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ev=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nv=`#define PI 3.141592653589793
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
} // validated`,iv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sv=`vec3 transformedNormal = objectNormal;
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
#endif`,ov=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,av=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lv="gl_FragColor = linearToOutputTexel( gl_FragColor );",uv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hv=`#ifdef USE_ENVMAP
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
#endif`,fv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dv=`#ifdef USE_ENVMAP
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
#endif`,pv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mv=`#ifdef USE_ENVMAP
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
#endif`,gv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_v=`#ifdef USE_GRADIENTMAP
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
}`,yv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bv=`uniform bool receiveShadow;
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
#endif`,Tv=`#ifdef USE_ENVMAP
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
#endif`,Ev=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pv=`PhysicalMaterial material;
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
#endif`,Iv=`struct PhysicalMaterial {
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
}`,Lv=`
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
#endif`,Dv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ov=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hv=`#if defined( USE_POINTS_UV )
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
#endif`,Vv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zv=`#ifdef USE_MORPHTARGETS
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
#endif`,$v=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eM=`#ifdef USE_NORMALMAP
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
#endif`,nM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xM=`float getShadowMask() {
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
}`,vM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MM=`#ifdef USE_SKINNING
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
#endif`,_M=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yM=`#ifdef USE_SKINNING
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
#endif`,wM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,EM=`#ifdef USE_TRANSMISSION
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
#endif`,AM=`#ifdef USE_TRANSMISSION
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
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DM=`uniform sampler2D t2D;
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
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`#include <common>
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
}`,BM=`#if DEPTH_PACKING == 3200
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
}`,GM=`#define DISTANCE
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
}`,kM=`#define DISTANCE
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
}`,HM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WM=`uniform float scale;
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
}`,XM=`uniform vec3 diffuse;
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
}`,qM=`#include <common>
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
}`,YM=`uniform vec3 diffuse;
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
}`,ZM=`#define LAMBERT
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
}`,$M=`#define LAMBERT
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
}`,jM=`#define MATCAP
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
}`,KM=`#define MATCAP
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
}`,JM=`#define NORMAL
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
}`,QM=`#define NORMAL
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
}`,t_=`#define PHONG
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
}`,e_=`#define PHONG
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
}`,n_=`#define STANDARD
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
}`,i_=`#define STANDARD
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
}`,s_=`#define TOON
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
}`,o_=`#define TOON
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
}`,r_=`uniform float size;
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
}`,a_=`uniform vec3 diffuse;
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
}`,c_=`#include <common>
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
}`,l_=`uniform vec3 color;
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
}`,u_=`uniform float rotation;
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
}`,h_=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Dx,alphahash_pars_fragment:Ux,alphamap_fragment:Nx,alphamap_pars_fragment:zx,alphatest_fragment:Fx,alphatest_pars_fragment:Ox,aomap_fragment:Bx,aomap_pars_fragment:Gx,batching_pars_vertex:kx,batching_vertex:Hx,begin_vertex:Vx,beginnormal_vertex:Wx,bsdfs:Xx,iridescence_fragment:qx,bumpmap_pars_fragment:Yx,clipping_planes_fragment:Zx,clipping_planes_pars_fragment:$x,clipping_planes_pars_vertex:jx,clipping_planes_vertex:Kx,color_fragment:Jx,color_pars_fragment:Qx,color_pars_vertex:tv,color_vertex:ev,common:nv,cube_uv_reflection_fragment:iv,defaultnormal_vertex:sv,displacementmap_pars_vertex:ov,displacementmap_vertex:rv,emissivemap_fragment:av,emissivemap_pars_fragment:cv,colorspace_fragment:lv,colorspace_pars_fragment:uv,envmap_fragment:hv,envmap_common_pars_fragment:fv,envmap_pars_fragment:dv,envmap_pars_vertex:pv,envmap_physical_pars_fragment:Tv,envmap_vertex:mv,fog_vertex:gv,fog_pars_vertex:xv,fog_fragment:vv,fog_pars_fragment:Mv,gradientmap_pars_fragment:_v,lightmap_pars_fragment:yv,lights_lambert_fragment:wv,lights_lambert_pars_fragment:Sv,lights_pars_begin:bv,lights_toon_fragment:Ev,lights_toon_pars_fragment:Av,lights_phong_fragment:Rv,lights_phong_pars_fragment:Cv,lights_physical_fragment:Pv,lights_physical_pars_fragment:Iv,lights_fragment_begin:Lv,lights_fragment_maps:Dv,lights_fragment_end:Uv,logdepthbuf_fragment:Nv,logdepthbuf_pars_fragment:zv,logdepthbuf_pars_vertex:Fv,logdepthbuf_vertex:Ov,map_fragment:Bv,map_pars_fragment:Gv,map_particle_fragment:kv,map_particle_pars_fragment:Hv,metalnessmap_fragment:Vv,metalnessmap_pars_fragment:Wv,morphinstance_vertex:Xv,morphcolor_vertex:qv,morphnormal_vertex:Yv,morphtarget_pars_vertex:Zv,morphtarget_vertex:$v,normal_fragment_begin:jv,normal_fragment_maps:Kv,normal_pars_fragment:Jv,normal_pars_vertex:Qv,normal_vertex:tM,normalmap_pars_fragment:eM,clearcoat_normal_fragment_begin:nM,clearcoat_normal_fragment_maps:iM,clearcoat_pars_fragment:sM,iridescence_pars_fragment:oM,opaque_fragment:rM,packing:aM,premultiplied_alpha_fragment:cM,project_vertex:lM,dithering_fragment:uM,dithering_pars_fragment:hM,roughnessmap_fragment:fM,roughnessmap_pars_fragment:dM,shadowmap_pars_fragment:pM,shadowmap_pars_vertex:mM,shadowmap_vertex:gM,shadowmask_pars_fragment:xM,skinbase_vertex:vM,skinning_pars_vertex:MM,skinning_vertex:_M,skinnormal_vertex:yM,specularmap_fragment:wM,specularmap_pars_fragment:SM,tonemapping_fragment:bM,tonemapping_pars_fragment:TM,transmission_fragment:EM,transmission_pars_fragment:AM,uv_pars_fragment:RM,uv_pars_vertex:CM,uv_vertex:PM,worldpos_vertex:IM,background_vert:LM,background_frag:DM,backgroundCube_vert:UM,backgroundCube_frag:NM,cube_vert:zM,cube_frag:FM,depth_vert:OM,depth_frag:BM,distanceRGBA_vert:GM,distanceRGBA_frag:kM,equirect_vert:HM,equirect_frag:VM,linedashed_vert:WM,linedashed_frag:XM,meshbasic_vert:qM,meshbasic_frag:YM,meshlambert_vert:ZM,meshlambert_frag:$M,meshmatcap_vert:jM,meshmatcap_frag:KM,meshnormal_vert:JM,meshnormal_frag:QM,meshphong_vert:t_,meshphong_frag:e_,meshphysical_vert:n_,meshphysical_frag:i_,meshtoon_vert:s_,meshtoon_frag:o_,points_vert:r_,points_frag:a_,shadow_vert:c_,shadow_frag:l_,sprite_vert:u_,sprite_frag:h_},mt={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},xi={basic:{uniforms:ln([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:ln([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ot(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:ln([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:ln([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:ln([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new ot(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:ln([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:ln([mt.points,mt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:ln([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:ln([mt.common,mt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:ln([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:ln([mt.sprite,mt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:ln([mt.common,mt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:ln([mt.lights,mt.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};xi.physical={uniforms:ln([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const ka={r:0,b:0,g:0},_s=new Ti,f_=new fe;function d_(i,t,e,n,s,o,r){const a=new ot(0);let c=o===!0?0:1,l,u,h=null,d=0,p=null;function g(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?e:t).get(M)),M}function x(_){let M=!1;const A=g(_);A===null?m(a,c):A&&A.isColor&&(m(A,1),M=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(_,M){const A=g(M);A&&(A.isCubeTexture||A.mapping===$c)?(u===void 0&&(u=new I(new ia(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:tr(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),_s.copy(M.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(f_.makeRotationFromEuler(_s)),u.material.toneMapped=oe.getTransfer(A.colorSpace)!==pe,(h!==A||d!==A.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,p=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new I(new ve(2,2),new Rn({name:"BackgroundMaterial",uniforms:tr(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=oe.getTransfer(A.colorSpace)!==pe,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=A,d=A.version,p=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,M){_.getRGB(ka,Yp(i)),n.buffers.color.setClear(ka.r,ka.g,ka.b,M,r)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),c=M,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,m(a,c)},render:x,addToRenderList:f,dispose:w}}function p_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(v,R,U,L,z){let V=!1;const k=h(L,U,R);o!==k&&(o=k,l(o.object)),V=p(v,L,U,z),V&&g(v,L,U,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,M(v,R,U,L),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,R,U){const L=U.wireframe===!0;let z=n[v.id];z===void 0&&(z={},n[v.id]=z);let V=z[R.id];V===void 0&&(V={},z[R.id]=V);let k=V[L];return k===void 0&&(k=d(c()),V[L]=k),k}function d(v){const R=[],U=[],L=[];for(let z=0;z<e;z++)R[z]=0,U[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:L,object:v,attributes:{},index:null}}function p(v,R,U,L){const z=o.attributes,V=R.attributes;let k=0;const K=U.getAttributes();for(const W in K)if(K[W].location>=0){const pt=z[W];let Rt=V[W];if(Rt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(Rt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(Rt=v.instanceColor)),pt===void 0||pt.attribute!==Rt||Rt&&pt.data!==Rt.data)return!0;k++}return o.attributesNum!==k||o.index!==L}function g(v,R,U,L){const z={},V=R.attributes;let k=0;const K=U.getAttributes();for(const W in K)if(K[W].location>=0){let pt=V[W];pt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor));const Rt={};Rt.attribute=pt,pt&&pt.data&&(Rt.data=pt.data),z[W]=Rt,k++}o.attributes=z,o.attributesNum=k,o.index=L}function x(){const v=o.newAttributes;for(let R=0,U=v.length;R<U;R++)v[R]=0}function f(v){m(v,0)}function m(v,R){const U=o.newAttributes,L=o.enabledAttributes,z=o.attributeDivisors;U[v]=1,L[v]===0&&(i.enableVertexAttribArray(v),L[v]=1),z[v]!==R&&(i.vertexAttribDivisor(v,R),z[v]=R)}function w(){const v=o.newAttributes,R=o.enabledAttributes;for(let U=0,L=R.length;U<L;U++)R[U]!==v[U]&&(i.disableVertexAttribArray(U),R[U]=0)}function _(v,R,U,L,z,V,k){k===!0?i.vertexAttribIPointer(v,R,U,z,V):i.vertexAttribPointer(v,R,U,L,z,V)}function M(v,R,U,L){x();const z=L.attributes,V=U.getAttributes(),k=R.defaultAttributeValues;for(const K in V){const W=V[K];if(W.location>=0){let lt=z[K];if(lt===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(lt=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(lt=v.instanceColor)),lt!==void 0){const pt=lt.normalized,Rt=lt.itemSize,Ft=t.get(lt);if(Ft===void 0)continue;const jt=Ft.buffer,et=Ft.type,ut=Ft.bytesPerElement,wt=et===i.INT||et===i.UNSIGNED_INT||lt.gpuType===$h;if(lt.isInterleavedBufferAttribute){const dt=lt.data,zt=dt.stride,Gt=lt.offset;if(dt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<W.locationSize;Zt++)m(W.location+Zt,dt.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Zt=0;Zt<W.locationSize;Zt++)f(W.location+Zt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Zt=0;Zt<W.locationSize;Zt++)_(W.location+Zt,Rt/W.locationSize,et,pt,zt*ut,(Gt+Rt/W.locationSize*Zt)*ut,wt)}else{if(lt.isInstancedBufferAttribute){for(let dt=0;dt<W.locationSize;dt++)m(W.location+dt,lt.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let dt=0;dt<W.locationSize;dt++)f(W.location+dt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let dt=0;dt<W.locationSize;dt++)_(W.location+dt,Rt/W.locationSize,et,pt,Rt*ut,Rt/W.locationSize*dt*ut,wt)}}else if(k!==void 0){const pt=k[K];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(W.location,pt);break;case 3:i.vertexAttrib3fv(W.location,pt);break;case 4:i.vertexAttrib4fv(W.location,pt);break;default:i.vertexAttrib1fv(W.location,pt)}}}}w()}function A(){b();for(const v in n){const R=n[v];for(const U in R){const L=R[U];for(const z in L)u(L[z].object),delete L[z];delete R[U]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const U in R){const L=R[U];for(const z in L)u(L[z].object),delete L[z];delete R[U]}delete n[v.id]}function T(v){for(const R in n){const U=n[R];if(U[v.id]===void 0)continue;const L=U[v.id];for(const z in L)u(L[z].object),delete L[z];delete U[v.id]}}function b(){y(),r=!0,o!==s&&(o=s,l(o.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:f,disableUnusedAttributes:w}}function m_(i,t,e){let n;function s(l){n=l}function o(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function r(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function c(l,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)r(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function g_(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==li&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===Hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==qi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Si&&!b)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:w,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:A,maxSamples:E}}function x_(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new Ts,a=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,x=h.clipIntersection,f=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||o&&!f)o?u(null):l();else{const w=o?0:n,_=w*4;let M=m.clippingState||null;c.value=M,M=u(g,d,_,p);for(let A=0;A!==_;++A)M[A]=e[A];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,g){const x=h!==null?h.length:0;let f=null;if(x!==0){if(f=c.value,g!==!0||f===null){const m=p+x*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(f===null||f.length<m)&&(f=new Float32Array(m));for(let _=0,M=p;_!==x;++_,M+=4)r.copy(h[_]).applyMatrix4(w,a),r.normal.toArray(f,M),f[M+3]=r.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}function v_(i){let t=new WeakMap;function e(r,a){return a===bu?r.mapping=Zo:a===Tu&&(r.mapping=$o),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===bu||a===Tu)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Hg(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const Po=4,wd=[.125,.215,.35,.446,.526,.582],Us=20,Ul=new pf,Sd=new ot;let Nl=null,zl=0,Fl=0,Ol=!1;const Es=(1+Math.sqrt(5))/2,go=1/Es,bd=[new N(-Es,go,0),new N(Es,go,0),new N(-go,0,Es),new N(go,0,Es),new N(0,Es,-go),new N(0,Es,go),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Td{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Nl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Nl,zl,Fl),this._renderer.xr.enabled=Ol,t.scissorTest=!1,Ha(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zo||t.mapping===$o?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:Hi,format:li,colorSpace:Qo,depthBuffer:!1},s=Ed(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ed(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=M_(o)),this._blurMaterial=__(o,t,e)}return s}_compileMaterial(t){const e=new I(this._lodPlanes[0],t);this._renderer.compile(e,Ul)}_sceneToCubeUV(t,e,n,s){const a=new Nn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Sd),u.toneMapping=hs,u.autoClear=!1;const p=new $({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new I(new ia,p);let x=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,x=!0):(p.color.copy(Sd),x=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):w===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const _=this._cubeSize;Ha(s,w*_,m>2?_:0,_,_),u.setRenderTarget(s),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Zo||t.mapping===$o;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ad());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new I(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;Ha(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,Ul)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=bd[(s-o-1)%bd.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new I(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Us-1),x=o/g,f=isFinite(o)?1+Math.floor(u*x):Us;f>Us&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Us}`);const m=[];let w=0;for(let T=0;T<Us;++T){const b=T/x,y=Math.exp(-b*b/2);m.push(y),T===0?w+=y:T<f&&(w+=2*y)}for(let T=0;T<m.length;T++)m[T]=m[T]/w;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const M=this._sizeLods[s],A=3*M*(s>_-Po?s-_+Po:0),E=4*(this._cubeSize-M);Ha(e,A,E,3*M,2*M),c.setRenderTarget(e),c.render(h,Ul)}}function M_(i){const t=[],e=[],n=[];let s=i;const o=i-Po+1+wd.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>i-Po?c=wd[r-i+Po-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,f=2,m=1,w=new Float32Array(x*g*p),_=new Float32Array(f*g*p),M=new Float32Array(m*g*p);for(let E=0;E<p;E++){const T=E%3*2/3-1,b=E>2?0:-1,y=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];w.set(y,x*g*E),_.set(d,f*g*E);const v=[E,E,E,E,E,E];M.set(v,m*g*E)}const A=new we;A.setAttribute("position",new Ue(w,x)),A.setAttribute("uv",new Ue(_,f)),A.setAttribute("faceIndex",new Ue(M,m)),t.push(A),s>Po&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ed(i,t,e){const n=new ui(i,t,e);return n.texture.mapping=$c,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ha(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function __(i,t,e){const n=new Float32Array(Us),s=new N(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mf(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Ad(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mf(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Rd(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function mf(){return`

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
	`}function y_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===bu||c===Tu,u=c===Zo||c===$o;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Td(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Td(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function w_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&So("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function S_(i,t,e,n){const s={},o=new WeakMap;function r(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete s[d.id];const p=o.get(d);p&&(t.remove(p),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const w=p.array;x=p.version;for(let _=0,M=w.length;_<M;_+=3){const A=w[_+0],E=w[_+1],T=w[_+2];d.push(A,E,E,T,T,A)}}else if(g!==void 0){const w=g.array;x=g.version;for(let _=0,M=w.length/3-1;_<M;_+=3){const A=_+0,E=_+1,T=_+2;d.push(A,E,E,T,T,A)}}else return;const f=new(Gp(d)?qp:Xp)(d,1);f.version=x;const m=o.get(h);m&&t.remove(m),o.set(h,f)}function u(h){const d=o.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return o.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function b_(i,t,e){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,p){i.drawElements(n,p,o,d*r),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,o,d*r,g),e.update(p,n,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,d,0,g);let f=0;for(let m=0;m<g;m++)f+=p[m];e.update(f,n,1)}function h(d,p,g,x){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)l(d[m]/r,p[m],x[m]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,o,d,0,x,0,g);let m=0;for(let w=0;w<g;w++)m+=p[w]*x[w];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function T_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function E_(i,t,e){const n=new WeakMap,s=new ge;function o(r,a,c){const l=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let v=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var p=v;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),f===!0&&(M=3);let A=a.attributes.position.count*M,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const T=new Float32Array(A*E*4*h),b=new Hp(T,A,E,h);b.type=Si,b.needsUpdate=!0;const y=M*4;for(let R=0;R<h;R++){const U=m[R],L=w[R],z=_[R],V=A*E*4*R;for(let k=0;k<U.count;k++){const K=k*y;g===!0&&(s.fromBufferAttribute(U,k),T[V+K+0]=s.x,T[V+K+1]=s.y,T[V+K+2]=s.z,T[V+K+3]=0),x===!0&&(s.fromBufferAttribute(L,k),T[V+K+4]=s.x,T[V+K+5]=s.y,T[V+K+6]=s.z,T[V+K+7]=0),f===!0&&(s.fromBufferAttribute(z,k),T[V+K+8]=s.x,T[V+K+9]=s.y,T[V+K+10]=s.z,T[V+K+11]=z.itemSize===4?s.w:1)}}d={count:h,texture:b,size:new ft(A,E)},n.set(a,d),a.addEventListener("dispose",v)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let f=0;f<l.length;f++)g+=l[f];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function A_(i,t,e,n){let s=new WeakMap;function o(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}const f0=new nn,Cd=new t0(1,1),d0=new Hp,p0=new Ag,m0=new $p,Pd=[],Id=[],Ld=new Float32Array(16),Dd=new Float32Array(9),Ud=new Float32Array(4);function cr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Pd[s];if(o===void 0&&(o=new Float32Array(s),Pd[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Jc(i,t){let e=Id[t];e===void 0&&(e=new Int32Array(t),Id[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function R_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function C_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function P_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function I_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function L_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(Be(e,n))return;Ud.set(n),i.uniformMatrix2fv(this.addr,!1,Ud),Ge(e,n)}}function D_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(Be(e,n))return;Dd.set(n),i.uniformMatrix3fv(this.addr,!1,Dd),Ge(e,n)}}function U_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(Be(e,n))return;Ld.set(n),i.uniformMatrix4fv(this.addr,!1,Ld),Ge(e,n)}}function N_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function z_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function F_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function O_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function B_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function G_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function k_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function H_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function V_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Cd.compareFunction=Bp,o=Cd):o=f0,e.setTexture2D(t||o,s)}function W_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||p0,s)}function X_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||m0,s)}function q_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||d0,s)}function Y_(i){switch(i){case 5126:return R_;case 35664:return C_;case 35665:return P_;case 35666:return I_;case 35674:return L_;case 35675:return D_;case 35676:return U_;case 5124:case 35670:return N_;case 35667:case 35671:return z_;case 35668:case 35672:return F_;case 35669:case 35673:return O_;case 5125:return B_;case 36294:return G_;case 36295:return k_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return q_}}function Z_(i,t){i.uniform1fv(this.addr,t)}function $_(i,t){const e=cr(t,this.size,2);i.uniform2fv(this.addr,e)}function j_(i,t){const e=cr(t,this.size,3);i.uniform3fv(this.addr,e)}function K_(i,t){const e=cr(t,this.size,4);i.uniform4fv(this.addr,e)}function J_(i,t){const e=cr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Q_(i,t){const e=cr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ty(i,t){const e=cr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ey(i,t){i.uniform1iv(this.addr,t)}function ny(i,t){i.uniform2iv(this.addr,t)}function iy(i,t){i.uniform3iv(this.addr,t)}function sy(i,t){i.uniform4iv(this.addr,t)}function oy(i,t){i.uniform1uiv(this.addr,t)}function ry(i,t){i.uniform2uiv(this.addr,t)}function ay(i,t){i.uniform3uiv(this.addr,t)}function cy(i,t){i.uniform4uiv(this.addr,t)}function ly(i,t,e){const n=this.cache,s=t.length,o=Jc(e,s);Be(n,o)||(i.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||f0,o[r])}function uy(i,t,e){const n=this.cache,s=t.length,o=Jc(e,s);Be(n,o)||(i.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||p0,o[r])}function hy(i,t,e){const n=this.cache,s=t.length,o=Jc(e,s);Be(n,o)||(i.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||m0,o[r])}function fy(i,t,e){const n=this.cache,s=t.length,o=Jc(e,s);Be(n,o)||(i.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||d0,o[r])}function dy(i){switch(i){case 5126:return Z_;case 35664:return $_;case 35665:return j_;case 35666:return K_;case 35674:return J_;case 35675:return Q_;case 35676:return ty;case 5124:case 35670:return ey;case 35667:case 35671:return ny;case 35668:case 35672:return iy;case 35669:case 35673:return sy;case 5125:return oy;case 36294:return ry;case 36295:return ay;case 36296:return cy;case 35678:case 36198:case 36298:case 36306:case 35682:return ly;case 35679:case 36299:case 36307:return uy;case 35680:case 36300:case 36308:case 36293:return hy;case 36289:case 36303:case 36311:case 36292:return fy}}class py{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Y_(e.type)}}class my{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dy(e.type)}}class gy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Bl=/(\w+)(\])?(\[|\.)?/g;function Nd(i,t){i.seq.push(t),i.map[t.id]=t}function xy(i,t,e){const n=i.name,s=n.length;for(Bl.lastIndex=0;;){const o=Bl.exec(n),r=Bl.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){Nd(e,l===void 0?new py(a,i,t):new my(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new gy(a),Nd(e,h)),e=h}}}class uc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);xy(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function zd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const vy=37297;let My=0;function _y(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Fd=new Wt;function yy(i){oe._getMatrix(Fd,oe.workingColorSpace,i);const t=`mat3( ${Fd.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case Sc:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Od(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+_y(i.getShaderSource(t),r)}else return s}function wy(i,t){const e=yy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sy(i,t){let e;switch(t){case tg:e="Linear";break;case eg:e="Reinhard";break;case ng:e="Cineon";break;case Ap:e="ACESFilmic";break;case sg:e="AgX";break;case og:e="Neutral";break;case ig:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Va=new N;function by(){oe.getLuminanceCoefficients(Va);const i=Va.x.toFixed(4),t=Va.y.toFixed(4),e=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ty(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function Ey(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ay(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Rr(i){return i!==""}function Bd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function oh(i){return i.replace(Ry,Py)}const Cy=new Map;function Py(i,t){let e=qt[t];if(e===void 0){const n=Cy.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return oh(e)}const Iy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kd(i){return i.replace(Iy,Ly)}function Ly(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Hd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Dy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bp?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Tp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ni&&(t="SHADOWMAP_TYPE_VSM"),t}function Uy(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zo:case $o:t="ENVMAP_TYPE_CUBE";break;case $c:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ny(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $o:t="ENVMAP_MODE_REFRACTION";break}return t}function zy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ep:t="ENVMAP_BLENDING_MULTIPLY";break;case Jm:t="ENVMAP_BLENDING_MIX";break;case Qm:t="ENVMAP_BLENDING_ADD";break}return t}function Fy(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Oy(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=Dy(e),l=Uy(e),u=Ny(e),h=zy(e),d=Fy(e),p=Ty(e),g=Ey(o),x=s.createProgram();let f,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rr).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rr).join(`
`),m.length>0&&(m+=`
`)):(f=[Hd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),m=[Hd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hs?"#define TONE_MAPPING":"",e.toneMapping!==hs?qt.tonemapping_pars_fragment:"",e.toneMapping!==hs?Sy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,wy("linearToOutputTexel",e.outputColorSpace),by(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rr).join(`
`)),r=oh(r),r=Bd(r,e),r=Gd(r,e),a=oh(a),a=Bd(a,e),a=Gd(a,e),r=kd(r),a=kd(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",e.glslVersion===Bf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=w+f+r,M=w+m+a,A=zd(s,s.VERTEX_SHADER,_),E=zd(s,s.FRAGMENT_SHADER,M);s.attachShader(x,A),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(R){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(x).trim(),L=s.getShaderInfoLog(A).trim(),z=s.getShaderInfoLog(E).trim();let V=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,E);else{const K=Od(s,A,"vertex"),W=Od(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+K+`
`+W)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||z==="")&&(k=!1);k&&(R.diagnostics={runnable:V,programLog:U,vertexShader:{log:L,prefix:f},fragmentShader:{log:z,prefix:m}})}s.deleteShader(A),s.deleteShader(E),b=new uc(s,x),y=Ay(s,x)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,vy)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=My++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}let By=0;class Gy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ky(t),e.set(t,n)),n}}class ky{constructor(t){this.id=By++,this.code=t,this.usedTimes=0}}function Hy(i,t,e,n,s,o,r){const a=new Vp,c=new Gy,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function f(y,v,R,U,L){const z=U.fog,V=L.geometry,k=y.isMeshStandardMaterial?U.environment:null,K=(y.isMeshStandardMaterial?e:t).get(y.envMap||k),W=K&&K.mapping===$c?K.image.height:null,lt=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const pt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Rt=pt!==void 0?pt.length:0;let Ft=0;V.morphAttributes.position!==void 0&&(Ft=1),V.morphAttributes.normal!==void 0&&(Ft=2),V.morphAttributes.color!==void 0&&(Ft=3);let jt,et,ut,wt;if(lt){const de=xi[lt];jt=de.vertexShader,et=de.fragmentShader}else jt=y.vertexShader,et=y.fragmentShader,c.update(y),ut=c.getVertexShaderID(y),wt=c.getFragmentShaderID(y);const dt=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Gt=L.isInstancedMesh===!0,Zt=L.isBatchedMesh===!0,Re=!!y.map,te=!!y.matcap,Ne=!!K,O=!!y.aoMap,Vn=!!y.lightMap,Kt=!!y.bumpMap,Jt=!!y.normalMap,It=!!y.displacementMap,Se=!!y.emissiveMap,Pt=!!y.metalnessMap,D=!!y.roughnessMap,C=y.anisotropy>0,q=y.clearcoat>0,it=y.dispersion>0,rt=y.iridescence>0,nt=y.sheen>0,Ct=y.transmission>0,vt=C&&!!y.anisotropyMap,bt=q&&!!y.clearcoatMap,ee=q&&!!y.clearcoatNormalMap,ht=q&&!!y.clearcoatRoughnessMap,Tt=rt&&!!y.iridescenceMap,Nt=rt&&!!y.iridescenceThicknessMap,Ot=nt&&!!y.sheenColorMap,Et=nt&&!!y.sheenRoughnessMap,Qt=!!y.specularMap,Xt=!!y.specularColorMap,Me=!!y.specularIntensityMap,B=Ct&&!!y.transmissionMap,gt=Ct&&!!y.thicknessMap,tt=!!y.gradientMap,st=!!y.alphaMap,yt=y.alphaTest>0,Mt=!!y.alphaHash,Vt=!!y.extensions;let Pe=hs;y.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Pe=i.toneMapping);const je={shaderID:lt,shaderType:y.type,shaderName:y.name,vertexShader:jt,fragmentShader:et,defines:y.defines,customVertexShaderID:ut,customFragmentShaderID:wt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Zt,batchingColor:Zt&&L._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&L.instanceColor!==null,instancingMorph:Gt&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Qo,alphaToCoverage:!!y.alphaToCoverage,map:Re,matcap:te,envMap:Ne,envMapMode:Ne&&K.mapping,envMapCubeUVHeight:W,aoMap:O,lightMap:Vn,bumpMap:Kt,normalMap:Jt,displacementMap:d&&It,emissiveMap:Se,normalMapObjectSpace:Jt&&y.normalMapType===lg,normalMapTangentSpace:Jt&&y.normalMapType===Op,metalnessMap:Pt,roughnessMap:D,anisotropy:C,anisotropyMap:vt,clearcoat:q,clearcoatMap:bt,clearcoatNormalMap:ee,clearcoatRoughnessMap:ht,dispersion:it,iridescence:rt,iridescenceMap:Tt,iridescenceThicknessMap:Nt,sheen:nt,sheenColorMap:Ot,sheenRoughnessMap:Et,specularMap:Qt,specularColorMap:Xt,specularIntensityMap:Me,transmission:Ct,transmissionMap:B,thicknessMap:gt,gradientMap:tt,opaque:y.transparent===!1&&y.blending===No&&y.alphaToCoverage===!1,alphaMap:st,alphaTest:yt,alphaHash:Mt,combine:y.combine,mapUv:Re&&x(y.map.channel),aoMapUv:O&&x(y.aoMap.channel),lightMapUv:Vn&&x(y.lightMap.channel),bumpMapUv:Kt&&x(y.bumpMap.channel),normalMapUv:Jt&&x(y.normalMap.channel),displacementMapUv:It&&x(y.displacementMap.channel),emissiveMapUv:Se&&x(y.emissiveMap.channel),metalnessMapUv:Pt&&x(y.metalnessMap.channel),roughnessMapUv:D&&x(y.roughnessMap.channel),anisotropyMapUv:vt&&x(y.anisotropyMap.channel),clearcoatMapUv:bt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Et&&x(y.sheenRoughnessMap.channel),specularMapUv:Qt&&x(y.specularMap.channel),specularColorMapUv:Xt&&x(y.specularColorMap.channel),specularIntensityMapUv:Me&&x(y.specularIntensityMap.channel),transmissionMapUv:B&&x(y.transmissionMap.channel),thicknessMapUv:gt&&x(y.thicknessMap.channel),alphaMapUv:st&&x(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Jt||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!V.attributes.uv&&(Re||st),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:zt,skinning:L.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Ft,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Re&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===pe,decodeVideoTextureEmissive:Se&&y.emissiveMap.isVideoTexture===!0&&oe.getTransfer(y.emissiveMap.colorSpace)===pe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dt,flipSided:y.side===Tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Vt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&y.extensions.multiDraw===!0||Zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function m(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)v.push(R),v.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(w(v,y),_(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function w(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function _(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const v=g[y.type];let R;if(v){const U=xi[v];R=Ec.clone(U.uniforms)}else R=y.uniforms;return R}function A(y,v){let R;for(let U=0,L=u.length;U<L;U++){const z=u[U];if(z.cacheKey===v){R=z,++R.usedTimes;break}}return R===void 0&&(R=new Oy(i,v,y,o),u.push(R)),R}function E(y){if(--y.usedTimes===0){const v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function T(y){c.remove(y)}function b(){c.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:M,acquireProgram:A,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:b}}function Vy(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,c){i.get(r)[a]=c}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Wy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Vd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wd(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(h,d,p,g,x,f){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:f},i[t]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=x,m.group=f),t++,m}function a(h,d,p,g,x,f){const m=r(h,d,p,g,x,f);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):e.push(m)}function c(h,d,p,g,x,f){const m=r(h,d,p,g,x,f);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function l(h,d){e.length>1&&e.sort(h||Wy),n.length>1&&n.sort(d||Vd),s.length>1&&s.sort(d||Vd)}function u(){for(let h=t,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:u,sort:l}}function Xy(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Wd,i.set(n,[r])):s>=o.length?(r=new Wd,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function qy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new ot};break;case"SpotLight":e={position:new N,direction:new N,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":e={color:new ot,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Yy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Zy=0;function $y(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function jy(i){const t=new qy,e=Yy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,o=new fe,r=new fe;function a(l){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,x=0,f=0,m=0,w=0,_=0,M=0,A=0,E=0,T=0;l.sort($y);for(let y=0,v=l.length;y<v;y++){const R=l[y],U=R.color,L=R.intensity,z=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=U.r*L,h+=U.g*L,d+=U.b*L;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],L);T++}else if(R.isDirectionalLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,W=e.get(R);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=R.shadow.matrix,w++}n.directional[p]=k,p++}else if(R.isSpotLight){const k=t.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(U).multiplyScalar(L),k.distance=z,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[x]=k;const K=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,K.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[x]=K.matrix,R.castShadow){const W=e.get(R);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=V,M++}x++}else if(R.isRectAreaLight){const k=t.get(R);k.color.copy(U).multiplyScalar(L),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[f]=k,f++}else if(R.isPointLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const K=R.shadow,W=e.get(R);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=R.shadow.matrix,_++}n.point[g]=k,g++}else if(R.isHemisphereLight){const k=t.get(R);k.skyColor.copy(R.color).multiplyScalar(L),k.groundColor.copy(R.groundColor).multiplyScalar(L),n.hemi[m]=k,m++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const b=n.hash;(b.directionalLength!==p||b.pointLength!==g||b.spotLength!==x||b.rectAreaLength!==f||b.hemiLength!==m||b.numDirectionalShadows!==w||b.numPointShadows!==_||b.numSpotShadows!==M||b.numSpotMaps!==A||b.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=f,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,b.directionalLength=p,b.pointLength=g,b.spotLength=x,b.rectAreaLength=f,b.hemiLength=m,b.numDirectionalShadows=w,b.numPointShadows=_,b.numSpotShadows=M,b.numSpotMaps=A,b.numLightProbes=T,n.version=Zy++)}function c(l,u){let h=0,d=0,p=0,g=0,x=0;const f=u.matrixWorldInverse;for(let m=0,w=l.length;m<w;m++){const _=l[m];if(_.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),h++}else if(_.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),p++}else if(_.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),r.identity(),o.copy(_.matrixWorld),o.premultiply(f),r.extractRotation(o),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),g++}else if(_.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),d++}else if(_.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(f),x++}}}return{setup:a,setupView:c,state:n}}function Xd(i){const t=new jy(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function o(u){e.push(u)}function r(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function Ky(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Xd(i),t.set(s,[a])):o>=r.length?(a=new Xd(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Jy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qy=`uniform sampler2D shadow_pass;
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
}`;function tw(i,t,e){let n=new of;const s=new ft,o=new ft,r=new ge,a=new Tx({depthPacking:cg}),c=new Ex,l={},u=e.maxTextureSize,h={[fs]:Tn,[Tn]:fs,[Dt]:Dt},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Jy,fragmentShader:Qy}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new I(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bp;let m=this.type;this.render=function(E,T,b){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;const y=i.getRenderTarget(),v=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ki),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const L=m!==Ni&&this.type===Ni,z=m===Ni&&this.type!==Ni;for(let V=0,k=E.length;V<k;V++){const K=E[V],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const lt=W.getFrameExtents();if(s.multiply(lt),o.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/lt.x),s.x=o.x*lt.x,W.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/lt.y),s.y=o.y*lt.y,W.mapSize.y=o.y)),W.map===null||L===!0||z===!0){const Rt=this.type!==Ni?{minFilter:kn,magFilter:kn}:{};W.map!==null&&W.map.dispose(),W.map=new ui(s.x,s.y,Rt),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const pt=W.getViewportCount();for(let Rt=0;Rt<pt;Rt++){const Ft=W.getViewport(Rt);r.set(o.x*Ft.x,o.y*Ft.y,o.x*Ft.z,o.y*Ft.w),U.viewport(r),W.updateMatrices(K,Rt),n=W.getFrustum(),M(T,b,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===Ni&&w(W,b),W.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(y,v,R)};function w(E,T){const b=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ui(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,b,d,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,b,p,x,null)}function _(E,T,b,y){let v=null;const R=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)v=R;else if(v=b.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=v.uuid,L=T.uuid;let z=l[U];z===void 0&&(z={},l[U]=z);let V=z[L];V===void 0&&(V=v.clone(),z[L]=V,T.addEventListener("dispose",A)),v=V}if(v.visible=T.visible,v.wireframe=T.wireframe,y===Ni?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:h[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,b.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=i.properties.get(v);U.light=b}return v}function M(E,T,b,y,v){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Ni)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const L=t.update(E),z=E.material;if(Array.isArray(z)){const V=L.groups;for(let k=0,K=V.length;k<K;k++){const W=V[k],lt=z[W.materialIndex];if(lt&&lt.visible){const pt=_(E,lt,y,v);E.onBeforeShadow(i,E,T,b,L,pt,W),i.renderBufferDirect(b,null,L,pt,E,W),E.onAfterShadow(i,E,T,b,L,pt,W)}}}else if(z.visible){const V=_(E,z,y,v);E.onBeforeShadow(i,E,T,b,L,V,null),i.renderBufferDirect(b,null,L,V,E,null),E.onAfterShadow(i,E,T,b,L,V,null)}}const U=E.children;for(let L=0,z=U.length;L<z;L++)M(U[L],T,b,y,v)}function A(E){E.target.removeEventListener("dispose",A);for(const b in l){const y=l[b],v=E.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const ew={[xu]:vu,[Mu]:wu,[_u]:Su,[Yo]:yu,[vu]:xu,[wu]:Mu,[Su]:_u,[yu]:Yo};function nw(i,t){function e(){let B=!1;const gt=new ge;let tt=null;const st=new ge(0,0,0,0);return{setMask:function(yt){tt!==yt&&!B&&(i.colorMask(yt,yt,yt,yt),tt=yt)},setLocked:function(yt){B=yt},setClear:function(yt,Mt,Vt,Pe,je){je===!0&&(yt*=Pe,Mt*=Pe,Vt*=Pe),gt.set(yt,Mt,Vt,Pe),st.equals(gt)===!1&&(i.clearColor(yt,Mt,Vt,Pe),st.copy(gt))},reset:function(){B=!1,tt=null,st.set(-1,0,0,0)}}}function n(){let B=!1,gt=!1,tt=null,st=null,yt=null;return{setReversed:function(Mt){if(gt!==Mt){const Vt=t.get("EXT_clip_control");gt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const Pe=yt;yt=null,this.setClear(Pe)}gt=Mt},getReversed:function(){return gt},setTest:function(Mt){Mt?dt(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(Mt){tt!==Mt&&!B&&(i.depthMask(Mt),tt=Mt)},setFunc:function(Mt){if(gt&&(Mt=ew[Mt]),st!==Mt){switch(Mt){case xu:i.depthFunc(i.NEVER);break;case vu:i.depthFunc(i.ALWAYS);break;case Mu:i.depthFunc(i.LESS);break;case Yo:i.depthFunc(i.LEQUAL);break;case _u:i.depthFunc(i.EQUAL);break;case yu:i.depthFunc(i.GEQUAL);break;case wu:i.depthFunc(i.GREATER);break;case Su:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=Mt}},setLocked:function(Mt){B=Mt},setClear:function(Mt){yt!==Mt&&(gt&&(Mt=1-Mt),i.clearDepth(Mt),yt=Mt)},reset:function(){B=!1,tt=null,st=null,yt=null,gt=!1}}}function s(){let B=!1,gt=null,tt=null,st=null,yt=null,Mt=null,Vt=null,Pe=null,je=null;return{setTest:function(de){B||(de?dt(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(de){gt!==de&&!B&&(i.stencilMask(de),gt=de)},setFunc:function(de,ii,Ri){(tt!==de||st!==ii||yt!==Ri)&&(i.stencilFunc(de,ii,Ri),tt=de,st=ii,yt=Ri)},setOp:function(de,ii,Ri){(Mt!==de||Vt!==ii||Pe!==Ri)&&(i.stencilOp(de,ii,Ri),Mt=de,Vt=ii,Pe=Ri)},setLocked:function(de){B=de},setClear:function(de){je!==de&&(i.clearStencil(de),je=de)},reset:function(){B=!1,gt=null,tt=null,st=null,yt=null,Mt=null,Vt=null,Pe=null,je=null}}}const o=new e,r=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,x=!1,f=null,m=null,w=null,_=null,M=null,A=null,E=null,T=new ot(0,0,0),b=0,y=!1,v=null,R=null,U=null,L=null,z=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,K=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=K>=2);let lt=null,pt={};const Rt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),jt=new ge().fromArray(Rt),et=new ge().fromArray(Ft);function ut(B,gt,tt,st){const yt=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(B,Mt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<tt;Vt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(gt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return Mt}const wt={};wt[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),wt[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),wt[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),dt(i.DEPTH_TEST),r.setFunc(Yo),Kt(!1),Jt(Nf),dt(i.CULL_FACE),O(ki);function dt(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function zt(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Gt(B,gt){return h[B]!==gt?(i.bindFramebuffer(B,gt),h[B]=gt,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=gt),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function Zt(B,gt){let tt=p,st=!1;if(B){tt=d.get(gt),tt===void 0&&(tt=[],d.set(gt,tt));const yt=B.textures;if(tt.length!==yt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,Vt=yt.length;Mt<Vt;Mt++)tt[Mt]=i.COLOR_ATTACHMENT0+Mt;tt.length=yt.length,st=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,st=!0);st&&i.drawBuffers(tt)}function Re(B){return g!==B?(i.useProgram(B),g=B,!0):!1}const te={[Ds]:i.FUNC_ADD,[Nm]:i.FUNC_SUBTRACT,[zm]:i.FUNC_REVERSE_SUBTRACT};te[Fm]=i.MIN,te[Om]=i.MAX;const Ne={[Bm]:i.ZERO,[Gm]:i.ONE,[km]:i.SRC_COLOR,[mu]:i.SRC_ALPHA,[Ym]:i.SRC_ALPHA_SATURATE,[Xm]:i.DST_COLOR,[Vm]:i.DST_ALPHA,[Hm]:i.ONE_MINUS_SRC_COLOR,[gu]:i.ONE_MINUS_SRC_ALPHA,[qm]:i.ONE_MINUS_DST_COLOR,[Wm]:i.ONE_MINUS_DST_ALPHA,[Zm]:i.CONSTANT_COLOR,[$m]:i.ONE_MINUS_CONSTANT_COLOR,[jm]:i.CONSTANT_ALPHA,[Km]:i.ONE_MINUS_CONSTANT_ALPHA};function O(B,gt,tt,st,yt,Mt,Vt,Pe,je,de){if(B===ki){x===!0&&(zt(i.BLEND),x=!1);return}if(x===!1&&(dt(i.BLEND),x=!0),B!==Um){if(B!==f||de!==y){if((m!==Ds||M!==Ds)&&(i.blendEquation(i.FUNC_ADD),m=Ds,M=Ds),de)switch(B){case No:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ce:i.blendFunc(i.ONE,i.ONE);break;case zf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ff:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case No:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ce:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ff:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}w=null,_=null,A=null,E=null,T.set(0,0,0),b=0,f=B,y=de}return}yt=yt||gt,Mt=Mt||tt,Vt=Vt||st,(gt!==m||yt!==M)&&(i.blendEquationSeparate(te[gt],te[yt]),m=gt,M=yt),(tt!==w||st!==_||Mt!==A||Vt!==E)&&(i.blendFuncSeparate(Ne[tt],Ne[st],Ne[Mt],Ne[Vt]),w=tt,_=st,A=Mt,E=Vt),(Pe.equals(T)===!1||je!==b)&&(i.blendColor(Pe.r,Pe.g,Pe.b,je),T.copy(Pe),b=je),f=B,y=!1}function Vn(B,gt){B.side===Dt?zt(i.CULL_FACE):dt(i.CULL_FACE);let tt=B.side===Tn;gt&&(tt=!tt),Kt(tt),B.blending===No&&B.transparent===!1?O(ki):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),o.setMask(B.colorWrite);const st=B.stencilWrite;a.setTest(st),st&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Se(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(B){v!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),v=B)}function Jt(B){B!==Lm?(dt(i.CULL_FACE),B!==R&&(B===Nf?i.cullFace(i.BACK):B===Dm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),R=B}function It(B){B!==U&&(k&&i.lineWidth(B),U=B)}function Se(B,gt,tt){B?(dt(i.POLYGON_OFFSET_FILL),(L!==gt||z!==tt)&&(i.polygonOffset(gt,tt),L=gt,z=tt)):zt(i.POLYGON_OFFSET_FILL)}function Pt(B){B?dt(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function D(B){B===void 0&&(B=i.TEXTURE0+V-1),lt!==B&&(i.activeTexture(B),lt=B)}function C(B,gt,tt){tt===void 0&&(lt===null?tt=i.TEXTURE0+V-1:tt=lt);let st=pt[tt];st===void 0&&(st={type:void 0,texture:void 0},pt[tt]=st),(st.type!==B||st.texture!==gt)&&(lt!==tt&&(i.activeTexture(tt),lt=tt),i.bindTexture(B,gt||wt[B]),st.type=B,st.texture=gt)}function q(){const B=pt[lt];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function it(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ot(B){jt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),jt.copy(B))}function Et(B){et.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),et.copy(B))}function Qt(B,gt){let tt=l.get(gt);tt===void 0&&(tt=new WeakMap,l.set(gt,tt));let st=tt.get(B);st===void 0&&(st=i.getUniformBlockIndex(gt,B.name),tt.set(B,st))}function Xt(B,gt){const st=l.get(gt).get(B);c.get(gt)!==st&&(i.uniformBlockBinding(gt,st,B.__bindingPointIndex),c.set(gt,st))}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},lt=null,pt={},h={},d=new WeakMap,p=[],g=null,x=!1,f=null,m=null,w=null,_=null,M=null,A=null,E=null,T=new ot(0,0,0),b=0,y=!1,v=null,R=null,U=null,L=null,z=null,jt.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:dt,disable:zt,bindFramebuffer:Gt,drawBuffers:Zt,useProgram:Re,setBlending:O,setMaterial:Vn,setFlipSided:Kt,setCullFace:Jt,setLineWidth:It,setPolygonOffset:Se,setScissorTest:Pt,activeTexture:D,bindTexture:C,unbindTexture:q,compressedTexImage2D:it,compressedTexImage3D:rt,texImage2D:Tt,texImage3D:Nt,updateUBOMapping:Qt,uniformBlockBinding:Xt,texStorage2D:ee,texStorage3D:ht,texSubImage2D:nt,texSubImage3D:Ct,compressedTexSubImage2D:vt,compressedTexSubImage3D:bt,scissor:Ot,viewport:Et,reset:Me}}function iw(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ft,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,C){return p?new OffscreenCanvas(D,C):Tc("canvas")}function x(D,C,q){let it=1;const rt=Pt(D);if((rt.width>q||rt.height>q)&&(it=q/Math.max(rt.width,rt.height)),it<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const nt=Math.floor(it*rt.width),Ct=Math.floor(it*rt.height);h===void 0&&(h=g(nt,Ct));const vt=C?g(nt,Ct):h;return vt.width=nt,vt.height=Ct,vt.getContext("2d").drawImage(D,0,0,nt,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+nt+"x"+Ct+")."),vt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),D;return D}function f(D){return D.generateMipmaps}function m(D){i.generateMipmap(D)}function w(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(D,C,q,it,rt=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let nt=C;if(C===i.RED&&(q===i.FLOAT&&(nt=i.R32F),q===i.HALF_FLOAT&&(nt=i.R16F),q===i.UNSIGNED_BYTE&&(nt=i.R8)),C===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.R8UI),q===i.UNSIGNED_SHORT&&(nt=i.R16UI),q===i.UNSIGNED_INT&&(nt=i.R32UI),q===i.BYTE&&(nt=i.R8I),q===i.SHORT&&(nt=i.R16I),q===i.INT&&(nt=i.R32I)),C===i.RG&&(q===i.FLOAT&&(nt=i.RG32F),q===i.HALF_FLOAT&&(nt=i.RG16F),q===i.UNSIGNED_BYTE&&(nt=i.RG8)),C===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.RG8UI),q===i.UNSIGNED_SHORT&&(nt=i.RG16UI),q===i.UNSIGNED_INT&&(nt=i.RG32UI),q===i.BYTE&&(nt=i.RG8I),q===i.SHORT&&(nt=i.RG16I),q===i.INT&&(nt=i.RG32I)),C===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),q===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),q===i.UNSIGNED_INT&&(nt=i.RGB32UI),q===i.BYTE&&(nt=i.RGB8I),q===i.SHORT&&(nt=i.RGB16I),q===i.INT&&(nt=i.RGB32I)),C===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),q===i.UNSIGNED_INT&&(nt=i.RGBA32UI),q===i.BYTE&&(nt=i.RGBA8I),q===i.SHORT&&(nt=i.RGBA16I),q===i.INT&&(nt=i.RGBA32I)),C===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),C===i.RGBA){const Ct=rt?Sc:oe.getTransfer(it);q===i.FLOAT&&(nt=i.RGBA32F),q===i.HALF_FLOAT&&(nt=i.RGBA16F),q===i.UNSIGNED_BYTE&&(nt=Ct===pe?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function M(D,C){let q;return D?C===null||C===Ws||C===Ko?q=i.DEPTH24_STENCIL8:C===Si?q=i.DEPTH32F_STENCIL8:C===Wr&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Ws||C===Ko?q=i.DEPTH_COMPONENT24:C===Si?q=i.DEPTH_COMPONENT32F:C===Wr&&(q=i.DEPTH_COMPONENT16),q}function A(D,C){return f(D)===!0||D.isFramebufferTexture&&D.minFilter!==kn&&D.minFilter!==wi?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function E(D){const C=D.target;C.removeEventListener("dispose",E),b(C),C.isVideoTexture&&u.delete(C)}function T(D){const C=D.target;C.removeEventListener("dispose",T),v(C)}function b(D){const C=n.get(D);if(C.__webglInit===void 0)return;const q=D.source,it=d.get(q);if(it){const rt=it[C.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&y(D),Object.keys(it).length===0&&d.delete(q)}n.remove(D)}function y(D){const C=n.get(D);i.deleteTexture(C.__webglTexture);const q=D.source,it=d.get(q);delete it[C.__cacheKey],r.memory.textures--}function v(D){const C=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(C.__webglFramebuffer[it]))for(let rt=0;rt<C.__webglFramebuffer[it].length;rt++)i.deleteFramebuffer(C.__webglFramebuffer[it][rt]);else i.deleteFramebuffer(C.__webglFramebuffer[it]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[it])}else{if(Array.isArray(C.__webglFramebuffer))for(let it=0;it<C.__webglFramebuffer.length;it++)i.deleteFramebuffer(C.__webglFramebuffer[it]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let it=0;it<C.__webglColorRenderbuffer.length;it++)C.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[it]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const q=D.textures;for(let it=0,rt=q.length;it<rt;it++){const nt=n.get(q[it]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),r.memory.textures--),n.remove(q[it])}n.remove(D)}let R=0;function U(){R=0}function L(){const D=R;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),R+=1,D}function z(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function V(D,C){const q=n.get(D);if(D.isVideoTexture&&It(D),D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){const it=D.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(q,D,C);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+C)}function k(D,C){const q=n.get(D);if(D.version>0&&q.__version!==D.version){et(q,D,C);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+C)}function K(D,C){const q=n.get(D);if(D.version>0&&q.__version!==D.version){et(q,D,C);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+C)}function W(D,C){const q=n.get(D);if(D.version>0&&q.__version!==D.version){ut(q,D,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+C)}const lt={[jo]:i.REPEAT,[Ns]:i.CLAMP_TO_EDGE,[Eu]:i.MIRRORED_REPEAT},pt={[kn]:i.NEAREST,[rg]:i.NEAREST_MIPMAP_NEAREST,[fa]:i.NEAREST_MIPMAP_LINEAR,[wi]:i.LINEAR,[sl]:i.LINEAR_MIPMAP_NEAREST,[zs]:i.LINEAR_MIPMAP_LINEAR},Rt={[ug]:i.NEVER,[gg]:i.ALWAYS,[hg]:i.LESS,[Bp]:i.LEQUAL,[fg]:i.EQUAL,[mg]:i.GEQUAL,[dg]:i.GREATER,[pg]:i.NOTEQUAL};function Ft(D,C){if(C.type===Si&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===wi||C.magFilter===sl||C.magFilter===fa||C.magFilter===zs||C.minFilter===wi||C.minFilter===sl||C.minFilter===fa||C.minFilter===zs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,lt[C.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,lt[C.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,lt[C.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,pt[C.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,pt[C.minFilter]),C.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Rt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===kn||C.minFilter!==fa&&C.minFilter!==zs||C.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function jt(D,C){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",E));const it=C.source;let rt=d.get(it);rt===void 0&&(rt={},d.set(it,rt));const nt=z(C);if(nt!==D.__cacheKey){rt[nt]===void 0&&(rt[nt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,q=!0),rt[nt].usedTimes++;const Ct=rt[D.__cacheKey];Ct!==void 0&&(rt[D.__cacheKey].usedTimes--,Ct.usedTimes===0&&y(C)),D.__cacheKey=nt,D.__webglTexture=rt[nt].texture}return q}function et(D,C,q){let it=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(it=i.TEXTURE_3D);const rt=jt(D,C),nt=C.source;e.bindTexture(it,D.__webglTexture,i.TEXTURE0+q);const Ct=n.get(nt);if(nt.version!==Ct.__version||rt===!0){e.activeTexture(i.TEXTURE0+q);const vt=oe.getPrimaries(oe.workingColorSpace),bt=C.colorSpace===as?null:oe.getPrimaries(C.colorSpace),ee=C.colorSpace===as||vt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ht=x(C.image,!1,s.maxTextureSize);ht=Se(C,ht);const Tt=o.convert(C.format,C.colorSpace),Nt=o.convert(C.type);let Ot=_(C.internalFormat,Tt,Nt,C.colorSpace,C.isVideoTexture);Ft(it,C);let Et;const Qt=C.mipmaps,Xt=C.isVideoTexture!==!0,Me=Ct.__version===void 0||rt===!0,B=nt.dataReady,gt=A(C,ht);if(C.isDepthTexture)Ot=M(C.format===Jo,C.type),Me&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Ot,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Ot,ht.width,ht.height,0,Tt,Nt,null));else if(C.isDataTexture)if(Qt.length>0){Xt&&Me&&e.texStorage2D(i.TEXTURE_2D,gt,Ot,Qt[0].width,Qt[0].height);for(let tt=0,st=Qt.length;tt<st;tt++)Et=Qt[tt],Xt?B&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Et.width,Et.height,Tt,Nt,Et.data):e.texImage2D(i.TEXTURE_2D,tt,Ot,Et.width,Et.height,0,Tt,Nt,Et.data);C.generateMipmaps=!1}else Xt?(Me&&e.texStorage2D(i.TEXTURE_2D,gt,Ot,ht.width,ht.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht.width,ht.height,Tt,Nt,ht.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,ht.width,ht.height,0,Tt,Nt,ht.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Xt&&Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Ot,Qt[0].width,Qt[0].height,ht.depth);for(let tt=0,st=Qt.length;tt<st;tt++)if(Et=Qt[tt],C.format!==li)if(Tt!==null)if(Xt){if(B)if(C.layerUpdates.size>0){const yt=yd(Et.width,Et.height,C.format,C.type);for(const Mt of C.layerUpdates){const Vt=Et.data.subarray(Mt*yt/Et.data.BYTES_PER_ELEMENT,(Mt+1)*yt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,Mt,Et.width,Et.height,1,Tt,Vt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,Et.width,Et.height,ht.depth,Tt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,Ot,Et.width,Et.height,ht.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,Et.width,Et.height,ht.depth,Tt,Nt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,Ot,Et.width,Et.height,ht.depth,0,Tt,Nt,Et.data)}else{Xt&&Me&&e.texStorage2D(i.TEXTURE_2D,gt,Ot,Qt[0].width,Qt[0].height);for(let tt=0,st=Qt.length;tt<st;tt++)Et=Qt[tt],C.format!==li?Tt!==null?Xt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,Et.width,Et.height,Tt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,Ot,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?B&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Et.width,Et.height,Tt,Nt,Et.data):e.texImage2D(i.TEXTURE_2D,tt,Ot,Et.width,Et.height,0,Tt,Nt,Et.data)}else if(C.isDataArrayTexture)if(Xt){if(Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Ot,ht.width,ht.height,ht.depth),B)if(C.layerUpdates.size>0){const tt=yd(ht.width,ht.height,C.format,C.type);for(const st of C.layerUpdates){const yt=ht.data.subarray(st*tt/ht.data.BYTES_PER_ELEMENT,(st+1)*tt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,ht.width,ht.height,1,Tt,Nt,yt)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Tt,Nt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,ht.width,ht.height,ht.depth,0,Tt,Nt,ht.data);else if(C.isData3DTexture)Xt?(Me&&e.texStorage3D(i.TEXTURE_3D,gt,Ot,ht.width,ht.height,ht.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Tt,Nt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,ht.width,ht.height,ht.depth,0,Tt,Nt,ht.data);else if(C.isFramebufferTexture){if(Me)if(Xt)e.texStorage2D(i.TEXTURE_2D,gt,Ot,ht.width,ht.height);else{let tt=ht.width,st=ht.height;for(let yt=0;yt<gt;yt++)e.texImage2D(i.TEXTURE_2D,yt,Ot,tt,st,0,Tt,Nt,null),tt>>=1,st>>=1}}else if(Qt.length>0){if(Xt&&Me){const tt=Pt(Qt[0]);e.texStorage2D(i.TEXTURE_2D,gt,Ot,tt.width,tt.height)}for(let tt=0,st=Qt.length;tt<st;tt++)Et=Qt[tt],Xt?B&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Tt,Nt,Et):e.texImage2D(i.TEXTURE_2D,tt,Ot,Tt,Nt,Et);C.generateMipmaps=!1}else if(Xt){if(Me){const tt=Pt(ht);e.texStorage2D(i.TEXTURE_2D,gt,Ot,tt.width,tt.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Nt,ht)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Tt,Nt,ht);f(C)&&m(it),Ct.__version=nt.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function ut(D,C,q){if(C.image.length!==6)return;const it=jt(D,C),rt=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+q);const nt=n.get(rt);if(rt.version!==nt.__version||it===!0){e.activeTexture(i.TEXTURE0+q);const Ct=oe.getPrimaries(oe.workingColorSpace),vt=C.colorSpace===as?null:oe.getPrimaries(C.colorSpace),bt=C.colorSpace===as||Ct===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const ee=C.isCompressedTexture||C.image[0].isCompressedTexture,ht=C.image[0]&&C.image[0].isDataTexture,Tt=[];for(let st=0;st<6;st++)!ee&&!ht?Tt[st]=x(C.image[st],!0,s.maxCubemapSize):Tt[st]=ht?C.image[st].image:C.image[st],Tt[st]=Se(C,Tt[st]);const Nt=Tt[0],Ot=o.convert(C.format,C.colorSpace),Et=o.convert(C.type),Qt=_(C.internalFormat,Ot,Et,C.colorSpace),Xt=C.isVideoTexture!==!0,Me=nt.__version===void 0||it===!0,B=rt.dataReady;let gt=A(C,Nt);Ft(i.TEXTURE_CUBE_MAP,C);let tt;if(ee){Xt&&Me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Qt,Nt.width,Nt.height);for(let st=0;st<6;st++){tt=Tt[st].mipmaps;for(let yt=0;yt<tt.length;yt++){const Mt=tt[yt];C.format!==li?Ot!==null?Xt?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,0,0,Mt.width,Mt.height,Ot,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,Qt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,0,0,Mt.width,Mt.height,Ot,Et,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,Qt,Mt.width,Mt.height,0,Ot,Et,Mt.data)}}}else{if(tt=C.mipmaps,Xt&&Me){tt.length>0&&gt++;const st=Pt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Qt,st.width,st.height)}for(let st=0;st<6;st++)if(ht){Xt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Tt[st].width,Tt[st].height,Ot,Et,Tt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Qt,Tt[st].width,Tt[st].height,0,Ot,Et,Tt[st].data);for(let yt=0;yt<tt.length;yt++){const Vt=tt[yt].image[st].image;Xt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,0,0,Vt.width,Vt.height,Ot,Et,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,Qt,Vt.width,Vt.height,0,Ot,Et,Vt.data)}}else{Xt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ot,Et,Tt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Qt,Ot,Et,Tt[st]);for(let yt=0;yt<tt.length;yt++){const Mt=tt[yt];Xt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,0,0,Ot,Et,Mt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,Qt,Ot,Et,Mt.image[st])}}}f(C)&&m(i.TEXTURE_CUBE_MAP),nt.__version=rt.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function wt(D,C,q,it,rt,nt){const Ct=o.convert(q.format,q.colorSpace),vt=o.convert(q.type),bt=_(q.internalFormat,Ct,vt,q.colorSpace),ee=n.get(C),ht=n.get(q);if(ht.__renderTarget=C,!ee.__hasExternalTextures){const Tt=Math.max(1,C.width>>nt),Nt=Math.max(1,C.height>>nt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,nt,bt,Tt,Nt,C.depth,0,Ct,vt,null):e.texImage2D(rt,nt,bt,Tt,Nt,0,Ct,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),Jt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,rt,ht.__webglTexture,0,Kt(C)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,rt,ht.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(D,C,q){if(i.bindRenderbuffer(i.RENDERBUFFER,D),C.depthBuffer){const it=C.depthTexture,rt=it&&it.isDepthTexture?it.type:null,nt=M(C.stencilBuffer,rt),Ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=Kt(C);Jt(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,nt,C.width,C.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,nt,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,nt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,D)}else{const it=C.textures;for(let rt=0;rt<it.length;rt++){const nt=it[rt],Ct=o.convert(nt.format,nt.colorSpace),vt=o.convert(nt.type),bt=_(nt.internalFormat,Ct,vt,nt.colorSpace),ee=Kt(C);q&&Jt(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,bt,C.width,C.height):Jt(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,bt,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,bt,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=n.get(C.depthTexture);it.__renderTarget=C,(!it.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),V(C.depthTexture,0);const rt=it.__webglTexture,nt=Kt(C);if(C.depthTexture.format===zo)Jt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(C.depthTexture.format===Jo)Jt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Gt(D){const C=n.get(D),q=D.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==D.depthTexture){const it=D.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),it){const rt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,it.removeEventListener("dispose",rt)};it.addEventListener("dispose",rt),C.__depthDisposeCallback=rt}C.__boundDepthTexture=it}if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");zt(C.__webglFramebuffer,D)}else if(q){C.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[it]),C.__webglDepthbuffer[it]===void 0)C.__webglDepthbuffer[it]=i.createRenderbuffer(),dt(C.__webglDepthbuffer[it],D,!1);else{const rt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=C.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),dt(C.__webglDepthbuffer,D,!1);else{const it=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(D,C,q){const it=n.get(D);C!==void 0&&wt(it.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Gt(D)}function Re(D){const C=D.texture,q=n.get(D),it=n.get(C);D.addEventListener("dispose",T);const rt=D.textures,nt=D.isWebGLCubeRenderTarget===!0,Ct=rt.length>1;if(Ct||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=C.version,r.memory.textures++),nt){q.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(C.mipmaps&&C.mipmaps.length>0){q.__webglFramebuffer[vt]=[];for(let bt=0;bt<C.mipmaps.length;bt++)q.__webglFramebuffer[vt][bt]=i.createFramebuffer()}else q.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){q.__webglFramebuffer=[];for(let vt=0;vt<C.mipmaps.length;vt++)q.__webglFramebuffer[vt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let vt=0,bt=rt.length;vt<bt;vt++){const ee=n.get(rt[vt]);ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture(),r.memory.textures++)}if(D.samples>0&&Jt(D)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let vt=0;vt<rt.length;vt++){const bt=rt[vt];q.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[vt]);const ee=o.convert(bt.format,bt.colorSpace),ht=o.convert(bt.type),Tt=_(bt.internalFormat,ee,ht,bt.colorSpace,D.isXRRenderTarget===!0),Nt=Kt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Tt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,q.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(q.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,C);for(let vt=0;vt<6;vt++)if(C.mipmaps&&C.mipmaps.length>0)for(let bt=0;bt<C.mipmaps.length;bt++)wt(q.__webglFramebuffer[vt][bt],D,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,bt);else wt(q.__webglFramebuffer[vt],D,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);f(C)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let vt=0,bt=rt.length;vt<bt;vt++){const ee=rt[vt],ht=n.get(ee);e.bindTexture(i.TEXTURE_2D,ht.__webglTexture),Ft(i.TEXTURE_2D,ee),wt(q.__webglFramebuffer,D,ee,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),f(ee)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(vt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,it.__webglTexture),Ft(vt,C),C.mipmaps&&C.mipmaps.length>0)for(let bt=0;bt<C.mipmaps.length;bt++)wt(q.__webglFramebuffer[bt],D,C,i.COLOR_ATTACHMENT0,vt,bt);else wt(q.__webglFramebuffer,D,C,i.COLOR_ATTACHMENT0,vt,0);f(C)&&m(vt),e.unbindTexture()}D.depthBuffer&&Gt(D)}function te(D){const C=D.textures;for(let q=0,it=C.length;q<it;q++){const rt=C[q];if(f(rt)){const nt=w(D),Ct=n.get(rt).__webglTexture;e.bindTexture(nt,Ct),m(nt),e.unbindTexture()}}}const Ne=[],O=[];function Vn(D){if(D.samples>0){if(Jt(D)===!1){const C=D.textures,q=D.width,it=D.height;let rt=i.COLOR_BUFFER_BIT;const nt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(D),vt=C.length>1;if(vt)for(let bt=0;bt<C.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let bt=0;bt<C.length;bt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[bt]);const ee=n.get(C[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,q,it,0,0,q,it,rt,i.NEAREST),c===!0&&(Ne.length=0,O.length=0,Ne.push(i.COLOR_ATTACHMENT0+bt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ne.push(nt),O.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ne))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let bt=0;bt<C.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[bt]);const ee=n.get(C[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,ee,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const C=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function Kt(D){return Math.min(s.maxSamples,D.samples)}function Jt(D){const C=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function It(D){const C=r.render.frame;u.get(D)!==C&&(u.set(D,C),D.update())}function Se(D,C){const q=D.colorSpace,it=D.format,rt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==Qo&&q!==as&&(oe.getTransfer(q)===pe?(it!==li||rt!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),C}function Pt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=Zt,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Vn,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Jt}function sw(i,t){function e(n,s=as){let o;const r=oe.getTransfer(s);if(n===qi)return i.UNSIGNED_BYTE;if(n===jh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Kh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ip)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cp)return i.BYTE;if(n===Pp)return i.SHORT;if(n===Wr)return i.UNSIGNED_SHORT;if(n===$h)return i.INT;if(n===Ws)return i.UNSIGNED_INT;if(n===Si)return i.FLOAT;if(n===Hi)return i.HALF_FLOAT;if(n===Lp)return i.ALPHA;if(n===Dp)return i.RGB;if(n===li)return i.RGBA;if(n===Up)return i.LUMINANCE;if(n===Np)return i.LUMINANCE_ALPHA;if(n===zo)return i.DEPTH_COMPONENT;if(n===Jo)return i.DEPTH_STENCIL;if(n===Jh)return i.RED;if(n===Qh)return i.RED_INTEGER;if(n===zp)return i.RG;if(n===tf)return i.RG_INTEGER;if(n===ef)return i.RGBA_INTEGER;if(n===oc||n===rc||n===ac||n===cc)if(r===pe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===oc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ac)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===oc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ac)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Au||n===Ru||n===Cu||n===Pu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Au)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ru)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Iu||n===Lu||n===Du)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Iu||n===Lu)return r===pe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Du)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uu||n===Nu||n===zu||n===Fu||n===Ou||n===Bu||n===Gu||n===ku||n===Hu||n===Vu||n===Wu||n===Xu||n===qu||n===Yu)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Uu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ou)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ku)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lc||n===Zu||n===$u)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===lc)return r===pe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$u)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fp||n===ju||n===Ku||n===Ju)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===lc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===ju)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ku)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ju)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ko?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ow={type:"move"};class Gl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const f=e.getJointPose(x,n),m=this._getHandJoint(l,x);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ow)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const rw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aw=`
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

}`;class cw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new nn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Rn({vertexShader:rw,fragmentShader:aw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new I(new ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lw extends rr{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null;const x=new cw,f=e.getContextAttributes();let m=null,w=null;const _=[],M=[],A=new ft;let E=null;const T=new Nn;T.viewport=new ge;const b=new Nn;b.viewport=new ge;const y=[T,b],v=new Px;let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ut=_[et];return ut===void 0&&(ut=new Gl,_[et]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(et){let ut=_[et];return ut===void 0&&(ut=new Gl,_[et]=ut),ut.getGripSpace()},this.getHand=function(et){let ut=_[et];return ut===void 0&&(ut=new Gl,_[et]=ut),ut.getHandSpace()};function L(et){const ut=M.indexOf(et.inputSource);if(ut===-1)return;const wt=_[ut];wt!==void 0&&(wt.update(et.inputSource,et.frame,l||r),wt.dispatchEvent({type:et.type,data:et.inputSource}))}function z(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",V);for(let et=0;et<_.length;et++){const ut=M[et];ut!==null&&(M[et]=null,_[et].disconnect(ut))}R=null,U=null,x.reset(),t.setRenderTarget(m),p=null,d=null,h=null,s=null,w=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){o=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(et){l=et},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",z),s.addEventListener("inputsourceschange",V),f.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let wt=null,dt=null,zt=null;f.depth&&(zt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=f.stencil?Jo:zo,dt=f.stencil?Ko:Ws);const Gt={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:o};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Gt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new ui(d.textureWidth,d.textureHeight,{format:li,type:qi,depthTexture:new t0(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const wt={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new ui(p.framebufferWidth,p.framebufferHeight,{format:li,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(et){for(let ut=0;ut<et.removed.length;ut++){const wt=et.removed[ut],dt=M.indexOf(wt);dt>=0&&(M[dt]=null,_[dt].disconnect(wt))}for(let ut=0;ut<et.added.length;ut++){const wt=et.added[ut];let dt=M.indexOf(wt);if(dt===-1){for(let Gt=0;Gt<_.length;Gt++)if(Gt>=M.length){M.push(wt),dt=Gt;break}else if(M[Gt]===null){M[Gt]=wt,dt=Gt;break}if(dt===-1)break}const zt=_[dt];zt&&zt.connect(wt)}}const k=new N,K=new N;function W(et,ut,wt){k.setFromMatrixPosition(ut.matrixWorld),K.setFromMatrixPosition(wt.matrixWorld);const dt=k.distanceTo(K),zt=ut.projectionMatrix.elements,Gt=wt.projectionMatrix.elements,Zt=zt[14]/(zt[10]-1),Re=zt[14]/(zt[10]+1),te=(zt[9]+1)/zt[5],Ne=(zt[9]-1)/zt[5],O=(zt[8]-1)/zt[0],Vn=(Gt[8]+1)/Gt[0],Kt=Zt*O,Jt=Zt*Vn,It=dt/(-O+Vn),Se=It*-O;if(ut.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Se),et.translateZ(It),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),zt[10]===-1)et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Pt=Zt+It,D=Re+It,C=Kt-Se,q=Jt+(dt-Se),it=te*Re/D*Pt,rt=Ne*Re/D*Pt;et.projectionMatrix.makePerspective(C,q,it,rt,Pt,D),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function lt(et,ut){ut===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ut.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let ut=et.near,wt=et.far;x.texture!==null&&(x.depthNear>0&&(ut=x.depthNear),x.depthFar>0&&(wt=x.depthFar)),v.near=b.near=T.near=ut,v.far=b.far=T.far=wt,(R!==v.near||U!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,U=v.far),T.layers.mask=et.layers.mask|2,b.layers.mask=et.layers.mask|4,v.layers.mask=T.layers.mask|b.layers.mask;const dt=et.parent,zt=v.cameras;lt(v,dt);for(let Gt=0;Gt<zt.length;Gt++)lt(zt[Gt],dt);zt.length===2?W(v,T,b):v.projectionMatrix.copy(T.projectionMatrix),pt(et,v,dt)};function pt(et,ut,wt){wt===null?et.matrix.copy(ut.matrixWorld):(et.matrix.copy(wt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ut.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=th*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(et){c=et,d!==null&&(d.fixedFoveation=et),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=et)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let Rt=null;function Ft(et,ut){if(u=ut.getViewerPose(l||r),g=ut,u!==null){const wt=u.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let dt=!1;wt.length!==v.cameras.length&&(v.cameras.length=0,dt=!0);for(let Gt=0;Gt<wt.length;Gt++){const Zt=wt[Gt];let Re=null;if(p!==null)Re=p.getViewport(Zt);else{const Ne=h.getViewSubImage(d,Zt);Re=Ne.viewport,Gt===0&&(t.setRenderTargetTextures(w,Ne.colorTexture,d.ignoreDepthValues?void 0:Ne.depthStencilTexture),t.setRenderTarget(w))}let te=y[Gt];te===void 0&&(te=new Nn,te.layers.enable(Gt),te.viewport=new ge,y[Gt]=te),te.matrix.fromArray(Zt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Zt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Re.x,Re.y,Re.width,Re.height),Gt===0&&(v.matrix.copy(te.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),dt===!0&&v.cameras.push(te)}const zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Gt=h.getDepthInformation(wt[0]);Gt&&Gt.isValid&&Gt.texture&&x.init(t,Gt,s.renderState)}}for(let wt=0;wt<_.length;wt++){const dt=M[wt],zt=_[wt];dt!==null&&zt!==void 0&&zt.update(dt,ut,l||r)}Rt&&Rt(et,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),g=null}const jt=new h0;jt.setAnimationLoop(Ft),this.setAnimationLoop=function(et){Rt=et},this.dispose=function(){}}}const ys=new Ti,uw=new fe;function hw(i,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,Yp(i)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,w,_,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(f,m):m.isMeshToonMaterial?(o(f,m),h(f,m)):m.isMeshPhongMaterial?(o(f,m),u(f,m)):m.isMeshStandardMaterial?(o(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,M)):m.isMeshMatcapMaterial?(o(f,m),g(f,m)):m.isMeshDepthMaterial?o(f,m):m.isMeshDistanceMaterial?(o(f,m),x(f,m)):m.isMeshNormalMaterial?o(f,m):m.isLineBasicMaterial?(r(f,m),m.isLineDashedMaterial&&a(f,m)):m.isPointsMaterial?c(f,m,w,_):m.isSpriteMaterial?l(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Tn&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Tn&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const w=t.get(m),_=w.envMap,M=w.envMapRotation;_&&(f.envMap.value=_,ys.copy(M),ys.x*=-1,ys.y*=-1,ys.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),f.envMapRotation.value.setFromMatrix4(uw.makeRotationFromEuler(ys)),f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function r(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function c(f,m,w,_){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*w,f.scale.value=_*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function l(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function u(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function h(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,w){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Tn&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function x(f,m){const w=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fw(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,_){const M=_.program;n.uniformBlockBinding(w,M)}function l(w,_){let M=s[w.id];M===void 0&&(g(w),M=u(w),s[w.id]=M,w.addEventListener("dispose",f));const A=_.program;n.updateUBOMapping(w,A);const E=t.render.frame;o[w.id]!==E&&(d(w),o[w.id]=E)}function u(w){const _=h();w.__bindingPointIndex=_;const M=i.createBuffer(),A=w.__size,E=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function h(){for(let w=0;w<a;w++)if(r.indexOf(w)===-1)return r.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const _=s[w.id],M=w.uniforms,A=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,T=M.length;E<T;E++){const b=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,v=b.length;y<v;y++){const R=b[y];if(p(R,E,y,A)===!0){const U=R.__offset,L=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let V=0;V<L.length;V++){const k=L[V],K=x(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,U+z,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,z),z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,_,M,A){const E=w.value,T=_+"_"+M;if(A[T]===void 0)return typeof E=="number"||typeof E=="boolean"?A[T]=E:A[T]=E.clone(),!0;{const b=A[T];if(typeof E=="number"||typeof E=="boolean"){if(b!==E)return A[T]=E,!0}else if(b.equals(E)===!1)return b.copy(E),!0}return!1}function g(w){const _=w.uniforms;let M=0;const A=16;for(let T=0,b=_.length;T<b;T++){const y=Array.isArray(_[T])?_[T]:[_[T]];for(let v=0,R=y.length;v<R;v++){const U=y[v],L=Array.isArray(U.value)?U.value:[U.value];for(let z=0,V=L.length;z<V;z++){const k=L[z],K=x(k),W=M%A,lt=W%K.boundary,pt=W+lt;M+=lt,pt!==0&&A-pt<K.storage&&(M+=A-pt),U.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=K.storage}}}const E=M%A;return E>0&&(M+=A-E),w.__size=M,w.__cache={},this}function x(w){const _={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function f(w){const _=w.target;_.removeEventListener("dispose",f);const M=r.indexOf(_.__bindingPointIndex);r.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete o[_.id]}function m(){for(const w in s)i.deleteBuffer(s[w]);r=[],s={},o={}}return{bind:c,update:l,dispose:m}}class dw{constructor(t={}){const{canvas:e=vg(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),x=new Int32Array(4);let f=null,m=null;const w=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=hs,this.toneMappingExposure=1;const M=this;let A=!1,E=0,T=0,b=null,y=-1,v=null;const R=new ge,U=new ge;let L=null;const z=new ot(0);let V=0,k=e.width,K=e.height,W=1,lt=null,pt=null;const Rt=new ge(0,0,k,K),Ft=new ge(0,0,k,K);let jt=!1;const et=new of;let ut=!1,wt=!1;this.transmissionResolutionScale=1;const dt=new fe,zt=new fe,Gt=new N,Zt=new ge,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function Ne(){return b===null?W:1}let O=n;function Vn(P,G){return e.getContext(P,G)}try{const P={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zh}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),O===null){const G="webgl2";if(O=Vn(G,P),O===null)throw Vn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Kt,Jt,It,Se,Pt,D,C,q,it,rt,nt,Ct,vt,bt,ee,ht,Tt,Nt,Ot,Et,Qt,Xt,Me,B;function gt(){Kt=new w_(O),Kt.init(),Xt=new sw(O,Kt),Jt=new g_(O,Kt,t,Xt),It=new nw(O,Kt),Jt.reverseDepthBuffer&&d&&It.buffers.depth.setReversed(!0),Se=new T_(O),Pt=new Vy,D=new iw(O,Kt,It,Pt,Jt,Xt,Se),C=new v_(M),q=new y_(M),it=new Lx(O),Me=new p_(O,it),rt=new S_(O,it,Se,Me),nt=new A_(O,rt,it,Se),Ot=new E_(O,Jt,D),ht=new x_(Pt),Ct=new Hy(M,C,q,Kt,Jt,Me,ht),vt=new hw(M,Pt),bt=new Xy,ee=new Ky(Kt),Nt=new d_(M,C,q,It,nt,p,c),Tt=new tw(M,nt,Jt),B=new fw(O,Se,Jt,It),Et=new m_(O,Kt,Se),Qt=new b_(O,Kt,Se),Se.programs=Ct.programs,M.capabilities=Jt,M.extensions=Kt,M.properties=Pt,M.renderLists=bt,M.shadowMap=Tt,M.state=It,M.info=Se}gt();const tt=new lw(M,O);this.xr=tt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const P=Kt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Kt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(P){P!==void 0&&(W=P,this.setSize(k,K,!1))},this.getSize=function(P){return P.set(k,K)},this.setSize=function(P,G,Z=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=P,K=G,e.width=Math.floor(P*W),e.height=Math.floor(G*W),Z===!0&&(e.style.width=P+"px",e.style.height=G+"px"),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set(k*W,K*W).floor()},this.setDrawingBufferSize=function(P,G,Z){k=P,K=G,W=Z,e.width=Math.floor(P*Z),e.height=Math.floor(G*Z),this.setViewport(0,0,P,G)},this.getCurrentViewport=function(P){return P.copy(R)},this.getViewport=function(P){return P.copy(Rt)},this.setViewport=function(P,G,Z,j){P.isVector4?Rt.set(P.x,P.y,P.z,P.w):Rt.set(P,G,Z,j),It.viewport(R.copy(Rt).multiplyScalar(W).round())},this.getScissor=function(P){return P.copy(Ft)},this.setScissor=function(P,G,Z,j){P.isVector4?Ft.set(P.x,P.y,P.z,P.w):Ft.set(P,G,Z,j),It.scissor(U.copy(Ft).multiplyScalar(W).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(P){It.setScissorTest(jt=P)},this.setOpaqueSort=function(P){lt=P},this.setTransparentSort=function(P){pt=P},this.getClearColor=function(P){return P.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(P=!0,G=!0,Z=!0){let j=0;if(P){let H=!1;if(b!==null){const at=b.texture.format;H=at===ef||at===tf||at===Qh}if(H){const at=b.texture.type,xt=at===qi||at===Ws||at===Wr||at===Ko||at===jh||at===Kh,St=Nt.getClearColor(),At=Nt.getClearAlpha(),Bt=St.r,kt=St.g,Lt=St.b;xt?(g[0]=Bt,g[1]=kt,g[2]=Lt,g[3]=At,O.clearBufferuiv(O.COLOR,0,g)):(x[0]=Bt,x[1]=kt,x[2]=Lt,x[3]=At,O.clearBufferiv(O.COLOR,0,x))}else j|=O.COLOR_BUFFER_BIT}G&&(j|=O.DEPTH_BUFFER_BIT),Z&&(j|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Nt.dispose(),bt.dispose(),ee.dispose(),Pt.dispose(),C.dispose(),q.dispose(),nt.dispose(),Me.dispose(),B.dispose(),Ct.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Rf),tt.removeEventListener("sessionend",Cf),ps.stop()};function st(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=Se.autoReset,G=Tt.enabled,Z=Tt.autoUpdate,j=Tt.needsUpdate,H=Tt.type;gt(),Se.autoReset=P,Tt.enabled=G,Tt.autoUpdate=Z,Tt.needsUpdate=j,Tt.type=H}function Mt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Vt(P){const G=P.target;G.removeEventListener("dispose",Vt),Pe(G)}function Pe(P){je(P),Pt.remove(P)}function je(P){const G=Pt.get(P).programs;G!==void 0&&(G.forEach(function(Z){Ct.releaseProgram(Z)}),P.isShaderMaterial&&Ct.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,Z,j,H,at){G===null&&(G=Re);const xt=H.isMesh&&H.matrixWorld.determinant()<0,St=Em(P,G,Z,j,H);It.setMaterial(j,xt);let At=Z.index,Bt=1;if(j.wireframe===!0){if(At=rt.getWireframeAttribute(Z),At===void 0)return;Bt=2}const kt=Z.drawRange,Lt=Z.attributes.position;let ne=kt.start*Bt,ue=(kt.start+kt.count)*Bt;at!==null&&(ne=Math.max(ne,at.start*Bt),ue=Math.min(ue,(at.start+at.count)*Bt)),At!==null?(ne=Math.max(ne,0),ue=Math.min(ue,At.count)):Lt!=null&&(ne=Math.max(ne,0),ue=Math.min(ue,Lt.count));const Fe=ue-ne;if(Fe<0||Fe===1/0)return;Me.setup(H,j,St,Z,At);let Ie,se=Et;if(At!==null&&(Ie=it.get(At),se=Qt,se.setIndex(Ie)),H.isMesh)j.wireframe===!0?(It.setLineWidth(j.wireframeLinewidth*Ne()),se.setMode(O.LINES)):se.setMode(O.TRIANGLES);else if(H.isLine){let Ut=j.linewidth;Ut===void 0&&(Ut=1),It.setLineWidth(Ut*Ne()),H.isLineSegments?se.setMode(O.LINES):H.isLineLoop?se.setMode(O.LINE_LOOP):se.setMode(O.LINE_STRIP)}else H.isPoints?se.setMode(O.POINTS):H.isSprite&&se.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)se.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))se.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ut=H._multiDrawStarts,Ye=H._multiDrawCounts,he=H._multiDrawCount,si=At?it.get(At).bytesPerElement:1,js=Pt.get(j).currentProgram.getUniforms();for(let In=0;In<he;In++)js.setValue(O,"_gl_DrawID",In),se.render(Ut[In]/si,Ye[In])}else if(H.isInstancedMesh)se.renderInstances(ne,Fe,H.count);else if(Z.isInstancedBufferGeometry){const Ut=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ye=Math.min(Z.instanceCount,Ut);se.renderInstances(ne,Fe,Ye)}else se.render(ne,Fe)};function de(P,G,Z){P.transparent===!0&&P.side===Dt&&P.forceSinglePass===!1?(P.side=Tn,P.needsUpdate=!0,ha(P,G,Z),P.side=fs,P.needsUpdate=!0,ha(P,G,Z),P.side=Dt):ha(P,G,Z)}this.compile=function(P,G,Z=null){Z===null&&(Z=P),m=ee.get(Z),m.init(G),_.push(m),Z.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),P!==Z&&P.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const j=new Set;return P.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const at=H.material;if(at)if(Array.isArray(at))for(let xt=0;xt<at.length;xt++){const St=at[xt];de(St,Z,H),j.add(St)}else de(at,Z,H),j.add(at)}),_.pop(),m=null,j},this.compileAsync=function(P,G,Z=null){const j=this.compile(P,G,Z);return new Promise(H=>{function at(){if(j.forEach(function(xt){Pt.get(xt).currentProgram.isReady()&&j.delete(xt)}),j.size===0){H(P);return}setTimeout(at,10)}Kt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let ii=null;function Ri(P){ii&&ii(P)}function Rf(){ps.stop()}function Cf(){ps.start()}const ps=new h0;ps.setAnimationLoop(Ri),typeof self<"u"&&ps.setContext(self),this.setAnimationLoop=function(P){ii=P,tt.setAnimationLoop(P),P===null?ps.stop():ps.start()},tt.addEventListener("sessionstart",Rf),tt.addEventListener("sessionend",Cf),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(G),G=tt.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,G,b),m=ee.get(P,_.length),m.init(G),_.push(m),zt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),et.setFromProjectionMatrix(zt),wt=this.localClippingEnabled,ut=ht.init(this.clippingPlanes,wt),f=bt.get(P,w.length),f.init(),w.push(f),tt.enabled===!0&&tt.isPresenting===!0){const at=M.xr.getDepthSensingMesh();at!==null&&nl(at,G,-1/0,M.sortObjects)}nl(P,G,0,M.sortObjects),f.finish(),M.sortObjects===!0&&f.sort(lt,pt),te=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,te&&Nt.addToRenderList(f,P),this.info.render.frame++,ut===!0&&ht.beginShadows();const Z=m.state.shadowsArray;Tt.render(Z,P,G),ut===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=f.opaque,H=f.transmissive;if(m.setupLights(),G.isArrayCamera){const at=G.cameras;if(H.length>0)for(let xt=0,St=at.length;xt<St;xt++){const At=at[xt];If(j,H,P,At)}te&&Nt.render(P);for(let xt=0,St=at.length;xt<St;xt++){const At=at[xt];Pf(f,P,At,At.viewport)}}else H.length>0&&If(j,H,P,G),te&&Nt.render(P),Pf(f,P,G);b!==null&&T===0&&(D.updateMultisampleRenderTarget(b),D.updateRenderTargetMipmap(b)),P.isScene===!0&&P.onAfterRender(M,P,G),Me.resetDefaultState(),y=-1,v=null,_.pop(),_.length>0?(m=_[_.length-1],ut===!0&&ht.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,w.pop(),w.length>0?f=w[w.length-1]:f=null};function nl(P,G,Z,j){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)Z=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||et.intersectsSprite(P)){j&&Zt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(zt);const xt=nt.update(P),St=P.material;St.visible&&f.push(P,xt,St,Z,Zt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||et.intersectsObject(P))){const xt=nt.update(P),St=P.material;if(j&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Zt.copy(P.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Zt.copy(xt.boundingSphere.center)),Zt.applyMatrix4(P.matrixWorld).applyMatrix4(zt)),Array.isArray(St)){const At=xt.groups;for(let Bt=0,kt=At.length;Bt<kt;Bt++){const Lt=At[Bt],ne=St[Lt.materialIndex];ne&&ne.visible&&f.push(P,xt,ne,Z,Zt.z,Lt)}}else St.visible&&f.push(P,xt,St,Z,Zt.z,null)}}const at=P.children;for(let xt=0,St=at.length;xt<St;xt++)nl(at[xt],G,Z,j)}function Pf(P,G,Z,j){const H=P.opaque,at=P.transmissive,xt=P.transparent;m.setupLightsView(Z),ut===!0&&ht.setGlobalState(M.clippingPlanes,Z),j&&It.viewport(R.copy(j)),H.length>0&&ua(H,G,Z),at.length>0&&ua(at,G,Z),xt.length>0&&ua(xt,G,Z),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function If(P,G,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new ui(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?Hi:qi,minFilter:zs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const at=m.state.transmissionRenderTarget[j.id],xt=j.viewport||R;at.setSize(xt.z*M.transmissionResolutionScale,xt.w*M.transmissionResolutionScale);const St=M.getRenderTarget();M.setRenderTarget(at),M.getClearColor(z),V=M.getClearAlpha(),V<1&&M.setClearColor(16777215,.5),M.clear(),te&&Nt.render(Z);const At=M.toneMapping;M.toneMapping=hs;const Bt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),ut===!0&&ht.setGlobalState(M.clippingPlanes,j),ua(P,Z,j),D.updateMultisampleRenderTarget(at),D.updateRenderTargetMipmap(at),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Lt=0,ne=G.length;Lt<ne;Lt++){const ue=G[Lt],Fe=ue.object,Ie=ue.geometry,se=ue.material,Ut=ue.group;if(se.side===Dt&&Fe.layers.test(j.layers)){const Ye=se.side;se.side=Tn,se.needsUpdate=!0,Lf(Fe,Z,j,Ie,se,Ut),se.side=Ye,se.needsUpdate=!0,kt=!0}}kt===!0&&(D.updateMultisampleRenderTarget(at),D.updateRenderTargetMipmap(at))}M.setRenderTarget(St),M.setClearColor(z,V),Bt!==void 0&&(j.viewport=Bt),M.toneMapping=At}function ua(P,G,Z){const j=G.isScene===!0?G.overrideMaterial:null;for(let H=0,at=P.length;H<at;H++){const xt=P[H],St=xt.object,At=xt.geometry,Bt=j===null?xt.material:j,kt=xt.group;St.layers.test(Z.layers)&&Lf(St,G,Z,At,Bt,kt)}}function Lf(P,G,Z,j,H,at){P.onBeforeRender(M,G,Z,j,H,at),P.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),H.onBeforeRender(M,G,Z,j,P,at),H.transparent===!0&&H.side===Dt&&H.forceSinglePass===!1?(H.side=Tn,H.needsUpdate=!0,M.renderBufferDirect(Z,G,j,H,P,at),H.side=fs,H.needsUpdate=!0,M.renderBufferDirect(Z,G,j,H,P,at),H.side=Dt):M.renderBufferDirect(Z,G,j,H,P,at),P.onAfterRender(M,G,Z,j,H,at)}function ha(P,G,Z){G.isScene!==!0&&(G=Re);const j=Pt.get(P),H=m.state.lights,at=m.state.shadowsArray,xt=H.state.version,St=Ct.getParameters(P,H.state,at,G,Z),At=Ct.getProgramCacheKey(St);let Bt=j.programs;j.environment=P.isMeshStandardMaterial?G.environment:null,j.fog=G.fog,j.envMap=(P.isMeshStandardMaterial?q:C).get(P.envMap||j.environment),j.envMapRotation=j.environment!==null&&P.envMap===null?G.environmentRotation:P.envMapRotation,Bt===void 0&&(P.addEventListener("dispose",Vt),Bt=new Map,j.programs=Bt);let kt=Bt.get(At);if(kt!==void 0){if(j.currentProgram===kt&&j.lightsStateVersion===xt)return Uf(P,St),kt}else St.uniforms=Ct.getUniforms(P),P.onBeforeCompile(St,M),kt=Ct.acquireProgram(St,At),Bt.set(At,kt),j.uniforms=St.uniforms;const Lt=j.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Lt.clippingPlanes=ht.uniform),Uf(P,St),j.needsLights=Rm(P),j.lightsStateVersion=xt,j.needsLights&&(Lt.ambientLightColor.value=H.state.ambient,Lt.lightProbe.value=H.state.probe,Lt.directionalLights.value=H.state.directional,Lt.directionalLightShadows.value=H.state.directionalShadow,Lt.spotLights.value=H.state.spot,Lt.spotLightShadows.value=H.state.spotShadow,Lt.rectAreaLights.value=H.state.rectArea,Lt.ltc_1.value=H.state.rectAreaLTC1,Lt.ltc_2.value=H.state.rectAreaLTC2,Lt.pointLights.value=H.state.point,Lt.pointLightShadows.value=H.state.pointShadow,Lt.hemisphereLights.value=H.state.hemi,Lt.directionalShadowMap.value=H.state.directionalShadowMap,Lt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Lt.spotShadowMap.value=H.state.spotShadowMap,Lt.spotLightMatrix.value=H.state.spotLightMatrix,Lt.spotLightMap.value=H.state.spotLightMap,Lt.pointShadowMap.value=H.state.pointShadowMap,Lt.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=kt,j.uniformsList=null,kt}function Df(P){if(P.uniformsList===null){const G=P.currentProgram.getUniforms();P.uniformsList=uc.seqWithValue(G.seq,P.uniforms)}return P.uniformsList}function Uf(P,G){const Z=Pt.get(P);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function Em(P,G,Z,j,H){G.isScene!==!0&&(G=Re),D.resetTextureUnits();const at=G.fog,xt=j.isMeshStandardMaterial?G.environment:null,St=b===null?M.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Qo,At=(j.isMeshStandardMaterial?q:C).get(j.envMap||xt),Bt=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,kt=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Lt=!!Z.morphAttributes.position,ne=!!Z.morphAttributes.normal,ue=!!Z.morphAttributes.color;let Fe=hs;j.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Fe=M.toneMapping);const Ie=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,se=Ie!==void 0?Ie.length:0,Ut=Pt.get(j),Ye=m.state.lights;if(ut===!0&&(wt===!0||P!==v)){const rn=P===v&&j.id===y;ht.setState(j,P,rn)}let he=!1;j.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Ye.state.version||Ut.outputColorSpace!==St||H.isBatchedMesh&&Ut.batching===!1||!H.isBatchedMesh&&Ut.batching===!0||H.isBatchedMesh&&Ut.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ut.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ut.instancing===!1||!H.isInstancedMesh&&Ut.instancing===!0||H.isSkinnedMesh&&Ut.skinning===!1||!H.isSkinnedMesh&&Ut.skinning===!0||H.isInstancedMesh&&Ut.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ut.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ut.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ut.instancingMorph===!1&&H.morphTexture!==null||Ut.envMap!==At||j.fog===!0&&Ut.fog!==at||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ht.numPlanes||Ut.numIntersection!==ht.numIntersection)||Ut.vertexAlphas!==Bt||Ut.vertexTangents!==kt||Ut.morphTargets!==Lt||Ut.morphNormals!==ne||Ut.morphColors!==ue||Ut.toneMapping!==Fe||Ut.morphTargetsCount!==se)&&(he=!0):(he=!0,Ut.__version=j.version);let si=Ut.currentProgram;he===!0&&(si=ha(j,G,H));let js=!1,In=!1,ur=!1;const Ee=si.getUniforms(),Wn=Ut.uniforms;if(It.useProgram(si.program)&&(js=!0,In=!0,ur=!0),j.id!==y&&(y=j.id,In=!0),js||v!==P){It.buffers.depth.getReversed()?(dt.copy(P.projectionMatrix),_g(dt),yg(dt),Ee.setValue(O,"projectionMatrix",dt)):Ee.setValue(O,"projectionMatrix",P.projectionMatrix),Ee.setValue(O,"viewMatrix",P.matrixWorldInverse);const En=Ee.map.cameraPosition;En!==void 0&&En.setValue(O,Gt.setFromMatrixPosition(P.matrixWorld)),Jt.logarithmicDepthBuffer&&Ee.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ee.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),v!==P&&(v=P,In=!0,ur=!0)}if(H.isSkinnedMesh){Ee.setOptional(O,H,"bindMatrix"),Ee.setOptional(O,H,"bindMatrixInverse");const rn=H.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Ee.setValue(O,"boneTexture",rn.boneTexture,D))}H.isBatchedMesh&&(Ee.setOptional(O,H,"batchingTexture"),Ee.setValue(O,"batchingTexture",H._matricesTexture,D),Ee.setOptional(O,H,"batchingIdTexture"),Ee.setValue(O,"batchingIdTexture",H._indirectTexture,D),Ee.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&Ee.setValue(O,"batchingColorTexture",H._colorsTexture,D));const Xn=Z.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&Ot.update(H,Z,si),(In||Ut.receiveShadow!==H.receiveShadow)&&(Ut.receiveShadow=H.receiveShadow,Ee.setValue(O,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Wn.envMap.value=At,Wn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&G.environment!==null&&(Wn.envMapIntensity.value=G.environmentIntensity),In&&(Ee.setValue(O,"toneMappingExposure",M.toneMappingExposure),Ut.needsLights&&Am(Wn,ur),at&&j.fog===!0&&vt.refreshFogUniforms(Wn,at),vt.refreshMaterialUniforms(Wn,j,W,K,m.state.transmissionRenderTarget[P.id]),uc.upload(O,Df(Ut),Wn,D)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(uc.upload(O,Df(Ut),Wn,D),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ee.setValue(O,"center",H.center),Ee.setValue(O,"modelViewMatrix",H.modelViewMatrix),Ee.setValue(O,"normalMatrix",H.normalMatrix),Ee.setValue(O,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const rn=j.uniformsGroups;for(let En=0,il=rn.length;En<il;En++){const ms=rn[En];B.update(ms,si),B.bind(ms,si)}}return si}function Am(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function Rm(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(P,G,Z){Pt.get(P.texture).__webglTexture=G,Pt.get(P.depthTexture).__webglTexture=Z;const j=Pt.get(P);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Z===void 0,j.__autoAllocateDepthBuffer||Kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,G){const Z=Pt.get(P);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0};const Cm=O.createFramebuffer();this.setRenderTarget=function(P,G=0,Z=0){b=P,E=G,T=Z;let j=!0,H=null,at=!1,xt=!1;if(P){const At=Pt.get(P);if(At.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(O.FRAMEBUFFER,null),j=!1;else if(At.__webglFramebuffer===void 0)D.setupRenderTarget(P);else if(At.__hasExternalTextures)D.rebindTextures(P,Pt.get(P.texture).__webglTexture,Pt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Lt=P.depthTexture;if(At.__boundDepthTexture!==Lt){if(Lt!==null&&Pt.has(Lt)&&(P.width!==Lt.image.width||P.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(P)}}const Bt=P.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(xt=!0);const kt=Pt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(kt[G])?H=kt[G][Z]:H=kt[G],at=!0):P.samples>0&&D.useMultisampledRTT(P)===!1?H=Pt.get(P).__webglMultisampledFramebuffer:Array.isArray(kt)?H=kt[Z]:H=kt,R.copy(P.viewport),U.copy(P.scissor),L=P.scissorTest}else R.copy(Rt).multiplyScalar(W).floor(),U.copy(Ft).multiplyScalar(W).floor(),L=jt;if(Z!==0&&(H=Cm),It.bindFramebuffer(O.FRAMEBUFFER,H)&&j&&It.drawBuffers(P,H),It.viewport(R),It.scissor(U),It.setScissorTest(L),at){const At=Pt.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,At.__webglTexture,Z)}else if(xt){const At=Pt.get(P.texture),Bt=G;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,At.__webglTexture,Z,Bt)}else if(P!==null&&Z!==0){const At=Pt.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,At.__webglTexture,Z)}y=-1},this.readRenderTargetPixels=function(P,G,Z,j,H,at,xt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Pt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St){It.bindFramebuffer(O.FRAMEBUFFER,St);try{const At=P.texture,Bt=At.format,kt=At.type;if(!Jt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-j&&Z>=0&&Z<=P.height-H&&O.readPixels(G,Z,j,H,Xt.convert(Bt),Xt.convert(kt),at)}finally{const At=b!==null?Pt.get(b).__webglFramebuffer:null;It.bindFramebuffer(O.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(P,G,Z,j,H,at,xt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Pt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St){const At=P.texture,Bt=At.format,kt=At.type;if(!Jt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=P.width-j&&Z>=0&&Z<=P.height-H){It.bindFramebuffer(O.FRAMEBUFFER,St);const Lt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Lt),O.bufferData(O.PIXEL_PACK_BUFFER,at.byteLength,O.STREAM_READ),O.readPixels(G,Z,j,H,Xt.convert(Bt),Xt.convert(kt),0);const ne=b!==null?Pt.get(b).__webglFramebuffer:null;It.bindFramebuffer(O.FRAMEBUFFER,ne);const ue=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Mg(O,ue,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Lt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,at),O.deleteBuffer(Lt),O.deleteSync(ue),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,G=null,Z=0){P.isTexture!==!0&&(So("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,P=arguments[1]);const j=Math.pow(2,-Z),H=Math.floor(P.image.width*j),at=Math.floor(P.image.height*j),xt=G!==null?G.x:0,St=G!==null?G.y:0;D.setTexture2D(P,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,xt,St,H,at),It.unbindTexture()};const Pm=O.createFramebuffer(),Im=O.createFramebuffer();this.copyTextureToTexture=function(P,G,Z=null,j=null,H=0,at=null){P.isTexture!==!0&&(So("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,P=arguments[1],G=arguments[2],at=arguments[3]||0,Z=null),at===null&&(H!==0?(So("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=H,H=0):at=0);let xt,St,At,Bt,kt,Lt,ne,ue,Fe;const Ie=P.isCompressedTexture?P.mipmaps[at]:P.image;if(Z!==null)xt=Z.max.x-Z.min.x,St=Z.max.y-Z.min.y,At=Z.isBox3?Z.max.z-Z.min.z:1,Bt=Z.min.x,kt=Z.min.y,Lt=Z.isBox3?Z.min.z:0;else{const Xn=Math.pow(2,-H);xt=Math.floor(Ie.width*Xn),St=Math.floor(Ie.height*Xn),P.isDataArrayTexture?At=Ie.depth:P.isData3DTexture?At=Math.floor(Ie.depth*Xn):At=1,Bt=0,kt=0,Lt=0}j!==null?(ne=j.x,ue=j.y,Fe=j.z):(ne=0,ue=0,Fe=0);const se=Xt.convert(G.format),Ut=Xt.convert(G.type);let Ye;G.isData3DTexture?(D.setTexture3D(G,0),Ye=O.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(D.setTexture2DArray(G,0),Ye=O.TEXTURE_2D_ARRAY):(D.setTexture2D(G,0),Ye=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);const he=O.getParameter(O.UNPACK_ROW_LENGTH),si=O.getParameter(O.UNPACK_IMAGE_HEIGHT),js=O.getParameter(O.UNPACK_SKIP_PIXELS),In=O.getParameter(O.UNPACK_SKIP_ROWS),ur=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ie.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ie.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Bt),O.pixelStorei(O.UNPACK_SKIP_ROWS,kt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Lt);const Ee=P.isDataArrayTexture||P.isData3DTexture,Wn=G.isDataArrayTexture||G.isData3DTexture;if(P.isDepthTexture){const Xn=Pt.get(P),rn=Pt.get(G),En=Pt.get(Xn.__renderTarget),il=Pt.get(rn.__renderTarget);It.bindFramebuffer(O.READ_FRAMEBUFFER,En.__webglFramebuffer),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,il.__webglFramebuffer);for(let ms=0;ms<At;ms++)Ee&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.get(P).__webglTexture,H,Lt+ms),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.get(G).__webglTexture,at,Fe+ms)),O.blitFramebuffer(Bt,kt,xt,St,ne,ue,xt,St,O.DEPTH_BUFFER_BIT,O.NEAREST);It.bindFramebuffer(O.READ_FRAMEBUFFER,null),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||P.isRenderTargetTexture||Pt.has(P)){const Xn=Pt.get(P),rn=Pt.get(G);It.bindFramebuffer(O.READ_FRAMEBUFFER,Pm),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,Im);for(let En=0;En<At;En++)Ee?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xn.__webglTexture,H,Lt+En):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Xn.__webglTexture,H),Wn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,rn.__webglTexture,at,Fe+En):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,rn.__webglTexture,at),H!==0?O.blitFramebuffer(Bt,kt,xt,St,ne,ue,xt,St,O.COLOR_BUFFER_BIT,O.NEAREST):Wn?O.copyTexSubImage3D(Ye,at,ne,ue,Fe+En,Bt,kt,xt,St):O.copyTexSubImage2D(Ye,at,ne,ue,Bt,kt,xt,St);It.bindFramebuffer(O.READ_FRAMEBUFFER,null),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Wn?P.isDataTexture||P.isData3DTexture?O.texSubImage3D(Ye,at,ne,ue,Fe,xt,St,At,se,Ut,Ie.data):G.isCompressedArrayTexture?O.compressedTexSubImage3D(Ye,at,ne,ue,Fe,xt,St,At,se,Ie.data):O.texSubImage3D(Ye,at,ne,ue,Fe,xt,St,At,se,Ut,Ie):P.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,at,ne,ue,xt,St,se,Ut,Ie.data):P.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,at,ne,ue,Ie.width,Ie.height,se,Ie.data):O.texSubImage2D(O.TEXTURE_2D,at,ne,ue,xt,St,se,Ut,Ie);O.pixelStorei(O.UNPACK_ROW_LENGTH,he),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,si),O.pixelStorei(O.UNPACK_SKIP_PIXELS,js),O.pixelStorei(O.UNPACK_SKIP_ROWS,In),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ur),at===0&&G.generateMipmaps&&O.generateMipmap(Ye),It.unbindTexture()},this.copyTextureToTexture3D=function(P,G,Z=null,j=null,H=0){return P.isTexture!==!0&&(So("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,j=arguments[1]||null,P=arguments[2],G=arguments[3],H=arguments[4]||0),So('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,G,Z,j,H)},this.initRenderTarget=function(P){Pt.get(P).__webglFramebuffer===void 0&&D.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?D.setTextureCube(P,0):P.isData3DTexture?D.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?D.setTexture2DArray(P,0):D.setTexture2D(P,0),It.unbindTexture()},this.resetState=function(){E=0,T=0,b=null,It.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}const pw=15,mw=6,gw=1.8,Lc=8,qd=.85,Yd=.98,Dc=.003,ae=90,Qc=1.7,Zd=500,xw=60,vw=18,Mw=20,_w=28,yw=12,ww=20,Sw=350,bw=50,Tw=45,Ew=40,Aw=60,g0=6,Rw=25,Cw=8,Pw=25,Iw=50,Lw=10,Dw=10,Uw=10,Nw=8,ks=280,rh=2.5,zw=6,$d=1.5,bo=5,jd=2.5,xo=12,be=30,Fw=5,Ow=8,Bw=2.2,F={fog:396308,ground:1720360,leaf:1722400,leafGlow:4521898,mushCap:8926190,mushGlow:13400063,mushStem:2756928,crystal:3407837,crystalCore:8978414,firefly:15662950,fireflyB:6750173,spore:12320665,ambient:2241365,moon:12307694,jellyBell:7833855,jellyGlow:11193599,jellyTent:6715340,puffBody:16768460,puffGlow:16755336,puffEye:2236962,puffCheek:16746649,deerBody:11202303,deerGlow:8969727,deerAntler:13434862,deerEye:1127236,mothWing:11206553,mothGlow:13434794,mothBody:5596723,mothSpot:16777215,grassTip:3385941,grassPurple:[1706530,2363962,4857960,11158766,13400063,16746717,2757952,6697898,11158783],grassBlue:[660514,858677,2114917,4500206,6741503,8974079,1387077,3368618,4500223],grassTeal:[662042,1059362,2121808,4517563,6750173,11206536,1720376,3385992,4521915],fern:1725744,fernGlow:3394662,flower:16742348,flowerGlow:16751069,flowerStem:1721376,reed:2774325,reedTip:4504422,orbGold:16763955,orbGlow:16772778,orbInner:16775389,laserPink:16737962,laserGlow:16746700,obeliskBlack:657938,obeliskPink:16729258,moatBlue:3377356,rainbow:[16724787,16746547,16772659,3407718,3377407,8926207],wispCore:11202303,wispGlow:14544639,wispTrail:8965375,dandStem:4482611,dandHead:16777198,dandSeed:16775389,dandSeedGlow:16777215,fairyMush:13404415,fairyGlow:14527231,fairyRing:11167470,bubbleIris:11197951,bubbleShine:16777215,bubblePop:13434862,starMote:16772829,pondWater:2254506,pondGlow:3377356,lilyPad:2263108,lilyFlower:16746700,lilyGlow:16755421,echoBloom:11206604,rockBase:2763314,rockMoss:1721378,rockLight:3816005,skyDeep:198160,thornOrb:16755268,thornOrbGlow:16764006,thornPetal:6689075,thornSpike:2759184,thornStem:1717024,helixStem:1714240,helixPod:6697983,helixPodGlow:8934911,helixRing:4465322,helixNode:5588172,snapBody:2271846,snapBodyGlow:4521864,snapTip:6750122,snapTipGlow:8978380,snapFrond:1730116},on=new dw({antialias:!0,powerPreference:"default"});on.setSize(window.innerWidth,window.innerHeight);on.setPixelRatio(Math.min(window.devicePixelRatio,1.5));on.shadowMap.enabled=!0;on.shadowMap.type=Tp;on.toneMapping=Ap;on.toneMappingExposure=2.8;on.outputColorSpace=bn;document.body.appendChild(on.domElement);const gn=new Nn(65,window.innerWidth/window.innerHeight,.1,300),x0=new u0,ct=new Vg;ct.background=new ot(F.skyDeep);ct.fog=new sf(F.fog,.01);window.addEventListener("resize",()=>{gn.aspect=window.innerWidth/window.innerHeight,gn.updateProjectionMatrix(),on.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("visibilitychange",()=>{document.hidden||x0.getDelta()});const v0={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class aa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Gw=new pf(-1,1,1,-1,0,1);class kw extends we{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}}const Hw=new kw;class M0{constructor(t){this._mesh=new I(Hw,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Gw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Vw extends aa{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Rn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ec.clone(t.uniforms),this.material=new Rn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new M0(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Kd extends aa{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class Ww extends aa{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Xw{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ft);this._width=n.width,this._height=n.height,e=new ui(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Hi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vw(v0),this.copyPass.material.blending=ki,this.clock=new u0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Kd!==void 0&&(r instanceof Kd?n=!0:r instanceof Ww&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qw extends aa{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ot}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const Yw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class nr extends aa{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ft(t.x,t.y):new ft(256,256),this.clearColor=new ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new ui(o,r,{type:Hi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new ui(o,r,{type:Hi});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new ui(o,r,{type:Hi});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),o=Math.round(o/2),r=Math.round(r/2)}const a=Yw;this.highPassUniforms=Ec.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ft(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=v0;this.copyUniforms=Ec.clone(u.uniforms),this.blendMaterial=new Rn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ce,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ot,this.oldClearAlpha=1,this.basic=new $,this.fsQuad=new M0(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new ft(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=nr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=nr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Rn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ft(.5,.5)},direction:{value:new ft(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Rn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}nr.BlurDirectionX=new ft(1,0);nr.BlurDirectionY=new ft(0,1);let Hs=null,gf=!0;try{const i=new qw(ct,gn),t=new nr(new ft(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2)),.6,.4,.85);Hs=new Xw(on),Hs.addPass(i),Hs.addPass(t)}catch(i){console.warn("Bloom unavailable, falling back to direct render:",i.message),gf=!1}window.addEventListener("resize",()=>{gf&&Hs&&Hs.setSize(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2))});function Jd(){gf&&Hs?Hs.render():on.render(ct,gn)}const xf=new Ax(F.ambient,F.ground,.65);ct.add(xf);const ni=new Kc(F.moon,.85);ni.position.set(30,60,-20);ni.castShadow=!0;ni.shadow.camera.left=-90;ni.shadow.camera.right=90;ni.shadow.camera.top=90;ni.shadow.camera.bottom=-90;ni.shadow.camera.near=1;ni.shadow.camera.far=250;ni.shadow.mapSize.set(1024,1024);ni.shadow.bias=-.001;ct.add(ni);const vf=new Kc(2241365,.3);vf.position.set(-40,45,25);ct.add(vf);const _0=new Kc(3359829,.4);_0.position.set(-25,15,30);ct.add(_0);const y0=new ar(3368516,.7,100);y0.position.set(0,.5,0);ct.add(y0);const w0=new Kc(4478327,.4);w0.position.set(-10,25,40);ct.add(w0);const Mf=new ar(6719624,.6,20);ct.add(Mf);const As=[];function Zw(){for(let i=0;i<Fw;i++){const t=new ar(F.crystal,0,16);ct.add(t),As.push(t)}}const Cr=new ar(F.orbGold,0,15);ct.add(Cr);const ze={};let $r=0,Vs=0,tl=!1,S0=!1,_f=0,yf=0,wf=!1,el=!1,lr=!1,Uc=null,qs=null,ah=0,ch=0,lh=null;function $w(i){lh=i}function jw(i){S0=i}function Kw(i){el=i}function ca(){!S0&&lh&&lh()}window.addEventListener("keydown",i=>{ze[i.code]=!0,"Space ShiftLeft ShiftRight KeyW KeyA KeyS KeyD".split(" ").indexOf(i.code)>=0&&i.preventDefault(),ca()});window.addEventListener("keyup",i=>{ze[i.code]=!1});window.addEventListener("blur",()=>{for(const i in ze)ze[i]=!1;tl=!1});on.domElement.addEventListener("mousedown",()=>{tl=!0,ca()});window.addEventListener("mouseup",()=>{tl=!1});window.addEventListener("mousemove",i=>{tl&&($r-=i.movementX*Dc,Vs-=i.movementY*Dc,Vs=Math.max(-1,Math.min(1,Vs)))});const Jw="ontouchstart"in window||navigator.maxTouchPoints>0,la=document.getElementById("joy-zone"),Nc=document.getElementById("joy-knob"),Sf=document.getElementById("btn-jump");Jw&&(la.style.display="block",Sf.style.display="block",document.getElementById("controls").textContent="Stick: Move · Drag right: Look · JUMP");function b0(i,t){const e=la.getBoundingClientRect();let n=i-(e.left+e.width/2),s=t-(e.top+e.height/2);const o=Math.sqrt(n*n+s*s),r=52;o>r&&(n=n/o*r,s=s/o*r),_f=n/r,yf=s/r,Nc.style.left=40+n+"px",Nc.style.top=40+s+"px"}la.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),ca();const t=i.changedTouches[0];Uc=t.identifier,wf=!0,b0(t.clientX,t.clientY)},{passive:!1});la.addEventListener("touchmove",i=>{i.preventDefault(),i.stopPropagation();for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Uc&&b0(i.changedTouches[t].clientX,i.changedTouches[t].clientY)},{passive:!1});la.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation();for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Uc&&(Uc=null,wf=!1,_f=0,yf=0,Nc.style.left="40px",Nc.style.top="40px")},{passive:!1});Sf.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),ca(),el=!0},{passive:!1});Sf.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation(),el=!1},{passive:!1});on.domElement.addEventListener("touchstart",i=>{i.preventDefault(),ca();for(let t=0;t<i.changedTouches.length;t++){const e=i.changedTouches[t];e.clientX>window.innerWidth*.3&&qs===null&&(qs=e.identifier,ah=e.clientX,ch=e.clientY)}},{passive:!1});on.domElement.addEventListener("touchmove",i=>{i.preventDefault();for(let t=0;t<i.changedTouches.length;t++){const e=i.changedTouches[t];e.identifier===qs&&($r-=(e.clientX-ah)*Dc,Vs-=(e.clientY-ch)*Dc,Vs=Math.max(-1,Math.min(1,Vs)),ah=e.clientX,ch=e.clientY)}},{passive:!1});on.domElement.addEventListener("touchend",i=>{for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===qs&&(qs=null)},{passive:!1});on.domElement.addEventListener("touchcancel",i=>{for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===qs&&(qs=null)},{passive:!1});function Qw(){let i=0,t=0;ze.KeyW&&(t-=1),ze.KeyS&&(t+=1),ze.KeyA&&(i-=1),ze.KeyD&&(i+=1),wf&&(i+=_f,t+=yf);const e=Math.sqrt(i*i+t*t);e>1&&(i/=e,t/=e);const n=mw*(ze.ShiftLeft||ze.ShiftRight||lr?gw:1),s=Math.sin($r),o=Math.cos($r);return{x:(i*o+t*s)*n,z:(-i*s+t*o)*n}}const Pn={mushCap:new Q(.5,8,5),mushStem:new _t(.06,.1,.6,5),mushDot:new Q(.06,4,3),crystal:new _t(0,.35,1.8,6),crystalSm:new _t(0,.18,.9,5),fly:new Q(.06,4,3),spore:new Q(.04,3,3),dandSeed:new Q(.025,3,3),bubble:new Q(.15,8,6),starMote:new Q(.03,3,3),dustMote:new Q(.035,3,3)};let Or=42;function S(){return Or=Or*16807%2147483647,(Or&2147483647)/2147483647}function T0(){return Or}function uh(i){Or=i}function Wa(i,t){let e=i*374761393+t*668265263+1274126177|0;return e=(e^e>>13)*1274126177|0,(e&2147483647)/2147483647}function Br(i){return i*i*(3-2*i)}function E0(i,t){const e=Math.floor(i),n=Math.floor(t),s=Br(i-e),o=Br(t-n),r=Wa(e,n),a=Wa(e+1,n),c=Wa(e,n+1),l=Wa(e+1,n+1);return r+(a-r)*s+(c-r)*o+(r-a-c+l)*s*o}function Qd(i,t,e){let n=0,s=.5,o=1;for(let r=0;r<e;r++)n+=E0(i*o,t*o)*s,s*=.5,o*=2;return n}const hh=[];function fh(i,t,e){hh.push({x:i,z:t,r:e})}function Yt(i,t){const e=Math.sqrt(i*i+t*t),n=1-Br(Math.max(0,(e-ae*.7)/(ae*.3))),s=Br(Math.min(1,e/8)),o=.035,r=Qd(i*o,t*o,4),a=Qd(i*o*2.7+50,t*o*2.7+50,3),c=E0(i*.15,t*.15);let l=r*2.5+a*.8+c*.15;l*=n*s;for(let u=0;u<hh.length;u++){const h=hh[u],d=i-h.x,p=t-h.z,g=Math.sqrt(d*d+p*p);if(g<h.r*2){const x=Br(Math.max(0,(g-h.r*.5)/(h.r*1.5)));l*=x}}return l}function t1(){const t=document.createElement("canvas");t.width=2048,t.height=2048;const e=t.getContext("2d"),n=Math.random;e.fillStyle="#2a5038",e.fillRect(0,0,2048,2048);const s=[{col:"rgba(40,80,50,0.35)",n:15,r:120},{col:"rgba(60,50,25,0.25)",n:12,r:100},{col:"rgba(30,65,55,0.25)",n:10,r:110},{col:"rgba(55,70,35,0.2)",n:8,r:90},{col:"rgba(35,40,25,0.25)",n:8,r:80},{col:"rgba(80,55,25,0.22)",n:8,r:95},{col:"rgba(70,35,20,0.20)",n:6,r:85},{col:"rgba(85,70,35,0.18)",n:6,r:80}];for(const u of s)for(let h=0;h<u.n;h++){const d=n()*2048,p=n()*2048,g=u.r*(.5+n()*.8),x=e.createRadialGradient(d,p,0,d,p,g);x.addColorStop(0,u.col),x.addColorStop(.6,u.col.replace(/[\d.]+\)$/,parseFloat(u.col.match(/[\d.]+\)$/)[0])*.4+")")),x.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=x;for(let f=-1;f<=1;f++)for(let m=-1;m<=1;m++)e.beginPath(),e.arc(d+f*2048,p+m*2048,g,0,6.28),e.fill()}const o=[{n:80,r:25,colors:["rgba(20,45,25,0.2)","rgba(35,55,28,0.18)","rgba(28,22,12,0.2)","rgba(15,38,30,0.15)","rgba(55,35,15,0.2)","rgba(48,28,12,0.18)"]},{n:200,r:10,colors:["rgba(30,55,30,0.14)","rgba(45,35,18,0.12)","rgba(22,48,35,0.12)","rgba(38,28,14,0.1)","rgba(52,38,18,0.12)","rgba(42,25,10,0.1)"]},{n:500,r:4,colors:["rgba(25,50,28,0.1)","rgba(40,30,15,0.08)","rgba(18,42,32,0.08)","rgba(32,25,10,0.06)","rgba(45,32,12,0.08)","rgba(38,22,8,0.06)"]}];for(const u of o)for(let h=0;h<u.n;h++){e.fillStyle=u.colors[Math.floor(n()*u.colors.length)];const d=n()*2048,p=n()*2048;e.beginPath(),e.arc(d,p,u.r+n()*u.r*.6,0,6.28),e.fill()}const r=["rgba(60,200,100,0.06)","rgba(50,180,120,0.05)","rgba(80,160,200,0.04)","rgba(100,220,150,0.05)"];for(let u=0;u<25;u++){let h=n()*2048,d=n()*2048;const p=r[Math.floor(n()*r.length)];e.strokeStyle=p,e.lineWidth=1+n()*2,e.beginPath(),e.moveTo(h,d);let g=n()*6.28;const x=12+Math.floor(n()*16);for(let f=0;f<x;f++)g+=Math.sin(f*.6)*.5+(n()-.5)*.4,h+=Math.cos(g)*(6+n()*10),d+=Math.sin(g)*(6+n()*10),e.lineTo(h,d);if(e.stroke(),n()<.6){const f=e.createRadialGradient(h,d,0,h,d,6+n()*8);f.addColorStop(0,p.replace("0.0","0.1")),f.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=f,e.beginPath(),e.arc(h,d,6+n()*8,0,6.28),e.fill()}}e.lineWidth=1.2;for(let u=0;u<30;u++){e.strokeStyle=`rgba(20,12,5,${.15+n()*.12})`;let h=n()*2048,d=n()*2048,p=n()*6.28;e.beginPath(),e.moveTo(h,d);for(let g=0;g<10;g++)p+=Math.sin(g*.7)*.5+(n()-.5)*.35,h+=Math.cos(p)*(8+n()*14),d+=Math.sin(p)*(8+n()*14),e.lineTo(h,d);e.stroke()}const a=["rgba(55,32,12,0.3)","rgba(70,42,18,0.25)","rgba(40,55,22,0.22)","rgba(22,50,28,0.2)","rgba(60,45,20,0.25)","rgba(30,60,35,0.18)","rgba(50,25,8,0.22)","rgba(65,55,25,0.18)","rgba(75,50,20,0.28)","rgba(85,60,30,0.22)","rgba(45,25,10,0.25)","rgba(90,75,45,0.18)"];for(let u=0;u<3500;u++){e.fillStyle=a[Math.floor(n()*a.length)];const h=n()*2048,d=n()*2048,p=.8+n()*2.5;e.beginPath(),e.arc(h,d,p,0,6.28),e.fill()}for(let u=0;u<40;u++){const h=n()*2048,d=n()*2048,p=15+n()*35,g=e.createRadialGradient(h,d,0,h,d,p),x=n();x<.3?(g.addColorStop(0,"rgba(45,90,50,0.18)"),g.addColorStop(1,"rgba(25,55,30,0)")):x<.5?(g.addColorStop(0,"rgba(35,75,60,0.16)"),g.addColorStop(1,"rgba(20,50,38,0)")):x<.7?(g.addColorStop(0,"rgba(55,75,35,0.14)"),g.addColorStop(1,"rgba(30,45,20,0)")):x<.85?(g.addColorStop(0,"rgba(75,55,25,0.14)"),g.addColorStop(1,"rgba(45,30,12,0)")):(g.addColorStop(0,"rgba(65,35,20,0.12)"),g.addColorStop(1,"rgba(35,18,10,0)")),e.fillStyle=g,e.beginPath(),e.arc(h,d,p,0,6.28),e.fill()}for(let u=0;u<400;u++){const h=n()*2048,d=n()*2048,p=1.5+n()*3.5,g=Math.floor(28+n()*42);e.fillStyle=`rgba(${g},${g-4},${g-10},0.3)`,e.beginPath(),e.arc(h,d,p,0,6.28),e.fill()}e.lineWidth=.7;for(let u=0;u<80;u++){const h=n()*2048,d=n()*2048,p=4+n()*18,g=n()*6.28;e.strokeStyle=`rgba(22,12,5,${.15+n()*.1})`,e.beginPath(),e.moveTo(h,d),e.lineTo(h+Math.cos(g)*p,d+Math.sin(g)*p),e.stroke()}const c=["rgba(80,220,120,0.08)","rgba(60,200,160,0.07)","rgba(100,180,220,0.06)","rgba(120,100,200,0.05)","rgba(200,150,80,0.04)","rgba(60,180,180,0.06)"];for(let u=0;u<300;u++){const h=n()*2048,d=n()*2048,p=c[Math.floor(n()*c.length)];if(e.fillStyle=p,e.beginPath(),e.arc(h,d,1+n()*2,0,6.28),e.fill(),n()<.3){const g=e.createRadialGradient(h,d,0,h,d,4+n()*5);g.addColorStop(0,p),g.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=g,e.beginPath(),e.arc(h,d,4+n()*5,0,6.28),e.fill()}}for(let u=0;u<150;u++){const h=n()*2048,d=n()*2048;e.fillStyle=`rgba(120,180,130,${.04+n()*.04})`,e.beginPath(),e.arc(h,d,.5+n()*1.2,0,6.28),e.fill()}const l=new sa(t);return l.wrapS=l.wrapT=jo,l.repeat.set(8,8),l.colorSpace=bn,l}function Xa(i,t){let e=i*127961+t*372143+918273|0;return e=(e^e>>13)*517261|0,(e&2147483647)/2147483647}function dh(i){return i*i*(3-2*i)}function A0(i,t){const e=Math.floor(i),n=Math.floor(t),s=dh(i-e),o=dh(t-n),r=Xa(e,n),a=Xa(e+1,n),c=Xa(e,n+1),l=Xa(e+1,n+1);return r+(a-r)*s+(c-r)*o+(r-a-c+l)*s*o}function kl(i,t,e){let n=0,s=.5,o=1;for(let r=0;r<e;r++)n+=A0(i*o,t*o)*s,s*=.5,o*=2;return n}function e1(){const i=t1(),t=ae*3,e=200,n=new ve(t,t,e,e),s=n.attributes.position,o=[[.55,.95,.6],[.45,.85,.95],[.8,.5,1],[.85,.65,.4],[.5,1.1,.65],[.4,.7,.9],[.9,.55,.35],[.8,.75,.45]],r=s.count,a=new Float32Array(r*3);for(let l=0;l<r;l++){const u=s.getX(l),h=s.getY(l);Math.sqrt(u*u+h*h)<ae*1.4?s.setZ(l,Yt(u,-h)):s.setZ(l,0);const p=u,g=-h,x=kl(p*.025+100,g*.025+200,3),f=kl(p*.06+300,g*.06+400,2),m=A0(p*.15+500,g*.15+600),w=kl(p*.04-150,g*.04-250,3),_=Math.floor(x*o.length*.999),M=Math.floor(w*o.length*.999),A=o[_],E=o[M],T=dh(f),b=.85+m*.3,y=(A[0]*(1-T)+E[0]*T)*b,v=(A[1]*(1-T)+E[1]*T)*b,R=(A[2]*(1-T)+E[2]*T)*b,L=1+Yt(p,g)*.06;a[l*3]=y*L,a[l*3+1]=v*L,a[l*3+2]=R*L}n.setAttribute("color",new Ue(a,3)),n.computeVertexNormals();const c=new I(n,new J({map:i,vertexColors:!0,roughness:.75,metalness:0,emissive:1512464,emissiveIntensity:.28}));return c.rotation.x=-Math.PI/2,c.receiveShadow=!0,ct.add(c),c}const jr=new re;let zc=null;const Rs=120;let tp=null,hc=null,ph=null,mh=null,Oo=null;const Bo=[],n1=3;let Hl=0;function cs(i,t){const e=i>>16&255,n=i>>8&255,s=i&255;return`rgba(${e},${n},${s},${t})`}function ls(i,t,e,n,s,o,r){i.save(),i.translate(t,e),Math.abs(s/n-1)>.01&&i.scale(1,s/n);const a=i.createRadialGradient(0,0,0,0,0,n);a.addColorStop(0,cs(o,r)),a.addColorStop(.25,cs(o,r*.55)),a.addColorStop(.55,cs(o,r*.15)),a.addColorStop(.85,cs(o,r*.03)),a.addColorStop(1,cs(o,0)),i.fillStyle=a,i.beginPath(),i.arc(0,0,n,0,6.2832),i.fill(),i.restore()}function Vl(i,t,e,n,s,o,r,a){ls(i,t,e,n,s,o,r),t-n<0&&ls(i,t+a,e,n,s,o,r),t+n>a&&ls(i,t-a,e,n,s,o,r)}function i1(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),s=Math.random,o=n.createLinearGradient(0,0,0,1024);o.addColorStop(0,"#030610"),o.addColorStop(.2,"#050a18"),o.addColorStop(.4,"#0a1222"),o.addColorStop(.55,"#0c1828"),o.addColorStop(.75,"#081018"),o.addColorStop(1,"#040810"),n.fillStyle=o,n.fillRect(0,0,2048,1024);const r=[{x:.12,y:.22,rx:.18,ry:.14,col:1717094,a:.14},{x:.42,y:.28,rx:.22,ry:.1,col:2758741,a:.12},{x:.72,y:.18,rx:.16,ry:.12,col:1721446,a:.13},{x:.88,y:.32,rx:.2,ry:.09,col:3348548,a:.1},{x:.28,y:.12,rx:.14,ry:.18,col:2245768,a:.1},{x:.58,y:.38,rx:.18,ry:.07,col:4465220,a:.08},{x:.05,y:.4,rx:.15,ry:.1,col:1586005,a:.09},{x:.52,y:.15,rx:.12,ry:.16,col:2765670,a:.07}];for(const h of r){Vl(n,h.x*2048,h.y*1024,h.rx*2048,h.ry*1024,h.col,h.a,2048);for(let d=0;d<4;d++){const p=(h.x+(s()-.5)*h.rx)*2048,g=(h.y+(s()-.5)*h.ry)*1024,x=h.rx*2048*(.2+s()*.35),f=h.ry*1024*(.2+s()*.4);Vl(n,p,g,x,f,h.col,h.a*(.4+s()*.5),2048)}}const a=[2245802,2245734,4465254,5583701,3368584,2245717,3809894];for(let h=0;h<30;h++){const d=s()*2048,p=s()*1024*.55,g=40+s()*180,x=25+s()*100;Vl(n,d,p,g,x,a[Math.floor(s()*a.length)],.025+s()*.035,2048)}n.save(),n.globalCompositeOperation="screen";const c=.26;for(let h=0;h<50;h++){const d=h/50,p=d*2048,g=(c+Math.sin(d*Math.PI)*.06+(s()-.5)*.02)*1024,x=2048*.05+s()*2048*.035,f=1024*.04*(.4+s()*.6);ls(n,p,g,x,f,4478310,.025+s()*.015)}for(let h=0;h<25;h++){const d=.2+s()*.6,p=d*2048,g=(c+Math.sin(d*Math.PI)*.04)*1024;ls(n,p,g,2048*.03+s()*2048*.02,1024*.02+s()*1024*.01,6719658,.015+s()*.012)}for(let h=0;h<10;h++){const d=.35+s()*.3,p=d*2048,g=(c+Math.sin(d*Math.PI)*.02)*1024;ls(n,p,g,2048*.02,1024*.012,8943462,.01+s()*.008)}n.globalCompositeOperation="source-over",n.restore();for(let h=0;h<12;h++){const d=.1+s()*.8,p=d*2048,g=(c+Math.sin(d*Math.PI)*.04+(s()-.5)*.02)*1024,x=20+s()*60,f=8+s()*20;ls(n,p,g,x,f,132104,.15+s()*.1)}const l=["255,255,255","220,230,255","255,240,220","200,215,255","255,225,200","240,240,255","255,245,235"];for(let h=0;h<5e3;h++){const d=s()*2048,p=s()*1024*.65,g=.3+s()*.7,x=.1+s()*.5;n.fillStyle=`rgba(${l[Math.floor(s()*l.length)]},${x})`,n.beginPath(),n.arc(d,p,g,0,6.28),n.fill()}for(let h=0;h<3e3;h++){const d=s(),p=d*2048,x=(c+Math.sin(d*Math.PI)*.06)*1024+(s()-.5)*1024*.1;if(x<0||x>1024*.6)continue;const f=.2+s()*.6,m=.2+s()*.7;n.fillStyle=`rgba(${l[Math.floor(s()*l.length)]},${m})`,n.beginPath(),n.arc(p,x,f,0,6.28),n.fill()}for(let h=0;h<60;h++){const d=s()*2048,p=s()*1024*.58,g=1.2+s()*1.8,x=6+s()*14,f=s();let m;f<.45?m="255,255,255":f<.65?m="210,225,255":f<.8?m="255,230,200":f<.92?m="190,210,255":m="255,200,180";const w=n.createRadialGradient(d,p,0,d,p,x);w.addColorStop(0,`rgba(${m},0.5)`),w.addColorStop(.1,`rgba(${m},0.18)`),w.addColorStop(.35,`rgba(${m},0.04)`),w.addColorStop(1,`rgba(${m},0)`),n.fillStyle=w,n.beginPath(),n.arc(d,p,x,0,6.28),n.fill(),n.strokeStyle=`rgba(${m},0.12)`,n.lineWidth=.5;const _=x*.8;n.beginPath(),n.moveTo(d-_,p),n.lineTo(d+_,p),n.moveTo(d,p-_),n.lineTo(d,p+_),n.stroke(),n.fillStyle=`rgba(${m},1)`,n.beginPath(),n.arc(d,p,g,0,6.28),n.fill()}for(let h=0;h<8;h++){const d=s()*2048,p=1024*.08+s()*1024*.42,g=50+s()*90;ls(n,d,p,g,g*.7,3359846,.03);for(let x=0;x<100;x++){const f=s()*6.28,m=s()*s()*g,w=d+Math.cos(f)*m,_=p+Math.sin(f)*m*.65;if(w<0||w>2048||_<0||_>1024)continue;const M=.2+s()*.6;n.fillStyle=`rgba(255,255,255,${.25+s()*.6})`,n.beginPath(),n.arc(w,_,M,0,6.28),n.fill()}}for(let h=0;h<15;h++){const d=r[Math.floor(s()*r.length)],p=(d.x+(s()-.5)*d.rx*.5)*2048,g=(d.y+(s()-.5)*d.ry*.5)*1024,x=3+s()*8,f=n.createRadialGradient(p,g,0,p,g,x*3);f.addColorStop(0,cs(d.col,.2)),f.addColorStop(.3,cs(d.col,.06)),f.addColorStop(1,cs(d.col,0)),n.fillStyle=f,n.beginPath(),n.arc(p,g,x*3,0,6.28),n.fill()}const u=new sa(e);return u.colorSpace=bn,u}function s1(){const i=T0(),t=i1(),e=new Q(ks,64,32,0,Math.PI*2,0,Math.PI*.55);zc=new $({map:t,side:Tn,fog:!1,transparent:!1});const n=new I(e,zc);jr.add(n),o1(),r1(),ct.add(jr),uh(i)}function o1(){const i=new Float32Array(Rs*3),t=new Float32Array(Rs*3);hc=new Float32Array(Rs),ph=new Float32Array(Rs),mh=new Float32Array(Rs);const e=[[1,1,1],[.85,.9,1],[1,.94,.86],[.78,.84,1],[1,.88,.78],[.9,.95,1]],n=Math.random,s=ks*.97;for(let a=0;a<Rs;a++){const c=n()*Math.PI*2,l=n()*Math.PI*.48,u=s*Math.cos(c)*Math.sin(l),h=s*Math.cos(l),d=s*Math.sin(c)*Math.sin(l);i[a*3]=u,i[a*3+1]=h,i[a*3+2]=d;const p=e[Math.floor(n()*e.length)];t[a*3]=p[0],t[a*3+1]=p[1],t[a*3+2]=p[2],hc[a]=2+n()*4,ph[a]=n()*Math.PI*2,mh[a]=.5+n()*2.5}const o=new we;o.setAttribute("position",new Ht(i,3)),o.setAttribute("color",new Ht(t,3)),Oo=new Ht(hc.slice(),1),Oo.setUsage(xe),o.setAttribute("size",Oo);const r=new af({vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,fog:!1,blending:ce,depthWrite:!1});tp=new Qp(o,r),jr.add(tp)}function r1(){const i=new $({color:16777215,transparent:!0,opacity:0,fog:!1,blending:ce,depthWrite:!1});for(let t=0;t<n1;t++){const e=new I(new _t(.15,0,12,4),i.clone());e.visible=!1,jr.add(e),Bo.push({mesh:e,mat:e.material,active:!1,life:0,maxLife:0,sx:0,sy:0,sz:0,dx:0,dy:0,dz:0})}}function a1(){let i=null;for(let a=0;a<Bo.length;a++)if(!Bo[a].active){i=Bo[a];break}if(!i)return;const t=Math.random,e=t()*Math.PI*2,n=.1+t()*.35,s=ks*.85;i.sx=s*Math.cos(e)*Math.sin(n),i.sy=s*Math.cos(n),i.sz=s*Math.sin(e)*Math.sin(n);const o=e+(t()-.5)*1,r=80+t()*120;i.dx=Math.cos(o)*r,i.dy=-r*(.5+t()*.5),i.dz=Math.sin(o)*r,i.life=.5+t()*.8,i.maxLife=i.life,i.active=!0,i.mesh.visible=!0}function R0(i,t){if(jr.rotation.y=t*.003,Oo){const e=Oo.array;for(let n=0;n<Rs;n++){const s=hc[n],o=Math.sin(t*mh[n]+ph[n]);e[n]=s*(.65+o*.35)}Oo.needsUpdate=!0}Hl-=i,Hl<=0&&(Hl=4+Math.random()*12,a1());for(let e=0;e<Bo.length;e++){const n=Bo[e];if(!n.active)continue;if(n.life-=i,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}const s=n.life/n.maxLife;n.sx+=n.dx*i,n.sy+=n.dy*i,n.sz+=n.dz*i,n.mesh.position.set(n.sx,n.sy,n.sz),n.mesh.lookAt(n.sx+n.dx,n.sy+n.dy,n.sz+n.dz),n.mesh.rotateX(Math.PI/2),n.mat.opacity=s*.7,n.mesh.scale.setScalar(.6+s*.4)}}function c1(i){if(zc){const t=Math.max(.15,i);zc.color.setRGB(t,t,t)}}const l1=6,qa=64,gh=[];let Fs=null;const wr=[new ot(1734485),new ot(2787447),new ot(5601126),new ot(6706568),new ot(8930406),new ot(3368533)];function u1(){Fs=new re,Fs.visible=!1;for(let i=0;i<l1;i++){const t=1.2+i*.2+Math.sin(i*1.7)*.15,e=ks*t,n=.1+i*.012+Math.sin(i*2.3)*.02,s=ks*n,o=new ve(e,s,qa,3),r=o.attributes.position.array,a=4,c=(qa+1)*a,l=Math.PI*(.45+i*.08+Math.sin(i*.9)*.05),u=-l/2,h=(.25+i*.04+Math.sin(i*1.3)*.02)*Math.PI,d=i*.18-.45;for(let f=0;f<c;f++){const m=Math.floor(f/a),w=f%a,_=m/qa,M=u+_*l+d,E=(w/(a-1)-.5)*.05,T=h+E,b=ks*.92;r[f*3]=Math.sin(M)*Math.sin(T)*b,r[f*3+1]=Math.cos(T)*b,r[f*3+2]=Math.cos(M)*Math.sin(T)*b}o.attributes.position.needsUpdate=!0,o.attributes.position.setUsage(xe),o.computeVertexNormals();const p=new Float32Array(c*3);o.setAttribute("color",new Ue(p,3)),o.attributes.color.setUsage(xe);const g=new $({vertexColors:!0,transparent:!0,opacity:0,side:Dt,blending:ce,depthWrite:!1,fog:!1}),x=new I(o,g);Fs.add(x),gh.push({mesh:x,mat:g,geo:o,colorArr:p,posArr:r,vertCount:c,rows:a,segments:qa,phase:i*1.7+Math.sin(i*.8)*.5,speed:.15+i*.05+Math.sin(i*2.1)*.03,colorShift:i*1.1,elevation:h,arcStart:u,arcSpan:l,azimuthOffset:d})}ct.add(Fs)}let vo=0;function h1(i,t,e,n,s){if(!Fs)return;const o=s==="HEAVY_RAIN"||s==="LUMINOUS_STORM"||s==="FOG_BANK";let r=0;o||(e==="DEEP_NIGHT"?r=.25:e==="NIGHT"&&(r=.08));const a=r>vo?.2:.4;if(vo+=(r-vo)*a*i,vo<.005){Fs.visible=!1;return}Fs.visible=!0;const c=ks*.92;for(let l=0;l<gh.length;l++){const u=gh[l],h=u.colorArr,d=u.posArr,p=u.segments,g=u.rows;u.mat.opacity=vo*(.5+l*.05);for(let x=0;x<=p;x++){const f=x/p,m=Math.sin(f*6+t*u.speed+u.phase)*.5+.5,w=Math.sin(f*3-t*u.speed*.4+u.phase*1.3)*.5+.5,_=Math.sin(f*1.5+t*.07)*.5+.5,M=Math.sin(f*1.2+t*.05+u.phase*.7)*.5+.5,A=(m*.3+w*.25+_*.2+M*.25)*vo,E=(f*3+t*.08+u.colorShift)%wr.length,T=Math.floor(E),b=E-T,y=wr[T%wr.length],v=wr[(T+1)%wr.length],R=(y.r+(v.r-y.r)*b)*A,U=(y.g+(v.g-y.g)*b)*A,L=(y.b+(v.b-y.b)*b)*A,z=c*.025,V=Math.sin(f*5+t*.3+u.phase)*z+Math.sin(f*2.5-t*.15+u.phase*.6)*z*.5;for(let k=0;k<g;k++){const K=x*g+k,W=k/(g-1);let lt;W<.33?lt=W*1.2:W>.67?lt=(1-W)*1.5:lt=.7+Math.sin(W*Math.PI)*.3,h[K*3]=R*lt,h[K*3+1]=U*lt,h[K*3+2]=L*lt,u.arcStart+f*u.arcSpan+u.azimuthOffset;const pt=(W-.5)*.05,Rt=u.elevation+pt,Ft=V*(.3+W*.7);d[K*3+1]=Math.cos(Rt)*c+Ft}}u.geo.attributes.color.needsUpdate=!0,u.geo.attributes.position.needsUpdate=!0}}const Y={pos:new N(0,Qc,0),vel:new N,onGround:!0};let Wl=0,Xl=0,C0=0,ql=65,ep=65,Sr=0,np=!0,Yl=0,ir=0,xh=null,vh=null,Mh=null,ip=1;function f1(i,t,e){xh=i,vh=t,Mh=e}let _h=[],yh=[],wh=null;function d1(i,t){_h=i,yh=t}function p1(i){wh=i}function m1(i){const t=Qw(),e=ze.ShiftLeft||ze.ShiftRight||lr;Y.vel.x=t.x,Y.vel.z=t.z,Y.vel.y-=pw*i,(ze.Space||el)&&Y.onGround&&(Y.vel.y=Lc,Y.onGround=!1,Kw(!1),vh&&vh()),Y.onGround||(Yl=Y.vel.y),Y.pos.x+=Y.vel.x*i,Y.pos.y+=Y.vel.y*i,Y.pos.z+=Y.vel.z*i;const n=Yt(Y.pos.x,Y.pos.z)+Qc;if(Y.pos.y<=n){if(Y.pos.y=n,Y.vel.y=0,!np&&Yl<-3){const u=Math.min(Math.abs(Yl)/Lc,1);Sr=u*.15,wh&&wh(Y.pos.x,Y.pos.z,Math.floor(3+u*5)),Mh&&Mh(u)}Y.onGround=!0}np=Y.onGround,Y.onGround?(Y.vel.x*=qd,Y.vel.z*=qd):(Y.vel.x*=Yd,Y.vel.z*=Yd);const s=.4;for(let u=0;u<_h.length;u++){const h=_h[u],d=Y.pos.x-h.x,p=Y.pos.z-h.z,g=d*d+p*p,x=.6+s;if(g<x*x&&g>.001){const f=1/Math.sqrt(g);Y.pos.x=h.x+d*f*x,Y.pos.z=h.z+p*f*x}}for(let u=0;u<yh.length;u++){const h=yh[u],d=Y.pos.x-h.x,p=Y.pos.z-h.z,g=d*d+p*p,x=h.colR+s;if(g<x*x&&g>.001){const f=1/Math.sqrt(g);Y.pos.x=h.x+d*f*x,Y.pos.z=h.z+p*f*x}}if(Math.sqrt(Y.pos.x*Y.pos.x+Y.pos.z*Y.pos.z)>ae){const u=Math.atan2(Y.pos.z,Y.pos.x);Y.pos.x=Math.cos(u)*ae,Y.pos.z=Math.sin(u)*ae}Mf.position.copy(Y.pos);const a=Math.sqrt(t.x*t.x+t.z*t.z)>.5&&Y.onGround;a?ir=0:ir+=i,Xl+=((a?e?.06:.035:0)-Xl)*i*6,a&&(Wl+=i*(e?12:8));const l=Math.sin(Wl)*Xl;if(a&&xh){const u=Math.sin(Wl)>=0?1:-1;ip>0&&u<0&&xh(e),ip=u}ep=e&&a?78:65,ql+=(ep-ql)*i*4,gn.fov=ql,gn.updateProjectionMatrix(),Sr*=Math.pow(.04,i),Sr<.001&&(Sr=0),C0=l-Sr}function Ya(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,c=new we;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(e){let u=0;const h=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(const u in o){const h=sp(o[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in r){const h=r[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const p=[];for(let x=0;x<r[u].length;++x)p.push(r[u][x][d]);const g=sp(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function sp(i){let t,e,n,s=-1,o=0;for(let l=0;l<i.length;++l){const u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=u.count*e}const r=new t(o),a=new Ue(r,e,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let d=0,p=u.count;d<p;d++)for(let g=0;g<e;g++){const x=u.getComponent(d,g);a.setComponent(d+h,g,x)}}else r.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}let Mo=null;function g1(){if(Mo)return Mo;const i=256,t=512,e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,t);s.addColorStop(0,"#5a4030"),s.addColorStop(.3,"#4d3528"),s.addColorStop(.7,"#3a2a1e"),s.addColorStop(1,"#2e2015"),n.fillStyle=s,n.fillRect(0,0,i,t);for(let o=0;o<28;o++){const r=o/28*i+Math.sin(o*3.7)*6,a=2+Math.sin(o*2.1)*1.5,c=Math.sin(o*1.3+.5)*.5+.5,l=Math.floor(50+c*30),u=Math.floor(30+c*20),h=Math.floor(15+c*12);n.strokeStyle=`rgba(${l},${u},${h},0.4)`,n.lineWidth=a,n.beginPath();let d=0;for(n.moveTo(r,d);d<t;){d+=8+Math.random()*12;const p=Math.sin(d*.03+o)*3;n.lineTo(r+p,d)}n.stroke()}for(let o=0;o<18;o++){const r=o/18*i+Math.sin(o*5.3)*8;n.strokeStyle="rgba(20,12,6,0.35)",n.lineWidth=.8+Math.random()*1.2,n.beginPath();let a=Math.random()*40;for(n.moveTo(r,a);a<t;)a+=5+Math.random()*10,n.lineTo(r+Math.sin(a*.05+o*2)*4,a);n.stroke()}for(let o=0;o<30;o++){const r=o/30*t+Math.random()*10;n.strokeStyle=`rgba(${30+Math.random()*20},${18+Math.random()*12},${8+Math.random()*8},0.15)`,n.lineWidth=.5+Math.random()*1.5,n.beginPath(),n.moveTo(0,r);for(let a=0;a<i;a+=10)n.lineTo(a,r+Math.sin(a*.04+o)*2);n.stroke()}for(let o=0;o<5;o++){const r=Math.random()*i,a=50+Math.random()*(t-100),c=4+Math.random()*6,l=3+Math.random()*5,u=n.createRadialGradient(r,a,0,r,a,c);u.addColorStop(0,"rgba(15,8,4,0.5)"),u.addColorStop(.5,"rgba(30,18,10,0.3)"),u.addColorStop(1,"rgba(40,25,14,0)"),n.fillStyle=u,n.beginPath(),n.ellipse(r,a,c,l,0,0,Math.PI*2),n.fill()}for(let o=0;o<8;o++){const r=Math.random()*i;n.strokeStyle="rgba(34,136,85,0.08)",n.lineWidth=.5+Math.random()*.8,n.beginPath();let a=Math.random()*t*.3;n.moveTo(r,a);const c=30+Math.random()*80;for(;a<a+c&&a<t;)a+=4+Math.random()*6,n.lineTo(r+Math.sin(a*.08+o*2)*2,a);n.stroke()}return Mo=new sa(e),Mo.wrapS=jo,Mo.wrapT=jo,Mo}const Kr=[{leaf:1332520,glow:2280567,core:4521898},{leaf:931880,glow:3390378,core:5636044},{leaf:1721376,glow:4508757,core:7864200},{leaf:1060912,glow:2267562,core:4513262},{leaf:1583172,glow:3377356,core:5618687}];let Za=null;function x1(){if(Za)return Za;const i=64,t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d"),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);return n.addColorStop(0,"rgba(68, 255, 136, 0.55)"),n.addColorStop(.25,"rgba(34, 204, 100, 0.35)"),n.addColorStop(.6,"rgba(20, 120, 60, 0.12)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=n,e.fillRect(0,0,i,i),Za=new sa(t),Za}function v1(i,t){const e=new jp({map:x1(),color:3394696,transparent:!0,opacity:.65,depthWrite:!1,blending:ce}),n=new Xg(e),s=i*.55;return n.scale.set(s*2.2,s*1.6,1),n.position.y=t+i*.6,n.visible=!1,ct.add(n),n}function M1(i){const t=new re,e=6+S()*10,n=.2+S()*.3,s=new I(new _t(n*.4,n,e,6));s.material=new J({color:5914672}),s.position.y=e/2,s.userData._cat="trunk",t.add(s);const o=2+Math.floor(S()*3);for(let d=0;d<o;d++){const p=d/o*6.28+S()*.5,g=e*.4+S()*e*.4,x=new I(new _t(.008,.015,g,3));x.material=new J({color:2263125}),x.position.set(Math.cos(p)*n*.74,e*.15+g/2,Math.sin(p)*n*.74),x.userData._cat="detail",t.add(x)}const r=3+Math.floor(S()*3);for(let d=0;d<r;d++){const p=d/r*6.28+S()*.5,g=.8+S()*1.5,x=new I(new _t(.02,n*.3,g,4));x.material=new J({color:3812378}),x.position.set(Math.cos(p)*n*.5,.08,Math.sin(p)*n*.5),x.rotation.z=p<3.14?1.2+S()*.3:-(1.2+S()*.3),x.rotation.y=p,x.userData._cat="detail",t.add(x)}const a=Kr[i%Kr.length],c=3+Math.floor(S()*4);for(let d=0;d<c;d++){const p=e*(.4+S()*.5),g=S()*Math.PI*2,x=1.5+S()*3,f=new I(new _t(.02,.06,x,4));f.material=new J({color:5914672}),f.position.set(Math.cos(g)*.3,p,Math.sin(g)*.3),f.rotation.z=(S()-.5)*1.2,f.rotation.y=g,f.userData._cat="trunk",t.add(f),S();const m=Math.cos(g)*(x*.5),w=p+S()*1.5,_=Math.sin(g)*(x*.5),M=1+S()*2;S();const A=new I(new Gs(M*.3,1));A.material=new J({color:a.core}),A.position.set(m,w,_),A.userData._cat="canopy",t.add(A),S();const E=new I(new Gs(M*.75,1));E.material=new J({color:a.leaf}),E.position.set(m+(S()-.5)*.4,w+(S()-.5)*.4,_+(S()-.5)*.4),E.scale.set(1+S()*.4,.65+S()*.5,1+S()*.4),E.userData._cat="canopy",t.add(E);const T=new I(new Gs(M*1.2,1));if(T.material=new J({color:a.glow}),T.position.set(m,w,_),T.userData._cat="glow",t.add(T),S()<.35){const b=.3+S()*.8,y=new I(new _t(.008,.003,b,3));y.material=new J({color:2773040});const v=S()*x*.4;y.position.set(Math.cos(g)*(.3+v),p-b/2-S()*.3,Math.sin(g)*(.3+v)),y.userData._cat="detail",t.add(y)}else S(),S(),S()}const l=Math.floor(S()*3);for(let d=0;d<l;d++){const p=1+S()*e*.4,g=S()*6.28,x=.08+S()*.08,f=new I(new Q(x,5,3));f.material=new J({color:5911840}),f.scale.set(1.5,.3,1),f.position.set(Math.cos(g)*n*.8,p,Math.sin(g)*n*.8),f.rotation.y=-g,f.userData._cat="detail",t.add(f)}const u=new I(new Q(3+S()*2,8,6));u.material=new J({color:new ot(F.leaf)}),u.position.y=e*.65,u.userData._cat="glow",t.add(u);const h=new I(new Q(n*2.5,6,3));return h.material=new J({color:1183752}),h.scale.set(1,.12,1),h.position.y=.02,h.userData._cat="trunk",t.add(h),t.userData.treeH=e,t}function _1(i,t){const e=T0();uh(7919+t*1013+i*3571);const n=M1(i),s=n.userData.treeH;uh(e),n.updateMatrixWorld(!0);const o=[],r=[],a=[],c=[],l=new ot;for(let g=0;g<n.children.length;g++){const x=n.children[g];if(!x.isMesh)continue;let f=x.geometry.clone();if(x.updateMatrix(),f.applyMatrix4(x.matrix),f.index){const A=f.toNonIndexed();f.dispose(),f=A}const m=x.userData._cat||"trunk";m==="trunk"?l.set(16777215):l.copy(x.material.color);const _=f.attributes.position.count,M=new Float32Array(_*3);for(let A=0;A<_;A++)M[A*3]=l.r,M[A*3+1]=l.g,M[A*3+2]=l.b;if(f.setAttribute("color",new Ue(M,3)),m==="trunk"){if(!f.attributes.uv){const A=new Float32Array(_*2);f.setAttribute("uv",new Ue(A,2))}}else f.attributes.uv&&f.deleteAttribute("uv");m==="trunk"?o.push(f):m==="canopy"?r.push(f):m==="glow"?a.push(f):m==="detail"&&c.push(f),x.material.dispose()}const u=o.length>0?Ya(o):null,h=r.length>0?Ya(r):null,d=a.length>0?Ya(a):null,p=c.length>0?Ya(c):null;for(const g of o)g.dispose();for(const g of r)g.dispose();for(const g of a)g.dispose();for(const g of c)g.dispose();return{trunkGeo:u,canopyGeo:h,glowGeo:d,detailGeo:p,treeH:s,palIdx:i}}const Xe=new le;function y1(i){const t=[];for(let e=0;e<i;e++){const n=e%Kr.length,s=Math.floor(e/Kr.length);t.push(_1(n,s))}return t}function w1(i,t,e){const n=[];for(let s=0;s<i.length;s++){const o=i[s],r=Kr[o.palIdx],a=g1(),c=new J({vertexColors:!0,map:a,roughness:.85,emissive:r.glow,emissiveIntensity:.08}),l=o.trunkGeo?new ti(o.trunkGeo,c,e):null;l&&(l.instanceMatrix.setUsage(xe),l.count=0,ct.add(l));const u=new J({vertexColors:!0,roughness:.5,emissive:r.glow,emissiveIntensity:.35}),h=o.canopyGeo?new ti(o.canopyGeo,u,e):null;h&&(h.instanceMatrix.setUsage(xe),h.count=0,ct.add(h));const d=new J({vertexColors:!0,emissive:r.glow,emissiveIntensity:.12,transparent:!0,opacity:.1,depthWrite:!1}),p=o.glowGeo?new ti(o.glowGeo,d,e):null;p&&(p.instanceMatrix.setUsage(xe),p.count=0,ct.add(p));const g=new J({vertexColors:!0,emissive:r.glow,emissiveIntensity:.2}),x=o.detailGeo?new ti(o.detailGeo,g,e):null;x&&(x.instanceMatrix.setUsage(xe),x.count=0,ct.add(x)),n.push({trunk:l,canopy:h,glow:p,detail:x,trunkMat:c,canopyMat:u,glowMat:d,detailMat:g,instances:[],treeH:o.treeH})}for(let s=0;s<t.length;s++){const o=s%i.length,r=t[s],a=r.yRot,c=r.scale;Xe.position.set(r.x,r.y,r.z),Xe.rotation.set(0,a,0),Xe.scale.setScalar(c),Xe.updateMatrix();const l=n[o].instances.length;n[o].trunk&&n[o].trunk.setMatrixAt(l,Xe.matrix),n[o].canopy&&n[o].canopy.setMatrixAt(l,Xe.matrix),n[o].glow&&n[o].glow.setMatrixAt(l,Xe.matrix),n[o].detail&&n[o].detail.setMatrixAt(l,Xe.matrix),n[o].instances.push({x:r.x,z:r.z,y:r.y,yRot:a,scale:c,treeH:r.treeH||n[o].treeH,posIdx:s})}for(let s=0;s<n.length;s++){const o=n[s].instances.length;n[s].trunk&&(n[s].trunk.count=o),n[s].canopy&&(n[s].canopy.count=o),n[s].glow&&(n[s].glow.count=o),n[s].detail&&(n[s].detail.count=0)}return n}function S1(i,t,e,n,s,o,r,a,c){for(let l=0;l<i.length;l++){const u=i[l];let h=0,d=0,p=0,g=0;for(let x=0;x<u.instances.length;x++){const f=u.instances[x],m=f.x-e,w=f.z-s,_=f.y+(f.treeH||10)*.4-n,M=m*m+_*_+w*w,A=f.posIdx;if(M>12100){t[A]&&(t[A].visible=!1);continue}if(M>4900){t[A]&&(t[A].visible=!0);continue}if(t[A]&&(t[A].visible=!1),Xe.position.set(f.x,f.y,f.z),Xe.scale.setScalar(f.scale),M<400){const E=f.x*.1+f.z*.13;Xe.rotation.set(Math.sin(o*.25+E+1)*.003*r+c*.15,f.yRot,Math.sin(o*.3+E)*.004*r+a*.15),Xe.updateMatrix(),u.detail&&u.detail.setMatrixAt(g++,Xe.matrix)}else Xe.rotation.set(0,f.yRot,0),Xe.updateMatrix();u.trunk&&u.trunk.setMatrixAt(h++,Xe.matrix),u.canopy&&u.canopy.setMatrixAt(d++,Xe.matrix),u.glow&&u.glow.setMatrixAt(p++,Xe.matrix)}u.trunk&&(u.trunk.count=h,u.trunk.instanceMatrix.needsUpdate=!0),u.canopy&&(u.canopy.count=d,u.canopy.instanceMatrix.needsUpdate=!0),u.glow&&(u.glow.count=p,u.glow.instanceMatrix.needsUpdate=!0),u.detail&&(u.detail.count=g,u.detail.instanceMatrix.needsUpdate=!0)}}function b1(i,t){const e=new re,n=.4+S()*1.2,s=S()*6.28,o=.8+S()*1.5,r=.5+S()*.8,a=new I(Pn.mushStem,new J({color:F.mushStem,roughness:.7,emissive:F.mushGlow,emissiveIntensity:.1}));a.position.y=.3,e.add(a);const c=new J({color:F.mushStem,emissive:F.mushGlow,emissiveIntensity:.15,roughness:.6}),l=new I(new Ae(.09,.012,4,8),c);l.position.y=.42,l.rotation.x=Math.PI/2,e.add(l);const u=new J({color:F.mushCap,emissive:F.mushGlow,emissiveIntensity:r,roughness:.3,transparent:!0,opacity:.9}),h=new I(Pn.mushCap,u);h.scale.set(1,.5,1),h.position.y=.55,h.castShadow=!0,h.receiveShadow=!0,e.add(h);const d=new J({color:6693546,emissive:F.mushGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,side:Dt});for(let v=0;v<8;v++){const R=v/8*6.28,U=new I(new ve(.35,.08),d);U.position.set(Math.cos(R)*.15,.48,Math.sin(R)*.15),U.rotation.y=-R,U.rotation.x=.1,e.add(U)}for(let v=0;v<4;v++){const R=new $({color:16777215,transparent:!0,opacity:.9}),U=new I(Pn.mushDot,R),L=S()*6.28,z=.15+S()*.25;U.position.set(Math.cos(L)*z,.6+S()*.1,Math.sin(L)*z),e.add(U)}const p=new J({color:15663103,emissive:11197951,emissiveIntensity:.2,transparent:!0,opacity:.6,roughness:0,metalness:.5}),g=2+Math.floor(S()*2);for(let v=0;v<g;v++){const R=new I(new Q(.015+S()*.015,4,3),p),U=S()*6.28,L=.1+S()*.2;R.position.set(Math.cos(U)*L,.63+S()*.08,Math.sin(U)*L),e.add(R)}const x=new J({color:4465322,emissive:F.mushGlow,emissiveIntensity:.15,transparent:!0,opacity:.35});for(let v=0;v<4;v++){const R=S()*6.28,U=.15+S()*.25,L=new I(new _t(.004,.002,U,3),x);L.position.set(Math.cos(R)*.12,.01,Math.sin(R)*.12),L.rotation.z=1.3*(R<3.14?1:-1),L.rotation.y=R,e.add(L)}const f=new J({color:F.mushCap,emissive:F.mushGlow,emissiveIntensity:r*.6,transparent:!0,opacity:.4}),m=new I(new Ae(.38,.01,4,12),f);m.position.y=.49,m.rotation.x=Math.PI/2,e.add(m);const w=new J({color:F.mushStem,emissive:F.mushGlow,emissiveIntensity:.08,roughness:.7}),_=new I(new Q(.08,5,3),w);_.scale.set(1,.5,1),_.position.y=.04,e.add(_);const M=new J({color:1708040,roughness:.95});for(let v=0;v<3;v++){const R=S()*6.28,U=.1+S()*.12,L=new I(new Q(.008+S()*.008,3,3),M);L.position.set(Math.cos(R)*U,.005,Math.sin(R)*U),e.add(L)}const A=new $({color:F.mushGlow,transparent:!0,opacity:.2});for(let v=0;v<4;v++){const R=new I(new Q(.006,3,3),A);R.position.set((S()-.5)*.2,.35+S()*.1,(S()-.5)*.2),e.add(R)}const E=new J({color:11167453,emissive:F.mushGlow,emissiveIntensity:r*.3,roughness:.5}),T=3+Math.floor(S()*3);for(let v=0;v<T;v++){const R=S()*6.28,U=S()*.25,L=new I(new Q(.015+S()*.015,3,3),E);L.position.set(Math.cos(R)*U,.58+S()*.06,Math.sin(R)*U),e.add(L)}const b=new J({color:657416,transparent:!0,opacity:.2,roughness:.95,side:Dt}),y=new I(new $e(.18,8),b);return y.rotation.x=-Math.PI/2,y.position.y=.005,e.add(y),e.scale.setScalar(n),e.position.set(i,0,t),ct.add(e),{group:e,capMat:u,phase:s,speed:o,base:r,x:i,z:t}}function T1(i,t){const e=new re,n=S()*6.28,s=new J({color:F.crystal,emissive:F.crystalCore,emissiveIntensity:1.5,transparent:!0,opacity:.7,roughness:.1,metalness:.5}),o=new I(Pn.crystal,s);o.position.y=.9,o.castShadow=!0,e.add(o);for(let _=0;_<3;_++){const M=new I(Pn.crystalSm,s),A=_/3*6.28+S()*.5;M.position.set(Math.cos(A)*.4,.45,Math.sin(A)*.4),M.rotation.z=(S()-.5)*.8,M.castShadow=!0,e.add(M)}const r=new J({color:1710626,roughness:.9,metalness:.1}),a=3+Math.floor(S()*3);for(let _=0;_<a;_++){const M=S()*6.28,A=.2+S()*.5,E=.08+S()*.12,T=new I(new Q(E,4,3),r);T.scale.set(1+S()*.5,.5+S()*.4,1+S()*.5),T.position.set(Math.cos(M)*A,E*.3,Math.sin(M)*A),T.rotation.set(S(),S(),S()),e.add(T)}const c=new $({color:F.crystalCore,transparent:!0,opacity:.5});for(let _=0;_<3;_++){const M=.4+S()*.8,A=new I(new _t(.008,.008,M,3),c);A.position.set((S()-.5)*.15,.5+S()*.7,(S()-.5)*.15),A.rotation.set((S()-.5)*.8,(S()-.5)*.5,(S()-.5)*.8),e.add(A)}const l=new $({color:11206638,transparent:!0,opacity:.6});for(let _=0;_<5;_++){const M=new I(new Q(.012,3,3),l);M.position.set((S()-.5)*1,.3+S()*1.5,(S()-.5)*1),e.add(M)}const u=new J({color:F.crystal,emissive:F.crystalCore,emissiveIntensity:.8,transparent:!0,opacity:.5});for(let _=0;_<4;_++){const M=S()*6.28,A=.3+S()*.3,E=new I(new _t(0,.015,.12+S()*.1,3),u);E.position.set(Math.cos(M)*A,.06+S()*.1,Math.sin(M)*A),E.rotation.z=(S()-.5)*.6,e.add(E)}const h=new J({color:3364198,emissive:1122867,emissiveIntensity:.05,roughness:.9,side:Dt});for(let _=0;_<2;_++){const M=S()*6.28,A=.2+S()*.3,E=new I(new $e(.04+S()*.03,5),h);E.rotation.x=-Math.PI/2+S()*.4,E.position.set(Math.cos(M)*A,.05,Math.sin(M)*A),e.add(E)}const d=new $({color:F.crystalCore,transparent:!0,opacity:.2});for(let _=0;_<2;_++){const M=new I(new _t(.003,.003,.6+S()*.4,3),d);M.position.set((S()-.5)*.3,.7+S()*.5,(S()-.5)*.3),M.rotation.set((S()-.5)*1,S(),(S()-.5)*1),e.add(M)}const p=new J({color:1135940,emissive:1127202,emissiveIntensity:.3,transparent:!0,opacity:.25});for(let _=0;_<4;_++){const M=new I(new Q(.02+S()*.02,3,3),p);M.position.set((S()-.5)*.15,.4+S()*.6,(S()-.5)*.15),e.add(M)}const g=new $({color:11206638,transparent:!0,opacity:.06}),x=new I(new Ae(.35,.02,4,10),g);x.position.y=.6,x.rotation.x=Math.PI/2+S()*.3,e.add(x);const f=new $({color:F.crystal,transparent:!0,opacity:.06,side:Dt}),m=new I(new $e(.8,8),f);m.rotation.x=-Math.PI/2,m.position.y=.01,e.add(m),e.position.set(i,0,t),ct.add(e);const w=new ar(F.crystal,.5,8);return w.position.set(i,1.2,t),ct.add(w),{group:e,mat:s,phase:n,x:i,z:t,light:w}}const Jn={uTime:{value:0},uWindAmp:{value:1},uWindLeanX:{value:0},uWindLeanZ:{value:0},uPlayerX:{value:0},uPlayerZ:{value:0}};function E1(i,t,e,n,s,o){Jn.uTime.value=i,Jn.uWindAmp.value=t,Jn.uWindLeanX.value=e,Jn.uWindLeanZ.value=n,Jn.uPlayerX.value=s,Jn.uPlayerZ.value=o}function A1(i,t,e,n,s){const o=new we,r=[],a=[],c=[],l=n||20,u=new ot(s?s[0]:663568),h=new ot(s?s[1]:1388056),d=new ot(s?s[2]:2777141),p=new ot(s?s[3]:4517461),g=new ot(s?s[4]:7864268),x=new ot(s?s[5]:14548838),f=new ot;for(let b=0;b<l;b++){const y=S()*6.28,v=S()*e,R=Math.cos(y)*v,U=Math.sin(y)*v,L=.25+S()*.65,z=.03+S()*.05,V=(S()-.5)*.2,k=(S()-.5)*.2,K=(S()-.5)*.12,W=S()<.5?u:h,lt=S(),pt=lt<.4?p:lt<.7?g:x,Rt=L*.35,Ft=L*.7,jt=V*.3,et=V*.7,ut=k*.3,wt=k*.7;r.push(R-z,.01,U),r.push(R+z,.01,U),r.push(R+jt-z*.9,Rt,U+ut),c.push(0,0,.35),a.push(W.r,W.g,W.b,W.r,W.g,W.b),f.copy(W).lerp(d,.4),a.push(f.r,f.g,f.b),r.push(R+z,.01,U),r.push(R+jt+z*.9,Rt,U+ut),r.push(R+jt-z*.9,Rt,U+ut),c.push(0,.35,.35),a.push(W.r,W.g,W.b),f.copy(W).lerp(d,.4),a.push(f.r,f.g,f.b,f.r,f.g,f.b);const dt=z*.65;r.push(R+jt-z*.9,Rt,U+ut),r.push(R+jt+z*.9,Rt,U+ut),r.push(R+et-dt,Ft,U+wt+K),c.push(.35,.35,.7),f.copy(W).lerp(d,.4),a.push(f.r,f.g,f.b,f.r,f.g,f.b),f.copy(d).lerp(pt,.3),a.push(f.r,f.g,f.b),r.push(R+jt+z*.9,Rt,U+ut),r.push(R+et+dt,Ft,U+wt+K),r.push(R+et-dt,Ft,U+wt+K),c.push(.35,.7,.7),f.copy(W).lerp(d,.4),a.push(f.r,f.g,f.b),f.copy(d).lerp(pt,.3),a.push(f.r,f.g,f.b,f.r,f.g,f.b),r.push(R+et-dt,Ft,U+wt+K),r.push(R+et+dt,Ft,U+wt+K),r.push(R+V+K*2,L,U+k+K*1.5),c.push(.7,.7,1),f.copy(d).lerp(pt,.3),a.push(f.r,f.g,f.b,f.r,f.g,f.b),a.push(pt.r,pt.g,pt.b)}const m=new ot(s?s[6]:1725736),w=new ot(s?s[7]:3385941),_=Math.floor(l*.3);for(let b=0;b<_;b++){const y=S()*6.28,v=S()*e*.9,R=Math.cos(y)*v,U=Math.sin(y)*v,L=.02+S()*.03;r.push(R-L,.01,U),r.push(R+L,.01,U),r.push(R,.03+S()*.02,U+L),c.push(0,0,.05),a.push(m.r,m.g,m.b),a.push(m.r,m.g,m.b),a.push(w.r,w.g,w.b)}o.setAttribute("position",new Ht(r,3)),o.setAttribute("color",new Ht(a,3)),o.setAttribute("bladeHeight",new Ht(c,1)),o.computeVertexNormals();const M=new J({vertexColors:!0,roughness:.7,side:Dt,emissive:s?s[8]:4521830,emissiveIntensity:.08}),A=i,E=t;M.onBeforeCompile=b=>{b.uniforms.uTime=Jn.uTime,b.uniforms.uWindAmp=Jn.uWindAmp,b.uniforms.uWindLeanX=Jn.uWindLeanX,b.uniforms.uWindLeanZ=Jn.uWindLeanZ,b.uniforms.uPlayerX=Jn.uPlayerX,b.uniforms.uPlayerZ=Jn.uPlayerZ,b.uniforms.uPatchX={value:A},b.uniforms.uPatchZ={value:E},b.vertexShader=b.vertexShader.replace("#include <common>",`#include <common>
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
      `)};const T=new I(o,M);return T.position.set(i,0,t),ct.add(T),{mesh:T,geo:o,cx:i,cz:t}}function R1(i,t){const e=new re,n=new J({color:F.fern,emissive:F.fernGlow,emissiveIntensity:.08,roughness:.7,side:Dt}),s=3+Math.floor(S()*2),o=.5+S()*.7,r=new J({color:1708552,roughness:.95}),a=new I(new Q(.06,5,3),r);a.scale.set(1.5,.5,1.5),a.position.y=.02,e.add(a);for(let m=0;m<3;m++){const w=S()*6.28,_=new I(new _t(.003,.002,.08,3),r);_.position.set(Math.cos(w)*.06,.01,Math.sin(w)*.06),_.rotation.z=(w<3.14?1:-1)*1.2,_.rotation.y=w,e.add(_)}for(let m=0;m<s;m++){const w=m/s*6.28+S()*.3,_=new I(new _t(.004,.006,.55,3),new J({color:1721632,roughness:.8}));_.position.set(Math.cos(w)*.15,.25,Math.sin(w)*.15),_.rotation.y=-w,_.rotation.x=-.6-S()*.4,e.add(_);const M=new I(new ve(.12,.6,1,3),n);M.position.set(Math.cos(w)*.15,.25,Math.sin(w)*.15),M.rotation.y=-w,M.rotation.x=-.6-S()*.4,e.add(M);for(let E=0;E<6;E++){const T=new I(new ve(.07,.06,1,1),n),b=.06+E*.08,y=E%2===0?1:-1;T.position.set(Math.cos(w)*(.15+.06),b,Math.sin(w)*(.15+.06*y)),T.rotation.y=-w,T.rotation.x=-.8,T.rotation.z=y*.5,e.add(T)}const A=new J({color:8939042,emissive:4469521,emissiveIntensity:.1});for(let E=0;E<3;E++){const T=new I(new Q(.008,3,3),A),b=.12+E*.12;T.position.set(Math.cos(w)*(.15+.02),b-.01,Math.sin(w)*(.15+.02)),e.add(T)}}const c=new J({color:F.fernGlow,emissive:F.fernGlow,emissiveIntensity:.3}),l=new I(new Q(.04,4,3),c);l.position.y=.35,e.add(l);const u=new I(new _t(.006,.003,.06,3),c);u.position.set(.02,.37,0),u.rotation.z=-.8,e.add(u);const h=new J({color:15663103,emissive:8960989,emissiveIntensity:.1,transparent:!0,opacity:.5,roughness:0,metalness:.5});for(let m=0;m<3;m++){const w=S()*6.28,_=S()*.2,M=new I(new Q(.006+S()*.005,3,3),h);M.position.set(Math.cos(w)*_,.12+S()*.2,Math.sin(w)*_),e.add(M)}const d=new J({color:3811856,roughness:.9,side:Dt,transparent:!0,opacity:.6}),p=new I(new ve(.1,.4,1,2),d),g=S()*6.28;p.position.set(Math.cos(g)*.12,.05,Math.sin(g)*.12),p.rotation.x=-1.3,p.rotation.y=g,e.add(p);const x=new $({color:2768928,transparent:!0,opacity:.3});for(let m=0;m<4;m++){const w=new I(new _t(.001,.001,.015,3),x);w.position.set((S()-.5)*.08,.08+S()*.15,(S()-.5)*.08),w.rotation.z=(S()-.5)*1.5,e.add(w)}const f=new J({color:1708552,roughness:.95});for(let m=0;m<3;m++){const w=new I(new Q(.006,3,3),f);w.position.set((S()-.5)*.1,.005,(S()-.5)*.1),e.add(w)}return e.scale.setScalar(o),e.position.set(i,0,t),ct.add(e),{group:e,phase:S()*6.28}}function C1(i,t){const e=new re,n=.25+S()*.4,s=new J({color:F.flowerStem,roughness:.8}),o=new I(new _t(.01,.015,n,4),s);o.position.y=n/2,e.add(o);for(let b=0;b<2;b++){const y=new I(new ei(.004,.012,3),s);y.position.set(.012,n*.25+b*n*.25,0),y.rotation.z=-1.2,e.add(y)}const r=new J({color:F.fern,roughness:.7,side:Dt}),a=new I(new ve(.06,.04),r);a.position.set(.03,n*.3,0),a.rotation.z=-.5,e.add(a);const c=new I(new ve(.05,.035),r);c.position.set(-.025,n*.5,.01),c.rotation.z=.6,e.add(c);const l=new J({color:1728560,roughness:.7,side:Dt});for(let b=0;b<5;b++){const y=b/5*6.28+.3,v=new I(new ve(.025,.02),l);v.position.set(Math.cos(y)*.025,n-.005,Math.sin(y)*.025),v.rotation.x=-1.2,v.rotation.y=-y,e.add(v)}const u=new J({color:F.flower,emissive:F.flowerGlow,emissiveIntensity:.4+S()*.4,transparent:!0,opacity:.85,side:Dt});for(let b=0;b<6;b++){const y=b/6*6.28,v=new I(new ve(.05,.04),u);v.position.set(Math.cos(y)*.03,n+.01,Math.sin(y)*.03),v.rotation.x=-.8,v.rotation.y=-y,e.add(v)}const h=new J({color:16777215,emissive:F.flowerGlow,emissiveIntensity:1.2}),d=new I(new Q(.02,4,3),h);d.position.y=n+.02,e.add(d);const p=new $({color:16777130,transparent:!0,opacity:.7}),g=new $({color:16772676});for(let b=0;b<3;b++){const y=b/3*6.28+.5,v=new I(new _t(.002,.002,.025,3),p);v.position.set(Math.cos(y)*.012,n+.03,Math.sin(y)*.012),e.add(v);const R=new I(new Q(.005,3,3),g);R.position.set(Math.cos(y)*.012,n+.045,Math.sin(y)*.012),e.add(R)}const x=new $({color:16777164,transparent:!0,opacity:.3});for(let b=0;b<2;b++){const y=new I(new Q(.006,3,3),x);y.position.set((S()-.5)*.04,n+.06+S()*.04,(S()-.5)*.04),e.add(y)}const f=new J({color:16772778,emissive:16768324,emissiveIntensity:.2,transparent:!0,opacity:.5,roughness:0,metalness:.4}),m=new I(new Q(.006,3,3),f);m.position.set(.005,n+.005,.005),e.add(m);const w=new $({color:15662984}),_=new I(new _t(.002,.002,.03,3),w);_.position.y=n+.035,e.add(_);const M=new I(new Q(.005,3,3),w);M.position.y=n+.055,e.add(M);const A=new J({color:1725728,roughness:.7}),E=new I(new _t(.015,.02,.02,5),A);E.position.y=n-.01,e.add(E);const T=new $({color:16777215,transparent:!0,opacity:.35});for(let b=0;b<4;b++){const y=b/4*6.28+.3,v=new I(new Q(.004,3,3),T);v.position.set(Math.cos(y)*.045,n+.005,Math.sin(y)*.045),e.add(v)}return e.position.set(i,0,t),ct.add(e),{group:e,petalMat:u,phase:S()*6.28,baseH:n}}function P1(i,t){const e=new re,n=new J({color:F.reed,emissive:F.reedTip,emissiveIntensity:.05,roughness:.7}),s=new J({color:F.reedTip,emissive:F.reedTip,emissiveIntensity:.15}),o=new J({color:1709328,roughness:.95}),r=new I(new Q(.08,5,3),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=3+Math.floor(S()*4),c=new J({color:F.reed,roughness:.7,side:Dt});for(let p=0;p<a;p++){const g=.6+S()*1,x=(S()-.5)*.2,f=(S()-.5)*.2,m=new I(new _t(.008,.015,g,4),n);m.position.set(x,g/2,f),e.add(m);const w=2+Math.floor(S()*2),_=new J({color:2771488,roughness:.7});for(let E=0;E<w;E++){const T=g*.2+E*g*.25,b=new I(new Ae(.012,.004,4,6),_);b.position.set(x,T,f),b.rotation.x=Math.PI/2,e.add(b)}if(S()<.7){const E=.1+S()*.15,T=S()*6.28,b=new I(new ve(.02,E),c);b.position.set(x+Math.cos(T)*.02,g*.4,f+Math.sin(T)*.02),b.rotation.y=-T,b.rotation.x=-.5-S()*.4,e.add(b)}const M=new I(new Q(.025,4,3),s);M.scale.set(.8,1.5,.8),M.position.set(x,g+.02,f),e.add(M);const A=new $({color:F.reedTip,transparent:!0,opacity:.4});for(let E=0;E<3;E++){const T=E/3*6.28+S()*.5,b=new I(new _t(.002,.001,.04,3),A);b.position.set(x+Math.cos(T)*.015,g+.05,f+Math.sin(T)*.015),b.rotation.z=(S()-.5)*.4,e.add(b)}}e.position.set(i,0,t),ct.add(e);const l=new J({color:4864536,roughness:.9,side:Dt,transparent:!0,opacity:.5});for(let p=0;p<2;p++){S()*6.28;const g=(S()-.5)*.15,x=new I(new ve(.025,.02),l);x.position.set(g,.2+p*.25,(S()-.5)*.1),x.rotation.set(S()*.5,S(),S()*.5),e.add(x)}const u=new $({color:15654348,transparent:!0,opacity:.25});for(let p=0;p<3;p++){const g=new I(new Q(.005,3,3),u);g.position.set((S()-.5)*.15,.8+S()*.6,(S()-.5)*.15),e.add(g)}const h=new J({color:2241312,roughness:.9,transparent:!0,opacity:.2}),d=new I(new Ae(.1,.008,4,8),h);return d.rotation.x=Math.PI/2,d.position.y=.03,e.add(d),{group:e,phase:S()*6.28,swayAmp:.03+S()*.04}}let xn=null;const Go=[],un=new le,Fc=new ot,P0=new ot(F.dandSeed);function I1(i){const t=new $({color:16777215,transparent:!0,opacity:1});xn=new ti(Pn.dandSeed,t,i),xn.instanceMatrix.setUsage(xe),xn.instanceColor=new Ei(new Float32Array(i*3),3),xn.instanceColor.setUsage(xe),un.scale.setScalar(0),un.updateMatrix();for(let e=0;e<i;e++)xn.setMatrixAt(e,un.matrix),Fc.copy(P0),xn.setColorAt(e,Fc),Go.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,drift:0});xn.count=i,xn.frustumCulled=!1,ct.add(xn)}function I0(i,t,e){let n=null;for(let o=0;o<Go.length;o++)if(!Go[o].active){n=Go[o];break}if(!n)return;n.x=i+(Math.random()-.5)*.1,n.y=t,n.z=e+(Math.random()-.5)*.1;const s=Math.random()*6.28;n.vx=Math.cos(s)*.5+Math.random()*.3,n.vy=.6+Math.random()*.8,n.vz=Math.sin(s)*.5,n.life=4+Math.random()*5,n.max=n.life,n.active=!0,n.drift=Math.random()*6.28}let L0=0,D0=0,U0=0;function L1(i,t,e){L0=i,D0=t,U0=e}function D1(i,t){let e=!1;for(let n=0;n<Go.length;n++){const s=Go[n];if(!s.active){un.position.set(0,-100,0),un.scale.setScalar(0),un.updateMatrix(),xn.setMatrixAt(n,un.matrix);continue}if(s.life-=i,s.life<=0){s.active=!1,un.position.set(0,-100,0),un.scale.setScalar(0),un.updateMatrix(),xn.setMatrixAt(n,un.matrix);continue}s.drift+=(Math.random()-.5)*1.5*i,s.vx+=Math.sin(s.drift)*.3*i,s.vz+=Math.cos(s.drift)*.2*i,s.vx+=L0*.5*i,s.vz+=D0*.5*i,s.vy+=(.15+U0*.1-s.vy)*i*.5,s.vx*=.998,s.vy*=.998,s.vz*=.998,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i;const r=s.life/s.max*.7*(.6+Math.sin(t*2+n)*.4),a=.8+Math.sin(t*3+n*.5)*.3;un.position.set(s.x,s.y,s.z),un.scale.setScalar(a),un.updateMatrix(),xn.setMatrixAt(n,un.matrix),Fc.copy(P0).multiplyScalar(r),xn.setColorAt(n,Fc),e=!0}xn.instanceMatrix.needsUpdate=!0,e&&(xn.instanceColor.needsUpdate=!0)}function U1(i,t){const e=new re,n=.35+S()*.45,s=new J({color:2777128,roughness:.7,side:Dt}),o=3+Math.floor(S()*2);for(let _=0;_<o;_++){const M=_/o*6.28+S()*.3,A=new I(new ve(.08,.035),s);A.position.set(Math.cos(M)*.05,.02,Math.sin(M)*.05),A.rotation.x=-1.4,A.rotation.y=-M,e.add(A)}const r=new J({color:F.dandStem,roughness:.8}),a=new I(new _t(.008,.012,n,4),r);a.position.y=n/2,e.add(a);const c=new $({color:14540236,transparent:!0,opacity:.3});for(let _=0;_<4;_++){const M=n*.2+_*n*.18,A=new I(new _t(.002,.001,.02,3),c);A.position.set(.01,M,0),A.rotation.z=-.8,e.add(A)}const l=new J({color:F.fern,roughness:.7,side:Dt}),u=new I(new ve(.07,.03),l);u.position.set(.03,n*.15,0),u.rotation.z=-.4,e.add(u);const h=new J({color:F.dandHead,emissive:F.dandSeedGlow,emissiveIntensity:.2,transparent:!0,opacity:.85}),d=new I(new Q(.07,6,5),h);d.position.y=n+.05,e.add(d);const p=new J({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.5,roughness:0,metalness:.5}),g=new I(new Q(.012,4,3),p);g.position.set(.04,n+.07,.03),e.add(g);const x=new $({color:F.dandSeed,transparent:!0,opacity:.7});for(let _=0;_<8;_++){const M=_/8*6.28+S()*.2,A=new I(new ei(.015,.05,3),x);A.position.set(Math.cos(M)*.06,n+.05+S()*.04,Math.sin(M)*.06),A.rotation.x=(S()-.5)*.6,A.rotation.z=(S()-.5)*.6,e.add(A);const E=new $({color:16777215,transparent:!0,opacity:.3}),T=new I(new _t(.001,.001,.03,3),E);T.position.set(Math.cos(M)*.08,n+.08,Math.sin(M)*.08),T.rotation.set((S()-.5)*.5,0,(S()-.5)*.5),e.add(T);const b=new $({color:15658717,transparent:!0,opacity:.15});for(let y=0;y<2;y++){const v=M+(y-.5)*.5,R=new I(new _t(8e-4,8e-4,.025,3),b);R.position.set(Math.cos(v)*.075,n+.09,Math.sin(v)*.075),R.rotation.set((S()-.5)*.8,0,(S()-.5)*.8),e.add(R)}}const f=new J({color:3811856,roughness:.9});for(let _=0;_<4;_++){const M=_/4*6.28+S()*.5,A=new I(new Q(.005,3,3),f);A.scale.set(.6,1.5,.6),A.position.set(Math.cos(M)*.04,n+.04,Math.sin(M)*.04),e.add(A)}const m=new $({color:1716240,transparent:!0,opacity:.15});for(let _=0;_<3;_++){const M=_/3*6.28,A=new I(new _t(.001,.001,n*.7,3),m);A.position.set(Math.cos(M)*.01,n*.35,Math.sin(M)*.01),e.add(A)}const w=new $({color:13426107,transparent:!0,opacity:.2});for(let _=0;_<5;_++){const M=n*.1+S()*n*.7,A=S()*6.28,E=new I(new _t(8e-4,8e-4,.012,3),w);E.position.set(Math.cos(A)*.012,M,Math.sin(A)*.012),E.rotation.z=A<3.14?-.8:.8,E.rotation.y=A,e.add(E)}return e.position.set(i,0,t),ct.add(e),{group:e,headMat:h,x:i,z:t,h:n,dispersed:!1,phase:S()*6.28,seedCount:8,regrowTimer:0}}function N1(i,t,e,n){for(let s=0;s<i.length;s++){const o=i[s];if(o.dispersed){if(o.regrowTimer-=t,o.regrowTimer<=0){o.dispersed=!1;for(let r=2;r<o.group.children.length;r++)o.group.children[r].visible=!0}o.group.rotation.z=Math.sin(e*.9+o.phase)*.02}else{const r=o.x-n.x,a=o.z-n.z;if(r*r+a*a<1.2){o.dispersed=!0;for(let c=0;c<8;c++)I0(o.x,o.h+.05,o.z);for(let c=2;c<o.group.children.length;c++)o.group.children[c].visible=!1;o.regrowTimer=15+Math.random()*10}else o.group.rotation.z=Math.sin(e*.9+o.phase)*.04,o.headMat.emissiveIntensity=.15+Math.sin(e*1.2+o.phase)*.1}}}function z1(i,t){const e=new re,n=1+S()*.8,s=.25+S()*.15,o=new J({color:F.thornStem,roughness:.8,emissive:662032,emissiveIntensity:.1}),r=new I(new _t(.04,.07,n,5),o);r.position.y=n/2,e.add(r);const a=new J({color:F.thornSpike,roughness:.6}),c=4+Math.floor(S()*3);for(let M=0;M<c;M++){const A=n*.15+M/c*n*.6,E=M/c*6.28+S()*1,T=new I(new ei(.015,.08+S()*.04,3),a);T.position.set(Math.cos(E)*.06,A,Math.sin(E)*.06),T.rotation.z=(E<3.14?1.3:-1.3)+S()*.2,T.rotation.y=E,e.add(T)}const l=new J({color:F.thornOrb,emissive:F.thornOrbGlow,emissiveIntensity:.8,transparent:!0,opacity:.35,roughness:.1,metalness:.3}),u=new I(new Q(s,12,10),l);u.position.y=n+s*.5,e.add(u);const h=new J({color:16777164,emissive:F.thornOrbGlow,emissiveIntensity:1.2,transparent:!0,opacity:.6,roughness:0,metalness:.1}),d=new I(new Q(s*.35,8,6),h);d.position.y=n+s*.5,e.add(d);const p=new $({color:F.thornOrbGlow,transparent:!0,opacity:.06,blending:ce,depthWrite:!1}),g=new I(new Q(s*2,8,6),p);g.position.y=n+s*.5,e.add(g);const x=new J({color:F.thornSpike,emissive:F.thornOrbGlow,emissiveIntensity:.3,roughness:.5}),f=6+Math.floor(S()*3);for(let M=0;M<f;M++){const A=M/f*6.28+S()*.3,E=(S()-.5)*1.2,T=.3+S()*.3,b=new I(new ei(.018,T,4),x);b.position.set(Math.cos(A)*s*.8,n+s*.5+Math.sin(E)*s*.5,Math.sin(A)*s*.8),b.rotation.z=-E+(A<3.14?1.4:-1.4),b.rotation.y=A,e.add(b)}const m=new J({color:F.thornPetal,emissive:3344920,emissiveIntensity:.15,transparent:!0,opacity:.7,roughness:.6,side:Dt}),w=4+Math.floor(S()*2);for(let M=0;M<w;M++){const A=M/w*6.28+S()*.3,E=.2+S()*.15,T=new I(new ve(E,E*1.5),m);T.position.set(Math.cos(A)*(s+.05),n+s*.3-S()*.1,Math.sin(A)*(s+.05)),T.rotation.y=-A,T.rotation.x=-.4-S()*.3,e.add(T)}const _=new J({color:1718296,emissive:662026,emissiveIntensity:.05,side:Dt});for(let M=0;M<2;M++){const A=S()*6.28,E=new I(new ve(.15,.25),_);E.position.set(Math.cos(A)*.12,n*.3,Math.sin(A)*.12),E.rotation.y=-A,E.rotation.x=-.8,e.add(E)}return e.position.set(i,0,t),ct.add(e),{group:e,orbMat:l,hazeMat:p,phase:S()*6.28,x:i,z:t}}function F1(i,t){const e=new re,n=2+Math.floor(S()*2),s=new J({color:1710128,roughness:.85,emissive:F.helixStem,emissiveIntensity:.1}),o=new I(new Q(.18,8,6),s);o.scale.set(1.2,.5,1.2),o.position.y=.05,e.add(o);const r=[];for(let l=0;l<n;l++){const u=1.5+S()*1,h=.15+S()*.15,d=1.5+S()*1.5,p=S()*6.28,g=[],x=16;for(let U=0;U<=x;U++){const L=U/x,z=p+L*d*6.28,V=h*(.3+L*.7);g.push(new N(Math.cos(z)*V,L*u,Math.sin(z)*V))}const f=new oa(g),m=new J({color:F.helixStem,emissive:F.helixNode,emissiveIntensity:.12,roughness:.7}),w=new I(new An(f,20,.025+S()*.01,5,!1),m);e.add(w);const _=.1+S()*.08,A=S()<.5?new ff(_,0):new hf(_,0),E=new J({color:F.helixPod,emissive:F.helixPodGlow,emissiveIntensity:.5+S()*.3,transparent:!0,opacity:.65,roughness:.2,metalness:.2}),T=new I(A,E),b=f.getPoint(1);T.position.copy(b),T.rotation.set(S()*3,S()*3,S()*3),e.add(T),r.push(E);const y=new I(new Q(_*2.5,6,4),new $({color:F.helixPodGlow,transparent:!0,opacity:.05,blending:ce,depthWrite:!1}));y.position.copy(b),e.add(y);const v=1+Math.floor(S()*2);for(let U=0;U<v;U++){const L=.3+S()*.5,z=f.getPoint(L),V=new J({color:F.helixRing,emissive:F.helixPodGlow,emissiveIntensity:.2,transparent:!0,opacity:.45,roughness:.3}),k=new I(new Ae(.1+S()*.08,.008,6,12),V);k.position.copy(z),k.rotation.set(S()*3,S()*3,S()*3),e.add(k)}const R=2+Math.floor(S()*2);for(let U=0;U<R;U++){const L=.2+U/R*.6,z=f.getPoint(L),V=new J({color:F.helixNode,emissive:F.helixPodGlow,emissiveIntensity:.35,transparent:!0,opacity:.5}),k=new I(new Q(.025+S()*.015,5,4),V);k.position.copy(z),e.add(k)}}const a=new J({color:F.helixStem,emissive:F.helixNode,emissiveIntensity:.06,roughness:.8}),c=2+Math.floor(S()*2);for(let l=0;l<c;l++){const u=l/c*6.28+S()*.5,h=.3+S()*.4,d=new I(new _t(.006,.015,h,3),a);d.position.set(Math.cos(u)*.12,h*.3,Math.sin(u)*.12),d.rotation.z=(u<3.14?.8:-.8)+S()*.3,d.rotation.y=u,e.add(d)}return e.position.set(i,0,t),ct.add(e),{group:e,podMats:r,phase:S()*6.28}}function O1(i,t){const e=new re,n=.25+S()*.1,s=new J({color:1718309,roughness:.85,emissive:662032,emissiveIntensity:.06});for(let d=0;d<3;d++){const p=d/3*6.28+S()*.5,g=new I(new _t(.01,.035,.25+S()*.15,4),s);g.position.set(Math.cos(p)*n*.6,.06,Math.sin(p)*n*.6),g.rotation.z=p<3.14?1:-1,g.rotation.y=p,e.add(g)}const o=new J({color:F.snapBody,emissive:F.snapBodyGlow,emissiveIntensity:.4,transparent:!0,opacity:.7,roughness:.4,metalness:.1}),r=new I(new Q(n,10,8),o);r.position.y=n+.05,r.scale.set(1,.85,1),e.add(r);const a=new J({color:1730116,emissive:F.snapBodyGlow,emissiveIntensity:.25,transparent:!0,opacity:.6}),c=new I(new Ae(n*.45,.02,6,12),a);c.position.y=n*1.7,c.rotation.x=Math.PI/2,e.add(c);const l=5+Math.floor(S()*3),u=[],h=[];for(let d=0;d<l;d++){const p=d/l*6.28+S()*.3,g=S()*6.28,x=3+Math.floor(S()*2),f=.2+S()*.1,m=[],w=new le;w.position.set(Math.cos(p)*n*.6,n*1.4,Math.sin(p)*n*.6),w.rotation.y=p,e.add(w);let _=w;for(let T=0;T<x;T++){const b=T/x,y=.02*(1-b*.6),v=new J({color:F.snapFrond,emissive:F.snapBodyGlow,emissiveIntensity:.08+b*.15,roughness:.6}),R=new I(new _t(y*.7,y,f,4),v);R.position.y=T===0?0:f,R.geometry.translate(0,f/2,0),_.add(R),m.push(R),_=R}const M=new J({color:F.snapTip,emissive:F.snapTipGlow,emissiveIntensity:.6,transparent:!0,opacity:.7,roughness:.2}),A=new I(new Q(.025+S()*.015,5,4),M);A.position.y=f,_.add(A),h.push(M);const E=new I(new Q(.06,4,3),new $({color:F.snapTipGlow,transparent:!0,opacity:.04,blending:ce,depthWrite:!1}));A.add(E),u.push({segments:m,baseAngle:p,phaseOffset:g,segLen:f})}return e.position.set(i,0,t),ct.add(e),{group:e,body:r,bodyMat:o,tipMats:h,fronds:u,phase:S()*6.28,x:i,z:t}}function B1(i,t,e,n){for(let s=0;s<i.length;s++){const o=i[s],r=Math.sin(e*1.5+o.phase)*.08;o.body.scale.set(1+r,.85+r*.5,1+r),o.bodyMat.emissiveIntensity=(.3+Math.sin(e*2+o.phase)*.15)*n;for(let a=0;a<o.fronds.length;a++){const c=o.fronds[a],l=1.2+a%3*.3;for(let u=0;u<c.segments.length;u++){const h=c.segments[u],d=.15+u*.12,p=Math.sin(e*l+c.phaseOffset+u*.5)*d,g=Math.cos(e*l*.7+c.phaseOffset+u*.3)*d*.6;h.rotation.z=p,h.rotation.x=g}}for(let a=0;a<o.tipMats.length;a++){const c=Math.sin(e*2.5+o.phase+a*1.2)*.5+.5;o.tipMats[a].emissiveIntensity=(.4+c*.4)*n}}}function G1(i,t,e){const n=new re,s=new J({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:.8,transparent:!0,opacity:.5,roughness:.2,metalness:.1,side:Dt}),o=new I(new Q(.5,8,6,0,6.28,0,Math.PI/2),s);o.scale.set(1,.6,1),o.position.y=0,n.add(o);const r=new J({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:1,transparent:!0,opacity:.6}),a=new I(new Ae(.48,.025,5,12),r);a.rotation.x=Math.PI/2,a.position.y=-.02,n.add(a);const c=new I(new Q(.2,6,4),new $({color:F.jellyGlow,transparent:!0,opacity:.7}));c.position.y=-.05,n.add(c);const l=new $({color:12312063,transparent:!0,opacity:.3});for(let w=-1;w<=1;w+=2){const _=new I(new Q(.06,4,3),l);_.scale.set(.6,1.5,.6),_.position.set(w*.08,-.03,0),n.add(_)}const u=new $({color:15663103,transparent:!0,opacity:.7});for(let w=0;w<5;w++){const _=S()*6.28,M=S()*.8,A=new I(new Q(.02,3,3),u);A.position.set(Math.cos(_)*M*.35,.1-M*.15,Math.sin(_)*M*.35),n.add(A)}const h=new J({color:F.jellyTent,emissive:F.jellyGlow,emissiveIntensity:.4,transparent:!0,opacity:.4}),d=new $({color:F.jellyGlow,transparent:!0,opacity:.6});for(let w=0;w<6;w++){const _=w/6*6.28,M=.4+S()*.6,A=new I(new _t(.015,.008,M,3),h);A.position.set(Math.cos(_)*.25,-M/2-.05,Math.sin(_)*.25),n.add(A);const E=new I(new Q(.012,3,3),d);E.position.set(Math.cos(_)*.25,-M-.06,Math.sin(_)*.25),n.add(E)}const p=new $({color:F.jellyGlow,transparent:!0,opacity:.12});for(let w=0;w<8;w++){const _=w/8*6.28,M=new I(new _t(.002,.002,.4,3),p);M.position.set(Math.cos(_)*.2,.05,Math.sin(_)*.2),M.rotation.z=Math.PI/2-.3,M.rotation.y=-_,n.add(M)}const g=new J({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:.6,transparent:!0,opacity:.4});for(let w=0;w<10;w++){const _=w/10*6.28,M=new I(new Q(.02,3,3),g);M.scale.set(1,.5,.8),M.position.set(Math.cos(_)*.46,-.04,Math.sin(_)*.46),n.add(M)}const x=new J({color:F.jellyTent,emissive:F.jellyGlow,emissiveIntensity:.5,transparent:!0,opacity:.35}),f=new I(new _t(.02,.01,.35,4),x);f.position.y=-.2,n.add(f);const m=new $({color:14548991,transparent:!0,opacity:.4});for(let w=0;w<3;w++){const _=w/3*6.28,M=new I(new Q(.008,3,3),m);M.position.set(Math.cos(_)*.25,-.55-S()*.3,Math.sin(_)*.25),n.add(M)}return n.position.set(i,t,e),ct.add(n),{group:n,bellMat:s,phase:S()*6.28,driftAng:S()*6.28,homeX:i,homeZ:e,floatY:t,wobble:.5+S()*.5,_init:!0,_state:"drift",_stT:20+Math.random()*30,_migrateAng:0,_pulseSync:0}}function k1(i,t){const e=new re,n=new J({color:F.puffBody,emissive:F.puffGlow,emissiveIntensity:.3,roughness:.8}),s=new I(new Q(.3,8,6),n);s.position.y=.35,e.add(s);const o=new J({color:16773344,emissive:F.puffGlow,emissiveIntensity:.15,roughness:.9}),r=new I(new Q(.18,6,4),o);r.scale.set(.7,.9,.3),r.position.set(0,.32,.2),e.add(r);const a=new I(new Q(.22,7,5),n);a.position.y=.65,e.add(a);const c=[];for(let A=-1;A<=1;A+=2){const E=new I(new ei(.06,.15,4),n);E.position.set(A*.13,.85,0),E.rotation.z=A*.3,e.add(E),c.push({mesh:E,side:A,baseRotZ:A*.3});const T=new I(new ei(.03,.08,4),new J({color:F.puffCheek,emissive:F.puffCheek,emissiveIntensity:.2}));T.position.set(A*.13,.84,.01),T.rotation.z=A*.3,e.add(T),c.push({mesh:T,side:A,baseRotZ:A*.3})}const l=new $({color:F.puffEye}),u=[];for(let A=-1;A<=1;A+=2){const E=new I(new Q(.035,4,4),l);E.position.set(A*.09,.68,.18),e.add(E),u.push(E);const T=new $({color:16777215}),b=new I(new Q(.012,3,3),T);b.position.set(A*.09+A*.015,.695,.2),e.add(b),u.push(b)}const h=new $({color:4469555}),d=new I(new Q(.015,3,3),h);d.position.set(0,.63,.22),e.add(d);const p=new J({color:F.puffCheek,emissive:F.puffCheek,emissiveIntensity:.3});for(let A=-1;A<=1;A+=2){const E=new I(new Q(.04,4,3),p);E.position.set(A*.15,.61,.15),e.add(E)}const g=new $({color:15654348,transparent:!0,opacity:.5});for(let A=-1;A<=1;A+=2)for(let E=0;E<2;E++){const T=new I(new _t(.002,.002,.06,3),g);T.position.set(A*.12,.62-E*.03,.2),T.rotation.z=A*.7+E*A*.2,T.rotation.x=-.1,e.add(T)}for(let A=-1;A<=1;A+=2){const E=new I(new Q(.07,4,3),n);E.position.set(A*.12,.07,.05),E.scale.set(1,.5,1.3),e.add(E);const T=new J({color:16755370,emissive:16746632,emissiveIntensity:.1});for(let b=0;b<3;b++){const y=b/3*6.28,v=new I(new Q(.012,3,3),T);v.position.set(A*.12+Math.cos(y)*.03,.03,.05+Math.sin(y)*.03),e.add(v)}}const x=new J({color:16777215,emissive:F.puffGlow,emissiveIntensity:.4,roughness:.9}),f=new I(new Q(.06,5,4),x);f.position.set(0,.38,-.28),e.add(f);const m=new J({color:F.puffBody,emissive:F.puffGlow,emissiveIntensity:.2,roughness:1});for(let A=0;A<6;A++){const E=S()*6.28,T=S()*1.2,b=new I(new Q(.01,3,3),m);b.position.set(Math.cos(E)*.28,.25+T*.2,Math.sin(E)*.28),e.add(b)}const w=new $({color:F.puffBody});for(let A=-1;A<=1;A+=2){const E=new I(new _t(.003,.003,.04,3),w);E.position.set(A*.09,.72,.17),E.rotation.z=A*.3,e.add(E)}const _=new $({color:5583684,transparent:!0,opacity:.5}),M=new I(new _t(.002,.002,.03,3),_);return M.position.set(0,.59,.22),M.rotation.z=Math.PI/2,e.add(M),e.position.set(i,0,t),ct.add(e),{group:e,ears:c,eyes:u,tail:f,phase:S()*6.28,wanderAng:S()*6.28,speed:.6+S()*.8,hopTimer:0,hopPhase:S()*6.28,homeX:i,homeZ:t,state:"idle",idleTimer:S()*3,_init:!0,_followT:0,_scaredT:0,_huddleTarget:-1,_baseY:0,_lastTX:i,_lastTZ:t,_blinkTimer:2+Math.random()*4,_blinkState:0}}function H1(i,t){const e=new re,n=new J({color:F.deerBody,emissive:F.deerGlow,emissiveIntensity:.5,transparent:!0,opacity:.7,roughness:.3}),s=new I(new Q(.4,7,5),n);s.scale.set(1,.8,1.5),s.position.y=.9,e.add(s);const o=new J({color:13431039,emissive:F.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.5}),r=new I(new Q(.15,5,4),o);r.scale.set(.8,.6,.5),r.position.set(0,.78,.25),e.add(r);const a=new re;a.position.set(0,1.15,.3);const c=new I(new _t(.08,.12,.4,5),n);c.position.set(0,.1,.08),c.rotation.x=-.4,a.add(c);const l=new I(new Q(.14,6,5),n);l.position.set(0,.22,.2),a.add(l);const u=new I(new Q(.07,4,3),n);u.scale.set(1,.7,1.4),u.position.set(0,.17,.35),a.add(u);const h=new $({color:2245717}),d=new I(new Q(.02,3,3),h);d.position.set(0,.17,.43),a.add(d);const p=new $({color:F.deerEye});for(let v=-1;v<=1;v+=2){const R=new I(new Q(.025,4,3),p);R.position.set(v*.09,.25,.28),a.add(R);const U=new I(new Q(.008,3,3),new $({color:16777215}));U.position.set(v*.085,.26,.29),a.add(U);const L=new $({color:F.deerBody,transparent:!0,opacity:.5}),z=new I(new _t(.002,.002,.03,3),L);z.position.set(v*.1,.27,.28),z.rotation.z=v*.6,a.add(z)}for(let v=-1;v<=1;v+=2){const R=new I(new ei(.04,.14,4),n);R.position.set(v*.1,.37,.15),R.rotation.z=v*.4,a.add(R)}const g=new J({color:F.deerAntler,emissive:F.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.8});for(let v=-1;v<=1;v+=2){const R=new I(new _t(.015,.02,.25,3),g);R.position.set(v*.08,.42,.12),R.rotation.z=v*.5,a.add(R);const U=new I(new _t(.01,.015,.15,3),g);U.position.set(v*.15,.55,.1),U.rotation.z=v*.8,a.add(U);const L=new I(new _t(.008,.012,.1,3),g);L.position.set(v*.11,.5,.16),L.rotation.z=v*.3,L.rotation.x=-.5,a.add(L);const z=new I(new Q(.012,3,3),new $({color:F.deerGlow,transparent:!0,opacity:.8}));z.position.set(v*.18,.61,.09),a.add(z)}const x=new J({color:F.deerBody,emissive:F.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),f=new I(new _t(.01,.02,.1,3),x);f.position.set(0,.11,.28),f.rotation.x=.3,a.add(f);const m=new $({color:1122850});for(let v=-1;v<=1;v+=2){const R=new I(new Q(.006,3,3),m);R.position.set(v*.02,.16,.42),a.add(R)}e.add(a);const w=[{x:-.15,z:.3,label:"FL"},{x:.15,z:.3,label:"FR"},{x:-.15,z:-.3,label:"BL"},{x:.15,z:-.3,label:"BR"}],_=new J({color:6715272,emissive:F.deerGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),M=[];for(let v=0;v<4;v++){const R=w[v],U=new re;U.position.set(R.x,.65,R.z);const L=new I(new _t(.025,.035,.35,4),n);L.position.y=-.175,U.add(L);const z=new re;z.position.set(0,-.35,0);const V=new I(new _t(.02,.03,.3,4),n);V.position.y=-.15,z.add(V);const k=new I(new _t(.04,.032,.04,4),_);k.position.y=-.3,z.add(k);const K=new J({color:14544639,emissive:F.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),W=new I(new Q(.025,3,3),K);W.scale.set(1.3,.5,1.3),W.position.y=-.25,z.add(W),U.add(z),e.add(U),M.push({upper:U,lower:z,isFront:v<2,side:R.x<0?-1:1})}const A=new re;A.position.set(0,1.1,-.55);const E=new I(new ei(.05,.15,4),new J({color:16777215,emissive:F.deerGlow,emissiveIntensity:1,transparent:!0,opacity:.8}));A.add(E),e.add(A);const T=new $({color:13434862,transparent:!0,opacity:.3});for(let v=0;v<4;v++){const R=new I(new Q(.02,3,3),T);R.position.set((S()-.5)*.25,.8+S()*.3,(S()-.5)*.4),e.add(R)}const b=new $({color:F.deerBody,transparent:!0,opacity:.15});for(let v=0;v<3;v++){const R=new I(new _t(.002,.002,.2,3),b);R.position.set(.3,.85-v*.06,0),R.rotation.z=Math.PI/2+.3,e.add(R)}const y=new J({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.4,roughness:0,metalness:.5});for(let v=0;v<3;v++){const R=new I(new Q(.008,3,3),y);R.position.set((S()-.5)*.3,.9+S()*.3,(S()-.5)*.35),e.add(R)}return e.position.set(i,0,t),ct.add(e),{group:e,mat:n,phase:S()*6.28,wanderAng:S()*6.28,speed:.6+S()*.4,walkTimer:0,legCycle:0,homeX:i,homeZ:t,state:"walk",pauseTimer:0,neckPivot:a,legPivots:M,tailPivot:A,fleeTimer:0,headLook:0,headBob:0,_init:!0,_stT:0,_drinkTgt:null,_zigTimer:0,_zigDir:1,_baseY:0,_lastTX:i,_lastTZ:t}}function V1(i,t,e){const n=new re,s=new J({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.3,roughness:.7}),o=new I(new _t(.04,.05,.3,5),s);o.rotation.x=Math.PI/2,n.add(o);const r=new J({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.5,roughness:.6});for(let f=0;f<3;f++){const m=new I(new Ae(.045,.006,4,8),r);m.position.z=-.05+f*.06,m.rotation.x=0,n.add(m)}const a=new I(new Q(.05,5,4),s);a.position.z=.18,n.add(a);const c=new J({color:1122867,roughness:.2,metalness:.4});for(let f=-1;f<=1;f+=2){const m=new I(new Q(.018,4,3),c);m.position.set(f*.03,.01,.21),n.add(m)}for(let f=-1;f<=1;f+=2){const m=new I(new _t(.005,.005,.15,3),s);m.position.set(f*.03,.03,.22),m.rotation.x=-.6,m.rotation.z=f*.4,n.add(m);const w=new $({color:F.mothGlow,transparent:!0,opacity:.7}),_=new I(new Q(.015,3,3),w);_.scale.set(2,.5,1),_.position.set(f*.05,.12,.28),n.add(_)}const l=new J({color:F.mothWing,emissive:F.mothGlow,emissiveIntensity:.8,transparent:!0,opacity:.6,side:Dt,roughness:.4});n._wingPivots=[];for(let f=-1;f<=1;f+=2){const m=new re;m.position.set(f*.04,0,.02);const w=new I(new Q(.2,6,4),l);w.scale.set(1.8,.08,1.2),w.position.set(f*.18,0,.02),m.add(w);const _=new I(new Q(.12,5,3),l);_.scale.set(1.5,.06,1),_.position.set(f*.12,0,-.1),m.add(_);const M=new J({color:F.mothWing,emissive:F.mothGlow,emissiveIntensity:.6,transparent:!0,opacity:.45,side:Dt}),A=new I(new ve(.03,.12),M);A.position.set(f*.1,0,-.18),A.rotation.y=f*.2,m.add(A);const E=new $({color:F.mothSpot,transparent:!0,opacity:.9}),T=new I(new Q(.03,4,3),E);T.position.set(f*.2,.02,.03),m.add(T);const b=new I(new Q(.018,3,3),E);b.position.set(f*.1,.02,-.08),m.add(b);const y=new $({color:F.mothGlow,transparent:!0,opacity:.25});for(let v=0;v<2;v++){const R=new I(new _t(.002,.002,.2,3),y);R.position.set(f*.15,.01,-.02+v*.06),R.rotation.z=Math.PI/2+f*(.15+v*.15),m.add(R)}n.add(m),n._wingPivots.push({pivot:m,side:f})}const u=new $({color:F.mothGlow,transparent:!0,opacity:.25});for(let f=0;f<3;f++){const m=new I(new Q(.008,3,3),u);m.position.set((S()-.5)*.04,0,-.15-f*.05),n.add(m)}const h=new $({color:4473907,transparent:!0,opacity:.5}),d=new I(new Ae(.015,.003,4,8,Math.PI*1.5),h);d.position.set(0,-.02,.2),d.rotation.x=.4,n.add(d);const p=new J({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.4,roughness:1});for(let f=0;f<5;f++){const m=S()*6.28,w=new I(new Q(.008,3,3),p);w.position.set(Math.cos(m)*.04,Math.sin(m)*.04,S()*.15-.05),n.add(w)}const g=new $({color:F.mothBody,transparent:!0,opacity:.4});for(let f=-1;f<=1;f+=2)for(let m=0;m<3;m++){const w=new I(new _t(.002,.002,.06,3),g);w.position.set(f*.04,-.03,-.05+m*.06),w.rotation.z=f*.8,w.rotation.x=-.3,n.add(w)}const x=new $({color:F.mothGlow,transparent:!0,opacity:.35});for(let f=-1;f<=1;f+=2)for(let m=0;m<5;m++){const w=m/5*Math.PI-Math.PI/2,_=new I(new Q(.006,3,3),x);_.position.set(f*(.3+Math.cos(w)*.05),Math.sin(w)*.02,.02+m*.04),n.add(_)}return n.position.set(i,t,e),ct.add(n),{group:n,wingMat:l,phase:S()*6.28,orbitAng:S()*6.28,orbitR:2+S()*4,centerX:i,centerZ:e,floatY:t,flapSpeed:6+S()*4,_init:!0,_state:"patrol",_stT:0,_attractTarget:null,_restTree:null}}function W1(i,t,e){const n=new re,s=new $({color:F.wispCore}),o=new I(new Q(.08,6,4),s);n.add(o);const r=new $({color:16777215,transparent:!0,opacity:.7,wireframe:!0}),a=new I(new Gs(.06,0),r);n.add(a);const c=new $({color:F.wispGlow,transparent:!0,opacity:.5}),l=new I(new Q(.18,6,4),c);n.add(l);const u=new $({color:F.wispGlow,transparent:!0,opacity:.25}),h=new I(new Ae(.22,.008,4,12),u);h.rotation.x=Math.PI/2,n.add(h);const d=new $({color:F.wispTrail,transparent:!0,opacity:.15}),p=new I(new Q(.35,5,4),d);n.add(p);const g=new $({color:16777215,transparent:!0,opacity:.8}),x=new I(new Q(.02,3,3),g);x.position.set(.15,0,0),n.add(x);const f=[];for(let T=0;T<3;T++){const b=new $({color:F.wispCore,transparent:!0,opacity:.35}),y=new I(new Q(.01,3,3),b);y.position.set((S()-.5)*.1,-.1-T*.08,(S()-.5)*.1),n.add(y),f.push(y)}const m=new $({color:F.wispGlow,transparent:!0,opacity:.18}),w=[];for(let T=0;T<3;T++){const b=T/3*6.28+S()*.5,y=.15+S()*.1,v=new I(new _t(.003,.001,y,3),m);v.position.set(Math.cos(b)*.1,S()*.08,Math.sin(b)*.1),v.rotation.z=Math.PI/3*(b<3.14?1:-1),v.rotation.y=b,n.add(v),w.push({mesh:v,baseAng:b})}const _=new $({color:F.wispGlow,transparent:!0,opacity:.12}),M=new I(new Ae(.26,.005,4,10),_);M.rotation.x=1.2,M.rotation.z=.8,n.add(M);const A=new $({color:16777215,transparent:!0,opacity:.5});for(let T=0;T<4;T++){const b=S()*6.28,y=S()*.8,v=new I(new Q(.006,3,3),A);v.position.set(Math.cos(b)*.06,Math.sin(y)*.06,Math.sin(b)*.06),n.add(v)}const E=new $({color:F.wispCore,transparent:!0,opacity:.2});for(let T=0;T<4;T++){const b=new I(new Q(.004,3,3),E);b.position.set(.03+S()*.04,-.05-T*.04,S()*.04),n.add(b)}return n.scale.setScalar(.5),n.position.set(i,t,e),ct.add(n),{group:n,glowMat:c,hazeMat:d,embers:f,tendrils:w,plasmaMat:m,facet:a,halo:h,halo2:M,phase:S()*6.28,targetX:i,targetY:t,targetZ:e,velX:0,velY:0,velZ:0,scatter:0}}function X1(i,t){const e=new re,n=rh,s=8+Math.floor(S()*5),o=new J({color:F.fairyMush,emissive:F.fairyGlow,emissiveIntensity:.2,roughness:.5}),r=new J({color:F.mushStem,roughness:.7,emissive:F.fairyGlow,emissiveIntensity:.05});for(let A=0;A<s;A++){const E=A/s*6.28+S()*.15,T=n+S()*.3-.15,b=.15+S()*.2,y=new I(Pn.mushStem,r);y.scale.setScalar(b),y.position.set(Math.cos(E)*T,b*.3,Math.sin(E)*T),e.add(y);const v=new I(Pn.mushCap,o);v.scale.set(b,b*.4,b),v.position.set(Math.cos(E)*T,b*.55,Math.sin(E)*T),e.add(v);const R=new $({color:16777215,transparent:!0,opacity:.7}),U=new I(new Q(b*.08,3,3),R);U.position.set(Math.cos(E)*T,b*.6,Math.sin(E)*T),e.add(U)}const a=new J({color:8934792,emissive:F.fairyGlow,emissiveIntensity:.1,roughness:.6});for(let A=0;A<5;A++){const E=S()*6.28,T=n+S()*.6-.3,b=.06+S()*.06,y=new I(Pn.mushCap,a);y.scale.set(b,b*.5,b),y.position.set(Math.cos(E)*T,b*.35,Math.sin(E)*T),e.add(y)}const c=new J({color:1725733,emissive:664080,emissiveIntensity:.05,roughness:.9});for(let A=0;A<4;A++){const E=S()*6.28,T=S()*n*.8,b=new I(new Q(.08+S()*.08,4,3),c);b.scale.set(1.5,.2,1.5),b.position.set(Math.cos(E)*T,.01,Math.sin(E)*T),e.add(b)}const l=new J({color:4478310,emissive:F.fairyGlow,emissiveIntensity:.05,roughness:.85}),u=new I(new Q(.12,5,3),l);u.scale.set(1.2,.3,1),u.position.y=.03,e.add(u);const h=new $({color:F.fairyGlow,transparent:!0,opacity:.2}),d=[];for(let A=0;A<8;A++){const E=new I(new Q(.012,3,3),h),T=(S()-.5)*n*.8,b=(S()-.5)*n*.8;E.position.set(T,.05+S()*.3,b),e.add(E),d.push({mesh:E,baseX:T,baseZ:b,drift:S()*6.28,speed:.2+S()*.3})}const p=new $({color:F.fairyRing,transparent:!0,opacity:0,side:Dt}),g=new I(new er(.3,n-.3,16),p);g.rotation.x=-Math.PI/2,g.position.y=.02,e.add(g);const x=new $({color:F.fairyGlow,transparent:!0,opacity:.08});for(let A=0;A<6;A++){const E=S()*6.28,T=E+.5+S()*1.5,b=n*.6+S()*n*.4,y=new I(new _t(.002,.002,b,3),x);y.position.set(Math.cos((E+T)/2)*n*.4,.005,Math.sin((E+T)/2)*n*.4),y.rotation.x=Math.PI/2,y.rotation.z=E,e.add(y)}const f=new J({color:4864560,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<3;A++){const E=S()*6.28,T=S()*n*.7,b=new I(new Q(.03,4,3),f);b.scale.set(1.3,.3,1.3),b.position.set(Math.cos(E)*T,.008,Math.sin(E)*T),e.add(b)}const m=new J({color:7833702,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<2;A++){const E=new I(new $e(.02+S()*.02,4),m);E.position.set((S()-.5)*.08,.06,(S()-.5)*.06),E.rotation.x=-Math.PI/2+S()*.4,e.add(E)}const w=[];for(let A=0;A<5;A++){const E=S()*6.28,T=S()*n*.9,b=new $({color:8978346,transparent:!0,opacity:.25}),y=new I(new Q(.005,3,3),b);y.position.set(Math.cos(E)*T,.01,Math.sin(E)*T),e.add(y),w.push(y)}const _=new $({color:657926,transparent:!0,opacity:.15,side:Dt}),M=new I(new er(n*.5,n*.85,12),_);return M.rotation.x=-Math.PI/2,M.position.y=.008,e.add(M),e.position.set(i,0,t),ct.add(e),{group:e,mushMat:o,discMat:p,sporeMat:h,spores:d,glowWorms:w,x:i,z:t,ringR:n,phase:S()*6.28,glowIntensity:0,active:!1}}function q1(i,t,e){const n=new re,s=new J({color:F.bubbleIris,emissive:F.bubbleIris,emissiveIntensity:.15,transparent:!0,opacity:.25,roughness:0,metalness:.6}),o=new I(Pn.bubble,s);n.add(o);const r=new $({color:15650047,transparent:!0,opacity:.1}),a=new I(new Ae(.13,.003,4,10),r);a.rotation.x=.5,a.rotation.y=S()*3,n.add(a);const c=new I(new Ae(.11,.003,4,10),r);c.rotation.x=-.8,c.rotation.z=1.2,n.add(c);const l=new $({color:F.bubbleShine,transparent:!0,opacity:.5}),u=new I(new Q(.04,4,3),l);u.position.set(.05,.07,.08),n.add(u);const h=new $({color:15658751,transparent:!0,opacity:.2}),d=new I(new Q(.025,3,3),h);d.position.set(-.06,-.04,-.06),n.add(d);const p=new $({color:16755438,transparent:!0,opacity:.12}),g=new I(new Q(.06,4,3),p);g.position.set(.02,-.02,.01),n.add(g);const x=new $({color:16772863,transparent:!0,opacity:.08}),f=new I(new Q(.12,5,4),x);n.add(f);const m=[16764125,13426175,14548940];for(let b=0;b<3;b++){const y=new $({color:m[b],transparent:!0,opacity:.06}),v=new I(new Ae(.14-b*.02,.002,4,8),y);v.position.y=-.04+b*.04,v.rotation.x=Math.PI/2,n.add(v)}const w=new $({color:16777215,transparent:!0,opacity:.6});for(let b=0;b<3;b++){const y=S()*6.28,v=S()*Math.PI-Math.PI/2,R=new I(new Q(.003,3,3),w);R.position.set(Math.cos(y)*Math.cos(v)*.14,Math.sin(v)*.14,Math.sin(y)*Math.cos(v)*.14),n.add(R)}const _=new $({color:11189196,transparent:!0,opacity:.1}),M=new I(new Q(.015,3,3),_);M.position.set((S()-.5)*.04,(S()-.5)*.04,(S()-.5)*.04),n.add(M);const A=new $({color:F.bubbleIris,transparent:!0,opacity:.15}),E=new I(new Q(.04,4,3),A);E.scale.set(1.3,.6,1.3),E.position.y=-.12,n.add(E);const T=.6+S()*.8;return n.scale.setScalar(T),n.position.set(i,t,e),ct.add(n),{group:n,shellMat:s,phase:S()*6.28,driftAng:S()*6.28,driftSpeed:.3+S()*.5,floatY:t,homeX:i,homeZ:e,bobAmp:.3+S()*.4,popped:!1,popTimer:0,sc:T}}function Y1(i,t){const e=new re,n=1.5+S()*1,s=new J({color:329746,roughness:.9}),o=new I(new $e(n*.85,10),s);o.rotation.x=-Math.PI/2,o.position.y=.005,e.add(o);const r=new J({color:F.pondWater,emissive:F.pondGlow,emissiveIntensity:.2,transparent:!0,opacity:.55,roughness:.05,metalness:.4}),a=new I(new $e(n,12),r);a.rotation.x=-Math.PI/2,a.position.y=.03,e.add(a);const c=new J({color:3816002,roughness:.85}),l=5+Math.floor(S()*4);for(let L=0;L<l;L++){const z=L/l*6.28+S()*.3,V=n+S()*.2-.1,k=.06+S()*.08,K=new I(new Q(k,4,3),c);K.scale.set(1+S()*.5,.4+S()*.3,1+S()*.5),K.position.set(Math.cos(z)*V,k*.2,Math.sin(z)*V),K.rotation.set(S(),S(),S()),e.add(K)}const u=new J({color:1725728,roughness:.7,side:Dt});for(let L=0;L<3;L++){const z=S()*6.28,V=n*.85+S()*.2;for(let k=0;k<3;k++){const K=new I(new ve(.015,.15+S()*.1),u);K.position.set(Math.cos(z)*V+(S()-.5)*.05,.08,Math.sin(z)*V+(S()-.5)*.05),K.rotation.y=S()*3,K.rotation.x=-.2,e.add(K)}}const h=new $({color:11197934,transparent:!0,opacity:.08}),d=[];for(let L=0;L<3;L++){const z=new I(new Ae(1,.004,4,20),h.clone());z.rotation.x=Math.PI/2,z.position.y=.036,e.add(z),d.push({mesh:z,phase:L/3})}const p=new J({color:F.lilyPad,roughness:.6,side:Dt}),g=4+Math.floor(S()*2),x=[];for(let L=0;L<g;L++){const z=S()*6.28,V=S()*n*.6,k=.15+S()*.15,K=new I(new $e(k,8),p);K.rotation.x=-Math.PI/2,K.position.set(Math.cos(z)*V,.05,Math.sin(z)*V),e.add(K);const W=new $({color:1724448,transparent:!0,opacity:.3}),lt=new I(new _t(.002,.002,k*1.5,3),W);lt.position.set(Math.cos(z)*V,.052,Math.sin(z)*V),lt.rotation.x=Math.PI/2,lt.rotation.z=S()*3,e.add(lt),x.push({mesh:K,phase:S()*6.28})}const f=new J({color:F.lilyFlower,emissive:F.lilyGlow,emissiveIntensity:.4,transparent:!0,opacity:.85,side:Dt}),m=.08;for(let L=0;L<6;L++){const z=L/6*6.28,V=new I(new ve(.06,.05),f);V.position.set(x[0].mesh.position.x+Math.cos(z)*.05,m,x[0].mesh.position.z+Math.sin(z)*.05),V.rotation.x=-1,V.rotation.y=-z,e.add(V)}const w=new J({color:16777130,emissive:F.lilyGlow,emissiveIntensity:.8}),_=new I(new Q(.025,4,3),w);if(_.position.set(x[0].mesh.position.x,m+.02,x[0].mesh.position.z),e.add(_),x.length>2){const L=new J({color:F.lilyFlower,emissive:F.lilyGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),z=new I(new Q(.03,5,4),L);z.scale.set(.8,1.2,.8),z.position.set(x[2].mesh.position.x,.09,x[2].mesh.position.z),e.add(z)}const M=new J({color:3815477,roughness:.8,transparent:!0,opacity:.5});for(let L=0;L<5;L++){const z=S()*6.28,V=S()*n*.7,k=new I(new Q(.02+S()*.025,4,3),M);k.scale.set(1+S()*.5,.4,1+S()*.5),k.position.set(Math.cos(z)*V,.015,Math.sin(z)*V),e.add(k)}const A=new $({color:2761752,transparent:!0,opacity:.12,side:Dt});for(let L=0;L<3;L++){const z=S()*6.28,V=S()*n*.5,k=new I(new $e(.08+S()*.06,5),A);k.rotation.x=-Math.PI/2,k.position.set(Math.cos(z)*V,.012,Math.sin(z)*V),e.add(k)}const E=new J({color:1122837,roughness:.7,transparent:!0,opacity:.4}),T=[];for(let L=0;L<2;L++){const z=S()*6.28,V=S()*n*.4,k=new I(new Q(.012,4,3),E);k.scale.set(.8,.5,1.3),k.position.set(Math.cos(z)*V,.04,Math.sin(z)*V),e.add(k);const K=new I(new _t(.002,.001,.025,3),E);K.position.set(Math.cos(z)*V-Math.cos(z)*.02,.04,Math.sin(z)*V-Math.sin(z)*.02),K.rotation.z=Math.PI/2,K.rotation.y=z,e.add(K),T.push({body:k,tail:K,ang:z,orbR:.15+S()*n*.35,speed:.3+S()*.4})}const b=new $({color:2250016,transparent:!0,opacity:.1,side:Dt});for(let L=0;L<3;L++){const z=S()*6.28,V=n*.7+S()*n*.25,k=new I(new $e(.06+S()*.04,5),b);k.rotation.x=-Math.PI/2,k.position.set(Math.cos(z)*V,.032,Math.sin(z)*V),e.add(k)}const y=new $({color:13426158,transparent:!0,opacity:.06}),v=new I(new Ae(n-.05,.01,4,16),y);v.rotation.x=Math.PI/2,v.position.y=.035,e.add(v);const R=new J({color:4861976,roughness:.8,side:Dt,transparent:!0,opacity:.6}),U=new I(new $e(.03,5),R);return U.rotation.x=-Math.PI/2,U.position.set((S()-.5)*n*.5,.04,(S()-.5)*n*.5),e.add(U),e.position.set(i,0,t),ct.add(e),{group:e,waterMat:r,flMat:f,pads:x,ripples:d,tadpoles:T,x:i,z:t,phase:S()*6.28,pondR:n}}function Z1(i,t){const e=new re,n=new $({color:F.orbGold}),s=new I(new Q(.2,10,8),n);e.add(s);const o=new $({color:16777215}),r=new I(new Q(.06,6,4),o);e.add(r);const a=new $({color:16772744,transparent:!0,opacity:.4,wireframe:!0}),c=new I(new Gs(.15,0),a);e.add(c);const l=new $({color:F.orbGlow,transparent:!0,opacity:.5}),u=new I(new Q(.35,8,6),l);e.add(u);const h=new $({color:F.orbGlow,transparent:!0,opacity:.3});for(let T=0;T<8;T++){const b=T/8*6.28,y=new I(new ei(.02,.25,3),h);y.position.set(Math.cos(b)*.3,Math.sin(b*2)*.05,Math.sin(b)*.3),y.rotation.z=-b+Math.PI/2,y.rotation.y=b,e.add(y)}const d=new $({color:F.orbInner,transparent:!0,opacity:.15}),p=new I(new Q(.6,8,5),d);e.add(p);for(let T=0;T<6;T++){const b=new I(new Q(.03,4,3),new $({color:16777215})),y=T/6*6.28;b.position.set(Math.cos(y)*.4,Math.sin(y*2)*.1,Math.sin(y)*.4),e.add(b)}const g=new $({color:F.orbGold,transparent:!0,opacity:.7});for(let T=0;T<4;T++){const b=T/4*6.28+.4,y=new I(new Q(.015,3,3),g);y.position.set(Math.cos(b)*.5,0,Math.sin(b)*.5),e.add(y)}const x=new $({color:16768426,transparent:!0,opacity:.12});for(let T=0;T<3;T++){const b=new I(new Ae(.28,.003,4,12),x);b.rotation.set(T*1.05,T*.7,0),e.add(b)}const f=new $({color:F.orbGlow,transparent:!0,opacity:.08}),m=new I(new Ae(.4,.004,4,16),f);m.rotation.x=Math.PI/2,e.add(m);const w=new $({color:16772812,transparent:!0,opacity:.15}),_=new I(new Ae(.25,.012,4,10),w);_.rotation.x=Math.PI/2,e.add(_);const M=new $({color:16777215,transparent:!0,opacity:.5});for(let T=0;T<6;T++){const b=S()*6.28,y=S()*Math.PI-Math.PI/2,v=new I(new Q(.008,3,3),M);v.position.set(Math.cos(b)*Math.cos(y)*.2,Math.sin(y)*.2,Math.sin(b)*Math.cos(y)*.2),e.add(v)}const A=new $({color:F.orbGlow,transparent:!0,opacity:.1,side:Dt}),E=new I(new $e(.5,8),A);return E.rotation.x=-Math.PI/2,E.position.y=-.95,e.add(E),e.position.set(i,1,t),ct.add(e),{group:e,coreMat:n,glowMat:l,hazeMat:d,x:i,z:t,found:!1,flyUp:!1,flyY:1,phase:S()*6.28,laserLine:null,laserMat:null}}function $1(i,t){const e=new re,n=new J({color:F.rockBase,roughness:.85,metalness:.05}),s=new J({color:F.rockLight,roughness:.8,metalness:.05}),o=new J({color:F.rockMoss,emissive:F.rockMoss,emissiveIntensity:.03,roughness:.9}),r=.3+S()*.5,a=new I(new Q(r,8,6),S()<.6?n:s),c=.4+S()*.4;a.scale.set(1+S()*.6,c,1+S()*.6),a.position.y=r*c*.35,a.rotation.set(S()*.5,S()*3,S()*.3),a.castShadow=!0,a.receiveShadow=!0,e.add(a);const l=1+Math.floor(S()*3);for(let E=0;E<l;E++){const T=S()*6.28,b=r*.6+S()*r*.5,y=r*.3+S()*r*.4,v=new I(new Q(y,5,4),S()<.5?n:s),R=.3+S()*.4;v.scale.set(1+S()*.5,R,1+S()*.5),v.position.set(Math.cos(T)*b,y*R*.3,Math.sin(T)*b),v.rotation.set(S()*.8,S()*3,S()*.5),e.add(v)}const u=2+Math.floor(S()*3);for(let E=0;E<u;E++){const T=S()*6.28,b=S()*r*.6,y=r*.15+S()*r*.2,v=new I(new Q(y,4,3),o);v.scale.set(1.5,.2,1.5),v.position.set(Math.cos(T)*b,r*.35+S()*.05,Math.sin(T)*b),e.add(v)}const h=[8943428,10061909,6715221,11180390];for(let E=0;E<3;E++){const T=new J({color:h[Math.floor(S()*h.length)],roughness:.9,transparent:!0,opacity:.5}),b=S()*6.28,y=new I(new Q(r*.06+S()*r*.08,3,3),T);y.scale.set(2,.15,2),y.position.set(Math.cos(b)*r*.5,r*.25+S()*.1,Math.sin(b)*r*.5),e.add(y)}const d=new $({color:1381656,transparent:!0,opacity:.35}),p=2+Math.floor(S()*3);for(let E=0;E<p;E++){const T=S()*6.28,b=r*.3+S()*r*.4,y=new I(new _t(.003,.001,b,3),d),v=r*.3+S()*r*.2;y.position.set(Math.cos(T)*v,r*.2+S()*r*.15,Math.sin(T)*v),y.rotation.set(S()*.5,T,Math.PI/2+S()*.4),e.add(y)}const g=new $({color:660752,transparent:!0,opacity:.2,side:Dt}),x=1+Math.floor(S()*2);for(let E=0;E<x;E++){const T=S()*6.28,b=r*.3+S()*r*.3,y=new I(new ve(.02+S()*.015,b),g);y.position.set(Math.cos(T)*r*.45,r*.15,Math.sin(T)*r*.45),y.rotation.y=-T,e.add(y)}const f=[],m=new $({color:8965375,transparent:!0,opacity:.4});if(S()<.5){const E=2+Math.floor(S()*3);for(let T=0;T<E;T++){const b=S()*6.28,y=r*.25+S()*r*.25,v=new I(new Q(.006,3,3),m);v.position.set(Math.cos(b)*y,r*.15+S()*r*.2,Math.sin(b)*y),e.add(v),f.push(v)}}const w=new $({color:657926,transparent:!0,opacity:.12,side:Dt}),_=new I(new er(r*.5,r*1,8),w);_.rotation.x=-Math.PI/2,_.position.y=.005,e.add(_);const M=new J({color:3816e3,roughness:.9}),A=4+Math.floor(S()*3);for(let E=0;E<A;E++){const T=S()*6.28,b=r*.5+S()*r*.6,y=.03+S()*.05,v=new I(new Q(y,3,3),M);v.scale.set(1+S()*.5,.4,1+S()*.5),v.position.set(Math.cos(T)*b,y*.15,Math.sin(T)*b),e.add(v)}if(S()<.6){const E=new J({color:3385941,emissive:F.grassTip,emissiveIntensity:.05,roughness:.7,side:Dt});for(let T=0;T<3;T++){const b=S()*6.28,y=new I(new ve(.015,.08+S()*.06),E);y.position.set(Math.cos(b)*r*.3,r*.3,Math.sin(b)*r*.3),y.rotation.y=S()*3,y.rotation.x=-.2-S()*.3,e.add(y)}}return e.position.set(i,0,t),ct.add(e),{group:e,x:i,z:t,colR:r*.8,sparkles:f,sparkleMat:m}}let N0=null,z0=null,F0=null,O0=null,Sh=[];function j1(){return N0}function K1(){return z0}function J1(){return F0}function Q1(){return O0}function tS(){return Sh}function eS(){const i=new re,t=new J({color:F.obeliskBlack,roughness:.2,metalness:.8,emissive:F.obeliskPink,emissiveIntensity:0});z0=t;const e=new I(new _t(1.2,1.8,be,4),t);e.position.y=be/2,e.rotation.y=Math.PI/4,e.castShadow=!0,i.add(e);const n=new $({color:3351108,transparent:!0,opacity:.2});for(let b=0;b<4;b++){const y=b/4*6.28+Math.PI/4,v=new I(new _t(.03,.04,be*.9,3),n);v.position.set(Math.cos(y)*1.55,be*.45,Math.sin(y)*1.55),i.add(v)}const s=new $({color:F.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<4;b++){const y=b/4*6.28+Math.PI/4;for(let R=0;R<3;R++){const U=6+R*4,L=new I(new _t(.015,.015,.8,3),s);L.position.set(Math.cos(y)*1.6,U,Math.sin(y)*1.6),L.rotation.z=Math.PI/2,L.rotation.y=-y,L.visible=!1,i.add(L)}const v=new I(new _t(.012,.012,2.5,3),s);v.position.set(Math.cos(y)*1.6,12,Math.sin(y)*1.6),v.visible=!1,i.add(v)}const o=new J({color:F.obeliskBlack,roughness:.1,metalness:.9,emissive:F.obeliskPink,emissiveIntensity:0});F0=o;const r=new I(new ei(1.3,3,4),o);r.position.y=be+1.5,r.rotation.y=Math.PI/4,i.add(r);const a=new $({color:F.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<4;b++){const y=b/4*6.28+Math.PI/4,v=new I(new _t(.02,.02,3.2,3),a);v.position.set(Math.cos(y)*.8,be+1.5,Math.sin(y)*.8),v.rotation.z=.35*(y<3.14?1:-1),v.rotation.y=-y,v.visible=!1,i.add(v)}for(let b=0;b<5;b++){const y=new I(new Ae(1.85-b*.02,.04,6,4),new $({color:2236979}));y.position.y=4+b*5,y.rotation.x=Math.PI/2,i.add(y)}const c=new J({color:1118488,roughness:.3,metalness:.7}),l=new I(new _t(2.2,2.5,.6,4),c);l.position.y=.3,l.rotation.y=Math.PI/4,i.add(l);const u=new I(new _t(2.8,3,.4,4),c);u.position.y=.05,u.rotation.y=Math.PI/4,i.add(u);const h=new $({color:F.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<8;b++){const y=b/8*6.28,v=new I(new Q(.06,4,3),h);v.position.set(Math.cos(y)*2.5,be*.7+b*.5,Math.sin(y)*2.5),v.visible=!1,i.add(v)}const d=new $({color:1710626,transparent:!0,opacity:.08});for(let b=0;b<6;b++){const y=S()*6.28,v=2+S()*be*.7,R=new I(new _t(.008,.008,.5+S()*.5,3),d);R.position.set(Math.cos(y)*1.6,v,Math.sin(y)*1.6),R.rotation.z=(S()-.5)*.8,R.rotation.y=-y,i.add(R)}const p=new J({color:921108,roughness:.5,metalness:.4});for(let b=0;b<12;b++){const y=S()*6.28,v=3+S()*2,R=.15+S()*.25,U=new I(new Q(R,4,3),p);U.scale.set(1+S()*.5,.3+S()*.3,1+S()*.5),U.position.set(Math.cos(y)*v,R*.15,Math.sin(y)*v),U.rotation.set(S(),S(),S()),i.add(U)}const g=new $({color:F.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<4;b++){const y=b/4*6.28+Math.PI/4;for(let v=0;v<5;v++){const R=5+v*3.5+S()*.5,U=(S()-.5)*.4,L=new I(new Q(.04,4,3),g);L.position.set(Math.cos(y)*1.58+Math.cos(y+1.57)*U,R,Math.sin(y)*1.58+Math.sin(y+1.57)*U),L.visible=!1,i.add(L)}}const x=new $({color:F.obeliskPink,transparent:!0,opacity:.8,blending:ce,depthWrite:!1}),f=new I(new Q(.5,12,8),x);f.position.y=be+3,i.add(f);const m=new $({color:F.obeliskPink,transparent:!0,opacity:.2,blending:ce,depthWrite:!1}),w=new I(new Q(.9,8,6),m);w.position.y=be+3,i.add(w),O0={mesh:f,haze:w,mat:x,hazeMat:m},Sh=[];const _=[.8,1.1,1.4,1.8],M=[11158783,10040302,12277247,8921821];for(let b=0;b<4;b++){const y=new $({color:M[b],transparent:!0,opacity:.4,blending:ce,depthWrite:!1,side:Dt}),v=new I(new Ae(_[b],.02,6,24),y);v.position.y=be+3,v.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),i.add(v),Sh.push({mesh:v,mat:y,rx:(Math.random()-.5)*2,ry:(Math.random()-.5)*2,rz:(Math.random()-.5)*1.5})}const A=new $({color:0,transparent:!0,opacity:.15,side:Dt}),E=new I(new $e(4,8),A);E.rotation.x=-Math.PI/2,E.position.y=.005,i.add(E),i.position.set(0,-be,0),ct.add(i),N0=i;const T=new ar(8939212,0,30);i.add(T),T.position.set(0,be+1,0)}let B0=null,G0=null;function nS(){return B0}function iS(){return G0}function sS(){const i=new J({color:F.moatBlue,emissive:1136042,emissiveIntensity:.3,transparent:!0,opacity:0,roughness:.1,metalness:.3});G0=i;const t=new Ic;t.absarc(0,0,6,0,6.28,!1);const e=new Pc;e.absarc(0,0,3,0,6.28,!0),t.holes.push(e);const n=new Zr(t,24),s=new I(n,i);s.rotation.x=-Math.PI/2,s.position.y=.05,s.visible=!1,ct.add(s),B0=s;const o=new $({color:4491468,transparent:!0,opacity:0});for(let p=0;p<12;p++){const g=p/12*6.28+S()*.3,x=3.5+S()*2,f=new I(new Q(.04+S()*.04,4,3),o);f.scale.set(1.2,.4,1.2),f.position.set(Math.cos(g)*x,.02,Math.sin(g)*x),f.visible=!1,ct.add(f)}const r=new $({color:13426158,transparent:!0,opacity:0,side:Dt});for(let p=0;p<6;p++){const g=p/6*6.28+S()*.5,x=new I(new $e(.12+S()*.1,5),r);x.rotation.x=-Math.PI/2,x.position.set(Math.cos(g)*3.3,.06,Math.sin(g)*3.3),x.visible=!1,ct.add(x)}const a=new $({color:8960989,transparent:!0,opacity:0});for(let p=0;p<8;p++){const g=p/8*6.28,x=4+S()*1.5,f=new I(new _t(.003,.003,.4,3),a);f.position.set(Math.cos(g)*x,.055,Math.sin(g)*x),f.rotation.x=Math.PI/2,f.rotation.z=g+Math.PI/2,f.visible=!1,ct.add(f)}const c=new $({color:264208,transparent:!0,opacity:0,side:Dt}),l=new Ic;l.absarc(0,0,5.2,0,6.28,!1);const u=new Pc;u.absarc(0,0,3.8,0,6.28,!0),l.holes.push(u);const h=new Zr(l,16),d=new I(h,c);d.rotation.x=-Math.PI/2,d.position.y=.04,d.visible=!1,ct.add(d)}const Jr=[];function op(i,t,e,n,s){const o=[],r=[],a=[];for(let l=0;l<e;l++){const u=i[l],h=i[l+1],d=h.x-u.x;h.y-u.y;const p=h.z-u.z,g=Math.sqrt(d*d+p*p)||1,x=-p/g,f=d/g,m=(l+.5)/e,w=.7+Math.sin(m*Math.PI)*.5,_=t*w/2,M=[u.x+x*_,u.y,u.z+f*_],A=[u.x-x*_,u.y,u.z-f*_],E=[h.x+x*_,h.y,h.z+f*_],T=[h.x-x*_,h.y,h.z-f*_];o.push(...M,...E,...A,...A,...E,...T);const b=l/e,y=(l+1)/e;if(a.push(b,0,y,0,b,1,b,1,y,0,y,1),s){const U=.85+Math.sin(m*Math.PI*3)*.15,L=1.2*U,z=.6*U;r.push(s.r*L,s.g*L,s.b*L),r.push(s.r*L,s.g*L,s.b*L),r.push(s.r*z,s.g*z,s.b*z),r.push(s.r*z,s.g*z,s.b*z),r.push(s.r*L,s.g*L,s.b*L),r.push(s.r*z,s.g*z,s.b*z)}}const c=new we;return c.setAttribute("position",new Ht(o,3)),c.setAttribute("uv",new Ht(a,2)),r&&c.setAttribute("color",new Ht(r,3)),c.computeVertexNormals(),c}function oS(){for(let c=0;c<6;c++){const l=F.rainbow[c],u=c/6*6.28,h=6+c*.8,d=be+6+c*2.5,p=1-c*.05,g=[],x=32;for(let V=0;V<=x;V++){const k=V/x,K=u+k*Math.PI,W=Math.cos(K)*h,lt=Math.sin(K)*h,pt=Math.sin(k*Math.PI)*d;g.push(new N(W,pt,lt))}const f=new ot(l),m=op(g,p,x,!0,f),w=new $({vertexColors:!0,transparent:!0,opacity:0,side:Dt,depthWrite:!1,blending:ce}),_=new I(m,w);_.visible=!1,ct.add(_);const M=new oa(g),A=new $({color:16777215,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),E=new An(M,x,.03,4,!1),T=new I(E,A);T.visible=!1,ct.add(T);const b=[],y=new $({color:16777215,transparent:!0,opacity:0,blending:ce,depthWrite:!1});for(let V=0;V<8;V++){const k=new I(new Q(.06,4,3),y.clone());k.visible=!1,ct.add(k),b.push({mesh:k,mat:k.material,phase:V/8,speed:.15+Math.random()*.1})}const v=new $({color:l,transparent:!0,opacity:0,side:Dt,blending:ce}),R=g[0],U=g[g.length-1],L=new I(new $e(1.2,8),v);L.rotation.x=-Math.PI/2,L.position.set(R.x,.03,R.z),L.visible=!1,ct.add(L);const z=new I(new $e(1.2,8),v.clone());z.rotation.x=-Math.PI/2,z.position.set(U.x,.03,U.z),z.visible=!1,ct.add(z),Jr.push({mesh:_,mat:w,coreLine:T,coreMat:A,curve:M,sparkles:b,pools:[L,z],poolMat:v,targetOpacity:0})}const i=[],t=10,e=be+14,n=32;for(let c=0;c<=n;c++){const l=c/n,u=l*Math.PI;i.push(new N(Math.cos(u)*t,Math.sin(l*Math.PI)*e,Math.sin(u)*t))}const s=new ot(15654399),o=op(i,1.5,n,!0,s),r=new $({vertexColors:!0,transparent:!0,opacity:0,side:Dt,depthWrite:!1,blending:ce}),a=new I(o,r);a.visible=!1,ct.add(a),Jr.push({mesh:a,mat:r,targetOpacity:0})}function rS(i){for(let t=0;t<Jr.length;t++){const e=Jr[t];if(!(!e.sparkles||!e.curve)&&e.mesh.visible){e.coreLine&&(e.coreLine.visible=e.mesh.visible,e.coreMat.opacity=e.mat.opacity*.4);for(let n=0;n<e.sparkles.length;n++){const s=e.sparkles[n];s.phase+=s.speed*.016,s.phase>1&&(s.phase-=1);const o=e.curve.getPoint(s.phase);s.mesh.position.copy(o),s.mesh.visible=e.mesh.visible;const r=Math.sin(i*8+n*2.1)*.5+.5;s.mat.opacity=e.mat.opacity*r*.7}if(e.pools)for(let n=0;n<e.pools.length;n++)e.pools[n].visible=e.mesh.visible,e.poolMat&&(e.poolMat.opacity=e.mat.opacity*.3)}}}let vn=null;const di=[],hn=new le,Gr=new ot;function aS(i){const t=new $({color:16777215,transparent:!0,opacity:1});vn=new ti(Pn.fly,t,i),vn.instanceMatrix.setUsage(xe),vn.instanceColor=new Ei(new Float32Array(i*3),3),vn.instanceColor.setUsage(xe),hn.scale.setScalar(0),hn.updateMatrix();for(let e=0;e<i;e++){vn.setMatrixAt(e,hn.matrix);const n=e%3===0?F.fireflyB:F.firefly;Gr.setHex(n),vn.setColorAt(e,Gr),di.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,phase:Math.random()*6.28,wander:Math.random()*6.28,colorHex:n})}vn.count=i,vn.frustumCulled=!1,ct.add(vn)}function fc(i,t,e,n){let s=null;for(let o=0;o<di.length;o++)if(!di[o].active){s=di[o];break}if(!s){let o=1/0;for(let r=0;r<di.length;r++)di[r].life<o&&(o=di[r].life,s=di[r])}s.x=i,s.y=t+.5+Math.random()*3,s.z=e,s.vx=(Math.random()-.5)*2,s.vy=Math.random()-.5,s.vz=(Math.random()-.5)*2,s.life=n,s.max=n,s.active=!0,s.wander=Math.random()*6.28}function k0(i,t){let e=0,n=!1;for(let s=0;s<di.length;s++){const o=di[s];if(!o.active){hn.position.set(0,-100,0),hn.scale.setScalar(0),hn.updateMatrix(),vn.setMatrixAt(s,hn.matrix);continue}if(o.life-=i,o.life<=0){o.active=!1,hn.position.set(0,-100,0),hn.scale.setScalar(0),hn.updateMatrix(),vn.setMatrixAt(s,hn.matrix);continue}e++,o.wander+=(Math.random()-.5)*3*i,o.vx+=Math.cos(o.wander)*1.5*i,o.vz+=Math.sin(o.wander)*1.5*i,o.vy+=Math.sin(t*2+o.phase)*i,o.vx*=.995,o.vy*=.995,o.vz*=.995,o.x+=o.vx*i,o.y+=o.vy*i,o.z+=o.vz*i;const r=Yt(o.x,o.z)+.3;o.y<r&&(o.y=r,o.vy=Math.abs(o.vy)*.5),o.y>12&&(o.vy-=2*i);const a=Math.sin(t*3+o.phase)*.5+.5,l=o.life/o.max*(.4+a*.6),u=.6+a*.6;hn.position.set(o.x,o.y,o.z),hn.scale.setScalar(u),hn.updateMatrix(),vn.setMatrixAt(s,hn.matrix),Gr.setHex(o.colorHex),Gr.multiplyScalar(l),vn.setColorAt(s,Gr),n=!0}return vn.instanceMatrix.needsUpdate=!0,n&&(vn.instanceColor.needsUpdate=!0),e}let Mn=null;const pi=[],fn=new le,Oc=new ot,cS=new ot(F.spore);function lS(i){const t=new $({color:16777215,transparent:!0,opacity:1});Mn=new ti(Pn.spore,t,i),Mn.instanceMatrix.setUsage(xe),Mn.instanceColor=new Ei(new Float32Array(i*3),3),Mn.instanceColor.setUsage(xe),fn.scale.setScalar(0),fn.updateMatrix();for(let e=0;e<i;e++)Mn.setMatrixAt(e,fn.matrix),Oc.setHex(F.spore),Mn.setColorAt(e,Oc),pi.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});Mn.count=i,Mn.frustumCulled=!1,ct.add(Mn)}function uS(i,t,e){let n=null;for(let s=0;s<pi.length;s++)if(!pi[s].active){n=pi[s];break}if(!n){let s=1/0;for(let o=0;o<pi.length;o++)pi[o].life<s&&(s=pi[o].life,n=pi[o])}n.x=i,n.y=t,n.z=e,n.vx=(Math.random()-.5)*.3,n.vy=.4+Math.random()*.4,n.vz=(Math.random()-.5)*.3,n.life=3+Math.random()*3,n.max=n.life,n.active=!0}let H0=0,V0=0;function hS(i,t){H0=i,V0=t}function fS(i){let t=0,e=!1;for(let n=0;n<pi.length;n++){const s=pi[n];if(!s.active){fn.position.set(0,-100,0),fn.scale.setScalar(0),fn.updateMatrix(),Mn.setMatrixAt(n,fn.matrix);continue}if(s.life-=i,s.life<=0){s.active=!1,fn.position.set(0,-100,0),fn.scale.setScalar(0),fn.updateMatrix(),Mn.setMatrixAt(n,fn.matrix);continue}t++,s.vy+=.3*i,s.vx+=H0*.3*i,s.vz+=V0*.3*i,s.vx*=.997,s.vy*=.997,s.vz*=.997,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i;const o=s.life/s.max*.7;fn.position.set(s.x,s.y,s.z),fn.scale.setScalar(1),fn.updateMatrix(),Mn.setMatrixAt(n,fn.matrix),Oc.copy(cS).multiplyScalar(o),Mn.setColorAt(n,Oc),e=!0}return Mn.instanceMatrix.needsUpdate=!0,e&&(Mn.instanceColor.needsUpdate=!0),t}let _n=null;const ko=[];let Zl=0;const dn=new le,Bc=new ot,W0=new ot(F.starMote);function dS(i){const t=new $({color:16777215,transparent:!0,opacity:1});_n=new ti(Pn.starMote,t,i),_n.instanceMatrix.setUsage(xe),_n.instanceColor=new Ei(new Float32Array(i*3),3),_n.instanceColor.setUsage(xe),dn.scale.setScalar(0),dn.updateMatrix();for(let e=0;e<i;e++)_n.setMatrixAt(e,dn.matrix),Bc.copy(W0),_n.setColorAt(e,Bc),ko.push({x:0,y:0,z:0,life:0,max:0,active:!1,vy:0,drift:0});_n.count=i,_n.frustumCulled=!1,ct.add(_n)}function pS(i){let t=null;for(let e=0;e<ko.length;e++)if(!ko[e].active){t=ko[e];break}t&&(t.x=i.x+(Math.random()-.5)*60,t.z=i.z+(Math.random()-.5)*60,t.y=15+Math.random()*20,t.life=6+Math.random()*6,t.max=t.life,t.active=!0,t.vy=-.15-Math.random()*.3,t.drift=Math.random()*6.28)}function X0(i,t,e){Zl+=i,Zl>.15&&(Zl=0,pS(e));let n=!1;for(let s=0;s<ko.length;s++){const o=ko[s];if(!o.active){dn.position.set(0,-100,0),dn.scale.setScalar(0),dn.updateMatrix(),_n.setMatrixAt(s,dn.matrix);continue}if(o.life-=i,o.life<=0||o.y<.5){o.active=!1,dn.position.set(0,-100,0),dn.scale.setScalar(0),dn.updateMatrix(),_n.setMatrixAt(s,dn.matrix);continue}o.y+=o.vy*i,o.drift+=(Math.random()-.5)*.5*i,o.x+=Math.sin(o.drift)*.1*i,o.z+=Math.cos(o.drift)*.08*i;const r=o.life/o.max,a=Math.sin(t*4+s)*.3+.7,c=r*a*.7,l=.5+a*.5;dn.position.set(o.x,o.y,o.z),dn.scale.setScalar(l),dn.updateMatrix(),_n.setMatrixAt(s,dn.matrix),Bc.copy(W0).multiplyScalar(c),_n.setColorAt(s,Bc),n=!0}_n.instanceMatrix.needsUpdate=!0,n&&(_n.instanceColor.needsUpdate=!0)}let yn=null;const Ho=[],pn=new le,Gc=new ot,q0=new ot(8956535);function mS(i){const t=new $({color:16777215,transparent:!0,opacity:1});yn=new ti(Pn.dustMote,t,i),yn.instanceMatrix.setUsage(xe),yn.instanceColor=new Ei(new Float32Array(i*3),3),yn.instanceColor.setUsage(xe),pn.scale.setScalar(0),pn.updateMatrix();for(let e=0;e<i;e++)yn.setMatrixAt(e,pn.matrix),Gc.copy(q0),yn.setColorAt(e,Gc),Ho.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});yn.count=i,yn.frustumCulled=!1,ct.add(yn)}function rp(i,t,e){for(let n=0;n<e;n++){let s=null;for(let a=0;a<Ho.length;a++)if(!Ho[a].active){s=Ho[a];break}if(!s)continue;const o=Math.random()*6.28,r=1+Math.random()*2;s.x=i+Math.cos(o)*.2,s.y=Yt(i,t)+.1,s.z=t+Math.sin(o)*.2,s.vx=Math.cos(o)*r,s.vy=.5+Math.random()*1.5,s.vz=Math.sin(o)*r,s.life=.6+Math.random()*.6,s.max=s.life,s.active=!0}}function gS(i){let t=!1;for(let e=0;e<Ho.length;e++){const n=Ho[e];if(!n.active){pn.position.set(0,-100,0),pn.scale.setScalar(0),pn.updateMatrix(),yn.setMatrixAt(e,pn.matrix);continue}if(n.life-=i,n.life<=0){n.active=!1,pn.position.set(0,-100,0),pn.scale.setScalar(0),pn.updateMatrix(),yn.setMatrixAt(e,pn.matrix);continue}n.vy-=3*i,n.vx*=.96,n.vy*=.96,n.vz*=.96,n.x+=n.vx*i,n.y+=n.vy*i,n.z+=n.vz*i;const s=Yt(n.x,n.z)+.05;n.y<s&&(n.y=s,n.vy=0,n.vx*=.8,n.vz*=.8);const o=n.life/n.max*.4;pn.position.set(n.x,n.y,n.z),pn.scale.setScalar(1),pn.updateMatrix(),yn.setMatrixAt(e,pn.matrix),Gc.copy(q0).multiplyScalar(o),yn.setColorAt(e,Gc),t=!0}yn.instanceMatrix.needsUpdate=!0,t&&(yn.instanceColor.needsUpdate=!0)}let wn=null;const Vo=[],mn=new le,kc=new ot,Y0=new ot(F.bubblePop),xS=new Q(.02,3,3);function vS(i){const t=new $({color:16777215,transparent:!0,opacity:1});wn=new ti(xS,t,i),wn.instanceMatrix.setUsage(xe),wn.instanceColor=new Ei(new Float32Array(i*3),3),wn.instanceColor.setUsage(xe),mn.scale.setScalar(0),mn.updateMatrix();for(let e=0;e<i;e++)wn.setMatrixAt(e,mn.matrix),kc.copy(Y0),wn.setColorAt(e,kc),Vo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});wn.count=i,wn.frustumCulled=!1,ct.add(wn)}function MS(i,t,e,n){for(let s=0;s<n;s++){let o=null;for(let l=0;l<Vo.length;l++)if(!Vo[l].active){o=Vo[l];break}if(!o)continue;const r=Math.random()*6.28,a=Math.random()*3.14,c=1+Math.random()*2;o.x=i,o.y=t,o.z=e,o.vx=Math.cos(r)*Math.sin(a)*c,o.vy=Math.cos(a)*c,o.vz=Math.sin(r)*Math.sin(a)*c,o.life=.4+Math.random()*.4,o.max=o.life,o.active=!0}}function _S(i){let t=!1;for(let e=0;e<Vo.length;e++){const n=Vo[e];if(!n.active){mn.position.set(0,-100,0),mn.scale.setScalar(0),mn.updateMatrix(),wn.setMatrixAt(e,mn.matrix);continue}if(n.life-=i,n.life<=0){n.active=!1,mn.position.set(0,-100,0),mn.scale.setScalar(0),mn.updateMatrix(),wn.setMatrixAt(e,mn.matrix);continue}n.vy-=2*i,n.vx*=.97,n.vy*=.97,n.vz*=.97,n.x+=n.vx*i,n.y+=n.vy*i,n.z+=n.vz*i;const s=n.life/n.max*.8;mn.position.set(n.x,n.y,n.z),mn.scale.setScalar(1),mn.updateMatrix(),wn.setMatrixAt(e,mn.matrix),kc.copy(Y0).multiplyScalar(s),wn.setColorAt(e,kc),t=!0}wn.instanceMatrix.needsUpdate=!0,t&&(wn.instanceColor.needsUpdate=!0)}let Sn=null;const Wo=[],tn=new le,Hc=new ot,Z0=[new ot(F.leafGlow),new ot(3394662),new ot(2271880),new ot(5636044),new ot(4513262)];let $0=0,j0=0;function yS(i,t,e){$0=i,j0=t}function wS(i){const t=new ve(.12,.08),e=new $({color:16777215,transparent:!0,opacity:1,side:Dt,depthWrite:!1,blending:ce});Sn=new ti(t,e,i),Sn.instanceMatrix.setUsage(xe),Sn.instanceColor=new Ei(new Float32Array(i*3),3),Sn.instanceColor.setUsage(xe),tn.scale.setScalar(0),tn.updateMatrix();for(let n=0;n<i;n++)Sn.setMatrixAt(n,tn.matrix),Hc.setHex(0),Sn.setColorAt(n,Hc),Wo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,rvx:0,rvy:0,rvz:0,life:0,max:0,active:!1,colorIdx:0});Sn.count=i,Sn.frustumCulled=!1,ct.add(Sn)}function SS(i,t,e){let n=null;for(let o=0;o<Wo.length;o++)if(!Wo[o].active){n=Wo[o];break}if(!n)return;n.x=i+(Math.random()-.5)*2,n.y=t+Math.random()*2,n.z=e+(Math.random()-.5)*2;const s=Math.random()*6.28;n.vx=Math.cos(s)*.3,n.vy=-.2-Math.random()*.3,n.vz=Math.sin(s)*.3,n.rvx=(Math.random()-.5)*4,n.rvy=(Math.random()-.5)*3,n.rvz=(Math.random()-.5)*2,n.rx=Math.random()*6.28,n.ry=Math.random()*6.28,n.rz=Math.random()*6.28,n.life=4+Math.random()*4,n.max=n.life,n.active=!0,n.colorIdx=Math.floor(Math.random()*Z0.length)}function bS(i,t){let e=!1;for(let n=0;n<Wo.length;n++){const s=Wo[n];if(!s.active){tn.position.set(0,-100,0),tn.scale.setScalar(0),tn.updateMatrix(),Sn.setMatrixAt(n,tn.matrix);continue}if(s.life-=i,s.life<=0||s.y<-.5){s.active=!1,tn.position.set(0,-100,0),tn.scale.setScalar(0),tn.updateMatrix(),Sn.setMatrixAt(n,tn.matrix);continue}s.vx+=$0*.4*i,s.vz+=j0*.4*i,s.vx+=Math.sin(t*3+n*1.7)*.5*i,s.vz+=Math.cos(t*2.5+n*2.1)*.3*i,s.vy-=.3*i,s.vx*=.995,s.vy=Math.max(s.vy,-.8),s.vz*=.995,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i,s.rx+=s.rvx*i,s.ry+=s.rvy*i,s.rz+=s.rvz*i;const o=s.life/s.max,r=o*(.6+Math.sin(t*2+n*.8)*.4),a=.8+o*.4;tn.position.set(s.x,s.y,s.z),tn.rotation.set(s.rx,s.ry,s.rz),tn.scale.setScalar(a),tn.updateMatrix(),Sn.setMatrixAt(n,tn.matrix),Hc.copy(Z0[s.colorIdx]).multiplyScalar(r),Sn.setColorAt(n,Hc),e=!0}Sn.instanceMatrix.needsUpdate=!0,e&&(Sn.instanceColor.needsUpdate=!0)}const $a=40,bh=8;let en=null;const mi=[],Fn=new le,us=new ot,K0=new ot(4513194);let ap=0,cp=0,bf=!1;function TS(){const i=new Ic;return i.moveTo(0,-.18),i.quadraticCurveTo(.1,-.17,.11,-.06),i.lineTo(.1,-.02),i.lineTo(.13,.12),i.quadraticCurveTo(.125,.14,.11,.12),i.lineTo(.08,0),i.quadraticCurveTo(.05,-.02,.03,0),i.lineTo(.03,.05),i.lineTo(.02,.22),i.quadraticCurveTo(0,.245,-.02,.22),i.lineTo(-.03,.05),i.lineTo(-.03,0),i.quadraticCurveTo(-.05,-.02,-.08,0),i.lineTo(-.11,.12),i.quadraticCurveTo(-.125,.14,-.13,.12),i.lineTo(-.1,-.02),i.lineTo(-.11,-.06),i.quadraticCurveTo(-.1,-.17,0,-.18),new Zr(i)}function ES(){const i=TS(),t=new $({color:16777215,transparent:!0,opacity:1,blending:ce,depthWrite:!1,side:Dt});en=new ti(i,t,$a),en.instanceMatrix.setUsage(xe),en.instanceColor=new Ei(new Float32Array($a*3),3),en.instanceColor.setUsage(xe),Fn.position.set(0,-100,0),Fn.scale.setScalar(0),Fn.updateMatrix();for(let e=0;e<$a;e++)en.setMatrixAt(e,Fn.matrix),us.setScalar(0),en.setColorAt(e,us),mi.push({active:!1,life:0,maxLife:bh,x:0,z:0});en.count=$a,en.frustumCulled=!1,ct.add(en),bf=!0}function AS(i,t,e,n){if(!bf)return;const s=i-ap,o=t-cp;if(s*s+o*o<(n?.25:.64))return;ap=i,cp=t;let c=null,l=-1;for(let f=0;f<mi.length;f++)if(!mi[f].active){c=mi[f],l=f;break}if(!c){let f=1/0;for(let m=0;m<mi.length;m++)mi[m].life<f&&(f=mi[m].life,c=mi[m],l=m)}const u=Yt(i,t);c.active=!0,c.life=bh,c.maxLife=bh,c.x=i,c.z=t;const h=l%2===0?1:-1,d=Math.sin(e+Math.PI/2)*.12*h,p=Math.cos(e+Math.PI/2)*.12*h,g=n?1.15:1;Fn.position.set(i+d,u+.015,t+p),Fn.rotation.set(-Math.PI/2,0,-e+(Math.random()-.5)*.15),Fn.scale.set(g,g,g),Fn.updateMatrix(),en.setMatrixAt(l,Fn.matrix);const x=n?.9:.6;us.copy(K0).multiplyScalar(x),en.setColorAt(l,us)}function RS(i,t){if(!bf)return;const e=1+(t||0)*1.5;let n=!1;for(let s=0;s<mi.length;s++){const o=mi[s];if(!o.active)continue;if(o.life-=i*e,o.life<=0){o.active=!1,Fn.position.set(0,-100,0),Fn.scale.setScalar(0),Fn.updateMatrix(),en.setMatrixAt(s,Fn.matrix),us.setScalar(0),en.setColorAt(s,us),n=!0;continue}const r=o.life/o.maxLife,a=r*r;us.copy(K0).multiplyScalar(a*.6),en.setColorAt(s,us),n=!0}en.instanceMatrix.needsUpdate=!0,n&&(en.instanceColor.needsUpdate=!0)}const yi=[],To=[];let lp=be+2,os=1;function up(i){os=i}function J0(i,t,e,n){const s=[];for(let r=0;r<=12;r++){const a=r/12,c=i*(1-a*a),l=t*(1-a*a),u=e+(n-e)*a;s.push(new N(c,u,l))}return{curve:new oa(s),pts:s}}function CS(i,t,e,n){const s=n||be+2,o=e+15,r=new uf(new N(i,e,t),new N(i,o,t)),a=new $({color:F.laserPink,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),c=new I(new An(r,1,.06,6,!1),a);ct.add(c);const l=new $({color:F.laserGlow,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),u=new I(new An(r,1,.2,6,!1),l);ct.add(u);const{curve:h}=J0(i,t,o,s),d=new $({color:F.laserPink,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),p=new I(new An(h,16,.05,6,!1),d);ct.add(p);const g=new $({color:F.laserGlow,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),x=new I(new An(h,16,.18,6,!1),g);ct.add(x);const f={upTube:c,upGlow:u,bendTube:p,bendGlow:x,mat:a,glowMat:l,bendMat:d,bendGlowMat:g,fromX:i,fromZ:t,floatY:e,skyY:o,tipY:s,animPhase:0,animTimer:0};yi.push(f);for(let m=0;m<yi.length-1;m++){const w=yi[m],_=(f.skyY+w.skyY)/2,M=[];for(let v=0;v<=8;v++){const R=v/8,U=f.fromX*(1-R)+w.fromX*R,L=f.fromZ*(1-R)+w.fromZ*R,z=_+Math.sin(R*Math.PI)*3;M.push(new N(U,z,L))}const A=new oa(M),E=new $({color:F.laserGlow,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),T=new I(new An(A,10,.03,4,!1),E);ct.add(T);const b=new $({color:F.laserPink,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),y=new I(new An(A,10,.1,4,!1),b);ct.add(y),To.push({tube:T,glow:y,mat:E,glowMat:b,opacity:0})}return f}function PS(i){for(let t=0;t<yi.length;t++){const e=yi[t];e.tipY=i;const{curve:n}=J0(e.fromX,e.fromZ,e.skyY,i);ct.remove(e.bendTube),e.bendTube.geometry.dispose(),e.bendTube.geometry=new An(n,16,.05,6,!1),ct.add(e.bendTube),ct.remove(e.bendGlow),e.bendGlow.geometry.dispose(),e.bendGlow.geometry=new An(n,16,.18,6,!1),ct.add(e.bendGlow)}}function IS(i,t,e){const n=e||be+2;Math.abs(n-lp)>.1&&yi.length>0&&(PS(n),lp=n);for(let s=0;s<yi.length;s++){const o=yi[s];if(o.animTimer+=i,o.animPhase===0){const r=Math.min(o.animTimer/.5,1);o.mat.opacity=r*.8,o.glowMat.opacity=r*.3,o.animTimer>.5&&(o.animPhase=1,o.animTimer=0)}else if(o.animPhase===1){const r=Math.min(o.animTimer/.8,1);o.bendMat.opacity=r*.7,o.bendGlowMat.opacity=r*.2,o.mat.opacity=.8,o.glowMat.opacity=.3,o.animTimer>.8&&(o.animPhase=2)}else{const r=Math.sin(t*3+s*1.2)*.5+.5;o.mat.opacity=.5+r*.4,o.glowMat.opacity=.15+r*.15,o.bendMat.opacity=.4+r*.3,o.bendGlowMat.opacity=.1+r*.12}}for(let s=0;s<To.length;s++){const o=To[s];o.opacity=Math.min(o.opacity+i*.5,.3);const r=Math.sin(t*2+s*.8)*.5+.5;o.mat.opacity=o.opacity*(.6+r*.4),o.glowMat.opacity=o.opacity*(.2+r*.15)}if(os<1){for(let s=0;s<yi.length;s++){const o=yi[s];o.mat.opacity*=os,o.glowMat.opacity*=os,o.bendMat.opacity*=os,o.bendGlowMat.opacity*=os}for(let s=0;s<To.length;s++)To[s].mat.opacity*=os,To[s].glowMat.opacity*=os}}const LS=new ot(F.orbGold),DS=new ot(16777215);let _o=0,Ze="SEEK",rs=-be,Qe=0,Pr=[],Zn=null,Cs=null,Ps=null,Ve=null,Is=[],zi=null,Th=null,$n=[],Ir=null,Q0=null,tm=null,Eh=null,Ah=null,Rh=null,Ch=null,dc=null,Ph=[],Ih=[],Lh=[],Dh=[],Eo=[],Uh=[],Ao=null,hp=0,Yn=0,yo=[],Io=null,fp=!1;const Lo=200;let Kn=null;const Tf=[];let em=!1;function US(){if(Kn)return;const i=new we,t=new Float32Array(Lo*3),e=new Float32Array(Lo*3),n=new Float32Array(Lo);i.setAttribute("position",new Ue(t,3)),i.setAttribute("color",new Ue(e,3)),i.setAttribute("size",new Ue(n,1)),i.attributes.position.setUsage(xe),i.attributes.color.setUsage(xe),i.attributes.size.setUsage(xe);const s=new af({size:.3,vertexColors:!0,transparent:!0,opacity:.9,blending:ce,depthWrite:!1,sizeAttenuation:!0});Kn=new Qp(i,s),Kn.visible=!1,ct.add(Kn);const o=new ot(F.obeliskPink),r=new ot(11158783);for(let a=0;a<Lo;a++){const c=Math.random()<.7?o:r;e[a*3]=c.r*(.8+Math.random()*.4),e[a*3+1]=c.g*(.8+Math.random()*.4),e[a*3+2]=c.b*(.8+Math.random()*.4),n[a]=.15+Math.random()*.25,Tf.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,active:!1,sparklePhase:Math.random()*6.28})}i.attributes.color.needsUpdate=!0,i.attributes.size.needsUpdate=!0}function NS(i,t,e){em=!0,Kn.visible=!0;for(let n=0;n<Lo;n++){const s=Tf[n];s.x=i,s.y=t,s.z=e;const o=Math.random()*6.28,r=Math.random()*Math.PI,a=2+Math.random()*5;s.vx=Math.sin(r)*Math.cos(o)*a,s.vy=Math.cos(r)*a*.5+Math.random()*2,s.vz=Math.sin(r)*Math.sin(o)*a,s.life=5+Math.random()*6,s.active=!0}}function zS(i,t){if(!Kn||!Kn.visible)return;const e=Kn.geometry.attributes.position.array,n=Kn.geometry.attributes.size.array;let s=!1;for(let o=0;o<Lo;o++){const r=Tf[o];if(!r.active){e[o*3+1]=-100,n[o]=0;continue}if(s=!0,r.life-=i,r.life<=0||r.y<-1){r.active=!1;continue}r.vy-=1.5*i,r.vx*=.995,r.vz*=.995,r.vx+=Math.sin(t*3+o*.7)*.3*i,r.vz+=Math.cos(t*2.5+o*1.1)*.2*i,r.x+=r.vx*i,r.y+=r.vy*i,r.z+=r.vz*i,e[o*3]=r.x,e[o*3+1]=r.y,e[o*3+2]=r.z;const a=Math.sin(t*6+r.sparklePhase)*.5+.5,c=Math.min(r.life/2,1);n[o]=(.15+a*.2)*c}Kn.geometry.attributes.position.needsUpdate=!0,Kn.geometry.attributes.size.needsUpdate=!0,s||(Kn.visible=!1)}function FS(i){Pr=i.orbs,Zn=i.obeliskGroup,Cs=i.obeliskMat,Ps=i.obeliskGlowMat,Ve=i.pinnacleOrb,Is=i.pinnacleRings||[],zi=i.moatMesh,Th=i.moatMat,$n=i.rainbowArcs,Ir=i.player,Q0=i.makeLaser,tm=i.orbHudEl,Ph=i.deers||[],Ih=i.puffs||[],Lh=i.jellies||[],Dh=i.moths||[],Eo=i.trees||[],Uh=i.treeMeshes||[],Ao=i.groundMesh||null,Eh=i.playOrbCollect||null,Ah=i.playOrbWarble||null,Rh=i.playLaserZap||null,Ch=i.playLaserHum||null,dc=i.stopLaserHums||null,US()}function OS(i,t){let e=null,n=1/0;for(let c=0;c<Pr.length;c++){const l=Pr[c];if(l.found)continue;const u=l.x-Ir.pos.x,h=l.z-Ir.pos.z,d=u*u+h*h;d<n&&(n=d,e=l)}if(e&&n<xo*xo){const c=Math.sin(t*2+e.phase)*.5+.5;Cr.position.set(e.x,1,e.z),Cr.intensity=1+c*2,Cr.distance=xo}else Cr.intensity=0;for(let c=0;c<Pr.length;c++){const l=Pr[c];if(!(l.found&&!l.flyUp&&!l._flashing)){if(!l.found){const u=Math.sin(t*1.5+l.phase)*.5+.5;l.group.position.y=l.flyY+Math.sin(t*.8+l.phase)*.3,l.glowMat.opacity=.3+u*.4,l.hazeMat.opacity=.08+u*.12;const h=l.x-Ir.pos.x,d=l.z-Ir.pos.z,p=h*h+d*d,g=xo*xo;if(p<g){const x=1-Math.sqrt(p)/xo,f=x*x;l.glowMat.opacity=Math.min(.3+u*.4+f*.5,1),l.hazeMat.opacity=Math.min(.08+u*.12+f*.25,.6),l.coreMat.color.copy(DS).lerp(LS,1-f);const m=1+f*.3;l.group.scale.setScalar(m)}else l.group.scale.setScalar(1);for(let x=3;x<l.group.children.length;x++){const f=l.group.children[x],m=(x-3)/6*6.28+t*1.5;f.position.x=Math.cos(m)*.4,f.position.z=Math.sin(m)*.4,f.position.y=Math.sin(m*2+t)*.1}if(p<jd*jd){l.found=!0,l._flashing=!0,l._flashTimer=0,l.flyY=l.group.position.y,_o++;const x=tm||document.getElementById("orb-hud");x&&(x.innerHTML="✦ "+_o+" / "+bo),Ze==="SEEK"&&(Ze="RISING"),Eh&&Eh()}}if(l._flashing){l._flashTimer+=i;const u=Math.min(l._flashTimer/1.5,1),h=u<.3?u/.3:1-(u-.3)/.7;l.glowMat.opacity=.5+h*.5,l.hazeMat.opacity=.3+h*.5,l.group.scale.setScalar(1+h*.6),l.group.position.x=l.x+Math.sin(t*30)*h*.05,l.group.position.z=l.z+Math.cos(t*25)*h*.05,l._flashTimer>1.5&&(l._flashing=!1,l.flyUp=!0,l.group.position.x=l.x,l.group.position.z=l.z,Ah&&Ah())}if(l.flyUp){const u=be+5;l.flyY+=(u-l.flyY)*i*.8,l.group.position.y=l.flyY;const h=Math.min((l.flyY-1)/(u-1),1);if(l.group.scale.setScalar(1-h*.6),l.glowMat.opacity=.8-h*.5,l.flyY>u-1&&!l.laserLine){l.flyUp=!1,l.group.visible=!1;const d=$l();l.laserLine=Q0(l.x,l.z,0,d),Rh&&Rh(),Ch&&Ch(l.x,l.z)}}}}const s=be/bo,o=-be+_o*s;if(rs<o-.01?(rs+=8*i,rs>o&&(rs=o),Zn&&(Zn.position.y=rs,Zn.position.x=Math.sin(t*25)*.04,Zn.position.z=Math.cos(t*30)*.03)):Zn&&(Zn.position.x*=.9,Zn.position.z*=.9),_o>=bo&&rs>=-.01&&Ze==="RISING"&&(Ze="COMPLETE",Qe=0),Zn){Zn.rotation.y+=i*.03;const c=Zn.children[Zn.children.length-1];if(c&&c.isLight){const l=Math.max(0,Math.min(1,(rs+be)/be));c.intensity=l*1.5*(.8+Math.sin(t*1.5)*.2)}}if(Ve&&Ve.mesh.visible){const c=Math.sin(t*2)*.5+.5;Ve.mat.opacity=.6+c*.3,Ve.hazeMat.opacity=.15+c*.12;const l=_o/bo;Ve.mat.opacity*=.3+l*.7,Ve.hazeMat.opacity*=.2+l*.8}for(let c=0;c<Is.length;c++){const l=Is[c];if(!l.mesh.visible)continue;l.mesh.rotation.x+=l.rx*i,l.mesh.rotation.y+=l.ry*i,l.mesh.rotation.z+=l.rz*i;const u=_o/bo;l.mat.opacity=(.15+u*.35)*(.8+Math.sin(t*1.5+c)*.2)}const a=$l();if(IS(i,t,a),Ze==="COMPLETE"&&Qe>3?up(Math.max(0,1-(Qe-3)/4)):(Ze==="FINALE"||Ze==="TRANSFORM")&&(up(0),dc&&(dc(),dc=null)),zS(i,t),Ze==="COMPLETE"){Qe+=i;const c=Math.min(Qe/3,1);if(Cs&&(Cs.emissiveIntensity=c*1.5),Ps&&(Ps.emissiveIntensity=c*2.5),Ve&&Ve.mesh.visible&&Qe>1&&Qe<3){const l=Math.min((Qe-1)/1.5,1);Ve.mat.opacity=.9+l*.1,Ve.hazeMat.opacity=.5+l*.5,Ve.mesh.scale.setScalar(1+l*.5),Ve.haze.scale.setScalar(1+l*1);for(let u=0;u<Is.length;u++){const h=Is[u];h.mesh.rotation.x+=h.rx*i*(1+l*4),h.mesh.rotation.y+=h.ry*i*(1+l*4),h.mesh.rotation.z+=h.rz*i*(1+l*4)}}if(Ve&&Ve.mesh.visible&&Qe>=3&&!em){const l=new N;Ve.mesh.getWorldPosition(l),NS(l.x,l.y,l.z),Ve.mesh.visible=!1,Ve.haze.visible=!1;for(let u=0;u<Is.length;u++)Is[u].mesh.visible=!1}if(Qe>3&&Th){const l=Math.min((Qe-3)/4,1);Th.opacity=l*.6,zi&&(zi.visible||(zi.visible=!0),zi.position.y=.05+Math.sin(t*3)*.02*l)}if(Qe>4)for(let l=0;l<$n.length;l++){const u=l*.3,h=Math.min(Math.max((Qe-4-u)/2,0),1);h>0&&!$n[l].mesh.visible&&($n[l].mesh.visible=!0),$n[l].mat.opacity=h*.55,$n[l].mesh.rotation.y+=i*.1*(l+1)*.3}if(Qe>3){const l=Math.min((Qe-3)/6,1)*2;for(let u=0;u<Ph.length;u++){const h=Ph[u],d=h.group,p=-d.position.x,g=-d.position.z,x=Math.sqrt(p*p+g*g);x>8?(h.wanderAng=Math.atan2(-d.position.x,-d.position.z),h.state="walk",h.speed=1.5*l,d.position.x+=p/x*h.speed*i,d.position.z+=g/x*h.speed*i,d.rotation.y=h.wanderAng):h.state="pause"}for(let u=0;u<Ih.length;u++){const h=Ih[u],d=h.group,p=-d.position.x,g=-d.position.z,x=Math.sqrt(p*p+g*g);x>8&&(h.wanderAng=Math.atan2(-d.position.x,-d.position.z),h.state="hop",h.hopTimer=h.hopTimer%1.2,d.position.x+=p/x*1.5*l*i,d.position.z+=g/x*1.5*l*i)}for(let u=0;u<Lh.length;u++){const h=Lh[u],d=h.group;d.position.x+=(0-d.position.x)*i*.15*l,d.position.z+=(0-d.position.z)*i*.15*l}for(let u=0;u<Dh.length;u++){const h=Dh[u];h.centerX+=(0-h.centerX)*i*.2*l,h.centerZ+=(0-h.centerZ)*i*.2*l,h.orbitR=Math.max(h.orbitR-i*.3*l,2)}}Qe>12&&(Ze="FINALE",console.log("✦ Quest → FINALE"))}if(Ze==="FINALE"){hp+=i,Cs&&(Cs.emissiveIntensity=1.5+Math.sin(t*.5)*.3),Ps&&(Ps.emissiveIntensity=2.5+Math.sin(t*.7)*.5),zi&&(zi.position.y=.05+Math.sin(t*3)*.02);for(let c=0;c<$n.length;c++)$n[c].mesh.rotation.y+=i*.1*(c+1)*.3,$n[c].mat.opacity=.45+Math.sin(t+c)*.1;hp>30&&(Ze="TRANSFORM",Yn=0,BS(),console.log("✦ Quest → TRANSFORM (trees="+Eo.length+")"))}if(Ze==="TRANSFORM"){Yn+=i,Cs&&(Cs.emissiveIntensity=1.5+Math.sin(t*.5)*.3),Ps&&(Ps.emissiveIntensity=2.5+Math.sin(t*.7)*.5),zi&&(zi.position.y=.05+Math.sin(t*3)*.02);for(let l=0;l<$n.length;l++)$n[l].mesh.rotation.y+=i*.1*(l+1)*.3,$n[l].mat.opacity=.45+Math.sin(t+l)*.1;if(Yn<3&&yo.length<Eo.length){const l=Math.min(Math.floor(Yn/3*Eo.length),Eo.length);for(;yo.length<l;){const u=yo.length,h=Eo[u],d=$l(),p=new uf(new N(0,d,0),new N(h.x,0,h.z)),g=new $({color:F.laserPink,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),x=new I(new An(p,8,.06,4,!1),g);ct.add(x);const f=new $({color:F.laserGlow,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),m=new I(new An(p,8,.18,4,!1),f);ct.add(m),yo.push({tube:x,glow:m,mat:g,glowMat:f,timer:0})}}for(let l=0;l<yo.length;l++){const u=yo[l];u.timer+=i;const h=Math.min(u.timer/.5,1),d=Math.sin(t*3+l*.5)*.5+.5;u.mat.opacity=h*(.6+d*.4),u.glowMat.opacity=h*(.2+d*.15)}let c=0;Yn>=3&&Yn<6?c=(Yn-3)/3:Yn>=6&&Yn<10?(c=1,fp||(GS(),fp=!0,console.log("✦ Trees + ground transformed"))):Yn>=10&&Yn<13&&(c=1-(Yn-10)/3),Io&&(Io.style.opacity=c)}}function $l(){return rs+be+3}function BS(){Io||(Io=document.createElement("div"),Io.style.cssText="position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;opacity:0;pointer-events:none;z-index:9999;",document.body.appendChild(Io))}function GS(){const i=[{color:5575728,glow:13378167,core:16729258},{color:3805248,glow:11154363,core:14505471},{color:4461608,glow:14496648,core:16737979},{color:2756688,glow:8926156,core:12277247},{color:4200496,glow:13386905,core:16742348}];for(let t=0;t<Uh.length;t++){const e=Uh[t],n=i[t%i.length];e.trunkMat&&(e.trunkMat.color.set(667712),e.trunkMat.emissive.set(534584),e.trunkMat.emissiveIntensity=.1),e.canopyMat&&(e.canopyMat.color.set(n.core),e.canopyMat.emissive.set(n.glow),e.canopyMat.emissiveIntensity=.9),e.glowMat&&(e.glowMat.color.set(n.glow),e.glowMat.emissive.set(n.glow),e.glowMat.emissiveIntensity=.15),e.detailMat&&(e.detailMat.color.set(n.color),e.detailMat.emissive.set(n.glow),e.detailMat.emissiveIntensity=.3)}if(Ao&&Ao.material){Ao.material.emissive.set(2099264),Ao.material.emissiveIntensity=.3;const t=Ao.geometry.attributes.color;if(t){const e=t.array;for(let n=0;n<e.length;n+=3){const s=e[n],o=e[n+1],r=e[n+2];e[n]=s*.5+r*.3,e[n+1]=o*.15,e[n+2]=r*.7+o*.4}t.needsUpdate=!0}}}const kS=600;let ja=.25,Te=1,dp=.85,De="NIGHT",Lr=null,Dr=null,Nh=null,Ur=null,pc=null;const pp=[{label:"DUSK",sky:new ot(923685),fog:new ot(791584),fogDensity:.009,moonInt:.6,moonCol:new ot(14527112),moonElev:15,ambSky:new ot(4469589),ambGnd:new ot(2238488),ambInt:.6,stars:.4,bio:.7,plRange:16,plInt:.5},{label:"NIGHT",sky:new ot(330264),fog:new ot(528408),fogDensity:.01,moonInt:1,moonCol:new ot(12307694),moonElev:55,ambSky:new ot(3359846),ambGnd:new ot(1587232),ambInt:.7,stars:.85,bio:1,plRange:18,plInt:.55},{label:"DEEP_NIGHT",sky:new ot(198160),fog:new ot(397332),fogDensity:.012,moonInt:.55,moonCol:new ot(8952251),moonElev:75,ambSky:new ot(1712708),ambGnd:new ot(1188888),ambInt:.5,stars:1,bio:1.5,plRange:22,plInt:.7},{label:"DAWN",sky:new ot(1187888),fog:new ot(923688),fogDensity:.011,moonInt:.5,moonCol:new ot(13417386),moonElev:20,ambSky:new ot(3354197),ambGnd:new ot(1843224),ambInt:.55,stars:.35,bio:.65,plRange:17,plInt:.5}],ts=new ot,mp=new ot;function HS(i){Lr=i.scene,Dr=i.moon,Nh=i.moon2,Ur=i.hemiLight,pc=i.playerLight}function VS(i){if(!Lr)return;ja=(ja+i/kS)%1;const t=ja*4,e=Math.floor(t)%4,n=(e+1)%4,s=t-Math.floor(t),o=.5-.5*Math.cos(s*Math.PI),r=pp[e],a=pp[n];De=o<.5?r.label:a.label;const c=(l,u)=>l+(u-l)*o;if(ts.copy(r.sky).lerp(a.sky,o),Lr.background.copy(ts),ts.copy(r.fog).lerp(a.fog,o),Lr.fog.color.copy(ts),Lr.fog.density=c(r.fogDensity,a.fogDensity),Dr){ts.copy(r.moonCol).lerp(a.moonCol,o),Dr.color.copy(ts),Dr.intensity=c(r.moonInt,a.moonInt);const l=ja*Math.PI*2,u=c(r.moonElev,a.moonElev)*Math.PI/180,h=60;Dr.position.set(Math.cos(l)*Math.cos(u)*h,Math.sin(u)*h,Math.sin(l)*Math.cos(u)*h)}if(Nh){const l=c(r.moonInt,a.moonInt)/.85;Nh.intensity=.3*l}Ur&&(ts.copy(r.ambSky).lerp(a.ambSky,o),mp.copy(r.ambGnd).lerp(a.ambGnd,o),Ur.color.copy(ts),Ur.groundColor.copy(mp),Ur.intensity=c(r.ambInt,a.ambInt)),pc&&(pc.distance=c(r.plRange,a.plRange),pc.intensity=c(r.plInt,a.plInt)),dp=c(r.stars,a.stars),c1(dp),Te=c(r.bio,a.bio)}let Os=0,Do=0,Xi=0,Xo="CLEAR",Yi=!1,vi=0;const mc={CLEAR:{fogMult:1,windBase:.3,rainRate:0,skyDarken:0,mistCount:0,duration:[90,180]},MISTY:{fogMult:1.8,windBase:.2,rainRate:0,skyDarken:.05,mistCount:6,duration:[60,150]},LIGHT_RAIN:{fogMult:1.3,windBase:.6,rainRate:.3,skyDarken:.1,mistCount:2,duration:[60,120]},HEAVY_RAIN:{fogMult:1.6,windBase:1,rainRate:.8,skyDarken:.2,mistCount:3,duration:[45,100]},FOG_BANK:{fogMult:2.5,windBase:.15,rainRate:0,skyDarken:.1,mistCount:8,duration:[60,120]},LUMINOUS_STORM:{fogMult:1.4,windBase:1.5,rainRate:.6,skyDarken:.15,mistCount:2,duration:[40,90]}},WS={CLEAR:{MISTY:.4,LIGHT_RAIN:.3,FOG_BANK:.2,LUMINOUS_STORM:.1},MISTY:{CLEAR:.3,LIGHT_RAIN:.3,FOG_BANK:.3,HEAVY_RAIN:.1},LIGHT_RAIN:{CLEAR:.2,MISTY:.2,HEAVY_RAIN:.4,LUMINOUS_STORM:.2},HEAVY_RAIN:{LIGHT_RAIN:.4,LUMINOUS_STORM:.3,MISTY:.2,CLEAR:.1},FOG_BANK:{MISTY:.4,CLEAR:.3,LIGHT_RAIN:.2,LUMINOUS_STORM:.1},LUMINOUS_STORM:{HEAVY_RAIN:.3,MISTY:.3,CLEAR:.2,LIGHT_RAIN:.2}};let Ro="CLEAR",wo=null,gc=0,Ka=0,jl=0,Ja=!1,Qa=0,Kl=Math.random()*Math.PI*2,Jl=0,Ql=0;const zh=[],XS=8;let gp=!1,tu=0,tc=1,xc=0,ec=0,eu=0;function qS(){const i=WS[Ro],t=Object.entries(i);let e=0;for(const[,s]of t)e+=s;let n=Math.random()*e;for(const[s,o]of t)if(n-=o,n<=0)return s;return t[0][0]}function YS(){if(gp)return;const i=document.createElement("canvas");i.width=128,i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(64,32,0,64,32,64);e.addColorStop(0,"rgba(255,255,255,0.5)"),e.addColorStop(.3,"rgba(255,255,255,0.25)"),e.addColorStop(.7,"rgba(255,255,255,0.06)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,64);const n=new sa(i),s=new ve(40,14);for(let o=0;o<XS;o++){const r=new $({map:n,color:5596791,transparent:!0,opacity:0,side:Dt,depthWrite:!1}),a=new I(s,r);a.visible=!1,ct.add(a),zh.push({mesh:a,mat:r,active:!1,drift:Math.random()*Math.PI*2,speed:.3+Math.random()*.4,baseY:.8+Math.random()*2,wobble:Math.random()*Math.PI*2})}gp=!0}function ZS(){YS();const i=mc.CLEAR.duration;gc=i[0]+Math.random()*(i[1]-i[0])}function $S(i,t,e){if(Ja)if(Ka-=i,Ka<=0){Ro=wo,wo=null,Ja=!1;const o=mc[Ro].duration;gc=o[0]+Math.random()*(o[1]-o[0]),Qa=0}else Qa=1-Ka/jl;else gc-=i,gc<=0&&(wo=qS(),Ja=!0,jl=30+Math.random()*60,Ka=jl,Qa=0);const n=mc[Ro];if(Ja&&wo){const o=mc[wo],r=.5-.5*Math.cos(Qa*Math.PI),a=(c,l)=>c+(l-c)*r;tc=a(n.fogMult,o.fogMult),xc=a(n.rainRate,o.rainRate),ec=a(n.skyDarken,o.skyDarken),eu=a(n.mistCount,o.mistCount),Xi=a(n.windBase,o.windBase),Xo=r<.5?Ro:wo}else tc=n.fogMult,xc=n.rainRate,ec=n.skyDarken,eu=n.mistCount,Xi=n.windBase,Xo=Ro;Yi=Xo==="LUMINOUS_STORM",Kl+=(Math.sin(t*.05)*.2+Math.sin(t*.13)*.1)*i,Jl-=i,Jl<=0&&(Jl=2+Math.random()*6,Ql=Math.random()*.8),Ql*=Math.pow(.3,i);const s=Xi+Ql;if(Os=Math.cos(Kl)*s,Do=Math.sin(Kl)*s,ct.fog.density*=tc,ec>.001){const o=ct.background,r=1-ec;o.r*=r,o.g*=r,o.b*=r}if(e){const o=Math.round(eu);for(let r=0;r<zh.length;r++){const a=zh[r];if(r<o){a.active||(a.active=!0,a.mesh.visible=!0,a.drift=Math.random()*Math.PI*2);const c=10+Math.sin(t*.3+a.wobble)*8,l=a.drift+t*a.speed*.05;a.mesh.position.set(e.x+Math.cos(l)*c,a.baseY+Math.sin(t*.4+a.wobble)*.5,e.z+Math.sin(l)*c),a.mesh.rotation.y=l+Math.PI/2,a.drift+=Os*i*.02;const u=.03+tc*.012;a.mat.opacity+=(u-a.mat.opacity)*i*2}else a.active&&(a.mat.opacity-=i*.5,a.mat.opacity<=.005&&(a.active=!1,a.mesh.visible=!1,a.mat.opacity=0))}}return Yi&&(tu-=i,tu<=0&&(tu=1+Math.random()*4,vi=1)),vi*=Math.pow(.02,i),vi<.01&&(vi=0),xc}function kr(){return xc}const fi=300,br=new Float32Array(fi),Tr=new Float32Array(fi),Er=new Float32Array(fi),nu=new Float32Array(fi),iu=new Float32Array(fi),su=new Float32Array(fi),Ls=new Float32Array(fi),zn=new Float32Array(fi*6);let Bs=null,Fh=null;function jS(){const i=new we;i.setAttribute("position",new Ue(zn,3)),Fh=new rf({color:8952251,transparent:!0,opacity:.3,depthWrite:!1}),Bs=new jg(i,Fh),Bs.frustumCulled=!1,Bs.visible=!1,ct.add(Bs);for(let t=0;t<fi;t++)Ls[t]=0,nm(t)}function nm(i){const t=i*6;zn[t]=0,zn[t+1]=-100,zn[t+2]=0,zn[t+3]=0,zn[t+4]=-100,zn[t+5]=0}function KS(i,t,e,n,s){if(!Bs)return;const o=e>.01;if(Bs.visible=o,!o)return;Fh.opacity=Math.min(.15+e*.35,.5);const r=Math.floor(e*12*i*60);for(let c=0;c<r;c++){let l=-1;for(let d=0;d<fi;d++)if(Ls[d]<=0){l=d;break}if(l===-1)break;const u=Math.random()*Math.PI*2,h=Math.random()*30;br[l]=t.x+Math.cos(u)*h,Tr[l]=12+Math.random()*10,Er[l]=t.z+Math.sin(u)*h,nu[l]=n*2+(Math.random()-.5)*.3,iu[l]=-12-Math.random()*8,su[l]=s*2+(Math.random()-.5)*.3,Ls[l]=2+Math.random()*1.5}const a=.06;for(let c=0;c<fi;c++){if(Ls[c]<=0)continue;if(Ls[c]-=i,Ls[c]<=0||Tr[c]<Yt(br[c],Er[c])+.1){Ls[c]=0,nm(c);continue}br[c]+=nu[c]*i,Tr[c]+=iu[c]*i,Er[c]+=su[c]*i;const l=c*6;zn[l]=br[c],zn[l+1]=Tr[c],zn[l+2]=Er[c],zn[l+3]=br[c]+nu[c]*a,zn[l+4]=Tr[c]+iu[c]*a,zn[l+5]=Er[c]+su[c]*a}Bs.geometry.attributes.position.needsUpdate=!0}let X=null,ye=null,Oh=null,sn=!1,Hn=!1,Vc=null,ou=null,Hr=null,JS=null,im=null,QS=null,tb=null,sm=null,eb=null,om=null,rm=null,nb=null,am=null,cm=null,ru=0,ib=null,lm=null,sb=null;const Oi={jelly:0,puff:0,deer:0,moth:0};function au(i,t){const e=X.sampleRate*t,n=X.createBuffer(1,e,X.sampleRate),s=n.getChannelData(0);if(i==="white")for(let r=0;r<e;r++)s[r]=Math.random()*2-1;else if(i==="brown"){let r=0;for(let a=0;a<e;a++){const c=Math.random()*2-1;s[a]=(r+.02*c)/1.02,r=s[a],s[a]*=1.8}}const o=Math.min(Math.floor(X.sampleRate*.5),e>>2);for(let r=0;r<o;r++){const a=r/o,c=e-o+r;s[c]=s[c]*(1-a)+s[r]*a}return n}function Ar(i,t,e,n){const s=X.createBufferSource();s.buffer=i,s.loop=!0;const o=X.createGain();o.gain.value=t;const r=X.createBiquadFilter();r.type="lowpass",r.frequency.value=e,r.Q.value=.5;const a=X.createBiquadFilter();return a.type="highpass",a.frequency.value=n||40,a.Q.value=.5,s.connect(a).connect(r).connect(o).connect(ye),s.start(),{node:s,gain:o,filter:r}}function ob(){const i=X.createDelay(1);i.delayTime.value=.37;const t=X.createDelay(1);t.delayTime.value=.53;const e=X.createGain();e.gain.value=.2;const n=X.createGain();n.gain.value=.15;const s=X.createBiquadFilter();s.type="lowpass",s.frequency.value=2500;const o=X.createBiquadFilter();o.type="lowpass",o.frequency.value=2e3;const r=X.createBiquadFilter();r.type="highpass",r.frequency.value=120,r.Q.value=.5;const a=X.createBiquadFilter();a.type="highpass",a.frequency.value=120,a.Q.value=.5;const c=X.createGain();c.gain.value=.3,i.connect(s).connect(r).connect(e).connect(i),t.connect(o).connect(a).connect(n).connect(t),i.connect(c),t.connect(c),c.connect(ye);const l=X.createGain();l.gain.value=1,l.connect(i),l.connect(t),Oh=l}function Gn(i,t,e){if(i.connect(t),Oh&&e>0){const n=X.createGain();n.gain.value=e,i.connect(n).connect(Oh)}}function rb(){const i=()=>{if(!sn){try{X=new(window.AudioContext||window.webkitAudioContext),ye=X.createGain(),ye.gain.value=.42,ye.connect(X.destination),Vc=au("brown",16),ou=au("brown",11),Hr=au("white",9),ob();const t=Ar(Vc,.05,200,50);JS=t.node,im=t.gain,QS=t.filter;const e=Ar(ou,.03,350,80);tb=e.node,sm=e.gain;const n=Ar(Hr,0,400,60);eb=n.node,om=n.gain,rm=n.filter;const s=Ar(Hr,0,2e3,80);nb=s.node,am=s.gain,cm=s.filter;const o=Ar(ou,0,600,60);ib=o.node,lm=o.gain,sb=o.filter,sn=!0}catch(t){console.warn("Audio init failed:",t)}document.removeEventListener("click",i),document.removeEventListener("keydown",i),document.removeEventListener("touchstart",i)}};document.addEventListener("click",i),document.addEventListener("keydown",i),document.addEventListener("touchstart",i)}function ab(i,t,e,n,s,o,r,a){if(!sn||Hn)return;const c=X.currentTime,l=o==="DEEP_NIGHT"?.07:o==="DAWN"?.03:.05;im.gain.linearRampToValueAtTime(l,c+.1),sm.gain.linearRampToValueAtTime(l*.6,c+.1);const u=Math.min(t*.12,.18),h=200+t*600;om.gain.linearRampToValueAtTime(u,c+.1),rm.frequency.linearRampToValueAtTime(h,c+.1);const d=e*.15,p=1200+e*2e3;am.gain.linearRampToValueAtTime(d,c+.1),cm.frequency.linearRampToValueAtTime(p,c+.1),s>.5&&ru<=0&&(cb(),ru=2+Math.random()*3),ru-=i;let g=1/0;if(r&&a)for(let m=0;m<a.length;m++){const w=a[m].x-r.x,_=a[m].z-r.z,M=w*w+_*_;M<g&&(g=M)}const f=(g<225?1-Math.sqrt(g)/15:0)*.08;lm.gain.linearRampToValueAtTime(f,c+.1),Oi.jelly-=i,Oi.puff-=i,Oi.deer-=i,Oi.moth-=i}function cb(){if(!X)return;const i=X.currentTime,t=X.createOscillator(),e=X.createGain(),n=X.createBiquadFilter();t.type="sawtooth",t.frequency.value=50+Math.random()*25,n.type="lowpass",n.frequency.value=120,n.Q.value=1,e.gain.setValueAtTime(.2,i),e.gain.exponentialRampToValueAtTime(.001,i+.8+Math.random()*.5),t.connect(n).connect(e).connect(ye),t.start(),t.stop(i+1.5);const s=X.createBufferSource();s.buffer=Vc;const o=X.createGain(),r=X.createBiquadFilter();r.type="lowpass",r.frequency.value=120;const a=X.createBiquadFilter();a.type="highpass",a.frequency.value=45,a.Q.value=.5,o.gain.setValueAtTime(.15,i),o.gain.exponentialRampToValueAtTime(.001,i+1.2),s.connect(a).connect(r).connect(o).connect(ye),s.start(),s.stop(i+1.5)}function Ys(i,t,e){if(!sn||Hn||Oi[i]>0)return;const n=t.x-e.x,s=t.z-e.z,o=n*n+s*s;if(o>900)return;const r=Math.sqrt(o),a=Math.max(0,1-r/30)*.1,c=Math.max(-1,Math.min(1,n/Math.max(r,1))),l=X.createStereoPanner();l.pan.value=c;const u=X.currentTime;switch(i){case"jelly":{const h=360+Math.random()*60,d=X.createOscillator(),p=X.createOscillator();d.type="sine",p.type="sine",d.frequency.setValueAtTime(h,u),p.frequency.setValueAtTime(h+3,u),d.frequency.linearRampToValueAtTime(h-40,u+1.2),p.frequency.linearRampToValueAtTime(h-37,u+1.2);const g=X.createOscillator(),x=X.createGain();g.frequency.value=4,x.gain.value=5,g.connect(x),x.connect(d.frequency),x.connect(p.frequency);const f=X.createGain();f.gain.setValueAtTime(0,u),f.gain.linearRampToValueAtTime(a,u+.15),f.gain.setValueAtTime(a,u+.6),f.gain.exponentialRampToValueAtTime(.001,u+1.4),d.connect(f),p.connect(f),f.connect(l),Gn(l,ye,.4),g.start(u),d.start(u),p.start(u),g.stop(u+1.5),d.stop(u+1.5),p.stop(u+1.5),Oi.jelly=4+Math.random()*5;break}case"puff":{const h=500+Math.random()*100,d=[h,h*1.2,h*1.5];for(let p=0;p<d.length;p++){const g=X.createOscillator();g.type="sine",g.frequency.value=d[p];const x=X.createGain(),f=u+p*.07;x.gain.setValueAtTime(0,f),x.gain.linearRampToValueAtTime(a*.5,f+.02),x.gain.exponentialRampToValueAtTime(.001,f+.15),g.connect(x).connect(l),g.start(f),g.stop(f+.18)}Gn(l,ye,.3),Oi.puff=8+Math.random()*10;break}case"deer":{const h=100+Math.random()*30,d=X.createOscillator(),p=X.createOscillator();d.type="triangle",p.type="triangle",d.frequency.setValueAtTime(h,u),p.frequency.setValueAtTime(h+2,u),d.frequency.linearRampToValueAtTime(h-15,u+.5),p.frequency.linearRampToValueAtTime(h-13,u+.5);const g=X.createBiquadFilter();g.type="lowpass",g.frequency.value=250,g.Q.value=.5;const x=X.createGain();x.gain.setValueAtTime(0,u),x.gain.linearRampToValueAtTime(a*.7,u+.12),x.gain.setValueAtTime(a*.7,u+.3),x.gain.exponentialRampToValueAtTime(.001,u+.6),d.connect(g),p.connect(g),g.connect(x).connect(l),Gn(l,ye,.3),d.start(u),p.start(u),d.stop(u+.7),p.stop(u+.7),Oi.deer=5+Math.random()*6;break}case"moth":{const h=X.createOscillator();h.type="sine",h.frequency.setValueAtTime(200+Math.random()*80,u);const d=X.createOscillator(),p=X.createGain();d.frequency.value=8+Math.random()*4,p.gain.value=12,d.connect(p).connect(h.frequency);const g=X.createGain();g.gain.setValueAtTime(0,u),g.gain.linearRampToValueAtTime(a*.2,u+.05),g.gain.exponentialRampToValueAtTime(.001,u+.25),h.connect(g).connect(l),Gn(l,ye,.2),d.start(u),h.start(u),d.stop(u+.3),h.stop(u+.3),Oi.moth=4+Math.random()*5;break}}}let Wc=0;function lb(i,t){if(!sn||Hn||Wc>0)return;const e=X.currentTime;if(t){const n=X.createBufferSource();n.buffer=Hr;const s=X.createGain(),o=X.createBiquadFilter();o.type="bandpass",o.frequency.value=2e3,o.Q.value=.5,s.gain.setValueAtTime(.05,e),s.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(o).connect(s).connect(ye),n.start(),n.stop(e+.15)}else{const n=X.createOscillator();n.type="sine",n.frequency.value=80+Math.random()*40;const s=X.createGain();s.gain.setValueAtTime(.03,e),s.gain.exponentialRampToValueAtTime(.001,e+.08),n.connect(s).connect(ye),n.start(),n.stop(e+.1)}Wc=i?.22:.35}function ub(){if(!sn||Hn)return;const i=X.currentTime,t=X.createOscillator();t.type="sine",t.frequency.setValueAtTime(150,i),t.frequency.exponentialRampToValueAtTime(300,i+.1);const e=X.createGain();e.gain.setValueAtTime(.03,i),e.gain.exponentialRampToValueAtTime(.001,i+.15),t.connect(e).connect(ye),t.start(),t.stop(i+.2)}function hb(i){if(!sn||Hn)return;const t=X.currentTime,e=X.createBufferSource();e.buffer=Vc;const n=X.createGain(),s=X.createBiquadFilter();s.type="lowpass",s.frequency.value=200;const o=X.createBiquadFilter();o.type="highpass",o.frequency.value=50,o.Q.value=.5,n.gain.setValueAtTime(i*.05,t),n.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(o).connect(s).connect(n).connect(ye),e.start(),e.stop(t+.25)}function fb(i){Wc>0&&(Wc-=i)}function db(i,t){if(!sn||Hn)return;const e=i.x-t.x,n=i.z-t.z,s=e*e+n*n;if(s>400)return;const o=Math.max(0,1-Math.sqrt(s)/20)*.06,r=X.currentTime,a=X.createOscillator();a.type="sine",a.frequency.setValueAtTime(600+Math.random()*300,r),a.frequency.exponentialRampToValueAtTime(200,r+.1);const c=X.createGain();c.gain.setValueAtTime(o,r),c.gain.exponentialRampToValueAtTime(.001,r+.12),a.connect(c).connect(ye),a.start(),a.stop(r+.15)}function pb(){if(!sn||Hn)return;const i=X.currentTime,t=[440,554,659,880];for(let e=0;e<t.length;e++){const n=X.createOscillator();n.type="sine",n.frequency.setValueAtTime(t[e],i+e*.12);const s=X.createGain();s.gain.setValueAtTime(0,i),s.gain.linearRampToValueAtTime(.05,i+e*.12+.05),s.gain.exponentialRampToValueAtTime(.001,i+e*.12+.7),n.connect(s),Gn(s,ye,.5),n.start(i+e*.12),n.stop(i+e*.12+.8)}}function mb(){if(!sn||Hn)return;const i=X.currentTime,t=X.createOscillator();t.type="sine",t.frequency.setValueAtTime(300,i),t.frequency.exponentialRampToValueAtTime(1200,i+3);const e=X.createOscillator(),n=X.createGain();e.frequency.setValueAtTime(6,i),e.frequency.linearRampToValueAtTime(12,i+3),n.gain.value=20,e.connect(n).connect(t.frequency);const s=X.createOscillator();s.type="sine",s.frequency.setValueAtTime(600,i),s.frequency.exponentialRampToValueAtTime(2400,i+3);const o=X.createGain();o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(.04,i+.2),o.gain.setValueAtTime(.04,i+2),o.gain.exponentialRampToValueAtTime(.001,i+3.5),t.connect(o),s.connect(o),Gn(o,ye,.6),e.start(i),t.start(i),s.start(i),e.stop(i+4),t.stop(i+4),s.stop(i+4)}function gb(){if(!sn||Hn)return;const i=X.currentTime,t=X.createBufferSource();t.buffer=Hr;const e=X.createBiquadFilter();e.type="bandpass",e.frequency.setValueAtTime(3e3,i),e.frequency.exponentialRampToValueAtTime(500,i+.3),e.Q.value=2;const n=X.createGain();n.gain.setValueAtTime(.08,i),n.gain.exponentialRampToValueAtTime(.001,i+.3),t.connect(e).connect(n).connect(ye);const s=X.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(2e3,i),s.frequency.exponentialRampToValueAtTime(100,i+.15);const o=X.createBiquadFilter();o.type="lowpass",o.frequency.value=4e3;const r=X.createGain();r.gain.setValueAtTime(.06,i),r.gain.exponentialRampToValueAtTime(.001,i+.2),s.connect(o).connect(r),Gn(r,ye,.3);const a=X.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(80,i+.15),a.frequency.linearRampToValueAtTime(55,i+2);const c=X.createBiquadFilter();c.type="bandpass",c.frequency.value=180,c.Q.value=3;const l=X.createGain();l.gain.setValueAtTime(0,i),l.gain.linearRampToValueAtTime(.03,i+.2),l.gain.exponentialRampToValueAtTime(.001,i+2),a.connect(c).connect(l).connect(ye),t.start(i),t.stop(i+.4),s.start(i),s.stop(i+.25),a.start(i+.1),a.stop(i+2.2)}const qo=[];function xb(i,t){if(!sn||Hn)return;const e=X.currentTime,n=X.createOscillator();n.type="sawtooth",n.frequency.value=55+Math.random()*10;const s=X.createOscillator(),o=X.createGain();s.type="square",s.frequency.value=120+Math.random()*60,o.gain.value=15,s.connect(o).connect(n.frequency);const r=X.createBiquadFilter();r.type="bandpass",r.frequency.value=200,r.Q.value=3;const a=X.createGain();a.gain.value=0;const c=X.createStereoPanner();n.connect(r).connect(a).connect(c).connect(ye),s.start(e),n.start(e),qo.push({osc:n,mod:s,gain:a,panner:c,filter:r,x:i,z:t})}function vb(i){if(!sn||!X)return;const t=X.currentTime;for(let e=0;e<qo.length;e++){const n=qo[e],s=n.x-i.x,o=n.z-i.z,r=s*s+o*o,a=Math.sqrt(r),c=r<625?Math.max(0,1-a/25)*.04:0;n.gain.gain.linearRampToValueAtTime(c,t+.1);const l=Math.max(-1,Math.min(1,s/Math.max(a,1)));n.panner.pan.linearRampToValueAtTime(l,t+.1),n.filter.frequency.value=180+Math.sin(t*.5+e)*40}}function Mb(){if(!X)return;const i=X.currentTime;for(let t=0;t<qo.length;t++){const e=qo[t];e.gain.gain.linearRampToValueAtTime(0,i+.5),e.osc.stop(i+.6),e.mod.stop(i+.6)}qo.length=0}function _b(){if(!sn||Hn)return;const i=X.currentTime,t=X.createOscillator();t.type="sine",t.frequency.setValueAtTime(400,i),t.frequency.exponentialRampToValueAtTime(900,i+.15);const e=X.createGain();e.gain.setValueAtTime(.06,i),e.gain.exponentialRampToValueAtTime(.001,i+.5),t.connect(e),Gn(e,ye,.4),t.start(),t.stop(i+.6)}let um=null,hm=null,fm=null,cu=0,xp=0,nc=0,lu=0,vp=1,Bh=!1;function yb(){if(Bh||!X)return;Bh=!0;const i=X.createGain();i.gain.value=0;const t=X.createOscillator();t.type="sine",t.frequency.value=160;const e=X.createOscillator();e.type="sine",e.frequency.value=190;const n=X.createBiquadFilter();n.type="lowpass",n.frequency.value=350,n.Q.value=.5,t.connect(n).connect(i),e.connect(n),i.connect(ye),t.start(),e.start(),um=t,hm=e,fm=i}function wb(i){if(!X||i<.001)return;const t=X.currentTime,e=1800+Math.random()*800,n=X.createOscillator();n.type="sine",n.frequency.value=e,n.frequency.exponentialRampToValueAtTime(e*.88,t+.1);const s=X.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(i*.5,t+.01),s.gain.exponentialRampToValueAtTime(.001,t+.1),n.connect(s).connect(ye),n.start(t),n.stop(t+.12)}function Sb(i,t,e,n,s,o){if(!sn||Hn||(yb(),!Bh))return;const r=X.currentTime,a=s==="DEEP_NIGHT"||s==="NIGHT"?1:s==="DUSK"?.5:.3;vp=s==="DUSK"||s==="NIGHT"?1:s==="DEEP_NIGHT"?.6:.3;const c=Math.max(.15,1-o*.7);let l=1/0;if(t&&e)for(let x=0;x<e.length;x++){const f=e[x].x-t.x,m=e[x].z-t.z,w=f*f+m*m;w<l&&(l=w)}const u=l<400?1-Math.sqrt(l)/20:0;xp+=i*2;const h=.7+.3*Math.sin(xp*Math.PI*2),d=u*.025*a*c*h;if(fm.gain.linearRampToValueAtTime(d,r+.15),cu+=i,cu>3+Math.random()*4){cu=0;const x=150+Math.random()*40;um.frequency.linearRampToValueAtTime(x,r+.5),hm.frequency.linearRampToValueAtTime(x+20+Math.random()*15,r+.5)}let p=1/0;if(t&&n)for(let x=0;x<n.length;x++){const f=n[x].cx-t.x,m=n[x].cz-t.z,w=f*f+m*m;w<p&&(p=w)}const g=p<144?1-Math.sqrt(p)/12:0;if(lu=g*.02*vp*c,lu>.001){if(nc-=i,nc<=0){wb(lu);const x=1.5+(1-g)*1.5;nc=x+Math.random()*x}}else nc=0}const dm=[0,2,4,7,9],bb=[0,2,3,5,7,9,10],Tb=220;let sr=!1,hi=null,vc=0,Mc=0,_c=0,Gh=dm,Qr=0,ic=0,Mp=0,Xc="",es=null,ns=null,ws=null,Ui=null,is=null,uu=null,Ef=0;function Eb(){sr||!X||(sr=!0,hi=X.createGain(),hi.gain.value=.018,hi.connect(ye),vc=1.5,Mc=3,_c=0)}function ta(i,t){const e=Gh.length,n=Math.floor(i/e)+(t||0),s=(i%e+e)%e,o=Gh[s];return Tb*Math.pow(2,n+o/12)}function Ab(){if(!X||!hi)return;const i=X.currentTime,t=Math.random()<.6?0:Math.random()<.5?4:3,e=ta(t,-1);Ef=t,ws&&(ws.gain.linearRampToValueAtTime(.001,i+3),es&&es.stop(i+3.2),ns&&ns.stop(i+3.2),is&&is.stop(i+3.2)),es=X.createOscillator(),ns=X.createOscillator(),es.type="sine",ns.type="sine",es.frequency.value=e,ns.frequency.value=e*1.002,ws=X.createGain(),ws.gain.setValueAtTime(0,i),ws.gain.linearRampToValueAtTime(.35,i+4),Ui=X.createBiquadFilter(),Ui.type="lowpass",Ui.frequency.value=400,Ui.Q.value=.7,is=X.createOscillator(),uu=X.createGain(),is.type="sine",is.frequency.value=.08+Math.random()*.06,uu.gain.value=150,is.connect(uu).connect(Ui.frequency);const n=X.createOscillator();n.type="sine",n.frequency.value=e*1.5;const s=X.createGain();s.gain.value=.15,n.connect(s).connect(Ui),es.connect(Ui),ns.connect(Ui),Ui.connect(ws),Gn(ws,hi,.7),es.start(i+.5),ns.start(i+.5),n.start(i+1),is.start(i),es.stop(i+35),ns.stop(i+35),n.stop(i+35),is.stop(i+35)}function Af(i,t,e){if(!X)return;const n=X.currentTime+(e||0),s=X.createOscillator();s.type="triangle",s.frequency.value=i;const o=X.createGain();o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(t,n+.008),o.gain.exponentialRampToValueAtTime(t*.4,n+.2),o.gain.exponentialRampToValueAtTime(.001,n+2);const r=X.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(i*4,n),r.frequency.exponentialRampToValueAtTime(i*1.5,n+1.2),r.Q.value=1,s.connect(r).connect(o),Gn(o,hi,.6),s.start(n),s.stop(n+2.5)}function Rb(i,t,e,n){if(!X)return;const s=X.currentTime+(n||0),o=e||2,r=X.createOscillator();r.type="sine",r.frequency.value=i;const a=Math.min(o,3),c=X.createBuffer(1,X.sampleRate*a,X.sampleRate),l=c.getChannelData(0);for(let f=0;f<l.length;f++)l[f]=(Math.random()*2-1)*.03;const u=X.createBufferSource();u.buffer=c;const h=X.createBiquadFilter();h.type="bandpass",h.frequency.value=i*2,h.Q.value=3;const d=X.createGain();d.gain.setValueAtTime(0,s),d.gain.linearRampToValueAtTime(t*.15,s+.2),d.gain.linearRampToValueAtTime(0,s+o),u.connect(h).connect(d).connect(hi);const p=X.createGain();p.gain.setValueAtTime(0,s),p.gain.linearRampToValueAtTime(t,s+.25),p.gain.setValueAtTime(t,s+Math.max(o-.6,.4)),p.gain.exponentialRampToValueAtTime(.001,s+o);const g=X.createOscillator(),x=X.createGain();g.frequency.value=4.5+Math.random()*1.5,x.gain.value=i*.01,g.connect(x).connect(r.frequency),r.connect(p),Gn(p,hi,.55),g.start(s),r.start(s),u.start(s),g.stop(s+o+.1),r.stop(s+o+.1),u.stop(s+o+.1)}function pm(i,t,e){if(!X)return;const n=X.currentTime+(e||0),s=X.createOscillator(),o=X.createOscillator();s.type="triangle",o.type="triangle",s.frequency.value=i,o.frequency.value=i*1.003;const r=X.createGain();r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(t,n+.01),r.gain.exponentialRampToValueAtTime(t*.2,n+.5),r.gain.exponentialRampToValueAtTime(.001,n+2.5);const a=X.createBiquadFilter();a.type="peaking",a.frequency.value=i*.5,a.Q.value=2,a.gain.value=4,s.connect(a).connect(r),o.connect(a),Gn(r,hi,.45),s.start(n),o.start(n),s.stop(n+3),o.stop(n+3)}function Cb(i,t,e){if(!X)return;const n=X.currentTime+(e||0),s=X.createOscillator();s.type="sine",s.frequency.value=i;const o=X.createOscillator();o.type="sine",o.frequency.value=i*2.01;const r=X.createGain();r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(t*.3,n+.005),r.gain.exponentialRampToValueAtTime(t*.08,n+.4),r.gain.exponentialRampToValueAtTime(.001,n+3);const a=X.createGain();a.gain.value=.15,s.connect(r),o.connect(a).connect(r),Gn(r,hi,.8),s.start(n),o.start(n),s.stop(n+3.5),o.stop(n+3.5)}function Pb(i,t,e){if(!X)return;const n=[0,2,4,2],s=.12+Math.random()*.08;for(let o=0;o<n.length;o++){const r=ta(i+n[o],Qr);Af(r,t*(o===0?1:.7),(e||0)+o*s)}}function mm(i){const t=Math.random();let e;return t<.25?e=i+1:t<.5?e=i-1:t<.65?e=i+2:t<.8?e=i-2:t<.9?e=0:e=Ef,Math.max(-3,Math.min(10,e))}function Ib(){if(!X||!sr)return 2;const i=3+Math.floor(Math.random()*5),t=.5+Math.random()*.6,e=Math.random()<.4;let n;const s=Math.random();s<.4?n="harp":s<.7?n="flute":n="lute",n===Xc&&Math.random()<.7&&(n=["harp","flute","lute"][Math.floor(Math.random()*3)]),Xc=n;let o=Mp+(Math.random()<.7?0:Math.random()<.5?1:-1);o=Math.max(-2,Math.min(8,o));const r=.5+Math.random()*.4;let a=0;for(let c=0;c<i;c++){const l=e?t*(c%2===0?1:.6):t;a=c===0?0:a+l+(Math.random()-.5)*.08;const u=ta(o,Qr);if(n==="harp"&&Math.random()<.2&&c>0)Pb(o,r*.7,a);else if(n==="harp")Af(u,r,a);else if(n==="flute"){const h=l*1.3+.3;Rb(u,r*.9,h,a)}else pm(u,r*.7,a);c>=i-2&&Math.random()<.5?o=o>0?o-1:o+1:o=mm(o)}return Mp=o,a+1.5}function Lb(){if(!X||!sr)return 3;const i=1+Math.floor(Math.random()*3),t=Xc==="harp"?Math.random()<.5?"lute":"shimmer":Xc==="lute"?Math.random()<.5?"harp":"shimmer":Math.random()<.5?"lute":"shimmer",e=1+Math.random()*1.5,n=.3+Math.random()*.3;let s=Ef;for(let o=0;o<i;o++){const r=o*e,a=ta(s,Qr-1);t==="lute"?pm(a,n*.6,r):t==="harp"?Af(a,n,r):Cb(ta(s,Qr+1),n*.5,r),s=mm(s)}return i*e+2}function Db(i,t,e,n){if(!sn||Hn||(sr||Eb(),!sr))return;const s=X.currentTime;Gh=t==="DEEP_NIGHT"||t==="NIGHT"?bb:dm,Qr=t==="DAY"?1:0;const o=t==="DEEP_NIGHT"?.016:t==="NIGHT"?.02:t==="DAWN"?.024:t==="DAY"?.013:.02,r=n?1.35:1;if(hi.gain.linearRampToValueAtTime(o*r,s+2),ic=Math.min(1,(e||0)/5),_c-=i,_c<=0&&(Ab(),_c=18+Math.random()*12),vc-=i,vc<=0){const a=Ib(),c=ic>.3?1.5:3,l=ic>.3?3:5;vc=a+c+Math.random()*l}if(Mc-=i,Mc<=0){const a=Lb(),c=ic>.3?3:6;Mc=a+c+Math.random()*4}}function Ub(i,t,e,n,s){const o=e.x-i.x,r=e.z-i.z,a=o*o+r*r;if(a>n*n)return!1;if(a<.01)return!0;let l=Math.atan2(r,o)-t;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;return Math.abs(l)<s*.5}function Nb(i,t,e,n){const s=t.x-i.x,o=t.z-i.z,r=n?e*1.8:e;return s*s+o*o<r*r}function gm(i,t,e){let n=0,s=0,o=0;for(let r=0;r<t.length;r++){const a=t[r],c=i.x-a.x,l=i.z-a.z,u=c*c+l*l;if(u>.01&&u<e*e){const h=Math.sqrt(u);n+=c/h/h,s+=l/h/h,o++}}return o>0&&(n/=o,s/=o),{x:n,z:s}}function xm(i,t){if(t.length===0)return{x:0,z:0};let e=0,n=0;for(let s=0;s<t.length;s++)e+=t[s].x,n+=t[s].z;return e/=t.length,n/=t.length,{x:e-i.x,z:n-i.z}}function zb(i,t){const e=Math.sqrt(i.x*i.x+i.z*i.z),n=ae-t;if(e<n)return{x:0,z:0};const s=(e-n)/t,o=Math.min(s*2,3);return{x:-i.x/e*o,z:-i.z/e*o}}function Fb(i,t,e,n,s){let o=0,r=0;const a=Math.cos(t)*n,c=Math.sin(t)*n,l=i.x+a,u=i.z+c;for(let h=0;h<e.length;h++){const d=e[h],p=l-d.x,g=u-d.z,x=p*p+g*g,f=(d.colR||s)+1;if(x<f*f&&x>.01){const m=Math.sqrt(x),w=(f-m)/f*2;o+=p/m*w,r+=g/m*w}}return{x:o,z:r}}const Fi={deer:!1,puffling:!1,jelly:!1,moth:!1,fairyRing:!1,crystalChain:!1,pond:!1},Ob={deer:"Spirit Deer",puffling:"Puffling",jelly:"Luminous Jelly",moth:"Moon Moth",fairyRing:"Fairy Ring",crystalChain:"Crystal Resonance",pond:"Moonlit Pond"};let Gi=null,yc=0,_p="";function Bb(){Gi=document.createElement("div"),Gi.id="discovery-text",Gi.style.cssText="position:fixed;top:28%;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:22px;color:#ccffee;text-shadow:0 0 12px #44ffaa,0 0 30px #228866;pointer-events:none;opacity:0;transition:opacity 0.6s;z-index:100;letter-spacing:3px;text-transform:uppercase;",document.body.appendChild(Gi)}function Ss(i){Fi[i]||(Fi[i]=!0,_p=Ob[i],yc=3,Gi&&(Gi.textContent=_p,Gi.style.opacity="1"))}function Gb(i,t,e,n,s,o,r,a){const c=i.x,l=i.z;if(!Fi.deer)for(let u=0;u<t.length;u++){const h=t[u].group.position.x-c,d=t[u].group.position.z-l;if(h*h+d*d<144){Ss("deer");break}}if(!Fi.puffling)for(let u=0;u<e.length;u++){const h=e[u].group.position.x-c,d=e[u].group.position.z-l;if(h*h+d*d<64){Ss("puffling");break}}if(!Fi.jelly)for(let u=0;u<n.length;u++){const h=n[u].group.position.x-c,d=n[u].group.position.z-l;if(h*h+d*d<100){Ss("jelly");break}}if(!Fi.moth)for(let u=0;u<s.length;u++){const h=s[u].group.position.x-c,d=s[u].group.position.z-l;if(h*h+d*d<64){Ss("moth");break}}if(!Fi.fairyRing)for(let u=0;u<o.length;u++){const h=o[u].x-c,d=o[u].z-l;if(h*h+d*d<16){Ss("fairyRing");break}}if(!Fi.pond)for(let u=0;u<r.length;u++){const h=r[u].x-c,d=r[u].z-l;if(h*h+d*d<25){Ss("pond");break}}!Fi.crystalChain&&a>=3&&Ss("crystalChain")}function kb(i){yc>0&&(yc-=i,yc<=.6&&Gi&&(Gi.style.opacity="0"))}let kh=null,hu=60;const Hb={DUSK:"Dusk",NIGHT:"Night",DEEP_NIGHT:"Deep Night",DAWN:"Dawn"},Vb={CLEAR:"Clear",MISTY:"Misty",LIGHT_RAIN:"Light Rain",HEAVY_RAIN:"Heavy Rain",FOG_BANK:"Fog",LUMINOUS_STORM:"Storm"};function Wb(){kh=document.getElementById("hud")}function Xb(i,t){if(!kh)return;hu=hu*.95+1/Math.max(i,.001)*.05;const e=Ze==="SEEK"?"Seek the orbs...":Ze==="RISING"?"The obelisk stirs...":Ze==="COMPLETE"?"Convergence!":"Luminaries",n=Hb[De]||"Night",s=Vb[Xo]||"Clear";kh.innerHTML="<b>"+e+"</b> · "+n+" · "+s+" · FPS:"+Math.round(hu)+"<br>Pos:"+t.x.toFixed(0)+","+t.z.toFixed(0)}let qc=null;function qb(){qc=document.getElementById("orb-hud")}function Yb(){return qc}function Zb(){const i=document.getElementById("overlay");i&&(i.style.opacity="0",setTimeout(()=>{try{i.remove()}catch{}},2500)),qc&&(qc.style.display="block")}const _e=[];let Uo=[];const wc=[],Cn=[],ie=[],ci=[],Un=[],qe=[],or=[],vm=[],ea=[],bi=[],Hh=[],Yc=[],Zc=[],Vr=[],On=[],Mi=[],Le=[],Bn=[],Vh=[],Wh=[],Mm=[],ss=[];let yp=0,wp=0,fu=0,jn=null,gi=0;const Xh=15,qh=[];let Sp=!1;function $b(){if(Sp)return;Sp=!0;const i=new rf({color:F.crystal,transparent:!0,opacity:0,blending:ce,depthWrite:!1});for(let t=0;t<Xh;t++){const e=new we,n=new Float32Array(6);e.setAttribute("position",new Ue(n,3)),e.attributes.position.setUsage(xe);const s=new Jp(e,i.clone());s.visible=!1,ct.add(s),qh.push({line:s,geo:e,opacity:0,active:!1})}}let bs=null;function jb(){if(bs)return bs;const i=new er(.9,1,48),t=new $({color:F.echoBloom,transparent:!0,opacity:.5,side:Dt,depthWrite:!1,blending:ce});return bs=new I(i,t),bs.rotation.x=-Math.PI/2,bs.visible=!1,ct.add(bs),bs}const We=[];function cn(i,t){for(let e=0;e<We.length;e++){const n=We[e].x-i,s=We[e].z-t;if(n*n+s*s<We[e].r2)return!0}return!1}function Kb(){for(let n=0;n<Zd;n++){let s,o,r=!1;for(let a=0;a<20;a++){const c=S()*6.28,l=5+S()*(ae-10);s=Math.cos(c)*l,o=Math.sin(c)*l,r=!0;for(let u=0;u<_e.length;u++){const h=_e[u].x-s,d=_e[u].z-o;if(h*h+d*d<9){r=!1;break}}if(r)break}if(r){const a=6+S()*10;S();const c=Yt(s,o),l=S()*Math.PI*2,u=.8+S()*.4,h=v1(a,c);h.position.x=s,h.position.z=o,wc.push(h),_e.push({x:s,z:o,y:c,treeH:a,yRot:l,scale:u}),We.push({x:s,z:o,r2:4})}}const i=y1(10),t=Math.ceil(Zd/10)+10;Uo=w1(i,_e,t);for(let n=0;n<Cw;n++){let s,o,r=!1;for(let a=0;a<20;a++){const c=S()*6.28,l=10+S()*(ae*.6);if(s=Math.cos(c)*l,o=Math.sin(c)*l,r=!cn(s,o),r)break}if(r){fh(s,o,4);const a=X1(s,o);a.group.position.y=Yt(s,o),On.push(a),We.push({x:s,z:o,r2:64})}}for(let n=0;n<Lw;n++){let s,o,r=!1;for(let a=0;a<20;a++){const c=S()*6.28,l=8+S()*(ae*.6);if(s=Math.cos(c)*l,o=Math.sin(c)*l,r=!cn(s,o),r)break}if(r){fh(s,o,3);const a=Y1(s,o);a.group.position.y=Yt(s,o),Le.push(a),We.push({x:s,z:o,r2:49})}}for(let n=0;n<xw;n++){const s=_e[Math.floor(S()*_e.length)],o=S()*6.28,r=1+S()*4,a=s.x+Math.cos(o)*r,c=s.z+Math.sin(o)*r;if(cn(a,c))continue;const l=b1(a,c);l.group.position.y=Yt(a,c),Cn.push(l),We.push({x:a,z:c,r2:1})}for(let n=0;n<vw;n++){const s=S()*6.28,o=8+S()*ae*.6,r=Math.cos(s)*o,a=Math.sin(s)*o;if(cn(r,a))continue;const c=T1(r,a);c.group.position.y=Yt(r,a),ie.push(c),We.push({x:r,z:a,r2:4})}for(let n=0;n<Mw;n++){const s=S()*6.28,o=10+S()*ae*.5,r=Math.cos(s)*o,a=Math.sin(s)*o;ci.push(G1(r,Yt(r,a)+3+S()*5,a))}for(let n=0;n<_w;n++){const s=Cn[Math.floor(S()*Cn.length)],o=S()*6.28,r=1+S()*5,a=s.x+Math.cos(o)*r,c=s.z+Math.sin(o)*r;if(cn(a,c))continue;const l=k1(a,c);l.group.position.y=Yt(a,c),l._baseY=Yt(a,c),Un.push(l)}for(let n=0;n<yw;n++){const s=S()*6.28,o=12+S()*ae*.5,r=Math.cos(s)*o,a=Math.sin(s)*o;if(cn(r,a))continue;const c=H1(r,a),l=Yt(r,a);c.group.position.y=l,c._baseY=l,qe.push(c)}for(let n=0;n<ww;n++){const s=_e[Math.floor(S()*_e.length)];or.push(V1(s.x,Yt(s.x,s.z)+2+S()*4,s.z))}const e=[null,F.grassPurple,F.grassBlue,F.grassTeal];for(let n=0;n<Sw;n++){const s=S()*6.28,o=2+S()*(ae*.9),r=Math.cos(s)*o,a=Math.sin(s)*o,c=e[Math.floor(S()*e.length)],l=2+S()*2.5,u=25+Math.floor(S()*20);if(cn(r,a))continue;const h=A1(r,a,l,u,c);h.mesh.position.y=Yt(r,a),vm.push(h),We.push({x:r,z:a,r2:l*l})}for(let n=0;n<Aw;n++){let s,o,r=!1;for(let a=0;a<10;a++){const c=S()*6.28,l=3+S()*(ae*.85);if(s=Math.cos(c)*l,o=Math.sin(c)*l,r=!cn(s,o),r)break}if(r){const a=$1(s,o);a.group.position.y=Yt(s,o)-.08,Yc.push(a),We.push({x:s,z:o,r2:2.25})}}for(let n=0;n<bw;n++){const s=_e[Math.floor(S()*_e.length)],o=S()*6.28,r=1+S()*5,a=s.x+Math.cos(o)*r,c=s.z+Math.sin(o)*r;if(cn(a,c))continue;const l=R1(a,c);l.group.position.y=Yt(a,c),ea.push(l),We.push({x:a,z:c,r2:1})}for(let n=0;n<Tw;n++){const s=S()*6.28,o=3+S()*(ae*.7),r=Math.cos(s)*o,a=Math.sin(s)*o;if(cn(r,a))continue;const c=C1(r,a);c.group.position.y=Yt(r,a),bi.push(c),We.push({x:r,z:a,r2:1})}for(let n=0;n<Ew;n++){const s=S()*6.28,o=4+S()*(ae*.8),r=Math.cos(s)*o,a=Math.sin(s)*o;if(cn(r,a))continue;const c=P1(r,a);c.group.position.y=Yt(r,a),Hh.push(c),We.push({x:r,z:a,r2:1})}for(let n=0;n<bo;n++){let s,o,r=!1;for(let a=0;a<30;a++){const c=S()*6.28,l=20+S()*(ae*.6);s=Math.cos(c)*l,o=Math.sin(c)*l,r=!0;for(let u=0;u<Bn.length;u++){const h=Bn[u].x-s,d=Bn[u].z-o;if(h*h+d*d<225){r=!1;break}}if(r)break}if(r){const a=Z1(s,o);a.group.position.y=Yt(s,o)+1,a.flyY=Yt(s,o)+1,Bn.push(a)}}for(let n=0;n<g0;n++){const s=S()*6.28,o=2+S()*3,r=Math.cos(s)*o,a=Math.sin(s)*o;Zc.push(W1(r,Yt(r,a)+1+S()*.5,a))}for(let n=0;n<Rw;n++){const s=S()*6.28,o=4+S()*(ae*.7),r=Math.cos(s)*o,a=Math.sin(s)*o;if(cn(r,a))continue;const c=U1(r,a);c.group.position.y=Yt(r,a),Vr.push(c),We.push({x:r,z:a,r2:1})}for(let n=0;n<Pw;n++){const s=S()*6.28,o=5+S()*ae*.6,r=Math.cos(s)*o,a=Math.sin(s)*o;Mi.push(q1(r,Yt(r,a)+.5+S()*5,a))}for(let n=0;n<Dw;n++){const s=S()*6.28,o=5+S()*(ae*.7),r=Math.cos(s)*o,a=Math.sin(s)*o;if(cn(r,a))continue;const c=z1(r,a);c.group.position.y=Yt(r,a),Vh.push(c),We.push({x:r,z:a,r2:2.25})}for(let n=0;n<Uw;n++){const s=_e[Math.floor(S()*_e.length)],o=S()*6.28,r=2+S()*4,a=s.x+Math.cos(o)*r,c=s.z+Math.sin(o)*r;if(cn(a,c))continue;const l=F1(a,c);l.group.position.y=Yt(a,c),Wh.push(l),We.push({x:a,z:c,r2:1})}for(let n=0;n<Nw;n++){const s=S()*6.28,o=6+S()*(ae*.65),r=Math.cos(s)*o,a=Math.sin(s)*o;if(cn(r,a))continue;const c=O1(r,a);c.group.position.y=Yt(r,a),Mm.push(c),We.push({x:r,z:a,r2:2.25})}for(let n=0;n<_e.length;n++){const s=_e[n],o=Yt(s.x,s.z);s.y=o,wc[n]&&(wc[n].position.y=o+(s.treeH||10)*.6)}if(Uo.length>0){const n=new le;for(let s=0;s<Uo.length;s++){const o=Uo[s];for(let r=0;r<o.instances.length;r++){const a=o.instances[r],c=_e[a.posIdx];a.y=c.y,n.position.set(c.x,c.y,c.z),n.rotation.set(0,c.yRot,0),n.scale.setScalar(c.scale),n.updateMatrix(),o.trunk&&o.trunk.setMatrixAt(r,n.matrix),o.canopy&&o.canopy.setMatrixAt(r,n.matrix),o.glow&&o.glow.setMatrixAt(r,n.matrix),o.detail&&o.detail.setMatrixAt(r,n.matrix)}o.trunk&&(o.trunk.instanceMatrix.needsUpdate=!0),o.canopy&&(o.canopy.instanceMatrix.needsUpdate=!0),o.glow&&(o.glow.instanceMatrix.needsUpdate=!0),o.detail&&(o.detail.instanceMatrix.needsUpdate=!0)}}}function _m(i,t){const e=1+Xi*1.5,n=Os*.03,s=Do*.03,o=Y.pos.x,r=Y.pos.y,a=Y.pos.z;S1(Uo,wc,o,r,a,t,e,n,s),E1(t,e,n,s,o,a);for(let c=0;c<ea.length;c++){const l=ea[c],u=l.group.position.x-o,h=l.group.position.y-r,d=l.group.position.z-a,p=u*u+h*h+d*d;if(p>1600){l.group.visible&&(l.group.visible=!1);continue}l.group.visible||(l.group.visible=!0),!(p>900)&&(l.group.rotation.z=Math.sin(t*.8+l.phase)*.03*e+n,l.group.rotation.x=Math.sin(t*.6+l.phase+1)*.02*e+s)}for(let c=0;c<bi.length;c++){const l=bi[c],u=l.group.position.x-o,h=l.group.position.y-r,d=l.group.position.z-a,p=u*u+h*h+d*d;if(p>1600){l.group.visible&&(l.group.visible=!1);continue}if(l.group.visible||(l.group.visible=!0),p>900)continue;const g=Math.sin(t*1+l.phase)*.5+.5;l.petalMat.emissiveIntensity=(.3+g*.5)*Te,l.group.rotation.z=Math.sin(t*.9+l.phase)*.04*e+n*.5}for(let c=0;c<Hh.length;c++){const l=Hh[c],u=l.group.position.x-o,h=l.group.position.y-r,d=l.group.position.z-a,p=u*u+h*h+d*d;if(p>1600){l.group.visible&&(l.group.visible=!1);continue}l.group.visible||(l.group.visible=!0),!(p>900)&&(l.group.rotation.z=Math.sin(t*1.1+l.phase)*l.swayAmp*e+n,l.group.rotation.x=Math.sin(t*.8+l.phase+2)*l.swayAmp*.5*e+s)}for(let c=0;c<Vh.length;c++){const l=Vh[c],u=Math.sin(t*1.2+l.phase)*.5+.5;l.orbMat.emissiveIntensity=(.5+u*.5)*Te,l.hazeMat.opacity=(.04+u*.04)*Te,l.group.rotation.z=Math.sin(t*.5+l.phase)*.02*e+n*.3,l.group.rotation.x=Math.sin(t*.4+l.phase+1)*.015*e+s*.3}for(let c=0;c<Wh.length;c++){const l=Wh[c];for(let u=0;u<l.podMats.length;u++){const h=Math.sin(t*1.5+l.phase+u*1.8)*.5+.5;l.podMats[u].emissiveIntensity=(.3+h*.5)*Te}l.group.rotation.z=Math.sin(t*.35+l.phase)*.01*e+n*.2}B1(Mm,i,t,Te)}function ym(i,t){for(let n=0;n<ci.length;n++){const s=ci[n],o=s.group,r=o.position.x,a=o.position.z;s._syncPhase===void 0&&(s._syncPhase=s.phase);let c=0,l=0;for(let u=0;u<ci.length;u++){if(u===n)continue;const h=ci[u],d=h.group.position.x-r,p=h.group.position.z-a;d*d+p*p<225&&(c+=h._syncPhase||h.phase,l++)}if(l>0){const u=c/l;s._syncPhase+=(u-s._syncPhase)*i*.4}}const e=De==="DEEP_NIGHT"?2:De==="DAWN"?-1.5:0;for(let n=0;n<ci.length;n++){const s=ci[n].group,o=s.position.x-Y.pos.x,r=s.position.z-Y.pos.z,a=s.position.y-Y.pos.y;if(o*o+a*a+r*r>3025){s.visible=!1;continue}s.visible=!0;const c=ci[n],l=c.group,u=l.position.x,h=l.position.z,d=c.floatY+e;if(c._stT-=i,c._stT<=0)if(Yi)c._state="display",c._stT=10+Math.random()*15;else{const m=Math.random();m<.5?(c._state="drift",c._stT=20+Math.random()*30):m<.75?(c._state="pulse",c._stT=8+Math.random()*12):(c._state="migrate",c._migrateAng=Math.random()*6.28,c._stT=15+Math.random()*20)}switch(Yi&&c._state!=="display"&&(c._state="display",c._stT=10,Ys("jelly",{x:u,z:h},Y.pos)),c._state){case"drift":{c.driftAng+=i*.15;const m=8+Math.sin(t*.1+c.phase)*4,w=c.homeX+Math.cos(c.driftAng)*m,_=c.homeZ+Math.sin(c.driftAng)*m;l.position.x+=(w-u)*i*.3,l.position.z+=(_-h)*i*.3,l.position.y=d+Math.sin(t*c.wobble+c.phase)*1.5;break}case"pulse":{c.driftAng+=i*.08,l.position.x+=Math.cos(c.driftAng)*i*.3,l.position.z+=Math.sin(c.driftAng)*i*.3,l.position.y=d+Math.sin(t*c.wobble+c.phase)*1,c._pulseSync=Math.sin(t*2+c._syncPhase)*.5+.5;break}case"migrate":{l.position.x+=Math.cos(c._migrateAng)*i*1,l.position.z+=Math.sin(c._migrateAng)*i*1,l.position.y=d+Math.sin(t*c.wobble+c.phase)*.8,l.position.x*l.position.x+l.position.z*l.position.z>ae*.8*(ae*.8)&&(c._migrateAng+=Math.PI);break}case"display":{c.driftAng+=i*.4,l.position.x+=Math.cos(c.driftAng)*i*.8,l.position.z+=Math.sin(c.driftAng)*i*.8,l.position.y=d+Math.sin(t*2+c.phase)*2,c._syncPhase+=(0-c._syncPhase)*i*2;break}}c._state==="pulse"&&Math.random()<.003&&Ys("jelly",{x:u,z:h},Y.pos);const p=c._syncPhase||c.phase,g=Math.sin(t*1.2+p)*.5+.5;let x=1,f=0;if(c._state==="pulse")x=1+c._pulseSync*1.5,f=c._pulseSync*.15;else if(c._state==="display"){const m=Math.sin(t*4)*.5+.5;x=1.5+m*1.2,f=.15+m*.1}else c._state==="drift"&&(x=1+g*.3);c.bellMat.emissiveIntensity=(.4+g*.8)*Te*x,c.bellMat.opacity=.35+g*.25+f,l.rotation.y+=i*.2;for(let m=2;m<l.children.length;m++)l.children[m].rotation.x=Math.sin(t*2+m+p)*.15,l.children[m].rotation.z=Math.sin(t*1.5+m*.7+p)*.1}}function wm(i,t){const e=ze.ShiftLeft||ze.ShiftRight||lr,n=De==="DAWN"?.6:De==="NIGHT"?1.3:1,s=De==="DAWN"?2:De==="NIGHT"?.6:1;for(let o=0;o<Un.length;o++){const r=Un[o],a=r.group,c=a.position.x,l=a.position.z,u=c-Y.pos.x,h=l-Y.pos.z,d=u*u+h*h;if(d>1600){a.visible=!1;continue}if(a.visible=!0,r.state!=="startled"&&r.state!=="following"&&r.state!=="huddle"){const T=e?3.5:2;let b=d<T*T;if(!b)for(let y=0;y<qe.length;y++){if(qe[y].state!=="flee")continue;const v=qe[y].group.position.x-c,R=qe[y].group.position.z-l;if(v*v+R*R<25){b=!0;break}}b&&(r.state="startled",r._scaredT=.6+Math.random()*.5,r.wanderAng=Math.atan2(u,h),r.hopTimer=0,Ys("puff",{x:c,z:l},Y.pos))}if(Yi&&r.state!=="startled"&&r.state!=="huddle"){let T=1/0,b=-1;for(let y=0;y<Un.length;y++){if(y===o)continue;const v=Un[y].group.position.x-c,R=Un[y].group.position.z-l,U=v*v+R*R;U<T&&(T=U,b=y)}b>=0&&T>1&&(r.state="huddle",r._huddleTarget=b)}ir>8&&d<144&&r.state==="idle"&&Math.random()<.001&&(r.state="following",r._followT=10+Math.random()*10);const p=c-r._lastTX,g=l-r._lastTZ;p*p+g*g>.25&&(r._baseY=Yt(c,l),r._lastTX=c,r._lastTZ=l);const x={x:c,z:l},f=[];for(let T=0;T<Un.length;T++){if(T===o)continue;const b=Un[T].group.position.x,y=Un[T].group.position.z;(b-c)*(b-c)+(y-l)*(y-l)<100&&f.push({x:b,z:y})}const m=gm(x,f,1.5),w=f.length>0?xm(x,f):{x:0,z:0},_=m.x*2+w.x*.3,M=m.z*2+w.z*.3,A=Math.sqrt(_*_+M*M);switch(r.state){case"idle":{if(r.idleTimer-=i,a.position.y=r._baseY+Math.sin(t*2+r.phase)*.02,a.rotation.y+=Math.sin(t*.5+r.phase)*i*.3,A>.1&&f.length>1&&(a.position.x+=w.x*.05*i,a.position.z+=w.z*.05*i),Math.random()<2e-4&&Ys("puff",{x:c,z:l},Y.pos),r.idleTimer<=0){const T=A>.2?Math.atan2(_,M):0;r.state="hop",r.wanderAng+=(Math.random()-.5)*1.5+T*.3,r.hopTimer=0}break}case"hop":{r.hopTimer+=i;const b=r.hopTimer/1.2;if(b>=1)r.state="idle",r.idleTimer=(1.5+Math.random()*3)*s,a.position.y=r._baseY;else{a.position.y=r._baseY+Math.sin(b*Math.PI)*.3,a.position.x+=Math.sin(r.wanderAng)*r.speed*n*i,a.position.z+=Math.cos(r.wanderAng)*r.speed*i;const y=1-Math.sin(b*Math.PI)*.15,v=1+Math.sin(b*Math.PI)*.2;a.scale.set(y,v,y),a.rotation.y=r.wanderAng}break}case"startled":{r._scaredT-=i,r.hopTimer+=i*1.5;const T=Math.min(r.hopTimer/.8,1);a.position.y=r._baseY+Math.sin(T*Math.PI)*.5,a.position.x+=Math.sin(r.wanderAng)*r.speed*2*i+m.x*.5*i,a.position.z+=Math.cos(r.wanderAng)*r.speed*2*i+m.z*.5*i,a.scale.set(.85,1.3,.85),r._scaredT<=0&&(r.state="idle",r.idleTimer=3+Math.random()*3,a.position.y=r._baseY,a.scale.set(1,1,1));break}case"following":{if(r._followT-=i,d>225||ir<3||r._followT<=0){r.state="idle",r.idleTimer=2;break}if(r.wanderAng=Math.atan2(Y.pos.x-c,Y.pos.z-l),d>9){r.hopTimer+=i;const T=r.hopTimer%1.5/1.5;a.position.y=r._baseY+Math.sin(T*Math.PI)*.2,a.position.x+=Math.sin(r.wanderAng)*r.speed*.4*i,a.position.z+=Math.cos(r.wanderAng)*r.speed*.4*i}else a.position.y=r._baseY+Math.sin(t*3+r.phase)*.03;a.rotation.y=r.wanderAng;break}case"huddle":{if(!Yi){r.state="idle",r.idleTimer=2;break}const T=Un[r._huddleTarget];if(T){const b=T.group.position.x-c,y=T.group.position.z-l,v=Math.sqrt(b*b+y*y);v>.5&&(a.position.x+=b/v*r.speed*.5*i,a.position.z+=y/v*r.speed*.5*i)}a.rotation.z=Math.sin(t*8)*.05,a.position.y=r._baseY;break}}if(r._blinkTimer-=i,r._blinkTimer<=0)if(r._blinkState===0){for(let T=0;T<r.eyes.length;T++)r.eyes[T].scale.y=.1;r._blinkState=1,r._blinkTimer=.08+Math.random()*.06}else{for(let T=0;T<r.eyes.length;T++)r.eyes[T].scale.y=1;r._blinkState=0,r._blinkTimer=2+Math.random()*5}for(let T=0;T<r.ears.length;T++){const b=r.ears[T];b.mesh.rotation.z=b.baseRotZ+Math.sin(t*3.5+b.side*1.2+r.phase)*.08}r.tail.position.y=.38+Math.sin(t*4+r.phase)*.015,a.position.x*a.position.x+a.position.z*a.position.z>ae*.85*(ae*.85)&&(r.wanderAng+=Math.PI)}}function Sm(i,t){const e=ze.ShiftLeft||ze.ShiftRight||lr;for(let n=0;n<qe.length;n++){const s=qe[n],o=s.group,r=o.position.x,a=o.position.z,c=r-Y.pos.x,l=a-Y.pos.z,u=c*c+l*l;if(u>3600){o.visible=!1;continue}o.visible=!0;const h=Math.atan2(c,l),d=e?18:12,p=d*d,g=e?10:Ow,x=g*g,f=r-s._lastTX,m=a-s._lastTZ;f*f+m*m>.25&&(s._baseY=Yt(r,a),s._lastTX=r,s._lastTZ=a);const w=s._baseY;if(s.state!=="flee"&&s.state!=="alert"&&s.state!=="watching"){const v={x:r,z:a},R={x:Y.pos.x,z:Y.pos.z};u<x||Nb(v,R,g,e)?(s.state="flee",s.wanderAng=h,s.fleeTimer=2.5+Math.random()*2,s._zigTimer=0,Ys("deer",v,Y.pos)):(u<p||Ub(v,s.wanderAng,R,d,Math.PI*.5))&&(s.state="alert",s._stT=1+Math.random()*1.5,Ys("deer",v,Y.pos))}if(s.state!=="flee")for(let v=0;v<qe.length;v++){if(v===n||qe[v].state!=="flee")continue;const R=qe[v].group.position.x-r,U=qe[v].group.position.z-a;if(R*R+U*U<400){s.state="flee",s.wanderAng=qe[v].wanderAng+(Math.random()-.5)*.4,s.fleeTimer=2+Math.random()*1.5,s._zigTimer=0;break}}const _=[];for(let v=0;v<qe.length;v++){if(v===n)continue;const R=qe[v].group.position.x,U=qe[v].group.position.z;(R-r)*(R-r)+(U-a)*(U-a)<400&&_.push({x:R,z:U})}const M=gm({x:r,z:a},_,3),A=_.length>0?xm({x:r,z:a},_):{x:0,z:0};(s.state==="alert"||s.state==="watching")&&(s.headLook+=(h-s.wanderAng)*.3*i);let E=s.speed,T=!1;switch(s.state){case"walk":{if(T=!0,s.walkTimer-=i,s.walkTimer<=0){const R=Math.random(),U=De==="DUSK"?.55:.4,L=De==="DEEP_NIGHT"?.25:.1;if(R<.25)s.state="pause",s.pauseTimer=2+Math.random()*3;else if(R<U)s.state="graze",s._stT=De==="DUSK"?5+Math.random()*6:3+Math.random()*4;else if(R<U+.1&&Le.length>0){s.state="drink",s._stT=8;let z=1/0;for(let V=0;V<Le.length;V++){const k=Le[V].x-r,K=Le[V].z-a,W=k*k+K*K;W<z&&(z=W,s._drinkTgt=Le[V])}}else R<U+.1+L?(s.state="rest",s._stT=De==="DEEP_NIGHT"?8+Math.random()*8:5+Math.random()*5):(s.wanderAng+=(Math.random()-.5)*1.2,s.walkTimer=3+Math.random()*5)}if((r-s.homeX)*(r-s.homeX)+(a-s.homeZ)*(a-s.homeZ)>400){const R=Math.atan2(s.homeX-r,s.homeZ-a);s.wanderAng+=(R-s.wanderAng)*i*.5}if(_.length>0){const R=Math.atan2(A.x*.15+M.x*.8,A.z*.15+M.z*.8);s.wanderAng+=(R-s.wanderAng)*i*.3}break}case"pause":{s.pauseTimer-=i,s.headLook=Math.sin(t*.6)*.4,s.pauseTimer<=0&&(s.state="walk",s.walkTimer=3+Math.random()*5);break}case"graze":{s._stT-=i,s.headBob=-.5,s._stT<=0&&(s.state="walk",s.walkTimer=2+Math.random()*4,s.headBob=0);break}case"drink":{if(s._stT-=i,s._drinkTgt){const v=s._drinkTgt.x-r,R=s._drinkTgt.z-a;Math.sqrt(v*v+R*R)>2?(s.wanderAng=Math.atan2(v,R),T=!0,E=s.speed*.7):s.headBob=-.6}s._stT<=0&&(s.state="walk",s.walkTimer=3+Math.random()*4,s.headBob=0,s._drinkTgt=null);break}case"rest":{s._stT-=i,o.position.y=Math.max(w-.3,o.position.y-i*.5),s._stT<=0&&(s.state="walk",s.walkTimer=2+Math.random()*3);break}case"alert":{s._stT-=i,u<x?(s.state="flee",s.wanderAng=h,s.fleeTimer=2.5+Math.random()*2):s._stT<=0&&(u<d*1.2*(d*1.2)?(s.state="watching",s._stT=3+Math.random()*3):(s.state="walk",s.walkTimer=2+Math.random()*3));break}case"watching":{s._stT-=i,T=!0,E=s.speed*.3,s.wanderAng=h,u<x?(s.state="flee",s.wanderAng=h,s.fleeTimer=2.5+Math.random()*2):(u>d*1.5*(d*1.5)||s._stT<=0)&&(s.state="walk",s.walkTimer=2+Math.random()*4);break}case"flee":{T=!0,E=s.speed*Bw,s.fleeTimer-=i,s._zigTimer-=i,s._zigTimer<=0&&(s._zigDir*=-1,s._zigTimer=.4+Math.random()*.4),s.wanderAng=h+s._zigDir*.3;const v=Fb({x:r,z:a},s.wanderAng,_e,3,1.5);v.x*v.x+v.z*v.z>.01&&(s.wanderAng+=Math.atan2(v.z,v.x)*.3);const R=zb({x:r,z:a},8);(R.x!==0||R.z!==0)&&(s.wanderAng=Math.atan2(R.z,R.x)),(s.fleeTimer<=0||u>d*2*(d*2))&&(s.state="walk",s.walkTimer=3+Math.random()*5);break}}if(T&&(o.position.x+=Math.sin(s.wanderAng)*E*i,o.position.z+=Math.cos(s.wanderAng)*E*i,s.legCycle+=i*E*3),o.position.x*o.position.x+o.position.z*o.position.z>ae*.9*(ae*.9)&&(s.wanderAng=Math.atan2(-o.position.x,-o.position.z)),s.state!=="rest"){const v=w-o.position.y;Math.abs(v)>.01?o.position.y+=Math.sign(v)*Math.min(Math.abs(v),i*2):o.position.y=w}if(o.rotation.y=s.wanderAng,s.state==="alert"||s.state==="watching"){const v=h-s.wanderAng;s.headLook+=(v*.5-s.headLook)*i*3}const y=s.headBob||0;s.neckPivot.rotation.x+=(y-s.neckPivot.rotation.x)*i*3,s.neckPivot.rotation.y+=(s.headLook-s.neckPivot.rotation.y)*i*4,T&&s.state!=="graze"&&s.state!=="drink"&&(s.neckPivot.rotation.x+=Math.sin(s.legCycle*2)*.05);for(let v=0;v<s.legPivots.length;v++){const R=s.legPivots[v];if(T){const U=R.isFront?0:Math.PI,L=R.side>0?Math.PI:0,z=Math.sin(s.legCycle+U+L)*.4*(E/s.speed);R.upper.rotation.x=z,R.lower.rotation.x=Math.max(0,-z*.6)}else s.state==="rest"&&o.position.y<-.1?(R.upper.rotation.x+=(.8-R.upper.rotation.x)*i*2,R.lower.rotation.x+=(1-R.lower.rotation.x)*i*2):(R.upper.rotation.x*=.9,R.lower.rotation.x*=.9)}s.tailPivot.rotation.x=Math.sin(t*1.5+s.phase)*.15,s.state==="flee"&&(s.tailPivot.rotation.x+=.3),s.state==="alert"?s.tailPivot.rotation.z=Math.sin(t*6)*.1:s.tailPivot.rotation.z*=.9,s.mat.emissiveIntensity=(.3+Math.sin(t*.8+s.phase)*.2)*Te,s.headLook*=.98}}function bm(i,t){for(let e=0;e<or.length;e++){const n=or[e],s=n.group,o=s.position.x,r=s.position.z,a=o-Y.pos.x,c=r-Y.pos.z;if(a*a+c*c>2025){s.visible=!1;continue}if(s.visible=!0,n._state==="patrol"){if(Math.random()<.002){let f=1/0,m=null;for(let w=0;w<ie.length;w++){const _=ie[w].x-o,M=ie[w].z-r,A=_*_+M*M;A<900&&A<f&&(f=A,m=ie[w])}for(let w=0;w<On.length;w++){if(On[w].glowIntensity<.3)continue;const _=On[w].x-o,M=On[w].z-r,A=_*_+M*M;A<900&&A<f&&(f=A,m=On[w])}m&&(n._state="attracted",n._attractTarget=m,n._stT=6+Math.random()*8,Ys("moth",{x:o,z:r},Y.pos))}const x=De==="DAWN"?.005:De==="DEEP_NIGHT"?3e-4:.001;if(Math.random()<x){let f=1/0,m=null;for(let w=0;w<_e.length;w++){const _=_e[w].x-o,M=_e[w].z-r,A=_*_+M*M;A<400&&A<f&&(f=A,m=_e[w])}m&&(n._state="rest",n._restTree=m,n._stT=De==="DAWN"?8+Math.random()*10:4+Math.random()*6)}}const l=De==="DEEP_NIGHT"?1.6:De==="DAWN"?.5:1,u=De==="DEEP_NIGHT"?1.4:1;switch(n._state){case"patrol":{n.orbitAng+=i*.4*l;const x=n.centerX+Math.cos(n.orbitAng)*n.orbitR*u,f=n.centerZ+Math.sin(n.orbitAng)*n.orbitR*u;s.position.x+=(x-o)*i*1.5,s.position.z+=(f-r)*i*1.5,s.position.y=n.floatY+Math.sin(t*.7+n.phase)*.8,s.rotation.y=n.orbitAng+Math.PI/2;break}case"attracted":{if(n._stT-=i,!n._attractTarget||n._stT<=0){n._state="patrol",n._attractTarget=null;break}n.orbitAng+=i*.8;const x=n._attractTarget,f=Math.max(.5,n._stT*.4),m=x.x+Math.cos(n.orbitAng)*f,w=x.z+Math.sin(n.orbitAng)*f;s.position.x+=(m-o)*i*2,s.position.z+=(w-r)*i*2,s.position.y+=(2-s.position.y)*i*.5,s.rotation.y=n.orbitAng+Math.PI/2;break}case"rest":{if(n._stT-=i,!n._restTree||n._stT<=0){n._state="patrol",n._restTree=null,n.centerX=s.position.x,n.centerZ=s.position.z;break}const x=n._restTree,f=x.x+.5-o,m=x.z+.5-r,w=Math.sqrt(f*f+m*m);w>.3&&(s.position.x+=f/w*i*2,s.position.z+=m/w*i*2),s.position.y+=(2.5-s.position.y)*i*1.5,s.rotation.y=Math.atan2(f,m);break}}const h=n._state==="rest"?.05:.4,d=Math.sin(t*n.flapSpeed+n.phase)*h;for(let x=0;x<s._wingPivots.length;x++){const f=s._wingPivots[x];f.pivot.rotation.z=d*f.side}const p=Math.sin(t*1.5+n.phase)*.5+.5,g=n._state==="attracted"?.4:0;n.wingMat.emissiveIntensity=(.5+p*.6+g)*Te,n.wingMat.opacity=.45+p*.25}}function Jb(i,t){const e=ze.ShiftLeft||ze.ShiftRight||lr;let n=null;if(ir>5&&(Ze==="SEEK"||Ze==="RISING")){let s=1/0;for(let o=0;o<Bn.length;o++){if(Bn[o].found)continue;const r=Bn[o].x-Y.pos.x,a=Bn[o].z-Y.pos.z,c=r*r+a*a;c<s&&(s=c,n=Bn[o])}}for(let s=0;s<Zc.length;s++){const o=Zc[s],r=t*.5+o.phase+s/g0*6.28,a=e?4+s*2:1.5+s*.8,c=e?3+s:1.2+Math.sin(t*.7+o.phase)*.5;if(o.targetX=Y.pos.x+Math.cos(r)*a,o.targetY=Y.pos.y-Qc+c,o.targetZ=Y.pos.z+Math.sin(r)*a,s===0&&n){const g=Math.min((ir-5)/3,.6);o.targetX+=(n.x-Y.pos.x)*g,o.targetZ+=(n.z-Y.pos.z)*g,o.targetY+=.5}const l=e?.8:2.5;o.velX+=(o.targetX-o.group.position.x)*l*i,o.velY+=(o.targetY-o.group.position.y)*l*i,o.velZ+=(o.targetZ-o.group.position.z)*l*i,o.velX*=.92,o.velY*=.92,o.velZ*=.92,o.group.position.x+=o.velX*i*4,o.group.position.y+=o.velY*i*4,o.group.position.z+=o.velZ*i*4;const u=Math.sin(t*2+o.phase)*.5+.5;o.glowMat.opacity=.3+u*.4,o.hazeMat.opacity=.08+u*.12;const h=t*(2.5+s*.5)+o.phase,d=.14+Math.sin(t*1.3+o.phase)*.06;o.group.children[5].position.set(Math.cos(h)*d,Math.sin(h*1.5)*.08,Math.sin(h)*d);for(let g=0;g<o.tendrils.length;g++){const x=o.tendrils[g],f=Math.sin(t*3+g*2.1+o.phase)*.3,m=.08+Math.sin(t*2+g*1.5)*.04;x.mesh.position.x=Math.cos(x.baseAng+f)*m,x.mesh.position.z=Math.sin(x.baseAng+f)*m,x.mesh.rotation.y=x.baseAng+f,x.mesh.rotation.z=Math.PI/3+Math.sin(t*2.5+g)*.2}for(let g=0;g<o.embers.length;g++){const x=(g+1)*.08;o.embers[g].position.y=-.06-x+Math.sin(t*4+g*1.4+o.phase)*.03,o.embers[g].position.x=Math.sin(t*2.5+g*2+o.phase)*.06,o.embers[g].material.opacity=.2+Math.sin(t*5+g*1.7)*.15}o.facet.rotation.y+=i*1.5,o.facet.rotation.x+=i*.7,o.halo.rotation.z+=i*.3,o.halo2.rotation.y+=i*.2}}function Qb(i,t){for(let e=0;e<On.length;e++){const n=On[e],s=n.x-Y.pos.x,o=n.z-Y.pos.z,a=s*s+o*o<(rh+.5)*(rh+.5),c=a?1:0;n.glowIntensity+=(c-n.glowIntensity)*i*3,n.discMat.opacity=n.glowIntensity*.25*(.6+Math.sin(t*2+n.phase)*.4),n.mushMat.emissiveIntensity=(.2+n.glowIntensity*.8)*Te,a&&Y.vel.y>0&&Y.vel.y<=Lc+.5&&(Y.vel.y=Lc+zw,n.glowIntensity=1.5,_b());const l=.08+n.glowIntensity*.25;n.sporeMat.opacity=l;for(let u=0;u<n.spores.length;u++){const h=n.spores[u];h.drift+=i*.3,h.mesh.position.y+=h.speed*i*(.5+n.glowIntensity),h.mesh.position.x=h.baseX+Math.sin(t*.8+h.drift)*.15,h.mesh.position.z=h.baseZ+Math.cos(t*.6+h.drift)*.12,h.mesh.position.y>.8&&(h.mesh.position.y=.03),h.mesh.scale.setScalar(.6+Math.sin(t*2+u)*.4)}for(let u=0;u<n.glowWorms.length;u++){const h=Math.sin(t*1.5+u*1.3+n.phase)*.5+.5;n.glowWorms[u].material.opacity=.1+h*.4+n.glowIntensity*.3}}}function t2(i,t){for(let e=0;e<Mi.length;e++){const n=Mi[e];if(n.popped){if(n.popTimer-=i,n.popTimer<=0){n.popped=!1,n.group.visible=!0;const u=S()*6.28,h=8+S()*ae*.5;n.homeX=Math.cos(u)*h,n.homeZ=Math.sin(u)*h,n.floatY=.5+S()*4,n.group.position.set(n.homeX,n.floatY,n.homeZ)}continue}n.driftAng+=i*.2;const s=n.homeX+Math.sin(n.driftAng)*3,o=n.homeZ+Math.cos(n.driftAng*.7)*3;n.group.position.x+=(s-n.group.position.x)*i*.5,n.group.position.z+=(o-n.group.position.z)*i*.5,n.group.position.y=n.floatY+Math.sin(t*.6+n.phase)*n.bobAmp;const r=(t*.1+n.phase)%1;n.shellMat.color.setRGB(Math.sin(r*6.28)*.15+.7,Math.sin(r*6.28+2.09)*.15+.7,Math.sin(r*6.28+4.19)*.15+.8),n.shellMat.opacity=.18+Math.sin(t*1.5+n.phase)*.08;const a=n.group.position.x-Y.pos.x,c=n.group.position.y-Y.pos.y,l=n.group.position.z-Y.pos.z;a*a+c*c+l*l<$d*$d*n.sc*n.sc&&(n.popped=!0,n.popTimer=8+Math.random()*8,n.group.visible=!1,MS(n.group.position.x,n.group.position.y,n.group.position.z,6),db(n.group.position,Y.pos))}}function e2(i,t){const e=kr();for(let n=0;n<Le.length;n++){const s=Le[n],o=.015+e*.01;for(let h=0;h<s.pads.length;h++)s.pads[h].mesh.position.y=.05+Math.sin(t*(.8+e*.4)+s.pads[h].phase)*o;const r=e*.08;s.waterMat.emissiveIntensity=(.15+r+Math.sin(t*1+s.phase)*.1)*Te;const a=Math.sin(t*1.2+s.phase)*.5+.5;s.flMat.emissiveIntensity=(.3+a*.5)*Te;const c=.25+e*.2,l=.12+e*.08;for(let h=0;h<s.ripples.length;h++){const d=s.ripples[h],p=(t*c+d.phase)%1,g=.2+p*s.pondR*.8;d.mesh.scale.setScalar(g),d.mesh.material.opacity=(1-p)*l}const u=1+e*.5;for(let h=0;h<s.tadpoles.length;h++){const d=s.tadpoles[h];d.ang+=d.speed*u*i;const p=Math.cos(d.ang)*d.orbR,g=Math.sin(d.ang)*d.orbR;d.body.position.x=p,d.body.position.z=g,d.body.rotation.y=d.ang+Math.PI/2;const x=.02;d.tail.position.x=p-Math.cos(d.ang)*x,d.tail.position.z=g-Math.sin(d.ang)*x,d.tail.rotation.y=d.ang,d.tail.rotation.z=Math.PI/2+Math.sin(t*(8+e*2)+h*3)*.4}}}function n2(i,t){if(fu-=i,fu<=0){fu=.5;for(let o=0;o<ie.length;o++){const r=ie[o],a=r.x-Y.pos.x,c=r.z-Y.pos.z;if(a*a+c*c<36){jn={x:r.x,z:r.z},gi=0;break}}}const e=jb();if(!jn){e.visible=!1;return}if(gi+=i*12,gi>30){jn=null,gi=0,e.visible=!1;return}e.visible=!0,e.position.set(jn.x,.15,jn.z),e.scale.setScalar(gi),e.material.opacity=(1-gi/30)*.45;const n=gi,s=4;for(let o=0;o<Cn.length;o++){const r=Cn[o],a=r.x-jn.x,c=r.z-jn.z,l=Math.sqrt(a*a+c*c);if(Math.abs(l-n)<s){const u=1-Math.abs(l-n)/s;r.capMat.emissiveIntensity=Math.max(r.capMat.emissiveIntensity,(r.base+u*2)*Te)}}for(let o=0;o<bi.length;o++){const r=bi[o],a=r.group.position.x-jn.x,c=r.group.position.z-jn.z,l=Math.sqrt(a*a+c*c);if(Math.abs(l-n)<s){const u=1-Math.abs(l-n)/s;r.petalMat.emissiveIntensity=Math.max(r.petalMat.emissiveIntensity,(.3+u*1.5)*Te)}}}function i2(i,t){const e=Y.pos.x;Y.pos.y;const n=Y.pos.z,s=kr(),o=Yi?.6:s>.3?s*.4:0;for(let l=0;l<bi.length;l++){const u=bi[l],h=u.group.position.x,d=u.group.position.z,p=h-e,g=d-n,f=p*p+g*g<16?1:0;u._react=u._react||0,u._react+=(f-u._react)*i*(f>0?4:1.5);const m=(1+u._react*.15)*(1-o*.12),w=(1+u._react*.05)*(1-o*.15);u.group.scale.set(m,w,m),u.petalMat.emissiveIntensity+=u._react*.6*Te*(1-o*.4)}for(let l=0;l<Cn.length;l++){const u=Cn[l],h=u.x-e,d=u.z-n,g=h*h+d*d<4?1:0;u._touch=u._touch||0,u._touch+=(g-u._touch)*i*(g>0?6:1.5);const x=s*.4;u.capMat.emissiveIntensity+=(u._touch*1.5+x)*Te;const f=1+u._touch*.08;u.group.scale.set(f,1+u._touch*.04,f)}for(let l=0;l<ea.length;l++){const u=ea[l],h=u.group.position.x,d=u.group.position.z,p=h-e,g=d-n,f=p*p+g*g<2.25?.65:1;u._curl=u._curl===void 0?1:u._curl,u._curl+=(f-u._curl)*i*(f<1?4:1.5),u.group.scale.set(1+(1-u._curl)*.3,u._curl,1+(1-u._curl)*.3)}$b();const r=Xo==="FOG_BANK"?.5:1;let a=0,c=0;for(let l=0;l<ie.length;l++){const u=ie[l],h=u.x-e,d=u.z-n;if(h*h+d*d<36)for(let p=0;p<ie.length;p++){if(l===p)continue;const g=ie[p],x=u.x-g.x,f=u.z-g.z,m=x*x+f*f;if(m<400){a++;const w=(1-Math.sqrt(m)/20)*.8*r;if(g.mat.emissiveIntensity+=w*Te,c<Xh){const _=qh[c],M=_.geo.attributes.position.array,A=1,E=1;M[0]=u.x,M[1]=A,M[2]=u.z,M[3]=g.x,M[4]=E,M[5]=g.z,_.geo.attributes.position.needsUpdate=!0,_.geo.computeBoundingSphere(),_.active=!0;const T=Math.sin(t*3+l*1.5+p*.7)*.3+.5;_.opacity=w*T*Te,_.line.material.opacity=_.opacity,_.line.visible=!0,c++}}}}for(let l=c;l<Xh;l++){const u=qh[l];u.line.visible&&(u.opacity*=.85,u.line.material.opacity=u.opacity,u.opacity<.01&&(u.line.visible=!1))}return a}let sc="EXPLORE",du=0,pu=0;function s2(i,t){let e=!1;for(let x=0;x<ie.length;x++){const f=ie[x].x-Y.pos.x,m=ie[x].z-Y.pos.z;if(f*f+m*m<64){e=!0;break}}sc=e?"NEAR_CRYSTAL":"EXPLORE",du+=i;const n=kr(),s=Math.max(.2,1-n*.8),o=(sc==="NEAR_CRYSTAL"?.08:.25)/s,r=Math.floor((sc==="NEAR_CRYSTAL"?120:100)*s);if(du>o&&(du=0,k0(0,t)<r))if(sc==="NEAR_CRYSTAL")for(let f=0;f<ie.length;f++){const m=ie[f].x-Y.pos.x,w=ie[f].z-Y.pos.z;m*m+w*w<100&&fc(ie[f].x,Yt(ie[f].x,ie[f].z)+1,ie[f].z,3+Math.random()*4)}else if(Math.random()<.3&&bi.length>0){const f=bi[Math.floor(Math.random()*bi.length)];if(f._react>.3){const m=f.group.position.x,w=f.group.position.z;fc(m+(Math.random()-.5)*2,Yt(m,w)+.5,w+(Math.random()-.5)*2,4+Math.random()*6)}}else{const f=Math.random()*6.28,m=5+Math.random()*25,w=Y.pos.x+Math.cos(f)*m,_=Y.pos.z+Math.sin(f)*m;fc(w,Yt(w,_),_,6+Math.random()*10)}if(pu+=i,pu>.2){pu=0;for(let x=0;x<Cn.length;x++){const f=Cn[x],m=f.x-Y.pos.x,w=f.z-Y.pos.z;m*m+w*w<200&&Math.random()<.15&&uS(f.x,.6*f.group.scale.x,f.z)}}for(let x=0;x<Cn.length;x++){const f=Cn[x],m=f.x-Y.pos.x,w=(f.group.position.y||0)-Y.pos.y,_=f.z-Y.pos.z;if(m*m+w*w+_*_>2500){f.group.visible&&(f.group.visible=!1);continue}f.group.visible||(f.group.visible=!0);const A=Math.sin(t*f.speed+f.phase)*.5+.5;f.capMat.emissiveIntensity=f.base*(.5+A*.8)*Te}for(let x=0;x<ie.length;x++){const f=ie[x],m=Math.sin(t*.6+f.phase)*.5+.5;f.mat.emissiveIntensity=(1+m*1.5)*Te,f.group.children[0].rotation.y+=i*.15,f.light&&(f.light.intensity=(.3+m*.4)*Te)}if(!ss.length)for(let x=0;x<ie.length;x++)ss.push({idx:x,dist:0});const a=Y.pos.x-yp,c=Y.pos.z-wp;if(a*a+c*c>1){yp=Y.pos.x,wp=Y.pos.z;for(let x=0;x<ie.length;x++){const f=ie[x],m=f.x-Y.pos.x,w=f.z-Y.pos.z;ss[x].idx=x,ss[x].dist=m*m+w*w}ss.sort((x,f)=>x.dist-f.dist)}for(let x=0;x<As.length;x++)if(x<ss.length&&ss[x].dist<2500){const f=ie[ss[x].idx],m=Math.sin(t*.6+f.phase)*.5+.5;As[x].position.set(f.x,1.5,f.z),As[x].intensity=(1.5+m*2)*Te,As[x].distance=16,As[x].color.setHex(F.crystal)}else As[x].intensity=0;if(Xi>.8&&Math.random()<.005)for(let x=0;x<Vr.length;x++){const f=Vr[x];if(!f.dispersed&&Math.random()<.1){f.dispersed=!0;for(let m=0;m<8;m++)I0(f.x,f.h+.05,f.z);for(let m=2;m<f.group.children.length;m++)f.group.children[m].visible=!1;f.regrowTimer=15+Math.random()*10}}const l=Xi>.3?(Xi-.3)*.02:0,u=Yi?.03:0;if(Math.random()<l+u)for(let x=0;x<_e.length;x++){const f=_e[x],m=f.x-Y.pos.x,w=f.z-Y.pos.z;if(m*m+w*w<900&&Math.random()<.15){const _=(f.treeH||10)*.7+(f.y||0);SS(f.x,_,f.z);break}}ym(i,t),wm(i,t),Sm(i,t),bm(i,t),R0(i,t),_m(i,t);const h=Y.pos.x,d=Y.pos.y,p=Y.pos.z;for(let x=0;x<Yc.length;x++){const f=Yc[x],m=f.x||f.group.position.x,w=f.z||f.group.position.z,_=m-h,M=(f.group.position.y||0)-d,A=w-p,E=_*_+M*M+A*A;if(E>2500){f.group.visible&&(f.group.visible=!1);continue}if(f.group.visible||(f.group.visible=!0),!f.sparkles||E>400)continue;let T=0;for(let L=0;L<ie.length;L++){const z=ie[L].x-m,V=ie[L].z-w,k=z*z+V*V;k<100&&(T=Math.max(T,(1-Math.sqrt(k)/10)*.6))}const b=m-Y.pos.x,y=w-Y.pos.z,v=b*b+y*y,R=v<25?(1-Math.sqrt(v)/5)*.3:0;let U=0;if(jn&&gi>0){const L=m-jn.x,z=w-jn.z,V=Math.sqrt(L*L+z*z);Math.abs(V-gi)<3&&(U=(1-Math.abs(V-gi)/3)*.8)}for(let L=0;L<f.sparkles.length;L++){const z=Math.sin(t*4+x*2.3+L*1.7)*.35;f.sparkles[L].material.opacity=.15+z+T+R+U}f.mossMat&&R>0&&(f.mossMat.emissiveIntensity=.05+R*.4*Math.sin(t*2+x)*.5+.5)}Jb(i,t),N1(Vr,i,t,Y.pos),Qb(i,t),t2(i,t),e2(i,t),X0(i,t,Y.pos),D1(i,t),bS(i,t),gS(i),_S(i),n2(i);const g=i2(i,t);if(OS(i,t),rS(t),Y.onGround&&Y.vel.x*Y.vel.x+Y.vel.z*Y.vel.z>.5){const f=Math.atan2(Y.vel.x,Y.vel.z),m=ze.ShiftLeft||ze.ShiftRight||lr;AS(Y.pos.x,Y.pos.z,f,m)}RS(i,kr()),Sb(i,Y.pos,Le,vm,De,kr()),fb(i),Gb(Y.pos,qe,Un,ci,or,On,Le,g),kb(i)}let He=0,Yh=!1;function o2(){Yh||(Yh=!0,jw(!0),Zb())}function Tm(){requestAnimationFrame(Tm);const i=Math.min(x0.getDelta(),.1);He+=i,VS(i);const t=$S(i,He,Y.pos);KS(i,Y.pos,t,Os,Do),h1(i,He,De,Te,Xo),vi>0&&(xf.intensity+=vi*.8,ct.background.r=Math.min(ct.background.r+vi*.08,.25),ct.background.g=Math.min(ct.background.g+vi*.08,.25),ct.background.b=Math.min(ct.background.b+vi*.12,.35)),ab(i,Xi,t,Yi,vi,De,Y.pos,Le),vb(Y.pos);const e=Math.sqrt(Y.vel.x*Y.vel.x+Y.vel.z*Y.vel.z);let n=!1;for(let s=0;s<Le.length;s++){const o=Le[s].x-Y.pos.x,r=Le[s].z-Y.pos.z;if(o*o+r*r<225){n=!0;break}}if(!n)for(let s=0;s<On.length;s++){const o=On[s].x-Y.pos.x,r=On[s].z-Y.pos.z;if(o*o+r*r<144){n=!0;break}}if(Db(i,De,e,n),hS(Os,Do),L1(Os,Do,Xi),yS(Os,Do),!Yh){gn.position.set(0,Qc,0),gn.rotation.order="YXZ",gn.rotation.y+=i*.08,gn.rotation.x=0;for(let s=0;s<Cn.length;s++){const o=Cn[s],r=Math.sin(He*o.speed+o.phase)*.5+.5;o.capMat.emissiveIntensity=o.base*(.5+r*.8)*Te}for(let s=0;s<ie.length;s++){const o=ie[s];o.mat.emissiveIntensity=(1+Math.sin(He*.6+o.phase)*.5*1.5+.75)*Te}ym(i,He),wm(i,He),Sm(i,He),bm(i,He),R0(i,He),_m(i,He),X0(i,He,Y.pos);for(let s=0;s<Mi.length;s++)Mi[s].popped||(Mi[s].group.position.y=Mi[s].floatY+Math.sin(He*.6+Mi[s].phase)*Mi[s].bobAmp);for(let s=0;s<Le.length;s++)for(let o=0;o<Le[s].pads.length;o++)Le[s].pads[o].mesh.position.y=.05+Math.sin(He*.8+Le[s].pads[o].phase)*.015;for(let s=0;s<Bn.length;s++){const o=Bn[s],r=Math.sin(He*1.5+o.phase)*.5+.5;o.group.position.y=o.flyY+Math.sin(He*.8+o.phase)*.3,o.glowMat.opacity=.3+r*.4}Jd();return}m1(i),s2(i,He),k0(i,He),fS(i),gn.position.copy(Y.pos),gn.position.y+=C0,gn.rotation.order="YXZ",gn.rotation.y=$r,gn.rotation.x=Vs,Xb(i,Y.pos),Jd()}try{fh(0,0,5),s1(),HS({scene:ct,moon:ni,moon2:vf,hemiLight:xf,playerLight:Mf}),Kb();const i=e1();d1(_e,Yc),p1(rp),f1(t=>{let e=!1;for(let n=0;n<Le.length;n++){const s=Le[n].x-Y.pos.x,o=Le[n].z-Y.pos.z;if(s*s+o*o<16){e=!0;break}}lb(t,e),Math.random()<.4&&rp(Y.pos.x,Y.pos.z,1)},()=>ub(),t=>hb(t)),ZS(),jS(),aS(150),lS(60),Zw(),dS(Iw),mS(20),I1(40),vS(30),wS(50),ES(),u1(),eS(),sS(),oS(),rb(),Bb(),Wb(),qb(),FS({orbs:Bn,obeliskGroup:j1(),obeliskMat:K1(),obeliskGlowMat:J1(),pinnacleOrb:Q1(),pinnacleRings:tS(),moatMesh:nS(),moatMat:iS(),rainbowArcs:Jr,player:Y,makeLaser:CS,orbHudEl:Yb(),deers:qe,puffs:Un,jellies:ci,moths:or,trees:_e,treeMeshes:Uo,groundMesh:i,playOrbCollect:pb,playOrbWarble:mb,playLaserZap:gb,playLaserHum:xb,stopLaserHums:Mb}),$w(o2);for(let t=0;t<50;t++){const e=Math.random()*6.28,n=3+Math.random()*ae*.7,s=Math.cos(e)*n,o=Math.sin(e)*n;fc(s,Yt(s,o),o,8+Math.random()*12)}console.log("✓ Init: trees="+_e.length+" mush="+Cn.length+" crystals="+ie.length+" orbs="+Bn.length+" creatures="+(ci.length+Un.length+qe.length+or.length)+" wisps="+Zc.length+" dandelions="+Vr.length+" fairyRings="+On.length+" bubbles="+Mi.length+" ponds="+Le.length+" scene="+ct.children.length),Tm()}catch(i){console.error("INIT FAILED:",i),document.body.innerHTML='<div style="color:red;padding:30px;font-family:monospace"><h2>Init Failed</h2><pre>'+(i.stack||i.message)+"</pre></div>"}
