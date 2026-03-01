(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tf="172",zm=0,Gf=1,Fm=2,Rp=1,Cp=2,Ni=3,ds=0,Tn=1,Ut=2,ki=0,Fo=1,ce=2,kf=3,Hf=4,Om=5,Us=100,Bm=101,Gm=102,km=103,Hm=104,Vm=200,Wm=201,Xm=202,qm=203,vu=204,_u=205,Ym=206,Zm=207,$m=208,jm=209,Jm=210,Km=211,Qm=212,tg=213,eg=214,yu=0,wu=1,Su=2,$o=3,bu=4,Tu=5,Eu=6,Au=7,Pp=0,ng=1,ig=2,hs=0,sg=1,og=2,rg=3,Ip=4,ag=5,cg=6,lg=7,Lp=300,jo=301,Jo=302,Ru=303,Cu=304,Kc=306,Ko=1e3,zs=1001,Pu=1002,kn=1003,ug=1004,fa=1005,wi=1006,cl=1007,Fs=1008,qi=1009,Dp=1010,Up=1011,qr=1012,ef=1013,Xs=1014,Si=1015,Hi=1016,nf=1017,sf=1018,Qo=1020,Np=35902,zp=1021,Fp=1022,ui=1023,Op=1024,Bp=1025,Oo=1026,tr=1027,of=1028,rf=1029,Gp=1030,af=1031,cf=1033,rc=33776,ac=33777,cc=33778,lc=33779,Iu=35840,Lu=35841,Du=35842,Uu=35843,Nu=36196,zu=37492,Fu=37496,Ou=37808,Bu=37809,Gu=37810,ku=37811,Hu=37812,Vu=37813,Wu=37814,Xu=37815,qu=37816,Yu=37817,Zu=37818,$u=37819,ju=37820,Ju=37821,uc=36492,Ku=36494,Qu=36495,kp=36283,th=36284,eh=36285,nh=36286,hg=3200,fg=3201,Hp=0,dg=1,as="",bn="srgb",er="srgb-linear",Ec="linear",pe="srgb",Ks=7680,Vf=519,pg=512,mg=513,gg=514,Vp=515,xg=516,Mg=517,vg=518,_g=519,ih=35044,xe=35048,Wf="300 es",Bi=2e3,Ac=2001;class lr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ll=Math.PI/180,sh=180/Math.PI;function Vi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function yg(i,t){return(i%t+t)%t}function ul(i,t,e){return(1-e)*i+e*t}function _i(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,s,o,r,a,c,l){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l)}set(t,e,n,s,o,r,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=o,u[5]=c,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],x=s[0],d=s[3],m=s[6],S=s[1],v=s[4],_=s[7],A=s[2],E=s[5],b=s[8];return o[0]=r*x+a*S+c*A,o[3]=r*d+a*v+c*E,o[6]=r*m+a*_+c*b,o[1]=l*x+u*S+h*A,o[4]=l*d+u*v+h*E,o[7]=l*m+u*_+h*b,o[2]=f*x+p*S+g*A,o[5]=f*d+p*v+g*E,o[8]=f*m+p*_+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*r*u-e*a*l-n*o*u+n*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*r-a*l,f=a*c-u*o,p=l*o-r*c,g=e*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*r)*x,t[3]=f*x,t[4]=(u*e-s*c)*x,t[5]=(s*o-a*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(hl.makeScale(t,e)),this}rotate(t){return this.premultiply(hl.makeRotation(-t)),this}translate(t,e){return this.premultiply(hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hl=new Wt;function Wp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Rc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wg(){const i=Rc("canvas");return i.style.display="block",i}const Xf={};function bo(i){i in Xf||(Xf[i]=!0,console.warn(i))}function Sg(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function bg(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Tg(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qf=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yf=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Eg(){const i={enabled:!0,workingColorSpace:er,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===pe&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===pe&&(s.r=Bo(s.r),s.g=Bo(s.g),s.b=Bo(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===as?Ec:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[er]:{primaries:t,whitePoint:n,transfer:Ec,toXYZ:qf,fromXYZ:Yf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:qf,fromXYZ:Yf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),i}const re=Eg();function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Qs;class Ag{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qs===void 0&&(Qs=Rc("canvas")),Qs.width=t.width,Qs.height=t.height;const n=Qs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Rc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Wi(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wi(e[n]/255)*255):e[n]=Wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rg=0;class Xp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(fl(s[r].image)):o.push(fl(s[r]))}else o=fl(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function fl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ag.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cg=0;class nn extends lr{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,n=zs,s=zs,o=wi,r=Fs,a=ui,c=qi,l=nn.DEFAULT_ANISOTROPY,u=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=Vi(),this.name="",this.source=new Xp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ko:t.x=t.x-Math.floor(t.x);break;case zs:t.x=t.x<0?0:1;break;case Pu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ko:t.y=t.y-Math.floor(t.y);break;case zs:t.y=t.y<0?0:1;break;case Pu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Lp;nn.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],x=c[2],d=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+d)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,_=(p+1)/2,A=(m+1)/2,E=(u+f)/4,b=(h+x)/4,T=(g+d)/4;return v>_&&v>A?v<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(v),s=E/n,o=b/n):_>A?_<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(_),n=E/s,o=T/s):A<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(A),n=b/o,s=T/o),this.set(n,s,o,e),this}let S=Math.sqrt((d-g)*(d-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(d-g)/S,this.y=(h-x)/S,this.z=(f-u)/S,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pg extends lr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new nn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Xp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends Pg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class qp extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ig extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const f=o[r+0],p=o[r+1],g=o[r+2],x=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(h!==x||c!==f||l!==p||u!==g){let d=1-a;const m=c*f+l*p+u*g+h*x,S=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const A=Math.sqrt(v),E=Math.atan2(A,m*S);d=Math.sin(d*E)/A,a=Math.sin(a*E)/A}const _=a*S;if(c=c*d+f*_,l=l*d+p*_,u=u*d+g*_,h=h*d+x*_,d===1-a){const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=o[r],f=o[r+1],p=o[r+2],g=o[r+3];return t[e]=a*g+u*h+c*p-l*f,t[e+1]=c*g+u*f+l*h-a*p,t[e+2]=l*g+u*p+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(o/2),f=c(n/2),p=c(s/2),g=c(o/2);switch(r){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(o-l)*p,this._z=(r-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(o-l)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(r-s)/p,this._x=(o+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+r*a+s*l-o*c,this._y=s*u+r*c+o*a-n*l,this._z=o*u+r*l+n*c-s*a,this._w=r*u-n*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=r*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=o*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*n),u=2*(a*e-o*s),h=2*(o*n-r*e);return this.x=e+c*l+r*h-a*u,this.y=n+c*u+a*l-o*h,this.z=s+c*h+o*u-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dl.copy(this).projectOnVector(t),this.sub(dl)}reflect(t){return this.sub(dl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dl=new z,Zf=new fs;class $s{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,ri):ri.fromBufferAttribute(o,r),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),da.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),da.copy(n.boundingBox)),da.applyMatrix4(t.matrixWorld),this.union(da)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pr),pa.subVectors(this.max,pr),to.subVectors(t.a,pr),eo.subVectors(t.b,pr),no.subVectors(t.c,pr),Zi.subVectors(eo,to),$i.subVectors(no,eo),xs.subVectors(to,no);let e=[0,-Zi.z,Zi.y,0,-$i.z,$i.y,0,-xs.z,xs.y,Zi.z,0,-Zi.x,$i.z,0,-$i.x,xs.z,0,-xs.x,-Zi.y,Zi.x,0,-$i.y,$i.x,0,-xs.y,xs.x,0];return!pl(e,to,eo,no,pa)||(e=[1,0,0,0,1,0,0,0,1],!pl(e,to,eo,no,pa))?!1:(ma.crossVectors(Zi,$i),e=[ma.x,ma.y,ma.z],pl(e,to,eo,no,pa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ci=[new z,new z,new z,new z,new z,new z,new z,new z],ri=new z,da=new $s,to=new z,eo=new z,no=new z,Zi=new z,$i=new z,xs=new z,pr=new z,pa=new z,ma=new z,Ms=new z;function pl(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Ms.fromArray(i,o);const a=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),c=t.dot(Ms),l=e.dot(Ms),u=n.dot(Ms);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Lg=new $s,mr=new z,ml=new z;class js{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lg.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mr.subVectors(t,this.center);const e=mr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(mr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ml.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mr.copy(t.center).add(ml)),this.expandByPoint(mr.copy(t.center).sub(ml))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new z,gl=new z,ga=new z,ji=new z,xl=new z,xa=new z,Ml=new z;class lf{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){gl.copy(t).add(e).multiplyScalar(.5),ga.copy(e).sub(t).normalize(),ji.copy(this.origin).sub(gl);const o=t.distanceTo(e)*.5,r=-this.direction.dot(ga),a=ji.dot(this.direction),c=-ji.dot(ga),l=ji.lengthSq(),u=Math.abs(1-r*r);let h,f,p,g;if(u>0)if(h=r*c-a,f=r*a-c,g=o*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,p=h*(h+r*f+2*a)+f*(r*h+f+2*c)+l}else f=o,h=Math.max(0,-(r*f+a)),p=-h*h+f*(f+2*c)+l;else f=-o,h=Math.max(0,-(r*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-r*o+a)),f=h>0?-o:Math.min(Math.max(-o,-c),o),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-o,-c),o),p=f*(f+2*c)+l):(h=Math.max(0,-(r*o+a)),f=h>0?o:Math.min(Math.max(-o,-c),o),p=-h*h+f*(f+2*c)+l);else f=r>0?-o:o,h=Math.max(0,-(r*f+a)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(gl).addScaledVector(ga,f),p}intersectSphere(t,e){Pi.subVectors(t.center,this.origin);const n=Pi.dot(this.direction),s=Pi.dot(Pi)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(o=(t.min.y-f.y)*u,r=(t.max.y-f.y)*u):(o=(t.max.y-f.y)*u,r=(t.min.y-f.y)*u),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,n,s,o){xl.subVectors(e,t),xa.subVectors(n,t),Ml.crossVectors(xl,xa);let r=this.direction.dot(Ml),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ji.subVectors(this.origin,t);const c=a*this.direction.dot(xa.crossVectors(ji,xa));if(c<0)return null;const l=a*this.direction.dot(xl.cross(ji));if(l<0||c+l>r)return null;const u=-a*ji.dot(Ml);return u<0?null:this.at(u/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,s,o,r,a,c,l,u,h,f,p,g,x,d){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l,u,h,f,p,g,x,d)}set(t,e,n,s,o,r,a,c,l,u,h,f,p,g,x,d){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=f,m[3]=p,m[7]=g,m[11]=x,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/io.setFromMatrixColumn(t,0).length(),o=1/io.setFromMatrixColumn(t,1).length(),r=1/io.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){const f=r*u,p=r*h,g=a*u,x=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=g+p*l,e[10]=r*c}else if(t.order==="YXZ"){const f=c*u,p=c*h,g=l*u,x=l*h;e[0]=f+x*a,e[4]=g*a-p,e[8]=r*l,e[1]=r*h,e[5]=r*u,e[9]=-a,e[2]=p*a-g,e[6]=x+f*a,e[10]=r*c}else if(t.order==="ZXY"){const f=c*u,p=c*h,g=l*u,x=l*h;e[0]=f-x*a,e[4]=-r*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=r*u,e[9]=x-f*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const f=r*u,p=r*h,g=a*u,x=a*h;e[0]=c*u,e[4]=g*l-p,e[8]=f*l+x,e[1]=c*h,e[5]=x*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const f=r*c,p=r*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-f*h,e[8]=g*h+p,e[1]=h,e[5]=r*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+g,e[10]=f-x*h}else if(t.order==="XZY"){const f=r*c,p=r*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+x,e[5]=r*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dg,t,Ug)}lookAt(t,e,n){const s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Ji.crossVectors(n,Dn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Ji.crossVectors(n,Dn)),Ji.normalize(),Ma.crossVectors(Dn,Ji),s[0]=Ji.x,s[4]=Ma.x,s[8]=Dn.x,s[1]=Ji.y,s[5]=Ma.y,s[9]=Dn.y,s[2]=Ji.z,s[6]=Ma.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],x=n[6],d=n[10],m=n[14],S=n[3],v=n[7],_=n[11],A=n[15],E=s[0],b=s[4],T=s[8],y=s[12],M=s[1],R=s[5],D=s[9],L=s[13],N=s[2],k=s[6],B=s[10],Y=s[14],W=s[3],at=s[7],ft=s[11],mt=s[15];return o[0]=r*E+a*M+c*N+l*W,o[4]=r*b+a*R+c*k+l*at,o[8]=r*T+a*D+c*B+l*ft,o[12]=r*y+a*L+c*Y+l*mt,o[1]=u*E+h*M+f*N+p*W,o[5]=u*b+h*R+f*k+p*at,o[9]=u*T+h*D+f*B+p*ft,o[13]=u*y+h*L+f*Y+p*mt,o[2]=g*E+x*M+d*N+m*W,o[6]=g*b+x*R+d*k+m*at,o[10]=g*T+x*D+d*B+m*ft,o[14]=g*y+x*L+d*Y+m*mt,o[3]=S*E+v*M+_*N+A*W,o[7]=S*b+v*R+_*k+A*at,o[11]=S*T+v*D+_*B+A*ft,o[15]=S*y+v*L+_*Y+A*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],x=t[7],d=t[11],m=t[15];return g*(+o*c*h-s*l*h-o*a*f+n*l*f+s*a*p-n*c*p)+x*(+e*c*p-e*l*f+o*r*f-s*r*p+s*l*u-o*c*u)+d*(+e*l*h-e*a*p-o*r*h+n*r*p+o*a*u-n*l*u)+m*(-s*a*u-e*c*h+e*a*f+s*r*h-n*r*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],x=t[13],d=t[14],m=t[15],S=h*d*l-x*f*l+x*c*p-a*d*p-h*c*m+a*f*m,v=g*f*l-u*d*l-g*c*p+r*d*p+u*c*m-r*f*m,_=u*x*l-g*h*l+g*a*p-r*x*p-u*a*m+r*h*m,A=g*h*c-u*x*c-g*a*f+r*x*f+u*a*d-r*h*d,E=e*S+n*v+s*_+o*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=S*b,t[1]=(x*f*o-h*d*o-x*s*p+n*d*p+h*s*m-n*f*m)*b,t[2]=(a*d*o-x*c*o+x*s*l-n*d*l-a*s*m+n*c*m)*b,t[3]=(h*c*o-a*f*o-h*s*l+n*f*l+a*s*p-n*c*p)*b,t[4]=v*b,t[5]=(u*d*o-g*f*o+g*s*p-e*d*p-u*s*m+e*f*m)*b,t[6]=(g*c*o-r*d*o-g*s*l+e*d*l+r*s*m-e*c*m)*b,t[7]=(r*f*o-u*c*o+u*s*l-e*f*l-r*s*p+e*c*p)*b,t[8]=_*b,t[9]=(g*h*o-u*x*o-g*n*p+e*x*p+u*n*m-e*h*m)*b,t[10]=(r*x*o-g*a*o+g*n*l-e*x*l-r*n*m+e*a*m)*b,t[11]=(u*a*o-r*h*o-u*n*l+e*h*l+r*n*p-e*a*p)*b,t[12]=A*b,t[13]=(u*x*s-g*h*s+g*n*f-e*x*f-u*n*d+e*h*d)*b,t[14]=(g*a*s-r*x*s-g*n*c+e*x*c+r*n*d-e*a*d)*b,t[15]=(r*h*s-u*a*s+u*n*c-e*h*c-r*n*f+e*a*f)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,u=o*a;return this.set(l*r+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*r,0,l*c-s*a,u*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,u=r+r,h=a+a,f=o*l,p=o*u,g=o*h,x=r*u,d=r*h,m=a*h,S=c*l,v=c*u,_=c*h,A=n.x,E=n.y,b=n.z;return s[0]=(1-(x+m))*A,s[1]=(p+_)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(p-_)*E,s[5]=(1-(f+m))*E,s[6]=(d+S)*E,s[7]=0,s[8]=(g+v)*b,s[9]=(d-S)*b,s[10]=(1-(f+x))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=io.set(s[0],s[1],s[2]).length();const r=io.set(s[4],s[5],s[6]).length(),a=io.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],ai.copy(this);const l=1/o,u=1/r,h=1/a;return ai.elements[0]*=l,ai.elements[1]*=l,ai.elements[2]*=l,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=h,ai.elements[9]*=h,ai.elements[10]*=h,e.setFromRotationMatrix(ai),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Bi){const c=this.elements,l=2*o/(e-t),u=2*o/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(a===Bi)p=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===Ac)p=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Bi){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(r-o),f=(e+t)*l,p=(n+s)*u;let g,x;if(a===Bi)g=(r+o)*h,x=-2*h;else if(a===Ac)g=o*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const io=new z,ai=new fe,Dg=new z(0,0,0),Ug=new z(1,1,1),Ji=new z,Ma=new z,Dn=new z,$f=new fe,jf=new fs;class Ti{constructor(t=0,e=0,n=0,s=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-jt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $f.makeRotationFromQuaternion(t),this.setFromRotationMatrix($f,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jf.setFromEuler(this),this.setFromQuaternion(jf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class Yp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ng=0;const Jf=new z,so=new fs,Ii=new fe,va=new z,gr=new z,zg=new z,Fg=new fs,Kf=new z(1,0,0),Qf=new z(0,1,0),td=new z(0,0,1),ed={type:"added"},Og={type:"removed"},oo={type:"childadded",child:null},vl={type:"childremoved",child:null};class le extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=le.DEFAULT_UP.clone();const t=new z,e=new Ti,n=new fs,s=new z(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Wt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return so.setFromAxisAngle(t,e),this.quaternion.multiply(so),this}rotateOnWorldAxis(t,e){return so.setFromAxisAngle(t,e),this.quaternion.premultiply(so),this}rotateX(t){return this.rotateOnAxis(Kf,t)}rotateY(t){return this.rotateOnAxis(Qf,t)}rotateZ(t){return this.rotateOnAxis(td,t)}translateOnAxis(t,e){return Jf.copy(t).applyQuaternion(this.quaternion),this.position.add(Jf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kf,t)}translateY(t){return this.translateOnAxis(Qf,t)}translateZ(t){return this.translateOnAxis(td,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?va.copy(t):va.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(gr,va,this.up):Ii.lookAt(va,gr,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),so.setFromRotationMatrix(Ii),this.quaternion.premultiply(so.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ed),oo.child=t,this.dispatchEvent(oo),oo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Og),vl.child=t,this.dispatchEvent(vl),vl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ed),oo.child=t,this.dispatchEvent(oo),oo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,t,zg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,Fg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];o(t.shapes,h)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),u=r(t.images),h=r(t.shapes),f=r(t.skeletons),p=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}le.DEFAULT_UP=new z(0,1,0);le.DEFAULT_MATRIX_AUTO_UPDATE=!0;le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new z,Li=new z,_l=new z,Di=new z,ro=new z,ao=new z,nd=new z,yl=new z,wl=new z,Sl=new z,bl=new ge,Tl=new ge,El=new ge;class ti{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ci.subVectors(t,e),s.cross(ci);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){ci.subVectors(s,e),Li.subVectors(n,e),_l.subVectors(t,e);const r=ci.dot(ci),a=ci.dot(Li),c=ci.dot(_l),l=Li.dot(Li),u=Li.dot(_l),h=r*l-a*a;if(h===0)return o.set(0,0,0),null;const f=1/h,p=(l*c-a*u)*f,g=(r*u-a*c)*f;return o.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,n,s,o,r,a,c){return this.getBarycoord(t,e,n,s,Di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Di.x),c.addScaledVector(r,Di.y),c.addScaledVector(a,Di.z),c)}static getInterpolatedAttribute(t,e,n,s,o,r){return bl.setScalar(0),Tl.setScalar(0),El.setScalar(0),bl.fromBufferAttribute(t,e),Tl.fromBufferAttribute(t,n),El.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(bl,o.x),r.addScaledVector(Tl,o.y),r.addScaledVector(El,o.z),r}static isFrontFacing(t,e,n,s){return ci.subVectors(n,e),Li.subVectors(t,e),ci.cross(Li).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ci.cross(Li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ti.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return ti.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;ro.subVectors(s,n),ao.subVectors(o,n),yl.subVectors(t,n);const c=ro.dot(yl),l=ao.dot(yl);if(c<=0&&l<=0)return e.copy(n);wl.subVectors(t,s);const u=ro.dot(wl),h=ao.dot(wl);if(u>=0&&h<=u)return e.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return r=c/(c-u),e.copy(n).addScaledVector(ro,r);Sl.subVectors(t,o);const p=ro.dot(Sl),g=ao.dot(Sl);if(g>=0&&p<=g)return e.copy(o);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ao,a);const d=u*g-p*h;if(d<=0&&h-u>=0&&p-g>=0)return nd.subVectors(o,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(nd,a);const m=1/(d+x+f);return r=x*m,a=f*m,e.copy(n).addScaledVector(ro,r).addScaledVector(ao,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Al(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=yg(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Al(r,o,t+1/3),this.g=Al(r,o,t),this.b=Al(r,o,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=bn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=bn){const n=Zp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}copyLinearToSRGB(t){return this.r=Bo(t.r),this.g=Bo(t.g),this.b=Bo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bn){return re.fromWorkingColorSpace(Ke.copy(this),t),Math.round(jt(Ke.r*255,0,255))*65536+Math.round(jt(Ke.g*255,0,255))*256+Math.round(jt(Ke.b*255,0,255))}getHexString(t=bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Ke.copy(this),e);const n=Ke.r,s=Ke.g,o=Ke.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let c,l;const u=(a+r)/2;if(a===r)c=0,l=0;else{const h=r-a;switch(l=u<=.5?h/(r+a):h/(2-r-a),r){case n:c=(s-o)/h+(s<o?6:0);break;case s:c=(o-n)/h+2;break;case o:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=bn){re.fromWorkingColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,s=Ke.b;return t!==bn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ki),this.setHSL(Ki.h+t,Ki.s+e,Ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ki),t.getHSL(_a);const n=ul(Ki.h,_a.h,e),s=ul(Ki.s,_a.s,e),o=ul(Ki.l,_a.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new ot;ot.NAMES=Zp;let Bg=0;class ps extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Fo,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vu,this.blendDst=_u,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=$o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fo&&(n.blending=this.blending),this.side!==ds&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vu&&(n.blendSrc=this.blendSrc),this.blendDst!==_u&&(n.blendDst=this.blendDst),this.blendEquation!==Us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$o&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class j extends ps{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Pp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new z,ya=new dt;class Ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ih,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ya.fromBufferAttribute(this,e),ya.applyMatrix3(t),this.setXY(e,ya.x,ya.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_i(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_i(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_i(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),o=me(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ih&&(t.usage=this.usage),t}}class $p extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jp extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ht extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Gg=0;const Yn=new fe,Rl=new le,co=new z,Un=new $s,xr=new $s,ke=new z;class we extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wp(t)?jp:$p)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Wt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Yn.makeRotationFromQuaternion(t),this.applyMatrix4(Yn),this}rotateX(t){return Yn.makeRotationX(t),this.applyMatrix4(Yn),this}rotateY(t){return Yn.makeRotationY(t),this.applyMatrix4(Yn),this}rotateZ(t){return Yn.makeRotationZ(t),this.applyMatrix4(Yn),this}translate(t,e,n){return Yn.makeTranslation(t,e,n),this.applyMatrix4(Yn),this}scale(t,e,n){return Yn.makeScale(t,e,n),this.applyMatrix4(Yn),this}lookAt(t){return Rl.lookAt(t),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ht(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Un.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];xr.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(Un.min,xr.min),Un.expandByPoint(ke),ke.addVectors(Un.max,xr.max),Un.expandByPoint(ke)):(Un.expandByPoint(xr.min),Un.expandByPoint(xr.max))}Un.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)ke.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ke.fromBufferAttribute(a,l),c&&(co.fromBufferAttribute(t,l),ke.add(co)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new z,c[T]=new z;const l=new z,u=new z,h=new z,f=new dt,p=new dt,g=new dt,x=new z,d=new z;function m(T,y,M){l.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),f.fromBufferAttribute(o,T),p.fromBufferAttribute(o,y),g.fromBufferAttribute(o,M),u.sub(l),h.sub(l),p.sub(f),g.sub(f);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(R),d.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[T].add(x),a[y].add(x),a[M].add(x),c[T].add(d),c[y].add(d),c[M].add(d))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let T=0,y=S.length;T<y;++T){const M=S[T],R=M.start,D=M.count;for(let L=R,N=R+D;L<N;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const v=new z,_=new z,A=new z,E=new z;function b(T){A.fromBufferAttribute(s,T),E.copy(A);const y=a[T];v.copy(y),v.sub(A.multiplyScalar(A.dot(y))).normalize(),_.crossVectors(E,y);const R=_.dot(c[T])<0?-1:1;r.setXYZW(T,v.x,v.y,v.z,R)}for(let T=0,y=S.length;T<y;++T){const M=S[T],R=M.start,D=M.count;for(let L=R,N=R+D;L<N;L+=3)b(t.getX(L+0)),b(t.getX(L+1)),b(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new z,o=new z,r=new z,a=new z,c=new z,l=new z,u=new z,h=new z;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),x=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,d),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,d),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let p=0,g=0;for(let x=0,d=c.length;x<d;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*u;for(let m=0;m<u;m++)f[g++]=l[p++]}return new Ue(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const o=t.morphAttributes;for(const l in o){const u=[],h=o[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,u=r.length;l<u;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const id=new fe,vs=new lf,wa=new js,sd=new z,Sa=new z,ba=new z,Ta=new z,Cl=new z,Ea=new z,od=new z,Aa=new z;class I extends le{constructor(t=new we,e=new j){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Ea.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],h=o[c];u!==0&&(Cl.fromBufferAttribute(h,t),r?Ea.addScaledVector(Cl,u):Ea.addScaledVector(Cl.sub(e),u))}e.add(Ea)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(o),vs.copy(t.ray).recast(t.near),!(wa.containsPoint(vs.origin)===!1&&(vs.intersectSphere(wa,sd)===null||vs.origin.distanceToSquared(sd)>(t.far-t.near)**2))&&(id.copy(o).invert(),vs.copy(t.ray).applyMatrix4(id),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,f=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const d=f[g],m=r[d.materialIndex],S=Math.max(d.start,p.start),v=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let _=S,A=v;_<A;_+=3){const E=a.getX(_),b=a.getX(_+1),T=a.getX(_+2);s=Ra(this,m,t,n,l,u,h,E,b,T),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let d=g,m=x;d<m;d+=3){const S=a.getX(d),v=a.getX(d+1),_=a.getX(d+2);s=Ra(this,r,t,n,l,u,h,S,v,_),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const d=f[g],m=r[d.materialIndex],S=Math.max(d.start,p.start),v=Math.min(c.count,Math.min(d.start+d.count,p.start+p.count));for(let _=S,A=v;_<A;_+=3){const E=_,b=_+1,T=_+2;s=Ra(this,m,t,n,l,u,h,E,b,T),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let d=g,m=x;d<m;d+=3){const S=d,v=d+1,_=d+2;s=Ra(this,r,t,n,l,u,h,S,v,_),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}}function kg(i,t,e,n,s,o,r,a){let c;if(t.side===Tn?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,t.side===ds,a),c===null)return null;Aa.copy(a),Aa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Aa);return l<e.near||l>e.far?null:{distance:l,point:Aa.clone(),object:i}}function Ra(i,t,e,n,s,o,r,a,c,l){i.getVertexPosition(a,Sa),i.getVertexPosition(c,ba),i.getVertexPosition(l,Ta);const u=kg(i,t,e,n,Sa,ba,Ta,od);if(u){const h=new z;ti.getBarycoord(od,Sa,ba,Ta,h),s&&(u.uv=ti.getInterpolatedAttribute(s,a,c,l,h,new dt)),o&&(u.uv1=ti.getInterpolatedAttribute(o,a,c,l,h,new dt)),r&&(u.normal=ti.getInterpolatedAttribute(r,a,c,l,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new z,materialIndex:0};ti.getNormal(Sa,ba,Ta,f.normal),u.face=f,u.barycoord=h}return u}class ia extends we{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(h,2));function g(x,d,m,S,v,_,A,E,b,T,y){const M=_/b,R=A/T,D=_/2,L=A/2,N=E/2,k=b+1,B=T+1;let Y=0,W=0;const at=new z;for(let ft=0;ft<B;ft++){const mt=ft*R-L;for(let Ct=0;Ct<k;Ct++){const Zt=Ct*M-D;at[x]=Zt*S,at[d]=mt*v,at[m]=N,l.push(at.x,at.y,at.z),at[x]=0,at[d]=0,at[m]=E>0?1:-1,u.push(at.x,at.y,at.z),h.push(Ct/b),h.push(1-ft/T),Y+=1}}for(let ft=0;ft<T;ft++)for(let mt=0;mt<b;mt++){const Ct=f+mt+k*ft,Zt=f+mt+k*(ft+1),et=f+(mt+1)+k*(ft+1),ct=f+(mt+1)+k*ft;c.push(Ct,Zt,ct),c.push(Zt,et,ct),W+=6}a.addGroup(p,W,y),p+=W,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ia(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function nr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ln(i){const t={};for(let e=0;e<i.length;e++){const n=nr(i[e]);for(const s in n)t[s]=n[s]}return t}function Hg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jp(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const Cc={clone:nr,merge:ln};var Vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends ps{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vg,this.fragmentShader=Wg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=Hg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Kp extends le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new z,rd=new dt,ad=new dt;class zn extends Kp{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=sh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ll*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sh*2*Math.atan(Math.tan(ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-t/Qi.z)}getViewSize(t,e){return this.getViewBounds(t,rd,ad),e.subVectors(ad,rd)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ll*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const lo=-90,uo=1;class Xg extends le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zn(lo,uo,t,e);s.layers=this.layers,this.add(s);const o=new zn(lo,uo,t,e);o.layers=this.layers,this.add(o);const r=new zn(lo,uo,t,e);r.layers=this.layers,this.add(r);const a=new zn(lo,uo,t,e);a.layers=this.layers,this.add(a);const c=new zn(lo,uo,t,e);c.layers=this.layers,this.add(c);const l=new zn(lo,uo,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ac)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Qp extends nn{constructor(t,e,n,s,o,r,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:jo,super(t,e,n,s,o,r,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qg extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Qp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ia(5,5,5),o=new Rn({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:ki});o.uniforms.tEquirect.value=e;const r=new I(s,o),a=e.minFilter;return e.minFilter===Fs&&(e.minFilter=wi),new Xg(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}class uf{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(t),this.density=e}clone(){return new uf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Yg extends le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Zg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ih,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new z;class Pc{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_i(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_i(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_i(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_i(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),o=me(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Pc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class t0 extends ps{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ho;const Mr=new z,fo=new z,po=new z,mo=new dt,vr=new dt,e0=new fe,Ca=new z,_r=new z,Pa=new z,cd=new dt,Pl=new dt,ld=new dt;class $g extends le{constructor(t=new t0){if(super(),this.isSprite=!0,this.type="Sprite",ho===void 0){ho=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Zg(e,5);ho.setIndex([0,1,2,0,2,3]),ho.setAttribute("position",new Pc(n,3,0,!1)),ho.setAttribute("uv",new Pc(n,2,3,!1))}this.geometry=ho,this.material=t,this.center=new dt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fo.setFromMatrixScale(this.matrixWorld),e0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),po.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fo.multiplyScalar(-po.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;Ia(Ca.set(-.5,-.5,0),po,r,fo,s,o),Ia(_r.set(.5,-.5,0),po,r,fo,s,o),Ia(Pa.set(.5,.5,0),po,r,fo,s,o),cd.set(0,0),Pl.set(1,0),ld.set(1,1);let a=t.ray.intersectTriangle(Ca,_r,Pa,!1,Mr);if(a===null&&(Ia(_r.set(-.5,.5,0),po,r,fo,s,o),Pl.set(0,1),a=t.ray.intersectTriangle(Ca,Pa,_r,!1,Mr),a===null))return;const c=t.ray.origin.distanceTo(Mr);c<t.near||c>t.far||e.push({distance:c,point:Mr.clone(),uv:ti.getInterpolation(Mr,Ca,_r,Pa,cd,Pl,ld,new dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ia(i,t,e,n,s,o){mo.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(vr.x=o*mo.x-s*mo.y,vr.y=s*mo.x+o*mo.y):vr.copy(mo),i.copy(t),i.x+=vr.x,i.y+=vr.y,i.applyMatrix4(e0)}class jg extends nn{constructor(t=null,e=1,n=1,s,o,r,a,c,l=kn,u=kn,h,f){super(null,r,a,c,l,u,s,o,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei extends Ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const go=new fe,ud=new fe,La=[],hd=new $s,Jg=new fe,yr=new I,wr=new js;class ei extends I{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ei(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Jg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $s),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,go),hd.copy(t.boundingBox).applyMatrix4(go),this.boundingBox.union(hd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new js),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,go),wr.copy(t.boundingSphere).applyMatrix4(go),this.boundingSphere.union(wr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(yr.geometry=this.geometry,yr.material=this.material,yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wr.copy(this.boundingSphere),wr.applyMatrix4(n),t.ray.intersectsSphere(wr)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,go),ud.multiplyMatrices(n,go),yr.matrixWorld=ud,yr.raycast(t,La);for(let r=0,a=La.length;r<a;r++){const c=La[r];c.instanceId=o,c.object=this,e.push(c)}La.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ei(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new jg(new Float32Array(s*this.count),s,this.count,of,Si));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Il=new z,Kg=new z,Qg=new Wt;class Es{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Il.subVectors(n,e).cross(Kg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Il),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Qg.getNormalMatrix(t),s=this.coplanarPoint(Il).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new js,Da=new z;class hf{constructor(t=new Es,e=new Es,n=new Es,s=new Es,o=new Es,r=new Es){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bi){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],x=s[10],d=s[11],m=s[12],S=s[13],v=s[14],_=s[15];if(n[0].setComponents(c-o,f-l,d-p,_-m).normalize(),n[1].setComponents(c+o,f+l,d+p,_+m).normalize(),n[2].setComponents(c+r,f+u,d+g,_+S).normalize(),n[3].setComponents(c-r,f-u,d-g,_-S).normalize(),n[4].setComponents(c-a,f-h,d-x,_-v).normalize(),e===Bi)n[5].setComponents(c+a,f+h,d+x,_+v).normalize();else if(e===Ac)n[5].setComponents(a,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(t){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(t.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Da.x=s.normal.x>0?t.max.x:t.min.x,Da.y=s.normal.y>0?t.max.y:t.min.y,Da.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Da)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ff extends ps{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ic=new z,Lc=new z,fd=new fe,Sr=new lf,Ua=new js,Ll=new z,dd=new z;class n0 extends le{constructor(t=new we,e=new ff){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)Ic.fromBufferAttribute(e,s-1),Lc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ic.distanceTo(Lc);t.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(s),Ua.radius+=o,t.ray.intersectsSphere(Ua)===!1)return;fd.copy(s).invert(),Sr.copy(t.ray).applyMatrix4(fd);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let x=p,d=g-1;x<d;x+=l){const m=u.getX(x),S=u.getX(x+1),v=Na(this,t,Sr,c,m,S);v&&e.push(v)}if(this.isLineLoop){const x=u.getX(g-1),d=u.getX(p),m=Na(this,t,Sr,c,x,d);m&&e.push(m)}}else{const p=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let x=p,d=g-1;x<d;x+=l){const m=Na(this,t,Sr,c,x,x+1);m&&e.push(m)}if(this.isLineLoop){const x=Na(this,t,Sr,c,g-1,p);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Na(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(Ic.fromBufferAttribute(r,s),Lc.fromBufferAttribute(r,o),e.distanceSqToSegment(Ic,Lc,Ll,dd)>n)return;Ll.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ll);if(!(c<t.near||c>t.far))return{distance:c,point:dd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const pd=new z,md=new z;class tx extends n0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)pd.fromBufferAttribute(e,s),md.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+pd.distanceTo(md);t.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class df extends ps{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const gd=new fe,oh=new lf,za=new js,Fa=new z;class i0 extends le{constructor(t=new we,e=new df){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(s),za.radius+=o,t.ray.intersectsSphere(za)===!1)return;gd.copy(s).invert(),oh.copy(t.ray).applyMatrix4(gd);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let g=f,x=p;g<x;g++){const d=l.getX(g);Fa.fromBufferAttribute(h,d),xd(Fa,d,c,s,t,e,this)}}else{const f=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let g=f,x=p;g<x;g++)Fa.fromBufferAttribute(h,g),xd(Fa,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function xd(i,t,e,n,s,o,r){const a=oh.distanceSqToPoint(i);if(a<e){const c=new z;oh.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class ae extends le{constructor(){super(),this.isGroup=!0,this.type="Group"}}class sa extends nn{constructor(t,e,n,s,o,r,a,c,l){super(t,e,n,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class s0 extends nn{constructor(t,e,n,s,o,r,a,c,l,u=Oo){if(u!==Oo&&u!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Oo&&(n=Xs),n===void 0&&u===tr&&(n=Qo),super(null,s,o,r,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:kn,this.minFilter=c!==void 0?c:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ai{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(o-1);const u=n[s],f=n[s+1]-u,p=(r-u)/f;return(s+p)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new dt:new z);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new z,s=[],o=[],r=[],a=new z,c=new fe;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new z)}o[0]=new z,r[0]=new z;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(jt(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(c.makeRotationAxis(a,g))}r[p].crossVectors(s[p],o[p])}if(e===!0){let p=Math.acos(jt(o[0].dot(o[t]),-1,1));p/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class pf extends Ai{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new dt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*u-p*h+this.aX,l=f*h+p*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ex extends pf{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function mf(){let i=0,t=0,e=0,n=0;function s(o,r,a,c){i=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,u,h){let f=(r-o)/l-(a-o)/(l+u)+(a-r)/u,p=(a-r)/u-(c-r)/(u+h)+(c-a)/h;f*=u,p*=u,s(r,a,f,p)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Oa=new z,Dl=new mf,Ul=new mf,Nl=new mf;class oa extends Ai{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%o]:(Oa.subVectors(s[0],s[1]).add(s[0]),l=Oa);const h=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?u=s[(a+2)%o]:(Oa.subVectors(s[o-1],s[o-2]).add(s[o-1]),u=Oa),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),d<1e-4&&(d=x),Dl.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,x,d),Ul.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,x,d),Nl.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,x,d)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Ul.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Nl.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Dl.calc(c),Ul.calc(c),Nl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Md(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*i+e}function nx(i,t){const e=1-i;return e*e*t}function ix(i,t){return 2*(1-i)*i*t}function sx(i,t){return i*i*t}function Or(i,t,e,n){return nx(i,t)+ix(i,e)+sx(i,n)}function ox(i,t){const e=1-i;return e*e*e*t}function rx(i,t){const e=1-i;return 3*e*e*i*t}function ax(i,t){return 3*(1-i)*i*i*t}function cx(i,t){return i*i*i*t}function Br(i,t,e,n,s){return ox(i,t)+rx(i,e)+ax(i,n)+cx(i,s)}class o0 extends Ai{constructor(t=new dt,e=new dt,n=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new dt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Br(t,s.x,o.x,r.x,a.x),Br(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lx extends Ai{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Br(t,s.x,o.x,r.x,a.x),Br(t,s.y,o.y,r.y,a.y),Br(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class r0 extends Ai{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gf extends Ai{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class a0 extends Ai{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Or(t,s.x,o.x,r.x),Or(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class c0 extends Ai{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Or(t,s.x,o.x,r.x),Or(t,s.y,o.y,r.y),Or(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class l0 extends Ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],u=s[r>s.length-2?s.length-1:r+1],h=s[r>s.length-3?s.length-1:r+2];return n.set(Md(a,c.x,l.x,u.x,h.x),Md(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new dt().fromArray(s))}return this}}var rh=Object.freeze({__proto__:null,ArcCurve:ex,CatmullRomCurve3:oa,CubicBezierCurve:o0,CubicBezierCurve3:lx,EllipseCurve:pf,LineCurve:r0,LineCurve3:gf,QuadraticBezierCurve:a0,QuadraticBezierCurve3:c0,SplineCurve:l0});class ux extends Ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new rh[s.type]().fromJSON(s))}return this}}class Dc extends ux{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new r0(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new a0(this.currentPoint.clone(),new dt(t,e),new dt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new o0(this.currentPoint.clone(),new dt(t,e),new dt(n,s),new dt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new l0(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,o,r,a,c),this}absellipse(t,e,n,s,o,r,a,c){const l=new pf(t,e,n,s,o,r,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $e extends we{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new z,u=new dt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const p=n+h/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),r.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(r[f]/t+1)/2,u.y=(r[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new Ht(r,3)),this.setAttribute("normal",new Ht(a,3)),this.setAttribute("uv",new Ht(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class vt extends we{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const u=[],h=[],f=[],p=[];let g=0;const x=[],d=n/2;let m=0;S(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Ht(h,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(p,2));function S(){const _=new z,A=new z;let E=0;const b=(e-t)/n;for(let T=0;T<=o;T++){const y=[],M=T/o,R=M*(e-t)+t;for(let D=0;D<=s;D++){const L=D/s,N=L*c+a,k=Math.sin(N),B=Math.cos(N);A.x=R*k,A.y=-M*n+d,A.z=R*B,h.push(A.x,A.y,A.z),_.set(k,b,B).normalize(),f.push(_.x,_.y,_.z),p.push(L,1-M),y.push(g++)}x.push(y)}for(let T=0;T<s;T++)for(let y=0;y<o;y++){const M=x[y][T],R=x[y+1][T],D=x[y+1][T+1],L=x[y][T+1];(t>0||y!==0)&&(u.push(M,R,L),E+=3),(e>0||y!==o-1)&&(u.push(R,D,L),E+=3)}l.addGroup(m,E,0),m+=E}function v(_){const A=g,E=new dt,b=new z;let T=0;const y=_===!0?t:e,M=_===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,d*M,0),f.push(0,M,0),p.push(.5,.5),g++;const R=g;for(let D=0;D<=s;D++){const N=D/s*c+a,k=Math.cos(N),B=Math.sin(N);b.x=y*B,b.y=d*M,b.z=y*k,h.push(b.x,b.y,b.z),f.push(0,M,0),E.x=k*.5+.5,E.y=B*.5*M+.5,p.push(E.x,E.y),g++}for(let D=0;D<s;D++){const L=A+D,N=R+D;_===!0?u.push(N,N+1,L):u.push(N+1,N,L),T+=3}l.addGroup(m,T,_===!0?1:2),m+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ni extends vt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new ni(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ra extends we{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),l(n),u(),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(o.slice(),3)),this.setAttribute("uv",new Ht(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const v=new z,_=new z,A=new z;for(let E=0;E<e.length;E+=3)p(e[E+0],v),p(e[E+1],_),p(e[E+2],A),c(v,_,A,S)}function c(S,v,_,A){const E=A+1,b=[];for(let T=0;T<=E;T++){b[T]=[];const y=S.clone().lerp(_,T/E),M=v.clone().lerp(_,T/E),R=E-T;for(let D=0;D<=R;D++)D===0&&T===E?b[T][D]=y:b[T][D]=y.clone().lerp(M,D/R)}for(let T=0;T<E;T++)for(let y=0;y<2*(E-T)-1;y++){const M=Math.floor(y/2);y%2===0?(f(b[T][M+1]),f(b[T+1][M]),f(b[T][M])):(f(b[T][M+1]),f(b[T+1][M+1]),f(b[T+1][M]))}}function l(S){const v=new z;for(let _=0;_<o.length;_+=3)v.x=o[_+0],v.y=o[_+1],v.z=o[_+2],v.normalize().multiplyScalar(S),o[_+0]=v.x,o[_+1]=v.y,o[_+2]=v.z}function u(){const S=new z;for(let v=0;v<o.length;v+=3){S.x=o[v+0],S.y=o[v+1],S.z=o[v+2];const _=d(S)/2/Math.PI+.5,A=m(S)/Math.PI+.5;r.push(_,1-A)}g(),h()}function h(){for(let S=0;S<r.length;S+=6){const v=r[S+0],_=r[S+2],A=r[S+4],E=Math.max(v,_,A),b=Math.min(v,_,A);E>.9&&b<.1&&(v<.2&&(r[S+0]+=1),_<.2&&(r[S+2]+=1),A<.2&&(r[S+4]+=1))}}function f(S){o.push(S.x,S.y,S.z)}function p(S,v){const _=S*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function g(){const S=new z,v=new z,_=new z,A=new z,E=new dt,b=new dt,T=new dt;for(let y=0,M=0;y<o.length;y+=9,M+=6){S.set(o[y+0],o[y+1],o[y+2]),v.set(o[y+3],o[y+4],o[y+5]),_.set(o[y+6],o[y+7],o[y+8]),E.set(r[M+0],r[M+1]),b.set(r[M+2],r[M+3]),T.set(r[M+4],r[M+5]),A.copy(S).add(v).add(_).divideScalar(3);const R=d(A);x(E,M+0,S,R),x(b,M+2,v,R),x(T,M+4,_,R)}}function x(S,v,_,A){A<0&&S.x===1&&(r[v]=S.x-1),_.x===0&&_.z===0&&(r[v]=A/2/Math.PI+.5)}function d(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.vertices,t.indices,t.radius,t.details)}}class xf extends ra{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xf(t.radius,t.detail)}}class Uc extends Dc{constructor(t){super(t),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Dc().fromJSON(s))}return this}}const hx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=u0(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,u,h,f,p;if(n&&(o=gx(i,t,o,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],f=i[g+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);p=Math.max(l-a,u-c),p=p!==0?32767/p:0}return Yr(o,r,e,a,c,p,0),r}};function u0(i,t,e,n,s){let o,r;if(s===Ax(i,t,e,n)>0)for(o=t;o<e;o+=n)r=vd(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=vd(o,i[o],i[o+1],r);return r&&Qc(r,r.next)&&($r(r),r=r.next),r}function qs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Qc(e,e.next)||Ce(e.prev,e,e.next)===0)){if($r(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Yr(i,t,e,n,s,o,r){if(!i)return;!r&&o&&yx(i,n,s,o);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,o?dx(i,n,s,o):fx(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),$r(i),i=l.next,a=l.next;continue}if(i=l,i===a){r?r===1?(i=px(qs(i),t,e),Yr(i,t,e,n,s,o,2)):r===2&&mx(i,t,e,n,s,o):Yr(qs(i),t,e,n,s,o,1);break}}}function fx(i){const t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,u=s<o?s<r?s:r:o<r?o:r,h=a<c?a<l?a:l:c<l?c:l,f=s>o?s>r?s:r:o>r?o:r,p=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&Po(s,a,o,c,r,l,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function dx(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Ce(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,u=s.y,h=o.y,f=r.y,p=a<c?a<l?a:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,x=a>c?a>l?a:l:c>l?c:l,d=u>h?u>f?u:f:h>f?h:f,m=ah(p,g,t,e,n),S=ah(x,d,t,e,n);let v=i.prevZ,_=i.nextZ;for(;v&&v.z>=m&&_&&_.z<=S;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=d&&v!==s&&v!==r&&Po(a,u,c,h,l,f,v.x,v.y)&&Ce(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=p&&_.x<=x&&_.y>=g&&_.y<=d&&_!==s&&_!==r&&Po(a,u,c,h,l,f,_.x,_.y)&&Ce(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=m;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=d&&v!==s&&v!==r&&Po(a,u,c,h,l,f,v.x,v.y)&&Ce(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=S;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=d&&_!==s&&_!==r&&Po(a,u,c,h,l,f,_.x,_.y)&&Ce(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function px(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!Qc(s,o)&&h0(s,n,n.next,o)&&Zr(s,o)&&Zr(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),$r(n),$r(n.next),n=i=o),n=n.next}while(n!==i);return qs(n)}function mx(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&bx(r,a)){let c=f0(r,a);r=qs(r,r.next),c=qs(c,c.next),Yr(r,t,e,n,s,o,0),Yr(c,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function gx(i,t,e,n){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:i.length,l=u0(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Sx(l));for(s.sort(xx),o=0;o<s.length;o++)e=Mx(s[o],e);return e}function xx(i,t){return i.x-t.x}function Mx(i,t){const e=vx(i,t);if(!e)return t;const n=f0(e,i);return qs(n,n.next),qs(e,e.next)}function vx(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&Po(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(h=Math.abs(r-e.y)/(o-e.x),Zr(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&_x(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function _x(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function yx(i,t,e,n){let s=i;do s.z===0&&(s.z=ah(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wx(s)}function wx(i){let t,e,n,s,o,r,a,c,l=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,l*=2}while(r>1);return i}function ah(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Sx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Po(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function bx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Tx(i,t)&&(Zr(i,t)&&Zr(t,i)&&Ex(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||Qc(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Qc(i,t){return i.x===t.x&&i.y===t.y}function h0(i,t,e,n){const s=Ga(Ce(i,t,e)),o=Ga(Ce(i,t,n)),r=Ga(Ce(e,n,i)),a=Ga(Ce(e,n,t));return!!(s!==o&&r!==a||s===0&&Ba(i,e,t)||o===0&&Ba(i,n,t)||r===0&&Ba(e,i,n)||a===0&&Ba(e,t,n))}function Ba(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ga(i){return i>0?1:i<0?-1:0}function Tx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&h0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Zr(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function Ex(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function f0(i,t){const e=new ch(i.i,i.x,i.y),n=new ch(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function vd(i,t,e,n){const s=new ch(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $r(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ch(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ax(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Gr{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Gr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];_d(t),yd(n,t);let r=t.length;e.forEach(_d);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,yd(n,e[c]);const a=hx.triangulate(n,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function _d(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function yd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ks extends ra{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ks(t.radius,t.detail)}}class Mf extends ra{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Mf(t.radius,t.detail)}}class Me extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,p=[],g=[],x=[],d=[];for(let m=0;m<u;m++){const S=m*f-r;for(let v=0;v<l;v++){const _=v*h-o;g.push(_,-S,0),x.push(0,0,1),d.push(v/a),d.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<a;S++){const v=S+l*m,_=S+l*(m+1),A=S+1+l*(m+1),E=S+1+l*m;p.push(v,_,E),p.push(_,A,E)}this.setIndex(p),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.width,t.height,t.widthSegments,t.heightSegments)}}class ir extends we{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const f=(e-t)/s,p=new z,g=new dt;for(let x=0;x<=s;x++){for(let d=0;d<=n;d++){const m=o+d/n*r;p.x=h*Math.cos(m),p.y=h*Math.sin(m),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let x=0;x<s;x++){const d=x*(n+1);for(let m=0;m<n;m++){const S=m+d,v=S,_=S+n+1,A=S+n+2,E=S+1;a.push(v,_,E),a.push(_,A,E)}}this.setIndex(a),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class jr extends we{constructor(t=new Uc([new dt(0,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ht(s,3)),this.setAttribute("normal",new Ht(o,3)),this.setAttribute("uv",new Ht(r,2));function l(u){const h=s.length/3,f=u.extractPoints(e);let p=f.shape;const g=f.holes;Gr.isClockWise(p)===!1&&(p=p.reverse());for(let d=0,m=g.length;d<m;d++){const S=g[d];Gr.isClockWise(S)===!0&&(g[d]=S.reverse())}const x=Gr.triangulateShape(p,g);for(let d=0,m=g.length;d<m;d++){const S=g[d];p=p.concat(S)}for(let d=0,m=p.length;d<m;d++){const S=p[d];s.push(S.x,S.y,0),o.push(0,0,1),r.push(S.x,S.y)}for(let d=0,m=x.length;d<m;d++){const S=x[d],v=S[0]+h,_=S[1]+h,A=S[2]+h;n.push(v,_,A),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Rx(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new jr(n,t.curveSegments)}}function Rx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Q extends we{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const u=[],h=new z,f=new z,p=[],g=[],x=[],d=[];for(let m=0;m<=n;m++){const S=[],v=m/n;let _=0;m===0&&r===0?_=.5/e:m===n&&c===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){const E=A/e;h.x=-t*Math.cos(s+E*o)*Math.sin(r+v*a),h.y=t*Math.cos(r+v*a),h.z=t*Math.sin(s+E*o)*Math.sin(r+v*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),d.push(E+_,1-v),S.push(l++)}u.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){const v=u[m][S+1],_=u[m][S],A=u[m+1][S],E=u[m+1][S+1];(m!==0||r>0)&&p.push(v,_,E),(m!==n-1||c<Math.PI)&&p.push(_,A,E)}this.setIndex(p),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Q(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ae extends we{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],c=[],l=[],u=new z,h=new z,f=new z;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const x=g/s*o,d=p/n*Math.PI*2;h.x=(t+e*Math.cos(d))*Math.cos(x),h.y=(t+e*Math.cos(d))*Math.sin(x),h.z=e*Math.sin(d),a.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const x=(s+1)*p+g-1,d=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,S=(s+1)*p+g;r.push(x,d,S),r.push(d,m,S)}this.setIndex(r),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class An extends we{constructor(t=new c0(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new z,c=new z,l=new dt;let u=new z;const h=[],f=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Ht(h,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(p,2));function x(){for(let v=0;v<e;v++)d(v);d(o===!1?e:0),S(),m()}function d(v){u=t.getPointAt(v/e,u);const _=r.normals[v],A=r.binormals[v];for(let E=0;E<=s;E++){const b=E/s*Math.PI*2,T=Math.sin(b),y=-Math.cos(b);c.x=y*_.x+T*A.x,c.y=y*_.y+T*A.y,c.z=y*_.z+T*A.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=e;v++)for(let _=1;_<=s;_++){const A=(s+1)*(v-1)+(_-1),E=(s+1)*v+(_-1),b=(s+1)*v+_,T=(s+1)*(v-1)+_;g.push(A,E,T),g.push(E,b,T)}}function S(){for(let v=0;v<=e;v++)for(let _=0;_<=s;_++)l.x=v/e,l.y=_/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new An(new rh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class K extends ps{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hp,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cx extends ps{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Px extends ps{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class vf extends le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ix extends vf{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const zl=new fe,wd=new z,Sd=new z;class d0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hf,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wd.setFromMatrixPosition(t.matrixWorld),e.position.copy(wd),Sd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sd),e.updateMatrixWorld(),zl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const bd=new fe,br=new z,Fl=new z;class Lx extends d0{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),br.setFromMatrixPosition(t.matrixWorld),n.position.copy(br),Fl.copy(n.position),Fl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Fl),n.updateMatrixWorld(),s.makeTranslation(-br.x,-br.y,-br.z),bd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bd)}}class ur extends vf{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Lx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class _f extends Kp{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Dx extends d0{constructor(){super(new _f(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tl extends vf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.shadow=new Dx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ux extends zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class p0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Td(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Td();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Td(){return performance.now()}function Ed(i,t,e,n){const s=Nx(n);switch(e){case zp:return i*t;case Op:return i*t;case Bp:return i*t*2;case of:return i*t/s.components*s.byteLength;case rf:return i*t/s.components*s.byteLength;case Gp:return i*t*2/s.components*s.byteLength;case af:return i*t*2/s.components*s.byteLength;case Fp:return i*t*3/s.components*s.byteLength;case ui:return i*t*4/s.components*s.byteLength;case cf:return i*t*4/s.components*s.byteLength;case rc:case ac:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cc:case lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lu:case Uu:return Math.max(i,16)*Math.max(t,8)/4;case Iu:case Du:return Math.max(i,8)*Math.max(t,8)/2;case Nu:case zu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ou:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bu:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Gu:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ku:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Hu:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Vu:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wu:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xu:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qu:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yu:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Zu:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $u:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ju:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ju:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case uc:case Ku:case Qu:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kp:case th:return Math.ceil(i/4)*Math.ceil(t/4)*8;case eh:case nh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Nx(i){switch(i){case qi:case Dp:return{byteLength:1,components:1};case qr:case Up:case Hi:return{byteLength:2,components:1};case nf:case sf:return{byteLength:2,components:4};case Xs:case ef:case Si:return{byteLength:4,components:1};case Np:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function m0(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function zx(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}var Fx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ox=`#ifdef USE_ALPHAHASH
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
#endif`,Bx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vx=`#ifdef USE_AOMAP
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
#endif`,Wx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xx=`#ifdef USE_BATCHING
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
#endif`,qx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$x=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jx=`#ifdef USE_IRIDESCENCE
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
#endif`,Jx=`#ifdef USE_BUMPMAP
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
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rM=`#define PI 3.141592653589793
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
} // validated`,aM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cM=`vec3 transformedNormal = objectNormal;
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
#endif`,lM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dM="gl_FragColor = linearToOutputTexel( gl_FragColor );",pM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mM=`#ifdef USE_ENVMAP
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
#endif`,gM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
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
#endif`,_M=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bM=`#ifdef USE_GRADIENTMAP
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
}`,TM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,EM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RM=`uniform bool receiveShadow;
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
#endif`,CM=`#ifdef USE_ENVMAP
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
#endif`,PM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UM=`PhysicalMaterial material;
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
#endif`,NM=`struct PhysicalMaterial {
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
}`,zM=`
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
#endif`,FM=`#if defined( RE_IndirectDiffuse )
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
#endif`,OM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qM=`#if defined( USE_POINTS_UV )
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
#endif`,YM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$M=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KM=`#ifdef USE_MORPHTARGETS
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
#endif`,QM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ev=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ov=`#ifdef USE_NORMALMAP
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
#endif`,rv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,av=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_v=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yv=`float getShadowMask() {
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
}`,wv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sv=`#ifdef USE_SKINNING
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
#endif`,bv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tv=`#ifdef USE_SKINNING
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
#endif`,Ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Av=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pv=`#ifdef USE_TRANSMISSION
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
#endif`,Iv=`#ifdef USE_TRANSMISSION
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
#endif`,Lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fv=`uniform sampler2D t2D;
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
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`#include <common>
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
}`,Vv=`#if DEPTH_PACKING == 3200
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
}`,Wv=`#define DISTANCE
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
}`,Xv=`#define DISTANCE
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
}`,qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zv=`uniform float scale;
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
}`,$v=`uniform vec3 diffuse;
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
}`,jv=`#include <common>
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
}`,Jv=`uniform vec3 diffuse;
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
}`,Kv=`#define LAMBERT
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
}`,Qv=`#define LAMBERT
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
}`,t_=`#define MATCAP
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
}`,e_=`#define MATCAP
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
}`,n_=`#define NORMAL
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
}`,i_=`#define NORMAL
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
}`,s_=`#define PHONG
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
}`,o_=`#define PHONG
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
}`,r_=`#define STANDARD
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
}`,a_=`#define STANDARD
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
}`,c_=`#define TOON
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
}`,l_=`#define TOON
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
}`,h_=`uniform vec3 diffuse;
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
}`,f_=`#include <common>
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
}`,d_=`uniform vec3 color;
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
}`,p_=`uniform float rotation;
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
}`,m_=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Fx,alphahash_pars_fragment:Ox,alphamap_fragment:Bx,alphamap_pars_fragment:Gx,alphatest_fragment:kx,alphatest_pars_fragment:Hx,aomap_fragment:Vx,aomap_pars_fragment:Wx,batching_pars_vertex:Xx,batching_vertex:qx,begin_vertex:Yx,beginnormal_vertex:Zx,bsdfs:$x,iridescence_fragment:jx,bumpmap_pars_fragment:Jx,clipping_planes_fragment:Kx,clipping_planes_pars_fragment:Qx,clipping_planes_pars_vertex:tM,clipping_planes_vertex:eM,color_fragment:nM,color_pars_fragment:iM,color_pars_vertex:sM,color_vertex:oM,common:rM,cube_uv_reflection_fragment:aM,defaultnormal_vertex:cM,displacementmap_pars_vertex:lM,displacementmap_vertex:uM,emissivemap_fragment:hM,emissivemap_pars_fragment:fM,colorspace_fragment:dM,colorspace_pars_fragment:pM,envmap_fragment:mM,envmap_common_pars_fragment:gM,envmap_pars_fragment:xM,envmap_pars_vertex:MM,envmap_physical_pars_fragment:CM,envmap_vertex:vM,fog_vertex:_M,fog_pars_vertex:yM,fog_fragment:wM,fog_pars_fragment:SM,gradientmap_pars_fragment:bM,lightmap_pars_fragment:TM,lights_lambert_fragment:EM,lights_lambert_pars_fragment:AM,lights_pars_begin:RM,lights_toon_fragment:PM,lights_toon_pars_fragment:IM,lights_phong_fragment:LM,lights_phong_pars_fragment:DM,lights_physical_fragment:UM,lights_physical_pars_fragment:NM,lights_fragment_begin:zM,lights_fragment_maps:FM,lights_fragment_end:OM,logdepthbuf_fragment:BM,logdepthbuf_pars_fragment:GM,logdepthbuf_pars_vertex:kM,logdepthbuf_vertex:HM,map_fragment:VM,map_pars_fragment:WM,map_particle_fragment:XM,map_particle_pars_fragment:qM,metalnessmap_fragment:YM,metalnessmap_pars_fragment:ZM,morphinstance_vertex:$M,morphcolor_vertex:jM,morphnormal_vertex:JM,morphtarget_pars_vertex:KM,morphtarget_vertex:QM,normal_fragment_begin:tv,normal_fragment_maps:ev,normal_pars_fragment:nv,normal_pars_vertex:iv,normal_vertex:sv,normalmap_pars_fragment:ov,clearcoat_normal_fragment_begin:rv,clearcoat_normal_fragment_maps:av,clearcoat_pars_fragment:cv,iridescence_pars_fragment:lv,opaque_fragment:uv,packing:hv,premultiplied_alpha_fragment:fv,project_vertex:dv,dithering_fragment:pv,dithering_pars_fragment:mv,roughnessmap_fragment:gv,roughnessmap_pars_fragment:xv,shadowmap_pars_fragment:Mv,shadowmap_pars_vertex:vv,shadowmap_vertex:_v,shadowmask_pars_fragment:yv,skinbase_vertex:wv,skinning_pars_vertex:Sv,skinning_vertex:bv,skinnormal_vertex:Tv,specularmap_fragment:Ev,specularmap_pars_fragment:Av,tonemapping_fragment:Rv,tonemapping_pars_fragment:Cv,transmission_fragment:Pv,transmission_pars_fragment:Iv,uv_pars_fragment:Lv,uv_pars_vertex:Dv,uv_vertex:Uv,worldpos_vertex:Nv,background_vert:zv,background_frag:Fv,backgroundCube_vert:Ov,backgroundCube_frag:Bv,cube_vert:Gv,cube_frag:kv,depth_vert:Hv,depth_frag:Vv,distanceRGBA_vert:Wv,distanceRGBA_frag:Xv,equirect_vert:qv,equirect_frag:Yv,linedashed_vert:Zv,linedashed_frag:$v,meshbasic_vert:jv,meshbasic_frag:Jv,meshlambert_vert:Kv,meshlambert_frag:Qv,meshmatcap_vert:t_,meshmatcap_frag:e_,meshnormal_vert:n_,meshnormal_frag:i_,meshphong_vert:s_,meshphong_frag:o_,meshphysical_vert:r_,meshphysical_frag:a_,meshtoon_vert:c_,meshtoon_frag:l_,points_vert:u_,points_frag:h_,shadow_vert:f_,shadow_frag:d_,sprite_vert:p_,sprite_frag:m_},gt={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},xi={basic:{uniforms:ln([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:ln([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new ot(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:ln([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:ln([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:ln([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new ot(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:ln([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:ln([gt.points,gt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:ln([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:ln([gt.common,gt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:ln([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:ln([gt.sprite,gt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:ln([gt.common,gt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:ln([gt.lights,gt.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};xi.physical={uniforms:ln([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const ka={r:0,b:0,g:0},ys=new Ti,g_=new fe;function x_(i,t,e,n,s,o,r){const a=new ot(0);let c=o===!0?0:1,l,u,h=null,f=0,p=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_)),_}function x(v){let _=!1;const A=g(v);A===null?m(a,c):A&&A.isColor&&(m(A,1),_=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(v,_){const A=g(_);A&&(A.isCubeTexture||A.mapping===Kc)?(u===void 0&&(u=new I(new ia(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:nr(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ys.copy(_.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(g_.makeRotationFromEuler(ys)),u.material.toneMapped=re.getTransfer(A.colorSpace)!==pe,(h!==A||f!==A.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,p=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new I(new Me(2,2),new Rn({name:"BackgroundMaterial",uniforms:nr(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=re.getTransfer(A.colorSpace)!==pe,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=A,f=A.version,p=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,_){v.getRGB(ka,Jp(i)),n.buffers.color.setClear(ka.r,ka.g,ka.b,_,r)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),c=_,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(a,c)},render:x,addToRenderList:d,dispose:S}}function M_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let o=s,r=!1;function a(M,R,D,L,N){let k=!1;const B=h(L,D,R);o!==B&&(o=B,l(o.object)),k=p(M,L,D,N),k&&g(M,L,D,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(k||r)&&(r=!1,_(M,R,D,L),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,R,D){const L=D.wireframe===!0;let N=n[M.id];N===void 0&&(N={},n[M.id]=N);let k=N[R.id];k===void 0&&(k={},N[R.id]=k);let B=k[L];return B===void 0&&(B=f(c()),k[L]=B),B}function f(M){const R=[],D=[],L=[];for(let N=0;N<e;N++)R[N]=0,D[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:L,object:M,attributes:{},index:null}}function p(M,R,D,L){const N=o.attributes,k=R.attributes;let B=0;const Y=D.getAttributes();for(const W in Y)if(Y[W].location>=0){const ft=N[W];let mt=k[W];if(mt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor)),ft===void 0||ft.attribute!==mt||mt&&ft.data!==mt.data)return!0;B++}return o.attributesNum!==B||o.index!==L}function g(M,R,D,L){const N={},k=R.attributes;let B=0;const Y=D.getAttributes();for(const W in Y)if(Y[W].location>=0){let ft=k[W];ft===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor));const mt={};mt.attribute=ft,ft&&ft.data&&(mt.data=ft.data),N[W]=mt,B++}o.attributes=N,o.attributesNum=B,o.index=L}function x(){const M=o.newAttributes;for(let R=0,D=M.length;R<D;R++)M[R]=0}function d(M){m(M,0)}function m(M,R){const D=o.newAttributes,L=o.enabledAttributes,N=o.attributeDivisors;D[M]=1,L[M]===0&&(i.enableVertexAttribArray(M),L[M]=1),N[M]!==R&&(i.vertexAttribDivisor(M,R),N[M]=R)}function S(){const M=o.newAttributes,R=o.enabledAttributes;for(let D=0,L=R.length;D<L;D++)R[D]!==M[D]&&(i.disableVertexAttribArray(D),R[D]=0)}function v(M,R,D,L,N,k,B){B===!0?i.vertexAttribIPointer(M,R,D,N,k):i.vertexAttribPointer(M,R,D,L,N,k)}function _(M,R,D,L){x();const N=L.attributes,k=D.getAttributes(),B=R.defaultAttributeValues;for(const Y in k){const W=k[Y];if(W.location>=0){let at=N[Y];if(at===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(at=M.instanceColor)),at!==void 0){const ft=at.normalized,mt=at.itemSize,Ct=t.get(at);if(Ct===void 0)continue;const Zt=Ct.buffer,et=Ct.type,ct=Ct.bytesPerElement,yt=et===i.INT||et===i.UNSIGNED_INT||at.gpuType===ef;if(at.isInterleavedBufferAttribute){const pt=at.data,zt=pt.stride,Ot=at.offset;if(pt.isInstancedInterleavedBuffer){for(let $t=0;$t<W.locationSize;$t++)m(W.location+$t,pt.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let $t=0;$t<W.locationSize;$t++)d(W.location+$t);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let $t=0;$t<W.locationSize;$t++)v(W.location+$t,mt/W.locationSize,et,ft,zt*ct,(Ot+mt/W.locationSize*$t)*ct,yt)}else{if(at.isInstancedBufferAttribute){for(let pt=0;pt<W.locationSize;pt++)m(W.location+pt,at.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let pt=0;pt<W.locationSize;pt++)d(W.location+pt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let pt=0;pt<W.locationSize;pt++)v(W.location+pt,mt/W.locationSize,et,ft,mt*ct,mt/W.locationSize*pt*ct,yt)}}else if(B!==void 0){const ft=B[Y];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(W.location,ft);break;case 3:i.vertexAttrib3fv(W.location,ft);break;case 4:i.vertexAttrib4fv(W.location,ft);break;default:i.vertexAttrib1fv(W.location,ft)}}}}S()}function A(){T();for(const M in n){const R=n[M];for(const D in R){const L=R[D];for(const N in L)u(L[N].object),delete L[N];delete R[D]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const D in R){const L=R[D];for(const N in L)u(L[N].object),delete L[N];delete R[D]}delete n[M.id]}function b(M){for(const R in n){const D=n[R];if(D[M.id]===void 0)continue;const L=D[M.id];for(const N in L)u(L[N].object),delete L[N];delete D[M.id]}}function T(){y(),r=!0,o!==s&&(o=s,l(o.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:d,disableUnusedAttributes:S}}function v_(i,t,e){let n;function s(l){n=l}function o(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function r(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function c(l,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)r(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function __(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(b){return!(b!==ui&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const T=b===Hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==qi&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Si&&!T)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:A,maxSamples:E}}function y_(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new Es,a=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,x=h.clipIntersection,d=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||o&&!d)o?u(null):l();else{const S=o?0:n,v=S*4;let _=m.clippingState||null;c.value=_,_=u(g,f,v,p);for(let A=0;A!==v;++A)_[A]=e[A];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,g){const x=h!==null?h.length:0;let d=null;if(x!==0){if(d=c.value,g!==!0||d===null){const m=p+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(d===null||d.length<m)&&(d=new Float32Array(m));for(let v=0,_=p;v!==x;++v,_+=4)r.copy(h[v]).applyMatrix4(S,a),r.normal.toArray(d,_),d[_+3]=r.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,d}}function w_(i){let t=new WeakMap;function e(r,a){return a===Ru?r.mapping=jo:a===Cu&&(r.mapping=Jo),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Ru||a===Cu)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new qg(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const Io=4,Ad=[.125,.215,.35,.446,.526,.582],Ns=20,Ol=new _f,Rd=new ot;let Bl=null,Gl=0,kl=0,Hl=!1;const As=(1+Math.sqrt(5))/2,xo=1/As,Cd=[new z(-As,xo,0),new z(As,xo,0),new z(-xo,0,As),new z(xo,0,As),new z(0,As,-xo),new z(0,As,xo),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Pd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Bl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bl,Gl,kl),this._renderer.xr.enabled=Hl,t.scissorTest=!1,Ha(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===jo||t.mapping===Jo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:Hi,format:ui,colorSpace:er,depthBuffer:!1},s=Id(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Id(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S_(o)),this._blurMaterial=b_(o,t,e)}return s}_compileMaterial(t){const e=new I(this._lodPlanes[0],t);this._renderer.compile(e,Ol)}_sceneToCubeUV(t,e,n,s){const a=new zn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Rd),u.toneMapping=hs,u.autoClear=!1;const p=new j({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new I(new ia,p);let x=!1;const d=t.background;d?d.isColor&&(p.color.copy(d),t.background=null,x=!0):(p.color.copy(Rd),x=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):S===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const v=this._cubeSize;Ha(s,S*v,m>2?v:0,v,v),u.setRenderTarget(s),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===jo||t.mapping===Jo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ld());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new I(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;Ha(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,Ol)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Cd[(s-o-1)%Cd.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new I(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Ns-1),x=o/g,d=isFinite(o)?1+Math.floor(u*x):Ns;d>Ns&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ns}`);const m=[];let S=0;for(let b=0;b<Ns;++b){const T=b/x,y=Math.exp(-T*T/2);m.push(y),b===0?S+=y:b<d&&(S+=2*y)}for(let b=0;b<m.length;b++)m[b]=m[b]/S;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=m,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const _=this._sizeLods[s],A=3*_*(s>v-Io?s-v+Io:0),E=4*(this._cubeSize-_);Ha(e,A,E,3*_,2*_),c.setRenderTarget(e),c.render(h,Ol)}}function S_(i){const t=[],e=[],n=[];let s=i;const o=i-Io+1+Ad.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>i-Io?c=Ad[r-i+Io-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,d=2,m=1,S=new Float32Array(x*g*p),v=new Float32Array(d*g*p),_=new Float32Array(m*g*p);for(let E=0;E<p;E++){const b=E%3*2/3-1,T=E>2?0:-1,y=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];S.set(y,x*g*E),v.set(f,d*g*E);const M=[E,E,E,E,E,E];_.set(M,m*g*E)}const A=new we;A.setAttribute("position",new Ue(S,x)),A.setAttribute("uv",new Ue(v,d)),A.setAttribute("faceIndex",new Ue(_,m)),t.push(A),s>Io&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Id(i,t,e){const n=new hi(i,t,e);return n.texture.mapping=Kc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ha(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function b_(i,t,e){const n=new Float32Array(Ns),s=new z(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yf(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Ld(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yf(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Dd(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function yf(){return`

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
	`}function T_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ru||c===Cu,u=c===jo||c===Jo;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Pd(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Pd(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function E_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&bo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function A_(i,t,e,n){const s={},o=new WeakMap;function r(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete s[f.id];const p=o.get(f);p&&(t.remove(p),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function l(h){const f=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const S=p.array;x=p.version;for(let v=0,_=S.length;v<_;v+=3){const A=S[v+0],E=S[v+1],b=S[v+2];f.push(A,E,E,b,b,A)}}else if(g!==void 0){const S=g.array;x=g.version;for(let v=0,_=S.length/3-1;v<_;v+=3){const A=v+0,E=v+1,b=v+2;f.push(A,E,E,b,b,A)}}else return;const d=new(Wp(f)?jp:$p)(f,1);d.version=x;const m=o.get(h);m&&t.remove(m),o.set(h,d)}function u(h){const f=o.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return o.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function R_(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function c(f,p){i.drawElements(n,p,o,f*r),e.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,o,f*r,g),e.update(p,n,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,f,0,g);let d=0;for(let m=0;m<g;m++)d+=p[m];e.update(d,n,1)}function h(f,p,g,x){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<f.length;m++)l(f[m]/r,p[m],x[m]);else{d.multiDrawElementsInstancedWEBGL(n,p,0,o,f,0,x,0,g);let m=0;for(let S=0;S<g;S++)m+=p[S]*x[S];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function C_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function P_(i,t,e){const n=new WeakMap,s=new ge;function o(r,a,c){const l=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let M=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),d===!0&&(_=3);let A=a.attributes.position.count*_,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const b=new Float32Array(A*E*4*h),T=new qp(b,A,E,h);T.type=Si,T.needsUpdate=!0;const y=_*4;for(let R=0;R<h;R++){const D=m[R],L=S[R],N=v[R],k=A*E*4*R;for(let B=0;B<D.count;B++){const Y=B*y;g===!0&&(s.fromBufferAttribute(D,B),b[k+Y+0]=s.x,b[k+Y+1]=s.y,b[k+Y+2]=s.z,b[k+Y+3]=0),x===!0&&(s.fromBufferAttribute(L,B),b[k+Y+4]=s.x,b[k+Y+5]=s.y,b[k+Y+6]=s.z,b[k+Y+7]=0),d===!0&&(s.fromBufferAttribute(N,B),b[k+Y+8]=s.x,b[k+Y+9]=s.y,b[k+Y+10]=s.z,b[k+Y+11]=N.itemSize===4?s.w:1)}}f={count:h,texture:T,size:new dt(A,E)},n.set(a,f),a.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let d=0;d<l.length;d++)g+=l[d];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function I_(i,t,e,n){let s=new WeakMap;function o(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}const g0=new nn,Ud=new s0(1,1),x0=new qp,M0=new Ig,v0=new Qp,Nd=[],zd=[],Fd=new Float32Array(16),Od=new Float32Array(9),Bd=new Float32Array(4);function hr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Nd[s];if(o===void 0&&(o=new Float32Array(s),Nd[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function el(i,t){let e=zd[t];e===void 0&&(e=new Int32Array(t),zd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function L_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function D_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function U_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function N_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function z_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(Be(e,n))return;Bd.set(n),i.uniformMatrix2fv(this.addr,!1,Bd),Ge(e,n)}}function F_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(Be(e,n))return;Od.set(n),i.uniformMatrix3fv(this.addr,!1,Od),Ge(e,n)}}function O_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(Be(e,n))return;Fd.set(n),i.uniformMatrix4fv(this.addr,!1,Fd),Ge(e,n)}}function B_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function G_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function k_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function H_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function V_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function W_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function X_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function q_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function Y_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Ud.compareFunction=Vp,o=Ud):o=g0,e.setTexture2D(t||o,s)}function Z_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||M0,s)}function $_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||v0,s)}function j_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||x0,s)}function J_(i){switch(i){case 5126:return L_;case 35664:return D_;case 35665:return U_;case 35666:return N_;case 35674:return z_;case 35675:return F_;case 35676:return O_;case 5124:case 35670:return B_;case 35667:case 35671:return G_;case 35668:case 35672:return k_;case 35669:case 35673:return H_;case 5125:return V_;case 36294:return W_;case 36295:return X_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return j_}}function K_(i,t){i.uniform1fv(this.addr,t)}function Q_(i,t){const e=hr(t,this.size,2);i.uniform2fv(this.addr,e)}function ty(i,t){const e=hr(t,this.size,3);i.uniform3fv(this.addr,e)}function ey(i,t){const e=hr(t,this.size,4);i.uniform4fv(this.addr,e)}function ny(i,t){const e=hr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function iy(i,t){const e=hr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sy(i,t){const e=hr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function oy(i,t){i.uniform1iv(this.addr,t)}function ry(i,t){i.uniform2iv(this.addr,t)}function ay(i,t){i.uniform3iv(this.addr,t)}function cy(i,t){i.uniform4iv(this.addr,t)}function ly(i,t){i.uniform1uiv(this.addr,t)}function uy(i,t){i.uniform2uiv(this.addr,t)}function hy(i,t){i.uniform3uiv(this.addr,t)}function fy(i,t){i.uniform4uiv(this.addr,t)}function dy(i,t,e){const n=this.cache,s=t.length,o=el(e,s);Be(n,o)||(i.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||g0,o[r])}function py(i,t,e){const n=this.cache,s=t.length,o=el(e,s);Be(n,o)||(i.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||M0,o[r])}function my(i,t,e){const n=this.cache,s=t.length,o=el(e,s);Be(n,o)||(i.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||v0,o[r])}function gy(i,t,e){const n=this.cache,s=t.length,o=el(e,s);Be(n,o)||(i.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||x0,o[r])}function xy(i){switch(i){case 5126:return K_;case 35664:return Q_;case 35665:return ty;case 35666:return ey;case 35674:return ny;case 35675:return iy;case 35676:return sy;case 5124:case 35670:return oy;case 35667:case 35671:return ry;case 35668:case 35672:return ay;case 35669:case 35673:return cy;case 5125:return ly;case 36294:return uy;case 36295:return hy;case 36296:return fy;case 35678:case 36198:case 36298:case 36306:case 35682:return dy;case 35679:case 36299:case 36307:return py;case 35680:case 36300:case 36308:case 36293:return my;case 36289:case 36303:case 36311:case 36292:return gy}}class My{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=J_(e.type)}}class vy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xy(e.type)}}class _y{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Vl=/(\w+)(\])?(\[|\.)?/g;function Gd(i,t){i.seq.push(t),i.map[t.id]=t}function yy(i,t,e){const n=i.name,s=n.length;for(Vl.lastIndex=0;;){const o=Vl.exec(n),r=Vl.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){Gd(e,l===void 0?new My(a,i,t):new vy(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new _y(a),Gd(e,h)),e=h}}}class hc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);yy(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function kd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const wy=37297;let Sy=0;function by(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Hd=new Wt;function Ty(i){re._getMatrix(Hd,re.workingColorSpace,i);const t=`mat3( ${Hd.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Ec:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Vd(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+by(i.getShaderSource(t),r)}else return s}function Ey(i,t){const e=Ty(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ay(i,t){let e;switch(t){case sg:e="Linear";break;case og:e="Reinhard";break;case rg:e="Cineon";break;case Ip:e="ACESFilmic";break;case cg:e="AgX";break;case lg:e="Neutral";break;case ag:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Va=new z;function Ry(){re.getLuminanceCoefficients(Va);const i=Va.x.toFixed(4),t=Va.y.toFixed(4),e=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function Py(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Iy(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Ir(i){return i!==""}function Wd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ly=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(i){return i.replace(Ly,Uy)}const Dy=new Map;function Uy(i,t){let e=qt[t];if(e===void 0){const n=Dy.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return lh(e)}const Ny=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qd(i){return i.replace(Ny,zy)}function zy(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Yd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Fy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rp?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ni&&(t="SHADOWMAP_TYPE_VSM"),t}function Oy(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case jo:case Jo:t="ENVMAP_TYPE_CUBE";break;case Kc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function By(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Jo:t="ENVMAP_MODE_REFRACTION";break}return t}function Gy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pp:t="ENVMAP_BLENDING_MULTIPLY";break;case ng:t="ENVMAP_BLENDING_MIX";break;case ig:t="ENVMAP_BLENDING_ADD";break}return t}function ky(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Hy(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=Fy(e),l=Oy(e),u=By(e),h=Gy(e),f=ky(e),p=Cy(e),g=Py(o),x=s.createProgram();let d,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ir).join(`
`),d.length>0&&(d+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ir).join(`
`),m.length>0&&(m+=`
`)):(d=[Yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),m=[Yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hs?"#define TONE_MAPPING":"",e.toneMapping!==hs?qt.tonemapping_pars_fragment:"",e.toneMapping!==hs?Ay("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Ey("linearToOutputTexel",e.outputColorSpace),Ry(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),r=lh(r),r=Wd(r,e),r=Xd(r,e),a=lh(a),a=Wd(a,e),a=Xd(a,e),r=qd(r),a=qd(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",e.glslVersion===Wf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=S+d+r,_=S+m+a,A=kd(s,s.VERTEX_SHADER,v),E=kd(s,s.FRAGMENT_SHADER,_);s.attachShader(x,A),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function b(R){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(x).trim(),L=s.getShaderInfoLog(A).trim(),N=s.getShaderInfoLog(E).trim();let k=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,E);else{const Y=Vd(s,A,"vertex"),W=Vd(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+Y+`
`+W)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(L===""||N==="")&&(B=!1);B&&(R.diagnostics={runnable:k,programLog:D,vertexShader:{log:L,prefix:d},fragmentShader:{log:N,prefix:m}})}s.deleteShader(A),s.deleteShader(E),T=new hc(s,x),y=Iy(s,x)}let T;this.getUniforms=function(){return T===void 0&&b(this),T};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,wy)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sy++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}let Vy=0;class Wy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Xy(t),e.set(t,n)),n}}class Xy{constructor(t){this.id=Vy++,this.code=t,this.usedTimes=0}}function qy(i,t,e,n,s,o,r){const a=new Yp,c=new Wy,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function d(y,M,R,D,L){const N=D.fog,k=L.geometry,B=y.isMeshStandardMaterial?D.environment:null,Y=(y.isMeshStandardMaterial?e:t).get(y.envMap||B),W=Y&&Y.mapping===Kc?Y.image.height:null,at=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ft=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,mt=ft!==void 0?ft.length:0;let Ct=0;k.morphAttributes.position!==void 0&&(Ct=1),k.morphAttributes.normal!==void 0&&(Ct=2),k.morphAttributes.color!==void 0&&(Ct=3);let Zt,et,ct,yt;if(at){const de=xi[at];Zt=de.vertexShader,et=de.fragmentShader}else Zt=y.vertexShader,et=y.fragmentShader,c.update(y),ct=c.getVertexShaderID(y),yt=c.getFragmentShaderID(y);const pt=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Ot=L.isInstancedMesh===!0,$t=L.isBatchedMesh===!0,Re=!!y.map,ee=!!y.matcap,Ne=!!Y,O=!!y.aoMap,Wn=!!y.lightMap,Kt=!!y.bumpMap,Qt=!!y.normalMap,Lt=!!y.displacementMap,Se=!!y.emissiveMap,It=!!y.metalnessMap,U=!!y.roughnessMap,C=y.anisotropy>0,q=y.clearcoat>0,it=y.dispersion>0,rt=y.iridescence>0,nt=y.sheen>0,Pt=y.transmission>0,_t=C&&!!y.anisotropyMap,Tt=q&&!!y.clearcoatMap,ne=q&&!!y.clearcoatNormalMap,ht=q&&!!y.clearcoatRoughnessMap,Et=rt&&!!y.iridescenceMap,Ft=rt&&!!y.iridescenceThicknessMap,Bt=nt&&!!y.sheenColorMap,At=nt&&!!y.sheenRoughnessMap,te=!!y.specularMap,Xt=!!y.specularColorMap,ve=!!y.specularIntensityMap,G=Pt&&!!y.transmissionMap,xt=Pt&&!!y.thicknessMap,tt=!!y.gradientMap,st=!!y.alphaMap,St=y.alphaTest>0,wt=!!y.alphaHash,Vt=!!y.extensions;let Pe=hs;y.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Pe=i.toneMapping);const je={shaderID:at,shaderType:y.type,shaderName:y.name,vertexShader:Zt,fragmentShader:et,defines:y.defines,customVertexShaderID:ct,customFragmentShaderID:yt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:$t,batchingColor:$t&&L._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&L.instanceColor!==null,instancingMorph:Ot&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:er,alphaToCoverage:!!y.alphaToCoverage,map:Re,matcap:ee,envMap:Ne,envMapMode:Ne&&Y.mapping,envMapCubeUVHeight:W,aoMap:O,lightMap:Wn,bumpMap:Kt,normalMap:Qt,displacementMap:f&&Lt,emissiveMap:Se,normalMapObjectSpace:Qt&&y.normalMapType===dg,normalMapTangentSpace:Qt&&y.normalMapType===Hp,metalnessMap:It,roughnessMap:U,anisotropy:C,anisotropyMap:_t,clearcoat:q,clearcoatMap:Tt,clearcoatNormalMap:ne,clearcoatRoughnessMap:ht,dispersion:it,iridescence:rt,iridescenceMap:Et,iridescenceThicknessMap:Ft,sheen:nt,sheenColorMap:Bt,sheenRoughnessMap:At,specularMap:te,specularColorMap:Xt,specularIntensityMap:ve,transmission:Pt,transmissionMap:G,thicknessMap:xt,gradientMap:tt,opaque:y.transparent===!1&&y.blending===Fo&&y.alphaToCoverage===!1,alphaMap:st,alphaTest:St,alphaHash:wt,combine:y.combine,mapUv:Re&&x(y.map.channel),aoMapUv:O&&x(y.aoMap.channel),lightMapUv:Wn&&x(y.lightMap.channel),bumpMapUv:Kt&&x(y.bumpMap.channel),normalMapUv:Qt&&x(y.normalMap.channel),displacementMapUv:Lt&&x(y.displacementMap.channel),emissiveMapUv:Se&&x(y.emissiveMap.channel),metalnessMapUv:It&&x(y.metalnessMap.channel),roughnessMapUv:U&&x(y.roughnessMap.channel),anisotropyMapUv:_t&&x(y.anisotropyMap.channel),clearcoatMapUv:Tt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ne&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:At&&x(y.sheenRoughnessMap.channel),specularMapUv:te&&x(y.specularMap.channel),specularColorMapUv:Xt&&x(y.specularColorMap.channel),specularIntensityMapUv:ve&&x(y.specularIntensityMap.channel),transmissionMapUv:G&&x(y.transmissionMap.channel),thicknessMapUv:xt&&x(y.thicknessMap.channel),alphaMapUv:st&&x(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Qt||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(Re||st),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:zt,skinning:L.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Ct,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Re&&y.map.isVideoTexture===!0&&re.getTransfer(y.map.colorSpace)===pe,decodeVideoTextureEmissive:Se&&y.emissiveMap.isVideoTexture===!0&&re.getTransfer(y.emissiveMap.colorSpace)===pe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ut,flipSided:y.side===Tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Vt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&y.extensions.multiDraw===!0||$t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function m(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)M.push(R),M.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(S(M,y),v(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function S(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function v(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){const M=g[y.type];let R;if(M){const D=xi[M];R=Cc.clone(D.uniforms)}else R=y.uniforms;return R}function A(y,M){let R;for(let D=0,L=u.length;D<L;D++){const N=u[D];if(N.cacheKey===M){R=N,++R.usedTimes;break}}return R===void 0&&(R=new Hy(i,M,y,o),u.push(R)),R}function E(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function b(y){c.remove(y)}function T(){c.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:_,acquireProgram:A,releaseProgram:E,releaseShaderCache:b,programs:u,dispose:T}}function Yy(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,c){i.get(r)[a]=c}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Zy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Zd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $d(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(h,f,p,g,x,d){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:d},i[t]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=x,m.group=d),t++,m}function a(h,f,p,g,x,d){const m=r(h,f,p,g,x,d);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):e.push(m)}function c(h,f,p,g,x,d){const m=r(h,f,p,g,x,d);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function l(h,f){e.length>1&&e.sort(h||Zy),n.length>1&&n.sort(f||Zd),s.length>1&&s.sort(f||Zd)}function u(){for(let h=t,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:u,sort:l}}function $y(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new $d,i.set(n,[r])):s>=o.length?(r=new $d,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function jy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new ot};break;case"SpotLight":e={position:new z,direction:new z,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":e={color:new ot,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function Jy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ky=0;function Qy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function t1(i){const t=new jy,e=Jy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const s=new z,o=new fe,r=new fe;function a(l){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,x=0,d=0,m=0,S=0,v=0,_=0,A=0,E=0,b=0;l.sort(Qy);for(let y=0,M=l.length;y<M;y++){const R=l[y],D=R.color,L=R.intensity,N=R.distance,k=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=D.r*L,h+=D.g*L,f+=D.b*L;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],L);b++}else if(R.isDirectionalLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,W=e.get(R);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=R.shadow.matrix,S++}n.directional[p]=B,p++}else if(R.isSpotLight){const B=t.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(D).multiplyScalar(L),B.distance=N,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[x]=B;const Y=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,Y.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[x]=Y.matrix,R.castShadow){const W=e.get(R);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=k,_++}x++}else if(R.isRectAreaLight){const B=t.get(R);B.color.copy(D).multiplyScalar(L),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[d]=B,d++}else if(R.isPointLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){const Y=R.shadow,W=e.get(R);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=R.shadow.matrix,v++}n.point[g]=B,g++}else if(R.isHemisphereLight){const B=t.get(R);B.skyColor.copy(R.color).multiplyScalar(L),B.groundColor.copy(R.groundColor).multiplyScalar(L),n.hemi[m]=B,m++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const T=n.hash;(T.directionalLength!==p||T.pointLength!==g||T.spotLength!==x||T.rectAreaLength!==d||T.hemiLength!==m||T.numDirectionalShadows!==S||T.numPointShadows!==v||T.numSpotShadows!==_||T.numSpotMaps!==A||T.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=d,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=b,T.directionalLength=p,T.pointLength=g,T.spotLength=x,T.rectAreaLength=d,T.hemiLength=m,T.numDirectionalShadows=S,T.numPointShadows=v,T.numSpotShadows=_,T.numSpotMaps=A,T.numLightProbes=b,n.version=Ky++)}function c(l,u){let h=0,f=0,p=0,g=0,x=0;const d=u.matrixWorldInverse;for(let m=0,S=l.length;m<S;m++){const v=l[m];if(v.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(d),h++}else if(v.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(d),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(d),p++}else if(v.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(d),r.identity(),o.copy(v.matrixWorld),o.premultiply(d),r.extractRotation(o),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(d),f++}else if(v.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(d),x++}}}return{setup:a,setupView:c,state:n}}function jd(i){const t=new t1(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function o(u){e.push(u)}function r(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function e1(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new jd(i),t.set(s,[a])):o>=r.length?(a=new jd(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const n1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i1=`uniform sampler2D shadow_pass;
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
}`;function s1(i,t,e){let n=new hf;const s=new dt,o=new dt,r=new ge,a=new Cx({depthPacking:fg}),c=new Px,l={},u=e.maxTextureSize,h={[ds]:Tn,[Tn]:ds,[Ut]:Ut},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:n1,fragmentShader:i1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new I(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rp;let m=this.type;this.render=function(E,b,T){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),D=i.state;D.setBlending(ki),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const L=m!==Ni&&this.type===Ni,N=m===Ni&&this.type!==Ni;for(let k=0,B=E.length;k<B;k++){const Y=E[k],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const at=W.getFrameExtents();if(s.multiply(at),o.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/at.x),s.x=o.x*at.x,W.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/at.y),s.y=o.y*at.y,W.mapSize.y=o.y)),W.map===null||L===!0||N===!0){const mt=this.type!==Ni?{minFilter:kn,magFilter:kn}:{};W.map!==null&&W.map.dispose(),W.map=new hi(s.x,s.y,mt),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ft=W.getViewportCount();for(let mt=0;mt<ft;mt++){const Ct=W.getViewport(mt);r.set(o.x*Ct.x,o.y*Ct.y,o.x*Ct.z,o.y*Ct.w),D.viewport(r),W.updateMatrices(Y,mt),n=W.getFrustum(),_(b,T,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Ni&&S(W,T),W.needsUpdate=!1}m=this.type,d.needsUpdate=!1,i.setRenderTarget(y,M,R)};function S(E,b){const T=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new hi(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,T,f,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,T,p,x,null)}function v(E,b,T,y){let M=null;const R=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)M=R;else if(M=T.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const D=M.uuid,L=b.uuid;let N=l[D];N===void 0&&(N={},l[D]=N);let k=N[L];k===void 0&&(k=M.clone(),N[L]=k,b.addEventListener("dispose",A)),M=k}if(M.visible=b.visible,M.wireframe=b.wireframe,y===Ni?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:h[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=i.properties.get(M);D.light=T}return M}function _(E,b,T,y,M){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Ni)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const L=t.update(E),N=E.material;if(Array.isArray(N)){const k=L.groups;for(let B=0,Y=k.length;B<Y;B++){const W=k[B],at=N[W.materialIndex];if(at&&at.visible){const ft=v(E,at,y,M);E.onBeforeShadow(i,E,b,T,L,ft,W),i.renderBufferDirect(T,null,L,ft,E,W),E.onAfterShadow(i,E,b,T,L,ft,W)}}}else if(N.visible){const k=v(E,N,y,M);E.onBeforeShadow(i,E,b,T,L,k,null),i.renderBufferDirect(T,null,L,k,E,null),E.onAfterShadow(i,E,b,T,L,k,null)}}const D=E.children;for(let L=0,N=D.length;L<N;L++)_(D[L],b,T,y,M)}function A(E){E.target.removeEventListener("dispose",A);for(const T in l){const y=l[T],M=E.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const o1={[yu]:wu,[Su]:Eu,[bu]:Au,[$o]:Tu,[wu]:yu,[Eu]:Su,[Au]:bu,[Tu]:$o};function r1(i,t){function e(){let G=!1;const xt=new ge;let tt=null;const st=new ge(0,0,0,0);return{setMask:function(St){tt!==St&&!G&&(i.colorMask(St,St,St,St),tt=St)},setLocked:function(St){G=St},setClear:function(St,wt,Vt,Pe,je){je===!0&&(St*=Pe,wt*=Pe,Vt*=Pe),xt.set(St,wt,Vt,Pe),st.equals(xt)===!1&&(i.clearColor(St,wt,Vt,Pe),st.copy(xt))},reset:function(){G=!1,tt=null,st.set(-1,0,0,0)}}}function n(){let G=!1,xt=!1,tt=null,st=null,St=null;return{setReversed:function(wt){if(xt!==wt){const Vt=t.get("EXT_clip_control");xt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const Pe=St;St=null,this.setClear(Pe)}xt=wt},getReversed:function(){return xt},setTest:function(wt){wt?pt(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(wt){tt!==wt&&!G&&(i.depthMask(wt),tt=wt)},setFunc:function(wt){if(xt&&(wt=o1[wt]),st!==wt){switch(wt){case yu:i.depthFunc(i.NEVER);break;case wu:i.depthFunc(i.ALWAYS);break;case Su:i.depthFunc(i.LESS);break;case $o:i.depthFunc(i.LEQUAL);break;case bu:i.depthFunc(i.EQUAL);break;case Tu:i.depthFunc(i.GEQUAL);break;case Eu:i.depthFunc(i.GREATER);break;case Au:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=wt}},setLocked:function(wt){G=wt},setClear:function(wt){St!==wt&&(xt&&(wt=1-wt),i.clearDepth(wt),St=wt)},reset:function(){G=!1,tt=null,st=null,St=null,xt=!1}}}function s(){let G=!1,xt=null,tt=null,st=null,St=null,wt=null,Vt=null,Pe=null,je=null;return{setTest:function(de){G||(de?pt(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(de){xt!==de&&!G&&(i.stencilMask(de),xt=de)},setFunc:function(de,si,Ri){(tt!==de||st!==si||St!==Ri)&&(i.stencilFunc(de,si,Ri),tt=de,st=si,St=Ri)},setOp:function(de,si,Ri){(wt!==de||Vt!==si||Pe!==Ri)&&(i.stencilOp(de,si,Ri),wt=de,Vt=si,Pe=Ri)},setLocked:function(de){G=de},setClear:function(de){je!==de&&(i.clearStencil(de),je=de)},reset:function(){G=!1,xt=null,tt=null,st=null,St=null,wt=null,Vt=null,Pe=null,je=null}}}const o=new e,r=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,x=!1,d=null,m=null,S=null,v=null,_=null,A=null,E=null,b=new ot(0,0,0),T=0,y=!1,M=null,R=null,D=null,L=null,N=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Y=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=Y>=2);let at=null,ft={};const mt=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),Zt=new ge().fromArray(mt),et=new ge().fromArray(Ct);function ct(G,xt,tt,st){const St=new Uint8Array(4),wt=i.createTexture();i.bindTexture(G,wt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<tt;Vt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(xt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return wt}const yt={};yt[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),pt(i.DEPTH_TEST),r.setFunc($o),Kt(!1),Qt(Gf),pt(i.CULL_FACE),O(ki);function pt(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function zt(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function Ot(G,xt){return h[G]!==xt?(i.bindFramebuffer(G,xt),h[G]=xt,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xt),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function $t(G,xt){let tt=p,st=!1;if(G){tt=f.get(xt),tt===void 0&&(tt=[],f.set(xt,tt));const St=G.textures;if(tt.length!==St.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,Vt=St.length;wt<Vt;wt++)tt[wt]=i.COLOR_ATTACHMENT0+wt;tt.length=St.length,st=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,st=!0);st&&i.drawBuffers(tt)}function Re(G){return g!==G?(i.useProgram(G),g=G,!0):!1}const ee={[Us]:i.FUNC_ADD,[Bm]:i.FUNC_SUBTRACT,[Gm]:i.FUNC_REVERSE_SUBTRACT};ee[km]=i.MIN,ee[Hm]=i.MAX;const Ne={[Vm]:i.ZERO,[Wm]:i.ONE,[Xm]:i.SRC_COLOR,[vu]:i.SRC_ALPHA,[Jm]:i.SRC_ALPHA_SATURATE,[$m]:i.DST_COLOR,[Ym]:i.DST_ALPHA,[qm]:i.ONE_MINUS_SRC_COLOR,[_u]:i.ONE_MINUS_SRC_ALPHA,[jm]:i.ONE_MINUS_DST_COLOR,[Zm]:i.ONE_MINUS_DST_ALPHA,[Km]:i.CONSTANT_COLOR,[Qm]:i.ONE_MINUS_CONSTANT_COLOR,[tg]:i.CONSTANT_ALPHA,[eg]:i.ONE_MINUS_CONSTANT_ALPHA};function O(G,xt,tt,st,St,wt,Vt,Pe,je,de){if(G===ki){x===!0&&(zt(i.BLEND),x=!1);return}if(x===!1&&(pt(i.BLEND),x=!0),G!==Om){if(G!==d||de!==y){if((m!==Us||_!==Us)&&(i.blendEquation(i.FUNC_ADD),m=Us,_=Us),de)switch(G){case Fo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ce:i.blendFunc(i.ONE,i.ONE);break;case kf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Fo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ce:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case kf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}S=null,v=null,A=null,E=null,b.set(0,0,0),T=0,d=G,y=de}return}St=St||xt,wt=wt||tt,Vt=Vt||st,(xt!==m||St!==_)&&(i.blendEquationSeparate(ee[xt],ee[St]),m=xt,_=St),(tt!==S||st!==v||wt!==A||Vt!==E)&&(i.blendFuncSeparate(Ne[tt],Ne[st],Ne[wt],Ne[Vt]),S=tt,v=st,A=wt,E=Vt),(Pe.equals(b)===!1||je!==T)&&(i.blendColor(Pe.r,Pe.g,Pe.b,je),b.copy(Pe),T=je),d=G,y=!1}function Wn(G,xt){G.side===Ut?zt(i.CULL_FACE):pt(i.CULL_FACE);let tt=G.side===Tn;xt&&(tt=!tt),Kt(tt),G.blending===Fo&&G.transparent===!1?O(ki):O(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),r.setFunc(G.depthFunc),r.setTest(G.depthTest),r.setMask(G.depthWrite),o.setMask(G.colorWrite);const st=G.stencilWrite;a.setTest(st),st&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Se(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(G){M!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),M=G)}function Qt(G){G!==zm?(pt(i.CULL_FACE),G!==R&&(G===Gf?i.cullFace(i.BACK):G===Fm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),R=G}function Lt(G){G!==D&&(B&&i.lineWidth(G),D=G)}function Se(G,xt,tt){G?(pt(i.POLYGON_OFFSET_FILL),(L!==xt||N!==tt)&&(i.polygonOffset(xt,tt),L=xt,N=tt)):zt(i.POLYGON_OFFSET_FILL)}function It(G){G?pt(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function U(G){G===void 0&&(G=i.TEXTURE0+k-1),at!==G&&(i.activeTexture(G),at=G)}function C(G,xt,tt){tt===void 0&&(at===null?tt=i.TEXTURE0+k-1:tt=at);let st=ft[tt];st===void 0&&(st={type:void 0,texture:void 0},ft[tt]=st),(st.type!==G||st.texture!==xt)&&(at!==tt&&(i.activeTexture(tt),at=tt),i.bindTexture(G,xt||yt[G]),st.type=G,st.texture=xt)}function q(){const G=ft[at];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function it(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ne(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Bt(G){Zt.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Zt.copy(G))}function At(G){et.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),et.copy(G))}function te(G,xt){let tt=l.get(xt);tt===void 0&&(tt=new WeakMap,l.set(xt,tt));let st=tt.get(G);st===void 0&&(st=i.getUniformBlockIndex(xt,G.name),tt.set(G,st))}function Xt(G,xt){const st=l.get(xt).get(G);c.get(xt)!==st&&(i.uniformBlockBinding(xt,st,G.__bindingPointIndex),c.set(xt,st))}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},at=null,ft={},h={},f=new WeakMap,p=[],g=null,x=!1,d=null,m=null,S=null,v=null,_=null,A=null,E=null,b=new ot(0,0,0),T=0,y=!1,M=null,R=null,D=null,L=null,N=null,Zt.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:pt,disable:zt,bindFramebuffer:Ot,drawBuffers:$t,useProgram:Re,setBlending:O,setMaterial:Wn,setFlipSided:Kt,setCullFace:Qt,setLineWidth:Lt,setPolygonOffset:Se,setScissorTest:It,activeTexture:U,bindTexture:C,unbindTexture:q,compressedTexImage2D:it,compressedTexImage3D:rt,texImage2D:Et,texImage3D:Ft,updateUBOMapping:te,uniformBlockBinding:Xt,texStorage2D:ne,texStorage3D:ht,texSubImage2D:nt,texSubImage3D:Pt,compressedTexSubImage2D:_t,compressedTexSubImage3D:Tt,scissor:Bt,viewport:At,reset:ve}}function a1(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,C){return p?new OffscreenCanvas(U,C):Rc("canvas")}function x(U,C,q){let it=1;const rt=It(U);if((rt.width>q||rt.height>q)&&(it=q/Math.max(rt.width,rt.height)),it<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const nt=Math.floor(it*rt.width),Pt=Math.floor(it*rt.height);h===void 0&&(h=g(nt,Pt));const _t=C?g(nt,Pt):h;return _t.width=nt,_t.height=Pt,_t.getContext("2d").drawImage(U,0,0,nt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+nt+"x"+Pt+")."),_t}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),U;return U}function d(U){return U.generateMipmaps}function m(U){i.generateMipmap(U)}function S(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(U,C,q,it,rt=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let nt=C;if(C===i.RED&&(q===i.FLOAT&&(nt=i.R32F),q===i.HALF_FLOAT&&(nt=i.R16F),q===i.UNSIGNED_BYTE&&(nt=i.R8)),C===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.R8UI),q===i.UNSIGNED_SHORT&&(nt=i.R16UI),q===i.UNSIGNED_INT&&(nt=i.R32UI),q===i.BYTE&&(nt=i.R8I),q===i.SHORT&&(nt=i.R16I),q===i.INT&&(nt=i.R32I)),C===i.RG&&(q===i.FLOAT&&(nt=i.RG32F),q===i.HALF_FLOAT&&(nt=i.RG16F),q===i.UNSIGNED_BYTE&&(nt=i.RG8)),C===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.RG8UI),q===i.UNSIGNED_SHORT&&(nt=i.RG16UI),q===i.UNSIGNED_INT&&(nt=i.RG32UI),q===i.BYTE&&(nt=i.RG8I),q===i.SHORT&&(nt=i.RG16I),q===i.INT&&(nt=i.RG32I)),C===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),q===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),q===i.UNSIGNED_INT&&(nt=i.RGB32UI),q===i.BYTE&&(nt=i.RGB8I),q===i.SHORT&&(nt=i.RGB16I),q===i.INT&&(nt=i.RGB32I)),C===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),q===i.UNSIGNED_INT&&(nt=i.RGBA32UI),q===i.BYTE&&(nt=i.RGBA8I),q===i.SHORT&&(nt=i.RGBA16I),q===i.INT&&(nt=i.RGBA32I)),C===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),C===i.RGBA){const Pt=rt?Ec:re.getTransfer(it);q===i.FLOAT&&(nt=i.RGBA32F),q===i.HALF_FLOAT&&(nt=i.RGBA16F),q===i.UNSIGNED_BYTE&&(nt=Pt===pe?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function _(U,C){let q;return U?C===null||C===Xs||C===Qo?q=i.DEPTH24_STENCIL8:C===Si?q=i.DEPTH32F_STENCIL8:C===qr&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Xs||C===Qo?q=i.DEPTH_COMPONENT24:C===Si?q=i.DEPTH_COMPONENT32F:C===qr&&(q=i.DEPTH_COMPONENT16),q}function A(U,C){return d(U)===!0||U.isFramebufferTexture&&U.minFilter!==kn&&U.minFilter!==wi?Math.log2(Math.max(C.width,C.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?C.mipmaps.length:1}function E(U){const C=U.target;C.removeEventListener("dispose",E),T(C),C.isVideoTexture&&u.delete(C)}function b(U){const C=U.target;C.removeEventListener("dispose",b),M(C)}function T(U){const C=n.get(U);if(C.__webglInit===void 0)return;const q=U.source,it=f.get(q);if(it){const rt=it[C.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&y(U),Object.keys(it).length===0&&f.delete(q)}n.remove(U)}function y(U){const C=n.get(U);i.deleteTexture(C.__webglTexture);const q=U.source,it=f.get(q);delete it[C.__cacheKey],r.memory.textures--}function M(U){const C=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(C.__webglFramebuffer[it]))for(let rt=0;rt<C.__webglFramebuffer[it].length;rt++)i.deleteFramebuffer(C.__webglFramebuffer[it][rt]);else i.deleteFramebuffer(C.__webglFramebuffer[it]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[it])}else{if(Array.isArray(C.__webglFramebuffer))for(let it=0;it<C.__webglFramebuffer.length;it++)i.deleteFramebuffer(C.__webglFramebuffer[it]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let it=0;it<C.__webglColorRenderbuffer.length;it++)C.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[it]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const q=U.textures;for(let it=0,rt=q.length;it<rt;it++){const nt=n.get(q[it]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),r.memory.textures--),n.remove(q[it])}n.remove(U)}let R=0;function D(){R=0}function L(){const U=R;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),R+=1,U}function N(U){const C=[];return C.push(U.wrapS),C.push(U.wrapT),C.push(U.wrapR||0),C.push(U.magFilter),C.push(U.minFilter),C.push(U.anisotropy),C.push(U.internalFormat),C.push(U.format),C.push(U.type),C.push(U.generateMipmaps),C.push(U.premultiplyAlpha),C.push(U.flipY),C.push(U.unpackAlignment),C.push(U.colorSpace),C.join()}function k(U,C){const q=n.get(U);if(U.isVideoTexture&&Lt(U),U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){const it=U.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(q,U,C);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+C)}function B(U,C){const q=n.get(U);if(U.version>0&&q.__version!==U.version){et(q,U,C);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+C)}function Y(U,C){const q=n.get(U);if(U.version>0&&q.__version!==U.version){et(q,U,C);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+C)}function W(U,C){const q=n.get(U);if(U.version>0&&q.__version!==U.version){ct(q,U,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+C)}const at={[Ko]:i.REPEAT,[zs]:i.CLAMP_TO_EDGE,[Pu]:i.MIRRORED_REPEAT},ft={[kn]:i.NEAREST,[ug]:i.NEAREST_MIPMAP_NEAREST,[fa]:i.NEAREST_MIPMAP_LINEAR,[wi]:i.LINEAR,[cl]:i.LINEAR_MIPMAP_NEAREST,[Fs]:i.LINEAR_MIPMAP_LINEAR},mt={[pg]:i.NEVER,[_g]:i.ALWAYS,[mg]:i.LESS,[Vp]:i.LEQUAL,[gg]:i.EQUAL,[vg]:i.GEQUAL,[xg]:i.GREATER,[Mg]:i.NOTEQUAL};function Ct(U,C){if(C.type===Si&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===wi||C.magFilter===cl||C.magFilter===fa||C.magFilter===Fs||C.minFilter===wi||C.minFilter===cl||C.minFilter===fa||C.minFilter===Fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,at[C.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,at[C.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,at[C.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,ft[C.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,ft[C.minFilter]),C.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,mt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===kn||C.minFilter!==fa&&C.minFilter!==Fs||C.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Zt(U,C){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,C.addEventListener("dispose",E));const it=C.source;let rt=f.get(it);rt===void 0&&(rt={},f.set(it,rt));const nt=N(C);if(nt!==U.__cacheKey){rt[nt]===void 0&&(rt[nt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,q=!0),rt[nt].usedTimes++;const Pt=rt[U.__cacheKey];Pt!==void 0&&(rt[U.__cacheKey].usedTimes--,Pt.usedTimes===0&&y(C)),U.__cacheKey=nt,U.__webglTexture=rt[nt].texture}return q}function et(U,C,q){let it=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(it=i.TEXTURE_3D);const rt=Zt(U,C),nt=C.source;e.bindTexture(it,U.__webglTexture,i.TEXTURE0+q);const Pt=n.get(nt);if(nt.version!==Pt.__version||rt===!0){e.activeTexture(i.TEXTURE0+q);const _t=re.getPrimaries(re.workingColorSpace),Tt=C.colorSpace===as?null:re.getPrimaries(C.colorSpace),ne=C.colorSpace===as||_t===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ht=x(C.image,!1,s.maxTextureSize);ht=Se(C,ht);const Et=o.convert(C.format,C.colorSpace),Ft=o.convert(C.type);let Bt=v(C.internalFormat,Et,Ft,C.colorSpace,C.isVideoTexture);Ct(it,C);let At;const te=C.mipmaps,Xt=C.isVideoTexture!==!0,ve=Pt.__version===void 0||rt===!0,G=nt.dataReady,xt=A(C,ht);if(C.isDepthTexture)Bt=_(C.format===tr,C.type),ve&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Bt,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Bt,ht.width,ht.height,0,Et,Ft,null));else if(C.isDataTexture)if(te.length>0){Xt&&ve&&e.texStorage2D(i.TEXTURE_2D,xt,Bt,te[0].width,te[0].height);for(let tt=0,st=te.length;tt<st;tt++)At=te[tt],Xt?G&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,At.width,At.height,Et,Ft,At.data):e.texImage2D(i.TEXTURE_2D,tt,Bt,At.width,At.height,0,Et,Ft,At.data);C.generateMipmaps=!1}else Xt?(ve&&e.texStorage2D(i.TEXTURE_2D,xt,Bt,ht.width,ht.height),G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht.width,ht.height,Et,Ft,ht.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,ht.width,ht.height,0,Et,Ft,ht.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Xt&&ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Bt,te[0].width,te[0].height,ht.depth);for(let tt=0,st=te.length;tt<st;tt++)if(At=te[tt],C.format!==ui)if(Et!==null)if(Xt){if(G)if(C.layerUpdates.size>0){const St=Ed(At.width,At.height,C.format,C.type);for(const wt of C.layerUpdates){const Vt=At.data.subarray(wt*St/At.data.BYTES_PER_ELEMENT,(wt+1)*St/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,wt,At.width,At.height,1,Et,Vt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,At.width,At.height,ht.depth,Et,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,Bt,At.width,At.height,ht.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,At.width,At.height,ht.depth,Et,Ft,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,Bt,At.width,At.height,ht.depth,0,Et,Ft,At.data)}else{Xt&&ve&&e.texStorage2D(i.TEXTURE_2D,xt,Bt,te[0].width,te[0].height);for(let tt=0,st=te.length;tt<st;tt++)At=te[tt],C.format!==ui?Et!==null?Xt?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,Bt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?G&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,At.width,At.height,Et,Ft,At.data):e.texImage2D(i.TEXTURE_2D,tt,Bt,At.width,At.height,0,Et,Ft,At.data)}else if(C.isDataArrayTexture)if(Xt){if(ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Bt,ht.width,ht.height,ht.depth),G)if(C.layerUpdates.size>0){const tt=Ed(ht.width,ht.height,C.format,C.type);for(const st of C.layerUpdates){const St=ht.data.subarray(st*tt/ht.data.BYTES_PER_ELEMENT,(st+1)*tt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,ht.width,ht.height,1,Et,Ft,St)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Et,Ft,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,ht.width,ht.height,ht.depth,0,Et,Ft,ht.data);else if(C.isData3DTexture)Xt?(ve&&e.texStorage3D(i.TEXTURE_3D,xt,Bt,ht.width,ht.height,ht.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Et,Ft,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,ht.width,ht.height,ht.depth,0,Et,Ft,ht.data);else if(C.isFramebufferTexture){if(ve)if(Xt)e.texStorage2D(i.TEXTURE_2D,xt,Bt,ht.width,ht.height);else{let tt=ht.width,st=ht.height;for(let St=0;St<xt;St++)e.texImage2D(i.TEXTURE_2D,St,Bt,tt,st,0,Et,Ft,null),tt>>=1,st>>=1}}else if(te.length>0){if(Xt&&ve){const tt=It(te[0]);e.texStorage2D(i.TEXTURE_2D,xt,Bt,tt.width,tt.height)}for(let tt=0,st=te.length;tt<st;tt++)At=te[tt],Xt?G&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Et,Ft,At):e.texImage2D(i.TEXTURE_2D,tt,Bt,Et,Ft,At);C.generateMipmaps=!1}else if(Xt){if(ve){const tt=It(ht);e.texStorage2D(i.TEXTURE_2D,xt,Bt,tt.width,tt.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Ft,ht)}else e.texImage2D(i.TEXTURE_2D,0,Bt,Et,Ft,ht);d(C)&&m(it),Pt.__version=nt.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function ct(U,C,q){if(C.image.length!==6)return;const it=Zt(U,C),rt=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+q);const nt=n.get(rt);if(rt.version!==nt.__version||it===!0){e.activeTexture(i.TEXTURE0+q);const Pt=re.getPrimaries(re.workingColorSpace),_t=C.colorSpace===as?null:re.getPrimaries(C.colorSpace),Tt=C.colorSpace===as||Pt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const ne=C.isCompressedTexture||C.image[0].isCompressedTexture,ht=C.image[0]&&C.image[0].isDataTexture,Et=[];for(let st=0;st<6;st++)!ne&&!ht?Et[st]=x(C.image[st],!0,s.maxCubemapSize):Et[st]=ht?C.image[st].image:C.image[st],Et[st]=Se(C,Et[st]);const Ft=Et[0],Bt=o.convert(C.format,C.colorSpace),At=o.convert(C.type),te=v(C.internalFormat,Bt,At,C.colorSpace),Xt=C.isVideoTexture!==!0,ve=nt.__version===void 0||it===!0,G=rt.dataReady;let xt=A(C,Ft);Ct(i.TEXTURE_CUBE_MAP,C);let tt;if(ne){Xt&&ve&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,te,Ft.width,Ft.height);for(let st=0;st<6;st++){tt=Et[st].mipmaps;for(let St=0;St<tt.length;St++){const wt=tt[St];C.format!==ui?Bt!==null?Xt?G&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,0,0,wt.width,wt.height,Bt,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,te,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,0,0,wt.width,wt.height,Bt,At,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,te,wt.width,wt.height,0,Bt,At,wt.data)}}}else{if(tt=C.mipmaps,Xt&&ve){tt.length>0&&xt++;const st=It(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,te,st.width,st.height)}for(let st=0;st<6;st++)if(ht){Xt?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Et[st].width,Et[st].height,Bt,At,Et[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,te,Et[st].width,Et[st].height,0,Bt,At,Et[st].data);for(let St=0;St<tt.length;St++){const Vt=tt[St].image[st].image;Xt?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,0,0,Vt.width,Vt.height,Bt,At,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,te,Vt.width,Vt.height,0,Bt,At,Vt.data)}}else{Xt?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Bt,At,Et[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,te,Bt,At,Et[st]);for(let St=0;St<tt.length;St++){const wt=tt[St];Xt?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,0,0,Bt,At,wt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,te,Bt,At,wt.image[st])}}}d(C)&&m(i.TEXTURE_CUBE_MAP),nt.__version=rt.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function yt(U,C,q,it,rt,nt){const Pt=o.convert(q.format,q.colorSpace),_t=o.convert(q.type),Tt=v(q.internalFormat,Pt,_t,q.colorSpace),ne=n.get(C),ht=n.get(q);if(ht.__renderTarget=C,!ne.__hasExternalTextures){const Et=Math.max(1,C.width>>nt),Ft=Math.max(1,C.height>>nt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,nt,Tt,Et,Ft,C.depth,0,Pt,_t,null):e.texImage2D(rt,nt,Tt,Et,Ft,0,Pt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),Qt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,rt,ht.__webglTexture,0,Kt(C)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,rt,ht.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(U,C,q){if(i.bindRenderbuffer(i.RENDERBUFFER,U),C.depthBuffer){const it=C.depthTexture,rt=it&&it.isDepthTexture?it.type:null,nt=_(C.stencilBuffer,rt),Pt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=Kt(C);Qt(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,nt,C.width,C.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,nt,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,nt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,U)}else{const it=C.textures;for(let rt=0;rt<it.length;rt++){const nt=it[rt],Pt=o.convert(nt.format,nt.colorSpace),_t=o.convert(nt.type),Tt=v(nt.internalFormat,Pt,_t,nt.colorSpace),ne=Kt(C);q&&Qt(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,Tt,C.width,C.height):Qt(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,Tt,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(U,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=n.get(C.depthTexture);it.__renderTarget=C,(!it.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),k(C.depthTexture,0);const rt=it.__webglTexture,nt=Kt(C);if(C.depthTexture.format===Oo)Qt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(C.depthTexture.format===tr)Qt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Ot(U){const C=n.get(U),q=U.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==U.depthTexture){const it=U.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),it){const rt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,it.removeEventListener("dispose",rt)};it.addEventListener("dispose",rt),C.__depthDisposeCallback=rt}C.__boundDepthTexture=it}if(U.depthTexture&&!C.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");zt(C.__webglFramebuffer,U)}else if(q){C.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[it]),C.__webglDepthbuffer[it]===void 0)C.__webglDepthbuffer[it]=i.createRenderbuffer(),pt(C.__webglDepthbuffer[it],U,!1);else{const rt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=C.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),pt(C.__webglDepthbuffer,U,!1);else{const it=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(U,C,q){const it=n.get(U);C!==void 0&&yt(it.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Ot(U)}function Re(U){const C=U.texture,q=n.get(U),it=n.get(C);U.addEventListener("dispose",b);const rt=U.textures,nt=U.isWebGLCubeRenderTarget===!0,Pt=rt.length>1;if(Pt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=C.version,r.memory.textures++),nt){q.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(C.mipmaps&&C.mipmaps.length>0){q.__webglFramebuffer[_t]=[];for(let Tt=0;Tt<C.mipmaps.length;Tt++)q.__webglFramebuffer[_t][Tt]=i.createFramebuffer()}else q.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){q.__webglFramebuffer=[];for(let _t=0;_t<C.mipmaps.length;_t++)q.__webglFramebuffer[_t]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let _t=0,Tt=rt.length;_t<Tt;_t++){const ne=n.get(rt[_t]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),r.memory.textures++)}if(U.samples>0&&Qt(U)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let _t=0;_t<rt.length;_t++){const Tt=rt[_t];q.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[_t]);const ne=o.convert(Tt.format,Tt.colorSpace),ht=o.convert(Tt.type),Et=v(Tt.internalFormat,ne,ht,Tt.colorSpace,U.isXRRenderTarget===!0),Ft=Kt(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Et,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,q.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(q.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Ct(i.TEXTURE_CUBE_MAP,C);for(let _t=0;_t<6;_t++)if(C.mipmaps&&C.mipmaps.length>0)for(let Tt=0;Tt<C.mipmaps.length;Tt++)yt(q.__webglFramebuffer[_t][Tt],U,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt);else yt(q.__webglFramebuffer[_t],U,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);d(C)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let _t=0,Tt=rt.length;_t<Tt;_t++){const ne=rt[_t],ht=n.get(ne);e.bindTexture(i.TEXTURE_2D,ht.__webglTexture),Ct(i.TEXTURE_2D,ne),yt(q.__webglFramebuffer,U,ne,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),d(ne)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(_t=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,it.__webglTexture),Ct(_t,C),C.mipmaps&&C.mipmaps.length>0)for(let Tt=0;Tt<C.mipmaps.length;Tt++)yt(q.__webglFramebuffer[Tt],U,C,i.COLOR_ATTACHMENT0,_t,Tt);else yt(q.__webglFramebuffer,U,C,i.COLOR_ATTACHMENT0,_t,0);d(C)&&m(_t),e.unbindTexture()}U.depthBuffer&&Ot(U)}function ee(U){const C=U.textures;for(let q=0,it=C.length;q<it;q++){const rt=C[q];if(d(rt)){const nt=S(U),Pt=n.get(rt).__webglTexture;e.bindTexture(nt,Pt),m(nt),e.unbindTexture()}}}const Ne=[],O=[];function Wn(U){if(U.samples>0){if(Qt(U)===!1){const C=U.textures,q=U.width,it=U.height;let rt=i.COLOR_BUFFER_BIT;const nt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(U),_t=C.length>1;if(_t)for(let Tt=0;Tt<C.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Tt=0;Tt<C.length;Tt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Tt]);const ne=n.get(C[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,q,it,0,0,q,it,rt,i.NEAREST),c===!0&&(Ne.length=0,O.length=0,Ne.push(i.COLOR_ATTACHMENT0+Tt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ne.push(nt),O.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ne))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Tt=0;Tt<C.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Tt]);const ne=n.get(C[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,ne,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){const C=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function Kt(U){return Math.min(s.maxSamples,U.samples)}function Qt(U){const C=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Lt(U){const C=r.render.frame;u.get(U)!==C&&(u.set(U,C),U.update())}function Se(U,C){const q=U.colorSpace,it=U.format,rt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==er&&q!==as&&(re.getTransfer(q)===pe?(it!==ui||rt!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),C}function It(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=$t,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Wn,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Qt}function c1(i,t){function e(n,s=as){let o;const r=re.getTransfer(s);if(n===qi)return i.UNSIGNED_BYTE;if(n===nf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Np)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dp)return i.BYTE;if(n===Up)return i.SHORT;if(n===qr)return i.UNSIGNED_SHORT;if(n===ef)return i.INT;if(n===Xs)return i.UNSIGNED_INT;if(n===Si)return i.FLOAT;if(n===Hi)return i.HALF_FLOAT;if(n===zp)return i.ALPHA;if(n===Fp)return i.RGB;if(n===ui)return i.RGBA;if(n===Op)return i.LUMINANCE;if(n===Bp)return i.LUMINANCE_ALPHA;if(n===Oo)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===of)return i.RED;if(n===rf)return i.RED_INTEGER;if(n===Gp)return i.RG;if(n===af)return i.RG_INTEGER;if(n===cf)return i.RGBA_INTEGER;if(n===rc||n===ac||n===cc||n===lc)if(r===pe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===rc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ac)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===rc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ac)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Iu||n===Lu||n===Du||n===Uu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Iu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Du)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nu||n===zu||n===Fu)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Nu||n===zu)return r===pe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Fu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ou||n===Bu||n===Gu||n===ku||n===Hu||n===Vu||n===Wu||n===Xu||n===qu||n===Yu||n===Zu||n===$u||n===ju||n===Ju)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ou)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ku)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$u)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ju)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ju)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uc||n===Ku||n===Qu)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===uc)return r===pe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ku)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kp||n===th||n===eh||n===nh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===uc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===th)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const l1={type:"move"};class Wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const d=e.getJointPose(x,n),m=this._getHandJoint(l,x);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(l1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const u1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h1=`
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

}`;class f1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new nn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Rn({vertexShader:u1,fragmentShader:h1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new I(new Me(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class d1 extends lr{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null;const x=new f1,d=e.getContextAttributes();let m=null,S=null;const v=[],_=[],A=new dt;let E=null;const b=new zn;b.viewport=new ge;const T=new zn;T.viewport=new ge;const y=[b,T],M=new Ux;let R=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ct=v[et];return ct===void 0&&(ct=new Wl,v[et]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(et){let ct=v[et];return ct===void 0&&(ct=new Wl,v[et]=ct),ct.getGripSpace()},this.getHand=function(et){let ct=v[et];return ct===void 0&&(ct=new Wl,v[et]=ct),ct.getHandSpace()};function L(et){const ct=_.indexOf(et.inputSource);if(ct===-1)return;const yt=v[ct];yt!==void 0&&(yt.update(et.inputSource,et.frame,l||r),yt.dispatchEvent({type:et.type,data:et.inputSource}))}function N(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",k);for(let et=0;et<v.length;et++){const ct=_[et];ct!==null&&(_[et]=null,v[et].disconnect(ct))}R=null,D=null,x.reset(),t.setRenderTarget(m),p=null,f=null,h=null,s=null,S=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){o=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(et){l=et},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",N),s.addEventListener("inputsourceschange",k),d.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let yt=null,pt=null,zt=null;d.depth&&(zt=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=d.stencil?tr:Oo,pt=d.stencil?Qo:Xs);const Ot={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:o};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Ot),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new hi(f.textureWidth,f.textureHeight,{format:ui,type:qi,depthTexture:new s0(f.textureWidth,f.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const yt={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new hi(p.framebufferWidth,p.framebufferHeight,{format:ui,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function k(et){for(let ct=0;ct<et.removed.length;ct++){const yt=et.removed[ct],pt=_.indexOf(yt);pt>=0&&(_[pt]=null,v[pt].disconnect(yt))}for(let ct=0;ct<et.added.length;ct++){const yt=et.added[ct];let pt=_.indexOf(yt);if(pt===-1){for(let Ot=0;Ot<v.length;Ot++)if(Ot>=_.length){_.push(yt),pt=Ot;break}else if(_[Ot]===null){_[Ot]=yt,pt=Ot;break}if(pt===-1)break}const zt=v[pt];zt&&zt.connect(yt)}}const B=new z,Y=new z;function W(et,ct,yt){B.setFromMatrixPosition(ct.matrixWorld),Y.setFromMatrixPosition(yt.matrixWorld);const pt=B.distanceTo(Y),zt=ct.projectionMatrix.elements,Ot=yt.projectionMatrix.elements,$t=zt[14]/(zt[10]-1),Re=zt[14]/(zt[10]+1),ee=(zt[9]+1)/zt[5],Ne=(zt[9]-1)/zt[5],O=(zt[8]-1)/zt[0],Wn=(Ot[8]+1)/Ot[0],Kt=$t*O,Qt=$t*Wn,Lt=pt/(-O+Wn),Se=Lt*-O;if(ct.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Se),et.translateZ(Lt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),zt[10]===-1)et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const It=$t+Lt,U=Re+Lt,C=Kt-Se,q=Qt+(pt-Se),it=ee*Re/U*It,rt=Ne*Re/U*It;et.projectionMatrix.makePerspective(C,q,it,rt,It,U),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function at(et,ct){ct===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ct.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let ct=et.near,yt=et.far;x.texture!==null&&(x.depthNear>0&&(ct=x.depthNear),x.depthFar>0&&(yt=x.depthFar)),M.near=T.near=b.near=ct,M.far=T.far=b.far=yt,(R!==M.near||D!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,D=M.far),b.layers.mask=et.layers.mask|2,T.layers.mask=et.layers.mask|4,M.layers.mask=b.layers.mask|T.layers.mask;const pt=et.parent,zt=M.cameras;at(M,pt);for(let Ot=0;Ot<zt.length;Ot++)at(zt[Ot],pt);zt.length===2?W(M,b,T):M.projectionMatrix.copy(b.projectionMatrix),ft(et,M,pt)};function ft(et,ct,yt){yt===null?et.matrix.copy(ct.matrixWorld):(et.matrix.copy(yt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ct.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=sh*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(et){c=et,f!==null&&(f.fixedFoveation=et),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=et)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let mt=null;function Ct(et,ct){if(u=ct.getViewerPose(l||r),g=ct,u!==null){const yt=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let pt=!1;yt.length!==M.cameras.length&&(M.cameras.length=0,pt=!0);for(let Ot=0;Ot<yt.length;Ot++){const $t=yt[Ot];let Re=null;if(p!==null)Re=p.getViewport($t);else{const Ne=h.getViewSubImage(f,$t);Re=Ne.viewport,Ot===0&&(t.setRenderTargetTextures(S,Ne.colorTexture,f.ignoreDepthValues?void 0:Ne.depthStencilTexture),t.setRenderTarget(S))}let ee=y[Ot];ee===void 0&&(ee=new zn,ee.layers.enable(Ot),ee.viewport=new ge,y[Ot]=ee),ee.matrix.fromArray($t.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray($t.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Re.x,Re.y,Re.width,Re.height),Ot===0&&(M.matrix.copy(ee.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pt===!0&&M.cameras.push(ee)}const zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Ot=h.getDepthInformation(yt[0]);Ot&&Ot.isValid&&Ot.texture&&x.init(t,Ot,s.renderState)}}for(let yt=0;yt<v.length;yt++){const pt=_[yt],zt=v[yt];pt!==null&&zt!==void 0&&zt.update(pt,ct,l||r)}mt&&mt(et,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),g=null}const Zt=new m0;Zt.setAnimationLoop(Ct),this.setAnimationLoop=function(et){mt=et},this.dispose=function(){}}}const ws=new Ti,p1=new fe;function m1(i,t){function e(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function n(d,m){m.color.getRGB(d.fogColor.value,Jp(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function s(d,m,S,v,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(d,m):m.isMeshToonMaterial?(o(d,m),h(d,m)):m.isMeshPhongMaterial?(o(d,m),u(d,m)):m.isMeshStandardMaterial?(o(d,m),f(d,m),m.isMeshPhysicalMaterial&&p(d,m,_)):m.isMeshMatcapMaterial?(o(d,m),g(d,m)):m.isMeshDepthMaterial?o(d,m):m.isMeshDistanceMaterial?(o(d,m),x(d,m)):m.isMeshNormalMaterial?o(d,m):m.isLineBasicMaterial?(r(d,m),m.isLineDashedMaterial&&a(d,m)):m.isPointsMaterial?c(d,m,S,v):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,e(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===Tn&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,e(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===Tn&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,e(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,e(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const S=t.get(m),v=S.envMap,_=S.envMapRotation;v&&(d.envMap.value=v,ws.copy(_),ws.x*=-1,ws.y*=-1,ws.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),d.envMapRotation.value.setFromMatrix4(p1.makeRotationFromEuler(ws)),d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,d.aoMapTransform))}function r(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform))}function a(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function c(d,m,S,v){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*S,d.scale.value=v*.5,m.map&&(d.map.value=m.map,e(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function u(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function h(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,S){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Tn&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=S.texture,d.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,m){m.matcap&&(d.matcap.value=m.matcap)}function x(d,m){const S=t.get(m).light;d.referencePosition.value.setFromMatrixPosition(S.matrixWorld),d.nearDistance.value=S.shadow.camera.near,d.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function g1(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,v){const _=v.program;n.uniformBlockBinding(S,_)}function l(S,v){let _=s[S.id];_===void 0&&(g(S),_=u(S),s[S.id]=_,S.addEventListener("dispose",d));const A=v.program;n.updateUBOMapping(S,A);const E=t.render.frame;o[S.id]!==E&&(f(S),o[S.id]=E)}function u(S){const v=h();S.__bindingPointIndex=v;const _=i.createBuffer(),A=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function h(){for(let S=0;S<a;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const v=s[S.id],_=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,b=_.length;E<b;E++){const T=Array.isArray(_[E])?_[E]:[_[E]];for(let y=0,M=T.length;y<M;y++){const R=T[y];if(p(R,E,y,A)===!0){const D=R.__offset,L=Array.isArray(R.value)?R.value:[R.value];let N=0;for(let k=0;k<L.length;k++){const B=L[k],Y=x(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,D+N,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,N),N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,v,_,A){const E=S.value,b=v+"_"+_;if(A[b]===void 0)return typeof E=="number"||typeof E=="boolean"?A[b]=E:A[b]=E.clone(),!0;{const T=A[b];if(typeof E=="number"||typeof E=="boolean"){if(T!==E)return A[b]=E,!0}else if(T.equals(E)===!1)return T.copy(E),!0}return!1}function g(S){const v=S.uniforms;let _=0;const A=16;for(let b=0,T=v.length;b<T;b++){const y=Array.isArray(v[b])?v[b]:[v[b]];for(let M=0,R=y.length;M<R;M++){const D=y[M],L=Array.isArray(D.value)?D.value:[D.value];for(let N=0,k=L.length;N<k;N++){const B=L[N],Y=x(B),W=_%A,at=W%Y.boundary,ft=W+at;_+=at,ft!==0&&A-ft<Y.storage&&(_+=A-ft),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=Y.storage}}}const E=_%A;return E>0&&(_+=A-E),S.__size=_,S.__cache={},this}function x(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function d(S){const v=S.target;v.removeEventListener("dispose",d);const _=r.indexOf(v.__bindingPointIndex);r.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete o[v.id]}function m(){for(const S in s)i.deleteBuffer(s[S]);r=[],s={},o={}}return{bind:c,update:l,dispose:m}}class x1{constructor(t={}){const{canvas:e=wg(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),x=new Int32Array(4);let d=null,m=null;const S=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=hs,this.toneMappingExposure=1;const _=this;let A=!1,E=0,b=0,T=null,y=-1,M=null;const R=new ge,D=new ge;let L=null;const N=new ot(0);let k=0,B=e.width,Y=e.height,W=1,at=null,ft=null;const mt=new ge(0,0,B,Y),Ct=new ge(0,0,B,Y);let Zt=!1;const et=new hf;let ct=!1,yt=!1;this.transmissionResolutionScale=1;const pt=new fe,zt=new fe,Ot=new z,$t=new ge,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function Ne(){return T===null?W:1}let O=n;function Wn(P,H){return e.getContext(P,H)}try{const P={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tf}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",wt,!1),O===null){const H="webgl2";if(O=Wn(H,P),O===null)throw Wn(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Kt,Qt,Lt,Se,It,U,C,q,it,rt,nt,Pt,_t,Tt,ne,ht,Et,Ft,Bt,At,te,Xt,ve,G;function xt(){Kt=new E_(O),Kt.init(),Xt=new c1(O,Kt),Qt=new __(O,Kt,t,Xt),Lt=new r1(O,Kt),Qt.reverseDepthBuffer&&f&&Lt.buffers.depth.setReversed(!0),Se=new C_(O),It=new Yy,U=new a1(O,Kt,Lt,It,Qt,Xt,Se),C=new w_(_),q=new T_(_),it=new zx(O),ve=new M_(O,it),rt=new A_(O,it,Se,ve),nt=new I_(O,rt,it,Se),Bt=new P_(O,Qt,U),ht=new y_(It),Pt=new qy(_,C,q,Kt,Qt,ve,ht),_t=new m1(_,It),Tt=new $y,ne=new e1(Kt),Ft=new x_(_,C,q,Lt,nt,p,c),Et=new s1(_,nt,Qt),G=new g1(O,Se,Qt,Lt),At=new v_(O,Kt,Se),te=new R_(O,Kt,Se),Se.programs=Pt.programs,_.capabilities=Qt,_.extensions=Kt,_.properties=It,_.renderLists=Tt,_.shadowMap=Et,_.state=Lt,_.info=Se}xt();const tt=new d1(_,O);this.xr=tt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const P=Kt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Kt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(P){P!==void 0&&(W=P,this.setSize(B,Y,!1))},this.getSize=function(P){return P.set(B,Y)},this.setSize=function(P,H,$=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=P,Y=H,e.width=Math.floor(P*W),e.height=Math.floor(H*W),$===!0&&(e.style.width=P+"px",e.style.height=H+"px"),this.setViewport(0,0,P,H)},this.getDrawingBufferSize=function(P){return P.set(B*W,Y*W).floor()},this.setDrawingBufferSize=function(P,H,$){B=P,Y=H,W=$,e.width=Math.floor(P*$),e.height=Math.floor(H*$),this.setViewport(0,0,P,H)},this.getCurrentViewport=function(P){return P.copy(R)},this.getViewport=function(P){return P.copy(mt)},this.setViewport=function(P,H,$,J){P.isVector4?mt.set(P.x,P.y,P.z,P.w):mt.set(P,H,$,J),Lt.viewport(R.copy(mt).multiplyScalar(W).round())},this.getScissor=function(P){return P.copy(Ct)},this.setScissor=function(P,H,$,J){P.isVector4?Ct.set(P.x,P.y,P.z,P.w):Ct.set(P,H,$,J),Lt.scissor(D.copy(Ct).multiplyScalar(W).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(P){Lt.setScissorTest(Zt=P)},this.setOpaqueSort=function(P){at=P},this.setTransparentSort=function(P){ft=P},this.getClearColor=function(P){return P.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(P=!0,H=!0,$=!0){let J=0;if(P){let V=!1;if(T!==null){const lt=T.texture.format;V=lt===cf||lt===af||lt===rf}if(V){const lt=T.texture.type,Mt=lt===qi||lt===Xs||lt===qr||lt===Qo||lt===nf||lt===sf,bt=Ft.getClearColor(),Rt=Ft.getClearAlpha(),Gt=bt.r,kt=bt.g,Dt=bt.b;Mt?(g[0]=Gt,g[1]=kt,g[2]=Dt,g[3]=Rt,O.clearBufferuiv(O.COLOR,0,g)):(x[0]=Gt,x[1]=kt,x[2]=Dt,x[3]=Rt,O.clearBufferiv(O.COLOR,0,x))}else J|=O.COLOR_BUFFER_BIT}H&&(J|=O.DEPTH_BUFFER_BIT),$&&(J|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Ft.dispose(),Tt.dispose(),ne.dispose(),It.dispose(),C.dispose(),q.dispose(),nt.dispose(),ve.dispose(),G.dispose(),Pt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Df),tt.removeEventListener("sessionend",Uf),ms.stop()};function st(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=Se.autoReset,H=Et.enabled,$=Et.autoUpdate,J=Et.needsUpdate,V=Et.type;xt(),Se.autoReset=P,Et.enabled=H,Et.autoUpdate=$,Et.needsUpdate=J,Et.type=V}function wt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Vt(P){const H=P.target;H.removeEventListener("dispose",Vt),Pe(H)}function Pe(P){je(P),It.remove(P)}function je(P){const H=It.get(P).programs;H!==void 0&&(H.forEach(function($){Pt.releaseProgram($)}),P.isShaderMaterial&&Pt.releaseShaderCache(P))}this.renderBufferDirect=function(P,H,$,J,V,lt){H===null&&(H=Re);const Mt=V.isMesh&&V.matrixWorld.determinant()<0,bt=Pm(P,H,$,J,V);Lt.setMaterial(J,Mt);let Rt=$.index,Gt=1;if(J.wireframe===!0){if(Rt=rt.getWireframeAttribute($),Rt===void 0)return;Gt=2}const kt=$.drawRange,Dt=$.attributes.position;let ie=kt.start*Gt,ue=(kt.start+kt.count)*Gt;lt!==null&&(ie=Math.max(ie,lt.start*Gt),ue=Math.min(ue,(lt.start+lt.count)*Gt)),Rt!==null?(ie=Math.max(ie,0),ue=Math.min(ue,Rt.count)):Dt!=null&&(ie=Math.max(ie,0),ue=Math.min(ue,Dt.count));const Fe=ue-ie;if(Fe<0||Fe===1/0)return;ve.setup(V,J,bt,$,Rt);let Ie,oe=At;if(Rt!==null&&(Ie=it.get(Rt),oe=te,oe.setIndex(Ie)),V.isMesh)J.wireframe===!0?(Lt.setLineWidth(J.wireframeLinewidth*Ne()),oe.setMode(O.LINES)):oe.setMode(O.TRIANGLES);else if(V.isLine){let Nt=J.linewidth;Nt===void 0&&(Nt=1),Lt.setLineWidth(Nt*Ne()),V.isLineSegments?oe.setMode(O.LINES):V.isLineLoop?oe.setMode(O.LINE_LOOP):oe.setMode(O.LINE_STRIP)}else V.isPoints?oe.setMode(O.POINTS):V.isSprite&&oe.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)oe.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))oe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Nt=V._multiDrawStarts,Ye=V._multiDrawCounts,he=V._multiDrawCount,oi=Rt?it.get(Rt).bytesPerElement:1,Js=It.get(J).currentProgram.getUniforms();for(let Ln=0;Ln<he;Ln++)Js.setValue(O,"_gl_DrawID",Ln),oe.render(Nt[Ln]/oi,Ye[Ln])}else if(V.isInstancedMesh)oe.renderInstances(ie,Fe,V.count);else if($.isInstancedBufferGeometry){const Nt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ye=Math.min($.instanceCount,Nt);oe.renderInstances(ie,Fe,Ye)}else oe.render(ie,Fe)};function de(P,H,$){P.transparent===!0&&P.side===Ut&&P.forceSinglePass===!1?(P.side=Tn,P.needsUpdate=!0,ha(P,H,$),P.side=ds,P.needsUpdate=!0,ha(P,H,$),P.side=Ut):ha(P,H,$)}this.compile=function(P,H,$=null){$===null&&($=P),m=ne.get($),m.init(H),v.push(m),$.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),P!==$&&P.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();const J=new Set;return P.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const lt=V.material;if(lt)if(Array.isArray(lt))for(let Mt=0;Mt<lt.length;Mt++){const bt=lt[Mt];de(bt,$,V),J.add(bt)}else de(lt,$,V),J.add(lt)}),v.pop(),m=null,J},this.compileAsync=function(P,H,$=null){const J=this.compile(P,H,$);return new Promise(V=>{function lt(){if(J.forEach(function(Mt){It.get(Mt).currentProgram.isReady()&&J.delete(Mt)}),J.size===0){V(P);return}setTimeout(lt,10)}Kt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let si=null;function Ri(P){si&&si(P)}function Df(){ms.stop()}function Uf(){ms.start()}const ms=new m0;ms.setAnimationLoop(Ri),typeof self<"u"&&ms.setContext(self),this.setAnimationLoop=function(P){si=P,tt.setAnimationLoop(P),P===null?ms.stop():ms.start()},tt.addEventListener("sessionstart",Df),tt.addEventListener("sessionend",Uf),this.render=function(P,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(H),H=tt.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,H,T),m=ne.get(P,v.length),m.init(H),v.push(m),zt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),et.setFromProjectionMatrix(zt),yt=this.localClippingEnabled,ct=ht.init(this.clippingPlanes,yt),d=Tt.get(P,S.length),d.init(),S.push(d),tt.enabled===!0&&tt.isPresenting===!0){const lt=_.xr.getDepthSensingMesh();lt!==null&&rl(lt,H,-1/0,_.sortObjects)}rl(P,H,0,_.sortObjects),d.finish(),_.sortObjects===!0&&d.sort(at,ft),ee=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,ee&&Ft.addToRenderList(d,P),this.info.render.frame++,ct===!0&&ht.beginShadows();const $=m.state.shadowsArray;Et.render($,P,H),ct===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=d.opaque,V=d.transmissive;if(m.setupLights(),H.isArrayCamera){const lt=H.cameras;if(V.length>0)for(let Mt=0,bt=lt.length;Mt<bt;Mt++){const Rt=lt[Mt];zf(J,V,P,Rt)}ee&&Ft.render(P);for(let Mt=0,bt=lt.length;Mt<bt;Mt++){const Rt=lt[Mt];Nf(d,P,Rt,Rt.viewport)}}else V.length>0&&zf(J,V,P,H),ee&&Ft.render(P),Nf(d,P,H);T!==null&&b===0&&(U.updateMultisampleRenderTarget(T),U.updateRenderTargetMipmap(T)),P.isScene===!0&&P.onAfterRender(_,P,H),ve.resetDefaultState(),y=-1,M=null,v.pop(),v.length>0?(m=v[v.length-1],ct===!0&&ht.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?d=S[S.length-1]:d=null};function rl(P,H,$,J){if(P.visible===!1)return;if(P.layers.test(H.layers)){if(P.isGroup)$=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(H);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||et.intersectsSprite(P)){J&&$t.setFromMatrixPosition(P.matrixWorld).applyMatrix4(zt);const Mt=nt.update(P),bt=P.material;bt.visible&&d.push(P,Mt,bt,$,$t.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||et.intersectsObject(P))){const Mt=nt.update(P),bt=P.material;if(J&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),$t.copy(P.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),$t.copy(Mt.boundingSphere.center)),$t.applyMatrix4(P.matrixWorld).applyMatrix4(zt)),Array.isArray(bt)){const Rt=Mt.groups;for(let Gt=0,kt=Rt.length;Gt<kt;Gt++){const Dt=Rt[Gt],ie=bt[Dt.materialIndex];ie&&ie.visible&&d.push(P,Mt,ie,$,$t.z,Dt)}}else bt.visible&&d.push(P,Mt,bt,$,$t.z,null)}}const lt=P.children;for(let Mt=0,bt=lt.length;Mt<bt;Mt++)rl(lt[Mt],H,$,J)}function Nf(P,H,$,J){const V=P.opaque,lt=P.transmissive,Mt=P.transparent;m.setupLightsView($),ct===!0&&ht.setGlobalState(_.clippingPlanes,$),J&&Lt.viewport(R.copy(J)),V.length>0&&ua(V,H,$),lt.length>0&&ua(lt,H,$),Mt.length>0&&ua(Mt,H,$),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function zf(P,H,$,J){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new hi(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?Hi:qi,minFilter:Fs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const lt=m.state.transmissionRenderTarget[J.id],Mt=J.viewport||R;lt.setSize(Mt.z*_.transmissionResolutionScale,Mt.w*_.transmissionResolutionScale);const bt=_.getRenderTarget();_.setRenderTarget(lt),_.getClearColor(N),k=_.getClearAlpha(),k<1&&_.setClearColor(16777215,.5),_.clear(),ee&&Ft.render($);const Rt=_.toneMapping;_.toneMapping=hs;const Gt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),ct===!0&&ht.setGlobalState(_.clippingPlanes,J),ua(P,$,J),U.updateMultisampleRenderTarget(lt),U.updateRenderTargetMipmap(lt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Dt=0,ie=H.length;Dt<ie;Dt++){const ue=H[Dt],Fe=ue.object,Ie=ue.geometry,oe=ue.material,Nt=ue.group;if(oe.side===Ut&&Fe.layers.test(J.layers)){const Ye=oe.side;oe.side=Tn,oe.needsUpdate=!0,Ff(Fe,$,J,Ie,oe,Nt),oe.side=Ye,oe.needsUpdate=!0,kt=!0}}kt===!0&&(U.updateMultisampleRenderTarget(lt),U.updateRenderTargetMipmap(lt))}_.setRenderTarget(bt),_.setClearColor(N,k),Gt!==void 0&&(J.viewport=Gt),_.toneMapping=Rt}function ua(P,H,$){const J=H.isScene===!0?H.overrideMaterial:null;for(let V=0,lt=P.length;V<lt;V++){const Mt=P[V],bt=Mt.object,Rt=Mt.geometry,Gt=J===null?Mt.material:J,kt=Mt.group;bt.layers.test($.layers)&&Ff(bt,H,$,Rt,Gt,kt)}}function Ff(P,H,$,J,V,lt){P.onBeforeRender(_,H,$,J,V,lt),P.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),V.onBeforeRender(_,H,$,J,P,lt),V.transparent===!0&&V.side===Ut&&V.forceSinglePass===!1?(V.side=Tn,V.needsUpdate=!0,_.renderBufferDirect($,H,J,V,P,lt),V.side=ds,V.needsUpdate=!0,_.renderBufferDirect($,H,J,V,P,lt),V.side=Ut):_.renderBufferDirect($,H,J,V,P,lt),P.onAfterRender(_,H,$,J,V,lt)}function ha(P,H,$){H.isScene!==!0&&(H=Re);const J=It.get(P),V=m.state.lights,lt=m.state.shadowsArray,Mt=V.state.version,bt=Pt.getParameters(P,V.state,lt,H,$),Rt=Pt.getProgramCacheKey(bt);let Gt=J.programs;J.environment=P.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(P.isMeshStandardMaterial?q:C).get(P.envMap||J.environment),J.envMapRotation=J.environment!==null&&P.envMap===null?H.environmentRotation:P.envMapRotation,Gt===void 0&&(P.addEventListener("dispose",Vt),Gt=new Map,J.programs=Gt);let kt=Gt.get(Rt);if(kt!==void 0){if(J.currentProgram===kt&&J.lightsStateVersion===Mt)return Bf(P,bt),kt}else bt.uniforms=Pt.getUniforms(P),P.onBeforeCompile(bt,_),kt=Pt.acquireProgram(bt,Rt),Gt.set(Rt,kt),J.uniforms=bt.uniforms;const Dt=J.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Dt.clippingPlanes=ht.uniform),Bf(P,bt),J.needsLights=Lm(P),J.lightsStateVersion=Mt,J.needsLights&&(Dt.ambientLightColor.value=V.state.ambient,Dt.lightProbe.value=V.state.probe,Dt.directionalLights.value=V.state.directional,Dt.directionalLightShadows.value=V.state.directionalShadow,Dt.spotLights.value=V.state.spot,Dt.spotLightShadows.value=V.state.spotShadow,Dt.rectAreaLights.value=V.state.rectArea,Dt.ltc_1.value=V.state.rectAreaLTC1,Dt.ltc_2.value=V.state.rectAreaLTC2,Dt.pointLights.value=V.state.point,Dt.pointLightShadows.value=V.state.pointShadow,Dt.hemisphereLights.value=V.state.hemi,Dt.directionalShadowMap.value=V.state.directionalShadowMap,Dt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Dt.spotShadowMap.value=V.state.spotShadowMap,Dt.spotLightMatrix.value=V.state.spotLightMatrix,Dt.spotLightMap.value=V.state.spotLightMap,Dt.pointShadowMap.value=V.state.pointShadowMap,Dt.pointShadowMatrix.value=V.state.pointShadowMatrix),J.currentProgram=kt,J.uniformsList=null,kt}function Of(P){if(P.uniformsList===null){const H=P.currentProgram.getUniforms();P.uniformsList=hc.seqWithValue(H.seq,P.uniforms)}return P.uniformsList}function Bf(P,H){const $=It.get(P);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function Pm(P,H,$,J,V){H.isScene!==!0&&(H=Re),U.resetTextureUnits();const lt=H.fog,Mt=J.isMeshStandardMaterial?H.environment:null,bt=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:er,Rt=(J.isMeshStandardMaterial?q:C).get(J.envMap||Mt),Gt=J.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,kt=!!$.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Dt=!!$.morphAttributes.position,ie=!!$.morphAttributes.normal,ue=!!$.morphAttributes.color;let Fe=hs;J.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Fe=_.toneMapping);const Ie=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,oe=Ie!==void 0?Ie.length:0,Nt=It.get(J),Ye=m.state.lights;if(ct===!0&&(yt===!0||P!==M)){const rn=P===M&&J.id===y;ht.setState(J,P,rn)}let he=!1;J.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Ye.state.version||Nt.outputColorSpace!==bt||V.isBatchedMesh&&Nt.batching===!1||!V.isBatchedMesh&&Nt.batching===!0||V.isBatchedMesh&&Nt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Nt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Nt.instancing===!1||!V.isInstancedMesh&&Nt.instancing===!0||V.isSkinnedMesh&&Nt.skinning===!1||!V.isSkinnedMesh&&Nt.skinning===!0||V.isInstancedMesh&&Nt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Nt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Nt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Nt.instancingMorph===!1&&V.morphTexture!==null||Nt.envMap!==Rt||J.fog===!0&&Nt.fog!==lt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ht.numPlanes||Nt.numIntersection!==ht.numIntersection)||Nt.vertexAlphas!==Gt||Nt.vertexTangents!==kt||Nt.morphTargets!==Dt||Nt.morphNormals!==ie||Nt.morphColors!==ue||Nt.toneMapping!==Fe||Nt.morphTargetsCount!==oe)&&(he=!0):(he=!0,Nt.__version=J.version);let oi=Nt.currentProgram;he===!0&&(oi=ha(J,H,V));let Js=!1,Ln=!1,dr=!1;const Ee=oi.getUniforms(),Xn=Nt.uniforms;if(Lt.useProgram(oi.program)&&(Js=!0,Ln=!0,dr=!0),J.id!==y&&(y=J.id,Ln=!0),Js||M!==P){Lt.buffers.depth.getReversed()?(pt.copy(P.projectionMatrix),bg(pt),Tg(pt),Ee.setValue(O,"projectionMatrix",pt)):Ee.setValue(O,"projectionMatrix",P.projectionMatrix),Ee.setValue(O,"viewMatrix",P.matrixWorldInverse);const En=Ee.map.cameraPosition;En!==void 0&&En.setValue(O,Ot.setFromMatrixPosition(P.matrixWorld)),Qt.logarithmicDepthBuffer&&Ee.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ee.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,Ln=!0,dr=!0)}if(V.isSkinnedMesh){Ee.setOptional(O,V,"bindMatrix"),Ee.setOptional(O,V,"bindMatrixInverse");const rn=V.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Ee.setValue(O,"boneTexture",rn.boneTexture,U))}V.isBatchedMesh&&(Ee.setOptional(O,V,"batchingTexture"),Ee.setValue(O,"batchingTexture",V._matricesTexture,U),Ee.setOptional(O,V,"batchingIdTexture"),Ee.setValue(O,"batchingIdTexture",V._indirectTexture,U),Ee.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&Ee.setValue(O,"batchingColorTexture",V._colorsTexture,U));const qn=$.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&Bt.update(V,$,oi),(Ln||Nt.receiveShadow!==V.receiveShadow)&&(Nt.receiveShadow=V.receiveShadow,Ee.setValue(O,"receiveShadow",V.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Xn.envMap.value=Rt,Xn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&H.environment!==null&&(Xn.envMapIntensity.value=H.environmentIntensity),Ln&&(Ee.setValue(O,"toneMappingExposure",_.toneMappingExposure),Nt.needsLights&&Im(Xn,dr),lt&&J.fog===!0&&_t.refreshFogUniforms(Xn,lt),_t.refreshMaterialUniforms(Xn,J,W,Y,m.state.transmissionRenderTarget[P.id]),hc.upload(O,Of(Nt),Xn,U)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(hc.upload(O,Of(Nt),Xn,U),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ee.setValue(O,"center",V.center),Ee.setValue(O,"modelViewMatrix",V.modelViewMatrix),Ee.setValue(O,"normalMatrix",V.normalMatrix),Ee.setValue(O,"modelMatrix",V.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const rn=J.uniformsGroups;for(let En=0,al=rn.length;En<al;En++){const gs=rn[En];G.update(gs,oi),G.bind(gs,oi)}}return oi}function Im(P,H){P.ambientLightColor.needsUpdate=H,P.lightProbe.needsUpdate=H,P.directionalLights.needsUpdate=H,P.directionalLightShadows.needsUpdate=H,P.pointLights.needsUpdate=H,P.pointLightShadows.needsUpdate=H,P.spotLights.needsUpdate=H,P.spotLightShadows.needsUpdate=H,P.rectAreaLights.needsUpdate=H,P.hemisphereLights.needsUpdate=H}function Lm(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(P,H,$){It.get(P.texture).__webglTexture=H,It.get(P.depthTexture).__webglTexture=$;const J=It.get(P);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=$===void 0,J.__autoAllocateDepthBuffer||Kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,H){const $=It.get(P);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0};const Dm=O.createFramebuffer();this.setRenderTarget=function(P,H=0,$=0){T=P,E=H,b=$;let J=!0,V=null,lt=!1,Mt=!1;if(P){const Rt=It.get(P);if(Rt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(O.FRAMEBUFFER,null),J=!1;else if(Rt.__webglFramebuffer===void 0)U.setupRenderTarget(P);else if(Rt.__hasExternalTextures)U.rebindTextures(P,It.get(P.texture).__webglTexture,It.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Dt=P.depthTexture;if(Rt.__boundDepthTexture!==Dt){if(Dt!==null&&It.has(Dt)&&(P.width!==Dt.image.width||P.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(P)}}const Gt=P.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Mt=!0);const kt=It.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(kt[H])?V=kt[H][$]:V=kt[H],lt=!0):P.samples>0&&U.useMultisampledRTT(P)===!1?V=It.get(P).__webglMultisampledFramebuffer:Array.isArray(kt)?V=kt[$]:V=kt,R.copy(P.viewport),D.copy(P.scissor),L=P.scissorTest}else R.copy(mt).multiplyScalar(W).floor(),D.copy(Ct).multiplyScalar(W).floor(),L=Zt;if($!==0&&(V=Dm),Lt.bindFramebuffer(O.FRAMEBUFFER,V)&&J&&Lt.drawBuffers(P,V),Lt.viewport(R),Lt.scissor(D),Lt.setScissorTest(L),lt){const Rt=It.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,Rt.__webglTexture,$)}else if(Mt){const Rt=It.get(P.texture),Gt=H;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.__webglTexture,$,Gt)}else if(P!==null&&$!==0){const Rt=It.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Rt.__webglTexture,$)}y=-1},this.readRenderTargetPixels=function(P,H,$,J,V,lt,Mt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=It.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){Lt.bindFramebuffer(O.FRAMEBUFFER,bt);try{const Rt=P.texture,Gt=Rt.format,kt=Rt.type;if(!Qt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=P.width-J&&$>=0&&$<=P.height-V&&O.readPixels(H,$,J,V,Xt.convert(Gt),Xt.convert(kt),lt)}finally{const Rt=T!==null?It.get(T).__webglFramebuffer:null;Lt.bindFramebuffer(O.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(P,H,$,J,V,lt,Mt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=It.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){const Rt=P.texture,Gt=Rt.format,kt=Rt.type;if(!Qt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=P.width-J&&$>=0&&$<=P.height-V){Lt.bindFramebuffer(O.FRAMEBUFFER,bt);const Dt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Dt),O.bufferData(O.PIXEL_PACK_BUFFER,lt.byteLength,O.STREAM_READ),O.readPixels(H,$,J,V,Xt.convert(Gt),Xt.convert(kt),0);const ie=T!==null?It.get(T).__webglFramebuffer:null;Lt.bindFramebuffer(O.FRAMEBUFFER,ie);const ue=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Sg(O,ue,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Dt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,lt),O.deleteBuffer(Dt),O.deleteSync(ue),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,H=null,$=0){P.isTexture!==!0&&(bo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,P=arguments[1]);const J=Math.pow(2,-$),V=Math.floor(P.image.width*J),lt=Math.floor(P.image.height*J),Mt=H!==null?H.x:0,bt=H!==null?H.y:0;U.setTexture2D(P,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,Mt,bt,V,lt),Lt.unbindTexture()};const Um=O.createFramebuffer(),Nm=O.createFramebuffer();this.copyTextureToTexture=function(P,H,$=null,J=null,V=0,lt=null){P.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,P=arguments[1],H=arguments[2],lt=arguments[3]||0,$=null),lt===null&&(V!==0?(bo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),lt=V,V=0):lt=0);let Mt,bt,Rt,Gt,kt,Dt,ie,ue,Fe;const Ie=P.isCompressedTexture?P.mipmaps[lt]:P.image;if($!==null)Mt=$.max.x-$.min.x,bt=$.max.y-$.min.y,Rt=$.isBox3?$.max.z-$.min.z:1,Gt=$.min.x,kt=$.min.y,Dt=$.isBox3?$.min.z:0;else{const qn=Math.pow(2,-V);Mt=Math.floor(Ie.width*qn),bt=Math.floor(Ie.height*qn),P.isDataArrayTexture?Rt=Ie.depth:P.isData3DTexture?Rt=Math.floor(Ie.depth*qn):Rt=1,Gt=0,kt=0,Dt=0}J!==null?(ie=J.x,ue=J.y,Fe=J.z):(ie=0,ue=0,Fe=0);const oe=Xt.convert(H.format),Nt=Xt.convert(H.type);let Ye;H.isData3DTexture?(U.setTexture3D(H,0),Ye=O.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(U.setTexture2DArray(H,0),Ye=O.TEXTURE_2D_ARRAY):(U.setTexture2D(H,0),Ye=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);const he=O.getParameter(O.UNPACK_ROW_LENGTH),oi=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Js=O.getParameter(O.UNPACK_SKIP_PIXELS),Ln=O.getParameter(O.UNPACK_SKIP_ROWS),dr=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ie.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ie.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Gt),O.pixelStorei(O.UNPACK_SKIP_ROWS,kt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Dt);const Ee=P.isDataArrayTexture||P.isData3DTexture,Xn=H.isDataArrayTexture||H.isData3DTexture;if(P.isDepthTexture){const qn=It.get(P),rn=It.get(H),En=It.get(qn.__renderTarget),al=It.get(rn.__renderTarget);Lt.bindFramebuffer(O.READ_FRAMEBUFFER,En.__webglFramebuffer),Lt.bindFramebuffer(O.DRAW_FRAMEBUFFER,al.__webglFramebuffer);for(let gs=0;gs<Rt;gs++)Ee&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.get(P).__webglTexture,V,Dt+gs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.get(H).__webglTexture,lt,Fe+gs)),O.blitFramebuffer(Gt,kt,Mt,bt,ie,ue,Mt,bt,O.DEPTH_BUFFER_BIT,O.NEAREST);Lt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(V!==0||P.isRenderTargetTexture||It.has(P)){const qn=It.get(P),rn=It.get(H);Lt.bindFramebuffer(O.READ_FRAMEBUFFER,Um),Lt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Nm);for(let En=0;En<Rt;En++)Ee?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,qn.__webglTexture,V,Dt+En):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,qn.__webglTexture,V),Xn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,rn.__webglTexture,lt,Fe+En):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,rn.__webglTexture,lt),V!==0?O.blitFramebuffer(Gt,kt,Mt,bt,ie,ue,Mt,bt,O.COLOR_BUFFER_BIT,O.NEAREST):Xn?O.copyTexSubImage3D(Ye,lt,ie,ue,Fe+En,Gt,kt,Mt,bt):O.copyTexSubImage2D(Ye,lt,ie,ue,Gt,kt,Mt,bt);Lt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Xn?P.isDataTexture||P.isData3DTexture?O.texSubImage3D(Ye,lt,ie,ue,Fe,Mt,bt,Rt,oe,Nt,Ie.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(Ye,lt,ie,ue,Fe,Mt,bt,Rt,oe,Ie.data):O.texSubImage3D(Ye,lt,ie,ue,Fe,Mt,bt,Rt,oe,Nt,Ie):P.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,lt,ie,ue,Mt,bt,oe,Nt,Ie.data):P.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,lt,ie,ue,Ie.width,Ie.height,oe,Ie.data):O.texSubImage2D(O.TEXTURE_2D,lt,ie,ue,Mt,bt,oe,Nt,Ie);O.pixelStorei(O.UNPACK_ROW_LENGTH,he),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,oi),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Js),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ln),O.pixelStorei(O.UNPACK_SKIP_IMAGES,dr),lt===0&&H.generateMipmaps&&O.generateMipmap(Ye),Lt.unbindTexture()},this.copyTextureToTexture3D=function(P,H,$=null,J=null,V=0){return P.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,J=arguments[1]||null,P=arguments[2],H=arguments[3],V=arguments[4]||0),bo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,H,$,J,V)},this.initRenderTarget=function(P){It.get(P).__webglFramebuffer===void 0&&U.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?U.setTextureCube(P,0):P.isData3DTexture?U.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?U.setTexture2DArray(P,0):U.setTexture2D(P,0),Lt.unbindTexture()},this.resetState=function(){E=0,b=0,T=null,Lt.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}const M1=15,v1=6,_1=1.8,Nc=8,Jd=.85,Kd=.98,zc=.003,Jt=90,nl=1.7,Qd=500,y1=60,w1=18,S1=20,b1=28,T1=12,E1=20,A1=1200,R1=50,C1=45,P1=40,I1=60,_0=6,L1=25,D1=8,U1=25,N1=50,z1=10,F1=10,O1=10,B1=8,Hs=280,uh=2.5,G1=6,tp=1.5,To=5,ep=2.5,Mo=12,be=30,k1=5,H1=8,V1=2.2,F={fog:396308,ground:1720360,leaf:1722400,leafGlow:4521898,mushCap:8926190,mushGlow:13400063,mushStem:2756928,crystal:3407837,crystalCore:8978414,firefly:15662950,fireflyB:6750173,spore:12320665,ambient:2241365,moon:12307694,jellyBell:7833855,jellyGlow:11193599,jellyTent:6715340,puffBody:16768460,puffGlow:16755336,puffEye:2236962,puffCheek:16746649,deerBody:11202303,deerGlow:8969727,deerAntler:13434862,deerEye:1127236,mothWing:11206553,mothGlow:13434794,mothBody:5596723,mothSpot:16777215,grassTip:3385941,grassPurple:[1706530,2363962,4857960,11158766,13400063,16746717,2757952,6697898,11158783],grassBlue:[660514,858677,2114917,4500206,6741503,8974079,1387077,3368618,4500223],grassTeal:[662042,1059362,2121808,4517563,6750173,11206536,1720376,3385992,4521915],fern:1725744,fernGlow:3394662,flower:16742348,flowerGlow:16751069,flowerStem:1721376,reed:2774325,reedTip:4504422,orbGold:16763955,orbGlow:16772778,orbInner:16775389,laserPink:16737962,laserGlow:16746700,obeliskBlack:657938,obeliskPink:16729258,moatBlue:3377356,rainbow:[16724787,16746547,16772659,3407718,3377407,8926207],wispCore:11202303,wispGlow:14544639,wispTrail:8965375,dandStem:4482611,dandHead:16777198,dandSeed:16775389,dandSeedGlow:16777215,fairyMush:13404415,fairyGlow:14527231,fairyRing:11167470,bubbleIris:11197951,bubbleShine:16777215,bubblePop:13434862,starMote:16772829,pondWater:2254506,pondGlow:3377356,lilyPad:2263108,lilyFlower:16746700,lilyGlow:16755421,echoBloom:11206604,rockBase:2763314,rockMoss:1721378,rockLight:3816005,skyDeep:198160,thornOrb:16755268,thornOrbGlow:16764006,thornPetal:6689075,thornSpike:2759184,thornStem:1717024,helixStem:1714240,helixPod:6697983,helixPodGlow:8934911,helixRing:4465322,helixNode:5588172,snapBody:2271846,snapBodyGlow:4521864,snapTip:6750122,snapTipGlow:8978380,snapFrond:1730116},on=new x1({antialias:!0,powerPreference:"default"});on.setSize(window.innerWidth,window.innerHeight);on.setPixelRatio(Math.min(window.devicePixelRatio,1.5));on.shadowMap.enabled=!0;on.shadowMap.type=Cp;on.toneMapping=Ip;on.toneMappingExposure=2.8;on.outputColorSpace=bn;document.body.appendChild(on.domElement);const gn=new zn(65,window.innerWidth/window.innerHeight,.1,300),y0=new p0,ut=new Yg;ut.background=new ot(F.skyDeep);ut.fog=new uf(F.fog,.01);window.addEventListener("resize",()=>{gn.aspect=window.innerWidth/window.innerHeight,gn.updateProjectionMatrix(),on.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("visibilitychange",()=>{document.hidden||y0.getDelta()});const w0={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class aa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const W1=new _f(-1,1,1,-1,0,1);class X1 extends we{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}}const q1=new X1;class S0{constructor(t){this._mesh=new I(q1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,W1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Y1 extends aa{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Rn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Cc.clone(t.uniforms),this.material=new Rn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new S0(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class np extends aa{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class Z1 extends aa{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class $1{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new dt);this._width=n.width,this._height=n.height,e=new hi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Hi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Y1(w0),this.copyPass.material.blending=ki,this.clock=new p0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}np!==void 0&&(r instanceof np?n=!0:r instanceof Z1&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new dt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class j1 extends aa{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ot}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const J1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class sr extends aa{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new dt(t.x,t.y):new dt(256,256),this.clearColor=new ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new hi(o,r,{type:Hi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new hi(o,r,{type:Hi});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new hi(o,r,{type:Hi});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),o=Math.round(o/2),r=Math.round(r/2)}const a=J1;this.highPassUniforms=Cc.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new dt(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=w0;this.copyUniforms=Cc.clone(u.uniforms),this.blendMaterial=new Rn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ce,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ot,this.oldClearAlpha=1,this.basic=new j,this.fsQuad=new S0(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new dt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=sr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=sr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Rn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new dt(.5,.5)},direction:{value:new dt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}}sr.BlurDirectionX=new dt(1,0);sr.BlurDirectionY=new dt(0,1);let Vs=null,wf=!0;try{const i=new j1(ut,gn),t=new sr(new dt(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2)),.6,.4,.85);Vs=new $1(on),Vs.addPass(i),Vs.addPass(t)}catch(i){console.warn("Bloom unavailable, falling back to direct render:",i.message),wf=!1}window.addEventListener("resize",()=>{wf&&Vs&&Vs.setSize(window.innerWidth,window.innerHeight)});function ip(){wf&&Vs?Vs.render():on.render(ut,gn)}const Sf=new Ix(F.ambient,F.ground,.65);ut.add(Sf);const ii=new tl(F.moon,.85);ii.position.set(30,60,-20);ii.castShadow=!0;ii.shadow.camera.left=-90;ii.shadow.camera.right=90;ii.shadow.camera.top=90;ii.shadow.camera.bottom=-90;ii.shadow.camera.near=1;ii.shadow.camera.far=250;ii.shadow.mapSize.set(1024,1024);ii.shadow.bias=-.001;ut.add(ii);const bf=new tl(2241365,.3);bf.position.set(-40,45,25);ut.add(bf);const b0=new tl(3359829,.4);b0.position.set(-25,15,30);ut.add(b0);const T0=new ur(3368516,.7,100);T0.position.set(0,.5,0);ut.add(T0);const E0=new tl(4478327,.4);E0.position.set(-10,25,40);ut.add(E0);const Tf=new ur(6719624,.6,20);ut.add(Tf);const Rs=[];function K1(){for(let i=0;i<k1;i++){const t=new ur(F.crystal,0,16);ut.add(t),Rs.push(t)}}const Lr=new ur(F.orbGold,0,15);ut.add(Lr);const ze={};let Jr=0,Ws=0,il=!1,A0=!1,Ef=0,Af=0,Rf=!1,sl=!1,fr=!1,Fc=null,Ys=null,hh=0,fh=0,dh=null;function Q1(i){dh=i}function tw(i){A0=i}function ew(i){sl=i}function ca(){!A0&&dh&&dh()}window.addEventListener("keydown",i=>{ze[i.code]=!0,"Space ShiftLeft ShiftRight KeyW KeyA KeyS KeyD".split(" ").indexOf(i.code)>=0&&i.preventDefault(),ca()});window.addEventListener("keyup",i=>{ze[i.code]=!1});window.addEventListener("blur",()=>{for(const i in ze)ze[i]=!1;il=!1});on.domElement.addEventListener("mousedown",()=>{il=!0,ca()});window.addEventListener("mouseup",()=>{il=!1});window.addEventListener("mousemove",i=>{il&&(Jr-=i.movementX*zc,Ws-=i.movementY*zc,Ws=Math.max(-1,Math.min(1,Ws)))});const nw="ontouchstart"in window||navigator.maxTouchPoints>0,la=document.getElementById("joy-zone"),Oc=document.getElementById("joy-knob"),Cf=document.getElementById("btn-jump");nw&&(la.style.display="block",Cf.style.display="block",document.getElementById("controls").textContent="Stick: Move · Drag right: Look · JUMP");function R0(i,t){const e=la.getBoundingClientRect();let n=i-(e.left+e.width/2),s=t-(e.top+e.height/2);const o=Math.sqrt(n*n+s*s),r=52;o>r&&(n=n/o*r,s=s/o*r),Ef=n/r,Af=s/r,Oc.style.left=40+n+"px",Oc.style.top=40+s+"px"}la.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),ca();const t=i.changedTouches[0];Fc=t.identifier,Rf=!0,R0(t.clientX,t.clientY)},{passive:!1});la.addEventListener("touchmove",i=>{i.preventDefault(),i.stopPropagation();for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Fc&&R0(i.changedTouches[t].clientX,i.changedTouches[t].clientY)},{passive:!1});la.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation();for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Fc&&(Fc=null,Rf=!1,Ef=0,Af=0,Oc.style.left="40px",Oc.style.top="40px")},{passive:!1});Cf.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),ca(),sl=!0},{passive:!1});Cf.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation(),sl=!1},{passive:!1});on.domElement.addEventListener("touchstart",i=>{i.preventDefault(),ca();for(let t=0;t<i.changedTouches.length;t++){const e=i.changedTouches[t];e.clientX>window.innerWidth*.3&&Ys===null&&(Ys=e.identifier,hh=e.clientX,fh=e.clientY)}},{passive:!1});on.domElement.addEventListener("touchmove",i=>{i.preventDefault();for(let t=0;t<i.changedTouches.length;t++){const e=i.changedTouches[t];e.identifier===Ys&&(Jr-=(e.clientX-hh)*zc,Ws-=(e.clientY-fh)*zc,Ws=Math.max(-1,Math.min(1,Ws)),hh=e.clientX,fh=e.clientY)}},{passive:!1});on.domElement.addEventListener("touchend",i=>{for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Ys&&(Ys=null)},{passive:!1});on.domElement.addEventListener("touchcancel",i=>{for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Ys&&(Ys=null)},{passive:!1});function iw(){let i=0,t=0;ze.KeyW&&(t-=1),ze.KeyS&&(t+=1),ze.KeyA&&(i-=1),ze.KeyD&&(i+=1),Rf&&(i+=Ef,t+=Af);const e=Math.sqrt(i*i+t*t);e>1&&(i/=e,t/=e);const n=v1*(ze.ShiftLeft||ze.ShiftRight||fr?_1:1),s=Math.sin(Jr),o=Math.cos(Jr);return{x:(i*o+t*s)*n,z:(-i*s+t*o)*n}}const In={mushCap:new Q(.5,8,5),mushStem:new vt(.06,.1,.6,5),mushDot:new Q(.06,4,3),crystal:new vt(0,.35,1.8,6),crystalSm:new vt(0,.18,.9,5),fly:new Q(.06,4,3),spore:new Q(.04,3,3),dandSeed:new Q(.025,3,3),bubble:new Q(.15,8,6),starMote:new Q(.03,3,3),dustMote:new Q(.035,3,3)};let kr=42;function w(){return kr=kr*16807%2147483647,(kr&2147483647)/2147483647}function C0(){return kr}function ph(i){kr=i}function Wa(i,t){let e=i*374761393+t*668265263+1274126177|0;return e=(e^e>>13)*1274126177|0,(e&2147483647)/2147483647}function Lo(i){return i*i*(3-2*i)}function P0(i,t){const e=Math.floor(i),n=Math.floor(t),s=Lo(i-e),o=Lo(t-n),r=Wa(e,n),a=Wa(e+1,n),c=Wa(e,n+1),l=Wa(e+1,n+1);return r+(a-r)*s+(c-r)*o+(r-a-c+l)*s*o}function Xa(i,t,e){let n=0,s=.5,o=1;for(let r=0;r<e;r++)n+=P0(i*o,t*o)*s,s*=.5,o*=2;return n}const mh=[];function gh(i,t,e){mh.push({x:i,z:t,r:e})}function Yt(i,t){const e=Math.sqrt(i*i+t*t),n=1-Lo(Math.max(0,(e-Jt*.7)/(Jt*.3))),s=Lo(Math.min(1,e/10)),o=.012,r=Xa(i*o+200,t*o+300,3),a=Lo(Math.max(0,Math.min(1,(r-.15)*2))),c=.035,l=Xa(i*c,t*c,4),u=Xa(i*c*2.7+50,t*c*2.7+50,3),h=P0(i*.15,t*.15),p=Xa(i*c*.6-100,t*c*.6-100,3)*1.5,g=l*5*a,x=u*1.5*a,d=h*.2;let m=p+g+x+d;m*=n*s;for(let S=0;S<mh.length;S++){const v=mh[S],_=i-v.x,A=t-v.z,E=Math.sqrt(_*_+A*A);if(E<v.r*2.5){const b=Lo(Math.max(0,(E-v.r*.5)/(v.r*2)));m*=b}}return m}function sw(){const t=document.createElement("canvas");t.width=2048,t.height=2048;const e=t.getContext("2d"),n=Math.random;e.fillStyle="#22301e",e.fillRect(0,0,2048,2048);const s=[{col:"rgba(50,40,22,0.35)",n:14,r:120},{col:"rgba(60,50,25,0.30)",n:14,r:110},{col:"rgba(35,55,30,0.22)",n:10,r:100},{col:"rgba(55,35,18,0.28)",n:12,r:105},{col:"rgba(40,32,18,0.28)",n:10,r:90},{col:"rgba(80,55,25,0.28)",n:12,r:100},{col:"rgba(70,35,20,0.25)",n:10,r:95},{col:"rgba(85,70,35,0.22)",n:10,r:90},{col:"rgba(45,30,15,0.25)",n:8,r:85},{col:"rgba(65,50,30,0.20)",n:8,r:80}];for(const u of s)for(let h=0;h<u.n;h++){const f=n()*2048,p=n()*2048,g=u.r*(.5+n()*.8),x=e.createRadialGradient(f,p,0,f,p,g);x.addColorStop(0,u.col),x.addColorStop(.6,u.col.replace(/[\d.]+\)$/,parseFloat(u.col.match(/[\d.]+\)$/)[0])*.4+")")),x.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=x;for(let d=-1;d<=1;d++)for(let m=-1;m<=1;m++)e.beginPath(),e.arc(f+d*2048,p+m*2048,g,0,6.28),e.fill()}const o=[{n:80,r:25,colors:["rgba(45,35,18,0.22)","rgba(55,40,20,0.2)","rgba(28,22,12,0.22)","rgba(35,28,15,0.18)","rgba(55,35,15,0.2)","rgba(25,40,22,0.15)"]},{n:200,r:10,colors:["rgba(45,35,18,0.14)","rgba(55,42,22,0.12)","rgba(35,28,14,0.12)","rgba(38,28,14,0.1)","rgba(52,38,18,0.12)","rgba(25,38,22,0.08)"]},{n:500,r:4,colors:["rgba(40,30,15,0.1)","rgba(50,38,18,0.08)","rgba(30,25,12,0.08)","rgba(32,25,10,0.06)","rgba(45,32,12,0.08)","rgba(22,35,20,0.05)"]}];for(const u of o)for(let h=0;h<u.n;h++){e.fillStyle=u.colors[Math.floor(n()*u.colors.length)];const f=n()*2048,p=n()*2048;e.beginPath(),e.arc(f,p,u.r+n()*u.r*.6,0,6.28),e.fill()}const r=["rgba(60,200,100,0.06)","rgba(50,180,120,0.05)","rgba(80,160,200,0.04)","rgba(100,220,150,0.05)"];for(let u=0;u<25;u++){let h=n()*2048,f=n()*2048;const p=r[Math.floor(n()*r.length)];e.strokeStyle=p,e.lineWidth=1+n()*2,e.beginPath(),e.moveTo(h,f);let g=n()*6.28;const x=12+Math.floor(n()*16);for(let d=0;d<x;d++)g+=Math.sin(d*.6)*.5+(n()-.5)*.4,h+=Math.cos(g)*(6+n()*10),f+=Math.sin(g)*(6+n()*10),e.lineTo(h,f);if(e.stroke(),n()<.6){const d=e.createRadialGradient(h,f,0,h,f,6+n()*8);d.addColorStop(0,p.replace("0.0","0.1")),d.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=d,e.beginPath(),e.arc(h,f,6+n()*8,0,6.28),e.fill()}}e.lineWidth=1.2;for(let u=0;u<30;u++){e.strokeStyle=`rgba(20,12,5,${.15+n()*.12})`;let h=n()*2048,f=n()*2048,p=n()*6.28;e.beginPath(),e.moveTo(h,f);for(let g=0;g<10;g++)p+=Math.sin(g*.7)*.5+(n()-.5)*.35,h+=Math.cos(p)*(8+n()*14),f+=Math.sin(p)*(8+n()*14),e.lineTo(h,f);e.stroke()}const a=["rgba(55,32,12,0.3)","rgba(70,42,18,0.25)","rgba(40,55,22,0.22)","rgba(22,50,28,0.2)","rgba(60,45,20,0.25)","rgba(30,60,35,0.18)","rgba(50,25,8,0.22)","rgba(65,55,25,0.18)","rgba(75,50,20,0.28)","rgba(85,60,30,0.22)","rgba(45,25,10,0.25)","rgba(90,75,45,0.18)"];for(let u=0;u<3500;u++){e.fillStyle=a[Math.floor(n()*a.length)];const h=n()*2048,f=n()*2048,p=.8+n()*2.5;e.beginPath(),e.arc(h,f,p,0,6.28),e.fill()}for(let u=0;u<40;u++){const h=n()*2048,f=n()*2048,p=15+n()*35,g=e.createRadialGradient(h,f,0,h,f,p),x=n();x<.2?(g.addColorStop(0,"rgba(40,70,40,0.16)"),g.addColorStop(1,"rgba(22,40,22,0)")):x<.4?(g.addColorStop(0,"rgba(65,48,22,0.18)"),g.addColorStop(1,"rgba(35,25,12,0)")):x<.6?(g.addColorStop(0,"rgba(75,55,25,0.16)"),g.addColorStop(1,"rgba(45,30,12,0)")):x<.8?(g.addColorStop(0,"rgba(55,40,20,0.16)"),g.addColorStop(1,"rgba(30,22,10,0)")):(g.addColorStop(0,"rgba(65,35,20,0.14)"),g.addColorStop(1,"rgba(35,18,10,0)")),e.fillStyle=g,e.beginPath(),e.arc(h,f,p,0,6.28),e.fill()}for(let u=0;u<400;u++){const h=n()*2048,f=n()*2048,p=1.5+n()*3.5,g=Math.floor(28+n()*42);e.fillStyle=`rgba(${g},${g-4},${g-10},0.3)`,e.beginPath(),e.arc(h,f,p,0,6.28),e.fill()}e.lineWidth=.7;for(let u=0;u<80;u++){const h=n()*2048,f=n()*2048,p=4+n()*18,g=n()*6.28;e.strokeStyle=`rgba(22,12,5,${.15+n()*.1})`,e.beginPath(),e.moveTo(h,f),e.lineTo(h+Math.cos(g)*p,f+Math.sin(g)*p),e.stroke()}const c=["rgba(80,220,120,0.08)","rgba(60,200,160,0.07)","rgba(100,180,220,0.06)","rgba(120,100,200,0.05)","rgba(200,150,80,0.04)","rgba(60,180,180,0.06)"];for(let u=0;u<300;u++){const h=n()*2048,f=n()*2048,p=c[Math.floor(n()*c.length)];if(e.fillStyle=p,e.beginPath(),e.arc(h,f,1+n()*2,0,6.28),e.fill(),n()<.3){const g=e.createRadialGradient(h,f,0,h,f,4+n()*5);g.addColorStop(0,p),g.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=g,e.beginPath(),e.arc(h,f,4+n()*5,0,6.28),e.fill()}}for(let u=0;u<150;u++){const h=n()*2048,f=n()*2048;e.fillStyle=`rgba(120,180,130,${.04+n()*.04})`,e.beginPath(),e.arc(h,f,.5+n()*1.2,0,6.28),e.fill()}const l=new sa(t);return l.wrapS=l.wrapT=Ko,l.repeat.set(8,8),l.colorSpace=bn,l}function qa(i,t){let e=i*127961+t*372143+918273|0;return e=(e^e>>13)*517261|0,(e&2147483647)/2147483647}function xh(i){return i*i*(3-2*i)}function I0(i,t){const e=Math.floor(i),n=Math.floor(t),s=xh(i-e),o=xh(t-n),r=qa(e,n),a=qa(e+1,n),c=qa(e,n+1),l=qa(e+1,n+1);return r+(a-r)*s+(c-r)*o+(r-a-c+l)*s*o}function Xl(i,t,e){let n=0,s=.5,o=1;for(let r=0;r<e;r++)n+=I0(i*o,t*o)*s,s*=.5,o*=2;return n}function ow(){const i=sw(),t=Jt*3,e=200,n=new Me(t,t,e,e),s=n.attributes.position,o=[[.7,.65,.4],[.85,.6,.35],[.5,.75,.5],[.9,.55,.35],[.8,.75,.45],[.6,.5,.3],[.45,.7,.55],[.75,.5,.3],[.55,.8,.55],[.65,.55,.35]],r=s.count,a=new Float32Array(r*3);for(let l=0;l<r;l++){const u=s.getX(l),h=s.getY(l);Math.sqrt(u*u+h*h)<Jt*1.4?s.setZ(l,Yt(u,-h)):s.setZ(l,0);const p=u,g=-h,x=Xl(p*.025+100,g*.025+200,3),d=Xl(p*.06+300,g*.06+400,2),m=I0(p*.15+500,g*.15+600),S=Xl(p*.04-150,g*.04-250,3),v=Math.floor(x*o.length*.999),_=Math.floor(S*o.length*.999),A=o[v],E=o[_],b=xh(d),T=.85+m*.3,y=(A[0]*(1-b)+E[0]*b)*T,M=(A[1]*(1-b)+E[1]*b)*T,R=(A[2]*(1-b)+E[2]*b)*T,L=1+Yt(p,g)*.06;a[l*3]=y*L,a[l*3+1]=M*L,a[l*3+2]=R*L}n.setAttribute("color",new Ue(a,3)),n.computeVertexNormals();const c=new I(n,new K({map:i,vertexColors:!0,roughness:.75,metalness:0,emissive:1512464,emissiveIntensity:.28}));return c.rotation.x=-Math.PI/2,c.receiveShadow=!0,ut.add(c),c}const Kr=new ae;let Bc=null;const Cs=120;let sp=null,fc=null,Mh=null,vh=null,Go=null;const ko=[],rw=3;let ql=0;function cs(i,t){const e=i>>16&255,n=i>>8&255,s=i&255;return`rgba(${e},${n},${s},${t})`}function ls(i,t,e,n,s,o,r){i.save(),i.translate(t,e),Math.abs(s/n-1)>.01&&i.scale(1,s/n);const a=i.createRadialGradient(0,0,0,0,0,n);a.addColorStop(0,cs(o,r)),a.addColorStop(.25,cs(o,r*.55)),a.addColorStop(.55,cs(o,r*.15)),a.addColorStop(.85,cs(o,r*.03)),a.addColorStop(1,cs(o,0)),i.fillStyle=a,i.beginPath(),i.arc(0,0,n,0,6.2832),i.fill(),i.restore()}function Yl(i,t,e,n,s,o,r,a){ls(i,t,e,n,s,o,r),t-n<0&&ls(i,t+a,e,n,s,o,r),t+n>a&&ls(i,t-a,e,n,s,o,r)}function aw(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),s=Math.random,o=n.createLinearGradient(0,0,0,1024);o.addColorStop(0,"#030610"),o.addColorStop(.2,"#050a18"),o.addColorStop(.4,"#0a1222"),o.addColorStop(.55,"#0c1828"),o.addColorStop(.75,"#081018"),o.addColorStop(1,"#040810"),n.fillStyle=o,n.fillRect(0,0,2048,1024);const r=[{x:.12,y:.22,rx:.18,ry:.14,col:1717094,a:.14},{x:.42,y:.28,rx:.22,ry:.1,col:2758741,a:.12},{x:.72,y:.18,rx:.16,ry:.12,col:1721446,a:.13},{x:.88,y:.32,rx:.2,ry:.09,col:3348548,a:.1},{x:.28,y:.12,rx:.14,ry:.18,col:2245768,a:.1},{x:.58,y:.38,rx:.18,ry:.07,col:4465220,a:.08},{x:.05,y:.4,rx:.15,ry:.1,col:1586005,a:.09},{x:.52,y:.15,rx:.12,ry:.16,col:2765670,a:.07}];for(const h of r){Yl(n,h.x*2048,h.y*1024,h.rx*2048,h.ry*1024,h.col,h.a,2048);for(let f=0;f<4;f++){const p=(h.x+(s()-.5)*h.rx)*2048,g=(h.y+(s()-.5)*h.ry)*1024,x=h.rx*2048*(.2+s()*.35),d=h.ry*1024*(.2+s()*.4);Yl(n,p,g,x,d,h.col,h.a*(.4+s()*.5),2048)}}const a=[2245802,2245734,4465254,5583701,3368584,2245717,3809894];for(let h=0;h<30;h++){const f=s()*2048,p=s()*1024*.55,g=40+s()*180,x=25+s()*100;Yl(n,f,p,g,x,a[Math.floor(s()*a.length)],.025+s()*.035,2048)}n.save(),n.globalCompositeOperation="screen";const c=.26;for(let h=0;h<50;h++){const f=h/50,p=f*2048,g=(c+Math.sin(f*Math.PI)*.06+(s()-.5)*.02)*1024,x=2048*.05+s()*2048*.035,d=1024*.04*(.4+s()*.6);ls(n,p,g,x,d,4478310,.025+s()*.015)}for(let h=0;h<25;h++){const f=.2+s()*.6,p=f*2048,g=(c+Math.sin(f*Math.PI)*.04)*1024;ls(n,p,g,2048*.03+s()*2048*.02,1024*.02+s()*1024*.01,6719658,.015+s()*.012)}for(let h=0;h<10;h++){const f=.35+s()*.3,p=f*2048,g=(c+Math.sin(f*Math.PI)*.02)*1024;ls(n,p,g,2048*.02,1024*.012,8943462,.01+s()*.008)}n.globalCompositeOperation="source-over",n.restore();for(let h=0;h<12;h++){const f=.1+s()*.8,p=f*2048,g=(c+Math.sin(f*Math.PI)*.04+(s()-.5)*.02)*1024,x=20+s()*60,d=8+s()*20;ls(n,p,g,x,d,132104,.15+s()*.1)}const l=["255,255,255","220,230,255","255,240,220","200,215,255","255,225,200","240,240,255","255,245,235"];for(let h=0;h<5e3;h++){const f=s()*2048,p=s()*1024*.65,g=.3+s()*.7,x=.1+s()*.5;n.fillStyle=`rgba(${l[Math.floor(s()*l.length)]},${x})`,n.beginPath(),n.arc(f,p,g,0,6.28),n.fill()}for(let h=0;h<3e3;h++){const f=s(),p=f*2048,x=(c+Math.sin(f*Math.PI)*.06)*1024+(s()-.5)*1024*.1;if(x<0||x>1024*.6)continue;const d=.2+s()*.6,m=.2+s()*.7;n.fillStyle=`rgba(${l[Math.floor(s()*l.length)]},${m})`,n.beginPath(),n.arc(p,x,d,0,6.28),n.fill()}for(let h=0;h<60;h++){const f=s()*2048,p=s()*1024*.58,g=1.2+s()*1.8,x=6+s()*14,d=s();let m;d<.45?m="255,255,255":d<.65?m="210,225,255":d<.8?m="255,230,200":d<.92?m="190,210,255":m="255,200,180";const S=n.createRadialGradient(f,p,0,f,p,x);S.addColorStop(0,`rgba(${m},0.5)`),S.addColorStop(.1,`rgba(${m},0.18)`),S.addColorStop(.35,`rgba(${m},0.04)`),S.addColorStop(1,`rgba(${m},0)`),n.fillStyle=S,n.beginPath(),n.arc(f,p,x,0,6.28),n.fill(),n.strokeStyle=`rgba(${m},0.12)`,n.lineWidth=.5;const v=x*.8;n.beginPath(),n.moveTo(f-v,p),n.lineTo(f+v,p),n.moveTo(f,p-v),n.lineTo(f,p+v),n.stroke(),n.fillStyle=`rgba(${m},1)`,n.beginPath(),n.arc(f,p,g,0,6.28),n.fill()}for(let h=0;h<8;h++){const f=s()*2048,p=1024*.08+s()*1024*.42,g=50+s()*90;ls(n,f,p,g,g*.7,3359846,.03);for(let x=0;x<100;x++){const d=s()*6.28,m=s()*s()*g,S=f+Math.cos(d)*m,v=p+Math.sin(d)*m*.65;if(S<0||S>2048||v<0||v>1024)continue;const _=.2+s()*.6;n.fillStyle=`rgba(255,255,255,${.25+s()*.6})`,n.beginPath(),n.arc(S,v,_,0,6.28),n.fill()}}for(let h=0;h<15;h++){const f=r[Math.floor(s()*r.length)],p=(f.x+(s()-.5)*f.rx*.5)*2048,g=(f.y+(s()-.5)*f.ry*.5)*1024,x=3+s()*8,d=n.createRadialGradient(p,g,0,p,g,x*3);d.addColorStop(0,cs(f.col,.2)),d.addColorStop(.3,cs(f.col,.06)),d.addColorStop(1,cs(f.col,0)),n.fillStyle=d,n.beginPath(),n.arc(p,g,x*3,0,6.28),n.fill()}const u=new sa(e);return u.colorSpace=bn,u}function cw(){const i=C0(),t=aw(),e=new Q(Hs,64,32,0,Math.PI*2,0,Math.PI*.55);Bc=new j({map:t,side:Tn,fog:!1,transparent:!1});const n=new I(e,Bc);Kr.add(n),lw(),uw(),ut.add(Kr),ph(i)}function lw(){const i=new Float32Array(Cs*3),t=new Float32Array(Cs*3);fc=new Float32Array(Cs),Mh=new Float32Array(Cs),vh=new Float32Array(Cs);const e=[[1,1,1],[.85,.9,1],[1,.94,.86],[.78,.84,1],[1,.88,.78],[.9,.95,1]],n=Math.random,s=Hs*.97;for(let a=0;a<Cs;a++){const c=n()*Math.PI*2,l=n()*Math.PI*.48,u=s*Math.cos(c)*Math.sin(l),h=s*Math.cos(l),f=s*Math.sin(c)*Math.sin(l);i[a*3]=u,i[a*3+1]=h,i[a*3+2]=f;const p=e[Math.floor(n()*e.length)];t[a*3]=p[0],t[a*3+1]=p[1],t[a*3+2]=p[2],fc[a]=2+n()*4,Mh[a]=n()*Math.PI*2,vh[a]=.5+n()*2.5}const o=new we;o.setAttribute("position",new Ht(i,3)),o.setAttribute("color",new Ht(t,3)),Go=new Ht(fc.slice(),1),Go.setUsage(xe),o.setAttribute("size",Go);const r=new df({vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,fog:!1,blending:ce,depthWrite:!1});sp=new i0(o,r),Kr.add(sp)}function uw(){const i=new j({color:16777215,transparent:!0,opacity:0,fog:!1,blending:ce,depthWrite:!1});for(let t=0;t<rw;t++){const e=new I(new vt(.15,0,12,4),i.clone());e.visible=!1,Kr.add(e),ko.push({mesh:e,mat:e.material,active:!1,life:0,maxLife:0,sx:0,sy:0,sz:0,dx:0,dy:0,dz:0})}}function hw(){let i=null;for(let a=0;a<ko.length;a++)if(!ko[a].active){i=ko[a];break}if(!i)return;const t=Math.random,e=t()*Math.PI*2,n=.1+t()*.35,s=Hs*.85;i.sx=s*Math.cos(e)*Math.sin(n),i.sy=s*Math.cos(n),i.sz=s*Math.sin(e)*Math.sin(n);const o=e+(t()-.5)*1,r=80+t()*120;i.dx=Math.cos(o)*r,i.dy=-r*(.5+t()*.5),i.dz=Math.sin(o)*r,i.life=.5+t()*.8,i.maxLife=i.life,i.active=!0,i.mesh.visible=!0}function L0(i,t){if(Kr.rotation.y=t*.003,Go){const e=Go.array;for(let n=0;n<Cs;n++){const s=fc[n],o=Math.sin(t*vh[n]+Mh[n]);e[n]=s*(.65+o*.35)}Go.needsUpdate=!0}ql-=i,ql<=0&&(ql=4+Math.random()*12,hw());for(let e=0;e<ko.length;e++){const n=ko[e];if(!n.active)continue;if(n.life-=i,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}const s=n.life/n.maxLife;n.sx+=n.dx*i,n.sy+=n.dy*i,n.sz+=n.dz*i,n.mesh.position.set(n.sx,n.sy,n.sz),n.mesh.lookAt(n.sx+n.dx,n.sy+n.dy,n.sz+n.dz),n.mesh.rotateX(Math.PI/2),n.mat.opacity=s*.7,n.mesh.scale.setScalar(.6+s*.4)}}function fw(i){if(Bc){const t=Math.max(.15,i);Bc.color.setRGB(t,t,t)}}const dw=6,Ya=64,_h=[];let Os=null;const Tr=[new ot(1734485),new ot(2787447),new ot(5601126),new ot(6706568),new ot(8930406),new ot(3368533)];function pw(){Os=new ae,Os.visible=!1;for(let i=0;i<dw;i++){const t=1.2+i*.2+Math.sin(i*1.7)*.15,e=Hs*t,n=.1+i*.012+Math.sin(i*2.3)*.02,s=Hs*n,o=new Me(e,s,Ya,3),r=o.attributes.position.array,a=4,c=(Ya+1)*a,l=Math.PI*(.45+i*.08+Math.sin(i*.9)*.05),u=-l/2,h=(.25+i*.04+Math.sin(i*1.3)*.02)*Math.PI,f=i*.18-.45;for(let d=0;d<c;d++){const m=Math.floor(d/a),S=d%a,v=m/Ya,_=u+v*l+f,E=(S/(a-1)-.5)*.05,b=h+E,T=Hs*.92;r[d*3]=Math.sin(_)*Math.sin(b)*T,r[d*3+1]=Math.cos(b)*T,r[d*3+2]=Math.cos(_)*Math.sin(b)*T}o.attributes.position.needsUpdate=!0,o.attributes.position.setUsage(xe),o.computeVertexNormals();const p=new Float32Array(c*3);o.setAttribute("color",new Ue(p,3)),o.attributes.color.setUsage(xe);const g=new j({vertexColors:!0,transparent:!0,opacity:0,side:Ut,blending:ce,depthWrite:!1,fog:!1}),x=new I(o,g);Os.add(x),_h.push({mesh:x,mat:g,geo:o,colorArr:p,posArr:r,vertCount:c,rows:a,segments:Ya,phase:i*1.7+Math.sin(i*.8)*.5,speed:.15+i*.05+Math.sin(i*2.1)*.03,colorShift:i*1.1,elevation:h,arcStart:u,arcSpan:l,azimuthOffset:f})}ut.add(Os)}let vo=0;function mw(i,t,e,n,s){if(!Os)return;const o=s==="HEAVY_RAIN"||s==="LUMINOUS_STORM"||s==="FOG_BANK";let r=0;o||(e==="DEEP_NIGHT"?r=.25:e==="NIGHT"&&(r=.08));const a=r>vo?.2:.4;if(vo+=(r-vo)*a*i,vo<.005){Os.visible=!1;return}Os.visible=!0;const c=Hs*.92;for(let l=0;l<_h.length;l++){const u=_h[l],h=u.colorArr,f=u.posArr,p=u.segments,g=u.rows;u.mat.opacity=vo*(.5+l*.05);for(let x=0;x<=p;x++){const d=x/p,m=Math.sin(d*6+t*u.speed+u.phase)*.5+.5,S=Math.sin(d*3-t*u.speed*.4+u.phase*1.3)*.5+.5,v=Math.sin(d*1.5+t*.07)*.5+.5,_=Math.sin(d*1.2+t*.05+u.phase*.7)*.5+.5,A=(m*.3+S*.25+v*.2+_*.25)*vo,E=(d*3+t*.08+u.colorShift)%Tr.length,b=Math.floor(E),T=E-b,y=Tr[b%Tr.length],M=Tr[(b+1)%Tr.length],R=(y.r+(M.r-y.r)*T)*A,D=(y.g+(M.g-y.g)*T)*A,L=(y.b+(M.b-y.b)*T)*A,N=c*.025,k=Math.sin(d*5+t*.3+u.phase)*N+Math.sin(d*2.5-t*.15+u.phase*.6)*N*.5;for(let B=0;B<g;B++){const Y=x*g+B,W=B/(g-1);let at;W<.33?at=W*1.2:W>.67?at=(1-W)*1.5:at=.7+Math.sin(W*Math.PI)*.3,h[Y*3]=R*at,h[Y*3+1]=D*at,h[Y*3+2]=L*at,u.arcStart+d*u.arcSpan+u.azimuthOffset;const ft=(W-.5)*.05,mt=u.elevation+ft,Ct=k*(.3+W*.7);f[Y*3+1]=Math.cos(mt)*c+Ct}}u.geo.attributes.color.needsUpdate=!0,u.geo.attributes.position.needsUpdate=!0}}const Z={pos:new z(0,nl,0),vel:new z,onGround:!0};let Zl=0,$l=0,D0=0,jl=65,op=65,Er=0,rp=!0,Jl=0,or=0,yh=null,wh=null,Sh=null,ap=1;function gw(i,t,e){yh=i,wh=t,Sh=e}let bh=[],Th=[],Eh=null;function xw(i,t){bh=i,Th=t}function Mw(i){Eh=i}function vw(i){const t=iw(),e=ze.ShiftLeft||ze.ShiftRight||fr;Z.vel.x=t.x,Z.vel.z=t.z,Z.vel.y-=M1*i,(ze.Space||sl)&&Z.onGround&&(Z.vel.y=Nc,Z.onGround=!1,ew(!1),wh&&wh()),Z.onGround||(Jl=Z.vel.y),Z.pos.x+=Z.vel.x*i,Z.pos.y+=Z.vel.y*i,Z.pos.z+=Z.vel.z*i;const n=Yt(Z.pos.x,Z.pos.z)+nl;if(Z.pos.y<=n){if(Z.pos.y=n,Z.vel.y=0,!rp&&Jl<-3){const u=Math.min(Math.abs(Jl)/Nc,1);Er=u*.15,Eh&&Eh(Z.pos.x,Z.pos.z,Math.floor(3+u*5)),Sh&&Sh(u)}Z.onGround=!0}rp=Z.onGround,Z.onGround?(Z.vel.x*=Jd,Z.vel.z*=Jd):(Z.vel.x*=Kd,Z.vel.z*=Kd);const s=.4;for(let u=0;u<bh.length;u++){const h=bh[u],f=Z.pos.x-h.x,p=Z.pos.z-h.z,g=f*f+p*p,x=.6+s;if(g<x*x&&g>.001){const d=1/Math.sqrt(g);Z.pos.x=h.x+f*d*x,Z.pos.z=h.z+p*d*x}}for(let u=0;u<Th.length;u++){const h=Th[u],f=Z.pos.x-h.x,p=Z.pos.z-h.z,g=f*f+p*p,x=h.colR+s;if(g<x*x&&g>.001){const d=1/Math.sqrt(g);Z.pos.x=h.x+f*d*x,Z.pos.z=h.z+p*d*x}}if(Math.sqrt(Z.pos.x*Z.pos.x+Z.pos.z*Z.pos.z)>Jt){const u=Math.atan2(Z.pos.z,Z.pos.x);Z.pos.x=Math.cos(u)*Jt,Z.pos.z=Math.sin(u)*Jt}Tf.position.copy(Z.pos);const a=Math.sqrt(t.x*t.x+t.z*t.z)>.5&&Z.onGround;a?or=0:or+=i,$l+=((a?e?.06:.035:0)-$l)*i*6,a&&(Zl+=i*(e?12:8));const l=Math.sin(Zl)*$l;if(a&&yh){const u=Math.sin(Zl)>=0?1:-1;ap>0&&u<0&&yh(e),ap=u}op=e&&a?78:65,jl+=(op-jl)*i*4,gn.fov=jl,gn.updateProjectionMatrix(),Er*=Math.pow(.04,i),Er<.001&&(Er=0),D0=l-Er}function Za(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,c=new we;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(e){let u=0;const h=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(const u in o){const h=cp(o[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in r){const h=r[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){const p=[];for(let x=0;x<r[u].length;++x)p.push(r[u][x][f]);const g=cp(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function cp(i){let t,e,n,s=-1,o=0;for(let l=0;l<i.length;++l){const u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=u.count*e}const r=new t(o),a=new Ue(r,e,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let f=0,p=u.count;f<p;f++)for(let g=0;g<e;g++){const x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else r.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}let _o=null;function _w(){if(_o)return _o;const i=256,t=512,e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,t);s.addColorStop(0,"#5a4030"),s.addColorStop(.3,"#4d3528"),s.addColorStop(.7,"#3a2a1e"),s.addColorStop(1,"#2e2015"),n.fillStyle=s,n.fillRect(0,0,i,t);for(let o=0;o<28;o++){const r=o/28*i+Math.sin(o*3.7)*6,a=2+Math.sin(o*2.1)*1.5,c=Math.sin(o*1.3+.5)*.5+.5,l=Math.floor(50+c*30),u=Math.floor(30+c*20),h=Math.floor(15+c*12);n.strokeStyle=`rgba(${l},${u},${h},0.4)`,n.lineWidth=a,n.beginPath();let f=0;for(n.moveTo(r,f);f<t;){f+=8+Math.random()*12;const p=Math.sin(f*.03+o)*3;n.lineTo(r+p,f)}n.stroke()}for(let o=0;o<18;o++){const r=o/18*i+Math.sin(o*5.3)*8;n.strokeStyle="rgba(20,12,6,0.35)",n.lineWidth=.8+Math.random()*1.2,n.beginPath();let a=Math.random()*40;for(n.moveTo(r,a);a<t;)a+=5+Math.random()*10,n.lineTo(r+Math.sin(a*.05+o*2)*4,a);n.stroke()}for(let o=0;o<30;o++){const r=o/30*t+Math.random()*10;n.strokeStyle=`rgba(${30+Math.random()*20},${18+Math.random()*12},${8+Math.random()*8},0.15)`,n.lineWidth=.5+Math.random()*1.5,n.beginPath(),n.moveTo(0,r);for(let a=0;a<i;a+=10)n.lineTo(a,r+Math.sin(a*.04+o)*2);n.stroke()}for(let o=0;o<5;o++){const r=Math.random()*i,a=50+Math.random()*(t-100),c=4+Math.random()*6,l=3+Math.random()*5,u=n.createRadialGradient(r,a,0,r,a,c);u.addColorStop(0,"rgba(15,8,4,0.5)"),u.addColorStop(.5,"rgba(30,18,10,0.3)"),u.addColorStop(1,"rgba(40,25,14,0)"),n.fillStyle=u,n.beginPath(),n.ellipse(r,a,c,l,0,0,Math.PI*2),n.fill()}for(let o=0;o<8;o++){const r=Math.random()*i;n.strokeStyle="rgba(34,136,85,0.08)",n.lineWidth=.5+Math.random()*.8,n.beginPath();let a=Math.random()*t*.3;n.moveTo(r,a);const c=30+Math.random()*80;for(;a<a+c&&a<t;)a+=4+Math.random()*6,n.lineTo(r+Math.sin(a*.08+o*2)*2,a);n.stroke()}return _o=new sa(e),_o.wrapS=Ko,_o.wrapT=Ko,_o}const Qr=[{leaf:1332520,glow:2280567,core:4521898},{leaf:931880,glow:3390378,core:5636044},{leaf:1721376,glow:4508757,core:7864200},{leaf:1060912,glow:2267562,core:4513262},{leaf:1583172,glow:3377356,core:5618687}];let $a=null;function yw(){if($a)return $a;const i=64,t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d"),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);return n.addColorStop(0,"rgba(68, 255, 136, 0.55)"),n.addColorStop(.25,"rgba(34, 204, 100, 0.35)"),n.addColorStop(.6,"rgba(20, 120, 60, 0.12)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=n,e.fillRect(0,0,i,i),$a=new sa(t),$a}function ww(i,t){const e=new t0({map:yw(),color:3394696,transparent:!0,opacity:.65,depthWrite:!1,blending:ce}),n=new $g(e),s=i*.55;return n.scale.set(s*2.2,s*1.6,1),n.position.y=t+i*.6,n.visible=!1,ut.add(n),n}function Sw(i){const t=new ae,e=6+w()*10,n=.2+w()*.3,s=n*1.8,o=new I(new vt(n*.4,s,e,8));o.material=new K({color:5914672}),o.position.y=e/2,o.userData._cat="trunk",t.add(o);const r=2+Math.floor(w()*3);for(let v=0;v<r;v++){const _=v/r*6.28+w()*.5,A=e*.4+w()*e*.4,E=new I(new vt(.008,.015,A,3));E.material=new K({color:2263125}),E.position.set(Math.cos(_)*n*.74,e*.15+A/2,Math.sin(_)*n*.74),E.userData._cat="detail",t.add(E)}const a=new z(0,1,0),c=4+Math.floor(w()*4);for(let v=0;v<c;v++){const _=v/c*6.28+w()*.4,A=1.2+w()*2.5,E=s*(.3+w()*.2),b=.03+w()*.03,T=-.1-w()*.15,y=Math.cos(_)*Math.cos(T),M=Math.sin(T),R=Math.sin(_)*Math.cos(T),D=new z(y,M,R).normalize(),L=new vt(b,E,A,5);L.translate(0,A/2,0);const N=new I(L,new K({color:4864040}));N.position.set(Math.cos(_)*s*.6,.05,Math.sin(_)*s*.6);const k=new fs().setFromUnitVectors(a,D);if(N.quaternion.copy(k),N.userData._cat="trunk",t.add(N),w()<.6){const B=.4+w()*.3,Y=_+(w()-.5)*1.2,W=.5+w()*1,at=new z(Math.cos(Y)*Math.cos(-.1),Math.sin(-.1),Math.sin(Y)*Math.cos(-.1)).normalize(),ft=new vt(.02,E*.3,W,4);ft.translate(0,W/2,0);const mt=new I(ft,new K({color:4864040})),Ct=new z(Math.cos(_)*s*.6+y*A*B,.05+M*A*B,Math.sin(_)*s*.6+R*A*B);mt.position.copy(Ct);const Zt=new fs().setFromUnitVectors(a,at);mt.quaternion.copy(Zt),mt.userData._cat="trunk",t.add(mt)}else w(),w()}const l=Qr[i%Qr.length],u=new K({color:5914672}),h=new K({color:4863269}),f=new z(0,1,0);function p(v,_,A,E,b,T){const y=new vt(b,E,A,5);y.translate(0,A/2,0);const M=new I(y,T);M.position.copy(v);const R=_.clone().normalize(),D=new fs().setFromUnitVectors(f,R);M.quaternion.copy(D),M.userData._cat="trunk",t.add(M)}function g(v,_,A,E){const b=new I(new ks(E*.25,1));b.material=new K({color:l.core}),b.position.set(v,_,A),b.userData._cat="canopy",t.add(b);const T=new I(new ks(E*.45,1));T.material=new K({color:l.leaf}),T.position.set(v+(w()-.5)*.3,_+(w()-.5)*.3,A+(w()-.5)*.3),T.scale.set(1+w()*.3,.7+w()*.4,1+w()*.3),T.userData._cat="canopy",t.add(T);const y=new I(new ks(E*.7,1));y.material=new K({color:l.glow}),y.position.set(v,_,A),y.userData._cat="glow",t.add(y)}const x=2+Math.floor(w()*2);for(let v=0;v<x;v++){const _=e*(.3+w()*.25),A=v/x*Math.PI*2+w()*1,E=.35+w()*.45,b=1+w()*1.8,T=n*.4,y=n*.08,M=Math.cos(A)*Math.cos(E),R=Math.sin(E),D=Math.sin(A)*Math.cos(E),L=new z(M,R,D),N=new z(Math.cos(A)*n*.95,_,Math.sin(A)*n*.95);if(p(N,L,b,T,y,u),w()<.4){const k=.4+w()*.8,B=new I(new vt(.008,.003,k,3));B.material=new K({color:2773040});const Y=.4+w()*.4;B.position.set(N.x+M*b*Y,N.y+R*b*Y-k/2,N.z+D*b*Y),B.userData._cat="detail",t.add(B)}else w(),w()}const d=5+Math.floor(w()*4);for(let v=0;v<d;v++){const _=e*(.55+w()*.37),A=v/d*Math.PI*2+w()*.5,E=.6+w()*.55,b=1.5+w()*3,T=n*.35,y=.03+w()*.02,M=Math.cos(A)*Math.cos(E),R=Math.sin(E),D=Math.sin(A)*Math.cos(E),L=new z(M,R,D),N=new z(Math.cos(A)*n*.95,_,Math.sin(A)*n*.95);p(N,L,b,T,y,u);const k=N.x+M*b,B=N.y+R*b,Y=N.z+D*b,W=.8+w()*1.5;g(k,B,Y,W);const at=1+Math.floor(w()*3);for(let ft=0;ft<at;ft++){const mt=.35+w()*.35,Ct=new z(N.x+M*b*mt,N.y+R*b*mt,N.z+D*b*mt),Zt=A+(w()-.5)*1.8,et=.45+w()*.55,ct=.6+w()*1.4,yt=new z(Math.cos(Zt)*Math.cos(et),Math.sin(et),Math.sin(Zt)*Math.cos(et));p(Ct,yt,ct,.04,.012,h);const pt=Ct.x+yt.x*ct,zt=Ct.y+yt.y*ct,Ot=Ct.z+yt.z*ct,$t=.5+w()*.8;g(pt,zt,Ot,$t)}if(w()<.3){const ft=.3+w()*.7,mt=new I(new vt(.008,.003,ft,3));mt.material=new K({color:2773040});const Ct=.5+w()*.3;mt.position.set(N.x+M*b*Ct,N.y+R*b*Ct-ft/2,N.z+D*b*Ct),mt.userData._cat="detail",t.add(mt)}else w(),w()}const m=Math.floor(w()*3);for(let v=0;v<m;v++){const _=1+w()*e*.4,A=w()*6.28,E=.08+w()*.08,b=new I(new Q(E,5,3));b.material=new K({color:5911840}),b.scale.set(1.5,.3,1),b.position.set(Math.cos(A)*n*.8,_,Math.sin(A)*n*.8),b.rotation.y=-A,b.userData._cat="detail",t.add(b)}const S=new I(new Q(2.5+w()*1.5,8,6));return S.material=new K({color:new ot(F.leaf)}),S.position.y=e*.85,S.userData._cat="glow",t.add(S),t.userData.treeH=e,t}function bw(i,t){const e=C0();ph(7919+t*1013+i*3571);const n=Sw(i),s=n.userData.treeH;ph(e),n.updateMatrixWorld(!0);const o=[],r=[],a=[],c=[],l=new ot;for(let g=0;g<n.children.length;g++){const x=n.children[g];if(!x.isMesh)continue;let d=x.geometry.clone();if(x.updateMatrix(),d.applyMatrix4(x.matrix),d.index){const A=d.toNonIndexed();d.dispose(),d=A}const m=x.userData._cat||"trunk";m==="trunk"?l.set(16777215):l.copy(x.material.color);const v=d.attributes.position.count,_=new Float32Array(v*3);for(let A=0;A<v;A++)_[A*3]=l.r,_[A*3+1]=l.g,_[A*3+2]=l.b;if(d.setAttribute("color",new Ue(_,3)),m==="trunk"){if(!d.attributes.uv){const A=new Float32Array(v*2);d.setAttribute("uv",new Ue(A,2))}}else d.attributes.uv&&d.deleteAttribute("uv");m==="trunk"?o.push(d):m==="canopy"?r.push(d):m==="glow"?a.push(d):m==="detail"&&c.push(d),x.material.dispose()}const u=o.length>0?Za(o):null,h=r.length>0?Za(r):null,f=a.length>0?Za(a):null,p=c.length>0?Za(c):null;for(const g of o)g.dispose();for(const g of r)g.dispose();for(const g of a)g.dispose();for(const g of c)g.dispose();return{trunkGeo:u,canopyGeo:h,glowGeo:f,detailGeo:p,treeH:s,palIdx:i}}const Xe=new le;function Tw(i){const t=[];for(let e=0;e<i;e++){const n=e%Qr.length,s=Math.floor(e/Qr.length);t.push(bw(n,s))}return t}function Ew(i,t,e){const n=[];for(let s=0;s<i.length;s++){const o=i[s],r=Qr[o.palIdx],a=_w(),c=new K({vertexColors:!0,map:a,roughness:.85,emissive:1708040,emissiveIntensity:.3}),l=o.trunkGeo?new ei(o.trunkGeo,c,e):null;l&&(l.instanceMatrix.setUsage(xe),l.count=0,ut.add(l));const u=new K({vertexColors:!0,roughness:.5,emissive:r.glow,emissiveIntensity:.45,transparent:!0,opacity:.4,depthWrite:!1}),h=o.canopyGeo?new ei(o.canopyGeo,u,e):null;h&&(h.instanceMatrix.setUsage(xe),h.count=0,ut.add(h));const f=new K({vertexColors:!0,emissive:r.glow,emissiveIntensity:.08,transparent:!0,opacity:.07,depthWrite:!1}),p=o.glowGeo?new ei(o.glowGeo,f,e):null;p&&(p.instanceMatrix.setUsage(xe),p.count=0,ut.add(p));const g=new K({vertexColors:!0,emissive:r.glow,emissiveIntensity:.2}),x=o.detailGeo?new ei(o.detailGeo,g,e):null;x&&(x.instanceMatrix.setUsage(xe),x.count=0,ut.add(x)),n.push({trunk:l,canopy:h,glow:p,detail:x,trunkMat:c,canopyMat:u,glowMat:f,detailMat:g,instances:[],treeH:o.treeH})}for(let s=0;s<t.length;s++){const o=s%i.length,r=t[s],a=r.yRot,c=r.scale;Xe.position.set(r.x,r.y,r.z),Xe.rotation.set(0,a,0),Xe.scale.setScalar(c),Xe.updateMatrix();const l=n[o].instances.length;n[o].trunk&&n[o].trunk.setMatrixAt(l,Xe.matrix),n[o].canopy&&n[o].canopy.setMatrixAt(l,Xe.matrix),n[o].glow&&n[o].glow.setMatrixAt(l,Xe.matrix),n[o].detail&&n[o].detail.setMatrixAt(l,Xe.matrix),n[o].instances.push({x:r.x,z:r.z,y:r.y,yRot:a,scale:c,treeH:r.treeH||n[o].treeH,posIdx:s})}for(let s=0;s<n.length;s++){const o=n[s].instances.length;n[s].trunk&&(n[s].trunk.count=o),n[s].canopy&&(n[s].canopy.count=o),n[s].glow&&(n[s].glow.count=o),n[s].detail&&(n[s].detail.count=0)}return n}function Aw(i,t,e,n,s,o,r,a,c){for(let l=0;l<i.length;l++){const u=i[l];let h=0,f=0,p=0,g=0;for(let x=0;x<u.instances.length;x++){const d=u.instances[x],m=d.x-e,S=d.z-s,v=d.y+(d.treeH||10)*.4-n,_=m*m+v*v+S*S,A=d.posIdx;if(_>12100){t[A]&&(t[A].visible=!1);continue}if(_>4900){t[A]&&(t[A].visible=!0);continue}if(t[A]&&(t[A].visible=!1),Xe.position.set(d.x,d.y,d.z),Xe.scale.setScalar(d.scale),_<400){const E=d.x*.1+d.z*.13;Xe.rotation.set(Math.sin(o*.25+E+1)*.003*r+c*.15,d.yRot,Math.sin(o*.3+E)*.004*r+a*.15),Xe.updateMatrix(),u.detail&&u.detail.setMatrixAt(g++,Xe.matrix)}else Xe.rotation.set(0,d.yRot,0),Xe.updateMatrix();u.trunk&&u.trunk.setMatrixAt(h++,Xe.matrix),u.canopy&&u.canopy.setMatrixAt(f++,Xe.matrix),u.glow&&u.glow.setMatrixAt(p++,Xe.matrix)}u.trunk&&(u.trunk.count=h,u.trunk.instanceMatrix.needsUpdate=!0),u.canopy&&(u.canopy.count=f,u.canopy.instanceMatrix.needsUpdate=!0),u.glow&&(u.glow.count=p,u.glow.instanceMatrix.needsUpdate=!0),u.detail&&(u.detail.count=g,u.detail.instanceMatrix.needsUpdate=!0)}}function Rw(i,t){const e=new ae,n=.4+w()*1.2,s=w()*6.28,o=.8+w()*1.5,r=.5+w()*.8,a=new I(In.mushStem,new K({color:F.mushStem,roughness:.7,emissive:F.mushGlow,emissiveIntensity:.1}));a.position.y=.3,e.add(a);const c=new K({color:F.mushStem,emissive:F.mushGlow,emissiveIntensity:.15,roughness:.6}),l=new I(new Ae(.09,.012,4,8),c);l.position.y=.42,l.rotation.x=Math.PI/2,e.add(l);const u=new K({color:F.mushCap,emissive:F.mushGlow,emissiveIntensity:r,roughness:.3,transparent:!0,opacity:.9}),h=new I(In.mushCap,u);h.scale.set(1,.5,1),h.position.y=.55,h.castShadow=!0,h.receiveShadow=!0,e.add(h);const f=new K({color:6693546,emissive:F.mushGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,side:Ut});for(let M=0;M<8;M++){const R=M/8*6.28,D=new I(new Me(.35,.08),f);D.position.set(Math.cos(R)*.15,.48,Math.sin(R)*.15),D.rotation.y=-R,D.rotation.x=.1,e.add(D)}for(let M=0;M<4;M++){const R=new j({color:16777215,transparent:!0,opacity:.9}),D=new I(In.mushDot,R),L=w()*6.28,N=.15+w()*.25;D.position.set(Math.cos(L)*N,.6+w()*.1,Math.sin(L)*N),e.add(D)}const p=new K({color:15663103,emissive:11197951,emissiveIntensity:.2,transparent:!0,opacity:.6,roughness:0,metalness:.5}),g=2+Math.floor(w()*2);for(let M=0;M<g;M++){const R=new I(new Q(.015+w()*.015,4,3),p),D=w()*6.28,L=.1+w()*.2;R.position.set(Math.cos(D)*L,.63+w()*.08,Math.sin(D)*L),e.add(R)}const x=new K({color:4465322,emissive:F.mushGlow,emissiveIntensity:.15,transparent:!0,opacity:.35});for(let M=0;M<4;M++){const R=w()*6.28,D=.15+w()*.25,L=new I(new vt(.004,.002,D,3),x);L.position.set(Math.cos(R)*.12,.01,Math.sin(R)*.12),L.rotation.z=1.3*(R<3.14?1:-1),L.rotation.y=R,e.add(L)}const d=new K({color:F.mushCap,emissive:F.mushGlow,emissiveIntensity:r*.6,transparent:!0,opacity:.4}),m=new I(new Ae(.38,.01,4,12),d);m.position.y=.49,m.rotation.x=Math.PI/2,e.add(m);const S=new K({color:F.mushStem,emissive:F.mushGlow,emissiveIntensity:.08,roughness:.7}),v=new I(new Q(.08,5,3),S);v.scale.set(1,.5,1),v.position.y=.04,e.add(v);const _=new K({color:1708040,roughness:.95});for(let M=0;M<3;M++){const R=w()*6.28,D=.1+w()*.12,L=new I(new Q(.008+w()*.008,3,3),_);L.position.set(Math.cos(R)*D,.005,Math.sin(R)*D),e.add(L)}const A=new j({color:F.mushGlow,transparent:!0,opacity:.2});for(let M=0;M<4;M++){const R=new I(new Q(.006,3,3),A);R.position.set((w()-.5)*.2,.35+w()*.1,(w()-.5)*.2),e.add(R)}const E=new K({color:11167453,emissive:F.mushGlow,emissiveIntensity:r*.3,roughness:.5}),b=3+Math.floor(w()*3);for(let M=0;M<b;M++){const R=w()*6.28,D=w()*.25,L=new I(new Q(.015+w()*.015,3,3),E);L.position.set(Math.cos(R)*D,.58+w()*.06,Math.sin(R)*D),e.add(L)}const T=new K({color:657416,transparent:!0,opacity:.2,roughness:.95,side:Ut}),y=new I(new $e(.18,8),T);return y.rotation.x=-Math.PI/2,y.position.y=.005,e.add(y),e.scale.setScalar(n),e.position.set(i,0,t),ut.add(e),{group:e,capMat:u,phase:s,speed:o,base:r,x:i,z:t}}function Cw(i,t){const e=new ae,n=w()*6.28,s=new K({color:F.crystal,emissive:F.crystalCore,emissiveIntensity:1.5,transparent:!0,opacity:.7,roughness:.1,metalness:.5}),o=new I(In.crystal,s);o.position.y=.9,o.castShadow=!0,e.add(o);for(let v=0;v<3;v++){const _=new I(In.crystalSm,s),A=v/3*6.28+w()*.5;_.position.set(Math.cos(A)*.4,.45,Math.sin(A)*.4),_.rotation.z=(w()-.5)*.8,_.castShadow=!0,e.add(_)}const r=new K({color:1710626,roughness:.9,metalness:.1}),a=3+Math.floor(w()*3);for(let v=0;v<a;v++){const _=w()*6.28,A=.2+w()*.5,E=.08+w()*.12,b=new I(new Q(E,4,3),r);b.scale.set(1+w()*.5,.5+w()*.4,1+w()*.5),b.position.set(Math.cos(_)*A,E*.3,Math.sin(_)*A),b.rotation.set(w(),w(),w()),e.add(b)}const c=new j({color:F.crystalCore,transparent:!0,opacity:.5});for(let v=0;v<3;v++){const _=.4+w()*.8,A=new I(new vt(.008,.008,_,3),c);A.position.set((w()-.5)*.15,.5+w()*.7,(w()-.5)*.15),A.rotation.set((w()-.5)*.8,(w()-.5)*.5,(w()-.5)*.8),e.add(A)}const l=new j({color:11206638,transparent:!0,opacity:.6});for(let v=0;v<5;v++){const _=new I(new Q(.012,3,3),l);_.position.set((w()-.5)*1,.3+w()*1.5,(w()-.5)*1),e.add(_)}const u=new K({color:F.crystal,emissive:F.crystalCore,emissiveIntensity:.8,transparent:!0,opacity:.5});for(let v=0;v<4;v++){const _=w()*6.28,A=.3+w()*.3,E=new I(new vt(0,.015,.12+w()*.1,3),u);E.position.set(Math.cos(_)*A,.06+w()*.1,Math.sin(_)*A),E.rotation.z=(w()-.5)*.6,e.add(E)}const h=new K({color:3364198,emissive:1122867,emissiveIntensity:.05,roughness:.9,side:Ut});for(let v=0;v<2;v++){const _=w()*6.28,A=.2+w()*.3,E=new I(new $e(.04+w()*.03,5),h);E.rotation.x=-Math.PI/2+w()*.4,E.position.set(Math.cos(_)*A,.05,Math.sin(_)*A),e.add(E)}const f=new j({color:F.crystalCore,transparent:!0,opacity:.2});for(let v=0;v<2;v++){const _=new I(new vt(.003,.003,.6+w()*.4,3),f);_.position.set((w()-.5)*.3,.7+w()*.5,(w()-.5)*.3),_.rotation.set((w()-.5)*1,w(),(w()-.5)*1),e.add(_)}const p=new K({color:1135940,emissive:1127202,emissiveIntensity:.3,transparent:!0,opacity:.25});for(let v=0;v<4;v++){const _=new I(new Q(.02+w()*.02,3,3),p);_.position.set((w()-.5)*.15,.4+w()*.6,(w()-.5)*.15),e.add(_)}const g=new j({color:11206638,transparent:!0,opacity:.06}),x=new I(new Ae(.35,.02,4,10),g);x.position.y=.6,x.rotation.x=Math.PI/2+w()*.3,e.add(x);const d=new j({color:F.crystal,transparent:!0,opacity:.06,side:Ut}),m=new I(new $e(.8,8),d);m.rotation.x=-Math.PI/2,m.position.y=.01,e.add(m),e.position.set(i,0,t),ut.add(e);const S=new ur(F.crystal,.5,8);return S.position.set(i,1.2,t),ut.add(S),{group:e,mat:s,phase:n,x:i,z:t,light:S}}const Qn={uTime:{value:0},uWindAmp:{value:1},uWindLeanX:{value:0},uWindLeanZ:{value:0},uPlayerX:{value:0},uPlayerZ:{value:0}};function Pw(i,t,e,n,s,o){Qn.uTime.value=i,Qn.uWindAmp.value=t,Qn.uWindLeanX.value=e,Qn.uWindLeanZ.value=n,Qn.uPlayerX.value=s,Qn.uPlayerZ.value=o}function Iw(i,t,e,n,s){const o=new we,r=[],a=[],c=[],l=n||20,u=new ot(s?s[0]:663568),h=new ot(s?s[1]:1388056),f=new ot(s?s[2]:2777141),p=new ot(s?s[3]:4517461),g=new ot(s?s[4]:7864268),x=new ot(s?s[5]:14548838),d=new ot;for(let T=0;T<l;T++){const y=w()*6.28,M=w()*e,R=Math.cos(y)*M,D=Math.sin(y)*M,L=.25+w()*.65,N=.03+w()*.05,k=(w()-.5)*.2,B=(w()-.5)*.2,Y=(w()-.5)*.12,W=w()<.5?u:h,at=w(),ft=at<.4?p:at<.7?g:x,mt=L*.35,Ct=L*.7,Zt=k*.3,et=k*.7,ct=B*.3,yt=B*.7;r.push(R-N,.01,D),r.push(R+N,.01,D),r.push(R+Zt-N*.9,mt,D+ct),c.push(0,0,.35),a.push(W.r,W.g,W.b,W.r,W.g,W.b),d.copy(W).lerp(f,.4),a.push(d.r,d.g,d.b),r.push(R+N,.01,D),r.push(R+Zt+N*.9,mt,D+ct),r.push(R+Zt-N*.9,mt,D+ct),c.push(0,.35,.35),a.push(W.r,W.g,W.b),d.copy(W).lerp(f,.4),a.push(d.r,d.g,d.b,d.r,d.g,d.b);const pt=N*.65;r.push(R+Zt-N*.9,mt,D+ct),r.push(R+Zt+N*.9,mt,D+ct),r.push(R+et-pt,Ct,D+yt+Y),c.push(.35,.35,.7),d.copy(W).lerp(f,.4),a.push(d.r,d.g,d.b,d.r,d.g,d.b),d.copy(f).lerp(ft,.3),a.push(d.r,d.g,d.b),r.push(R+Zt+N*.9,mt,D+ct),r.push(R+et+pt,Ct,D+yt+Y),r.push(R+et-pt,Ct,D+yt+Y),c.push(.35,.7,.7),d.copy(W).lerp(f,.4),a.push(d.r,d.g,d.b),d.copy(f).lerp(ft,.3),a.push(d.r,d.g,d.b,d.r,d.g,d.b),r.push(R+et-pt,Ct,D+yt+Y),r.push(R+et+pt,Ct,D+yt+Y),r.push(R+k+Y*2,L,D+B+Y*1.5),c.push(.7,.7,1),d.copy(f).lerp(ft,.3),a.push(d.r,d.g,d.b,d.r,d.g,d.b),a.push(ft.r,ft.g,ft.b)}const m=new ot(s?s[6]:1725736),S=new ot(s?s[7]:3385941),v=Math.floor(l*.3);for(let T=0;T<v;T++){const y=w()*6.28,M=w()*e*.9,R=Math.cos(y)*M,D=Math.sin(y)*M,L=.02+w()*.03;r.push(R-L,.01,D),r.push(R+L,.01,D),r.push(R,.03+w()*.02,D+L),c.push(0,0,.05),a.push(m.r,m.g,m.b),a.push(m.r,m.g,m.b),a.push(S.r,S.g,S.b)}o.setAttribute("position",new Ht(r,3)),o.setAttribute("color",new Ht(a,3)),o.setAttribute("bladeHeight",new Ht(c,1)),o.computeVertexNormals();const _=new K({vertexColors:!0,roughness:.7,side:Ut,emissive:s?s[8]:4521830,emissiveIntensity:.08}),A=i,E=t;_.onBeforeCompile=T=>{T.uniforms.uTime=Qn.uTime,T.uniforms.uWindAmp=Qn.uWindAmp,T.uniforms.uWindLeanX=Qn.uWindLeanX,T.uniforms.uWindLeanZ=Qn.uWindLeanZ,T.uniforms.uPlayerX=Qn.uPlayerX,T.uniforms.uPlayerZ=Qn.uPlayerZ,T.uniforms.uPatchX={value:A},T.uniforms.uPatchZ={value:E},T.vertexShader=T.vertexShader.replace("#include <common>",`#include <common>
      attribute float bladeHeight;
      uniform float uTime;
      uniform float uWindAmp;
      uniform float uWindLeanX;
      uniform float uWindLeanZ;
      uniform float uPlayerX;
      uniform float uPlayerZ;
      uniform float uPatchX;
      uniform float uPatchZ;
      `),T.vertexShader=T.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
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
      `)};const b=new I(o,_);return b.position.set(i,0,t),ut.add(b),{mesh:b,geo:o,cx:i,cz:t}}function Lw(i,t){const e=new ae,n=new K({color:F.fern,emissive:F.fernGlow,emissiveIntensity:.08,roughness:.7,side:Ut}),s=3+Math.floor(w()*2),o=.5+w()*.7,r=new K({color:1708552,roughness:.95}),a=new I(new Q(.06,5,3),r);a.scale.set(1.5,.5,1.5),a.position.y=.02,e.add(a);for(let m=0;m<3;m++){const S=w()*6.28,v=new I(new vt(.003,.002,.08,3),r);v.position.set(Math.cos(S)*.06,.01,Math.sin(S)*.06),v.rotation.z=(S<3.14?1:-1)*1.2,v.rotation.y=S,e.add(v)}for(let m=0;m<s;m++){const S=m/s*6.28+w()*.3,v=new I(new vt(.004,.006,.55,3),new K({color:1721632,roughness:.8}));v.position.set(Math.cos(S)*.15,.25,Math.sin(S)*.15),v.rotation.y=-S,v.rotation.x=-.6-w()*.4,e.add(v);const _=new I(new Me(.12,.6,1,3),n);_.position.set(Math.cos(S)*.15,.25,Math.sin(S)*.15),_.rotation.y=-S,_.rotation.x=-.6-w()*.4,e.add(_);for(let E=0;E<6;E++){const b=new I(new Me(.07,.06,1,1),n),T=.06+E*.08,y=E%2===0?1:-1;b.position.set(Math.cos(S)*(.15+.06),T,Math.sin(S)*(.15+.06*y)),b.rotation.y=-S,b.rotation.x=-.8,b.rotation.z=y*.5,e.add(b)}const A=new K({color:8939042,emissive:4469521,emissiveIntensity:.1});for(let E=0;E<3;E++){const b=new I(new Q(.008,3,3),A),T=.12+E*.12;b.position.set(Math.cos(S)*(.15+.02),T-.01,Math.sin(S)*(.15+.02)),e.add(b)}}const c=new K({color:F.fernGlow,emissive:F.fernGlow,emissiveIntensity:.3}),l=new I(new Q(.04,4,3),c);l.position.y=.35,e.add(l);const u=new I(new vt(.006,.003,.06,3),c);u.position.set(.02,.37,0),u.rotation.z=-.8,e.add(u);const h=new K({color:15663103,emissive:8960989,emissiveIntensity:.1,transparent:!0,opacity:.5,roughness:0,metalness:.5});for(let m=0;m<3;m++){const S=w()*6.28,v=w()*.2,_=new I(new Q(.006+w()*.005,3,3),h);_.position.set(Math.cos(S)*v,.12+w()*.2,Math.sin(S)*v),e.add(_)}const f=new K({color:3811856,roughness:.9,side:Ut,transparent:!0,opacity:.6}),p=new I(new Me(.1,.4,1,2),f),g=w()*6.28;p.position.set(Math.cos(g)*.12,.05,Math.sin(g)*.12),p.rotation.x=-1.3,p.rotation.y=g,e.add(p);const x=new j({color:2768928,transparent:!0,opacity:.3});for(let m=0;m<4;m++){const S=new I(new vt(.001,.001,.015,3),x);S.position.set((w()-.5)*.08,.08+w()*.15,(w()-.5)*.08),S.rotation.z=(w()-.5)*1.5,e.add(S)}const d=new K({color:1708552,roughness:.95});for(let m=0;m<3;m++){const S=new I(new Q(.006,3,3),d);S.position.set((w()-.5)*.1,.005,(w()-.5)*.1),e.add(S)}return e.scale.setScalar(o),e.position.set(i,0,t),ut.add(e),{group:e,phase:w()*6.28}}function Dw(i,t){const e=new ae,n=.25+w()*.4,s=new K({color:F.flowerStem,roughness:.8}),o=new I(new vt(.01,.015,n,4),s);o.position.y=n/2,e.add(o);for(let T=0;T<2;T++){const y=new I(new ni(.004,.012,3),s);y.position.set(.012,n*.25+T*n*.25,0),y.rotation.z=-1.2,e.add(y)}const r=new K({color:F.fern,roughness:.7,side:Ut}),a=new I(new Me(.06,.04),r);a.position.set(.03,n*.3,0),a.rotation.z=-.5,e.add(a);const c=new I(new Me(.05,.035),r);c.position.set(-.025,n*.5,.01),c.rotation.z=.6,e.add(c);const l=new K({color:1728560,roughness:.7,side:Ut});for(let T=0;T<5;T++){const y=T/5*6.28+.3,M=new I(new Me(.025,.02),l);M.position.set(Math.cos(y)*.025,n-.005,Math.sin(y)*.025),M.rotation.x=-1.2,M.rotation.y=-y,e.add(M)}const u=new K({color:F.flower,emissive:F.flowerGlow,emissiveIntensity:.4+w()*.4,transparent:!0,opacity:.85,side:Ut});for(let T=0;T<6;T++){const y=T/6*6.28,M=new I(new Me(.05,.04),u);M.position.set(Math.cos(y)*.03,n+.01,Math.sin(y)*.03),M.rotation.x=-.8,M.rotation.y=-y,e.add(M)}const h=new K({color:16777215,emissive:F.flowerGlow,emissiveIntensity:1.2}),f=new I(new Q(.02,4,3),h);f.position.y=n+.02,e.add(f);const p=new j({color:16777130,transparent:!0,opacity:.7}),g=new j({color:16772676});for(let T=0;T<3;T++){const y=T/3*6.28+.5,M=new I(new vt(.002,.002,.025,3),p);M.position.set(Math.cos(y)*.012,n+.03,Math.sin(y)*.012),e.add(M);const R=new I(new Q(.005,3,3),g);R.position.set(Math.cos(y)*.012,n+.045,Math.sin(y)*.012),e.add(R)}const x=new j({color:16777164,transparent:!0,opacity:.3});for(let T=0;T<2;T++){const y=new I(new Q(.006,3,3),x);y.position.set((w()-.5)*.04,n+.06+w()*.04,(w()-.5)*.04),e.add(y)}const d=new K({color:16772778,emissive:16768324,emissiveIntensity:.2,transparent:!0,opacity:.5,roughness:0,metalness:.4}),m=new I(new Q(.006,3,3),d);m.position.set(.005,n+.005,.005),e.add(m);const S=new j({color:15662984}),v=new I(new vt(.002,.002,.03,3),S);v.position.y=n+.035,e.add(v);const _=new I(new Q(.005,3,3),S);_.position.y=n+.055,e.add(_);const A=new K({color:1725728,roughness:.7}),E=new I(new vt(.015,.02,.02,5),A);E.position.y=n-.01,e.add(E);const b=new j({color:16777215,transparent:!0,opacity:.35});for(let T=0;T<4;T++){const y=T/4*6.28+.3,M=new I(new Q(.004,3,3),b);M.position.set(Math.cos(y)*.045,n+.005,Math.sin(y)*.045),e.add(M)}return e.position.set(i,0,t),ut.add(e),{group:e,petalMat:u,phase:w()*6.28,baseH:n}}function Uw(i,t){const e=new ae,n=new K({color:F.reed,emissive:F.reedTip,emissiveIntensity:.05,roughness:.7}),s=new K({color:F.reedTip,emissive:F.reedTip,emissiveIntensity:.15}),o=new K({color:1709328,roughness:.95}),r=new I(new Q(.08,5,3),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=3+Math.floor(w()*4),c=new K({color:F.reed,roughness:.7,side:Ut});for(let p=0;p<a;p++){const g=.6+w()*1,x=(w()-.5)*.2,d=(w()-.5)*.2,m=new I(new vt(.008,.015,g,4),n);m.position.set(x,g/2,d),e.add(m);const S=2+Math.floor(w()*2),v=new K({color:2771488,roughness:.7});for(let E=0;E<S;E++){const b=g*.2+E*g*.25,T=new I(new Ae(.012,.004,4,6),v);T.position.set(x,b,d),T.rotation.x=Math.PI/2,e.add(T)}if(w()<.7){const E=.1+w()*.15,b=w()*6.28,T=new I(new Me(.02,E),c);T.position.set(x+Math.cos(b)*.02,g*.4,d+Math.sin(b)*.02),T.rotation.y=-b,T.rotation.x=-.5-w()*.4,e.add(T)}const _=new I(new Q(.025,4,3),s);_.scale.set(.8,1.5,.8),_.position.set(x,g+.02,d),e.add(_);const A=new j({color:F.reedTip,transparent:!0,opacity:.4});for(let E=0;E<3;E++){const b=E/3*6.28+w()*.5,T=new I(new vt(.002,.001,.04,3),A);T.position.set(x+Math.cos(b)*.015,g+.05,d+Math.sin(b)*.015),T.rotation.z=(w()-.5)*.4,e.add(T)}}e.position.set(i,0,t),ut.add(e);const l=new K({color:4864536,roughness:.9,side:Ut,transparent:!0,opacity:.5});for(let p=0;p<2;p++){w()*6.28;const g=(w()-.5)*.15,x=new I(new Me(.025,.02),l);x.position.set(g,.2+p*.25,(w()-.5)*.1),x.rotation.set(w()*.5,w(),w()*.5),e.add(x)}const u=new j({color:15654348,transparent:!0,opacity:.25});for(let p=0;p<3;p++){const g=new I(new Q(.005,3,3),u);g.position.set((w()-.5)*.15,.8+w()*.6,(w()-.5)*.15),e.add(g)}const h=new K({color:2241312,roughness:.9,transparent:!0,opacity:.2}),f=new I(new Ae(.1,.008,4,8),h);return f.rotation.x=Math.PI/2,f.position.y=.03,e.add(f),{group:e,phase:w()*6.28,swayAmp:.03+w()*.04}}let xn=null;const Ho=[],un=new le,Gc=new ot,U0=new ot(F.dandSeed);function Nw(i){const t=new j({color:16777215,transparent:!0,opacity:1});xn=new ei(In.dandSeed,t,i),xn.instanceMatrix.setUsage(xe),xn.instanceColor=new Ei(new Float32Array(i*3),3),xn.instanceColor.setUsage(xe),un.scale.setScalar(0),un.updateMatrix();for(let e=0;e<i;e++)xn.setMatrixAt(e,un.matrix),Gc.copy(U0),xn.setColorAt(e,Gc),Ho.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,drift:0});xn.count=i,xn.frustumCulled=!1,ut.add(xn)}function N0(i,t,e){let n=null;for(let o=0;o<Ho.length;o++)if(!Ho[o].active){n=Ho[o];break}if(!n)return;n.x=i+(Math.random()-.5)*.1,n.y=t,n.z=e+(Math.random()-.5)*.1;const s=Math.random()*6.28;n.vx=Math.cos(s)*.5+Math.random()*.3,n.vy=.6+Math.random()*.8,n.vz=Math.sin(s)*.5,n.life=4+Math.random()*5,n.max=n.life,n.active=!0,n.drift=Math.random()*6.28}let z0=0,F0=0,O0=0;function zw(i,t,e){z0=i,F0=t,O0=e}function Fw(i,t){let e=!1;for(let n=0;n<Ho.length;n++){const s=Ho[n];if(!s.active){un.position.set(0,-100,0),un.scale.setScalar(0),un.updateMatrix(),xn.setMatrixAt(n,un.matrix);continue}if(s.life-=i,s.life<=0){s.active=!1,un.position.set(0,-100,0),un.scale.setScalar(0),un.updateMatrix(),xn.setMatrixAt(n,un.matrix);continue}s.drift+=(Math.random()-.5)*1.5*i,s.vx+=Math.sin(s.drift)*.3*i,s.vz+=Math.cos(s.drift)*.2*i,s.vx+=z0*.5*i,s.vz+=F0*.5*i,s.vy+=(.15+O0*.1-s.vy)*i*.5,s.vx*=.998,s.vy*=.998,s.vz*=.998,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i;const r=s.life/s.max*.7*(.6+Math.sin(t*2+n)*.4),a=.8+Math.sin(t*3+n*.5)*.3;un.position.set(s.x,s.y,s.z),un.scale.setScalar(a),un.updateMatrix(),xn.setMatrixAt(n,un.matrix),Gc.copy(U0).multiplyScalar(r),xn.setColorAt(n,Gc),e=!0}xn.instanceMatrix.needsUpdate=!0,e&&(xn.instanceColor.needsUpdate=!0)}function Ow(i,t){const e=new ae,n=.35+w()*.45,s=new K({color:2777128,roughness:.7,side:Ut}),o=3+Math.floor(w()*2);for(let v=0;v<o;v++){const _=v/o*6.28+w()*.3,A=new I(new Me(.08,.035),s);A.position.set(Math.cos(_)*.05,.02,Math.sin(_)*.05),A.rotation.x=-1.4,A.rotation.y=-_,e.add(A)}const r=new K({color:F.dandStem,roughness:.8}),a=new I(new vt(.008,.012,n,4),r);a.position.y=n/2,e.add(a);const c=new j({color:14540236,transparent:!0,opacity:.3});for(let v=0;v<4;v++){const _=n*.2+v*n*.18,A=new I(new vt(.002,.001,.02,3),c);A.position.set(.01,_,0),A.rotation.z=-.8,e.add(A)}const l=new K({color:F.fern,roughness:.7,side:Ut}),u=new I(new Me(.07,.03),l);u.position.set(.03,n*.15,0),u.rotation.z=-.4,e.add(u);const h=new K({color:F.dandHead,emissive:F.dandSeedGlow,emissiveIntensity:.2,transparent:!0,opacity:.85}),f=new I(new Q(.07,6,5),h);f.position.y=n+.05,e.add(f);const p=new K({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.5,roughness:0,metalness:.5}),g=new I(new Q(.012,4,3),p);g.position.set(.04,n+.07,.03),e.add(g);const x=new j({color:F.dandSeed,transparent:!0,opacity:.7});for(let v=0;v<8;v++){const _=v/8*6.28+w()*.2,A=new I(new ni(.015,.05,3),x);A.position.set(Math.cos(_)*.06,n+.05+w()*.04,Math.sin(_)*.06),A.rotation.x=(w()-.5)*.6,A.rotation.z=(w()-.5)*.6,e.add(A);const E=new j({color:16777215,transparent:!0,opacity:.3}),b=new I(new vt(.001,.001,.03,3),E);b.position.set(Math.cos(_)*.08,n+.08,Math.sin(_)*.08),b.rotation.set((w()-.5)*.5,0,(w()-.5)*.5),e.add(b);const T=new j({color:15658717,transparent:!0,opacity:.15});for(let y=0;y<2;y++){const M=_+(y-.5)*.5,R=new I(new vt(8e-4,8e-4,.025,3),T);R.position.set(Math.cos(M)*.075,n+.09,Math.sin(M)*.075),R.rotation.set((w()-.5)*.8,0,(w()-.5)*.8),e.add(R)}}const d=new K({color:3811856,roughness:.9});for(let v=0;v<4;v++){const _=v/4*6.28+w()*.5,A=new I(new Q(.005,3,3),d);A.scale.set(.6,1.5,.6),A.position.set(Math.cos(_)*.04,n+.04,Math.sin(_)*.04),e.add(A)}const m=new j({color:1716240,transparent:!0,opacity:.15});for(let v=0;v<3;v++){const _=v/3*6.28,A=new I(new vt(.001,.001,n*.7,3),m);A.position.set(Math.cos(_)*.01,n*.35,Math.sin(_)*.01),e.add(A)}const S=new j({color:13426107,transparent:!0,opacity:.2});for(let v=0;v<5;v++){const _=n*.1+w()*n*.7,A=w()*6.28,E=new I(new vt(8e-4,8e-4,.012,3),S);E.position.set(Math.cos(A)*.012,_,Math.sin(A)*.012),E.rotation.z=A<3.14?-.8:.8,E.rotation.y=A,e.add(E)}return e.position.set(i,0,t),ut.add(e),{group:e,headMat:h,x:i,z:t,h:n,dispersed:!1,phase:w()*6.28,seedCount:8,regrowTimer:0}}function Bw(i,t,e,n){for(let s=0;s<i.length;s++){const o=i[s];if(o.dispersed){if(o.regrowTimer-=t,o.regrowTimer<=0){o.dispersed=!1;for(let r=2;r<o.group.children.length;r++)o.group.children[r].visible=!0}o.group.rotation.z=Math.sin(e*.9+o.phase)*.02}else{const r=o.x-n.x,a=o.z-n.z;if(r*r+a*a<1.2){o.dispersed=!0;for(let c=0;c<8;c++)N0(o.x,o.h+.05,o.z);for(let c=2;c<o.group.children.length;c++)o.group.children[c].visible=!1;o.regrowTimer=15+Math.random()*10}else o.group.rotation.z=Math.sin(e*.9+o.phase)*.04,o.headMat.emissiveIntensity=.15+Math.sin(e*1.2+o.phase)*.1}}}function Gw(i,t){const e=new ae,n=1+w()*.8,s=.25+w()*.15,o=new K({color:F.thornStem,roughness:.8,emissive:662032,emissiveIntensity:.1}),r=new I(new vt(.04,.07,n,5),o);r.position.y=n/2,e.add(r);const a=new K({color:F.thornSpike,roughness:.6}),c=4+Math.floor(w()*3);for(let _=0;_<c;_++){const A=n*.15+_/c*n*.6,E=_/c*6.28+w()*1,b=new I(new ni(.015,.08+w()*.04,3),a);b.position.set(Math.cos(E)*.06,A,Math.sin(E)*.06),b.rotation.z=(E<3.14?1.3:-1.3)+w()*.2,b.rotation.y=E,e.add(b)}const l=new K({color:F.thornOrb,emissive:F.thornOrbGlow,emissiveIntensity:.8,transparent:!0,opacity:.35,roughness:.1,metalness:.3}),u=new I(new Q(s,12,10),l);u.position.y=n+s*.5,e.add(u);const h=new K({color:16777164,emissive:F.thornOrbGlow,emissiveIntensity:1.2,transparent:!0,opacity:.6,roughness:0,metalness:.1}),f=new I(new Q(s*.35,8,6),h);f.position.y=n+s*.5,e.add(f);const p=new j({color:F.thornOrbGlow,transparent:!0,opacity:.06,blending:ce,depthWrite:!1}),g=new I(new Q(s*2,8,6),p);g.position.y=n+s*.5,e.add(g);const x=new K({color:F.thornSpike,emissive:F.thornOrbGlow,emissiveIntensity:.3,roughness:.5}),d=6+Math.floor(w()*3);for(let _=0;_<d;_++){const A=_/d*6.28+w()*.3,E=(w()-.5)*1.2,b=.3+w()*.3,T=new I(new ni(.018,b,4),x);T.position.set(Math.cos(A)*s*.8,n+s*.5+Math.sin(E)*s*.5,Math.sin(A)*s*.8),T.rotation.z=-E+(A<3.14?1.4:-1.4),T.rotation.y=A,e.add(T)}const m=new K({color:F.thornPetal,emissive:3344920,emissiveIntensity:.15,transparent:!0,opacity:.7,roughness:.6,side:Ut}),S=4+Math.floor(w()*2);for(let _=0;_<S;_++){const A=_/S*6.28+w()*.3,E=.2+w()*.15,b=new I(new Me(E,E*1.5),m);b.position.set(Math.cos(A)*(s+.05),n+s*.3-w()*.1,Math.sin(A)*(s+.05)),b.rotation.y=-A,b.rotation.x=-.4-w()*.3,e.add(b)}const v=new K({color:1718296,emissive:662026,emissiveIntensity:.05,side:Ut});for(let _=0;_<2;_++){const A=w()*6.28,E=new I(new Me(.15,.25),v);E.position.set(Math.cos(A)*.12,n*.3,Math.sin(A)*.12),E.rotation.y=-A,E.rotation.x=-.8,e.add(E)}return e.position.set(i,0,t),ut.add(e),{group:e,orbMat:l,hazeMat:p,phase:w()*6.28,x:i,z:t}}function kw(i,t){const e=new ae,n=2+Math.floor(w()*2),s=new K({color:1710128,roughness:.85,emissive:F.helixStem,emissiveIntensity:.1}),o=new I(new Q(.18,8,6),s);o.scale.set(1.2,.5,1.2),o.position.y=.05,e.add(o);const r=[];for(let l=0;l<n;l++){const u=1.5+w()*1,h=.15+w()*.15,f=1.5+w()*1.5,p=w()*6.28,g=[],x=16;for(let D=0;D<=x;D++){const L=D/x,N=p+L*f*6.28,k=h*(.3+L*.7);g.push(new z(Math.cos(N)*k,L*u,Math.sin(N)*k))}const d=new oa(g),m=new K({color:F.helixStem,emissive:F.helixNode,emissiveIntensity:.12,roughness:.7}),S=new I(new An(d,20,.025+w()*.01,5,!1),m);e.add(S);const v=.1+w()*.08,A=w()<.5?new Mf(v,0):new xf(v,0),E=new K({color:F.helixPod,emissive:F.helixPodGlow,emissiveIntensity:.5+w()*.3,transparent:!0,opacity:.65,roughness:.2,metalness:.2}),b=new I(A,E),T=d.getPoint(1);b.position.copy(T),b.rotation.set(w()*3,w()*3,w()*3),e.add(b),r.push(E);const y=new I(new Q(v*2.5,6,4),new j({color:F.helixPodGlow,transparent:!0,opacity:.05,blending:ce,depthWrite:!1}));y.position.copy(T),e.add(y);const M=1+Math.floor(w()*2);for(let D=0;D<M;D++){const L=.3+w()*.5,N=d.getPoint(L),k=new K({color:F.helixRing,emissive:F.helixPodGlow,emissiveIntensity:.2,transparent:!0,opacity:.45,roughness:.3}),B=new I(new Ae(.1+w()*.08,.008,6,12),k);B.position.copy(N),B.rotation.set(w()*3,w()*3,w()*3),e.add(B)}const R=2+Math.floor(w()*2);for(let D=0;D<R;D++){const L=.2+D/R*.6,N=d.getPoint(L),k=new K({color:F.helixNode,emissive:F.helixPodGlow,emissiveIntensity:.35,transparent:!0,opacity:.5}),B=new I(new Q(.025+w()*.015,5,4),k);B.position.copy(N),e.add(B)}}const a=new K({color:F.helixStem,emissive:F.helixNode,emissiveIntensity:.06,roughness:.8}),c=2+Math.floor(w()*2);for(let l=0;l<c;l++){const u=l/c*6.28+w()*.5,h=.3+w()*.4,f=new I(new vt(.006,.015,h,3),a);f.position.set(Math.cos(u)*.12,h*.3,Math.sin(u)*.12),f.rotation.z=(u<3.14?.8:-.8)+w()*.3,f.rotation.y=u,e.add(f)}return e.position.set(i,0,t),ut.add(e),{group:e,podMats:r,phase:w()*6.28}}function Hw(i,t){const e=new ae,n=.25+w()*.1,s=new K({color:1718309,roughness:.85,emissive:662032,emissiveIntensity:.06});for(let f=0;f<3;f++){const p=f/3*6.28+w()*.5,g=new I(new vt(.01,.035,.25+w()*.15,4),s);g.position.set(Math.cos(p)*n*.6,.06,Math.sin(p)*n*.6),g.rotation.z=p<3.14?1:-1,g.rotation.y=p,e.add(g)}const o=new K({color:F.snapBody,emissive:F.snapBodyGlow,emissiveIntensity:.4,transparent:!0,opacity:.7,roughness:.4,metalness:.1}),r=new I(new Q(n,10,8),o);r.position.y=n+.05,r.scale.set(1,.85,1),e.add(r);const a=new K({color:1730116,emissive:F.snapBodyGlow,emissiveIntensity:.25,transparent:!0,opacity:.6}),c=new I(new Ae(n*.45,.02,6,12),a);c.position.y=n*1.7,c.rotation.x=Math.PI/2,e.add(c);const l=5+Math.floor(w()*3),u=[],h=[];for(let f=0;f<l;f++){const p=f/l*6.28+w()*.3,g=w()*6.28,x=3+Math.floor(w()*2),d=.2+w()*.1,m=[],S=new le;S.position.set(Math.cos(p)*n*.6,n*1.4,Math.sin(p)*n*.6),S.rotation.y=p,e.add(S);let v=S;for(let b=0;b<x;b++){const T=b/x,y=.02*(1-T*.6),M=new K({color:F.snapFrond,emissive:F.snapBodyGlow,emissiveIntensity:.08+T*.15,roughness:.6}),R=new I(new vt(y*.7,y,d,4),M);R.position.y=b===0?0:d,R.geometry.translate(0,d/2,0),v.add(R),m.push(R),v=R}const _=new K({color:F.snapTip,emissive:F.snapTipGlow,emissiveIntensity:.6,transparent:!0,opacity:.7,roughness:.2}),A=new I(new Q(.025+w()*.015,5,4),_);A.position.y=d,v.add(A),h.push(_);const E=new I(new Q(.06,4,3),new j({color:F.snapTipGlow,transparent:!0,opacity:.04,blending:ce,depthWrite:!1}));A.add(E),u.push({segments:m,baseAngle:p,phaseOffset:g,segLen:d})}return e.position.set(i,0,t),ut.add(e),{group:e,body:r,bodyMat:o,tipMats:h,fronds:u,phase:w()*6.28,x:i,z:t}}function Vw(i,t,e,n){for(let s=0;s<i.length;s++){const o=i[s],r=Math.sin(e*1.5+o.phase)*.08;o.body.scale.set(1+r,.85+r*.5,1+r),o.bodyMat.emissiveIntensity=(.3+Math.sin(e*2+o.phase)*.15)*n;for(let a=0;a<o.fronds.length;a++){const c=o.fronds[a],l=1.2+a%3*.3;for(let u=0;u<c.segments.length;u++){const h=c.segments[u],f=.15+u*.12,p=Math.sin(e*l+c.phaseOffset+u*.5)*f,g=Math.cos(e*l*.7+c.phaseOffset+u*.3)*f*.6;h.rotation.z=p,h.rotation.x=g}}for(let a=0;a<o.tipMats.length;a++){const c=Math.sin(e*2.5+o.phase+a*1.2)*.5+.5;o.tipMats[a].emissiveIntensity=(.4+c*.4)*n}}}function Ww(i,t,e){const n=new ae,s=new K({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:.8,transparent:!0,opacity:.5,roughness:.2,metalness:.1,side:Ut}),o=new I(new Q(.5,8,6,0,6.28,0,Math.PI/2),s);o.scale.set(1,.6,1),o.position.y=0,n.add(o);const r=new K({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:1,transparent:!0,opacity:.6}),a=new I(new Ae(.48,.025,5,12),r);a.rotation.x=Math.PI/2,a.position.y=-.02,n.add(a);const c=new I(new Q(.2,6,4),new j({color:F.jellyGlow,transparent:!0,opacity:.7}));c.position.y=-.05,n.add(c);const l=new j({color:12312063,transparent:!0,opacity:.3});for(let S=-1;S<=1;S+=2){const v=new I(new Q(.06,4,3),l);v.scale.set(.6,1.5,.6),v.position.set(S*.08,-.03,0),n.add(v)}const u=new j({color:15663103,transparent:!0,opacity:.7});for(let S=0;S<5;S++){const v=w()*6.28,_=w()*.8,A=new I(new Q(.02,3,3),u);A.position.set(Math.cos(v)*_*.35,.1-_*.15,Math.sin(v)*_*.35),n.add(A)}const h=new K({color:F.jellyTent,emissive:F.jellyGlow,emissiveIntensity:.4,transparent:!0,opacity:.4}),f=new j({color:F.jellyGlow,transparent:!0,opacity:.6});for(let S=0;S<6;S++){const v=S/6*6.28,_=.4+w()*.6,A=new I(new vt(.015,.008,_,3),h);A.position.set(Math.cos(v)*.25,-_/2-.05,Math.sin(v)*.25),n.add(A);const E=new I(new Q(.012,3,3),f);E.position.set(Math.cos(v)*.25,-_-.06,Math.sin(v)*.25),n.add(E)}const p=new j({color:F.jellyGlow,transparent:!0,opacity:.12});for(let S=0;S<8;S++){const v=S/8*6.28,_=new I(new vt(.002,.002,.4,3),p);_.position.set(Math.cos(v)*.2,.05,Math.sin(v)*.2),_.rotation.z=Math.PI/2-.3,_.rotation.y=-v,n.add(_)}const g=new K({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:.6,transparent:!0,opacity:.4});for(let S=0;S<10;S++){const v=S/10*6.28,_=new I(new Q(.02,3,3),g);_.scale.set(1,.5,.8),_.position.set(Math.cos(v)*.46,-.04,Math.sin(v)*.46),n.add(_)}const x=new K({color:F.jellyTent,emissive:F.jellyGlow,emissiveIntensity:.5,transparent:!0,opacity:.35}),d=new I(new vt(.02,.01,.35,4),x);d.position.y=-.2,n.add(d);const m=new j({color:14548991,transparent:!0,opacity:.4});for(let S=0;S<3;S++){const v=S/3*6.28,_=new I(new Q(.008,3,3),m);_.position.set(Math.cos(v)*.25,-.55-w()*.3,Math.sin(v)*.25),n.add(_)}return n.position.set(i,t,e),ut.add(n),{group:n,bellMat:s,phase:w()*6.28,driftAng:w()*6.28,homeX:i,homeZ:e,floatY:t,wobble:.5+w()*.5,_init:!0,_state:"drift",_stT:20+Math.random()*30,_migrateAng:0,_pulseSync:0}}function Xw(i,t){const e=new ae,n=new K({color:F.puffBody,emissive:F.puffGlow,emissiveIntensity:.3,roughness:.8}),s=new I(new Q(.3,8,6),n);s.position.y=.35,e.add(s);const o=new K({color:16773344,emissive:F.puffGlow,emissiveIntensity:.15,roughness:.9}),r=new I(new Q(.18,6,4),o);r.scale.set(.7,.9,.3),r.position.set(0,.32,.2),e.add(r);const a=new I(new Q(.22,7,5),n);a.position.y=.65,e.add(a);const c=[];for(let A=-1;A<=1;A+=2){const E=new I(new ni(.06,.15,4),n);E.position.set(A*.13,.85,0),E.rotation.z=A*.3,e.add(E),c.push({mesh:E,side:A,baseRotZ:A*.3});const b=new I(new ni(.03,.08,4),new K({color:F.puffCheek,emissive:F.puffCheek,emissiveIntensity:.2}));b.position.set(A*.13,.84,.01),b.rotation.z=A*.3,e.add(b),c.push({mesh:b,side:A,baseRotZ:A*.3})}const l=new j({color:F.puffEye}),u=[];for(let A=-1;A<=1;A+=2){const E=new I(new Q(.035,4,4),l);E.position.set(A*.09,.68,.18),e.add(E),u.push(E);const b=new j({color:16777215}),T=new I(new Q(.012,3,3),b);T.position.set(A*.09+A*.015,.695,.2),e.add(T),u.push(T)}const h=new j({color:4469555}),f=new I(new Q(.015,3,3),h);f.position.set(0,.63,.22),e.add(f);const p=new K({color:F.puffCheek,emissive:F.puffCheek,emissiveIntensity:.3});for(let A=-1;A<=1;A+=2){const E=new I(new Q(.04,4,3),p);E.position.set(A*.15,.61,.15),e.add(E)}const g=new j({color:15654348,transparent:!0,opacity:.5});for(let A=-1;A<=1;A+=2)for(let E=0;E<2;E++){const b=new I(new vt(.002,.002,.06,3),g);b.position.set(A*.12,.62-E*.03,.2),b.rotation.z=A*.7+E*A*.2,b.rotation.x=-.1,e.add(b)}for(let A=-1;A<=1;A+=2){const E=new I(new Q(.07,4,3),n);E.position.set(A*.12,.07,.05),E.scale.set(1,.5,1.3),e.add(E);const b=new K({color:16755370,emissive:16746632,emissiveIntensity:.1});for(let T=0;T<3;T++){const y=T/3*6.28,M=new I(new Q(.012,3,3),b);M.position.set(A*.12+Math.cos(y)*.03,.03,.05+Math.sin(y)*.03),e.add(M)}}const x=new K({color:16777215,emissive:F.puffGlow,emissiveIntensity:.4,roughness:.9}),d=new I(new Q(.06,5,4),x);d.position.set(0,.38,-.28),e.add(d);const m=new K({color:F.puffBody,emissive:F.puffGlow,emissiveIntensity:.2,roughness:1});for(let A=0;A<6;A++){const E=w()*6.28,b=w()*1.2,T=new I(new Q(.01,3,3),m);T.position.set(Math.cos(E)*.28,.25+b*.2,Math.sin(E)*.28),e.add(T)}const S=new j({color:F.puffBody});for(let A=-1;A<=1;A+=2){const E=new I(new vt(.003,.003,.04,3),S);E.position.set(A*.09,.72,.17),E.rotation.z=A*.3,e.add(E)}const v=new j({color:5583684,transparent:!0,opacity:.5}),_=new I(new vt(.002,.002,.03,3),v);return _.position.set(0,.59,.22),_.rotation.z=Math.PI/2,e.add(_),e.position.set(i,0,t),ut.add(e),{group:e,ears:c,eyes:u,tail:d,phase:w()*6.28,wanderAng:w()*6.28,speed:.6+w()*.8,hopTimer:0,hopPhase:w()*6.28,homeX:i,homeZ:t,state:"idle",idleTimer:w()*3,_init:!0,_followT:0,_scaredT:0,_huddleTarget:-1,_baseY:0,_lastTX:i,_lastTZ:t,_blinkTimer:2+Math.random()*4,_blinkState:0}}function qw(i,t){const e=new ae,n=new K({color:F.deerBody,emissive:F.deerGlow,emissiveIntensity:.5,transparent:!0,opacity:.7,roughness:.3}),s=new I(new Q(.4,7,5),n);s.scale.set(1,.8,1.5),s.position.y=.9,e.add(s);const o=new K({color:13431039,emissive:F.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.5}),r=new I(new Q(.15,5,4),o);r.scale.set(.8,.6,.5),r.position.set(0,.78,.25),e.add(r);const a=new ae;a.position.set(0,1.15,.3);const c=new I(new vt(.08,.12,.4,5),n);c.position.set(0,.1,.08),c.rotation.x=-.4,a.add(c);const l=new I(new Q(.14,6,5),n);l.position.set(0,.22,.2),a.add(l);const u=new I(new Q(.07,4,3),n);u.scale.set(1,.7,1.4),u.position.set(0,.17,.35),a.add(u);const h=new j({color:2245717}),f=new I(new Q(.02,3,3),h);f.position.set(0,.17,.43),a.add(f);const p=new j({color:F.deerEye});for(let M=-1;M<=1;M+=2){const R=new I(new Q(.025,4,3),p);R.position.set(M*.09,.25,.28),a.add(R);const D=new I(new Q(.008,3,3),new j({color:16777215}));D.position.set(M*.085,.26,.29),a.add(D);const L=new j({color:F.deerBody,transparent:!0,opacity:.5}),N=new I(new vt(.002,.002,.03,3),L);N.position.set(M*.1,.27,.28),N.rotation.z=M*.6,a.add(N)}for(let M=-1;M<=1;M+=2){const R=new I(new ni(.04,.14,4),n);R.position.set(M*.1,.37,.15),R.rotation.z=M*.4,a.add(R)}const g=new K({color:F.deerAntler,emissive:F.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.8});for(let M=-1;M<=1;M+=2){const R=new I(new vt(.015,.02,.25,3),g);R.position.set(M*.08,.42,.12),R.rotation.z=M*.5,a.add(R);const D=new I(new vt(.01,.015,.15,3),g);D.position.set(M*.15,.55,.1),D.rotation.z=M*.8,a.add(D);const L=new I(new vt(.008,.012,.1,3),g);L.position.set(M*.11,.5,.16),L.rotation.z=M*.3,L.rotation.x=-.5,a.add(L);const N=new I(new Q(.012,3,3),new j({color:F.deerGlow,transparent:!0,opacity:.8}));N.position.set(M*.18,.61,.09),a.add(N)}const x=new K({color:F.deerBody,emissive:F.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),d=new I(new vt(.01,.02,.1,3),x);d.position.set(0,.11,.28),d.rotation.x=.3,a.add(d);const m=new j({color:1122850});for(let M=-1;M<=1;M+=2){const R=new I(new Q(.006,3,3),m);R.position.set(M*.02,.16,.42),a.add(R)}e.add(a);const S=[{x:-.15,z:.3,label:"FL"},{x:.15,z:.3,label:"FR"},{x:-.15,z:-.3,label:"BL"},{x:.15,z:-.3,label:"BR"}],v=new K({color:6715272,emissive:F.deerGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),_=[];for(let M=0;M<4;M++){const R=S[M],D=new ae;D.position.set(R.x,.65,R.z);const L=new I(new vt(.025,.035,.35,4),n);L.position.y=-.175,D.add(L);const N=new ae;N.position.set(0,-.35,0);const k=new I(new vt(.02,.03,.3,4),n);k.position.y=-.15,N.add(k);const B=new I(new vt(.04,.032,.04,4),v);B.position.y=-.3,N.add(B);const Y=new K({color:14544639,emissive:F.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),W=new I(new Q(.025,3,3),Y);W.scale.set(1.3,.5,1.3),W.position.y=-.25,N.add(W),D.add(N),e.add(D),_.push({upper:D,lower:N,isFront:M<2,side:R.x<0?-1:1})}const A=new ae;A.position.set(0,1.1,-.55);const E=new I(new ni(.05,.15,4),new K({color:16777215,emissive:F.deerGlow,emissiveIntensity:1,transparent:!0,opacity:.8}));A.add(E),e.add(A);const b=new j({color:13434862,transparent:!0,opacity:.3});for(let M=0;M<4;M++){const R=new I(new Q(.02,3,3),b);R.position.set((w()-.5)*.25,.8+w()*.3,(w()-.5)*.4),e.add(R)}const T=new j({color:F.deerBody,transparent:!0,opacity:.15});for(let M=0;M<3;M++){const R=new I(new vt(.002,.002,.2,3),T);R.position.set(.3,.85-M*.06,0),R.rotation.z=Math.PI/2+.3,e.add(R)}const y=new K({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.4,roughness:0,metalness:.5});for(let M=0;M<3;M++){const R=new I(new Q(.008,3,3),y);R.position.set((w()-.5)*.3,.9+w()*.3,(w()-.5)*.35),e.add(R)}return e.position.set(i,0,t),ut.add(e),{group:e,mat:n,phase:w()*6.28,wanderAng:w()*6.28,speed:.6+w()*.4,walkTimer:0,legCycle:0,homeX:i,homeZ:t,state:"walk",pauseTimer:0,neckPivot:a,legPivots:_,tailPivot:A,fleeTimer:0,headLook:0,headBob:0,_init:!0,_stT:0,_drinkTgt:null,_zigTimer:0,_zigDir:1,_baseY:0,_lastTX:i,_lastTZ:t}}function Yw(i,t,e){const n=new ae,s=new K({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.3,roughness:.7}),o=new I(new vt(.04,.05,.3,5),s);o.rotation.x=Math.PI/2,n.add(o);const r=new K({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.5,roughness:.6});for(let d=0;d<3;d++){const m=new I(new Ae(.045,.006,4,8),r);m.position.z=-.05+d*.06,m.rotation.x=0,n.add(m)}const a=new I(new Q(.05,5,4),s);a.position.z=.18,n.add(a);const c=new K({color:1122867,roughness:.2,metalness:.4});for(let d=-1;d<=1;d+=2){const m=new I(new Q(.018,4,3),c);m.position.set(d*.03,.01,.21),n.add(m)}for(let d=-1;d<=1;d+=2){const m=new I(new vt(.005,.005,.15,3),s);m.position.set(d*.03,.03,.22),m.rotation.x=-.6,m.rotation.z=d*.4,n.add(m);const S=new j({color:F.mothGlow,transparent:!0,opacity:.7}),v=new I(new Q(.015,3,3),S);v.scale.set(2,.5,1),v.position.set(d*.05,.12,.28),n.add(v)}const l=new K({color:F.mothWing,emissive:F.mothGlow,emissiveIntensity:.8,transparent:!0,opacity:.6,side:Ut,roughness:.4});n._wingPivots=[];for(let d=-1;d<=1;d+=2){const m=new ae;m.position.set(d*.04,0,.02);const S=new I(new Q(.2,6,4),l);S.scale.set(1.8,.08,1.2),S.position.set(d*.18,0,.02),m.add(S);const v=new I(new Q(.12,5,3),l);v.scale.set(1.5,.06,1),v.position.set(d*.12,0,-.1),m.add(v);const _=new K({color:F.mothWing,emissive:F.mothGlow,emissiveIntensity:.6,transparent:!0,opacity:.45,side:Ut}),A=new I(new Me(.03,.12),_);A.position.set(d*.1,0,-.18),A.rotation.y=d*.2,m.add(A);const E=new j({color:F.mothSpot,transparent:!0,opacity:.9}),b=new I(new Q(.03,4,3),E);b.position.set(d*.2,.02,.03),m.add(b);const T=new I(new Q(.018,3,3),E);T.position.set(d*.1,.02,-.08),m.add(T);const y=new j({color:F.mothGlow,transparent:!0,opacity:.25});for(let M=0;M<2;M++){const R=new I(new vt(.002,.002,.2,3),y);R.position.set(d*.15,.01,-.02+M*.06),R.rotation.z=Math.PI/2+d*(.15+M*.15),m.add(R)}n.add(m),n._wingPivots.push({pivot:m,side:d})}const u=new j({color:F.mothGlow,transparent:!0,opacity:.25});for(let d=0;d<3;d++){const m=new I(new Q(.008,3,3),u);m.position.set((w()-.5)*.04,0,-.15-d*.05),n.add(m)}const h=new j({color:4473907,transparent:!0,opacity:.5}),f=new I(new Ae(.015,.003,4,8,Math.PI*1.5),h);f.position.set(0,-.02,.2),f.rotation.x=.4,n.add(f);const p=new K({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.4,roughness:1});for(let d=0;d<5;d++){const m=w()*6.28,S=new I(new Q(.008,3,3),p);S.position.set(Math.cos(m)*.04,Math.sin(m)*.04,w()*.15-.05),n.add(S)}const g=new j({color:F.mothBody,transparent:!0,opacity:.4});for(let d=-1;d<=1;d+=2)for(let m=0;m<3;m++){const S=new I(new vt(.002,.002,.06,3),g);S.position.set(d*.04,-.03,-.05+m*.06),S.rotation.z=d*.8,S.rotation.x=-.3,n.add(S)}const x=new j({color:F.mothGlow,transparent:!0,opacity:.35});for(let d=-1;d<=1;d+=2)for(let m=0;m<5;m++){const S=m/5*Math.PI-Math.PI/2,v=new I(new Q(.006,3,3),x);v.position.set(d*(.3+Math.cos(S)*.05),Math.sin(S)*.02,.02+m*.04),n.add(v)}return n.position.set(i,t,e),ut.add(n),{group:n,wingMat:l,phase:w()*6.28,orbitAng:w()*6.28,orbitR:2+w()*4,centerX:i,centerZ:e,floatY:t,flapSpeed:6+w()*4,_init:!0,_state:"patrol",_stT:0,_attractTarget:null,_restTree:null}}function Zw(i,t,e){const n=new ae,s=new j({color:F.wispCore}),o=new I(new Q(.08,6,4),s);n.add(o);const r=new j({color:16777215,transparent:!0,opacity:.7,wireframe:!0}),a=new I(new ks(.06,0),r);n.add(a);const c=new j({color:F.wispGlow,transparent:!0,opacity:.5}),l=new I(new Q(.18,6,4),c);n.add(l);const u=new j({color:F.wispGlow,transparent:!0,opacity:.25}),h=new I(new Ae(.22,.008,4,12),u);h.rotation.x=Math.PI/2,n.add(h);const f=new j({color:F.wispTrail,transparent:!0,opacity:.15}),p=new I(new Q(.35,5,4),f);n.add(p);const g=new j({color:16777215,transparent:!0,opacity:.8}),x=new I(new Q(.02,3,3),g);x.position.set(.15,0,0),n.add(x);const d=[];for(let b=0;b<3;b++){const T=new j({color:F.wispCore,transparent:!0,opacity:.35}),y=new I(new Q(.01,3,3),T);y.position.set((w()-.5)*.1,-.1-b*.08,(w()-.5)*.1),n.add(y),d.push(y)}const m=new j({color:F.wispGlow,transparent:!0,opacity:.18}),S=[];for(let b=0;b<3;b++){const T=b/3*6.28+w()*.5,y=.15+w()*.1,M=new I(new vt(.003,.001,y,3),m);M.position.set(Math.cos(T)*.1,w()*.08,Math.sin(T)*.1),M.rotation.z=Math.PI/3*(T<3.14?1:-1),M.rotation.y=T,n.add(M),S.push({mesh:M,baseAng:T})}const v=new j({color:F.wispGlow,transparent:!0,opacity:.12}),_=new I(new Ae(.26,.005,4,10),v);_.rotation.x=1.2,_.rotation.z=.8,n.add(_);const A=new j({color:16777215,transparent:!0,opacity:.5});for(let b=0;b<4;b++){const T=w()*6.28,y=w()*.8,M=new I(new Q(.006,3,3),A);M.position.set(Math.cos(T)*.06,Math.sin(y)*.06,Math.sin(T)*.06),n.add(M)}const E=new j({color:F.wispCore,transparent:!0,opacity:.2});for(let b=0;b<4;b++){const T=new I(new Q(.004,3,3),E);T.position.set(.03+w()*.04,-.05-b*.04,w()*.04),n.add(T)}return n.scale.setScalar(.5),n.position.set(i,t,e),ut.add(n),{group:n,glowMat:c,hazeMat:f,embers:d,tendrils:S,plasmaMat:m,facet:a,halo:h,halo2:_,phase:w()*6.28,targetX:i,targetY:t,targetZ:e,velX:0,velY:0,velZ:0,scatter:0}}function $w(i,t){const e=new ae,n=uh,s=8+Math.floor(w()*5),o=new K({color:F.fairyMush,emissive:F.fairyGlow,emissiveIntensity:.2,roughness:.5}),r=new K({color:F.mushStem,roughness:.7,emissive:F.fairyGlow,emissiveIntensity:.05});for(let A=0;A<s;A++){const E=A/s*6.28+w()*.15,b=n+w()*.3-.15,T=.15+w()*.2,y=new I(In.mushStem,r);y.scale.setScalar(T),y.position.set(Math.cos(E)*b,T*.3,Math.sin(E)*b),e.add(y);const M=new I(In.mushCap,o);M.scale.set(T,T*.4,T),M.position.set(Math.cos(E)*b,T*.55,Math.sin(E)*b),e.add(M);const R=new j({color:16777215,transparent:!0,opacity:.7}),D=new I(new Q(T*.08,3,3),R);D.position.set(Math.cos(E)*b,T*.6,Math.sin(E)*b),e.add(D)}const a=new K({color:8934792,emissive:F.fairyGlow,emissiveIntensity:.1,roughness:.6});for(let A=0;A<5;A++){const E=w()*6.28,b=n+w()*.6-.3,T=.06+w()*.06,y=new I(In.mushCap,a);y.scale.set(T,T*.5,T),y.position.set(Math.cos(E)*b,T*.35,Math.sin(E)*b),e.add(y)}const c=new K({color:1725733,emissive:664080,emissiveIntensity:.05,roughness:.9});for(let A=0;A<4;A++){const E=w()*6.28,b=w()*n*.8,T=new I(new Q(.08+w()*.08,4,3),c);T.scale.set(1.5,.2,1.5),T.position.set(Math.cos(E)*b,.01,Math.sin(E)*b),e.add(T)}const l=new K({color:4478310,emissive:F.fairyGlow,emissiveIntensity:.05,roughness:.85}),u=new I(new Q(.12,5,3),l);u.scale.set(1.2,.3,1),u.position.y=.03,e.add(u);const h=new j({color:F.fairyGlow,transparent:!0,opacity:.2}),f=[];for(let A=0;A<8;A++){const E=new I(new Q(.012,3,3),h),b=(w()-.5)*n*.8,T=(w()-.5)*n*.8;E.position.set(b,.05+w()*.3,T),e.add(E),f.push({mesh:E,baseX:b,baseZ:T,drift:w()*6.28,speed:.2+w()*.3})}const p=new j({color:F.fairyRing,transparent:!0,opacity:0,side:Ut}),g=new I(new ir(.3,n-.3,16),p);g.rotation.x=-Math.PI/2,g.position.y=.02,e.add(g);const x=new j({color:F.fairyGlow,transparent:!0,opacity:.08});for(let A=0;A<6;A++){const E=w()*6.28,b=E+.5+w()*1.5,T=n*.6+w()*n*.4,y=new I(new vt(.002,.002,T,3),x);y.position.set(Math.cos((E+b)/2)*n*.4,.005,Math.sin((E+b)/2)*n*.4),y.rotation.x=Math.PI/2,y.rotation.z=E,e.add(y)}const d=new K({color:4864560,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<3;A++){const E=w()*6.28,b=w()*n*.7,T=new I(new Q(.03,4,3),d);T.scale.set(1.3,.3,1.3),T.position.set(Math.cos(E)*b,.008,Math.sin(E)*b),e.add(T)}const m=new K({color:7833702,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<2;A++){const E=new I(new $e(.02+w()*.02,4),m);E.position.set((w()-.5)*.08,.06,(w()-.5)*.06),E.rotation.x=-Math.PI/2+w()*.4,e.add(E)}const S=[];for(let A=0;A<5;A++){const E=w()*6.28,b=w()*n*.9,T=new j({color:8978346,transparent:!0,opacity:.25}),y=new I(new Q(.005,3,3),T);y.position.set(Math.cos(E)*b,.01,Math.sin(E)*b),e.add(y),S.push(y)}const v=new j({color:657926,transparent:!0,opacity:.15,side:Ut}),_=new I(new ir(n*.5,n*.85,12),v);return _.rotation.x=-Math.PI/2,_.position.y=.008,e.add(_),e.position.set(i,0,t),ut.add(e),{group:e,mushMat:o,discMat:p,sporeMat:h,spores:f,glowWorms:S,x:i,z:t,ringR:n,phase:w()*6.28,glowIntensity:0,active:!1}}function jw(i,t,e){const n=new ae,s=new K({color:F.bubbleIris,emissive:F.bubbleIris,emissiveIntensity:.15,transparent:!0,opacity:.25,roughness:0,metalness:.6}),o=new I(In.bubble,s);n.add(o);const r=new j({color:15650047,transparent:!0,opacity:.1}),a=new I(new Ae(.13,.003,4,10),r);a.rotation.x=.5,a.rotation.y=w()*3,n.add(a);const c=new I(new Ae(.11,.003,4,10),r);c.rotation.x=-.8,c.rotation.z=1.2,n.add(c);const l=new j({color:F.bubbleShine,transparent:!0,opacity:.5}),u=new I(new Q(.04,4,3),l);u.position.set(.05,.07,.08),n.add(u);const h=new j({color:15658751,transparent:!0,opacity:.2}),f=new I(new Q(.025,3,3),h);f.position.set(-.06,-.04,-.06),n.add(f);const p=new j({color:16755438,transparent:!0,opacity:.12}),g=new I(new Q(.06,4,3),p);g.position.set(.02,-.02,.01),n.add(g);const x=new j({color:16772863,transparent:!0,opacity:.08}),d=new I(new Q(.12,5,4),x);n.add(d);const m=[16764125,13426175,14548940];for(let T=0;T<3;T++){const y=new j({color:m[T],transparent:!0,opacity:.06}),M=new I(new Ae(.14-T*.02,.002,4,8),y);M.position.y=-.04+T*.04,M.rotation.x=Math.PI/2,n.add(M)}const S=new j({color:16777215,transparent:!0,opacity:.6});for(let T=0;T<3;T++){const y=w()*6.28,M=w()*Math.PI-Math.PI/2,R=new I(new Q(.003,3,3),S);R.position.set(Math.cos(y)*Math.cos(M)*.14,Math.sin(M)*.14,Math.sin(y)*Math.cos(M)*.14),n.add(R)}const v=new j({color:11189196,transparent:!0,opacity:.1}),_=new I(new Q(.015,3,3),v);_.position.set((w()-.5)*.04,(w()-.5)*.04,(w()-.5)*.04),n.add(_);const A=new j({color:F.bubbleIris,transparent:!0,opacity:.15}),E=new I(new Q(.04,4,3),A);E.scale.set(1.3,.6,1.3),E.position.y=-.12,n.add(E);const b=.6+w()*.8;return n.scale.setScalar(b),n.position.set(i,t,e),ut.add(n),{group:n,shellMat:s,phase:w()*6.28,driftAng:w()*6.28,driftSpeed:.3+w()*.5,floatY:t,homeX:i,homeZ:e,bobAmp:.3+w()*.4,popped:!1,popTimer:0,sc:b}}function Jw(i,t){const e=new ae,n=1.5+w()*1,s=new K({color:329746,roughness:.9}),o=new I(new $e(n*.85,10),s);o.rotation.x=-Math.PI/2,o.position.y=.005,e.add(o);const r=new K({color:F.pondWater,emissive:F.pondGlow,emissiveIntensity:.2,transparent:!0,opacity:.55,roughness:.05,metalness:.4}),a=new I(new $e(n,12),r);a.rotation.x=-Math.PI/2,a.position.y=.03,e.add(a);const c=new K({color:3816002,roughness:.85}),l=5+Math.floor(w()*4);for(let L=0;L<l;L++){const N=L/l*6.28+w()*.3,k=n+w()*.2-.1,B=.06+w()*.08,Y=new I(new Q(B,4,3),c);Y.scale.set(1+w()*.5,.4+w()*.3,1+w()*.5),Y.position.set(Math.cos(N)*k,B*.2,Math.sin(N)*k),Y.rotation.set(w(),w(),w()),e.add(Y)}const u=new K({color:1725728,roughness:.7,side:Ut});for(let L=0;L<3;L++){const N=w()*6.28,k=n*.85+w()*.2;for(let B=0;B<3;B++){const Y=new I(new Me(.015,.15+w()*.1),u);Y.position.set(Math.cos(N)*k+(w()-.5)*.05,.08,Math.sin(N)*k+(w()-.5)*.05),Y.rotation.y=w()*3,Y.rotation.x=-.2,e.add(Y)}}const h=new j({color:11197934,transparent:!0,opacity:.08}),f=[];for(let L=0;L<3;L++){const N=new I(new Ae(1,.004,4,20),h.clone());N.rotation.x=Math.PI/2,N.position.y=.036,e.add(N),f.push({mesh:N,phase:L/3})}const p=new K({color:F.lilyPad,roughness:.6,side:Ut}),g=4+Math.floor(w()*2),x=[];for(let L=0;L<g;L++){const N=w()*6.28,k=w()*n*.6,B=.15+w()*.15,Y=new I(new $e(B,8),p);Y.rotation.x=-Math.PI/2,Y.position.set(Math.cos(N)*k,.05,Math.sin(N)*k),e.add(Y);const W=new j({color:1724448,transparent:!0,opacity:.3}),at=new I(new vt(.002,.002,B*1.5,3),W);at.position.set(Math.cos(N)*k,.052,Math.sin(N)*k),at.rotation.x=Math.PI/2,at.rotation.z=w()*3,e.add(at),x.push({mesh:Y,phase:w()*6.28})}const d=new K({color:F.lilyFlower,emissive:F.lilyGlow,emissiveIntensity:.4,transparent:!0,opacity:.85,side:Ut}),m=.08;for(let L=0;L<6;L++){const N=L/6*6.28,k=new I(new Me(.06,.05),d);k.position.set(x[0].mesh.position.x+Math.cos(N)*.05,m,x[0].mesh.position.z+Math.sin(N)*.05),k.rotation.x=-1,k.rotation.y=-N,e.add(k)}const S=new K({color:16777130,emissive:F.lilyGlow,emissiveIntensity:.8}),v=new I(new Q(.025,4,3),S);if(v.position.set(x[0].mesh.position.x,m+.02,x[0].mesh.position.z),e.add(v),x.length>2){const L=new K({color:F.lilyFlower,emissive:F.lilyGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),N=new I(new Q(.03,5,4),L);N.scale.set(.8,1.2,.8),N.position.set(x[2].mesh.position.x,.09,x[2].mesh.position.z),e.add(N)}const _=new K({color:3815477,roughness:.8,transparent:!0,opacity:.5});for(let L=0;L<5;L++){const N=w()*6.28,k=w()*n*.7,B=new I(new Q(.02+w()*.025,4,3),_);B.scale.set(1+w()*.5,.4,1+w()*.5),B.position.set(Math.cos(N)*k,.015,Math.sin(N)*k),e.add(B)}const A=new j({color:2761752,transparent:!0,opacity:.12,side:Ut});for(let L=0;L<3;L++){const N=w()*6.28,k=w()*n*.5,B=new I(new $e(.08+w()*.06,5),A);B.rotation.x=-Math.PI/2,B.position.set(Math.cos(N)*k,.012,Math.sin(N)*k),e.add(B)}const E=new K({color:1122837,roughness:.7,transparent:!0,opacity:.4}),b=[];for(let L=0;L<2;L++){const N=w()*6.28,k=w()*n*.4,B=new I(new Q(.012,4,3),E);B.scale.set(.8,.5,1.3),B.position.set(Math.cos(N)*k,.04,Math.sin(N)*k),e.add(B);const Y=new I(new vt(.002,.001,.025,3),E);Y.position.set(Math.cos(N)*k-Math.cos(N)*.02,.04,Math.sin(N)*k-Math.sin(N)*.02),Y.rotation.z=Math.PI/2,Y.rotation.y=N,e.add(Y),b.push({body:B,tail:Y,ang:N,orbR:.15+w()*n*.35,speed:.3+w()*.4})}const T=new j({color:2250016,transparent:!0,opacity:.1,side:Ut});for(let L=0;L<3;L++){const N=w()*6.28,k=n*.7+w()*n*.25,B=new I(new $e(.06+w()*.04,5),T);B.rotation.x=-Math.PI/2,B.position.set(Math.cos(N)*k,.032,Math.sin(N)*k),e.add(B)}const y=new j({color:13426158,transparent:!0,opacity:.06}),M=new I(new Ae(n-.05,.01,4,16),y);M.rotation.x=Math.PI/2,M.position.y=.035,e.add(M);const R=new K({color:4861976,roughness:.8,side:Ut,transparent:!0,opacity:.6}),D=new I(new $e(.03,5),R);return D.rotation.x=-Math.PI/2,D.position.set((w()-.5)*n*.5,.04,(w()-.5)*n*.5),e.add(D),e.position.set(i,0,t),ut.add(e),{group:e,waterMat:r,flMat:d,pads:x,ripples:f,tadpoles:b,x:i,z:t,phase:w()*6.28,pondR:n}}function Kw(i,t){const e=new ae,n=new j({color:F.orbGold}),s=new I(new Q(.2,10,8),n);e.add(s);const o=new j({color:16777215}),r=new I(new Q(.06,6,4),o);e.add(r);const a=new j({color:16772744,transparent:!0,opacity:.4,wireframe:!0}),c=new I(new ks(.15,0),a);e.add(c);const l=new j({color:F.orbGlow,transparent:!0,opacity:.5}),u=new I(new Q(.35,8,6),l);e.add(u);const h=new j({color:F.orbGlow,transparent:!0,opacity:.3});for(let b=0;b<8;b++){const T=b/8*6.28,y=new I(new ni(.02,.25,3),h);y.position.set(Math.cos(T)*.3,Math.sin(T*2)*.05,Math.sin(T)*.3),y.rotation.z=-T+Math.PI/2,y.rotation.y=T,e.add(y)}const f=new j({color:F.orbInner,transparent:!0,opacity:.15}),p=new I(new Q(.6,8,5),f);e.add(p);for(let b=0;b<6;b++){const T=new I(new Q(.03,4,3),new j({color:16777215})),y=b/6*6.28;T.position.set(Math.cos(y)*.4,Math.sin(y*2)*.1,Math.sin(y)*.4),e.add(T)}const g=new j({color:F.orbGold,transparent:!0,opacity:.7});for(let b=0;b<4;b++){const T=b/4*6.28+.4,y=new I(new Q(.015,3,3),g);y.position.set(Math.cos(T)*.5,0,Math.sin(T)*.5),e.add(y)}const x=new j({color:16768426,transparent:!0,opacity:.12});for(let b=0;b<3;b++){const T=new I(new Ae(.28,.003,4,12),x);T.rotation.set(b*1.05,b*.7,0),e.add(T)}const d=new j({color:F.orbGlow,transparent:!0,opacity:.08}),m=new I(new Ae(.4,.004,4,16),d);m.rotation.x=Math.PI/2,e.add(m);const S=new j({color:16772812,transparent:!0,opacity:.15}),v=new I(new Ae(.25,.012,4,10),S);v.rotation.x=Math.PI/2,e.add(v);const _=new j({color:16777215,transparent:!0,opacity:.5});for(let b=0;b<6;b++){const T=w()*6.28,y=w()*Math.PI-Math.PI/2,M=new I(new Q(.008,3,3),_);M.position.set(Math.cos(T)*Math.cos(y)*.2,Math.sin(y)*.2,Math.sin(T)*Math.cos(y)*.2),e.add(M)}const A=new j({color:F.orbGlow,transparent:!0,opacity:.1,side:Ut}),E=new I(new $e(.5,8),A);return E.rotation.x=-Math.PI/2,E.position.y=-.95,e.add(E),e.position.set(i,1,t),ut.add(e),{group:e,coreMat:n,glowMat:l,hazeMat:f,x:i,z:t,found:!1,flyUp:!1,flyY:1,phase:w()*6.28,laserLine:null,laserMat:null}}function Qw(i,t){const e=new ae,n=new K({color:F.rockBase,roughness:.85,metalness:.05}),s=new K({color:F.rockLight,roughness:.8,metalness:.05}),o=new K({color:F.rockMoss,emissive:F.rockMoss,emissiveIntensity:.03,roughness:.9}),r=.3+w()*.5,a=new I(new Q(r,8,6),w()<.6?n:s),c=.4+w()*.4;a.scale.set(1+w()*.6,c,1+w()*.6),a.position.y=r*c*.35,a.rotation.set(w()*.5,w()*3,w()*.3),a.castShadow=!0,a.receiveShadow=!0,e.add(a);const l=1+Math.floor(w()*3);for(let E=0;E<l;E++){const b=w()*6.28,T=r*.6+w()*r*.5,y=r*.3+w()*r*.4,M=new I(new Q(y,5,4),w()<.5?n:s),R=.3+w()*.4;M.scale.set(1+w()*.5,R,1+w()*.5),M.position.set(Math.cos(b)*T,y*R*.3,Math.sin(b)*T),M.rotation.set(w()*.8,w()*3,w()*.5),e.add(M)}const u=2+Math.floor(w()*3);for(let E=0;E<u;E++){const b=w()*6.28,T=w()*r*.6,y=r*.15+w()*r*.2,M=new I(new Q(y,4,3),o);M.scale.set(1.5,.2,1.5),M.position.set(Math.cos(b)*T,r*.35+w()*.05,Math.sin(b)*T),e.add(M)}const h=[8943428,10061909,6715221,11180390];for(let E=0;E<3;E++){const b=new K({color:h[Math.floor(w()*h.length)],roughness:.9,transparent:!0,opacity:.5}),T=w()*6.28,y=new I(new Q(r*.06+w()*r*.08,3,3),b);y.scale.set(2,.15,2),y.position.set(Math.cos(T)*r*.5,r*.25+w()*.1,Math.sin(T)*r*.5),e.add(y)}const f=new j({color:1381656,transparent:!0,opacity:.35}),p=2+Math.floor(w()*3);for(let E=0;E<p;E++){const b=w()*6.28,T=r*.3+w()*r*.4,y=new I(new vt(.003,.001,T,3),f),M=r*.3+w()*r*.2;y.position.set(Math.cos(b)*M,r*.2+w()*r*.15,Math.sin(b)*M),y.rotation.set(w()*.5,b,Math.PI/2+w()*.4),e.add(y)}const g=new j({color:660752,transparent:!0,opacity:.2,side:Ut}),x=1+Math.floor(w()*2);for(let E=0;E<x;E++){const b=w()*6.28,T=r*.3+w()*r*.3,y=new I(new Me(.02+w()*.015,T),g);y.position.set(Math.cos(b)*r*.45,r*.15,Math.sin(b)*r*.45),y.rotation.y=-b,e.add(y)}const d=[],m=new j({color:8965375,transparent:!0,opacity:.4});if(w()<.5){const E=2+Math.floor(w()*3);for(let b=0;b<E;b++){const T=w()*6.28,y=r*.25+w()*r*.25,M=new I(new Q(.006,3,3),m);M.position.set(Math.cos(T)*y,r*.15+w()*r*.2,Math.sin(T)*y),e.add(M),d.push(M)}}const S=new j({color:657926,transparent:!0,opacity:.12,side:Ut}),v=new I(new ir(r*.5,r*1,8),S);v.rotation.x=-Math.PI/2,v.position.y=.005,e.add(v);const _=new K({color:3816e3,roughness:.9}),A=4+Math.floor(w()*3);for(let E=0;E<A;E++){const b=w()*6.28,T=r*.5+w()*r*.6,y=.03+w()*.05,M=new I(new Q(y,3,3),_);M.scale.set(1+w()*.5,.4,1+w()*.5),M.position.set(Math.cos(b)*T,y*.15,Math.sin(b)*T),e.add(M)}if(w()<.6){const E=new K({color:3385941,emissive:F.grassTip,emissiveIntensity:.05,roughness:.7,side:Ut});for(let b=0;b<3;b++){const T=w()*6.28,y=new I(new Me(.015,.08+w()*.06),E);y.position.set(Math.cos(T)*r*.3,r*.3,Math.sin(T)*r*.3),y.rotation.y=w()*3,y.rotation.x=-.2-w()*.3,e.add(y)}}return e.position.set(i,0,t),ut.add(e),{group:e,x:i,z:t,colR:r*.8,sparkles:d,sparkleMat:m}}let B0=null,G0=null,k0=null,H0=null,Ah=[];function tS(){return B0}function eS(){return G0}function nS(){return k0}function iS(){return H0}function sS(){return Ah}function oS(){const i=new ae,t=new K({color:F.obeliskBlack,roughness:.2,metalness:.8,emissive:F.obeliskPink,emissiveIntensity:0});G0=t;const e=new I(new vt(1.2,1.8,be,4),t);e.position.y=be/2,e.rotation.y=Math.PI/4,e.castShadow=!0,i.add(e);const n=new j({color:3351108,transparent:!0,opacity:.2});for(let T=0;T<4;T++){const y=T/4*6.28+Math.PI/4,M=new I(new vt(.03,.04,be*.9,3),n);M.position.set(Math.cos(y)*1.55,be*.45,Math.sin(y)*1.55),i.add(M)}const s=new j({color:F.obeliskPink,transparent:!0,opacity:0});for(let T=0;T<4;T++){const y=T/4*6.28+Math.PI/4;for(let R=0;R<3;R++){const D=6+R*4,L=new I(new vt(.015,.015,.8,3),s);L.position.set(Math.cos(y)*1.6,D,Math.sin(y)*1.6),L.rotation.z=Math.PI/2,L.rotation.y=-y,L.visible=!1,i.add(L)}const M=new I(new vt(.012,.012,2.5,3),s);M.position.set(Math.cos(y)*1.6,12,Math.sin(y)*1.6),M.visible=!1,i.add(M)}const o=new K({color:F.obeliskBlack,roughness:.1,metalness:.9,emissive:F.obeliskPink,emissiveIntensity:0});k0=o;const r=new I(new ni(1.3,3,4),o);r.position.y=be+1.5,r.rotation.y=Math.PI/4,i.add(r);const a=new j({color:F.obeliskPink,transparent:!0,opacity:0});for(let T=0;T<4;T++){const y=T/4*6.28+Math.PI/4,M=new I(new vt(.02,.02,3.2,3),a);M.position.set(Math.cos(y)*.8,be+1.5,Math.sin(y)*.8),M.rotation.z=.35*(y<3.14?1:-1),M.rotation.y=-y,M.visible=!1,i.add(M)}for(let T=0;T<5;T++){const y=new I(new Ae(1.85-T*.02,.04,6,4),new j({color:2236979}));y.position.y=4+T*5,y.rotation.x=Math.PI/2,i.add(y)}const c=new K({color:1118488,roughness:.3,metalness:.7}),l=new I(new vt(2.2,2.5,.6,4),c);l.position.y=.3,l.rotation.y=Math.PI/4,i.add(l);const u=new I(new vt(2.8,3,.4,4),c);u.position.y=.05,u.rotation.y=Math.PI/4,i.add(u);const h=new j({color:F.obeliskPink,transparent:!0,opacity:0});for(let T=0;T<8;T++){const y=T/8*6.28,M=new I(new Q(.06,4,3),h);M.position.set(Math.cos(y)*2.5,be*.7+T*.5,Math.sin(y)*2.5),M.visible=!1,i.add(M)}const f=new j({color:1710626,transparent:!0,opacity:.08});for(let T=0;T<6;T++){const y=w()*6.28,M=2+w()*be*.7,R=new I(new vt(.008,.008,.5+w()*.5,3),f);R.position.set(Math.cos(y)*1.6,M,Math.sin(y)*1.6),R.rotation.z=(w()-.5)*.8,R.rotation.y=-y,i.add(R)}const p=new K({color:921108,roughness:.5,metalness:.4});for(let T=0;T<12;T++){const y=w()*6.28,M=3+w()*2,R=.15+w()*.25,D=new I(new Q(R,4,3),p);D.scale.set(1+w()*.5,.3+w()*.3,1+w()*.5),D.position.set(Math.cos(y)*M,R*.15,Math.sin(y)*M),D.rotation.set(w(),w(),w()),i.add(D)}const g=new j({color:F.obeliskPink,transparent:!0,opacity:0});for(let T=0;T<4;T++){const y=T/4*6.28+Math.PI/4;for(let M=0;M<5;M++){const R=5+M*3.5+w()*.5,D=(w()-.5)*.4,L=new I(new Q(.04,4,3),g);L.position.set(Math.cos(y)*1.58+Math.cos(y+1.57)*D,R,Math.sin(y)*1.58+Math.sin(y+1.57)*D),L.visible=!1,i.add(L)}}const x=new j({color:F.obeliskPink,transparent:!0,opacity:.8,blending:ce,depthWrite:!1}),d=new I(new Q(.5,12,8),x);d.position.y=be+3,i.add(d);const m=new j({color:F.obeliskPink,transparent:!0,opacity:.2,blending:ce,depthWrite:!1}),S=new I(new Q(.9,8,6),m);S.position.y=be+3,i.add(S),H0={mesh:d,haze:S,mat:x,hazeMat:m},Ah=[];const v=[.8,1.1,1.4,1.8],_=[11158783,10040302,12277247,8921821];for(let T=0;T<4;T++){const y=new j({color:_[T],transparent:!0,opacity:.4,blending:ce,depthWrite:!1,side:Ut}),M=new I(new Ae(v[T],.02,6,24),y);M.position.y=be+3,M.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),i.add(M),Ah.push({mesh:M,mat:y,rx:(Math.random()-.5)*2,ry:(Math.random()-.5)*2,rz:(Math.random()-.5)*1.5})}const A=new j({color:0,transparent:!0,opacity:.15,side:Ut}),E=new I(new $e(4,8),A);E.rotation.x=-Math.PI/2,E.position.y=.005,i.add(E),i.position.set(0,-be,0),ut.add(i),B0=i;const b=new ur(8939212,0,30);i.add(b),b.position.set(0,be+1,0)}let V0=null,W0=null;function rS(){return V0}function aS(){return W0}function cS(){const i=new K({color:F.moatBlue,emissive:1136042,emissiveIntensity:.3,transparent:!0,opacity:0,roughness:.1,metalness:.3});W0=i;const t=new Uc;t.absarc(0,0,6,0,6.28,!1);const e=new Dc;e.absarc(0,0,3,0,6.28,!0),t.holes.push(e);const n=new jr(t,24),s=new I(n,i);s.rotation.x=-Math.PI/2,s.position.y=.05,s.visible=!1,ut.add(s),V0=s;const o=new j({color:4491468,transparent:!0,opacity:0});for(let p=0;p<12;p++){const g=p/12*6.28+w()*.3,x=3.5+w()*2,d=new I(new Q(.04+w()*.04,4,3),o);d.scale.set(1.2,.4,1.2),d.position.set(Math.cos(g)*x,.02,Math.sin(g)*x),d.visible=!1,ut.add(d)}const r=new j({color:13426158,transparent:!0,opacity:0,side:Ut});for(let p=0;p<6;p++){const g=p/6*6.28+w()*.5,x=new I(new $e(.12+w()*.1,5),r);x.rotation.x=-Math.PI/2,x.position.set(Math.cos(g)*3.3,.06,Math.sin(g)*3.3),x.visible=!1,ut.add(x)}const a=new j({color:8960989,transparent:!0,opacity:0});for(let p=0;p<8;p++){const g=p/8*6.28,x=4+w()*1.5,d=new I(new vt(.003,.003,.4,3),a);d.position.set(Math.cos(g)*x,.055,Math.sin(g)*x),d.rotation.x=Math.PI/2,d.rotation.z=g+Math.PI/2,d.visible=!1,ut.add(d)}const c=new j({color:264208,transparent:!0,opacity:0,side:Ut}),l=new Uc;l.absarc(0,0,5.2,0,6.28,!1);const u=new Dc;u.absarc(0,0,3.8,0,6.28,!0),l.holes.push(u);const h=new jr(l,16),f=new I(h,c);f.rotation.x=-Math.PI/2,f.position.y=.04,f.visible=!1,ut.add(f)}const ta=[];function lp(i,t,e,n,s){const o=[],r=[],a=[];for(let l=0;l<e;l++){const u=i[l],h=i[l+1],f=h.x-u.x;h.y-u.y;const p=h.z-u.z,g=Math.sqrt(f*f+p*p)||1,x=-p/g,d=f/g,m=(l+.5)/e,S=.7+Math.sin(m*Math.PI)*.5,v=t*S/2,_=[u.x+x*v,u.y,u.z+d*v],A=[u.x-x*v,u.y,u.z-d*v],E=[h.x+x*v,h.y,h.z+d*v],b=[h.x-x*v,h.y,h.z-d*v];o.push(..._,...E,...A,...A,...E,...b);const T=l/e,y=(l+1)/e;if(a.push(T,0,y,0,T,1,T,1,y,0,y,1),s){const D=.85+Math.sin(m*Math.PI*3)*.15,L=1.2*D,N=.6*D;r.push(s.r*L,s.g*L,s.b*L),r.push(s.r*L,s.g*L,s.b*L),r.push(s.r*N,s.g*N,s.b*N),r.push(s.r*N,s.g*N,s.b*N),r.push(s.r*L,s.g*L,s.b*L),r.push(s.r*N,s.g*N,s.b*N)}}const c=new we;return c.setAttribute("position",new Ht(o,3)),c.setAttribute("uv",new Ht(a,2)),r&&c.setAttribute("color",new Ht(r,3)),c.computeVertexNormals(),c}function lS(){for(let c=0;c<6;c++){const l=F.rainbow[c],u=c/6*6.28,h=6+c*.8,f=be+6+c*2.5,p=1-c*.05,g=[],x=32;for(let k=0;k<=x;k++){const B=k/x,Y=u+B*Math.PI,W=Math.cos(Y)*h,at=Math.sin(Y)*h,ft=Math.sin(B*Math.PI)*f;g.push(new z(W,ft,at))}const d=new ot(l),m=lp(g,p,x,!0,d),S=new j({vertexColors:!0,transparent:!0,opacity:0,side:Ut,depthWrite:!1,blending:ce}),v=new I(m,S);v.visible=!1,ut.add(v);const _=new oa(g),A=new j({color:16777215,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),E=new An(_,x,.03,4,!1),b=new I(E,A);b.visible=!1,ut.add(b);const T=[],y=new j({color:16777215,transparent:!0,opacity:0,blending:ce,depthWrite:!1});for(let k=0;k<8;k++){const B=new I(new Q(.06,4,3),y.clone());B.visible=!1,ut.add(B),T.push({mesh:B,mat:B.material,phase:k/8,speed:.15+Math.random()*.1})}const M=new j({color:l,transparent:!0,opacity:0,side:Ut,blending:ce}),R=g[0],D=g[g.length-1],L=new I(new $e(1.2,8),M);L.rotation.x=-Math.PI/2,L.position.set(R.x,.03,R.z),L.visible=!1,ut.add(L);const N=new I(new $e(1.2,8),M.clone());N.rotation.x=-Math.PI/2,N.position.set(D.x,.03,D.z),N.visible=!1,ut.add(N),ta.push({mesh:v,mat:S,coreLine:b,coreMat:A,curve:_,sparkles:T,pools:[L,N],poolMat:M,targetOpacity:0})}const i=[],t=10,e=be+14,n=32;for(let c=0;c<=n;c++){const l=c/n,u=l*Math.PI;i.push(new z(Math.cos(u)*t,Math.sin(l*Math.PI)*e,Math.sin(u)*t))}const s=new ot(15654399),o=lp(i,1.5,n,!0,s),r=new j({vertexColors:!0,transparent:!0,opacity:0,side:Ut,depthWrite:!1,blending:ce}),a=new I(o,r);a.visible=!1,ut.add(a),ta.push({mesh:a,mat:r,targetOpacity:0})}function uS(i){for(let t=0;t<ta.length;t++){const e=ta[t];if(!(!e.sparkles||!e.curve)&&e.mesh.visible){e.coreLine&&(e.coreLine.visible=e.mesh.visible,e.coreMat.opacity=e.mat.opacity*.4);for(let n=0;n<e.sparkles.length;n++){const s=e.sparkles[n];s.phase+=s.speed*.016,s.phase>1&&(s.phase-=1);const o=e.curve.getPoint(s.phase);s.mesh.position.copy(o),s.mesh.visible=e.mesh.visible;const r=Math.sin(i*8+n*2.1)*.5+.5;s.mat.opacity=e.mat.opacity*r*.7}if(e.pools)for(let n=0;n<e.pools.length;n++)e.pools[n].visible=e.mesh.visible,e.poolMat&&(e.poolMat.opacity=e.mat.opacity*.3)}}}let Mn=null;const di=[],hn=new le,Hr=new ot;function hS(i){const t=new j({color:16777215,transparent:!0,opacity:1});Mn=new ei(In.fly,t,i),Mn.instanceMatrix.setUsage(xe),Mn.instanceColor=new Ei(new Float32Array(i*3),3),Mn.instanceColor.setUsage(xe),hn.scale.setScalar(0),hn.updateMatrix();for(let e=0;e<i;e++){Mn.setMatrixAt(e,hn.matrix);const n=e%3===0?F.fireflyB:F.firefly;Hr.setHex(n),Mn.setColorAt(e,Hr),di.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,phase:Math.random()*6.28,wander:Math.random()*6.28,colorHex:n})}Mn.count=i,Mn.frustumCulled=!1,ut.add(Mn)}function dc(i,t,e,n){let s=null;for(let o=0;o<di.length;o++)if(!di[o].active){s=di[o];break}if(!s){let o=1/0;for(let r=0;r<di.length;r++)di[r].life<o&&(o=di[r].life,s=di[r])}s.x=i,s.y=t+.5+Math.random()*3,s.z=e,s.vx=(Math.random()-.5)*2,s.vy=Math.random()-.5,s.vz=(Math.random()-.5)*2,s.life=n,s.max=n,s.active=!0,s.wander=Math.random()*6.28}function X0(i,t){let e=0,n=!1;for(let s=0;s<di.length;s++){const o=di[s];if(!o.active){hn.position.set(0,-100,0),hn.scale.setScalar(0),hn.updateMatrix(),Mn.setMatrixAt(s,hn.matrix);continue}if(o.life-=i,o.life<=0){o.active=!1,hn.position.set(0,-100,0),hn.scale.setScalar(0),hn.updateMatrix(),Mn.setMatrixAt(s,hn.matrix);continue}e++,o.wander+=(Math.random()-.5)*3*i,o.vx+=Math.cos(o.wander)*1.5*i,o.vz+=Math.sin(o.wander)*1.5*i,o.vy+=Math.sin(t*2+o.phase)*i,o.vx*=.995,o.vy*=.995,o.vz*=.995,o.x+=o.vx*i,o.y+=o.vy*i,o.z+=o.vz*i;const r=Yt(o.x,o.z)+.3;o.y<r&&(o.y=r,o.vy=Math.abs(o.vy)*.5),o.y>12&&(o.vy-=2*i);const a=Math.sin(t*3+o.phase)*.5+.5,l=o.life/o.max*(.4+a*.6),u=.6+a*.6;hn.position.set(o.x,o.y,o.z),hn.scale.setScalar(u),hn.updateMatrix(),Mn.setMatrixAt(s,hn.matrix),Hr.setHex(o.colorHex),Hr.multiplyScalar(l),Mn.setColorAt(s,Hr),n=!0}return Mn.instanceMatrix.needsUpdate=!0,n&&(Mn.instanceColor.needsUpdate=!0),e}let vn=null;const pi=[],fn=new le,kc=new ot,fS=new ot(F.spore);function dS(i){const t=new j({color:16777215,transparent:!0,opacity:1});vn=new ei(In.spore,t,i),vn.instanceMatrix.setUsage(xe),vn.instanceColor=new Ei(new Float32Array(i*3),3),vn.instanceColor.setUsage(xe),fn.scale.setScalar(0),fn.updateMatrix();for(let e=0;e<i;e++)vn.setMatrixAt(e,fn.matrix),kc.setHex(F.spore),vn.setColorAt(e,kc),pi.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});vn.count=i,vn.frustumCulled=!1,ut.add(vn)}function pS(i,t,e){let n=null;for(let s=0;s<pi.length;s++)if(!pi[s].active){n=pi[s];break}if(!n){let s=1/0;for(let o=0;o<pi.length;o++)pi[o].life<s&&(s=pi[o].life,n=pi[o])}n.x=i,n.y=t,n.z=e,n.vx=(Math.random()-.5)*.3,n.vy=.4+Math.random()*.4,n.vz=(Math.random()-.5)*.3,n.life=3+Math.random()*3,n.max=n.life,n.active=!0}let q0=0,Y0=0;function mS(i,t){q0=i,Y0=t}function gS(i){let t=0,e=!1;for(let n=0;n<pi.length;n++){const s=pi[n];if(!s.active){fn.position.set(0,-100,0),fn.scale.setScalar(0),fn.updateMatrix(),vn.setMatrixAt(n,fn.matrix);continue}if(s.life-=i,s.life<=0){s.active=!1,fn.position.set(0,-100,0),fn.scale.setScalar(0),fn.updateMatrix(),vn.setMatrixAt(n,fn.matrix);continue}t++,s.vy+=.3*i,s.vx+=q0*.3*i,s.vz+=Y0*.3*i,s.vx*=.997,s.vy*=.997,s.vz*=.997,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i;const o=s.life/s.max*.7;fn.position.set(s.x,s.y,s.z),fn.scale.setScalar(1),fn.updateMatrix(),vn.setMatrixAt(n,fn.matrix),kc.copy(fS).multiplyScalar(o),vn.setColorAt(n,kc),e=!0}return vn.instanceMatrix.needsUpdate=!0,e&&(vn.instanceColor.needsUpdate=!0),t}let _n=null;const Vo=[];let Kl=0;const dn=new le,Hc=new ot,Z0=new ot(F.starMote);function xS(i){const t=new j({color:16777215,transparent:!0,opacity:1});_n=new ei(In.starMote,t,i),_n.instanceMatrix.setUsage(xe),_n.instanceColor=new Ei(new Float32Array(i*3),3),_n.instanceColor.setUsage(xe),dn.scale.setScalar(0),dn.updateMatrix();for(let e=0;e<i;e++)_n.setMatrixAt(e,dn.matrix),Hc.copy(Z0),_n.setColorAt(e,Hc),Vo.push({x:0,y:0,z:0,life:0,max:0,active:!1,vy:0,drift:0});_n.count=i,_n.frustumCulled=!1,ut.add(_n)}function MS(i){let t=null;for(let e=0;e<Vo.length;e++)if(!Vo[e].active){t=Vo[e];break}t&&(t.x=i.x+(Math.random()-.5)*60,t.z=i.z+(Math.random()-.5)*60,t.y=15+Math.random()*20,t.life=6+Math.random()*6,t.max=t.life,t.active=!0,t.vy=-.15-Math.random()*.3,t.drift=Math.random()*6.28)}function $0(i,t,e){Kl+=i,Kl>.15&&(Kl=0,MS(e));let n=!1;for(let s=0;s<Vo.length;s++){const o=Vo[s];if(!o.active){dn.position.set(0,-100,0),dn.scale.setScalar(0),dn.updateMatrix(),_n.setMatrixAt(s,dn.matrix);continue}if(o.life-=i,o.life<=0||o.y<.5){o.active=!1,dn.position.set(0,-100,0),dn.scale.setScalar(0),dn.updateMatrix(),_n.setMatrixAt(s,dn.matrix);continue}o.y+=o.vy*i,o.drift+=(Math.random()-.5)*.5*i,o.x+=Math.sin(o.drift)*.1*i,o.z+=Math.cos(o.drift)*.08*i;const r=o.life/o.max,a=Math.sin(t*4+s)*.3+.7,c=r*a*.7,l=.5+a*.5;dn.position.set(o.x,o.y,o.z),dn.scale.setScalar(l),dn.updateMatrix(),_n.setMatrixAt(s,dn.matrix),Hc.copy(Z0).multiplyScalar(c),_n.setColorAt(s,Hc),n=!0}_n.instanceMatrix.needsUpdate=!0,n&&(_n.instanceColor.needsUpdate=!0)}let yn=null;const Wo=[],pn=new le,Vc=new ot,j0=new ot(8956535);function vS(i){const t=new j({color:16777215,transparent:!0,opacity:1});yn=new ei(In.dustMote,t,i),yn.instanceMatrix.setUsage(xe),yn.instanceColor=new Ei(new Float32Array(i*3),3),yn.instanceColor.setUsage(xe),pn.scale.setScalar(0),pn.updateMatrix();for(let e=0;e<i;e++)yn.setMatrixAt(e,pn.matrix),Vc.copy(j0),yn.setColorAt(e,Vc),Wo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});yn.count=i,yn.frustumCulled=!1,ut.add(yn)}function up(i,t,e){for(let n=0;n<e;n++){let s=null;for(let a=0;a<Wo.length;a++)if(!Wo[a].active){s=Wo[a];break}if(!s)continue;const o=Math.random()*6.28,r=1+Math.random()*2;s.x=i+Math.cos(o)*.2,s.y=Yt(i,t)+.1,s.z=t+Math.sin(o)*.2,s.vx=Math.cos(o)*r,s.vy=.5+Math.random()*1.5,s.vz=Math.sin(o)*r,s.life=.6+Math.random()*.6,s.max=s.life,s.active=!0}}function _S(i){let t=!1;for(let e=0;e<Wo.length;e++){const n=Wo[e];if(!n.active){pn.position.set(0,-100,0),pn.scale.setScalar(0),pn.updateMatrix(),yn.setMatrixAt(e,pn.matrix);continue}if(n.life-=i,n.life<=0){n.active=!1,pn.position.set(0,-100,0),pn.scale.setScalar(0),pn.updateMatrix(),yn.setMatrixAt(e,pn.matrix);continue}n.vy-=3*i,n.vx*=.96,n.vy*=.96,n.vz*=.96,n.x+=n.vx*i,n.y+=n.vy*i,n.z+=n.vz*i;const s=Yt(n.x,n.z)+.05;n.y<s&&(n.y=s,n.vy=0,n.vx*=.8,n.vz*=.8);const o=n.life/n.max*.4;pn.position.set(n.x,n.y,n.z),pn.scale.setScalar(1),pn.updateMatrix(),yn.setMatrixAt(e,pn.matrix),Vc.copy(j0).multiplyScalar(o),yn.setColorAt(e,Vc),t=!0}yn.instanceMatrix.needsUpdate=!0,t&&(yn.instanceColor.needsUpdate=!0)}let wn=null;const Xo=[],mn=new le,Wc=new ot,J0=new ot(F.bubblePop),yS=new Q(.02,3,3);function wS(i){const t=new j({color:16777215,transparent:!0,opacity:1});wn=new ei(yS,t,i),wn.instanceMatrix.setUsage(xe),wn.instanceColor=new Ei(new Float32Array(i*3),3),wn.instanceColor.setUsage(xe),mn.scale.setScalar(0),mn.updateMatrix();for(let e=0;e<i;e++)wn.setMatrixAt(e,mn.matrix),Wc.copy(J0),wn.setColorAt(e,Wc),Xo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});wn.count=i,wn.frustumCulled=!1,ut.add(wn)}function SS(i,t,e,n){for(let s=0;s<n;s++){let o=null;for(let l=0;l<Xo.length;l++)if(!Xo[l].active){o=Xo[l];break}if(!o)continue;const r=Math.random()*6.28,a=Math.random()*3.14,c=1+Math.random()*2;o.x=i,o.y=t,o.z=e,o.vx=Math.cos(r)*Math.sin(a)*c,o.vy=Math.cos(a)*c,o.vz=Math.sin(r)*Math.sin(a)*c,o.life=.4+Math.random()*.4,o.max=o.life,o.active=!0}}function bS(i){let t=!1;for(let e=0;e<Xo.length;e++){const n=Xo[e];if(!n.active){mn.position.set(0,-100,0),mn.scale.setScalar(0),mn.updateMatrix(),wn.setMatrixAt(e,mn.matrix);continue}if(n.life-=i,n.life<=0){n.active=!1,mn.position.set(0,-100,0),mn.scale.setScalar(0),mn.updateMatrix(),wn.setMatrixAt(e,mn.matrix);continue}n.vy-=2*i,n.vx*=.97,n.vy*=.97,n.vz*=.97,n.x+=n.vx*i,n.y+=n.vy*i,n.z+=n.vz*i;const s=n.life/n.max*.8;mn.position.set(n.x,n.y,n.z),mn.scale.setScalar(1),mn.updateMatrix(),wn.setMatrixAt(e,mn.matrix),Wc.copy(J0).multiplyScalar(s),wn.setColorAt(e,Wc),t=!0}wn.instanceMatrix.needsUpdate=!0,t&&(wn.instanceColor.needsUpdate=!0)}let Sn=null;const qo=[],tn=new le,Xc=new ot,K0=[new ot(F.leafGlow),new ot(3394662),new ot(2271880),new ot(5636044),new ot(4513262)];let Q0=0,tm=0;function TS(i,t,e){Q0=i,tm=t}function ES(i){const t=new Me(.12,.08),e=new j({color:16777215,transparent:!0,opacity:1,side:Ut,depthWrite:!1,blending:ce});Sn=new ei(t,e,i),Sn.instanceMatrix.setUsage(xe),Sn.instanceColor=new Ei(new Float32Array(i*3),3),Sn.instanceColor.setUsage(xe),tn.scale.setScalar(0),tn.updateMatrix();for(let n=0;n<i;n++)Sn.setMatrixAt(n,tn.matrix),Xc.setHex(0),Sn.setColorAt(n,Xc),qo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,rvx:0,rvy:0,rvz:0,life:0,max:0,active:!1,colorIdx:0});Sn.count=i,Sn.frustumCulled=!1,ut.add(Sn)}function AS(i,t,e){let n=null;for(let o=0;o<qo.length;o++)if(!qo[o].active){n=qo[o];break}if(!n)return;n.x=i+(Math.random()-.5)*2,n.y=t+Math.random()*2,n.z=e+(Math.random()-.5)*2;const s=Math.random()*6.28;n.vx=Math.cos(s)*.3,n.vy=-.2-Math.random()*.3,n.vz=Math.sin(s)*.3,n.rvx=(Math.random()-.5)*4,n.rvy=(Math.random()-.5)*3,n.rvz=(Math.random()-.5)*2,n.rx=Math.random()*6.28,n.ry=Math.random()*6.28,n.rz=Math.random()*6.28,n.life=4+Math.random()*4,n.max=n.life,n.active=!0,n.colorIdx=Math.floor(Math.random()*K0.length)}function RS(i,t){let e=!1;for(let n=0;n<qo.length;n++){const s=qo[n];if(!s.active){tn.position.set(0,-100,0),tn.scale.setScalar(0),tn.updateMatrix(),Sn.setMatrixAt(n,tn.matrix);continue}if(s.life-=i,s.life<=0||s.y<-.5){s.active=!1,tn.position.set(0,-100,0),tn.scale.setScalar(0),tn.updateMatrix(),Sn.setMatrixAt(n,tn.matrix);continue}s.vx+=Q0*.4*i,s.vz+=tm*.4*i,s.vx+=Math.sin(t*3+n*1.7)*.5*i,s.vz+=Math.cos(t*2.5+n*2.1)*.3*i,s.vy-=.3*i,s.vx*=.995,s.vy=Math.max(s.vy,-.8),s.vz*=.995,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i,s.rx+=s.rvx*i,s.ry+=s.rvy*i,s.rz+=s.rvz*i;const o=s.life/s.max,r=o*(.6+Math.sin(t*2+n*.8)*.4),a=.8+o*.4;tn.position.set(s.x,s.y,s.z),tn.rotation.set(s.rx,s.ry,s.rz),tn.scale.setScalar(a),tn.updateMatrix(),Sn.setMatrixAt(n,tn.matrix),Xc.copy(K0[s.colorIdx]).multiplyScalar(r),Sn.setColorAt(n,Xc),e=!0}Sn.instanceMatrix.needsUpdate=!0,e&&(Sn.instanceColor.needsUpdate=!0)}const ja=40,Rh=8;let en=null;const mi=[],On=new le,us=new ot,em=new ot(4513194);let hp=0,fp=0,Pf=!1;function CS(){const i=new Uc;return i.moveTo(0,-.18),i.quadraticCurveTo(.1,-.17,.11,-.06),i.lineTo(.1,-.02),i.lineTo(.13,.12),i.quadraticCurveTo(.125,.14,.11,.12),i.lineTo(.08,0),i.quadraticCurveTo(.05,-.02,.03,0),i.lineTo(.03,.05),i.lineTo(.02,.22),i.quadraticCurveTo(0,.245,-.02,.22),i.lineTo(-.03,.05),i.lineTo(-.03,0),i.quadraticCurveTo(-.05,-.02,-.08,0),i.lineTo(-.11,.12),i.quadraticCurveTo(-.125,.14,-.13,.12),i.lineTo(-.1,-.02),i.lineTo(-.11,-.06),i.quadraticCurveTo(-.1,-.17,0,-.18),new jr(i)}function PS(){const i=CS(),t=new j({color:16777215,transparent:!0,opacity:1,blending:ce,depthWrite:!1,side:Ut});en=new ei(i,t,ja),en.instanceMatrix.setUsage(xe),en.instanceColor=new Ei(new Float32Array(ja*3),3),en.instanceColor.setUsage(xe),On.position.set(0,-100,0),On.scale.setScalar(0),On.updateMatrix();for(let e=0;e<ja;e++)en.setMatrixAt(e,On.matrix),us.setScalar(0),en.setColorAt(e,us),mi.push({active:!1,life:0,maxLife:Rh,x:0,z:0});en.count=ja,en.frustumCulled=!1,ut.add(en),Pf=!0}function IS(i,t,e,n){if(!Pf)return;const s=i-hp,o=t-fp;if(s*s+o*o<(n?.25:.64))return;hp=i,fp=t;let c=null,l=-1;for(let d=0;d<mi.length;d++)if(!mi[d].active){c=mi[d],l=d;break}if(!c){let d=1/0;for(let m=0;m<mi.length;m++)mi[m].life<d&&(d=mi[m].life,c=mi[m],l=m)}const u=Yt(i,t);c.active=!0,c.life=Rh,c.maxLife=Rh,c.x=i,c.z=t;const h=l%2===0?1:-1,f=Math.sin(e+Math.PI/2)*.12*h,p=Math.cos(e+Math.PI/2)*.12*h,g=n?1.15:1;On.position.set(i+f,u+.015,t+p),On.rotation.set(-Math.PI/2,0,-e+(Math.random()-.5)*.15),On.scale.set(g,g,g),On.updateMatrix(),en.setMatrixAt(l,On.matrix);const x=n?.9:.6;us.copy(em).multiplyScalar(x),en.setColorAt(l,us)}function LS(i,t){if(!Pf)return;const e=1+(t||0)*1.5;let n=!1;for(let s=0;s<mi.length;s++){const o=mi[s];if(!o.active)continue;if(o.life-=i*e,o.life<=0){o.active=!1,On.position.set(0,-100,0),On.scale.setScalar(0),On.updateMatrix(),en.setMatrixAt(s,On.matrix),us.setScalar(0),en.setColorAt(s,us),n=!0;continue}const r=o.life/o.maxLife,a=r*r;us.copy(em).multiplyScalar(a*.6),en.setColorAt(s,us),n=!0}en.instanceMatrix.needsUpdate=!0,n&&(en.instanceColor.needsUpdate=!0)}const yi=[],Eo=[];let dp=be+2,os=1;function pp(i){os=i}function nm(i,t,e,n){const s=[];for(let r=0;r<=12;r++){const a=r/12,c=i*(1-a*a),l=t*(1-a*a),u=e+(n-e)*a;s.push(new z(c,u,l))}return{curve:new oa(s),pts:s}}function DS(i,t,e,n){const s=n||be+2,o=e+15,r=new gf(new z(i,e,t),new z(i,o,t)),a=new j({color:F.laserPink,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),c=new I(new An(r,1,.06,6,!1),a);ut.add(c);const l=new j({color:F.laserGlow,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),u=new I(new An(r,1,.2,6,!1),l);ut.add(u);const{curve:h}=nm(i,t,o,s),f=new j({color:F.laserPink,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),p=new I(new An(h,16,.05,6,!1),f);ut.add(p);const g=new j({color:F.laserGlow,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),x=new I(new An(h,16,.18,6,!1),g);ut.add(x);const d={upTube:c,upGlow:u,bendTube:p,bendGlow:x,mat:a,glowMat:l,bendMat:f,bendGlowMat:g,fromX:i,fromZ:t,floatY:e,skyY:o,tipY:s,animPhase:0,animTimer:0};yi.push(d);for(let m=0;m<yi.length-1;m++){const S=yi[m],v=(d.skyY+S.skyY)/2,_=[];for(let M=0;M<=8;M++){const R=M/8,D=d.fromX*(1-R)+S.fromX*R,L=d.fromZ*(1-R)+S.fromZ*R,N=v+Math.sin(R*Math.PI)*3;_.push(new z(D,N,L))}const A=new oa(_),E=new j({color:F.laserGlow,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),b=new I(new An(A,10,.03,4,!1),E);ut.add(b);const T=new j({color:F.laserPink,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),y=new I(new An(A,10,.1,4,!1),T);ut.add(y),Eo.push({tube:b,glow:y,mat:E,glowMat:T,opacity:0})}return d}function US(i){for(let t=0;t<yi.length;t++){const e=yi[t];e.tipY=i;const{curve:n}=nm(e.fromX,e.fromZ,e.skyY,i);ut.remove(e.bendTube),e.bendTube.geometry.dispose(),e.bendTube.geometry=new An(n,16,.05,6,!1),ut.add(e.bendTube),ut.remove(e.bendGlow),e.bendGlow.geometry.dispose(),e.bendGlow.geometry=new An(n,16,.18,6,!1),ut.add(e.bendGlow)}}function NS(i,t,e){const n=e||be+2;Math.abs(n-dp)>.1&&yi.length>0&&(US(n),dp=n);for(let s=0;s<yi.length;s++){const o=yi[s];if(o.animTimer+=i,o.animPhase===0){const r=Math.min(o.animTimer/.5,1);o.mat.opacity=r*.8,o.glowMat.opacity=r*.3,o.animTimer>.5&&(o.animPhase=1,o.animTimer=0)}else if(o.animPhase===1){const r=Math.min(o.animTimer/.8,1);o.bendMat.opacity=r*.7,o.bendGlowMat.opacity=r*.2,o.mat.opacity=.8,o.glowMat.opacity=.3,o.animTimer>.8&&(o.animPhase=2)}else{const r=Math.sin(t*3+s*1.2)*.5+.5;o.mat.opacity=.5+r*.4,o.glowMat.opacity=.15+r*.15,o.bendMat.opacity=.4+r*.3,o.bendGlowMat.opacity=.1+r*.12}}for(let s=0;s<Eo.length;s++){const o=Eo[s];o.opacity=Math.min(o.opacity+i*.5,.3);const r=Math.sin(t*2+s*.8)*.5+.5;o.mat.opacity=o.opacity*(.6+r*.4),o.glowMat.opacity=o.opacity*(.2+r*.15)}if(os<1){for(let s=0;s<yi.length;s++){const o=yi[s];o.mat.opacity*=os,o.glowMat.opacity*=os,o.bendMat.opacity*=os,o.bendGlowMat.opacity*=os}for(let s=0;s<Eo.length;s++)Eo[s].mat.opacity*=os,Eo[s].glowMat.opacity*=os}}const zS=new ot(F.orbGold),FS=new ot(16777215);let yo=0,Ze="SEEK",rs=-be,Qe=0,Dr=[],$n=null,Ps=null,Is=null,Ve=null,Ls=[],zi=null,Ch=null,jn=[],Ur=null,im=null,sm=null,Ph=null,Ih=null,Lh=null,Dh=null,pc=null,Uh=[],Nh=[],zh=[],Fh=[],Ao=[],Oh=[],Ro=null,mp=0,Zn=0,wo=[],Do=null,gp=!1;const Uo=200;let Kn=null;const If=[];let om=!1;function OS(){if(Kn)return;const i=new we,t=new Float32Array(Uo*3),e=new Float32Array(Uo*3),n=new Float32Array(Uo);i.setAttribute("position",new Ue(t,3)),i.setAttribute("color",new Ue(e,3)),i.setAttribute("size",new Ue(n,1)),i.attributes.position.setUsage(xe),i.attributes.color.setUsage(xe),i.attributes.size.setUsage(xe);const s=new df({size:.3,vertexColors:!0,transparent:!0,opacity:.9,blending:ce,depthWrite:!1,sizeAttenuation:!0});Kn=new i0(i,s),Kn.visible=!1,ut.add(Kn);const o=new ot(F.obeliskPink),r=new ot(11158783);for(let a=0;a<Uo;a++){const c=Math.random()<.7?o:r;e[a*3]=c.r*(.8+Math.random()*.4),e[a*3+1]=c.g*(.8+Math.random()*.4),e[a*3+2]=c.b*(.8+Math.random()*.4),n[a]=.15+Math.random()*.25,If.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,active:!1,sparklePhase:Math.random()*6.28})}i.attributes.color.needsUpdate=!0,i.attributes.size.needsUpdate=!0}function BS(i,t,e){om=!0,Kn.visible=!0;for(let n=0;n<Uo;n++){const s=If[n];s.x=i,s.y=t,s.z=e;const o=Math.random()*6.28,r=Math.random()*Math.PI,a=2+Math.random()*5;s.vx=Math.sin(r)*Math.cos(o)*a,s.vy=Math.cos(r)*a*.5+Math.random()*2,s.vz=Math.sin(r)*Math.sin(o)*a,s.life=5+Math.random()*6,s.active=!0}}function GS(i,t){if(!Kn||!Kn.visible)return;const e=Kn.geometry.attributes.position.array,n=Kn.geometry.attributes.size.array;let s=!1;for(let o=0;o<Uo;o++){const r=If[o];if(!r.active){e[o*3+1]=-100,n[o]=0;continue}if(s=!0,r.life-=i,r.life<=0||r.y<-1){r.active=!1;continue}r.vy-=1.5*i,r.vx*=.995,r.vz*=.995,r.vx+=Math.sin(t*3+o*.7)*.3*i,r.vz+=Math.cos(t*2.5+o*1.1)*.2*i,r.x+=r.vx*i,r.y+=r.vy*i,r.z+=r.vz*i,e[o*3]=r.x,e[o*3+1]=r.y,e[o*3+2]=r.z;const a=Math.sin(t*6+r.sparklePhase)*.5+.5,c=Math.min(r.life/2,1);n[o]=(.15+a*.2)*c}Kn.geometry.attributes.position.needsUpdate=!0,Kn.geometry.attributes.size.needsUpdate=!0,s||(Kn.visible=!1)}function kS(i){Dr=i.orbs,$n=i.obeliskGroup,Ps=i.obeliskMat,Is=i.obeliskGlowMat,Ve=i.pinnacleOrb,Ls=i.pinnacleRings||[],zi=i.moatMesh,Ch=i.moatMat,jn=i.rainbowArcs,Ur=i.player,im=i.makeLaser,sm=i.orbHudEl,Uh=i.deers||[],Nh=i.puffs||[],zh=i.jellies||[],Fh=i.moths||[],Ao=i.trees||[],Oh=i.treeMeshes||[],Ro=i.groundMesh||null,Ph=i.playOrbCollect||null,Ih=i.playOrbWarble||null,Lh=i.playLaserZap||null,Dh=i.playLaserHum||null,pc=i.stopLaserHums||null,OS()}function HS(i,t){let e=null,n=1/0;for(let c=0;c<Dr.length;c++){const l=Dr[c];if(l.found)continue;const u=l.x-Ur.pos.x,h=l.z-Ur.pos.z,f=u*u+h*h;f<n&&(n=f,e=l)}if(e&&n<Mo*Mo){const c=Math.sin(t*2+e.phase)*.5+.5;Lr.position.set(e.x,1,e.z),Lr.intensity=1+c*2,Lr.distance=Mo}else Lr.intensity=0;for(let c=0;c<Dr.length;c++){const l=Dr[c];if(!(l.found&&!l.flyUp&&!l._flashing)){if(!l.found){const u=Math.sin(t*1.5+l.phase)*.5+.5;l.group.position.y=l.flyY+Math.sin(t*.8+l.phase)*.3,l.glowMat.opacity=.3+u*.4,l.hazeMat.opacity=.08+u*.12;const h=l.x-Ur.pos.x,f=l.z-Ur.pos.z,p=h*h+f*f,g=Mo*Mo;if(p<g){const x=1-Math.sqrt(p)/Mo,d=x*x;l.glowMat.opacity=Math.min(.3+u*.4+d*.5,1),l.hazeMat.opacity=Math.min(.08+u*.12+d*.25,.6),l.coreMat.color.copy(FS).lerp(zS,1-d);const m=1+d*.3;l.group.scale.setScalar(m)}else l.group.scale.setScalar(1);for(let x=3;x<l.group.children.length;x++){const d=l.group.children[x],m=(x-3)/6*6.28+t*1.5;d.position.x=Math.cos(m)*.4,d.position.z=Math.sin(m)*.4,d.position.y=Math.sin(m*2+t)*.1}if(p<ep*ep){l.found=!0,l._flashing=!0,l._flashTimer=0,l.flyY=l.group.position.y,yo++;const x=sm||document.getElementById("orb-hud");x&&(x.innerHTML="✦ "+yo+" / "+To),Ze==="SEEK"&&(Ze="RISING"),Ph&&Ph()}}if(l._flashing){l._flashTimer+=i;const u=Math.min(l._flashTimer/1.5,1),h=u<.3?u/.3:1-(u-.3)/.7;l.glowMat.opacity=.5+h*.5,l.hazeMat.opacity=.3+h*.5,l.group.scale.setScalar(1+h*.6),l.group.position.x=l.x+Math.sin(t*30)*h*.05,l.group.position.z=l.z+Math.cos(t*25)*h*.05,l._flashTimer>1.5&&(l._flashing=!1,l.flyUp=!0,l.group.position.x=l.x,l.group.position.z=l.z,Ih&&Ih())}if(l.flyUp){const u=be+5;l.flyY+=(u-l.flyY)*i*.8,l.group.position.y=l.flyY;const h=Math.min((l.flyY-1)/(u-1),1);if(l.group.scale.setScalar(1-h*.6),l.glowMat.opacity=.8-h*.5,l.flyY>u-1&&!l.laserLine){l.flyUp=!1,l.group.visible=!1;const f=Ql();l.laserLine=im(l.x,l.z,0,f),Lh&&Lh(),Dh&&Dh(l.x,l.z)}}}}const s=be/To,o=-be+yo*s;if(rs<o-.01?(rs+=8*i,rs>o&&(rs=o),$n&&($n.position.y=rs,$n.position.x=Math.sin(t*25)*.04,$n.position.z=Math.cos(t*30)*.03)):$n&&($n.position.x*=.9,$n.position.z*=.9),yo>=To&&rs>=-.01&&Ze==="RISING"&&(Ze="COMPLETE",Qe=0),$n){$n.rotation.y+=i*.03;const c=$n.children[$n.children.length-1];if(c&&c.isLight){const l=Math.max(0,Math.min(1,(rs+be)/be));c.intensity=l*1.5*(.8+Math.sin(t*1.5)*.2)}}if(Ve&&Ve.mesh.visible){const c=Math.sin(t*2)*.5+.5;Ve.mat.opacity=.6+c*.3,Ve.hazeMat.opacity=.15+c*.12;const l=yo/To;Ve.mat.opacity*=.3+l*.7,Ve.hazeMat.opacity*=.2+l*.8}for(let c=0;c<Ls.length;c++){const l=Ls[c];if(!l.mesh.visible)continue;l.mesh.rotation.x+=l.rx*i,l.mesh.rotation.y+=l.ry*i,l.mesh.rotation.z+=l.rz*i;const u=yo/To;l.mat.opacity=(.15+u*.35)*(.8+Math.sin(t*1.5+c)*.2)}const a=Ql();if(NS(i,t,a),Ze==="COMPLETE"&&Qe>3?pp(Math.max(0,1-(Qe-3)/4)):(Ze==="FINALE"||Ze==="TRANSFORM")&&(pp(0),pc&&(pc(),pc=null)),GS(i,t),Ze==="COMPLETE"){Qe+=i;const c=Math.min(Qe/3,1);if(Ps&&(Ps.emissiveIntensity=c*1.5),Is&&(Is.emissiveIntensity=c*2.5),Ve&&Ve.mesh.visible&&Qe>1&&Qe<3){const l=Math.min((Qe-1)/1.5,1);Ve.mat.opacity=.9+l*.1,Ve.hazeMat.opacity=.5+l*.5,Ve.mesh.scale.setScalar(1+l*.5),Ve.haze.scale.setScalar(1+l*1);for(let u=0;u<Ls.length;u++){const h=Ls[u];h.mesh.rotation.x+=h.rx*i*(1+l*4),h.mesh.rotation.y+=h.ry*i*(1+l*4),h.mesh.rotation.z+=h.rz*i*(1+l*4)}}if(Ve&&Ve.mesh.visible&&Qe>=3&&!om){const l=new z;Ve.mesh.getWorldPosition(l),BS(l.x,l.y,l.z),Ve.mesh.visible=!1,Ve.haze.visible=!1;for(let u=0;u<Ls.length;u++)Ls[u].mesh.visible=!1}if(Qe>3&&Ch){const l=Math.min((Qe-3)/4,1);Ch.opacity=l*.6,zi&&(zi.visible||(zi.visible=!0),zi.position.y=.05+Math.sin(t*3)*.02*l)}if(Qe>4)for(let l=0;l<jn.length;l++){const u=l*.3,h=Math.min(Math.max((Qe-4-u)/2,0),1);h>0&&!jn[l].mesh.visible&&(jn[l].mesh.visible=!0),jn[l].mat.opacity=h*.55,jn[l].mesh.rotation.y+=i*.1*(l+1)*.3}if(Qe>3){const l=Math.min((Qe-3)/6,1)*2;for(let u=0;u<Uh.length;u++){const h=Uh[u],f=h.group,p=-f.position.x,g=-f.position.z,x=Math.sqrt(p*p+g*g);x>8?(h.wanderAng=Math.atan2(-f.position.x,-f.position.z),h.state="walk",h.speed=1.5*l,f.position.x+=p/x*h.speed*i,f.position.z+=g/x*h.speed*i,f.rotation.y=h.wanderAng):h.state="pause"}for(let u=0;u<Nh.length;u++){const h=Nh[u],f=h.group,p=-f.position.x,g=-f.position.z,x=Math.sqrt(p*p+g*g);x>8&&(h.wanderAng=Math.atan2(-f.position.x,-f.position.z),h.state="hop",h.hopTimer=h.hopTimer%1.2,f.position.x+=p/x*1.5*l*i,f.position.z+=g/x*1.5*l*i)}for(let u=0;u<zh.length;u++){const h=zh[u],f=h.group;f.position.x+=(0-f.position.x)*i*.15*l,f.position.z+=(0-f.position.z)*i*.15*l}for(let u=0;u<Fh.length;u++){const h=Fh[u];h.centerX+=(0-h.centerX)*i*.2*l,h.centerZ+=(0-h.centerZ)*i*.2*l,h.orbitR=Math.max(h.orbitR-i*.3*l,2)}}Qe>12&&(Ze="FINALE",console.log("✦ Quest → FINALE"))}if(Ze==="FINALE"){mp+=i,Ps&&(Ps.emissiveIntensity=1.5+Math.sin(t*.5)*.3),Is&&(Is.emissiveIntensity=2.5+Math.sin(t*.7)*.5),zi&&(zi.position.y=.05+Math.sin(t*3)*.02);for(let c=0;c<jn.length;c++)jn[c].mesh.rotation.y+=i*.1*(c+1)*.3,jn[c].mat.opacity=.45+Math.sin(t+c)*.1;mp>30&&(Ze="TRANSFORM",Zn=0,VS(),console.log("✦ Quest → TRANSFORM (trees="+Ao.length+")"))}if(Ze==="TRANSFORM"){Zn+=i,Ps&&(Ps.emissiveIntensity=1.5+Math.sin(t*.5)*.3),Is&&(Is.emissiveIntensity=2.5+Math.sin(t*.7)*.5),zi&&(zi.position.y=.05+Math.sin(t*3)*.02);for(let l=0;l<jn.length;l++)jn[l].mesh.rotation.y+=i*.1*(l+1)*.3,jn[l].mat.opacity=.45+Math.sin(t+l)*.1;if(Zn<3&&wo.length<Ao.length){const l=Math.min(Math.floor(Zn/3*Ao.length),Ao.length);for(;wo.length<l;){const u=wo.length,h=Ao[u],f=Ql(),p=new gf(new z(0,f,0),new z(h.x,0,h.z)),g=new j({color:F.laserPink,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),x=new I(new An(p,8,.06,4,!1),g);ut.add(x);const d=new j({color:F.laserGlow,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),m=new I(new An(p,8,.18,4,!1),d);ut.add(m),wo.push({tube:x,glow:m,mat:g,glowMat:d,timer:0})}}for(let l=0;l<wo.length;l++){const u=wo[l];u.timer+=i;const h=Math.min(u.timer/.5,1),f=Math.sin(t*3+l*.5)*.5+.5;u.mat.opacity=h*(.6+f*.4),u.glowMat.opacity=h*(.2+f*.15)}let c=0;Zn>=3&&Zn<6?c=(Zn-3)/3:Zn>=6&&Zn<10?(c=1,gp||(WS(),gp=!0,console.log("✦ Trees + ground transformed"))):Zn>=10&&Zn<13&&(c=1-(Zn-10)/3),Do&&(Do.style.opacity=c)}}function Ql(){return rs+be+3}function VS(){Do||(Do=document.createElement("div"),Do.style.cssText="position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;opacity:0;pointer-events:none;z-index:9999;",document.body.appendChild(Do))}function WS(){const i=[{color:5575728,glow:13378167,core:16729258},{color:3805248,glow:11154363,core:14505471},{color:4461608,glow:14496648,core:16737979},{color:2756688,glow:8926156,core:12277247},{color:4200496,glow:13386905,core:16742348}];for(let t=0;t<Oh.length;t++){const e=Oh[t],n=i[t%i.length];e.trunkMat&&(e.trunkMat.color.set(667712),e.trunkMat.emissive.set(534584),e.trunkMat.emissiveIntensity=.1),e.canopyMat&&(e.canopyMat.color.set(n.core),e.canopyMat.emissive.set(n.glow),e.canopyMat.emissiveIntensity=.9),e.glowMat&&(e.glowMat.color.set(n.glow),e.glowMat.emissive.set(n.glow),e.glowMat.emissiveIntensity=.15),e.detailMat&&(e.detailMat.color.set(n.color),e.detailMat.emissive.set(n.glow),e.detailMat.emissiveIntensity=.3)}if(Ro&&Ro.material){Ro.material.emissive.set(2099264),Ro.material.emissiveIntensity=.3;const t=Ro.geometry.attributes.color;if(t){const e=t.array;for(let n=0;n<e.length;n+=3){const s=e[n],o=e[n+1],r=e[n+2];e[n]=s*.5+r*.3,e[n+1]=o*.15,e[n+2]=r*.7+o*.4}t.needsUpdate=!0}}}const XS=600;let Ja=.25,Te=1,xp=.85,De="NIGHT",Nr=null,zr=null,Bh=null,Fr=null,mc=null;const Mp=[{label:"DUSK",sky:new ot(923685),fog:new ot(791584),fogDensity:.009,moonInt:.6,moonCol:new ot(14527112),moonElev:15,ambSky:new ot(4469589),ambGnd:new ot(2238488),ambInt:.6,stars:.4,bio:.7,plRange:16,plInt:.5},{label:"NIGHT",sky:new ot(330264),fog:new ot(528408),fogDensity:.01,moonInt:1,moonCol:new ot(12307694),moonElev:55,ambSky:new ot(3359846),ambGnd:new ot(1587232),ambInt:.7,stars:.85,bio:1,plRange:18,plInt:.55},{label:"DEEP_NIGHT",sky:new ot(198160),fog:new ot(397332),fogDensity:.012,moonInt:.55,moonCol:new ot(8952251),moonElev:75,ambSky:new ot(1712708),ambGnd:new ot(1188888),ambInt:.5,stars:1,bio:1.5,plRange:22,plInt:.7},{label:"DAWN",sky:new ot(1187888),fog:new ot(923688),fogDensity:.011,moonInt:.5,moonCol:new ot(13417386),moonElev:20,ambSky:new ot(3354197),ambGnd:new ot(1843224),ambInt:.55,stars:.35,bio:.65,plRange:17,plInt:.5}],ts=new ot,vp=new ot;function qS(i){Nr=i.scene,zr=i.moon,Bh=i.moon2,Fr=i.hemiLight,mc=i.playerLight}function YS(i){if(!Nr)return;Ja=(Ja+i/XS)%1;const t=Ja*4,e=Math.floor(t)%4,n=(e+1)%4,s=t-Math.floor(t),o=.5-.5*Math.cos(s*Math.PI),r=Mp[e],a=Mp[n];De=o<.5?r.label:a.label;const c=(l,u)=>l+(u-l)*o;if(ts.copy(r.sky).lerp(a.sky,o),Nr.background.copy(ts),ts.copy(r.fog).lerp(a.fog,o),Nr.fog.color.copy(ts),Nr.fog.density=c(r.fogDensity,a.fogDensity),zr){ts.copy(r.moonCol).lerp(a.moonCol,o),zr.color.copy(ts),zr.intensity=c(r.moonInt,a.moonInt);const l=Ja*Math.PI*2,u=c(r.moonElev,a.moonElev)*Math.PI/180,h=60;zr.position.set(Math.cos(l)*Math.cos(u)*h,Math.sin(u)*h,Math.sin(l)*Math.cos(u)*h)}if(Bh){const l=c(r.moonInt,a.moonInt)/.85;Bh.intensity=.3*l}Fr&&(ts.copy(r.ambSky).lerp(a.ambSky,o),vp.copy(r.ambGnd).lerp(a.ambGnd,o),Fr.color.copy(ts),Fr.groundColor.copy(vp),Fr.intensity=c(r.ambInt,a.ambInt)),mc&&(mc.distance=c(r.plRange,a.plRange),mc.intensity=c(r.plInt,a.plInt)),xp=c(r.stars,a.stars),fw(xp),Te=c(r.bio,a.bio)}let Bs=0,No=0,Xi=0,Yo="CLEAR",Yi=!1,Mi=0;const gc={CLEAR:{fogMult:1,windBase:.3,rainRate:0,skyDarken:0,mistCount:0,duration:[90,180]},MISTY:{fogMult:1.8,windBase:.2,rainRate:0,skyDarken:.05,mistCount:6,duration:[60,150]},LIGHT_RAIN:{fogMult:1.3,windBase:.6,rainRate:.3,skyDarken:.1,mistCount:2,duration:[60,120]},HEAVY_RAIN:{fogMult:1.6,windBase:1,rainRate:.8,skyDarken:.2,mistCount:3,duration:[45,100]},FOG_BANK:{fogMult:2.5,windBase:.15,rainRate:0,skyDarken:.1,mistCount:8,duration:[60,120]},LUMINOUS_STORM:{fogMult:1.4,windBase:1.5,rainRate:.6,skyDarken:.15,mistCount:2,duration:[40,90]}},ZS={CLEAR:{MISTY:.4,LIGHT_RAIN:.3,FOG_BANK:.2,LUMINOUS_STORM:.1},MISTY:{CLEAR:.3,LIGHT_RAIN:.3,FOG_BANK:.3,HEAVY_RAIN:.1},LIGHT_RAIN:{CLEAR:.2,MISTY:.2,HEAVY_RAIN:.4,LUMINOUS_STORM:.2},HEAVY_RAIN:{LIGHT_RAIN:.4,LUMINOUS_STORM:.3,MISTY:.2,CLEAR:.1},FOG_BANK:{MISTY:.4,CLEAR:.3,LIGHT_RAIN:.2,LUMINOUS_STORM:.1},LUMINOUS_STORM:{HEAVY_RAIN:.3,MISTY:.3,CLEAR:.2,LIGHT_RAIN:.2}};let Co="CLEAR",So=null,xc=0,Ka=0,tu=0,Qa=!1,tc=0,eu=Math.random()*Math.PI*2,nu=0,iu=0;const Gh=[],$S=8;let _p=!1,su=0,ec=1,Mc=0,nc=0,ou=0;function jS(){const i=ZS[Co],t=Object.entries(i);let e=0;for(const[,s]of t)e+=s;let n=Math.random()*e;for(const[s,o]of t)if(n-=o,n<=0)return s;return t[0][0]}function JS(){if(_p)return;const i=document.createElement("canvas");i.width=128,i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(64,32,0,64,32,64);e.addColorStop(0,"rgba(255,255,255,0.5)"),e.addColorStop(.3,"rgba(255,255,255,0.25)"),e.addColorStop(.7,"rgba(255,255,255,0.06)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,64);const n=new sa(i),s=new Me(40,14);for(let o=0;o<$S;o++){const r=new j({map:n,color:5596791,transparent:!0,opacity:0,side:Ut,depthWrite:!1}),a=new I(s,r);a.visible=!1,ut.add(a),Gh.push({mesh:a,mat:r,active:!1,drift:Math.random()*Math.PI*2,speed:.3+Math.random()*.4,baseY:.8+Math.random()*2,wobble:Math.random()*Math.PI*2})}_p=!0}function KS(){JS();const i=gc.CLEAR.duration;xc=i[0]+Math.random()*(i[1]-i[0])}function QS(i,t,e){if(Qa)if(Ka-=i,Ka<=0){Co=So,So=null,Qa=!1;const o=gc[Co].duration;xc=o[0]+Math.random()*(o[1]-o[0]),tc=0}else tc=1-Ka/tu;else xc-=i,xc<=0&&(So=jS(),Qa=!0,tu=30+Math.random()*60,Ka=tu,tc=0);const n=gc[Co];if(Qa&&So){const o=gc[So],r=.5-.5*Math.cos(tc*Math.PI),a=(c,l)=>c+(l-c)*r;ec=a(n.fogMult,o.fogMult),Mc=a(n.rainRate,o.rainRate),nc=a(n.skyDarken,o.skyDarken),ou=a(n.mistCount,o.mistCount),Xi=a(n.windBase,o.windBase),Yo=r<.5?Co:So}else ec=n.fogMult,Mc=n.rainRate,nc=n.skyDarken,ou=n.mistCount,Xi=n.windBase,Yo=Co;Yi=Yo==="LUMINOUS_STORM",eu+=(Math.sin(t*.05)*.2+Math.sin(t*.13)*.1)*i,nu-=i,nu<=0&&(nu=2+Math.random()*6,iu=Math.random()*.8),iu*=Math.pow(.3,i);const s=Xi+iu;if(Bs=Math.cos(eu)*s,No=Math.sin(eu)*s,ut.fog.density*=ec,nc>.001){const o=ut.background,r=1-nc;o.r*=r,o.g*=r,o.b*=r}if(e){const o=Math.round(ou);for(let r=0;r<Gh.length;r++){const a=Gh[r];if(r<o){a.active||(a.active=!0,a.mesh.visible=!0,a.drift=Math.random()*Math.PI*2);const c=10+Math.sin(t*.3+a.wobble)*8,l=a.drift+t*a.speed*.05;a.mesh.position.set(e.x+Math.cos(l)*c,a.baseY+Math.sin(t*.4+a.wobble)*.5,e.z+Math.sin(l)*c),a.mesh.rotation.y=l+Math.PI/2,a.drift+=Bs*i*.02;const u=.03+ec*.012;a.mat.opacity+=(u-a.mat.opacity)*i*2}else a.active&&(a.mat.opacity-=i*.5,a.mat.opacity<=.005&&(a.active=!1,a.mesh.visible=!1,a.mat.opacity=0))}}return Yi&&(su-=i,su<=0&&(su=1+Math.random()*4,Mi=1)),Mi*=Math.pow(.02,i),Mi<.01&&(Mi=0),Mc}function Vr(){return Mc}const fi=300,Ar=new Float32Array(fi),Rr=new Float32Array(fi),Cr=new Float32Array(fi),ru=new Float32Array(fi),au=new Float32Array(fi),cu=new Float32Array(fi),Ds=new Float32Array(fi),Fn=new Float32Array(fi*6);let Gs=null,kh=null;function tb(){const i=new we;i.setAttribute("position",new Ue(Fn,3)),kh=new ff({color:8952251,transparent:!0,opacity:.3,depthWrite:!1}),Gs=new tx(i,kh),Gs.frustumCulled=!1,Gs.visible=!1,ut.add(Gs);for(let t=0;t<fi;t++)Ds[t]=0,rm(t)}function rm(i){const t=i*6;Fn[t]=0,Fn[t+1]=-100,Fn[t+2]=0,Fn[t+3]=0,Fn[t+4]=-100,Fn[t+5]=0}function eb(i,t,e,n,s){if(!Gs)return;const o=e>.01;if(Gs.visible=o,!o)return;kh.opacity=Math.min(.15+e*.35,.5);const r=Math.floor(e*12*i*60);for(let c=0;c<r;c++){let l=-1;for(let f=0;f<fi;f++)if(Ds[f]<=0){l=f;break}if(l===-1)break;const u=Math.random()*Math.PI*2,h=Math.random()*30;Ar[l]=t.x+Math.cos(u)*h,Rr[l]=12+Math.random()*10,Cr[l]=t.z+Math.sin(u)*h,ru[l]=n*2+(Math.random()-.5)*.3,au[l]=-12-Math.random()*8,cu[l]=s*2+(Math.random()-.5)*.3,Ds[l]=2+Math.random()*1.5}const a=.06;for(let c=0;c<fi;c++){if(Ds[c]<=0)continue;if(Ds[c]-=i,Ds[c]<=0||Rr[c]<Yt(Ar[c],Cr[c])+.1){Ds[c]=0,rm(c);continue}Ar[c]+=ru[c]*i,Rr[c]+=au[c]*i,Cr[c]+=cu[c]*i;const l=c*6;Fn[l]=Ar[c],Fn[l+1]=Rr[c],Fn[l+2]=Cr[c],Fn[l+3]=Ar[c]+ru[c]*a,Fn[l+4]=Rr[c]+au[c]*a,Fn[l+5]=Cr[c]+cu[c]*a}Gs.geometry.attributes.position.needsUpdate=!0}let X=null,ye=null,Hh=null,sn=!1,Vn=!1,qc=null,lu=null,Wr=null,nb=null,am=null,ib=null,sb=null,cm=null,ob=null,lm=null,um=null,rb=null,hm=null,fm=null,uu=0,ab=null,dm=null,cb=null;const Oi={jelly:0,puff:0,deer:0,moth:0};function hu(i,t){const e=X.sampleRate*t,n=X.createBuffer(1,e,X.sampleRate),s=n.getChannelData(0);if(i==="white")for(let r=0;r<e;r++)s[r]=Math.random()*2-1;else if(i==="brown"){let r=0;for(let a=0;a<e;a++){const c=Math.random()*2-1;s[a]=(r+.02*c)/1.02,r=s[a],s[a]*=1.8}}const o=Math.min(Math.floor(X.sampleRate*.5),e>>2);for(let r=0;r<o;r++){const a=r/o,c=e-o+r;s[c]=s[c]*(1-a)+s[r]*a}return n}function Pr(i,t,e,n){const s=X.createBufferSource();s.buffer=i,s.loop=!0;const o=X.createGain();o.gain.value=t;const r=X.createBiquadFilter();r.type="lowpass",r.frequency.value=e,r.Q.value=.5;const a=X.createBiquadFilter();return a.type="highpass",a.frequency.value=n||40,a.Q.value=.5,s.connect(a).connect(r).connect(o).connect(ye),s.start(),{node:s,gain:o,filter:r}}function lb(){const i=X.createDelay(1);i.delayTime.value=.37;const t=X.createDelay(1);t.delayTime.value=.53;const e=X.createGain();e.gain.value=.2;const n=X.createGain();n.gain.value=.15;const s=X.createBiquadFilter();s.type="lowpass",s.frequency.value=2500;const o=X.createBiquadFilter();o.type="lowpass",o.frequency.value=2e3;const r=X.createBiquadFilter();r.type="highpass",r.frequency.value=120,r.Q.value=.5;const a=X.createBiquadFilter();a.type="highpass",a.frequency.value=120,a.Q.value=.5;const c=X.createGain();c.gain.value=.3,i.connect(s).connect(r).connect(e).connect(i),t.connect(o).connect(a).connect(n).connect(t),i.connect(c),t.connect(c),c.connect(ye);const l=X.createGain();l.gain.value=1,l.connect(i),l.connect(t),Hh=l}function Cn(i,t,e){if(i.connect(t),Hh&&e>0){const n=X.createGain();n.gain.value=e,i.connect(n).connect(Hh)}}function ub(){const i=()=>{if(!sn){try{X=new(window.AudioContext||window.webkitAudioContext),ye=X.createGain(),ye.gain.value=.42,ye.connect(X.destination),qc=hu("brown",16),lu=hu("brown",11),Wr=hu("white",9),lb();const t=Pr(qc,.05,200,50);nb=t.node,am=t.gain,ib=t.filter;const e=Pr(lu,.03,350,80);sb=e.node,cm=e.gain;const n=Pr(Wr,0,400,60);ob=n.node,lm=n.gain,um=n.filter;const s=Pr(Wr,0,2e3,80);rb=s.node,hm=s.gain,fm=s.filter;const o=Pr(lu,0,600,60);ab=o.node,dm=o.gain,cb=o.filter,sn=!0}catch(t){console.warn("Audio init failed:",t)}document.removeEventListener("click",i),document.removeEventListener("keydown",i),document.removeEventListener("touchstart",i)}};document.addEventListener("click",i),document.addEventListener("keydown",i),document.addEventListener("touchstart",i)}function hb(i,t,e,n,s,o,r,a){if(!sn||Vn)return;const c=X.currentTime,l=o==="DEEP_NIGHT"?.07:o==="DAWN"?.03:.05;am.gain.linearRampToValueAtTime(l,c+.1),cm.gain.linearRampToValueAtTime(l*.6,c+.1);const u=Math.min(t*.12,.18),h=200+t*600;lm.gain.linearRampToValueAtTime(u,c+.1),um.frequency.linearRampToValueAtTime(h,c+.1);const f=e*.15,p=1200+e*2e3;hm.gain.linearRampToValueAtTime(f,c+.1),fm.frequency.linearRampToValueAtTime(p,c+.1),s>.5&&uu<=0&&(fb(),uu=2+Math.random()*3),uu-=i;let g=1/0;if(r&&a)for(let m=0;m<a.length;m++){const S=a[m].x-r.x,v=a[m].z-r.z,_=S*S+v*v;_<g&&(g=_)}const d=(g<225?1-Math.sqrt(g)/15:0)*.08;dm.gain.linearRampToValueAtTime(d,c+.1),Oi.jelly-=i,Oi.puff-=i,Oi.deer-=i,Oi.moth-=i}function fb(){if(!X)return;const i=X.currentTime,t=X.createOscillator(),e=X.createGain(),n=X.createBiquadFilter();t.type="sawtooth",t.frequency.value=50+Math.random()*25,n.type="lowpass",n.frequency.value=120,n.Q.value=1,e.gain.setValueAtTime(.2,i),e.gain.exponentialRampToValueAtTime(.001,i+.8+Math.random()*.5),t.connect(n).connect(e).connect(ye),t.start(),t.stop(i+1.5);const s=X.createBufferSource();s.buffer=qc;const o=X.createGain(),r=X.createBiquadFilter();r.type="lowpass",r.frequency.value=120;const a=X.createBiquadFilter();a.type="highpass",a.frequency.value=45,a.Q.value=.5,o.gain.setValueAtTime(.15,i),o.gain.exponentialRampToValueAtTime(.001,i+1.2),s.connect(a).connect(r).connect(o).connect(ye),s.start(),s.stop(i+1.5)}function Zs(i,t,e){if(!sn||Vn||Oi[i]>0)return;const n=t.x-e.x,s=t.z-e.z,o=n*n+s*s;if(o>900)return;const r=Math.sqrt(o),a=Math.max(0,1-r/30)*.1,c=Math.max(-1,Math.min(1,n/Math.max(r,1))),l=X.createStereoPanner();l.pan.value=c;const u=X.currentTime;switch(i){case"jelly":{const h=360+Math.random()*60,f=X.createOscillator(),p=X.createOscillator();f.type="sine",p.type="sine",f.frequency.setValueAtTime(h,u),p.frequency.setValueAtTime(h+3,u),f.frequency.linearRampToValueAtTime(h-40,u+1.2),p.frequency.linearRampToValueAtTime(h-37,u+1.2);const g=X.createOscillator(),x=X.createGain();g.frequency.value=4,x.gain.value=5,g.connect(x),x.connect(f.frequency),x.connect(p.frequency);const d=X.createGain();d.gain.setValueAtTime(0,u),d.gain.linearRampToValueAtTime(a,u+.15),d.gain.setValueAtTime(a,u+.6),d.gain.exponentialRampToValueAtTime(.001,u+1.4),f.connect(d),p.connect(d),d.connect(l),Cn(l,ye,.4),g.start(u),f.start(u),p.start(u),g.stop(u+1.5),f.stop(u+1.5),p.stop(u+1.5),Oi.jelly=4+Math.random()*5;break}case"puff":{const h=500+Math.random()*100,f=[h,h*1.2,h*1.5];for(let p=0;p<f.length;p++){const g=X.createOscillator();g.type="sine",g.frequency.value=f[p];const x=X.createGain(),d=u+p*.07;x.gain.setValueAtTime(0,d),x.gain.linearRampToValueAtTime(a*.5,d+.02),x.gain.exponentialRampToValueAtTime(.001,d+.15),g.connect(x).connect(l),g.start(d),g.stop(d+.18)}Cn(l,ye,.3),Oi.puff=8+Math.random()*10;break}case"deer":{const h=100+Math.random()*30,f=X.createOscillator(),p=X.createOscillator();f.type="triangle",p.type="triangle",f.frequency.setValueAtTime(h,u),p.frequency.setValueAtTime(h+2,u),f.frequency.linearRampToValueAtTime(h-15,u+.5),p.frequency.linearRampToValueAtTime(h-13,u+.5);const g=X.createBiquadFilter();g.type="lowpass",g.frequency.value=250,g.Q.value=.5;const x=X.createGain();x.gain.setValueAtTime(0,u),x.gain.linearRampToValueAtTime(a*.7,u+.12),x.gain.setValueAtTime(a*.7,u+.3),x.gain.exponentialRampToValueAtTime(.001,u+.6),f.connect(g),p.connect(g),g.connect(x).connect(l),Cn(l,ye,.3),f.start(u),p.start(u),f.stop(u+.7),p.stop(u+.7),Oi.deer=5+Math.random()*6;break}case"moth":{const h=X.createOscillator();h.type="sine",h.frequency.setValueAtTime(200+Math.random()*80,u);const f=X.createOscillator(),p=X.createGain();f.frequency.value=8+Math.random()*4,p.gain.value=12,f.connect(p).connect(h.frequency);const g=X.createGain();g.gain.setValueAtTime(0,u),g.gain.linearRampToValueAtTime(a*.2,u+.05),g.gain.exponentialRampToValueAtTime(.001,u+.25),h.connect(g).connect(l),Cn(l,ye,.2),f.start(u),h.start(u),f.stop(u+.3),h.stop(u+.3),Oi.moth=4+Math.random()*5;break}}}let Yc=0;function db(i,t){if(!sn||Vn||Yc>0)return;const e=X.currentTime;if(t){const n=X.createBufferSource();n.buffer=Wr;const s=X.createGain(),o=X.createBiquadFilter();o.type="bandpass",o.frequency.value=2e3,o.Q.value=.5,s.gain.setValueAtTime(.05,e),s.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(o).connect(s).connect(ye),n.start(),n.stop(e+.15)}else{const n=X.createOscillator();n.type="sine",n.frequency.value=80+Math.random()*40;const s=X.createGain();s.gain.setValueAtTime(.03,e),s.gain.exponentialRampToValueAtTime(.001,e+.08),n.connect(s).connect(ye),n.start(),n.stop(e+.1)}Yc=i?.22:.35}function pb(){if(!sn||Vn)return;const i=X.currentTime,t=X.createOscillator();t.type="sine",t.frequency.setValueAtTime(150,i),t.frequency.exponentialRampToValueAtTime(300,i+.1);const e=X.createGain();e.gain.setValueAtTime(.03,i),e.gain.exponentialRampToValueAtTime(.001,i+.15),t.connect(e).connect(ye),t.start(),t.stop(i+.2)}function mb(i){if(!sn||Vn)return;const t=X.currentTime,e=X.createBufferSource();e.buffer=qc;const n=X.createGain(),s=X.createBiquadFilter();s.type="lowpass",s.frequency.value=200;const o=X.createBiquadFilter();o.type="highpass",o.frequency.value=50,o.Q.value=.5,n.gain.setValueAtTime(i*.05,t),n.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(o).connect(s).connect(n).connect(ye),e.start(),e.stop(t+.25)}function gb(i){Yc>0&&(Yc-=i)}function xb(i,t){if(!sn||Vn)return;const e=i.x-t.x,n=i.z-t.z,s=e*e+n*n;if(s>400)return;const o=Math.max(0,1-Math.sqrt(s)/20)*.06,r=X.currentTime,a=X.createOscillator();a.type="sine",a.frequency.setValueAtTime(600+Math.random()*300,r),a.frequency.exponentialRampToValueAtTime(200,r+.1);const c=X.createGain();c.gain.setValueAtTime(o,r),c.gain.exponentialRampToValueAtTime(.001,r+.12),a.connect(c).connect(ye),a.start(),a.stop(r+.15)}function Mb(){if(!sn||Vn)return;const i=X.currentTime,t=[440,554,659,880];for(let e=0;e<t.length;e++){const n=X.createOscillator();n.type="sine",n.frequency.setValueAtTime(t[e],i+e*.12);const s=X.createGain();s.gain.setValueAtTime(0,i),s.gain.linearRampToValueAtTime(.05,i+e*.12+.05),s.gain.exponentialRampToValueAtTime(.001,i+e*.12+.7),n.connect(s),Cn(s,ye,.5),n.start(i+e*.12),n.stop(i+e*.12+.8)}}function vb(){if(!sn||Vn)return;const i=X.currentTime,t=X.createOscillator();t.type="sine",t.frequency.setValueAtTime(300,i),t.frequency.exponentialRampToValueAtTime(1200,i+3);const e=X.createOscillator(),n=X.createGain();e.frequency.setValueAtTime(6,i),e.frequency.linearRampToValueAtTime(12,i+3),n.gain.value=20,e.connect(n).connect(t.frequency);const s=X.createOscillator();s.type="sine",s.frequency.setValueAtTime(600,i),s.frequency.exponentialRampToValueAtTime(2400,i+3);const o=X.createGain();o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(.04,i+.2),o.gain.setValueAtTime(.04,i+2),o.gain.exponentialRampToValueAtTime(.001,i+3.5),t.connect(o),s.connect(o),Cn(o,ye,.6),e.start(i),t.start(i),s.start(i),e.stop(i+4),t.stop(i+4),s.stop(i+4)}function _b(){if(!sn||Vn)return;const i=X.currentTime,t=X.createBufferSource();t.buffer=Wr;const e=X.createBiquadFilter();e.type="bandpass",e.frequency.setValueAtTime(3e3,i),e.frequency.exponentialRampToValueAtTime(500,i+.3),e.Q.value=2;const n=X.createGain();n.gain.setValueAtTime(.08,i),n.gain.exponentialRampToValueAtTime(.001,i+.3),t.connect(e).connect(n).connect(ye);const s=X.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(2e3,i),s.frequency.exponentialRampToValueAtTime(100,i+.15);const o=X.createBiquadFilter();o.type="lowpass",o.frequency.value=4e3;const r=X.createGain();r.gain.setValueAtTime(.06,i),r.gain.exponentialRampToValueAtTime(.001,i+.2),s.connect(o).connect(r),Cn(r,ye,.3);const a=X.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(80,i+.15),a.frequency.linearRampToValueAtTime(55,i+2);const c=X.createBiquadFilter();c.type="bandpass",c.frequency.value=180,c.Q.value=3;const l=X.createGain();l.gain.setValueAtTime(0,i),l.gain.linearRampToValueAtTime(.03,i+.2),l.gain.exponentialRampToValueAtTime(.001,i+2),a.connect(c).connect(l).connect(ye),t.start(i),t.stop(i+.4),s.start(i),s.stop(i+.25),a.start(i+.1),a.stop(i+2.2)}const Zo=[];function yb(i,t){if(!sn||Vn)return;const e=X.currentTime,n=X.createOscillator();n.type="sawtooth",n.frequency.value=55+Math.random()*10;const s=X.createOscillator(),o=X.createGain();s.type="square",s.frequency.value=120+Math.random()*60,o.gain.value=15,s.connect(o).connect(n.frequency);const r=X.createBiquadFilter();r.type="bandpass",r.frequency.value=200,r.Q.value=3;const a=X.createGain();a.gain.value=0;const c=X.createStereoPanner();n.connect(r).connect(a).connect(c).connect(ye),s.start(e),n.start(e),Zo.push({osc:n,mod:s,gain:a,panner:c,filter:r,x:i,z:t})}function wb(i){if(!sn||!X)return;const t=X.currentTime;for(let e=0;e<Zo.length;e++){const n=Zo[e],s=n.x-i.x,o=n.z-i.z,r=s*s+o*o,a=Math.sqrt(r),c=r<625?Math.max(0,1-a/25)*.04:0;n.gain.gain.linearRampToValueAtTime(c,t+.1);const l=Math.max(-1,Math.min(1,s/Math.max(a,1)));n.panner.pan.linearRampToValueAtTime(l,t+.1),n.filter.frequency.value=180+Math.sin(t*.5+e)*40}}function Sb(){if(!X)return;const i=X.currentTime;for(let t=0;t<Zo.length;t++){const e=Zo[t];e.gain.gain.linearRampToValueAtTime(0,i+.5),e.osc.stop(i+.6),e.mod.stop(i+.6)}Zo.length=0}function bb(){if(!sn||Vn)return;const i=X.currentTime,t=X.createOscillator();t.type="sine",t.frequency.setValueAtTime(400,i),t.frequency.exponentialRampToValueAtTime(900,i+.15);const e=X.createGain();e.gain.setValueAtTime(.06,i),e.gain.exponentialRampToValueAtTime(.001,i+.5),t.connect(e),Cn(e,ye,.4),t.start(),t.stop(i+.6)}let pm=null,mm=null,gm=null,fu=0,yp=0,ic=0,du=0,wp=1,Vh=!1;function Tb(){if(Vh||!X)return;Vh=!0;const i=X.createGain();i.gain.value=0;const t=X.createOscillator();t.type="sine",t.frequency.value=160;const e=X.createOscillator();e.type="sine",e.frequency.value=190;const n=X.createBiquadFilter();n.type="lowpass",n.frequency.value=350,n.Q.value=.5,t.connect(n).connect(i),e.connect(n),i.connect(ye),t.start(),e.start(),pm=t,mm=e,gm=i}function Eb(i){if(!X||i<.001)return;const t=X.currentTime,e=1800+Math.random()*800,n=X.createOscillator();n.type="sine",n.frequency.value=e,n.frequency.exponentialRampToValueAtTime(e*.88,t+.1);const s=X.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(i*.5,t+.01),s.gain.exponentialRampToValueAtTime(.001,t+.1),n.connect(s).connect(ye),n.start(t),n.stop(t+.12)}function Ab(i,t,e,n,s,o){if(!sn||Vn||(Tb(),!Vh))return;const r=X.currentTime,a=s==="DEEP_NIGHT"||s==="NIGHT"?1:s==="DUSK"?.5:.3;wp=s==="DUSK"||s==="NIGHT"?1:s==="DEEP_NIGHT"?.6:.3;const c=Math.max(.15,1-o*.7);let l=1/0;if(t&&e)for(let x=0;x<e.length;x++){const d=e[x].x-t.x,m=e[x].z-t.z,S=d*d+m*m;S<l&&(l=S)}const u=l<400?1-Math.sqrt(l)/20:0;yp+=i*2;const h=.7+.3*Math.sin(yp*Math.PI*2),f=u*.025*a*c*h;if(gm.gain.linearRampToValueAtTime(f,r+.15),fu+=i,fu>3+Math.random()*4){fu=0;const x=150+Math.random()*40;pm.frequency.linearRampToValueAtTime(x,r+.5),mm.frequency.linearRampToValueAtTime(x+20+Math.random()*15,r+.5)}let p=1/0;if(t&&n)for(let x=0;x<n.length;x++){const d=n[x].cx-t.x,m=n[x].cz-t.z,S=d*d+m*m;S<p&&(p=S)}const g=p<144?1-Math.sqrt(p)/12:0;if(du=g*.02*wp*c,du>.001){if(ic-=i,ic<=0){Eb(du);const x=1.5+(1-g)*1.5;ic=x+Math.random()*x}}else ic=0}const xm=[0,2,4,7,9],Rb=[0,2,3,5,7,9,10],Cb=220;let rr=!1,Hn=null,vc=0,_c=0,yc=0,Wh=xm,ea=0,sc=0,Sp=0,Zc="",es=null,ns=null,Ss=null,Ui=null,is=null,pu=null,ol=0;function Pb(){rr||!X||(rr=!0,Hn=X.createGain(),Hn.gain.value=.018,Hn.connect(ye),vc=1.5,_c=3,yc=0,Db())}function ar(i,t){const e=Wh.length,n=Math.floor(i/e)+(t||0),s=(i%e+e)%e,o=Wh[s];return Cb*Math.pow(2,n+o/12)}function Ib(){if(!X||!Hn)return;const i=X.currentTime,t=Math.random()<.6?0:Math.random()<.5?4:3,e=ar(t,-1);ol=t,Ss&&(Ss.gain.linearRampToValueAtTime(.001,i+3),es&&es.stop(i+3.2),ns&&ns.stop(i+3.2),is&&is.stop(i+3.2)),es=X.createOscillator(),ns=X.createOscillator(),es.type="sine",ns.type="sine",es.frequency.value=e,ns.frequency.value=e*1.002,Ss=X.createGain(),Ss.gain.setValueAtTime(0,i),Ss.gain.linearRampToValueAtTime(.15,i+4),Ui=X.createBiquadFilter(),Ui.type="lowpass",Ui.frequency.value=550,Ui.Q.value=.5,is=X.createOscillator(),pu=X.createGain(),is.type="sine",is.frequency.value=.08+Math.random()*.06,pu.gain.value=80,is.connect(pu).connect(Ui.frequency);const n=X.createOscillator();n.type="sine",n.frequency.value=e*1.5;const s=X.createGain();s.gain.value=.08,n.connect(s).connect(Ui),es.connect(Ui),ns.connect(Ui),Ui.connect(Ss),Cn(Ss,Hn,.7),es.start(i+.5),ns.start(i+.5),n.start(i+1),is.start(i),es.stop(i+35),ns.stop(i+35),n.stop(i+35),is.stop(i+35)}function Lf(i,t,e){if(!X)return;const n=X.currentTime+(e||0),s=X.createOscillator();s.type="triangle",s.frequency.value=i;const o=X.createGain();o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(t,n+.008),o.gain.exponentialRampToValueAtTime(t*.4,n+.2),o.gain.exponentialRampToValueAtTime(.001,n+2);const r=X.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(i*4,n),r.frequency.exponentialRampToValueAtTime(i*1.5,n+1.2),r.Q.value=1,s.connect(r).connect(o),Cn(o,Hn,.6),s.start(n),s.stop(n+2.5)}function Lb(i,t,e,n){if(!X)return;const s=X.currentTime+(n||0),o=e||2,r=X.createOscillator();r.type="sine",r.frequency.value=i;const a=Math.min(o,3),c=X.createBuffer(1,X.sampleRate*a,X.sampleRate),l=c.getChannelData(0);for(let d=0;d<l.length;d++)l[d]=(Math.random()*2-1)*.03;const u=X.createBufferSource();u.buffer=c;const h=X.createBiquadFilter();h.type="bandpass",h.frequency.value=i*2,h.Q.value=3;const f=X.createGain();f.gain.setValueAtTime(0,s),f.gain.linearRampToValueAtTime(t*.15,s+.2),f.gain.linearRampToValueAtTime(0,s+o),u.connect(h).connect(f).connect(Hn);const p=X.createGain();p.gain.setValueAtTime(0,s),p.gain.linearRampToValueAtTime(t,s+.25),p.gain.setValueAtTime(t,s+Math.max(o-.6,.4)),p.gain.exponentialRampToValueAtTime(.001,s+o);const g=X.createOscillator(),x=X.createGain();g.frequency.value=4.5+Math.random()*1.5,x.gain.value=i*.01,g.connect(x).connect(r.frequency),r.connect(p),Cn(p,Hn,.55),g.start(s),r.start(s),u.start(s),g.stop(s+o+.1),r.stop(s+o+.1),u.stop(s+o+.1)}function Mm(i,t,e){if(!X)return;const n=X.currentTime+(e||0),s=X.createOscillator(),o=X.createOscillator();s.type="triangle",o.type="triangle",s.frequency.value=i,o.frequency.value=i*1.003;const r=X.createGain();r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(t,n+.01),r.gain.exponentialRampToValueAtTime(t*.2,n+.5),r.gain.exponentialRampToValueAtTime(.001,n+2.5);const a=X.createBiquadFilter();a.type="peaking",a.frequency.value=i*.5,a.Q.value=2,a.gain.value=4,s.connect(a).connect(r),o.connect(a),Cn(r,Hn,.45),s.start(n),o.start(n),s.stop(n+3),o.stop(n+3)}let wc=0,Sc=0,Xh=0,qh=[];function Db(){Xh=1.1+Math.random()*.3,wc=2,Sc=0,qh=[.6,.25,.45,.2]}function Ub(i){if(!X||!Hn)return;const t=X.currentTime,e=ar(ol,1),n=X.createOscillator();n.type="triangle",n.frequency.value=e;const s=X.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(i*.35,t+.008),s.gain.exponentialRampToValueAtTime(i*.08,t+.15),s.gain.exponentialRampToValueAtTime(.001,t+.8);const o=X.createBiquadFilter();o.type="highpass",o.frequency.value=300,o.Q.value=.5;const r=X.createBiquadFilter();if(r.type="lowpass",r.frequency.value=e*3,r.Q.value=.7,n.connect(o).connect(r).connect(s),Cn(s,Hn,.65),n.start(t),n.stop(t+1),i>.4){const a=X.createOscillator();a.type="sine",a.frequency.value=e*2;const c=X.createGain();c.gain.setValueAtTime(0,t),c.gain.linearRampToValueAtTime(i*.08,t+.005),c.gain.exponentialRampToValueAtTime(.001,t+.5),a.connect(c).connect(s),a.start(t),a.stop(t+.6)}}function Nb(i,t,e){if(!X)return;const n=X.currentTime+(e||0),s=X.createOscillator();s.type="sine",s.frequency.value=i;const o=X.createOscillator();o.type="sine",o.frequency.value=i*2.01;const r=X.createGain();r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(t*.3,n+.005),r.gain.exponentialRampToValueAtTime(t*.08,n+.4),r.gain.exponentialRampToValueAtTime(.001,n+3);const a=X.createGain();a.gain.value=.15,s.connect(r),o.connect(a).connect(r),Cn(r,Hn,.8),s.start(n),o.start(n),s.stop(n+3.5),o.stop(n+3.5)}function zb(i,t,e){if(!X)return;const n=[0,2,4,2],s=.12+Math.random()*.08;for(let o=0;o<n.length;o++){const r=ar(i+n[o],ea);Lf(r,t*(o===0?1:.7),(e||0)+o*s)}}function vm(i){const t=Math.random();let e;return t<.25?e=i+1:t<.5?e=i-1:t<.65?e=i+2:t<.8?e=i-2:t<.9?e=0:e=ol,Math.max(-3,Math.min(10,e))}function Fb(){if(!X||!rr)return 2;const i=3+Math.floor(Math.random()*5),t=.5+Math.random()*.6,e=Math.random()<.4;let n;const s=Math.random();s<.4?n="harp":s<.7?n="flute":n="lute",n===Zc&&Math.random()<.7&&(n=["harp","flute","lute"][Math.floor(Math.random()*3)]),Zc=n;let o=Sp+(Math.random()<.7?0:Math.random()<.5?1:-1);o=Math.max(-2,Math.min(8,o));const r=.5+Math.random()*.4;let a=0;for(let c=0;c<i;c++){const l=e?t*(c%2===0?1:.6):t;a=c===0?0:a+l+(Math.random()-.5)*.08;const u=ar(o,ea);if(n==="harp"&&Math.random()<.2&&c>0)zb(o,r*.7,a);else if(n==="harp")Lf(u,r,a);else if(n==="flute"){const h=l*1.3+.3;Lb(u,r*.9,h,a)}else Mm(u,r*.7,a);c>=i-2&&Math.random()<.5?o=o>0?o-1:o+1:o=vm(o)}return Sp=o,a+1.5}function Ob(){if(!X||!rr)return 3;const i=1+Math.floor(Math.random()*3),t=Zc==="harp"?Math.random()<.5?"lute":"shimmer":Zc==="lute"?Math.random()<.5?"harp":"shimmer":Math.random()<.5?"lute":"shimmer",e=1+Math.random()*1.5,n=.3+Math.random()*.3;let s=ol;for(let o=0;o<i;o++){const r=o*e,a=ar(s,ea-1);t==="lute"?Mm(a,n*.6,r):t==="harp"?Lf(a,n,r):Nb(ar(s,ea+1),n*.5,r),s=vm(s)}return i*e+2}function Bb(i,t,e,n){if(!sn||Vn||(rr||Pb(),!rr))return;const s=X.currentTime;Wh=t==="DEEP_NIGHT"||t==="NIGHT"?Rb:xm,ea=t==="DAY"?1:0;const o=t==="DEEP_NIGHT"?.016:t==="NIGHT"?.02:t==="DAWN"?.024:t==="DAY"?.013:.02,r=n?1.35:1;if(Hn.gain.linearRampToValueAtTime(o*r,s+2),sc=Math.min(1,(e||0)/5),yc-=i,yc<=0&&(Ib(),yc=18+Math.random()*12),vc-=i,vc<=0){const a=Fb(),c=sc>.3?1.5:3,l=sc>.3?3:5;vc=a+c+Math.random()*l}if(_c-=i,_c<=0){const a=Ob(),c=sc>.3?3:6;_c=a+c+Math.random()*4}if(wc-=i,wc<=0){const a=qh[Sc%qh.length],c=Xh*(.95+Math.random()*.1);Ub(a),Sc++,wc=c,Sc%16===0&&(Xh=1.1+Math.random()*.3)}}function Gb(i,t,e,n,s){const o=e.x-i.x,r=e.z-i.z,a=o*o+r*r;if(a>n*n)return!1;if(a<.01)return!0;let l=Math.atan2(r,o)-t;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;return Math.abs(l)<s*.5}function kb(i,t,e,n){const s=t.x-i.x,o=t.z-i.z,r=n?e*1.8:e;return s*s+o*o<r*r}function _m(i,t,e){let n=0,s=0,o=0;for(let r=0;r<t.length;r++){const a=t[r],c=i.x-a.x,l=i.z-a.z,u=c*c+l*l;if(u>.01&&u<e*e){const h=Math.sqrt(u);n+=c/h/h,s+=l/h/h,o++}}return o>0&&(n/=o,s/=o),{x:n,z:s}}function ym(i,t){if(t.length===0)return{x:0,z:0};let e=0,n=0;for(let s=0;s<t.length;s++)e+=t[s].x,n+=t[s].z;return e/=t.length,n/=t.length,{x:e-i.x,z:n-i.z}}function Hb(i,t){const e=Math.sqrt(i.x*i.x+i.z*i.z),n=Jt-t;if(e<n)return{x:0,z:0};const s=(e-n)/t,o=Math.min(s*2,3);return{x:-i.x/e*o,z:-i.z/e*o}}function Vb(i,t,e,n,s){let o=0,r=0;const a=Math.cos(t)*n,c=Math.sin(t)*n,l=i.x+a,u=i.z+c;for(let h=0;h<e.length;h++){const f=e[h],p=l-f.x,g=u-f.z,x=p*p+g*g,d=(f.colR||s)+1;if(x<d*d&&x>.01){const m=Math.sqrt(x),S=(d-m)/d*2;o+=p/m*S,r+=g/m*S}}return{x:o,z:r}}const Fi={deer:!1,puffling:!1,jelly:!1,moth:!1,fairyRing:!1,crystalChain:!1,pond:!1},Wb={deer:"Spirit Deer",puffling:"Puffling",jelly:"Luminous Jelly",moth:"Moon Moth",fairyRing:"Fairy Ring",crystalChain:"Crystal Resonance",pond:"Moonlit Pond"};let Gi=null,bc=0,bp="";function Xb(){Gi=document.createElement("div"),Gi.id="discovery-text",Gi.style.cssText="position:fixed;top:28%;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:22px;color:#ccffee;text-shadow:0 0 12px #44ffaa,0 0 30px #228866;pointer-events:none;opacity:0;transition:opacity 0.6s;z-index:100;letter-spacing:3px;text-transform:uppercase;",document.body.appendChild(Gi)}function bs(i){Fi[i]||(Fi[i]=!0,bp=Wb[i],bc=3,Gi&&(Gi.textContent=bp,Gi.style.opacity="1"))}function qb(i,t,e,n,s,o,r,a){const c=i.x,l=i.z;if(!Fi.deer)for(let u=0;u<t.length;u++){const h=t[u].group.position.x-c,f=t[u].group.position.z-l;if(h*h+f*f<144){bs("deer");break}}if(!Fi.puffling)for(let u=0;u<e.length;u++){const h=e[u].group.position.x-c,f=e[u].group.position.z-l;if(h*h+f*f<64){bs("puffling");break}}if(!Fi.jelly)for(let u=0;u<n.length;u++){const h=n[u].group.position.x-c,f=n[u].group.position.z-l;if(h*h+f*f<100){bs("jelly");break}}if(!Fi.moth)for(let u=0;u<s.length;u++){const h=s[u].group.position.x-c,f=s[u].group.position.z-l;if(h*h+f*f<64){bs("moth");break}}if(!Fi.fairyRing)for(let u=0;u<o.length;u++){const h=o[u].x-c,f=o[u].z-l;if(h*h+f*f<16){bs("fairyRing");break}}if(!Fi.pond)for(let u=0;u<r.length;u++){const h=r[u].x-c,f=r[u].z-l;if(h*h+f*f<25){bs("pond");break}}!Fi.crystalChain&&a>=3&&bs("crystalChain")}function Yb(i){bc>0&&(bc-=i,bc<=.6&&Gi&&(Gi.style.opacity="0"))}let Yh=null,mu=60;const Zb={DUSK:"Dusk",NIGHT:"Night",DEEP_NIGHT:"Deep Night",DAWN:"Dawn"},$b={CLEAR:"Clear",MISTY:"Misty",LIGHT_RAIN:"Light Rain",HEAVY_RAIN:"Heavy Rain",FOG_BANK:"Fog",LUMINOUS_STORM:"Storm"};function jb(){Yh=document.getElementById("hud")}function Jb(i,t){if(!Yh)return;mu=mu*.95+1/Math.max(i,.001)*.05;const e=Ze==="SEEK"?"Seek the orbs...":Ze==="RISING"?"The obelisk stirs...":Ze==="COMPLETE"?"Convergence!":"Luminaries",n=Zb[De]||"Night",s=$b[Yo]||"Clear";Yh.innerHTML="<b>"+e+"</b> · "+n+" · "+s+" · FPS:"+Math.round(mu)+"<br>Pos:"+t.x.toFixed(0)+","+t.z.toFixed(0)}let $c=null;function Kb(){$c=document.getElementById("orb-hud")}function Qb(){return $c}function t2(){const i=document.getElementById("overlay");i&&(i.style.opacity="0",setTimeout(()=>{try{i.remove()}catch{}},2500)),$c&&($c.style.display="block")}const _e=[];let zo=[];const Tc=[],Pn=[],se=[],li=[],Nn=[],qe=[],cr=[],wm=[],na=[],bi=[],Zh=[],jc=[],Jc=[],Xr=[],Bn=[],vi=[],Le=[],Gn=[],$h=[],jh=[],Sm=[],ss=[];let Tp=0,Ep=0,gu=0,Jn=null,gi=0;const Jh=15,Kh=[];let Ap=!1;function e2(){if(Ap)return;Ap=!0;const i=new ff({color:F.crystal,transparent:!0,opacity:0,blending:ce,depthWrite:!1});for(let t=0;t<Jh;t++){const e=new we,n=new Float32Array(6);e.setAttribute("position",new Ue(n,3)),e.attributes.position.setUsage(xe);const s=new n0(e,i.clone());s.visible=!1,ut.add(s),Kh.push({line:s,geo:e,opacity:0,active:!1})}}let Ts=null;function n2(){if(Ts)return Ts;const i=new ir(.9,1,48),t=new j({color:F.echoBloom,transparent:!0,opacity:.5,side:Ut,depthWrite:!1,blending:ce});return Ts=new I(i,t),Ts.rotation.x=-Math.PI/2,Ts.visible=!1,ut.add(Ts),Ts}const We=[];function cn(i,t){for(let e=0;e<We.length;e++){const n=We[e].x-i,s=We[e].z-t;if(n*n+s*s<We[e].r2)return!0}return!1}function i2(){const i=25+Math.floor(w()*15),t=[];for(let a=0;a<i;a++){const c=w()*6.28,l=8+w()*(Jt-15);t.push({x:Math.cos(c)*l,z:Math.sin(c)*l,r:6+w()*18,density:.5+w()*.5})}const e=5+Math.floor(w()*4),n=[];for(let a=0;a<e;a++){const c=w()*6.28,l=12+w()*(Jt*.65);n.push({x:Math.cos(c)*l,z:Math.sin(c)*l,r2:(10+w()*15)**2})}for(let a=0;a<Qd;a++){let c,l,u=!1;for(let h=0;h<25;h++){if(w()<.2){const p=w()*6.28,g=5+w()*(Jt-10);c=Math.cos(p)*g,l=Math.sin(p)*g}else{const p=Math.floor(w()*i),g=t[p],x=g.r*(w()+w())*.5*g.density,d=w()*6.28;c=g.x+Math.cos(d)*x,l=g.z+Math.sin(d)*x}if(c*c+l*l>(Jt-5)*(Jt-5))continue;let f=!1;for(let p=0;p<n.length;p++){const g=n[p].x-c,x=n[p].z-l;if(g*g+x*x<n[p].r2){f=!0;break}}if(!f){u=!0;for(let p=0;p<_e.length;p++){const g=_e[p].x-c,x=_e[p].z-l;if(g*g+x*x<6.25){u=!1;break}}if(u)break}}if(u){const h=6+w()*10;w();const f=Yt(c,l),p=w()*Math.PI*2,g=.8+w()*.4,x=ww(h,f);x.position.x=c,x.position.z=l,Tc.push(x),_e.push({x:c,z:l,y:f,treeH:h,yRot:p,scale:g}),We.push({x:c,z:l,r2:4})}}const s=Tw(10),o=Math.ceil(Qd/10)+10;zo=Ew(s,_e,o);for(let a=0;a<D1;a++){let c,l,u=!1;for(let h=0;h<20;h++){const f=w()*6.28,p=10+w()*(Jt*.6);if(c=Math.cos(f)*p,l=Math.sin(f)*p,u=!cn(c,l),u)break}if(u){gh(c,l,4);const h=$w(c,l);h.group.position.y=Yt(c,l),Bn.push(h),We.push({x:c,z:l,r2:64})}}for(let a=0;a<z1;a++){let c,l,u=!1;for(let h=0;h<20;h++){const f=w()*6.28,p=8+w()*(Jt*.6);if(c=Math.cos(f)*p,l=Math.sin(f)*p,u=!cn(c,l),u)break}if(u){gh(c,l,3);const h=Jw(c,l);h.group.position.y=Yt(c,l),Le.push(h),We.push({x:c,z:l,r2:49})}}for(let a=0;a<y1;a++){const c=_e[Math.floor(w()*_e.length)],l=w()*6.28,u=1+w()*4,h=c.x+Math.cos(l)*u,f=c.z+Math.sin(l)*u;if(cn(h,f))continue;const p=Rw(h,f);p.group.position.y=Yt(h,f),Pn.push(p),We.push({x:h,z:f,r2:1})}for(let a=0;a<w1;a++){const c=w()*6.28,l=8+w()*Jt*.6,u=Math.cos(c)*l,h=Math.sin(c)*l;if(cn(u,h))continue;const f=Cw(u,h);f.group.position.y=Yt(u,h),se.push(f),We.push({x:u,z:h,r2:4})}for(let a=0;a<S1;a++){const c=w()*6.28,l=10+w()*Jt*.5,u=Math.cos(c)*l,h=Math.sin(c)*l;li.push(Ww(u,Yt(u,h)+3+w()*5,h))}for(let a=0;a<b1;a++){const c=Pn[Math.floor(w()*Pn.length)],l=w()*6.28,u=1+w()*5,h=c.x+Math.cos(l)*u,f=c.z+Math.sin(l)*u;if(cn(h,f))continue;const p=Xw(h,f);p.group.position.y=Yt(h,f),p._baseY=Yt(h,f),Nn.push(p)}for(let a=0;a<T1;a++){const c=w()*6.28,l=12+w()*Jt*.5,u=Math.cos(c)*l,h=Math.sin(c)*l;if(cn(u,h))continue;const f=qw(u,h),p=Yt(u,h);f.group.position.y=p,f._baseY=p,qe.push(f)}for(let a=0;a<E1;a++){const c=_e[Math.floor(w()*_e.length)];cr.push(Yw(c.x,Yt(c.x,c.z)+2+w()*4,c.z))}const r=[null,F.grassPurple,F.grassBlue,F.grassTeal];for(let a=0;a<A1;a++){const c=w()*6.28,l=2+w()*(Jt*.9),u=Math.cos(c)*l,h=Math.sin(c)*l,f=r[Math.floor(w()*r.length)],p=2+w()*2.5,g=25+Math.floor(w()*20);if(cn(u,h))continue;const x=Iw(u,h,p,g,f);x.mesh.position.y=Yt(u,h),wm.push(x),We.push({x:u,z:h,r2:p*p})}for(let a=0;a<I1;a++){let c,l,u=!1;for(let h=0;h<10;h++){const f=w()*6.28,p=3+w()*(Jt*.85);if(c=Math.cos(f)*p,l=Math.sin(f)*p,u=!cn(c,l),u)break}if(u){const h=Qw(c,l);h.group.position.y=Yt(c,l)-.08,jc.push(h),We.push({x:c,z:l,r2:2.25})}}for(let a=0;a<R1;a++){const c=_e[Math.floor(w()*_e.length)],l=w()*6.28,u=1+w()*5,h=c.x+Math.cos(l)*u,f=c.z+Math.sin(l)*u;if(cn(h,f))continue;const p=Lw(h,f);p.group.position.y=Yt(h,f),na.push(p),We.push({x:h,z:f,r2:1})}for(let a=0;a<C1;a++){const c=w()*6.28,l=3+w()*(Jt*.7),u=Math.cos(c)*l,h=Math.sin(c)*l;if(cn(u,h))continue;const f=Dw(u,h);f.group.position.y=Yt(u,h),bi.push(f),We.push({x:u,z:h,r2:1})}for(let a=0;a<P1;a++){const c=w()*6.28,l=4+w()*(Jt*.8),u=Math.cos(c)*l,h=Math.sin(c)*l;if(cn(u,h))continue;const f=Uw(u,h);f.group.position.y=Yt(u,h),Zh.push(f),We.push({x:u,z:h,r2:1})}for(let a=0;a<To;a++){let c,l,u=!1;for(let h=0;h<30;h++){const f=w()*6.28,p=20+w()*(Jt*.6);c=Math.cos(f)*p,l=Math.sin(f)*p,u=!0;for(let g=0;g<Gn.length;g++){const x=Gn[g].x-c,d=Gn[g].z-l;if(x*x+d*d<225){u=!1;break}}if(u)break}if(u){const h=Kw(c,l);h.group.position.y=Yt(c,l)+1,h.flyY=Yt(c,l)+1,Gn.push(h)}}for(let a=0;a<_0;a++){const c=w()*6.28,l=2+w()*3,u=Math.cos(c)*l,h=Math.sin(c)*l;Jc.push(Zw(u,Yt(u,h)+1+w()*.5,h))}for(let a=0;a<L1;a++){const c=w()*6.28,l=4+w()*(Jt*.7),u=Math.cos(c)*l,h=Math.sin(c)*l;if(cn(u,h))continue;const f=Ow(u,h);f.group.position.y=Yt(u,h),Xr.push(f),We.push({x:u,z:h,r2:1})}for(let a=0;a<U1;a++){const c=w()*6.28,l=5+w()*Jt*.6,u=Math.cos(c)*l,h=Math.sin(c)*l;vi.push(jw(u,Yt(u,h)+.5+w()*5,h))}for(let a=0;a<F1;a++){const c=w()*6.28,l=5+w()*(Jt*.7),u=Math.cos(c)*l,h=Math.sin(c)*l;if(cn(u,h))continue;const f=Gw(u,h);f.group.position.y=Yt(u,h),$h.push(f),We.push({x:u,z:h,r2:2.25})}for(let a=0;a<O1;a++){const c=_e[Math.floor(w()*_e.length)],l=w()*6.28,u=2+w()*4,h=c.x+Math.cos(l)*u,f=c.z+Math.sin(l)*u;if(cn(h,f))continue;const p=kw(h,f);p.group.position.y=Yt(h,f),jh.push(p),We.push({x:h,z:f,r2:1})}for(let a=0;a<B1;a++){const c=w()*6.28,l=6+w()*(Jt*.65),u=Math.cos(c)*l,h=Math.sin(c)*l;if(cn(u,h))continue;const f=Hw(u,h);f.group.position.y=Yt(u,h),Sm.push(f),We.push({x:u,z:h,r2:2.25})}for(let a=0;a<_e.length;a++){const c=_e[a],l=Yt(c.x,c.z);c.y=l,Tc[a]&&(Tc[a].position.y=l+(c.treeH||10)*.6)}if(zo.length>0){const a=new le;for(let c=0;c<zo.length;c++){const l=zo[c];for(let u=0;u<l.instances.length;u++){const h=l.instances[u],f=_e[h.posIdx];h.y=f.y,a.position.set(f.x,f.y,f.z),a.rotation.set(0,f.yRot,0),a.scale.setScalar(f.scale),a.updateMatrix(),l.trunk&&l.trunk.setMatrixAt(u,a.matrix),l.canopy&&l.canopy.setMatrixAt(u,a.matrix),l.glow&&l.glow.setMatrixAt(u,a.matrix),l.detail&&l.detail.setMatrixAt(u,a.matrix)}l.trunk&&(l.trunk.instanceMatrix.needsUpdate=!0),l.canopy&&(l.canopy.instanceMatrix.needsUpdate=!0),l.glow&&(l.glow.instanceMatrix.needsUpdate=!0),l.detail&&(l.detail.instanceMatrix.needsUpdate=!0)}}}function bm(i,t){const e=1+Xi*1.5,n=Bs*.03,s=No*.03,o=Z.pos.x,r=Z.pos.y,a=Z.pos.z;Aw(zo,Tc,o,r,a,t,e,n,s),Pw(t,e,n,s,o,a);for(let c=0;c<na.length;c++){const l=na[c],u=l.group.position.x-o,h=l.group.position.y-r,f=l.group.position.z-a,p=u*u+h*h+f*f;if(p>1600){l.group.visible&&(l.group.visible=!1);continue}l.group.visible||(l.group.visible=!0),!(p>900)&&(l.group.rotation.z=Math.sin(t*.8+l.phase)*.03*e+n,l.group.rotation.x=Math.sin(t*.6+l.phase+1)*.02*e+s)}for(let c=0;c<bi.length;c++){const l=bi[c],u=l.group.position.x-o,h=l.group.position.y-r,f=l.group.position.z-a,p=u*u+h*h+f*f;if(p>1600){l.group.visible&&(l.group.visible=!1);continue}if(l.group.visible||(l.group.visible=!0),p>900)continue;const g=Math.sin(t*1+l.phase)*.5+.5;l.petalMat.emissiveIntensity=(.3+g*.5)*Te,l.group.rotation.z=Math.sin(t*.9+l.phase)*.04*e+n*.5}for(let c=0;c<Zh.length;c++){const l=Zh[c],u=l.group.position.x-o,h=l.group.position.y-r,f=l.group.position.z-a,p=u*u+h*h+f*f;if(p>1600){l.group.visible&&(l.group.visible=!1);continue}l.group.visible||(l.group.visible=!0),!(p>900)&&(l.group.rotation.z=Math.sin(t*1.1+l.phase)*l.swayAmp*e+n,l.group.rotation.x=Math.sin(t*.8+l.phase+2)*l.swayAmp*.5*e+s)}for(let c=0;c<$h.length;c++){const l=$h[c],u=Math.sin(t*1.2+l.phase)*.5+.5;l.orbMat.emissiveIntensity=(.5+u*.5)*Te,l.hazeMat.opacity=(.04+u*.04)*Te,l.group.rotation.z=Math.sin(t*.5+l.phase)*.02*e+n*.3,l.group.rotation.x=Math.sin(t*.4+l.phase+1)*.015*e+s*.3}for(let c=0;c<jh.length;c++){const l=jh[c];for(let u=0;u<l.podMats.length;u++){const h=Math.sin(t*1.5+l.phase+u*1.8)*.5+.5;l.podMats[u].emissiveIntensity=(.3+h*.5)*Te}l.group.rotation.z=Math.sin(t*.35+l.phase)*.01*e+n*.2}Vw(Sm,i,t,Te)}function Tm(i,t){for(let n=0;n<li.length;n++){const s=li[n],o=s.group,r=o.position.x,a=o.position.z;s._syncPhase===void 0&&(s._syncPhase=s.phase);let c=0,l=0;for(let u=0;u<li.length;u++){if(u===n)continue;const h=li[u],f=h.group.position.x-r,p=h.group.position.z-a;f*f+p*p<225&&(c+=h._syncPhase||h.phase,l++)}if(l>0){const u=c/l;s._syncPhase+=(u-s._syncPhase)*i*.4}}const e=De==="DEEP_NIGHT"?2:De==="DAWN"?-1.5:0;for(let n=0;n<li.length;n++){const s=li[n].group,o=s.position.x-Z.pos.x,r=s.position.z-Z.pos.z,a=s.position.y-Z.pos.y;if(o*o+a*a+r*r>3025){s.visible=!1;continue}s.visible=!0;const c=li[n],l=c.group,u=l.position.x,h=l.position.z,f=c.floatY+e;if(c._stT-=i,c._stT<=0)if(Yi)c._state="display",c._stT=10+Math.random()*15;else{const S=Math.random();S<.5?(c._state="drift",c._stT=20+Math.random()*30):S<.75?(c._state="pulse",c._stT=8+Math.random()*12):(c._state="migrate",c._migrateAng=Math.random()*6.28,c._stT=15+Math.random()*20)}switch(Yi&&c._state!=="display"&&(c._state="display",c._stT=10,Zs("jelly",{x:u,z:h},Z.pos)),c._state){case"drift":{c.driftAng+=i*.15;const S=8+Math.sin(t*.1+c.phase)*4,v=c.homeX+Math.cos(c.driftAng)*S,_=c.homeZ+Math.sin(c.driftAng)*S;l.position.x+=(v-u)*i*.3,l.position.z+=(_-h)*i*.3,l.position.y=f+Math.sin(t*c.wobble+c.phase)*1.5;break}case"pulse":{c.driftAng+=i*.08,l.position.x+=Math.cos(c.driftAng)*i*.3,l.position.z+=Math.sin(c.driftAng)*i*.3,l.position.y=f+Math.sin(t*c.wobble+c.phase)*1,c._pulseSync=Math.sin(t*2+c._syncPhase)*.5+.5;break}case"migrate":{l.position.x+=Math.cos(c._migrateAng)*i*1,l.position.z+=Math.sin(c._migrateAng)*i*1,l.position.y=f+Math.sin(t*c.wobble+c.phase)*.8,l.position.x*l.position.x+l.position.z*l.position.z>Jt*.8*(Jt*.8)&&(c._migrateAng+=Math.PI);break}case"display":{c.driftAng+=i*.4,l.position.x+=Math.cos(c.driftAng)*i*.8,l.position.z+=Math.sin(c.driftAng)*i*.8,l.position.y=f+Math.sin(t*2+c.phase)*2,c._syncPhase+=(0-c._syncPhase)*i*2;break}}const p=Yt(l.position.x,l.position.z);l.position.y<p+3&&(l.position.y=p+3),c._state==="pulse"&&Math.random()<.003&&Zs("jelly",{x:u,z:h},Z.pos);const g=c._syncPhase||c.phase,x=Math.sin(t*1.2+g)*.5+.5;let d=1,m=0;if(c._state==="pulse")d=1+c._pulseSync*1.5,m=c._pulseSync*.15;else if(c._state==="display"){const S=Math.sin(t*4)*.5+.5;d=1.5+S*1.2,m=.15+S*.1}else c._state==="drift"&&(d=1+x*.3);c.bellMat.emissiveIntensity=(.4+x*.8)*Te*d,c.bellMat.opacity=.35+x*.25+m,l.rotation.y+=i*.2;for(let S=2;S<l.children.length;S++)l.children[S].rotation.x=Math.sin(t*2+S+g)*.15,l.children[S].rotation.z=Math.sin(t*1.5+S*.7+g)*.1}}function Em(i,t){const e=ze.ShiftLeft||ze.ShiftRight||fr,n=De==="DAWN"?.6:De==="NIGHT"?1.3:1,s=De==="DAWN"?2:De==="NIGHT"?.6:1;for(let o=0;o<Nn.length;o++){const r=Nn[o],a=r.group,c=a.position.x,l=a.position.z,u=c-Z.pos.x,h=l-Z.pos.z,f=u*u+h*h;if(f>1600){a.visible=!1;continue}if(a.visible=!0,r.state!=="startled"&&r.state!=="following"&&r.state!=="huddle"){const b=e?3.5:2;let T=f<b*b;if(!T)for(let y=0;y<qe.length;y++){if(qe[y].state!=="flee")continue;const M=qe[y].group.position.x-c,R=qe[y].group.position.z-l;if(M*M+R*R<25){T=!0;break}}T&&(r.state="startled",r._scaredT=.6+Math.random()*.5,r.wanderAng=Math.atan2(u,h),r.hopTimer=0,Zs("puff",{x:c,z:l},Z.pos))}if(Yi&&r.state!=="startled"&&r.state!=="huddle"){let b=1/0,T=-1;for(let y=0;y<Nn.length;y++){if(y===o)continue;const M=Nn[y].group.position.x-c,R=Nn[y].group.position.z-l,D=M*M+R*R;D<b&&(b=D,T=y)}T>=0&&b>1&&(r.state="huddle",r._huddleTarget=T)}or>8&&f<144&&r.state==="idle"&&Math.random()<.001&&(r.state="following",r._followT=10+Math.random()*10);const p=c-r._lastTX,g=l-r._lastTZ;p*p+g*g>.25&&(r._baseY=Yt(c,l),r._lastTX=c,r._lastTZ=l);const x={x:c,z:l},d=[];for(let b=0;b<Nn.length;b++){if(b===o)continue;const T=Nn[b].group.position.x,y=Nn[b].group.position.z;(T-c)*(T-c)+(y-l)*(y-l)<100&&d.push({x:T,z:y})}const m=_m(x,d,1.5),S=d.length>0?ym(x,d):{x:0,z:0},v=m.x*2+S.x*.3,_=m.z*2+S.z*.3,A=Math.sqrt(v*v+_*_);switch(r.state){case"idle":{if(r.idleTimer-=i,a.position.y=r._baseY+Math.sin(t*2+r.phase)*.02,a.rotation.y+=Math.sin(t*.5+r.phase)*i*.3,A>.1&&d.length>1&&(a.position.x+=S.x*.05*i,a.position.z+=S.z*.05*i),Math.random()<2e-4&&Zs("puff",{x:c,z:l},Z.pos),r.idleTimer<=0){const b=A>.2?Math.atan2(v,_):0;r.state="hop",r.wanderAng+=(Math.random()-.5)*1.5+b*.3,r.hopTimer=0}break}case"hop":{r.hopTimer+=i;const T=r.hopTimer/1.2;if(T>=1)r.state="idle",r.idleTimer=(1.5+Math.random()*3)*s,a.position.y=r._baseY;else{a.position.y=r._baseY+Math.sin(T*Math.PI)*.3,a.position.x+=Math.sin(r.wanderAng)*r.speed*n*i,a.position.z+=Math.cos(r.wanderAng)*r.speed*i;const y=1-Math.sin(T*Math.PI)*.15,M=1+Math.sin(T*Math.PI)*.2;a.scale.set(y,M,y),a.rotation.y=r.wanderAng}break}case"startled":{r._scaredT-=i,r.hopTimer+=i*1.5;const b=Math.min(r.hopTimer/.8,1);a.position.y=r._baseY+Math.sin(b*Math.PI)*.5,a.position.x+=Math.sin(r.wanderAng)*r.speed*2*i+m.x*.5*i,a.position.z+=Math.cos(r.wanderAng)*r.speed*2*i+m.z*.5*i,a.scale.set(.85,1.3,.85),r._scaredT<=0&&(r.state="idle",r.idleTimer=3+Math.random()*3,a.position.y=r._baseY,a.scale.set(1,1,1));break}case"following":{if(r._followT-=i,f>225||or<3||r._followT<=0){r.state="idle",r.idleTimer=2;break}if(r.wanderAng=Math.atan2(Z.pos.x-c,Z.pos.z-l),f>9){r.hopTimer+=i;const b=r.hopTimer%1.5/1.5;a.position.y=r._baseY+Math.sin(b*Math.PI)*.2,a.position.x+=Math.sin(r.wanderAng)*r.speed*.4*i,a.position.z+=Math.cos(r.wanderAng)*r.speed*.4*i}else a.position.y=r._baseY+Math.sin(t*3+r.phase)*.03;a.rotation.y=r.wanderAng;break}case"huddle":{if(!Yi){r.state="idle",r.idleTimer=2;break}const b=Nn[r._huddleTarget];if(b){const T=b.group.position.x-c,y=b.group.position.z-l,M=Math.sqrt(T*T+y*y);M>.5&&(a.position.x+=T/M*r.speed*.5*i,a.position.z+=y/M*r.speed*.5*i)}a.rotation.z=Math.sin(t*8)*.05,a.position.y=r._baseY;break}}if(r._blinkTimer-=i,r._blinkTimer<=0)if(r._blinkState===0){for(let b=0;b<r.eyes.length;b++)r.eyes[b].scale.y=.1;r._blinkState=1,r._blinkTimer=.08+Math.random()*.06}else{for(let b=0;b<r.eyes.length;b++)r.eyes[b].scale.y=1;r._blinkState=0,r._blinkTimer=2+Math.random()*5}for(let b=0;b<r.ears.length;b++){const T=r.ears[b];T.mesh.rotation.z=T.baseRotZ+Math.sin(t*3.5+T.side*1.2+r.phase)*.08}r.tail.position.y=.38+Math.sin(t*4+r.phase)*.015,a.position.x*a.position.x+a.position.z*a.position.z>Jt*.85*(Jt*.85)&&(r.wanderAng+=Math.PI)}}function Am(i,t){const e=ze.ShiftLeft||ze.ShiftRight||fr;for(let n=0;n<qe.length;n++){const s=qe[n],o=s.group,r=o.position.x,a=o.position.z,c=r-Z.pos.x,l=a-Z.pos.z,u=c*c+l*l;if(u>3600){o.visible=!1;continue}o.visible=!0;const h=Math.atan2(c,l),f=e?18:12,p=f*f,g=e?10:H1,x=g*g,d=r-s._lastTX,m=a-s._lastTZ;d*d+m*m>.25&&(s._baseY=Yt(r,a),s._lastTX=r,s._lastTZ=a);const S=s._baseY;if(s.state!=="flee"&&s.state!=="alert"&&s.state!=="watching"){const M={x:r,z:a},R={x:Z.pos.x,z:Z.pos.z};u<x||kb(M,R,g,e)?(s.state="flee",s.wanderAng=h,s.fleeTimer=2.5+Math.random()*2,s._zigTimer=0,Zs("deer",M,Z.pos)):(u<p||Gb(M,s.wanderAng,R,f,Math.PI*.5))&&(s.state="alert",s._stT=1+Math.random()*1.5,Zs("deer",M,Z.pos))}if(s.state!=="flee")for(let M=0;M<qe.length;M++){if(M===n||qe[M].state!=="flee")continue;const R=qe[M].group.position.x-r,D=qe[M].group.position.z-a;if(R*R+D*D<400){s.state="flee",s.wanderAng=qe[M].wanderAng+(Math.random()-.5)*.4,s.fleeTimer=2+Math.random()*1.5,s._zigTimer=0;break}}const v=[];for(let M=0;M<qe.length;M++){if(M===n)continue;const R=qe[M].group.position.x,D=qe[M].group.position.z;(R-r)*(R-r)+(D-a)*(D-a)<400&&v.push({x:R,z:D})}const _=_m({x:r,z:a},v,3),A=v.length>0?ym({x:r,z:a},v):{x:0,z:0};(s.state==="alert"||s.state==="watching")&&(s.headLook+=(h-s.wanderAng)*.3*i);let E=s.speed,b=!1;switch(s.state){case"walk":{if(b=!0,s.walkTimer-=i,s.walkTimer<=0){const R=Math.random(),D=De==="DUSK"?.55:.4,L=De==="DEEP_NIGHT"?.25:.1;if(R<.25)s.state="pause",s.pauseTimer=2+Math.random()*3;else if(R<D)s.state="graze",s._stT=De==="DUSK"?5+Math.random()*6:3+Math.random()*4;else if(R<D+.1&&Le.length>0){s.state="drink",s._stT=8;let N=1/0;for(let k=0;k<Le.length;k++){const B=Le[k].x-r,Y=Le[k].z-a,W=B*B+Y*Y;W<N&&(N=W,s._drinkTgt=Le[k])}}else R<D+.1+L?(s.state="rest",s._stT=De==="DEEP_NIGHT"?8+Math.random()*8:5+Math.random()*5):(s.wanderAng+=(Math.random()-.5)*1.2,s.walkTimer=3+Math.random()*5)}if((r-s.homeX)*(r-s.homeX)+(a-s.homeZ)*(a-s.homeZ)>400){const R=Math.atan2(s.homeX-r,s.homeZ-a);s.wanderAng+=(R-s.wanderAng)*i*.5}if(v.length>0){const R=Math.atan2(A.x*.15+_.x*.8,A.z*.15+_.z*.8);s.wanderAng+=(R-s.wanderAng)*i*.3}break}case"pause":{s.pauseTimer-=i,s.headLook=Math.sin(t*.6)*.4,s.pauseTimer<=0&&(s.state="walk",s.walkTimer=3+Math.random()*5);break}case"graze":{s._stT-=i,s.headBob=-.5,s._stT<=0&&(s.state="walk",s.walkTimer=2+Math.random()*4,s.headBob=0);break}case"drink":{if(s._stT-=i,s._drinkTgt){const M=s._drinkTgt.x-r,R=s._drinkTgt.z-a;Math.sqrt(M*M+R*R)>2?(s.wanderAng=Math.atan2(M,R),b=!0,E=s.speed*.7):s.headBob=-.6}s._stT<=0&&(s.state="walk",s.walkTimer=3+Math.random()*4,s.headBob=0,s._drinkTgt=null);break}case"rest":{s._stT-=i,o.position.y=Math.max(S-.3,o.position.y-i*.5),s._stT<=0&&(s.state="walk",s.walkTimer=2+Math.random()*3);break}case"alert":{s._stT-=i,u<x?(s.state="flee",s.wanderAng=h,s.fleeTimer=2.5+Math.random()*2):s._stT<=0&&(u<f*1.2*(f*1.2)?(s.state="watching",s._stT=3+Math.random()*3):(s.state="walk",s.walkTimer=2+Math.random()*3));break}case"watching":{s._stT-=i,b=!0,E=s.speed*.3,s.wanderAng=h,u<x?(s.state="flee",s.wanderAng=h,s.fleeTimer=2.5+Math.random()*2):(u>f*1.5*(f*1.5)||s._stT<=0)&&(s.state="walk",s.walkTimer=2+Math.random()*4);break}case"flee":{b=!0,E=s.speed*V1,s.fleeTimer-=i,s._zigTimer-=i,s._zigTimer<=0&&(s._zigDir*=-1,s._zigTimer=.4+Math.random()*.4),s.wanderAng=h+s._zigDir*.3;const M=Vb({x:r,z:a},s.wanderAng,_e,3,1.5);M.x*M.x+M.z*M.z>.01&&(s.wanderAng+=Math.atan2(M.z,M.x)*.3);const R=Hb({x:r,z:a},8);(R.x!==0||R.z!==0)&&(s.wanderAng=Math.atan2(R.z,R.x)),(s.fleeTimer<=0||u>f*2*(f*2))&&(s.state="walk",s.walkTimer=3+Math.random()*5);break}}if(b&&(o.position.x+=Math.sin(s.wanderAng)*E*i,o.position.z+=Math.cos(s.wanderAng)*E*i,s.legCycle+=i*E*3),o.position.x*o.position.x+o.position.z*o.position.z>Jt*.9*(Jt*.9)&&(s.wanderAng=Math.atan2(-o.position.x,-o.position.z)),s.state!=="rest"){const M=S-o.position.y;Math.abs(M)>.01?o.position.y+=Math.sign(M)*Math.min(Math.abs(M),i*2):o.position.y=S}if(o.rotation.y=s.wanderAng,s.state==="alert"||s.state==="watching"){const M=h-s.wanderAng;s.headLook+=(M*.5-s.headLook)*i*3}const y=s.headBob||0;s.neckPivot.rotation.x+=(y-s.neckPivot.rotation.x)*i*3,s.neckPivot.rotation.y+=(s.headLook-s.neckPivot.rotation.y)*i*4,b&&s.state!=="graze"&&s.state!=="drink"&&(s.neckPivot.rotation.x+=Math.sin(s.legCycle*2)*.05);for(let M=0;M<s.legPivots.length;M++){const R=s.legPivots[M];if(b){const D=R.isFront?0:Math.PI,L=R.side>0?Math.PI:0,N=Math.sin(s.legCycle+D+L)*.4*(E/s.speed);R.upper.rotation.x=N,R.lower.rotation.x=Math.max(0,-N*.6)}else s.state==="rest"&&o.position.y<-.1?(R.upper.rotation.x+=(.8-R.upper.rotation.x)*i*2,R.lower.rotation.x+=(1-R.lower.rotation.x)*i*2):(R.upper.rotation.x*=.9,R.lower.rotation.x*=.9)}s.tailPivot.rotation.x=Math.sin(t*1.5+s.phase)*.15,s.state==="flee"&&(s.tailPivot.rotation.x+=.3),s.state==="alert"?s.tailPivot.rotation.z=Math.sin(t*6)*.1:s.tailPivot.rotation.z*=.9,s.mat.emissiveIntensity=(.3+Math.sin(t*.8+s.phase)*.2)*Te,s.headLook*=.98}}function Rm(i,t){for(let e=0;e<cr.length;e++){const n=cr[e],s=n.group,o=s.position.x,r=s.position.z,a=o-Z.pos.x,c=r-Z.pos.z;if(a*a+c*c>2025){s.visible=!1;continue}if(s.visible=!0,n._state==="patrol"){if(Math.random()<.002){let m=1/0,S=null;for(let v=0;v<se.length;v++){const _=se[v].x-o,A=se[v].z-r,E=_*_+A*A;E<900&&E<m&&(m=E,S=se[v])}for(let v=0;v<Bn.length;v++){if(Bn[v].glowIntensity<.3)continue;const _=Bn[v].x-o,A=Bn[v].z-r,E=_*_+A*A;E<900&&E<m&&(m=E,S=Bn[v])}S&&(n._state="attracted",n._attractTarget=S,n._stT=6+Math.random()*8,Zs("moth",{x:o,z:r},Z.pos))}const d=De==="DAWN"?.005:De==="DEEP_NIGHT"?3e-4:.001;if(Math.random()<d){let m=1/0,S=null;for(let v=0;v<_e.length;v++){const _=_e[v].x-o,A=_e[v].z-r,E=_*_+A*A;E<400&&E<m&&(m=E,S=_e[v])}S&&(n._state="rest",n._restTree=S,n._stT=De==="DAWN"?8+Math.random()*10:4+Math.random()*6)}}const l=De==="DEEP_NIGHT"?1.6:De==="DAWN"?.5:1,u=De==="DEEP_NIGHT"?1.4:1;switch(n._state){case"patrol":{n.orbitAng+=i*.4*l;const d=n.centerX+Math.cos(n.orbitAng)*n.orbitR*u,m=n.centerZ+Math.sin(n.orbitAng)*n.orbitR*u;s.position.x+=(d-o)*i*1.5,s.position.z+=(m-r)*i*1.5,s.position.y=n.floatY+Math.sin(t*.7+n.phase)*.8,s.rotation.y=n.orbitAng+Math.PI/2;break}case"attracted":{if(n._stT-=i,!n._attractTarget||n._stT<=0){n._state="patrol",n._attractTarget=null;break}n.orbitAng+=i*.8;const d=n._attractTarget,m=Math.max(.5,n._stT*.4),S=d.x+Math.cos(n.orbitAng)*m,v=d.z+Math.sin(n.orbitAng)*m;s.position.x+=(S-o)*i*2,s.position.z+=(v-r)*i*2,s.position.y+=(2-s.position.y)*i*.5,s.rotation.y=n.orbitAng+Math.PI/2;break}case"rest":{if(n._stT-=i,!n._restTree||n._stT<=0){n._state="patrol",n._restTree=null,n.centerX=s.position.x,n.centerZ=s.position.z;break}const d=n._restTree,m=d.x+.5-o,S=d.z+.5-r,v=Math.sqrt(m*m+S*S);v>.3&&(s.position.x+=m/v*i*2,s.position.z+=S/v*i*2),s.position.y+=(2.5-s.position.y)*i*1.5,s.rotation.y=Math.atan2(m,S);break}}const h=Yt(s.position.x,s.position.z);s.position.y<h+1.5&&(s.position.y=h+1.5);const f=n._state==="rest"?.05:.4,p=Math.sin(t*n.flapSpeed+n.phase)*f;for(let d=0;d<s._wingPivots.length;d++){const m=s._wingPivots[d];m.pivot.rotation.z=p*m.side}const g=Math.sin(t*1.5+n.phase)*.5+.5,x=n._state==="attracted"?.4:0;n.wingMat.emissiveIntensity=(.5+g*.6+x)*Te,n.wingMat.opacity=.45+g*.25}}function s2(i,t){const e=ze.ShiftLeft||ze.ShiftRight||fr;let n=null;if(or>5&&(Ze==="SEEK"||Ze==="RISING")){let s=1/0;for(let o=0;o<Gn.length;o++){if(Gn[o].found)continue;const r=Gn[o].x-Z.pos.x,a=Gn[o].z-Z.pos.z,c=r*r+a*a;c<s&&(s=c,n=Gn[o])}}for(let s=0;s<Jc.length;s++){const o=Jc[s],r=t*.5+o.phase+s/_0*6.28,a=e?4+s*2:1.5+s*.8,c=e?3+s:1.2+Math.sin(t*.7+o.phase)*.5;if(o.targetX=Z.pos.x+Math.cos(r)*a,o.targetY=Z.pos.y-nl+c,o.targetZ=Z.pos.z+Math.sin(r)*a,s===0&&n){const g=Math.min((or-5)/3,.6);o.targetX+=(n.x-Z.pos.x)*g,o.targetZ+=(n.z-Z.pos.z)*g,o.targetY+=.5}const l=e?.8:2.5;o.velX+=(o.targetX-o.group.position.x)*l*i,o.velY+=(o.targetY-o.group.position.y)*l*i,o.velZ+=(o.targetZ-o.group.position.z)*l*i,o.velX*=.92,o.velY*=.92,o.velZ*=.92,o.group.position.x+=o.velX*i*4,o.group.position.y+=o.velY*i*4,o.group.position.z+=o.velZ*i*4;const u=Math.sin(t*2+o.phase)*.5+.5;o.glowMat.opacity=.3+u*.4,o.hazeMat.opacity=.08+u*.12;const h=t*(2.5+s*.5)+o.phase,f=.14+Math.sin(t*1.3+o.phase)*.06;o.group.children[5].position.set(Math.cos(h)*f,Math.sin(h*1.5)*.08,Math.sin(h)*f);for(let g=0;g<o.tendrils.length;g++){const x=o.tendrils[g],d=Math.sin(t*3+g*2.1+o.phase)*.3,m=.08+Math.sin(t*2+g*1.5)*.04;x.mesh.position.x=Math.cos(x.baseAng+d)*m,x.mesh.position.z=Math.sin(x.baseAng+d)*m,x.mesh.rotation.y=x.baseAng+d,x.mesh.rotation.z=Math.PI/3+Math.sin(t*2.5+g)*.2}for(let g=0;g<o.embers.length;g++){const x=(g+1)*.08;o.embers[g].position.y=-.06-x+Math.sin(t*4+g*1.4+o.phase)*.03,o.embers[g].position.x=Math.sin(t*2.5+g*2+o.phase)*.06,o.embers[g].material.opacity=.2+Math.sin(t*5+g*1.7)*.15}o.facet.rotation.y+=i*1.5,o.facet.rotation.x+=i*.7,o.halo.rotation.z+=i*.3,o.halo2.rotation.y+=i*.2}}function o2(i,t){for(let e=0;e<Bn.length;e++){const n=Bn[e],s=n.x-Z.pos.x,o=n.z-Z.pos.z,a=s*s+o*o<(uh+.5)*(uh+.5),c=a?1:0;n.glowIntensity+=(c-n.glowIntensity)*i*3,n.discMat.opacity=n.glowIntensity*.25*(.6+Math.sin(t*2+n.phase)*.4),n.mushMat.emissiveIntensity=(.2+n.glowIntensity*.8)*Te,a&&Z.vel.y>0&&Z.vel.y<=Nc+.5&&(Z.vel.y=Nc+G1,n.glowIntensity=1.5,bb());const l=.08+n.glowIntensity*.25;n.sporeMat.opacity=l;for(let u=0;u<n.spores.length;u++){const h=n.spores[u];h.drift+=i*.3,h.mesh.position.y+=h.speed*i*(.5+n.glowIntensity),h.mesh.position.x=h.baseX+Math.sin(t*.8+h.drift)*.15,h.mesh.position.z=h.baseZ+Math.cos(t*.6+h.drift)*.12,h.mesh.position.y>.8&&(h.mesh.position.y=.03),h.mesh.scale.setScalar(.6+Math.sin(t*2+u)*.4)}for(let u=0;u<n.glowWorms.length;u++){const h=Math.sin(t*1.5+u*1.3+n.phase)*.5+.5;n.glowWorms[u].material.opacity=.1+h*.4+n.glowIntensity*.3}}}function r2(i,t){for(let e=0;e<vi.length;e++){const n=vi[e];if(n.popped){if(n.popTimer-=i,n.popTimer<=0){n.popped=!1,n.group.visible=!0;const u=w()*6.28,h=8+w()*Jt*.5;n.homeX=Math.cos(u)*h,n.homeZ=Math.sin(u)*h,n.floatY=.5+w()*4,n.group.position.set(n.homeX,n.floatY,n.homeZ)}continue}n.driftAng+=i*.2;const s=n.homeX+Math.sin(n.driftAng)*3,o=n.homeZ+Math.cos(n.driftAng*.7)*3;n.group.position.x+=(s-n.group.position.x)*i*.5,n.group.position.z+=(o-n.group.position.z)*i*.5,n.group.position.y=n.floatY+Math.sin(t*.6+n.phase)*n.bobAmp;const r=(t*.1+n.phase)%1;n.shellMat.color.setRGB(Math.sin(r*6.28)*.15+.7,Math.sin(r*6.28+2.09)*.15+.7,Math.sin(r*6.28+4.19)*.15+.8),n.shellMat.opacity=.18+Math.sin(t*1.5+n.phase)*.08;const a=n.group.position.x-Z.pos.x,c=n.group.position.y-Z.pos.y,l=n.group.position.z-Z.pos.z;a*a+c*c+l*l<tp*tp*n.sc*n.sc&&(n.popped=!0,n.popTimer=8+Math.random()*8,n.group.visible=!1,SS(n.group.position.x,n.group.position.y,n.group.position.z,6),xb(n.group.position,Z.pos))}}function a2(i,t){const e=Vr();for(let n=0;n<Le.length;n++){const s=Le[n],o=.015+e*.01;for(let h=0;h<s.pads.length;h++)s.pads[h].mesh.position.y=.05+Math.sin(t*(.8+e*.4)+s.pads[h].phase)*o;const r=e*.08;s.waterMat.emissiveIntensity=(.15+r+Math.sin(t*1+s.phase)*.1)*Te;const a=Math.sin(t*1.2+s.phase)*.5+.5;s.flMat.emissiveIntensity=(.3+a*.5)*Te;const c=.25+e*.2,l=.12+e*.08;for(let h=0;h<s.ripples.length;h++){const f=s.ripples[h],p=(t*c+f.phase)%1,g=.2+p*s.pondR*.8;f.mesh.scale.setScalar(g),f.mesh.material.opacity=(1-p)*l}const u=1+e*.5;for(let h=0;h<s.tadpoles.length;h++){const f=s.tadpoles[h];f.ang+=f.speed*u*i;const p=Math.cos(f.ang)*f.orbR,g=Math.sin(f.ang)*f.orbR;f.body.position.x=p,f.body.position.z=g,f.body.rotation.y=f.ang+Math.PI/2;const x=.02;f.tail.position.x=p-Math.cos(f.ang)*x,f.tail.position.z=g-Math.sin(f.ang)*x,f.tail.rotation.y=f.ang,f.tail.rotation.z=Math.PI/2+Math.sin(t*(8+e*2)+h*3)*.4}}}function c2(i,t){if(gu-=i,gu<=0){gu=.5;for(let o=0;o<se.length;o++){const r=se[o],a=r.x-Z.pos.x,c=r.z-Z.pos.z;if(a*a+c*c<36){Jn={x:r.x,z:r.z},gi=0;break}}}const e=n2();if(!Jn){e.visible=!1;return}if(gi+=i*12,gi>30){Jn=null,gi=0,e.visible=!1;return}e.visible=!0,e.position.set(Jn.x,.15,Jn.z),e.scale.setScalar(gi),e.material.opacity=(1-gi/30)*.45;const n=gi,s=4;for(let o=0;o<Pn.length;o++){const r=Pn[o],a=r.x-Jn.x,c=r.z-Jn.z,l=Math.sqrt(a*a+c*c);if(Math.abs(l-n)<s){const u=1-Math.abs(l-n)/s;r.capMat.emissiveIntensity=Math.max(r.capMat.emissiveIntensity,(r.base+u*2)*Te)}}for(let o=0;o<bi.length;o++){const r=bi[o],a=r.group.position.x-Jn.x,c=r.group.position.z-Jn.z,l=Math.sqrt(a*a+c*c);if(Math.abs(l-n)<s){const u=1-Math.abs(l-n)/s;r.petalMat.emissiveIntensity=Math.max(r.petalMat.emissiveIntensity,(.3+u*1.5)*Te)}}}function l2(i,t){const e=Z.pos.x;Z.pos.y;const n=Z.pos.z,s=Vr(),o=Yi?.6:s>.3?s*.4:0;for(let l=0;l<bi.length;l++){const u=bi[l],h=u.group.position.x,f=u.group.position.z,p=h-e,g=f-n,d=p*p+g*g<16?1:0;u._react=u._react||0,u._react+=(d-u._react)*i*(d>0?4:1.5);const m=(1+u._react*.15)*(1-o*.12),S=(1+u._react*.05)*(1-o*.15);u.group.scale.set(m,S,m),u.petalMat.emissiveIntensity+=u._react*.6*Te*(1-o*.4)}for(let l=0;l<Pn.length;l++){const u=Pn[l],h=u.x-e,f=u.z-n,g=h*h+f*f<4?1:0;u._touch=u._touch||0,u._touch+=(g-u._touch)*i*(g>0?6:1.5);const x=s*.4;u.capMat.emissiveIntensity+=(u._touch*1.5+x)*Te;const d=1+u._touch*.08;u.group.scale.set(d,1+u._touch*.04,d)}for(let l=0;l<na.length;l++){const u=na[l],h=u.group.position.x,f=u.group.position.z,p=h-e,g=f-n,d=p*p+g*g<2.25?.65:1;u._curl=u._curl===void 0?1:u._curl,u._curl+=(d-u._curl)*i*(d<1?4:1.5),u.group.scale.set(1+(1-u._curl)*.3,u._curl,1+(1-u._curl)*.3)}e2();const r=Yo==="FOG_BANK"?.5:1;let a=0,c=0;for(let l=0;l<se.length;l++){const u=se[l],h=u.x-e,f=u.z-n;if(h*h+f*f<36)for(let p=0;p<se.length;p++){if(l===p)continue;const g=se[p],x=u.x-g.x,d=u.z-g.z,m=x*x+d*d;if(m<400){a++;const S=(1-Math.sqrt(m)/20)*.8*r;if(g.mat.emissiveIntensity+=S*Te,c<Jh){const v=Kh[c],_=v.geo.attributes.position.array,A=1,E=1;_[0]=u.x,_[1]=A,_[2]=u.z,_[3]=g.x,_[4]=E,_[5]=g.z,v.geo.attributes.position.needsUpdate=!0,v.geo.computeBoundingSphere(),v.active=!0;const b=Math.sin(t*3+l*1.5+p*.7)*.3+.5;v.opacity=S*b*Te,v.line.material.opacity=v.opacity,v.line.visible=!0,c++}}}}for(let l=c;l<Jh;l++){const u=Kh[l];u.line.visible&&(u.opacity*=.85,u.line.material.opacity=u.opacity,u.opacity<.01&&(u.line.visible=!1))}return a}let oc="EXPLORE",xu=0,Mu=0;function u2(i,t){let e=!1;for(let x=0;x<se.length;x++){const d=se[x].x-Z.pos.x,m=se[x].z-Z.pos.z;if(d*d+m*m<64){e=!0;break}}oc=e?"NEAR_CRYSTAL":"EXPLORE",xu+=i;const n=Vr(),s=Math.max(.2,1-n*.8),o=(oc==="NEAR_CRYSTAL"?.08:.25)/s,r=Math.floor((oc==="NEAR_CRYSTAL"?120:100)*s);if(xu>o&&(xu=0,X0(0,t)<r))if(oc==="NEAR_CRYSTAL")for(let d=0;d<se.length;d++){const m=se[d].x-Z.pos.x,S=se[d].z-Z.pos.z;m*m+S*S<100&&dc(se[d].x,Yt(se[d].x,se[d].z)+1,se[d].z,3+Math.random()*4)}else if(Math.random()<.3&&bi.length>0){const d=bi[Math.floor(Math.random()*bi.length)];if(d._react>.3){const m=d.group.position.x,S=d.group.position.z;dc(m+(Math.random()-.5)*2,Yt(m,S)+.5,S+(Math.random()-.5)*2,4+Math.random()*6)}}else{const d=Math.random()*6.28,m=5+Math.random()*25,S=Z.pos.x+Math.cos(d)*m,v=Z.pos.z+Math.sin(d)*m;dc(S,Yt(S,v),v,6+Math.random()*10)}if(Mu+=i,Mu>.2){Mu=0;for(let x=0;x<Pn.length;x++){const d=Pn[x],m=d.x-Z.pos.x,S=d.z-Z.pos.z;m*m+S*S<200&&Math.random()<.15&&pS(d.x,.6*d.group.scale.x,d.z)}}for(let x=0;x<Pn.length;x++){const d=Pn[x],m=d.x-Z.pos.x,S=(d.group.position.y||0)-Z.pos.y,v=d.z-Z.pos.z;if(m*m+S*S+v*v>2500){d.group.visible&&(d.group.visible=!1);continue}d.group.visible||(d.group.visible=!0);const A=Math.sin(t*d.speed+d.phase)*.5+.5;d.capMat.emissiveIntensity=d.base*(.5+A*.8)*Te}for(let x=0;x<se.length;x++){const d=se[x],m=Math.sin(t*.6+d.phase)*.5+.5;d.mat.emissiveIntensity=(1+m*1.5)*Te,d.group.children[0].rotation.y+=i*.15,d.light&&(d.light.intensity=(.3+m*.4)*Te)}if(!ss.length)for(let x=0;x<se.length;x++)ss.push({idx:x,dist:0});const a=Z.pos.x-Tp,c=Z.pos.z-Ep;if(a*a+c*c>1){Tp=Z.pos.x,Ep=Z.pos.z;for(let x=0;x<se.length;x++){const d=se[x],m=d.x-Z.pos.x,S=d.z-Z.pos.z;ss[x].idx=x,ss[x].dist=m*m+S*S}ss.sort((x,d)=>x.dist-d.dist)}for(let x=0;x<Rs.length;x++)if(x<ss.length&&ss[x].dist<2500){const d=se[ss[x].idx],m=Math.sin(t*.6+d.phase)*.5+.5;Rs[x].position.set(d.x,1.5,d.z),Rs[x].intensity=(1.5+m*2)*Te,Rs[x].distance=16,Rs[x].color.setHex(F.crystal)}else Rs[x].intensity=0;if(Xi>.8&&Math.random()<.005)for(let x=0;x<Xr.length;x++){const d=Xr[x];if(!d.dispersed&&Math.random()<.1){d.dispersed=!0;for(let m=0;m<8;m++)N0(d.x,d.h+.05,d.z);for(let m=2;m<d.group.children.length;m++)d.group.children[m].visible=!1;d.regrowTimer=15+Math.random()*10}}const l=Xi>.3?(Xi-.3)*.02:0,u=Yi?.03:0;if(Math.random()<l+u)for(let x=0;x<_e.length;x++){const d=_e[x],m=d.x-Z.pos.x,S=d.z-Z.pos.z;if(m*m+S*S<900&&Math.random()<.15){const v=(d.treeH||10)*.7+(d.y||0);AS(d.x,v,d.z);break}}Tm(i,t),Em(i,t),Am(i,t),Rm(i,t),L0(i,t),bm(i,t);const h=Z.pos.x,f=Z.pos.y,p=Z.pos.z;for(let x=0;x<jc.length;x++){const d=jc[x],m=d.x||d.group.position.x,S=d.z||d.group.position.z,v=m-h,_=(d.group.position.y||0)-f,A=S-p,E=v*v+_*_+A*A;if(E>2500){d.group.visible&&(d.group.visible=!1);continue}if(d.group.visible||(d.group.visible=!0),!d.sparkles||E>400)continue;let b=0;for(let L=0;L<se.length;L++){const N=se[L].x-m,k=se[L].z-S,B=N*N+k*k;B<100&&(b=Math.max(b,(1-Math.sqrt(B)/10)*.6))}const T=m-Z.pos.x,y=S-Z.pos.z,M=T*T+y*y,R=M<25?(1-Math.sqrt(M)/5)*.3:0;let D=0;if(Jn&&gi>0){const L=m-Jn.x,N=S-Jn.z,k=Math.sqrt(L*L+N*N);Math.abs(k-gi)<3&&(D=(1-Math.abs(k-gi)/3)*.8)}for(let L=0;L<d.sparkles.length;L++){const N=Math.sin(t*4+x*2.3+L*1.7)*.35;d.sparkles[L].material.opacity=.15+N+b+R+D}d.mossMat&&R>0&&(d.mossMat.emissiveIntensity=.05+R*.4*Math.sin(t*2+x)*.5+.5)}s2(i,t),Bw(Xr,i,t,Z.pos),o2(i,t),r2(i,t),a2(i,t),$0(i,t,Z.pos),Fw(i,t),RS(i,t),_S(i),bS(i),c2(i);const g=l2(i,t);if(HS(i,t),uS(t),Z.onGround&&Z.vel.x*Z.vel.x+Z.vel.z*Z.vel.z>.5){const d=Math.atan2(Z.vel.x,Z.vel.z),m=ze.ShiftLeft||ze.ShiftRight||fr;IS(Z.pos.x,Z.pos.z,d,m)}LS(i,Vr()),Ab(i,Z.pos,Le,wm,De,Vr()),gb(i),qb(Z.pos,qe,Nn,li,cr,Bn,Le,g),Yb(i)}let He=0,Qh=!1;function h2(){Qh||(Qh=!0,tw(!0),t2())}function Cm(){requestAnimationFrame(Cm);const i=Math.min(y0.getDelta(),.1);He+=i,YS(i);const t=QS(i,He,Z.pos);eb(i,Z.pos,t,Bs,No),mw(i,He,De,Te,Yo),Mi>0&&(Sf.intensity+=Mi*.8,ut.background.r=Math.min(ut.background.r+Mi*.08,.25),ut.background.g=Math.min(ut.background.g+Mi*.08,.25),ut.background.b=Math.min(ut.background.b+Mi*.12,.35)),hb(i,Xi,t,Yi,Mi,De,Z.pos,Le),wb(Z.pos);const e=Math.sqrt(Z.vel.x*Z.vel.x+Z.vel.z*Z.vel.z);let n=!1;for(let s=0;s<Le.length;s++){const o=Le[s].x-Z.pos.x,r=Le[s].z-Z.pos.z;if(o*o+r*r<225){n=!0;break}}if(!n)for(let s=0;s<Bn.length;s++){const o=Bn[s].x-Z.pos.x,r=Bn[s].z-Z.pos.z;if(o*o+r*r<144){n=!0;break}}if(Bb(i,De,e,n),mS(Bs,No),zw(Bs,No,Xi),TS(Bs,No),!Qh){gn.position.set(0,nl,0),gn.rotation.order="YXZ",gn.rotation.y+=i*.08,gn.rotation.x=0;for(let s=0;s<Pn.length;s++){const o=Pn[s],r=Math.sin(He*o.speed+o.phase)*.5+.5;o.capMat.emissiveIntensity=o.base*(.5+r*.8)*Te}for(let s=0;s<se.length;s++){const o=se[s];o.mat.emissiveIntensity=(1+Math.sin(He*.6+o.phase)*.5*1.5+.75)*Te}Tm(i,He),Em(i,He),Am(i,He),Rm(i,He),L0(i,He),bm(i,He),$0(i,He,Z.pos);for(let s=0;s<vi.length;s++)vi[s].popped||(vi[s].group.position.y=vi[s].floatY+Math.sin(He*.6+vi[s].phase)*vi[s].bobAmp);for(let s=0;s<Le.length;s++)for(let o=0;o<Le[s].pads.length;o++)Le[s].pads[o].mesh.position.y=.05+Math.sin(He*.8+Le[s].pads[o].phase)*.015;for(let s=0;s<Gn.length;s++){const o=Gn[s],r=Math.sin(He*1.5+o.phase)*.5+.5;o.group.position.y=o.flyY+Math.sin(He*.8+o.phase)*.3,o.glowMat.opacity=.3+r*.4}ip();return}vw(i),u2(i,He),X0(i,He),gS(i),gn.position.copy(Z.pos),gn.position.y+=D0,gn.rotation.order="YXZ",gn.rotation.y=Jr,gn.rotation.x=Ws,Jb(i,Z.pos),ip()}try{gh(0,0,5),cw(),qS({scene:ut,moon:ii,moon2:bf,hemiLight:Sf,playerLight:Tf}),i2();const i=ow();xw(_e,jc),Mw(up),gw(t=>{let e=!1;for(let n=0;n<Le.length;n++){const s=Le[n].x-Z.pos.x,o=Le[n].z-Z.pos.z;if(s*s+o*o<16){e=!0;break}}db(t,e),Math.random()<.4&&up(Z.pos.x,Z.pos.z,1)},()=>pb(),t=>mb(t)),KS(),tb(),hS(150),dS(60),K1(),xS(N1),vS(20),Nw(40),wS(30),ES(50),PS(),pw(),oS(),cS(),lS(),ub(),Xb(),jb(),Kb(),kS({orbs:Gn,obeliskGroup:tS(),obeliskMat:eS(),obeliskGlowMat:nS(),pinnacleOrb:iS(),pinnacleRings:sS(),moatMesh:rS(),moatMat:aS(),rainbowArcs:ta,player:Z,makeLaser:DS,orbHudEl:Qb(),deers:qe,puffs:Nn,jellies:li,moths:cr,trees:_e,treeMeshes:zo,groundMesh:i,playOrbCollect:Mb,playOrbWarble:vb,playLaserZap:_b,playLaserHum:yb,stopLaserHums:Sb}),Q1(h2);for(let t=0;t<50;t++){const e=Math.random()*6.28,n=3+Math.random()*Jt*.7,s=Math.cos(e)*n,o=Math.sin(e)*n;dc(s,Yt(s,o),o,8+Math.random()*12)}console.log("✓ Init: trees="+_e.length+" mush="+Pn.length+" crystals="+se.length+" orbs="+Gn.length+" creatures="+(li.length+Nn.length+qe.length+cr.length)+" wisps="+Jc.length+" dandelions="+Xr.length+" fairyRings="+Bn.length+" bubbles="+vi.length+" ponds="+Le.length+" scene="+ut.children.length),Cm()}catch(i){console.error("INIT FAILED:",i),document.body.innerHTML='<div style="color:red;padding:30px;font-family:monospace"><h2>Init Failed</h2><pre>'+(i.stack||i.message)+"</pre></div>"}
