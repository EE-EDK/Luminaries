(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fh="172",xm=0,wf=1,vm=2,up=1,hp=2,Di=3,as=0,Tn=1,Dt=2,Bi=0,Po=1,ce=2,Sf=3,bf=4,Mm=5,As=100,_m=101,ym=102,wm=103,Sm=104,bm=200,Tm=201,Em=202,Am=203,su=204,ou=205,Rm=206,Cm=207,Pm=208,Im=209,Lm=210,Dm=211,Um=212,Nm=213,zm=214,ru=0,au=1,cu=2,Ho=3,lu=4,uu=5,hu=6,fu=7,fp=0,Fm=1,Om=2,rs=0,Bm=1,km=2,Gm=3,dp=4,Hm=5,Vm=6,Wm=7,pp=300,Vo=301,Wo=302,du=303,pu=304,Oc=306,Xo=1e3,Cs=1001,mu=1002,kn=1003,Xm=1004,oa=1005,yi=1006,Yc=1007,Ps=1008,Wi=1009,mp=1010,gp=1011,Or=1012,Oh=1013,Bs=1014,wi=1015,ki=1016,Bh=1017,kh=1018,qo=1020,xp=35902,vp=1021,Mp=1022,ai=1023,_p=1024,yp=1025,Io=1026,Yo=1027,Gh=1028,Hh=1029,wp=1030,Vh=1031,Wh=1033,Ka=33776,Ja=33777,Qa=33778,tc=33779,gu=35840,xu=35841,vu=35842,Mu=35843,_u=36196,yu=37492,wu=37496,Su=37808,bu=37809,Tu=37810,Eu=37811,Au=37812,Ru=37813,Cu=37814,Pu=37815,Iu=37816,Lu=37817,Du=37818,Uu=37819,Nu=37820,zu=37821,ec=36492,Fu=36494,Ou=36495,Sp=36283,Bu=36284,ku=36285,Gu=36286,qm=3200,Ym=3201,bp=0,Zm=1,ns="",bn="srgb",Zo="srgb-linear",dc="linear",pe="srgb",qs=7680,Tf=519,$m=512,jm=513,Km=514,Tp=515,Jm=516,Qm=517,tg=518,eg=519,Hu=35044,xe=35048,Ef="300 es",Fi=2e3,pc=2001;class tr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zc=Math.PI/180,Vu=180/Math.PI;function Gi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[s&255]+Ke[s>>8&255]+Ke[s>>16&255]+Ke[s>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function $t(s,t,e){return Math.max(t,Math.min(e,s))}function ng(s,t){return(s%t+t)%t}function $c(s,t,e){return(1-e)*s+e*t}function Mi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function me(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,i,o,r,a,c,l){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l)}set(t,e,n,i,o,r,a,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=o,u[5]=c,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],x=i[0],f=i[3],m=i[6],S=i[1],M=i[4],_=i[7],A=i[2],E=i[5],T=i[8];return o[0]=r*x+a*S+c*A,o[3]=r*f+a*M+c*E,o[6]=r*m+a*_+c*T,o[1]=l*x+u*S+h*A,o[4]=l*f+u*M+h*E,o[7]=l*m+u*_+h*T,o[2]=d*x+p*S+g*A,o[5]=d*f+p*M+g*E,o[8]=d*m+p*_+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*r*u-e*a*l-n*o*u+n*a*c+i*o*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*r-a*l,d=a*c-u*o,p=l*o-r*c,g=e*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(i*l-u*n)*x,t[2]=(a*n-i*r)*x,t[3]=d*x,t[4]=(u*e-i*c)*x,t[5]=(i*o-a*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(jc.makeScale(t,e)),this}rotate(t){return this.premultiply(jc.makeRotation(-t)),this}translate(t,e){return this.premultiply(jc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const jc=new Wt;function Ep(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function mc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ig(){const s=mc("canvas");return s.style.display="block",s}const Af={};function vo(s){s in Af||(Af[s]=!0,console.warn(s))}function sg(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function og(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rg(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Rf=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cf=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ag(){const s={enabled:!0,workingColorSpace:Zo,spaces:{},convert:function(i,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===pe&&(i.r=Hi(i.r),i.g=Hi(i.g),i.b=Hi(i.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===pe&&(i.r=Lo(i.r),i.g=Lo(i.g),i.b=Lo(i.b))),i},fromWorkingColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},toWorkingColorSpace:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ns?dc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,r){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Zo]:{primaries:t,whitePoint:n,transfer:dc,toXYZ:Rf,fromXYZ:Cf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Rf,fromXYZ:Cf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),s}const oe=ag();function Hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Lo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ys;class cg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ys===void 0&&(Ys=mc("canvas")),Ys.width=t.width,Ys.height=t.height;const n=Ys.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ys}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=mc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=Hi(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hi(e[n]/255)*255):e[n]=Hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lg=0;class Ap{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=Gi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Kc(i[r].image)):o.push(Kc(i[r]))}else o=Kc(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Kc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ug=0;class nn extends tr{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,n=Cs,i=Cs,o=yi,r=Ps,a=ai,c=Wi,l=nn.DEFAULT_ANISOTROPY,u=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Gi(),this.name="",this.source=new Ap(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xo:t.x=t.x-Math.floor(t.x);break;case Cs:t.x=t.x<0?0:1;break;case mu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xo:t.y=t.y-Math.floor(t.y);break;case Cs:t.y=t.y<0?0:1;break;case mu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=pp;nn.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,i=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],x=c[2],f=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+f)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,_=(p+1)/2,A=(m+1)/2,E=(u+d)/4,T=(h+x)/4,b=(g+f)/4;return M>_&&M>A?M<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(M),i=E/n,o=T/n):_>A?_<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(_),n=E/i,o=b/i):A<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(A),n=T/o,i=b/o),this.set(n,i,o,e),this}let S=Math.sqrt((f-g)*(f-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(f-g)/S,this.y=(h-x)/S,this.z=(d-u)/S,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hg extends tr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new nn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Ap(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends hg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Rp extends nn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=kn,this.minFilter=kn,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fg extends nn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=kn,this.minFilter=kn,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $r{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=o[r+0],p=o[r+1],g=o[r+2],x=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(h!==x||c!==d||l!==p||u!==g){let f=1-a;const m=c*d+l*p+u*g+h*x,S=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const A=Math.sqrt(M),E=Math.atan2(A,m*S);f=Math.sin(f*E)/A,a=Math.sin(a*E)/A}const _=a*S;if(c=c*f+d*_,l=l*f+p*_,u=u*f+g*_,h=h*f+x*_,f===1-a){const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=o[r],d=o[r+1],p=o[r+2],g=o[r+3];return t[e]=a*g+u*h+c*p-l*d,t[e+1]=c*g+u*d+l*h-a*p,t[e+2]=l*g+u*p+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(o/2),d=c(n/2),p=c(i/2),g=c(o/2);switch(r){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(o-l)*p,this._z=(r-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(o+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(o-l)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(r-i)/p,this._x=(o+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+r*a+i*l-o*c,this._y=i*u+r*c+o*a-n*l,this._z=o*u+r*l+n*c-i*a,this._w=r*u-n*a-i*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=r*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*i-a*n),u=2*(a*e-o*i),h=2*(o*n-r*e);return this.x=e+c*l+r*h-a*u,this.y=n+c*u+a*l-o*h,this.z=i+c*h+o*u-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-o*a,this.y=o*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jc.copy(this).projectOnVector(t),this.sub(Jc)}reflect(t){return this.sub(Jc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jc=new N,Pf=new $r;class Vs{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,si):si.fromBufferAttribute(o,r),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ra.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(t.matrixWorld),this.union(ra)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(or),aa.subVectors(this.max,or),Zs.subVectors(t.a,or),$s.subVectors(t.b,or),js.subVectors(t.c,or),qi.subVectors($s,Zs),Yi.subVectors(js,$s),hs.subVectors(Zs,js);let e=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-hs.z,hs.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,hs.z,0,-hs.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-hs.y,hs.x,0];return!Qc(e,Zs,$s,js,aa)||(e=[1,0,0,0,1,0,0,0,1],!Qc(e,Zs,$s,js,aa))?!1:(ca.crossVectors(qi,Yi),e=[ca.x,ca.y,ca.z],Qc(e,Zs,$s,js,aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ri=[new N,new N,new N,new N,new N,new N,new N,new N],si=new N,ra=new Vs,Zs=new N,$s=new N,js=new N,qi=new N,Yi=new N,hs=new N,or=new N,aa=new N,ca=new N,fs=new N;function Qc(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){fs.fromArray(s,o);const a=i.x*Math.abs(fs.x)+i.y*Math.abs(fs.y)+i.z*Math.abs(fs.z),c=t.dot(fs),l=e.dot(fs),u=n.dot(fs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const dg=new Vs,rr=new N,tl=new N;class Ws{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):dg.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rr.subVectors(t,this.center);const e=rr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(rr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rr.copy(t.center).add(tl)),this.expandByPoint(rr.copy(t.center).sub(tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new N,el=new N,la=new N,Zi=new N,nl=new N,ua=new N,il=new N;class Xh{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){el.copy(t).add(e).multiplyScalar(.5),la.copy(e).sub(t).normalize(),Zi.copy(this.origin).sub(el);const o=t.distanceTo(e)*.5,r=-this.direction.dot(la),a=Zi.dot(this.direction),c=-Zi.dot(la),l=Zi.lengthSq(),u=Math.abs(1-r*r);let h,d,p,g;if(u>0)if(h=r*c-a,d=r*a-c,g=o*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,p=h*(h+r*d+2*a)+d*(r*h+d+2*c)+l}else d=o,h=Math.max(0,-(r*d+a)),p=-h*h+d*(d+2*c)+l;else d=-o,h=Math.max(0,-(r*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-r*o+a)),d=h>0?-o:Math.min(Math.max(-o,-c),o),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-o,-c),o),p=d*(d+2*c)+l):(h=Math.max(0,-(r*o+a)),d=h>0?o:Math.min(Math.max(-o,-c),o),p=-h*h+d*(d+2*c)+l);else d=r>0?-o:o,h=Math.max(0,-(r*d+a)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(el).addScaledVector(la,d),p}intersectSphere(t,e){Ci.subVectors(t.center,this.origin);const n=Ci.dot(this.direction),i=Ci.dot(Ci)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),u>=0?(o=(t.min.y-d.y)*u,r=(t.max.y-d.y)*u):(o=(t.max.y-d.y)*u,r=(t.min.y-d.y)*u),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,n,i,o){nl.subVectors(e,t),ua.subVectors(n,t),il.crossVectors(nl,ua);let r=this.direction.dot(il),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Zi.subVectors(this.origin,t);const c=a*this.direction.dot(ua.crossVectors(Zi,ua));if(c<0)return null;const l=a*this.direction.dot(nl.cross(Zi));if(l<0||c+l>r)return null;const u=-a*Zi.dot(il);return u<0?null:this.at(u/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,i,o,r,a,c,l,u,h,d,p,g,x,f){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l,u,h,d,p,g,x,f)}set(t,e,n,i,o,r,a,c,l,u,h,d,p,g,x,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=o,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=p,m[7]=g,m[11]=x,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ks.setFromMatrixColumn(t,0).length(),o=1/Ks.setFromMatrixColumn(t,1).length(),r=1/Ks.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){const d=r*u,p=r*h,g=a*u,x=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+p*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*u,p=c*h,g=l*u,x=l*h;e[0]=d+x*a,e[4]=g*a-p,e[8]=r*l,e[1]=r*h,e[5]=r*u,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*u,p=c*h,g=l*u,x=l*h;e[0]=d-x*a,e[4]=-r*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=r*u,e[9]=x-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*u,p=r*h,g=a*u,x=a*h;e[0]=c*u,e[4]=g*l-p,e[8]=d*l+x,e[1]=c*h,e[5]=x*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,p=r*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-d*h,e[8]=g*h+p,e[1]=h,e[5]=r*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+g,e[10]=d-x*h}else if(t.order==="XZY"){const d=r*c,p=r*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+x,e[5]=r*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pg,t,mg)}lookAt(t,e,n){const i=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),$i.crossVectors(n,Ln),$i.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),$i.crossVectors(n,Ln)),$i.normalize(),ha.crossVectors(Ln,$i),i[0]=$i.x,i[4]=ha.x,i[8]=Ln.x,i[1]=$i.y,i[5]=ha.y,i[9]=Ln.y,i[2]=$i.z,i[6]=ha.z,i[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],x=n[6],f=n[10],m=n[14],S=n[3],M=n[7],_=n[11],A=n[15],E=i[0],T=i[4],b=i[8],y=i[12],v=i[1],R=i[5],U=i[9],L=i[13],z=i[2],V=i[6],G=i[10],j=i[14],W=i[3],lt=i[7],pt=i[11],Rt=i[15];return o[0]=r*E+a*v+c*z+l*W,o[4]=r*T+a*R+c*V+l*lt,o[8]=r*b+a*U+c*G+l*pt,o[12]=r*y+a*L+c*j+l*Rt,o[1]=u*E+h*v+d*z+p*W,o[5]=u*T+h*R+d*V+p*lt,o[9]=u*b+h*U+d*G+p*pt,o[13]=u*y+h*L+d*j+p*Rt,o[2]=g*E+x*v+f*z+m*W,o[6]=g*T+x*R+f*V+m*lt,o[10]=g*b+x*U+f*G+m*pt,o[14]=g*y+x*L+f*j+m*Rt,o[3]=S*E+M*v+_*z+A*W,o[7]=S*T+M*R+_*V+A*lt,o[11]=S*b+M*U+_*G+A*pt,o[15]=S*y+M*L+_*j+A*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],x=t[7],f=t[11],m=t[15];return g*(+o*c*h-i*l*h-o*a*d+n*l*d+i*a*p-n*c*p)+x*(+e*c*p-e*l*d+o*r*d-i*r*p+i*l*u-o*c*u)+f*(+e*l*h-e*a*p-o*r*h+n*r*p+o*a*u-n*l*u)+m*(-i*a*u-e*c*h+e*a*d+i*r*h-n*r*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],x=t[13],f=t[14],m=t[15],S=h*f*l-x*d*l+x*c*p-a*f*p-h*c*m+a*d*m,M=g*d*l-u*f*l-g*c*p+r*f*p+u*c*m-r*d*m,_=u*x*l-g*h*l+g*a*p-r*x*p-u*a*m+r*h*m,A=g*h*c-u*x*c-g*a*d+r*x*d+u*a*f-r*h*f,E=e*S+n*M+i*_+o*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=S*T,t[1]=(x*d*o-h*f*o-x*i*p+n*f*p+h*i*m-n*d*m)*T,t[2]=(a*f*o-x*c*o+x*i*l-n*f*l-a*i*m+n*c*m)*T,t[3]=(h*c*o-a*d*o-h*i*l+n*d*l+a*i*p-n*c*p)*T,t[4]=M*T,t[5]=(u*f*o-g*d*o+g*i*p-e*f*p-u*i*m+e*d*m)*T,t[6]=(g*c*o-r*f*o-g*i*l+e*f*l+r*i*m-e*c*m)*T,t[7]=(r*d*o-u*c*o+u*i*l-e*d*l-r*i*p+e*c*p)*T,t[8]=_*T,t[9]=(g*h*o-u*x*o-g*n*p+e*x*p+u*n*m-e*h*m)*T,t[10]=(r*x*o-g*a*o+g*n*l-e*x*l-r*n*m+e*a*m)*T,t[11]=(u*a*o-r*h*o-u*n*l+e*h*l+r*n*p-e*a*p)*T,t[12]=A*T,t[13]=(u*x*i-g*h*i+g*n*d-e*x*d-u*n*f+e*h*f)*T,t[14]=(g*a*i-r*x*i-g*n*c+e*x*c+r*n*f-e*a*f)*T,t[15]=(r*h*i-u*a*i+u*n*c-e*h*c-r*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,u=o*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*r,0,l*c-i*a,u*c+i*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,u=r+r,h=a+a,d=o*l,p=o*u,g=o*h,x=r*u,f=r*h,m=a*h,S=c*l,M=c*u,_=c*h,A=n.x,E=n.y,T=n.z;return i[0]=(1-(x+m))*A,i[1]=(p+_)*A,i[2]=(g-M)*A,i[3]=0,i[4]=(p-_)*E,i[5]=(1-(d+m))*E,i[6]=(f+S)*E,i[7]=0,i[8]=(g+M)*T,i[9]=(f-S)*T,i[10]=(1-(d+x))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=Ks.set(i[0],i[1],i[2]).length();const r=Ks.set(i[4],i[5],i[6]).length(),a=Ks.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],oi.copy(this);const l=1/o,u=1/r,h=1/a;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=h,oi.elements[9]*=h,oi.elements[10]*=h,e.setFromRotationMatrix(oi),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=Fi){const c=this.elements,l=2*o/(e-t),u=2*o/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(a===Fi)p=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===pc)p=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=Fi){const c=this.elements,l=1/(e-t),u=1/(n-i),h=1/(r-o),d=(e+t)*l,p=(n+i)*u;let g,x;if(a===Fi)g=(r+o)*h,x=-2*h;else if(a===pc)g=o*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ks=new N,oi=new fe,pg=new N(0,0,0),mg=new N(1,1,1),$i=new N,ha=new N,Ln=new N,If=new fe,Lf=new $r;class bi{constructor(t=0,e=0,n=0,i=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$t(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return If.makeRotationFromQuaternion(t),this.setFromRotationMatrix(If,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lf.setFromEuler(this),this.setFromQuaternion(Lf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class Cp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gg=0;const Df=new N,Js=new $r,Pi=new fe,fa=new N,ar=new N,xg=new N,vg=new $r,Uf=new N(1,0,0),Nf=new N(0,1,0),zf=new N(0,0,1),Ff={type:"added"},Mg={type:"removed"},Qs={type:"childadded",child:null},sl={type:"childremoved",child:null};class le extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=le.DEFAULT_UP.clone();const t=new N,e=new bi,n=new $r,i=new N(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new Wt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(Uf,t)}rotateY(t){return this.rotateOnAxis(Nf,t)}rotateZ(t){return this.rotateOnAxis(zf,t)}translateOnAxis(t,e){return Df.copy(t).applyQuaternion(this.quaternion),this.position.add(Df.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uf,t)}translateY(t){return this.translateOnAxis(Nf,t)}translateZ(t){return this.translateOnAxis(zf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fa.copy(t):fa.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(ar,fa,this.up):Pi.lookAt(fa,ar,this.up),this.quaternion.setFromRotationMatrix(Pi),i&&(Pi.extractRotation(i.matrixWorld),Js.setFromRotationMatrix(Pi),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ff),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mg),sl.child=t,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ff),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,t,xg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,vg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];o(t.shapes,h)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),u=r(t.images),h=r(t.shapes),d=r(t.skeletons),p=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}le.DEFAULT_UP=new N(0,1,0);le.DEFAULT_MATRIX_AUTO_UPDATE=!0;le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new N,Ii=new N,ol=new N,Li=new N,to=new N,eo=new N,Of=new N,rl=new N,al=new N,cl=new N,ll=new ge,ul=new ge,hl=new ge;class Jn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ri.subVectors(t,e),i.cross(ri);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){ri.subVectors(i,e),Ii.subVectors(n,e),ol.subVectors(t,e);const r=ri.dot(ri),a=ri.dot(Ii),c=ri.dot(ol),l=Ii.dot(Ii),u=Ii.dot(ol),h=r*l-a*a;if(h===0)return o.set(0,0,0),null;const d=1/h,p=(l*c-a*u)*d,g=(r*u-a*c)*d;return o.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,e,n,i,o,r,a,c){return this.getBarycoord(t,e,n,i,Li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Li.x),c.addScaledVector(r,Li.y),c.addScaledVector(a,Li.z),c)}static getInterpolatedAttribute(t,e,n,i,o,r){return ll.setScalar(0),ul.setScalar(0),hl.setScalar(0),ll.fromBufferAttribute(t,e),ul.fromBufferAttribute(t,n),hl.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(ll,o.x),r.addScaledVector(ul,o.y),r.addScaledVector(hl,o.z),r}static isFrontFacing(t,e,n,i){return ri.subVectors(n,e),Ii.subVectors(t,e),ri.cross(Ii).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ri.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Jn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Jn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return Jn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return Jn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Jn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;to.subVectors(i,n),eo.subVectors(o,n),rl.subVectors(t,n);const c=to.dot(rl),l=eo.dot(rl);if(c<=0&&l<=0)return e.copy(n);al.subVectors(t,i);const u=to.dot(al),h=eo.dot(al);if(u>=0&&h<=u)return e.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return r=c/(c-u),e.copy(n).addScaledVector(to,r);cl.subVectors(t,o);const p=to.dot(cl),g=eo.dot(cl);if(g>=0&&p<=g)return e.copy(o);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(eo,a);const f=u*g-p*h;if(f<=0&&h-u>=0&&p-g>=0)return Of.subVectors(o,i),a=(h-u)/(h-u+(p-g)),e.copy(i).addScaledVector(Of,a);const m=1/(f+x+d);return r=x*m,a=d*m,e.copy(n).addScaledVector(to,r).addScaledVector(eo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},da={h:0,s:0,l:0};function fl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=ng(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=fl(r,o,t+1/3),this.g=fl(r,o,t),this.b=fl(r,o,t-1/3)}return oe.toWorkingColorSpace(this,i),this}setStyle(t,e=bn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=bn){const n=Pp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}copyLinearToSRGB(t){return this.r=Lo(t.r),this.g=Lo(t.g),this.b=Lo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bn){return oe.fromWorkingColorSpace(Je.copy(this),t),Math.round($t(Je.r*255,0,255))*65536+Math.round($t(Je.g*255,0,255))*256+Math.round($t(Je.b*255,0,255))}getHexString(t=bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Je.copy(this),e);const n=Je.r,i=Je.g,o=Je.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let c,l;const u=(a+r)/2;if(a===r)c=0,l=0;else{const h=r-a;switch(l=u<=.5?h/(r+a):h/(2-r-a),r){case n:c=(i-o)/h+(i<o?6:0);break;case i:c=(o-n)/h+2;break;case o:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=bn){oe.fromWorkingColorSpace(Je.copy(this),t);const e=Je.r,n=Je.g,i=Je.b;return t!==bn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+e,ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ji),t.getHSL(da);const n=$c(ji.h,da.h,e),i=$c(ji.s,da.s,e),o=$c(ji.l,da.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new ot;ot.NAMES=Pp;let _g=0;class cs extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Po,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=su,this.blendDst=ou,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Po&&(n.blending=this.blending),this.side!==as&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==su&&(n.blendSrc=this.blendSrc),this.blendDst!==ou&&(n.blendDst=this.blendDst),this.blendEquation!==As&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ho&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Y extends cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new N,pa=new ft;class Ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hu,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pa.fromBufferAttribute(this,e),pa.applyMatrix3(t),this.setXY(e,pa.x,pa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array),o=me(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hu&&(t.usage=this.usage),t}}class Ip extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lp extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ht extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yg=0;const Xn=new fe,dl=new le,no=new N,Dn=new Vs,cr=new Vs,Ge=new N;class we extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ep(t)?Lp:Ip)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Wt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,e,n){return Xn.makeTranslation(t,e,n),this.applyMatrix4(Xn),this}scale(t,e,n){return Xn.makeScale(t,e,n),this.applyMatrix4(Xn),this}lookAt(t){return dl.lookAt(t),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ht(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];Dn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(Dn.min,cr.min),Dn.expandByPoint(Ge),Ge.addVectors(Dn.max,cr.max),Dn.expandByPoint(Ge)):(Dn.expandByPoint(cr.min),Dn.expandByPoint(cr.max))}Dn.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)Ge.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Ge));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ge.fromBufferAttribute(a,l),c&&(no.fromBufferAttribute(t,l),Ge.add(no)),i=Math.max(i,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let b=0;b<n.count;b++)a[b]=new N,c[b]=new N;const l=new N,u=new N,h=new N,d=new ft,p=new ft,g=new ft,x=new N,f=new N;function m(b,y,v){l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,v),d.fromBufferAttribute(o,b),p.fromBufferAttribute(o,y),g.fromBufferAttribute(o,v),u.sub(l),h.sub(l),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(R),f.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[b].add(x),a[y].add(x),a[v].add(x),c[b].add(f),c[y].add(f),c[v].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let b=0,y=S.length;b<y;++b){const v=S[b],R=v.start,U=v.count;for(let L=R,z=R+U;L<z;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const M=new N,_=new N,A=new N,E=new N;function T(b){A.fromBufferAttribute(i,b),E.copy(A);const y=a[b];M.copy(y),M.sub(A.multiplyScalar(A.dot(y))).normalize(),_.crossVectors(E,y);const R=_.dot(c[b])<0?-1:1;r.setXYZW(b,M.x,M.y,M.z,R)}for(let b=0,y=S.length;b<y;++b){const v=S[b],R=v.start,U=v.count;for(let L=R,z=R+U;L<z;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new N,o=new N,r=new N,a=new N,c=new N,l=new N,u=new N,h=new N;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),x=t.getX(d+1),f=t.getX(d+2);i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,f),u.subVectors(r,o),h.subVectors(i,o),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,f),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),u.subVectors(r,o),h.subVectors(i,o),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let x=0,f=c.length;x<f;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*u;for(let m=0;m<u;m++)d[g++]=l[p++]}return new Ue(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(i[c]=u,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const o=t.morphAttributes;for(const l in o){const u=[],h=o[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,u=r.length;l<u;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bf=new fe,ds=new Xh,ma=new Ws,kf=new N,ga=new N,xa=new N,va=new N,pl=new N,Ma=new N,Gf=new N,_a=new N;class I extends le{constructor(t=new we,e=new Y){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){Ma.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],h=o[c];u!==0&&(pl.fromBufferAttribute(h,t),r?Ma.addScaledVector(pl,u):Ma.addScaledVector(pl.sub(e),u))}e.add(Ma)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(o),ds.copy(t.ray).recast(t.near),!(ma.containsPoint(ds.origin)===!1&&(ds.intersectSphere(ma,kf)===null||ds.origin.distanceToSquared(kf)>(t.far-t.near)**2))&&(Bf.copy(o).invert(),ds.copy(t.ray).applyMatrix4(Bf),!(n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ds)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const f=d[g],m=r[f.materialIndex],S=Math.max(f.start,p.start),M=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let _=S,A=M;_<A;_+=3){const E=a.getX(_),T=a.getX(_+1),b=a.getX(_+2);i=ya(this,m,t,n,l,u,h,E,T,b),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let f=g,m=x;f<m;f+=3){const S=a.getX(f),M=a.getX(f+1),_=a.getX(f+2);i=ya(this,r,t,n,l,u,h,S,M,_),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const f=d[g],m=r[f.materialIndex],S=Math.max(f.start,p.start),M=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));for(let _=S,A=M;_<A;_+=3){const E=_,T=_+1,b=_+2;i=ya(this,m,t,n,l,u,h,E,T,b),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let f=g,m=x;f<m;f+=3){const S=f,M=f+1,_=f+2;i=ya(this,r,t,n,l,u,h,S,M,_),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function wg(s,t,e,n,i,o,r,a){let c;if(t.side===Tn?c=n.intersectTriangle(r,o,i,!0,a):c=n.intersectTriangle(i,o,r,t.side===as,a),c===null)return null;_a.copy(a),_a.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(_a);return l<e.near||l>e.far?null:{distance:l,point:_a.clone(),object:s}}function ya(s,t,e,n,i,o,r,a,c,l){s.getVertexPosition(a,ga),s.getVertexPosition(c,xa),s.getVertexPosition(l,va);const u=wg(s,t,e,n,ga,xa,va,Gf);if(u){const h=new N;Jn.getBarycoord(Gf,ga,xa,va,h),i&&(u.uv=Jn.getInterpolatedAttribute(i,a,c,l,h,new ft)),o&&(u.uv1=Jn.getInterpolatedAttribute(o,a,c,l,h,new ft)),r&&(u.normal=Jn.getInterpolatedAttribute(r,a,c,l,h,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new N,materialIndex:0};Jn.getNormal(ga,xa,va,d.normal),u.face=d,u.barycoord=h}return u}class jr extends we{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,o,4),g("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(h,2));function g(x,f,m,S,M,_,A,E,T,b,y){const v=_/T,R=A/b,U=_/2,L=A/2,z=E/2,V=T+1,G=b+1;let j=0,W=0;const lt=new N;for(let pt=0;pt<G;pt++){const Rt=pt*R-L;for(let Ft=0;Ft<V;Ft++){const jt=Ft*v-U;lt[x]=jt*S,lt[f]=Rt*M,lt[m]=z,l.push(lt.x,lt.y,lt.z),lt[x]=0,lt[f]=0,lt[m]=E>0?1:-1,u.push(lt.x,lt.y,lt.z),h.push(Ft/T),h.push(1-pt/b),j+=1}}for(let pt=0;pt<b;pt++)for(let Rt=0;Rt<T;Rt++){const Ft=d+Rt+V*pt,jt=d+Rt+V*(pt+1),et=d+(Rt+1)+V*(pt+1),ut=d+(Rt+1)+V*pt;c.push(Ft,jt,ut),c.push(jt,et,ut),W+=6}a.addGroup(p,W,y),p+=W,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $o(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ln(s){const t={};for(let e=0;e<s.length;e++){const n=$o(s[e]);for(const i in n)t[i]=n[i]}return t}function Sg(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Dp(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const gc={clone:$o,merge:ln};var bg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bg,this.fragmentShader=Tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$o(t.uniforms),this.uniformsGroups=Sg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Up extends le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new N,Hf=new ft,Vf=new ft;class Nn extends Up{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vu*2*Math.atan(Math.tan(Zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,e){return this.getViewBounds(t,Hf,Vf),e.subVectors(Vf,Hf)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const io=-90,so=1;class Eg extends le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Nn(io,so,t,e);i.layers=this.layers,this.add(i);const o=new Nn(io,so,t,e);o.layers=this.layers,this.add(o);const r=new Nn(io,so,t,e);r.layers=this.layers,this.add(r);const a=new Nn(io,so,t,e);a.layers=this.layers,this.add(a);const c=new Nn(io,so,t,e);c.layers=this.layers,this.add(c);const l=new Nn(io,so,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===pc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Np extends nn{constructor(t,e,n,i,o,r,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Vo,super(t,e,n,i,o,r,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ag extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Np(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new jr(5,5,5),o=new Rn({name:"CubemapFromEquirect",uniforms:$o(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:Bi});o.uniforms.tEquirect.value=e;const r=new I(i,o),a=e.minFilter;return e.minFilter===Ps&&(e.minFilter=yi),new Eg(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}class qh{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(t),this.density=e}clone(){return new qh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rg extends le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Cg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Hu,this.updateRanges=[],this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,o=this.stride;i<o;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new N;class xc{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array),o=me(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return new Ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new xc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[i+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class zp extends cs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let oo;const lr=new N,ro=new N,ao=new N,co=new ft,ur=new ft,Fp=new fe,wa=new N,hr=new N,Sa=new N,Wf=new ft,ml=new ft,Xf=new ft;class Pg extends le{constructor(t=new zp){if(super(),this.isSprite=!0,this.type="Sprite",oo===void 0){oo=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Cg(e,5);oo.setIndex([0,1,2,0,2,3]),oo.setAttribute("position",new xc(n,3,0,!1)),oo.setAttribute("uv",new xc(n,2,3,!1))}this.geometry=oo,this.material=t,this.center=new ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ro.setFromMatrixScale(this.matrixWorld),Fp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ao.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ro.multiplyScalar(-ao.z);const n=this.material.rotation;let i,o;n!==0&&(o=Math.cos(n),i=Math.sin(n));const r=this.center;ba(wa.set(-.5,-.5,0),ao,r,ro,i,o),ba(hr.set(.5,-.5,0),ao,r,ro,i,o),ba(Sa.set(.5,.5,0),ao,r,ro,i,o),Wf.set(0,0),ml.set(1,0),Xf.set(1,1);let a=t.ray.intersectTriangle(wa,hr,Sa,!1,lr);if(a===null&&(ba(hr.set(-.5,.5,0),ao,r,ro,i,o),ml.set(0,1),a=t.ray.intersectTriangle(wa,Sa,hr,!1,lr),a===null))return;const c=t.ray.origin.distanceTo(lr);c<t.near||c>t.far||e.push({distance:c,point:lr.clone(),uv:Jn.getInterpolation(lr,wa,hr,Sa,Wf,ml,Xf,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ba(s,t,e,n,i,o){co.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(ur.x=o*co.x-i*co.y,ur.y=i*co.x+o*co.y):ur.copy(co),s.copy(t),s.x+=ur.x,s.y+=ur.y,s.applyMatrix4(Fp)}class Ig extends nn{constructor(t=null,e=1,n=1,i,o,r,a,c,l=kn,u=kn,h,d){super(null,r,a,c,l,u,i,o,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ti extends Ue{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const lo=new fe,qf=new fe,Ta=[],Yf=new Vs,Lg=new fe,fr=new I,dr=new Ws;class Qn extends I{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ti(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Lg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,lo),Yf.copy(t.boundingBox).applyMatrix4(lo),this.boundingBox.union(Yf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ws),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,lo),dr.copy(t.boundingSphere).applyMatrix4(lo),this.boundingSphere.union(dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(n),t.ray.intersectsSphere(dr)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,lo),qf.multiplyMatrices(n,lo),fr.matrixWorld=qf,fr.raycast(t,Ta);for(let r=0,a=Ta.length;r<a;r++){const c=Ta[r];c.instanceId=o,c.object=this,e.push(c)}Ta.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ti(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ig(new Float32Array(i*this.count),i,this.count,Gh,wi));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=i*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const gl=new N,Dg=new N,Ug=new Wt;class Ms{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=gl.subVectors(n,e).cross(Dg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(gl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ug.getNormalMatrix(t),i=this.coplanarPoint(gl).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Ws,Ea=new N;class Yh{constructor(t=new Ms,e=new Ms,n=new Ms,i=new Ms,o=new Ms,r=new Ms){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fi){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],p=i[8],g=i[9],x=i[10],f=i[11],m=i[12],S=i[13],M=i[14],_=i[15];if(n[0].setComponents(c-o,d-l,f-p,_-m).normalize(),n[1].setComponents(c+o,d+l,f+p,_+m).normalize(),n[2].setComponents(c+r,d+u,f+g,_+S).normalize(),n[3].setComponents(c-r,d-u,f-g,_-S).normalize(),n[4].setComponents(c-a,d-h,f-x,_-M).normalize(),e===Fi)n[5].setComponents(c+a,d+h,f+x,_+M).normalize();else if(e===pc)n[5].setComponents(a,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ea.x=i.normal.x>0?t.max.x:t.min.x,Ea.y=i.normal.y>0?t.max.y:t.min.y,Ea.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zh extends cs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const vc=new N,Mc=new N,Zf=new fe,pr=new Xh,Aa=new Ws,xl=new N,$f=new N;class Op extends le{constructor(t=new we,e=new Zh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)vc.fromBufferAttribute(e,i-1),Mc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=vc.distanceTo(Mc);t.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(i),Aa.radius+=o,t.ray.intersectsSphere(Aa)===!1)return;Zf.copy(i).invert(),pr.copy(t.ray).applyMatrix4(Zf);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let x=p,f=g-1;x<f;x+=l){const m=u.getX(x),S=u.getX(x+1),M=Ra(this,t,pr,c,m,S);M&&e.push(M)}if(this.isLineLoop){const x=u.getX(g-1),f=u.getX(p),m=Ra(this,t,pr,c,x,f);m&&e.push(m)}}else{const p=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let x=p,f=g-1;x<f;x+=l){const m=Ra(this,t,pr,c,x,x+1);m&&e.push(m)}if(this.isLineLoop){const x=Ra(this,t,pr,c,g-1,p);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ra(s,t,e,n,i,o){const r=s.geometry.attributes.position;if(vc.fromBufferAttribute(r,i),Mc.fromBufferAttribute(r,o),e.distanceSqToSegment(vc,Mc,xl,$f)>n)return;xl.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(xl);if(!(c<t.near||c>t.far))return{distance:c,point:$f.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const jf=new N,Kf=new N;class Ng extends Op{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,o=e.count;i<o;i+=2)jf.fromBufferAttribute(e,i),Kf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+jf.distanceTo(Kf);t.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $h extends cs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Jf=new fe,Wu=new Xh,Ca=new Ws,Pa=new N;class Bp extends le{constructor(t=new we,e=new $h){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(i),Ca.radius+=o,t.ray.intersectsSphere(Ca)===!1)return;Jf.copy(i).invert(),Wu.copy(t.ray).applyMatrix4(Jf);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let g=d,x=p;g<x;g++){const f=l.getX(g);Pa.fromBufferAttribute(h,f),Qf(Pa,f,c,i,t,e,this)}}else{const d=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let g=d,x=p;g<x;g++)Pa.fromBufferAttribute(h,g),Qf(Pa,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Qf(s,t,e,n,i,o,r){const a=Wu.distanceSqToPoint(s);if(a<e){const c=new N;Wu.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class re extends le{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Kr extends nn{constructor(t,e,n,i,o,r,a,c,l){super(t,e,n,i,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kp extends nn{constructor(t,e,n,i,o,r,a,c,l,u=Io){if(u!==Io&&u!==Yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Io&&(n=Bs),n===void 0&&u===Yo&&(n=qo),super(null,i,o,r,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:kn,this.minFilter=c!==void 0?c:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(o-1);const u=n[i],d=n[i+1]-u,p=(r-u)/d;return(i+p)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),c=e||(r.isVector2?new ft:new N);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,i=[],o=[],r=[],a=new N,c=new fe;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new N)}o[0]=new N,r[0]=new N;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($t(i[p-1].dot(i[p]),-1,1));o[p].applyMatrix4(c.makeRotationAxis(a,g))}r[p].crossVectors(i[p],o[p])}if(e===!0){let p=Math.acos($t(o[0].dot(o[t]),-1,1));p/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),r[g].crossVectors(i[g],o[g])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class jh extends Ei{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ft){const n=e,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*u-p*h+this.aX,l=d*h+p*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class zg extends jh{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Kh(){let s=0,t=0,e=0,n=0;function i(o,r,a,c){s=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){i(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,u,h){let d=(r-o)/l-(a-o)/(l+u)+(a-r)/u,p=(a-r)/u-(c-r)/(u+h)+(c-a)/h;d*=u,p*=u,i(r,a,d,p)},calc:function(o){const r=o*o,a=r*o;return s+t*o+e*r+n*a}}}const Ia=new N,vl=new Kh,Ml=new Kh,_l=new Kh;class Jr extends Ei{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new N){const n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%o]:(Ia.subVectors(i[0],i[1]).add(i[0]),l=Ia);const h=i[a%o],d=i[(a+1)%o];if(this.closed||a+2<o?u=i[(a+2)%o]:(Ia.subVectors(i[o-1],i[o-2]).add(i[o-1]),u=Ia),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),f<1e-4&&(f=x),vl.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,x,f),Ml.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,x,f),_l.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,x,f)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Ml.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),_l.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(vl.calc(c),Ml.calc(c),_l.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function td(s,t,e,n,i){const o=(n-t)*.5,r=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*s+e}function Fg(s,t){const e=1-s;return e*e*t}function Og(s,t){return 2*(1-s)*s*t}function Bg(s,t){return s*s*t}function Cr(s,t,e,n){return Fg(s,t)+Og(s,e)+Bg(s,n)}function kg(s,t){const e=1-s;return e*e*e*t}function Gg(s,t){const e=1-s;return 3*e*e*s*t}function Hg(s,t){return 3*(1-s)*s*s*t}function Vg(s,t){return s*s*s*t}function Pr(s,t,e,n,i){return kg(s,t)+Gg(s,e)+Hg(s,n)+Vg(s,i)}class Gp extends Ei{constructor(t=new ft,e=new ft,n=new ft,i=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ft){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Pr(t,i.x,o.x,r.x,a.x),Pr(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Wg extends Ei{constructor(t=new N,e=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new N){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Pr(t,i.x,o.x,r.x,a.x),Pr(t,i.y,o.y,r.y,a.y),Pr(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hp extends Ei{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jh extends Ei{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vp extends Ei{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(Cr(t,i.x,o.x,r.x),Cr(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wp extends Ei{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(Cr(t,i.x,o.x,r.x),Cr(t,i.y,o.y,r.y),Cr(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xp extends Ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,c=i[r===0?r:r-1],l=i[r],u=i[r>i.length-2?i.length-1:r+1],h=i[r>i.length-3?i.length-1:r+2];return n.set(td(a,c.x,l.x,u.x,h.x),td(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ft().fromArray(i))}return this}}var Xu=Object.freeze({__proto__:null,ArcCurve:zg,CatmullRomCurve3:Jr,CubicBezierCurve:Gp,CubicBezierCurve3:Wg,EllipseCurve:jh,LineCurve:Hp,LineCurve3:Jh,QuadraticBezierCurve:Vp,QuadraticBezierCurve3:Wp,SplineCurve:Xp});class Xg extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xu[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Xu[i.type]().fromJSON(i))}return this}}class _c extends Xg{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Hp(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new Vp(this.currentPoint.clone(),new ft(t,e),new ft(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){const a=new Gp(this.currentPoint.clone(),new ft(t,e),new ft(n,i),new ft(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Xp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,i,o,r,a,c),this}absellipse(t,e,n,i,o,r,a,c){const l=new jh(t,e,n,i,o,r,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $e extends we{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new N,u=new ft;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const p=n+h/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),r.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(r[d]/t+1)/2,u.y=(r[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new Ht(r,3)),this.setAttribute("normal",new Ht(a,3)),this.setAttribute("uv",new Ht(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class _t extends we{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),o=Math.floor(o);const u=[],h=[],d=[],p=[];let g=0;const x=[],f=n/2;let m=0;S(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Ht(h,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(p,2));function S(){const _=new N,A=new N;let E=0;const T=(e-t)/n;for(let b=0;b<=o;b++){const y=[],v=b/o,R=v*(e-t)+t;for(let U=0;U<=i;U++){const L=U/i,z=L*c+a,V=Math.sin(z),G=Math.cos(z);A.x=R*V,A.y=-v*n+f,A.z=R*G,h.push(A.x,A.y,A.z),_.set(V,T,G).normalize(),d.push(_.x,_.y,_.z),p.push(L,1-v),y.push(g++)}x.push(y)}for(let b=0;b<i;b++)for(let y=0;y<o;y++){const v=x[y][b],R=x[y+1][b],U=x[y+1][b+1],L=x[y][b+1];(t>0||y!==0)&&(u.push(v,R,L),E+=3),(e>0||y!==o-1)&&(u.push(R,U,L),E+=3)}l.addGroup(m,E,0),m+=E}function M(_){const A=g,E=new ft,T=new N;let b=0;const y=_===!0?t:e,v=_===!0?1:-1;for(let U=1;U<=i;U++)h.push(0,f*v,0),d.push(0,v,0),p.push(.5,.5),g++;const R=g;for(let U=0;U<=i;U++){const z=U/i*c+a,V=Math.cos(z),G=Math.sin(z);T.x=y*G,T.y=f*v,T.z=y*V,h.push(T.x,T.y,T.z),d.push(0,v,0),E.x=V*.5+.5,E.y=G*.5*v+.5,p.push(E.x,E.y),g++}for(let U=0;U<i;U++){const L=A+U,z=R+U;_===!0?u.push(z,z+1,L):u.push(z+1,z,L),b+=3}l.addGroup(m,b,_===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _t(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ti extends _t{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new ti(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qr extends we{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],r=[];a(i),l(n),u(),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(o.slice(),3)),this.setAttribute("uv",new Ht(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const M=new N,_=new N,A=new N;for(let E=0;E<e.length;E+=3)p(e[E+0],M),p(e[E+1],_),p(e[E+2],A),c(M,_,A,S)}function c(S,M,_,A){const E=A+1,T=[];for(let b=0;b<=E;b++){T[b]=[];const y=S.clone().lerp(_,b/E),v=M.clone().lerp(_,b/E),R=E-b;for(let U=0;U<=R;U++)U===0&&b===E?T[b][U]=y:T[b][U]=y.clone().lerp(v,U/R)}for(let b=0;b<E;b++)for(let y=0;y<2*(E-b)-1;y++){const v=Math.floor(y/2);y%2===0?(d(T[b][v+1]),d(T[b+1][v]),d(T[b][v])):(d(T[b][v+1]),d(T[b+1][v+1]),d(T[b+1][v]))}}function l(S){const M=new N;for(let _=0;_<o.length;_+=3)M.x=o[_+0],M.y=o[_+1],M.z=o[_+2],M.normalize().multiplyScalar(S),o[_+0]=M.x,o[_+1]=M.y,o[_+2]=M.z}function u(){const S=new N;for(let M=0;M<o.length;M+=3){S.x=o[M+0],S.y=o[M+1],S.z=o[M+2];const _=f(S)/2/Math.PI+.5,A=m(S)/Math.PI+.5;r.push(_,1-A)}g(),h()}function h(){for(let S=0;S<r.length;S+=6){const M=r[S+0],_=r[S+2],A=r[S+4],E=Math.max(M,_,A),T=Math.min(M,_,A);E>.9&&T<.1&&(M<.2&&(r[S+0]+=1),_<.2&&(r[S+2]+=1),A<.2&&(r[S+4]+=1))}}function d(S){o.push(S.x,S.y,S.z)}function p(S,M){const _=S*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){const S=new N,M=new N,_=new N,A=new N,E=new ft,T=new ft,b=new ft;for(let y=0,v=0;y<o.length;y+=9,v+=6){S.set(o[y+0],o[y+1],o[y+2]),M.set(o[y+3],o[y+4],o[y+5]),_.set(o[y+6],o[y+7],o[y+8]),E.set(r[v+0],r[v+1]),T.set(r[v+2],r[v+3]),b.set(r[v+4],r[v+5]),A.copy(S).add(M).add(_).divideScalar(3);const R=f(A);x(E,v+0,S,R),x(T,v+2,M,R),x(b,v+4,_,R)}}function x(S,M,_,A){A<0&&S.x===1&&(r[M]=S.x-1),_.x===0&&_.z===0&&(r[M]=A/2/Math.PI+.5)}function f(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qr(t.vertices,t.indices,t.radius,t.details)}}class Qh extends Qr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qh(t.radius,t.detail)}}class yc extends _c{constructor(t){super(t),this.uuid=Gi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new _c().fromJSON(i))}return this}}const qg={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=qp(s,0,i,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,u,h,d,p;if(n&&(o=Kg(s,t,o,e)),s.length>80*e){a=l=s[0],c=u=s[1];for(let g=e;g<i;g+=e)h=s[g],d=s[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);p=Math.max(l-a,u-c),p=p!==0?32767/p:0}return Br(o,r,e,a,c,p,0),r}};function qp(s,t,e,n,i){let o,r;if(i===cx(s,t,e,n)>0)for(o=t;o<e;o+=n)r=ed(o,s[o],s[o+1],r);else for(o=e-n;o>=t;o-=n)r=ed(o,s[o],s[o+1],r);return r&&Bc(r,r.next)&&(Gr(r),r=r.next),r}function ks(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Bc(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Gr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Br(s,t,e,n,i,o,r){if(!s)return;!r&&o&&nx(s,n,i,o);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,o?Zg(s,n,i,o):Yg(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Gr(s),s=l.next,a=l.next;continue}if(s=l,s===a){r?r===1?(s=$g(ks(s),t,e),Br(s,t,e,n,i,o,2)):r===2&&jg(s,t,e,n,i,o):Br(ks(s),t,e,n,i,o,1);break}}}function Yg(s){const t=s.prev,e=s,n=s.next;if(Ce(t,e,n)>=0)return!1;const i=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,u=i<o?i<r?i:r:o<r?o:r,h=a<c?a<l?a:l:c<l?c:l,d=i>o?i>r?i:r:o>r?o:r,p=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&bo(i,a,o,c,r,l,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Zg(s,t,e,n){const i=s.prev,o=s,r=s.next;if(Ce(i,o,r)>=0)return!1;const a=i.x,c=o.x,l=r.x,u=i.y,h=o.y,d=r.y,p=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,x=a>c?a>l?a:l:c>l?c:l,f=u>h?u>d?u:d:h>d?h:d,m=qu(p,g,t,e,n),S=qu(x,f,t,e,n);let M=s.prevZ,_=s.nextZ;for(;M&&M.z>=m&&_&&_.z<=S;){if(M.x>=p&&M.x<=x&&M.y>=g&&M.y<=f&&M!==i&&M!==r&&bo(a,u,c,h,l,d,M.x,M.y)&&Ce(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=p&&_.x<=x&&_.y>=g&&_.y<=f&&_!==i&&_!==r&&bo(a,u,c,h,l,d,_.x,_.y)&&Ce(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=m;){if(M.x>=p&&M.x<=x&&M.y>=g&&M.y<=f&&M!==i&&M!==r&&bo(a,u,c,h,l,d,M.x,M.y)&&Ce(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=S;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=f&&_!==i&&_!==r&&bo(a,u,c,h,l,d,_.x,_.y)&&Ce(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function $g(s,t,e){let n=s;do{const i=n.prev,o=n.next.next;!Bc(i,o)&&Yp(i,n,n.next,o)&&kr(i,o)&&kr(o,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Gr(n),Gr(n.next),n=s=o),n=n.next}while(n!==s);return ks(n)}function jg(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&ox(r,a)){let c=Zp(r,a);r=ks(r,r.next),c=ks(c,c.next),Br(r,t,e,n,i,o,0),Br(c,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function Kg(s,t,e,n){const i=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:s.length,l=qp(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(sx(l));for(i.sort(Jg),o=0;o<i.length;o++)e=Qg(i[o],e);return e}function Jg(s,t){return s.x-t.x}function Qg(s,t){const e=tx(s,t);if(!e)return t;const n=Zp(e,s);return ks(n,n.next),ks(e,e.next)}function tx(s,t){let e=t,n=-1/0,i;const o=s.x,r=s.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===o))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let u=1/0,h;e=i;do o>=e.x&&e.x>=c&&o!==e.x&&bo(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(h=Math.abs(r-e.y)/(o-e.x),kr(e,s)&&(h<u||h===u&&(e.x>i.x||e.x===i.x&&ex(i,e)))&&(i=e,u=h)),e=e.next;while(e!==a);return i}function ex(s,t){return Ce(s.prev,s,t.prev)<0&&Ce(t.next,s,s.next)<0}function nx(s,t,e,n){let i=s;do i.z===0&&(i.z=qu(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ix(i)}function ix(s){let t,e,n,i,o,r,a,c,l=1;do{for(e=s,s=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;e=n}o.nextZ=null,l*=2}while(r>1);return s}function qu(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function sx(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function bo(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function ox(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!rx(s,t)&&(kr(s,t)&&kr(t,s)&&ax(s,t)&&(Ce(s.prev,s,t.prev)||Ce(s,t.prev,t))||Bc(s,t)&&Ce(s.prev,s,s.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Bc(s,t){return s.x===t.x&&s.y===t.y}function Yp(s,t,e,n){const i=Da(Ce(s,t,e)),o=Da(Ce(s,t,n)),r=Da(Ce(e,n,s)),a=Da(Ce(e,n,t));return!!(i!==o&&r!==a||i===0&&La(s,e,t)||o===0&&La(s,n,t)||r===0&&La(e,s,n)||a===0&&La(e,t,n))}function La(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Da(s){return s>0?1:s<0?-1:0}function rx(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Yp(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function kr(s,t){return Ce(s.prev,s,s.next)<0?Ce(s,t,s.next)>=0&&Ce(s,s.prev,t)>=0:Ce(s,t,s.prev)<0||Ce(s,s.next,t)<0}function ax(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Zp(s,t){const e=new Yu(s.i,s.x,s.y),n=new Yu(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function ed(s,t,e,n){const i=new Yu(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Gr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Yu(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cx(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}class Ir{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return Ir.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];nd(t),id(n,t);let r=t.length;e.forEach(nd);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,id(n,e[c]);const a=qg.triangulate(n,i);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function nd(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function id(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Us extends Qr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Us(t.radius,t.detail)}}class tf extends Qr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new tf(t.radius,t.detail)}}class ve extends we{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=t/a,d=e/c,p=[],g=[],x=[],f=[];for(let m=0;m<u;m++){const S=m*d-r;for(let M=0;M<l;M++){const _=M*h-o;g.push(_,-S,0),x.push(0,0,1),f.push(M/a),f.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<a;S++){const M=S+l*m,_=S+l*(m+1),A=S+1+l*(m+1),E=S+1+l*m;p.push(M,_,E),p.push(_,A,E)}this.setIndex(p),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.width,t.height,t.widthSegments,t.heightSegments)}}class jo extends we{constructor(t=.5,e=1,n=32,i=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],u=[];let h=t;const d=(e-t)/i,p=new N,g=new ft;for(let x=0;x<=i;x++){for(let f=0;f<=n;f++){const m=o+f/n*r;p.x=h*Math.cos(m),p.y=h*Math.sin(m),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<i;x++){const f=x*(n+1);for(let m=0;m<n;m++){const S=m+f,M=S,_=S+n+1,A=S+n+2,E=S+1;a.push(M,_,E),a.push(_,A,E)}}this.setIndex(a),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Hr extends we{constructor(t=new yc([new ft(0,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ht(i,3)),this.setAttribute("normal",new Ht(o,3)),this.setAttribute("uv",new Ht(r,2));function l(u){const h=i.length/3,d=u.extractPoints(e);let p=d.shape;const g=d.holes;Ir.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,m=g.length;f<m;f++){const S=g[f];Ir.isClockWise(S)===!0&&(g[f]=S.reverse())}const x=Ir.triangulateShape(p,g);for(let f=0,m=g.length;f<m;f++){const S=g[f];p=p.concat(S)}for(let f=0,m=p.length;f<m;f++){const S=p[f];i.push(S.x,S.y,0),o.push(0,0,1),r.push(S.x,S.y)}for(let f=0,m=x.length;f<m;f++){const S=x[f],M=S[0]+h,_=S[1]+h,A=S[2]+h;n.push(M,_,A),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return lx(e,t)}static fromJSON(t,e){const n=[];for(let i=0,o=t.shapes.length;i<o;i++){const r=e[t.shapes[i]];n.push(r)}return new Hr(n,t.curveSegments)}}function lx(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class J extends we{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const u=[],h=new N,d=new N,p=[],g=[],x=[],f=[];for(let m=0;m<=n;m++){const S=[],M=m/n;let _=0;m===0&&r===0?_=.5/e:m===n&&c===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){const E=A/e;h.x=-t*Math.cos(i+E*o)*Math.sin(r+M*a),h.y=t*Math.cos(r+M*a),h.z=t*Math.sin(i+E*o)*Math.sin(r+M*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),f.push(E+_,1-M),S.push(l++)}u.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){const M=u[m][S+1],_=u[m][S],A=u[m+1][S],E=u[m+1][S+1];(m!==0||r>0)&&p.push(M,_,E),(m!==n-1||c<Math.PI)&&p.push(_,A,E)}this.setIndex(p),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new J(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ae extends we{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],c=[],l=[],u=new N,h=new N,d=new N;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const x=g/i*o,f=p/n*Math.PI*2;h.x=(t+e*Math.cos(f))*Math.cos(x),h.y=(t+e*Math.cos(f))*Math.sin(x),h.z=e*Math.sin(f),a.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const x=(i+1)*p+g-1,f=(i+1)*(p-1)+g-1,m=(i+1)*(p-1)+g,S=(i+1)*p+g;r.push(x,f,S),r.push(f,m,S)}this.setIndex(r),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class An extends we{constructor(t=new Wp(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new N,c=new N,l=new ft;let u=new N;const h=[],d=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Ht(h,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(p,2));function x(){for(let M=0;M<e;M++)f(M);f(o===!1?e:0),S(),m()}function f(M){u=t.getPointAt(M/e,u);const _=r.normals[M],A=r.binormals[M];for(let E=0;E<=i;E++){const T=E/i*Math.PI*2,b=Math.sin(T),y=-Math.cos(T);c.x=y*_.x+b*A.x,c.y=y*_.y+b*A.y,c.z=y*_.z+b*A.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function m(){for(let M=1;M<=e;M++)for(let _=1;_<=i;_++){const A=(i+1)*(M-1)+(_-1),E=(i+1)*M+(_-1),T=(i+1)*M+_,b=(i+1)*(M-1)+_;g.push(A,E,b),g.push(E,T,b)}}function S(){for(let M=0;M<=e;M++)for(let _=0;_<=i;_++)l.x=M/e,l.y=_/i,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new An(new Xu[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class K extends cs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bp,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ux extends cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hx extends cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ef extends le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class fx extends ef{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const yl=new fe,sd=new N,od=new N;class $p{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yh,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;sd.setFromMatrixPosition(t.matrixWorld),e.position.copy(sd),od.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(od),e.updateMatrixWorld(),yl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const rd=new fe,mr=new N,wl=new N;class dx extends $p{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),mr.setFromMatrixPosition(t.matrixWorld),n.position.copy(mr),wl.copy(n.position),wl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(wl),n.updateMatrixWorld(),i.makeTranslation(-mr.x,-mr.y,-mr.z),rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rd)}}class er extends ef{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new dx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class nf extends Up{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class px extends $p{constructor(){super(new nf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kc extends ef{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.shadow=new px}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class mx extends Nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class jp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ad(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ad();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ad(){return performance.now()}function cd(s,t,e,n){const i=gx(n);switch(e){case vp:return s*t;case _p:return s*t;case yp:return s*t*2;case Gh:return s*t/i.components*i.byteLength;case Hh:return s*t/i.components*i.byteLength;case wp:return s*t*2/i.components*i.byteLength;case Vh:return s*t*2/i.components*i.byteLength;case Mp:return s*t*3/i.components*i.byteLength;case ai:return s*t*4/i.components*i.byteLength;case Wh:return s*t*4/i.components*i.byteLength;case Ka:case Ja:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Qa:case tc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xu:case Mu:return Math.max(s,16)*Math.max(t,8)/4;case gu:case vu:return Math.max(s,8)*Math.max(t,8)/2;case _u:case yu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Su:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bu:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Tu:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Eu:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Au:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ru:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Cu:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Pu:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Iu:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Lu:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Du:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Uu:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Nu:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case zu:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ec:case Fu:case Ou:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Sp:case Bu:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ku:case Gu:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gx(s){switch(s){case Wi:case mp:return{byteLength:1,components:1};case Or:case gp:case ki:return{byteLength:2,components:1};case Bh:case kh:return{byteLength:2,components:4};case Bs:case Oh:case wi:return{byteLength:4,components:1};case xp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kp(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function xx(s){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(s.bindBuffer(l,a),h.length===0)s.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];s.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:o,update:r}}var vx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mx=`#ifdef USE_ALPHAHASH
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
#endif`,_x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bx=`#ifdef USE_AOMAP
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
#endif`,Tx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ex=`#ifdef USE_BATCHING
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
#endif`,Ax=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Px=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ix=`#ifdef USE_IRIDESCENCE
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
#endif`,Lx=`#ifdef USE_BUMPMAP
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
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gx=`#define PI 3.141592653589793
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
} // validated`,Hx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vx=`vec3 transformedNormal = objectNormal;
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
#endif`,Wx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",$x=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jx=`#ifdef USE_ENVMAP
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
#endif`,Kx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jx=`#ifdef USE_ENVMAP
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
#endif`,Qx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
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
#endif`,ev=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ov=`#ifdef USE_GRADIENTMAP
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
}`,rv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,av=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lv=`uniform bool receiveShadow;
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
#endif`,uv=`#ifdef USE_ENVMAP
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
#endif`,hv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mv=`PhysicalMaterial material;
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
#endif`,gv=`struct PhysicalMaterial {
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
}`,xv=`
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
#endif`,vv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_v=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ev=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Av=`#if defined( USE_POINTS_UV )
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
#endif`,Rv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Iv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dv=`#ifdef USE_MORPHTARGETS
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
#endif`,Uv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kv=`#ifdef USE_NORMALMAP
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
#endif`,Gv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$v=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nM=`float getShadowMask() {
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
}`,iM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sM=`#ifdef USE_SKINNING
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
#endif`,oM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rM=`#ifdef USE_SKINNING
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
#endif`,aM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hM=`#ifdef USE_TRANSMISSION
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
#endif`,fM=`#ifdef USE_TRANSMISSION
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
#endif`,dM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vM=`uniform sampler2D t2D;
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
}`,MM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_M=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SM=`#include <common>
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
}`,bM=`#if DEPTH_PACKING == 3200
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
}`,TM=`#define DISTANCE
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
}`,EM=`#define DISTANCE
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
}`,AM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CM=`uniform float scale;
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
}`,PM=`uniform vec3 diffuse;
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
}`,IM=`#include <common>
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
}`,LM=`uniform vec3 diffuse;
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
}`,DM=`#define LAMBERT
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
}`,UM=`#define LAMBERT
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
}`,NM=`#define MATCAP
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
}`,zM=`#define MATCAP
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
}`,FM=`#define NORMAL
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
}`,OM=`#define NORMAL
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
}`,BM=`#define PHONG
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
}`,kM=`#define PHONG
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
}`,GM=`#define STANDARD
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
}`,HM=`#define STANDARD
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
}`,VM=`#define TOON
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
}`,WM=`#define TOON
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
}`,XM=`uniform float size;
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
}`,qM=`uniform vec3 diffuse;
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
}`,YM=`#include <common>
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
}`,ZM=`uniform vec3 color;
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
}`,$M=`uniform float rotation;
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
}`,jM=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:vx,alphahash_pars_fragment:Mx,alphamap_fragment:_x,alphamap_pars_fragment:yx,alphatest_fragment:wx,alphatest_pars_fragment:Sx,aomap_fragment:bx,aomap_pars_fragment:Tx,batching_pars_vertex:Ex,batching_vertex:Ax,begin_vertex:Rx,beginnormal_vertex:Cx,bsdfs:Px,iridescence_fragment:Ix,bumpmap_pars_fragment:Lx,clipping_planes_fragment:Dx,clipping_planes_pars_fragment:Ux,clipping_planes_pars_vertex:Nx,clipping_planes_vertex:zx,color_fragment:Fx,color_pars_fragment:Ox,color_pars_vertex:Bx,color_vertex:kx,common:Gx,cube_uv_reflection_fragment:Hx,defaultnormal_vertex:Vx,displacementmap_pars_vertex:Wx,displacementmap_vertex:Xx,emissivemap_fragment:qx,emissivemap_pars_fragment:Yx,colorspace_fragment:Zx,colorspace_pars_fragment:$x,envmap_fragment:jx,envmap_common_pars_fragment:Kx,envmap_pars_fragment:Jx,envmap_pars_vertex:Qx,envmap_physical_pars_fragment:uv,envmap_vertex:tv,fog_vertex:ev,fog_pars_vertex:nv,fog_fragment:iv,fog_pars_fragment:sv,gradientmap_pars_fragment:ov,lightmap_pars_fragment:rv,lights_lambert_fragment:av,lights_lambert_pars_fragment:cv,lights_pars_begin:lv,lights_toon_fragment:hv,lights_toon_pars_fragment:fv,lights_phong_fragment:dv,lights_phong_pars_fragment:pv,lights_physical_fragment:mv,lights_physical_pars_fragment:gv,lights_fragment_begin:xv,lights_fragment_maps:vv,lights_fragment_end:Mv,logdepthbuf_fragment:_v,logdepthbuf_pars_fragment:yv,logdepthbuf_pars_vertex:wv,logdepthbuf_vertex:Sv,map_fragment:bv,map_pars_fragment:Tv,map_particle_fragment:Ev,map_particle_pars_fragment:Av,metalnessmap_fragment:Rv,metalnessmap_pars_fragment:Cv,morphinstance_vertex:Pv,morphcolor_vertex:Iv,morphnormal_vertex:Lv,morphtarget_pars_vertex:Dv,morphtarget_vertex:Uv,normal_fragment_begin:Nv,normal_fragment_maps:zv,normal_pars_fragment:Fv,normal_pars_vertex:Ov,normal_vertex:Bv,normalmap_pars_fragment:kv,clearcoat_normal_fragment_begin:Gv,clearcoat_normal_fragment_maps:Hv,clearcoat_pars_fragment:Vv,iridescence_pars_fragment:Wv,opaque_fragment:Xv,packing:qv,premultiplied_alpha_fragment:Yv,project_vertex:Zv,dithering_fragment:$v,dithering_pars_fragment:jv,roughnessmap_fragment:Kv,roughnessmap_pars_fragment:Jv,shadowmap_pars_fragment:Qv,shadowmap_pars_vertex:tM,shadowmap_vertex:eM,shadowmask_pars_fragment:nM,skinbase_vertex:iM,skinning_pars_vertex:sM,skinning_vertex:oM,skinnormal_vertex:rM,specularmap_fragment:aM,specularmap_pars_fragment:cM,tonemapping_fragment:lM,tonemapping_pars_fragment:uM,transmission_fragment:hM,transmission_pars_fragment:fM,uv_pars_fragment:dM,uv_pars_vertex:pM,uv_vertex:mM,worldpos_vertex:gM,background_vert:xM,background_frag:vM,backgroundCube_vert:MM,backgroundCube_frag:_M,cube_vert:yM,cube_frag:wM,depth_vert:SM,depth_frag:bM,distanceRGBA_vert:TM,distanceRGBA_frag:EM,equirect_vert:AM,equirect_frag:RM,linedashed_vert:CM,linedashed_frag:PM,meshbasic_vert:IM,meshbasic_frag:LM,meshlambert_vert:DM,meshlambert_frag:UM,meshmatcap_vert:NM,meshmatcap_frag:zM,meshnormal_vert:FM,meshnormal_frag:OM,meshphong_vert:BM,meshphong_frag:kM,meshphysical_vert:GM,meshphysical_frag:HM,meshtoon_vert:VM,meshtoon_frag:WM,points_vert:XM,points_frag:qM,shadow_vert:YM,shadow_frag:ZM,sprite_vert:$M,sprite_frag:jM},mt={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},mi={basic:{uniforms:ln([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:ln([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ot(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:ln([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:ln([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:ln([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new ot(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:ln([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:ln([mt.points,mt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:ln([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:ln([mt.common,mt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:ln([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:ln([mt.sprite,mt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:ln([mt.common,mt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:ln([mt.lights,mt.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};mi.physical={uniforms:ln([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Ua={r:0,b:0,g:0},ms=new bi,KM=new fe;function JM(s,t,e,n,i,o,r){const a=new ot(0);let c=o===!0?0:1,l,u,h=null,d=0,p=null;function g(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function x(M){let _=!1;const A=g(M);A===null?m(a,c):A&&A.isColor&&(m(A,1),_=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function f(M,_){const A=g(_);A&&(A.isCubeTexture||A.mapping===Oc)?(u===void 0&&(u=new I(new jr(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:$o(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ms.copy(_.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(KM.makeRotationFromEuler(ms)),u.material.toneMapped=oe.getTransfer(A.colorSpace)!==pe,(h!==A||d!==A.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,p=s.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new I(new ve(2,2),new Rn({name:"BackgroundMaterial",uniforms:$o(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=oe.getTransfer(A.colorSpace)!==pe,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,h=A,d=A.version,p=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,_){M.getRGB(Ua,Dp(s)),n.buffers.color.setClear(Ua.r,Ua.g,Ua.b,_,r)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),c=_,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,m(a,c)},render:x,addToRenderList:f,dispose:S}}function QM(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let o=i,r=!1;function a(v,R,U,L,z){let V=!1;const G=h(L,U,R);o!==G&&(o=G,l(o.object)),V=p(v,L,U,z),V&&g(v,L,U,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,_(v,R,U,L),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function u(v){return s.deleteVertexArray(v)}function h(v,R,U){const L=U.wireframe===!0;let z=n[v.id];z===void 0&&(z={},n[v.id]=z);let V=z[R.id];V===void 0&&(V={},z[R.id]=V);let G=V[L];return G===void 0&&(G=d(c()),V[L]=G),G}function d(v){const R=[],U=[],L=[];for(let z=0;z<e;z++)R[z]=0,U[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:L,object:v,attributes:{},index:null}}function p(v,R,U,L){const z=o.attributes,V=R.attributes;let G=0;const j=U.getAttributes();for(const W in j)if(j[W].location>=0){const pt=z[W];let Rt=V[W];if(Rt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(Rt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(Rt=v.instanceColor)),pt===void 0||pt.attribute!==Rt||Rt&&pt.data!==Rt.data)return!0;G++}return o.attributesNum!==G||o.index!==L}function g(v,R,U,L){const z={},V=R.attributes;let G=0;const j=U.getAttributes();for(const W in j)if(j[W].location>=0){let pt=V[W];pt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor));const Rt={};Rt.attribute=pt,pt&&pt.data&&(Rt.data=pt.data),z[W]=Rt,G++}o.attributes=z,o.attributesNum=G,o.index=L}function x(){const v=o.newAttributes;for(let R=0,U=v.length;R<U;R++)v[R]=0}function f(v){m(v,0)}function m(v,R){const U=o.newAttributes,L=o.enabledAttributes,z=o.attributeDivisors;U[v]=1,L[v]===0&&(s.enableVertexAttribArray(v),L[v]=1),z[v]!==R&&(s.vertexAttribDivisor(v,R),z[v]=R)}function S(){const v=o.newAttributes,R=o.enabledAttributes;for(let U=0,L=R.length;U<L;U++)R[U]!==v[U]&&(s.disableVertexAttribArray(U),R[U]=0)}function M(v,R,U,L,z,V,G){G===!0?s.vertexAttribIPointer(v,R,U,z,V):s.vertexAttribPointer(v,R,U,L,z,V)}function _(v,R,U,L){x();const z=L.attributes,V=U.getAttributes(),G=R.defaultAttributeValues;for(const j in V){const W=V[j];if(W.location>=0){let lt=z[j];if(lt===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(lt=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(lt=v.instanceColor)),lt!==void 0){const pt=lt.normalized,Rt=lt.itemSize,Ft=t.get(lt);if(Ft===void 0)continue;const jt=Ft.buffer,et=Ft.type,ut=Ft.bytesPerElement,wt=et===s.INT||et===s.UNSIGNED_INT||lt.gpuType===Oh;if(lt.isInterleavedBufferAttribute){const dt=lt.data,zt=dt.stride,kt=lt.offset;if(dt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<W.locationSize;Zt++)m(W.location+Zt,dt.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Zt=0;Zt<W.locationSize;Zt++)f(W.location+Zt);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let Zt=0;Zt<W.locationSize;Zt++)M(W.location+Zt,Rt/W.locationSize,et,pt,zt*ut,(kt+Rt/W.locationSize*Zt)*ut,wt)}else{if(lt.isInstancedBufferAttribute){for(let dt=0;dt<W.locationSize;dt++)m(W.location+dt,lt.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let dt=0;dt<W.locationSize;dt++)f(W.location+dt);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let dt=0;dt<W.locationSize;dt++)M(W.location+dt,Rt/W.locationSize,et,pt,Rt*ut,Rt/W.locationSize*dt*ut,wt)}}else if(G!==void 0){const pt=G[j];if(pt!==void 0)switch(pt.length){case 2:s.vertexAttrib2fv(W.location,pt);break;case 3:s.vertexAttrib3fv(W.location,pt);break;case 4:s.vertexAttrib4fv(W.location,pt);break;default:s.vertexAttrib1fv(W.location,pt)}}}}S()}function A(){b();for(const v in n){const R=n[v];for(const U in R){const L=R[U];for(const z in L)u(L[z].object),delete L[z];delete R[U]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const U in R){const L=R[U];for(const z in L)u(L[z].object),delete L[z];delete R[U]}delete n[v.id]}function T(v){for(const R in n){const U=n[R];if(U[v.id]===void 0)continue;const L=U[v.id];for(const z in L)u(L[z].object),delete L[z];delete U[v.id]}}function b(){y(),r=!0,o!==i&&(o=i,l(o.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:b,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:f,disableUnusedAttributes:S}}function t_(s,t,e){let n;function i(l){n=l}function o(l,u){s.drawArrays(n,l,u),e.update(u,n,1)}function r(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function c(l,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)r(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];e.update(g,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function e_(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){return!(T!==ai&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Wi&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==wi&&!b)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),f=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:A,maxSamples:E}}function n_(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new Ms,a=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,x=h.clipIntersection,f=h.clipShadows,m=s.get(h);if(!i||g===null||g.length===0||o&&!f)o?u(null):l();else{const S=o?0:n,M=S*4;let _=m.clippingState||null;c.value=_,_=u(g,d,M,p);for(let A=0;A!==M;++A)_[A]=e[A];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,g){const x=h!==null?h.length:0;let f=null;if(x!==0){if(f=c.value,g!==!0||f===null){const m=p+x*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(f===null||f.length<m)&&(f=new Float32Array(m));for(let M=0,_=p;M!==x;++M,_+=4)r.copy(h[M]).applyMatrix4(S,a),r.normal.toArray(f,_),f[_+3]=r.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}function i_(s){let t=new WeakMap;function e(r,a){return a===du?r.mapping=Vo:a===pu&&(r.mapping=Wo),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===du||a===pu)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Ag(c.height);return l.fromEquirectangularTexture(s,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const To=4,ld=[.125,.215,.35,.446,.526,.582],Rs=20,Sl=new nf,ud=new ot;let bl=null,Tl=0,El=0,Al=!1;const _s=(1+Math.sqrt(5))/2,uo=1/_s,hd=[new N(-_s,uo,0),new N(_s,uo,0),new N(-uo,0,_s),new N(uo,0,_s),new N(0,_s,-uo),new N(0,_s,uo),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class fd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){bl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bl,Tl,El),this._renderer.xr.enabled=Al,t.scissorTest=!1,Na(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vo||t.mapping===Wo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:ki,format:ai,colorSpace:Zo,depthBuffer:!1},i=dd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dd(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s_(o)),this._blurMaterial=o_(o,t,e)}return i}_compileMaterial(t){const e=new I(this._lodPlanes[0],t);this._renderer.compile(e,Sl)}_sceneToCubeUV(t,e,n,i){const a=new Nn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(ud),u.toneMapping=rs,u.autoClear=!1;const p=new Y({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new I(new jr,p);let x=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,x=!0):(p.color.copy(ud),x=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):S===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const M=this._cubeSize;Na(i,S*M,m>2?M:0,M,M),u.setRenderTarget(i),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Vo||t.mapping===Wo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=md()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pd());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new I(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;Na(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,Sl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=hd[(i-o-1)%hd.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new I(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Rs-1),x=o/g,f=isFinite(o)?1+Math.floor(u*x):Rs;f>Rs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Rs}`);const m=[];let S=0;for(let T=0;T<Rs;++T){const b=T/x,y=Math.exp(-b*b/2);m.push(y),T===0?S+=y:T<f&&(S+=2*y)}for(let T=0;T<m.length;T++)m[T]=m[T]/S;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const _=this._sizeLods[i],A=3*_*(i>M-To?i-M+To:0),E=4*(this._cubeSize-_);Na(e,A,E,3*_,2*_),c.setRenderTarget(e),c.render(h,Sl)}}function s_(s){const t=[],e=[],n=[];let i=s;const o=s-To+1+ld.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let c=1/a;r>s-To?c=ld[r-s+To-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,f=2,m=1,S=new Float32Array(x*g*p),M=new Float32Array(f*g*p),_=new Float32Array(m*g*p);for(let E=0;E<p;E++){const T=E%3*2/3-1,b=E>2?0:-1,y=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];S.set(y,x*g*E),M.set(d,f*g*E);const v=[E,E,E,E,E,E];_.set(v,m*g*E)}const A=new we;A.setAttribute("position",new Ue(S,x)),A.setAttribute("uv",new Ue(M,f)),A.setAttribute("faceIndex",new Ue(_,m)),t.push(A),i>To&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function dd(s,t,e){const n=new li(s,t,e);return n.texture.mapping=Oc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Na(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function o_(s,t,e){const n=new Float32Array(Rs),i=new N(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sf(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function pd(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sf(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function md(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function sf(){return`

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
	`}function r_(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===du||c===pu,u=c===Vo||c===Wo;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new fd(s)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&i(p)?(e===null&&(e=new fd(s)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function a_(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&vo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function c_(s,t,e,n){const i={},o=new WeakMap;function r(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete i[d.id];const p=o.get(d);p&&(t.remove(p),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)t.update(d[p],s.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const S=p.array;x=p.version;for(let M=0,_=S.length;M<_;M+=3){const A=S[M+0],E=S[M+1],T=S[M+2];d.push(A,E,E,T,T,A)}}else if(g!==void 0){const S=g.array;x=g.version;for(let M=0,_=S.length/3-1;M<_;M+=3){const A=M+0,E=M+1,T=M+2;d.push(A,E,E,T,T,A)}}else return;const f=new(Ep(d)?Lp:Ip)(d,1);f.version=x;const m=o.get(h);m&&t.remove(m),o.set(h,f)}function u(h){const d=o.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return o.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function l_(s,t,e){let n;function i(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,p){s.drawElements(n,p,o,d*r),e.update(p,n,1)}function l(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,o,d*r,g),e.update(p,n,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,d,0,g);let f=0;for(let m=0;m<g;m++)f+=p[m];e.update(f,n,1)}function h(d,p,g,x){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)l(d[m]/r,p[m],x[m]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,o,d,0,x,0,g);let m=0;for(let S=0;S<g;S++)m+=p[S]*x[S];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function u_(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function h_(s,t,e){const n=new WeakMap,i=new ge;function o(r,a,c){const l=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let v=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var p=v;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),f===!0&&(_=3);let A=a.attributes.position.count*_,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const T=new Float32Array(A*E*4*h),b=new Rp(T,A,E,h);b.type=wi,b.needsUpdate=!0;const y=_*4;for(let R=0;R<h;R++){const U=m[R],L=S[R],z=M[R],V=A*E*4*R;for(let G=0;G<U.count;G++){const j=G*y;g===!0&&(i.fromBufferAttribute(U,G),T[V+j+0]=i.x,T[V+j+1]=i.y,T[V+j+2]=i.z,T[V+j+3]=0),x===!0&&(i.fromBufferAttribute(L,G),T[V+j+4]=i.x,T[V+j+5]=i.y,T[V+j+6]=i.z,T[V+j+7]=0),f===!0&&(i.fromBufferAttribute(z,G),T[V+j+8]=i.x,T[V+j+9]=i.y,T[V+j+10]=i.z,T[V+j+11]=z.itemSize===4?i.w:1)}}d={count:h,texture:b,size:new ft(A,E)},n.set(a,d),a.addEventListener("dispose",v)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let f=0;f<l.length;f++)g+=l[f];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:o}}function f_(s,t,e,n){let i=new WeakMap;function o(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function r(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}const Jp=new nn,gd=new kp(1,1),Qp=new Rp,t0=new fg,e0=new Np,xd=[],vd=[],Md=new Float32Array(16),_d=new Float32Array(9),yd=new Float32Array(4);function nr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=xd[i];if(o===void 0&&(o=new Float32Array(i),xd[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function Be(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ke(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Gc(s,t){let e=vd[t];e===void 0&&(e=new Int32Array(t),vd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function d_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function p_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2fv(this.addr,t),ke(e,t)}}function m_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;s.uniform3fv(this.addr,t),ke(e,t)}}function g_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4fv(this.addr,t),ke(e,t)}}function x_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;yd.set(n),s.uniformMatrix2fv(this.addr,!1,yd),ke(e,n)}}function v_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;_d.set(n),s.uniformMatrix3fv(this.addr,!1,_d),ke(e,n)}}function M_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;Md.set(n),s.uniformMatrix4fv(this.addr,!1,Md),ke(e,n)}}function __(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function y_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2iv(this.addr,t),ke(e,t)}}function w_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3iv(this.addr,t),ke(e,t)}}function S_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4iv(this.addr,t),ke(e,t)}}function b_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function T_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2uiv(this.addr,t),ke(e,t)}}function E_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3uiv(this.addr,t),ke(e,t)}}function A_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4uiv(this.addr,t),ke(e,t)}}function R_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(gd.compareFunction=Tp,o=gd):o=Jp,e.setTexture2D(t||o,i)}function C_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||t0,i)}function P_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||e0,i)}function I_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Qp,i)}function L_(s){switch(s){case 5126:return d_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return x_;case 35675:return v_;case 35676:return M_;case 5124:case 35670:return __;case 35667:case 35671:return y_;case 35668:case 35672:return w_;case 35669:case 35673:return S_;case 5125:return b_;case 36294:return T_;case 36295:return E_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return I_}}function D_(s,t){s.uniform1fv(this.addr,t)}function U_(s,t){const e=nr(t,this.size,2);s.uniform2fv(this.addr,e)}function N_(s,t){const e=nr(t,this.size,3);s.uniform3fv(this.addr,e)}function z_(s,t){const e=nr(t,this.size,4);s.uniform4fv(this.addr,e)}function F_(s,t){const e=nr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function O_(s,t){const e=nr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function B_(s,t){const e=nr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function k_(s,t){s.uniform1iv(this.addr,t)}function G_(s,t){s.uniform2iv(this.addr,t)}function H_(s,t){s.uniform3iv(this.addr,t)}function V_(s,t){s.uniform4iv(this.addr,t)}function W_(s,t){s.uniform1uiv(this.addr,t)}function X_(s,t){s.uniform2uiv(this.addr,t)}function q_(s,t){s.uniform3uiv(this.addr,t)}function Y_(s,t){s.uniform4uiv(this.addr,t)}function Z_(s,t,e){const n=this.cache,i=t.length,o=Gc(e,i);Be(n,o)||(s.uniform1iv(this.addr,o),ke(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Jp,o[r])}function $_(s,t,e){const n=this.cache,i=t.length,o=Gc(e,i);Be(n,o)||(s.uniform1iv(this.addr,o),ke(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||t0,o[r])}function j_(s,t,e){const n=this.cache,i=t.length,o=Gc(e,i);Be(n,o)||(s.uniform1iv(this.addr,o),ke(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||e0,o[r])}function K_(s,t,e){const n=this.cache,i=t.length,o=Gc(e,i);Be(n,o)||(s.uniform1iv(this.addr,o),ke(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Qp,o[r])}function J_(s){switch(s){case 5126:return D_;case 35664:return U_;case 35665:return N_;case 35666:return z_;case 35674:return F_;case 35675:return O_;case 35676:return B_;case 5124:case 35670:return k_;case 35667:case 35671:return G_;case 35668:case 35672:return H_;case 35669:case 35673:return V_;case 5125:return W_;case 36294:return X_;case 36295:return q_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return Z_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return K_}}class Q_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=L_(e.type)}}class ty{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=J_(e.type)}}class ey{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const Rl=/(\w+)(\])?(\[|\.)?/g;function wd(s,t){s.seq.push(t),s.map[t.id]=t}function ny(s,t,e){const n=s.name,i=n.length;for(Rl.lastIndex=0;;){const o=Rl.exec(n),r=Rl.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){wd(e,l===void 0?new Q_(a,s,t):new ty(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new ey(a),wd(e,h)),e=h}}}class nc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);ny(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Sd(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const iy=37297;let sy=0;function oy(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const bd=new Wt;function ry(s){oe._getMatrix(bd,oe.workingColorSpace,s);const t=`mat3( ${bd.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(s)){case dc:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Td(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+oy(s.getShaderSource(t),r)}else return i}function ay(s,t){const e=ry(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cy(s,t){let e;switch(t){case Bm:e="Linear";break;case km:e="Reinhard";break;case Gm:e="Cineon";break;case dp:e="ACESFilmic";break;case Vm:e="AgX";break;case Wm:e="Neutral";break;case Hm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const za=new N;function ly(){oe.getLuminanceCoefficients(za);const s=za.x.toFixed(4),t=za.y.toFixed(4),e=za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function hy(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fy(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function wr(s){return s!==""}function Ed(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ad(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zu(s){return s.replace(dy,my)}const py=new Map;function my(s,t){let e=qt[t];if(e===void 0){const n=py.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Zu(e)}const gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(s){return s.replace(gy,xy)}function xy(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Cd(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function vy(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===up?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===hp?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Di&&(t="SHADOWMAP_TYPE_VSM"),t}function My(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vo:case Wo:t="ENVMAP_TYPE_CUBE";break;case Oc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _y(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Wo:t="ENVMAP_MODE_REFRACTION";break}return t}function yy(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case fp:t="ENVMAP_BLENDING_MULTIPLY";break;case Fm:t="ENVMAP_BLENDING_MIX";break;case Om:t="ENVMAP_BLENDING_ADD";break}return t}function wy(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Sy(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=vy(e),l=My(e),u=_y(e),h=yy(e),d=wy(e),p=uy(e),g=hy(o),x=i.createProgram();let f,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wr).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wr).join(`
`),m.length>0&&(m+=`
`)):(f=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),m=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==rs?"#define TONE_MAPPING":"",e.toneMapping!==rs?qt.tonemapping_pars_fragment:"",e.toneMapping!==rs?cy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,ay("linearToOutputTexel",e.outputColorSpace),ly(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wr).join(`
`)),r=Zu(r),r=Ed(r,e),r=Ad(r,e),a=Zu(a),a=Ed(a,e),a=Ad(a,e),r=Rd(r),a=Rd(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",e.glslVersion===Ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=S+f+r,_=S+m+a,A=Sd(i,i.VERTEX_SHADER,M),E=Sd(i,i.FRAGMENT_SHADER,_);i.attachShader(x,A),i.attachShader(x,E),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(R){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(x).trim(),L=i.getShaderInfoLog(A).trim(),z=i.getShaderInfoLog(E).trim();let V=!0,G=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,A,E);else{const j=Td(i,A,"vertex"),W=Td(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+j+`
`+W)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||z==="")&&(G=!1);G&&(R.diagnostics={runnable:V,programLog:U,vertexShader:{log:L,prefix:f},fragmentShader:{log:z,prefix:m}})}i.deleteShader(A),i.deleteShader(E),b=new nc(i,x),y=fy(i,x)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(x,iy)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sy++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}let by=0;class Ty{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ey(t),e.set(t,n)),n}}class Ey{constructor(t){this.id=by++,this.code=t,this.usedTimes=0}}function Ay(s,t,e,n,i,o,r){const a=new Cp,c=new Ty,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function f(y,v,R,U,L){const z=U.fog,V=L.geometry,G=y.isMeshStandardMaterial?U.environment:null,j=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),W=j&&j.mapping===Oc?j.image.height:null,lt=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const pt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Rt=pt!==void 0?pt.length:0;let Ft=0;V.morphAttributes.position!==void 0&&(Ft=1),V.morphAttributes.normal!==void 0&&(Ft=2),V.morphAttributes.color!==void 0&&(Ft=3);let jt,et,ut,wt;if(lt){const de=mi[lt];jt=de.vertexShader,et=de.fragmentShader}else jt=y.vertexShader,et=y.fragmentShader,c.update(y),ut=c.getVertexShaderID(y),wt=c.getFragmentShaderID(y);const dt=s.getRenderTarget(),zt=s.state.buffers.depth.getReversed(),kt=L.isInstancedMesh===!0,Zt=L.isBatchedMesh===!0,Re=!!y.map,te=!!y.matcap,Ne=!!j,O=!!y.aoMap,Hn=!!y.lightMap,Kt=!!y.bumpMap,Jt=!!y.normalMap,It=!!y.displacementMap,Se=!!y.emissiveMap,Pt=!!y.metalnessMap,D=!!y.roughnessMap,C=y.anisotropy>0,X=y.clearcoat>0,it=y.dispersion>0,rt=y.iridescence>0,nt=y.sheen>0,Ct=y.transmission>0,vt=C&&!!y.anisotropyMap,bt=X&&!!y.clearcoatMap,ee=X&&!!y.clearcoatNormalMap,ht=X&&!!y.clearcoatRoughnessMap,Tt=rt&&!!y.iridescenceMap,Nt=rt&&!!y.iridescenceThicknessMap,Ot=nt&&!!y.sheenColorMap,Et=nt&&!!y.sheenRoughnessMap,Qt=!!y.specularMap,Xt=!!y.specularColorMap,Me=!!y.specularIntensityMap,B=Ct&&!!y.transmissionMap,gt=Ct&&!!y.thicknessMap,tt=!!y.gradientMap,st=!!y.alphaMap,yt=y.alphaTest>0,Mt=!!y.alphaHash,Vt=!!y.extensions;let Pe=rs;y.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Pe=s.toneMapping);const je={shaderID:lt,shaderType:y.type,shaderName:y.name,vertexShader:jt,fragmentShader:et,defines:y.defines,customVertexShaderID:ut,customFragmentShaderID:wt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Zt,batchingColor:Zt&&L._colorsTexture!==null,instancing:kt,instancingColor:kt&&L.instanceColor!==null,instancingMorph:kt&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?s.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Zo,alphaToCoverage:!!y.alphaToCoverage,map:Re,matcap:te,envMap:Ne,envMapMode:Ne&&j.mapping,envMapCubeUVHeight:W,aoMap:O,lightMap:Hn,bumpMap:Kt,normalMap:Jt,displacementMap:d&&It,emissiveMap:Se,normalMapObjectSpace:Jt&&y.normalMapType===Zm,normalMapTangentSpace:Jt&&y.normalMapType===bp,metalnessMap:Pt,roughnessMap:D,anisotropy:C,anisotropyMap:vt,clearcoat:X,clearcoatMap:bt,clearcoatNormalMap:ee,clearcoatRoughnessMap:ht,dispersion:it,iridescence:rt,iridescenceMap:Tt,iridescenceThicknessMap:Nt,sheen:nt,sheenColorMap:Ot,sheenRoughnessMap:Et,specularMap:Qt,specularColorMap:Xt,specularIntensityMap:Me,transmission:Ct,transmissionMap:B,thicknessMap:gt,gradientMap:tt,opaque:y.transparent===!1&&y.blending===Po&&y.alphaToCoverage===!1,alphaMap:st,alphaTest:yt,alphaHash:Mt,combine:y.combine,mapUv:Re&&x(y.map.channel),aoMapUv:O&&x(y.aoMap.channel),lightMapUv:Hn&&x(y.lightMap.channel),bumpMapUv:Kt&&x(y.bumpMap.channel),normalMapUv:Jt&&x(y.normalMap.channel),displacementMapUv:It&&x(y.displacementMap.channel),emissiveMapUv:Se&&x(y.emissiveMap.channel),metalnessMapUv:Pt&&x(y.metalnessMap.channel),roughnessMapUv:D&&x(y.roughnessMap.channel),anisotropyMapUv:vt&&x(y.anisotropyMap.channel),clearcoatMapUv:bt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Et&&x(y.sheenRoughnessMap.channel),specularMapUv:Qt&&x(y.specularMap.channel),specularColorMapUv:Xt&&x(y.specularColorMap.channel),specularIntensityMapUv:Me&&x(y.specularIntensityMap.channel),transmissionMapUv:B&&x(y.transmissionMap.channel),thicknessMapUv:gt&&x(y.thicknessMap.channel),alphaMapUv:st&&x(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Jt||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!V.attributes.uv&&(Re||st),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:zt,skinning:L.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Ft,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Re&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===pe,decodeVideoTextureEmissive:Se&&y.emissiveMap.isVideoTexture===!0&&oe.getTransfer(y.emissiveMap.colorSpace)===pe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dt,flipSided:y.side===Tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Vt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&y.extensions.multiDraw===!0||Zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function m(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)v.push(R),v.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(S(v,y),M(v,y),v.push(s.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function S(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function M(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){const v=g[y.type];let R;if(v){const U=mi[v];R=gc.clone(U.uniforms)}else R=y.uniforms;return R}function A(y,v){let R;for(let U=0,L=u.length;U<L;U++){const z=u[U];if(z.cacheKey===v){R=z,++R.usedTimes;break}}return R===void 0&&(R=new Sy(s,v,y,o),u.push(R)),R}function E(y){if(--y.usedTimes===0){const v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function T(y){c.remove(y)}function b(){c.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:_,acquireProgram:A,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:b}}function Ry(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,c){s.get(r)[a]=c}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function Cy(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Pd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Id(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(h,d,p,g,x,f){let m=s[t];return m===void 0?(m={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:f},s[t]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=x,m.group=f),t++,m}function a(h,d,p,g,x,f){const m=r(h,d,p,g,x,f);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):e.push(m)}function c(h,d,p,g,x,f){const m=r(h,d,p,g,x,f);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):e.unshift(m)}function l(h,d){e.length>1&&e.sort(h||Cy),n.length>1&&n.sort(d||Pd),i.length>1&&i.sort(d||Pd)}function u(){for(let h=t,d=s.length;h<d;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:c,finish:u,sort:l}}function Py(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new Id,s.set(n,[r])):i>=o.length?(r=new Id,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function Iy(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new ot};break;case"SpotLight":e={position:new N,direction:new N,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":e={color:new ot,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function Ly(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Dy=0;function Uy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ny(s){const t=new Iy,e=Ly(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const i=new N,o=new fe,r=new fe;function a(l){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,x=0,f=0,m=0,S=0,M=0,_=0,A=0,E=0,T=0;l.sort(Uy);for(let y=0,v=l.length;y<v;y++){const R=l[y],U=R.color,L=R.intensity,z=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=U.r*L,h+=U.g*L,d+=U.b*L;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],L);T++}else if(R.isDirectionalLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const j=R.shadow,W=e.get(R);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=R.shadow.matrix,S++}n.directional[p]=G,p++}else if(R.isSpotLight){const G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(U).multiplyScalar(L),G.distance=z,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[x]=G;const j=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,j.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[x]=j.matrix,R.castShadow){const W=e.get(R);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=V,_++}x++}else if(R.isRectAreaLight){const G=t.get(R);G.color.copy(U).multiplyScalar(L),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[f]=G,f++}else if(R.isPointLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const j=R.shadow,W=e.get(R);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=R.shadow.matrix,M++}n.point[g]=G,g++}else if(R.isHemisphereLight){const G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(L),G.groundColor.copy(R.groundColor).multiplyScalar(L),n.hemi[m]=G,m++}}f>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const b=n.hash;(b.directionalLength!==p||b.pointLength!==g||b.spotLength!==x||b.rectAreaLength!==f||b.hemiLength!==m||b.numDirectionalShadows!==S||b.numPointShadows!==M||b.numSpotShadows!==_||b.numSpotMaps!==A||b.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=f,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,b.directionalLength=p,b.pointLength=g,b.spotLength=x,b.rectAreaLength=f,b.hemiLength=m,b.numDirectionalShadows=S,b.numPointShadows=M,b.numSpotShadows=_,b.numSpotMaps=A,b.numLightProbes=T,n.version=Dy++)}function c(l,u){let h=0,d=0,p=0,g=0,x=0;const f=u.matrixWorldInverse;for(let m=0,S=l.length;m<S;m++){const M=l[m];if(M.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(f),h++}else if(M.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(f),_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(f),p++}else if(M.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(f),r.identity(),o.copy(M.matrixWorld),o.premultiply(f),r.extractRotation(o),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),g++}else if(M.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(f),d++}else if(M.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(f),x++}}}return{setup:a,setupView:c,state:n}}function Ld(s){const t=new Ny(s),e=[],n=[];function i(u){l.camera=u,e.length=0,n.length=0}function o(u){e.push(u)}function r(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function zy(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new Ld(s),t.set(i,[a])):o>=r.length?(a=new Ld(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Fy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Oy=`uniform sampler2D shadow_pass;
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
}`;function By(s,t,e){let n=new Yh;const i=new ft,o=new ft,r=new ge,a=new ux({depthPacking:Ym}),c=new hx,l={},u=e.maxTextureSize,h={[as]:Tn,[Tn]:as,[Dt]:Dt},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Fy,fragmentShader:Oy}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new I(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=up;let m=this.type;this.render=function(E,T,b){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;const y=s.getRenderTarget(),v=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Bi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const L=m!==Di&&this.type===Di,z=m===Di&&this.type!==Di;for(let V=0,G=E.length;V<G;V++){const j=E[V],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const lt=W.getFrameExtents();if(i.multiply(lt),o.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(o.x=Math.floor(u/lt.x),i.x=o.x*lt.x,W.mapSize.x=o.x),i.y>u&&(o.y=Math.floor(u/lt.y),i.y=o.y*lt.y,W.mapSize.y=o.y)),W.map===null||L===!0||z===!0){const Rt=this.type!==Di?{minFilter:kn,magFilter:kn}:{};W.map!==null&&W.map.dispose(),W.map=new li(i.x,i.y,Rt),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const pt=W.getViewportCount();for(let Rt=0;Rt<pt;Rt++){const Ft=W.getViewport(Rt);r.set(o.x*Ft.x,o.y*Ft.y,o.x*Ft.z,o.y*Ft.w),U.viewport(r),W.updateMatrices(j,Rt),n=W.getFrustum(),_(T,b,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===Di&&S(W,b),W.needsUpdate=!1}m=this.type,f.needsUpdate=!1,s.setRenderTarget(y,v,R)};function S(E,T){const b=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new li(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(T,null,b,d,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(T,null,b,p,x,null)}function M(E,T,b,y){let v=null;const R=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)v=R;else if(v=b.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=v.uuid,L=T.uuid;let z=l[U];z===void 0&&(z={},l[U]=z);let V=z[L];V===void 0&&(V=v.clone(),z[L]=V,T.addEventListener("dispose",A)),v=V}if(v.visible=T.visible,v.wireframe=T.wireframe,y===Di?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:h[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,b.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=s.properties.get(v);U.light=b}return v}function _(E,T,b,y,v){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Di)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const L=t.update(E),z=E.material;if(Array.isArray(z)){const V=L.groups;for(let G=0,j=V.length;G<j;G++){const W=V[G],lt=z[W.materialIndex];if(lt&&lt.visible){const pt=M(E,lt,y,v);E.onBeforeShadow(s,E,T,b,L,pt,W),s.renderBufferDirect(b,null,L,pt,E,W),E.onAfterShadow(s,E,T,b,L,pt,W)}}}else if(z.visible){const V=M(E,z,y,v);E.onBeforeShadow(s,E,T,b,L,V,null),s.renderBufferDirect(b,null,L,V,E,null),E.onAfterShadow(s,E,T,b,L,V,null)}}const U=E.children;for(let L=0,z=U.length;L<z;L++)_(U[L],T,b,y,v)}function A(E){E.target.removeEventListener("dispose",A);for(const b in l){const y=l[b],v=E.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const ky={[ru]:au,[cu]:hu,[lu]:fu,[Ho]:uu,[au]:ru,[hu]:cu,[fu]:lu,[uu]:Ho};function Gy(s,t){function e(){let B=!1;const gt=new ge;let tt=null;const st=new ge(0,0,0,0);return{setMask:function(yt){tt!==yt&&!B&&(s.colorMask(yt,yt,yt,yt),tt=yt)},setLocked:function(yt){B=yt},setClear:function(yt,Mt,Vt,Pe,je){je===!0&&(yt*=Pe,Mt*=Pe,Vt*=Pe),gt.set(yt,Mt,Vt,Pe),st.equals(gt)===!1&&(s.clearColor(yt,Mt,Vt,Pe),st.copy(gt))},reset:function(){B=!1,tt=null,st.set(-1,0,0,0)}}}function n(){let B=!1,gt=!1,tt=null,st=null,yt=null;return{setReversed:function(Mt){if(gt!==Mt){const Vt=t.get("EXT_clip_control");gt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const Pe=yt;yt=null,this.setClear(Pe)}gt=Mt},getReversed:function(){return gt},setTest:function(Mt){Mt?dt(s.DEPTH_TEST):zt(s.DEPTH_TEST)},setMask:function(Mt){tt!==Mt&&!B&&(s.depthMask(Mt),tt=Mt)},setFunc:function(Mt){if(gt&&(Mt=ky[Mt]),st!==Mt){switch(Mt){case ru:s.depthFunc(s.NEVER);break;case au:s.depthFunc(s.ALWAYS);break;case cu:s.depthFunc(s.LESS);break;case Ho:s.depthFunc(s.LEQUAL);break;case lu:s.depthFunc(s.EQUAL);break;case uu:s.depthFunc(s.GEQUAL);break;case hu:s.depthFunc(s.GREATER);break;case fu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}st=Mt}},setLocked:function(Mt){B=Mt},setClear:function(Mt){yt!==Mt&&(gt&&(Mt=1-Mt),s.clearDepth(Mt),yt=Mt)},reset:function(){B=!1,tt=null,st=null,yt=null,gt=!1}}}function i(){let B=!1,gt=null,tt=null,st=null,yt=null,Mt=null,Vt=null,Pe=null,je=null;return{setTest:function(de){B||(de?dt(s.STENCIL_TEST):zt(s.STENCIL_TEST))},setMask:function(de){gt!==de&&!B&&(s.stencilMask(de),gt=de)},setFunc:function(de,ni,Ai){(tt!==de||st!==ni||yt!==Ai)&&(s.stencilFunc(de,ni,Ai),tt=de,st=ni,yt=Ai)},setOp:function(de,ni,Ai){(Mt!==de||Vt!==ni||Pe!==Ai)&&(s.stencilOp(de,ni,Ai),Mt=de,Vt=ni,Pe=Ai)},setLocked:function(de){B=de},setClear:function(de){je!==de&&(s.clearStencil(de),je=de)},reset:function(){B=!1,gt=null,tt=null,st=null,yt=null,Mt=null,Vt=null,Pe=null,je=null}}}const o=new e,r=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,x=!1,f=null,m=null,S=null,M=null,_=null,A=null,E=null,T=new ot(0,0,0),b=0,y=!1,v=null,R=null,U=null,L=null,z=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,j=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=j>=2);let lt=null,pt={};const Rt=s.getParameter(s.SCISSOR_BOX),Ft=s.getParameter(s.VIEWPORT),jt=new ge().fromArray(Rt),et=new ge().fromArray(Ft);function ut(B,gt,tt,st){const yt=new Uint8Array(4),Mt=s.createTexture();s.bindTexture(B,Mt),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<tt;Vt++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(gt,0,s.RGBA,1,1,st,0,s.RGBA,s.UNSIGNED_BYTE,yt):s.texImage2D(gt+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,yt);return Mt}const wt={};wt[s.TEXTURE_2D]=ut(s.TEXTURE_2D,s.TEXTURE_2D,1),wt[s.TEXTURE_CUBE_MAP]=ut(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[s.TEXTURE_2D_ARRAY]=ut(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),wt[s.TEXTURE_3D]=ut(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),dt(s.DEPTH_TEST),r.setFunc(Ho),Kt(!1),Jt(wf),dt(s.CULL_FACE),O(Bi);function dt(B){u[B]!==!0&&(s.enable(B),u[B]=!0)}function zt(B){u[B]!==!1&&(s.disable(B),u[B]=!1)}function kt(B,gt){return h[B]!==gt?(s.bindFramebuffer(B,gt),h[B]=gt,B===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=gt),B===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=gt),!0):!1}function Zt(B,gt){let tt=p,st=!1;if(B){tt=d.get(gt),tt===void 0&&(tt=[],d.set(gt,tt));const yt=B.textures;if(tt.length!==yt.length||tt[0]!==s.COLOR_ATTACHMENT0){for(let Mt=0,Vt=yt.length;Mt<Vt;Mt++)tt[Mt]=s.COLOR_ATTACHMENT0+Mt;tt.length=yt.length,st=!0}}else tt[0]!==s.BACK&&(tt[0]=s.BACK,st=!0);st&&s.drawBuffers(tt)}function Re(B){return g!==B?(s.useProgram(B),g=B,!0):!1}const te={[As]:s.FUNC_ADD,[_m]:s.FUNC_SUBTRACT,[ym]:s.FUNC_REVERSE_SUBTRACT};te[wm]=s.MIN,te[Sm]=s.MAX;const Ne={[bm]:s.ZERO,[Tm]:s.ONE,[Em]:s.SRC_COLOR,[su]:s.SRC_ALPHA,[Lm]:s.SRC_ALPHA_SATURATE,[Pm]:s.DST_COLOR,[Rm]:s.DST_ALPHA,[Am]:s.ONE_MINUS_SRC_COLOR,[ou]:s.ONE_MINUS_SRC_ALPHA,[Im]:s.ONE_MINUS_DST_COLOR,[Cm]:s.ONE_MINUS_DST_ALPHA,[Dm]:s.CONSTANT_COLOR,[Um]:s.ONE_MINUS_CONSTANT_COLOR,[Nm]:s.CONSTANT_ALPHA,[zm]:s.ONE_MINUS_CONSTANT_ALPHA};function O(B,gt,tt,st,yt,Mt,Vt,Pe,je,de){if(B===Bi){x===!0&&(zt(s.BLEND),x=!1);return}if(x===!1&&(dt(s.BLEND),x=!0),B!==Mm){if(B!==f||de!==y){if((m!==As||_!==As)&&(s.blendEquation(s.FUNC_ADD),m=As,_=As),de)switch(B){case Po:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ce:s.blendFunc(s.ONE,s.ONE);break;case Sf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case bf:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Po:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ce:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Sf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case bf:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}S=null,M=null,A=null,E=null,T.set(0,0,0),b=0,f=B,y=de}return}yt=yt||gt,Mt=Mt||tt,Vt=Vt||st,(gt!==m||yt!==_)&&(s.blendEquationSeparate(te[gt],te[yt]),m=gt,_=yt),(tt!==S||st!==M||Mt!==A||Vt!==E)&&(s.blendFuncSeparate(Ne[tt],Ne[st],Ne[Mt],Ne[Vt]),S=tt,M=st,A=Mt,E=Vt),(Pe.equals(T)===!1||je!==b)&&(s.blendColor(Pe.r,Pe.g,Pe.b,je),T.copy(Pe),b=je),f=B,y=!1}function Hn(B,gt){B.side===Dt?zt(s.CULL_FACE):dt(s.CULL_FACE);let tt=B.side===Tn;gt&&(tt=!tt),Kt(tt),B.blending===Po&&B.transparent===!1?O(Bi):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),o.setMask(B.colorWrite);const st=B.stencilWrite;a.setTest(st),st&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Se(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?dt(s.SAMPLE_ALPHA_TO_COVERAGE):zt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(B){v!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),v=B)}function Jt(B){B!==xm?(dt(s.CULL_FACE),B!==R&&(B===wf?s.cullFace(s.BACK):B===vm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):zt(s.CULL_FACE),R=B}function It(B){B!==U&&(G&&s.lineWidth(B),U=B)}function Se(B,gt,tt){B?(dt(s.POLYGON_OFFSET_FILL),(L!==gt||z!==tt)&&(s.polygonOffset(gt,tt),L=gt,z=tt)):zt(s.POLYGON_OFFSET_FILL)}function Pt(B){B?dt(s.SCISSOR_TEST):zt(s.SCISSOR_TEST)}function D(B){B===void 0&&(B=s.TEXTURE0+V-1),lt!==B&&(s.activeTexture(B),lt=B)}function C(B,gt,tt){tt===void 0&&(lt===null?tt=s.TEXTURE0+V-1:tt=lt);let st=pt[tt];st===void 0&&(st={type:void 0,texture:void 0},pt[tt]=st),(st.type!==B||st.texture!==gt)&&(lt!==tt&&(s.activeTexture(tt),lt=tt),s.bindTexture(B,gt||wt[B]),st.type=B,st.texture=gt)}function X(){const B=pt[lt];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function it(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function nt(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function vt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function bt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Nt(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ot(B){jt.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),jt.copy(B))}function Et(B){et.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),et.copy(B))}function Qt(B,gt){let tt=l.get(gt);tt===void 0&&(tt=new WeakMap,l.set(gt,tt));let st=tt.get(B);st===void 0&&(st=s.getUniformBlockIndex(gt,B.name),tt.set(B,st))}function Xt(B,gt){const st=l.get(gt).get(B);c.get(gt)!==st&&(s.uniformBlockBinding(gt,st,B.__bindingPointIndex),c.set(gt,st))}function Me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},lt=null,pt={},h={},d=new WeakMap,p=[],g=null,x=!1,f=null,m=null,S=null,M=null,_=null,A=null,E=null,T=new ot(0,0,0),b=0,y=!1,v=null,R=null,U=null,L=null,z=null,jt.set(0,0,s.canvas.width,s.canvas.height),et.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:dt,disable:zt,bindFramebuffer:kt,drawBuffers:Zt,useProgram:Re,setBlending:O,setMaterial:Hn,setFlipSided:Kt,setCullFace:Jt,setLineWidth:It,setPolygonOffset:Se,setScissorTest:Pt,activeTexture:D,bindTexture:C,unbindTexture:X,compressedTexImage2D:it,compressedTexImage3D:rt,texImage2D:Tt,texImage3D:Nt,updateUBOMapping:Qt,uniformBlockBinding:Xt,texStorage2D:ee,texStorage3D:ht,texSubImage2D:nt,texSubImage3D:Ct,compressedTexSubImage2D:vt,compressedTexSubImage3D:bt,scissor:Ot,viewport:Et,reset:Me}}function Hy(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ft,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,C){return p?new OffscreenCanvas(D,C):mc("canvas")}function x(D,C,X){let it=1;const rt=Pt(D);if((rt.width>X||rt.height>X)&&(it=X/Math.max(rt.width,rt.height)),it<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const nt=Math.floor(it*rt.width),Ct=Math.floor(it*rt.height);h===void 0&&(h=g(nt,Ct));const vt=C?g(nt,Ct):h;return vt.width=nt,vt.height=Ct,vt.getContext("2d").drawImage(D,0,0,nt,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+nt+"x"+Ct+")."),vt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),D;return D}function f(D){return D.generateMipmaps}function m(D){s.generateMipmap(D)}function S(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(D,C,X,it,rt=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let nt=C;if(C===s.RED&&(X===s.FLOAT&&(nt=s.R32F),X===s.HALF_FLOAT&&(nt=s.R16F),X===s.UNSIGNED_BYTE&&(nt=s.R8)),C===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(nt=s.R8UI),X===s.UNSIGNED_SHORT&&(nt=s.R16UI),X===s.UNSIGNED_INT&&(nt=s.R32UI),X===s.BYTE&&(nt=s.R8I),X===s.SHORT&&(nt=s.R16I),X===s.INT&&(nt=s.R32I)),C===s.RG&&(X===s.FLOAT&&(nt=s.RG32F),X===s.HALF_FLOAT&&(nt=s.RG16F),X===s.UNSIGNED_BYTE&&(nt=s.RG8)),C===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(nt=s.RG8UI),X===s.UNSIGNED_SHORT&&(nt=s.RG16UI),X===s.UNSIGNED_INT&&(nt=s.RG32UI),X===s.BYTE&&(nt=s.RG8I),X===s.SHORT&&(nt=s.RG16I),X===s.INT&&(nt=s.RG32I)),C===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(nt=s.RGB8UI),X===s.UNSIGNED_SHORT&&(nt=s.RGB16UI),X===s.UNSIGNED_INT&&(nt=s.RGB32UI),X===s.BYTE&&(nt=s.RGB8I),X===s.SHORT&&(nt=s.RGB16I),X===s.INT&&(nt=s.RGB32I)),C===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(nt=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(nt=s.RGBA16UI),X===s.UNSIGNED_INT&&(nt=s.RGBA32UI),X===s.BYTE&&(nt=s.RGBA8I),X===s.SHORT&&(nt=s.RGBA16I),X===s.INT&&(nt=s.RGBA32I)),C===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(nt=s.RGB9_E5),C===s.RGBA){const Ct=rt?dc:oe.getTransfer(it);X===s.FLOAT&&(nt=s.RGBA32F),X===s.HALF_FLOAT&&(nt=s.RGBA16F),X===s.UNSIGNED_BYTE&&(nt=Ct===pe?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(nt=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(nt=s.RGB5_A1)}return(nt===s.R16F||nt===s.R32F||nt===s.RG16F||nt===s.RG32F||nt===s.RGBA16F||nt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function _(D,C){let X;return D?C===null||C===Bs||C===qo?X=s.DEPTH24_STENCIL8:C===wi?X=s.DEPTH32F_STENCIL8:C===Or&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Bs||C===qo?X=s.DEPTH_COMPONENT24:C===wi?X=s.DEPTH_COMPONENT32F:C===Or&&(X=s.DEPTH_COMPONENT16),X}function A(D,C){return f(D)===!0||D.isFramebufferTexture&&D.minFilter!==kn&&D.minFilter!==yi?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function E(D){const C=D.target;C.removeEventListener("dispose",E),b(C),C.isVideoTexture&&u.delete(C)}function T(D){const C=D.target;C.removeEventListener("dispose",T),v(C)}function b(D){const C=n.get(D);if(C.__webglInit===void 0)return;const X=D.source,it=d.get(X);if(it){const rt=it[C.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&y(D),Object.keys(it).length===0&&d.delete(X)}n.remove(D)}function y(D){const C=n.get(D);s.deleteTexture(C.__webglTexture);const X=D.source,it=d.get(X);delete it[C.__cacheKey],r.memory.textures--}function v(D){const C=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(C.__webglFramebuffer[it]))for(let rt=0;rt<C.__webglFramebuffer[it].length;rt++)s.deleteFramebuffer(C.__webglFramebuffer[it][rt]);else s.deleteFramebuffer(C.__webglFramebuffer[it]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[it])}else{if(Array.isArray(C.__webglFramebuffer))for(let it=0;it<C.__webglFramebuffer.length;it++)s.deleteFramebuffer(C.__webglFramebuffer[it]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let it=0;it<C.__webglColorRenderbuffer.length;it++)C.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[it]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const X=D.textures;for(let it=0,rt=X.length;it<rt;it++){const nt=n.get(X[it]);nt.__webglTexture&&(s.deleteTexture(nt.__webglTexture),r.memory.textures--),n.remove(X[it])}n.remove(D)}let R=0;function U(){R=0}function L(){const D=R;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),R+=1,D}function z(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function V(D,C){const X=n.get(D);if(D.isVideoTexture&&It(D),D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){const it=D.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(X,D,C);return}}e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+C)}function G(D,C){const X=n.get(D);if(D.version>0&&X.__version!==D.version){et(X,D,C);return}e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+C)}function j(D,C){const X=n.get(D);if(D.version>0&&X.__version!==D.version){et(X,D,C);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+C)}function W(D,C){const X=n.get(D);if(D.version>0&&X.__version!==D.version){ut(X,D,C);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+C)}const lt={[Xo]:s.REPEAT,[Cs]:s.CLAMP_TO_EDGE,[mu]:s.MIRRORED_REPEAT},pt={[kn]:s.NEAREST,[Xm]:s.NEAREST_MIPMAP_NEAREST,[oa]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[Yc]:s.LINEAR_MIPMAP_NEAREST,[Ps]:s.LINEAR_MIPMAP_LINEAR},Rt={[$m]:s.NEVER,[eg]:s.ALWAYS,[jm]:s.LESS,[Tp]:s.LEQUAL,[Km]:s.EQUAL,[tg]:s.GEQUAL,[Jm]:s.GREATER,[Qm]:s.NOTEQUAL};function Ft(D,C){if(C.type===wi&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===yi||C.magFilter===Yc||C.magFilter===oa||C.magFilter===Ps||C.minFilter===yi||C.minFilter===Yc||C.minFilter===oa||C.minFilter===Ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,lt[C.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,lt[C.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,lt[C.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,pt[C.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,pt[C.minFilter]),C.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,Rt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===kn||C.minFilter!==oa&&C.minFilter!==Ps||C.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");s.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function jt(D,C){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",E));const it=C.source;let rt=d.get(it);rt===void 0&&(rt={},d.set(it,rt));const nt=z(C);if(nt!==D.__cacheKey){rt[nt]===void 0&&(rt[nt]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,X=!0),rt[nt].usedTimes++;const Ct=rt[D.__cacheKey];Ct!==void 0&&(rt[D.__cacheKey].usedTimes--,Ct.usedTimes===0&&y(C)),D.__cacheKey=nt,D.__webglTexture=rt[nt].texture}return X}function et(D,C,X){let it=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(it=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(it=s.TEXTURE_3D);const rt=jt(D,C),nt=C.source;e.bindTexture(it,D.__webglTexture,s.TEXTURE0+X);const Ct=n.get(nt);if(nt.version!==Ct.__version||rt===!0){e.activeTexture(s.TEXTURE0+X);const vt=oe.getPrimaries(oe.workingColorSpace),bt=C.colorSpace===ns?null:oe.getPrimaries(C.colorSpace),ee=C.colorSpace===ns||vt===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ht=x(C.image,!1,i.maxTextureSize);ht=Se(C,ht);const Tt=o.convert(C.format,C.colorSpace),Nt=o.convert(C.type);let Ot=M(C.internalFormat,Tt,Nt,C.colorSpace,C.isVideoTexture);Ft(it,C);let Et;const Qt=C.mipmaps,Xt=C.isVideoTexture!==!0,Me=Ct.__version===void 0||rt===!0,B=nt.dataReady,gt=A(C,ht);if(C.isDepthTexture)Ot=_(C.format===Yo,C.type),Me&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,Ot,ht.width,ht.height):e.texImage2D(s.TEXTURE_2D,0,Ot,ht.width,ht.height,0,Tt,Nt,null));else if(C.isDataTexture)if(Qt.length>0){Xt&&Me&&e.texStorage2D(s.TEXTURE_2D,gt,Ot,Qt[0].width,Qt[0].height);for(let tt=0,st=Qt.length;tt<st;tt++)Et=Qt[tt],Xt?B&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,Et.width,Et.height,Tt,Nt,Et.data):e.texImage2D(s.TEXTURE_2D,tt,Ot,Et.width,Et.height,0,Tt,Nt,Et.data);C.generateMipmaps=!1}else Xt?(Me&&e.texStorage2D(s.TEXTURE_2D,gt,Ot,ht.width,ht.height),B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht.width,ht.height,Tt,Nt,ht.data)):e.texImage2D(s.TEXTURE_2D,0,Ot,ht.width,ht.height,0,Tt,Nt,ht.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Xt&&Me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Ot,Qt[0].width,Qt[0].height,ht.depth);for(let tt=0,st=Qt.length;tt<st;tt++)if(Et=Qt[tt],C.format!==ai)if(Tt!==null)if(Xt){if(B)if(C.layerUpdates.size>0){const yt=cd(Et.width,Et.height,C.format,C.type);for(const Mt of C.layerUpdates){const Vt=Et.data.subarray(Mt*yt/Et.data.BYTES_PER_ELEMENT,(Mt+1)*yt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,Mt,Et.width,Et.height,1,Tt,Vt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,Et.width,Et.height,ht.depth,Tt,Et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,Ot,Et.width,Et.height,ht.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?B&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,Et.width,Et.height,ht.depth,Tt,Nt,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,Ot,Et.width,Et.height,ht.depth,0,Tt,Nt,Et.data)}else{Xt&&Me&&e.texStorage2D(s.TEXTURE_2D,gt,Ot,Qt[0].width,Qt[0].height);for(let tt=0,st=Qt.length;tt<st;tt++)Et=Qt[tt],C.format!==ai?Tt!==null?Xt?B&&e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,Et.width,Et.height,Tt,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,Ot,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?B&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,Et.width,Et.height,Tt,Nt,Et.data):e.texImage2D(s.TEXTURE_2D,tt,Ot,Et.width,Et.height,0,Tt,Nt,Et.data)}else if(C.isDataArrayTexture)if(Xt){if(Me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Ot,ht.width,ht.height,ht.depth),B)if(C.layerUpdates.size>0){const tt=cd(ht.width,ht.height,C.format,C.type);for(const st of C.layerUpdates){const yt=ht.data.subarray(st*tt/ht.data.BYTES_PER_ELEMENT,(st+1)*tt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,st,ht.width,ht.height,1,Tt,Nt,yt)}C.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Tt,Nt,ht.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,ht.width,ht.height,ht.depth,0,Tt,Nt,ht.data);else if(C.isData3DTexture)Xt?(Me&&e.texStorage3D(s.TEXTURE_3D,gt,Ot,ht.width,ht.height,ht.depth),B&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Tt,Nt,ht.data)):e.texImage3D(s.TEXTURE_3D,0,Ot,ht.width,ht.height,ht.depth,0,Tt,Nt,ht.data);else if(C.isFramebufferTexture){if(Me)if(Xt)e.texStorage2D(s.TEXTURE_2D,gt,Ot,ht.width,ht.height);else{let tt=ht.width,st=ht.height;for(let yt=0;yt<gt;yt++)e.texImage2D(s.TEXTURE_2D,yt,Ot,tt,st,0,Tt,Nt,null),tt>>=1,st>>=1}}else if(Qt.length>0){if(Xt&&Me){const tt=Pt(Qt[0]);e.texStorage2D(s.TEXTURE_2D,gt,Ot,tt.width,tt.height)}for(let tt=0,st=Qt.length;tt<st;tt++)Et=Qt[tt],Xt?B&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,Tt,Nt,Et):e.texImage2D(s.TEXTURE_2D,tt,Ot,Tt,Nt,Et);C.generateMipmaps=!1}else if(Xt){if(Me){const tt=Pt(ht);e.texStorage2D(s.TEXTURE_2D,gt,Ot,tt.width,tt.height)}B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Tt,Nt,ht)}else e.texImage2D(s.TEXTURE_2D,0,Ot,Tt,Nt,ht);f(C)&&m(it),Ct.__version=nt.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function ut(D,C,X){if(C.image.length!==6)return;const it=jt(D,C),rt=C.source;e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+X);const nt=n.get(rt);if(rt.version!==nt.__version||it===!0){e.activeTexture(s.TEXTURE0+X);const Ct=oe.getPrimaries(oe.workingColorSpace),vt=C.colorSpace===ns?null:oe.getPrimaries(C.colorSpace),bt=C.colorSpace===ns||Ct===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const ee=C.isCompressedTexture||C.image[0].isCompressedTexture,ht=C.image[0]&&C.image[0].isDataTexture,Tt=[];for(let st=0;st<6;st++)!ee&&!ht?Tt[st]=x(C.image[st],!0,i.maxCubemapSize):Tt[st]=ht?C.image[st].image:C.image[st],Tt[st]=Se(C,Tt[st]);const Nt=Tt[0],Ot=o.convert(C.format,C.colorSpace),Et=o.convert(C.type),Qt=M(C.internalFormat,Ot,Et,C.colorSpace),Xt=C.isVideoTexture!==!0,Me=nt.__version===void 0||it===!0,B=rt.dataReady;let gt=A(C,Nt);Ft(s.TEXTURE_CUBE_MAP,C);let tt;if(ee){Xt&&Me&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Qt,Nt.width,Nt.height);for(let st=0;st<6;st++){tt=Tt[st].mipmaps;for(let yt=0;yt<tt.length;yt++){const Mt=tt[yt];C.format!==ai?Ot!==null?Xt?B&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,0,0,Mt.width,Mt.height,Ot,Mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,Qt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,0,0,Mt.width,Mt.height,Ot,Et,Mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,Qt,Mt.width,Mt.height,0,Ot,Et,Mt.data)}}}else{if(tt=C.mipmaps,Xt&&Me){tt.length>0&&gt++;const st=Pt(Tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Qt,st.width,st.height)}for(let st=0;st<6;st++)if(ht){Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Tt[st].width,Tt[st].height,Ot,Et,Tt[st].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Qt,Tt[st].width,Tt[st].height,0,Ot,Et,Tt[st].data);for(let yt=0;yt<tt.length;yt++){const Vt=tt[yt].image[st].image;Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,0,0,Vt.width,Vt.height,Ot,Et,Vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,Qt,Vt.width,Vt.height,0,Ot,Et,Vt.data)}}else{Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ot,Et,Tt[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Qt,Ot,Et,Tt[st]);for(let yt=0;yt<tt.length;yt++){const Mt=tt[yt];Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,0,0,Ot,Et,Mt.image[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,Qt,Ot,Et,Mt.image[st])}}}f(C)&&m(s.TEXTURE_CUBE_MAP),nt.__version=rt.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function wt(D,C,X,it,rt,nt){const Ct=o.convert(X.format,X.colorSpace),vt=o.convert(X.type),bt=M(X.internalFormat,Ct,vt,X.colorSpace),ee=n.get(C),ht=n.get(X);if(ht.__renderTarget=C,!ee.__hasExternalTextures){const Tt=Math.max(1,C.width>>nt),Nt=Math.max(1,C.height>>nt);rt===s.TEXTURE_3D||rt===s.TEXTURE_2D_ARRAY?e.texImage3D(rt,nt,bt,Tt,Nt,C.depth,0,Ct,vt,null):e.texImage2D(rt,nt,bt,Tt,Nt,0,Ct,vt,null)}e.bindFramebuffer(s.FRAMEBUFFER,D),Jt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,rt,ht.__webglTexture,0,Kt(C)):(rt===s.TEXTURE_2D||rt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,it,rt,ht.__webglTexture,nt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(D,C,X){if(s.bindRenderbuffer(s.RENDERBUFFER,D),C.depthBuffer){const it=C.depthTexture,rt=it&&it.isDepthTexture?it.type:null,nt=_(C.stencilBuffer,rt),Ct=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=Kt(C);Jt(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,vt,nt,C.width,C.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,vt,nt,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,nt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,D)}else{const it=C.textures;for(let rt=0;rt<it.length;rt++){const nt=it[rt],Ct=o.convert(nt.format,nt.colorSpace),vt=o.convert(nt.type),bt=M(nt.internalFormat,Ct,vt,nt.colorSpace),ee=Kt(C);X&&Jt(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,bt,C.width,C.height):Jt(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,bt,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,bt,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function zt(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=n.get(C.depthTexture);it.__renderTarget=C,(!it.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),V(C.depthTexture,0);const rt=it.__webglTexture,nt=Kt(C);if(C.depthTexture.format===Io)Jt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0);else if(C.depthTexture.format===Yo)Jt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function kt(D){const C=n.get(D),X=D.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==D.depthTexture){const it=D.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),it){const rt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,it.removeEventListener("dispose",rt)};it.addEventListener("dispose",rt),C.__depthDisposeCallback=rt}C.__boundDepthTexture=it}if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");zt(C.__webglFramebuffer,D)}else if(X){C.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[it]),C.__webglDepthbuffer[it]===void 0)C.__webglDepthbuffer[it]=s.createRenderbuffer(),dt(C.__webglDepthbuffer[it],D,!1);else{const rt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=C.__webglDepthbuffer[it];s.bindRenderbuffer(s.RENDERBUFFER,nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),dt(C.__webglDepthbuffer,D,!1);else{const it=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,rt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(D,C,X){const it=n.get(D);C!==void 0&&wt(it.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&kt(D)}function Re(D){const C=D.texture,X=n.get(D),it=n.get(C);D.addEventListener("dispose",T);const rt=D.textures,nt=D.isWebGLCubeRenderTarget===!0,Ct=rt.length>1;if(Ct||(it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture()),it.__version=C.version,r.memory.textures++),nt){X.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer[vt]=[];for(let bt=0;bt<C.mipmaps.length;bt++)X.__webglFramebuffer[vt][bt]=s.createFramebuffer()}else X.__webglFramebuffer[vt]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer=[];for(let vt=0;vt<C.mipmaps.length;vt++)X.__webglFramebuffer[vt]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let vt=0,bt=rt.length;vt<bt;vt++){const ee=n.get(rt[vt]);ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture(),r.memory.textures++)}if(D.samples>0&&Jt(D)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let vt=0;vt<rt.length;vt++){const bt=rt[vt];X.__webglColorRenderbuffer[vt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[vt]);const ee=o.convert(bt.format,bt.colorSpace),ht=o.convert(bt.type),Tt=M(bt.internalFormat,ee,ht,bt.colorSpace,D.isXRRenderTarget===!0),Nt=Kt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,Tt,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,X.__webglColorRenderbuffer[vt])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),dt(X.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(nt){e.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture),Ft(s.TEXTURE_CUBE_MAP,C);for(let vt=0;vt<6;vt++)if(C.mipmaps&&C.mipmaps.length>0)for(let bt=0;bt<C.mipmaps.length;bt++)wt(X.__webglFramebuffer[vt][bt],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,bt);else wt(X.__webglFramebuffer[vt],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);f(C)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let vt=0,bt=rt.length;vt<bt;vt++){const ee=rt[vt],ht=n.get(ee);e.bindTexture(s.TEXTURE_2D,ht.__webglTexture),Ft(s.TEXTURE_2D,ee),wt(X.__webglFramebuffer,D,ee,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,0),f(ee)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let vt=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(vt=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(vt,it.__webglTexture),Ft(vt,C),C.mipmaps&&C.mipmaps.length>0)for(let bt=0;bt<C.mipmaps.length;bt++)wt(X.__webglFramebuffer[bt],D,C,s.COLOR_ATTACHMENT0,vt,bt);else wt(X.__webglFramebuffer,D,C,s.COLOR_ATTACHMENT0,vt,0);f(C)&&m(vt),e.unbindTexture()}D.depthBuffer&&kt(D)}function te(D){const C=D.textures;for(let X=0,it=C.length;X<it;X++){const rt=C[X];if(f(rt)){const nt=S(D),Ct=n.get(rt).__webglTexture;e.bindTexture(nt,Ct),m(nt),e.unbindTexture()}}}const Ne=[],O=[];function Hn(D){if(D.samples>0){if(Jt(D)===!1){const C=D.textures,X=D.width,it=D.height;let rt=s.COLOR_BUFFER_BIT;const nt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=n.get(D),vt=C.length>1;if(vt)for(let bt=0;bt<C.length;bt++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let bt=0;bt<C.length;bt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(rt|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(rt|=s.STENCIL_BUFFER_BIT)),vt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[bt]);const ee=n.get(C[bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,X,it,0,0,X,it,rt,s.NEAREST),c===!0&&(Ne.length=0,O.length=0,Ne.push(s.COLOR_ATTACHMENT0+bt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ne.push(nt),O.push(nt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ne))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),vt)for(let bt=0;bt<C.length;bt++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[bt]);const ee=n.get(C[bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,ee,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const C=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function Kt(D){return Math.min(i.maxSamples,D.samples)}function Jt(D){const C=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function It(D){const C=r.render.frame;u.get(D)!==C&&(u.set(D,C),D.update())}function Se(D,C){const X=D.colorSpace,it=D.format,rt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==Zo&&X!==ns&&(oe.getTransfer(X)===pe?(it!==ai||rt!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),C}function Pt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=Zt,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Hn,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Jt}function Vy(s,t){function e(n,i=ns){let o;const r=oe.getTransfer(i);if(n===Wi)return s.UNSIGNED_BYTE;if(n===Bh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===kh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===xp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===mp)return s.BYTE;if(n===gp)return s.SHORT;if(n===Or)return s.UNSIGNED_SHORT;if(n===Oh)return s.INT;if(n===Bs)return s.UNSIGNED_INT;if(n===wi)return s.FLOAT;if(n===ki)return s.HALF_FLOAT;if(n===vp)return s.ALPHA;if(n===Mp)return s.RGB;if(n===ai)return s.RGBA;if(n===_p)return s.LUMINANCE;if(n===yp)return s.LUMINANCE_ALPHA;if(n===Io)return s.DEPTH_COMPONENT;if(n===Yo)return s.DEPTH_STENCIL;if(n===Gh)return s.RED;if(n===Hh)return s.RED_INTEGER;if(n===wp)return s.RG;if(n===Vh)return s.RG_INTEGER;if(n===Wh)return s.RGBA_INTEGER;if(n===Ka||n===Ja||n===Qa||n===tc)if(r===pe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ka)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ja)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ka)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ja)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gu||n===xu||n===vu||n===Mu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===gu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_u||n===yu||n===wu)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===_u||n===yu)return r===pe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===wu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Su||n===bu||n===Tu||n===Eu||n===Au||n===Ru||n===Cu||n===Pu||n===Iu||n===Lu||n===Du||n===Uu||n===Nu||n===zu)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Su)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Eu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Au)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ru)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Iu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Du)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zu)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ec||n===Fu||n===Ou)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===ec)return r===pe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ou)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sp||n===Bu||n===ku||n===Gu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===ec)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Bu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ku)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Wy={type:"move"};class Cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const f=e.getJointPose(x,n),m=this._getHandJoint(l,x);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wy)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Xy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qy=`
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

}`;class Yy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new nn,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Rn({vertexShader:Xy,fragmentShader:qy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new I(new ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zy extends tr{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null;const x=new Yy,f=e.getContextAttributes();let m=null,S=null;const M=[],_=[],A=new ft;let E=null;const T=new Nn;T.viewport=new ge;const b=new Nn;b.viewport=new ge;const y=[T,b],v=new mx;let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ut=M[et];return ut===void 0&&(ut=new Cl,M[et]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(et){let ut=M[et];return ut===void 0&&(ut=new Cl,M[et]=ut),ut.getGripSpace()},this.getHand=function(et){let ut=M[et];return ut===void 0&&(ut=new Cl,M[et]=ut),ut.getHandSpace()};function L(et){const ut=_.indexOf(et.inputSource);if(ut===-1)return;const wt=M[ut];wt!==void 0&&(wt.update(et.inputSource,et.frame,l||r),wt.dispatchEvent({type:et.type,data:et.inputSource}))}function z(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",V);for(let et=0;et<M.length;et++){const ut=_[et];ut!==null&&(_[et]=null,M[et].disconnect(ut))}R=null,U=null,x.reset(),t.setRenderTarget(m),p=null,d=null,h=null,i=null,S=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){o=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(et){l=et},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(et){if(i=et,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",z),i.addEventListener("inputsourceschange",V),f.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let wt=null,dt=null,zt=null;f.depth&&(zt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=f.stencil?Yo:Io,dt=f.stencil?qo:Bs);const kt={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:o};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(kt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new li(d.textureWidth,d.textureHeight,{format:ai,type:Wi,depthTexture:new kp(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const wt={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(i,e,wt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new li(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Wi,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),jt.setContext(i),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(et){for(let ut=0;ut<et.removed.length;ut++){const wt=et.removed[ut],dt=_.indexOf(wt);dt>=0&&(_[dt]=null,M[dt].disconnect(wt))}for(let ut=0;ut<et.added.length;ut++){const wt=et.added[ut];let dt=_.indexOf(wt);if(dt===-1){for(let kt=0;kt<M.length;kt++)if(kt>=_.length){_.push(wt),dt=kt;break}else if(_[kt]===null){_[kt]=wt,dt=kt;break}if(dt===-1)break}const zt=M[dt];zt&&zt.connect(wt)}}const G=new N,j=new N;function W(et,ut,wt){G.setFromMatrixPosition(ut.matrixWorld),j.setFromMatrixPosition(wt.matrixWorld);const dt=G.distanceTo(j),zt=ut.projectionMatrix.elements,kt=wt.projectionMatrix.elements,Zt=zt[14]/(zt[10]-1),Re=zt[14]/(zt[10]+1),te=(zt[9]+1)/zt[5],Ne=(zt[9]-1)/zt[5],O=(zt[8]-1)/zt[0],Hn=(kt[8]+1)/kt[0],Kt=Zt*O,Jt=Zt*Hn,It=dt/(-O+Hn),Se=It*-O;if(ut.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Se),et.translateZ(It),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),zt[10]===-1)et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Pt=Zt+It,D=Re+It,C=Kt-Se,X=Jt+(dt-Se),it=te*Re/D*Pt,rt=Ne*Re/D*Pt;et.projectionMatrix.makePerspective(C,X,it,rt,Pt,D),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function lt(et,ut){ut===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ut.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(i===null)return;let ut=et.near,wt=et.far;x.texture!==null&&(x.depthNear>0&&(ut=x.depthNear),x.depthFar>0&&(wt=x.depthFar)),v.near=b.near=T.near=ut,v.far=b.far=T.far=wt,(R!==v.near||U!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,U=v.far),T.layers.mask=et.layers.mask|2,b.layers.mask=et.layers.mask|4,v.layers.mask=T.layers.mask|b.layers.mask;const dt=et.parent,zt=v.cameras;lt(v,dt);for(let kt=0;kt<zt.length;kt++)lt(zt[kt],dt);zt.length===2?W(v,T,b):v.projectionMatrix.copy(T.projectionMatrix),pt(et,v,dt)};function pt(et,ut,wt){wt===null?et.matrix.copy(ut.matrixWorld):(et.matrix.copy(wt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ut.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Vu*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(et){c=et,d!==null&&(d.fixedFoveation=et),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=et)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let Rt=null;function Ft(et,ut){if(u=ut.getViewerPose(l||r),g=ut,u!==null){const wt=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let dt=!1;wt.length!==v.cameras.length&&(v.cameras.length=0,dt=!0);for(let kt=0;kt<wt.length;kt++){const Zt=wt[kt];let Re=null;if(p!==null)Re=p.getViewport(Zt);else{const Ne=h.getViewSubImage(d,Zt);Re=Ne.viewport,kt===0&&(t.setRenderTargetTextures(S,Ne.colorTexture,d.ignoreDepthValues?void 0:Ne.depthStencilTexture),t.setRenderTarget(S))}let te=y[kt];te===void 0&&(te=new Nn,te.layers.enable(kt),te.viewport=new ge,y[kt]=te),te.matrix.fromArray(Zt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Zt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Re.x,Re.y,Re.width,Re.height),kt===0&&(v.matrix.copy(te.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),dt===!0&&v.cameras.push(te)}const zt=i.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const kt=h.getDepthInformation(wt[0]);kt&&kt.isValid&&kt.texture&&x.init(t,kt,i.renderState)}}for(let wt=0;wt<M.length;wt++){const dt=_[wt],zt=M[wt];dt!==null&&zt!==void 0&&zt.update(dt,ut,l||r)}Rt&&Rt(et,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),g=null}const jt=new Kp;jt.setAnimationLoop(Ft),this.setAnimationLoop=function(et){Rt=et},this.dispose=function(){}}}const gs=new bi,$y=new fe;function jy(s,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,Dp(s)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function i(f,m,S,M,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(f,m):m.isMeshToonMaterial?(o(f,m),h(f,m)):m.isMeshPhongMaterial?(o(f,m),u(f,m)):m.isMeshStandardMaterial?(o(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,_)):m.isMeshMatcapMaterial?(o(f,m),g(f,m)):m.isMeshDepthMaterial?o(f,m):m.isMeshDistanceMaterial?(o(f,m),x(f,m)):m.isMeshNormalMaterial?o(f,m):m.isLineBasicMaterial?(r(f,m),m.isLineDashedMaterial&&a(f,m)):m.isPointsMaterial?c(f,m,S,M):m.isSpriteMaterial?l(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Tn&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Tn&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const S=t.get(m),M=S.envMap,_=S.envMapRotation;M&&(f.envMap.value=M,gs.copy(_),gs.x*=-1,gs.y*=-1,gs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),f.envMapRotation.value.setFromMatrix4($y.makeRotationFromEuler(gs)),f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function r(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function c(f,m,S,M){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*S,f.scale.value=M*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function l(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function u(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function h(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,S){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Tn&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function x(f,m){const S=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ky(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){const _=M.program;n.uniformBlockBinding(S,_)}function l(S,M){let _=i[S.id];_===void 0&&(g(S),_=u(S),i[S.id]=_,S.addEventListener("dispose",f));const A=M.program;n.updateUBOMapping(S,A);const E=t.render.frame;o[S.id]!==E&&(d(S),o[S.id]=E)}function u(S){const M=h();S.__bindingPointIndex=M;const _=s.createBuffer(),A=S.__size,E=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,A,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,_),_}function h(){for(let S=0;S<a;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const M=i[S.id],_=S.uniforms,A=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let E=0,T=_.length;E<T;E++){const b=Array.isArray(_[E])?_[E]:[_[E]];for(let y=0,v=b.length;y<v;y++){const R=b[y];if(p(R,E,y,A)===!0){const U=R.__offset,L=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let V=0;V<L.length;V++){const G=L[V],j=x(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,U+z,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,z),z+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(S,M,_,A){const E=S.value,T=M+"_"+_;if(A[T]===void 0)return typeof E=="number"||typeof E=="boolean"?A[T]=E:A[T]=E.clone(),!0;{const b=A[T];if(typeof E=="number"||typeof E=="boolean"){if(b!==E)return A[T]=E,!0}else if(b.equals(E)===!1)return b.copy(E),!0}return!1}function g(S){const M=S.uniforms;let _=0;const A=16;for(let T=0,b=M.length;T<b;T++){const y=Array.isArray(M[T])?M[T]:[M[T]];for(let v=0,R=y.length;v<R;v++){const U=y[v],L=Array.isArray(U.value)?U.value:[U.value];for(let z=0,V=L.length;z<V;z++){const G=L[z],j=x(G),W=_%A,lt=W%j.boundary,pt=W+lt;_+=lt,pt!==0&&A-pt<j.storage&&(_+=A-pt),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=_,_+=j.storage}}}const E=_%A;return E>0&&(_+=A-E),S.__size=_,S.__cache={},this}function x(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function f(S){const M=S.target;M.removeEventListener("dispose",f);const _=r.indexOf(M.__bindingPointIndex);r.splice(_,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete o[M.id]}function m(){for(const S in i)s.deleteBuffer(i[S]);r=[],i={},o={}}return{bind:c,update:l,dispose:m}}class Jy{constructor(t={}){const{canvas:e=ig(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),x=new Int32Array(4);let f=null,m=null;const S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=rs,this.toneMappingExposure=1;const _=this;let A=!1,E=0,T=0,b=null,y=-1,v=null;const R=new ge,U=new ge;let L=null;const z=new ot(0);let V=0,G=e.width,j=e.height,W=1,lt=null,pt=null;const Rt=new ge(0,0,G,j),Ft=new ge(0,0,G,j);let jt=!1;const et=new Yh;let ut=!1,wt=!1;this.transmissionResolutionScale=1;const dt=new fe,zt=new fe,kt=new N,Zt=new ge,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function Ne(){return b===null?W:1}let O=n;function Hn(P,k){return e.getContext(P,k)}try{const P={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fh}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),O===null){const k="webgl2";if(O=Hn(k,P),O===null)throw Hn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Kt,Jt,It,Se,Pt,D,C,X,it,rt,nt,Ct,vt,bt,ee,ht,Tt,Nt,Ot,Et,Qt,Xt,Me,B;function gt(){Kt=new a_(O),Kt.init(),Xt=new Vy(O,Kt),Jt=new e_(O,Kt,t,Xt),It=new Gy(O,Kt),Jt.reverseDepthBuffer&&d&&It.buffers.depth.setReversed(!0),Se=new u_(O),Pt=new Ry,D=new Hy(O,Kt,It,Pt,Jt,Xt,Se),C=new i_(_),X=new r_(_),it=new xx(O),Me=new QM(O,it),rt=new c_(O,it,Se,Me),nt=new f_(O,rt,it,Se),Ot=new h_(O,Jt,D),ht=new n_(Pt),Ct=new Ay(_,C,X,Kt,Jt,Me,ht),vt=new jy(_,Pt),bt=new Py,ee=new zy(Kt),Nt=new JM(_,C,X,It,nt,p,c),Tt=new By(_,nt,Jt),B=new Ky(O,Se,Jt,It),Et=new t_(O,Kt,Se),Qt=new l_(O,Kt,Se),Se.programs=Ct.programs,_.capabilities=Jt,_.extensions=Kt,_.properties=Pt,_.renderLists=bt,_.shadowMap=Tt,_.state=It,_.info=Se}gt();const tt=new Zy(_,O);this.xr=tt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const P=Kt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Kt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(P){P!==void 0&&(W=P,this.setSize(G,j,!1))},this.getSize=function(P){return P.set(G,j)},this.setSize=function(P,k,q=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=P,j=k,e.width=Math.floor(P*W),e.height=Math.floor(k*W),q===!0&&(e.style.width=P+"px",e.style.height=k+"px"),this.setViewport(0,0,P,k)},this.getDrawingBufferSize=function(P){return P.set(G*W,j*W).floor()},this.setDrawingBufferSize=function(P,k,q){G=P,j=k,W=q,e.width=Math.floor(P*q),e.height=Math.floor(k*q),this.setViewport(0,0,P,k)},this.getCurrentViewport=function(P){return P.copy(R)},this.getViewport=function(P){return P.copy(Rt)},this.setViewport=function(P,k,q,$){P.isVector4?Rt.set(P.x,P.y,P.z,P.w):Rt.set(P,k,q,$),It.viewport(R.copy(Rt).multiplyScalar(W).round())},this.getScissor=function(P){return P.copy(Ft)},this.setScissor=function(P,k,q,$){P.isVector4?Ft.set(P.x,P.y,P.z,P.w):Ft.set(P,k,q,$),It.scissor(U.copy(Ft).multiplyScalar(W).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(P){It.setScissorTest(jt=P)},this.setOpaqueSort=function(P){lt=P},this.setTransparentSort=function(P){pt=P},this.getClearColor=function(P){return P.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(P=!0,k=!0,q=!0){let $=0;if(P){let H=!1;if(b!==null){const at=b.texture.format;H=at===Wh||at===Vh||at===Hh}if(H){const at=b.texture.type,xt=at===Wi||at===Bs||at===Or||at===qo||at===Bh||at===kh,St=Nt.getClearColor(),At=Nt.getClearAlpha(),Bt=St.r,Gt=St.g,Lt=St.b;xt?(g[0]=Bt,g[1]=Gt,g[2]=Lt,g[3]=At,O.clearBufferuiv(O.COLOR,0,g)):(x[0]=Bt,x[1]=Gt,x[2]=Lt,x[3]=At,O.clearBufferiv(O.COLOR,0,x))}else $|=O.COLOR_BUFFER_BIT}k&&($|=O.DEPTH_BUFFER_BIT),q&&($|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Nt.dispose(),bt.dispose(),ee.dispose(),Pt.dispose(),C.dispose(),X.dispose(),nt.dispose(),Me.dispose(),B.dispose(),Ct.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",mf),tt.removeEventListener("sessionend",gf),ls.stop()};function st(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=Se.autoReset,k=Tt.enabled,q=Tt.autoUpdate,$=Tt.needsUpdate,H=Tt.type;gt(),Se.autoReset=P,Tt.enabled=k,Tt.autoUpdate=q,Tt.needsUpdate=$,Tt.type=H}function Mt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Vt(P){const k=P.target;k.removeEventListener("dispose",Vt),Pe(k)}function Pe(P){je(P),Pt.remove(P)}function je(P){const k=Pt.get(P).programs;k!==void 0&&(k.forEach(function(q){Ct.releaseProgram(q)}),P.isShaderMaterial&&Ct.releaseShaderCache(P))}this.renderBufferDirect=function(P,k,q,$,H,at){k===null&&(k=Re);const xt=H.isMesh&&H.matrixWorld.determinant()<0,St=hm(P,k,q,$,H);It.setMaterial($,xt);let At=q.index,Bt=1;if($.wireframe===!0){if(At=rt.getWireframeAttribute(q),At===void 0)return;Bt=2}const Gt=q.drawRange,Lt=q.attributes.position;let ne=Gt.start*Bt,ue=(Gt.start+Gt.count)*Bt;at!==null&&(ne=Math.max(ne,at.start*Bt),ue=Math.min(ue,(at.start+at.count)*Bt)),At!==null?(ne=Math.max(ne,0),ue=Math.min(ue,At.count)):Lt!=null&&(ne=Math.max(ne,0),ue=Math.min(ue,Lt.count));const Fe=ue-ne;if(Fe<0||Fe===1/0)return;Me.setup(H,$,St,q,At);let Ie,se=Et;if(At!==null&&(Ie=it.get(At),se=Qt,se.setIndex(Ie)),H.isMesh)$.wireframe===!0?(It.setLineWidth($.wireframeLinewidth*Ne()),se.setMode(O.LINES)):se.setMode(O.TRIANGLES);else if(H.isLine){let Ut=$.linewidth;Ut===void 0&&(Ut=1),It.setLineWidth(Ut*Ne()),H.isLineSegments?se.setMode(O.LINES):H.isLineLoop?se.setMode(O.LINE_LOOP):se.setMode(O.LINE_STRIP)}else H.isPoints?se.setMode(O.POINTS):H.isSprite&&se.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)se.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))se.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ut=H._multiDrawStarts,Ye=H._multiDrawCounts,he=H._multiDrawCount,ii=At?it.get(At).bytesPerElement:1,Xs=Pt.get($).currentProgram.getUniforms();for(let In=0;In<he;In++)Xs.setValue(O,"_gl_DrawID",In),se.render(Ut[In]/ii,Ye[In])}else if(H.isInstancedMesh)se.renderInstances(ne,Fe,H.count);else if(q.isInstancedBufferGeometry){const Ut=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ye=Math.min(q.instanceCount,Ut);se.renderInstances(ne,Fe,Ye)}else se.render(ne,Fe)};function de(P,k,q){P.transparent===!0&&P.side===Dt&&P.forceSinglePass===!1?(P.side=Tn,P.needsUpdate=!0,sa(P,k,q),P.side=as,P.needsUpdate=!0,sa(P,k,q),P.side=Dt):sa(P,k,q)}this.compile=function(P,k,q=null){q===null&&(q=P),m=ee.get(q),m.init(k),M.push(m),q.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),P!==q&&P.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const $=new Set;return P.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const at=H.material;if(at)if(Array.isArray(at))for(let xt=0;xt<at.length;xt++){const St=at[xt];de(St,q,H),$.add(St)}else de(at,q,H),$.add(at)}),M.pop(),m=null,$},this.compileAsync=function(P,k,q=null){const $=this.compile(P,k,q);return new Promise(H=>{function at(){if($.forEach(function(xt){Pt.get(xt).currentProgram.isReady()&&$.delete(xt)}),$.size===0){H(P);return}setTimeout(at,10)}Kt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let ni=null;function Ai(P){ni&&ni(P)}function mf(){ls.stop()}function gf(){ls.start()}const ls=new Kp;ls.setAnimationLoop(Ai),typeof self<"u"&&ls.setContext(self),this.setAnimationLoop=function(P){ni=P,tt.setAnimationLoop(P),P===null?ls.stop():ls.start()},tt.addEventListener("sessionstart",mf),tt.addEventListener("sessionend",gf),this.render=function(P,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(k),k=tt.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,k,b),m=ee.get(P,M.length),m.init(k),M.push(m),zt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),et.setFromProjectionMatrix(zt),wt=this.localClippingEnabled,ut=ht.init(this.clippingPlanes,wt),f=bt.get(P,S.length),f.init(),S.push(f),tt.enabled===!0&&tt.isPresenting===!0){const at=_.xr.getDepthSensingMesh();at!==null&&Xc(at,k,-1/0,_.sortObjects)}Xc(P,k,0,_.sortObjects),f.finish(),_.sortObjects===!0&&f.sort(lt,pt),te=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,te&&Nt.addToRenderList(f,P),this.info.render.frame++,ut===!0&&ht.beginShadows();const q=m.state.shadowsArray;Tt.render(q,P,k),ut===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=f.opaque,H=f.transmissive;if(m.setupLights(),k.isArrayCamera){const at=k.cameras;if(H.length>0)for(let xt=0,St=at.length;xt<St;xt++){const At=at[xt];vf($,H,P,At)}te&&Nt.render(P);for(let xt=0,St=at.length;xt<St;xt++){const At=at[xt];xf(f,P,At,At.viewport)}}else H.length>0&&vf($,H,P,k),te&&Nt.render(P),xf(f,P,k);b!==null&&T===0&&(D.updateMultisampleRenderTarget(b),D.updateRenderTargetMipmap(b)),P.isScene===!0&&P.onAfterRender(_,P,k),Me.resetDefaultState(),y=-1,v=null,M.pop(),M.length>0?(m=M[M.length-1],ut===!0&&ht.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?f=S[S.length-1]:f=null};function Xc(P,k,q,$){if(P.visible===!1)return;if(P.layers.test(k.layers)){if(P.isGroup)q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(k);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||et.intersectsSprite(P)){$&&Zt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(zt);const xt=nt.update(P),St=P.material;St.visible&&f.push(P,xt,St,q,Zt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||et.intersectsObject(P))){const xt=nt.update(P),St=P.material;if($&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Zt.copy(P.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Zt.copy(xt.boundingSphere.center)),Zt.applyMatrix4(P.matrixWorld).applyMatrix4(zt)),Array.isArray(St)){const At=xt.groups;for(let Bt=0,Gt=At.length;Bt<Gt;Bt++){const Lt=At[Bt],ne=St[Lt.materialIndex];ne&&ne.visible&&f.push(P,xt,ne,q,Zt.z,Lt)}}else St.visible&&f.push(P,xt,St,q,Zt.z,null)}}const at=P.children;for(let xt=0,St=at.length;xt<St;xt++)Xc(at[xt],k,q,$)}function xf(P,k,q,$){const H=P.opaque,at=P.transmissive,xt=P.transparent;m.setupLightsView(q),ut===!0&&ht.setGlobalState(_.clippingPlanes,q),$&&It.viewport(R.copy($)),H.length>0&&ia(H,k,q),at.length>0&&ia(at,k,q),xt.length>0&&ia(xt,k,q),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function vf(P,k,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new li(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?ki:Wi,minFilter:Ps,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const at=m.state.transmissionRenderTarget[$.id],xt=$.viewport||R;at.setSize(xt.z*_.transmissionResolutionScale,xt.w*_.transmissionResolutionScale);const St=_.getRenderTarget();_.setRenderTarget(at),_.getClearColor(z),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),te&&Nt.render(q);const At=_.toneMapping;_.toneMapping=rs;const Bt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),ut===!0&&ht.setGlobalState(_.clippingPlanes,$),ia(P,q,$),D.updateMultisampleRenderTarget(at),D.updateRenderTargetMipmap(at),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Lt=0,ne=k.length;Lt<ne;Lt++){const ue=k[Lt],Fe=ue.object,Ie=ue.geometry,se=ue.material,Ut=ue.group;if(se.side===Dt&&Fe.layers.test($.layers)){const Ye=se.side;se.side=Tn,se.needsUpdate=!0,Mf(Fe,q,$,Ie,se,Ut),se.side=Ye,se.needsUpdate=!0,Gt=!0}}Gt===!0&&(D.updateMultisampleRenderTarget(at),D.updateRenderTargetMipmap(at))}_.setRenderTarget(St),_.setClearColor(z,V),Bt!==void 0&&($.viewport=Bt),_.toneMapping=At}function ia(P,k,q){const $=k.isScene===!0?k.overrideMaterial:null;for(let H=0,at=P.length;H<at;H++){const xt=P[H],St=xt.object,At=xt.geometry,Bt=$===null?xt.material:$,Gt=xt.group;St.layers.test(q.layers)&&Mf(St,k,q,At,Bt,Gt)}}function Mf(P,k,q,$,H,at){P.onBeforeRender(_,k,q,$,H,at),P.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),H.onBeforeRender(_,k,q,$,P,at),H.transparent===!0&&H.side===Dt&&H.forceSinglePass===!1?(H.side=Tn,H.needsUpdate=!0,_.renderBufferDirect(q,k,$,H,P,at),H.side=as,H.needsUpdate=!0,_.renderBufferDirect(q,k,$,H,P,at),H.side=Dt):_.renderBufferDirect(q,k,$,H,P,at),P.onAfterRender(_,k,q,$,H,at)}function sa(P,k,q){k.isScene!==!0&&(k=Re);const $=Pt.get(P),H=m.state.lights,at=m.state.shadowsArray,xt=H.state.version,St=Ct.getParameters(P,H.state,at,k,q),At=Ct.getProgramCacheKey(St);let Bt=$.programs;$.environment=P.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(P.isMeshStandardMaterial?X:C).get(P.envMap||$.environment),$.envMapRotation=$.environment!==null&&P.envMap===null?k.environmentRotation:P.envMapRotation,Bt===void 0&&(P.addEventListener("dispose",Vt),Bt=new Map,$.programs=Bt);let Gt=Bt.get(At);if(Gt!==void 0){if($.currentProgram===Gt&&$.lightsStateVersion===xt)return yf(P,St),Gt}else St.uniforms=Ct.getUniforms(P),P.onBeforeCompile(St,_),Gt=Ct.acquireProgram(St,At),Bt.set(At,Gt),$.uniforms=St.uniforms;const Lt=$.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Lt.clippingPlanes=ht.uniform),yf(P,St),$.needsLights=dm(P),$.lightsStateVersion=xt,$.needsLights&&(Lt.ambientLightColor.value=H.state.ambient,Lt.lightProbe.value=H.state.probe,Lt.directionalLights.value=H.state.directional,Lt.directionalLightShadows.value=H.state.directionalShadow,Lt.spotLights.value=H.state.spot,Lt.spotLightShadows.value=H.state.spotShadow,Lt.rectAreaLights.value=H.state.rectArea,Lt.ltc_1.value=H.state.rectAreaLTC1,Lt.ltc_2.value=H.state.rectAreaLTC2,Lt.pointLights.value=H.state.point,Lt.pointLightShadows.value=H.state.pointShadow,Lt.hemisphereLights.value=H.state.hemi,Lt.directionalShadowMap.value=H.state.directionalShadowMap,Lt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Lt.spotShadowMap.value=H.state.spotShadowMap,Lt.spotLightMatrix.value=H.state.spotLightMatrix,Lt.spotLightMap.value=H.state.spotLightMap,Lt.pointShadowMap.value=H.state.pointShadowMap,Lt.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Gt,$.uniformsList=null,Gt}function _f(P){if(P.uniformsList===null){const k=P.currentProgram.getUniforms();P.uniformsList=nc.seqWithValue(k.seq,P.uniforms)}return P.uniformsList}function yf(P,k){const q=Pt.get(P);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function hm(P,k,q,$,H){k.isScene!==!0&&(k=Re),D.resetTextureUnits();const at=k.fog,xt=$.isMeshStandardMaterial?k.environment:null,St=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Zo,At=($.isMeshStandardMaterial?X:C).get($.envMap||xt),Bt=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Gt=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Lt=!!q.morphAttributes.position,ne=!!q.morphAttributes.normal,ue=!!q.morphAttributes.color;let Fe=rs;$.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Fe=_.toneMapping);const Ie=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,se=Ie!==void 0?Ie.length:0,Ut=Pt.get($),Ye=m.state.lights;if(ut===!0&&(wt===!0||P!==v)){const rn=P===v&&$.id===y;ht.setState($,P,rn)}let he=!1;$.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Ye.state.version||Ut.outputColorSpace!==St||H.isBatchedMesh&&Ut.batching===!1||!H.isBatchedMesh&&Ut.batching===!0||H.isBatchedMesh&&Ut.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ut.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ut.instancing===!1||!H.isInstancedMesh&&Ut.instancing===!0||H.isSkinnedMesh&&Ut.skinning===!1||!H.isSkinnedMesh&&Ut.skinning===!0||H.isInstancedMesh&&Ut.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ut.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ut.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ut.instancingMorph===!1&&H.morphTexture!==null||Ut.envMap!==At||$.fog===!0&&Ut.fog!==at||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ht.numPlanes||Ut.numIntersection!==ht.numIntersection)||Ut.vertexAlphas!==Bt||Ut.vertexTangents!==Gt||Ut.morphTargets!==Lt||Ut.morphNormals!==ne||Ut.morphColors!==ue||Ut.toneMapping!==Fe||Ut.morphTargetsCount!==se)&&(he=!0):(he=!0,Ut.__version=$.version);let ii=Ut.currentProgram;he===!0&&(ii=sa($,k,H));let Xs=!1,In=!1,sr=!1;const Ee=ii.getUniforms(),Vn=Ut.uniforms;if(It.useProgram(ii.program)&&(Xs=!0,In=!0,sr=!0),$.id!==y&&(y=$.id,In=!0),Xs||v!==P){It.buffers.depth.getReversed()?(dt.copy(P.projectionMatrix),og(dt),rg(dt),Ee.setValue(O,"projectionMatrix",dt)):Ee.setValue(O,"projectionMatrix",P.projectionMatrix),Ee.setValue(O,"viewMatrix",P.matrixWorldInverse);const En=Ee.map.cameraPosition;En!==void 0&&En.setValue(O,kt.setFromMatrixPosition(P.matrixWorld)),Jt.logarithmicDepthBuffer&&Ee.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ee.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),v!==P&&(v=P,In=!0,sr=!0)}if(H.isSkinnedMesh){Ee.setOptional(O,H,"bindMatrix"),Ee.setOptional(O,H,"bindMatrixInverse");const rn=H.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Ee.setValue(O,"boneTexture",rn.boneTexture,D))}H.isBatchedMesh&&(Ee.setOptional(O,H,"batchingTexture"),Ee.setValue(O,"batchingTexture",H._matricesTexture,D),Ee.setOptional(O,H,"batchingIdTexture"),Ee.setValue(O,"batchingIdTexture",H._indirectTexture,D),Ee.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&Ee.setValue(O,"batchingColorTexture",H._colorsTexture,D));const Wn=q.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&Ot.update(H,q,ii),(In||Ut.receiveShadow!==H.receiveShadow)&&(Ut.receiveShadow=H.receiveShadow,Ee.setValue(O,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Vn.envMap.value=At,Vn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(Vn.envMapIntensity.value=k.environmentIntensity),In&&(Ee.setValue(O,"toneMappingExposure",_.toneMappingExposure),Ut.needsLights&&fm(Vn,sr),at&&$.fog===!0&&vt.refreshFogUniforms(Vn,at),vt.refreshMaterialUniforms(Vn,$,W,j,m.state.transmissionRenderTarget[P.id]),nc.upload(O,_f(Ut),Vn,D)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(nc.upload(O,_f(Ut),Vn,D),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ee.setValue(O,"center",H.center),Ee.setValue(O,"modelViewMatrix",H.modelViewMatrix),Ee.setValue(O,"normalMatrix",H.normalMatrix),Ee.setValue(O,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const rn=$.uniformsGroups;for(let En=0,qc=rn.length;En<qc;En++){const us=rn[En];B.update(us,ii),B.bind(us,ii)}}return ii}function fm(P,k){P.ambientLightColor.needsUpdate=k,P.lightProbe.needsUpdate=k,P.directionalLights.needsUpdate=k,P.directionalLightShadows.needsUpdate=k,P.pointLights.needsUpdate=k,P.pointLightShadows.needsUpdate=k,P.spotLights.needsUpdate=k,P.spotLightShadows.needsUpdate=k,P.rectAreaLights.needsUpdate=k,P.hemisphereLights.needsUpdate=k}function dm(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(P,k,q){Pt.get(P.texture).__webglTexture=k,Pt.get(P.depthTexture).__webglTexture=q;const $=Pt.get(P);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||Kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,k){const q=Pt.get(P);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};const pm=O.createFramebuffer();this.setRenderTarget=function(P,k=0,q=0){b=P,E=k,T=q;let $=!0,H=null,at=!1,xt=!1;if(P){const At=Pt.get(P);if(At.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(O.FRAMEBUFFER,null),$=!1;else if(At.__webglFramebuffer===void 0)D.setupRenderTarget(P);else if(At.__hasExternalTextures)D.rebindTextures(P,Pt.get(P.texture).__webglTexture,Pt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Lt=P.depthTexture;if(At.__boundDepthTexture!==Lt){if(Lt!==null&&Pt.has(Lt)&&(P.width!==Lt.image.width||P.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(P)}}const Bt=P.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(xt=!0);const Gt=Pt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Gt[k])?H=Gt[k][q]:H=Gt[k],at=!0):P.samples>0&&D.useMultisampledRTT(P)===!1?H=Pt.get(P).__webglMultisampledFramebuffer:Array.isArray(Gt)?H=Gt[q]:H=Gt,R.copy(P.viewport),U.copy(P.scissor),L=P.scissorTest}else R.copy(Rt).multiplyScalar(W).floor(),U.copy(Ft).multiplyScalar(W).floor(),L=jt;if(q!==0&&(H=pm),It.bindFramebuffer(O.FRAMEBUFFER,H)&&$&&It.drawBuffers(P,H),It.viewport(R),It.scissor(U),It.setScissorTest(L),at){const At=Pt.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,At.__webglTexture,q)}else if(xt){const At=Pt.get(P.texture),Bt=k;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,At.__webglTexture,q,Bt)}else if(P!==null&&q!==0){const At=Pt.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,At.__webglTexture,q)}y=-1},this.readRenderTargetPixels=function(P,k,q,$,H,at,xt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Pt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St){It.bindFramebuffer(O.FRAMEBUFFER,St);try{const At=P.texture,Bt=At.format,Gt=At.type;if(!Jt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=P.width-$&&q>=0&&q<=P.height-H&&O.readPixels(k,q,$,H,Xt.convert(Bt),Xt.convert(Gt),at)}finally{const At=b!==null?Pt.get(b).__webglFramebuffer:null;It.bindFramebuffer(O.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(P,k,q,$,H,at,xt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Pt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St){const At=P.texture,Bt=At.format,Gt=At.type;if(!Jt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=P.width-$&&q>=0&&q<=P.height-H){It.bindFramebuffer(O.FRAMEBUFFER,St);const Lt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Lt),O.bufferData(O.PIXEL_PACK_BUFFER,at.byteLength,O.STREAM_READ),O.readPixels(k,q,$,H,Xt.convert(Bt),Xt.convert(Gt),0);const ne=b!==null?Pt.get(b).__webglFramebuffer:null;It.bindFramebuffer(O.FRAMEBUFFER,ne);const ue=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await sg(O,ue,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Lt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,at),O.deleteBuffer(Lt),O.deleteSync(ue),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,k=null,q=0){P.isTexture!==!0&&(vo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,P=arguments[1]);const $=Math.pow(2,-q),H=Math.floor(P.image.width*$),at=Math.floor(P.image.height*$),xt=k!==null?k.x:0,St=k!==null?k.y:0;D.setTexture2D(P,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,xt,St,H,at),It.unbindTexture()};const mm=O.createFramebuffer(),gm=O.createFramebuffer();this.copyTextureToTexture=function(P,k,q=null,$=null,H=0,at=null){P.isTexture!==!0&&(vo("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,P=arguments[1],k=arguments[2],at=arguments[3]||0,q=null),at===null&&(H!==0?(vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=H,H=0):at=0);let xt,St,At,Bt,Gt,Lt,ne,ue,Fe;const Ie=P.isCompressedTexture?P.mipmaps[at]:P.image;if(q!==null)xt=q.max.x-q.min.x,St=q.max.y-q.min.y,At=q.isBox3?q.max.z-q.min.z:1,Bt=q.min.x,Gt=q.min.y,Lt=q.isBox3?q.min.z:0;else{const Wn=Math.pow(2,-H);xt=Math.floor(Ie.width*Wn),St=Math.floor(Ie.height*Wn),P.isDataArrayTexture?At=Ie.depth:P.isData3DTexture?At=Math.floor(Ie.depth*Wn):At=1,Bt=0,Gt=0,Lt=0}$!==null?(ne=$.x,ue=$.y,Fe=$.z):(ne=0,ue=0,Fe=0);const se=Xt.convert(k.format),Ut=Xt.convert(k.type);let Ye;k.isData3DTexture?(D.setTexture3D(k,0),Ye=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(D.setTexture2DArray(k,0),Ye=O.TEXTURE_2D_ARRAY):(D.setTexture2D(k,0),Ye=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const he=O.getParameter(O.UNPACK_ROW_LENGTH),ii=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Xs=O.getParameter(O.UNPACK_SKIP_PIXELS),In=O.getParameter(O.UNPACK_SKIP_ROWS),sr=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ie.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ie.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Bt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Gt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Lt);const Ee=P.isDataArrayTexture||P.isData3DTexture,Vn=k.isDataArrayTexture||k.isData3DTexture;if(P.isDepthTexture){const Wn=Pt.get(P),rn=Pt.get(k),En=Pt.get(Wn.__renderTarget),qc=Pt.get(rn.__renderTarget);It.bindFramebuffer(O.READ_FRAMEBUFFER,En.__webglFramebuffer),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,qc.__webglFramebuffer);for(let us=0;us<At;us++)Ee&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.get(P).__webglTexture,H,Lt+us),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.get(k).__webglTexture,at,Fe+us)),O.blitFramebuffer(Bt,Gt,xt,St,ne,ue,xt,St,O.DEPTH_BUFFER_BIT,O.NEAREST);It.bindFramebuffer(O.READ_FRAMEBUFFER,null),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||P.isRenderTargetTexture||Pt.has(P)){const Wn=Pt.get(P),rn=Pt.get(k);It.bindFramebuffer(O.READ_FRAMEBUFFER,mm),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,gm);for(let En=0;En<At;En++)Ee?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Wn.__webglTexture,H,Lt+En):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Wn.__webglTexture,H),Vn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,rn.__webglTexture,at,Fe+En):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,rn.__webglTexture,at),H!==0?O.blitFramebuffer(Bt,Gt,xt,St,ne,ue,xt,St,O.COLOR_BUFFER_BIT,O.NEAREST):Vn?O.copyTexSubImage3D(Ye,at,ne,ue,Fe+En,Bt,Gt,xt,St):O.copyTexSubImage2D(Ye,at,ne,ue,Bt,Gt,xt,St);It.bindFramebuffer(O.READ_FRAMEBUFFER,null),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Vn?P.isDataTexture||P.isData3DTexture?O.texSubImage3D(Ye,at,ne,ue,Fe,xt,St,At,se,Ut,Ie.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(Ye,at,ne,ue,Fe,xt,St,At,se,Ie.data):O.texSubImage3D(Ye,at,ne,ue,Fe,xt,St,At,se,Ut,Ie):P.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,at,ne,ue,xt,St,se,Ut,Ie.data):P.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,at,ne,ue,Ie.width,Ie.height,se,Ie.data):O.texSubImage2D(O.TEXTURE_2D,at,ne,ue,xt,St,se,Ut,Ie);O.pixelStorei(O.UNPACK_ROW_LENGTH,he),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ii),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Xs),O.pixelStorei(O.UNPACK_SKIP_ROWS,In),O.pixelStorei(O.UNPACK_SKIP_IMAGES,sr),at===0&&k.generateMipmaps&&O.generateMipmap(Ye),It.unbindTexture()},this.copyTextureToTexture3D=function(P,k,q=null,$=null,H=0){return P.isTexture!==!0&&(vo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,$=arguments[1]||null,P=arguments[2],k=arguments[3],H=arguments[4]||0),vo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,k,q,$,H)},this.initRenderTarget=function(P){Pt.get(P).__webglFramebuffer===void 0&&D.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?D.setTextureCube(P,0):P.isData3DTexture?D.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?D.setTexture2DArray(P,0):D.setTexture2D(P,0),It.unbindTexture()},this.resetState=function(){E=0,T=0,b=null,It.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}const Qy=15,tw=6,ew=1.8,wc=8,Dd=.85,Ud=.98,Sc=.003,ae=90,Hc=1.7,Nd=500,nw=60,iw=18,sw=10,ow=14,rw=6,aw=10,cw=350,lw=50,uw=45,hw=40,fw=60,n0=6,dw=25,pw=8,mw=25,gw=50,xw=10,vw=10,Mw=10,_w=8,Ns=280,$u=2.5,yw=6,zd=1.5,Mo=5,Fd=2.5,ho=12,be=30,ww=5,Sw=8,bw=2.2,F={fog:396308,ground:1720360,leaf:1722400,leafGlow:4521898,mushCap:8926190,mushGlow:13400063,mushStem:2756928,crystal:3407837,crystalCore:8978414,firefly:15662950,fireflyB:6750173,spore:12320665,ambient:2241365,moon:12307694,jellyBell:7833855,jellyGlow:11193599,jellyTent:6715340,puffBody:16768460,puffGlow:16755336,puffEye:2236962,puffCheek:16746649,deerBody:11202303,deerGlow:8969727,deerAntler:13434862,deerEye:1127236,mothWing:11206553,mothGlow:13434794,mothBody:5596723,mothSpot:16777215,grassTip:3385941,grassPurple:[1706530,2363962,4857960,11158766,13400063,16746717,2757952,6697898,11158783],grassBlue:[660514,858677,2114917,4500206,6741503,8974079,1387077,3368618,4500223],grassTeal:[662042,1059362,2121808,4517563,6750173,11206536,1720376,3385992,4521915],fern:1725744,fernGlow:3394662,flower:16742348,flowerGlow:16751069,flowerStem:1721376,reed:2774325,reedTip:4504422,orbGold:16763955,orbGlow:16772778,orbInner:16775389,laserPink:16737962,laserGlow:16746700,obeliskBlack:657938,obeliskPink:16729258,moatBlue:3377356,rainbow:[16724787,16746547,16772659,3407718,3377407,8926207],wispCore:11202303,wispGlow:14544639,wispTrail:8965375,dandStem:4482611,dandHead:16777198,dandSeed:16775389,dandSeedGlow:16777215,fairyMush:13404415,fairyGlow:14527231,fairyRing:11167470,bubbleIris:11197951,bubbleShine:16777215,bubblePop:13434862,starMote:16772829,pondWater:2254506,pondGlow:3377356,lilyPad:2263108,lilyFlower:16746700,lilyGlow:16755421,echoBloom:11206604,rockBase:2763314,rockMoss:1721378,rockLight:3816005,skyDeep:198160,thornOrb:16755268,thornOrbGlow:16764006,thornPetal:6689075,thornSpike:2759184,thornStem:1717024,helixStem:1714240,helixPod:6697983,helixPodGlow:8934911,helixRing:4465322,helixNode:5588172,snapBody:2271846,snapBodyGlow:4521864,snapTip:6750122,snapTipGlow:8978380,snapFrond:1730116},on=new Jy({antialias:!0,powerPreference:"default"});on.setSize(window.innerWidth,window.innerHeight);on.setPixelRatio(Math.min(window.devicePixelRatio,1.5));on.shadowMap.enabled=!0;on.shadowMap.type=hp;on.toneMapping=dp;on.toneMappingExposure=2.8;on.outputColorSpace=bn;document.body.appendChild(on.domElement);const gn=new Nn(65,window.innerWidth/window.innerHeight,.1,300),i0=new jp,ct=new Rg;ct.background=new ot(F.skyDeep);ct.fog=new qh(F.fog,.01);window.addEventListener("resize",()=>{gn.aspect=window.innerWidth/window.innerHeight,gn.updateProjectionMatrix(),on.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("visibilitychange",()=>{document.hidden||i0.getDelta()});const s0={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ta{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Tw=new nf(-1,1,1,-1,0,1);class Ew extends we{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}}const Aw=new Ew;class o0{constructor(t){this._mesh=new I(Aw,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Tw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Rw extends ta{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Rn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gc.clone(t.uniforms),this.material=new Rn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new o0(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Od extends ta{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),o.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(i.EQUAL,1,4294967295),o.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),o.buffers.stencil.setLocked(!0)}}class Cw extends ta{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Pw{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ft);this._width=n.width,this._height=n.height,e=new li(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ki}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rw(s0),this.copyPass.material.blending=Bi,this.clock=new jp}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,o=this.passes.length;i<o;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Od!==void 0&&(r instanceof Od?n=!0:r instanceof Cw&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Iw extends ta{constructor(t,e,n=null,i=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ot}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=i}}const Lw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ko extends ta{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new ft(t.x,t.y):new ft(256,256),this.clearColor=new ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new li(o,r,{type:ki}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new li(o,r,{type:ki});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new li(o,r,{type:ki});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),o=Math.round(o/2),r=Math.round(r/2)}const a=Lw;this.highPassUniforms=gc.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ft(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=s0;this.copyUniforms=gc.clone(u.uniforms),this.blendMaterial=new Rn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ce,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ot,this.oldClearAlpha=1,this.basic=new Y,this.fsQuad=new o0(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,i),this.renderTargetsVertical[o].setSize(n,i),this.separableBlurMaterials[o].uniforms.invSize.value=new ft(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Ko.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Ko.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Rn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ft(.5,.5)},direction:{value:new ft(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ko.BlurDirectionX=new ft(1,0);Ko.BlurDirectionY=new ft(0,1);let zs=null,of=!0;try{const s=new Iw(ct,gn),t=new Ko(new ft(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2)),.6,.4,.85);zs=new Pw(on),zs.addPass(s),zs.addPass(t)}catch(s){console.warn("Bloom unavailable, falling back to direct render:",s.message),of=!1}window.addEventListener("resize",()=>{of&&zs&&zs.setSize(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2))});function Bd(){of&&zs?zs.render():on.render(ct,gn)}const rf=new fx(F.ambient,F.ground,.65);ct.add(rf);const ei=new kc(F.moon,.85);ei.position.set(30,60,-20);ei.castShadow=!0;ei.shadow.camera.left=-90;ei.shadow.camera.right=90;ei.shadow.camera.top=90;ei.shadow.camera.bottom=-90;ei.shadow.camera.near=1;ei.shadow.camera.far=250;ei.shadow.mapSize.set(1024,1024);ei.shadow.bias=-.001;ct.add(ei);const af=new kc(2241365,.3);af.position.set(-40,45,25);ct.add(af);const r0=new kc(3359829,.4);r0.position.set(-25,15,30);ct.add(r0);const a0=new er(3368516,.7,100);a0.position.set(0,.5,0);ct.add(a0);const c0=new kc(4478327,.4);c0.position.set(-10,25,40);ct.add(c0);const cf=new er(6719624,.6,20);ct.add(cf);const ys=[];function Dw(){for(let s=0;s<ww;s++){const t=new er(F.crystal,0,16);ct.add(t),ys.push(t)}}const Sr=new er(F.orbGold,0,15);ct.add(Sr);const ze={};let Vr=0,Fs=0,Vc=!1,l0=!1,lf=0,uf=0,hf=!1,Wc=!1,ir=!1,bc=null,Gs=null,ju=0,Ku=0,Ju=null;function Uw(s){Ju=s}function Nw(s){l0=s}function zw(s){Wc=s}function ea(){!l0&&Ju&&Ju()}window.addEventListener("keydown",s=>{ze[s.code]=!0,"Space ShiftLeft ShiftRight KeyW KeyA KeyS KeyD".split(" ").indexOf(s.code)>=0&&s.preventDefault(),ea()});window.addEventListener("keyup",s=>{ze[s.code]=!1});window.addEventListener("blur",()=>{for(const s in ze)ze[s]=!1;Vc=!1});on.domElement.addEventListener("mousedown",()=>{Vc=!0,ea()});window.addEventListener("mouseup",()=>{Vc=!1});window.addEventListener("mousemove",s=>{Vc&&(Vr-=s.movementX*Sc,Fs-=s.movementY*Sc,Fs=Math.max(-1,Math.min(1,Fs)))});const Fw="ontouchstart"in window||navigator.maxTouchPoints>0,na=document.getElementById("joy-zone"),Tc=document.getElementById("joy-knob"),ff=document.getElementById("btn-jump");Fw&&(na.style.display="block",ff.style.display="block",document.getElementById("controls").textContent="Stick: Move · Drag right: Look · JUMP");function u0(s,t){const e=na.getBoundingClientRect();let n=s-(e.left+e.width/2),i=t-(e.top+e.height/2);const o=Math.sqrt(n*n+i*i),r=52;o>r&&(n=n/o*r,i=i/o*r),lf=n/r,uf=i/r,Tc.style.left=40+n+"px",Tc.style.top=40+i+"px"}na.addEventListener("touchstart",s=>{s.preventDefault(),s.stopPropagation(),ea();const t=s.changedTouches[0];bc=t.identifier,hf=!0,u0(t.clientX,t.clientY)},{passive:!1});na.addEventListener("touchmove",s=>{s.preventDefault(),s.stopPropagation();for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===bc&&u0(s.changedTouches[t].clientX,s.changedTouches[t].clientY)},{passive:!1});na.addEventListener("touchend",s=>{s.preventDefault(),s.stopPropagation();for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===bc&&(bc=null,hf=!1,lf=0,uf=0,Tc.style.left="40px",Tc.style.top="40px")},{passive:!1});ff.addEventListener("touchstart",s=>{s.preventDefault(),s.stopPropagation(),ea(),Wc=!0},{passive:!1});ff.addEventListener("touchend",s=>{s.preventDefault(),s.stopPropagation(),Wc=!1},{passive:!1});on.domElement.addEventListener("touchstart",s=>{s.preventDefault(),ea();for(let t=0;t<s.changedTouches.length;t++){const e=s.changedTouches[t];e.clientX>window.innerWidth*.3&&Gs===null&&(Gs=e.identifier,ju=e.clientX,Ku=e.clientY)}},{passive:!1});on.domElement.addEventListener("touchmove",s=>{s.preventDefault();for(let t=0;t<s.changedTouches.length;t++){const e=s.changedTouches[t];e.identifier===Gs&&(Vr-=(e.clientX-ju)*Sc,Fs-=(e.clientY-Ku)*Sc,Fs=Math.max(-1,Math.min(1,Fs)),ju=e.clientX,Ku=e.clientY)}},{passive:!1});on.domElement.addEventListener("touchend",s=>{for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===Gs&&(Gs=null)},{passive:!1});on.domElement.addEventListener("touchcancel",s=>{for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===Gs&&(Gs=null)},{passive:!1});function Ow(){let s=0,t=0;ze.KeyW&&(t-=1),ze.KeyS&&(t+=1),ze.KeyA&&(s-=1),ze.KeyD&&(s+=1),hf&&(s+=lf,t+=uf);const e=Math.sqrt(s*s+t*t);e>1&&(s/=e,t/=e);const n=tw*(ze.ShiftLeft||ze.ShiftRight||ir?ew:1),i=Math.sin(Vr),o=Math.cos(Vr);return{x:(s*o+t*i)*n,z:(-s*i+t*o)*n}}const Pn={mushCap:new J(.5,8,5),mushStem:new _t(.06,.1,.6,5),mushDot:new J(.06,4,3),crystal:new _t(0,.35,1.8,6),crystalSm:new _t(0,.18,.9,5),fly:new J(.06,4,3),spore:new J(.04,3,3),dandSeed:new J(.025,3,3),bubble:new J(.15,8,6),starMote:new J(.03,3,3),dustMote:new J(.035,3,3)};let Lr=42;function w(){return Lr=Lr*16807%2147483647,(Lr&2147483647)/2147483647}function h0(){return Lr}function Qu(s){Lr=s}function Fa(s,t){let e=s*374761393+t*668265263+1274126177|0;return e=(e^e>>13)*1274126177|0,(e&2147483647)/2147483647}function Dr(s){return s*s*(3-2*s)}function f0(s,t){const e=Math.floor(s),n=Math.floor(t),i=Dr(s-e),o=Dr(t-n),r=Fa(e,n),a=Fa(e+1,n),c=Fa(e,n+1),l=Fa(e+1,n+1);return r+(a-r)*i+(c-r)*o+(r-a-c+l)*i*o}function kd(s,t,e){let n=0,i=.5,o=1;for(let r=0;r<e;r++)n+=f0(s*o,t*o)*i,i*=.5,o*=2;return n}const th=[];function eh(s,t,e){th.push({x:s,z:t,r:e})}function Yt(s,t){const e=Math.sqrt(s*s+t*t),n=1-Dr(Math.max(0,(e-ae*.7)/(ae*.3))),i=Dr(Math.min(1,e/8)),o=.035,r=kd(s*o,t*o,4),a=kd(s*o*2.7+50,t*o*2.7+50,3),c=f0(s*.15,t*.15);let l=r*2.5+a*.8+c*.15;l*=n*i;for(let u=0;u<th.length;u++){const h=th[u],d=s-h.x,p=t-h.z,g=Math.sqrt(d*d+p*p);if(g<h.r*2){const x=Dr(Math.max(0,(g-h.r*.5)/(h.r*1.5)));l*=x}}return l}function Bw(){const t=document.createElement("canvas");t.width=2048,t.height=2048;const e=t.getContext("2d"),n=Math.random;e.fillStyle="#2a5038",e.fillRect(0,0,2048,2048);const i=[{col:"rgba(40,80,50,0.35)",n:15,r:120},{col:"rgba(60,50,25,0.25)",n:12,r:100},{col:"rgba(30,65,55,0.25)",n:10,r:110},{col:"rgba(55,70,35,0.2)",n:8,r:90},{col:"rgba(35,40,25,0.25)",n:8,r:80},{col:"rgba(80,55,25,0.22)",n:8,r:95},{col:"rgba(70,35,20,0.20)",n:6,r:85},{col:"rgba(85,70,35,0.18)",n:6,r:80}];for(const u of i)for(let h=0;h<u.n;h++){const d=n()*2048,p=n()*2048,g=u.r*(.5+n()*.8),x=e.createRadialGradient(d,p,0,d,p,g);x.addColorStop(0,u.col),x.addColorStop(.6,u.col.replace(/[\d.]+\)$/,parseFloat(u.col.match(/[\d.]+\)$/)[0])*.4+")")),x.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=x;for(let f=-1;f<=1;f++)for(let m=-1;m<=1;m++)e.beginPath(),e.arc(d+f*2048,p+m*2048,g,0,6.28),e.fill()}const o=[{n:80,r:25,colors:["rgba(20,45,25,0.2)","rgba(35,55,28,0.18)","rgba(28,22,12,0.2)","rgba(15,38,30,0.15)","rgba(55,35,15,0.2)","rgba(48,28,12,0.18)"]},{n:200,r:10,colors:["rgba(30,55,30,0.14)","rgba(45,35,18,0.12)","rgba(22,48,35,0.12)","rgba(38,28,14,0.1)","rgba(52,38,18,0.12)","rgba(42,25,10,0.1)"]},{n:500,r:4,colors:["rgba(25,50,28,0.1)","rgba(40,30,15,0.08)","rgba(18,42,32,0.08)","rgba(32,25,10,0.06)","rgba(45,32,12,0.08)","rgba(38,22,8,0.06)"]}];for(const u of o)for(let h=0;h<u.n;h++){e.fillStyle=u.colors[Math.floor(n()*u.colors.length)];const d=n()*2048,p=n()*2048;e.beginPath(),e.arc(d,p,u.r+n()*u.r*.6,0,6.28),e.fill()}const r=["rgba(60,200,100,0.06)","rgba(50,180,120,0.05)","rgba(80,160,200,0.04)","rgba(100,220,150,0.05)"];for(let u=0;u<25;u++){let h=n()*2048,d=n()*2048;const p=r[Math.floor(n()*r.length)];e.strokeStyle=p,e.lineWidth=1+n()*2,e.beginPath(),e.moveTo(h,d);let g=n()*6.28;const x=12+Math.floor(n()*16);for(let f=0;f<x;f++)g+=Math.sin(f*.6)*.5+(n()-.5)*.4,h+=Math.cos(g)*(6+n()*10),d+=Math.sin(g)*(6+n()*10),e.lineTo(h,d);if(e.stroke(),n()<.6){const f=e.createRadialGradient(h,d,0,h,d,6+n()*8);f.addColorStop(0,p.replace("0.0","0.1")),f.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=f,e.beginPath(),e.arc(h,d,6+n()*8,0,6.28),e.fill()}}e.lineWidth=1.2;for(let u=0;u<30;u++){e.strokeStyle=`rgba(20,12,5,${.15+n()*.12})`;let h=n()*2048,d=n()*2048,p=n()*6.28;e.beginPath(),e.moveTo(h,d);for(let g=0;g<10;g++)p+=Math.sin(g*.7)*.5+(n()-.5)*.35,h+=Math.cos(p)*(8+n()*14),d+=Math.sin(p)*(8+n()*14),e.lineTo(h,d);e.stroke()}const a=["rgba(55,32,12,0.3)","rgba(70,42,18,0.25)","rgba(40,55,22,0.22)","rgba(22,50,28,0.2)","rgba(60,45,20,0.25)","rgba(30,60,35,0.18)","rgba(50,25,8,0.22)","rgba(65,55,25,0.18)","rgba(75,50,20,0.28)","rgba(85,60,30,0.22)","rgba(45,25,10,0.25)","rgba(90,75,45,0.18)"];for(let u=0;u<3500;u++){e.fillStyle=a[Math.floor(n()*a.length)];const h=n()*2048,d=n()*2048,p=.8+n()*2.5;e.beginPath(),e.arc(h,d,p,0,6.28),e.fill()}for(let u=0;u<40;u++){const h=n()*2048,d=n()*2048,p=15+n()*35,g=e.createRadialGradient(h,d,0,h,d,p),x=n();x<.3?(g.addColorStop(0,"rgba(45,90,50,0.18)"),g.addColorStop(1,"rgba(25,55,30,0)")):x<.5?(g.addColorStop(0,"rgba(35,75,60,0.16)"),g.addColorStop(1,"rgba(20,50,38,0)")):x<.7?(g.addColorStop(0,"rgba(55,75,35,0.14)"),g.addColorStop(1,"rgba(30,45,20,0)")):x<.85?(g.addColorStop(0,"rgba(75,55,25,0.14)"),g.addColorStop(1,"rgba(45,30,12,0)")):(g.addColorStop(0,"rgba(65,35,20,0.12)"),g.addColorStop(1,"rgba(35,18,10,0)")),e.fillStyle=g,e.beginPath(),e.arc(h,d,p,0,6.28),e.fill()}for(let u=0;u<400;u++){const h=n()*2048,d=n()*2048,p=1.5+n()*3.5,g=Math.floor(28+n()*42);e.fillStyle=`rgba(${g},${g-4},${g-10},0.3)`,e.beginPath(),e.arc(h,d,p,0,6.28),e.fill()}e.lineWidth=.7;for(let u=0;u<80;u++){const h=n()*2048,d=n()*2048,p=4+n()*18,g=n()*6.28;e.strokeStyle=`rgba(22,12,5,${.15+n()*.1})`,e.beginPath(),e.moveTo(h,d),e.lineTo(h+Math.cos(g)*p,d+Math.sin(g)*p),e.stroke()}const c=["rgba(80,220,120,0.08)","rgba(60,200,160,0.07)","rgba(100,180,220,0.06)","rgba(120,100,200,0.05)","rgba(200,150,80,0.04)","rgba(60,180,180,0.06)"];for(let u=0;u<300;u++){const h=n()*2048,d=n()*2048,p=c[Math.floor(n()*c.length)];if(e.fillStyle=p,e.beginPath(),e.arc(h,d,1+n()*2,0,6.28),e.fill(),n()<.3){const g=e.createRadialGradient(h,d,0,h,d,4+n()*5);g.addColorStop(0,p),g.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=g,e.beginPath(),e.arc(h,d,4+n()*5,0,6.28),e.fill()}}for(let u=0;u<150;u++){const h=n()*2048,d=n()*2048;e.fillStyle=`rgba(120,180,130,${.04+n()*.04})`,e.beginPath(),e.arc(h,d,.5+n()*1.2,0,6.28),e.fill()}const l=new Kr(t);return l.wrapS=l.wrapT=Xo,l.repeat.set(8,8),l.colorSpace=bn,l}function Oa(s,t){let e=s*127961+t*372143+918273|0;return e=(e^e>>13)*517261|0,(e&2147483647)/2147483647}function nh(s){return s*s*(3-2*s)}function d0(s,t){const e=Math.floor(s),n=Math.floor(t),i=nh(s-e),o=nh(t-n),r=Oa(e,n),a=Oa(e+1,n),c=Oa(e,n+1),l=Oa(e+1,n+1);return r+(a-r)*i+(c-r)*o+(r-a-c+l)*i*o}function Pl(s,t,e){let n=0,i=.5,o=1;for(let r=0;r<e;r++)n+=d0(s*o,t*o)*i,i*=.5,o*=2;return n}function kw(){const s=Bw(),t=ae*3,e=200,n=new ve(t,t,e,e),i=n.attributes.position,o=[[.55,.95,.6],[.45,.85,.95],[.8,.5,1],[.85,.65,.4],[.5,1.1,.65],[.4,.7,.9],[.9,.55,.35],[.8,.75,.45]],r=i.count,a=new Float32Array(r*3);for(let l=0;l<r;l++){const u=i.getX(l),h=i.getY(l);Math.sqrt(u*u+h*h)<ae*1.4?i.setZ(l,Yt(u,-h)):i.setZ(l,0);const p=u,g=-h,x=Pl(p*.025+100,g*.025+200,3),f=Pl(p*.06+300,g*.06+400,2),m=d0(p*.15+500,g*.15+600),S=Pl(p*.04-150,g*.04-250,3),M=Math.floor(x*o.length*.999),_=Math.floor(S*o.length*.999),A=o[M],E=o[_],T=nh(f),b=.85+m*.3,y=(A[0]*(1-T)+E[0]*T)*b,v=(A[1]*(1-T)+E[1]*T)*b,R=(A[2]*(1-T)+E[2]*T)*b,L=1+Yt(p,g)*.06;a[l*3]=y*L,a[l*3+1]=v*L,a[l*3+2]=R*L}n.setAttribute("color",new Ue(a,3)),n.computeVertexNormals();const c=new I(n,new K({map:s,vertexColors:!0,roughness:.75,metalness:0,emissive:1718304,emissiveIntensity:.25}));return c.rotation.x=-Math.PI/2,c.receiveShadow=!0,ct.add(c),c}const Wr=new re;let Ec=null;const ws=120;let Gd=null,ic=null,ih=null,sh=null,Do=null;const Uo=[],Gw=3;let Il=0;function is(s,t){const e=s>>16&255,n=s>>8&255,i=s&255;return`rgba(${e},${n},${i},${t})`}function ss(s,t,e,n,i,o,r){s.save(),s.translate(t,e),Math.abs(i/n-1)>.01&&s.scale(1,i/n);const a=s.createRadialGradient(0,0,0,0,0,n);a.addColorStop(0,is(o,r)),a.addColorStop(.25,is(o,r*.55)),a.addColorStop(.55,is(o,r*.15)),a.addColorStop(.85,is(o,r*.03)),a.addColorStop(1,is(o,0)),s.fillStyle=a,s.beginPath(),s.arc(0,0,n,0,6.2832),s.fill(),s.restore()}function Ll(s,t,e,n,i,o,r,a){ss(s,t,e,n,i,o,r),t-n<0&&ss(s,t+a,e,n,i,o,r),t+n>a&&ss(s,t-a,e,n,i,o,r)}function Hw(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),i=Math.random,o=n.createLinearGradient(0,0,0,1024);o.addColorStop(0,"#030610"),o.addColorStop(.2,"#050a18"),o.addColorStop(.4,"#0a1222"),o.addColorStop(.55,"#0c1828"),o.addColorStop(.75,"#081018"),o.addColorStop(1,"#040810"),n.fillStyle=o,n.fillRect(0,0,2048,1024);const r=[{x:.12,y:.22,rx:.18,ry:.14,col:1717094,a:.14},{x:.42,y:.28,rx:.22,ry:.1,col:2758741,a:.12},{x:.72,y:.18,rx:.16,ry:.12,col:1721446,a:.13},{x:.88,y:.32,rx:.2,ry:.09,col:3348548,a:.1},{x:.28,y:.12,rx:.14,ry:.18,col:2245768,a:.1},{x:.58,y:.38,rx:.18,ry:.07,col:4465220,a:.08},{x:.05,y:.4,rx:.15,ry:.1,col:1586005,a:.09},{x:.52,y:.15,rx:.12,ry:.16,col:2765670,a:.07}];for(const h of r){Ll(n,h.x*2048,h.y*1024,h.rx*2048,h.ry*1024,h.col,h.a,2048);for(let d=0;d<4;d++){const p=(h.x+(i()-.5)*h.rx)*2048,g=(h.y+(i()-.5)*h.ry)*1024,x=h.rx*2048*(.2+i()*.35),f=h.ry*1024*(.2+i()*.4);Ll(n,p,g,x,f,h.col,h.a*(.4+i()*.5),2048)}}const a=[2245802,2245734,4465254,5583701,3368584,2245717,3809894];for(let h=0;h<30;h++){const d=i()*2048,p=i()*1024*.55,g=40+i()*180,x=25+i()*100;Ll(n,d,p,g,x,a[Math.floor(i()*a.length)],.025+i()*.035,2048)}n.save(),n.globalCompositeOperation="screen";const c=.26;for(let h=0;h<50;h++){const d=h/50,p=d*2048,g=(c+Math.sin(d*Math.PI)*.06+(i()-.5)*.02)*1024,x=2048*.05+i()*2048*.035,f=1024*.04*(.4+i()*.6);ss(n,p,g,x,f,4478310,.025+i()*.015)}for(let h=0;h<25;h++){const d=.2+i()*.6,p=d*2048,g=(c+Math.sin(d*Math.PI)*.04)*1024;ss(n,p,g,2048*.03+i()*2048*.02,1024*.02+i()*1024*.01,6719658,.015+i()*.012)}for(let h=0;h<10;h++){const d=.35+i()*.3,p=d*2048,g=(c+Math.sin(d*Math.PI)*.02)*1024;ss(n,p,g,2048*.02,1024*.012,8943462,.01+i()*.008)}n.globalCompositeOperation="source-over",n.restore();for(let h=0;h<12;h++){const d=.1+i()*.8,p=d*2048,g=(c+Math.sin(d*Math.PI)*.04+(i()-.5)*.02)*1024,x=20+i()*60,f=8+i()*20;ss(n,p,g,x,f,132104,.15+i()*.1)}const l=["255,255,255","220,230,255","255,240,220","200,215,255","255,225,200","240,240,255","255,245,235"];for(let h=0;h<5e3;h++){const d=i()*2048,p=i()*1024*.65,g=.3+i()*.7,x=.1+i()*.5;n.fillStyle=`rgba(${l[Math.floor(i()*l.length)]},${x})`,n.beginPath(),n.arc(d,p,g,0,6.28),n.fill()}for(let h=0;h<3e3;h++){const d=i(),p=d*2048,x=(c+Math.sin(d*Math.PI)*.06)*1024+(i()-.5)*1024*.1;if(x<0||x>1024*.6)continue;const f=.2+i()*.6,m=.2+i()*.7;n.fillStyle=`rgba(${l[Math.floor(i()*l.length)]},${m})`,n.beginPath(),n.arc(p,x,f,0,6.28),n.fill()}for(let h=0;h<60;h++){const d=i()*2048,p=i()*1024*.58,g=1.2+i()*1.8,x=6+i()*14,f=i();let m;f<.45?m="255,255,255":f<.65?m="210,225,255":f<.8?m="255,230,200":f<.92?m="190,210,255":m="255,200,180";const S=n.createRadialGradient(d,p,0,d,p,x);S.addColorStop(0,`rgba(${m},0.5)`),S.addColorStop(.1,`rgba(${m},0.18)`),S.addColorStop(.35,`rgba(${m},0.04)`),S.addColorStop(1,`rgba(${m},0)`),n.fillStyle=S,n.beginPath(),n.arc(d,p,x,0,6.28),n.fill(),n.strokeStyle=`rgba(${m},0.12)`,n.lineWidth=.5;const M=x*.8;n.beginPath(),n.moveTo(d-M,p),n.lineTo(d+M,p),n.moveTo(d,p-M),n.lineTo(d,p+M),n.stroke(),n.fillStyle=`rgba(${m},1)`,n.beginPath(),n.arc(d,p,g,0,6.28),n.fill()}for(let h=0;h<8;h++){const d=i()*2048,p=1024*.08+i()*1024*.42,g=50+i()*90;ss(n,d,p,g,g*.7,3359846,.03);for(let x=0;x<100;x++){const f=i()*6.28,m=i()*i()*g,S=d+Math.cos(f)*m,M=p+Math.sin(f)*m*.65;if(S<0||S>2048||M<0||M>1024)continue;const _=.2+i()*.6;n.fillStyle=`rgba(255,255,255,${.25+i()*.6})`,n.beginPath(),n.arc(S,M,_,0,6.28),n.fill()}}for(let h=0;h<15;h++){const d=r[Math.floor(i()*r.length)],p=(d.x+(i()-.5)*d.rx*.5)*2048,g=(d.y+(i()-.5)*d.ry*.5)*1024,x=3+i()*8,f=n.createRadialGradient(p,g,0,p,g,x*3);f.addColorStop(0,is(d.col,.2)),f.addColorStop(.3,is(d.col,.06)),f.addColorStop(1,is(d.col,0)),n.fillStyle=f,n.beginPath(),n.arc(p,g,x*3,0,6.28),n.fill()}const u=new Kr(e);return u.colorSpace=bn,u}function Vw(){const s=h0(),t=Hw(),e=new J(Ns,64,32,0,Math.PI*2,0,Math.PI*.55);Ec=new Y({map:t,side:Tn,fog:!1,transparent:!1});const n=new I(e,Ec);Wr.add(n),Ww(),Xw(),ct.add(Wr),Qu(s)}function Ww(){const s=new Float32Array(ws*3),t=new Float32Array(ws*3);ic=new Float32Array(ws),ih=new Float32Array(ws),sh=new Float32Array(ws);const e=[[1,1,1],[.85,.9,1],[1,.94,.86],[.78,.84,1],[1,.88,.78],[.9,.95,1]],n=Math.random,i=Ns*.97;for(let a=0;a<ws;a++){const c=n()*Math.PI*2,l=n()*Math.PI*.48,u=i*Math.cos(c)*Math.sin(l),h=i*Math.cos(l),d=i*Math.sin(c)*Math.sin(l);s[a*3]=u,s[a*3+1]=h,s[a*3+2]=d;const p=e[Math.floor(n()*e.length)];t[a*3]=p[0],t[a*3+1]=p[1],t[a*3+2]=p[2],ic[a]=2+n()*4,ih[a]=n()*Math.PI*2,sh[a]=.5+n()*2.5}const o=new we;o.setAttribute("position",new Ht(s,3)),o.setAttribute("color",new Ht(t,3)),Do=new Ht(ic.slice(),1),Do.setUsage(xe),o.setAttribute("size",Do);const r=new $h({vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,fog:!1,blending:ce,depthWrite:!1});Gd=new Bp(o,r),Wr.add(Gd)}function Xw(){const s=new Y({color:16777215,transparent:!0,opacity:0,fog:!1,blending:ce,depthWrite:!1});for(let t=0;t<Gw;t++){const e=new I(new _t(.15,0,12,4),s.clone());e.visible=!1,Wr.add(e),Uo.push({mesh:e,mat:e.material,active:!1,life:0,maxLife:0,sx:0,sy:0,sz:0,dx:0,dy:0,dz:0})}}function qw(){let s=null;for(let a=0;a<Uo.length;a++)if(!Uo[a].active){s=Uo[a];break}if(!s)return;const t=Math.random,e=t()*Math.PI*2,n=.1+t()*.35,i=Ns*.85;s.sx=i*Math.cos(e)*Math.sin(n),s.sy=i*Math.cos(n),s.sz=i*Math.sin(e)*Math.sin(n);const o=e+(t()-.5)*1,r=80+t()*120;s.dx=Math.cos(o)*r,s.dy=-r*(.5+t()*.5),s.dz=Math.sin(o)*r,s.life=.5+t()*.8,s.maxLife=s.life,s.active=!0,s.mesh.visible=!0}function p0(s,t){if(Wr.rotation.y=t*.003,Do){const e=Do.array;for(let n=0;n<ws;n++){const i=ic[n],o=Math.sin(t*sh[n]+ih[n]);e[n]=i*(.65+o*.35)}Do.needsUpdate=!0}Il-=s,Il<=0&&(Il=4+Math.random()*12,qw());for(let e=0;e<Uo.length;e++){const n=Uo[e];if(!n.active)continue;if(n.life-=s,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}const i=n.life/n.maxLife;n.sx+=n.dx*s,n.sy+=n.dy*s,n.sz+=n.dz*s,n.mesh.position.set(n.sx,n.sy,n.sz),n.mesh.lookAt(n.sx+n.dx,n.sy+n.dy,n.sz+n.dz),n.mesh.rotateX(Math.PI/2),n.mat.opacity=i*.7,n.mesh.scale.setScalar(.6+i*.4)}}function Yw(s){if(Ec){const t=Math.max(.15,s);Ec.color.setRGB(t,t,t)}}const Zw=6,Ba=64,oh=[];let Is=null;const gr=[new ot(1734485),new ot(2787447),new ot(5601126),new ot(6706568),new ot(8930406),new ot(3368533)];function $w(){Is=new re,Is.visible=!1;for(let s=0;s<Zw;s++){const t=1.2+s*.2+Math.sin(s*1.7)*.15,e=Ns*t,n=.1+s*.012+Math.sin(s*2.3)*.02,i=Ns*n,o=new ve(e,i,Ba,3),r=o.attributes.position.array,a=4,c=(Ba+1)*a,l=Math.PI*(.45+s*.08+Math.sin(s*.9)*.05),u=-l/2,h=(.25+s*.04+Math.sin(s*1.3)*.02)*Math.PI,d=s*.18-.45;for(let f=0;f<c;f++){const m=Math.floor(f/a),S=f%a,M=m/Ba,_=u+M*l+d,E=(S/(a-1)-.5)*.05,T=h+E,b=Ns*.92;r[f*3]=Math.sin(_)*Math.sin(T)*b,r[f*3+1]=Math.cos(T)*b,r[f*3+2]=Math.cos(_)*Math.sin(T)*b}o.attributes.position.needsUpdate=!0,o.attributes.position.setUsage(xe),o.computeVertexNormals();const p=new Float32Array(c*3);o.setAttribute("color",new Ue(p,3)),o.attributes.color.setUsage(xe);const g=new Y({vertexColors:!0,transparent:!0,opacity:0,side:Dt,blending:ce,depthWrite:!1,fog:!1}),x=new I(o,g);Is.add(x),oh.push({mesh:x,mat:g,geo:o,colorArr:p,posArr:r,vertCount:c,rows:a,segments:Ba,phase:s*1.7+Math.sin(s*.8)*.5,speed:.15+s*.05+Math.sin(s*2.1)*.03,colorShift:s*1.1,elevation:h,arcStart:u,arcSpan:l,azimuthOffset:d})}ct.add(Is)}let fo=0;function jw(s,t,e,n,i){if(!Is)return;const o=i==="HEAVY_RAIN"||i==="LUMINOUS_STORM"||i==="FOG_BANK";let r=0;o||(e==="DEEP_NIGHT"?r=.25:e==="NIGHT"&&(r=.08));const a=r>fo?.2:.4;if(fo+=(r-fo)*a*s,fo<.005){Is.visible=!1;return}Is.visible=!0;const c=Ns*.92;for(let l=0;l<oh.length;l++){const u=oh[l],h=u.colorArr,d=u.posArr,p=u.segments,g=u.rows;u.mat.opacity=fo*(.5+l*.05);for(let x=0;x<=p;x++){const f=x/p,m=Math.sin(f*6+t*u.speed+u.phase)*.5+.5,S=Math.sin(f*3-t*u.speed*.4+u.phase*1.3)*.5+.5,M=Math.sin(f*1.5+t*.07)*.5+.5,_=Math.sin(f*1.2+t*.05+u.phase*.7)*.5+.5,A=(m*.3+S*.25+M*.2+_*.25)*fo,E=(f*3+t*.08+u.colorShift)%gr.length,T=Math.floor(E),b=E-T,y=gr[T%gr.length],v=gr[(T+1)%gr.length],R=(y.r+(v.r-y.r)*b)*A,U=(y.g+(v.g-y.g)*b)*A,L=(y.b+(v.b-y.b)*b)*A,z=c*.025,V=Math.sin(f*5+t*.3+u.phase)*z+Math.sin(f*2.5-t*.15+u.phase*.6)*z*.5;for(let G=0;G<g;G++){const j=x*g+G,W=G/(g-1);let lt;W<.33?lt=W*1.2:W>.67?lt=(1-W)*1.5:lt=.7+Math.sin(W*Math.PI)*.3,h[j*3]=R*lt,h[j*3+1]=U*lt,h[j*3+2]=L*lt,u.arcStart+f*u.arcSpan+u.azimuthOffset;const pt=(W-.5)*.05,Rt=u.elevation+pt,Ft=V*(.3+W*.7);d[j*3+1]=Math.cos(Rt)*c+Ft}}u.geo.attributes.color.needsUpdate=!0,u.geo.attributes.position.needsUpdate=!0}}const Z={pos:new N(0,Hc,0),vel:new N,onGround:!0};let Dl=0,Ul=0,m0=0,Nl=65,Hd=65,xr=0,Vd=!0,zl=0,Jo=0,rh=null,ah=null,ch=null,Wd=1;function Kw(s,t,e){rh=s,ah=t,ch=e}let lh=[],uh=[],hh=null;function Jw(s,t){lh=s,uh=t}function Qw(s){hh=s}function t1(s){const t=Ow(),e=ze.ShiftLeft||ze.ShiftRight||ir;Z.vel.x=t.x,Z.vel.z=t.z,Z.vel.y-=Qy*s,(ze.Space||Wc)&&Z.onGround&&(Z.vel.y=wc,Z.onGround=!1,zw(!1),ah&&ah()),Z.onGround||(zl=Z.vel.y),Z.pos.x+=Z.vel.x*s,Z.pos.y+=Z.vel.y*s,Z.pos.z+=Z.vel.z*s;const n=Yt(Z.pos.x,Z.pos.z)+Hc;if(Z.pos.y<=n){if(Z.pos.y=n,Z.vel.y=0,!Vd&&zl<-3){const u=Math.min(Math.abs(zl)/wc,1);xr=u*.15,hh&&hh(Z.pos.x,Z.pos.z,Math.floor(3+u*5)),ch&&ch(u)}Z.onGround=!0}Vd=Z.onGround,Z.onGround?(Z.vel.x*=Dd,Z.vel.z*=Dd):(Z.vel.x*=Ud,Z.vel.z*=Ud);const i=.4;for(let u=0;u<lh.length;u++){const h=lh[u],d=Z.pos.x-h.x,p=Z.pos.z-h.z,g=d*d+p*p,x=.6+i;if(g<x*x&&g>.001){const f=1/Math.sqrt(g);Z.pos.x=h.x+d*f*x,Z.pos.z=h.z+p*f*x}}for(let u=0;u<uh.length;u++){const h=uh[u],d=Z.pos.x-h.x,p=Z.pos.z-h.z,g=d*d+p*p,x=h.colR+i;if(g<x*x&&g>.001){const f=1/Math.sqrt(g);Z.pos.x=h.x+d*f*x,Z.pos.z=h.z+p*f*x}}if(Math.sqrt(Z.pos.x*Z.pos.x+Z.pos.z*Z.pos.z)>ae){const u=Math.atan2(Z.pos.z,Z.pos.x);Z.pos.x=Math.cos(u)*ae,Z.pos.z=Math.sin(u)*ae}cf.position.copy(Z.pos);const a=Math.sqrt(t.x*t.x+t.z*t.z)>.5&&Z.onGround;a?Jo=0:Jo+=s,Ul+=((a?e?.06:.035:0)-Ul)*s*6,a&&(Dl+=s*(e?12:8));const l=Math.sin(Dl)*Ul;if(a&&rh){const u=Math.sin(Dl)>=0?1:-1;Wd>0&&u<0&&rh(e),Wd=u}Hd=e&&a?78:65,Nl+=(Hd-Nl)*s*4,gn.fov=Nl,gn.updateProjectionMatrix(),xr*=Math.pow(.04,s),xr<.001&&(xr=0),m0=l-xr}function ka(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),o={},r={},a=s[0].morphTargetsRelative,c=new we;let l=0;for(let u=0;u<s.length;++u){const h=s[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(e){let u=0;const h=[];for(let d=0;d<s.length;++d){const p=s[d].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=s[d].attributes.position.count}c.setIndex(h)}for(const u in o){const h=Xd(o[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in r){const h=r[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const p=[];for(let x=0;x<r[u].length;++x)p.push(r[u][x][d]);const g=Xd(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Xd(s){let t,e,n,i=-1,o=0;for(let l=0;l<s.length;++l){const u=s[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=u.count*e}const r=new t(o),a=new Ue(r,e,n);let c=0;for(let l=0;l<s.length;++l){const u=s[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let d=0,p=u.count;d<p;d++)for(let g=0;g<e;g++){const x=u.getComponent(d,g);a.setComponent(d+h,g,x)}}else r.set(u.array,c);c+=u.count*e}return i!==void 0&&(a.gpuType=i),a}let po=null;function e1(){if(po)return po;const s=256,t=512,e=document.createElement("canvas");e.width=s,e.height=t;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#5a4030"),i.addColorStop(.3,"#4d3528"),i.addColorStop(.7,"#3a2a1e"),i.addColorStop(1,"#2e2015"),n.fillStyle=i,n.fillRect(0,0,s,t);for(let o=0;o<28;o++){const r=o/28*s+Math.sin(o*3.7)*6,a=2+Math.sin(o*2.1)*1.5,c=Math.sin(o*1.3+.5)*.5+.5,l=Math.floor(50+c*30),u=Math.floor(30+c*20),h=Math.floor(15+c*12);n.strokeStyle=`rgba(${l},${u},${h},0.4)`,n.lineWidth=a,n.beginPath();let d=0;for(n.moveTo(r,d);d<t;){d+=8+Math.random()*12;const p=Math.sin(d*.03+o)*3;n.lineTo(r+p,d)}n.stroke()}for(let o=0;o<18;o++){const r=o/18*s+Math.sin(o*5.3)*8;n.strokeStyle="rgba(20,12,6,0.35)",n.lineWidth=.8+Math.random()*1.2,n.beginPath();let a=Math.random()*40;for(n.moveTo(r,a);a<t;)a+=5+Math.random()*10,n.lineTo(r+Math.sin(a*.05+o*2)*4,a);n.stroke()}for(let o=0;o<30;o++){const r=o/30*t+Math.random()*10;n.strokeStyle=`rgba(${30+Math.random()*20},${18+Math.random()*12},${8+Math.random()*8},0.15)`,n.lineWidth=.5+Math.random()*1.5,n.beginPath(),n.moveTo(0,r);for(let a=0;a<s;a+=10)n.lineTo(a,r+Math.sin(a*.04+o)*2);n.stroke()}for(let o=0;o<5;o++){const r=Math.random()*s,a=50+Math.random()*(t-100),c=4+Math.random()*6,l=3+Math.random()*5,u=n.createRadialGradient(r,a,0,r,a,c);u.addColorStop(0,"rgba(15,8,4,0.5)"),u.addColorStop(.5,"rgba(30,18,10,0.3)"),u.addColorStop(1,"rgba(40,25,14,0)"),n.fillStyle=u,n.beginPath(),n.ellipse(r,a,c,l,0,0,Math.PI*2),n.fill()}for(let o=0;o<8;o++){const r=Math.random()*s;n.strokeStyle="rgba(34,136,85,0.08)",n.lineWidth=.5+Math.random()*.8,n.beginPath();let a=Math.random()*t*.3;n.moveTo(r,a);const c=30+Math.random()*80;for(;a<a+c&&a<t;)a+=4+Math.random()*6,n.lineTo(r+Math.sin(a*.08+o*2)*2,a);n.stroke()}return po=new Kr(e),po.wrapS=Xo,po.wrapT=Xo,po}const Xr=[{leaf:1332520,glow:2280567,core:4521898},{leaf:931880,glow:3390378,core:5636044},{leaf:1721376,glow:4508757,core:7864200},{leaf:1060912,glow:2267562,core:4513262},{leaf:1583172,glow:3377356,core:5618687}];let Ga=null;function n1(){if(Ga)return Ga;const s=64,t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d"),n=e.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);return n.addColorStop(0,"rgba(68, 255, 136, 0.55)"),n.addColorStop(.25,"rgba(34, 204, 100, 0.35)"),n.addColorStop(.6,"rgba(20, 120, 60, 0.12)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=n,e.fillRect(0,0,s,s),Ga=new Kr(t),Ga}function i1(s,t){const e=new zp({map:n1(),color:3394696,transparent:!0,opacity:.65,depthWrite:!1,blending:ce}),n=new Pg(e),i=s*.55;return n.scale.set(i*2.2,i*1.6,1),n.position.y=t+s*.6,n.visible=!1,ct.add(n),n}function s1(s){const t=new re,e=6+w()*10,n=.2+w()*.3,i=new I(new _t(n*.4,n,e,6));i.material=new K({color:5914672}),i.position.y=e/2,i.userData._cat="trunk",t.add(i);const o=2+Math.floor(w()*3);for(let d=0;d<o;d++){const p=d/o*6.28+w()*.5,g=e*.4+w()*e*.4,x=new I(new _t(.008,.015,g,3));x.material=new K({color:2263125}),x.position.set(Math.cos(p)*n*.74,e*.15+g/2,Math.sin(p)*n*.74),x.userData._cat="detail",t.add(x)}const r=3+Math.floor(w()*3);for(let d=0;d<r;d++){const p=d/r*6.28+w()*.5,g=.8+w()*1.5,x=new I(new _t(.02,n*.3,g,4));x.material=new K({color:3812378}),x.position.set(Math.cos(p)*n*.5,.08,Math.sin(p)*n*.5),x.rotation.z=p<3.14?1.2+w()*.3:-(1.2+w()*.3),x.rotation.y=p,x.userData._cat="detail",t.add(x)}const a=Xr[s%Xr.length],c=3+Math.floor(w()*4);for(let d=0;d<c;d++){const p=e*(.4+w()*.5),g=w()*Math.PI*2,x=1.5+w()*3,f=new I(new _t(.02,.06,x,4));f.material=new K({color:5914672}),f.position.set(Math.cos(g)*.3,p,Math.sin(g)*.3),f.rotation.z=(w()-.5)*1.2,f.rotation.y=g,f.userData._cat="trunk",t.add(f),w();const m=Math.cos(g)*(x*.5),S=p+w()*1.5,M=Math.sin(g)*(x*.5),_=1+w()*2;w();const A=new I(new Us(_*.3,1));A.material=new K({color:a.core}),A.position.set(m,S,M),A.userData._cat="canopy",t.add(A),w();const E=new I(new Us(_*.75,1));E.material=new K({color:a.leaf}),E.position.set(m+(w()-.5)*.4,S+(w()-.5)*.4,M+(w()-.5)*.4),E.scale.set(1+w()*.4,.65+w()*.5,1+w()*.4),E.userData._cat="canopy",t.add(E);const T=new I(new Us(_*1.2,1));if(T.material=new K({color:a.glow}),T.position.set(m,S,M),T.userData._cat="glow",t.add(T),w()<.35){const b=.3+w()*.8,y=new I(new _t(.008,.003,b,3));y.material=new K({color:2773040});const v=w()*x*.4;y.position.set(Math.cos(g)*(.3+v),p-b/2-w()*.3,Math.sin(g)*(.3+v)),y.userData._cat="detail",t.add(y)}else w(),w(),w()}const l=Math.floor(w()*3);for(let d=0;d<l;d++){const p=1+w()*e*.4,g=w()*6.28,x=.08+w()*.08,f=new I(new J(x,5,3));f.material=new K({color:5911840}),f.scale.set(1.5,.3,1),f.position.set(Math.cos(g)*n*.8,p,Math.sin(g)*n*.8),f.rotation.y=-g,f.userData._cat="detail",t.add(f)}const u=new I(new J(3+w()*2,8,6));u.material=new K({color:new ot(F.leaf)}),u.position.y=e*.65,u.userData._cat="glow",t.add(u);const h=new I(new J(n*2.5,6,3));return h.material=new K({color:1183752}),h.scale.set(1,.12,1),h.position.y=.02,h.userData._cat="trunk",t.add(h),t.userData.treeH=e,t}function o1(s,t){const e=h0();Qu(7919+t*1013+s*3571);const n=s1(s),i=n.userData.treeH;Qu(e),n.updateMatrixWorld(!0);const o=[],r=[],a=[],c=[],l=new ot;for(let g=0;g<n.children.length;g++){const x=n.children[g];if(!x.isMesh)continue;let f=x.geometry.clone();if(x.updateMatrix(),f.applyMatrix4(x.matrix),f.index){const A=f.toNonIndexed();f.dispose(),f=A}l.copy(x.material.color);const S=f.attributes.position.count,M=new Float32Array(S*3);for(let A=0;A<S;A++)M[A*3]=l.r,M[A*3+1]=l.g,M[A*3+2]=l.b;f.setAttribute("color",new Ue(M,3));const _=x.userData._cat||"trunk";if(_==="trunk"){if(!f.attributes.uv){const A=new Float32Array(S*2);f.setAttribute("uv",new Ue(A,2))}}else f.attributes.uv&&f.deleteAttribute("uv");_==="trunk"?o.push(f):_==="canopy"?r.push(f):_==="glow"?a.push(f):_==="detail"&&c.push(f),x.material.dispose()}const u=o.length>0?ka(o):null,h=r.length>0?ka(r):null,d=a.length>0?ka(a):null,p=c.length>0?ka(c):null;for(const g of o)g.dispose();for(const g of r)g.dispose();for(const g of a)g.dispose();for(const g of c)g.dispose();return{trunkGeo:u,canopyGeo:h,glowGeo:d,detailGeo:p,treeH:i,palIdx:s}}const Xe=new le;function r1(s){const t=[];for(let e=0;e<s;e++){const n=e%Xr.length,i=Math.floor(e/Xr.length);t.push(o1(n,i))}return t}function a1(s,t,e){const n=[];for(let i=0;i<s.length;i++){const o=s[i],r=Xr[o.palIdx],a=e1(),c=new K({vertexColors:!0,map:a,roughness:.85,emissive:r.glow,emissiveIntensity:.08}),l=o.trunkGeo?new Qn(o.trunkGeo,c,e):null;l&&(l.instanceMatrix.setUsage(xe),l.count=0,ct.add(l));const u=new K({vertexColors:!0,roughness:.5,emissive:r.glow,emissiveIntensity:.9}),h=o.canopyGeo?new Qn(o.canopyGeo,u,e):null;h&&(h.instanceMatrix.setUsage(xe),h.count=0,ct.add(h));const d=new K({vertexColors:!0,emissive:r.glow,emissiveIntensity:.12,transparent:!0,opacity:.1,depthWrite:!1}),p=o.glowGeo?new Qn(o.glowGeo,d,e):null;p&&(p.instanceMatrix.setUsage(xe),p.count=0,ct.add(p));const g=new K({vertexColors:!0,emissive:r.glow,emissiveIntensity:.2}),x=o.detailGeo?new Qn(o.detailGeo,g,e):null;x&&(x.instanceMatrix.setUsage(xe),x.count=0,ct.add(x)),n.push({trunk:l,canopy:h,glow:p,detail:x,trunkMat:c,canopyMat:u,glowMat:d,detailMat:g,instances:[],treeH:o.treeH})}for(let i=0;i<t.length;i++){const o=i%s.length,r=t[i],a=r.yRot,c=r.scale;Xe.position.set(r.x,r.y,r.z),Xe.rotation.set(0,a,0),Xe.scale.setScalar(c),Xe.updateMatrix();const l=n[o].instances.length;n[o].trunk&&n[o].trunk.setMatrixAt(l,Xe.matrix),n[o].canopy&&n[o].canopy.setMatrixAt(l,Xe.matrix),n[o].glow&&n[o].glow.setMatrixAt(l,Xe.matrix),n[o].detail&&n[o].detail.setMatrixAt(l,Xe.matrix),n[o].instances.push({x:r.x,z:r.z,y:r.y,yRot:a,scale:c,treeH:r.treeH||n[o].treeH,posIdx:i})}for(let i=0;i<n.length;i++){const o=n[i].instances.length;n[i].trunk&&(n[i].trunk.count=o),n[i].canopy&&(n[i].canopy.count=o),n[i].glow&&(n[i].glow.count=o),n[i].detail&&(n[i].detail.count=0)}return n}function c1(s,t,e,n,i,o,r,a,c){for(let l=0;l<s.length;l++){const u=s[l];let h=0,d=0,p=0,g=0;for(let x=0;x<u.instances.length;x++){const f=u.instances[x],m=f.x-e,S=f.z-i,M=f.y+(f.treeH||10)*.4-n,_=m*m+M*M+S*S,A=f.posIdx;if(_>12100){t[A]&&(t[A].visible=!1);continue}if(_>4900){t[A]&&(t[A].visible=!0);continue}if(t[A]&&(t[A].visible=!1),Xe.position.set(f.x,f.y,f.z),Xe.scale.setScalar(f.scale),_<400){const E=f.x*.1+f.z*.13;Xe.rotation.set(Math.sin(o*.25+E+1)*.003*r+c*.15,f.yRot,Math.sin(o*.3+E)*.004*r+a*.15),Xe.updateMatrix(),u.detail&&u.detail.setMatrixAt(g++,Xe.matrix)}else Xe.rotation.set(0,f.yRot,0),Xe.updateMatrix();u.trunk&&u.trunk.setMatrixAt(h++,Xe.matrix),u.canopy&&u.canopy.setMatrixAt(d++,Xe.matrix),u.glow&&u.glow.setMatrixAt(p++,Xe.matrix)}u.trunk&&(u.trunk.count=h,u.trunk.instanceMatrix.needsUpdate=!0),u.canopy&&(u.canopy.count=d,u.canopy.instanceMatrix.needsUpdate=!0),u.glow&&(u.glow.count=p,u.glow.instanceMatrix.needsUpdate=!0),u.detail&&(u.detail.count=g,u.detail.instanceMatrix.needsUpdate=!0)}}function l1(s,t){const e=new re,n=.4+w()*1.2,i=w()*6.28,o=.8+w()*1.5,r=.5+w()*.8,a=new I(Pn.mushStem,new K({color:F.mushStem,roughness:.7,emissive:F.mushGlow,emissiveIntensity:.1}));a.position.y=.3,e.add(a);const c=new K({color:F.mushStem,emissive:F.mushGlow,emissiveIntensity:.15,roughness:.6}),l=new I(new Ae(.09,.012,4,8),c);l.position.y=.42,l.rotation.x=Math.PI/2,e.add(l);const u=new K({color:F.mushCap,emissive:F.mushGlow,emissiveIntensity:r,roughness:.3,transparent:!0,opacity:.9}),h=new I(Pn.mushCap,u);h.scale.set(1,.5,1),h.position.y=.55,h.castShadow=!0,h.receiveShadow=!0,e.add(h);const d=new K({color:6693546,emissive:F.mushGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,side:Dt});for(let v=0;v<8;v++){const R=v/8*6.28,U=new I(new ve(.35,.08),d);U.position.set(Math.cos(R)*.15,.48,Math.sin(R)*.15),U.rotation.y=-R,U.rotation.x=.1,e.add(U)}for(let v=0;v<4;v++){const R=new Y({color:16777215,transparent:!0,opacity:.9}),U=new I(Pn.mushDot,R),L=w()*6.28,z=.15+w()*.25;U.position.set(Math.cos(L)*z,.6+w()*.1,Math.sin(L)*z),e.add(U)}const p=new K({color:15663103,emissive:11197951,emissiveIntensity:.2,transparent:!0,opacity:.6,roughness:0,metalness:.5}),g=2+Math.floor(w()*2);for(let v=0;v<g;v++){const R=new I(new J(.015+w()*.015,4,3),p),U=w()*6.28,L=.1+w()*.2;R.position.set(Math.cos(U)*L,.63+w()*.08,Math.sin(U)*L),e.add(R)}const x=new K({color:4465322,emissive:F.mushGlow,emissiveIntensity:.15,transparent:!0,opacity:.35});for(let v=0;v<4;v++){const R=w()*6.28,U=.15+w()*.25,L=new I(new _t(.004,.002,U,3),x);L.position.set(Math.cos(R)*.12,.01,Math.sin(R)*.12),L.rotation.z=1.3*(R<3.14?1:-1),L.rotation.y=R,e.add(L)}const f=new K({color:F.mushCap,emissive:F.mushGlow,emissiveIntensity:r*.6,transparent:!0,opacity:.4}),m=new I(new Ae(.38,.01,4,12),f);m.position.y=.49,m.rotation.x=Math.PI/2,e.add(m);const S=new K({color:F.mushStem,emissive:F.mushGlow,emissiveIntensity:.08,roughness:.7}),M=new I(new J(.08,5,3),S);M.scale.set(1,.5,1),M.position.y=.04,e.add(M);const _=new K({color:1708040,roughness:.95});for(let v=0;v<3;v++){const R=w()*6.28,U=.1+w()*.12,L=new I(new J(.008+w()*.008,3,3),_);L.position.set(Math.cos(R)*U,.005,Math.sin(R)*U),e.add(L)}const A=new Y({color:F.mushGlow,transparent:!0,opacity:.2});for(let v=0;v<4;v++){const R=new I(new J(.006,3,3),A);R.position.set((w()-.5)*.2,.35+w()*.1,(w()-.5)*.2),e.add(R)}const E=new K({color:11167453,emissive:F.mushGlow,emissiveIntensity:r*.3,roughness:.5}),T=3+Math.floor(w()*3);for(let v=0;v<T;v++){const R=w()*6.28,U=w()*.25,L=new I(new J(.015+w()*.015,3,3),E);L.position.set(Math.cos(R)*U,.58+w()*.06,Math.sin(R)*U),e.add(L)}const b=new K({color:657416,transparent:!0,opacity:.2,roughness:.95,side:Dt}),y=new I(new $e(.18,8),b);return y.rotation.x=-Math.PI/2,y.position.y=.005,e.add(y),e.scale.setScalar(n),e.position.set(s,0,t),ct.add(e),{group:e,capMat:u,phase:i,speed:o,base:r,x:s,z:t}}function u1(s,t){const e=new re,n=w()*6.28,i=new K({color:F.crystal,emissive:F.crystalCore,emissiveIntensity:1.5,transparent:!0,opacity:.7,roughness:.1,metalness:.5}),o=new I(Pn.crystal,i);o.position.y=.9,o.castShadow=!0,e.add(o);for(let M=0;M<3;M++){const _=new I(Pn.crystalSm,i),A=M/3*6.28+w()*.5;_.position.set(Math.cos(A)*.4,.45,Math.sin(A)*.4),_.rotation.z=(w()-.5)*.8,_.castShadow=!0,e.add(_)}const r=new K({color:1710626,roughness:.9,metalness:.1}),a=3+Math.floor(w()*3);for(let M=0;M<a;M++){const _=w()*6.28,A=.2+w()*.5,E=.08+w()*.12,T=new I(new J(E,4,3),r);T.scale.set(1+w()*.5,.5+w()*.4,1+w()*.5),T.position.set(Math.cos(_)*A,E*.3,Math.sin(_)*A),T.rotation.set(w(),w(),w()),e.add(T)}const c=new Y({color:F.crystalCore,transparent:!0,opacity:.5});for(let M=0;M<3;M++){const _=.4+w()*.8,A=new I(new _t(.008,.008,_,3),c);A.position.set((w()-.5)*.15,.5+w()*.7,(w()-.5)*.15),A.rotation.set((w()-.5)*.8,(w()-.5)*.5,(w()-.5)*.8),e.add(A)}const l=new Y({color:11206638,transparent:!0,opacity:.6});for(let M=0;M<5;M++){const _=new I(new J(.012,3,3),l);_.position.set((w()-.5)*1,.3+w()*1.5,(w()-.5)*1),e.add(_)}const u=new K({color:F.crystal,emissive:F.crystalCore,emissiveIntensity:.8,transparent:!0,opacity:.5});for(let M=0;M<4;M++){const _=w()*6.28,A=.3+w()*.3,E=new I(new _t(0,.015,.12+w()*.1,3),u);E.position.set(Math.cos(_)*A,.06+w()*.1,Math.sin(_)*A),E.rotation.z=(w()-.5)*.6,e.add(E)}const h=new K({color:3364198,emissive:1122867,emissiveIntensity:.05,roughness:.9,side:Dt});for(let M=0;M<2;M++){const _=w()*6.28,A=.2+w()*.3,E=new I(new $e(.04+w()*.03,5),h);E.rotation.x=-Math.PI/2+w()*.4,E.position.set(Math.cos(_)*A,.05,Math.sin(_)*A),e.add(E)}const d=new Y({color:F.crystalCore,transparent:!0,opacity:.2});for(let M=0;M<2;M++){const _=new I(new _t(.003,.003,.6+w()*.4,3),d);_.position.set((w()-.5)*.3,.7+w()*.5,(w()-.5)*.3),_.rotation.set((w()-.5)*1,w(),(w()-.5)*1),e.add(_)}const p=new K({color:1135940,emissive:1127202,emissiveIntensity:.3,transparent:!0,opacity:.25});for(let M=0;M<4;M++){const _=new I(new J(.02+w()*.02,3,3),p);_.position.set((w()-.5)*.15,.4+w()*.6,(w()-.5)*.15),e.add(_)}const g=new Y({color:11206638,transparent:!0,opacity:.06}),x=new I(new Ae(.35,.02,4,10),g);x.position.y=.6,x.rotation.x=Math.PI/2+w()*.3,e.add(x);const f=new Y({color:F.crystal,transparent:!0,opacity:.06,side:Dt}),m=new I(new $e(.8,8),f);m.rotation.x=-Math.PI/2,m.position.y=.01,e.add(m),e.position.set(s,0,t),ct.add(e);const S=new er(F.crystal,.5,8);return S.position.set(s,1.2,t),ct.add(S),{group:e,mat:i,phase:n,x:s,z:t,light:S}}const Kn={uTime:{value:0},uWindAmp:{value:1},uWindLeanX:{value:0},uWindLeanZ:{value:0},uPlayerX:{value:0},uPlayerZ:{value:0}};function h1(s,t,e,n,i,o){Kn.uTime.value=s,Kn.uWindAmp.value=t,Kn.uWindLeanX.value=e,Kn.uWindLeanZ.value=n,Kn.uPlayerX.value=i,Kn.uPlayerZ.value=o}function f1(s,t,e,n,i){const o=new we,r=[],a=[],c=[],l=n||20,u=new ot(i?i[0]:663568),h=new ot(i?i[1]:1388056),d=new ot(i?i[2]:2777141),p=new ot(i?i[3]:4517461),g=new ot(i?i[4]:7864268),x=new ot(i?i[5]:14548838),f=new ot;for(let b=0;b<l;b++){const y=w()*6.28,v=w()*e,R=Math.cos(y)*v,U=Math.sin(y)*v,L=.25+w()*.65,z=.03+w()*.05,V=(w()-.5)*.2,G=(w()-.5)*.2,j=(w()-.5)*.12,W=w()<.5?u:h,lt=w(),pt=lt<.4?p:lt<.7?g:x,Rt=L*.35,Ft=L*.7,jt=V*.3,et=V*.7,ut=G*.3,wt=G*.7;r.push(R-z,.01,U),r.push(R+z,.01,U),r.push(R+jt-z*.9,Rt,U+ut),c.push(0,0,.35),a.push(W.r,W.g,W.b,W.r,W.g,W.b),f.copy(W).lerp(d,.4),a.push(f.r,f.g,f.b),r.push(R+z,.01,U),r.push(R+jt+z*.9,Rt,U+ut),r.push(R+jt-z*.9,Rt,U+ut),c.push(0,.35,.35),a.push(W.r,W.g,W.b),f.copy(W).lerp(d,.4),a.push(f.r,f.g,f.b,f.r,f.g,f.b);const dt=z*.65;r.push(R+jt-z*.9,Rt,U+ut),r.push(R+jt+z*.9,Rt,U+ut),r.push(R+et-dt,Ft,U+wt+j),c.push(.35,.35,.7),f.copy(W).lerp(d,.4),a.push(f.r,f.g,f.b,f.r,f.g,f.b),f.copy(d).lerp(pt,.3),a.push(f.r,f.g,f.b),r.push(R+jt+z*.9,Rt,U+ut),r.push(R+et+dt,Ft,U+wt+j),r.push(R+et-dt,Ft,U+wt+j),c.push(.35,.7,.7),f.copy(W).lerp(d,.4),a.push(f.r,f.g,f.b),f.copy(d).lerp(pt,.3),a.push(f.r,f.g,f.b,f.r,f.g,f.b),r.push(R+et-dt,Ft,U+wt+j),r.push(R+et+dt,Ft,U+wt+j),r.push(R+V+j*2,L,U+G+j*1.5),c.push(.7,.7,1),f.copy(d).lerp(pt,.3),a.push(f.r,f.g,f.b,f.r,f.g,f.b),a.push(pt.r,pt.g,pt.b)}const m=new ot(i?i[6]:1725736),S=new ot(i?i[7]:3385941),M=Math.floor(l*.3);for(let b=0;b<M;b++){const y=w()*6.28,v=w()*e*.9,R=Math.cos(y)*v,U=Math.sin(y)*v,L=.02+w()*.03;r.push(R-L,.01,U),r.push(R+L,.01,U),r.push(R,.03+w()*.02,U+L),c.push(0,0,.05),a.push(m.r,m.g,m.b),a.push(m.r,m.g,m.b),a.push(S.r,S.g,S.b)}o.setAttribute("position",new Ht(r,3)),o.setAttribute("color",new Ht(a,3)),o.setAttribute("bladeHeight",new Ht(c,1)),o.computeVertexNormals();const _=new K({vertexColors:!0,roughness:.7,side:Dt,emissive:i?i[8]:4521830,emissiveIntensity:.08}),A=s,E=t;_.onBeforeCompile=b=>{b.uniforms.uTime=Kn.uTime,b.uniforms.uWindAmp=Kn.uWindAmp,b.uniforms.uWindLeanX=Kn.uWindLeanX,b.uniforms.uWindLeanZ=Kn.uWindLeanZ,b.uniforms.uPlayerX=Kn.uPlayerX,b.uniforms.uPlayerZ=Kn.uPlayerZ,b.uniforms.uPatchX={value:A},b.uniforms.uPatchZ={value:E},b.vertexShader=b.vertexShader.replace("#include <common>",`#include <common>
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
      `)};const T=new I(o,_);return T.position.set(s,0,t),ct.add(T),{mesh:T,geo:o,cx:s,cz:t}}function d1(s,t){const e=new re,n=new K({color:F.fern,emissive:F.fernGlow,emissiveIntensity:.08,roughness:.7,side:Dt}),i=3+Math.floor(w()*2),o=.5+w()*.7,r=new K({color:1708552,roughness:.95}),a=new I(new J(.06,5,3),r);a.scale.set(1.5,.5,1.5),a.position.y=.02,e.add(a);for(let m=0;m<3;m++){const S=w()*6.28,M=new I(new _t(.003,.002,.08,3),r);M.position.set(Math.cos(S)*.06,.01,Math.sin(S)*.06),M.rotation.z=(S<3.14?1:-1)*1.2,M.rotation.y=S,e.add(M)}for(let m=0;m<i;m++){const S=m/i*6.28+w()*.3,M=new I(new _t(.004,.006,.55,3),new K({color:1721632,roughness:.8}));M.position.set(Math.cos(S)*.15,.25,Math.sin(S)*.15),M.rotation.y=-S,M.rotation.x=-.6-w()*.4,e.add(M);const _=new I(new ve(.12,.6,1,3),n);_.position.set(Math.cos(S)*.15,.25,Math.sin(S)*.15),_.rotation.y=-S,_.rotation.x=-.6-w()*.4,e.add(_);for(let E=0;E<6;E++){const T=new I(new ve(.07,.06,1,1),n),b=.06+E*.08,y=E%2===0?1:-1;T.position.set(Math.cos(S)*(.15+.06),b,Math.sin(S)*(.15+.06*y)),T.rotation.y=-S,T.rotation.x=-.8,T.rotation.z=y*.5,e.add(T)}const A=new K({color:8939042,emissive:4469521,emissiveIntensity:.1});for(let E=0;E<3;E++){const T=new I(new J(.008,3,3),A),b=.12+E*.12;T.position.set(Math.cos(S)*(.15+.02),b-.01,Math.sin(S)*(.15+.02)),e.add(T)}}const c=new K({color:F.fernGlow,emissive:F.fernGlow,emissiveIntensity:.3}),l=new I(new J(.04,4,3),c);l.position.y=.35,e.add(l);const u=new I(new _t(.006,.003,.06,3),c);u.position.set(.02,.37,0),u.rotation.z=-.8,e.add(u);const h=new K({color:15663103,emissive:8960989,emissiveIntensity:.1,transparent:!0,opacity:.5,roughness:0,metalness:.5});for(let m=0;m<3;m++){const S=w()*6.28,M=w()*.2,_=new I(new J(.006+w()*.005,3,3),h);_.position.set(Math.cos(S)*M,.12+w()*.2,Math.sin(S)*M),e.add(_)}const d=new K({color:3811856,roughness:.9,side:Dt,transparent:!0,opacity:.6}),p=new I(new ve(.1,.4,1,2),d),g=w()*6.28;p.position.set(Math.cos(g)*.12,.05,Math.sin(g)*.12),p.rotation.x=-1.3,p.rotation.y=g,e.add(p);const x=new Y({color:2768928,transparent:!0,opacity:.3});for(let m=0;m<4;m++){const S=new I(new _t(.001,.001,.015,3),x);S.position.set((w()-.5)*.08,.08+w()*.15,(w()-.5)*.08),S.rotation.z=(w()-.5)*1.5,e.add(S)}const f=new K({color:1708552,roughness:.95});for(let m=0;m<3;m++){const S=new I(new J(.006,3,3),f);S.position.set((w()-.5)*.1,.005,(w()-.5)*.1),e.add(S)}return e.scale.setScalar(o),e.position.set(s,0,t),ct.add(e),{group:e,phase:w()*6.28}}function p1(s,t){const e=new re,n=.25+w()*.4,i=new K({color:F.flowerStem,roughness:.8}),o=new I(new _t(.01,.015,n,4),i);o.position.y=n/2,e.add(o);for(let b=0;b<2;b++){const y=new I(new ti(.004,.012,3),i);y.position.set(.012,n*.25+b*n*.25,0),y.rotation.z=-1.2,e.add(y)}const r=new K({color:F.fern,roughness:.7,side:Dt}),a=new I(new ve(.06,.04),r);a.position.set(.03,n*.3,0),a.rotation.z=-.5,e.add(a);const c=new I(new ve(.05,.035),r);c.position.set(-.025,n*.5,.01),c.rotation.z=.6,e.add(c);const l=new K({color:1728560,roughness:.7,side:Dt});for(let b=0;b<5;b++){const y=b/5*6.28+.3,v=new I(new ve(.025,.02),l);v.position.set(Math.cos(y)*.025,n-.005,Math.sin(y)*.025),v.rotation.x=-1.2,v.rotation.y=-y,e.add(v)}const u=new K({color:F.flower,emissive:F.flowerGlow,emissiveIntensity:.4+w()*.4,transparent:!0,opacity:.85,side:Dt});for(let b=0;b<6;b++){const y=b/6*6.28,v=new I(new ve(.05,.04),u);v.position.set(Math.cos(y)*.03,n+.01,Math.sin(y)*.03),v.rotation.x=-.8,v.rotation.y=-y,e.add(v)}const h=new K({color:16777215,emissive:F.flowerGlow,emissiveIntensity:1.2}),d=new I(new J(.02,4,3),h);d.position.y=n+.02,e.add(d);const p=new Y({color:16777130,transparent:!0,opacity:.7}),g=new Y({color:16772676});for(let b=0;b<3;b++){const y=b/3*6.28+.5,v=new I(new _t(.002,.002,.025,3),p);v.position.set(Math.cos(y)*.012,n+.03,Math.sin(y)*.012),e.add(v);const R=new I(new J(.005,3,3),g);R.position.set(Math.cos(y)*.012,n+.045,Math.sin(y)*.012),e.add(R)}const x=new Y({color:16777164,transparent:!0,opacity:.3});for(let b=0;b<2;b++){const y=new I(new J(.006,3,3),x);y.position.set((w()-.5)*.04,n+.06+w()*.04,(w()-.5)*.04),e.add(y)}const f=new K({color:16772778,emissive:16768324,emissiveIntensity:.2,transparent:!0,opacity:.5,roughness:0,metalness:.4}),m=new I(new J(.006,3,3),f);m.position.set(.005,n+.005,.005),e.add(m);const S=new Y({color:15662984}),M=new I(new _t(.002,.002,.03,3),S);M.position.y=n+.035,e.add(M);const _=new I(new J(.005,3,3),S);_.position.y=n+.055,e.add(_);const A=new K({color:1725728,roughness:.7}),E=new I(new _t(.015,.02,.02,5),A);E.position.y=n-.01,e.add(E);const T=new Y({color:16777215,transparent:!0,opacity:.35});for(let b=0;b<4;b++){const y=b/4*6.28+.3,v=new I(new J(.004,3,3),T);v.position.set(Math.cos(y)*.045,n+.005,Math.sin(y)*.045),e.add(v)}return e.position.set(s,0,t),ct.add(e),{group:e,petalMat:u,phase:w()*6.28,baseH:n}}function m1(s,t){const e=new re,n=new K({color:F.reed,emissive:F.reedTip,emissiveIntensity:.05,roughness:.7}),i=new K({color:F.reedTip,emissive:F.reedTip,emissiveIntensity:.15}),o=new K({color:1709328,roughness:.95}),r=new I(new J(.08,5,3),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=3+Math.floor(w()*4),c=new K({color:F.reed,roughness:.7,side:Dt});for(let p=0;p<a;p++){const g=.6+w()*1,x=(w()-.5)*.2,f=(w()-.5)*.2,m=new I(new _t(.008,.015,g,4),n);m.position.set(x,g/2,f),e.add(m);const S=2+Math.floor(w()*2),M=new K({color:2771488,roughness:.7});for(let E=0;E<S;E++){const T=g*.2+E*g*.25,b=new I(new Ae(.012,.004,4,6),M);b.position.set(x,T,f),b.rotation.x=Math.PI/2,e.add(b)}if(w()<.7){const E=.1+w()*.15,T=w()*6.28,b=new I(new ve(.02,E),c);b.position.set(x+Math.cos(T)*.02,g*.4,f+Math.sin(T)*.02),b.rotation.y=-T,b.rotation.x=-.5-w()*.4,e.add(b)}const _=new I(new J(.025,4,3),i);_.scale.set(.8,1.5,.8),_.position.set(x,g+.02,f),e.add(_);const A=new Y({color:F.reedTip,transparent:!0,opacity:.4});for(let E=0;E<3;E++){const T=E/3*6.28+w()*.5,b=new I(new _t(.002,.001,.04,3),A);b.position.set(x+Math.cos(T)*.015,g+.05,f+Math.sin(T)*.015),b.rotation.z=(w()-.5)*.4,e.add(b)}}e.position.set(s,0,t),ct.add(e);const l=new K({color:4864536,roughness:.9,side:Dt,transparent:!0,opacity:.5});for(let p=0;p<2;p++){w()*6.28;const g=(w()-.5)*.15,x=new I(new ve(.025,.02),l);x.position.set(g,.2+p*.25,(w()-.5)*.1),x.rotation.set(w()*.5,w(),w()*.5),e.add(x)}const u=new Y({color:15654348,transparent:!0,opacity:.25});for(let p=0;p<3;p++){const g=new I(new J(.005,3,3),u);g.position.set((w()-.5)*.15,.8+w()*.6,(w()-.5)*.15),e.add(g)}const h=new K({color:2241312,roughness:.9,transparent:!0,opacity:.2}),d=new I(new Ae(.1,.008,4,8),h);return d.rotation.x=Math.PI/2,d.position.y=.03,e.add(d),{group:e,phase:w()*6.28,swayAmp:.03+w()*.04}}let xn=null;const No=[],un=new le,Ac=new ot,g0=new ot(F.dandSeed);function g1(s){const t=new Y({color:16777215,transparent:!0,opacity:1});xn=new Qn(Pn.dandSeed,t,s),xn.instanceMatrix.setUsage(xe),xn.instanceColor=new Ti(new Float32Array(s*3),3),xn.instanceColor.setUsage(xe),un.scale.setScalar(0),un.updateMatrix();for(let e=0;e<s;e++)xn.setMatrixAt(e,un.matrix),Ac.copy(g0),xn.setColorAt(e,Ac),No.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,drift:0});xn.count=s,xn.frustumCulled=!1,ct.add(xn)}function x0(s,t,e){let n=null;for(let o=0;o<No.length;o++)if(!No[o].active){n=No[o];break}if(!n)return;n.x=s+(Math.random()-.5)*.1,n.y=t,n.z=e+(Math.random()-.5)*.1;const i=Math.random()*6.28;n.vx=Math.cos(i)*.5+Math.random()*.3,n.vy=.6+Math.random()*.8,n.vz=Math.sin(i)*.5,n.life=4+Math.random()*5,n.max=n.life,n.active=!0,n.drift=Math.random()*6.28}let v0=0,M0=0,_0=0;function x1(s,t,e){v0=s,M0=t,_0=e}function v1(s,t){let e=!1;for(let n=0;n<No.length;n++){const i=No[n];if(!i.active){un.position.set(0,-100,0),un.scale.setScalar(0),un.updateMatrix(),xn.setMatrixAt(n,un.matrix);continue}if(i.life-=s,i.life<=0){i.active=!1,un.position.set(0,-100,0),un.scale.setScalar(0),un.updateMatrix(),xn.setMatrixAt(n,un.matrix);continue}i.drift+=(Math.random()-.5)*1.5*s,i.vx+=Math.sin(i.drift)*.3*s,i.vz+=Math.cos(i.drift)*.2*s,i.vx+=v0*.5*s,i.vz+=M0*.5*s,i.vy+=(.15+_0*.1-i.vy)*s*.5,i.vx*=.998,i.vy*=.998,i.vz*=.998,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s;const r=i.life/i.max*.7*(.6+Math.sin(t*2+n)*.4),a=.8+Math.sin(t*3+n*.5)*.3;un.position.set(i.x,i.y,i.z),un.scale.setScalar(a),un.updateMatrix(),xn.setMatrixAt(n,un.matrix),Ac.copy(g0).multiplyScalar(r),xn.setColorAt(n,Ac),e=!0}xn.instanceMatrix.needsUpdate=!0,e&&(xn.instanceColor.needsUpdate=!0)}function M1(s,t){const e=new re,n=.35+w()*.45,i=new K({color:2777128,roughness:.7,side:Dt}),o=3+Math.floor(w()*2);for(let M=0;M<o;M++){const _=M/o*6.28+w()*.3,A=new I(new ve(.08,.035),i);A.position.set(Math.cos(_)*.05,.02,Math.sin(_)*.05),A.rotation.x=-1.4,A.rotation.y=-_,e.add(A)}const r=new K({color:F.dandStem,roughness:.8}),a=new I(new _t(.008,.012,n,4),r);a.position.y=n/2,e.add(a);const c=new Y({color:14540236,transparent:!0,opacity:.3});for(let M=0;M<4;M++){const _=n*.2+M*n*.18,A=new I(new _t(.002,.001,.02,3),c);A.position.set(.01,_,0),A.rotation.z=-.8,e.add(A)}const l=new K({color:F.fern,roughness:.7,side:Dt}),u=new I(new ve(.07,.03),l);u.position.set(.03,n*.15,0),u.rotation.z=-.4,e.add(u);const h=new K({color:F.dandHead,emissive:F.dandSeedGlow,emissiveIntensity:.2,transparent:!0,opacity:.85}),d=new I(new J(.07,6,5),h);d.position.y=n+.05,e.add(d);const p=new K({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.5,roughness:0,metalness:.5}),g=new I(new J(.012,4,3),p);g.position.set(.04,n+.07,.03),e.add(g);const x=new Y({color:F.dandSeed,transparent:!0,opacity:.7});for(let M=0;M<8;M++){const _=M/8*6.28+w()*.2,A=new I(new ti(.015,.05,3),x);A.position.set(Math.cos(_)*.06,n+.05+w()*.04,Math.sin(_)*.06),A.rotation.x=(w()-.5)*.6,A.rotation.z=(w()-.5)*.6,e.add(A);const E=new Y({color:16777215,transparent:!0,opacity:.3}),T=new I(new _t(.001,.001,.03,3),E);T.position.set(Math.cos(_)*.08,n+.08,Math.sin(_)*.08),T.rotation.set((w()-.5)*.5,0,(w()-.5)*.5),e.add(T);const b=new Y({color:15658717,transparent:!0,opacity:.15});for(let y=0;y<2;y++){const v=_+(y-.5)*.5,R=new I(new _t(8e-4,8e-4,.025,3),b);R.position.set(Math.cos(v)*.075,n+.09,Math.sin(v)*.075),R.rotation.set((w()-.5)*.8,0,(w()-.5)*.8),e.add(R)}}const f=new K({color:3811856,roughness:.9});for(let M=0;M<4;M++){const _=M/4*6.28+w()*.5,A=new I(new J(.005,3,3),f);A.scale.set(.6,1.5,.6),A.position.set(Math.cos(_)*.04,n+.04,Math.sin(_)*.04),e.add(A)}const m=new Y({color:1716240,transparent:!0,opacity:.15});for(let M=0;M<3;M++){const _=M/3*6.28,A=new I(new _t(.001,.001,n*.7,3),m);A.position.set(Math.cos(_)*.01,n*.35,Math.sin(_)*.01),e.add(A)}const S=new Y({color:13426107,transparent:!0,opacity:.2});for(let M=0;M<5;M++){const _=n*.1+w()*n*.7,A=w()*6.28,E=new I(new _t(8e-4,8e-4,.012,3),S);E.position.set(Math.cos(A)*.012,_,Math.sin(A)*.012),E.rotation.z=A<3.14?-.8:.8,E.rotation.y=A,e.add(E)}return e.position.set(s,0,t),ct.add(e),{group:e,headMat:h,x:s,z:t,h:n,dispersed:!1,phase:w()*6.28,seedCount:8,regrowTimer:0}}function _1(s,t,e,n){for(let i=0;i<s.length;i++){const o=s[i];if(o.dispersed){if(o.regrowTimer-=t,o.regrowTimer<=0){o.dispersed=!1;for(let r=2;r<o.group.children.length;r++)o.group.children[r].visible=!0}o.group.rotation.z=Math.sin(e*.9+o.phase)*.02}else{const r=o.x-n.x,a=o.z-n.z;if(r*r+a*a<1.2){o.dispersed=!0;for(let c=0;c<8;c++)x0(o.x,o.h+.05,o.z);for(let c=2;c<o.group.children.length;c++)o.group.children[c].visible=!1;o.regrowTimer=15+Math.random()*10}else o.group.rotation.z=Math.sin(e*.9+o.phase)*.04,o.headMat.emissiveIntensity=.15+Math.sin(e*1.2+o.phase)*.1}}}function y1(s,t){const e=new re,n=1+w()*.8,i=.25+w()*.15,o=new K({color:F.thornStem,roughness:.8,emissive:662032,emissiveIntensity:.1}),r=new I(new _t(.04,.07,n,5),o);r.position.y=n/2,e.add(r);const a=new K({color:F.thornSpike,roughness:.6}),c=4+Math.floor(w()*3);for(let _=0;_<c;_++){const A=n*.15+_/c*n*.6,E=_/c*6.28+w()*1,T=new I(new ti(.015,.08+w()*.04,3),a);T.position.set(Math.cos(E)*.06,A,Math.sin(E)*.06),T.rotation.z=(E<3.14?1.3:-1.3)+w()*.2,T.rotation.y=E,e.add(T)}const l=new K({color:F.thornOrb,emissive:F.thornOrbGlow,emissiveIntensity:.8,transparent:!0,opacity:.35,roughness:.1,metalness:.3}),u=new I(new J(i,12,10),l);u.position.y=n+i*.5,e.add(u);const h=new K({color:16777164,emissive:F.thornOrbGlow,emissiveIntensity:1.2,transparent:!0,opacity:.6,roughness:0,metalness:.1}),d=new I(new J(i*.35,8,6),h);d.position.y=n+i*.5,e.add(d);const p=new Y({color:F.thornOrbGlow,transparent:!0,opacity:.06,blending:ce,depthWrite:!1}),g=new I(new J(i*2,8,6),p);g.position.y=n+i*.5,e.add(g);const x=new K({color:F.thornSpike,emissive:F.thornOrbGlow,emissiveIntensity:.3,roughness:.5}),f=6+Math.floor(w()*3);for(let _=0;_<f;_++){const A=_/f*6.28+w()*.3,E=(w()-.5)*1.2,T=.3+w()*.3,b=new I(new ti(.018,T,4),x);b.position.set(Math.cos(A)*i*.8,n+i*.5+Math.sin(E)*i*.5,Math.sin(A)*i*.8),b.rotation.z=-E+(A<3.14?1.4:-1.4),b.rotation.y=A,e.add(b)}const m=new K({color:F.thornPetal,emissive:3344920,emissiveIntensity:.15,transparent:!0,opacity:.7,roughness:.6,side:Dt}),S=4+Math.floor(w()*2);for(let _=0;_<S;_++){const A=_/S*6.28+w()*.3,E=.2+w()*.15,T=new I(new ve(E,E*1.5),m);T.position.set(Math.cos(A)*(i+.05),n+i*.3-w()*.1,Math.sin(A)*(i+.05)),T.rotation.y=-A,T.rotation.x=-.4-w()*.3,e.add(T)}const M=new K({color:1718296,emissive:662026,emissiveIntensity:.05,side:Dt});for(let _=0;_<2;_++){const A=w()*6.28,E=new I(new ve(.15,.25),M);E.position.set(Math.cos(A)*.12,n*.3,Math.sin(A)*.12),E.rotation.y=-A,E.rotation.x=-.8,e.add(E)}return e.position.set(s,0,t),ct.add(e),{group:e,orbMat:l,hazeMat:p,phase:w()*6.28,x:s,z:t}}function w1(s,t){const e=new re,n=2+Math.floor(w()*2),i=new K({color:1710128,roughness:.85,emissive:F.helixStem,emissiveIntensity:.1}),o=new I(new J(.18,8,6),i);o.scale.set(1.2,.5,1.2),o.position.y=.05,e.add(o);const r=[];for(let l=0;l<n;l++){const u=1.5+w()*1,h=.15+w()*.15,d=1.5+w()*1.5,p=w()*6.28,g=[],x=16;for(let U=0;U<=x;U++){const L=U/x,z=p+L*d*6.28,V=h*(.3+L*.7);g.push(new N(Math.cos(z)*V,L*u,Math.sin(z)*V))}const f=new Jr(g),m=new K({color:F.helixStem,emissive:F.helixNode,emissiveIntensity:.12,roughness:.7}),S=new I(new An(f,20,.025+w()*.01,5,!1),m);e.add(S);const M=.1+w()*.08,A=w()<.5?new tf(M,0):new Qh(M,0),E=new K({color:F.helixPod,emissive:F.helixPodGlow,emissiveIntensity:.5+w()*.3,transparent:!0,opacity:.65,roughness:.2,metalness:.2}),T=new I(A,E),b=f.getPoint(1);T.position.copy(b),T.rotation.set(w()*3,w()*3,w()*3),e.add(T),r.push(E);const y=new I(new J(M*2.5,6,4),new Y({color:F.helixPodGlow,transparent:!0,opacity:.05,blending:ce,depthWrite:!1}));y.position.copy(b),e.add(y);const v=1+Math.floor(w()*2);for(let U=0;U<v;U++){const L=.3+w()*.5,z=f.getPoint(L),V=new K({color:F.helixRing,emissive:F.helixPodGlow,emissiveIntensity:.2,transparent:!0,opacity:.45,roughness:.3}),G=new I(new Ae(.1+w()*.08,.008,6,12),V);G.position.copy(z),G.rotation.set(w()*3,w()*3,w()*3),e.add(G)}const R=2+Math.floor(w()*2);for(let U=0;U<R;U++){const L=.2+U/R*.6,z=f.getPoint(L),V=new K({color:F.helixNode,emissive:F.helixPodGlow,emissiveIntensity:.35,transparent:!0,opacity:.5}),G=new I(new J(.025+w()*.015,5,4),V);G.position.copy(z),e.add(G)}}const a=new K({color:F.helixStem,emissive:F.helixNode,emissiveIntensity:.06,roughness:.8}),c=2+Math.floor(w()*2);for(let l=0;l<c;l++){const u=l/c*6.28+w()*.5,h=.3+w()*.4,d=new I(new _t(.006,.015,h,3),a);d.position.set(Math.cos(u)*.12,h*.3,Math.sin(u)*.12),d.rotation.z=(u<3.14?.8:-.8)+w()*.3,d.rotation.y=u,e.add(d)}return e.position.set(s,0,t),ct.add(e),{group:e,podMats:r,phase:w()*6.28}}function S1(s,t){const e=new re,n=.25+w()*.1,i=new K({color:1718309,roughness:.85,emissive:662032,emissiveIntensity:.06});for(let d=0;d<3;d++){const p=d/3*6.28+w()*.5,g=new I(new _t(.01,.035,.25+w()*.15,4),i);g.position.set(Math.cos(p)*n*.6,.06,Math.sin(p)*n*.6),g.rotation.z=p<3.14?1:-1,g.rotation.y=p,e.add(g)}const o=new K({color:F.snapBody,emissive:F.snapBodyGlow,emissiveIntensity:.4,transparent:!0,opacity:.7,roughness:.4,metalness:.1}),r=new I(new J(n,10,8),o);r.position.y=n+.05,r.scale.set(1,.85,1),e.add(r);const a=new K({color:1730116,emissive:F.snapBodyGlow,emissiveIntensity:.25,transparent:!0,opacity:.6}),c=new I(new Ae(n*.45,.02,6,12),a);c.position.y=n*1.7,c.rotation.x=Math.PI/2,e.add(c);const l=5+Math.floor(w()*3),u=[],h=[];for(let d=0;d<l;d++){const p=d/l*6.28+w()*.3,g=w()*6.28,x=3+Math.floor(w()*2),f=.2+w()*.1,m=[],S=new le;S.position.set(Math.cos(p)*n*.6,n*1.4,Math.sin(p)*n*.6),S.rotation.y=p,e.add(S);let M=S;for(let T=0;T<x;T++){const b=T/x,y=.02*(1-b*.6),v=new K({color:F.snapFrond,emissive:F.snapBodyGlow,emissiveIntensity:.08+b*.15,roughness:.6}),R=new I(new _t(y*.7,y,f,4),v);R.position.y=T===0?0:f,R.geometry.translate(0,f/2,0),M.add(R),m.push(R),M=R}const _=new K({color:F.snapTip,emissive:F.snapTipGlow,emissiveIntensity:.6,transparent:!0,opacity:.7,roughness:.2}),A=new I(new J(.025+w()*.015,5,4),_);A.position.y=f,M.add(A),h.push(_);const E=new I(new J(.06,4,3),new Y({color:F.snapTipGlow,transparent:!0,opacity:.04,blending:ce,depthWrite:!1}));A.add(E),u.push({segments:m,baseAngle:p,phaseOffset:g,segLen:f})}return e.position.set(s,0,t),ct.add(e),{group:e,body:r,bodyMat:o,tipMats:h,fronds:u,phase:w()*6.28,x:s,z:t}}function b1(s,t,e,n){for(let i=0;i<s.length;i++){const o=s[i],r=Math.sin(e*1.5+o.phase)*.08;o.body.scale.set(1+r,.85+r*.5,1+r),o.bodyMat.emissiveIntensity=(.3+Math.sin(e*2+o.phase)*.15)*n;for(let a=0;a<o.fronds.length;a++){const c=o.fronds[a],l=1.2+a%3*.3;for(let u=0;u<c.segments.length;u++){const h=c.segments[u],d=.15+u*.12,p=Math.sin(e*l+c.phaseOffset+u*.5)*d,g=Math.cos(e*l*.7+c.phaseOffset+u*.3)*d*.6;h.rotation.z=p,h.rotation.x=g}}for(let a=0;a<o.tipMats.length;a++){const c=Math.sin(e*2.5+o.phase+a*1.2)*.5+.5;o.tipMats[a].emissiveIntensity=(.4+c*.4)*n}}}function T1(s,t,e){const n=new re,i=new K({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:.8,transparent:!0,opacity:.5,roughness:.2,metalness:.1,side:Dt}),o=new I(new J(.5,8,6,0,6.28,0,Math.PI/2),i);o.scale.set(1,.6,1),o.position.y=0,n.add(o);const r=new K({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:1,transparent:!0,opacity:.6}),a=new I(new Ae(.48,.025,5,12),r);a.rotation.x=Math.PI/2,a.position.y=-.02,n.add(a);const c=new I(new J(.2,6,4),new Y({color:F.jellyGlow,transparent:!0,opacity:.7}));c.position.y=-.05,n.add(c);const l=new Y({color:12312063,transparent:!0,opacity:.3});for(let S=-1;S<=1;S+=2){const M=new I(new J(.06,4,3),l);M.scale.set(.6,1.5,.6),M.position.set(S*.08,-.03,0),n.add(M)}const u=new Y({color:15663103,transparent:!0,opacity:.7});for(let S=0;S<5;S++){const M=w()*6.28,_=w()*.8,A=new I(new J(.02,3,3),u);A.position.set(Math.cos(M)*_*.35,.1-_*.15,Math.sin(M)*_*.35),n.add(A)}const h=new K({color:F.jellyTent,emissive:F.jellyGlow,emissiveIntensity:.4,transparent:!0,opacity:.4}),d=new Y({color:F.jellyGlow,transparent:!0,opacity:.6});for(let S=0;S<6;S++){const M=S/6*6.28,_=.4+w()*.6,A=new I(new _t(.015,.008,_,3),h);A.position.set(Math.cos(M)*.25,-_/2-.05,Math.sin(M)*.25),n.add(A);const E=new I(new J(.012,3,3),d);E.position.set(Math.cos(M)*.25,-_-.06,Math.sin(M)*.25),n.add(E)}const p=new Y({color:F.jellyGlow,transparent:!0,opacity:.12});for(let S=0;S<8;S++){const M=S/8*6.28,_=new I(new _t(.002,.002,.4,3),p);_.position.set(Math.cos(M)*.2,.05,Math.sin(M)*.2),_.rotation.z=Math.PI/2-.3,_.rotation.y=-M,n.add(_)}const g=new K({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:.6,transparent:!0,opacity:.4});for(let S=0;S<10;S++){const M=S/10*6.28,_=new I(new J(.02,3,3),g);_.scale.set(1,.5,.8),_.position.set(Math.cos(M)*.46,-.04,Math.sin(M)*.46),n.add(_)}const x=new K({color:F.jellyTent,emissive:F.jellyGlow,emissiveIntensity:.5,transparent:!0,opacity:.35}),f=new I(new _t(.02,.01,.35,4),x);f.position.y=-.2,n.add(f);const m=new Y({color:14548991,transparent:!0,opacity:.4});for(let S=0;S<3;S++){const M=S/3*6.28,_=new I(new J(.008,3,3),m);_.position.set(Math.cos(M)*.25,-.55-w()*.3,Math.sin(M)*.25),n.add(_)}return n.position.set(s,t,e),ct.add(n),{group:n,bellMat:i,phase:w()*6.28,driftAng:w()*6.28,homeX:s,homeZ:e,floatY:t,wobble:.5+w()*.5,_init:!0,_state:"drift",_stT:20+Math.random()*30,_migrateAng:0,_pulseSync:0}}function E1(s,t){const e=new re,n=new K({color:F.puffBody,emissive:F.puffGlow,emissiveIntensity:.3,roughness:.8}),i=new I(new J(.3,8,6),n);i.position.y=.35,e.add(i);const o=new K({color:16773344,emissive:F.puffGlow,emissiveIntensity:.15,roughness:.9}),r=new I(new J(.18,6,4),o);r.scale.set(.7,.9,.3),r.position.set(0,.32,.2),e.add(r);const a=new I(new J(.22,7,5),n);a.position.y=.65,e.add(a);const c=[];for(let A=-1;A<=1;A+=2){const E=new I(new ti(.06,.15,4),n);E.position.set(A*.13,.85,0),E.rotation.z=A*.3,e.add(E),c.push({mesh:E,side:A,baseRotZ:A*.3});const T=new I(new ti(.03,.08,4),new K({color:F.puffCheek,emissive:F.puffCheek,emissiveIntensity:.2}));T.position.set(A*.13,.84,.01),T.rotation.z=A*.3,e.add(T),c.push({mesh:T,side:A,baseRotZ:A*.3})}const l=new Y({color:F.puffEye}),u=[];for(let A=-1;A<=1;A+=2){const E=new I(new J(.035,4,4),l);E.position.set(A*.09,.68,.18),e.add(E),u.push(E);const T=new Y({color:16777215}),b=new I(new J(.012,3,3),T);b.position.set(A*.09+A*.015,.695,.2),e.add(b),u.push(b)}const h=new Y({color:4469555}),d=new I(new J(.015,3,3),h);d.position.set(0,.63,.22),e.add(d);const p=new K({color:F.puffCheek,emissive:F.puffCheek,emissiveIntensity:.3});for(let A=-1;A<=1;A+=2){const E=new I(new J(.04,4,3),p);E.position.set(A*.15,.61,.15),e.add(E)}const g=new Y({color:15654348,transparent:!0,opacity:.5});for(let A=-1;A<=1;A+=2)for(let E=0;E<2;E++){const T=new I(new _t(.002,.002,.06,3),g);T.position.set(A*.12,.62-E*.03,.2),T.rotation.z=A*.7+E*A*.2,T.rotation.x=-.1,e.add(T)}for(let A=-1;A<=1;A+=2){const E=new I(new J(.07,4,3),n);E.position.set(A*.12,.07,.05),E.scale.set(1,.5,1.3),e.add(E);const T=new K({color:16755370,emissive:16746632,emissiveIntensity:.1});for(let b=0;b<3;b++){const y=b/3*6.28,v=new I(new J(.012,3,3),T);v.position.set(A*.12+Math.cos(y)*.03,.03,.05+Math.sin(y)*.03),e.add(v)}}const x=new K({color:16777215,emissive:F.puffGlow,emissiveIntensity:.4,roughness:.9}),f=new I(new J(.06,5,4),x);f.position.set(0,.38,-.28),e.add(f);const m=new K({color:F.puffBody,emissive:F.puffGlow,emissiveIntensity:.2,roughness:1});for(let A=0;A<6;A++){const E=w()*6.28,T=w()*1.2,b=new I(new J(.01,3,3),m);b.position.set(Math.cos(E)*.28,.25+T*.2,Math.sin(E)*.28),e.add(b)}const S=new Y({color:F.puffBody});for(let A=-1;A<=1;A+=2){const E=new I(new _t(.003,.003,.04,3),S);E.position.set(A*.09,.72,.17),E.rotation.z=A*.3,e.add(E)}const M=new Y({color:5583684,transparent:!0,opacity:.5}),_=new I(new _t(.002,.002,.03,3),M);return _.position.set(0,.59,.22),_.rotation.z=Math.PI/2,e.add(_),e.position.set(s,0,t),ct.add(e),{group:e,ears:c,eyes:u,tail:f,phase:w()*6.28,wanderAng:w()*6.28,speed:.6+w()*.8,hopTimer:0,hopPhase:w()*6.28,homeX:s,homeZ:t,state:"idle",idleTimer:w()*3,_init:!0,_followT:0,_scaredT:0,_huddleTarget:-1,_baseY:0,_lastTX:s,_lastTZ:t,_blinkTimer:2+Math.random()*4,_blinkState:0}}function A1(s,t){const e=new re,n=new K({color:F.deerBody,emissive:F.deerGlow,emissiveIntensity:.5,transparent:!0,opacity:.7,roughness:.3}),i=new I(new J(.4,7,5),n);i.scale.set(1,.8,1.5),i.position.y=.9,e.add(i);const o=new K({color:13431039,emissive:F.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.5}),r=new I(new J(.15,5,4),o);r.scale.set(.8,.6,.5),r.position.set(0,.78,.25),e.add(r);const a=new re;a.position.set(0,1.15,.3);const c=new I(new _t(.08,.12,.4,5),n);c.position.set(0,.1,.08),c.rotation.x=-.4,a.add(c);const l=new I(new J(.14,6,5),n);l.position.set(0,.22,.2),a.add(l);const u=new I(new J(.07,4,3),n);u.scale.set(1,.7,1.4),u.position.set(0,.17,.35),a.add(u);const h=new Y({color:2245717}),d=new I(new J(.02,3,3),h);d.position.set(0,.17,.43),a.add(d);const p=new Y({color:F.deerEye});for(let v=-1;v<=1;v+=2){const R=new I(new J(.025,4,3),p);R.position.set(v*.09,.25,.28),a.add(R);const U=new I(new J(.008,3,3),new Y({color:16777215}));U.position.set(v*.085,.26,.29),a.add(U);const L=new Y({color:F.deerBody,transparent:!0,opacity:.5}),z=new I(new _t(.002,.002,.03,3),L);z.position.set(v*.1,.27,.28),z.rotation.z=v*.6,a.add(z)}for(let v=-1;v<=1;v+=2){const R=new I(new ti(.04,.14,4),n);R.position.set(v*.1,.37,.15),R.rotation.z=v*.4,a.add(R)}const g=new K({color:F.deerAntler,emissive:F.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.8});for(let v=-1;v<=1;v+=2){const R=new I(new _t(.015,.02,.25,3),g);R.position.set(v*.08,.42,.12),R.rotation.z=v*.5,a.add(R);const U=new I(new _t(.01,.015,.15,3),g);U.position.set(v*.15,.55,.1),U.rotation.z=v*.8,a.add(U);const L=new I(new _t(.008,.012,.1,3),g);L.position.set(v*.11,.5,.16),L.rotation.z=v*.3,L.rotation.x=-.5,a.add(L);const z=new I(new J(.012,3,3),new Y({color:F.deerGlow,transparent:!0,opacity:.8}));z.position.set(v*.18,.61,.09),a.add(z)}const x=new K({color:F.deerBody,emissive:F.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),f=new I(new _t(.01,.02,.1,3),x);f.position.set(0,.11,.28),f.rotation.x=.3,a.add(f);const m=new Y({color:1122850});for(let v=-1;v<=1;v+=2){const R=new I(new J(.006,3,3),m);R.position.set(v*.02,.16,.42),a.add(R)}e.add(a);const S=[{x:-.15,z:.3,label:"FL"},{x:.15,z:.3,label:"FR"},{x:-.15,z:-.3,label:"BL"},{x:.15,z:-.3,label:"BR"}],M=new K({color:6715272,emissive:F.deerGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),_=[];for(let v=0;v<4;v++){const R=S[v],U=new re;U.position.set(R.x,.65,R.z);const L=new I(new _t(.025,.035,.35,4),n);L.position.y=-.175,U.add(L);const z=new re;z.position.set(0,-.35,0);const V=new I(new _t(.02,.03,.3,4),n);V.position.y=-.15,z.add(V);const G=new I(new _t(.04,.032,.04,4),M);G.position.y=-.3,z.add(G);const j=new K({color:14544639,emissive:F.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),W=new I(new J(.025,3,3),j);W.scale.set(1.3,.5,1.3),W.position.y=-.25,z.add(W),U.add(z),e.add(U),_.push({upper:U,lower:z,isFront:v<2,side:R.x<0?-1:1})}const A=new re;A.position.set(0,1.1,-.55);const E=new I(new ti(.05,.15,4),new K({color:16777215,emissive:F.deerGlow,emissiveIntensity:1,transparent:!0,opacity:.8}));A.add(E),e.add(A);const T=new Y({color:13434862,transparent:!0,opacity:.3});for(let v=0;v<4;v++){const R=new I(new J(.02,3,3),T);R.position.set((w()-.5)*.25,.8+w()*.3,(w()-.5)*.4),e.add(R)}const b=new Y({color:F.deerBody,transparent:!0,opacity:.15});for(let v=0;v<3;v++){const R=new I(new _t(.002,.002,.2,3),b);R.position.set(.3,.85-v*.06,0),R.rotation.z=Math.PI/2+.3,e.add(R)}const y=new K({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.4,roughness:0,metalness:.5});for(let v=0;v<3;v++){const R=new I(new J(.008,3,3),y);R.position.set((w()-.5)*.3,.9+w()*.3,(w()-.5)*.35),e.add(R)}return e.position.set(s,0,t),ct.add(e),{group:e,mat:n,phase:w()*6.28,wanderAng:w()*6.28,speed:.6+w()*.4,walkTimer:0,legCycle:0,homeX:s,homeZ:t,state:"walk",pauseTimer:0,neckPivot:a,legPivots:_,tailPivot:A,fleeTimer:0,headLook:0,headBob:0,_init:!0,_stT:0,_drinkTgt:null,_zigTimer:0,_zigDir:1,_baseY:0,_lastTX:s,_lastTZ:t}}function R1(s,t,e){const n=new re,i=new K({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.3,roughness:.7}),o=new I(new _t(.04,.05,.3,5),i);o.rotation.x=Math.PI/2,n.add(o);const r=new K({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.5,roughness:.6});for(let f=0;f<3;f++){const m=new I(new Ae(.045,.006,4,8),r);m.position.z=-.05+f*.06,m.rotation.x=0,n.add(m)}const a=new I(new J(.05,5,4),i);a.position.z=.18,n.add(a);const c=new K({color:1122867,roughness:.2,metalness:.4});for(let f=-1;f<=1;f+=2){const m=new I(new J(.018,4,3),c);m.position.set(f*.03,.01,.21),n.add(m)}for(let f=-1;f<=1;f+=2){const m=new I(new _t(.005,.005,.15,3),i);m.position.set(f*.03,.03,.22),m.rotation.x=-.6,m.rotation.z=f*.4,n.add(m);const S=new Y({color:F.mothGlow,transparent:!0,opacity:.7}),M=new I(new J(.015,3,3),S);M.scale.set(2,.5,1),M.position.set(f*.05,.12,.28),n.add(M)}const l=new K({color:F.mothWing,emissive:F.mothGlow,emissiveIntensity:.8,transparent:!0,opacity:.6,side:Dt,roughness:.4});n._wingPivots=[];for(let f=-1;f<=1;f+=2){const m=new re;m.position.set(f*.04,0,.02);const S=new I(new J(.2,6,4),l);S.scale.set(1.8,.08,1.2),S.position.set(f*.18,0,.02),m.add(S);const M=new I(new J(.12,5,3),l);M.scale.set(1.5,.06,1),M.position.set(f*.12,0,-.1),m.add(M);const _=new K({color:F.mothWing,emissive:F.mothGlow,emissiveIntensity:.6,transparent:!0,opacity:.45,side:Dt}),A=new I(new ve(.03,.12),_);A.position.set(f*.1,0,-.18),A.rotation.y=f*.2,m.add(A);const E=new Y({color:F.mothSpot,transparent:!0,opacity:.9}),T=new I(new J(.03,4,3),E);T.position.set(f*.2,.02,.03),m.add(T);const b=new I(new J(.018,3,3),E);b.position.set(f*.1,.02,-.08),m.add(b);const y=new Y({color:F.mothGlow,transparent:!0,opacity:.25});for(let v=0;v<2;v++){const R=new I(new _t(.002,.002,.2,3),y);R.position.set(f*.15,.01,-.02+v*.06),R.rotation.z=Math.PI/2+f*(.15+v*.15),m.add(R)}n.add(m),n._wingPivots.push({pivot:m,side:f})}const u=new Y({color:F.mothGlow,transparent:!0,opacity:.25});for(let f=0;f<3;f++){const m=new I(new J(.008,3,3),u);m.position.set((w()-.5)*.04,0,-.15-f*.05),n.add(m)}const h=new Y({color:4473907,transparent:!0,opacity:.5}),d=new I(new Ae(.015,.003,4,8,Math.PI*1.5),h);d.position.set(0,-.02,.2),d.rotation.x=.4,n.add(d);const p=new K({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.4,roughness:1});for(let f=0;f<5;f++){const m=w()*6.28,S=new I(new J(.008,3,3),p);S.position.set(Math.cos(m)*.04,Math.sin(m)*.04,w()*.15-.05),n.add(S)}const g=new Y({color:F.mothBody,transparent:!0,opacity:.4});for(let f=-1;f<=1;f+=2)for(let m=0;m<3;m++){const S=new I(new _t(.002,.002,.06,3),g);S.position.set(f*.04,-.03,-.05+m*.06),S.rotation.z=f*.8,S.rotation.x=-.3,n.add(S)}const x=new Y({color:F.mothGlow,transparent:!0,opacity:.35});for(let f=-1;f<=1;f+=2)for(let m=0;m<5;m++){const S=m/5*Math.PI-Math.PI/2,M=new I(new J(.006,3,3),x);M.position.set(f*(.3+Math.cos(S)*.05),Math.sin(S)*.02,.02+m*.04),n.add(M)}return n.position.set(s,t,e),ct.add(n),{group:n,wingMat:l,phase:w()*6.28,orbitAng:w()*6.28,orbitR:2+w()*4,centerX:s,centerZ:e,floatY:t,flapSpeed:6+w()*4,_init:!0,_state:"patrol",_stT:0,_attractTarget:null,_restTree:null}}function C1(s,t,e){const n=new re,i=new Y({color:F.wispCore}),o=new I(new J(.08,6,4),i);n.add(o);const r=new Y({color:16777215,transparent:!0,opacity:.7,wireframe:!0}),a=new I(new Us(.06,0),r);n.add(a);const c=new Y({color:F.wispGlow,transparent:!0,opacity:.5}),l=new I(new J(.18,6,4),c);n.add(l);const u=new Y({color:F.wispGlow,transparent:!0,opacity:.25}),h=new I(new Ae(.22,.008,4,12),u);h.rotation.x=Math.PI/2,n.add(h);const d=new Y({color:F.wispTrail,transparent:!0,opacity:.15}),p=new I(new J(.35,5,4),d);n.add(p);const g=new Y({color:16777215,transparent:!0,opacity:.8}),x=new I(new J(.02,3,3),g);x.position.set(.15,0,0),n.add(x);const f=[];for(let T=0;T<3;T++){const b=new Y({color:F.wispCore,transparent:!0,opacity:.35}),y=new I(new J(.01,3,3),b);y.position.set((w()-.5)*.1,-.1-T*.08,(w()-.5)*.1),n.add(y),f.push(y)}const m=new Y({color:F.wispGlow,transparent:!0,opacity:.18}),S=[];for(let T=0;T<3;T++){const b=T/3*6.28+w()*.5,y=.15+w()*.1,v=new I(new _t(.003,.001,y,3),m);v.position.set(Math.cos(b)*.1,w()*.08,Math.sin(b)*.1),v.rotation.z=Math.PI/3*(b<3.14?1:-1),v.rotation.y=b,n.add(v),S.push({mesh:v,baseAng:b})}const M=new Y({color:F.wispGlow,transparent:!0,opacity:.12}),_=new I(new Ae(.26,.005,4,10),M);_.rotation.x=1.2,_.rotation.z=.8,n.add(_);const A=new Y({color:16777215,transparent:!0,opacity:.5});for(let T=0;T<4;T++){const b=w()*6.28,y=w()*.8,v=new I(new J(.006,3,3),A);v.position.set(Math.cos(b)*.06,Math.sin(y)*.06,Math.sin(b)*.06),n.add(v)}const E=new Y({color:F.wispCore,transparent:!0,opacity:.2});for(let T=0;T<4;T++){const b=new I(new J(.004,3,3),E);b.position.set(.03+w()*.04,-.05-T*.04,w()*.04),n.add(b)}return n.scale.setScalar(.5),n.position.set(s,t,e),ct.add(n),{group:n,glowMat:c,hazeMat:d,embers:f,tendrils:S,plasmaMat:m,facet:a,halo:h,halo2:_,phase:w()*6.28,targetX:s,targetY:t,targetZ:e,velX:0,velY:0,velZ:0,scatter:0}}function P1(s,t){const e=new re,n=$u,i=8+Math.floor(w()*5),o=new K({color:F.fairyMush,emissive:F.fairyGlow,emissiveIntensity:.2,roughness:.5}),r=new K({color:F.mushStem,roughness:.7,emissive:F.fairyGlow,emissiveIntensity:.05});for(let A=0;A<i;A++){const E=A/i*6.28+w()*.15,T=n+w()*.3-.15,b=.15+w()*.2,y=new I(Pn.mushStem,r);y.scale.setScalar(b),y.position.set(Math.cos(E)*T,b*.3,Math.sin(E)*T),e.add(y);const v=new I(Pn.mushCap,o);v.scale.set(b,b*.4,b),v.position.set(Math.cos(E)*T,b*.55,Math.sin(E)*T),e.add(v);const R=new Y({color:16777215,transparent:!0,opacity:.7}),U=new I(new J(b*.08,3,3),R);U.position.set(Math.cos(E)*T,b*.6,Math.sin(E)*T),e.add(U)}const a=new K({color:8934792,emissive:F.fairyGlow,emissiveIntensity:.1,roughness:.6});for(let A=0;A<5;A++){const E=w()*6.28,T=n+w()*.6-.3,b=.06+w()*.06,y=new I(Pn.mushCap,a);y.scale.set(b,b*.5,b),y.position.set(Math.cos(E)*T,b*.35,Math.sin(E)*T),e.add(y)}const c=new K({color:1725733,emissive:664080,emissiveIntensity:.05,roughness:.9});for(let A=0;A<4;A++){const E=w()*6.28,T=w()*n*.8,b=new I(new J(.08+w()*.08,4,3),c);b.scale.set(1.5,.2,1.5),b.position.set(Math.cos(E)*T,.01,Math.sin(E)*T),e.add(b)}const l=new K({color:4478310,emissive:F.fairyGlow,emissiveIntensity:.05,roughness:.85}),u=new I(new J(.12,5,3),l);u.scale.set(1.2,.3,1),u.position.y=.03,e.add(u);const h=new Y({color:F.fairyGlow,transparent:!0,opacity:.2}),d=[];for(let A=0;A<8;A++){const E=new I(new J(.012,3,3),h),T=(w()-.5)*n*.8,b=(w()-.5)*n*.8;E.position.set(T,.05+w()*.3,b),e.add(E),d.push({mesh:E,baseX:T,baseZ:b,drift:w()*6.28,speed:.2+w()*.3})}const p=new Y({color:F.fairyRing,transparent:!0,opacity:0,side:Dt}),g=new I(new jo(.3,n-.3,16),p);g.rotation.x=-Math.PI/2,g.position.y=.02,e.add(g);const x=new Y({color:F.fairyGlow,transparent:!0,opacity:.08});for(let A=0;A<6;A++){const E=w()*6.28,T=E+.5+w()*1.5,b=n*.6+w()*n*.4,y=new I(new _t(.002,.002,b,3),x);y.position.set(Math.cos((E+T)/2)*n*.4,.005,Math.sin((E+T)/2)*n*.4),y.rotation.x=Math.PI/2,y.rotation.z=E,e.add(y)}const f=new K({color:4864560,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<3;A++){const E=w()*6.28,T=w()*n*.7,b=new I(new J(.03,4,3),f);b.scale.set(1.3,.3,1.3),b.position.set(Math.cos(E)*T,.008,Math.sin(E)*T),e.add(b)}const m=new K({color:7833702,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<2;A++){const E=new I(new $e(.02+w()*.02,4),m);E.position.set((w()-.5)*.08,.06,(w()-.5)*.06),E.rotation.x=-Math.PI/2+w()*.4,e.add(E)}const S=[];for(let A=0;A<5;A++){const E=w()*6.28,T=w()*n*.9,b=new Y({color:8978346,transparent:!0,opacity:.25}),y=new I(new J(.005,3,3),b);y.position.set(Math.cos(E)*T,.01,Math.sin(E)*T),e.add(y),S.push(y)}const M=new Y({color:657926,transparent:!0,opacity:.15,side:Dt}),_=new I(new jo(n*.5,n*.85,12),M);return _.rotation.x=-Math.PI/2,_.position.y=.008,e.add(_),e.position.set(s,0,t),ct.add(e),{group:e,mushMat:o,discMat:p,sporeMat:h,spores:d,glowWorms:S,x:s,z:t,ringR:n,phase:w()*6.28,glowIntensity:0,active:!1}}function I1(s,t,e){const n=new re,i=new K({color:F.bubbleIris,emissive:F.bubbleIris,emissiveIntensity:.15,transparent:!0,opacity:.25,roughness:0,metalness:.6}),o=new I(Pn.bubble,i);n.add(o);const r=new Y({color:15650047,transparent:!0,opacity:.1}),a=new I(new Ae(.13,.003,4,10),r);a.rotation.x=.5,a.rotation.y=w()*3,n.add(a);const c=new I(new Ae(.11,.003,4,10),r);c.rotation.x=-.8,c.rotation.z=1.2,n.add(c);const l=new Y({color:F.bubbleShine,transparent:!0,opacity:.5}),u=new I(new J(.04,4,3),l);u.position.set(.05,.07,.08),n.add(u);const h=new Y({color:15658751,transparent:!0,opacity:.2}),d=new I(new J(.025,3,3),h);d.position.set(-.06,-.04,-.06),n.add(d);const p=new Y({color:16755438,transparent:!0,opacity:.12}),g=new I(new J(.06,4,3),p);g.position.set(.02,-.02,.01),n.add(g);const x=new Y({color:16772863,transparent:!0,opacity:.08}),f=new I(new J(.12,5,4),x);n.add(f);const m=[16764125,13426175,14548940];for(let b=0;b<3;b++){const y=new Y({color:m[b],transparent:!0,opacity:.06}),v=new I(new Ae(.14-b*.02,.002,4,8),y);v.position.y=-.04+b*.04,v.rotation.x=Math.PI/2,n.add(v)}const S=new Y({color:16777215,transparent:!0,opacity:.6});for(let b=0;b<3;b++){const y=w()*6.28,v=w()*Math.PI-Math.PI/2,R=new I(new J(.003,3,3),S);R.position.set(Math.cos(y)*Math.cos(v)*.14,Math.sin(v)*.14,Math.sin(y)*Math.cos(v)*.14),n.add(R)}const M=new Y({color:11189196,transparent:!0,opacity:.1}),_=new I(new J(.015,3,3),M);_.position.set((w()-.5)*.04,(w()-.5)*.04,(w()-.5)*.04),n.add(_);const A=new Y({color:F.bubbleIris,transparent:!0,opacity:.15}),E=new I(new J(.04,4,3),A);E.scale.set(1.3,.6,1.3),E.position.y=-.12,n.add(E);const T=.6+w()*.8;return n.scale.setScalar(T),n.position.set(s,t,e),ct.add(n),{group:n,shellMat:i,phase:w()*6.28,driftAng:w()*6.28,driftSpeed:.3+w()*.5,floatY:t,homeX:s,homeZ:e,bobAmp:.3+w()*.4,popped:!1,popTimer:0,sc:T}}function L1(s,t){const e=new re,n=1.5+w()*1,i=new K({color:329746,roughness:.9}),o=new I(new $e(n*.85,10),i);o.rotation.x=-Math.PI/2,o.position.y=.005,e.add(o);const r=new K({color:F.pondWater,emissive:F.pondGlow,emissiveIntensity:.2,transparent:!0,opacity:.55,roughness:.05,metalness:.4}),a=new I(new $e(n,12),r);a.rotation.x=-Math.PI/2,a.position.y=.03,e.add(a);const c=new K({color:3816002,roughness:.85}),l=5+Math.floor(w()*4);for(let L=0;L<l;L++){const z=L/l*6.28+w()*.3,V=n+w()*.2-.1,G=.06+w()*.08,j=new I(new J(G,4,3),c);j.scale.set(1+w()*.5,.4+w()*.3,1+w()*.5),j.position.set(Math.cos(z)*V,G*.2,Math.sin(z)*V),j.rotation.set(w(),w(),w()),e.add(j)}const u=new K({color:1725728,roughness:.7,side:Dt});for(let L=0;L<3;L++){const z=w()*6.28,V=n*.85+w()*.2;for(let G=0;G<3;G++){const j=new I(new ve(.015,.15+w()*.1),u);j.position.set(Math.cos(z)*V+(w()-.5)*.05,.08,Math.sin(z)*V+(w()-.5)*.05),j.rotation.y=w()*3,j.rotation.x=-.2,e.add(j)}}const h=new Y({color:11197934,transparent:!0,opacity:.08}),d=[];for(let L=0;L<3;L++){const z=new I(new Ae(1,.004,4,20),h.clone());z.rotation.x=Math.PI/2,z.position.y=.036,e.add(z),d.push({mesh:z,phase:L/3})}const p=new K({color:F.lilyPad,roughness:.6,side:Dt}),g=4+Math.floor(w()*2),x=[];for(let L=0;L<g;L++){const z=w()*6.28,V=w()*n*.6,G=.15+w()*.15,j=new I(new $e(G,8),p);j.rotation.x=-Math.PI/2,j.position.set(Math.cos(z)*V,.05,Math.sin(z)*V),e.add(j);const W=new Y({color:1724448,transparent:!0,opacity:.3}),lt=new I(new _t(.002,.002,G*1.5,3),W);lt.position.set(Math.cos(z)*V,.052,Math.sin(z)*V),lt.rotation.x=Math.PI/2,lt.rotation.z=w()*3,e.add(lt),x.push({mesh:j,phase:w()*6.28})}const f=new K({color:F.lilyFlower,emissive:F.lilyGlow,emissiveIntensity:.4,transparent:!0,opacity:.85,side:Dt}),m=.08;for(let L=0;L<6;L++){const z=L/6*6.28,V=new I(new ve(.06,.05),f);V.position.set(x[0].mesh.position.x+Math.cos(z)*.05,m,x[0].mesh.position.z+Math.sin(z)*.05),V.rotation.x=-1,V.rotation.y=-z,e.add(V)}const S=new K({color:16777130,emissive:F.lilyGlow,emissiveIntensity:.8}),M=new I(new J(.025,4,3),S);if(M.position.set(x[0].mesh.position.x,m+.02,x[0].mesh.position.z),e.add(M),x.length>2){const L=new K({color:F.lilyFlower,emissive:F.lilyGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),z=new I(new J(.03,5,4),L);z.scale.set(.8,1.2,.8),z.position.set(x[2].mesh.position.x,.09,x[2].mesh.position.z),e.add(z)}const _=new K({color:3815477,roughness:.8,transparent:!0,opacity:.5});for(let L=0;L<5;L++){const z=w()*6.28,V=w()*n*.7,G=new I(new J(.02+w()*.025,4,3),_);G.scale.set(1+w()*.5,.4,1+w()*.5),G.position.set(Math.cos(z)*V,.015,Math.sin(z)*V),e.add(G)}const A=new Y({color:2761752,transparent:!0,opacity:.12,side:Dt});for(let L=0;L<3;L++){const z=w()*6.28,V=w()*n*.5,G=new I(new $e(.08+w()*.06,5),A);G.rotation.x=-Math.PI/2,G.position.set(Math.cos(z)*V,.012,Math.sin(z)*V),e.add(G)}const E=new K({color:1122837,roughness:.7,transparent:!0,opacity:.4}),T=[];for(let L=0;L<2;L++){const z=w()*6.28,V=w()*n*.4,G=new I(new J(.012,4,3),E);G.scale.set(.8,.5,1.3),G.position.set(Math.cos(z)*V,.04,Math.sin(z)*V),e.add(G);const j=new I(new _t(.002,.001,.025,3),E);j.position.set(Math.cos(z)*V-Math.cos(z)*.02,.04,Math.sin(z)*V-Math.sin(z)*.02),j.rotation.z=Math.PI/2,j.rotation.y=z,e.add(j),T.push({body:G,tail:j,ang:z,orbR:.15+w()*n*.35,speed:.3+w()*.4})}const b=new Y({color:2250016,transparent:!0,opacity:.1,side:Dt});for(let L=0;L<3;L++){const z=w()*6.28,V=n*.7+w()*n*.25,G=new I(new $e(.06+w()*.04,5),b);G.rotation.x=-Math.PI/2,G.position.set(Math.cos(z)*V,.032,Math.sin(z)*V),e.add(G)}const y=new Y({color:13426158,transparent:!0,opacity:.06}),v=new I(new Ae(n-.05,.01,4,16),y);v.rotation.x=Math.PI/2,v.position.y=.035,e.add(v);const R=new K({color:4861976,roughness:.8,side:Dt,transparent:!0,opacity:.6}),U=new I(new $e(.03,5),R);return U.rotation.x=-Math.PI/2,U.position.set((w()-.5)*n*.5,.04,(w()-.5)*n*.5),e.add(U),e.position.set(s,0,t),ct.add(e),{group:e,waterMat:r,flMat:f,pads:x,ripples:d,tadpoles:T,x:s,z:t,phase:w()*6.28,pondR:n}}function D1(s,t){const e=new re,n=new Y({color:F.orbGold}),i=new I(new J(.2,10,8),n);e.add(i);const o=new Y({color:16777215}),r=new I(new J(.06,6,4),o);e.add(r);const a=new Y({color:16772744,transparent:!0,opacity:.4,wireframe:!0}),c=new I(new Us(.15,0),a);e.add(c);const l=new Y({color:F.orbGlow,transparent:!0,opacity:.5}),u=new I(new J(.35,8,6),l);e.add(u);const h=new Y({color:F.orbGlow,transparent:!0,opacity:.3});for(let T=0;T<8;T++){const b=T/8*6.28,y=new I(new ti(.02,.25,3),h);y.position.set(Math.cos(b)*.3,Math.sin(b*2)*.05,Math.sin(b)*.3),y.rotation.z=-b+Math.PI/2,y.rotation.y=b,e.add(y)}const d=new Y({color:F.orbInner,transparent:!0,opacity:.15}),p=new I(new J(.6,8,5),d);e.add(p);for(let T=0;T<6;T++){const b=new I(new J(.03,4,3),new Y({color:16777215})),y=T/6*6.28;b.position.set(Math.cos(y)*.4,Math.sin(y*2)*.1,Math.sin(y)*.4),e.add(b)}const g=new Y({color:F.orbGold,transparent:!0,opacity:.7});for(let T=0;T<4;T++){const b=T/4*6.28+.4,y=new I(new J(.015,3,3),g);y.position.set(Math.cos(b)*.5,0,Math.sin(b)*.5),e.add(y)}const x=new Y({color:16768426,transparent:!0,opacity:.12});for(let T=0;T<3;T++){const b=new I(new Ae(.28,.003,4,12),x);b.rotation.set(T*1.05,T*.7,0),e.add(b)}const f=new Y({color:F.orbGlow,transparent:!0,opacity:.08}),m=new I(new Ae(.4,.004,4,16),f);m.rotation.x=Math.PI/2,e.add(m);const S=new Y({color:16772812,transparent:!0,opacity:.15}),M=new I(new Ae(.25,.012,4,10),S);M.rotation.x=Math.PI/2,e.add(M);const _=new Y({color:16777215,transparent:!0,opacity:.5});for(let T=0;T<6;T++){const b=w()*6.28,y=w()*Math.PI-Math.PI/2,v=new I(new J(.008,3,3),_);v.position.set(Math.cos(b)*Math.cos(y)*.2,Math.sin(y)*.2,Math.sin(b)*Math.cos(y)*.2),e.add(v)}const A=new Y({color:F.orbGlow,transparent:!0,opacity:.1,side:Dt}),E=new I(new $e(.5,8),A);return E.rotation.x=-Math.PI/2,E.position.y=-.95,e.add(E),e.position.set(s,1,t),ct.add(e),{group:e,coreMat:n,glowMat:l,hazeMat:d,x:s,z:t,found:!1,flyUp:!1,flyY:1,phase:w()*6.28,laserLine:null,laserMat:null}}function U1(s,t){const e=new re,n=new K({color:F.rockBase,roughness:.85,metalness:.05}),i=new K({color:F.rockLight,roughness:.8,metalness:.05}),o=new K({color:F.rockMoss,emissive:F.rockMoss,emissiveIntensity:.03,roughness:.9}),r=.3+w()*.5,a=new I(new J(r,8,6),w()<.6?n:i),c=.4+w()*.4;a.scale.set(1+w()*.6,c,1+w()*.6),a.position.y=r*c*.35,a.rotation.set(w()*.5,w()*3,w()*.3),a.castShadow=!0,a.receiveShadow=!0,e.add(a);const l=1+Math.floor(w()*3);for(let E=0;E<l;E++){const T=w()*6.28,b=r*.6+w()*r*.5,y=r*.3+w()*r*.4,v=new I(new J(y,5,4),w()<.5?n:i),R=.3+w()*.4;v.scale.set(1+w()*.5,R,1+w()*.5),v.position.set(Math.cos(T)*b,y*R*.3,Math.sin(T)*b),v.rotation.set(w()*.8,w()*3,w()*.5),e.add(v)}const u=2+Math.floor(w()*3);for(let E=0;E<u;E++){const T=w()*6.28,b=w()*r*.6,y=r*.15+w()*r*.2,v=new I(new J(y,4,3),o);v.scale.set(1.5,.2,1.5),v.position.set(Math.cos(T)*b,r*.35+w()*.05,Math.sin(T)*b),e.add(v)}const h=[8943428,10061909,6715221,11180390];for(let E=0;E<3;E++){const T=new K({color:h[Math.floor(w()*h.length)],roughness:.9,transparent:!0,opacity:.5}),b=w()*6.28,y=new I(new J(r*.06+w()*r*.08,3,3),T);y.scale.set(2,.15,2),y.position.set(Math.cos(b)*r*.5,r*.25+w()*.1,Math.sin(b)*r*.5),e.add(y)}const d=new Y({color:1381656,transparent:!0,opacity:.35}),p=2+Math.floor(w()*3);for(let E=0;E<p;E++){const T=w()*6.28,b=r*.3+w()*r*.4,y=new I(new _t(.003,.001,b,3),d),v=r*.3+w()*r*.2;y.position.set(Math.cos(T)*v,r*.2+w()*r*.15,Math.sin(T)*v),y.rotation.set(w()*.5,T,Math.PI/2+w()*.4),e.add(y)}const g=new Y({color:660752,transparent:!0,opacity:.2,side:Dt}),x=1+Math.floor(w()*2);for(let E=0;E<x;E++){const T=w()*6.28,b=r*.3+w()*r*.3,y=new I(new ve(.02+w()*.015,b),g);y.position.set(Math.cos(T)*r*.45,r*.15,Math.sin(T)*r*.45),y.rotation.y=-T,e.add(y)}const f=[],m=new Y({color:8965375,transparent:!0,opacity:.4});if(w()<.5){const E=2+Math.floor(w()*3);for(let T=0;T<E;T++){const b=w()*6.28,y=r*.25+w()*r*.25,v=new I(new J(.006,3,3),m);v.position.set(Math.cos(b)*y,r*.15+w()*r*.2,Math.sin(b)*y),e.add(v),f.push(v)}}const S=new Y({color:657926,transparent:!0,opacity:.12,side:Dt}),M=new I(new jo(r*.5,r*1,8),S);M.rotation.x=-Math.PI/2,M.position.y=.005,e.add(M);const _=new K({color:3816e3,roughness:.9}),A=4+Math.floor(w()*3);for(let E=0;E<A;E++){const T=w()*6.28,b=r*.5+w()*r*.6,y=.03+w()*.05,v=new I(new J(y,3,3),_);v.scale.set(1+w()*.5,.4,1+w()*.5),v.position.set(Math.cos(T)*b,y*.15,Math.sin(T)*b),e.add(v)}if(w()<.6){const E=new K({color:3385941,emissive:F.grassTip,emissiveIntensity:.05,roughness:.7,side:Dt});for(let T=0;T<3;T++){const b=w()*6.28,y=new I(new ve(.015,.08+w()*.06),E);y.position.set(Math.cos(b)*r*.3,r*.3,Math.sin(b)*r*.3),y.rotation.y=w()*3,y.rotation.x=-.2-w()*.3,e.add(y)}}return e.position.set(s,0,t),ct.add(e),{group:e,x:s,z:t,colR:r*.8,sparkles:f,sparkleMat:m}}let y0=null,w0=null,S0=null,b0=null,fh=[];function N1(){return y0}function z1(){return w0}function F1(){return S0}function O1(){return b0}function B1(){return fh}function k1(){const s=new re,t=new K({color:F.obeliskBlack,roughness:.2,metalness:.8,emissive:F.obeliskPink,emissiveIntensity:0});w0=t;const e=new I(new _t(1.2,1.8,be,4),t);e.position.y=be/2,e.rotation.y=Math.PI/4,e.castShadow=!0,s.add(e);const n=new Y({color:3351108,transparent:!0,opacity:.2});for(let b=0;b<4;b++){const y=b/4*6.28+Math.PI/4,v=new I(new _t(.03,.04,be*.9,3),n);v.position.set(Math.cos(y)*1.55,be*.45,Math.sin(y)*1.55),s.add(v)}const i=new Y({color:F.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<4;b++){const y=b/4*6.28+Math.PI/4;for(let R=0;R<3;R++){const U=6+R*4,L=new I(new _t(.015,.015,.8,3),i);L.position.set(Math.cos(y)*1.6,U,Math.sin(y)*1.6),L.rotation.z=Math.PI/2,L.rotation.y=-y,L.visible=!1,s.add(L)}const v=new I(new _t(.012,.012,2.5,3),i);v.position.set(Math.cos(y)*1.6,12,Math.sin(y)*1.6),v.visible=!1,s.add(v)}const o=new K({color:F.obeliskBlack,roughness:.1,metalness:.9,emissive:F.obeliskPink,emissiveIntensity:0});S0=o;const r=new I(new ti(1.3,3,4),o);r.position.y=be+1.5,r.rotation.y=Math.PI/4,s.add(r);const a=new Y({color:F.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<4;b++){const y=b/4*6.28+Math.PI/4,v=new I(new _t(.02,.02,3.2,3),a);v.position.set(Math.cos(y)*.8,be+1.5,Math.sin(y)*.8),v.rotation.z=.35*(y<3.14?1:-1),v.rotation.y=-y,v.visible=!1,s.add(v)}for(let b=0;b<5;b++){const y=new I(new Ae(1.85-b*.02,.04,6,4),new Y({color:2236979}));y.position.y=4+b*5,y.rotation.x=Math.PI/2,s.add(y)}const c=new K({color:1118488,roughness:.3,metalness:.7}),l=new I(new _t(2.2,2.5,.6,4),c);l.position.y=.3,l.rotation.y=Math.PI/4,s.add(l);const u=new I(new _t(2.8,3,.4,4),c);u.position.y=.05,u.rotation.y=Math.PI/4,s.add(u);const h=new Y({color:F.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<8;b++){const y=b/8*6.28,v=new I(new J(.06,4,3),h);v.position.set(Math.cos(y)*2.5,be*.7+b*.5,Math.sin(y)*2.5),v.visible=!1,s.add(v)}const d=new Y({color:1710626,transparent:!0,opacity:.08});for(let b=0;b<6;b++){const y=w()*6.28,v=2+w()*be*.7,R=new I(new _t(.008,.008,.5+w()*.5,3),d);R.position.set(Math.cos(y)*1.6,v,Math.sin(y)*1.6),R.rotation.z=(w()-.5)*.8,R.rotation.y=-y,s.add(R)}const p=new K({color:921108,roughness:.5,metalness:.4});for(let b=0;b<12;b++){const y=w()*6.28,v=3+w()*2,R=.15+w()*.25,U=new I(new J(R,4,3),p);U.scale.set(1+w()*.5,.3+w()*.3,1+w()*.5),U.position.set(Math.cos(y)*v,R*.15,Math.sin(y)*v),U.rotation.set(w(),w(),w()),s.add(U)}const g=new Y({color:F.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<4;b++){const y=b/4*6.28+Math.PI/4;for(let v=0;v<5;v++){const R=5+v*3.5+w()*.5,U=(w()-.5)*.4,L=new I(new J(.04,4,3),g);L.position.set(Math.cos(y)*1.58+Math.cos(y+1.57)*U,R,Math.sin(y)*1.58+Math.sin(y+1.57)*U),L.visible=!1,s.add(L)}}const x=new Y({color:F.obeliskPink,transparent:!0,opacity:.8,blending:ce,depthWrite:!1}),f=new I(new J(.5,12,8),x);f.position.y=be+3,s.add(f);const m=new Y({color:F.obeliskPink,transparent:!0,opacity:.2,blending:ce,depthWrite:!1}),S=new I(new J(.9,8,6),m);S.position.y=be+3,s.add(S),b0={mesh:f,haze:S,mat:x,hazeMat:m},fh=[];const M=[.8,1.1,1.4,1.8],_=[11158783,10040302,12277247,8921821];for(let b=0;b<4;b++){const y=new Y({color:_[b],transparent:!0,opacity:.4,blending:ce,depthWrite:!1,side:Dt}),v=new I(new Ae(M[b],.02,6,24),y);v.position.y=be+3,v.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),s.add(v),fh.push({mesh:v,mat:y,rx:(Math.random()-.5)*2,ry:(Math.random()-.5)*2,rz:(Math.random()-.5)*1.5})}const A=new Y({color:0,transparent:!0,opacity:.15,side:Dt}),E=new I(new $e(4,8),A);E.rotation.x=-Math.PI/2,E.position.y=.005,s.add(E),s.position.set(0,-be,0),ct.add(s),y0=s;const T=new er(8939212,0,30);s.add(T),T.position.set(0,be+1,0)}let T0=null,E0=null;function G1(){return T0}function H1(){return E0}function V1(){const s=new K({color:F.moatBlue,emissive:1136042,emissiveIntensity:.3,transparent:!0,opacity:0,roughness:.1,metalness:.3});E0=s;const t=new yc;t.absarc(0,0,6,0,6.28,!1);const e=new _c;e.absarc(0,0,3,0,6.28,!0),t.holes.push(e);const n=new Hr(t,24),i=new I(n,s);i.rotation.x=-Math.PI/2,i.position.y=.05,i.visible=!1,ct.add(i),T0=i;const o=new Y({color:4491468,transparent:!0,opacity:0});for(let p=0;p<12;p++){const g=p/12*6.28+w()*.3,x=3.5+w()*2,f=new I(new J(.04+w()*.04,4,3),o);f.scale.set(1.2,.4,1.2),f.position.set(Math.cos(g)*x,.02,Math.sin(g)*x),f.visible=!1,ct.add(f)}const r=new Y({color:13426158,transparent:!0,opacity:0,side:Dt});for(let p=0;p<6;p++){const g=p/6*6.28+w()*.5,x=new I(new $e(.12+w()*.1,5),r);x.rotation.x=-Math.PI/2,x.position.set(Math.cos(g)*3.3,.06,Math.sin(g)*3.3),x.visible=!1,ct.add(x)}const a=new Y({color:8960989,transparent:!0,opacity:0});for(let p=0;p<8;p++){const g=p/8*6.28,x=4+w()*1.5,f=new I(new _t(.003,.003,.4,3),a);f.position.set(Math.cos(g)*x,.055,Math.sin(g)*x),f.rotation.x=Math.PI/2,f.rotation.z=g+Math.PI/2,f.visible=!1,ct.add(f)}const c=new Y({color:264208,transparent:!0,opacity:0,side:Dt}),l=new yc;l.absarc(0,0,5.2,0,6.28,!1);const u=new _c;u.absarc(0,0,3.8,0,6.28,!0),l.holes.push(u);const h=new Hr(l,16),d=new I(h,c);d.rotation.x=-Math.PI/2,d.position.y=.04,d.visible=!1,ct.add(d)}const qr=[];function qd(s,t,e,n,i){const o=[],r=[],a=[];for(let l=0;l<e;l++){const u=s[l],h=s[l+1],d=h.x-u.x;h.y-u.y;const p=h.z-u.z,g=Math.sqrt(d*d+p*p)||1,x=-p/g,f=d/g,m=(l+.5)/e,S=.7+Math.sin(m*Math.PI)*.5,M=t*S/2,_=[u.x+x*M,u.y,u.z+f*M],A=[u.x-x*M,u.y,u.z-f*M],E=[h.x+x*M,h.y,h.z+f*M],T=[h.x-x*M,h.y,h.z-f*M];o.push(..._,...E,...A,...A,...E,...T);const b=l/e,y=(l+1)/e;if(a.push(b,0,y,0,b,1,b,1,y,0,y,1),i){const U=.85+Math.sin(m*Math.PI*3)*.15,L=1.2*U,z=.6*U;r.push(i.r*L,i.g*L,i.b*L),r.push(i.r*L,i.g*L,i.b*L),r.push(i.r*z,i.g*z,i.b*z),r.push(i.r*z,i.g*z,i.b*z),r.push(i.r*L,i.g*L,i.b*L),r.push(i.r*z,i.g*z,i.b*z)}}const c=new we;return c.setAttribute("position",new Ht(o,3)),c.setAttribute("uv",new Ht(a,2)),r&&c.setAttribute("color",new Ht(r,3)),c.computeVertexNormals(),c}function W1(){for(let c=0;c<6;c++){const l=F.rainbow[c],u=c/6*6.28,h=6+c*.8,d=be+6+c*2.5,p=1-c*.05,g=[],x=32;for(let V=0;V<=x;V++){const G=V/x,j=u+G*Math.PI,W=Math.cos(j)*h,lt=Math.sin(j)*h,pt=Math.sin(G*Math.PI)*d;g.push(new N(W,pt,lt))}const f=new ot(l),m=qd(g,p,x,!0,f),S=new Y({vertexColors:!0,transparent:!0,opacity:0,side:Dt,depthWrite:!1,blending:ce}),M=new I(m,S);M.visible=!1,ct.add(M);const _=new Jr(g),A=new Y({color:16777215,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),E=new An(_,x,.03,4,!1),T=new I(E,A);T.visible=!1,ct.add(T);const b=[],y=new Y({color:16777215,transparent:!0,opacity:0,blending:ce,depthWrite:!1});for(let V=0;V<8;V++){const G=new I(new J(.06,4,3),y.clone());G.visible=!1,ct.add(G),b.push({mesh:G,mat:G.material,phase:V/8,speed:.15+Math.random()*.1})}const v=new Y({color:l,transparent:!0,opacity:0,side:Dt,blending:ce}),R=g[0],U=g[g.length-1],L=new I(new $e(1.2,8),v);L.rotation.x=-Math.PI/2,L.position.set(R.x,.03,R.z),L.visible=!1,ct.add(L);const z=new I(new $e(1.2,8),v.clone());z.rotation.x=-Math.PI/2,z.position.set(U.x,.03,U.z),z.visible=!1,ct.add(z),qr.push({mesh:M,mat:S,coreLine:T,coreMat:A,curve:_,sparkles:b,pools:[L,z],poolMat:v,targetOpacity:0})}const s=[],t=10,e=be+14,n=32;for(let c=0;c<=n;c++){const l=c/n,u=l*Math.PI;s.push(new N(Math.cos(u)*t,Math.sin(l*Math.PI)*e,Math.sin(u)*t))}const i=new ot(15654399),o=qd(s,1.5,n,!0,i),r=new Y({vertexColors:!0,transparent:!0,opacity:0,side:Dt,depthWrite:!1,blending:ce}),a=new I(o,r);a.visible=!1,ct.add(a),qr.push({mesh:a,mat:r,targetOpacity:0})}function X1(s){for(let t=0;t<qr.length;t++){const e=qr[t];if(!(!e.sparkles||!e.curve)&&e.mesh.visible){e.coreLine&&(e.coreLine.visible=e.mesh.visible,e.coreMat.opacity=e.mat.opacity*.4);for(let n=0;n<e.sparkles.length;n++){const i=e.sparkles[n];i.phase+=i.speed*.016,i.phase>1&&(i.phase-=1);const o=e.curve.getPoint(i.phase);i.mesh.position.copy(o),i.mesh.visible=e.mesh.visible;const r=Math.sin(s*8+n*2.1)*.5+.5;i.mat.opacity=e.mat.opacity*r*.7}if(e.pools)for(let n=0;n<e.pools.length;n++)e.pools[n].visible=e.mesh.visible,e.poolMat&&(e.poolMat.opacity=e.mat.opacity*.3)}}}let vn=null;const hi=[],hn=new le,Ur=new ot;function q1(s){const t=new Y({color:16777215,transparent:!0,opacity:1});vn=new Qn(Pn.fly,t,s),vn.instanceMatrix.setUsage(xe),vn.instanceColor=new Ti(new Float32Array(s*3),3),vn.instanceColor.setUsage(xe),hn.scale.setScalar(0),hn.updateMatrix();for(let e=0;e<s;e++){vn.setMatrixAt(e,hn.matrix);const n=e%3===0?F.fireflyB:F.firefly;Ur.setHex(n),vn.setColorAt(e,Ur),hi.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,phase:Math.random()*6.28,wander:Math.random()*6.28,colorHex:n})}vn.count=s,vn.frustumCulled=!1,ct.add(vn)}function sc(s,t,e,n){let i=null;for(let o=0;o<hi.length;o++)if(!hi[o].active){i=hi[o];break}if(!i){let o=1/0;for(let r=0;r<hi.length;r++)hi[r].life<o&&(o=hi[r].life,i=hi[r])}i.x=s,i.y=t+.5+Math.random()*3,i.z=e,i.vx=(Math.random()-.5)*2,i.vy=Math.random()-.5,i.vz=(Math.random()-.5)*2,i.life=n,i.max=n,i.active=!0,i.wander=Math.random()*6.28}function A0(s,t){let e=0,n=!1;for(let i=0;i<hi.length;i++){const o=hi[i];if(!o.active){hn.position.set(0,-100,0),hn.scale.setScalar(0),hn.updateMatrix(),vn.setMatrixAt(i,hn.matrix);continue}if(o.life-=s,o.life<=0){o.active=!1,hn.position.set(0,-100,0),hn.scale.setScalar(0),hn.updateMatrix(),vn.setMatrixAt(i,hn.matrix);continue}e++,o.wander+=(Math.random()-.5)*3*s,o.vx+=Math.cos(o.wander)*1.5*s,o.vz+=Math.sin(o.wander)*1.5*s,o.vy+=Math.sin(t*2+o.phase)*s,o.vx*=.995,o.vy*=.995,o.vz*=.995,o.x+=o.vx*s,o.y+=o.vy*s,o.z+=o.vz*s;const r=Yt(o.x,o.z)+.3;o.y<r&&(o.y=r,o.vy=Math.abs(o.vy)*.5),o.y>12&&(o.vy-=2*s);const a=Math.sin(t*3+o.phase)*.5+.5,l=o.life/o.max*(.4+a*.6),u=.6+a*.6;hn.position.set(o.x,o.y,o.z),hn.scale.setScalar(u),hn.updateMatrix(),vn.setMatrixAt(i,hn.matrix),Ur.setHex(o.colorHex),Ur.multiplyScalar(l),vn.setColorAt(i,Ur),n=!0}return vn.instanceMatrix.needsUpdate=!0,n&&(vn.instanceColor.needsUpdate=!0),e}let Mn=null;const fi=[],fn=new le,Rc=new ot,Y1=new ot(F.spore);function Z1(s){const t=new Y({color:16777215,transparent:!0,opacity:1});Mn=new Qn(Pn.spore,t,s),Mn.instanceMatrix.setUsage(xe),Mn.instanceColor=new Ti(new Float32Array(s*3),3),Mn.instanceColor.setUsage(xe),fn.scale.setScalar(0),fn.updateMatrix();for(let e=0;e<s;e++)Mn.setMatrixAt(e,fn.matrix),Rc.setHex(F.spore),Mn.setColorAt(e,Rc),fi.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});Mn.count=s,Mn.frustumCulled=!1,ct.add(Mn)}function $1(s,t,e){let n=null;for(let i=0;i<fi.length;i++)if(!fi[i].active){n=fi[i];break}if(!n){let i=1/0;for(let o=0;o<fi.length;o++)fi[o].life<i&&(i=fi[o].life,n=fi[o])}n.x=s,n.y=t,n.z=e,n.vx=(Math.random()-.5)*.3,n.vy=.4+Math.random()*.4,n.vz=(Math.random()-.5)*.3,n.life=3+Math.random()*3,n.max=n.life,n.active=!0}let R0=0,C0=0;function j1(s,t){R0=s,C0=t}function K1(s){let t=0,e=!1;for(let n=0;n<fi.length;n++){const i=fi[n];if(!i.active){fn.position.set(0,-100,0),fn.scale.setScalar(0),fn.updateMatrix(),Mn.setMatrixAt(n,fn.matrix);continue}if(i.life-=s,i.life<=0){i.active=!1,fn.position.set(0,-100,0),fn.scale.setScalar(0),fn.updateMatrix(),Mn.setMatrixAt(n,fn.matrix);continue}t++,i.vy+=.3*s,i.vx+=R0*.3*s,i.vz+=C0*.3*s,i.vx*=.997,i.vy*=.997,i.vz*=.997,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s;const o=i.life/i.max*.7;fn.position.set(i.x,i.y,i.z),fn.scale.setScalar(1),fn.updateMatrix(),Mn.setMatrixAt(n,fn.matrix),Rc.copy(Y1).multiplyScalar(o),Mn.setColorAt(n,Rc),e=!0}return Mn.instanceMatrix.needsUpdate=!0,e&&(Mn.instanceColor.needsUpdate=!0),t}let _n=null;const zo=[];let Fl=0;const dn=new le,Cc=new ot,P0=new ot(F.starMote);function J1(s){const t=new Y({color:16777215,transparent:!0,opacity:1});_n=new Qn(Pn.starMote,t,s),_n.instanceMatrix.setUsage(xe),_n.instanceColor=new Ti(new Float32Array(s*3),3),_n.instanceColor.setUsage(xe),dn.scale.setScalar(0),dn.updateMatrix();for(let e=0;e<s;e++)_n.setMatrixAt(e,dn.matrix),Cc.copy(P0),_n.setColorAt(e,Cc),zo.push({x:0,y:0,z:0,life:0,max:0,active:!1,vy:0,drift:0});_n.count=s,_n.frustumCulled=!1,ct.add(_n)}function Q1(s){let t=null;for(let e=0;e<zo.length;e++)if(!zo[e].active){t=zo[e];break}t&&(t.x=s.x+(Math.random()-.5)*60,t.z=s.z+(Math.random()-.5)*60,t.y=15+Math.random()*20,t.life=6+Math.random()*6,t.max=t.life,t.active=!0,t.vy=-.15-Math.random()*.3,t.drift=Math.random()*6.28)}function I0(s,t,e){Fl+=s,Fl>.15&&(Fl=0,Q1(e));let n=!1;for(let i=0;i<zo.length;i++){const o=zo[i];if(!o.active){dn.position.set(0,-100,0),dn.scale.setScalar(0),dn.updateMatrix(),_n.setMatrixAt(i,dn.matrix);continue}if(o.life-=s,o.life<=0||o.y<.5){o.active=!1,dn.position.set(0,-100,0),dn.scale.setScalar(0),dn.updateMatrix(),_n.setMatrixAt(i,dn.matrix);continue}o.y+=o.vy*s,o.drift+=(Math.random()-.5)*.5*s,o.x+=Math.sin(o.drift)*.1*s,o.z+=Math.cos(o.drift)*.08*s;const r=o.life/o.max,a=Math.sin(t*4+i)*.3+.7,c=r*a*.7,l=.5+a*.5;dn.position.set(o.x,o.y,o.z),dn.scale.setScalar(l),dn.updateMatrix(),_n.setMatrixAt(i,dn.matrix),Cc.copy(P0).multiplyScalar(c),_n.setColorAt(i,Cc),n=!0}_n.instanceMatrix.needsUpdate=!0,n&&(_n.instanceColor.needsUpdate=!0)}let yn=null;const Fo=[],pn=new le,Pc=new ot,L0=new ot(8956535);function tS(s){const t=new Y({color:16777215,transparent:!0,opacity:1});yn=new Qn(Pn.dustMote,t,s),yn.instanceMatrix.setUsage(xe),yn.instanceColor=new Ti(new Float32Array(s*3),3),yn.instanceColor.setUsage(xe),pn.scale.setScalar(0),pn.updateMatrix();for(let e=0;e<s;e++)yn.setMatrixAt(e,pn.matrix),Pc.copy(L0),yn.setColorAt(e,Pc),Fo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});yn.count=s,yn.frustumCulled=!1,ct.add(yn)}function Yd(s,t,e){for(let n=0;n<e;n++){let i=null;for(let a=0;a<Fo.length;a++)if(!Fo[a].active){i=Fo[a];break}if(!i)continue;const o=Math.random()*6.28,r=1+Math.random()*2;i.x=s+Math.cos(o)*.2,i.y=Yt(s,t)+.1,i.z=t+Math.sin(o)*.2,i.vx=Math.cos(o)*r,i.vy=.5+Math.random()*1.5,i.vz=Math.sin(o)*r,i.life=.6+Math.random()*.6,i.max=i.life,i.active=!0}}function eS(s){let t=!1;for(let e=0;e<Fo.length;e++){const n=Fo[e];if(!n.active){pn.position.set(0,-100,0),pn.scale.setScalar(0),pn.updateMatrix(),yn.setMatrixAt(e,pn.matrix);continue}if(n.life-=s,n.life<=0){n.active=!1,pn.position.set(0,-100,0),pn.scale.setScalar(0),pn.updateMatrix(),yn.setMatrixAt(e,pn.matrix);continue}n.vy-=3*s,n.vx*=.96,n.vy*=.96,n.vz*=.96,n.x+=n.vx*s,n.y+=n.vy*s,n.z+=n.vz*s;const i=Yt(n.x,n.z)+.05;n.y<i&&(n.y=i,n.vy=0,n.vx*=.8,n.vz*=.8);const o=n.life/n.max*.4;pn.position.set(n.x,n.y,n.z),pn.scale.setScalar(1),pn.updateMatrix(),yn.setMatrixAt(e,pn.matrix),Pc.copy(L0).multiplyScalar(o),yn.setColorAt(e,Pc),t=!0}yn.instanceMatrix.needsUpdate=!0,t&&(yn.instanceColor.needsUpdate=!0)}let wn=null;const Oo=[],mn=new le,Ic=new ot,D0=new ot(F.bubblePop),nS=new J(.02,3,3);function iS(s){const t=new Y({color:16777215,transparent:!0,opacity:1});wn=new Qn(nS,t,s),wn.instanceMatrix.setUsage(xe),wn.instanceColor=new Ti(new Float32Array(s*3),3),wn.instanceColor.setUsage(xe),mn.scale.setScalar(0),mn.updateMatrix();for(let e=0;e<s;e++)wn.setMatrixAt(e,mn.matrix),Ic.copy(D0),wn.setColorAt(e,Ic),Oo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});wn.count=s,wn.frustumCulled=!1,ct.add(wn)}function sS(s,t,e,n){for(let i=0;i<n;i++){let o=null;for(let l=0;l<Oo.length;l++)if(!Oo[l].active){o=Oo[l];break}if(!o)continue;const r=Math.random()*6.28,a=Math.random()*3.14,c=1+Math.random()*2;o.x=s,o.y=t,o.z=e,o.vx=Math.cos(r)*Math.sin(a)*c,o.vy=Math.cos(a)*c,o.vz=Math.sin(r)*Math.sin(a)*c,o.life=.4+Math.random()*.4,o.max=o.life,o.active=!0}}function oS(s){let t=!1;for(let e=0;e<Oo.length;e++){const n=Oo[e];if(!n.active){mn.position.set(0,-100,0),mn.scale.setScalar(0),mn.updateMatrix(),wn.setMatrixAt(e,mn.matrix);continue}if(n.life-=s,n.life<=0){n.active=!1,mn.position.set(0,-100,0),mn.scale.setScalar(0),mn.updateMatrix(),wn.setMatrixAt(e,mn.matrix);continue}n.vy-=2*s,n.vx*=.97,n.vy*=.97,n.vz*=.97,n.x+=n.vx*s,n.y+=n.vy*s,n.z+=n.vz*s;const i=n.life/n.max*.8;mn.position.set(n.x,n.y,n.z),mn.scale.setScalar(1),mn.updateMatrix(),wn.setMatrixAt(e,mn.matrix),Ic.copy(D0).multiplyScalar(i),wn.setColorAt(e,Ic),t=!0}wn.instanceMatrix.needsUpdate=!0,t&&(wn.instanceColor.needsUpdate=!0)}let Sn=null;const Bo=[],tn=new le,Lc=new ot,U0=[new ot(F.leafGlow),new ot(3394662),new ot(2271880),new ot(5636044),new ot(4513262)];let N0=0,z0=0;function rS(s,t,e){N0=s,z0=t}function aS(s){const t=new ve(.12,.08),e=new Y({color:16777215,transparent:!0,opacity:1,side:Dt,depthWrite:!1,blending:ce});Sn=new Qn(t,e,s),Sn.instanceMatrix.setUsage(xe),Sn.instanceColor=new Ti(new Float32Array(s*3),3),Sn.instanceColor.setUsage(xe),tn.scale.setScalar(0),tn.updateMatrix();for(let n=0;n<s;n++)Sn.setMatrixAt(n,tn.matrix),Lc.setHex(0),Sn.setColorAt(n,Lc),Bo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,rvx:0,rvy:0,rvz:0,life:0,max:0,active:!1,colorIdx:0});Sn.count=s,Sn.frustumCulled=!1,ct.add(Sn)}function cS(s,t,e){let n=null;for(let o=0;o<Bo.length;o++)if(!Bo[o].active){n=Bo[o];break}if(!n)return;n.x=s+(Math.random()-.5)*2,n.y=t+Math.random()*2,n.z=e+(Math.random()-.5)*2;const i=Math.random()*6.28;n.vx=Math.cos(i)*.3,n.vy=-.2-Math.random()*.3,n.vz=Math.sin(i)*.3,n.rvx=(Math.random()-.5)*4,n.rvy=(Math.random()-.5)*3,n.rvz=(Math.random()-.5)*2,n.rx=Math.random()*6.28,n.ry=Math.random()*6.28,n.rz=Math.random()*6.28,n.life=4+Math.random()*4,n.max=n.life,n.active=!0,n.colorIdx=Math.floor(Math.random()*U0.length)}function lS(s,t){let e=!1;for(let n=0;n<Bo.length;n++){const i=Bo[n];if(!i.active){tn.position.set(0,-100,0),tn.scale.setScalar(0),tn.updateMatrix(),Sn.setMatrixAt(n,tn.matrix);continue}if(i.life-=s,i.life<=0||i.y<-.5){i.active=!1,tn.position.set(0,-100,0),tn.scale.setScalar(0),tn.updateMatrix(),Sn.setMatrixAt(n,tn.matrix);continue}i.vx+=N0*.4*s,i.vz+=z0*.4*s,i.vx+=Math.sin(t*3+n*1.7)*.5*s,i.vz+=Math.cos(t*2.5+n*2.1)*.3*s,i.vy-=.3*s,i.vx*=.995,i.vy=Math.max(i.vy,-.8),i.vz*=.995,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s,i.rx+=i.rvx*s,i.ry+=i.rvy*s,i.rz+=i.rvz*s;const o=i.life/i.max,r=o*(.6+Math.sin(t*2+n*.8)*.4),a=.8+o*.4;tn.position.set(i.x,i.y,i.z),tn.rotation.set(i.rx,i.ry,i.rz),tn.scale.setScalar(a),tn.updateMatrix(),Sn.setMatrixAt(n,tn.matrix),Lc.copy(U0[i.colorIdx]).multiplyScalar(r),Sn.setColorAt(n,Lc),e=!0}Sn.instanceMatrix.needsUpdate=!0,e&&(Sn.instanceColor.needsUpdate=!0)}const Ha=40,dh=8;let en=null;const di=[],Fn=new le,os=new ot,F0=new ot(4513194);let Zd=0,$d=0,df=!1;function uS(){const s=new yc;return s.moveTo(0,-.18),s.quadraticCurveTo(.1,-.17,.11,-.06),s.lineTo(.1,-.02),s.lineTo(.13,.12),s.quadraticCurveTo(.125,.14,.11,.12),s.lineTo(.08,0),s.quadraticCurveTo(.05,-.02,.03,0),s.lineTo(.03,.05),s.lineTo(.02,.22),s.quadraticCurveTo(0,.245,-.02,.22),s.lineTo(-.03,.05),s.lineTo(-.03,0),s.quadraticCurveTo(-.05,-.02,-.08,0),s.lineTo(-.11,.12),s.quadraticCurveTo(-.125,.14,-.13,.12),s.lineTo(-.1,-.02),s.lineTo(-.11,-.06),s.quadraticCurveTo(-.1,-.17,0,-.18),new Hr(s)}function hS(){const s=uS(),t=new Y({color:16777215,transparent:!0,opacity:1,blending:ce,depthWrite:!1,side:Dt});en=new Qn(s,t,Ha),en.instanceMatrix.setUsage(xe),en.instanceColor=new Ti(new Float32Array(Ha*3),3),en.instanceColor.setUsage(xe),Fn.position.set(0,-100,0),Fn.scale.setScalar(0),Fn.updateMatrix();for(let e=0;e<Ha;e++)en.setMatrixAt(e,Fn.matrix),os.setScalar(0),en.setColorAt(e,os),di.push({active:!1,life:0,maxLife:dh,x:0,z:0});en.count=Ha,en.frustumCulled=!1,ct.add(en),df=!0}function fS(s,t,e,n){if(!df)return;const i=s-Zd,o=t-$d;if(i*i+o*o<(n?.25:.64))return;Zd=s,$d=t;let c=null,l=-1;for(let f=0;f<di.length;f++)if(!di[f].active){c=di[f],l=f;break}if(!c){let f=1/0;for(let m=0;m<di.length;m++)di[m].life<f&&(f=di[m].life,c=di[m],l=m)}const u=Yt(s,t);c.active=!0,c.life=dh,c.maxLife=dh,c.x=s,c.z=t;const h=l%2===0?1:-1,d=Math.sin(e+Math.PI/2)*.12*h,p=Math.cos(e+Math.PI/2)*.12*h,g=n?1.15:1;Fn.position.set(s+d,u+.015,t+p),Fn.rotation.set(-Math.PI/2,0,-e+(Math.random()-.5)*.15),Fn.scale.set(g,g,g),Fn.updateMatrix(),en.setMatrixAt(l,Fn.matrix);const x=n?.9:.6;os.copy(F0).multiplyScalar(x),en.setColorAt(l,os)}function dS(s,t){if(!df)return;const e=1+(t||0)*1.5;let n=!1;for(let i=0;i<di.length;i++){const o=di[i];if(!o.active)continue;if(o.life-=s*e,o.life<=0){o.active=!1,Fn.position.set(0,-100,0),Fn.scale.setScalar(0),Fn.updateMatrix(),en.setMatrixAt(i,Fn.matrix),os.setScalar(0),en.setColorAt(i,os),n=!0;continue}const r=o.life/o.maxLife,a=r*r;os.copy(F0).multiplyScalar(a*.6),en.setColorAt(i,os),n=!0}en.instanceMatrix.needsUpdate=!0,n&&(en.instanceColor.needsUpdate=!0)}const _i=[],_o=[];let jd=be+2,ts=1;function Kd(s){ts=s}function O0(s,t,e,n){const i=[];for(let r=0;r<=12;r++){const a=r/12,c=s*(1-a*a),l=t*(1-a*a),u=e+(n-e)*a;i.push(new N(c,u,l))}return{curve:new Jr(i),pts:i}}function pS(s,t,e,n){const i=n||be+2,o=e+15,r=new Jh(new N(s,e,t),new N(s,o,t)),a=new Y({color:F.laserPink,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),c=new I(new An(r,1,.06,6,!1),a);ct.add(c);const l=new Y({color:F.laserGlow,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),u=new I(new An(r,1,.2,6,!1),l);ct.add(u);const{curve:h}=O0(s,t,o,i),d=new Y({color:F.laserPink,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),p=new I(new An(h,16,.05,6,!1),d);ct.add(p);const g=new Y({color:F.laserGlow,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),x=new I(new An(h,16,.18,6,!1),g);ct.add(x);const f={upTube:c,upGlow:u,bendTube:p,bendGlow:x,mat:a,glowMat:l,bendMat:d,bendGlowMat:g,fromX:s,fromZ:t,floatY:e,skyY:o,tipY:i,animPhase:0,animTimer:0};_i.push(f);for(let m=0;m<_i.length-1;m++){const S=_i[m],M=(f.skyY+S.skyY)/2,_=[];for(let v=0;v<=8;v++){const R=v/8,U=f.fromX*(1-R)+S.fromX*R,L=f.fromZ*(1-R)+S.fromZ*R,z=M+Math.sin(R*Math.PI)*3;_.push(new N(U,z,L))}const A=new Jr(_),E=new Y({color:F.laserGlow,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),T=new I(new An(A,10,.03,4,!1),E);ct.add(T);const b=new Y({color:F.laserPink,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),y=new I(new An(A,10,.1,4,!1),b);ct.add(y),_o.push({tube:T,glow:y,mat:E,glowMat:b,opacity:0})}return f}function mS(s){for(let t=0;t<_i.length;t++){const e=_i[t];e.tipY=s;const{curve:n}=O0(e.fromX,e.fromZ,e.skyY,s);ct.remove(e.bendTube),e.bendTube.geometry.dispose(),e.bendTube.geometry=new An(n,16,.05,6,!1),ct.add(e.bendTube),ct.remove(e.bendGlow),e.bendGlow.geometry.dispose(),e.bendGlow.geometry=new An(n,16,.18,6,!1),ct.add(e.bendGlow)}}function gS(s,t,e){const n=e||be+2;Math.abs(n-jd)>.1&&_i.length>0&&(mS(n),jd=n);for(let i=0;i<_i.length;i++){const o=_i[i];if(o.animTimer+=s,o.animPhase===0){const r=Math.min(o.animTimer/.5,1);o.mat.opacity=r*.8,o.glowMat.opacity=r*.3,o.animTimer>.5&&(o.animPhase=1,o.animTimer=0)}else if(o.animPhase===1){const r=Math.min(o.animTimer/.8,1);o.bendMat.opacity=r*.7,o.bendGlowMat.opacity=r*.2,o.mat.opacity=.8,o.glowMat.opacity=.3,o.animTimer>.8&&(o.animPhase=2)}else{const r=Math.sin(t*3+i*1.2)*.5+.5;o.mat.opacity=.5+r*.4,o.glowMat.opacity=.15+r*.15,o.bendMat.opacity=.4+r*.3,o.bendGlowMat.opacity=.1+r*.12}}for(let i=0;i<_o.length;i++){const o=_o[i];o.opacity=Math.min(o.opacity+s*.5,.3);const r=Math.sin(t*2+i*.8)*.5+.5;o.mat.opacity=o.opacity*(.6+r*.4),o.glowMat.opacity=o.opacity*(.2+r*.15)}if(ts<1){for(let i=0;i<_i.length;i++){const o=_i[i];o.mat.opacity*=ts,o.glowMat.opacity*=ts,o.bendMat.opacity*=ts,o.bendGlowMat.opacity*=ts}for(let i=0;i<_o.length;i++)_o[i].mat.opacity*=ts,_o[i].glowMat.opacity*=ts}}const xS=new ot(F.orbGold),vS=new ot(16777215);let mo=0,Ze="SEEK",es=-be,Qe=0,br=[],Yn=null,Ss=null,bs=null,Ve=null,Ts=[],Ui=null,ph=null,Zn=[],Tr=null,B0=null,k0=null,mh=null,gh=null,xh=null,vh=null,oc=null,Mh=[],_h=[],yh=[],wh=[],yo=[],Sh=[],wo=null,Jd=0,qn=0,go=[],Eo=null,Qd=!1;const Ao=200;let jn=null;const pf=[];let G0=!1;function MS(){if(jn)return;const s=new we,t=new Float32Array(Ao*3),e=new Float32Array(Ao*3),n=new Float32Array(Ao);s.setAttribute("position",new Ue(t,3)),s.setAttribute("color",new Ue(e,3)),s.setAttribute("size",new Ue(n,1)),s.attributes.position.setUsage(xe),s.attributes.color.setUsage(xe),s.attributes.size.setUsage(xe);const i=new $h({size:.3,vertexColors:!0,transparent:!0,opacity:.9,blending:ce,depthWrite:!1,sizeAttenuation:!0});jn=new Bp(s,i),jn.visible=!1,ct.add(jn);const o=new ot(F.obeliskPink),r=new ot(11158783);for(let a=0;a<Ao;a++){const c=Math.random()<.7?o:r;e[a*3]=c.r*(.8+Math.random()*.4),e[a*3+1]=c.g*(.8+Math.random()*.4),e[a*3+2]=c.b*(.8+Math.random()*.4),n[a]=.15+Math.random()*.25,pf.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,active:!1,sparklePhase:Math.random()*6.28})}s.attributes.color.needsUpdate=!0,s.attributes.size.needsUpdate=!0}function _S(s,t,e){G0=!0,jn.visible=!0;for(let n=0;n<Ao;n++){const i=pf[n];i.x=s,i.y=t,i.z=e;const o=Math.random()*6.28,r=Math.random()*Math.PI,a=2+Math.random()*5;i.vx=Math.sin(r)*Math.cos(o)*a,i.vy=Math.cos(r)*a*.5+Math.random()*2,i.vz=Math.sin(r)*Math.sin(o)*a,i.life=5+Math.random()*6,i.active=!0}}function yS(s,t){if(!jn||!jn.visible)return;const e=jn.geometry.attributes.position.array,n=jn.geometry.attributes.size.array;let i=!1;for(let o=0;o<Ao;o++){const r=pf[o];if(!r.active){e[o*3+1]=-100,n[o]=0;continue}if(i=!0,r.life-=s,r.life<=0||r.y<-1){r.active=!1;continue}r.vy-=1.5*s,r.vx*=.995,r.vz*=.995,r.vx+=Math.sin(t*3+o*.7)*.3*s,r.vz+=Math.cos(t*2.5+o*1.1)*.2*s,r.x+=r.vx*s,r.y+=r.vy*s,r.z+=r.vz*s,e[o*3]=r.x,e[o*3+1]=r.y,e[o*3+2]=r.z;const a=Math.sin(t*6+r.sparklePhase)*.5+.5,c=Math.min(r.life/2,1);n[o]=(.15+a*.2)*c}jn.geometry.attributes.position.needsUpdate=!0,jn.geometry.attributes.size.needsUpdate=!0,i||(jn.visible=!1)}function wS(s){br=s.orbs,Yn=s.obeliskGroup,Ss=s.obeliskMat,bs=s.obeliskGlowMat,Ve=s.pinnacleOrb,Ts=s.pinnacleRings||[],Ui=s.moatMesh,ph=s.moatMat,Zn=s.rainbowArcs,Tr=s.player,B0=s.makeLaser,k0=s.orbHudEl,Mh=s.deers||[],_h=s.puffs||[],yh=s.jellies||[],wh=s.moths||[],yo=s.trees||[],Sh=s.treeMeshes||[],wo=s.groundMesh||null,mh=s.playOrbCollect||null,gh=s.playOrbWarble||null,xh=s.playLaserZap||null,vh=s.playLaserHum||null,oc=s.stopLaserHums||null,MS()}function SS(s,t){let e=null,n=1/0;for(let c=0;c<br.length;c++){const l=br[c];if(l.found)continue;const u=l.x-Tr.pos.x,h=l.z-Tr.pos.z,d=u*u+h*h;d<n&&(n=d,e=l)}if(e&&n<ho*ho){const c=Math.sin(t*2+e.phase)*.5+.5;Sr.position.set(e.x,1,e.z),Sr.intensity=1+c*2,Sr.distance=ho}else Sr.intensity=0;for(let c=0;c<br.length;c++){const l=br[c];if(!(l.found&&!l.flyUp&&!l._flashing)){if(!l.found){const u=Math.sin(t*1.5+l.phase)*.5+.5;l.group.position.y=l.flyY+Math.sin(t*.8+l.phase)*.3,l.glowMat.opacity=.3+u*.4,l.hazeMat.opacity=.08+u*.12;const h=l.x-Tr.pos.x,d=l.z-Tr.pos.z,p=h*h+d*d,g=ho*ho;if(p<g){const x=1-Math.sqrt(p)/ho,f=x*x;l.glowMat.opacity=Math.min(.3+u*.4+f*.5,1),l.hazeMat.opacity=Math.min(.08+u*.12+f*.25,.6),l.coreMat.color.copy(vS).lerp(xS,1-f);const m=1+f*.3;l.group.scale.setScalar(m)}else l.group.scale.setScalar(1);for(let x=3;x<l.group.children.length;x++){const f=l.group.children[x],m=(x-3)/6*6.28+t*1.5;f.position.x=Math.cos(m)*.4,f.position.z=Math.sin(m)*.4,f.position.y=Math.sin(m*2+t)*.1}if(p<Fd*Fd){l.found=!0,l._flashing=!0,l._flashTimer=0,l.flyY=l.group.position.y,mo++;const x=k0||document.getElementById("orb-hud");x&&(x.innerHTML="✦ "+mo+" / "+Mo),Ze==="SEEK"&&(Ze="RISING"),mh&&mh()}}if(l._flashing){l._flashTimer+=s;const u=Math.min(l._flashTimer/1.5,1),h=u<.3?u/.3:1-(u-.3)/.7;l.glowMat.opacity=.5+h*.5,l.hazeMat.opacity=.3+h*.5,l.group.scale.setScalar(1+h*.6),l.group.position.x=l.x+Math.sin(t*30)*h*.05,l.group.position.z=l.z+Math.cos(t*25)*h*.05,l._flashTimer>1.5&&(l._flashing=!1,l.flyUp=!0,l.group.position.x=l.x,l.group.position.z=l.z,gh&&gh())}if(l.flyUp){const u=be+5;l.flyY+=(u-l.flyY)*s*.8,l.group.position.y=l.flyY;const h=Math.min((l.flyY-1)/(u-1),1);if(l.group.scale.setScalar(1-h*.6),l.glowMat.opacity=.8-h*.5,l.flyY>u-1&&!l.laserLine){l.flyUp=!1,l.group.visible=!1;const d=Ol();l.laserLine=B0(l.x,l.z,0,d),xh&&xh(),vh&&vh(l.x,l.z)}}}}const i=be/Mo,o=-be+mo*i;if(es<o-.01?(es+=8*s,es>o&&(es=o),Yn&&(Yn.position.y=es,Yn.position.x=Math.sin(t*25)*.04,Yn.position.z=Math.cos(t*30)*.03)):Yn&&(Yn.position.x*=.9,Yn.position.z*=.9),mo>=Mo&&es>=-.01&&Ze==="RISING"&&(Ze="COMPLETE",Qe=0),Yn){Yn.rotation.y+=s*.03;const c=Yn.children[Yn.children.length-1];if(c&&c.isLight){const l=Math.max(0,Math.min(1,(es+be)/be));c.intensity=l*1.5*(.8+Math.sin(t*1.5)*.2)}}if(Ve&&Ve.mesh.visible){const c=Math.sin(t*2)*.5+.5;Ve.mat.opacity=.6+c*.3,Ve.hazeMat.opacity=.15+c*.12;const l=mo/Mo;Ve.mat.opacity*=.3+l*.7,Ve.hazeMat.opacity*=.2+l*.8}for(let c=0;c<Ts.length;c++){const l=Ts[c];if(!l.mesh.visible)continue;l.mesh.rotation.x+=l.rx*s,l.mesh.rotation.y+=l.ry*s,l.mesh.rotation.z+=l.rz*s;const u=mo/Mo;l.mat.opacity=(.15+u*.35)*(.8+Math.sin(t*1.5+c)*.2)}const a=Ol();if(gS(s,t,a),Ze==="COMPLETE"&&Qe>3?Kd(Math.max(0,1-(Qe-3)/4)):(Ze==="FINALE"||Ze==="TRANSFORM")&&(Kd(0),oc&&(oc(),oc=null)),yS(s,t),Ze==="COMPLETE"){Qe+=s;const c=Math.min(Qe/3,1);if(Ss&&(Ss.emissiveIntensity=c*1.5),bs&&(bs.emissiveIntensity=c*2.5),Ve&&Ve.mesh.visible&&Qe>1&&Qe<3){const l=Math.min((Qe-1)/1.5,1);Ve.mat.opacity=.9+l*.1,Ve.hazeMat.opacity=.5+l*.5,Ve.mesh.scale.setScalar(1+l*.5),Ve.haze.scale.setScalar(1+l*1);for(let u=0;u<Ts.length;u++){const h=Ts[u];h.mesh.rotation.x+=h.rx*s*(1+l*4),h.mesh.rotation.y+=h.ry*s*(1+l*4),h.mesh.rotation.z+=h.rz*s*(1+l*4)}}if(Ve&&Ve.mesh.visible&&Qe>=3&&!G0){const l=new N;Ve.mesh.getWorldPosition(l),_S(l.x,l.y,l.z),Ve.mesh.visible=!1,Ve.haze.visible=!1;for(let u=0;u<Ts.length;u++)Ts[u].mesh.visible=!1}if(Qe>3&&ph){const l=Math.min((Qe-3)/4,1);ph.opacity=l*.6,Ui&&(Ui.visible||(Ui.visible=!0),Ui.position.y=.05+Math.sin(t*3)*.02*l)}if(Qe>4)for(let l=0;l<Zn.length;l++){const u=l*.3,h=Math.min(Math.max((Qe-4-u)/2,0),1);h>0&&!Zn[l].mesh.visible&&(Zn[l].mesh.visible=!0),Zn[l].mat.opacity=h*.55,Zn[l].mesh.rotation.y+=s*.1*(l+1)*.3}if(Qe>3){const l=Math.min((Qe-3)/6,1)*2;for(let u=0;u<Mh.length;u++){const h=Mh[u],d=h.group,p=-d.position.x,g=-d.position.z,x=Math.sqrt(p*p+g*g);x>8?(h.wanderAng=Math.atan2(-d.position.x,-d.position.z),h.state="walk",h.speed=1.5*l,d.position.x+=p/x*h.speed*s,d.position.z+=g/x*h.speed*s,d.rotation.y=h.wanderAng):h.state="pause"}for(let u=0;u<_h.length;u++){const h=_h[u],d=h.group,p=-d.position.x,g=-d.position.z,x=Math.sqrt(p*p+g*g);x>8&&(h.wanderAng=Math.atan2(-d.position.x,-d.position.z),h.state="hop",h.hopTimer=h.hopTimer%1.2,d.position.x+=p/x*1.5*l*s,d.position.z+=g/x*1.5*l*s)}for(let u=0;u<yh.length;u++){const h=yh[u],d=h.group;d.position.x+=(0-d.position.x)*s*.15*l,d.position.z+=(0-d.position.z)*s*.15*l}for(let u=0;u<wh.length;u++){const h=wh[u];h.centerX+=(0-h.centerX)*s*.2*l,h.centerZ+=(0-h.centerZ)*s*.2*l,h.orbitR=Math.max(h.orbitR-s*.3*l,2)}}Qe>12&&(Ze="FINALE",console.log("✦ Quest → FINALE"))}if(Ze==="FINALE"){Jd+=s,Ss&&(Ss.emissiveIntensity=1.5+Math.sin(t*.5)*.3),bs&&(bs.emissiveIntensity=2.5+Math.sin(t*.7)*.5),Ui&&(Ui.position.y=.05+Math.sin(t*3)*.02);for(let c=0;c<Zn.length;c++)Zn[c].mesh.rotation.y+=s*.1*(c+1)*.3,Zn[c].mat.opacity=.45+Math.sin(t+c)*.1;Jd>30&&(Ze="TRANSFORM",qn=0,bS(),console.log("✦ Quest → TRANSFORM (trees="+yo.length+")"))}if(Ze==="TRANSFORM"){qn+=s,Ss&&(Ss.emissiveIntensity=1.5+Math.sin(t*.5)*.3),bs&&(bs.emissiveIntensity=2.5+Math.sin(t*.7)*.5),Ui&&(Ui.position.y=.05+Math.sin(t*3)*.02);for(let l=0;l<Zn.length;l++)Zn[l].mesh.rotation.y+=s*.1*(l+1)*.3,Zn[l].mat.opacity=.45+Math.sin(t+l)*.1;if(qn<3&&go.length<yo.length){const l=Math.min(Math.floor(qn/3*yo.length),yo.length);for(;go.length<l;){const u=go.length,h=yo[u],d=Ol(),p=new Jh(new N(0,d,0),new N(h.x,0,h.z)),g=new Y({color:F.laserPink,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),x=new I(new An(p,8,.06,4,!1),g);ct.add(x);const f=new Y({color:F.laserGlow,transparent:!0,opacity:0,blending:ce,depthWrite:!1}),m=new I(new An(p,8,.18,4,!1),f);ct.add(m),go.push({tube:x,glow:m,mat:g,glowMat:f,timer:0})}}for(let l=0;l<go.length;l++){const u=go[l];u.timer+=s;const h=Math.min(u.timer/.5,1),d=Math.sin(t*3+l*.5)*.5+.5;u.mat.opacity=h*(.6+d*.4),u.glowMat.opacity=h*(.2+d*.15)}let c=0;qn>=3&&qn<6?c=(qn-3)/3:qn>=6&&qn<10?(c=1,Qd||(TS(),Qd=!0,console.log("✦ Trees + ground transformed"))):qn>=10&&qn<13&&(c=1-(qn-10)/3),Eo&&(Eo.style.opacity=c)}}function Ol(){return es+be+3}function bS(){Eo||(Eo=document.createElement("div"),Eo.style.cssText="position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;opacity:0;pointer-events:none;z-index:9999;",document.body.appendChild(Eo))}function TS(){const s=[{color:5575728,glow:13378167,core:16729258},{color:3805248,glow:11154363,core:14505471},{color:4461608,glow:14496648,core:16737979},{color:2756688,glow:8926156,core:12277247},{color:4200496,glow:13386905,core:16742348}];for(let t=0;t<Sh.length;t++){const e=Sh[t],n=s[t%s.length];e.trunkMat&&(e.trunkMat.color.set(667712),e.trunkMat.emissive.set(534584),e.trunkMat.emissiveIntensity=.1),e.canopyMat&&(e.canopyMat.color.set(n.core),e.canopyMat.emissive.set(n.glow),e.canopyMat.emissiveIntensity=.9),e.glowMat&&(e.glowMat.color.set(n.glow),e.glowMat.emissive.set(n.glow),e.glowMat.emissiveIntensity=.15),e.detailMat&&(e.detailMat.color.set(n.color),e.detailMat.emissive.set(n.glow),e.detailMat.emissiveIntensity=.3)}if(wo&&wo.material){wo.material.emissive.set(2099264),wo.material.emissiveIntensity=.3;const t=wo.geometry.attributes.color;if(t){const e=t.array;for(let n=0;n<e.length;n+=3){const i=e[n],o=e[n+1],r=e[n+2];e[n]=i*.5+r*.3,e[n+1]=o*.15,e[n+2]=r*.7+o*.4}t.needsUpdate=!0}}}const ES=600;let Va=.25,Te=1,tp=.85,De="NIGHT",Er=null,Ar=null,bh=null,Rr=null,rc=null;const ep=[{label:"DUSK",sky:new ot(923685),fog:new ot(791584),fogDensity:.009,moonInt:.6,moonCol:new ot(14527112),moonElev:15,ambSky:new ot(4469589),ambGnd:new ot(2238488),ambInt:.6,stars:.4,bio:.7,plRange:16,plInt:.5},{label:"NIGHT",sky:new ot(330264),fog:new ot(528408),fogDensity:.01,moonInt:1,moonCol:new ot(12307694),moonElev:55,ambSky:new ot(3359846),ambGnd:new ot(1587232),ambInt:.7,stars:.85,bio:1,plRange:18,plInt:.55},{label:"DEEP_NIGHT",sky:new ot(198160),fog:new ot(397332),fogDensity:.012,moonInt:.55,moonCol:new ot(8952251),moonElev:75,ambSky:new ot(1712708),ambGnd:new ot(1188888),ambInt:.5,stars:1,bio:1.5,plRange:22,plInt:.7},{label:"DAWN",sky:new ot(1187888),fog:new ot(923688),fogDensity:.011,moonInt:.5,moonCol:new ot(13417386),moonElev:20,ambSky:new ot(3354197),ambGnd:new ot(1843224),ambInt:.55,stars:.35,bio:.65,plRange:17,plInt:.5}],Ji=new ot,np=new ot;function AS(s){Er=s.scene,Ar=s.moon,bh=s.moon2,Rr=s.hemiLight,rc=s.playerLight}function RS(s){if(!Er)return;Va=(Va+s/ES)%1;const t=Va*4,e=Math.floor(t)%4,n=(e+1)%4,i=t-Math.floor(t),o=.5-.5*Math.cos(i*Math.PI),r=ep[e],a=ep[n];De=o<.5?r.label:a.label;const c=(l,u)=>l+(u-l)*o;if(Ji.copy(r.sky).lerp(a.sky,o),Er.background.copy(Ji),Ji.copy(r.fog).lerp(a.fog,o),Er.fog.color.copy(Ji),Er.fog.density=c(r.fogDensity,a.fogDensity),Ar){Ji.copy(r.moonCol).lerp(a.moonCol,o),Ar.color.copy(Ji),Ar.intensity=c(r.moonInt,a.moonInt);const l=Va*Math.PI*2,u=c(r.moonElev,a.moonElev)*Math.PI/180,h=60;Ar.position.set(Math.cos(l)*Math.cos(u)*h,Math.sin(u)*h,Math.sin(l)*Math.cos(u)*h)}if(bh){const l=c(r.moonInt,a.moonInt)/.85;bh.intensity=.3*l}Rr&&(Ji.copy(r.ambSky).lerp(a.ambSky,o),np.copy(r.ambGnd).lerp(a.ambGnd,o),Rr.color.copy(Ji),Rr.groundColor.copy(np),Rr.intensity=c(r.ambInt,a.ambInt)),rc&&(rc.distance=c(r.plRange,a.plRange),rc.intensity=c(r.plInt,a.plInt)),tp=c(r.stars,a.stars),Yw(tp),Te=c(r.bio,a.bio)}let Ls=0,Ro=0,Vi=0,ko="CLEAR",Xi=!1,gi=0;const ac={CLEAR:{fogMult:1,windBase:.3,rainRate:0,skyDarken:0,mistCount:0,duration:[90,180]},MISTY:{fogMult:1.8,windBase:.2,rainRate:0,skyDarken:.05,mistCount:6,duration:[60,150]},LIGHT_RAIN:{fogMult:1.3,windBase:.6,rainRate:.3,skyDarken:.1,mistCount:2,duration:[60,120]},HEAVY_RAIN:{fogMult:1.6,windBase:1,rainRate:.8,skyDarken:.2,mistCount:3,duration:[45,100]},FOG_BANK:{fogMult:2.5,windBase:.15,rainRate:0,skyDarken:.1,mistCount:8,duration:[60,120]},LUMINOUS_STORM:{fogMult:1.4,windBase:1.5,rainRate:.6,skyDarken:.15,mistCount:2,duration:[40,90]}},CS={CLEAR:{MISTY:.4,LIGHT_RAIN:.3,FOG_BANK:.2,LUMINOUS_STORM:.1},MISTY:{CLEAR:.3,LIGHT_RAIN:.3,FOG_BANK:.3,HEAVY_RAIN:.1},LIGHT_RAIN:{CLEAR:.2,MISTY:.2,HEAVY_RAIN:.4,LUMINOUS_STORM:.2},HEAVY_RAIN:{LIGHT_RAIN:.4,LUMINOUS_STORM:.3,MISTY:.2,CLEAR:.1},FOG_BANK:{MISTY:.4,CLEAR:.3,LIGHT_RAIN:.2,LUMINOUS_STORM:.1},LUMINOUS_STORM:{HEAVY_RAIN:.3,MISTY:.3,CLEAR:.2,LIGHT_RAIN:.2}};let So="CLEAR",xo=null,cc=0,Wa=0,Bl=0,Xa=!1,qa=0,kl=Math.random()*Math.PI*2,Gl=0,Hl=0;const Th=[],PS=8;let ip=!1,Vl=0,Ya=1,lc=0,Za=0,Wl=0;function IS(){const s=CS[So],t=Object.entries(s);let e=0;for(const[,i]of t)e+=i;let n=Math.random()*e;for(const[i,o]of t)if(n-=o,n<=0)return i;return t[0][0]}function LS(){if(ip)return;const s=document.createElement("canvas");s.width=128,s.height=64;const t=s.getContext("2d"),e=t.createRadialGradient(64,32,0,64,32,64);e.addColorStop(0,"rgba(255,255,255,0.5)"),e.addColorStop(.3,"rgba(255,255,255,0.25)"),e.addColorStop(.7,"rgba(255,255,255,0.06)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,64);const n=new Kr(s),i=new ve(40,14);for(let o=0;o<PS;o++){const r=new Y({map:n,color:5596791,transparent:!0,opacity:0,side:Dt,depthWrite:!1}),a=new I(i,r);a.visible=!1,ct.add(a),Th.push({mesh:a,mat:r,active:!1,drift:Math.random()*Math.PI*2,speed:.3+Math.random()*.4,baseY:.8+Math.random()*2,wobble:Math.random()*Math.PI*2})}ip=!0}function DS(){LS();const s=ac.CLEAR.duration;cc=s[0]+Math.random()*(s[1]-s[0])}function US(s,t,e){if(Xa)if(Wa-=s,Wa<=0){So=xo,xo=null,Xa=!1;const o=ac[So].duration;cc=o[0]+Math.random()*(o[1]-o[0]),qa=0}else qa=1-Wa/Bl;else cc-=s,cc<=0&&(xo=IS(),Xa=!0,Bl=30+Math.random()*60,Wa=Bl,qa=0);const n=ac[So];if(Xa&&xo){const o=ac[xo],r=.5-.5*Math.cos(qa*Math.PI),a=(c,l)=>c+(l-c)*r;Ya=a(n.fogMult,o.fogMult),lc=a(n.rainRate,o.rainRate),Za=a(n.skyDarken,o.skyDarken),Wl=a(n.mistCount,o.mistCount),Vi=a(n.windBase,o.windBase),ko=r<.5?So:xo}else Ya=n.fogMult,lc=n.rainRate,Za=n.skyDarken,Wl=n.mistCount,Vi=n.windBase,ko=So;Xi=ko==="LUMINOUS_STORM",kl+=(Math.sin(t*.05)*.2+Math.sin(t*.13)*.1)*s,Gl-=s,Gl<=0&&(Gl=2+Math.random()*6,Hl=Math.random()*.8),Hl*=Math.pow(.3,s);const i=Vi+Hl;if(Ls=Math.cos(kl)*i,Ro=Math.sin(kl)*i,ct.fog.density*=Ya,Za>.001){const o=ct.background,r=1-Za;o.r*=r,o.g*=r,o.b*=r}if(e){const o=Math.round(Wl);for(let r=0;r<Th.length;r++){const a=Th[r];if(r<o){a.active||(a.active=!0,a.mesh.visible=!0,a.drift=Math.random()*Math.PI*2);const c=10+Math.sin(t*.3+a.wobble)*8,l=a.drift+t*a.speed*.05;a.mesh.position.set(e.x+Math.cos(l)*c,a.baseY+Math.sin(t*.4+a.wobble)*.5,e.z+Math.sin(l)*c),a.mesh.rotation.y=l+Math.PI/2,a.drift+=Ls*s*.02;const u=.03+Ya*.012;a.mat.opacity+=(u-a.mat.opacity)*s*2}else a.active&&(a.mat.opacity-=s*.5,a.mat.opacity<=.005&&(a.active=!1,a.mesh.visible=!1,a.mat.opacity=0))}}return Xi&&(Vl-=s,Vl<=0&&(Vl=1+Math.random()*4,gi=1)),gi*=Math.pow(.02,s),gi<.01&&(gi=0),lc}function Nr(){return lc}const ui=300,vr=new Float32Array(ui),Mr=new Float32Array(ui),_r=new Float32Array(ui),Xl=new Float32Array(ui),ql=new Float32Array(ui),Yl=new Float32Array(ui),Es=new Float32Array(ui),zn=new Float32Array(ui*6);let Ds=null,Eh=null;function NS(){const s=new we;s.setAttribute("position",new Ue(zn,3)),Eh=new Zh({color:8952251,transparent:!0,opacity:.3,depthWrite:!1}),Ds=new Ng(s,Eh),Ds.frustumCulled=!1,Ds.visible=!1,ct.add(Ds);for(let t=0;t<ui;t++)Es[t]=0,H0(t)}function H0(s){const t=s*6;zn[t]=0,zn[t+1]=-100,zn[t+2]=0,zn[t+3]=0,zn[t+4]=-100,zn[t+5]=0}function zS(s,t,e,n,i){if(!Ds)return;const o=e>.01;if(Ds.visible=o,!o)return;Eh.opacity=Math.min(.15+e*.35,.5);const r=Math.floor(e*12*s*60);for(let c=0;c<r;c++){let l=-1;for(let d=0;d<ui;d++)if(Es[d]<=0){l=d;break}if(l===-1)break;const u=Math.random()*Math.PI*2,h=Math.random()*30;vr[l]=t.x+Math.cos(u)*h,Mr[l]=12+Math.random()*10,_r[l]=t.z+Math.sin(u)*h,Xl[l]=n*2+(Math.random()-.5)*.3,ql[l]=-12-Math.random()*8,Yl[l]=i*2+(Math.random()-.5)*.3,Es[l]=2+Math.random()*1.5}const a=.06;for(let c=0;c<ui;c++){if(Es[c]<=0)continue;if(Es[c]-=s,Es[c]<=0||Mr[c]<Yt(vr[c],_r[c])+.1){Es[c]=0,H0(c);continue}vr[c]+=Xl[c]*s,Mr[c]+=ql[c]*s,_r[c]+=Yl[c]*s;const l=c*6;zn[l]=vr[c],zn[l+1]=Mr[c],zn[l+2]=_r[c],zn[l+3]=vr[c]+Xl[c]*a,zn[l+4]=Mr[c]+ql[c]*a,zn[l+5]=_r[c]+Yl[c]*a}Ds.geometry.attributes.position.needsUpdate=!0}let Q=null,ye=null,Ah=null,sn=!1,Gn=!1,Dc=null,Zl=null,zr=null,FS=null,V0=null,OS=null,BS=null,W0=null,kS=null,X0=null,q0=null,GS=null,Y0=null,Z0=null,$l=0,HS=null,$0=null,VS=null;const zi={jelly:0,puff:0,deer:0,moth:0};function jl(s,t){const e=Q.sampleRate*t,n=Q.createBuffer(1,e,Q.sampleRate),i=n.getChannelData(0);if(s==="white")for(let r=0;r<e;r++)i[r]=Math.random()*2-1;else if(s==="brown"){let r=0;for(let a=0;a<e;a++){const c=Math.random()*2-1;i[a]=(r+.02*c)/1.02,r=i[a],i[a]*=1.8}}const o=Math.min(Math.floor(Q.sampleRate*.5),e>>2);for(let r=0;r<o;r++){const a=r/o,c=e-o+r;i[c]=i[c]*(1-a)+i[r]*a}return n}function yr(s,t,e,n){const i=Q.createBufferSource();i.buffer=s,i.loop=!0;const o=Q.createGain();o.gain.value=t;const r=Q.createBiquadFilter();r.type="lowpass",r.frequency.value=e,r.Q.value=.5;const a=Q.createBiquadFilter();return a.type="highpass",a.frequency.value=n||40,a.Q.value=.5,i.connect(a).connect(r).connect(o).connect(ye),i.start(),{node:i,gain:o,filter:r}}function WS(){const s=Q.createDelay(1);s.delayTime.value=.37;const t=Q.createDelay(1);t.delayTime.value=.53;const e=Q.createGain();e.gain.value=.2;const n=Q.createGain();n.gain.value=.15;const i=Q.createBiquadFilter();i.type="lowpass",i.frequency.value=2500;const o=Q.createBiquadFilter();o.type="lowpass",o.frequency.value=2e3;const r=Q.createBiquadFilter();r.type="highpass",r.frequency.value=120,r.Q.value=.5;const a=Q.createBiquadFilter();a.type="highpass",a.frequency.value=120,a.Q.value=.5;const c=Q.createGain();c.gain.value=.3,s.connect(i).connect(r).connect(e).connect(s),t.connect(o).connect(a).connect(n).connect(t),s.connect(c),t.connect(c),c.connect(ye);const l=Q.createGain();l.gain.value=1,l.connect(s),l.connect(t),Ah=l}function ci(s,t,e){if(s.connect(t),Ah&&e>0){const n=Q.createGain();n.gain.value=e,s.connect(n).connect(Ah)}}function XS(){const s=()=>{if(!sn){try{Q=new(window.AudioContext||window.webkitAudioContext),ye=Q.createGain(),ye.gain.value=.42,ye.connect(Q.destination),Dc=jl("brown",16),Zl=jl("brown",11),zr=jl("white",9),WS();const t=yr(Dc,.05,200,50);FS=t.node,V0=t.gain,OS=t.filter;const e=yr(Zl,.03,350,80);BS=e.node,W0=e.gain;const n=yr(zr,0,400,60);kS=n.node,X0=n.gain,q0=n.filter;const i=yr(zr,0,2e3,80);GS=i.node,Y0=i.gain,Z0=i.filter;const o=yr(Zl,0,600,60);HS=o.node,$0=o.gain,VS=o.filter,sn=!0}catch(t){console.warn("Audio init failed:",t)}document.removeEventListener("click",s),document.removeEventListener("keydown",s),document.removeEventListener("touchstart",s)}};document.addEventListener("click",s),document.addEventListener("keydown",s),document.addEventListener("touchstart",s)}function qS(s,t,e,n,i,o,r,a){if(!sn||Gn)return;const c=Q.currentTime,l=o==="DEEP_NIGHT"?.07:o==="DAWN"?.03:.05;V0.gain.linearRampToValueAtTime(l,c+.1),W0.gain.linearRampToValueAtTime(l*.6,c+.1);const u=Math.min(t*.12,.18),h=200+t*600;X0.gain.linearRampToValueAtTime(u,c+.1),q0.frequency.linearRampToValueAtTime(h,c+.1);const d=e*.15,p=1200+e*2e3;Y0.gain.linearRampToValueAtTime(d,c+.1),Z0.frequency.linearRampToValueAtTime(p,c+.1),i>.5&&$l<=0&&(YS(),$l=2+Math.random()*3),$l-=s;let g=1/0;if(r&&a)for(let m=0;m<a.length;m++){const S=a[m].x-r.x,M=a[m].z-r.z,_=S*S+M*M;_<g&&(g=_)}const f=(g<225?1-Math.sqrt(g)/15:0)*.08;$0.gain.linearRampToValueAtTime(f,c+.1),zi.jelly-=s,zi.puff-=s,zi.deer-=s,zi.moth-=s}function YS(){if(!Q)return;const s=Q.currentTime,t=Q.createOscillator(),e=Q.createGain(),n=Q.createBiquadFilter();t.type="sawtooth",t.frequency.value=50+Math.random()*25,n.type="lowpass",n.frequency.value=120,n.Q.value=1,e.gain.setValueAtTime(.2,s),e.gain.exponentialRampToValueAtTime(.001,s+.8+Math.random()*.5),t.connect(n).connect(e).connect(ye),t.start(),t.stop(s+1.5);const i=Q.createBufferSource();i.buffer=Dc;const o=Q.createGain(),r=Q.createBiquadFilter();r.type="lowpass",r.frequency.value=120;const a=Q.createBiquadFilter();a.type="highpass",a.frequency.value=45,a.Q.value=.5,o.gain.setValueAtTime(.15,s),o.gain.exponentialRampToValueAtTime(.001,s+1.2),i.connect(a).connect(r).connect(o).connect(ye),i.start(),i.stop(s+1.5)}function Hs(s,t,e){if(!sn||Gn||zi[s]>0)return;const n=t.x-e.x,i=t.z-e.z,o=n*n+i*i;if(o>900)return;const r=Math.sqrt(o),a=Math.max(0,1-r/30)*.1,c=Math.max(-1,Math.min(1,n/Math.max(r,1))),l=Q.createStereoPanner();l.pan.value=c;const u=Q.currentTime;switch(s){case"jelly":{const h=360+Math.random()*60,d=Q.createOscillator(),p=Q.createOscillator();d.type="sine",p.type="sine",d.frequency.setValueAtTime(h,u),p.frequency.setValueAtTime(h+3,u),d.frequency.linearRampToValueAtTime(h-40,u+1.2),p.frequency.linearRampToValueAtTime(h-37,u+1.2);const g=Q.createOscillator(),x=Q.createGain();g.frequency.value=4,x.gain.value=5,g.connect(x),x.connect(d.frequency),x.connect(p.frequency);const f=Q.createGain();f.gain.setValueAtTime(0,u),f.gain.linearRampToValueAtTime(a,u+.15),f.gain.setValueAtTime(a,u+.6),f.gain.exponentialRampToValueAtTime(.001,u+1.4),d.connect(f),p.connect(f),f.connect(l),ci(l,ye,.4),g.start(u),d.start(u),p.start(u),g.stop(u+1.5),d.stop(u+1.5),p.stop(u+1.5),zi.jelly=4+Math.random()*5;break}case"puff":{const h=500+Math.random()*100,d=[h,h*1.2,h*1.5];for(let p=0;p<d.length;p++){const g=Q.createOscillator();g.type="sine",g.frequency.value=d[p];const x=Q.createGain(),f=u+p*.07;x.gain.setValueAtTime(0,f),x.gain.linearRampToValueAtTime(a*.5,f+.02),x.gain.exponentialRampToValueAtTime(.001,f+.15),g.connect(x).connect(l),g.start(f),g.stop(f+.18)}ci(l,ye,.3),zi.puff=8+Math.random()*10;break}case"deer":{const h=100+Math.random()*30,d=Q.createOscillator(),p=Q.createOscillator();d.type="triangle",p.type="triangle",d.frequency.setValueAtTime(h,u),p.frequency.setValueAtTime(h+2,u),d.frequency.linearRampToValueAtTime(h-15,u+.5),p.frequency.linearRampToValueAtTime(h-13,u+.5);const g=Q.createBiquadFilter();g.type="lowpass",g.frequency.value=250,g.Q.value=.5;const x=Q.createGain();x.gain.setValueAtTime(0,u),x.gain.linearRampToValueAtTime(a*.7,u+.12),x.gain.setValueAtTime(a*.7,u+.3),x.gain.exponentialRampToValueAtTime(.001,u+.6),d.connect(g),p.connect(g),g.connect(x).connect(l),ci(l,ye,.3),d.start(u),p.start(u),d.stop(u+.7),p.stop(u+.7),zi.deer=5+Math.random()*6;break}case"moth":{const h=Q.createOscillator();h.type="sine",h.frequency.setValueAtTime(200+Math.random()*80,u);const d=Q.createOscillator(),p=Q.createGain();d.frequency.value=8+Math.random()*4,p.gain.value=12,d.connect(p).connect(h.frequency);const g=Q.createGain();g.gain.setValueAtTime(0,u),g.gain.linearRampToValueAtTime(a*.2,u+.05),g.gain.exponentialRampToValueAtTime(.001,u+.25),h.connect(g).connect(l),ci(l,ye,.2),d.start(u),h.start(u),d.stop(u+.3),h.stop(u+.3),zi.moth=4+Math.random()*5;break}}}let Uc=0;function ZS(s,t){if(!sn||Gn||Uc>0)return;const e=Q.currentTime;if(t){const n=Q.createBufferSource();n.buffer=zr;const i=Q.createGain(),o=Q.createBiquadFilter();o.type="bandpass",o.frequency.value=2e3,o.Q.value=.5,i.gain.setValueAtTime(.05,e),i.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(o).connect(i).connect(ye),n.start(),n.stop(e+.15)}else{const n=Q.createOscillator();n.type="sine",n.frequency.value=80+Math.random()*40;const i=Q.createGain();i.gain.setValueAtTime(.03,e),i.gain.exponentialRampToValueAtTime(.001,e+.08),n.connect(i).connect(ye),n.start(),n.stop(e+.1)}Uc=s?.22:.35}function $S(){if(!sn||Gn)return;const s=Q.currentTime,t=Q.createOscillator();t.type="sine",t.frequency.setValueAtTime(150,s),t.frequency.exponentialRampToValueAtTime(300,s+.1);const e=Q.createGain();e.gain.setValueAtTime(.03,s),e.gain.exponentialRampToValueAtTime(.001,s+.15),t.connect(e).connect(ye),t.start(),t.stop(s+.2)}function jS(s){if(!sn||Gn)return;const t=Q.currentTime,e=Q.createBufferSource();e.buffer=Dc;const n=Q.createGain(),i=Q.createBiquadFilter();i.type="lowpass",i.frequency.value=200;const o=Q.createBiquadFilter();o.type="highpass",o.frequency.value=50,o.Q.value=.5,n.gain.setValueAtTime(s*.05,t),n.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(o).connect(i).connect(n).connect(ye),e.start(),e.stop(t+.25)}function KS(s){Uc>0&&(Uc-=s)}function JS(s,t){if(!sn||Gn)return;const e=s.x-t.x,n=s.z-t.z,i=e*e+n*n;if(i>400)return;const o=Math.max(0,1-Math.sqrt(i)/20)*.06,r=Q.currentTime,a=Q.createOscillator();a.type="sine",a.frequency.setValueAtTime(600+Math.random()*300,r),a.frequency.exponentialRampToValueAtTime(200,r+.1);const c=Q.createGain();c.gain.setValueAtTime(o,r),c.gain.exponentialRampToValueAtTime(.001,r+.12),a.connect(c).connect(ye),a.start(),a.stop(r+.15)}function QS(){if(!sn||Gn)return;const s=Q.currentTime,t=[440,554,659,880];for(let e=0;e<t.length;e++){const n=Q.createOscillator();n.type="sine",n.frequency.setValueAtTime(t[e],s+e*.12);const i=Q.createGain();i.gain.setValueAtTime(0,s),i.gain.linearRampToValueAtTime(.05,s+e*.12+.05),i.gain.exponentialRampToValueAtTime(.001,s+e*.12+.7),n.connect(i),ci(i,ye,.5),n.start(s+e*.12),n.stop(s+e*.12+.8)}}function tb(){if(!sn||Gn)return;const s=Q.currentTime,t=Q.createOscillator();t.type="sine",t.frequency.setValueAtTime(300,s),t.frequency.exponentialRampToValueAtTime(1200,s+3);const e=Q.createOscillator(),n=Q.createGain();e.frequency.setValueAtTime(6,s),e.frequency.linearRampToValueAtTime(12,s+3),n.gain.value=20,e.connect(n).connect(t.frequency);const i=Q.createOscillator();i.type="sine",i.frequency.setValueAtTime(600,s),i.frequency.exponentialRampToValueAtTime(2400,s+3);const o=Q.createGain();o.gain.setValueAtTime(0,s),o.gain.linearRampToValueAtTime(.04,s+.2),o.gain.setValueAtTime(.04,s+2),o.gain.exponentialRampToValueAtTime(.001,s+3.5),t.connect(o),i.connect(o),ci(o,ye,.6),e.start(s),t.start(s),i.start(s),e.stop(s+4),t.stop(s+4),i.stop(s+4)}function eb(){if(!sn||Gn)return;const s=Q.currentTime,t=Q.createBufferSource();t.buffer=zr;const e=Q.createBiquadFilter();e.type="bandpass",e.frequency.setValueAtTime(3e3,s),e.frequency.exponentialRampToValueAtTime(500,s+.3),e.Q.value=2;const n=Q.createGain();n.gain.setValueAtTime(.08,s),n.gain.exponentialRampToValueAtTime(.001,s+.3),t.connect(e).connect(n).connect(ye);const i=Q.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(2e3,s),i.frequency.exponentialRampToValueAtTime(100,s+.15);const o=Q.createBiquadFilter();o.type="lowpass",o.frequency.value=4e3;const r=Q.createGain();r.gain.setValueAtTime(.06,s),r.gain.exponentialRampToValueAtTime(.001,s+.2),i.connect(o).connect(r),ci(r,ye,.3);const a=Q.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(80,s+.15),a.frequency.linearRampToValueAtTime(55,s+2);const c=Q.createBiquadFilter();c.type="bandpass",c.frequency.value=180,c.Q.value=3;const l=Q.createGain();l.gain.setValueAtTime(0,s),l.gain.linearRampToValueAtTime(.03,s+.2),l.gain.exponentialRampToValueAtTime(.001,s+2),a.connect(c).connect(l).connect(ye),t.start(s),t.stop(s+.4),i.start(s),i.stop(s+.25),a.start(s+.1),a.stop(s+2.2)}const Go=[];function nb(s,t){if(!sn||Gn)return;const e=Q.currentTime,n=Q.createOscillator();n.type="sawtooth",n.frequency.value=55+Math.random()*10;const i=Q.createOscillator(),o=Q.createGain();i.type="square",i.frequency.value=120+Math.random()*60,o.gain.value=15,i.connect(o).connect(n.frequency);const r=Q.createBiquadFilter();r.type="bandpass",r.frequency.value=200,r.Q.value=3;const a=Q.createGain();a.gain.value=0;const c=Q.createStereoPanner();n.connect(r).connect(a).connect(c).connect(ye),i.start(e),n.start(e),Go.push({osc:n,mod:i,gain:a,panner:c,filter:r,x:s,z:t})}function ib(s){if(!sn||!Q)return;const t=Q.currentTime;for(let e=0;e<Go.length;e++){const n=Go[e],i=n.x-s.x,o=n.z-s.z,r=i*i+o*o,a=Math.sqrt(r),c=r<625?Math.max(0,1-a/25)*.04:0;n.gain.gain.linearRampToValueAtTime(c,t+.1);const l=Math.max(-1,Math.min(1,i/Math.max(a,1)));n.panner.pan.linearRampToValueAtTime(l,t+.1),n.filter.frequency.value=180+Math.sin(t*.5+e)*40}}function sb(){if(!Q)return;const s=Q.currentTime;for(let t=0;t<Go.length;t++){const e=Go[t];e.gain.gain.linearRampToValueAtTime(0,s+.5),e.osc.stop(s+.6),e.mod.stop(s+.6)}Go.length=0}function ob(){if(!sn||Gn)return;const s=Q.currentTime,t=Q.createOscillator();t.type="sine",t.frequency.setValueAtTime(400,s),t.frequency.exponentialRampToValueAtTime(900,s+.15);const e=Q.createGain();e.gain.setValueAtTime(.06,s),e.gain.exponentialRampToValueAtTime(.001,s+.5),t.connect(e),ci(e,ye,.4),t.start(),t.stop(s+.6)}let j0=null,K0=null,J0=null,Kl=0,sp=0,$a=0,Jl=0,op=1,Rh=!1;function rb(){if(Rh||!Q)return;Rh=!0;const s=Q.createGain();s.gain.value=0;const t=Q.createOscillator();t.type="sine",t.frequency.value=160;const e=Q.createOscillator();e.type="sine",e.frequency.value=190;const n=Q.createBiquadFilter();n.type="lowpass",n.frequency.value=350,n.Q.value=.5,t.connect(n).connect(s),e.connect(n),s.connect(ye),t.start(),e.start(),j0=t,K0=e,J0=s}function ab(s){if(!Q||s<.001)return;const t=Q.currentTime,e=1800+Math.random()*800,n=Q.createOscillator();n.type="sine",n.frequency.value=e,n.frequency.exponentialRampToValueAtTime(e*.88,t+.1);const i=Q.createGain();i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(s*.5,t+.01),i.gain.exponentialRampToValueAtTime(.001,t+.1),n.connect(i).connect(ye),n.start(t),n.stop(t+.12)}function cb(s,t,e,n,i,o){if(!sn||Gn||(rb(),!Rh))return;const r=Q.currentTime,a=i==="DEEP_NIGHT"||i==="NIGHT"?1:i==="DUSK"?.5:.3;op=i==="DUSK"||i==="NIGHT"?1:i==="DEEP_NIGHT"?.6:.3;const c=Math.max(.15,1-o*.7);let l=1/0;if(t&&e)for(let x=0;x<e.length;x++){const f=e[x].x-t.x,m=e[x].z-t.z,S=f*f+m*m;S<l&&(l=S)}const u=l<400?1-Math.sqrt(l)/20:0;sp+=s*2;const h=.7+.3*Math.sin(sp*Math.PI*2),d=u*.025*a*c*h;if(J0.gain.linearRampToValueAtTime(d,r+.15),Kl+=s,Kl>3+Math.random()*4){Kl=0;const x=150+Math.random()*40;j0.frequency.linearRampToValueAtTime(x,r+.5),K0.frequency.linearRampToValueAtTime(x+20+Math.random()*15,r+.5)}let p=1/0;if(t&&n)for(let x=0;x<n.length;x++){const f=n[x].cx-t.x,m=n[x].cz-t.z,S=f*f+m*m;S<p&&(p=S)}const g=p<144?1-Math.sqrt(p)/12:0;if(Jl=g*.02*op*c,Jl>.001){if($a-=s,$a<=0){ab(Jl);const x=1.5+(1-g)*1.5;$a=x+Math.random()*x}}else $a=0}const Q0=[0,2,4,7,9],lb=[0,2,3,5,7,9,10],ub=220;let Yr=!1,Os=null,uc=0,Ch=Q0,tm=0,Ql=0;function hb(){Yr||!Q||(Yr=!0,Os=Q.createGain(),Os.gain.value=.015,Os.connect(ye),uc=2)}function fb(s,t){const e=Ch.length,n=Math.floor(s/e)+(t||0),i=(s%e+e)%e,o=Ch[i];return ub*Math.pow(2,n+o/12)}function db(s,t,e){if(!Q)return;const n=Q.currentTime+(e||0),i=Q.createOscillator();i.type="triangle",i.frequency.value=s;const o=Q.createGain();o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(t,n+.008),o.gain.exponentialRampToValueAtTime(t*.3,n+.15),o.gain.exponentialRampToValueAtTime(.001,n+1.5);const r=Q.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(s*4,n),r.frequency.exponentialRampToValueAtTime(s*1.5,n+1),r.Q.value=1,i.connect(r).connect(o),ci(o,Os,.6),i.start(n),i.stop(n+2)}function pb(s,t,e,n){if(!Q)return;const i=Q.currentTime+(n||0),o=e||2,r=Q.createOscillator();r.type="sine",r.frequency.value=s;const a=Q.createGain();a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(t,i+.3),a.gain.setValueAtTime(t,i+Math.max(o-.5,.4)),a.gain.exponentialRampToValueAtTime(.001,i+o);const c=Q.createOscillator(),l=Q.createGain();c.frequency.value=4.5+Math.random(),l.gain.value=s*.008,c.connect(l).connect(r.frequency),r.connect(a),ci(a,Os,.5),c.start(i),r.start(i),c.stop(i+o+.1),r.stop(i+o+.1)}function mb(s,t,e){if(!Q)return;const n=Q.currentTime+(e||0),i=Q.createOscillator(),o=Q.createOscillator();i.type="triangle",o.type="triangle",i.frequency.value=s,o.frequency.value=s*1.003;const r=Q.createGain();r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(t,n+.01),r.gain.exponentialRampToValueAtTime(t*.15,n+.4),r.gain.exponentialRampToValueAtTime(.001,n+2);const a=Q.createBiquadFilter();a.type="peaking",a.frequency.value=s*.5,a.Q.value=2,a.gain.value=4,i.connect(a).connect(r),o.connect(a),ci(r,Os,.4),i.start(n),o.start(n),i.stop(n+2.5),o.stop(n+2.5)}function gb(){if(!Q||!Yr)return 3;const s=3+Math.floor(Math.random()*4),t=.6+Math.random()*.8,e=Math.random(),n=e<.45?"harp":e<.75?"flute":"lute";let i=Math.floor(Math.random()*5);const o=.5+Math.random()*.5;for(let r=0;r<s;r++){const a=r*t,c=fb(i,tm);n==="harp"?db(c,o,a):n==="flute"?pb(c,o,t*.8,a):mb(c,o*.8,a);const l=Math.random();l<.3?i+=1:l<.6?i-=1:l<.8?i+=2:i-=2,i=Math.max(-3,Math.min(8,i))}return s*t+1}function xb(s,t,e,n){if(!sn||Gn||(Yr||hb(),!Yr))return;const i=Q.currentTime;Ch=t==="DEEP_NIGHT"||t==="NIGHT"?lb:Q0,tm=t==="DAY"?1:0;const o=t==="DEEP_NIGHT"?.012:t==="NIGHT"?.015:t==="DAWN"?.018:t==="DAY"?.01:.015,r=n?1.3:1;if(Os.gain.linearRampToValueAtTime(o*r,i+2),Ql=Math.min(1,(e||0)/5),uc-=s,uc<=0){const a=gb(),c=Ql>.3?3:6,l=Ql>.3?5:8;uc=a+c+Math.random()*l}}function vb(s,t,e,n,i){const o=e.x-s.x,r=e.z-s.z,a=o*o+r*r;if(a>n*n)return!1;if(a<.01)return!0;let l=Math.atan2(r,o)-t;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;return Math.abs(l)<i*.5}function Mb(s,t,e,n){const i=t.x-s.x,o=t.z-s.z,r=n?e*1.8:e;return i*i+o*o<r*r}function em(s,t,e){let n=0,i=0,o=0;for(let r=0;r<t.length;r++){const a=t[r],c=s.x-a.x,l=s.z-a.z,u=c*c+l*l;if(u>.01&&u<e*e){const h=Math.sqrt(u);n+=c/h/h,i+=l/h/h,o++}}return o>0&&(n/=o,i/=o),{x:n,z:i}}function nm(s,t){if(t.length===0)return{x:0,z:0};let e=0,n=0;for(let i=0;i<t.length;i++)e+=t[i].x,n+=t[i].z;return e/=t.length,n/=t.length,{x:e-s.x,z:n-s.z}}function _b(s,t){const e=Math.sqrt(s.x*s.x+s.z*s.z),n=ae-t;if(e<n)return{x:0,z:0};const i=(e-n)/t,o=Math.min(i*2,3);return{x:-s.x/e*o,z:-s.z/e*o}}function yb(s,t,e,n,i){let o=0,r=0;const a=Math.cos(t)*n,c=Math.sin(t)*n,l=s.x+a,u=s.z+c;for(let h=0;h<e.length;h++){const d=e[h],p=l-d.x,g=u-d.z,x=p*p+g*g,f=(d.colR||i)+1;if(x<f*f&&x>.01){const m=Math.sqrt(x),S=(f-m)/f*2;o+=p/m*S,r+=g/m*S}}return{x:o,z:r}}const Ni={deer:!1,puffling:!1,jelly:!1,moth:!1,fairyRing:!1,crystalChain:!1,pond:!1},wb={deer:"Spirit Deer",puffling:"Puffling",jelly:"Luminous Jelly",moth:"Moon Moth",fairyRing:"Fairy Ring",crystalChain:"Crystal Resonance",pond:"Moonlit Pond"};let Oi=null,hc=0,rp="";function Sb(){Oi=document.createElement("div"),Oi.id="discovery-text",Oi.style.cssText="position:fixed;top:28%;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:22px;color:#ccffee;text-shadow:0 0 12px #44ffaa,0 0 30px #228866;pointer-events:none;opacity:0;transition:opacity 0.6s;z-index:100;letter-spacing:3px;text-transform:uppercase;",document.body.appendChild(Oi)}function xs(s){Ni[s]||(Ni[s]=!0,rp=wb[s],hc=3,Oi&&(Oi.textContent=rp,Oi.style.opacity="1"))}function bb(s,t,e,n,i,o,r,a){const c=s.x,l=s.z;if(!Ni.deer)for(let u=0;u<t.length;u++){const h=t[u].group.position.x-c,d=t[u].group.position.z-l;if(h*h+d*d<144){xs("deer");break}}if(!Ni.puffling)for(let u=0;u<e.length;u++){const h=e[u].group.position.x-c,d=e[u].group.position.z-l;if(h*h+d*d<64){xs("puffling");break}}if(!Ni.jelly)for(let u=0;u<n.length;u++){const h=n[u].group.position.x-c,d=n[u].group.position.z-l;if(h*h+d*d<100){xs("jelly");break}}if(!Ni.moth)for(let u=0;u<i.length;u++){const h=i[u].group.position.x-c,d=i[u].group.position.z-l;if(h*h+d*d<64){xs("moth");break}}if(!Ni.fairyRing)for(let u=0;u<o.length;u++){const h=o[u].x-c,d=o[u].z-l;if(h*h+d*d<16){xs("fairyRing");break}}if(!Ni.pond)for(let u=0;u<r.length;u++){const h=r[u].x-c,d=r[u].z-l;if(h*h+d*d<25){xs("pond");break}}!Ni.crystalChain&&a>=3&&xs("crystalChain")}function Tb(s){hc>0&&(hc-=s,hc<=.6&&Oi&&(Oi.style.opacity="0"))}let Ph=null,tu=60;const Eb={DUSK:"Dusk",NIGHT:"Night",DEEP_NIGHT:"Deep Night",DAWN:"Dawn"},Ab={CLEAR:"Clear",MISTY:"Misty",LIGHT_RAIN:"Light Rain",HEAVY_RAIN:"Heavy Rain",FOG_BANK:"Fog",LUMINOUS_STORM:"Storm"};function Rb(){Ph=document.getElementById("hud")}function Cb(s,t){if(!Ph)return;tu=tu*.95+1/Math.max(s,.001)*.05;const e=Ze==="SEEK"?"Seek the orbs...":Ze==="RISING"?"The obelisk stirs...":Ze==="COMPLETE"?"Convergence!":"Luminaries",n=Eb[De]||"Night",i=Ab[ko]||"Clear";Ph.innerHTML="<b>"+e+"</b> · "+n+" · "+i+" · FPS:"+Math.round(tu)+"<br>Pos:"+t.x.toFixed(0)+","+t.z.toFixed(0)}let Nc=null;function Pb(){Nc=document.getElementById("orb-hud")}function Ib(){return Nc}function Lb(){const s=document.getElementById("overlay");s&&(s.style.opacity="0",setTimeout(()=>{try{s.remove()}catch{}},2500)),Nc&&(Nc.style.display="block")}const _e=[];let Co=[];const fc=[],Cn=[],ie=[],xi=[],Un=[],qe=[],Qo=[],im=[],Zr=[],Si=[],Ih=[],zc=[],Fc=[],Fr=[],On=[],vi=[],Le=[],Bn=[],Lh=[],Dh=[],sm=[],Qi=[];let ap=0,cp=0,eu=0,$n=null,pi=0;const Uh=15,Nh=[];let lp=!1;function Db(){if(lp)return;lp=!0;const s=new Zh({color:F.crystal,transparent:!0,opacity:0,blending:ce,depthWrite:!1});for(let t=0;t<Uh;t++){const e=new we,n=new Float32Array(6);e.setAttribute("position",new Ue(n,3)),e.attributes.position.setUsage(xe);const i=new Op(e,s.clone());i.visible=!1,ct.add(i),Nh.push({line:i,geo:e,opacity:0,active:!1})}}let vs=null;function Ub(){if(vs)return vs;const s=new jo(.9,1,48),t=new Y({color:F.echoBloom,transparent:!0,opacity:.5,side:Dt,depthWrite:!1,blending:ce});return vs=new I(s,t),vs.rotation.x=-Math.PI/2,vs.visible=!1,ct.add(vs),vs}const We=[];function cn(s,t){for(let e=0;e<We.length;e++){const n=We[e].x-s,i=We[e].z-t;if(n*n+i*i<We[e].r2)return!0}return!1}function Nb(){for(let n=0;n<Nd;n++){let i,o,r=!1;for(let a=0;a<20;a++){const c=w()*6.28,l=5+w()*(ae-10);i=Math.cos(c)*l,o=Math.sin(c)*l,r=!0;for(let u=0;u<_e.length;u++){const h=_e[u].x-i,d=_e[u].z-o;if(h*h+d*d<9){r=!1;break}}if(r)break}if(r){const a=6+w()*10;w();const c=Yt(i,o),l=w()*Math.PI*2,u=.8+w()*.4,h=i1(a,c);h.position.x=i,h.position.z=o,fc.push(h),_e.push({x:i,z:o,y:c,treeH:a,yRot:l,scale:u}),We.push({x:i,z:o,r2:4})}}const s=r1(10),t=Math.ceil(Nd/10)+10;Co=a1(s,_e,t);for(let n=0;n<pw;n++){let i,o,r=!1;for(let a=0;a<20;a++){const c=w()*6.28,l=10+w()*(ae*.6);if(i=Math.cos(c)*l,o=Math.sin(c)*l,r=!cn(i,o),r)break}if(r){eh(i,o,4);const a=P1(i,o);a.group.position.y=Yt(i,o),On.push(a),We.push({x:i,z:o,r2:64})}}for(let n=0;n<xw;n++){let i,o,r=!1;for(let a=0;a<20;a++){const c=w()*6.28,l=8+w()*(ae*.6);if(i=Math.cos(c)*l,o=Math.sin(c)*l,r=!cn(i,o),r)break}if(r){eh(i,o,3);const a=L1(i,o);a.group.position.y=Yt(i,o),Le.push(a),We.push({x:i,z:o,r2:49})}}for(let n=0;n<nw;n++){const i=_e[Math.floor(w()*_e.length)],o=w()*6.28,r=1+w()*4,a=i.x+Math.cos(o)*r,c=i.z+Math.sin(o)*r;if(cn(a,c))continue;const l=l1(a,c);l.group.position.y=Yt(a,c),Cn.push(l),We.push({x:a,z:c,r2:1})}for(let n=0;n<iw;n++){const i=w()*6.28,o=8+w()*ae*.6,r=Math.cos(i)*o,a=Math.sin(i)*o;if(cn(r,a))continue;const c=u1(r,a);c.group.position.y=Yt(r,a),ie.push(c),We.push({x:r,z:a,r2:4})}for(let n=0;n<sw;n++){const i=w()*6.28,o=10+w()*ae*.5,r=Math.cos(i)*o,a=Math.sin(i)*o;xi.push(T1(r,Yt(r,a)+3+w()*5,a))}for(let n=0;n<ow;n++){const i=Cn[Math.floor(w()*Cn.length)],o=w()*6.28,r=1+w()*5,a=i.x+Math.cos(o)*r,c=i.z+Math.sin(o)*r;if(cn(a,c))continue;const l=E1(a,c);l.group.position.y=Yt(a,c),l._baseY=Yt(a,c),Un.push(l)}for(let n=0;n<rw;n++){const i=w()*6.28,o=12+w()*ae*.5,r=Math.cos(i)*o,a=Math.sin(i)*o;if(cn(r,a))continue;const c=A1(r,a),l=Yt(r,a);c.group.position.y=l,c._baseY=l,qe.push(c)}for(let n=0;n<aw;n++){const i=_e[Math.floor(w()*_e.length)];Qo.push(R1(i.x,Yt(i.x,i.z)+2+w()*4,i.z))}const e=[null,F.grassPurple,F.grassBlue,F.grassTeal];for(let n=0;n<cw;n++){const i=w()*6.28,o=2+w()*(ae*.9),r=Math.cos(i)*o,a=Math.sin(i)*o,c=e[Math.floor(w()*e.length)],l=2+w()*2.5,u=25+Math.floor(w()*20);if(cn(r,a))continue;const h=f1(r,a,l,u,c);h.mesh.position.y=Yt(r,a),im.push(h),We.push({x:r,z:a,r2:l*l})}for(let n=0;n<fw;n++){let i,o,r=!1;for(let a=0;a<10;a++){const c=w()*6.28,l=3+w()*(ae*.85);if(i=Math.cos(c)*l,o=Math.sin(c)*l,r=!cn(i,o),r)break}if(r){const a=U1(i,o);a.group.position.y=Yt(i,o)-.08,zc.push(a),We.push({x:i,z:o,r2:2.25})}}for(let n=0;n<lw;n++){const i=_e[Math.floor(w()*_e.length)],o=w()*6.28,r=1+w()*5,a=i.x+Math.cos(o)*r,c=i.z+Math.sin(o)*r;if(cn(a,c))continue;const l=d1(a,c);l.group.position.y=Yt(a,c),Zr.push(l),We.push({x:a,z:c,r2:1})}for(let n=0;n<uw;n++){const i=w()*6.28,o=3+w()*(ae*.7),r=Math.cos(i)*o,a=Math.sin(i)*o;if(cn(r,a))continue;const c=p1(r,a);c.group.position.y=Yt(r,a),Si.push(c),We.push({x:r,z:a,r2:1})}for(let n=0;n<hw;n++){const i=w()*6.28,o=4+w()*(ae*.8),r=Math.cos(i)*o,a=Math.sin(i)*o;if(cn(r,a))continue;const c=m1(r,a);c.group.position.y=Yt(r,a),Ih.push(c),We.push({x:r,z:a,r2:1})}for(let n=0;n<Mo;n++){let i,o,r=!1;for(let a=0;a<30;a++){const c=w()*6.28,l=20+w()*(ae*.6);i=Math.cos(c)*l,o=Math.sin(c)*l,r=!0;for(let u=0;u<Bn.length;u++){const h=Bn[u].x-i,d=Bn[u].z-o;if(h*h+d*d<225){r=!1;break}}if(r)break}if(r){const a=D1(i,o);a.group.position.y=Yt(i,o)+1,a.flyY=Yt(i,o)+1,Bn.push(a)}}for(let n=0;n<n0;n++){const i=w()*6.28,o=2+w()*3,r=Math.cos(i)*o,a=Math.sin(i)*o;Fc.push(C1(r,Yt(r,a)+1+w()*.5,a))}for(let n=0;n<dw;n++){const i=w()*6.28,o=4+w()*(ae*.7),r=Math.cos(i)*o,a=Math.sin(i)*o;if(cn(r,a))continue;const c=M1(r,a);c.group.position.y=Yt(r,a),Fr.push(c),We.push({x:r,z:a,r2:1})}for(let n=0;n<mw;n++){const i=w()*6.28,o=5+w()*ae*.6,r=Math.cos(i)*o,a=Math.sin(i)*o;vi.push(I1(r,Yt(r,a)+.5+w()*5,a))}for(let n=0;n<vw;n++){const i=w()*6.28,o=5+w()*(ae*.7),r=Math.cos(i)*o,a=Math.sin(i)*o;if(cn(r,a))continue;const c=y1(r,a);c.group.position.y=Yt(r,a),Lh.push(c),We.push({x:r,z:a,r2:2.25})}for(let n=0;n<Mw;n++){const i=_e[Math.floor(w()*_e.length)],o=w()*6.28,r=2+w()*4,a=i.x+Math.cos(o)*r,c=i.z+Math.sin(o)*r;if(cn(a,c))continue;const l=w1(a,c);l.group.position.y=Yt(a,c),Dh.push(l),We.push({x:a,z:c,r2:1})}for(let n=0;n<_w;n++){const i=w()*6.28,o=6+w()*(ae*.65),r=Math.cos(i)*o,a=Math.sin(i)*o;if(cn(r,a))continue;const c=S1(r,a);c.group.position.y=Yt(r,a),sm.push(c),We.push({x:r,z:a,r2:2.25})}for(let n=0;n<_e.length;n++){const i=_e[n],o=Yt(i.x,i.z);i.y=o,fc[n]&&(fc[n].position.y=o+(i.treeH||10)*.6)}if(Co.length>0){const n=new le;for(let i=0;i<Co.length;i++){const o=Co[i];for(let r=0;r<o.instances.length;r++){const a=o.instances[r],c=_e[a.posIdx];a.y=c.y,n.position.set(c.x,c.y,c.z),n.rotation.set(0,c.yRot,0),n.scale.setScalar(c.scale),n.updateMatrix(),o.trunk&&o.trunk.setMatrixAt(r,n.matrix),o.canopy&&o.canopy.setMatrixAt(r,n.matrix),o.glow&&o.glow.setMatrixAt(r,n.matrix),o.detail&&o.detail.setMatrixAt(r,n.matrix)}o.trunk&&(o.trunk.instanceMatrix.needsUpdate=!0),o.canopy&&(o.canopy.instanceMatrix.needsUpdate=!0),o.glow&&(o.glow.instanceMatrix.needsUpdate=!0),o.detail&&(o.detail.instanceMatrix.needsUpdate=!0)}}}function om(s,t){const e=1+Vi*1.5,n=Ls*.03,i=Ro*.03,o=Z.pos.x,r=Z.pos.y,a=Z.pos.z;c1(Co,fc,o,r,a,t,e,n,i),h1(t,e,n,i,o,a);for(let c=0;c<Zr.length;c++){const l=Zr[c],u=l.group.position.x-o,h=l.group.position.y-r,d=l.group.position.z-a,p=u*u+h*h+d*d;if(p>1600){l.group.visible&&(l.group.visible=!1);continue}l.group.visible||(l.group.visible=!0),!(p>900)&&(l.group.rotation.z=Math.sin(t*.8+l.phase)*.03*e+n,l.group.rotation.x=Math.sin(t*.6+l.phase+1)*.02*e+i)}for(let c=0;c<Si.length;c++){const l=Si[c],u=l.group.position.x-o,h=l.group.position.y-r,d=l.group.position.z-a,p=u*u+h*h+d*d;if(p>1600){l.group.visible&&(l.group.visible=!1);continue}if(l.group.visible||(l.group.visible=!0),p>900)continue;const g=Math.sin(t*1+l.phase)*.5+.5;l.petalMat.emissiveIntensity=(.3+g*.5)*Te,l.group.rotation.z=Math.sin(t*.9+l.phase)*.04*e+n*.5}for(let c=0;c<Ih.length;c++){const l=Ih[c],u=l.group.position.x-o,h=l.group.position.y-r,d=l.group.position.z-a,p=u*u+h*h+d*d;if(p>1600){l.group.visible&&(l.group.visible=!1);continue}l.group.visible||(l.group.visible=!0),!(p>900)&&(l.group.rotation.z=Math.sin(t*1.1+l.phase)*l.swayAmp*e+n,l.group.rotation.x=Math.sin(t*.8+l.phase+2)*l.swayAmp*.5*e+i)}for(let c=0;c<Lh.length;c++){const l=Lh[c],u=Math.sin(t*1.2+l.phase)*.5+.5;l.orbMat.emissiveIntensity=(.5+u*.5)*Te,l.hazeMat.opacity=(.04+u*.04)*Te,l.group.rotation.z=Math.sin(t*.5+l.phase)*.02*e+n*.3,l.group.rotation.x=Math.sin(t*.4+l.phase+1)*.015*e+i*.3}for(let c=0;c<Dh.length;c++){const l=Dh[c];for(let u=0;u<l.podMats.length;u++){const h=Math.sin(t*1.5+l.phase+u*1.8)*.5+.5;l.podMats[u].emissiveIntensity=(.3+h*.5)*Te}l.group.rotation.z=Math.sin(t*.35+l.phase)*.01*e+n*.2}b1(sm,s,t,Te)}function rm(s,t){for(let n=0;n<xi.length;n++){const i=xi[n],o=i.group,r=o.position.x,a=o.position.z;i._syncPhase===void 0&&(i._syncPhase=i.phase);let c=0,l=0;for(let u=0;u<xi.length;u++){if(u===n)continue;const h=xi[u],d=h.group.position.x-r,p=h.group.position.z-a;d*d+p*p<225&&(c+=h._syncPhase||h.phase,l++)}if(l>0){const u=c/l;i._syncPhase+=(u-i._syncPhase)*s*.4}}const e=De==="DEEP_NIGHT"?2:De==="DAWN"?-1.5:0;for(let n=0;n<xi.length;n++){const i=xi[n],o=i.group,r=o.position.x,a=o.position.z,c=i.floatY+e;if(i._stT-=s,i._stT<=0)if(Xi)i._state="display",i._stT=10+Math.random()*15;else{const p=Math.random();p<.5?(i._state="drift",i._stT=20+Math.random()*30):p<.75?(i._state="pulse",i._stT=8+Math.random()*12):(i._state="migrate",i._migrateAng=Math.random()*6.28,i._stT=15+Math.random()*20)}switch(Xi&&i._state!=="display"&&(i._state="display",i._stT=10,Hs("jelly",{x:r,z:a},Z.pos)),i._state){case"drift":{i.driftAng+=s*.15;const p=8+Math.sin(t*.1+i.phase)*4,g=i.homeX+Math.cos(i.driftAng)*p,x=i.homeZ+Math.sin(i.driftAng)*p;o.position.x+=(g-r)*s*.3,o.position.z+=(x-a)*s*.3,o.position.y=c+Math.sin(t*i.wobble+i.phase)*1.5;break}case"pulse":{i.driftAng+=s*.08,o.position.x+=Math.cos(i.driftAng)*s*.3,o.position.z+=Math.sin(i.driftAng)*s*.3,o.position.y=c+Math.sin(t*i.wobble+i.phase)*1,i._pulseSync=Math.sin(t*2+i._syncPhase)*.5+.5;break}case"migrate":{o.position.x+=Math.cos(i._migrateAng)*s*1,o.position.z+=Math.sin(i._migrateAng)*s*1,o.position.y=c+Math.sin(t*i.wobble+i.phase)*.8,o.position.x*o.position.x+o.position.z*o.position.z>ae*.8*(ae*.8)&&(i._migrateAng+=Math.PI);break}case"display":{i.driftAng+=s*.4,o.position.x+=Math.cos(i.driftAng)*s*.8,o.position.z+=Math.sin(i.driftAng)*s*.8,o.position.y=c+Math.sin(t*2+i.phase)*2,i._syncPhase+=(0-i._syncPhase)*s*2;break}}i._state==="pulse"&&Math.random()<.003&&Hs("jelly",{x:r,z:a},Z.pos);const l=i._syncPhase||i.phase,u=Math.sin(t*1.2+l)*.5+.5;let h=1,d=0;if(i._state==="pulse")h=1+i._pulseSync*1.5,d=i._pulseSync*.15;else if(i._state==="display"){const p=Math.sin(t*4)*.5+.5;h=1.5+p*1.2,d=.15+p*.1}else i._state==="drift"&&(h=1+u*.3);i.bellMat.emissiveIntensity=(.4+u*.8)*Te*h,i.bellMat.opacity=.35+u*.25+d,o.rotation.y+=s*.2;for(let p=2;p<o.children.length;p++)o.children[p].rotation.x=Math.sin(t*2+p+l)*.15,o.children[p].rotation.z=Math.sin(t*1.5+p*.7+l)*.1}}function am(s,t){const e=ze.ShiftLeft||ze.ShiftRight||ir,n=De==="DAWN"?.6:De==="NIGHT"?1.3:1,i=De==="DAWN"?2:De==="NIGHT"?.6:1;for(let o=0;o<Un.length;o++){const r=Un[o],a=r.group,c=a.position.x,l=a.position.z,u=c-Z.pos.x,h=l-Z.pos.z,d=u*u+h*h;if(r.state!=="startled"&&r.state!=="following"&&r.state!=="huddle"){const T=e?3.5:2;let b=d<T*T;if(!b)for(let y=0;y<qe.length;y++){if(qe[y].state!=="flee")continue;const v=qe[y].group.position.x-c,R=qe[y].group.position.z-l;if(v*v+R*R<25){b=!0;break}}b&&(r.state="startled",r._scaredT=.6+Math.random()*.5,r.wanderAng=Math.atan2(u,h),r.hopTimer=0,Hs("puff",{x:c,z:l},Z.pos))}if(Xi&&r.state!=="startled"&&r.state!=="huddle"){let T=1/0,b=-1;for(let y=0;y<Un.length;y++){if(y===o)continue;const v=Un[y].group.position.x-c,R=Un[y].group.position.z-l,U=v*v+R*R;U<T&&(T=U,b=y)}b>=0&&T>1&&(r.state="huddle",r._huddleTarget=b)}Jo>8&&d<144&&r.state==="idle"&&Math.random()<.001&&(r.state="following",r._followT=10+Math.random()*10);const p=c-r._lastTX,g=l-r._lastTZ;p*p+g*g>.25&&(r._baseY=Yt(c,l),r._lastTX=c,r._lastTZ=l);const x={x:c,z:l},f=[];for(let T=0;T<Un.length;T++){if(T===o)continue;const b=Un[T].group.position.x,y=Un[T].group.position.z;(b-c)*(b-c)+(y-l)*(y-l)<100&&f.push({x:b,z:y})}const m=em(x,f,1.5),S=f.length>0?nm(x,f):{x:0,z:0},M=m.x*2+S.x*.3,_=m.z*2+S.z*.3,A=Math.sqrt(M*M+_*_);switch(r.state){case"idle":{if(r.idleTimer-=s,a.position.y=r._baseY+Math.sin(t*2+r.phase)*.02,a.rotation.y+=Math.sin(t*.5+r.phase)*s*.3,A>.1&&f.length>1&&(a.position.x+=S.x*.05*s,a.position.z+=S.z*.05*s),Math.random()<2e-4&&Hs("puff",{x:c,z:l},Z.pos),r.idleTimer<=0){const T=A>.2?Math.atan2(M,_):0;r.state="hop",r.wanderAng+=(Math.random()-.5)*1.5+T*.3,r.hopTimer=0}break}case"hop":{r.hopTimer+=s;const b=r.hopTimer/1.2;if(b>=1)r.state="idle",r.idleTimer=(1.5+Math.random()*3)*i,a.position.y=r._baseY;else{a.position.y=r._baseY+Math.sin(b*Math.PI)*.3,a.position.x+=Math.sin(r.wanderAng)*r.speed*n*s,a.position.z+=Math.cos(r.wanderAng)*r.speed*s;const y=1-Math.sin(b*Math.PI)*.15,v=1+Math.sin(b*Math.PI)*.2;a.scale.set(y,v,y),a.rotation.y=r.wanderAng}break}case"startled":{r._scaredT-=s,r.hopTimer+=s*1.5;const T=Math.min(r.hopTimer/.8,1);a.position.y=r._baseY+Math.sin(T*Math.PI)*.5,a.position.x+=Math.sin(r.wanderAng)*r.speed*2*s+m.x*.5*s,a.position.z+=Math.cos(r.wanderAng)*r.speed*2*s+m.z*.5*s,a.scale.set(.85,1.3,.85),r._scaredT<=0&&(r.state="idle",r.idleTimer=3+Math.random()*3,a.position.y=r._baseY,a.scale.set(1,1,1));break}case"following":{if(r._followT-=s,d>225||Jo<3||r._followT<=0){r.state="idle",r.idleTimer=2;break}if(r.wanderAng=Math.atan2(Z.pos.x-c,Z.pos.z-l),d>9){r.hopTimer+=s;const T=r.hopTimer%1.5/1.5;a.position.y=r._baseY+Math.sin(T*Math.PI)*.2,a.position.x+=Math.sin(r.wanderAng)*r.speed*.4*s,a.position.z+=Math.cos(r.wanderAng)*r.speed*.4*s}else a.position.y=r._baseY+Math.sin(t*3+r.phase)*.03;a.rotation.y=r.wanderAng;break}case"huddle":{if(!Xi){r.state="idle",r.idleTimer=2;break}const T=Un[r._huddleTarget];if(T){const b=T.group.position.x-c,y=T.group.position.z-l,v=Math.sqrt(b*b+y*y);v>.5&&(a.position.x+=b/v*r.speed*.5*s,a.position.z+=y/v*r.speed*.5*s)}a.rotation.z=Math.sin(t*8)*.05,a.position.y=r._baseY;break}}if(r._blinkTimer-=s,r._blinkTimer<=0)if(r._blinkState===0){for(let T=0;T<r.eyes.length;T++)r.eyes[T].scale.y=.1;r._blinkState=1,r._blinkTimer=.08+Math.random()*.06}else{for(let T=0;T<r.eyes.length;T++)r.eyes[T].scale.y=1;r._blinkState=0,r._blinkTimer=2+Math.random()*5}for(let T=0;T<r.ears.length;T++){const b=r.ears[T];b.mesh.rotation.z=b.baseRotZ+Math.sin(t*3.5+b.side*1.2+r.phase)*.08}r.tail.position.y=.38+Math.sin(t*4+r.phase)*.015,a.position.x*a.position.x+a.position.z*a.position.z>ae*.85*(ae*.85)&&(r.wanderAng+=Math.PI)}}function cm(s,t){const e=ze.ShiftLeft||ze.ShiftRight||ir;for(let n=0;n<qe.length;n++){const i=qe[n],o=i.group,r=o.position.x,a=o.position.z,c=r-Z.pos.x,l=a-Z.pos.z,u=c*c+l*l,h=Math.atan2(c,l),d=e?18:12,p=d*d,g=e?10:Sw,x=g*g,f=r-i._lastTX,m=a-i._lastTZ;f*f+m*m>.25&&(i._baseY=Yt(r,a),i._lastTX=r,i._lastTZ=a);const S=i._baseY;if(i.state!=="flee"&&i.state!=="alert"&&i.state!=="watching"){const v={x:r,z:a},R={x:Z.pos.x,z:Z.pos.z};u<x||Mb(v,R,g,e)?(i.state="flee",i.wanderAng=h,i.fleeTimer=2.5+Math.random()*2,i._zigTimer=0,Hs("deer",v,Z.pos)):(u<p||vb(v,i.wanderAng,R,d,Math.PI*.5))&&(i.state="alert",i._stT=1+Math.random()*1.5,Hs("deer",v,Z.pos))}if(i.state!=="flee")for(let v=0;v<qe.length;v++){if(v===n||qe[v].state!=="flee")continue;const R=qe[v].group.position.x-r,U=qe[v].group.position.z-a;if(R*R+U*U<400){i.state="flee",i.wanderAng=qe[v].wanderAng+(Math.random()-.5)*.4,i.fleeTimer=2+Math.random()*1.5,i._zigTimer=0;break}}const M=[];for(let v=0;v<qe.length;v++){if(v===n)continue;const R=qe[v].group.position.x,U=qe[v].group.position.z;(R-r)*(R-r)+(U-a)*(U-a)<400&&M.push({x:R,z:U})}const _=em({x:r,z:a},M,3),A=M.length>0?nm({x:r,z:a},M):{x:0,z:0};(i.state==="alert"||i.state==="watching")&&(i.headLook+=(h-i.wanderAng)*.3*s);let E=i.speed,T=!1;switch(i.state){case"walk":{if(T=!0,i.walkTimer-=s,i.walkTimer<=0){const R=Math.random(),U=De==="DUSK"?.55:.4,L=De==="DEEP_NIGHT"?.25:.1;if(R<.25)i.state="pause",i.pauseTimer=2+Math.random()*3;else if(R<U)i.state="graze",i._stT=De==="DUSK"?5+Math.random()*6:3+Math.random()*4;else if(R<U+.1&&Le.length>0){i.state="drink",i._stT=8;let z=1/0;for(let V=0;V<Le.length;V++){const G=Le[V].x-r,j=Le[V].z-a,W=G*G+j*j;W<z&&(z=W,i._drinkTgt=Le[V])}}else R<U+.1+L?(i.state="rest",i._stT=De==="DEEP_NIGHT"?8+Math.random()*8:5+Math.random()*5):(i.wanderAng+=(Math.random()-.5)*1.2,i.walkTimer=3+Math.random()*5)}if((r-i.homeX)*(r-i.homeX)+(a-i.homeZ)*(a-i.homeZ)>400){const R=Math.atan2(i.homeX-r,i.homeZ-a);i.wanderAng+=(R-i.wanderAng)*s*.5}if(M.length>0){const R=Math.atan2(A.x*.15+_.x*.8,A.z*.15+_.z*.8);i.wanderAng+=(R-i.wanderAng)*s*.3}break}case"pause":{i.pauseTimer-=s,i.headLook=Math.sin(t*.6)*.4,i.pauseTimer<=0&&(i.state="walk",i.walkTimer=3+Math.random()*5);break}case"graze":{i._stT-=s,i.headBob=-.5,i._stT<=0&&(i.state="walk",i.walkTimer=2+Math.random()*4,i.headBob=0);break}case"drink":{if(i._stT-=s,i._drinkTgt){const v=i._drinkTgt.x-r,R=i._drinkTgt.z-a;Math.sqrt(v*v+R*R)>2?(i.wanderAng=Math.atan2(v,R),T=!0,E=i.speed*.7):i.headBob=-.6}i._stT<=0&&(i.state="walk",i.walkTimer=3+Math.random()*4,i.headBob=0,i._drinkTgt=null);break}case"rest":{i._stT-=s,o.position.y=Math.max(S-.3,o.position.y-s*.5),i._stT<=0&&(i.state="walk",i.walkTimer=2+Math.random()*3);break}case"alert":{i._stT-=s,u<x?(i.state="flee",i.wanderAng=h,i.fleeTimer=2.5+Math.random()*2):i._stT<=0&&(u<d*1.2*(d*1.2)?(i.state="watching",i._stT=3+Math.random()*3):(i.state="walk",i.walkTimer=2+Math.random()*3));break}case"watching":{i._stT-=s,T=!0,E=i.speed*.3,i.wanderAng=h,u<x?(i.state="flee",i.wanderAng=h,i.fleeTimer=2.5+Math.random()*2):(u>d*1.5*(d*1.5)||i._stT<=0)&&(i.state="walk",i.walkTimer=2+Math.random()*4);break}case"flee":{T=!0,E=i.speed*bw,i.fleeTimer-=s,i._zigTimer-=s,i._zigTimer<=0&&(i._zigDir*=-1,i._zigTimer=.4+Math.random()*.4),i.wanderAng=h+i._zigDir*.3;const v=yb({x:r,z:a},i.wanderAng,_e,3,1.5);v.x*v.x+v.z*v.z>.01&&(i.wanderAng+=Math.atan2(v.z,v.x)*.3);const R=_b({x:r,z:a},8);(R.x!==0||R.z!==0)&&(i.wanderAng=Math.atan2(R.z,R.x)),(i.fleeTimer<=0||u>d*2*(d*2))&&(i.state="walk",i.walkTimer=3+Math.random()*5);break}}if(T&&(o.position.x+=Math.sin(i.wanderAng)*E*s,o.position.z+=Math.cos(i.wanderAng)*E*s,i.legCycle+=s*E*3),o.position.x*o.position.x+o.position.z*o.position.z>ae*.9*(ae*.9)&&(i.wanderAng=Math.atan2(-o.position.x,-o.position.z)),i.state!=="rest"){const v=S-o.position.y;Math.abs(v)>.01?o.position.y+=Math.sign(v)*Math.min(Math.abs(v),s*2):o.position.y=S}if(o.rotation.y=i.wanderAng,i.state==="alert"||i.state==="watching"){const v=h-i.wanderAng;i.headLook+=(v*.5-i.headLook)*s*3}const y=i.headBob||0;i.neckPivot.rotation.x+=(y-i.neckPivot.rotation.x)*s*3,i.neckPivot.rotation.y+=(i.headLook-i.neckPivot.rotation.y)*s*4,T&&i.state!=="graze"&&i.state!=="drink"&&(i.neckPivot.rotation.x+=Math.sin(i.legCycle*2)*.05);for(let v=0;v<i.legPivots.length;v++){const R=i.legPivots[v];if(T){const U=R.isFront?0:Math.PI,L=R.side>0?Math.PI:0,z=Math.sin(i.legCycle+U+L)*.4*(E/i.speed);R.upper.rotation.x=z,R.lower.rotation.x=Math.max(0,-z*.6)}else i.state==="rest"&&o.position.y<-.1?(R.upper.rotation.x+=(.8-R.upper.rotation.x)*s*2,R.lower.rotation.x+=(1-R.lower.rotation.x)*s*2):(R.upper.rotation.x*=.9,R.lower.rotation.x*=.9)}i.tailPivot.rotation.x=Math.sin(t*1.5+i.phase)*.15,i.state==="flee"&&(i.tailPivot.rotation.x+=.3),i.state==="alert"?i.tailPivot.rotation.z=Math.sin(t*6)*.1:i.tailPivot.rotation.z*=.9,i.mat.emissiveIntensity=(.3+Math.sin(t*.8+i.phase)*.2)*Te,i.headLook*=.98}}function lm(s,t){for(let e=0;e<Qo.length;e++){const n=Qo[e],i=n.group,o=i.position.x,r=i.position.z;if(n._state==="patrol"){if(Math.random()<.002){let g=1/0,x=null;for(let f=0;f<ie.length;f++){const m=ie[f].x-o,S=ie[f].z-r,M=m*m+S*S;M<900&&M<g&&(g=M,x=ie[f])}for(let f=0;f<On.length;f++){if(On[f].glowIntensity<.3)continue;const m=On[f].x-o,S=On[f].z-r,M=m*m+S*S;M<900&&M<g&&(g=M,x=On[f])}x&&(n._state="attracted",n._attractTarget=x,n._stT=6+Math.random()*8,Hs("moth",{x:o,z:r},Z.pos))}const p=De==="DAWN"?.005:De==="DEEP_NIGHT"?3e-4:.001;if(Math.random()<p){let g=1/0,x=null;for(let f=0;f<_e.length;f++){const m=_e[f].x-o,S=_e[f].z-r,M=m*m+S*S;M<400&&M<g&&(g=M,x=_e[f])}x&&(n._state="rest",n._restTree=x,n._stT=De==="DAWN"?8+Math.random()*10:4+Math.random()*6)}}const a=De==="DEEP_NIGHT"?1.6:De==="DAWN"?.5:1,c=De==="DEEP_NIGHT"?1.4:1;switch(n._state){case"patrol":{n.orbitAng+=s*.4*a;const p=n.centerX+Math.cos(n.orbitAng)*n.orbitR*c,g=n.centerZ+Math.sin(n.orbitAng)*n.orbitR*c;i.position.x+=(p-o)*s*1.5,i.position.z+=(g-r)*s*1.5,i.position.y=n.floatY+Math.sin(t*.7+n.phase)*.8,i.rotation.y=n.orbitAng+Math.PI/2;break}case"attracted":{if(n._stT-=s,!n._attractTarget||n._stT<=0){n._state="patrol",n._attractTarget=null;break}n.orbitAng+=s*.8;const p=n._attractTarget,g=Math.max(.5,n._stT*.4),x=p.x+Math.cos(n.orbitAng)*g,f=p.z+Math.sin(n.orbitAng)*g;i.position.x+=(x-o)*s*2,i.position.z+=(f-r)*s*2,i.position.y+=(2-i.position.y)*s*.5,i.rotation.y=n.orbitAng+Math.PI/2;break}case"rest":{if(n._stT-=s,!n._restTree||n._stT<=0){n._state="patrol",n._restTree=null,n.centerX=i.position.x,n.centerZ=i.position.z;break}const p=n._restTree,g=p.x+.5-o,x=p.z+.5-r,f=Math.sqrt(g*g+x*x);f>.3&&(i.position.x+=g/f*s*2,i.position.z+=x/f*s*2),i.position.y+=(2.5-i.position.y)*s*1.5,i.rotation.y=Math.atan2(g,x);break}}const l=n._state==="rest"?.05:.4,u=Math.sin(t*n.flapSpeed+n.phase)*l;for(let p=0;p<i._wingPivots.length;p++){const g=i._wingPivots[p];g.pivot.rotation.z=u*g.side}const h=Math.sin(t*1.5+n.phase)*.5+.5,d=n._state==="attracted"?.4:0;n.wingMat.emissiveIntensity=(.5+h*.6+d)*Te,n.wingMat.opacity=.45+h*.25}}function zb(s,t){const e=ze.ShiftLeft||ze.ShiftRight||ir;let n=null;if(Jo>5&&(Ze==="SEEK"||Ze==="RISING")){let i=1/0;for(let o=0;o<Bn.length;o++){if(Bn[o].found)continue;const r=Bn[o].x-Z.pos.x,a=Bn[o].z-Z.pos.z,c=r*r+a*a;c<i&&(i=c,n=Bn[o])}}for(let i=0;i<Fc.length;i++){const o=Fc[i],r=t*.5+o.phase+i/n0*6.28,a=e?4+i*2:1.5+i*.8,c=e?3+i:1.2+Math.sin(t*.7+o.phase)*.5;if(o.targetX=Z.pos.x+Math.cos(r)*a,o.targetY=Z.pos.y-Hc+c,o.targetZ=Z.pos.z+Math.sin(r)*a,i===0&&n){const g=Math.min((Jo-5)/3,.6);o.targetX+=(n.x-Z.pos.x)*g,o.targetZ+=(n.z-Z.pos.z)*g,o.targetY+=.5}const l=e?.8:2.5;o.velX+=(o.targetX-o.group.position.x)*l*s,o.velY+=(o.targetY-o.group.position.y)*l*s,o.velZ+=(o.targetZ-o.group.position.z)*l*s,o.velX*=.92,o.velY*=.92,o.velZ*=.92,o.group.position.x+=o.velX*s*4,o.group.position.y+=o.velY*s*4,o.group.position.z+=o.velZ*s*4;const u=Math.sin(t*2+o.phase)*.5+.5;o.glowMat.opacity=.3+u*.4,o.hazeMat.opacity=.08+u*.12;const h=t*(2.5+i*.5)+o.phase,d=.14+Math.sin(t*1.3+o.phase)*.06;o.group.children[5].position.set(Math.cos(h)*d,Math.sin(h*1.5)*.08,Math.sin(h)*d);for(let g=0;g<o.tendrils.length;g++){const x=o.tendrils[g],f=Math.sin(t*3+g*2.1+o.phase)*.3,m=.08+Math.sin(t*2+g*1.5)*.04;x.mesh.position.x=Math.cos(x.baseAng+f)*m,x.mesh.position.z=Math.sin(x.baseAng+f)*m,x.mesh.rotation.y=x.baseAng+f,x.mesh.rotation.z=Math.PI/3+Math.sin(t*2.5+g)*.2}for(let g=0;g<o.embers.length;g++){const x=(g+1)*.08;o.embers[g].position.y=-.06-x+Math.sin(t*4+g*1.4+o.phase)*.03,o.embers[g].position.x=Math.sin(t*2.5+g*2+o.phase)*.06,o.embers[g].material.opacity=.2+Math.sin(t*5+g*1.7)*.15}o.facet.rotation.y+=s*1.5,o.facet.rotation.x+=s*.7,o.halo.rotation.z+=s*.3,o.halo2.rotation.y+=s*.2}}function Fb(s,t){for(let e=0;e<On.length;e++){const n=On[e],i=n.x-Z.pos.x,o=n.z-Z.pos.z,a=i*i+o*o<($u+.5)*($u+.5),c=a?1:0;n.glowIntensity+=(c-n.glowIntensity)*s*3,n.discMat.opacity=n.glowIntensity*.25*(.6+Math.sin(t*2+n.phase)*.4),n.mushMat.emissiveIntensity=(.2+n.glowIntensity*.8)*Te,a&&Z.vel.y>0&&Z.vel.y<=wc+.5&&(Z.vel.y=wc+yw,n.glowIntensity=1.5,ob());const l=.08+n.glowIntensity*.25;n.sporeMat.opacity=l;for(let u=0;u<n.spores.length;u++){const h=n.spores[u];h.drift+=s*.3,h.mesh.position.y+=h.speed*s*(.5+n.glowIntensity),h.mesh.position.x=h.baseX+Math.sin(t*.8+h.drift)*.15,h.mesh.position.z=h.baseZ+Math.cos(t*.6+h.drift)*.12,h.mesh.position.y>.8&&(h.mesh.position.y=.03),h.mesh.scale.setScalar(.6+Math.sin(t*2+u)*.4)}for(let u=0;u<n.glowWorms.length;u++){const h=Math.sin(t*1.5+u*1.3+n.phase)*.5+.5;n.glowWorms[u].material.opacity=.1+h*.4+n.glowIntensity*.3}}}function Ob(s,t){for(let e=0;e<vi.length;e++){const n=vi[e];if(n.popped){if(n.popTimer-=s,n.popTimer<=0){n.popped=!1,n.group.visible=!0;const u=w()*6.28,h=8+w()*ae*.5;n.homeX=Math.cos(u)*h,n.homeZ=Math.sin(u)*h,n.floatY=.5+w()*4,n.group.position.set(n.homeX,n.floatY,n.homeZ)}continue}n.driftAng+=s*.2;const i=n.homeX+Math.sin(n.driftAng)*3,o=n.homeZ+Math.cos(n.driftAng*.7)*3;n.group.position.x+=(i-n.group.position.x)*s*.5,n.group.position.z+=(o-n.group.position.z)*s*.5,n.group.position.y=n.floatY+Math.sin(t*.6+n.phase)*n.bobAmp;const r=(t*.1+n.phase)%1;n.shellMat.color.setRGB(Math.sin(r*6.28)*.15+.7,Math.sin(r*6.28+2.09)*.15+.7,Math.sin(r*6.28+4.19)*.15+.8),n.shellMat.opacity=.18+Math.sin(t*1.5+n.phase)*.08;const a=n.group.position.x-Z.pos.x,c=n.group.position.y-Z.pos.y,l=n.group.position.z-Z.pos.z;a*a+c*c+l*l<zd*zd*n.sc*n.sc&&(n.popped=!0,n.popTimer=8+Math.random()*8,n.group.visible=!1,sS(n.group.position.x,n.group.position.y,n.group.position.z,6),JS(n.group.position,Z.pos))}}function Bb(s,t){const e=Nr();for(let n=0;n<Le.length;n++){const i=Le[n],o=.015+e*.01;for(let h=0;h<i.pads.length;h++)i.pads[h].mesh.position.y=.05+Math.sin(t*(.8+e*.4)+i.pads[h].phase)*o;const r=e*.08;i.waterMat.emissiveIntensity=(.15+r+Math.sin(t*1+i.phase)*.1)*Te;const a=Math.sin(t*1.2+i.phase)*.5+.5;i.flMat.emissiveIntensity=(.3+a*.5)*Te;const c=.25+e*.2,l=.12+e*.08;for(let h=0;h<i.ripples.length;h++){const d=i.ripples[h],p=(t*c+d.phase)%1,g=.2+p*i.pondR*.8;d.mesh.scale.setScalar(g),d.mesh.material.opacity=(1-p)*l}const u=1+e*.5;for(let h=0;h<i.tadpoles.length;h++){const d=i.tadpoles[h];d.ang+=d.speed*u*s;const p=Math.cos(d.ang)*d.orbR,g=Math.sin(d.ang)*d.orbR;d.body.position.x=p,d.body.position.z=g,d.body.rotation.y=d.ang+Math.PI/2;const x=.02;d.tail.position.x=p-Math.cos(d.ang)*x,d.tail.position.z=g-Math.sin(d.ang)*x,d.tail.rotation.y=d.ang,d.tail.rotation.z=Math.PI/2+Math.sin(t*(8+e*2)+h*3)*.4}}}function kb(s,t){if(eu-=s,eu<=0){eu=.5;for(let o=0;o<ie.length;o++){const r=ie[o],a=r.x-Z.pos.x,c=r.z-Z.pos.z;if(a*a+c*c<36){$n={x:r.x,z:r.z},pi=0;break}}}const e=Ub();if(!$n){e.visible=!1;return}if(pi+=s*12,pi>30){$n=null,pi=0,e.visible=!1;return}e.visible=!0,e.position.set($n.x,.15,$n.z),e.scale.setScalar(pi),e.material.opacity=(1-pi/30)*.45;const n=pi,i=4;for(let o=0;o<Cn.length;o++){const r=Cn[o],a=r.x-$n.x,c=r.z-$n.z,l=Math.sqrt(a*a+c*c);if(Math.abs(l-n)<i){const u=1-Math.abs(l-n)/i;r.capMat.emissiveIntensity=Math.max(r.capMat.emissiveIntensity,(r.base+u*2)*Te)}}for(let o=0;o<Si.length;o++){const r=Si[o],a=r.group.position.x-$n.x,c=r.group.position.z-$n.z,l=Math.sqrt(a*a+c*c);if(Math.abs(l-n)<i){const u=1-Math.abs(l-n)/i;r.petalMat.emissiveIntensity=Math.max(r.petalMat.emissiveIntensity,(.3+u*1.5)*Te)}}}function Gb(s,t){const e=Z.pos.x;Z.pos.y;const n=Z.pos.z,i=Nr(),o=Xi?.6:i>.3?i*.4:0;for(let l=0;l<Si.length;l++){const u=Si[l],h=u.group.position.x,d=u.group.position.z,p=h-e,g=d-n,f=p*p+g*g<16?1:0;u._react=u._react||0,u._react+=(f-u._react)*s*(f>0?4:1.5);const m=(1+u._react*.15)*(1-o*.12),S=(1+u._react*.05)*(1-o*.15);u.group.scale.set(m,S,m),u.petalMat.emissiveIntensity+=u._react*.6*Te*(1-o*.4)}for(let l=0;l<Cn.length;l++){const u=Cn[l],h=u.x-e,d=u.z-n,g=h*h+d*d<4?1:0;u._touch=u._touch||0,u._touch+=(g-u._touch)*s*(g>0?6:1.5);const x=i*.4;u.capMat.emissiveIntensity+=(u._touch*1.5+x)*Te;const f=1+u._touch*.08;u.group.scale.set(f,1+u._touch*.04,f)}for(let l=0;l<Zr.length;l++){const u=Zr[l],h=u.group.position.x,d=u.group.position.z,p=h-e,g=d-n,f=p*p+g*g<2.25?.65:1;u._curl=u._curl===void 0?1:u._curl,u._curl+=(f-u._curl)*s*(f<1?4:1.5),u.group.scale.set(1+(1-u._curl)*.3,u._curl,1+(1-u._curl)*.3)}Db();const r=ko==="FOG_BANK"?.5:1;let a=0,c=0;for(let l=0;l<ie.length;l++){const u=ie[l],h=u.x-e,d=u.z-n;if(h*h+d*d<36)for(let p=0;p<ie.length;p++){if(l===p)continue;const g=ie[p],x=u.x-g.x,f=u.z-g.z,m=x*x+f*f;if(m<400){a++;const S=(1-Math.sqrt(m)/20)*.8*r;if(g.mat.emissiveIntensity+=S*Te,c<Uh){const M=Nh[c],_=M.geo.attributes.position.array,A=1,E=1;_[0]=u.x,_[1]=A,_[2]=u.z,_[3]=g.x,_[4]=E,_[5]=g.z,M.geo.attributes.position.needsUpdate=!0,M.geo.computeBoundingSphere(),M.active=!0;const T=Math.sin(t*3+l*1.5+p*.7)*.3+.5;M.opacity=S*T*Te,M.line.material.opacity=M.opacity,M.line.visible=!0,c++}}}}for(let l=c;l<Uh;l++){const u=Nh[l];u.line.visible&&(u.opacity*=.85,u.line.material.opacity=u.opacity,u.opacity<.01&&(u.line.visible=!1))}return a}let ja="EXPLORE",nu=0,iu=0;function Hb(s,t){let e=!1;for(let x=0;x<ie.length;x++){const f=ie[x].x-Z.pos.x,m=ie[x].z-Z.pos.z;if(f*f+m*m<64){e=!0;break}}ja=e?"NEAR_CRYSTAL":"EXPLORE",nu+=s;const n=Nr(),i=Math.max(.2,1-n*.8),o=(ja==="NEAR_CRYSTAL"?.08:.25)/i,r=Math.floor((ja==="NEAR_CRYSTAL"?120:100)*i);if(nu>o&&(nu=0,A0(0,t)<r))if(ja==="NEAR_CRYSTAL")for(let f=0;f<ie.length;f++){const m=ie[f].x-Z.pos.x,S=ie[f].z-Z.pos.z;m*m+S*S<100&&sc(ie[f].x,Yt(ie[f].x,ie[f].z)+1,ie[f].z,3+Math.random()*4)}else if(Math.random()<.3&&Si.length>0){const f=Si[Math.floor(Math.random()*Si.length)];if(f._react>.3){const m=f.group.position.x,S=f.group.position.z;sc(m+(Math.random()-.5)*2,Yt(m,S)+.5,S+(Math.random()-.5)*2,4+Math.random()*6)}}else{const f=Math.random()*6.28,m=5+Math.random()*25,S=Z.pos.x+Math.cos(f)*m,M=Z.pos.z+Math.sin(f)*m;sc(S,Yt(S,M),M,6+Math.random()*10)}if(iu+=s,iu>.2){iu=0;for(let x=0;x<Cn.length;x++){const f=Cn[x],m=f.x-Z.pos.x,S=f.z-Z.pos.z;m*m+S*S<200&&Math.random()<.15&&$1(f.x,.6*f.group.scale.x,f.z)}}for(let x=0;x<Cn.length;x++){const f=Cn[x],m=f.x-Z.pos.x,S=(f.group.position.y||0)-Z.pos.y,M=f.z-Z.pos.z;if(m*m+S*S+M*M>2500){f.group.visible&&(f.group.visible=!1);continue}f.group.visible||(f.group.visible=!0);const A=Math.sin(t*f.speed+f.phase)*.5+.5;f.capMat.emissiveIntensity=f.base*(.5+A*.8)*Te}for(let x=0;x<ie.length;x++){const f=ie[x],m=Math.sin(t*.6+f.phase)*.5+.5;f.mat.emissiveIntensity=(1+m*1.5)*Te,f.group.children[0].rotation.y+=s*.15,f.light&&(f.light.intensity=(.3+m*.4)*Te)}if(!Qi.length)for(let x=0;x<ie.length;x++)Qi.push({idx:x,dist:0});const a=Z.pos.x-ap,c=Z.pos.z-cp;if(a*a+c*c>1){ap=Z.pos.x,cp=Z.pos.z;for(let x=0;x<ie.length;x++){const f=ie[x],m=f.x-Z.pos.x,S=f.z-Z.pos.z;Qi[x].idx=x,Qi[x].dist=m*m+S*S}Qi.sort((x,f)=>x.dist-f.dist)}for(let x=0;x<ys.length;x++)if(x<Qi.length&&Qi[x].dist<2500){const f=ie[Qi[x].idx],m=Math.sin(t*.6+f.phase)*.5+.5;ys[x].position.set(f.x,1.5,f.z),ys[x].intensity=(1.5+m*2)*Te,ys[x].distance=16,ys[x].color.setHex(F.crystal)}else ys[x].intensity=0;if(Vi>.8&&Math.random()<.005)for(let x=0;x<Fr.length;x++){const f=Fr[x];if(!f.dispersed&&Math.random()<.1){f.dispersed=!0;for(let m=0;m<8;m++)x0(f.x,f.h+.05,f.z);for(let m=2;m<f.group.children.length;m++)f.group.children[m].visible=!1;f.regrowTimer=15+Math.random()*10}}const l=Vi>.3?(Vi-.3)*.02:0,u=Xi?.03:0;if(Math.random()<l+u)for(let x=0;x<_e.length;x++){const f=_e[x],m=f.x-Z.pos.x,S=f.z-Z.pos.z;if(m*m+S*S<900&&Math.random()<.15){const M=(f.treeH||10)*.7+(f.y||0);cS(f.x,M,f.z);break}}rm(s,t),am(s,t),cm(s,t),lm(s,t),p0(s,t),om(s,t);const h=Z.pos.x,d=Z.pos.y,p=Z.pos.z;for(let x=0;x<zc.length;x++){const f=zc[x],m=f.x||f.group.position.x,S=f.z||f.group.position.z,M=m-h,_=(f.group.position.y||0)-d,A=S-p,E=M*M+_*_+A*A;if(E>2500){f.group.visible&&(f.group.visible=!1);continue}if(f.group.visible||(f.group.visible=!0),!f.sparkles||E>400)continue;let T=0;for(let L=0;L<ie.length;L++){const z=ie[L].x-m,V=ie[L].z-S,G=z*z+V*V;G<100&&(T=Math.max(T,(1-Math.sqrt(G)/10)*.6))}const b=m-Z.pos.x,y=S-Z.pos.z,v=b*b+y*y,R=v<25?(1-Math.sqrt(v)/5)*.3:0;let U=0;if($n&&pi>0){const L=m-$n.x,z=S-$n.z,V=Math.sqrt(L*L+z*z);Math.abs(V-pi)<3&&(U=(1-Math.abs(V-pi)/3)*.8)}for(let L=0;L<f.sparkles.length;L++){const z=Math.sin(t*4+x*2.3+L*1.7)*.35;f.sparkles[L].material.opacity=.15+z+T+R+U}f.mossMat&&R>0&&(f.mossMat.emissiveIntensity=.05+R*.4*Math.sin(t*2+x)*.5+.5)}zb(s,t),_1(Fr,s,t,Z.pos),Fb(s,t),Ob(s,t),Bb(s,t),I0(s,t,Z.pos),v1(s,t),lS(s,t),eS(s),oS(s),kb(s);const g=Gb(s,t);if(SS(s,t),X1(t),Z.onGround&&Z.vel.x*Z.vel.x+Z.vel.z*Z.vel.z>.5){const f=Math.atan2(Z.vel.x,Z.vel.z),m=ze.ShiftLeft||ze.ShiftRight||ir;fS(Z.pos.x,Z.pos.z,f,m)}dS(s,Nr()),cb(s,Z.pos,Le,im,De,Nr()),KS(s),bb(Z.pos,qe,Un,xi,Qo,On,Le,g),Tb(s)}let He=0,zh=!1;function Vb(){zh||(zh=!0,Nw(!0),Lb())}function um(){requestAnimationFrame(um);const s=Math.min(i0.getDelta(),.1);He+=s,RS(s);const t=US(s,He,Z.pos);zS(s,Z.pos,t,Ls,Ro),jw(s,He,De,Te,ko),gi>0&&(rf.intensity+=gi*.8,ct.background.r=Math.min(ct.background.r+gi*.08,.25),ct.background.g=Math.min(ct.background.g+gi*.08,.25),ct.background.b=Math.min(ct.background.b+gi*.12,.35)),qS(s,Vi,t,Xi,gi,De,Z.pos,Le),ib(Z.pos);const e=Math.sqrt(Z.vel.x*Z.vel.x+Z.vel.z*Z.vel.z);let n=!1;for(let i=0;i<Le.length;i++){const o=Le[i].x-Z.pos.x,r=Le[i].z-Z.pos.z;if(o*o+r*r<225){n=!0;break}}if(!n)for(let i=0;i<On.length;i++){const o=On[i].x-Z.pos.x,r=On[i].z-Z.pos.z;if(o*o+r*r<144){n=!0;break}}if(xb(s,De,e,n),j1(Ls,Ro),x1(Ls,Ro,Vi),rS(Ls,Ro),!zh){gn.position.set(0,Hc,0),gn.rotation.order="YXZ",gn.rotation.y+=s*.08,gn.rotation.x=0;for(let i=0;i<Cn.length;i++){const o=Cn[i],r=Math.sin(He*o.speed+o.phase)*.5+.5;o.capMat.emissiveIntensity=o.base*(.5+r*.8)*Te}for(let i=0;i<ie.length;i++){const o=ie[i];o.mat.emissiveIntensity=(1+Math.sin(He*.6+o.phase)*.5*1.5+.75)*Te}rm(s,He),am(s,He),cm(s,He),lm(s,He),p0(s,He),om(s,He),I0(s,He,Z.pos);for(let i=0;i<vi.length;i++)vi[i].popped||(vi[i].group.position.y=vi[i].floatY+Math.sin(He*.6+vi[i].phase)*vi[i].bobAmp);for(let i=0;i<Le.length;i++)for(let o=0;o<Le[i].pads.length;o++)Le[i].pads[o].mesh.position.y=.05+Math.sin(He*.8+Le[i].pads[o].phase)*.015;for(let i=0;i<Bn.length;i++){const o=Bn[i],r=Math.sin(He*1.5+o.phase)*.5+.5;o.group.position.y=o.flyY+Math.sin(He*.8+o.phase)*.3,o.glowMat.opacity=.3+r*.4}Bd();return}t1(s),Hb(s,He),A0(s,He),K1(s),gn.position.copy(Z.pos),gn.position.y+=m0,gn.rotation.order="YXZ",gn.rotation.y=Vr,gn.rotation.x=Fs,Cb(s,Z.pos),Bd()}try{eh(0,0,5),Vw(),AS({scene:ct,moon:ei,moon2:af,hemiLight:rf,playerLight:cf}),Nb();const s=kw();Jw(_e,zc),Qw(Yd),Kw(t=>{let e=!1;for(let n=0;n<Le.length;n++){const i=Le[n].x-Z.pos.x,o=Le[n].z-Z.pos.z;if(i*i+o*o<16){e=!0;break}}ZS(t,e),Math.random()<.4&&Yd(Z.pos.x,Z.pos.z,1)},()=>$S(),t=>jS(t)),DS(),NS(),q1(150),Z1(60),Dw(),J1(gw),tS(20),g1(40),iS(30),aS(50),hS(),$w(),k1(),V1(),W1(),XS(),Sb(),Rb(),Pb(),wS({orbs:Bn,obeliskGroup:N1(),obeliskMat:z1(),obeliskGlowMat:F1(),pinnacleOrb:O1(),pinnacleRings:B1(),moatMesh:G1(),moatMat:H1(),rainbowArcs:qr,player:Z,makeLaser:pS,orbHudEl:Ib(),deers:qe,puffs:Un,jellies:xi,moths:Qo,trees:_e,treeMeshes:Co,groundMesh:s,playOrbCollect:QS,playOrbWarble:tb,playLaserZap:eb,playLaserHum:nb,stopLaserHums:sb}),Uw(Vb);for(let t=0;t<50;t++){const e=Math.random()*6.28,n=3+Math.random()*ae*.7,i=Math.cos(e)*n,o=Math.sin(e)*n;sc(i,Yt(i,o),o,8+Math.random()*12)}console.log("✓ Init: trees="+_e.length+" mush="+Cn.length+" crystals="+ie.length+" orbs="+Bn.length+" creatures="+(xi.length+Un.length+qe.length+Qo.length)+" wisps="+Fc.length+" dandelions="+Fr.length+" fairyRings="+On.length+" bubbles="+vi.length+" ponds="+Le.length+" scene="+ct.children.length),um()}catch(s){console.error("INIT FAILED:",s),document.body.innerHTML='<div style="color:red;padding:30px;font-family:monospace"><h2>Init Failed</h2><pre>'+(s.stack||s.message)+"</pre></div>"}
