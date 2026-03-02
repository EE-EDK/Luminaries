(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cf="172",Sg=0,fd=1,bg=2,pp=1,mp=2,Vi=3,Ts=0,fn=1,Pt=2,Ji=0,Zo=1,te=2,dd=3,pd=4,Tg=5,Xs=100,Eg=101,Ag=102,Rg=103,Cg=104,Pg=200,Ig=201,Lg=202,Dg=203,Vu=204,Wu=205,Ug=206,Ng=207,zg=208,Fg=209,Og=210,Bg=211,Gg=212,kg=213,Hg=214,Xu=0,qu=1,Yu=2,ur=3,Zu=4,$u=5,ju=6,Ku=7,gp=0,Vg=1,Wg=2,bs=0,Xg=1,qg=2,Yg=3,xp=4,Zg=5,$g=6,jg=7,vp=300,hr=301,fr=302,Ju=303,Qu=304,_l=306,dr=1e3,Zs=1001,th=1002,Kn=1003,Kg=1004,Pa=1005,Ii=1006,Il=1007,$s=1008,ss=1009,Mp=1010,_p=1011,ua=1012,Pf=1013,no=1014,Li=1015,Qi=1016,If=1017,Lf=1018,pr=1020,yp=35902,wp=1021,Sp=1022,vi=1023,bp=1024,Tp=1025,$o=1026,mr=1027,Df=1028,Uf=1029,Ep=1030,Nf=1031,zf=1033,yc=33776,wc=33777,Sc=33778,bc=33779,eh=35840,nh=35841,ih=35842,sh=35843,oh=36196,rh=37492,ah=37496,ch=37808,lh=37809,uh=37810,hh=37811,fh=37812,dh=37813,ph=37814,mh=37815,gh=37816,xh=37817,vh=37818,Mh=37819,_h=37820,yh=37821,Tc=36492,wh=36494,Sh=36495,Ap=36283,bh=36284,Th=36285,Eh=36286,Jg=3200,Qg=3201,Rp=0,tx=1,xs="",Ln="srgb",gr="srgb-linear",Vc="linear",Me="srgb",uo=7680,md=519,ex=512,nx=513,ix=514,Cp=515,sx=516,ox=517,rx=518,ax=519,Wc=35044,Se=35048,gd="300 es",Zi=2e3,Xc=2001;class wr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ll=Math.PI/180,Ah=180/Math.PI;function ts(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function Qt(i,t,e){return Math.max(t,Math.min(e,i))}function cx(i,t){return(i%t+t)%t}function Dl(i,t,e){return(1-e)*i+e*t}function Pi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,s,o,r,a,l,u){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,u)}set(t,e,n,s,o,r,a,l,u){const c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=o,c[5]=l,c[6]=n,c[7]=r,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],u=n[1],c=n[4],p=n[7],f=n[2],d=n[5],g=n[8],x=s[0],h=s[3],m=s[6],_=s[1],v=s[4],y=s[7],A=s[2],E=s[5],b=s[8];return o[0]=r*x+a*_+l*A,o[3]=r*h+a*v+l*E,o[6]=r*m+a*y+l*b,o[1]=u*x+c*_+p*A,o[4]=u*h+c*v+p*E,o[7]=u*m+c*y+p*b,o[2]=f*x+d*_+g*A,o[5]=f*h+d*v+g*E,o[8]=f*m+d*y+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],u=t[7],c=t[8];return e*r*c-e*a*u-n*o*c+n*a*l+s*o*u-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],u=t[7],c=t[8],p=c*r-a*u,f=a*l-c*o,d=u*o-r*l,g=e*p+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=p*x,t[1]=(s*u-c*n)*x,t[2]=(a*n-s*r)*x,t[3]=f*x,t[4]=(c*e-s*l)*x,t[5]=(s*o-a*e)*x,t[6]=d*x,t[7]=(n*l-u*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),u=Math.sin(o);return this.set(n*l,n*u,-n*(l*r+u*a)+r+t,-s*u,s*l,-s*(-u*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ul.makeScale(t,e)),this}rotate(t){return this.premultiply(Ul.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ul.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ul=new Yt;function Pp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lx(){const i=qc("canvas");return i.style.display="block",i}const xd={};function zo(i){i in xd||(xd[i]=!0,console.warn(i))}function ux(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function hx(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function fx(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const vd=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Md=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dx(){const i={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===Me&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Me&&(s.r=jo(s.r),s.g=jo(s.g),s.b=jo(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xs?Vc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gr]:{primaries:t,whitePoint:n,transfer:Vc,toXYZ:vd,fromXYZ:Md,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:vd,fromXYZ:Md,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),i}const le=dx();function es(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function jo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ho;class px{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ho===void 0&&(ho=qc("canvas")),ho.width=t.width,ho.height=t.height;const n=ho.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ho}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=es(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(es(e[n]/255)*255):e[n]=es(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mx=0;class Ip{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Nl(s[r].image)):o.push(Nl(s[r]))}else o=Nl(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Nl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?px.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gx=0;class dn extends wr{constructor(t=dn.DEFAULT_IMAGE,e=dn.DEFAULT_MAPPING,n=Zs,s=Zs,o=Ii,r=$s,a=vi,l=ss,u=dn.DEFAULT_ANISOTROPY,c=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=ts(),this.name="",this.source=new Ip(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dr:t.x=t.x-Math.floor(t.x);break;case Zs:t.x=t.x<0?0:1;break;case th:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dr:t.y=t.y-Math.floor(t.y);break;case Zs:t.y=t.y<0?0:1;break;case th:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=vp;dn.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,s=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,u=l[0],c=l[4],p=l[8],f=l[1],d=l[5],g=l[9],x=l[2],h=l[6],m=l[10];if(Math.abs(c-f)<.01&&Math.abs(p-x)<.01&&Math.abs(g-h)<.01){if(Math.abs(c+f)<.1&&Math.abs(p+x)<.1&&Math.abs(g+h)<.1&&Math.abs(u+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(u+1)/2,y=(d+1)/2,A=(m+1)/2,E=(c+f)/4,b=(p+x)/4,T=(g+h)/4;return v>y&&v>A?v<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(v),s=E/n,o=b/n):y>A?y<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(y),n=E/s,o=T/s):A<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(A),n=b/o,s=T/o),this.set(n,s,o,e),this}let _=Math.sqrt((h-g)*(h-g)+(p-x)*(p-x)+(f-c)*(f-c));return Math.abs(_)<.001&&(_=1),this.x=(h-g)/_,this.y=(p-x)/_,this.z=(f-c)/_,this.w=Math.acos((u+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xx extends wr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new dn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Ip(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends xx{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Lp extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vx extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qe{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],u=n[s+1],c=n[s+2],p=n[s+3];const f=o[r+0],d=o[r+1],g=o[r+2],x=o[r+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=p;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(p!==x||l!==f||u!==d||c!==g){let h=1-a;const m=l*f+u*d+c*g+p*x,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const A=Math.sqrt(v),E=Math.atan2(A,m*_);h=Math.sin(h*E)/A,a=Math.sin(a*E)/A}const y=a*_;if(l=l*h+f*y,u=u*h+d*y,c=c*h+g*y,p=p*h+x*y,h===1-a){const A=1/Math.sqrt(l*l+u*u+c*c+p*p);l*=A,u*=A,c*=A,p*=A}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],u=n[s+2],c=n[s+3],p=o[r],f=o[r+1],d=o[r+2],g=o[r+3];return t[e]=a*g+c*p+l*d-u*f,t[e+1]=l*g+c*f+u*p-a*d,t[e+2]=u*g+c*d+a*f-l*p,t[e+3]=c*g-a*p-l*f-u*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,u=a(n/2),c=a(s/2),p=a(o/2),f=l(n/2),d=l(s/2),g=l(o/2);switch(r){case"XYZ":this._x=f*c*p+u*d*g,this._y=u*d*p-f*c*g,this._z=u*c*g+f*d*p,this._w=u*c*p-f*d*g;break;case"YXZ":this._x=f*c*p+u*d*g,this._y=u*d*p-f*c*g,this._z=u*c*g-f*d*p,this._w=u*c*p+f*d*g;break;case"ZXY":this._x=f*c*p-u*d*g,this._y=u*d*p+f*c*g,this._z=u*c*g+f*d*p,this._w=u*c*p-f*d*g;break;case"ZYX":this._x=f*c*p-u*d*g,this._y=u*d*p+f*c*g,this._z=u*c*g-f*d*p,this._w=u*c*p+f*d*g;break;case"YZX":this._x=f*c*p+u*d*g,this._y=u*d*p+f*c*g,this._z=u*c*g-f*d*p,this._w=u*c*p-f*d*g;break;case"XZY":this._x=f*c*p-u*d*g,this._y=u*d*p-f*c*g,this._z=u*c*g+f*d*p,this._w=u*c*p+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],u=e[2],c=e[6],p=e[10],f=n+a+p;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(c-l)*d,this._y=(o-u)*d,this._z=(r-s)*d}else if(n>a&&n>p){const d=2*Math.sqrt(1+n-a-p);this._w=(c-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+u)/d}else if(a>p){const d=2*Math.sqrt(1+a-n-p);this._w=(o-u)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+p-n-a);this._w=(r-s)/d,this._x=(o+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,u=e._z,c=e._w;return this._x=n*c+r*a+s*u-o*l,this._y=s*c+r*l+o*a-n*u,this._z=o*c+r*u+n*l-s*a,this._w=r*c-n*a-s*l-o*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),p=Math.sin((1-e)*c)/u,f=Math.sin(e*c)/u;return this._w=r*p+this._w*f,this._x=n*p+this._x*f,this._y=s*p+this._y*f,this._z=o*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_d.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_d.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,u=2*(r*s-a*n),c=2*(a*e-o*s),p=2*(o*n-r*e);return this.x=e+l*u+r*p-a*c,this.y=n+l*c+a*u-o*p,this.z=s+l*p+o*c-r*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zl.copy(this).projectOnVector(t),this.sub(zl)}reflect(t){return this.sub(zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zl=new F,_d=new Qe;class ro{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,fi):fi.fromBufferAttribute(o,r),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ia.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ia.copy(n.boundingBox)),Ia.applyMatrix4(t.matrixWorld),this.union(Ia)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rr),La.subVectors(this.max,Rr),fo.subVectors(t.a,Rr),po.subVectors(t.b,Rr),mo.subVectors(t.c,Rr),rs.subVectors(po,fo),as.subVectors(mo,po),Cs.subVectors(fo,mo);let e=[0,-rs.z,rs.y,0,-as.z,as.y,0,-Cs.z,Cs.y,rs.z,0,-rs.x,as.z,0,-as.x,Cs.z,0,-Cs.x,-rs.y,rs.x,0,-as.y,as.x,0,-Cs.y,Cs.x,0];return!Fl(e,fo,po,mo,La)||(e=[1,0,0,0,1,0,0,0,1],!Fl(e,fo,po,mo,La))?!1:(Da.crossVectors(rs,as),e=[Da.x,Da.y,Da.z],Fl(e,fo,po,mo,La))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Oi=[new F,new F,new F,new F,new F,new F,new F,new F],fi=new F,Ia=new ro,fo=new F,po=new F,mo=new F,rs=new F,as=new F,Cs=new F,Rr=new F,La=new F,Da=new F,Ps=new F;function Fl(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Ps.fromArray(i,o);const a=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),l=t.dot(Ps),u=e.dot(Ps),c=n.dot(Ps);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Mx=new ro,Cr=new F,Ol=new F;class ao{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Mx.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cr.subVectors(t,this.center);const e=Cr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Cr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ol.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cr.copy(t.center).add(Ol)),this.expandByPoint(Cr.copy(t.center).sub(Ol))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bi=new F,Bl=new F,Ua=new F,cs=new F,Gl=new F,Na=new F,kl=new F;class Ff{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bi.copy(this.origin).addScaledVector(this.direction,e),Bi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Bl.copy(t).add(e).multiplyScalar(.5),Ua.copy(e).sub(t).normalize(),cs.copy(this.origin).sub(Bl);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ua),a=cs.dot(this.direction),l=-cs.dot(Ua),u=cs.lengthSq(),c=Math.abs(1-r*r);let p,f,d,g;if(c>0)if(p=r*l-a,f=r*a-l,g=o*c,p>=0)if(f>=-g)if(f<=g){const x=1/c;p*=x,f*=x,d=p*(p+r*f+2*a)+f*(r*p+f+2*l)+u}else f=o,p=Math.max(0,-(r*f+a)),d=-p*p+f*(f+2*l)+u;else f=-o,p=Math.max(0,-(r*f+a)),d=-p*p+f*(f+2*l)+u;else f<=-g?(p=Math.max(0,-(-r*o+a)),f=p>0?-o:Math.min(Math.max(-o,-l),o),d=-p*p+f*(f+2*l)+u):f<=g?(p=0,f=Math.min(Math.max(-o,-l),o),d=f*(f+2*l)+u):(p=Math.max(0,-(r*o+a)),f=p>0?o:Math.min(Math.max(-o,-l),o),d=-p*p+f*(f+2*l)+u);else f=r>0?-o:o,p=Math.max(0,-(r*f+a)),d=-p*p+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Bl).addScaledVector(Ua,f),d}intersectSphere(t,e){Bi.subVectors(t.center,this.origin);const n=Bi.dot(this.direction),s=Bi.dot(Bi)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const u=1/this.direction.x,c=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(n=(t.min.x-f.x)*u,s=(t.max.x-f.x)*u):(n=(t.max.x-f.x)*u,s=(t.min.x-f.x)*u),c>=0?(o=(t.min.y-f.y)*c,r=(t.max.y-f.y)*c):(o=(t.max.y-f.y)*c,r=(t.min.y-f.y)*c),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),p>=0?(a=(t.min.z-f.z)*p,l=(t.max.z-f.z)*p):(a=(t.max.z-f.z)*p,l=(t.min.z-f.z)*p),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bi)!==null}intersectTriangle(t,e,n,s,o){Gl.subVectors(e,t),Na.subVectors(n,t),kl.crossVectors(Gl,Na);let r=this.direction.dot(kl),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;cs.subVectors(this.origin,t);const l=a*this.direction.dot(Na.crossVectors(cs,Na));if(l<0)return null;const u=a*this.direction.dot(Gl.cross(cs));if(u<0||l+u>r)return null;const c=-a*cs.dot(kl);return c<0?null:this.at(c/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,s,o,r,a,l,u,c,p,f,d,g,x,h){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,u,c,p,f,d,g,x,h)}set(t,e,n,s,o,r,a,l,u,c,p,f,d,g,x,h){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=p,m[14]=f,m[3]=d,m[7]=g,m[11]=x,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/go.setFromMatrixColumn(t,0).length(),o=1/go.setFromMatrixColumn(t,1).length(),r=1/go.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),u=Math.sin(s),c=Math.cos(o),p=Math.sin(o);if(t.order==="XYZ"){const f=r*c,d=r*p,g=a*c,x=a*p;e[0]=l*c,e[4]=-l*p,e[8]=u,e[1]=d+g*u,e[5]=f-x*u,e[9]=-a*l,e[2]=x-f*u,e[6]=g+d*u,e[10]=r*l}else if(t.order==="YXZ"){const f=l*c,d=l*p,g=u*c,x=u*p;e[0]=f+x*a,e[4]=g*a-d,e[8]=r*u,e[1]=r*p,e[5]=r*c,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=r*l}else if(t.order==="ZXY"){const f=l*c,d=l*p,g=u*c,x=u*p;e[0]=f-x*a,e[4]=-r*p,e[8]=g+d*a,e[1]=d+g*a,e[5]=r*c,e[9]=x-f*a,e[2]=-r*u,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const f=r*c,d=r*p,g=a*c,x=a*p;e[0]=l*c,e[4]=g*u-d,e[8]=f*u+x,e[1]=l*p,e[5]=x*u+f,e[9]=d*u-g,e[2]=-u,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const f=r*l,d=r*u,g=a*l,x=a*u;e[0]=l*c,e[4]=x-f*p,e[8]=g*p+d,e[1]=p,e[5]=r*c,e[9]=-a*c,e[2]=-u*c,e[6]=d*p+g,e[10]=f-x*p}else if(t.order==="XZY"){const f=r*l,d=r*u,g=a*l,x=a*u;e[0]=l*c,e[4]=-p,e[8]=u*c,e[1]=f*p+x,e[5]=r*c,e[9]=d*p-g,e[2]=g*p-d,e[6]=a*c,e[10]=x*p+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_x,t,yx)}lookAt(t,e,n){const s=this.elements;return kn.subVectors(t,e),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),ls.crossVectors(n,kn),ls.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),ls.crossVectors(n,kn)),ls.normalize(),za.crossVectors(kn,ls),s[0]=ls.x,s[4]=za.x,s[8]=kn.x,s[1]=ls.y,s[5]=za.y,s[9]=kn.y,s[2]=ls.z,s[6]=za.z,s[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],u=n[12],c=n[1],p=n[5],f=n[9],d=n[13],g=n[2],x=n[6],h=n[10],m=n[14],_=n[3],v=n[7],y=n[11],A=n[15],E=s[0],b=s[4],T=s[8],w=s[12],S=s[1],R=s[5],L=s[9],D=s[13],z=s[2],H=s[6],k=s[10],O=s[14],G=s[3],et=s[7],ct=s[11],ft=s[15];return o[0]=r*E+a*S+l*z+u*G,o[4]=r*b+a*R+l*H+u*et,o[8]=r*T+a*L+l*k+u*ct,o[12]=r*w+a*D+l*O+u*ft,o[1]=c*E+p*S+f*z+d*G,o[5]=c*b+p*R+f*H+d*et,o[9]=c*T+p*L+f*k+d*ct,o[13]=c*w+p*D+f*O+d*ft,o[2]=g*E+x*S+h*z+m*G,o[6]=g*b+x*R+h*H+m*et,o[10]=g*T+x*L+h*k+m*ct,o[14]=g*w+x*D+h*O+m*ft,o[3]=_*E+v*S+y*z+A*G,o[7]=_*b+v*R+y*H+A*et,o[11]=_*T+v*L+y*k+A*ct,o[15]=_*w+v*D+y*O+A*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],u=t[13],c=t[2],p=t[6],f=t[10],d=t[14],g=t[3],x=t[7],h=t[11],m=t[15];return g*(+o*l*p-s*u*p-o*a*f+n*u*f+s*a*d-n*l*d)+x*(+e*l*d-e*u*f+o*r*f-s*r*d+s*u*c-o*l*c)+h*(+e*u*p-e*a*d-o*r*p+n*r*d+o*a*c-n*u*c)+m*(-s*a*c-e*l*p+e*a*f+s*r*p-n*r*f+n*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],u=t[7],c=t[8],p=t[9],f=t[10],d=t[11],g=t[12],x=t[13],h=t[14],m=t[15],_=p*h*u-x*f*u+x*l*d-a*h*d-p*l*m+a*f*m,v=g*f*u-c*h*u-g*l*d+r*h*d+c*l*m-r*f*m,y=c*x*u-g*p*u+g*a*d-r*x*d-c*a*m+r*p*m,A=g*p*l-c*x*l-g*a*f+r*x*f+c*a*h-r*p*h,E=e*_+n*v+s*y+o*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=_*b,t[1]=(x*f*o-p*h*o-x*s*d+n*h*d+p*s*m-n*f*m)*b,t[2]=(a*h*o-x*l*o+x*s*u-n*h*u-a*s*m+n*l*m)*b,t[3]=(p*l*o-a*f*o-p*s*u+n*f*u+a*s*d-n*l*d)*b,t[4]=v*b,t[5]=(c*h*o-g*f*o+g*s*d-e*h*d-c*s*m+e*f*m)*b,t[6]=(g*l*o-r*h*o-g*s*u+e*h*u+r*s*m-e*l*m)*b,t[7]=(r*f*o-c*l*o+c*s*u-e*f*u-r*s*d+e*l*d)*b,t[8]=y*b,t[9]=(g*p*o-c*x*o-g*n*d+e*x*d+c*n*m-e*p*m)*b,t[10]=(r*x*o-g*a*o+g*n*u-e*x*u-r*n*m+e*a*m)*b,t[11]=(c*a*o-r*p*o-c*n*u+e*p*u+r*n*d-e*a*d)*b,t[12]=A*b,t[13]=(c*x*s-g*p*s+g*n*f-e*x*f-c*n*h+e*p*h)*b,t[14]=(g*a*s-r*x*s-g*n*l+e*x*l+r*n*h-e*a*h)*b,t[15]=(r*p*s-c*a*s+c*n*l-e*p*l-r*n*f+e*a*f)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,u=o*r,c=o*a;return this.set(u*r+n,u*a-s*l,u*l+s*a,0,u*a+s*l,c*a+n,c*l-s*r,0,u*l-s*a,c*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,u=o+o,c=r+r,p=a+a,f=o*u,d=o*c,g=o*p,x=r*c,h=r*p,m=a*p,_=l*u,v=l*c,y=l*p,A=n.x,E=n.y,b=n.z;return s[0]=(1-(x+m))*A,s[1]=(d+y)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(f+m))*E,s[6]=(h+_)*E,s[7]=0,s[8]=(g+v)*b,s[9]=(h-_)*b,s[10]=(1-(f+x))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=go.set(s[0],s[1],s[2]).length();const r=go.set(s[4],s[5],s[6]).length(),a=go.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],di.copy(this);const u=1/o,c=1/r,p=1/a;return di.elements[0]*=u,di.elements[1]*=u,di.elements[2]*=u,di.elements[4]*=c,di.elements[5]*=c,di.elements[6]*=c,di.elements[8]*=p,di.elements[9]*=p,di.elements[10]*=p,e.setFromRotationMatrix(di),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Zi){const l=this.elements,u=2*o/(e-t),c=2*o/(n-s),p=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(a===Zi)d=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===Xc)d=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Zi){const l=this.elements,u=1/(e-t),c=1/(n-s),p=1/(r-o),f=(e+t)*u,d=(n+s)*c;let g,x;if(a===Zi)g=(r+o)*p,x=-2*p;else if(a===Xc)g=o*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const go=new F,di=new me,_x=new F(0,0,0),yx=new F(1,1,1),ls=new F,za=new F,kn=new F,yd=new me,wd=new Qe;class Ui{constructor(t=0,e=0,n=0,s=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],u=s[5],c=s[9],p=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,o),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Qt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,u));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-p,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wd.setFromEuler(this),this.setFromQuaternion(wd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class Dp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wx=0;const Sd=new F,xo=new Qe,Gi=new me,Fa=new F,Pr=new F,Sx=new F,bx=new Qe,bd=new F(1,0,0),Td=new F(0,1,0),Ed=new F(0,0,1),Ad={type:"added"},Tx={type:"removed"},vo={type:"childadded",child:null},Hl={type:"childremoved",child:null};class he extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=he.DEFAULT_UP.clone();const t=new F,e=new Ui,n=new Qe,s=new F(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Yt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=he.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xo.setFromAxisAngle(t,e),this.quaternion.multiply(xo),this}rotateOnWorldAxis(t,e){return xo.setFromAxisAngle(t,e),this.quaternion.premultiply(xo),this}rotateX(t){return this.rotateOnAxis(bd,t)}rotateY(t){return this.rotateOnAxis(Td,t)}rotateZ(t){return this.rotateOnAxis(Ed,t)}translateOnAxis(t,e){return Sd.copy(t).applyQuaternion(this.quaternion),this.position.add(Sd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bd,t)}translateY(t){return this.translateOnAxis(Td,t)}translateZ(t){return this.translateOnAxis(Ed,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fa.copy(t):Fa.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Pr,Fa,this.up):Gi.lookAt(Fa,Pr,this.up),this.quaternion.setFromRotationMatrix(Gi),s&&(Gi.extractRotation(s.matrixWorld),xo.setFromRotationMatrix(Gi),this.quaternion.premultiply(xo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ad),vo.child=t,this.dispatchEvent(vo),vo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tx),Hl.child=t,this.dispatchEvent(Hl),Hl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ad),vo.child=t,this.dispatchEvent(vo),vo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,t,Sx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,bx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const p=l[u];o(t.shapes,p)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),u=r(t.textures),c=r(t.images),p=r(t.shapes),f=r(t.skeletons),d=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}he.DEFAULT_UP=new F(0,1,0);he.DEFAULT_MATRIX_AUTO_UPDATE=!0;he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new F,ki=new F,Vl=new F,Hi=new F,Mo=new F,_o=new F,Rd=new F,Wl=new F,Xl=new F,ql=new F,Yl=new we,Zl=new we,$l=new we;class ci{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),pi.subVectors(t,e),s.cross(pi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){pi.subVectors(s,e),ki.subVectors(n,e),Vl.subVectors(t,e);const r=pi.dot(pi),a=pi.dot(ki),l=pi.dot(Vl),u=ki.dot(ki),c=ki.dot(Vl),p=r*u-a*a;if(p===0)return o.set(0,0,0),null;const f=1/p,d=(u*l-a*c)*f,g=(r*c-a*l)*f;return o.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Hi.x),l.addScaledVector(r,Hi.y),l.addScaledVector(a,Hi.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return Yl.setScalar(0),Zl.setScalar(0),$l.setScalar(0),Yl.fromBufferAttribute(t,e),Zl.fromBufferAttribute(t,n),$l.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Yl,o.x),r.addScaledVector(Zl,o.y),r.addScaledVector($l,o.z),r}static isFrontFacing(t,e,n,s){return pi.subVectors(n,e),ki.subVectors(t,e),pi.cross(ki).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),pi.cross(ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ci.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return ci.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Mo.subVectors(s,n),_o.subVectors(o,n),Wl.subVectors(t,n);const l=Mo.dot(Wl),u=_o.dot(Wl);if(l<=0&&u<=0)return e.copy(n);Xl.subVectors(t,s);const c=Mo.dot(Xl),p=_o.dot(Xl);if(c>=0&&p<=c)return e.copy(s);const f=l*p-c*u;if(f<=0&&l>=0&&c<=0)return r=l/(l-c),e.copy(n).addScaledVector(Mo,r);ql.subVectors(t,o);const d=Mo.dot(ql),g=_o.dot(ql);if(g>=0&&d<=g)return e.copy(o);const x=d*u-l*g;if(x<=0&&u>=0&&g<=0)return a=u/(u-g),e.copy(n).addScaledVector(_o,a);const h=c*g-d*p;if(h<=0&&p-c>=0&&d-g>=0)return Rd.subVectors(o,s),a=(p-c)/(p-c+(d-g)),e.copy(s).addScaledVector(Rd,a);const m=1/(h+x+f);return r=x*m,a=f*m,e.copy(n).addScaledVector(Mo,r).addScaledVector(_o,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},Oa={h:0,s:0,l:0};function jl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class st{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=cx(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=jl(r,o,t+1/3),this.g=jl(r,o,t),this.b=jl(r,o,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=Ln){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ln){const n=Up[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}copyLinearToSRGB(t){return this.r=jo(t.r),this.g=jo(t.g),this.b=jo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ln){return le.fromWorkingColorSpace(an.copy(this),t),Math.round(Qt(an.r*255,0,255))*65536+Math.round(Qt(an.g*255,0,255))*256+Math.round(Qt(an.b*255,0,255))}getHexString(t=Ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(an.copy(this),e);const n=an.r,s=an.g,o=an.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,u;const c=(a+r)/2;if(a===r)l=0,u=0;else{const p=r-a;switch(u=c<=.5?p/(r+a):p/(2-r-a),r){case n:l=(s-o)/p+(s<o?6:0);break;case s:l=(o-n)/p+2;break;case o:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=Ln){le.fromWorkingColorSpace(an.copy(this),t);const e=an.r,n=an.g,s=an.b;return t!==Ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(us),this.setHSL(us.h+t,us.s+e,us.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(us),t.getHSL(Oa);const n=Dl(us.h,Oa.h,e),s=Dl(us.s,Oa.s,e),o=Dl(us.l,Oa.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new st;st.NAMES=Up;let Ex=0;class Es extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=Zo,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vu,this.blendDst=Wu,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zo&&(n.blending=this.blending),this.side!==Ts&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vu&&(n.blendSrc=this.blendSrc),this.blendDst!==Wu&&(n.blendDst=this.blendDst),this.blendEquation!==Xs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==md&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==uo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==uo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==uo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Z extends Es{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const qe=new F,Ba=new pt;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wc,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ba.fromBufferAttribute(this,e),Ba.applyMatrix3(t),this.setXY(e,Ba.x,Ba.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),o=_e(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wc&&(t.usage=this.usage),t}}class Np extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zp extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Vt extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ax=0;const ii=new me,Kl=new he,yo=new F,Hn=new ro,Ir=new ro,je=new F;class Ae extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pp(t)?zp:Np)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Yt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,e,n){return ii.makeTranslation(t,e,n),this.applyMatrix4(ii),this}scale(t,e,n){return ii.makeScale(t,e,n),this.applyMatrix4(ii),this}lookAt(t){return Kl.lookAt(t),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Vt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ro);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Hn.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ao);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(Hn.min,Ir.min),Hn.expandByPoint(je),je.addVectors(Hn.max,Ir.max),Hn.expandByPoint(je)):(Hn.expandByPoint(Ir.min),Hn.expandByPoint(Ir.max))}Hn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)je.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(je));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)je.fromBufferAttribute(a,u),l&&(yo.fromBufferAttribute(t,u),je.add(yo)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new F,l[T]=new F;const u=new F,c=new F,p=new F,f=new pt,d=new pt,g=new pt,x=new F,h=new F;function m(T,w,S){u.fromBufferAttribute(n,T),c.fromBufferAttribute(n,w),p.fromBufferAttribute(n,S),f.fromBufferAttribute(o,T),d.fromBufferAttribute(o,w),g.fromBufferAttribute(o,S),c.sub(u),p.sub(u),d.sub(f),g.sub(f);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(p,-d.y).multiplyScalar(R),h.copy(p).multiplyScalar(d.x).addScaledVector(c,-g.x).multiplyScalar(R),a[T].add(x),a[w].add(x),a[S].add(x),l[T].add(h),l[w].add(h),l[S].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let T=0,w=_.length;T<w;++T){const S=_[T],R=S.start,L=S.count;for(let D=R,z=R+L;D<z;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const v=new F,y=new F,A=new F,E=new F;function b(T){A.fromBufferAttribute(s,T),E.copy(A);const w=a[T];v.copy(w),v.sub(A.multiplyScalar(A.dot(w))).normalize(),y.crossVectors(E,w);const R=y.dot(l[T])<0?-1:1;r.setXYZW(T,v.x,v.y,v.z,R)}for(let T=0,w=_.length;T<w;++T){const S=_[T],R=S.start,L=S.count;for(let D=R,z=R+L;D<z;D+=3)b(t.getX(D+0)),b(t.getX(D+1)),b(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new F,o=new F,r=new F,a=new F,l=new F,u=new F,c=new F,p=new F;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),x=t.getX(f+1),h=t.getX(f+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,h),c.subVectors(r,o),p.subVectors(s,o),c.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,h),a.add(c),l.add(c),u.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(h,u.x,u.y,u.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),c.subVectors(r,o),p.subVectors(s,o),c.cross(p),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){const u=a.array,c=a.itemSize,p=a.normalized,f=new u.constructor(l.length*c);let d=0,g=0;for(let x=0,h=l.length;x<h;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*c;for(let m=0;m<c;m++)f[g++]=u[d++]}return new ze(f,c,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=t(l,n);e.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,p=u.length;c<p;c++){const f=u[c],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const u=r[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const u=n[l];t.data.attributes[l]=u.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let p=0,f=u.length;p<f;p++){const d=u[p];c.push(d.toJSON(t.data))}c.length>0&&(s[l]=c,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(e))}const o=t.morphAttributes;for(const u in o){const c=[],p=o[u];for(let f=0,d=p.length;f<d;f++)c.push(p[f].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let u=0,c=r.length;u<c;u++){const p=r[u];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cd=new me,Is=new Ff,Ga=new ao,Pd=new F,ka=new F,Ha=new F,Va=new F,Jl=new F,Wa=new F,Id=new F,Xa=new F;class C extends he{constructor(t=new Ae,e=new Z){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Wa.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],p=o[l];c!==0&&(Jl.fromBufferAttribute(p,t),r?Wa.addScaledVector(Jl,c):Wa.addScaledVector(Jl.sub(e),c))}e.add(Wa)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(o),Is.copy(t.ray).recast(t.near),!(Ga.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Ga,Pd)===null||Is.origin.distanceToSquared(Pd)>(t.far-t.near)**2))&&(Cd.copy(o).invert(),Is.copy(t.ray).applyMatrix4(Cd),!(n.boundingBox!==null&&Is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Is)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,p=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const h=f[g],m=r[h.materialIndex],_=Math.max(h.start,d.start),v=Math.min(a.count,Math.min(h.start+h.count,d.start+d.count));for(let y=_,A=v;y<A;y+=3){const E=a.getX(y),b=a.getX(y+1),T=a.getX(y+2);s=qa(this,m,t,n,u,c,p,E,b,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=h.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let h=g,m=x;h<m;h+=3){const _=a.getX(h),v=a.getX(h+1),y=a.getX(h+2);s=qa(this,r,t,n,u,c,p,_,v,y),s&&(s.faceIndex=Math.floor(h/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const h=f[g],m=r[h.materialIndex],_=Math.max(h.start,d.start),v=Math.min(l.count,Math.min(h.start+h.count,d.start+d.count));for(let y=_,A=v;y<A;y+=3){const E=y,b=y+1,T=y+2;s=qa(this,m,t,n,u,c,p,E,b,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=h.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let h=g,m=x;h<m;h+=3){const _=h,v=h+1,y=h+2;s=qa(this,r,t,n,u,c,p,_,v,y),s&&(s.faceIndex=Math.floor(h/3),e.push(s))}}}}function Rx(i,t,e,n,s,o,r,a){let l;if(t.side===fn?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===Ts,a),l===null)return null;Xa.copy(a),Xa.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Xa);return u<e.near||u>e.far?null:{distance:u,point:Xa.clone(),object:i}}function qa(i,t,e,n,s,o,r,a,l,u){i.getVertexPosition(a,ka),i.getVertexPosition(l,Ha),i.getVertexPosition(u,Va);const c=Rx(i,t,e,n,ka,Ha,Va,Id);if(c){const p=new F;ci.getBarycoord(Id,ka,Ha,Va,p),s&&(c.uv=ci.getInterpolatedAttribute(s,a,l,u,p,new pt)),o&&(c.uv1=ci.getInterpolatedAttribute(o,a,l,u,p,new pt)),r&&(c.normal=ci.getInterpolatedAttribute(r,a,l,u,p,new F),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new F,materialIndex:0};ci.getNormal(ka,Ha,Va,f.normal),c.face=f,c.barycoord=p}return c}class wa extends Ae{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],u=[],c=[],p=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(p,2));function g(x,h,m,_,v,y,A,E,b,T,w){const S=y/b,R=A/T,L=y/2,D=A/2,z=E/2,H=b+1,k=T+1;let O=0,G=0;const et=new F;for(let ct=0;ct<k;ct++){const ft=ct*R-D;for(let Ct=0;Ct<H;Ct++){const Wt=Ct*S-L;et[x]=Wt*_,et[h]=ft*v,et[m]=z,u.push(et.x,et.y,et.z),et[x]=0,et[h]=0,et[m]=E>0?1:-1,c.push(et.x,et.y,et.z),p.push(Ct/b),p.push(1-ct/T),O+=1}}for(let ct=0;ct<T;ct++)for(let ft=0;ft<b;ft++){const Ct=f+ft+H*ct,Wt=f+ft+H*(ct+1),tt=f+(ft+1)+H*(ct+1),ut=f+(ft+1)+H*ct;l.push(Ct,Wt,ut),l.push(Wt,tt,ut),G+=6}a.addGroup(d,G,w),d+=G,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function xn(i){const t={};for(let e=0;e<i.length;e++){const n=xr(i[e]);for(const s in n)t[s]=n[s]}return t}function Cx(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fp(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const Yc={clone:xr,merge:xn};var Px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ix=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends Es{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Px,this.fragmentShader=Ix,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xr(t.uniforms),this.uniformsGroups=Cx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Op extends he{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Zi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hs=new F,Ld=new pt,Dd=new pt;class Wn extends Op{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ah*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ll*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ah*2*Math.atan(Math.tan(Ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hs.x,hs.y).multiplyScalar(-t/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hs.x,hs.y).multiplyScalar(-t/hs.z)}getViewSize(t,e){return this.getViewBounds(t,Ld,Dd),e.subVectors(Dd,Ld)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ll*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,u=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/u,s*=r.width/l,n*=r.height/u}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const wo=-90,So=1;class Lx extends he{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wn(wo,So,t,e);s.layers=this.layers,this.add(s);const o=new Wn(wo,So,t,e);o.layers=this.layers,this.add(o);const r=new Wn(wo,So,t,e);r.layers=this.layers,this.add(r);const a=new Wn(wo,So,t,e);a.layers=this.layers,this.add(a);const l=new Wn(wo,So,t,e);l.layers=this.layers,this.add(l);const u=new Wn(wo,So,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const u of e)this.remove(u);if(t===Zi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,u,c]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(p,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bp extends dn{constructor(t,e,n,s,o,r,a,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:hr,super(t,e,n,s,o,r,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dx extends Mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Bp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ii}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wa(5,5,5),o=new Fn({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:Ji});o.uniforms.tEquirect.value=e;const r=new C(s,o),a=e.minFilter;return e.minFilter===$s&&(e.minFilter=Ii),new Lx(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}class Of{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new st(t),this.density=e}clone(){return new Of(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ux extends he{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Nx{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wc,this.updateRanges=[],this.version=0,this.uuid=ts()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ts()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ts()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new F;class Zc{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),o=_e(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Zc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Gp extends Es{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let bo;const Lr=new F,To=new F,Eo=new F,Ao=new pt,Dr=new pt,kp=new me,Ya=new F,Ur=new F,Za=new F,Ud=new pt,Ql=new pt,Nd=new pt;class zx extends he{constructor(t=new Gp){if(super(),this.isSprite=!0,this.type="Sprite",bo===void 0){bo=new Ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nx(e,5);bo.setIndex([0,1,2,0,2,3]),bo.setAttribute("position",new Zc(n,3,0,!1)),bo.setAttribute("uv",new Zc(n,2,3,!1))}this.geometry=bo,this.material=t,this.center=new pt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),To.setFromMatrixScale(this.matrixWorld),kp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Eo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&To.multiplyScalar(-Eo.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;$a(Ya.set(-.5,-.5,0),Eo,r,To,s,o),$a(Ur.set(.5,-.5,0),Eo,r,To,s,o),$a(Za.set(.5,.5,0),Eo,r,To,s,o),Ud.set(0,0),Ql.set(1,0),Nd.set(1,1);let a=t.ray.intersectTriangle(Ya,Ur,Za,!1,Lr);if(a===null&&($a(Ur.set(-.5,.5,0),Eo,r,To,s,o),Ql.set(0,1),a=t.ray.intersectTriangle(Ya,Za,Ur,!1,Lr),a===null))return;const l=t.ray.origin.distanceTo(Lr);l<t.near||l>t.far||e.push({distance:l,point:Lr.clone(),uv:ci.getInterpolation(Lr,Ya,Ur,Za,Ud,Ql,Nd,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function $a(i,t,e,n,s,o){Ao.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Dr.x=o*Ao.x-s*Ao.y,Dr.y=s*Ao.x+o*Ao.y):Dr.copy(Ao),i.copy(t),i.x+=Dr.x,i.y+=Dr.y,i.applyMatrix4(kp)}class Fx extends dn{constructor(t=null,e=1,n=1,s,o,r,a,l,u=Kn,c=Kn,p,f){super(null,r,a,l,u,c,s,o,p,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni extends ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ro=new me,zd=new me,ja=[],Fd=new ro,Ox=new me,Nr=new C,zr=new ao;class jn extends C{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ni(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ox)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ro),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ro),Fd.copy(t.boundingBox).applyMatrix4(Ro),this.boundingBox.union(Fd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ao),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ro),zr.copy(t.boundingSphere).applyMatrix4(Ro),this.boundingSphere.union(zr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(n),t.ray.intersectsSphere(zr)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Ro),zd.multiplyMatrices(n,Ro),Nr.matrixWorld=zd,Nr.raycast(t,ja);for(let r=0,a=ja.length;r<a;r++){const l=ja[r];l.instanceId=o,l.object=this,e.push(l)}ja.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ni(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fx(new Float32Array(s*this.count),s,this.count,Df,Li));const o=this.morphTexture.source.data.data;let r=0;for(let u=0;u<n.length;u++)r+=n[u];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const tu=new F,Bx=new F,Gx=new Yt;class Fs{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=tu.subVectors(n,e).cross(Bx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(tu),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gx.getNormalMatrix(t),s=this.coplanarPoint(tu).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new ao,Ka=new F;class Bf{constructor(t=new Fs,e=new Fs,n=new Fs,s=new Fs,o=new Fs,r=new Fs){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zi){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],u=s[4],c=s[5],p=s[6],f=s[7],d=s[8],g=s[9],x=s[10],h=s[11],m=s[12],_=s[13],v=s[14],y=s[15];if(n[0].setComponents(l-o,f-u,h-d,y-m).normalize(),n[1].setComponents(l+o,f+u,h+d,y+m).normalize(),n[2].setComponents(l+r,f+c,h+g,y+_).normalize(),n[3].setComponents(l-r,f-c,h-g,y-_).normalize(),n[4].setComponents(l-a,f-p,h-x,y-v).normalize(),e===Zi)n[5].setComponents(l+a,f+p,h+x,y+v).normalize();else if(e===Xc)n[5].setComponents(a,p,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(t){return Ls.center.set(0,0,0),Ls.radius=.7071067811865476,Ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ka.x=s.normal.x>0?t.max.x:t.min.x,Ka.y=s.normal.y>0?t.max.y:t.min.y,Ka.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gf extends Es{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const $c=new F,jc=new F,Od=new me,Fr=new Ff,Ja=new ao,eu=new F,Bd=new F;class Hp extends he{constructor(t=new Ae,e=new Gf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)$c.fromBufferAttribute(e,s-1),jc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=$c.distanceTo(jc);t.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(s),Ja.radius+=o,t.ray.intersectsSphere(Ja)===!1)return;Od.copy(s).invert(),Fr.copy(t.ray).applyMatrix4(Od);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),g=Math.min(c.count,r.start+r.count);for(let x=d,h=g-1;x<h;x+=u){const m=c.getX(x),_=c.getX(x+1),v=Qa(this,t,Fr,l,m,_);v&&e.push(v)}if(this.isLineLoop){const x=c.getX(g-1),h=c.getX(d),m=Qa(this,t,Fr,l,x,h);m&&e.push(m)}}else{const d=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let x=d,h=g-1;x<h;x+=u){const m=Qa(this,t,Fr,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){const x=Qa(this,t,Fr,l,g-1,d);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Qa(i,t,e,n,s,o){const r=i.geometry.attributes.position;if($c.fromBufferAttribute(r,s),jc.fromBufferAttribute(r,o),e.distanceSqToSegment($c,jc,eu,Bd)>n)return;eu.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(eu);if(!(l<t.near||l>t.far))return{distance:l,point:Bd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Gd=new F,kd=new F;class kx extends Hp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)Gd.fromBufferAttribute(e,s),kd.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Gd.distanceTo(kd);t.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kf extends Es{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Hd=new me,Rh=new Ff,tc=new ao,ec=new F;class Vp extends he{constructor(t=new Ae,e=new kf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tc.copy(n.boundingSphere),tc.applyMatrix4(s),tc.radius+=o,t.ray.intersectsSphere(tc)===!1)return;Hd.copy(s).invert(),Rh.copy(t.ray).applyMatrix4(Hd);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,p=n.attributes.position;if(u!==null){const f=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let g=f,x=d;g<x;g++){const h=u.getX(g);ec.fromBufferAttribute(p,h),Vd(ec,h,l,s,t,e,this)}}else{const f=Math.max(0,r.start),d=Math.min(p.count,r.start+r.count);for(let g=f,x=d;g<x;g++)ec.fromBufferAttribute(p,g),Vd(ec,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Vd(i,t,e,n,s,o,r){const a=Rh.distanceSqToPoint(i);if(a<e){const l=new F;Rh.closestPointToPoint(i,l),l.applyMatrix4(n);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;o.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Jt extends he{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Sa extends dn{constructor(t,e,n,s,o,r,a,l,u){super(t,e,n,s,o,r,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wp extends dn{constructor(t,e,n,s,o,r,a,l,u,c=$o){if(c!==$o&&c!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===$o&&(n=no),n===void 0&&c===mr&&(n=pr),super(null,s,o,r,a,l,c,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Kn,this.minFilter=l!==void 0?l:Kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class zi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,u;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),u=n[s]-r,u<0)a=s+1;else if(u>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const c=n[s],f=n[s+1]-c,d=(r-c)/f;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new pt:new F);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new F,s=[],o=[],r=[],a=new F,l=new me;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new F)}o[0]=new F,r[0]=new F;let u=Number.MAX_VALUE;const c=Math.abs(s[0].x),p=Math.abs(s[0].y),f=Math.abs(s[0].z);c<=u&&(u=c,n.set(1,0,0)),p<=u&&(u=p,n.set(0,1,0)),f<=u&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Qt(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(a,g))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(Qt(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Hf extends zi{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new pt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=l-this.aX,d=u-this.aY;l=f*c-d*p+this.aX,u=f*p+d*c+this.aY}return n.set(l,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Hx extends Hf{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Vf(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,u){s(r,a,u*(a-o),u*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,u,c,p){let f=(r-o)/u-(a-o)/(u+c)+(a-r)/c,d=(a-r)/c-(l-r)/(c+p)+(l-a)/p;f*=c,d*=c,s(r,a,f,d)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const nc=new F,nu=new Vf,iu=new Vf,su=new Vf;class co extends zi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let u,c;this.closed||a>0?u=s[(a-1)%o]:(nc.subVectors(s[0],s[1]).add(s[0]),u=nc);const p=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?c=s[(a+2)%o]:(nc.subVectors(s[o-1],s[o-2]).add(s[o-1]),c=nc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(p),d),x=Math.pow(p.distanceToSquared(f),d),h=Math.pow(f.distanceToSquared(c),d);x<1e-4&&(x=1),g<1e-4&&(g=x),h<1e-4&&(h=x),nu.initNonuniformCatmullRom(u.x,p.x,f.x,c.x,g,x,h),iu.initNonuniformCatmullRom(u.y,p.y,f.y,c.y,g,x,h),su.initNonuniformCatmullRom(u.z,p.z,f.z,c.z,g,x,h)}else this.curveType==="catmullrom"&&(nu.initCatmullRom(u.x,p.x,f.x,c.x,this.tension),iu.initCatmullRom(u.y,p.y,f.y,c.y,this.tension),su.initCatmullRom(u.z,p.z,f.z,c.z,this.tension));return n.set(nu.calc(l),iu.calc(l),su.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Wd(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function Vx(i,t){const e=1-i;return e*e*t}function Wx(i,t){return 2*(1-i)*i*t}function Xx(i,t){return i*i*t}function ea(i,t,e,n){return Vx(i,t)+Wx(i,e)+Xx(i,n)}function qx(i,t){const e=1-i;return e*e*e*t}function Yx(i,t){const e=1-i;return 3*e*e*i*t}function Zx(i,t){return 3*(1-i)*i*i*t}function $x(i,t){return i*i*i*t}function na(i,t,e,n,s){return qx(i,t)+Yx(i,e)+Zx(i,n)+$x(i,s)}class Xp extends zi{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(na(t,s.x,o.x,r.x,a.x),na(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jx extends zi{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(na(t,s.x,o.x,r.x,a.x),na(t,s.y,o.y,r.y,a.y),na(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qp extends zi{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wf extends zi{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yp extends zi{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(ea(t,s.x,o.x,r.x),ea(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zp extends zi{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(ea(t,s.x,o.x,r.x),ea(t,s.y,o.y,r.y),ea(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $p extends zi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],u=s[r],c=s[r>s.length-2?s.length-1:r+1],p=s[r>s.length-3?s.length-1:r+2];return n.set(Wd(a,l.x,u.x,c.x,p.x),Wd(a,l.y,u.y,c.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new pt().fromArray(s))}return this}}var Ch=Object.freeze({__proto__:null,ArcCurve:Hx,CatmullRomCurve3:co,CubicBezierCurve:Xp,CubicBezierCurve3:jx,EllipseCurve:Hf,LineCurve:qp,LineCurve3:Wf,QuadraticBezierCurve:Yp,QuadraticBezierCurve3:Zp,SplineCurve:$p});class Kx extends zi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ch[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),u=l===0?0:1-r/l;return a.getPointAt(u,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ch[s.type]().fromJSON(s))}return this}}class Kc extends Kx{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new qp(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new Yp(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new Xp(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new $p(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+u,e+c,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const u=new Hf(t,e,n,s,o,r,a,l);if(this.curves.length>0){const p=u.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class He extends Ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],u=new F,c=new pt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,f=3;p<=e;p++,f+=3){const d=n+p/e*s;u.x=t*Math.cos(d),u.y=t*Math.sin(d),r.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(r[f]/t+1)/2,c.y=(r[f+1]/t+1)/2,l.push(c.x,c.y)}for(let p=1;p<=e;p++)o.push(p,p+1,0);this.setIndex(o),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class gt extends Ae{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const u=this;s=Math.floor(s),o=Math.floor(o);const c=[],p=[],f=[],d=[];let g=0;const x=[],h=n/2;let m=0;_(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new Vt(p,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(d,2));function _(){const y=new F,A=new F;let E=0;const b=(e-t)/n;for(let T=0;T<=o;T++){const w=[],S=T/o,R=S*(e-t)+t;for(let L=0;L<=s;L++){const D=L/s,z=D*l+a,H=Math.sin(z),k=Math.cos(z);A.x=R*H,A.y=-S*n+h,A.z=R*k,p.push(A.x,A.y,A.z),y.set(H,b,k).normalize(),f.push(y.x,y.y,y.z),d.push(D,1-S),w.push(g++)}x.push(w)}for(let T=0;T<s;T++)for(let w=0;w<o;w++){const S=x[w][T],R=x[w+1][T],L=x[w+1][T+1],D=x[w][T+1];(t>0||w!==0)&&(c.push(S,R,D),E+=3),(e>0||w!==o-1)&&(c.push(R,L,D),E+=3)}u.addGroup(m,E,0),m+=E}function v(y){const A=g,E=new pt,b=new F;let T=0;const w=y===!0?t:e,S=y===!0?1:-1;for(let L=1;L<=s;L++)p.push(0,h*S,0),f.push(0,S,0),d.push(.5,.5),g++;const R=g;for(let L=0;L<=s;L++){const z=L/s*l+a,H=Math.cos(z),k=Math.sin(z);b.x=w*k,b.y=h*S,b.z=w*H,p.push(b.x,b.y,b.z),f.push(0,S,0),E.x=H*.5+.5,E.y=k*.5*S+.5,d.push(E.x,E.y),g++}for(let L=0;L<s;L++){const D=A+L,z=R+L;y===!0?c.push(z,z+1,D):c.push(z+1,z,D),T+=3}u.addGroup(m,T,y===!0?1:2),m+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dn extends gt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Dn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ba extends Ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),u(n),c(),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(o.slice(),3)),this.setAttribute("uv",new Vt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const v=new F,y=new F,A=new F;for(let E=0;E<e.length;E+=3)d(e[E+0],v),d(e[E+1],y),d(e[E+2],A),l(v,y,A,_)}function l(_,v,y,A){const E=A+1,b=[];for(let T=0;T<=E;T++){b[T]=[];const w=_.clone().lerp(y,T/E),S=v.clone().lerp(y,T/E),R=E-T;for(let L=0;L<=R;L++)L===0&&T===E?b[T][L]=w:b[T][L]=w.clone().lerp(S,L/R)}for(let T=0;T<E;T++)for(let w=0;w<2*(E-T)-1;w++){const S=Math.floor(w/2);w%2===0?(f(b[T][S+1]),f(b[T+1][S]),f(b[T][S])):(f(b[T][S+1]),f(b[T+1][S+1]),f(b[T+1][S]))}}function u(_){const v=new F;for(let y=0;y<o.length;y+=3)v.x=o[y+0],v.y=o[y+1],v.z=o[y+2],v.normalize().multiplyScalar(_),o[y+0]=v.x,o[y+1]=v.y,o[y+2]=v.z}function c(){const _=new F;for(let v=0;v<o.length;v+=3){_.x=o[v+0],_.y=o[v+1],_.z=o[v+2];const y=h(_)/2/Math.PI+.5,A=m(_)/Math.PI+.5;r.push(y,1-A)}g(),p()}function p(){for(let _=0;_<r.length;_+=6){const v=r[_+0],y=r[_+2],A=r[_+4],E=Math.max(v,y,A),b=Math.min(v,y,A);E>.9&&b<.1&&(v<.2&&(r[_+0]+=1),y<.2&&(r[_+2]+=1),A<.2&&(r[_+4]+=1))}}function f(_){o.push(_.x,_.y,_.z)}function d(_,v){const y=_*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function g(){const _=new F,v=new F,y=new F,A=new F,E=new pt,b=new pt,T=new pt;for(let w=0,S=0;w<o.length;w+=9,S+=6){_.set(o[w+0],o[w+1],o[w+2]),v.set(o[w+3],o[w+4],o[w+5]),y.set(o[w+6],o[w+7],o[w+8]),E.set(r[S+0],r[S+1]),b.set(r[S+2],r[S+3]),T.set(r[S+4],r[S+5]),A.copy(_).add(v).add(y).divideScalar(3);const R=h(A);x(E,S+0,_,R),x(b,S+2,v,R),x(T,S+4,y,R)}}function x(_,v,y,A){A<0&&_.x===1&&(r[v]=_.x-1),y.x===0&&y.z===0&&(r[v]=A/2/Math.PI+.5)}function h(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.vertices,t.indices,t.radius,t.details)}}class Xf extends ba{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xf(t.radius,t.detail)}}class Jc extends Kc{constructor(t){super(t),this.uuid=ts(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Kc().fromJSON(s))}return this}}const Jx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=jp(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,u,c,p,f,d;if(n&&(o=iv(i,t,o,e)),i.length>80*e){a=u=i[0],l=c=i[1];for(let g=e;g<s;g+=e)p=i[g],f=i[g+1],p<a&&(a=p),f<l&&(l=f),p>u&&(u=p),f>c&&(c=f);d=Math.max(u-a,c-l),d=d!==0?32767/d:0}return ha(o,r,e,a,l,d,0),r}};function jp(i,t,e,n,s){let o,r;if(s===pv(i,t,e,n)>0)for(o=t;o<e;o+=n)r=Xd(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=Xd(o,i[o],i[o+1],r);return r&&yl(r,r.next)&&(da(r),r=r.next),r}function io(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(yl(e,e.next)||Ne(e.prev,e,e.next)===0)){if(da(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ha(i,t,e,n,s,o,r){if(!i)return;!r&&o&&cv(i,n,s,o);let a=i,l,u;for(;i.prev!==i.next;){if(l=i.prev,u=i.next,o?tv(i,n,s,o):Qx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(u.i/e|0),da(i),i=u.next,a=u.next;continue}if(i=u,i===a){r?r===1?(i=ev(io(i),t,e),ha(i,t,e,n,s,o,2)):r===2&&nv(i,t,e,n,s,o):ha(io(i),t,e,n,s,o,1);break}}}function Qx(i){const t=i.prev,e=i,n=i.next;if(Ne(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,u=n.y,c=s<o?s<r?s:r:o<r?o:r,p=a<l?a<u?a:u:l<u?l:u,f=s>o?s>r?s:r:o>r?o:r,d=a>l?a>u?a:u:l>u?l:u;let g=n.next;for(;g!==t;){if(g.x>=c&&g.x<=f&&g.y>=p&&g.y<=d&&Go(s,a,o,l,r,u,g.x,g.y)&&Ne(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function tv(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Ne(s,o,r)>=0)return!1;const a=s.x,l=o.x,u=r.x,c=s.y,p=o.y,f=r.y,d=a<l?a<u?a:u:l<u?l:u,g=c<p?c<f?c:f:p<f?p:f,x=a>l?a>u?a:u:l>u?l:u,h=c>p?c>f?c:f:p>f?p:f,m=Ph(d,g,t,e,n),_=Ph(x,h,t,e,n);let v=i.prevZ,y=i.nextZ;for(;v&&v.z>=m&&y&&y.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=h&&v!==s&&v!==r&&Go(a,c,l,p,u,f,v.x,v.y)&&Ne(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=x&&y.y>=g&&y.y<=h&&y!==s&&y!==r&&Go(a,c,l,p,u,f,y.x,y.y)&&Ne(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=h&&v!==s&&v!==r&&Go(a,c,l,p,u,f,v.x,v.y)&&Ne(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=h&&y!==s&&y!==r&&Go(a,c,l,p,u,f,y.x,y.y)&&Ne(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ev(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!yl(s,o)&&Kp(s,n,n.next,o)&&fa(s,o)&&fa(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),da(n),da(n.next),n=i=o),n=n.next}while(n!==i);return io(n)}function nv(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&hv(r,a)){let l=Jp(r,a);r=io(r,r.next),l=io(l,l.next),ha(r,t,e,n,s,o,0),ha(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function iv(i,t,e,n){const s=[];let o,r,a,l,u;for(o=0,r=t.length;o<r;o++)a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,u=jp(i,a,l,n,!1),u===u.next&&(u.steiner=!0),s.push(uv(u));for(s.sort(sv),o=0;o<s.length;o++)e=ov(s[o],e);return e}function sv(i,t){return i.x-t.x}function ov(i,t){const e=rv(i,t);if(!e)return t;const n=Jp(e,i);return io(n,n.next),io(e,e.next)}function rv(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,u=s.y;let c=1/0,p;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&Go(r<u?o:n,r,l,u,r<u?n:o,r,e.x,e.y)&&(p=Math.abs(r-e.y)/(o-e.x),fa(e,i)&&(p<c||p===c&&(e.x>s.x||e.x===s.x&&av(s,e)))&&(s=e,c=p)),e=e.next;while(e!==a);return s}function av(i,t){return Ne(i.prev,i,t.prev)<0&&Ne(t.next,i,i.next)<0}function cv(i,t,e,n){let s=i;do s.z===0&&(s.z=Ph(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,lv(s)}function lv(i){let t,e,n,s,o,r,a,l,u=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<u&&(a++,n=n.nextZ,!!n);t++);for(l=u;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,u*=2}while(r>1);return i}function Ph(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function uv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Go(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function hv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!fv(i,t)&&(fa(i,t)&&fa(t,i)&&dv(i,t)&&(Ne(i.prev,i,t.prev)||Ne(i,t.prev,t))||yl(i,t)&&Ne(i.prev,i,i.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function yl(i,t){return i.x===t.x&&i.y===t.y}function Kp(i,t,e,n){const s=sc(Ne(i,t,e)),o=sc(Ne(i,t,n)),r=sc(Ne(e,n,i)),a=sc(Ne(e,n,t));return!!(s!==o&&r!==a||s===0&&ic(i,e,t)||o===0&&ic(i,n,t)||r===0&&ic(e,i,n)||a===0&&ic(e,t,n))}function ic(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function sc(i){return i>0?1:i<0?-1:0}function fv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Kp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function fa(i,t){return Ne(i.prev,i,i.next)<0?Ne(i,t,i.next)>=0&&Ne(i,i.prev,t)>=0:Ne(i,t,i.prev)<0||Ne(i,i.next,t)<0}function dv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Jp(i,t){const e=new Ih(i.i,i.x,i.y),n=new Ih(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Xd(i,t,e,n){const s=new Ih(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function da(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ih(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function pv(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class ia{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return ia.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];qd(t),Yd(n,t);let r=t.length;e.forEach(qd);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,Yd(n,e[l]);const a=Jx.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function qd(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Yd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class vr extends ba{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vr(t.radius,t.detail)}}class qf extends ba{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new qf(t.radius,t.detail)}}class ue extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),u=a+1,c=l+1,p=t/a,f=e/l,d=[],g=[],x=[],h=[];for(let m=0;m<c;m++){const _=m*f-r;for(let v=0;v<u;v++){const y=v*p-o;g.push(y,-_,0),x.push(0,0,1),h.push(v/a),h.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){const v=_+u*m,y=_+u*(m+1),A=_+1+u*(m+1),E=_+1+u*m;d.push(v,y,E),d.push(y,A,E)}this.setIndex(d),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.width,t.height,t.widthSegments,t.heightSegments)}}class pa extends Ae{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],u=[],c=[];let p=t;const f=(e-t)/s,d=new F,g=new pt;for(let x=0;x<=s;x++){for(let h=0;h<=n;h++){const m=o+h/n*r;d.x=p*Math.cos(m),d.y=p*Math.sin(m),l.push(d.x,d.y,d.z),u.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,c.push(g.x,g.y)}p+=f}for(let x=0;x<s;x++){const h=x*(n+1);for(let m=0;m<n;m++){const _=m+h,v=_,y=_+n+1,A=_+n+2,E=_+1;a.push(v,y,E),a.push(y,A,E)}}this.setIndex(a),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ma extends Ae{constructor(t=new Jc([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)u(t);else for(let c=0;c<t.length;c++)u(t[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Vt(s,3)),this.setAttribute("normal",new Vt(o,3)),this.setAttribute("uv",new Vt(r,2));function u(c){const p=s.length/3,f=c.extractPoints(e);let d=f.shape;const g=f.holes;ia.isClockWise(d)===!1&&(d=d.reverse());for(let h=0,m=g.length;h<m;h++){const _=g[h];ia.isClockWise(_)===!0&&(g[h]=_.reverse())}const x=ia.triangulateShape(d,g);for(let h=0,m=g.length;h<m;h++){const _=g[h];d=d.concat(_)}for(let h=0,m=d.length;h<m;h++){const _=d[h];s.push(_.x,_.y,0),o.push(0,0,1),r.push(_.x,_.y)}for(let h=0,m=x.length;h<m;h++){const _=x[h],v=_[0]+p,y=_[1]+p,A=_[2]+p;n.push(v,y,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return mv(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new ma(n,t.curveSegments)}}function mv(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Y extends Ae{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let u=0;const c=[],p=new F,f=new F,d=[],g=[],x=[],h=[];for(let m=0;m<=n;m++){const _=[],v=m/n;let y=0;m===0&&r===0?y=.5/e:m===n&&l===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){const E=A/e;p.x=-t*Math.cos(s+E*o)*Math.sin(r+v*a),p.y=t*Math.cos(r+v*a),p.z=t*Math.sin(s+E*o)*Math.sin(r+v*a),g.push(p.x,p.y,p.z),f.copy(p).normalize(),x.push(f.x,f.y,f.z),h.push(E+y,1-v),_.push(u++)}c.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){const v=c[m][_+1],y=c[m][_],A=c[m+1][_],E=c[m+1][_+1];(m!==0||r>0)&&d.push(v,y,E),(m!==n-1||l<Math.PI)&&d.push(y,A,E)}this.setIndex(d),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Y(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pe extends Ae{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],l=[],u=[],c=new F,p=new F,f=new F;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const x=g/s*o,h=d/n*Math.PI*2;p.x=(t+e*Math.cos(h))*Math.cos(x),p.y=(t+e*Math.cos(h))*Math.sin(x),p.z=e*Math.sin(h),a.push(p.x,p.y,p.z),c.x=t*Math.cos(x),c.y=t*Math.sin(x),f.subVectors(p,c).normalize(),l.push(f.x,f.y,f.z),u.push(g/s),u.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,h=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,_=(s+1)*d+g;r.push(x,h,_),r.push(h,m,_)}this.setIndex(r),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class hn extends Ae{constructor(t=new Zp(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new F,l=new F,u=new pt;let c=new F;const p=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Vt(p,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(d,2));function x(){for(let v=0;v<e;v++)h(v);h(o===!1?e:0),_(),m()}function h(v){c=t.getPointAt(v/e,c);const y=r.normals[v],A=r.binormals[v];for(let E=0;E<=s;E++){const b=E/s*Math.PI*2,T=Math.sin(b),w=-Math.cos(b);l.x=w*y.x+T*A.x,l.y=w*y.y+T*A.y,l.z=w*y.z+T*A.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=c.x+n*l.x,a.y=c.y+n*l.y,a.z=c.z+n*l.z,p.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=e;v++)for(let y=1;y<=s;y++){const A=(s+1)*(v-1)+(y-1),E=(s+1)*v+(y-1),b=(s+1)*v+y,T=(s+1)*(v-1)+y;g.push(A,E,T),g.push(E,b,T)}}function _(){for(let v=0;v<=e;v++)for(let y=0;y<=s;y++)u.x=v/e,u.y=y/s,d.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new hn(new Ch[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class q extends Es{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rp,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gv extends Es{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xv extends Es{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Yf extends he{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new st(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class vv extends Yf{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ou=new me,Zd=new F,$d=new F;class Qp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bf,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Zd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zd),$d.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($d),e.updateMatrixWorld(),ou.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ou),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ou)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const jd=new me,Or=new F,ru=new F;class Mv extends Qp{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new we(2,1,1,1),new we(0,1,1,1),new we(3,1,1,1),new we(1,1,1,1),new we(3,0,1,1),new we(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Or.setFromMatrixPosition(t.matrixWorld),n.position.copy(Or),ru.copy(n.position),ru.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ru),n.updateMatrixWorld(),s.makeTranslation(-Or.x,-Or.y,-Or.z),jd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jd)}}class Sr extends Yf{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Mv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Zf extends Op{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,r=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class _v extends Qp{constructor(){super(new Zf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wl extends Yf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.shadow=new _v}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yv extends Wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class tm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Kd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Kd(){return performance.now()}function Jd(i,t,e,n){const s=wv(n);switch(e){case wp:return i*t;case bp:return i*t;case Tp:return i*t*2;case Df:return i*t/s.components*s.byteLength;case Uf:return i*t/s.components*s.byteLength;case Ep:return i*t*2/s.components*s.byteLength;case Nf:return i*t*2/s.components*s.byteLength;case Sp:return i*t*3/s.components*s.byteLength;case vi:return i*t*4/s.components*s.byteLength;case zf:return i*t*4/s.components*s.byteLength;case yc:case wc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sc:case bc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nh:case sh:return Math.max(i,16)*Math.max(t,8)/4;case eh:case ih:return Math.max(i,8)*Math.max(t,8)/2;case oh:case rh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ah:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ch:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case uh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case hh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case fh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case dh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ph:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case mh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case gh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case xh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case vh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Mh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _h:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case yh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Tc:case wh:case Sh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ap:case bh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Th:case Eh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wv(i){switch(i){case ss:case Mp:return{byteLength:1,components:1};case ua:case _p:case Qi:return{byteLength:2,components:1};case If:case Lf:return{byteLength:2,components:4};case no:case Pf:case Li:return{byteLength:4,components:1};case yp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function em(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Sv(i){const t=new WeakMap;function e(a,l){const u=a.array,c=a.usage,p=u.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,u,c),a.onUploadCallback();let d;if(u instanceof Float32Array)d=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=i.SHORT;else if(u instanceof Uint32Array)d=i.UNSIGNED_INT;else if(u instanceof Int32Array)d=i.INT;else if(u instanceof Int8Array)d=i.BYTE;else if(u instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,u){const c=l.array,p=l.updateRanges;if(i.bindBuffer(u,a),p.length===0)i.bufferSubData(u,0,c);else{p.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<p.length;d++){const g=p[f],x=p[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,p[f]=x)}p.length=f+1;for(let d=0,g=p.length;d<g;d++){const x=p[d];i.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,l),u.version=a.version}}return{get:s,remove:o,update:r}}var bv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tv=`#ifdef USE_ALPHAHASH
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
#endif`,Ev=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Av=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pv=`#ifdef USE_AOMAP
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
#endif`,Iv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lv=`#ifdef USE_BATCHING
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
#endif`,Dv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fv=`#ifdef USE_IRIDESCENCE
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
#endif`,Ov=`#ifdef USE_BUMPMAP
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
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yv=`#define PI 3.141592653589793
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
} // validated`,Zv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$v=`vec3 transformedNormal = objectNormal;
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
#endif`,jv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tM="gl_FragColor = linearToOutputTexel( gl_FragColor );",eM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sM=`#ifdef USE_ENVMAP
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
#endif`,oM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rM=`#ifdef USE_ENVMAP
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
#endif`,aM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hM=`#ifdef USE_GRADIENTMAP
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
}`,fM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mM=`uniform bool receiveShadow;
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
#endif`,gM=`#ifdef USE_ENVMAP
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
#endif`,xM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yM=`PhysicalMaterial material;
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
#endif`,wM=`struct PhysicalMaterial {
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
}`,SM=`
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
#endif`,bM=`#if defined( RE_IndirectDiffuse )
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
#endif`,TM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,DM=`#if defined( USE_POINTS_UV )
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
#endif`,UM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BM=`#ifdef USE_MORPHTARGETS
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
#endif`,GM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,HM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,VM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qM=`#ifdef USE_NORMALMAP
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
#endif`,YM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$M=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,QM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,c_=`float getShadowMask() {
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
}`,l_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u_=`#ifdef USE_SKINNING
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
#endif`,h_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f_=`#ifdef USE_SKINNING
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
#endif`,d_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x_=`#ifdef USE_TRANSMISSION
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
#endif`,M_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b_=`uniform sampler2D t2D;
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
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C_=`#include <common>
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
}`,P_=`#if DEPTH_PACKING == 3200
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
}`,I_=`#define DISTANCE
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
}`,L_=`#define DISTANCE
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
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N_=`uniform float scale;
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
}`,z_=`uniform vec3 diffuse;
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
}`,F_=`#include <common>
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
}`,O_=`uniform vec3 diffuse;
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
}`,B_=`#define LAMBERT
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
}`,G_=`#define LAMBERT
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
}`,k_=`#define MATCAP
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
}`,H_=`#define MATCAP
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
}`,V_=`#define NORMAL
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
}`,W_=`#define NORMAL
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
}`,X_=`#define PHONG
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
}`,q_=`#define PHONG
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
}`,Y_=`#define STANDARD
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
}`,Z_=`#define STANDARD
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
}`,$_=`#define TOON
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
}`,j_=`#define TOON
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
}`,K_=`uniform float size;
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
}`,J_=`uniform vec3 diffuse;
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
}`,Q_=`#include <common>
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
}`,ty=`uniform vec3 color;
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
}`,ey=`uniform float rotation;
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
}`,ny=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:bv,alphahash_pars_fragment:Tv,alphamap_fragment:Ev,alphamap_pars_fragment:Av,alphatest_fragment:Rv,alphatest_pars_fragment:Cv,aomap_fragment:Pv,aomap_pars_fragment:Iv,batching_pars_vertex:Lv,batching_vertex:Dv,begin_vertex:Uv,beginnormal_vertex:Nv,bsdfs:zv,iridescence_fragment:Fv,bumpmap_pars_fragment:Ov,clipping_planes_fragment:Bv,clipping_planes_pars_fragment:Gv,clipping_planes_pars_vertex:kv,clipping_planes_vertex:Hv,color_fragment:Vv,color_pars_fragment:Wv,color_pars_vertex:Xv,color_vertex:qv,common:Yv,cube_uv_reflection_fragment:Zv,defaultnormal_vertex:$v,displacementmap_pars_vertex:jv,displacementmap_vertex:Kv,emissivemap_fragment:Jv,emissivemap_pars_fragment:Qv,colorspace_fragment:tM,colorspace_pars_fragment:eM,envmap_fragment:nM,envmap_common_pars_fragment:iM,envmap_pars_fragment:sM,envmap_pars_vertex:oM,envmap_physical_pars_fragment:gM,envmap_vertex:rM,fog_vertex:aM,fog_pars_vertex:cM,fog_fragment:lM,fog_pars_fragment:uM,gradientmap_pars_fragment:hM,lightmap_pars_fragment:fM,lights_lambert_fragment:dM,lights_lambert_pars_fragment:pM,lights_pars_begin:mM,lights_toon_fragment:xM,lights_toon_pars_fragment:vM,lights_phong_fragment:MM,lights_phong_pars_fragment:_M,lights_physical_fragment:yM,lights_physical_pars_fragment:wM,lights_fragment_begin:SM,lights_fragment_maps:bM,lights_fragment_end:TM,logdepthbuf_fragment:EM,logdepthbuf_pars_fragment:AM,logdepthbuf_pars_vertex:RM,logdepthbuf_vertex:CM,map_fragment:PM,map_pars_fragment:IM,map_particle_fragment:LM,map_particle_pars_fragment:DM,metalnessmap_fragment:UM,metalnessmap_pars_fragment:NM,morphinstance_vertex:zM,morphcolor_vertex:FM,morphnormal_vertex:OM,morphtarget_pars_vertex:BM,morphtarget_vertex:GM,normal_fragment_begin:kM,normal_fragment_maps:HM,normal_pars_fragment:VM,normal_pars_vertex:WM,normal_vertex:XM,normalmap_pars_fragment:qM,clearcoat_normal_fragment_begin:YM,clearcoat_normal_fragment_maps:ZM,clearcoat_pars_fragment:$M,iridescence_pars_fragment:jM,opaque_fragment:KM,packing:JM,premultiplied_alpha_fragment:QM,project_vertex:t_,dithering_fragment:e_,dithering_pars_fragment:n_,roughnessmap_fragment:i_,roughnessmap_pars_fragment:s_,shadowmap_pars_fragment:o_,shadowmap_pars_vertex:r_,shadowmap_vertex:a_,shadowmask_pars_fragment:c_,skinbase_vertex:l_,skinning_pars_vertex:u_,skinning_vertex:h_,skinnormal_vertex:f_,specularmap_fragment:d_,specularmap_pars_fragment:p_,tonemapping_fragment:m_,tonemapping_pars_fragment:g_,transmission_fragment:x_,transmission_pars_fragment:v_,uv_pars_fragment:M_,uv_pars_vertex:__,uv_vertex:y_,worldpos_vertex:w_,background_vert:S_,background_frag:b_,backgroundCube_vert:T_,backgroundCube_frag:E_,cube_vert:A_,cube_frag:R_,depth_vert:C_,depth_frag:P_,distanceRGBA_vert:I_,distanceRGBA_frag:L_,equirect_vert:D_,equirect_frag:U_,linedashed_vert:N_,linedashed_frag:z_,meshbasic_vert:F_,meshbasic_frag:O_,meshlambert_vert:B_,meshlambert_frag:G_,meshmatcap_vert:k_,meshmatcap_frag:H_,meshnormal_vert:V_,meshnormal_frag:W_,meshphong_vert:X_,meshphong_frag:q_,meshphysical_vert:Y_,meshphysical_frag:Z_,meshtoon_vert:$_,meshtoon_frag:j_,points_vert:K_,points_frag:J_,shadow_vert:Q_,shadow_frag:ty,sprite_vert:ey,sprite_frag:ny},xt={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Ai={basic:{uniforms:xn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:xn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new st(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:xn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:xn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:xn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new st(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:xn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:xn([xt.points,xt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:xn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:xn([xt.common,xt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:xn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:xn([xt.sprite,xt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:xn([xt.common,xt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:xn([xt.lights,xt.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Ai.physical={uniforms:xn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const oc={r:0,b:0,g:0},Ds=new Ui,iy=new me;function sy(i,t,e,n,s,o,r){const a=new st(0);let l=o===!0?0:1,u,c,p=null,f=0,d=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function x(v){let y=!1;const A=g(v);A===null?m(a,l):A&&A.isColor&&(m(A,1),y=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function h(v,y){const A=g(y);A&&(A.isCubeTexture||A.mapping===_l)?(c===void 0&&(c=new C(new wa(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:xr(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Ds.copy(y.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),c.material.uniforms.envMap.value=A,c.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(iy.makeRotationFromEuler(Ds)),c.material.toneMapped=le.getTransfer(A.colorSpace)!==Me,(p!==A||f!==A.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,p=A,f=A.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(u===void 0&&(u=new C(new ue(2,2),new Fn({name:"BackgroundMaterial",uniforms:xr(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=A,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=le.getTransfer(A.colorSpace)!==Me,A.matrixAutoUpdate===!0&&A.updateMatrix(),u.material.uniforms.uvTransform.value.copy(A.matrix),(p!==A||f!==A.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,p=A,f=A.version,d=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function m(v,y){v.getRGB(oc,Fp(i)),n.buffers.color.setClear(oc.r,oc.g,oc.b,y,r)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:x,addToRenderList:h,dispose:_}}function oy(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let o=s,r=!1;function a(S,R,L,D,z){let H=!1;const k=p(D,L,R);o!==k&&(o=k,u(o.object)),H=d(S,D,L,z),H&&g(S,D,L,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(H||r)&&(r=!1,y(S,R,L,D),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function u(S){return i.bindVertexArray(S)}function c(S){return i.deleteVertexArray(S)}function p(S,R,L){const D=L.wireframe===!0;let z=n[S.id];z===void 0&&(z={},n[S.id]=z);let H=z[R.id];H===void 0&&(H={},z[R.id]=H);let k=H[D];return k===void 0&&(k=f(l()),H[D]=k),k}function f(S){const R=[],L=[],D=[];for(let z=0;z<e;z++)R[z]=0,L[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:D,object:S,attributes:{},index:null}}function d(S,R,L,D){const z=o.attributes,H=R.attributes;let k=0;const O=L.getAttributes();for(const G in O)if(O[G].location>=0){const ct=z[G];let ft=H[G];if(ft===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ft=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ft=S.instanceColor)),ct===void 0||ct.attribute!==ft||ft&&ct.data!==ft.data)return!0;k++}return o.attributesNum!==k||o.index!==D}function g(S,R,L,D){const z={},H=R.attributes;let k=0;const O=L.getAttributes();for(const G in O)if(O[G].location>=0){let ct=H[G];ct===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor));const ft={};ft.attribute=ct,ct&&ct.data&&(ft.data=ct.data),z[G]=ft,k++}o.attributes=z,o.attributesNum=k,o.index=D}function x(){const S=o.newAttributes;for(let R=0,L=S.length;R<L;R++)S[R]=0}function h(S){m(S,0)}function m(S,R){const L=o.newAttributes,D=o.enabledAttributes,z=o.attributeDivisors;L[S]=1,D[S]===0&&(i.enableVertexAttribArray(S),D[S]=1),z[S]!==R&&(i.vertexAttribDivisor(S,R),z[S]=R)}function _(){const S=o.newAttributes,R=o.enabledAttributes;for(let L=0,D=R.length;L<D;L++)R[L]!==S[L]&&(i.disableVertexAttribArray(L),R[L]=0)}function v(S,R,L,D,z,H,k){k===!0?i.vertexAttribIPointer(S,R,L,z,H):i.vertexAttribPointer(S,R,L,D,z,H)}function y(S,R,L,D){x();const z=D.attributes,H=L.getAttributes(),k=R.defaultAttributeValues;for(const O in H){const G=H[O];if(G.location>=0){let et=z[O];if(et===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(et=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(et=S.instanceColor)),et!==void 0){const ct=et.normalized,ft=et.itemSize,Ct=t.get(et);if(Ct===void 0)continue;const Wt=Ct.buffer,tt=Ct.type,ut=Ct.bytesPerElement,yt=tt===i.INT||tt===i.UNSIGNED_INT||et.gpuType===Pf;if(et.isInterleavedBufferAttribute){const mt=et.data,It=mt.stride,zt=et.offset;if(mt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<G.locationSize;Kt++)m(G.location+Kt,mt.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Kt=0;Kt<G.locationSize;Kt++)h(G.location+Kt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let Kt=0;Kt<G.locationSize;Kt++)v(G.location+Kt,ft/G.locationSize,tt,ct,It*ut,(zt+ft/G.locationSize*Kt)*ut,yt)}else{if(et.isInstancedBufferAttribute){for(let mt=0;mt<G.locationSize;mt++)m(G.location+mt,et.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let mt=0;mt<G.locationSize;mt++)h(G.location+mt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let mt=0;mt<G.locationSize;mt++)v(G.location+mt,ft/G.locationSize,tt,ct,ft*ut,ft/G.locationSize*mt*ut,yt)}}else if(k!==void 0){const ct=k[O];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(G.location,ct);break;case 3:i.vertexAttrib3fv(G.location,ct);break;case 4:i.vertexAttrib4fv(G.location,ct);break;default:i.vertexAttrib1fv(G.location,ct)}}}}_()}function A(){T();for(const S in n){const R=n[S];for(const L in R){const D=R[L];for(const z in D)c(D[z].object),delete D[z];delete R[L]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const L in R){const D=R[L];for(const z in D)c(D[z].object),delete D[z];delete R[L]}delete n[S.id]}function b(S){for(const R in n){const L=n[R];if(L[S.id]===void 0)continue;const D=L[S.id];for(const z in D)c(D[z].object),delete D[z];delete L[S.id]}}function T(){w(),r=!0,o!==s&&(o=s,u(o.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:h,disableUnusedAttributes:_}}function ry(i,t,e){let n;function s(u){n=u}function o(u,c){i.drawArrays(n,u,c),e.update(c,n,1)}function r(u,c,p){p!==0&&(i.drawArraysInstanced(n,u,c,p),e.update(c,n,p))}function a(u,c,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,c,0,p);let d=0;for(let g=0;g<p;g++)d+=c[g];e.update(d,n,1)}function l(u,c,p,f){if(p===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<u.length;g++)r(u[g],c[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,u,0,c,0,f,0,p);let g=0;for(let x=0;x<p;x++)g+=c[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ay(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(b){return!(b!==vi&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const T=b===Qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==ss&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Li&&!T)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const p=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:h,maxAttributes:m,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:A,maxSamples:E}}function cy(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new Fs,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const d=p.length!==0||f||n!==0||s;return s=f,n=p.length,d},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(p,f){e=c(p,f,0)},this.setState=function(p,f,d){const g=p.clippingPlanes,x=p.clipIntersection,h=p.clipShadows,m=i.get(p);if(!s||g===null||g.length===0||o&&!h)o?c(null):u();else{const _=o?0:n,v=_*4;let y=m.clippingState||null;l.value=y,y=c(g,f,v,d);for(let A=0;A!==v;++A)y[A]=e[A];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(p,f,d,g){const x=p!==null?p.length:0;let h=null;if(x!==0){if(h=l.value,g!==!0||h===null){const m=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(h===null||h.length<m)&&(h=new Float32Array(m));for(let v=0,y=d;v!==x;++v,y+=4)r.copy(p[v]).applyMatrix4(_,a),r.normal.toArray(h,y),h[y+3]=r.constant}l.value=h,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,h}}function ly(i){let t=new WeakMap;function e(r,a){return a===Ju?r.mapping=hr:a===Qu&&(r.mapping=fr),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Ju||a===Qu)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const u=new Dx(l.height);return u.fromEquirectangularTexture(i,r),t.set(r,u),r.addEventListener("dispose",s),e(u.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const ko=4,Qd=[.125,.215,.35,.446,.526,.582],qs=20,au=new Zf,t0=new st;let cu=null,lu=0,uu=0,hu=!1;const Os=(1+Math.sqrt(5))/2,Co=1/Os,e0=[new F(-Os,Co,0),new F(Os,Co,0),new F(-Co,0,Os),new F(Co,0,Os),new F(0,Os,-Co),new F(0,Os,Co),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class n0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){cu=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=o0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=s0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cu,lu,uu),this._renderer.xr.enabled=hu,t.scissorTest=!1,rc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hr||t.mapping===fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cu=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:Qi,format:vi,colorSpace:gr,depthBuffer:!1},s=i0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=i0(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uy(o)),this._blurMaterial=hy(o,t,e)}return s}_compileMaterial(t){const e=new C(this._lodPlanes[0],t);this._renderer.compile(e,au)}_sceneToCubeUV(t,e,n,s){const a=new Wn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,p=c.autoClear,f=c.toneMapping;c.getClearColor(t0),c.toneMapping=bs,c.autoClear=!1;const d=new Z({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new C(new wa,d);let x=!1;const h=t.background;h?h.isColor&&(d.color.copy(h),t.background=null,x=!0):(d.color.copy(t0),x=!0);for(let m=0;m<6;m++){const _=m%3;_===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):_===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const v=this._cubeSize;rc(s,_*v,m>2?v:0,v,v),c.setRenderTarget(s),x&&c.render(g,a),c.render(t,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=p,t.background=h}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===hr||t.mapping===fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=o0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=s0());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new C(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;rc(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,au)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=e0[(s-o-1)%e0.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,u=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,p=new C(this._lodPlanes[s],u),f=u.uniforms,d=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*qs-1),x=o/g,h=isFinite(o)?1+Math.floor(c*x):qs;h>qs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${qs}`);const m=[];let _=0;for(let b=0;b<qs;++b){const T=b/x,w=Math.exp(-T*T/2);m.push(w),b===0?_+=w:b<h&&(_+=2*w)}for(let b=0;b<m.length;b++)m[b]=m[b]/_;f.envMap.value=t.texture,f.samples.value=h,f.weights.value=m,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const y=this._sizeLods[s],A=3*y*(s>v-ko?s-v+ko:0),E=4*(this._cubeSize-y);rc(e,A,E,3*y,2*y),l.setRenderTarget(e),l.render(p,au)}}function uy(i){const t=[],e=[],n=[];let s=i;const o=i-ko+1+Qd.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>i-ko?l=Qd[r-i+ko-1]:r===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,p=1+u,f=[c,c,p,c,p,p,c,c,p,p,c,p],d=6,g=6,x=3,h=2,m=1,_=new Float32Array(x*g*d),v=new Float32Array(h*g*d),y=new Float32Array(m*g*d);for(let E=0;E<d;E++){const b=E%3*2/3-1,T=E>2?0:-1,w=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];_.set(w,x*g*E),v.set(f,h*g*E);const S=[E,E,E,E,E,E];y.set(S,m*g*E)}const A=new Ae;A.setAttribute("position",new ze(_,x)),A.setAttribute("uv",new ze(v,h)),A.setAttribute("faceIndex",new ze(y,m)),t.push(A),s>ko&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function i0(i,t,e){const n=new Mi(i,t,e);return n.texture.mapping=_l,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rc(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function hy(i,t,e){const n=new Float32Array(qs),s=new F(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$f(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function s0(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$f(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function o0(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function $f(){return`

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
	`}function fy(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ju||l===Qu,c=l===hr||l===fr;if(u||c){let p=t.get(a);const f=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new n0(i)),p=u?e.fromEquirectangular(a,p):e.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),p.texture;if(p!==void 0)return p.texture;{const d=a.image;return u&&d&&d.height>0||c&&d&&s(d)?(e===null&&(e=new n0(i)),p=u?e.fromEquirectangular(a):e.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),a.addEventListener("dispose",o),p.texture):null}}}return a}function s(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function dy(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&zo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function py(i,t,e,n){const s={},o=new WeakMap;function r(p){const f=p.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete s[f.id];const d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(p,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function l(p){const f=p.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function u(p){const f=[],d=p.index,g=p.attributes.position;let x=0;if(d!==null){const _=d.array;x=d.version;for(let v=0,y=_.length;v<y;v+=3){const A=_[v+0],E=_[v+1],b=_[v+2];f.push(A,E,E,b,b,A)}}else if(g!==void 0){const _=g.array;x=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const A=v+0,E=v+1,b=v+2;f.push(A,E,E,b,b,A)}}else return;const h=new(Pp(f)?zp:Np)(f,1);h.version=x;const m=o.get(p);m&&t.remove(m),o.set(p,h)}function c(p){const f=o.get(p);if(f){const d=p.index;d!==null&&f.version<d.version&&u(p)}else u(p);return o.get(p)}return{get:a,update:l,getWireframeAttribute:c}}function my(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function l(f,d){i.drawElements(n,d,o,f*r),e.update(d,n,1)}function u(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,o,f*r,g),e.update(d,n,g))}function c(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,f,0,g);let h=0;for(let m=0;m<g;m++)h+=d[m];e.update(h,n,1)}function p(f,d,g,x){if(g===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<f.length;m++)u(f[m]/r,d[m],x[m]);else{h.multiDrawElementsInstancedWEBGL(n,d,0,o,f,0,x,0,g);let m=0;for(let _=0;_<g;_++)m+=d[_]*x[_];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=p}function gy(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function xy(i,t,e){const n=new WeakMap,s=new we;function o(r,a,l){const u=r.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=c!==void 0?c.length:0;let f=n.get(a);if(f===void 0||f.count!==p){let S=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,h=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),h===!0&&(y=3);let A=a.attributes.position.count*y,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const b=new Float32Array(A*E*4*p),T=new Lp(b,A,E,p);T.type=Li,T.needsUpdate=!0;const w=y*4;for(let R=0;R<p;R++){const L=m[R],D=_[R],z=v[R],H=A*E*4*R;for(let k=0;k<L.count;k++){const O=k*w;g===!0&&(s.fromBufferAttribute(L,k),b[H+O+0]=s.x,b[H+O+1]=s.y,b[H+O+2]=s.z,b[H+O+3]=0),x===!0&&(s.fromBufferAttribute(D,k),b[H+O+4]=s.x,b[H+O+5]=s.y,b[H+O+6]=s.z,b[H+O+7]=0),h===!0&&(s.fromBufferAttribute(z,k),b[H+O+8]=s.x,b[H+O+9]=s.y,b[H+O+10]=s.z,b[H+O+11]=z.itemSize===4?s.w:1)}}f={count:p,texture:T,size:new pt(A,E)},n.set(a,f),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let h=0;h<u.length;h++)g+=u[h];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function vy(i,t,e,n){let s=new WeakMap;function o(l){const u=n.render.frame,c=l.geometry,p=t.get(l,c);if(s.get(p)!==u&&(t.update(p),s.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return p}function r(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:r}}const nm=new dn,r0=new Wp(1,1),im=new Lp,sm=new vx,om=new Bp,a0=[],c0=[],l0=new Float32Array(16),u0=new Float32Array(9),h0=new Float32Array(4);function br(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=a0[s];if(o===void 0&&(o=new Float32Array(s),a0[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function $e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Sl(i,t){let e=c0[t];e===void 0&&(e=new Int32Array(t),c0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function My(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _y(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),$e(e,t)}}function yy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),$e(e,t)}}function wy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),$e(e,t)}}function Sy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;h0.set(n),i.uniformMatrix2fv(this.addr,!1,h0),$e(e,n)}}function by(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;u0.set(n),i.uniformMatrix3fv(this.addr,!1,u0),$e(e,n)}}function Ty(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;l0.set(n),i.uniformMatrix4fv(this.addr,!1,l0),$e(e,n)}}function Ey(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ay(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),$e(e,t)}}function Ry(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),$e(e,t)}}function Cy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),$e(e,t)}}function Py(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Iy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),$e(e,t)}}function Ly(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),$e(e,t)}}function Dy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),$e(e,t)}}function Uy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(r0.compareFunction=Cp,o=r0):o=nm,e.setTexture2D(t||o,s)}function Ny(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||sm,s)}function zy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||om,s)}function Fy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||im,s)}function Oy(i){switch(i){case 5126:return My;case 35664:return _y;case 35665:return yy;case 35666:return wy;case 35674:return Sy;case 35675:return by;case 35676:return Ty;case 5124:case 35670:return Ey;case 35667:case 35671:return Ay;case 35668:case 35672:return Ry;case 35669:case 35673:return Cy;case 5125:return Py;case 36294:return Iy;case 36295:return Ly;case 36296:return Dy;case 35678:case 36198:case 36298:case 36306:case 35682:return Uy;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return zy;case 36289:case 36303:case 36311:case 36292:return Fy}}function By(i,t){i.uniform1fv(this.addr,t)}function Gy(i,t){const e=br(t,this.size,2);i.uniform2fv(this.addr,e)}function ky(i,t){const e=br(t,this.size,3);i.uniform3fv(this.addr,e)}function Hy(i,t){const e=br(t,this.size,4);i.uniform4fv(this.addr,e)}function Vy(i,t){const e=br(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Wy(i,t){const e=br(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Xy(i,t){const e=br(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function qy(i,t){i.uniform1iv(this.addr,t)}function Yy(i,t){i.uniform2iv(this.addr,t)}function Zy(i,t){i.uniform3iv(this.addr,t)}function $y(i,t){i.uniform4iv(this.addr,t)}function jy(i,t){i.uniform1uiv(this.addr,t)}function Ky(i,t){i.uniform2uiv(this.addr,t)}function Jy(i,t){i.uniform3uiv(this.addr,t)}function Qy(i,t){i.uniform4uiv(this.addr,t)}function t1(i,t,e){const n=this.cache,s=t.length,o=Sl(e,s);Ze(n,o)||(i.uniform1iv(this.addr,o),$e(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||nm,o[r])}function e1(i,t,e){const n=this.cache,s=t.length,o=Sl(e,s);Ze(n,o)||(i.uniform1iv(this.addr,o),$e(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||sm,o[r])}function n1(i,t,e){const n=this.cache,s=t.length,o=Sl(e,s);Ze(n,o)||(i.uniform1iv(this.addr,o),$e(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||om,o[r])}function i1(i,t,e){const n=this.cache,s=t.length,o=Sl(e,s);Ze(n,o)||(i.uniform1iv(this.addr,o),$e(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||im,o[r])}function s1(i){switch(i){case 5126:return By;case 35664:return Gy;case 35665:return ky;case 35666:return Hy;case 35674:return Vy;case 35675:return Wy;case 35676:return Xy;case 5124:case 35670:return qy;case 35667:case 35671:return Yy;case 35668:case 35672:return Zy;case 35669:case 35673:return $y;case 5125:return jy;case 36294:return Ky;case 36295:return Jy;case 36296:return Qy;case 35678:case 36198:case 36298:case 36306:case 35682:return t1;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return n1;case 36289:case 36303:case 36311:case 36292:return i1}}class o1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Oy(e.type)}}class r1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=s1(e.type)}}class a1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const fu=/(\w+)(\])?(\[|\.)?/g;function f0(i,t){i.seq.push(t),i.map[t.id]=t}function c1(i,t,e){const n=i.name,s=n.length;for(fu.lastIndex=0;;){const o=fu.exec(n),r=fu.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&r+2===s){f0(e,u===void 0?new o1(a,i,t):new r1(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new a1(a),f0(e,p)),e=p}}}class Ec{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);c1(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function d0(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const l1=37297;let u1=0;function h1(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const p0=new Yt;function f1(i){le._getMatrix(p0,le.workingColorSpace,i);const t=`mat3( ${p0.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case Vc:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function m0(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+h1(i.getShaderSource(t),r)}else return s}function d1(i,t){const e=f1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function p1(i,t){let e;switch(t){case Xg:e="Linear";break;case qg:e="Reinhard";break;case Yg:e="Cineon";break;case xp:e="ACESFilmic";break;case $g:e="AgX";break;case jg:e="Neutral";break;case Zg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ac=new F;function m1(){le.getLuminanceCoefficients(ac);const i=ac.x.toFixed(4),t=ac.y.toFixed(4),e=ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function x1(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function v1(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function qr(i){return i!==""}function g0(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function x0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const M1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lh(i){return i.replace(M1,y1)}const _1=new Map;function y1(i,t){let e=$t[t];if(e===void 0){const n=_1.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Lh(e)}const w1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v0(i){return i.replace(w1,S1)}function S1(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function M0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function b1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pp?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===mp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vi&&(t="SHADOWMAP_TYPE_VSM"),t}function T1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hr:case fr:t="ENVMAP_TYPE_CUBE";break;case _l:t="ENVMAP_TYPE_CUBE_UV";break}return t}function E1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fr:t="ENVMAP_MODE_REFRACTION";break}return t}function A1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gp:t="ENVMAP_BLENDING_MULTIPLY";break;case Vg:t="ENVMAP_BLENDING_MIX";break;case Wg:t="ENVMAP_BLENDING_ADD";break}return t}function R1(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function C1(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=b1(e),u=T1(e),c=E1(e),p=A1(e),f=R1(e),d=g1(e),g=x1(o),x=s.createProgram();let h,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qr).join(`
`),h.length>0&&(h+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qr).join(`
`),m.length>0&&(m+=`
`)):(h=[M0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),m=[M0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bs?"#define TONE_MAPPING":"",e.toneMapping!==bs?$t.tonemapping_pars_fragment:"",e.toneMapping!==bs?p1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,d1("linearToOutputTexel",e.outputColorSpace),m1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qr).join(`
`)),r=Lh(r),r=g0(r,e),r=x0(r,e),a=Lh(a),a=g0(a,e),a=x0(a,e),r=v0(r),a=v0(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,m=["#define varying in",e.glslVersion===gd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=_+h+r,y=_+m+a,A=d0(s,s.VERTEX_SHADER,v),E=d0(s,s.FRAGMENT_SHADER,y);s.attachShader(x,A),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function b(R){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(x).trim(),D=s.getShaderInfoLog(A).trim(),z=s.getShaderInfoLog(E).trim();let H=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,E);else{const O=m0(s,A,"vertex"),G=m0(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+O+`
`+G)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||z==="")&&(k=!1);k&&(R.diagnostics={runnable:H,programLog:L,vertexShader:{log:D,prefix:h},fragmentShader:{log:z,prefix:m}})}s.deleteShader(A),s.deleteShader(E),T=new Ec(s,x),w=v1(s,x)}let T;this.getUniforms=function(){return T===void 0&&b(this),T};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,l1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=u1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}let P1=0;class I1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new L1(t),e.set(t,n)),n}}class L1{constructor(t){this.id=P1++,this.code=t,this.usedTimes=0}}function D1(i,t,e,n,s,o,r){const a=new Dp,l=new I1,u=new Set,c=[],p=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return u.add(w),w===0?"uv":`uv${w}`}function h(w,S,R,L,D){const z=L.fog,H=D.geometry,k=w.isMeshStandardMaterial?L.environment:null,O=(w.isMeshStandardMaterial?e:t).get(w.envMap||k),G=O&&O.mapping===_l?O.image.height:null,et=g[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const ct=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ft=ct!==void 0?ct.length:0;let Ct=0;H.morphAttributes.position!==void 0&&(Ct=1),H.morphAttributes.normal!==void 0&&(Ct=2),H.morphAttributes.color!==void 0&&(Ct=3);let Wt,tt,ut,yt;if(et){const ge=Ai[et];Wt=ge.vertexShader,tt=ge.fragmentShader}else Wt=w.vertexShader,tt=w.fragmentShader,l.update(w),ut=l.getVertexShaderID(w),yt=l.getFragmentShaderID(w);const mt=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),zt=D.isInstancedMesh===!0,Kt=D.isBatchedMesh===!0,De=!!w.map,se=!!w.matcap,ke=!!O,B=!!w.aoMap,ti=!!w.lightMap,ee=!!w.bumpMap,ne=!!w.normalMap,Nt=!!w.displacementMap,Re=!!w.emissiveMap,Ut=!!w.metalnessMap,U=!!w.roughnessMap,P=w.anisotropy>0,$=w.clearcoat>0,rt=w.dispersion>0,lt=w.iridescence>0,nt=w.sheen>0,Lt=w.transmission>0,_t=P&&!!w.anisotropyMap,Tt=$&&!!w.clearcoatMap,oe=$&&!!w.clearcoatNormalMap,dt=$&&!!w.clearcoatRoughnessMap,Et=lt&&!!w.iridescenceMap,Bt=lt&&!!w.iridescenceThicknessMap,Gt=nt&&!!w.sheenColorMap,At=nt&&!!w.sheenRoughnessMap,ie=!!w.specularMap,Zt=!!w.specularColorMap,be=!!w.specularIntensityMap,V=Lt&&!!w.transmissionMap,vt=Lt&&!!w.thicknessMap,Q=!!w.gradientMap,at=!!w.alphaMap,St=w.alphaTest>0,wt=!!w.alphaHash,qt=!!w.extensions;let Fe=bs;w.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Fe=i.toneMapping);const on={shaderID:et,shaderType:w.type,shaderName:w.name,vertexShader:Wt,fragmentShader:tt,defines:w.defines,customVertexShaderID:ut,customFragmentShaderID:yt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Kt,batchingColor:Kt&&D._colorsTexture!==null,instancing:zt,instancingColor:zt&&D.instanceColor!==null,instancingMorph:zt&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:gr,alphaToCoverage:!!w.alphaToCoverage,map:De,matcap:se,envMap:ke,envMapMode:ke&&O.mapping,envMapCubeUVHeight:G,aoMap:B,lightMap:ti,bumpMap:ee,normalMap:ne,displacementMap:f&&Nt,emissiveMap:Re,normalMapObjectSpace:ne&&w.normalMapType===tx,normalMapTangentSpace:ne&&w.normalMapType===Rp,metalnessMap:Ut,roughnessMap:U,anisotropy:P,anisotropyMap:_t,clearcoat:$,clearcoatMap:Tt,clearcoatNormalMap:oe,clearcoatRoughnessMap:dt,dispersion:rt,iridescence:lt,iridescenceMap:Et,iridescenceThicknessMap:Bt,sheen:nt,sheenColorMap:Gt,sheenRoughnessMap:At,specularMap:ie,specularColorMap:Zt,specularIntensityMap:be,transmission:Lt,transmissionMap:V,thicknessMap:vt,gradientMap:Q,opaque:w.transparent===!1&&w.blending===Zo&&w.alphaToCoverage===!1,alphaMap:at,alphaTest:St,alphaHash:wt,combine:w.combine,mapUv:De&&x(w.map.channel),aoMapUv:B&&x(w.aoMap.channel),lightMapUv:ti&&x(w.lightMap.channel),bumpMapUv:ee&&x(w.bumpMap.channel),normalMapUv:ne&&x(w.normalMap.channel),displacementMapUv:Nt&&x(w.displacementMap.channel),emissiveMapUv:Re&&x(w.emissiveMap.channel),metalnessMapUv:Ut&&x(w.metalnessMap.channel),roughnessMapUv:U&&x(w.roughnessMap.channel),anisotropyMapUv:_t&&x(w.anisotropyMap.channel),clearcoatMapUv:Tt&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:At&&x(w.sheenRoughnessMap.channel),specularMapUv:ie&&x(w.specularMap.channel),specularColorMapUv:Zt&&x(w.specularColorMap.channel),specularIntensityMapUv:be&&x(w.specularIntensityMap.channel),transmissionMapUv:V&&x(w.transmissionMap.channel),thicknessMapUv:vt&&x(w.thicknessMap.channel),alphaMapUv:at&&x(w.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ne||P),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(De||at),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:It,skinning:D.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Ct,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:De&&w.map.isVideoTexture===!0&&le.getTransfer(w.map.colorSpace)===Me,decodeVideoTextureEmissive:Re&&w.emissiveMap.isVideoTexture===!0&&le.getTransfer(w.emissiveMap.colorSpace)===Me,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Pt,flipSided:w.side===fn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:qt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&w.extensions.multiDraw===!0||Kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return on.vertexUv1s=u.has(1),on.vertexUv2s=u.has(2),on.vertexUv3s=u.has(3),u.clear(),on}function m(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)S.push(R),S.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(_(S,w),v(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function _(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function v(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){const S=g[w.type];let R;if(S){const L=Ai[S];R=Yc.clone(L.uniforms)}else R=w.uniforms;return R}function A(w,S){let R;for(let L=0,D=c.length;L<D;L++){const z=c[L];if(z.cacheKey===S){R=z,++R.usedTimes;break}}return R===void 0&&(R=new C1(i,S,w,o),c.push(R)),R}function E(w){if(--w.usedTimes===0){const S=c.indexOf(w);c[S]=c[c.length-1],c.pop(),w.destroy()}}function b(w){l.remove(w)}function T(){l.dispose()}return{getParameters:h,getProgramCacheKey:m,getUniforms:y,acquireProgram:A,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:T}}function U1(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function N1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function _0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function y0(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(p,f,d,g,x,h){let m=i[t];return m===void 0?(m={id:p.id,object:p,geometry:f,material:d,groupOrder:g,renderOrder:p.renderOrder,z:x,group:h},i[t]=m):(m.id=p.id,m.object=p,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=p.renderOrder,m.z=x,m.group=h),t++,m}function a(p,f,d,g,x,h){const m=r(p,f,d,g,x,h);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(p,f,d,g,x,h){const m=r(p,f,d,g,x,h);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function u(p,f){e.length>1&&e.sort(p||N1),n.length>1&&n.sort(f||_0),s.length>1&&s.sort(f||_0)}function c(){for(let p=t,f=i.length;p<f;p++){const d=i[p];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:c,sort:u}}function z1(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new y0,i.set(n,[r])):s>=o.length?(r=new y0,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function F1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new st};break;case"SpotLight":e={position:new F,direction:new F,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new st,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new st,groundColor:new st};break;case"RectAreaLight":e={color:new st,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function O1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let B1=0;function G1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function k1(i){const t=new F1,e=O1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new F);const s=new F,o=new me,r=new me;function a(u){let c=0,p=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,g=0,x=0,h=0,m=0,_=0,v=0,y=0,A=0,E=0,b=0;u.sort(G1);for(let w=0,S=u.length;w<S;w++){const R=u[w],L=R.color,D=R.intensity,z=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)c+=L.r*D,p+=L.g*D,f+=L.b*D;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],D);b++}else if(R.isDirectionalLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const O=R.shadow,G=e.get(R);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=R.shadow.matrix,_++}n.directional[d]=k,d++}else if(R.isSpotLight){const k=t.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(L).multiplyScalar(D),k.distance=z,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[x]=k;const O=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,O.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[x]=O.matrix,R.castShadow){const G=e.get(R);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=H,y++}x++}else if(R.isRectAreaLight){const k=t.get(R);k.color.copy(L).multiplyScalar(D),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[h]=k,h++}else if(R.isPointLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const O=R.shadow,G=e.get(R);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,G.shadowCameraNear=O.camera.near,G.shadowCameraFar=O.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=R.shadow.matrix,v++}n.point[g]=k,g++}else if(R.isHemisphereLight){const k=t.get(R);k.skyColor.copy(R.color).multiplyScalar(D),k.groundColor.copy(R.groundColor).multiplyScalar(D),n.hemi[m]=k,m++}}h>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=p,n.ambient[2]=f;const T=n.hash;(T.directionalLength!==d||T.pointLength!==g||T.spotLength!==x||T.rectAreaLength!==h||T.hemiLength!==m||T.numDirectionalShadows!==_||T.numPointShadows!==v||T.numSpotShadows!==y||T.numSpotMaps!==A||T.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=h,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=b,T.directionalLength=d,T.pointLength=g,T.spotLength=x,T.rectAreaLength=h,T.hemiLength=m,T.numDirectionalShadows=_,T.numPointShadows=v,T.numSpotShadows=y,T.numSpotMaps=A,T.numLightProbes=b,n.version=B1++)}function l(u,c){let p=0,f=0,d=0,g=0,x=0;const h=c.matrixWorldInverse;for(let m=0,_=u.length;m<_;m++){const v=u[m];if(v.isDirectionalLight){const y=n.directional[p];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(h),p++}else if(v.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(h),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(h),d++}else if(v.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(h),r.identity(),o.copy(v.matrixWorld),o.premultiply(h),r.extractRotation(o),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(h),f++}else if(v.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(h),x++}}}return{setup:a,setupView:l,state:n}}function w0(i){const t=new k1(i),e=[],n=[];function s(c){u.camera=c,e.length=0,n.length=0}function o(c){e.push(c)}function r(c){n.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function H1(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new w0(i),t.set(s,[a])):o>=r.length?(a=new w0(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const V1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W1=`uniform sampler2D shadow_pass;
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
}`;function X1(i,t,e){let n=new Bf;const s=new pt,o=new pt,r=new we,a=new gv({depthPacking:Qg}),l=new xv,u={},c=e.maxTextureSize,p={[Ts]:fn,[fn]:Ts,[Pt]:Pt},f=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:V1,fragmentShader:W1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new C(g,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pp;let m=this.type;this.render=function(E,b,T){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||E.length===0)return;const w=i.getRenderTarget(),S=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Ji),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=m!==Vi&&this.type===Vi,z=m===Vi&&this.type!==Vi;for(let H=0,k=E.length;H<k;H++){const O=E[H],G=O.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const et=G.getFrameExtents();if(s.multiply(et),o.copy(G.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(o.x=Math.floor(c/et.x),s.x=o.x*et.x,G.mapSize.x=o.x),s.y>c&&(o.y=Math.floor(c/et.y),s.y=o.y*et.y,G.mapSize.y=o.y)),G.map===null||D===!0||z===!0){const ft=this.type!==Vi?{minFilter:Kn,magFilter:Kn}:{};G.map!==null&&G.map.dispose(),G.map=new Mi(s.x,s.y,ft),G.map.texture.name=O.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ct=G.getViewportCount();for(let ft=0;ft<ct;ft++){const Ct=G.getViewport(ft);r.set(o.x*Ct.x,o.y*Ct.y,o.x*Ct.z,o.y*Ct.w),L.viewport(r),G.updateMatrices(O,ft),n=G.getFrustum(),y(b,T,G.camera,O,this.type)}G.isPointLightShadow!==!0&&this.type===Vi&&_(G,T),G.needsUpdate=!1}m=this.type,h.needsUpdate=!1,i.setRenderTarget(w,S,R)};function _(E,b){const T=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Mi(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,T,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,T,d,x,null)}function v(E,b,T,w){let S=null;const R=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)S=R;else if(S=T.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const L=S.uuid,D=b.uuid;let z=u[L];z===void 0&&(z={},u[L]=z);let H=z[D];H===void 0&&(H=S.clone(),z[D]=H,b.addEventListener("dispose",A)),S=H}if(S.visible=b.visible,S.wireframe=b.wireframe,w===Vi?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:p[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const L=i.properties.get(S);L.light=T}return S}function y(E,b,T,w,S){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Vi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const D=t.update(E),z=E.material;if(Array.isArray(z)){const H=D.groups;for(let k=0,O=H.length;k<O;k++){const G=H[k],et=z[G.materialIndex];if(et&&et.visible){const ct=v(E,et,w,S);E.onBeforeShadow(i,E,b,T,D,ct,G),i.renderBufferDirect(T,null,D,ct,E,G),E.onAfterShadow(i,E,b,T,D,ct,G)}}}else if(z.visible){const H=v(E,z,w,S);E.onBeforeShadow(i,E,b,T,D,H,null),i.renderBufferDirect(T,null,D,H,E,null),E.onAfterShadow(i,E,b,T,D,H,null)}}const L=E.children;for(let D=0,z=L.length;D<z;D++)y(L[D],b,T,w,S)}function A(E){E.target.removeEventListener("dispose",A);for(const T in u){const w=u[T],S=E.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const q1={[Xu]:qu,[Yu]:ju,[Zu]:Ku,[ur]:$u,[qu]:Xu,[ju]:Yu,[Ku]:Zu,[$u]:ur};function Y1(i,t){function e(){let V=!1;const vt=new we;let Q=null;const at=new we(0,0,0,0);return{setMask:function(St){Q!==St&&!V&&(i.colorMask(St,St,St,St),Q=St)},setLocked:function(St){V=St},setClear:function(St,wt,qt,Fe,on){on===!0&&(St*=Fe,wt*=Fe,qt*=Fe),vt.set(St,wt,qt,Fe),at.equals(vt)===!1&&(i.clearColor(St,wt,qt,Fe),at.copy(vt))},reset:function(){V=!1,Q=null,at.set(-1,0,0,0)}}}function n(){let V=!1,vt=!1,Q=null,at=null,St=null;return{setReversed:function(wt){if(vt!==wt){const qt=t.get("EXT_clip_control");vt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);const Fe=St;St=null,this.setClear(Fe)}vt=wt},getReversed:function(){return vt},setTest:function(wt){wt?mt(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(wt){Q!==wt&&!V&&(i.depthMask(wt),Q=wt)},setFunc:function(wt){if(vt&&(wt=q1[wt]),at!==wt){switch(wt){case Xu:i.depthFunc(i.NEVER);break;case qu:i.depthFunc(i.ALWAYS);break;case Yu:i.depthFunc(i.LESS);break;case ur:i.depthFunc(i.LEQUAL);break;case Zu:i.depthFunc(i.EQUAL);break;case $u:i.depthFunc(i.GEQUAL);break;case ju:i.depthFunc(i.GREATER);break;case Ku:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}at=wt}},setLocked:function(wt){V=wt},setClear:function(wt){St!==wt&&(vt&&(wt=1-wt),i.clearDepth(wt),St=wt)},reset:function(){V=!1,Q=null,at=null,St=null,vt=!1}}}function s(){let V=!1,vt=null,Q=null,at=null,St=null,wt=null,qt=null,Fe=null,on=null;return{setTest:function(ge){V||(ge?mt(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(ge){vt!==ge&&!V&&(i.stencilMask(ge),vt=ge)},setFunc:function(ge,ui,Fi){(Q!==ge||at!==ui||St!==Fi)&&(i.stencilFunc(ge,ui,Fi),Q=ge,at=ui,St=Fi)},setOp:function(ge,ui,Fi){(wt!==ge||qt!==ui||Fe!==Fi)&&(i.stencilOp(ge,ui,Fi),wt=ge,qt=ui,Fe=Fi)},setLocked:function(ge){V=ge},setClear:function(ge){on!==ge&&(i.clearStencil(ge),on=ge)},reset:function(){V=!1,vt=null,Q=null,at=null,St=null,wt=null,qt=null,Fe=null,on=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,u=new WeakMap;let c={},p={},f=new WeakMap,d=[],g=null,x=!1,h=null,m=null,_=null,v=null,y=null,A=null,E=null,b=new st(0,0,0),T=0,w=!1,S=null,R=null,L=null,D=null,z=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,O=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=O>=1):G.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=O>=2);let et=null,ct={};const ft=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),Wt=new we().fromArray(ft),tt=new we().fromArray(Ct);function ut(V,vt,Q,at){const St=new Uint8Array(4),wt=i.createTexture();i.bindTexture(V,wt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<Q;qt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,at,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(vt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return wt}const yt={};yt[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),mt(i.DEPTH_TEST),r.setFunc(ur),ee(!1),ne(fd),mt(i.CULL_FACE),B(Ji);function mt(V){c[V]!==!0&&(i.enable(V),c[V]=!0)}function It(V){c[V]!==!1&&(i.disable(V),c[V]=!1)}function zt(V,vt){return p[V]!==vt?(i.bindFramebuffer(V,vt),p[V]=vt,V===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=vt),V===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function Kt(V,vt){let Q=d,at=!1;if(V){Q=f.get(vt),Q===void 0&&(Q=[],f.set(vt,Q));const St=V.textures;if(Q.length!==St.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,qt=St.length;wt<qt;wt++)Q[wt]=i.COLOR_ATTACHMENT0+wt;Q.length=St.length,at=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,at=!0);at&&i.drawBuffers(Q)}function De(V){return g!==V?(i.useProgram(V),g=V,!0):!1}const se={[Xs]:i.FUNC_ADD,[Eg]:i.FUNC_SUBTRACT,[Ag]:i.FUNC_REVERSE_SUBTRACT};se[Rg]=i.MIN,se[Cg]=i.MAX;const ke={[Pg]:i.ZERO,[Ig]:i.ONE,[Lg]:i.SRC_COLOR,[Vu]:i.SRC_ALPHA,[Og]:i.SRC_ALPHA_SATURATE,[zg]:i.DST_COLOR,[Ug]:i.DST_ALPHA,[Dg]:i.ONE_MINUS_SRC_COLOR,[Wu]:i.ONE_MINUS_SRC_ALPHA,[Fg]:i.ONE_MINUS_DST_COLOR,[Ng]:i.ONE_MINUS_DST_ALPHA,[Bg]:i.CONSTANT_COLOR,[Gg]:i.ONE_MINUS_CONSTANT_COLOR,[kg]:i.CONSTANT_ALPHA,[Hg]:i.ONE_MINUS_CONSTANT_ALPHA};function B(V,vt,Q,at,St,wt,qt,Fe,on,ge){if(V===Ji){x===!0&&(It(i.BLEND),x=!1);return}if(x===!1&&(mt(i.BLEND),x=!0),V!==Tg){if(V!==h||ge!==w){if((m!==Xs||y!==Xs)&&(i.blendEquation(i.FUNC_ADD),m=Xs,y=Xs),ge)switch(V){case Zo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case te:i.blendFunc(i.ONE,i.ONE);break;case dd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Zo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case te:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}_=null,v=null,A=null,E=null,b.set(0,0,0),T=0,h=V,w=ge}return}St=St||vt,wt=wt||Q,qt=qt||at,(vt!==m||St!==y)&&(i.blendEquationSeparate(se[vt],se[St]),m=vt,y=St),(Q!==_||at!==v||wt!==A||qt!==E)&&(i.blendFuncSeparate(ke[Q],ke[at],ke[wt],ke[qt]),_=Q,v=at,A=wt,E=qt),(Fe.equals(b)===!1||on!==T)&&(i.blendColor(Fe.r,Fe.g,Fe.b,on),b.copy(Fe),T=on),h=V,w=!1}function ti(V,vt){V.side===Pt?It(i.CULL_FACE):mt(i.CULL_FACE);let Q=V.side===fn;vt&&(Q=!Q),ee(Q),V.blending===Zo&&V.transparent===!1?B(Ji):B(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),r.setFunc(V.depthFunc),r.setTest(V.depthTest),r.setMask(V.depthWrite),o.setMask(V.colorWrite);const at=V.stencilWrite;a.setTest(at),at&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Re(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(V){S!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),S=V)}function ne(V){V!==Sg?(mt(i.CULL_FACE),V!==R&&(V===fd?i.cullFace(i.BACK):V===bg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),R=V}function Nt(V){V!==L&&(k&&i.lineWidth(V),L=V)}function Re(V,vt,Q){V?(mt(i.POLYGON_OFFSET_FILL),(D!==vt||z!==Q)&&(i.polygonOffset(vt,Q),D=vt,z=Q)):It(i.POLYGON_OFFSET_FILL)}function Ut(V){V?mt(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function U(V){V===void 0&&(V=i.TEXTURE0+H-1),et!==V&&(i.activeTexture(V),et=V)}function P(V,vt,Q){Q===void 0&&(et===null?Q=i.TEXTURE0+H-1:Q=et);let at=ct[Q];at===void 0&&(at={type:void 0,texture:void 0},ct[Q]=at),(at.type!==V||at.texture!==vt)&&(et!==Q&&(i.activeTexture(Q),et=Q),i.bindTexture(V,vt||yt[V]),at.type=V,at.texture=vt)}function $(){const V=ct[et];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Bt(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(V){Wt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Wt.copy(V))}function At(V){tt.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),tt.copy(V))}function ie(V,vt){let Q=u.get(vt);Q===void 0&&(Q=new WeakMap,u.set(vt,Q));let at=Q.get(V);at===void 0&&(at=i.getUniformBlockIndex(vt,V.name),Q.set(V,at))}function Zt(V,vt){const at=u.get(vt).get(V);l.get(vt)!==at&&(i.uniformBlockBinding(vt,at,V.__bindingPointIndex),l.set(vt,at))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},et=null,ct={},p={},f=new WeakMap,d=[],g=null,x=!1,h=null,m=null,_=null,v=null,y=null,A=null,E=null,b=new st(0,0,0),T=0,w=!1,S=null,R=null,L=null,D=null,z=null,Wt.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:mt,disable:It,bindFramebuffer:zt,drawBuffers:Kt,useProgram:De,setBlending:B,setMaterial:ti,setFlipSided:ee,setCullFace:ne,setLineWidth:Nt,setPolygonOffset:Re,setScissorTest:Ut,activeTexture:U,bindTexture:P,unbindTexture:$,compressedTexImage2D:rt,compressedTexImage3D:lt,texImage2D:Et,texImage3D:Bt,updateUBOMapping:ie,uniformBlockBinding:Zt,texStorage2D:oe,texStorage3D:dt,texSubImage2D:nt,texSubImage3D:Lt,compressedTexSubImage2D:_t,compressedTexSubImage3D:Tt,scissor:Gt,viewport:At,reset:be}}function Z1(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new pt,c=new WeakMap;let p;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,P){return d?new OffscreenCanvas(U,P):qc("canvas")}function x(U,P,$){let rt=1;const lt=Ut(U);if((lt.width>$||lt.height>$)&&(rt=$/Math.max(lt.width,lt.height)),rt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const nt=Math.floor(rt*lt.width),Lt=Math.floor(rt*lt.height);p===void 0&&(p=g(nt,Lt));const _t=P?g(nt,Lt):p;return _t.width=nt,_t.height=Lt,_t.getContext("2d").drawImage(U,0,0,nt,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+nt+"x"+Lt+")."),_t}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),U;return U}function h(U){return U.generateMipmaps}function m(U){i.generateMipmap(U)}function _(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(U,P,$,rt,lt=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let nt=P;if(P===i.RED&&($===i.FLOAT&&(nt=i.R32F),$===i.HALF_FLOAT&&(nt=i.R16F),$===i.UNSIGNED_BYTE&&(nt=i.R8)),P===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(nt=i.R8UI),$===i.UNSIGNED_SHORT&&(nt=i.R16UI),$===i.UNSIGNED_INT&&(nt=i.R32UI),$===i.BYTE&&(nt=i.R8I),$===i.SHORT&&(nt=i.R16I),$===i.INT&&(nt=i.R32I)),P===i.RG&&($===i.FLOAT&&(nt=i.RG32F),$===i.HALF_FLOAT&&(nt=i.RG16F),$===i.UNSIGNED_BYTE&&(nt=i.RG8)),P===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(nt=i.RG8UI),$===i.UNSIGNED_SHORT&&(nt=i.RG16UI),$===i.UNSIGNED_INT&&(nt=i.RG32UI),$===i.BYTE&&(nt=i.RG8I),$===i.SHORT&&(nt=i.RG16I),$===i.INT&&(nt=i.RG32I)),P===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),$===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),$===i.UNSIGNED_INT&&(nt=i.RGB32UI),$===i.BYTE&&(nt=i.RGB8I),$===i.SHORT&&(nt=i.RGB16I),$===i.INT&&(nt=i.RGB32I)),P===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),$===i.UNSIGNED_INT&&(nt=i.RGBA32UI),$===i.BYTE&&(nt=i.RGBA8I),$===i.SHORT&&(nt=i.RGBA16I),$===i.INT&&(nt=i.RGBA32I)),P===i.RGB&&$===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),P===i.RGBA){const Lt=lt?Vc:le.getTransfer(rt);$===i.FLOAT&&(nt=i.RGBA32F),$===i.HALF_FLOAT&&(nt=i.RGBA16F),$===i.UNSIGNED_BYTE&&(nt=Lt===Me?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function y(U,P){let $;return U?P===null||P===no||P===pr?$=i.DEPTH24_STENCIL8:P===Li?$=i.DEPTH32F_STENCIL8:P===ua&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===no||P===pr?$=i.DEPTH_COMPONENT24:P===Li?$=i.DEPTH_COMPONENT32F:P===ua&&($=i.DEPTH_COMPONENT16),$}function A(U,P){return h(U)===!0||U.isFramebufferTexture&&U.minFilter!==Kn&&U.minFilter!==Ii?Math.log2(Math.max(P.width,P.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?P.mipmaps.length:1}function E(U){const P=U.target;P.removeEventListener("dispose",E),T(P),P.isVideoTexture&&c.delete(P)}function b(U){const P=U.target;P.removeEventListener("dispose",b),S(P)}function T(U){const P=n.get(U);if(P.__webglInit===void 0)return;const $=U.source,rt=f.get($);if(rt){const lt=rt[P.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&w(U),Object.keys(rt).length===0&&f.delete($)}n.remove(U)}function w(U){const P=n.get(U);i.deleteTexture(P.__webglTexture);const $=U.source,rt=f.get($);delete rt[P.__cacheKey],r.memory.textures--}function S(U){const P=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(P.__webglFramebuffer[rt]))for(let lt=0;lt<P.__webglFramebuffer[rt].length;lt++)i.deleteFramebuffer(P.__webglFramebuffer[rt][lt]);else i.deleteFramebuffer(P.__webglFramebuffer[rt]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[rt])}else{if(Array.isArray(P.__webglFramebuffer))for(let rt=0;rt<P.__webglFramebuffer.length;rt++)i.deleteFramebuffer(P.__webglFramebuffer[rt]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let rt=0;rt<P.__webglColorRenderbuffer.length;rt++)P.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[rt]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const $=U.textures;for(let rt=0,lt=$.length;rt<lt;rt++){const nt=n.get($[rt]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),r.memory.textures--),n.remove($[rt])}n.remove(U)}let R=0;function L(){R=0}function D(){const U=R;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),R+=1,U}function z(U){const P=[];return P.push(U.wrapS),P.push(U.wrapT),P.push(U.wrapR||0),P.push(U.magFilter),P.push(U.minFilter),P.push(U.anisotropy),P.push(U.internalFormat),P.push(U.format),P.push(U.type),P.push(U.generateMipmaps),P.push(U.premultiplyAlpha),P.push(U.flipY),P.push(U.unpackAlignment),P.push(U.colorSpace),P.join()}function H(U,P){const $=n.get(U);if(U.isVideoTexture&&Nt(U),U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){const rt=U.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt($,U,P);return}}e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+P)}function k(U,P){const $=n.get(U);if(U.version>0&&$.__version!==U.version){tt($,U,P);return}e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+P)}function O(U,P){const $=n.get(U);if(U.version>0&&$.__version!==U.version){tt($,U,P);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+P)}function G(U,P){const $=n.get(U);if(U.version>0&&$.__version!==U.version){ut($,U,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+P)}const et={[dr]:i.REPEAT,[Zs]:i.CLAMP_TO_EDGE,[th]:i.MIRRORED_REPEAT},ct={[Kn]:i.NEAREST,[Kg]:i.NEAREST_MIPMAP_NEAREST,[Pa]:i.NEAREST_MIPMAP_LINEAR,[Ii]:i.LINEAR,[Il]:i.LINEAR_MIPMAP_NEAREST,[$s]:i.LINEAR_MIPMAP_LINEAR},ft={[ex]:i.NEVER,[ax]:i.ALWAYS,[nx]:i.LESS,[Cp]:i.LEQUAL,[ix]:i.EQUAL,[rx]:i.GEQUAL,[sx]:i.GREATER,[ox]:i.NOTEQUAL};function Ct(U,P){if(P.type===Li&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===Ii||P.magFilter===Il||P.magFilter===Pa||P.magFilter===$s||P.minFilter===Ii||P.minFilter===Il||P.minFilter===Pa||P.minFilter===$s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,et[P.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,et[P.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,et[P.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,ct[P.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,ct[P.minFilter]),P.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,ft[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Kn||P.minFilter!==Pa&&P.minFilter!==$s||P.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function Wt(U,P){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,P.addEventListener("dispose",E));const rt=P.source;let lt=f.get(rt);lt===void 0&&(lt={},f.set(rt,lt));const nt=z(P);if(nt!==U.__cacheKey){lt[nt]===void 0&&(lt[nt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,$=!0),lt[nt].usedTimes++;const Lt=lt[U.__cacheKey];Lt!==void 0&&(lt[U.__cacheKey].usedTimes--,Lt.usedTimes===0&&w(P)),U.__cacheKey=nt,U.__webglTexture=lt[nt].texture}return $}function tt(U,P,$){let rt=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(rt=i.TEXTURE_3D);const lt=Wt(U,P),nt=P.source;e.bindTexture(rt,U.__webglTexture,i.TEXTURE0+$);const Lt=n.get(nt);if(nt.version!==Lt.__version||lt===!0){e.activeTexture(i.TEXTURE0+$);const _t=le.getPrimaries(le.workingColorSpace),Tt=P.colorSpace===xs?null:le.getPrimaries(P.colorSpace),oe=P.colorSpace===xs||_t===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let dt=x(P.image,!1,s.maxTextureSize);dt=Re(P,dt);const Et=o.convert(P.format,P.colorSpace),Bt=o.convert(P.type);let Gt=v(P.internalFormat,Et,Bt,P.colorSpace,P.isVideoTexture);Ct(rt,P);let At;const ie=P.mipmaps,Zt=P.isVideoTexture!==!0,be=Lt.__version===void 0||lt===!0,V=nt.dataReady,vt=A(P,dt);if(P.isDepthTexture)Gt=y(P.format===mr,P.type),be&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Gt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,dt.width,dt.height,0,Et,Bt,null));else if(P.isDataTexture)if(ie.length>0){Zt&&be&&e.texStorage2D(i.TEXTURE_2D,vt,Gt,ie[0].width,ie[0].height);for(let Q=0,at=ie.length;Q<at;Q++)At=ie[Q],Zt?V&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,At.width,At.height,Et,Bt,At.data):e.texImage2D(i.TEXTURE_2D,Q,Gt,At.width,At.height,0,Et,Bt,At.data);P.generateMipmaps=!1}else Zt?(be&&e.texStorage2D(i.TEXTURE_2D,vt,Gt,dt.width,dt.height),V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,Et,Bt,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,dt.width,dt.height,0,Et,Bt,dt.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Zt&&be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Gt,ie[0].width,ie[0].height,dt.depth);for(let Q=0,at=ie.length;Q<at;Q++)if(At=ie[Q],P.format!==vi)if(Et!==null)if(Zt){if(V)if(P.layerUpdates.size>0){const St=Jd(At.width,At.height,P.format,P.type);for(const wt of P.layerUpdates){const qt=At.data.subarray(wt*St/At.data.BYTES_PER_ELEMENT,(wt+1)*St/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,wt,At.width,At.height,1,Et,qt)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,At.width,At.height,dt.depth,Et,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Gt,At.width,At.height,dt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,At.width,At.height,dt.depth,Et,Bt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,Gt,At.width,At.height,dt.depth,0,Et,Bt,At.data)}else{Zt&&be&&e.texStorage2D(i.TEXTURE_2D,vt,Gt,ie[0].width,ie[0].height);for(let Q=0,at=ie.length;Q<at;Q++)At=ie[Q],P.format!==vi?Et!==null?Zt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,Gt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?V&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,At.width,At.height,Et,Bt,At.data):e.texImage2D(i.TEXTURE_2D,Q,Gt,At.width,At.height,0,Et,Bt,At.data)}else if(P.isDataArrayTexture)if(Zt){if(be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Gt,dt.width,dt.height,dt.depth),V)if(P.layerUpdates.size>0){const Q=Jd(dt.width,dt.height,P.format,P.type);for(const at of P.layerUpdates){const St=dt.data.subarray(at*Q/dt.data.BYTES_PER_ELEMENT,(at+1)*Q/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,dt.width,dt.height,1,Et,Bt,St)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Et,Bt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,dt.width,dt.height,dt.depth,0,Et,Bt,dt.data);else if(P.isData3DTexture)Zt?(be&&e.texStorage3D(i.TEXTURE_3D,vt,Gt,dt.width,dt.height,dt.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Et,Bt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,dt.width,dt.height,dt.depth,0,Et,Bt,dt.data);else if(P.isFramebufferTexture){if(be)if(Zt)e.texStorage2D(i.TEXTURE_2D,vt,Gt,dt.width,dt.height);else{let Q=dt.width,at=dt.height;for(let St=0;St<vt;St++)e.texImage2D(i.TEXTURE_2D,St,Gt,Q,at,0,Et,Bt,null),Q>>=1,at>>=1}}else if(ie.length>0){if(Zt&&be){const Q=Ut(ie[0]);e.texStorage2D(i.TEXTURE_2D,vt,Gt,Q.width,Q.height)}for(let Q=0,at=ie.length;Q<at;Q++)At=ie[Q],Zt?V&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Et,Bt,At):e.texImage2D(i.TEXTURE_2D,Q,Gt,Et,Bt,At);P.generateMipmaps=!1}else if(Zt){if(be){const Q=Ut(dt);e.texStorage2D(i.TEXTURE_2D,vt,Gt,Q.width,Q.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Bt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Gt,Et,Bt,dt);h(P)&&m(rt),Lt.__version=nt.version,P.onUpdate&&P.onUpdate(P)}U.__version=P.version}function ut(U,P,$){if(P.image.length!==6)return;const rt=Wt(U,P),lt=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+$);const nt=n.get(lt);if(lt.version!==nt.__version||rt===!0){e.activeTexture(i.TEXTURE0+$);const Lt=le.getPrimaries(le.workingColorSpace),_t=P.colorSpace===xs?null:le.getPrimaries(P.colorSpace),Tt=P.colorSpace===xs||Lt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const oe=P.isCompressedTexture||P.image[0].isCompressedTexture,dt=P.image[0]&&P.image[0].isDataTexture,Et=[];for(let at=0;at<6;at++)!oe&&!dt?Et[at]=x(P.image[at],!0,s.maxCubemapSize):Et[at]=dt?P.image[at].image:P.image[at],Et[at]=Re(P,Et[at]);const Bt=Et[0],Gt=o.convert(P.format,P.colorSpace),At=o.convert(P.type),ie=v(P.internalFormat,Gt,At,P.colorSpace),Zt=P.isVideoTexture!==!0,be=nt.__version===void 0||rt===!0,V=lt.dataReady;let vt=A(P,Bt);Ct(i.TEXTURE_CUBE_MAP,P);let Q;if(oe){Zt&&be&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,ie,Bt.width,Bt.height);for(let at=0;at<6;at++){Q=Et[at].mipmaps;for(let St=0;St<Q.length;St++){const wt=Q[St];P.format!==vi?Gt!==null?Zt?V&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,0,0,wt.width,wt.height,Gt,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,ie,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,0,0,wt.width,wt.height,Gt,At,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,ie,wt.width,wt.height,0,Gt,At,wt.data)}}}else{if(Q=P.mipmaps,Zt&&be){Q.length>0&&vt++;const at=Ut(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,ie,at.width,at.height)}for(let at=0;at<6;at++)if(dt){Zt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Et[at].width,Et[at].height,Gt,At,Et[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ie,Et[at].width,Et[at].height,0,Gt,At,Et[at].data);for(let St=0;St<Q.length;St++){const qt=Q[St].image[at].image;Zt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,0,0,qt.width,qt.height,Gt,At,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,ie,qt.width,qt.height,0,Gt,At,qt.data)}}else{Zt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Gt,At,Et[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ie,Gt,At,Et[at]);for(let St=0;St<Q.length;St++){const wt=Q[St];Zt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,0,0,Gt,At,wt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,ie,Gt,At,wt.image[at])}}}h(P)&&m(i.TEXTURE_CUBE_MAP),nt.__version=lt.version,P.onUpdate&&P.onUpdate(P)}U.__version=P.version}function yt(U,P,$,rt,lt,nt){const Lt=o.convert($.format,$.colorSpace),_t=o.convert($.type),Tt=v($.internalFormat,Lt,_t,$.colorSpace),oe=n.get(P),dt=n.get($);if(dt.__renderTarget=P,!oe.__hasExternalTextures){const Et=Math.max(1,P.width>>nt),Bt=Math.max(1,P.height>>nt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,nt,Tt,Et,Bt,P.depth,0,Lt,_t,null):e.texImage2D(lt,nt,Tt,Et,Bt,0,Lt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),ne(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,lt,dt.__webglTexture,0,ee(P)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,lt,dt.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(U,P,$){if(i.bindRenderbuffer(i.RENDERBUFFER,U),P.depthBuffer){const rt=P.depthTexture,lt=rt&&rt.isDepthTexture?rt.type:null,nt=y(P.stencilBuffer,lt),Lt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=ee(P);ne(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,nt,P.width,P.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,nt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,nt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,U)}else{const rt=P.textures;for(let lt=0;lt<rt.length;lt++){const nt=rt[lt],Lt=o.convert(nt.format,nt.colorSpace),_t=o.convert(nt.type),Tt=v(nt.internalFormat,Lt,_t,nt.colorSpace),oe=ee(P);$&&ne(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Tt,P.width,P.height):ne(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,Tt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(U,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=n.get(P.depthTexture);rt.__renderTarget=P,(!rt.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),H(P.depthTexture,0);const lt=rt.__webglTexture,nt=ee(P);if(P.depthTexture.format===$o)ne(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0);else if(P.depthTexture.format===mr)ne(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function zt(U){const P=n.get(U),$=U.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==U.depthTexture){const rt=U.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),rt){const lt=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,rt.removeEventListener("dispose",lt)};rt.addEventListener("dispose",lt),P.__depthDisposeCallback=lt}P.__boundDepthTexture=rt}if(U.depthTexture&&!P.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");It(P.__webglFramebuffer,U)}else if($){P.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[rt]),P.__webglDepthbuffer[rt]===void 0)P.__webglDepthbuffer[rt]=i.createRenderbuffer(),mt(P.__webglDepthbuffer[rt],U,!1);else{const lt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=P.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),mt(P.__webglDepthbuffer,U,!1);else{const rt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(U,P,$){const rt=n.get(U);P!==void 0&&yt(rt.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&zt(U)}function De(U){const P=U.texture,$=n.get(U),rt=n.get(P);U.addEventListener("dispose",b);const lt=U.textures,nt=U.isWebGLCubeRenderTarget===!0,Lt=lt.length>1;if(Lt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=P.version,r.memory.textures++),nt){$.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(P.mipmaps&&P.mipmaps.length>0){$.__webglFramebuffer[_t]=[];for(let Tt=0;Tt<P.mipmaps.length;Tt++)$.__webglFramebuffer[_t][Tt]=i.createFramebuffer()}else $.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){$.__webglFramebuffer=[];for(let _t=0;_t<P.mipmaps.length;_t++)$.__webglFramebuffer[_t]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let _t=0,Tt=lt.length;_t<Tt;_t++){const oe=n.get(lt[_t]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),r.memory.textures++)}if(U.samples>0&&ne(U)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let _t=0;_t<lt.length;_t++){const Tt=lt[_t];$.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[_t]);const oe=o.convert(Tt.format,Tt.colorSpace),dt=o.convert(Tt.type),Et=v(Tt.internalFormat,oe,dt,Tt.colorSpace,U.isXRRenderTarget===!0),Bt=ee(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Et,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,$.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),mt($.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),Ct(i.TEXTURE_CUBE_MAP,P);for(let _t=0;_t<6;_t++)if(P.mipmaps&&P.mipmaps.length>0)for(let Tt=0;Tt<P.mipmaps.length;Tt++)yt($.__webglFramebuffer[_t][Tt],U,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt);else yt($.__webglFramebuffer[_t],U,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);h(P)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let _t=0,Tt=lt.length;_t<Tt;_t++){const oe=lt[_t],dt=n.get(oe);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),Ct(i.TEXTURE_2D,oe),yt($.__webglFramebuffer,U,oe,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),h(oe)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(_t=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,rt.__webglTexture),Ct(_t,P),P.mipmaps&&P.mipmaps.length>0)for(let Tt=0;Tt<P.mipmaps.length;Tt++)yt($.__webglFramebuffer[Tt],U,P,i.COLOR_ATTACHMENT0,_t,Tt);else yt($.__webglFramebuffer,U,P,i.COLOR_ATTACHMENT0,_t,0);h(P)&&m(_t),e.unbindTexture()}U.depthBuffer&&zt(U)}function se(U){const P=U.textures;for(let $=0,rt=P.length;$<rt;$++){const lt=P[$];if(h(lt)){const nt=_(U),Lt=n.get(lt).__webglTexture;e.bindTexture(nt,Lt),m(nt),e.unbindTexture()}}}const ke=[],B=[];function ti(U){if(U.samples>0){if(ne(U)===!1){const P=U.textures,$=U.width,rt=U.height;let lt=i.COLOR_BUFFER_BIT;const nt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(U),_t=P.length>1;if(_t)for(let Tt=0;Tt<P.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Tt=0;Tt<P.length;Tt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);const oe=n.get(P[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,$,rt,0,0,$,rt,lt,i.NEAREST),l===!0&&(ke.length=0,B.length=0,ke.push(i.COLOR_ATTACHMENT0+Tt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ke.push(nt),B.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ke))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Tt=0;Tt<P.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);const oe=n.get(P[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const P=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function ee(U){return Math.min(s.maxSamples,U.samples)}function ne(U){const P=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Nt(U){const P=r.render.frame;c.get(U)!==P&&(c.set(U,P),U.update())}function Re(U,P){const $=U.colorSpace,rt=U.format,lt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==gr&&$!==xs&&(le.getTransfer($)===Me?(rt!==vi||lt!==ss)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),P}function Ut(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(u.width=U.naturalWidth||U.width,u.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(u.width=U.displayWidth,u.height=U.displayHeight):(u.width=U.width,u.height=U.height),u}this.allocateTextureUnit=D,this.resetTextureUnits=L,this.setTexture2D=H,this.setTexture2DArray=k,this.setTexture3D=O,this.setTextureCube=G,this.rebindTextures=Kt,this.setupRenderTarget=De,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=ti,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=ne}function $1(i,t){function e(n,s=xs){let o;const r=le.getTransfer(s);if(n===ss)return i.UNSIGNED_BYTE;if(n===If)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Lf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mp)return i.BYTE;if(n===_p)return i.SHORT;if(n===ua)return i.UNSIGNED_SHORT;if(n===Pf)return i.INT;if(n===no)return i.UNSIGNED_INT;if(n===Li)return i.FLOAT;if(n===Qi)return i.HALF_FLOAT;if(n===wp)return i.ALPHA;if(n===Sp)return i.RGB;if(n===vi)return i.RGBA;if(n===bp)return i.LUMINANCE;if(n===Tp)return i.LUMINANCE_ALPHA;if(n===$o)return i.DEPTH_COMPONENT;if(n===mr)return i.DEPTH_STENCIL;if(n===Df)return i.RED;if(n===Uf)return i.RED_INTEGER;if(n===Ep)return i.RG;if(n===Nf)return i.RG_INTEGER;if(n===zf)return i.RGBA_INTEGER;if(n===yc||n===wc||n===Sc||n===bc)if(r===Me)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===yc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===yc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eh||n===nh||n===ih||n===sh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===eh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ih)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oh||n===rh||n===ah)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===oh||n===rh)return r===Me?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===ah)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ch||n===lh||n===uh||n===hh||n===fh||n===dh||n===ph||n===mh||n===gh||n===xh||n===vh||n===Mh||n===_h||n===yh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ch)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lh)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uh)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hh)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fh)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dh)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ph)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mh)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gh)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xh)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vh)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mh)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_h)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yh)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tc||n===wh||n===Sh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Tc)return r===Me?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ap||n===bh||n===Th||n===Eh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Tc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===bh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Th)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Eh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const j1={type:"move"};class du{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){r=!0;for(const x of t.hand.values()){const h=e.getJointPose(x,n),m=this._getHandJoint(u,x);h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=h.radius),m.visible=h!==null}const c=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=c.position.distanceTo(p.position),d=.02,g=.005;u.inputState.pinching&&f>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(j1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const K1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J1=`
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

}`;class Q1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new dn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Fn({vertexShader:K1,fragmentShader:J1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new C(new ue(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tw extends wr{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,u=null,c=null,p=null,f=null,d=null,g=null;const x=new Q1,h=e.getContextAttributes();let m=null,_=null;const v=[],y=[],A=new pt;let E=null;const b=new Wn;b.viewport=new we;const T=new Wn;T.viewport=new we;const w=[b,T],S=new yv;let R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ut=v[tt];return ut===void 0&&(ut=new du,v[tt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(tt){let ut=v[tt];return ut===void 0&&(ut=new du,v[tt]=ut),ut.getGripSpace()},this.getHand=function(tt){let ut=v[tt];return ut===void 0&&(ut=new du,v[tt]=ut),ut.getHandSpace()};function D(tt){const ut=y.indexOf(tt.inputSource);if(ut===-1)return;const yt=v[ut];yt!==void 0&&(yt.update(tt.inputSource,tt.frame,u||r),yt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function z(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",H);for(let tt=0;tt<v.length;tt++){const ut=y[tt];ut!==null&&(y[tt]=null,v[tt].disconnect(ut))}R=null,L=null,x.reset(),t.setRenderTarget(m),d=null,f=null,p=null,s=null,_=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){o=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||r},this.setReferenceSpace=function(tt){u=tt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",z),s.addEventListener("inputsourceschange",H),h.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let yt=null,mt=null,It=null;h.depth&&(It=h.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=h.stencil?mr:$o,mt=h.stencil?pr:no);const zt={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:o};p=new XRWebGLBinding(s,e),f=p.createProjectionLayer(zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Mi(f.textureWidth,f.textureHeight,{format:vi,type:ss,depthTexture:new Wp(f.textureWidth,f.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:h.stencil,colorSpace:t.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const yt={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Mi(d.framebufferWidth,d.framebufferHeight,{format:vi,type:ss,colorSpace:t.outputColorSpace,stencilBuffer:h.stencil})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,r=await s.requestReferenceSpace(a),Wt.setContext(s),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(tt){for(let ut=0;ut<tt.removed.length;ut++){const yt=tt.removed[ut],mt=y.indexOf(yt);mt>=0&&(y[mt]=null,v[mt].disconnect(yt))}for(let ut=0;ut<tt.added.length;ut++){const yt=tt.added[ut];let mt=y.indexOf(yt);if(mt===-1){for(let zt=0;zt<v.length;zt++)if(zt>=y.length){y.push(yt),mt=zt;break}else if(y[zt]===null){y[zt]=yt,mt=zt;break}if(mt===-1)break}const It=v[mt];It&&It.connect(yt)}}const k=new F,O=new F;function G(tt,ut,yt){k.setFromMatrixPosition(ut.matrixWorld),O.setFromMatrixPosition(yt.matrixWorld);const mt=k.distanceTo(O),It=ut.projectionMatrix.elements,zt=yt.projectionMatrix.elements,Kt=It[14]/(It[10]-1),De=It[14]/(It[10]+1),se=(It[9]+1)/It[5],ke=(It[9]-1)/It[5],B=(It[8]-1)/It[0],ti=(zt[8]+1)/zt[0],ee=Kt*B,ne=Kt*ti,Nt=mt/(-B+ti),Re=Nt*-B;if(ut.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Re),tt.translateZ(Nt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),It[10]===-1)tt.projectionMatrix.copy(ut.projectionMatrix),tt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Ut=Kt+Nt,U=De+Nt,P=ee-Re,$=ne+(mt-Re),rt=se*De/U*Ut,lt=ke*De/U*Ut;tt.projectionMatrix.makePerspective(P,$,rt,lt,Ut,U),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function et(tt,ut){ut===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ut.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let ut=tt.near,yt=tt.far;x.texture!==null&&(x.depthNear>0&&(ut=x.depthNear),x.depthFar>0&&(yt=x.depthFar)),S.near=T.near=b.near=ut,S.far=T.far=b.far=yt,(R!==S.near||L!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,L=S.far),b.layers.mask=tt.layers.mask|2,T.layers.mask=tt.layers.mask|4,S.layers.mask=b.layers.mask|T.layers.mask;const mt=tt.parent,It=S.cameras;et(S,mt);for(let zt=0;zt<It.length;zt++)et(It[zt],mt);It.length===2?G(S,b,T):S.projectionMatrix.copy(b.projectionMatrix),ct(tt,S,mt)};function ct(tt,ut,yt){yt===null?tt.matrix.copy(ut.matrixWorld):(tt.matrix.copy(yt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ut.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ut.projectionMatrix),tt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Ah*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(tt){l=tt,f!==null&&(f.fixedFoveation=tt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=tt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ft=null;function Ct(tt,ut){if(c=ut.getViewerPose(u||r),g=ut,c!==null){const yt=c.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let mt=!1;yt.length!==S.cameras.length&&(S.cameras.length=0,mt=!0);for(let zt=0;zt<yt.length;zt++){const Kt=yt[zt];let De=null;if(d!==null)De=d.getViewport(Kt);else{const ke=p.getViewSubImage(f,Kt);De=ke.viewport,zt===0&&(t.setRenderTargetTextures(_,ke.colorTexture,f.ignoreDepthValues?void 0:ke.depthStencilTexture),t.setRenderTarget(_))}let se=w[zt];se===void 0&&(se=new Wn,se.layers.enable(zt),se.viewport=new we,w[zt]=se),se.matrix.fromArray(Kt.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Kt.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(De.x,De.y,De.width,De.height),zt===0&&(S.matrix.copy(se.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),mt===!0&&S.cameras.push(se)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){const zt=p.getDepthInformation(yt[0]);zt&&zt.isValid&&zt.texture&&x.init(t,zt,s.renderState)}}for(let yt=0;yt<v.length;yt++){const mt=y[yt],It=v[yt];mt!==null&&It!==void 0&&It.update(mt,ut,u||r)}ft&&ft(tt,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),g=null}const Wt=new em;Wt.setAnimationLoop(Ct),this.setAnimationLoop=function(tt){ft=tt},this.dispose=function(){}}}const Us=new Ui,ew=new me;function nw(i,t){function e(h,m){h.matrixAutoUpdate===!0&&h.updateMatrix(),m.value.copy(h.matrix)}function n(h,m){m.color.getRGB(h.fogColor.value,Fp(i)),m.isFog?(h.fogNear.value=m.near,h.fogFar.value=m.far):m.isFogExp2&&(h.fogDensity.value=m.density)}function s(h,m,_,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(h,m):m.isMeshToonMaterial?(o(h,m),p(h,m)):m.isMeshPhongMaterial?(o(h,m),c(h,m)):m.isMeshStandardMaterial?(o(h,m),f(h,m),m.isMeshPhysicalMaterial&&d(h,m,y)):m.isMeshMatcapMaterial?(o(h,m),g(h,m)):m.isMeshDepthMaterial?o(h,m):m.isMeshDistanceMaterial?(o(h,m),x(h,m)):m.isMeshNormalMaterial?o(h,m):m.isLineBasicMaterial?(r(h,m),m.isLineDashedMaterial&&a(h,m)):m.isPointsMaterial?l(h,m,_,v):m.isSpriteMaterial?u(h,m):m.isShadowMaterial?(h.color.value.copy(m.color),h.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(h,m){h.opacity.value=m.opacity,m.color&&h.diffuse.value.copy(m.color),m.emissive&&h.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(h.map.value=m.map,e(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,e(m.alphaMap,h.alphaMapTransform)),m.bumpMap&&(h.bumpMap.value=m.bumpMap,e(m.bumpMap,h.bumpMapTransform),h.bumpScale.value=m.bumpScale,m.side===fn&&(h.bumpScale.value*=-1)),m.normalMap&&(h.normalMap.value=m.normalMap,e(m.normalMap,h.normalMapTransform),h.normalScale.value.copy(m.normalScale),m.side===fn&&h.normalScale.value.negate()),m.displacementMap&&(h.displacementMap.value=m.displacementMap,e(m.displacementMap,h.displacementMapTransform),h.displacementScale.value=m.displacementScale,h.displacementBias.value=m.displacementBias),m.emissiveMap&&(h.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,h.emissiveMapTransform)),m.specularMap&&(h.specularMap.value=m.specularMap,e(m.specularMap,h.specularMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);const _=t.get(m),v=_.envMap,y=_.envMapRotation;v&&(h.envMap.value=v,Us.copy(y),Us.x*=-1,Us.y*=-1,Us.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),h.envMapRotation.value.setFromMatrix4(ew.makeRotationFromEuler(Us)),h.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=m.reflectivity,h.ior.value=m.ior,h.refractionRatio.value=m.refractionRatio),m.lightMap&&(h.lightMap.value=m.lightMap,h.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,h.lightMapTransform)),m.aoMap&&(h.aoMap.value=m.aoMap,h.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,h.aoMapTransform))}function r(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,m.map&&(h.map.value=m.map,e(m.map,h.mapTransform))}function a(h,m){h.dashSize.value=m.dashSize,h.totalSize.value=m.dashSize+m.gapSize,h.scale.value=m.scale}function l(h,m,_,v){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.size.value=m.size*_,h.scale.value=v*.5,m.map&&(h.map.value=m.map,e(m.map,h.uvTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,e(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function u(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.rotation.value=m.rotation,m.map&&(h.map.value=m.map,e(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,e(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function c(h,m){h.specular.value.copy(m.specular),h.shininess.value=Math.max(m.shininess,1e-4)}function p(h,m){m.gradientMap&&(h.gradientMap.value=m.gradientMap)}function f(h,m){h.metalness.value=m.metalness,m.metalnessMap&&(h.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,h.metalnessMapTransform)),h.roughness.value=m.roughness,m.roughnessMap&&(h.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,h.roughnessMapTransform)),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)}function d(h,m,_){h.ior.value=m.ior,m.sheen>0&&(h.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),h.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(h.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,h.sheenColorMapTransform)),m.sheenRoughnessMap&&(h.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,h.sheenRoughnessMapTransform))),m.clearcoat>0&&(h.clearcoat.value=m.clearcoat,h.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(h.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,h.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(h.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===fn&&h.clearcoatNormalScale.value.negate())),m.dispersion>0&&(h.dispersion.value=m.dispersion),m.iridescence>0&&(h.iridescence.value=m.iridescence,h.iridescenceIOR.value=m.iridescenceIOR,h.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(h.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,h.iridescenceMapTransform)),m.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),m.transmission>0&&(h.transmission.value=m.transmission,h.transmissionSamplerMap.value=_.texture,h.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(h.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,h.transmissionMapTransform)),h.thickness.value=m.thickness,m.thicknessMap&&(h.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=m.attenuationDistance,h.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(h.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(h.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=m.specularIntensity,h.specularColor.value.copy(m.specularColor),m.specularColorMap&&(h.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,h.specularColorMapTransform)),m.specularIntensityMap&&(h.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,m){m.matcap&&(h.matcap.value=m.matcap)}function x(h,m){const _=t.get(m).light;h.referencePosition.value.setFromMatrixPosition(_.matrixWorld),h.nearDistance.value=_.shadow.camera.near,h.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function iw(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const y=v.program;n.uniformBlockBinding(_,y)}function u(_,v){let y=s[_.id];y===void 0&&(g(_),y=c(_),s[_.id]=y,_.addEventListener("dispose",h));const A=v.program;n.updateUBOMapping(_,A);const E=t.render.frame;o[_.id]!==E&&(f(_),o[_.id]=E)}function c(_){const v=p();_.__bindingPointIndex=v;const y=i.createBuffer(),A=_.__size,E=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function p(){for(let _=0;_<a;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const v=s[_.id],y=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,b=y.length;E<b;E++){const T=Array.isArray(y[E])?y[E]:[y[E]];for(let w=0,S=T.length;w<S;w++){const R=T[w];if(d(R,E,w,A)===!0){const L=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let H=0;H<D.length;H++){const k=D[H],O=x(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,L+z,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,z),z+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,v,y,A){const E=_.value,b=v+"_"+y;if(A[b]===void 0)return typeof E=="number"||typeof E=="boolean"?A[b]=E:A[b]=E.clone(),!0;{const T=A[b];if(typeof E=="number"||typeof E=="boolean"){if(T!==E)return A[b]=E,!0}else if(T.equals(E)===!1)return T.copy(E),!0}return!1}function g(_){const v=_.uniforms;let y=0;const A=16;for(let b=0,T=v.length;b<T;b++){const w=Array.isArray(v[b])?v[b]:[v[b]];for(let S=0,R=w.length;S<R;S++){const L=w[S],D=Array.isArray(L.value)?L.value:[L.value];for(let z=0,H=D.length;z<H;z++){const k=D[z],O=x(k),G=y%A,et=G%O.boundary,ct=G+et;y+=et,ct!==0&&A-ct<O.storage&&(y+=A-ct),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=O.storage}}}const E=y%A;return E>0&&(y+=A-E),_.__size=y,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function h(_){const v=_.target;v.removeEventListener("dispose",h);const y=r.indexOf(v.__bindingPointIndex);r.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete o[v.id]}function m(){for(const _ in s)i.deleteBuffer(s[_]);r=[],s={},o={}}return{bind:l,update:u,dispose:m}}class sw{constructor(t={}){const{canvas:e=lx(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const g=new Uint32Array(4),x=new Int32Array(4);let h=null,m=null;const _=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ln,this.toneMapping=bs,this.toneMappingExposure=1;const y=this;let A=!1,E=0,b=0,T=null,w=-1,S=null;const R=new we,L=new we;let D=null;const z=new st(0);let H=0,k=e.width,O=e.height,G=1,et=null,ct=null;const ft=new we(0,0,k,O),Ct=new we(0,0,k,O);let Wt=!1;const tt=new Bf;let ut=!1,yt=!1;this.transmissionResolutionScale=1;const mt=new me,It=new me,zt=new F,Kt=new we,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function ke(){return T===null?G:1}let B=n;function ti(I,W){return e.getContext(I,W)}try{const I={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Cf}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",wt,!1),B===null){const W="webgl2";if(B=ti(W,I),B===null)throw ti(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ee,ne,Nt,Re,Ut,U,P,$,rt,lt,nt,Lt,_t,Tt,oe,dt,Et,Bt,Gt,At,ie,Zt,be,V;function vt(){ee=new dy(B),ee.init(),Zt=new $1(B,ee),ne=new ay(B,ee,t,Zt),Nt=new Y1(B,ee),ne.reverseDepthBuffer&&f&&Nt.buffers.depth.setReversed(!0),Re=new gy(B),Ut=new U1,U=new Z1(B,ee,Nt,Ut,ne,Zt,Re),P=new ly(y),$=new fy(y),rt=new Sv(B),be=new oy(B,rt),lt=new py(B,rt,Re,be),nt=new vy(B,lt,rt,Re),Gt=new xy(B,ne,U),dt=new cy(Ut),Lt=new D1(y,P,$,ee,ne,be,dt),_t=new nw(y,Ut),Tt=new z1,oe=new H1(ee),Bt=new sy(y,P,$,Nt,nt,d,l),Et=new X1(y,nt,ne),V=new iw(B,Re,ne,Nt),At=new ry(B,ee,Re),ie=new my(B,ee,Re),Re.programs=Lt.programs,y.capabilities=ne,y.extensions=ee,y.properties=Ut,y.renderLists=Tt,y.shadowMap=Et,y.state=Nt,y.info=Re}vt();const Q=new tw(y,B);this.xr=Q,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const I=ee.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=ee.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(I){I!==void 0&&(G=I,this.setSize(k,O,!1))},this.getSize=function(I){return I.set(k,O)},this.setSize=function(I,W,K=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=I,O=W,e.width=Math.floor(I*G),e.height=Math.floor(W*G),K===!0&&(e.style.width=I+"px",e.style.height=W+"px"),this.setViewport(0,0,I,W)},this.getDrawingBufferSize=function(I){return I.set(k*G,O*G).floor()},this.setDrawingBufferSize=function(I,W,K){k=I,O=W,G=K,e.width=Math.floor(I*K),e.height=Math.floor(W*K),this.setViewport(0,0,I,W)},this.getCurrentViewport=function(I){return I.copy(R)},this.getViewport=function(I){return I.copy(ft)},this.setViewport=function(I,W,K,J){I.isVector4?ft.set(I.x,I.y,I.z,I.w):ft.set(I,W,K,J),Nt.viewport(R.copy(ft).multiplyScalar(G).round())},this.getScissor=function(I){return I.copy(Ct)},this.setScissor=function(I,W,K,J){I.isVector4?Ct.set(I.x,I.y,I.z,I.w):Ct.set(I,W,K,J),Nt.scissor(L.copy(Ct).multiplyScalar(G).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(I){Nt.setScissorTest(Wt=I)},this.setOpaqueSort=function(I){et=I},this.setTransparentSort=function(I){ct=I},this.getClearColor=function(I){return I.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(I=!0,W=!0,K=!0){let J=0;if(I){let X=!1;if(T!==null){const ht=T.texture.format;X=ht===zf||ht===Nf||ht===Uf}if(X){const ht=T.texture.type,Mt=ht===ss||ht===no||ht===ua||ht===pr||ht===If||ht===Lf,bt=Bt.getClearColor(),Rt=Bt.getClearAlpha(),kt=bt.r,Ht=bt.g,Ft=bt.b;Mt?(g[0]=kt,g[1]=Ht,g[2]=Ft,g[3]=Rt,B.clearBufferuiv(B.COLOR,0,g)):(x[0]=kt,x[1]=Ht,x[2]=Ft,x[3]=Rt,B.clearBufferiv(B.COLOR,0,x))}else J|=B.COLOR_BUFFER_BIT}W&&(J|=B.DEPTH_BUFFER_BIT),K&&(J|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Bt.dispose(),Tt.dispose(),oe.dispose(),Ut.dispose(),P.dispose(),$.dispose(),nt.dispose(),be.dispose(),V.dispose(),Lt.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",od),Q.removeEventListener("sessionend",rd),As.stop()};function at(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const I=Re.autoReset,W=Et.enabled,K=Et.autoUpdate,J=Et.needsUpdate,X=Et.type;vt(),Re.autoReset=I,Et.enabled=W,Et.autoUpdate=K,Et.needsUpdate=J,Et.type=X}function wt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function qt(I){const W=I.target;W.removeEventListener("dispose",qt),Fe(W)}function Fe(I){on(I),Ut.remove(I)}function on(I){const W=Ut.get(I).programs;W!==void 0&&(W.forEach(function(K){Lt.releaseProgram(K)}),I.isShaderMaterial&&Lt.releaseShaderCache(I))}this.renderBufferDirect=function(I,W,K,J,X,ht){W===null&&(W=De);const Mt=X.isMesh&&X.matrixWorld.determinant()<0,bt=xg(I,W,K,J,X);Nt.setMaterial(J,Mt);let Rt=K.index,kt=1;if(J.wireframe===!0){if(Rt=lt.getWireframeAttribute(K),Rt===void 0)return;kt=2}const Ht=K.drawRange,Ft=K.attributes.position;let re=Ht.start*kt,fe=(Ht.start+Ht.count)*kt;ht!==null&&(re=Math.max(re,ht.start*kt),fe=Math.min(fe,(ht.start+ht.count)*kt)),Rt!==null?(re=Math.max(re,0),fe=Math.min(fe,Rt.count)):Ft!=null&&(re=Math.max(re,0),fe=Math.min(fe,Ft.count));const Xe=fe-re;if(Xe<0||Xe===1/0)return;be.setup(X,J,bt,K,Rt);let Oe,ce=At;if(Rt!==null&&(Oe=rt.get(Rt),ce=ie,ce.setIndex(Oe)),X.isMesh)J.wireframe===!0?(Nt.setLineWidth(J.wireframeLinewidth*ke()),ce.setMode(B.LINES)):ce.setMode(B.TRIANGLES);else if(X.isLine){let Ot=J.linewidth;Ot===void 0&&(Ot=1),Nt.setLineWidth(Ot*ke()),X.isLineSegments?ce.setMode(B.LINES):X.isLineLoop?ce.setMode(B.LINE_LOOP):ce.setMode(B.LINE_STRIP)}else X.isPoints?ce.setMode(B.POINTS):X.isSprite&&ce.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ce.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))ce.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ot=X._multiDrawStarts,tn=X._multiDrawCounts,de=X._multiDrawCount,hi=Rt?rt.get(Rt).bytesPerElement:1,lo=Ut.get(J).currentProgram.getUniforms();for(let Gn=0;Gn<de;Gn++)lo.setValue(B,"_gl_DrawID",Gn),ce.render(Ot[Gn]/hi,tn[Gn])}else if(X.isInstancedMesh)ce.renderInstances(re,Xe,X.count);else if(K.isInstancedBufferGeometry){const Ot=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,tn=Math.min(K.instanceCount,Ot);ce.renderInstances(re,Xe,tn)}else ce.render(re,Xe)};function ge(I,W,K){I.transparent===!0&&I.side===Pt&&I.forceSinglePass===!1?(I.side=fn,I.needsUpdate=!0,Ca(I,W,K),I.side=Ts,I.needsUpdate=!0,Ca(I,W,K),I.side=Pt):Ca(I,W,K)}this.compile=function(I,W,K=null){K===null&&(K=I),m=oe.get(K),m.init(W),v.push(m),K.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),I!==K&&I.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights();const J=new Set;return I.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ht=X.material;if(ht)if(Array.isArray(ht))for(let Mt=0;Mt<ht.length;Mt++){const bt=ht[Mt];ge(bt,K,X),J.add(bt)}else ge(ht,K,X),J.add(ht)}),v.pop(),m=null,J},this.compileAsync=function(I,W,K=null){const J=this.compile(I,W,K);return new Promise(X=>{function ht(){if(J.forEach(function(Mt){Ut.get(Mt).currentProgram.isReady()&&J.delete(Mt)}),J.size===0){X(I);return}setTimeout(ht,10)}ee.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let ui=null;function Fi(I){ui&&ui(I)}function od(){As.stop()}function rd(){As.start()}const As=new em;As.setAnimationLoop(Fi),typeof self<"u"&&As.setContext(self),this.setAnimationLoop=function(I){ui=I,Q.setAnimationLoop(I),I===null?As.stop():As.start()},Q.addEventListener("sessionstart",od),Q.addEventListener("sessionend",rd),this.render=function(I,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(W),W=Q.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,W,T),m=oe.get(I,v.length),m.init(W),v.push(m),It.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),tt.setFromProjectionMatrix(It),yt=this.localClippingEnabled,ut=dt.init(this.clippingPlanes,yt),h=Tt.get(I,_.length),h.init(),_.push(h),Q.enabled===!0&&Q.isPresenting===!0){const ht=y.xr.getDepthSensingMesh();ht!==null&&Cl(ht,W,-1/0,y.sortObjects)}Cl(I,W,0,y.sortObjects),h.finish(),y.sortObjects===!0&&h.sort(et,ct),se=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,se&&Bt.addToRenderList(h,I),this.info.render.frame++,ut===!0&&dt.beginShadows();const K=m.state.shadowsArray;Et.render(K,I,W),ut===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=h.opaque,X=h.transmissive;if(m.setupLights(),W.isArrayCamera){const ht=W.cameras;if(X.length>0)for(let Mt=0,bt=ht.length;Mt<bt;Mt++){const Rt=ht[Mt];cd(J,X,I,Rt)}se&&Bt.render(I);for(let Mt=0,bt=ht.length;Mt<bt;Mt++){const Rt=ht[Mt];ad(h,I,Rt,Rt.viewport)}}else X.length>0&&cd(J,X,I,W),se&&Bt.render(I),ad(h,I,W);T!==null&&b===0&&(U.updateMultisampleRenderTarget(T),U.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(y,I,W),be.resetDefaultState(),w=-1,S=null,v.pop(),v.length>0?(m=v[v.length-1],ut===!0&&dt.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?h=_[_.length-1]:h=null};function Cl(I,W,K,J){if(I.visible===!1)return;if(I.layers.test(W.layers)){if(I.isGroup)K=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(W);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||tt.intersectsSprite(I)){J&&Kt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(It);const Mt=nt.update(I),bt=I.material;bt.visible&&h.push(I,Mt,bt,K,Kt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||tt.intersectsObject(I))){const Mt=nt.update(I),bt=I.material;if(J&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Kt.copy(I.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Kt.copy(Mt.boundingSphere.center)),Kt.applyMatrix4(I.matrixWorld).applyMatrix4(It)),Array.isArray(bt)){const Rt=Mt.groups;for(let kt=0,Ht=Rt.length;kt<Ht;kt++){const Ft=Rt[kt],re=bt[Ft.materialIndex];re&&re.visible&&h.push(I,Mt,re,K,Kt.z,Ft)}}else bt.visible&&h.push(I,Mt,bt,K,Kt.z,null)}}const ht=I.children;for(let Mt=0,bt=ht.length;Mt<bt;Mt++)Cl(ht[Mt],W,K,J)}function ad(I,W,K,J){const X=I.opaque,ht=I.transmissive,Mt=I.transparent;m.setupLightsView(K),ut===!0&&dt.setGlobalState(y.clippingPlanes,K),J&&Nt.viewport(R.copy(J)),X.length>0&&Ra(X,W,K),ht.length>0&&Ra(ht,W,K),Mt.length>0&&Ra(Mt,W,K),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function cd(I,W,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new Mi(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Qi:ss,minFilter:$s,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const ht=m.state.transmissionRenderTarget[J.id],Mt=J.viewport||R;ht.setSize(Mt.z*y.transmissionResolutionScale,Mt.w*y.transmissionResolutionScale);const bt=y.getRenderTarget();y.setRenderTarget(ht),y.getClearColor(z),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear(),se&&Bt.render(K);const Rt=y.toneMapping;y.toneMapping=bs;const kt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),ut===!0&&dt.setGlobalState(y.clippingPlanes,J),Ra(I,K,J),U.updateMultisampleRenderTarget(ht),U.updateRenderTargetMipmap(ht),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Ft=0,re=W.length;Ft<re;Ft++){const fe=W[Ft],Xe=fe.object,Oe=fe.geometry,ce=fe.material,Ot=fe.group;if(ce.side===Pt&&Xe.layers.test(J.layers)){const tn=ce.side;ce.side=fn,ce.needsUpdate=!0,ld(Xe,K,J,Oe,ce,Ot),ce.side=tn,ce.needsUpdate=!0,Ht=!0}}Ht===!0&&(U.updateMultisampleRenderTarget(ht),U.updateRenderTargetMipmap(ht))}y.setRenderTarget(bt),y.setClearColor(z,H),kt!==void 0&&(J.viewport=kt),y.toneMapping=Rt}function Ra(I,W,K){const J=W.isScene===!0?W.overrideMaterial:null;for(let X=0,ht=I.length;X<ht;X++){const Mt=I[X],bt=Mt.object,Rt=Mt.geometry,kt=J===null?Mt.material:J,Ht=Mt.group;bt.layers.test(K.layers)&&ld(bt,W,K,Rt,kt,Ht)}}function ld(I,W,K,J,X,ht){I.onBeforeRender(y,W,K,J,X,ht),I.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),X.onBeforeRender(y,W,K,J,I,ht),X.transparent===!0&&X.side===Pt&&X.forceSinglePass===!1?(X.side=fn,X.needsUpdate=!0,y.renderBufferDirect(K,W,J,X,I,ht),X.side=Ts,X.needsUpdate=!0,y.renderBufferDirect(K,W,J,X,I,ht),X.side=Pt):y.renderBufferDirect(K,W,J,X,I,ht),I.onAfterRender(y,W,K,J,X,ht)}function Ca(I,W,K){W.isScene!==!0&&(W=De);const J=Ut.get(I),X=m.state.lights,ht=m.state.shadowsArray,Mt=X.state.version,bt=Lt.getParameters(I,X.state,ht,W,K),Rt=Lt.getProgramCacheKey(bt);let kt=J.programs;J.environment=I.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(I.isMeshStandardMaterial?$:P).get(I.envMap||J.environment),J.envMapRotation=J.environment!==null&&I.envMap===null?W.environmentRotation:I.envMapRotation,kt===void 0&&(I.addEventListener("dispose",qt),kt=new Map,J.programs=kt);let Ht=kt.get(Rt);if(Ht!==void 0){if(J.currentProgram===Ht&&J.lightsStateVersion===Mt)return hd(I,bt),Ht}else bt.uniforms=Lt.getUniforms(I),I.onBeforeCompile(bt,y),Ht=Lt.acquireProgram(bt,Rt),kt.set(Rt,Ht),J.uniforms=bt.uniforms;const Ft=J.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ft.clippingPlanes=dt.uniform),hd(I,bt),J.needsLights=Mg(I),J.lightsStateVersion=Mt,J.needsLights&&(Ft.ambientLightColor.value=X.state.ambient,Ft.lightProbe.value=X.state.probe,Ft.directionalLights.value=X.state.directional,Ft.directionalLightShadows.value=X.state.directionalShadow,Ft.spotLights.value=X.state.spot,Ft.spotLightShadows.value=X.state.spotShadow,Ft.rectAreaLights.value=X.state.rectArea,Ft.ltc_1.value=X.state.rectAreaLTC1,Ft.ltc_2.value=X.state.rectAreaLTC2,Ft.pointLights.value=X.state.point,Ft.pointLightShadows.value=X.state.pointShadow,Ft.hemisphereLights.value=X.state.hemi,Ft.directionalShadowMap.value=X.state.directionalShadowMap,Ft.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ft.spotShadowMap.value=X.state.spotShadowMap,Ft.spotLightMatrix.value=X.state.spotLightMatrix,Ft.spotLightMap.value=X.state.spotLightMap,Ft.pointShadowMap.value=X.state.pointShadowMap,Ft.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=Ht,J.uniformsList=null,Ht}function ud(I){if(I.uniformsList===null){const W=I.currentProgram.getUniforms();I.uniformsList=Ec.seqWithValue(W.seq,I.uniforms)}return I.uniformsList}function hd(I,W){const K=Ut.get(I);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function xg(I,W,K,J,X){W.isScene!==!0&&(W=De),U.resetTextureUnits();const ht=W.fog,Mt=J.isMeshStandardMaterial?W.environment:null,bt=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:gr,Rt=(J.isMeshStandardMaterial?$:P).get(J.envMap||Mt),kt=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ht=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ft=!!K.morphAttributes.position,re=!!K.morphAttributes.normal,fe=!!K.morphAttributes.color;let Xe=bs;J.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Xe=y.toneMapping);const Oe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ce=Oe!==void 0?Oe.length:0,Ot=Ut.get(J),tn=m.state.lights;if(ut===!0&&(yt===!0||I!==S)){const mn=I===S&&J.id===w;dt.setState(J,I,mn)}let de=!1;J.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==tn.state.version||Ot.outputColorSpace!==bt||X.isBatchedMesh&&Ot.batching===!1||!X.isBatchedMesh&&Ot.batching===!0||X.isBatchedMesh&&Ot.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ot.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ot.instancing===!1||!X.isInstancedMesh&&Ot.instancing===!0||X.isSkinnedMesh&&Ot.skinning===!1||!X.isSkinnedMesh&&Ot.skinning===!0||X.isInstancedMesh&&Ot.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ot.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ot.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ot.instancingMorph===!1&&X.morphTexture!==null||Ot.envMap!==Rt||J.fog===!0&&Ot.fog!==ht||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==dt.numPlanes||Ot.numIntersection!==dt.numIntersection)||Ot.vertexAlphas!==kt||Ot.vertexTangents!==Ht||Ot.morphTargets!==Ft||Ot.morphNormals!==re||Ot.morphColors!==fe||Ot.toneMapping!==Xe||Ot.morphTargetsCount!==ce)&&(de=!0):(de=!0,Ot.__version=J.version);let hi=Ot.currentProgram;de===!0&&(hi=Ca(J,W,X));let lo=!1,Gn=!1,Ar=!1;const Ie=hi.getUniforms(),ei=Ot.uniforms;if(Nt.useProgram(hi.program)&&(lo=!0,Gn=!0,Ar=!0),J.id!==w&&(w=J.id,Gn=!0),lo||S!==I){Nt.buffers.depth.getReversed()?(mt.copy(I.projectionMatrix),hx(mt),fx(mt),Ie.setValue(B,"projectionMatrix",mt)):Ie.setValue(B,"projectionMatrix",I.projectionMatrix),Ie.setValue(B,"viewMatrix",I.matrixWorldInverse);const Un=Ie.map.cameraPosition;Un!==void 0&&Un.setValue(B,zt.setFromMatrixPosition(I.matrixWorld)),ne.logarithmicDepthBuffer&&Ie.setValue(B,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ie.setValue(B,"isOrthographic",I.isOrthographicCamera===!0),S!==I&&(S=I,Gn=!0,Ar=!0)}if(X.isSkinnedMesh){Ie.setOptional(B,X,"bindMatrix"),Ie.setOptional(B,X,"bindMatrixInverse");const mn=X.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ie.setValue(B,"boneTexture",mn.boneTexture,U))}X.isBatchedMesh&&(Ie.setOptional(B,X,"batchingTexture"),Ie.setValue(B,"batchingTexture",X._matricesTexture,U),Ie.setOptional(B,X,"batchingIdTexture"),Ie.setValue(B,"batchingIdTexture",X._indirectTexture,U),Ie.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&Ie.setValue(B,"batchingColorTexture",X._colorsTexture,U));const ni=K.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&Gt.update(X,K,hi),(Gn||Ot.receiveShadow!==X.receiveShadow)&&(Ot.receiveShadow=X.receiveShadow,Ie.setValue(B,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ei.envMap.value=Rt,ei.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(ei.envMapIntensity.value=W.environmentIntensity),Gn&&(Ie.setValue(B,"toneMappingExposure",y.toneMappingExposure),Ot.needsLights&&vg(ei,Ar),ht&&J.fog===!0&&_t.refreshFogUniforms(ei,ht),_t.refreshMaterialUniforms(ei,J,G,O,m.state.transmissionRenderTarget[I.id]),Ec.upload(B,ud(Ot),ei,U)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ec.upload(B,ud(Ot),ei,U),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ie.setValue(B,"center",X.center),Ie.setValue(B,"modelViewMatrix",X.modelViewMatrix),Ie.setValue(B,"normalMatrix",X.normalMatrix),Ie.setValue(B,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const mn=J.uniformsGroups;for(let Un=0,Pl=mn.length;Un<Pl;Un++){const Rs=mn[Un];V.update(Rs,hi),V.bind(Rs,hi)}}return hi}function vg(I,W){I.ambientLightColor.needsUpdate=W,I.lightProbe.needsUpdate=W,I.directionalLights.needsUpdate=W,I.directionalLightShadows.needsUpdate=W,I.pointLights.needsUpdate=W,I.pointLightShadows.needsUpdate=W,I.spotLights.needsUpdate=W,I.spotLightShadows.needsUpdate=W,I.rectAreaLights.needsUpdate=W,I.hemisphereLights.needsUpdate=W}function Mg(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,W,K){Ut.get(I.texture).__webglTexture=W,Ut.get(I.depthTexture).__webglTexture=K;const J=Ut.get(I);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,W){const K=Ut.get(I);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0};const _g=B.createFramebuffer();this.setRenderTarget=function(I,W=0,K=0){T=I,E=W,b=K;let J=!0,X=null,ht=!1,Mt=!1;if(I){const Rt=Ut.get(I);if(Rt.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(B.FRAMEBUFFER,null),J=!1;else if(Rt.__webglFramebuffer===void 0)U.setupRenderTarget(I);else if(Rt.__hasExternalTextures)U.rebindTextures(I,Ut.get(I.texture).__webglTexture,Ut.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Ft=I.depthTexture;if(Rt.__boundDepthTexture!==Ft){if(Ft!==null&&Ut.has(Ft)&&(I.width!==Ft.image.width||I.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(I)}}const kt=I.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Mt=!0);const Ht=Ut.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ht[W])?X=Ht[W][K]:X=Ht[W],ht=!0):I.samples>0&&U.useMultisampledRTT(I)===!1?X=Ut.get(I).__webglMultisampledFramebuffer:Array.isArray(Ht)?X=Ht[K]:X=Ht,R.copy(I.viewport),L.copy(I.scissor),D=I.scissorTest}else R.copy(ft).multiplyScalar(G).floor(),L.copy(Ct).multiplyScalar(G).floor(),D=Wt;if(K!==0&&(X=_g),Nt.bindFramebuffer(B.FRAMEBUFFER,X)&&J&&Nt.drawBuffers(I,X),Nt.viewport(R),Nt.scissor(L),Nt.setScissorTest(D),ht){const Rt=Ut.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Rt.__webglTexture,K)}else if(Mt){const Rt=Ut.get(I.texture),kt=W;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.__webglTexture,K,kt)}else if(I!==null&&K!==0){const Rt=Ut.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Rt.__webglTexture,K)}w=-1},this.readRenderTargetPixels=function(I,W,K,J,X,ht,Mt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Ut.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){Nt.bindFramebuffer(B.FRAMEBUFFER,bt);try{const Rt=I.texture,kt=Rt.format,Ht=Rt.type;if(!ne.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=I.width-J&&K>=0&&K<=I.height-X&&B.readPixels(W,K,J,X,Zt.convert(kt),Zt.convert(Ht),ht)}finally{const Rt=T!==null?Ut.get(T).__webglFramebuffer:null;Nt.bindFramebuffer(B.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(I,W,K,J,X,ht,Mt){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Ut.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){const Rt=I.texture,kt=Rt.format,Ht=Rt.type;if(!ne.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=I.width-J&&K>=0&&K<=I.height-X){Nt.bindFramebuffer(B.FRAMEBUFFER,bt);const Ft=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ft),B.bufferData(B.PIXEL_PACK_BUFFER,ht.byteLength,B.STREAM_READ),B.readPixels(W,K,J,X,Zt.convert(kt),Zt.convert(Ht),0);const re=T!==null?Ut.get(T).__webglFramebuffer:null;Nt.bindFramebuffer(B.FRAMEBUFFER,re);const fe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await ux(B,fe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ft),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ht),B.deleteBuffer(Ft),B.deleteSync(fe),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,W=null,K=0){I.isTexture!==!0&&(zo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,I=arguments[1]);const J=Math.pow(2,-K),X=Math.floor(I.image.width*J),ht=Math.floor(I.image.height*J),Mt=W!==null?W.x:0,bt=W!==null?W.y:0;U.setTexture2D(I,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,Mt,bt,X,ht),Nt.unbindTexture()};const yg=B.createFramebuffer(),wg=B.createFramebuffer();this.copyTextureToTexture=function(I,W,K=null,J=null,X=0,ht=null){I.isTexture!==!0&&(zo("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,I=arguments[1],W=arguments[2],ht=arguments[3]||0,K=null),ht===null&&(X!==0?(zo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=X,X=0):ht=0);let Mt,bt,Rt,kt,Ht,Ft,re,fe,Xe;const Oe=I.isCompressedTexture?I.mipmaps[ht]:I.image;if(K!==null)Mt=K.max.x-K.min.x,bt=K.max.y-K.min.y,Rt=K.isBox3?K.max.z-K.min.z:1,kt=K.min.x,Ht=K.min.y,Ft=K.isBox3?K.min.z:0;else{const ni=Math.pow(2,-X);Mt=Math.floor(Oe.width*ni),bt=Math.floor(Oe.height*ni),I.isDataArrayTexture?Rt=Oe.depth:I.isData3DTexture?Rt=Math.floor(Oe.depth*ni):Rt=1,kt=0,Ht=0,Ft=0}J!==null?(re=J.x,fe=J.y,Xe=J.z):(re=0,fe=0,Xe=0);const ce=Zt.convert(W.format),Ot=Zt.convert(W.type);let tn;W.isData3DTexture?(U.setTexture3D(W,0),tn=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(U.setTexture2DArray(W,0),tn=B.TEXTURE_2D_ARRAY):(U.setTexture2D(W,0),tn=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const de=B.getParameter(B.UNPACK_ROW_LENGTH),hi=B.getParameter(B.UNPACK_IMAGE_HEIGHT),lo=B.getParameter(B.UNPACK_SKIP_PIXELS),Gn=B.getParameter(B.UNPACK_SKIP_ROWS),Ar=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Oe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Oe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,kt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ht),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ft);const Ie=I.isDataArrayTexture||I.isData3DTexture,ei=W.isDataArrayTexture||W.isData3DTexture;if(I.isDepthTexture){const ni=Ut.get(I),mn=Ut.get(W),Un=Ut.get(ni.__renderTarget),Pl=Ut.get(mn.__renderTarget);Nt.bindFramebuffer(B.READ_FRAMEBUFFER,Un.__webglFramebuffer),Nt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Pl.__webglFramebuffer);for(let Rs=0;Rs<Rt;Rs++)Ie&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ut.get(I).__webglTexture,X,Ft+Rs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ut.get(W).__webglTexture,ht,Xe+Rs)),B.blitFramebuffer(kt,Ht,Mt,bt,re,fe,Mt,bt,B.DEPTH_BUFFER_BIT,B.NEAREST);Nt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||I.isRenderTargetTexture||Ut.has(I)){const ni=Ut.get(I),mn=Ut.get(W);Nt.bindFramebuffer(B.READ_FRAMEBUFFER,yg),Nt.bindFramebuffer(B.DRAW_FRAMEBUFFER,wg);for(let Un=0;Un<Rt;Un++)Ie?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ni.__webglTexture,X,Ft+Un):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ni.__webglTexture,X),ei?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,mn.__webglTexture,ht,Xe+Un):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,mn.__webglTexture,ht),X!==0?B.blitFramebuffer(kt,Ht,Mt,bt,re,fe,Mt,bt,B.COLOR_BUFFER_BIT,B.NEAREST):ei?B.copyTexSubImage3D(tn,ht,re,fe,Xe+Un,kt,Ht,Mt,bt):B.copyTexSubImage2D(tn,ht,re,fe,kt,Ht,Mt,bt);Nt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ei?I.isDataTexture||I.isData3DTexture?B.texSubImage3D(tn,ht,re,fe,Xe,Mt,bt,Rt,ce,Ot,Oe.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(tn,ht,re,fe,Xe,Mt,bt,Rt,ce,Oe.data):B.texSubImage3D(tn,ht,re,fe,Xe,Mt,bt,Rt,ce,Ot,Oe):I.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ht,re,fe,Mt,bt,ce,Ot,Oe.data):I.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ht,re,fe,Oe.width,Oe.height,ce,Oe.data):B.texSubImage2D(B.TEXTURE_2D,ht,re,fe,Mt,bt,ce,Ot,Oe);B.pixelStorei(B.UNPACK_ROW_LENGTH,de),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,hi),B.pixelStorei(B.UNPACK_SKIP_PIXELS,lo),B.pixelStorei(B.UNPACK_SKIP_ROWS,Gn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ar),ht===0&&W.generateMipmaps&&B.generateMipmap(tn),Nt.unbindTexture()},this.copyTextureToTexture3D=function(I,W,K=null,J=null,X=0){return I.isTexture!==!0&&(zo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,J=arguments[1]||null,I=arguments[2],W=arguments[3],X=arguments[4]||0),zo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,W,K,J,X)},this.initRenderTarget=function(I){Ut.get(I).__webglFramebuffer===void 0&&U.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?U.setTextureCube(I,0):I.isData3DTexture?U.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?U.setTexture2DArray(I,0):U.setTexture2D(I,0),Nt.unbindTexture()},this.resetState=function(){E=0,b=0,T=null,Nt.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}const ow=15,rw=6,aw=1.8,Qc=8,S0=.85,b0=.98,tl=.003,jt=90,bl=1.7,T0=500,cw=250,lw=18,uw=35,hw=40,fw=12,dw=35,pw=1200,mw=160,gw=140,xw=40,vw=60,Mw=12,jf=250,rm=6,_w=25,yw=8,ww=40,Sw=50,bw=10,Tw=30,Ew=30,Aw=24,Rw=45,Cw=24,Pw=36,Iw=36,Lw=45,Dw=25,ns=280,Dh=2.5,Uw=6,E0=1.5,qn=5,A0=2.5,Po=12,Ce=30,Ko=.18,Nw=30,zw=5,Fw=8,Ow=2.2,N={sky:528408,fog:396308,ground:1720360,bark:5914672,leaf:1722400,leafGlow:4521898,mushCap:8926190,mushGlow:13400063,mushStem:2756928,crystal:3407837,crystalCore:8978414,firefly:15662950,fireflyB:6750173,spore:12320665,ambient:2241365,moon:12307694,jellyBell:7833855,jellyGlow:11193599,jellyTent:6715340,puffBody:16768460,puffGlow:16755336,puffEye:2236962,puffCheek:16746649,deerBody:11202303,deerGlow:8969727,deerAntler:13434862,deerEye:1127236,mothWing:11206553,mothGlow:13434794,mothBody:5596723,mothSpot:16777215,grass1:1721376,grass2:865048,grassTip:3385941,grassPurple:[1706530,2363962,4857960,11158766,13400063,16746717,2757952,6697898,11158783],grassBlue:[660514,858677,2114917,4500206,6741503,8974079,1387077,3368618,4500223],grassTeal:[662042,1059362,2121808,4517563,6750173,11206536,1720376,3385992,4521915],fern:1725744,fernGlow:3394662,flower:16742348,flowerGlow:16751069,flowerStem:1721376,reed:2774325,reedTip:4504422,orbGold:16763955,orbGlow:16772778,orbInner:16775389,laserPink:16737962,laserGlow:16746700,obeliskBlack:657938,obeliskPink:16729258,moatBlue:3377356,rainbow:[16724787,16746547,16772659,3407718,3377407,8926207],wispCore:11202303,wispGlow:14544639,wispTrail:8965375,dandStem:4482611,dandHead:16777198,dandSeed:16775389,dandSeedGlow:16777215,fairyMush:13404415,fairyGlow:14527231,fairyRing:11167470,bubbleIris:11197951,bubbleShine:16777215,bubblePop:13434862,starMote:16772829,starGlow:16777164,pondWater:2254506,pondGlow:3377356,lilyPad:2263108,lilyFlower:16746700,lilyGlow:16755421,echoBloom:11206604,echoWave:8978363,rockBase:9079440,rockLight:10132126,rockMoss:1721378,rockGranite:[9079440,10132126,6974066,10526888],rockSandstone:[10127984,11575432,8022613,12628120],rockLimestone:[10526872,11579560,8421496,13158592],rockSlate:[6320256,7372944,5265512,8951976],rockBasalt:[5263448,6316136,4210760,7368824],skyDeep:198160,skyNeb1:2230323,skyNeb2:530483,skyNeb3:1706024,skyNeb4:662050,skyNeb5:1575464,skyStarBright:16777215,skyStarDim:8952251,skyStarWarm:16768426,skyStarCool:11193599,skyGalaxy:6706568,skyAnomaly:[16729224,4521932,16755234,8930559,2285055,16737860],skyConstLine:3359846,thornOrb:16755268,thornOrbGlow:16764006,thornPetal:6689075,thornSpike:2759184,thornStem:1717024,helixStem:1714240,helixPod:6697983,helixPodGlow:8934911,helixRing:4465322,helixNode:5588172,snapBody:2271846,snapBodyGlow:4521864,snapTip:6750122,snapTipGlow:8978380,snapFrond:1730116,spiralStem:1716288,spiralFrond:2271880,spiralGlow:4521932,spiralTip:8978414,corpseSpathe:5574946,corpseColumn:8921668,corpseGlow:13382485,corpseLeaf:1717016,orbBushLeaf:2245666,orbBushOrb:16746700,orbBushGlow:16755421,orbBushStem:1718312,lanternStem:2769954,lanternPod:16768358,lanternGlow:16772744,lanternHaze:16763972,veilSupport:3816e3,veilMoss:4508808,veilGlow:6750122,veilEdge:8978380,groundGlowColors:[3407837,4521898,13400063,4500206,8978380]},sn=new sw({antialias:!0,powerPreference:"default"});sn.setSize(window.innerWidth,window.innerHeight);sn.setPixelRatio(Math.min(window.devicePixelRatio,1.5));sn.shadowMap.enabled=!0;sn.shadowMap.type=mp;sn.toneMapping=xp;sn.toneMappingExposure=2.8;sn.outputColorSpace=Ln;document.body.appendChild(sn.domElement);const bn=new Wn(65,window.innerWidth/window.innerHeight,.1,300),am=new tm,ot=new Ux;ot.background=new st(N.skyDeep);ot.fog=new Of(N.fog,.01);window.addEventListener("resize",()=>{bn.aspect=window.innerWidth/window.innerHeight,bn.updateProjectionMatrix(),sn.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("visibilitychange",()=>{document.hidden||am.getDelta()});const cm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ta{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Bw=new Zf(-1,1,1,-1,0,1);class Gw extends Ae{constructor(){super(),this.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Vt([0,2,0,0,2,0],2))}}const kw=new Gw;class lm{constructor(t){this._mesh=new C(kw,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Bw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class um extends Ta{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Fn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Yc.clone(t.uniforms),this.material=new Fn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new lm(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class R0 extends Ta{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class Hw extends Ta{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Vw{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new pt);this._width=n.width,this._height=n.height,e=new Mi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new um(cm),this.copyPass.material.blending=Ji,this.clock=new tm}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}R0!==void 0&&(r instanceof R0?n=!0:r instanceof Hw&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ww extends Ta{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new st}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const Xw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new st(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Mr extends Ta{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new pt(t.x,t.y):new pt(256,256),this.clearColor=new st(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Mi(o,r,{type:Qi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const f=new Mi(o,r,{type:Qi});f.texture.name="UnrealBloomPass.h"+p,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Mi(o,r,{type:Qi});d.texture.name="UnrealBloomPass.v"+p,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),o=Math.round(o/2),r=Math.round(r/2)}const a=Xw;this.highPassUniforms=Yc.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Fn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new pt(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=cm;this.copyUniforms=Yc.clone(c.uniforms),this.blendMaterial=new Fn({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:te,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new st,this.oldClearAlpha=1,this.basic=new Z,this.fsQuad=new lm(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new pt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Mr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Mr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Fn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new pt(.5,.5)},direction:{value:new pt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Fn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Mr.BlurDirectionX=new pt(1,0);Mr.BlurDirectionY=new pt(0,1);const qw={uniforms:{tDiffuse:{value:null},saturation:{value:1}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float saturation;
    varying vec2 vUv;
    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      float luma = dot(color.rgb, vec3(0.299, 0.587, 0.114));
      vec3 grey = vec3(luma);
      gl_FragColor = vec4(mix(grey, color.rgb, saturation), color.a);
    }
  `};let _s=null,Kf=!0,Ho=null,el=null;try{const i=new Ww(ot,bn);Ho=new Mr(new pt(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2)),.6,.4,.85),el=new um(qw),_s=new Vw(sn),_s.addPass(i),_s.addPass(Ho),_s.addPass(el)}catch(i){console.warn("Bloom unavailable, falling back to direct render:",i.message),Kf=!1}function Yw(i){el&&(el.uniforms.saturation.value=i)}window.addEventListener("resize",()=>{Kf&&_s&&_s.setSize(window.innerWidth,window.innerHeight)});function C0(){Kf&&_s?_s.render():sn.render(ot,bn)}const nl=new vv(N.ambient,N.ground,.65);ot.add(nl);const li=new wl(N.moon,.85);li.position.set(30,60,-20);li.castShadow=!0;li.shadow.camera.left=-90;li.shadow.camera.right=90;li.shadow.camera.top=90;li.shadow.camera.bottom=-90;li.shadow.camera.near=1;li.shadow.camera.far=250;li.shadow.mapSize.set(1024,1024);li.shadow.bias=-.001;ot.add(li);const Jf=new wl(2241365,.3);Jf.position.set(-40,45,25);ot.add(Jf);const hm=new wl(3359829,.4);hm.position.set(-25,15,30);ot.add(hm);const fm=new Sr(3368516,.7,100);fm.position.set(0,.5,0);ot.add(fm);const dm=new wl(4478327,.4);dm.position.set(-10,25,40);ot.add(dm);const ga=new Sr(6719624,.6,20);ot.add(ga);const Bs=[];function Zw(){for(let i=0;i<zw;i++){const t=new Sr(N.crystal,0,16);ot.add(t),Bs.push(t)}}const Yr=new Sr(N.orbGold,0,15);ot.add(Yr);const Ve={};let xa=0,to=0,Tl=!1,pm=!1,Qf=0,td=0,ed=!1,El=!1,Tr=!1,il=null,so=null,Uh=0,Nh=0,zh=null;function $w(i){zh=i}function jw(i){pm=i}function Kw(i){El=i}function Ea(){!pm&&zh&&zh()}window.addEventListener("keydown",i=>{Ve[i.code]=!0,"Space ShiftLeft ShiftRight KeyW KeyA KeyS KeyD".split(" ").indexOf(i.code)>=0&&i.preventDefault(),Ea()});window.addEventListener("keyup",i=>{Ve[i.code]=!1});window.addEventListener("blur",()=>{for(const i in Ve)Ve[i]=!1;Tl=!1});sn.domElement.addEventListener("mousedown",()=>{Tl=!0,Ea()});window.addEventListener("mouseup",()=>{Tl=!1});window.addEventListener("mousemove",i=>{Tl&&(xa-=i.movementX*tl,to-=i.movementY*tl,to=Math.max(-1,Math.min(1,to)))});const Jw="ontouchstart"in window||navigator.maxTouchPoints>0,Aa=document.getElementById("joy-zone"),sl=document.getElementById("joy-knob"),nd=document.getElementById("btn-jump");Jw&&(Aa.style.display="block",nd.style.display="block",document.getElementById("controls").textContent="Stick: Move · Drag right: Look · JUMP");function mm(i,t){const e=Aa.getBoundingClientRect();let n=i-(e.left+e.width/2),s=t-(e.top+e.height/2);const o=Math.sqrt(n*n+s*s),r=52;o>r&&(n=n/o*r,s=s/o*r),Qf=n/r,td=s/r,sl.style.left=40+n+"px",sl.style.top=40+s+"px"}Aa.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),Ea();const t=i.changedTouches[0];il=t.identifier,ed=!0,mm(t.clientX,t.clientY)},{passive:!1});Aa.addEventListener("touchmove",i=>{i.preventDefault(),i.stopPropagation();for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===il&&mm(i.changedTouches[t].clientX,i.changedTouches[t].clientY)},{passive:!1});Aa.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation();for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===il&&(il=null,ed=!1,Qf=0,td=0,sl.style.left="40px",sl.style.top="40px")},{passive:!1});nd.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),Ea(),El=!0},{passive:!1});nd.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation(),El=!1},{passive:!1});sn.domElement.addEventListener("touchstart",i=>{i.preventDefault(),Ea();for(let t=0;t<i.changedTouches.length;t++){const e=i.changedTouches[t];e.clientX>window.innerWidth*.3&&so===null&&(so=e.identifier,Uh=e.clientX,Nh=e.clientY)}},{passive:!1});sn.domElement.addEventListener("touchmove",i=>{i.preventDefault();for(let t=0;t<i.changedTouches.length;t++){const e=i.changedTouches[t];e.identifier===so&&(xa-=(e.clientX-Uh)*tl,to-=(e.clientY-Nh)*tl,to=Math.max(-1,Math.min(1,to)),Uh=e.clientX,Nh=e.clientY)}},{passive:!1});sn.domElement.addEventListener("touchend",i=>{for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===so&&(so=null)},{passive:!1});sn.domElement.addEventListener("touchcancel",i=>{for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===so&&(so=null)},{passive:!1});function Qw(){let i=0,t=0;Ve.KeyW&&(t-=1),Ve.KeyS&&(t+=1),Ve.KeyA&&(i-=1),Ve.KeyD&&(i+=1),ed&&(i+=Qf,t+=td);const e=Math.sqrt(i*i+t*t);e>1&&(i/=e,t/=e);const n=rw*(Ve.ShiftLeft||Ve.ShiftRight||Tr?aw:1),s=Math.sin(xa),o=Math.cos(xa);return{x:(i*o+t*s)*n,z:(-i*s+t*o)*n}}const Bn={mushCap:new Y(.5,8,5),mushStem:new gt(.06,.1,.6,5),mushDot:new Y(.06,4,3),crystal:new gt(0,.35,1.8,6),crystalSm:new gt(0,.18,.9,5),fly:new Y(.06,4,3),spore:new Y(.04,3,3),dandSeed:new Y(.025,3,3),bubble:new Y(.15,8,6),starMote:new Y(.03,3,3),dustMote:new Y(.035,3,3)};let sa=42;function M(){return sa=sa*16807%2147483647,(sa&2147483647)/2147483647}function gm(){return sa}function Fh(i){sa=i}function Vo(i,t){let e=i*374761393+t*668265263+1274126177|0;return e=(e^e>>13)*1274126177|0,(e&2147483647)/2147483647}function Wo(i){return i*i*(3-2*i)}function Al(i,t){const e=Math.floor(i),n=Math.floor(t),s=Wo(i-e),o=Wo(t-n),r=Vo(e,n),a=Vo(e+1,n),l=Vo(e,n+1),u=Vo(e+1,n+1);return r+(a-r)*s+(l-r)*o+(r-a-l+u)*s*o}function js(i,t,e){let n=0,s=.5,o=1;for(let r=0;r<e;r++)n+=Al(i*o,t*o)*s,s*=.5,o*=2;return n}function P0(i,t,e){let n=0,s=1,o=1,r=1;for(let a=0;a<e;a++){let l=Math.abs(Al(i*o,t*o)-.5)*2;l=1-l,l=l*l,l*=r,r=Math.min(1,l*1.5),n+=l*s,s*=.45,o*=2.1}return n}function tS(i,t){const e=Math.floor(i),n=Math.floor(t);let s=999;for(let o=-1;o<=1;o++)for(let r=-1;r<=1;r++){const a=e+o+Vo(e+o,n+r)*.8+.1,l=n+r+Vo(n+r+7,e+o+3)*.8+.1,u=Math.sqrt((i-a)*(i-a)+(t-l)*(t-l));u<s&&(s=u)}return s}function eS(i,t){let e=0;const n=.028,s=i*.82+t*.57,o=-i*.57+t*.82,r=P0(s*n+400,o*n+500,4);e+=r*3.5;const a=.018,l=i*.34+t*.94,u=-i*.94+t*.34,c=P0(l*a-200,u*a+150,3);e+=c*2;const p=.045,f=tS(i*p+70,t*p+90),d=Math.max(0,1-f*1.6),g=d*d*(3-2*d),x=2+js(i*.01+600,t*.01+700,2)*4;e+=g*x;const h=js(i*.08+800,t*.08+900,3),m=h*h*4;e+=m;const _=js(i*.025-300,t*.025-400,3),v=5,y=Math.floor(_*v)/v,A=(_*.3+y*.7)*3;e+=A;const E=.04,b=i*.5+t*.87,T=-i*.87+t*.5,w=Math.abs(Al(b*E+150,T*E+250)-.5)*2,S=w*w;return e-=(1-S)*1.5,e}const Oh=[];function Bh(i,t,e){Oh.push({x:i,z:t,r:e})}function Dt(i,t){const e=Math.sqrt(i*i+t*t),n=1-Wo(Math.max(0,(e-jt*.7)/(jt*.3))),s=Wo(Math.min(1,e/10)),o=.012,r=js(i*o+200,t*o+300,3),a=Wo(Math.max(0,Math.min(1,(r-.15)*2))),l=.035,u=js(i*l,t*l,4),c=js(i*l*2.7+50,t*l*2.7+50,3),p=Al(i*.15,t*.15),d=js(i*l*.6-100,t*l*.6-100,3)*1.5,g=u*5*a,x=c*1.5*a,h=p*.2;let m=d+g+x+h;const _=eS(i,t),v=.3+a*.7;m+=_*v,m*=n*s;for(let y=0;y<Oh.length;y++){const A=Oh[y],E=i-A.x,b=t-A.z,T=Math.sqrt(E*E+b*b);if(T<A.r*2.5){const w=Wo(Math.max(0,(T-A.r*.5)/(A.r*2)));m*=w}}return m}function Rl(i,t){const n=Dt(i,t),s=Dt(i+.3,t),o=Dt(i,t+.3),r=-(s-n)/.3,a=-(o-n)/.3,l=1,u=Math.sqrt(r*r+l*l+a*a);return{x:r/u,y:l/u,z:a/u}}const ys={uTime:{value:0},uPlayerX:{value:0},uPlayerZ:{value:0},uTransform:{value:0}};function nS(i,t,e){ys.uTime.value=i,ys.uPlayerX.value=t,ys.uPlayerZ.value=e}function iS(i){ys.uTransform.value=i}function sS(){const t=document.createElement("canvas");t.width=2048,t.height=2048;const e=t.getContext("2d"),n=Math.random;e.fillStyle="#223822",e.fillRect(0,0,2048,2048);const s=[{col:"rgba(50,45,25,0.38)",n:16,r:130},{col:"rgba(35,55,30,0.35)",n:14,r:120},{col:"rgba(55,40,22,0.35)",n:14,r:115},{col:"rgba(45,55,28,0.32)",n:12,r:110},{col:"rgba(60,48,25,0.32)",n:12,r:105},{col:"rgba(30,50,32,0.30)",n:10,r:100},{col:"rgba(65,50,28,0.28)",n:10,r:100},{col:"rgba(40,60,35,0.26)",n:10,r:95},{col:"rgba(70,45,22,0.24)",n:8,r:90},{col:"rgba(45,35,18,0.22)",n:8,r:85}];for(const c of s)for(let p=0;p<c.n;p++){const f=n()*2048,d=n()*2048,g=c.r*(.5+n()*.8),x=e.createRadialGradient(f,d,0,f,d,g);x.addColorStop(0,c.col),x.addColorStop(.6,c.col.replace(/[\d.]+\)$/,parseFloat(c.col.match(/[\d.]+\)$/)[0])*.4+")")),x.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=x;for(let h=-1;h<=1;h++)for(let m=-1;m<=1;m++)e.beginPath(),e.arc(f+h*2048,d+m*2048,g,0,6.28),e.fill()}const o=[{n:80,r:25,colors:["rgba(45,40,22,0.24)","rgba(38,55,30,0.20)","rgba(50,38,18,0.22)","rgba(35,48,25,0.18)","rgba(55,42,20,0.20)","rgba(30,52,32,0.16)"]},{n:200,r:10,colors:["rgba(45,40,20,0.14)","rgba(35,50,28,0.12)","rgba(50,38,18,0.12)","rgba(30,48,28,0.10)","rgba(48,42,18,0.12)","rgba(28,45,30,0.08)"]},{n:500,r:4,colors:["rgba(42,38,18,0.10)","rgba(35,48,25,0.08)","rgba(48,36,16,0.08)","rgba(30,45,28,0.06)","rgba(45,40,16,0.08)","rgba(25,42,28,0.05)"]}];for(const c of o)for(let p=0;p<c.n;p++){e.fillStyle=c.colors[Math.floor(n()*c.colors.length)];const f=n()*2048,d=n()*2048;e.beginPath(),e.arc(f,d,c.r+n()*c.r*.6,0,6.28),e.fill()}const r=["rgba(50,180,90,0.10)","rgba(40,160,100,0.08)","rgba(65,145,170,0.07)","rgba(80,200,130,0.09)","rgba(55,155,135,0.08)"];for(let c=0;c<45;c++){let p=n()*2048,f=n()*2048;const d=r[Math.floor(n()*r.length)];e.strokeStyle=d,e.lineWidth=1.5+n()*2.5,e.beginPath(),e.moveTo(p,f);let g=n()*6.28;const x=14+Math.floor(n()*20);for(let h=0;h<x;h++)g+=Math.sin(h*.6)*.5+(n()-.5)*.4,p+=Math.cos(g)*(6+n()*10),f+=Math.sin(g)*(6+n()*10),e.lineTo(p,f);if(e.stroke(),n()<.7){const h=6+n()*10,m=e.createRadialGradient(p,f,0,p,f,h);m.addColorStop(0,d.replace(/[\d.]+\)$/,"0.18)")),m.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=m,e.beginPath(),e.arc(p,f,h,0,6.28),e.fill()}if(n()<.5&&c<30){let h=p,m=f,_=g+(n()-.5)*1.5;e.strokeStyle=d.replace(/[\d.]+\)$/,parseFloat(d.match(/[\d.]+\)$/)[0])*.6+")"),e.lineWidth=1+n()*1.5,e.beginPath(),e.moveTo(h,m);for(let v=0;v<6;v++)_+=(n()-.5)*.6,h+=Math.cos(_)*(4+n()*8),m+=Math.sin(_)*(4+n()*8),e.lineTo(h,m);e.stroke()}}for(let c=0;c<20;c++){const p=n()*2048,f=n()*2048,d=20+n()*60,x=n()<.7?`rgba(50,${140+Math.floor(n()*60)},${60+Math.floor(n()*40)},${.06+n()*.06})`:`rgba(${100+Math.floor(n()*60)},${80+Math.floor(n()*40)},40,${.05+n()*.04})`;e.strokeStyle=x,e.lineWidth=1.5+n()*3,e.beginPath(),e.arc(p,f,d,0,6.28),e.stroke(),n()<.4&&(e.lineWidth=.8+n()*1.5,e.beginPath(),e.arc(p,f,d*(.6+n()*.2),0,6.28),e.stroke());for(let h=-1;h<=1;h++)for(let m=-1;m<=1;m++)h===0&&m===0||(e.strokeStyle=x,e.lineWidth=1.5+n()*3,e.beginPath(),e.arc(p+h*2048,f+m*2048,d,0,6.28),e.stroke())}e.lineWidth=1.2;for(let c=0;c<30;c++){e.strokeStyle=`rgba(15,25,12,${.2+n()*.15})`;let p=n()*2048,f=n()*2048,d=n()*6.28;e.beginPath(),e.moveTo(p,f);for(let g=0;g<10;g++)d+=Math.sin(g*.7)*.5+(n()-.5)*.35,p+=Math.cos(d)*(8+n()*14),f+=Math.sin(d)*(8+n()*14),e.lineTo(p,f);e.stroke()}const a=["rgba(55,40,18,0.28)","rgba(50,50,22,0.25)","rgba(35,55,25,0.22)","rgba(60,45,20,0.25)","rgba(45,52,22,0.22)","rgba(65,48,22,0.22)","rgba(40,55,28,0.20)","rgba(55,42,16,0.20)","rgba(70,50,22,0.22)","rgba(48,38,15,0.20)","rgba(30,50,28,0.18)","rgba(60,55,25,0.16)"];for(let c=0;c<3500;c++){e.fillStyle=a[Math.floor(n()*a.length)];const p=n()*2048,f=n()*2048,d=.8+n()*2.5;e.beginPath(),e.arc(p,f,d,0,6.28),e.fill()}for(let c=0;c<50;c++){const p=n()*2048,f=n()*2048,d=15+n()*35,g=e.createRadialGradient(p,f,0,p,f,d),x=n();x<.25?(g.addColorStop(0,"rgba(35,60,35,0.18)"),g.addColorStop(1,"rgba(20,35,20,0)")):x<.5?(g.addColorStop(0,"rgba(55,42,20,0.18)"),g.addColorStop(1,"rgba(30,22,10,0)")):x<.7?(g.addColorStop(0,"rgba(45,55,28,0.16)"),g.addColorStop(1,"rgba(25,30,15,0)")):x<.85?(g.addColorStop(0,"rgba(60,45,22,0.15)"),g.addColorStop(1,"rgba(32,24,12,0)")):(g.addColorStop(0,"rgba(38,65,40,0.14)"),g.addColorStop(1,"rgba(22,38,22,0)")),e.fillStyle=g,e.beginPath(),e.arc(p,f,d,0,6.28),e.fill()}for(let c=0;c<300;c++){const p=n()*2048,f=n()*2048,d=1.5+n()*3,g=Math.floor(30+n()*40);e.fillStyle=`rgba(${g+5},${g},${g-8},0.25)`,e.beginPath(),e.arc(p,f,d,0,6.28),e.fill()}e.lineWidth=.7;for(let c=0;c<60;c++){const p=n()*2048,f=n()*2048,d=4+n()*16,g=n()*6.28;e.strokeStyle=`rgba(18,28,12,${.15+n()*.1})`,e.beginPath(),e.moveTo(p,f),e.lineTo(p+Math.cos(g)*d,f+Math.sin(g)*d),e.stroke()}const l=["rgba(60,190,100,0.10)","rgba(50,175,130,0.08)","rgba(80,160,180,0.07)","rgba(100,90,170,0.06)","rgba(160,130,60,0.05)","rgba(50,160,150,0.07)"];for(let c=0;c<400;c++){const p=n()*2048,f=n()*2048,d=l[Math.floor(n()*l.length)];if(e.fillStyle=d,e.beginPath(),e.arc(p,f,1+n()*2.5,0,6.28),e.fill(),n()<.4){const g=5+n()*6,x=e.createRadialGradient(p,f,0,p,f,g);x.addColorStop(0,d),x.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=x,e.beginPath(),e.arc(p,f,g,0,6.28),e.fill()}}for(let c=0;c<150;c++){const p=n()*2048,f=n()*2048;e.fillStyle=`rgba(90,150,110,${.04+n()*.04})`,e.beginPath(),e.arc(p,f,.5+n()*1.5,0,6.28),e.fill()}const u=new Sa(t);return u.wrapS=u.wrapT=dr,u.repeat.set(8,8),u.colorSpace=Ln,u}function cc(i,t){let e=i*127961+t*372143+918273|0;return e=(e^e>>13)*517261|0,(e&2147483647)/2147483647}function Gh(i){return i*i*(3-2*i)}function xm(i,t){const e=Math.floor(i),n=Math.floor(t),s=Gh(i-e),o=Gh(t-n),r=cc(e,n),a=cc(e+1,n),l=cc(e,n+1),u=cc(e+1,n+1);return r+(a-r)*s+(l-r)*o+(r-a-l+u)*s*o}function pu(i,t,e){let n=0,s=.5,o=1;for(let r=0;r<e;r++)n+=xm(i*o,t*o)*s,s*=.5,o*=2;return n}function oS(){const i=sS(),t=jt*3,e=200,n=new ue(t,t,e,e),s=n.attributes.position,o=[[.65,.6,.38],[.5,.7,.42],[.72,.58,.35],[.55,.68,.4],[.6,.55,.32],[.45,.65,.45],[.68,.62,.36],[.48,.72,.48],[.75,.55,.32],[.55,.6,.38]],r=s.count,a=new Float32Array(r*3);for(let c=0;c<r;c++){const p=s.getX(c),f=s.getY(c);Math.sqrt(p*p+f*f)<jt*1.4?s.setZ(c,Dt(p,-f)):s.setZ(c,0);const g=p,x=-f,h=pu(g*.025+100,x*.025+200,3),m=pu(g*.06+300,x*.06+400,2),_=xm(g*.15+500,x*.15+600),v=pu(g*.04-150,x*.04-250,3),y=Math.floor(h*o.length*.999),A=Math.floor(v*o.length*.999),E=o[y],b=o[A],T=Gh(m),w=.82+_*.25,S=(E[0]*(1-T)+b[0]*T)*w,R=(E[1]*(1-T)+b[1]*T)*w,L=(E[2]*(1-T)+b[2]*T)*w,z=1+Dt(g,x)*.06;a[c*3]=S*z,a[c*3+1]=R*z,a[c*3+2]=L*z}n.setAttribute("color",new ze(a,3)),n.computeVertexNormals();const l=new q({map:i,vertexColors:!0,roughness:.75,metalness:0,emissive:1388056,emissiveIntensity:.25});l.onBeforeCompile=c=>{c.uniforms.uTime=ys.uTime,c.uniforms.uPlayerX=ys.uPlayerX,c.uniforms.uPlayerZ=ys.uPlayerZ,c.uniforms.uTransform=ys.uTransform,c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
      uniform float uPlayerX;
      uniform float uPlayerZ;
      varying vec3 vWorldPos;
      varying float vPlayerDist2;
      `),c.vertexShader=c.vertexShader.replace("#include <fog_vertex>",`#include <fog_vertex>
      vec4 gWorldPos = modelMatrix * vec4(transformed, 1.0);
      vWorldPos = gWorldPos.xyz;
      float gpdx = gWorldPos.x - uPlayerX;
      float gpdz = gWorldPos.z - uPlayerZ;
      vPlayerDist2 = gpdx * gpdx + gpdz * gpdz;
      `),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
      uniform float uTime;
      uniform float uTransform;
      varying vec3 vWorldPos;
      varying float vPlayerDist2;

      // GLSL noise for procedural patterns
      float gHash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }
      float gNoise(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = gHash(i), b = gHash(i + vec2(1.0, 0.0));
        float c = gHash(i + vec2(0.0, 1.0)), d = gHash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }
      float gFbm(vec2 p) {
        float v = 0.0, a = 0.5;
        for (int i = 0; i < 4; i++) {
          v += gNoise(p) * a;
          p *= 2.0; a *= 0.5;
        }
        return v;
      }
      `),c.fragmentShader=c.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>

      float tF = uTransform; // 0 = forest, 1 = purple finale
      vec2 wp = vWorldPos.xz;

      // --- Mycelium vein glow (noise contour lines) ---
      float vn1 = gFbm(wp * 0.25 + 30.0);
      float vn2 = gFbm(wp * 0.15 + 80.0);
      float vein1 = smoothstep(0.47, 0.50, vn1) * smoothstep(0.53, 0.50, vn1);
      float vein2 = smoothstep(0.45, 0.49, vn2) * smoothstep(0.55, 0.49, vn2);
      float veins = max(vein1, vein2 * 0.7);
      float veinPulse = 0.7 + 0.3 * sin(uTime * 0.4 + vn1 * 8.0);
      // Forest: bright green veins | Finale: bright white-cyan veins
      vec3 veinColForest = vec3(0.10, 0.40, 0.20) * 0.88;
      vec3 veinColFinale = vec3(0.80, 0.95, 1.00) * 1.32;
      totalEmissiveRadiance += veins * mix(veinColForest, veinColFinale, tF) * veinPulse;

      // --- Organic ring patterns (growth rings from noise) ---
      float ringN = gNoise(wp * 0.06 + 10.0);
      float ring = sin(ringN * 25.0) * 0.5 + 0.5;
      ring = smoothstep(0.88, 1.0, ring) * mix(0.44, 0.66, tF);
      // Forest: brighter green | Finale: pink-magenta
      vec3 ringColForest = vec3(0.088, 0.308, 0.154);
      vec3 ringColFinale = vec3(0.66, 0.22, 0.55);
      totalEmissiveRadiance += ring * mix(ringColForest, ringColFinale, tF);

      // --- Scattered fairy ring glows ---
      vec2 cell = floor(wp * 0.07);
      vec2 cellCenter = (cell + 0.5 + (vec2(gHash(cell), gHash(cell + 100.0)) - 0.5) * 0.6) / 0.07;
      float rd = length(wp - cellCenter);
      float ringR = 3.0 + gHash(cell + 200.0) * 4.0;
      float fRing = smoothstep(0.4, 0.0, abs(rd - ringR)) * step(0.75, gHash(cell + 300.0));
      // Forest: brighter green | Finale: bright purple
      vec3 fRingColForest = vec3(0.10, 0.30, 0.16) * 0.88;
      vec3 fRingColFinale = vec3(0.50, 0.16, 0.65) * 1.32;
      totalEmissiveRadiance += fRing * mix(fRingColForest, fRingColFinale, tF);

      // --- Fine noise for per-pixel detail ---
      float fineN = gNoise(wp * 1.5) * 0.088;
      vec3 fineForest = vec3(0.066, 0.165, 0.088);
      vec3 fineFinale = vec3(0.198, 0.066, 0.242);
      totalEmissiveRadiance += fineN * mix(fineForest, fineFinale, tF);

      // --- Player proximity ground glow (8m radius) ---
      if (vPlayerDist2 < 64.0) {
        float pDist = sqrt(vPlayerDist2);
        float pGlow = (1.0 - pDist / 8.0);
        pGlow = pGlow * pGlow * pGlow;
        // Forest: brighter green glow | Finale: bright pink-white glow
        vec3 pGlowForest = vec3(0.14, 0.40, 0.22) * 0.77;
        vec3 pGlowFinale = vec3(0.60, 0.30, 0.65) * 1.1;
        totalEmissiveRadiance += pGlow * mix(pGlowForest, pGlowFinale, tF);
      }

      // --- Finale: additional bright cyan/white veins ---
      if (tF > 0.01) {
        float fv1 = gFbm(wp * 0.35 + 55.0);
        float fv2 = gFbm(wp * 0.20 + 120.0);
        float fVein1 = smoothstep(0.46, 0.50, fv1) * smoothstep(0.54, 0.50, fv1);
        float fVein2 = smoothstep(0.44, 0.48, fv2) * smoothstep(0.56, 0.48, fv2);
        float fVeins = max(fVein1, fVein2 * 0.6);
        float fvPulse = 0.6 + 0.4 * sin(uTime * 0.6 + fv1 * 10.0);
        // White-cyan veins, only visible when transformed
        totalEmissiveRadiance += fVeins * vec3(0.90, 1.00, 1.10) * fvPulse * tF * 1.0;
        // Additional pink shimmer spots
        float shimmer = gNoise(wp * 0.8 + uTime * 0.05) * gNoise(wp * 0.4 + 20.0);
        shimmer = smoothstep(0.15, 0.25, shimmer) * 0.5;
        totalEmissiveRadiance += shimmer * vec3(0.55, 0.15, 0.60) * tF;
      }
      `)};const u=new C(n,l);return u.rotation.x=-Math.PI/2,u.receiveShadow=!0,ot.add(u),u}const Jo=new Jt;let ol=null;const Gs=120;let I0=null,Ac=null,kh=null,Hh=null,Qo=null;const tr=[],rS=3;let mu=0;function vs(i,t){const e=i>>16&255,n=i>>8&255,s=i&255;return`rgba(${e},${n},${s},${t})`}function Ms(i,t,e,n,s,o,r){i.save(),i.translate(t,e),Math.abs(s/n-1)>.01&&i.scale(1,s/n);const a=i.createRadialGradient(0,0,0,0,0,n);a.addColorStop(0,vs(o,r)),a.addColorStop(.25,vs(o,r*.55)),a.addColorStop(.55,vs(o,r*.15)),a.addColorStop(.85,vs(o,r*.03)),a.addColorStop(1,vs(o,0)),i.fillStyle=a,i.beginPath(),i.arc(0,0,n,0,6.2832),i.fill(),i.restore()}function gu(i,t,e,n,s,o,r,a){Ms(i,t,e,n,s,o,r),t-n<0&&Ms(i,t+a,e,n,s,o,r),t+n>a&&Ms(i,t-a,e,n,s,o,r)}function aS(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),s=Math.random,o=n.createLinearGradient(0,0,0,1024);o.addColorStop(0,"#030610"),o.addColorStop(.2,"#050a18"),o.addColorStop(.4,"#0a1222"),o.addColorStop(.55,"#0c1828"),o.addColorStop(.75,"#081018"),o.addColorStop(1,"#040810"),n.fillStyle=o,n.fillRect(0,0,2048,1024);const r=[{x:.12,y:.22,rx:.18,ry:.14,col:1717094,a:.14},{x:.42,y:.28,rx:.22,ry:.1,col:2758741,a:.12},{x:.72,y:.18,rx:.16,ry:.12,col:1721446,a:.13},{x:.88,y:.32,rx:.2,ry:.09,col:3348548,a:.1},{x:.28,y:.12,rx:.14,ry:.18,col:2245768,a:.1},{x:.58,y:.38,rx:.18,ry:.07,col:4465220,a:.08},{x:.05,y:.4,rx:.15,ry:.1,col:1586005,a:.09},{x:.52,y:.15,rx:.12,ry:.16,col:2765670,a:.07}];for(const p of r){gu(n,p.x*2048,p.y*1024,p.rx*2048,p.ry*1024,p.col,p.a,2048);for(let f=0;f<4;f++){const d=(p.x+(s()-.5)*p.rx)*2048,g=(p.y+(s()-.5)*p.ry)*1024,x=p.rx*2048*(.2+s()*.35),h=p.ry*1024*(.2+s()*.4);gu(n,d,g,x,h,p.col,p.a*(.4+s()*.5),2048)}}const a=[2245802,2245734,4465254,5583701,3368584,2245717,3809894];for(let p=0;p<30;p++){const f=s()*2048,d=s()*1024*.55,g=40+s()*180,x=25+s()*100;gu(n,f,d,g,x,a[Math.floor(s()*a.length)],.025+s()*.035,2048)}n.save(),n.globalCompositeOperation="screen";const l=.26;for(let p=0;p<50;p++){const f=p/50,d=f*2048,g=(l+Math.sin(f*Math.PI)*.06+(s()-.5)*.02)*1024,x=2048*.05+s()*2048*.035,h=1024*.04*(.4+s()*.6);Ms(n,d,g,x,h,4478310,.025+s()*.015)}for(let p=0;p<25;p++){const f=.2+s()*.6,d=f*2048,g=(l+Math.sin(f*Math.PI)*.04)*1024;Ms(n,d,g,2048*.03+s()*2048*.02,1024*.02+s()*1024*.01,6719658,.015+s()*.012)}for(let p=0;p<10;p++){const f=.35+s()*.3,d=f*2048,g=(l+Math.sin(f*Math.PI)*.02)*1024;Ms(n,d,g,2048*.02,1024*.012,8943462,.01+s()*.008)}n.globalCompositeOperation="source-over",n.restore();for(let p=0;p<12;p++){const f=.1+s()*.8,d=f*2048,g=(l+Math.sin(f*Math.PI)*.04+(s()-.5)*.02)*1024,x=20+s()*60,h=8+s()*20;Ms(n,d,g,x,h,132104,.15+s()*.1)}const u=["255,255,255","220,230,255","255,240,220","200,215,255","255,225,200","240,240,255","255,245,235"];for(let p=0;p<5e3;p++){const f=s()*2048,d=s()*1024*.65,g=.3+s()*.7,x=.1+s()*.5;n.fillStyle=`rgba(${u[Math.floor(s()*u.length)]},${x})`,n.beginPath(),n.arc(f,d,g,0,6.28),n.fill()}for(let p=0;p<3e3;p++){const f=s(),d=f*2048,x=(l+Math.sin(f*Math.PI)*.06)*1024+(s()-.5)*1024*.1;if(x<0||x>1024*.6)continue;const h=.2+s()*.6,m=.2+s()*.7;n.fillStyle=`rgba(${u[Math.floor(s()*u.length)]},${m})`,n.beginPath(),n.arc(d,x,h,0,6.28),n.fill()}for(let p=0;p<60;p++){const f=s()*2048,d=s()*1024*.58,g=1.2+s()*1.8,x=6+s()*14,h=s();let m;h<.45?m="255,255,255":h<.65?m="210,225,255":h<.8?m="255,230,200":h<.92?m="190,210,255":m="255,200,180";const _=n.createRadialGradient(f,d,0,f,d,x);_.addColorStop(0,`rgba(${m},0.5)`),_.addColorStop(.1,`rgba(${m},0.18)`),_.addColorStop(.35,`rgba(${m},0.04)`),_.addColorStop(1,`rgba(${m},0)`),n.fillStyle=_,n.beginPath(),n.arc(f,d,x,0,6.28),n.fill(),n.strokeStyle=`rgba(${m},0.12)`,n.lineWidth=.5;const v=x*.8;n.beginPath(),n.moveTo(f-v,d),n.lineTo(f+v,d),n.moveTo(f,d-v),n.lineTo(f,d+v),n.stroke(),n.fillStyle=`rgba(${m},1)`,n.beginPath(),n.arc(f,d,g,0,6.28),n.fill()}for(let p=0;p<8;p++){const f=s()*2048,d=1024*.08+s()*1024*.42,g=50+s()*90;Ms(n,f,d,g,g*.7,3359846,.03);for(let x=0;x<100;x++){const h=s()*6.28,m=s()*s()*g,_=f+Math.cos(h)*m,v=d+Math.sin(h)*m*.65;if(_<0||_>2048||v<0||v>1024)continue;const y=.2+s()*.6;n.fillStyle=`rgba(255,255,255,${.25+s()*.6})`,n.beginPath(),n.arc(_,v,y,0,6.28),n.fill()}}for(let p=0;p<15;p++){const f=r[Math.floor(s()*r.length)],d=(f.x+(s()-.5)*f.rx*.5)*2048,g=(f.y+(s()-.5)*f.ry*.5)*1024,x=3+s()*8,h=n.createRadialGradient(d,g,0,d,g,x*3);h.addColorStop(0,vs(f.col,.2)),h.addColorStop(.3,vs(f.col,.06)),h.addColorStop(1,vs(f.col,0)),n.fillStyle=h,n.beginPath(),n.arc(d,g,x*3,0,6.28),n.fill()}const c=new Sa(e);return c.colorSpace=Ln,c}function cS(){const i=gm(),t=aS(),e=.03,n=new Y(ns,64,32,0,Math.PI*2,e,Math.PI*.55);ol=new Z({map:t,side:fn,fog:!1,transparent:!1});const s=new C(n,ol);Jo.add(s);const o=ns*Math.sin(e)*1.05,r=new He(o,32),a=new Z({color:198160,side:fn,fog:!1}),l=new C(r,a);l.position.y=ns*Math.cos(e),l.rotation.x=Math.PI/2,Jo.add(l),lS(),uS(),ot.add(Jo),Fh(i)}function lS(){const i=new Float32Array(Gs*3),t=new Float32Array(Gs*3);Ac=new Float32Array(Gs),kh=new Float32Array(Gs),Hh=new Float32Array(Gs);const e=[[1,1,1],[.85,.9,1],[1,.94,.86],[.78,.84,1],[1,.88,.78],[.9,.95,1]],n=Math.random,s=ns*.97;for(let a=0;a<Gs;a++){const l=n()*Math.PI*2,u=n()*Math.PI*.48,c=s*Math.cos(l)*Math.sin(u),p=s*Math.cos(u),f=s*Math.sin(l)*Math.sin(u);i[a*3]=c,i[a*3+1]=p,i[a*3+2]=f;const d=e[Math.floor(n()*e.length)];t[a*3]=d[0],t[a*3+1]=d[1],t[a*3+2]=d[2],Ac[a]=2+n()*4,kh[a]=n()*Math.PI*2,Hh[a]=.5+n()*2.5}const o=new Ae;o.setAttribute("position",new Vt(i,3)),o.setAttribute("color",new Vt(t,3)),Qo=new Vt(Ac.slice(),1),Qo.setUsage(Se),o.setAttribute("size",Qo);const r=new kf({vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,fog:!1,blending:te,depthWrite:!1});I0=new Vp(o,r),Jo.add(I0)}function uS(){const i=new Z({color:16777215,transparent:!0,opacity:0,fog:!1,blending:te,depthWrite:!1});for(let t=0;t<rS;t++){const e=new C(new gt(.15,0,12,4),i.clone());e.visible=!1,Jo.add(e),tr.push({mesh:e,mat:e.material,active:!1,life:0,maxLife:0,sx:0,sy:0,sz:0,dx:0,dy:0,dz:0})}}function hS(){let i=null;for(let a=0;a<tr.length;a++)if(!tr[a].active){i=tr[a];break}if(!i)return;const t=Math.random,e=t()*Math.PI*2,n=.1+t()*.35,s=ns*.85;i.sx=s*Math.cos(e)*Math.sin(n),i.sy=s*Math.cos(n),i.sz=s*Math.sin(e)*Math.sin(n);const o=e+(t()-.5)*1,r=80+t()*120;i.dx=Math.cos(o)*r,i.dy=-r*(.5+t()*.5),i.dz=Math.sin(o)*r,i.life=.5+t()*.8,i.maxLife=i.life,i.active=!0,i.mesh.visible=!0}function vm(i,t){if(Jo.rotation.y=t*.003,Qo){const e=Qo.array;for(let n=0;n<Gs;n++){const s=Ac[n],o=Math.sin(t*Hh[n]+kh[n]);e[n]=s*(.65+o*.35)}Qo.needsUpdate=!0}mu-=i,mu<=0&&(mu=4+Math.random()*12,hS());for(let e=0;e<tr.length;e++){const n=tr[e];if(!n.active)continue;if(n.life-=i,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}const s=n.life/n.maxLife;n.sx+=n.dx*i,n.sy+=n.dy*i,n.sz+=n.dz*i,n.mesh.position.set(n.sx,n.sy,n.sz),n.mesh.lookAt(n.sx+n.dx,n.sy+n.dy,n.sz+n.dz),n.mesh.rotateX(Math.PI/2),n.mat.opacity=s*.7,n.mesh.scale.setScalar(.6+s*.4)}}function fS(i){if(ol){const t=Math.max(.15,i);ol.color.setRGB(t,t,t)}}const dS=6,lc=64,Vh=[];let Ks=null;const Br=[new st(1734485),new st(2787447),new st(5601126),new st(6706568),new st(8930406),new st(3368533)];function pS(){Ks=new Jt,Ks.visible=!1;for(let i=0;i<dS;i++){const t=1.2+i*.2+Math.sin(i*1.7)*.15,e=ns*t,n=.1+i*.012+Math.sin(i*2.3)*.02,s=ns*n,o=new ue(e,s,lc,3),r=o.attributes.position.array,a=4,l=(lc+1)*a,u=Math.PI*(.45+i*.08+Math.sin(i*.9)*.05),c=-u/2,p=(.25+i*.04+Math.sin(i*1.3)*.02)*Math.PI,f=i*.18-.45;for(let h=0;h<l;h++){const m=Math.floor(h/a),_=h%a,v=m/lc,y=c+v*u+f,E=(_/(a-1)-.5)*.05,b=p+E,T=ns*.92;r[h*3]=Math.sin(y)*Math.sin(b)*T,r[h*3+1]=Math.cos(b)*T,r[h*3+2]=Math.cos(y)*Math.sin(b)*T}o.attributes.position.needsUpdate=!0,o.attributes.position.setUsage(Se),o.computeVertexNormals();const d=new Float32Array(l*3);o.setAttribute("color",new ze(d,3)),o.attributes.color.setUsage(Se);const g=new Z({vertexColors:!0,transparent:!0,opacity:0,side:Pt,blending:te,depthWrite:!1,fog:!1}),x=new C(o,g);Ks.add(x),Vh.push({mesh:x,mat:g,geo:o,colorArr:d,posArr:r,vertCount:l,rows:a,segments:lc,phase:i*1.7+Math.sin(i*.8)*.5,speed:.15+i*.05+Math.sin(i*2.1)*.03,colorShift:i*1.1,elevation:p,arcStart:c,arcSpan:u,azimuthOffset:f})}ot.add(Ks)}let Io=0;function mS(i,t,e,n,s){if(!Ks)return;const o=s==="HEAVY_RAIN"||s==="LUMINOUS_STORM"||s==="FOG_BANK";let r=0;o||(e==="DEEP_NIGHT"?r=.25:e==="NIGHT"&&(r=.08));const a=r>Io?.2:.4;if(Io+=(r-Io)*a*i,Io<.005){Ks.visible=!1;return}Ks.visible=!0;const l=ns*.92;for(let u=0;u<Vh.length;u++){const c=Vh[u],p=c.colorArr,f=c.posArr,d=c.segments,g=c.rows;c.mat.opacity=Io*(.5+u*.05);for(let x=0;x<=d;x++){const h=x/d,m=Math.sin(h*6+t*c.speed+c.phase)*.5+.5,_=Math.sin(h*3-t*c.speed*.4+c.phase*1.3)*.5+.5,v=Math.sin(h*1.5+t*.07)*.5+.5,y=Math.sin(h*1.2+t*.05+c.phase*.7)*.5+.5,A=(m*.3+_*.25+v*.2+y*.25)*Io,E=(h*3+t*.08+c.colorShift)%Br.length,b=Math.floor(E),T=E-b,w=Br[b%Br.length],S=Br[(b+1)%Br.length],R=(w.r+(S.r-w.r)*T)*A,L=(w.g+(S.g-w.g)*T)*A,D=(w.b+(S.b-w.b)*T)*A,z=l*.025,H=Math.sin(h*5+t*.3+c.phase)*z+Math.sin(h*2.5-t*.15+c.phase*.6)*z*.5;for(let k=0;k<g;k++){const O=x*g+k,G=k/(g-1);let et;G<.33?et=G*1.2:G>.67?et=(1-G)*1.5:et=.7+Math.sin(G*Math.PI)*.3,p[O*3]=R*et,p[O*3+1]=L*et,p[O*3+2]=D*et,c.arcStart+h*c.arcSpan+c.azimuthOffset;const ct=(G-.5)*.05,ft=c.elevation+ct,Ct=H*(.3+G*.7);f[O*3+1]=Math.cos(ft)*l+Ct}}c.geo.attributes.color.needsUpdate=!0,c.geo.attributes.position.needsUpdate=!0}}const j={pos:new F(0,bl,0),vel:new F,onGround:!0};let xu=0,vu=0,Mm=0,Mu=65,L0=65,Gr=0,D0=!0,_u=0,_r=0,Wh=null,Xh=null,qh=null,U0=1;function gS(i,t,e){Wh=i,Xh=t,qh=e}let Yh=[],Zh=[],$h=null;function xS(i,t){Yh=i,Zh=t}function vS(i){$h=i}function MS(i){const t=Qw(),e=Ve.ShiftLeft||Ve.ShiftRight||Tr;j.vel.x=t.x,j.vel.z=t.z,j.vel.y-=ow*i,(Ve.Space||El)&&j.onGround&&(j.vel.y=Qc,j.onGround=!1,Kw(!1),Xh&&Xh()),j.onGround||(_u=j.vel.y),j.pos.x+=j.vel.x*i,j.pos.y+=j.vel.y*i,j.pos.z+=j.vel.z*i;const n=Dt(j.pos.x,j.pos.z)+bl;if(j.pos.y<=n){if(j.pos.y=n,j.vel.y=0,!D0&&_u<-3){const c=Math.min(Math.abs(_u)/Qc,1);Gr=c*.15,$h&&$h(j.pos.x,j.pos.z,Math.floor(3+c*5)),qh&&qh(c)}j.onGround=!0}D0=j.onGround,j.onGround?(j.vel.x*=S0,j.vel.z*=S0):(j.vel.x*=b0,j.vel.z*=b0);const s=.4;for(let c=0;c<Yh.length;c++){const p=Yh[c],f=j.pos.x-p.x,d=j.pos.z-p.z,g=f*f+d*d,x=.6+s;if(g<x*x&&g>.001){const h=1/Math.sqrt(g);j.pos.x=p.x+f*h*x,j.pos.z=p.z+d*h*x}}for(let c=0;c<Zh.length;c++){const p=Zh[c],f=j.pos.x-p.x,d=j.pos.z-p.z,g=f*f+d*d,x=p.colR+s;if(g<x*x&&g>.001){const h=1/Math.sqrt(g);j.pos.x=p.x+f*h*x,j.pos.z=p.z+d*h*x}}if(Math.sqrt(j.pos.x*j.pos.x+j.pos.z*j.pos.z)>jt){const c=Math.atan2(j.pos.z,j.pos.x);j.pos.x=Math.cos(c)*jt,j.pos.z=Math.sin(c)*jt}ga.position.copy(j.pos);const a=Math.sqrt(t.x*t.x+t.z*t.z)>.5&&j.onGround;a?_r=0:_r+=i,vu+=((a?e?.06:.035:0)-vu)*i*6,a&&(xu+=i*(e?12:8));const u=Math.sin(xu)*vu;if(a&&Wh){const c=Math.sin(xu)>=0?1:-1;U0>0&&c<0&&Wh(e),U0=c}L0=e&&a?78:65,Mu+=(L0-Mu)*i*4,bn.fov=Mu,bn.updateProjectionMatrix(),Gr*=Math.pow(.04,i),Gr<.001&&(Gr=0),Mm=u-Gr}function uc(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new Ae;let u=0;for(let c=0;c<i.length;++c){const p=i[c];let f=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in p.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(p.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in p.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(p.morphAttributes[d])}if(t){let d;if(e)d=p.index.count;else if(p.attributes.position!==void 0)d=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,d,c),u+=d}}if(e){let c=0;const p=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)p.push(d.getX(g)+c);c+=i[f].attributes.position.count}l.setIndex(p)}for(const c in o){const p=N0(o[c]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,p)}for(const c in r){const p=r[c][0].length;if(p===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let f=0;f<p;++f){const d=[];for(let x=0;x<r[c].length;++x)d.push(r[c][x][f]);const g=N0(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function N0(i){let t,e,n,s=-1,o=0;for(let u=0;u<i.length;++u){const c=i[u];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=c.count*e}const r=new t(o),a=new ze(r,e,n);let l=0;for(let u=0;u<i.length;++u){const c=i[u];if(c.isInterleavedBufferAttribute){const p=l/e;for(let f=0,d=c.count;f<d;f++)for(let g=0;g<e;g++){const x=c.getComponent(f,g);a.setComponent(f+p,g,x)}}else r.set(c.array,l);l+=c.count*e}return s!==void 0&&(a.gpuType=s),a}function z0(i,t,e){return i+(t-i)*e}let Lo=null;function _S(){if(Lo)return Lo;const i=256,t=512,e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,t);s.addColorStop(0,"#5a4030"),s.addColorStop(.3,"#4d3528"),s.addColorStop(.7,"#3a2a1e"),s.addColorStop(1,"#2e2015"),n.fillStyle=s,n.fillRect(0,0,i,t);for(let o=0;o<28;o++){const r=o/28*i+Math.sin(o*3.7)*6,a=2+Math.sin(o*2.1)*1.5,l=Math.sin(o*1.3+.5)*.5+.5,u=Math.floor(50+l*30),c=Math.floor(30+l*20),p=Math.floor(15+l*12);n.strokeStyle=`rgba(${u},${c},${p},0.4)`,n.lineWidth=a,n.beginPath();let f=0;for(n.moveTo(r,f);f<t;){f+=8+Math.random()*12;const d=Math.sin(f*.03+o)*3;n.lineTo(r+d,f)}n.stroke()}for(let o=0;o<18;o++){const r=o/18*i+Math.sin(o*5.3)*8;n.strokeStyle="rgba(20,12,6,0.35)",n.lineWidth=.8+Math.random()*1.2,n.beginPath();let a=Math.random()*40;for(n.moveTo(r,a);a<t;)a+=5+Math.random()*10,n.lineTo(r+Math.sin(a*.05+o*2)*4,a);n.stroke()}for(let o=0;o<30;o++){const r=o/30*t+Math.random()*10;n.strokeStyle=`rgba(${30+Math.random()*20},${18+Math.random()*12},${8+Math.random()*8},0.15)`,n.lineWidth=.5+Math.random()*1.5,n.beginPath(),n.moveTo(0,r);for(let a=0;a<i;a+=10)n.lineTo(a,r+Math.sin(a*.04+o)*2);n.stroke()}for(let o=0;o<5;o++){const r=Math.random()*i,a=50+Math.random()*(t-100),l=4+Math.random()*6,u=3+Math.random()*5,c=n.createRadialGradient(r,a,0,r,a,l);c.addColorStop(0,"rgba(15,8,4,0.5)"),c.addColorStop(.5,"rgba(30,18,10,0.3)"),c.addColorStop(1,"rgba(40,25,14,0)"),n.fillStyle=c,n.beginPath(),n.ellipse(r,a,l,u,0,0,Math.PI*2),n.fill()}for(let o=0;o<8;o++){const r=Math.random()*i;n.strokeStyle="rgba(34,136,85,0.08)",n.lineWidth=.5+Math.random()*.8,n.beginPath();let a=Math.random()*t*.3;n.moveTo(r,a);const l=30+Math.random()*80;for(;a<a+l&&a<t;)a+=4+Math.random()*6,n.lineTo(r+Math.sin(a*.08+o*2)*2,a);n.stroke()}return Lo=new Sa(e),Lo.wrapS=dr,Lo.wrapT=dr,Lo}const va=[{leaf:1332520,glow:2280567,core:4521898},{leaf:931880,glow:3390378,core:5636044},{leaf:1721376,glow:4508757,core:7864200},{leaf:1060912,glow:2267562,core:4513262},{leaf:1583172,glow:3377356,core:5618687}];let hc=null;function yS(){if(hc)return hc;const i=64,t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d"),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);return n.addColorStop(0,"rgba(68, 255, 136, 0.55)"),n.addColorStop(.25,"rgba(34, 204, 100, 0.35)"),n.addColorStop(.6,"rgba(20, 120, 60, 0.12)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=n,e.fillRect(0,0,i,i),hc=new Sa(t),hc}function wS(i,t){const e=new Gp({map:yS(),color:3394696,transparent:!0,opacity:.65,depthWrite:!1,blending:te}),n=new zx(e),s=i*.55;return n.scale.set(s*2.2,s*1.6,1),n.position.y=t+i*.6,n.visible=!1,ot.add(n),n}function SS(i){const t=new Jt,e=6+M()*10,n=.2+M()*.3,s=n*1.8,o=new C(new gt(n*.4,s,e,8));o.material=new q({color:5914672}),o.position.y=e/2,o.userData._cat="trunk",t.add(o);const r=2+Math.floor(M()*3);for(let v=0;v<r;v++){const y=v/r*6.28+M()*.5,A=e*.4+M()*e*.4,E=new C(new gt(.008,.015,A,3));E.material=new q({color:2263125}),E.position.set(Math.cos(y)*n*.74,e*.15+A/2,Math.sin(y)*n*.74),E.userData._cat="detail",t.add(E)}const a=new F(0,1,0),l=4+Math.floor(M()*4);for(let v=0;v<l;v++){const y=v/l*6.28+M()*.4,A=.8+M()*1.8,E=s*(.3+M()*.2),b=.03+M()*.03,T=-.25-M()*.25,w=Math.cos(y)*Math.cos(T),S=Math.sin(T),R=Math.sin(y)*Math.cos(T),L=new F(w,S,R).normalize(),D=new gt(b,E,A,5);D.translate(0,A/2,0);const z=new C(D,new q({color:4864040}));z.position.set(Math.cos(y)*s*.6,.05,Math.sin(y)*s*.6);const H=new Qe().setFromUnitVectors(a,L);if(z.quaternion.copy(H),z.userData._cat="trunk",t.add(z),M()<.6){const k=.4+M()*.3,O=y+(M()-.5)*1.2,G=.5+M()*1,et=new F(Math.cos(O)*Math.cos(-.1),Math.sin(-.1),Math.sin(O)*Math.cos(-.1)).normalize(),ct=new gt(.02,E*.3,G,4);ct.translate(0,G/2,0);const ft=new C(ct,new q({color:4864040})),Ct=new F(Math.cos(y)*s*.6+w*A*k,.05+S*A*k,Math.sin(y)*s*.6+R*A*k);ft.position.copy(Ct);const Wt=new Qe().setFromUnitVectors(a,et);ft.quaternion.copy(Wt),ft.userData._cat="trunk",t.add(ft)}else M(),M()}const u=va[i%va.length],c=new q({color:5914672}),p=new q({color:4863269}),f=new F(0,1,0);function d(v,y,A,E,b,T){const w=new gt(b,E,A,5);w.translate(0,A/2,0);const S=new C(w,T);S.position.copy(v);const R=y.clone().normalize(),L=new Qe().setFromUnitVectors(f,R);S.quaternion.copy(L),S.userData._cat="trunk",t.add(S)}function g(v,y,A,E){const b=3+Math.floor(M()*4),T=E*.45;for(let S=0;S<b;S++){const R=E*(.12+M()*.18),L=new C(new vr(R,1)),D=M()<.3;L.material=new q({color:D?u.core:u.leaf}),L.position.set(v+(M()-.5)*T*2,y+(M()-.3)*T*1.4,A+(M()-.5)*T*2),L.scale.set(.7+M()*.8,.5+M()*.9,.7+M()*.8),L.userData._cat="canopy",t.add(L)}const w=new C(new vr(E*.5,1));w.material=new q({color:u.glow}),w.position.set(v,y,A),w.scale.set(1+M()*.3,.7+M()*.4,1+M()*.3),w.userData._cat="glow",t.add(w)}const x=2+Math.floor(M()*2);for(let v=0;v<x;v++){const y=e*(.3+M()*.25),A=v/x*Math.PI*2+M()*1,E=.35+M()*.45,b=1+M()*1.8,T=n*.4,w=n*.08,S=Math.cos(A)*Math.cos(E),R=Math.sin(E),L=Math.sin(A)*Math.cos(E),D=new F(S,R,L),z=new F(Math.cos(A)*n*.95,y,Math.sin(A)*n*.95);if(d(z,D,b,T,w,c),M()<.4){const H=.4+M()*.8,k=new C(new gt(.008,.003,H,3));k.material=new q({color:2773040});const O=.4+M()*.4;k.position.set(z.x+S*b*O,z.y+R*b*O-H/2,z.z+L*b*O),k.userData._cat="detail",t.add(k)}else M(),M()}const h=5+Math.floor(M()*4);for(let v=0;v<h;v++){const y=e*(.55+M()*.37),A=v/h*Math.PI*2+M()*.5,E=.6+M()*.55,b=1.5+M()*3,T=n*.35,w=.03+M()*.02,S=Math.cos(A)*Math.cos(E),R=Math.sin(E),L=Math.sin(A)*Math.cos(E),D=new F(S,R,L),z=new F(Math.cos(A)*n*.95,y,Math.sin(A)*n*.95);d(z,D,b,T,w,c);const H=z.x+S*b,k=z.y+R*b,O=z.z+L*b,G=.8+M()*1.5;g(H,k,O,G);const et=1+Math.floor(M()*3);for(let ct=0;ct<et;ct++){const ft=.35+M()*.35,Ct=new F(z.x+S*b*ft,z.y+R*b*ft,z.z+L*b*ft),Wt=A+(M()-.5)*1.8,tt=.45+M()*.55,ut=.6+M()*1.4,yt=new F(Math.cos(Wt)*Math.cos(tt),Math.sin(tt),Math.sin(Wt)*Math.cos(tt));d(Ct,yt,ut,.04,.012,p);const mt=Ct.x+yt.x*ut,It=Ct.y+yt.y*ut,zt=Ct.z+yt.z*ut,Kt=.5+M()*.8;g(mt,It,zt,Kt)}if(M()<.3){const ct=.3+M()*.7,ft=new C(new gt(.008,.003,ct,3));ft.material=new q({color:2773040});const Ct=.5+M()*.3;ft.position.set(z.x+S*b*Ct,z.y+R*b*Ct-ct/2,z.z+L*b*Ct),ft.userData._cat="detail",t.add(ft)}else M(),M()}const m=Math.floor(M()*3);for(let v=0;v<m;v++){const y=1+M()*e*.4,A=M()*6.28,E=.08+M()*.08,b=new C(new Y(E,5,3));b.material=new q({color:5911840}),b.scale.set(1.5,.3,1),b.position.set(Math.cos(A)*n*.8,y,Math.sin(A)*n*.8),b.rotation.y=-A,b.userData._cat="detail",t.add(b)}const _=new C(new Y(2.5+M()*1.5,8,6));return _.material=new q({color:new st(N.leaf)}),_.position.y=e*.85,_.userData._cat="glow",t.add(_),t.userData.treeH=e,t}function bS(i,t){const e=gm();Fh(7919+t*1013+i*3571);const n=SS(i),s=n.userData.treeH;Fh(e),n.updateMatrixWorld(!0);const o=[],r=[],a=[],l=[],u=new st;for(let g=0;g<n.children.length;g++){const x=n.children[g];if(!x.isMesh)continue;let h=x.geometry.clone();if(x.updateMatrix(),h.applyMatrix4(x.matrix),h.index){const A=h.toNonIndexed();h.dispose(),h=A}const m=x.userData._cat||"trunk";m==="trunk"?u.set(16777215):u.copy(x.material.color);const v=h.attributes.position.count,y=new Float32Array(v*3);for(let A=0;A<v;A++)y[A*3]=u.r,y[A*3+1]=u.g,y[A*3+2]=u.b;if(h.setAttribute("color",new ze(y,3)),m==="trunk"){if(!h.attributes.uv){const A=new Float32Array(v*2);h.setAttribute("uv",new ze(A,2))}}else h.attributes.uv&&h.deleteAttribute("uv");m==="trunk"?o.push(h):m==="canopy"?r.push(h):m==="glow"?a.push(h):m==="detail"&&l.push(h),x.material.dispose()}const c=o.length>0?uc(o):null,p=r.length>0?uc(r):null,f=a.length>0?uc(a):null,d=l.length>0?uc(l):null;for(const g of o)g.dispose();for(const g of r)g.dispose();for(const g of a)g.dispose();for(const g of l)g.dispose();return{trunkGeo:c,canopyGeo:p,glowGeo:f,detailGeo:d,treeH:s,palIdx:i}}const Ue=new he,F0=new F(0,1,0),O0=new F,yu=new Qe,TS=new Qe,B0=new Qe,G0=new Qe,ES=.15;function Rc(i,t,e,n){O0.set(i,t,e),yu.setFromUnitVectors(F0,O0),yu.slerp(TS,1-ES),G0.setFromAxisAngle(F0,n),Ue.quaternion.copy(yu).multiply(G0)}function AS(i){const t=[];for(let e=0;e<i;e++){const n=e%va.length,s=Math.floor(e/va.length);t.push(bS(n,s))}return t}function RS(i,t,e){const n=[];for(let s=0;s<i.length;s++){const o=i[s],r=va[o.palIdx],a=_S(),l=new q({vertexColors:!0,map:a,roughness:.85,emissive:1708040,emissiveIntensity:.4}),u=o.trunkGeo?new jn(o.trunkGeo,l,e):null;u&&(u.instanceMatrix.setUsage(Se),u.count=0,ot.add(u));const c=new q({vertexColors:!0,roughness:.5,emissive:r.glow,emissiveIntensity:1.2,transparent:!0,opacity:.5,depthWrite:!1}),p=o.canopyGeo?new jn(o.canopyGeo,c,e):null;p&&(p.instanceMatrix.setUsage(Se),p.count=0,ot.add(p));const f=new q({vertexColors:!0,emissive:r.glow,emissiveIntensity:.4,transparent:!0,opacity:.15,depthWrite:!1}),d=o.glowGeo?new jn(o.glowGeo,f,e):null;d&&(d.instanceMatrix.setUsage(Se),d.count=0,ot.add(d));const g=new q({vertexColors:!0,emissive:r.glow,emissiveIntensity:.4}),x=o.detailGeo?new jn(o.detailGeo,g,e):null;x&&(x.instanceMatrix.setUsage(Se),x.count=0,ot.add(x)),n.push({trunk:u,canopy:p,glow:d,detail:x,trunkMat:l,canopyMat:c,glowMat:f,detailMat:g,instances:[],treeH:o.treeH})}for(let s=0;s<t.length;s++){const o=s%i.length,r=t[s],a=r.yRot,l=r.scale,u=Rl(r.x,r.z);Ue.position.set(r.x,r.y,r.z),Rc(u.x,u.y,u.z,a),Ue.scale.setScalar(l),Ue.updateMatrix();const c=n[o].instances.length;n[o].trunk&&n[o].trunk.setMatrixAt(c,Ue.matrix),n[o].canopy&&n[o].canopy.setMatrixAt(c,Ue.matrix),n[o].glow&&n[o].glow.setMatrixAt(c,Ue.matrix),n[o].detail&&n[o].detail.setMatrixAt(c,Ue.matrix),n[o].instances.push({x:r.x,z:r.z,y:r.y,yRot:a,scale:l,treeH:r.treeH||n[o].treeH,posIdx:s,nx:u.x,ny:u.y,nz:u.z})}for(let s=0;s<n.length;s++){const o=n[s].instances.length;n[s].trunk&&(n[s].trunk.count=o),n[s].canopy&&(n[s].canopy.count=o),n[s].glow&&(n[s].glow.count=o),n[s].detail&&(n[s].detail.count=0)}return n}function CS(i,t,e,n,s,o,r,a,l){for(let u=0;u<i.length;u++){const c=i[u];let p=0,f=0,d=0,g=0;for(let x=0;x<c.instances.length;x++){const h=c.instances[x],m=h.x-e,_=h.z-s,v=h.y+(h.treeH||10)*.4-n,y=m*m+v*v+_*_,A=h.posIdx,E=t[A];if(y>13225){E&&(E.visible=!1);continue}if(y>11025){if(E){const b=Math.sqrt(y);E.visible=!0,E.material.opacity=z0(.65,0,(b-105)/10)}continue}if(y>5625){E&&(E.visible=!0,E.material.opacity=.65);continue}if(y>3969){const T=(Math.sqrt(y)-63)/12;E&&(E.visible=!0,E.material.opacity=z0(0,.65,T)),Ue.position.set(h.x,h.y,h.z),Rc(h.nx,h.ny,h.nz,h.yRot),Ue.scale.setScalar(h.scale),Ue.updateMatrix(),c.trunk&&c.trunk.setMatrixAt(p++,Ue.matrix),c.canopy&&c.canopy.setMatrixAt(f++,Ue.matrix),c.glow&&c.glow.setMatrixAt(d++,Ue.matrix);continue}if(E&&(E.visible=!1),Ue.position.set(h.x,h.y,h.z),Ue.scale.setScalar(h.scale),y<400){const b=h.x*.1+h.z*.13;Rc(h.nx,h.ny,h.nz,h.yRot);const T=Math.sin(o*.25+b+1)*.003*r+l*.15,w=Math.sin(o*.3+b)*.004*r+a*.15;B0.set(T*.5,0,w*.5,1).normalize(),Ue.quaternion.multiply(B0),Ue.updateMatrix(),c.detail&&c.detail.setMatrixAt(g++,Ue.matrix)}else Rc(h.nx,h.ny,h.nz,h.yRot),Ue.updateMatrix();c.trunk&&c.trunk.setMatrixAt(p++,Ue.matrix),c.canopy&&c.canopy.setMatrixAt(f++,Ue.matrix),c.glow&&c.glow.setMatrixAt(d++,Ue.matrix)}c.trunk&&(c.trunk.count=p,c.trunk.instanceMatrix.needsUpdate=!0),c.canopy&&(c.canopy.count=f,c.canopy.instanceMatrix.needsUpdate=!0),c.glow&&(c.glow.count=d,c.glow.instanceMatrix.needsUpdate=!0),c.detail&&(c.detail.count=g,c.detail.instanceMatrix.needsUpdate=!0)}}function PS(i,t){const e=new Jt,n=.4+M()*1.2,s=M()*6.28,o=.8+M()*1.5,r=.5+M()*.8,a=new C(Bn.mushStem,new q({color:N.mushStem,roughness:.7,emissive:N.mushGlow,emissiveIntensity:.1}));a.position.y=.3,e.add(a);const l=new q({color:N.mushStem,emissive:N.mushGlow,emissiveIntensity:.15,roughness:.6}),u=new C(new Pe(.09,.012,4,8),l);u.position.y=.42,u.rotation.x=Math.PI/2,e.add(u);const c=new q({color:N.mushCap,emissive:N.mushGlow,emissiveIntensity:r,roughness:.3,transparent:!0,opacity:.9}),p=new C(Bn.mushCap,c);p.scale.set(1,.5,1),p.position.y=.55,p.castShadow=!0,p.receiveShadow=!0,e.add(p);const f=new q({color:6693546,emissive:N.mushGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,side:Pt});for(let S=0;S<8;S++){const R=S/8*6.28,L=new C(new ue(.35,.08),f);L.position.set(Math.cos(R)*.15,.48,Math.sin(R)*.15),L.rotation.y=-R,L.rotation.x=.1,e.add(L)}for(let S=0;S<4;S++){const R=new Z({color:16777215,transparent:!0,opacity:.9}),L=new C(Bn.mushDot,R),D=M()*6.28,z=.15+M()*.25;L.position.set(Math.cos(D)*z,.6+M()*.1,Math.sin(D)*z),e.add(L)}const d=new q({color:15663103,emissive:11197951,emissiveIntensity:.2,transparent:!0,opacity:.6,roughness:0,metalness:.5}),g=2+Math.floor(M()*2);for(let S=0;S<g;S++){const R=new C(new Y(.015+M()*.015,4,3),d),L=M()*6.28,D=.1+M()*.2;R.position.set(Math.cos(L)*D,.63+M()*.08,Math.sin(L)*D),e.add(R)}const x=new q({color:4465322,emissive:N.mushGlow,emissiveIntensity:.15,transparent:!0,opacity:.35});for(let S=0;S<4;S++){const R=M()*6.28,L=.15+M()*.25,D=new C(new gt(.004,.002,L,3),x);D.position.set(Math.cos(R)*.12,.01,Math.sin(R)*.12),D.rotation.z=1.3*(R<3.14?1:-1),D.rotation.y=R,e.add(D)}const h=new q({color:N.mushCap,emissive:N.mushGlow,emissiveIntensity:r*.6,transparent:!0,opacity:.4}),m=new C(new Pe(.38,.01,4,12),h);m.position.y=.49,m.rotation.x=Math.PI/2,e.add(m);const _=new q({color:N.mushStem,emissive:N.mushGlow,emissiveIntensity:.08,roughness:.7}),v=new C(new Y(.08,5,3),_);v.scale.set(1,.5,1),v.position.y=.04,e.add(v);const y=new q({color:1708040,roughness:.95});for(let S=0;S<3;S++){const R=M()*6.28,L=.1+M()*.12,D=new C(new Y(.008+M()*.008,3,3),y);D.position.set(Math.cos(R)*L,.005,Math.sin(R)*L),e.add(D)}const A=new Z({color:N.mushGlow,transparent:!0,opacity:.2});for(let S=0;S<4;S++){const R=new C(new Y(.006,3,3),A);R.position.set((M()-.5)*.2,.35+M()*.1,(M()-.5)*.2),e.add(R)}const E=new q({color:11167453,emissive:N.mushGlow,emissiveIntensity:r*.3,roughness:.5}),b=3+Math.floor(M()*3);for(let S=0;S<b;S++){const R=M()*6.28,L=M()*.25,D=new C(new Y(.015+M()*.015,3,3),E);D.position.set(Math.cos(R)*L,.58+M()*.06,Math.sin(R)*L),e.add(D)}const T=new q({color:657416,transparent:!0,opacity:.2,roughness:.95,side:Pt}),w=new C(new He(.18,8),T);return w.rotation.x=-Math.PI/2,w.position.y=.005,e.add(w),e.scale.setScalar(n),e.position.set(i,0,t),ot.add(e),{group:e,capMat:c,phase:s,speed:o,base:r,x:i,z:t}}function IS(i,t){const e=new Jt,n=M()*6.28,s=new q({color:N.crystal,emissive:N.crystalCore,emissiveIntensity:1.5,transparent:!0,opacity:.7,roughness:.1,metalness:.5}),o=new C(Bn.crystal,s);o.position.y=.9,o.castShadow=!0,e.add(o);for(let v=0;v<3;v++){const y=new C(Bn.crystalSm,s),A=v/3*6.28+M()*.5;y.position.set(Math.cos(A)*.4,.45,Math.sin(A)*.4),y.rotation.z=(M()-.5)*.8,y.castShadow=!0,e.add(y)}const r=new q({color:1710626,roughness:.9,metalness:.1}),a=3+Math.floor(M()*3);for(let v=0;v<a;v++){const y=M()*6.28,A=.2+M()*.5,E=.08+M()*.12,b=new C(new Y(E,4,3),r);b.scale.set(1+M()*.5,.5+M()*.4,1+M()*.5),b.position.set(Math.cos(y)*A,E*.3,Math.sin(y)*A),b.rotation.set(M(),M(),M()),e.add(b)}const l=new Z({color:N.crystalCore,transparent:!0,opacity:.5});for(let v=0;v<3;v++){const y=.4+M()*.8,A=new C(new gt(.008,.008,y,3),l);A.position.set((M()-.5)*.15,.5+M()*.7,(M()-.5)*.15),A.rotation.set((M()-.5)*.8,(M()-.5)*.5,(M()-.5)*.8),e.add(A)}const u=new Z({color:11206638,transparent:!0,opacity:.6});for(let v=0;v<5;v++){const y=new C(new Y(.012,3,3),u);y.position.set((M()-.5)*1,.3+M()*1.5,(M()-.5)*1),e.add(y)}const c=new q({color:N.crystal,emissive:N.crystalCore,emissiveIntensity:.8,transparent:!0,opacity:.5});for(let v=0;v<4;v++){const y=M()*6.28,A=.3+M()*.3,E=new C(new gt(0,.015,.12+M()*.1,3),c);E.position.set(Math.cos(y)*A,.06+M()*.1,Math.sin(y)*A),E.rotation.z=(M()-.5)*.6,e.add(E)}const p=new q({color:3364198,emissive:1122867,emissiveIntensity:.05,roughness:.9,side:Pt});for(let v=0;v<2;v++){const y=M()*6.28,A=.2+M()*.3,E=new C(new He(.04+M()*.03,5),p);E.rotation.x=-Math.PI/2+M()*.4,E.position.set(Math.cos(y)*A,.05,Math.sin(y)*A),e.add(E)}const f=new Z({color:N.crystalCore,transparent:!0,opacity:.2});for(let v=0;v<2;v++){const y=new C(new gt(.003,.003,.6+M()*.4,3),f);y.position.set((M()-.5)*.3,.7+M()*.5,(M()-.5)*.3),y.rotation.set((M()-.5)*1,M(),(M()-.5)*1),e.add(y)}const d=new q({color:1135940,emissive:1127202,emissiveIntensity:.3,transparent:!0,opacity:.25});for(let v=0;v<4;v++){const y=new C(new Y(.02+M()*.02,3,3),d);y.position.set((M()-.5)*.15,.4+M()*.6,(M()-.5)*.15),e.add(y)}const g=new Z({color:11206638,transparent:!0,opacity:.06}),x=new C(new Pe(.35,.02,4,10),g);x.position.y=.6,x.rotation.x=Math.PI/2+M()*.3,e.add(x);const h=new Z({color:N.crystal,transparent:!0,opacity:.06,side:Pt}),m=new C(new He(.8,8),h);m.rotation.x=-Math.PI/2,m.position.y=.01,e.add(m),e.position.set(i,0,t),ot.add(e);const _=new Sr(N.crystal,.5,8);return _.position.set(i,1.2,t),ot.add(_),{group:e,mat:s,phase:n,x:i,z:t,light:_}}const Nn={uTime:{value:0},uWindAmp:{value:1},uWindLeanX:{value:0},uWindLeanZ:{value:0},uPlayerX:{value:0},uPlayerZ:{value:0},uGlowMult:{value:1}};function LS(i,t,e,n,s,o,r){Nn.uTime.value=i,Nn.uWindAmp.value=t,Nn.uWindLeanX.value=e,Nn.uWindLeanZ.value=n,Nn.uPlayerX.value=s,Nn.uPlayerZ.value=o,r!==void 0&&(Nn.uGlowMult.value=r)}function DS(i,t,e,n,s){const o=new Ae,r=[],a=[],l=[],u=n||20,c=new st(s?s[0]:663568),p=new st(s?s[1]:1388056),f=new st(s?s[2]:2777141),d=new st(s?s[3]:4517461),g=new st(s?s[4]:7864268),x=new st(s?s[5]:14548838),h=new st,m=Dt(i,t);for(let w=0;w<u;w++){const S=M()*6.28,R=M()*e,L=Math.cos(S)*R,D=Math.sin(S)*R,z=Dt(i+L,t+D)-m,H=.25+M()*.65,k=.03+M()*.05,O=(M()-.5)*.2,G=(M()-.5)*.2,et=(M()-.5)*.12,ct=M()<.5?c:p,ft=M(),Ct=ft<.4?d:ft<.7?g:x,Wt=H*.35,tt=H*.7,ut=O*.3,yt=O*.7,mt=G*.3,It=G*.7;r.push(L-k,z+.01,D),r.push(L+k,z+.01,D),r.push(L+ut-k*.9,z+Wt,D+mt),l.push(0,0,.35),a.push(ct.r,ct.g,ct.b,ct.r,ct.g,ct.b),h.copy(ct).lerp(f,.4),a.push(h.r,h.g,h.b),r.push(L+k,z+.01,D),r.push(L+ut+k*.9,z+Wt,D+mt),r.push(L+ut-k*.9,z+Wt,D+mt),l.push(0,.35,.35),a.push(ct.r,ct.g,ct.b),h.copy(ct).lerp(f,.4),a.push(h.r,h.g,h.b,h.r,h.g,h.b);const zt=k*.65;r.push(L+ut-k*.9,z+Wt,D+mt),r.push(L+ut+k*.9,z+Wt,D+mt),r.push(L+yt-zt,z+tt,D+It+et),l.push(.35,.35,.7),h.copy(ct).lerp(f,.4),a.push(h.r,h.g,h.b,h.r,h.g,h.b),h.copy(f).lerp(Ct,.3),a.push(h.r,h.g,h.b),r.push(L+ut+k*.9,z+Wt,D+mt),r.push(L+yt+zt,z+tt,D+It+et),r.push(L+yt-zt,z+tt,D+It+et),l.push(.35,.7,.7),h.copy(ct).lerp(f,.4),a.push(h.r,h.g,h.b),h.copy(f).lerp(Ct,.3),a.push(h.r,h.g,h.b,h.r,h.g,h.b),r.push(L+yt-zt,z+tt,D+It+et),r.push(L+yt+zt,z+tt,D+It+et),r.push(L+O+et*2,z+H,D+G+et*1.5),l.push(.7,.7,1),h.copy(f).lerp(Ct,.3),a.push(h.r,h.g,h.b,h.r,h.g,h.b),a.push(Ct.r,Ct.g,Ct.b)}const _=new st(s?s[6]:1725736),v=new st(s?s[7]:3385941),y=Math.floor(u*.3);for(let w=0;w<y;w++){const S=M()*6.28,R=M()*e*.9,L=Math.cos(S)*R,D=Math.sin(S)*R,z=Dt(i+L,t+D)-m,H=.02+M()*.03;r.push(L-H,z+.01,D),r.push(L+H,z+.01,D),r.push(L,z+.03+M()*.02,D+H),l.push(0,0,.05),a.push(_.r,_.g,_.b),a.push(_.r,_.g,_.b),a.push(v.r,v.g,v.b)}o.setAttribute("position",new Vt(r,3)),o.setAttribute("color",new Vt(a,3)),o.setAttribute("bladeHeight",new Vt(l,1)),o.computeVertexNormals();const A=new q({vertexColors:!0,roughness:.7,side:Pt,emissive:s?s[8]:4521830,emissiveIntensity:.35}),E=i,b=t;A.onBeforeCompile=w=>{w.uniforms.uTime=Nn.uTime,w.uniforms.uWindAmp=Nn.uWindAmp,w.uniforms.uWindLeanX=Nn.uWindLeanX,w.uniforms.uWindLeanZ=Nn.uWindLeanZ,w.uniforms.uPlayerX=Nn.uPlayerX,w.uniforms.uPlayerZ=Nn.uPlayerZ,w.uniforms.uGlowMult=Nn.uGlowMult,w.uniforms.uPatchX={value:E},w.uniforms.uPatchZ={value:b},w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
      attribute float bladeHeight;
      uniform float uTime;
      uniform float uWindAmp;
      uniform float uWindLeanX;
      uniform float uWindLeanZ;
      uniform float uPlayerX;
      uniform float uPlayerZ;
      uniform float uPatchX;
      uniform float uPatchZ;
      varying float vGlow;
      `),w.vertexShader=w.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
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

        // Proximity glow (6m radius, quadratic falloff)
        vGlow = pd2 < 36.0 ? (1.0 - sqrt(pd2) / 6.0) * hFrac : 0.0;
        vGlow *= vGlow;
      } else {
        vGlow = 0.0;
      }
      `),w.fragmentShader=w.fragmentShader.replace("#include <common>",`#include <common>
      varying float vGlow;
      uniform float uGlowMult;
      `),w.fragmentShader=w.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      totalEmissiveRadiance *= (1.0 + vGlow * 10.0) * uGlowMult;
      `)};const T=new C(o,A);return T.position.set(i,0,t),ot.add(T),{mesh:T,geo:o,cx:i,cz:t}}function US(i,t){const e=new Jt,n=new q({color:N.fern,emissive:N.fernGlow,emissiveIntensity:.2,roughness:.7,side:Pt}),s=3+Math.floor(M()*2),o=.5+M()*.7,r=new q({color:1708552,roughness:.95}),a=new C(new Y(.06,5,3),r);a.scale.set(1.5,.5,1.5),a.position.y=.02,e.add(a);for(let m=0;m<3;m++){const _=M()*6.28,v=new C(new gt(.003,.002,.08,3),r);v.position.set(Math.cos(_)*.06,.01,Math.sin(_)*.06),v.rotation.z=(_<3.14?1:-1)*1.2,v.rotation.y=_,e.add(v)}for(let m=0;m<s;m++){const _=m/s*6.28+M()*.3,v=new C(new gt(.004,.006,.55,3),new q({color:1721632,roughness:.8}));v.position.set(Math.cos(_)*.15,.25,Math.sin(_)*.15),v.rotation.y=-_,v.rotation.x=-.6-M()*.4,e.add(v);const y=new C(new ue(.12,.6,1,3),n);y.position.set(Math.cos(_)*.15,.25,Math.sin(_)*.15),y.rotation.y=-_,y.rotation.x=-.6-M()*.4,e.add(y);for(let E=0;E<6;E++){const b=new C(new ue(.07,.06,1,1),n),T=.06+E*.08,w=E%2===0?1:-1;b.position.set(Math.cos(_)*(.15+.06),T,Math.sin(_)*(.15+.06*w)),b.rotation.y=-_,b.rotation.x=-.8,b.rotation.z=w*.5,e.add(b)}const A=new q({color:8939042,emissive:4469521,emissiveIntensity:.1});for(let E=0;E<3;E++){const b=new C(new Y(.008,3,3),A),T=.12+E*.12;b.position.set(Math.cos(_)*(.15+.02),T-.01,Math.sin(_)*(.15+.02)),e.add(b)}}const l=new q({color:N.fernGlow,emissive:N.fernGlow,emissiveIntensity:.3}),u=new C(new Y(.04,4,3),l);u.position.y=.35,e.add(u);const c=new C(new gt(.006,.003,.06,3),l);c.position.set(.02,.37,0),c.rotation.z=-.8,e.add(c);const p=new q({color:15663103,emissive:8960989,emissiveIntensity:.1,transparent:!0,opacity:.5,roughness:0,metalness:.5});for(let m=0;m<3;m++){const _=M()*6.28,v=M()*.2,y=new C(new Y(.006+M()*.005,3,3),p);y.position.set(Math.cos(_)*v,.12+M()*.2,Math.sin(_)*v),e.add(y)}const f=new q({color:3811856,roughness:.9,side:Pt,transparent:!0,opacity:.6}),d=new C(new ue(.1,.4,1,2),f),g=M()*6.28;d.position.set(Math.cos(g)*.12,.05,Math.sin(g)*.12),d.rotation.x=-1.3,d.rotation.y=g,e.add(d);const x=new Z({color:2768928,transparent:!0,opacity:.3});for(let m=0;m<4;m++){const _=new C(new gt(.001,.001,.015,3),x);_.position.set((M()-.5)*.08,.08+M()*.15,(M()-.5)*.08),_.rotation.z=(M()-.5)*1.5,e.add(_)}const h=new q({color:1708552,roughness:.95});for(let m=0;m<3;m++){const _=new C(new Y(.006,3,3),h);_.position.set((M()-.5)*.1,.005,(M()-.5)*.1),e.add(_)}return e.scale.setScalar(o),e.position.set(i,0,t),ot.add(e),{group:e,phase:M()*6.28}}function NS(i,t){const e=new Jt,n=.25+M()*.4,s=new q({color:N.flowerStem,roughness:.8}),o=new C(new gt(.01,.015,n,4),s);o.position.y=n/2,e.add(o);for(let T=0;T<2;T++){const w=new C(new Dn(.004,.012,3),s);w.position.set(.012,n*.25+T*n*.25,0),w.rotation.z=-1.2,e.add(w)}const r=new q({color:N.fern,roughness:.7,side:Pt}),a=new C(new ue(.06,.04),r);a.position.set(.03,n*.3,0),a.rotation.z=-.5,e.add(a);const l=new C(new ue(.05,.035),r);l.position.set(-.025,n*.5,.01),l.rotation.z=.6,e.add(l);const u=new q({color:1728560,roughness:.7,side:Pt});for(let T=0;T<5;T++){const w=T/5*6.28+.3,S=new C(new ue(.025,.02),u);S.position.set(Math.cos(w)*.025,n-.005,Math.sin(w)*.025),S.rotation.x=-1.2,S.rotation.y=-w,e.add(S)}const c=new q({color:N.flower,emissive:N.flowerGlow,emissiveIntensity:.4+M()*.4,transparent:!0,opacity:.85,side:Pt});for(let T=0;T<6;T++){const w=T/6*6.28,S=new C(new ue(.05,.04),c);S.position.set(Math.cos(w)*.03,n+.01,Math.sin(w)*.03),S.rotation.x=-.8,S.rotation.y=-w,e.add(S)}const p=new q({color:16777215,emissive:N.flowerGlow,emissiveIntensity:1.2}),f=new C(new Y(.02,4,3),p);f.position.y=n+.02,e.add(f);const d=new Z({color:16777130,transparent:!0,opacity:.7}),g=new Z({color:16772676});for(let T=0;T<3;T++){const w=T/3*6.28+.5,S=new C(new gt(.002,.002,.025,3),d);S.position.set(Math.cos(w)*.012,n+.03,Math.sin(w)*.012),e.add(S);const R=new C(new Y(.005,3,3),g);R.position.set(Math.cos(w)*.012,n+.045,Math.sin(w)*.012),e.add(R)}const x=new Z({color:16777164,transparent:!0,opacity:.3});for(let T=0;T<2;T++){const w=new C(new Y(.006,3,3),x);w.position.set((M()-.5)*.04,n+.06+M()*.04,(M()-.5)*.04),e.add(w)}const h=new q({color:16772778,emissive:16768324,emissiveIntensity:.2,transparent:!0,opacity:.5,roughness:0,metalness:.4}),m=new C(new Y(.006,3,3),h);m.position.set(.005,n+.005,.005),e.add(m);const _=new Z({color:15662984}),v=new C(new gt(.002,.002,.03,3),_);v.position.y=n+.035,e.add(v);const y=new C(new Y(.005,3,3),_);y.position.y=n+.055,e.add(y);const A=new q({color:1725728,roughness:.7}),E=new C(new gt(.015,.02,.02,5),A);E.position.y=n-.01,e.add(E);const b=new Z({color:16777215,transparent:!0,opacity:.35});for(let T=0;T<4;T++){const w=T/4*6.28+.3,S=new C(new Y(.004,3,3),b);S.position.set(Math.cos(w)*.045,n+.005,Math.sin(w)*.045),e.add(S)}return e.position.set(i,0,t),ot.add(e),{group:e,petalMat:c,phase:M()*6.28,baseH:n}}function zS(i,t){const e=new Jt,n=new q({color:N.reed,emissive:N.reedTip,emissiveIntensity:.15,roughness:.7}),s=new q({color:N.reedTip,emissive:N.reedTip,emissiveIntensity:.35}),o=new q({color:1709328,roughness:.95}),r=new C(new Y(.08,5,3),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=3+Math.floor(M()*4),l=new q({color:N.reed,roughness:.7,side:Pt});for(let d=0;d<a;d++){const g=.6+M()*1,x=(M()-.5)*.2,h=(M()-.5)*.2,m=new C(new gt(.008,.015,g,4),n);m.position.set(x,g/2,h),e.add(m);const _=2+Math.floor(M()*2),v=new q({color:2771488,roughness:.7});for(let E=0;E<_;E++){const b=g*.2+E*g*.25,T=new C(new Pe(.012,.004,4,6),v);T.position.set(x,b,h),T.rotation.x=Math.PI/2,e.add(T)}if(M()<.7){const E=.1+M()*.15,b=M()*6.28,T=new C(new ue(.02,E),l);T.position.set(x+Math.cos(b)*.02,g*.4,h+Math.sin(b)*.02),T.rotation.y=-b,T.rotation.x=-.5-M()*.4,e.add(T)}const y=new C(new Y(.025,4,3),s);y.scale.set(.8,1.5,.8),y.position.set(x,g+.02,h),e.add(y);const A=new Z({color:N.reedTip,transparent:!0,opacity:.4});for(let E=0;E<3;E++){const b=E/3*6.28+M()*.5,T=new C(new gt(.002,.001,.04,3),A);T.position.set(x+Math.cos(b)*.015,g+.05,h+Math.sin(b)*.015),T.rotation.z=(M()-.5)*.4,e.add(T)}}e.position.set(i,0,t),ot.add(e);const u=new q({color:4864536,roughness:.9,side:Pt,transparent:!0,opacity:.5});for(let d=0;d<2;d++){M()*6.28;const g=(M()-.5)*.15,x=new C(new ue(.025,.02),u);x.position.set(g,.2+d*.25,(M()-.5)*.1),x.rotation.set(M()*.5,M(),M()*.5),e.add(x)}const c=new Z({color:15654348,transparent:!0,opacity:.25});for(let d=0;d<3;d++){const g=new C(new Y(.005,3,3),c);g.position.set((M()-.5)*.15,.8+M()*.6,(M()-.5)*.15),e.add(g)}const p=new q({color:2241312,roughness:.9,transparent:!0,opacity:.2}),f=new C(new Pe(.1,.008,4,8),p);return f.rotation.x=Math.PI/2,f.position.y=.03,e.add(f),{group:e,phase:M()*6.28,swayAmp:.03+M()*.04}}let Tn=null;const er=[],vn=new he,rl=new st,_m=new st(N.dandSeed);function FS(i){const t=new Z({color:16777215,transparent:!0,opacity:1});Tn=new jn(Bn.dandSeed,t,i),Tn.instanceMatrix.setUsage(Se),Tn.instanceColor=new Ni(new Float32Array(i*3),3),Tn.instanceColor.setUsage(Se),vn.scale.setScalar(0),vn.updateMatrix();for(let e=0;e<i;e++)Tn.setMatrixAt(e,vn.matrix),rl.copy(_m),Tn.setColorAt(e,rl),er.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,drift:0});Tn.count=i,Tn.frustumCulled=!1,ot.add(Tn)}function ym(i,t,e){let n=null;for(let o=0;o<er.length;o++)if(!er[o].active){n=er[o];break}if(!n)return;n.x=i+(Math.random()-.5)*.1,n.y=t,n.z=e+(Math.random()-.5)*.1;const s=Math.random()*6.28;n.vx=Math.cos(s)*.5+Math.random()*.3,n.vy=.6+Math.random()*.8,n.vz=Math.sin(s)*.5,n.life=4+Math.random()*5,n.max=n.life,n.active=!0,n.drift=Math.random()*6.28}let wm=0,Sm=0,bm=0;function OS(i,t,e){wm=i,Sm=t,bm=e}function BS(i,t){let e=!1;for(let n=0;n<er.length;n++){const s=er[n];if(!s.active){vn.position.set(0,-100,0),vn.scale.setScalar(0),vn.updateMatrix(),Tn.setMatrixAt(n,vn.matrix);continue}if(s.life-=i,s.life<=0){s.active=!1,vn.position.set(0,-100,0),vn.scale.setScalar(0),vn.updateMatrix(),Tn.setMatrixAt(n,vn.matrix);continue}s.drift+=(Math.random()-.5)*1.5*i,s.vx+=Math.sin(s.drift)*.3*i,s.vz+=Math.cos(s.drift)*.2*i,s.vx+=wm*.5*i,s.vz+=Sm*.5*i,s.vy+=(.15+bm*.1-s.vy)*i*.5,s.vx*=.998,s.vy*=.998,s.vz*=.998,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i;const r=s.life/s.max*.7*(.6+Math.sin(t*2+n)*.4),a=.8+Math.sin(t*3+n*.5)*.3;vn.position.set(s.x,s.y,s.z),vn.scale.setScalar(a),vn.updateMatrix(),Tn.setMatrixAt(n,vn.matrix),rl.copy(_m).multiplyScalar(r),Tn.setColorAt(n,rl),e=!0}Tn.instanceMatrix.needsUpdate=!0,e&&(Tn.instanceColor.needsUpdate=!0)}function GS(i,t){const e=new Jt,n=.35+M()*.45,s=new q({color:2777128,roughness:.7,side:Pt}),o=3+Math.floor(M()*2);for(let v=0;v<o;v++){const y=v/o*6.28+M()*.3,A=new C(new ue(.08,.035),s);A.position.set(Math.cos(y)*.05,.02,Math.sin(y)*.05),A.rotation.x=-1.4,A.rotation.y=-y,e.add(A)}const r=new q({color:N.dandStem,roughness:.8}),a=new C(new gt(.008,.012,n,4),r);a.position.y=n/2,e.add(a);const l=new Z({color:14540236,transparent:!0,opacity:.3});for(let v=0;v<4;v++){const y=n*.2+v*n*.18,A=new C(new gt(.002,.001,.02,3),l);A.position.set(.01,y,0),A.rotation.z=-.8,e.add(A)}const u=new q({color:N.fern,roughness:.7,side:Pt}),c=new C(new ue(.07,.03),u);c.position.set(.03,n*.15,0),c.rotation.z=-.4,e.add(c);const p=new q({color:N.dandHead,emissive:N.dandSeedGlow,emissiveIntensity:.2,transparent:!0,opacity:.85}),f=new C(new Y(.07,6,5),p);f.position.y=n+.05,e.add(f);const d=new q({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.5,roughness:0,metalness:.5}),g=new C(new Y(.012,4,3),d);g.position.set(.04,n+.07,.03),e.add(g);const x=new Z({color:N.dandSeed,transparent:!0,opacity:.7});for(let v=0;v<8;v++){const y=v/8*6.28+M()*.2,A=new C(new Dn(.015,.05,3),x);A.position.set(Math.cos(y)*.06,n+.05+M()*.04,Math.sin(y)*.06),A.rotation.x=(M()-.5)*.6,A.rotation.z=(M()-.5)*.6,e.add(A);const E=new Z({color:16777215,transparent:!0,opacity:.3}),b=new C(new gt(.001,.001,.03,3),E);b.position.set(Math.cos(y)*.08,n+.08,Math.sin(y)*.08),b.rotation.set((M()-.5)*.5,0,(M()-.5)*.5),e.add(b);const T=new Z({color:15658717,transparent:!0,opacity:.15});for(let w=0;w<2;w++){const S=y+(w-.5)*.5,R=new C(new gt(8e-4,8e-4,.025,3),T);R.position.set(Math.cos(S)*.075,n+.09,Math.sin(S)*.075),R.rotation.set((M()-.5)*.8,0,(M()-.5)*.8),e.add(R)}}const h=new q({color:3811856,roughness:.9});for(let v=0;v<4;v++){const y=v/4*6.28+M()*.5,A=new C(new Y(.005,3,3),h);A.scale.set(.6,1.5,.6),A.position.set(Math.cos(y)*.04,n+.04,Math.sin(y)*.04),e.add(A)}const m=new Z({color:1716240,transparent:!0,opacity:.15});for(let v=0;v<3;v++){const y=v/3*6.28,A=new C(new gt(.001,.001,n*.7,3),m);A.position.set(Math.cos(y)*.01,n*.35,Math.sin(y)*.01),e.add(A)}const _=new Z({color:13426107,transparent:!0,opacity:.2});for(let v=0;v<5;v++){const y=n*.1+M()*n*.7,A=M()*6.28,E=new C(new gt(8e-4,8e-4,.012,3),_);E.position.set(Math.cos(A)*.012,y,Math.sin(A)*.012),E.rotation.z=A<3.14?-.8:.8,E.rotation.y=A,e.add(E)}return e.position.set(i,0,t),ot.add(e),{group:e,headMat:p,x:i,z:t,h:n,dispersed:!1,phase:M()*6.28,seedCount:8,regrowTimer:0}}function kS(i,t,e,n){for(let s=0;s<i.length;s++){const o=i[s];if(o.dispersed){if(o.regrowTimer-=t,o.regrowTimer<=0){o.dispersed=!1;for(let r=2;r<o.group.children.length;r++)o.group.children[r].visible=!0}o.group.rotation.z=Math.sin(e*.9+o.phase)*.02}else{const r=o.x-n.x,a=o.z-n.z;if(r*r+a*a<1.2){o.dispersed=!0;for(let l=0;l<8;l++)ym(o.x,o.h+.05,o.z);for(let l=2;l<o.group.children.length;l++)o.group.children[l].visible=!1;o.regrowTimer=15+Math.random()*10}else o.group.rotation.z=Math.sin(e*.9+o.phase)*.04,o.headMat.emissiveIntensity=.15+Math.sin(e*1.2+o.phase)*.1}}}function HS(i,t){const e=new Jt,n=1+M()*.8,s=.25+M()*.15,o=new q({color:N.thornStem,roughness:.8,emissive:662032,emissiveIntensity:.1}),r=new C(new gt(.04,.07,n,5),o);r.position.y=n/2,e.add(r);const a=new q({color:N.thornSpike,roughness:.6}),l=4+Math.floor(M()*3);for(let y=0;y<l;y++){const A=n*.15+y/l*n*.6,E=y/l*6.28+M()*1,b=new C(new Dn(.015,.08+M()*.04,3),a);b.position.set(Math.cos(E)*.06,A,Math.sin(E)*.06),b.rotation.z=(E<3.14?1.3:-1.3)+M()*.2,b.rotation.y=E,e.add(b)}const u=new q({color:N.thornOrb,emissive:N.thornOrbGlow,emissiveIntensity:.8,transparent:!0,opacity:.35,roughness:.1,metalness:.3}),c=new C(new Y(s,12,10),u);c.position.y=n+s*.5,e.add(c);const p=new q({color:16777164,emissive:N.thornOrbGlow,emissiveIntensity:1.2,transparent:!0,opacity:.6,roughness:0,metalness:.1}),f=new C(new Y(s*.35,8,6),p);f.position.y=n+s*.5,e.add(f);const d=new Z({color:N.thornOrbGlow,transparent:!0,opacity:.06,blending:te,depthWrite:!1}),g=new C(new Y(s*2,8,6),d);g.position.y=n+s*.5,e.add(g);const x=new q({color:N.thornSpike,emissive:N.thornOrbGlow,emissiveIntensity:.3,roughness:.5}),h=6+Math.floor(M()*3);for(let y=0;y<h;y++){const A=y/h*6.28+M()*.3,E=(M()-.5)*1.2,b=.3+M()*.3,T=new C(new Dn(.018,b,4),x);T.position.set(Math.cos(A)*s*.8,n+s*.5+Math.sin(E)*s*.5,Math.sin(A)*s*.8),T.rotation.z=-E+(A<3.14?1.4:-1.4),T.rotation.y=A,e.add(T)}const m=new q({color:N.thornPetal,emissive:3344920,emissiveIntensity:.15,transparent:!0,opacity:.7,roughness:.6,side:Pt}),_=4+Math.floor(M()*2);for(let y=0;y<_;y++){const A=y/_*6.28+M()*.3,E=.2+M()*.15,b=new C(new ue(E,E*1.5),m);b.position.set(Math.cos(A)*(s+.05),n+s*.3-M()*.1,Math.sin(A)*(s+.05)),b.rotation.y=-A,b.rotation.x=-.4-M()*.3,e.add(b)}const v=new q({color:1718296,emissive:662026,emissiveIntensity:.05,side:Pt});for(let y=0;y<2;y++){const A=M()*6.28,E=new C(new ue(.15,.25),v);E.position.set(Math.cos(A)*.12,n*.3,Math.sin(A)*.12),E.rotation.y=-A,E.rotation.x=-.8,e.add(E)}return e.position.set(i,0,t),ot.add(e),{group:e,orbMat:u,hazeMat:d,phase:M()*6.28,x:i,z:t}}function VS(i,t){const e=new Jt,n=2+Math.floor(M()*2),s=new q({color:1710128,roughness:.85,emissive:N.helixStem,emissiveIntensity:.1}),o=new C(new Y(.18,8,6),s);o.scale.set(1.2,.5,1.2),o.position.y=.05,e.add(o);const r=[];for(let u=0;u<n;u++){const c=1.5+M()*1,p=.15+M()*.15,f=1.5+M()*1.5,d=M()*6.28,g=[],x=16;for(let L=0;L<=x;L++){const D=L/x,z=d+D*f*6.28,H=p*(.3+D*.7);g.push(new F(Math.cos(z)*H,D*c,Math.sin(z)*H))}const h=new co(g),m=new q({color:N.helixStem,emissive:N.helixNode,emissiveIntensity:.12,roughness:.7}),_=new C(new hn(h,20,.025+M()*.01,5,!1),m);e.add(_);const v=.1+M()*.08,A=M()<.5?new qf(v,0):new Xf(v,0),E=new q({color:N.helixPod,emissive:N.helixPodGlow,emissiveIntensity:.5+M()*.3,transparent:!0,opacity:.65,roughness:.2,metalness:.2}),b=new C(A,E),T=h.getPoint(1);b.position.copy(T),b.rotation.set(M()*3,M()*3,M()*3),e.add(b),r.push(E);const w=new C(new Y(v*2.5,6,4),new Z({color:N.helixPodGlow,transparent:!0,opacity:.05,blending:te,depthWrite:!1}));w.position.copy(T),e.add(w);const S=1+Math.floor(M()*2);for(let L=0;L<S;L++){const D=.3+M()*.5,z=h.getPoint(D),H=new q({color:N.helixRing,emissive:N.helixPodGlow,emissiveIntensity:.2,transparent:!0,opacity:.45,roughness:.3}),k=new C(new Pe(.1+M()*.08,.008,6,12),H);k.position.copy(z),k.rotation.set(M()*3,M()*3,M()*3),e.add(k)}const R=2+Math.floor(M()*2);for(let L=0;L<R;L++){const D=.2+L/R*.6,z=h.getPoint(D),H=new q({color:N.helixNode,emissive:N.helixPodGlow,emissiveIntensity:.35,transparent:!0,opacity:.5}),k=new C(new Y(.025+M()*.015,5,4),H);k.position.copy(z),e.add(k)}}const a=new q({color:N.helixStem,emissive:N.helixNode,emissiveIntensity:.06,roughness:.8}),l=2+Math.floor(M()*2);for(let u=0;u<l;u++){const c=u/l*6.28+M()*.5,p=.3+M()*.4,f=new C(new gt(.006,.015,p,3),a);f.position.set(Math.cos(c)*.12,p*.3,Math.sin(c)*.12),f.rotation.z=(c<3.14?.8:-.8)+M()*.3,f.rotation.y=c,e.add(f)}return e.position.set(i,0,t),ot.add(e),{group:e,podMats:r,phase:M()*6.28}}function WS(i,t){const e=new Jt,n=.25+M()*.1,s=new q({color:1718309,roughness:.85,emissive:662032,emissiveIntensity:.06});for(let f=0;f<3;f++){const d=f/3*6.28+M()*.5,g=new C(new gt(.01,.035,.25+M()*.15,4),s);g.position.set(Math.cos(d)*n*.6,.06,Math.sin(d)*n*.6),g.rotation.z=d<3.14?1:-1,g.rotation.y=d,e.add(g)}const o=new q({color:N.snapBody,emissive:N.snapBodyGlow,emissiveIntensity:.4,transparent:!0,opacity:.7,roughness:.4,metalness:.1}),r=new C(new Y(n,10,8),o);r.position.y=n+.05,r.scale.set(1,.85,1),e.add(r);const a=new q({color:1730116,emissive:N.snapBodyGlow,emissiveIntensity:.25,transparent:!0,opacity:.6}),l=new C(new Pe(n*.45,.02,6,12),a);l.position.y=n*1.7,l.rotation.x=Math.PI/2,e.add(l);const u=5+Math.floor(M()*3),c=[],p=[];for(let f=0;f<u;f++){const d=f/u*6.28+M()*.3,g=M()*6.28,x=3+Math.floor(M()*2),h=.2+M()*.1,m=[],_=new he;_.position.set(Math.cos(d)*n*.6,n*1.4,Math.sin(d)*n*.6),_.rotation.y=d,e.add(_);let v=_;for(let b=0;b<x;b++){const T=b/x,w=.02*(1-T*.6),S=new q({color:N.snapFrond,emissive:N.snapBodyGlow,emissiveIntensity:.08+T*.15,roughness:.6}),R=new C(new gt(w*.7,w,h,4),S);R.position.y=b===0?0:h,R.geometry.translate(0,h/2,0),v.add(R),m.push(R),v=R}const y=new q({color:N.snapTip,emissive:N.snapTipGlow,emissiveIntensity:.6,transparent:!0,opacity:.7,roughness:.2}),A=new C(new Y(.025+M()*.015,5,4),y);A.position.y=h,v.add(A),p.push(y);const E=new C(new Y(.06,4,3),new Z({color:N.snapTipGlow,transparent:!0,opacity:.04,blending:te,depthWrite:!1}));A.add(E),c.push({segments:m,baseAngle:d,phaseOffset:g,segLen:h})}return e.position.set(i,0,t),ot.add(e),{group:e,body:r,bodyMat:o,tipMats:p,fronds:c,phase:M()*6.28,x:i,z:t}}function XS(i,t,e,n,s){for(let o=0;o<i.length;o++){const r=i[o],a=s?s(r.x,r.z,n):n,l=Math.sin(e*1.5+r.phase)*.08;r.body.scale.set(1+l,.85+l*.5,1+l),r.bodyMat.emissiveIntensity=(.5+Math.sin(e*1.5+r.phase)*.3)*a;for(let u=0;u<r.fronds.length;u++){const c=r.fronds[u],p=1.2+u%3*.3;for(let f=0;f<c.segments.length;f++){const d=c.segments[f],g=.15+f*.12,x=Math.sin(e*p+c.phaseOffset+f*.5)*g,h=Math.cos(e*p*.7+c.phaseOffset+f*.3)*g*.6;d.rotation.z=x,d.rotation.x=h}}for(let u=0;u<r.tipMats.length;u++){const c=Math.sin(e*2.5+r.phase+u*1.2)*.5+.5;r.tipMats[u].emissiveIntensity=(.5+c*.6)*a}}}function qS(i,t){const e=new Jt,n=1.2+M()*.8,s=3+Math.floor(M()*3),o=new q({color:N.spiralStem,roughness:.7,emissive:N.spiralFrond,emissiveIntensity:.06}),r=new C(new gt(.02,.05,n,5),o);r.position.y=n/2,e.add(r);const a=new q({color:1721392,emissive:662032,emissiveIntensity:.05,side:Pt});for(let c=0;c<3;c++){const p=M()*6.28,f=new C(new ue(.12,.2),a);f.position.set(Math.cos(p)*.1,n*.12,Math.sin(p)*.1),f.rotation.y=-p,f.rotation.x=-.7,e.add(f)}const l=[];for(let c=0;c<s;c++){const p=c/s*6.28+M()*.4,f=n*(.5+M()*.35),d=.15+M()*.15,g=1+M()*1.5,x=[],h=14;for(let w=0;w<=h;w++){const S=w/h,R=p+S*g*6.28,L=d*(.2+S*.8);x.push(new F(Math.cos(R)*L,n*.25+S*f,Math.sin(R)*L))}const m=new co(x),_=new q({color:N.spiralFrond,emissive:N.spiralGlow,emissiveIntensity:.12,roughness:.5}),v=new C(new hn(m,16,.012+M()*.006,4,!1),_);e.add(v);const y=3+Math.floor(M()*2);for(let w=0;w<y;w++){const S=.2+w/y*.6,R=m.getPoint(S),L=new C(new ue(.04,.06),new q({color:N.spiralFrond,emissive:N.spiralGlow,emissiveIntensity:.08,side:Pt}));L.position.copy(R),L.rotation.set(M()*1.5,M()*3,M()*1.5),e.add(L)}const A=m.getPoint(1),E=new q({color:N.spiralTip,emissive:N.spiralGlow,emissiveIntensity:.6,transparent:!0,opacity:.7}),b=new C(new Y(.025+M()*.015,5,4),E);b.position.copy(A),e.add(b),l.push(E);const T=new C(new Y(.07,4,3),new Z({color:N.spiralGlow,transparent:!0,opacity:.04,blending:te,depthWrite:!1}));T.position.copy(A),e.add(T)}const u=new q({color:1714224,roughness:.85,emissive:660752,emissiveIntensity:.04});for(let c=0;c<3;c++){const p=c/3*6.28+M()*.5,f=new C(new gt(.006,.018,.15+M()*.1,3),u);f.position.set(Math.cos(p)*.06,.04,Math.sin(p)*.06),f.rotation.z=p<3.14?.8:-.8,f.rotation.y=p,e.add(f)}return e.position.set(i,0,t),ot.add(e),{group:e,tipMats:l,phase:M()*6.28,x:i,z:t}}function YS(i,t){const e=new Jt,n=1.5+M()*1,s=n*.7,o=.4+M()*.2,r=new q({color:N.corpseLeaf,roughness:.75,emissive:662026,emissiveIntensity:.05}),a=new C(new gt(.06,.1,n*.5,6),r);a.position.y=n*.25,e.add(a);const l=new q({color:N.corpseSpathe,emissive:2230800,emissiveIntensity:.08,transparent:!0,opacity:.85,roughness:.5,side:Pt}),u=new Dn(o,n*.5,8,1,!0),c=new C(u,l);c.position.y=n*.55,c.scale.set(1,1,1),e.add(c);const p=new q({color:N.corpseSpathe,emissive:N.corpseGlow,emissiveIntensity:.1,roughness:.4}),f=new C(new Pe(o*.95,.02,6,12),p);f.position.y=n*.8,f.rotation.x=Math.PI/2,e.add(f);const d=new q({color:N.corpseColumn,emissive:N.corpseGlow,emissiveIntensity:.5,transparent:!0,opacity:.8,roughness:.3}),g=new C(new gt(.03,.06,s,6),d);g.position.y=n*.4+s*.5,e.add(g);const x=new Z({color:N.corpseGlow,transparent:!0,opacity:.04,blending:te,depthWrite:!1}),h=new C(new Y(o*1.2,6,4),x);h.position.y=n*.65,e.add(h);for(let w=0;w<5;w++){const S=M()*6.28,R=n*.45+M()*s*.6,L=new C(new Y(.01,3,3),new q({color:N.corpseGlow,emissive:N.corpseGlow,emissiveIntensity:.3}));L.position.set(Math.cos(S)*.05,R,Math.sin(S)*.05),e.add(L)}const m=new Z({color:1118481,transparent:!0,opacity:.7}),_=[],v=3+Math.floor(M()*3),y=n*.7;for(let w=0;w<v;w++){const S=new C(new Y(.008,3,3),m);S.position.set(0,y,0),e.add(S),_.push(S)}const A=new q({color:N.corpseLeaf,emissive:662024,emissiveIntensity:.04,side:Pt}),E=2+Math.floor(M()*2);for(let w=0;w<E;w++){const S=w/E*6.28+M()*.5,R=new C(new ue(.25+M()*.1,.35+M()*.1),A);R.position.set(Math.cos(S)*.18,n*.15,Math.sin(S)*.18),R.rotation.y=-S,R.rotation.x=-.6-M()*.3,e.add(R)}const b=new q({color:1714200,roughness:.9,emissive:330245,emissiveIntensity:.03}),T=new C(new Y(.15,6,4),b);return T.scale.set(1.5,.4,1.5),T.position.y=.03,e.add(T),e.position.set(i,0,t),ot.add(e),{group:e,columnMat:d,hazeMat:x,flies:_,spadixY:y,phase:M()*6.28,x:i,z:t}}function ZS(i,t){const e=new Jt,n=.3+M()*.15,s=.3+M()*.2,o=new q({color:N.orbBushLeaf,roughness:.8,emissive:662026,emissiveIntensity:.06}),r=5+Math.floor(M()*4);for(let f=0;f<r;f++){const d=M()*6.28,g=M()*n*.6,x=.1+M()*.08,h=new C(new Y(x,5,4),o);h.scale.set(1.2,.6,1.2),h.position.set(Math.cos(d)*g,s*.4+M()*s*.3,Math.sin(d)*g),e.add(h)}const a=new q({color:N.orbBushStem,emissive:662026,emissiveIntensity:.04,side:Pt});for(let f=0;f<6;f++){const d=M()*6.28,g=n*.5+M()*n*.3,x=new C(new ue(.06,.08),a);x.position.set(Math.cos(d)*g,s*.3+M()*.15,Math.sin(d)*g),x.rotation.set(M()*.5,-d,M()*.3),e.add(x)}const l=[],u=6+Math.floor(M()*5),c=new q({color:N.orbBushStem,roughness:.7,emissive:N.orbBushGlow,emissiveIntensity:.05});for(let f=0;f<u;f++){const d=M()*6.28,g=M()*n*.7,x=s+.15+M()*.3,h=.02+M()*.015,m=x-s*.3,_=new C(new gt(.003,.005,m,3),c);_.position.set(Math.cos(d)*g,s*.3+m/2,Math.sin(d)*g),_.rotation.z=(M()-.5)*.3,_.rotation.x=(M()-.5)*.3,e.add(_);const v=new q({color:N.orbBushOrb,emissive:N.orbBushGlow,emissiveIntensity:.5+M()*.3,transparent:!0,opacity:.7,roughness:.2}),y=new C(new Y(h,5,4),v);y.position.set(Math.cos(d)*g+(M()-.5)*.03,x,Math.sin(d)*g+(M()-.5)*.03),e.add(y),l.push(v);const A=new C(new Y(h*2.5,4,3),new Z({color:N.orbBushGlow,transparent:!0,opacity:.03,blending:te,depthWrite:!1}));A.position.copy(y.position),e.add(A)}const p=new q({color:1712152,roughness:.9});for(let f=0;f<3;f++){const d=M()*6.28,g=n+M()*.1,x=new C(new Y(.015,3,3),p);x.position.set(Math.cos(d)*g,.01,Math.sin(d)*g),x.scale.set(1,.4,1),e.add(x)}return e.position.set(i,0,t),ot.add(e),{group:e,orbMats:l,phase:M()*6.28,x:i,z:t}}function $S(i,t){const e=new Jt,n=2+Math.floor(M()*3),s=[],o=new q({color:1714200,roughness:.9,emissive:330245,emissiveIntensity:.03}),r=new C(new Y(.1,5,4),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=new q({color:N.lanternStem,emissive:662024,emissiveIntensity:.04,side:Pt});for(let l=0;l<2;l++){const u=M()*6.28,c=new C(new ue(.1,.18),a);c.position.set(Math.cos(u)*.08,.08,Math.sin(u)*.08),c.rotation.y=-u,c.rotation.x=-.6,e.add(c)}for(let l=0;l<n;l++){const u=l/n*6.28+M()*.5,c=.8+M()*.8,p=.3+M()*.4,f=[],d=10;for(let S=0;S<=d;S++){const R=S/d,L=p*Math.sin(R*Math.PI*.7),D=R<.7?R/.7*c:c-(R-.7)/.3*c*.25;f.push(new F(Math.cos(u)*L,D,Math.sin(u)*L))}const g=new co(f),x=new q({color:N.lanternStem,roughness:.7,emissive:N.lanternHaze,emissiveIntensity:.06}),h=new C(new hn(g,12,.008+M()*.004,4,!1),x);e.add(h);const m=g.getPoint(1),_=.06+M()*.04,v=new q({color:N.lanternPod,emissive:N.lanternGlow,emissiveIntensity:.5+M()*.3,transparent:!0,opacity:.5,roughness:.2,metalness:.1}),y=new C(new Y(_,8,6),v);y.position.copy(m),y.position.y-=_*.3,e.add(y),s.push(v);const A=new q({color:16777164,emissive:N.lanternGlow,emissiveIntensity:1,transparent:!0,opacity:.5,roughness:0}),E=new C(new Y(_*.4,5,4),A);E.position.copy(y.position),e.add(E);const b=new C(new Y(_*2.5,5,4),new Z({color:N.lanternHaze,transparent:!0,opacity:.04,blending:te,depthWrite:!1}));b.position.copy(y.position),e.add(b);const T=new q({color:N.lanternStem,roughness:.6}),w=new C(new Dn(_*.5,_*.4,5),T);w.position.copy(m),w.rotation.x=Math.PI,e.add(w)}return e.position.set(i,0,t),ot.add(e),{group:e,podMats:s,phase:M()*6.28,x:i,z:t}}function jS(i,t){const e=new Jt,n=1+Math.floor(M()*2),s=[];for(let a=0;a<n;a++){const l=(a-(n-1)*.5)*.3,u=1+M()*.8,c=new q({color:N.veilSupport,roughness:.85,emissive:657928,emissiveIntensity:.03}),p=new C(new gt(.015,.03,u,4),c);p.position.set(l,u/2,0),e.add(p);const f=.2+M()*.15,d=new C(new gt(.008,.012,f,3),c);d.position.set(l,u*.9,0),d.rotation.z=Math.PI/2,e.add(d);const g=3+Math.floor(M()*3);for(let h=0;h<g;h++){const m=.08+M()*.06,_=u*(.3+M()*.4),v=(h-(g-1)*.5)*(f/g),y=new q({color:N.veilMoss,emissive:N.veilGlow,emissiveIntensity:.12+M()*.08,transparent:!0,opacity:.25+M()*.15,roughness:.6,side:Pt}),A=new C(new ue(m,_),y);A.position.set(l+v,u*.9-_*.5,(M()-.5)*.05),A.rotation.y=(M()-.5)*.4,e.add(A),s.push(A);const E=2+Math.floor(M()*2),b=new Z({color:N.veilEdge,transparent:!0,opacity:.4});for(let T=0;T<E;T++){const w=new C(new Y(.006,3,3),b);w.position.set(l+v+(M()-.5)*m*.8,u*.9-_+M()*_*.15,(M()-.5)*.04),e.add(w)}}const x=new q({color:N.veilMoss,emissive:N.veilGlow,emissiveIntensity:.08,transparent:!0,opacity:.3});for(let h=0;h<3;h++){const m=u*(.2+M()*.5),_=M()*6.28,v=new C(new Y(.015+M()*.01,4,3),x);v.scale.set(1.5,.5,1),v.position.set(l+Math.cos(_)*.025,m,Math.sin(_)*.025),e.add(v)}}const o=new q({color:2767400,roughness:.9,emissive:N.veilGlow,emissiveIntensity:.03}),r=new C(new Y(.12,5,4),o);return r.scale.set(1.5,.3,1.5),r.position.y=.02,e.add(r),e.position.set(i,0,t),ot.add(e),{group:e,veilMats:s,phase:M()*6.28,x:i,z:t}}function KS(i,t,e){const n=new Jt,s=new q({color:N.jellyBell,emissive:N.jellyGlow,emissiveIntensity:.8,transparent:!0,opacity:.5,roughness:.2,metalness:.1,side:Pt}),o=new C(new Y(.5,8,6,0,6.28,0,Math.PI/2),s);o.scale.set(1,.6,1),o.position.y=0,n.add(o);const r=new q({color:N.jellyBell,emissive:N.jellyGlow,emissiveIntensity:1,transparent:!0,opacity:.6}),a=new C(new Pe(.48,.025,5,12),r);a.rotation.x=Math.PI/2,a.position.y=-.02,n.add(a);const l=new C(new Y(.2,6,4),new Z({color:N.jellyGlow,transparent:!0,opacity:.7}));l.position.y=-.05,n.add(l);const u=new Z({color:12312063,transparent:!0,opacity:.3});for(let _=-1;_<=1;_+=2){const v=new C(new Y(.06,4,3),u);v.scale.set(.6,1.5,.6),v.position.set(_*.08,-.03,0),n.add(v)}const c=new Z({color:15663103,transparent:!0,opacity:.7});for(let _=0;_<5;_++){const v=M()*6.28,y=M()*.8,A=new C(new Y(.02,3,3),c);A.position.set(Math.cos(v)*y*.35,.1-y*.15,Math.sin(v)*y*.35),n.add(A)}const p=new q({color:N.jellyTent,emissive:N.jellyGlow,emissiveIntensity:.4,transparent:!0,opacity:.4}),f=new Z({color:14544639,transparent:!0,opacity:.9});for(let _=0;_<6;_++){const v=_/6*6.28,y=.4+M()*.6,A=new C(new gt(.015,.008,y,3),p);A.position.set(Math.cos(v)*.25,-y/2-.05,Math.sin(v)*.25),n.add(A);const E=new C(new Y(.018,4,4),f);E.position.set(Math.cos(v)*.25,-y-.06,Math.sin(v)*.25),n.add(E)}const d=new Z({color:N.jellyGlow,transparent:!0,opacity:.12});for(let _=0;_<8;_++){const v=_/8*6.28,y=new C(new gt(.002,.002,.4,3),d);y.position.set(Math.cos(v)*.2,.05,Math.sin(v)*.2),y.rotation.z=Math.PI/2-.3,y.rotation.y=-v,n.add(y)}const g=new q({color:N.jellyBell,emissive:N.jellyGlow,emissiveIntensity:.6,transparent:!0,opacity:.4});for(let _=0;_<10;_++){const v=_/10*6.28,y=new C(new Y(.02,3,3),g);y.scale.set(1,.5,.8),y.position.set(Math.cos(v)*.46,-.04,Math.sin(v)*.46),n.add(y)}const x=new q({color:N.jellyTent,emissive:N.jellyGlow,emissiveIntensity:.5,transparent:!0,opacity:.35}),h=new C(new gt(.02,.01,.35,4),x);h.position.y=-.2,n.add(h);const m=new Z({color:14548991,transparent:!0,opacity:.4});for(let _=0;_<3;_++){const v=_/3*6.28,y=new C(new Y(.008,3,3),m);y.position.set(Math.cos(v)*.25,-.55-M()*.3,Math.sin(v)*.25),n.add(y)}return n.position.set(i,t,e),ot.add(n),{group:n,bellMat:s,tipMat:f,phase:M()*6.28,driftAng:M()*6.28,homeX:i,homeZ:e,floatY:t,wobble:.5+M()*.5,_init:!0,_state:"drift",_stT:20+Math.random()*30,_migrateAng:0,_pulseSync:0}}function JS(i,t){const e=new Jt,n=new q({color:N.puffBody,emissive:N.puffGlow,emissiveIntensity:.3,roughness:.8}),s=new C(new Y(.3,8,6),n);s.position.y=.35,e.add(s);const o=new q({color:16773344,emissive:N.puffGlow,emissiveIntensity:.15,roughness:.9}),r=new C(new Y(.18,6,4),o);r.scale.set(.7,.9,.3),r.position.set(0,.32,.2),e.add(r);const a=new C(new Y(.22,7,5),n);a.position.y=.65,e.add(a);const l=[];for(let w=-1;w<=1;w+=2){const S=new C(new Dn(.06,.15,4),n);S.position.set(w*.13,.85,0),S.rotation.z=w*.3,e.add(S),l.push({mesh:S,side:w,baseRotZ:w*.3});const R=new C(new Dn(.03,.08,4),new q({color:N.puffCheek,emissive:N.puffCheek,emissiveIntensity:.2}));R.position.set(w*.13,.84,.01),R.rotation.z=w*.3,e.add(R),l.push({mesh:R,side:w,baseRotZ:w*.3})}const u=new Z({color:N.puffEye}),c=[];for(let w=-1;w<=1;w+=2){const S=new C(new Y(.035,4,4),u);S.position.set(w*.09,.68,.18),e.add(S),c.push(S);const R=new Z({color:16777215}),L=new C(new Y(.012,3,3),R);L.position.set(w*.09+w*.015,.695,.2),e.add(L),c.push(L)}const p=new Z({color:4469555}),f=new C(new Y(.015,3,3),p);f.position.set(0,.63,.22),e.add(f);const d=new q({color:N.puffCheek,emissive:N.puffCheek,emissiveIntensity:.3});for(let w=-1;w<=1;w+=2){const S=new C(new Y(.04,4,3),d);S.position.set(w*.15,.61,.15),e.add(S)}const g=new Z({color:15654348,transparent:!0,opacity:.5});for(let w=-1;w<=1;w+=2)for(let S=0;S<2;S++){const R=new C(new gt(.002,.002,.06,3),g);R.position.set(w*.12,.62-S*.03,.2),R.rotation.z=w*.7+S*w*.2,R.rotation.x=-.1,e.add(R)}for(let w=-1;w<=1;w+=2){const S=new C(new Y(.07,4,3),n);S.position.set(w*.12,.07,.05),S.scale.set(1,.5,1.3),e.add(S);const R=new q({color:16755370,emissive:16746632,emissiveIntensity:.1});for(let L=0;L<3;L++){const D=L/3*6.28,z=new C(new Y(.012,3,3),R);z.position.set(w*.12+Math.cos(D)*.03,.03,.05+Math.sin(D)*.03),e.add(z)}}const x=new q({color:16777215,emissive:N.puffGlow,emissiveIntensity:.4,roughness:.9}),h=new C(new Y(.06,5,4),x);h.position.set(0,.38,-.28),e.add(h);const m=new q({color:N.puffBody,emissive:N.puffGlow,emissiveIntensity:.2,roughness:1});for(let w=0;w<6;w++){const S=M()*6.28,R=M()*1.2,L=new C(new Y(.01,3,3),m);L.position.set(Math.cos(S)*.28,.25+R*.2,Math.sin(S)*.28),e.add(L)}const _=new Z({color:N.puffBody});for(let w=-1;w<=1;w+=2){const S=new C(new gt(.003,.003,.04,3),_);S.position.set(w*.09,.72,.17),S.rotation.z=w*.3,e.add(S)}const v=new Z({color:5583684,transparent:!0,opacity:.5}),y=new C(new gt(.002,.002,.03,3),v);y.position.set(0,.59,.22),y.rotation.z=Math.PI/2,e.add(y);const A=new Z({color:16777215,transparent:!0,opacity:.6}),E=[];for(let w=0;w<3;w++){const S=new C(new Y(.01,3,3),A.clone());S.position.set(0,.5,0),e.add(S),E.push({mesh:S,mat:S.material,phase:M()*6.28,orbitR:.28+M()*.1})}const b=new Z({color:N.puffGlow,transparent:!0,opacity:.15,side:Pt});for(let w=0;w<4;w++){const S=M()*6.28,R=(M()-.5)*.4,L=new C(new He(.02+M()*.012,5),b);L.position.set(Math.cos(S)*.27,.35+R*.15,Math.sin(S)*.27),L.lookAt(0,.35,0),e.add(L)}let T=null;if(M()<.4){T=new q({color:N.flower,emissive:N.flowerGlow,emissiveIntensity:.3});for(let S=0;S<3;S++){const R=S/3*6.28,L=new C(new Dn(.015,.03,3),T);L.position.set(Math.cos(R)*.035,.88,Math.sin(R)*.035),L.rotation.z=-Math.cos(R)*.5,L.rotation.x=Math.sin(R)*.5,e.add(L)}const w=new C(new Y(.01,3,3),new q({color:16772676,emissive:16768290,emissiveIntensity:.4}));w.position.set(0,.89,0),e.add(w)}return e.position.set(i,0,t),ot.add(e),{group:e,ears:l,eyes:c,tail:h,sparkles:E,crownMat:T,phase:M()*6.28,wanderAng:M()*6.28,speed:.6+M()*.8,hopTimer:0,hopPhase:M()*6.28,homeX:i,homeZ:t,state:"idle",idleTimer:M()*3,_init:!0,_followT:0,_scaredT:0,_huddleTarget:-1,_baseY:0,_lastTX:i,_lastTZ:t,_blinkTimer:2+Math.random()*4,_blinkState:0}}function QS(i,t){const e=new Jt,n=new q({color:N.deerBody,emissive:N.deerGlow,emissiveIntensity:.7,transparent:!0,opacity:.7,roughness:.3}),s=new C(new Y(.4,7,5),n);s.scale.set(1,.8,1.5),s.position.y=.9,e.add(s);const o=new q({color:13431039,emissive:N.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.5}),r=new C(new Y(.15,5,4),o);r.scale.set(.8,.6,.5),r.position.set(0,.78,.25),e.add(r);const a=new Jt;a.position.set(0,1.15,.3);const l=new C(new gt(.08,.12,.4,5),n);l.position.set(0,.1,.08),l.rotation.x=-.4,a.add(l);const u=new C(new Y(.14,6,5),n);u.position.set(0,.22,.2),a.add(u);const c=new C(new Y(.07,4,3),n);c.scale.set(1,.7,1.4),c.position.set(0,.17,.35),a.add(c);const p=new Z({color:2245717}),f=new C(new Y(.02,3,3),p);f.position.set(0,.17,.43),a.add(f);const d=new Z({color:N.deerEye});for(let O=-1;O<=1;O+=2){const G=new C(new Y(.025,4,3),d);G.position.set(O*.09,.25,.28),a.add(G);const et=new C(new Y(.008,3,3),new Z({color:16777215}));et.position.set(O*.085,.26,.29),a.add(et);const ct=new Z({color:N.deerBody,transparent:!0,opacity:.5}),ft=new C(new gt(.002,.002,.03,3),ct);ft.position.set(O*.1,.27,.28),ft.rotation.z=O*.6,a.add(ft)}for(let O=-1;O<=1;O+=2){const G=new C(new Dn(.04,.14,4),n);G.position.set(O*.1,.37,.15),G.rotation.z=O*.4,a.add(G)}const g=new q({color:N.deerAntler,emissive:N.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.8});for(let O=-1;O<=1;O+=2){const G=new C(new gt(.015,.02,.25,3),g);G.position.set(O*.08,.42,.12),G.rotation.z=O*.5,a.add(G);const et=new C(new gt(.01,.015,.15,3),g);et.position.set(O*.15,.55,.1),et.rotation.z=O*.8,a.add(et);const ct=new C(new gt(.008,.012,.1,3),g);ct.position.set(O*.11,.5,.16),ct.rotation.z=O*.3,ct.rotation.x=-.5,a.add(ct);const ft=new C(new Y(.012,3,3),new Z({color:N.deerGlow,transparent:!0,opacity:.8}));ft.position.set(O*.18,.61,.09),a.add(ft)}const x=new q({color:N.deerBody,emissive:N.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),h=new C(new gt(.01,.02,.1,3),x);h.position.set(0,.11,.28),h.rotation.x=.3,a.add(h);const m=new Z({color:1122850});for(let O=-1;O<=1;O+=2){const G=new C(new Y(.006,3,3),m);G.position.set(O*.02,.16,.42),a.add(G)}e.add(a);const _=[{x:-.15,z:.3,label:"FL"},{x:.15,z:.3,label:"FR"},{x:-.15,z:-.3,label:"BL"},{x:.15,z:-.3,label:"BR"}],v=new q({color:6715272,emissive:N.deerGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),y=[];for(let O=0;O<4;O++){const G=_[O],et=new Jt;et.position.set(G.x,.65,G.z);const ct=new C(new gt(.025,.035,.35,4),n);ct.position.y=-.175,et.add(ct);const ft=new Jt;ft.position.set(0,-.35,0);const Ct=new C(new gt(.02,.03,.3,4),n);Ct.position.y=-.15,ft.add(Ct);const Wt=new C(new gt(.04,.032,.04,4),v);Wt.position.y=-.3,ft.add(Wt);const tt=new q({color:14544639,emissive:N.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),ut=new C(new Y(.025,3,3),tt);ut.scale.set(1.3,.5,1.3),ut.position.y=-.25,ft.add(ut),et.add(ft),e.add(et),y.push({upper:et,lower:ft,isFront:O<2,side:G.x<0?-1:1})}const A=new Jt;A.position.set(0,1.1,-.55);const E=new C(new Dn(.05,.15,4),new q({color:16777215,emissive:N.deerGlow,emissiveIntensity:1,transparent:!0,opacity:.8}));A.add(E),e.add(A);const b=new Z({color:13434862,transparent:!0,opacity:.3});for(let O=0;O<4;O++){const G=new C(new Y(.02,3,3),b);G.position.set((M()-.5)*.25,.8+M()*.3,(M()-.5)*.4),e.add(G)}const T=new Z({color:N.deerBody,transparent:!0,opacity:.15});for(let O=0;O<3;O++){const G=new C(new gt(.002,.002,.2,3),T);G.position.set(.3,.85-O*.06,0),G.rotation.z=Math.PI/2+.3,e.add(G)}const w=new q({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.4,roughness:0,metalness:.5});for(let O=0;O<3;O++){const G=new C(new Y(.008,3,3),w);G.position.set((M()-.5)*.3,.9+M()*.3,(M()-.5)*.35),e.add(G)}const S=new q({color:14544639,emissive:N.deerGlow,emissiveIntensity:.4,transparent:!0,opacity:.3,side:Pt}),R=[];for(let O=0;O<5;O++){const G=new C(new ue(.05,.08+M()*.04),S);G.position.set(0,.1+O*.055,.04-O*.015),G.rotation.x=-.2+M()*.15,G.rotation.z=(M()-.5)*.25,a.add(G),R.push(G)}const L=new Z({color:N.deerGlow,transparent:!0,opacity:.5}),D=[];for(let O=-1;O<=1;O+=2){const G=new C(new Y(.012,3,3),L.clone());G.position.set(O*.1,.47,.11),a.add(G),D.push(G);const et=new C(new Y(.01,3,3),L.clone());et.position.set(O*.14,.53,.12),a.add(et),D.push(et)}const z=new Z({color:N.deerGlow,transparent:!0,opacity:.08,blending:te,depthWrite:!1}),H=[];for(let O=0;O<3;O++){const G=new C(new Y(.06-O*.012,4,3),z.clone());G.position.set(0,.8,-.6-O*.35),ot.add(G),H.push({mesh:G,mat:G.material,prevX:i,prevY:0,prevZ:t})}const k=new Z({color:N.deerGlow,transparent:!0,opacity:.2,side:Pt});for(let O=0;O<3;O++){M()*6.28;const G=new C(new He(.03+M()*.015,5),k);G.position.set((O===1?-1:1)*.32,.8+M()*.25,(M()-.5)*.3),G.rotation.y=(O===1?-1:1)*Math.PI/2,e.add(G)}return e.position.set(i,0,t),ot.add(e),{group:e,mat:n,manePlanes:R,branchOrbs:D,trailSpheres:H,phase:M()*6.28,wanderAng:M()*6.28,speed:.6+M()*.4,walkTimer:0,legCycle:0,homeX:i,homeZ:t,state:"walk",pauseTimer:0,neckPivot:a,legPivots:y,tailPivot:A,fleeTimer:0,headLook:0,headBob:0,_init:!0,_stT:0,_drinkTgt:null,_zigTimer:0,_zigDir:1,_baseY:0,_lastTX:i,_lastTZ:t}}function t2(i,t,e){const n=new Jt,s=new q({color:N.mothBody,emissive:N.mothGlow,emissiveIntensity:.3,roughness:.7}),o=new C(new gt(.04,.05,.3,5),s);o.rotation.x=Math.PI/2,n.add(o);const r=new q({color:N.mothBody,emissive:N.mothGlow,emissiveIntensity:.5,roughness:.6});for(let h=0;h<3;h++){const m=new C(new Pe(.045,.006,4,8),r);m.position.z=-.05+h*.06,m.rotation.x=0,n.add(m)}const a=new C(new Y(.05,5,4),s);a.position.z=.18,n.add(a);const l=new q({color:1122867,roughness:.2,metalness:.4});for(let h=-1;h<=1;h+=2){const m=new C(new Y(.018,4,3),l);m.position.set(h*.03,.01,.21),n.add(m)}for(let h=-1;h<=1;h+=2){const m=new C(new gt(.005,.005,.15,3),s);m.position.set(h*.03,.03,.22),m.rotation.x=-.6,m.rotation.z=h*.4,n.add(m);const _=new Z({color:N.mothGlow,transparent:!0,opacity:.7}),v=new C(new Y(.015,3,3),_);v.scale.set(2,.5,1),v.position.set(h*.05,.12,.28),n.add(v)}const u=new q({color:N.mothWing,emissive:N.mothGlow,emissiveIntensity:.8,transparent:!0,opacity:.6,side:Pt,roughness:.4});n._wingPivots=[];for(let h=-1;h<=1;h+=2){const m=new Jt;m.position.set(h*.04,0,.02);const _=new C(new Y(.2,6,4),u);_.scale.set(1.8,.08,1.2),_.position.set(h*.18,0,.02),m.add(_);const v=new C(new Y(.12,5,3),u);v.scale.set(1.5,.06,1),v.position.set(h*.12,0,-.1),m.add(v);const y=new q({color:N.mothWing,emissive:N.mothGlow,emissiveIntensity:.6,transparent:!0,opacity:.45,side:Pt}),A=new C(new ue(.03,.12),y);A.position.set(h*.1,0,-.18),A.rotation.y=h*.2,m.add(A);const E=new Z({color:N.mothSpot,transparent:!0,opacity:.9}),b=new C(new Y(.03,4,3),E);b.position.set(h*.2,.02,.03),m.add(b);const T=new C(new Y(.018,3,3),E);T.position.set(h*.1,.02,-.08),m.add(T);const w=new Z({color:N.mothGlow,transparent:!0,opacity:.25});for(let S=0;S<2;S++){const R=new C(new gt(.002,.002,.2,3),w);R.position.set(h*.15,.01,-.02+S*.06),R.rotation.z=Math.PI/2+h*(.15+S*.15),m.add(R)}n.add(m),n._wingPivots.push({pivot:m,side:h})}const c=new Z({color:N.mothGlow,transparent:!0,opacity:.25});for(let h=0;h<3;h++){const m=new C(new Y(.008,3,3),c);m.position.set((M()-.5)*.04,0,-.15-h*.05),n.add(m)}const p=new Z({color:4473907,transparent:!0,opacity:.5}),f=new C(new Pe(.015,.003,4,8,Math.PI*1.5),p);f.position.set(0,-.02,.2),f.rotation.x=.4,n.add(f);const d=new q({color:N.mothBody,emissive:N.mothGlow,emissiveIntensity:.4,roughness:1});for(let h=0;h<5;h++){const m=M()*6.28,_=new C(new Y(.008,3,3),d);_.position.set(Math.cos(m)*.04,Math.sin(m)*.04,M()*.15-.05),n.add(_)}const g=new Z({color:N.mothBody,transparent:!0,opacity:.4});for(let h=-1;h<=1;h+=2)for(let m=0;m<3;m++){const _=new C(new gt(.002,.002,.06,3),g);_.position.set(h*.04,-.03,-.05+m*.06),_.rotation.z=h*.8,_.rotation.x=-.3,n.add(_)}const x=new Z({color:N.mothGlow,transparent:!0,opacity:.35});for(let h=-1;h<=1;h+=2)for(let m=0;m<5;m++){const _=m/5*Math.PI-Math.PI/2,v=new C(new Y(.006,3,3),x);v.position.set(h*(.3+Math.cos(_)*.05),Math.sin(_)*.02,.02+m*.04),n.add(v)}return n.position.set(i,t,e),ot.add(n),{group:n,wingMat:u,phase:M()*6.28,orbitAng:M()*6.28,orbitR:2+M()*4,centerX:i,centerZ:e,floatY:t,flapSpeed:6+M()*4,_init:!0,_state:"patrol",_stT:0,_attractTarget:null,_restTree:null}}function e2(i,t,e){const n=new Jt,s=new Z({color:N.wispCore}),o=new C(new Y(.08,6,4),s);n.add(o);const r=new Z({color:16777215,transparent:!0,opacity:.7,wireframe:!0}),a=new C(new vr(.06,0),r);n.add(a);const l=new Z({color:N.wispGlow,transparent:!0,opacity:.5}),u=new C(new Y(.18,6,4),l);n.add(u);const c=new Z({color:N.wispGlow,transparent:!0,opacity:.25}),p=new C(new Pe(.22,.008,4,12),c);p.rotation.x=Math.PI/2,n.add(p);const f=new Z({color:N.wispTrail,transparent:!0,opacity:.15}),d=new C(new Y(.35,5,4),f);n.add(d);const g=new Z({color:16777215,transparent:!0,opacity:.8}),x=new C(new Y(.02,3,3),g);x.position.set(.15,0,0),n.add(x);const h=[];for(let b=0;b<3;b++){const T=new Z({color:N.wispCore,transparent:!0,opacity:.35}),w=new C(new Y(.01,3,3),T);w.position.set((M()-.5)*.1,-.1-b*.08,(M()-.5)*.1),n.add(w),h.push(w)}const m=new Z({color:N.wispGlow,transparent:!0,opacity:.18}),_=[];for(let b=0;b<3;b++){const T=b/3*6.28+M()*.5,w=.15+M()*.1,S=new C(new gt(.003,.001,w,3),m);S.position.set(Math.cos(T)*.1,M()*.08,Math.sin(T)*.1),S.rotation.z=Math.PI/3*(T<3.14?1:-1),S.rotation.y=T,n.add(S),_.push({mesh:S,baseAng:T})}const v=new Z({color:N.wispGlow,transparent:!0,opacity:.12}),y=new C(new Pe(.26,.005,4,10),v);y.rotation.x=1.2,y.rotation.z=.8,n.add(y);const A=new Z({color:16777215,transparent:!0,opacity:.5});for(let b=0;b<4;b++){const T=M()*6.28,w=M()*.8,S=new C(new Y(.006,3,3),A);S.position.set(Math.cos(T)*.06,Math.sin(w)*.06,Math.sin(T)*.06),n.add(S)}const E=new Z({color:N.wispCore,transparent:!0,opacity:.2});for(let b=0;b<4;b++){const T=new C(new Y(.004,3,3),E);T.position.set(.03+M()*.04,-.05-b*.04,M()*.04),n.add(T)}return n.scale.setScalar(.5),n.position.set(i,t,e),ot.add(n),{group:n,glowMat:l,hazeMat:f,embers:h,tendrils:_,plasmaMat:m,facet:a,halo:p,halo2:y,phase:M()*6.28,targetX:i,targetY:t,targetZ:e,velX:0,velY:0,velZ:0,scatter:0}}function n2(i,t){const e=new Jt,n=Dh,s=8+Math.floor(M()*5),o=new q({color:N.fairyMush,emissive:N.fairyGlow,emissiveIntensity:.2,roughness:.5}),r=new q({color:N.mushStem,roughness:.7,emissive:N.fairyGlow,emissiveIntensity:.05});for(let A=0;A<s;A++){const E=A/s*6.28+M()*.15,b=n+M()*.3-.15,T=.15+M()*.2,w=new C(Bn.mushStem,r);w.scale.setScalar(T),w.position.set(Math.cos(E)*b,T*.3,Math.sin(E)*b),e.add(w);const S=new C(Bn.mushCap,o);S.scale.set(T,T*.4,T),S.position.set(Math.cos(E)*b,T*.55,Math.sin(E)*b),e.add(S);const R=new Z({color:16777215,transparent:!0,opacity:.7}),L=new C(new Y(T*.08,3,3),R);L.position.set(Math.cos(E)*b,T*.6,Math.sin(E)*b),e.add(L)}const a=new q({color:8934792,emissive:N.fairyGlow,emissiveIntensity:.1,roughness:.6});for(let A=0;A<5;A++){const E=M()*6.28,b=n+M()*.6-.3,T=.06+M()*.06,w=new C(Bn.mushCap,a);w.scale.set(T,T*.5,T),w.position.set(Math.cos(E)*b,T*.35,Math.sin(E)*b),e.add(w)}const l=new q({color:1725733,emissive:664080,emissiveIntensity:.05,roughness:.9});for(let A=0;A<4;A++){const E=M()*6.28,b=M()*n*.8,T=new C(new Y(.08+M()*.08,4,3),l);T.scale.set(1.5,.2,1.5),T.position.set(Math.cos(E)*b,.01,Math.sin(E)*b),e.add(T)}const u=new q({color:4478310,emissive:N.fairyGlow,emissiveIntensity:.05,roughness:.85}),c=new C(new Y(.12,5,3),u);c.scale.set(1.2,.3,1),c.position.y=.03,e.add(c);const p=new Z({color:N.fairyGlow,transparent:!0,opacity:.2}),f=[];for(let A=0;A<8;A++){const E=new C(new Y(.012,3,3),p),b=(M()-.5)*n*.8,T=(M()-.5)*n*.8;E.position.set(b,.05+M()*.3,T),e.add(E),f.push({mesh:E,baseX:b,baseZ:T,drift:M()*6.28,speed:.2+M()*.3})}const d=new Z({color:N.fairyRing,transparent:!0,opacity:0,side:Pt}),g=new C(new pa(.3,n-.3,16),d);g.rotation.x=-Math.PI/2,g.position.y=.02,e.add(g);const x=new Z({color:N.fairyGlow,transparent:!0,opacity:.08});for(let A=0;A<6;A++){const E=M()*6.28,b=E+.5+M()*1.5,T=n*.6+M()*n*.4,w=new C(new gt(.002,.002,T,3),x);w.position.set(Math.cos((E+b)/2)*n*.4,.005,Math.sin((E+b)/2)*n*.4),w.rotation.x=Math.PI/2,w.rotation.z=E,e.add(w)}const h=new q({color:4864560,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<3;A++){const E=M()*6.28,b=M()*n*.7,T=new C(new Y(.03,4,3),h);T.scale.set(1.3,.3,1.3),T.position.set(Math.cos(E)*b,.008,Math.sin(E)*b),e.add(T)}const m=new q({color:7833702,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<2;A++){const E=new C(new He(.02+M()*.02,4),m);E.position.set((M()-.5)*.08,.06,(M()-.5)*.06),E.rotation.x=-Math.PI/2+M()*.4,e.add(E)}const _=[];for(let A=0;A<5;A++){const E=M()*6.28,b=M()*n*.9,T=new Z({color:8978346,transparent:!0,opacity:.25}),w=new C(new Y(.005,3,3),T);w.position.set(Math.cos(E)*b,.01,Math.sin(E)*b),e.add(w),_.push(w)}const v=new Z({color:657926,transparent:!0,opacity:.15,side:Pt}),y=new C(new pa(n*.5,n*.85,12),v);return y.rotation.x=-Math.PI/2,y.position.y=.008,e.add(y),e.position.set(i,0,t),ot.add(e),{group:e,mushMat:o,discMat:d,sporeMat:p,spores:f,glowWorms:_,x:i,z:t,ringR:n,phase:M()*6.28,glowIntensity:0,active:!1}}function i2(i,t,e){const n=new Jt,s=new q({color:N.bubbleIris,emissive:N.bubbleIris,emissiveIntensity:.15,transparent:!0,opacity:.25,roughness:0,metalness:.6}),o=new C(Bn.bubble,s);n.add(o);const r=new Z({color:15650047,transparent:!0,opacity:.1}),a=new C(new Pe(.13,.003,4,10),r);a.rotation.x=.5,a.rotation.y=M()*3,n.add(a);const l=new C(new Pe(.11,.003,4,10),r);l.rotation.x=-.8,l.rotation.z=1.2,n.add(l);const u=new Z({color:N.bubbleShine,transparent:!0,opacity:.5}),c=new C(new Y(.04,4,3),u);c.position.set(.05,.07,.08),n.add(c);const p=new Z({color:15658751,transparent:!0,opacity:.2}),f=new C(new Y(.025,3,3),p);f.position.set(-.06,-.04,-.06),n.add(f);const d=new Z({color:16755438,transparent:!0,opacity:.12}),g=new C(new Y(.06,4,3),d);g.position.set(.02,-.02,.01),n.add(g);const x=new Z({color:16772863,transparent:!0,opacity:.08}),h=new C(new Y(.12,5,4),x);n.add(h);const m=[16764125,13426175,14548940];for(let T=0;T<3;T++){const w=new Z({color:m[T],transparent:!0,opacity:.06}),S=new C(new Pe(.14-T*.02,.002,4,8),w);S.position.y=-.04+T*.04,S.rotation.x=Math.PI/2,n.add(S)}const _=new Z({color:16777215,transparent:!0,opacity:.6});for(let T=0;T<3;T++){const w=M()*6.28,S=M()*Math.PI-Math.PI/2,R=new C(new Y(.003,3,3),_);R.position.set(Math.cos(w)*Math.cos(S)*.14,Math.sin(S)*.14,Math.sin(w)*Math.cos(S)*.14),n.add(R)}const v=new Z({color:11189196,transparent:!0,opacity:.1}),y=new C(new Y(.015,3,3),v);y.position.set((M()-.5)*.04,(M()-.5)*.04,(M()-.5)*.04),n.add(y);const A=new Z({color:N.bubbleIris,transparent:!0,opacity:.15}),E=new C(new Y(.04,4,3),A);E.scale.set(1.3,.6,1.3),E.position.y=-.12,n.add(E);const b=.6+M()*.8;return n.scale.setScalar(b),n.position.set(i,t,e),ot.add(n),{group:n,shellMat:s,phase:M()*6.28,driftAng:M()*6.28,driftSpeed:.3+M()*.5,floatY:t,homeX:i,homeZ:e,bobAmp:.3+M()*.4,popped:!1,popTimer:0,sc:b}}function s2(i,t){const e=new Jt,n=1.5+M()*1,s=new q({color:329746,roughness:.9}),o=new C(new He(n*.85,10),s);o.rotation.x=-Math.PI/2,o.position.y=.005,e.add(o);const r=new q({color:N.pondWater,emissive:N.pondGlow,emissiveIntensity:.2,transparent:!0,opacity:.55,roughness:.05,metalness:.4}),a=new C(new He(n,12),r);a.rotation.x=-Math.PI/2,a.position.y=.03,e.add(a);const l=new q({color:3816002,roughness:.85}),u=5+Math.floor(M()*4);for(let D=0;D<u;D++){const z=D/u*6.28+M()*.3,H=n+M()*.2-.1,k=.06+M()*.08,O=new C(new Y(k,4,3),l);O.scale.set(1+M()*.5,.4+M()*.3,1+M()*.5),O.position.set(Math.cos(z)*H,k*.2,Math.sin(z)*H),O.rotation.set(M(),M(),M()),e.add(O)}const c=new q({color:1725728,roughness:.7,side:Pt});for(let D=0;D<3;D++){const z=M()*6.28,H=n*.85+M()*.2;for(let k=0;k<3;k++){const O=new C(new ue(.015,.15+M()*.1),c);O.position.set(Math.cos(z)*H+(M()-.5)*.05,.08,Math.sin(z)*H+(M()-.5)*.05),O.rotation.y=M()*3,O.rotation.x=-.2,e.add(O)}}const p=new Z({color:11197934,transparent:!0,opacity:.08}),f=[];for(let D=0;D<3;D++){const z=new C(new Pe(1,.004,4,20),p.clone());z.rotation.x=Math.PI/2,z.position.y=.036,e.add(z),f.push({mesh:z,phase:D/3})}const d=new q({color:N.lilyPad,roughness:.6,side:Pt}),g=4+Math.floor(M()*2),x=[];for(let D=0;D<g;D++){const z=M()*6.28,H=M()*n*.6,k=.15+M()*.15,O=new C(new He(k,8),d);O.rotation.x=-Math.PI/2,O.position.set(Math.cos(z)*H,.05,Math.sin(z)*H),e.add(O);const G=new Z({color:1724448,transparent:!0,opacity:.3}),et=new C(new gt(.002,.002,k*1.5,3),G);et.position.set(Math.cos(z)*H,.052,Math.sin(z)*H),et.rotation.x=Math.PI/2,et.rotation.z=M()*3,e.add(et),x.push({mesh:O,phase:M()*6.28})}const h=new q({color:N.lilyFlower,emissive:N.lilyGlow,emissiveIntensity:.4,transparent:!0,opacity:.85,side:Pt}),m=.08;for(let D=0;D<6;D++){const z=D/6*6.28,H=new C(new ue(.06,.05),h);H.position.set(x[0].mesh.position.x+Math.cos(z)*.05,m,x[0].mesh.position.z+Math.sin(z)*.05),H.rotation.x=-1,H.rotation.y=-z,e.add(H)}const _=new q({color:16777130,emissive:N.lilyGlow,emissiveIntensity:.8}),v=new C(new Y(.025,4,3),_);if(v.position.set(x[0].mesh.position.x,m+.02,x[0].mesh.position.z),e.add(v),x.length>2){const D=new q({color:N.lilyFlower,emissive:N.lilyGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),z=new C(new Y(.03,5,4),D);z.scale.set(.8,1.2,.8),z.position.set(x[2].mesh.position.x,.09,x[2].mesh.position.z),e.add(z)}const y=new q({color:3815477,roughness:.8,transparent:!0,opacity:.5});for(let D=0;D<5;D++){const z=M()*6.28,H=M()*n*.7,k=new C(new Y(.02+M()*.025,4,3),y);k.scale.set(1+M()*.5,.4,1+M()*.5),k.position.set(Math.cos(z)*H,.015,Math.sin(z)*H),e.add(k)}const A=new Z({color:2761752,transparent:!0,opacity:.12,side:Pt});for(let D=0;D<3;D++){const z=M()*6.28,H=M()*n*.5,k=new C(new He(.08+M()*.06,5),A);k.rotation.x=-Math.PI/2,k.position.set(Math.cos(z)*H,.012,Math.sin(z)*H),e.add(k)}const E=new q({color:1122837,roughness:.7,transparent:!0,opacity:.4}),b=[];for(let D=0;D<2;D++){const z=M()*6.28,H=M()*n*.4,k=new C(new Y(.012,4,3),E);k.scale.set(.8,.5,1.3),k.position.set(Math.cos(z)*H,.04,Math.sin(z)*H),e.add(k);const O=new C(new gt(.002,.001,.025,3),E);O.position.set(Math.cos(z)*H-Math.cos(z)*.02,.04,Math.sin(z)*H-Math.sin(z)*.02),O.rotation.z=Math.PI/2,O.rotation.y=z,e.add(O),b.push({body:k,tail:O,ang:z,orbR:.15+M()*n*.35,speed:.3+M()*.4})}const T=new Z({color:2250016,transparent:!0,opacity:.1,side:Pt});for(let D=0;D<3;D++){const z=M()*6.28,H=n*.7+M()*n*.25,k=new C(new He(.06+M()*.04,5),T);k.rotation.x=-Math.PI/2,k.position.set(Math.cos(z)*H,.032,Math.sin(z)*H),e.add(k)}const w=new Z({color:13426158,transparent:!0,opacity:.06}),S=new C(new Pe(n-.05,.01,4,16),w);S.rotation.x=Math.PI/2,S.position.y=.035,e.add(S);const R=new q({color:4861976,roughness:.8,side:Pt,transparent:!0,opacity:.6}),L=new C(new He(.03,5),R);return L.rotation.x=-Math.PI/2,L.position.set((M()-.5)*n*.5,.04,(M()-.5)*n*.5),e.add(L),e.position.set(i,0,t),ot.add(e),{group:e,waterMat:r,flMat:h,pads:x,ripples:f,tadpoles:b,x:i,z:t,phase:M()*6.28,pondR:n}}function o2(i,t){const e=new Jt,n=new Z({color:N.orbGold}),s=new C(new Y(.2,10,8),n);e.add(s);const o=new Z({color:16777215}),r=new C(new Y(.06,6,4),o);e.add(r);const a=new Z({color:16772744,transparent:!0,opacity:.4,wireframe:!0}),l=new C(new vr(.15,0),a);e.add(l);const u=new Z({color:N.orbGlow,transparent:!0,opacity:.5}),c=new C(new Y(.35,8,6),u);e.add(c);const p=new Z({color:N.orbGlow,transparent:!0,opacity:.3});for(let b=0;b<8;b++){const T=b/8*6.28,w=new C(new Dn(.02,.25,3),p);w.position.set(Math.cos(T)*.3,Math.sin(T*2)*.05,Math.sin(T)*.3),w.rotation.z=-T+Math.PI/2,w.rotation.y=T,e.add(w)}const f=new Z({color:N.orbInner,transparent:!0,opacity:.15}),d=new C(new Y(.6,8,5),f);e.add(d);for(let b=0;b<6;b++){const T=new C(new Y(.03,4,3),new Z({color:16777215})),w=b/6*6.28;T.position.set(Math.cos(w)*.4,Math.sin(w*2)*.1,Math.sin(w)*.4),e.add(T)}const g=new Z({color:N.orbGold,transparent:!0,opacity:.7});for(let b=0;b<4;b++){const T=b/4*6.28+.4,w=new C(new Y(.015,3,3),g);w.position.set(Math.cos(T)*.5,0,Math.sin(T)*.5),e.add(w)}const x=new Z({color:16768426,transparent:!0,opacity:.12});for(let b=0;b<3;b++){const T=new C(new Pe(.28,.003,4,12),x);T.rotation.set(b*1.05,b*.7,0),e.add(T)}const h=new Z({color:N.orbGlow,transparent:!0,opacity:.08}),m=new C(new Pe(.4,.004,4,16),h);m.rotation.x=Math.PI/2,e.add(m);const _=new Z({color:16772812,transparent:!0,opacity:.15}),v=new C(new Pe(.25,.012,4,10),_);v.rotation.x=Math.PI/2,e.add(v);const y=new Z({color:16777215,transparent:!0,opacity:.5});for(let b=0;b<6;b++){const T=M()*6.28,w=M()*Math.PI-Math.PI/2,S=new C(new Y(.008,3,3),y);S.position.set(Math.cos(T)*Math.cos(w)*.2,Math.sin(w)*.2,Math.sin(T)*Math.cos(w)*.2),e.add(S)}const A=new Z({color:N.orbGlow,transparent:!0,opacity:.1,side:Pt}),E=new C(new He(.5,8),A);return E.rotation.x=-Math.PI/2,E.position.y=-.95,e.add(E),e.position.set(i,1,t),ot.add(e),{group:e,coreMat:n,glowMat:u,hazeMat:f,x:i,z:t,found:!1,flyUp:!1,flyY:1,phase:M()*6.28,laserLine:null,laserMat:null}}const k0=[{palette:"rockGranite",roughness:.88,metalness:.04},{palette:"rockSandstone",roughness:.92,metalness:.02},{palette:"rockLimestone",roughness:.85,metalness:.03},{palette:"rockSlate",roughness:.9,metalness:.06},{palette:"rockBasalt",roughness:.94,metalness:.04}];function Ma(i,t,e){const n=i.attributes.position;for(let s=0;s<n.count;s++){const o=n.getX(s),r=n.getY(s),a=n.getZ(s),l=Math.sqrt(o*o+r*r+a*a)||1,u=o/l,c=r/l,p=a/l,f=Math.sin(o*4.3+e)*Math.sin(r*3.7+a*2.1+e*.7),d=Math.sin(a*5.1+e*1.3)*Math.sin(o*2.9+r*4.7)*.5,g=Math.sin((o+r)*3.1+e*2.1)*Math.sin((a-o)*2.7)*.3,x=(f+d+g)*t;n.setX(s,o+u*x),n.setY(s,r+c*x),n.setZ(s,a+p*x)}n.needsUpdate=!0,i.computeVertexNormals()}const Do=new st,H0=new st,V0=new st,W0=new st;function al(i,t){const e=i.attributes.position,n=e.count,s=new Float32Array(n*3);H0.set(t[0]),V0.set(t[1]),W0.set(t[2]);for(let o=0;o<n;o++){const r=e.getX(o),a=e.getY(o),l=e.getZ(o),u=Math.sqrt(r*r+a*a+l*l)||1,c=Math.max(0,Math.min(1,a/u*.5+.5)),p=Math.sin(r*11.3+l*7.7)*.5+.5;Do.copy(H0),Do.lerp(V0,c*.35+p*.2),Do.lerp(W0,(1-c)*.25),s[o*3]=Do.r,s[o*3+1]=Do.g,s[o*3+2]=Do.b}i.setAttribute("color",new ze(s,3))}function cl(){const i=k0[Math.floor(M()*k0.length)],t=N[i.palette];return{mat:new q({vertexColors:!0,roughness:i.roughness,metalness:i.metalness}),pal:t,type:i}}const Tm=new q({color:N.rockMoss,emissive:N.rockMoss,emissiveIntensity:.03,roughness:.95});function r2(i,t){const e=new Jt,{mat:n,pal:s}=cl(),o=M()*100,r=.3+M()*.5,a=new Y(r,10,8);Ma(a,r*.08,o),al(a,s);const l=new C(a,n),u=.35+M()*.3,c=.9+M()*.5,p=.9+M()*.5;l.scale.set(c,u,p),l.position.y=r*u*.25,l.rotation.set(M()*.4,M()*6.28,M()*.3),l.castShadow=!0,l.receiveShadow=!0,e.add(l);const f=1+Math.floor(M()*2);for(let d=0;d<f;d++){const{mat:g,pal:x}=cl(),h=r*(.25+M()*.35),m=new Y(h,8,6);Ma(m,h*.07,o+d*13.7),al(m,x);const _=new C(m,g),v=.3+M()*.35;_.scale.set(.9+M()*.4,v,.9+M()*.4);const y=M()*6.28,A=r*.5+M()*r*.4;_.position.set(Math.cos(y)*A,h*v*.2,Math.sin(y)*A),_.rotation.set(M()*.5,M()*6.28,M()*.4),_.receiveShadow=!0,e.add(_)}if(M()<.5){const d=r*.2+M()*r*.15,g=new C(new Y(d,5,4),Tm);g.scale.set(1.3,.15,1.3),g.position.set(M()*r*.2,r*u*.4,M()*r*.2),e.add(g)}return e.position.set(i,0,t),ot.add(e),{group:e,x:i,z:t,colR:r*.8}}function a2(i,t){const e=new Jt,{mat:n,pal:s}=cl(),o=M()*100,r=1.2+M()*1.8,a=new Y(r,14,10);Ma(a,r*.1,o),al(a,s);const l=new C(a,n),u=.45+M()*.25;if(l.scale.set(1+M()*.4,u,1+M()*.4),l.position.y=r*u*.3,l.rotation.set(M()*.2,M()*6.28,M()*.15),l.castShadow=!0,l.receiveShadow=!0,e.add(l),M()<.6){const{mat:p,pal:f}=cl(),d=r*(.3+M()*.25),g=new Y(d,10,8);Ma(g,d*.09,o+37.1),al(g,f);const x=new C(g,p),h=.3+M()*.25;x.scale.set(1.2+M()*.4,h,.9+M()*.4);const m=M()*6.28;x.position.set(Math.cos(m)*r*.7,d*h*.2,Math.sin(m)*r*.7),x.rotation.set(M()*.4,M()*6.28,M()*.3),x.castShadow=!0,e.add(x)}const c=2+Math.floor(M()*3);for(let p=0;p<c;p++){const f=r*.12+M()*r*.1,d=new C(new Y(f,5,4),Tm);d.scale.set(1.4,.15,1.4);const g=M()*6.28;d.position.set(Math.cos(g)*r*.3,r*u*.45+M()*.05,Math.sin(g)*r*.3),e.add(d)}return e.position.set(i,0,t),ot.add(e),{group:e,x:i,z:t,colR:r*.9}}let zn=null;const kr=new he;function c2(){const i=new Y(1,6,5);Ma(i,.08,42.7);const t=new q({color:N.rockBase,roughness:.9,metalness:.03});return zn=new jn(i,t,jf),zn.instanceMatrix.setUsage(Wc),zn.count=0,ot.add(zn),zn}const X0=new st,q0=[9079440,10127984,10526872,6320256,8026754,7366752,9472128];function l2(i,t,e){if(!zn)return;const n=zn.count;if(n>=jf)return;const s=.04+M()*.1;kr.position.set(i,e+s*.08,t),kr.rotation.set(M()*.5,M()*6.28,M()*.5),kr.scale.set(s*(.9+M()*.5),s*(.2+M()*.3),s*(.9+M()*.5)),kr.updateMatrix(),zn.setMatrixAt(n,kr.matrix),X0.set(q0[Math.floor(M()*q0.length)]),zn.setColorAt(n,X0),zn.count=n+1}function u2(){zn&&(zn.instanceMatrix.needsUpdate=!0,zn.instanceColor&&(zn.instanceColor.needsUpdate=!0))}let Em=null,Am=null,Rm=null,Cm=null,jh=[];function h2(){return Em}function f2(){return Am}function d2(){return Rm}function p2(){return Cm}function m2(){return jh}function g2(){const i=new Jt,t=new q({color:N.obeliskBlack,roughness:.2,metalness:.8,emissive:N.obeliskPink,emissiveIntensity:0});Am=t;const e=new C(new gt(1.2,1.8,Ce,4),t);e.position.y=Ce/2,e.rotation.y=Math.PI/4,e.castShadow=!0,i.add(e);const n=new Z({color:3351108,transparent:!0,opacity:.2});for(let T=0;T<4;T++){const w=T/4*6.28+Math.PI/4,S=new C(new gt(.03,.04,Ce*.9,3),n);S.position.set(Math.cos(w)*1.55,Ce*.45,Math.sin(w)*1.55),i.add(S)}const s=new Z({color:N.obeliskPink,transparent:!0,opacity:0});for(let T=0;T<4;T++){const w=T/4*6.28+Math.PI/4;for(let R=0;R<3;R++){const L=6+R*4,D=new C(new gt(.015,.015,.8,3),s);D.position.set(Math.cos(w)*1.6,L,Math.sin(w)*1.6),D.rotation.z=Math.PI/2,D.rotation.y=-w,D.visible=!1,i.add(D)}const S=new C(new gt(.012,.012,2.5,3),s);S.position.set(Math.cos(w)*1.6,12,Math.sin(w)*1.6),S.visible=!1,i.add(S)}const o=new q({color:N.obeliskBlack,roughness:.1,metalness:.9,emissive:N.obeliskPink,emissiveIntensity:0});Rm=o;const r=new C(new Dn(1.3,3,4),o);r.position.y=Ce+1.5,r.rotation.y=Math.PI/4,i.add(r);const a=new Z({color:N.obeliskPink,transparent:!0,opacity:0});for(let T=0;T<4;T++){const w=T/4*6.28+Math.PI/4,S=new C(new gt(.02,.02,3.2,3),a);S.position.set(Math.cos(w)*.8,Ce+1.5,Math.sin(w)*.8),S.rotation.z=.35*(w<3.14?1:-1),S.rotation.y=-w,S.visible=!1,i.add(S)}for(let T=0;T<5;T++){const w=new C(new Pe(1.85-T*.02,.04,6,4),new Z({color:2236979}));w.position.y=4+T*5,w.rotation.x=Math.PI/2,i.add(w)}const l=new q({color:1118488,roughness:.3,metalness:.7}),u=new C(new gt(2.2,2.5,.6,4),l);u.position.y=.3,u.rotation.y=Math.PI/4,i.add(u);const c=new C(new gt(2.8,3,.4,4),l);c.position.y=.05,c.rotation.y=Math.PI/4,i.add(c);const p=new Z({color:N.obeliskPink,transparent:!0,opacity:0});for(let T=0;T<8;T++){const w=T/8*6.28,S=new C(new Y(.06,4,3),p);S.position.set(Math.cos(w)*2.5,Ce*.7+T*.5,Math.sin(w)*2.5),S.visible=!1,i.add(S)}const f=new Z({color:1710626,transparent:!0,opacity:.08});for(let T=0;T<6;T++){const w=M()*6.28,S=2+M()*Ce*.7,R=new C(new gt(.008,.008,.5+M()*.5,3),f);R.position.set(Math.cos(w)*1.6,S,Math.sin(w)*1.6),R.rotation.z=(M()-.5)*.8,R.rotation.y=-w,i.add(R)}const d=new q({color:921108,roughness:.5,metalness:.4});for(let T=0;T<12;T++){const w=M()*6.28,S=3+M()*2,R=.15+M()*.25,L=new C(new Y(R,4,3),d);L.scale.set(1+M()*.5,.3+M()*.3,1+M()*.5),L.position.set(Math.cos(w)*S,R*.15,Math.sin(w)*S),L.rotation.set(M(),M(),M()),i.add(L)}const g=new Z({color:N.obeliskPink,transparent:!0,opacity:0});for(let T=0;T<4;T++){const w=T/4*6.28+Math.PI/4;for(let S=0;S<5;S++){const R=5+S*3.5+M()*.5,L=(M()-.5)*.4,D=new C(new Y(.04,4,3),g);D.position.set(Math.cos(w)*1.58+Math.cos(w+1.57)*L,R,Math.sin(w)*1.58+Math.sin(w+1.57)*L),D.visible=!1,i.add(D)}}const x=new Z({color:N.obeliskPink,transparent:!0,opacity:.8,blending:te,depthWrite:!1}),h=new C(new Y(.5,12,8),x);h.position.y=Ce+3,i.add(h);const m=new Z({color:N.obeliskPink,transparent:!0,opacity:.2,blending:te,depthWrite:!1}),_=new C(new Y(.9,8,6),m);_.position.y=Ce+3,i.add(_),Cm={mesh:h,haze:_,mat:x,hazeMat:m},jh=[];const v=[.8,1.1,1.4,1.8],y=[11158783,10040302,12277247,8921821];for(let T=0;T<4;T++){const w=new Z({color:y[T],transparent:!0,opacity:.4,blending:te,depthWrite:!1,side:Pt}),S=new C(new Pe(v[T],.02,6,24),w);S.position.y=Ce+3,S.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),i.add(S),jh.push({mesh:S,mat:w,rx:(Math.random()-.5)*2,ry:(Math.random()-.5)*2,rz:(Math.random()-.5)*1.5})}const A=new Z({color:0,transparent:!0,opacity:.15,side:Pt}),E=new C(new He(4,8),A);E.rotation.x=-Math.PI/2,E.position.y=.005,i.add(E),i.position.set(0,-Ce,0),ot.add(i),Em=i;const b=new Sr(8939212,0,30);i.add(b),b.position.set(0,Ce+1,0)}let Pm=null,Im=null;function x2(){return Pm}function v2(){return Im}function M2(){const i=new q({color:N.moatBlue,emissive:1136042,emissiveIntensity:.3,transparent:!0,opacity:0,roughness:.1,metalness:.3});Im=i;const t=new Jc;t.absarc(0,0,6,0,6.28,!1);const e=new Kc;e.absarc(0,0,3,0,6.28,!0),t.holes.push(e);const n=new ma(t,24),s=new C(n,i);s.rotation.x=-Math.PI/2,s.position.y=.05,s.visible=!1,ot.add(s),Pm=s;const o=new Z({color:4491468,transparent:!0,opacity:0});for(let d=0;d<12;d++){const g=d/12*6.28+M()*.3,x=3.5+M()*2,h=new C(new Y(.04+M()*.04,4,3),o);h.scale.set(1.2,.4,1.2),h.position.set(Math.cos(g)*x,.02,Math.sin(g)*x),h.visible=!1,ot.add(h)}const r=new Z({color:13426158,transparent:!0,opacity:0,side:Pt});for(let d=0;d<6;d++){const g=d/6*6.28+M()*.5,x=new C(new He(.12+M()*.1,5),r);x.rotation.x=-Math.PI/2,x.position.set(Math.cos(g)*3.3,.06,Math.sin(g)*3.3),x.visible=!1,ot.add(x)}const a=new Z({color:8960989,transparent:!0,opacity:0});for(let d=0;d<8;d++){const g=d/8*6.28,x=4+M()*1.5,h=new C(new gt(.003,.003,.4,3),a);h.position.set(Math.cos(g)*x,.055,Math.sin(g)*x),h.rotation.x=Math.PI/2,h.rotation.z=g+Math.PI/2,h.visible=!1,ot.add(h)}const l=new Z({color:264208,transparent:!0,opacity:0,side:Pt}),u=new Jc;u.absarc(0,0,5.2,0,6.28,!1);const c=new Kc;c.absarc(0,0,3.8,0,6.28,!0),u.holes.push(c);const p=new ma(u,16),f=new C(p,l);f.rotation.x=-Math.PI/2,f.position.y=.04,f.visible=!1,ot.add(f)}const _a=[];function Y0(i,t,e,n,s){const o=[],r=[],a=[];for(let u=0;u<e;u++){const c=i[u],p=i[u+1],f=p.x-c.x;p.y-c.y;const d=p.z-c.z,g=Math.sqrt(f*f+d*d)||1,x=-d/g,h=f/g,m=(u+.5)/e,_=.7+Math.sin(m*Math.PI)*.5,v=t*_/2,y=[c.x+x*v,c.y,c.z+h*v],A=[c.x-x*v,c.y,c.z-h*v],E=[p.x+x*v,p.y,p.z+h*v],b=[p.x-x*v,p.y,p.z-h*v];o.push(...y,...E,...A,...A,...E,...b);const T=u/e,w=(u+1)/e;if(a.push(T,0,w,0,T,1,T,1,w,0,w,1),s){const L=.85+Math.sin(m*Math.PI*3)*.15,D=1.2*L,z=.6*L;r.push(s.r*D,s.g*D,s.b*D),r.push(s.r*D,s.g*D,s.b*D),r.push(s.r*z,s.g*z,s.b*z),r.push(s.r*z,s.g*z,s.b*z),r.push(s.r*D,s.g*D,s.b*D),r.push(s.r*z,s.g*z,s.b*z)}}const l=new Ae;return l.setAttribute("position",new Vt(o,3)),l.setAttribute("uv",new Vt(a,2)),r&&l.setAttribute("color",new Vt(r,3)),l.computeVertexNormals(),l}function _2(){for(let l=0;l<6;l++){const u=N.rainbow[l],c=l/6*6.28,p=6+l*.8,f=Ce+6+l*2.5,d=1-l*.05,g=[],x=32;for(let H=0;H<=x;H++){const k=H/x,O=c+k*Math.PI,G=Math.cos(O)*p,et=Math.sin(O)*p,ct=Math.sin(k*Math.PI)*f;g.push(new F(G,ct,et))}const h=new st(u),m=Y0(g,d,x,!0,h),_=new Z({vertexColors:!0,transparent:!0,opacity:0,side:Pt,depthWrite:!1,blending:te}),v=new C(m,_);v.visible=!1,ot.add(v);const y=new co(g),A=new Z({color:16777215,transparent:!0,opacity:0,blending:te,depthWrite:!1}),E=new hn(y,x,.03,4,!1),b=new C(E,A);b.visible=!1,ot.add(b);const T=[],w=new Z({color:16777215,transparent:!0,opacity:0,blending:te,depthWrite:!1});for(let H=0;H<8;H++){const k=new C(new Y(.06,4,3),w.clone());k.visible=!1,ot.add(k),T.push({mesh:k,mat:k.material,phase:H/8,speed:.15+Math.random()*.1})}const S=new Z({color:u,transparent:!0,opacity:0,side:Pt,blending:te}),R=g[0],L=g[g.length-1],D=new C(new He(1.2,8),S);D.rotation.x=-Math.PI/2,D.position.set(R.x,.03,R.z),D.visible=!1,ot.add(D);const z=new C(new He(1.2,8),S.clone());z.rotation.x=-Math.PI/2,z.position.set(L.x,.03,L.z),z.visible=!1,ot.add(z),_a.push({mesh:v,mat:_,coreLine:b,coreMat:A,curve:y,sparkles:T,pools:[D,z],poolMat:S,targetOpacity:0})}const i=[],t=10,e=Ce+14,n=32;for(let l=0;l<=n;l++){const u=l/n,c=u*Math.PI;i.push(new F(Math.cos(c)*t,Math.sin(u*Math.PI)*e,Math.sin(c)*t))}const s=new st(15654399),o=Y0(i,1.5,n,!0,s),r=new Z({vertexColors:!0,transparent:!0,opacity:0,side:Pt,depthWrite:!1,blending:te}),a=new C(o,r);a.visible=!1,ot.add(a),_a.push({mesh:a,mat:r,targetOpacity:0})}function y2(i){for(let t=0;t<_a.length;t++){const e=_a[t];if(!(!e.sparkles||!e.curve)&&e.mesh.visible){e.coreLine&&(e.coreLine.visible=e.mesh.visible,e.coreMat.opacity=e.mat.opacity*.4);for(let n=0;n<e.sparkles.length;n++){const s=e.sparkles[n];s.phase+=s.speed*.016,s.phase>1&&(s.phase-=1);const o=e.curve.getPoint(s.phase);s.mesh.position.copy(o),s.mesh.visible=e.mesh.visible;const r=Math.sin(i*8+n*2.1)*.5+.5;s.mat.opacity=e.mat.opacity*r*.7}if(e.pools)for(let n=0;n<e.pools.length;n++)e.pools[n].visible=e.mesh.visible,e.poolMat&&(e.poolMat.opacity=e.mat.opacity*.3)}}}let En=null;const Si=[],Mn=new he,oa=new st;function w2(i){const t=new Z({color:16777215,transparent:!0,opacity:1});En=new jn(Bn.fly,t,i),En.instanceMatrix.setUsage(Se),En.instanceColor=new Ni(new Float32Array(i*3),3),En.instanceColor.setUsage(Se),Mn.scale.setScalar(0),Mn.updateMatrix();for(let e=0;e<i;e++){En.setMatrixAt(e,Mn.matrix);const n=e%3===0?N.fireflyB:N.firefly;oa.setHex(n),En.setColorAt(e,oa),Si.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,phase:Math.random()*6.28,wander:Math.random()*6.28,colorHex:n})}En.count=i,En.frustumCulled=!1,ot.add(En)}function Cc(i,t,e,n){let s=null;for(let o=0;o<Si.length;o++)if(!Si[o].active){s=Si[o];break}if(!s){let o=1/0;for(let r=0;r<Si.length;r++)Si[r].life<o&&(o=Si[r].life,s=Si[r])}s.x=i,s.y=t+.5+Math.random()*3,s.z=e,s.vx=(Math.random()-.5)*2,s.vy=Math.random()-.5,s.vz=(Math.random()-.5)*2,s.life=n,s.max=n,s.active=!0,s.wander=Math.random()*6.28}function Lm(i,t){let e=0,n=!1;for(let s=0;s<Si.length;s++){const o=Si[s];if(!o.active){Mn.position.set(0,-100,0),Mn.scale.setScalar(0),Mn.updateMatrix(),En.setMatrixAt(s,Mn.matrix);continue}if(o.life-=i,o.life<=0){o.active=!1,Mn.position.set(0,-100,0),Mn.scale.setScalar(0),Mn.updateMatrix(),En.setMatrixAt(s,Mn.matrix);continue}e++,o.wander+=(Math.random()-.5)*3*i,o.vx+=Math.cos(o.wander)*1.5*i,o.vz+=Math.sin(o.wander)*1.5*i,o.vy+=Math.sin(t*2+o.phase)*i,o.vx*=.995,o.vy*=.995,o.vz*=.995,o.x+=o.vx*i,o.y+=o.vy*i,o.z+=o.vz*i;const r=Dt(o.x,o.z)+.3;o.y<r&&(o.y=r,o.vy=Math.abs(o.vy)*.5),o.y>12&&(o.vy-=2*i);const a=Math.sin(t*3+o.phase)*.5+.5,u=o.life/o.max*(.4+a*.6),c=.6+a*.6;Mn.position.set(o.x,o.y,o.z),Mn.scale.setScalar(c),Mn.updateMatrix(),En.setMatrixAt(s,Mn.matrix),oa.setHex(o.colorHex),oa.multiplyScalar(u),En.setColorAt(s,oa),n=!0}return En.instanceMatrix.needsUpdate=!0,n&&(En.instanceColor.needsUpdate=!0),e}let An=null;const bi=[],_n=new he,ll=new st,S2=new st(N.spore);function b2(i){const t=new Z({color:16777215,transparent:!0,opacity:1});An=new jn(Bn.spore,t,i),An.instanceMatrix.setUsage(Se),An.instanceColor=new Ni(new Float32Array(i*3),3),An.instanceColor.setUsage(Se),_n.scale.setScalar(0),_n.updateMatrix();for(let e=0;e<i;e++)An.setMatrixAt(e,_n.matrix),ll.setHex(N.spore),An.setColorAt(e,ll),bi.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});An.count=i,An.frustumCulled=!1,ot.add(An)}function T2(i,t,e){let n=null;for(let s=0;s<bi.length;s++)if(!bi[s].active){n=bi[s];break}if(!n){let s=1/0;for(let o=0;o<bi.length;o++)bi[o].life<s&&(s=bi[o].life,n=bi[o])}n.x=i,n.y=t,n.z=e,n.vx=(Math.random()-.5)*.3,n.vy=.4+Math.random()*.4,n.vz=(Math.random()-.5)*.3,n.life=3+Math.random()*3,n.max=n.life,n.active=!0}let Dm=0,Um=0;function E2(i,t){Dm=i,Um=t}function A2(i){let t=0,e=!1;for(let n=0;n<bi.length;n++){const s=bi[n];if(!s.active){_n.position.set(0,-100,0),_n.scale.setScalar(0),_n.updateMatrix(),An.setMatrixAt(n,_n.matrix);continue}if(s.life-=i,s.life<=0){s.active=!1,_n.position.set(0,-100,0),_n.scale.setScalar(0),_n.updateMatrix(),An.setMatrixAt(n,_n.matrix);continue}t++,s.vy+=.3*i,s.vx+=Dm*.3*i,s.vz+=Um*.3*i,s.vx*=.997,s.vy*=.997,s.vz*=.997,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i;const o=s.life/s.max*.7;_n.position.set(s.x,s.y,s.z),_n.scale.setScalar(1),_n.updateMatrix(),An.setMatrixAt(n,_n.matrix),ll.copy(S2).multiplyScalar(o),An.setColorAt(n,ll),e=!0}return An.instanceMatrix.needsUpdate=!0,e&&(An.instanceColor.needsUpdate=!0),t}let Rn=null;const nr=[];let wu=0;const yn=new he,ul=new st,Nm=new st(N.starMote);function R2(i){const t=new Z({color:16777215,transparent:!0,opacity:1});Rn=new jn(Bn.starMote,t,i),Rn.instanceMatrix.setUsage(Se),Rn.instanceColor=new Ni(new Float32Array(i*3),3),Rn.instanceColor.setUsage(Se),yn.scale.setScalar(0),yn.updateMatrix();for(let e=0;e<i;e++)Rn.setMatrixAt(e,yn.matrix),ul.copy(Nm),Rn.setColorAt(e,ul),nr.push({x:0,y:0,z:0,life:0,max:0,active:!1,vy:0,drift:0});Rn.count=i,Rn.frustumCulled=!1,ot.add(Rn)}function C2(i){let t=null;for(let e=0;e<nr.length;e++)if(!nr[e].active){t=nr[e];break}t&&(t.x=i.x+(Math.random()-.5)*60,t.z=i.z+(Math.random()-.5)*60,t.y=15+Math.random()*20,t.life=6+Math.random()*6,t.max=t.life,t.active=!0,t.vy=-.15-Math.random()*.3,t.drift=Math.random()*6.28)}function zm(i,t,e){wu+=i,wu>.15&&(wu=0,C2(e));let n=!1;for(let s=0;s<nr.length;s++){const o=nr[s];if(!o.active){yn.position.set(0,-100,0),yn.scale.setScalar(0),yn.updateMatrix(),Rn.setMatrixAt(s,yn.matrix);continue}if(o.life-=i,o.life<=0||o.y<.5){o.active=!1,yn.position.set(0,-100,0),yn.scale.setScalar(0),yn.updateMatrix(),Rn.setMatrixAt(s,yn.matrix);continue}o.y+=o.vy*i,o.drift+=(Math.random()-.5)*.5*i,o.x+=Math.sin(o.drift)*.1*i,o.z+=Math.cos(o.drift)*.08*i;const r=o.life/o.max,a=Math.sin(t*4+s)*.3+.7,l=r*a*.7,u=.5+a*.5;yn.position.set(o.x,o.y,o.z),yn.scale.setScalar(u),yn.updateMatrix(),Rn.setMatrixAt(s,yn.matrix),ul.copy(Nm).multiplyScalar(l),Rn.setColorAt(s,ul),n=!0}Rn.instanceMatrix.needsUpdate=!0,n&&(Rn.instanceColor.needsUpdate=!0)}let Cn=null;const ir=[],wn=new he,hl=new st,Fm=new st(8956535);function P2(i){const t=new Z({color:16777215,transparent:!0,opacity:1});Cn=new jn(Bn.dustMote,t,i),Cn.instanceMatrix.setUsage(Se),Cn.instanceColor=new Ni(new Float32Array(i*3),3),Cn.instanceColor.setUsage(Se),wn.scale.setScalar(0),wn.updateMatrix();for(let e=0;e<i;e++)Cn.setMatrixAt(e,wn.matrix),hl.copy(Fm),Cn.setColorAt(e,hl),ir.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});Cn.count=i,Cn.frustumCulled=!1,ot.add(Cn)}function Z0(i,t,e){for(let n=0;n<e;n++){let s=null;for(let a=0;a<ir.length;a++)if(!ir[a].active){s=ir[a];break}if(!s)continue;const o=Math.random()*6.28,r=1+Math.random()*2;s.x=i+Math.cos(o)*.2,s.y=Dt(i,t)+.1,s.z=t+Math.sin(o)*.2,s.vx=Math.cos(o)*r,s.vy=.5+Math.random()*1.5,s.vz=Math.sin(o)*r,s.life=.6+Math.random()*.6,s.max=s.life,s.active=!0}}function I2(i){let t=!1;for(let e=0;e<ir.length;e++){const n=ir[e];if(!n.active){wn.position.set(0,-100,0),wn.scale.setScalar(0),wn.updateMatrix(),Cn.setMatrixAt(e,wn.matrix);continue}if(n.life-=i,n.life<=0){n.active=!1,wn.position.set(0,-100,0),wn.scale.setScalar(0),wn.updateMatrix(),Cn.setMatrixAt(e,wn.matrix);continue}n.vy-=3*i,n.vx*=.96,n.vy*=.96,n.vz*=.96,n.x+=n.vx*i,n.y+=n.vy*i,n.z+=n.vz*i;const s=Dt(n.x,n.z)+.05;n.y<s&&(n.y=s,n.vy=0,n.vx*=.8,n.vz*=.8);const o=n.life/n.max*.4;wn.position.set(n.x,n.y,n.z),wn.scale.setScalar(1),wn.updateMatrix(),Cn.setMatrixAt(e,wn.matrix),hl.copy(Fm).multiplyScalar(o),Cn.setColorAt(e,hl),t=!0}Cn.instanceMatrix.needsUpdate=!0,t&&(Cn.instanceColor.needsUpdate=!0)}let Pn=null;const sr=[],Sn=new he,fl=new st,Om=new st(N.bubblePop),L2=new Y(.02,3,3);function D2(i){const t=new Z({color:16777215,transparent:!0,opacity:1});Pn=new jn(L2,t,i),Pn.instanceMatrix.setUsage(Se),Pn.instanceColor=new Ni(new Float32Array(i*3),3),Pn.instanceColor.setUsage(Se),Sn.scale.setScalar(0),Sn.updateMatrix();for(let e=0;e<i;e++)Pn.setMatrixAt(e,Sn.matrix),fl.copy(Om),Pn.setColorAt(e,fl),sr.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});Pn.count=i,Pn.frustumCulled=!1,ot.add(Pn)}function U2(i,t,e,n){for(let s=0;s<n;s++){let o=null;for(let u=0;u<sr.length;u++)if(!sr[u].active){o=sr[u];break}if(!o)continue;const r=Math.random()*6.28,a=Math.random()*3.14,l=1+Math.random()*2;o.x=i,o.y=t,o.z=e,o.vx=Math.cos(r)*Math.sin(a)*l,o.vy=Math.cos(a)*l,o.vz=Math.sin(r)*Math.sin(a)*l,o.life=.4+Math.random()*.4,o.max=o.life,o.active=!0}}function N2(i){let t=!1;for(let e=0;e<sr.length;e++){const n=sr[e];if(!n.active){Sn.position.set(0,-100,0),Sn.scale.setScalar(0),Sn.updateMatrix(),Pn.setMatrixAt(e,Sn.matrix);continue}if(n.life-=i,n.life<=0){n.active=!1,Sn.position.set(0,-100,0),Sn.scale.setScalar(0),Sn.updateMatrix(),Pn.setMatrixAt(e,Sn.matrix);continue}n.vy-=2*i,n.vx*=.97,n.vy*=.97,n.vz*=.97,n.x+=n.vx*i,n.y+=n.vy*i,n.z+=n.vz*i;const s=n.life/n.max*.8;Sn.position.set(n.x,n.y,n.z),Sn.scale.setScalar(1),Sn.updateMatrix(),Pn.setMatrixAt(e,Sn.matrix),fl.copy(Om).multiplyScalar(s),Pn.setColorAt(e,fl),t=!0}Pn.instanceMatrix.needsUpdate=!0,t&&(Pn.instanceColor.needsUpdate=!0)}let In=null;const or=[],ln=new he,dl=new st,Bm=[new st(N.leafGlow),new st(3394662),new st(2271880),new st(5636044),new st(4513262)];let Gm=0,km=0;function z2(i,t,e){Gm=i,km=t}function F2(i){const t=new ue(.12,.08),e=new Z({color:16777215,transparent:!0,opacity:1,side:Pt,depthWrite:!1,blending:te});In=new jn(t,e,i),In.instanceMatrix.setUsage(Se),In.instanceColor=new Ni(new Float32Array(i*3),3),In.instanceColor.setUsage(Se),ln.scale.setScalar(0),ln.updateMatrix();for(let n=0;n<i;n++)In.setMatrixAt(n,ln.matrix),dl.setHex(0),In.setColorAt(n,dl),or.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,rvx:0,rvy:0,rvz:0,life:0,max:0,active:!1,colorIdx:0});In.count=i,In.frustumCulled=!1,ot.add(In)}function O2(i,t,e){let n=null;for(let o=0;o<or.length;o++)if(!or[o].active){n=or[o];break}if(!n)return;n.x=i+(Math.random()-.5)*2,n.y=t+Math.random()*2,n.z=e+(Math.random()-.5)*2;const s=Math.random()*6.28;n.vx=Math.cos(s)*.3,n.vy=-.2-Math.random()*.3,n.vz=Math.sin(s)*.3,n.rvx=(Math.random()-.5)*4,n.rvy=(Math.random()-.5)*3,n.rvz=(Math.random()-.5)*2,n.rx=Math.random()*6.28,n.ry=Math.random()*6.28,n.rz=Math.random()*6.28,n.life=4+Math.random()*4,n.max=n.life,n.active=!0,n.colorIdx=Math.floor(Math.random()*Bm.length)}function B2(i,t){let e=!1;for(let n=0;n<or.length;n++){const s=or[n];if(!s.active){ln.position.set(0,-100,0),ln.scale.setScalar(0),ln.updateMatrix(),In.setMatrixAt(n,ln.matrix);continue}if(s.life-=i,s.life<=0||s.y<-.5){s.active=!1,ln.position.set(0,-100,0),ln.scale.setScalar(0),ln.updateMatrix(),In.setMatrixAt(n,ln.matrix);continue}s.vx+=Gm*.4*i,s.vz+=km*.4*i,s.vx+=Math.sin(t*3+n*1.7)*.5*i,s.vz+=Math.cos(t*2.5+n*2.1)*.3*i,s.vy-=.3*i,s.vx*=.995,s.vy=Math.max(s.vy,-.8),s.vz*=.995,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i,s.rx+=s.rvx*i,s.ry+=s.rvy*i,s.rz+=s.rvz*i;const o=s.life/s.max,r=o*(.6+Math.sin(t*2+n*.8)*.4),a=.8+o*.4;ln.position.set(s.x,s.y,s.z),ln.rotation.set(s.rx,s.ry,s.rz),ln.scale.setScalar(a),ln.updateMatrix(),In.setMatrixAt(n,ln.matrix),dl.copy(Bm[s.colorIdx]).multiplyScalar(r),In.setColorAt(n,dl),e=!0}In.instanceMatrix.needsUpdate=!0,e&&(In.instanceColor.needsUpdate=!0)}const fc=40,Kh=8;let un=null;const Ti=[],Yn=new he,ws=new st,Hm=new st(4513194);let $0=0,j0=0,id=!1;function G2(){const i=new Jc;return i.moveTo(0,-.18),i.quadraticCurveTo(.1,-.17,.11,-.06),i.lineTo(.1,-.02),i.lineTo(.13,.12),i.quadraticCurveTo(.125,.14,.11,.12),i.lineTo(.08,0),i.quadraticCurveTo(.05,-.02,.03,0),i.lineTo(.03,.05),i.lineTo(.02,.22),i.quadraticCurveTo(0,.245,-.02,.22),i.lineTo(-.03,.05),i.lineTo(-.03,0),i.quadraticCurveTo(-.05,-.02,-.08,0),i.lineTo(-.11,.12),i.quadraticCurveTo(-.125,.14,-.13,.12),i.lineTo(-.1,-.02),i.lineTo(-.11,-.06),i.quadraticCurveTo(-.1,-.17,0,-.18),new ma(i)}function k2(){const i=G2(),t=new Z({color:16777215,transparent:!0,opacity:1,blending:te,depthWrite:!1,side:Pt});un=new jn(i,t,fc),un.instanceMatrix.setUsage(Se),un.instanceColor=new Ni(new Float32Array(fc*3),3),un.instanceColor.setUsage(Se),Yn.position.set(0,-100,0),Yn.scale.setScalar(0),Yn.updateMatrix();for(let e=0;e<fc;e++)un.setMatrixAt(e,Yn.matrix),ws.setScalar(0),un.setColorAt(e,ws),Ti.push({active:!1,life:0,maxLife:Kh,x:0,z:0});un.count=fc,un.frustumCulled=!1,ot.add(un),id=!0}function H2(i,t,e,n){if(!id)return;const s=i-$0,o=t-j0;if(s*s+o*o<(n?.25:.64))return;$0=i,j0=t;let l=null,u=-1;for(let h=0;h<Ti.length;h++)if(!Ti[h].active){l=Ti[h],u=h;break}if(!l){let h=1/0;for(let m=0;m<Ti.length;m++)Ti[m].life<h&&(h=Ti[m].life,l=Ti[m],u=m)}const c=Dt(i,t);l.active=!0,l.life=Kh,l.maxLife=Kh,l.x=i,l.z=t;const p=u%2===0?1:-1,f=Math.sin(e+Math.PI/2)*.12*p,d=Math.cos(e+Math.PI/2)*.12*p,g=n?1.15:1;Yn.position.set(i+f,c+.04,t+d),Yn.rotation.set(-Math.PI/2,0,-e+(Math.random()-.5)*.15),Yn.scale.set(g,g,g),Yn.updateMatrix(),un.setMatrixAt(u,Yn.matrix);const x=n?1.2:.85;ws.copy(Hm).multiplyScalar(x),un.setColorAt(u,ws)}function V2(i,t){if(!id)return;const e=1+(t||0)*1.5;let n=!1;for(let s=0;s<Ti.length;s++){const o=Ti[s];if(!o.active)continue;if(o.life-=i*e,o.life<=0){o.active=!1,Yn.position.set(0,-100,0),Yn.scale.setScalar(0),Yn.updateMatrix(),un.setMatrixAt(s,Yn.matrix),ws.setScalar(0),un.setColorAt(s,ws),n=!0;continue}const r=o.life/o.maxLife,a=r*r;ws.copy(Hm).multiplyScalar(a*.85),un.setColorAt(s,ws),n=!0}un.instanceMatrix.needsUpdate=!0,n&&(un.instanceColor.needsUpdate=!0)}const Zn=[],qi=[];let K0=Ce+2,ps=1;function J0(i){ps=i}function W2(){for(let i=0;i<Zn.length;i++){const t=Zn[i];ot.remove(t.upTube),t.upTube.geometry.dispose(),t.mat.dispose(),ot.remove(t.upGlow),t.upGlow.geometry.dispose(),t.glowMat.dispose(),ot.remove(t.bendTube),t.bendTube.geometry.dispose(),t.bendMat.dispose(),ot.remove(t.bendGlow),t.bendGlow.geometry.dispose(),t.bendGlowMat.dispose()}Zn.length=0;for(let i=0;i<qi.length;i++){const t=qi[i];ot.remove(t.tube),t.tube.geometry.dispose(),t.mat.dispose(),ot.remove(t.glow),t.glow.geometry.dispose(),t.glowMat.dispose()}qi.length=0}function Vm(i,t,e,n){const s=[];for(let r=0;r<=12;r++){const a=r/12,l=i*(1-a*a),u=t*(1-a*a),c=e+(n-e)*a;s.push(new F(l,c,u))}return{curve:new co(s),pts:s}}function X2(i,t,e,n){const s=n||Ce+2,o=e+15,r=new Wf(new F(i,e,t),new F(i,o,t)),a=new Z({color:N.laserPink,transparent:!0,opacity:0,blending:te,depthWrite:!1}),l=new C(new hn(r,1,.06,6,!1),a);ot.add(l);const u=new Z({color:N.laserGlow,transparent:!0,opacity:0,blending:te,depthWrite:!1}),c=new C(new hn(r,1,.2,6,!1),u);ot.add(c);const{curve:p}=Vm(i,t,o,s),f=new Z({color:N.laserPink,transparent:!0,opacity:0,blending:te,depthWrite:!1}),d=new C(new hn(p,16,.05,6,!1),f);ot.add(d);const g=new Z({color:N.laserGlow,transparent:!0,opacity:0,blending:te,depthWrite:!1}),x=new C(new hn(p,16,.18,6,!1),g);ot.add(x);const h={upTube:l,upGlow:c,bendTube:d,bendGlow:x,mat:a,glowMat:u,bendMat:f,bendGlowMat:g,fromX:i,fromZ:t,floatY:e,skyY:o,tipY:s,animPhase:0,animTimer:0};Zn.push(h);for(let m=0;m<Zn.length-1;m++){const _=Zn[m],v=(h.skyY+_.skyY)/2,y=[];for(let S=0;S<=8;S++){const R=S/8,L=h.fromX*(1-R)+_.fromX*R,D=h.fromZ*(1-R)+_.fromZ*R,z=v+Math.sin(R*Math.PI)*3;y.push(new F(L,z,D))}const A=new co(y),E=new Z({color:N.laserGlow,transparent:!0,opacity:0,blending:te,depthWrite:!1}),b=new C(new hn(A,10,.03,4,!1),E);ot.add(b);const T=new Z({color:N.laserPink,transparent:!0,opacity:0,blending:te,depthWrite:!1}),w=new C(new hn(A,10,.1,4,!1),T);ot.add(w),qi.push({tube:b,glow:w,mat:E,glowMat:T,opacity:0})}return h}function q2(i){for(let t=0;t<Zn.length;t++){const e=Zn[t];e.tipY=i;const{curve:n}=Vm(e.fromX,e.fromZ,e.skyY,i);ot.remove(e.bendTube),e.bendTube.geometry.dispose(),e.bendTube.geometry=new hn(n,16,.05,6,!1),ot.add(e.bendTube),ot.remove(e.bendGlow),e.bendGlow.geometry.dispose(),e.bendGlow.geometry=new hn(n,16,.18,6,!1),ot.add(e.bendGlow)}}function Y2(i,t,e){const n=e||Ce+2;Math.abs(n-K0)>.1&&Zn.length>0&&(q2(n),K0=n);for(let s=0;s<Zn.length;s++){const o=Zn[s];if(o.animTimer+=i,o.animPhase===0){const r=Math.min(o.animTimer/.5,1);o.mat.opacity=r*.8,o.glowMat.opacity=r*.3,o.animTimer>.5&&(o.animPhase=1,o.animTimer=0)}else if(o.animPhase===1){const r=Math.min(o.animTimer/.8,1);o.bendMat.opacity=r*.7,o.bendGlowMat.opacity=r*.2,o.mat.opacity=.8,o.glowMat.opacity=.3,o.animTimer>.8&&(o.animPhase=2)}else{const r=Math.sin(t*3+s*1.2)*.5+.5;o.mat.opacity=.5+r*.4,o.glowMat.opacity=.15+r*.15,o.bendMat.opacity=.4+r*.3,o.bendGlowMat.opacity=.1+r*.12}}for(let s=0;s<qi.length;s++){const o=qi[s];o.opacity=Math.min(o.opacity+i*.5,.3);const r=Math.sin(t*2+s*.8)*.5+.5;o.mat.opacity=o.opacity*(.6+r*.4),o.glowMat.opacity=o.opacity*(.2+r*.15)}if(ps<1){for(let s=0;s<Zn.length;s++){const o=Zn[s];o.mat.opacity*=ps,o.glowMat.opacity*=ps,o.bendMat.opacity*=ps,o.bendGlowMat.opacity*=ps}for(let s=0;s<qi.length;s++)qi[s].mat.opacity*=ps,qi[s].glowMat.opacity*=ps}}const Z2=new st(N.orbGold),$2=new st(16777215);let gs=0,nn="SEEK",ms=-Ce,cn=0,Zr=[],si=null,ks=null,Hs=null,ve=null,Vs=[],Wi=null,Jh=null,oi=[],$r=null,Wm=null,Xm=null,Qh=null,tf=null,ef=null,nf=null,Pc=null,sf=null,of=[],rf=[],af=[],cf=[],Fo=[],lf=[],Oo=null,Q0=0,en=0,yi=[],Xo=null,tp=!1,ep=!1;const qo=200;let ai=null;const sd=[];let qm=!1;function j2(){if(ai)return;const i=new Ae,t=new Float32Array(qo*3),e=new Float32Array(qo*3),n=new Float32Array(qo);i.setAttribute("position",new ze(t,3)),i.setAttribute("color",new ze(e,3)),i.setAttribute("size",new ze(n,1)),i.attributes.position.setUsage(Se),i.attributes.color.setUsage(Se),i.attributes.size.setUsage(Se);const s=new kf({size:.3,vertexColors:!0,transparent:!0,opacity:.9,blending:te,depthWrite:!1,sizeAttenuation:!0});ai=new Vp(i,s),ai.visible=!1,ot.add(ai);const o=new st(N.obeliskPink),r=new st(11158783);for(let a=0;a<qo;a++){const l=Math.random()<.7?o:r;e[a*3]=l.r*(.8+Math.random()*.4),e[a*3+1]=l.g*(.8+Math.random()*.4),e[a*3+2]=l.b*(.8+Math.random()*.4),n[a]=.15+Math.random()*.25,sd.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,active:!1,sparklePhase:Math.random()*6.28})}i.attributes.color.needsUpdate=!0,i.attributes.size.needsUpdate=!0}function K2(i,t,e){qm=!0,ai.visible=!0;for(let n=0;n<qo;n++){const s=sd[n];s.x=i,s.y=t,s.z=e;const o=Math.random()*6.28,r=Math.random()*Math.PI,a=2+Math.random()*5;s.vx=Math.sin(r)*Math.cos(o)*a,s.vy=Math.cos(r)*a*.5+Math.random()*2,s.vz=Math.sin(r)*Math.sin(o)*a,s.life=5+Math.random()*6,s.active=!0}}function J2(i,t){if(!ai||!ai.visible)return;const e=ai.geometry.attributes.position.array,n=ai.geometry.attributes.size.array;let s=!1;for(let o=0;o<qo;o++){const r=sd[o];if(!r.active){e[o*3+1]=-100,n[o]=0;continue}if(s=!0,r.life-=i,r.life<=0||r.y<-1){r.active=!1;continue}r.vy-=1.5*i,r.vx*=.995,r.vz*=.995,r.vx+=Math.sin(t*3+o*.7)*.3*i,r.vz+=Math.cos(t*2.5+o*1.1)*.2*i,r.x+=r.vx*i,r.y+=r.vy*i,r.z+=r.vz*i,e[o*3]=r.x,e[o*3+1]=r.y,e[o*3+2]=r.z;const a=Math.sin(t*6+r.sparklePhase)*.5+.5,l=Math.min(r.life/2,1);n[o]=(.15+a*.2)*l}ai.geometry.attributes.position.needsUpdate=!0,ai.geometry.attributes.size.needsUpdate=!0,s||(ai.visible=!1)}function Q2(i){Zr=i.orbs,si=i.obeliskGroup,ks=i.obeliskMat,Hs=i.obeliskGlowMat,ve=i.pinnacleOrb,Vs=i.pinnacleRings||[],Wi=i.moatMesh,Jh=i.moatMat,oi=i.rainbowArcs,$r=i.player,Wm=i.makeLaser,Xm=i.orbHudEl,of=i.deers||[],rf=i.puffs||[],af=i.jellies||[],cf=i.moths||[],Fo=i.trees||[],lf=i.treeMeshes||[],Oo=i.groundMesh||null,Qh=i.playOrbCollect||null,tf=i.playOrbWarble||null,ef=i.playLaserZap||null,nf=i.playLaserHum||null,Pc=i.stopLaserHums||null,sf=i.notifyOrbCollected||null,j2()}function tb(i,t){let e=null,n=1/0;for(let l=0;l<Zr.length;l++){const u=Zr[l];if(u.found)continue;const c=u.x-$r.pos.x,p=u.z-$r.pos.z,f=c*c+p*p;f<n&&(n=f,e=u)}if(e&&n<Po*Po){const l=Math.sin(t*2+e.phase)*.5+.5;Yr.position.set(e.x,1,e.z),Yr.intensity=1+l*2,Yr.distance=Po}else Yr.intensity=0;for(let l=0;l<Zr.length;l++){const u=Zr[l];if(!(u.found&&!u.flyUp&&!u._flashing)){if(!u.found){const c=Math.sin(t*1.5+u.phase)*.5+.5;u.group.position.y=u.flyY+Math.sin(t*.8+u.phase)*.3,u.glowMat.opacity=.3+c*.4,u.hazeMat.opacity=.08+c*.12;const p=u.x-$r.pos.x,f=u.z-$r.pos.z,d=p*p+f*f,g=Po*Po;if(d<g){const x=1-Math.sqrt(d)/Po,h=x*x;u.glowMat.opacity=Math.min(.3+c*.4+h*.5,1),u.hazeMat.opacity=Math.min(.08+c*.12+h*.25,.6),u.coreMat.color.copy($2).lerp(Z2,1-h);const m=1+h*.3;u.group.scale.setScalar(m)}else u.group.scale.setScalar(1);for(let x=3;x<u.group.children.length;x++){const h=u.group.children[x],m=(x-3)/6*6.28+t*1.5;h.position.x=Math.cos(m)*.4,h.position.z=Math.sin(m)*.4,h.position.y=Math.sin(m*2+t)*.1}if(d<A0*A0){u.found=!0,u._flashing=!0,u._flashTimer=0,u.flyY=u.group.position.y,gs++;const x=Xm||document.getElementById("orb-hud");x&&(x.innerHTML="✦ "+gs+" / "+qn),nn==="SEEK"&&(nn="RISING"),Qh&&Qh(),sf&&sf(l)}}if(u._flashing){u._flashTimer+=i;const c=Math.min(u._flashTimer/1.5,1),p=c<.3?c/.3:1-(c-.3)/.7;u.glowMat.opacity=.5+p*.5,u.hazeMat.opacity=.3+p*.5,u.group.scale.setScalar(1+p*.6),u.group.position.x=u.x+Math.sin(t*30)*p*.05,u.group.position.z=u.z+Math.cos(t*25)*p*.05,u._flashTimer>1.5&&(u._flashing=!1,u.flyUp=!0,u.group.position.x=u.x,u.group.position.z=u.z,tf&&tf())}if(u.flyUp){const c=Ce+5;u.flyY+=(c-u.flyY)*i*.8,u.group.position.y=u.flyY;const p=Math.min((u.flyY-1)/(c-1),1);if(u.group.scale.setScalar(1-p*.6),u.glowMat.opacity=.8-p*.5,u.flyY>c-1&&!u.laserLine){u.flyUp=!1,u.group.visible=!1;const f=Su();u.laserLine=Wm(u.x,u.z,0,f),ef&&ef(),nf&&nf(u.x,u.z)}}}}const s=Ce/qn,o=-Ce+gs*s;if(ms<o-.01?(ms+=8*i,ms>o&&(ms=o),si&&(si.position.y=ms,si.position.x=Math.sin(t*25)*.04,si.position.z=Math.cos(t*30)*.03)):si&&(si.position.x*=.9,si.position.z*=.9),gs>=qn&&ms>=-.01&&nn==="RISING"&&(nn="COMPLETE",cn=0),si){si.rotation.y+=i*.03;const l=si.children[si.children.length-1];if(l&&l.isLight){const u=Math.max(0,Math.min(1,(ms+Ce)/Ce));l.intensity=u*1.5*(.8+Math.sin(t*1.5)*.2)}}if(ve&&ve.mesh.visible){const l=Math.sin(t*2)*.5+.5;ve.mat.opacity=.6+l*.3,ve.hazeMat.opacity=.15+l*.12;const u=gs/qn;ve.mat.opacity*=.3+u*.7,ve.hazeMat.opacity*=.2+u*.8}for(let l=0;l<Vs.length;l++){const u=Vs[l];if(!u.mesh.visible)continue;u.mesh.rotation.x+=u.rx*i,u.mesh.rotation.y+=u.ry*i,u.mesh.rotation.z+=u.rz*i;const c=gs/qn;u.mat.opacity=(.15+c*.35)*(.8+Math.sin(t*1.5+l)*.2)}const a=Su();if(Y2(i,t,a),nn==="COMPLETE"&&cn>3?J0(Math.max(0,1-(cn-3)/4)):(nn==="FINALE"||nn==="TRANSFORM")&&(J0(0),Pc&&(Pc(),Pc=null)),J2(i,t),nn==="COMPLETE"){cn+=i;const l=Math.min(cn/3,1);if(ks&&(ks.emissiveIntensity=l*1.5),Hs&&(Hs.emissiveIntensity=l*2.5),ve&&ve.mesh.visible&&cn>1&&cn<3){const u=Math.min((cn-1)/1.5,1);ve.mat.opacity=.9+u*.1,ve.hazeMat.opacity=.5+u*.5,ve.mesh.scale.setScalar(1+u*.5),ve.haze.scale.setScalar(1+u*1);for(let c=0;c<Vs.length;c++){const p=Vs[c];p.mesh.rotation.x+=p.rx*i*(1+u*4),p.mesh.rotation.y+=p.ry*i*(1+u*4),p.mesh.rotation.z+=p.rz*i*(1+u*4)}}if(ve&&ve.mesh.visible&&cn>=3&&!qm){const u=new F;ve.mesh.getWorldPosition(u),K2(u.x,u.y,u.z),ve.mesh.visible=!1,ve.haze.visible=!1;for(let c=0;c<Vs.length;c++)Vs[c].mesh.visible=!1}if(cn>3&&Jh){const u=Math.min((cn-3)/4,1);Jh.opacity=u*.6,Wi&&(Wi.visible||(Wi.visible=!0),Wi.position.y=.05+Math.sin(t*3)*.02*u)}if(cn>4)for(let u=0;u<oi.length;u++){const c=u*.3,p=Math.min(Math.max((cn-4-c)/2,0),1);p>0&&!oi[u].mesh.visible&&(oi[u].mesh.visible=!0),oi[u].mat.opacity=p*.55,oi[u].mesh.rotation.y+=i*.1*(u+1)*.3}if(cn>3){const u=Math.min((cn-3)/6,1)*2;for(let c=0;c<of.length;c++){const p=of[c],f=p.group,d=-f.position.x,g=-f.position.z,x=Math.sqrt(d*d+g*g);x>8?(p.wanderAng=Math.atan2(-f.position.x,-f.position.z),p.state="walk",p.speed=1.5*u,f.position.x+=d/x*p.speed*i,f.position.z+=g/x*p.speed*i,f.rotation.y=p.wanderAng):p.state="pause"}for(let c=0;c<rf.length;c++){const p=rf[c],f=p.group,d=-f.position.x,g=-f.position.z,x=Math.sqrt(d*d+g*g);x>8&&(p.wanderAng=Math.atan2(-f.position.x,-f.position.z),p.state="hop",p.hopTimer=p.hopTimer%1.2,f.position.x+=d/x*1.5*u*i,f.position.z+=g/x*1.5*u*i)}for(let c=0;c<af.length;c++){const p=af[c],f=p.group;f.position.x+=(0-f.position.x)*i*.15*u,f.position.z+=(0-f.position.z)*i*.15*u}for(let c=0;c<cf.length;c++){const p=cf[c];p.centerX+=(0-p.centerX)*i*.2*u,p.centerZ+=(0-p.centerZ)*i*.2*u,p.orbitR=Math.max(p.orbitR-i*.3*u,2)}}cn>12&&(nn="FINALE",console.log("✦ Quest → FINALE"))}if(nn==="FINALE"){Q0+=i,ks&&(ks.emissiveIntensity=1.5+Math.sin(t*.5)*.3),Hs&&(Hs.emissiveIntensity=2.5+Math.sin(t*.7)*.5),Wi&&(Wi.position.y=.05+Math.sin(t*3)*.02);for(let l=0;l<oi.length;l++)oi[l].mesh.rotation.y+=i*.1*(l+1)*.3,oi[l].mat.opacity=.45+Math.sin(t+l)*.1;Q0>30&&(nn="TRANSFORM",en=0,eb(),console.log("✦ Quest → TRANSFORM (trees="+Fo.length+")"))}if(nn==="TRANSFORM"){en+=i,ks&&(ks.emissiveIntensity=1.5+Math.sin(t*.5)*.3),Hs&&(Hs.emissiveIntensity=2.5+Math.sin(t*.7)*.5),Wi&&(Wi.position.y=.05+Math.sin(t*3)*.02);for(let p=0;p<oi.length;p++)oi[p].mesh.rotation.y+=i*.1*(p+1)*.3,oi[p].mat.opacity=.45+Math.sin(t+p)*.1;if(en<3&&yi.length<Fo.length){const p=Math.min(Math.floor(en/3*Fo.length),Fo.length);for(;yi.length<p;){const f=yi.length,d=Fo[f],g=Su(),x=new Wf(new F(0,g,0),new F(d.x,0,d.z)),h=new Z({color:N.laserPink,transparent:!0,opacity:0,blending:te,depthWrite:!1}),m=new C(new hn(x,8,.06,4,!1),h);ot.add(m);const _=new Z({color:N.laserGlow,transparent:!0,opacity:0,blending:te,depthWrite:!1}),v=new C(new hn(x,8,.18,4,!1),_);ot.add(v),yi.push({tube:m,glow:v,mat:h,glowMat:_,timer:0})}}const l=en>=13?Math.min((en-13)/30,1):0,u=l*l*(3-2*l);for(let p=0;p<yi.length;p++){const f=yi[p];f.timer+=i;const d=Math.min(f.timer/.5,1)*(1-u),g=1-u,x=Math.sin(t*3+p*.5)*.5*g+.5;f.mat.opacity=d*(.6+x*.4),f.glowMat.opacity=d*(.2+x*.15)}if(l>=1&&yi.length>0){for(let p=0;p<yi.length;p++){const f=yi[p];ot.remove(f.tube),f.tube.geometry.dispose(),f.mat.dispose(),ot.remove(f.glow),f.glow.geometry.dispose(),f.glowMat.dispose()}yi.length=0}en>=13&&!ep&&(W2(),ep=!0);let c=0;if(en>=3&&en<6?c=(en-3)/3:en>=6&&en<10?(c=1,tp||(nb(),tp=!0,console.log("✦ Trees + ground transformed"))):en>=10&&en<13&&(c=1-(en-10)/3),Xo&&(Xo.style.opacity=c),en>=13&&ve&&!ve.mesh.visible&&(ve.mesh.visible=!0,ve.haze.visible=!0,ve.mesh.scale.setScalar(1.2),ve.haze.scale.setScalar(1.8)),en>=13&&ve&&ve.mesh.visible){const p=Math.sin(t*1.5)*.5+.5;ve.mat.opacity=.85+p*.15,ve.hazeMat.opacity=.3+p*.2}}}function Su(){return ms+Ce+3}function eb(){Xo||(Xo=document.createElement("div"),Xo.style.cssText="position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;opacity:0;pointer-events:none;z-index:9999;",document.body.appendChild(Xo))}function nb(){const i=[{color:6692928,glow:16724889,core:16737996},{color:4855888,glow:13386973,core:15628287},{color:5577264,glow:16729241,core:16746700},{color:3807328,glow:11158766,core:13400063},{color:5251136,glow:15619515,core:16751069}];for(let t=0;t<lf.length;t++){const e=lf[t],n=i[t%i.length];e.trunkMat&&(e.trunkMat.color.set(4857920),e.trunkMat.emissive.set(8930406),e.trunkMat.emissiveIntensity=.7),e.canopyMat&&(e.canopyMat.color.set(n.core),e.canopyMat.emissive.set(n.glow),e.canopyMat.emissiveIntensity=2.5),e.glowMat&&(e.glowMat.color.set(n.glow),e.glowMat.emissive.set(n.glow),e.glowMat.emissiveIntensity=.85),e.detailMat&&(e.detailMat.color.set(n.color),e.detailMat.emissive.set(n.glow),e.detailMat.emissiveIntensity=1)}if(iS(1),Oo&&Oo.material){Oo.material.emissive.set(3803738),Oo.material.emissiveIntensity=.85;const t=Oo.geometry.attributes.color;if(t){const e=t.array;for(let n=0;n<e.length;n+=3){const s=e[n],o=e[n+1],r=e[n+2];e[n]=s*.45+r*.25+o*.1,e[n+1]=o*.1,e[n+2]=r*.6+o*.45+s*.1}t.needsUpdate=!0}}}const ib=600;let dc=.25,xe=1,np=.85,We="NIGHT",jr=null,Kr=null,uf=null,Jr=null,Ic=null;const ip=[{label:"DUSK",sky:new st(923685),fog:new st(791584),fogDensity:.009,moonInt:.6,moonCol:new st(14527112),moonElev:15,ambSky:new st(4469589),ambGnd:new st(2238488),ambInt:.6,stars:.4,bio:.7,plRange:16,plInt:.5},{label:"NIGHT",sky:new st(330264),fog:new st(528408),fogDensity:.01,moonInt:1,moonCol:new st(12307694),moonElev:55,ambSky:new st(3359846),ambGnd:new st(1587232),ambInt:.7,stars:.85,bio:1,plRange:18,plInt:.55},{label:"DEEP_NIGHT",sky:new st(198160),fog:new st(397332),fogDensity:.012,moonInt:.55,moonCol:new st(8952251),moonElev:75,ambSky:new st(1712708),ambGnd:new st(1188888),ambInt:.5,stars:1,bio:1.5,plRange:22,plInt:.7},{label:"DAWN",sky:new st(1187888),fog:new st(923688),fogDensity:.011,moonInt:.5,moonCol:new st(13417386),moonElev:20,ambSky:new st(3354197),ambGnd:new st(1843224),ambInt:.55,stars:.35,bio:.65,plRange:17,plInt:.5}],fs=new st,sp=new st;function sb(i){jr=i.scene,Kr=i.moon,uf=i.moon2,Jr=i.hemiLight,Ic=i.playerLight}function ob(i){if(!jr)return;dc=(dc+i/ib)%1;const t=dc*4,e=Math.floor(t)%4,n=(e+1)%4,s=t-Math.floor(t),o=.5-.5*Math.cos(s*Math.PI),r=ip[e],a=ip[n];We=o<.5?r.label:a.label;const l=(u,c)=>u+(c-u)*o;if(fs.copy(r.sky).lerp(a.sky,o),jr.background.copy(fs),fs.copy(r.fog).lerp(a.fog,o),jr.fog.color.copy(fs),jr.fog.density=l(r.fogDensity,a.fogDensity),Kr){fs.copy(r.moonCol).lerp(a.moonCol,o),Kr.color.copy(fs),Kr.intensity=l(r.moonInt,a.moonInt);const u=dc*Math.PI*2,c=l(r.moonElev,a.moonElev)*Math.PI/180,p=60;Kr.position.set(Math.cos(u)*Math.cos(c)*p,Math.sin(c)*p,Math.sin(u)*Math.cos(c)*p)}if(uf){const u=l(r.moonInt,a.moonInt)/.85;uf.intensity=.3*u}Jr&&(fs.copy(r.ambSky).lerp(a.ambSky,o),sp.copy(r.ambGnd).lerp(a.ambGnd,o),Jr.color.copy(fs),Jr.groundColor.copy(sp),Jr.intensity=l(r.ambInt,a.ambInt)),Ic&&(Ic.distance=l(r.plRange,a.plRange),Ic.intensity=l(r.plInt,a.plInt)),np=l(r.stars,a.stars),fS(np),xe=l(r.bio,a.bio)}let Js=0,Yo=0,is=0,rr="CLEAR",os=!1,Ri=0;const Lc={CLEAR:{fogMult:1,windBase:.3,rainRate:0,skyDarken:0,mistCount:0,duration:[90,180]},MISTY:{fogMult:1.8,windBase:.2,rainRate:0,skyDarken:.05,mistCount:6,duration:[60,150]},LIGHT_RAIN:{fogMult:1.3,windBase:.6,rainRate:.3,skyDarken:.1,mistCount:2,duration:[60,120]},HEAVY_RAIN:{fogMult:1.6,windBase:1,rainRate:.8,skyDarken:.2,mistCount:3,duration:[45,100]},FOG_BANK:{fogMult:2.5,windBase:.15,rainRate:0,skyDarken:.1,mistCount:8,duration:[60,120]},LUMINOUS_STORM:{fogMult:1.4,windBase:1.5,rainRate:.6,skyDarken:.15,mistCount:2,duration:[40,90]}},rb={CLEAR:{MISTY:.4,LIGHT_RAIN:.3,FOG_BANK:.2,LUMINOUS_STORM:.1},MISTY:{CLEAR:.3,LIGHT_RAIN:.3,FOG_BANK:.3,HEAVY_RAIN:.1},LIGHT_RAIN:{CLEAR:.2,MISTY:.2,HEAVY_RAIN:.4,LUMINOUS_STORM:.2},HEAVY_RAIN:{LIGHT_RAIN:.4,LUMINOUS_STORM:.3,MISTY:.2,CLEAR:.1},FOG_BANK:{MISTY:.4,CLEAR:.3,LIGHT_RAIN:.2,LUMINOUS_STORM:.1},LUMINOUS_STORM:{HEAVY_RAIN:.3,MISTY:.3,CLEAR:.2,LIGHT_RAIN:.2}};let Bo="CLEAR",Uo=null,Dc=0,pc=0,bu=0,mc=!1,gc=0,Tu=Math.random()*Math.PI*2,Eu=0,Au=0;const hf=[],ab=8;let op=!1,Ru=0,xc=1,Uc=0,vc=0,Cu=0;function cb(){const i=rb[Bo],t=Object.entries(i);let e=0;for(const[,s]of t)e+=s;let n=Math.random()*e;for(const[s,o]of t)if(n-=o,n<=0)return s;return t[0][0]}function lb(){if(op)return;const i=document.createElement("canvas");i.width=128,i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(64,32,0,64,32,64);e.addColorStop(0,"rgba(255,255,255,0.5)"),e.addColorStop(.3,"rgba(255,255,255,0.25)"),e.addColorStop(.7,"rgba(255,255,255,0.06)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,64);const n=new Sa(i),s=new ue(40,14);for(let o=0;o<ab;o++){const r=new Z({map:n,color:5596791,transparent:!0,opacity:0,side:Pt,depthWrite:!1}),a=new C(s,r);a.visible=!1,ot.add(a),hf.push({mesh:a,mat:r,active:!1,drift:Math.random()*Math.PI*2,speed:.3+Math.random()*.4,baseY:.8+Math.random()*2,wobble:Math.random()*Math.PI*2})}op=!0}function ub(){lb();const i=Lc.CLEAR.duration;Dc=i[0]+Math.random()*(i[1]-i[0])}function hb(i,t,e){if(mc)if(pc-=i,pc<=0){Bo=Uo,Uo=null,mc=!1;const o=Lc[Bo].duration;Dc=o[0]+Math.random()*(o[1]-o[0]),gc=0}else gc=1-pc/bu;else Dc-=i,Dc<=0&&(Uo=cb(),mc=!0,bu=30+Math.random()*60,pc=bu,gc=0);const n=Lc[Bo];if(mc&&Uo){const o=Lc[Uo],r=.5-.5*Math.cos(gc*Math.PI),a=(l,u)=>l+(u-l)*r;xc=a(n.fogMult,o.fogMult),Uc=a(n.rainRate,o.rainRate),vc=a(n.skyDarken,o.skyDarken),Cu=a(n.mistCount,o.mistCount),is=a(n.windBase,o.windBase),rr=r<.5?Bo:Uo}else xc=n.fogMult,Uc=n.rainRate,vc=n.skyDarken,Cu=n.mistCount,is=n.windBase,rr=Bo;os=rr==="LUMINOUS_STORM",Tu+=(Math.sin(t*.05)*.2+Math.sin(t*.13)*.1)*i,Eu-=i,Eu<=0&&(Eu=2+Math.random()*6,Au=Math.random()*.8),Au*=Math.pow(.3,i);const s=is+Au;if(Js=Math.cos(Tu)*s,Yo=Math.sin(Tu)*s,ot.fog.density*=xc,vc>.001){const o=ot.background,r=1-vc;o.r*=r,o.g*=r,o.b*=r}if(e){const o=Math.round(Cu);for(let r=0;r<hf.length;r++){const a=hf[r];if(r<o){a.active||(a.active=!0,a.mesh.visible=!0,a.drift=Math.random()*Math.PI*2);const l=10+Math.sin(t*.3+a.wobble)*8,u=a.drift+t*a.speed*.05;a.mesh.position.set(e.x+Math.cos(u)*l,a.baseY+Math.sin(t*.4+a.wobble)*.5,e.z+Math.sin(u)*l),a.mesh.rotation.y=u+Math.PI/2,a.drift+=Js*i*.02;const c=.03+xc*.012;a.mat.opacity+=(c-a.mat.opacity)*i*2}else a.active&&(a.mat.opacity-=i*.5,a.mat.opacity<=.005&&(a.active=!1,a.mesh.visible=!1,a.mat.opacity=0))}}return os&&(Ru-=i,Ru<=0&&(Ru=1+Math.random()*4,Ri=1)),Ri*=Math.pow(.02,i),Ri<.01&&(Ri=0),Uc}function ra(){return Uc}const _i=300,Hr=new Float32Array(_i),Vr=new Float32Array(_i),Wr=new Float32Array(_i),Pu=new Float32Array(_i),Iu=new Float32Array(_i),Lu=new Float32Array(_i),Ws=new Float32Array(_i),Xn=new Float32Array(_i*6);let Qs=null,ff=null;function fb(){const i=new Ae;i.setAttribute("position",new ze(Xn,3)),ff=new Gf({color:8952251,transparent:!0,opacity:.3,depthWrite:!1}),Qs=new kx(i,ff),Qs.frustumCulled=!1,Qs.visible=!1,ot.add(Qs);for(let t=0;t<_i;t++)Ws[t]=0,Ym(t)}function Ym(i){const t=i*6;Xn[t]=0,Xn[t+1]=-100,Xn[t+2]=0,Xn[t+3]=0,Xn[t+4]=-100,Xn[t+5]=0}function db(i,t,e,n,s){if(!Qs)return;const o=e>.01;if(Qs.visible=o,!o)return;ff.opacity=Math.min(.15+e*.35,.5);const r=Math.floor(e*12*i*60);for(let l=0;l<r;l++){let u=-1;for(let f=0;f<_i;f++)if(Ws[f]<=0){u=f;break}if(u===-1)break;const c=Math.random()*Math.PI*2,p=Math.random()*30;Hr[u]=t.x+Math.cos(c)*p,Vr[u]=12+Math.random()*10,Wr[u]=t.z+Math.sin(c)*p,Pu[u]=n*2+(Math.random()-.5)*.3,Iu[u]=-12-Math.random()*8,Lu[u]=s*2+(Math.random()-.5)*.3,Ws[u]=2+Math.random()*1.5}const a=.06;for(let l=0;l<_i;l++){if(Ws[l]<=0)continue;if(Ws[l]-=i,Ws[l]<=0||Vr[l]<Dt(Hr[l],Wr[l])+.1){Ws[l]=0,Ym(l);continue}Hr[l]+=Pu[l]*i,Vr[l]+=Iu[l]*i,Wr[l]+=Lu[l]*i;const u=l*6;Xn[u]=Hr[l],Xn[u+1]=Vr[l],Xn[u+2]=Wr[l],Xn[u+3]=Hr[l]+Pu[l]*a,Xn[u+4]=Vr[l]+Iu[l]*a,Xn[u+5]=Wr[l]+Lu[l]*a}Qs.geometry.attributes.position.needsUpdate=!0}let pe=null,Jn=null,Er=null;const rp=[0,2,4,7,9],pb=261.63,df=[0,-3,5,4],mb=16;let Nc=0,eo=0,zc=0,Fc=2,Oc=10,Bc=5,Gc=0,Qr=[],ta=[],Zm=!1;function gb(i,t,e){pe=i,Er=e,Jn=pe.createGain(),Jn.gain.value=.6,Jn.connect(t),Nc=0,eo=df[0],zc=0,Gc=0,Fc=2,Oc=8,Bc=5,Qr=[],ta=[],Zm=!0}function ar(i,t){const e=rp.length,n=Math.floor(i/e)+(t||0),s=(i%e+e)%e,o=rp[s];return pb*Math.pow(2,n+o/12)}function xb(i){if(!pe||!Jn)return;const t=pe.currentTime;for(let a=0;a<ta.length;a++)ta[a].gain.linearRampToValueAtTime(.001,t+4);for(let a=0;a<Qr.length;a++)Qr[a].stop(t+4.5);Qr=[],ta=[];const e=[ar(i,-2),ar(i+2,-2),ar(i,-1)],n=pe.createGain();n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(.06,t+4);const s=pe.createBiquadFilter();s.type="lowpass",s.frequency.value=200;const o=pe.createOscillator();o.type="sine",o.frequency.value=.05;const r=pe.createGain();r.gain.value=50,o.connect(r).connect(s.frequency),o.start(t),o.stop(t+35);for(let a=0;a<e.length;a++){const l=pe.createOscillator();l.type=a===0?"triangle":"sine",l.frequency.value=e[a]*(1+(Math.random()*.004-.002)),l.connect(s),l.start(t),l.stop(t+35),Qr.push(l)}s.connect(n),Er(n,Jn,.8),ta.push(n)}function vb(i,t,e){if(!pe||!Jn)return;const n=.15,s=pe.currentTime+(t||0),o=pe.createOscillator();o.type="sine";const r=pe.createGain();r.gain.setValueAtTime(0,s),r.gain.linearRampToValueAtTime(n,s+.02),r.gain.exponentialRampToValueAtTime(n*.3,s+.5),r.gain.exponentialRampToValueAtTime(.001,s+3),o.connect(r),Er(r,Jn,.6),o.start(s),o.stop(s+3.5)}function Mb(i,t,e){if(!pe||!Jn)return;const n=pe.currentTime+0,s=t||6,o=ar(i,1),r=pe.createOscillator();r.type="triangle";const a=pe.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.08,n+1.5),a.gain.setValueAtTime(.08,n+s-1.5),a.gain.linearRampToValueAtTime(.001,n+s);const l=pe.createBiquadFilter();l.type="lowpass",l.frequency.value=o*1.5;const u=pe.createOscillator();u.frequency.value=4;const c=pe.createGain();c.gain.value=o*.01,u.connect(c).connect(r.frequency),r.connect(l).connect(a),Er(a,Jn,.9),u.start(n),r.start(n),u.stop(n+s+.1),r.stop(n+s+.1)}function _b(i,t){if(!pe||!Jn)return;const e=pe.currentTime+(t||0),n=ar(i,2),s=pe.createOscillator(),o=pe.createOscillator();s.type="sine",o.type="sine",s.frequency.value=n,o.frequency.value=n*1.005;const r=pe.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.04,e+.01),r.gain.exponentialRampToValueAtTime(.001,e+4),s.connect(r),o.connect(r),Er(r,Jn,.8),s.start(e),o.start(e),s.stop(e+4.5),o.stop(e+4.5)}function yb(i){if(!pe||!Jn)return;const t=pe.currentTime,e=ar(i,-3),n=pe.createOscillator();n.type="sine",n.frequency.value=e;const s=pe.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(.15,t+.5),s.gain.exponentialRampToValueAtTime(.001,t+3),n.connect(s),Er(s,Jn,.3),n.start(t),n.stop(t+3.5)}function wb(){const i=3+Math.floor(Math.random()*3);let t=eo+(Math.random()<.5?0:2);for(let e=0;e<i;e++)vb(t,e*.3),t+=Math.random()<.7?1:2;return 4+Math.random()*6}function Sb(){const i=6+Math.random()*4,t=[0,1,2,4],e=eo+t[Math.floor(Math.random()*t.length)];return Mb(e,i),i+8+Math.random()*10}function bb(){const i=1+Math.floor(Math.random()*3);for(let t=0;t<i;t++){const e=eo+Math.floor(Math.random()*5);_b(e,t*.5+Math.random()*.2)}return 8+Math.random()*12}function Tb(i,t,e,n){!Zm||!pe||(zc-=i,zc<=0&&(eo=df[Nc],xb(eo),Nc=(Nc+1)%df.length,zc=mb),Gc-=i,Gc<=0&&(yb(eo),Gc=8),Fc-=i,Fc<=0&&(Fc=wb()),Oc-=i,Oc<=0&&(Oc=Sb()),Bc-=i,Bc<=0&&(Bc=bb()))}let it=null,Ee=null,pf=null,pn=!1,Qn=!1,pl=null,Du=null,aa=null,Eb=null,$m=null,Ab=null,Rb=null,jm=null,Cb=null,Km=null,Jm=null,Pb=null,Qm=null,tg=null,Uu=0,Ib=null,eg=null,Lb=null;const Yi={jelly:0,puff:0,deer:0,moth:0};function Nu(i,t){const e=it.sampleRate*t,n=it.createBuffer(1,e,it.sampleRate),s=n.getChannelData(0);if(i==="white")for(let r=0;r<e;r++)s[r]=Math.random()*2-1;else if(i==="brown"){let r=0;for(let a=0;a<e;a++){const l=Math.random()*2-1;s[a]=(r+.02*l)/1.02,r=s[a],s[a]*=1.8}}const o=Math.min(Math.floor(it.sampleRate*.5),e>>2);for(let r=0;r<o;r++){const a=r/o,l=e-o+r;s[l]=s[l]*(1-a)+s[r]*a}return n}function Xr(i,t,e,n){const s=it.createBufferSource();s.buffer=i,s.loop=!0;const o=it.createGain();o.gain.value=t;const r=it.createBiquadFilter();r.type="lowpass",r.frequency.value=e,r.Q.value=.5;const a=it.createBiquadFilter();return a.type="highpass",a.frequency.value=n||40,a.Q.value=.5,s.connect(a).connect(r).connect(o).connect(Ee),s.start(),{node:s,gain:o,filter:r}}function Db(){const i=it.createDelay(1);i.delayTime.value=.55;const t=it.createDelay(1);t.delayTime.value=.79;const e=it.createGain();e.gain.value=.35;const n=it.createGain();n.gain.value=.28;const s=it.createBiquadFilter();s.type="lowpass",s.frequency.value=2200;const o=it.createBiquadFilter();o.type="lowpass",o.frequency.value=1800;const r=it.createBiquadFilter();r.type="highpass",r.frequency.value=120,r.Q.value=.5;const a=it.createBiquadFilter();a.type="highpass",a.frequency.value=120,a.Q.value=.5;const l=it.createGain();l.gain.value=.5,i.connect(s).connect(r).connect(e).connect(i),t.connect(o).connect(a).connect(n).connect(t),i.connect(l),t.connect(l),l.connect(Ee);const u=it.createGain();u.gain.value=1,u.connect(i),u.connect(t),pf=u}function $i(i,t,e){if(i.connect(t),pf&&e>0){const n=it.createGain();n.gain.value=e,i.connect(n).connect(pf)}}function Ub(){const i=()=>{if(!pn){try{it=new(window.AudioContext||window.webkitAudioContext),Ee=it.createGain(),Ee.gain.value=.42,Ee.connect(it.destination),pl=Nu("brown",16),Du=Nu("brown",11),aa=Nu("white",9),Db();const t=Xr(pl,.05,200,50);Eb=t.node,$m=t.gain,Ab=t.filter;const e=Xr(Du,.03,350,80);Rb=e.node,jm=e.gain;const n=Xr(aa,0,400,60);Cb=n.node,Km=n.gain,Jm=n.filter;const s=Xr(aa,0,2e3,80);Pb=s.node,Qm=s.gain,tg=s.filter;const o=Xr(Du,0,600,60);Ib=o.node,eg=o.gain,Lb=o.filter,pn=!0}catch(t){console.warn("Audio init failed:",t)}document.removeEventListener("click",i),document.removeEventListener("keydown",i),document.removeEventListener("touchstart",i)}};document.addEventListener("click",i),document.addEventListener("keydown",i),document.addEventListener("touchstart",i)}function Nb(i,t,e,n,s,o,r,a){if(!pn||Qn)return;const l=it.currentTime,u=o==="DEEP_NIGHT"?.07:o==="DAWN"?.03:.05;$m.gain.linearRampToValueAtTime(u,l+.1),jm.gain.linearRampToValueAtTime(u*.6,l+.1);const c=Math.min(t*.12,.18),p=200+t*600;Km.gain.linearRampToValueAtTime(c,l+.1),Jm.frequency.linearRampToValueAtTime(p,l+.1);const f=e*.15,d=1200+e*2e3;Qm.gain.linearRampToValueAtTime(f,l+.1),tg.frequency.linearRampToValueAtTime(d,l+.1),s>.5&&Uu<=0&&(zb(),Uu=2+Math.random()*3),Uu-=i;let g=1/0;if(r&&a)for(let m=0;m<a.length;m++){const _=a[m].x-r.x,v=a[m].z-r.z,y=_*_+v*v;y<g&&(g=y)}const h=(g<225?1-Math.sqrt(g)/15:0)*.08;eg.gain.linearRampToValueAtTime(h,l+.1),Yi.jelly-=i,Yi.puff-=i,Yi.deer-=i,Yi.moth-=i}function zb(){if(!it)return;const i=it.currentTime,t=it.createOscillator(),e=it.createGain(),n=it.createBiquadFilter();t.type="sawtooth",t.frequency.value=50+Math.random()*25,n.type="lowpass",n.frequency.value=120,n.Q.value=1,e.gain.setValueAtTime(.2,i),e.gain.exponentialRampToValueAtTime(.001,i+.8+Math.random()*.5),t.connect(n).connect(e).connect(Ee),t.start(),t.stop(i+1.5);const s=it.createBufferSource();s.buffer=pl;const o=it.createGain(),r=it.createBiquadFilter();r.type="lowpass",r.frequency.value=120;const a=it.createBiquadFilter();a.type="highpass",a.frequency.value=45,a.Q.value=.5,o.gain.setValueAtTime(.15,i),o.gain.exponentialRampToValueAtTime(.001,i+1.2),s.connect(a).connect(r).connect(o).connect(Ee),s.start(),s.stop(i+1.5)}function oo(i,t,e){if(!pn||Qn||Yi[i]>0)return;const n=t.x-e.x,s=t.z-e.z,o=n*n+s*s;if(o>900)return;const r=Math.sqrt(o),a=Math.max(0,1-r/30)*.1,l=Math.max(-1,Math.min(1,n/Math.max(r,1))),u=it.createStereoPanner();u.pan.value=l;const c=it.currentTime;switch(i){case"jelly":{const p=360+Math.random()*60,f=it.createOscillator(),d=it.createOscillator();f.type="sine",d.type="sine",f.frequency.setValueAtTime(p,c),d.frequency.setValueAtTime(p+3,c),f.frequency.linearRampToValueAtTime(p-40,c+1.2),d.frequency.linearRampToValueAtTime(p-37,c+1.2);const g=it.createOscillator(),x=it.createGain();g.frequency.value=4,x.gain.value=5,g.connect(x),x.connect(f.frequency),x.connect(d.frequency);const h=it.createGain();h.gain.setValueAtTime(0,c),h.gain.linearRampToValueAtTime(a,c+.15),h.gain.setValueAtTime(a,c+.6),h.gain.exponentialRampToValueAtTime(.001,c+1.4),f.connect(h),d.connect(h),h.connect(u),$i(u,Ee,.4),g.start(c),f.start(c),d.start(c),g.stop(c+1.5),f.stop(c+1.5),d.stop(c+1.5),Yi.jelly=4+Math.random()*5;break}case"puff":{const p=500+Math.random()*100,f=[p,p*1.2,p*1.5];for(let d=0;d<f.length;d++){const g=it.createOscillator();g.type="sine",g.frequency.value=f[d];const x=it.createGain(),h=c+d*.07;x.gain.setValueAtTime(0,h),x.gain.linearRampToValueAtTime(a*.5,h+.02),x.gain.exponentialRampToValueAtTime(.001,h+.15),g.connect(x).connect(u),g.start(h),g.stop(h+.18)}$i(u,Ee,.3),Yi.puff=8+Math.random()*10;break}case"deer":{const p=100+Math.random()*30,f=it.createOscillator(),d=it.createOscillator();f.type="triangle",d.type="triangle",f.frequency.setValueAtTime(p,c),d.frequency.setValueAtTime(p+2,c),f.frequency.linearRampToValueAtTime(p-15,c+.5),d.frequency.linearRampToValueAtTime(p-13,c+.5);const g=it.createBiquadFilter();g.type="lowpass",g.frequency.value=250,g.Q.value=.5;const x=it.createGain();x.gain.setValueAtTime(0,c),x.gain.linearRampToValueAtTime(a*.7,c+.12),x.gain.setValueAtTime(a*.7,c+.3),x.gain.exponentialRampToValueAtTime(.001,c+.6),f.connect(g),d.connect(g),g.connect(x).connect(u),$i(u,Ee,.3),f.start(c),d.start(c),f.stop(c+.7),d.stop(c+.7),Yi.deer=5+Math.random()*6;break}case"moth":{const p=it.createOscillator();p.type="sine",p.frequency.setValueAtTime(200+Math.random()*80,c);const f=it.createOscillator(),d=it.createGain();f.frequency.value=8+Math.random()*4,d.gain.value=12,f.connect(d).connect(p.frequency);const g=it.createGain();g.gain.setValueAtTime(0,c),g.gain.linearRampToValueAtTime(a*.2,c+.05),g.gain.exponentialRampToValueAtTime(.001,c+.25),p.connect(g).connect(u),$i(u,Ee,.2),f.start(c),p.start(c),f.stop(c+.3),p.stop(c+.3),Yi.moth=4+Math.random()*5;break}}}let ml=0;function Fb(i,t){if(!pn||Qn||ml>0)return;const e=it.currentTime;if(t){const n=it.createBufferSource();n.buffer=aa;const s=it.createGain(),o=it.createBiquadFilter();o.type="bandpass",o.frequency.value=2e3,o.Q.value=.5,s.gain.setValueAtTime(.05,e),s.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(o).connect(s).connect(Ee),n.start(),n.stop(e+.15)}else{const n=it.createOscillator();n.type="sine",n.frequency.value=80+Math.random()*40;const s=it.createGain();s.gain.setValueAtTime(.03,e),s.gain.exponentialRampToValueAtTime(.001,e+.08),n.connect(s).connect(Ee),n.start(),n.stop(e+.1)}ml=i?.22:.35}function Ob(){if(!pn||Qn)return;const i=it.currentTime,t=it.createOscillator();t.type="sine",t.frequency.setValueAtTime(150,i),t.frequency.exponentialRampToValueAtTime(300,i+.1);const e=it.createGain();e.gain.setValueAtTime(.03,i),e.gain.exponentialRampToValueAtTime(.001,i+.15),t.connect(e).connect(Ee),t.start(),t.stop(i+.2)}function Bb(i){if(!pn||Qn)return;const t=it.currentTime,e=it.createBufferSource();e.buffer=pl;const n=it.createGain(),s=it.createBiquadFilter();s.type="lowpass",s.frequency.value=200;const o=it.createBiquadFilter();o.type="highpass",o.frequency.value=50,o.Q.value=.5,n.gain.setValueAtTime(i*.05,t),n.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(o).connect(s).connect(n).connect(Ee),e.start(),e.stop(t+.25)}function Gb(i){ml>0&&(ml-=i)}function kb(i,t){if(!pn||Qn)return;const e=i.x-t.x,n=i.z-t.z,s=e*e+n*n;if(s>400)return;const o=Math.max(0,1-Math.sqrt(s)/20)*.06,r=it.currentTime,a=it.createOscillator();a.type="sine",a.frequency.setValueAtTime(600+Math.random()*300,r),a.frequency.exponentialRampToValueAtTime(200,r+.1);const l=it.createGain();l.gain.setValueAtTime(o,r),l.gain.exponentialRampToValueAtTime(.001,r+.12),a.connect(l).connect(Ee),a.start(),a.stop(r+.15)}function Hb(){if(!pn||Qn)return;const i=it.currentTime,t=[440,554,659,880];for(let e=0;e<t.length;e++){const n=it.createOscillator();n.type="sine",n.frequency.setValueAtTime(t[e],i+e*.12);const s=it.createGain();s.gain.setValueAtTime(0,i),s.gain.linearRampToValueAtTime(.05,i+e*.12+.05),s.gain.exponentialRampToValueAtTime(.001,i+e*.12+.7),n.connect(s),$i(s,Ee,.5),n.start(i+e*.12),n.stop(i+e*.12+.8)}}function Vb(){if(!pn||Qn)return;const i=it.currentTime,t=it.createOscillator();t.type="sine",t.frequency.setValueAtTime(300,i),t.frequency.exponentialRampToValueAtTime(1200,i+3);const e=it.createOscillator(),n=it.createGain();e.frequency.setValueAtTime(6,i),e.frequency.linearRampToValueAtTime(12,i+3),n.gain.value=20,e.connect(n).connect(t.frequency);const s=it.createOscillator();s.type="sine",s.frequency.setValueAtTime(600,i),s.frequency.exponentialRampToValueAtTime(2400,i+3);const o=it.createGain();o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(.04,i+.2),o.gain.setValueAtTime(.04,i+2),o.gain.exponentialRampToValueAtTime(.001,i+3.5),t.connect(o),s.connect(o),$i(o,Ee,.6),e.start(i),t.start(i),s.start(i),e.stop(i+4),t.stop(i+4),s.stop(i+4)}function Wb(){if(!pn||Qn)return;const i=it.currentTime,t=it.createBufferSource();t.buffer=aa;const e=it.createBiquadFilter();e.type="bandpass",e.frequency.setValueAtTime(3e3,i),e.frequency.exponentialRampToValueAtTime(500,i+.3),e.Q.value=2;const n=it.createGain();n.gain.setValueAtTime(.08,i),n.gain.exponentialRampToValueAtTime(.001,i+.3),t.connect(e).connect(n).connect(Ee);const s=it.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(2e3,i),s.frequency.exponentialRampToValueAtTime(100,i+.15);const o=it.createBiquadFilter();o.type="lowpass",o.frequency.value=4e3;const r=it.createGain();r.gain.setValueAtTime(.06,i),r.gain.exponentialRampToValueAtTime(.001,i+.2),s.connect(o).connect(r),$i(r,Ee,.3);const a=it.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(80,i+.15),a.frequency.linearRampToValueAtTime(55,i+2);const l=it.createBiquadFilter();l.type="bandpass",l.frequency.value=180,l.Q.value=3;const u=it.createGain();u.gain.setValueAtTime(0,i),u.gain.linearRampToValueAtTime(.03,i+.2),u.gain.exponentialRampToValueAtTime(.001,i+2),a.connect(l).connect(u).connect(Ee),t.start(i),t.stop(i+.4),s.start(i),s.stop(i+.25),a.start(i+.1),a.stop(i+2.2)}const cr=[];function Xb(i,t){if(!pn||Qn)return;const e=it.currentTime,n=it.createOscillator();n.type="sawtooth",n.frequency.value=55+Math.random()*10;const s=it.createOscillator(),o=it.createGain();s.type="square",s.frequency.value=120+Math.random()*60,o.gain.value=15,s.connect(o).connect(n.frequency);const r=it.createBiquadFilter();r.type="bandpass",r.frequency.value=200,r.Q.value=3;const a=it.createGain();a.gain.value=0;const l=it.createStereoPanner();n.connect(r).connect(a).connect(l).connect(Ee),s.start(e),n.start(e),cr.push({osc:n,mod:s,gain:a,panner:l,filter:r,x:i,z:t})}function qb(i){if(!pn||!it)return;const t=it.currentTime;for(let e=0;e<cr.length;e++){const n=cr[e],s=n.x-i.x,o=n.z-i.z,r=s*s+o*o,a=Math.sqrt(r),l=r<625?Math.max(0,1-a/25)*.04:0;n.gain.gain.linearRampToValueAtTime(l,t+.1);const u=Math.max(-1,Math.min(1,s/Math.max(a,1)));n.panner.pan.linearRampToValueAtTime(u,t+.1),n.filter.frequency.value=180+Math.sin(t*.5+e)*40}}function Yb(){if(!it)return;const i=it.currentTime;for(let t=0;t<cr.length;t++){const e=cr[t];e.gain.gain.linearRampToValueAtTime(0,i+.5),e.osc.stop(i+.6),e.mod.stop(i+.6)}cr.length=0}function Zb(){if(!pn||Qn)return;const i=it.currentTime,t=it.createOscillator();t.type="sine",t.frequency.setValueAtTime(400,i),t.frequency.exponentialRampToValueAtTime(900,i+.15);const e=it.createGain();e.gain.setValueAtTime(.06,i),e.gain.exponentialRampToValueAtTime(.001,i+.5),t.connect(e),$i(e,Ee,.4),t.start(),t.stop(i+.6)}let ng=null,ig=null,sg=null,zu=0,ap=0,Mc=0,Fu=0,cp=1,mf=!1;function $b(){if(mf||!it)return;mf=!0;const i=it.createGain();i.gain.value=0;const t=it.createOscillator();t.type="sine",t.frequency.value=160;const e=it.createOscillator();e.type="sine",e.frequency.value=190;const n=it.createBiquadFilter();n.type="lowpass",n.frequency.value=350,n.Q.value=.5,t.connect(n).connect(i),e.connect(n),i.connect(Ee),t.start(),e.start(),ng=t,ig=e,sg=i}function jb(i){if(!it||i<.001)return;const t=it.currentTime,e=1800+Math.random()*800,n=it.createOscillator();n.type="sine",n.frequency.value=e,n.frequency.exponentialRampToValueAtTime(e*.88,t+.1);const s=it.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(i*.5,t+.01),s.gain.exponentialRampToValueAtTime(.001,t+.1),n.connect(s).connect(Ee),n.start(t),n.stop(t+.12)}function Kb(i,t,e,n,s,o){if(!pn||Qn||($b(),!mf))return;const r=it.currentTime,a=s==="DEEP_NIGHT"||s==="NIGHT"?1:s==="DUSK"?.5:.3;cp=s==="DUSK"||s==="NIGHT"?1:s==="DEEP_NIGHT"?.6:.3;const l=Math.max(.15,1-o*.7);let u=1/0;if(t&&e)for(let x=0;x<e.length;x++){const h=e[x].x-t.x,m=e[x].z-t.z,_=h*h+m*m;_<u&&(u=_)}const c=u<400?1-Math.sqrt(u)/20:0;ap+=i*2;const p=.7+.3*Math.sin(ap*Math.PI*2),f=c*.025*a*l*p;if(sg.gain.linearRampToValueAtTime(f,r+.15),zu+=i,zu>3+Math.random()*4){zu=0;const x=150+Math.random()*40;ng.frequency.linearRampToValueAtTime(x,r+.5),ig.frequency.linearRampToValueAtTime(x+20+Math.random()*15,r+.5)}let d=1/0;if(t&&n)for(let x=0;x<n.length;x++){const h=n[x].cx-t.x,m=n[x].cz-t.z,_=h*h+m*m;_<d&&(d=_)}const g=d<144?1-Math.sqrt(d)/12:0;if(Fu=g*.02*cp*l,Fu>.001){if(Mc-=i,Mc<=0){jb(Fu);const x=1.5+(1-g)*1.5;Mc=x+Math.random()*x}}else Mc=0}let gl=!1;function Jb(){gl||!it||(gl=!0,gb(it,Ee,$i))}function Qb(i,t,e,n){!pn||Qn||(gl||Jb(),gl&&Tb(i))}function tT(i,t,e,n,s){const o=e.x-i.x,r=e.z-i.z,a=o*o+r*r;if(a>n*n)return!1;if(a<.01)return!0;let u=Math.atan2(r,o)-t;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;return Math.abs(u)<s*.5}function eT(i,t,e,n){const s=t.x-i.x,o=t.z-i.z,r=n?e*1.8:e;return s*s+o*o<r*r}function og(i,t,e){let n=0,s=0,o=0;for(let r=0;r<t.length;r++){const a=t[r],l=i.x-a.x,u=i.z-a.z,c=l*l+u*u;if(c>.01&&c<e*e){const p=Math.sqrt(c);n+=l/p/p,s+=u/p/p,o++}}return o>0&&(n/=o,s/=o),{x:n,z:s}}function rg(i,t){if(t.length===0)return{x:0,z:0};let e=0,n=0;for(let s=0;s<t.length;s++)e+=t[s].x,n+=t[s].z;return e/=t.length,n/=t.length,{x:e-i.x,z:n-i.z}}function nT(i,t){const e=Math.sqrt(i.x*i.x+i.z*i.z),n=jt-t;if(e<n)return{x:0,z:0};const s=(e-n)/t,o=Math.min(s*2,3);return{x:-i.x/e*o,z:-i.z/e*o}}function iT(i,t,e,n,s){let o=0,r=0;const a=Math.cos(t)*n,l=Math.sin(t)*n,u=i.x+a,c=i.z+l;for(let p=0;p<e.length;p++){const f=e[p],d=u-f.x,g=c-f.z,x=d*d+g*g,h=(f.colR||s)+1;if(x<h*h&&x>.01){const m=Math.sqrt(x),_=(h-m)/h*2;o+=d/m*_,r+=g/m*_}}return{x:o,z:r}}let Ys=null;const Ou=2*Math.PI/qn,lp=.09,sT=1-Ko,ji=[];function oT(i){Ys=i,ji.length=0;for(let t=0;t<Ys.length;t++)ji.push({active:!1,elapsed:0,radius:0})}function rT(i){i>=0&&i<ji.length&&(ji[i].active=!0,ji[i].elapsed=0,ji[i].radius=0)}function aT(i){for(let t=0;t<ji.length;t++){const e=ji[t];e.active&&(e.elapsed+=i,e.radius=e.elapsed*Nw,e.radius>=100&&(e.active=!1,e.radius=100))}}function Te(i,t,e){if(!Ys)return e;let n=Math.atan2(t,i);n<0&&(n+=2*Math.PI);const s=Math.floor(n/Ou)%qn;if(s<Ys.length&&Ys[s].found){const l=ji[s];if(l.active){const u=i*i+t*t,c=l.radius*l.radius;if(u>c)return e*Ko}return e}const o=n/Ou-s,a=Math.min(o,1-o)*Ou;if(a<lp){const l=o<.5?(s-1+qn)%qn:(s+1)%qn;if(l<Ys.length&&Ys[l].found){const u=a/lp,c=Ko+sT*(.5+.5*Math.cos(u*Math.PI));return e*c}}return e*Ko}const Xi={deer:!1,puffling:!1,jelly:!1,moth:!1,fairyRing:!1,crystalChain:!1,pond:!1},cT={deer:"Spirit Deer",puffling:"Puffling",jelly:"Luminous Jelly",moth:"Moon Moth",fairyRing:"Fairy Ring",crystalChain:"Crystal Resonance",pond:"Moonlit Pond"};let Ki=null,kc=0,up="";function lT(){Ki=document.createElement("div"),Ki.id="discovery-text",Ki.style.cssText="position:fixed;top:28%;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:22px;color:#ccffee;text-shadow:0 0 12px #44ffaa,0 0 30px #228866;pointer-events:none;opacity:0;transition:opacity 0.6s;z-index:100;letter-spacing:3px;text-transform:uppercase;",document.body.appendChild(Ki)}function Ns(i){Xi[i]||(Xi[i]=!0,up=cT[i],kc=3,Ki&&(Ki.textContent=up,Ki.style.opacity="1"))}function uT(i,t,e,n,s,o,r,a){const l=i.x,u=i.z;if(!Xi.deer)for(let c=0;c<t.length;c++){const p=t[c].group.position.x-l,f=t[c].group.position.z-u;if(p*p+f*f<144){Ns("deer");break}}if(!Xi.puffling)for(let c=0;c<e.length;c++){const p=e[c].group.position.x-l,f=e[c].group.position.z-u;if(p*p+f*f<64){Ns("puffling");break}}if(!Xi.jelly)for(let c=0;c<n.length;c++){const p=n[c].group.position.x-l,f=n[c].group.position.z-u;if(p*p+f*f<100){Ns("jelly");break}}if(!Xi.moth)for(let c=0;c<s.length;c++){const p=s[c].group.position.x-l,f=s[c].group.position.z-u;if(p*p+f*f<64){Ns("moth");break}}if(!Xi.fairyRing)for(let c=0;c<o.length;c++){const p=o[c].x-l,f=o[c].z-u;if(p*p+f*f<16){Ns("fairyRing");break}}if(!Xi.pond)for(let c=0;c<r.length;c++){const p=r[c].x-l,f=r[c].z-u;if(p*p+f*f<25){Ns("pond");break}}!Xi.crystalChain&&a>=3&&Ns("crystalChain")}function hT(i){kc>0&&(kc-=i,kc<=.6&&Ki&&(Ki.style.opacity="0"))}let gf=null,Bu=60;const fT={DUSK:"Dusk",NIGHT:"Night",DEEP_NIGHT:"Deep Night",DAWN:"Dawn"},dT={CLEAR:"Clear",MISTY:"Misty",LIGHT_RAIN:"Light Rain",HEAVY_RAIN:"Heavy Rain",FOG_BANK:"Fog",LUMINOUS_STORM:"Storm"};function pT(){gf=document.getElementById("hud")}function mT(i,t){if(!gf)return;Bu=Bu*.95+1/Math.max(i,.001)*.05;const e=nn==="SEEK"?"Seek the orbs...":nn==="RISING"?"The obelisk stirs...":nn==="COMPLETE"?"Convergence!":"Luminaries",n=fT[We]||"Night",s=dT[rr]||"Clear";gf.innerHTML="<b>"+e+"</b> · "+n+" · "+s+" · FPS:"+Math.round(Bu)+"<br>Pos:"+t.x.toFixed(0)+","+t.z.toFixed(0)}let xl=null;function gT(){xl=document.getElementById("orb-hud")}function xT(){return xl}function vT(){const i=document.getElementById("overlay");i&&(i.style.opacity="0",setTimeout(()=>{try{i.remove()}catch{}},2500)),xl&&(xl.style.display="block")}const Xt=[];let Ss=[];const Hc=[],On=[],ae=[],gi=[],Vn=[],Je=[],yr=[],ag=[],ya=[],Di=[],xf=[],mi=[],vl=[],ca=[],$n=[],Ci=[],Ge=[],xi=[],vf=[],Mf=[],cg=[],_f=[],yf=[],wf=[],Sf=[],bf=[],Tf=[],ds=[];let hp=0,fp=0,la=.35,ye=1.15;const lg=new F(0,1,0),Ml=new F,lr=new Qe,ug=new Qe,Ye=new Qe;function No(i,t,e,n){const s=Rl(t,e);Ml.set(s.x,s.y,s.z),lr.setFromUnitVectors(lg,Ml),lr.slerp(ug,1-n),i.quaternion.copy(lr)}function wi(i,t,e){const n=Rl(i,t);return Ml.set(n.x,n.y,n.z),lr.setFromUnitVectors(lg,Ml),lr.slerp(ug,1-e),lr.clone()}let Gu=0,ri=null,Ei=0;const Ef=15,Af=[];let dp=!1;function MT(){if(dp)return;dp=!0;const i=new Gf({color:N.crystal,transparent:!0,opacity:0,blending:te,depthWrite:!1});for(let t=0;t<Ef;t++){const e=new Ae,n=new Float32Array(6);e.setAttribute("position",new ze(n,3)),e.attributes.position.setUsage(Se);const s=new Hp(e,i.clone());s.visible=!1,ot.add(s),Af.push({line:s,geo:e,opacity:0,active:!1})}}let zs=null;function _T(){if(zs)return zs;const i=new pa(.9,1,48),t=new Z({color:N.echoBloom,transparent:!0,opacity:.5,side:Pt,depthWrite:!1,blending:te});return zs=new C(i,t),zs.rotation.x=-Math.PI/2,zs.visible=!1,ot.add(zs),zs}const Le=[];function Be(i,t){for(let e=0;e<Le.length;e++){const n=Le[e].x-i,s=Le[e].z-t;if(n*n+s*s<Le[e].r2)return!0}return!1}function yT(){const i=25+Math.floor(M()*15),t=[];for(let f=0;f<i;f++){const d=M()*6.28,g=8+M()*(jt-15);t.push({x:Math.cos(d)*g,z:Math.sin(d)*g,r:6+M()*18,density:.5+M()*.5})}const e=5+Math.floor(M()*4),n=[];for(let f=0;f<e;f++){const d=M()*6.28,g=12+M()*(jt*.65);n.push({x:Math.cos(d)*g,z:Math.sin(d)*g,r2:(10+M()*15)**2})}for(let f=0;f<T0;f++){let d,g,x=!1;for(let h=0;h<25;h++){if(M()<.2){const _=M()*6.28,v=5+M()*(jt-10);d=Math.cos(_)*v,g=Math.sin(_)*v}else{const _=Math.floor(M()*i),v=t[_],y=v.r*(M()+M())*.5*v.density,A=M()*6.28;d=v.x+Math.cos(A)*y,g=v.z+Math.sin(A)*y}if(d*d+g*g>(jt-5)*(jt-5))continue;let m=!1;for(let _=0;_<n.length;_++){const v=n[_].x-d,y=n[_].z-g;if(v*v+y*y<n[_].r2){m=!0;break}}if(!m){x=!0;for(let _=0;_<Xt.length;_++){const v=Xt[_].x-d,y=Xt[_].z-g;if(v*v+y*y<6.25){x=!1;break}}if(x)break}}if(x){const h=6+M()*10;M();const m=Dt(d,g),_=M()*Math.PI*2,v=.8+M()*.4,y=wS(h,m);y.position.x=d,y.position.z=g,Hc.push(y),Xt.push({x:d,z:g,y:m,treeH:h,yRot:_,scale:v}),Le.push({x:d,z:g,r2:4})}}const s=AS(10),o=Math.ceil(T0/10)+10;Ss=RS(s,Xt,o);for(let f=0;f<yw;f++){let d,g,x=!1;for(let h=0;h<20;h++){const m=M()*6.28,_=10+M()*(jt*.6);if(d=Math.cos(m)*_,g=Math.sin(m)*_,x=!Be(d,g),x)break}if(x){Bh(d,g,4);const h=n2(d,g);h.group.position.y=Dt(d,g),$n.push(h),Le.push({x:d,z:g,r2:64})}}for(let f=0;f<bw;f++){let d,g,x=!1;for(let h=0;h<20;h++){const m=M()*6.28,_=8+M()*(jt*.6);if(d=Math.cos(m)*_,g=Math.sin(m)*_,x=!Be(d,g),x)break}if(x){Bh(d,g,3);const h=s2(d,g);h.group.position.y=Dt(d,g),Ge.push(h),Le.push({x:d,z:g,r2:49})}}const r=new Float32Array(Xt.length);let a=0;for(let f=0;f<Xt.length;f++){let d=0;for(let g=0;g<Xt.length;g++){if(f===g)continue;const x=Xt[f].x-Xt[g].x,h=Xt[f].z-Xt[g].z;x*x+h*h<144&&d++}r[f]=Math.max(d,.2),a+=r[f]}function l(f,d){let g=0;for(let x=0;x<Xt.length;x++){const h=f-Xt[x].x,m=d-Xt[x].z;h*h+m*m<100&&g++}return g}for(let f=0;f<cw;f++){let d=M()*a,g=0;for(let A=0;A<r.length;A++)if(d-=r[A],d<=0){g=A;break}const x=Xt[g],h=M()*6.28,m=1+M()*4,_=x.x+Math.cos(h)*m,v=x.z+Math.sin(h)*m;if(Be(_,v))continue;const y=PS(_,v);y.group.position.y=Dt(_,v),No(y.group,_,v,.3),On.push(y),Le.push({x:_,z:v,r2:1})}for(let f=0;f<lw;f++){const d=M()*6.28,g=8+M()*jt*.6,x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h))continue;const m=IS(x,h);m.group.position.y=Dt(x,h),No(m.group,x,h,.45),ae.push(m),Le.push({x,z:h,r2:4})}for(let f=0;f<uw;f++){const d=M()*6.28,g=10+M()*jt*.5,x=Math.cos(d)*g,h=Math.sin(d)*g;gi.push(KS(x,Dt(x,h)+3+M()*5,h))}for(let f=0;f<hw;f++){const d=On[Math.floor(M()*On.length)],g=M()*6.28,x=1+M()*5,h=d.x+Math.cos(g)*x,m=d.z+Math.sin(g)*x;if(Be(h,m))continue;const _=JS(h,m);_.group.position.y=Dt(h,m),_._baseY=Dt(h,m),Vn.push(_)}for(let f=0;f<fw;f++){const d=M()*6.28,g=12+M()*jt*.5,x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h))continue;const m=QS(x,h),_=Dt(x,h);m.group.position.y=_,m._baseY=_,Je.push(m)}for(let f=0;f<dw;f++){const d=Xt[Math.floor(M()*Xt.length)];yr.push(t2(d.x,Dt(d.x,d.z)+2+M()*4,d.z))}const u=[null,N.grassPurple,N.grassBlue,N.grassTeal];for(let f=0;f<pw;f++){const d=M()*6.28,g=2+M()*(jt*.9),x=Math.cos(d)*g,h=Math.sin(d)*g,m=u[Math.floor(M()*u.length)],_=2+M()*2.5,v=38+Math.floor(M()*30);if(Be(x,h))continue;const y=DS(x,h,_,v,m);y.mesh.position.y=Dt(x,h),ag.push(y),Le.push({x,z:h,r2:_*_})}for(let f=0;f<vw;f++){let d,g,x=!1;for(let h=0;h<10;h++){const m=M()*6.28,_=3+M()*(jt*.85);if(d=Math.cos(m)*_,g=Math.sin(m)*_,x=!Be(d,g),x)break}if(x){const h=r2(d,g);h.group.position.y=Dt(d,g)-.08,No(h.group,d,g,.5),mi.push(h),Le.push({x:d,z:g,r2:2.25})}}for(let f=0;f<Mw;f++){let d,g,x=!1;for(let h=0;h<10;h++){const m=M()*6.28,_=8+M()*(jt*.8);if(d=Math.cos(m)*_,g=Math.sin(m)*_,x=!Be(d,g),x)break}if(x){const h=a2(d,g);h.group.position.y=Dt(d,g)-.3,No(h.group,d,g,.6),mi.push(h),Le.push({x:d,z:g,r2:9})}}c2();for(let f=0;f<jf;f++){let d,g;if(mi.length>0&&M()<.5){const x=mi[Math.floor(M()*mi.length)],h=M()*6.28,m=.5+M()*3;d=x.x+Math.cos(h)*m,g=x.z+Math.sin(h)*m}else if(Xt.length>0&&M()<.5){const x=Xt[Math.floor(M()*Xt.length)],h=M()*6.28,m=1+M()*4;d=x.x+Math.cos(h)*m,g=x.z+Math.sin(h)*m}else{const x=M()*6.28,h=3+M()*(jt*.85);d=Math.cos(x)*h,g=Math.sin(x)*h}l2(d,g,Dt(d,g))}u2();for(let f=0;f<mw;f++){const d=Xt[Math.floor(M()*Xt.length)],g=M()*6.28,x=1+M()*5,h=d.x+Math.cos(g)*x,m=d.z+Math.sin(g)*x;if(Be(h,m))continue;const _=US(h,m);_.group.position.y=Dt(h,m),_.slopeQ=wi(h,m,.4),ya.push(_),Le.push({x:h,z:m,r2:1})}for(let f=0;f<gw;f++){const d=M()*6.28,g=3+M()*(jt*.7),x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h)||l(x,h)>1&&M()<.8)continue;const m=NS(x,h);m.group.position.y=Dt(x,h),m.slopeQ=wi(x,h,.35),Di.push(m),Le.push({x,z:h,r2:1})}for(let f=0;f<xw;f++){const d=M()*6.28,g=4+M()*(jt*.8),x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h)||l(x,h)>1&&M()<.8)continue;const m=zS(x,h);m.group.position.y=Dt(x,h),m.slopeQ=wi(x,h,.15),xf.push(m),Le.push({x,z:h,r2:1})}const c=6.28/qn,p=[];for(let f=0;f<qn;f++){let d,g,x=!1;const h=f*c;for(let m=0;m<50;m++){const _=h+M()*c,v=30+M()*(jt*.5);if(d=Math.cos(_)*v,g=Math.sin(_)*v,Be(d,g))continue;let y=!1;for(let A=0;A<p.length;A++){const E=d-p[A].x,b=g-p[A].z;if(E*E+b*b<900){y=!0;break}}if(!y){x=!0;break}}if(x){p.push({x:d,z:g});const m=o2(d,g);m.group.position.y=Dt(d,g)+1,m.flyY=Dt(d,g)+1,xi.push(m)}}for(let f=0;f<rm;f++){const d=M()*6.28,g=2+M()*3,x=Math.cos(d)*g,h=Math.sin(d)*g;vl.push(e2(x,Dt(x,h)+1+M()*.5,h))}for(let f=0;f<_w;f++){const d=M()*6.28,g=4+M()*(jt*.7),x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h)||l(x,h)>1&&M()<.8)continue;const m=GS(x,h);m.group.position.y=Dt(x,h),No(m.group,x,h,.35),ca.push(m),Le.push({x,z:h,r2:1})}for(let f=0;f<ww;f++){const d=M()*6.28,g=5+M()*jt*.6,x=Math.cos(d)*g,h=Math.sin(d)*g;Ci.push(i2(x,Dt(x,h)+.5+M()*5,h))}for(let f=0;f<Tw;f++){const d=M()*6.28,g=5+M()*(jt*.7),x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h))continue;const m=HS(x,h);m.group.position.y=Dt(x,h),m.slopeQ=wi(x,h,.3),vf.push(m),Le.push({x,z:h,r2:2.25})}for(let f=0;f<Ew;f++){const d=Xt[Math.floor(M()*Xt.length)],g=M()*6.28,x=2+M()*4,h=d.x+Math.cos(g)*x,m=d.z+Math.sin(g)*x;if(Be(h,m))continue;const _=VS(h,m);_.group.position.y=Dt(h,m),_.slopeQ=wi(h,m,.25),Mf.push(_),Le.push({x:h,z:m,r2:1})}for(let f=0;f<Aw;f++){const d=M()*6.28,g=6+M()*(jt*.65),x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h))continue;const m=WS(x,h);m.group.position.y=Dt(x,h),No(m.group,x,h,.25),cg.push(m),Le.push({x,z:h,r2:2.25})}for(let f=0;f<Rw;f++){const d=Xt[Math.floor(M()*Xt.length)],g=M()*6.28,x=2+M()*5,h=d.x+Math.cos(g)*x,m=d.z+Math.sin(g)*x;if(Be(h,m))continue;const _=qS(h,m);_.group.position.y=Dt(h,m),_.slopeQ=wi(h,m,.35),_f.push(_),Le.push({x:h,z:m,r2:1.5})}for(let f=0;f<Cw;f++){const d=M()*6.28,g=8+M()*(jt*.6),x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h))continue;const m=YS(x,h);m.group.position.y=Dt(x,h),m.slopeQ=wi(x,h,.3),yf.push(m),Le.push({x,z:h,r2:3})}for(let f=0;f<Pw;f++){const d=M()*6.28,g=5+M()*(jt*.7),x=Math.cos(d)*g,h=Math.sin(d)*g;if(Be(x,h))continue;const m=ZS(x,h);m.group.position.y=Dt(x,h),m.slopeQ=wi(x,h,.35),wf.push(m),Le.push({x,z:h,r2:1.5})}for(let f=0;f<Iw;f++){const d=Xt[Math.floor(M()*Xt.length)],g=M()*6.28,x=2+M()*4,h=d.x+Math.cos(g)*x,m=d.z+Math.sin(g)*x;if(Be(h,m))continue;const _=$S(h,m);_.group.position.y=Dt(h,m),_.slopeQ=wi(h,m,.3),Sf.push(_),Le.push({x:h,z:m,r2:1.5})}for(let f=0;f<Lw;f++){const d=mi.length>0?mi[Math.floor(M()*mi.length)]:{x:0,z:0},g=M()*6.28,x=1+M()*3,h=d.x+Math.cos(g)*x,m=d.z+Math.sin(g)*x;if(Be(h,m))continue;const _=jS(h,m);_.group.position.y=Dt(h,m),_.slopeQ=wi(h,m,.2),bf.push(_),Le.push({x:h,z:m,r2:1})}for(let f=0;f<Dw;f++){const d=M()*6.28,g=5+M()*(jt*.8),x=Math.cos(d)*g,h=Math.sin(d)*g,m=1.5+M()*3.5,_=N.groundGlowColors[Math.floor(M()*N.groundGlowColors.length)],v=.08+M()*.12,y=new Z({color:_,transparent:!0,opacity:v,blending:te,depthWrite:!1,side:Pt}),A=new He(m,10);A.rotateX(-Math.PI/2);const E=Dt(x,h),b=A.attributes.position;for(let w=0;w<b.count;w++){const S=x+b.getX(w),R=h+b.getZ(w);b.setY(w,Dt(S,R)-E+.02)}b.needsUpdate=!0,A.computeVertexNormals();const T=new C(A,y);T.position.set(x,E,h),ot.add(T),Tf.push({mesh:T,mat:y,phase:M()*6.28,baseOpacity:v,speed:.3+M()*.3,x,z:h})}for(let f=0;f<Xt.length;f++){const d=Xt[f],g=Dt(d.x,d.z);d.y=g,Hc[f]&&(Hc[f].position.y=g+(d.treeH||10)*.6)}if(Ss.length>0){const f=new he,d=new F(0,1,0),g=new F,x=new Qe,h=new Qe,m=new Qe;for(let _=0;_<Ss.length;_++){const v=Ss[_];for(let y=0;y<v.instances.length;y++){const A=v.instances[y],E=Xt[A.posIdx];A.y=E.y;const b=Rl(E.x,E.z);A.nx=b.x,A.ny=b.y,A.nz=b.z,f.position.set(E.x,E.y,E.z),g.set(b.x,b.y,b.z),x.setFromUnitVectors(d,g),x.slerp(h,.85),m.setFromAxisAngle(d,E.yRot),f.quaternion.copy(x).multiply(m),f.scale.setScalar(E.scale),f.updateMatrix(),v.trunk&&v.trunk.setMatrixAt(y,f.matrix),v.canopy&&v.canopy.setMatrixAt(y,f.matrix),v.glow&&v.glow.setMatrixAt(y,f.matrix),v.detail&&v.detail.setMatrixAt(y,f.matrix)}v.trunk&&(v.trunk.instanceMatrix.needsUpdate=!0),v.canopy&&(v.canopy.instanceMatrix.needsUpdate=!0),v.glow&&(v.glow.instanceMatrix.needsUpdate=!0),v.detail&&(v.detail.instanceMatrix.needsUpdate=!0)}}}function hg(i,t){const e=1+is*1.5,n=Js*.03,s=Yo*.03,o=j.pos.x,r=j.pos.y,a=j.pos.z;CS(Ss,Hc,o,r,a,t,e,n,s);const l=la*ye;for(let u=0;u<Ss.length;u++){const c=Ss[u];c.canopyMat&&(c.canopyMat.emissiveIntensity=1.2*l),c.glowMat&&(c.glowMat.emissiveIntensity=.4*l),c.detailMat&&(c.detailMat.emissiveIntensity=.5*l),c.trunkMat&&(c.trunkMat.emissiveIntensity=.4*l)}LS(t,e,n,s,o,a,la*ye),nS(t,o,a);for(let u=0;u<ya.length;u++){const c=ya[u],p=c.group.position.x-o,f=c.group.position.y-r,d=c.group.position.z-a,g=p*p+f*f+d*d;if(g>1600){c.group.visible&&(c.group.visible=!1);continue}c.group.visible||(c.group.visible=!0),!(g>900)&&c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),Ye.set((Math.sin(t*.6+c.phase+1)*.02*e+s)*.5,0,(Math.sin(t*.8+c.phase)*.03*e+n)*.5,1).normalize(),c.group.quaternion.multiply(Ye))}for(let u=0;u<Di.length;u++){const c=Di[u],p=c.group.position.x-o,f=c.group.position.y-r,d=c.group.position.z-a,g=p*p+f*f+d*d;if(g>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),g>900)continue;const x=Math.sin(t*.8+c.phase)*.5+.5;c.petalMat.emissiveIntensity=(.5+x*.7)*Te(c.group.position.x,c.group.position.z,xe*ye),c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),Ye.set(0,0,(Math.sin(t*.9+c.phase)*.04*e+n*.5)*.5,1).normalize(),c.group.quaternion.multiply(Ye))}for(let u=0;u<xf.length;u++){const c=xf[u],p=c.group.position.x-o,f=c.group.position.y-r,d=c.group.position.z-a,g=p*p+f*f+d*d;if(g>1600){c.group.visible&&(c.group.visible=!1);continue}c.group.visible||(c.group.visible=!0),!(g>900)&&c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),Ye.set((Math.sin(t*.8+c.phase+2)*c.swayAmp*.5*e+s)*.5,0,(Math.sin(t*1.1+c.phase)*c.swayAmp*e+n)*.5,1).normalize(),c.group.quaternion.multiply(Ye))}for(let u=0;u<vf.length;u++){const c=vf[u],p=Math.sin(t*1.2+c.phase)*.5+.5,f=Te(c.group.position.x,c.group.position.z,xe*ye);c.orbMat.emissiveIntensity=(.6+p*.6)*f,c.hazeMat.opacity=(.06+p*.06)*f,c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),Ye.set((Math.sin(t*.4+c.phase+1)*.015*e+s*.3)*.5,0,(Math.sin(t*.5+c.phase)*.02*e+n*.3)*.5,1).normalize(),c.group.quaternion.multiply(Ye))}for(let u=0;u<Mf.length;u++){const c=Mf[u];for(let p=0;p<c.podMats.length;p++){const f=Math.sin(t*1.5+c.phase+p*1.8)*.5+.5;c.podMats[p].emissiveIntensity=(.5+f*.7)*Te(c.group.position.x,c.group.position.z,xe*ye)}c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),Ye.set(0,0,(Math.sin(t*.35+c.phase)*.01*e+n*.2)*.5,1).normalize(),c.group.quaternion.multiply(Ye))}XS(cg,i,t,xe*ye,Te);for(let u=0;u<_f.length;u++){const c=_f[u],p=c.x-o,f=c.z-a,d=p*p+f*f;if(d>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),d<900){for(let g=0;g<c.tipMats.length;g++){const x=Math.sin(t*1.8+c.phase+g*1.5)*.5+.5;c.tipMats[g].emissiveIntensity=(.5+x*.7)*Te(c.x,c.z,xe*ye)}c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),Ye.set((Math.sin(t*.35+c.phase+1)*.01*e+s*.2)*.5,0,(Math.sin(t*.4+c.phase)*.015*e+n*.2)*.5,1).normalize(),c.group.quaternion.multiply(Ye))}}for(let u=0;u<yf.length;u++){const c=yf[u],p=c.x-o,f=c.z-a,d=p*p+f*f;if(d>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),d<900){const g=Te(c.x,c.z,xe*ye);c.columnMat.emissiveIntensity=(.5+Math.sin(t*.8+c.phase)*.35)*g,c.hazeMat.opacity=(.05+Math.sin(t*.8+c.phase)*.04)*g;for(let x=0;x<c.flies.length;x++){const h=t*(2+x*.5)+x*2.1,m=.2+Math.sin(t*.7+x)*.08,_=.1+Math.sin(t*1.3+x*1.7)*.15;c.flies[x].position.set(Math.cos(h)*m,c.spadixY+_,Math.sin(h)*m)}c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),Ye.set(0,0,(Math.sin(t*.3+c.phase)*.01*e+n*.15)*.5,1).normalize(),c.group.quaternion.multiply(Ye))}}for(let u=0;u<wf.length;u++){const c=wf[u],p=c.x-o,f=c.z-a,d=p*p+f*f;if(d>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),d<900){for(let g=0;g<c.orbMats.length;g++){const x=Math.sin(t*2+c.phase+g*1.3)*.5+.5;c.orbMats[g].emissiveIntensity=(.5+x*.7)*Te(c.x,c.z,xe*ye)}c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),Ye.set((Math.sin(t*.4+c.phase+1)*.008*e+s*.2)*.5,0,(Math.sin(t*.45+c.phase)*.012*e+n*.2)*.5,1).normalize(),c.group.quaternion.multiply(Ye))}}for(let u=0;u<Sf.length;u++){const c=Sf[u],p=c.x-o,f=c.z-a,d=p*p+f*f;if(d>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),d<900){for(let g=0;g<c.podMats.length;g++){const x=Math.sin(t*1.5+c.phase+g*1.8)*.5+.5;c.podMats[g].emissiveIntensity=(.5+x*.6)*Te(c.x,c.z,xe*ye)}c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),Ye.set((Math.sin(t*.5+c.phase+1)*.015*e+s*.25)*.5,0,(Math.sin(t*.6+c.phase)*.02*e+n*.25)*.5,1).normalize(),c.group.quaternion.multiply(Ye))}}for(let u=0;u<bf.length;u++){const c=bf[u],p=c.x-o,f=c.z-a,d=p*p+f*f;if(d>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),d<900){for(let g=0;g<c.veilMats.length;g++)c.veilMats[g].rotation.z=Math.sin(t*.8+c.phase+g*.7)*.06*e;c.slopeQ&&(c.group.quaternion.copy(c.slopeQ),Ye.set(0,0,(Math.sin(t*.35+c.phase)*.01*e+n*.15)*.5,1).normalize(),c.group.quaternion.multiply(Ye))}}for(let u=0;u<Tf.length;u++){const c=Tf[u],p=c.x-o,f=c.z-a;if(p*p+f*f>3600){c.mesh.visible=!1;continue}c.mesh.visible=!0;const d=Math.sin(t*c.speed+c.phase)*.3+.7;c.mat.opacity=c.baseOpacity*d*Te(c.x,c.z,xe*ye)}}function fg(i,t){for(let n=0;n<gi.length;n++){const s=gi[n],o=s.group,r=o.position.x,a=o.position.z;s._syncPhase===void 0&&(s._syncPhase=s.phase);let l=0,u=0;for(let c=0;c<gi.length;c++){if(c===n)continue;const p=gi[c],f=p.group.position.x-r,d=p.group.position.z-a;f*f+d*d<225&&(l+=p._syncPhase||p.phase,u++)}if(u>0){const c=l/u;s._syncPhase+=(c-s._syncPhase)*i*.4}}const e=We==="DEEP_NIGHT"?2:We==="DAWN"?-1.5:0;for(let n=0;n<gi.length;n++){const s=gi[n].group,o=s.position.x-j.pos.x,r=s.position.z-j.pos.z,a=s.position.y-j.pos.y;if(o*o+a*a+r*r>3025){s.visible=!1;continue}s.visible=!0;const l=gi[n],u=l.group,c=u.position.x,p=u.position.z,f=l.floatY+e;if(l._stT-=i,l._stT<=0)if(os)l._state="display",l._stT=10+Math.random()*15;else{const _=Math.random();_<.5?(l._state="drift",l._stT=20+Math.random()*30):_<.75?(l._state="pulse",l._stT=8+Math.random()*12):(l._state="migrate",l._migrateAng=Math.random()*6.28,l._stT=15+Math.random()*20)}switch(os&&l._state!=="display"&&(l._state="display",l._stT=10,oo("jelly",{x:c,z:p},j.pos)),l._state){case"drift":{l.driftAng+=i*.15;const _=8+Math.sin(t*.1+l.phase)*4,v=l.homeX+Math.cos(l.driftAng)*_,y=l.homeZ+Math.sin(l.driftAng)*_;u.position.x+=(v-c)*i*.3,u.position.z+=(y-p)*i*.3,u.position.y=f+Math.sin(t*l.wobble+l.phase)*1.5;break}case"pulse":{l.driftAng+=i*.08,u.position.x+=Math.cos(l.driftAng)*i*.3,u.position.z+=Math.sin(l.driftAng)*i*.3,u.position.y=f+Math.sin(t*l.wobble+l.phase)*1,l._pulseSync=Math.sin(t*2+l._syncPhase)*.5+.5;break}case"migrate":{u.position.x+=Math.cos(l._migrateAng)*i*1,u.position.z+=Math.sin(l._migrateAng)*i*1,u.position.y=f+Math.sin(t*l.wobble+l.phase)*.8,u.position.x*u.position.x+u.position.z*u.position.z>jt*.8*(jt*.8)&&(l._migrateAng+=Math.PI);break}case"display":{l.driftAng+=i*.4,u.position.x+=Math.cos(l.driftAng)*i*.8,u.position.z+=Math.sin(l.driftAng)*i*.8,u.position.y=f+Math.sin(t*2+l.phase)*2,l._syncPhase+=(0-l._syncPhase)*i*2;break}}const d=Dt(u.position.x,u.position.z);u.position.y<d+3&&(u.position.y=d+3),l._state==="pulse"&&Math.random()<.003&&oo("jelly",{x:c,z:p},j.pos);const g=l._syncPhase||l.phase,x=Math.sin(t*1.2+g)*.5+.5;let h=1,m=0;if(l._state==="pulse")h=1+l._pulseSync*1.5,m=l._pulseSync*.15;else if(l._state==="display"){const _=Math.sin(t*4)*.5+.5;h=1.5+_*1.2,m=.15+_*.1}else l._state==="drift"&&(h=1+x*.3);if(l.bellMat.emissiveIntensity=(.4+x*.8)*Te(u.position.x,u.position.z,xe*ye)*h,l.bellMat.opacity=.35+x*.25+m,l.tipMat){const _=Math.sin(t*5.3+l.phase*7.1)*Math.sin(t*3.7+l.phase*4.3);l.tipMat.opacity=.3+.7*(_*.5+.5)}u.rotation.y+=i*.2;for(let _=2;_<u.children.length;_++)u.children[_].rotation.x=Math.sin(t*2+_+g)*.15,u.children[_].rotation.z=Math.sin(t*1.5+_*.7+g)*.1}}function dg(i,t){const e=Ve.ShiftLeft||Ve.ShiftRight||Tr,n=We==="DAWN"?.6:We==="NIGHT"?1.3:1,s=We==="DAWN"?2:We==="NIGHT"?.6:1;for(let o=0;o<Vn.length;o++){const r=Vn[o],a=r.group,l=a.position.x,u=a.position.z,c=l-j.pos.x,p=u-j.pos.z,f=c*c+p*p;if(f>1600){a.visible=!1;continue}if(a.visible=!0,r.state!=="startled"&&r.state!=="following"&&r.state!=="huddle"){const b=e?3.5:2;let T=f<b*b;if(!T)for(let w=0;w<Je.length;w++){if(Je[w].state!=="flee")continue;const S=Je[w].group.position.x-l,R=Je[w].group.position.z-u;if(S*S+R*R<25){T=!0;break}}T&&(r.state="startled",r._scaredT=.6+Math.random()*.5,r.wanderAng=Math.atan2(c,p),r.hopTimer=0,oo("puff",{x:l,z:u},j.pos))}if(os&&r.state!=="startled"&&r.state!=="huddle"){let b=1/0,T=-1;for(let w=0;w<Vn.length;w++){if(w===o)continue;const S=Vn[w].group.position.x-l,R=Vn[w].group.position.z-u,L=S*S+R*R;L<b&&(b=L,T=w)}T>=0&&b>1&&(r.state="huddle",r._huddleTarget=T)}_r>8&&f<144&&r.state==="idle"&&Math.random()<.001&&(r.state="following",r._followT=10+Math.random()*10);const d=l-r._lastTX,g=u-r._lastTZ;d*d+g*g>.25&&(r._baseY=Dt(l,u),r._lastTX=l,r._lastTZ=u);const x={x:l,z:u},h=[];for(let b=0;b<Vn.length;b++){if(b===o)continue;const T=Vn[b].group.position.x,w=Vn[b].group.position.z;(T-l)*(T-l)+(w-u)*(w-u)<100&&h.push({x:T,z:w})}const m=og(x,h,1.5),_=h.length>0?rg(x,h):{x:0,z:0},v=m.x*2+_.x*.3,y=m.z*2+_.z*.3,A=Math.sqrt(v*v+y*y);switch(r.state){case"idle":{if(r.idleTimer-=i,a.position.y=r._baseY+Math.sin(t*2+r.phase)*.02,a.rotation.y+=Math.sin(t*.5+r.phase)*i*.3,A>.1&&h.length>1&&(a.position.x+=_.x*.05*i,a.position.z+=_.z*.05*i),Math.random()<2e-4&&oo("puff",{x:l,z:u},j.pos),r.idleTimer<=0){const b=A>.2?Math.atan2(v,y):0;r.state="hop",r.wanderAng+=(Math.random()-.5)*1.5+b*.3,r.hopTimer=0}break}case"hop":{r.hopTimer+=i;const T=r.hopTimer/1.2;if(T>=1)r.state="idle",r.idleTimer=(1.5+Math.random()*3)*s,a.position.y=r._baseY;else{a.position.y=r._baseY+Math.sin(T*Math.PI)*.3,a.position.x+=Math.sin(r.wanderAng)*r.speed*n*i,a.position.z+=Math.cos(r.wanderAng)*r.speed*i;const w=1-Math.sin(T*Math.PI)*.15,S=1+Math.sin(T*Math.PI)*.2;a.scale.set(w,S,w),a.rotation.y=r.wanderAng}break}case"startled":{r._scaredT-=i,r.hopTimer+=i*1.5;const b=Math.min(r.hopTimer/.8,1);a.position.y=r._baseY+Math.sin(b*Math.PI)*.5,a.position.x+=Math.sin(r.wanderAng)*r.speed*2*i+m.x*.5*i,a.position.z+=Math.cos(r.wanderAng)*r.speed*2*i+m.z*.5*i,a.scale.set(.85,1.3,.85),r._scaredT<=0&&(r.state="idle",r.idleTimer=3+Math.random()*3,a.position.y=r._baseY,a.scale.set(1,1,1));break}case"following":{if(r._followT-=i,f>225||_r<3||r._followT<=0){r.state="idle",r.idleTimer=2;break}if(r.wanderAng=Math.atan2(j.pos.x-l,j.pos.z-u),f>9){r.hopTimer+=i;const b=r.hopTimer%1.5/1.5;a.position.y=r._baseY+Math.sin(b*Math.PI)*.2,a.position.x+=Math.sin(r.wanderAng)*r.speed*.4*i,a.position.z+=Math.cos(r.wanderAng)*r.speed*.4*i}else a.position.y=r._baseY+Math.sin(t*3+r.phase)*.03;a.rotation.y=r.wanderAng;break}case"huddle":{if(!os){r.state="idle",r.idleTimer=2;break}const b=Vn[r._huddleTarget];if(b){const T=b.group.position.x-l,w=b.group.position.z-u,S=Math.sqrt(T*T+w*w);S>.5&&(a.position.x+=T/S*r.speed*.5*i,a.position.z+=w/S*r.speed*.5*i)}a.rotation.z=Math.sin(t*8)*.05,a.position.y=r._baseY;break}}if(r._blinkTimer-=i,r._blinkTimer<=0)if(r._blinkState===0){for(let b=0;b<r.eyes.length;b++)r.eyes[b].scale.y=.1;r._blinkState=1,r._blinkTimer=.08+Math.random()*.06}else{for(let b=0;b<r.eyes.length;b++)r.eyes[b].scale.y=1;r._blinkState=0,r._blinkTimer=2+Math.random()*5}for(let b=0;b<r.ears.length;b++){const T=r.ears[b];T.mesh.rotation.z=T.baseRotZ+Math.sin(t*3.5+T.side*1.2+r.phase)*.08}if(r.tail.position.y=.38+Math.sin(t*4+r.phase)*.015,r.sparkles)for(let b=0;b<r.sparkles.length;b++){const T=r.sparkles[b],w=t*(2+b*.7)+T.phase;T.mesh.position.set(Math.cos(w)*T.orbitR,.5+Math.sin(w*1.3)*.1,Math.sin(w)*T.orbitR),T.mat.opacity=(.3+Math.sin(t*4+T.phase)*.3)*Te(a.position.x,a.position.z,xe*ye)}r.crownMat&&(r.crownMat.emissiveIntensity=(.4+Math.sin(t*1.5+r.phase)*.3)*Te(a.position.x,a.position.z,xe*ye)),a.position.x*a.position.x+a.position.z*a.position.z>jt*.85*(jt*.85)&&(r.wanderAng+=Math.PI)}}function pg(i,t){const e=Ve.ShiftLeft||Ve.ShiftRight||Tr;for(let n=0;n<Je.length;n++){const s=Je[n],o=s.group,r=o.position.x,a=o.position.z,l=r-j.pos.x,u=a-j.pos.z,c=l*l+u*u;if(c>3600){o.visible=!1;continue}o.visible=!0;const p=Math.atan2(l,u),f=e?18:12,d=f*f,g=e?10:Fw,x=g*g,h=r-s._lastTX,m=a-s._lastTZ;h*h+m*m>.25&&(s._baseY=Dt(r,a),s._lastTX=r,s._lastTZ=a);const _=s._baseY;if(s.state!=="flee"&&s.state!=="alert"&&s.state!=="watching"){const R={x:r,z:a},L={x:j.pos.x,z:j.pos.z};c<x||eT(R,L,g,e)?(s.state="flee",s.wanderAng=p,s.fleeTimer=2.5+Math.random()*2,s._zigTimer=0,oo("deer",R,j.pos)):(c<d||tT(R,s.wanderAng,L,f,Math.PI*.5))&&(s.state="alert",s._stT=1+Math.random()*1.5,oo("deer",R,j.pos))}if(s.state!=="flee")for(let R=0;R<Je.length;R++){if(R===n||Je[R].state!=="flee")continue;const L=Je[R].group.position.x-r,D=Je[R].group.position.z-a;if(L*L+D*D<400){s.state="flee",s.wanderAng=Je[R].wanderAng+(Math.random()-.5)*.4,s.fleeTimer=2+Math.random()*1.5,s._zigTimer=0;break}}const v=[];for(let R=0;R<Je.length;R++){if(R===n)continue;const L=Je[R].group.position.x,D=Je[R].group.position.z;(L-r)*(L-r)+(D-a)*(D-a)<400&&v.push({x:L,z:D})}const y=og({x:r,z:a},v,3),A=v.length>0?rg({x:r,z:a},v):{x:0,z:0};(s.state==="alert"||s.state==="watching")&&(s.headLook+=(p-s.wanderAng)*.3*i);let E=s.speed,b=!1;switch(s.state){case"walk":{if(b=!0,s.walkTimer-=i,s.walkTimer<=0){const L=Math.random(),D=We==="DUSK"?.55:.4,z=We==="DEEP_NIGHT"?.25:.1;if(L<.25)s.state="pause",s.pauseTimer=2+Math.random()*3;else if(L<D)s.state="graze",s._stT=We==="DUSK"?5+Math.random()*6:3+Math.random()*4;else if(L<D+.1&&Ge.length>0){s.state="drink",s._stT=8;let H=1/0;for(let k=0;k<Ge.length;k++){const O=Ge[k].x-r,G=Ge[k].z-a,et=O*O+G*G;et<H&&(H=et,s._drinkTgt=Ge[k])}}else L<D+.1+z?(s.state="rest",s._stT=We==="DEEP_NIGHT"?8+Math.random()*8:5+Math.random()*5):(s.wanderAng+=(Math.random()-.5)*1.2,s.walkTimer=3+Math.random()*5)}if((r-s.homeX)*(r-s.homeX)+(a-s.homeZ)*(a-s.homeZ)>400){const L=Math.atan2(s.homeX-r,s.homeZ-a);s.wanderAng+=(L-s.wanderAng)*i*.5}if(v.length>0){const L=Math.atan2(A.x*.15+y.x*.8,A.z*.15+y.z*.8);s.wanderAng+=(L-s.wanderAng)*i*.3}break}case"pause":{s.pauseTimer-=i,s.headLook=Math.sin(t*.6)*.4,s.pauseTimer<=0&&(s.state="walk",s.walkTimer=3+Math.random()*5);break}case"graze":{s._stT-=i,s.headBob=-.5,s._stT<=0&&(s.state="walk",s.walkTimer=2+Math.random()*4,s.headBob=0);break}case"drink":{if(s._stT-=i,s._drinkTgt){const R=s._drinkTgt.x-r,L=s._drinkTgt.z-a;Math.sqrt(R*R+L*L)>2?(s.wanderAng=Math.atan2(R,L),b=!0,E=s.speed*.7):s.headBob=-.6}s._stT<=0&&(s.state="walk",s.walkTimer=3+Math.random()*4,s.headBob=0,s._drinkTgt=null);break}case"rest":{s._stT-=i,o.position.y=Math.max(_-.3,o.position.y-i*.5),s._stT<=0&&(s.state="walk",s.walkTimer=2+Math.random()*3);break}case"alert":{s._stT-=i,c<x?(s.state="flee",s.wanderAng=p,s.fleeTimer=2.5+Math.random()*2):s._stT<=0&&(c<f*1.2*(f*1.2)?(s.state="watching",s._stT=3+Math.random()*3):(s.state="walk",s.walkTimer=2+Math.random()*3));break}case"watching":{s._stT-=i,b=!0,E=s.speed*.3,s.wanderAng=p,c<x?(s.state="flee",s.wanderAng=p,s.fleeTimer=2.5+Math.random()*2):(c>f*1.5*(f*1.5)||s._stT<=0)&&(s.state="walk",s.walkTimer=2+Math.random()*4);break}case"flee":{b=!0,E=s.speed*Ow,s.fleeTimer-=i,s._zigTimer-=i,s._zigTimer<=0&&(s._zigDir*=-1,s._zigTimer=.4+Math.random()*.4),s.wanderAng=p+s._zigDir*.3;const R=iT({x:r,z:a},s.wanderAng,Xt,3,1.5);R.x*R.x+R.z*R.z>.01&&(s.wanderAng+=Math.atan2(R.z,R.x)*.3);const L=nT({x:r,z:a},8);(L.x!==0||L.z!==0)&&(s.wanderAng=Math.atan2(L.z,L.x)),(s.fleeTimer<=0||c>f*2*(f*2))&&(s.state="walk",s.walkTimer=3+Math.random()*5);break}}if(b&&(o.position.x+=Math.sin(s.wanderAng)*E*i,o.position.z+=Math.cos(s.wanderAng)*E*i,s.legCycle+=i*E*3),o.position.x*o.position.x+o.position.z*o.position.z>jt*.9*(jt*.9)&&(s.wanderAng=Math.atan2(-o.position.x,-o.position.z)),s.state!=="rest"){const R=_-o.position.y;Math.abs(R)>.01?o.position.y+=Math.sign(R)*Math.min(Math.abs(R),i*2):o.position.y=_}if(o.rotation.y=s.wanderAng,s.state==="alert"||s.state==="watching"){const R=p-s.wanderAng;s.headLook+=(R*.5-s.headLook)*i*3}const w=s.headBob||0;s.neckPivot.rotation.x+=(w-s.neckPivot.rotation.x)*i*3,s.neckPivot.rotation.y+=(s.headLook-s.neckPivot.rotation.y)*i*4,b&&s.state!=="graze"&&s.state!=="drink"&&(s.neckPivot.rotation.x+=Math.sin(s.legCycle*2)*.05);for(let R=0;R<s.legPivots.length;R++){const L=s.legPivots[R];if(b){const D=L.isFront?0:Math.PI,z=L.side>0?Math.PI:0,H=Math.sin(s.legCycle+D+z)*.4*(E/s.speed);L.upper.rotation.x=H,L.lower.rotation.x=Math.max(0,-H*.6)}else s.state==="rest"&&o.position.y<-.1?(L.upper.rotation.x+=(.8-L.upper.rotation.x)*i*2,L.lower.rotation.x+=(1-L.lower.rotation.x)*i*2):(L.upper.rotation.x*=.9,L.lower.rotation.x*=.9)}s.tailPivot.rotation.x=Math.sin(t*1.5+s.phase)*.15,s.state==="flee"&&(s.tailPivot.rotation.x+=.3),s.state==="alert"?s.tailPivot.rotation.z=Math.sin(t*6)*.1:s.tailPivot.rotation.z*=.9;const S=Te(r,a,xe*ye);if(s.mat.emissiveIntensity=(.6+Math.sin(t*.8+s.phase)*.3)*S,s.headLook*=.98,s.manePlanes)for(let R=0;R<s.manePlanes.length;R++)s.manePlanes[R].rotation.z=Math.sin(t*3+R*1.2+s.phase)*.15;if(s.branchOrbs)for(let R=0;R<s.branchOrbs.length;R++)s.branchOrbs[R].material.opacity=(.3+Math.sin(t*2.5+s.phase+R*1.5)*.3)*S;if(s.trailSpheres){const R=s.state==="walk"||s.state==="flee";for(let L=0;L<s.trailSpheres.length;L++){const D=s.trailSpheres[L],z=.03+L*.02;D.prevX+=(r-D.prevX)*z,D.prevY+=(o.position.y+.8-D.prevY)*z,D.prevZ+=(a-D.prevZ)*z,D.mesh.position.set(D.prevX,D.prevY+Math.sin(t*2+L*1.5)*.04,D.prevZ),D.mat.opacity=R?(.12-L*.03)*S:.02*S}}}}function mg(i,t){for(let e=0;e<yr.length;e++){const n=yr[e],s=n.group,o=s.position.x,r=s.position.z,a=o-j.pos.x,l=r-j.pos.z;if(a*a+l*l>2025){s.visible=!1;continue}if(s.visible=!0,n._state==="patrol"){if(Math.random()<.002){let m=1/0,_=null;for(let v=0;v<ae.length;v++){const y=ae[v].x-o,A=ae[v].z-r,E=y*y+A*A;E<900&&E<m&&(m=E,_=ae[v])}for(let v=0;v<$n.length;v++){if($n[v].glowIntensity<.3)continue;const y=$n[v].x-o,A=$n[v].z-r,E=y*y+A*A;E<900&&E<m&&(m=E,_=$n[v])}_&&(n._state="attracted",n._attractTarget=_,n._stT=6+Math.random()*8,oo("moth",{x:o,z:r},j.pos))}const h=We==="DAWN"?.005:We==="DEEP_NIGHT"?3e-4:.001;if(Math.random()<h){let m=1/0,_=null;for(let v=0;v<Xt.length;v++){const y=Xt[v].x-o,A=Xt[v].z-r,E=y*y+A*A;E<400&&E<m&&(m=E,_=Xt[v])}_&&(n._state="rest",n._restTree=_,n._stT=We==="DAWN"?8+Math.random()*10:4+Math.random()*6)}}const u=We==="DEEP_NIGHT"?1.6:We==="DAWN"?.5:1,c=We==="DEEP_NIGHT"?1.4:1;switch(n._state){case"patrol":{n.orbitAng+=i*.4*u;const h=n.centerX+Math.cos(n.orbitAng)*n.orbitR*c,m=n.centerZ+Math.sin(n.orbitAng)*n.orbitR*c;s.position.x+=(h-o)*i*1.5,s.position.z+=(m-r)*i*1.5,s.position.y=n.floatY+Math.sin(t*.7+n.phase)*.8,s.rotation.y=n.orbitAng+Math.PI/2;break}case"attracted":{if(n._stT-=i,!n._attractTarget||n._stT<=0){n._state="patrol",n._attractTarget=null;break}n.orbitAng+=i*.8;const h=n._attractTarget,m=Math.max(.5,n._stT*.4),_=h.x+Math.cos(n.orbitAng)*m,v=h.z+Math.sin(n.orbitAng)*m;s.position.x+=(_-o)*i*2,s.position.z+=(v-r)*i*2,s.position.y+=(2-s.position.y)*i*.5,s.rotation.y=n.orbitAng+Math.PI/2;break}case"rest":{if(n._stT-=i,!n._restTree||n._stT<=0){n._state="patrol",n._restTree=null,n.centerX=s.position.x,n.centerZ=s.position.z;break}const h=n._restTree,m=h.x+.5-o,_=h.z+.5-r,v=Math.sqrt(m*m+_*_);v>.3&&(s.position.x+=m/v*i*2,s.position.z+=_/v*i*2),s.position.y+=(2.5-s.position.y)*i*1.5,s.rotation.y=Math.atan2(m,_);break}}const p=Dt(s.position.x,s.position.z);s.position.y<p+1.5&&(s.position.y=p+1.5);const f=n._state==="rest"?.05:.4,d=Math.sin(t*n.flapSpeed+n.phase)*f;for(let h=0;h<s._wingPivots.length;h++){const m=s._wingPivots[h];m.pivot.rotation.z=d*m.side}const g=Math.sin(t*1.5+n.phase)*.5+.5,x=n._state==="attracted"?.4:0;n.wingMat.emissiveIntensity=(.5+g*.6+x)*Te(s.position.x,s.position.z,xe*ye),n.wingMat.opacity=.45+g*.25}}function wT(i,t){const e=Ve.ShiftLeft||Ve.ShiftRight||Tr;let n=null;if(_r>5&&(nn==="SEEK"||nn==="RISING")){let s=1/0;for(let o=0;o<xi.length;o++){if(xi[o].found)continue;const r=xi[o].x-j.pos.x,a=xi[o].z-j.pos.z,l=r*r+a*a;l<s&&(s=l,n=xi[o])}}for(let s=0;s<vl.length;s++){const o=vl[s],r=t*.5+o.phase+s/rm*6.28,a=e?4+s*2:1.5+s*.8,l=e?3+s:1.2+Math.sin(t*.7+o.phase)*.5;if(o.targetX=j.pos.x+Math.cos(r)*a,o.targetY=j.pos.y-bl+l,o.targetZ=j.pos.z+Math.sin(r)*a,s===0&&n){const g=Math.min((_r-5)/3,.6);o.targetX+=(n.x-j.pos.x)*g,o.targetZ+=(n.z-j.pos.z)*g,o.targetY+=.5}const u=e?.8:2.5;o.velX+=(o.targetX-o.group.position.x)*u*i,o.velY+=(o.targetY-o.group.position.y)*u*i,o.velZ+=(o.targetZ-o.group.position.z)*u*i,o.velX*=.92,o.velY*=.92,o.velZ*=.92,o.group.position.x+=o.velX*i*4,o.group.position.y+=o.velY*i*4,o.group.position.z+=o.velZ*i*4;const c=Math.sin(t*2+o.phase)*.5+.5;o.glowMat.opacity=.3+c*.4,o.hazeMat.opacity=.08+c*.12;const p=t*(2.5+s*.5)+o.phase,f=.14+Math.sin(t*1.3+o.phase)*.06;o.group.children[5].position.set(Math.cos(p)*f,Math.sin(p*1.5)*.08,Math.sin(p)*f);for(let g=0;g<o.tendrils.length;g++){const x=o.tendrils[g],h=Math.sin(t*3+g*2.1+o.phase)*.3,m=.08+Math.sin(t*2+g*1.5)*.04;x.mesh.position.x=Math.cos(x.baseAng+h)*m,x.mesh.position.z=Math.sin(x.baseAng+h)*m,x.mesh.rotation.y=x.baseAng+h,x.mesh.rotation.z=Math.PI/3+Math.sin(t*2.5+g)*.2}for(let g=0;g<o.embers.length;g++){const x=(g+1)*.08;o.embers[g].position.y=-.06-x+Math.sin(t*4+g*1.4+o.phase)*.03,o.embers[g].position.x=Math.sin(t*2.5+g*2+o.phase)*.06,o.embers[g].material.opacity=.2+Math.sin(t*5+g*1.7)*.15}o.facet.rotation.y+=i*1.5,o.facet.rotation.x+=i*.7,o.halo.rotation.z+=i*.3,o.halo2.rotation.y+=i*.2}}function ST(i,t){for(let e=0;e<$n.length;e++){const n=$n[e],s=n.x-j.pos.x,o=n.z-j.pos.z,a=s*s+o*o<(Dh+.5)*(Dh+.5),l=a?1:0;n.glowIntensity+=(l-n.glowIntensity)*i*3,n.discMat.opacity=n.glowIntensity*.25*(.6+Math.sin(t*2+n.phase)*.4),n.mushMat.emissiveIntensity=(.2+n.glowIntensity*.8)*Te(n.x,n.z,xe*ye),a&&j.vel.y>0&&j.vel.y<=Qc+.5&&(j.vel.y=Qc+Uw,n.glowIntensity=1.5,Zb());const u=.08+n.glowIntensity*.25;n.sporeMat.opacity=u;for(let c=0;c<n.spores.length;c++){const p=n.spores[c];p.drift+=i*.3,p.mesh.position.y+=p.speed*i*(.5+n.glowIntensity),p.mesh.position.x=p.baseX+Math.sin(t*.8+p.drift)*.15,p.mesh.position.z=p.baseZ+Math.cos(t*.6+p.drift)*.12,p.mesh.position.y>.8&&(p.mesh.position.y=.03),p.mesh.scale.setScalar(.6+Math.sin(t*2+c)*.4)}for(let c=0;c<n.glowWorms.length;c++){const p=Math.sin(t*1.5+c*1.3+n.phase)*.5+.5;n.glowWorms[c].material.opacity=.1+p*.4+n.glowIntensity*.3}}}function bT(i,t){for(let e=0;e<Ci.length;e++){const n=Ci[e];if(n.popped){if(n.popTimer-=i,n.popTimer<=0){n.popped=!1,n.group.visible=!0;const c=M()*6.28,p=8+M()*jt*.5;n.homeX=Math.cos(c)*p,n.homeZ=Math.sin(c)*p,n.floatY=.5+M()*4,n.group.position.set(n.homeX,n.floatY,n.homeZ)}continue}n.driftAng+=i*.2;const s=n.homeX+Math.sin(n.driftAng)*3,o=n.homeZ+Math.cos(n.driftAng*.7)*3;n.group.position.x+=(s-n.group.position.x)*i*.5,n.group.position.z+=(o-n.group.position.z)*i*.5,n.group.position.y=n.floatY+Math.sin(t*.6+n.phase)*n.bobAmp;const r=(t*.1+n.phase)%1;n.shellMat.color.setRGB(Math.sin(r*6.28)*.15+.7,Math.sin(r*6.28+2.09)*.15+.7,Math.sin(r*6.28+4.19)*.15+.8),n.shellMat.opacity=.18+Math.sin(t*1.5+n.phase)*.08;const a=n.group.position.x-j.pos.x,l=n.group.position.y-j.pos.y,u=n.group.position.z-j.pos.z;a*a+l*l+u*u<E0*E0*n.sc*n.sc&&(n.popped=!0,n.popTimer=8+Math.random()*8,n.group.visible=!1,U2(n.group.position.x,n.group.position.y,n.group.position.z,6),kb(n.group.position,j.pos))}}function TT(i,t){const e=ra();for(let n=0;n<Ge.length;n++){const s=Ge[n],o=.015+e*.01;for(let f=0;f<s.pads.length;f++)s.pads[f].mesh.position.y=.05+Math.sin(t*(.8+e*.4)+s.pads[f].phase)*o;const r=e*.08,a=Te(s.x,s.z,xe*ye);s.waterMat.emissiveIntensity=(.15+r+Math.sin(t*1+s.phase)*.1)*a;const l=Math.sin(t*1.2+s.phase)*.5+.5;s.flMat.emissiveIntensity=(.3+l*.5)*a;const u=.25+e*.2,c=.12+e*.08;for(let f=0;f<s.ripples.length;f++){const d=s.ripples[f],g=(t*u+d.phase)%1,x=.2+g*s.pondR*.8;d.mesh.scale.setScalar(x),d.mesh.material.opacity=(1-g)*c}const p=1+e*.5;for(let f=0;f<s.tadpoles.length;f++){const d=s.tadpoles[f];d.ang+=d.speed*p*i;const g=Math.cos(d.ang)*d.orbR,x=Math.sin(d.ang)*d.orbR;d.body.position.x=g,d.body.position.z=x,d.body.rotation.y=d.ang+Math.PI/2;const h=.02;d.tail.position.x=g-Math.cos(d.ang)*h,d.tail.position.z=x-Math.sin(d.ang)*h,d.tail.rotation.y=d.ang,d.tail.rotation.z=Math.PI/2+Math.sin(t*(8+e*2)+f*3)*.4}}}function ET(i,t){if(Gu-=i,Gu<=0){Gu=.5;for(let o=0;o<ae.length;o++){const r=ae[o],a=r.x-j.pos.x,l=r.z-j.pos.z;if(a*a+l*l<36){ri={x:r.x,z:r.z},Ei=0;break}}}const e=_T();if(!ri){e.visible=!1;return}if(Ei+=i*12,Ei>30){ri=null,Ei=0,e.visible=!1;return}e.visible=!0,e.position.set(ri.x,.15,ri.z),e.scale.setScalar(Ei),e.material.opacity=(1-Ei/30)*.45;const n=Ei,s=4;for(let o=0;o<On.length;o++){const r=On[o],a=r.x-ri.x,l=r.z-ri.z,u=Math.sqrt(a*a+l*l);if(Math.abs(u-n)<s){const c=1-Math.abs(u-n)/s;r.capMat.emissiveIntensity=Math.max(r.capMat.emissiveIntensity,(r.base+c*2)*Te(r.x,r.z,xe*ye))}}for(let o=0;o<Di.length;o++){const r=Di[o],a=r.group.position.x-ri.x,l=r.group.position.z-ri.z,u=Math.sqrt(a*a+l*l);if(Math.abs(u-n)<s){const c=1-Math.abs(u-n)/s;r.petalMat.emissiveIntensity=Math.max(r.petalMat.emissiveIntensity,(.3+c*1.5)*Te(r.group.position.x,r.group.position.z,xe*ye))}}}function AT(i,t){const e=j.pos.x;j.pos.y;const n=j.pos.z,s=ra(),o=os?.6:s>.3?s*.4:0;for(let u=0;u<Di.length;u++){const c=Di[u],p=c.group.position.x,f=c.group.position.z,d=p-e,g=f-n,h=d*d+g*g<16?1:0;c._react=c._react||0,c._react+=(h-c._react)*i*(h>0?4:1.5);const m=(1+c._react*.15)*(1-o*.12),_=(1+c._react*.05)*(1-o*.15);c.group.scale.set(m,_,m),c.petalMat.emissiveIntensity+=c._react*.6*Te(p,f,xe*ye)*(1-o*.4)}for(let u=0;u<On.length;u++){const c=On[u],p=c.x-e,f=c.z-n,g=p*p+f*f<4?1:0;c._touch=c._touch||0,c._touch+=(g-c._touch)*i*(g>0?6:1.5);const x=s*.4;c.capMat.emissiveIntensity+=(c._touch*1.5+x)*Te(c.x,c.z,xe*ye);const h=1+c._touch*.08;c.group.scale.set(h,1+c._touch*.04,h)}for(let u=0;u<ya.length;u++){const c=ya[u],p=c.group.position.x,f=c.group.position.z,d=p-e,g=f-n,h=d*d+g*g<2.25?.65:1;c._curl=c._curl===void 0?1:c._curl,c._curl+=(h-c._curl)*i*(h<1?4:1.5),c.group.scale.set(1+(1-c._curl)*.3,c._curl,1+(1-c._curl)*.3)}MT();const r=rr==="FOG_BANK"?.5:1;let a=0,l=0;for(let u=0;u<ae.length;u++){const c=ae[u],p=c.x-e,f=c.z-n;if(p*p+f*f<36)for(let d=0;d<ae.length;d++){if(u===d)continue;const g=ae[d],x=c.x-g.x,h=c.z-g.z,m=x*x+h*h;if(m<400){a++;const _=(1-Math.sqrt(m)/20)*.8*r;if(g.mat.emissiveIntensity+=_*Te(g.x,g.z,xe*ye),l<Ef){const v=Af[l],y=v.geo.attributes.position.array,A=1,E=1;y[0]=c.x,y[1]=A,y[2]=c.z,y[3]=g.x,y[4]=E,y[5]=g.z,v.geo.attributes.position.needsUpdate=!0,v.geo.computeBoundingSphere(),v.active=!0;const b=Math.sin(t*3+u*1.5+d*.7)*.3+.5;v.opacity=_*b*Te(c.x,c.z,xe*ye),v.line.material.opacity=v.opacity,v.line.visible=!0,l++}}}}for(let u=l;u<Ef;u++){const c=Af[u];c.line.visible&&(c.opacity*=.85,c.line.material.opacity=c.opacity,c.opacity<.01&&(c.line.visible=!1))}return a}let _c="EXPLORE",ku=0,Hu=0;function RT(i,t){let e=!1;for(let x=0;x<ae.length;x++){const h=ae[x].x-j.pos.x,m=ae[x].z-j.pos.z;if(h*h+m*m<64){e=!0;break}}_c=e?"NEAR_CRYSTAL":"EXPLORE",ku+=i;const n=ra(),s=Math.max(.2,1-n*.8),o=(_c==="NEAR_CRYSTAL"?.08:.25)/s,r=Math.floor((_c==="NEAR_CRYSTAL"?120:100)*s);if(ku>o&&(ku=0,Lm(0,t)<r))if(_c==="NEAR_CRYSTAL")for(let h=0;h<ae.length;h++){const m=ae[h].x-j.pos.x,_=ae[h].z-j.pos.z;m*m+_*_<100&&Cc(ae[h].x,Dt(ae[h].x,ae[h].z)+1,ae[h].z,3+Math.random()*4)}else if(Math.random()<.3&&Di.length>0){const h=Di[Math.floor(Math.random()*Di.length)];if(h._react>.3){const m=h.group.position.x,_=h.group.position.z;Cc(m+(Math.random()-.5)*2,Dt(m,_)+.5,_+(Math.random()-.5)*2,4+Math.random()*6)}}else{const h=Math.random()*6.28,m=5+Math.random()*25,_=j.pos.x+Math.cos(h)*m,v=j.pos.z+Math.sin(h)*m;Cc(_,Dt(_,v),v,6+Math.random()*10)}if(Hu+=i,Hu>.2){Hu=0;for(let x=0;x<On.length;x++){const h=On[x],m=h.x-j.pos.x,_=h.z-j.pos.z;m*m+_*_<200&&Math.random()<.15&&T2(h.x,.6*h.group.scale.x,h.z)}}for(let x=0;x<On.length;x++){const h=On[x],m=h.x-j.pos.x,_=(h.group.position.y||0)-j.pos.y,v=h.z-j.pos.z;if(m*m+_*_+v*v>2500){h.group.visible&&(h.group.visible=!1);continue}h.group.visible||(h.group.visible=!0);const A=Math.sin(t*h.speed+h.phase)*.5+.5;h.capMat.emissiveIntensity=h.base*(.7+A*1)*Te(h.x,h.z,xe*ye)}for(let x=0;x<ae.length;x++){const h=ae[x],m=Math.sin(t*.6+h.phase)*.5+.5,_=Te(h.x,h.z,xe*ye);h.mat.emissiveIntensity=(1+m*1.5)*_,h.group.children[0].rotation.y+=i*.15,h.light&&(h.light.intensity=(.3+m*.4)*_)}if(!ds.length)for(let x=0;x<ae.length;x++)ds.push({idx:x,dist:0});const a=j.pos.x-hp,l=j.pos.z-fp;if(a*a+l*l>1){hp=j.pos.x,fp=j.pos.z;for(let x=0;x<ae.length;x++){const h=ae[x],m=h.x-j.pos.x,_=h.z-j.pos.z;ds[x].idx=x,ds[x].dist=m*m+_*_}ds.sort((x,h)=>x.dist-h.dist)}for(let x=0;x<Bs.length;x++)if(x<ds.length&&ds[x].dist<2500){const h=ae[ds[x].idx],m=Math.sin(t*.6+h.phase)*.5+.5;Bs[x].position.set(h.x,1.5,h.z),Bs[x].intensity=(1.5+m*2)*Te(h.x,h.z,xe*ye),Bs[x].distance=16,Bs[x].color.setHex(N.crystal)}else Bs[x].intensity=0;if(is>.8&&Math.random()<.005)for(let x=0;x<ca.length;x++){const h=ca[x];if(!h.dispersed&&Math.random()<.1){h.dispersed=!0;for(let m=0;m<8;m++)ym(h.x,h.h+.05,h.z);for(let m=2;m<h.group.children.length;m++)h.group.children[m].visible=!1;h.regrowTimer=15+Math.random()*10}}const u=is>.3?(is-.3)*.02:0,c=os?.03:0;if(Math.random()<u+c)for(let x=0;x<Xt.length;x++){const h=Xt[x],m=h.x-j.pos.x,_=h.z-j.pos.z;if(m*m+_*_<900&&Math.random()<.15){const v=(h.treeH||10)*.7+(h.y||0);O2(h.x,v,h.z);break}}fg(i,t),dg(i,t),pg(i,t),mg(i,t),vm(i,t),hg(i,t);const p=j.pos.x,f=j.pos.y,d=j.pos.z;for(let x=0;x<mi.length;x++){const h=mi[x],m=h.x||h.group.position.x,_=h.z||h.group.position.z,v=m-p,y=(h.group.position.y||0)-f,A=_-d,E=v*v+y*y+A*A;if(E>2500){h.group.visible&&(h.group.visible=!1);continue}if(h.group.visible||(h.group.visible=!0),!h.sparkles||E>400)continue;let b=0;for(let D=0;D<ae.length;D++){const z=ae[D].x-m,H=ae[D].z-_,k=z*z+H*H;k<100&&(b=Math.max(b,(1-Math.sqrt(k)/10)*.6))}const T=m-j.pos.x,w=_-j.pos.z,S=T*T+w*w,R=S<25?(1-Math.sqrt(S)/5)*.3:0;let L=0;if(ri&&Ei>0){const D=m-ri.x,z=_-ri.z,H=Math.sqrt(D*D+z*z);Math.abs(H-Ei)<3&&(L=(1-Math.abs(H-Ei)/3)*.8)}for(let D=0;D<h.sparkles.length;D++){const z=Math.sin(t*4+x*2.3+D*1.7)*.35;h.sparkles[D].material.opacity=.15+z+b+R+L}h.mossMat&&R>0&&(h.mossMat.emissiveIntensity=.05+R*.4*Math.sin(t*2+x)*.5+.5)}wT(i,t),kS(ca,i,t,j.pos),ST(i,t),bT(i,t),TT(i,t),zm(i,t,j.pos),BS(i,t),B2(i,t),I2(i),N2(i),ET(i);const g=AT(i,t);if(tb(i,t),y2(t),j.onGround&&j.vel.x*j.vel.x+j.vel.z*j.vel.z>.5){const h=Math.atan2(j.vel.x,j.vel.z),m=Ve.ShiftLeft||Ve.ShiftRight||Tr;H2(j.pos.x,j.pos.z,h,m)}V2(i,ra()),Kb(i,j.pos,Ge,ag,We,ra()),Gb(i),uT(j.pos,Je,Vn,gi,yr,$n,Ge,g),hT(i)}let Ke=0,Rf=!1;function CT(){Rf||(Rf=!0,jw(!0),vT())}function gg(){requestAnimationFrame(gg);const i=Math.min(am.getDelta(),.1);Ke+=i,ob(i);const t=hb(i,Ke,j.pos);db(i,j.pos,t,Js,Yo),mS(i,Ke,We,xe,rr),aT(i),ye=1.15+gs*.05;const e=Te(j.pos.x,j.pos.z,1),n=Ko+(1-Ko)*(gs/qn),s=e*.7+n*.3;la+=(s-la)*Math.min(8*i,1);const o=la;if(Yw(o),sn.toneMappingExposure=.7+2.1*o,o<1){const a=1-o;ot.fog.density*=1+1.5*a,nl.intensity*=.15+.85*o,ga.intensity*=.1+.9*o,ga.distance*=.25+.75*o,Ho&&(Ho.threshold=.85+a*.35)}else Ho&&(Ho.threshold=.85);Ri>0&&(nl.intensity+=Ri*.8,ot.background.r=Math.min(ot.background.r+Ri*.08,.25),ot.background.g=Math.min(ot.background.g+Ri*.08,.25),ot.background.b=Math.min(ot.background.b+Ri*.12,.35)),Nb(i,is,t,os,Ri,We,j.pos,Ge),qb(j.pos),Math.sqrt(j.vel.x*j.vel.x+j.vel.z*j.vel.z);let r=!1;for(let a=0;a<Ge.length;a++){const l=Ge[a].x-j.pos.x,u=Ge[a].z-j.pos.z;if(l*l+u*u<225){r=!0;break}}if(!r)for(let a=0;a<$n.length;a++){const l=$n[a].x-j.pos.x,u=$n[a].z-j.pos.z;if(l*l+u*u<144){r=!0;break}}if(Qb(i),E2(Js,Yo),OS(Js,Yo,is),z2(Js,Yo),!Rf){bn.position.set(0,bl,0),bn.rotation.order="YXZ",bn.rotation.y+=i*.08,bn.rotation.x=0;for(let a=0;a<On.length;a++){const l=On[a],u=Math.sin(Ke*l.speed+l.phase)*.5+.5;l.capMat.emissiveIntensity=l.base*(.5+u*.8)*xe}for(let a=0;a<ae.length;a++){const l=ae[a];l.mat.emissiveIntensity=(1+Math.sin(Ke*.6+l.phase)*.5*1.5+.75)*xe}fg(i,Ke),dg(i,Ke),pg(i,Ke),mg(i,Ke),vm(i,Ke),hg(i,Ke),zm(i,Ke,j.pos);for(let a=0;a<Ci.length;a++)Ci[a].popped||(Ci[a].group.position.y=Ci[a].floatY+Math.sin(Ke*.6+Ci[a].phase)*Ci[a].bobAmp);for(let a=0;a<Ge.length;a++)for(let l=0;l<Ge[a].pads.length;l++)Ge[a].pads[l].mesh.position.y=.05+Math.sin(Ke*.8+Ge[a].pads[l].phase)*.015;for(let a=0;a<xi.length;a++){const l=xi[a],u=Math.sin(Ke*1.5+l.phase)*.5+.5;l.group.position.y=l.flyY+Math.sin(Ke*.8+l.phase)*.3,l.glowMat.opacity=.3+u*.4}C0();return}MS(i),RT(i,Ke),Lm(i,Ke),A2(i),bn.position.copy(j.pos),bn.position.y+=Mm,bn.rotation.order="YXZ",bn.rotation.y=xa,bn.rotation.x=to,mT(i,j.pos),C0()}try{Bh(0,0,5),cS(),sb({scene:ot,moon:li,moon2:Jf,hemiLight:nl,playerLight:ga}),yT();const i=oS();xS(Xt,mi),vS(Z0),gS(t=>{let e=!1;for(let n=0;n<Ge.length;n++){const s=Ge[n].x-j.pos.x,o=Ge[n].z-j.pos.z;if(s*s+o*o<16){e=!0;break}}Fb(t,e),Math.random()<.4&&Z0(j.pos.x,j.pos.z,1)},()=>Ob(),t=>Bb(t)),ub(),fb(),w2(150),b2(60),Zw(),R2(Sw),P2(20),FS(40),D2(30),F2(50),k2(),pS(),g2(),M2(),_2(),Ub(),lT(),pT(),gT(),oT(xi),Q2({orbs:xi,obeliskGroup:h2(),obeliskMat:f2(),obeliskGlowMat:d2(),pinnacleOrb:p2(),pinnacleRings:m2(),moatMesh:x2(),moatMat:v2(),rainbowArcs:_a,player:j,makeLaser:X2,orbHudEl:xT(),deers:Je,puffs:Vn,jellies:gi,moths:yr,trees:Xt,treeMeshes:Ss,groundMesh:i,playOrbCollect:Hb,playOrbWarble:Vb,playLaserZap:Wb,playLaserHum:Xb,stopLaserHums:Yb,notifyOrbCollected:rT}),$w(CT);for(let t=0;t<50;t++){const e=Math.random()*6.28,n=3+Math.random()*jt*.7,s=Math.cos(e)*n,o=Math.sin(e)*n;Cc(s,Dt(s,o),o,8+Math.random()*12)}console.log("✓ Init: trees="+Xt.length+" mush="+On.length+" crystals="+ae.length+" orbs="+xi.length+" creatures="+(gi.length+Vn.length+Je.length+yr.length)+" wisps="+vl.length+" dandelions="+ca.length+" fairyRings="+$n.length+" bubbles="+Ci.length+" ponds="+Ge.length+" scene="+ot.children.length),gg()}catch(i){console.error("INIT FAILED:",i),document.body.innerHTML='<div style="color:red;padding:30px;font-family:monospace"><h2>Init Failed</h2><pre>'+(i.stack||i.message)+"</pre></div>"}
