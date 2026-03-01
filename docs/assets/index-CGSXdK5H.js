(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tu="172",A0=0,Bu=1,R0=2,Ed=1,Ad=2,bi=3,Ji=0,Mn=1,Dt=2,Pi=0,mo=1,ue=2,ku=3,Gu=4,C0=5,Ms=100,P0=101,I0=102,L0=103,D0=104,U0=200,N0=201,z0=202,F0=203,Cl=204,Pl=205,O0=206,B0=207,k0=208,G0=209,H0=210,V0=211,W0=212,X0=213,q0=214,Il=0,Ll=1,Dl=2,Eo=3,Ul=4,Nl=5,zl=6,Fl=7,Rd=0,Y0=1,Z0=2,Ki=0,$0=1,j0=2,K0=3,Cd=4,J0=5,Q0=6,tm=7,Pd=300,Ao=301,Ro=302,Ol=303,Bl=304,uc=306,Ba=1e3,ys=1001,kl=1002,Un=1003,em=1004,Or=1005,ui=1006,vc=1007,ws=1008,Ui=1009,Id=1010,Ld=1011,vr=1012,eu=1013,Ps=1014,fi=1015,Ii=1016,nu=1017,iu=1018,Co=1020,Dd=35902,Ud=1021,Nd=1022,Jn=1023,zd=1024,Fd=1025,go=1026,Po=1027,su=1028,ou=1029,Od=1030,ru=1031,au=1033,Ta=33776,Ea=33777,Aa=33778,Ra=33779,Gl=35840,Hl=35841,Vl=35842,Wl=35843,Xl=36196,ql=37492,Yl=37496,Zl=37808,$l=37809,jl=37810,Kl=37811,Jl=37812,Ql=37813,th=37814,eh=37815,nh=37816,ih=37817,sh=37818,oh=37819,rh=37820,ah=37821,Ca=36492,ch=36494,lh=36495,Bd=36283,hh=36284,uh=36285,fh=36286,nm=3200,im=3201,kd=0,sm=1,qi="",_n="srgb",Io="srgb-linear",ka="linear",pe="srgb",Os=7680,Hu=519,om=512,rm=513,am=514,Gd=515,cm=516,lm=517,hm=518,um=519,Vu=35044,Se=35048,Wu="300 es",Ri=2e3,Ga=2001;class Fo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yc=Math.PI/180,dh=180/Math.PI;function Oo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[s&255]+Ze[s>>8&255]+Ze[s>>16&255]+Ze[s>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function $t(s,t,e){return Math.max(t,Math.min(e,s))}function fm(s,t){return(s%t+t)%t}function wc(s,t,e){return(1-e)*s+e*t}function Vo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function yn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,i,o,r,a,c,l){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l)}set(t,e,n,i,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=i[0],p=i[3],g=i[6],b=i[1],v=i[4],M=i[7],A=i[2],E=i[5],T=i[8];return o[0]=r*x+a*b+c*A,o[3]=r*p+a*v+c*E,o[6]=r*g+a*M+c*T,o[1]=l*x+h*b+u*A,o[4]=l*p+h*v+u*E,o[7]=l*g+h*M+u*T,o[2]=f*x+d*b+m*A,o[5]=f*p+d*v+m*E,o[8]=f*g+d*M+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+i*o*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,f=a*c-h*o,d=l*o-r*c,m=e*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=u*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*r)*x,t[3]=f*x,t[4]=(h*e-i*c)*x,t[5]=(i*o-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Sc.makeScale(t,e)),this}rotate(t){return this.premultiply(Sc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Sc=new Wt;function Hd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ha(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dm(){const s=Ha("canvas");return s.style.display="block",s}const Xu={};function so(s){s in Xu||(Xu[s]=!0,console.warn(s))}function pm(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function mm(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gm(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qu=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yu=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xm(){const s={enabled:!0,workingColorSpace:Io,spaces:{},convert:function(i,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===pe&&(i.r=Li(i.r),i.g=Li(i.g),i.b=Li(i.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===pe&&(i.r=xo(i.r),i.g=xo(i.g),i.b=xo(i.b))),i},fromWorkingColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},toWorkingColorSpace:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qi?ka:this.spaces[i].transfer},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,r){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Io]:{primaries:t,whitePoint:n,transfer:ka,toXYZ:qu,fromXYZ:Yu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:qu,fromXYZ:Yu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),s}const re=xm();function Li(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function xo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Bs;class _m{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bs===void 0&&(Bs=Ha("canvas")),Bs.width=t.width,Bs.height=t.height;const n=Bs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ha("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=Li(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Li(e[n]/255)*255):e[n]=Li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mm=0;class Vd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Oo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(bc(i[r].image)):o.push(bc(i[r]))}else o=bc(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function bc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_m.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vm=0;class Qe extends Fo{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,n=ys,i=ys,o=ui,r=ws,a=Jn,c=Ui,l=Qe.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Oo(),this.name="",this.source=new Vd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ba:t.x=t.x-Math.floor(t.x);break;case ys:t.x=t.x<0?0:1;break;case kl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ba:t.y=t.y-Math.floor(t.y);break;case ys:t.y=t.y<0?0:1;break;case kl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Pd;Qe.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,i=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],x=c[2],p=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+p)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,M=(d+1)/2,A=(g+1)/2,E=(h+f)/4,T=(u+x)/4,S=(m+p)/4;return v>M&&v>A?v<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(v),i=E/n,o=T/n):M>A?M<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(M),n=E/i,o=S/i):A<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(A),n=T/o,i=S/o),this.set(n,i,o,e),this}let b=Math.sqrt((p-m)*(p-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(u-x)/b,this.z=(f-h)/b,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ym extends Fo{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Qe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Vd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends ym{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wd extends Qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Un,this.minFilter=Un,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wm extends Qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Un,this.minFilter=Un,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=o[r+0],d=o[r+1],m=o[r+2],x=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=x;return}if(u!==x||c!==f||l!==d||h!==m){let p=1-a;const g=c*f+l*d+h*m+u*x,b=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const A=Math.sqrt(v),E=Math.atan2(A,g*b);p=Math.sin(p*E)/A,a=Math.sin(a*E)/A}const M=a*b;if(c=c*p+f*M,l=l*p+d*M,h=h*p+m*M,u=u*p+x*M,p===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=o[r],f=o[r+1],d=o[r+2],m=o[r+3];return t[e]=a*m+h*u+c*d-l*f,t[e+1]=c*m+h*f+l*u-a*d,t[e+2]=l*m+h*d+a*f-c*u,t[e+3]=h*m-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(o/2),f=c(n/2),d=c(i/2),m=c(o/2);switch(r){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(o-l)*d,this._z=(r-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(o+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(o-l)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(r-i)/d,this._x=(o+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+i*l-o*c,this._y=i*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-i*a,this._w=r*h-n*a-i*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=r*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=o*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*i-a*n),h=2*(a*e-o*i),u=2*(o*n-r*e);return this.x=e+c*l+r*u-a*h,this.y=n+c*h+a*l-o*u,this.z=i+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-o*a,this.y=o*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Tc.copy(this).projectOnVector(t),this.sub(Tc)}reflect(t){return this.sub(Tc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tc=new N,Zu=new Cr;class Us{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Zn):Zn.fromBufferAttribute(o,r),Zn.applyMatrix4(t.matrixWorld),this.expandByPoint(Zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(t.matrixWorld),this.union(Br)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),kr.subVectors(this.max,Wo),ks.subVectors(t.a,Wo),Gs.subVectors(t.b,Wo),Hs.subVectors(t.c,Wo),zi.subVectors(Gs,ks),Fi.subVectors(Hs,Gs),is.subVectors(ks,Hs);let e=[0,-zi.z,zi.y,0,-Fi.z,Fi.y,0,-is.z,is.y,zi.z,0,-zi.x,Fi.z,0,-Fi.x,is.z,0,-is.x,-zi.y,zi.x,0,-Fi.y,Fi.x,0,-is.y,is.x,0];return!Ec(e,ks,Gs,Hs,kr)||(e=[1,0,0,0,1,0,0,0,1],!Ec(e,ks,Gs,Hs,kr))?!1:(Gr.crossVectors(zi,Fi),e=[Gr.x,Gr.y,Gr.z],Ec(e,ks,Gs,Hs,kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mi=[new N,new N,new N,new N,new N,new N,new N,new N],Zn=new N,Br=new Us,ks=new N,Gs=new N,Hs=new N,zi=new N,Fi=new N,is=new N,Wo=new N,kr=new N,Gr=new N,ss=new N;function Ec(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){ss.fromArray(s,o);const a=i.x*Math.abs(ss.x)+i.y*Math.abs(ss.y)+i.z*Math.abs(ss.z),c=t.dot(ss),l=e.dot(ss),h=n.dot(ss);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Sm=new Us,Xo=new N,Ac=new N;class Ns{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Sm.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xo.subVectors(t,this.center);const e=Xo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Xo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ac.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xo.copy(t.center).add(Ac)),this.expandByPoint(Xo.copy(t.center).sub(Ac))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new N,Rc=new N,Hr=new N,Oi=new N,Cc=new N,Vr=new N,Pc=new N;class cu{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Rc.copy(t).add(e).multiplyScalar(.5),Hr.copy(e).sub(t).normalize(),Oi.copy(this.origin).sub(Rc);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Hr),a=Oi.dot(this.direction),c=-Oi.dot(Hr),l=Oi.lengthSq(),h=Math.abs(1-r*r);let u,f,d,m;if(h>0)if(u=r*c-a,f=r*a-c,m=o*h,u>=0)if(f>=-m)if(f<=m){const x=1/h;u*=x,f*=x,d=u*(u+r*f+2*a)+f*(r*u+f+2*c)+l}else f=o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*c)+l;else f=-o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-r*o+a)),f=u>0?-o:Math.min(Math.max(-o,-c),o),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-o,-c),o),d=f*(f+2*c)+l):(u=Math.max(0,-(r*o+a)),f=u>0?o:Math.min(Math.max(-o,-c),o),d=-u*u+f*(f+2*c)+l);else f=r>0?-o:o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Rc).addScaledVector(Hr,f),d}intersectSphere(t,e){vi.subVectors(t.center,this.origin);const n=vi.dot(this.direction),i=vi.dot(vi)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(o=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,n,i,o){Cc.subVectors(e,t),Vr.subVectors(n,t),Pc.crossVectors(Cc,Vr);let r=this.direction.dot(Pc),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Oi.subVectors(this.origin,t);const c=a*this.direction.dot(Vr.crossVectors(Oi,Vr));if(c<0)return null;const l=a*this.direction.dot(Cc.cross(Oi));if(l<0||c+l>r)return null;const h=-a*Oi.dot(Pc);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,i,o,r,a,c,l,h,u,f,d,m,x,p){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l,h,u,f,d,m,x,p)}set(t,e,n,i,o,r,a,c,l,h,u,f,d,m,x,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=o,g[5]=r,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Vs.setFromMatrixColumn(t,0).length(),o=1/Vs.setFromMatrixColumn(t,1).length(),r=1/Vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const f=r*h,d=r*u,m=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+m*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=m+d*l,e[10]=r*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,m=l*h,x=l*u;e[0]=f+x*a,e[4]=m*a-d,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=d*a-m,e[6]=x+f*a,e[10]=r*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,m=l*h,x=l*u;e[0]=f-x*a,e[4]=-r*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=r*h,e[9]=x-f*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const f=r*h,d=r*u,m=a*h,x=a*u;e[0]=c*h,e[4]=m*l-d,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=d*l-m,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const f=r*c,d=r*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=m*u+d,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+m,e[10]=f-x*u}else if(t.order==="XZY"){const f=r*c,d=r*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=r*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bm,t,Tm)}lookAt(t,e,n){const i=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),Bi.crossVectors(n,An),Bi.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Bi.crossVectors(n,An)),Bi.normalize(),Wr.crossVectors(An,Bi),i[0]=Bi.x,i[4]=Wr.x,i[8]=An.x,i[1]=Bi.y,i[5]=Wr.y,i[9]=An.y,i[2]=Bi.z,i[6]=Wr.z,i[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],p=n[10],g=n[14],b=n[3],v=n[7],M=n[11],A=n[15],E=i[0],T=i[4],S=i[8],y=i[12],_=i[1],R=i[5],U=i[9],L=i[13],z=i[2],V=i[6],G=i[10],Z=i[14],W=i[3],rt=i[7],ft=i[11],wt=i[15];return o[0]=r*E+a*_+c*z+l*W,o[4]=r*T+a*R+c*V+l*rt,o[8]=r*S+a*U+c*G+l*ft,o[12]=r*y+a*L+c*Z+l*wt,o[1]=h*E+u*_+f*z+d*W,o[5]=h*T+u*R+f*V+d*rt,o[9]=h*S+u*U+f*G+d*ft,o[13]=h*y+u*L+f*Z+d*wt,o[2]=m*E+x*_+p*z+g*W,o[6]=m*T+x*R+p*V+g*rt,o[10]=m*S+x*U+p*G+g*ft,o[14]=m*y+x*L+p*Z+g*wt,o[3]=b*E+v*_+M*z+A*W,o[7]=b*T+v*R+M*V+A*rt,o[11]=b*S+v*U+M*G+A*ft,o[15]=b*y+v*L+M*Z+A*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],x=t[7],p=t[11],g=t[15];return m*(+o*c*u-i*l*u-o*a*f+n*l*f+i*a*d-n*c*d)+x*(+e*c*d-e*l*f+o*r*f-i*r*d+i*l*h-o*c*h)+p*(+e*l*u-e*a*d-o*r*u+n*r*d+o*a*h-n*l*h)+g*(-i*a*h-e*c*u+e*a*f+i*r*u-n*r*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],x=t[13],p=t[14],g=t[15],b=u*p*l-x*f*l+x*c*d-a*p*d-u*c*g+a*f*g,v=m*f*l-h*p*l-m*c*d+r*p*d+h*c*g-r*f*g,M=h*x*l-m*u*l+m*a*d-r*x*d-h*a*g+r*u*g,A=m*u*c-h*x*c-m*a*f+r*x*f+h*a*p-r*u*p,E=e*b+n*v+i*M+o*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=b*T,t[1]=(x*f*o-u*p*o-x*i*d+n*p*d+u*i*g-n*f*g)*T,t[2]=(a*p*o-x*c*o+x*i*l-n*p*l-a*i*g+n*c*g)*T,t[3]=(u*c*o-a*f*o-u*i*l+n*f*l+a*i*d-n*c*d)*T,t[4]=v*T,t[5]=(h*p*o-m*f*o+m*i*d-e*p*d-h*i*g+e*f*g)*T,t[6]=(m*c*o-r*p*o-m*i*l+e*p*l+r*i*g-e*c*g)*T,t[7]=(r*f*o-h*c*o+h*i*l-e*f*l-r*i*d+e*c*d)*T,t[8]=M*T,t[9]=(m*u*o-h*x*o-m*n*d+e*x*d+h*n*g-e*u*g)*T,t[10]=(r*x*o-m*a*o+m*n*l-e*x*l-r*n*g+e*a*g)*T,t[11]=(h*a*o-r*u*o-h*n*l+e*u*l+r*n*d-e*a*d)*T,t[12]=A*T,t[13]=(h*x*i-m*u*i+m*n*f-e*x*f-h*n*p+e*u*p)*T,t[14]=(m*a*i-r*x*i-m*n*c+e*x*c+r*n*p-e*a*p)*T,t[15]=(r*u*i-h*a*i+h*n*c-e*u*c-r*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*r,0,l*c-i*a,h*c+i*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,f=o*l,d=o*h,m=o*u,x=r*h,p=r*u,g=a*u,b=c*l,v=c*h,M=c*u,A=n.x,E=n.y,T=n.z;return i[0]=(1-(x+g))*A,i[1]=(d+M)*A,i[2]=(m-v)*A,i[3]=0,i[4]=(d-M)*E,i[5]=(1-(f+g))*E,i[6]=(p+b)*E,i[7]=0,i[8]=(m+v)*T,i[9]=(p-b)*T,i[10]=(1-(f+x))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=Vs.set(i[0],i[1],i[2]).length();const r=Vs.set(i[4],i[5],i[6]).length(),a=Vs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],$n.copy(this);const l=1/o,h=1/r,u=1/a;return $n.elements[0]*=l,$n.elements[1]*=l,$n.elements[2]*=l,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=u,$n.elements[9]*=u,$n.elements[10]*=u,e.setFromRotationMatrix($n),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=Ri){const c=this.elements,l=2*o/(e-t),h=2*o/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,m;if(a===Ri)d=-(r+o)/(r-o),m=-2*r*o/(r-o);else if(a===Ga)d=-r/(r-o),m=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=Ri){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(r-o),f=(e+t)*l,d=(n+i)*h;let m,x;if(a===Ri)m=(r+o)*u,x=-2*u;else if(a===Ga)m=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vs=new N,$n=new de,bm=new N(0,0,0),Tm=new N(1,1,1),Bi=new N,Wr=new N,An=new N,$u=new de,ju=new Cr;class pi{constructor(t=0,e=0,n=0,i=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$t(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $u.makeRotationFromQuaternion(t),this.setFromRotationMatrix($u,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ju.setFromEuler(this),this.setFromQuaternion(ju,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class Xd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Em=0;const Ku=new N,Ws=new Cr,yi=new de,Xr=new N,qo=new N,Am=new N,Rm=new Cr,Ju=new N(1,0,0),Qu=new N(0,1,0),tf=new N(0,0,1),ef={type:"added"},Cm={type:"removed"},Xs={type:"childadded",child:null},Ic={type:"childremoved",child:null};class ge extends Fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new N,e=new pi,n=new Cr,i=new N(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new Wt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.premultiply(Ws),this}rotateX(t){return this.rotateOnAxis(Ju,t)}rotateY(t){return this.rotateOnAxis(Qu,t)}rotateZ(t){return this.rotateOnAxis(tf,t)}translateOnAxis(t,e){return Ku.copy(t).applyQuaternion(this.quaternion),this.position.add(Ku.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ju,t)}translateY(t){return this.translateOnAxis(Qu,t)}translateZ(t){return this.translateOnAxis(tf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xr.copy(t):Xr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(qo,Xr,this.up):yi.lookAt(Xr,qo,this.up),this.quaternion.setFromRotationMatrix(yi),i&&(yi.extractRotation(i.matrixWorld),Ws.setFromRotationMatrix(yi),this.quaternion.premultiply(Ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ef),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cm),Ic.child=t,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ef),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,t,Am),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,Rm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),f=r(t.skeletons),d=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DEFAULT_UP=new N(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new N,wi=new N,Lc=new N,Si=new N,qs=new N,Ys=new N,nf=new N,Dc=new N,Uc=new N,Nc=new N,zc=new me,Fc=new me,Oc=new me;class Kn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),jn.subVectors(t,e),i.cross(jn);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){jn.subVectors(i,e),wi.subVectors(n,e),Lc.subVectors(t,e);const r=jn.dot(jn),a=jn.dot(wi),c=jn.dot(Lc),l=wi.dot(wi),h=wi.dot(Lc),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,m=(r*h-a*c)*f;return o.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,e,n,i,o,r,a,c){return this.getBarycoord(t,e,n,i,Si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Si.x),c.addScaledVector(r,Si.y),c.addScaledVector(a,Si.z),c)}static getInterpolatedAttribute(t,e,n,i,o,r){return zc.setScalar(0),Fc.setScalar(0),Oc.setScalar(0),zc.fromBufferAttribute(t,e),Fc.fromBufferAttribute(t,n),Oc.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(zc,o.x),r.addScaledVector(Fc,o.y),r.addScaledVector(Oc,o.z),r}static isFrontFacing(t,e,n,i){return jn.subVectors(n,e),wi.subVectors(t,e),jn.cross(wi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),jn.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Kn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return Kn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return Kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;qs.subVectors(i,n),Ys.subVectors(o,n),Dc.subVectors(t,n);const c=qs.dot(Dc),l=Ys.dot(Dc);if(c<=0&&l<=0)return e.copy(n);Uc.subVectors(t,i);const h=qs.dot(Uc),u=Ys.dot(Uc);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(qs,r);Nc.subVectors(t,o);const d=qs.dot(Nc),m=Ys.dot(Nc);if(m>=0&&d<=m)return e.copy(o);const x=d*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Ys,a);const p=h*m-d*u;if(p<=0&&u-h>=0&&d-m>=0)return nf.subVectors(o,i),a=(u-h)/(u-h+(d-m)),e.copy(i).addScaledVector(nf,a);const g=1/(p+x+f);return r=x*g,a=f*g,e.copy(n).addScaledVector(qs,r).addScaledVector(Ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Bc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class st{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=re.workingColorSpace){if(t=fm(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Bc(r,o,t+1/3),this.g=Bc(r,o,t),this.b=Bc(r,o,t-1/3)}return re.toWorkingColorSpace(this,i),this}setStyle(t,e=_n){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_n){const n=qd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=xo(t.r),this.g=xo(t.g),this.b=xo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return re.fromWorkingColorSpace($e.copy(this),t),Math.round($t($e.r*255,0,255))*65536+Math.round($t($e.g*255,0,255))*256+Math.round($t($e.b*255,0,255))}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace($e.copy(this),e);const n=$e.r,i=$e.g,o=$e.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case n:c=(i-o)/u+(i<o?6:0);break;case i:c=(o-n)/u+2;break;case o:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=_n){re.fromWorkingColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,i=$e.b;return t!==_n?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ki),this.setHSL(ki.h+t,ki.s+e,ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(qr);const n=wc(ki.h,qr.h,e),i=wc(ki.s,qr.s,e),o=wc(ki.l,qr.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new st;st.NAMES=qd;let Pm=0;class zs extends Fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Oo(),this.name="",this.type="Material",this.blending=mo,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Pl,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(n.blending=this.blending),this.side!==Ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cl&&(n.blendSrc=this.blendSrc),this.blendDst!==Pl&&(n.blendDst=this.blendDst),this.blendEquation!==Ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Eo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Y extends zs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new N,Yr=new pt;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vu,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yr.fromBufferAttribute(this,e),Yr.applyMatrix3(t),this.setXY(e,Yr.x,Yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=yn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vo(e,this.array)),e}setX(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vo(e,this.array)),e}setY(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vo(e,this.array)),e}setW(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),i=yn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),i=yn(i,this.array),o=yn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vu&&(t.usage=this.usage),t}}class Yd extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zd extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ht extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Im=0;const On=new de,kc=new ge,Zs=new N,Rn=new Us,Yo=new Us,Be=new N;class Te extends Fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hd(t)?Zd:Yd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Wt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,n){return On.makeTranslation(t,e,n),this.applyMatrix4(On),this}scale(t,e,n){return On.makeScale(t,e,n),this.applyMatrix4(On),this}lookAt(t){return kc.lookAt(t),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ht(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];Rn.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Yo.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(Rn.min,Yo.min),Rn.expandByPoint(Be),Be.addVectors(Rn.max,Yo.max),Rn.expandByPoint(Be)):(Rn.expandByPoint(Yo.min),Rn.expandByPoint(Yo.max))}Rn.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)Be.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Be));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Be.fromBufferAttribute(a,l),c&&(Zs.fromBufferAttribute(t,l),Be.add(Zs)),i=Math.max(i,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let S=0;S<n.count;S++)a[S]=new N,c[S]=new N;const l=new N,h=new N,u=new N,f=new pt,d=new pt,m=new pt,x=new N,p=new N;function g(S,y,_){l.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,_),f.fromBufferAttribute(o,S),d.fromBufferAttribute(o,y),m.fromBufferAttribute(o,_),h.sub(l),u.sub(l),d.sub(f),m.sub(f);const R=1/(d.x*m.y-m.x*d.y);isFinite(R)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(R),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(R),a[S].add(x),a[y].add(x),a[_].add(x),c[S].add(p),c[y].add(p),c[_].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let S=0,y=b.length;S<y;++S){const _=b[S],R=_.start,U=_.count;for(let L=R,z=R+U;L<z;L+=3)g(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const v=new N,M=new N,A=new N,E=new N;function T(S){A.fromBufferAttribute(i,S),E.copy(A);const y=a[S];v.copy(y),v.sub(A.multiplyScalar(A.dot(y))).normalize(),M.crossVectors(E,y);const R=M.dot(c[S])<0?-1:1;r.setXYZW(S,v.x,v.y,v.z,R)}for(let S=0,y=b.length;S<y;++S){const _=b[S],R=_.start,U=_.count;for(let L=R,z=R+U;L<z;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new N,o=new N,r=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,m),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,p),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,m=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let g=0;g<h;g++)f[m++]=l[d++]}return new Ve(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sf=new de,os=new cu,Zr=new Ns,of=new N,$r=new N,jr=new N,Kr=new N,Gc=new N,Jr=new N,rf=new N,Qr=new N;class I extends ge{constructor(t=new Te,e=new Y){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){Jr.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(Gc.fromBufferAttribute(u,t),r?Jr.addScaledVector(Gc,h):Jr.addScaledVector(Gc.sub(e),h))}e.add(Jr)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(o),os.copy(t.ray).recast(t.near),!(Zr.containsPoint(os.origin)===!1&&(os.intersectSphere(Zr,of)===null||os.origin.distanceToSquared(of)>(t.far-t.near)**2))&&(sf.copy(o).invert(),os.copy(t.ray).applyMatrix4(sf),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,os)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const p=f[m],g=r[p.materialIndex],b=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=b,A=v;M<A;M+=3){const E=a.getX(M),T=a.getX(M+1),S=a.getX(M+2);i=ta(this,g,t,n,l,h,u,E,T,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){const b=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);i=ta(this,r,t,n,l,h,u,b,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const p=f[m],g=r[p.materialIndex],b=Math.max(p.start,d.start),v=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let M=b,A=v;M<A;M+=3){const E=M,T=M+1,S=M+2;i=ta(this,g,t,n,l,h,u,E,T,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){const b=p,v=p+1,M=p+2;i=ta(this,r,t,n,l,h,u,b,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Lm(s,t,e,n,i,o,r,a){let c;if(t.side===Mn?c=n.intersectTriangle(r,o,i,!0,a):c=n.intersectTriangle(i,o,r,t.side===Ji,a),c===null)return null;Qr.copy(a),Qr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Qr);return l<e.near||l>e.far?null:{distance:l,point:Qr.clone(),object:s}}function ta(s,t,e,n,i,o,r,a,c,l){s.getVertexPosition(a,$r),s.getVertexPosition(c,jr),s.getVertexPosition(l,Kr);const h=Lm(s,t,e,n,$r,jr,Kr,rf);if(h){const u=new N;Kn.getBarycoord(rf,$r,jr,Kr,u),i&&(h.uv=Kn.getInterpolatedAttribute(i,a,c,l,u,new pt)),o&&(h.uv1=Kn.getInterpolatedAttribute(o,a,c,l,u,new pt)),r&&(h.normal=Kn.getInterpolatedAttribute(r,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new N,materialIndex:0};Kn.getNormal($r,jr,Kr,f.normal),h.face=f,h.barycoord=u}return h}class Pr extends Te{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,e,t,r,o,0),m("z","y","x",1,-1,n,e,-t,r,o,1),m("x","z","y",1,1,t,n,e,i,r,2),m("x","z","y",1,-1,t,n,-e,i,r,3),m("x","y","z",1,-1,t,e,n,i,o,4),m("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(u,2));function m(x,p,g,b,v,M,A,E,T,S,y){const _=M/T,R=A/S,U=M/2,L=A/2,z=E/2,V=T+1,G=S+1;let Z=0,W=0;const rt=new N;for(let ft=0;ft<G;ft++){const wt=ft*R-L;for(let Ft=0;Ft<V;Ft++){const jt=Ft*_-U;rt[x]=jt*b,rt[p]=wt*v,rt[g]=z,l.push(rt.x,rt.y,rt.z),rt[x]=0,rt[p]=0,rt[g]=E>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Ft/T),u.push(1-ft/S),Z+=1}}for(let ft=0;ft<S;ft++)for(let wt=0;wt<T;wt++){const Ft=f+wt+V*ft,jt=f+wt+V*(ft+1),tt=f+(wt+1)+V*(ft+1),ct=f+(wt+1)+V*ft;c.push(Ft,jt,ct),c.push(jt,tt,ct),W+=6}a.addGroup(d,W,y),d+=W,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Lo(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function nn(s){const t={};for(let e=0;e<s.length;e++){const n=Lo(s[e]);for(const i in n)t[i]=n[i]}return t}function Dm(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function $d(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const Va={clone:Lo,merge:nn};var Um=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends zs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Um,this.fragmentShader=Nm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Lo(t.uniforms),this.uniformsGroups=Dm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class jd extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new N,af=new pt,cf=new pt;class Pn extends jd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=dh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dh*2*Math.atan(Math.tan(yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z)}getViewSize(t,e){return this.getViewBounds(t,af,cf),e.subVectors(cf,af)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $s=-90,js=1;class zm extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Pn($s,js,t,e);i.layers=this.layers,this.add(i);const o=new Pn($s,js,t,e);o.layers=this.layers,this.add(o);const r=new Pn($s,js,t,e);r.layers=this.layers,this.add(r);const a=new Pn($s,js,t,e);a.layers=this.layers,this.add(a);const c=new Pn($s,js,t,e);c.layers=this.layers,this.add(c);const l=new Pn($s,js,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Kd extends Qe{constructor(t,e,n,i,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ao,super(t,e,n,i,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Fm extends Qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Kd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ui}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Pr(5,5,5),o=new Sn({name:"CubemapFromEquirect",uniforms:Lo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Pi});o.uniforms.tEquirect.value=e;const r=new I(i,o),a=e.minFilter;return e.minFilter===ws&&(e.minFilter=ui),new zm(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}class lu{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new st(t),this.density=e}clone(){return new lu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Om extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Bm extends Qe{constructor(t=null,e=1,n=1,i,o,r,a,c,l=Un,h=Un,u,f){super(null,r,a,c,l,h,i,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mi extends Ve{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ks=new de,lf=new de,ea=[],hf=new Us,km=new de,Zo=new I,$o=new Ns;class Qi extends I{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new mi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,km)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Us),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ks),hf.copy(t.boundingBox).applyMatrix4(Ks),this.boundingBox.union(hf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ns),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ks),$o.copy(t.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union($o)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Zo.geometry=this.geometry,Zo.material=this.material,Zo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$o.copy(this.boundingSphere),$o.applyMatrix4(n),t.ray.intersectsSphere($o)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,Ks),lf.multiplyMatrices(n,Ks),Zo.matrixWorld=lf,Zo.raycast(t,ea);for(let r=0,a=ea.length;r<a;r++){const c=ea[r];c.instanceId=o,c.object=this,e.push(c)}ea.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new mi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bm(new Float32Array(i*this.count),i,this.count,su,fi));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=i*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Hc=new N,Gm=new N,Hm=new Wt;class us{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Hc.subVectors(n,e).cross(Gm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Hc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hm.getNormalMatrix(t),i=this.coplanarPoint(Hc).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new Ns,na=new N;class hu{constructor(t=new us,e=new us,n=new us,i=new us,o=new us,r=new us){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ri){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],m=i[9],x=i[10],p=i[11],g=i[12],b=i[13],v=i[14],M=i[15];if(n[0].setComponents(c-o,f-l,p-d,M-g).normalize(),n[1].setComponents(c+o,f+l,p+d,M+g).normalize(),n[2].setComponents(c+r,f+h,p+m,M+b).normalize(),n[3].setComponents(c-r,f-h,p-m,M-b).normalize(),n[4].setComponents(c-a,f-u,p-x,M-v).normalize(),e===Ri)n[5].setComponents(c+a,f+u,p+x,M+v).normalize();else if(e===Ga)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(na.x=i.normal.x>0?t.max.x:t.min.x,na.y=i.normal.y>0?t.max.y:t.min.y,na.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(na)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uu extends zs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Wa=new N,Xa=new N,uf=new de,jo=new cu,ia=new Ns,Vc=new N,ff=new N;class Jd extends ge{constructor(t=new Te,e=new uu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)Wa.fromBufferAttribute(e,i-1),Xa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Wa.distanceTo(Xa);t.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(i),ia.radius+=o,t.ray.intersectsSphere(ia)===!1)return;uf.copy(i).invert(),jo.copy(t.ray).applyMatrix4(uf);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let x=d,p=m-1;x<p;x+=l){const g=h.getX(x),b=h.getX(x+1),v=sa(this,t,jo,c,g,b);v&&e.push(v)}if(this.isLineLoop){const x=h.getX(m-1),p=h.getX(d),g=sa(this,t,jo,c,x,p);g&&e.push(g)}}else{const d=Math.max(0,r.start),m=Math.min(f.count,r.start+r.count);for(let x=d,p=m-1;x<p;x+=l){const g=sa(this,t,jo,c,x,x+1);g&&e.push(g)}if(this.isLineLoop){const x=sa(this,t,jo,c,m-1,d);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function sa(s,t,e,n,i,o){const r=s.geometry.attributes.position;if(Wa.fromBufferAttribute(r,i),Xa.fromBufferAttribute(r,o),e.distanceSqToSegment(Wa,Xa,Vc,ff)>n)return;Vc.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Vc);if(!(c<t.near||c>t.far))return{distance:c,point:ff.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const df=new N,pf=new N;class Vm extends Jd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,o=e.count;i<o;i+=2)df.fromBufferAttribute(e,i),pf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+df.distanceTo(pf);t.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fu extends zs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const mf=new de,ph=new cu,oa=new Ns,ra=new N;class Qd extends ge{constructor(t=new Te,e=new fu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(i),oa.radius+=o,t.ray.intersectsSphere(oa)===!1)return;mf.copy(i).invert(),ph.copy(t.ray).applyMatrix4(mf);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,r.start),d=Math.min(l.count,r.start+r.count);for(let m=f,x=d;m<x;m++){const p=l.getX(m);ra.fromBufferAttribute(u,p),gf(ra,p,c,i,t,e,this)}}else{const f=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let m=f,x=d;m<x;m++)ra.fromBufferAttribute(u,m),gf(ra,m,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function gf(s,t,e,n,i,o,r){const a=ph.distanceSqToPoint(s);if(a<e){const c=new N;ph.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class ae extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}class du extends Qe{constructor(t,e,n,i,o,r,a,c,l){super(t,e,n,i,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tp extends Qe{constructor(t,e,n,i,o,r,a,c,l,h=go){if(h!==go&&h!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===go&&(n=Ps),n===void 0&&h===Po&&(n=Co),super(null,i,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Un,this.minFilter=c!==void 0?c:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class xi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(o-1);const h=n[i],f=n[i+1]-h,d=(r-h)/f;return(i+d)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),c=e||(r.isVector2?new pt:new N);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,i=[],o=[],r=[],a=new N,c=new de;for(let d=0;d<=t;d++){const m=d/t;i[d]=this.getTangentAt(m,new N)}o[0]=new N,r[0]=new N;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos($t(i[d-1].dot(i[d]),-1,1));o[d].applyMatrix4(c.makeRotationAxis(a,m))}r[d].crossVectors(i[d],o[d])}if(e===!0){let d=Math.acos($t(o[0].dot(o[t]),-1,1));d/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let m=1;m<=t;m++)o[m].applyMatrix4(c.makeRotationAxis(i[m],d*m)),r[m].crossVectors(i[m],o[m])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class pu extends xi{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new pt){const n=e,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Wm extends pu{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function mu(){let s=0,t=0,e=0,n=0;function i(o,r,a,c){s=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){i(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let f=(r-o)/l-(a-o)/(l+h)+(a-r)/h,d=(a-r)/h-(c-r)/(h+u)+(c-a)/u;f*=h,d*=h,i(r,a,f,d)},calc:function(o){const r=o*o,a=r*o;return s+t*o+e*r+n*a}}}const aa=new N,Wc=new mu,Xc=new mu,qc=new mu;class Ir extends xi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new N){const n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%o]:(aa.subVectors(i[0],i[1]).add(i[0]),l=aa);const u=i[a%o],f=i[(a+1)%o];if(this.closed||a+2<o?h=i[(a+2)%o]:(aa.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=aa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),Wc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,x,p),Xc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,x,p),qc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(Wc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Xc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),qc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Wc.calc(c),Xc.calc(c),qc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xf(s,t,e,n,i){const o=(n-t)*.5,r=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*s+e}function Xm(s,t){const e=1-s;return e*e*t}function qm(s,t){return 2*(1-s)*s*t}function Ym(s,t){return s*s*t}function fr(s,t,e,n){return Xm(s,t)+qm(s,e)+Ym(s,n)}function Zm(s,t){const e=1-s;return e*e*e*t}function $m(s,t){const e=1-s;return 3*e*e*s*t}function jm(s,t){return 3*(1-s)*s*s*t}function Km(s,t){return s*s*s*t}function dr(s,t,e,n,i){return Zm(s,t)+$m(s,e)+jm(s,n)+Km(s,i)}class ep extends xi{constructor(t=new pt,e=new pt,n=new pt,i=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new pt){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(dr(t,i.x,o.x,r.x,a.x),dr(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Jm extends xi{constructor(t=new N,e=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new N){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(dr(t,i.x,o.x,r.x,a.x),dr(t,i.y,o.y,r.y,a.y),dr(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class np extends xi{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gu extends xi{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ip extends xi{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(fr(t,i.x,o.x,r.x),fr(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sp extends xi{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(fr(t,i.x,o.x,r.x),fr(t,i.y,o.y,r.y),fr(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class op extends xi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(xf(a,c.x,l.x,h.x,u.x),xf(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new pt().fromArray(i))}return this}}var mh=Object.freeze({__proto__:null,ArcCurve:Wm,CatmullRomCurve3:Ir,CubicBezierCurve:ep,CubicBezierCurve3:Jm,EllipseCurve:pu,LineCurve:np,LineCurve3:gu,QuadraticBezierCurve:ip,QuadraticBezierCurve3:sp,SplineCurve:op});class Qm extends xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new mh[i.type]().fromJSON(i))}return this}}class qa extends Qm{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new np(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new ip(this.currentPoint.clone(),new pt(t,e),new pt(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){const a=new ep(this.currentPoint.clone(),new pt(t,e),new pt(n,i),new pt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new op(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,o,r,a,c),this}absellipse(t,e,n,i,o,r,a,c){const l=new pu(t,e,n,i,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class qe extends Te{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new N,h=new pt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[f]/t+1)/2,h.y=(r[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Ht(r,3)),this.setAttribute("normal",new Ht(a,3)),this.setAttribute("uv",new Ht(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class vt extends Te{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),o=Math.floor(o);const h=[],u=[],f=[],d=[];let m=0;const x=[],p=n/2;let g=0;b(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(d,2));function b(){const M=new N,A=new N;let E=0;const T=(e-t)/n;for(let S=0;S<=o;S++){const y=[],_=S/o,R=_*(e-t)+t;for(let U=0;U<=i;U++){const L=U/i,z=L*c+a,V=Math.sin(z),G=Math.cos(z);A.x=R*V,A.y=-_*n+p,A.z=R*G,u.push(A.x,A.y,A.z),M.set(V,T,G).normalize(),f.push(M.x,M.y,M.z),d.push(L,1-_),y.push(m++)}x.push(y)}for(let S=0;S<i;S++)for(let y=0;y<o;y++){const _=x[y][S],R=x[y+1][S],U=x[y+1][S+1],L=x[y][S+1];(t>0||y!==0)&&(h.push(_,R,L),E+=3),(e>0||y!==o-1)&&(h.push(R,U,L),E+=3)}l.addGroup(g,E,0),g+=E}function v(M){const A=m,E=new pt,T=new N;let S=0;const y=M===!0?t:e,_=M===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,p*_,0),f.push(0,_,0),d.push(.5,.5),m++;const R=m;for(let U=0;U<=i;U++){const z=U/i*c+a,V=Math.cos(z),G=Math.sin(z);T.x=y*G,T.y=p*_,T.z=y*V,u.push(T.x,T.y,T.z),f.push(0,_,0),E.x=V*.5+.5,E.y=G*.5*_+.5,d.push(E.x,E.y),m++}for(let U=0;U<i;U++){const L=A+U,z=R+U;M===!0?h.push(z,z+1,L):h.push(z+1,z,L),S+=3}l.addGroup(g,S,M===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wn extends vt{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Wn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Lr extends Te{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],r=[];a(i),l(n),h(),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(o.slice(),3)),this.setAttribute("uv",new Ht(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const v=new N,M=new N,A=new N;for(let E=0;E<e.length;E+=3)d(e[E+0],v),d(e[E+1],M),d(e[E+2],A),c(v,M,A,b)}function c(b,v,M,A){const E=A+1,T=[];for(let S=0;S<=E;S++){T[S]=[];const y=b.clone().lerp(M,S/E),_=v.clone().lerp(M,S/E),R=E-S;for(let U=0;U<=R;U++)U===0&&S===E?T[S][U]=y:T[S][U]=y.clone().lerp(_,U/R)}for(let S=0;S<E;S++)for(let y=0;y<2*(E-S)-1;y++){const _=Math.floor(y/2);y%2===0?(f(T[S][_+1]),f(T[S+1][_]),f(T[S][_])):(f(T[S][_+1]),f(T[S+1][_+1]),f(T[S+1][_]))}}function l(b){const v=new N;for(let M=0;M<o.length;M+=3)v.x=o[M+0],v.y=o[M+1],v.z=o[M+2],v.normalize().multiplyScalar(b),o[M+0]=v.x,o[M+1]=v.y,o[M+2]=v.z}function h(){const b=new N;for(let v=0;v<o.length;v+=3){b.x=o[v+0],b.y=o[v+1],b.z=o[v+2];const M=p(b)/2/Math.PI+.5,A=g(b)/Math.PI+.5;r.push(M,1-A)}m(),u()}function u(){for(let b=0;b<r.length;b+=6){const v=r[b+0],M=r[b+2],A=r[b+4],E=Math.max(v,M,A),T=Math.min(v,M,A);E>.9&&T<.1&&(v<.2&&(r[b+0]+=1),M<.2&&(r[b+2]+=1),A<.2&&(r[b+4]+=1))}}function f(b){o.push(b.x,b.y,b.z)}function d(b,v){const M=b*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function m(){const b=new N,v=new N,M=new N,A=new N,E=new pt,T=new pt,S=new pt;for(let y=0,_=0;y<o.length;y+=9,_+=6){b.set(o[y+0],o[y+1],o[y+2]),v.set(o[y+3],o[y+4],o[y+5]),M.set(o[y+6],o[y+7],o[y+8]),E.set(r[_+0],r[_+1]),T.set(r[_+2],r[_+3]),S.set(r[_+4],r[_+5]),A.copy(b).add(v).add(M).divideScalar(3);const R=p(A);x(E,_+0,b,R),x(T,_+2,v,R),x(S,_+4,M,R)}}function x(b,v,M,A){A<0&&b.x===1&&(r[v]=b.x-1),M.x===0&&M.z===0&&(r[v]=A/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function g(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lr(t.vertices,t.indices,t.radius,t.details)}}class xu extends Lr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xu(t.radius,t.detail)}}class Ya extends qa{constructor(t){super(t),this.uuid=Oo(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new qa().fromJSON(i))}return this}}const tg={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=rp(s,0,i,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,u,f,d;if(n&&(o=og(s,t,o,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let m=e;m<i;m+=e)u=s[m],f=s[m+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return yr(o,r,e,a,c,d,0),r}};function rp(s,t,e,n,i){let o,r;if(i===gg(s,t,e,n)>0)for(o=t;o<e;o+=n)r=_f(o,s[o],s[o+1],r);else for(o=e-n;o>=t;o-=n)r=_f(o,s[o],s[o+1],r);return r&&fc(r,r.next)&&(Sr(r),r=r.next),r}function Is(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(fc(e,e.next)||Ae(e.prev,e,e.next)===0)){if(Sr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function yr(s,t,e,n,i,o,r){if(!s)return;!r&&o&&hg(s,n,i,o);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,o?ng(s,n,i,o):eg(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Sr(s),s=l.next,a=l.next;continue}if(s=l,s===a){r?r===1?(s=ig(Is(s),t,e),yr(s,t,e,n,i,o,2)):r===2&&sg(s,t,e,n,i,o):yr(Is(s),t,e,n,i,o,1);break}}}function eg(s){const t=s.prev,e=s,n=s.next;if(Ae(t,e,n)>=0)return!1;const i=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=i<o?i<r?i:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,f=i>o?i>r?i:r:o>r?o:r,d=a>c?a>l?a:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&lo(i,a,o,c,r,l,m.x,m.y)&&Ae(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ng(s,t,e,n){const i=s.prev,o=s,r=s.next;if(Ae(i,o,r)>=0)return!1;const a=i.x,c=o.x,l=r.x,h=i.y,u=o.y,f=r.y,d=a<c?a<l?a:l:c<l?c:l,m=h<u?h<f?h:f:u<f?u:f,x=a>c?a>l?a:l:c>l?c:l,p=h>u?h>f?h:f:u>f?u:f,g=gh(d,m,t,e,n),b=gh(x,p,t,e,n);let v=s.prevZ,M=s.nextZ;for(;v&&v.z>=g&&M&&M.z<=b;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=p&&v!==i&&v!==r&&lo(a,h,c,u,l,f,v.x,v.y)&&Ae(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=x&&M.y>=m&&M.y<=p&&M!==i&&M!==r&&lo(a,h,c,u,l,f,M.x,M.y)&&Ae(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=g;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=p&&v!==i&&v!==r&&lo(a,h,c,u,l,f,v.x,v.y)&&Ae(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=b;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=p&&M!==i&&M!==r&&lo(a,h,c,u,l,f,M.x,M.y)&&Ae(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function ig(s,t,e){let n=s;do{const i=n.prev,o=n.next.next;!fc(i,o)&&ap(i,n,n.next,o)&&wr(i,o)&&wr(o,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Sr(n),Sr(n.next),n=s=o),n=n.next}while(n!==s);return Is(n)}function sg(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&dg(r,a)){let c=cp(r,a);r=Is(r,r.next),c=Is(c,c.next),yr(r,t,e,n,i,o,0),yr(c,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function og(s,t,e,n){const i=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:s.length,l=rp(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(fg(l));for(i.sort(rg),o=0;o<i.length;o++)e=ag(i[o],e);return e}function rg(s,t){return s.x-t.x}function ag(s,t){const e=cg(s,t);if(!e)return t;const n=cp(e,s);return Is(n,n.next),Is(e,e.next)}function cg(s,t){let e=t,n=-1/0,i;const o=s.x,r=s.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===o))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;e=i;do o>=e.x&&e.x>=c&&o!==e.x&&lo(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),wr(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&lg(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function lg(s,t){return Ae(s.prev,s,t.prev)<0&&Ae(t.next,s,s.next)<0}function hg(s,t,e,n){let i=s;do i.z===0&&(i.z=gh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ug(i)}function ug(s){let t,e,n,i,o,r,a,c,l=1;do{for(e=s,s=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;e=n}o.nextZ=null,l*=2}while(r>1);return s}function gh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function fg(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function lo(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function dg(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!pg(s,t)&&(wr(s,t)&&wr(t,s)&&mg(s,t)&&(Ae(s.prev,s,t.prev)||Ae(s,t.prev,t))||fc(s,t)&&Ae(s.prev,s,s.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function fc(s,t){return s.x===t.x&&s.y===t.y}function ap(s,t,e,n){const i=la(Ae(s,t,e)),o=la(Ae(s,t,n)),r=la(Ae(e,n,s)),a=la(Ae(e,n,t));return!!(i!==o&&r!==a||i===0&&ca(s,e,t)||o===0&&ca(s,n,t)||r===0&&ca(e,s,n)||a===0&&ca(e,t,n))}function ca(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function la(s){return s>0?1:s<0?-1:0}function pg(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&ap(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function wr(s,t){return Ae(s.prev,s,s.next)<0?Ae(s,t,s.next)>=0&&Ae(s,s.prev,t)>=0:Ae(s,t,s.prev)<0||Ae(s,s.next,t)<0}function mg(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function cp(s,t){const e=new xh(s.i,s.x,s.y),n=new xh(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function _f(s,t,e,n){const i=new xh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Sr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function xh(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gg(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}class pr{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return pr.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];Mf(t),vf(n,t);let r=t.length;e.forEach(Mf);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,vf(n,e[c]);const a=tg.triangulate(n,i);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Mf(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function vf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Es extends Lr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Es(t.radius,t.detail)}}class _u extends Lr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _u(t.radius,t.detail)}}class xe extends Te{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,d=[],m=[],x=[],p=[];for(let g=0;g<h;g++){const b=g*f-r;for(let v=0;v<l;v++){const M=v*u-o;m.push(M,-b,0),x.push(0,0,1),p.push(v/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let b=0;b<a;b++){const v=b+l*g,M=b+l*(g+1),A=b+1+l*(g+1),E=b+1+l*g;d.push(v,M,E),d.push(M,A,E)}this.setIndex(d),this.setAttribute("position",new Ht(m,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.width,t.height,t.widthSegments,t.heightSegments)}}class Do extends Te{constructor(t=.5,e=1,n=32,i=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=t;const f=(e-t)/i,d=new N,m=new pt;for(let x=0;x<=i;x++){for(let p=0;p<=n;p++){const g=o+p/n*r;d.x=u*Math.cos(g),d.y=u*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let x=0;x<i;x++){const p=x*(n+1);for(let g=0;g<n;g++){const b=g+p,v=b,M=b+n+1,A=b+n+2,E=b+1;a.push(v,M,E),a.push(M,A,E)}}this.setIndex(a),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class br extends Te{constructor(t=new Ya([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ht(i,3)),this.setAttribute("normal",new Ht(o,3)),this.setAttribute("uv",new Ht(r,2));function l(h){const u=i.length/3,f=h.extractPoints(e);let d=f.shape;const m=f.holes;pr.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,g=m.length;p<g;p++){const b=m[p];pr.isClockWise(b)===!0&&(m[p]=b.reverse())}const x=pr.triangulateShape(d,m);for(let p=0,g=m.length;p<g;p++){const b=m[p];d=d.concat(b)}for(let p=0,g=d.length;p<g;p++){const b=d[p];i.push(b.x,b.y,0),o.push(0,0,1),r.push(b.x,b.y)}for(let p=0,g=x.length;p<g;p++){const b=x[p],v=b[0]+u,M=b[1]+u,A=b[2]+u;n.push(v,M,A),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return xg(e,t)}static fromJSON(t,e){const n=[];for(let i=0,o=t.shapes.length;i<o;i++){const r=e[t.shapes[i]];n.push(r)}return new br(n,t.curveSegments)}}function xg(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class j extends Te{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new N,f=new N,d=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){const b=[],v=g/n;let M=0;g===0&&r===0?M=.5/e:g===n&&c===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const E=A/e;u.x=-t*Math.cos(i+E*o)*Math.sin(r+v*a),u.y=t*Math.cos(r+v*a),u.z=t*Math.sin(i+E*o)*Math.sin(r+v*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(E+M,1-v),b.push(l++)}h.push(b)}for(let g=0;g<n;g++)for(let b=0;b<e;b++){const v=h[g][b+1],M=h[g][b],A=h[g+1][b],E=h[g+1][b+1];(g!==0||r>0)&&d.push(v,M,E),(g!==n-1||c<Math.PI)&&d.push(M,A,E)}this.setIndex(d),this.setAttribute("position",new Ht(m,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new j(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class be extends Te{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],c=[],l=[],h=new N,u=new N,f=new N;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){const x=m/i*o,p=d/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){const x=(i+1)*d+m-1,p=(i+1)*(d-1)+m-1,g=(i+1)*(d-1)+m,b=(i+1)*d+m;r.push(x,p,b),r.push(p,g,b)}this.setIndex(r),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class wn extends Te{constructor(t=new sp(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new N,c=new N,l=new pt;let h=new N;const u=[],f=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(d,2));function x(){for(let v=0;v<e;v++)p(v);p(o===!1?e:0),b(),g()}function p(v){h=t.getPointAt(v/e,h);const M=r.normals[v],A=r.binormals[v];for(let E=0;E<=i;E++){const T=E/i*Math.PI*2,S=Math.sin(T),y=-Math.cos(T);c.x=y*M.x+S*A.x,c.y=y*M.y+S*A.y,c.z=y*M.z+S*A.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function g(){for(let v=1;v<=e;v++)for(let M=1;M<=i;M++){const A=(i+1)*(v-1)+(M-1),E=(i+1)*v+(M-1),T=(i+1)*v+M,S=(i+1)*(v-1)+M;m.push(A,E,S),m.push(E,T,S)}}function b(){for(let v=0;v<=e;v++)for(let M=0;M<=i;M++)l.x=v/e,l.y=M/i,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new wn(new mh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class K extends zs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kd,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _g extends zs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mg extends zs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Mu extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new st(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class vg extends Mu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Yc=new de,yf=new N,wf=new N;class lp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hu,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yf.setFromMatrixPosition(t.matrixWorld),e.position.copy(yf),wf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wf),e.updateMatrixWorld(),Yc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Sf=new de,Ko=new N,Zc=new N;class yg extends lp{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Ko.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ko),Zc.copy(n.position),Zc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Zc),n.updateMatrixWorld(),i.makeTranslation(-Ko.x,-Ko.y,-Ko.z),Sf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sf)}}class Bo extends Mu{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new yg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class vu extends jd{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class wg extends lp{constructor(){super(new vu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dc extends Mu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new wg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Sg extends Pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class hp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=bf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function bf(){return performance.now()}function Tf(s,t,e,n){const i=bg(n);switch(e){case Ud:return s*t;case zd:return s*t;case Fd:return s*t*2;case su:return s*t/i.components*i.byteLength;case ou:return s*t/i.components*i.byteLength;case Od:return s*t*2/i.components*i.byteLength;case ru:return s*t*2/i.components*i.byteLength;case Nd:return s*t*3/i.components*i.byteLength;case Jn:return s*t*4/i.components*i.byteLength;case au:return s*t*4/i.components*i.byteLength;case Ta:case Ea:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Aa:case Ra:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Hl:case Wl:return Math.max(s,16)*Math.max(t,8)/4;case Gl:case Vl:return Math.max(s,8)*Math.max(t,8)/2;case Xl:case ql:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Yl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case jl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case th:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case eh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case nh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ih:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case sh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case oh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case rh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ah:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ca:case ch:case lh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Bd:case hh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case uh:case fh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bg(s){switch(s){case Ui:case Id:return{byteLength:1,components:1};case vr:case Ld:case Ii:return{byteLength:2,components:1};case nu:case iu:return{byteLength:2,components:4};case Ps:case eu:case fi:return{byteLength:4,components:1};case Dd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tu);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function up(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function Tg(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const x=u[d];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:o,update:r}}var Eg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ag=`#ifdef USE_ALPHAHASH
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
#endif`,Rg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lg=`#ifdef USE_AOMAP
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
#endif`,Dg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ug=`#ifdef USE_BATCHING
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
#endif`,Ng=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Og=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bg=`#ifdef USE_IRIDESCENCE
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
#endif`,kg=`#ifdef USE_BUMPMAP
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
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$g=`#define PI 3.141592653589793
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
} // validated`,jg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kg=`vec3 transformedNormal = objectNormal;
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
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ex=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ix=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sx=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rx=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ux=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dx=`#ifdef USE_GRADIENTMAP
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
}`,px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xx=`uniform bool receiveShadow;
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
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,Mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sx=`PhysicalMaterial material;
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
#endif`,bx=`struct PhysicalMaterial {
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
}`,Tx=`
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
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ux=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nx=`#if defined( USE_POINTS_UV )
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
#endif`,zx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ox=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gx=`#ifdef USE_MORPHTARGETS
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
#endif`,Hx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zx=`#ifdef USE_NORMALMAP
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
#endif`,$x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h_=`float getShadowMask() {
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
}`,u_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f_=`#ifdef USE_SKINNING
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
#endif`,d_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p_=`#ifdef USE_SKINNING
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
#endif`,m_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,__=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,M_=`#ifdef USE_TRANSMISSION
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
#endif`,v_=`#ifdef USE_TRANSMISSION
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
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const T_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E_=`uniform sampler2D t2D;
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
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I_=`#include <common>
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
}`,L_=`#if DEPTH_PACKING == 3200
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
}`,D_=`#define DISTANCE
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
}`,U_=`#define DISTANCE
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
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F_=`uniform float scale;
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
}`,O_=`uniform vec3 diffuse;
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
}`,B_=`#include <common>
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
}`,k_=`uniform vec3 diffuse;
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
}`,G_=`#define LAMBERT
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
}`,H_=`#define LAMBERT
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
}`,V_=`#define MATCAP
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
}`,W_=`#define MATCAP
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
}`,X_=`#define NORMAL
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
}`,q_=`#define NORMAL
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
}`,Y_=`#define PHONG
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
}`,Z_=`#define PHONG
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
}`,$_=`#define STANDARD
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
}`,j_=`#define STANDARD
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
}`,K_=`#define TOON
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
}`,J_=`#define TOON
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
}`,Q_=`uniform float size;
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
}`,tM=`uniform vec3 diffuse;
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
}`,eM=`#include <common>
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
}`,nM=`uniform vec3 color;
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
}`,iM=`uniform float rotation;
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
}`,sM=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Eg,alphahash_pars_fragment:Ag,alphamap_fragment:Rg,alphamap_pars_fragment:Cg,alphatest_fragment:Pg,alphatest_pars_fragment:Ig,aomap_fragment:Lg,aomap_pars_fragment:Dg,batching_pars_vertex:Ug,batching_vertex:Ng,begin_vertex:zg,beginnormal_vertex:Fg,bsdfs:Og,iridescence_fragment:Bg,bumpmap_pars_fragment:kg,clipping_planes_fragment:Gg,clipping_planes_pars_fragment:Hg,clipping_planes_pars_vertex:Vg,clipping_planes_vertex:Wg,color_fragment:Xg,color_pars_fragment:qg,color_pars_vertex:Yg,color_vertex:Zg,common:$g,cube_uv_reflection_fragment:jg,defaultnormal_vertex:Kg,displacementmap_pars_vertex:Jg,displacementmap_vertex:Qg,emissivemap_fragment:tx,emissivemap_pars_fragment:ex,colorspace_fragment:nx,colorspace_pars_fragment:ix,envmap_fragment:sx,envmap_common_pars_fragment:ox,envmap_pars_fragment:rx,envmap_pars_vertex:ax,envmap_physical_pars_fragment:_x,envmap_vertex:cx,fog_vertex:lx,fog_pars_vertex:hx,fog_fragment:ux,fog_pars_fragment:fx,gradientmap_pars_fragment:dx,lightmap_pars_fragment:px,lights_lambert_fragment:mx,lights_lambert_pars_fragment:gx,lights_pars_begin:xx,lights_toon_fragment:Mx,lights_toon_pars_fragment:vx,lights_phong_fragment:yx,lights_phong_pars_fragment:wx,lights_physical_fragment:Sx,lights_physical_pars_fragment:bx,lights_fragment_begin:Tx,lights_fragment_maps:Ex,lights_fragment_end:Ax,logdepthbuf_fragment:Rx,logdepthbuf_pars_fragment:Cx,logdepthbuf_pars_vertex:Px,logdepthbuf_vertex:Ix,map_fragment:Lx,map_pars_fragment:Dx,map_particle_fragment:Ux,map_particle_pars_fragment:Nx,metalnessmap_fragment:zx,metalnessmap_pars_fragment:Fx,morphinstance_vertex:Ox,morphcolor_vertex:Bx,morphnormal_vertex:kx,morphtarget_pars_vertex:Gx,morphtarget_vertex:Hx,normal_fragment_begin:Vx,normal_fragment_maps:Wx,normal_pars_fragment:Xx,normal_pars_vertex:qx,normal_vertex:Yx,normalmap_pars_fragment:Zx,clearcoat_normal_fragment_begin:$x,clearcoat_normal_fragment_maps:jx,clearcoat_pars_fragment:Kx,iridescence_pars_fragment:Jx,opaque_fragment:Qx,packing:t_,premultiplied_alpha_fragment:e_,project_vertex:n_,dithering_fragment:i_,dithering_pars_fragment:s_,roughnessmap_fragment:o_,roughnessmap_pars_fragment:r_,shadowmap_pars_fragment:a_,shadowmap_pars_vertex:c_,shadowmap_vertex:l_,shadowmask_pars_fragment:h_,skinbase_vertex:u_,skinning_pars_vertex:f_,skinning_vertex:d_,skinnormal_vertex:p_,specularmap_fragment:m_,specularmap_pars_fragment:g_,tonemapping_fragment:x_,tonemapping_pars_fragment:__,transmission_fragment:M_,transmission_pars_fragment:v_,uv_pars_fragment:y_,uv_pars_vertex:w_,uv_vertex:S_,worldpos_vertex:b_,background_vert:T_,background_frag:E_,backgroundCube_vert:A_,backgroundCube_frag:R_,cube_vert:C_,cube_frag:P_,depth_vert:I_,depth_frag:L_,distanceRGBA_vert:D_,distanceRGBA_frag:U_,equirect_vert:N_,equirect_frag:z_,linedashed_vert:F_,linedashed_frag:O_,meshbasic_vert:B_,meshbasic_frag:k_,meshlambert_vert:G_,meshlambert_frag:H_,meshmatcap_vert:V_,meshmatcap_frag:W_,meshnormal_vert:X_,meshnormal_frag:q_,meshphong_vert:Y_,meshphong_frag:Z_,meshphysical_vert:$_,meshphysical_frag:j_,meshtoon_vert:K_,meshtoon_frag:J_,points_vert:Q_,points_frag:tM,shadow_vert:eM,shadow_frag:nM,sprite_vert:iM,sprite_frag:sM},mt={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},oi={basic:{uniforms:nn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:nn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new st(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:nn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:nn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:nn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new st(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:nn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:nn([mt.points,mt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:nn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:nn([mt.common,mt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:nn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:nn([mt.sprite,mt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:nn([mt.common,mt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:nn([mt.lights,mt.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};oi.physical={uniforms:nn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const ha={r:0,b:0,g:0},as=new pi,oM=new de;function rM(s,t,e,n,i,o,r){const a=new st(0);let c=o===!0?0:1,l,h,u=null,f=0,d=null;function m(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function x(v){let M=!1;const A=m(v);A===null?g(a,c):A&&A.isColor&&(g(A,1),M=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(v,M){const A=m(M);A&&(A.isCubeTexture||A.mapping===uc)?(h===void 0&&(h=new I(new Pr(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Lo(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),as.copy(M.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(oM.makeRotationFromEuler(as)),h.material.toneMapped=re.getTransfer(A.colorSpace)!==pe,(u!==A||f!==A.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new I(new xe(2,2),new Sn({name:"BackgroundMaterial",uniforms:Lo(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=re.getTransfer(A.colorSpace)!==pe,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=A,f=A.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,M){v.getRGB(ha,$d(s)),n.buffers.color.setClear(ha.r,ha.g,ha.b,M,r)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),c=M,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,g(a,c)},render:x,addToRenderList:p,dispose:b}}function aM(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let o=i,r=!1;function a(_,R,U,L,z){let V=!1;const G=u(L,U,R);o!==G&&(o=G,l(o.object)),V=d(_,L,U,z),V&&m(_,L,U,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,M(_,R,U,L),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return s.createVertexArray()}function l(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function u(_,R,U){const L=U.wireframe===!0;let z=n[_.id];z===void 0&&(z={},n[_.id]=z);let V=z[R.id];V===void 0&&(V={},z[R.id]=V);let G=V[L];return G===void 0&&(G=f(c()),V[L]=G),G}function f(_){const R=[],U=[],L=[];for(let z=0;z<e;z++)R[z]=0,U[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:L,object:_,attributes:{},index:null}}function d(_,R,U,L){const z=o.attributes,V=R.attributes;let G=0;const Z=U.getAttributes();for(const W in Z)if(Z[W].location>=0){const ft=z[W];let wt=V[W];if(wt===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(wt=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(wt=_.instanceColor)),ft===void 0||ft.attribute!==wt||wt&&ft.data!==wt.data)return!0;G++}return o.attributesNum!==G||o.index!==L}function m(_,R,U,L){const z={},V=R.attributes;let G=0;const Z=U.getAttributes();for(const W in Z)if(Z[W].location>=0){let ft=V[W];ft===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(ft=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(ft=_.instanceColor));const wt={};wt.attribute=ft,ft&&ft.data&&(wt.data=ft.data),z[W]=wt,G++}o.attributes=z,o.attributesNum=G,o.index=L}function x(){const _=o.newAttributes;for(let R=0,U=_.length;R<U;R++)_[R]=0}function p(_){g(_,0)}function g(_,R){const U=o.newAttributes,L=o.enabledAttributes,z=o.attributeDivisors;U[_]=1,L[_]===0&&(s.enableVertexAttribArray(_),L[_]=1),z[_]!==R&&(s.vertexAttribDivisor(_,R),z[_]=R)}function b(){const _=o.newAttributes,R=o.enabledAttributes;for(let U=0,L=R.length;U<L;U++)R[U]!==_[U]&&(s.disableVertexAttribArray(U),R[U]=0)}function v(_,R,U,L,z,V,G){G===!0?s.vertexAttribIPointer(_,R,U,z,V):s.vertexAttribPointer(_,R,U,L,z,V)}function M(_,R,U,L){x();const z=L.attributes,V=U.getAttributes(),G=R.defaultAttributeValues;for(const Z in V){const W=V[Z];if(W.location>=0){let rt=z[Z];if(rt===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(rt=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(rt=_.instanceColor)),rt!==void 0){const ft=rt.normalized,wt=rt.itemSize,Ft=t.get(rt);if(Ft===void 0)continue;const jt=Ft.buffer,tt=Ft.type,ct=Ft.bytesPerElement,St=tt===s.INT||tt===s.UNSIGNED_INT||rt.gpuType===eu;if(rt.isInterleavedBufferAttribute){const dt=rt.data,zt=dt.stride,kt=rt.offset;if(dt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<W.locationSize;Yt++)g(W.location+Yt,dt.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Yt=0;Yt<W.locationSize;Yt++)p(W.location+Yt);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let Yt=0;Yt<W.locationSize;Yt++)v(W.location+Yt,wt/W.locationSize,tt,ft,zt*ct,(kt+wt/W.locationSize*Yt)*ct,St)}else{if(rt.isInstancedBufferAttribute){for(let dt=0;dt<W.locationSize;dt++)g(W.location+dt,rt.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let dt=0;dt<W.locationSize;dt++)p(W.location+dt);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let dt=0;dt<W.locationSize;dt++)v(W.location+dt,wt/W.locationSize,tt,ft,wt*ct,wt/W.locationSize*dt*ct,St)}}else if(G!==void 0){const ft=G[Z];if(ft!==void 0)switch(ft.length){case 2:s.vertexAttrib2fv(W.location,ft);break;case 3:s.vertexAttrib3fv(W.location,ft);break;case 4:s.vertexAttrib4fv(W.location,ft);break;default:s.vertexAttrib1fv(W.location,ft)}}}}b()}function A(){S();for(const _ in n){const R=n[_];for(const U in R){const L=R[U];for(const z in L)h(L[z].object),delete L[z];delete R[U]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;const R=n[_.id];for(const U in R){const L=R[U];for(const z in L)h(L[z].object),delete L[z];delete R[U]}delete n[_.id]}function T(_){for(const R in n){const U=n[R];if(U[_.id]===void 0)continue;const L=U[_.id];for(const z in L)h(L[z].object),delete L[z];delete U[_.id]}}function S(){y(),r=!0,o!==i&&(o=i,l(o.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:S,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function cM(s,t,e){let n;function i(l){n=l}function o(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)r(l[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*f[x];e.update(m,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function lM(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){return!(T!==Jn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const S=T===Ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ui&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==fi&&!S)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:A,maxSamples:E}}function hM(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new us,a=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,g=s.get(u);if(!i||m===null||m.length===0||o&&!p)o?h(null):l();else{const b=o?0:n,v=b*4;let M=g.clippingState||null;c.value=M,M=h(m,f,v,d);for(let A=0;A!==v;++A)M[A]=e[A];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=c.value,m!==!0||p===null){const g=d+x*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,M=d;v!==x;++v,M+=4)r.copy(u[v]).applyMatrix4(b,a),r.normal.toArray(p,M),p[M+3]=r.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function uM(s){let t=new WeakMap;function e(r,a){return a===Ol?r.mapping=Ao:a===Bl&&(r.mapping=Ro),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Ol||a===Bl)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Fm(c.height);return l.fromEquirectangularTexture(s,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const ho=4,Ef=[.125,.215,.35,.446,.526,.582],vs=20,$c=new vu,Af=new st;let jc=null,Kc=0,Jc=0,Qc=!1;const fs=(1+Math.sqrt(5))/2,Js=1/fs,Rf=[new N(-fs,Js,0),new N(fs,Js,0),new N(-Js,0,fs),new N(Js,0,fs),new N(0,fs,-Js),new N(0,fs,Js),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Cf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){jc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=If(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jc,Kc,Jc),this._renderer.xr.enabled=Qc,t.scissorTest=!1,ua(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ao||t.mapping===Ro?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:Ii,format:Jn,colorSpace:Io,depthBuffer:!1},i=Pf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pf(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fM(o)),this._blurMaterial=dM(o,t,e)}return i}_compileMaterial(t){const e=new I(this._lodPlanes[0],t);this._renderer.compile(e,$c)}_sceneToCubeUV(t,e,n,i){const a=new Pn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Af),h.toneMapping=Ki,h.autoClear=!1;const d=new Y({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),m=new I(new Pr,d);let x=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,x=!0):(d.color.copy(Af),x=!0);for(let g=0;g<6;g++){const b=g%3;b===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):b===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const v=this._cubeSize;ua(i,b*v,g>2?v:0,v,v),h.setRenderTarget(i),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ao||t.mapping===Ro;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=If());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new I(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;ua(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,$c)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Rf[(i-o-1)%Rf.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new I(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*vs-1),x=o/m,p=isFinite(o)?1+Math.floor(h*x):vs;p>vs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vs}`);const g=[];let b=0;for(let T=0;T<vs;++T){const S=T/x,y=Math.exp(-S*S/2);g.push(y),T===0?b+=y:T<p&&(b+=2*y)}for(let T=0;T<g.length;T++)g[T]=g[T]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=m,f.mipInt.value=v-n;const M=this._sizeLods[i],A=3*M*(i>v-ho?i-v+ho:0),E=4*(this._cubeSize-M);ua(e,A,E,3*M,2*M),c.setRenderTarget(e),c.render(u,$c)}}function fM(s){const t=[],e=[],n=[];let i=s;const o=s-ho+1+Ef.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let c=1/a;r>s-ho?c=Ef[r-s+ho-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,p=2,g=1,b=new Float32Array(x*m*d),v=new Float32Array(p*m*d),M=new Float32Array(g*m*d);for(let E=0;E<d;E++){const T=E%3*2/3-1,S=E>2?0:-1,y=[T,S,0,T+2/3,S,0,T+2/3,S+1,0,T,S,0,T+2/3,S+1,0,T,S+1,0];b.set(y,x*m*E),v.set(f,p*m*E);const _=[E,E,E,E,E,E];M.set(_,g*m*E)}const A=new Te;A.setAttribute("position",new Ve(b,x)),A.setAttribute("uv",new Ve(v,p)),A.setAttribute("faceIndex",new Ve(M,g)),t.push(A),i>ho&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pf(s,t,e){const n=new Qn(s,t,e);return n.texture.mapping=uc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ua(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function dM(s,t,e){const n=new Float32Array(vs),i=new N(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:yu(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function If(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yu(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Lf(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function yu(){return`

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
	`}function pM(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ol||c===Bl,h=c===Ao||c===Ro;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Cf(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Cf(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function mM(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&so("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function gM(s,t,e,n){const i={},o=new WeakMap;function r(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",r),delete i[f.id];const d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)t.update(f[d],s.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,m=u.attributes.position;let x=0;if(d!==null){const b=d.array;x=d.version;for(let v=0,M=b.length;v<M;v+=3){const A=b[v+0],E=b[v+1],T=b[v+2];f.push(A,E,E,T,T,A)}}else if(m!==void 0){const b=m.array;x=m.version;for(let v=0,M=b.length/3-1;v<M;v+=3){const A=v+0,E=v+1,T=v+2;f.push(A,E,E,T,T,A)}}else return;const p=new(Hd(f)?Zd:Yd)(f,1);p.version=x;const g=o.get(u);g&&t.remove(g),o.set(u,p)}function h(u){const f=o.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function xM(s,t,e){let n;function i(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function c(f,d){s.drawElements(n,d,o,f*r),e.update(d,n,1)}function l(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,o,f*r,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,f,0,m);let p=0;for(let g=0;g<m;g++)p+=d[g];e.update(p,n,1)}function u(f,d,m,x){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f.length;g++)l(f[g]/r,d[g],x[g]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,o,f,0,x,0,m);let g=0;for(let b=0;b<m;b++)g+=d[b]*x[b];e.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function _M(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function MM(s,t,e){const n=new WeakMap,i=new me;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let _=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var d=_;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;m===!0&&(M=1),x===!0&&(M=2),p===!0&&(M=3);let A=a.attributes.position.count*M,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const T=new Float32Array(A*E*4*u),S=new Wd(T,A,E,u);S.type=fi,S.needsUpdate=!0;const y=M*4;for(let R=0;R<u;R++){const U=g[R],L=b[R],z=v[R],V=A*E*4*R;for(let G=0;G<U.count;G++){const Z=G*y;m===!0&&(i.fromBufferAttribute(U,G),T[V+Z+0]=i.x,T[V+Z+1]=i.y,T[V+Z+2]=i.z,T[V+Z+3]=0),x===!0&&(i.fromBufferAttribute(L,G),T[V+Z+4]=i.x,T[V+Z+5]=i.y,T[V+Z+6]=i.z,T[V+Z+7]=0),p===!0&&(i.fromBufferAttribute(z,G),T[V+Z+8]=i.x,T[V+Z+9]=i.y,T[V+Z+10]=i.z,T[V+Z+11]=z.itemSize===4?i.w:1)}}f={count:u,texture:S,size:new pt(A,E)},n.set(a,f),a.addEventListener("dispose",_)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let m=0;for(let p=0;p<l.length;p++)m+=l[p];const x=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:o}}function vM(s,t,e,n){let i=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function r(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}const fp=new Qe,Df=new tp(1,1),dp=new Wd,pp=new wm,mp=new Kd,Uf=[],Nf=[],zf=new Float32Array(16),Ff=new Float32Array(9),Of=new Float32Array(4);function ko(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=Uf[i];if(o===void 0&&(o=new Float32Array(i),Uf[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function Fe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Oe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function pc(s,t){let e=Nf[t];e===void 0&&(e=new Int32Array(t),Nf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function yM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function wM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2fv(this.addr,t),Oe(e,t)}}function SM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;s.uniform3fv(this.addr,t),Oe(e,t)}}function bM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4fv(this.addr,t),Oe(e,t)}}function TM(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Of.set(n),s.uniformMatrix2fv(this.addr,!1,Of),Oe(e,n)}}function EM(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Ff.set(n),s.uniformMatrix3fv(this.addr,!1,Ff),Oe(e,n)}}function AM(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;zf.set(n),s.uniformMatrix4fv(this.addr,!1,zf),Oe(e,n)}}function RM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function CM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2iv(this.addr,t),Oe(e,t)}}function PM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3iv(this.addr,t),Oe(e,t)}}function IM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4iv(this.addr,t),Oe(e,t)}}function LM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function DM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2uiv(this.addr,t),Oe(e,t)}}function UM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3uiv(this.addr,t),Oe(e,t)}}function NM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4uiv(this.addr,t),Oe(e,t)}}function zM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(Df.compareFunction=Gd,o=Df):o=fp,e.setTexture2D(t||o,i)}function FM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||pp,i)}function OM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||mp,i)}function BM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||dp,i)}function kM(s){switch(s){case 5126:return yM;case 35664:return wM;case 35665:return SM;case 35666:return bM;case 35674:return TM;case 35675:return EM;case 35676:return AM;case 5124:case 35670:return RM;case 35667:case 35671:return CM;case 35668:case 35672:return PM;case 35669:case 35673:return IM;case 5125:return LM;case 36294:return DM;case 36295:return UM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return zM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return OM;case 36289:case 36303:case 36311:case 36292:return BM}}function GM(s,t){s.uniform1fv(this.addr,t)}function HM(s,t){const e=ko(t,this.size,2);s.uniform2fv(this.addr,e)}function VM(s,t){const e=ko(t,this.size,3);s.uniform3fv(this.addr,e)}function WM(s,t){const e=ko(t,this.size,4);s.uniform4fv(this.addr,e)}function XM(s,t){const e=ko(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function qM(s,t){const e=ko(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function YM(s,t){const e=ko(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ZM(s,t){s.uniform1iv(this.addr,t)}function $M(s,t){s.uniform2iv(this.addr,t)}function jM(s,t){s.uniform3iv(this.addr,t)}function KM(s,t){s.uniform4iv(this.addr,t)}function JM(s,t){s.uniform1uiv(this.addr,t)}function QM(s,t){s.uniform2uiv(this.addr,t)}function tv(s,t){s.uniform3uiv(this.addr,t)}function ev(s,t){s.uniform4uiv(this.addr,t)}function nv(s,t,e){const n=this.cache,i=t.length,o=pc(e,i);Fe(n,o)||(s.uniform1iv(this.addr,o),Oe(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||fp,o[r])}function iv(s,t,e){const n=this.cache,i=t.length,o=pc(e,i);Fe(n,o)||(s.uniform1iv(this.addr,o),Oe(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||pp,o[r])}function sv(s,t,e){const n=this.cache,i=t.length,o=pc(e,i);Fe(n,o)||(s.uniform1iv(this.addr,o),Oe(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||mp,o[r])}function ov(s,t,e){const n=this.cache,i=t.length,o=pc(e,i);Fe(n,o)||(s.uniform1iv(this.addr,o),Oe(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||dp,o[r])}function rv(s){switch(s){case 5126:return GM;case 35664:return HM;case 35665:return VM;case 35666:return WM;case 35674:return XM;case 35675:return qM;case 35676:return YM;case 5124:case 35670:return ZM;case 35667:case 35671:return $M;case 35668:case 35672:return jM;case 35669:case 35673:return KM;case 5125:return JM;case 36294:return QM;case 36295:return tv;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return ov}}class av{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=kM(e.type)}}class cv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rv(e.type)}}class lv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const tl=/(\w+)(\])?(\[|\.)?/g;function Bf(s,t){s.seq.push(t),s.map[t.id]=t}function hv(s,t,e){const n=s.name,i=n.length;for(tl.lastIndex=0;;){const o=tl.exec(n),r=tl.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){Bf(e,l===void 0?new av(a,s,t):new cv(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new lv(a),Bf(e,u)),e=u}}}class Pa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);hv(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function kf(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const uv=37297;let fv=0;function dv(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Gf=new Wt;function pv(s){re._getMatrix(Gf,re.workingColorSpace,s);const t=`mat3( ${Gf.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(s)){case ka:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Hf(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+dv(s.getShaderSource(t),r)}else return i}function mv(s,t){const e=pv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function gv(s,t){let e;switch(t){case $0:e="Linear";break;case j0:e="Reinhard";break;case K0:e="Cineon";break;case Cd:e="ACESFilmic";break;case Q0:e="AgX";break;case tm:e="Neutral";break;case J0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fa=new N;function xv(){re.getLuminanceCoefficients(fa);const s=fa.x.toFixed(4),t=fa.y.toFixed(4),e=fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _v(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function Mv(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vv(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function sr(s){return s!==""}function Vf(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yv=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(s){return s.replace(yv,Sv)}const wv=new Map;function Sv(s,t){let e=qt[t];if(e===void 0){const n=wv.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _h(e)}const bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xf(s){return s.replace(bv,Tv)}function Tv(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function qf(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Ev(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ed?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ad?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===bi&&(t="SHADOWMAP_TYPE_VSM"),t}function Av(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ao:case Ro:t="ENVMAP_TYPE_CUBE";break;case uc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ro:t="ENVMAP_MODE_REFRACTION";break}return t}function Cv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Rd:t="ENVMAP_BLENDING_MULTIPLY";break;case Y0:t="ENVMAP_BLENDING_MIX";break;case Z0:t="ENVMAP_BLENDING_ADD";break}return t}function Pv(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Iv(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=Ev(e),l=Av(e),h=Rv(e),u=Cv(e),f=Pv(e),d=_v(e),m=Mv(o),x=i.createProgram();let p,g,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(sr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(sr).join(`
`),g.length>0&&(g+=`
`)):(p=[qf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),g=[qf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ki?"#define TONE_MAPPING":"",e.toneMapping!==Ki?qt.tonemapping_pars_fragment:"",e.toneMapping!==Ki?gv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,mv("linearToOutputTexel",e.outputColorSpace),xv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),r=_h(r),r=Vf(r,e),r=Wf(r,e),a=_h(a),a=Vf(a,e),a=Wf(a,e),r=Xf(r),a=Xf(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=b+p+r,M=b+g+a,A=kf(i,i.VERTEX_SHADER,v),E=kf(i,i.FRAGMENT_SHADER,M);i.attachShader(x,A),i.attachShader(x,E),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(R){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(x).trim(),L=i.getShaderInfoLog(A).trim(),z=i.getShaderInfoLog(E).trim();let V=!0,G=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,A,E);else{const Z=Hf(i,A,"vertex"),W=Hf(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+Z+`
`+W)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||z==="")&&(G=!1);G&&(R.diagnostics={runnable:V,programLog:U,vertexShader:{log:L,prefix:p},fragmentShader:{log:z,prefix:g}})}i.deleteShader(A),i.deleteShader(E),S=new Pa(i,x),y=vv(i,x)}let S;this.getUniforms=function(){return S===void 0&&T(this),S};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(x,uv)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}let Lv=0;class Dv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Uv(t),e.set(t,n)),n}}class Uv{constructor(t){this.id=Lv++,this.code=t,this.usedTimes=0}}function Nv(s,t,e,n,i,o,r){const a=new Xd,c=new Dv,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,_,R,U,L){const z=U.fog,V=L.geometry,G=y.isMeshStandardMaterial?U.environment:null,Z=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),W=Z&&Z.mapping===uc?Z.image.height:null,rt=m[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ft=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,wt=ft!==void 0?ft.length:0;let Ft=0;V.morphAttributes.position!==void 0&&(Ft=1),V.morphAttributes.normal!==void 0&&(Ft=2),V.morphAttributes.color!==void 0&&(Ft=3);let jt,tt,ct,St;if(rt){const fe=oi[rt];jt=fe.vertexShader,tt=fe.fragmentShader}else jt=y.vertexShader,tt=y.fragmentShader,c.update(y),ct=c.getVertexShaderID(y),St=c.getFragmentShaderID(y);const dt=s.getRenderTarget(),zt=s.state.buffers.depth.getReversed(),kt=L.isInstancedMesh===!0,Yt=L.isBatchedMesh===!0,Ee=!!y.map,te=!!y.matcap,Pe=!!Z,O=!!y.aoMap,Nn=!!y.lightMap,Kt=!!y.bumpMap,Jt=!!y.normalMap,It=!!y.displacementMap,Me=!!y.emissiveMap,Pt=!!y.metalnessMap,D=!!y.roughnessMap,C=y.anisotropy>0,X=y.clearcoat>0,nt=y.dispersion>0,ot=y.iridescence>0,et=y.sheen>0,Ct=y.transmission>0,_t=C&&!!y.anisotropyMap,Tt=X&&!!y.clearcoatMap,ee=X&&!!y.clearcoatNormalMap,lt=X&&!!y.clearcoatRoughnessMap,Et=ot&&!!y.iridescenceMap,Nt=ot&&!!y.iridescenceThicknessMap,Ot=et&&!!y.sheenColorMap,At=et&&!!y.sheenRoughnessMap,Qt=!!y.specularMap,Xt=!!y.specularColorMap,_e=!!y.specularIntensityMap,B=Ct&&!!y.transmissionMap,gt=Ct&&!!y.thicknessMap,Q=!!y.gradientMap,it=!!y.alphaMap,yt=y.alphaTest>0,Mt=!!y.alphaHash,Vt=!!y.extensions;let Re=Ki;y.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Re=s.toneMapping);const Ye={shaderID:rt,shaderType:y.type,shaderName:y.name,vertexShader:jt,fragmentShader:tt,defines:y.defines,customVertexShaderID:ct,customFragmentShaderID:St,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Yt,batchingColor:Yt&&L._colorsTexture!==null,instancing:kt,instancingColor:kt&&L.instanceColor!==null,instancingMorph:kt&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:dt===null?s.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Io,alphaToCoverage:!!y.alphaToCoverage,map:Ee,matcap:te,envMap:Pe,envMapMode:Pe&&Z.mapping,envMapCubeUVHeight:W,aoMap:O,lightMap:Nn,bumpMap:Kt,normalMap:Jt,displacementMap:f&&It,emissiveMap:Me,normalMapObjectSpace:Jt&&y.normalMapType===sm,normalMapTangentSpace:Jt&&y.normalMapType===kd,metalnessMap:Pt,roughnessMap:D,anisotropy:C,anisotropyMap:_t,clearcoat:X,clearcoatMap:Tt,clearcoatNormalMap:ee,clearcoatRoughnessMap:lt,dispersion:nt,iridescence:ot,iridescenceMap:Et,iridescenceThicknessMap:Nt,sheen:et,sheenColorMap:Ot,sheenRoughnessMap:At,specularMap:Qt,specularColorMap:Xt,specularIntensityMap:_e,transmission:Ct,transmissionMap:B,thicknessMap:gt,gradientMap:Q,opaque:y.transparent===!1&&y.blending===mo&&y.alphaToCoverage===!1,alphaMap:it,alphaTest:yt,alphaHash:Mt,combine:y.combine,mapUv:Ee&&x(y.map.channel),aoMapUv:O&&x(y.aoMap.channel),lightMapUv:Nn&&x(y.lightMap.channel),bumpMapUv:Kt&&x(y.bumpMap.channel),normalMapUv:Jt&&x(y.normalMap.channel),displacementMapUv:It&&x(y.displacementMap.channel),emissiveMapUv:Me&&x(y.emissiveMap.channel),metalnessMapUv:Pt&&x(y.metalnessMap.channel),roughnessMapUv:D&&x(y.roughnessMap.channel),anisotropyMapUv:_t&&x(y.anisotropyMap.channel),clearcoatMapUv:Tt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:At&&x(y.sheenRoughnessMap.channel),specularMapUv:Qt&&x(y.specularMap.channel),specularColorMapUv:Xt&&x(y.specularColorMap.channel),specularIntensityMapUv:_e&&x(y.specularIntensityMap.channel),transmissionMapUv:B&&x(y.transmissionMap.channel),thicknessMapUv:gt&&x(y.thicknessMap.channel),alphaMapUv:it&&x(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Jt||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!V.attributes.uv&&(Ee||it),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:zt,skinning:L.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Ft,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Re,decodeVideoTexture:Ee&&y.map.isVideoTexture===!0&&re.getTransfer(y.map.colorSpace)===pe,decodeVideoTextureEmissive:Me&&y.emissiveMap.isVideoTexture===!0&&re.getTransfer(y.emissiveMap.colorSpace)===pe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dt,flipSided:y.side===Mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Vt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&y.extensions.multiDraw===!0||Yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ye.vertexUv1s=l.has(1),Ye.vertexUv2s=l.has(2),Ye.vertexUv3s=l.has(3),l.clear(),Ye}function g(y){const _=[];if(y.shaderID?_.push(y.shaderID):(_.push(y.customVertexShaderID),_.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)_.push(R),_.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(b(_,y),v(_,y),_.push(s.outputColorSpace)),_.push(y.customProgramCacheKey),_.join()}function b(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapCubeUVHeight),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.morphAttributeCount),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbes),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)}function v(y,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const _=m[y.type];let R;if(_){const U=oi[_];R=Va.clone(U.uniforms)}else R=y.uniforms;return R}function A(y,_){let R;for(let U=0,L=h.length;U<L;U++){const z=h[U];if(z.cacheKey===_){R=z,++R.usedTimes;break}}return R===void 0&&(R=new Iv(s,_,y,o),h.push(R)),R}function E(y){if(--y.usedTimes===0){const _=h.indexOf(y);h[_]=h[h.length-1],h.pop(),y.destroy()}}function T(y){c.remove(y)}function S(){c.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:M,acquireProgram:A,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:S}}function zv(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,c){s.get(r)[a]=c}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function Fv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Yf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Zf(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(u,f,d,m,x,p){let g=s[t];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:x,group:p},s[t]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=x,g.group=p),t++,g}function a(u,f,d,m,x,p){const g=r(u,f,d,m,x,p);d.transmission>0?n.push(g):d.transparent===!0?i.push(g):e.push(g)}function c(u,f,d,m,x,p){const g=r(u,f,d,m,x,p);d.transmission>0?n.unshift(g):d.transparent===!0?i.unshift(g):e.unshift(g)}function l(u,f){e.length>1&&e.sort(u||Fv),n.length>1&&n.sort(f||Yf),i.length>1&&i.sort(f||Yf)}function h(){for(let u=t,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:c,finish:h,sort:l}}function Ov(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new Zf,s.set(n,[r])):i>=o.length?(r=new Zf,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function Bv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new st};break;case"SpotLight":e={position:new N,direction:new N,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new st,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new st,groundColor:new st};break;case"RectAreaLight":e={color:new st,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function kv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Gv=0;function Hv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Vv(s){const t=new Bv,e=kv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const i=new N,o=new de,r=new de;function a(l){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,m=0,x=0,p=0,g=0,b=0,v=0,M=0,A=0,E=0,T=0;l.sort(Hv);for(let y=0,_=l.length;y<_;y++){const R=l[y],U=R.color,L=R.intensity,z=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=U.r*L,u+=U.g*L,f+=U.b*L;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],L);T++}else if(R.isDirectionalLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,W=e.get(R);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=R.shadow.matrix,b++}n.directional[d]=G,d++}else if(R.isSpotLight){const G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(U).multiplyScalar(L),G.distance=z,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[x]=G;const Z=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,Z.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[x]=Z.matrix,R.castShadow){const W=e.get(R);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=V,M++}x++}else if(R.isRectAreaLight){const G=t.get(R);G.color.copy(U).multiplyScalar(L),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=G,p++}else if(R.isPointLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const Z=R.shadow,W=e.get(R);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=R.shadow.matrix,v++}n.point[m]=G,m++}else if(R.isHemisphereLight){const G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(L),G.groundColor.copy(R.groundColor).multiplyScalar(L),n.hemi[g]=G,g++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const S=n.hash;(S.directionalLength!==d||S.pointLength!==m||S.spotLength!==x||S.rectAreaLength!==p||S.hemiLength!==g||S.numDirectionalShadows!==b||S.numPointShadows!==v||S.numSpotShadows!==M||S.numSpotMaps!==A||S.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,S.directionalLength=d,S.pointLength=m,S.spotLength=x,S.rectAreaLength=p,S.hemiLength=g,S.numDirectionalShadows=b,S.numPointShadows=v,S.numSpotShadows=M,S.numSpotMaps=A,S.numLightProbes=T,n.version=Gv++)}function c(l,h){let u=0,f=0,d=0,m=0,x=0;const p=h.matrixWorldInverse;for(let g=0,b=l.length;g<b;g++){const v=l[g];if(v.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),u++}else if(v.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),r.identity(),o.copy(v.matrixWorld),o.premultiply(p),r.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),m++}else if(v.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:a,setupView:c,state:n}}function $f(s){const t=new Vv(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function Wv(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new $f(s),t.set(i,[a])):o>=r.length?(a=new $f(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qv=`uniform sampler2D shadow_pass;
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
}`;function Yv(s,t,e){let n=new hu;const i=new pt,o=new pt,r=new me,a=new _g({depthPacking:im}),c=new Mg,l={},h=e.maxTextureSize,u={[Ji]:Mn,[Mn]:Ji,[Dt]:Dt},f=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Xv,fragmentShader:qv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Te;m.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new I(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ed;let g=this.type;this.render=function(E,T,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const y=s.getRenderTarget(),_=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Pi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const L=g!==bi&&this.type===bi,z=g===bi&&this.type!==bi;for(let V=0,G=E.length;V<G;V++){const Z=E[V],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const rt=W.getFrameExtents();if(i.multiply(rt),o.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/rt.x),i.x=o.x*rt.x,W.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/rt.y),i.y=o.y*rt.y,W.mapSize.y=o.y)),W.map===null||L===!0||z===!0){const wt=this.type!==bi?{minFilter:Un,magFilter:Un}:{};W.map!==null&&W.map.dispose(),W.map=new Qn(i.x,i.y,wt),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const ft=W.getViewportCount();for(let wt=0;wt<ft;wt++){const Ft=W.getViewport(wt);r.set(o.x*Ft.x,o.y*Ft.y,o.x*Ft.z,o.y*Ft.w),U.viewport(r),W.updateMatrices(Z,wt),n=W.getFrustum(),M(T,S,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===bi&&b(W,S),W.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(y,_,R)};function b(E,T){const S=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Qn(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(T,null,S,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(T,null,S,d,x,null)}function v(E,T,S,y){let _=null;const R=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)_=R;else if(_=S.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=_.uuid,L=T.uuid;let z=l[U];z===void 0&&(z={},l[U]=z);let V=z[L];V===void 0&&(V=_.clone(),z[L]=V,T.addEventListener("dispose",A)),_=V}if(_.visible=T.visible,_.wireframe=T.wireframe,y===bi?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:u[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,S.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const U=s.properties.get(_);U.light=S}return _}function M(E,T,S,y,_){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===bi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);const L=t.update(E),z=E.material;if(Array.isArray(z)){const V=L.groups;for(let G=0,Z=V.length;G<Z;G++){const W=V[G],rt=z[W.materialIndex];if(rt&&rt.visible){const ft=v(E,rt,y,_);E.onBeforeShadow(s,E,T,S,L,ft,W),s.renderBufferDirect(S,null,L,ft,E,W),E.onAfterShadow(s,E,T,S,L,ft,W)}}}else if(z.visible){const V=v(E,z,y,_);E.onBeforeShadow(s,E,T,S,L,V,null),s.renderBufferDirect(S,null,L,V,E,null),E.onAfterShadow(s,E,T,S,L,V,null)}}const U=E.children;for(let L=0,z=U.length;L<z;L++)M(U[L],T,S,y,_)}function A(E){E.target.removeEventListener("dispose",A);for(const S in l){const y=l[S],_=E.target.uuid;_ in y&&(y[_].dispose(),delete y[_])}}}const Zv={[Il]:Ll,[Dl]:zl,[Ul]:Fl,[Eo]:Nl,[Ll]:Il,[zl]:Dl,[Fl]:Ul,[Nl]:Eo};function $v(s,t){function e(){let B=!1;const gt=new me;let Q=null;const it=new me(0,0,0,0);return{setMask:function(yt){Q!==yt&&!B&&(s.colorMask(yt,yt,yt,yt),Q=yt)},setLocked:function(yt){B=yt},setClear:function(yt,Mt,Vt,Re,Ye){Ye===!0&&(yt*=Re,Mt*=Re,Vt*=Re),gt.set(yt,Mt,Vt,Re),it.equals(gt)===!1&&(s.clearColor(yt,Mt,Vt,Re),it.copy(gt))},reset:function(){B=!1,Q=null,it.set(-1,0,0,0)}}}function n(){let B=!1,gt=!1,Q=null,it=null,yt=null;return{setReversed:function(Mt){if(gt!==Mt){const Vt=t.get("EXT_clip_control");gt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const Re=yt;yt=null,this.setClear(Re)}gt=Mt},getReversed:function(){return gt},setTest:function(Mt){Mt?dt(s.DEPTH_TEST):zt(s.DEPTH_TEST)},setMask:function(Mt){Q!==Mt&&!B&&(s.depthMask(Mt),Q=Mt)},setFunc:function(Mt){if(gt&&(Mt=Zv[Mt]),it!==Mt){switch(Mt){case Il:s.depthFunc(s.NEVER);break;case Ll:s.depthFunc(s.ALWAYS);break;case Dl:s.depthFunc(s.LESS);break;case Eo:s.depthFunc(s.LEQUAL);break;case Ul:s.depthFunc(s.EQUAL);break;case Nl:s.depthFunc(s.GEQUAL);break;case zl:s.depthFunc(s.GREATER);break;case Fl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}it=Mt}},setLocked:function(Mt){B=Mt},setClear:function(Mt){yt!==Mt&&(gt&&(Mt=1-Mt),s.clearDepth(Mt),yt=Mt)},reset:function(){B=!1,Q=null,it=null,yt=null,gt=!1}}}function i(){let B=!1,gt=null,Q=null,it=null,yt=null,Mt=null,Vt=null,Re=null,Ye=null;return{setTest:function(fe){B||(fe?dt(s.STENCIL_TEST):zt(s.STENCIL_TEST))},setMask:function(fe){gt!==fe&&!B&&(s.stencilMask(fe),gt=fe)},setFunc:function(fe,qn,_i){(Q!==fe||it!==qn||yt!==_i)&&(s.stencilFunc(fe,qn,_i),Q=fe,it=qn,yt=_i)},setOp:function(fe,qn,_i){(Mt!==fe||Vt!==qn||Re!==_i)&&(s.stencilOp(fe,qn,_i),Mt=fe,Vt=qn,Re=_i)},setLocked:function(fe){B=fe},setClear:function(fe){Ye!==fe&&(s.clearStencil(fe),Ye=fe)},reset:function(){B=!1,gt=null,Q=null,it=null,yt=null,Mt=null,Vt=null,Re=null,Ye=null}}}const o=new e,r=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],m=null,x=!1,p=null,g=null,b=null,v=null,M=null,A=null,E=null,T=new st(0,0,0),S=0,y=!1,_=null,R=null,U=null,L=null,z=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Z=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=Z>=2);let rt=null,ft={};const wt=s.getParameter(s.SCISSOR_BOX),Ft=s.getParameter(s.VIEWPORT),jt=new me().fromArray(wt),tt=new me().fromArray(Ft);function ct(B,gt,Q,it){const yt=new Uint8Array(4),Mt=s.createTexture();s.bindTexture(B,Mt),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<Q;Vt++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(gt,0,s.RGBA,1,1,it,0,s.RGBA,s.UNSIGNED_BYTE,yt):s.texImage2D(gt+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,yt);return Mt}const St={};St[s.TEXTURE_2D]=ct(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),dt(s.DEPTH_TEST),r.setFunc(Eo),Kt(!1),Jt(Bu),dt(s.CULL_FACE),O(Pi);function dt(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function zt(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function kt(B,gt){return u[B]!==gt?(s.bindFramebuffer(B,gt),u[B]=gt,B===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=gt),B===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=gt),!0):!1}function Yt(B,gt){let Q=d,it=!1;if(B){Q=f.get(gt),Q===void 0&&(Q=[],f.set(gt,Q));const yt=B.textures;if(Q.length!==yt.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let Mt=0,Vt=yt.length;Mt<Vt;Mt++)Q[Mt]=s.COLOR_ATTACHMENT0+Mt;Q.length=yt.length,it=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,it=!0);it&&s.drawBuffers(Q)}function Ee(B){return m!==B?(s.useProgram(B),m=B,!0):!1}const te={[Ms]:s.FUNC_ADD,[P0]:s.FUNC_SUBTRACT,[I0]:s.FUNC_REVERSE_SUBTRACT};te[L0]=s.MIN,te[D0]=s.MAX;const Pe={[U0]:s.ZERO,[N0]:s.ONE,[z0]:s.SRC_COLOR,[Cl]:s.SRC_ALPHA,[H0]:s.SRC_ALPHA_SATURATE,[k0]:s.DST_COLOR,[O0]:s.DST_ALPHA,[F0]:s.ONE_MINUS_SRC_COLOR,[Pl]:s.ONE_MINUS_SRC_ALPHA,[G0]:s.ONE_MINUS_DST_COLOR,[B0]:s.ONE_MINUS_DST_ALPHA,[V0]:s.CONSTANT_COLOR,[W0]:s.ONE_MINUS_CONSTANT_COLOR,[X0]:s.CONSTANT_ALPHA,[q0]:s.ONE_MINUS_CONSTANT_ALPHA};function O(B,gt,Q,it,yt,Mt,Vt,Re,Ye,fe){if(B===Pi){x===!0&&(zt(s.BLEND),x=!1);return}if(x===!1&&(dt(s.BLEND),x=!0),B!==C0){if(B!==p||fe!==y){if((g!==Ms||M!==Ms)&&(s.blendEquation(s.FUNC_ADD),g=Ms,M=Ms),fe)switch(B){case mo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ue:s.blendFunc(s.ONE,s.ONE);break;case ku:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case mo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ue:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ku:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}b=null,v=null,A=null,E=null,T.set(0,0,0),S=0,p=B,y=fe}return}yt=yt||gt,Mt=Mt||Q,Vt=Vt||it,(gt!==g||yt!==M)&&(s.blendEquationSeparate(te[gt],te[yt]),g=gt,M=yt),(Q!==b||it!==v||Mt!==A||Vt!==E)&&(s.blendFuncSeparate(Pe[Q],Pe[it],Pe[Mt],Pe[Vt]),b=Q,v=it,A=Mt,E=Vt),(Re.equals(T)===!1||Ye!==S)&&(s.blendColor(Re.r,Re.g,Re.b,Ye),T.copy(Re),S=Ye),p=B,y=!1}function Nn(B,gt){B.side===Dt?zt(s.CULL_FACE):dt(s.CULL_FACE);let Q=B.side===Mn;gt&&(Q=!Q),Kt(Q),B.blending===mo&&B.transparent===!1?O(Pi):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),o.setMask(B.colorWrite);const it=B.stencilWrite;a.setTest(it),it&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Me(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?dt(s.SAMPLE_ALPHA_TO_COVERAGE):zt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(B){_!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),_=B)}function Jt(B){B!==A0?(dt(s.CULL_FACE),B!==R&&(B===Bu?s.cullFace(s.BACK):B===R0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):zt(s.CULL_FACE),R=B}function It(B){B!==U&&(G&&s.lineWidth(B),U=B)}function Me(B,gt,Q){B?(dt(s.POLYGON_OFFSET_FILL),(L!==gt||z!==Q)&&(s.polygonOffset(gt,Q),L=gt,z=Q)):zt(s.POLYGON_OFFSET_FILL)}function Pt(B){B?dt(s.SCISSOR_TEST):zt(s.SCISSOR_TEST)}function D(B){B===void 0&&(B=s.TEXTURE0+V-1),rt!==B&&(s.activeTexture(B),rt=B)}function C(B,gt,Q){Q===void 0&&(rt===null?Q=s.TEXTURE0+V-1:Q=rt);let it=ft[Q];it===void 0&&(it={type:void 0,texture:void 0},ft[Q]=it),(it.type!==B||it.texture!==gt)&&(rt!==Q&&(s.activeTexture(Q),rt=Q),s.bindTexture(B,gt||St[B]),it.type=B,it.texture=gt)}function X(){const B=ft[rt];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function nt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _t(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function lt(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Et(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Nt(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ot(B){jt.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),jt.copy(B))}function At(B){tt.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),tt.copy(B))}function Qt(B,gt){let Q=l.get(gt);Q===void 0&&(Q=new WeakMap,l.set(gt,Q));let it=Q.get(B);it===void 0&&(it=s.getUniformBlockIndex(gt,B.name),Q.set(B,it))}function Xt(B,gt){const it=l.get(gt).get(B);c.get(gt)!==it&&(s.uniformBlockBinding(gt,it,B.__bindingPointIndex),c.set(gt,it))}function _e(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},rt=null,ft={},u={},f=new WeakMap,d=[],m=null,x=!1,p=null,g=null,b=null,v=null,M=null,A=null,E=null,T=new st(0,0,0),S=0,y=!1,_=null,R=null,U=null,L=null,z=null,jt.set(0,0,s.canvas.width,s.canvas.height),tt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:dt,disable:zt,bindFramebuffer:kt,drawBuffers:Yt,useProgram:Ee,setBlending:O,setMaterial:Nn,setFlipSided:Kt,setCullFace:Jt,setLineWidth:It,setPolygonOffset:Me,setScissorTest:Pt,activeTexture:D,bindTexture:C,unbindTexture:X,compressedTexImage2D:nt,compressedTexImage3D:ot,texImage2D:Et,texImage3D:Nt,updateUBOMapping:Qt,uniformBlockBinding:Xt,texStorage2D:ee,texStorage3D:lt,texSubImage2D:et,texSubImage3D:Ct,compressedTexSubImage2D:_t,compressedTexSubImage3D:Tt,scissor:Ot,viewport:At,reset:_e}}function jv(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,C){return d?new OffscreenCanvas(D,C):Ha("canvas")}function x(D,C,X){let nt=1;const ot=Pt(D);if((ot.width>X||ot.height>X)&&(nt=X/Math.max(ot.width,ot.height)),nt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const et=Math.floor(nt*ot.width),Ct=Math.floor(nt*ot.height);u===void 0&&(u=m(et,Ct));const _t=C?m(et,Ct):u;return _t.width=et,_t.height=Ct,_t.getContext("2d").drawImage(D,0,0,et,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+et+"x"+Ct+")."),_t}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),D;return D}function p(D){return D.generateMipmaps}function g(D){s.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(D,C,X,nt,ot=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let et=C;if(C===s.RED&&(X===s.FLOAT&&(et=s.R32F),X===s.HALF_FLOAT&&(et=s.R16F),X===s.UNSIGNED_BYTE&&(et=s.R8)),C===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.R8UI),X===s.UNSIGNED_SHORT&&(et=s.R16UI),X===s.UNSIGNED_INT&&(et=s.R32UI),X===s.BYTE&&(et=s.R8I),X===s.SHORT&&(et=s.R16I),X===s.INT&&(et=s.R32I)),C===s.RG&&(X===s.FLOAT&&(et=s.RG32F),X===s.HALF_FLOAT&&(et=s.RG16F),X===s.UNSIGNED_BYTE&&(et=s.RG8)),C===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.RG8UI),X===s.UNSIGNED_SHORT&&(et=s.RG16UI),X===s.UNSIGNED_INT&&(et=s.RG32UI),X===s.BYTE&&(et=s.RG8I),X===s.SHORT&&(et=s.RG16I),X===s.INT&&(et=s.RG32I)),C===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.RGB8UI),X===s.UNSIGNED_SHORT&&(et=s.RGB16UI),X===s.UNSIGNED_INT&&(et=s.RGB32UI),X===s.BYTE&&(et=s.RGB8I),X===s.SHORT&&(et=s.RGB16I),X===s.INT&&(et=s.RGB32I)),C===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(et=s.RGBA16UI),X===s.UNSIGNED_INT&&(et=s.RGBA32UI),X===s.BYTE&&(et=s.RGBA8I),X===s.SHORT&&(et=s.RGBA16I),X===s.INT&&(et=s.RGBA32I)),C===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(et=s.RGB9_E5),C===s.RGBA){const Ct=ot?ka:re.getTransfer(nt);X===s.FLOAT&&(et=s.RGBA32F),X===s.HALF_FLOAT&&(et=s.RGBA16F),X===s.UNSIGNED_BYTE&&(et=Ct===pe?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function M(D,C){let X;return D?C===null||C===Ps||C===Co?X=s.DEPTH24_STENCIL8:C===fi?X=s.DEPTH32F_STENCIL8:C===vr&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Ps||C===Co?X=s.DEPTH_COMPONENT24:C===fi?X=s.DEPTH_COMPONENT32F:C===vr&&(X=s.DEPTH_COMPONENT16),X}function A(D,C){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==Un&&D.minFilter!==ui?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function E(D){const C=D.target;C.removeEventListener("dispose",E),S(C),C.isVideoTexture&&h.delete(C)}function T(D){const C=D.target;C.removeEventListener("dispose",T),_(C)}function S(D){const C=n.get(D);if(C.__webglInit===void 0)return;const X=D.source,nt=f.get(X);if(nt){const ot=nt[C.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&y(D),Object.keys(nt).length===0&&f.delete(X)}n.remove(D)}function y(D){const C=n.get(D);s.deleteTexture(C.__webglTexture);const X=D.source,nt=f.get(X);delete nt[C.__cacheKey],r.memory.textures--}function _(D){const C=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(C.__webglFramebuffer[nt]))for(let ot=0;ot<C.__webglFramebuffer[nt].length;ot++)s.deleteFramebuffer(C.__webglFramebuffer[nt][ot]);else s.deleteFramebuffer(C.__webglFramebuffer[nt]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[nt])}else{if(Array.isArray(C.__webglFramebuffer))for(let nt=0;nt<C.__webglFramebuffer.length;nt++)s.deleteFramebuffer(C.__webglFramebuffer[nt]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let nt=0;nt<C.__webglColorRenderbuffer.length;nt++)C.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[nt]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const X=D.textures;for(let nt=0,ot=X.length;nt<ot;nt++){const et=n.get(X[nt]);et.__webglTexture&&(s.deleteTexture(et.__webglTexture),r.memory.textures--),n.remove(X[nt])}n.remove(D)}let R=0;function U(){R=0}function L(){const D=R;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),R+=1,D}function z(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function V(D,C){const X=n.get(D);if(D.isVideoTexture&&It(D),D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){const nt=D.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(X,D,C);return}}e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+C)}function G(D,C){const X=n.get(D);if(D.version>0&&X.__version!==D.version){tt(X,D,C);return}e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+C)}function Z(D,C){const X=n.get(D);if(D.version>0&&X.__version!==D.version){tt(X,D,C);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+C)}function W(D,C){const X=n.get(D);if(D.version>0&&X.__version!==D.version){ct(X,D,C);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+C)}const rt={[Ba]:s.REPEAT,[ys]:s.CLAMP_TO_EDGE,[kl]:s.MIRRORED_REPEAT},ft={[Un]:s.NEAREST,[em]:s.NEAREST_MIPMAP_NEAREST,[Or]:s.NEAREST_MIPMAP_LINEAR,[ui]:s.LINEAR,[vc]:s.LINEAR_MIPMAP_NEAREST,[ws]:s.LINEAR_MIPMAP_LINEAR},wt={[om]:s.NEVER,[um]:s.ALWAYS,[rm]:s.LESS,[Gd]:s.LEQUAL,[am]:s.EQUAL,[hm]:s.GEQUAL,[cm]:s.GREATER,[lm]:s.NOTEQUAL};function Ft(D,C){if(C.type===fi&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===ui||C.magFilter===vc||C.magFilter===Or||C.magFilter===ws||C.minFilter===ui||C.minFilter===vc||C.minFilter===Or||C.minFilter===ws)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,rt[C.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,rt[C.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,rt[C.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ft[C.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ft[C.minFilter]),C.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,wt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Un||C.minFilter!==Or&&C.minFilter!==ws||C.type===fi&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");s.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function jt(D,C){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",E));const nt=C.source;let ot=f.get(nt);ot===void 0&&(ot={},f.set(nt,ot));const et=z(C);if(et!==D.__cacheKey){ot[et]===void 0&&(ot[et]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,X=!0),ot[et].usedTimes++;const Ct=ot[D.__cacheKey];Ct!==void 0&&(ot[D.__cacheKey].usedTimes--,Ct.usedTimes===0&&y(C)),D.__cacheKey=et,D.__webglTexture=ot[et].texture}return X}function tt(D,C,X){let nt=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(nt=s.TEXTURE_3D);const ot=jt(D,C),et=C.source;e.bindTexture(nt,D.__webglTexture,s.TEXTURE0+X);const Ct=n.get(et);if(et.version!==Ct.__version||ot===!0){e.activeTexture(s.TEXTURE0+X);const _t=re.getPrimaries(re.workingColorSpace),Tt=C.colorSpace===qi?null:re.getPrimaries(C.colorSpace),ee=C.colorSpace===qi||_t===Tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let lt=x(C.image,!1,i.maxTextureSize);lt=Me(C,lt);const Et=o.convert(C.format,C.colorSpace),Nt=o.convert(C.type);let Ot=v(C.internalFormat,Et,Nt,C.colorSpace,C.isVideoTexture);Ft(nt,C);let At;const Qt=C.mipmaps,Xt=C.isVideoTexture!==!0,_e=Ct.__version===void 0||ot===!0,B=et.dataReady,gt=A(C,lt);if(C.isDepthTexture)Ot=M(C.format===Po,C.type),_e&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,Ot,lt.width,lt.height):e.texImage2D(s.TEXTURE_2D,0,Ot,lt.width,lt.height,0,Et,Nt,null));else if(C.isDataTexture)if(Qt.length>0){Xt&&_e&&e.texStorage2D(s.TEXTURE_2D,gt,Ot,Qt[0].width,Qt[0].height);for(let Q=0,it=Qt.length;Q<it;Q++)At=Qt[Q],Xt?B&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,At.width,At.height,Et,Nt,At.data):e.texImage2D(s.TEXTURE_2D,Q,Ot,At.width,At.height,0,Et,Nt,At.data);C.generateMipmaps=!1}else Xt?(_e&&e.texStorage2D(s.TEXTURE_2D,gt,Ot,lt.width,lt.height),B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt.width,lt.height,Et,Nt,lt.data)):e.texImage2D(s.TEXTURE_2D,0,Ot,lt.width,lt.height,0,Et,Nt,lt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Xt&&_e&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Ot,Qt[0].width,Qt[0].height,lt.depth);for(let Q=0,it=Qt.length;Q<it;Q++)if(At=Qt[Q],C.format!==Jn)if(Et!==null)if(Xt){if(B)if(C.layerUpdates.size>0){const yt=Tf(At.width,At.height,C.format,C.type);for(const Mt of C.layerUpdates){const Vt=At.data.subarray(Mt*yt/At.data.BYTES_PER_ELEMENT,(Mt+1)*yt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,Mt,At.width,At.height,1,Et,Vt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,At.width,At.height,lt.depth,Et,At.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,Ot,At.width,At.height,lt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?B&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,At.width,At.height,lt.depth,Et,Nt,At.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,Ot,At.width,At.height,lt.depth,0,Et,Nt,At.data)}else{Xt&&_e&&e.texStorage2D(s.TEXTURE_2D,gt,Ot,Qt[0].width,Qt[0].height);for(let Q=0,it=Qt.length;Q<it;Q++)At=Qt[Q],C.format!==Jn?Et!==null?Xt?B&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,Ot,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?B&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,At.width,At.height,Et,Nt,At.data):e.texImage2D(s.TEXTURE_2D,Q,Ot,At.width,At.height,0,Et,Nt,At.data)}else if(C.isDataArrayTexture)if(Xt){if(_e&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Ot,lt.width,lt.height,lt.depth),B)if(C.layerUpdates.size>0){const Q=Tf(lt.width,lt.height,C.format,C.type);for(const it of C.layerUpdates){const yt=lt.data.subarray(it*Q/lt.data.BYTES_PER_ELEMENT,(it+1)*Q/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,lt.width,lt.height,1,Et,Nt,yt)}C.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Et,Nt,lt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,lt.width,lt.height,lt.depth,0,Et,Nt,lt.data);else if(C.isData3DTexture)Xt?(_e&&e.texStorage3D(s.TEXTURE_3D,gt,Ot,lt.width,lt.height,lt.depth),B&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Et,Nt,lt.data)):e.texImage3D(s.TEXTURE_3D,0,Ot,lt.width,lt.height,lt.depth,0,Et,Nt,lt.data);else if(C.isFramebufferTexture){if(_e)if(Xt)e.texStorage2D(s.TEXTURE_2D,gt,Ot,lt.width,lt.height);else{let Q=lt.width,it=lt.height;for(let yt=0;yt<gt;yt++)e.texImage2D(s.TEXTURE_2D,yt,Ot,Q,it,0,Et,Nt,null),Q>>=1,it>>=1}}else if(Qt.length>0){if(Xt&&_e){const Q=Pt(Qt[0]);e.texStorage2D(s.TEXTURE_2D,gt,Ot,Q.width,Q.height)}for(let Q=0,it=Qt.length;Q<it;Q++)At=Qt[Q],Xt?B&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,Et,Nt,At):e.texImage2D(s.TEXTURE_2D,Q,Ot,Et,Nt,At);C.generateMipmaps=!1}else if(Xt){if(_e){const Q=Pt(lt);e.texStorage2D(s.TEXTURE_2D,gt,Ot,Q.width,Q.height)}B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Et,Nt,lt)}else e.texImage2D(s.TEXTURE_2D,0,Ot,Et,Nt,lt);p(C)&&g(nt),Ct.__version=et.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function ct(D,C,X){if(C.image.length!==6)return;const nt=jt(D,C),ot=C.source;e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+X);const et=n.get(ot);if(ot.version!==et.__version||nt===!0){e.activeTexture(s.TEXTURE0+X);const Ct=re.getPrimaries(re.workingColorSpace),_t=C.colorSpace===qi?null:re.getPrimaries(C.colorSpace),Tt=C.colorSpace===qi||Ct===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const ee=C.isCompressedTexture||C.image[0].isCompressedTexture,lt=C.image[0]&&C.image[0].isDataTexture,Et=[];for(let it=0;it<6;it++)!ee&&!lt?Et[it]=x(C.image[it],!0,i.maxCubemapSize):Et[it]=lt?C.image[it].image:C.image[it],Et[it]=Me(C,Et[it]);const Nt=Et[0],Ot=o.convert(C.format,C.colorSpace),At=o.convert(C.type),Qt=v(C.internalFormat,Ot,At,C.colorSpace),Xt=C.isVideoTexture!==!0,_e=et.__version===void 0||nt===!0,B=ot.dataReady;let gt=A(C,Nt);Ft(s.TEXTURE_CUBE_MAP,C);let Q;if(ee){Xt&&_e&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Qt,Nt.width,Nt.height);for(let it=0;it<6;it++){Q=Et[it].mipmaps;for(let yt=0;yt<Q.length;yt++){const Mt=Q[yt];C.format!==Jn?Ot!==null?Xt?B&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,0,0,Mt.width,Mt.height,Ot,Mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,Qt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,0,0,Mt.width,Mt.height,Ot,At,Mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,Qt,Mt.width,Mt.height,0,Ot,At,Mt.data)}}}else{if(Q=C.mipmaps,Xt&&_e){Q.length>0&&gt++;const it=Pt(Et[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Qt,it.width,it.height)}for(let it=0;it<6;it++)if(lt){Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Et[it].width,Et[it].height,Ot,At,Et[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Qt,Et[it].width,Et[it].height,0,Ot,At,Et[it].data);for(let yt=0;yt<Q.length;yt++){const Vt=Q[yt].image[it].image;Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,0,0,Vt.width,Vt.height,Ot,At,Vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,Qt,Vt.width,Vt.height,0,Ot,At,Vt.data)}}else{Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ot,At,Et[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Qt,Ot,At,Et[it]);for(let yt=0;yt<Q.length;yt++){const Mt=Q[yt];Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,0,0,Ot,At,Mt.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,Qt,Ot,At,Mt.image[it])}}}p(C)&&g(s.TEXTURE_CUBE_MAP),et.__version=ot.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function St(D,C,X,nt,ot,et){const Ct=o.convert(X.format,X.colorSpace),_t=o.convert(X.type),Tt=v(X.internalFormat,Ct,_t,X.colorSpace),ee=n.get(C),lt=n.get(X);if(lt.__renderTarget=C,!ee.__hasExternalTextures){const Et=Math.max(1,C.width>>et),Nt=Math.max(1,C.height>>et);ot===s.TEXTURE_3D||ot===s.TEXTURE_2D_ARRAY?e.texImage3D(ot,et,Tt,Et,Nt,C.depth,0,Ct,_t,null):e.texImage2D(ot,et,Tt,Et,Nt,0,Ct,_t,null)}e.bindFramebuffer(s.FRAMEBUFFER,D),Jt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,ot,lt.__webglTexture,0,Kt(C)):(ot===s.TEXTURE_2D||ot>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,ot,lt.__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(D,C,X){if(s.bindRenderbuffer(s.RENDERBUFFER,D),C.depthBuffer){const nt=C.depthTexture,ot=nt&&nt.isDepthTexture?nt.type:null,et=M(C.stencilBuffer,ot),Ct=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=Kt(C);Jt(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t,et,C.width,C.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,et,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,et,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,D)}else{const nt=C.textures;for(let ot=0;ot<nt.length;ot++){const et=nt[ot],Ct=o.convert(et.format,et.colorSpace),_t=o.convert(et.type),Tt=v(et.internalFormat,Ct,_t,et.colorSpace),ee=Kt(C);X&&Jt(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,Tt,C.width,C.height):Jt(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,Tt,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Tt,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function zt(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=n.get(C.depthTexture);nt.__renderTarget=C,(!nt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),V(C.depthTexture,0);const ot=nt.__webglTexture,et=Kt(C);if(C.depthTexture.format===go)Jt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0);else if(C.depthTexture.format===Po)Jt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function kt(D){const C=n.get(D),X=D.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==D.depthTexture){const nt=D.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),nt){const ot=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,nt.removeEventListener("dispose",ot)};nt.addEventListener("dispose",ot),C.__depthDisposeCallback=ot}C.__boundDepthTexture=nt}if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");zt(C.__webglFramebuffer,D)}else if(X){C.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[nt]),C.__webglDepthbuffer[nt]===void 0)C.__webglDepthbuffer[nt]=s.createRenderbuffer(),dt(C.__webglDepthbuffer[nt],D,!1);else{const ot=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=C.__webglDepthbuffer[nt];s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,et)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),dt(C.__webglDepthbuffer,D,!1);else{const nt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,ot)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(D,C,X){const nt=n.get(D);C!==void 0&&St(nt.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&kt(D)}function Ee(D){const C=D.texture,X=n.get(D),nt=n.get(C);D.addEventListener("dispose",T);const ot=D.textures,et=D.isWebGLCubeRenderTarget===!0,Ct=ot.length>1;if(Ct||(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=C.version,r.memory.textures++),et){X.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer[_t]=[];for(let Tt=0;Tt<C.mipmaps.length;Tt++)X.__webglFramebuffer[_t][Tt]=s.createFramebuffer()}else X.__webglFramebuffer[_t]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer=[];for(let _t=0;_t<C.mipmaps.length;_t++)X.__webglFramebuffer[_t]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let _t=0,Tt=ot.length;_t<Tt;_t++){const ee=n.get(ot[_t]);ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture(),r.memory.textures++)}if(D.samples>0&&Jt(D)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let _t=0;_t<ot.length;_t++){const Tt=ot[_t];X.__webglColorRenderbuffer[_t]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[_t]);const ee=o.convert(Tt.format,Tt.colorSpace),lt=o.convert(Tt.type),Et=v(Tt.internalFormat,ee,lt,Tt.colorSpace,D.isXRRenderTarget===!0),Nt=Kt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,Et,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,X.__webglColorRenderbuffer[_t])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),dt(X.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(et){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),Ft(s.TEXTURE_CUBE_MAP,C);for(let _t=0;_t<6;_t++)if(C.mipmaps&&C.mipmaps.length>0)for(let Tt=0;Tt<C.mipmaps.length;Tt++)St(X.__webglFramebuffer[_t][Tt],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt);else St(X.__webglFramebuffer[_t],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);p(C)&&g(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let _t=0,Tt=ot.length;_t<Tt;_t++){const ee=ot[_t],lt=n.get(ee);e.bindTexture(s.TEXTURE_2D,lt.__webglTexture),Ft(s.TEXTURE_2D,ee),St(X.__webglFramebuffer,D,ee,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,0),p(ee)&&g(s.TEXTURE_2D)}e.unbindTexture()}else{let _t=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(_t=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(_t,nt.__webglTexture),Ft(_t,C),C.mipmaps&&C.mipmaps.length>0)for(let Tt=0;Tt<C.mipmaps.length;Tt++)St(X.__webglFramebuffer[Tt],D,C,s.COLOR_ATTACHMENT0,_t,Tt);else St(X.__webglFramebuffer,D,C,s.COLOR_ATTACHMENT0,_t,0);p(C)&&g(_t),e.unbindTexture()}D.depthBuffer&&kt(D)}function te(D){const C=D.textures;for(let X=0,nt=C.length;X<nt;X++){const ot=C[X];if(p(ot)){const et=b(D),Ct=n.get(ot).__webglTexture;e.bindTexture(et,Ct),g(et),e.unbindTexture()}}}const Pe=[],O=[];function Nn(D){if(D.samples>0){if(Jt(D)===!1){const C=D.textures,X=D.width,nt=D.height;let ot=s.COLOR_BUFFER_BIT;const et=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=n.get(D),_t=C.length>1;if(_t)for(let Tt=0;Tt<C.length;Tt++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Tt=0;Tt<C.length;Tt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ot|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ot|=s.STENCIL_BUFFER_BIT)),_t){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[Tt]);const ee=n.get(C[Tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,X,nt,0,0,X,nt,ot,s.NEAREST),c===!0&&(Pe.length=0,O.length=0,Pe.push(s.COLOR_ATTACHMENT0+Tt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Pe.push(et),O.push(et),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Pe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_t)for(let Tt=0;Tt<C.length;Tt++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[Tt]);const ee=n.get(C[Tt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,ee,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const C=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function Kt(D){return Math.min(i.maxSamples,D.samples)}function Jt(D){const C=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function It(D){const C=r.render.frame;h.get(D)!==C&&(h.set(D,C),D.update())}function Me(D,C){const X=D.colorSpace,nt=D.format,ot=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==Io&&X!==qi&&(re.getTransfer(X)===pe?(nt!==Jn||ot!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),C}function Pt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=Yt,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Nn,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Jt}function Kv(s,t){function e(n,i=qi){let o;const r=re.getTransfer(i);if(n===Ui)return s.UNSIGNED_BYTE;if(n===nu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===iu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Dd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Id)return s.BYTE;if(n===Ld)return s.SHORT;if(n===vr)return s.UNSIGNED_SHORT;if(n===eu)return s.INT;if(n===Ps)return s.UNSIGNED_INT;if(n===fi)return s.FLOAT;if(n===Ii)return s.HALF_FLOAT;if(n===Ud)return s.ALPHA;if(n===Nd)return s.RGB;if(n===Jn)return s.RGBA;if(n===zd)return s.LUMINANCE;if(n===Fd)return s.LUMINANCE_ALPHA;if(n===go)return s.DEPTH_COMPONENT;if(n===Po)return s.DEPTH_STENCIL;if(n===su)return s.RED;if(n===ou)return s.RED_INTEGER;if(n===Od)return s.RG;if(n===ru)return s.RG_INTEGER;if(n===au)return s.RGBA_INTEGER;if(n===Ta||n===Ea||n===Aa||n===Ra)if(r===pe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ta)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Aa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ta)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ea)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Aa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ra)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gl||n===Hl||n===Vl||n===Wl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Gl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xl||n===ql||n===Yl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Xl||n===ql)return r===pe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Yl)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zl||n===$l||n===jl||n===Kl||n===Jl||n===Ql||n===th||n===eh||n===nh||n===ih||n===sh||n===oh||n===rh||n===ah)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Zl)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$l)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jl)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kl)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jl)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ql)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===th)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eh)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nh)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ih)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sh)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oh)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rh)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ah)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ca||n===ch||n===lh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Ca)return r===pe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ch)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bd||n===hh||n===uh||n===fh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Ca)return o.COMPRESSED_RED_RGTC1_EXT;if(n===hh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Co?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Jv={type:"move"};class el{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),g=this._getHandJoint(l,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jv)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ty=`
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

}`;class ey{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Qe,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Sn({vertexShader:Qv,fragmentShader:ty,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new I(new xe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ny extends Fo{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null;const x=new ey,p=e.getContextAttributes();let g=null,b=null;const v=[],M=[],A=new pt;let E=null;const T=new Pn;T.viewport=new me;const S=new Pn;S.viewport=new me;const y=[T,S],_=new Sg;let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ct=v[tt];return ct===void 0&&(ct=new el,v[tt]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(tt){let ct=v[tt];return ct===void 0&&(ct=new el,v[tt]=ct),ct.getGripSpace()},this.getHand=function(tt){let ct=v[tt];return ct===void 0&&(ct=new el,v[tt]=ct),ct.getHandSpace()};function L(tt){const ct=M.indexOf(tt.inputSource);if(ct===-1)return;const St=v[ct];St!==void 0&&(St.update(tt.inputSource,tt.frame,l||r),St.dispatchEvent({type:tt.type,data:tt.inputSource}))}function z(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",V);for(let tt=0;tt<v.length;tt++){const ct=M[tt];ct!==null&&(M[tt]=null,v[tt].disconnect(ct))}R=null,U=null,x.reset(),t.setRenderTarget(g),d=null,f=null,u=null,i=null,b=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){o=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(tt){l=tt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(tt){if(i=tt,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",z),i.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let St=null,dt=null,zt=null;p.depth&&(zt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=p.stencil?Po:go,dt=p.stencil?Co:Ps);const kt={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:o};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(kt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Qn(f.textureWidth,f.textureHeight,{format:Jn,type:Ui,depthTexture:new tp(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const St={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(i,e,St),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Qn(d.framebufferWidth,d.framebufferHeight,{format:Jn,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),jt.setContext(i),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(tt){for(let ct=0;ct<tt.removed.length;ct++){const St=tt.removed[ct],dt=M.indexOf(St);dt>=0&&(M[dt]=null,v[dt].disconnect(St))}for(let ct=0;ct<tt.added.length;ct++){const St=tt.added[ct];let dt=M.indexOf(St);if(dt===-1){for(let kt=0;kt<v.length;kt++)if(kt>=M.length){M.push(St),dt=kt;break}else if(M[kt]===null){M[kt]=St,dt=kt;break}if(dt===-1)break}const zt=v[dt];zt&&zt.connect(St)}}const G=new N,Z=new N;function W(tt,ct,St){G.setFromMatrixPosition(ct.matrixWorld),Z.setFromMatrixPosition(St.matrixWorld);const dt=G.distanceTo(Z),zt=ct.projectionMatrix.elements,kt=St.projectionMatrix.elements,Yt=zt[14]/(zt[10]-1),Ee=zt[14]/(zt[10]+1),te=(zt[9]+1)/zt[5],Pe=(zt[9]-1)/zt[5],O=(zt[8]-1)/zt[0],Nn=(kt[8]+1)/kt[0],Kt=Yt*O,Jt=Yt*Nn,It=dt/(-O+Nn),Me=It*-O;if(ct.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Me),tt.translateZ(It),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),zt[10]===-1)tt.projectionMatrix.copy(ct.projectionMatrix),tt.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Pt=Yt+It,D=Ee+It,C=Kt-Me,X=Jt+(dt-Me),nt=te*Ee/D*Pt,ot=Pe*Ee/D*Pt;tt.projectionMatrix.makePerspective(C,X,nt,ot,Pt,D),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function rt(tt,ct){ct===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ct.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(i===null)return;let ct=tt.near,St=tt.far;x.texture!==null&&(x.depthNear>0&&(ct=x.depthNear),x.depthFar>0&&(St=x.depthFar)),_.near=S.near=T.near=ct,_.far=S.far=T.far=St,(R!==_.near||U!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),R=_.near,U=_.far),T.layers.mask=tt.layers.mask|2,S.layers.mask=tt.layers.mask|4,_.layers.mask=T.layers.mask|S.layers.mask;const dt=tt.parent,zt=_.cameras;rt(_,dt);for(let kt=0;kt<zt.length;kt++)rt(zt[kt],dt);zt.length===2?W(_,T,S):_.projectionMatrix.copy(T.projectionMatrix),ft(tt,_,dt)};function ft(tt,ct,St){St===null?tt.matrix.copy(ct.matrixWorld):(tt.matrix.copy(St.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ct.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ct.projectionMatrix),tt.projectionMatrixInverse.copy(ct.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=dh*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(tt){c=tt,f!==null&&(f.fixedFoveation=tt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=tt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let wt=null;function Ft(tt,ct){if(h=ct.getViewerPose(l||r),m=ct,h!==null){const St=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let dt=!1;St.length!==_.cameras.length&&(_.cameras.length=0,dt=!0);for(let kt=0;kt<St.length;kt++){const Yt=St[kt];let Ee=null;if(d!==null)Ee=d.getViewport(Yt);else{const Pe=u.getViewSubImage(f,Yt);Ee=Pe.viewport,kt===0&&(t.setRenderTargetTextures(b,Pe.colorTexture,f.ignoreDepthValues?void 0:Pe.depthStencilTexture),t.setRenderTarget(b))}let te=y[kt];te===void 0&&(te=new Pn,te.layers.enable(kt),te.viewport=new me,y[kt]=te),te.matrix.fromArray(Yt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Yt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),kt===0&&(_.matrix.copy(te.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),dt===!0&&_.cameras.push(te)}const zt=i.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const kt=u.getDepthInformation(St[0]);kt&&kt.isValid&&kt.texture&&x.init(t,kt,i.renderState)}}for(let St=0;St<v.length;St++){const dt=M[St],zt=v[St];dt!==null&&zt!==void 0&&zt.update(dt,ct,l||r)}wt&&wt(tt,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),m=null}const jt=new up;jt.setAnimationLoop(Ft),this.setAnimationLoop=function(tt){wt=tt},this.dispose=function(){}}}const cs=new pi,iy=new de;function sy(s,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,$d(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,b,v,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(p,g):g.isMeshToonMaterial?(o(p,g),u(p,g)):g.isMeshPhongMaterial?(o(p,g),h(p,g)):g.isMeshStandardMaterial?(o(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,M)):g.isMeshMatcapMaterial?(o(p,g),m(p,g)):g.isMeshDepthMaterial?o(p,g):g.isMeshDistanceMaterial?(o(p,g),x(p,g)):g.isMeshNormalMaterial?o(p,g):g.isLineBasicMaterial?(r(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,b,v):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Mn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Mn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const b=t.get(g),v=b.envMap,M=b.envMapRotation;v&&(p.envMap.value=v,cs.copy(M),cs.x*=-1,cs.y*=-1,cs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),p.envMapRotation.value.setFromMatrix4(iy.makeRotationFromEuler(cs)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function r(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,b,v){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=v*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,b){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Mn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){const b=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function oy(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,v){const M=v.program;n.uniformBlockBinding(b,M)}function l(b,v){let M=i[b.id];M===void 0&&(m(b),M=h(b),i[b.id]=M,b.addEventListener("dispose",p));const A=v.program;n.updateUBOMapping(b,A);const E=t.render.frame;o[b.id]!==E&&(f(b),o[b.id]=E)}function h(b){const v=u();b.__bindingPointIndex=v;const M=s.createBuffer(),A=b.__size,E=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,A,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function u(){for(let b=0;b<a;b++)if(r.indexOf(b)===-1)return r.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const v=i[b.id],M=b.uniforms,A=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let E=0,T=M.length;E<T;E++){const S=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,_=S.length;y<_;y++){const R=S[y];if(d(R,E,y,A)===!0){const U=R.__offset,L=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let V=0;V<L.length;V++){const G=L[V],Z=x(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,U+z,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,z),z+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(b,v,M,A){const E=b.value,T=v+"_"+M;if(A[T]===void 0)return typeof E=="number"||typeof E=="boolean"?A[T]=E:A[T]=E.clone(),!0;{const S=A[T];if(typeof E=="number"||typeof E=="boolean"){if(S!==E)return A[T]=E,!0}else if(S.equals(E)===!1)return S.copy(E),!0}return!1}function m(b){const v=b.uniforms;let M=0;const A=16;for(let T=0,S=v.length;T<S;T++){const y=Array.isArray(v[T])?v[T]:[v[T]];for(let _=0,R=y.length;_<R;_++){const U=y[_],L=Array.isArray(U.value)?U.value:[U.value];for(let z=0,V=L.length;z<V;z++){const G=L[z],Z=x(G),W=M%A,rt=W%Z.boundary,ft=W+rt;M+=rt,ft!==0&&A-ft<Z.storage&&(M+=A-ft),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=Z.storage}}}const E=M%A;return E>0&&(M+=A-E),b.__size=M,b.__cache={},this}function x(b){const v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function p(b){const v=b.target;v.removeEventListener("dispose",p);const M=r.indexOf(v.__bindingPointIndex);r.splice(M,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete o[v.id]}function g(){for(const b in i)s.deleteBuffer(i[b]);r=[],i={},o={}}return{bind:c,update:l,dispose:g}}class ry{constructor(t={}){const{canvas:e=dm(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const m=new Uint32Array(4),x=new Int32Array(4);let p=null,g=null;const b=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this.toneMapping=Ki,this.toneMappingExposure=1;const M=this;let A=!1,E=0,T=0,S=null,y=-1,_=null;const R=new me,U=new me;let L=null;const z=new st(0);let V=0,G=e.width,Z=e.height,W=1,rt=null,ft=null;const wt=new me(0,0,G,Z),Ft=new me(0,0,G,Z);let jt=!1;const tt=new hu;let ct=!1,St=!1;this.transmissionResolutionScale=1;const dt=new de,zt=new de,kt=new N,Yt=new me,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function Pe(){return S===null?W:1}let O=n;function Nn(P,k){return e.getContext(P,k)}try{const P={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tu}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),O===null){const k="webgl2";if(O=Nn(k,P),O===null)throw Nn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Kt,Jt,It,Me,Pt,D,C,X,nt,ot,et,Ct,_t,Tt,ee,lt,Et,Nt,Ot,At,Qt,Xt,_e,B;function gt(){Kt=new mM(O),Kt.init(),Xt=new Kv(O,Kt),Jt=new lM(O,Kt,t,Xt),It=new $v(O,Kt),Jt.reverseDepthBuffer&&f&&It.buffers.depth.setReversed(!0),Me=new _M(O),Pt=new zv,D=new jv(O,Kt,It,Pt,Jt,Xt,Me),C=new uM(M),X=new pM(M),nt=new Tg(O),_e=new aM(O,nt),ot=new gM(O,nt,Me,_e),et=new vM(O,ot,nt,Me),Ot=new MM(O,Jt,D),lt=new hM(Pt),Ct=new Nv(M,C,X,Kt,Jt,_e,lt),_t=new sy(M,Pt),Tt=new Ov,ee=new Wv(Kt),Nt=new rM(M,C,X,It,et,d,c),Et=new Yv(M,et,Jt),B=new oy(O,Me,Jt,It),At=new cM(O,Kt,Me),Qt=new xM(O,Kt,Me),Me.programs=Ct.programs,M.capabilities=Jt,M.extensions=Kt,M.properties=Pt,M.renderLists=Tt,M.shadowMap=Et,M.state=It,M.info=Me}gt();const Q=new ny(M,O);this.xr=Q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const P=Kt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Kt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(P){P!==void 0&&(W=P,this.setSize(G,Z,!1))},this.getSize=function(P){return P.set(G,Z)},this.setSize=function(P,k,q=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=P,Z=k,e.width=Math.floor(P*W),e.height=Math.floor(k*W),q===!0&&(e.style.width=P+"px",e.style.height=k+"px"),this.setViewport(0,0,P,k)},this.getDrawingBufferSize=function(P){return P.set(G*W,Z*W).floor()},this.setDrawingBufferSize=function(P,k,q){G=P,Z=k,W=q,e.width=Math.floor(P*q),e.height=Math.floor(k*q),this.setViewport(0,0,P,k)},this.getCurrentViewport=function(P){return P.copy(R)},this.getViewport=function(P){return P.copy(wt)},this.setViewport=function(P,k,q,$){P.isVector4?wt.set(P.x,P.y,P.z,P.w):wt.set(P,k,q,$),It.viewport(R.copy(wt).multiplyScalar(W).round())},this.getScissor=function(P){return P.copy(Ft)},this.setScissor=function(P,k,q,$){P.isVector4?Ft.set(P.x,P.y,P.z,P.w):Ft.set(P,k,q,$),It.scissor(U.copy(Ft).multiplyScalar(W).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(P){It.setScissorTest(jt=P)},this.setOpaqueSort=function(P){rt=P},this.setTransparentSort=function(P){ft=P},this.getClearColor=function(P){return P.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(P=!0,k=!0,q=!0){let $=0;if(P){let H=!1;if(S!==null){const at=S.texture.format;H=at===au||at===ru||at===ou}if(H){const at=S.texture.type,xt=at===Ui||at===Ps||at===vr||at===Co||at===nu||at===iu,bt=Nt.getClearColor(),Rt=Nt.getClearAlpha(),Bt=bt.r,Gt=bt.g,Lt=bt.b;xt?(m[0]=Bt,m[1]=Gt,m[2]=Lt,m[3]=Rt,O.clearBufferuiv(O.COLOR,0,m)):(x[0]=Bt,x[1]=Gt,x[2]=Lt,x[3]=Rt,O.clearBufferiv(O.COLOR,0,x))}else $|=O.COLOR_BUFFER_BIT}k&&($|=O.DEPTH_BUFFER_BIT),q&&($|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Nt.dispose(),Tt.dispose(),ee.dispose(),Pt.dispose(),C.dispose(),X.dispose(),et.dispose(),_e.dispose(),B.dispose(),Ct.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Lu),Q.removeEventListener("sessionend",Du),es.stop()};function it(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=Me.autoReset,k=Et.enabled,q=Et.autoUpdate,$=Et.needsUpdate,H=Et.type;gt(),Me.autoReset=P,Et.enabled=k,Et.autoUpdate=q,Et.needsUpdate=$,Et.type=H}function Mt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Vt(P){const k=P.target;k.removeEventListener("dispose",Vt),Re(k)}function Re(P){Ye(P),Pt.remove(P)}function Ye(P){const k=Pt.get(P).programs;k!==void 0&&(k.forEach(function(q){Ct.releaseProgram(q)}),P.isShaderMaterial&&Ct.releaseShaderCache(P))}this.renderBufferDirect=function(P,k,q,$,H,at){k===null&&(k=Ee);const xt=H.isMesh&&H.matrixWorld.determinant()<0,bt=y0(P,k,q,$,H);It.setMaterial($,xt);let Rt=q.index,Bt=1;if($.wireframe===!0){if(Rt=ot.getWireframeAttribute(q),Rt===void 0)return;Bt=2}const Gt=q.drawRange,Lt=q.attributes.position;let ne=Gt.start*Bt,le=(Gt.start+Gt.count)*Bt;at!==null&&(ne=Math.max(ne,at.start*Bt),le=Math.min(le,(at.start+at.count)*Bt)),Rt!==null?(ne=Math.max(ne,0),le=Math.min(le,Rt.count)):Lt!=null&&(ne=Math.max(ne,0),le=Math.min(le,Lt.count));const De=le-ne;if(De<0||De===1/0)return;_e.setup(H,$,bt,q,Rt);let Ce,oe=At;if(Rt!==null&&(Ce=nt.get(Rt),oe=Qt,oe.setIndex(Ce)),H.isMesh)$.wireframe===!0?(It.setLineWidth($.wireframeLinewidth*Pe()),oe.setMode(O.LINES)):oe.setMode(O.TRIANGLES);else if(H.isLine){let Ut=$.linewidth;Ut===void 0&&(Ut=1),It.setLineWidth(Ut*Pe()),H.isLineSegments?oe.setMode(O.LINES):H.isLineLoop?oe.setMode(O.LINE_LOOP):oe.setMode(O.LINE_STRIP)}else H.isPoints?oe.setMode(O.POINTS):H.isSprite&&oe.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)oe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))oe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ut=H._multiDrawStarts,We=H._multiDrawCounts,he=H._multiDrawCount,Yn=Rt?nt.get(Rt).bytesPerElement:1,Fs=Pt.get($).currentProgram.getUniforms();for(let En=0;En<he;En++)Fs.setValue(O,"_gl_DrawID",En),oe.render(Ut[En]/Yn,We[En])}else if(H.isInstancedMesh)oe.renderInstances(ne,De,H.count);else if(q.isInstancedBufferGeometry){const Ut=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,We=Math.min(q.instanceCount,Ut);oe.renderInstances(ne,De,We)}else oe.render(ne,De)};function fe(P,k,q){P.transparent===!0&&P.side===Dt&&P.forceSinglePass===!1?(P.side=Mn,P.needsUpdate=!0,Fr(P,k,q),P.side=Ji,P.needsUpdate=!0,Fr(P,k,q),P.side=Dt):Fr(P,k,q)}this.compile=function(P,k,q=null){q===null&&(q=P),g=ee.get(q),g.init(k),v.push(g),q.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),P!==q&&P.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights();const $=new Set;return P.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const at=H.material;if(at)if(Array.isArray(at))for(let xt=0;xt<at.length;xt++){const bt=at[xt];fe(bt,q,H),$.add(bt)}else fe(at,q,H),$.add(at)}),v.pop(),g=null,$},this.compileAsync=function(P,k,q=null){const $=this.compile(P,k,q);return new Promise(H=>{function at(){if($.forEach(function(xt){Pt.get(xt).currentProgram.isReady()&&$.delete(xt)}),$.size===0){H(P);return}setTimeout(at,10)}Kt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let qn=null;function _i(P){qn&&qn(P)}function Lu(){es.stop()}function Du(){es.start()}const es=new up;es.setAnimationLoop(_i),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(P){qn=P,Q.setAnimationLoop(P),P===null?es.stop():es.start()},Q.addEventListener("sessionstart",Lu),Q.addEventListener("sessionend",Du),this.render=function(P,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(k),k=Q.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,k,S),g=ee.get(P,v.length),g.init(k),v.push(g),zt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),tt.setFromProjectionMatrix(zt),St=this.localClippingEnabled,ct=lt.init(this.clippingPlanes,St),p=Tt.get(P,b.length),p.init(),b.push(p),Q.enabled===!0&&Q.isPresenting===!0){const at=M.xr.getDepthSensingMesh();at!==null&&_c(at,k,-1/0,M.sortObjects)}_c(P,k,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(rt,ft),te=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,te&&Nt.addToRenderList(p,P),this.info.render.frame++,ct===!0&&lt.beginShadows();const q=g.state.shadowsArray;Et.render(q,P,k),ct===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=p.opaque,H=p.transmissive;if(g.setupLights(),k.isArrayCamera){const at=k.cameras;if(H.length>0)for(let xt=0,bt=at.length;xt<bt;xt++){const Rt=at[xt];Nu($,H,P,Rt)}te&&Nt.render(P);for(let xt=0,bt=at.length;xt<bt;xt++){const Rt=at[xt];Uu(p,P,Rt,Rt.viewport)}}else H.length>0&&Nu($,H,P,k),te&&Nt.render(P),Uu(p,P,k);S!==null&&T===0&&(D.updateMultisampleRenderTarget(S),D.updateRenderTargetMipmap(S)),P.isScene===!0&&P.onAfterRender(M,P,k),_e.resetDefaultState(),y=-1,_=null,v.pop(),v.length>0?(g=v[v.length-1],ct===!0&&lt.setGlobalState(M.clippingPlanes,g.state.camera)):g=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function _c(P,k,q,$){if(P.visible===!1)return;if(P.layers.test(k.layers)){if(P.isGroup)q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(k);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||tt.intersectsSprite(P)){$&&Yt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(zt);const xt=et.update(P),bt=P.material;bt.visible&&p.push(P,xt,bt,q,Yt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||tt.intersectsObject(P))){const xt=et.update(P),bt=P.material;if($&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Yt.copy(P.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Yt.copy(xt.boundingSphere.center)),Yt.applyMatrix4(P.matrixWorld).applyMatrix4(zt)),Array.isArray(bt)){const Rt=xt.groups;for(let Bt=0,Gt=Rt.length;Bt<Gt;Bt++){const Lt=Rt[Bt],ne=bt[Lt.materialIndex];ne&&ne.visible&&p.push(P,xt,ne,q,Yt.z,Lt)}}else bt.visible&&p.push(P,xt,bt,q,Yt.z,null)}}const at=P.children;for(let xt=0,bt=at.length;xt<bt;xt++)_c(at[xt],k,q,$)}function Uu(P,k,q,$){const H=P.opaque,at=P.transmissive,xt=P.transparent;g.setupLightsView(q),ct===!0&&lt.setGlobalState(M.clippingPlanes,q),$&&It.viewport(R.copy($)),H.length>0&&zr(H,k,q),at.length>0&&zr(at,k,q),xt.length>0&&zr(xt,k,q),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Nu(P,k,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[$.id]===void 0&&(g.state.transmissionRenderTarget[$.id]=new Qn(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?Ii:Ui,minFilter:ws,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const at=g.state.transmissionRenderTarget[$.id],xt=$.viewport||R;at.setSize(xt.z*M.transmissionResolutionScale,xt.w*M.transmissionResolutionScale);const bt=M.getRenderTarget();M.setRenderTarget(at),M.getClearColor(z),V=M.getClearAlpha(),V<1&&M.setClearColor(16777215,.5),M.clear(),te&&Nt.render(q);const Rt=M.toneMapping;M.toneMapping=Ki;const Bt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),g.setupLightsView($),ct===!0&&lt.setGlobalState(M.clippingPlanes,$),zr(P,q,$),D.updateMultisampleRenderTarget(at),D.updateRenderTargetMipmap(at),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Lt=0,ne=k.length;Lt<ne;Lt++){const le=k[Lt],De=le.object,Ce=le.geometry,oe=le.material,Ut=le.group;if(oe.side===Dt&&De.layers.test($.layers)){const We=oe.side;oe.side=Mn,oe.needsUpdate=!0,zu(De,q,$,Ce,oe,Ut),oe.side=We,oe.needsUpdate=!0,Gt=!0}}Gt===!0&&(D.updateMultisampleRenderTarget(at),D.updateRenderTargetMipmap(at))}M.setRenderTarget(bt),M.setClearColor(z,V),Bt!==void 0&&($.viewport=Bt),M.toneMapping=Rt}function zr(P,k,q){const $=k.isScene===!0?k.overrideMaterial:null;for(let H=0,at=P.length;H<at;H++){const xt=P[H],bt=xt.object,Rt=xt.geometry,Bt=$===null?xt.material:$,Gt=xt.group;bt.layers.test(q.layers)&&zu(bt,k,q,Rt,Bt,Gt)}}function zu(P,k,q,$,H,at){P.onBeforeRender(M,k,q,$,H,at),P.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),H.onBeforeRender(M,k,q,$,P,at),H.transparent===!0&&H.side===Dt&&H.forceSinglePass===!1?(H.side=Mn,H.needsUpdate=!0,M.renderBufferDirect(q,k,$,H,P,at),H.side=Ji,H.needsUpdate=!0,M.renderBufferDirect(q,k,$,H,P,at),H.side=Dt):M.renderBufferDirect(q,k,$,H,P,at),P.onAfterRender(M,k,q,$,H,at)}function Fr(P,k,q){k.isScene!==!0&&(k=Ee);const $=Pt.get(P),H=g.state.lights,at=g.state.shadowsArray,xt=H.state.version,bt=Ct.getParameters(P,H.state,at,k,q),Rt=Ct.getProgramCacheKey(bt);let Bt=$.programs;$.environment=P.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(P.isMeshStandardMaterial?X:C).get(P.envMap||$.environment),$.envMapRotation=$.environment!==null&&P.envMap===null?k.environmentRotation:P.envMapRotation,Bt===void 0&&(P.addEventListener("dispose",Vt),Bt=new Map,$.programs=Bt);let Gt=Bt.get(Rt);if(Gt!==void 0){if($.currentProgram===Gt&&$.lightsStateVersion===xt)return Ou(P,bt),Gt}else bt.uniforms=Ct.getUniforms(P),P.onBeforeCompile(bt,M),Gt=Ct.acquireProgram(bt,Rt),Bt.set(Rt,Gt),$.uniforms=bt.uniforms;const Lt=$.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Lt.clippingPlanes=lt.uniform),Ou(P,bt),$.needsLights=S0(P),$.lightsStateVersion=xt,$.needsLights&&(Lt.ambientLightColor.value=H.state.ambient,Lt.lightProbe.value=H.state.probe,Lt.directionalLights.value=H.state.directional,Lt.directionalLightShadows.value=H.state.directionalShadow,Lt.spotLights.value=H.state.spot,Lt.spotLightShadows.value=H.state.spotShadow,Lt.rectAreaLights.value=H.state.rectArea,Lt.ltc_1.value=H.state.rectAreaLTC1,Lt.ltc_2.value=H.state.rectAreaLTC2,Lt.pointLights.value=H.state.point,Lt.pointLightShadows.value=H.state.pointShadow,Lt.hemisphereLights.value=H.state.hemi,Lt.directionalShadowMap.value=H.state.directionalShadowMap,Lt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Lt.spotShadowMap.value=H.state.spotShadowMap,Lt.spotLightMatrix.value=H.state.spotLightMatrix,Lt.spotLightMap.value=H.state.spotLightMap,Lt.pointShadowMap.value=H.state.pointShadowMap,Lt.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Gt,$.uniformsList=null,Gt}function Fu(P){if(P.uniformsList===null){const k=P.currentProgram.getUniforms();P.uniformsList=Pa.seqWithValue(k.seq,P.uniforms)}return P.uniformsList}function Ou(P,k){const q=Pt.get(P);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function y0(P,k,q,$,H){k.isScene!==!0&&(k=Ee),D.resetTextureUnits();const at=k.fog,xt=$.isMeshStandardMaterial?k.environment:null,bt=S===null?M.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Io,Rt=($.isMeshStandardMaterial?X:C).get($.envMap||xt),Bt=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Gt=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Lt=!!q.morphAttributes.position,ne=!!q.morphAttributes.normal,le=!!q.morphAttributes.color;let De=Ki;$.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(De=M.toneMapping);const Ce=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,oe=Ce!==void 0?Ce.length:0,Ut=Pt.get($),We=g.state.lights;if(ct===!0&&(St===!0||P!==_)){const en=P===_&&$.id===y;lt.setState($,P,en)}let he=!1;$.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==We.state.version||Ut.outputColorSpace!==bt||H.isBatchedMesh&&Ut.batching===!1||!H.isBatchedMesh&&Ut.batching===!0||H.isBatchedMesh&&Ut.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ut.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ut.instancing===!1||!H.isInstancedMesh&&Ut.instancing===!0||H.isSkinnedMesh&&Ut.skinning===!1||!H.isSkinnedMesh&&Ut.skinning===!0||H.isInstancedMesh&&Ut.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ut.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ut.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ut.instancingMorph===!1&&H.morphTexture!==null||Ut.envMap!==Rt||$.fog===!0&&Ut.fog!==at||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==lt.numPlanes||Ut.numIntersection!==lt.numIntersection)||Ut.vertexAlphas!==Bt||Ut.vertexTangents!==Gt||Ut.morphTargets!==Lt||Ut.morphNormals!==ne||Ut.morphColors!==le||Ut.toneMapping!==De||Ut.morphTargetsCount!==oe)&&(he=!0):(he=!0,Ut.__version=$.version);let Yn=Ut.currentProgram;he===!0&&(Yn=Fr($,k,H));let Fs=!1,En=!1,Ho=!1;const we=Yn.getUniforms(),zn=Ut.uniforms;if(It.useProgram(Yn.program)&&(Fs=!0,En=!0,Ho=!0),$.id!==y&&(y=$.id,En=!0),Fs||_!==P){It.buffers.depth.getReversed()?(dt.copy(P.projectionMatrix),mm(dt),gm(dt),we.setValue(O,"projectionMatrix",dt)):we.setValue(O,"projectionMatrix",P.projectionMatrix),we.setValue(O,"viewMatrix",P.matrixWorldInverse);const vn=we.map.cameraPosition;vn!==void 0&&vn.setValue(O,kt.setFromMatrixPosition(P.matrixWorld)),Jt.logarithmicDepthBuffer&&we.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&we.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),_!==P&&(_=P,En=!0,Ho=!0)}if(H.isSkinnedMesh){we.setOptional(O,H,"bindMatrix"),we.setOptional(O,H,"bindMatrixInverse");const en=H.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),we.setValue(O,"boneTexture",en.boneTexture,D))}H.isBatchedMesh&&(we.setOptional(O,H,"batchingTexture"),we.setValue(O,"batchingTexture",H._matricesTexture,D),we.setOptional(O,H,"batchingIdTexture"),we.setValue(O,"batchingIdTexture",H._indirectTexture,D),we.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&we.setValue(O,"batchingColorTexture",H._colorsTexture,D));const Fn=q.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&Ot.update(H,q,Yn),(En||Ut.receiveShadow!==H.receiveShadow)&&(Ut.receiveShadow=H.receiveShadow,we.setValue(O,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(zn.envMap.value=Rt,zn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(zn.envMapIntensity.value=k.environmentIntensity),En&&(we.setValue(O,"toneMappingExposure",M.toneMappingExposure),Ut.needsLights&&w0(zn,Ho),at&&$.fog===!0&&_t.refreshFogUniforms(zn,at),_t.refreshMaterialUniforms(zn,$,W,Z,g.state.transmissionRenderTarget[P.id]),Pa.upload(O,Fu(Ut),zn,D)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Pa.upload(O,Fu(Ut),zn,D),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&we.setValue(O,"center",H.center),we.setValue(O,"modelViewMatrix",H.modelViewMatrix),we.setValue(O,"normalMatrix",H.normalMatrix),we.setValue(O,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const en=$.uniformsGroups;for(let vn=0,Mc=en.length;vn<Mc;vn++){const ns=en[vn];B.update(ns,Yn),B.bind(ns,Yn)}}return Yn}function w0(P,k){P.ambientLightColor.needsUpdate=k,P.lightProbe.needsUpdate=k,P.directionalLights.needsUpdate=k,P.directionalLightShadows.needsUpdate=k,P.pointLights.needsUpdate=k,P.pointLightShadows.needsUpdate=k,P.spotLights.needsUpdate=k,P.spotLightShadows.needsUpdate=k,P.rectAreaLights.needsUpdate=k,P.hemisphereLights.needsUpdate=k}function S0(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(P,k,q){Pt.get(P.texture).__webglTexture=k,Pt.get(P.depthTexture).__webglTexture=q;const $=Pt.get(P);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||Kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,k){const q=Pt.get(P);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};const b0=O.createFramebuffer();this.setRenderTarget=function(P,k=0,q=0){S=P,E=k,T=q;let $=!0,H=null,at=!1,xt=!1;if(P){const Rt=Pt.get(P);if(Rt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(O.FRAMEBUFFER,null),$=!1;else if(Rt.__webglFramebuffer===void 0)D.setupRenderTarget(P);else if(Rt.__hasExternalTextures)D.rebindTextures(P,Pt.get(P.texture).__webglTexture,Pt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Lt=P.depthTexture;if(Rt.__boundDepthTexture!==Lt){if(Lt!==null&&Pt.has(Lt)&&(P.width!==Lt.image.width||P.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(P)}}const Bt=P.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(xt=!0);const Gt=Pt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Gt[k])?H=Gt[k][q]:H=Gt[k],at=!0):P.samples>0&&D.useMultisampledRTT(P)===!1?H=Pt.get(P).__webglMultisampledFramebuffer:Array.isArray(Gt)?H=Gt[q]:H=Gt,R.copy(P.viewport),U.copy(P.scissor),L=P.scissorTest}else R.copy(wt).multiplyScalar(W).floor(),U.copy(Ft).multiplyScalar(W).floor(),L=jt;if(q!==0&&(H=b0),It.bindFramebuffer(O.FRAMEBUFFER,H)&&$&&It.drawBuffers(P,H),It.viewport(R),It.scissor(U),It.setScissorTest(L),at){const Rt=Pt.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Rt.__webglTexture,q)}else if(xt){const Rt=Pt.get(P.texture),Bt=k;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.__webglTexture,q,Bt)}else if(P!==null&&q!==0){const Rt=Pt.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Rt.__webglTexture,q)}y=-1},this.readRenderTargetPixels=function(P,k,q,$,H,at,xt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Pt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&xt!==void 0&&(bt=bt[xt]),bt){It.bindFramebuffer(O.FRAMEBUFFER,bt);try{const Rt=P.texture,Bt=Rt.format,Gt=Rt.type;if(!Jt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=P.width-$&&q>=0&&q<=P.height-H&&O.readPixels(k,q,$,H,Xt.convert(Bt),Xt.convert(Gt),at)}finally{const Rt=S!==null?Pt.get(S).__webglFramebuffer:null;It.bindFramebuffer(O.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(P,k,q,$,H,at,xt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Pt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&xt!==void 0&&(bt=bt[xt]),bt){const Rt=P.texture,Bt=Rt.format,Gt=Rt.type;if(!Jt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=P.width-$&&q>=0&&q<=P.height-H){It.bindFramebuffer(O.FRAMEBUFFER,bt);const Lt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Lt),O.bufferData(O.PIXEL_PACK_BUFFER,at.byteLength,O.STREAM_READ),O.readPixels(k,q,$,H,Xt.convert(Bt),Xt.convert(Gt),0);const ne=S!==null?Pt.get(S).__webglFramebuffer:null;It.bindFramebuffer(O.FRAMEBUFFER,ne);const le=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await pm(O,le,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Lt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,at),O.deleteBuffer(Lt),O.deleteSync(le),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,k=null,q=0){P.isTexture!==!0&&(so("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,P=arguments[1]);const $=Math.pow(2,-q),H=Math.floor(P.image.width*$),at=Math.floor(P.image.height*$),xt=k!==null?k.x:0,bt=k!==null?k.y:0;D.setTexture2D(P,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,xt,bt,H,at),It.unbindTexture()};const T0=O.createFramebuffer(),E0=O.createFramebuffer();this.copyTextureToTexture=function(P,k,q=null,$=null,H=0,at=null){P.isTexture!==!0&&(so("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,P=arguments[1],k=arguments[2],at=arguments[3]||0,q=null),at===null&&(H!==0?(so("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=H,H=0):at=0);let xt,bt,Rt,Bt,Gt,Lt,ne,le,De;const Ce=P.isCompressedTexture?P.mipmaps[at]:P.image;if(q!==null)xt=q.max.x-q.min.x,bt=q.max.y-q.min.y,Rt=q.isBox3?q.max.z-q.min.z:1,Bt=q.min.x,Gt=q.min.y,Lt=q.isBox3?q.min.z:0;else{const Fn=Math.pow(2,-H);xt=Math.floor(Ce.width*Fn),bt=Math.floor(Ce.height*Fn),P.isDataArrayTexture?Rt=Ce.depth:P.isData3DTexture?Rt=Math.floor(Ce.depth*Fn):Rt=1,Bt=0,Gt=0,Lt=0}$!==null?(ne=$.x,le=$.y,De=$.z):(ne=0,le=0,De=0);const oe=Xt.convert(k.format),Ut=Xt.convert(k.type);let We;k.isData3DTexture?(D.setTexture3D(k,0),We=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(D.setTexture2DArray(k,0),We=O.TEXTURE_2D_ARRAY):(D.setTexture2D(k,0),We=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const he=O.getParameter(O.UNPACK_ROW_LENGTH),Yn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Fs=O.getParameter(O.UNPACK_SKIP_PIXELS),En=O.getParameter(O.UNPACK_SKIP_ROWS),Ho=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ce.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ce.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Bt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Gt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Lt);const we=P.isDataArrayTexture||P.isData3DTexture,zn=k.isDataArrayTexture||k.isData3DTexture;if(P.isDepthTexture){const Fn=Pt.get(P),en=Pt.get(k),vn=Pt.get(Fn.__renderTarget),Mc=Pt.get(en.__renderTarget);It.bindFramebuffer(O.READ_FRAMEBUFFER,vn.__webglFramebuffer),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,Mc.__webglFramebuffer);for(let ns=0;ns<Rt;ns++)we&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.get(P).__webglTexture,H,Lt+ns),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.get(k).__webglTexture,at,De+ns)),O.blitFramebuffer(Bt,Gt,xt,bt,ne,le,xt,bt,O.DEPTH_BUFFER_BIT,O.NEAREST);It.bindFramebuffer(O.READ_FRAMEBUFFER,null),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||P.isRenderTargetTexture||Pt.has(P)){const Fn=Pt.get(P),en=Pt.get(k);It.bindFramebuffer(O.READ_FRAMEBUFFER,T0),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,E0);for(let vn=0;vn<Rt;vn++)we?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fn.__webglTexture,H,Lt+vn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Fn.__webglTexture,H),zn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,en.__webglTexture,at,De+vn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,en.__webglTexture,at),H!==0?O.blitFramebuffer(Bt,Gt,xt,bt,ne,le,xt,bt,O.COLOR_BUFFER_BIT,O.NEAREST):zn?O.copyTexSubImage3D(We,at,ne,le,De+vn,Bt,Gt,xt,bt):O.copyTexSubImage2D(We,at,ne,le,Bt,Gt,xt,bt);It.bindFramebuffer(O.READ_FRAMEBUFFER,null),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else zn?P.isDataTexture||P.isData3DTexture?O.texSubImage3D(We,at,ne,le,De,xt,bt,Rt,oe,Ut,Ce.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(We,at,ne,le,De,xt,bt,Rt,oe,Ce.data):O.texSubImage3D(We,at,ne,le,De,xt,bt,Rt,oe,Ut,Ce):P.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,at,ne,le,xt,bt,oe,Ut,Ce.data):P.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,at,ne,le,Ce.width,Ce.height,oe,Ce.data):O.texSubImage2D(O.TEXTURE_2D,at,ne,le,xt,bt,oe,Ut,Ce);O.pixelStorei(O.UNPACK_ROW_LENGTH,he),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Yn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Fs),O.pixelStorei(O.UNPACK_SKIP_ROWS,En),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ho),at===0&&k.generateMipmaps&&O.generateMipmap(We),It.unbindTexture()},this.copyTextureToTexture3D=function(P,k,q=null,$=null,H=0){return P.isTexture!==!0&&(so("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,$=arguments[1]||null,P=arguments[2],k=arguments[3],H=arguments[4]||0),so('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,k,q,$,H)},this.initRenderTarget=function(P){Pt.get(P).__webglFramebuffer===void 0&&D.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?D.setTextureCube(P,0):P.isData3DTexture?D.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?D.setTexture2DArray(P,0):D.setTexture2D(P,0),It.unbindTexture()},this.resetState=function(){E=0,T=0,S=null,It.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}const ay=15,cy=6,ly=1.8,Za=8,jf=.85,Kf=.98,$a=.003,ce=90,mc=1.7,hy=35,uy=25,fy=10,dy=6,py=8,my=4,gy=5,xy=120,_y=18,My=15,vy=15,yy=30,gp=3,wy=12,Sy=5,by=15,Ty=40,Ey=6,Ay=6,Ry=6,Cy=5,As=280,Mh=2.5,Py=6,Jf=1.5,oo=5,Qf=2.5,Qs=12,ve=30,Iy=5,Ly=8,Dy=2.2,F={fog:396308,ground:1720360,leaf:1722400,leafGlow:4521898,mushCap:8926190,mushGlow:13400063,mushStem:2756928,crystal:3407837,crystalCore:8978414,firefly:15662950,fireflyB:6750173,spore:12320665,ambient:2241365,moon:12307694,jellyBell:7833855,jellyGlow:11193599,jellyTent:6715340,puffBody:16768460,puffGlow:16755336,puffEye:2236962,puffCheek:16746649,deerBody:11202303,deerGlow:8969727,deerAntler:13434862,deerEye:1127236,mothWing:11206553,mothGlow:13434794,mothBody:5596723,mothSpot:16777215,grassTip:3385941,grassPurple:[1706530,2363962,4857960,11158766,13400063,16746717,2757952,6697898,11158783],grassBlue:[660514,858677,2114917,4500206,6741503,8974079,1387077,3368618,4500223],grassTeal:[662042,1059362,2121808,4517563,6750173,11206536,1720376,3385992,4521915],fern:1725744,fernGlow:3394662,flower:16742348,flowerGlow:16751069,flowerStem:1721376,reed:2774325,reedTip:4504422,orbGold:16763955,orbGlow:16772778,orbInner:16775389,laserPink:16737962,laserGlow:16746700,obeliskBlack:657938,obeliskPink:16729258,moatBlue:3377356,rainbow:[16724787,16746547,16772659,3407718,3377407,8926207],wispCore:11202303,wispGlow:14544639,wispTrail:8965375,dandStem:4482611,dandHead:16777198,dandSeed:16775389,dandSeedGlow:16777215,fairyMush:13404415,fairyGlow:14527231,fairyRing:11167470,bubbleIris:11197951,bubbleShine:16777215,bubblePop:13434862,starMote:16772829,pondWater:2254506,pondGlow:3377356,lilyPad:2263108,lilyFlower:16746700,lilyGlow:16755421,echoBloom:11206604,rockBase:2763314,rockMoss:1721378,rockLight:3816005,skyDeep:198160,thornOrb:16755268,thornOrbGlow:16764006,thornPetal:6689075,thornSpike:2759184,thornStem:1717024,helixStem:1714240,helixPod:6697983,helixPodGlow:8934911,helixRing:4465322,helixNode:5588172,snapBody:2271846,snapBodyGlow:4521864,snapTip:6750122,snapTipGlow:8978380,snapFrond:1730116},tn=new ry({antialias:!0,powerPreference:"default"});tn.setSize(window.innerWidth,window.innerHeight);tn.setPixelRatio(Math.min(window.devicePixelRatio,1.5));tn.shadowMap.enabled=!0;tn.shadowMap.type=Ad;tn.toneMapping=Cd;tn.toneMappingExposure=2.8;tn.outputColorSpace=_n;document.body.appendChild(tn.domElement);const hn=new Pn(65,window.innerWidth/window.innerHeight,.1,300),xp=new hp,ht=new Om;ht.background=new st(F.skyDeep);ht.fog=new lu(F.fog,.01);window.addEventListener("resize",()=>{hn.aspect=window.innerWidth/window.innerHeight,hn.updateProjectionMatrix(),tn.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("visibilitychange",()=>{document.hidden||xp.getDelta()});const _p={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Dr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Uy=new vu(-1,1,1,-1,0,1);class Ny extends Te{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}}const zy=new Ny;class Mp{constructor(t){this._mesh=new I(zy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Uy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Fy extends Dr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Sn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Va.clone(t.uniforms),this.material=new Sn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Mp(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class td extends Dr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),o.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(i.EQUAL,1,4294967295),o.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),o.buffers.stencil.setLocked(!0)}}class Oy extends Dr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class By{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new pt);this._width=n.width,this._height=n.height,e=new Qn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ii}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fy(_p),this.copyPass.material.blending=Pi,this.clock=new hp}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,o=this.passes.length;i<o;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}td!==void 0&&(r instanceof td?n=!0:r instanceof Oy&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ky extends Dr{constructor(t,e,n=null,i=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new st}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=i}}const Gy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new st(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Uo extends Dr{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new pt(t.x,t.y):new pt(256,256),this.clearColor=new st(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Qn(o,r,{type:Ii}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Qn(o,r,{type:Ii});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Qn(o,r,{type:Ii});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),o=Math.round(o/2),r=Math.round(r/2)}const a=Gy;this.highPassUniforms=Va.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Sn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new pt(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=_p;this.copyUniforms=Va.clone(h.uniforms),this.blendMaterial=new Sn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ue,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new st,this.oldClearAlpha=1,this.basic=new Y,this.fsQuad=new Mp(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,i),this.renderTargetsVertical[o].setSize(n,i),this.separableBlurMaterials[o].uniforms.invSize.value=new pt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Uo.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Uo.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Sn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new pt(.5,.5)},direction:{value:new pt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Sn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Uo.BlurDirectionX=new pt(1,0);Uo.BlurDirectionY=new pt(0,1);let Rs=null,wu=!0;try{const s=new ky(ht,hn),t=new Uo(new pt(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2)),.6,.4,.85);Rs=new By(tn),Rs.addPass(s),Rs.addPass(t)}catch(s){console.warn("Bloom unavailable, falling back to direct render:",s.message),wu=!1}window.addEventListener("resize",()=>{wu&&Rs&&Rs.setSize(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2))});function ed(){wu&&Rs?Rs.render():tn.render(ht,hn)}const Su=new vg(F.ambient,F.ground,.65);ht.add(Su);const Xn=new dc(F.moon,.85);Xn.position.set(30,60,-20);Xn.castShadow=!0;Xn.shadow.camera.left=-90;Xn.shadow.camera.right=90;Xn.shadow.camera.top=90;Xn.shadow.camera.bottom=-90;Xn.shadow.camera.near=1;Xn.shadow.camera.far=250;Xn.shadow.mapSize.set(1024,1024);Xn.shadow.bias=-.001;ht.add(Xn);const bu=new dc(2241365,.3);bu.position.set(-40,45,25);ht.add(bu);const vp=new dc(3359829,.4);vp.position.set(-25,15,30);ht.add(vp);const yp=new Bo(3368516,.7,100);yp.position.set(0,.5,0);ht.add(yp);const wp=new dc(4478327,.4);wp.position.set(-10,25,40);ht.add(wp);const Tu=new Bo(6719624,.6,20);ht.add(Tu);const ds=[];function Hy(){for(let s=0;s<Iy;s++){const t=new Bo(F.crystal,0,16);ht.add(t),ds.push(t)}}const or=new Bo(F.orbGold,0,15);ht.add(or);const Ie={};let Tr=0,Cs=0,gc=!1,Sp=!1,Eu=0,Au=0,Ru=!1,xc=!1,Go=!1,ja=null,Ls=null,vh=0,yh=0,wh=null;function Vy(s){wh=s}function Wy(s){Sp=s}function Xy(s){xc=s}function Ur(){!Sp&&wh&&wh()}window.addEventListener("keydown",s=>{Ie[s.code]=!0,"Space ShiftLeft ShiftRight KeyW KeyA KeyS KeyD".split(" ").indexOf(s.code)>=0&&s.preventDefault(),Ur()});window.addEventListener("keyup",s=>{Ie[s.code]=!1});window.addEventListener("blur",()=>{for(const s in Ie)Ie[s]=!1;gc=!1});tn.domElement.addEventListener("mousedown",()=>{gc=!0,Ur()});window.addEventListener("mouseup",()=>{gc=!1});window.addEventListener("mousemove",s=>{gc&&(Tr-=s.movementX*$a,Cs-=s.movementY*$a,Cs=Math.max(-1,Math.min(1,Cs)))});const qy="ontouchstart"in window||navigator.maxTouchPoints>0,Nr=document.getElementById("joy-zone"),Ka=document.getElementById("joy-knob"),Cu=document.getElementById("btn-jump");qy&&(Nr.style.display="block",Cu.style.display="block",document.getElementById("controls").textContent="Stick: Move · Drag right: Look · JUMP");function bp(s,t){const e=Nr.getBoundingClientRect();let n=s-(e.left+e.width/2),i=t-(e.top+e.height/2);const o=Math.sqrt(n*n+i*i),r=52;o>r&&(n=n/o*r,i=i/o*r),Eu=n/r,Au=i/r,Ka.style.left=40+n+"px",Ka.style.top=40+i+"px"}Nr.addEventListener("touchstart",s=>{s.preventDefault(),s.stopPropagation(),Ur();const t=s.changedTouches[0];ja=t.identifier,Ru=!0,bp(t.clientX,t.clientY)},{passive:!1});Nr.addEventListener("touchmove",s=>{s.preventDefault(),s.stopPropagation();for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===ja&&bp(s.changedTouches[t].clientX,s.changedTouches[t].clientY)},{passive:!1});Nr.addEventListener("touchend",s=>{s.preventDefault(),s.stopPropagation();for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===ja&&(ja=null,Ru=!1,Eu=0,Au=0,Ka.style.left="40px",Ka.style.top="40px")},{passive:!1});Cu.addEventListener("touchstart",s=>{s.preventDefault(),s.stopPropagation(),Ur(),xc=!0},{passive:!1});Cu.addEventListener("touchend",s=>{s.preventDefault(),s.stopPropagation(),xc=!1},{passive:!1});tn.domElement.addEventListener("touchstart",s=>{s.preventDefault(),Ur();for(let t=0;t<s.changedTouches.length;t++){const e=s.changedTouches[t];e.clientX>window.innerWidth*.3&&Ls===null&&(Ls=e.identifier,vh=e.clientX,yh=e.clientY)}},{passive:!1});tn.domElement.addEventListener("touchmove",s=>{s.preventDefault();for(let t=0;t<s.changedTouches.length;t++){const e=s.changedTouches[t];e.identifier===Ls&&(Tr-=(e.clientX-vh)*$a,Cs-=(e.clientY-yh)*$a,Cs=Math.max(-1,Math.min(1,Cs)),vh=e.clientX,yh=e.clientY)}},{passive:!1});tn.domElement.addEventListener("touchend",s=>{for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===Ls&&(Ls=null)},{passive:!1});tn.domElement.addEventListener("touchcancel",s=>{for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===Ls&&(Ls=null)},{passive:!1});function Yy(){let s=0,t=0;Ie.KeyW&&(t-=1),Ie.KeyS&&(t+=1),Ie.KeyA&&(s-=1),Ie.KeyD&&(s+=1),Ru&&(s+=Eu,t+=Au);const e=Math.sqrt(s*s+t*t);e>1&&(s/=e,t/=e);const n=cy*(Ie.ShiftLeft||Ie.ShiftRight||Go?ly:1),i=Math.sin(Tr),o=Math.cos(Tr);return{x:(s*o+t*i)*n,z:(-s*i+t*o)*n}}const Tn={mushCap:new j(.5,8,5),mushStem:new vt(.06,.1,.6,5),mushDot:new j(.06,4,3),crystal:new vt(0,.35,1.8,6),crystalSm:new vt(0,.18,.9,5),fly:new j(.06,4,3),spore:new j(.04,3,3),dandSeed:new j(.025,3,3),bubble:new j(.15,8,6),starMote:new j(.03,3,3),dustMote:new j(.035,3,3)};let mr=42;function w(){return mr=mr*16807%2147483647,(mr&2147483647)/2147483647}function Zy(){return mr}function $y(s){mr=s}function da(s,t){let e=s*374761393+t*668265263+1274126177|0;return e=(e^e>>13)*1274126177|0,(e&2147483647)/2147483647}function gr(s){return s*s*(3-2*s)}function Tp(s,t){const e=Math.floor(s),n=Math.floor(t),i=gr(s-e),o=gr(t-n),r=da(e,n),a=da(e+1,n),c=da(e,n+1),l=da(e+1,n+1);return r+(a-r)*i+(c-r)*o+(r-a-c+l)*i*o}function nd(s,t,e){let n=0,i=.5,o=1;for(let r=0;r<e;r++)n+=Tp(s*o,t*o)*i,i*=.5,o*=2;return n}const Sh=[];function bh(s,t,e){Sh.push({x:s,z:t,r:e})}function Zt(s,t){const e=Math.sqrt(s*s+t*t),n=1-gr(Math.max(0,(e-ce*.7)/(ce*.3))),i=gr(Math.min(1,e/8)),o=.035,r=nd(s*o,t*o,4),a=nd(s*o*2.7+50,t*o*2.7+50,3),c=Tp(s*.15,t*.15);let l=r*2.5+a*.8+c*.15;l*=n*i;for(let h=0;h<Sh.length;h++){const u=Sh[h],f=s-u.x,d=t-u.z,m=Math.sqrt(f*f+d*d);if(m<u.r*2){const x=gr(Math.max(0,(m-u.r*.5)/(u.r*1.5)));l*=x}}return l}function jy(){const t=document.createElement("canvas");t.width=2048,t.height=2048;const e=t.getContext("2d"),n=Math.random;e.fillStyle="#2a5038",e.fillRect(0,0,2048,2048);const i=[{col:"rgba(40,80,50,0.35)",n:15,r:120},{col:"rgba(60,50,25,0.25)",n:12,r:100},{col:"rgba(30,65,55,0.25)",n:10,r:110},{col:"rgba(55,70,35,0.2)",n:8,r:90},{col:"rgba(35,40,25,0.25)",n:8,r:80}];for(const h of i)for(let u=0;u<h.n;u++){const f=n()*2048,d=n()*2048,m=h.r*(.5+n()*.8),x=e.createRadialGradient(f,d,0,f,d,m);x.addColorStop(0,h.col),x.addColorStop(.6,h.col.replace(/[\d.]+\)$/,parseFloat(h.col.match(/[\d.]+\)$/)[0])*.4+")")),x.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=x;for(let p=-1;p<=1;p++)for(let g=-1;g<=1;g++)e.beginPath(),e.arc(f+p*2048,d+g*2048,m,0,6.28),e.fill()}const o=[{n:80,r:25,colors:["rgba(20,45,25,0.2)","rgba(35,55,28,0.18)","rgba(28,22,12,0.2)","rgba(15,38,30,0.15)"]},{n:200,r:10,colors:["rgba(30,55,30,0.14)","rgba(45,35,18,0.12)","rgba(22,48,35,0.12)","rgba(38,28,14,0.1)"]},{n:500,r:4,colors:["rgba(25,50,28,0.1)","rgba(40,30,15,0.08)","rgba(18,42,32,0.08)","rgba(32,25,10,0.06)"]}];for(const h of o)for(let u=0;u<h.n;u++){e.fillStyle=h.colors[Math.floor(n()*h.colors.length)];const f=n()*2048,d=n()*2048;e.beginPath(),e.arc(f,d,h.r+n()*h.r*.6,0,6.28),e.fill()}const r=["rgba(60,200,100,0.06)","rgba(50,180,120,0.05)","rgba(80,160,200,0.04)","rgba(100,220,150,0.05)"];for(let h=0;h<25;h++){let u=n()*2048,f=n()*2048;const d=r[Math.floor(n()*r.length)];e.strokeStyle=d,e.lineWidth=1+n()*2,e.beginPath(),e.moveTo(u,f);let m=n()*6.28;const x=12+Math.floor(n()*16);for(let p=0;p<x;p++)m+=Math.sin(p*.6)*.5+(n()-.5)*.4,u+=Math.cos(m)*(6+n()*10),f+=Math.sin(m)*(6+n()*10),e.lineTo(u,f);if(e.stroke(),n()<.6){const p=e.createRadialGradient(u,f,0,u,f,6+n()*8);p.addColorStop(0,d.replace("0.0","0.1")),p.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=p,e.beginPath(),e.arc(u,f,6+n()*8,0,6.28),e.fill()}}e.lineWidth=1.2;for(let h=0;h<30;h++){e.strokeStyle=`rgba(20,12,5,${.15+n()*.12})`;let u=n()*2048,f=n()*2048,d=n()*6.28;e.beginPath(),e.moveTo(u,f);for(let m=0;m<10;m++)d+=Math.sin(m*.7)*.5+(n()-.5)*.35,u+=Math.cos(d)*(8+n()*14),f+=Math.sin(d)*(8+n()*14),e.lineTo(u,f);e.stroke()}const a=["rgba(55,32,12,0.3)","rgba(70,42,18,0.25)","rgba(40,55,22,0.22)","rgba(22,50,28,0.2)","rgba(60,45,20,0.25)","rgba(30,60,35,0.18)","rgba(50,25,8,0.22)","rgba(65,55,25,0.18)"];for(let h=0;h<3e3;h++){e.fillStyle=a[Math.floor(n()*a.length)];const u=n()*2048,f=n()*2048,d=.8+n()*2.5;e.beginPath(),e.arc(u,f,d,0,6.28),e.fill()}for(let h=0;h<40;h++){const u=n()*2048,f=n()*2048,d=15+n()*35,m=e.createRadialGradient(u,f,0,u,f,d),x=n();x<.4?(m.addColorStop(0,"rgba(45,90,50,0.18)"),m.addColorStop(1,"rgba(25,55,30,0)")):x<.7?(m.addColorStop(0,"rgba(35,75,60,0.16)"),m.addColorStop(1,"rgba(20,50,38,0)")):(m.addColorStop(0,"rgba(55,75,35,0.14)"),m.addColorStop(1,"rgba(30,45,20,0)")),e.fillStyle=m,e.beginPath(),e.arc(u,f,d,0,6.28),e.fill()}for(let h=0;h<400;h++){const u=n()*2048,f=n()*2048,d=1.5+n()*3.5,m=Math.floor(28+n()*42);e.fillStyle=`rgba(${m},${m-4},${m-10},0.3)`,e.beginPath(),e.arc(u,f,d,0,6.28),e.fill()}e.lineWidth=.7;for(let h=0;h<80;h++){const u=n()*2048,f=n()*2048,d=4+n()*18,m=n()*6.28;e.strokeStyle=`rgba(22,12,5,${.15+n()*.1})`,e.beginPath(),e.moveTo(u,f),e.lineTo(u+Math.cos(m)*d,f+Math.sin(m)*d),e.stroke()}const c=["rgba(80,220,120,0.08)","rgba(60,200,160,0.07)","rgba(100,180,220,0.06)","rgba(120,100,200,0.05)","rgba(200,150,80,0.04)","rgba(60,180,180,0.06)"];for(let h=0;h<300;h++){const u=n()*2048,f=n()*2048,d=c[Math.floor(n()*c.length)];if(e.fillStyle=d,e.beginPath(),e.arc(u,f,1+n()*2,0,6.28),e.fill(),n()<.3){const m=e.createRadialGradient(u,f,0,u,f,4+n()*5);m.addColorStop(0,d),m.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=m,e.beginPath(),e.arc(u,f,4+n()*5,0,6.28),e.fill()}}for(let h=0;h<150;h++){const u=n()*2048,f=n()*2048;e.fillStyle=`rgba(120,180,130,${.04+n()*.04})`,e.beginPath(),e.arc(u,f,.5+n()*1.2,0,6.28),e.fill()}const l=new du(t);return l.wrapS=l.wrapT=Ba,l.repeat.set(8,8),l.colorSpace=_n,l}function pa(s,t){let e=s*127961+t*372143+918273|0;return e=(e^e>>13)*517261|0,(e&2147483647)/2147483647}function Th(s){return s*s*(3-2*s)}function Ep(s,t){const e=Math.floor(s),n=Math.floor(t),i=Th(s-e),o=Th(t-n),r=pa(e,n),a=pa(e+1,n),c=pa(e,n+1),l=pa(e+1,n+1);return r+(a-r)*i+(c-r)*o+(r-a-c+l)*i*o}function nl(s,t,e){let n=0,i=.5,o=1;for(let r=0;r<e;r++)n+=Ep(s*o,t*o)*i,i*=.5,o*=2;return n}function Ky(){const s=jy(),t=ce*3,e=200,n=new xe(t,t,e,e),i=n.attributes.position,o=[[.55,.95,.6],[.45,.85,.95],[.8,.5,1],[.85,.65,.4],[.5,1.1,.65],[.4,.7,.9]],r=i.count,a=new Float32Array(r*3);for(let l=0;l<r;l++){const h=i.getX(l),u=i.getY(l);Math.sqrt(h*h+u*u)<ce*1.4?i.setZ(l,Zt(h,-u)):i.setZ(l,0);const d=h,m=-u,x=nl(d*.025+100,m*.025+200,3),p=nl(d*.06+300,m*.06+400,2),g=Ep(d*.15+500,m*.15+600),b=nl(d*.04-150,m*.04-250,3),v=Math.floor(x*o.length*.999),M=Math.floor(b*o.length*.999),A=o[v],E=o[M],T=Th(p),S=.85+g*.3,y=(A[0]*(1-T)+E[0]*T)*S,_=(A[1]*(1-T)+E[1]*T)*S,R=(A[2]*(1-T)+E[2]*T)*S,L=1+Zt(d,m)*.06;a[l*3]=y*L,a[l*3+1]=_*L,a[l*3+2]=R*L}n.setAttribute("color",new Ve(a,3)),n.computeVertexNormals();const c=new I(n,new K({map:s,vertexColors:!0,roughness:.75,metalness:0,emissive:1718304,emissiveIntensity:.25}));return c.rotation.x=-Math.PI/2,c.receiveShadow=!0,ht.add(c),c}const Er=new ae;let Ja=null;const ps=120;let id=null,Ia=null,Eh=null,Ah=null,_o=null;const Mo=[],Jy=3;let il=0;function Yi(s,t){const e=s>>16&255,n=s>>8&255,i=s&255;return`rgba(${e},${n},${i},${t})`}function Zi(s,t,e,n,i,o,r){s.save(),s.translate(t,e),Math.abs(i/n-1)>.01&&s.scale(1,i/n);const a=s.createRadialGradient(0,0,0,0,0,n);a.addColorStop(0,Yi(o,r)),a.addColorStop(.25,Yi(o,r*.55)),a.addColorStop(.55,Yi(o,r*.15)),a.addColorStop(.85,Yi(o,r*.03)),a.addColorStop(1,Yi(o,0)),s.fillStyle=a,s.beginPath(),s.arc(0,0,n,0,6.2832),s.fill(),s.restore()}function sl(s,t,e,n,i,o,r,a){Zi(s,t,e,n,i,o,r),t-n<0&&Zi(s,t+a,e,n,i,o,r),t+n>a&&Zi(s,t-a,e,n,i,o,r)}function Qy(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),i=Math.random,o=n.createLinearGradient(0,0,0,1024);o.addColorStop(0,"#030610"),o.addColorStop(.2,"#050a18"),o.addColorStop(.4,"#0a1222"),o.addColorStop(.55,"#0c1828"),o.addColorStop(.75,"#081018"),o.addColorStop(1,"#040810"),n.fillStyle=o,n.fillRect(0,0,2048,1024);const r=[{x:.12,y:.22,rx:.18,ry:.14,col:1717094,a:.14},{x:.42,y:.28,rx:.22,ry:.1,col:2758741,a:.12},{x:.72,y:.18,rx:.16,ry:.12,col:1721446,a:.13},{x:.88,y:.32,rx:.2,ry:.09,col:3348548,a:.1},{x:.28,y:.12,rx:.14,ry:.18,col:2245768,a:.1},{x:.58,y:.38,rx:.18,ry:.07,col:4465220,a:.08},{x:.05,y:.4,rx:.15,ry:.1,col:1586005,a:.09},{x:.52,y:.15,rx:.12,ry:.16,col:2765670,a:.07}];for(const u of r){sl(n,u.x*2048,u.y*1024,u.rx*2048,u.ry*1024,u.col,u.a,2048);for(let f=0;f<4;f++){const d=(u.x+(i()-.5)*u.rx)*2048,m=(u.y+(i()-.5)*u.ry)*1024,x=u.rx*2048*(.2+i()*.35),p=u.ry*1024*(.2+i()*.4);sl(n,d,m,x,p,u.col,u.a*(.4+i()*.5),2048)}}const a=[2245802,2245734,4465254,5583701,3368584,2245717,3809894];for(let u=0;u<30;u++){const f=i()*2048,d=i()*1024*.55,m=40+i()*180,x=25+i()*100;sl(n,f,d,m,x,a[Math.floor(i()*a.length)],.025+i()*.035,2048)}n.save(),n.globalCompositeOperation="screen";const c=.26;for(let u=0;u<50;u++){const f=u/50,d=f*2048,m=(c+Math.sin(f*Math.PI)*.06+(i()-.5)*.02)*1024,x=2048*.05+i()*2048*.035,p=1024*.04*(.4+i()*.6);Zi(n,d,m,x,p,4478310,.025+i()*.015)}for(let u=0;u<25;u++){const f=.2+i()*.6,d=f*2048,m=(c+Math.sin(f*Math.PI)*.04)*1024;Zi(n,d,m,2048*.03+i()*2048*.02,1024*.02+i()*1024*.01,6719658,.015+i()*.012)}for(let u=0;u<10;u++){const f=.35+i()*.3,d=f*2048,m=(c+Math.sin(f*Math.PI)*.02)*1024;Zi(n,d,m,2048*.02,1024*.012,8943462,.01+i()*.008)}n.globalCompositeOperation="source-over",n.restore();for(let u=0;u<12;u++){const f=.1+i()*.8,d=f*2048,m=(c+Math.sin(f*Math.PI)*.04+(i()-.5)*.02)*1024,x=20+i()*60,p=8+i()*20;Zi(n,d,m,x,p,132104,.15+i()*.1)}const l=["255,255,255","220,230,255","255,240,220","200,215,255","255,225,200","240,240,255","255,245,235"];for(let u=0;u<5e3;u++){const f=i()*2048,d=i()*1024*.65,m=.3+i()*.7,x=.1+i()*.5;n.fillStyle=`rgba(${l[Math.floor(i()*l.length)]},${x})`,n.beginPath(),n.arc(f,d,m,0,6.28),n.fill()}for(let u=0;u<3e3;u++){const f=i(),d=f*2048,x=(c+Math.sin(f*Math.PI)*.06)*1024+(i()-.5)*1024*.1;if(x<0||x>1024*.6)continue;const p=.2+i()*.6,g=.2+i()*.7;n.fillStyle=`rgba(${l[Math.floor(i()*l.length)]},${g})`,n.beginPath(),n.arc(d,x,p,0,6.28),n.fill()}for(let u=0;u<60;u++){const f=i()*2048,d=i()*1024*.58,m=1.2+i()*1.8,x=6+i()*14,p=i();let g;p<.45?g="255,255,255":p<.65?g="210,225,255":p<.8?g="255,230,200":p<.92?g="190,210,255":g="255,200,180";const b=n.createRadialGradient(f,d,0,f,d,x);b.addColorStop(0,`rgba(${g},0.5)`),b.addColorStop(.1,`rgba(${g},0.18)`),b.addColorStop(.35,`rgba(${g},0.04)`),b.addColorStop(1,`rgba(${g},0)`),n.fillStyle=b,n.beginPath(),n.arc(f,d,x,0,6.28),n.fill(),n.strokeStyle=`rgba(${g},0.12)`,n.lineWidth=.5;const v=x*.8;n.beginPath(),n.moveTo(f-v,d),n.lineTo(f+v,d),n.moveTo(f,d-v),n.lineTo(f,d+v),n.stroke(),n.fillStyle=`rgba(${g},1)`,n.beginPath(),n.arc(f,d,m,0,6.28),n.fill()}for(let u=0;u<8;u++){const f=i()*2048,d=1024*.08+i()*1024*.42,m=50+i()*90;Zi(n,f,d,m,m*.7,3359846,.03);for(let x=0;x<100;x++){const p=i()*6.28,g=i()*i()*m,b=f+Math.cos(p)*g,v=d+Math.sin(p)*g*.65;if(b<0||b>2048||v<0||v>1024)continue;const M=.2+i()*.6;n.fillStyle=`rgba(255,255,255,${.25+i()*.6})`,n.beginPath(),n.arc(b,v,M,0,6.28),n.fill()}}for(let u=0;u<15;u++){const f=r[Math.floor(i()*r.length)],d=(f.x+(i()-.5)*f.rx*.5)*2048,m=(f.y+(i()-.5)*f.ry*.5)*1024,x=3+i()*8,p=n.createRadialGradient(d,m,0,d,m,x*3);p.addColorStop(0,Yi(f.col,.2)),p.addColorStop(.3,Yi(f.col,.06)),p.addColorStop(1,Yi(f.col,0)),n.fillStyle=p,n.beginPath(),n.arc(d,m,x*3,0,6.28),n.fill()}const h=new du(e);return h.colorSpace=_n,h}function tw(){const s=Zy(),t=Qy(),e=new j(As,64,32,0,Math.PI*2,0,Math.PI*.55);Ja=new Y({map:t,side:Mn,fog:!1,transparent:!1});const n=new I(e,Ja);Er.add(n),ew(),nw(),ht.add(Er),$y(s)}function ew(){const s=new Float32Array(ps*3),t=new Float32Array(ps*3);Ia=new Float32Array(ps),Eh=new Float32Array(ps),Ah=new Float32Array(ps);const e=[[1,1,1],[.85,.9,1],[1,.94,.86],[.78,.84,1],[1,.88,.78],[.9,.95,1]],n=Math.random,i=As*.97;for(let a=0;a<ps;a++){const c=n()*Math.PI*2,l=n()*Math.PI*.48,h=i*Math.cos(c)*Math.sin(l),u=i*Math.cos(l),f=i*Math.sin(c)*Math.sin(l);s[a*3]=h,s[a*3+1]=u,s[a*3+2]=f;const d=e[Math.floor(n()*e.length)];t[a*3]=d[0],t[a*3+1]=d[1],t[a*3+2]=d[2],Ia[a]=2+n()*4,Eh[a]=n()*Math.PI*2,Ah[a]=.5+n()*2.5}const o=new Te;o.setAttribute("position",new Ht(s,3)),o.setAttribute("color",new Ht(t,3)),_o=new Ht(Ia.slice(),1),_o.setUsage(Se),o.setAttribute("size",_o);const r=new fu({vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,fog:!1,blending:ue,depthWrite:!1});id=new Qd(o,r),Er.add(id)}function nw(){const s=new Y({color:16777215,transparent:!0,opacity:0,fog:!1,blending:ue,depthWrite:!1});for(let t=0;t<Jy;t++){const e=new I(new vt(.15,0,12,4),s.clone());e.visible=!1,Er.add(e),Mo.push({mesh:e,mat:e.material,active:!1,life:0,maxLife:0,sx:0,sy:0,sz:0,dx:0,dy:0,dz:0})}}function iw(){let s=null;for(let a=0;a<Mo.length;a++)if(!Mo[a].active){s=Mo[a];break}if(!s)return;const t=Math.random,e=t()*Math.PI*2,n=.1+t()*.35,i=As*.85;s.sx=i*Math.cos(e)*Math.sin(n),s.sy=i*Math.cos(n),s.sz=i*Math.sin(e)*Math.sin(n);const o=e+(t()-.5)*1,r=80+t()*120;s.dx=Math.cos(o)*r,s.dy=-r*(.5+t()*.5),s.dz=Math.sin(o)*r,s.life=.5+t()*.8,s.maxLife=s.life,s.active=!0,s.mesh.visible=!0}function Ap(s,t){if(Er.rotation.y=t*.003,_o){const e=_o.array;for(let n=0;n<ps;n++){const i=Ia[n],o=Math.sin(t*Ah[n]+Eh[n]);e[n]=i*(.65+o*.35)}_o.needsUpdate=!0}il-=s,il<=0&&(il=4+Math.random()*12,iw());for(let e=0;e<Mo.length;e++){const n=Mo[e];if(!n.active)continue;if(n.life-=s,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}const i=n.life/n.maxLife;n.sx+=n.dx*s,n.sy+=n.dy*s,n.sz+=n.dz*s,n.mesh.position.set(n.sx,n.sy,n.sz),n.mesh.lookAt(n.sx+n.dx,n.sy+n.dy,n.sz+n.dz),n.mesh.rotateX(Math.PI/2),n.mat.opacity=i*.7,n.mesh.scale.setScalar(.6+i*.4)}}function sw(s){if(Ja){const t=Math.max(.15,s);Ja.color.setRGB(t,t,t)}}const ow=6,ma=64,Rh=[];let Ss=null;const Jo=[new st(1734485),new st(2787447),new st(5601126),new st(6706568),new st(8930406),new st(3368533)];function rw(){Ss=new ae,Ss.visible=!1;for(let s=0;s<ow;s++){const t=1.2+s*.2+Math.sin(s*1.7)*.15,e=As*t,n=.1+s*.012+Math.sin(s*2.3)*.02,i=As*n,o=new xe(e,i,ma,3),r=o.attributes.position.array,a=4,c=(ma+1)*a,l=Math.PI*(.45+s*.08+Math.sin(s*.9)*.05),h=-l/2,u=(.25+s*.04+Math.sin(s*1.3)*.02)*Math.PI,f=s*.18-.45;for(let p=0;p<c;p++){const g=Math.floor(p/a),b=p%a,v=g/ma,M=h+v*l+f,E=(b/(a-1)-.5)*.05,T=u+E,S=As*.92;r[p*3]=Math.sin(M)*Math.sin(T)*S,r[p*3+1]=Math.cos(T)*S,r[p*3+2]=Math.cos(M)*Math.sin(T)*S}o.attributes.position.needsUpdate=!0,o.attributes.position.setUsage(Se),o.computeVertexNormals();const d=new Float32Array(c*3);o.setAttribute("color",new Ve(d,3)),o.attributes.color.setUsage(Se);const m=new Y({vertexColors:!0,transparent:!0,opacity:0,side:Dt,blending:ue,depthWrite:!1,fog:!1}),x=new I(o,m);Ss.add(x),Rh.push({mesh:x,mat:m,geo:o,colorArr:d,posArr:r,vertCount:c,rows:a,segments:ma,phase:s*1.7+Math.sin(s*.8)*.5,speed:.15+s*.05+Math.sin(s*2.1)*.03,colorShift:s*1.1,elevation:u,arcStart:h,arcSpan:l,azimuthOffset:f})}ht.add(Ss)}let to=0;function aw(s,t,e,n,i){if(!Ss)return;const o=i==="HEAVY_RAIN"||i==="LUMINOUS_STORM"||i==="FOG_BANK";let r=0;o||(e==="DEEP_NIGHT"?r=.25:e==="NIGHT"&&(r=.08));const a=r>to?.2:.4;if(to+=(r-to)*a*s,to<.005){Ss.visible=!1;return}Ss.visible=!0;const c=As*.92;for(let l=0;l<Rh.length;l++){const h=Rh[l],u=h.colorArr,f=h.posArr,d=h.segments,m=h.rows;h.mat.opacity=to*(.5+l*.05);for(let x=0;x<=d;x++){const p=x/d,g=Math.sin(p*6+t*h.speed+h.phase)*.5+.5,b=Math.sin(p*3-t*h.speed*.4+h.phase*1.3)*.5+.5,v=Math.sin(p*1.5+t*.07)*.5+.5,M=Math.sin(p*1.2+t*.05+h.phase*.7)*.5+.5,A=(g*.3+b*.25+v*.2+M*.25)*to,E=(p*3+t*.08+h.colorShift)%Jo.length,T=Math.floor(E),S=E-T,y=Jo[T%Jo.length],_=Jo[(T+1)%Jo.length],R=(y.r+(_.r-y.r)*S)*A,U=(y.g+(_.g-y.g)*S)*A,L=(y.b+(_.b-y.b)*S)*A,z=c*.025,V=Math.sin(p*5+t*.3+h.phase)*z+Math.sin(p*2.5-t*.15+h.phase*.6)*z*.5;for(let G=0;G<m;G++){const Z=x*m+G,W=G/(m-1);let rt;W<.33?rt=W*1.2:W>.67?rt=(1-W)*1.5:rt=.7+Math.sin(W*Math.PI)*.3,u[Z*3]=R*rt,u[Z*3+1]=U*rt,u[Z*3+2]=L*rt,h.arcStart+p*h.arcSpan+h.azimuthOffset;const ft=(W-.5)*.05,wt=h.elevation+ft,Ft=V*(.3+W*.7);f[Z*3+1]=Math.cos(wt)*c+Ft}}h.geo.attributes.color.needsUpdate=!0,h.geo.attributes.position.needsUpdate=!0}}const J={pos:new N(0,mc,0),vel:new N,onGround:!0};let ol=0,rl=0,Rp=0,al=65,sd=65,Qo=0,od=!0,cl=0,No=0,Ch=null,Ph=null,Ih=null,rd=1;function cw(s,t,e){Ch=s,Ph=t,Ih=e}let Lh=[],Dh=[],Uh=null;function lw(s,t){Lh=s,Dh=t}function hw(s){Uh=s}function uw(s){const t=Yy(),e=Ie.ShiftLeft||Ie.ShiftRight||Go;J.vel.x=t.x,J.vel.z=t.z,J.vel.y-=ay*s,(Ie.Space||xc)&&J.onGround&&(J.vel.y=Za,J.onGround=!1,Xy(!1),Ph&&Ph()),J.onGround||(cl=J.vel.y),J.pos.x+=J.vel.x*s,J.pos.y+=J.vel.y*s,J.pos.z+=J.vel.z*s;const n=Zt(J.pos.x,J.pos.z)+mc;if(J.pos.y<=n){if(J.pos.y=n,J.vel.y=0,!od&&cl<-3){const h=Math.min(Math.abs(cl)/Za,1);Qo=h*.15,Uh&&Uh(J.pos.x,J.pos.z,Math.floor(3+h*5)),Ih&&Ih(h)}J.onGround=!0}od=J.onGround,J.onGround?(J.vel.x*=jf,J.vel.z*=jf):(J.vel.x*=Kf,J.vel.z*=Kf);const i=.4;for(let h=0;h<Lh.length;h++){const u=Lh[h],f=J.pos.x-u.x,d=J.pos.z-u.z,m=f*f+d*d,x=.6+i;if(m<x*x&&m>.001){const p=1/Math.sqrt(m);J.pos.x=u.x+f*p*x,J.pos.z=u.z+d*p*x}}for(let h=0;h<Dh.length;h++){const u=Dh[h],f=J.pos.x-u.x,d=J.pos.z-u.z,m=f*f+d*d,x=u.colR+i;if(m<x*x&&m>.001){const p=1/Math.sqrt(m);J.pos.x=u.x+f*p*x,J.pos.z=u.z+d*p*x}}if(Math.sqrt(J.pos.x*J.pos.x+J.pos.z*J.pos.z)>ce){const h=Math.atan2(J.pos.z,J.pos.x);J.pos.x=Math.cos(h)*ce,J.pos.z=Math.sin(h)*ce}Tu.position.copy(J.pos);const a=Math.sqrt(t.x*t.x+t.z*t.z)>.5&&J.onGround;a?No=0:No+=s,rl+=((a?e?.06:.035:0)-rl)*s*6,a&&(ol+=s*(e?12:8));const l=Math.sin(ol)*rl;if(a&&Ch){const h=Math.sin(ol)>=0?1:-1;rd>0&&h<0&&Ch(e),rd=h}sd=e&&a?78:65,al+=(sd-al)*s*4,hn.fov=al,hn.updateProjectionMatrix(),Qo*=Math.pow(.04,s),Qo<.001&&(Qo=0),Rp=l-Qo}const ad=[{leaf:1332520,glow:2280567,core:4521898},{leaf:931880,glow:3390378,core:5636044},{leaf:1721376,glow:4508757,core:7864200},{leaf:1060912,glow:2267562,core:4513262},{leaf:1583172,glow:3377356,core:5618687}];function fw(s,t){const e=new ae,n=6+w()*10,i=.2+w()*.3,o=new K({color:5914672,roughness:.75,emissive:1718304,emissiveIntensity:.18}),r=new I(new vt(i*.4,i,n,6),o);r.position.y=n/2,r.castShadow=!0,e.add(r);const a=new K({color:2263125,emissive:F.leafGlow,emissiveIntensity:.5,transparent:!0,opacity:.25}),c=2+Math.floor(w()*3);for(let b=0;b<c;b++){const v=b/c*6.28+w()*.5,M=n*.4+w()*n*.4,A=new I(new vt(.008,.015,M,3),a);A.position.set(Math.cos(v)*i*.74,n*.15+M/2,Math.sin(v)*i*.74),e.add(A)}const l=new K({color:3812378,roughness:.85,emissive:1583636,emissiveIntensity:.12}),h=3+Math.floor(w()*3);for(let b=0;b<h;b++){const v=b/h*6.28+w()*.5,M=.8+w()*1.5,A=new I(new vt(.02,i*.3,M,4),l);A.position.set(Math.cos(v)*i*.5,.08,Math.sin(v)*i*.5),A.rotation.z=v<3.14?1.2+w()*.3:-(1.2+w()*.3),A.rotation.y=v,e.add(A)}const u=3+Math.floor(w()*4);for(let b=0;b<u;b++){const v=n*(.4+w()*.5),M=w()*Math.PI*2,A=1.5+w()*3,E=new I(new vt(.02,.06,A,4),o);E.position.set(Math.cos(M)*.3,v,Math.sin(M)*.3),E.rotation.z=(w()-.5)*1.2,E.rotation.y=M,E.castShadow=!0,e.add(E);const T=ad[Math.floor(w()*ad.length)],S=Math.cos(M)*(A*.5),y=v+w()*1.5,_=Math.sin(M)*(A*.5),R=1+w()*2,U=new K({color:T.core,emissive:T.core,emissiveIntensity:.7+w()*.5,transparent:!0,opacity:.55,roughness:.3}),L=new I(new Es(R*.3,1),U);L.position.set(S,y,_),e.add(L);const z=new K({color:T.leaf,emissive:T.glow,emissiveIntensity:.25+w()*.25,transparent:!0,opacity:.55,roughness:.7}),V=new I(new Es(R*.75,1),z);V.position.set(S+(w()-.5)*.4,y+(w()-.5)*.4,_+(w()-.5)*.4),V.scale.set(1+w()*.4,.65+w()*.5,1+w()*.4),V.castShadow=!0,V.receiveShadow=!0,e.add(V);const G=new K({color:T.glow,emissive:T.glow,emissiveIntensity:.12,transparent:!0,opacity:.08,depthWrite:!1}),Z=new I(new Es(R*1.2,1),G);if(Z.position.set(S,y,_),e.add(Z),w()<.35){const W=new K({color:2773040,emissive:1135904,emissiveIntensity:.08,transparent:!0,opacity:.5}),rt=.3+w()*.8,ft=new I(new vt(.008,.003,rt,3),W),wt=w()*A*.4;ft.position.set(Math.cos(M)*(.3+wt),v-rt/2-w()*.3,Math.sin(M)*(.3+wt)),e.add(ft)}}const f=new K({color:5911840,emissive:3349e3,emissiveIntensity:.06,roughness:.8}),d=Math.floor(w()*3);for(let b=0;b<d;b++){const v=1+w()*n*.4,M=w()*6.28,A=new I(new j(.08+w()*.08,5,3),f);A.scale.set(1.5,.3,1),A.position.set(Math.cos(M)*i*.8,v,Math.sin(M)*i*.8),A.rotation.y=-M,e.add(A)}const m=new K({color:F.leaf,emissive:F.leafGlow,emissiveIntensity:.06,transparent:!0,opacity:.07,depthWrite:!1}),x=new I(new j(3+w()*2,8,6),m);x.position.y=n*.65,e.add(x);const p=new K({color:1183752,roughness:.95}),g=new I(new j(i*2.5,6,3),p);return g.scale.set(1,.12,1),g.position.y=.02,e.add(g),e.position.set(s,0,t),ht.add(e),e}function dw(s,t){const e=new ae,n=.4+w()*1.2,i=w()*6.28,o=.8+w()*1.5,r=.5+w()*.8,a=new I(Tn.mushStem,new K({color:F.mushStem,roughness:.7,emissive:F.mushGlow,emissiveIntensity:.1}));a.position.y=.3,e.add(a);const c=new K({color:F.mushStem,emissive:F.mushGlow,emissiveIntensity:.15,roughness:.6}),l=new I(new be(.09,.012,4,8),c);l.position.y=.42,l.rotation.x=Math.PI/2,e.add(l);const h=new K({color:F.mushCap,emissive:F.mushGlow,emissiveIntensity:r,roughness:.3,transparent:!0,opacity:.9}),u=new I(Tn.mushCap,h);u.scale.set(1,.5,1),u.position.y=.55,u.castShadow=!0,u.receiveShadow=!0,e.add(u);const f=new K({color:6693546,emissive:F.mushGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,side:Dt});for(let _=0;_<8;_++){const R=_/8*6.28,U=new I(new xe(.35,.08),f);U.position.set(Math.cos(R)*.15,.48,Math.sin(R)*.15),U.rotation.y=-R,U.rotation.x=.1,e.add(U)}for(let _=0;_<4;_++){const R=new Y({color:16777215,transparent:!0,opacity:.9}),U=new I(Tn.mushDot,R),L=w()*6.28,z=.15+w()*.25;U.position.set(Math.cos(L)*z,.6+w()*.1,Math.sin(L)*z),e.add(U)}const d=new K({color:15663103,emissive:11197951,emissiveIntensity:.2,transparent:!0,opacity:.6,roughness:0,metalness:.5}),m=2+Math.floor(w()*2);for(let _=0;_<m;_++){const R=new I(new j(.015+w()*.015,4,3),d),U=w()*6.28,L=.1+w()*.2;R.position.set(Math.cos(U)*L,.63+w()*.08,Math.sin(U)*L),e.add(R)}const x=new K({color:4465322,emissive:F.mushGlow,emissiveIntensity:.15,transparent:!0,opacity:.35});for(let _=0;_<4;_++){const R=w()*6.28,U=.15+w()*.25,L=new I(new vt(.004,.002,U,3),x);L.position.set(Math.cos(R)*.12,.01,Math.sin(R)*.12),L.rotation.z=1.3*(R<3.14?1:-1),L.rotation.y=R,e.add(L)}const p=new K({color:F.mushCap,emissive:F.mushGlow,emissiveIntensity:r*.6,transparent:!0,opacity:.4}),g=new I(new be(.38,.01,4,12),p);g.position.y=.49,g.rotation.x=Math.PI/2,e.add(g);const b=new K({color:F.mushStem,emissive:F.mushGlow,emissiveIntensity:.08,roughness:.7}),v=new I(new j(.08,5,3),b);v.scale.set(1,.5,1),v.position.y=.04,e.add(v);const M=new K({color:1708040,roughness:.95});for(let _=0;_<3;_++){const R=w()*6.28,U=.1+w()*.12,L=new I(new j(.008+w()*.008,3,3),M);L.position.set(Math.cos(R)*U,.005,Math.sin(R)*U),e.add(L)}const A=new Y({color:F.mushGlow,transparent:!0,opacity:.2});for(let _=0;_<4;_++){const R=new I(new j(.006,3,3),A);R.position.set((w()-.5)*.2,.35+w()*.1,(w()-.5)*.2),e.add(R)}const E=new K({color:11167453,emissive:F.mushGlow,emissiveIntensity:r*.3,roughness:.5}),T=3+Math.floor(w()*3);for(let _=0;_<T;_++){const R=w()*6.28,U=w()*.25,L=new I(new j(.015+w()*.015,3,3),E);L.position.set(Math.cos(R)*U,.58+w()*.06,Math.sin(R)*U),e.add(L)}const S=new K({color:657416,transparent:!0,opacity:.2,roughness:.95,side:Dt}),y=new I(new qe(.18,8),S);return y.rotation.x=-Math.PI/2,y.position.y=.005,e.add(y),e.scale.setScalar(n),e.position.set(s,0,t),ht.add(e),{group:e,capMat:h,phase:i,speed:o,base:r,x:s,z:t}}function pw(s,t){const e=new ae,n=w()*6.28,i=new K({color:F.crystal,emissive:F.crystalCore,emissiveIntensity:1.5,transparent:!0,opacity:.7,roughness:.1,metalness:.5}),o=new I(Tn.crystal,i);o.position.y=.9,o.castShadow=!0,e.add(o);for(let v=0;v<3;v++){const M=new I(Tn.crystalSm,i),A=v/3*6.28+w()*.5;M.position.set(Math.cos(A)*.4,.45,Math.sin(A)*.4),M.rotation.z=(w()-.5)*.8,M.castShadow=!0,e.add(M)}const r=new K({color:1710626,roughness:.9,metalness:.1}),a=3+Math.floor(w()*3);for(let v=0;v<a;v++){const M=w()*6.28,A=.2+w()*.5,E=.08+w()*.12,T=new I(new j(E,4,3),r);T.scale.set(1+w()*.5,.5+w()*.4,1+w()*.5),T.position.set(Math.cos(M)*A,E*.3,Math.sin(M)*A),T.rotation.set(w(),w(),w()),e.add(T)}const c=new Y({color:F.crystalCore,transparent:!0,opacity:.5});for(let v=0;v<3;v++){const M=.4+w()*.8,A=new I(new vt(.008,.008,M,3),c);A.position.set((w()-.5)*.15,.5+w()*.7,(w()-.5)*.15),A.rotation.set((w()-.5)*.8,(w()-.5)*.5,(w()-.5)*.8),e.add(A)}const l=new Y({color:11206638,transparent:!0,opacity:.6});for(let v=0;v<5;v++){const M=new I(new j(.012,3,3),l);M.position.set((w()-.5)*1,.3+w()*1.5,(w()-.5)*1),e.add(M)}const h=new K({color:F.crystal,emissive:F.crystalCore,emissiveIntensity:.8,transparent:!0,opacity:.5});for(let v=0;v<4;v++){const M=w()*6.28,A=.3+w()*.3,E=new I(new vt(0,.015,.12+w()*.1,3),h);E.position.set(Math.cos(M)*A,.06+w()*.1,Math.sin(M)*A),E.rotation.z=(w()-.5)*.6,e.add(E)}const u=new K({color:3364198,emissive:1122867,emissiveIntensity:.05,roughness:.9,side:Dt});for(let v=0;v<2;v++){const M=w()*6.28,A=.2+w()*.3,E=new I(new qe(.04+w()*.03,5),u);E.rotation.x=-Math.PI/2+w()*.4,E.position.set(Math.cos(M)*A,.05,Math.sin(M)*A),e.add(E)}const f=new Y({color:F.crystalCore,transparent:!0,opacity:.2});for(let v=0;v<2;v++){const M=new I(new vt(.003,.003,.6+w()*.4,3),f);M.position.set((w()-.5)*.3,.7+w()*.5,(w()-.5)*.3),M.rotation.set((w()-.5)*1,w(),(w()-.5)*1),e.add(M)}const d=new K({color:1135940,emissive:1127202,emissiveIntensity:.3,transparent:!0,opacity:.25});for(let v=0;v<4;v++){const M=new I(new j(.02+w()*.02,3,3),d);M.position.set((w()-.5)*.15,.4+w()*.6,(w()-.5)*.15),e.add(M)}const m=new Y({color:11206638,transparent:!0,opacity:.06}),x=new I(new be(.35,.02,4,10),m);x.position.y=.6,x.rotation.x=Math.PI/2+w()*.3,e.add(x);const p=new Y({color:F.crystal,transparent:!0,opacity:.06,side:Dt}),g=new I(new qe(.8,8),p);g.rotation.x=-Math.PI/2,g.position.y=.01,e.add(g),e.position.set(s,0,t),ht.add(e);const b=new Bo(F.crystal,.5,8);return b.position.set(s,1.2,t),ht.add(b),{group:e,mat:i,phase:n,x:s,z:t,light:b}}function mw(s,t,e,n,i){const o=new Te,r=[],a=[],c=[],l=n||20,h=new st(i?i[0]:663568),u=new st(i?i[1]:1388056),f=new st(i?i[2]:2777141),d=new st(i?i[3]:4517461),m=new st(i?i[4]:7864268),x=new st(i?i[5]:14548838),p=new st;for(let S=0;S<l;S++){const y=w()*6.28,_=w()*e,R=Math.cos(y)*_,U=Math.sin(y)*_,L=.25+w()*.65,z=.03+w()*.05,V=(w()-.5)*.2,G=(w()-.5)*.2,Z=(w()-.5)*.12,W=w()<.5?h:u,rt=w(),ft=rt<.4?d:rt<.7?m:x,wt=L*.35,Ft=L*.7,jt=V*.3,tt=V*.7,ct=G*.3,St=G*.7;r.push(R-z,.01,U),r.push(R+z,.01,U),r.push(R+jt-z*.9,wt,U+ct),c.push(0,0,.35),a.push(W.r,W.g,W.b,W.r,W.g,W.b),p.copy(W).lerp(f,.4),a.push(p.r,p.g,p.b),r.push(R+z,.01,U),r.push(R+jt+z*.9,wt,U+ct),r.push(R+jt-z*.9,wt,U+ct),c.push(0,.35,.35),a.push(W.r,W.g,W.b),p.copy(W).lerp(f,.4),a.push(p.r,p.g,p.b,p.r,p.g,p.b);const dt=z*.65;r.push(R+jt-z*.9,wt,U+ct),r.push(R+jt+z*.9,wt,U+ct),r.push(R+tt-dt,Ft,U+St+Z),c.push(.35,.35,.7),p.copy(W).lerp(f,.4),a.push(p.r,p.g,p.b,p.r,p.g,p.b),p.copy(f).lerp(ft,.3),a.push(p.r,p.g,p.b),r.push(R+jt+z*.9,wt,U+ct),r.push(R+tt+dt,Ft,U+St+Z),r.push(R+tt-dt,Ft,U+St+Z),c.push(.35,.7,.7),p.copy(W).lerp(f,.4),a.push(p.r,p.g,p.b),p.copy(f).lerp(ft,.3),a.push(p.r,p.g,p.b,p.r,p.g,p.b),r.push(R+tt-dt,Ft,U+St+Z),r.push(R+tt+dt,Ft,U+St+Z),r.push(R+V+Z*2,L,U+G+Z*1.5),c.push(.7,.7,1),p.copy(f).lerp(ft,.3),a.push(p.r,p.g,p.b,p.r,p.g,p.b),a.push(ft.r,ft.g,ft.b)}const g=new st(i?i[6]:1725736),b=new st(i?i[7]:3385941),v=Math.floor(l*.3);for(let S=0;S<v;S++){const y=w()*6.28,_=w()*e*.9,R=Math.cos(y)*_,U=Math.sin(y)*_,L=.02+w()*.03;r.push(R-L,.01,U),r.push(R+L,.01,U),r.push(R,.03+w()*.02,U+L),c.push(0,0,.05),a.push(g.r,g.g,g.b),a.push(g.r,g.g,g.b),a.push(b.r,b.g,b.b)}const M=new Ht(r,3);M.setUsage(Se),o.setAttribute("position",M),o.setAttribute("color",new Ht(a,3)),o.setAttribute("bladeHeight",new Ht(c,1)),o.computeVertexNormals();const A=new Float32Array(r.length);A.set(M.array);const E=new K({vertexColors:!0,roughness:.7,side:Dt,emissive:i?i[8]:4521830,emissiveIntensity:.08}),T=new I(o,E);return T.position.set(s,0,t),ht.add(T),{mesh:T,geo:o,cx:s,cz:t,origPos:A}}function gw(s,t,e,n,i,o,r){const a=s.geo.attributes.position.array,c=s.geo.attributes.bladeHeight.array,l=s.origPos,h=s.cx,u=s.cz,f=o-h,d=r-u;for(let m=0,x=c.length;m<x;m++){const p=c[m];if(p<.01)continue;const g=m*3,b=l[g],v=l[g+1],M=l[g+2],A=(Math.sin(t*.7+(h+b)*.05)*.06+Math.sin(t*1.3+(u+M)*.08)*.03)*e*p*p,E=(Math.sin(t*.9+(u+M)*.06)*.04+Math.sin(t*1.7+(h+b)*.04)*.02)*e*p*p;let T=A+n*p,S=E+i*p;const y=b-f,_=M-d,R=y*y+_*_;if(R<1.44){const U=1-Math.sqrt(R)/1.2,L=U*U*.7,z=Math.atan2(y,_);T+=Math.sin(z)*L*p*.15,S+=Math.cos(z)*L*p*.15,a[g+1]=v*(1-L*p)}else a[g+1]=v;a[g]=b+T,a[g+2]=M+S}s.geo.attributes.position.needsUpdate=!0}function xw(s,t){const e=new ae,n=new K({color:F.fern,emissive:F.fernGlow,emissiveIntensity:.08,roughness:.7,side:Dt}),i=3+Math.floor(w()*2),o=.5+w()*.7,r=new K({color:1708552,roughness:.95}),a=new I(new j(.06,5,3),r);a.scale.set(1.5,.5,1.5),a.position.y=.02,e.add(a);for(let g=0;g<3;g++){const b=w()*6.28,v=new I(new vt(.003,.002,.08,3),r);v.position.set(Math.cos(b)*.06,.01,Math.sin(b)*.06),v.rotation.z=(b<3.14?1:-1)*1.2,v.rotation.y=b,e.add(v)}for(let g=0;g<i;g++){const b=g/i*6.28+w()*.3,v=new I(new vt(.004,.006,.55,3),new K({color:1721632,roughness:.8}));v.position.set(Math.cos(b)*.15,.25,Math.sin(b)*.15),v.rotation.y=-b,v.rotation.x=-.6-w()*.4,e.add(v);const M=new I(new xe(.12,.6,1,3),n);M.position.set(Math.cos(b)*.15,.25,Math.sin(b)*.15),M.rotation.y=-b,M.rotation.x=-.6-w()*.4,e.add(M);for(let E=0;E<6;E++){const T=new I(new xe(.07,.06,1,1),n),S=.06+E*.08,y=E%2===0?1:-1;T.position.set(Math.cos(b)*(.15+.06),S,Math.sin(b)*(.15+.06*y)),T.rotation.y=-b,T.rotation.x=-.8,T.rotation.z=y*.5,e.add(T)}const A=new K({color:8939042,emissive:4469521,emissiveIntensity:.1});for(let E=0;E<3;E++){const T=new I(new j(.008,3,3),A),S=.12+E*.12;T.position.set(Math.cos(b)*(.15+.02),S-.01,Math.sin(b)*(.15+.02)),e.add(T)}}const c=new K({color:F.fernGlow,emissive:F.fernGlow,emissiveIntensity:.3}),l=new I(new j(.04,4,3),c);l.position.y=.35,e.add(l);const h=new I(new vt(.006,.003,.06,3),c);h.position.set(.02,.37,0),h.rotation.z=-.8,e.add(h);const u=new K({color:15663103,emissive:8960989,emissiveIntensity:.1,transparent:!0,opacity:.5,roughness:0,metalness:.5});for(let g=0;g<3;g++){const b=w()*6.28,v=w()*.2,M=new I(new j(.006+w()*.005,3,3),u);M.position.set(Math.cos(b)*v,.12+w()*.2,Math.sin(b)*v),e.add(M)}const f=new K({color:3811856,roughness:.9,side:Dt,transparent:!0,opacity:.6}),d=new I(new xe(.1,.4,1,2),f),m=w()*6.28;d.position.set(Math.cos(m)*.12,.05,Math.sin(m)*.12),d.rotation.x=-1.3,d.rotation.y=m,e.add(d);const x=new Y({color:2768928,transparent:!0,opacity:.3});for(let g=0;g<4;g++){const b=new I(new vt(.001,.001,.015,3),x);b.position.set((w()-.5)*.08,.08+w()*.15,(w()-.5)*.08),b.rotation.z=(w()-.5)*1.5,e.add(b)}const p=new K({color:1708552,roughness:.95});for(let g=0;g<3;g++){const b=new I(new j(.006,3,3),p);b.position.set((w()-.5)*.1,.005,(w()-.5)*.1),e.add(b)}return e.scale.setScalar(o),e.position.set(s,0,t),ht.add(e),{group:e,phase:w()*6.28}}function _w(s,t){const e=new ae,n=.25+w()*.4,i=new K({color:F.flowerStem,roughness:.8}),o=new I(new vt(.01,.015,n,4),i);o.position.y=n/2,e.add(o);for(let S=0;S<2;S++){const y=new I(new Wn(.004,.012,3),i);y.position.set(.012,n*.25+S*n*.25,0),y.rotation.z=-1.2,e.add(y)}const r=new K({color:F.fern,roughness:.7,side:Dt}),a=new I(new xe(.06,.04),r);a.position.set(.03,n*.3,0),a.rotation.z=-.5,e.add(a);const c=new I(new xe(.05,.035),r);c.position.set(-.025,n*.5,.01),c.rotation.z=.6,e.add(c);const l=new K({color:1728560,roughness:.7,side:Dt});for(let S=0;S<5;S++){const y=S/5*6.28+.3,_=new I(new xe(.025,.02),l);_.position.set(Math.cos(y)*.025,n-.005,Math.sin(y)*.025),_.rotation.x=-1.2,_.rotation.y=-y,e.add(_)}const h=new K({color:F.flower,emissive:F.flowerGlow,emissiveIntensity:.4+w()*.4,transparent:!0,opacity:.85,side:Dt});for(let S=0;S<6;S++){const y=S/6*6.28,_=new I(new xe(.05,.04),h);_.position.set(Math.cos(y)*.03,n+.01,Math.sin(y)*.03),_.rotation.x=-.8,_.rotation.y=-y,e.add(_)}const u=new K({color:16777215,emissive:F.flowerGlow,emissiveIntensity:1.2}),f=new I(new j(.02,4,3),u);f.position.y=n+.02,e.add(f);const d=new Y({color:16777130,transparent:!0,opacity:.7}),m=new Y({color:16772676});for(let S=0;S<3;S++){const y=S/3*6.28+.5,_=new I(new vt(.002,.002,.025,3),d);_.position.set(Math.cos(y)*.012,n+.03,Math.sin(y)*.012),e.add(_);const R=new I(new j(.005,3,3),m);R.position.set(Math.cos(y)*.012,n+.045,Math.sin(y)*.012),e.add(R)}const x=new Y({color:16777164,transparent:!0,opacity:.3});for(let S=0;S<2;S++){const y=new I(new j(.006,3,3),x);y.position.set((w()-.5)*.04,n+.06+w()*.04,(w()-.5)*.04),e.add(y)}const p=new K({color:16772778,emissive:16768324,emissiveIntensity:.2,transparent:!0,opacity:.5,roughness:0,metalness:.4}),g=new I(new j(.006,3,3),p);g.position.set(.005,n+.005,.005),e.add(g);const b=new Y({color:15662984}),v=new I(new vt(.002,.002,.03,3),b);v.position.y=n+.035,e.add(v);const M=new I(new j(.005,3,3),b);M.position.y=n+.055,e.add(M);const A=new K({color:1725728,roughness:.7}),E=new I(new vt(.015,.02,.02,5),A);E.position.y=n-.01,e.add(E);const T=new Y({color:16777215,transparent:!0,opacity:.35});for(let S=0;S<4;S++){const y=S/4*6.28+.3,_=new I(new j(.004,3,3),T);_.position.set(Math.cos(y)*.045,n+.005,Math.sin(y)*.045),e.add(_)}return e.position.set(s,0,t),ht.add(e),{group:e,petalMat:h,phase:w()*6.28,baseH:n}}function Mw(s,t){const e=new ae,n=new K({color:F.reed,emissive:F.reedTip,emissiveIntensity:.05,roughness:.7}),i=new K({color:F.reedTip,emissive:F.reedTip,emissiveIntensity:.15}),o=new K({color:1709328,roughness:.95}),r=new I(new j(.08,5,3),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=3+Math.floor(w()*4),c=new K({color:F.reed,roughness:.7,side:Dt});for(let d=0;d<a;d++){const m=.6+w()*1,x=(w()-.5)*.2,p=(w()-.5)*.2,g=new I(new vt(.008,.015,m,4),n);g.position.set(x,m/2,p),e.add(g);const b=2+Math.floor(w()*2),v=new K({color:2771488,roughness:.7});for(let E=0;E<b;E++){const T=m*.2+E*m*.25,S=new I(new be(.012,.004,4,6),v);S.position.set(x,T,p),S.rotation.x=Math.PI/2,e.add(S)}if(w()<.7){const E=.1+w()*.15,T=w()*6.28,S=new I(new xe(.02,E),c);S.position.set(x+Math.cos(T)*.02,m*.4,p+Math.sin(T)*.02),S.rotation.y=-T,S.rotation.x=-.5-w()*.4,e.add(S)}const M=new I(new j(.025,4,3),i);M.scale.set(.8,1.5,.8),M.position.set(x,m+.02,p),e.add(M);const A=new Y({color:F.reedTip,transparent:!0,opacity:.4});for(let E=0;E<3;E++){const T=E/3*6.28+w()*.5,S=new I(new vt(.002,.001,.04,3),A);S.position.set(x+Math.cos(T)*.015,m+.05,p+Math.sin(T)*.015),S.rotation.z=(w()-.5)*.4,e.add(S)}}e.position.set(s,0,t),ht.add(e);const l=new K({color:4864536,roughness:.9,side:Dt,transparent:!0,opacity:.5});for(let d=0;d<2;d++){w()*6.28;const m=(w()-.5)*.15,x=new I(new xe(.025,.02),l);x.position.set(m,.2+d*.25,(w()-.5)*.1),x.rotation.set(w()*.5,w(),w()*.5),e.add(x)}const h=new Y({color:15654348,transparent:!0,opacity:.25});for(let d=0;d<3;d++){const m=new I(new j(.005,3,3),h);m.position.set((w()-.5)*.15,.8+w()*.6,(w()-.5)*.15),e.add(m)}const u=new K({color:2241312,roughness:.9,transparent:!0,opacity:.2}),f=new I(new be(.1,.008,4,8),u);return f.rotation.x=Math.PI/2,f.position.y=.03,e.add(f),{group:e,phase:w()*6.28,swayAmp:.03+w()*.04}}let un=null;const vo=[],sn=new ge,Qa=new st,Cp=new st(F.dandSeed);function vw(s){const t=new Y({color:16777215,transparent:!0,opacity:1});un=new Qi(Tn.dandSeed,t,s),un.instanceMatrix.setUsage(Se),un.instanceColor=new mi(new Float32Array(s*3),3),un.instanceColor.setUsage(Se),sn.scale.setScalar(0),sn.updateMatrix();for(let e=0;e<s;e++)un.setMatrixAt(e,sn.matrix),Qa.copy(Cp),un.setColorAt(e,Qa),vo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,drift:0});un.count=s,un.frustumCulled=!1,ht.add(un)}function Pp(s,t,e){let n=null;for(let o=0;o<vo.length;o++)if(!vo[o].active){n=vo[o];break}if(!n)return;n.x=s+(Math.random()-.5)*.1,n.y=t,n.z=e+(Math.random()-.5)*.1;const i=Math.random()*6.28;n.vx=Math.cos(i)*.5+Math.random()*.3,n.vy=.6+Math.random()*.8,n.vz=Math.sin(i)*.5,n.life=4+Math.random()*5,n.max=n.life,n.active=!0,n.drift=Math.random()*6.28}let Ip=0,Lp=0,Dp=0;function yw(s,t,e){Ip=s,Lp=t,Dp=e}function ww(s,t){let e=!1;for(let n=0;n<vo.length;n++){const i=vo[n];if(!i.active){sn.position.set(0,-100,0),sn.scale.setScalar(0),sn.updateMatrix(),un.setMatrixAt(n,sn.matrix);continue}if(i.life-=s,i.life<=0){i.active=!1,sn.position.set(0,-100,0),sn.scale.setScalar(0),sn.updateMatrix(),un.setMatrixAt(n,sn.matrix);continue}i.drift+=(Math.random()-.5)*1.5*s,i.vx+=Math.sin(i.drift)*.3*s,i.vz+=Math.cos(i.drift)*.2*s,i.vx+=Ip*.5*s,i.vz+=Lp*.5*s,i.vy+=(.15+Dp*.1-i.vy)*s*.5,i.vx*=.998,i.vy*=.998,i.vz*=.998,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s;const r=i.life/i.max*.7*(.6+Math.sin(t*2+n)*.4),a=.8+Math.sin(t*3+n*.5)*.3;sn.position.set(i.x,i.y,i.z),sn.scale.setScalar(a),sn.updateMatrix(),un.setMatrixAt(n,sn.matrix),Qa.copy(Cp).multiplyScalar(r),un.setColorAt(n,Qa),e=!0}un.instanceMatrix.needsUpdate=!0,e&&(un.instanceColor.needsUpdate=!0)}function Sw(s,t){const e=new ae,n=.35+w()*.45,i=new K({color:2777128,roughness:.7,side:Dt}),o=3+Math.floor(w()*2);for(let v=0;v<o;v++){const M=v/o*6.28+w()*.3,A=new I(new xe(.08,.035),i);A.position.set(Math.cos(M)*.05,.02,Math.sin(M)*.05),A.rotation.x=-1.4,A.rotation.y=-M,e.add(A)}const r=new K({color:F.dandStem,roughness:.8}),a=new I(new vt(.008,.012,n,4),r);a.position.y=n/2,e.add(a);const c=new Y({color:14540236,transparent:!0,opacity:.3});for(let v=0;v<4;v++){const M=n*.2+v*n*.18,A=new I(new vt(.002,.001,.02,3),c);A.position.set(.01,M,0),A.rotation.z=-.8,e.add(A)}const l=new K({color:F.fern,roughness:.7,side:Dt}),h=new I(new xe(.07,.03),l);h.position.set(.03,n*.15,0),h.rotation.z=-.4,e.add(h);const u=new K({color:F.dandHead,emissive:F.dandSeedGlow,emissiveIntensity:.2,transparent:!0,opacity:.85}),f=new I(new j(.07,6,5),u);f.position.y=n+.05,e.add(f);const d=new K({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.5,roughness:0,metalness:.5}),m=new I(new j(.012,4,3),d);m.position.set(.04,n+.07,.03),e.add(m);const x=new Y({color:F.dandSeed,transparent:!0,opacity:.7});for(let v=0;v<8;v++){const M=v/8*6.28+w()*.2,A=new I(new Wn(.015,.05,3),x);A.position.set(Math.cos(M)*.06,n+.05+w()*.04,Math.sin(M)*.06),A.rotation.x=(w()-.5)*.6,A.rotation.z=(w()-.5)*.6,e.add(A);const E=new Y({color:16777215,transparent:!0,opacity:.3}),T=new I(new vt(.001,.001,.03,3),E);T.position.set(Math.cos(M)*.08,n+.08,Math.sin(M)*.08),T.rotation.set((w()-.5)*.5,0,(w()-.5)*.5),e.add(T);const S=new Y({color:15658717,transparent:!0,opacity:.15});for(let y=0;y<2;y++){const _=M+(y-.5)*.5,R=new I(new vt(8e-4,8e-4,.025,3),S);R.position.set(Math.cos(_)*.075,n+.09,Math.sin(_)*.075),R.rotation.set((w()-.5)*.8,0,(w()-.5)*.8),e.add(R)}}const p=new K({color:3811856,roughness:.9});for(let v=0;v<4;v++){const M=v/4*6.28+w()*.5,A=new I(new j(.005,3,3),p);A.scale.set(.6,1.5,.6),A.position.set(Math.cos(M)*.04,n+.04,Math.sin(M)*.04),e.add(A)}const g=new Y({color:1716240,transparent:!0,opacity:.15});for(let v=0;v<3;v++){const M=v/3*6.28,A=new I(new vt(.001,.001,n*.7,3),g);A.position.set(Math.cos(M)*.01,n*.35,Math.sin(M)*.01),e.add(A)}const b=new Y({color:13426107,transparent:!0,opacity:.2});for(let v=0;v<5;v++){const M=n*.1+w()*n*.7,A=w()*6.28,E=new I(new vt(8e-4,8e-4,.012,3),b);E.position.set(Math.cos(A)*.012,M,Math.sin(A)*.012),E.rotation.z=A<3.14?-.8:.8,E.rotation.y=A,e.add(E)}return e.position.set(s,0,t),ht.add(e),{group:e,headMat:u,x:s,z:t,h:n,dispersed:!1,phase:w()*6.28,seedCount:8,regrowTimer:0}}function bw(s,t,e,n){for(let i=0;i<s.length;i++){const o=s[i];if(o.dispersed){if(o.regrowTimer-=t,o.regrowTimer<=0){o.dispersed=!1;for(let r=2;r<o.group.children.length;r++)o.group.children[r].visible=!0}o.group.rotation.z=Math.sin(e*.9+o.phase)*.02}else{const r=o.x-n.x,a=o.z-n.z;if(r*r+a*a<1.2){o.dispersed=!0;for(let c=0;c<8;c++)Pp(o.x,o.h+.05,o.z);for(let c=2;c<o.group.children.length;c++)o.group.children[c].visible=!1;o.regrowTimer=15+Math.random()*10}else o.group.rotation.z=Math.sin(e*.9+o.phase)*.04,o.headMat.emissiveIntensity=.15+Math.sin(e*1.2+o.phase)*.1}}}function Tw(s,t){const e=new ae,n=1+w()*.8,i=.25+w()*.15,o=new K({color:F.thornStem,roughness:.8,emissive:662032,emissiveIntensity:.1}),r=new I(new vt(.04,.07,n,5),o);r.position.y=n/2,e.add(r);const a=new K({color:F.thornSpike,roughness:.6}),c=4+Math.floor(w()*3);for(let M=0;M<c;M++){const A=n*.15+M/c*n*.6,E=M/c*6.28+w()*1,T=new I(new Wn(.015,.08+w()*.04,3),a);T.position.set(Math.cos(E)*.06,A,Math.sin(E)*.06),T.rotation.z=(E<3.14?1.3:-1.3)+w()*.2,T.rotation.y=E,e.add(T)}const l=new K({color:F.thornOrb,emissive:F.thornOrbGlow,emissiveIntensity:.8,transparent:!0,opacity:.35,roughness:.1,metalness:.3}),h=new I(new j(i,12,10),l);h.position.y=n+i*.5,e.add(h);const u=new K({color:16777164,emissive:F.thornOrbGlow,emissiveIntensity:1.2,transparent:!0,opacity:.6,roughness:0,metalness:.1}),f=new I(new j(i*.35,8,6),u);f.position.y=n+i*.5,e.add(f);const d=new Y({color:F.thornOrbGlow,transparent:!0,opacity:.06,blending:ue,depthWrite:!1}),m=new I(new j(i*2,8,6),d);m.position.y=n+i*.5,e.add(m);const x=new K({color:F.thornSpike,emissive:F.thornOrbGlow,emissiveIntensity:.3,roughness:.5}),p=6+Math.floor(w()*3);for(let M=0;M<p;M++){const A=M/p*6.28+w()*.3,E=(w()-.5)*1.2,T=.3+w()*.3,S=new I(new Wn(.018,T,4),x);S.position.set(Math.cos(A)*i*.8,n+i*.5+Math.sin(E)*i*.5,Math.sin(A)*i*.8),S.rotation.z=-E+(A<3.14?1.4:-1.4),S.rotation.y=A,e.add(S)}const g=new K({color:F.thornPetal,emissive:3344920,emissiveIntensity:.15,transparent:!0,opacity:.7,roughness:.6,side:Dt}),b=4+Math.floor(w()*2);for(let M=0;M<b;M++){const A=M/b*6.28+w()*.3,E=.2+w()*.15,T=new I(new xe(E,E*1.5),g);T.position.set(Math.cos(A)*(i+.05),n+i*.3-w()*.1,Math.sin(A)*(i+.05)),T.rotation.y=-A,T.rotation.x=-.4-w()*.3,e.add(T)}const v=new K({color:1718296,emissive:662026,emissiveIntensity:.05,side:Dt});for(let M=0;M<2;M++){const A=w()*6.28,E=new I(new xe(.15,.25),v);E.position.set(Math.cos(A)*.12,n*.3,Math.sin(A)*.12),E.rotation.y=-A,E.rotation.x=-.8,e.add(E)}return e.position.set(s,0,t),ht.add(e),{group:e,orbMat:l,hazeMat:d,phase:w()*6.28,x:s,z:t}}function Ew(s,t){const e=new ae,n=2+Math.floor(w()*2),i=new K({color:1710128,roughness:.85,emissive:F.helixStem,emissiveIntensity:.1}),o=new I(new j(.18,8,6),i);o.scale.set(1.2,.5,1.2),o.position.y=.05,e.add(o);const r=[];for(let l=0;l<n;l++){const h=1.5+w()*1,u=.15+w()*.15,f=1.5+w()*1.5,d=w()*6.28,m=[],x=16;for(let U=0;U<=x;U++){const L=U/x,z=d+L*f*6.28,V=u*(.3+L*.7);m.push(new N(Math.cos(z)*V,L*h,Math.sin(z)*V))}const p=new Ir(m),g=new K({color:F.helixStem,emissive:F.helixNode,emissiveIntensity:.12,roughness:.7}),b=new I(new wn(p,20,.025+w()*.01,5,!1),g);e.add(b);const v=.1+w()*.08,A=w()<.5?new _u(v,0):new xu(v,0),E=new K({color:F.helixPod,emissive:F.helixPodGlow,emissiveIntensity:.5+w()*.3,transparent:!0,opacity:.65,roughness:.2,metalness:.2}),T=new I(A,E),S=p.getPoint(1);T.position.copy(S),T.rotation.set(w()*3,w()*3,w()*3),e.add(T),r.push(E);const y=new I(new j(v*2.5,6,4),new Y({color:F.helixPodGlow,transparent:!0,opacity:.05,blending:ue,depthWrite:!1}));y.position.copy(S),e.add(y);const _=1+Math.floor(w()*2);for(let U=0;U<_;U++){const L=.3+w()*.5,z=p.getPoint(L),V=new K({color:F.helixRing,emissive:F.helixPodGlow,emissiveIntensity:.2,transparent:!0,opacity:.45,roughness:.3}),G=new I(new be(.1+w()*.08,.008,6,12),V);G.position.copy(z),G.rotation.set(w()*3,w()*3,w()*3),e.add(G)}const R=2+Math.floor(w()*2);for(let U=0;U<R;U++){const L=.2+U/R*.6,z=p.getPoint(L),V=new K({color:F.helixNode,emissive:F.helixPodGlow,emissiveIntensity:.35,transparent:!0,opacity:.5}),G=new I(new j(.025+w()*.015,5,4),V);G.position.copy(z),e.add(G)}}const a=new K({color:F.helixStem,emissive:F.helixNode,emissiveIntensity:.06,roughness:.8}),c=2+Math.floor(w()*2);for(let l=0;l<c;l++){const h=l/c*6.28+w()*.5,u=.3+w()*.4,f=new I(new vt(.006,.015,u,3),a);f.position.set(Math.cos(h)*.12,u*.3,Math.sin(h)*.12),f.rotation.z=(h<3.14?.8:-.8)+w()*.3,f.rotation.y=h,e.add(f)}return e.position.set(s,0,t),ht.add(e),{group:e,podMats:r,phase:w()*6.28}}function Aw(s,t){const e=new ae,n=.25+w()*.1,i=new K({color:1718309,roughness:.85,emissive:662032,emissiveIntensity:.06});for(let f=0;f<3;f++){const d=f/3*6.28+w()*.5,m=new I(new vt(.01,.035,.25+w()*.15,4),i);m.position.set(Math.cos(d)*n*.6,.06,Math.sin(d)*n*.6),m.rotation.z=d<3.14?1:-1,m.rotation.y=d,e.add(m)}const o=new K({color:F.snapBody,emissive:F.snapBodyGlow,emissiveIntensity:.4,transparent:!0,opacity:.7,roughness:.4,metalness:.1}),r=new I(new j(n,10,8),o);r.position.y=n+.05,r.scale.set(1,.85,1),e.add(r);const a=new K({color:1730116,emissive:F.snapBodyGlow,emissiveIntensity:.25,transparent:!0,opacity:.6}),c=new I(new be(n*.45,.02,6,12),a);c.position.y=n*1.7,c.rotation.x=Math.PI/2,e.add(c);const l=5+Math.floor(w()*3),h=[],u=[];for(let f=0;f<l;f++){const d=f/l*6.28+w()*.3,m=w()*6.28,x=3+Math.floor(w()*2),p=.2+w()*.1,g=[],b=new ge;b.position.set(Math.cos(d)*n*.6,n*1.4,Math.sin(d)*n*.6),b.rotation.y=d,e.add(b);let v=b;for(let T=0;T<x;T++){const S=T/x,y=.02*(1-S*.6),_=new K({color:F.snapFrond,emissive:F.snapBodyGlow,emissiveIntensity:.08+S*.15,roughness:.6}),R=new I(new vt(y*.7,y,p,4),_);R.position.y=T===0?0:p,R.geometry.translate(0,p/2,0),v.add(R),g.push(R),v=R}const M=new K({color:F.snapTip,emissive:F.snapTipGlow,emissiveIntensity:.6,transparent:!0,opacity:.7,roughness:.2}),A=new I(new j(.025+w()*.015,5,4),M);A.position.y=p,v.add(A),u.push(M);const E=new I(new j(.06,4,3),new Y({color:F.snapTipGlow,transparent:!0,opacity:.04,blending:ue,depthWrite:!1}));A.add(E),h.push({segments:g,baseAngle:d,phaseOffset:m,segLen:p})}return e.position.set(s,0,t),ht.add(e),{group:e,body:r,bodyMat:o,tipMats:u,fronds:h,phase:w()*6.28,x:s,z:t}}function Rw(s,t,e,n){for(let i=0;i<s.length;i++){const o=s[i],r=Math.sin(e*1.5+o.phase)*.08;o.body.scale.set(1+r,.85+r*.5,1+r),o.bodyMat.emissiveIntensity=(.3+Math.sin(e*2+o.phase)*.15)*n;for(let a=0;a<o.fronds.length;a++){const c=o.fronds[a],l=1.2+a%3*.3;for(let h=0;h<c.segments.length;h++){const u=c.segments[h],f=.15+h*.12,d=Math.sin(e*l+c.phaseOffset+h*.5)*f,m=Math.cos(e*l*.7+c.phaseOffset+h*.3)*f*.6;u.rotation.z=d,u.rotation.x=m}}for(let a=0;a<o.tipMats.length;a++){const c=Math.sin(e*2.5+o.phase+a*1.2)*.5+.5;o.tipMats[a].emissiveIntensity=(.4+c*.4)*n}}}function Cw(s,t,e){const n=new ae,i=new K({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:.8,transparent:!0,opacity:.5,roughness:.2,metalness:.1,side:Dt}),o=new I(new j(.5,8,6,0,6.28,0,Math.PI/2),i);o.scale.set(1,.6,1),o.position.y=0,n.add(o);const r=new K({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:1,transparent:!0,opacity:.6}),a=new I(new be(.48,.025,5,12),r);a.rotation.x=Math.PI/2,a.position.y=-.02,n.add(a);const c=new I(new j(.2,6,4),new Y({color:F.jellyGlow,transparent:!0,opacity:.7}));c.position.y=-.05,n.add(c);const l=new Y({color:12312063,transparent:!0,opacity:.3});for(let b=-1;b<=1;b+=2){const v=new I(new j(.06,4,3),l);v.scale.set(.6,1.5,.6),v.position.set(b*.08,-.03,0),n.add(v)}const h=new Y({color:15663103,transparent:!0,opacity:.7});for(let b=0;b<5;b++){const v=w()*6.28,M=w()*.8,A=new I(new j(.02,3,3),h);A.position.set(Math.cos(v)*M*.35,.1-M*.15,Math.sin(v)*M*.35),n.add(A)}const u=new K({color:F.jellyTent,emissive:F.jellyGlow,emissiveIntensity:.4,transparent:!0,opacity:.4}),f=new Y({color:F.jellyGlow,transparent:!0,opacity:.6});for(let b=0;b<6;b++){const v=b/6*6.28,M=.4+w()*.6,A=new I(new vt(.015,.008,M,3),u);A.position.set(Math.cos(v)*.25,-M/2-.05,Math.sin(v)*.25),n.add(A);const E=new I(new j(.012,3,3),f);E.position.set(Math.cos(v)*.25,-M-.06,Math.sin(v)*.25),n.add(E)}const d=new Y({color:F.jellyGlow,transparent:!0,opacity:.12});for(let b=0;b<8;b++){const v=b/8*6.28,M=new I(new vt(.002,.002,.4,3),d);M.position.set(Math.cos(v)*.2,.05,Math.sin(v)*.2),M.rotation.z=Math.PI/2-.3,M.rotation.y=-v,n.add(M)}const m=new K({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:.6,transparent:!0,opacity:.4});for(let b=0;b<10;b++){const v=b/10*6.28,M=new I(new j(.02,3,3),m);M.scale.set(1,.5,.8),M.position.set(Math.cos(v)*.46,-.04,Math.sin(v)*.46),n.add(M)}const x=new K({color:F.jellyTent,emissive:F.jellyGlow,emissiveIntensity:.5,transparent:!0,opacity:.35}),p=new I(new vt(.02,.01,.35,4),x);p.position.y=-.2,n.add(p);const g=new Y({color:14548991,transparent:!0,opacity:.4});for(let b=0;b<3;b++){const v=b/3*6.28,M=new I(new j(.008,3,3),g);M.position.set(Math.cos(v)*.25,-.55-w()*.3,Math.sin(v)*.25),n.add(M)}return n.position.set(s,t,e),ht.add(n),{group:n,bellMat:i,phase:w()*6.28,driftAng:w()*6.28,homeX:s,homeZ:e,floatY:t,wobble:.5+w()*.5,_init:!0,_state:"drift",_stT:20+Math.random()*30,_migrateAng:0,_pulseSync:0}}function Pw(s,t){const e=new ae,n=new K({color:F.puffBody,emissive:F.puffGlow,emissiveIntensity:.3,roughness:.8}),i=new I(new j(.3,8,6),n);i.position.y=.35,e.add(i);const o=new K({color:16773344,emissive:F.puffGlow,emissiveIntensity:.15,roughness:.9}),r=new I(new j(.18,6,4),o);r.scale.set(.7,.9,.3),r.position.set(0,.32,.2),e.add(r);const a=new I(new j(.22,7,5),n);a.position.y=.65,e.add(a);const c=[];for(let A=-1;A<=1;A+=2){const E=new I(new Wn(.06,.15,4),n);E.position.set(A*.13,.85,0),E.rotation.z=A*.3,e.add(E),c.push({mesh:E,side:A,baseRotZ:A*.3});const T=new I(new Wn(.03,.08,4),new K({color:F.puffCheek,emissive:F.puffCheek,emissiveIntensity:.2}));T.position.set(A*.13,.84,.01),T.rotation.z=A*.3,e.add(T),c.push({mesh:T,side:A,baseRotZ:A*.3})}const l=new Y({color:F.puffEye}),h=[];for(let A=-1;A<=1;A+=2){const E=new I(new j(.035,4,4),l);E.position.set(A*.09,.68,.18),e.add(E),h.push(E);const T=new Y({color:16777215}),S=new I(new j(.012,3,3),T);S.position.set(A*.09+A*.015,.695,.2),e.add(S),h.push(S)}const u=new Y({color:4469555}),f=new I(new j(.015,3,3),u);f.position.set(0,.63,.22),e.add(f);const d=new K({color:F.puffCheek,emissive:F.puffCheek,emissiveIntensity:.3});for(let A=-1;A<=1;A+=2){const E=new I(new j(.04,4,3),d);E.position.set(A*.15,.61,.15),e.add(E)}const m=new Y({color:15654348,transparent:!0,opacity:.5});for(let A=-1;A<=1;A+=2)for(let E=0;E<2;E++){const T=new I(new vt(.002,.002,.06,3),m);T.position.set(A*.12,.62-E*.03,.2),T.rotation.z=A*.7+E*A*.2,T.rotation.x=-.1,e.add(T)}for(let A=-1;A<=1;A+=2){const E=new I(new j(.07,4,3),n);E.position.set(A*.12,.07,.05),E.scale.set(1,.5,1.3),e.add(E);const T=new K({color:16755370,emissive:16746632,emissiveIntensity:.1});for(let S=0;S<3;S++){const y=S/3*6.28,_=new I(new j(.012,3,3),T);_.position.set(A*.12+Math.cos(y)*.03,.03,.05+Math.sin(y)*.03),e.add(_)}}const x=new K({color:16777215,emissive:F.puffGlow,emissiveIntensity:.4,roughness:.9}),p=new I(new j(.06,5,4),x);p.position.set(0,.38,-.28),e.add(p);const g=new K({color:F.puffBody,emissive:F.puffGlow,emissiveIntensity:.2,roughness:1});for(let A=0;A<6;A++){const E=w()*6.28,T=w()*1.2,S=new I(new j(.01,3,3),g);S.position.set(Math.cos(E)*.28,.25+T*.2,Math.sin(E)*.28),e.add(S)}const b=new Y({color:F.puffBody});for(let A=-1;A<=1;A+=2){const E=new I(new vt(.003,.003,.04,3),b);E.position.set(A*.09,.72,.17),E.rotation.z=A*.3,e.add(E)}const v=new Y({color:5583684,transparent:!0,opacity:.5}),M=new I(new vt(.002,.002,.03,3),v);return M.position.set(0,.59,.22),M.rotation.z=Math.PI/2,e.add(M),e.position.set(s,0,t),ht.add(e),{group:e,ears:c,eyes:h,tail:p,phase:w()*6.28,wanderAng:w()*6.28,speed:.6+w()*.8,hopTimer:0,hopPhase:w()*6.28,homeX:s,homeZ:t,state:"idle",idleTimer:w()*3,_init:!0,_followT:0,_scaredT:0,_huddleTarget:-1,_baseY:0,_lastTX:s,_lastTZ:t,_blinkTimer:2+Math.random()*4,_blinkState:0}}function Iw(s,t){const e=new ae,n=new K({color:F.deerBody,emissive:F.deerGlow,emissiveIntensity:.5,transparent:!0,opacity:.7,roughness:.3}),i=new I(new j(.4,7,5),n);i.scale.set(1,.8,1.5),i.position.y=.9,e.add(i);const o=new K({color:13431039,emissive:F.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.5}),r=new I(new j(.15,5,4),o);r.scale.set(.8,.6,.5),r.position.set(0,.78,.25),e.add(r);const a=new ae;a.position.set(0,1.15,.3);const c=new I(new vt(.08,.12,.4,5),n);c.position.set(0,.1,.08),c.rotation.x=-.4,a.add(c);const l=new I(new j(.14,6,5),n);l.position.set(0,.22,.2),a.add(l);const h=new I(new j(.07,4,3),n);h.scale.set(1,.7,1.4),h.position.set(0,.17,.35),a.add(h);const u=new Y({color:2245717}),f=new I(new j(.02,3,3),u);f.position.set(0,.17,.43),a.add(f);const d=new Y({color:F.deerEye});for(let _=-1;_<=1;_+=2){const R=new I(new j(.025,4,3),d);R.position.set(_*.09,.25,.28),a.add(R);const U=new I(new j(.008,3,3),new Y({color:16777215}));U.position.set(_*.085,.26,.29),a.add(U);const L=new Y({color:F.deerBody,transparent:!0,opacity:.5}),z=new I(new vt(.002,.002,.03,3),L);z.position.set(_*.1,.27,.28),z.rotation.z=_*.6,a.add(z)}for(let _=-1;_<=1;_+=2){const R=new I(new Wn(.04,.14,4),n);R.position.set(_*.1,.37,.15),R.rotation.z=_*.4,a.add(R)}const m=new K({color:F.deerAntler,emissive:F.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.8});for(let _=-1;_<=1;_+=2){const R=new I(new vt(.015,.02,.25,3),m);R.position.set(_*.08,.42,.12),R.rotation.z=_*.5,a.add(R);const U=new I(new vt(.01,.015,.15,3),m);U.position.set(_*.15,.55,.1),U.rotation.z=_*.8,a.add(U);const L=new I(new vt(.008,.012,.1,3),m);L.position.set(_*.11,.5,.16),L.rotation.z=_*.3,L.rotation.x=-.5,a.add(L);const z=new I(new j(.012,3,3),new Y({color:F.deerGlow,transparent:!0,opacity:.8}));z.position.set(_*.18,.61,.09),a.add(z)}const x=new K({color:F.deerBody,emissive:F.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),p=new I(new vt(.01,.02,.1,3),x);p.position.set(0,.11,.28),p.rotation.x=.3,a.add(p);const g=new Y({color:1122850});for(let _=-1;_<=1;_+=2){const R=new I(new j(.006,3,3),g);R.position.set(_*.02,.16,.42),a.add(R)}e.add(a);const b=[{x:-.15,z:.3,label:"FL"},{x:.15,z:.3,label:"FR"},{x:-.15,z:-.3,label:"BL"},{x:.15,z:-.3,label:"BR"}],v=new K({color:6715272,emissive:F.deerGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),M=[];for(let _=0;_<4;_++){const R=b[_],U=new ae;U.position.set(R.x,.65,R.z);const L=new I(new vt(.025,.035,.35,4),n);L.position.y=-.175,U.add(L);const z=new ae;z.position.set(0,-.35,0);const V=new I(new vt(.02,.03,.3,4),n);V.position.y=-.15,z.add(V);const G=new I(new vt(.04,.032,.04,4),v);G.position.y=-.3,z.add(G);const Z=new K({color:14544639,emissive:F.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),W=new I(new j(.025,3,3),Z);W.scale.set(1.3,.5,1.3),W.position.y=-.25,z.add(W),U.add(z),e.add(U),M.push({upper:U,lower:z,isFront:_<2,side:R.x<0?-1:1})}const A=new ae;A.position.set(0,1.1,-.55);const E=new I(new Wn(.05,.15,4),new K({color:16777215,emissive:F.deerGlow,emissiveIntensity:1,transparent:!0,opacity:.8}));A.add(E),e.add(A);const T=new Y({color:13434862,transparent:!0,opacity:.3});for(let _=0;_<4;_++){const R=new I(new j(.02,3,3),T);R.position.set((w()-.5)*.25,.8+w()*.3,(w()-.5)*.4),e.add(R)}const S=new Y({color:F.deerBody,transparent:!0,opacity:.15});for(let _=0;_<3;_++){const R=new I(new vt(.002,.002,.2,3),S);R.position.set(.3,.85-_*.06,0),R.rotation.z=Math.PI/2+.3,e.add(R)}const y=new K({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.4,roughness:0,metalness:.5});for(let _=0;_<3;_++){const R=new I(new j(.008,3,3),y);R.position.set((w()-.5)*.3,.9+w()*.3,(w()-.5)*.35),e.add(R)}return e.position.set(s,0,t),ht.add(e),{group:e,mat:n,phase:w()*6.28,wanderAng:w()*6.28,speed:.6+w()*.4,walkTimer:0,legCycle:0,homeX:s,homeZ:t,state:"walk",pauseTimer:0,neckPivot:a,legPivots:M,tailPivot:A,fleeTimer:0,headLook:0,headBob:0,_init:!0,_stT:0,_drinkTgt:null,_zigTimer:0,_zigDir:1,_baseY:0,_lastTX:s,_lastTZ:t}}function Lw(s,t,e){const n=new ae,i=new K({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.3,roughness:.7}),o=new I(new vt(.04,.05,.3,5),i);o.rotation.x=Math.PI/2,n.add(o);const r=new K({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.5,roughness:.6});for(let p=0;p<3;p++){const g=new I(new be(.045,.006,4,8),r);g.position.z=-.05+p*.06,g.rotation.x=0,n.add(g)}const a=new I(new j(.05,5,4),i);a.position.z=.18,n.add(a);const c=new K({color:1122867,roughness:.2,metalness:.4});for(let p=-1;p<=1;p+=2){const g=new I(new j(.018,4,3),c);g.position.set(p*.03,.01,.21),n.add(g)}for(let p=-1;p<=1;p+=2){const g=new I(new vt(.005,.005,.15,3),i);g.position.set(p*.03,.03,.22),g.rotation.x=-.6,g.rotation.z=p*.4,n.add(g);const b=new Y({color:F.mothGlow,transparent:!0,opacity:.7}),v=new I(new j(.015,3,3),b);v.scale.set(2,.5,1),v.position.set(p*.05,.12,.28),n.add(v)}const l=new K({color:F.mothWing,emissive:F.mothGlow,emissiveIntensity:.8,transparent:!0,opacity:.6,side:Dt,roughness:.4});n._wingPivots=[];for(let p=-1;p<=1;p+=2){const g=new ae;g.position.set(p*.04,0,.02);const b=new I(new j(.2,6,4),l);b.scale.set(1.8,.08,1.2),b.position.set(p*.18,0,.02),g.add(b);const v=new I(new j(.12,5,3),l);v.scale.set(1.5,.06,1),v.position.set(p*.12,0,-.1),g.add(v);const M=new K({color:F.mothWing,emissive:F.mothGlow,emissiveIntensity:.6,transparent:!0,opacity:.45,side:Dt}),A=new I(new xe(.03,.12),M);A.position.set(p*.1,0,-.18),A.rotation.y=p*.2,g.add(A);const E=new Y({color:F.mothSpot,transparent:!0,opacity:.9}),T=new I(new j(.03,4,3),E);T.position.set(p*.2,.02,.03),g.add(T);const S=new I(new j(.018,3,3),E);S.position.set(p*.1,.02,-.08),g.add(S);const y=new Y({color:F.mothGlow,transparent:!0,opacity:.25});for(let _=0;_<2;_++){const R=new I(new vt(.002,.002,.2,3),y);R.position.set(p*.15,.01,-.02+_*.06),R.rotation.z=Math.PI/2+p*(.15+_*.15),g.add(R)}n.add(g),n._wingPivots.push({pivot:g,side:p})}const h=new Y({color:F.mothGlow,transparent:!0,opacity:.25});for(let p=0;p<3;p++){const g=new I(new j(.008,3,3),h);g.position.set((w()-.5)*.04,0,-.15-p*.05),n.add(g)}const u=new Y({color:4473907,transparent:!0,opacity:.5}),f=new I(new be(.015,.003,4,8,Math.PI*1.5),u);f.position.set(0,-.02,.2),f.rotation.x=.4,n.add(f);const d=new K({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.4,roughness:1});for(let p=0;p<5;p++){const g=w()*6.28,b=new I(new j(.008,3,3),d);b.position.set(Math.cos(g)*.04,Math.sin(g)*.04,w()*.15-.05),n.add(b)}const m=new Y({color:F.mothBody,transparent:!0,opacity:.4});for(let p=-1;p<=1;p+=2)for(let g=0;g<3;g++){const b=new I(new vt(.002,.002,.06,3),m);b.position.set(p*.04,-.03,-.05+g*.06),b.rotation.z=p*.8,b.rotation.x=-.3,n.add(b)}const x=new Y({color:F.mothGlow,transparent:!0,opacity:.35});for(let p=-1;p<=1;p+=2)for(let g=0;g<5;g++){const b=g/5*Math.PI-Math.PI/2,v=new I(new j(.006,3,3),x);v.position.set(p*(.3+Math.cos(b)*.05),Math.sin(b)*.02,.02+g*.04),n.add(v)}return n.position.set(s,t,e),ht.add(n),{group:n,wingMat:l,phase:w()*6.28,orbitAng:w()*6.28,orbitR:2+w()*4,centerX:s,centerZ:e,floatY:t,flapSpeed:6+w()*4,_init:!0,_state:"patrol",_stT:0,_attractTarget:null,_restTree:null}}function Dw(s,t,e){const n=new ae,i=new Y({color:F.wispCore}),o=new I(new j(.08,6,4),i);n.add(o);const r=new Y({color:16777215,transparent:!0,opacity:.7,wireframe:!0}),a=new I(new Es(.06,0),r);n.add(a);const c=new Y({color:F.wispGlow,transparent:!0,opacity:.5}),l=new I(new j(.18,6,4),c);n.add(l);const h=new Y({color:F.wispGlow,transparent:!0,opacity:.25}),u=new I(new be(.22,.008,4,12),h);u.rotation.x=Math.PI/2,n.add(u);const f=new Y({color:F.wispTrail,transparent:!0,opacity:.15}),d=new I(new j(.35,5,4),f);n.add(d);const m=new Y({color:16777215,transparent:!0,opacity:.8}),x=new I(new j(.02,3,3),m);x.position.set(.15,0,0),n.add(x);const p=[];for(let T=0;T<3;T++){const S=new Y({color:F.wispCore,transparent:!0,opacity:.35}),y=new I(new j(.01,3,3),S);y.position.set((w()-.5)*.1,-.1-T*.08,(w()-.5)*.1),n.add(y),p.push(y)}const g=new Y({color:F.wispGlow,transparent:!0,opacity:.18}),b=[];for(let T=0;T<3;T++){const S=T/3*6.28+w()*.5,y=.15+w()*.1,_=new I(new vt(.003,.001,y,3),g);_.position.set(Math.cos(S)*.1,w()*.08,Math.sin(S)*.1),_.rotation.z=Math.PI/3*(S<3.14?1:-1),_.rotation.y=S,n.add(_),b.push({mesh:_,baseAng:S})}const v=new Y({color:F.wispGlow,transparent:!0,opacity:.12}),M=new I(new be(.26,.005,4,10),v);M.rotation.x=1.2,M.rotation.z=.8,n.add(M);const A=new Y({color:16777215,transparent:!0,opacity:.5});for(let T=0;T<4;T++){const S=w()*6.28,y=w()*.8,_=new I(new j(.006,3,3),A);_.position.set(Math.cos(S)*.06,Math.sin(y)*.06,Math.sin(S)*.06),n.add(_)}const E=new Y({color:F.wispCore,transparent:!0,opacity:.2});for(let T=0;T<4;T++){const S=new I(new j(.004,3,3),E);S.position.set(.03+w()*.04,-.05-T*.04,w()*.04),n.add(S)}return n.scale.setScalar(.5),n.position.set(s,t,e),ht.add(n),{group:n,glowMat:c,hazeMat:f,embers:p,tendrils:b,plasmaMat:g,facet:a,halo:u,halo2:M,phase:w()*6.28,targetX:s,targetY:t,targetZ:e,velX:0,velY:0,velZ:0,scatter:0}}function Uw(s,t){const e=new ae,n=Mh,i=8+Math.floor(w()*5),o=new K({color:F.fairyMush,emissive:F.fairyGlow,emissiveIntensity:.2,roughness:.5}),r=new K({color:F.mushStem,roughness:.7,emissive:F.fairyGlow,emissiveIntensity:.05});for(let A=0;A<i;A++){const E=A/i*6.28+w()*.15,T=n+w()*.3-.15,S=.15+w()*.2,y=new I(Tn.mushStem,r);y.scale.setScalar(S),y.position.set(Math.cos(E)*T,S*.3,Math.sin(E)*T),e.add(y);const _=new I(Tn.mushCap,o);_.scale.set(S,S*.4,S),_.position.set(Math.cos(E)*T,S*.55,Math.sin(E)*T),e.add(_);const R=new Y({color:16777215,transparent:!0,opacity:.7}),U=new I(new j(S*.08,3,3),R);U.position.set(Math.cos(E)*T,S*.6,Math.sin(E)*T),e.add(U)}const a=new K({color:8934792,emissive:F.fairyGlow,emissiveIntensity:.1,roughness:.6});for(let A=0;A<5;A++){const E=w()*6.28,T=n+w()*.6-.3,S=.06+w()*.06,y=new I(Tn.mushCap,a);y.scale.set(S,S*.5,S),y.position.set(Math.cos(E)*T,S*.35,Math.sin(E)*T),e.add(y)}const c=new K({color:1725733,emissive:664080,emissiveIntensity:.05,roughness:.9});for(let A=0;A<4;A++){const E=w()*6.28,T=w()*n*.8,S=new I(new j(.08+w()*.08,4,3),c);S.scale.set(1.5,.2,1.5),S.position.set(Math.cos(E)*T,.01,Math.sin(E)*T),e.add(S)}const l=new K({color:4478310,emissive:F.fairyGlow,emissiveIntensity:.05,roughness:.85}),h=new I(new j(.12,5,3),l);h.scale.set(1.2,.3,1),h.position.y=.03,e.add(h);const u=new Y({color:F.fairyGlow,transparent:!0,opacity:.2}),f=[];for(let A=0;A<8;A++){const E=new I(new j(.012,3,3),u),T=(w()-.5)*n*.8,S=(w()-.5)*n*.8;E.position.set(T,.05+w()*.3,S),e.add(E),f.push({mesh:E,baseX:T,baseZ:S,drift:w()*6.28,speed:.2+w()*.3})}const d=new Y({color:F.fairyRing,transparent:!0,opacity:0,side:Dt}),m=new I(new Do(.3,n-.3,16),d);m.rotation.x=-Math.PI/2,m.position.y=.02,e.add(m);const x=new Y({color:F.fairyGlow,transparent:!0,opacity:.08});for(let A=0;A<6;A++){const E=w()*6.28,T=E+.5+w()*1.5,S=n*.6+w()*n*.4,y=new I(new vt(.002,.002,S,3),x);y.position.set(Math.cos((E+T)/2)*n*.4,.005,Math.sin((E+T)/2)*n*.4),y.rotation.x=Math.PI/2,y.rotation.z=E,e.add(y)}const p=new K({color:4864560,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<3;A++){const E=w()*6.28,T=w()*n*.7,S=new I(new j(.03,4,3),p);S.scale.set(1.3,.3,1.3),S.position.set(Math.cos(E)*T,.008,Math.sin(E)*T),e.add(S)}const g=new K({color:7833702,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<2;A++){const E=new I(new qe(.02+w()*.02,4),g);E.position.set((w()-.5)*.08,.06,(w()-.5)*.06),E.rotation.x=-Math.PI/2+w()*.4,e.add(E)}const b=[];for(let A=0;A<5;A++){const E=w()*6.28,T=w()*n*.9,S=new Y({color:8978346,transparent:!0,opacity:.25}),y=new I(new j(.005,3,3),S);y.position.set(Math.cos(E)*T,.01,Math.sin(E)*T),e.add(y),b.push(y)}const v=new Y({color:657926,transparent:!0,opacity:.15,side:Dt}),M=new I(new Do(n*.5,n*.85,12),v);return M.rotation.x=-Math.PI/2,M.position.y=.008,e.add(M),e.position.set(s,0,t),ht.add(e),{group:e,mushMat:o,discMat:d,sporeMat:u,spores:f,glowWorms:b,x:s,z:t,ringR:n,phase:w()*6.28,glowIntensity:0,active:!1}}function Nw(s,t,e){const n=new ae,i=new K({color:F.bubbleIris,emissive:F.bubbleIris,emissiveIntensity:.15,transparent:!0,opacity:.25,roughness:0,metalness:.6}),o=new I(Tn.bubble,i);n.add(o);const r=new Y({color:15650047,transparent:!0,opacity:.1}),a=new I(new be(.13,.003,4,10),r);a.rotation.x=.5,a.rotation.y=w()*3,n.add(a);const c=new I(new be(.11,.003,4,10),r);c.rotation.x=-.8,c.rotation.z=1.2,n.add(c);const l=new Y({color:F.bubbleShine,transparent:!0,opacity:.5}),h=new I(new j(.04,4,3),l);h.position.set(.05,.07,.08),n.add(h);const u=new Y({color:15658751,transparent:!0,opacity:.2}),f=new I(new j(.025,3,3),u);f.position.set(-.06,-.04,-.06),n.add(f);const d=new Y({color:16755438,transparent:!0,opacity:.12}),m=new I(new j(.06,4,3),d);m.position.set(.02,-.02,.01),n.add(m);const x=new Y({color:16772863,transparent:!0,opacity:.08}),p=new I(new j(.12,5,4),x);n.add(p);const g=[16764125,13426175,14548940];for(let S=0;S<3;S++){const y=new Y({color:g[S],transparent:!0,opacity:.06}),_=new I(new be(.14-S*.02,.002,4,8),y);_.position.y=-.04+S*.04,_.rotation.x=Math.PI/2,n.add(_)}const b=new Y({color:16777215,transparent:!0,opacity:.6});for(let S=0;S<3;S++){const y=w()*6.28,_=w()*Math.PI-Math.PI/2,R=new I(new j(.003,3,3),b);R.position.set(Math.cos(y)*Math.cos(_)*.14,Math.sin(_)*.14,Math.sin(y)*Math.cos(_)*.14),n.add(R)}const v=new Y({color:11189196,transparent:!0,opacity:.1}),M=new I(new j(.015,3,3),v);M.position.set((w()-.5)*.04,(w()-.5)*.04,(w()-.5)*.04),n.add(M);const A=new Y({color:F.bubbleIris,transparent:!0,opacity:.15}),E=new I(new j(.04,4,3),A);E.scale.set(1.3,.6,1.3),E.position.y=-.12,n.add(E);const T=.6+w()*.8;return n.scale.setScalar(T),n.position.set(s,t,e),ht.add(n),{group:n,shellMat:i,phase:w()*6.28,driftAng:w()*6.28,driftSpeed:.3+w()*.5,floatY:t,homeX:s,homeZ:e,bobAmp:.3+w()*.4,popped:!1,popTimer:0,sc:T}}function zw(s,t){const e=new ae,n=1.5+w()*1,i=new K({color:329746,roughness:.9}),o=new I(new qe(n*.85,10),i);o.rotation.x=-Math.PI/2,o.position.y=.005,e.add(o);const r=new K({color:F.pondWater,emissive:F.pondGlow,emissiveIntensity:.2,transparent:!0,opacity:.55,roughness:.05,metalness:.4}),a=new I(new qe(n,12),r);a.rotation.x=-Math.PI/2,a.position.y=.03,e.add(a);const c=new K({color:3816002,roughness:.85}),l=5+Math.floor(w()*4);for(let L=0;L<l;L++){const z=L/l*6.28+w()*.3,V=n+w()*.2-.1,G=.06+w()*.08,Z=new I(new j(G,4,3),c);Z.scale.set(1+w()*.5,.4+w()*.3,1+w()*.5),Z.position.set(Math.cos(z)*V,G*.2,Math.sin(z)*V),Z.rotation.set(w(),w(),w()),e.add(Z)}const h=new K({color:1725728,roughness:.7,side:Dt});for(let L=0;L<3;L++){const z=w()*6.28,V=n*.85+w()*.2;for(let G=0;G<3;G++){const Z=new I(new xe(.015,.15+w()*.1),h);Z.position.set(Math.cos(z)*V+(w()-.5)*.05,.08,Math.sin(z)*V+(w()-.5)*.05),Z.rotation.y=w()*3,Z.rotation.x=-.2,e.add(Z)}}const u=new Y({color:11197934,transparent:!0,opacity:.08}),f=[];for(let L=0;L<3;L++){const z=new I(new be(1,.004,4,20),u.clone());z.rotation.x=Math.PI/2,z.position.y=.036,e.add(z),f.push({mesh:z,phase:L/3})}const d=new K({color:F.lilyPad,roughness:.6,side:Dt}),m=4+Math.floor(w()*2),x=[];for(let L=0;L<m;L++){const z=w()*6.28,V=w()*n*.6,G=.15+w()*.15,Z=new I(new qe(G,8),d);Z.rotation.x=-Math.PI/2,Z.position.set(Math.cos(z)*V,.05,Math.sin(z)*V),e.add(Z);const W=new Y({color:1724448,transparent:!0,opacity:.3}),rt=new I(new vt(.002,.002,G*1.5,3),W);rt.position.set(Math.cos(z)*V,.052,Math.sin(z)*V),rt.rotation.x=Math.PI/2,rt.rotation.z=w()*3,e.add(rt),x.push({mesh:Z,phase:w()*6.28})}const p=new K({color:F.lilyFlower,emissive:F.lilyGlow,emissiveIntensity:.4,transparent:!0,opacity:.85,side:Dt}),g=.08;for(let L=0;L<6;L++){const z=L/6*6.28,V=new I(new xe(.06,.05),p);V.position.set(x[0].mesh.position.x+Math.cos(z)*.05,g,x[0].mesh.position.z+Math.sin(z)*.05),V.rotation.x=-1,V.rotation.y=-z,e.add(V)}const b=new K({color:16777130,emissive:F.lilyGlow,emissiveIntensity:.8}),v=new I(new j(.025,4,3),b);if(v.position.set(x[0].mesh.position.x,g+.02,x[0].mesh.position.z),e.add(v),x.length>2){const L=new K({color:F.lilyFlower,emissive:F.lilyGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),z=new I(new j(.03,5,4),L);z.scale.set(.8,1.2,.8),z.position.set(x[2].mesh.position.x,.09,x[2].mesh.position.z),e.add(z)}const M=new K({color:3815477,roughness:.8,transparent:!0,opacity:.5});for(let L=0;L<5;L++){const z=w()*6.28,V=w()*n*.7,G=new I(new j(.02+w()*.025,4,3),M);G.scale.set(1+w()*.5,.4,1+w()*.5),G.position.set(Math.cos(z)*V,.015,Math.sin(z)*V),e.add(G)}const A=new Y({color:2761752,transparent:!0,opacity:.12,side:Dt});for(let L=0;L<3;L++){const z=w()*6.28,V=w()*n*.5,G=new I(new qe(.08+w()*.06,5),A);G.rotation.x=-Math.PI/2,G.position.set(Math.cos(z)*V,.012,Math.sin(z)*V),e.add(G)}const E=new K({color:1122837,roughness:.7,transparent:!0,opacity:.4}),T=[];for(let L=0;L<2;L++){const z=w()*6.28,V=w()*n*.4,G=new I(new j(.012,4,3),E);G.scale.set(.8,.5,1.3),G.position.set(Math.cos(z)*V,.04,Math.sin(z)*V),e.add(G);const Z=new I(new vt(.002,.001,.025,3),E);Z.position.set(Math.cos(z)*V-Math.cos(z)*.02,.04,Math.sin(z)*V-Math.sin(z)*.02),Z.rotation.z=Math.PI/2,Z.rotation.y=z,e.add(Z),T.push({body:G,tail:Z,ang:z,orbR:.15+w()*n*.35,speed:.3+w()*.4})}const S=new Y({color:2250016,transparent:!0,opacity:.1,side:Dt});for(let L=0;L<3;L++){const z=w()*6.28,V=n*.7+w()*n*.25,G=new I(new qe(.06+w()*.04,5),S);G.rotation.x=-Math.PI/2,G.position.set(Math.cos(z)*V,.032,Math.sin(z)*V),e.add(G)}const y=new Y({color:13426158,transparent:!0,opacity:.06}),_=new I(new be(n-.05,.01,4,16),y);_.rotation.x=Math.PI/2,_.position.y=.035,e.add(_);const R=new K({color:4861976,roughness:.8,side:Dt,transparent:!0,opacity:.6}),U=new I(new qe(.03,5),R);return U.rotation.x=-Math.PI/2,U.position.set((w()-.5)*n*.5,.04,(w()-.5)*n*.5),e.add(U),e.position.set(s,0,t),ht.add(e),{group:e,waterMat:r,flMat:p,pads:x,ripples:f,tadpoles:T,x:s,z:t,phase:w()*6.28,pondR:n}}function Fw(s,t){const e=new ae,n=new Y({color:F.orbGold}),i=new I(new j(.2,10,8),n);e.add(i);const o=new Y({color:16777215}),r=new I(new j(.06,6,4),o);e.add(r);const a=new Y({color:16772744,transparent:!0,opacity:.4,wireframe:!0}),c=new I(new Es(.15,0),a);e.add(c);const l=new Y({color:F.orbGlow,transparent:!0,opacity:.5}),h=new I(new j(.35,8,6),l);e.add(h);const u=new Y({color:F.orbGlow,transparent:!0,opacity:.3});for(let T=0;T<8;T++){const S=T/8*6.28,y=new I(new Wn(.02,.25,3),u);y.position.set(Math.cos(S)*.3,Math.sin(S*2)*.05,Math.sin(S)*.3),y.rotation.z=-S+Math.PI/2,y.rotation.y=S,e.add(y)}const f=new Y({color:F.orbInner,transparent:!0,opacity:.15}),d=new I(new j(.6,8,5),f);e.add(d);for(let T=0;T<6;T++){const S=new I(new j(.03,4,3),new Y({color:16777215})),y=T/6*6.28;S.position.set(Math.cos(y)*.4,Math.sin(y*2)*.1,Math.sin(y)*.4),e.add(S)}const m=new Y({color:F.orbGold,transparent:!0,opacity:.7});for(let T=0;T<4;T++){const S=T/4*6.28+.4,y=new I(new j(.015,3,3),m);y.position.set(Math.cos(S)*.5,0,Math.sin(S)*.5),e.add(y)}const x=new Y({color:16768426,transparent:!0,opacity:.12});for(let T=0;T<3;T++){const S=new I(new be(.28,.003,4,12),x);S.rotation.set(T*1.05,T*.7,0),e.add(S)}const p=new Y({color:F.orbGlow,transparent:!0,opacity:.08}),g=new I(new be(.4,.004,4,16),p);g.rotation.x=Math.PI/2,e.add(g);const b=new Y({color:16772812,transparent:!0,opacity:.15}),v=new I(new be(.25,.012,4,10),b);v.rotation.x=Math.PI/2,e.add(v);const M=new Y({color:16777215,transparent:!0,opacity:.5});for(let T=0;T<6;T++){const S=w()*6.28,y=w()*Math.PI-Math.PI/2,_=new I(new j(.008,3,3),M);_.position.set(Math.cos(S)*Math.cos(y)*.2,Math.sin(y)*.2,Math.sin(S)*Math.cos(y)*.2),e.add(_)}const A=new Y({color:F.orbGlow,transparent:!0,opacity:.1,side:Dt}),E=new I(new qe(.5,8),A);return E.rotation.x=-Math.PI/2,E.position.y=-.95,e.add(E),e.position.set(s,1,t),ht.add(e),{group:e,coreMat:n,glowMat:l,hazeMat:f,x:s,z:t,found:!1,flyUp:!1,flyY:1,phase:w()*6.28,laserLine:null,laserMat:null}}function Ow(s,t){const e=new ae,n=new K({color:F.rockBase,roughness:.85,metalness:.05}),i=new K({color:F.rockLight,roughness:.8,metalness:.05}),o=new K({color:F.rockMoss,emissive:F.rockMoss,emissiveIntensity:.03,roughness:.9}),r=.3+w()*.5,a=new I(new j(r,8,6),w()<.6?n:i),c=.4+w()*.4;a.scale.set(1+w()*.6,c,1+w()*.6),a.position.y=r*c*.35,a.rotation.set(w()*.5,w()*3,w()*.3),a.castShadow=!0,a.receiveShadow=!0,e.add(a);const l=1+Math.floor(w()*3);for(let E=0;E<l;E++){const T=w()*6.28,S=r*.6+w()*r*.5,y=r*.3+w()*r*.4,_=new I(new j(y,5,4),w()<.5?n:i),R=.3+w()*.4;_.scale.set(1+w()*.5,R,1+w()*.5),_.position.set(Math.cos(T)*S,y*R*.3,Math.sin(T)*S),_.rotation.set(w()*.8,w()*3,w()*.5),e.add(_)}const h=2+Math.floor(w()*3);for(let E=0;E<h;E++){const T=w()*6.28,S=w()*r*.6,y=r*.15+w()*r*.2,_=new I(new j(y,4,3),o);_.scale.set(1.5,.2,1.5),_.position.set(Math.cos(T)*S,r*.35+w()*.05,Math.sin(T)*S),e.add(_)}const u=[8943428,10061909,6715221,11180390];for(let E=0;E<3;E++){const T=new K({color:u[Math.floor(w()*u.length)],roughness:.9,transparent:!0,opacity:.5}),S=w()*6.28,y=new I(new j(r*.06+w()*r*.08,3,3),T);y.scale.set(2,.15,2),y.position.set(Math.cos(S)*r*.5,r*.25+w()*.1,Math.sin(S)*r*.5),e.add(y)}const f=new Y({color:1381656,transparent:!0,opacity:.35}),d=2+Math.floor(w()*3);for(let E=0;E<d;E++){const T=w()*6.28,S=r*.3+w()*r*.4,y=new I(new vt(.003,.001,S,3),f),_=r*.3+w()*r*.2;y.position.set(Math.cos(T)*_,r*.2+w()*r*.15,Math.sin(T)*_),y.rotation.set(w()*.5,T,Math.PI/2+w()*.4),e.add(y)}const m=new Y({color:660752,transparent:!0,opacity:.2,side:Dt}),x=1+Math.floor(w()*2);for(let E=0;E<x;E++){const T=w()*6.28,S=r*.3+w()*r*.3,y=new I(new xe(.02+w()*.015,S),m);y.position.set(Math.cos(T)*r*.45,r*.15,Math.sin(T)*r*.45),y.rotation.y=-T,e.add(y)}const p=[],g=new Y({color:8965375,transparent:!0,opacity:.4});if(w()<.5){const E=2+Math.floor(w()*3);for(let T=0;T<E;T++){const S=w()*6.28,y=r*.25+w()*r*.25,_=new I(new j(.006,3,3),g);_.position.set(Math.cos(S)*y,r*.15+w()*r*.2,Math.sin(S)*y),e.add(_),p.push(_)}}const b=new Y({color:657926,transparent:!0,opacity:.12,side:Dt}),v=new I(new Do(r*.5,r*1,8),b);v.rotation.x=-Math.PI/2,v.position.y=.005,e.add(v);const M=new K({color:3816e3,roughness:.9}),A=4+Math.floor(w()*3);for(let E=0;E<A;E++){const T=w()*6.28,S=r*.5+w()*r*.6,y=.03+w()*.05,_=new I(new j(y,3,3),M);_.scale.set(1+w()*.5,.4,1+w()*.5),_.position.set(Math.cos(T)*S,y*.15,Math.sin(T)*S),e.add(_)}if(w()<.6){const E=new K({color:3385941,emissive:F.grassTip,emissiveIntensity:.05,roughness:.7,side:Dt});for(let T=0;T<3;T++){const S=w()*6.28,y=new I(new xe(.015,.08+w()*.06),E);y.position.set(Math.cos(S)*r*.3,r*.3,Math.sin(S)*r*.3),y.rotation.y=w()*3,y.rotation.x=-.2-w()*.3,e.add(y)}}return e.position.set(s,0,t),ht.add(e),{group:e,x:s,z:t,colR:r*.8,sparkles:p,sparkleMat:g}}let Up=null,Np=null,zp=null,Fp=null,Nh=[];function Bw(){return Up}function kw(){return Np}function Gw(){return zp}function Hw(){return Fp}function Vw(){return Nh}function Ww(){const s=new ae,t=new K({color:F.obeliskBlack,roughness:.2,metalness:.8,emissive:F.obeliskPink,emissiveIntensity:0});Np=t;const e=new I(new vt(1.2,1.8,ve,4),t);e.position.y=ve/2,e.rotation.y=Math.PI/4,e.castShadow=!0,s.add(e);const n=new Y({color:3351108,transparent:!0,opacity:.2});for(let S=0;S<4;S++){const y=S/4*6.28+Math.PI/4,_=new I(new vt(.03,.04,ve*.9,3),n);_.position.set(Math.cos(y)*1.55,ve*.45,Math.sin(y)*1.55),s.add(_)}const i=new Y({color:F.obeliskPink,transparent:!0,opacity:0});for(let S=0;S<4;S++){const y=S/4*6.28+Math.PI/4;for(let R=0;R<3;R++){const U=6+R*4,L=new I(new vt(.015,.015,.8,3),i);L.position.set(Math.cos(y)*1.6,U,Math.sin(y)*1.6),L.rotation.z=Math.PI/2,L.rotation.y=-y,L.visible=!1,s.add(L)}const _=new I(new vt(.012,.012,2.5,3),i);_.position.set(Math.cos(y)*1.6,12,Math.sin(y)*1.6),_.visible=!1,s.add(_)}const o=new K({color:F.obeliskBlack,roughness:.1,metalness:.9,emissive:F.obeliskPink,emissiveIntensity:0});zp=o;const r=new I(new Wn(1.3,3,4),o);r.position.y=ve+1.5,r.rotation.y=Math.PI/4,s.add(r);const a=new Y({color:F.obeliskPink,transparent:!0,opacity:0});for(let S=0;S<4;S++){const y=S/4*6.28+Math.PI/4,_=new I(new vt(.02,.02,3.2,3),a);_.position.set(Math.cos(y)*.8,ve+1.5,Math.sin(y)*.8),_.rotation.z=.35*(y<3.14?1:-1),_.rotation.y=-y,_.visible=!1,s.add(_)}for(let S=0;S<5;S++){const y=new I(new be(1.85-S*.02,.04,6,4),new Y({color:2236979}));y.position.y=4+S*5,y.rotation.x=Math.PI/2,s.add(y)}const c=new K({color:1118488,roughness:.3,metalness:.7}),l=new I(new vt(2.2,2.5,.6,4),c);l.position.y=.3,l.rotation.y=Math.PI/4,s.add(l);const h=new I(new vt(2.8,3,.4,4),c);h.position.y=.05,h.rotation.y=Math.PI/4,s.add(h);const u=new Y({color:F.obeliskPink,transparent:!0,opacity:0});for(let S=0;S<8;S++){const y=S/8*6.28,_=new I(new j(.06,4,3),u);_.position.set(Math.cos(y)*2.5,ve*.7+S*.5,Math.sin(y)*2.5),_.visible=!1,s.add(_)}const f=new Y({color:1710626,transparent:!0,opacity:.08});for(let S=0;S<6;S++){const y=w()*6.28,_=2+w()*ve*.7,R=new I(new vt(.008,.008,.5+w()*.5,3),f);R.position.set(Math.cos(y)*1.6,_,Math.sin(y)*1.6),R.rotation.z=(w()-.5)*.8,R.rotation.y=-y,s.add(R)}const d=new K({color:921108,roughness:.5,metalness:.4});for(let S=0;S<12;S++){const y=w()*6.28,_=3+w()*2,R=.15+w()*.25,U=new I(new j(R,4,3),d);U.scale.set(1+w()*.5,.3+w()*.3,1+w()*.5),U.position.set(Math.cos(y)*_,R*.15,Math.sin(y)*_),U.rotation.set(w(),w(),w()),s.add(U)}const m=new Y({color:F.obeliskPink,transparent:!0,opacity:0});for(let S=0;S<4;S++){const y=S/4*6.28+Math.PI/4;for(let _=0;_<5;_++){const R=5+_*3.5+w()*.5,U=(w()-.5)*.4,L=new I(new j(.04,4,3),m);L.position.set(Math.cos(y)*1.58+Math.cos(y+1.57)*U,R,Math.sin(y)*1.58+Math.sin(y+1.57)*U),L.visible=!1,s.add(L)}}const x=new Y({color:F.obeliskPink,transparent:!0,opacity:.8,blending:ue,depthWrite:!1}),p=new I(new j(.5,12,8),x);p.position.y=ve+3,s.add(p);const g=new Y({color:F.obeliskPink,transparent:!0,opacity:.2,blending:ue,depthWrite:!1}),b=new I(new j(.9,8,6),g);b.position.y=ve+3,s.add(b),Fp={mesh:p,haze:b,mat:x,hazeMat:g},Nh=[];const v=[.8,1.1,1.4,1.8],M=[11158783,10040302,12277247,8921821];for(let S=0;S<4;S++){const y=new Y({color:M[S],transparent:!0,opacity:.4,blending:ue,depthWrite:!1,side:Dt}),_=new I(new be(v[S],.02,6,24),y);_.position.y=ve+3,_.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),s.add(_),Nh.push({mesh:_,mat:y,rx:(Math.random()-.5)*2,ry:(Math.random()-.5)*2,rz:(Math.random()-.5)*1.5})}const A=new Y({color:0,transparent:!0,opacity:.15,side:Dt}),E=new I(new qe(4,8),A);E.rotation.x=-Math.PI/2,E.position.y=.005,s.add(E),s.position.set(0,-ve,0),ht.add(s),Up=s;const T=new Bo(8939212,0,30);s.add(T),T.position.set(0,ve+1,0)}let Op=null,Bp=null;function Xw(){return Op}function qw(){return Bp}function Yw(){const s=new K({color:F.moatBlue,emissive:1136042,emissiveIntensity:.3,transparent:!0,opacity:0,roughness:.1,metalness:.3});Bp=s;const t=new Ya;t.absarc(0,0,6,0,6.28,!1);const e=new qa;e.absarc(0,0,3,0,6.28,!0),t.holes.push(e);const n=new br(t,24),i=new I(n,s);i.rotation.x=-Math.PI/2,i.position.y=.05,i.visible=!1,ht.add(i),Op=i;const o=new Y({color:4491468,transparent:!0,opacity:0});for(let d=0;d<12;d++){const m=d/12*6.28+w()*.3,x=3.5+w()*2,p=new I(new j(.04+w()*.04,4,3),o);p.scale.set(1.2,.4,1.2),p.position.set(Math.cos(m)*x,.02,Math.sin(m)*x),p.visible=!1,ht.add(p)}const r=new Y({color:13426158,transparent:!0,opacity:0,side:Dt});for(let d=0;d<6;d++){const m=d/6*6.28+w()*.5,x=new I(new qe(.12+w()*.1,5),r);x.rotation.x=-Math.PI/2,x.position.set(Math.cos(m)*3.3,.06,Math.sin(m)*3.3),x.visible=!1,ht.add(x)}const a=new Y({color:8960989,transparent:!0,opacity:0});for(let d=0;d<8;d++){const m=d/8*6.28,x=4+w()*1.5,p=new I(new vt(.003,.003,.4,3),a);p.position.set(Math.cos(m)*x,.055,Math.sin(m)*x),p.rotation.x=Math.PI/2,p.rotation.z=m+Math.PI/2,p.visible=!1,ht.add(p)}const c=new Y({color:264208,transparent:!0,opacity:0,side:Dt}),l=new Ya;l.absarc(0,0,5.2,0,6.28,!1);const h=new qa;h.absarc(0,0,3.8,0,6.28,!0),l.holes.push(h);const u=new br(l,16),f=new I(u,c);f.rotation.x=-Math.PI/2,f.position.y=.04,f.visible=!1,ht.add(f)}const Ar=[];function cd(s,t,e,n,i){const o=[],r=[],a=[];for(let l=0;l<e;l++){const h=s[l],u=s[l+1],f=u.x-h.x;u.y-h.y;const d=u.z-h.z,m=Math.sqrt(f*f+d*d)||1,x=-d/m,p=f/m,g=(l+.5)/e,b=.7+Math.sin(g*Math.PI)*.5,v=t*b/2,M=[h.x+x*v,h.y,h.z+p*v],A=[h.x-x*v,h.y,h.z-p*v],E=[u.x+x*v,u.y,u.z+p*v],T=[u.x-x*v,u.y,u.z-p*v];o.push(...M,...E,...A,...A,...E,...T);const S=l/e,y=(l+1)/e;if(a.push(S,0,y,0,S,1,S,1,y,0,y,1),i){const U=.85+Math.sin(g*Math.PI*3)*.15,L=1.2*U,z=.6*U;r.push(i.r*L,i.g*L,i.b*L),r.push(i.r*L,i.g*L,i.b*L),r.push(i.r*z,i.g*z,i.b*z),r.push(i.r*z,i.g*z,i.b*z),r.push(i.r*L,i.g*L,i.b*L),r.push(i.r*z,i.g*z,i.b*z)}}const c=new Te;return c.setAttribute("position",new Ht(o,3)),c.setAttribute("uv",new Ht(a,2)),r&&c.setAttribute("color",new Ht(r,3)),c.computeVertexNormals(),c}function Zw(){for(let c=0;c<6;c++){const l=F.rainbow[c],h=c/6*6.28,u=6+c*.8,f=ve+6+c*2.5,d=1-c*.05,m=[],x=32;for(let V=0;V<=x;V++){const G=V/x,Z=h+G*Math.PI,W=Math.cos(Z)*u,rt=Math.sin(Z)*u,ft=Math.sin(G*Math.PI)*f;m.push(new N(W,ft,rt))}const p=new st(l),g=cd(m,d,x,!0,p),b=new Y({vertexColors:!0,transparent:!0,opacity:0,side:Dt,depthWrite:!1,blending:ue}),v=new I(g,b);v.visible=!1,ht.add(v);const M=new Ir(m),A=new Y({color:16777215,transparent:!0,opacity:0,blending:ue,depthWrite:!1}),E=new wn(M,x,.03,4,!1),T=new I(E,A);T.visible=!1,ht.add(T);const S=[],y=new Y({color:16777215,transparent:!0,opacity:0,blending:ue,depthWrite:!1});for(let V=0;V<8;V++){const G=new I(new j(.06,4,3),y.clone());G.visible=!1,ht.add(G),S.push({mesh:G,mat:G.material,phase:V/8,speed:.15+Math.random()*.1})}const _=new Y({color:l,transparent:!0,opacity:0,side:Dt,blending:ue}),R=m[0],U=m[m.length-1],L=new I(new qe(1.2,8),_);L.rotation.x=-Math.PI/2,L.position.set(R.x,.03,R.z),L.visible=!1,ht.add(L);const z=new I(new qe(1.2,8),_.clone());z.rotation.x=-Math.PI/2,z.position.set(U.x,.03,U.z),z.visible=!1,ht.add(z),Ar.push({mesh:v,mat:b,coreLine:T,coreMat:A,curve:M,sparkles:S,pools:[L,z],poolMat:_,targetOpacity:0})}const s=[],t=10,e=ve+14,n=32;for(let c=0;c<=n;c++){const l=c/n,h=l*Math.PI;s.push(new N(Math.cos(h)*t,Math.sin(l*Math.PI)*e,Math.sin(h)*t))}const i=new st(15654399),o=cd(s,1.5,n,!0,i),r=new Y({vertexColors:!0,transparent:!0,opacity:0,side:Dt,depthWrite:!1,blending:ue}),a=new I(o,r);a.visible=!1,ht.add(a),Ar.push({mesh:a,mat:r,targetOpacity:0})}function $w(s){for(let t=0;t<Ar.length;t++){const e=Ar[t];if(!(!e.sparkles||!e.curve)&&e.mesh.visible){e.coreLine&&(e.coreLine.visible=e.mesh.visible,e.coreMat.opacity=e.mat.opacity*.4);for(let n=0;n<e.sparkles.length;n++){const i=e.sparkles[n];i.phase+=i.speed*.016,i.phase>1&&(i.phase-=1);const o=e.curve.getPoint(i.phase);i.mesh.position.copy(o),i.mesh.visible=e.mesh.visible;const r=Math.sin(s*8+n*2.1)*.5+.5;i.mat.opacity=e.mat.opacity*r*.7}if(e.pools)for(let n=0;n<e.pools.length;n++)e.pools[n].visible=e.mesh.visible,e.poolMat&&(e.poolMat.opacity=e.mat.opacity*.3)}}}let fn=null;const ei=[],on=new ge,xr=new st;function jw(s){const t=new Y({color:16777215,transparent:!0,opacity:1});fn=new Qi(Tn.fly,t,s),fn.instanceMatrix.setUsage(Se),fn.instanceColor=new mi(new Float32Array(s*3),3),fn.instanceColor.setUsage(Se),on.scale.setScalar(0),on.updateMatrix();for(let e=0;e<s;e++){fn.setMatrixAt(e,on.matrix);const n=e%3===0?F.fireflyB:F.firefly;xr.setHex(n),fn.setColorAt(e,xr),ei.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,phase:Math.random()*6.28,wander:Math.random()*6.28,colorHex:n})}fn.count=s,fn.frustumCulled=!1,ht.add(fn)}function La(s,t,e,n){let i=null;for(let o=0;o<ei.length;o++)if(!ei[o].active){i=ei[o];break}if(!i){let o=1/0;for(let r=0;r<ei.length;r++)ei[r].life<o&&(o=ei[r].life,i=ei[r])}i.x=s,i.y=t+.5+Math.random()*3,i.z=e,i.vx=(Math.random()-.5)*2,i.vy=Math.random()-.5,i.vz=(Math.random()-.5)*2,i.life=n,i.max=n,i.active=!0,i.wander=Math.random()*6.28}function kp(s,t){let e=0,n=!1;for(let i=0;i<ei.length;i++){const o=ei[i];if(!o.active){on.position.set(0,-100,0),on.scale.setScalar(0),on.updateMatrix(),fn.setMatrixAt(i,on.matrix);continue}if(o.life-=s,o.life<=0){o.active=!1,on.position.set(0,-100,0),on.scale.setScalar(0),on.updateMatrix(),fn.setMatrixAt(i,on.matrix);continue}e++,o.wander+=(Math.random()-.5)*3*s,o.vx+=Math.cos(o.wander)*1.5*s,o.vz+=Math.sin(o.wander)*1.5*s,o.vy+=Math.sin(t*2+o.phase)*s,o.vx*=.995,o.vy*=.995,o.vz*=.995,o.x+=o.vx*s,o.y+=o.vy*s,o.z+=o.vz*s;const r=Zt(o.x,o.z)+.3;o.y<r&&(o.y=r,o.vy=Math.abs(o.vy)*.5),o.y>12&&(o.vy-=2*s);const a=Math.sin(t*3+o.phase)*.5+.5,l=o.life/o.max*(.4+a*.6),h=.6+a*.6;on.position.set(o.x,o.y,o.z),on.scale.setScalar(h),on.updateMatrix(),fn.setMatrixAt(i,on.matrix),xr.setHex(o.colorHex),xr.multiplyScalar(l),fn.setColorAt(i,xr),n=!0}return fn.instanceMatrix.needsUpdate=!0,n&&(fn.instanceColor.needsUpdate=!0),e}let dn=null;const ni=[],rn=new ge,tc=new st,Kw=new st(F.spore);function Jw(s){const t=new Y({color:16777215,transparent:!0,opacity:1});dn=new Qi(Tn.spore,t,s),dn.instanceMatrix.setUsage(Se),dn.instanceColor=new mi(new Float32Array(s*3),3),dn.instanceColor.setUsage(Se),rn.scale.setScalar(0),rn.updateMatrix();for(let e=0;e<s;e++)dn.setMatrixAt(e,rn.matrix),tc.setHex(F.spore),dn.setColorAt(e,tc),ni.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});dn.count=s,dn.frustumCulled=!1,ht.add(dn)}function Qw(s,t,e){let n=null;for(let i=0;i<ni.length;i++)if(!ni[i].active){n=ni[i];break}if(!n){let i=1/0;for(let o=0;o<ni.length;o++)ni[o].life<i&&(i=ni[o].life,n=ni[o])}n.x=s,n.y=t,n.z=e,n.vx=(Math.random()-.5)*.3,n.vy=.4+Math.random()*.4,n.vz=(Math.random()-.5)*.3,n.life=3+Math.random()*3,n.max=n.life,n.active=!0}let Gp=0,Hp=0;function t1(s,t){Gp=s,Hp=t}function e1(s){let t=0,e=!1;for(let n=0;n<ni.length;n++){const i=ni[n];if(!i.active){rn.position.set(0,-100,0),rn.scale.setScalar(0),rn.updateMatrix(),dn.setMatrixAt(n,rn.matrix);continue}if(i.life-=s,i.life<=0){i.active=!1,rn.position.set(0,-100,0),rn.scale.setScalar(0),rn.updateMatrix(),dn.setMatrixAt(n,rn.matrix);continue}t++,i.vy+=.3*s,i.vx+=Gp*.3*s,i.vz+=Hp*.3*s,i.vx*=.997,i.vy*=.997,i.vz*=.997,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s;const o=i.life/i.max*.7;rn.position.set(i.x,i.y,i.z),rn.scale.setScalar(1),rn.updateMatrix(),dn.setMatrixAt(n,rn.matrix),tc.copy(Kw).multiplyScalar(o),dn.setColorAt(n,tc),e=!0}return dn.instanceMatrix.needsUpdate=!0,e&&(dn.instanceColor.needsUpdate=!0),t}let pn=null;const yo=[];let ll=0;const an=new ge,ec=new st,Vp=new st(F.starMote);function n1(s){const t=new Y({color:16777215,transparent:!0,opacity:1});pn=new Qi(Tn.starMote,t,s),pn.instanceMatrix.setUsage(Se),pn.instanceColor=new mi(new Float32Array(s*3),3),pn.instanceColor.setUsage(Se),an.scale.setScalar(0),an.updateMatrix();for(let e=0;e<s;e++)pn.setMatrixAt(e,an.matrix),ec.copy(Vp),pn.setColorAt(e,ec),yo.push({x:0,y:0,z:0,life:0,max:0,active:!1,vy:0,drift:0});pn.count=s,pn.frustumCulled=!1,ht.add(pn)}function i1(s){let t=null;for(let e=0;e<yo.length;e++)if(!yo[e].active){t=yo[e];break}t&&(t.x=s.x+(Math.random()-.5)*60,t.z=s.z+(Math.random()-.5)*60,t.y=15+Math.random()*20,t.life=6+Math.random()*6,t.max=t.life,t.active=!0,t.vy=-.15-Math.random()*.3,t.drift=Math.random()*6.28)}function Wp(s,t,e){ll+=s,ll>.15&&(ll=0,i1(e));let n=!1;for(let i=0;i<yo.length;i++){const o=yo[i];if(!o.active){an.position.set(0,-100,0),an.scale.setScalar(0),an.updateMatrix(),pn.setMatrixAt(i,an.matrix);continue}if(o.life-=s,o.life<=0||o.y<.5){o.active=!1,an.position.set(0,-100,0),an.scale.setScalar(0),an.updateMatrix(),pn.setMatrixAt(i,an.matrix);continue}o.y+=o.vy*s,o.drift+=(Math.random()-.5)*.5*s,o.x+=Math.sin(o.drift)*.1*s,o.z+=Math.cos(o.drift)*.08*s;const r=o.life/o.max,a=Math.sin(t*4+i)*.3+.7,c=r*a*.7,l=.5+a*.5;an.position.set(o.x,o.y,o.z),an.scale.setScalar(l),an.updateMatrix(),pn.setMatrixAt(i,an.matrix),ec.copy(Vp).multiplyScalar(c),pn.setColorAt(i,ec),n=!0}pn.instanceMatrix.needsUpdate=!0,n&&(pn.instanceColor.needsUpdate=!0)}let mn=null;const wo=[],cn=new ge,nc=new st,Xp=new st(8956535);function s1(s){const t=new Y({color:16777215,transparent:!0,opacity:1});mn=new Qi(Tn.dustMote,t,s),mn.instanceMatrix.setUsage(Se),mn.instanceColor=new mi(new Float32Array(s*3),3),mn.instanceColor.setUsage(Se),cn.scale.setScalar(0),cn.updateMatrix();for(let e=0;e<s;e++)mn.setMatrixAt(e,cn.matrix),nc.copy(Xp),mn.setColorAt(e,nc),wo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});mn.count=s,mn.frustumCulled=!1,ht.add(mn)}function ld(s,t,e){for(let n=0;n<e;n++){let i=null;for(let a=0;a<wo.length;a++)if(!wo[a].active){i=wo[a];break}if(!i)continue;const o=Math.random()*6.28,r=1+Math.random()*2;i.x=s+Math.cos(o)*.2,i.y=Zt(s,t)+.1,i.z=t+Math.sin(o)*.2,i.vx=Math.cos(o)*r,i.vy=.5+Math.random()*1.5,i.vz=Math.sin(o)*r,i.life=.6+Math.random()*.6,i.max=i.life,i.active=!0}}function o1(s){let t=!1;for(let e=0;e<wo.length;e++){const n=wo[e];if(!n.active){cn.position.set(0,-100,0),cn.scale.setScalar(0),cn.updateMatrix(),mn.setMatrixAt(e,cn.matrix);continue}if(n.life-=s,n.life<=0){n.active=!1,cn.position.set(0,-100,0),cn.scale.setScalar(0),cn.updateMatrix(),mn.setMatrixAt(e,cn.matrix);continue}n.vy-=3*s,n.vx*=.96,n.vy*=.96,n.vz*=.96,n.x+=n.vx*s,n.y+=n.vy*s,n.z+=n.vz*s;const i=Zt(n.x,n.z)+.05;n.y<i&&(n.y=i,n.vy=0,n.vx*=.8,n.vz*=.8);const o=n.life/n.max*.4;cn.position.set(n.x,n.y,n.z),cn.scale.setScalar(1),cn.updateMatrix(),mn.setMatrixAt(e,cn.matrix),nc.copy(Xp).multiplyScalar(o),mn.setColorAt(e,nc),t=!0}mn.instanceMatrix.needsUpdate=!0,t&&(mn.instanceColor.needsUpdate=!0)}let gn=null;const So=[],ln=new ge,ic=new st,qp=new st(F.bubblePop),r1=new j(.02,3,3);function a1(s){const t=new Y({color:16777215,transparent:!0,opacity:1});gn=new Qi(r1,t,s),gn.instanceMatrix.setUsage(Se),gn.instanceColor=new mi(new Float32Array(s*3),3),gn.instanceColor.setUsage(Se),ln.scale.setScalar(0),ln.updateMatrix();for(let e=0;e<s;e++)gn.setMatrixAt(e,ln.matrix),ic.copy(qp),gn.setColorAt(e,ic),So.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});gn.count=s,gn.frustumCulled=!1,ht.add(gn)}function c1(s,t,e,n){for(let i=0;i<n;i++){let o=null;for(let l=0;l<So.length;l++)if(!So[l].active){o=So[l];break}if(!o)continue;const r=Math.random()*6.28,a=Math.random()*3.14,c=1+Math.random()*2;o.x=s,o.y=t,o.z=e,o.vx=Math.cos(r)*Math.sin(a)*c,o.vy=Math.cos(a)*c,o.vz=Math.sin(r)*Math.sin(a)*c,o.life=.4+Math.random()*.4,o.max=o.life,o.active=!0}}function l1(s){let t=!1;for(let e=0;e<So.length;e++){const n=So[e];if(!n.active){ln.position.set(0,-100,0),ln.scale.setScalar(0),ln.updateMatrix(),gn.setMatrixAt(e,ln.matrix);continue}if(n.life-=s,n.life<=0){n.active=!1,ln.position.set(0,-100,0),ln.scale.setScalar(0),ln.updateMatrix(),gn.setMatrixAt(e,ln.matrix);continue}n.vy-=2*s,n.vx*=.97,n.vy*=.97,n.vz*=.97,n.x+=n.vx*s,n.y+=n.vy*s,n.z+=n.vz*s;const i=n.life/n.max*.8;ln.position.set(n.x,n.y,n.z),ln.scale.setScalar(1),ln.updateMatrix(),gn.setMatrixAt(e,ln.matrix),ic.copy(qp).multiplyScalar(i),gn.setColorAt(e,ic),t=!0}gn.instanceMatrix.needsUpdate=!0,t&&(gn.instanceColor.needsUpdate=!0)}let xn=null;const bo=[],Ke=new ge,sc=new st,Yp=[new st(F.leafGlow),new st(3394662),new st(2271880),new st(5636044),new st(4513262)];let Zp=0,$p=0;function h1(s,t,e){Zp=s,$p=t}function u1(s){const t=new xe(.12,.08),e=new Y({color:16777215,transparent:!0,opacity:1,side:Dt,depthWrite:!1,blending:ue});xn=new Qi(t,e,s),xn.instanceMatrix.setUsage(Se),xn.instanceColor=new mi(new Float32Array(s*3),3),xn.instanceColor.setUsage(Se),Ke.scale.setScalar(0),Ke.updateMatrix();for(let n=0;n<s;n++)xn.setMatrixAt(n,Ke.matrix),sc.setHex(0),xn.setColorAt(n,sc),bo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,rvx:0,rvy:0,rvz:0,life:0,max:0,active:!1,colorIdx:0});xn.count=s,xn.frustumCulled=!1,ht.add(xn)}function f1(s,t,e){let n=null;for(let o=0;o<bo.length;o++)if(!bo[o].active){n=bo[o];break}if(!n)return;n.x=s+(Math.random()-.5)*2,n.y=t+Math.random()*2,n.z=e+(Math.random()-.5)*2;const i=Math.random()*6.28;n.vx=Math.cos(i)*.3,n.vy=-.2-Math.random()*.3,n.vz=Math.sin(i)*.3,n.rvx=(Math.random()-.5)*4,n.rvy=(Math.random()-.5)*3,n.rvz=(Math.random()-.5)*2,n.rx=Math.random()*6.28,n.ry=Math.random()*6.28,n.rz=Math.random()*6.28,n.life=4+Math.random()*4,n.max=n.life,n.active=!0,n.colorIdx=Math.floor(Math.random()*Yp.length)}function d1(s,t){let e=!1;for(let n=0;n<bo.length;n++){const i=bo[n];if(!i.active){Ke.position.set(0,-100,0),Ke.scale.setScalar(0),Ke.updateMatrix(),xn.setMatrixAt(n,Ke.matrix);continue}if(i.life-=s,i.life<=0||i.y<-.5){i.active=!1,Ke.position.set(0,-100,0),Ke.scale.setScalar(0),Ke.updateMatrix(),xn.setMatrixAt(n,Ke.matrix);continue}i.vx+=Zp*.4*s,i.vz+=$p*.4*s,i.vx+=Math.sin(t*3+n*1.7)*.5*s,i.vz+=Math.cos(t*2.5+n*2.1)*.3*s,i.vy-=.3*s,i.vx*=.995,i.vy=Math.max(i.vy,-.8),i.vz*=.995,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s,i.rx+=i.rvx*s,i.ry+=i.rvy*s,i.rz+=i.rvz*s;const o=i.life/i.max,r=o*(.6+Math.sin(t*2+n*.8)*.4),a=.8+o*.4;Ke.position.set(i.x,i.y,i.z),Ke.rotation.set(i.rx,i.ry,i.rz),Ke.scale.setScalar(a),Ke.updateMatrix(),xn.setMatrixAt(n,Ke.matrix),sc.copy(Yp[i.colorIdx]).multiplyScalar(r),xn.setColorAt(n,sc),e=!0}xn.instanceMatrix.needsUpdate=!0,e&&(xn.instanceColor.needsUpdate=!0)}const ga=40,zh=8;let Je=null;const ii=[],Ln=new ge,ji=new st,jp=new st(4513194);let hd=0,ud=0,Pu=!1;function p1(){const s=new Ya;return s.moveTo(0,-.18),s.quadraticCurveTo(.1,-.17,.11,-.06),s.lineTo(.1,-.02),s.lineTo(.13,.12),s.quadraticCurveTo(.125,.14,.11,.12),s.lineTo(.08,0),s.quadraticCurveTo(.05,-.02,.03,0),s.lineTo(.03,.05),s.lineTo(.02,.22),s.quadraticCurveTo(0,.245,-.02,.22),s.lineTo(-.03,.05),s.lineTo(-.03,0),s.quadraticCurveTo(-.05,-.02,-.08,0),s.lineTo(-.11,.12),s.quadraticCurveTo(-.125,.14,-.13,.12),s.lineTo(-.1,-.02),s.lineTo(-.11,-.06),s.quadraticCurveTo(-.1,-.17,0,-.18),new br(s)}function m1(){const s=p1(),t=new Y({color:16777215,transparent:!0,opacity:1,blending:ue,depthWrite:!1,side:Dt});Je=new Qi(s,t,ga),Je.instanceMatrix.setUsage(Se),Je.instanceColor=new mi(new Float32Array(ga*3),3),Je.instanceColor.setUsage(Se),Ln.position.set(0,-100,0),Ln.scale.setScalar(0),Ln.updateMatrix();for(let e=0;e<ga;e++)Je.setMatrixAt(e,Ln.matrix),ji.setScalar(0),Je.setColorAt(e,ji),ii.push({active:!1,life:0,maxLife:zh,x:0,z:0});Je.count=ga,Je.frustumCulled=!1,ht.add(Je),Pu=!0}function g1(s,t,e,n){if(!Pu)return;const i=s-hd,o=t-ud;if(i*i+o*o<(n?.25:.64))return;hd=s,ud=t;let c=null,l=-1;for(let p=0;p<ii.length;p++)if(!ii[p].active){c=ii[p],l=p;break}if(!c){let p=1/0;for(let g=0;g<ii.length;g++)ii[g].life<p&&(p=ii[g].life,c=ii[g],l=g)}const h=Zt(s,t);c.active=!0,c.life=zh,c.maxLife=zh,c.x=s,c.z=t;const u=l%2===0?1:-1,f=Math.sin(e+Math.PI/2)*.12*u,d=Math.cos(e+Math.PI/2)*.12*u,m=n?1.15:1;Ln.position.set(s+f,h+.015,t+d),Ln.rotation.set(-Math.PI/2,0,-e+(Math.random()-.5)*.15),Ln.scale.set(m,m,m),Ln.updateMatrix(),Je.setMatrixAt(l,Ln.matrix);const x=n?.9:.6;ji.copy(jp).multiplyScalar(x),Je.setColorAt(l,ji)}function x1(s,t){if(!Pu)return;const e=1+(t||0)*1.5;let n=!1;for(let i=0;i<ii.length;i++){const o=ii[i];if(!o.active)continue;if(o.life-=s*e,o.life<=0){o.active=!1,Ln.position.set(0,-100,0),Ln.scale.setScalar(0),Ln.updateMatrix(),Je.setMatrixAt(i,Ln.matrix),ji.setScalar(0),Je.setColorAt(i,ji),n=!0;continue}const r=o.life/o.maxLife,a=r*r;ji.copy(jp).multiplyScalar(a*.6),Je.setColorAt(i,ji),n=!0}Je.instanceMatrix.needsUpdate=!0,n&&(Je.instanceColor.needsUpdate=!0)}const li=[],ro=[];let fd=ve+2,Wi=1;function dd(s){Wi=s}function Kp(s,t,e,n){const i=[];for(let r=0;r<=12;r++){const a=r/12,c=s*(1-a*a),l=t*(1-a*a),h=e+(n-e)*a;i.push(new N(c,h,l))}return{curve:new Ir(i),pts:i}}function _1(s,t,e,n){const i=n||ve+2,o=e+15,r=new gu(new N(s,e,t),new N(s,o,t)),a=new Y({color:F.laserPink,transparent:!0,opacity:0,blending:ue,depthWrite:!1}),c=new I(new wn(r,1,.06,6,!1),a);ht.add(c);const l=new Y({color:F.laserGlow,transparent:!0,opacity:0,blending:ue,depthWrite:!1}),h=new I(new wn(r,1,.2,6,!1),l);ht.add(h);const{curve:u}=Kp(s,t,o,i),f=new Y({color:F.laserPink,transparent:!0,opacity:0,blending:ue,depthWrite:!1}),d=new I(new wn(u,16,.05,6,!1),f);ht.add(d);const m=new Y({color:F.laserGlow,transparent:!0,opacity:0,blending:ue,depthWrite:!1}),x=new I(new wn(u,16,.18,6,!1),m);ht.add(x);const p={upTube:c,upGlow:h,bendTube:d,bendGlow:x,mat:a,glowMat:l,bendMat:f,bendGlowMat:m,fromX:s,fromZ:t,floatY:e,skyY:o,tipY:i,animPhase:0,animTimer:0};li.push(p);for(let g=0;g<li.length-1;g++){const b=li[g],v=(p.skyY+b.skyY)/2,M=[];for(let _=0;_<=8;_++){const R=_/8,U=p.fromX*(1-R)+b.fromX*R,L=p.fromZ*(1-R)+b.fromZ*R,z=v+Math.sin(R*Math.PI)*3;M.push(new N(U,z,L))}const A=new Ir(M),E=new Y({color:F.laserGlow,transparent:!0,opacity:0,blending:ue,depthWrite:!1}),T=new I(new wn(A,10,.03,4,!1),E);ht.add(T);const S=new Y({color:F.laserPink,transparent:!0,opacity:0,blending:ue,depthWrite:!1}),y=new I(new wn(A,10,.1,4,!1),S);ht.add(y),ro.push({tube:T,glow:y,mat:E,glowMat:S,opacity:0})}return p}function M1(s){for(let t=0;t<li.length;t++){const e=li[t];e.tipY=s;const{curve:n}=Kp(e.fromX,e.fromZ,e.skyY,s);ht.remove(e.bendTube),e.bendTube.geometry.dispose(),e.bendTube.geometry=new wn(n,16,.05,6,!1),ht.add(e.bendTube),ht.remove(e.bendGlow),e.bendGlow.geometry.dispose(),e.bendGlow.geometry=new wn(n,16,.18,6,!1),ht.add(e.bendGlow)}}function v1(s,t,e){const n=e||ve+2;Math.abs(n-fd)>.1&&li.length>0&&(M1(n),fd=n);for(let i=0;i<li.length;i++){const o=li[i];if(o.animTimer+=s,o.animPhase===0){const r=Math.min(o.animTimer/.5,1);o.mat.opacity=r*.8,o.glowMat.opacity=r*.3,o.animTimer>.5&&(o.animPhase=1,o.animTimer=0)}else if(o.animPhase===1){const r=Math.min(o.animTimer/.8,1);o.bendMat.opacity=r*.7,o.bendGlowMat.opacity=r*.2,o.mat.opacity=.8,o.glowMat.opacity=.3,o.animTimer>.8&&(o.animPhase=2)}else{const r=Math.sin(t*3+i*1.2)*.5+.5;o.mat.opacity=.5+r*.4,o.glowMat.opacity=.15+r*.15,o.bendMat.opacity=.4+r*.3,o.bendGlowMat.opacity=.1+r*.12}}for(let i=0;i<ro.length;i++){const o=ro[i];o.opacity=Math.min(o.opacity+s*.5,.3);const r=Math.sin(t*2+i*.8)*.5+.5;o.mat.opacity=o.opacity*(.6+r*.4),o.glowMat.opacity=o.opacity*(.2+r*.15)}if(Wi<1){for(let i=0;i<li.length;i++){const o=li[i];o.mat.opacity*=Wi,o.glowMat.opacity*=Wi,o.bendMat.opacity*=Wi,o.bendGlowMat.opacity*=Wi}for(let i=0;i<ro.length;i++)ro[i].mat.opacity*=Wi,ro[i].glowMat.opacity*=Wi}}const y1=new st(F.orbGold),w1=new st(16777215);let eo=0,Xe="SEEK",Xi=-ve,je=0,rr=[],kn=null,ms=null,gs=null,Ge=null,xs=[],Ti=null,Fh=null,Gn=[],ar=null,Jp=null,Qp=null,Oh=[],Bh=[],kh=[],Gh=[],$i=[],ao=null,pd=0,Bn=0,no=[],uo=null,md=!1;const fo=200;let Vn=null;const Iu=[];let t0=!1;function S1(){if(Vn)return;const s=new Te,t=new Float32Array(fo*3),e=new Float32Array(fo*3),n=new Float32Array(fo);s.setAttribute("position",new Ve(t,3)),s.setAttribute("color",new Ve(e,3)),s.setAttribute("size",new Ve(n,1)),s.attributes.position.setUsage(Se),s.attributes.color.setUsage(Se),s.attributes.size.setUsage(Se);const i=new fu({size:.3,vertexColors:!0,transparent:!0,opacity:.9,blending:ue,depthWrite:!1,sizeAttenuation:!0});Vn=new Qd(s,i),Vn.visible=!1,ht.add(Vn);const o=new st(F.obeliskPink),r=new st(11158783);for(let a=0;a<fo;a++){const c=Math.random()<.7?o:r;e[a*3]=c.r*(.8+Math.random()*.4),e[a*3+1]=c.g*(.8+Math.random()*.4),e[a*3+2]=c.b*(.8+Math.random()*.4),n[a]=.15+Math.random()*.25,Iu.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,active:!1,sparklePhase:Math.random()*6.28})}s.attributes.color.needsUpdate=!0,s.attributes.size.needsUpdate=!0}function b1(s,t,e){t0=!0,Vn.visible=!0;for(let n=0;n<fo;n++){const i=Iu[n];i.x=s,i.y=t,i.z=e;const o=Math.random()*6.28,r=Math.random()*Math.PI,a=2+Math.random()*5;i.vx=Math.sin(r)*Math.cos(o)*a,i.vy=Math.cos(r)*a*.5+Math.random()*2,i.vz=Math.sin(r)*Math.sin(o)*a,i.life=5+Math.random()*6,i.active=!0}}function T1(s,t){if(!Vn||!Vn.visible)return;const e=Vn.geometry.attributes.position.array,n=Vn.geometry.attributes.size.array;let i=!1;for(let o=0;o<fo;o++){const r=Iu[o];if(!r.active){e[o*3+1]=-100,n[o]=0;continue}if(i=!0,r.life-=s,r.life<=0||r.y<-1){r.active=!1;continue}r.vy-=1.5*s,r.vx*=.995,r.vz*=.995,r.vx+=Math.sin(t*3+o*.7)*.3*s,r.vz+=Math.cos(t*2.5+o*1.1)*.2*s,r.x+=r.vx*s,r.y+=r.vy*s,r.z+=r.vz*s,e[o*3]=r.x,e[o*3+1]=r.y,e[o*3+2]=r.z;const a=Math.sin(t*6+r.sparklePhase)*.5+.5,c=Math.min(r.life/2,1);n[o]=(.15+a*.2)*c}Vn.geometry.attributes.position.needsUpdate=!0,Vn.geometry.attributes.size.needsUpdate=!0,i||(Vn.visible=!1)}function E1(s){rr=s.orbs,kn=s.obeliskGroup,ms=s.obeliskMat,gs=s.obeliskGlowMat,Ge=s.pinnacleOrb,xs=s.pinnacleRings||[],Ti=s.moatMesh,Fh=s.moatMat,Gn=s.rainbowArcs,ar=s.player,Jp=s.makeLaser,Qp=s.orbHudEl,Oh=s.deers||[],Bh=s.puffs||[],kh=s.jellies||[],Gh=s.moths||[],$i=s.trees||[],ao=s.groundMesh||null,S1()}function A1(s,t){let e=null,n=1/0;for(let c=0;c<rr.length;c++){const l=rr[c];if(l.found)continue;const h=l.x-ar.pos.x,u=l.z-ar.pos.z,f=h*h+u*u;f<n&&(n=f,e=l)}if(e&&n<Qs*Qs){const c=Math.sin(t*2+e.phase)*.5+.5;or.position.set(e.x,1,e.z),or.intensity=1+c*2,or.distance=Qs}else or.intensity=0;for(let c=0;c<rr.length;c++){const l=rr[c];if(!(l.found&&!l.flyUp&&!l._flashing)){if(!l.found){const h=Math.sin(t*1.5+l.phase)*.5+.5;l.group.position.y=l.flyY+Math.sin(t*.8+l.phase)*.3,l.glowMat.opacity=.3+h*.4,l.hazeMat.opacity=.08+h*.12;const u=l.x-ar.pos.x,f=l.z-ar.pos.z,d=u*u+f*f,m=Qs*Qs;if(d<m){const x=1-Math.sqrt(d)/Qs,p=x*x;l.glowMat.opacity=Math.min(.3+h*.4+p*.5,1),l.hazeMat.opacity=Math.min(.08+h*.12+p*.25,.6),l.coreMat.color.copy(w1).lerp(y1,1-p);const g=1+p*.3;l.group.scale.setScalar(g)}else l.group.scale.setScalar(1);for(let x=3;x<l.group.children.length;x++){const p=l.group.children[x],g=(x-3)/6*6.28+t*1.5;p.position.x=Math.cos(g)*.4,p.position.z=Math.sin(g)*.4,p.position.y=Math.sin(g*2+t)*.1}if(d<Qf*Qf){l.found=!0,l._flashing=!0,l._flashTimer=0,l.flyY=l.group.position.y,eo++;const x=Qp||document.getElementById("orb-hud");x&&(x.innerHTML="✦ "+eo+" / "+oo),Xe==="SEEK"&&(Xe="RISING")}}if(l._flashing){l._flashTimer+=s;const h=Math.min(l._flashTimer/1.5,1),u=h<.3?h/.3:1-(h-.3)/.7;l.glowMat.opacity=.5+u*.5,l.hazeMat.opacity=.3+u*.5,l.group.scale.setScalar(1+u*.6),l.group.position.x=l.x+Math.sin(t*30)*u*.05,l.group.position.z=l.z+Math.cos(t*25)*u*.05,l._flashTimer>1.5&&(l._flashing=!1,l.flyUp=!0,l.group.position.x=l.x,l.group.position.z=l.z)}if(l.flyUp){const h=ve+5;l.flyY+=(h-l.flyY)*s*.8,l.group.position.y=l.flyY;const u=Math.min((l.flyY-1)/(h-1),1);if(l.group.scale.setScalar(1-u*.6),l.glowMat.opacity=.8-u*.5,l.flyY>h-1&&!l.laserLine){l.flyUp=!1,l.group.visible=!1;const f=hl();l.laserLine=Jp(l.x,l.z,0,f)}}}}const i=ve/oo,o=-ve+eo*i;if(Xi<o-.01?(Xi+=8*s,Xi>o&&(Xi=o),kn&&(kn.position.y=Xi,kn.position.x=Math.sin(t*25)*.04,kn.position.z=Math.cos(t*30)*.03)):kn&&(kn.position.x*=.9,kn.position.z*=.9),eo>=oo&&Xi>=-.01&&Xe==="RISING"&&(Xe="COMPLETE",je=0),kn){kn.rotation.y+=s*.03;const c=kn.children[kn.children.length-1];if(c&&c.isLight){const l=Math.max(0,Math.min(1,(Xi+ve)/ve));c.intensity=l*1.5*(.8+Math.sin(t*1.5)*.2)}}if(Ge&&Ge.mesh.visible){const c=Math.sin(t*2)*.5+.5;Ge.mat.opacity=.6+c*.3,Ge.hazeMat.opacity=.15+c*.12;const l=eo/oo;Ge.mat.opacity*=.3+l*.7,Ge.hazeMat.opacity*=.2+l*.8}for(let c=0;c<xs.length;c++){const l=xs[c];if(!l.mesh.visible)continue;l.mesh.rotation.x+=l.rx*s,l.mesh.rotation.y+=l.ry*s,l.mesh.rotation.z+=l.rz*s;const h=eo/oo;l.mat.opacity=(.15+h*.35)*(.8+Math.sin(t*1.5+c)*.2)}const a=hl();if(v1(s,t,a),Xe==="COMPLETE"&&je>3?dd(Math.max(0,1-(je-3)/4)):(Xe==="FINALE"||Xe==="TRANSFORM")&&dd(0),T1(s,t),Xe==="COMPLETE"){je+=s;const c=Math.min(je/3,1);if(ms&&(ms.emissiveIntensity=c*1.5),gs&&(gs.emissiveIntensity=c*2.5),Ge&&Ge.mesh.visible&&je>1&&je<3){const l=Math.min((je-1)/1.5,1);Ge.mat.opacity=.9+l*.1,Ge.hazeMat.opacity=.5+l*.5,Ge.mesh.scale.setScalar(1+l*.5),Ge.haze.scale.setScalar(1+l*1);for(let h=0;h<xs.length;h++){const u=xs[h];u.mesh.rotation.x+=u.rx*s*(1+l*4),u.mesh.rotation.y+=u.ry*s*(1+l*4),u.mesh.rotation.z+=u.rz*s*(1+l*4)}}if(Ge&&Ge.mesh.visible&&je>=3&&!t0){const l=new N;Ge.mesh.getWorldPosition(l),b1(l.x,l.y,l.z),Ge.mesh.visible=!1,Ge.haze.visible=!1;for(let h=0;h<xs.length;h++)xs[h].mesh.visible=!1}if(je>3&&Fh){const l=Math.min((je-3)/4,1);Fh.opacity=l*.6,Ti&&(Ti.visible||(Ti.visible=!0),Ti.position.y=.05+Math.sin(t*3)*.02*l)}if(je>4)for(let l=0;l<Gn.length;l++){const h=l*.3,u=Math.min(Math.max((je-4-h)/2,0),1);u>0&&!Gn[l].mesh.visible&&(Gn[l].mesh.visible=!0),Gn[l].mat.opacity=u*.55,Gn[l].mesh.rotation.y+=s*.1*(l+1)*.3}if(je>3){const l=Math.min((je-3)/6,1)*2;for(let h=0;h<Oh.length;h++){const u=Oh[h],f=u.group,d=-f.position.x,m=-f.position.z,x=Math.sqrt(d*d+m*m);x>8?(u.wanderAng=Math.atan2(-f.position.x,-f.position.z),u.state="walk",u.speed=1.5*l,f.position.x+=d/x*u.speed*s,f.position.z+=m/x*u.speed*s,f.rotation.y=u.wanderAng):u.state="pause"}for(let h=0;h<Bh.length;h++){const u=Bh[h],f=u.group,d=-f.position.x,m=-f.position.z,x=Math.sqrt(d*d+m*m);x>8&&(u.wanderAng=Math.atan2(-f.position.x,-f.position.z),u.state="hop",u.hopTimer=u.hopTimer%1.2,f.position.x+=d/x*1.5*l*s,f.position.z+=m/x*1.5*l*s)}for(let h=0;h<kh.length;h++){const u=kh[h],f=u.group;f.position.x+=(0-f.position.x)*s*.15*l,f.position.z+=(0-f.position.z)*s*.15*l}for(let h=0;h<Gh.length;h++){const u=Gh[h];u.centerX+=(0-u.centerX)*s*.2*l,u.centerZ+=(0-u.centerZ)*s*.2*l,u.orbitR=Math.max(u.orbitR-s*.3*l,2)}}je>12&&(Xe="FINALE",console.log("✦ Quest → FINALE"))}if(Xe==="FINALE"){pd+=s,ms&&(ms.emissiveIntensity=1.5+Math.sin(t*.5)*.3),gs&&(gs.emissiveIntensity=2.5+Math.sin(t*.7)*.5),Ti&&(Ti.position.y=.05+Math.sin(t*3)*.02);for(let c=0;c<Gn.length;c++)Gn[c].mesh.rotation.y+=s*.1*(c+1)*.3,Gn[c].mat.opacity=.45+Math.sin(t+c)*.1;pd>30&&(Xe="TRANSFORM",Bn=0,R1(),console.log("✦ Quest → TRANSFORM (trees="+$i.length+")"))}if(Xe==="TRANSFORM"){Bn+=s,ms&&(ms.emissiveIntensity=1.5+Math.sin(t*.5)*.3),gs&&(gs.emissiveIntensity=2.5+Math.sin(t*.7)*.5),Ti&&(Ti.position.y=.05+Math.sin(t*3)*.02);for(let l=0;l<Gn.length;l++)Gn[l].mesh.rotation.y+=s*.1*(l+1)*.3,Gn[l].mat.opacity=.45+Math.sin(t+l)*.1;if(Bn<3&&no.length<$i.length){const l=Math.min(Math.floor(Bn/3*$i.length),$i.length);for(;no.length<l;){const h=no.length,u=$i[h],f=hl(),d=new gu(new N(0,f,0),new N(u.x,0,u.z)),m=new Y({color:F.laserPink,transparent:!0,opacity:0,blending:ue,depthWrite:!1}),x=new I(new wn(d,8,.06,4,!1),m);ht.add(x);const p=new Y({color:F.laserGlow,transparent:!0,opacity:0,blending:ue,depthWrite:!1}),g=new I(new wn(d,8,.18,4,!1),p);ht.add(g),no.push({tube:x,glow:g,mat:m,glowMat:p,timer:0})}}for(let l=0;l<no.length;l++){const h=no[l];h.timer+=s;const u=Math.min(h.timer/.5,1),f=Math.sin(t*3+l*.5)*.5+.5;h.mat.opacity=u*(.6+f*.4),h.glowMat.opacity=u*(.2+f*.15)}let c=0;Bn>=3&&Bn<6?c=(Bn-3)/3:Bn>=6&&Bn<10?(c=1,md||(C1(),md=!0,console.log("✦ Trees + ground transformed"))):Bn>=10&&Bn<13&&(c=1-(Bn-10)/3),uo&&(uo.style.opacity=c)}}function hl(){return Xi+ve+3}function R1(){uo||(uo=document.createElement("div"),uo.style.cssText="position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;opacity:0;pointer-events:none;z-index:9999;",document.body.appendChild(uo))}function C1(){const s=[{color:5575728,glow:13378167,core:16729258},{color:3805248,glow:11154363,core:14505471},{color:4461608,glow:14496648,core:16737979},{color:2756688,glow:8926156,core:12277247},{color:4200496,glow:13386905,core:16742348}],t=new st(667712),e=new st(534584);for(let n=0;n<$i.length;n++){const i=$i[n].group,o=s[n%s.length],r=new Set;i.traverse(a=>{if(!a.isMesh||!a.material)return;const c=a.material;if(r.has(c))return;r.add(c);const l={};c.color.getHSL(l),l.h>=.2&&l.h<=.6&&l.s>.08?(l.l>.45?c.color.set(o.core):c.transparent&&c.opacity<.15?c.color.set(o.glow):c.color.set(o.color),c.emissive&&c.emissive.set(o.glow)):l.h<.2&&l.s>.05&&l.l>.05&&l.l<.4?(c.color.copy(t),c.emissive&&c.emissive.copy(e)):l.l<.06&&c.color.set(657432)})}if(ao&&ao.material){ao.material.emissive.set(2099264),ao.material.emissiveIntensity=.3;const n=ao.geometry.attributes.color;if(n){const i=n.array;for(let o=0;o<i.length;o+=3){const r=i[o],a=i[o+1],c=i[o+2];i[o]=r*.5+c*.3,i[o+1]=a*.15,i[o+2]=c*.7+a*.4}n.needsUpdate=!0}}}const P1=600;let xa=.25,ye=1,gd=.85,Le="NIGHT",cr=null,lr=null,Hh=null,hr=null,Da=null;const xd=[{label:"DUSK",sky:new st(923685),fog:new st(791584),fogDensity:.009,moonInt:.6,moonCol:new st(14527112),moonElev:15,ambSky:new st(4469589),ambGnd:new st(2238488),ambInt:.6,stars:.4,bio:.7,plRange:16,plInt:.5},{label:"NIGHT",sky:new st(330264),fog:new st(528408),fogDensity:.01,moonInt:1,moonCol:new st(12307694),moonElev:55,ambSky:new st(3359846),ambGnd:new st(1587232),ambInt:.7,stars:.85,bio:1,plRange:18,plInt:.55},{label:"DEEP_NIGHT",sky:new st(198160),fog:new st(397332),fogDensity:.012,moonInt:.55,moonCol:new st(8952251),moonElev:75,ambSky:new st(1712708),ambGnd:new st(1188888),ambInt:.5,stars:1,bio:1.5,plRange:22,plInt:.7},{label:"DAWN",sky:new st(1187888),fog:new st(923688),fogDensity:.011,moonInt:.5,moonCol:new st(13417386),moonElev:20,ambSky:new st(3354197),ambGnd:new st(1843224),ambInt:.55,stars:.35,bio:.65,plRange:17,plInt:.5}],Hi=new st,_d=new st;function I1(s){cr=s.scene,lr=s.moon,Hh=s.moon2,hr=s.hemiLight,Da=s.playerLight}function L1(s){if(!cr)return;xa=(xa+s/P1)%1;const t=xa*4,e=Math.floor(t)%4,n=(e+1)%4,i=t-Math.floor(t),o=.5-.5*Math.cos(i*Math.PI),r=xd[e],a=xd[n];Le=o<.5?r.label:a.label;const c=(l,h)=>l+(h-l)*o;if(Hi.copy(r.sky).lerp(a.sky,o),cr.background.copy(Hi),Hi.copy(r.fog).lerp(a.fog,o),cr.fog.color.copy(Hi),cr.fog.density=c(r.fogDensity,a.fogDensity),lr){Hi.copy(r.moonCol).lerp(a.moonCol,o),lr.color.copy(Hi),lr.intensity=c(r.moonInt,a.moonInt);const l=xa*Math.PI*2,h=c(r.moonElev,a.moonElev)*Math.PI/180,u=60;lr.position.set(Math.cos(l)*Math.cos(h)*u,Math.sin(h)*u,Math.sin(l)*Math.cos(h)*u)}if(Hh){const l=c(r.moonInt,a.moonInt)/.85;Hh.intensity=.3*l}hr&&(Hi.copy(r.ambSky).lerp(a.ambSky,o),_d.copy(r.ambGnd).lerp(a.ambGnd,o),hr.color.copy(Hi),hr.groundColor.copy(_d),hr.intensity=c(r.ambInt,a.ambInt)),Da&&(Da.distance=c(r.plRange,a.plRange),Da.intensity=c(r.plInt,a.plInt)),gd=c(r.stars,a.stars),sw(gd),ye=c(r.bio,a.bio)}let bs=0,po=0,Di=0,To="CLEAR",Ni=!1,ri=0;const Ua={CLEAR:{fogMult:1,windBase:.3,rainRate:0,skyDarken:0,mistCount:0,duration:[90,180]},MISTY:{fogMult:1.8,windBase:.2,rainRate:0,skyDarken:.05,mistCount:6,duration:[60,150]},LIGHT_RAIN:{fogMult:1.3,windBase:.6,rainRate:.3,skyDarken:.1,mistCount:2,duration:[60,120]},HEAVY_RAIN:{fogMult:1.6,windBase:1,rainRate:.8,skyDarken:.2,mistCount:3,duration:[45,100]},FOG_BANK:{fogMult:2.5,windBase:.15,rainRate:0,skyDarken:.1,mistCount:8,duration:[60,120]},LUMINOUS_STORM:{fogMult:1.4,windBase:1.5,rainRate:.6,skyDarken:.15,mistCount:2,duration:[40,90]}},D1={CLEAR:{MISTY:.4,LIGHT_RAIN:.3,FOG_BANK:.2,LUMINOUS_STORM:.1},MISTY:{CLEAR:.3,LIGHT_RAIN:.3,FOG_BANK:.3,HEAVY_RAIN:.1},LIGHT_RAIN:{CLEAR:.2,MISTY:.2,HEAVY_RAIN:.4,LUMINOUS_STORM:.2},HEAVY_RAIN:{LIGHT_RAIN:.4,LUMINOUS_STORM:.3,MISTY:.2,CLEAR:.1},FOG_BANK:{MISTY:.4,CLEAR:.3,LIGHT_RAIN:.2,LUMINOUS_STORM:.1},LUMINOUS_STORM:{HEAVY_RAIN:.3,MISTY:.3,CLEAR:.2,LIGHT_RAIN:.2}};let co="CLEAR",io=null,Na=0,_a=0,ul=0,Ma=!1,va=0,fl=Math.random()*Math.PI*2,dl=0,pl=0;const Vh=[],U1=8;let Md=!1,ml=0,ya=1,za=0,wa=0,gl=0;function N1(){const s=D1[co],t=Object.entries(s);let e=0;for(const[,i]of t)e+=i;let n=Math.random()*e;for(const[i,o]of t)if(n-=o,n<=0)return i;return t[0][0]}function z1(){if(Md)return;const s=document.createElement("canvas");s.width=128,s.height=64;const t=s.getContext("2d"),e=t.createRadialGradient(64,32,0,64,32,64);e.addColorStop(0,"rgba(255,255,255,0.5)"),e.addColorStop(.3,"rgba(255,255,255,0.25)"),e.addColorStop(.7,"rgba(255,255,255,0.06)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,64);const n=new du(s),i=new xe(40,14);for(let o=0;o<U1;o++){const r=new Y({map:n,color:5596791,transparent:!0,opacity:0,side:Dt,depthWrite:!1}),a=new I(i,r);a.visible=!1,ht.add(a),Vh.push({mesh:a,mat:r,active:!1,drift:Math.random()*Math.PI*2,speed:.3+Math.random()*.4,baseY:.8+Math.random()*2,wobble:Math.random()*Math.PI*2})}Md=!0}function F1(){z1();const s=Ua.CLEAR.duration;Na=s[0]+Math.random()*(s[1]-s[0])}function O1(s,t,e){if(Ma)if(_a-=s,_a<=0){co=io,io=null,Ma=!1;const o=Ua[co].duration;Na=o[0]+Math.random()*(o[1]-o[0]),va=0}else va=1-_a/ul;else Na-=s,Na<=0&&(io=N1(),Ma=!0,ul=30+Math.random()*60,_a=ul,va=0);const n=Ua[co];if(Ma&&io){const o=Ua[io],r=.5-.5*Math.cos(va*Math.PI),a=(c,l)=>c+(l-c)*r;ya=a(n.fogMult,o.fogMult),za=a(n.rainRate,o.rainRate),wa=a(n.skyDarken,o.skyDarken),gl=a(n.mistCount,o.mistCount),Di=a(n.windBase,o.windBase),To=r<.5?co:io}else ya=n.fogMult,za=n.rainRate,wa=n.skyDarken,gl=n.mistCount,Di=n.windBase,To=co;Ni=To==="LUMINOUS_STORM",fl+=(Math.sin(t*.05)*.2+Math.sin(t*.13)*.1)*s,dl-=s,dl<=0&&(dl=2+Math.random()*6,pl=Math.random()*.8),pl*=Math.pow(.3,s);const i=Di+pl;if(bs=Math.cos(fl)*i,po=Math.sin(fl)*i,ht.fog.density*=ya,wa>.001){const o=ht.background,r=1-wa;o.r*=r,o.g*=r,o.b*=r}if(e){const o=Math.round(gl);for(let r=0;r<Vh.length;r++){const a=Vh[r];if(r<o){a.active||(a.active=!0,a.mesh.visible=!0,a.drift=Math.random()*Math.PI*2);const c=10+Math.sin(t*.3+a.wobble)*8,l=a.drift+t*a.speed*.05;a.mesh.position.set(e.x+Math.cos(l)*c,a.baseY+Math.sin(t*.4+a.wobble)*.5,e.z+Math.sin(l)*c),a.mesh.rotation.y=l+Math.PI/2,a.drift+=bs*s*.02;const h=.03+ya*.012;a.mat.opacity+=(h-a.mat.opacity)*s*2}else a.active&&(a.mat.opacity-=s*.5,a.mat.opacity<=.005&&(a.active=!1,a.mesh.visible=!1,a.mat.opacity=0))}}return Ni&&(ml-=s,ml<=0&&(ml=1+Math.random()*4,ri=1)),ri*=Math.pow(.02,s),ri<.01&&(ri=0),za}function _r(){return za}const ti=300,tr=new Float32Array(ti),er=new Float32Array(ti),nr=new Float32Array(ti),xl=new Float32Array(ti),_l=new Float32Array(ti),Ml=new Float32Array(ti),_s=new Float32Array(ti),In=new Float32Array(ti*6);let Ts=null,Wh=null;function B1(){const s=new Te;s.setAttribute("position",new Ve(In,3)),Wh=new uu({color:8952251,transparent:!0,opacity:.3,depthWrite:!1}),Ts=new Vm(s,Wh),Ts.frustumCulled=!1,Ts.visible=!1,ht.add(Ts);for(let t=0;t<ti;t++)_s[t]=0,e0(t)}function e0(s){const t=s*6;In[t]=0,In[t+1]=-100,In[t+2]=0,In[t+3]=0,In[t+4]=-100,In[t+5]=0}function k1(s,t,e,n,i){if(!Ts)return;const o=e>.01;if(Ts.visible=o,!o)return;Wh.opacity=Math.min(.15+e*.35,.5);const r=Math.floor(e*12*s*60);for(let c=0;c<r;c++){let l=-1;for(let f=0;f<ti;f++)if(_s[f]<=0){l=f;break}if(l===-1)break;const h=Math.random()*Math.PI*2,u=Math.random()*30;tr[l]=t.x+Math.cos(h)*u,er[l]=12+Math.random()*10,nr[l]=t.z+Math.sin(h)*u,xl[l]=n*2+(Math.random()-.5)*.3,_l[l]=-12-Math.random()*8,Ml[l]=i*2+(Math.random()-.5)*.3,_s[l]=2+Math.random()*1.5}const a=.06;for(let c=0;c<ti;c++){if(_s[c]<=0)continue;if(_s[c]-=s,_s[c]<=0||er[c]<Zt(tr[c],nr[c])+.1){_s[c]=0,e0(c);continue}tr[c]+=xl[c]*s,er[c]+=_l[c]*s,nr[c]+=Ml[c]*s;const l=c*6;In[l]=tr[c],In[l+1]=er[c],In[l+2]=nr[c],In[l+3]=tr[c]+xl[c]*a,In[l+4]=er[c]+_l[c]*a,In[l+5]=nr[c]+Ml[c]*a}Ts.geometry.attributes.position.needsUpdate=!0}let ut=null,ze=null,Xh=null,gi=!1,ts=!1,oc=null,vl=null,Fa=null,G1=null,n0=null,H1=null,V1=null,i0=null,W1=null,s0=null,o0=null,X1=null,r0=null,a0=null,yl=0,q1=null,c0=null,Y1=null;const Ai={jelly:0,puff:0,deer:0,moth:0};function wl(s,t){const e=ut.sampleRate*t,n=ut.createBuffer(1,e,ut.sampleRate),i=n.getChannelData(0);if(s==="white")for(let r=0;r<e;r++)i[r]=Math.random()*2-1;else if(s==="brown"){let r=0;for(let a=0;a<e;a++){const c=Math.random()*2-1;i[a]=(r+.02*c)/1.02,r=i[a],i[a]*=1.8}}const o=Math.min(Math.floor(ut.sampleRate*.05),e>>1);for(let r=0;r<o;r++){const a=r/o;i[r]*=a,i[e-1-r]*=a}return n}function ir(s,t,e,n){const i=ut.createBufferSource();i.buffer=s,i.loop=!0;const o=ut.createGain();o.gain.value=t;const r=ut.createBiquadFilter();r.type="lowpass",r.frequency.value=e,r.Q.value=.5;const a=ut.createBiquadFilter();return a.type="highpass",a.frequency.value=n||40,a.Q.value=.5,i.connect(a).connect(r).connect(o).connect(ze),i.start(),{node:i,gain:o,filter:r}}function Z1(){const s=ut.createDelay(1);s.delayTime.value=.37;const t=ut.createDelay(1);t.delayTime.value=.53;const e=ut.createGain();e.gain.value=.2;const n=ut.createGain();n.gain.value=.15;const i=ut.createBiquadFilter();i.type="lowpass",i.frequency.value=2500;const o=ut.createBiquadFilter();o.type="lowpass",o.frequency.value=2e3;const r=ut.createBiquadFilter();r.type="highpass",r.frequency.value=120,r.Q.value=.5;const a=ut.createBiquadFilter();a.type="highpass",a.frequency.value=120,a.Q.value=.5;const c=ut.createGain();c.gain.value=.3,s.connect(i).connect(r).connect(e).connect(s),t.connect(o).connect(a).connect(n).connect(t),s.connect(c),t.connect(c),c.connect(ze);const l=ut.createGain();l.gain.value=1,l.connect(s),l.connect(t),Xh=l}function ur(s,t,e){if(s.connect(t),Xh&&e>0){const n=ut.createGain();n.gain.value=e,s.connect(n).connect(Xh)}}function $1(){const s=()=>{if(!gi){try{ut=new(window.AudioContext||window.webkitAudioContext),ze=ut.createGain(),ze.gain.value=.35,ze.connect(ut.destination),oc=wl("brown",8),vl=wl("brown",5),Fa=wl("white",4),Z1();const t=ir(oc,.05,200,50);G1=t.node,n0=t.gain,H1=t.filter;const e=ir(vl,.03,350,80);V1=e.node,i0=e.gain;const n=ir(Fa,0,400,60);W1=n.node,s0=n.gain,o0=n.filter;const i=ir(Fa,0,2e3,80);X1=i.node,r0=i.gain,a0=i.filter;const o=ir(vl,0,600,60);q1=o.node,c0=o.gain,Y1=o.filter,gi=!0}catch(t){console.warn("Audio init failed:",t)}document.removeEventListener("click",s),document.removeEventListener("keydown",s),document.removeEventListener("touchstart",s)}};document.addEventListener("click",s),document.addEventListener("keydown",s),document.addEventListener("touchstart",s)}function j1(s,t,e,n,i,o,r,a){if(!gi||ts)return;const c=ut.currentTime,l=o==="DEEP_NIGHT"?.07:o==="DAWN"?.03:.05;n0.gain.linearRampToValueAtTime(l,c+.1),i0.gain.linearRampToValueAtTime(l*.6,c+.1);const h=Math.min(t*.12,.18),u=200+t*600;s0.gain.linearRampToValueAtTime(h,c+.1),o0.frequency.linearRampToValueAtTime(u,c+.1);const f=e*.15,d=1200+e*2e3;r0.gain.linearRampToValueAtTime(f,c+.1),a0.frequency.linearRampToValueAtTime(d,c+.1),i>.5&&yl<=0&&(K1(),yl=2+Math.random()*3),yl-=s;let m=1/0;if(r&&a)for(let g=0;g<a.length;g++){const b=a[g].x-r.x,v=a[g].z-r.z,M=b*b+v*v;M<m&&(m=M)}const p=(m<225?1-Math.sqrt(m)/15:0)*.08;c0.gain.linearRampToValueAtTime(p,c+.1),Ai.jelly-=s,Ai.puff-=s,Ai.deer-=s,Ai.moth-=s}function K1(){if(!ut)return;const s=ut.currentTime,t=ut.createOscillator(),e=ut.createGain(),n=ut.createBiquadFilter();t.type="sawtooth",t.frequency.value=50+Math.random()*25,n.type="lowpass",n.frequency.value=120,n.Q.value=1,e.gain.setValueAtTime(.2,s),e.gain.exponentialRampToValueAtTime(.001,s+.8+Math.random()*.5),t.connect(n).connect(e).connect(ze),t.start(),t.stop(s+1.5);const i=ut.createBufferSource();i.buffer=oc;const o=ut.createGain(),r=ut.createBiquadFilter();r.type="lowpass",r.frequency.value=120;const a=ut.createBiquadFilter();a.type="highpass",a.frequency.value=45,a.Q.value=.5,o.gain.setValueAtTime(.15,s),o.gain.exponentialRampToValueAtTime(.001,s+1.2),i.connect(a).connect(r).connect(o).connect(ze),i.start(),i.stop(s+1.5)}function Ds(s,t,e){if(!gi||ts||Ai[s]>0)return;const n=t.x-e.x,i=t.z-e.z,o=n*n+i*i;if(o>900)return;const r=Math.sqrt(o),a=Math.max(0,1-r/30)*.1,c=Math.max(-1,Math.min(1,n/Math.max(r,1))),l=ut.createStereoPanner();l.pan.value=c;const h=ut.currentTime;switch(s){case"jelly":{const u=360+Math.random()*60,f=ut.createOscillator(),d=ut.createOscillator();f.type="sine",d.type="sine",f.frequency.setValueAtTime(u,h),d.frequency.setValueAtTime(u+3,h),f.frequency.linearRampToValueAtTime(u-40,h+1.2),d.frequency.linearRampToValueAtTime(u-37,h+1.2);const m=ut.createOscillator(),x=ut.createGain();m.frequency.value=4,x.gain.value=5,m.connect(x),x.connect(f.frequency),x.connect(d.frequency);const p=ut.createGain();p.gain.setValueAtTime(0,h),p.gain.linearRampToValueAtTime(a,h+.15),p.gain.setValueAtTime(a,h+.6),p.gain.exponentialRampToValueAtTime(.001,h+1.4),f.connect(p),d.connect(p),p.connect(l),ur(l,ze,.4),m.start(h),f.start(h),d.start(h),m.stop(h+1.5),f.stop(h+1.5),d.stop(h+1.5),Ai.jelly=4+Math.random()*5;break}case"puff":{const u=500+Math.random()*100,f=[u,u*1.2,u*1.5];for(let d=0;d<f.length;d++){const m=ut.createOscillator();m.type="sine",m.frequency.value=f[d];const x=ut.createGain(),p=h+d*.07;x.gain.setValueAtTime(0,p),x.gain.linearRampToValueAtTime(a*.5,p+.02),x.gain.exponentialRampToValueAtTime(.001,p+.15),m.connect(x).connect(l),m.start(p),m.stop(p+.18)}ur(l,ze,.3),Ai.puff=3+Math.random()*4;break}case"deer":{const u=100+Math.random()*30,f=ut.createOscillator(),d=ut.createOscillator();f.type="triangle",d.type="triangle",f.frequency.setValueAtTime(u,h),d.frequency.setValueAtTime(u+2,h),f.frequency.linearRampToValueAtTime(u-15,h+.5),d.frequency.linearRampToValueAtTime(u-13,h+.5);const m=ut.createBiquadFilter();m.type="lowpass",m.frequency.value=250,m.Q.value=.5;const x=ut.createGain();x.gain.setValueAtTime(0,h),x.gain.linearRampToValueAtTime(a*.7,h+.12),x.gain.setValueAtTime(a*.7,h+.3),x.gain.exponentialRampToValueAtTime(.001,h+.6),f.connect(m),d.connect(m),m.connect(x).connect(l),ur(l,ze,.3),f.start(h),d.start(h),f.stop(h+.7),d.stop(h+.7),Ai.deer=5+Math.random()*6;break}case"moth":{const u=ut.createOscillator();u.type="sine",u.frequency.setValueAtTime(200+Math.random()*80,h);const f=ut.createOscillator(),d=ut.createGain();f.frequency.value=8+Math.random()*4,d.gain.value=12,f.connect(d).connect(u.frequency);const m=ut.createGain();m.gain.setValueAtTime(0,h),m.gain.linearRampToValueAtTime(a*.2,h+.05),m.gain.exponentialRampToValueAtTime(.001,h+.25),u.connect(m).connect(l),ur(l,ze,.2),f.start(h),u.start(h),f.stop(h+.3),u.stop(h+.3),Ai.moth=4+Math.random()*5;break}}}let rc=0;function J1(s,t){if(!gi||ts||rc>0)return;const e=ut.currentTime;if(t){const n=ut.createBufferSource();n.buffer=Fa;const i=ut.createGain(),o=ut.createBiquadFilter();o.type="bandpass",o.frequency.value=2e3,o.Q.value=.5,i.gain.setValueAtTime(.05,e),i.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(o).connect(i).connect(ze),n.start(),n.stop(e+.15)}else{const n=ut.createOscillator();n.type="sine",n.frequency.value=80+Math.random()*40;const i=ut.createGain();i.gain.setValueAtTime(.03,e),i.gain.exponentialRampToValueAtTime(.001,e+.08),n.connect(i).connect(ze),n.start(),n.stop(e+.1)}rc=s?.22:.35}function Q1(){if(!gi||ts)return;const s=ut.currentTime,t=ut.createOscillator();t.type="sine",t.frequency.setValueAtTime(150,s),t.frequency.exponentialRampToValueAtTime(300,s+.1);const e=ut.createGain();e.gain.setValueAtTime(.03,s),e.gain.exponentialRampToValueAtTime(.001,s+.15),t.connect(e).connect(ze),t.start(),t.stop(s+.2)}function tS(s){if(!gi||ts)return;const t=ut.currentTime,e=ut.createBufferSource();e.buffer=oc;const n=ut.createGain(),i=ut.createBiquadFilter();i.type="lowpass",i.frequency.value=200;const o=ut.createBiquadFilter();o.type="highpass",o.frequency.value=50,o.Q.value=.5,n.gain.setValueAtTime(s*.05,t),n.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(o).connect(i).connect(n).connect(ze),e.start(),e.stop(t+.25)}function eS(s){rc>0&&(rc-=s)}function nS(s,t){if(!gi||ts)return;const e=s.x-t.x,n=s.z-t.z,i=e*e+n*n;if(i>400)return;const o=Math.max(0,1-Math.sqrt(i)/20)*.06,r=ut.currentTime,a=ut.createOscillator();a.type="sine",a.frequency.setValueAtTime(600+Math.random()*300,r),a.frequency.exponentialRampToValueAtTime(200,r+.1);const c=ut.createGain();c.gain.setValueAtTime(o,r),c.gain.exponentialRampToValueAtTime(.001,r+.12),a.connect(c).connect(ze),a.start(),a.stop(r+.15)}function iS(){if(!gi||ts)return;const s=ut.currentTime,t=ut.createOscillator();t.type="sine",t.frequency.setValueAtTime(400,s),t.frequency.exponentialRampToValueAtTime(900,s+.15);const e=ut.createGain();e.gain.setValueAtTime(.06,s),e.gain.exponentialRampToValueAtTime(.001,s+.5),t.connect(e),ur(e,ze,.4),t.start(),t.stop(s+.6)}let l0=null,h0=null,u0=null,Sl=0,vd=0,Sa=0,bl=0,yd=1,qh=!1;function sS(){if(qh||!ut)return;qh=!0;const s=ut.createGain();s.gain.value=0;const t=ut.createOscillator();t.type="sine",t.frequency.value=160;const e=ut.createOscillator();e.type="sine",e.frequency.value=190;const n=ut.createBiquadFilter();n.type="lowpass",n.frequency.value=350,n.Q.value=.5,t.connect(n).connect(s),e.connect(n),s.connect(ze),t.start(),e.start(),l0=t,h0=e,u0=s}function oS(s){if(!ut||s<.001)return;const t=ut.currentTime,e=3e3+Math.random()*2e3,n=ut.createOscillator();n.type="sine",n.frequency.value=e,n.frequency.exponentialRampToValueAtTime(e*.92,t+.08);const i=ut.createGain();i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(s,t+.008),i.gain.exponentialRampToValueAtTime(.001,t+.08),n.connect(i).connect(ze),n.start(t),n.stop(t+.1)}function rS(s,t,e,n,i,o){if(!gi||ts||(sS(),!qh))return;const r=ut.currentTime,a=i==="DEEP_NIGHT"||i==="NIGHT"?1:i==="DUSK"?.5:.3;yd=i==="DUSK"||i==="NIGHT"?1:i==="DEEP_NIGHT"?.6:.3;const c=Math.max(.15,1-o*.7);let l=1/0;if(t&&e)for(let x=0;x<e.length;x++){const p=e[x].x-t.x,g=e[x].z-t.z,b=p*p+g*g;b<l&&(l=b)}const h=l<400?1-Math.sqrt(l)/20:0;vd+=s*2;const u=.7+.3*Math.sin(vd*Math.PI*2),f=h*.025*a*c*u;if(u0.gain.linearRampToValueAtTime(f,r+.15),Sl+=s,Sl>3+Math.random()*4){Sl=0;const x=150+Math.random()*40;l0.frequency.linearRampToValueAtTime(x,r+.5),h0.frequency.linearRampToValueAtTime(x+20+Math.random()*15,r+.5)}let d=1/0;if(t&&n)for(let x=0;x<n.length;x++){const p=n[x].cx-t.x,g=n[x].cz-t.z,b=p*p+g*g;b<d&&(d=b)}const m=d<144?1-Math.sqrt(d)/12:0;if(bl=m*.02*yd*c,bl>.001){if(Sa-=s,Sa<=0){oS(bl);const x=.1+(1-m)*.4;Sa=x+Math.random()*x}}else Sa=0}function aS(s,t,e,n,i){const o=e.x-s.x,r=e.z-s.z,a=o*o+r*r;if(a>n*n)return!1;if(a<.01)return!0;let l=Math.atan2(r,o)-t;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;return Math.abs(l)<i*.5}function cS(s,t,e,n){const i=t.x-s.x,o=t.z-s.z,r=n?e*1.8:e;return i*i+o*o<r*r}function f0(s,t,e){let n=0,i=0,o=0;for(let r=0;r<t.length;r++){const a=t[r],c=s.x-a.x,l=s.z-a.z,h=c*c+l*l;if(h>.01&&h<e*e){const u=Math.sqrt(h);n+=c/u/u,i+=l/u/u,o++}}return o>0&&(n/=o,i/=o),{x:n,z:i}}function d0(s,t){if(t.length===0)return{x:0,z:0};let e=0,n=0;for(let i=0;i<t.length;i++)e+=t[i].x,n+=t[i].z;return e/=t.length,n/=t.length,{x:e-s.x,z:n-s.z}}function lS(s,t){const e=Math.sqrt(s.x*s.x+s.z*s.z),n=ce-t;if(e<n)return{x:0,z:0};const i=(e-n)/t,o=Math.min(i*2,3);return{x:-s.x/e*o,z:-s.z/e*o}}function hS(s,t,e,n,i){let o=0,r=0;const a=Math.cos(t)*n,c=Math.sin(t)*n,l=s.x+a,h=s.z+c;for(let u=0;u<e.length;u++){const f=e[u],d=l-f.x,m=h-f.z,x=d*d+m*m,p=(f.colR||i)+1;if(x<p*p&&x>.01){const g=Math.sqrt(x),b=(p-g)/p*2;o+=d/g*b,r+=m/g*b}}return{x:o,z:r}}const Ei={deer:!1,puffling:!1,jelly:!1,moth:!1,fairyRing:!1,crystalChain:!1,pond:!1},uS={deer:"Spirit Deer",puffling:"Puffling",jelly:"Luminous Jelly",moth:"Moon Moth",fairyRing:"Fairy Ring",crystalChain:"Crystal Resonance",pond:"Moonlit Pond"};let Ci=null,Oa=0,wd="";function fS(){Ci=document.createElement("div"),Ci.id="discovery-text",Ci.style.cssText="position:fixed;top:28%;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:22px;color:#ccffee;text-shadow:0 0 12px #44ffaa,0 0 30px #228866;pointer-events:none;opacity:0;transition:opacity 0.6s;z-index:100;letter-spacing:3px;text-transform:uppercase;",document.body.appendChild(Ci)}function ls(s){Ei[s]||(Ei[s]=!0,wd=uS[s],Oa=3,Ci&&(Ci.textContent=wd,Ci.style.opacity="1"))}function dS(s,t,e,n,i,o,r,a){const c=s.x,l=s.z;if(!Ei.deer)for(let h=0;h<t.length;h++){const u=t[h].group.position.x-c,f=t[h].group.position.z-l;if(u*u+f*f<144){ls("deer");break}}if(!Ei.puffling)for(let h=0;h<e.length;h++){const u=e[h].group.position.x-c,f=e[h].group.position.z-l;if(u*u+f*f<64){ls("puffling");break}}if(!Ei.jelly)for(let h=0;h<n.length;h++){const u=n[h].group.position.x-c,f=n[h].group.position.z-l;if(u*u+f*f<100){ls("jelly");break}}if(!Ei.moth)for(let h=0;h<i.length;h++){const u=i[h].group.position.x-c,f=i[h].group.position.z-l;if(u*u+f*f<64){ls("moth");break}}if(!Ei.fairyRing)for(let h=0;h<o.length;h++){const u=o[h].x-c,f=o[h].z-l;if(u*u+f*f<16){ls("fairyRing");break}}if(!Ei.pond)for(let h=0;h<r.length;h++){const u=r[h].x-c,f=r[h].z-l;if(u*u+f*f<25){ls("pond");break}}!Ei.crystalChain&&a>=3&&ls("crystalChain")}function pS(s){Oa>0&&(Oa-=s,Oa<=.6&&Ci&&(Ci.style.opacity="0"))}let Yh=null,Tl=60;const mS={DUSK:"Dusk",NIGHT:"Night",DEEP_NIGHT:"Deep Night",DAWN:"Dawn"},gS={CLEAR:"Clear",MISTY:"Misty",LIGHT_RAIN:"Light Rain",HEAVY_RAIN:"Heavy Rain",FOG_BANK:"Fog",LUMINOUS_STORM:"Storm"};function xS(){Yh=document.getElementById("hud")}function _S(s,t){if(!Yh)return;Tl=Tl*.95+1/Math.max(s,.001)*.05;const e=Xe==="SEEK"?"Seek the orbs...":Xe==="RISING"?"The obelisk stirs...":Xe==="COMPLETE"?"Convergence!":"Luminaries",n=mS[Le]||"Night",i=gS[To]||"Clear";Yh.innerHTML="<b>"+e+"</b> · "+n+" · "+i+" · FPS:"+Math.round(Tl)+"<br>Pos:"+t.x.toFixed(0)+","+t.z.toFixed(0)}let ac=null;function MS(){ac=document.getElementById("orb-hud")}function vS(){return ac}function yS(){const s=document.getElementById("overlay");s&&(s.style.opacity="0",setTimeout(()=>{try{s.remove()}catch{}},2500)),ac&&(ac.style.display="block")}const ie=[],bn=[],se=[],ai=[],Cn=[],He=[],zo=[],cc=[],Rr=[],di=[],Zh=[],lc=[],hc=[],Mr=[],hi=[],ci=[],Ne=[],Dn=[],$h=[],jh=[],p0=[],Vi=[];let Sd=0,bd=0,El=0,Hn=null,si=0;const Kh=15,Jh=[];let Td=!1;function wS(){if(Td)return;Td=!0;const s=new uu({color:F.crystal,transparent:!0,opacity:0,blending:ue,depthWrite:!1});for(let t=0;t<Kh;t++){const e=new Te,n=new Float32Array(6);e.setAttribute("position",new Ve(n,3)),e.attributes.position.setUsage(Se);const i=new Jd(e,s.clone());i.visible=!1,ht.add(i),Jh.push({line:i,geo:e,opacity:0,active:!1})}}let hs=null;function SS(){if(hs)return hs;const s=new Do(.9,1,48),t=new Y({color:F.echoBloom,transparent:!0,opacity:.5,side:Dt,depthWrite:!1,blending:ue});return hs=new I(s,t),hs.rotation.x=-Math.PI/2,hs.visible=!1,ht.add(hs),hs}function bS(){for(let t=0;t<hy;t++){let e,n,i=!1;for(let o=0;o<20;o++){const r=w()*6.28,a=5+w()*(ce-10);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<ie.length;c++){const l=ie[c].x-e,h=ie[c].z-n;if(l*l+h*h<9){i=!1;break}}if(i)break}if(i){const o=fw(e,n);o.position.y=Zt(e,n),ie.push({group:o,x:e,z:n})}}for(let t=0;t<uy;t++){const e=ie[Math.floor(w()*ie.length)],n=w()*6.28,i=1+w()*4,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i,a=dw(o,r);a.group.position.y=Zt(o,r),bn.push(a)}for(let t=0;t<fy;t++){const e=w()*6.28,n=8+w()*ce*.6,i=Math.cos(e)*n,o=Math.sin(e)*n,r=pw(i,o);r.group.position.y=Zt(i,o),se.push(r)}for(let t=0;t<dy;t++){const e=w()*6.28,n=10+w()*ce*.5,i=Math.cos(e)*n,o=Math.sin(e)*n;ai.push(Cw(i,Zt(i,o)+3+w()*5,o))}for(let t=0;t<py;t++){const e=bn[Math.floor(w()*bn.length)],n=w()*6.28,i=1+w()*5,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i,a=Pw(o,r);a.group.position.y=Zt(o,r),a._baseY=Zt(o,r),Cn.push(a)}for(let t=0;t<my;t++){const e=w()*6.28,n=12+w()*ce*.5,i=Math.cos(e)*n,o=Math.sin(e)*n,r=Iw(i,o),a=Zt(i,o);r.group.position.y=a,r._baseY=a,He.push(r)}for(let t=0;t<gy;t++){const e=ie[Math.floor(w()*ie.length)];zo.push(Lw(e.x,Zt(e.x,e.z)+2+w()*4,e.z))}const s=[null,F.grassPurple,F.grassBlue,F.grassTeal];for(let t=0;t<xy;t++){const e=w()*6.28,n=2+w()*(ce*.9),i=Math.cos(e)*n,o=Math.sin(e)*n,r=s[Math.floor(w()*s.length)],a=mw(i,o,2+w()*2.5,25+Math.floor(w()*20),r);a.mesh.position.y=Zt(i,o),cc.push(a)}for(let t=0;t<yy;t++){let e,n,i=!1;for(let o=0;o<10;o++){const r=w()*6.28,a=3+w()*(ce*.85);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<ie.length;c++){const l=ie[c].x-e,h=ie[c].z-n;if(l*l+h*h<4){i=!1;break}}if(i)break}if(i){const o=Ow(e,n);o.group.position.y=Zt(e,n)-.08,lc.push(o)}}for(let t=0;t<_y;t++){const e=ie[Math.floor(w()*ie.length)],n=w()*6.28,i=1+w()*5,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i,a=xw(o,r);a.group.position.y=Zt(o,r),Rr.push(a)}for(let t=0;t<My;t++){const e=w()*6.28,n=3+w()*(ce*.7),i=Math.cos(e)*n,o=Math.sin(e)*n,r=_w(i,o);r.group.position.y=Zt(i,o),di.push(r)}for(let t=0;t<vy;t++){const e=w()*6.28,n=4+w()*(ce*.8),i=Math.cos(e)*n,o=Math.sin(e)*n,r=Mw(i,o);r.group.position.y=Zt(i,o),Zh.push(r)}for(let t=0;t<oo;t++){let e,n,i=!1;for(let o=0;o<30;o++){const r=w()*6.28,a=20+w()*(ce*.6);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<Dn.length;c++){const l=Dn[c].x-e,h=Dn[c].z-n;if(l*l+h*h<225){i=!1;break}}if(i)break}if(i){const o=Fw(e,n);o.group.position.y=Zt(e,n)+1,o.flyY=Zt(e,n)+1,Dn.push(o)}}for(let t=0;t<gp;t++){const e=w()*6.28,n=2+w()*3,i=Math.cos(e)*n,o=Math.sin(e)*n;hc.push(Dw(i,Zt(i,o)+1+w()*.5,o))}for(let t=0;t<wy;t++){const e=w()*6.28,n=4+w()*(ce*.7),i=Math.cos(e)*n,o=Math.sin(e)*n,r=Sw(i,o);r.group.position.y=Zt(i,o),Mr.push(r)}for(let t=0;t<Sy;t++){let e,n,i=!1;for(let o=0;o<20;o++){const r=w()*6.28,a=10+w()*(ce*.6);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<ie.length;c++){const l=ie[c].x-e,h=ie[c].z-n;if(l*l+h*h<36){i=!1;break}}if(i)break}if(i){bh(e,n,4);const o=Uw(e,n);o.group.position.y=Zt(e,n),hi.push(o)}}for(let t=0;t<by;t++){const e=w()*6.28,n=5+w()*ce*.6,i=Math.cos(e)*n,o=Math.sin(e)*n;ci.push(Nw(i,Zt(i,o)+.5+w()*5,o))}for(let t=0;t<Ey;t++){let e,n,i=!1;for(let o=0;o<20;o++){const r=w()*6.28,a=8+w()*(ce*.6);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<ie.length;c++){const l=ie[c].x-e,h=ie[c].z-n;if(l*l+h*h<16){i=!1;break}}if(i)break}if(i){bh(e,n,3);const o=zw(e,n);o.group.position.y=Zt(e,n),Ne.push(o)}}for(let t=0;t<Ay;t++){const e=w()*6.28,n=5+w()*(ce*.7),i=Math.cos(e)*n,o=Math.sin(e)*n,r=Tw(i,o);r.group.position.y=Zt(i,o),$h.push(r)}for(let t=0;t<Ry;t++){const e=ie[Math.floor(w()*ie.length)],n=w()*6.28,i=2+w()*4,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i,a=Ew(o,r);a.group.position.y=Zt(o,r),jh.push(a)}for(let t=0;t<Cy;t++){const e=w()*6.28,n=6+w()*(ce*.65),i=Math.cos(e)*n,o=Math.sin(e)*n,r=Aw(i,o);r.group.position.y=Zt(i,o),p0.push(r)}}function m0(s,t){const e=1+Di*1.5,n=bs*.03,i=po*.03,o=J.pos.x,r=J.pos.z;for(let a=0;a<ie.length;a++){const c=ie[a],l=c.x-o,h=c.z-r;if(l*l+h*h>900)continue;const u=c.x*.1+c.z*.13;c.group.rotation.z=Math.sin(t*.3+u)*.004*e+n*.15,c.group.rotation.x=Math.sin(t*.25+u+1)*.003*e+i*.15}for(let a=0;a<cc.length;a++){const c=cc[a],l=c.cx-o,h=c.cz-r;l*l+h*h>625||gw(c,t,e,n,i,o,r)}for(let a=0;a<Rr.length;a++){const c=Rr[a],l=c.group.position.x-o,h=c.group.position.z-r;l*l+h*h>900||(c.group.rotation.z=Math.sin(t*.8+c.phase)*.03*e+n,c.group.rotation.x=Math.sin(t*.6+c.phase+1)*.02*e+i)}for(let a=0;a<di.length;a++){const c=di[a],l=c.group.position.x-o,h=c.group.position.z-r;if(l*l+h*h>900)continue;const u=Math.sin(t*1+c.phase)*.5+.5;c.petalMat.emissiveIntensity=(.3+u*.5)*ye,c.group.rotation.z=Math.sin(t*.9+c.phase)*.04*e+n*.5}for(let a=0;a<Zh.length;a++){const c=Zh[a],l=c.group.position.x-o,h=c.group.position.z-r;l*l+h*h>900||(c.group.rotation.z=Math.sin(t*1.1+c.phase)*c.swayAmp*e+n,c.group.rotation.x=Math.sin(t*.8+c.phase+2)*c.swayAmp*.5*e+i)}for(let a=0;a<$h.length;a++){const c=$h[a],l=Math.sin(t*1.2+c.phase)*.5+.5;c.orbMat.emissiveIntensity=(.5+l*.5)*ye,c.hazeMat.opacity=(.04+l*.04)*ye,c.group.rotation.z=Math.sin(t*.5+c.phase)*.02*e+n*.3,c.group.rotation.x=Math.sin(t*.4+c.phase+1)*.015*e+i*.3}for(let a=0;a<jh.length;a++){const c=jh[a];for(let l=0;l<c.podMats.length;l++){const h=Math.sin(t*1.5+c.phase+l*1.8)*.5+.5;c.podMats[l].emissiveIntensity=(.3+h*.5)*ye}c.group.rotation.z=Math.sin(t*.35+c.phase)*.01*e+n*.2}Rw(p0,s,t,ye)}function g0(s,t){for(let n=0;n<ai.length;n++){const i=ai[n],o=i.group,r=o.position.x,a=o.position.z;i._syncPhase===void 0&&(i._syncPhase=i.phase);let c=0,l=0;for(let h=0;h<ai.length;h++){if(h===n)continue;const u=ai[h],f=u.group.position.x-r,d=u.group.position.z-a;f*f+d*d<225&&(c+=u._syncPhase||u.phase,l++)}if(l>0){const h=c/l;i._syncPhase+=(h-i._syncPhase)*s*.4}}const e=Le==="DEEP_NIGHT"?2:Le==="DAWN"?-1.5:0;for(let n=0;n<ai.length;n++){const i=ai[n],o=i.group,r=o.position.x,a=o.position.z,c=i.floatY+e;if(i._stT-=s,i._stT<=0)if(Ni)i._state="display",i._stT=10+Math.random()*15;else{const d=Math.random();d<.5?(i._state="drift",i._stT=20+Math.random()*30):d<.75?(i._state="pulse",i._stT=8+Math.random()*12):(i._state="migrate",i._migrateAng=Math.random()*6.28,i._stT=15+Math.random()*20)}switch(Ni&&i._state!=="display"&&(i._state="display",i._stT=10,Ds("jelly",{x:r,z:a},J.pos)),i._state){case"drift":{i.driftAng+=s*.15;const d=8+Math.sin(t*.1+i.phase)*4,m=i.homeX+Math.cos(i.driftAng)*d,x=i.homeZ+Math.sin(i.driftAng)*d;o.position.x+=(m-r)*s*.3,o.position.z+=(x-a)*s*.3,o.position.y=c+Math.sin(t*i.wobble+i.phase)*1.5;break}case"pulse":{i.driftAng+=s*.08,o.position.x+=Math.cos(i.driftAng)*s*.3,o.position.z+=Math.sin(i.driftAng)*s*.3,o.position.y=c+Math.sin(t*i.wobble+i.phase)*1,i._pulseSync=Math.sin(t*2+i._syncPhase)*.5+.5;break}case"migrate":{o.position.x+=Math.cos(i._migrateAng)*s*1,o.position.z+=Math.sin(i._migrateAng)*s*1,o.position.y=c+Math.sin(t*i.wobble+i.phase)*.8,o.position.x*o.position.x+o.position.z*o.position.z>ce*.8*(ce*.8)&&(i._migrateAng+=Math.PI);break}case"display":{i.driftAng+=s*.4,o.position.x+=Math.cos(i.driftAng)*s*.8,o.position.z+=Math.sin(i.driftAng)*s*.8,o.position.y=c+Math.sin(t*2+i.phase)*2,i._syncPhase+=(0-i._syncPhase)*s*2;break}}i._state==="pulse"&&Math.random()<.003&&Ds("jelly",{x:r,z:a},J.pos);const l=i._syncPhase||i.phase,h=Math.sin(t*1.2+l)*.5+.5;let u=1,f=0;if(i._state==="pulse")u=1+i._pulseSync*1.5,f=i._pulseSync*.15;else if(i._state==="display"){const d=Math.sin(t*4)*.5+.5;u=1.5+d*1.2,f=.15+d*.1}else i._state==="drift"&&(u=1+h*.3);i.bellMat.emissiveIntensity=(.4+h*.8)*ye*u,i.bellMat.opacity=.35+h*.25+f,o.rotation.y+=s*.2;for(let d=2;d<o.children.length;d++)o.children[d].rotation.x=Math.sin(t*2+d+l)*.15,o.children[d].rotation.z=Math.sin(t*1.5+d*.7+l)*.1}}function x0(s,t){const e=Ie.ShiftLeft||Ie.ShiftRight||Go,n=Le==="DAWN"?.6:Le==="NIGHT"?1.3:1,i=Le==="DAWN"?2:Le==="NIGHT"?.6:1;for(let o=0;o<Cn.length;o++){const r=Cn[o],a=r.group,c=a.position.x,l=a.position.z,h=c-J.pos.x,u=l-J.pos.z,f=h*h+u*u;if(r.state!=="startled"&&r.state!=="following"&&r.state!=="huddle"){const T=e?3.5:2;let S=f<T*T;if(!S)for(let y=0;y<He.length;y++){if(He[y].state!=="flee")continue;const _=He[y].group.position.x-c,R=He[y].group.position.z-l;if(_*_+R*R<25){S=!0;break}}S&&(r.state="startled",r._scaredT=.6+Math.random()*.5,r.wanderAng=Math.atan2(h,u),r.hopTimer=0,Ds("puff",{x:c,z:l},J.pos))}if(Ni&&r.state!=="startled"&&r.state!=="huddle"){let T=1/0,S=-1;for(let y=0;y<Cn.length;y++){if(y===o)continue;const _=Cn[y].group.position.x-c,R=Cn[y].group.position.z-l,U=_*_+R*R;U<T&&(T=U,S=y)}S>=0&&T>1&&(r.state="huddle",r._huddleTarget=S)}No>8&&f<144&&r.state==="idle"&&Math.random()<.001&&(r.state="following",r._followT=10+Math.random()*10);const d=c-r._lastTX,m=l-r._lastTZ;d*d+m*m>.25&&(r._baseY=Zt(c,l),r._lastTX=c,r._lastTZ=l);const x={x:c,z:l},p=[];for(let T=0;T<Cn.length;T++){if(T===o)continue;const S=Cn[T].group.position.x,y=Cn[T].group.position.z;(S-c)*(S-c)+(y-l)*(y-l)<100&&p.push({x:S,z:y})}const g=f0(x,p,1.5),b=p.length>0?d0(x,p):{x:0,z:0},v=g.x*2+b.x*.3,M=g.z*2+b.z*.3,A=Math.sqrt(v*v+M*M);switch(r.state){case"idle":{if(r.idleTimer-=s,a.position.y=r._baseY+Math.sin(t*2+r.phase)*.02,a.rotation.y+=Math.sin(t*.5+r.phase)*s*.3,A>.1&&p.length>1&&(a.position.x+=b.x*.05*s,a.position.z+=b.z*.05*s),Math.random()<.001&&Ds("puff",{x:c,z:l},J.pos),r.idleTimer<=0){const T=A>.2?Math.atan2(v,M):0;r.state="hop",r.wanderAng+=(Math.random()-.5)*1.5+T*.3,r.hopTimer=0}break}case"hop":{r.hopTimer+=s;const S=r.hopTimer/1.2;if(S>=1)r.state="idle",r.idleTimer=(1.5+Math.random()*3)*i,a.position.y=r._baseY;else{a.position.y=r._baseY+Math.sin(S*Math.PI)*.3,a.position.x+=Math.sin(r.wanderAng)*r.speed*n*s,a.position.z+=Math.cos(r.wanderAng)*r.speed*s;const y=1-Math.sin(S*Math.PI)*.15,_=1+Math.sin(S*Math.PI)*.2;a.scale.set(y,_,y),a.rotation.y=r.wanderAng}break}case"startled":{r._scaredT-=s,r.hopTimer+=s*1.5;const T=Math.min(r.hopTimer/.8,1);a.position.y=r._baseY+Math.sin(T*Math.PI)*.5,a.position.x+=Math.sin(r.wanderAng)*r.speed*2*s+g.x*.5*s,a.position.z+=Math.cos(r.wanderAng)*r.speed*2*s+g.z*.5*s,a.scale.set(.85,1.3,.85),r._scaredT<=0&&(r.state="idle",r.idleTimer=3+Math.random()*3,a.position.y=r._baseY,a.scale.set(1,1,1));break}case"following":{if(r._followT-=s,f>225||No<3||r._followT<=0){r.state="idle",r.idleTimer=2;break}if(r.wanderAng=Math.atan2(J.pos.x-c,J.pos.z-l),f>9){r.hopTimer+=s;const T=r.hopTimer%1.5/1.5;a.position.y=r._baseY+Math.sin(T*Math.PI)*.2,a.position.x+=Math.sin(r.wanderAng)*r.speed*.4*s,a.position.z+=Math.cos(r.wanderAng)*r.speed*.4*s}else a.position.y=r._baseY+Math.sin(t*3+r.phase)*.03;a.rotation.y=r.wanderAng;break}case"huddle":{if(!Ni){r.state="idle",r.idleTimer=2;break}const T=Cn[r._huddleTarget];if(T){const S=T.group.position.x-c,y=T.group.position.z-l,_=Math.sqrt(S*S+y*y);_>.5&&(a.position.x+=S/_*r.speed*.5*s,a.position.z+=y/_*r.speed*.5*s)}a.rotation.z=Math.sin(t*8)*.05,a.position.y=r._baseY;break}}if(r._blinkTimer-=s,r._blinkTimer<=0)if(r._blinkState===0){for(let T=0;T<r.eyes.length;T++)r.eyes[T].scale.y=.1;r._blinkState=1,r._blinkTimer=.08+Math.random()*.06}else{for(let T=0;T<r.eyes.length;T++)r.eyes[T].scale.y=1;r._blinkState=0,r._blinkTimer=2+Math.random()*5}for(let T=0;T<r.ears.length;T++){const S=r.ears[T];S.mesh.rotation.z=S.baseRotZ+Math.sin(t*3.5+S.side*1.2+r.phase)*.08}r.tail.position.y=.38+Math.sin(t*4+r.phase)*.015,a.position.x*a.position.x+a.position.z*a.position.z>ce*.85*(ce*.85)&&(r.wanderAng+=Math.PI)}}function _0(s,t){const e=Ie.ShiftLeft||Ie.ShiftRight||Go;for(let n=0;n<He.length;n++){const i=He[n],o=i.group,r=o.position.x,a=o.position.z,c=r-J.pos.x,l=a-J.pos.z,h=c*c+l*l,u=Math.atan2(c,l),f=e?18:12,d=f*f,m=e?10:Ly,x=m*m,p=r-i._lastTX,g=a-i._lastTZ;p*p+g*g>.25&&(i._baseY=Zt(r,a),i._lastTX=r,i._lastTZ=a);const b=i._baseY;if(i.state!=="flee"&&i.state!=="alert"&&i.state!=="watching"){const _={x:r,z:a},R={x:J.pos.x,z:J.pos.z};h<x||cS(_,R,m,e)?(i.state="flee",i.wanderAng=u,i.fleeTimer=2.5+Math.random()*2,i._zigTimer=0,Ds("deer",_,J.pos)):(h<d||aS(_,i.wanderAng,R,f,Math.PI*.5))&&(i.state="alert",i._stT=1+Math.random()*1.5,Ds("deer",_,J.pos))}if(i.state!=="flee")for(let _=0;_<He.length;_++){if(_===n||He[_].state!=="flee")continue;const R=He[_].group.position.x-r,U=He[_].group.position.z-a;if(R*R+U*U<400){i.state="flee",i.wanderAng=He[_].wanderAng+(Math.random()-.5)*.4,i.fleeTimer=2+Math.random()*1.5,i._zigTimer=0;break}}const v=[];for(let _=0;_<He.length;_++){if(_===n)continue;const R=He[_].group.position.x,U=He[_].group.position.z;(R-r)*(R-r)+(U-a)*(U-a)<400&&v.push({x:R,z:U})}const M=f0({x:r,z:a},v,3),A=v.length>0?d0({x:r,z:a},v):{x:0,z:0};(i.state==="alert"||i.state==="watching")&&(i.headLook+=(u-i.wanderAng)*.3*s);let E=i.speed,T=!1;switch(i.state){case"walk":{if(T=!0,i.walkTimer-=s,i.walkTimer<=0){const R=Math.random(),U=Le==="DUSK"?.55:.4,L=Le==="DEEP_NIGHT"?.25:.1;if(R<.25)i.state="pause",i.pauseTimer=2+Math.random()*3;else if(R<U)i.state="graze",i._stT=Le==="DUSK"?5+Math.random()*6:3+Math.random()*4;else if(R<U+.1&&Ne.length>0){i.state="drink",i._stT=8;let z=1/0;for(let V=0;V<Ne.length;V++){const G=Ne[V].x-r,Z=Ne[V].z-a,W=G*G+Z*Z;W<z&&(z=W,i._drinkTgt=Ne[V])}}else R<U+.1+L?(i.state="rest",i._stT=Le==="DEEP_NIGHT"?8+Math.random()*8:5+Math.random()*5):(i.wanderAng+=(Math.random()-.5)*1.2,i.walkTimer=3+Math.random()*5)}if((r-i.homeX)*(r-i.homeX)+(a-i.homeZ)*(a-i.homeZ)>400){const R=Math.atan2(i.homeX-r,i.homeZ-a);i.wanderAng+=(R-i.wanderAng)*s*.5}if(v.length>0){const R=Math.atan2(A.x*.15+M.x*.8,A.z*.15+M.z*.8);i.wanderAng+=(R-i.wanderAng)*s*.3}break}case"pause":{i.pauseTimer-=s,i.headLook=Math.sin(t*.6)*.4,i.pauseTimer<=0&&(i.state="walk",i.walkTimer=3+Math.random()*5);break}case"graze":{i._stT-=s,i.headBob=-.5,i._stT<=0&&(i.state="walk",i.walkTimer=2+Math.random()*4,i.headBob=0);break}case"drink":{if(i._stT-=s,i._drinkTgt){const _=i._drinkTgt.x-r,R=i._drinkTgt.z-a;Math.sqrt(_*_+R*R)>2?(i.wanderAng=Math.atan2(_,R),T=!0,E=i.speed*.7):i.headBob=-.6}i._stT<=0&&(i.state="walk",i.walkTimer=3+Math.random()*4,i.headBob=0,i._drinkTgt=null);break}case"rest":{i._stT-=s,o.position.y=Math.max(b-.3,o.position.y-s*.5),i._stT<=0&&(i.state="walk",i.walkTimer=2+Math.random()*3);break}case"alert":{i._stT-=s,h<x?(i.state="flee",i.wanderAng=u,i.fleeTimer=2.5+Math.random()*2):i._stT<=0&&(h<f*1.2*(f*1.2)?(i.state="watching",i._stT=3+Math.random()*3):(i.state="walk",i.walkTimer=2+Math.random()*3));break}case"watching":{i._stT-=s,T=!0,E=i.speed*.3,i.wanderAng=u,h<x?(i.state="flee",i.wanderAng=u,i.fleeTimer=2.5+Math.random()*2):(h>f*1.5*(f*1.5)||i._stT<=0)&&(i.state="walk",i.walkTimer=2+Math.random()*4);break}case"flee":{T=!0,E=i.speed*Dy,i.fleeTimer-=s,i._zigTimer-=s,i._zigTimer<=0&&(i._zigDir*=-1,i._zigTimer=.4+Math.random()*.4),i.wanderAng=u+i._zigDir*.3;const _=hS({x:r,z:a},i.wanderAng,ie,3,1.5);_.x*_.x+_.z*_.z>.01&&(i.wanderAng+=Math.atan2(_.z,_.x)*.3);const R=lS({x:r,z:a},8);(R.x!==0||R.z!==0)&&(i.wanderAng=Math.atan2(R.z,R.x)),(i.fleeTimer<=0||h>f*2*(f*2))&&(i.state="walk",i.walkTimer=3+Math.random()*5);break}}if(T&&(o.position.x+=Math.sin(i.wanderAng)*E*s,o.position.z+=Math.cos(i.wanderAng)*E*s,i.legCycle+=s*E*3),o.position.x*o.position.x+o.position.z*o.position.z>ce*.9*(ce*.9)&&(i.wanderAng=Math.atan2(-o.position.x,-o.position.z)),i.state!=="rest"){const _=b-o.position.y;Math.abs(_)>.01?o.position.y+=Math.sign(_)*Math.min(Math.abs(_),s*2):o.position.y=b}if(o.rotation.y=i.wanderAng,i.state==="alert"||i.state==="watching"){const _=u-i.wanderAng;i.headLook+=(_*.5-i.headLook)*s*3}const y=i.headBob||0;i.neckPivot.rotation.x+=(y-i.neckPivot.rotation.x)*s*3,i.neckPivot.rotation.y+=(i.headLook-i.neckPivot.rotation.y)*s*4,T&&i.state!=="graze"&&i.state!=="drink"&&(i.neckPivot.rotation.x+=Math.sin(i.legCycle*2)*.05);for(let _=0;_<i.legPivots.length;_++){const R=i.legPivots[_];if(T){const U=R.isFront?0:Math.PI,L=R.side>0?Math.PI:0,z=Math.sin(i.legCycle+U+L)*.4*(E/i.speed);R.upper.rotation.x=z,R.lower.rotation.x=Math.max(0,-z*.6)}else i.state==="rest"&&o.position.y<-.1?(R.upper.rotation.x+=(.8-R.upper.rotation.x)*s*2,R.lower.rotation.x+=(1-R.lower.rotation.x)*s*2):(R.upper.rotation.x*=.9,R.lower.rotation.x*=.9)}i.tailPivot.rotation.x=Math.sin(t*1.5+i.phase)*.15,i.state==="flee"&&(i.tailPivot.rotation.x+=.3),i.state==="alert"?i.tailPivot.rotation.z=Math.sin(t*6)*.1:i.tailPivot.rotation.z*=.9,i.mat.emissiveIntensity=(.3+Math.sin(t*.8+i.phase)*.2)*ye,i.headLook*=.98}}function M0(s,t){for(let e=0;e<zo.length;e++){const n=zo[e],i=n.group,o=i.position.x,r=i.position.z;if(n._state==="patrol"){if(Math.random()<.002){let m=1/0,x=null;for(let p=0;p<se.length;p++){const g=se[p].x-o,b=se[p].z-r,v=g*g+b*b;v<900&&v<m&&(m=v,x=se[p])}for(let p=0;p<hi.length;p++){if(hi[p].glowIntensity<.3)continue;const g=hi[p].x-o,b=hi[p].z-r,v=g*g+b*b;v<900&&v<m&&(m=v,x=hi[p])}x&&(n._state="attracted",n._attractTarget=x,n._stT=6+Math.random()*8,Ds("moth",{x:o,z:r},J.pos))}const d=Le==="DAWN"?.005:Le==="DEEP_NIGHT"?3e-4:.001;if(Math.random()<d){let m=1/0,x=null;for(let p=0;p<ie.length;p++){const g=ie[p].x-o,b=ie[p].z-r,v=g*g+b*b;v<400&&v<m&&(m=v,x=ie[p])}x&&(n._state="rest",n._restTree=x,n._stT=Le==="DAWN"?8+Math.random()*10:4+Math.random()*6)}}const a=Le==="DEEP_NIGHT"?1.6:Le==="DAWN"?.5:1,c=Le==="DEEP_NIGHT"?1.4:1;switch(n._state){case"patrol":{n.orbitAng+=s*.4*a;const d=n.centerX+Math.cos(n.orbitAng)*n.orbitR*c,m=n.centerZ+Math.sin(n.orbitAng)*n.orbitR*c;i.position.x+=(d-o)*s*1.5,i.position.z+=(m-r)*s*1.5,i.position.y=n.floatY+Math.sin(t*.7+n.phase)*.8,i.rotation.y=n.orbitAng+Math.PI/2;break}case"attracted":{if(n._stT-=s,!n._attractTarget||n._stT<=0){n._state="patrol",n._attractTarget=null;break}n.orbitAng+=s*.8;const d=n._attractTarget,m=Math.max(.5,n._stT*.4),x=d.x+Math.cos(n.orbitAng)*m,p=d.z+Math.sin(n.orbitAng)*m;i.position.x+=(x-o)*s*2,i.position.z+=(p-r)*s*2,i.position.y+=(2-i.position.y)*s*.5,i.rotation.y=n.orbitAng+Math.PI/2;break}case"rest":{if(n._stT-=s,!n._restTree||n._stT<=0){n._state="patrol",n._restTree=null,n.centerX=i.position.x,n.centerZ=i.position.z;break}const d=n._restTree,m=d.x+.5-o,x=d.z+.5-r,p=Math.sqrt(m*m+x*x);p>.3&&(i.position.x+=m/p*s*2,i.position.z+=x/p*s*2),i.position.y+=(2.5-i.position.y)*s*1.5,i.rotation.y=Math.atan2(m,x);break}}const l=n._state==="rest"?.05:.4,h=Math.sin(t*n.flapSpeed+n.phase)*l;for(let d=0;d<i._wingPivots.length;d++){const m=i._wingPivots[d];m.pivot.rotation.z=h*m.side}const u=Math.sin(t*1.5+n.phase)*.5+.5,f=n._state==="attracted"?.4:0;n.wingMat.emissiveIntensity=(.5+u*.6+f)*ye,n.wingMat.opacity=.45+u*.25}}function TS(s,t){const e=Ie.ShiftLeft||Ie.ShiftRight||Go;let n=null;if(No>5&&(Xe==="SEEK"||Xe==="RISING")){let i=1/0;for(let o=0;o<Dn.length;o++){if(Dn[o].found)continue;const r=Dn[o].x-J.pos.x,a=Dn[o].z-J.pos.z,c=r*r+a*a;c<i&&(i=c,n=Dn[o])}}for(let i=0;i<hc.length;i++){const o=hc[i],r=t*.5+o.phase+i/gp*6.28,a=e?4+i*2:1.5+i*.8,c=e?3+i:1.2+Math.sin(t*.7+o.phase)*.5;if(o.targetX=J.pos.x+Math.cos(r)*a,o.targetY=J.pos.y-mc+c,o.targetZ=J.pos.z+Math.sin(r)*a,i===0&&n){const m=Math.min((No-5)/3,.6);o.targetX+=(n.x-J.pos.x)*m,o.targetZ+=(n.z-J.pos.z)*m,o.targetY+=.5}const l=e?.8:2.5;o.velX+=(o.targetX-o.group.position.x)*l*s,o.velY+=(o.targetY-o.group.position.y)*l*s,o.velZ+=(o.targetZ-o.group.position.z)*l*s,o.velX*=.92,o.velY*=.92,o.velZ*=.92,o.group.position.x+=o.velX*s*4,o.group.position.y+=o.velY*s*4,o.group.position.z+=o.velZ*s*4;const h=Math.sin(t*2+o.phase)*.5+.5;o.glowMat.opacity=.3+h*.4,o.hazeMat.opacity=.08+h*.12;const u=t*(2.5+i*.5)+o.phase,f=.14+Math.sin(t*1.3+o.phase)*.06;o.group.children[5].position.set(Math.cos(u)*f,Math.sin(u*1.5)*.08,Math.sin(u)*f);for(let m=0;m<o.tendrils.length;m++){const x=o.tendrils[m],p=Math.sin(t*3+m*2.1+o.phase)*.3,g=.08+Math.sin(t*2+m*1.5)*.04;x.mesh.position.x=Math.cos(x.baseAng+p)*g,x.mesh.position.z=Math.sin(x.baseAng+p)*g,x.mesh.rotation.y=x.baseAng+p,x.mesh.rotation.z=Math.PI/3+Math.sin(t*2.5+m)*.2}for(let m=0;m<o.embers.length;m++){const x=(m+1)*.08;o.embers[m].position.y=-.06-x+Math.sin(t*4+m*1.4+o.phase)*.03,o.embers[m].position.x=Math.sin(t*2.5+m*2+o.phase)*.06,o.embers[m].material.opacity=.2+Math.sin(t*5+m*1.7)*.15}o.facet.rotation.y+=s*1.5,o.facet.rotation.x+=s*.7,o.halo.rotation.z+=s*.3,o.halo2.rotation.y+=s*.2}}function ES(s,t){for(let e=0;e<hi.length;e++){const n=hi[e],i=n.x-J.pos.x,o=n.z-J.pos.z,a=i*i+o*o<(Mh+.5)*(Mh+.5),c=a?1:0;n.glowIntensity+=(c-n.glowIntensity)*s*3,n.discMat.opacity=n.glowIntensity*.25*(.6+Math.sin(t*2+n.phase)*.4),n.mushMat.emissiveIntensity=(.2+n.glowIntensity*.8)*ye,a&&J.vel.y>0&&J.vel.y<=Za+.5&&(J.vel.y=Za+Py,n.glowIntensity=1.5,iS());const l=.08+n.glowIntensity*.25;n.sporeMat.opacity=l;for(let h=0;h<n.spores.length;h++){const u=n.spores[h];u.drift+=s*.3,u.mesh.position.y+=u.speed*s*(.5+n.glowIntensity),u.mesh.position.x=u.baseX+Math.sin(t*.8+u.drift)*.15,u.mesh.position.z=u.baseZ+Math.cos(t*.6+u.drift)*.12,u.mesh.position.y>.8&&(u.mesh.position.y=.03),u.mesh.scale.setScalar(.6+Math.sin(t*2+h)*.4)}for(let h=0;h<n.glowWorms.length;h++){const u=Math.sin(t*1.5+h*1.3+n.phase)*.5+.5;n.glowWorms[h].material.opacity=.1+u*.4+n.glowIntensity*.3}}}function AS(s,t){for(let e=0;e<ci.length;e++){const n=ci[e];if(n.popped){if(n.popTimer-=s,n.popTimer<=0){n.popped=!1,n.group.visible=!0;const h=w()*6.28,u=8+w()*ce*.5;n.homeX=Math.cos(h)*u,n.homeZ=Math.sin(h)*u,n.floatY=.5+w()*4,n.group.position.set(n.homeX,n.floatY,n.homeZ)}continue}n.driftAng+=s*.2;const i=n.homeX+Math.sin(n.driftAng)*3,o=n.homeZ+Math.cos(n.driftAng*.7)*3;n.group.position.x+=(i-n.group.position.x)*s*.5,n.group.position.z+=(o-n.group.position.z)*s*.5,n.group.position.y=n.floatY+Math.sin(t*.6+n.phase)*n.bobAmp;const r=(t*.1+n.phase)%1;n.shellMat.color.setRGB(Math.sin(r*6.28)*.15+.7,Math.sin(r*6.28+2.09)*.15+.7,Math.sin(r*6.28+4.19)*.15+.8),n.shellMat.opacity=.18+Math.sin(t*1.5+n.phase)*.08;const a=n.group.position.x-J.pos.x,c=n.group.position.y-J.pos.y,l=n.group.position.z-J.pos.z;a*a+c*c+l*l<Jf*Jf*n.sc*n.sc&&(n.popped=!0,n.popTimer=8+Math.random()*8,n.group.visible=!1,c1(n.group.position.x,n.group.position.y,n.group.position.z,6),nS(n.group.position,J.pos))}}function RS(s,t){const e=_r();for(let n=0;n<Ne.length;n++){const i=Ne[n],o=.015+e*.01;for(let u=0;u<i.pads.length;u++)i.pads[u].mesh.position.y=.05+Math.sin(t*(.8+e*.4)+i.pads[u].phase)*o;const r=e*.08;i.waterMat.emissiveIntensity=(.15+r+Math.sin(t*1+i.phase)*.1)*ye;const a=Math.sin(t*1.2+i.phase)*.5+.5;i.flMat.emissiveIntensity=(.3+a*.5)*ye;const c=.25+e*.2,l=.12+e*.08;for(let u=0;u<i.ripples.length;u++){const f=i.ripples[u],d=(t*c+f.phase)%1,m=.2+d*i.pondR*.8;f.mesh.scale.setScalar(m),f.mesh.material.opacity=(1-d)*l}const h=1+e*.5;for(let u=0;u<i.tadpoles.length;u++){const f=i.tadpoles[u];f.ang+=f.speed*h*s;const d=Math.cos(f.ang)*f.orbR,m=Math.sin(f.ang)*f.orbR;f.body.position.x=d,f.body.position.z=m,f.body.rotation.y=f.ang+Math.PI/2;const x=.02;f.tail.position.x=d-Math.cos(f.ang)*x,f.tail.position.z=m-Math.sin(f.ang)*x,f.tail.rotation.y=f.ang,f.tail.rotation.z=Math.PI/2+Math.sin(t*(8+e*2)+u*3)*.4}}}function CS(s,t){if(El-=s,El<=0){El=.5;for(let o=0;o<se.length;o++){const r=se[o],a=r.x-J.pos.x,c=r.z-J.pos.z;if(a*a+c*c<36){Hn={x:r.x,z:r.z},si=0;break}}}const e=SS();if(!Hn){e.visible=!1;return}if(si+=s*12,si>30){Hn=null,si=0,e.visible=!1;return}e.visible=!0,e.position.set(Hn.x,.15,Hn.z),e.scale.setScalar(si),e.material.opacity=(1-si/30)*.45;const n=si,i=4;for(let o=0;o<bn.length;o++){const r=bn[o],a=r.x-Hn.x,c=r.z-Hn.z,l=Math.sqrt(a*a+c*c);if(Math.abs(l-n)<i){const h=1-Math.abs(l-n)/i;r.capMat.emissiveIntensity=Math.max(r.capMat.emissiveIntensity,(r.base+h*2)*ye)}}for(let o=0;o<di.length;o++){const r=di[o],a=r.group.position.x-Hn.x,c=r.group.position.z-Hn.z,l=Math.sqrt(a*a+c*c);if(Math.abs(l-n)<i){const h=1-Math.abs(l-n)/i;r.petalMat.emissiveIntensity=Math.max(r.petalMat.emissiveIntensity,(.3+h*1.5)*ye)}}}function PS(s,t){const e=J.pos.x,n=J.pos.z,i=_r(),o=Ni?.6:i>.3?i*.4:0;for(let l=0;l<di.length;l++){const h=di[l],u=h.group.position.x,f=h.group.position.z,d=u-e,m=f-n,p=d*d+m*m<16?1:0;h._react=h._react||0,h._react+=(p-h._react)*s*(p>0?4:1.5);const g=(1+h._react*.15)*(1-o*.12),b=(1+h._react*.05)*(1-o*.15);h.group.scale.set(g,b,g),h.petalMat.emissiveIntensity+=h._react*.6*ye*(1-o*.4)}for(let l=0;l<bn.length;l++){const h=bn[l],u=h.x-e,f=h.z-n,m=u*u+f*f<4?1:0;h._touch=h._touch||0,h._touch+=(m-h._touch)*s*(m>0?6:1.5);const x=i*.4;h.capMat.emissiveIntensity+=(h._touch*1.5+x)*ye;const p=1+h._touch*.08;h.group.scale.set(p,1+h._touch*.04,p)}for(let l=0;l<Rr.length;l++){const h=Rr[l],u=h.group.position.x,f=h.group.position.z,d=u-e,m=f-n,p=d*d+m*m<2.25?.65:1;h._curl=h._curl===void 0?1:h._curl,h._curl+=(p-h._curl)*s*(p<1?4:1.5),h.group.scale.set(1+(1-h._curl)*.3,h._curl,1+(1-h._curl)*.3)}wS();const r=To==="FOG_BANK"?.5:1;let a=0,c=0;for(let l=0;l<se.length;l++){const h=se[l],u=h.x-e,f=h.z-n;if(u*u+f*f<36)for(let d=0;d<se.length;d++){if(l===d)continue;const m=se[d],x=h.x-m.x,p=h.z-m.z,g=x*x+p*p;if(g<400){a++;const b=(1-Math.sqrt(g)/20)*.8*r;if(m.mat.emissiveIntensity+=b*ye,c<Kh){const v=Jh[c],M=v.geo.attributes.position.array,A=1,E=1;M[0]=h.x,M[1]=A,M[2]=h.z,M[3]=m.x,M[4]=E,M[5]=m.z,v.geo.attributes.position.needsUpdate=!0,v.geo.computeBoundingSphere(),v.active=!0;const T=Math.sin(t*3+l*1.5+d*.7)*.3+.5;v.opacity=b*T*ye,v.line.material.opacity=v.opacity,v.line.visible=!0,c++}}}}for(let l=c;l<Kh;l++){const h=Jh[l];h.line.visible&&(h.opacity*=.85,h.line.material.opacity=h.opacity,h.opacity<.01&&(h.line.visible=!1))}return a}let ba="EXPLORE",Al=0,Rl=0;function IS(s,t){let e=!1;for(let f=0;f<se.length;f++){const d=se[f].x-J.pos.x,m=se[f].z-J.pos.z;if(d*d+m*m<64){e=!0;break}}ba=e?"NEAR_CRYSTAL":"EXPLORE",Al+=s;const n=_r(),i=Math.max(.2,1-n*.8),o=(ba==="NEAR_CRYSTAL"?.08:.25)/i,r=Math.floor((ba==="NEAR_CRYSTAL"?120:100)*i);if(Al>o&&(Al=0,kp(0,t)<r))if(ba==="NEAR_CRYSTAL")for(let d=0;d<se.length;d++){const m=se[d].x-J.pos.x,x=se[d].z-J.pos.z;m*m+x*x<100&&La(se[d].x,Zt(se[d].x,se[d].z)+1,se[d].z,3+Math.random()*4)}else if(Math.random()<.3&&di.length>0){const d=di[Math.floor(Math.random()*di.length)];if(d._react>.3){const m=d.group.position.x,x=d.group.position.z;La(m+(Math.random()-.5)*2,Zt(m,x)+.5,x+(Math.random()-.5)*2,4+Math.random()*6)}}else{const d=Math.random()*6.28,m=5+Math.random()*25,x=J.pos.x+Math.cos(d)*m,p=J.pos.z+Math.sin(d)*m;La(x,Zt(x,p),p,6+Math.random()*10)}if(Rl+=s,Rl>.2){Rl=0;for(let f=0;f<bn.length;f++){const d=bn[f],m=d.x-J.pos.x,x=d.z-J.pos.z;m*m+x*x<200&&Math.random()<.15&&Qw(d.x,.6*d.group.scale.x,d.z)}}for(let f=0;f<bn.length;f++){const d=bn[f],m=Math.sin(t*d.speed+d.phase)*.5+.5;d.capMat.emissiveIntensity=d.base*(.5+m*.8)*ye}for(let f=0;f<se.length;f++){const d=se[f],m=Math.sin(t*.6+d.phase)*.5+.5;d.mat.emissiveIntensity=(1+m*1.5)*ye,d.group.children[0].rotation.y+=s*.15,d.light&&(d.light.intensity=(.3+m*.4)*ye)}if(!Vi.length)for(let f=0;f<se.length;f++)Vi.push({idx:f,dist:0});const a=J.pos.x-Sd,c=J.pos.z-bd;if(a*a+c*c>1){Sd=J.pos.x,bd=J.pos.z;for(let f=0;f<se.length;f++){const d=se[f],m=d.x-J.pos.x,x=d.z-J.pos.z;Vi[f].idx=f,Vi[f].dist=m*m+x*x}Vi.sort((f,d)=>f.dist-d.dist)}for(let f=0;f<ds.length;f++)if(f<Vi.length&&Vi[f].dist<2500){const d=se[Vi[f].idx],m=Math.sin(t*.6+d.phase)*.5+.5;ds[f].position.set(d.x,1.5,d.z),ds[f].intensity=(1.5+m*2)*ye,ds[f].distance=16,ds[f].color.setHex(F.crystal)}else ds[f].intensity=0;if(Di>.8&&Math.random()<.005)for(let f=0;f<Mr.length;f++){const d=Mr[f];if(!d.dispersed&&Math.random()<.1){d.dispersed=!0;for(let m=0;m<8;m++)Pp(d.x,d.h+.05,d.z);for(let m=2;m<d.group.children.length;m++)d.group.children[m].visible=!1;d.regrowTimer=15+Math.random()*10}}const l=Di>.3?(Di-.3)*.02:0,h=Ni?.03:0;if(Math.random()<l+h)for(let f=0;f<ie.length;f++){const d=ie[f],m=d.x-J.pos.x,x=d.z-J.pos.z;if(m*m+x*x<900&&Math.random()<.15){const p=(d.group.children[0]?d.group.children[0].geometry.parameters.height*.7:6)+d.group.position.y;f1(d.x,p,d.z);break}}g0(s,t),x0(s,t),_0(s,t),M0(s,t),Ap(s,t),m0(s,t);for(let f=0;f<lc.length;f++){const d=lc[f];if(!d.sparkles)continue;const m=d.x||d.group.position.x,x=d.z||d.group.position.z,p=m-J.pos.x,g=x-J.pos.z;if(p*p+g*g>400)continue;let b=0;for(let S=0;S<se.length;S++){const y=se[S].x-m,_=se[S].z-x,R=y*y+_*_;R<100&&(b=Math.max(b,(1-Math.sqrt(R)/10)*.6))}const v=m-J.pos.x,M=x-J.pos.z,A=v*v+M*M,E=A<25?(1-Math.sqrt(A)/5)*.3:0;let T=0;if(Hn&&si>0){const S=m-Hn.x,y=x-Hn.z,_=Math.sqrt(S*S+y*y);Math.abs(_-si)<3&&(T=(1-Math.abs(_-si)/3)*.8)}for(let S=0;S<d.sparkles.length;S++){const y=Math.sin(t*4+f*2.3+S*1.7)*.35;d.sparkles[S].material.opacity=.15+y+b+E+T}d.mossMat&&E>0&&(d.mossMat.emissiveIntensity=.05+E*.4*Math.sin(t*2+f)*.5+.5)}TS(s,t),bw(Mr,s,t,J.pos),ES(s,t),AS(s,t),RS(s,t),Wp(s,t,J.pos),ww(s,t),d1(s,t),o1(s),l1(s),CS(s);const u=PS(s,t);if(A1(s,t),$w(t),J.onGround&&J.vel.x*J.vel.x+J.vel.z*J.vel.z>.5){const d=Math.atan2(J.vel.x,J.vel.z),m=Ie.ShiftLeft||Ie.ShiftRight||Go;g1(J.pos.x,J.pos.z,d,m)}x1(s,_r()),rS(s,J.pos,Ne,cc,Le,_r()),eS(s),dS(J.pos,He,Cn,ai,zo,hi,Ne,u),pS(s)}let ke=0,Qh=!1;function LS(){Qh||(Qh=!0,Wy(!0),yS())}function v0(){requestAnimationFrame(v0);const s=Math.min(xp.getDelta(),.1);ke+=s,L1(s);const t=O1(s,ke,J.pos);if(k1(s,J.pos,t,bs,po),aw(s,ke,Le,ye,To),ri>0&&(Su.intensity+=ri*.8,ht.background.r=Math.min(ht.background.r+ri*.08,.25),ht.background.g=Math.min(ht.background.g+ri*.08,.25),ht.background.b=Math.min(ht.background.b+ri*.12,.35)),j1(s,Di,t,Ni,ri,Le,J.pos,Ne),t1(bs,po),yw(bs,po,Di),h1(bs,po),!Qh){hn.position.set(0,mc,0),hn.rotation.order="YXZ",hn.rotation.y+=s*.08,hn.rotation.x=0;for(let e=0;e<bn.length;e++){const n=bn[e],i=Math.sin(ke*n.speed+n.phase)*.5+.5;n.capMat.emissiveIntensity=n.base*(.5+i*.8)*ye}for(let e=0;e<se.length;e++){const n=se[e];n.mat.emissiveIntensity=(1+Math.sin(ke*.6+n.phase)*.5*1.5+.75)*ye}g0(s,ke),x0(s,ke),_0(s,ke),M0(s,ke),Ap(s,ke),m0(s,ke),Wp(s,ke,J.pos);for(let e=0;e<ci.length;e++)ci[e].popped||(ci[e].group.position.y=ci[e].floatY+Math.sin(ke*.6+ci[e].phase)*ci[e].bobAmp);for(let e=0;e<Ne.length;e++)for(let n=0;n<Ne[e].pads.length;n++)Ne[e].pads[n].mesh.position.y=.05+Math.sin(ke*.8+Ne[e].pads[n].phase)*.015;for(let e=0;e<Dn.length;e++){const n=Dn[e],i=Math.sin(ke*1.5+n.phase)*.5+.5;n.group.position.y=n.flyY+Math.sin(ke*.8+n.phase)*.3,n.glowMat.opacity=.3+i*.4}ed();return}uw(s),IS(s,ke),kp(s,ke),e1(s),hn.position.copy(J.pos),hn.position.y+=Rp,hn.rotation.order="YXZ",hn.rotation.y=Tr,hn.rotation.x=Cs,_S(s,J.pos),ed()}try{bh(0,0,5),tw(),I1({scene:ht,moon:Xn,moon2:bu,hemiLight:Su,playerLight:Tu}),bS();const s=Ky();lw(ie,lc),hw(ld),cw(t=>{let e=!1;for(let n=0;n<Ne.length;n++){const i=Ne[n].x-J.pos.x,o=Ne[n].z-J.pos.z;if(i*i+o*o<16){e=!0;break}}J1(t,e),Math.random()<.4&&ld(J.pos.x,J.pos.z,1)},()=>Q1(),t=>tS(t)),F1(),B1(),jw(150),Jw(60),Hy(),n1(Ty),s1(20),vw(40),a1(30),u1(50),m1(),rw(),Ww(),Yw(),Zw(),$1(),fS(),xS(),MS(),E1({orbs:Dn,obeliskGroup:Bw(),obeliskMat:kw(),obeliskGlowMat:Gw(),pinnacleOrb:Hw(),pinnacleRings:Vw(),moatMesh:Xw(),moatMat:qw(),rainbowArcs:Ar,player:J,makeLaser:_1,orbHudEl:vS(),deers:He,puffs:Cn,jellies:ai,moths:zo,trees:ie,groundMesh:s}),Vy(LS);for(let t=0;t<50;t++){const e=Math.random()*6.28,n=3+Math.random()*ce*.7,i=Math.cos(e)*n,o=Math.sin(e)*n;La(i,Zt(i,o),o,8+Math.random()*12)}console.log("✓ Init: trees="+ie.length+" mush="+bn.length+" crystals="+se.length+" orbs="+Dn.length+" creatures="+(ai.length+Cn.length+He.length+zo.length)+" wisps="+hc.length+" dandelions="+Mr.length+" fairyRings="+hi.length+" bubbles="+ci.length+" ponds="+Ne.length+" scene="+ht.children.length),v0()}catch(s){console.error("INIT FAILED:",s),document.body.innerHTML='<div style="color:red;padding:30px;font-family:monospace"><h2>Init Failed</h2><pre>'+(s.stack||s.message)+"</pre></div>"}
